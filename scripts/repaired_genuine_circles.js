/**
 * Repaired genuine questions (42) for Circles (Class 12, Mathematics).
 * All 42 questions are mapped to their exact database _id, with KaTeX verified,
 * standard JEE Mains options, correct answer indices, and concise step-by-step explanations.
 */

const repairedGenuineCircles = [
  // 1 to 10: Standard equation (IDs ...691 to ...69a)
  {
    _id: "6a98e82c910bb37b0e558691",
    question: "What is the standard equation of a circle with center at $(3, -5)$ and radius $4$?",
    options: [
      "$(x - 3)^2 + (y + 5)^2 = 16$",
      "$(x + 3)^2 + (y - 5)^2 = 16$",
      "$(x - 3)^2 + (y + 5)^2 = 4$",
      "$(x + 3)^2 + (y - 5)^2 = 4$"
    ],
    correctAnswer: 0,
    explanation: "The standard equation of a circle with center $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$. Substituting $(h, k) = (3, -5)$ and $r = 4$, we get $(x - 3)^2 + (y - (-5))^2 = 4^2 \\implies (x - 3)^2 + (y + 5)^2 = 16$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e82c910bb37b0e558692",
    question: "Find the center and radius of the circle given by the equation $(x + 7)^2 + (y - 2)^2 = 36$.",
    options: [
      "Center: $(-7, 2)$, Radius: $36$",
      "Center: $(7, -2)$, Radius: $6$",
      "Center: $(-7, 2)$, Radius: $6$",
      "Center: $(7, -2)$, Radius: $36$"
    ],
    correctAnswer: 2,
    explanation: "Comparing with the standard form $(x - h)^2 + (y - k)^2 = r^2$, we have $h = -7$, $k = 2$, and $r^2 = 36 \\implies r = 6$. Hence, the center is $(-7, 2)$ and the radius is $6$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e82c910bb37b0e558693",
    question: "What is the equation of a circle centered at the origin with a radius of $\\sqrt{10}$?",
    options: [
      "$x^2 + y^2 = 100$",
      "$x^2 + y^2 = 10$",
      "$(x - 1)^2 + (y - 1)^2 = 10$",
      "$x^2 + y^2 = \\sqrt{10}$"
    ],
    correctAnswer: 1,
    explanation: "A circle centered at the origin $(0, 0)$ has equation $x^2 + y^2 = r^2$. With radius $r = \\sqrt{10}$, $r^2 = (\\sqrt{10})^2 = 10$, giving $x^2 + y^2 = 10$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e82c910bb37b0e558694",
    question: "A circle has its center at $(1, 1)$ and passes through the point $(4, 5)$. What is its standard equation?",
    options: [
      "$(x - 1)^2 + (y - 1)^2 = 25$",
      "$(x - 1)^2 + (y - 1)^2 = 5$",
      "$(x - 4)^2 + (y - 5)^2 = 25$",
      "$(x + 1)^2 + (y + 1)^2 = 25$"
    ],
    correctAnswer: 0,
    explanation: "The radius squared $r^2$ is the distance squared between $(1, 1)$ and $(4, 5)$: $r^2 = (4 - 1)^2 + (5 - 1)^2 = 3^2 + 4^2 = 9 + 16 = 25$. Thus, the equation is $(x - 1)^2 + (y - 1)^2 = 25$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e82c910bb37b0e558695",
    question: "Which of the following equations does NOT represent a real circle?",
    options: [
      "$(x - 2)^2 + (y + 3)^2 = 9$",
      "$x^2 + y^2 = 16$",
      "$(x + 1)^2 + (y - 5)^2 = -4$",
      "$(x - 0)^2 + (y - 0)^2 = 1$"
    ],
    correctAnswer: 2,
    explanation: "In the standard form $(x - h)^2 + (y - k)^2 = r^2$, the right side $r^2$ represents the square of the radius, which must be strictly positive for a real circle of non-zero radius (or zero for a point circle). Here, $r^2 = -4 < 0$, which yields no real points.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e82c910bb37b0e558696",
    question: "What is the radius of the circle with the equation $(x - 5)^2 + (y + 1)^2 = 49$?",
    options: [
      "$7$",
      "$49$",
      "$\\sqrt{7}$",
      "$24.5$"
    ],
    correctAnswer: 0,
    explanation: "In $(x - h)^2 + (y - k)^2 = r^2$, $r^2 = 49$, so the radius $r = \\sqrt{49} = 7$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e82c910bb37b0e558697",
    question: "Find the center of the circle given by the equation $x^2 - 6x + y^2 + 8y = 11$.",
    options: [
      "$(3, -4)$",
      "$(-3, 4)$",
      "$(6, -8)$",
      "$(-6, 8)$"
    ],
    correctAnswer: 0,
    explanation: "Completing the squares: $(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16 \\implies (x - 3)^2 + (y + 4)^2 = 36$. The center is $(h, k) = (3, -4)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e82c910bb37b0e558698",
    question: "What is the standard equation of a circle with center $(-2, 0)$ and passing through the point $(1, 4)$?",
    options: [
      "$(x + 2)^2 + y^2 = 25$",
      "$(x - 2)^2 + y^2 = 25$",
      "$(x + 2)^2 + y^2 = 5$",
      "$(x + 2)^2 + (y - 4)^2 = 25$"
    ],
    correctAnswer: 0,
    explanation: "The radius squared is $r^2 = (1 - (-2))^2 + (4 - 0)^2 = 3^2 + 4^2 = 25$. The equation is $(x + 2)^2 + y^2 = 25$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e82c910bb37b0e558699",
    question: "If a circle's equation is $(x - 1)^2 + (y - 1)^2 = 1$, what is the distance from its center to the origin $(0, 0)$?",
    options: [
      "$1$",
      "$\\sqrt{2}$",
      "$2$",
      "$0$"
    ],
    correctAnswer: 1,
    explanation: "The center of the circle is $(1, 1)$. The distance from $(0, 0)$ to $(1, 1)$ is $\\sqrt{(1 - 0)^2 + (1 - 0)^2} = \\sqrt{1 + 1} = \\sqrt{2}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e82c910bb37b0e55869a",
    question: "Rewrite the equation $x^2 + y^2 - 4x + 6y - 3 = 0$ in standard form.",
    options: [
      "$(x - 2)^2 + (y + 3)^2 = 16$",
      "$(x + 2)^2 + (y - 3)^2 = 16$",
      "$(x - 2)^2 + (y + 3)^2 = 10$",
      "$(x + 2)^2 + (y - 3)^2 = 10$"
    ],
    correctAnswer: 0,
    explanation: "Completing the squares: $(x^2 - 4x + 4) + (y^2 + 6y + 9) = 3 + 4 + 9 \\implies (x - 2)^2 + (y + 3)^2 = 16$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },

  // 11 to 21: Chord of contact (IDs ...6a6 to ...6b0)
  {
    _id: "6a98e849910bb37b0e5586a6",
    question: "Find the equation of the chord of contact of the tangents drawn from the point $(2, 3)$ to the circle $x^2 + y^2 = 9$.",
    options: [
      "$2x + 3y = 9$",
      "$2x + 3y = 18$",
      "$3x + 2y = 9$",
      "$3x + 2y = 18$"
    ],
    correctAnswer: 0,
    explanation: "The equation of the chord of contact of tangents drawn from $(x_1, y_1)$ to the circle $x^2 + y^2 = r^2$ is given by $T = 0$, which is $x x_1 + y y_1 = r^2$. Substituting $(x_1, y_1) = (2, 3)$ and $r^2 = 9$ yields $2x + 3y = 9$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    _id: "6a98e849910bb37b0e5586a7",
    question: "What is the length of the chord of contact of the tangents drawn from the point $(8, 0)$ to the circle $x^2 + y^2 = 16$?",
    options: [
      "$4\\sqrt{3}$",
      "$8\\sqrt{3}$",
      "$4\\sqrt{5}$",
      "$8\\sqrt{5}$"
    ],
    correctAnswer: 0,
    explanation: "The equation of the chord of contact from $(8, 0)$ to $x^2 + y^2 = 16$ is $8x + 0y = 16 \\implies x = 2$. The distance from the center $(0, 0)$ to this line is $d = 2$. The radius is $r = 4$. The half-length of the chord is $\\sqrt{r^2 - d^2} = \\sqrt{16 - 4} = \\sqrt{12} = 2\\sqrt{3}$. Hence, the full length of the chord is $2 \\times 2\\sqrt{3} = 4\\sqrt{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    _id: "6a98e849910bb37b0e5586a8",
    question: "The equation of the chord of contact of tangents drawn from $P(h, k)$ to the circle $x^2 + y^2 = a^2$ is $hx + ky = a^2$. If the length of this chord of contact is $L$, then which of the following is true?",
    options: [
      "$L = \\frac{2a\\sqrt{h^2 + k^2 - a^2}}{a}$",
      "$L = \\frac{2a\\sqrt{h^2 + k^2 - a^2}}{\\sqrt{h^2 + k^2}}$",
      "$L = \\frac{2\\sqrt{h^2 + k^2 - a^2}}{a}$",
      "$L = \\frac{2\\sqrt{h^2 + k^2}}{a\\sqrt{h^2 + k^2 - a^2}}$"
    ],
    correctAnswer: 1,
    explanation: "The perpendicular distance from the center $(0, 0)$ to the line $hx + ky = a^2$ is $d = \\frac{a^2}{\\sqrt{h^2 + k^2}}$. The half-length of the chord is $l = \\sqrt{a^2 - d^2} = \\sqrt{a^2 - \\frac{a^4}{h^2 + k^2}} = \\frac{a\\sqrt{h^2 + k^2 - a^2}}{\\sqrt{h^2 + k^2}}$. Thus, the full length is $L = 2l = \\frac{2a\\sqrt{h^2 + k^2 - a^2}}{\\sqrt{h^2 + k^2}}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    _id: "6a98e849910bb37b0e5586a9",
    question: "Find the point from which the chord of contact of tangents to the circle $x^2 + y^2 = 1$ is the line $x + y = 1$.",
    options: [
      "$(1, 1)$",
      "$(1, 0)$",
      "$(0, 1)$",
      "$(2, 2)$"
    ],
    correctAnswer: 0,
    explanation: "The chord of contact from $(x_1, y_1)$ to $x^2 + y^2 = 1$ is $x x_1 + y y_1 = 1$. Comparing this with $x + y = 1$, we get $x_1 = 1$ and $y_1 = 1$. Therefore, the point is $(1, 1)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    _id: "6a98e849910bb37b0e5586aa",
    question: "If the chord of contact of tangents drawn from $P(h, k)$ to the circle $x^2 + y^2 = a^2$ subtends a right angle at the center, then which of the following relations holds?",
    options: [
      "$h^2 + k^2 = 2a^2$",
      "$h^2 + k^2 = a^2$",
      "$h^2 + k^2 = \\sqrt{2}a$",
      "$h^2 + k^2 = \\frac{a^2}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Let the chord of contact be $AB$. If $\\angle AOB = 90^\\circ$, then in the right isosceles triangle $\\triangle AOB$ with $OA = OB = a$, the distance from $O(0, 0)$ to $AB$ is $d = a \\cos 45^\\circ = \\frac{a}{\\sqrt{2}}$. Also, $d = \\frac{a^2}{\\sqrt{h^2 + k^2}}$. Equating the two gives $\\frac{a^2}{\\sqrt{h^2 + k^2}} = \\frac{a}{\\sqrt{2}} \\implies \\sqrt{h^2 + k^2} = \\sqrt{2}a \\implies h^2 + k^2 = 2a^2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    _id: "6a98e849910bb37b0e5586ab",
    question: "Find the equation of the chord of contact of tangents drawn from the point $(6, -2)$ to the circle $3x^2 + 3y^2 - 5x + 7y - 11 = 0$.",
    options: [
      "$31x - 5y - 66 = 0$",
      "$31x + 5y - 66 = 0$",
      "$18x - 6y - 33 = 0$",
      "$31x - 5y + 66 = 0$"
    ],
    correctAnswer: 0,
    explanation: "The equation of the chord of contact from $(x_1, y_1)$ is given by $T = 0$: $3x x_1 + 3y y_1 - \\frac{5}{2}(x + x_1) + \\frac{7}{2}(y + y_1) - 11 = 0$. Substituting $(x_1, y_1) = (6, -2)$: $3(6)x + 3(-2)y - \\frac{5}{2}(x + 6) + \\frac{7}{2}(y - 2) - 11 = 0 \\implies 18x - 6y - \\frac{5}{2}x - 15 + \\frac{7}{2}y - 7 - 11 = 0$. Multiplying the entire equation by $2$: $36x - 12y - 5x - 30 + 7y - 14 - 22 = 0 \\implies 31x - 5y - 66 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    _id: "6a98e849910bb37b0e5586ac",
    question: "The chord of contact of tangents drawn from a point $P$ at distance $d$ from the center of the circle $x^2 + y^2 = r^2$ has length $L$. Then $d$ expressed in terms of $r$ and $L$ is:",
    options: [
      "$d = \\frac{r^2}{\\sqrt{r^2 + (L/2)^2}}$",
      "$d = \\frac{r^2}{\\sqrt{d^2 - (L/2)^2}}$",
      "$d = \\frac{r}{\\sqrt{1 + (L/2r)^2}}$",
      "$d = \\frac{r^2}{\\sqrt{r^2 - (L/2)^2}}$"
    ],
    correctAnswer: 3,
    explanation: "The length of the chord of contact is $L = \\frac{2r\\sqrt{d^2 - r^2}}{d}$. Thus, $\\frac{L}{2} = \\frac{r\\sqrt{d^2 - r^2}}{d}$. Squaring both sides: $(L/2)^2 = \\frac{r^2(d^2 - r^2)}{d^2} = r^2 - \\frac{r^4}{d^2}$. Rearranging gives $\\frac{r^4}{d^2} = r^2 - (L/2)^2 \\implies d^2 = \\frac{r^4}{r^2 - (L/2)^2} \\implies d = \\frac{r^2}{\\sqrt{r^2 - (L/2)^2}}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "hard"
  },
  {
    _id: "6a98e849910bb37b0e5586ad",
    question: "Find the equation of the chord of contact of tangents drawn from the point $(3, 4)$ to the circle $x^2 + y^2 = 16$.",
    options: [
      "$3x + 4y = 16$",
      "$3x + 4y = 25$",
      "$4x + 3y = 16$",
      "$4x + 3y = 25$"
    ],
    correctAnswer: 0,
    explanation: "Using the formula $T = 0$, $x x_1 + y y_1 = r^2$ for the circle $x^2 + y^2 = 16$. Substituting $(x_1, y_1) = (3, 4)$, we obtain $3x + 4y = 16$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    _id: "6a98e849910bb37b0e5586ae",
    question: "If the chord of contact of tangents drawn from a point $P(h, k)$ to the circle $x^2 + y^2 = a^2$ has length $\\sqrt{2}a$, then the value of $h^2 + k^2$ is:",
    options: [
      "$2a^2$",
      "$a^2$",
      "$3a^2$",
      "$4a^2$"
    ],
    correctAnswer: 0,
    explanation: "Let $d = \\sqrt{h^2 + k^2}$ be the distance of $P$ from the center. The length of the chord of contact is $L = \\frac{2a\\sqrt{d^2 - a^2}}{d}$. Given $L = \\sqrt{2}a$, we have $\\sqrt{2}a = \\frac{2a\\sqrt{d^2 - a^2}}{d} \\implies \\sqrt{2}d = 2\\sqrt{d^2 - a^2}$. Squaring both sides: $2d^2 = 4(d^2 - a^2) \\implies 2d^2 = 4d^2 - 4a^2 \\implies 2d^2 = 4a^2 \\implies d^2 = 2a^2$. Hence, $h^2 + k^2 = 2a^2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    _id: "6a98e849910bb37b0e5586af",
    question: "Find the equation of the chord of contact of tangents drawn from the point $(-1, 2)$ to the circle $(x - 1)^2 + (y + 3)^2 = 16$.",
    options: [
      "$-x + 2y = 1$",
      "$-2x + 5y = -1$",
      "$-2x + 5y = 1$",
      "$-2x + 5y = -7$"
    ],
    correctAnswer: 1,
    explanation: "For the circle $(x - h)^2 + (y - k)^2 = r^2$, the chord of contact from $(x_1, y_1)$ is $(x_1 - h)(x - h) + (y_1 - k)(y - k) = r^2$. Here $(h, k) = (1, -3)$, $r^2 = 16$, and $(x_1, y_1) = (-1, 2)$. Substituting gives $(-1 - 1)(x - 1) + (2 - (-3))(y + 3) = 16 \\implies -2(x - 1) + 5(y + 3) = 16 \\implies -2x + 2 + 5y + 15 = 16 \\implies -2x + 5y = -1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    _id: "6a98e849910bb37b0e5586b0",
    question: "If the chords of contact of tangents drawn from two points $(x_1, y_1)$ and $(x_2, y_2)$ to the circle $x^2 + y^2 = a^2$ are mutually perpendicular, then which of the following relations is correct?",
    options: [
      "$x_1 x_2 + y_1 y_2 = 0$",
      "$x_1 y_2 + x_2 y_1 = 0$",
      "$x_1 x_2 - y_1 y_2 = 0$",
      "$x_1 y_1 + x_2 y_2 = a^2$"
    ],
    correctAnswer: 0,
    explanation: "The equations of the chords of contact from $(x_1, y_1)$ and $(x_2, y_2)$ to $x^2 + y^2 = a^2$ are $x x_1 + y y_1 = a^2$ and $x x_2 + y y_2 = a^2$. Their slopes are $m_1 = -\\frac{x_1}{y_1}$ and $m_2 = -\\frac{x_2}{y_2}$. For the lines to be perpendicular, $m_1 m_2 = -1 \\implies \\left(-\\frac{x_1}{y_1}\\right)\\left(-\\frac{x_2}{y_2}\\right) = -1 \\implies \\frac{x_1 x_2}{y_1 y_2} = -1 \\implies x_1 x_2 + y_1 y_2 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },

  // 22 to 32: Standard equation & General equation (IDs ...6b1 to ...6bb)
  {
    _id: "6a98e876910bb37b0e5586b1",
    question: "What is the equation of the tangent to the circle $x^2 + y^2 = 25$ at the point $(3, 4)$?",
    options: [
      "$3x + 4y = 25$",
      "$4x + 3y = 25$",
      "$3x - 4y = 25$",
      "$4x - 3y = 25$"
    ],
    correctAnswer: 0,
    explanation: "The equation of the tangent to $x^2 + y^2 = r^2$ at the point $(x_1, y_1)$ is $x x_1 + y y_1 = r^2$. For $(x_1, y_1) = (3, 4)$ and $r^2 = 25$, the tangent is $3x + 4y = 25$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e876910bb37b0e5586b2",
    question: "Find the equation of the normal to the circle $x^2 + y^2 = 16$ at the point $(0, 4)$.",
    options: [
      "$y = 4$",
      "$x = 0$",
      "$y = x + 4$",
      "$y = -x + 4$"
    ],
    correctAnswer: 1,
    explanation: "Every normal to a circle passes through its center. The center of $x^2 + y^2 = 16$ is $(0, 0)$. The line joining $(0, 0)$ and $(0, 4)$ is the y-axis, whose equation is $x = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e876910bb37b0e5586b3",
    question: "What is the slope of the tangent to the circle $(x - 2)^2 + (y - 3)^2 = 13$ at the point $(4, 6)$?",
    options: [
      "$-\\frac{2}{3}$",
      "$\\frac{3}{2}$",
      "$\\frac{2}{3}$",
      "$-\\frac{3}{2}$"
    ],
    correctAnswer: 0,
    explanation: "The center of the circle is $C(2, 3)$ and the point is $P(4, 6)$. The slope of the normal (radius $CP$) is $m_{\\text{normal}} = \\frac{6 - 3}{4 - 2} = \\frac{3}{2}$. Since the tangent is perpendicular to the normal, the slope of the tangent is $m_{\\text{tangent}} = -\\frac{1}{m_{\\text{normal}}} = -\\frac{2}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "medium"
  },
  {
    _id: "6a98e876910bb37b0e5586b4",
    question: "The equation of a circle is $x^2 + y^2 - 4x + 6y - 12 = 0$. Find the equation of the tangent at the point $(5, 1)$.",
    options: [
      "$3x + 4y = 19$",
      "$4x + 3y = 23$",
      "$3x - 4y = 11$",
      "$4x - 3y = 17$"
    ],
    correctAnswer: 0,
    explanation: "The tangent at $(x_1, y_1)$ is given by $T = 0$: $x x_1 + y y_1 - 2(x + x_1) + 3(y + y_1) - 12 = 0$. Substituting $(x_1, y_1) = (5, 1)$: $5x + y - 2(x + 5) + 3(y + 1) - 12 = 0 \\implies 5x + y - 2x - 10 + 3y + 3 - 12 = 0 \\implies 3x + 4y - 19 = 0 \\implies 3x + 4y = 19$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "medium"
  },
  {
    _id: "6a98e876910bb37b0e5586b5",
    question: "Find the length of the tangent drawn from the point $(7, 1)$ to the circle $x^2 + y^2 = 25$.",
    options: [
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    correctAnswer: 0,
    explanation: "The length of the tangent from $(x_1, y_1)$ to $x^2 + y^2 - r^2 = 0$ is $\\sqrt{S_1} = \\sqrt{x_1^2 + y_1^2 - r^2}$. For $(x_1, y_1) = (7, 1)$ and $r^2 = 25$, the length is $\\sqrt{7^2 + 1^2 - 25} = \\sqrt{49 + 1 - 25} = \\sqrt{25} = 5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    _id: "6a98e876910bb37b0e5586b6",
    question: "The equation of the normal to the circle $x^2 + y^2 = 9$ at the point $(3, 0)$ is:",
    options: [
      "$x = 3$",
      "$y = 0$",
      "$x = 0$",
      "$y = 3$"
    ],
    correctAnswer: 1,
    explanation: "The normal at any point on the circle passes through the center $(0, 0)$. The line joining the center $(0, 0)$ and the point $(3, 0)$ is the x-axis, which has equation $y = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e876910bb37b0e5586b7",
    question: "Find the equation of the tangent to the circle $(x - 1)^2 + (y - 2)^2 = 5$ at the point $(3, 1)$.",
    options: [
      "$2x - y = 5$",
      "$x + 2y = 5$",
      "$2x + y = 7$",
      "$x - 2y = -1$"
    ],
    correctAnswer: 0,
    explanation: "The tangent equation at $(x_1, y_1)$ for $(x - h)^2 + (y - k)^2 = r^2$ is $(x_1 - h)(x - h) + (y_1 - k)(y - k) = r^2$. Substituting $(h, k) = (1, 2)$ and $(x_1, y_1) = (3, 1)$: $(3 - 1)(x - 1) + (1 - 2)(y - 2) = 5 \\implies 2(x - 1) - (y - 2) = 5 \\implies 2x - 2 - y + 2 = 5 \\implies 2x - y = 5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "medium"
  },
  {
    _id: "6a98e876910bb37b0e5586b8",
    question: "What is the condition for the straight line $y = mx + c$ to be tangent to the circle $x^2 + y^2 = a^2$?",
    options: [
      "$c^2 = a^2(1 + m^2)$",
      "$c^2 = a^2(m^2 - 1)$",
      "$c^2 = a^2(1 - m^2)$",
      "$c = a(1 + m^2)$"
    ],
    correctAnswer: 0,
    explanation: "The perpendicular distance from the center $(0, 0)$ to the line $mx - y + c = 0$ must equal the radius $a$: $\\frac{|c|}{\\sqrt{m^2 + 1}} = a \\implies c^2 = a^2(1 + m^2)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    _id: "6a98e876910bb37b0e5586b9",
    question: "Find the equation of the normal to the circle $x^2 + y^2 = 10$ at the point $(1, 3)$.",
    options: [
      "$3x + y = 6$",
      "$x + 3y = 10$",
      "$3x - y = 0$",
      "$x - 3y = -8$"
    ],
    correctAnswer: 2,
    explanation: "The normal passes through the center $(0, 0)$ and the point of contact $(1, 3)$. The slope is $m = \\frac{3 - 0}{1 - 0} = 3$. The equation of the line passing through origin with slope $3$ is $y = 3x \\implies 3x - y = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Standard equation",
    difficulty: "easy"
  },
  {
    _id: "6a98e876910bb37b0e5586ba",
    question: "If the straight line $y = 2x + k$ is tangent to the circle $x^2 + y^2 = 5$, find the possible values of $k$.",
    options: [
      "$k = \\pm 5$",
      "$k = \\pm \\sqrt{5}$",
      "$k = \\pm 25$",
      "$k = \\pm \\sqrt{20}$"
    ],
    correctAnswer: 0,
    explanation: "Using the tangency condition $c^2 = a^2(1 + m^2)$ with $m = 2$, $c = k$, and $a^2 = 5$: $k^2 = 5(1 + 2^2) = 5(5) = 25 \\implies k = \\pm 5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },
  {
    _id: "6a98e876910bb37b0e5586bb",
    question: "Find the slope of the tangent to the circle $x^2 + y^2 = 13$ at the point $(2, 3)$.",
    options: [
      "$\\frac{2}{3}$",
      "$\\frac{3}{2}$",
      "$-\\frac{2}{3}$",
      "$-\\frac{3}{2}$"
    ],
    correctAnswer: 2,
    explanation: "The center of the circle is $(0, 0)$. The slope of the radius joining $(0, 0)$ to $(2, 3)$ is $m_{\\text{radius}} = \\frac{3 - 0}{2 - 0} = \\frac{3}{2}$. Since the tangent is perpendicular to the radius at the point of tangency, $m_{\\text{tangent}} = -\\frac{1}{m_{\\text{radius}}} = -\\frac{2}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "General equation of circle",
    difficulty: "easy"
  },

  // 33 to 42: Circle through three points (IDs ...6c6 to ...6cf)
  {
    _id: "6a98e87f910bb37b0e5586c6",
    question: "Find the equation of the circle passing through the points $(1, 1)$, $(5, 1)$, and $(5, 5)$.",
    options: [
      "$x^2 + y^2 - 6x - 6y + 10 = 0$",
      "$x^2 + y^2 - 6x + 6y - 10 = 0$",
      "$x^2 + y^2 + 6x - 6y + 10 = 0$",
      "$x^2 + y^2 - 4x - 4y + 8 = 0$"
    ],
    correctAnswer: 0,
    explanation: "The points $A(1, 1)$, $B(5, 1)$, and $C(5, 5)$ form a right-angled triangle with the right angle at $B(5, 1)$, since $AB$ is horizontal and $BC$ is vertical. Thus, the hypotenuse $AC$ is a diameter. Using the diameter form: $(x - 1)(x - 5) + (y - 1)(y - 5) = 0 \\implies x^2 - 6x + 5 + y^2 - 6y + 5 = 0 \\implies x^2 + y^2 - 6x - 6y + 10 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    _id: "6a98e87f910bb37b0e5586c7",
    question: "Determine the center of the circle that passes through the points $(0, 0)$, $(a, 0)$, and $(0, b)$.",
    options: [
      "$(\\frac{a}{2}, 0)$",
      "$(0, \\frac{b}{2})$",
      "$(\\frac{a}{2}, \\frac{b}{2})$",
      "$(a, b)$"
    ],
    correctAnswer: 2,
    explanation: "The triangle formed by $(0, 0)$, $(a, 0)$, and $(0, b)$ has a right angle at $(0, 0)$. Therefore, the segment joining $(a, 0)$ and $(0, b)$ is the diameter of the circumcircle. The center is the midpoint of this diameter: $\\left(\\frac{a + 0}{2}, \\frac{0 + b}{2}\\right) = \\left(\\frac{a}{2}, \\frac{b}{2}\\right)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    _id: "6a98e87f910bb37b0e5586c8",
    question: "Find the radius of the circle passing through the points $(0, 0)$, $(4, 0)$, and $(0, 6)$.",
    options: [
      "$\\sqrt{5}$",
      "$\\sqrt{10}$",
      "$\\sqrt{13}$",
      "$\\sqrt{17}$"
    ],
    correctAnswer: 2,
    explanation: "Since the points $(0, 0)$, $(4, 0)$, and $(0, 6)$ form a right-angled triangle at the origin, the segment joining $(4, 0)$ and $(0, 6)$ is the diameter. The length of the diameter is $\\sqrt{(4 - 0)^2 + (0 - 6)^2} = \\sqrt{16 + 36} = \\sqrt{52} = 2\\sqrt{13}$. Hence, the radius is $r = \\frac{1}{2}(2\\sqrt{13}) = \\sqrt{13}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    _id: "6a98e87f910bb37b0e5586c9",
    question: "If a circle passes through the origin $(0, 0)$ and intercepts lengths $a$ and $b$ on the coordinate axes, what is its equation?",
    options: [
      "$x^2 + y^2 - ax - by = 0$",
      "$x^2 + y^2 + ax + by = 0$",
      "$x^2 + y^2 - ax + by = 0$",
      "$x^2 + y^2 + ax - by = 0$"
    ],
    correctAnswer: 0,
    explanation: "The circle passes through $(0, 0)$, $(a, 0)$, and $(0, b)$. In the general equation $x^2 + y^2 + 2gx + 2fy + c = 0$, passing through origin gives $c = 0$. Passing through $(a, 0)$ gives $a^2 + 2ga = 0 \\implies 2g = -a$. Passing through $(0, b)$ gives $b^2 + 2fb = 0 \\implies 2f = -b$. Thus, the equation is $x^2 + y^2 - ax - by = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    _id: "6a98e87f910bb37b0e5586ca",
    question: "Find the equation of the circle passing through the points $(1, 2)$, $(3, 4)$, and $(5, 2)$.",
    options: [
      "$x^2 + y^2 - 6x - 4y + 9 = 0$",
      "$x^2 + y^2 - 4x - 6y + 9 = 0$",
      "$x^2 + y^2 - 6x - 4y + 13 = 0$",
      "$x^2 + y^2 + 6x + 4y - 9 = 0$"
    ],
    correctAnswer: 0,
    explanation: "Notice that the points $(1, 2)$ and $(5, 2)$ lie on the horizontal line $y = 2$. The perpendicular bisector of this chord is the vertical line $x = \\frac{1 + 5}{2} = 3$. Therefore, the center has coordinates $(3, k)$. The distance from $(3, k)$ to $(3, 4)$ is $|4 - k|$, and distance to $(1, 2)$ is $\\sqrt{(3 - 1)^2 + (k - 2)^2} = \\sqrt{4 + (k - 2)^2}$. Equating squared distances: $(4 - k)^2 = 4 + (k - 2)^2 \\implies 16 - 8k + k^2 = 4 + k^2 - 4k + 4 \\implies 16 - 8k = 8 - 4k \\implies 4k = 8 \\implies k = 2$. The center is $(3, 2)$ and radius $r = 4 - 2 = 2$. The equation is $(x - 3)^2 + (y - 2)^2 = 4 \\implies x^2 + y^2 - 6x - 4y + 9 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    _id: "6a98e87f910bb37b0e5586cb",
    question: "The center of the circle circumscribing the triangle formed by the lines $x = 0$, $y = 0$, and $3x + 4y = 24$ is:",
    options: [
      "$(4, 3)$",
      "$(3, 4)$",
      "$(8, 6)$",
      "$(2, 1.5)$"
    ],
    correctAnswer: 0,
    explanation: "The vertices of the triangle are $(0, 0)$, the x-intercept $(8, 0)$, and the y-intercept $(0, 6)$. Since the triangle is right-angled at $(0, 0)$, the circumcenter is the midpoint of the hypotenuse joining $(8, 0)$ and $(0, 6)$: $\\left(\\frac{8 + 0}{2}, \\frac{0 + 6}{2}\\right) = (4, 3)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    _id: "6a98e87f910bb37b0e5586cc",
    question: "Find the equation of the circle passing through $(0, 0)$, $(2, 0)$, and $(0, 3)$.",
    options: [
      "$x^2 + y^2 - 2x - 3y = 0$",
      "$x^2 + y^2 + 2x + 3y = 0$",
      "$x^2 + y^2 - 2x + 3y = 0$",
      "$x^2 + y^2 + 2x - 3y = 0$"
    ],
    correctAnswer: 0,
    explanation: "Since the circle passes through $(0, 0)$, $(2, 0)$, and $(0, 3)$, the segment joining $(2, 0)$ and $(0, 3)$ is a diameter. By the diameter form: $(x - 2)(x - 0) + (y - 0)(y - 3) = 0 \\implies x(x - 2) + y(y - 3) = 0 \\implies x^2 + y^2 - 2x - 3y = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    _id: "6a98e87f910bb37b0e5586cd",
    question: "A circle passes through the points $(6, 0)$, $(0, 6)$, and $(6, 6)$. What is its center?",
    options: [
      "$(3, 3)$",
      "$(6, 6)$",
      "$(0, 0)$",
      "$(3, 0)$"
    ],
    correctAnswer: 0,
    explanation: "The three points $A(6, 0)$, $B(6, 6)$, and $C(0, 6)$ form a right-angled triangle at $B(6, 6)$ because $AB$ is vertical and $BC$ is horizontal. Therefore, the hypotenuse $AC$ joining $(6, 0)$ and $(0, 6)$ is the diameter. The center is the midpoint of $AC$: $\\left(\\frac{6 + 0}{2}, \\frac{0 + 6}{2}\\right) = (3, 3)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "easy"
  },
  {
    _id: "6a98e87f910bb37b0e5586ce",
    question: "Find the equation of the circle passing through the points $(-1, 1)$, $(3, 1)$, and $(1, 3)$.",
    options: [
      "$x^2 + y^2 - 2x - 2y - 2 = 0$",
      "$x^2 + y^2 + 2x + 2y - 2 = 0$",
      "$x^2 + y^2 - 2x - 2y + 2 = 0$",
      "$x^2 + y^2 + 2x - 2y - 2 = 0$"
    ],
    correctAnswer: 0,
    explanation: "The chord joining $(-1, 1)$ and $(3, 1)$ is horizontal. Its perpendicular bisector is $x = \\frac{-1 + 3}{2} = 1$. The center lies on $x = 1$, so center is $(1, k)$. Distance to $(1, 3)$ is $|3 - k|$ and distance to $(3, 1)$ is $\\sqrt{(3 - 1)^2 + (1 - k)^2} = \\sqrt{4 + (1 - k)^2}$. Equating squared distances: $(3 - k)^2 = 4 + (1 - k)^2 \\implies 9 - 6k + k^2 = 4 + 1 - 2k + k^2 \\implies 9 - 6k = 5 - 2k \\implies 4k = 4 \\implies k = 1$. The center is $(1, 1)$ and radius $r = 3 - 1 = 2$. The equation is $(x - 1)^2 + (y - 1)^2 = 4 \\implies x^2 + y^2 - 2x - 2y - 2 = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "medium"
  },
  {
    _id: "6a98e87f910bb37b0e5586cf",
    question: "What is the radius of the circle passing through the points $(0, 0)$, $(8, 0)$, and $(4, 8)$?",
    options: [
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    correctAnswer: 0,
    explanation: "The perpendicular bisector of the chord joining $(0, 0)$ and $(8, 0)$ is $x = 4$. Thus, the center has coordinates $(4, k)$. The distance squared from $(4, k)$ to $(0, 0)$ is $4^2 + k^2 = 16 + k^2$. The distance squared from $(4, k)$ to $(4, 8)$ is $(8 - k)^2 = 64 - 16k + k^2$. Equating them: $16 + k^2 = 64 - 16k + k^2 \\implies 16k = 48 \\implies k = 3$. Hence, the center is $(4, 3)$, and the radius is $r = \\sqrt{4^2 + 3^2} = 5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Circle through three points",
    difficulty: "medium"
  }
];

module.exports = { repairedGenuineCircles };
