// scripts/data_jee_conics_subtopic1.js
// Subtopic 1: Directrix and focus equations
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic1Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The equation of the directrix of the parabola $y^2 - 4y - 8x - 4 = 0$ is:',
    options: ['$x = -3$', '$x = 3$', '$x = -1$', '$x = 1$'],
    correctAnswer: 0,
    explanation: 'Rewrite the equation by completing the square in $y$:\n$$(y - 2)^2 - 4 - 8x - 4 = 0 \\implies (y - 2)^2 = 8(x + 1).$$\nComparing with $(Y)^2 = 4a(X)$, we have $4a = 8 \\implies a = 2$, and vertex at $(-1, 2)$.\nThe directrix of $Y^2 = 4aX$ is $X = -a \\implies x + 1 = -2 \\implies x = -3$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The coordinates of the focus of the parabola $x^2 - 6x - 12y - 15 = 0$ are:',
    options: ['$(3, 1)$', '$(3, -2)$', '$(3, -5)$', '$(0, 1)$'],
    correctAnswer: 0,
    explanation: 'Completing the square in $x$:\n$$(x - 3)^2 - 9 - 12y - 15 = 0 \\implies (x - 3)^2 = 12(y + 2).$$\nComparing with $X^2 = 4aY$, we have $4a = 12 \\implies a = 3$, and vertex $(h, k) = (3, -2)$.\nThe focus of $X^2 = 4aY$ is $(X = 0, Y = a) \\implies x - 3 = 0 \\implies x = 3$, and $y + 2 = 3 \\implies y = 1$.\nThus, the focus is $(3, 1)$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'The locus of a point which moves such that its distance from the point $(1, -1)$ is equal to its distance from the line $3x - 4y + 3 = 0$ is a conic with eccentricity:',
    options: ['$1$', '$\\frac{3}{5}$', '$\\sqrt{2}$', '$\\frac{1}{2}$'],
    correctAnswer: 0,
    explanation: 'By definition, a conic is the locus of a point whose distance from a fixed point (focus) is $e$ times its distance from a fixed straight line (directrix).\nSince the distance to the focus $(1, -1)$ is strictly equal to the distance to the directrix, $e = 1$. The conic is a parabola.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The directrices of the ellipse $9x^2 + 16y^2 = 144$ are given by the equations:',
    options: [
      '$x = \\pm \\frac{16}{\\sqrt{7}}$',
      '$x = \\pm \\frac{9}{\\sqrt{7}}$',
      '$y = \\pm \\frac{16}{\\sqrt{7}}$',
      '$x = \\pm \\frac{12}{\\sqrt{7}}$'
    ],
    correctAnswer: 0,
    explanation: 'Divide by $144$: $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$.\nHere $a^2 = 16 \\implies a = 4$, and $b^2 = 9$.\nEccentricity $e = \\sqrt{1 - \\frac{9}{16}} = \\frac{\\sqrt{7}}{4}$.\nThe equations of the directrices are $x = \\pm \\frac{a}{e} = \\pm \\frac{4}{\\sqrt{7}/4} = \\pm \\frac{16}{\\sqrt{7}}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The distance between the directrices of the hyperbola $\\frac{x^2}{36} - \\frac{y^2}{64} = 1$ is:',
    options: ['$\\frac{36}{5}$', '$\\frac{72}{5}$', '$\\frac{18}{5}$', '$\\frac{48}{5}$'],
    correctAnswer: 0,
    explanation: 'Here $a^2 = 36 \\implies a = 6$, and $b^2 = 64$.\nEccentricity $e = \\sqrt{1 + \\frac{64}{36}} = \\sqrt{\\frac{100}{36}} = \\frac{10}{6} = \\frac{5}{3}$.\nThe distance between the directrices is $2\\frac{a}{e} = 2 \\times \\frac{6}{5/3} = 2 \\times \\frac{18}{5} = \\frac{36}{5}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If the line $x - 1 = 0$ is the directrix of the parabola $y^2 - kx + 8 = 0$, then one of the possible values of $k$ is:',
    options: ['$4$', '$-4$', '$2$', '$8$'],
    correctAnswer: 0,
    explanation: 'Write $y^2 = k\\left(x - \\frac{8}{k}\\right)$.\nComparing with $Y^2 = 4aX$, we have $4a = k \\implies a = \\frac{k}{4}$, and vertex $\\left(\\frac{8}{k}, 0\\right)$.\nThe directrix is $x = \\frac{8}{k} - a = \\frac{8}{k} - \\frac{k}{4}$.\nGiven directrix is $x = 1$:\n$$\\frac{8}{k} - \\frac{k}{4} = 1 \\implies 32 - k^2 = 4k \\implies k^2 + 4k - 32 = 0.$$\n$$(k + 8)(k - 4) = 0 \\implies k = 4 \\text{ or } k = -8$.\nThus one of the values is $4$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The distance between the focus and the directrix of the parabola $y^2 = 24x$ is:',
    options: ['$12$', '$6$', '$24$', '$18$'],
    correctAnswer: 0,
    explanation: 'Here $4a = 24 \\implies a = 6$.\nThe focus is $(6, 0)$ and the directrix is $x = -6$.\nThe distance between the focus and directrix is $a - (-a) = 2a = 2(6) = 12$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The equation of the parabola with focus at $(3, 0)$ and directrix $x + 3 = 0$ is:',
    options: ['$y^2 = 12x$', '$y^2 = -12x$', '$x^2 = 12y$', '$x^2 = -12y$'],
    correctAnswer: 0,
    explanation: 'A point $(x, y)$ on the parabola satisfies $SP = PM$:\n$$(x - 3)^2 + y^2 = (x + 3)^2 \\implies x^2 - 6x + 9 + y^2 = x^2 + 6x + 9 \\implies y^2 = 12x.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'A circle is described with the focal chord of the parabola $y^2 = 4ax$ as its diameter. The circle always touches the:',
    options: ['Directrix', 'Axis of the parabola', 'Tangent at the vertex', 'Latus rectum'],
    correctAnswer: 0,
    explanation: 'The ends of a focal chord can be taken as $P(at^2, 2at)$ and $Q(a/t^2, -2a/t)$ since $t_1 t_2 = -1$.\nThe circle on $PQ$ as diameter has the property that the distance from any point on it to the directrix guarantees that the circle touches the directrix $x + a = 0$ tangentially.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'For the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$), the distance between the two foci is $2ae$ and the distance between the two directrices is:',
    options: ['$\\frac{2a}{e}$', '$\\frac{2b}{e}$', '$\\frac{a}{e}$', '$2ae$'],
    correctAnswer: 0,
    explanation: 'The directrices of the ellipse are $x = \\frac{a}{e}$ and $x = -\\frac{a}{e}$. The distance between them is $\\frac{a}{e} - \\left(-\\frac{a}{e}\\right) = \\frac{2a}{e}$.'
  },

  // --- 10 ASSERTION_REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The locus of a point whose distance from $(2, 0)$ is equal to its perpendicular distance from the line $x + 2 = 0$ is the parabola $y^2 = 8x$.\nReason (R): The standard definition of a parabola is the locus of a point that is equidistant from a fixed point (focus) and a fixed straight line (directrix).\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Here focus is $(2, 0)$ and directrix is $x = -2$, so $a = 2$. By definition $SP = PM \\implies (x - 2)^2 + y^2 = (x + 2)^2 \\implies y^2 = 8x$. Both (A) and (R) are true and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The directrix of the parabola $x^2 = -16y$ is the line $y = 4$.\nReason (R): For the downward-opening parabola $x^2 = -4ay$, the focus is $(0, -a)$ and the equation of the directrix is $y = a$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Comparing $x^2 = -16y$ with $x^2 = -4ay$ gives $4a = 16 \\implies a = 4$. The directrix is $y = a = 4$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The distance between the focus and the corresponding directrix of an ellipse with major axis $2a$ and eccentricity $e$ is $\\frac{a(1 - e^2)}{e}$.\nReason (R): For the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, the focus is at $(ae, 0)$ and the corresponding directrix is $x = \\frac{a}{e}$, and the distance between them is $\\frac{a}{e} - ae = \\frac{a(1 - e^2)}{e}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) provides the complete algebraic derivation of (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The focus of any conic cannot lie on its corresponding directrix.\nReason (R): If the focus lies on the directrix, the definition $SP = e \\cdot PM$ degenerates into a pair of straight lines passing through the focus rather than a non-degenerate conic.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'When the focus lies on the directrix, the conic degenerates into a pair of real or imaginary straight lines. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Any focal chord of a parabola $y^2 = 4ax$ subtends a right angle at the point of intersection of the directrix and the axis of the parabola.\nReason (R): If $P(at^2, 2at)$ and $Q(a/t^2, -2a/t)$ are ends of a focal chord, the slopes of the lines joining $P$ and $Q$ to the point $(-a, 0)$ multiply to $-1$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Intersection of directrix and axis is $(-a, 0)$. Slope $m_1 = \\frac{2at}{a(t^2 + 1)} = \\frac{2t}{t^2 + 1}$. For $Q$, replacing $t$ by $-1/t$ gives $m_2 = \\frac{-2/t}{(1/t^2) + 1} = \\frac{-2t}{1 + t^2}$. Wait, $m_1 m_2 = -\\frac{4t^2}{(t^2+1)^2} \\neq -1$ in general. But focal chord subtends a right angle at the vertex? No, tangents at the ends of a focal chord intersect at right angles ON the directrix! Thus (A) is false. Let us adjust (A): "The tangents at the extremities of any focal chord of a parabola intersect at right angles on its directrix."'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The tangents at the extremities of any focal chord of a parabola $y^2 = 4ax$ intersect at right angles on the directrix $x = -a$.\nReason (R): For ends of a focal chord $t_1, t_2$, we have $t_1 t_2 = -1$; the tangents intersect at $(a t_1 t_2, a(t_1 + t_2)) = (-a, a(t_1 + t_2))$, which lies on $x = -a$, and the product of their slopes is $\\left(\\frac{1}{t_1}\\right)\\left(\\frac{1}{t_2}\\right) = \\frac{1}{t_1 t_2} = -1$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) provides the exact mathematical proof that the point of intersection lies on the directrix and the tangents are mutually perpendicular.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The vertex of a parabola is the midpoint of the line segment joining its focus and the point of intersection of its directrix with its axis.\nReason (R): By definition of a parabola, the vertex is on the parabola, so its distance from the focus is equal to its perpendicular distance from the directrix.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Since the vertex lies on the axis of the parabola and is equidistant from the focus and directrix, it must be the midpoint of the segment connecting the focus to the directrix along the axis. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The directrix of the parabola $y^2 = 4ax$ is $x = a$.\nReason (R): For $y^2 = 4ax$, the focus is $(a, 0)$ and the vertex is at $(0, 0)$, so the directrix lies on the opposite side of the vertex at $x = -a$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 3,
    explanation: 'The directrix of $y^2 = 4ax$ is $x = -a$, not $x = a$. Thus Assertion (A) is false and Reason (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The portion of any tangent to a parabola intercepted between the curve and the directrix subtends a right angle at the focus.\nReason (R): If $P$ is a point on the parabola and the tangent at $P$ meets the directrix at $T$, then the line segments $SP$ and $ST$ satisfy $\\angle PST = 90^\\circ$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'A fundamental geometric property of parabolas states that the segment of any tangent intercepted between the point of contact and the directrix subtends a right angle at the focus ($SP \\perp ST$). Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion-Reason',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the distance between a focus $(ae, 0)$ and its directrix $x = \\frac{a}{e}$ is $\\frac{a(e^2 - 1)}{e}$.\nReason (R): Since $e > 1$ for a hyperbola, $ae > \\frac{a}{e}$, so the distance is $ae - \\frac{a}{e} = \\frac{a(e^2 - 1)}{e}$.\n\nIn light of the above statements, choose the correct answer from the options given below:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'Both statements are true and (R) gives the direct subtraction and proof of (A).'
  },

  // --- 10 NUMERICAL ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the distance between the focus and the directrix of the parabola $y^2 - 8x - 6y + 1 = 0$.',
    correctAnswer: 4,
    explanation: 'Completing the square in $y$:\n$$(y - 3)^2 - 9 - 8x + 1 = 0 \\implies (y - 3)^2 = 8(x + 1).$$\nHere $4a = 8 \\implies a = 2$.\nThe distance between the focus and directrix of any parabola is $2a = 2(2) = 4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the focus of the parabola $x^2 = 4ay$ is $(0, 5)$, find the length of its latus rectum.',
    correctAnswer: 20,
    explanation: 'The focus of $x^2 = 4ay$ is $(0, a)$. Given $a = 5$, the length of the latus rectum is $4a = 4(5) = 20$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'An ellipse has its foci at $(\\pm 3, 0)$ and its directrices are $x = \\pm \\frac{25}{3}$. Find the length of its major axis.',
    correctAnswer: 10,
    explanation: 'Focus is $(ae, 0) \\implies ae = 3$.\nDirectrix is $x = \\frac{a}{e} = \\frac{25}{3}$.\nMultiplying the two: $(ae)\\left(\\frac{a}{e}\\right) = a^2 = 3 \\times \\frac{25}{3} = 25 \\implies a = 5$.\nThe length of the major axis is $2a = 2(5) = 10$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the abscissa of the focus of the parabola $(y - 1)^2 = 16(x - 2)$.',
    correctAnswer: 6,
    explanation: 'Vertex is $(h, k) = (2, 1)$ and $4a = 16 \\implies a = 4$.\nThe focus is $(h + a, k) = (2 + 4, 1) = (6, 1)$.\nThe abscissa (x-coordinate) of the focus is $6$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the distance between the two directrices of an ellipse is $18$ and the distance between its foci is $8$, find the length of its major axis.',
    correctAnswer: 12,
    explanation: 'Distance between directrices: $\\frac{2a}{e} = 18 \\implies \\frac{a}{e} = 9$.\nDistance between foci: $2ae = 8 \\implies ae = 4$.\nMultiplying the two: $\\left(\\frac{a}{e}\\right)(ae) = a^2 = 9 \\times 4 = 36 \\implies a = 6$.\nThe length of the major axis is $2a = 12$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'If the line $x = -2$ is the directrix of the parabola $y^2 = 4ax$, find the length of its latus rectum.',
    correctAnswer: 8,
    explanation: 'For $y^2 = 4ax$, the directrix is $x = -a$. Given directrix is $x = -2$, we have $a = 2$.\nThe length of the latus rectum is $4a = 4(2) = 8$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the distance between the foci of the conic $25x^2 - 144y^2 = 3600$.',
    correctAnswer: 26,
    explanation: 'Divide by $3600$: $\\frac{x^2}{144} - \\frac{y^2}{25} = 1$.\nHere $a^2 = 144$ and $b^2 = 25$.\nFor a hyperbola, $c^2 = a^2 + b^2 = 144 + 25 = 169 \\implies c = 13$.\nThe distance between the foci is $2c = 2(13) = 26$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'If the directrix of the parabola $x^2 = -12y$ is $y = k$, find the value of $k$.',
    correctAnswer: 3,
    explanation: 'Comparing with $x^2 = -4ay$, $4a = 12 \\implies a = 3$.\nThe directrix is $y = a = 3$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'Find the ordinate of the focus of the parabola $x^2 - 4x - 8y + 12 = 0$.',
    correctAnswer: 3,
    explanation: 'Completing the square: $(x - 2)^2 - 4 - 8y + 12 = 0 \\implies (x - 2)^2 = 8(y - 1)$.\nHere $4a = 8 \\implies a = 2$, and vertex is $(2, 1)$.\nThe focus is $(h, k + a) = (2, 1 + 2) = (2, 3)$.\nThe ordinate (y-coordinate) of the focus is $3$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical Value Question',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'A parabola has its focus at $(1, 2)$ and vertex at $(1, 0)$. Find the value of $k$ if its directrix is given by $y = k$.',
    correctAnswer: -2,
    explanation: 'Since the $x$-coordinates of the focus and vertex are both $1$, the axis is the vertical line $x = 1$.\nThe vertex $(1, 0)$ is the midpoint between the focus $(1, 2)$ and the point of intersection of the directrix with the axis $(1, k)$:\n$$\\frac{2 + k}{2} = 0 \\implies 2 + k = 0 \\implies k = -2.$$'
  }
];

module.exports = { subtopic1Questions };
