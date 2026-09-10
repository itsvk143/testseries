// scripts/data_jee_vectors_subtopic5.js
// Subtopic 5: Scalar and vector products
// 30 Authentic JEE Mains standard questions: 10 MCQs, 10 AR, 10 NUM

const SUBTOPIC = "Scalar and vector products";
const CHAPTER = "Vectors";

const subtopic5Questions = [
  // ==========================================
  // SECTION A: 10 MULTIPLE CHOICE QUESTIONS (MCQs)
  // ==========================================
  {
    type: "MCQ",
    question: "If $|\\vec{a}| = 2$, $|\\vec{b}| = 5$, and $|\\vec{a} \times \\vec{b}| = 8$, then the value of $\\vec{a} \cdot \\vec{b}$ is:",
    options: [
      "$\\pm 6$",
      "$\\pm 8$",
      "$\\pm 4$",
      "$\\pm 5$"
    ],
    correctAnswer: 0,
    explanation: "By Lagrange's identity:\n$$|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2 = |\\vec{a}|^2 |\\vec{b}|^2$$\n$$8^2 + (\\vec{a} \\cdot \\vec{b})^2 = (2)^2 (5)^2$$\n$$64 + (\\vec{a} \\cdot \\vec{b})^2 = 4 \\times 25 = 100$$\n$$(\\vec{a} \\cdot \\vec{b})^2 = 100 - 64 = 36 \\implies \\vec{a} \\cdot \\vec{b} = \\pm 6$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "The area of a parallelogram whose diagonals are represented by $\\vec{d}_1 = 3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$ and $\\vec{d}_2 = \\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$ is:",
    options: [
      "$5\\sqrt{3}$",
      "$\\frac{5\\sqrt{3}}{2}$",
      "$10\\sqrt{3}$",
      "$15$"
    ],
    correctAnswer: 0,
    explanation: "The area of a parallelogram with diagonals $\\vec{d}_1$ and $\\vec{d}_2$ is:\n$$\\text{Area} = \\frac{1}{2}|\\vec{d}_1 \\times \\vec{d}_2|$$\n$$\\vec{d}_1 \\times \\vec{d}_2 = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 3 & 1 & -2 \\\\ 1 & -3 & 4 \\end{vmatrix} = \\mathbf{i}(4 - 6) - \\mathbf{j}(12 - (-2)) + \\mathbf{k}(-9 - 1) = -2\\mathbf{i} - 14\\mathbf{j} - 10\\mathbf{k}$$\nThe magnitude is:\n$$|\\vec{d}_1 \\times \\vec{d}_2| = \\sqrt{(-2)^2 + (-14)^2 + (-10)^2} = \\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$$\nTherefore:\n$$\\text{Area} = \\frac{1}{2}(10\\sqrt{3}) = 5\\sqrt{3}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If $\\vec{a} = 2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$ and $\\vec{b} = \\mathbf{i} + \\mathbf{j}$, then the vector triple product $\\vec{a} \\times (\\vec{a} \\times \\vec{b})$ is:",
    options: [
      "$-3\\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$",
      "$-3\\mathbf{i} + 6\\mathbf{j} - 3\\mathbf{k}$",
      "$3\\mathbf{i} - 6\\mathbf{j} - 3\\mathbf{k}$",
      "$3\\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$"
    ],
    correctAnswer: 1,
    explanation: "Using the vector triple product expansion:\n$$\\vec{a} \\times (\\vec{a} \\times \\vec{b}) = (\\vec{a} \\cdot \\vec{b})\\vec{a} - (\\vec{a} \\cdot \\vec{a})\\vec{b}$$\nCompute $\\vec{a} \\cdot \\vec{b}$ and $|\\vec{a}|^2$:\n$$\\vec{a} \\cdot \\vec{b} = (2)(1) + (1)(1) + (-2)(0) = 3$$\n$$|\\vec{a}|^2 = 2^2 + 1^2 + (-2)^2 = 9$$\nSubstitute into the expansion:\n$$= 3(2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) - 9(\\mathbf{i} + \\mathbf{j})$$\n$$= (6\\mathbf{i} + 3\\mathbf{j} - 6\\mathbf{k}) - (9\\mathbf{i} + 9\\mathbf{j}) = -3\\mathbf{i} - 6\\mathbf{j} - 6\\mathbf{k}$$\nWait, $(6-9)\\mathbf{i} + (3-9)\\mathbf{j} - 6\\mathbf{k} = -3\\mathbf{i} - 6\\mathbf{j} - 6\\mathbf{k} = -3(\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k})$.\nLet's check the options: Option 0 had $-3\\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$.\nLet us update the options so that Option 0 is $-3\\mathbf{i} - 6\\mathbf{j} - 6\\mathbf{k}$ with correctAnswer: 0!",
    options: [
      "$-3\\mathbf{i} - 6\\mathbf{j} - 6\\mathbf{k}$",
      "$-3\\mathbf{i} + 6\\mathbf{j} - 6\\mathbf{k}$",
      "$3\\mathbf{i} - 6\\mathbf{j} - 6\\mathbf{k}$",
      "$3\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}$"
    ],
    correctAnswer: 0,
    explanation: "Using the vector triple product expansion:\n$$\\vec{a} \\times (\\vec{a} \\times \\vec{b}) = (\\vec{a} \\cdot \\vec{b})\\vec{a} - (\\vec{a} \\cdot \\vec{a})\\vec{b}$$\n$$\\vec{a} \\cdot \\vec{b} = (2)(1) + (1)(1) + (-2)(0) = 3$$\n$$|\\vec{a}|^2 = 2^2 + 1^2 + (-2)^2 = 9$$\nThus:\n$$= 3(2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) - 9(\\mathbf{i} + \\mathbf{j}) = (6\\mathbf{i} + 3\\mathbf{j} - 6\\mathbf{k}) - (9\\mathbf{i} + 9\\mathbf{j}) = -3\\mathbf{i} - 6\\mathbf{j} - 6\\mathbf{k}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "If $\\vec{u}, \\vec{v}, \\vec{w}$ are three non-coplanar vectors, then $\\frac{\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})}{(\\vec{w} \\times \\vec{u}) \\cdot \\vec{v}} + \\frac{\\vec{v} \\cdot (\\vec{w} \\times \\vec{u})}{(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}}$ is equal to:",
    options: [
      "$0$",
      "$2$",
      "$-2$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "Recall the cyclic properties of the scalar triple product:\n$$[\\vec{u}, \\vec{v}, \\vec{w}] = \\vec{u} \\cdot (\\vec{v} \\times \\vec{w}) = \\vec{v} \\cdot (\\vec{w} \\times \\vec{u}) = (\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}$$\nOn the other hand, anti-cyclic permutations change the sign:\n$$(\\vec{w} \\times \\vec{u}) \\cdot \\vec{v} = [\\vec{w}, \\vec{u}, \\vec{v}] = [\\vec{u}, \\vec{v}, \\vec{w}]$$\nWait! $[\\vec{w}, \\vec{u}, \\vec{v}] = [\\vec{u}, \\vec{v}, \\vec{w}]$ because $(w, u, v)$ is a cyclic permutation of $(u, v, w)$!\nLet's check: $(u, v, w) \\to (v, w, u) \\to (w, u, v)$ is an even permutation!\nThen $(\\vec{w} \\times \\vec{u}) \\cdot \\vec{v} = [\\vec{w}, \\vec{u}, \\vec{v}] = [\\vec{u}, \\vec{v}, \\vec{w}]$.\nThen the first term is $\\frac{[\\vec{u}, \\vec{v}, \\vec{w}]}{[\\vec{u}, \\vec{v}, \\vec{w}]} = 1$!\nAnd the second term is $\\frac{[\\vec{v}, \\vec{w}, \\vec{u}]}{[\\vec{u}, \\vec{v}, \\vec{w}]} = \\frac{[\\vec{u}, \\vec{v}, \\vec{w}]}{[\\vec{u}, \\vec{v}, \\vec{w}]} = 1$!\nSo the sum is $1 + 1 = 2$!\nIf the denominator in the first term was $(\\vec{w} \\times \\vec{v}) \\cdot \\vec{u} = -[\\vec{u}, \\vec{v}, \\vec{w}]$, then it would be $-1 + 1 = 0$!\nLet's use the standard question:\n$\\frac{\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})}{(\\vec{w} \\times \\vec{v}) \\cdot \\vec{u}} + \\frac{\\vec{v} \\cdot (\\vec{w} \\times \\vec{u})}{(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}}$ which equals $-1 + 1 = 0$!",
    options: [
      "$0$",
      "$2$",
      "$-2$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "By the cyclic properties of the scalar triple product:\n$$\\vec{u} \\cdot (\\vec{v} \\times \\vec{w}) = [\\vec{u}, \\vec{v}, \\vec{w}]$$\n$$(\\vec{w} \\times \\vec{v}) \\cdot \\vec{u} = [\\vec{w}, \\vec{v}, \\vec{u}] = -[\\vec{u}, \\vec{v}, \\vec{w}]$$\nTherefore:\n$$\\frac{\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})}{(\\vec{w} \\times \\vec{v}) \\cdot \\vec{u}} = \\frac{[\\vec{u}, \\vec{v}, \\vec{w}]}{-[\\vec{u}, \\vec{v}, \\vec{w}]} = -1$$\nAlso:\n$$\\frac{\\vec{v} \\cdot (\\vec{w} \\times \\vec{u})}{(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}} = \\frac{[\\vec{u}, \\vec{v}, \\vec{w}]}{[\\vec{u}, \\vec{v}, \\vec{w}]} = 1$$\nHence the sum is $-1 + 1 = 0$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "If $\\vec{a}, \\vec{b}, \\vec{c}$ are unit vectors such that $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = \\frac{1}{2}\\vec{b}$, and $\\vec{b}$ and $\\vec{c}$ are non-parallel, then the angle between $\\vec{a}$ and $\\vec{c}$ is:",
    options: [
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{2\\pi}{3}$"
    ],
    correctAnswer: 0,
    explanation: "Using the vector triple product formula:\n$$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$$\nGiven that this equals $\\frac{1}{2}\\vec{b}$:\n$$(\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c} = \\frac{1}{2}\\vec{b}$$\n$$\\left(\\vec{a} \\cdot \\vec{c} - \\frac{1}{2}\\right)\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c} = \\vec{0}$$\nSince $\\vec{b}$ and $\\vec{c}$ are non-parallel, their coefficients must vanish independently:\n$$\\vec{a} \\cdot \\vec{c} - \\frac{1}{2} = 0 \\implies \\vec{a} \\cdot \\vec{c} = \\frac{1}{2}$$\nSince $\\vec{a}$ and $\\vec{c}$ are unit vectors:\n$$|\\vec{a}||\\vec{c}|\\cos\\theta = \\frac{1}{2} \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = \\frac{\\pi}{3}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "If $|\\vec{a}| = 3$, $|\\vec{b}| = 4$, and $\\vec{a} \\cdot \\vec{b} = 6$, then the value of $|\\vec{a} \\times \\vec{b}|$ is:",
    options: [
      "$6\\sqrt{3}$",
      "$6$",
      "$12$",
      "$3\\sqrt{3}$"
    ],
    correctAnswer: 0,
    explanation: "Using Lagrange's identity:\n$$|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2 = |\\vec{a}|^2 |\\vec{b}|^2$$\n$$|\\vec{a} \\times \\vec{b}|^2 + 6^2 = 3^2 \\times 4^2$$\n$$|\\vec{a} \\times \\vec{b}|^2 + 36 = 9 \\times 16 = 144$$\n$$|\\vec{a} \\times \\vec{b}|^2 = 144 - 36 = 108$$\n$$|\\vec{a} \\times \\vec{b}| = \\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If $\\vec{a} \\times \\vec{b} = \\vec{c} \\times \\vec{d}$ and $\\vec{a} \\times \\vec{c} = \\vec{b} \\times \\vec{d}$, then the vectors $\\vec{a} - \\vec{d}$ and $\\vec{b} - \\vec{c}$ are:",
    options: [
      "Parallel",
      "Perpendicular",
      "Coplanar with $\\vec{a}$ only",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Subtract the second equation from the first:\n$$(\\vec{a} \\times \\vec{b}) - (\\vec{a} \\times \\vec{c}) = (\\vec{c} \\times \\vec{d}) - (\\vec{b} \\times \\vec{d})$$\n$$\\vec{a} \\times (\\vec{b} - \\vec{c}) = (\\vec{c} - \\vec{b}) \\times \\vec{d} = -(\\vec{b} - \\vec{c}) \\times \\vec{d} = \\vec{d} \\times (\\vec{b} - \\vec{c})$$\nRearranging:\n$$\\vec{a} \\times (\\vec{b} - \\vec{c}) - \\vec{d} \\times (\\vec{b} - \\vec{c}) = \\vec{0}$$\n$$(\\vec{a} - \\vec{d}) \\times (\\vec{b} - \\vec{c}) = \\vec{0}$$\nSince the cross product of two vectors is zero, the vectors $\\vec{a} - \\vec{d}$ and $\\vec{b} - \\vec{c}$ are parallel.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    question: "The value of $\\mathbf{i} \\times (\\mathbf{j} \\times \\mathbf{k}) + \\mathbf{j} \\times (\\mathbf{k} \\times \\mathbf{i}) + \\mathbf{k} \\times (\\mathbf{i} \\times \\mathbf{j})$ is:",
    options: [
      "$\\vec{0}$",
      "$\\mathbf{i} + \\mathbf{j} + \\mathbf{k}$",
      "$3\\vec{0}$",
      "$-(\\mathbf{i} + \\mathbf{j} + \\mathbf{k})$"
    ],
    correctAnswer: 0,
    explanation: "This is a direct application of Jacobi's identity for vector triple products:\n$$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) + \\vec{b} \\times (\\vec{c} \\times \\vec{a}) + \\vec{c} \\times (\\vec{a} \\times \\vec{b}) = \\vec{0}$$\nAlternatively, computing term by term:\n$$\\mathbf{j} \\times \\mathbf{k} = \\mathbf{i} \\implies \\mathbf{i} \\times \\mathbf{i} = \\vec{0}$$\n$$\\mathbf{k} \\times \\mathbf{i} = \\mathbf{j} \\implies \\mathbf{j} \\times \\mathbf{j} = \\vec{0}$$\n$$\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k} \\implies \\mathbf{k} \\times \\mathbf{k} = \\vec{0}$$\nThus the sum is $\\vec{0} + \\vec{0} + \\vec{0} = \\vec{0}$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "A unit vector perpendicular to both the vectors $\\vec{a} = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}$ and $\\vec{b} = 2\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k}$ is:",
    options: [
      "$\\frac{1}{\\sqrt{3}}(\\mathbf{i} - \\mathbf{j} - \\mathbf{k})$",
      "$\\frac{1}{3}(\\mathbf{i} - \\mathbf{j} - \\mathbf{k})$",
      "$\\frac{1}{\\sqrt{3}}(\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$",
      "$\\frac{1}{\\sqrt{6}}(\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k})$"
    ],
    correctAnswer: 0,
    explanation: "Compute the cross product $\\vec{a} \\times \\vec{b}$:\n$$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 3 & 1 & 2 \\\\ 2 & -2 & 4 \\end{vmatrix} = \\mathbf{i}(4 - (-4)) - \\mathbf{j}(12 - 4) + \\mathbf{k}(-6 - 2) = 8\\mathbf{i} - 8\\mathbf{j} - 8\\mathbf{k}$$\nFactor out $8$:\n$$\\vec{a} \\times \\vec{b} = 8(\\mathbf{i} - \\mathbf{j} - \\mathbf{k})$$\nThe magnitude of $\\mathbf{i} - \\mathbf{j} - \\mathbf{k}$ is $\\sqrt{1^2 + (-1)^2 + (-1)^2} = \\sqrt{3}$.\nThus, a unit perpendicular vector is:\n$$\\hat{n} = \\frac{1}{\\sqrt{3}}(\\mathbf{i} - \\mathbf{j} - \\mathbf{k})$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    question: "If $|\\vec{a}| = 1, |\\vec{b}| = 2, |\\vec{c}| = 3$ and $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$, then the value of $|\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{c} + \\vec{c} \\times \\vec{a}|$ is:",
    options: [
      "$0$",
      "$6$",
      "$3$",
      "$12$"
    ],
    correctAnswer: 0,
    explanation: "Since $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$, we have:\n$$|\\vec{a} + \\vec{b}| = |-\\vec{c}| = |\\vec{c}| = 3$$\nAlso, $|\\vec{a}| + |\\vec{b}| = 1 + 2 = 3$.\nSince $|\\vec{a} + \\vec{b}| = |\\vec{a}| + |\\vec{b}|$, the vectors $\\vec{a}$ and $\\vec{b}$ must be parallel and in the same direction!\nThis means $\\vec{a} \\times \\vec{b} = \\vec{0}$.\nSimilarly, since $\\vec{c} = -(\\vec{a} + \\vec{b})$, all three vectors are collinear!\nThus $\\vec{a} \\times \\vec{b} = \\vec{0}$, $\\vec{b} \\times \\vec{c} = \\vec{0}$, and $\\vec{c} \\times \\vec{a} = \\vec{0}$.\nTherefore:\n$$|\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{c} + \\vec{c} \\times \\vec{a}| = 0$$",
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
    question: "Given below are two statements:\nAssertion (A): For any vector $\\vec{a}$, $(\\vec{a} \\times \\mathbf{i})^2 + (\\vec{a} \\times \\mathbf{j})^2 + (\\vec{a} \\times \\mathbf{k})^2 = 2|\\vec{a}|^2$.\nReason (R): For any vector $\\vec{a} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$, $|\\vec{a} \\times \\mathbf{i}|^2 = y^2 + z^2$, $|\\vec{a} \\times \\mathbf{j}|^2 = x^2 + z^2$, and $|\\vec{a} \\times \\mathbf{k}|^2 = x^2 + y^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Let $\\vec{a} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$.\nThen $\\vec{a} \\times \\mathbf{i} = -y\\mathbf{k} + z\\mathbf{j} \\implies |\\vec{a} \\times \\mathbf{i}|^2 = y^2 + z^2$.\nSimilarly, $|\\vec{a} \\times \\mathbf{j}|^2 = x^2 + z^2$ and $|\\vec{a} \\times \\mathbf{k}|^2 = x^2 + y^2$.\nAdding all three:\n$$(y^2 + z^2) + (x^2 + z^2) + (x^2 + y^2) = 2(x^2 + y^2 + z^2) = 2|\\vec{a}|^2$$\nBoth (A) and (R) are true, and (R) is the direct component derivation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c}$ and $\\vec{a} \\times \\vec{b} = \\vec{a} \\times \\vec{c}$ for a non-zero vector $\\vec{a}$, then $\\vec{b} = \\vec{c}$.\nReason (R): $\\vec{a} \\cdot (\\vec{b} - \\vec{c}) = 0$ implies $(\\vec{b} - \\vec{c}) \\perp \\vec{a}$, and $\\vec{a} \\times (\\vec{b} - \\vec{c}) = \\vec{0}$ implies $(\\vec{b} - \\vec{c}) \\parallel \\vec{a}$. A vector cannot be both perpendicular and parallel to a non-zero vector unless it is the null vector.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "From $\\vec{a} \\cdot (\\vec{b} - \\vec{c}) = 0$, the vector $\\vec{v} = \\vec{b} - \\vec{c}$ is perpendicular to $\\vec{a}$.\nFrom $\\vec{a} \\times (\\vec{b} - \\vec{c}) = \\vec{0}$, $\\vec{v}$ is parallel to $\\vec{a}$.\nSince no non-zero vector can be both perpendicular and parallel to a non-zero vector $\\vec{a}$, we must have $\\vec{v} = \\vec{0} \\implies \\vec{b} = \\vec{c}$.\nBoth (A) and (R) are true, and (R) is the exact explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): For any three vectors $\\vec{a}, \\vec{b}, \\vec{c}$, $\\vec{a} \\times (\\vec{b} \\times \\vec{c})$ is coplanar with $\\vec{b}$ and $\\vec{c}$.\nReason (R): The vector triple product can be expanded as $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$, which is a linear combination of $\\vec{b}$ and $\\vec{c}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The expansion $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$ expresses the vector triple product as $x\\vec{b} + y\\vec{c}$ where $x = \\vec{a} \\cdot \\vec{c}$ and $y = -(\\vec{a} \\cdot \\vec{b})$ are scalars.\nAny vector that is a linear combination of $\\vec{b}$ and $\\vec{c}$ lies in the plane spanned by $\\vec{b}$ and $\\vec{c}$.\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The cross product of two vectors is non-associative, meaning $(\\vec{a} \\times \\vec{b}) \\times \\vec{c} \\ne \\vec{a} \\times (\\vec{b} \\times \\vec{c})$ in general.\nReason (R): $(\\vec{a} \\times \\vec{b}) \\times \\vec{c}$ lies in the plane of $\\vec{a}$ and $\\vec{b}$, whereas $\\vec{a} \\times (\\vec{b} \\times \\vec{c})$ lies in the plane of $\\vec{b}$ and $\\vec{c}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By expansion:\n$$(\\vec{a} \\times \\vec{b}) \\times \\vec{c} = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{b} \\cdot \\vec{c})\\vec{a} \\quad (\\text{lies in plane of } \\vec{a}, \\vec{b})$$\n$$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c} \\quad (\\text{lies in plane of } \\vec{b}, \\vec{c})$$\nSince their directions generally span different planes, they are not equal in general.\nBoth (A) and (R) are true, and (R) provides the geometric reasoning.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a}$ and $\\vec{b}$ are adjacent sides of a parallelogram, then its area is $|\\vec{a} \\times \\vec{b}|$.\nReason (R): The area of a parallelogram of adjacent sides $a, b$ with included angle $\\theta$ is $ab\\sin\\theta$, which matches the magnitude of the cross product $|\\vec{a} \\times \\vec{b}|$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The geometric definition of cross product magnitude is $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$.\nIn a parallelogram with base $|\\vec{a}|$ and height $|\\vec{b}|\\sin\\theta$, the area is $\\text{base} \\times \\text{height} = |\\vec{a}||\\vec{b}|\\sin\\theta = |\\vec{a} \\times \\vec{b}|$.\nBoth (A) and (R) are true, and (R) is the correct explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The scalar triple product $[\\vec{a}, \\vec{b}, \\vec{a}]$ is always equal to $0$ for any two vectors $\\vec{a}$ and $\\vec{b}$.\nReason (R): If two vectors in a scalar triple product are equal, the corresponding determinant has two identical rows, and therefore its value is zero.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "$[\\vec{a}, \\vec{b}, \\vec{a}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{a}) = -\\vec{a} \\cdot (\\vec{a} \\times \\vec{b})$.\nSince $\\vec{a} \\times \\vec{b}$ is perpendicular to $\\vec{a}$, its dot product with $\\vec{a}$ is identically zero.\nDeterminant property also confirms that identical rows make the determinant zero.\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a} = \\mathbf{i} + \\mathbf{j}$ and $\\vec{b} = \\mathbf{i} - \\mathbf{j}$, then $|\\vec{a} \\times \\vec{b}| = 2$.\nReason (R): For any two vectors, $|\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2|\\vec{b}|^2 - (\\vec{a} \\cdot \\vec{b})^2$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Using Lagrange's identity from (R):\n$$|\\vec{a}|^2 = 1^2 + 1^2 = 2, \\quad |\\vec{b}|^2 = 1^2 + (-1)^2 = 2$$\n$$\\vec{a} \\cdot \\vec{b} = (1)(1) + (1)(-1) = 0$$\n$$|\\vec{a} \\times \\vec{b}|^2 = 2 \\times 2 - 0 = 4 \\implies |\\vec{a} \\times \\vec{b}| = 2$$\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a}, \\vec{b}, \\vec{c}$ form three concurrent edges of a rectangular parallelepiped of lengths $2, 3, 4$, then $[\\vec{a}, \\vec{b}, \\vec{c}] = 24$.\nReason (R): For mutually orthogonal vectors, $[\\vec{a}, \\vec{b}, \\vec{c}] = |\\vec{a}||\\vec{b}||\\vec{c}|$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "For mutually orthogonal vectors forming a right-handed system:\n$$[\\vec{a}, \\vec{b}, \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = |\\vec{a}| |\\vec{b} \\times \\vec{c}| = |\\vec{a}||\\vec{b}||\\vec{c}| = 2 \\times 3 \\times 4 = 24$$\nBoth (A) and (R) are true, and (R) correctly explains (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): If $\\vec{a} \\times \\vec{b} = \\vec{0}$ and $\\vec{a} \\cdot \\vec{b} = 0$, then at least one of $\\vec{a}$ or $\\vec{b}$ is the zero vector.\nReason (R): $\\vec{a} \\times \\vec{b} = \\vec{0}$ implies $\\vec{a} \\parallel \\vec{b}$ (or one is zero), and $\\vec{a} \\cdot \\vec{b} = 0$ implies $\\vec{a} \\perp \\vec{b}$ (or one is zero). Two non-zero vectors cannot be simultaneously parallel and perpendicular.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "If both $\\vec{a}$ and $\\vec{b}$ were non-zero, $\\vec{a} \\times \\vec{b} = \\vec{0} \\implies \\sin\\theta = 0 \\implies \\theta = 0$ or $\\pi$, while $\\vec{a} \\cdot \\vec{b} = 0 \\implies \\cos\\theta = 0 \\implies \\theta = \\frac{\\pi}{2}$.\nSince no angle can have $\\sin\\theta = 0$ and $\\cos\\theta = 0$ simultaneously ($\sin^2\\theta + \\cos^2\\theta = 1$), at least one vector must be $\\vec{0}$.\nBoth (A) and (R) are true, and (R) is the correct explanation.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): For any four vectors $\\vec{a}, \\vec{b}, \\vec{c}, \\vec{d}$, $(\\vec{a} \\times \\vec{b}) \\cdot (\\vec{c} \\times \\vec{d}) = (\\vec{a} \\cdot \\vec{c})(\\vec{b} \\cdot \\vec{d}) - (\\vec{a} \\cdot \\vec{d})(\\vec{b} \\cdot \\vec{c})$.\nReason (R): This identity is known as Lagrange's identity for the scalar product of four vectors.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 1,
    explanation: "Both (A) and (R) are true. Assertion (A) gives Lagrange's four-vector scalar product identity, and Reason (R) states its identity name. However, merely stating its name is not a mathematical proof/explanation of the identity itself.\nThus both (A) and (R) are true but (R) is not the correct explanation of (A).",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },

  // ==========================================
  // SECTION C: 10 NUMERICAL QUESTIONS (NUM)
  // ==========================================
  {
    type: "NUMERICAL",
    question: "If $\\vec{a} = 2\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$ and $\\vec{b} = 3\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}$, find the value of $\\vec{a} \\cdot \\vec{b}$.",
    correctAnswer: 0,
    explanation: "Compute the scalar product:\n$$\\vec{a} \\cdot \\vec{b} = (2)(3) + (3)(2) + (4)(-3) = 6 + 6 - 12 = 0$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $|\\vec{a}| = 2$, $|\\vec{b}| = 3$, and the angle between $\\vec{a}$ and $\\vec{b}$ is $\\frac{\\pi}{6}$, find the value of $|\\vec{a} \\times \\vec{b}|$.",
    correctAnswer: 3,
    explanation: "The magnitude of the cross product is:\n$$|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta = 2 \\times 3 \\times \\sin\\left(\\frac{\\pi}{6}\\right) = 6 \\times \\frac{1}{2} = 3$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $\\vec{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and $\\vec{b} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$, find the $z$-component of $\\vec{a} \\times \\vec{b}$.",
    correctAnswer: -5,
    explanation: "Compute the cross product:\n$$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 2 & 3 \\\\ 2 & -1 & 1 \\end{vmatrix} = \\mathbf{i}(2 - (-3)) - \\mathbf{j}(1 - 6) + \\mathbf{k}(-1 - 4) = 5\\mathbf{i} + 5\\mathbf{j} - 5\\mathbf{k}$$\nThe $z$-component is $-5$.\nWait, numerical answers are usually positive integers in JEE Mains.\nLet's ask for the magnitude squared or absolute value:\nFind the absolute value of the $z$-component of $\\vec{a} \\times \\vec{b}$. Then it is $5$!",
    correctAnswer: 5,
    explanation: "Compute the cross product:\n$$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 2 & 3 \\\\ 2 & -1 & 1 \\end{vmatrix} = 5\\mathbf{i} + 5\\mathbf{j} - 5\\mathbf{k}$$\nThe $z$-component is $-5$. Its absolute value is $|-5| = 5$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the area of the triangle formed by vectors $\\vec{a} = 2\\mathbf{i}$ and $\\vec{b} = 3\\mathbf{j}$ is $A$, find the value of $A$.",
    correctAnswer: 3,
    explanation: "The area of the triangle is:\n$$\\text{Area} = \\frac{1}{2}|\\vec{a} \\times \\vec{b}| = \\frac{1}{2}|2\\mathbf{i} \\times 3\\mathbf{j}| = \\frac{1}{2}|6\\mathbf{k}| = \\frac{1}{2}(6) = 3$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $[\\vec{a}, \\vec{b}, \\vec{c}] = 5$, find the value of $[\\vec{a} + \\vec{b}, \\vec{b} + \\vec{c}, \\vec{c} + \\vec{a}]$.",
    correctAnswer: 10,
    explanation: "We know that for any three vectors:\n$$[\\vec{a} + \\vec{b}, \\vec{b} + \\vec{c}, \\vec{c} + \\vec{a}] = 2[\\vec{a}, \\vec{b}, \\vec{c}]$$\nGiven $[\\vec{a}, \\vec{b}, \\vec{c}] = 5$:\n$$\\text{Value} = 2 \\times 5 = 10$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $\\vec{a} \\cdot \\vec{b} = 8$ and $|\\vec{a} \\times \\vec{b}| = 6$, find the value of $|\\vec{a}|^2 |\\vec{b}|^2$.",
    correctAnswer: 100,
    explanation: "By Lagrange's identity:\n$$|\\vec{a}|^2 |\\vec{b}|^2 = (\\vec{a} \\cdot \\vec{b})^2 + |\\vec{a} \\times \\vec{b}|^2 = 8^2 + 6^2 = 64 + 36 = 100$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $\\vec{a} = \\mathbf{i} - 2\\mathbf{j} + 3\\mathbf{k}$ and $\\vec{b} = 3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$, find the value of $|\\vec{a}|^2 + |\\vec{b}|^2 - 2(\\vec{a} \\cdot \\vec{b})$.",
    correctAnswer: 8,
    explanation: "This expression equals $|\\vec{a} - \\vec{b}|^2$:\n$$\\vec{a} - \\vec{b} = (1-3)\\mathbf{i} + (-2 - (-2))\\mathbf{j} + (3-1)\\mathbf{k} = -2\\mathbf{i} + 0\\mathbf{j} + 2\\mathbf{k}$$\nIts magnitude squared is:\n$$|\\vec{a} - \\vec{b}|^2 = (-2)^2 + 0^2 + 2^2 = 4 + 0 + 4 = 8$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If the volume of a parallelepiped with coterminous edges $\\vec{a} = 2\\mathbf{i} - 3\\mathbf{j}$, $\\vec{b} = \\mathbf{i} + \\mathbf{j} - \\mathbf{k}$, and $\\vec{c} = 3\\mathbf{i} - \\mathbf{k}$ is $V$, find the value of $V$.",
    correctAnswer: 4,
    explanation: "The volume is given by $|[\\vec{a}, \\vec{b}, \\vec{c}]|$:\n$$[\\vec{a}, \\vec{b}, \\vec{c}] = \\begin{vmatrix} 2 & -3 & 0 \\\\ 1 & 1 & -1 \\\\ 3 & 0 & -1 \\end{vmatrix}$$\nExpand along the first row:\n$$2(-1 - 0) - (-3)(-1 - (-3)) + 0 = 2(-1) + 3(2) = -2 + 6 = 4$$\nTherefore, the volume is $V = |4| = 4$.",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If $\\vec{a} = 3\\mathbf{i} + 2\\mathbf{j}$ and $\\vec{b} = 2\\mathbf{i} + 3\\mathbf{j}$, find the value of $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b})$.",
    correctAnswer: 0,
    explanation: "By dot product expansion:\n$$(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^2 - |\\vec{b}|^2$$\n$$|\\vec{a}|^2 = 3^2 + 2^2 = 9 + 4 = 13$$\n$$|\\vec{b}|^2 = 2^2 + 3^2 = 4 + 9 = 13$$\nTherefore:\n$$(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = 13 - 13 = 0$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    question: "If unit vectors $\\vec{a}$ and $\\vec{b}$ are perpendicular to each other, find the value of $|\\vec{a} \\times \\vec{b}|$.",
    correctAnswer: 1,
    explanation: "For perpendicular unit vectors, $\\theta = \\frac{\\pi}{2}$:\n$$|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\left(\\frac{\\pi}{2}\\right) = 1 \\times 1 \\times 1 = 1$$",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  }
];

// Adjust question text in Q4, Q13:
subtopic5Questions[3].question = "If $\\vec{u}, \\vec{v}, \\vec{w}$ are three non-coplanar vectors, then $\\frac{\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})}{(\\vec{w} \\times \\vec{v}) \\cdot \\vec{u}} + \\frac{\\vec{v} \\cdot (\\vec{w} \\times \\vec{u})}{(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}}$ is equal to:";
subtopic5Questions[12].question = "If $\\vec{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and $\\vec{b} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$, find the absolute value of the $z$-component of $\\vec{a} \\times \\vec{b}$.";

module.exports = subtopic5Questions;
