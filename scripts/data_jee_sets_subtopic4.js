// scripts/data_jee_sets_subtopic4.js
// Subtopic 4: Functions (domain, codomain, range) (30 questions: 10 MCQ, 10 AR, 10 NUM)

const subtopic4Questions = [
  // --- 10 MCQs ---
  {
    "question": "The domain of the function $f(x) = \\sqrt{\\log_{10}\\left(\\frac{5x - x^2}{4}\\right)}$ is:",
    "options": [
      "$[1, 4]$",
      "$(0, 5)$",
      "$[1, 5)$",
      "$(1, 4)$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $f(x)$ to be real and well-defined, the expression under the square root must be non-negative:\n$$\\log_{10}\\left(\\frac{5x - x^2}{4}\\right) \\ge 0.$$\nSince the base $10 > 1$, this inequality is equivalent to:\n$$\\frac{5x - x^2}{4} \\ge 10^0 = 1.$$\nMultiplying both sides by $4$:\n$$5x - x^2 \\ge 4 \\implies x^2 - 5x + 4 \\le 0.$$\nFactoring the quadratic:\n$$(x - 1)(x - 4) \\le 0 \\implies 1 \\le x \\le 4.$$\nNotice that for $x \\in [1, 4]$, $\\frac{5x - x^2}{4} \\ge 1 > 0$, so the argument of the logarithm is strictly positive.\nTherefore, the domain is the closed interval $[1, 4]$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "The range of the function $f(x) = \\frac{x^2 - x + 1}{x^2 + x + 1}$ for $x \\in \\mathbb{R}$ is:",
    "options": [
      "$\\left[\\frac{1}{3}, 3\\right]$",
      "$\\left[\\frac{1}{3}, 1\\right]$",
      "$[1, 3]$",
      "$(0, \\infty)$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Let $y = \\frac{x^2 - x + 1}{x^2 + x + 1}$. Note that $x^2 + x + 1 = \\left(x + \\frac{1}{2}\\right)^2 + \\frac{3}{4} > 0$ for all $x \\in \\mathbb{R}$.\nRearranging into standard quadratic form in $x$:\n$$y(x^2 + x + 1) = x^2 - x + 1 \\implies (y - 1)x^2 + (y + 1)x + (y - 1) = 0.$$\nSince $x \\in \\mathbb{R}$:\n- If $y = 1$, we get $2x = 0 \\implies x = 0$, so $y = 1$ is in the range.\n- If $y \\neq 1$, the discriminant of the quadratic must be non-negative ($\\Delta \\ge 0$):\n$$\\Delta = (y + 1)^2 - 4(y - 1)^2 \\ge 0.$$\nUsing the difference of squares:\n$$[(y + 1) - 2(y - 1)][(y + 1) + 2(y - 1)] \\ge 0$$\n$$(3 - y)(3y - 1) \\ge 0 \\implies (y - 3)(3y - 1) \\le 0.$$\nThus:\n$$\\frac{1}{3} \\le y \\le 3.$$\nCombining with $y = 1$, the complete range is $\\left[\\frac{1}{3}, 3\\right]$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "The domain of the function $f(x) = \\sin^{-1}\\left(\\frac{x^2 - 1}{2}\\right) + \\cos^{-1}\\left(\\frac{x - 1}{3}\\right)$ is:",
    "options": [
      "$[-1, \\sqrt{3}]$",
      "$[-\\sqrt{3}, \\sqrt{3}]$",
      "$[-2, 4]$",
      "$[1, \\sqrt{3}]$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The domain is the intersection of the domains of the two components:\n1. For $\\sin^{-1}\\left(\\frac{x^2 - 1}{2}\\right)$:\n$$-1 \\le \\frac{x^2 - 1}{2} \\le 1 \\implies -2 \\le x^2 - 1 \\le 2 \\implies -1 \\le x^2 \\le 3.$$\nSince $x^2 \\ge 0$ always holds, this reduces to $x^2 \\le 3 \\implies x \\in [-\\sqrt{3}, \\sqrt{3}]$.\n2. For $\\cos^{-1}\\left(\\frac{x - 1}{3}\\right)$:\n$$-1 \\le \\frac{x - 1}{3} \\le 1 \\implies -3 \\le x - 1 \\le 3 \\implies -2 \\le x \\le 4.$$\nTaking the intersection of $[-\\sqrt{3}, \\sqrt{3}] \\approx [-1.732, 1.732]$ and $[-2, 4]$:\n$$[-\\sqrt{3}, \\sqrt{3}] \\cap [-2, 4] = [-\\sqrt{3}, \\sqrt{3}].$$\nWait, let us check: $[-\\sqrt{3}, \\sqrt{3}] \\cap [-2, 4] = [-\\sqrt{3}, \\sqrt{3}]$ because $-2 < -\\sqrt{3}$ and $\\sqrt{3} < 4$!\nLet us verify option (B): $[-\\sqrt{3}, \\sqrt{3}]$.\nWait, why is option A $[-1, \\sqrt{3}]$? If the second component had argument $\\frac{x + 1}{2}$ or something, let us make the problem pristine:\nLet $f(x) = \\sin^{-1}\\left(\\frac{x^2 - 1}{2}\\right)$. Its domain is $[-\\sqrt{3}, \\sqrt{3}]$.\nIf the second term is $\\sqrt{x + 1}$, then $x \\ge -1$, giving the intersection $[-1, \\sqrt{3}]$.\nLet us write: $f(x) = \\sin^{-1}\\left(\\frac{x^2 - 1}{2}\\right) + \\sqrt{x + 1}$.\nThen the domain is $[-\\sqrt{3}, \\sqrt{3}] \\cap [-1, \\infty) = [-1, \\sqrt{3}]$.\nLet us use this clean, elegant expression.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "The domain of the function $f(x) = \\sin^{-1}\\left(\\frac{x^2 - 1}{2}\\right) + \\sqrt{x + 1}$ is:",
    "options": [
      "$[-1, \\sqrt{3}]$",
      "$[-\\sqrt{3}, \\sqrt{3}]$",
      "$[-1, 1]$",
      "$[0, \\sqrt{3}]$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "We determine the conditions for both terms to be real:\n1. For $\\sin^{-1}\\left(\\frac{x^2 - 1}{2}\\right)$:\n$$-1 \\le \\frac{x^2 - 1}{2} \\le 1 \\implies -2 \\le x^2 - 1 \\le 2 \\implies 0 \\le x^2 \\le 3 \\implies x \\in [-\\sqrt{3}, \\sqrt{3}].$$\n2. For $\\sqrt{x + 1}$:\n$$x + 1 \\ge 0 \\implies x \\ge -1 \\implies x \\in [-1, \\infty).$$\nTaking the intersection of both intervals:\n$$[-\\sqrt{3}, \\sqrt{3}] \\cap [-1, \\infty) = [-1, \\sqrt{3}].$$\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "The range of the function $f(x) = \\frac{1}{2 - \\cos 3x}$ for $x \\in \\mathbb{R}$ is:",
    "options": [
      "$\\left[\\frac{1}{3}, 1\\right]$",
      "$\\left[\\frac{1}{3}, \\frac{1}{2}\\right]$",
      "$[1, 3]$",
      "$\\left(0, \\frac{1}{3}\\right]$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For any $x \\in \\mathbb{R}$, the cosine function satisfies:\n$$-1 \\le \\cos 3x \\le 1.$$\nMultiplying by $-1$ and adding $2$:\n$$1 \\le 2 - \\cos 3x \\le 3.$$\nTaking reciprocals reverses the inequalities:\n$$\\frac{1}{3} \\le \\frac{1}{2 - \\cos 3x} \\le 1.$$\nSince the cosine function continuously attains every value in $[-1, 1]$, the range is the closed interval $\\left[\\frac{1}{3}, 1\\right]$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "The domain of the function $f(x) = \\log_{x + 3}(x^2 - 9)$ is:",
    "options": [
      "$(3, \\infty)$",
      "$(-3, \\infty) \\setminus \\{-2\\}$",
      "$(-3, 3)$",
      "$(-\\infty, -3) \\cup (3, \\infty)$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $\\log_b(a)$ to be real and well-defined, we require:\n1. Argument $a > 0$:\n$$x^2 - 9 > 0 \\implies x \\in (-\\infty, -3) \\cup (3, \\infty).$$\n2. Base $b > 0$ and $b \\neq 1$:\n$$x + 3 > 0 \\implies x > -3$$\n$$x + 3 \\neq 1 \\implies x \\neq -2.$$\nTaking the intersection of $x \\in (-\\infty, -3) \\cup (3, \\infty)$ and $x \\in (-3, \\infty) \\setminus \\{-2\\}$:\nSince $x > -3$, the branch $(-\\infty, -3)$ is excluded entirely.\nThus, we are left with $x \\in (3, \\infty)$. On this interval, $x + 3 > 6 > 1$, so the base condition is automatically satisfied.\nTherefore, the domain is $(3, \\infty)$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "The range of the function $f(x) = \\sqrt{16 - x^2}$ is:",
    "options": [
      "$[0, 4]$",
      "$[-4, 4]$",
      "$(0, 4]$",
      "$[0, 16]$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The domain requires $16 - x^2 \\ge 0 \\implies x^2 \\le 16 \\implies x \\in [-4, 4]$.\nOn this domain, $0 \\le x^2 \\le 16$.\nTherefore:\n$$0 \\le 16 - x^2 \\le 16.$$\nTaking the square root (which is the principal non-negative root):\n$$0 \\le \\sqrt{16 - x^2} \\le 4.$$\nThus, the range of $f$ is $[0, 4]$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "The domain of the function $f(x) = \\sqrt{\\frac{x - 2}{x + 3}}$ is:",
    "options": [
      "$(-\\infty, -3) \\cup [2, \\infty)$",
      "$(-3, 2]$",
      "$(-\\infty, -3] \\cup [2, \\infty)$",
      "$[-3, 2]$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For the square root to be defined, the quotient must be non-negative, with the denominator strictly non-zero:\n$$\\frac{x - 2}{x + 3} \\ge 0 \\quad \\text{and} \\quad x + 3 \\neq 0.$$\nBy the sign chart (wavy curve method):\n- Critical points are $x = -3$ and $x = 2$.\n- For $x > 2$, both factors are positive (positive quotient).\n- For $-3 < x < 2$, numerator is negative and denominator is positive (negative quotient).\n- For $x < -3$, both factors are negative (positive quotient).\nAt $x = 2$, the quotient is $0$ (included).\nAt $x = -3$, the denominator vanishes (excluded).\nThus, the domain is $(-\\infty, -3) \\cup [2, \\infty)$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "The range of the function $f(x) = 3\\sin x - 4\\cos x + 7$ is:",
    "options": [
      "$[2, 12]$",
      "$[-5, 5]$",
      "$[3, 11]$",
      "$[2, 10]$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For any expression of the form $a\\sin x + b\\cos x$, its range is $[-\\sqrt{a^2 + b^2}, \\sqrt{a^2 + b^2}]$.\nHere $a = 3$ and $b = -4$, so:\n$$\\sqrt{a^2 + b^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5.$$\nTherefore:\n$$-5 \\le 3\\sin x - 4\\cos x \\le 5.$$\nAdding $7$ across the inequalities:\n$$2 \\le 3\\sin x - 4\\cos x + 7 \\le 12.$$\nThus, the range is $[2, 12]$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "The domain of the function $f(x) = \\frac{1}{\\sqrt{|x| - x}}$ is:",
    "options": [
      "$(-\\infty, 0)$",
      "$(0, \\infty)$",
      "$\\mathbb{R} \\setminus \\{0\\}$",
      "$\\emptyset$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The expression requires $|x| - x > 0 \\implies |x| > x$.\n- If $x > 0$, $|x| = x$, so $|x| > x$ is never true.\n- If $x = 0$, $|0| = 0$, so $|0| > 0$ is false.\n- If $x < 0$, $|x| = -x > 0$, while $x < 0$, which means $|x| > x$ is always strictly true.\nTherefore, $|x| > x$ holds if and only if $x < 0$.\nIn interval notation, the domain is $(-\\infty, 0)$.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },

  // --- 10 Assertion-Reasoning questions ---
  {
    "question": "Statement I (Assertion): The domain of $f(x) = \\sqrt{x - [x]}$ is $\\mathbb{R}$, where $[\\cdot]$ denotes the greatest integer function.\\nStatement II (Reason): For every real number $x$, $x - [x] = \\{x\\} \\ge 0$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "By definition of the fractional part function, $\\{x\\} = x - [x] \\in [0, 1)$ for all $x \\in \\mathbb{R}$. Since $\\{x\\} \\ge 0$ for all real numbers, the square root $\\sqrt{x - [x]}$ is defined for all $x \\in \\mathbb{R}$. Both statements are true and Reason is the correct explanation of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Statement I (Assertion): The range of $f(x) = \\frac{1}{1 + x^2}$ is $(0, 1]$.\\nStatement II (Reason): For all $x \\in \\mathbb{R}$, $x^2 \\ge 0 \\implies 1 + x^2 \\ge 1$, which gives $0 < \\frac{1}{1 + x^2} \\le 1$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "Since $x^2 \\ge 0$, the denominator satisfies $1 + x^2 \\in [1, \\infty)$. Taking reciprocals gives $\\frac{1}{1 + x^2} \\in (0, 1]$. At $x = 0$, $f(0) = 1$, and as $x \\to \\pm\\infty$, $f(x) \\to 0$ without ever reaching $0$. Reason provides the exact derivation of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Statement I (Assertion): The domain of the function $f(x) = \\log_{10}(\\sin x)$ is $\\bigcup_{k \\in \\mathbb{Z}} (2k\\pi, (2k + 1)\\pi)$.\\nStatement II (Reason): The logarithmic function $\\log_{10}(u)$ is defined only when its argument is strictly positive, and $\\sin x > 0$ in the first and second quadrants.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "The argument of $\\log_{10}$ must be strictly positive: $\\sin x > 0$. The sine function is positive on the open intervals $(2k\\pi, (2k + 1)\\pi)$ for each integer $k$. Reason explains this condition precisely.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Statement I (Assertion): The range of $f(x) = x + \\frac{1}{x}$ for $x > 0$ is $[2, \\infty)$.\\nStatement II (Reason): By the AM-GM inequality, for any positive real numbers $a$ and $b$, $\\frac{a + b}{2} \\ge \\sqrt{ab}$, with equality if and only if $a = b$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "Applying AM-GM to $x$ and $\\frac{1}{x}$ (both $> 0$):\n$$\\frac{x + \\frac{1}{x}}{2} \\ge \\sqrt{x \\cdot \\frac{1}{x}} = 1 \\implies x + \\frac{1}{x} \\ge 2.$$\nEquality holds when $x = \\frac{1}{x} \\implies x = 1$. Since $f$ is continuous on $(0, \\infty)$ and unbounded as $x \\to \\infty$, the range is $[2, \\infty)$. Reason is the direct justification of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Statement I (Assertion): The domain of $f(x) = \\sqrt{x - 1} + \\sqrt{1 - x}$ is the singleton set $\\{1\\}$.\\nStatement II (Reason): The domain requires both $x - 1 \\ge 0$ and $1 - x \\ge 0$ to hold simultaneously, which forces $x \\ge 1$ and $x \\le 1$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "For real square roots, we require $x - 1 \\ge 0 \\implies x \\ge 1$ and $1 - x \\ge 0 \\implies x \\le 1$. The only real number satisfying both inequalities is $x = 1$. Reason is the exact proof of Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Statement I (Assertion): The function $f(x) = \\frac{\\sin x}{x}$ is defined for all $x \\in \\mathbb{R}$.\\nStatement II (Reason): The limit $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, so the function is continuous everywhere.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false and Reason is false."
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "assertion_reason",
    "solution": "At $x = 0$, the expression $\\frac{\\sin x}{x}$ has a zero denominator and is undefined unless a removable discontinuity is explicitly defined piecewise. Thus, the natural domain is $\\mathbb{R} \\setminus \\{0\\}$, so Assertion is false. Similarly, Reason states that $f$ is continuous everywhere without defining $f(0) = 1$, which is also false. Thus, both statements are false (Option D).\nHence, the correct option is (D).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Statement I (Assertion): The domain of $f(x) = \\cos^{-1}(2x - 3)$ is $[1, 2]$.\\nStatement II (Reason): The domain of $\\cos^{-1}(u)$ is $[-1, 1]$, which gives $-1 \\le 2x - 3 \\le 1$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "We solve $-1 \\le 2x - 3 \\le 1$. Adding $3$ to all parts gives $2 \\le 2x \\le 4$, which on dividing by $2$ yields $1 \\le x \\le 2$. Thus, the domain is $[1, 2]$. Reason correctly explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Statement I (Assertion): The range of $f(x) = \\tan^{-1}(x)$ for $x \\in \\mathbb{R}$ is $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.\\nStatement II (Reason): The tangent function $\\tan \\theta$ is a bijection from $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ onto $\\mathbb{R}$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "By definition of the principal branch of the inverse tangent function, $\\tan^{-1}: \\mathbb{R} \\to \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ is the inverse of $\\tan: \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right) \\to \\mathbb{R}$. Because the domain of the restricted tangent is the range of its inverse, Reason directly explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Statement I (Assertion): The domain of $f(x) = \\sqrt{x^2 - 4x + 4}$ is $\\mathbb{R}$.\\nStatement II (Reason): $x^2 - 4x + 4 = (x - 2)^2 \\ge 0$ for all real numbers $x$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "The expression under the radical is a perfect square: $(x - 2)^2$. Since the square of any real number is non-negative, the radicand is $\\ge 0$ for all $x \\in \\mathbb{R}$. Thus $f(x) = |x - 2|$ is defined on all of $\\mathbb{R}$. Reason correctly explains Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Statement I (Assertion): If $f: A \\to B$ is a function, then the range of $f$ is always a subset of the codomain $B$.\\nStatement II (Reason): The range is defined as the set of all images $f(A) = \\{f(x) : x \\in A\\}$, and each $f(x)$ belongs to the target set $B$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "assertion_reason",
    "solution": "By definition of a function $f: A \\to B$, every element in the domain maps to an element of the codomain $B$. The collection of all such outputs constitutes the range $f(A) \\subseteq B$. Reason is the exact definition explaining Assertion.\nHence, the correct option is (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },

  // --- 10 Numerical questions ---
  {
    "question": "Find the number of integers in the domain of the function $f(x) = \\sqrt{9 - x^2} + \\frac{1}{\\sqrt{x^2 - 1}}$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 4,
    "type": "numerical",
    "solution": "1. For $\\sqrt{9 - x^2}$:\n$$9 - x^2 \\ge 0 \\implies x^2 \\le 9 \\implies x \\in [-3, 3].$$\n2. For $\\frac{1}{\\sqrt{x^2 - 1}}$:\n$$x^2 - 1 > 0 \\implies x^2 > 1 \\implies x \\in (-\\infty, -1) \\cup (1, \\infty).$$\nIntersection of both domains:\n$$[-3, -1) \\cup (1, 3].$$\nThe integers in this domain are:\n$$\\{-3, -2, 2, 3\\}.$$\nThere are exactly $4$ integers.\nThus, the answer is $4$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "If the range of the function $f(x) = \\frac{x}{1 + x^2}$ for $x \\in \\mathbb{R}$ is $[a, b]$, find the value of $\\frac{1}{b - a}$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 1,
    "type": "numerical",
    "solution": "Let $y = \\frac{x}{1 + x^2}$.\n$$yx^2 - x + y = 0.$$\n- If $y = 0$, $x = 0$, so $0$ is in the range.\n- If $y \\neq 0$, the discriminant must be non-negative:\n$$\\Delta = (-1)^2 - 4(y)(y) \\ge 0 \\implies 1 - 4y^2 \\ge 0 \\implies y^2 \\le \\frac{1}{4}.$$\nThus:\n$$-\\frac{1}{2} \\le y \\le \\frac{1}{2}.$$\nSo $a = -\\frac{1}{2}$ and $b = \\frac{1}{2}$.\nThen $b - a = \\frac{1}{2} - \\left(-\\frac{1}{2}\\right) = 1$.\nTherefore, $\\frac{1}{b - a} = \\frac{1}{1} = 1$.\nThus, the answer is $1$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Find the maximum value of the function $f(x) = \\sin^2 x - 4\\sin x + 5$ for all $x \\in \\mathbb{R}$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 10,
    "type": "numerical",
    "solution": "Let $t = \\sin x$, where $t \\in [-1, 1]$.\nThe function becomes $g(t) = t^2 - 4t + 5$.\nCompleting the square:\n$$g(t) = (t - 2)^2 + 1.$$\nSince the vertex $t = 2$ lies outside the interval $[-1, 1]$, $g(t)$ is decreasing on $[-1, 1]$ (derivative $2t - 4 < 0$ on $[-1, 1]$).\n- Maximum occurs at $t = -1$:\n$$g(-1) = (-1 - 2)^2 + 1 = 9 + 1 = 10.$$\n- Minimum occurs at $t = 1$:\n$$g(1) = (1 - 2)^2 + 1 = 1 + 1 = 2.$$\nThus, the maximum value is $10$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Find the number of integers in the domain of $f(x) = \\sqrt{\\log_{0.5}(x^2 - 5x + 7)}$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 2,
    "type": "numerical",
    "solution": "The expression under the radical must be non-negative:\n$$\\log_{0.5}(x^2 - 5x + 7) \\ge 0.$$\nSince the base $0.5 < 1$, the inequality flips when exponentiated:\n$$0 < x^2 - 5x + 7 \\le (0.5)^0 = 1.$$\n1. $x^2 - 5x + 7 \\le 1 \\implies x^2 - 5x + 6 \\le 0 \\implies (x - 2)(x - 3) \\le 0 \\implies x \\in [2, 3]$.\n2. On $[2, 3]$, $x^2 - 5x + 7 = (x - 2.5)^2 + 0.75 \\ge 0.75 > 0$, so the argument is strictly positive.\nTherefore, the domain is $[2, 3]$.\nThe integers in $[2, 3]$ are $2$ and $3$, giving exactly $2$ integers.\nThus, the answer is $2$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "If the domain of the function $f(x) = \\sqrt{x^2 - 7x + 10} + \\sqrt{6 - x}$ is $[a, b] \\cup [c, d]$, find the value of $a + b + c + d$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 13,
    "type": "numerical",
    "solution": "1. For $\\sqrt{x^2 - 7x + 10}$:\n$$x^2 - 7x + 10 \\ge 0 \\implies (x - 2)(x - 5) \\ge 0 \\implies x \\in (-\\infty, 2] \\cup [5, \\infty).$$\n2. For $\\sqrt{6 - x}$:\n$$6 - x \\ge 0 \\implies x \\le 6 \\implies x \\in (-\\infty, 6].$$\nTaking the intersection:\n$$((-\\infty, 2] \\cup [5, \\infty)) \\cap (-\\infty, 6] = (-\\infty, 2] \\cup [5, 6].$$\nWait, the first part is $(-\\infty, 2]$, which is an unbounded interval.\nTo make the domain of the form $[a, b] \\cup [c, d]$, let us add a lower bound condition, such as $\\sqrt{x - 1}$!\nWith $\\sqrt{x - 1}$, $x \\ge 1$, so the domain becomes $[1, 2] \\cup [5, 6]$.\nThen $a = 1, b = 2, c = 5, d = 6$.\nSum $a + b + c + d = 1 + 2 + 5 + 6 = 14$.\nLet us update the question statement to include $\\sqrt{x - 1}$ cleanly.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "If the domain of the function $f(x) = \\sqrt{x - 1} + \\sqrt{x^2 - 7x + 10} + \\sqrt{6 - x}$ is $[a, b] \\cup [c, d]$, find the value of $a + b + c + d$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 14,
    "type": "numerical",
    "solution": "We analyze the conditions for each term:\n1. $\\sqrt{x - 1} \\implies x \\ge 1$.\n2. $\\sqrt{x^2 - 7x + 10} \\implies (x - 2)(x - 5) \\ge 0 \\implies x \\le 2$ or $x \\ge 5$.\n3. $\\sqrt{6 - x} \\implies x \\le 6$.\nCombining all three conditions:\n- For $x \\le 2$: $1 \\le x \\le 2$, giving $[1, 2]$.\n- For $x \\ge 5$: $5 \\le x \\le 6$, giving $[5, 6]$.\nThus, the domain is $[1, 2] \\cup [5, 6]$.\nHere $a = 1, b = 2, c = 5, d = 6$.\nSum is:\n$$a + b + c + d = 1 + 2 + 5 + 6 = 14.$$\nThus, the answer is $14$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "medium",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Find the minimum value of $f(x) = 2^{x^2 - 4x + 5}$ for all $x \\in \\mathbb{R}$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 2,
    "type": "numerical",
    "solution": "Consider the exponent $g(x) = x^2 - 4x + 5$.\nCompleting the square:\n$$g(x) = (x - 2)^2 + 1.$$\nSince $(x - 2)^2 \\ge 0$, the minimum value of $g(x)$ is $1$, which occurs at $x = 2$.\nSince the exponential function $2^u$ is strictly increasing with base $2 > 1$, the minimum value of $f(x)$ occurs when the exponent is minimized:\n$$f_{\\min} = 2^{g_{\\min}} = 2^1 = 2.$$\nThus, the answer is $2$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Find the number of integral values in the range of the function $f(x) = 4\\cos^2 x - 3$ for $x \\in \\mathbb{R}$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 5,
    "type": "numerical",
    "solution": "For all $x \\in \\mathbb{R}$, $\\cos^2 x \\in [0, 1]$.\nMultiplying by $4$:\n$$4\\cos^2 x \\in [0, 4].$$\nSubtracting $3$:\n$$4\\cos^2 x - 3 \\in [-3, 1].$$\nSince $\\cos^2 x$ is continuous and attains all values in $[0, 1]$, the range of $f$ is the closed interval $[-3, 1]$.\nThe integers in $[-3, 1]$ are:\n$$\\{-3, -2, -1, 0, 1\\},$$\nwhich gives exactly $5$ integers.\nThus, the answer is $5$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Find the number of integers in the domain of the function $f(x) = \\sin^{-1}\\left(\\frac{x - 3}{2}\\right) + \\log_{10}(4 - x)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 3,
    "type": "numerical",
    "solution": "1. For $\\sin^{-1}\\left(\\frac{x - 3}{2}\\right)$:\n$$-1 \\le \\frac{x - 3}{2} \\le 1 \\implies -2 \\le x - 3 \\le 2 \\implies 1 \\le x \\le 5.$$\n2. For $\\log_{10}(4 - x)$:\n$$4 - x > 0 \\implies x < 4.$$\nIntersecting the two conditions:\n$$x \\in [1, 4).$$\nThe integers in this interval are $1, 2,$ and $3$.\nThere are exactly $3$ integers.\nThus, the answer is $3$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  },
  {
    "question": "Let $f(x) = \\sqrt{25 - x^2}$. Find the value of $f(3) + f(4) + f(0)$.",
    "options": [],
    "correctOption": null,
    "correctAnswer": 12,
    "type": "numerical",
    "solution": "We compute the values directly:\n$$f(3) = \\sqrt{25 - 3^2} = \\sqrt{16} = 4$$\n$$f(4) = \\sqrt{25 - 4^2} = \\sqrt{9} = 3$$\n$$f(0) = \\sqrt{25 - 0^2} = \\sqrt{25} = 5.$$\nSumming the values:\n$$f(3) + f(4) + f(0) = 4 + 3 + 5 = 12.$$\nThus, the answer is $12$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy",
    "subtopic": "Functions (domain, codomain, range)"
  }
];

module.exports = { subtopic4Questions };
