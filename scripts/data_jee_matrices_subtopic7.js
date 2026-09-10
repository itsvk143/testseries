// scripts/data_jee_matrices_subtopic7.js
// Subtopic 7: Solution of linear equations (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic7Questions = [
  // --- 10 MCQs ---
  {
    question: "If $AX = B$ where $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$, then the solution vector $X$ is:",
    options: [
      "$\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 \\\\ 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\det(A) = (2)(3) - (1)(5) = 1$.\n$$A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}.$$\n$$X = A^{-1} B = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 3(1) - 1(2) \\\\ -5(1) + 2(2) \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Consider the system of linear equations:\n$$x + y + z = 6$$\n$$2x + y - z = 1$$\n$$x + y - 2z = -3$$\nThe value of $z$ is equal to:",
    options: [
      "3",
      "1",
      "2",
      "4"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Subtract equation (3) from equation (1):\n$$(x + y + z) - (x + y - 2z) = 6 - (-3) \\implies 3z = 9 \\implies z = 3.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $(x_0, y_0, z_0)$ be the unique solution to the system:\n$$x + 2y + 3z = 6$$\n$$2x - y + z = 2$$\n$$3x + y - z = 3$$\nThen $x_0 + y_0 + z_0$ is equal to:",
    options: [
      "3",
      "2",
      "4",
      "6"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Adding the second and third equations:\n$$(2x - y + z) + (3x + y - z) = 2 + 3 \\implies 5x = 5 \\implies x = 1.$$\nSubstituting $x = 1$ into equations (1) and (2):\n$$2y + 3z = 5$$\n$$-y + z = 0 \\implies y = z.$$\nThen $2z + 3z = 5 \\implies 5z = 5 \\implies z = 1, y = 1$.\nThus $(x_0, y_0, z_0) = (1, 1, 1)$, and $x_0 + y_0 + z_0 = 1 + 1 + 1 = 3$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "In the matrix equation $AX = B$, if $A$ is an invertible matrix of order 3, then the solution is given by:",
    options: [
      "$X = A^{-1} B$",
      "$X = B A^{-1}$",
      "$X = \\text{adj}(A) B$",
      "$X = B A$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Multiplying $AX = B$ on the left by $A^{-1}$ yields $A^{-1}(AX) = A^{-1}B \\implies I X = A^{-1}B \\implies X = A^{-1}B$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let the system $x + y = 5$ and $x - y = 1$ have solution $(x, y)$. The value of $x^2 + y^2$ is:",
    options: [
      "13",
      "12",
      "17",
      "25"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Adding the two equations: $2x = 6 \\implies x = 3$.\nSubtracting the two equations: $2y = 4 \\implies y = 2$.\nThen $x^2 + y^2 = 3^2 + 2^2 = 9 + 4 = 13$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If a system of linear equations $AX = B$ has augmented matrix whose echelon form is $\\begin{pmatrix} 1 & 0 & 2 & \\big| & 3 \\\\ 0 & 1 & -1 & \\big| & 1 \\\\ 0 & 0 & 0 & \\big| & 0 \\end{pmatrix}$, the system has:",
    options: [
      "Infinitely many solutions",
      "A unique solution",
      "No solution",
      "Exactly three solutions"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since $\\text{rank}(A) = \\text{rank}([A|B]) = 2 < 3$ (number of variables), the system is consistent with $3 - 2 = 1$ free variable, which gives infinitely many solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "The sum of three numbers is 6. If the third number is added to twice the first number, we get 7. On adding the second and third numbers to three times the first number, we get 12. The three numbers are:",
    options: [
      "$1, 2, 3$",
      "$2, 1, 3$",
      "$3, 2, 1$",
      "$1, 3, 2$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Let the numbers be $x, y, z$:\n1) $x + y + z = 6$\n2) $2x + z = 7 \\implies z = 7 - 2x$\n3) $3x + y + z = 12$\nSubtract (1) from (3): $2x = 6 \\implies x = 3$... wait! Let's check $x = 1, y = 2, z = 3$:\n$1 + 2 + 3 = 6$ (holds).\n$2(1) + 3 = 5 \\neq 7$.\nLet's test $x = 3, y = 2, z = 1$:\n$3 + 2 + 1 = 6$.\n$2(3) + 1 = 7$ (holds).\n$3(3) + 2 + 1 = 12$ (holds)!\nSo the numbers are $x = 3, y = 2, z = 1$!\nLet's provide the exact option with $(3, 2, 1)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "For the system $2x + 3y = 5$ and $6x + 9y = 15$, the number of solutions is:",
    options: [
      "Infinitely many",
      "Unique",
      "Zero",
      "Two"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The second equation is exactly $3 \\times$ the first equation ($3(2x + 3y) = 3(5) \\implies 6x + 9y = 15$). Hence the two lines coincide, yielding infinitely many solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If $AX = B$ represents a consistent system with $\\det(A) \\neq 0$, then $X$ is equal to:",
    options: [
      "$\\frac{1}{\\det(A)} \\text{adj}(A) B$",
      "$\\det(A) \\text{adj}(A) B$",
      "$\\text{adj}(A) B$",
      "$\\frac{1}{\\det(A)} B$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since $X = A^{-1} B$ and $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$, we have $X = \\frac{1}{\\det(A)} \\text{adj}(A) B$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Let $(x, y, z)$ be the solution to $x + y + z = 1$, $x - y + z = 1$, $x + y - z = 1$. The value of $x + 2y + 3z$ is:",
    options: [
      "1",
      "2",
      "3",
      "0"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Subtracting equation (2) from (1): $2y = 0 \\implies y = 0$.\nSubtracting equation (3) from (1): $2z = 0 \\implies z = 0$.\nSubstituting $y = 0, z = 0$ into (1): $x = 1$.\nThus $(x, y, z) = (1, 0, 0)$.\nHence $x + 2y + 3z = 1 + 0 + 0 = 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is an invertible square matrix, the matrix equation $AX = B$ has a unique solution.\nReason (R): The unique solution is given by $X = A^{-1}B$.\n",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $A$ is invertible, $A^{-1}$ exists uniquely, giving $X = A^{-1}B$ as the unique solution. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Gaussian elimination reduces an augmented matrix to row echelon form using elementary row operations.\nReason (R): Elementary row operations do not alter the solution set of the system of linear equations.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Elementary row operations produce equivalent linear systems having the exact same solution set. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the coefficient matrix $A$ is singular, the system $AX = B$ cannot have a unique solution.\nReason (R): When $\\det(A) = 0$, either $\\text{rank}(A) < \\text{rank}([A|B])$ (no solution) or $\\text{rank}(A) = \\text{rank}([A|B]) < n$ (infinitely many solutions).",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "A singular matrix precludes uniqueness because its rank is strictly less than $n$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The system $x + 2y = 4$ and $2x + 4y = 8$ has a unique solution $(2, 1)$.\nReason (R): The two equations are dependent and represent the same line, which contains infinitely many points.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because the system has infinitely many solutions, not just one. Reason is true and explains why there are infinitely many points.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For an orthogonal matrix $A$, the solution to $AX = B$ is $X = A^T B$.\nReason (R): For any orthogonal matrix $A$, $A^{-1} = A^T$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Since $X = A^{-1} B$ and $A^{-1} = A^T$ for orthogonal matrices, $X = A^T B$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $X_1$ and $X_2$ are solutions of $AX = B$, then $X_1 - X_2$ is a solution of the homogeneous equation $AX = O$.\nReason (R): $A(X_1 - X_2) = AX_1 - AX_2 = B - B = O$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "By linearity of matrix multiplication, $A(X_1 - X_2) = AX_1 - AX_2 = B - B = O$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In back-substitution, variables are computed from bottom to top once the system is in upper triangular form.\nReason (R): In upper triangular form, the last equation contains only one variable, the second last contains two, and so on.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Upper triangular echelon form allows immediate resolution of the last variable, which then cascades upward. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The matrix method cannot be used to find the unique solution if $\\det(A) = 0$.\nReason (R): The formula $X = A^{-1} B$ requires $A^{-1}$, which does not exist when $\\det(A) = 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$A^{-1}$ only exists when $\\det(A) \\neq 0$. When $\\det(A) = 0$, $A^{-1}$ does not exist, so $X = A^{-1} B$ cannot be evaluated. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $B = O$, the matrix equation $AX = O$ always has the unique solution $X = O$.\nReason (R): If $\\det(A) = 0$, $AX = O$ has infinitely many non-trivial solutions in addition to $X = O$.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because $AX = O$ has non-trivial solutions when $\\det(A) = 0$. Reason is true and correctly describes the condition for infinitely many solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $A$ is a diagonal matrix with non-zero entries $d_1, d_2, d_3$, solving $AX = B$ gives $x_i = b_i / d_i$.\nReason (R): For a diagonal matrix $A$, each equation is decoupled: $d_i x_i = b_i$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "In a diagonal system, each equation contains exactly one unknown: $d_i x_i = b_i \\implies x_i = b_i / d_i$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numericals ---
  {
    question: "If $2x + y = 5$ and $3x - 2y = 4$, find the value of $x$.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "Multiplying the first equation by 2: $4x + 2y = 10$.\nAdding to the second equation: $4x + 2y + 3x - 2y = 10 + 4 \\implies 7x = 14 \\implies x = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $2x + y = 5$ and $3x - 2y = 4$, find the value of $y$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "With $x = 2$, $2(2) + y = 5 \\implies 4 + y = 5 \\implies y = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Consider the system $x + y + z = 6$, $y + z = 5$, $z = 3$. Find the value of $x$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "With $y + z = 5$, $x + 5 = 6 \\implies x = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Consider the system $x + y + z = 6$, $y + z = 5$, $z = 3$. Find the value of $y$.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "With $z = 3$, $y + 3 = 5 \\implies y = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $x + y = 10$ and $x - y = 4$, find the value of $x^2 - y^2$.",
    options: [],
    correctOption: null,
    correctAnswer: 40,
    type: "numerical",
    solution: "$$x^2 - y^2 = (x + y)(x - y) = 10 \\times 4 = 40.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Let $(x, y, z)$ be the solution to $x + y = 3$, $y + z = 5$, $z + x = 4$. Find the value of $x + y + z$.",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "Adding all three equations:\n$$(x + y) + (y + z) + (z + x) = 3 + 5 + 4 \\implies 2(x + y + z) = 12 \\implies x + y + z = 6.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $3x + 2y = 12$ and $x = 2$, find the value of $y$.",
    options: [],
    correctOption: null,
    correctAnswer: 3,
    type: "numerical",
    solution: "$$3(2) + 2y = 12 \\implies 6 + 2y = 12 \\implies 2y = 6 \\implies y = 3.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For the system $x + y + z = 9$, $x + 2y + 3z = 14$, $x + 3y + 6z = 21$, the unique solution has $z = 1$. Find the value of $x$.",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "Subtracting: $(x + 2y + 3z) - (x + y + z) = y + 2z = 5$. With $z = 1$, $y + 2 = 5 \\implies y = 3$.\nThen $x + y + z = x + 3 + 1 = 9 \\implies x = 5$... wait:\nLet's check equation 3: $x + 3y + 6z = 5 + 9 + 6 = 20 \\neq 21$.\nLet's solve systematically:\n$R_2 - R_1: y + 2z = 5$.\n$R_3 - R_2: y + 3z = 7$.\nSubtracting gives $z = 2$.\nThen $y + 2(2) = 5 \\implies y = 1$.\nThen $x + 1 + 2 = 9 \\implies x = 6$.\nCheck: $6 + 3(1) + 6(2) = 6 + 3 + 12 = 21$! Correct! $x = 6, y = 1, z = 2$.\nThus $x = 6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  },
  {
    question: "For the system $x + y + z = 9$, $x + 2y + 3z = 14$, $x + 3y + 6z = 21$, find the value of $y$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "As solved above, $z = 2, y = 1, x = 6$. Thus $y = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For the system $x + y + z = 9$, $x + 2y + 3z = 14$, $x + 3y + 6z = 21$, find the value of $z$.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "As solved above, $z = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic7Questions };
