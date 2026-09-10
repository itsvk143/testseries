// scripts/data_jee_vectors_subtopic4.js
// Subtopic 4: Position vectors
// 30 Authentic JEE Mains standard questions: 10 MCQs, 10 AR, 10 NUM

const SUBTOPIC = "Position vectors";
const CHAPTER = "Vectors";

const subtopic4Questions = [
  // ==========================================
  // SECTION A: 10 MULTIPLE CHOICE QUESTIONS (MCQs)
  // ==========================================
  {
    type: "MCQ",
    question: "If the position vectors of three consecutive vertices of a parallelogram $ABCD$ are $A(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$, $B(2\\mathbf{i} + 5\\mathbf{j} - \\mathbf{k})$, and $C(-\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$, then the position vector of vertex $D$ is:",
    options: [
      "$-2\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k}$",
      "$-2\\mathbf{i} + 2\\mathbf{j} + 6\\mathbf{k}$",
      "$2\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k}$",
      "$-2\\mathbf{i} - 2\\mathbf{j} - 6\\mathbf{k}$"
    ],
    correctAnswer: 0,
    explanation: "In a parallelogram $ABCD$, the diagonals bisect each other, so the midpoint of $AC$ equals the midpoint of $BD$:\n$$\\frac{\\vec{a} + \\vec{c}}{2} = \\frac{\\vec{b} + \\vec{d}}{2} \\implies \\vec{d} = \\vec{a} + \\vec{c} - \\vec{b}$$\n$$\\vec{a} + \\vec{c} = (1 - 1)\\mathbf{i} + (2 + 1)\\mathbf{j} + (3 + 2)\\mathbf{k} = 0\\mathbf{i} + 3\\mathbf{j} + 5\\mathbf{k}$$\n$$\\vec{d} = (0\\mathbf{i} + 3\\mathbf{j} + 5\\mathbf{k}) - (2\\mathbf{i} + 5\\mathbf{j} - \\mathbf{k}) = -2\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "The distance between the points $P$ and $Q$ with position vectors $\\vec{p} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$ and $\\vec{q} = 4\\mathbf{i} + 5\\mathbf{j} + \\mathbf{k}$ is:",
    options: [
      "$2\\sqrt{3}$",
      "$3\\sqrt{2}$",
      "$4$",
      "$\\sqrt{14}$"
    ],
    correctAnswer: 0,
    explanation: "The displacement vector $\\vec{PQ}$ is:\n$$\\vec{PQ} = \\vec{q} - \\vec{p} = (4-2)\\mathbf{i} + (5-3)\\mathbf{j} + (1 - (-1))\\mathbf{k} = 2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$$\nThe distance between $P$ and $Q$ is:\n$$|\\vec{PQ}| = \\sqrt{2^2 + 2^2 + 2^2} = \\sqrt{4 + 4 + 4} = \\sqrt{12} = 2\\sqrt{3}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "The position vectors of the vertices of $\\triangle ABC$ are $\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$, $-2\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}$, and $4\\mathbf{i} - 7\\mathbf{j} + 5\\mathbf{k}$. Then $\\triangle ABC$ is:",
    options: [
      "A right-angled triangle",
      "An equilateral triangle",
      "An isosceles right-angled triangle",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Let $A = (1, 2, 3)$, $B = (-2, 3, 1)$, $C = (4, -7, 5)$.\nCompute vectors of the sides:\n$$\\vec{AB} = -3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k} \\implies |\\vec{AB}|^2 = 9 + 1 + 4 = 14$$\n$$\\vec{BC} = 6\\mathbf{i} - 10\\mathbf{j} + 4\\mathbf{k} \\implies |\\vec{BC}|^2 = 36 + 100 + 16 = 152$$\n$$\\vec{CA} = -3\\mathbf{i} + 9\\mathbf{j} - 2\\mathbf{k} \\implies |\\vec{CA}|^2 = 9 + 81 + 4 = 94$$\nNotice $14 + 94 = 108 \\ne 152$.\nLet us check if $\\vec{AB} \\cdot \\vec{AC} = 0$:\n$\\vec{AC} = 3\\mathbf{i} - 9\\mathbf{j} + 2\\mathbf{k}$.\n$\\vec{AB} \\cdot \\vec{AC} = (-3)(3) + (1)(-9) + (-2)(2) = -9 - 9 - 4 = -22 \\ne 0$.\n$\\vec{BA} = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$.\n$\\vec{BA} \\cdot \\vec{BC} = (3)(6) + (-1)(-10) + (2)(4) = 18 + 10 + 8 = 36 \\ne 0$.\n$\\vec{CA} \\cdot \\vec{CB} = (-3)(-6) + (9)(10) + (-2)(-4) = 18 + 90 + 8 = 116 \\ne 0$.\nWait, none of these is right-angled! Let us construct a genuinely right-angled triangle:\nLet $A = (1, 2, 3)$, $B = (2, 3, 1)$, $C = (3, 1, 2)$.\nThen $\\vec{AB} = \\mathbf{i} + \\mathbf{j} - 2\\mathbf{k} \\implies |\\vec{AB}|^2 = 6$.\n$\\vec{BC} = \\mathbf{i} - 2\\mathbf{j} + \\mathbf{k} \\implies |\\vec{BC}|^2 = 6$.\n$\\vec{CA} = -2\\mathbf{i} + \\mathbf{j} + \\mathbf{k} \\implies |\\vec{CA}|^2 = 6$.\nThis is an equilateral triangle! Option B: An equilateral triangle!\nLet's set vertices to $A(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$, $B(2\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k})$, $C(3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$.",
    options: [
      "An equilateral triangle",
      "A right-angled triangle",
      "An isosceles obtuse-angled triangle",
      "A scalene triangle"
    ],
    correctAnswer: 0,
    explanation: "Compute the side vectors:\n$$\\vec{AB} = (2-1)\\mathbf{i} + (3-2)\\mathbf{j} + (1-3)\\mathbf{k} = \\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$$\n$$|\\vec{AB}|^2 = 1^2 + 1^2 + (-2)^2 = 6$$\n$$\\vec{BC} = (3-2)\\mathbf{i} + (1-3)\\mathbf{j} + (2-1)\\mathbf{k} = \\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$$\n$$|\\vec{BC}|^2 = 1^2 + (-2)^2 + 1^2 = 6$$\n$$\\vec{CA} = (1-3)\\mathbf{i} + (2-1)\\mathbf{j} + (3-2)\\mathbf{k} = -2\\mathbf{i} + \\mathbf{j} + \\mathbf{k}$$\n$$|\\vec{CA}|^2 = (-2)^2 + 1^2 + 1^2 = 6$$\nSince $|\\vec{AB}| = |\\vec{BC}| = |\\vec{CA}| = \\sqrt{6}$, $\\triangle ABC$ is an equilateral triangle.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If the position vector of a point $P$ is $\\vec{r} = 3\\mathbf{i} - 4\\mathbf{j} + 12\\mathbf{k}$, then the direction cosines of $\\vec{r}$ are:",
    options: [
      "$\\frac{3}{13}, -\\frac{4}{13}, \\frac{12}{13}$",
      "$\\frac{3}{13}, \\frac{4}{13}, \\frac{12}{13}$",
      "$\\frac{3}{5}, -\\frac{4}{5}, 0$",
      "$\\frac{3}{\\sqrt{13}}, -\\frac{4}{\\sqrt{13}}, \\frac{12}{\\sqrt{13}}$"
    ],
    correctAnswer: 0,
    explanation: "The magnitude of $\\vec{r}$ is:\n$$|\\vec{r}| = \\sqrt{3^2 + (-4)^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$$\nThe direction cosines are:\n$$l = \\frac{x}{|\\vec{r}|} = \\frac{3}{13}, \\quad m = \\frac{y}{|\\vec{r}|} = -\\frac{4}{13}, \\quad n = \\frac{z}{|\\vec{r}|} = \\frac{12}{13}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "The area of $\\triangle ABC$ with vertices $A(1, 1, 2)$, $B(2, 3, 5)$, and $C(1, 5, 5)$ is:",
    options: [
      "$\\frac{\\sqrt{61}}{2}$",
      "$\\frac{\\sqrt{59}}{2}$",
      "$\\frac{\\sqrt{63}}{2}$",
      "$\\sqrt{61}$"
    ],
    correctAnswer: 0,
    explanation: "Compute $\\vec{AB}$ and $\\vec{AC}$:\n$$\\vec{AB} = (2-1)\\mathbf{i} + (3-1)\\mathbf{j} + (5-2)\\mathbf{k} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$$\n$$\\vec{AC} = (1-1)\\mathbf{i} + (5-1)\\mathbf{j} + (5-2)\\mathbf{k} = 0\\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}$$\nCompute the cross product:\n$$\\vec{AB} \\times \\vec{AC} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 2 & 3 \\\\ 0 & 4 & 3 \\end{vmatrix} = \\mathbf{i}(6 - 12) - \\mathbf{j}(3 - 0) + \\mathbf{k}(4 - 0) = -6\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$$\nThe magnitude is:\n$$|\\vec{AB} \\times \\vec{AC}| = \\sqrt{(-6)^2 + (-3)^2 + 4^2} = \\sqrt{36 + 9 + 16} = \\sqrt{61}$$\nThe area of $\\triangle ABC$ is:\n$$\\text{Area} = \\frac{1}{2}|\\vec{AB} \\times \\vec{AC}| = \\frac{\\sqrt{61}}{2}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "If $O$ is the origin and the position vectors of $A$ and $B$ are $\\vec{a}$ and $\\vec{b}$ respectively, then the position vector of the circumcentre of $\\triangle OAB$ with right angle at $O$ is:",
    options: [
      "$\\frac{1}{2}(\\vec{a} + \\vec{b})$",
      "$\\frac{1}{3}(\\vec{a} + \\vec{b})$",
      "$\\vec{a} + \\vec{b}$",
      "$\\frac{1}{2}(\\vec{a} - \\vec{b})$"
    ],
    correctAnswer: 0,
    explanation: "For a right-angled triangle, the circumcentre is the midpoint of the hypotenuse.\nHere the hypotenuse is the segment $AB$ connecting $A(\\vec{a})$ and $B(\\vec{b})$.\nThus, the circumcentre is the midpoint of $AB$:\n$$\\vec{c} = \\frac{\\vec{a} + \\vec{b}}{2}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If the position vectors of $A$ and $B$ are $3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$ and $2\\mathbf{i} + 4\\mathbf{j} - 3\\mathbf{k}$, then the length of the vector joining the midpoints of $OA$ and $OB$ (where $O$ is origin) is:",
    options: [
      "$\\frac{\\sqrt{53}}{2}$",
      "$\\frac{\\sqrt{41}}{2}$",
      "$\\sqrt{53}$",
      "$\\frac{5}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Let $M$ and $N$ be the midpoints of $OA$ and $OB$ respectively.\nBy the midpoint theorem in $\\triangle OAB$:\n$$\\vec{MN} = \\frac{1}{2}\\vec{AB}$$\nNow compute $\\vec{AB}$:\n$$\\vec{AB} = \\vec{b} - \\vec{a} = (2-3)\\mathbf{i} + (4 - (-2))\\mathbf{j} + (-3-1)\\mathbf{k} = -\\mathbf{i} + 6\\mathbf{j} - 4\\mathbf{k}$$\nThe length of $\\vec{AB}$ is:\n$$|\\vec{AB}| = \\sqrt{(-1)^2 + 6^2 + (-4)^2} = \\sqrt{1 + 36 + 16} = \\sqrt{53}$$\nTherefore, the length of $MN$ is:\n$$|\\vec{MN}| = \\frac{1}{2}|\\vec{AB}| = \\frac{\\sqrt{53}}{2}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "If $G$ is the centroid of $\\triangle ABC$, then $\\vec{GA} + \\vec{GB} + \\vec{GC}$ is equal to:",
    options: [
      "$\\vec{0}$",
      "$3\\vec{OG}$",
      "$\\vec{AB} + \\vec{BC} + \\vec{CA}$",
      "$2\\vec{GA}$"
    ],
    correctAnswer: 0,
    explanation: "Let $O$ be the origin. Then $\\vec{OG} = \\frac{\\vec{OA} + \\vec{OB} + \\vec{OC}}{3}$.\nNow:\n$$\\vec{GA} + \\vec{GB} + \\vec{GC} = (\\vec{OA} - \\vec{OG}) + (\\vec{OB} - \\vec{OG}) + (\\vec{OC} - \\vec{OG})$$\n$$= (\\vec{OA} + \\vec{OB} + \\vec{OC}) - 3\\vec{OG} = 3\\vec{OG} - 3\\vec{OG} = \\vec{0}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "The position vectors of the vertices of a triangle are $\\vec{a}, \\vec{b}, \\vec{c}$. If the origin $O$ is the orthocentre of the triangle, then:",
    options: [
      "$\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{c} = \\vec{c} \\cdot \\vec{a}$",
      "$\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$",
      "$\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{c}$",
      "$|\\vec{a}| = |\\vec{b}| = |\\vec{c}|$"
    ],
    correctAnswer: 0,
    explanation: "Since the orthocentre is at origin $O$, the altitude from $A$ to $BC$ is perpendicular to $BC$:\n$$\\vec{OA} \\perp \\vec{BC} \\implies \\vec{a} \\cdot (\\vec{c} - \\vec{b}) = 0 \\implies \\vec{a} \\cdot \\vec{c} = \\vec{a} \\cdot \\vec{b}$$\nSimilarly, the altitude from $B$ to $CA$ is perpendicular to $CA$:\n$$\\vec{OB} \\perp \\vec{CA} \\implies \\vec{b} \\cdot (\\vec{a} - \\vec{c}) = 0 \\implies \\vec{b} \\cdot \\vec{a} = \\vec{b} \\cdot \\vec{c}$$\nTherefore:\n$$\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{c} = \\vec{c} \\cdot \\vec{a}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "A line passes through the point with position vector $2\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}$ and is in the direction of $\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$. Its vector equation is:",
    options: [
      "$\\vec{r} = (2\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}) + \\lambda(\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k})$",
      "$\\vec{r} = (\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) + \\lambda(2\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k})$",
      "$\\vec{r} = (2\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}) \\times (\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k})$",
      "$\\vec{r} \\cdot (\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) = 2$"
    ],
    correctAnswer: 0,
    explanation: "The vector equation of a straight line passing through a point with position vector $\\vec{a}$ and parallel to vector $\\vec{b}$ is:\n$$\\vec{r} = \\vec{a} + \\lambda\\vec{b}$$\nHere $\\vec{a} = 2\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}$ and $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$.\nThus, $\\vec{r} = (2\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}) + \\lambda(\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k})$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },

  // ==========================================
  // SECTION B: 10 ASSERTION-REASON QUESTIONS (AR)
  // ==========================================
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $G$ is the centroid of $\\triangle ABC$, then for any point $P$ in space, $\\vec{PA} + \\vec{PB} + \\vec{PC} = 3\\vec{PG}$.\nReason (R): The centroid divides the medians in the ratio $2:1$, and $\\vec{OG} = \\frac{\\vec{OA} + \\vec{OB} + \\vec{OC}}{3}$ for any origin $O$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Taking $P$ as the origin of reference:\n$$\\vec{PG} = \\frac{\\vec{PA} + \\vec{PB} + \\vec{PC}}{3} \\implies \\vec{PA} + \\vec{PB} + \\vec{PC} = 3\\vec{PG}$$\nBoth (A) and (R) are true, and (R) is the exact algebraic justification.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The position vector of the point equidistant from $(1, 0, 0)$, $(0, 1, 0)$, and $(0, 0, 1)$ on the plane $x + y + z = 1$ is $\\frac{1}{3}(\\mathbf{i} + \\mathbf{j} + \\mathbf{k})$.\nReason (R): The circumcentre of an equilateral triangle coincides with its centroid.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The three points $A(1, 0, 0)$, $B(0, 1, 0)$, $C(0, 0, 1)$ form an equilateral triangle with side lengths $\\sqrt{2}$.\nThe point on the plane equidistant from the vertices is the circumcentre of $\\triangle ABC$.\nSince the triangle is equilateral, its circumcentre coincides with its centroid:\n$$\\vec{g} = \\frac{\\mathbf{i} + \\mathbf{j} + \\mathbf{k}}{3}$$\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If the vertices of a triangle have position vectors $\\vec{a}, \\vec{b}, \\vec{c}$, its area is $\\frac{1}{2}|\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{c} + \\vec{c} \\times \\vec{a}|$.\nReason (R): The area of $\\triangle ABC$ is $\\frac{1}{2}|\\vec{AB} \\times \\vec{AC}| = \\frac{1}{2}|(\\vec{b} - \\vec{a}) \\times (\\vec{c} - \\vec{a})|$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Expanding the cross product in Reason (R):\n$$(\\vec{b} - \\vec{a}) \\times (\\vec{c} - \\vec{a}) = \\vec{b} \\times \\vec{c} - \\vec{b} \\times \\vec{a} - \\vec{a} \\times \\vec{c} + \\vec{a} \\times \\vec{a}$$\n$$= \\vec{b} \\times \\vec{c} + \\vec{a} \\times \\vec{b} + \\vec{c} \\times \\vec{a} + \\vec{0} = \\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{c} + \\vec{c} \\times \\vec{a}$$\nTaking the half-magnitude gives the area in (A).\nBoth (A) and (R) are true, and (R) is the exact derivation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): In any triangle $ABC$, the vector equation of the median through $A$ is $\\vec{r} = \\vec{a} + t(\\vec{b} + \\vec{c} - 2\\vec{a})$, where $t$ is a real parameter.\nReason (R): The midpoint $D$ of $BC$ has position vector $\\frac{\\vec{b} + \\vec{c}}{2}$, so the vector along the median is $\\vec{AD} = \\frac{\\vec{b} + \\vec{c}}{2} - \\vec{a} = \\frac{1}{2}(\\vec{b} + \\vec{c} - 2\\vec{a})$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The line passes through $A(\\vec{a})$ and is parallel to $\\vec{AD} = \\frac{1}{2}(\\vec{b} + \\vec{c} - 2\\vec{a})$.\nAbsorbing the factor of $\\frac{1}{2}$ into the scalar parameter $t$ gives the vector equation:\n$$\\vec{r} = \\vec{a} + t(\\vec{b} + \\vec{c} - 2\\vec{a})$$\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The position vector of the incentre of $\\triangle ABC$ is $\\frac{a\\vec{a} + b\\vec{b} + c\\vec{c}}{a + b + c}$, where $a, b, c$ are the lengths of the sides opposite to $A, B, C$.\nReason (R): The incentre is the point of intersection of internal angle bisectors, and applying the section formula twice yields this expression.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The internal bisector of $\\angle A$ meets $BC$ at $D$ with $\\vec{d} = \\frac{b\\vec{b} + c\\vec{c}}{b + c}$.\nThe incentre $I$ divides $AD$ in the ratio $(b+c) : a$.\nUsing the section formula:\n$$\\vec{r}_I = \\frac{(b+c)\\left(\\frac{b\\vec{b}+c\\vec{c}}{b+c}\\right) + a\\vec{a}}{(b+c) + a} = \\frac{a\\vec{a} + b\\vec{b} + c\\vec{c}}{a+b+c}$$\nBoth (A) and (R) are true, and (R) explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If the position vectors of $A, B, C$ are $\\vec{a}, \\vec{b}, \\vec{c}$ and $2\\vec{a} + 3\\vec{b} - 5\\vec{c} = \\vec{0}$, then $A, B, C$ are collinear.\nReason (R): The sum of coefficients is $2 + 3 - 5 = 0$, which guarantees that $\\vec{c} = \\frac{2\\vec{a} + 3\\vec{b}}{5}$, meaning $C$ divides $AB$ in the ratio $3:2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Rewriting $2\\vec{a} + 3\\vec{b} - 5\\vec{c} = \\vec{0}$ gives:\n$$5\\vec{c} = 2\\vec{a} + 3\\vec{b} \\implies \\vec{c} = \\frac{2\\vec{a} + 3\\vec{b}}{2 + 3}$$\nThis is precisely the section formula for internal division of $AB$ in the ratio $3:2$.\nHence $C$ lies on the straight line segment joining $A$ and $B$, so $A, B, C$ are collinear.\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $P$ is a point on the line segment joining $A(\\vec{a})$ and $B(\\vec{b})$, then for any point $O$, $\\vec{OP} = (1-t)\\vec{a} + t\\vec{b}$ for some $t \\in [0, 1]$.\nReason (R): The parameter $t = \\frac{AP}{AB}$ represents the fractional distance of $P$ from $A$ along the directed line segment $AB$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The vector equation of the line segment joining $\\vec{a}$ and $\\vec{b}$ is $\\vec{r}(t) = \\vec{a} + t(\\vec{b} - \\vec{a}) = (1-t)\\vec{a} + t\\vec{b}$.\nFor points lying between $A$ and $B$, $t \\in [0, 1]$.\nBoth (A) and (R) are true, and (R) provides the geometric interpretation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a} = 2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$ and $\\vec{b} = \\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}$, the vector equation of the plane passing through the origin and containing the line of intersection of planes is $\\vec{r} \\cdot (\\vec{a} \\times \\vec{b}) = 0$.\nReason (R): The vector $\\vec{n} = \\vec{a} \\times \\vec{b}$ is perpendicular to both $\\vec{a}$ and $\\vec{b}$, so any vector $\\vec{r}$ in the plane spanned by $\\vec{a}$ and $\\vec{b}$ satisfies $\\vec{r} \\cdot \\vec{n} = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The plane containing the origin and the vectors $\\vec{a}$ and $\\vec{b}$ has normal $\\vec{n} = \\vec{a} \\times \\vec{b}$.\nThe equation of a plane through origin with normal $\\vec{n}$ is $\\vec{r} \\cdot \\vec{n} = 0$.\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $ABCD$ is a quadrilateral, then $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = \\vec{0}$.\nReason (R): In any closed polygon, the vector sum of the sides taken in cyclic order vanishes because the initial and terminal points coincide.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By polygon law of vector addition:\n$$\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = (\\vec{b} - \\vec{a}) + (\\vec{c} - \\vec{b}) + (\\vec{d} - \\vec{c}) + (\\vec{a} - \\vec{d}) = \\vec{0}$$\nBoth (A) and (R) are true, and (R) is the correct explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a}, \\vec{b}, \\vec{c}$ are position vectors of the vertices of $\\triangle ABC$, and $\\vec{d} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{4}$, then $D$ lies outside $\\triangle ABC$.\nReason (R): The centroid $G$ has position vector $\\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$, and $\\vec{d} = \\frac{3}{4}\\vec{g}$, which is the midpoint between origin and centroid.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 1,
    explanation: "Reason (R) states $\\vec{d} = \\frac{3}{4}\\vec{g}$, which lies on the segment $OG$ connecting the origin to the centroid. Since $\\frac{3}{4} \\ne \\frac{1}{2}$, it is not the midpoint, but $D$ does divide $OG$ in $3:1$.\nWait, if the origin $O$ is inside the triangle (for example, the circumcentre of an acute triangle), then $\\vec{d}$ lies inside $\\triangle ABC$! If $O$ is outside, $D$ could lie outside.\nThus whether $D$ lies outside depends on the location of the origin, so Assertion (A) is not universally true!\nTherefore, (A) is false and (R) is false or true depending on definition.\nLet us replace this with a crystal clear AR question: \nAssertion (A): The distance of the point $P(2, 3, 4)$ from the origin is $\\sqrt{29}$.\nReason (R): The magnitude of the position vector $\\vec{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$ is $\\sqrt{x^2 + y^2 + z^2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The position vector of $P(2, 3, 4)$ is $\\vec{r} = 2\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$.\nIts distance from the origin is:\n$$|\\vec{r}| = \\sqrt{2^2 + 3^2 + 4^2} = \\sqrt{4 + 9 + 16} = \\sqrt{29}$$\nBoth (A) and (R) are true, and (R) gives the general formula.",
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
    question: "If the position vectors of $A$ and $B$ are $\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and $3\\mathbf{i} + 4\\mathbf{j} + 7\\mathbf{k}$, find the magnitude of $\\vec{AB}$.",
    correctAnswer: 6,
    explanation: "Compute $\\vec{AB}$:\n$$\\vec{AB} = (3-1)\\mathbf{i} + (4-2)\\mathbf{j} + (7-3)\\mathbf{k} = 2\\mathbf{i} + 2\\mathbf{j} + 4\\mathbf{k}$$\nIts magnitude squared is:\n$$|\\vec{AB}|^2 = 2^2 + 2^2 + 4^2 = 4 + 4 + 16 = 24$$\nWait, $\\sqrt{24} = 2\\sqrt{6}$ is not an integer!\nLet us adjust the coordinates so $|\\vec{AB}|$ is an integer:\nLet $\\vec{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and $\\vec{b} = 3\\mathbf{i} + 6\\mathbf{j} + 7\\mathbf{k}$.\nThen $\\vec{AB} = 2\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k}$.\n$$|\\vec{AB}| = \\sqrt{2^2 + 4^2 + 4^2} = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$$!\nLet's use $\\vec{b} = 3\\mathbf{i} + 6\\mathbf{j} + 7\\mathbf{k}$.",
    correctAnswer: 6,
    explanation: "Compute $\\vec{AB}$:\n$$\\vec{AB} = (3-1)\\mathbf{i} + (6-2)\\mathbf{j} + (7-3)\\mathbf{k} = 2\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k}$$\nIts magnitude is:\n$$|\\vec{AB}| = \\sqrt{2^2 + 4^2 + 4^2} = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the coordinates of the midpoint of the line segment joining $P(x, 4, 3)$ and $Q(2, y, 7)$ are $(3, 5, 5)$, find the value of $x + y$.",
    correctAnswer: 10,
    explanation: "Using the midpoint formula:\n$$\\frac{x + 2}{2} = 3 \\implies x + 2 = 6 \\implies x = 4$$\n$$\\frac{4 + y}{2} = 5 \\implies 4 + y = 10 \\implies y = 6$$\n$$\\frac{3 + 7}{2} = 5 \\quad \\text{(consistent)}$$\nTherefore, $x + y = 4 + 6 = 10$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the position vectors of the vertices of a triangle are $\\vec{a} = \\mathbf{i} + 2\\mathbf{j}$, $\\vec{b} = 3\\mathbf{i} + 4\\mathbf{j}$, and $\\vec{c} = 5\\mathbf{i} + 6\\mathbf{j}$, find the area of the triangle.",
    correctAnswer: 0,
    explanation: "Compute $\\vec{AB}$ and $\\vec{AC}$:\n$$\\vec{AB} = (3-1)\\mathbf{i} + (4-2)\\mathbf{j} = 2\\mathbf{i} + 2\\mathbf{j}$$\n$$\\vec{AC} = (5-1)\\mathbf{i} + (6-2)\\mathbf{j} = 4\\mathbf{i} + 4\\mathbf{j} = 2\\vec{AB}$$\nSince $\\vec{AC}$ is a scalar multiple of $\\vec{AB}$, the three points are collinear.\nThus the area of the triangle formed by them is $0$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the origin $O$ is the centroid of $\\triangle ABC$ with vertices $A(1, a, 3)$, $B(2, -4, b)$, and $C(c, 1, -5)$, find the value of $a + b + c$.",
    correctAnswer: 2,
    explanation: "Since $O(0, 0, 0)$ is the centroid:\n$$\\frac{1 + 2 + c}{3} = 0 \\implies 3 + c = 0 \\implies c = -3$$\n$$\\frac{a - 4 + 1}{3} = 0 \\implies a - 3 = 0 \\implies a = 3$$\n$$\\frac{3 + b - 5}{3} = 0 \\implies b - 2 = 0 \\implies b = 2$$\nTherefore, $a + b + c = 3 + 2 + (-3) = 2$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "Find the square of the distance from the point with position vector $2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$ to the origin.",
    correctAnswer: 49,
    explanation: "Let $\\vec{r} = 2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$.\nThe square of the distance to the origin is:\n$$|\\vec{r}|^2 = 2^2 + 3^2 + 6^2 = 4 + 9 + 36 = 49$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $P(1, 2, 3)$, $Q(3, 4, 5)$, and $R(x, y, 7)$ are collinear, find the value of $x + y$.",
    correctAnswer: 11,
    explanation: "Vector $\\vec{PQ} = (3-1)\\mathbf{i} + (4-2)\\mathbf{j} + (5-3)\\mathbf{k} = 2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.\nVector $\\vec{PR} = (x-1)\\mathbf{i} + (y-2)\\mathbf{j} + (7-3)\\mathbf{k} = (x-1)\\mathbf{i} + (y-2)\\mathbf{j} + 4\\mathbf{k}$.\nSince $P, Q, R$ are collinear, $\\vec{PR} = \\lambda\\vec{PQ}$:\nComparing the $\\mathbf{k}$-component: $4 = \\lambda(2) \\implies \\lambda = 2$.\nThen:\n$$x - 1 = 2(2) = 4 \\implies x = 5$$\n$$y - 2 = 2(2) = 4 \\implies y = 6$$\nThus $x + y = 5 + 6 = 11$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the point $C$ divides the segment joining $A(\\mathbf{i} + \\mathbf{j})$ and $B(4\\mathbf{i} + 7\\mathbf{j})$ internally in the ratio $1:2$, find the magnitude of the position vector of $C$.",
    correctAnswer: 13,
    explanation: "Wait, by the section formula:\n$$\\vec{c} = \\frac{1(4\\mathbf{i} + 7\\mathbf{j}) + 2(\\mathbf{i} + \\mathbf{j})}{1+2} = \\frac{6\\mathbf{i} + 9\\mathbf{j}}{3} = 2\\mathbf{i} + 3\\mathbf{j}$$\nIts magnitude squared is $|\\vec{c}|^2 = 2^2 + 3^2 = 13$.\nIf the question asks for $|\\vec{c}|^2$, it is $13$.\nLet's ask: Find the value of $|\\vec{c}|^2$.",
    correctAnswer: 13,
    explanation: "Using the section formula for internal division in the ratio $1:2$:\n$$\\vec{c} = \\frac{1(4\\mathbf{i} + 7\\mathbf{j}) + 2(\\mathbf{i} + \\mathbf{j})}{1+2} = \\frac{6\\mathbf{i} + 9\\mathbf{j}}{3} = 2\\mathbf{i} + 3\\mathbf{j}$$\nThe square of its magnitude is:\n$$|\\vec{c}|^2 = 2^2 + 3^2 = 4 + 9 = 13$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "In $\\triangle ABC$, the position vectors of $A, B, C$ are $\\vec{a}, \\vec{b}, \\vec{c}$. If $\\vec{a} + \\vec{b} + \\vec{c} = 6\\mathbf{i} + 9\\mathbf{j} + 12\\mathbf{k}$, find the $z$-coordinate of the centroid of $\\triangle ABC$.",
    correctAnswer: 4,
    explanation: "The centroid $\\vec{g}$ is:\n$$\\vec{g} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3} = \\frac{6\\mathbf{i} + 9\\mathbf{j} + 12\\mathbf{k}}{3} = 2\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$$\nThe $z$-coordinate is $4$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the position vector of point $A$ is $3\\mathbf{i} + 4\\mathbf{j}$ and the position vector of point $B$ is $-3\\mathbf{i} - 4\\mathbf{j}$, find the distance between $A$ and $B$.",
    correctAnswer: 10,
    explanation: "The vector $\\vec{AB}$ is:\n$$\\vec{AB} = \\vec{b} - \\vec{a} = (-3-3)\\mathbf{i} + (-4-4)\\mathbf{j} = -6\\mathbf{i} - 8\\mathbf{j}$$\nThe distance is:\n$$|\\vec{AB}| = \\sqrt{(-6)^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $P(2, 1, 3)$ and $Q(4, 5, 7)$ are two points, find the length of the projection of $\\vec{PQ}$ onto the $z$-axis.",
    correctAnswer: 4,
    explanation: "The vector $\\vec{PQ}$ is:\n$$\\vec{PQ} = (4-2)\\mathbf{i} + (5-1)\\mathbf{j} + (7-3)\\mathbf{k} = 2\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k}$$\nThe projection of any vector $\\vec{v} = v_x\\mathbf{i} + v_y\\mathbf{j} + v_z\\mathbf{k}$ on the $z$-axis is its $z$-component, which is $v_z = 4$.\nThus the length of the projection is $4$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  }
];

// Re-adjust question texts for Q3, Q10, Q11, Q17:
subtopic4Questions[2].question = "The position vectors of the vertices of $\\triangle ABC$ are $\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$, $2\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}$, and $3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}$. Then $\\triangle ABC$ is:";
subtopic4Questions[9].question = "Assertion (A): The distance of the point $P(2, 3, 4)$ from the origin is $\\sqrt{29}$.\nReason (R): The magnitude of the position vector $\\vec{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$ is $\\sqrt{x^2 + y^2 + z^2}$.";
subtopic4Questions[10].question = "If the position vectors of $A$ and $B$ are $\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and $3\\mathbf{i} + 6\\mathbf{j} + 7\\mathbf{k}$, find the magnitude of $\\vec{AB}$.";
subtopic4Questions[16].question = "If the point $C$ divides the segment joining $A(\\mathbf{i} + \\mathbf{j})$ and $B(4\\mathbf{i} + 7\\mathbf{j})$ internally in the ratio $1:2$, find the value of $|\\vec{c}|^2$, where $\\vec{c}$ is the position vector of $C$.";

module.exports = subtopic4Questions;
