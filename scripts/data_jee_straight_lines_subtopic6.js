// scripts/data_jee_straight_lines_subtopic6.js
module.exports = [
  {
    "type": "single_choice",
    "question": "A line passing through the point $A(3, 0)$ makes an angle of $30^\\circ$ with the positive direction of the $x$-axis. If this line is rotated about $A$ through an angle of $15^\\circ$ in the clockwise direction, then its equation in the new position is:",
    "options": [
      "$y = (2 - \\sqrt{3})(x - 3)$",
      "$y = (2 + \\sqrt{3})(x - 3)$",
      "$y = (\\sqrt{3} - 1)(x - 3)$",
      "$y = (\\sqrt{3} + 1)(x - 3)$"
    ],
    "correctAnswer": 0,
    "explanation": "Initial inclination of the line was $\\theta_1 = 30^\\circ$. Rotated by $15^\\circ$ clockwise, the new inclination is $\\theta_2 = 30^\\circ - 15^\\circ = 15^\\circ$. The new slope is $m = \\tan(15^\\circ) = 2 - \\sqrt{3}$. Since it still passes through $A(3, 0)$, the point-slope form gives $y - 0 = (2 - \\sqrt{3})(x - 3) \\implies y = (2 - \\sqrt{3})(x - 3)$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium"
  },
  {
    "type": "single_choice",
    "question": "A straight line passes through the point $(2, 2)$ and cuts the coordinate axes at $A$ and $B$. If the area of $\\triangle OAB$ is $9$ sq units, then the sum of the possible slopes of the line is:",
    "options": [
      "$-2.5$",
      "$-2$",
      "$-1.5$",
      "$-3$"
    ],
    "correctAnswer": 0,
    "explanation": "Let the equation of the line be $\\frac{x}{a} + \\frac{y}{b} = 1$. Since it passes through $(2, 2)$, we have $\\frac{2}{a} + \\frac{2}{b} = 1 \\implies 2(a + b) = ab$. The area of $\\triangle OAB$ is $\\frac{1}{2}|ab| = 9 \\implies ab = 18$ (assuming intercepts have the same sign in the first quadrant, or $ab = -18$). If $ab = 18$, $2(a + b) = 18 \\implies a + b = 9$. The roots of $t^2 - 9t + 18 = 0$ are $t = 3, 6$. Thus $(a, b) = (3, 6)$ or $(6, 3)$. The slopes are $m = -\\frac{b}{a}$: for $(3, 6)$, $m_1 = -\\frac{6}{3} = -2$; for $(6, 3)$, $m_2 = -\\frac{3}{6} = -\\frac{1}{2}$. Their sum is $m_1 + m_2 = -2 - 0.5 = -2.5$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium"
  },
  {
    "type": "single_choice",
    "question": "If the intercept made by the line between the coordinate axes is divided by the point $(-4, 3)$ in the ratio $5 : 3$ internally (from $x$-axis to $y$-axis), then the equation of the line is:",
    "options": [
      "$9x - 20y + 96 = 0$",
      "$9x + 20y - 24 = 0$",
      "$20x - 9y + 107 = 0$",
      "$3x + 5y - 3 = 0$"
    ],
    "correctAnswer": 0,
    "explanation": "Let the points of intersection with the axes be $A(a, 0)$ and $B(0, b)$. The point $P(-4, 3)$ divides $AB$ in the ratio $5 : 3$. Thus, $-4 = \\frac{5(0) + 3(a)}{5 + 3} = \\frac{3a}{8} \\implies a = -\\frac{32}{3}$. And $3 = \\frac{5(b) + 3(0)}{5 + 3} = \\frac{5b}{8} \\implies b = \\frac{24}{5}$. The equation of the line in intercept form is $\\frac{x}{-32/3} + \\frac{y}{24/5} = 1 \\implies -\\frac{3x}{32} + \\frac{5y}{24} = 1$. Multiplying by $96$: $-9x + 20y = 96 \\implies 9x - 20y + 96 = 0$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium"
  },
  {
    "type": "single_choice",
    "question": "The equation of a line having slope $-1$ and making an intercept of $4$ on the $y$-axis is:",
    "options": [
      "$x + y - 4 = 0$",
      "$x - y + 4 = 0$",
      "$x + y + 4 = 0$",
      "$x - y - 4 = 0$"
    ],
    "correctAnswer": 0,
    "explanation": "Using the slope-intercept form $y = mx + c$ with $m = -1$ and $c = 4$: $y = -x + 4 \\implies x + y - 4 = 0$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "single_choice",
    "question": "If a straight line makes equal positive intercepts on the coordinate axes and passes through $(3, 5)$, its equation is:",
    "options": [
      "$x + y = 8$",
      "$x - y = -2$",
      "$x + y = 2$",
      "$2x + y = 11$"
    ],
    "correctAnswer": 0,
    "explanation": "Intercept form with equal positive intercepts $a = b$ is $\\frac{x}{a} + \\frac{y}{a} = 1 \\implies x + y = a$. Since the line passes through $(3, 5)$, $3 + 5 = a \\implies a = 8$. Thus the equation is $x + y = 8$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "single_choice",
    "question": "The normal form of the line $\\sqrt{3}x + y + 8 = 0$ is:",
    "options": [
      "$x\\cos(210^\\circ) + y\\sin(210^\\circ) = 4$",
      "$x\\cos(30^\\circ) + y\\sin(30^\\circ) = 4$",
      "$x\\cos(150^\\circ) + y\\sin(150^\\circ) = 4$",
      "$x\\cos(240^\\circ) + y\\sin(240^\\circ) = 4$"
    ],
    "correctAnswer": 0,
    "explanation": "Rewrite as $-\\sqrt{3}x - y = 8$. Divide by $\\sqrt{(-\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = 2$: $-\\frac{\\sqrt{3}}{2}x - \\frac{1}{2}y = 4$. Here $\\cos\\alpha = -\\frac{\\sqrt{3}}{2}$ and $\\sin\\alpha = -\\frac{1}{2}$, so $\\alpha$ is in the third quadrant: $\\alpha = 180^\\circ + 30^\\circ = 210^\\circ$. The normal form is $x\\cos(210^\\circ) + y\\sin(210^\\circ) = 4$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "medium"
  },
  {
    "type": "single_choice",
    "question": "A line has slope $m = 2$ and passes through $(-1, 3)$. The intercept made by this line on the $x$-axis is:",
    "options": [
      "$-\\frac{5}{2}$",
      "$\\frac{5}{2}$",
      "$-5$",
      "$5$"
    ],
    "correctAnswer": 0,
    "explanation": "Equation of the line in point-slope form is $y - 3 = 2(x + 1) \\implies y = 2x + 5$. To find the $x$-intercept, set $y = 0$: $2x + 5 = 0 \\implies x = -\\frac{5}{2}$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "single_choice",
    "question": "If the portion of a line intercepted between the axes is bisected at the point $(p, q)$, then the equation of the line is:",
    "options": [
      "$\\frac{x}{p} + \\frac{y}{q} = 2$",
      "$\\frac{x}{p} + \\frac{y}{q} = 1$",
      "$\\frac{x}{2p} + \\frac{y}{2q} = 1$",
      "$px + qy = 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Let the intercepts on the coordinate axes be $(a, 0)$ and $(0, b)$. Since $(p, q)$ is the midpoint of the segment joining $(a, 0)$ and $(0, b)$, we have $\\frac{a + 0}{2} = p \\implies a = 2p$ and $\\frac{0 + b}{2} = q \\implies b = 2q$. The intercept form of the line is $\\frac{x}{a} + \\frac{y}{b} = 1 \\implies \\frac{x}{2p} + \\frac{y}{2q} = 1 \\implies \\frac{x}{p} + \\frac{y}{q} = 2$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "single_choice",
    "question": "The inclination of the straight line passing through the points $(1, \\sqrt{3})$ and $(2, 2\\sqrt{3})$ with the positive $x$-axis is:",
    "options": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$120^\\circ$"
    ],
    "correctAnswer": 0,
    "explanation": "The slope $m = \\frac{2\\sqrt{3} - \\sqrt{3}}{2 - 1} = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$. The angle of inclination $\\theta$ satisfies $\\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "single_choice",
    "question": "If a line makes intercepts $a$ and $b$ on the axes such that $a + b = 5$ and its slope is $-\\frac{2}{3}$, then the value of $a$ is:",
    "options": [
      "$3$",
      "$2$",
      "$\\frac{5}{2}$",
      "$4$"
    ],
    "correctAnswer": 0,
    "explanation": "The slope of the line in intercept form is $m = -\\frac{b}{a}$. Given $m = -\\frac{2}{3}$, we have $-\\frac{b}{a} = -\\frac{2}{3} \\implies b = \\frac{2}{3}a$. We are given $a + b = 5 \\implies a + \\frac{2}{3}a = 5 \\implies \\frac{5}{3}a = 5 \\implies a = 3$.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): The equation of a line with slope $m$ and $y$-intercept $c$ is $y = mx + c$.\nReason (R): For any point $(x, y)$ on the line with $y$-intercept $(0, c)$, the slope is given by $\\frac{y - c}{x - 0} = m$, which simplifies to $y = mx + c$.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "Assertion (A) is the definition of the slope-intercept form. Reason (R) gives its exact mathematical derivation from the slope formula between $(x, y)$ and $(0, c)$. Thus both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): The slope of a vertical line $x = k$ is undefined.\nReason (R): The angle of inclination of a vertical line with the positive $x$-axis is $90^\\circ$ and $\\tan(90^\\circ)$ is not defined.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "A vertical line is perpendicular to the $x$-axis, so its angle of inclination is $90^\\circ$. Since $m = \\tan(90^\\circ)$, which is undefined, the slope is undefined. Hence both statements are true and (R) correctly explains (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): A line with equation $ax + by + c = 0$ ($a, b \\neq 0$) has $x$-intercept $-\\frac{c}{a}$ and $y$-intercept $-\\frac{c}{b}$.\nReason (R): To find the $x$-intercept we set $y = 0$, giving $ax + c = 0 \\implies x = -\\frac{c}{a}$, and setting $x = 0$ gives $by + c = 0 \\implies y = -\\frac{c}{b}$.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "Setting $y = 0$ determines where the line crosses the $x$-axis, and setting $x = 0$ determines where it crosses the $y$-axis. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): The line passing through $(0, 0)$ cannot be written in the intercept form $\\frac{x}{a} + \\frac{y}{b} = 1$.\nReason (R): For a line passing through the origin, both intercepts $a$ and $b$ are zero, and division by zero is undefined.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "The intercept form $\\frac{x}{a} + \\frac{y}{b} = 1$ requires non-zero intercepts $a \\neq 0, b \\neq 0$. Any line passing through the origin has $a = 0$ and $b = 0$, so it cannot be expressed in intercept form. Both statements are true and Reason correctly explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): If the slope of a line is negative, then it makes an obtuse angle with the positive direction of the $x$-axis.\nReason (R): For $\\theta \\in (90^\\circ, 180^\\circ)$, $\\tan\\theta < 0$.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "Since the inclination of a line $\\theta$ lies in $[0^\\circ, 180^\\circ)$, and the tangent function is negative strictly in the second quadrant $(90^\\circ, 180^\\circ)$, negative slope corresponds to an obtuse angle. Reason (R) directly explains Assertion (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): The line $y = 3$ has slope equal to $0$ and its $x$-intercept is $3$.\nReason (R): The line $y = 3$ is parallel to the $x$-axis and never intersects the $x$-axis.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 3,
    "explanation": "For the line $y = 3$, it is parallel to the $x$-axis, so its slope is indeed $0$. However, its $y$-intercept is $3$, and it has NO $x$-intercept (not $3$). Thus Assertion (A) is FALSE. Reason (R) states that it is parallel to the $x$-axis and never intersects it, which is TRUE. Hence (A) is false but (R) is true.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): The equation of a straight line in symmetric form is $\\frac{x - x_1}{\\cos\\theta} = \\frac{y - y_1}{\\sin\\theta} = r$, where $r$ is the algebraic distance of any point $(x, y)$ from $(x_1, y_1)$.\nReason (R): Any point on this line can be parameterized as $(x_1 + r\\cos\\theta, y_1 + r\\sin\\theta)$.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "The parametric/symmetric form of a straight line represents the coordinates of points at distance $r$ from $(x_1, y_1)$ along the direction $\\theta$. Both statements are true and directly connected.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): If two lines have the same slope $m$ and different $y$-intercepts, they are parallel.\nReason (R): Parallel lines never intersect and have equal angles of inclination with the positive $x$-axis.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "Lines with equal slopes have equal angles of inclination $\\theta_1 = \\theta_2$, meaning they are parallel. With distinct $y$-intercepts, they are non-coincident. Hence both (A) and (R) are true and (R) is the correct explanation of (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): The equation of the line passing through $(a, 0)$ and $(0, b)$ is $bx + ay - ab = 0$.\nReason (R): The two-point form gives $\\frac{y - 0}{x - a} = \\frac{b - 0}{0 - a} = -\\frac{b}{a}$, which simplifies to $ay = -bx + ab \\implies bx + ay - ab = 0$.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "Assertion (A) is the standard equation of a line with intercepts $a$ and $b$, and Reason (R) correctly demonstrates its step-by-step derivation using the two-point form. Both are true and (R) explains (A).",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "assertion_reason",
    "question": "Given below are two statements:\nAssertion (A): If the sum of the intercepts made by a line on the coordinate axes is zero, its slope must be $1$.\nReason (R): If $a + b = 0$, then $b = -a$, so the slope $m = -\\frac{b}{a} = -\\frac{-a}{a} = 1$.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctAnswer": 0,
    "explanation": "In intercept form, $a + b = 0 \\implies b = -a$. The slope of the line is $m = -\\frac{b}{a} = -\\frac{-a}{a} = 1$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "A line passing through $(2, 3)$ has equal non-zero intercepts on the coordinate axes. The value of each intercept is:",
    "options": [],
    "correctAnswer": "5",
    "explanation": "Let the intercept be $a$. Equation of the line is $x + y = a$. Since it passes through $(2, 3)$, we have $2 + 3 = a \\implies a = 5$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "If the line $\\frac{x}{a} + \\frac{y}{b} = 1$ passes through $(1, 2)$ and $a = 3$, then the value of $b$ is:",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Substituting $(1, 2)$ and $a = 3$: $\\frac{1}{3} + \\frac{2}{b} = 1 \\implies \\frac{2}{b} = 1 - \\frac{1}{3} = \\frac{2}{3} \\implies b = 3$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "The slope of the line joining the points $(3, -2)$ and $(7, 6)$ is:",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Slope $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{6 - (-2)}{7 - 3} = \\frac{8}{4} = 2$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "If a line passes through $(1, 4)$ and makes an angle of $45^\\circ$ with the positive $x$-axis, then its $y$-intercept is:",
    "options": [],
    "correctAnswer": "3",
    "explanation": "The slope is $m = \\tan(45^\\circ) = 1$. The equation in slope-intercept form is $y = x + c$. Since it passes through $(1, 4)$: $4 = 1 + c \\implies c = 3$. Hence the $y$-intercept is $3$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "The area of the triangle formed by the line $3x + 4y - 24 = 0$ with the coordinate axes is:",
    "options": [],
    "correctAnswer": "24",
    "explanation": "Setting $y = 0$, $3x = 24 \\implies x = 8$ ($x$-intercept $a = 8$). Setting $x = 0$, $4y = 24 \\implies y = 6$ ($y$-intercept $b = 6$). The area of the triangle formed with coordinate axes is $\\frac{1}{2} |a \\times b| = \\frac{1}{2} (8)(6) = 24$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "If the line passing through $(k, 3)$ and $(4, 7)$ has slope $2$, then the value of $k$ is:",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Slope $m = \\frac{7 - 3}{4 - k} = 2 \\implies \\frac{4}{4 - k} = 2 \\implies 4 - k = 2 \\implies k = 2$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "A line passes through $(2, 2)$ and is perpendicular to the line $3x - 4y = 1$. Its $y$-intercept multiplied by $3$ is:",
    "options": [],
    "correctAnswer": "14",
    "explanation": "The slope of $3x - 4y = 1$ is $\\frac{3}{4}$. The perpendicular slope is $m = -\\frac{4}{3}$. Equation of the line is $y - 2 = -\\frac{4}{3}(x - 2) \\implies y = -\\frac{4}{3}x + \\frac{8}{3} + 2 = -\\frac{4}{3}x + \\frac{14}{3}$. The $y$-intercept is $c = \\frac{14}{3}$. Thus $3c = 14$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "The intercept of the line $2x - 5y + 20 = 0$ on the $x$-axis is $-10$, and on the $y$-axis is $k$. The value of $k$ is:",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Setting $x = 0$ in $2x - 5y + 20 = 0$, we get $-5y + 20 = 0 \\implies 5y = 20 \\implies y = 4$. Thus $k = 4$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "If the point $(3, k)$ lies on the line whose $x$-intercept is $4$ and $y$-intercept is $8$, then the value of $k$ is:",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Equation of the line in intercept form is $\\frac{x}{4} + \\frac{y}{8} = 1 \\implies 2x + y = 8$. Substituting $(3, k)$: $2(3) + k = 8 \\implies 6 + k = 8 \\implies k = 2$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  },
  {
    "type": "numerical",
    "question": "If a line has inclination $135^\\circ$ and passes through $(-2, 5)$, then the value of its $y$-intercept is:",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Slope $m = \\tan(135^\\circ) = -1$. Point-slope equation is $y - 5 = -1(x + 2) \\implies y = -x - 2 + 5 = -x + 3$. The $y$-intercept is $c = 3$.",
    "marks": 4,
    "negativeMarks": 0,
    "difficulty": "easy"
  }
];
