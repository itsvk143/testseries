// scripts/data_jee_matrices_subtopic3.js
// Subtopic 3: Properties of determinants (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic3Questions = [
  // --- 10 MCQs ---
  {
    question: "The value of the determinant $\\begin{vmatrix} 1 & a & b+c \\\\ 1 & b & c+a \\\\ 1 & c & a+b \\end{vmatrix}$ is equal to:",
    options: [
      "0",
      "$a+b+c$",
      "$abc$",
      "1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Applying the column operation $C_3 \\to C_3 + C_2$:\n$$\\begin{vmatrix} 1 & a & a+b+c \\\\ 1 & b & a+b+c \\\\ 1 & c & a+b+c \\end{vmatrix} = (a+b+c) \\begin{vmatrix} 1 & a & 1 \\\\ 1 & b & 1 \\\\ 1 & c & 1 \\end{vmatrix}.$$\nSince column 1 and column 3 are identical, the determinant is identically 0.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $a, b, c$ are distinct real numbers, then the value of $\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$ is equal to:",
    options: [
      "$(a-b)(b-c)(c-a)$",
      "$(a+b)(b+c)(c+a)$",
      "$(a-b)(b-c)(a-c)$",
      "$a^2 + b^2 + c^2$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "This is the classic Vandermonde determinant. Performing $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_1$:\n$$\\begin{vmatrix} 1 & a & a^2 \\\\ 0 & b-a & b^2-a^2 \\\\ 0 & c-a & c^2-a^2 \\end{vmatrix} = (b-a)(c-a) \\begin{vmatrix} 1 & b+a \\\\ 1 & c+a \\end{vmatrix} = (b-a)(c-a)(c-b) = (a-b)(b-c)(c-a).$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ is a square matrix of order 3 and $\\det(A) = 5$, then the value of $\\det(2A^T)$ is:",
    options: [
      "40",
      "10",
      "20",
      "80"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For a matrix of order $n = 3$, $\\det(kA) = k^3 \\det(A)$. Since $\\det(A^T) = \\det(A)$:\n$$\\det(2A^T) = 2^3 \\det(A^T) = 8 \\det(A) = 8 \\times 5 = 40.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $\\omega$ is a non-real cube root of unity, then the value of the determinant $\\begin{vmatrix} 1 & \\omega & \\omega^2 \\\\ \\omega & \\omega^2 & 1 \\\\ \\omega^2 & 1 & \\omega \\end{vmatrix}$ is:",
    options: [
      "0",
      "1",
      "3",
      "$-1$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Applying $C_1 \\to C_1 + C_2 + C_3$:\n$$\\begin{vmatrix} 1+\\omega+\\omega^2 & \\omega & \\omega^2 \\\\ 1+\\omega+\\omega^2 & \\omega^2 & 1 \\\\ 1+\\omega+\\omega^2 & 1 & \\omega \\end{vmatrix}.$$\nSince $1 + \\omega + \\omega^2 = 0$, every entry in the first column is 0, so the determinant is 0.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The value of the determinant $\\begin{vmatrix} \\sin^2\\theta & \\cos^2\\theta & 1 \\\\ \\cos^2\\theta & \\sin^2\\theta & 1 \\\\ -10 & 12 & 2 \\end{vmatrix}$ is:",
    options: [
      "0",
      "1",
      "-1",
      "2"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Applying $C_1 \\to C_1 + C_2$:\n$$\\begin{vmatrix} \\sin^2\\theta + \\cos^2\\theta & \\cos^2\\theta & 1 \\\\ \\cos^2\\theta + \\sin^2\\theta & \\sin^2\\theta & 1 \\\\ 2 & 12 & 2 \\end{vmatrix} = \\begin{vmatrix} 1 & \\cos^2\\theta & 1 \\\\ 1 & \\sin^2\\theta & 1 \\\\ 2 & 12 & 2 \\end{vmatrix}.$$\nNotice column 1 and column 3 are identical: $\\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$. Hence, the determinant is 0.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $A$ and $B$ are non-singular square matrices of order 3 such that $\\det(A) = 3$ and $\\det(B) = -2$, then $\\det(A^{-1} B^2)$ is equal to:",
    options: [
      "$\\frac{4}{3}$",
      "$-\\frac{4}{3}$",
      "$\\frac{12}{3}$",
      "$-12$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$$\\det(A^{-1} B^2) = \\det(A^{-1}) (\\det(B))^2 = \\frac{1}{\\det(A)} (\\det(B))^2 = \\frac{1}{3} (-2)^2 = \\frac{4}{3}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the determinant $\\Delta = \\begin{vmatrix} x & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{vmatrix} = 0$, then the value of $x$ is:",
    options: [
      "1",
      "2",
      "0",
      "-1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Notice that when $x = 1$, the rows are in arithmetic progression ($1, 2, 3$ with difference 1; $4, 5, 6$ with difference 1; $7, 8, 9$ with difference 1).\nPerforming $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_2$ gives rows of $(3, 3, 3)$ which are identical, making the determinant 0. Thus $x = 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If two rows of a square matrix are interchanged, then the determinant of the resulting matrix is:",
    options: [
      "Multiplied by $-1$",
      "Unchanged",
      "Multiplied by 0",
      "Squared"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By the fundamental property of determinants, interchanging any two rows (or columns) changes the sign of the determinant, i.e., it is multiplied by $-1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The value of the determinant $\\begin{vmatrix} 0 & a-b & a-c \\\\ b-a & 0 & b-c \\\\ c-a & c-b & 0 \\end{vmatrix}$ is equal to:",
    options: [
      "0",
      "$(a-b)(b-c)(c-a)$",
      "$a^3 + b^3 + c^3$",
      "$1$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The matrix is skew-symmetric because $a_{ij} = -a_{ji}$ for all $i, j$ and $a_{ii} = 0$. Since its order is 3 (odd), the determinant of any odd-order skew-symmetric matrix is identically 0.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $\\begin{vmatrix} x+1 & x+2 & x+4 \\\\ x+3 & x+5 & x+8 \\\\ x+7 & x+10 & x+14 \\end{vmatrix} = -2$, then the value of $x$ is:",
    options: [
      "Any real number (independent of $x$)",
      "0",
      "1",
      "2"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Perform row operations $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_2$:\n$$\\begin{vmatrix} x+1 & x+2 & x+4 \\\\ 2 & 3 & 4 \\\\ 4 & 5 & 6 \\end{vmatrix}.$$\nNow perform $R_3 \\to R_3 - R_2$:\n$$\\begin{vmatrix} x+1 & x+2 & x+4 \\\\ 2 & 3 & 4 \\\\ 2 & 2 & 2 \\end{vmatrix} = 2 \\begin{vmatrix} x+1 & x+2 & x+4 \\\\ 2 & 3 & 4 \\\\ 1 & 1 & 1 \\end{vmatrix}.$$\nPerform $C_2 \\to C_2 - C_1$ and $C_3 \\to C_3 - C_2$:\n$$2 \\begin{vmatrix} x+1 & 1 & 2 \\\\ 2 & 1 & 1 \\\\ 1 & 0 & 0 \\end{vmatrix} = 2 [1(1 - 2)] = 2(-1) = -2.$$\nThe determinant evaluates to $-2$ regardless of $x$, so it holds for any real number $x$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If any two rows (or columns) of a determinant are identical, the value of the determinant is zero.\nReason (R): Interchanging the two identical rows multiplies the determinant by $-1$, so $\\Delta = -\\Delta \\implies 2\\Delta = 0 \\implies \\Delta = 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Interchanging identical rows does not alter the matrix, yet by the sign-reversal property, $\\Delta \\to -\\Delta$. Hence $\\Delta = -\\Delta \\implies \\Delta = 0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any square matrix $A$, $\\det(A^T) = \\det(A)$.\nReason (R): The value of a determinant remains unchanged if its rows and columns are interchanged.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Transposition interchanges rows with columns, and the expansion along rows of $A^T$ is identical to the expansion along columns of $A$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The elementary row operation $R_i \\to R_i + k R_j$ ($i \\neq j$) does not change the value of the determinant.\nReason (R): The determinant of a sum of two row vectors can be split into the sum of two determinants, one of which contains two proportional rows and is therefore zero.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Splitting along row $i$ yields $\\det(A) + k \\det(A')$, where $A'$ has row $j$ duplicated, so $\\det(A') = 0$. Both Assertion and Reason are true, and Reason is the exact explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an invertible matrix, then $\\det(A^{-1}) = \\frac{1}{\\det(A)}$.\nReason (R): $A A^{-1} = I$, and taking determinants on both sides gives $\\det(A) \\det(A^{-1}) = \\det(I) = 1$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Using the multiplicative property $\\det(AB) = \\det(A)\\det(B)$ on $A A^{-1} = I$ directly yields $\\det(A)\\det(A^{-1}) = 1 \\implies \\det(A^{-1}) = 1/\\det(A)$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any $3 \\times 3$ matrix $A$, $\\det(3A) = 9\\det(A)$.\nReason (R): For any $n \\times n$ matrix $A$ and scalar $k$, $\\det(kA) = k^n \\det(A)$.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because for $n = 3$, $\\det(3A) = 3^3 \\det(A) = 27 \\det(A)$, not $9\\det(A)$. Reason is true as $\\det(kA) = k^n \\det(A)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ and $B$ are square matrices of the same order, then $\\det(AB) = \\det(BA)$.\nReason (R): $\\det(AB) = \\det(A) \\det(B) = \\det(B) \\det(A) = \\det(BA)$ because multiplication of real (or complex) numbers is commutative.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Although $AB \\neq BA$ in general, $\\det(AB) = \\det(A)\\det(B) = \\det(BA)$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The determinant of a triangular matrix (upper or lower) is equal to the product of its diagonal elements.\nReason (R): In a triangular matrix, expanding successively along the row or column containing all zeros except the diagonal entry leaves a diagonal product.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "For an upper triangular matrix, expanding along column 1 leaves $a_{11}$ times the subdeterminant, which similarly reduces to $a_{11} a_{22} \\cdots a_{nn}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If all elements of any one row of a determinant are multiplied by a non-zero scalar $k$, the value of the determinant is multiplied by $k$.\nReason (R): The determinant is a linear function of each of its rows separately.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "By multilinearity of determinants, scaling a single row by $k$ factors $k$ out of the determinant. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an orthogonal matrix, then $\\det(A)$ must be 1.\nReason (R): For an orthogonal matrix $A A^T = I$, so $(\\det(A))^2 = 1$, which gives $\\det(A) = \\pm 1$.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because reflection matrices (which are orthogonal) have $\\det(A) = -1$. Reason is true as $(\\det(A))^2 = 1 \\implies \\det(A) = \\pm 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\det(A) = 0$, then the matrix $A$ cannot have an inverse.\nReason (R): If $A^{-1}$ existed, then $\\det(A) \\det(A^{-1}) = \\det(I) = 1$, which would mean $0 \\times \\det(A^{-1}) = 1$, a contradiction.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "A singular matrix ($\\det(A) = 0$) cannot have an inverse because $0 \\cdot \\det(A^{-1}) = 0 \\neq 1$. Both statements are true and Reason provides the contradiction proof.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numericals ---
  {
    question: "The value of the determinant $\\begin{vmatrix} 2024 & 2025 & 2026 \\\\ 2025 & 2026 & 2027 \\\\ 2026 & 2027 & 2028 \\end{vmatrix}$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "Applying $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_2$:\n$$\\begin{vmatrix} 2024 & 2025 & 2026 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{vmatrix}.$$\nSince $R_2$ and $R_3$ are identical, the determinant is 0.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $A$ is a $3 \\times 3$ matrix with $\\det(A) = 4$, find the value of $\\det(A^2)$.",
    options: [],
    correctOption: null,
    correctAnswer: 16,
    type: "numerical",
    solution: "$$\\det(A^2) = (\\det(A))^2 = 4^2 = 16.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the value of the determinant $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$.",
    options: [],
    correctOption: null,
    correctAnswer: 24,
    type: "numerical",
    solution: "The matrix is upper triangular. The determinant is the product of its diagonal elements:\n$$\\Delta = 1 \\times 4 \\times 6 = 24.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ and $B$ be $3 \\times 3$ matrices such that $\\det(A) = 2$ and $\\det(B) = 3$. Find the value of $\\det(AB)$.",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "$$\\det(AB) = \\det(A) \\times \\det(B) = 2 \\times 3 = 6.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $A$ is a $3 \\times 3$ matrix with $\\det(A) = 3$, find the value of $\\det(2A)$.",
    options: [],
    correctOption: null,
    correctAnswer: 24,
    type: "numerical",
    solution: "For $n = 3$, $\\det(2A) = 2^3 \\det(A) = 8 \\times 3 = 24$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the positive integer value of $x$ satisfying the determinant equation $\\begin{vmatrix} x & 3 \\\\ 4 & x \\end{vmatrix} = 4$.",
    options: [],
    correctOption: null,
    correctAnswer: 4,
    type: "numerical",
    solution: "Expanding the determinant:\n$$x^2 - (3)(4) = 4 \\implies x^2 - 12 = 4 \\implies x^2 = 16.$$\nSince $x$ is a positive integer, $x = 4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "The value of the determinant $\\begin{vmatrix} 10 & 20 & 30 \\\\ 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{vmatrix}$ is equal to:",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "Factoring out 10 from the first row:\n$$10 \\begin{vmatrix} 1 & 2 & 3 \\\\ 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{vmatrix}.$$\nSince row 1 and row 2 are identical, the determinant is 0.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $A$ is a $3 \\times 3$ matrix such that $\\det(A) = 5$, find the value of $\\det(A^T A)$.",
    options: [],
    correctOption: null,
    correctAnswer: 25,
    type: "numerical",
    solution: "$$\\det(A^T A) = \\det(A^T) \\det(A) = (\\det(A))^2 = 5^2 = 25.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $\\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & x & 6 \\\\ 3 & 6 & 9 \\end{vmatrix} = 0$, find the value of the determinant regardless of $x$.",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "Notice that row 3 is $3 \\times R_1$ ($3 \\times [1, 2, 3] = [3, 6, 9]$). Since two rows are proportional, the determinant is 0 for any value of $x$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $A$ be a square matrix of order 3 such that $\\det(A) = -2$. Find the value of $\\det(-A)$.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "$$\\det(-A) = (-1)^3 \\det(A) = -1 \\times (-2) = 2.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic3Questions };
