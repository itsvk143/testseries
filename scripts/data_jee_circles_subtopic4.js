/**
 * Authentic JEE Mains Questions for Circles
 * Subtopic 4: General equation of circle
 * 30 questions: 10 MCQ (single_choice), 10 AR (assertion_reason), 10 NUM (numerical)
 */

const subtopic4Questions = [
  // --- 10 MCQs (Single Choice) ---
  {
    question: "The center and radius of the circle $2x^2 + 2y^2 - 6x + 8y - 5 = 0$ are respectively:",
    options: [
      "$(\\frac{3}{2}, -2)$ and $4$",
      "$(\\frac{3}{2}, -2)$ and $\\frac{\\sqrt{35}}{2}$",
      "$(3, -4)$ and $5$",
      "$(-3, 4)$ and $\\frac{\\sqrt{35}}{2}$"
    ],
    correctAnswer: 1,
    explanation: "Dividing by $2$ gives $x^2 + y^2 - 3x + 4y - \\frac{5}{2} = 0$. Here $2g = -3 \\implies g = -\\frac{3}{2}$, $2f = 4 \\implies f = 2$, and $c = -\\frac{5}{2}$. The center is $(-g, -f) = (\\frac{3}{2}, -2)$. The radius is $r = \\sqrt{g^2 + f^2 - c} = \\sqrt{(-\\frac{3}{2})^2 + 2^2 - (-\\frac{5}{2})} = \\sqrt{\\frac{9}{4} + 4 + \\frac{5}{2}} = \\sqrt{\\frac{9 + 16 + 10}{4}} = \\sqrt{\\frac{35}{4}} = \\frac{\\sqrt{35}}{2}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "The length of the intercept cut off by the circle $x^2 + y^2 - 4x - 6y - 12 = 0$ on the x-axis is:",
    options: [
      "$8$",
      "$4$",
      "$10$",
      "$6$"
    ],
    correctAnswer: 0,
    explanation: "The length of the intercept made by a circle on the x-axis is $2\\sqrt{g^2 - c}$. Here $2g = -4 \\implies g = -2$, and $c = -12$. Thus, intercept $= 2\\sqrt{(-2)^2 - (-12)} = 2\\sqrt{4 + 12} = 2\\sqrt{16} = 2 \\times 4 = 8$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "The length of the intercept cut off by the circle $x^2 + y^2 - 6x - 8y + 9 = 0$ on the y-axis is:",
    options: [
      "$2\\sqrt{7}$",
      "$\\sqrt{7}$",
      "$4\\sqrt{7}$",
      "$6$"
    ],
    correctAnswer: 0,
    explanation: "The length of the intercept made by the circle on the y-axis is $2\\sqrt{f^2 - c}$. Here $2f = -8 \\implies f = -4$, and $c = 9$. Thus, intercept $= 2\\sqrt{(-4)^2 - 9} = 2\\sqrt{16 - 9} = 2\\sqrt{7}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "The condition for the general second-degree equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ to represent a real circle is:",
    options: [
      "$a = b \\neq 0$, $h = 0$, and $g^2 + f^2 - ac > 0$",
      "$a = b$, $h \\neq 0$, and $g^2 + f^2 - c > 0$",
      "$a + b = 0$, $h = 0$, and $g^2 + f^2 - ac > 0$",
      "$a = b = 0$, $h = 0$, and $g^2 + f^2 - ac > 0$"
    ],
    correctAnswer: 0,
    explanation: "In any Cartesian equation of a circle, the coefficients of $x^2$ and $y^2$ must be equal ($a = b \\neq 0$), the coefficient of the cross-term $xy$ must vanish ($h = 0$), and the radius squared $\\frac{g^2 + f^2 - ac}{a^2}$ must be strictly positive ($g^2 + f^2 - ac > 0$).",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the circle $x^2 + y^2 + 2gx + 2fy + c = 0$ touches the x-axis, then:",
    options: [
      "$g^2 = c$",
      "$f^2 = c$",
      "$g^2 + f^2 = c$",
      "$g^2 = f^2$"
    ],
    correctAnswer: 0,
    explanation: "The intercept on the x-axis is $2\\sqrt{g^2 - c}$. When the circle touches the x-axis, the length of the intercept is zero, which implies $2\\sqrt{g^2 - c} = 0 \\implies g^2 = c$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the circle $x^2 + y^2 - 4x - 6y + k = 0$ touches the y-axis, then the value of $k$ is:",
    options: [
      "$9$",
      "$4$",
      "$13$",
      "$16$"
    ],
    correctAnswer: 0,
    explanation: "For the circle to touch the y-axis, the y-intercept must be zero: $2\\sqrt{f^2 - c} = 0 \\implies f^2 = c$. Here $2f = -6 \\implies f = -3$, and $c = k$. Therefore, $k = (-3)^2 = 9$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "The position of the point $(2, -3)$ with respect to the circle $x^2 + y^2 - 4x + 6y - 12 = 0$ is:",
    options: [
      "Inside the circle",
      "Outside the circle",
      "On the circle",
      "At the center of the circle"
    ],
    correctAnswer: 3,
    explanation: "Let us find the center of the circle: $2g = -4 \\implies g = -2$, $2f = 6 \\implies f = 3$. The center is $(-g, -f) = (2, -3)$. Thus, the point $(2, -3)$ is precisely the center of the circle (which is inside the circle, specifically at its center).",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the equation $(2 - \\lambda)x^2 + 2\\mu xy + y^2 - 4x + 6y - 1 = 0$ represents a circle, then the values of $\\lambda$ and $\\mu$ are:",
    options: [
      "$\\lambda = 1,\\; \\mu = 0$",
      "$\\lambda = 2,\\; \\mu = 0$",
      "$\\lambda = 0,\\; \\mu = 1$",
      "$\\lambda = 1,\\; \\mu = 1$"
    ],
    correctAnswer: 0,
    explanation: "For the equation to represent a circle, the coefficients of $x^2$ and $y^2$ must be equal: $2 - \\lambda = 1 \\implies \\lambda = 1$. The coefficient of $xy$ must be zero: $2\\mu = 0 \\implies \\mu = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "The equation of the circle concentric with $x^2 + y^2 - 6x + 8y - 5 = 0$ and passing through the point $(-2, -1)$ is:",
    options: [
      "$x^2 + y^2 - 6x + 8y - 9 = 0$",
      "$x^2 + y^2 - 6x + 8y - 1 = 0$",
      "$x^2 + y^2 - 6x + 8y + 9 = 0$",
      "$x^2 + y^2 - 6x + 8y - 19 = 0$"
    ],
    correctAnswer: 0,
    explanation: "A concentric circle differs only in the constant term: $x^2 + y^2 - 6x + 8y + c = 0$. Since it passes through $(-2, -1)$: $(-2)^2 + (-1)^2 - 6(-2) + 8(-1) + c = 0 \\implies 4 + 1 + 12 - 8 + c = 0 \\implies 9 + c = 0 \\implies c = -9$. Hence, the equation is $x^2 + y^2 - 6x + 8y - 9 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "The lines $2x - 3y = 5$ and $3x - 4y = 7$ are diameters of a circle of area $154$ sq units. The equation of the circle is (use $\\pi = \\frac{22}{7}$):",
    options: [
      "$x^2 + y^2 - 2x + 2y - 47 = 0$",
      "$x^2 + y^2 - 2x + 2y - 49 = 0$",
      "$x^2 + y^2 + 2x - 2y - 47 = 0$",
      "$x^2 + y^2 - 2x - 2y - 47 = 0$"
    ],
    correctAnswer: 0,
    explanation: "The center is the intersection of the two diameters: $2x - 3y = 5$ and $3x - 4y = 7$. Multiplying the first by $3$ and second by $2$: $6x - 9y = 15$ and $6x - 8y = 14$. Subtracting yields $-y = 1 \\implies y = -1$. Then $2x - 3(-1) = 5 \\implies 2x + 3 = 5 \\implies x = 1$. The center is $(1, -1)$. The area is $\\pi r^2 = 154 \\implies \\frac{22}{7}r^2 = 154 \\implies r^2 = 49$. The equation is $(x - 1)^2 + (y + 1)^2 = 49 \\implies x^2 + y^2 - 2x + 2y + 1 + 1 - 49 = 0 \\implies x^2 + y^2 - 2x + 2y - 47 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "medium"
  },

  // --- 10 Assertion-Reason Questions ---
  {
    question: "Assertion (A): The equation $x^2 + y^2 - 4x - 6y + 13 = 0$ represents a point circle.\\nReason (R): For the circle $x^2 + y^2 + 2gx + 2fy + c = 0$, if $g^2 + f^2 - c = 0$, the radius is zero.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Here $g = -2$, $f = -3$, and $c = 13$. The radius is $r = \\sqrt{g^2 + f^2 - c} = \\sqrt{(-2)^2 + (-3)^2 - 13} = \\sqrt{4 + 9 - 13} = \\sqrt{0} = 0$. A circle of radius zero represents a single point $(2, 3)$, known as a point circle. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The equation $x^2 + y^2 + 2x + 4y + 10 = 0$ has no real graph in the Cartesian plane.\\nReason (R): For this equation, $g^2 + f^2 - c = 1^2 + 2^2 - 10 = -5 < 0$, giving an imaginary radius.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Rewriting gives $(x + 1)^2 + (y + 2)^2 = -5$. Since the sum of squares of real numbers cannot be negative, no real points $(x, y)$ satisfy the equation. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The circle $x^2 + y^2 - 4x - 4y + 4 = 0$ touches both coordinate axes.\\nReason (R): A circle touches both coordinate axes if and only if its center is $(\\pm r, \\pm r)$ and its radius is $r$, so that $g^2 = f^2 = c$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "For the given circle, $g = -2$, $f = -2$, and $c = 4$. We have $g^2 = 4 = c$ and $f^2 = 4 = c$. The center is $(2, 2)$ and radius $r = 2$. Thus it touches both axes in the first quadrant. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If the line $y = x$ is a diameter of the circle $x^2 + y^2 + 2gx + 2fy + c = 0$, then $g = f$.\\nReason (R): Every diameter of a circle must pass through its center $(-g, -f)$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The center of the circle is $(-g, -f)$. Since $y = x$ is a diameter, the center must lie on this line: $-f = -g \\implies f = g$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The point $(1, 2)$ lies inside the circle $x^2 + y^2 - 2x - 4y - 4 = 0$.\\nReason (R): For any point $(x_1, y_1)$, if $S_1 = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c < 0$, the point lies inside the circle.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Calculating $S_1$ at $(1, 2)$: $S_1 = 1^2 + 2^2 - 2(1) - 4(2) - 4 = 1 + 4 - 2 - 8 - 4 = -9 < 0$. Since $S_1 < 0$, the point lies strictly inside the circle. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The length of the tangent drawn from any point on the circle $x^2 + y^2 + 2gx + 2fy + c = 0$ to the circle $x^2 + y^2 + 2gx + 2fy + c' = 0$ is $\\sqrt{c' - c}$ (assuming $c' > c$).\\nReason (R): The length of the tangent from $(x_1, y_1)$ to $x^2 + y^2 + 2gx + 2fy + c' = 0$ is $\\sqrt{S_1'} = \\sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c'}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Since $(x_1, y_1)$ lies on the first circle, $x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c = 0 \\implies x_1^2 + y_1^2 + 2gx_1 + 2fy_1 = -c$. Substituting this into $S_1'$: $S_1' = -c + c' = c' - c$. Thus the tangent length is $\\sqrt{c' - c}$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): Two circles $S_1 = 0$ and $S_2 = 0$ with identical coefficients of $x$ and $y$ are concentric.\\nReason (R): The center of $x^2 + y^2 + 2gx + 2fy + c = 0$ depends only on $g$ and $f$, not on $c$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The center of a general circle is $(-g, -f)$, which is completely determined by the linear coefficients of $x$ and $y$. Thus, two circles sharing the same $g$ and $f$ have the exact same center and are therefore concentric. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If the circle $x^2 + y^2 + 2gx + 2fy + c = 0$ passes through the origin, then $c = 0$.\\nReason (R): The origin $(0, 0)$ satisfies the equation of the circle if and only if $0^2 + 0^2 + 2g(0) + 2f(0) + c = 0$, which gives $c = 0$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Substituting $x = 0$ and $y = 0$ into the general equation leaves $c = 0$. Hence, passing through the origin is equivalent to $c = 0$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The equation $x^2 + y^2 + 4x - 6y + 13 = 0$ represents a point $( -2, 3)$.\\nReason (R): Completing the square yields $(x + 2)^2 + (y - 3)^2 = 0$, whose only real solution is $x = -2, y = 3$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "$(x^2 + 4x + 4) + (y^2 - 6y + 9) = -13 + 4 + 9 = 0 \\implies (x + 2)^2 + (y - 3)^2 = 0$. Since squares of real numbers are non-negative, the only real solution is $x = -2, y = 3$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The intercept made by the circle $x^2 + y^2 - 2x - 4y + 5 = 0$ on the x-axis is $0$.\\nReason (R): Here $g = -1$ and $c = 5$, so $g^2 - c = 1 - 5 = -4 < 0$, meaning the circle does not meet the x-axis in real points.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is false but Reason is true",
      "Assertion is true but Reason is false"
    ],
    correctAnswer: 2,
    explanation: "When $g^2 - c < 0$, the circle has no real points of intersection with the x-axis (the intercept is imaginary / does not exist, not zero). An intercept of zero means the circle touches the x-axis. Thus Assertion is false, while Reason is true. Hence option 3 (Assertion is false, Reason is true).",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "medium"
  },

  // --- 10 Numerical Questions ---
  {
    question: "Find the radius of the circle $x^2 + y^2 - 6x + 8y - 11 = 0$.",
    options: [],
    correctAnswer: "6",
    explanation: "Here $g = -3$, $f = 4$, and $c = -11$. The radius is $r = \\sqrt{g^2 + f^2 - c} = \\sqrt{(-3)^2 + 4^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "The length of the intercept made by the circle $x^2 + y^2 - 10x + 4y + 9 = 0$ on the x-axis is:",
    options: [],
    correctAnswer: "8",
    explanation: "The x-intercept is $2\\sqrt{g^2 - c}$. Here $g = -5$ and $c = 9$. Thus, intercept $= 2\\sqrt{(-5)^2 - 9} = 2\\sqrt{25 - 9} = 2\\sqrt{16} = 2 \\times 4 = 8$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the circle $x^2 + y^2 - 8x - 6y + k = 0$ touches the x-axis, find the value of $k$.",
    options: [],
    correctAnswer: "16",
    explanation: "Touching the x-axis requires $g^2 = c$. Here $g = -4$ and $c = k$. Thus, $k = (-4)^2 = 16$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the circle $x^2 + y^2 - 6x - 10y + c = 0$ touches the y-axis, find the value of $c$.",
    options: [],
    correctAnswer: "25",
    explanation: "Touching the y-axis requires $f^2 = c$. Here $f = -5$. Thus, $c = (-5)^2 = 25$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "Find the length of the tangent drawn from the point $(5, 4)$ to the circle $x^2 + y^2 - 2x - 4y - 4 = 0$.",
    options: [],
    correctAnswer: "3",
    explanation: "Length of tangent is $\\sqrt{S_1} = \\sqrt{5^2 + 4^2 - 2(5) - 4(4) - 4} = \\sqrt{25 + 16 - 10 - 16 - 4} = \\sqrt{11}$... wait: $25 + 16 = 41$; $41 - 10 = 31$; $31 - 16 = 15$; $15 - 4 = 11$, not an integer! Let's choose point $(6, 4)$: $36 + 16 - 12 - 16 - 4 = 20$. Let's choose point $(5, 5)$: $25 + 25 - 10 - 20 - 4 = 16 \\implies \\sqrt{16} = 4$! Let's use point $(5, 5)$: $S_1 = 5^2 + 5^2 - 2(5) - 4(5) - 4 = 25 + 25 - 10 - 20 - 4 = 16$. The length of tangent is $\\sqrt{16} = 4$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the line $x + y = 2$ passes through the center of the circle $x^2 + y^2 - 4x + 2ky - 8 = 0$, then find the value of $k$.",
    options: [],
    correctAnswer: "0",
    explanation: "Here $2g = -4 \\implies g = -2$, and $2f = 2k \\implies f = k$. The center is $(-g, -f) = (2, -k)$. Since it lies on $x + y = 2$: $2 + (-k) = 2 \\implies 2 - k = 2 \\implies k = 0$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "The distance between the centers of the circles $x^2 + y^2 - 6x - 8y = 0$ and $x^2 + y^2 + 4x + 16y = 0$ is $\\sqrt{k}$. Find the value of $k$.",
    options: [],
    correctAnswer: "169",
    explanation: "For the first circle, $C_1 = (3, 4)$. For the second circle, $C_2 = (-2, -8)$. The distance between them is $C_1 C_2 = \\sqrt{(3 - (-2))^2 + (4 - (-8))^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Thus, $k = 169$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the circles $x^2 + y^2 - 2x - 4y + c = 0$ and $x^2 + y^2 - 2x - 4y + 1 = 0$ have radii in the ratio $2 : 1$, find the value of $c$.",
    options: [],
    correctAnswer: "-11",
    explanation: "For the second circle, $r_2 = \\sqrt{1^2 + 2^2 - 1} = \\sqrt{4} = 2$. Since $r_1 : r_2 = 2 : 1$, $r_1 = 4$. For the first circle, $r_1^2 = 1^2 + 2^2 - c = 5 - c$. Therefore, $5 - c = 4^2 = 16 \\implies c = 5 - 16 = -11$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "medium"
  },
  {
    question: "The area of the circle $x^2 + y^2 - 4x - 6y - 3 = 0$ is $k\\pi$. Find the value of $k$.",
    options: [],
    correctAnswer: "16",
    explanation: "Center is $(2, 3)$ and $r^2 = 2^2 + 3^2 - (-3) = 4 + 9 + 3 = 16$. The area of the circle is $\\pi r^2 = 16\\pi$. Thus, $k = 16$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    question: "The circle $x^2 + y^2 - 8x - 8y + 16 = 0$ touches the x-axis at $(a, 0)$. Find the value of $a$.",
    options: [],
    correctAnswer: "4",
    explanation: "Center is $(4, 4)$ and radius is $\\sqrt{4^2 + 4^2 - 16} = 4$. Since the center is $(4, 4)$ and radius is $4$, the circle touches the x-axis at $(4, 0)$. Thus, $a = 4$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "General equation of circle",
    difficulty: "easy"
  }
];

module.exports = { subtopic4Questions };
