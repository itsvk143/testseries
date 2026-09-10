// scripts/repaired_genuine_sets.js
// 51 Repaired genuine Sets, Relations, and Functions questions with verified keys and solutions

const repairedGenuineSets = [
  {
    "_id": "6a730cb0f7359dca2598ae66",
    "question": "If $A$ and $B$ are two finite sets such that $n(A) = 17$, $n(B) = 23$, and $n(A \\cup B) = 38$, find $n(A \\cap B)$.",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "By the Principle of Inclusion-Exclusion for two finite sets:\n$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$\nSubstituting the given values:\n$$38 = 17 + 23 - n(A \\cap B)$$\n$$38 = 40 - n(A \\cap B) \\implies n(A \\cap B) = 40 - 38 = 2.$$\nHence, the correct option is (B).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d477",
    "question": "If a finite set $A$ contains exactly $5$ elements, how many elements are contained in its power set $P(A)$?",
    "options": [
      "$25$",
      "$32$",
      "$10$",
      "$16$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "The power set $P(A)$ of a set $A$ is the collection of all subsets of $A$. If a set has $n$ elements, the total number of subsets is $2^n$. Here $n = 5$, so:\n$$n(P(A)) = 2^5 = 32.$$\nHence, the correct option is (B).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d478",
    "question": "Let $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$. Which of the following sets is $A \\cup B$?",
    "options": [
      "$\\{1, 2, 3, 4, 5\\}$",
      "$\\{3\\}$",
      "$\\{1, 2, 4, 5\\}$",
      "$\\{1, 2, 3, 3, 4, 5\\}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The union of two sets $A$ and $B$, denoted $A \\cup B$, is the set of all elements that belong to $A$, or to $B$, or to both. By definition of a set, duplicate elements are not repeated. Therefore:\n$$A \\cup B = \\{1, 2, 3, 4, 5\\}.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d479",
    "question": "If the universal set is $U = \\{1, 2, 3, 4, 5, 6\\}$ and $A = \\{2, 4, 6\\}$, which of the following represents the complement $A'$ (or $A^c$) with respect to $U$?",
    "options": [
      "$\\{1, 3, 5\\}$",
      "$\\{2, 4, 6\\}$",
      "$\\{1, 2, 3, 4, 5, 6\\}$",
      "$\\emptyset$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The complement of a set $A$ with respect to a universal set $U$ is defined as $A' = U \\setminus A = \\{x \\in U : x \\notin A\\}$.\nHere $U = \\{1, 2, 3, 4, 5, 6\\}$ and $A = \\{2, 4, 6\\}$, so:\n$$A' = \\{1, 3, 5\\}.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d47a",
    "question": "In a class of $50$ students, $30$ like Mathematics and $25$ like Science. If $10$ students like both subjects, how many students like neither Mathematics nor Science?",
    "options": [
      "$5$",
      "$10$",
      "$15$",
      "$20$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Let $M$ be the set of students who like Mathematics and $S$ be the set of students who like Science. We are given:\n$$n(U) = 50, \\quad n(M) = 30, \\quad n(S) = 25, \\quad n(M \\cap S) = 10.$$\nThe number of students who like at least one of the two subjects is:\n$$n(M \\cup S) = n(M) + n(S) - n(M \\cap S) = 30 + 25 - 10 = 45.$$\nThe number of students who like neither subject is:\n$$n((M \\cup S)') = n(U) - n(M \\cup S) = 50 - 45 = 5.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d47b",
    "question": "Let $X = \\{a, b, c\\}$. How many proper subsets does $X$ have?",
    "options": [
      "$7$",
      "$8$",
      "$6$",
      "$3$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "A proper subset of a set $X$ is any subset of $X$ that is not equal to $X$ itself. A set with $n$ elements has $2^n$ total subsets. Here $n = 3$, so the total number of subsets is $2^3 = 8$. Subtracting the set $X$ itself gives:\n$$\\text{Number of proper subsets} = 2^3 - 1 = 8 - 1 = 7.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d47c",
    "question": "If $A \\subseteq B$ and $B \\subseteq A$, which of the following statements must be true about the sets $A$ and $B$?",
    "options": [
      "$A$ is a proper subset of $B$",
      "$B$ is a proper subset of $A$",
      "$A$ and $B$ are disjoint",
      "$A = B$"
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "single_choice",
    "solution": "By the axiom of extensionality in set theory, two sets are equal if and only if they contain the exact same elements. The condition $A \\subseteq B$ means every element of $A$ belongs to $B$, and $B \\subseteq A$ means every element of $B$ belongs to $A$. Combining both conditions establishes that $A = B$.\nHence, the correct option is (D).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d47d",
    "question": "Consider a Venn diagram with two sets, $A$ and $B$. The region representing the intersection $A \\cap B$ contains all elements that are:",
    "options": [
      "Only in $A$",
      "Only in $B$",
      "In both $A$ and $B$",
      "In neither $A$ nor $B$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "By definition, the intersection $A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$. In a Venn diagram, this is depicted by the overlapping region common to the circles representing $A$ and $B$.\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d47e",
    "question": "Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$. What is the relative complement (set difference) $A \\setminus B$?",
    "options": [
      "$\\{1, 2\\}$",
      "$\\{5, 6\\}$",
      "$\\{1, 2, 3, 4, 5, 6\\}$",
      "$\\{3, 4\\}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The set difference $A \\setminus B$ (or $A - B$) consists of all elements that belong to $A$ but do not belong to $B$:\n$$A \\setminus B = \\{x \\in A : x \\notin B\\}.$$\nSince $3$ and $4$ are in $B$, removing them from $A$ gives $\\{1, 2\\}$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d47f",
    "question": "If the cardinality of set $A$ is $15$, the cardinality of set $B$ is $10$, and $n(A \\cup B) = 20$, what is $n(A \\cap B)$?",
    "options": [
      "$5$",
      "$15$",
      "$25$",
      "$30$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Using the cardinality formula for two finite sets:\n$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$\nSubstituting $n(A) = 15$, $n(B) = 10$, and $n(A \\cup B) = 20$:\n$$20 = 15 + 10 - n(A \\cap B)$$\n$$20 = 25 - n(A \\cap B) \\implies n(A \\cap B) = 25 - 20 = 5.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae4b89acd4c6047d480",
    "question": "Let $S$ be a non-empty set. Which of the following is NOT a subset of $S$?",
    "options": [
      "$S$ itself",
      "The empty set $\\emptyset$",
      "A set containing an element not in $S$",
      "Any singleton set $\\{x\\}$ where $x \\in S$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "By definition, a set $A$ is a subset of $S$ ($A \\subseteq S$) if every element of $A$ is also an element of $S$. If a set contains an element that does not belong to $S$, it cannot be a subset of $S$. Both $S$ itself and the empty set $\\emptyset$ are always subsets of $S$.\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sets, subsets, power set, and Venn diagrams"
  },
  {
    "_id": "6a98fae7b89acd4c6047d48b",
    "question": "Given sets $A = \\{1, 2, 3, 4, 5\\}$ and $B = \\{4, 5, 6, 7, 8\\}$, find the union $A \\cup B$.",
    "options": [
      "$\\{1, 2, 3, 4, 5, 6, 7, 8\\}$",
      "$\\{4, 5\\}$",
      "$\\{1, 2, 3\\}$",
      "$\\{6, 7, 8\\}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The union $A \\cup B$ contains all distinct elements present in set $A$, set $B$, or both. Combining the elements without repetition:\n$$A \\cup B = \\{1, 2, 3, 4, 5, 6, 7, 8\\}.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae7b89acd4c6047d48c",
    "question": "Let set $P = \\{a, b, c, d\\}$ and set $Q = \\{c, d, e, f\\}$. What is the intersection $P \\cap Q$?",
    "options": [
      "$\\{a, b, c, d, e, f\\}$",
      "$\\{c, d\\}$",
      "$\\{a, b\\}$",
      "$\\{e, f\\}$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "The intersection $P \\cap Q$ consists of all elements that are common to both $P$ and $Q$. The elements common to both sets are $c$ and $d$. Thus, $P \\cap Q = \\{c, d\\}$.\nHence, the correct option is (B).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae7b89acd4c6047d48d",
    "question": "If set $X = \\{10, 20, 30, 40, 50\\}$ and set $Y = \\{30, 40, 50, 60, 70\\}$, find the set difference $X \\setminus Y$.",
    "options": [
      "$\\{10, 20, 30, 40, 50, 60, 70\\}$",
      "$\\{30, 40, 50\\}$",
      "$\\{10, 20\\}$",
      "$\\{60, 70\\}$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "The set difference $X \\setminus Y$ is the set of elements that belong to $X$ but not to $Y$. Removing the shared elements $\\{30, 40, 50\\}$ from $X$ leaves $\\{10, 20\\}$.\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae7b89acd4c6047d48e",
    "question": "Consider the universal set $U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$ and set $M = \\{2, 4, 6, 8\\}$. Find the complement $M'$ with respect to $U$.",
    "options": [
      "$\\{2, 4, 6, 8\\}$",
      "$\\{1, 3, 5, 7, 9\\}$",
      "$\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$",
      "$\\{1, 3, 5, 7, 9, 10\\}$"
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "single_choice",
    "solution": "The complement $M'$ consists of all elements in $U$ that are not in $M$:\n$$M' = U \\setminus M = \\{1, 3, 5, 7, 9, 10\\}.$$\nNotice that $10$ is in $U$ and not in $M$, so it belongs to $M'$.\nHence, the correct option is (D).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae7b89acd4c6047d48f",
    "question": "Let set $S = \\{\\text{apple}, \\text{banana}, \\text{cherry}\\}$ and set $T = \\{\\text{banana}, \\text{date}, \\text{fig}\\}$. What is $S \\cup T$?",
    "options": [
      "$\\{\\text{apple}, \\text{banana}, \\text{cherry}, \\text{date}, \\text{fig}\\}$",
      "$\\{\\text{banana}\\}$",
      "$\\{\\text{apple}, \\text{cherry}\\}$",
      "$\\{\\text{date}, \\text{fig}\\}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The union $S \\cup T$ gathers every distinct element that belongs to $S$ or $T$. The common element 'banana' appears only once in the union:\n$$S \\cup T = \\{\\text{apple}, \\text{banana}, \\text{cherry}, \\text{date}, \\text{fig}\\}.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae7b89acd4c6047d490",
    "question": "Given set $V = \\{1, 3, 5, 7\\}$ and set $W = \\{3, 5, 7, 9\\}$. Find $V \\cap W$.",
    "options": [
      "$\\{1, 3, 5, 7, 9\\}$",
      "$\\{3, 5, 7\\}$",
      "$\\{1\\}$",
      "$\\{9\\}$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "The intersection $V \\cap W$ comprises all elements present in both $V$ and $W$. The common elements are $3, 5,$ and $7$. Hence:\n$$V \\cap W = \\{3, 5, 7\\}.$$\nHence, the correct option is (B).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae7b89acd4c6047d491",
    "question": "If set $E = \\{x \\in \\mathbb{N} : x \\le 10 \\text{ and } x \\text{ is even}\\}$ and set $F = \\{x \\in \\mathbb{N} : x \\le 10 \\text{ and } x \\text{ is a multiple of } 3\\}$, find $E \\setminus F$.",
    "options": [
      "$\\{2, 4, 6, 8, 10\\}$",
      "$\\{3, 6, 9\\}$",
      "$\\{2, 4, 8, 10\\}$",
      "$\\{1, 2, 3, 4, 5, 7, 8, 10\\}$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "In roster form:\n$$E = \\{2, 4, 6, 8, 10\\}$$\n$$F = \\{3, 6, 9\\}$$\nThe set difference $E \\setminus F$ removes all elements of $F$ from $E$. The only common element is $6$. Therefore:\n$$E \\setminus F = \\{2, 4, 8, 10\\}.$$\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae7b89acd4c6047d492",
    "question": "Let the universal set $U = \\{1, 2, 3, \\dots, 20\\}$ and let $G$ be the set of prime numbers less than $10$. Find the complement $G' = U \\setminus G$.",
    "options": [
      "$\\{2, 3, 5, 7\\}$",
      "$\\{1, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20\\}$",
      "$\\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}$",
      "$\\{1, 3, 5, 7, 9, 11, 13, 15, 17, 19\\}$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "The prime numbers less than $10$ are $G = \\{2, 3, 5, 7\\}$. The complement $G'$ contains all elements of $U = \\{1, 2, \\dots, 20\\}$ except $2, 3, 5,$ and $7$. Thus:\n$$G' = \\{1, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20\\}.$$\nHence, the correct option is (B).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae7b89acd4c6047d493",
    "question": "If $A = \\left\\{\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}\\right\\}$ and $B = \\left\\{\\frac{1}{3}, \\frac{1}{4}, \\frac{1}{5}\\right\\}$, what is $A \\cup B$?",
    "options": [
      "$\\left\\{\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\frac{1}{5}\\right\\}$",
      "$\\left\\{\\frac{1}{3}, \\frac{1}{4}\\right\\}$",
      "$\\left\\{\\frac{1}{2}\\right\\}$",
      "$\\left\\{\\frac{1}{5}\\right\\}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The union $A \\cup B$ is formed by taking every distinct element from both sets $A$ and $B$:\n$$A \\cup B = \\left\\{\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\frac{1}{5}\\right\\}.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae7b89acd4c6047d494",
    "question": "Let $U = \\{1, 2, 3, \\dots, 100\\}$ and $P = \\{n \\in U : n \\text{ is a multiple of } 5\\}$. What is the complement $P'$?",
    "options": [
      "$\\{5, 10, 15, \\dots, 100\\}$",
      "$\\{1, 2, 3, 4, 6, \\dots, 99\\}$",
      "$\\{n \\in U : n \\text{ is not a multiple of } 5\\}$",
      "$\\{10, 20, 30, \\dots, 100\\}$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "The complement $P' = U \\setminus P$ consists of all integers in $U$ that are not divisible by $5$, which is described by $\\{n \\in U : n \\text{ is not a multiple of } 5\\}$.\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d495",
    "question": "Let $A = \\{1, 2, 3\\}$. Which of the following relations $R$ on $A$ is an equivalence relation?",
    "options": [
      "$R = \\{(1, 1), (2, 2), (1, 2), (2, 1)\\}$",
      "$R = \\{(1, 1), (2, 2), (3, 3)\\}$",
      "$R = \\{(1, 1), (2, 2), (3, 3), (1, 2)\\}$",
      "$R = \\{(1, 2), (2, 1)\\}$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "An equivalence relation on $A$ must be reflexive, symmetric, and transitive.\n- The relation $R = \\{(1, 1), (2, 2), (3, 3)\\}$ contains $(a, a)$ for all $a \\in A$ (reflexive), if $(a, b) \\in R$ then $(b, a) \\in R$ holds trivially (symmetric), and $(a, b) \\in R, (b, c) \\in R \\implies (a, c) \\in R$ holds trivially (transitive). This is the identity relation, which is always an equivalence relation.\n- In (A), $(3, 3) \\notin R$, so it is not reflexive.\n- In (C), $(1, 2) \\in R$ but $(2, 1) \\notin R$, so it is not symmetric.\n- In (D), reflexive pairs are missing.\nHence, the correct option is (B).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d496",
    "question": "Consider the relation $R$ on the set of integers $\\mathbb{Z}$ defined by $x R y \\iff (x - y)$ is divisible by $5$. Which property does $R$ NOT satisfy?",
    "options": [
      "Reflexive",
      "Symmetric",
      "Transitive",
      "None of the above (it satisfies all three)"
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "single_choice",
    "solution": "Let us check each property of $R$:\n1. Reflexive: For any $x \\in \\mathbb{Z}$, $x - x = 0 = 5 \\times 0$, which is divisible by $5$. So $(x, x) \\in R$.\n2. Symmetric: If $x R y$, then $x - y = 5k$ for some $k \\in \\mathbb{Z}$. Then $y - x = -5k = 5(-k)$, which is also divisible by $5$. So $y R x$.\n3. Transitive: If $x R y$ and $y R z$, then $x - y = 5k$ and $y - z = 5m$. Adding them gives $x - z = 5(k + m)$, so $x R z$.\nSince $R$ satisfies all three properties, it is an equivalence relation and does not fail any of them.\nHence, the correct option is (D).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d497",
    "question": "Let $A = \\{a, b, c\\}$. Which of the following relations $R$ on $A$ is an equivalence relation?",
    "options": [
      "$R = \\{(a, a), (b, b), (c, c), (a, b), (b, a)\\}$",
      "$R = \\{(a, a), (b, b), (c, c), (a, b)\\}$",
      "$R = \\{(a, a), (b, b), (a, c)\\}$",
      "$R = \\{(a, a), (b, b), (c, c), (a, b), (b, c)\\}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "An equivalence relation must be reflexive, symmetric, and transitive:\n- In (A), $R$ contains $(a, a), (b, b), (c, c)$, so it is reflexive. It contains $(a, b)$ and $(b, a)$, so it is symmetric. The composite pairs $(a, b)$ and $(b, a)$ require $(a, a) \\in R$ and $(b, b) \\in R$, which are both present, so it is transitive. Thus, $R$ is an equivalence relation.\n- In (B), $(a, b) \\in R$ but $(b, a) \\notin R$ (not symmetric).\n- In (C), $(c, c) \\notin R$ (not reflexive).\n- In (D), $(a, b), (b, c) \\in R$ would require $(a, c) \\in R$, which is absent (not transitive).\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d498",
    "question": "Which of the following relations on the set $A = \\{1, 2, 3, 4\\}$ is NOT transitive?",
    "options": [
      "$R_1 = \\{(1, 1), (2, 2), (3, 3), (4, 4)\\}$",
      "$R_2 = \\{(1, 2), (1, 3)\\}$",
      "$R_3 = \\{(1, 2), (2, 3)\\}$",
      "$R_4 = \\{(1, 1), (2, 2), (1, 2)\\}$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "A relation $R$ is transitive if whenever $(x, y) \\in R$ and $(y, z) \\in R$, then $(x, z) \\in R$.\n- For $R_3 = \\{(1, 2), (2, 3)\\}$, we have $(1, 2) \\in R_3$ and $(2, 3) \\in R_3$, but $(1, 3) \\notin R_3$. Therefore, $R_3$ is NOT transitive.\n- $R_1$ is the identity relation (transitive).\n- $R_2$ has no pair of the form $(a, b)$ and $(b, c)$ with $b$ as second and first element, so it is vacuously transitive.\n- $R_4$ is easily verified to be transitive.\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d499",
    "question": "Let $A = \\{1, 2, 3, 4\\}$ and let $R$ be a relation on $A$ defined by $R = \\{(x, y) \\in A \\times A : x \\le y\\}$. Which of the following describes $R$?",
    "options": [
      "Reflexive and Symmetric",
      "Symmetric and Transitive",
      "Reflexive and Transitive",
      "Reflexive, Symmetric, and Transitive"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "1. Reflexive: For every $x \\in A$, $x \\le x$ is true, so $(x, x) \\in R$.\n2. Transitive: If $x \\le y$ and $y \\le z$, then $x \\le z$, so $(x, y) \\in R$ and $(y, z) \\in R \\implies (x, z) \\in R$.\n3. Symmetric: If $x < y$, then $(x, y) \\in R$ but $(y, x) \\notin R$ since $y \\not\\le x$ (e.g., $1 \\le 2$ but $2 \\not\\le 1$).\nThus, $R$ is reflexive and transitive, but not symmetric.\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d49a",
    "question": "Consider the relation $R$ on $\\mathbb{R}$ defined by $x R y \\iff x^2 = y^2$. Is $R$ an equivalence relation?",
    "options": [
      "Yes, it is reflexive, symmetric, and transitive.",
      "No, it is not reflexive.",
      "No, it is not symmetric.",
      "No, it is not transitive."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Let us check each property on $\\mathbb{R}$:\n1. Reflexive: For any $x \\in \\mathbb{R}$, $x^2 = x^2$, so $x R x$.\n2. Symmetric: If $x R y$, then $x^2 = y^2 \\implies y^2 = x^2 \\implies y R x$.\n3. Transitive: If $x R y$ and $y R z$, then $x^2 = y^2$ and $y^2 = z^2 \\implies x^2 = z^2 \\implies x R z$.\nSince $R$ is reflexive, symmetric, and transitive, it is an equivalence relation.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d49b",
    "question": "Let $A = \\{1, 2, 3\\}$. Which of the following relations is symmetric but NOT reflexive?",
    "options": [
      "$R = \\{(1, 1), (2, 2), (3, 3)\\}$",
      "$R = \\{(1, 2), (2, 1), (3, 3)\\}$",
      "$R = \\{(1, 2), (2, 1)\\}$",
      "$R = \\{(1, 1), (1, 2), (2, 1)\\}$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "A relation is symmetric if $(x, y) \\in R \\implies (y, x) \\in R$. It is reflexive if $(x, x) \\in R$ for all $x \\in A$.\nIn $R = \\{(1, 2), (2, 1)\\}$, $(1, 2) \\in R \\implies (2, 1) \\in R$, so it is symmetric. However, $(1, 1) \\notin R$, $(2, 2) \\notin R$, and $(3, 3) \\notin R$, so it is not reflexive.\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d49c",
    "question": "Let $R$ be a relation on a non-empty set $A$. If $R$ is symmetric and transitive, does it necessarily follow that $R$ must be reflexive on $A$?",
    "options": [
      "Yes, always.",
      "No, because if an element $a \\in A$ is not related to any element in $A$, then $(a, a) \\notin R$.",
      "No, for example, the empty relation $R = \\emptyset$ on $A = \\{1, 2, 3\\}$ is symmetric and transitive, but not reflexive.",
      "Both (B) and (C) are valid reasons."
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "single_choice",
    "solution": "A common fallacy argues that if $(a, b) \\in R$, then by symmetry $(b, a) \\in R$, and by transitivity $(a, a) \\in R$. However, this argument requires that there exists some $b$ such that $(a, b) \\in R$. If an element $a \\in A$ is related to no element (for instance, in the empty relation $R = \\emptyset$ on $A = \\{1, 2, 3\\}$), then $(a, a) \\notin R$, violating reflexivity. Therefore, symmetry and transitivity do not imply reflexivity.\nHence, the correct option is (D).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d49d",
    "question": "Which of the following sets of ordered pairs represents a well-defined function from $A = \\{1, 2, 3\\}$ to $B = \\{a, b, c\\}$?",
    "options": [
      "$\\{(1, a), (2, b), (3, c)\\}$",
      "$\\{(1, a), (1, b), (2, c)\\}$",
      "$\\{(1, a), (2, b)\\}$",
      "$\\{(1, a), (2, b), (3, c), (1, c)\\}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "A relation $f \\subseteq A \\times B$ defines a function $f: A \\to B$ if and only if each element $x \\in A$ appears as the first coordinate in exactly one ordered pair.\n- In $\\{(1, a), (2, b), (3, c)\\}$, every element of $A = \\{1, 2, 3\\}$ appears exactly once as the first component.\n- In (B) and (D), $1$ is mapped to multiple elements ($a$ and $b$), violating single-valuedness.\n- In (C), element $3$ has no assigned image, so the domain is not all of $A$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98fae8b89acd4c6047d49e",
    "question": "Let $A = \\{1, 2, 3, 4\\}$ and $R$ be the relation 'is a divisor of' on $A$ (i.e., $a R b \\iff a \\mid b$). Which property does $R$ NOT satisfy?",
    "options": [
      "Reflexive",
      "Symmetric",
      "Transitive",
      "None of the above"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "1. Reflexive: For any $a \\in A$, $a \\mid a$ is true, so $(a, a) \\in R$.\n2. Transitive: If $a \\mid b$ and $b \\mid c$, then $a \\mid c$, so $R$ is transitive.\n3. Symmetric: We have $1 \\mid 2$, so $(1, 2) \\in R$, but $2 \\nmid 1$, so $(2, 1) \\notin R$. Hence, $R$ is NOT symmetric.\nHence, the correct option is (B).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "_id": "6a98faeab89acd4c6047d49f",
    "question": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = 2x + 3$. Which of the following best describes $f$?",
    "options": [
      "Neither one-one nor onto",
      "One-one but not onto",
      "Onto but not one-one",
      "Both one-one and onto (bijective)"
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "single_choice",
    "solution": "1. One-one (Injective): Let $f(x_1) = f(x_2)$. Then $2x_1 + 3 = 2x_2 + 3 \\implies 2x_1 = 2x_2 \\implies x_1 = x_2$. Thus, $f$ is one-one.\n2. Onto (Surjective): For any $y \\in \\mathbb{R}$ in the codomain, choose $x = \\frac{y - 3}{2} \\in \\mathbb{R}$. Then $f(x) = 2\\left(\\frac{y - 3}{2}\\right) + 3 = y - 3 + 3 = y$. Thus, every element of the codomain has a pre-image, so $f$ is onto.\nSince $f$ is both one-one and onto, it is bijective.\nHence, the correct option is (D).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98faeab89acd4c6047d4a0",
    "question": "Consider the function $g: \\mathbb{N} \\to \\mathbb{N}$ defined by $g(n) = n^2$. Which of the following statements is true regarding $g$?",
    "options": [
      "$g$ is neither one-one nor onto",
      "$g$ is one-one but not onto",
      "$g$ is onto but not one-one",
      "$g$ is both one-one and onto"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "1. One-one: For $n_1, n_2 \\in \\mathbb{N}$, if $g(n_1) = g(n_2)$, then $n_1^2 = n_2^2$. Since $n_1, n_2 > 0$, this implies $n_1 = n_2$. Thus, $g$ is one-one.\n2. Onto: The codomain is $\\mathbb{N}$. The range of $g$ consists of perfect squares: $\\{1, 4, 9, 16, \\dots\\}$. Numbers like $2, 3, 5 \\in \\mathbb{N}$ have no pre-image in $\\mathbb{N}$. Thus, $g$ is not onto.\nTherefore, $g$ is one-one but not onto.\nHence, the correct option is (B).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98faeab89acd4c6047d4a1",
    "question": "Let $f(x) = x^3$ and $g(x) = x + 1$ be functions from $\\mathbb{R}$ to $\\mathbb{R}$. Find the composite function $(g \\circ f)(x)$.",
    "options": [
      "$x^3 + 1$",
      "$(x + 1)^3$",
      "$x^3(x + 1)$",
      "$x^4 + x^3$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "By definition of function composition:\n$$(g \\circ f)(x) = g(f(x)).$$\nSubstituting $f(x) = x^3$ into $g$:\n$$g(x^3) = x^3 + 1.$$\nHence, $(g \\circ f)(x) = x^3 + 1$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98faeab89acd4c6047d4a2",
    "question": "If $f(x) = 3x - 2$ and $g(x) = \\frac{x + 2}{3}$ for all $x \\in \\mathbb{R}$, what is $(f \\circ g)(x)$?",
    "options": [
      "$x$",
      "$3x$",
      "$x + 2$",
      "$3x - 2$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Evaluating the composite function:\n$$(f \\circ g)(x) = f(g(x)) = f\\left(\\frac{x + 2}{3}\\right).$$\nApplying the definition of $f$:\n$$f\\left(\\frac{x + 2}{3}\\right) = 3\\left(\\frac{x + 2}{3}\\right) - 2 = (x + 2) - 2 = x.$$\nThus, $(f \\circ g)(x) = x$ (the identity function), which confirms that $g = f^{-1}$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98faeab89acd4c6047d4a3",
    "question": "Which of the following functions from $\\mathbb{R}$ to $\\mathbb{R}$ is invertible?",
    "options": [
      "$f(x) = x^2$",
      "$g(x) = |x|$",
      "$h(x) = 2x + 1$",
      "$k(x) = x^2 + 1$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "A function $f: \\mathbb{R} \\to \\mathbb{R}$ is invertible if and only if it is bijective (both one-one and onto).\n- For $h(x) = 2x + 1$, $h'(x) = 2 > 0$, so $h$ is strictly increasing (one-one). Its range is $(-\\infty, \\infty) = \\mathbb{R}$ (onto). Thus $h$ is bijective and has an inverse $h^{-1}(x) = \\frac{x - 1}{2}$.\n- $f(x) = x^2$, $g(x) = |x|$, and $k(x) = x^2 + 1$ are even functions on $\\mathbb{R}$, so they are neither one-one nor onto $\\mathbb{R}$.\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98faeab89acd4c6047d4a4",
    "question": "Let $f(x) = 4x$ and $g(x) = x - 5$ for all $x \\in \\mathbb{R}$. Find the value of the composite function $(g \\circ f)(x)$.",
    "options": [
      "$4x - 5$",
      "$4(x - 5)$",
      "$4x - 20$",
      "$x - 1$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "By definition of composite functions:\n$$(g \\circ f)(x) = g(f(x)) = g(4x) = 4x - 5.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98faeab89acd4c6047d4a5",
    "question": "Consider the function $f: \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(x) = 2x$. Which of the following is true about $f$?",
    "options": [
      "One-one only",
      "Onto only",
      "Both one-one and onto",
      "Neither one-one nor onto"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "1. One-one: Let $f(x_1) = f(x_2)$ for $x_1, x_2 \\in \\mathbb{Z}$. Then $2x_1 = 2x_2 \\implies x_1 = x_2$. So $f$ is one-one.\n2. Onto: The codomain is $\\mathbb{Z}$. For any odd integer $y \\in \\mathbb{Z}$ (e.g., $y = 3$), there is no integer $x$ such that $2x = 3$. Hence, the range is strictly the set of even integers, so $f$ is not onto.\nTherefore, $f$ is one-one only.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98faeab89acd4c6047d4a6",
    "question": "Let $f(x) = x^2 + 1$ and $g(x) = 2x$ be functions from $\\mathbb{R}$ to $\\mathbb{R}$. Find the expression for $(f \\circ g)(x)$.",
    "options": [
      "$(2x)^2 + 1$",
      "$2(x^2 + 1)$",
      "$4x^2 + 1$",
      "$2x^3 + 2x$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "By definition of composite functions:\n$$(f \\circ g)(x) = f(g(x)) = f(2x) = (2x)^2 + 1 = 4x^2 + 1.$$\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98faeab89acd4c6047d4a7",
    "question": "If $f: \\mathbb{R} \\setminus \\{0\\} \\to \\mathbb{R} \\setminus \\{0\\}$ is defined by $f(x) = \\frac{1}{x}$, then its inverse $f^{-1}(x)$ is:",
    "options": [
      "$x$",
      "$\\frac{1}{x}$",
      "$-x$",
      "$1 - x$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "Let $y = f(x) = \\frac{1}{x}$. Solving for $x$ in terms of $y$:\n$$x = \\frac{1}{y}.$$\nInterchanging variables gives:\n$$f^{-1}(x) = \\frac{1}{x}.$$\nThe function is its own inverse (an involution).\nHence, the correct option is (B).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98faeab89acd4c6047d4a8",
    "question": "Which condition must a function $f: A \\to B$ satisfy in order to possess a well-defined inverse function $f^{-1}: B \\to A$?",
    "options": [
      "It must be onto only.",
      "It must be one-one only.",
      "It must be both one-one and onto (bijective).",
      "It must be continuous."
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "A function $f: A \\to B$ possesses a two-sided inverse $f^{-1}: B \\to A$ if and only if $f$ is bijective, which means it is both injective (one-one) and surjective (onto). Injectivity guarantees that each element in $B$ has at most one pre-image, and surjectivity guarantees that each element in $B$ has at least one pre-image.\nHence, the correct option is (C).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4b4",
    "question": "Let the function $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = 2x - 3$. What is the range of $f$?",
    "options": [
      "All real numbers ($\\mathbb{R}$)",
      "All positive real numbers",
      "All negative real numbers",
      "All integers"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The function $f(x) = 2x - 3$ is a linear polynomial with non-zero slope $m = 2$. For any real number $y \\in \\mathbb{R}$, setting $y = 2x - 3$ yields $x = \\frac{y + 3}{2} \\in \\mathbb{R}$. Since every real value $y$ is attained, the range of $f$ is $\\mathbb{R}$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4b5",
    "question": "Consider the real function $g(x) = \\sqrt{x - 4}$. What is the maximal real domain of $g$?",
    "options": [
      "$[4, \\infty)$",
      "$(-\\infty, 4]$",
      "$(4, \\infty)$",
      "All real numbers"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $g(x) = \\sqrt{x - 4}$ to yield real values, the radicand under the square root must be non-negative:\n$$x - 4 \\ge 0 \\implies x \\ge 4.$$\nIn interval notation, the domain is $[4, \\infty)$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4b6",
    "question": "If $h(x) = \\frac{1}{x - 5}$, what is the domain of $h$ in $\\mathbb{R}$?",
    "options": [
      "All real numbers except $x = 5$",
      "All real numbers except $x = -5$",
      "All real numbers",
      "$x > 5$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The rational function $h(x) = \\frac{1}{x - 5}$ is defined for all real numbers where the denominator is non-zero:\n$$x - 5 \\neq 0 \\implies x \\neq 5.$$\nThus, the domain is $\\mathbb{R} \\setminus \\{5\\}$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4b7",
    "question": "Let $f(x) = x^2$. What is the range of this function if its domain is the closed interval $[-2, 3]$?",
    "options": [
      "$[0, 9]$",
      "$[-4, 9]$",
      "$[0, 3]$",
      "$[-2, 3]$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $x \\in [-2, 3]$:\n- Since $0 \\in [-2, 3]$, the minimum value of $f(x) = x^2$ occurs at $x = 0$, giving $f(0) = 0$.\n- The endpoints yield $f(-2) = (-2)^2 = 4$ and $f(3) = 3^2 = 9$.\n- Since $f$ is continuous, it attains all intermediate values between $0$ and $9$. Thus, the range is $[0, 9]$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4b8",
    "question": "Given the function $f(x) = |x|$ defined for all $x \\in \\mathbb{R}$, what is its range?",
    "options": [
      "$[0, \\infty)$",
      "$\\mathbb{R}$",
      "$(0, \\infty)$",
      "$\\{0\\}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "By definition of the absolute value function, $|x| \\ge 0$ for all $x \\in \\mathbb{R}$, and $|0| = 0$. For every non-negative real number $c$, $|c| = c$. Therefore, the set of all outputs (the range) is $[0, \\infty)$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4b9",
    "question": "What is the maximal real domain of the function $f(x) = \\frac{x + 1}{x - 1}$?",
    "options": [
      "All real numbers except $x = 1$",
      "All real numbers except $x = -1$",
      "All real numbers",
      "$x \\neq 1$ and $x \\neq -1$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The expression $\\frac{x + 1}{x - 1}$ is well-defined for all real $x$ except where the denominator vanishes:\n$$x - 1 = 0 \\implies x = 1.$$\nTherefore, the domain is $\\mathbb{R} \\setminus \\{1\\}$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4ba",
    "question": "Let $f(x) = 3x + 2$ with domain restricted to the interval $[1, 5]$. What is the range of $f$?",
    "options": [
      "$[5, 17]$",
      "$[3, 15]$",
      "$[4, 7]$",
      "$[1, 5]$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Since $f'(x) = 3 > 0$, $f(x)$ is strictly increasing on $[1, 5]$.\n- Minimum value occurs at $x = 1$: $f(1) = 3(1) + 2 = 5$.\n- Maximum value occurs at $x = 5$: $f(5) = 3(5) + 2 = 17$.\nSince $f$ is continuous, the range is the closed interval $[5, 17]$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4bb",
    "question": "Consider the trigonometric function $f(x) = \\sin(x)$ for all $x \\in \\mathbb{R}$. What is the range of this function?",
    "options": [
      "$[-1, 1]$",
      "$[0, 1]$",
      "$\\mathbb{R}$",
      "$[0, \\infty)$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For any real angle $x$, the sine function satisfies $-1 \\le \\sin(x) \\le 1$. Since sine is a continuous periodic function that reaches $-1$ (e.g., at $x = -\\frac{\\pi}{2}$) and $1$ (e.g., at $x = \\frac{\\pi}{2}$), its range is the closed interval $[-1, 1]$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4bc",
    "question": "What is the maximal domain in $\\mathbb{R}$ of the logarithmic function $f(x) = \\ln(x - 2)$?",
    "options": [
      "$(2, \\infty)$",
      "$[2, \\infty)$",
      "$\\mathbb{R} \\setminus \\{2\\}$",
      "$\\mathbb{R}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The natural logarithm $\\ln(u)$ is defined for real numbers if and only if its argument is strictly positive ($u > 0$).\nTherefore:\n$$x - 2 > 0 \\implies x > 2.$$\nIn interval notation, the domain is $(2, \\infty)$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "_id": "6a98fb18b89acd4c6047d4bd",
    "question": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = x^3$. What is the range of $f$?",
    "options": [
      "All real numbers ($\\mathbb{R}$)",
      "All positive real numbers",
      "All non-negative real numbers",
      "All integers"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The cubic function $f(x) = x^3$ is continuous, strictly increasing, and satisfies $\\lim_{x \\to -\\infty} x^3 = -\\infty$ and $\\lim_{x \\to \\infty} x^3 = \\infty$. For any real number $y \\in \\mathbb{R}$, there exists a unique real number $x = y^{1/3}$ such that $f(x) = y$. Thus, the range is all of $\\mathbb{R}$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  }
];

module.exports = { repairedGenuineSets };
