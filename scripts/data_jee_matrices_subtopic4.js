// scripts/data_jee_matrices_subtopic4.js
// Subtopic 4: Adjoint and inverse (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic4Questions = [
  // --- 10 MCQs ---
  {
    question: "If $A$ is a square matrix of order 3 such that $\\det(A) = 4$, then the value of $\\det(\\text{adj}(A))$ is equal to:",
    options: [
      "16",
      "64",
      "4",
      "12"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For a square matrix $A$ of order $n$, $\\det(\\text{adj}(A)) = (\\det(A))^{n-1}$.\nHere $n = 3$, so:\n$$\\det(\\text{adj}(A)) = (\\det(A))^{3-1} = (\\det(A))^2 = 4^2 = 16.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ is an invertible matrix of order 3 such that $\\det(A) = 3$, then $\\det(\\text{adj}(\\text{adj}(A)))$ is equal to:",
    options: [
      "81",
      "27",
      "9",
      "243"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For an $n \\times n$ matrix, $\\det(\\text{adj}(\\text{adj}(A))) = (\\det(A))^{(n-1)^2}$.\nFor $n = 3$, $(n-1)^2 = (2)^2 = 4$.\nTherefore:\n$$\\det(\\text{adj}(\\text{adj}(A))) = 3^4 = 81.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If $A$ is a $3 \\times 3$ matrix such that $\\det(A) = 2$, then $\\text{adj}(\\text{adj}(A))$ is equal to:",
    options: [
      "$2A$",
      "$4A$",
      "$8A$",
      "$A$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By the adjoint theorem, for any $n \\times n$ matrix $A$, $\\text{adj}(\\text{adj}(A)) = (\\det(A))^{n-2} A$.\nHere $n = 3$ and $\\det(A) = 2$:\n$$\\text{adj}(\\text{adj}(A)) = (2)^{3-2} A = 2^1 A = 2A.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $3 \\times 3$ matrix. Then $\\text{adj}(3A)$ is equal to:",
    options: [
      "$9 \\, \\text{adj}(A)$",
      "$27 \\, \\text{adj}(A)$",
      "$3 \\, \\text{adj}(A)$",
      "$81 \\, \\text{adj}(A)$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For an $n \\times n$ matrix, $\\text{adj}(kA) = k^{n-1} \\text{adj}(A)$.\nHere $k = 3$ and $n = 3$, so $k^{n-1} = 3^{3-1} = 3^2 = 9$.\nHence, $\\text{adj}(3A) = 9 \\, \\text{adj}(A)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ satisfies $A^2 - 4A - 5I = O$, then the inverse matrix $A^{-1}$ is equal to:",
    options: [
      "$\\frac{1}{5}(A - 4I)$",
      "$\\frac{1}{5}(A + 4I)$",
      "$\\frac{1}{4}(A - 5I)$",
      "$5(A - 4I)$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "From $A^2 - 4A - 5I = O$, rearrange as:\n$$5I = A^2 - 4A = A(A - 4I).$$\nMultiplying both sides by $A^{-1}$ gives:\n$$5 A^{-1} = A - 4I \\implies A^{-1} = \\frac{1}{5}(A - 4I).$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ and $B$ are invertible matrices of the same order, then $\\text{adj}(AB)$ is equal to:",
    options: [
      "$\\text{adj}(B) \\, \\text{adj}(A)$",
      "$\\text{adj}(A) \\, \\text{adj}(B)$",
      "$(\\text{adj}(A) \\, \\text{adj}(B))^T$",
      "$\\det(A) \\text{adj}(B)$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By the properties of adjoints, the reversal law applies: $\\text{adj}(AB) = \\text{adj}(B) \\, \\text{adj}(A)$, corresponding to $(AB)^{-1} = B^{-1} A^{-1}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. The value of $\\det(A \\cdot \\text{adj}(A))$ is:",
    options: [
      "4",
      "-4",
      "-2",
      "2"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Recall $A \\cdot \\text{adj}(A) = \\det(A) I_2$.\nHere $\\det(A) = 1(4) - 2(3) = -2$.\nThus $A \\cdot \\text{adj}(A) = -2 I_2 = \\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix}$.\nIts determinant is $(-2)(-2) = 4$ (or $(\\det(A))^2 = (-2)^2 = 4$).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ is a square matrix of order 3 with $\\det(A) = 2$, then the value of $\\det(A^{-1} \\text{adj}(A))$ is:",
    options: [
      "2",
      "4",
      "1",
      "8"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$$\\det(A^{-1} \\text{adj}(A)) = \\det(A^{-1}) \\det(\\text{adj}(A)) = \\frac{1}{\\det(A)} (\\det(A))^{3-1} = \\frac{1}{\\det(A)} (\\det(A))^2 = \\det(A) = 2.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be an invertible matrix. If $(\\text{adj}(A))^{-1} = k \\cdot \\text{adj}(A^{-1})$, then the value of $k$ is:",
    options: [
      "1",
      "$\\det(A)$",
      "$\\frac{1}{\\det(A)}$",
      "$(\\det(A))^2$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Recall $\\text{adj}(A) = \\det(A) A^{-1}$.\nTaking the inverse of both sides:\n$$(\\text{adj}(A))^{-1} = (\\det(A) A^{-1})^{-1} = \\frac{1}{\\det(A)} (A^{-1})^{-1} = \\frac{1}{\\det(A)} A.$$\nOn the other hand, $\\text{adj}(A^{-1}) = \\det(A^{-1}) (A^{-1})^{-1} = \\frac{1}{\\det(A)} A$.\nTherefore, $(\\text{adj}(A))^{-1} = \\text{adj}(A^{-1})$, meaning $k = 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "If $A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}$, then $\\text{adj}(A)$ is:",
    options: [
      "$\\begin{pmatrix} 12 & 0 & 0 \\\\ 0 & 8 & 0 \\\\ 0 & 0 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 & 0 & 0 \\\\ 0 & 8 & 0 \\\\ 0 & 0 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 24 & 0 & 0 \\\\ 0 & 24 & 0 \\\\ 0 & 0 & 24 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1/2 & 0 & 0 \\\\ 0 & 1/3 & 0 \\\\ 0 & 0 & 1/4 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For a diagonal matrix $D = \\text{diag}(d_1, d_2, d_3)$, its adjoint is $\\text{diag}(d_2 d_3, d_1 d_3, d_1 d_2)$ because $\\det(D) = d_1 d_2 d_3 = 24$.\nThus, $\\text{adj}(A) = \\text{diag}(3 \\times 4, 2 \\times 4, 2 \\times 3) = \\text{diag}(12, 8, 6)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any square matrix $A$ of order $n$, $A \\cdot \\text{adj}(A) = (\\det(A)) I_n$.\nReason (R): The sum of the products of elements of any row with their corresponding cofactors equals $\\det(A)$, whereas with the cofactors of any other row, it equals 0.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The $(i, j)$-th entry of $A \\cdot \\text{adj}(A) = A \\cdot C^T$ is $\\sum_k a_{ik} C_{jk} = \\det(A) \\delta_{ij}$. Hence $A \\cdot \\text{adj}(A) = \\det(A) I_n$. Both statements are true and Reason is the exact proof.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is a square matrix of order 3 and $\\det(A) = 3$, then $\\det(\\text{adj}(A)) = 9$.\nReason (R): For any square matrix $A$ of order $n$, $\\det(\\text{adj}(A)) = (\\det(A))^{n-1}$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $n = 3$, $\\det(\\text{adj}(A)) = (\\det(A))^{3-1} = (\\det(A))^2 = 3^2 = 9$. Both Assertion and Reason are true, and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is a symmetric matrix, then $\\text{adj}(A)$ is also a symmetric matrix.\nReason (R): For any square matrix $A$, $\\text{adj}(A^T) = (\\text{adj}(A))^T$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $A^T = A$, $(\\text{adj}(A))^T = \\text{adj}(A^T) = \\text{adj}(A)$, proving $\\text{adj}(A)$ is symmetric. Both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The inverse of an invertible symmetric matrix is symmetric.\nReason (R): $(A^{-1})^T = (A^T)^{-1} = A^{-1}$ when $A^T = A$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The operations of inversion and transposition commute: $(A^{-1})^T = (A^T)^{-1}$. For $A^T = A$, $(A^{-1})^T = A^{-1}$, so $A^{-1}$ is symmetric. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ and $B$ are non-singular matrices of the same order, then $(AB)^{-1} = A^{-1} B^{-1}$.\nReason (R): In general, matrix multiplication is not commutative, and $(AB)(B^{-1} A^{-1}) = A (B B^{-1}) A^{-1} = A I A^{-1} = I$.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because the reversal law states $(AB)^{-1} = B^{-1} A^{-1}$, not $A^{-1} B^{-1}$. Reason is true and explicitly demonstrates that $(AB)(B^{-1} A^{-1}) = I$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For a non-singular $3 \\times 3$ matrix $A$, $\\text{adj}(\\text{adj}(A)) = (\\det(A)) A$.\nReason (R): For any $n \\times n$ non-singular matrix $A$, $\\text{adj}(\\text{adj}(A)) = (\\det(A))^{n-2} A$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Setting $n = 3$ in $\\text{adj}(\\text{adj}(A)) = (\\det(A))^{n-2} A$ gives $(n-2) = 1$, so $\\text{adj}(\\text{adj}(A)) = (\\det(A)) A$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is a diagonal matrix with non-zero diagonal entries, then $A^{-1}$ is also a diagonal matrix.\nReason (R): The inverse of $\\text{diag}(d_1, d_2, \\dots, d_n)$ is $\\text{diag}\\left(\\frac{1}{d_1}, \\frac{1}{d_2}, \\dots, \\frac{1}{d_n}\\right)$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Multiplying $\\text{diag}(d_1, \\dots, d_n)$ by $\\text{diag}(1/d_1, \\dots, 1/d_n)$ yields the identity matrix $I$. Both statements are true and Reason provides the exact formula and justification.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\det(A) = 0$, then $\\text{adj}(A)$ must be the zero matrix.\nReason (R): $A \\cdot \\text{adj}(A) = \\det(A) I_n = O$ when $\\det(A) = 0$.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false: $\\det(A) = 0$ does not mean $\\text{adj}(A) = O$ (for example, if $\\text{rank}(A) = n - 1$, $\\text{adj}(A) \\neq O$). Reason is true because $A \\cdot \\text{adj}(A) = \\det(A) I = O$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an orthogonal matrix, then $\\text{adj}(A) = \\det(A) A^T$.\nReason (R): For any invertible matrix $A$, $\\text{adj}(A) = \\det(A) A^{-1}$, and for an orthogonal matrix, $A^{-1} = A^T$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $A$ is orthogonal, $A^{-1} = A^T$. Substituting this into $\\text{adj}(A) = \\det(A) A^{-1}$ yields $\\text{adj}(A) = \\det(A) A^T$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any square matrix $A$ of order $n$, $\\text{adj}(kA) = k^n \\text{adj}(A)$.\nReason (R): In an $n \\times n$ matrix, each cofactor is a determinant of order $(n-1)$, so multiplying $A$ by $k$ scales each entry of the submatrix by $k$, scaling the cofactor by $k^{n-1}$.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because $\\text{adj}(kA) = k^{n-1} \\text{adj}(A)$, not $k^n \\text{adj}(A)$. Reason is true and gives the exact derivation of why the power is $n-1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numericals ---
  {
    question: "Let $A$ be a $3 \\times 3$ matrix such that $\\det(A) = 3$. Find the value of $\\det(\\text{adj}(A))$.",
    options: [],
    correctOption: null,
    correctAnswer: 9,
    type: "numerical",
    solution: "$$\\det(\\text{adj}(A)) = (\\det(A))^{3-1} = 3^2 = 9.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $3 \\times 3$ matrix such that $\\det(A) = 2$. Find the value of $\\det(\\text{adj}(\\text{adj}(A)))$.",
    options: [],
    correctOption: null,
    correctAnswer: 16,
    type: "numerical",
    solution: "$$\\det(\\text{adj}(\\text{adj}(A))) = (\\det(A))^{(3-1)^2} = 2^4 = 16.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$. Find the sum of all four elements of the inverse matrix $A^{-1}$.",
    options: [],
    correctOption: null,
    correctAnswer: -1,
    type: "numerical",
    solution: "$\\det(A) = (1)(5) - (2)(3) = 5 - 6 = -1$.\n$$\\text{adj}(A) = \\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix}.$$\n$$A^{-1} = \\frac{1}{-1} \\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}.$$\nThe sum of all elements of $A^{-1}$ is $(-5) + 2 + 3 + (-1) = -1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $3 \\times 3$ matrix with $\\det(A) = 5$. Find the value of $\\det(A^{-1})$.",
    options: [],
    correctOption: null,
    correctAnswer: 0.2,
    type: "numerical",
    solution: "$$\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{5} = 0.2.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $3 \\times 3$ matrix such that $\\det(A) = 2$. If $\\text{adj}(2A) = k \\, \\text{adj}(A)$, find the integer value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: 4,
    type: "numerical",
    solution: "For an $n \\times n$ matrix, $\\text{adj}(cA) = c^{n-1} \\text{adj}(A)$.\nFor $n = 3, c = 2$:\n$$c^{n-1} = 2^{3-1} = 2^2 = 4.$$\nThus $k = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $2 \\times 2$ matrix such that $A^2 - 3A + 2I = O$. If $A^{-1} = pA + qI$, find the value of $(p + q)$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "From $A^2 - 3A + 2I = O$, we have:\n$$2I = 3A - A^2 = A(3I - A).$$\nMultiplying by $A^{-1}$:\n$$2 A^{-1} = 3I - A \\implies A^{-1} = -\\frac{1}{2}A + \\frac{3}{2}I.$$\nThus $p = -\\frac{1}{2}$ and $q = \\frac{3}{2}$.\nThen $p + q = -\\frac{1}{2} + \\frac{3}{2} = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "If $A = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$, find the value of $\\det(\\text{adj}(A))$.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "For order $n = 2$, $\\det(\\text{adj}(A)) = (\\det(A))^{2-1} = \\det(A)$.\n$$\\det(A) = (2)(3) - (1)(4) = 6 - 4 = 2.$$\nThus, $\\det(\\text{adj}(A)) = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a $3 \\times 3$ matrix such that $\\det(A) = 4$. Find the value of $\\det(A \\cdot \\text{adj}(A))$.",
    options: [],
    correctOption: null,
    correctAnswer: 64,
    type: "numerical",
    solution: "$$A \\cdot \\text{adj}(A) = \\det(A) I_3 = 4 I_3.$$\n$$\\det(A \\cdot \\text{adj}(A)) = \\det(4 I_3) = 4^3 \\det(I_3) = 64.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be an invertible matrix of order 3 such that $\\det(A) = 1$. Find the value of $\\det(\\text{adj}(\\text{adj}(A)))$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "$$\\det(\\text{adj}(\\text{adj}(A))) = (\\det(A))^{(3-1)^2} = 1^4 = 1.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $A = \\begin{pmatrix} 3 & 4 \\\\ 1 & 2 \\end{pmatrix}$, find the value of the trace of the adjoint matrix $\\text{adj}(A)$.",
    options: [],
    correctOption: null,
    correctAnswer: 5,
    type: "numerical",
    solution: "For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\text{adj}(A) = \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.\nHere $a = 3, b = 4, c = 1, d = 2$, so $\\text{adj}(A) = \\begin{pmatrix} 2 & -4 \\\\ -1 & 3 \\end{pmatrix}$.\nThe trace of $\\text{adj}(A)$ is $2 + 3 = 5$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic4Questions };
