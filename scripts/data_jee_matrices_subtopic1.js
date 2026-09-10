// scripts/data_jee_matrices_subtopic1.js
// Subtopic 1: Types of matrices (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic1Questions = [
  // --- 10 MCQs ---
  {
    question: "Let $A = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}$. If $A^n = \\begin{pmatrix} 1 & 0 \\\\ 50 & 1 \\end{pmatrix}$, then the value of $n$ is equal to:",
    options: [
      "50",
      "25",
      "100",
      "5"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By computing powers of $A$:\n$$A^2 = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}.$$\nBy induction, $A^n = \\begin{pmatrix} 1 & 0 \\\\ n & 1 \\end{pmatrix}$.\nGiven $A^n = \\begin{pmatrix} 1 & 0 \\\\ 50 & 1 \\end{pmatrix}$, comparing the entries gives $n = 50$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ is an idempotent matrix of order $n$, then $(I + A)^3 - 7A$ is equal to:",
    options: [
      "$I$",
      "$A$",
      "$I - A$",
      "$O$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since $A^2 = A$, we have $A^3 = A^2 = A$. Expanding $(I + A)^3$ using binomial expansion (valid as $I$ and $A$ commute):\n$$(I + A)^3 = I^3 + 3I^2 A + 3I A^2 + A^3 = I + 3A + 3A + A = I + 7A.$$\nTherefore, $(I + A)^3 - 7A = (I + 7A) - 7A = I$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Then the matrix $(I + A)^{100}$ is equal to:",
    options: [
      "$\\begin{pmatrix} 1 & 100 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 100 & 1 \\\\ 0 & 100 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Notice that $A^2 = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} = O$.\nSince $I$ and $A$ commute, binomial expansion gives:\n$$(I + A)^{100} = I + 100A + \\binom{100}{2}A^2 + \\cdots = I + 100A.$$\nThus, $(I + A)^{100} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 0 & 100 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 100 \\\\ 0 & 1 \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If a matrix $A$ is involutory, then which of the following is necessarily true?",
    options: [
      "$A^{-1} = A$",
      "$A^2 = O$",
      "$\\det(A) = 0$",
      "$A^T = -A$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By definition, a square matrix $A$ is involutory if $A^2 = I$. Multiplying both sides by $A^{-1}$ gives $A = A^{-1}$, so an involutory matrix is its own inverse.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} \\cos\\alpha & -\\sin\\alpha \\\\ \\sin\\alpha & \\cos\\alpha \\end{pmatrix}$. If $A + A^T = I$, then the value of $\\alpha$ in $[0, 2\\pi)$ can be:",
    options: [
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{2\\pi}{3}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$A^T = \\begin{pmatrix} \\cos\\alpha & \\sin\\alpha \\\\ -\\sin\\alpha & \\cos\\alpha \\end{pmatrix}$.\n$$A + A^T = \\begin{pmatrix} 2\\cos\\alpha & 0 \\\\ 0 & 2\\cos\\alpha \\end{pmatrix}.$$\nGiven $A + A^T = I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, we have $2\\cos\\alpha = 1 \\implies \\cos\\alpha = \\frac{1}{2}$.\nIn $[0, 2\\pi)$, the solutions are $\\alpha = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$. Hence, $\\alpha = \\frac{\\pi}{3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ and $B$ are square matrices of order 3 such that $\\det(A) = 2$ and $\\det(B) = 3$, then $\\det(2AB)$ is equal to:",
    options: [
      "48",
      "12",
      "24",
      "6"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For a matrix $M$ of order $n$, $\\det(kM) = k^n \\det(M)$. Here order $n = 3$.\nTherefore, $\\det(2AB) = 2^3 \\det(AB) = 8 \\det(A) \\det(B) = 8 \\times 2 \\times 3 = 48$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a nilpotent matrix of index 2 (so $A^2 = O$). If $B = I - A$, then the inverse matrix $B^{-1}$ is:",
    options: [
      "$I + A$",
      "$I - A$",
      "$A - I$",
      "$I + 2A$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Consider $(I - A)(I + A) = I^2 - A^2 = I - O = I$.\nSince their product is the identity matrix $I$, $(I - A)^{-1} = I + A$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Let $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. The trace of the matrix $(AB - BA)$ is equal to:",
    options: [
      "0",
      "5",
      "10",
      "-5"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For any two square matrices of the same order, $\\text{Tr}(AB) = \\text{Tr}(BA)$.\nBy linearity of the trace operator:\n$$\\text{Tr}(AB - BA) = \\text{Tr}(AB) - \\text{Tr}(BA) = 0.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A = \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{pmatrix}$, then the matrix $A^2$ is:",
    options: [
      "$I_3$",
      "$A$",
      "$-I_3$",
      "$O$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$$A^2 = \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} = I_3.$$\nHence, $A$ is an involutory matrix.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 1 & -1 \\\\ 2 & -1 \\end{pmatrix}$. The value of $A^{100}$ is:",
    options: [
      "$I_2$",
      "$-I_2$",
      "$A$",
      "$-A$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Compute $A^2$:\n$$A^2 = \\begin{pmatrix} 1 & -1 \\\\ 2 & -1 \\end{pmatrix} \\begin{pmatrix} 1 & -1 \\\\ 2 & -1 \\end{pmatrix} = \\begin{pmatrix} 1-2 & -1+1 \\\\ 2-2 & -2+1 \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} = -I_2.$$\nThen $A^4 = (-I_2)^2 = I_2$.\nThus, $A^{100} = (A^4)^{25} = (I_2)^{25} = I_2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an idempotent matrix, then $(I - A)$ is also an idempotent matrix.\nReason (R): For any idempotent matrix $A$, we have $A^2 = A$, which implies $(I - A)^2 = I - 2A + A^2 = I - 2A + A = I - A$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $A$ is idempotent, $A^2 = A$. Expanding $(I - A)^2 = I^2 - 2A + A^2 = I - 2A + A = I - A$. Therefore, $(I - A)$ is indeed idempotent, and Reason (R) provides the exact proof.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The determinant of a nilpotent matrix is always zero.\nReason (R): If $A$ is nilpotent with index $k$, then $A^k = O$, so $(\\det(A))^k = \\det(A^k) = \\det(O) = 0$, which gives $\\det(A) = 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "If $A^k = O$, taking the determinant on both sides yields $(\\det(A))^k = 0$, whence $\\det(A) = 0$. Thus both Assertion and Reason are true, and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ and $B$ are symmetric matrices of the same order, then $AB$ is symmetric if and only if $AB = BA$.\nReason (R): $(AB)^T = B^T A^T = BA$. For $AB$ to be symmetric, $(AB)^T = AB$, which requires $BA = AB$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $A$ and $B$ are symmetric, $A^T = A$ and $B^T = B$. Then $(AB)^T = B^T A^T = BA$. For $AB$ to be symmetric, $(AB)^T = AB \\iff BA = AB$. Thus both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an involutory matrix, then $\\frac{1}{2}(I + A)$ and $\\frac{1}{2}(I - A)$ are idempotent matrices.\nReason (R): For an involutory matrix $A^2 = I$, so $\\left(\\frac{I+A}{2}\\right)^2 = \\frac{I + 2A + A^2}{4} = \\frac{2I + 2A}{4} = \\frac{I+A}{2}$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Using $A^2 = I$, $\\left(\\frac{I \\pm A}{2}\\right)^2 = \\frac{I \\pm 2A + A^2}{4} = \\frac{2(I \\pm A)}{4} = \\frac{I \\pm A}{2}$. Both are idempotent, and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is a square matrix of order 3, then $\\det(-A) = -\\det(A)$.\nReason (R): For any square matrix $A$ of order $n$ and any scalar $k$, $\\det(kA) = k^n \\det(A)$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For $k = -1$ and $n = 3$, $\\det(-A) = (-1)^3 \\det(A) = -\\det(A)$. Both are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ and $B$ are square matrices of the same order, then $\\text{Tr}(AB - BA) = 0$.\nReason (R): The trace of a matrix product satisfies the cyclic property $\\text{Tr}(AB) = \\text{Tr}(BA)$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $\\text{Tr}(AB) = \\text{Tr}(BA)$ for any square matrices $A$ and $B$, $\\text{Tr}(AB - BA) = \\text{Tr}(AB) - \\text{Tr}(BA) = 0$. Hence both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A diagonal matrix is always a symmetric matrix.\nReason (R): In a diagonal matrix $D = [d_{ij}]$, $d_{ij} = 0$ for all $i \\neq j$, so $d_{ij} = d_{ji}$ for all $i, j$, which means $D^T = D$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For a diagonal matrix, transposition does not change the diagonal entries, and off-diagonal entries remain 0. Hence $D^T = D$. Both Assertion and Reason are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an idempotent matrix, then its determinant can only be either 0 or 1.\nReason (R): $A^2 = A \\implies \\det(A^2) = \\det(A) \\implies (\\det(A))^2 - \\det(A) = 0$, so $\\det(A) = 0$ or $1$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Taking the determinant of $A^2 = A$ gives $(\\det(A))^2 = \\det(A) \\implies \\det(A)(\\det(A) - 1) = 0$. Thus $\\det(A) \\in \\{0, 1\\}$. Both statements are true and Reason provides the exact proof.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is a square matrix such that $A^2 = I$, then $\\det(A)$ must be $+1$.\nReason (R): For an involutory matrix, $A^2 = I \\implies (\\det(A))^2 = 1$, which implies $\\det(A) = \\pm 1$.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because $\\det(A)$ can be $-1$ (e.g., $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ has $A^2 = I$ and $\\det(A) = -1$). Reason is true because $(\\det(A))^2 = 1 \\implies \\det(A) = \\pm 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any matrix $A$, the product $A A^T$ is always a symmetric matrix.\nReason (R): $(A A^T)^T = (A^T)^T A^T = A A^T$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Using the reversal law of transposition: $(A A^T)^T = (A^T)^T A^T = A A^T$. Since the transpose equals the matrix itself, $A A^T$ is always symmetric. Both Assertion and Reason are true, and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numericals ---
  {
    question: "Let $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$. If $A^{25} = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$, then the integer value of $k$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: 25,
    type: "numerical",
    solution: "By induction, $A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$. For $n = 25$, $A^{25} = \\begin{pmatrix} 1 & 25 \\\\ 0 & 1 \\end{pmatrix}$. Therefore, $k = 25$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 0 & 2 \\\\ 0 & 0 \\end{pmatrix}$. If $(I + A)^{10} = \\begin{pmatrix} 1 & m \\\\ 0 & 1 \\end{pmatrix}$, find the value of $m$.",
    options: [],
    correctOption: null,
    correctAnswer: 20,
    type: "numerical",
    solution: "Since $A^2 = O$, by binomial expansion:\n$$(I + A)^{10} = I + 10A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + 10 \\begin{pmatrix} 0 & 2 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 20 \\\\ 0 & 1 \\end{pmatrix}.$$\nThus, $m = 20$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix}$, then the value of the determinant $\\det(A^{2024})$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "Compute $\\det(A) = (2)(-2) - (-1)(3) = -4 + 3 = -1$.\nThen $\\det(A^{2024}) = (\\det(A))^{2024} = (-1)^{2024} = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $3 \\times 3$ matrix such that $\\det(A) = 4$. If $\\det(3A) = k$, then the value of $\\frac{k}{12}$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: 9,
    type: "numerical",
    solution: "For an $n \\times n$ matrix, $\\det(cA) = c^n \\det(A)$. Here $n = 3, c = 3$, so:\n$$\\det(3A) = 3^3 \\det(A) = 27 \\times 4 = 108.$$\nThus $k = 108$, and $\\frac{k}{12} = \\frac{108}{12} = 9$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$. If the sum of all elements of $A^3$ is $S$, find the value of $S$.",
    options: [],
    correctOption: null,
    correctAnswer: 36,
    type: "numerical",
    solution: "Since $A$ is diagonal, $A^3 = \\begin{pmatrix} 1^3 & 0 & 0 \\\\ 0 & 2^3 & 0 \\\\ 0 & 0 & 3^3 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 8 & 0 \\\\ 0 & 0 & 27 \\end{pmatrix}$.\nThe sum of all elements is $1 + 0 + 0 + 0 + 8 + 0 + 0 + 0 + 27 = 36$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$. If $A^n = I_2$, then the smallest positive integer $n$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: 4,
    type: "numerical",
    solution: "$A^2 = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} = -I_2$.\n$A^3 = -A$.\n$A^4 = (-I_2)^2 = I_2$.\nHence, the smallest positive integer $n$ is 4.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $2 \\times 2$ matrix such that $\\text{Tr}(A) = 5$ and $\\det(A) = 6$. By the Cayley-Hamilton theorem, $A^2 - 5A + kI = O$. Find the integer value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "The characteristic equation of a $2 \\times 2$ matrix $A$ is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.\nBy the Cayley-Hamilton theorem, $A$ satisfies its own characteristic equation:\n$$A^2 - \\text{Tr}(A)A + \\det(A)I = O \\implies A^2 - 5A + 6I = O.$$\nComparing with $A^2 - 5A + kI = O$ gives $k = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Let $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$. If $(AB)^5 = \\begin{pmatrix} 1 & p \\\\ 0 & 1 \\end{pmatrix}$, find the value of $p$.",
    options: [],
    correctOption: null,
    correctAnswer: 25,
    type: "numerical",
    solution: "$$AB = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 5 \\\\ 0 & 1 \\end{pmatrix}.$$\nThen $(AB)^5 = \\begin{pmatrix} 1 & 5 \\times 5 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 25 \\\\ 0 & 1 \\end{pmatrix}$.\nTherefore, $p = 25$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "If $A = \\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$ and $I$ is the identity matrix of order 2, then the trace of the matrix $(A^2 - 5A)$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: -14,
    type: "numerical",
    solution: "The characteristic equation is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.\nHere $\\text{Tr}(A) = 3 + 2 = 5$ and $\\det(A) = (3)(2) - (1)(-1) = 7$.\nBy the Cayley-Hamilton theorem, $A^2 - 5A + 7I = O \\implies A^2 - 5A = -7I$.\nThus, $\\text{Tr}(A^2 - 5A) = \\text{Tr}(-7I) = -7 \\times \\text{Tr}(I) = -7(2) = -14$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "Let $A = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$. If $A^{10} + A^5 = \\begin{pmatrix} 2 & 0 \\\\ q & 2 \\end{pmatrix}$, find the value of $q$.",
    options: [],
    correctOption: null,
    correctAnswer: 30,
    type: "numerical",
    solution: "$$A^n = \\begin{pmatrix} 1 & 0 \\\\ 2n & 1 \\end{pmatrix}.$$\n$$A^{10} = \\begin{pmatrix} 1 & 0 \\\\ 20 & 1 \\end{pmatrix}, \\quad A^5 = \\begin{pmatrix} 1 & 0 \\\\ 10 & 1 \\end{pmatrix}.$$\nSumming them:\n$$A^{10} + A^5 = \\begin{pmatrix} 2 & 0 \\\\ 30 & 2 \\end{pmatrix}.$$\nComparing entries gives $q = 30$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic1Questions };
