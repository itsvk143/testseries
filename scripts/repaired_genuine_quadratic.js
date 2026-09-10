// scripts/repaired_genuine_quadratic.js
// 61 Repaired genuine Quadratic Equations questions with verified keys and solutions

const repairedGenuineQuadratic = [
  {
    "_id": "6a98e658910bb37b0e5585a8",
    "question": "For the quadratic equation $ax^2 + bx + c = 0$, the nature of roots is determined by the discriminant, $ \\Delta $. If $ \\Delta = 0 $, what is the nature of the roots?",
    "options": [
      "The roots are real and distinct.",
      "The roots are real and equal.",
      "The roots are imaginary.",
      "The roots are rational."
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "For the quadratic equation $ax^2 + bx + c = 0$, if the discriminant $\\Delta = b^2 - 4ac = 0$, the roots given by the quadratic formula $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$ are both equal to $-\\frac{b}{2a}$. Hence, the roots are real and equal.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e658910bb37b0e5585a9",
    "question": "Consider the quadratic equation $x^2 - 5x + 6 = 0$. What is the nature of its roots?",
    "options": [
      "Real and distinct",
      "Real and equal",
      "Imaginary",
      "One real, one imaginary"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "The discriminant of $x^2 - 5x + 6 = 0$ is $\\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1 > 0$. Since $\\Delta > 0$, the roots are real and distinct (specifically, $x = 2$ and $x = 3$).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e658910bb37b0e5585aa",
    "question": "For the quadratic equation $2x^2 + 4x + 3 = 0$, what is the nature of the roots?",
    "options": [
      "Real and distinct",
      "Real and equal",
      "Imaginary",
      "Equal and imaginary"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "For $2x^2 + 4x + 3 = 0$, $\\Delta = 4^2 - 4(2)(3) = 16 - 24 = -8 < 0$. Since $\\Delta < 0$, the roots are imaginary.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e658910bb37b0e5585ab",
    "question": "If a quadratic equation has a discriminant $ \\Delta < 0 $, then its roots are:",
    "options": [
      "Real and equal",
      "Real and distinct",
      "Imaginary and distinct",
      "Rational"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "If $\\Delta < 0$, the square root of the discriminant involves $i = \\sqrt{-1}$, so the roots are complex conjugates (imaginary and distinct).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e658910bb37b0e5585ac",
    "question": "Determine the nature of the roots for the equation $9x^2 - 12x + 4 = 0$",
    "options": [
      "Real and distinct",
      "Real and equal",
      "Imaginary",
      "None of the above"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "For $9x^2 - 12x + 4 = 0$, $\\Delta = (-12)^2 - 4(9)(4) = 144 - 144 = 0$. Since $\\Delta = 0$, the roots are real and equal.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e658910bb37b0e5585ad",
    "question": "Given the quadratic equation $kx^2 + 6x + 3 = 0$, if the roots are real and equal, what is the value of $ k $?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "For real and equal roots, the discriminant must be zero: $\\Delta = b^2 - 4ac = 0$. Here $a = k, b = 6, c = 3$. So $6^2 - 4(k)(3) = 0 \\implies 36 - 12k = 0 \\implies k = 3$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e658910bb37b0e5585ae",
    "question": "Consider the quadratic equation $x^2 + px + 4 = 0$. If the equation has imaginary roots, which of the following could be a value of $ p $?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For imaginary roots, $\\Delta = b^2 - 4ac < 0$. Here $p^2 - 4(1)(4) < 0 \\implies p^2 < 16 \\implies -4 < p < 4$. Among the given options, only $p = 3$ lies in this interval.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e658910bb37b0e5585af",
    "question": "The quadratic equation $ax^2 + bx + c = 0$ has real and distinct roots if:",
    "options": [
      "$ b^2 - 4ac = 0 $",
      "$ b^2 - 4ac < 0 $",
      "$ b^2 - 4ac > 0 $",
      "$ b^2 - 4ac \\le 0 $"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "A quadratic equation $ax^2 + bx + c = 0$ with real coefficients has real and distinct roots if and only if its discriminant $\\Delta = b^2 - 4ac > 0$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e658910bb37b0e5585b0",
    "question": "What is the nature of the roots of the equation $x^2 - \\sqrt{2}x + 1 = 0$?",
    "options": [
      "Real and distinct",
      "Real and equal",
      "Imaginary",
      "Rational"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "For $x^2 - \\sqrt{2}x + 1 = 0$, $\\Delta = (-\\sqrt{2})^2 - 4(1)(1) = 2 - 4 = -2 < 0$. Hence, the roots are imaginary.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e658910bb37b0e5585b1",
    "question": "For the quadratic equation $3x^2 - 5x + k = 0$, if the roots are real and equal, find the value of $ k $.",
    "options": [
      "$\\frac{25}{12}$",
      "$\\frac{25}{6}$",
      "$\\frac{5}{6}$",
      "$\\frac{5}{12}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For equal roots, $\\Delta = (-5)^2 - 4(3)(k) = 0 \\implies 25 - 12k = 0 \\implies k = \\frac{25}{12}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Nature of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585c6",
    "question": "If $\\alpha$ and $\\beta$ are the roots of the quadratic equation $ax^2 + bx + c = 0$, then the sum of the roots is given by:",
    "options": [
      "$-\\frac{b}{a}$",
      "$\\frac{c}{a}$",
      "$-\\frac{c}{a}$",
      "$\\frac{b}{c}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $ax^2 + bx + c = 0$ with roots $\\alpha, \\beta$, by Vieta's formulas, the sum of roots is $\\alpha + \\beta = -\\frac{b}{a}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585c7",
    "question": "For the quadratic equation $2x^2 - 5x + 3 = 0$, what is the sum of its roots?",
    "options": [
      "$-\\frac{5}{2}$",
      "$\\frac{3}{2}$",
      "$\\frac{5}{2}$",
      "$-\\frac{3}{2}$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "For $2x^2 - 5x + 3 = 0$, $a = 2, b = -5$. Sum of roots $= -\\frac{b}{a} = -\\frac{-5}{2} = \\frac{5}{2}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585c8",
    "question": "Given the quadratic equation $3x^2 + 6x + 9 = 0$, what is the product of its roots?",
    "options": [
      "$-\\frac{6}{3}$",
      "$-\\frac{9}{3}$",
      "$\\frac{9}{3}$",
      "$\\frac{6}{9}$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "For $3x^2 + 6x + 9 = 0$, $a = 3, c = 9$. Product of roots $= \\frac{c}{a} = \\frac{9}{3} = 3$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585c9",
    "question": "If the roots of the quadratic equation $x^2 - kx + 12 = 0$ are 3 and 4, find the value of $k$ (sum of roots).",
    "options": [
      "$7$",
      "$12$",
      "$3$",
      "$4$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $x^2 - kx + 12 = 0$, the sum of roots is $k$. Since the roots are 3 and 4, $k = 3 + 4 = 7$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585ca",
    "question": "Consider the equation $x^2 + 5x + 6 = 0$. If the roots are $\\alpha$ and $\\beta$, what is the value of $\\alpha \\times \\beta$?",
    "options": [
      "$5$",
      "$6$",
      "$1$",
      "$30$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "For $x^2 + 5x + 6 = 0$, the product of the roots $\\alpha \\beta = \\frac{c}{a} = \\frac{6}{1} = 6$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585cb",
    "question": "Find the quadratic equation whose roots are 2 and -3.",
    "options": [
      "$x^2 - x - 6 = 0$",
      "$x^2 + x - 6 = 0$",
      "$x^2 - 5x + 6 = 0$",
      "$x^2 + 5x + 6 = 0$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "Roots are 2 and -3. Sum $= 2 + (-3) = -1$, Product $= 2(-3) = -6$. The equation is $x^2 - (\\text{sum})x + \\text{product} = 0 \\implies x^2 + x - 6 = 0$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585cc",
    "question": "If one root of the equation $x^2 - 7x + k = 0$ is 2, what is the other root?",
    "options": [
      "$5$",
      "$9$",
      "$14$",
      "$3.5$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Sum of roots $= 7$. If one root is 2, the other root is $7 - 2 = 5$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585cd",
    "question": "For the equation $4x^2 + 8x + 3 = 0$, if the roots are $\\alpha$ and $\\beta$, what is the value of $\\alpha + \\beta$?",
    "options": [
      "$2$",
      "$-\\frac{3}{4}$",
      "$1$",
      "$-\\frac{8}{4}$"
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "single_choice",
    "solution": "For $4x^2 + 8x + 3 = 0$, sum of roots $\\alpha + \\beta = -\\frac{b}{a} = -\\frac{8}{4} = -2$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585ce",
    "question": "What is the product of the roots of the equation $5x^2 - 10x + 20 = 0$?",
    "options": [
      "$2$",
      "$4$",
      "$10$",
      "$5$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "For $5x^2 - 10x + 20 = 0$, product of roots $= \\frac{c}{a} = \\frac{20}{5} = 4$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585cf",
    "question": "If the sum of the roots of the quadratic equation $kx^2 + 4x + 2 = 0$ is -1, find the value of $k$ (product of roots).",
    "options": [
      "$2$",
      "$4$",
      "$1$",
      "$3$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "Sum of roots $= -\\frac{4}{k} = -1 \\implies k = 4$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Sum and product of roots"
  },
  {
    "_id": "6a98e660910bb37b0e5585d0",
    "question": "If the roots of the quadratic equation $ax^2 + bx + c = 0$ are $\\alpha$ and $\\beta$, then the sum of the roots is given by:",
    "options": [
      "$\\frac{c}{a}$",
      "$\\frac{-b}{a}$",
      "$\\frac{b}{c}$",
      "$\\frac{-c}{b}$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "By Vieta's formulas, sum of roots is $\\frac{-b}{a}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585d1",
    "question": "For the quadratic equation $2x^2 - 5x + 3 = 0$, find the product of its roots.",
    "options": [
      "$-\\frac{3}{2}$",
      "$-\\frac{5}{2}$",
      "$\\frac{5}{2}$",
      "$\\frac{3}{2}$"
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "single_choice",
    "solution": "For $2x^2 - 5x + 3 = 0$, product of roots $= \\frac{c}{a} = \\frac{3}{2}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585d2",
    "question": "If one root of the quadratic equation $x^2 - 6x + k = 0$ is 2, find the value of k.",
    "options": [
      "8",
      "6",
      "4",
      "12"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Sum of roots $= 6$. If one root is 2, the other root is $6 - 2 = 4$. Product of roots $= k = 2 \\times 4 = 8$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585d3",
    "question": "What is the nature of the roots of the quadratic equation $x^2 + 4x + 4 = 0$?",
    "options": [
      "Real and distinct",
      "Real and equal",
      "Complex and distinct",
      "No real roots"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "For $x^2 + 4x + 4 = (x + 2)^2 = 0$, $\\Delta = 16 - 16 = 0$. The roots are real and equal ($x = -2$).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585d4",
    "question": "Find the quadratic equation whose roots are 3 and -2.",
    "options": [
      "$x^2 + x - 6 = 0$",
      "$x^2 - x - 6 = 0$",
      "$x^2 + x + 6 = 0$",
      "$x^2 - x + 6 = 0$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "Sum of roots $= 3 + (-2) = 1$. Product of roots $= 3 \\times (-2) = -6$. The quadratic equation is $x^2 - (\\text{sum})x + \\text{product} = 0 \\implies x^2 - x - 6 = 0$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585d5",
    "question": "If the roots of $3x^2 + kx + 12 = 0$ are equal, find the value of k.",
    "options": [
      "12",
      "-12",
      "$\\pm 12$",
      "$\\pm 36$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "For equal roots, $\\Delta = k^2 - 4(3)(12) = 0 \\implies k^2 - 144 = 0 \\implies k = \\pm 12$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585d6",
    "question": "Consider the equation $x^2 - 7x + 10 = 0$. What are the roots?",
    "options": [
      "5 and 2",
      "-5 and -2",
      "5 and -2",
      "-5 and 2"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "$x^2 - 7x + 10 = (x - 5)(x - 2) = 0 \\implies x = 5$ and $x = 2$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585d7",
    "question": "If ${\\alpha}$ and ${\\beta}$ are the roots of $x^2 - 5x + 6 = 0$, find the value of ${\\frac{1}{\\alpha}} + {\\frac{1}{\\beta}}$.",
    "options": [
      "$-\\frac{5}{6}$",
      "$\\frac{5}{6}$",
      "$-\\frac{6}{5}$",
      "$\\frac{6}{5}$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "For $x^2 - 5x + 6 = 0$, $\\alpha + \\beta = 5$ and $\\alpha \\beta = 6$. Then $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha \\beta} = \\frac{5}{6}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585d8",
    "question": "The quadratic equation $x^2 + px + q = 0$ has roots $m$ and $n$. If $m+n=5$ and $mn=6$, what are the values of $p$ and $q$?",
    "options": [
      "p=5, q=6",
      "p=-5, q=6",
      "p=5, q=-6",
      "p=-5, q=-6"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "The quadratic equation is $x^2 - (m + n)x + mn = 0 \\implies x^2 - 5x + 6 = 0$. Comparing with $x^2 + px + q = 0$ gives $p = -5, q = 6$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585d9",
    "question": "If the roots of the quadratic equation $kx^2 - 4x + 2 = 0$ are reciprocals of each other, find the value of k.",
    "options": [
      "2",
      "1",
      "-2",
      "4"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "If roots are reciprocals, product of roots $= 1 \\implies \\frac{c}{a} = 1 \\implies \\frac{2}{k} = 1 \\implies k = 2$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Roots of polynomial"
  },
  {
    "_id": "6a98e660910bb37b0e5585da",
    "question": "Solve the quadratic inequality: $x^2 - 5x + 6 < 0$",
    "options": [
      "$x < 2 \\text{ or } x > 3$",
      "$2 < x < 3$",
      "$x \\le 2 \\text{ or } x \\ge 3$",
      "$2 \\le x \\le 3$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$x^2 - 5x + 6 < 0 \\implies (x - 2)(x - 3) < 0 \\implies 2 < x < 3$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e660910bb37b0e5585db",
    "question": "Find the solution set for the inequality: $2x^2 + 7x - 4 \\ge 0$",
    "options": [
      "$-\\frac{1}{2} \\le x \\le 4$",
      "$x \\le -4 \\text{ or } x \\ge \\frac{1}{2}$",
      "$x < -4 \\text{ or } x > \\frac{1}{2}$",
      "$-\\infty < x < -4 \\text{ or } \\frac{1}{2} < x < \\infty$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$2x^2 + 7x - 4 \\ge 0 \\implies (2x - 1)(x + 4) \\ge 0 \\implies x \\le -4 \\text{ or } x \\ge \\frac{1}{2}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e660910bb37b0e5585dc",
    "question": "Which values of $x$ satisfy $-x^2 + 4x - 3 > 0$?",
    "options": [
      "$x < 1 \\text{ or } x > 3$",
      "$1 < x < 3$",
      "$x \\le 1 \\text{ or } x \\ge 3$",
      "$1 \\le x \\le 3$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$-x^2 + 4x - 3 > 0 \\implies x^2 - 4x + 3 < 0 \\implies (x - 1)(x - 3) < 0 \\implies 1 < x < 3$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e660910bb37b0e5585dd",
    "question": "Determine the solution for $3x^2 - 11x - 4 \\le 0$",
    "options": [
      "$-\\frac{1}{3} \\le x \\le 4$",
      "$x \\le -\\frac{1}{3} \\text{ or } x \\ge 4$",
      "$x < -\\frac{1}{3} \\text{ or } x > 4$",
      "$-\\infty < x < -\\frac{1}{3} \\text{ or } 4 < x < \\infty$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "$3x^2 - 11x - 4 \\le 0 \\implies (3x + 1)(x - 4) \\le 0 \\implies -\\frac{1}{3} \\le x \\le 4$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e660910bb37b0e5585de",
    "question": "Solve the inequality $x^2 + 2x + 1 \\le 0$",
    "options": [
      "$x = -1$",
      "$x \\le -1$",
      "$x \\ge -1$",
      "All real numbers"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "$x^2 + 2x + 1 \\le 0 \\implies (x + 1)^2 \\le 0$. Since a square is always $\\ge 0$, the only solution is $x + 1 = 0 \\implies x = -1$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e660910bb37b0e5585df",
    "question": "Find the solution set for $x^2 - 9 > 0$",
    "options": [
      "$x < -3 \\text{ or } x > 3$",
      "$x = -3 \\text{ or } x = 3$",
      "$-3 < x < 3$",
      "No solution"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "$x^2 - 9 > 0 \\implies (x - 3)(x + 3) > 0 \\implies x < -3 \\text{ or } x > 3$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e660910bb37b0e5585e0",
    "question": "Solve the inequality $-2x^2 + 5x + 3 < 0$",
    "options": [
      "$-\\frac{1}{2} < x < 3$",
      "$x < -\\frac{1}{2} \\text{ or } x > 3$",
      "$x \\le -\\frac{1}{2} \\text{ or } x \\ge 3$",
      "$-\\infty < x < -\\frac{1}{2} \\text{ or } 3 < x < \\infty$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$-2x^2 + 5x + 3 < 0 \\implies 2x^2 - 5x - 3 > 0 \\implies (2x + 1)(x - 3) > 0 \\implies x < -\\frac{1}{3} \\text{ or } x > 3$ (here $x < -\\frac{1}{2} \\text{ or } x > 3$).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e660910bb37b0e5585e1",
    "question": "What is the solution to $4x^2 - 1 \\le 0$?",
    "options": [
      "$x \\le -2 \\text{ or } x \\ge 2$",
      "$-\\frac{1}{2} \\le x \\le \\frac{1}{2}$",
      "$x < -2 \\text{ or } x > 2$",
      "$-\\infty < x < -\\frac{1}{2} \\text{ or } \\frac{1}{2} < x < \\infty$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$4x^2 - 1 \\le 0 \\implies x^2 \\le \\frac{1}{4} \\implies -\\frac{1}{2} \\le x \\le \\frac{1}{2}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e660910bb37b0e5585e2",
    "question": "Solve the inequality $x^2 + 6x + 9 \\ge 0$",
    "options": [
      "$x = -3$",
      "All real numbers",
      "$x \\le -3$",
      "$x \\ge -3$"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$x^2 + 6x + 9 = (x + 3)^2 \\ge 0$, which holds true for all real numbers $x$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e660910bb37b0e5585e3",
    "question": "Find the values of $x$ for which $x^2 - x - 2 > 0$",
    "options": [
      "$-1 < x < 2$",
      "$x < -1 \\text{ or } x > 2$",
      "$x \\le -1 \\text{ or } x \\ge 2$",
      "No solution"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$x^2 - x - 2 > 0 \\implies (x - 2)(x + 1) > 0 \\implies x < -1 \\text{ or } x > 2$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Quadratic inequalities"
  },
  {
    "_id": "6a98e66c910bb37b0e5585e4",
    "question": "For the quadratic equation $ax^2 + bx + c = 0$, the discriminant is given by:",
    "options": [
      "$b^2 - 4ac$",
      "$b^2 + 4ac$",
      "$b - \\sqrt{4ac}$",
      "$b^2 - \\sqrt{c}$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $ax^2 + bx + c = 0$, the discriminant is defined as $\\Delta = b^2 - 4ac$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585e5",
    "question": "What is the value of the discriminant for the quadratic equation $x^2 - 5x + 6 = 0$?",
    "options": [
      "1",
      "25",
      "24",
      "-1"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $x^2 - 5x + 6 = 0$, $\\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585e6",
    "question": "If the discriminant of a quadratic equation is positive ($\\Delta > 0$), what can be said about its roots?",
    "options": [
      "There are no real roots.",
      "There is exactly one real root.",
      "There are two distinct real roots.",
      "There are two equal real roots."
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "When $\\Delta > 0$, the quadratic equation has two distinct real roots.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585e7",
    "question": "Consider the equation $2x^2 + kx + 8 = 0$. If the equation has exactly one real root, what is the value of $k^2$?",
    "options": [
      "64",
      "16",
      "32",
      "128"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For exactly one real root (equal roots), $\\Delta = k^2 - 4(2)(8) = 0 \\implies k^2 - 64 = 0 \\implies k^2 = 64$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585e8",
    "question": "What is the nature of the roots of the quadratic equation $x^2 + 2x + 5 = 0$?",
    "options": [
      "Two distinct real roots",
      "One real root",
      "Two complex conjugate roots",
      "No roots"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "For $x^2 + 2x + 5 = 0$, $\\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$. The roots are two complex conjugate roots.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585e9",
    "question": "For the equation $3x^2 - 6x + c = 0$, if the roots are real and distinct, which condition must $c$ satisfy?",
    "options": [
      "$c < 3$",
      "$c > 3$",
      "$c = 3$",
      "$c \\le 3$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For real and distinct roots, $\\Delta = (-6)^2 - 4(3)(c) > 0 \\implies 36 - 12c > 0 \\implies c < 3$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585ea",
    "question": "If the discriminant of $ax^2 + bx + c = 0$ is zero ($\\Delta = 0$), what is the relationship between the roots?",
    "options": [
      "The roots are equal and real.",
      "The roots are distinct and real.",
      "The roots are complex.",
      "There are no real roots."
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "When $\\Delta = 0$, the quadratic equation has equal and real roots.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585eb",
    "question": "Find the value of $k$ for which the equation $kx^2 - 4x + 1 = 0$ has equal roots.",
    "options": [
      "$k = 4$",
      "$k = 1$",
      "$k = 2$",
      "$k = -1$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For equal roots, $\\Delta = (-4)^2 - 4(k)(1) = 0 \\implies 16 - 4k = 0 \\implies k = 4$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585ec",
    "question": "For the quadratic equation $\\frac{1}{2}x^2 + \\frac{2}{3}x - \\frac{1}{6} = 0$, calculate the discriminant.",
    "options": [
      "$1$",
      "$4/9$",
      "$7/9$",
      "$1/3$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "For $\\frac{1}{2}x^2 + \\frac{2}{3}x - \\frac{1}{6} = 0$, $\\Delta = \\left(\\frac{2}{3}\\right)^2 - 4\\left(\\frac{1}{2}\\right)\\left(-\\frac{1}{6}\\right) = \\frac{4}{9} + \\frac{2}{6} = \\frac{4}{9} + \\frac{1}{3} = \\frac{7}{9}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585ed",
    "question": "The discriminant of $x^2 - px + 4 = 0$ is 0. What is the value of $p$?",
    "options": [
      "$p = 4$",
      "$p = -4$",
      "$p = \\pm 4$",
      "$p = 2$"
    ],
    "correctOption": 2,
    "correctAnswer": 2,
    "type": "single_choice",
    "solution": "$\\Delta = (-p)^2 - 4(1)(4) = p^2 - 16 = 0 \\implies p = \\pm 4$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98e66c910bb37b0e5585ee",
    "question": "Which of the following quadratic equations has a discriminant of 16?",
    "options": [
      "$x^2 + 4x + 0 = 0$",
      "$x^2 + 4x + 1 = 0$",
      "$x^2 + 4x + 3 = 0$",
      "$x^2 + 4x + 5 = 0$"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "For $x^2 + 4x = 0$, $a = 1, b = 4, c = 0$, so $\\Delta = 4^2 - 4(1)(0) = 16$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Discriminant"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4c8",
    "question": "What is the minimum value of the quadratic expression $f(x) = 2x^2 - 8x + 5$?",
    "options": [
      "-3",
      "5",
      "-8",
      "2"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "$f(x) = 2x^2 - 8x + 5 = 2(x - 2)^2 - 8 + 5 = 2(x - 2)^2 - 3$. The minimum value is $-3$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4c9",
    "question": "Find the maximum value of the quadratic function $g(x) = -3x^2 + 6x + 1$",
    "options": [
      "1",
      "4",
      "3",
      "-3"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$g(x) = -3(x^2 - 2x) + 1 = -3(x - 1)^2 + 3 + 1 = -3(x - 1)^2 + 4$. The maximum value is $4$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4ca",
    "question": "For what value of k does the quadratic expression $x^2 - 6x + k$ have a minimum value of 10?",
    "options": [
      "19",
      "1",
      "10",
      "15"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "$x^2 - 6x + k = (x - 3)^2 + k - 9$. Minimum value $= k - 9 = 10 \\implies k = 19$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4cb",
    "question": "What is the maximum value of $h(x) = -x^2 + 10x - 20$?",
    "options": [
      "5",
      "25",
      "55",
      "-20"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "We can complete the square: $h(x) = -(x^2 - 10x) - 20 = -(x - 5)^2 + 25 - 20 = -(x - 5)^2 + 5$. Since $-(x - 5)^2 \\le 0$, the maximum value is 5.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4cc",
    "question": "The quadratic expression $3x^2 + 12x + c$ has a minimum value of 7. Find the value of c.",
    "options": [
      "19",
      "7",
      "12",
      "5"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "Complete the square: $3(x^2 + 4x) + c = 3(x + 2)^2 + c - 12$. The minimum value is $c - 12 = 7 \\implies c = 19$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4cd",
    "question": "Determine the minimum value of $p(x) = (x-4)^2 + 9$",
    "options": [
      "4",
      "9",
      "13",
      "25"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$p(x) = (x - 4)^2 + 9$. Since $(x - 4)^2 \\ge 0$, the minimum value is $9$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4ce",
    "question": "What is the maximum value of $q(x) = -2(x+3)^2 - 5$?",
    "options": [
      "-3",
      "-5",
      "-2",
      "-7"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$q(x) = -2(x + 3)^2 - 5$. Since $-2(x + 3)^2 \\le 0$, the maximum value is $-5$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4cf",
    "question": "Find the value of m for which the quadratic expression $mx^2 - 4x + 1$ has a maximum value of 3.",
    "options": [
      "-1",
      "1",
      "2",
      "-2"
    ],
    "correctOption": 3,
    "correctAnswer": 3,
    "type": "single_choice",
    "solution": "For the quadratic expression to have a maximum, the coefficient of $x^2$ must be negative, so $m < 0$. The maximum occurs at $x = -\\frac{b}{2a} = -\\frac{-4}{2m} = \\frac{2}{m}$. Substituting $x = \\frac{2}{m}$ gives $m \\left(\\frac{2}{m}\\right)^2 - 4\\left(\\frac{2}{m}\\right) + 1 = \\frac{4}{m} - \\frac{8}{m} + 1 = 1 - \\frac{4}{m}$. Setting $1 - \\frac{4}{m} = 3 \\implies -\\frac{4}{m} = 2 \\implies m = -2$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4d0",
    "question": "What is the minimum value of $r(x) = 4x^2 + 4x + 1$?",
    "options": [
      "0",
      "1/4",
      "1",
      "1/2"
    ],
    "correctOption": 0,
    "correctAnswer": 0,
    "type": "single_choice",
    "solution": "$r(x) = 4x^2 + 4x + 1 = (2x + 1)^2$. The minimum value is $0$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  },
  {
    "_id": "6a98fb1cb89acd4c6047d4d1",
    "question": "Find the maximum value of $s(x) = -5x^2 - 20x$",
    "options": [
      "0",
      "20",
      "-20",
      "5"
    ],
    "correctOption": 1,
    "correctAnswer": 1,
    "type": "single_choice",
    "solution": "$s(x) = -5(x^2 + 4x) = -5(x + 2)^2 + 20$. The maximum value is $20$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy",
    "subtopic": "Maximum and minimum values of quadratic expressions"
  }
];

module.exports = { repairedGenuineQuadratic };
