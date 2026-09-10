// scripts/data_jee_sets_subtopic3.js
// Subtopic 3: Types of relations (reflexive, symmetric, transitive, equivalence) (30 questions: 10 MCQ, 10 AR, 10 NUM)

const subtopic3Questions = [
  // --- 10 MCQs ---
  {
    "question": "Let $R$ be a relation on the set of real numbers $\\mathbb{R}$ defined by $x R y \\iff 1 + xy > 0$. Then $R$ is:",
    "options": [
      "Reflexive and symmetric, but not transitive",
      "Reflexive and transitive, but not symmetric",
      "Symmetric and transitive, but not reflexive",
      "An equivalence relation"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Let us examine the properties of $R$ on $\\mathbb{R}$:\n1. Reflexive: For any $x \\in \\mathbb{R}$, $1 + x \\cdot x = 1 + x^2 \\ge 1 > 0$. Thus, $x R x$ holds for all $x \\in \\mathbb{R}$. So $R$ is reflexive.\n2. Symmetric: If $x R y$, then $1 + xy > 0$. Since multiplication of real numbers is commutative, $1 + yx = 1 + xy > 0$, so $y R x$. Thus, $R$ is symmetric.\n3. Transitive: Consider the counterexample $x = 1, y = -\\frac{1}{2}, z = -3$:\n   $$1 + xy = 1 + 1\\left(-\\frac{1}{2}\\right) = \\frac{1}{2} > 0 \\implies x R y$$\n   $$1 + yz = 1 + \\left(-\\frac{1}{2}\\right)(-3) = 1 + \\frac{3}{2} = \\frac{5}{2} > 0 \\implies y R z$$\n   However:\n   $$1 + xz = 1 + (1)(-3) = -2 \\ngtr 0 \\implies x \\not R z.$$\nThus, $R$ is not transitive.\nHence, $R$ is reflexive and symmetric, but not transitive.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $R$ be a relation on $\\mathbb{N} \\times \\mathbb{N}$ defined by $(a, b) R (c, d) \\iff a + d = b + c$. Then $R$ is:",
    "options": [
      "An equivalence relation",
      "Reflexive and symmetric, but not transitive",
      "Reflexive and transitive, but not symmetric",
      "Symmetric and transitive, but not reflexive"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Notice that $a + d = b + c \\iff a - b = c - d$.\n1. Reflexive: For any $(a, b) \\in \\mathbb{N} \\times \\mathbb{N}$, $a + b = b + a$, so $(a, b) R (a, b)$.\n2. Symmetric: If $(a, b) R (c, d)$, then $a + d = b + c \\implies c + b = d + a \\implies (c, d) R (a, b)$.\n3. Transitive: If $(a, b) R (c, d)$ and $(c, d) R (e, f)$, then:\n   $$a + d = b + c \\quad \\text{and} \\quad c + f = d + e.$$\n   Adding both equations gives:\n   $$(a + d) + (c + f) = (b + c) + (d + e) \\implies a + f = b + e \\implies (a, b) R (e, f).$$\nSince $R$ is reflexive, symmetric, and transitive, it is an equivalence relation.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $R$ be a relation on $\\mathbb{R}$ defined by $x R y \\iff x - y + \\sqrt{2}$ is an irrational number. Then the relation $R$ is:",
    "options": [
      "Reflexive only",
      "Reflexive and symmetric",
      "Transitive only",
      "An equivalence relation"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "1. Reflexive: For any $x \\in \\mathbb{R}$, $x - x + \\sqrt{2} = \\sqrt{2}$, which is an irrational number. Thus, $x R x$ holds for all $x$. So $R$ is reflexive.\n2. Symmetric: Take $x = \\sqrt{2}$ and $y = 1$. Then:\n   $$x - y + \\sqrt{2} = \\sqrt{2} - 1 + \\sqrt{2} = 2\\sqrt{2} - 1 \\in \\mathbb{R} \\setminus \\mathbb{Q} \\implies x R y.$$\n   Now check $y R x$:\n   $$y - x + \\sqrt{2} = 1 - \\sqrt{2} + \\sqrt{2} = 1 \\in \\mathbb{Q},$$\n   which is rational, so $y \\not R x$. Thus, $R$ is not symmetric.\n3. Transitive: Take $x = 1$, $y = \\sqrt{2}$, and $z = 1 + \\sqrt{2}$. Then:\n   $$x - y + \\sqrt{2} = 1 - \\sqrt{2} + \\sqrt{2} = 1 \\in \\mathbb{Q},$$\n   so $x \\not R y$. More directly, take $x = \\sqrt{2}, y = 2, z = 2\\sqrt{2}$.\n   $$x - y + \\sqrt{2} = 2\\sqrt{2} - 2 \\in \\mathbb{R} \\setminus \\mathbb{Q} \\implies x R y.$$\n   $$y - z + \\sqrt{2} = 2 - 2\\sqrt{2} + \\sqrt{2} = 2 - \\sqrt{2} \\in \\mathbb{R} \\setminus \\mathbb{Q} \\implies y R z.$$\n   However:\n   $$x - z + \\sqrt{2} = \\sqrt{2} - 2\\sqrt{2} + \\sqrt{2} = 0 \\in \\mathbb{Q} \\implies x \\not R z.$$\nThus, $R$ is not transitive.\nTherefore, $R$ is reflexive only.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $A = \\{1, 2, 3\\}$. Which of the following is the minimum number of ordered pairs that must be added to the relation $R = \\{(1, 1), (1, 2), (3, 1)\\}$ on $A$ to make it an equivalence relation?",
    "options": [
      "$6$",
      "$5$",
      "$4$",
      "$7$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $R$ to be an equivalence relation on $A = \\{1, 2, 3\\}$:\n1. Reflexivity requires $(1, 1), (2, 2), (3, 3)$. We must add $(2, 2)$ and $(3, 3)$.\n2. Symmetry requires:\n   - Since $(1, 2) \\in R$, we must add $(2, 1)$.\n   - Since $(3, 1) \\in R$, we must add $(1, 3)$.\n3. Transitivity requires:\n   - $(3, 1)$ and $(1, 2)$ are in the relation, so $(3, 2)$ must be in the relation (add $(3, 2)$).\n   - By symmetry, $(2, 3)$ must also be added.\nNow all pairs in $A \\times A$ are present:\n$$\\{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1), (3, 1), (1, 3), (2, 3), (3, 2)\\} = A \\times A.$$\nTotal pairs in $A \\times A$ is $9$.\nThe original relation had $3$ pairs: $\\{(1, 1), (1, 2), (3, 1)\\}$.\nTherefore, the number of pairs that must be added is:\n$$9 - 3 = 6.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $R$ be a relation on the set $\\mathbb{Z}$ of integers defined by $x R y \\iff x^2 + y^2 \\le 4$. The domain of the relation $R$ is:",
    "options": [
      "$\\{-2, -1, 0, 1, 2\\}$",
      "$\\{-1, 0, 1\\}$",
      "$\\{0, 1, 2\\}$",
      "$\\{-4, -3, -2, -1, 0, 1, 2, 3, 4\\}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The domain of $R$ consists of all $x \\in \\mathbb{Z}$ for which there exists some $y \\in \\mathbb{Z}$ satisfying $x^2 + y^2 \\le 4$.\nSince $y^2 \\ge 0$, we have:\n$$x^2 \\le x^2 + y^2 \\le 4 \\implies x^2 \\le 4.$$\nFor $x \\in \\mathbb{Z}$, $x^2 \\le 4$ gives $x \\in \\{-2, -1, 0, 1, 2\\}$.\nFor each such $x$, taking $y = 0$ yields $x^2 + 0^2 = x^2 \\le 4$, so each of these values actually belongs to the domain.\nTherefore, the domain is $\\{-2, -1, 0, 1, 2\\}$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $R_1$ and $R_2$ be two equivalence relations on a non-empty set $A$. Which of the following statements is ALWAYS true?",
    "options": [
      "$R_1 \\cap R_2$ is an equivalence relation on $A$",
      "$R_1 \\cup R_2$ is an equivalence relation on $A$",
      "$R_1 \\setminus R_2$ is an equivalence relation on $A$",
      "$R_1 \\Delta R_2$ is an equivalence relation on $A$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "1. Reflexivity: For all $a \\in A$, $(a, a) \\in R_1$ and $(a, a) \\in R_2$, so $(a, a) \\in R_1 \\cap R_2$.\n2. Symmetry: If $(a, b) \\in R_1 \\cap R_2$, then $(a, b) \\in R_1$ and $(a, b) \\in R_2$. By symmetry of $R_1$ and $R_2$, $(b, a) \\in R_1$ and $(b, a) \\in R_2$, so $(b, a) \\in R_1 \\cap R_2$.\n3. Transitivity: If $(a, b), (b, c) \\in R_1 \\cap R_2$, then both pairs belong to $R_1$ and both belong to $R_2$. By transitivity of both relations, $(a, c) \\in R_1$ and $(a, c) \\in R_2$, so $(a, c) \\in R_1 \\cap R_2$.\nThus, $R_1 \\cap R_2$ is always an equivalence relation.\n(Note: $R_1 \\cup R_2$ is generally not transitive, hence not an equivalence relation).\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $S = \\{1, 2, 3, 4\\}$. The total number of reflexive relations on $S$ is:",
    "options": [
      "$2^{12}$",
      "$2^{16}$",
      "$2^6$",
      "$2^4$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For a set of $n$ elements, the total number of ordered pairs in $S \\times S$ is $n^2 = 4^2 = 16$.\nIn any reflexive relation, all $n = 4$ diagonal pairs $(x, x)$ must be included.\nThe remaining $n^2 - n = 16 - 4 = 12$ non-diagonal pairs may independently be either included or excluded.\nTherefore, the number of reflexive relations is:\n$$2^{n^2 - n} = 2^{12} = 4096.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $R$ be a relation on $\\mathbb{R}$ defined by $x R y \\iff |x - y| \\le 1$. Then $R$ is:",
    "options": [
      "Reflexive and symmetric, but not transitive",
      "Reflexive and transitive, but not symmetric",
      "An equivalence relation",
      "Symmetric and transitive, but not reflexive"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "1. Reflexive: $|x - x| = 0 \\le 1$ for all $x \\in \\mathbb{R}$. So $R$ is reflexive.\n2. Symmetric: $|y - x| = |x - y| \\le 1$, so $x R y \\implies y R x$. So $R$ is symmetric.\n3. Transitive: Let $x = 0, y = 0.8, z = 1.6$.\n   $$|x - y| = |0 - 0.8| = 0.8 \\le 1 \\implies x R y$$\n   $$|y - z| = |0.8 - 1.6| = 0.8 \\le 1 \\implies y R z$$\n   However:\n   $$|x - z| = |0 - 1.6| = 1.6 > 1 \\implies x \\not R z.$$\nThus, $R$ is not transitive.\nHence, $R$ is reflexive and symmetric, but not transitive.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $A$ be the set of all straight lines in a plane. A relation $R$ on $A$ is defined by $L_1 R L_2 \\iff L_1 \\perp L_2$. Then $R$ is:",
    "options": [
      "Symmetric only",
      "Reflexive and symmetric",
      "Transitive only",
      "An equivalence relation"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "1. Reflexive: A line cannot be perpendicular to itself ($L_1 \\not\\perp L_1$), so $R$ is not reflexive.\n2. Symmetric: If $L_1 \\perp L_2$, then $L_2 \\perp L_1$. So $R$ is symmetric.\n3. Transitive: If $L_1 \\perp L_2$ and $L_2 \\perp L_3$ in a plane, then $L_1$ is parallel to $L_3$ ($L_1 \\parallel L_3$), not perpendicular. So $R$ is not transitive.\nTherefore, $R$ is symmetric only.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $A = \\{1, 2, 3\\}$. The number of distinct equivalence relations that can be defined on $A$ is:",
    "options": [
      "$5$",
      "$6$",
      "$8$",
      "$9$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The number of equivalence relations on a set of $n$ elements is given by the $n$-th Bell number $B_n$, which is the number of partitions of the set.\nFor $n = 3$, the partitions of $\\{1, 2, 3\\}$ are:\n1. $\\{\\{1, 2, 3\\}\\}$ (1 partition)\n2. $\\{\\{1\\}, \\{2, 3\\}\\}$, $\\{\\{2\\}, \\{1, 3\\}\\}$, $\\{\\{3\\}, \\{1, 2\\}\\}$ (3 partitions)\n3. $\\{\\{1\\}, \\{2\\}, \\{3\\}\\}$ (1 partition)\nTotal number of equivalence relations is:\n$$B_3 = 1 + 3 + 1 = 5.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },

  // --- 10 Assertion-Reasoning questions ---
  {
    "question": "Statement I (Assertion): The intersection of two equivalence relations on a set $A$ is always an equivalence relation on $A$.\\nStatement II (Reason): The properties of reflexivity, symmetry, and transitivity are all preserved under set intersection.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "If $R_1$ and $R_2$ are equivalence relations on $A$, then $(x, x) \\in R_1$ and $(x, x) \\in R_2$ for all $x$, so $(x, x) \\in R_1 \\cap R_2$. Symmetry and transitivity hold in $R_1 \\cap R_2$ because they hold in each relation individually. Thus, Reason correctly explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Statement I (Assertion): The union of two equivalence relations on a set $A$ is not necessarily an equivalence relation on $A$.\\nStatement II (Reason): Although the union of two reflexive and symmetric relations remains reflexive and symmetric, it may fail to satisfy transitivity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "For $A = \\{1, 2, 3\\}$, let $R_1 = \\{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)\\}$ and $R_2 = \\{(1, 1), (2, 2), (3, 3), (2, 3), (3, 2)\\}$. In $R_1 \\cup R_2$, we have $(1, 2) \\in R_1$ and $(2, 3) \\in R_2$, but $(1, 3) \\notin R_1 \\cup R_2$. Thus transitivity fails. Reason is true and correctly explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Statement I (Assertion): The identity relation $I_A = \\{(a, a) : a \\in A\\}$ on any non-empty set $A$ is an equivalence relation.\\nStatement II (Reason): $I_A$ is reflexive because every element is related to itself, symmetric because $(a, a) \\in I_A \\implies (a, a) \\in I_A$, and transitive because $(a, a) \\in I_A$ and $(a, a) \\in I_A \\implies (a, a) \\in I_A$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "The identity relation satisfies all three conditions: reflexivity, symmetry, and transitivity. It is the smallest equivalence relation on $A$. Reason provides the exact verification of all three axioms.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Statement I (Assertion): A relation $R$ on a set $A$ is symmetric if and only if $R = R^{-1}$.\\nStatement II (Reason): The inverse relation is defined by $R^{-1} = \\{(y, x) : (x, y) \\in R\\}$. Symmetry means $(x, y) \\in R \\implies (y, x) \\in R$, which is equivalent to $R \\subseteq R^{-1}$, and since $(R^{-1})^{-1} = R$, this implies $R = R^{-1}$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "By definition, $(x, y) \\in R \\iff (y, x) \\in R^{-1}$. If $R$ is symmetric, $(x, y) \\in R \\implies (y, x) \\in R \\implies (x, y) \\in R^{-1}$, so $R \\subseteq R^{-1}$. Applying this to $R^{-1}$ gives $R^{-1} \\subseteq R$, so $R = R^{-1}$. Reason is the exact proof of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Statement I (Assertion): A relation $R$ is transitive if and only if $R \\circ R \\subseteq R$.\\nStatement II (Reason): The composite relation $R \\circ R$ is defined as $\\{(x, z) : \\exists y \\text{ such that } (x, y) \\in R \\text{ and } (y, z) \\in R\\}$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "By definition, $(x, z) \\in R \\circ R$ means there is some $y$ with $(x, y) \\in R$ and $(y, z) \\in R$. Transitivity asserts that whenever this occurs, $(x, z) \\in R$. This is precisely the set containment $R \\circ R \\subseteq R$. Reason correctly defines composition and explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Statement I (Assertion): The relation $R$ on $\\mathbb{R}$ defined by $x R y \\iff x \\le y^2$ is reflexive.\\nStatement II (Reason): For every real number $x$, $x \\le x^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false and Reason is false."
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "assertion_reason",
    "solution": "For $x = \\frac{1}{2}$, $x^2 = \\frac{1}{4}$. But $\\frac{1}{2} \\not\\le \\frac{1}{4}$, so $\\left(\\frac{1}{2}, \\frac{1}{2}\\right) \\notin R$. Thus $R$ is not reflexive, so Assertion is false. Similarly, Reason is false because $x > x^2$ for all $x \\in (0, 1)$.\nHence, both Assertion and Reason are false (mapped to Option D).\nHence, the correct option is (D).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Statement I (Assertion): If a relation $R$ on a non-empty set $A$ is an equivalence relation, then the inverse relation $R^{-1}$ is also an equivalence relation on $A$.\\nStatement II (Reason): For any symmetric relation $R$, $R^{-1} = R$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "Since an equivalence relation $R$ is symmetric, we have $R^{-1} = R$. Because $R^{-1}$ is identical to $R$ itself, $R^{-1}$ inherits all properties of $R$ and is an equivalence relation. Reason directly proves Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Statement I (Assertion): Let $R$ be a relation on $\\mathbb{Z}$ defined by $a R b \\iff a - b$ is divisible by $n$, where $n \\in \\mathbb{N}$. Then $R$ partitions $\\mathbb{Z}$ into $n$ pairwise disjoint equivalence classes.\\nStatement II (Reason): By the Division Algorithm, every integer leaves a unique remainder $r \\in \\{0, 1, 2, \\dots, n - 1\\}$ upon division by $n$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "The equivalence classes of congruence modulo $n$ are $[0], [1], \\dots, [n - 1]$. The Division Algorithm guarantees that every integer belongs to exactly one remainder class, making the classes pairwise disjoint and covering all of $\\mathbb{Z}$. Reason is the exact mathematical foundation of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Statement I (Assertion): The universal relation $R = A \\times A$ on any set $A$ is an equivalence relation.\\nStatement II (Reason): Every ordered pair belongs to $A \\times A$, so reflexivity, symmetry, and transitivity hold universally.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "In $A \\times A$, every possible pair $(x, y)$ is included. Thus $(x, x) \\in A \\times A$, $(x, y) \\in A \\times A \\implies (y, x) \\in A \\times A$, and $(x, y), (y, z) \\in A \\times A \\implies (x, z) \\in A \\times A$. Reason explains why $A \\times A$ is the largest equivalence relation on $A$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Statement I (Assertion): If a relation $R$ on a finite set $A$ is reflexive, then $n(R) \\ge n(A)$.\\nStatement II (Reason): Reflexivity requires that $(a, a) \\in R$ for every element $a \\in A$, contributing at least $n(A)$ distinct diagonal elements to $R$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "Let $n(A) = n$. Reflexivity requires $I_A \\subseteq R$. Since $n(I_A) = n$, we must have $n(R) \\ge n(I_A) = n(A)$. Reason is the direct and correct explanation of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },

  // --- 10 Numerical questions ---
  {
    "question": "Let $A = \\{1, 2, 3\\}$. Find the total number of symmetric relations on $A$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 64,
    "type": "numerical",
    "solution": "The number of symmetric relations on a set of $n$ elements is given by $2^{\\frac{n(n + 1)}{2}}$.\nHere $n = 3$, so:\n$$\\frac{n(n + 1)}{2} = \\frac{3 \\times 4}{2} = 6.$$\nTherefore, the number of symmetric relations is:\n$$2^6 = 64.$$\nThus, the answer is $64$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $A = \\{1, 2, 3, 4\\}$. Find the total number of relations on $A$ that are both reflexive and symmetric.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 64,
    "type": "numerical",
    "solution": "For a relation to be both reflexive and symmetric on a set of size $n$:\n- All $n$ diagonal pairs $(x, x)$ must be included ($1$ way).\n- For the $\\frac{n(n - 1)}{2}$ pairs of distinct elements $\\{x, y\\}$, both $(x, y)$ and $(y, x)$ must either be included together or excluded together ($2$ choices per pair).\nHere $n = 4$, so the number of off-diagonal pairs is:\n$$\\frac{4 \\times 3}{2} = 6.$$\nTherefore, the number of reflexive and symmetric relations is:\n$$2^6 = 64.$$\nThus, the answer is $64$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $A = \\{1, 2, 3, 4\\}$. Find the total number of distinct equivalence relations on $A$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 15,
    "type": "numerical",
    "solution": "The number of equivalence relations on a set of $n$ elements is given by the Bell number $B_n$.\nWe compute the Bell numbers using the recurrence $B_{n+1} = \\sum_{k=0}^{n} \\binom{n}{k} B_k$:\n- $B_0 = 1$\n- $B_1 = 1$\n- $B_2 = \\binom{1}{0}B_0 + \\binom{1}{1}B_1 = 1 + 1 = 2$\n- $B_3 = \\binom{2}{0}B_0 + \\binom{2}{1}B_1 + \\binom{2}{2}B_2 = 1 + 2(1) + 2 = 5$\n- $B_4 = \\binom{3}{0}B_0 + \\binom{3}{1}B_1 + \\binom{3}{2}B_2 + \\binom{3}{3}B_3 = 1 + 3(1) + 3(2) + 5 = 1 + 3 + 6 + 5 = 15.$\nThus, the answer is $15$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $A = \\{1, 2, 3\\}$. Find the number of reflexive relations on $A$ that are NOT symmetric.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 56,
    "type": "numerical",
    "solution": "The total number of reflexive relations on a set of $n = 3$ elements is:\n$$2^{n(n - 1)} = 2^{3 \\times 2} = 2^6 = 64.$$\nThe number of reflexive relations that are also symmetric is:\n$$2^{\\frac{n(n - 1)}{2}} = 2^{\\frac{3 \\times 2}{2}} = 2^3 = 8.$$\nTherefore, the number of reflexive relations that are NOT symmetric is:\n$$64 - 8 = 56.$$\nThus, the answer is $56$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $R$ be an equivalence relation on the set $A = \\{1, 2, 3, 4, 5, 6\\}$ with exactly $2$ equivalence classes of size $3$ each. Find the number of elements in $R$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 18,
    "type": "numerical",
    "solution": "If $A$ is partitioned into disjoint equivalence classes $A_1$ and $A_2$ with $|A_1| = 3$ and $|A_2| = 3$, then:\n$$R = (A_1 \\times A_1) \\cup (A_2 \\times A_2).$$\nSince $A_1$ and $A_2$ are disjoint, $(A_1 \\times A_1) \\cap (A_2 \\times A_2) = \\emptyset$.\nTherefore, the cardinality of $R$ is:\n$$n(R) = |A_1|^2 + |A_2|^2 = 3^2 + 3^2 = 9 + 9 = 18.$$\nThus, the answer is $18$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $A = \\{1, 2, 3\\}$. The relation $R = \\{(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)\\}$ is given on $A$. Find the minimum number of ordered pairs that must be added to $R$ to make it an equivalence relation.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 4,
    "type": "numerical",
    "solution": "The relation $R$ already contains the diagonal elements $(1, 1), (2, 2), (3, 3)$.\nTo satisfy symmetry and transitivity:\n1. For transitivity with $(1, 2)$ and $(2, 3)$, we must add $(1, 3)$.\n2. For symmetry:\n   - Since $(1, 2) \\in R$, add $(2, 1)$.\n   - Since $(2, 3) \\in R$, add $(3, 2)$.\n   - Since $(1, 3)$ was added, add $(3, 1)$.\nWith these $4$ pairs added, $R$ becomes the universal relation $A \\times A$, which has $9$ elements.\nSince $R$ initially had $5$ elements, the number of pairs added is $9 - 5 = 4$.\nThus, the answer is $4$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $S = \\{1, 2, 3, 4, 5\\}$. Find the total number of ordered pairs $(x, y) \\in S \\times S$ that belong to the relation $R$ defined by $x R y \\iff x \\text{ divides } y$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 10,
    "type": "numerical",
    "solution": "We list all ordered pairs $(x, y) \\in S \\times S$ such that $x \\mid y$:\n- For $x = 1$: $y \\in \\{1, 2, 3, 4, 5\\}$ ($5$ pairs)\n- For $x = 2$: $y \\in \\{2, 4\\}$ ($2$ pairs)\n- For $x = 3$: $y \\in \\{3\\}$ ($1$ pair)\n- For $x = 4$: $y \\in \\{4\\}$ ($1$ pair)\n- For $x = 5$: $y \\in \\{5\\}$ ($1$ pair)\nTotal number of pairs is:\n$$5 + 2 + 1 + 1 + 1 = 10.$$\nThus, the answer is $10$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $A = \\{1, 2, 3, 4, 5\\}$ and $B = \\{1, 2, 3\\}$. What is the total number of non-empty relations that can be defined from $A$ to $B$ having cardinality at most $2$?",
    "options": [],
    "correctOption": null,
    "correctAnswer": 120,
    "type": "numerical",
    "solution": "The number of elements in $A \\times B$ is $5 \\times 3 = 15$.\nA relation of cardinality $k$ is a subset of $A \\times B$ of size $k$.\nWe need the number of non-empty relations of size at most $2$, which corresponds to $k = 1$ and $k = 2$:\n$$\\binom{15}{1} + \\binom{15}{2} = 15 + \\frac{15 \\times 14}{2} = 15 + 105 = 120.$$\nThus, the answer is $120$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $R$ be an equivalence relation on $A = \\{1, 2, 3, 4, 5, 6, 7\\}$ that partitions $A$ into equivalence classes of sizes $1, 2,$ and $4$. Find the total number of ordered pairs in $R$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 21,
    "type": "numerical",
    "solution": "If $A$ is partitioned into disjoint subsets $A_1, A_2, A_3$ of sizes $1, 2, 4$:\n$$R = (A_1 \\times A_1) \\cup (A_2 \\times A_2) \\cup (A_3 \\times A_3).$$\nSince the classes are pairwise disjoint, the total number of elements in $R$ is:\n$$n(R) = 1^2 + 2^2 + 4^2 = 1 + 4 + 16 = 21.$$\nThus, the answer is $21$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  },
  {
    "question": "Let $A = \\{1, 2, 3, 4\\}$. A relation $R$ on $A$ is defined by $R = \\{(a, b) \\in A \\times A : a + b \\text{ is even}\\}$. Find the number of elements in $R$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 8,
    "type": "numerical",
    "solution": "The sum $a + b$ is even if and only if $a$ and $b$ have the same parity.\nIn $A = \\{1, 2, 3, 4\\}$:\n- The odd numbers are $O = \\{1, 3\\}$ ($2$ elements).\n- The even numbers are $E = \\{2, 4\\}$ ($2$ elements).\n$R = (O \\times O) \\cup (E \\times E)$.\nSince $O$ and $E$ are disjoint:\n$$n(R) = |O|^2 + |E|^2 = 2^2 + 2^2 = 4 + 4 = 8.$$\nThus, the answer is $8$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of relations (reflexive, symmetric, transitive, equivalence)"
  }
];

module.exports = { subtopic3Questions };
