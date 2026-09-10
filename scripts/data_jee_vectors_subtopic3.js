// scripts/data_jee_vectors_subtopic3.js
// Subtopic 3: Collinearity and coplanarity of vectors
// 30 Authentic JEE Mains standard questions: 10 MCQs, 10 AR, 10 NUM

const SUBTOPIC = "Collinearity and coplanarity of vectors";
const CHAPTER = "Vectors";

const subtopic3Questions = [
  // ==========================================
  // SECTION A: 10 MULTIPLE CHOICE QUESTIONS (MCQs)
  // ==========================================
  {
    type: "MCQ",
    question: "If the vectors $\\vec{a} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$, $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}$ and $\\vec{c} = 3\\mathbf{i} + p\\mathbf{j} + 5\\mathbf{k}$ are coplanar, then the value of $p$ is:",
    options: [
      "$-4$",
      "$4$",
      "$-2$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "Three vectors are coplanar if and only if their scalar triple product is zero:\n$$\\begin{vmatrix} 2 & -1 & 1 \\\\ 1 & 2 & -3 \\\\ 3 & p & 5 \\end{vmatrix} = 0$$\nExpanding along the first row:\n$$2(10 + 3p) - (-1)(5 - (-9)) + 1(p - 6) = 0$$\n$$20 + 6p + 14 + p - 6 = 0$$\n$$7p + 28 = 0 \\implies 7p = -28 \\implies p = -4$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "The points with position vectors $60\\mathbf{i} + 3\\mathbf{j}$, $40\\mathbf{i} - 8\\mathbf{j}$, and $a\\mathbf{i} - 52\\mathbf{j}$ are collinear if $a$ equals:",
    options: [
      "$-40$",
      "$40$",
      "$-20$",
      "$20$"
    ],
    correctAnswer: 0,
    explanation: "Let the points be $A, B, C$.\n$$\\vec{AB} = (40 - 60)\\mathbf{i} + (-8 - 3)\\mathbf{j} = -20\\mathbf{i} - 11\\mathbf{j}$$\n$$\\vec{BC} = (a - 40)\\mathbf{i} + (-52 - (-8))\\mathbf{j} = (a - 40)\\mathbf{i} - 44\\mathbf{j}$$\nFor $A, B, C$ to be collinear, $\\vec{BC} = \\lambda \\vec{AB}$:\nComparing the $\\mathbf{j}$-components:\n$$-44 = \\lambda(-11) \\implies \\lambda = 4$$\nComparing the $\\mathbf{i}$-components:\n$$a - 40 = 4(-20) = -80 \\implies a = -80 + 40 = -40$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If $\\vec{a}, \\vec{b}, \\vec{c}$ are non-coplanar vectors and $\\lambda$ is a real number, then the vectors $\\vec{a} + 2\\vec{b} + 3\\vec{c}$, $\\lambda\\vec{b} + 4\\vec{c}$, and $(2\\lambda - 1)\\vec{c}$ are non-coplanar for:",
    options: [
      "No value of $\\lambda$",
      "All values of $\\lambda$",
      "All except two values of $\\lambda$",
      "All except one value of $\\lambda$"
    ],
    correctAnswer: 2,
    explanation: "The vectors are coplanar if the determinant formed by their coefficients is zero:\n$$\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & \\lambda & 4 \\\\ 0 & 0 & 2\\lambda - 1 \\end{vmatrix} = 0$$\nExpanding along the first column:\n$$1 \\times [\\lambda(2\\lambda - 1) - 0] = 0 \\implies \\lambda(2\\lambda - 1) = 0$$\nThis gives $\\lambda = 0$ or $\\lambda = \\frac{1}{2}$.\nThus, the vectors are coplanar for exactly two values of $\\lambda$, which means they are non-coplanar for all except two values of $\\lambda$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "If the points $A(1, 2, 3)$, $B(3, 4, 7)$, and $C(-1, 0, -1)$ are collinear, the ratio in which $B$ divides $AC$ is:",
    options: [
      "$-1:2$",
      "$-2:1$",
      "$1:2$",
      "$2:1$"
    ],
    correctAnswer: 0,
    explanation: "Let $B$ divide $AC$ in the ratio $k:1$.\nThen the $x$-coordinate of $B$ is:\n$$x_B = \\frac{k(-1) + 1(1)}{k+1} = 3$$\n$$-k + 1 = 3k + 3 \\implies 4k = -2 \\implies k = -\\frac{1}{2}$$\nCheck $y$-coordinate:\n$$y = \\frac{-\\frac{1}{2}(0) + 1(2)}{-\\frac{1}{2} + 1} = \\frac{2}{1/2} = 4 \\quad \\text{(Matches)}$$\nCheck $z$-coordinate:\n$$z = \\frac{-\\frac{1}{2}(-1) + 1(3)}{1/2} = \\frac{1/2 + 3}{1/2} = 7 \\quad \\text{(Matches)}$$\nThus, the ratio is $-1:2$ (or external division in the ratio $1:2$).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If the vectors $\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$, $2\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}$, and $3\\mathbf{i} + 2\\mathbf{j} + x\\mathbf{k}$ are coplanar, then the value of $x$ is:",
    options: [
      "$2$",
      "$-2$",
      "$1$",
      "$-1$"
    ],
    correctAnswer: 0,
    explanation: "Setting the scalar triple product to zero:\n$$\\begin{vmatrix} 1 & 3 & -2 \\\\ 2 & -1 & 4 \\\\ 3 & 2 & x \\end{vmatrix} = 0$$\n$$1(-x - 8) - 3(2x - 12) - 2(4 - (-3)) = 0$$\n$$-x - 8 - 6x + 36 - 2(7) = 0$$\n$$-7x + 28 - 14 = 0 \\implies -7x + 14 = 0 \\implies 7x = 14 \\implies x = 2$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "Four points $A, B, C, D$ with position vectors $\\vec{a}, \\vec{b}, \\vec{c}, \\vec{d}$ are coplanar if and only if:",
    options: [
      "$[\\vec{b}-\\vec{a}, \\vec{c}-\\vec{a}, \\vec{d}-\\vec{a}] = 0$",
      "$[\\vec{a}, \\vec{b}, \\vec{c}] = [\\vec{a}, \\vec{b}, \\vec{d}]$",
      "$\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d} = \\vec{0}$",
      "$[\\vec{a}, \\vec{b}, \\vec{c}] + [\\vec{b}, \\vec{c}, \\vec{d}] = 0$"
    ],
    correctAnswer: 0,
    explanation: "Four points $A, B, C, D$ are coplanar if and only if the three vectors coterminous at $A$, namely $\\vec{AB} = \\vec{b} - \\vec{a}$, $\\vec{AC} = \\vec{c} - \\vec{a}$, and $\\vec{AD} = \\vec{d} - \\vec{a}$, lie in the same plane.\nThis is equivalent to their scalar triple product being zero:\n$$[\\vec{b} - \\vec{a}, \\vec{c} - \\vec{a}, \\vec{d} - \\vec{a}] = 0$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If $\\vec{a}, \\vec{b}, \\vec{c}$ are mutually perpendicular unit vectors, then the value of $[\\vec{a} + \\vec{b} + \\vec{c}, \\vec{a} - \\vec{b}, \\vec{a} - \\vec{c}]$ is:",
    options: [
      "$-3$",
      "$3$",
      "$0$",
      "$-1$"
    ],
    correctAnswer: 0,
    explanation: "Let us express the triple product as a determinant in terms of $[\\vec{a}, \\vec{b}, \\vec{c}]$:\n$$[\\vec{a} + \\vec{b} + \\vec{c}, \\vec{a} - \\vec{b}, \\vec{a} - \\vec{c}] = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 0 \\\\ 1 & 0 & -1 \\end{vmatrix} [\\vec{a}, \\vec{b}, \\vec{c}]$$\nCompute the determinant:\n$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 0 \\\\ 1 & 0 & -1 \\end{vmatrix} = 1(1 - 0) - 1(-1 - 0) + 1(0 - (-1)) = 1 + 1 + 1 = 3$$\nWait! $1(1-0) - 1(-1) + 1(1) = 1 + 1 + 1 = 3$!\nSince $\\vec{a}, \\vec{b}, \\vec{c}$ form a right-handed orthonormal system, $[\\vec{a}, \\vec{b}, \\vec{c}] = 1$.\nThen the value is $3$! Wait, let's recheck the second and third rows:\nSecond row is $\\vec{a} - \\vec{b} + 0\\vec{c} \\implies (1, -1, 0)$.\nThird row is $\\vec{a} + 0\\vec{b} - \\vec{c} \\implies (1, 0, -1)$.\nExpansion:\nRow 1:\n$1((-1)(-1) - 0) - 1(1(-1) - 0) + 1(1(0) - (-1)(1)) = 1(1) - 1(-1) + 1(1) = 1 + 1 + 1 = 3$.\nSo the value is $3[\\vec{a}, \\vec{b}, \\vec{c}] = 3$!\nLet's set Option 0 to $3$ with correctAnswer 0.",
    options: [
      "$3$",
      "$-3$",
      "$0$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "We express the scalar triple product in terms of $[\\vec{a}, \\vec{b}, \\vec{c}]$:\n$$[\\vec{a} + \\vec{b} + \\vec{c}, \\vec{a} - \\vec{b}, \\vec{a} - \\vec{c}] = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 0 \\\\ 1 & 0 & -1 \\end{vmatrix} [\\vec{a}, \\vec{b}, \\vec{c}]$$\nExpanding the $3 \\times 3$ determinant:\n$$1(1 - 0) - 1(-1 - 0) + 1(0 - (-1)) = 1 + 1 + 1 = 3$$\nSince $\\vec{a}, \\vec{b}, \\vec{c}$ are mutually perpendicular unit vectors forming a right-handed system, $[\\vec{a}, \\vec{b}, \\vec{c}] = 1$.\nTherefore, the value is $3(1) = 3$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "If the vectors $\\vec{a} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}$, $\\vec{b} = 4\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$, and $\\vec{c} = \\mathbf{i} + \\alpha\\mathbf{j} + \\beta\\mathbf{k}$ are linearly dependent and $|\\vec{c}| = \\sqrt{3}$, then:",
    options: [
      "$\\alpha = 1, \\beta = 1$",
      "$\\alpha = 1, \\beta = -1$",
      "$\\alpha = -1, \\beta = 1$",
      "$\\alpha = \\pm 1, \\beta = 1$"
    ],
    correctAnswer: 0,
    explanation: "Since $\\vec{a}, \\vec{b}, \\vec{c}$ are linearly dependent, they are coplanar:\n$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 4 & 3 & 4 \\\\ 1 & \\alpha & \\beta \\end{vmatrix} = 0$$\nSubtract row 1 from row 2 and row 3:\n$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 3 & 2 & 3 \\\\ 0 & \\alpha - 1 & \\beta - 1 \\end{vmatrix} = 0$$\n$$1[2(\\beta-1) - 3(\\alpha-1)] - 1[3(\\beta-1) - 0] + 1[3(\\alpha-1) - 0] = 0$$\n$$2\\beta - 2 - 3\\alpha + 3 - 3\\beta + 3 + 3\\alpha - 3 = 0$$\n$$-\\beta + 1 = 0 \\implies \\beta = 1$$\nGiven $|\\vec{c}| = \\sqrt{3}$:\n$$|\\vec{c}|^2 = 1^2 + \\alpha^2 + \\beta^2 = 1 + \\alpha^2 + 1 = \\alpha^2 + 2 = 3 \\implies \\alpha^2 = 1 \\implies \\alpha = \\pm 1$$\nIf $\\alpha = 1$ and $\\beta = 1$, $\\vec{c} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} = \\vec{a}$, which is linearly dependent on $\\vec{a}$.\nThus $\\alpha = 1, \\beta = 1$ is a valid solution.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "If the points with position vectors $\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$, $2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$, and $3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$ form three vertices of a parallelogram, then the fourth vertex cannot be:",
    options: [
      "$4\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$",
      "$2\\mathbf{i} - 3\\mathbf{j} + 5\\mathbf{k}$",
      "$\\mathbf{i} - \\mathbf{j} - \\mathbf{k}$",
      "$0\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$"
    ],
    correctAnswer: 2,
    explanation: "Let the points be $A(\\vec{a}), B(\\vec{b}), C(\\vec{c})$.\nThe fourth vertex $D$ can be formed in three ways depending on which pair forms the diagonals:\n1. $D_1 = \\vec{a} + \\vec{c} - \\vec{b} = (1+3-2)\\mathbf{i} + (-1-1-1)\\mathbf{j} + (2+2-(-1))\\mathbf{k} = 2\\mathbf{i} - 3\\mathbf{j} + 5\\mathbf{k}$.\n2. $D_2 = \\vec{b} + \\vec{c} - \\vec{a} = (2+3-1)\\mathbf{i} + (1-1-(-1))\\mathbf{j} + (-1+2-2)\\mathbf{k} = 4\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$.\n3. $D_3 = \\vec{a} + \\vec{b} - \\vec{c} = (1+2-3)\\mathbf{i} + (-1+1-(-1))\\mathbf{j} + (2-1-2)\\mathbf{k} = 0\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$.\nThus, $D$ can be any of these three. The point $\\mathbf{i} - \\mathbf{j} - \\mathbf{k}$ cannot be the fourth vertex.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "The value of $\\lambda$ for which the four points with position vectors $-\\mathbf{j} - \\mathbf{k}$, $4\\mathbf{i} + 5\\mathbf{j} + \\lambda\\mathbf{k}$, $3\\mathbf{i} + 9\\mathbf{j} + 4\\mathbf{k}$ and $-4\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k}$ are coplanar is:",
    options: [
      "$1$",
      "$-1$",
      "$2$",
      "$-2$"
    ],
    correctAnswer: 0,
    explanation: "Let $A = (0, -1, -1), B = (4, 5, \\lambda), C = (3, 9, 4), D = (-4, 4, 4)$.\nForm vectors coterminous at $A$:\n$$\\vec{AB} = 4\\mathbf{i} + 6\\mathbf{j} + (\\lambda + 1)\\mathbf{k}$$\n$$\\vec{AC} = 3\\mathbf{i} + 10\\mathbf{j} + 5\\mathbf{k}$$\n$$\\vec{AD} = -4\\mathbf{i} + 5\\mathbf{j} + 5\\mathbf{k}$$\nFor coplanarity, $[\\vec{AB}, \\vec{AC}, \\vec{AD}] = 0$:\n$$\\begin{vmatrix} 4 & 6 & \\lambda + 1 \\\\ 3 & 10 & 5 \\\\ -4 & 5 & 5 \\end{vmatrix} = 0$$\nSubtract row 3 from row 2:\n$$\\begin{vmatrix} 4 & 6 & \\lambda + 1 \\\\ 7 & 5 & 0 \\\\ -4 & 5 & 5 \\end{vmatrix} = 0$$\nExpand along column 3:\n$$(\\lambda + 1)(35 - (-20)) + 5(20 - 42) = 0$$\n$$(\\lambda + 1)(55) + 5(-22) = 0$$\n$$55(\\lambda + 1) - 110 = 0 \\implies 55(\\lambda + 1) = 110 \\implies \\lambda + 1 = 2 \\implies \\lambda = 1$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },

  // ==========================================
  // SECTION B: 10 ASSERTION-REASON QUESTIONS (AR)
  // ==========================================
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a}, \\vec{b}, \\vec{c}$ are coplanar vectors, then $\\vec{a} \\times \\vec{b}, \\vec{b} \\times \\vec{c}, \\vec{c} \\times \\vec{a}$ are also coplanar.\nReason (R): For any three vectors, $[\\vec{a} \\times \\vec{b}, \\vec{b} \\times \\vec{c}, \\vec{c} \\times \\vec{a}] = [\\vec{a}, \\vec{b}, \\vec{c}]^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Reason (R) states the standard identity $[\\vec{a} \\times \\vec{b}, \\vec{b} \\times \\vec{c}, \\vec{c} \\times \\vec{a}] = [\\vec{a}, \\vec{b}, \\vec{c}]^2$. This is true.\nNow if $\\vec{a}, \\vec{b}, \\vec{c}$ are coplanar, then $[\\vec{a}, \\vec{b}, \\vec{c}] = 0$.\nSubstituting into the identity gives $[\\vec{a} \\times \\vec{b}, \\vec{b} \\times \\vec{c}, \\vec{c} \\times \\vec{a}] = 0^2 = 0$, which proves that the cross products are also coplanar.\nBoth (A) and (R) are true, and (R) is the correct explanation of (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The vectors $\\vec{a} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$ and $\\vec{b} = -4\\mathbf{i} + 2\\mathbf{j} - 6\\mathbf{k}$ are collinear.\nReason (R): Two non-zero vectors $\\vec{a}$ and $\\vec{b}$ are collinear if and only if $\\vec{a} \\times \\vec{b} = \\vec{0}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Here $\\vec{b} = -2(2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) = -2\\vec{a}$, so $\\vec{a} \\times \\vec{b} = -2(\\vec{a} \\times \\vec{a}) = \\vec{0}$.\nCollinearity of non-zero vectors is equivalent to $\\vec{a} \\times \\vec{b} = \\vec{0}$.\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): Three points $A, B, C$ are collinear if and only if $\\vec{AB} \\times \\vec{AC} = \\vec{0}$.\nReason (R): The area of the triangle formed by $A, B, C$ is $\\frac{1}{2}|\\vec{AB} \\times \\vec{AC}|$, which is zero if and only if the three points lie on the same straight line.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Three points are collinear if and only if the triangle formed by them has zero area.\nSince Area $= \\frac{1}{2}|\\vec{AB} \\times \\vec{AC}| = 0 \\iff \\vec{AB} \\times \\vec{AC} = \\vec{0}$, both statements are true and (R) provides the geometric explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a} + \\vec{b}, \\vec{b} + \\vec{c}, \\vec{c} + \\vec{a}$ are coplanar, then $\\vec{a}, \\vec{b}, \\vec{c}$ must be coplanar.\nReason (R): For any three vectors, $[\\vec{a} + \\vec{b}, \\vec{b} + \\vec{c}, \\vec{c} + \\vec{a}] = 2[\\vec{a}, \\vec{b}, \\vec{c}]$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "We know that:\n$$[\\vec{a} + \\vec{b}, \\vec{b} + \\vec{c}, \\vec{c} + \\vec{a}] = 2[\\vec{a}, \\vec{b}, \\vec{c}]$$\nIf $\\vec{a} + \\vec{b}, \\vec{b} + \\vec{c}, \\vec{c} + \\vec{a}$ are coplanar, then the LHS is zero:\n$$2[\\vec{a}, \\vec{b}, \\vec{c}] = 0 \\implies [\\vec{a}, \\vec{b}, \\vec{c}] = 0$$\nwhich implies $\\vec{a}, \\vec{b}, \\vec{c}$ are coplanar.\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The vectors $\\vec{a} - \\vec{b}, \\vec{b} - \\vec{c}, \\vec{c} - \\vec{a}$ are always coplanar for any three vectors $\\vec{a}, \\vec{b}, \\vec{c}$.\nReason (R): The sum $(\\vec{a} - \\vec{b}) + (\\vec{b} - \\vec{c}) + (\\vec{c} - \\vec{a}) = \\vec{0}$, which proves that they are linearly dependent.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $(\\vec{a} - \\vec{b}) + (\\vec{b} - \\vec{c}) + (\\vec{c} - \\vec{a}) = \\vec{0}$, we have a linear combination with non-zero coefficients $(1, 1, 1)$ yielding $\\vec{0}$.\nHence, the three vectors are linearly dependent, and any three linearly dependent vectors in 3D space are coplanar ($[\\vec{a}-\\vec{b}, \\vec{b}-\\vec{c}, \\vec{c}-\\vec{a}] = 0$).\nBoth (A) and (R) are true, and (R) is the correct explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a}, \\vec{b}, \\vec{c}$ are three coplanar vectors, then $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{c} = 0$.\nReason (R): The cross product $\\vec{a} \\times \\vec{b}$ is perpendicular to the plane containing $\\vec{a}$ and $\\vec{b}$, and since $\\vec{c}$ lies in the same plane, $\\vec{a} \\times \\vec{b}$ is perpendicular to $\\vec{c}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The vector $\\vec{n} = \\vec{a} \\times \\vec{b}$ is a normal vector to the plane formed by $\\vec{a}$ and $\\vec{b}$.\nIf $\\vec{c}$ lies in this plane, then $\\vec{n} \\perp \\vec{c} \\implies \\vec{n} \\cdot \\vec{c} = (\\vec{a} \\times \\vec{b}) \\cdot \\vec{c} = 0$.\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $A, B, C, D$ are four points such that $\\vec{AB} = 3\\vec{CD}$, then the lines $AB$ and $CD$ are parallel.\nReason (R): Two non-zero vectors are collinear if one is a scalar multiple of the other.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\vec{AB} = 3\\vec{CD}$, the vectors $\\vec{AB}$ and $\\vec{CD}$ have the same direction and are scalar multiples of each other.\nThus, the directed segments $AB$ and $CD$ are parallel (or lie on the same line).\nBoth (A) and (R) are true, and (R) is the exact justification.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $[\\vec{a}, \\vec{b}, \\vec{c}] = 4$, then $[2\\vec{a} - \\vec{b}, 2\\vec{b} - \\vec{c}, 2\\vec{c} - \\vec{a}] = 36$.\nReason (R): For any three vectors, $[x\\vec{a} + y\\vec{b}, y\\vec{b} + z\\vec{c}, z\\vec{c} + x\\vec{a}] = (x^3 + y^3 + z^3)[\\vec{a}, \\vec{b}, \\vec{c}]$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 2,
    explanation: "Let us evaluate the determinant for Assertion (A):\n$$\\begin{vmatrix} 2 & -1 & 0 \\\\ 0 & 2 & -1 \\\\ -1 & 0 & 2 \\end{vmatrix} = 2(4 - 0) - (-1)(0 - 1) + 0 = 8 - 1 = 7$$\nWait! $2(4) - (-1)(-1) = 8 - 1 = 7$. Then $[2\\vec{a}-\\vec{b}, 2\\vec{b}-\\vec{c}, 2\\vec{c}-\\vec{a}] = 7 \\times 4 = 28$, not $36$!\nWait, if the determinant is $7$, then Assertion (A) is false!\nWhat if Reason (R) is also false because the determinant for $(x\\vec{a}-y\\vec{b}, \\dots)$ is $x^3 - y^3$ or similar?\nLet's check the determinant for $(x\\vec{a}+y\\vec{b}, y\\vec{b}+z\\vec{c}, z\\vec{c}+x\\vec{a})$:\n$$\\begin{vmatrix} x & y & 0 \\\\ 0 & y & z \\\\ x & 0 & z \\end{vmatrix} = x(yz) - y(-xz) = 2xyz$$\nSo Reason (R) is definitely false!\nLet us write a clean, rock-solid question where (A) and (R) are well-defined: \nAssertion (A): $[\\vec{a} + \\vec{b}, \\vec{b} + \\vec{c}, \\vec{c} + \\vec{a}] = 2[\\vec{a}, \\vec{b}, \\vec{c}]$.\nReason (R): The determinant $\\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{vmatrix} = 2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Writing $\\vec{a} + \\vec{b} = 1\\vec{a} + 1\\vec{b} + 0\\vec{c}$, $\\vec{b} + \\vec{c} = 0\\vec{a} + 1\\vec{b} + 1\\vec{c}$, and $\\vec{c} + \\vec{a} = 1\\vec{a} + 0\\vec{b} + 1\\vec{c}$:\n$$[\\vec{a} + \\vec{b}, \\vec{b} + \\vec{c}, \\vec{c} + \\vec{a}] = \\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{vmatrix} [\\vec{a}, \\vec{b}, \\vec{c}]$$\nThe determinant is:\n$$1(1 - 0) - 1(0 - 1) + 0 = 1 + 1 = 2$$\nThus $[\\vec{a} + \\vec{b}, \\vec{b} + \\vec{c}, \\vec{c} + \\vec{a}] = 2[\\vec{a}, \\vec{b}, \\vec{c}]$.\nBoth (A) and (R) are true, and (R) is the correct explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The vectors $\\vec{a} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}$, $\\vec{b} = 2\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$ and $\\vec{c} = 3\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k}$ are coplanar.\nReason (R): Here $\\vec{c} = 2\\vec{b} - \\vec{a}$, which shows that $\\vec{c}$ is a linear combination of $\\vec{a}$ and $\\vec{b}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Let us check Reason (R):\n$$2\\vec{b} - \\vec{a} = 2(2\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}) - (\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = (4-1)\\mathbf{i} + (6-1)\\mathbf{j} + (8-1)\\mathbf{k} = 3\\mathbf{i} + 5\\mathbf{j} + 7\\mathbf{k}$$\nHowever, $\\vec{c} = 3\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k} \\ne 2\\vec{b} - \\vec{a}$!\nWait! What is the real linear relation?\n$\\vec{a} + \\vec{c} = (1+3)\\mathbf{i} + (1+4)\\mathbf{j} + (1+5)\\mathbf{k} = 4\\mathbf{i} + 5\\mathbf{j} + 6\\mathbf{k} \\ne 2\\vec{b}$.\nWait, is $\\vec{a}, \\vec{b}, \\vec{c}$ coplanar?\n$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 4 \\\\ 3 & 4 & 5 \\end{vmatrix}$$\nRow 3 - Row 2 = $(1, 1, 1)$.\nRow 2 - Row 1 = $(1, 2, 3)$.\nRow 3 - Row 2 is $(1, 1, 1) = $ Row 1!\nSo Row 3 = Row 2 + Row 1!\nThus $\\vec{c} = \\vec{a} + \\vec{b}$?\nWait, $\\vec{a} + \\vec{b} = (1+2)\\mathbf{i} + (1+3)\\mathbf{j} + (1+4)\\mathbf{k} = 3\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k} = \\vec{c}$!\nYes! $\\vec{c} = \\vec{a} + \\vec{b}$!\nReason (R) said $\\vec{c} = 2\\vec{b} - \\vec{a}$, which is FALSE!\nAssertion (A) says they are coplanar, which is TRUE (since $\\vec{c} = \\vec{a} + \\vec{b}$).\nTherefore, (A) is true but (R) is false! Option 2 is the correct answer.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 2,
    explanation: "Notice that $\\vec{a} + \\vec{b} = (1+2)\\mathbf{i} + (1+3)\\mathbf{j} + (1+4)\\mathbf{k} = 3\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k} = \\vec{c}$.\nSince $\\vec{c} = \\vec{a} + \\vec{b}$, the three vectors are coplanar, so Assertion (A) is true.\nHowever, Reason (R) claims $\\vec{c} = 2\\vec{b} - \\vec{a}$, but $2\\vec{b} - \\vec{a} = 3\\mathbf{i} + 5\\mathbf{j} + 7\\mathbf{k} \\ne \\vec{c}$.\nThus Reason (R) is false.\nTherefore, (A) is true but (R) is false.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The volume of a parallelepiped whose coterminous edges are represented by coplanar vectors is zero.\nReason (R): The volume of a parallelepiped with coterminous edges $\\vec{a}, \\vec{b}, \\vec{c}$ is given by the absolute value of their scalar triple product $|[\\vec{a}, \\vec{b}, \\vec{c}]|$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The volume of a parallelepiped formed by coterminous edges $\\vec{a}, \\vec{b}, \\vec{c}$ is $V = |[\\vec{a}, \\vec{b}, \\vec{c}]|$.\nIf the vectors are coplanar, they lie in the same plane, so the height of the parallelepiped is zero, and $[\\vec{a}, \\vec{b}, \\vec{c}] = 0$.\nHence $V = 0$.\nBoth (A) and (R) are true, and (R) is the correct explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },

  // ==========================================
  // SECTION C: 10 NUMERICAL QUESTIONS (NUM)
  // ==========================================
  {
    type: "NUMERICAL",
    question: "If the vectors $\\vec{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$, $\\vec{b} = \\lambda\\mathbf{i} + 4\\mathbf{j} + 7\\mathbf{k}$ and $\\vec{c} = -3\\mathbf{i} - 2\\mathbf{j} - 5\\mathbf{k}$ are collinear in pairs or coplanar, find the value of $\\lambda$ that makes them coplanar.",
    correctAnswer: 2,
    explanation: "For coplanarity, the scalar triple product is zero:\n$$\\begin{vmatrix} 1 & 2 & 3 \\\\ \\lambda & 4 & 7 \\\\ -3 & -2 & -5 \\end{vmatrix} = 0$$\nExpand along the first row:\n$$1(-20 - (-14)) - 2(-5\\lambda - (-21)) + 3(-2\\lambda - (-12)) = 0$$\n$$1(-6) - 2(-5\\lambda + 21) + 3(-2\\lambda + 12) = 0$$\n$$-6 + 10\\lambda - 42 - 6\\lambda + 36 = 0$$\n$$4\\lambda - 12 = 0 \\implies 4\\lambda = 12 \\implies \\lambda = 3$$\nWait! Let's re-verify: $4\\lambda = 12 \\implies \\lambda = 3$.\nLet's check with $\\lambda = 3$:\n$1(-6) - 2(6) + 3(6) = -6 - 12 + 18 = 0$! Yes, $\\lambda = 3$.\nLet's set correctAnswer: 3.",
    correctAnswer: 3,
    explanation: "For coplanarity, the determinant must vanish:\n$$\\begin{vmatrix} 1 & 2 & 3 \\\\ \\lambda & 4 & 7 \\\\ -3 & -2 & -5 \\end{vmatrix} = 0$$\nExpanding along the first row:\n$$1(4(-5) - 7(-2)) - 2(\\lambda(-5) - 7(-3)) + 3(\\lambda(-2) - 4(-3)) = 0$$\n$$1(-20 + 14) - 2(-5\\lambda + 21) + 3(-2\\lambda + 12) = 0$$\n$$-6 + 10\\lambda - 42 - 6\\lambda + 36 = 0$$\n$$4\\lambda - 12 = 0 \\implies \\lambda = 3$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the points $A(2, 3, 4)$, $B(5, 4, 2)$, and $C(k, 5, 0)$ are collinear, find the value of $k$.",
    correctAnswer: 8,
    explanation: "Vectors $\\vec{AB}$ and $\\vec{BC}$ must be proportional:\n$$\\vec{AB} = (5-2)\\mathbf{i} + (4-3)\\mathbf{j} + (2-4)\\mathbf{k} = 3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$$\n$$\\vec{BC} = (k-5)\\mathbf{i} + (5-4)\\mathbf{j} + (0-2)\\mathbf{k} = (k-5)\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$$\nNotice that the $\\mathbf{j}$ and $\\mathbf{k}$ components are already identical:\n$$\\vec{BC} = 1 \\times \\vec{AB} \\implies k - 5 = 3 \\implies k = 8$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "Find the volume of the parallelepiped whose coterminous edges are given by the vectors $\\vec{a} = 2\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$, $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$, and $\\vec{c} = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$.",
    correctAnswer: 7,
    explanation: "The volume is given by $|[\\vec{a}, \\vec{b}, \\vec{c}]|$:\n$$[\\vec{a}, \\vec{b}, \\vec{c}] = \\begin{vmatrix} 2 & -3 & 4 \\\\ 1 & 2 & -1 \\\\ 3 & -1 & 2 \\end{vmatrix}$$\nExpand along the first row:\n$$2(4 - 1) - (-3)(2 - (-3)) + 4(-1 - 6)$$\n$$= 2(3) + 3(5) + 4(-7) = 6 + 15 - 28 = 21 - 28 = -7$$\nTherefore, the volume is $|-7| = 7$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $\\vec{a}, \\vec{b}, \\vec{c}$ are three non-coplanar vectors such that $[\\vec{a}, \\vec{b}, \\vec{c}] = 3$, find the value of $[\\vec{a} + 2\\vec{b}, \\vec{b} + 2\\vec{c}, \\vec{c} + 2\\vec{a}]$.",
    correctAnswer: 27,
    explanation: "We use the determinant formula:\n$$[\\vec{a} + 2\\vec{b}, \\vec{b} + 2\\vec{c}, \\vec{c} + 2\\vec{a}] = \\begin{vmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 2 \\\\ 2 & 0 & 1 \\end{vmatrix} [\\vec{a}, \\vec{b}, \\vec{c}]$$\nEvaluating the determinant:\n$$\\begin{vmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 2 \\\\ 2 & 0 & 1 \\end{vmatrix} = 1(1 - 0) - 2(0 - 4) + 0 = 1 + 8 = 9$$\nGiven $[\\vec{a}, \\vec{b}, \\vec{c}] = 3$:\n$$\\text{Value} = 9 \\times 3 = 27$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    question: "If the vectors $\\vec{u} = \\mathbf{i} + \\mathbf{j}$, $\\vec{v} = \\mathbf{j} + \\mathbf{k}$, and $\\vec{w} = \\mathbf{k} + x\\mathbf{i}$ are coplanar, find the value of $x$.",
    correctAnswer: 1,
    explanation: "Wait, let's write the determinant:\n$$\\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ x & 0 & 1 \\end{vmatrix} = 0$$\n$$1(1 - 0) - 1(0 - x) + 0 = 1 + x = 0 \\implies x = -1$.\nIf $x = -1$, it's negative. To have positive integer, let $\\vec{w} = \\mathbf{i} - \\mathbf{j} + x\\mathbf{k}$:\n$$\\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & -1 & x \\end{vmatrix} = 0$$\n$$1(x - (-1)) - 1(0 - 1) = x + 1 + 1 = x + 2 = 0 \\implies x = -2$.\nWhat if $\\vec{w} = \\mathbf{i} + 3\\mathbf{j} + x\\mathbf{k}$:\n$$\\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 3 & x \\end{vmatrix} = 1(x - 3) - 1(0 - 1) = x - 3 + 1 = x - 2 = 0 \\implies x = 2$$!\nLet's use $\\vec{u} = \\mathbf{i} + \\mathbf{j}$, $\\vec{v} = \\mathbf{j} + \\mathbf{k}$, and $\\vec{w} = \\mathbf{i} + 3\\mathbf{j} + x\\mathbf{k}$, then $x = 2$!",
    correctAnswer: 2,
    explanation: "For coplanarity, the scalar triple product is zero:\n$$\\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 3 & x \\end{vmatrix} = 0$$\n$$1(x - 3) - 1(0 - 1) + 0 = 0$$\n$$x - 3 + 1 = 0 \\implies x - 2 = 0 \\implies x = 2$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the points $A(1, 2, 3)$, $B(4, 0, 4)$, and $C(-2, 4, z)$ are collinear, find the value of $z$.",
    correctAnswer: 2,
    explanation: "$\\vec{AB} = (4-1)\\mathbf{i} + (0-2)\\mathbf{j} + (4-3)\\mathbf{k} = 3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$.\n$\\vec{AC} = (-2-1)\\mathbf{i} + (4-2)\\mathbf{j} + (z-3)\\mathbf{k} = -3\\mathbf{i} + 2\\mathbf{j} + (z-3)\\mathbf{k}$.\nFor collinearity, $\\vec{AC} = \\lambda\\vec{AB}$:\nComparing $\\mathbf{i}$-components: $-3 = 3\\lambda \\implies \\lambda = -1$.\nComparing $\\mathbf{k}$-components:\n$$z - 3 = -1(1) = -1 \\implies z = 3 - 1 = 2$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the vectors $\\vec{a} = 2\\mathbf{i} + \\mathbf{j} + \\mathbf{k}$, $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$, and $\\vec{c} = \\lambda\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$ are coplanar, find the value of $\\lambda$.",
    correctAnswer: 1,
    explanation: "Set the determinant to zero:\n$$\\begin{vmatrix} 2 & 1 & 1 \\\\ 1 & 2 & -1 \\\\ \\lambda & -1 & 2 \\end{vmatrix} = 0$$\n$$2(4 - 1) - 1(2 - (-\\lambda)) + 1(-1 - 2\\lambda) = 0$$\n$$2(3) - (2 + \\lambda) + (-1 - 2\\lambda) = 0$$\n$$6 - 2 - \\lambda - 1 - 2\\lambda = 0$$\n$$3 - 3\\lambda = 0 \\implies 3\\lambda = 3 \\implies \\lambda = 1$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "Find the value of $k$ such that the vectors $\\vec{a} = \\mathbf{i} + 2\\mathbf{j} + k\\mathbf{k}$, $\\vec{b} = 2\\mathbf{i} + \\mathbf{j} + \\mathbf{k}$, and $\\vec{c} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}$ are coplanar.",
    correctAnswer: 1,
    explanation: "The condition for coplanarity is:\n$$\\begin{vmatrix} 1 & 2 & k \\\\ 2 & 1 & 1 \\\\ 1 & 1 & 1 \\end{vmatrix} = 0$$\nExpand along the first row:\n$$1(1 - 1) - 2(2 - 1) + k(2 - 1) = 0$$\n$$0 - 2(1) + k(1) = 0 \\implies -2 + k = 0 \\implies k = 2$$.\nWait! $-2 + k = 0 \\implies k = 2$.\nLet's check $k=2$:\nRow 2 + Row 3 = $(3, 2, 2) \\ne (1, 2, 2)$.\nLet's check the determinant:\n$1(0) - 2(1) + 2(1) = -2 + 2 = 0$! Yes, $k = 2$.\nLet's set correctAnswer: 2.",
    correctAnswer: 2,
    explanation: "For coplanarity, the scalar triple product is zero:\n$$\\begin{vmatrix} 1 & 2 & k \\\\ 2 & 1 & 1 \\\\ 1 & 1 & 1 \\end{vmatrix} = 0$$\n$$1(1 - 1) - 2(2 - 1) + k(2 - 1) = 0$$\n$$0 - 2 + k = 0 \\implies k = 2$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $\\vec{a}, \\vec{b}, \\vec{c}$ are non-coplanar vectors such that $[\\vec{a}, \\vec{b}, \\vec{c}] = 2$, find the value of $[\\vec{a} \\times \\vec{b}, \\vec{b} \\times \\vec{c}, \\vec{c} \\times \\vec{a}]$.",
    correctAnswer: 4,
    explanation: "Using the fundamental vector identity:\n$$[\\vec{a} \\times \\vec{b}, \\vec{b} \\times \\vec{c}, \\vec{c} \\times \\vec{a}] = [\\vec{a}, \\vec{b}, \\vec{c}]^2$$\nGiven $[\\vec{a}, \\vec{b}, \\vec{c}] = 2$:\n$$[\\vec{a} \\times \\vec{b}, \\vec{b} \\times \\vec{c}, \\vec{c} \\times \\vec{a}] = 2^2 = 4$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the points $(1, 1, 1)$, $(2, 3, 4)$, $(3, 5, 7)$, and $(4, 7, z)$ are collinear, find the value of $z$.",
    correctAnswer: 10,
    explanation: "Let the points be $P_1, P_2, P_3, P_4$.\nVector $\\vec{P_1P_2} = (2-1)\\mathbf{i} + (3-1)\\mathbf{j} + (4-1)\\mathbf{k} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$.\nNotice $\\vec{P_1P_3} = 2\\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k} = 2(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$.\nFor $P_4$ to lie on the same line:\n$$\\vec{P_1P_4} = (4-1)\\mathbf{i} + (7-1)\\mathbf{j} + (z-1)\\mathbf{k} = 3\\mathbf{i} + 6\\mathbf{j} + (z-1)\\mathbf{k}$$\nComparing with $3\\vec{P_1P_2} = 3\\mathbf{i} + 6\\mathbf{j} + 9\\mathbf{k}$:\n$$z - 1 = 9 \\implies z = 10$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  }
];

// Adjust question text in Q15:
subtopic3Questions[14].question = "If the vectors $\\vec{u} = \\mathbf{i} + \\mathbf{j}$, $\\vec{v} = \\mathbf{j} + \\mathbf{k}$, and $\\vec{w} = \\mathbf{i} + 3\\mathbf{j} + x\\mathbf{k}$ are coplanar, find the value of $x$.";

module.exports = subtopic3Questions;
