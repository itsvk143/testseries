// scripts/repaired_genuine_matrices.js
// 41 Vetted Genuine Questions for Matrices & Determinants (Class 12, Mathematics)

const repairedGenuineMatrices = [
  // Subtopic: Types of matrices (10 questions)
  {
    _id: "6a98e8e3910bb37b0e55870f",
    subtopic: "Types of matrices",
    question: "Which of the following matrices is a scalar matrix?",
    options: [
      "$\\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 5 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 1 & 1 & 1 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A scalar matrix is a diagonal matrix in which all the diagonal elements are equal and all off-diagonal elements are zero. The matrix $\\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 5 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix} = 5I_3$ satisfies this definition.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e3910bb37b0e558710",
    subtopic: "Types of matrices",
    question: "A square matrix $A = [a_{ij}]_{n \\times n}$ in which all elements $a_{ij} = 0$ for all $i, j$ is called a:",
    options: [
      "Null matrix",
      "Identity matrix",
      "Diagonal matrix",
      "Scalar matrix"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A matrix whose every entry is zero is called a null matrix (or zero matrix), denoted by $O$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e3910bb37b0e558711",
    subtopic: "Types of matrices",
    question: "Identify the type of the matrix $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$.",
    options: [
      "Scalar matrix",
      "Row matrix",
      "Column matrix",
      "Identity matrix"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The matrix $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} = 2I_2$ is a diagonal matrix where all diagonal entries are equal non-zero scalars. Hence, it is a scalar matrix.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e3910bb37b0e558712",
    subtopic: "Types of matrices",
    question: "Which of the following $2 \\times 2$ matrices is an upper triangular matrix?",
    options: [
      "$\\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "In an upper triangular matrix $A = [a_{ij}]$, every element below the main diagonal is zero ($a_{ij} = 0$ for all $i > j$). For $\\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$, $a_{21} = 0$, so it is upper triangular.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e3910bb37b0e558713",
    subtopic: "Types of matrices",
    question: "A matrix having order $1 \\times n$ (only one row and $n$ columns) is known as a:",
    options: [
      "Row matrix",
      "Column matrix",
      "Square matrix",
      "Diagonal matrix"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A matrix having only one row is called a row matrix (or row vector). Its general order is $1 \\times n$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e3910bb37b0e558714",
    subtopic: "Types of matrices",
    question: "Consider the matrix $M = \\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$. Which of the following statements is correct?",
    options: [
      "$M$ is both a diagonal matrix and a scalar matrix, but not an identity matrix",
      "$M$ is an identity matrix",
      "$M$ is an orthogonal matrix",
      "$M$ is a skew-symmetric matrix"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since all non-diagonal entries are 0, $M$ is a diagonal matrix. Since all diagonal entries are equal to 3, it is a scalar matrix. However, because the diagonal elements are 3 and not 1, it is not an identity matrix.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e3910bb37b0e558715",
    subtopic: "Types of matrices",
    question: "A square matrix $A$ is defined to be a symmetric matrix if:",
    options: [
      "$A^T = A$",
      "$A^T = -A$",
      "$A = A^{-1}$",
      "$A^2 = A$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A square matrix $A$ is symmetric if and only if its transpose equals the matrix itself, i.e., $A^T = A$, meaning $a_{ij} = a_{ji}$ for all $i, j$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e3910bb37b0e558716",
    subtopic: "Types of matrices",
    question: "Which of the following matrices is NOT a square matrix?",
    options: [
      "$\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A square matrix must have the same number of rows and columns ($m = n$). The matrix $\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{pmatrix}$ has order $2 \\times 3$, so it is not a square matrix.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e3910bb37b0e558717",
    subtopic: "Types of matrices",
    question: "An identity matrix $I_n$ of order $n$ is a special case of a:",
    options: [
      "Scalar matrix",
      "Row matrix",
      "Column matrix",
      "Null matrix"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A scalar matrix has all off-diagonal entries zero and all diagonal entries equal to a constant $k$. When $k = 1$, the scalar matrix becomes an identity matrix $I_n$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e3910bb37b0e558718",
    subtopic: "Types of matrices",
    question: "A matrix having order $m \\times 1$ (only one column and $m$ rows) is called a:",
    options: [
      "Column matrix",
      "Row matrix",
      "Square matrix",
      "Diagonal matrix"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A matrix consisting of a single column is defined as a column matrix (or column vector). Its general order is $m \\times 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // Subtopic: Adjoint and inverse (10 questions)
  {
    _id: "6a98e8e4910bb37b0e558719",
    subtopic: "Adjoint and inverse",
    question: "If $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, then the adjoint of matrix $A$, denoted by $\\text{adj}(A)$, is:",
    options: [
      "$\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
      "$\\begin{pmatrix} a & c \\\\ b & d \\end{pmatrix}$",
      "$\\begin{pmatrix} d & -c \\\\ -b & a \\end{pmatrix}$",
      "$\\begin{pmatrix} -d & b \\\\ c & -a \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The cofactor matrix of $A$ is $C = \\begin{pmatrix} d & -c \\\\ -b & a \\end{pmatrix}$. The adjoint is the transpose of the cofactor matrix: $\\text{adj}(A) = C^T = \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e4910bb37b0e55871a",
    subtopic: "Adjoint and inverse",
    question: "For a square matrix $A$, if $\\det(A) \\neq 0$, then $A$ is called:",
    options: [
      "Non-singular",
      "Singular",
      "Nilpotent",
      "Idempotent"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A square matrix $A$ is defined to be non-singular if its determinant is non-zero ($\\det(A) \\neq 0$), which is the necessary and sufficient condition for $A^{-1}$ to exist.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e4910bb37b0e55871b",
    subtopic: "Adjoint and inverse",
    question: "What is the inverse of the $2 \\times 2$ matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, where $ad - bc \\neq 0$?",
    options: [
      "$\\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
      "$\\frac{1}{ad-bc} \\begin{pmatrix} a & c \\\\ b & d \\end{pmatrix}$",
      "$\\frac{1}{ad-bc} \\begin{pmatrix} d & -c \\\\ -b & a \\end{pmatrix}$",
      "$\\frac{1}{ad-bc} \\begin{pmatrix} -a & b \\\\ c & -d \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The inverse is given by $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A) = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e4910bb37b0e55871c",
    subtopic: "Adjoint and inverse",
    question: "If $A$ is an invertible matrix, which of the following statements is FALSE?",
    options: [
      "$\\det(A) = 0$",
      "$\\det(A) \\neq 0$",
      "$A^{-1}$ exists and is unique",
      "The rows and columns of $A$ are linearly independent"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "An invertible matrix must have a non-zero determinant ($\\det(A) \\neq 0$). Thus, the statement $\\det(A) = 0$ is completely false.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e4910bb37b0e55871d",
    subtopic: "Adjoint and inverse",
    question: "Let $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. What is the adjoint of matrix $A$?",
    options: [
      "$\\begin{pmatrix} 4 & -1 \\\\ -2 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -4 & 1 \\\\ 2 & -3 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\text{adj}(A) = \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$. Here $a=3, b=1, c=2, d=4$, so $\\text{adj}(A) = \\begin{pmatrix} 4 & -1 \\\\ -2 & 3 \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e4910bb37b0e55871e",
    subtopic: "Adjoint and inverse",
    question: "If $A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$, then the inverse matrix $A^{-1}$ is:",
    options: [
      "$\\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 & 5 \\\\ 1 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 \\\\ 5 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & 1 \\\\ -5 & 3 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\det(A) = (2)(3) - (5)(1) = 6 - 5 = 1$. $\\text{adj}(A) = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$. Hence, $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A) = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e4910bb37b0e55871f",
    subtopic: "Adjoint and inverse",
    question: "For an invertible square matrix $A$ of order $n$, the relation between $A^{-1}$ and $\\text{adj}(A)$ is:",
    options: [
      "$A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$",
      "$A^{-1} = \\det(A) \\cdot \\text{adj}(A)$",
      "$A^{-1} = \\frac{\\det(A)}{\\text{adj}(A)}$",
      "$A^{-1} = \\text{adj}(A) - \\det(A) I$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "From the identity $A \\cdot \\text{adj}(A) = \\det(A) I_n$, multiplying both sides on the left by $A^{-1}$ yields $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e4910bb37b0e558720",
    subtopic: "Adjoint and inverse",
    question: "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$, then the matrix product $AB$ is:",
    options: [
      "$\\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -2 \\\\ -2 & 0 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Notice that $B = \\text{adj}(A)$. Since $\\det(A) = (1)(4) - (2)(3) = 4 - 6 = -2$, we have $AB = A \\cdot \\text{adj}(A) = \\det(A) I_2 = -2 \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e4910bb37b0e558721",
    subtopic: "Adjoint and inverse",
    question: "The adjoint of the identity matrix $I_n$ of order $n$ is:",
    options: [
      "$I_n$",
      "$O$ (zero matrix)",
      "$-I_n$",
      "$n I_n$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Since $I_n \\cdot \\text{adj}(I_n) = \\det(I_n) I_n = 1 \\cdot I_n = I_n$, multiplying both sides by $I_n^{-1} = I_n$ gives $\\text{adj}(I_n) = I_n$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8e4910bb37b0e558722",
    subtopic: "Adjoint and inverse",
    question: "If $A = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$, then $A^{-1}$ is:",
    options: [
      "$\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}$",
      "$\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}$",
      "$\\begin{pmatrix} -\\cos\\theta & \\sin\\theta \\\\ \\sin\\theta & -\\cos\\theta \\end{pmatrix}$",
      "$\\begin{pmatrix} \\sin\\theta & \\cos\\theta \\\\ -\\cos\\theta & \\sin\\theta \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\det(A) = \\cos^2\\theta - (-\\sin^2\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1$. The matrix is orthogonal, so $A^{-1} = A^T = \\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // Subtopic: Solution of linear equations (10 questions)
  {
    _id: "6a98e8f0910bb37b0e55872e",
    subtopic: "Solution of linear equations",
    question: "Consider the system of linear equations:\n$$2x + 3y = 7$$\n$$x - y = 1$$\nFind the value of $x + y$.",
    options: [
      "3",
      "2",
      "4",
      "1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "From $x - y = 1$, we have $x = y + 1$. Substituting into the first equation: $2(y + 1) + 3y = 7 \\implies 5y + 2 = 7 \\implies y = 1$. Then $x = 1 + 1 = 2$. Thus, $x + y = 2 + 1 = 3$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8f0910bb37b0e55872f",
    subtopic: "Solution of linear equations",
    question: "For what value of $k$ does the system of equations $kx + 2y = 5$ and $3x + y = 1$ have NO solution?",
    options: [
      "6",
      "3",
      "2",
      "-6"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A system of two linear equations has no solution if the coefficient lines are parallel but not coincident: $\\frac{k}{3} = \\frac{2}{1} \\neq \\frac{5}{1}$. This yields $k = 6$. Since $\\frac{6}{3} = 2 \\neq 5$, the system has no solution for $k = 6$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8f0910bb37b0e558730",
    subtopic: "Solution of linear equations",
    question: "Consider the matrix $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Find the value of $\\det(A)$.",
    options: [
      "5",
      "8",
      "11",
      "7"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\det(A) = (2)(4) - (1)(3) = 8 - 3 = 5$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8f0910bb37b0e558731",
    subtopic: "Solution of linear equations",
    question: "If the determinant of the matrix $B = \\begin{pmatrix} x & 2 \\\\ 3 & x \\end{pmatrix}$ is equal to $10$, find the positive value of $x$.",
    options: [
      "4",
      "2",
      "3",
      "5"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\det(B) = x^2 - (2)(3) = x^2 - 6$. Given $x^2 - 6 = 10 \\implies x^2 = 16$. Since $x > 0$, $x = 4$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8f0910bb37b0e558732",
    subtopic: "Solution of linear equations",
    question: "Using Cramer's rule for the system $x + 2y = 5$ and $3x - y = 1$, the value of $y$ is:",
    options: [
      "2",
      "1",
      "3",
      "4"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\Delta = \\begin{vmatrix} 1 & 2 \\\\ 3 & -1 \\end{vmatrix} = -1 - 6 = -7$.\n$\\Delta_y = \\begin{vmatrix} 1 & 5 \\\\ 3 & 1 \\end{vmatrix} = 1 - 15 = -14$.\nThus, $y = \\frac{\\Delta_y}{\\Delta} = \\frac{-14}{-7} = 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8f0910bb37b0e558733",
    subtopic: "Solution of linear equations",
    question: "Find the inverse of the matrix $C = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$.",
    options: [
      "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & 1 \\\\ 5 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 \\\\ 5 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & -1 \\\\ -5 & -3 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\det(C) = (3)(2) - (1)(5) = 6 - 5 = 1$. The adjoint is $\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$. Hence, $C^{-1} = \\frac{1}{\\det(C)} \\text{adj}(C) = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8f0910bb37b0e558734",
    subtopic: "Solution of linear equations",
    question: "For the system of linear equations $x + 2y = 3$ and $2x + ky = 6$ to possess infinitely many solutions, the value of $k$ must be:",
    options: [
      "4",
      "3",
      "2",
      "1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For infinitely many solutions, the two equations must be proportional: $\\frac{1}{2} = \\frac{2}{k} = \\frac{3}{6}$. Equating $\\frac{1}{2} = \\frac{2}{k}$ gives $k = 4$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8f0910bb37b0e558735",
    subtopic: "Solution of linear equations",
    question: "The row echelon form of the augmented matrix of a consistent system of linear equations is $\\begin{pmatrix} 1 & 2 & \\big| & 7 \\\\ 0 & 1 & \\big| & 2 \\end{pmatrix}$. What is the value of $x$?",
    options: [
      "3",
      "1",
      "2",
      "4"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The second row yields $y = 2$. Substituting into the first row: $x + 2y = 7 \\implies x + 2(2) = 7 \\implies x = 7 - 4 = 3$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8f0910bb37b0e558736",
    subtopic: "Solution of linear equations",
    question: "If $A = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$, find the matrix sum $A + B$.",
    options: [
      "$\\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 2 \\\\ 3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 2 \\\\ 4 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 0 \\\\ 3 & 4 \\end{pmatrix}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$A + B = \\begin{pmatrix} 4 + 1 & 2 + 0 \\\\ 1 + 2 & 3 + 1 \\end{pmatrix} = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8f0910bb37b0e558737",
    subtopic: "Solution of linear equations",
    question: "What is the rank of the matrix $M = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\end{pmatrix}$?",
    options: [
      "1",
      "2",
      "3",
      "0"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The second row is $2 \\times R_1$. Performing $R_2 \\to R_2 - 2R_1$ gives $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Since there is only 1 non-zero row in echelon form, the rank is 1.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // Subtopic: Cramer's rule (11 questions)
  {
    _id: "6a98e8fc910bb37b0e558756",
    subtopic: "Cramer's rule",
    question: "Cramer's rule can be directly applied to yield a unique solution for a system of $n$ linear equations in $n$ variables if and only if:",
    options: [
      "The determinant of the coefficient matrix is non-zero ($\\Delta \\neq 0$)",
      "The determinant of the coefficient matrix is zero ($\\Delta = 0$)",
      "All constant terms are zero",
      "The coefficient matrix is symmetric"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Cramer's rule expresses each variable as $x_i = \\frac{\\Delta_i}{\\Delta}$. This formula yields a unique, finite solution if and only if the denominator determinant $\\Delta \\neq 0$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8fc910bb37b0e558757",
    subtopic: "Cramer's rule",
    question: "For the system of equations $2x + 3y = 7$ and $x - y = 1$, what is the determinant of the coefficient matrix $\\Delta$?",
    options: [
      "-5",
      "5",
      "1",
      "-1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The coefficient matrix is $\\begin{pmatrix} 2 & 3 \\\\ 1 & -1 \\end{pmatrix}$. Its determinant is $\\Delta = (2)(-1) - (3)(1) = -2 - 3 = -5$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8fc910bb37b0e558758",
    subtopic: "Cramer's rule",
    question: "Using Cramer's rule, how is the value of $x$ computed for a non-singular system $AX = B$?",
    options: [
      "$x = \\frac{\\Delta_x}{\\Delta}$",
      "$x = \\frac{\\Delta}{\\Delta_x}$",
      "$x = \\frac{\\Delta_y}{\\Delta}$",
      "$x = \\Delta \\cdot \\Delta_x$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "In Cramer's rule, each variable $x_i$ is given by $x_i = \\frac{\\Delta_i}{\\Delta}$, where $\\Delta_i$ is formed by replacing the $i$-th column of $A$ with $B$. Hence, $x = \\frac{\\Delta_x}{\\Delta}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8fc910bb37b0e558759",
    subtopic: "Cramer's rule",
    question: "Consider the system of linear equations:\n$$x + y + z = 6$$\n$$2x - y + z = 3$$\n$$x + 2y - z = 2$$\nWhat is the determinant of the coefficient matrix $\\Delta$?",
    options: [
      "7",
      "5",
      "3",
      "1"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{vmatrix} = 1((-1)(-1) - (1)(2)) - 1((2)(-1) - (1)(1)) + 1((2)(2) - (-1)(1)) = 1(1 - 2) - 1(-2 - 1) + 1(4 + 1) = -1 + 3 + 5 = 7$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    _id: "6a98e8fc910bb37b0e55875a",
    subtopic: "Cramer's rule",
    question: "For the system $3x + y = 5$ and $x - 2y = -4$, find the value of the numerator determinant $\\Delta_x$ in Cramer's rule.",
    options: [
      "-6",
      "6",
      "14",
      "-14"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Replacing the $x$-column with the constant vector $\\begin{pmatrix} 5 \\\\ -4 \\end{pmatrix}$:\n$$\\Delta_x = \\begin{vmatrix} 5 & 1 \\\\ -4 & -2 \\end{vmatrix} = (5)(-2) - (1)(-4) = -10 + 4 = -6.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8fc910bb37b0e55875b",
    subtopic: "Cramer's rule",
    question: "If for a system of linear equations the coefficient determinant $\\Delta = 0$ and at least one of $\\Delta_x, \\Delta_y, \\Delta_z \\neq 0$, then the system has:",
    options: [
      "No solution (inconsistent)",
      "A unique solution",
      "Infinitely many solutions",
      "Exactly two solutions"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "When $\\Delta = 0$ and at least one of $\\Delta_x, \\Delta_y, \\Delta_z \\neq 0$, the planes do not intersect at any common point, so the system is inconsistent and has no solution.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8fc910bb37b0e55875c",
    subtopic: "Cramer's rule",
    question: "For the system $x + 2y = 5$ and $3x + 4y = 11$, find the value of $y$ using Cramer's rule.",
    options: [
      "2",
      "1",
      "3",
      "4"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "$\\Delta = \\begin{vmatrix} 1 & 2 \\\\ 3 & 4 \\end{vmatrix} = 4 - 6 = -2$.\n$\\Delta_y = \\begin{vmatrix} 1 & 5 \\\\ 3 & 11 \\end{vmatrix} = 11 - 15 = -4$.\nThus, $y = \\frac{\\Delta_y}{\\Delta} = \\frac{-4}{-2} = 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8fc910bb37b0e55875d",
    subtopic: "Cramer's rule",
    question: "Which condition is necessary and sufficient for Cramer's rule to give a UNIQUE solution for a square system of linear equations?",
    options: [
      "$\\Delta \\neq 0$",
      "$\\Delta = 0$ and $\\Delta_x = \\Delta_y = \\Delta_z = 0$",
      "All coefficients are integers",
      "The matrix must be symmetric"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A unique solution exists for a system of linear equations if and only if the coefficient matrix is non-singular, which corresponds to $\\Delta = \\det(A) \\neq 0$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8fc910bb37b0e55875e",
    subtopic: "Cramer's rule",
    question: "Consider the system of linear equations:\n$$4x - y + 2z = 10$$\n$$x + y - z = 1$$\n$$2x + 3y + z = 5$$\nThe determinant of the coefficient matrix $\\Delta$ is:",
    options: [
      "21",
      "19",
      "-15",
      "15"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Expanding along the first row:\n$$\\Delta = \\begin{vmatrix} 4 & -1 & 2 \\\\ 1 & 1 & -1 \\\\ 2 & 3 & 1 \\end{vmatrix} = 4(1 - (-3)) - (-1)(1 - (-2)) + 2(3 - 2) = 4(4) + 1(3) + 2(1) = 16 + 3 + 2 = 21.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    _id: "6a98e8fc910bb37b0e55875f",
    subtopic: "Cramer's rule",
    question: "Which formula represents the solution for $z$ using Cramer's rule for a system $AX = B$ with $\\Delta \\neq 0$?",
    options: [
      "$z = \\frac{\\Delta_z}{\\Delta}$",
      "$z = \\frac{\\Delta}{\\Delta_z}$",
      "$z = \\frac{\\Delta_x}{\\Delta_z}$",
      "$z = \\frac{\\Delta_y}{\\Delta_z}$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By Cramer's rule, the solution for variable $z$ is $z = \\frac{\\Delta_z}{\\Delta}$, where $\\Delta_z$ is the determinant obtained by replacing the third column of the coefficient matrix with the column vector of constants $B$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    _id: "6a98e8fc910bb37b0e558760",
    subtopic: "Cramer's rule",
    question: "If for a system of linear equations, $\\Delta = 5$, $\\Delta_x = 10$, and $\\Delta_y = -15$, what is the value of $x$?",
    options: [
      "2",
      "-3",
      "5",
      "0.5"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "According to Cramer's rule, $x = \\frac{\\Delta_x}{\\Delta} = \\frac{10}{5} = 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  }
];

module.exports = { repairedGenuineMatrices };
