// scripts/data_jee_matrices_subtopic5.js
// Subtopic 5: System of linear equations (consistency and rank) (30 Authentic JEE Main Questions)
// 10 Single Choice MCQs, 10 Assertion-Reasoning, 10 Numerical Value Questions

const subtopic5Questions = [
  // --- 10 MCQs ---
  {
    question: "The system of homogeneous linear equations:\n$$x + ky + 3z = 0$$\n$$3x + ky - 2z = 0$$\n$$2x + 4y - 3z = 0$$\nhas a non-trivial solution if and only if $k$ is equal to:",
    options: [
      "11",
      "5",
      "7",
      "2"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "A homogeneous system $AX = O$ has a non-trivial solution if and only if $\\det(A) = 0$:\n$$\\begin{vmatrix} 1 & k & 3 \\\\ 3 & k & -2 \\\\ 2 & 4 & -3 \\end{vmatrix} = 0.$$\nExpanding along row 1:\n$$1(-3k - (-8)) - k(-9 - (-4)) + 3(12 - 2k) = 0$$\n$$(-3k + 8) + 5k + (36 - 6k) = 0 \\implies -4k + 44 = 0 \\implies k = 11.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The system of linear equations:\n$$x + y + z = 1$$\n$$2x + 3y + z = 3$$\n$$x + 2y + az = b$$\nhas infinitely many solutions if $(a, b)$ is equal to:",
    options: [
      "$(0, 2)$",
      "$(1, 2)$",
      "$(0, 3)$",
      "$(2, 0)$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "Notice that subtracting equation (1) from equation (2) gives:\n$$(2x + 3y + z) - (x + y + z) = 3 - 1 \\implies x + 2y + 0z = 2.$$\nFor the third equation $x + 2y + az = b$ to be linearly dependent and consistent with the first two, the coefficients and constants must match:\n$$a = 0 \\quad \\text{and} \\quad b = 2.$$\nThus, $(a, b) = (0, 2)$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The system of linear equations:\n$$x + y + z = 6$$\n$$x + 2y + 3z = 10$$\n$$x + 2y + \\lambda z = \\mu$$\nhas NO solution if:",
    options: [
      "$\\lambda = 3$ and $\\mu \\neq 10$",
      "$\\lambda = 3$ and $\\mu = 10$",
      "$\\lambda \\neq 3$ and $\\mu = 10$",
      "$\\lambda \\neq 3$ and $\\mu \\neq 10$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The coefficient determinant is:\n$$\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 2 & \\lambda \\end{vmatrix} = \\lambda - 3.$$\nWhen $\\lambda = 3$, $\\Delta = 0$. Comparing the second and third equations with $\\lambda = 3$:\n$$x + 2y + 3z = 10 \\quad \\text{and} \\quad x + 2y + 3z = \\mu.$$\nIf $\\mu \\neq 10$, the two parallel planes never intersect, yielding no solution.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "For a homogeneous system of 3 linear equations in 3 variables $AX = O$, if $\\det(A) \\neq 0$, the system has:",
    options: [
      "Only the trivial solution $(0, 0, 0)$",
      "Infinitely many non-trivial solutions",
      "No solution",
      "Exactly two distinct solutions"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "When $\\det(A) \\neq 0$, the matrix $A$ is non-singular and invertible. Multiplying $AX = O$ on the left by $A^{-1}$ yields $X = A^{-1} O = O$. Thus, the only solution is the trivial solution $x = y = z = 0$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Consider the system of linear equations:\n$$x + y + z = 3$$\n$$x + 2y + 3z = 4$$\n$$x + 4y + 9z = 6$$\nWhich of the following is true about this system?",
    options: [
      "It has a unique solution",
      "It has infinitely many solutions",
      "It has no solution",
      "It has exactly three solutions"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The coefficient determinant is the Vandermonde determinant:\n$$\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 4 & 9 \\end{vmatrix} = (2-1)(3-1)(3-2) = 1 \\times 2 \\times 1 = 2 \\neq 0.$$\nSince $\\Delta \\neq 0$, the system has a unique solution.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "A consistent system of $n$ linear equations in $n$ variables $AX = B$ possesses infinitely many solutions if and only if:",
    options: [
      "$\\text{rank}(A) = \\text{rank}([A|B]) < n$",
      "$\\text{rank}(A) = \\text{rank}([A|B]) = n$",
      "$\\text{rank}(A) < \\text{rank}([A|B])$",
      "$\\det(A) \\neq 0$"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "By the Rouché–Capelli theorem, consistency requires $\\text{rank}(A) = \\text{rank}([A|B])$. If this common rank $r < n$, the system has $n - r$ free parameters, producing infinitely many solutions.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "For the system $2x - y + 2z = 2$, $x - 2y + z = -4$, $x + y + \\lambda z = 4$, the value of $\\lambda$ for which the coefficient matrix is singular is:",
    options: [
      "1",
      "2",
      "-1",
      "3"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "For the matrix to be singular, its determinant must be zero:\n$$\\begin{vmatrix} 2 & -1 & 2 \\\\ 1 & -2 & 1 \\\\ 1 & 1 & \\lambda \\end{vmatrix} = 2(-2\\lambda - 1) - (-1)(\\lambda - 1) + 2(1 - (-2)) = 0$$\n$$-4\\lambda - 2 + \\lambda - 1 + 6 = 0 \\implies -3\\lambda + 3 = 0 \\implies \\lambda = 1.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "The system of equations $x + 2y = 3$ and $2x + 4y = 7$ represents two lines in the $xy$-plane that are:",
    options: [
      "Parallel and distinct, so there is no solution",
      "Coincident, so there are infinitely many solutions",
      "Perpendicular, so there is a unique solution",
      "Intersecting at the origin"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The ratio of coefficients is $\\frac{1}{2} = \\frac{2}{4} \\neq \\frac{3}{7}$. The two lines are parallel with distinct $y$-intercepts, so they never intersect, resulting in no solution.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If for a system of 3 linear equations in 3 variables, $\\text{rank}(A) = \\text{rank}([A|B]) = 3$, then the system has:",
    options: [
      "A unique solution",
      "Infinitely many solutions",
      "No solution",
      "Two solutions"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "When the rank of the coefficient matrix equals the rank of the augmented matrix and equals the number of variables $n = 3$, there are 0 free parameters, so the system has a unique solution.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "If the augmented matrix of a system of equations reduces to the echelon form $\\begin{pmatrix} 1 & 2 & 3 & \\big| & 4 \\\\ 0 & 1 & 2 & \\big| & 3 \\\\ 0 & 0 & 0 & \\big| & 5 \\end{pmatrix}$, then the system has:",
    options: [
      "No solution",
      "A unique solution",
      "Infinitely many solutions",
      "A solution at the origin"
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "single_choice",
    solution: "The last row corresponds to the equation $0x + 0y + 0z = 5$, which is impossible ($0 = 5$). Hence, the system is inconsistent and has no solution.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Assertion-Reasoning ---
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The homogeneous system of linear equations $AX = O$ is always consistent.\nReason (R): The trivial solution $X = O$ ($x_1 = x_2 = \\dots = x_n = 0$) always satisfies $A X = A O = O$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Every homogeneous linear system is satisfied by the zero vector $X = O$, so it always has at least one solution. Both statements are true and Reason is the exact justification.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\det(A) \\neq 0$, the system of linear equations $AX = B$ has a unique solution.\nReason (R): When $\\det(A) \\neq 0$, $A^{-1}$ exists and $X = A^{-1}B$ is the unique solution vector.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Non-singularity of $A$ guarantees the existence and uniqueness of $A^{-1}$, yielding $X = A^{-1}B$ uniquely. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A system $AX = B$ is consistent if and only if $\\text{rank}(A) = \\text{rank}([A|B])$.\nReason (R): The Rouché–Capelli theorem establishes that a system of linear equations has at least one solution if and only if the rank of the coefficient matrix equals the rank of the augmented matrix.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The Rouché–Capelli theorem is the foundational theorem on consistency of linear systems. Both statements are true and Reason directly supports Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\det(A) = 0$ for a square system $AX = B$, the system cannot have a unique solution.\nReason (R): A square system has a unique solution if and only if the coefficient matrix $A$ is non-singular ($\\det(A) \\neq 0$).",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "When $\\det(A) = 0$, the system either has no solution or infinitely many solutions, but never a unique solution. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\text{rank}(A) < \\text{rank}([A|B])$, the system $AX = B$ has no solution.\nReason (R): When $\\text{rank}(A) < \\text{rank}([A|B])$, reducing to row echelon form yields an inconsistent row of the form $\\begin{pmatrix} 0 & 0 & \\dots & 0 & \\big| & c \\end{pmatrix}$ with $c \\neq 0$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "An augmented rank exceeding coefficient rank directly implies a row representing $0 = c$ with $c \\neq 0$, which cannot be satisfied. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The system $x + y = 1$ and $2x + 2y = 2$ has infinitely many solutions.\nReason (R): The two equations represent the same line, so $\\text{rank}(A) = \\text{rank}([A|B]) = 1 < 2$.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "The second equation is $2 \\times$ the first equation, representing coincident lines with 1 degree of freedom. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the homogeneous system $AX = O$ has a non-zero solution, then $\\det(A) = 0$.\nReason (R): If $\\det(A) \\neq 0$, then $A^{-1}$ exists and $X = A^{-1} O = O$ would be the only solution.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "A non-trivial solution requires the kernel to be non-zero, which occurs if and only if $\\det(A) = 0$. Both statements are true and Reason gives the contrapositive proof.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A system of linear equations over real numbers can have exactly two distinct solutions.\nReason (R): If $X_1$ and $X_2$ are distinct solutions to $AX = B$, then any linear combination $t X_1 + (1-t) X_2$ for $t \\in \\mathbb{R}$ is also a solution, meaning there are infinitely many solutions.",
    options: [
      "Assertion (A) is false but Reason (R) is true.",
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Assertion is false because a linear system can only have 0, 1, or infinitely many solutions; it can never have exactly 2 solutions. Reason is true and correctly proves why 2 solutions imply infinitely many.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "medium"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\text{rank}(A) = \\text{rank}([A|B]) = r < n$, the system has $(n - r)$ linearly independent free variables.\nReason (R): The number of independent parameters in the general solution equals the nullity of the coefficient matrix, which is $n - r$ by the rank-nullity theorem.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "By the rank-nullity theorem, $\\text{dim}(\\text{null}(A)) = n - r$, so the general solution has $n - r$ arbitrary parameters. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },
  {
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In 3-dimensional space, if a system of 3 linear equations has a unique solution, the three planes intersect at a single point.\nReason (R): The unique solution $(x_0, y_0, z_0)$ corresponds to the coordinates of the unique common point of intersection of the three planes.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    correctOption: 0,
    correctAnswer: 0,
    type: "assertion_reason",
    solution: "Geometrically, each linear equation represents a plane. A unique solution means the three planes intersect at exactly one point. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "easy"
  },

  // --- 10 Numericals ---
  {
    question: "For what value of $\\lambda$ does the system $x + y + z = 6$, $x + 2y + 3z = 10$, $x + 2y + \\lambda z = 12$ have no solution?",
    options: [],
    correctOption: null,
    correctAnswer: 3,
    type: "numerical",
    solution: "The determinant of coefficients is $\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 2 & \\lambda \\end{vmatrix} = \\lambda - 3$. For no solution, $\\lambda - 3 = 0 \\implies \\lambda = 3$. Then $x+2y+3z=10$ and $x+2y+3z=12$ are contradictory, giving no solution.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the value of $k$ for which the homogeneous system $2x + 3y = 0$ and $4x + ky = 0$ has a non-trivial solution.",
    options: [],
    correctOption: null,
    correctAnswer: 6,
    type: "numerical",
    solution: "For a non-trivial solution, the determinant must be 0:\n$$\\begin{vmatrix} 2 & 3 \\\\ 4 & k \\end{vmatrix} = 2k - 12 = 0 \\implies k = 6.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For the system $x + y + z = 1$, $x + 2y + 4z = 3$, $x + 4y + 10z = 7$, find the determinant $\\Delta$ of the coefficient matrix.",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "$$\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 4 \\\\ 1 & 4 & 10 \\end{vmatrix} = 1(20 - 16) - 1(10 - 4) + 1(4 - 2) = 4 - 6 + 2 = 0.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Consider the matrix $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\end{pmatrix}$. Find the rank of the matrix $A$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "Row 2 is $2 \\times R_1$ and row 3 is $3 \\times R_1$. Row operations reduce $A$ to a single non-zero row $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Therefore, $\\text{rank}(A) = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "For what value of $\\lambda$ does the system $x + y + z = 0$, $2x + 3y - z = 0$, $3x + 4y + \\lambda z = 0$ possess a non-trivial solution?",
    options: [],
    correctOption: null,
    correctAnswer: 0,
    type: "numerical",
    solution: "Expanding $\\Delta = 0$:\n$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & -1 \\\\ 3 & 4 & \\lambda \\end{vmatrix} = 1(3\\lambda + 4) - 1(2\\lambda + 3) + 1(8 - 9) = 0$$\n$$3\\lambda + 4 - 2\\lambda - 3 - 1 = 0 \\implies \\lambda = 0.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the system of equations $x + y = 3$ and $2x + ky = 6$ has infinitely many solutions, find the value of $k$.",
    options: [],
    correctOption: null,
    correctAnswer: 2,
    type: "numerical",
    solution: "For coincident lines, $\\frac{1}{2} = \\frac{1}{k} = \\frac{3}{6} \\implies k = 2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Consider the system $x - y + z = 2$, $2x + y - z = 1$, and $3x = k$. For this system to be consistent, what must the value of $k$ be?",
    options: [],
    correctOption: null,
    correctAnswer: 3,
    type: "numerical",
    solution: "Adding the first two equations gives $(x - y + z) + (2x + y - z) = 2 + 1 \\implies 3x = 3$. Hence, for consistency with the third equation $3x = k$, we must have $k = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the positive value of $m$ for which the system $x + my = 1$ and $mx + y = 1$ has infinitely many solutions.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "For infinitely many solutions, the ratio of coefficients must be equal: $\\frac{1}{m} = \\frac{m}{1} = \\frac{1}{1} \\implies m = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "Find the number of solutions to the homogeneous linear system $x + 2y = 0$ and $3x + 4y = 0$.",
    options: [],
    correctOption: null,
    correctAnswer: 1,
    type: "numerical",
    solution: "$\\det = (1)(4) - (2)(3) = 4 - 6 = -2 \\neq 0$. Since the coefficient determinant is non-zero, the system has exactly 1 solution (the trivial solution $x = 0, y = 0$).",
    marks: 4,
    negativeMarks: 0,
    difficulty: "easy"
  },
  {
    question: "If the system of linear equations $x + y + z = 6$, $2x + 5y + \\alpha z = 10$, $x + 2y + 3z = 14$ has a singular coefficient matrix, find the value of $\\alpha$.",
    options: [],
    correctOption: null,
    correctAnswer: 8,
    type: "numerical",
    solution: "Setting the determinant of the coefficient matrix to 0:\n$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 5 & \\alpha \\\\ 1 & 2 & 3 \\end{vmatrix} = 1(15 - 2\\alpha) - 1(6 - \\alpha) + 1(4 - 5) = 0$$\n$$15 - 2\\alpha - 6 + \\alpha - 1 = 0 \\implies 8 - \\alpha = 0 \\implies \\alpha = 8.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "medium"
  }
];

module.exports = { subtopic5Questions };
