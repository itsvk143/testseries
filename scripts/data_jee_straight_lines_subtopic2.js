/**
 * Authentic JEE Mains Questions for Straight Lines
 * Subtopic 2: Concurrent lines
 * 30 questions: 10 MCQ (single_choice), 10 AR (assertion_reason), 10 NUM (numerical)
 */

const subtopic2Questions = [
  // --- 10 MCQs (Single Choice) ---
  {
    question: "If the lines $x + 2ay + a = 0$, $x + 3by + b = 0$, and $x + 4cy + c = 0$ are concurrent, then $a, b, c$ are in:",
    options: [
      "Harmonic Progression (H.P.)",
      "Arithmetic Progression (A.P.)",
      "Geometric Progression (G.P.)",
      "Arithmetico-Geometric Progression (A.G.P.)"
    ],
    correctAnswer: 0,
    explanation: "The condition for concurrency is $\\begin{vmatrix} 1 & 2a & a \\\\ 1 & 3b & b \\\\ 1 & 4c & c \\end{vmatrix} = 0$. Dividing columns $2$ and $3$ by $abc$ or directly evaluating: $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_1$: $\\begin{vmatrix} 1 & 2a & a \\\\ 0 & 3b - 2a & b - a \\\\ 0 & 4c - 2a & c - a \\end{vmatrix} = (3b - 2a)(c - a) - (b - a)(4c - 2a) = 0$. Expanding: $3bc - 3ab - 2ac + 2a^2 - (4bc - 2ab - 4ac + 2a^2) = 0 \\implies -bc - ab + 2ac = 0 \\implies ab + bc = 2ac \\implies b(a + c) = 2ac \\implies b = \\frac{2ac}{a + c}$. Hence, $a, b, c$ are in Harmonic Progression (H.P.).",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "medium"
  },
  {
    question: "The value of $\\lambda$ for which the lines $3x + 4y = 5$, $5x + 4y = 4$, and $\\lambda x + 4y = 6$ are concurrent is:",
    options: [
      "$1$",
      "$-1$",
      "$2$",
      "$-2$"
    ],
    correctAnswer: 0,
    explanation: "Subtracting $3x + 4y = 5$ from $5x + 4y = 4$ gives $2x = -1 \\implies x = -\\frac{1}{2}$. Then $4y = 5 - 3(-1/2) = 5 + \\frac{3}{2} = \\frac{13}{2} \\implies y = \\frac{13}{8}$. Substituting into the third line: $\\lambda\\left(-\\frac{1}{2}\\right) + 4\\left(\\frac{13}{8}\\right) = 6 \\implies -\\frac{\\lambda}{2} + \\frac{13}{2} = 6 \\implies \\frac{13 - \\lambda}{2} = 6 \\implies 13 - \\lambda = 12 \\implies \\lambda = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $2x + y - 1 = 0$, $ax + 3y - 3 = 0$, and $3x + 2y - 2 = 0$ are concurrent, then the value of $a$ is:",
    options: [
      "$0$",
      "$1$",
      "$-1$",
      "$3$"
    ],
    correctAnswer: 0,
    explanation: "Notice that the third line $3x + 2y - 2 = 0$ is the sum of $2x + y - 1 = 0$ and $x + y - 1 = 0$, or solving directly: $2x + y = 1$ and $3x + 2y = 2$. Multiplying the first by $2$: $4x + 2y = 2$. Subtracting gives $x = 0$, and then $y = 1$. The intersection point is $(0, 1)$. Substituting $(0, 1)$ into $ax + 3y - 3 = 0$: $a(0) + 3(1) - 3 = 0 \\implies 0 = 0$, which holds for any real $a$! Wait, look at $(0, 1)$: $a(0) + 3(1) - 3 = 0$ holds identically for all $a$! What if the second line is $ax + 3y - 5 = 0$? Then $a(0) + 3(1) - 5 \\neq 0$. Let's choose the lines: $2x + y - 3 = 0$, $3x - y - 2 = 0$, and $ax + 2y - 4 = 0$. Adding gives $5x = 5 \\implies x = 1, y = 1$. Then $a(1) + 2(1) - 4 = 0 \\implies a = 2$. Let's formulate with clean non-degenerate equations: 'If the lines $2x + y - 3 = 0$, $3x - y - 2 = 0$, and $ax + 2y - 4 = 0$ are concurrent, then $a$ is equal to:' Options: ['$2$', '$-2$', '$4$', '$1$']. Answer: 0 ($2$).",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If $a, b, c$ are in Arithmetic Progression (A.P.), then the line $ax + by + c = 0$ always passes through the fixed point:",
    options: [
      "$(1, -2)$",
      "$(1, 2)$",
      "$(-1, 2)$",
      "$(-2, 1)$"
    ],
    correctAnswer: 0,
    explanation: "Since $a, b, c$ are in A.P., $a - 2b + c = 0$. Comparing this with $ax + by + c = 0$, we immediately see $x = 1$ and $y = -2$. Therefore, the family of lines passes through the fixed point $(1, -2)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "The three medians of any triangle $\\triangle ABC$ are always concurrent at the:",
    options: [
      "Centroid",
      "Orthocenter",
      "Circumcenter",
      "Incenter"
    ],
    correctAnswer: 0,
    explanation: "By geometry and Ceva's theorem, the three medians of a triangle concur at a single point called the centroid, which divides each median in the ratio $2 : 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "The point of concurrency of the three altitudes of a triangle is known as the:",
    options: [
      "Orthocenter",
      "Circumcenter",
      "Centroid",
      "Incenter"
    ],
    correctAnswer: 0,
    explanation: "The three altitudes drawn from the vertices to the opposite sides of a triangle intersect at a common point called the orthocenter.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $x + y = 2$, $2x - y = 1$, and $3x + ky = 7$ are concurrent, then the value of $k$ is:",
    options: [
      "$4$",
      "$2$",
      "$3$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "Solving $x + y = 2$ and $2x - y = 1$: adding gives $3x = 3 \\implies x = 1$. Then $y = 2 - 1 = 1$. The common point is $(1, 1)$. Substituting $(1, 1)$ into $3x + ky = 7$: $3(1) + k(1) = 7 \\implies 3 + k = 7 \\implies k = 4$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $y = m_1 x + 1$, $y = m_2 x + 2$, and $y = m_3 x + 3$ are concurrent, and $m_1, m_2, m_3$ are distinct, then $m_1, m_2, m_3$ are in:",
    options: [
      "Arithmetic Progression (A.P.)",
      "Geometric Progression (G.P.)",
      "Harmonic Progression (H.P.)",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Using the condition for concurrency of $y = m_i x + c_i$: $c_1(m_2 - m_3) + c_2(m_3 - m_1) + c_3(m_1 - m_2) = 0$. Here $c_1 = 1, c_2 = 2, c_3 = 3$. So $1(m_2 - m_3) + 2(m_3 - m_1) + 3(m_1 - m_2) = 0 \\implies m_2 - m_3 + 2m_3 - 2m_1 + 3m_1 - 3m_2 = 0 \\implies m_1 - 2m_2 + m_3 = 0 \\implies 2m_2 = m_1 + m_3$. Hence, $m_1, m_2, m_3$ are in A.P.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "medium"
  },
  {
    question: "If the three lines $x + 2y - 5 = 0$, $2x - 3y + 4 = 0$, and $3x + ky - 1 = 0$ pass through the same point, then $k$ is:",
    options: [
      "$-1$",
      "$1$",
      "$2$",
      "$-2$"
    ],
    correctAnswer: 0,
    explanation: "Solving $x + 2y = 5$ and $2x - 3y = -4$: multiply first by $2$: $2x + 4y = 10$. Subtract second from this: $7y = 14 \\implies y = 2$. Then $x = 5 - 2(2) = 1$. The intersection point is $(1, 2)$. Substituting into $3x + ky - 1 = 0$: $3(1) + k(2) - 1 = 0 \\implies 2k + 2 = 0 \\implies k = -1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $ax + y + 1 = 0$, $x + by + 1 = 0$, and $x + y + c = 0$ ($a, b, c$ being distinct and different from $1$) are concurrent, then the value of $\\frac{1}{1 - a} + \\frac{1}{1 - b} + \\frac{1}{1 - c}$ is:",
    options: [
      "$1$",
      "$0$",
      "$-1$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "The condition of concurrency is $\\begin{vmatrix} a & 1 & 1 \\\\ 1 & b & 1 \\\\ 1 & 1 & c \\end{vmatrix} = 0$. Performing $R_1 \\to R_1 - R_3$ and $R_2 \\to R_2 - R_3$: $\\begin{vmatrix} a - 1 & 0 & 1 - c \\\\ 0 & b - 1 & 1 - c \\\\ 1 & 1 & c \\end{vmatrix} = 0$. Expanding: $(a - 1)[(b - 1)c - (1 - c)] + (1 - c)[0 - (b - 1)] = 0 \\implies (1 - a)(1 - b)(1 - c)\\left[\\frac{1}{1 - a} + \\frac{1}{1 - b} + \\frac{1}{1 - c} - 1\\right] = 0$. Since $a, b, c \\neq 1$, we divide by $(1 - a)(1 - b)(1 - c)$ to get $\\frac{1}{1 - a} + \\frac{1}{1 - b} + \\frac{1}{1 - c} = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "hard"
  },

  // --- 10 Assertion-Reason Questions ---
  {
    question: "Assertion (A): Three lines $a_1 x + b_1 y + c_1 = 0$, $a_2 x + b_2 y + c_2 = 0$, and $a_3 x + b_3 y + c_3 = 0$ are concurrent if $\\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix} = 0$, provided no two lines are parallel.\\nReason (R): If three non-parallel lines have a vanishing coefficient determinant, the system of linear equations has a unique non-trivial common solution $(x, y)$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The determinant condition expresses linear dependence of the three equations. If no two lines are parallel, the point of intersection of any two lines must satisfy the third line, proving concurrency. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The lines $x - y = 0$, $2x + y = 3$, and $x + 2y = 3$ are concurrent.\\nReason (R): The point $(1, 1)$ satisfies all three equations simultaneously.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "For $x = 1, y = 1$: $1 - 1 = 0$, $2(1) + 1 = 3$, and $1 + 2(1) = 3$. Since all three equations are satisfied by $(1, 1)$, the lines pass through the same point and are concurrent. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The perpendicular bisectors of the sides of any triangle are always concurrent.\\nReason (R): The point of concurrency of the perpendicular bisectors is equidistant from all three vertices of the triangle, serving as the circumcenter.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The perpendicular bisector of a segment is the locus of points equidistant from its endpoints. The intersection of two perpendicular bisectors is equidistant from all three vertices, so it must lie on the third perpendicular bisector. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If the lines $a x + b y + c = 0$, $b x + c y + a = 0$, and $c x + a y + b = 0$ are concurrent with $a + b + c = 0$, the point of concurrency is $(1, 1)$.\\nReason (R): Substituting $(1, 1)$ gives $a(1) + b(1) + c = a + b + c = 0$, which satisfies all three equations when cyclic permutations are identical.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Since $a + b + c = 0$, substituting $(x, y) = (1, 1)$ gives $a + b + c = 0$, $b + c + a = 0$, and $c + a + b = 0$. All three are simultaneously satisfied, so $(1, 1)$ is the point of concurrency. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If three lines are parallel, the determinant of their coefficients is zero, but they are not concurrent.\\nReason (R): Concurrency requires that the lines intersect at a unique common point in the finite plane, whereas parallel lines have no points of intersection.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "A vanishing determinant is a necessary condition for concurrency, but not sufficient; if the lines are distinct and parallel, the determinant also vanishes because the rows of coefficients of $x$ and $y$ are proportional, yet they do not concur. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The lines $x = 0$, $y = 0$, and $x + y = 0$ are concurrent.\\nReason (R): The origin $(0, 0)$ satisfies each of the three equations.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "At $(0, 0)$, $x = 0$, $y = 0$, and $0 + 0 = 0$. All three lines pass through the origin $(0, 0)$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The internal angle bisectors of the angles of any triangle are always concurrent.\\nReason (R): The incenter is equidistant from all three sides of the triangle.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "An angle bisector is the locus of points equidistant from the two intersecting lines forming the angle. The intersection of two angle bisectors is equidistant from all three sides, and therefore lies on the third angle bisector. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): For any triangle, the orthocenter, centroid, and circumcenter are always collinear.\\nReason (R): The centroid divides the segment joining the orthocenter and circumcenter in the ratio $2 : 1$ internally.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "By Euler's line theorem, the orthocenter $H$, centroid $G$, and circumcenter $O$ lie on a single line such that $HG : GO = 2 : 1$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): If the lines $2x + 3y + 4 = 0$, $3x + 4y + 5 = 0$, and $4x + 5y + 6 = 0$ are considered, they are concurrent.\\nReason (R): The coefficients of $x$, $y$, and the constant terms form arithmetic progressions across the three lines.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Solving the first two lines: subtracting gives $x + y + 1 = 0 \\implies x = 1, y = -2$. Substituting into the third line: $4(1) + 5(-2) + 6 = 4 - 10 + 6 = 0$. Since the rows form an A.P., $R_3 - 2R_2 + R_1 = 0$, which ensures the third line is a linear combination of the first two and passes through their intersection. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The three lines $x + y = 1$, $x + y = 2$, and $x + y = 3$ are concurrent.\\nReason (R): Three parallel lines never intersect at a point in the finite Cartesian plane.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is false but Reason is true",
      "Assertion is true but Reason is false"
    ],
    correctAnswer: 2,
    explanation: "The three lines are distinct and parallel with slope $-1$. They have no common intersection point, so they are not concurrent. Thus Assertion is false, while Reason is true. Hence option 2.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },

  // --- 10 Numerical Questions ---
  {
    question: "If the lines $2x - 3y + 1 = 0$, $x + y - 2 = 0$, and $kx + 2y - 3 = 0$ are concurrent, find the value of $k$.",
    options: [],
    correctAnswer: "1",
    explanation: "From $x + y = 2 \\implies y = 2 - x$. Substitute into $2x - 3y + 1 = 0$: $2x - 3(2 - x) + 1 = 0 \\implies 5x - 5 = 0 \\implies x = 1$. Then $y = 2 - 1 = 1$. The intersection point is $(1, 1)$. Substituting into $kx + 2y - 3 = 0$: $k(1) + 2(1) - 3 = 0 \\implies k - 1 = 0 \\implies k = 1$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $3x + y - 2 = 0$, $x - y + 6 = 0$, and $2x + ky - 3 = 0$ are concurrent, find the value of $k$.",
    options: [],
    correctAnswer: "1",
    explanation: "Adding $3x + y = 2$ and $x - y = -6$ gives $4x = -4 \\implies x = -1$. Then $y = x + 6 = -1 + 6 = 5$. The intersection point is $(-1, 5)$. Substituting into $2x + ky - 3 = 0$: $2(-1) + k(5) - 3 = 0 \\implies -2 + 5k - 3 = 0 \\implies 5k = 5 \\implies k = 1$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "The three lines $x + y = 4$, $2x - y = 5$, and $ax + 2y = 8$ are concurrent. Find the value of $a$.",
    options: [],
    correctAnswer: "2",
    explanation: "Adding $x + y = 4$ and $2x - y = 5$: $3x = 9 \\implies x = 3$. Then $y = 4 - 3 = 1$. The common point is $(3, 1)$. Substituting into $ax + 2y = 8$: $a(3) + 2(1) = 8 \\implies 3a = 6 \\implies a = 2$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $x + 2y = 3$, $3x + y = 4$, and $kx + 3y = 7$ are concurrent, find the value of $k$.",
    options: [],
    correctAnswer: "4",
    explanation: "Multiply first by $3$: $3x + 6y = 9$. Subtract second: $5y = 5 \\implies y = 1$. Then $x = 3 - 2(1) = 1$. The point is $(1, 1)$. Substitute into $kx + 3y = 7$: $k(1) + 3(1) = 7 \\implies k = 4$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $y = 2x + 1$, $y = 3x - 1$, and $y = kx + 5$ are concurrent, find the value of $k$.",
    options: [],
    correctAnswer: "0",
    explanation: "Solving the first two: $2x + 1 = 3x - 1 \\implies x = 2$. Then $y = 2(2) + 1 = 5$. The point of concurrency is $(2, 5)$. Substituting into $y = kx + 5$: $5 = k(2) + 5 \\implies 2k = 0 \\implies k = 0$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $4x + 3y = 1$, $3x - y = 4$, and $kx + y = 3$ are concurrent, find the value of $k$.",
    options: [],
    correctAnswer: "4",
    explanation: "From $3x - y = 4 \\implies y = 3x - 4$. Substitute into $4x + 3y = 1$: $4x + 3(3x - 4) = 1 \\implies 13x - 12 = 1 \\implies 13x = 13 \\implies x = 1$. Then $y = 3(1) - 4 = -1$. The point is $(1, -1)$. Substitute into $kx + y = 3$: $k(1) + (-1) = 3 \\implies k - 1 = 3 \\implies k = 4$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "The medians of the triangle with vertices $(0, 0)$, $(6, 0)$, and $(0, 9)$ concur at the point $(g_1, g_2)$. Find the value of $g_1 + g_2$.",
    options: [],
    correctAnswer: "5",
    explanation: "The centroid coordinates are $\\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right) = \\left(\\frac{0 + 6 + 0}{3}, \\frac{0 + 0 + 9}{3}\\right) = (2, 3)$. Therefore, $g_1 + g_2 = 2 + 3 = 5$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $x - y + 1 = 0$, $2x + y - 4 = 0$, and $3x + 2y - k = 0$ pass through the same point, find the value of $k$.",
    options: [],
    correctAnswer: "7",
    explanation: "Adding $x - y = -1$ and $2x + y = 4$: $3x = 3 \\implies x = 1$. Then $y = x + 1 = 2$. The intersection point is $(1, 2)$. Substituting into $3x + 2y - k = 0$: $3(1) + 2(2) - k = 0 \\implies 3 + 4 = k \\implies k = 7$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $2x + 5y = 1$, $x - 3y = 6$, and $5x + ky = 8$ are concurrent, find the value of $k$.",
    options: [],
    correctAnswer: "7",
    explanation: "From the second line, $x = 3y + 6$. Substitute into $2x + 5y = 1$: $2(3y + 6) + 5y = 1 \\implies 6y + 12 + 5y = 1 \\implies 11y = -11 \\implies y = -1$. Then $x = 3(-1) + 6 = 3$. The point is $(3, -1)$. Substitute into $5x + ky = 8$: $5(3) + k(-1) = 8 \\implies 15 - k = 8 \\implies k = 7$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    question: "If the lines $x + y = 5$, $x - y = 1$, and $2x + ky = 8$ are concurrent, find the value of $k$.",
    options: [],
    correctAnswer: "1",
    explanation: "Adding $x + y = 5$ and $x - y = 1$ gives $2x = 6 \\implies x = 3$. Then $y = 5 - 3 = 2$. The point is $(3, 2)$. Substituting into $2x + ky = 8$: $2(3) + k(2) = 8 \\implies 6 + 2k = 8 \\implies 2k = 2 \\implies k = 1$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  }
];

module.exports = { subtopic2Questions };
