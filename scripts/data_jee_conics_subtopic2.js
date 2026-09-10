// scripts/data_jee_conics_subtopic2.js
// Subtopic 2: Ellipse equations
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic2Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The length of the latus rectum of the ellipse $4x^2 + 9y^2 - 16x + 54y + 61 = 0$ is:',
    options: ['$\\frac{8}{3}$', '$\\frac{4}{3}$', '$\\frac{16}{3}$', '$\\frac{9}{2}$'],
    correctAnswer: 0,
    explanation: 'Group terms and complete squares:\n$$4(x^2 - 4x) + 9(y^2 + 6y) = -61$$\n$$4(x - 2)^2 - 16 + 9(y + 3)^2 - 81 = -61 \\implies 4(x - 2)^2 + 9(y + 3)^2 = 36.$$\nDividing by $36$:\n$$\\frac{(x - 2)^2}{9} + \\frac{(y + 3)^2}{4} = 1.$$\nHere $a^2 = 9 \\implies a = 3$, and $b^2 = 4$.\nThe length of the latus rectum is $\\frac{2b^2}{a} = \\frac{2(4)}{3} = \\frac{8}{3}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The radius of the director circle of the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ is:',
    options: ['$5$', '$\\sqrt{7}$', '$7$', '$25$'],
    correctAnswer: 0,
    explanation: 'The equation of the director circle of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ is $x^2 + y^2 = a^2 + b^2$.\nHere $a^2 = 16$ and $b^2 = 9$, so $x^2 + y^2 = 16 + 9 = 25$.\nThe radius is $\\sqrt{25} = 5$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If the line $y = mx + c$ is a tangent to the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, then the condition of tangency is:',
    options: [
      '$c^2 = a^2 m^2 + b^2$',
      '$c^2 = a^2 m^2 - b^2$',
      '$c^2 = a^2 - b^2 m^2$',
      '$c = a m + b$'
    ],
    correctAnswer: 0,
    explanation: 'Substituting $y = mx + c$ into the ellipse equation gives $\\frac{x^2}{a^2} + \\frac{(mx+c)^2}{b^2} = 1 \\implies (b^2 + a^2 m^2)x^2 + 2a^2 mc x + a^2(c^2 - b^2) = 0$.\nSetting the discriminant $\\Delta = 0$ for tangency:\n$$(2a^2 mc)^2 - 4(b^2 + a^2 m^2)a^2(c^2 - b^2) = 0 \\implies c^2 = a^2 m^2 + b^2.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'An ellipse has eccentricity $e = \\frac{1}{2}$ and the distance between its foci is $4$. The equation of the ellipse in standard form is:',
    options: [
      '$\\frac{x^2}{16} + \\frac{y^2}{12} = 1$',
      '$\\frac{x^2}{16} + \\frac{y^2}{4} = 1$',
      '$\\frac{x^2}{12} + \\frac{y^2}{16} = 1$',
      '$\\frac{x^2}{8} + \\frac{y^2}{4} = 1$'
    ],
    correctAnswer: 0,
    explanation: 'Distance between foci: $2ae = 4 \\implies ae = 2$.\nGiven $e = 1/2$, we get $a = \\frac{2}{1/2} = 4$.\nThen $b^2 = a^2(1 - e^2) = 16\\left(1 - \\frac{1}{4}\\right) = 16\\left(\\frac{3}{4}\\right) = 12$.\nThus the equation is $\\frac{x^2}{16} + \\frac{y^2}{12} = 1$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The area of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ is:',
    options: ['$20\\pi$', '$41\\pi$', '$40\\pi$', '$10\\pi$'],
    correctAnswer: 0,
    explanation: 'Here $a = 5$ and $b = 4$.\nThe area of the ellipse is $\\pi a b = \\pi(5)(4) = 20\\pi$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The equation of the tangent to the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ at the point in the first quadrant whose eccentric angle is $\\frac{\\pi}{4}$ is:',
    options: [
      '$\\frac{x}{5\\sqrt{2}} + \\frac{y}{4\\sqrt{2}} = 1$',
      '$\\frac{x}{5} + \\frac{y}{4} = 1$',
      '$4x + 5y = 20\\sqrt{2}$',
      '$5x + 4y = 40$'
    ],
    correctAnswer: 0,
    explanation: 'The parametric coordinates are $(a\\cos\\theta, b\\sin\\theta) = \\left(5\\cos\\frac{\\pi}{4}, 4\\sin\\frac{\\pi}{4}\\right) = \\left(\\frac{5}{\\sqrt{2}}, \\frac{4}{\\sqrt{2}}\\right)$.\nThe equation of the tangent at $(x_1, y_1)$ is $\\frac{x x_1}{a^2} + \\frac{y y_1}{b^2} = 1$:\n$$\\frac{x(5/\\sqrt{2})}{25} + \\frac{y(4/\\sqrt{2})}{16} = 1 \\implies \\frac{x}{5\\sqrt{2}} + \\frac{y}{4\\sqrt{2}} = 1.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The equation of the auxiliary circle of the ellipse $9x^2 + 25y^2 = 225$ is:',
    options: ['$x^2 + y^2 = 25$', '$x^2 + y^2 = 9$', '$x^2 + y^2 = 34$', '$x^2 + y^2 = 16$'],
    correctAnswer: 0,
    explanation: 'Dividing by $225$ gives $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, so $a^2 = 25$.\nThe auxiliary circle of an ellipse is the circle described on its major axis as diameter: $x^2 + y^2 = a^2 = 25$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'If the latus rectum of an ellipse is equal to half of its minor axis, then its eccentricity $e$ is:',
    options: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$\\frac{1}{\\sqrt{2}}$', '$\\frac{\\sqrt{5}}{3}$'],
    correctAnswer: 0,
    explanation: 'Length of latus rectum: $\\frac{2b^2}{a}$. Half of minor axis: $b$.\n$$\\frac{2b^2}{a} = b \\implies \\frac{2b}{a} = 1 \\implies \\frac{b}{a} = \\frac{1}{2}.$$\nEccentricity $e = \\sqrt{1 - \\left(\\frac{b}{a}\\right)^2} = \\sqrt{1 - \\frac{1}{4}} = \\frac{\\sqrt{3}}{2}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The locus of the point of intersection of two perpendicular tangents to the ellipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ is:',
    options: ['$x^2 + y^2 = 13$', '$x^2 + y^2 = 5$', '$x^2 + y^2 = 9$', '$x^2 + y^2 = 25$'],
    correctAnswer: 0,
    explanation: 'The locus of the point of intersection of mutually perpendicular tangents to an ellipse is its director circle, whose equation is $x^2 + y^2 = a^2 + b^2 = 9 + 4 = 13$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'If the normal at an end of a latus rectum of an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ passes through one end of the minor axis, then its eccentricity satisfies:',
    options: ['$e^4 + e^2 - 1 = 0$', '$e^4 - e^2 + 1 = 0$', '$e^2 + e - 1 = 0$', '$e^4 + e^2 + 1 = 0$'],
    correctAnswer: 0,
    explanation: 'The end of the latus rectum is $P\\left(ae, \\frac{b^2}{a}\\right)$.\nThe equation of the normal at $(x_1, y_1)$ is $\\frac{a^2 x}{x_1} - \\frac{b^2 y}{y_1} = a^2 - b^2$.\n$$\\frac{a^2 x}{ae} - \\frac{b^2 y}{b^2/a} = a^2 - b^2 \\implies \\frac{ax}{e} - ay = a^2 - b^2.$$\nSince it passes through $(0, -b)$:\n$$0 - a(-b) = a^2 - b^2 \\implies ab = a^2 e^2 \\implies b = ae^2.$$\nSquaring gives $b^2 = a^2 e^4$. Since $b^2 = a^2(1 - e^2)$, we have $a^2(1 - e^2) = a^2 e^4 \\implies e^4 + e^2 - 1 = 0$.'
  },

  // --- 10 ASSERTION_REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The eccentricity of any ellipse strictly satisfies $0 < e < 1$.\nReason (R): For an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, $b^2 = a^2(1 - e^2)$; since $a > 0$ and $b > 0$, $1 - e^2 > 0 \\implies e^2 < 1$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The locus of the point of intersection of perpendicular tangents to the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ is the circle $x^2 + y^2 = 25$.\nReason (R): The director circle of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ is $x^2 + y^2 = a^2 + b^2$, which represents the locus of points from which mutually perpendicular tangents can be drawn.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the direct definition and explanation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The circle is a limiting case of an ellipse with eccentricity $e = 0$.\nReason (R): When $e = 0$, $b^2 = a^2(1 - 0) = a^2 \\implies a = b$, so the equation $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ becomes $x^2 + y^2 = a^2$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) provides the complete algebraic justification of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The line $y = x + 5$ is a tangent to the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$.\nReason (R): For the line $y = mx + c$ to touch $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, the condition is $c^2 = a^2 m^2 + b^2$; here $m = 1, c = 5$, and $5^2 = 16(1)^2 + 9 = 25$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since $c^2 = 25$ and $a^2 m^2 + b^2 = 16(1) + 9 = 25$, the tangency condition is satisfied identically. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The length of the latus rectum of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ is $\\frac{32}{5}$.\nReason (R): For the standard ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$), the length of the latus rectum is given by $\\frac{2b^2}{a}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Here $a = 5$ and $b^2 = 16$. The latus rectum is $\\frac{2(16)}{5} = \\frac{32}{5}$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The product of the perpendiculars drawn from the foci of an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ to any tangent is constant and equal to $b^2$.\nReason (R): For any tangent $y = mx + \\sqrt{a^2 m^2 + b^2}$, the perpendicular distances from $(\\pm ae, 0)$ are $p_1 = \\frac{|mae + \\sqrt{a^2 m^2 + b^2}|}{\\sqrt{1 + m^2}}$ and $p_2 = \\frac{|-mae + \\sqrt{a^2 m^2 + b^2}|}{\\sqrt{1 + m^2}}$, giving $p_1 p_2 = \\frac{a^2 m^2 + b^2 - m^2 a^2 e^2}{1 + m^2} = b^2$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the classic algebraic verification of this famous property of ellipse tangents.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The feet of the perpendiculars drawn from the foci upon any tangent to an ellipse lie on the auxiliary circle.\nReason (R): The auxiliary circle of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ is $x^2 + y^2 = a^2$, and eliminating the slope parameter $m$ from the tangent and perpendicular through a focus yields $x^2 + y^2 = a^2$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) is the correct mathematical explanation of this geometric theorem.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the eccentric angles of two points on the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ differ by $\\frac{\\pi}{2}$, then the tangents at these points intersect on the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 2$.\nReason (R): The point of intersection of tangents at angles $\\theta$ and $\\phi$ is $\\left(a\\frac{\\cos\\frac{\\theta+\\phi}{2}}{\\cos\\frac{\\theta-\\phi}{2}}, b\\frac{\\sin\\frac{\\theta+\\phi}{2}}{\\cos\\frac{\\theta-\\phi}{2}}\\right)$; when $\\theta - \\phi = \\frac{\\pi}{2}$, $\\cos^2\\frac{\\theta-\\phi}{2} = \\cos^2\\frac{\\pi}{4} = \\frac{1}{2}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) provides the complete parametric calculation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The equation $\\frac{x^2}{16} + \\frac{y^2}{25} = 1$ has its major axis along the $x$-axis.\nReason (R): For an ellipse, the major axis is along the coordinate axis having the larger denominator under the squared variable.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 3,
    explanation: 'Since the denominator under $y^2$ ($25$) is larger than that under $x^2$ ($16$), the major axis is along the $y$-axis, not the $x$-axis. Thus (A) is false and (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The area of the triangle formed by the three points on the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ whose eccentric angles are $\\alpha, \\beta, \\gamma$ is $\\frac{b}{a}$ times the area of the corresponding triangle on the auxiliary circle.\nReason (R): The transformation $X = x, Y = \\frac{a}{b}y$ maps the ellipse to the auxiliary circle $X^2 + Y^2 = a^2$ with Jacobian $\\frac{a}{b}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Scaling the $y$-coordinate by $a/b$ transforms the ellipse into the circle of radius $a$, multiplying areas by $a/b$. Thus the area of the ellipse triangle is $\\frac{b}{a}$ of the circle triangle. Both (A) and (R) are true and (R) explains (A).'
  },

  // --- 10 NUMERICAL ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the length of the major axis of the ellipse $9x^2 + 16y^2 = 576$.',
    correctAnswer: 16,
    explanation: 'Divide by $576$: $\\frac{x^2}{64} + \\frac{y^2}{36} = 1$.\nHere $a^2 = 64 \\implies a = 8$. The length of the major axis is $2a = 2(8) = 16$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the distance between the foci of an ellipse is $6$ and the length of its minor axis is $8$, find the length of its major axis.',
    correctAnswer: 10,
    explanation: 'Distance between foci: $2c = 6 \\implies c = 3$.\nMinor axis length: $2b = 8 \\implies b = 4$.\nSince $a^2 = b^2 + c^2 = 16 + 9 = 25 \\implies a = 5$.\nThe length of the major axis is $2a = 10$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the length of the latus rectum of the ellipse $3x^2 + 4y^2 = 48$.',
    correctAnswer: 6,
    explanation: 'Divide by $48$: $\\frac{x^2}{16} + \\frac{y^2}{12} = 1$.\nHere $a^2 = 16 \\implies a = 4$, and $b^2 = 12$.\nThe length of the latus rectum is $\\frac{2b^2}{a} = \\frac{2(12)}{4} = 6$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the square of the radius of the director circle of the ellipse $2x^2 + 3y^2 = 60$.',
    correctAnswer: 50,
    explanation: 'Dividing by $60$: $\\frac{x^2}{30} + \\frac{y^2}{20} = 1$.\nHere $a^2 = 30$ and $b^2 = 20$.\nThe director circle has equation $x^2 + y^2 = a^2 + b^2 = 30 + 20 = 50$.\nThe square of the radius is $50$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the semi-major axis of an ellipse is $5$ and its eccentricity is $0.6$, find the length of the semi-minor axis $b$.',
    correctAnswer: 4,
    explanation: '$$b^2 = a^2(1 - e^2) = 25(1 - 0.36) = 25(0.64) = 16 \\implies b = 4.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the distance between the two foci of the ellipse $16x^2 + 25y^2 = 400$.',
    correctAnswer: 6,
    explanation: 'Divide by $400$: $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$.\nHere $a^2 = 25$ and $b^2 = 16$.\nDistance from center to focus is $c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 16} = 3$.\nThe distance between the two foci is $2c = 2(3) = 6$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If the line $y = 2x + c$ is tangent to the ellipse $\\frac{x^2}{8} + \\frac{y^2}{4} = 1$, find the positive value of $c$.',
    correctAnswer: 6,
    explanation: 'For tangency: $c^2 = a^2 m^2 + b^2$.\nHere $a^2 = 8, b^2 = 4, m = 2$.\n$$c^2 = 8(2^2) + 4 = 8(4) + 4 = 32 + 4 = 36 \\implies c = 6.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the product of the lengths of the semi-major and semi-minor axes of the ellipse $4x^2 + y^2 = 64$.',
    correctAnswer: 32,
    explanation: 'Divide by $64$: $\\frac{x^2}{16} + \\frac{y^2}{64} = 1$.\nHere $a^2 = 64 \\implies a = 8$ (semi-major axis) and $b^2 = 16 \\implies b = 4$ (semi-minor axis).\nThe product is $a b = 8 \\times 4 = 32$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the distance between the two directrices of the ellipse $\\frac{x^2}{36} + \\frac{y^2}{27} = 1$.',
    correctAnswer: 24,
    explanation: 'Here $a^2 = 36 \\implies a = 6$, and $b^2 = 27$.\nEccentricity $e = \\sqrt{1 - \\frac{27}{36}} = \\sqrt{\\frac{9}{36}} = \\frac{1}{2}$.\nThe distance between the directrices is $\\frac{2a}{e} = \\frac{2(6)}{1/2} = 24$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'If the length of the latus rectum of an ellipse is equal to its semi-major axis, and its eccentricity is $e$, find the value of $2e^2$.',
    correctAnswer: 1,
    explanation: 'Length of latus rectum: $\\frac{2b^2}{a} = a \\implies \\frac{b^2}{a^2} = \\frac{1}{2}$.\nSince $e^2 = 1 - \\frac{b^2}{a^2} = 1 - \\frac{1}{2} = \\frac{1}{2}$, we have $2e^2 = 2\\left(\\frac{1}{2}\\right) = 1$.'
  }
];

module.exports = { subtopic2Questions };
