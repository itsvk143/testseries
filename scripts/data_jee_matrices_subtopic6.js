// scripts/data_jee_matrices_subtopic6.js
// Subtopic 6: Cramer's rule (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic6Questions = [
  // --- 10 MCQs ---
  {
    question: "Using Cramer's rule, solve for $x$ in the system $2x + y = 7$ and $x + 3y = 11$. The value of $x$ is:",
    options: [
      "2",
      "3",
      "1",
      "4"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$$\\Delta = \\begin{vmatrix} 2 & 1 \\\\ 1 & 3 \\end{vmatrix} = 6 - 1 = 5.$$\n$$\\Delta_x = \\begin{vmatrix} 7 & 1 \\\\ 11 & 3 \\end{vmatrix} = 21 - 11 = 10.$$\nThus, $x = \\frac{\\Delta_x}{\\Delta} = \\frac{10}{5} = 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "For the system $x + y = 4$ and $2x - y = 5$, the value of $y$ computed using Cramer's rule is:",
    options: [
      "1",
      "3",
      "2",
      "-1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$$\\Delta = \\begin{vmatrix} 1 & 1 \\\\ 2 & -1 \\end{vmatrix} = -1 - 2 = -3.$$\n$$\\Delta_y = \\begin{vmatrix} 1 & 4 \\\\ 2 & 5 \\end{vmatrix} = 5 - 8 = -3.$$\nThus, $y = \\frac{\\Delta_y}{\\Delta} = \\frac{-3}{-3} = 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "In Cramer's rule for three variables, if $\\Delta = 0$ and $\\Delta_x = 5$, what can be concluded about the system?",
    options: [
      "The system has no solution",
      "The system has a unique solution",
      "The system has infinitely many solutions",
      "The system has a solution $x = 0$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since $\\Delta = 0$ while the numerator determinant $\\Delta_x = 5 \\neq 0$, the equation $\\Delta \\cdot x = \\Delta_x$ becomes $0 \\cdot x = 5$, which has no solution. Therefore, the system is inconsistent.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Consider the system of equations:\n$$x + y + z = 6$$\n$$x + 2y + 3z = 14$$\n$$x + 4y + 9z = 36$$\nThe value of $\\Delta = \\det(A)$ is equal to:",
    options: [
      "2",
      "1",
      "6",
      "4"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$$\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 4 & 9 \\end{vmatrix} = (2-1)(3-1)(3-2) = 1 \\times 2 \\times 1 = 2.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If for a system of linear equations in $x, y, z$, $\\Delta = 3$, $\\Delta_x = 9$, $\\Delta_y = -6$, and $\\Delta_z = 12$, then $(x, y, z)$ is:",
    options: [
      "$(3, -2, 4)$",
      "$(3, 2, 4)$",
      "$(9, -6, 12)$",
      "$(1, -2, 3)$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By Cramer's rule:\n$$x = \\frac{\\Delta_x}{\\Delta} = \\frac{9}{3} = 3,$$\n$$y = \\frac{\\Delta_y}{\\Delta} = \\frac{-6}{3} = -2,$$\n$$z = \\frac{\\Delta_z}{\\Delta} = \\frac{12}{3} = 4.$$\nThus, $(x, y, z) = (3, -2, 4)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "For the system $2x - y = 1$ and $4x - 2y = 3$, evaluating $\\Delta$ and $\\Delta_x$ gives:",
    options: [
      "$\\Delta = 0$ and $\\Delta_x = 1$",
      "$\\Delta = 0$ and $\\Delta_x = 0$",
      "$\\Delta = -2$ and $\\Delta_x = 1$",
      "$\\Delta = 4$ and $\\Delta_x = 2$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$$\\Delta = \\begin{vmatrix} 2 & -1 \\\\ 4 & -2 \\end{vmatrix} = -4 - (-4) = 0.$$\n$$\\Delta_x = \\begin{vmatrix} 1 & -1 \\\\ 3 & -2 \\end{vmatrix} = 1(-2) - (-1)(3) = -2 + 3 = 1.$$\nThus, $\\Delta = 0$ and $\\Delta_x = 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Using Cramer's rule, for which value of $k$ does the system $x + ky = 2$ and $kx + y = 2$ fail to have a unique solution?",
    options: [
      "$k = \\pm 1$",
      "$k = 0$",
      "$k = 2$",
      "$k = \\pm 2$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The system fails to have a unique solution when $\\Delta = 0$:\n$$\\Delta = \\begin{vmatrix} 1 & k \\\\ k & 1 \\end{vmatrix} = 1 - k^2 = 0 \\implies k^2 = 1 \\implies k = \\pm 1.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Consider the system $x + y + z = 1$, $x + 2y + 3z = 2$, $x + 3y + 5z = 3$. The value of $\\Delta_z$ is:",
    options: [
      "0",
      "1",
      "2",
      "-1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Replacing column 3 with constants $(1, 2, 3)^T$:\n$$\\Delta_z = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 2 \\\\ 1 & 3 & 3 \\end{vmatrix}.$$\nNotice column 2 and column 3 are identical: $\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$. Hence $\\Delta_z = 0$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If in a system of equations, $\\Delta_x = \\Delta_y = \\Delta_z = 0$ while $\\Delta = 4$, then the solution of the system is:",
    options: [
      "$x = 0, y = 0, z = 0$",
      "Infinitely many solutions",
      "No solution",
      "$x = 1, y = 1, z = 1$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By Cramer's rule:\n$$x = \\frac{\\Delta_x}{\\Delta} = \\frac{0}{4} = 0, \\quad y = \\frac{\\Delta_y}{\\Delta} = \\frac{0}{4} = 0, \\quad z = \\frac{\\Delta_z}{\\Delta} = \\frac{0}{4} = 0.$$\nThus, the unique solution is $(0, 0, 0)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If Cramer's rule is used to solve $3x - 4y = 1$ and $2x + y = 8$, the denominator determinant $\\Delta$ is:",
    options: [
      "11",
      "7",
      "-5",
      "10"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$$\\Delta = \\begin{vmatrix} 3 & -4 \\\\ 2 & 1 \\end{vmatrix} = (3)(1) - (-4)(2) = 3 + 8 = 11.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Cramer's rule can find the unique solution of a system $AX = B$ if and only if $\\det(A) \\neq 0$.\nReason (R): The formulas $x = \\frac{\\Delta_x}{\\Delta}, y = \\frac{\\Delta_y}{\\Delta}, z = \\frac{\\Delta_z}{\\Delta}$ involve division by $\\Delta = \\det(A)$, which requires $\\Delta \\neq 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Division by zero is undefined, so $\\Delta \\neq 0$ is the necessary and sufficient condition for Cramer's rule to give a unique solution. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\Delta = 0$ and $\\Delta_x \\neq 0$, the system has no solution.\nReason (R): The relation $\\Delta \\cdot x = \\Delta_x$ becomes $0 \\cdot x = \\Delta_x$, which has no solution when $\\Delta_x \\neq 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "$0 \\cdot x = \\Delta_x$ with $\\Delta_x \\neq 0$ is a contradiction for any finite $x$, so the system is inconsistent. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\Delta = \\Delta_x = \\Delta_y = \\Delta_z = 0$, the system of equations always has infinitely many solutions.\nReason (R): Three parallel non-coincident planes have $\\Delta = \\Delta_x = \\Delta_y = \\Delta_z = 0$ but have no solution.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because $\\Delta = \\Delta_x = \\Delta_y = \\Delta_z = 0$ can correspond to inconsistent systems (e.g. parallel distinct planes or a triangular prism). Reason correctly provides a counterexample.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For a homogeneous system of equations, $\\Delta_x = \\Delta_y = \\Delta_z = 0$ always holds.\nReason (R): In a homogeneous system, the column of constants is all zeros, so substituting it into any column creates a determinant with a column of zeros, which is 0.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "A determinant with an entire column of zeros is identically zero, so $\\Delta_x = \\Delta_y = \\Delta_z = 0$ for every homogeneous system. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Cramer's rule cannot be directly used to solve a system of 2 equations in 3 variables.\nReason (R): Cramer's rule requires a square coefficient matrix where the number of equations equals the number of variables.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Determinants are defined only for square matrices, so Cramer's rule inherently requires $n$ equations in $n$ variables. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the system $x + y = 2$ and $x + y = 3$ is solved using Cramer's rule, $\\Delta = 0$ and $\\Delta_x \\neq 0$.\nReason (R): $\\Delta = \\begin{vmatrix} 1 & 1 \\\\ 1 & 1 \\end{vmatrix} = 0$, and $\\Delta_x = \\begin{vmatrix} 2 & 1 \\\\ 3 & 1 \\end{vmatrix} = 2 - 3 = -1 \\neq 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Evaluating the determinants confirms $\\Delta = 0$ and $\\Delta_x = -1 \\neq 0$, showing the system has no solution. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the column of constants $B$ is a linear combination of the columns of $A$, then $\\Delta_x, \\Delta_y, \\Delta_z$ can be computed using properties of determinants.\nReason (R): Determinants are multilinear functions of their columns.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Expressing $B = x_0 C_1 + y_0 C_2 + z_0 C_3$ and substituting into $\\Delta_x$ gives $\\Delta_x = x_0 \\Delta$ by multilinearity. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In Cramer's rule, replacing the second column of the coefficient matrix with constants yields $\\Delta_y$.\nReason (R): The formula for $y$ is $y = \\frac{\\Delta_y}{\\Delta}$, where $\\Delta_y$ is obtained by substituting the constant terms into the $y$-coefficient column.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "By definition of Cramer's rule, each variable's numerator determinant replaces that variable's column with the constants vector. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any non-singular system $AX = B$, the solution obtained by matrix inversion $X = A^{-1}B$ is identical to that obtained by Cramer's rule.\nReason (R): Cramer's rule is an explicit component-wise formulation of the matrix equation $X = A^{-1}B = \\frac{1}{\\det(A)} \\text{adj}(A) B$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The $i$-th entry of $\\text{adj}(A) B$ is precisely $\\Delta_i$, so $\\frac{1}{\\det(A)} (\\text{adj}(A) B)_i = \\frac{\\Delta_i}{\\Delta}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\Delta = 2$ and $\\Delta_x = 0$, then $x = 0$.\nReason (R): By Cramer's rule, $x = \\frac{\\Delta_x}{\\Delta} = \\frac{0}{2} = 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "When $\\Delta \\neq 0$ and $\\Delta_x = 0$, $x = \\frac{0}{\\Delta} = 0$. Both statements are true and Reason is the exact calculation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numericals ---
  {
    question: "Using Cramer's rule for the system $2x + 3y = 8$ and $x - 2y = -3$, find the value of $x$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "$\\Delta = \\begin{vmatrix} 2 & 3 \\\\ 1 & -2 \\end{vmatrix} = -4 - 3 = -7$.\n$\\Delta_x = \\begin{vmatrix} 8 & 3 \\\\ -3 & -2 \\end{vmatrix} = -16 - (-9) = -7$.\nThus, $x = \\frac{\\Delta_x}{\\Delta} = \\frac{-7}{-7} = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Using Cramer's rule for the system $2x + 3y = 8$ and $x - 2y = -3$, find the value of $y$.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "$\\Delta = -7$.\n$\\Delta_y = \\begin{vmatrix} 2 & 8 \\\\ 1 & -3 \\end{vmatrix} = -6 - 8 = -14$.\nThus, $y = \\frac{\\Delta_y}{\\Delta} = \\frac{-14}{-7} = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For the system $x + y + z = 6$, $x + 2y + 3z = 14$, $x + 4y + 9z = 36$, find the value of $x$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "Solving gives $x=1, y=2, z=3$ since $1+2+3=6$, $1+4+9=14$, $1+8+27=36$. Thus $x = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For the system $x + y + z = 6$, $x + 2y + 3z = 14$, $x + 4y + 9z = 36$, find the value of $z$.",
    options: [],
    correctOption: null,
    correctAnswer: 3,
    type: "numerical",
    solution: "The unique solution is $(x, y, z) = (1, 2, 3)$, so $z = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If for a system of linear equations, $\\Delta = 4$ and $\\Delta_y = 12$, find the value of $y$.",
    options: [],
    correctOption: null,
    correctAnswer: 3,
    type: "numerical",
    solution: "By Cramer's rule, $y = \\frac{\\Delta_y}{\\Delta} = \\frac{12}{4} = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For the system $3x + y = 10$ and $x - y = 2$, find the value of $\\Delta$.",
    options: [],
    correctOption: null,
    correctAnswer: -4,
    type: "numerical",
    solution: "$$\\Delta = \\begin{vmatrix} 3 & 1 \\\\ 1 & -1 \\end{vmatrix} = -3 - 1 = -4.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For the system $3x + y = 10$ and $x - y = 2$, find the value of $\\Delta_x$.",
    options: [],
    correctOption: null,
    correctAnswer: -12,
    type: "numerical",
    solution: "$$\\Delta_x = \\begin{vmatrix} 10 & 1 \\\\ 2 & -1 \\end{vmatrix} = -10 - 2 = -12.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If $\\Delta = 5$, $\\Delta_x = 15$, $\\Delta_y = 20$, $\\Delta_z = 25$, find the value of $x + y + z$.",
    options: [],
    correctOption: null,
    correctAnswer: 12,
    type: "numerical",
    solution: "$$x = \\frac{15}{5} = 3, \\quad y = \\frac{20}{5} = 4, \\quad z = \\frac{25}{5} = 5.$$\n$$x + y + z = 3 + 4 + 5 = 12.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For what integer value of $k$ does the system $kx + 2y = 4$ and $2x + ky = 4$ have $\\Delta = 0$ with $k > 0$?",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "$$\\Delta = \\begin{vmatrix} k & 2 \\\\ 2 & k \\end{vmatrix} = k^2 - 4 = 0 \\implies k = 2 \\quad (\\text{since } k > 0).$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Consider the system $x + 2y = 5$ and $2x + 4y = 10$. What is the value of $\\Delta$?",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "$$\\Delta = \\begin{vmatrix} 1 & 2 \\\\ 2 & 4 \\end{vmatrix} = 4 - 4 = 0.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  }
];

module.exports = { subtopic6Questions };
