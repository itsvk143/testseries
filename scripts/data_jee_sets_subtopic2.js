// scripts/data_jee_sets_subtopic2.js
// Subtopic 2: Set operations (union, intersection, difference, complement) (30 questions: 10 MCQ, 10 AR, 10 NUM)

const subtopic2Questions = [
  // --- 10 MCQs ---
  {
    "question": "For any three sets $A, B,$ and $C$, the set expression $(A \\setminus B) \\setminus C$ is always identical to:",
    "options": [
      "$A \\setminus (B \\cup C)$",
      "$A \\setminus (B \\cap C)$",
      "$(A \\setminus B) \\cup C$",
      "$(A \\cup C) \\setminus B$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Expressing set difference in terms of intersection with complements:\n$$(A \\setminus B) \\setminus C = (A \\cap B') \\cap C'.$$\nBy associativity of intersection:\n$$(A \\cap B') \\cap C' = A \\cap (B' \\cap C').$$\nBy De Morgan's Law, $B' \\cap C' = (B \\cup C)'$. Thus:\n$$A \\cap (B \\cup C)' = A \\setminus (B \\cup C).$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A, B,$ and $C$ be three sets. The expression $A \\setminus (B \\setminus C)$ is equal to:",
    "options": [
      "$(A \\setminus B) \\cup (A \\cap C)$",
      "$(A \\setminus B) \\setminus C$",
      "$(A \\setminus B) \\cup C$",
      "$(A \\cap B) \\setminus C$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Using the definition of set difference:\n$$A \\setminus (B \\setminus C) = A \\cap (B \\cap C')'.$$\nApplying De Morgan's Law to $(B \\cap C')'$:\n$$(B \\cap C')' = B' \\cup (C')' = B' \\cup C.$$\nNow distribute intersection over union:\n$$A \\cap (B' \\cup C) = (A \\cap B') \\cup (A \\cap C) = (A \\setminus B) \\cup (A \\cap C).$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A$ and $B$ be two sets in a universal set $U$. The symmetric difference $A \\Delta B$ is defined as $(A \\setminus B) \\cup (B \\setminus A)$. Which of the following is NOT equivalent to $A \\Delta B$?",
    "options": [
      "$(A \\cup B) \\setminus (A \\cap B)$",
      "$(A \\cap B') \\cup (B \\cap A')$",
      "$(A \\cup B) \\cap (A' \\cup B')$",
      "$(A \\cup B)' \\cup (A \\cap B)$"
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "single_choice",
    "solution": "Let us evaluate the options for $A \\Delta B$:\n1. $(A \\cup B) \\setminus (A \\cap B)$ is the standard alternate definition of symmetric difference.\n2. $(A \\cap B') \\cup (B \\cap A') = (A \\setminus B) \\cup (B \\setminus A)$, which is the primary definition.\n3. By De Morgan's Law, $A' \\cup B' = (A \\cap B)'$, so $(A \\cup B) \\cap (A' \\cup B') = (A \\cup B) \\cap (A \\cap B)' = (A \\cup B) \\setminus (A \\cap B)$.\n4. $(A \\cup B)' \\cup (A \\cap B)$ is the complement of the symmetric difference, $(A \\Delta B)'$.\nThus, option (D) is NOT equivalent to $A \\Delta B$.\nHence, the correct option is (D).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A = \\{x \\in \\mathbb{R} : x^2 - 5x + 6 = 0\\}$ and $B = \\{x \\in \\mathbb{R} : x^2 - 7x + 12 = 0\\}$. Then $(A \\cup B) \\times (A \\cap B)$ has how many elements?",
    "options": [
      "$3$",
      "$4$",
      "$6$",
      "$12$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Solving the quadratic equations:\n$$A: x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies A = \\{2, 3\\}.$$\n$$B: x^2 - 7x + 12 = 0 \\implies (x - 3)(x - 4) = 0 \\implies B = \\{3, 4\\}.$$\nThen:\n$$A \\cup B = \\{2, 3, 4\\} \\implies n(A \\cup B) = 3$$\n$$A \\cap B = \\{3\\} \\implies n(A \\cap B) = 1.$$\nTherefore, the Cartesian product has cardinality:\n$$n((A \\cup B) \\times (A \\cap B)) = n(A \\cup B) \\times n(A \\cap B) = 3 \\times 1 = 3.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "If $A, B,$ and $C$ are three non-empty sets such that $A \\cap B = A \\cap C$ and $A \\cup B = A \\cup C$, then which of the following is always true?",
    "options": [
      "$B = C$",
      "$A = B$",
      "$A = C$",
      "$B \\cap C = \\emptyset$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Using the distributive law on $B$:\n$$B = B \\cap (A \\cup B) = B \\cap (A \\cup C) = (B \\cap A) \\cup (B \\cap C).$$\nSince $B \\cap A = A \\cap B = A \\cap C$:\n$$B = (A \\cap C) \\cup (B \\cap C) = (A \\cup B) \\cap C.$$\nSince $A \\cup B = A \\cup C$:\n$$B = (A \\cup C) \\cap C = C.$$\nTherefore, $B = C$ is always true.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $U$ be the universal set and let $A$ and $B$ be subsets of $U$. If $n(U) = 700$, $n(A) = 200$, $n(B) = 300$, and $n(A \\cap B) = 100$, then $n(A' \\cap B')$ is equal to:",
    "options": [
      "$300$",
      "$400$",
      "$200$",
      "$500$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "By De Morgan's Law, $A' \\cap B' = (A \\cup B)'$.\nFirst compute $n(A \\cup B)$:\n$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 200 + 300 - 100 = 400.$$\nThen:\n$$n(A' \\cap B') = n(U) - n(A \\cup B) = 700 - 400 = 300.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "For sets $A$ and $B$, the set $(A \\cup B) \\cap (A \\cup B')$ is equal to:",
    "options": [
      "$A$",
      "$B$",
      "$A \\cap B$",
      "$A \\cup B$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "By the distributive law of union over intersection:\n$$(A \\cup B) \\cap (A \\cup B') = A \\cup (B \\cap B').$$\nSince $B \\cap B' = \\emptyset$, this simplifies to:\n$$A \\cup \\emptyset = A.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A = \\{x \\in \\mathbb{R} : 0 \\le x \\le 3\\}$ and $B = \\{x \\in \\mathbb{R} : 1 \\le x \\le 4\\}$. Then the symmetric difference $A \\Delta B$ is:",
    "options": [
      "$[0, 1) \\cup (3, 4]$",
      "$[0, 1] \\cup [3, 4]$",
      "$(0, 1) \\cup (3, 4)$",
      "$[1, 3]$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "We compute the set differences:\n$$A \\setminus B = [0, 3] \\setminus [1, 4] = [0, 1).$$\n$$B \\setminus A = [1, 4] \\setminus [0, 3] = (3, 4].$$\nTherefore, the symmetric difference is:\n$$A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = [0, 1) \\cup (3, 4].$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A, B,$ and $C$ be finite sets. If $n(A \\times B) = 24$ and $(A \\times B) \\cap (A \\times C) = A \\times (B \\cap C)$ has $12$ elements with $n(A) = 3$, then $n(B \\setminus C)$ is:",
    "options": [
      "$4$",
      "$8$",
      "$3$",
      "$6$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "We are given:\n$$n(A \\times B) = n(A) \\times n(B) = 24.$$\nSince $n(A) = 3$, we have:\n$$n(B) = \\frac{24}{3} = 8.$$\nAlso, $n(A \\times (B \\cap C)) = n(A) \\times n(B \\cap C) = 12$, which gives:\n$$n(B \\cap C) = \\frac{12}{3} = 4.$$\nTherefore, the cardinality of the set difference is:\n$$n(B \\setminus C) = n(B) - n(B \\cap C) = 8 - 4 = 4.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "If $A$ and $B$ are two sets such that $A \\subseteq B$, then $A \\cap B'$ is:",
    "options": [
      "$\\emptyset$",
      "$A$",
      "$B'$",
      "$U$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The set $A \\cap B'$ is by definition $A \\setminus B$.\nSince $A \\subseteq B$, every element of $A$ is also in $B$. Therefore, no element belongs to $A$ but not to $B$, which means:\n$$A \\cap B' = A \\setminus B = \\emptyset.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },

  // --- 10 Assertion-Reasoning questions ---
  {
    "question": "Statement I (Assertion): For any two sets $A$ and $B$, $A \\setminus B = A \\cap B'$.\\nStatement II (Reason): The set difference $A \\setminus B$ consists of all elements that belong to $A$ and do not belong to $B$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "By definition, $A \\setminus B = \\{x : x \\in A \\text{ and } x \\notin B\\}$. Since $x \\notin B \\iff x \\in B'$, we have $x \\in A \\setminus B \\iff x \\in A \\text{ and } x \\in B' \\iff x \\in A \\cap B'$. Thus, Reason is true and correctly explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Statement I (Assertion): The symmetric difference operation $\\Delta$ on sets is associative, that is, $(A \\Delta B) \\Delta C = A \\Delta (B \\Delta C)$ for all sets $A, B, C$.\\nStatement II (Reason): An element $x$ belongs to $A \\Delta B \\Delta C$ if and only if $x$ belongs to an odd number of the sets $A, B,$ and $C$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "In Boolean algebra or $\\mathbb{Z}_2$, the indicator function of symmetric difference is $\\chi_{A \\Delta B} = \\chi_A \\oplus \\chi_B$. Since XOR addition is associative, $(A \\Delta B) \\Delta C = A \\Delta (B \\Delta C)$. The parity condition in Reason holds universally: $x \\in A \\Delta B \\Delta C$ if and only if $\\chi_A(x) + \\chi_B(x) + \\chi_C(x) \\equiv 1 \\pmod 2$, which means $x$ belongs to an odd number of sets. Reason is the exact algebraic explanation of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Statement I (Assertion): For any two sets $A$ and $B$, $A \\cup B = A \\cap B \\iff A = B$.\\nStatement II (Reason): $A \\cap B \\subseteq A \\subseteq A \\cup B$, so if $A \\cup B = A \\cap B$, the subsets in the chain of inclusions must all be equal.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "We always have the inclusion chain $A \\cap B \\subseteq A \\subseteq A \\cup B$ and $A \\cap B \\subseteq B \\subseteq A \\cup B$. If $A \\cup B = A \\cap B$, then all sets in the chain are squeezed to equality, giving $A = A \\cap B = B$. Conversely, if $A = B$, then $A \\cup A = A = A \\cap A$. Reason correctly explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Statement I (Assertion): For any sets $A$ and $B$, $(A \\setminus B) \\cap (B \\setminus A) = \\emptyset$.\\nStatement II (Reason): $A \\setminus B \\subseteq A$ and $B \\setminus A \\subseteq B'$, so their intersection is a subset of $A \\cap B'$, which is disjoint from $B \\setminus A$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "An element $x \\in A \\setminus B$ must satisfy $x \\notin B$, while an element $x \\in B \\setminus A$ must satisfy $x \\in B$. Since no element can simultaneously satisfy $x \\in B$ and $x \\notin B$, the intersection $(A \\setminus B) \\cap (B \\setminus A)$ is empty. Reason correctly captures this disjointness.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Statement I (Assertion): For any sets $A, B,$ and $C$, $A \\cap (B \\Delta C) = (A \\cap B) \\Delta (A \\cap C)$.\\nStatement II (Reason): Intersection distributes over symmetric difference, just as multiplication distributes over addition in rings.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "In the Boolean ring $(P(U), \\Delta, \\cap)$, symmetric difference $\\Delta$ acts as ring addition and intersection $\\cap$ acts as ring multiplication. Just as multiplication distributes over addition in any ring, intersection distributes over symmetric difference: $A \\cap (B \\Delta C) = (A \\cap B) \\Delta (A \\cap C)$. Both statements are true and Reason is the correct explanation.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Statement I (Assertion): If $A$ and $B$ are non-empty sets, then $(A \\times B) \\cap (B \\times A) = (A \\cap B) \\times (A \\cap B)$.\\nStatement II (Reason): An ordered pair $(x, y) \\in (A \\times B) \\cap (B \\times A)$ if and only if $x \\in A \\cap B$ and $y \\in A \\cap B$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "$(x, y) \\in A \\times B \\iff x \\in A$ and $y \\in B$.\n$(x, y) \\in B \\times A \\iff x \\in B$ and $y \\in A$.\nThus, $(x, y) \\in (A \\times B) \\cap (B \\times A) \\iff (x \\in A \\text{ and } x \\in B)$ and $(y \\in B \\text{ and } y \\in A) \\iff x \\in A \\cap B$ and $y \\in A \\cap B \\iff (x, y) \\in (A \\cap B) \\times (A \\cap B)$. Reason is the exact proof of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Statement I (Assertion): For any two sets $A$ and $B$, $(A \\cup B)' \\cup (A' \\cap B) = A'$.\\nStatement II (Reason): By De Morgan's Law, $(A \\cup B)' = A' \\cap B'$, and $A' \\cap B' \\cup (A' \\cap B) = A' \\cap (B' \\cup B) = A' \\cap U = A'$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "By De Morgan's Law, $(A \\cup B)' = A' \\cap B'$.\nThen:\n$$(A \\cup B)' \\cup (A' \\cap B) = (A' \\cap B') \\cup (A' \\cap B).$$\nFactoring out $A'$ using the distributive law:\n$$A' \\cap (B' \\cup B) = A' \\cap U = A'.$$\nThus, both Assertion and Reason are true, and Reason is the exact derivation of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Statement I (Assertion): If $A \\cap B = \\emptyset$, then $A \\setminus B = A$ and $B \\setminus A = B$.\\nStatement II (Reason): The set difference $A \\setminus B$ removes from $A$ all elements that also belong to $B$. If no such elements exist, $A$ remains unchanged.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "$A \\setminus B = A \\setminus (A \\cap B)$. If $A \\cap B = \\emptyset$, then $A \\setminus \\emptyset = A$. Similarly, $B \\setminus A = B$. Reason explains this fundamental property of disjoint sets.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Statement I (Assertion): For any set $A$, $A \\Delta A = \\emptyset$ and $A \\Delta \\emptyset = A$.\\nStatement II (Reason): By definition, $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A)$. Substituting $B = A$ gives $(A \\setminus A) \\cup (A \\setminus A) = \\emptyset$, and substituting $B = \\emptyset$ gives $(A \\setminus \\emptyset) \\cup (\\emptyset \\setminus A) = A \\cup \\emptyset = A$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "The symmetric difference is self-inverse: $A \\Delta A = \\emptyset$, and the empty set is the identity element: $A \\Delta \\emptyset = A$. Reason provides the exact definition and substitution confirming Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Statement I (Assertion): For any three sets $A, B,$ and $C$, $(A \\cup B) \\setminus C = (A \\setminus C) \\cup (B \\setminus C)$.\\nStatement II (Reason): Set difference distributes over union from the right.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "$$(A \\cup B) \\setminus C = (A \\cup B) \\cap C' = (A \\cap C') \\cup (B \\cap C') = (A \\setminus C) \\cup (B \\setminus C).$$\nThis shows that difference distributes over union from the right. Both statements are true and Reason directly explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },

  // --- 10 Numerical questions ---
  {
    "question": "Let $A = \\{1, 2, 3, 4, 5\\}$ and $B = \\{3, 4, 5, 6, 7\\}$. Find the number of elements in the symmetric difference $(A \\Delta B) \\times (A \\cap B)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 12,
    "type": "numerical",
    "solution": "We compute the relevant sets:\n$$A \\cap B = \\{3, 4, 5\\} \\implies n(A \\cap B) = 3.$$\n$$A \\Delta B = (A \\cup B) \\setminus (A \\cap B) = \\{1, 2, 6, 7\\} \\implies n(A \\Delta B) = 4.$$\nTherefore, the number of elements in the Cartesian product is:\n$$n((A \\Delta B) \\times (A \\cap B)) = 4 \\times 3 = 12.$$\nThus, the answer is $12$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A$ and $B$ be two sets such that $n(A \\setminus B) = 24$, $n(B \\setminus A) = 19$, and $n(A \\cap B) = 11$. Find the total number of elements in $A \\cup B$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 54,
    "type": "numerical",
    "solution": "The sets $A \\setminus B$, $B \\setminus A$, and $A \\cap B$ form a disjoint partition of $A \\cup B$.\nTherefore:\n$$n(A \\cup B) = n(A \\setminus B) + n(B \\setminus A) + n(A \\cap B) = 24 + 19 + 11 = 54.$$\nThus, the answer is $54$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "If $A = \\{n \\in \\mathbb{N} : n \\le 100 \\text{ and } n \\text{ is a multiple of } 2\\}$ and $B = \\{n \\in \\mathbb{N} : n \\le 100 \\text{ and } n \\text{ is a multiple of } 3\\}$, find the cardinality of the symmetric difference $n(A \\Delta B)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 51,
    "type": "numerical",
    "solution": "For $n \\in \\{1, 2, \\dots, 100\\}$:\n$$n(A) = \\lfloor 100/2 \\rfloor = 50$$\n$$n(B) = \\lfloor 100/3 \\rfloor = 33$$\n$$n(A \\cap B) = \\lfloor 100/6 \\rfloor = 16.$$\nThe cardinality of the symmetric difference is:\n$$n(A \\Delta B) = n(A) + n(B) - 2n(A \\cap B) = 50 + 33 - 2(16) = 83 - 32 = 51.$$\nThus, the answer is $51$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A$ and $B$ be two sets such that $n(A) = 3$ and $n(B) = 6$. If $A \\subseteq B$, find the number of elements in the power set of $(B \\setminus A)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 8,
    "type": "numerical",
    "solution": "Since $A \\subseteq B$:\n$$n(B \\setminus A) = n(B) - n(A) = 6 - 3 = 3.$$\nThe number of elements in the power set $P(B \\setminus A)$ is:\n$$2^{n(B \\setminus A)} = 2^3 = 8.$$\nThus, the answer is $8$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A$ and $B$ be two finite sets having $m$ and $k$ elements respectively. If $n(A \\times B) = 35$ and $m < k$, find the number of non-empty subsets of $B \\setminus A$ given that $n(A \\cap B) = 2$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 31,
    "type": "numerical",
    "solution": "Since $n(A \\times B) = m \\times k = 35$ with $m < k$ and $m, k \\in \\mathbb{N}$, the factors of $35$ are $1, 5, 7, 35$.\nSince $n(A \\cap B) = 2$, we must have $m \\ge 2$, so $m = 5$ and $k = 7$.\nThus, $n(B) = 7$.\nNow:\n$$n(B \\setminus A) = n(B) - n(A \\cap B) = 7 - 2 = 5.$$\nThe number of non-empty subsets of $B \\setminus A$ is:\n$$2^5 - 1 = 32 - 1 = 31.$$\nThus, the answer is $31$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let universal set $U$ have $120$ elements. If $n(A) = 65$, $n(B) = 45$, and $n(A \\cup B)' = 25$, find $n(A \\cap B)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 15,
    "type": "numerical",
    "solution": "We know that:\n$$n(A \\cup B) = n(U) - n((A \\cup B)') = 120 - 25 = 95.$$\nUsing the union formula:\n$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$\n$$95 = 65 + 45 - n(A \\cap B)$$\n$$95 = 110 - n(A \\cap B) \\implies n(A \\cap B) = 110 - 95 = 15.$$\nThus, the answer is $15$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A$ and $B$ be two sets such that $n(A \\cap B) = 12$, $n(A \\setminus B) = 18$, and $n(B \\setminus A) = 22$. Find $n(A \\Delta B)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 40,
    "type": "numerical",
    "solution": "By definition of symmetric difference:\n$$n(A \\Delta B) = n(A \\setminus B) + n(B \\setminus A) = 18 + 22 = 40.$$\nThus, the answer is $40$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "If set $A$ has $4$ elements and set $B$ has $3$ elements, what is the number of relations from $A \\setminus B$ to $B \\setminus A$ given that $A \\cap B = \\emptyset$?",
    "options": [],
    "correctOption": null,
    "correctAnswer": 4096,
    "type": "numerical",
    "solution": "Since $A \\cap B = \\emptyset$:\n$$n(A \\setminus B) = n(A) = 4$$\n$$n(B \\setminus A) = n(B) = 3.$$\nThe number of elements in the Cartesian product $(A \\setminus B) \\times (B \\setminus A)$ is $4 \\times 3 = 12$.\nA relation is any subset of the Cartesian product.\nTherefore, the number of relations is:\n$$2^{12} = 4096.$$\nThus, the answer is $4096$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $A$ and $B$ be two sets such that $n(A) = 20$, $n(B) = 30$, and $n(A \\cup B) = 40$. Find the value of $n((A \\setminus B) \\cup (B \\setminus A))$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 30,
    "type": "numerical",
    "solution": "First find the intersection:\n$$n(A \\cap B) = n(A) + n(B) - n(A \\cup B) = 20 + 30 - 40 = 10.$$\nThe set $(A \\setminus B) \\cup (B \\setminus A)$ is the symmetric difference $A \\Delta B$, which satisfies:\n$$n(A \\Delta B) = n(A \\cup B) - n(A \\cap B) = 40 - 10 = 30.$$\nThus, the answer is $30$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  },
  {
    "question": "Let $S = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$, $A = \\{1, 2, 3, 4, 5, 6\\}$, and $B = \\{4, 5, 6, 7, 8\\}$. Find the number of subsets of $S$ that are disjoint from both $A \\setminus B$ and $B \\setminus A$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 32,
    "type": "numerical",
    "solution": "Compute the set differences:\n$$A \\setminus B = \\{1, 2, 3\\}$$\n$$B \\setminus A = \\{7, 8\\}.$$\nThe union of these two sets is:\n$$(A \\setminus B) \\cup (B \\setminus A) = \\{1, 2, 3, 7, 8\\},$$\nwhich contains $5$ elements.\nA subset of $S$ is disjoint from both sets if and only if it contains no elements from $\\{1, 2, 3, 7, 8\\}$.\nThus, all elements of the subset must be chosen from the remaining elements of $S$:\n$$S \\setminus \\{1, 2, 3, 7, 8\\} = \\{4, 5, 6, 9, 10\\},$$\nwhich contains $10 - 5 = 5$ elements.\nThe number of such subsets is:\n$$2^5 = 32.$$\nThus, the answer is $32$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Set operations (union, intersection, difference, complement)"
  }
];

module.exports = { subtopic2Questions };
