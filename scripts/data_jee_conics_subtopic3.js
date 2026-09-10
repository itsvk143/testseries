module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "For an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$), let $S$ and $S'$ be the foci and $P$ be any point on the ellipse. If the perimeter of $\\Delta SPS'$ is $15$ and the distance between the foci is $5$, then the eccentricity of the ellipse is:",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{5}$"
    ],
    correctAnswer: "$\\frac{1}{2}$",
    explanation: "Perimeter of $\\Delta SPS' = SP + S'P + SS'$. By the focal property of an ellipse, $SP + S'P = 2a$. The distance between foci is $SS' = 2ae$. So $2a + 2ae = 15$. Given $SS' = 2ae = 5$, we have $2a + 5 = 15 \\implies 2a = 10 \\implies a = 5$. Since $2ae = 5$, we find $e = \\frac{5}{2a} = \\frac{5}{10} = \\frac{1}{2}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the eccentricity of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is $e$ and that of its conjugate hyperbola is $e'$, then $\\frac{1}{e^2} + \\frac{1}{e'^2}$ is equal to:",
    options: [
      "$1$",
      "$2$",
      "$\\frac{1}{2}$",
      "$4$"
    ],
    correctAnswer: "$1$",
    explanation: "For the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, $e^2 = 1 + \\frac{b^2}{a^2} = \\frac{a^2+b^2}{a^2}$, so $\\frac{1}{e^2} = \\frac{a^2}{a^2+b^2}$. For its conjugate hyperbola $-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, $e'^2 = 1 + \\frac{a^2}{b^2} = \\frac{a^2+b^2}{b^2}$, so $\\frac{1}{e'^2} = \\frac{b^2}{a^2+b^2}$. Thus, $\\frac{1}{e^2} + \\frac{1}{e'^2} = \\frac{a^2+b^2}{a^2+b^2} = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If a focal chord of the parabola $y^2 = 4ax$ makes an angle $\\alpha$ with the positive $x$-axis, then its length is:",
    options: [
      "$4a \\csc^2 \\alpha$",
      "$4a \\sin^2 \\alpha$",
      "$2a \\csc^2 \\alpha$",
      "$4a \\sec^2 \\alpha$"
    ],
    correctAnswer: "$4a \\csc^2 \\alpha$",
    explanation: "Let the endpoints of the focal chord be $(at_1^2, 2at_1)$ and $(at_2^2, 2at_2)$ with $t_1 t_2 = -1$. The length of the focal chord is $a(t - \\frac{1}{t})^2 + 4a = a(t + \\frac{1}{t})^2$. The slope of the chord is $\\tan \\alpha = \\frac{2a(t_1 - t_2)}{a(t_1^2 - t_2^2)} = \\frac{2}{t_1 + t_2}$. Thus $t_1 + t_2 = 2\\cot \\alpha$. Therefore, length $= a[(t_1 + t_2)^2 + 4] = a(4\\cot^2 \\alpha + 4) = 4a(1 + \\cot^2 \\alpha) = 4a \\csc^2 \\alpha$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The eccentricity of an ellipse whose latus rectum is equal to half of its minor axis is:",
    options: [
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{\\sqrt{5}}{3}$"
    ],
    correctAnswer: "$\\frac{\\sqrt{3}}{2}$",
    explanation: "Length of latus rectum $= \\frac{2b^2}{a}$. Length of minor axis $= 2b$. Given $\\frac{2b^2}{a} = \\frac{1}{2}(2b) = b \\implies 2b = a \\implies \\frac{b}{a} = \\frac{1}{2}$. Eccentricity $e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{1}{4}} = \\frac{\\sqrt{3}}{2}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the eccentricity of a hyperbola is $\\sqrt{3}$, then the eccentricity of its conjugate hyperbola is:",
    options: [
      "$\\sqrt{\\frac{3}{2}}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\sqrt{2}$",
      "$\\frac{3}{\\sqrt{2}}$"
    ],
    correctAnswer: "$\\sqrt{\\frac{3}{2}}$",
    explanation: "We know that $\\frac{1}{e^2} + \\frac{1}{e'^2} = 1$. Since $e = \\sqrt{3}$, $\\frac{1}{3} + \\frac{1}{e'^2} = 1 \\implies \\frac{1}{e'^2} = \\frac{2}{3} \\implies e'^2 = \\frac{3}{2} \\implies e' = \\sqrt{\\frac{3}{2}}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Let $S$ and $S'$ be the foci of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$. If $B$ is an end of the minor axis, then $\\cos(\\angle SBS')$ is:",
    options: [
      "$\\frac{7}{25}$",
      "$\\frac{14}{25}$",
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$"
    ],
    correctAnswer: "$\\frac{7}{25}$",
    explanation: "Here $a^2 = 25 \\implies a = 5$, $b^2 = 16 \\implies b = 4$. The focal distance $c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 16} = 3$. Foci are $S(3, 0)$ and $S'(-3, 0)$, so $SS' = 6$. Let $B = (0, 4)$. Then $BS = \\sqrt{3^2 + 4^2} = 5 = a$ and $BS' = 5$. By the law of cosines in $\\Delta SBS'$, $\\cos(\\angle SBS') = \\frac{BS^2 + BS'^2 - SS'^2}{2(BS)(BS')} = \\frac{25 + 25 - 36}{2(5)(5)} = \\frac{14}{50} = \\frac{7}{25}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If $P$ is a point on the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ and $S, S'$ are its foci, then the value of $|SP - S'P|$ is:",
    options: [
      "$8$",
      "$6$",
      "$10$",
      "$4$"
    ],
    correctAnswer: "$8$",
    explanation: "For a hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, by definition of focal properties, the absolute difference of the focal distances of any point $P$ on the hyperbola is equal to the length of the transverse axis, $|SP - S'P| = 2a$. Here $a^2 = 16 \\implies a = 4$, so $|SP - S'P| = 2(4) = 8$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The semi-latus rectum of an ellipse is the:",
    options: [
      "Harmonic mean between the focal segments of any focal chord",
      "Geometric mean between the focal segments of any focal chord",
      "Arithmetic mean between the focal segments of any focal chord",
      "None of these"
    ],
    correctAnswer: "Harmonic mean between the focal segments of any focal chord",
    explanation: "If $PSP'$ is a focal chord of an ellipse (or parabola or hyperbola), then $\\frac{1}{SP} + \\frac{1}{SP'} = \\frac{2}{l}$, where $l$ is the semi-latus rectum. Therefore, $l = \\frac{2(SP)(SP')}{SP + SP'}$, which is the harmonic mean of the segments $SP$ and $SP'$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the focal distance of an end of the minor axis of an ellipse is $k$ times the focal distance of an end of the major axis (from the nearest focus), then for $k=2$, the eccentricity $e$ is:",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{4}$"
    ],
    correctAnswer: "$\\frac{1}{2}$",
    explanation: "The focal distance of an end of the minor axis is $a$. The distance of an end of the major axis from the nearest focus is $a - ae = a(1 - e)$. Given $a = k a(1 - e) = 2a(1 - e) \\implies 1 = 2(1 - e) \\implies 1 - e = \\frac{1}{2} \\implies e = \\frac{1}{2}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "If the distance between the foci of a hyperbola is twice the distance between its vertices, then its eccentricity is:",
    options: [
      "$2$",
      "$\\sqrt{2}$",
      "$\\sqrt{3}$",
      "$\\frac{2}{\\sqrt{3}}$"
    ],
    correctAnswer: "$2$",
    explanation: "Distance between foci $= 2ae$. Distance between vertices $= 2a$. Given $2ae = 2(2a) \\implies e = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$, the sum of the focal distances of any point $P$ on it is $10$.\\nReason (R): For any ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$), the sum of the focal distances of any point on the ellipse is equal to the length of the major axis $2a$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$), $SP + S'P = 2a$. Here $a^2 = 25 \\implies a = 5$, so $SP + S'P = 2(5) = 10$. Both (A) and (R) are true, and (R) correctly explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The eccentricity of the rectangular hyperbola $x^2 - y^2 = a^2$ is $\\sqrt{2}$.\\nReason (R): For a rectangular hyperbola, the lengths of transverse and conjugate axes are equal, so $a = b$ and $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For a rectangular hyperbola, $a = b$. Thus $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{1 + 1} = \\sqrt{2}$. Both (A) and (R) are true, and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If $e_1$ and $e_2$ are the eccentricities of a hyperbola and its conjugate hyperbola, then $e_1 e_2 > 2$.\\nReason (R): $\\frac{1}{e_1^2} + \\frac{1}{e_2^2} = 1$ and the arithmetic mean of two distinct positive numbers is strictly greater than their geometric mean.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Since $\\frac{1}{e_1^2} + \\frac{1}{e_2^2} = 1$, by AM-GM inequality, $\\frac{\\frac{1}{e_1^2} + \\frac{1}{e_2^2}}{2} \\ge \\sqrt{\\frac{1}{e_1^2 e_2^2}} \\implies \\frac{1}{2} \\ge \\frac{1}{e_1 e_2} \\implies e_1 e_2 \\ge 2$. For distinct $e_1, e_2$ (non-rectangular hyperbola), $e_1 e_2 > 2$. Thus both statements are true and (R) explains (A).",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The eccentricity of a circle is $0$.\\nReason (R): In an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, when the semi-major axis $a$ equals the semi-minor axis $b$, the foci coincide with the center and $e = \\sqrt{1 - \\frac{b^2}{a^2}} = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "When $a = b$, the ellipse becomes a circle $x^2 + y^2 = a^2$. The eccentricity becomes $e = \\sqrt{1 - 1} = 0$. Both (A) and (R) are true and (R) is the correct explanation.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If $P$ is a point on the parabola $y^2 = 4ax$, then its focal distance is $x_1 + a$, where $x_1$ is the abscissa of $P$.\\nReason (R): The distance of any point on a parabola from its focus equals its distance from the directrix, and the directrix of $y^2 = 4ax$ is $x + a = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By definition of parabola, $e = 1$, so distance from focus $S(a, 0)$ equals perpendicular distance to directrix $x = -a$. Thus, $SP = PM = x_1 - (-a) = x_1 + a$. Both (A) and (R) are true and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The eccentricity of the conic $9x^2 + 16y^2 = 144$ is $\\frac{\\sqrt{7}}{4}$.\\nReason (R): For the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$), the eccentricity is given by $e = \\sqrt{1 - \\frac{b^2}{a^2}}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The equation can be written as $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$. Here $a^2 = 16, b^2 = 9$. Thus $e = \\sqrt{1 - \\frac{9}{16}} = \\sqrt{\\frac{7}{16}} = \\frac{\\sqrt{7}}{4}$. Both (A) and (R) are true, and (R) is the correct explanation of (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the length of the minor axis of an ellipse is equal to the distance between its foci, then its eccentricity is $\\frac{1}{\\sqrt{2}}$.\\nReason (R): For an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$), length of minor axis is $2b$ and distance between foci is $2ae$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Given $2b = 2ae \\implies b = ae$. Since $b^2 = a^2(1 - e^2)$, we have $a^2 e^2 = a^2(1 - e^2) \\implies e^2 = 1 - e^2 \\implies 2e^2 = 1 \\implies e = \\frac{1}{\\sqrt{2}}$. Both (A) and (R) are true, and (R) explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A conic with eccentricity $e = 1.5$ is an ellipse.\\nReason (R): A conic represents an ellipse if its eccentricity $e$ satisfies $0 < e < 1$.",
    options: [
      "(A) is false but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false"
    ],
    correctAnswer: "(A) is false but (R) is true",
    explanation: "A conic is an ellipse if $0 < e < 1$. When $e = 1.5 > 1$, the conic is a hyperbola. Thus (A) is false and (R) is true.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If $PSP'$ is a focal chord of the parabola $y^2 = 4ax$ with $SP = 4$ and $SP' = 4$, then the semi-latus rectum is $4$.\\nReason (R): The semi-latus rectum of a parabola is the harmonic mean between the segments of any focal chord.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Semi-latus rectum $l = \\frac{2(SP)(SP')}{SP + SP'} = \\frac{2(4)(4)}{4 + 4} = 4$. When $SP = SP'$, the focal chord is the latus rectum itself. Both (A) and (R) are true and (R) correctly explains (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the vertices of a hyperbola are $(\\pm 3, 0)$ and its foci are $(\\pm 5, 0)$, then its eccentricity is $\\frac{5}{3}$.\\nReason (R): For the standard hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the vertices are $(\\pm a, 0)$ and foci are $(\\pm ae, 0)$, hence $e = \\frac{ae}{a}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Here $a = 3$ and $ae = 5$. Thus $e = \\frac{ae}{a} = \\frac{5}{3}$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Questions
  {
    questionType: "NUM",
    question: "If the focal distance of a point on the parabola $y^2 = 12x$ is $7$, then the $x$-coordinate of this point is:",
    correctAnswer: "4",
    explanation: "For $y^2 = 4ax$, $4a = 12 \\implies a = 3$. The focal distance of a point $P(x, y)$ on the parabola is $x + a$. Given $x + a = 7 \\implies x + 3 = 7 \\implies x = 4$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "Let $S$ and $S'$ be the foci of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$. If $P$ is a point on the ellipse, find the value of $SP + S'P$.",
    correctAnswer: "10",
    explanation: "By the focal property of an ellipse, the sum of the focal distances of any point $P$ on the ellipse is equal to the length of the major axis, which is $2a$. Here $a^2 = 25 \\implies a = 5$, so $SP + S'P = 2(5) = 10$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $PSP'$ is a focal chord of the parabola $y^2 = 8x$ such that $SP = 3$, then the length of the segment $SP'$ is:",
    correctAnswer: "6",
    explanation: "For $y^2 = 8x$, $4a = 8 \\implies a = 2$. By the harmonic mean property of focal chord segments, $\\frac{1}{SP} + \\frac{1}{SP'} = \\frac{1}{a}$. Substituting $SP = 3$ and $a = 2$, we get $\\frac{1}{3} + \\frac{1}{SP'} = \\frac{1}{2} \\implies \\frac{1}{SP'} = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6} \\implies SP' = 6$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the eccentricity of an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ is $e = \\frac{1}{2}$ and the distance between its foci is $6$, then the length of the major axis $2a$ is:",
    correctAnswer: "12",
    explanation: "Distance between foci $= 2ae = 6$. Given $e = \\frac{1}{2}$, we have $2a\\left(\\frac{1}{2}\\right) = 6 \\implies a = 6$. Thus, the length of the major axis is $2a = 12$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "For a hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, if the distance between the foci is $10$ and the eccentricity is $\\frac{5}{4}$, then the length of the transverse axis $2a$ is:",
    correctAnswer: "8",
    explanation: "Distance between foci $= 2ae = 10$. Since $e = \\frac{5}{4}$, $2a\\left(\\frac{5}{4}\\right) = 10 \\implies \\frac{5a}{2} = 10 \\implies a = 4$. Therefore, length of transverse axis is $2a = 8$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If $e_1$ is the eccentricity of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ and $e_2$ is the eccentricity of its conjugate hyperbola, then find the value of $100 \\left(\\frac{1}{e_1^2} + \\frac{1}{e_2^2}\\right)$.",
    correctAnswer: "100",
    explanation: "For any hyperbola and its conjugate hyperbola, the relation $\\frac{1}{e_1^2} + \\frac{1}{e_2^2} = 1$ always holds. Therefore, $100 \\left(\\frac{1}{e_1^2} + \\frac{1}{e_2^2}\\right) = 100 \\times 1 = 100$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the transverse axis and conjugate axis of a hyperbola are equal, then the square of its eccentricity, $e^2$, is:",
    correctAnswer: "2",
    explanation: "When transverse axis equals conjugate axis ($2a = 2b \\implies a = b$), the hyperbola is rectangular. Its eccentricity is $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{1 + 1} = \\sqrt{2}$. Thus $e^2 = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If a focal chord of the parabola $y^2 = 4x$ makes an angle of $45^\\circ$ with the axis of the parabola, then the length of the focal chord is:",
    correctAnswer: "8",
    explanation: "For $y^2 = 4x$, $a = 1$. The length of a focal chord inclined at angle $\\alpha$ to the axis is $4a \\csc^2 \\alpha$. Here $\\alpha = 45^\\circ$, so $\\csc 45^\\circ = \\sqrt{2}$. Length $= 4(1)(\\sqrt{2})^2 = 4 \\times 2 = 8$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "If the eccentricity of the ellipse $\\frac{x^2}{k} + \\frac{y^2}{4} = 1$ ($k > 4$) is $\\frac{1}{\\sqrt{2}}$, then the value of $k$ is:",
    correctAnswer: "8",
    explanation: "For $k > 4$, $a^2 = k$ and $b^2 = 4$. $e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{4}{k}}$. Given $e = \\frac{1}{\\sqrt{2}}$, squaring gives $\\frac{1}{2} = 1 - \\frac{4}{k} \\implies \\frac{4}{k} = \\frac{1}{2} \\implies k = 8$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUM",
    question: "For the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$, let $S$ and $S'$ be the foci and $P$ be any point on the hyperbola. Find the value of $|SP - S'P|$.",
    correctAnswer: "6",
    explanation: "For the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the difference of focal distances is $|SP - S'P| = 2a$. Here $a^2 = 9 \\implies a = 3$. Thus $|SP - S'P| = 2(3) = 6$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
