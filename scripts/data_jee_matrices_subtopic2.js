// scripts/data_jee_matrices_subtopic2.js
// Subtopic 2: Orthogonal, symmetric, and skew-symmetric matrices (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic2Questions = [
  // --- 10 MCQs ---
  {
    question: "If $A$ is a skew-symmetric matrix of odd order $n$, then the determinant of $A$ is always equal to:",
    options: [
      "0",
      "1",
      "-1",
      "$n$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since $A$ is skew-symmetric, $A^T = -A$. Taking the determinant of both sides:\n$$\\det(A^T) = \\det(-A) = (-1)^n \\det(A).$$\nSince $\\det(A^T) = \\det(A)$ and $n$ is odd ($(-1)^n = -1$):\n$$\\det(A) = -\\det(A) \\implies 2\\det(A) = 0 \\implies \\det(A) = 0.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be an orthogonal matrix. Which of the following statements must be true?",
    options: [
      "$\\det(A) = \\pm 1$ and $A^{-1} = A^T$",
      "$\\det(A) = 0$",
      "$A^2 = I$",
      "$A^T = -A$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By definition, an orthogonal matrix satisfies $A A^T = I$. Taking determinants:\n$$\\det(A A^T) = \\det(A) \\det(A^T) = (\\det(A))^2 = 1 \\implies \\det(A) = \\pm 1.$$\nAlso, multiplying $A A^T = I$ by $A^{-1}$ yields $A^T = A^{-1}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ is any real square matrix, then the matrix $\\frac{1}{2}(A - A^T)$ is always:",
    options: [
      "Skew-symmetric",
      "Symmetric",
      "Orthogonal",
      "Identity"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let $S = \\frac{1}{2}(A - A^T)$. Then:\n$$S^T = \\frac{1}{2}(A - A^T)^T = \\frac{1}{2}(A^T - (A^T)^T) = \\frac{1}{2}(A^T - A) = -\\frac{1}{2}(A - A^T) = -S.$$\nThus, $S$ is always a skew-symmetric matrix.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a symmetric matrix and $B$ be a skew-symmetric matrix of the same order. Then the matrix $AB - BA$ is always:",
    options: [
      "Symmetric",
      "Skew-symmetric",
      "Diagonal",
      "Scalar"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Given $A^T = A$ and $B^T = -B$. Let $C = AB - BA$.\n$$C^T = (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = (-B)A - A(-B) = -BA + AB = AB - BA = C.$$\nSince $C^T = C$, the matrix $AB - BA$ is always symmetric.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If $A = \\begin{pmatrix} 0 & 2b & c \\\\ a & b & -c \\\\ a & -b & c \\end{pmatrix}$ is an orthogonal matrix, then the positive value of $a$ is:",
    options: [
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{1}{\\sqrt{6}}$",
      "$\\frac{1}{2}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since $A$ is orthogonal, the length of each column (or row) vector is 1.\nLooking at column 1: $0^2 + a^2 + a^2 = 1 \\implies 2a^2 = 1 \\implies a^2 = \\frac{1}{2}$.\nTaking the positive value gives $a = \\frac{1}{\\sqrt{2}}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Let $A$ be a $3 \\times 3$ skew-symmetric matrix with real entries. If the diagonal entries of $A$ are $d_1, d_2, d_3$, then $d_1 + d_2 + d_3$ is:",
    options: [
      "0",
      "1",
      "3",
      "-1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "In any skew-symmetric matrix $A = [a_{ij}]$, the condition $a_{ij} = -a_{ji}$ for $i = j$ implies $a_{ii} = -a_{ii} \\implies 2a_{ii} = 0 \\implies a_{ii} = 0$.\nTherefore, all diagonal entries $d_1 = d_2 = d_3 = 0$, so their sum is 0.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ is a real orthogonal matrix and $B$ is also a real orthogonal matrix of the same order, then the product $AB$ is:",
    options: [
      "Always orthogonal",
      "Always symmetric",
      "Always skew-symmetric",
      "Not necessarily orthogonal"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Consider $(AB)(AB)^T = (AB)(B^T A^T) = A(B B^T)A^T$.\nSince $B$ is orthogonal, $B B^T = I$. Thus:\n$$(AB)(AB)^T = A I A^T = A A^T = I.$$\nSince $(AB)(AB)^T = I$, the product $AB$ is always orthogonal.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 5 \\\\ 3 & 5 & 6 \\end{pmatrix}$. Which of the following is true about $A$?",
    options: [
      "$A$ is a symmetric matrix",
      "$A$ is a skew-symmetric matrix",
      "$A$ is an orthogonal matrix",
      "$A$ is a nilpotent matrix"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Evaluating $A^T$:\n$$A^T = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 5 \\\\ 3 & 5 & 6 \\end{pmatrix} = A.$$\nSince $A^T = A$, $A$ is a symmetric matrix.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ is a skew-symmetric matrix of order $n$, then $A^k$ is a symmetric matrix if $k$ is:",
    options: [
      "An even positive integer",
      "An odd positive integer",
      "Any positive integer",
      "Never symmetric"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since $A^T = -A$, we have:\n$$(A^k)^T = (A^T)^k = (-A)^k = (-1)^k A^k.$$\nIf $k$ is an even integer, $(-1)^k = 1$, so $(A^k)^T = A^k$, making $A^k$ a symmetric matrix.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $P = \\begin{pmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ -\\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\end{pmatrix}$. Then $P^{-1}$ is equal to:",
    options: [
      "$\\begin{pmatrix} \\frac{1}{\\sqrt{2}} & -\\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\end{pmatrix}$",
      "$\\begin{pmatrix} -\\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ -\\frac{1}{\\sqrt{2}} & -\\frac{1}{\\sqrt{2}} \\end{pmatrix}$",
      "$\\begin{pmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ -\\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The row vectors of $P$ are unit vectors and mutually perpendicular, so $P$ is an orthogonal matrix ($P P^T = I$).\nTherefore, $P^{-1} = P^T = \\begin{pmatrix} \\frac{1}{\\sqrt{2}} & -\\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The determinant of any skew-symmetric matrix of order 3 is zero.\nReason (R): For any skew-symmetric matrix $A$ of order $n$, $\\det(A) = (-1)^n \\det(A)$. When $n$ is odd, this implies $\\det(A) = 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Because order $n = 3$ is odd, $\\det(A) = \\det(A^T) = \\det(-A) = (-1)^3 \\det(A) = -\\det(A) \\implies 2\\det(A) = 0 \\implies \\det(A) = 0$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an orthogonal matrix, then its inverse is always equal to its transpose ($A^{-1} = A^T$).\nReason (R): An orthogonal matrix is defined by the property $A A^T = A^T A = I$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Multiplying $A A^T = I$ on the left by $A^{-1}$ yields $A^{-1}(A A^T) = A^{-1} I \\implies A^T = A^{-1}$. Both statements are true and Reason is the exact definition and explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Every square matrix can be uniquely expressed as the sum of a symmetric matrix and a skew-symmetric matrix.\nReason (R): For any square matrix $A$, $A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$, where $\\frac{1}{2}(A + A^T)$ is symmetric and $\\frac{1}{2}(A - A^T)$ is skew-symmetric.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The decomposition $A = \\frac{A + A^T}{2} + \\frac{A - A^T}{2}$ is algebraic and unique. Both Assertion and Reason are true, and Reason directly proves Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): All the diagonal elements of a skew-symmetric matrix are always zero.\nReason (R): For a skew-symmetric matrix $A = [a_{ij}]$, $a_{ij} = -a_{ji}$ for all $i, j$. For $i = j$, this gives $a_{ii} = -a_{ii} \\implies 2a_{ii} = 0 \\implies a_{ii} = 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The condition $a_{ii} = -a_{ii}$ immediately implies $a_{ii} = 0$ for all $i$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an orthogonal matrix, then $\\det(A)$ can only be $+1$ or $-1$.\nReason (R): For an orthogonal matrix, $A A^T = I$, which implies $\\det(A A^T) = (\\det(A))^2 = \\det(I) = 1$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$A A^T = I \\implies \\det(A)\\det(A^T) = (\\det(A))^2 = 1 \\implies \\det(A) = \\pm 1$. Both statements are true and Reason provides the exact justification.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ and $B$ are symmetric matrices of the same order, then $A + B$ is always a symmetric matrix.\nReason (R): Transpose of a sum is the sum of the transposes, i.e., $(A + B)^T = A^T + B^T = A + B$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$(A + B)^T = A^T + B^T = A + B$ because $A$ and $B$ are symmetric. Both Assertion and Reason are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is a skew-symmetric matrix, then $A^2$ is a symmetric matrix.\nReason (R): $(A^2)^T = (A^T)^2 = (-A)^2 = A^2$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Using $(A^2)^T = (A^T)^2 = (-A)^2 = A^2$, we see that $A^2$ is symmetric. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is both symmetric and skew-symmetric, then $A$ must be a zero matrix.\nReason (R): If $A^T = A$ and $A^T = -A$, then $A = -A \\implies 2A = O \\implies A = O$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "If $A$ is both symmetric ($A^T = A$) and skew-symmetric ($A^T = -A$), then $A = -A \\implies 2A = O \\implies A = O$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any square matrix $A$, the matrix $B = A - A^T$ is symmetric.\nReason (R): $B^T = (A - A^T)^T = A^T - (A^T)^T = A^T - A = -(A - A^T) = -B$, so $B$ is skew-symmetric.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because $A - A^T$ is skew-symmetric, not symmetric. Reason is true and correctly calculates $B^T = -B$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an orthogonal matrix of order $n$, then $\\det(A^{-1}) = \\det(A)$.\nReason (R): For an orthogonal matrix, $A^{-1} = A^T$ and $\\det(A^T) = \\det(A)$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $A$ is orthogonal, $A^{-1} = A^T$, which implies $\\det(A^{-1}) = \\det(A^T) = \\det(A)$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numericals ---
  {
    question: "Let $A$ be a $3 \\times 3$ skew-symmetric matrix. The value of the determinant $\\det(A)$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "Since the order $n = 3$ is odd, the determinant of any $3 \\times 3$ skew-symmetric matrix is identically 0.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 0 & 2 & -1 \\\\ -2 & 0 & 4 \\\\ 1 & -4 & 0 \\end{pmatrix}$. Find the value of $\\det(A)$.",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "Notice that $A^T = -A$, so $A$ is a skew-symmetric matrix of odd order $3$. Therefore, $\\det(A) = 0$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & 7 \\end{pmatrix}$. If $A = P + Q$, where $P$ is symmetric and $Q$ is skew-symmetric, then the entry $q_{12}$ of matrix $Q$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: -1,
    type: "numerical",
    solution: "$$Q = \\frac{A - A^T}{2} = \\frac{1}{2} \\left[ \\begin{pmatrix} 2 & 3 \\\\ 5 & 7 \\end{pmatrix} - \\begin{pmatrix} 2 & 5 \\\\ 3 & 7 \\end{pmatrix} \\right] = \\frac{1}{2} \\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}.$$\nTherefore, $q_{12} = -1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} a & 1/\\sqrt{2} \\\\ -1/\\sqrt{2} & a \\end{pmatrix}$ be an orthogonal matrix with $a > 0$. Find the value of $2a^2$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "Since $A$ is orthogonal, the first row has length 1:\n$$a^2 + \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = 1 \\implies a^2 + \\frac{1}{2} = 1 \\implies a^2 = \\frac{1}{2}.$$\nHence, $2a^2 = 2 \\times \\frac{1}{2} = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $3 \\times 3$ skew-symmetric matrix. If the trace of $A^2 + 3A$ is $T$ and the sum of the diagonal elements of $A$ is $S$, find the value of $S$.",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "The diagonal entries of any skew-symmetric matrix are all zero ($a_{ii} = 0$). Thus $S = \\text{Tr}(A) = 0$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $2 \\times 2$ skew-symmetric matrix $A = \\begin{pmatrix} 0 & 5 \\\\ -5 & 0 \\end{pmatrix}$. Find the value of $\\det(A)$.",
    options: [],
    correctOption: null,
    correctAnswer: 25,
    type: "numerical",
    solution: "$$\\det(A) = (0)(0) - (5)(-5) = 25.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be an orthogonal matrix such that $\\det(A) = -1$. If $B = A^3$, then the value of $\\det(B)$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: -1,
    type: "numerical",
    solution: "$$\\det(B) = \\det(A^3) = (\\det(A))^3 = (-1)^3 = -1.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $A = \\begin{pmatrix} 1 & x \\\\ 3 & 4 \\end{pmatrix}$ is a symmetric matrix, find the value of $x$.",
    options: [],
    correctOption: null,
    correctAnswer: 3,
    type: "numerical",
    solution: "For $A$ to be symmetric, $A^T = A$, which requires $a_{12} = a_{21}$.\nHere $a_{12} = x$ and $a_{21} = 3$, so $x = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 0 & x \\\\ -4 & 0 \\end{pmatrix}$ be a skew-symmetric matrix. Find the value of $x$.",
    options: [],
    correctOption: null,
    correctAnswer: 4,
    type: "numerical",
    solution: "For $A$ to be skew-symmetric, $a_{12} = -a_{21}$.\nHere $a_{21} = -4$, so $a_{12} = -(-4) = 4 \\implies x = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be an orthogonal matrix of order 3. If $k = (\\det(A))^4$, find the value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "For any orthogonal matrix, $\\det(A) = \\pm 1$.\nTherefore, $k = (\\det(A))^4 = (\\pm 1)^4 = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic2Questions };
