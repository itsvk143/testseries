// scripts/repaired_genuine_vectors.js
// Precise mathematical repairs for the 12 flawed genuine questions in Vectors

module.exports = {
  // Q1
  "6a98e962910bb37b0e5587e7": {
    options: ["$5$", "$-5$", "$7$", "$-7$"],
    correctAnswer: 2,
    explanation: "For $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 0\\mathbf{k}$ and $\\mathbf{b} = 3\\mathbf{i} - \\mathbf{j} + 0\\mathbf{k}$, the vector product is:\n$$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 2 & 0 \\\\ 3 & -1 & 0 \\end{vmatrix} = \\mathbf{k}(1(-1) - 2(3)) = -7\\mathbf{k}$$\nThe magnitude is $|\\mathbf{a} \\times \\mathbf{b}| = |-7\\mathbf{k}| = 7$."
  },

  // Q2
  "6a98e962910bb37b0e5587e9": {
    question: "Find the scalar triple product $[\\mathbf{a}, \\mathbf{b}, \\mathbf{c}] = (\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c}$ for $\\mathbf{a} = \\mathbf{i}, \\mathbf{b} = \\mathbf{j}$, and $\\mathbf{c} = \\mathbf{k}$.",
    options: ["$1$", "$-1$", "$0$", "$3$"],
    correctAnswer: 0,
    explanation: "First, compute the vector product $\\mathbf{a} \\times \\mathbf{b} = \\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$.\nThen compute the dot product with $\\mathbf{c}$:\n$$(\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c} = \\mathbf{k} \\cdot \\mathbf{k} = 1$$\nThus, the scalar triple product is $1$."
  },

  // Q3
  "6a98e962910bb37b0e5587ec": {
    options: [
      "$2\\mathbf{i} - 5\\mathbf{j} - 3\\mathbf{k}$",
      "$-2\\mathbf{i} - 5\\mathbf{j} + 3\\mathbf{k}$",
      "$2\\mathbf{i} + 5\\mathbf{j} - 3\\mathbf{k}$",
      "$2\\mathbf{i} - 5\\mathbf{j} + 3\\mathbf{k}$"
    ],
    correctAnswer: 0,
    explanation: "The cross product is computed as:\n$$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 1 & -1 \\\\ 2 & -1 & 3 \\end{vmatrix} = \\mathbf{i}(3 - 1) - \\mathbf{j}(3 - (-2)) + \\mathbf{k}(-1 - 2) = 2\\mathbf{i} - 5\\mathbf{j} - 3\\mathbf{k}$$"
  },

  // Q5
  "6a98e962910bb37b0e5587e5": {
    options: ["$-13$", "$13$", "$-11$", "$11$"],
    correctAnswer: 0,
    explanation: "The scalar product is calculated by summing the products of corresponding components:\n$$\\mathbf{a} \\cdot \\mathbf{b} = (2)(-1) + (-1)(5) + (3)(-2) = -2 - 5 - 6 = -13$$"
  },

  // Q6
  "6a98e962910bb37b0e5587ee": {
    options: ["$-1$", "$1$", "$-5$", "$3$"],
    correctAnswer: 0,
    explanation: "The scalar product is calculated by summing corresponding component products:\n$$\\mathbf{a} \\cdot \\mathbf{b} = (4)(1) + (-1)(3) + (2)(-1) = 4 - 3 - 2 = -1$$"
  },

  // Q9
  "6a98e989910bb37b0e558822": {
    question: "If the position vectors of points P and Q are $\\vec{p} = 6\\mathbf{i} - 2\\mathbf{j}$ and $\\vec{q} = -3\\mathbf{i} + 7\\mathbf{j}$, find the position vector of the point R which divides PQ internally in the ratio 1:2.",
    options: [
      "$3\\mathbf{i} + \\mathbf{j}$",
      "$3\\mathbf{i} - \\mathbf{j}$",
      "$3\\mathbf{i} + 2\\mathbf{j}$",
      "$3\\mathbf{i} - 2\\mathbf{j}$"
    ],
    correctAnswer: 0,
    explanation: "Using the section formula for internal division in ratio $1:2$:\n$$\\vec{r} = \\frac{1\\vec{q} + 2\\vec{p}}{1+2} = \\frac{(-3\\mathbf{i} + 7\\mathbf{j}) + 2(6\\mathbf{i} - 2\\mathbf{j})}{3} = \\frac{9\\mathbf{i} + 3\\mathbf{j}}{3} = 3\\mathbf{i} + \\mathbf{j}$$"
  },

  // Q10
  "6a98e989910bb37b0e55881f": {
    options: [
      "$-9\\mathbf{i} + 25\\mathbf{j}$",
      "$9\\mathbf{i} - 25\\mathbf{j}$",
      "$-9\\mathbf{i} - 25\\mathbf{j}$",
      "$9\\mathbf{i} + 25\\mathbf{j}$"
    ],
    correctAnswer: 0,
    explanation: "For external division in the ratio $m:n = 2:3$:\n$$\\vec{z} = \\frac{2\\vec{y} - 3\\vec{x}}{2-3} = \\frac{2(3\\mathbf{i} - 2\\mathbf{j}) - 3(-\\mathbf{i} + 7\\mathbf{j})}{-1} = \\frac{6\\mathbf{i} - 4\\mathbf{j} + 3\\mathbf{i} - 21\\mathbf{j}}{-1} = -9\\mathbf{i} + 25\\mathbf{j}$$"
  },

  // Q14
  "6a98e989910bb37b0e558821": {
    options: [
      "$-5\\mathbf{i} + 16\\mathbf{j} - 13\\mathbf{k}$",
      "$5\\mathbf{i} - 16\\mathbf{j} + 13\\mathbf{k}$",
      "$-5\\mathbf{i} - 16\\mathbf{j} - 13\\mathbf{k}$",
      "$5\\mathbf{i} + 16\\mathbf{j} - 13\\mathbf{k}$"
    ],
    correctAnswer: 0,
    explanation: "Using the section formula for external division in ratio $2:3$:\n$$\\vec{p} = \\frac{2\\vec{b} - 3\\vec{a}}{2-3} = \\frac{2(4\\mathbf{i} - 5\\mathbf{j} + 2\\mathbf{k}) - 3(\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k})}{-1} = \\frac{5\\mathbf{i} - 16\\mathbf{j} + 13\\mathbf{k}}{-1} = -5\\mathbf{i} + 16\\mathbf{j} - 13\\mathbf{k}$$"
  },

  // Q15
  "6a98e989910bb37b0e55881d": {
    options: [
      "$\\frac{7}{3}\\mathbf{i}$",
      "$\\frac{5}{3}\\mathbf{i} + \\frac{4}{3}\\mathbf{j}$",
      "$\\frac{7}{3}\\mathbf{i} + \\frac{4}{3}\\mathbf{j}$",
      "$\\frac{5}{3}\\mathbf{i}$"
    ],
    correctAnswer: 0,
    explanation: "Using the section formula for internal division in ratio $2:1$:\n$$\\vec{d} = \\frac{2\\vec{b} + 1\\vec{a}}{2+1} = \\frac{2(3\\mathbf{i} - \\mathbf{j}) + (\\mathbf{i} + 2\\mathbf{j})}{3} = \\frac{6\\mathbf{i} - 2\\mathbf{j} + \\mathbf{i} + 2\\mathbf{j}}{3} = \\frac{7}{3}\\mathbf{i}$$"
  },

  // Q16
  "6a98e989910bb37b0e55881a": {
    options: [
      "$-3\\mathbf{i} + \\mathbf{j}$",
      "$3\\mathbf{i} - \\mathbf{j}$",
      "$-3\\mathbf{i} - \\mathbf{j}$",
      "$3\\mathbf{i} + \\mathbf{j}$"
    ],
    correctAnswer: 0,
    explanation: "For external division in the ratio $3:1$:\n$$\\vec{r} = \\frac{3\\vec{q} - 1\\vec{p}}{3-1} = \\frac{3(-\\mathbf{i} + 2\\mathbf{j}) - (3\\mathbf{i} + 4\\mathbf{j})}{2} = \\frac{-6\\mathbf{i} + 2\\mathbf{j}}{2} = -3\\mathbf{i} + \\mathbf{j}$$"
  },

  // Q17
  "6a98e989910bb37b0e558819": {
    options: [
      "$\\frac{1}{3}(3\\mathbf{i} - \\mathbf{j})$",
      "$\\frac{1}{3}(5\\mathbf{i} - 8\\mathbf{j} + 3\\mathbf{k})$",
      "$\\frac{1}{3}(-3\\mathbf{i} + 8\\mathbf{j} - 3\\mathbf{k})$",
      "$\\frac{1}{3}(4\\mathbf{i} - \\mathbf{j} - \\mathbf{k})$"
    ],
    correctAnswer: 0,
    explanation: "Using the section formula for internal division in ratio $1:2$:\n$$\\vec{p} = \\frac{1\\vec{b} + 2\\vec{a}}{1+2} = \\frac{(-\\mathbf{i} + 5\\mathbf{j} - 2\\mathbf{k}) + 2(2\\mathbf{i} - 3\\mathbf{j} + \\mathbf{k})}{3} = \\frac{-\\mathbf{i} + 5\\mathbf{j} - 2\\mathbf{k} + 4\\mathbf{i} - 6\\mathbf{j} + 2\\mathbf{k}}{3} = \\frac{1}{3}(3\\mathbf{i} - \\mathbf{j})$$"
  },

  // Q20
  "6a98e962910bb37b0e5587eb": {
    options: [
      "It is distributive over addition: $\\mathbf{a} \\times (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\times \\mathbf{b} + \\mathbf{a} \\times \\mathbf{c}$",
      "It is commutative: $\\mathbf{a} \\times \\mathbf{b} = \\mathbf{b} \\times \\mathbf{a}$",
      "It is anti-commutative: $\\mathbf{a} \\times \\mathbf{b} = -(\\mathbf{b} \\times \\mathbf{a})$",
      "It is perpendicular to both $\\mathbf{a}$ and $\\mathbf{b}$"
    ],
    correctAnswer: 1,
    explanation: "The cross product is anti-commutative, meaning $\\mathbf{a} \\times \\mathbf{b} = -(\\mathbf{b} \\times \\mathbf{a})$. It is NOT commutative. Hence, 'It is commutative' is the false statement."
  }
};
