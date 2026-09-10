// scripts/data_jee_sets_subtopic5.js
// Subtopic 5: Types of functions (one-one, onto, composite, invertible) (30 questions: 10 MCQ, 10 AR, 10 NUM)

const subtopic5Questions = [
  // --- 10 MCQs ---
  {
    "question": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = x^3 + 5x + 1$. Then $f$ is:",
    "options": [
      "One-one and onto",
      "One-one but not onto",
      "Onto but not one-one",
      "Neither one-one nor onto"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "1. Differentiating $f(x)$:\n$$f'(x) = 3x^2 + 5.$$\nSince $x^2 \\ge 0$ for all $x \\in \\mathbb{R}$, we have $f'(x) \\ge 5 > 0$ for all $x \\in \\mathbb{R}$.\nBecause the derivative is strictly positive everywhere, $f(x)$ is strictly increasing on $\\mathbb{R}$, which implies that $f$ is strictly injective (one-one).\n2. As $x \\to \\infty$, $f(x) \\to \\infty$, and as $x \\to -\\infty$, $f(x) \\to -\\infty$. Since $f$ is a continuous polynomial of odd degree, by the Intermediate Value Theorem its range is $(-\\infty, \\infty) = \\mathbb{R}$.\nSince the range equals the codomain $\\mathbb{R}$, $f$ is surjective (onto).\nTherefore, $f$ is both one-one and onto (bijective).\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f: \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{1\\}$ be defined by $f(x) = \\frac{x - 3}{x - 2}$. Then $f^{-1}(x)$ is equal to:",
    "options": [
      "$\\frac{2x - 3}{x - 1}$",
      "$\\frac{3x - 2}{x - 1}$",
      "$\\frac{x - 2}{x - 3}$",
      "$\\frac{2x + 3}{x + 1}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Let $y = f(x) = \\frac{x - 3}{x - 2}$.\nCross-multiplying:\n$$y(x - 2) = x - 3 \\implies yx - 2y = x - 3.$$\nRearranging to isolate $x$:\n$$yx - x = 2y - 3 \\implies x(y - 1) = 2y - 3.$$\n$$x = \\frac{2y - 3}{y - 1}.$$\nInterchanging variables $x$ and $y$ gives:\n$$f^{-1}(x) = \\frac{2x - 3}{x - 1}.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f(x) = \\frac{x}{\\sqrt{1 + x^2}}$. If $f_n(x) = (f \\circ f \\circ \\dots \\circ f)(x)$ ($n$ times), then $f_n(x)$ is equal to:",
    "options": [
      "$\\frac{x}{\\sqrt{1 + n x^2}}$",
      "$\\frac{x}{(1 + x^2)^{n/2}}$",
      "$\\frac{nx}{\\sqrt{1 + x^2}}$",
      "$\\frac{x}{\\sqrt{n + x^2}}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Let us compute the first few compositions:\n$$f_1(x) = \\frac{x}{\\sqrt{1 + x^2}}.$$\n$$f_2(x) = f(f(x)) = \\frac{\\frac{x}{\\sqrt{1 + x^2}}}{\\sqrt{1 + \\left(\\frac{x}{\\sqrt{1 + x^2}}\\right)^2}} = \\frac{\\frac{x}{\\sqrt{1 + x^2}}}{\\sqrt{1 + \\frac{x^2}{1 + x^2}}} = \\frac{\\frac{x}{\\sqrt{1 + x^2}}}{\\sqrt{\\frac{1 + 2x^2}{1 + x^2}}} = \\frac{x}{\\sqrt{1 + 2x^2}}.$$\nBy mathematical induction, after $n$ compositions:\n$$f_n(x) = \\frac{x}{\\sqrt{1 + nx^2}}.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f: [0, \\infty) \\to [0, \\infty)$ be defined by $f(x) = \\frac{x}{1 + x}$. Then $f$ is:",
    "options": [
      "One-one but not onto",
      "Onto but not one-one",
      "Both one-one and onto",
      "Neither one-one nor onto"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "1. One-one: Let $f(x_1) = f(x_2)$ for $x_1, x_2 \\ge 0$.\n$$\\frac{x_1}{1 + x_1} = \\frac{x_2}{1 + x_2} \\implies x_1(1 + x_2) = x_2(1 + x_1) \\implies x_1 + x_1 x_2 = x_2 + x_1 x_2 \\implies x_1 = x_2.$$\nThus, $f$ is one-one.\n2. Onto: For $x \\ge 0$, $0 \\le \\frac{x}{1 + x} < 1$ because $x < 1 + x$. As $x \\to \\infty$, $f(x) \\to 1$.\nThus, the range of $f$ is $[0, 1)$, whereas the codomain is given as $[0, \\infty)$.\nSince the range $[0, 1) \\neq [0, \\infty)$, $f$ is not onto.\nTherefore, $f$ is one-one but not onto.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "If $f: \\mathbb{R} \\to \\mathbb{R}$ satisfies $f(x + y) = f(x) + f(y)$ for all $x, y \\in \\mathbb{R}$ and $f(1) = 5$, then $\\sum_{r=1}^{n} f(r)$ is equal to:",
    "options": [
      "$\\frac{5n(n + 1)}{2}$",
      "$5n^2$",
      "$\\frac{5n(n - 1)}{2}$",
      "$5n(n + 1)$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The Cauchy functional equation $f(x + y) = f(x) + f(y)$ with $f(1) = 5$ gives $f(x) = cx$ for rational numbers, where $c = f(1) = 5$. Thus for integers $r \\in \\mathbb{N}$, $f(r) = 5r$.\nThen the sum is:\n$$\\sum_{r=1}^{n} f(r) = \\sum_{r=1}^{n} 5r = 5 \\sum_{r=1}^{n} r = 5 \\times \\frac{n(n + 1)}{2} = \\frac{5n(n + 1)}{2}.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = e^x - e^{-x}$. Then $f$ is:",
    "options": [
      "Both one-one and onto",
      "One-one but not onto",
      "Onto but not one-one",
      "Neither one-one nor onto"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "1. Injective (one-one):\n$$f'(x) = e^x + e^{-x}.$$\nSince $e^x > 0$ for all $x \\in \\mathbb{R}$, $f'(x) = e^x + e^{-x} \\ge 2 > 0$.\nSince $f'(x) > 0$ everywhere, $f$ is strictly increasing on $\\mathbb{R}$, hence one-one.\n2. Surjective (onto):\n$$\\lim_{x \\to \\infty} f(x) = \\infty \\quad \\text{and} \\quad \\lim_{x \\to -\\infty} f(x) = -\\infty.$$\nSince $f$ is continuous, by the Intermediate Value Theorem, its range is $(-\\infty, \\infty) = \\mathbb{R}$.\nSince the range equals the codomain, $f$ is onto.\nThus, $f$ is bijective (both one-one and onto).\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f(x) = 2x - 1$ and $g(x) = \\frac{x + 1}{2}$. Then the composite function $(f \\circ g)(x)$ is:",
    "options": [
      "$x$",
      "$2x$",
      "$x - 1$",
      "$\\frac{x}{2}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Evaluating the composite function:\n$$(f \\circ g)(x) = f(g(x)) = f\\left(\\frac{x + 1}{2}\\right) = 2\\left(\\frac{x + 1}{2}\\right) - 1 = (x + 1) - 1 = x.$$\nHence, $(f \\circ g)(x) = x$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $A = \\{1, 2, 3\\}$ and $B = \\{a, b, c, d\\}$. The number of injective (one-one) functions from $A$ to $B$ is:",
    "options": [
      "$24$",
      "$64$",
      "$12$",
      "$81$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "An injective function maps distinct elements of $A$ to distinct elements of $B$.\nThe number of one-one functions from a set of size $m$ to a set of size $n$ (with $m \\le n$) is given by $^n P_m$.\nHere $m = 3$ and $n = 4$:\n$$^4 P_3 = \\frac{4!}{(4 - 3)!} = \\frac{24}{1} = 24.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = x|x|$. Then $f$ is:",
    "options": [
      "Both one-one and onto",
      "One-one but not onto",
      "Onto but not one-one",
      "Neither one-one nor onto"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "We write $f(x)$ piecewise:\n$$f(x) = \\begin{cases} x^2, & x \\ge 0 \\\\ -x^2, & x < 0 \\end{cases}$$\n- For $x \\ge 0$, $f(x) = x^2$ is strictly increasing from $0$ to $\\infty$.\n- For $x < 0$, $f(x) = -x^2$ is strictly increasing from $-\\infty$ to $0$.\nSince $f$ is strictly increasing over the entire real line $\\mathbb{R}$, it is one-one.\nFurthermore, the range covers $(-\\infty, \\infty) = \\mathbb{R}$, so it is onto.\nThus, $f$ is bijective, and its inverse is $f^{-1}(x) = \\text{sgn}(x)\\sqrt{|x|}$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "If $f(x) = \\frac{4^x}{4^x + 2}$, then the value of $f(x) + f(1 - x)$ is:",
    "options": [
      "$1$",
      "$\\frac{1}{2}$",
      "$2$",
      "$\\frac{3}{4}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "We evaluate $f(1 - x)$:\n$$f(1 - x) = \\frac{4^{1 - x}}{4^{1 - x} + 2} = \\frac{\\frac{4}{4^x}}{\\frac{4}{4^x} + 2} = \\frac{4}{4 + 2 \\cdot 4^x} = \\frac{2}{2 + 4^x} = \\frac{2}{4^x + 2}.$$\nNow adding $f(x)$ and $f(1 - x)$:\n$$f(x) + f(1 - x) = \\frac{4^x}{4^x + 2} + \\frac{2}{4^x + 2} = \\frac{4^x + 2}{4^x + 2} = 1.$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },

  // --- 10 Assertion-Reasoning questions ---
  {
    "question": "Statement I (Assertion): The function $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^3 - x$ is not one-one.\\nStatement II (Reason): $f(0) = f(1) = f(-1) = 0$, so distinct elements in the domain map to the same image.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "A function is one-one if and only if $f(x_1) = f(x_2) \\implies x_1 = x_2$. Here, $f(0) = 0^3 - 0 = 0$, $f(1) = 1^3 - 1 = 0$, and $f(-1) = (-1)^3 - (-1) = 0$. Since multiple distinct inputs produce output $0$, $f$ fails injectivity. Reason is the exact counterexample proving Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Statement I (Assertion): The composition of two bijective functions is always bijective.\\nStatement II (Reason): If $f: A \\to B$ and $g: B \\to C$ are both one-one and onto, then $(g \\circ f)$ is one-one and onto.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "Let $g(f(x_1)) = g(f(x_2))$. By injectivity of $g$, $f(x_1) = f(x_2)$, and by injectivity of $f$, $x_1 = x_2$. So $g \\circ f$ is one-one. For any $z \\in C$, surjectivity of $g$ gives $y \\in B$ with $g(y) = z$, and surjectivity of $f$ gives $x \\in A$ with $f(x) = y$, so $(g \\circ f)(x) = z$. Thus $g \\circ f$ is onto. Reason is the exact proof of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Statement I (Assertion): If $f: A \\to B$ and $g: B \\to C$ are such that $g \\circ f$ is one-one, then $f$ must be one-one.\\nStatement II (Reason): If $f$ were not one-one, there would exist $x_1 \\neq x_2$ with $f(x_1) = f(x_2)$, which would imply $(g \\circ f)(x_1) = g(f(x_1)) = g(f(x_2)) = (g \\circ f)(x_2)$, contradicting the injectivity of $g \\circ f$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "This is a standard theorem on function composition. If $g \\circ f$ is injective, then the inner function $f$ must be injective. Reason presents the precise proof by contradiction. Both statements are true and Reason explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Statement I (Assertion): If $f: A \\to B$ and $g: B \\to C$ are such that $g \\circ f$ is onto, then $g$ must be onto.\\nStatement II (Reason): For any $z \\in C$, since $g \\circ f$ is onto, there exists $x \\in A$ such that $(g \\circ f)(x) = z$, so setting $y = f(x) \\in B$ gives $g(y) = z$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "This is the companion theorem on surjectivity of compositions: if $g \\circ f$ is surjective, then the outer function $g$ must be surjective. Reason shows directly how every element $z \\in C$ has a pre-image $y = f(x) \\in B$. Both statements are true and Reason explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Statement I (Assertion): A function $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^2$ is not invertible.\\nStatement II (Reason): $f$ is neither one-one nor onto on $\\mathbb{R}$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "A function is invertible if and only if it is bijective. For $f(x) = x^2$ on $\\mathbb{R}$:\n- $f(-1) = f(1) = 1$, so it is not one-one.\n- Negative real numbers have no pre-images in $\\mathbb{R}$, so it is not onto.\nSince both conditions fail, $f$ is not invertible. Reason correctly explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Statement I (Assertion): If $f: \\mathbb{R} \\to \\mathbb{R}$ is strictly monotonic, then $f$ is an injective function.\\nStatement II (Reason): A strictly monotonic function satisfies $x_1 < x_2 \\implies f(x_1) < f(x_2)$ (or $f(x_1) > f(x_2)$), so $x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "Strict monotonicity prevents any two distinct inputs from sharing the same output because the output strictly increases (or strictly decreases). Thus $f(x_1) = f(x_2)$ is impossible for $x_1 \\neq x_2$. Reason directly establishes injectivity.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Statement I (Assertion): The function $f(x) = \\frac{ax + b}{cx - a}$ with $a^2 + bc \\neq 0$ and $x \\neq \\frac{a}{c}$ satisfies $(f \\circ f)(x) = x$.\\nStatement II (Reason): Any function that is symmetric about the line $y = x$ is its own inverse.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "Let $y = \\frac{ax + b}{cx - a}$.\nThen $y(cx - a) = ax + b \\implies cxy - ay = ax + b \\implies x(cy - a) = ay + b \\implies x = \\frac{ay + b}{cy - a}$.\nThis shows that $f^{-1}(x) = f(x)$. Hence $(f \\circ f)(x) = f(f^{-1}(x)) = x$. Geometrically, the graph of $f$ is symmetric across the line $y = x$, which is the geometric characterization of involutions. Both statements are true and Reason explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Statement I (Assertion): If $A$ and $B$ are finite sets with $|A| = 4$ and $|B| = 3$, there cannot exist any one-one function from $A$ to $B$.\\nStatement II (Reason): By the Pigeonhole Principle, if $|A| > |B|$, any function from $A$ to $B$ must map at least two distinct elements of $A$ to the same element of $B$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "If $|A| > |B|$, then assigning each of the $4$ pigeons in $A$ to one of the $3$ pigeonholes in $B$ forces at least one pigeonhole to hold $\\ge \\lceil 4/3 \\rceil = 2$ elements. Therefore, no injective function can exist. Reason explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Statement I (Assertion): The function $f: \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(n) = n + 1$ is bijective.\\nStatement II (Reason): Its inverse is given by $f^{-1}(n) = n - 1$, which is also a well-defined function from $\\mathbb{Z}$ to $\\mathbb{Z}$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "A function is bijective if and only if it admits a two-sided inverse. For $f(n) = n + 1$, $g(n) = n - 1$ satisfies $f(g(n)) = (n - 1) + 1 = n$ and $g(f(n)) = (n + 1) - 1 = n$ for all $n \\in \\mathbb{Z}$. Since $g$ is a valid function on $\\mathbb{Z}$, $f$ is bijective. Reason directly proves Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Statement I (Assertion): If $f: \\mathbb{R} \\to \\mathbb{R}$ is an even function, then $f$ cannot be one-one.\\nStatement II (Reason): By definition of an even function, $f(-x) = f(x)$ for all $x \\in \\mathbb{R}$, so for any non-zero real number $a$, the distinct inputs $a$ and $-a$ yield the same output $f(a)$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "For any non-zero real number $a$, $a \\neq -a$, but an even function satisfies $f(a) = f(-a)$. This directly violates the definition of injectivity ($f(x_1) = f(x_2) \\implies x_1 = x_2$). Reason is the exact proof of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },

  // --- 10 Numerical questions ---
  {
    "question": "Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{a, b, c\\}$. Find the total number of onto (surjective) functions from $A$ to $B$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 36,
    "type": "numerical",
    "solution": "The number of onto functions from a set of size $m = 4$ to a set of size $n = 3$ is given by:\n$$\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} (n - k)^m.$$\nFor $m = 4, n = 3$:\n$$\\binom{3}{0} 3^4 - \\binom{3}{1} 2^4 + \\binom{3}{2} 1^4 - \\binom{3}{3} 0^4$$\n$$= 1(81) - 3(16) + 3(1) - 0 = 81 - 48 + 3 = 36.$$\nAlternatively, partition $4$ elements into $3$ non-empty groups: sizes must be $2, 1, 1$.\nNumber of ways is $\\frac{4!}{2! 1! 1! 2!} \\times 3! = 6 \\times 6 = 36$.\nThus, the answer is $36$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f(x) = \\frac{2x + 1}{3x - 2}$ for $x \\neq \\frac{2}{3}$. Find the value of the composite function $(f \\circ f)(7)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 7,
    "type": "numerical",
    "solution": "We compute $f(7)$:\n$$f(7) = \\frac{2(7) + 1}{3(7) - 2} = \\frac{14 + 1}{21 - 2} = \\frac{15}{19}.$$\nNow compute $f\\left(\\frac{15}{19}\\right)$:\n$$f\\left(\\frac{15}{19}\\right) = \\frac{2\\left(\\frac{15}{19}\\right) + 1}{3\\left(\\frac{15}{19}\\right) - 2} = \\frac{\\frac{30 + 19}{19}}{\\frac{45 - 38}{19}} = \\frac{49}{7} = 7.$$\nIndeed, $(f \\circ f)(x) = x$ is an identity involution on its domain.\nThus, $(f \\circ f)(7) = 7$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ satisfy the equation $f(x) + 2f(1 - x) = x^2$ for all $x \\in \\mathbb{R}$. Find the value of $3f(-1)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 7,
    "type": "numerical",
    "solution": "We are given:\n$$f(x) + 2f(1 - x) = x^2 \\quad \\text{--- (1)}$$\nReplacing $x$ by $1 - x$:\n$$f(1 - x) + 2f(x) = (1 - x)^2 \\quad \\text{--- (2)}$$\nMultiplying equation (2) by $2$:\n$$4f(x) + 2f(1 - x) = 2(1 - x)^2.$$\nSubtracting equation (1) from this gives:\n$$3f(x) = 2(1 - x)^2 - x^2 = 2(1 - 2x + x^2) - x^2 = x^2 - 4x + 2.$$\nEvaluating at $x = -1$:\n$$3f(-1) = (-1)^2 - 4(-1) + 2 = 1 + 4 + 2 = 7.$$\nThus, the answer is $7$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $A = \\{1, 2, 3, 4\\}$. Find the total number of bijective functions $f: A \\to A$ such that $f(1) \\neq 1$ and $f(2) \\neq 2$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 14,
    "type": "numerical",
    "solution": "The total number of bijections on $A$ is $4! = 24$.\nLet $P_1$ be the property that $f(1) = 1$ and $P_2$ be the property that $f(2) = 2$.\nBy the Principle of Inclusion-Exclusion:\n- Number of bijections with $f(1) = 1$ is $3! = 6$.\n- Number of bijections with $f(2) = 2$ is $3! = 6$.\n- Number of bijections with both $f(1) = 1$ and $f(2) = 2$ is $2! = 2$.\nThe number of bijections having at least one of these fixed points is:\n$$N(P_1 \\cup P_2) = 6 + 6 - 2 = 10.$$\nTherefore, the number of bijections with $f(1) \\neq 1$ and $f(2) \\neq 2$ is:\n$$24 - 10 = 14.$$\nThus, the answer is $14$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f(x) = 3x - 5$. If $(f \\circ g)(x) = 6x + 7$, find the value of $g(4)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 12,
    "type": "numerical",
    "solution": "We are given:\n$$(f \\circ g)(x) = f(g(x)) = 3g(x) - 5.$$\nWe are also given:\n$$f(g(x)) = 6x + 7.$$\nEquating both expressions:\n$$3g(x) - 5 = 6x + 7 \\implies 3g(x) = 6x + 12 \\implies g(x) = 2x + 4.$$\nEvaluating at $x = 4$:\n$$g(4) = 2(4) + 4 = 8 + 4 = 12.$$\nThus, the answer is $12$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f(x)$ be a polynomial function satisfying $f(x) + f\\left(\\frac{1}{x}\\right) = f(x) f\\left(\\frac{1}{x}\\right)$ for all $x \\neq 0$. If $f(3) = 28$, find the value of $f(2)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 9,
    "type": "numerical",
    "solution": "The functional equation $f(x) + f\\left(\\frac{1}{x}\\right) = f(x) f\\left(\\frac{1}{x}\\right)$ for polynomial functions has the unique solution family:\n$$f(x) = 1 \\pm x^n, \\quad n \\in \\mathbb{N}.$$\nWe are given $f(3) = 28$.\n- If $f(x) = 1 + x^n$: $1 + 3^n = 28 \\implies 3^n = 27 \\implies n = 3$.\n- If $f(x) = 1 - x^n$: $1 - 3^n = 28 \\implies 3^n = -27$, which has no real solution.\nThus, $f(x) = 1 + x^3$.\nNow evaluating at $x = 2$:\n$$f(2) = 1 + 2^3 = 1 + 8 = 9.$$\nThus, the answer is $9$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f(x) = \\frac{9^x}{9^x + 3}$. Find the value of $2 \\sum_{k=1}^{19} f\\left(\\frac{k}{20}\\right)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 19,
    "type": "numerical",
    "solution": "We first observe the symmetry identity:\n$$f(1 - x) = \\frac{9^{1 - x}}{9^{1 - x} + 3} = \\frac{\\frac{9}{9^x}}{\\frac{9}{9^x} + 3} = \\frac{9}{9 + 3 \\cdot 9^x} = \\frac{3}{9^x + 3}.$$\nAdding $f(x)$ and $f(1 - x)$:\n$$f(x) + f(1 - x) = \\frac{9^x + 3}{9^x + 3} = 1.$$\nNow consider the sum $S = \\sum_{k=1}^{19} f\\left(\\frac{k}{20}\\right)$:\nWe pair the terms:\n$$f\\left(\\frac{1}{20}\\right) + f\\left(\\frac{19}{20}\\right) = 1$$\n$$f\\left(\\frac{2}{20}\\right) + f\\left(\\frac{18}{20}\\right) = 1$$\n$$\\vdots$$\n$$f\\left(\\frac{9}{20}\\right) + f\\left(\\frac{11}{20}\\right) = 1$$\nThere are $9$ such pairs, giving a sum of $9$.\nThe middle term is $f\\left(\\frac{10}{20}\\right) = f\\left(\\frac{1}{2}\\right) = \\frac{\\sqrt{9}}{\\sqrt{9} + 3} = \\frac{3}{6} = \\frac{1}{2}$.\nThus:\n$$S = 9 + \\frac{1}{2} = \\frac{19}{2}.$$\nMultiplying by $2$ gives:\n$$2S = 2 \\times \\frac{19}{2} = 19.$$\nThus, the answer is $19$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $A = \\{1, 2, 3\\}$ and $B = \\{1, 2, 3, 4, 5\\}$. Find the number of strictly increasing functions from $A$ to $B$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 10,
    "type": "numerical",
    "solution": "A function $f: A \\to B$ is strictly increasing if $1 < 2 < 3 \\implies f(1) < f(2) < f(3)$.\nAny selection of $3$ distinct elements from the $5$ elements of $B$ can be arranged in strictly increasing order in exactly one unique way.\nTherefore, the number of strictly increasing functions from $A$ to $B$ is:\n$$\\binom{5}{3} = \\frac{5 \\times 4}{2 \\times 1} = 10.$$\nThus, the answer is $10$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f: \\mathbb{R} \\setminus \\{0\\} \\to \\mathbb{R}$ satisfy $2f(x) + 3f\\left(\\frac{1}{x}\\right) = \\frac{1}{x} - 2$. Find the value of $5f(2)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 3,
    "type": "numerical",
    "solution": "We are given:\n$$2f(x) + 3f\\left(\\frac{1}{x}\\right) = \\frac{1}{x} - 2 \\quad \\text{--- (1)}$$\nReplacing $x$ by $\\frac{1}{x}$:\n$$3f(x) + 2f\\left(\\frac{1}{x}\\right) = x - 2 \\quad \\text{--- (2)}$$\nTo eliminate $f\\left(\\frac{1}{x}\\right)$, multiply (2) by $3$ and (1) by $2$:\n$$9f(x) + 6f\\left(\\frac{1}{x}\\right) = 3x - 6$$\n$$4f(x) + 6f\\left(\\frac{1}{x}\\right) = \\frac{2}{x} - 4$$\nSubtracting the two equations:\n$$5f(x) = 3x - \\frac{2}{x} - 2.$$\nSubstituting $x = 2$:\n$$5f(2) = 3(2) - \\frac{2}{2} - 2 = 6 - 1 - 2 = 3.$$\nThus, the answer is $3$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  },
  {
    "question": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = x^3 - 3x^2 + 3x - 1$. Find the value of $f^{-1}(27) + f^{-1}(0)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 5,
    "type": "numerical",
    "solution": "Notice that $f(x)$ is a perfect cube:\n$$f(x) = x^3 - 3x^2 + 3x - 1 = (x - 1)^3.$$\nSince $(x - 1)^3$ is strictly increasing on $\\mathbb{R}$, it is bijective and invertible.\nTo find $f^{-1}(y)$, solve $y = (x - 1)^3 \\implies x - 1 = y^{1/3} \\implies x = 1 + y^{1/3}$.\nThus:\n$$f^{-1}(y) = 1 + y^{1/3}.$$\nEvaluating the required terms:\n$$f^{-1}(27) = 1 + 27^{1/3} = 1 + 3 = 4$$\n$$f^{-1}(0) = 1 + 0^{1/3} = 1 + 0 = 1.$$\nTherefore:\n$$f^{-1}(27) + f^{-1}(0) = 4 + 1 = 5.$$\nThus, the answer is $5$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Types of functions (one-one, onto, composite, invertible)"
  }
];

module.exports = { subtopic5Questions };
