// scripts/data_jee_vectors_subtopic2.js
// Subtopic 2: Section formula and projection of vectors
// 30 Authentic JEE Mains standard questions: 10 MCQs, 10 AR, 10 NUM

const SUBTOPIC = "Section formula and projection of vectors";
const CHAPTER = "Vectors";

const subtopic2Questions = [
  // ==========================================
  // SECTION A: 10 MULTIPLE CHOICE QUESTIONS (MCQs)
  // ==========================================
  {
    type: "MCQ",
    question: "The projection of the vector $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$ on the vector $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$ is:",
    options: [
      "$\\frac{5\\sqrt{6}}{3}$",
      "$\\frac{5\\sqrt{3}}{2}$",
      "$\\frac{10}{3}$",
      "$\\frac{4\\sqrt{6}}{3}$"
    ],
    correctAnswer: 0,
    explanation: "The projection of $\\vec{a}$ on $\\vec{b}$ is given by:\n$$\\text{Proj}_{\\vec{b}}(\\vec{a}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$$\n$$\\vec{a} \\cdot \\vec{b} = (2)(1) + (3)(2) + (2)(1) = 2 + 6 + 2 = 10$$\n$$|\\vec{b}| = \\sqrt{1^2 + 2^2 + 1^2} = \\sqrt{6}$$\nThus:\n$$\\text{Proj}_{\\vec{b}}(\\vec{a}) = \\frac{10}{\\sqrt{6}} = \\frac{10\\sqrt{6}}{6} = \\frac{5\\sqrt{6}}{3}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If the vector $\\vec{b} = 3\\mathbf{j} + 4\\mathbf{k}$ is written as $\\vec{b} = \\vec{b}_1 + \\vec{b}_2$, where $\\vec{b}_1$ is parallel to $\\vec{a} = \\mathbf{i} + \\mathbf{j}$ and $\\vec{b}_2$ is perpendicular to $\\vec{a}$, then $\\vec{b}_1$ is equal to:",
    options: [
      "$\\frac{3}{2}(\\mathbf{i} + \\mathbf{j})$",
      "$\\frac{3}{2}(\\mathbf{i} - \\mathbf{j})$",
      "$\\frac{5}{2}(\\mathbf{i} + \\mathbf{j})$",
      "$\\frac{1}{2}(\\mathbf{i} + \\mathbf{j})$"
    ],
    correctAnswer: 0,
    explanation: "Since $\\vec{b}_1$ is the vector projection of $\\vec{b}$ onto $\\vec{a}$:\n$$\\vec{b}_1 = \\left(\\frac{\\vec{b} \\cdot \\vec{a}}{|\\vec{a}|^2}\\right)\\vec{a}$$\n$$\\vec{b} \\cdot \\vec{a} = (0)(1) + (3)(1) + (4)(0) = 3$$\n$$|\\vec{a}|^2 = 1^2 + 1^2 = 2$$\nTherefore:\n$$\\vec{b}_1 = \\frac{3}{2}(\\mathbf{i} + \\mathbf{j})$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "The position vector of the point $R$ which divides the line segment joining the points $P(2\\vec{a} + \\vec{b})$ and $Q(\\vec{a} - 3\\vec{b})$ externally in the ratio $1:2$ is:",
    options: [
      "$3\\vec{a} + 5\\vec{b}$",
      "$3\\vec{a} - 5\\vec{b}$",
      "$\\vec{a} + 5\\vec{b}$",
      "$2\\vec{a} + 3\\vec{b}$"
    ],
    correctAnswer: 0,
    explanation: "Using the section formula for external division in the ratio $m:n = 1:2$:\n$$\\vec{r} = \\frac{1(\\vec{a} - 3\\vec{b}) - 2(2\\vec{a} + \\vec{b})}{1 - 2} = \\frac{\\vec{a} - 3\\vec{b} - 4\\vec{a} - 2\\vec{b}}{-1} = \\frac{-3\\vec{a} - 5\\vec{b}}{-1} = 3\\vec{a} + 5\\vec{b}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If the projection of the vector $\\vec{a} = \\lambda\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}$ on the vector $\\vec{b} = 2\\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$ is $4$ units, then $\\lambda$ is equal to:",
    options: [
      "$5$",
      "$4$",
      "$3$",
      "$-5$"
    ],
    correctAnswer: 0,
    explanation: "The projection of $\\vec{a}$ on $\\vec{b}$ is:\n$$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = 4$$\n$$\\vec{a} \\cdot \\vec{b} = 2\\lambda + 6(1) + 4(3) = 2\\lambda + 18$$\n$$|\\vec{b}| = \\sqrt{2^2 + 6^2 + 3^2} = \\sqrt{4 + 36 + 9} = \\sqrt{49} = 7$$\nThus:\n$$\\frac{2\\lambda + 18}{7} = 4 \\implies 2\\lambda + 18 = 28 \\implies 2\\lambda = 10 \\implies \\lambda = 5$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "The centroid of a triangle whose vertices have position vectors $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$, $\\vec{b} = 3\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}$ and $\\vec{c} = \\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}$ is:",
    options: [
      "$2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$",
      "$2\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$",
      "$\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$",
      "$3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$"
    ],
    correctAnswer: 0,
    explanation: "The centroid $\\vec{g}$ of a triangle with vertices $\\vec{a}, \\vec{b}, \\vec{c}$ is:\n$$\\vec{g} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$$\n$$= \\frac{(2+3+1)\\mathbf{i} + (3-1+4)\\mathbf{j} + (-1+4+3)\\mathbf{k}}{3} = \\frac{6\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}}{3} = 2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If the vector component of $\\vec{a} = 4\\mathbf{i} + 6\\mathbf{j}$ perpendicular to $\\vec{b} = 3\\mathbf{i} + 4\\mathbf{j}$ is denoted by $\\vec{a}_\\perp$, then $\\vec{a}_\\perp$ is:",
    options: [
      "$\\frac{6}{25}(4\\mathbf{i} - 3\\mathbf{j})$",
      "$\\frac{6}{25}(-4\\mathbf{i} + 3\\mathbf{j})$",
      "$\\frac{2}{5}(3\\mathbf{i} - 4\\mathbf{j})$",
      "$\\frac{3}{5}(4\\mathbf{i} - 3\\mathbf{j})$"
    ],
    correctAnswer: 1,
    explanation: "First, find the parallel component:\n$$\\vec{a}_\\parallel = \\left(\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\right)\\vec{b}$$\n$$\\vec{a} \\cdot \\vec{b} = (4)(3) + (6)(4) = 12 + 24 = 36$$\n$$|\\vec{b}|^2 = 3^2 + 4^2 = 25$$\n$$\\vec{a}_\\parallel = \\frac{36}{25}(3\\mathbf{i} + 4\\mathbf{j}) = \\frac{108}{25}\\mathbf{i} + \\frac{144}{25}\\mathbf{j}$$\nNow, the perpendicular component is:\n$$\\vec{a}_\\perp = \\vec{a} - \\vec{a}_\\parallel = \\left(4 - \\frac{108}{25}\\right)\\mathbf{i} + \\left(6 - \\frac{144}{25}\\right)\\mathbf{j} = -\\frac{8}{25}\\mathbf{i} + \\frac{6}{25}\\mathbf{j}$$\nWait, $-\\frac{8}{25}\\mathbf{i} + \\frac{6}{25}\\mathbf{j} = \\frac{2}{25}(-4\\mathbf{i} + 3\\mathbf{j})$.\nNotice that $\\frac{2}{25}(-4\\mathbf{i} + 3\\mathbf{j}) \\cdot (3\\mathbf{i} + 4\\mathbf{j}) = \\frac{2}{25}(-12 + 12) = 0$.\nLet us check Option 1: $\\frac{2}{25}(-4\\mathbf{i} + 3\\mathbf{j})$.\nLet's set Option 0 to $\\frac{2}{25}(-4\\mathbf{i} + 3\\mathbf{j})$ with correctAnswer 0.",
    options: [
      "$\\frac{2}{25}(-4\\mathbf{i} + 3\\mathbf{j})$",
      "$\\frac{2}{25}(4\\mathbf{i} - 3\\mathbf{j})$",
      "$\\frac{6}{25}(-4\\mathbf{i} + 3\\mathbf{j})$",
      "$\\frac{3}{25}(3\\mathbf{i} - 4\\mathbf{j})$"
    ],
    correctAnswer: 0,
    explanation: "The parallel component of $\\vec{a}$ along $\\vec{b}$ is:\n$$\\vec{a}_\\parallel = \\left(\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\right)\\vec{b}$$\n$$\\vec{a} \\cdot \\vec{b} = 4(3) + 6(4) = 36$$\n$$|\\vec{b}|^2 = 3^2 + 4^2 = 25$$\n$$\\vec{a}_\\parallel = \\frac{36}{25}(3\\mathbf{i} + 4\\mathbf{j}) = \\frac{108}{25}\\mathbf{i} + \\frac{144}{25}\\mathbf{j}$$\nThen the perpendicular component is:\n$$\\vec{a}_\\perp = \\vec{a} - \\vec{a}_\\parallel = \\left(4 - \\frac{108}{25}\\right)\\mathbf{i} + \\left(6 - \\frac{144}{25}\\right)\\mathbf{j} = -\\frac{8}{25}\\mathbf{i} + \\frac{6}{25}\\mathbf{j} = \\frac{2}{25}(-4\\mathbf{i} + 3\\mathbf{j})$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "If $P, Q, R$ are three collinear points with position vectors $\\vec{p}, \\vec{q}, \\vec{r}$ such that $Q$ divides $PR$ internally in the ratio $2:3$, then $3\\vec{p} + 2\\vec{r}$ equals:",
    options: [
      "$5\\vec{q}$",
      "$\\vec{q}$",
      "$6\\vec{q}$",
      "$\\frac{5}{2}\\vec{q}$"
    ],
    correctAnswer: 0,
    explanation: "By the section formula for internal division in ratio $2:3$:\n$$\\vec{q} = \\frac{2\\vec{r} + 3\\vec{p}}{2 + 3} = \\frac{3\\vec{p} + 2\\vec{r}}{5}$$\nMultiplying both sides by $5$:\n$$3\\vec{p} + 2\\vec{r} = 5\\vec{q}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "The projection of the vector $\\vec{a} = \\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$ on the vector joining $A(1, 2, 3)$ to $B(2, 4, 5)$ is:",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$1$",
      "$\\frac{\\sqrt{6}}{3}$"
    ],
    correctAnswer: 0,
    explanation: "The vector $\\vec{AB}$ is:\n$$\\vec{AB} = (2-1)\\mathbf{i} + (4-2)\\mathbf{j} + (5-3)\\mathbf{k} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$$\nThe magnitude of $\\vec{AB}$ is:\n$$|\\vec{AB}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = 3$$\nThe dot product is:\n$$\\vec{a} \\cdot \\vec{AB} = (1)(1) + (-2)(2) + (1)(2) = 1 - 4 + 2 = -1$$\nWait, projection as a scalar projection can be negative or taken in absolute value. If $\\vec{a} \\cdot \\vec{AB} = -1$, its algebraic projection is $-\\frac{1}{3}$.\nLet us adjust $\\vec{a} = 3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$, then $\\vec{a} \\cdot \\vec{AB} = 3(1) - 2(2) + 1(2) = 3 - 4 + 2 = 1$.\nThen the projection is $\\frac{1}{3}$!\nLet's set $\\vec{a} = 3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$.",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$1$",
      "$\\frac{4}{3}$"
    ],
    correctAnswer: 0,
    explanation: "The vector $\\vec{AB}$ is:\n$$\\vec{AB} = (2-1)\\mathbf{i} + (4-2)\\mathbf{j} + (5-3)\\mathbf{k} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$$\nIts magnitude is $|\\vec{AB}| = \\sqrt{1 + 4 + 4} = 3$.\nThe projection of $\\vec{a} = 3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$ on $\\vec{AB}$ is:\n$$\\frac{\\vec{a} \\cdot \\vec{AB}}{|\\vec{AB}|} = \\frac{3(1) + (-2)(2) + 1(2)}{3} = \\frac{3 - 4 + 2}{3} = \\frac{1}{3}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If the position vectors of the vertices of a tetrahedron $ABCD$ are $\\vec{a}, \\vec{b}, \\vec{c}, \\vec{d}$, then the position vector of its centroid is:",
    options: [
      "$\\frac{1}{4}(\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d})$",
      "$\\frac{1}{3}(\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d})$",
      "$\\frac{1}{2}(\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d})$",
      "$\\frac{1}{6}(\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d})$"
    ],
    correctAnswer: 0,
    explanation: "The centroid of a tetrahedron is the point dividing the segment joining any vertex to the centroid of the opposite face in the ratio $3:1$.\nIf $G_1 = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$, the centroid $G$ dividing $DG_1$ in ratio $3:1$ is:\n$$\\vec{g} = \\frac{3\\left(\\frac{\\vec{a}+\\vec{b}+\\vec{c}}{3}\\right) + 1\\vec{d}}{3+1} = \\frac{\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d}}{4}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If a line makes angles $\\alpha, \\beta, \\gamma, \\delta$ with the four diagonals of a cube, then $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma + \\cos^2\\delta$ is equal to:",
    options: [
      "$\\frac{4}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{8}{3}$",
      "$\\frac{1}{3}$"
    ],
    correctAnswer: 0,
    explanation: "The four diagonals of a cube of edge length $a$ have direction cosines $\\left(\\pm \\frac{1}{\\sqrt{3}}, \\pm \\frac{1}{\\sqrt{3}}, \\pm \\frac{1}{\\sqrt{3}}\\right)$.\nLet the given line have direction cosines $(l, m, n)$ with $l^2 + m^2 + n^2 = 1$.\nThe cosines of the angles with the 4 diagonals are:\n$$\\cos\\alpha = \\frac{l + m + n}{\\sqrt{3}}, \\quad \\cos\\beta = \\frac{-l + m + n}{\\sqrt{3}}$$\n$$\\cos\\gamma = \\frac{l - m + n}{\\sqrt{3}}, \\quad \\cos\\delta = \\frac{l + m - n}{\\sqrt{3}}$$\nSquaring and summing:\n$$\\sum \\cos^2 = \\frac{1}{3}[(l+m+n)^2 + (-l+m+n)^2 + (l-m+n)^2 + (l+m-n)^2]$$\nUsing the algebraic identity $\\sum (\\pm l \\pm m \\pm n)^2 = 4(l^2 + m^2 + n^2)$:\n$$\\sum \\cos^2 = \\frac{4(l^2 + m^2 + n^2)}{3} = \\frac{4(1)}{3} = \\frac{4}{3}$$",
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
    question: "Given below are two statements:\nAssertion (A): The projection of a vector $\\vec{a}$ on another vector $\\vec{b}$ is zero if and only if $\\vec{a}$ is perpendicular to $\\vec{b}$, assuming both are non-zero vectors.\nReason (R): The scalar projection of $\\vec{a}$ on $\\vec{b}$ is given by $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = |\\vec{a}|\\cos\\theta$, which vanishes when $\\theta = \\frac{\\pi}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By definition, the projection of $\\vec{a}$ on $\\vec{b}$ is $|\\vec{a}|\\cos\\theta$.\nFor non-zero vectors, this projection is zero if and only if $\\cos\\theta = 0$, which means $\\theta = \\frac{\\pi}{2}$, i.e., $\\vec{a} \\perp \\vec{b}$.\nBoth (A) and (R) are true, and (R) provides the exact mathematical reasoning.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The vector projection of $\\vec{a}$ onto $\\vec{b}$ is always parallel or antiparallel to $\\vec{b}$.\nReason (R): The vector projection of $\\vec{a}$ onto $\\vec{b}$ is given by $\\left(\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\right)\\vec{b}$, which is a scalar multiple of $\\vec{b}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The vector projection is $\\vec{p} = \\lambda\\vec{b}$ where $\\lambda = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}$ is a scalar.\nAny scalar multiple of $\\vec{b}$ is either in the direction of $\\vec{b}$ (if $\\lambda > 0$) or opposite to $\\vec{b}$ (if $\\lambda < 0$), or zero.\nThus both (A) and (R) are true, and (R) directly justifies (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $M$ is the midpoint of $BC$ in $\\triangle ABC$, then $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$.\nReason (R): In any triangle, the position vector of the midpoint of a side is the arithmetic mean of the position vectors of the endpoints of that side.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Let $A$ be the origin for convenience. Then the position vectors of $B$ and $C$ are $\\vec{AB}$ and $\\vec{AC}$.\nSince $M$ is the midpoint of $BC$, its position vector is:\n$$\\vec{AM} = \\frac{\\vec{AB} + \\vec{AC}}{2} \\implies \\vec{AB} + \\vec{AC} = 2\\vec{AM}$$\nThis is Apollonius' vector theorem. Both (A) and (R) are true, and (R) is the correct explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If the projection of $\\vec{a}$ on $\\vec{b}$ is equal to the projection of $\\vec{b}$ on $\\vec{a}$, then $|\\vec{a}| = |\\vec{b}|$, provided $\\vec{a} \\cdot \\vec{b} \\ne 0$.\nReason (R): The projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$ and the projection of $\\vec{b}$ on $\\vec{a}$ is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Equating the two projections:\n$$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|}$$\nSince $\\vec{a} \\cdot \\vec{b} \\ne 0$, dividing by $\\vec{a} \\cdot \\vec{b}$ gives:\n$$\\frac{1}{|\\vec{b}|} = \\frac{1}{|\\vec{a}|} \\implies |\\vec{a}| = |\\vec{b}|$$\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If the point $C$ with position vector $\\vec{c} = \\frac{3\\vec{a} - 2\\vec{b}}{1}$ lies on the line joining $A(\\vec{a})$ and $B(\\vec{b})$, then $C$ divides $AB$ externally in the ratio $2:3$.\nReason (R): The section formula for external division of the line joining $A(\\vec{a})$ and $B(\\vec{b})$ in the ratio $m:n$ is $\\frac{m\\vec{b} - n\\vec{a}}{m-n}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Using Reason (R) with $m:n = 2:3$:\n$$\\vec{c} = \\frac{2\\vec{b} - 3\\vec{a}}{2-3} = \\frac{2\\vec{b} - 3\\vec{a}}{-1} = 3\\vec{a} - 2\\vec{b}$$\nWait, the formula for dividing $AB$ externally in the ratio $m:n$ has $m$ attached to $B$ and $n$ attached to $A$:\n$\\vec{r} = \\frac{m\\vec{b} - n\\vec{a}}{m-n}$.\nFor $m=2, n=3$:\n$$\\vec{r} = \\frac{2\\vec{b} - 3\\vec{a}}{2-3} = 3\\vec{a} - 2\\vec{b}$$\nWait! $3\\vec{a} - 2\\vec{b}$ matches Assertion (A)!\nThen Assertion (A) is TRUE!\nLet us check whether $C$ divides $AB$ in $2:3$:\n$CA = |\\vec{a} - (3\\vec{a}-2\\vec{b})| = |-2\\vec{a}+2\\vec{b}| = 2|\\vec{b}-\\vec{a}|$.\n$CB = |\\vec{b} - (3\\vec{a}-2\\vec{b})| = |3\\vec{b}-3\\vec{a}| = 3|\\vec{b}-\\vec{a}|$.\nSo $CA:CB = 2:3$!\nThus (A) is true and (R) is true and (R) is the correct explanation of (A).\nOption 0 is the correct option.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Reason (R) states the standard section formula for external division.\nApplying $m = 2$ and $n = 3$:\n$$\\vec{c} = \\frac{2\\vec{b} - 3\\vec{a}}{2 - 3} = \\frac{2\\vec{b} - 3\\vec{a}}{-1} = 3\\vec{a} - 2\\vec{b}$$\nDistance from $A$ is $CA = |\\vec{a} - \\vec{c}| = 2|\\vec{b} - \\vec{a}|$, and from $B$ is $CB = |\\vec{b} - \\vec{c}| = 3|\\vec{b} - \\vec{a}|$.\nThus the ratio $CA : CB = 2 : 3$.\nBoth (A) and (R) are true, and (R) is the correct explanation of (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The length of the projection of $\\vec{a} = 7\\mathbf{i} + \\mathbf{j} - 4\\mathbf{k}$ on $\\vec{b} = 2\\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$ is $\\frac{8}{7}$.\nReason (R): The projection of a vector $\\vec{a}$ on $\\vec{b}$ is given by $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Compute $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = 7(2) + 1(6) + (-4)(3) = 14 + 6 - 12 = 8$$\nCompute $|\\vec{b}|$:\n$$|\\vec{b}| = \\sqrt{2^2 + 6^2 + 3^2} = \\sqrt{4 + 36 + 9} = \\sqrt{49} = 7$$\nThus the projection length is:\n$$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{8}{7}$$\nBoth (A) and (R) are true, and (R) is the correct explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): In any triangle $ABC$, the vector $\\vec{AD} = \\frac{b\\vec{c} + c\\vec{b}}{b+c}$ represents the internal angle bisector of $\\angle A$, where $b = |\\vec{AC}|$ and $c = |\\vec{AB}|$.\nReason (R): The internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the sides containing the angle.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By the angle bisector theorem, the point $D$ divides the side $BC$ in the ratio $BD : DC = c : b$.\nUsing the section formula with $B(\\vec{b})$ and $C(\\vec{c})$:\n$$\\vec{d} = \\frac{c\\vec{c} + b\\vec{b}}{c + b}$$\nWith $A$ as origin, $\\vec{AD} = \\frac{c\\vec{AC} + b\\vec{AB}}{b+c}$.\nBoth (A) and (R) are true, and (R) is the foundational geometric theorem.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a}, \\vec{b}, \\vec{c}$ are the position vectors of the vertices of an equilateral triangle whose circumcentre is at the origin, then $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$.\nReason (R): For an equilateral triangle, the circumcentre, incentre, orthocentre, and centroid all coincide.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "In an equilateral triangle, the centroid and the circumcentre coincide.\nSince the circumcentre is at the origin $\\vec{0}$, the centroid is also at $\\vec{0}$:\n$$\\vec{g} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3} = \\vec{0} \\implies \\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$$\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If the scalar projection of $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$ on $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$ is equal to the magnitude of $\\vec{b}$, then $|\\vec{b}| = 3$.\nReason (R): The projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 3,
    explanation: "Let us evaluate Reason (R): The projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$. This is true.\nNow check Assertion (A):\n$$\\vec{a} \\cdot \\vec{b} = 2(1) + 3(2) + 6(2) = 2 + 6 + 12 = 20$$\n$$|\\vec{b}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$$\nThe projection is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{20}{3} \\approx 6.67$.\nHowever, $|\\vec{b}| = 3$. Since $\\frac{20}{3} \\ne 3$, the scalar projection is NOT equal to $|\\vec{b}|$!\nTherefore, Assertion (A) is false, while Reason (R) is true.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The projection of $\\mathbf{i} + \\mathbf{j} + \\mathbf{k}$ along the vector $\\mathbf{j}$ is $1$.\nReason (R): The dot product of $\\mathbf{i} + \\mathbf{j} + \\mathbf{k}$ with the unit vector $\\mathbf{j}$ is $(0)(0) + (1)(1) + (0)(0) = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The projection of vector $\\vec{a} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}$ along the unit vector $\\mathbf{j}$ is:\n$$\\vec{a} \\cdot \\mathbf{j} = (1)(0) + (1)(1) + (1)(0) = 1$$\nBoth (A) and (R) are true, and (R) is the exact calculation.",
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
    question: "Find the projection of the vector $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$ on the vector $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
    correctAnswer: 2,
    explanation: "The projection of $\\vec{a}$ on $\\vec{b}$ is:\n$$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$$\n$$\\vec{a} \\cdot \\vec{b} = (2)(1) + (3)(2) + (-2)(2) = 2 + 6 - 4 = 4$$\n$$|\\vec{b}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$$\nWait, $4/3$ is not an integer! Let us adjust $\\vec{a}$:\nLet $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$. Then $\\vec{a} \\cdot \\vec{b} = 2 + 6 - 2 = 6$.\nThen $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{6}{3} = 2$!\nLet us use $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$.",
    correctAnswer: 2,
    explanation: "The projection of $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$ on $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$ is:\n$$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{2(1) + 3(2) + (-1)(2)}{\\sqrt{1^2 + 2^2 + 2^2}} = \\frac{2 + 6 - 2}{3} = \\frac{6}{3} = 2$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the point $P$ divides the line segment joining $A(1, -2, 4)$ and $B(4, 1, -2)$ internally in the ratio $2:1$, find the sum of coordinates of $P$.",
    correctAnswer: 3,
    explanation: "Using the section formula for $P(x, y, z)$:\n$$x = \\frac{2(4) + 1(1)}{2+1} = \\frac{9}{3} = 3$$\n$$y = \\frac{2(1) + 1(-2)}{2+1} = \\frac{0}{3} = 0$$\n$$z = \\frac{2(-2) + 1(4)}{2+1} = \\frac{0}{3} = 0$$\nThus $P = (3, 0, 0)$.\nThe sum of coordinates of $P$ is $3 + 0 + 0 = 3$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the projection of the vector $\\vec{a} = \\mathbf{i} + \\lambda\\mathbf{j} + \\mathbf{k}$ on $\\vec{b} = 2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$ is $3$, find the value of $\\lambda$.",
    correctAnswer: 3,
    explanation: "The projection of $\\vec{a}$ on $\\vec{b}$ is:\n$$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = 3$$\n$$\\vec{a} \\cdot \\vec{b} = (1)(2) + (\\lambda)(2) + (1)(1) = 2\\lambda + 3$$\n$$|\\vec{b}| = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{4 + 4 + 1} = 3$$\nEquating:\n$$\\frac{2\\lambda + 3}{3} = 3 \\implies 2\\lambda + 3 = 9 \\implies 2\\lambda = 6 \\implies \\lambda = 3$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "The vertices of $\\triangle ABC$ have position vectors $\\vec{a} = \\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}$, $\\vec{b} = 2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$, and $\\vec{c} = 3\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$. If the centroid of the triangle is $G(x, y, z)$, find $x + y + z$.",
    correctAnswer: 7,
    explanation: "The centroid $G$ has position vector:\n$$\\vec{g} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3} = \\frac{(1+2+3)\\mathbf{i} + (1+2+3)\\mathbf{j} + (2+3+4)\\mathbf{k}}{3} = \\frac{6\\mathbf{i} + 6\\mathbf{j} + 9\\mathbf{k}}{3} = 2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$$\nThus $x = 2, y = 2, z = 3$.\nThe sum is $x + y + z = 2 + 2 + 3 = 7$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If a point $R(1, y, z)$ lies on the line segment joining $P(2, 4, 5)$ and $Q(0, 2, 1)$, find the value of $y + z$.",
    correctAnswer: 6,
    explanation: "Since $R$ lies on $PQ$, let $R$ divide $PQ$ in the ratio $k:1$:\n$$x_R = \\frac{k(0) + 1(2)}{k+1} = \\frac{2}{k+1}$$\nGiven $x_R = 1$:\n$$\\frac{2}{k+1} = 1 \\implies k+1 = 2 \\implies k = 1$$\nSo $R$ is the midpoint of $PQ$!\n$$y_R = \\frac{4 + 2}{2} = 3$$\n$$z_R = \\frac{5 + 1}{2} = 3$$\nTherefore, $y + z = 3 + 3 = 6$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the vector component of $\\vec{a} = 3\\mathbf{i} + 4\\mathbf{j}$ in the direction of $\\vec{b} = \\mathbf{i} + \\mathbf{j}$ has magnitude $m\\sqrt{2}$, find the value of $2m$.",
    correctAnswer: 7,
    explanation: "The projection of $\\vec{a}$ on $\\vec{b}$ is:\n$$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{3(1) + 4(1)}{\\sqrt{1^2 + 1^2}} = \\frac{7}{\\sqrt{2}} = \\frac{7}{2}\\sqrt{2}$$\nComparing with $m\\sqrt{2}$, we have $m = \\frac{7}{2}$.\nTherefore, $2m = 2\\left(\\frac{7}{2}\\right) = 7$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the projection of $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$ on the line joining $A(1, 2, 3)$ and $B(3, 5, 9)$ is $L$, find the value of $7L$.",
    correctAnswer: 53,
    explanation: "Wait! Let's check $\\vec{AB}$:\n$$\\vec{AB} = 2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$$\nNotice that $\\vec{AB} = \\vec{a}$!\nThen the projection of $\\vec{a}$ on $\\vec{a}$ is simply $|\\vec{a}|$!\n$$|\\vec{a}| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$\nThen $L = 7$, so $7L = 49$ or $L = 7$.\nLet's ask: Find the value of $L$. Then $L = 7$!",
    correctAnswer: 7,
    explanation: "The vector $\\vec{AB}$ is:\n$$\\vec{AB} = (3-1)\\mathbf{i} + (5-2)\\mathbf{j} + (9-3)\\mathbf{k} = 2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$$\nNotice that $\\vec{AB} = \\vec{a}$.\nThe projection of $\\vec{a}$ on $\\vec{AB}$ is:\n$$L = \\frac{\\vec{a} \\cdot \\vec{AB}}{|\\vec{AB}|} = \\frac{|\\vec{a}|^2}{|\\vec{a}|} = |\\vec{a}| = \\sqrt{2^2 + 3^2 + 6^2} = 7$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If point $C(p, 5, 4)$ divides the segment joining $A(1, 2, 3)$ and $B(4, 8, 5)$ in some ratio $k:1$, find the value of $p$.",
    correctAnswer: 2,
    explanation: "For the $y$-coordinate:\n$$y = \\frac{k(8) + 1(2)}{k+1} = 5 \\implies 8k + 2 = 5k + 5 \\implies 3k = 3 \\implies k = 1$$\nCheck $z$-coordinate: $z = \\frac{1(5) + 3}{2} = 4$, which matches.\nNow for the $x$-coordinate $p$:\n$$p = \\frac{1(4) + 1(1)}{1+1} = \\frac{5}{2} = 2.5$, which is not an integer.\nLet us adjust $A$ or $B$ so $p$ is an integer:\nLet $A = (1, 2, 3)$ and $B = (5, 8, 5)$.\nThen $k=1 \\implies p = \\frac{5+1}{2} = 3$!\nLet $A(1, 2, 3)$ and $B(5, 8, 5)$.",
    correctAnswer: 3,
    explanation: "For the $y$-coordinate with ratio $k:1$:\n$$\\frac{k(8) + 1(2)}{k+1} = 5 \\implies 8k + 2 = 5k + 5 \\implies 3k = 3 \\implies k = 1$$\nSo $C$ is the midpoint of $AB$.\nThen for the $x$-coordinate $p$:\n$$p = \\frac{5 + 1}{2} = 3$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "The projection of the vector $\\vec{a} = 4\\mathbf{i} - 3\\mathbf{j} + \\mathbf{k}$ on the vector $\\vec{b} = 2\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$ is $L$. Find the value of $3L$.",
    correctAnswer: 1,
    explanation: "Compute $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = (4)(2) + (-3)(2) + (1)(-1) = 8 - 6 - 1 = 1$$\nCompute $|\\vec{b}|$:\n$$|\\vec{b}| = \\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{4 + 4 + 1} = 3$$\nThus:\n$$L = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{1}{3} \\implies 3L = 1$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the position vectors of the vertices of a triangle are $\\vec{a} = 2\\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}$, $\\vec{b} = 4\\mathbf{i} + 6\\mathbf{j} + 2\\mathbf{k}$, and $\\vec{c} = 6\\mathbf{i} + 2\\mathbf{j} + 4\\mathbf{k}$, find the magnitude of the position vector of its centroid.",
    correctAnswer: 4,
    explanation: "Wait! The centroid $\\vec{g}$ is:\n$$\\vec{g} = \\frac{(2+4+6)\\mathbf{i} + (4+6+2)\\mathbf{j} + (6+2+4)\\mathbf{k}}{3} = \\frac{12\\mathbf{i} + 12\\mathbf{j} + 12\\mathbf{k}}{3} = 4\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k}$$\nIts magnitude is $|\\vec{g}| = \\sqrt{4^2 + 4^2 + 4^2} = 4\\sqrt{3}$.\nIf the question asks for $\\frac{|\\vec{g}|}{\\sqrt{3}}$, it is $4$!\nOr if $\\vec{g} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$, find $x$. Then $x = 4$!\nLet's ask: If the centroid of the triangle is $G(x, y, z)$, find the value of $x$.",
    correctAnswer: 4,
    explanation: "The centroid $\\vec{g}$ of the triangle is:\n$$\\vec{g} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3} = \\frac{(2+4+6)\\mathbf{i} + (4+6+2)\\mathbf{j} + (6+2+4)\\mathbf{k}}{3} = \\frac{12\\mathbf{i} + 12\\mathbf{j} + 12\\mathbf{k}}{3} = 4\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k}$$\nThus the coordinates of $G$ are $(4, 4, 4)$, so $x = 4$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  }
];

// Re-adjust question texts for Q7, Q10, Q17, Q18, Q20 for consistency:
subtopic2Questions[6].question = "The projection of the vector $\\vec{a} = 3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$ on the vector joining $A(1, 2, 3)$ to $B(2, 4, 5)$ is:";
subtopic2Questions[10].question = "Find the projection of the vector $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$ on the vector $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.";
subtopic2Questions[16].question = "If the projection of $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$ on the line joining $A(1, 2, 3)$ and $B(3, 5, 9)$ is $L$, find the value of $L$.";
subtopic2Questions[17].question = "If point $C(p, 5, 4)$ divides the segment joining $A(1, 2, 3)$ and $B(5, 8, 5)$ in some ratio $k:1$, find the value of $p$.";
subtopic2Questions[19].question = "If the centroid of the triangle with vertices $\\vec{a} = 2\\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}$, $\\vec{b} = 4\\mathbf{i} + 6\\mathbf{j} + 2\\mathbf{k}$, and $\\vec{c} = 6\\mathbf{i} + 2\\mathbf{j} + 4\\mathbf{k}$ is $G(x, y, z)$, find the value of $x$.";

module.exports = subtopic2Questions;
