/**
 * Repaired genuine questions (42) for Straight Lines (Class 12, Mathematics).
 * All 42 questions are mapped to their exact database _id, with KaTeX verified,
 * standard JEE Mains options, correct answer indices, and concise step-by-step explanations.
 */

const repairedGenuineStraightLines = [
  // 1 to 10: Angle between lines (IDs ...67c to ...685)
  {
    _id: "6a98e80f910bb37b0e55867c",
    question: "Find the acute angle between the lines $y = \\sqrt{3}x + 5$ and $y = \\frac{1}{\\sqrt{3}}x - 2$.",
    options: [
      "$30^{\\circ}$",
      "$45^{\\circ}$",
      "$60^{\\circ}$",
      "$90^{\\circ}$"
    ],
    correctAnswer: 0,
    explanation: "The slopes of the lines are $m_1 = \\sqrt{3}$ and $m_2 = \\frac{1}{\\sqrt{3}}$. The inclinations are $\\alpha_1 = 60^{\\circ}$ and $\\alpha_2 = 30^{\\circ}$. The acute angle between the lines is $|\\alpha_1 - \\alpha_2| = |60^{\\circ} - 30^{\\circ}| = 30^{\\circ}$. Using the formula: $\\tan\\theta = \\left|\\frac{\\sqrt{3} - 1/\\sqrt{3}}{1 + \\sqrt{3}(1/\\sqrt{3})}\\right| = \\frac{2/\\sqrt{3}}{2} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^{\\circ}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e80f910bb37b0e55867d",
    question: "What is the angle between the line $2x + 3y - 5 = 0$ and the positive direction of the x-axis?",
    options: [
      "$\\arctan\\left(-\\frac{2}{3}\\right)$",
      "$\\arctan\\left(\\frac{3}{2}\\right)$",
      "$\\arctan\\left(\\frac{2}{3}\\right)$",
      "$\\arctan\\left(-\\frac{3}{2}\\right)$"
    ],
    correctAnswer: 0,
    explanation: "Rewriting in slope-intercept form gives $3y = -2x + 5 \\implies y = -\\frac{2}{3}x + \\frac{5}{3}$. The slope is $m = -\\frac{2}{3}$. The angle $\\theta$ made with the positive x-axis satisfies $\\tan\\theta = m = -\\frac{2}{3} \\implies \\theta = \\arctan\\left(-\\frac{2}{3}\\right)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e80f910bb37b0e55867e",
    question: "Find the acute angle between the lines $x - 2y + 1 = 0$ and $3x - y + 3 = 0$.",
    options: [
      "$30^{\\circ}$",
      "$45^{\\circ}$",
      "$60^{\\circ}$",
      "$90^{\\circ}$"
    ],
    correctAnswer: 1,
    explanation: "The slopes are $m_1 = \\frac{1}{2}$ and $m_2 = 3$. Using the formula $\\tan\\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right|$: $\\tan\\theta = \\left|\\frac{3 - 1/2}{1 + 3(1/2)}\\right| = \\left|\\frac{5/2}{5/2}\\right| = 1$. Therefore, the acute angle is $\\theta = 45^{\\circ}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e80f910bb37b0e55867f",
    question: "If two non-vertical lines are perpendicular, what is the product of their slopes?",
    options: [
      "$1$",
      "$0$",
      "$-1$",
      "Undefined"
    ],
    correctAnswer: 2,
    explanation: "For two perpendicular lines with inclinations $\\theta_1$ and $\\theta_2$, $\\theta_2 = 90^{\\circ} + \\theta_1$. Thus $m_2 = \\tan(90^{\\circ} + \\theta_1) = -\\cot\\theta_1 = -\\frac{1}{m_1}$, which implies $m_1 m_2 = -1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e80f910bb37b0e558680",
    question: "Find the acute angle between the line $y = -x + 7$ and the y-axis.",
    options: [
      "$45^{\\circ}$",
      "$90^{\\circ}$",
      "$135^{\\circ}$",
      "$30^{\\circ}$"
    ],
    correctAnswer: 0,
    explanation: "The slope of $y = -x + 7$ is $m = -1$, meaning it makes an angle of $135^{\\circ}$ with the positive x-axis (and $45^{\\circ}$ with the negative x-axis). The y-axis makes an angle of $90^{\\circ}$ with the positive x-axis. The acute angle between the line and the y-axis is $|135^{\\circ} - 90^{\\circ}| = 45^{\\circ}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e80f910bb37b0e558681",
    question: "Find the value of $k$ if the lines $kx + 2y - 1 = 0$ and $x - 3y + 5 = 0$ are perpendicular.",
    options: [
      "$3/2$",
      "$2/3$",
      "$6$",
      "$-6$"
    ],
    correctAnswer: 2,
    explanation: "The slope of the first line is $m_1 = -\\frac{k}{2}$ and the slope of the second line is $m_2 = \\frac{1}{3}$. For perpendicularity: $m_1 m_2 = -1 \\implies \\left(-\\frac{k}{2}\\right)\\left(\\frac{1}{3}\\right) = -1 \\implies -\\frac{k}{6} = -1 \\implies k = 6$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e80f910bb37b0e558682",
    question: "What is the angle between the line $y = x$ and the line $y = -x$?",
    options: [
      "$0^{\\circ}$",
      "$45^{\\circ}$",
      "$90^{\\circ}$",
      "$180^{\\circ}$"
    ],
    correctAnswer: 2,
    explanation: "The slopes are $m_1 = 1$ and $m_2 = -1$. The product of the slopes is $m_1 m_2 = 1 \\times (-1) = -1$. Since the product is $-1$, the lines are perpendicular, and the angle between them is $90^{\\circ}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e80f910bb37b0e558683",
    question: "Find the angle between the lines $3x + 4y - 1 = 0$ and $4x - 3y + 2 = 0$.",
    options: [
      "$30^{\\circ}$",
      "$45^{\\circ}$",
      "$60^{\\circ}$",
      "$90^{\\circ}$"
    ],
    correctAnswer: 3,
    explanation: "The slopes are $m_1 = -\\frac{3}{4}$ and $m_2 = \\frac{4}{3}$. Their product is $m_1 m_2 = \\left(-\\frac{3}{4}\\right)\\left(\\frac{4}{3}\\right) = -1$. Thus, the lines are perpendicular and the angle between them is $90^{\\circ}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e80f910bb37b0e558684",
    question: "Two lines pass through the origin. One line makes an angle of $30^{\\circ}$ with the positive x-axis, and the other makes an angle of $120^{\\circ}$ with the positive x-axis. Find the angle between these two lines.",
    options: [
      "$30^{\\circ}$",
      "$60^{\\circ}$",
      "$90^{\\circ}$",
      "$150^{\\circ}$"
    ],
    correctAnswer: 2,
    explanation: "The angle between the two lines is the difference of their inclination angles: $|120^{\\circ} - 30^{\\circ}| = 90^{\\circ}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e80f910bb37b0e558685",
    question: "Find the acute angle between the line $y = 2x + 1$ and the line $y = -x + 4$.",
    options: [
      "$\\arctan\\left(\\frac{1}{3}\\right)$",
      "$\\arctan(3)$",
      "$\\arctan\\left(-\\frac{1}{3}\\right)$",
      "$\\arctan(-3)$"
    ],
    correctAnswer: 1,
    explanation: "The slopes are $m_1 = 2$ and $m_2 = -1$. The acute angle $\\theta$ satisfies $\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right| = \\left|\\frac{2 - (-1)}{1 + 2(-1)}\\right| = \\left|\\frac{3}{-1}\\right| = 3$. Hence, $\\theta = \\arctan(3)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Angle between lines",
    difficulty: "easy"
  },

  // 11 to 21: Concurrent lines (IDs ...69b to ...6a5)
  {
    _id: "6a98e83e910bb37b0e55869b",
    question: "The lines $ax + by + c = 0$, $bx + cy + a = 0$, and $cx + ay + b = 0$ are concurrent. If $a, b, c$ are distinct real numbers, then which of the following is true?",
    options: [
      "$a + b + c = 0$",
      "$a^3 + b^3 + c^3 = 0$",
      "$a^2 + b^2 + c^2 = 0$",
      "$a + b + c \\neq 0$"
    ],
    correctAnswer: 0,
    explanation: "The condition for concurrency is $\\begin{vmatrix} a & b & c \\\\ b & c & a \\\\ c & a & b \\end{vmatrix} = 0 \\implies -(a^3 + b^3 + c^3 - 3abc) = 0 \\implies (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = 0$. Since $a, b, c$ are distinct, $\\frac{1}{2}((a-b)^2 + (b-c)^2 + (c-a)^2) > 0$. Thus, we must have $a + b + c = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "medium"
  },
  {
    _id: "6a98e83e910bb37b0e55869c",
    question: "If the lines $x = a$, $y = b$, and $x + y = c$ are concurrent, what is the relation between $a, b, c$?",
    options: [
      "$a + b = c$",
      "$a - b = c$",
      "$b - a = c$",
      "$a + c = b$"
    ],
    correctAnswer: 0,
    explanation: "The point of intersection of $x = a$ and $y = b$ is $(a, b)$. For the three lines to be concurrent, $(a, b)$ must lie on $x + y = c$, giving $a + b = c$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e83e910bb37b0e55869d",
    question: "Find the value of $k$ for which the lines $x + y - 1 = 0$, $2x + 3y - 1 = 0$, and $kx + 9y - 3 = 0$ are concurrent.",
    options: [
      "$6$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: 0,
    explanation: "Solving the first two lines: $x + y = 1$ and $2x + 3y = 1 \\implies x = 2, y = -1$. For concurrency, $(2, -1)$ must satisfy the third line: $k(2) + 9(-1) - 3 = 0 \\implies 2k - 12 = 0 \\implies k = 6$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e83e910bb37b0e55869e",
    question: "The lines $y = m_1x + c_1$, $y = m_2x + c_2$, and $y = m_3x + c_3$ are concurrent. If $m_1, m_2, m_3$ are distinct, which of the following must be true?",
    options: [
      "$c_1 = c_2 = c_3$",
      "$m_1c_1 + m_2c_2 + m_3c_3 = 0$",
      "$\\frac{c_1}{m_1} + \\frac{c_2}{m_2} + \\frac{c_3}{m_3} = 0$",
      "$c_1(m_2 - m_3) + c_2(m_3 - m_1) + c_3(m_1 - m_2) = 0$"
    ],
    correctAnswer: 3,
    explanation: "Expressing each line as $m_i x - y + c_i = 0$, the concurrency condition is $\\begin{vmatrix} m_1 & -1 & c_1 \\\\ m_2 & -1 & c_2 \\\\ m_3 & -1 & c_3 \\end{vmatrix} = 0$. Expanding along the last column gives $c_1(m_2 - m_3) + c_2(m_3 - m_1) + c_3(m_1 - m_2) = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "medium"
  },
  {
    _id: "6a98e83e910bb37b0e55869f",
    question: "For what value of $p$ are the lines $3x - 4y + 7 = 0$, $2x + 3y - 1 = 0$, and $px + 2y + 3 = 0$ concurrent?",
    options: [
      "$5$",
      "$3$",
      "$-5$",
      "$-3$"
    ],
    correctAnswer: 0,
    explanation: "Solving the first two equations: $3x - 4y = -7$ and $2x + 3y = 1$. Multiplying the first by $3$ and second by $4$: $9x - 12y = -21$ and $8x + 12y = 4$. Adding gives $17x = -17 \\implies x = -1$. Then $2(-1) + 3y = 1 \\implies 3y = 3 \\implies y = 1$. The intersection point is $(-1, 1)$. Substituting into the third line: $p(-1) + 2(1) + 3 = 0 \\implies -p + 5 = 0 \\implies p = 5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e83e910bb37b0e5586a0",
    question: "The lines $x = 3$, $y = 5$, and $ax + by + 1 = 0$ are concurrent. Which relation must hold between $a$ and $b$?",
    options: [
      "$3a + 5b + 1 = 0$",
      "$3a - 5b + 1 = 0$",
      "$5a + 3b + 1 = 0$",
      "$5a - 3b + 1 = 0$"
    ],
    correctAnswer: 0,
    explanation: "The intersection of $x = 3$ and $y = 5$ is $(3, 5)$. Substituting into $ax + by + 1 = 0$ gives $3a + 5b + 1 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e83e910bb37b0e5586a1",
    question: "If the lines $2x + y - 3 = 0$, $5x + ky - 3 = 0$, and $3x - y - 2 = 0$ are concurrent, then the value of $k$ is:",
    options: [
      "$-2$",
      "$2$",
      "$3$",
      "$-3$"
    ],
    correctAnswer: 0,
    explanation: "Solving $2x + y = 3$ and $3x - y = 2$: adding the equations gives $5x = 5 \\implies x = 1$. Then $y = 3 - 2(1) = 1$. The common point is $(1, 1)$. Substituting into the second equation: $5(1) + k(1) - 3 = 0 \\implies k + 2 = 0 \\implies k = -2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e83e910bb37b0e5586a2",
    question: "If the lines $x + y + 1 = 0$, $x + 2y + 3 = 0$, and $x + 3y + k = 0$ are concurrent, find the value of $k$ and the point of concurrency.",
    options: [
      "$k = 5$, point is $(1, -2)$",
      "$k = 5$, point is $(-1, -2)$",
      "$k = -5$, point is $(1, -2)$",
      "$k = -5$, point is $(-1, -2)$"
    ],
    correctAnswer: 0,
    explanation: "Subtracting $x + y = -1$ from $x + 2y = -3$ gives $y = -2$. Then $x = -1 - (-2) = 1$. The point of concurrency is $(1, -2)$. For the third line $x + 3y + k = 0$: $1 + 3(-2) + k = 0 \\implies 1 - 6 + k = 0 \\implies k = 5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e83e910bb37b0e5586a3",
    question: "Find the condition for the lines $ax + by + c = 0$, $bx + cy + a = 0$, and $cx + ay + b = 0$ to be concurrent.",
    options: [
      "$a + b + c = 0$",
      "$a^3 + b^3 + c^3 = 3abc$",
      "$a^2 + b^2 + c^2 = ab + bc + ca$",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The determinant of coefficients vanishes if and only if $a^3 + b^3 + c^3 - 3abc = 0$. Since $a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$, this holds if either $a + b + c = 0$ or $a^2 + b^2 + c^2 = ab + bc + ca$ (which implies $a = b = c$). Thus, each condition represents or implies concurrency.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "medium"
  },
  {
    _id: "6a98e83e910bb37b0e5586a4",
    question: "Find the value of $k$ such that the lines $x + y = 1$, $2x + 3y = 2$, and $kx + y = 3$ are concurrent.",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: 2,
    explanation: "From $x + y = 1$, $x = 1 - y$. Substitute into $2x + 3y = 2$: $2(1 - y) + 3y = 2 \\implies 2 + y = 2 \\implies y = 0$. Then $x = 1$. The intersection point is $(1, 0)$. Substituting $(1, 0)$ into $kx + y = 3$ gives $k(1) + 0 = 3 \\implies k = 3$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },
  {
    _id: "6a98e83e910bb37b0e5586a5",
    question: "The lines $x = 1$, $y = 2$, and $ax + by + c = 0$ are concurrent. What is the relation between $a, b, c$?",
    options: [
      "$a + 2b + c = 0$",
      "$2a + b + c = 0$",
      "$a + b + c = 0$",
      "$2a + 2b + c = 0$"
    ],
    correctAnswer: 0,
    explanation: "The intersection point of $x = 1$ and $y = 2$ is $(1, 2)$. For the lines to be concurrent, $(1, 2)$ must satisfy $ax + by + c = 0$, giving $a(1) + b(2) + c = 0 \\implies a + 2b + c = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Concurrent lines",
    difficulty: "easy"
  },

  // 22 to 32: Perpendicular distance (IDs ...686 to ...690)
  {
    _id: "6a98e825910bb37b0e558686",
    question: "Find the perpendicular distance from the point $(3, -2)$ to the line $3x - 4y + 3 = 0$.",
    options: [
      "$\\frac{20}{5}$",
      "$\\frac{19}{5}$",
      "$\\frac{21}{5}$",
      "$\\frac{16}{5}$"
    ],
    correctAnswer: 0,
    explanation: "Using the perpendicular distance formula $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$: $d = \\frac{|3(3) - 4(-2) + 3|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|9 + 8 + 3|}{\\sqrt{25}} = \\frac{20}{5} = 4$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "easy"
  },
  {
    _id: "6a98e825910bb37b0e558687",
    question: "What is the perpendicular distance from the origin $(0, 0)$ to the line $5x + 12y - 26 = 0$?",
    options: [
      "$\\frac{26}{13}$",
      "$\\frac{26}{12}$",
      "$\\frac{26}{5}$",
      "$\\frac{13}{26}$"
    ],
    correctAnswer: 0,
    explanation: "The perpendicular distance from $(0, 0)$ to $5x + 12y - 26 = 0$ is $d = \\frac{|5(0) + 12(0) - 26|}{\\sqrt{5^2 + 12^2}} = \\frac{26}{\\sqrt{25 + 144}} = \\frac{26}{13} = 2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "easy"
  },
  {
    _id: "6a98e825910bb37b0e558688",
    question: "Find the distance between the parallel lines $4x + 3y - 12 = 0$ and $4x + 3y + 8 = 0$.",
    options: [
      "$\\frac{20}{5}$",
      "$\\frac{20}{7}$",
      "$\\frac{20}{12}$",
      "$\\frac{20}{25}$"
    ],
    correctAnswer: 0,
    explanation: "The distance between two parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$ is $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}} = \\frac{|-12 - 8|}{\\sqrt{4^2 + 3^2}} = \\frac{20}{5} = 4$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "easy"
  },
  {
    _id: "6a98e825910bb37b0e558689",
    question: "The perpendicular distance from the point $(a, b)$ to the line $\\frac{x}{p} + \\frac{y}{q} = 1$ is:",
    options: [
      "$\\frac{|aq + bp - pq|}{\\sqrt{p^2 + q^2}}$",
      "$\\frac{|aq + bp - pq|}{p^2 + q^2}$",
      "$\\frac{|bp + aq - 1|}{\\sqrt{p^2 + q^2}}$",
      "$\\frac{|bp - aq - pq|}{\\sqrt{p^2 + q^2}}$"
    ],
    correctAnswer: 0,
    explanation: "Rewriting the line equation in general form gives $qx + py - pq = 0$. The perpendicular distance from $(a, b)$ is $d = \\frac{|q(a) + p(b) - pq|}{\\sqrt{q^2 + p^2}} = \\frac{|aq + bp - pq|}{\\sqrt{p^2 + q^2}}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "easy"
  },
  {
    _id: "6a98e825910bb37b0e55868a",
    question: "Find the foot of the perpendicular from the point $(1, 2)$ to the line $x - y - 1 = 0$.",
    options: [
      "$(2, 1)$",
      "$(1, 2)$",
      "$(3, 0)$",
      "$(0, 3)$"
    ],
    correctAnswer: 0,
    explanation: "Using the foot of perpendicular formula: $\\frac{h - x_1}{a} = \\frac{k - y_1}{b} = -\\frac{a x_1 + b y_1 + c}{a^2 + b^2}$. Here $(x_1, y_1) = (1, 2)$, $a = 1, b = -1, c = -1$. Then $\\frac{h - 1}{1} = \\frac{k - 2}{-1} = -\\frac{1(1) - 1(2) - 1}{1^2 + (-1)^2} = -\\frac{-2}{2} = 1$. Thus, $h - 1 = 1 \\implies h = 2$, and $k - 2 = -1 \\implies k = 1$. The foot is $(2, 1)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "medium"
  },
  {
    _id: "6a98e825910bb37b0e55868b",
    question: "Find the equation of the line passing through the point $(2, 3)$ and perpendicular to the line $x - 2y + 5 = 0$.",
    options: [
      "$2x + y - 7 = 0$",
      "$2x + y + 7 = 0$",
      "$x + 2y - 8 = 0$",
      "$x + 2y + 8 = 0$"
    ],
    correctAnswer: 0,
    explanation: "Any line perpendicular to $x - 2y + 5 = 0$ is of the form $2x + y + c = 0$. Since it passes through $(2, 3)$: $2(2) + 3 + c = 0 \\implies 7 + c = 0 \\implies c = -7$. Thus, the equation is $2x + y - 7 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "easy"
  },
  {
    _id: "6a98e825910bb37b0e55868c",
    question: "What is the perpendicular distance from the point $(5, -3)$ to the line $12x - 5y - 13 = 0$?",
    options: [
      "$\\frac{62}{13}$",
      "$\\frac{82}{13}$",
      "$\\frac{72}{13}$",
      "$\\frac{52}{13}$"
    ],
    correctAnswer: 0,
    explanation: "Using the formula $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$: $d = \\frac{|12(5) - 5(-3) - 13|}{\\sqrt{12^2 + (-5)^2}} = \\frac{|60 + 15 - 13|}{\\sqrt{144 + 25}} = \\frac{62}{13}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "easy"
  },
  {
    _id: "6a98e825910bb37b0e55868d",
    question: "Find the perpendicular distance from the point $(3, 4)$ to the line $3x + 4y - 5 = 0$.",
    options: [
      "$\\frac{20}{5}$",
      "$\\frac{10}{5}$",
      "$\\frac{30}{5}$",
      "$\\frac{40}{5}$"
    ],
    correctAnswer: 0,
    explanation: "Using the formula $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$: $d = \\frac{|3(3) + 4(4) - 5|}{\\sqrt{3^2 + 4^2}} = \\frac{|9 + 16 - 5|}{5} = \\frac{20}{5} = 4$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "easy"
  },
  {
    _id: "6a98e825910bb37b0e55868e",
    question: "Find the equations of the lines parallel to $3x - 4y + 7 = 0$ and at a distance of $3$ units from the origin.",
    options: [
      "$3x - 4y + 15 = 0$",
      "$3x - 4y - 15 = 0$",
      "$3x - 4y \\pm 15 = 0$",
      "$4x - 3y \\pm 15 = 0$"
    ],
    correctAnswer: 2,
    explanation: "Any line parallel to $3x - 4y + 7 = 0$ has equation $3x - 4y + k = 0$. The distance from $(0, 0)$ is $\\frac{|k|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|k|}{5}$. Setting this equal to $3$ gives $|k| = 15 \\implies k = \\pm 15$. Thus, $3x - 4y \\pm 15 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "easy"
  },
  {
    _id: "6a98e825910bb37b0e55868f",
    question: "If the perpendicular distance from the point $(k, 4)$ to the line $3x - 4y + 12 = 0$ is $2$, find the possible values of $k$.",
    options: [
      "$k = \\frac{14}{3}\\text{ or } -2$",
      "$k = \\frac{10}{3}\\text{ or } -2$",
      "$k = \\pm \\frac{4}{3}$",
      "$k = 4\\text{ or } -\\frac{4}{3}$"
    ],
    correctAnswer: 0,
    explanation: "Using the distance formula: $\\frac{|3k - 4(4) + 12|}{\\sqrt{3^2 + (-4)^2}} = 2 \\implies \\frac{|3k - 4|}{5} = 2 \\implies |3k - 4| = 10$. Either $3k - 4 = 10 \\implies 3k = 14 \\implies k = \\frac{14}{3}$, or $3k - 4 = -10 \\implies 3k = -6 \\implies k = -2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "medium"
  },
  {
    _id: "6a98e825910bb37b0e558690",
    question: "Find the distance between the parallel lines $y = 2x + 4$ and $y = 2x + 9$.",
    options: [
      "$\\frac{5}{\\sqrt{5}}$",
      "$\\frac{5}{\\sqrt{3}}$",
      "$\\frac{5}{\\sqrt{2}}$",
      "$\\frac{5}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Rewriting the lines as $2x - y + 4 = 0$ and $2x - y + 9 = 0$, the distance between them is $d = \\frac{|9 - 4|}{\\sqrt{2^2 + (-1)^2}} = \\frac{5}{\\sqrt{5}} = \\sqrt{5}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Perpendicular distance",
    difficulty: "easy"
  },

  // 33 to 42: Slope and intercept forms (IDs ...672 to ...67b)
  {
    _id: "6a98e808910bb37b0e558672",
    question: "Find the slope of the line passing through the points $(2, 3)$ and $(4, 7)$.",
    options: [
      "$2$",
      "$1/2$",
      "$3/2$",
      "$4$"
    ],
    correctAnswer: 0,
    explanation: "The slope is $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - 3}{4 - 2} = \\frac{4}{2} = 2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  },
  {
    _id: "6a98e808910bb37b0e558673",
    question: "What is the y-intercept of the line with the equation $y = 3x + 5$?",
    options: [
      "$3$",
      "$5$",
      "$-3/5$",
      "$5/3$"
    ],
    correctAnswer: 1,
    explanation: "In the slope-intercept form $y = mx + c$, $c$ represents the y-intercept. Here $c = 5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  },
  {
    _id: "6a98e808910bb37b0e558674",
    question: "Find the equation of the line with slope $2$ and y-intercept $-1$.",
    options: [
      "$y = -x + 2$",
      "$y = 2x - 1$",
      "$y = x + 2$",
      "$y = -2x + 1$"
    ],
    correctAnswer: 1,
    explanation: "Using $y = mx + c$ with $m = 2$ and $c = -1$, the equation is $y = 2x - 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  },
  {
    _id: "6a98e808910bb37b0e558675",
    question: "What is the slope of the line perpendicular to the line $y = -\\frac{1}{3}x + 4$?",
    options: [
      "$3$",
      "$-3$",
      "$1/3$",
      "$4$"
    ],
    correctAnswer: 0,
    explanation: "The slope of the given line is $m_1 = -\\frac{1}{3}$. The slope of a perpendicular line is $m_2 = -\\frac{1}{m_1} = -\\frac{1}{-1/3} = 3$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  },
  {
    _id: "6a98e808910bb37b0e558676",
    question: "Find the x-intercept of the line $2x + 3y = 6$.",
    options: [
      "$3$",
      "$2$",
      "$-2$",
      "$6$"
    ],
    correctAnswer: 0,
    explanation: "Setting $y = 0$ in $2x + 3y = 6$ gives $2x = 6 \\implies x = 3$. The x-intercept is $3$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  },
  {
    _id: "6a98e808910bb37b0e558677",
    question: "Which of the following equations represents a vertical line?",
    options: [
      "$y = 5$",
      "$x = -2$",
      "$y = x$",
      "$y = 2x + 1$"
    ],
    correctAnswer: 1,
    explanation: "A vertical line has undefined slope and is parallel to the y-axis, represented by $x = c$. Here $x = -2$ represents a vertical line.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  },
  {
    _id: "6a98e808910bb37b0e558678",
    question: "Find the slope of the line passing through the origin $(0, 0)$ and the point $(5, 10)$.",
    options: [
      "$0$",
      "$1/2$",
      "$2$",
      "$10$"
    ],
    correctAnswer: 2,
    explanation: "The slope is $m = \\frac{10 - 0}{5 - 0} = \\frac{10}{5} = 2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  },
  {
    _id: "6a98e808910bb37b0e558679",
    question: "What is the y-intercept of the line passing through $(1, 4)$ with slope $3$?",
    options: [
      "$1$",
      "$4$",
      "$-1$",
      "$3$"
    ],
    correctAnswer: 0,
    explanation: "Using the point-slope form: $y - 4 = 3(x - 1) \\implies y = 3x - 3 + 4 \\implies y = 3x + 1$. The y-intercept is $1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  },
  {
    _id: "6a98e808910bb37b0e55867a",
    question: "Find the equation of the line with slope $-\\frac{1}{2}$ and passing through the point $(4, -3)$.",
    options: [
      "$y = -\\frac{1}{2}x - 1$",
      "$y = -\\frac{1}{2}x + 1$",
      "$y = -\\frac{1}{2}x - 5$",
      "$y = -\\frac{1}{2}x + 5$"
    ],
    correctAnswer: 0,
    explanation: "Using point-slope form: $y - (-3) = -\\frac{1}{2}(x - 4) \\implies y + 3 = -\\frac{1}{2}x + 2 \\implies y = -\\frac{1}{2}x - 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  },
  {
    _id: "6a98e808910bb37b0e55867b",
    question: "Determine if the lines $y = 2x + 1$ and $y = 2x - 5$ are parallel, perpendicular, or neither.",
    options: [
      "Parallel",
      "Perpendicular",
      "Neither",
      "They are the same line"
    ],
    correctAnswer: 0,
    explanation: "Both lines have the same slope $m = 2$ and distinct y-intercepts ($1$ and $-5$). Therefore, the lines are parallel.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Slope and intercept forms",
    difficulty: "easy"
  }
];

module.exports = { repairedGenuineStraightLines };
