/**
 * Authentic JEE Mains Questions for Circles
 * Subtopic 3: Director circle and chord with given midpoint
 * 30 questions: 10 MCQ (single_choice), 10 AR (assertion_reason), 10 NUM (numerical)
 */

const subtopic3Questions = [
  // --- 10 MCQs (Single Choice) ---
  {
    question: "The equation of the director circle of the circle $x^2 + y^2 - 4x - 6y - 12 = 0$ is:",
    options: [
      "$(x - 2)^2 + (y - 3)^2 = 50$",
      "$(x - 2)^2 + (y - 3)^2 = 25$",
      "$(x + 2)^2 + (y + 3)^2 = 50$",
      "$x^2 + y^2 = 50$"
    ],
    correctAnswer: 0,
    explanation: "For the given circle, completing the square gives $(x - 2)^2 + (y - 3)^2 = 12 + 4 + 9 = 25$. The center is $(2, 3)$ and radius squared is $r^2 = 25$. The director circle is concentric with the given circle and has radius squared equal to $2r^2 = 2 \\times 25 = 50$. Hence, its equation is $(x - 2)^2 + (y - 3)^2 = 50$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "The equation of the chord of the circle $x^2 + y^2 = 25$ having $(1, -2)$ as its midpoint is:",
    options: [
      "$x - 2y = 5$",
      "$x - 2y = 25$",
      "$2x - y = 5$",
      "$x + 2y = 5$"
    ],
    correctAnswer: 0,
    explanation: "The equation of a chord of a circle with given midpoint $(x_1, y_1)$ is given by $T = S_1$. Here $T = x x_1 + y y_1 - 25$ and $S_1 = x_1^2 + y_1^2 - 25$. So $x(1) + y(-2) = 1^2 + (-2)^2 \\implies x - 2y = 1 + 4 = 5$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "The locus of the midpoint of a chord of the circle $x^2 + y^2 = 4$ which subtends a right angle at the origin is:",
    options: [
      "$x^2 + y^2 = 2$",
      "$x^2 + y^2 = 1$",
      "$x^2 + y^2 = 4$",
      "$x^2 + y^2 = 8$"
    ],
    correctAnswer: 0,
    explanation: "Let $(h, k)$ be the midpoint of the chord. The chord equation is $T = S_1 \\implies hx + ky = h^2 + k^2$. The distance from the center $(0, 0)$ to this chord is $d = \\frac{h^2 + k^2}{\\sqrt{h^2 + k^2}} = \\sqrt{h^2 + k^2}$. If the chord subtends $90^\\circ$ at the center, in right-angled $\\triangle OAB$ with $OA = OB = r = 2$, the distance from origin to the chord is $d = r \\cos 45^\\circ = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$. Thus $\\sqrt{h^2 + k^2} = \\sqrt{2} \\implies h^2 + k^2 = 2$. Replacing $(h, k)$ by $(x, y)$, the locus is $x^2 + y^2 = 2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "medium"
  },
  {
    question: "The locus of the midpoints of chords of the circle $x^2 + y^2 = a^2$ which pass through a fixed point $(x_1, y_1)$ is:",
    options: [
      "$x^2 + y^2 - x x_1 - y y_1 = 0$",
      "$x^2 + y^2 + x x_1 + y y_1 = 0$",
      "$x^2 + y^2 = x_1^2 + y_1^2$",
      "$x x_1 + y y_1 = a^2$"
    ],
    correctAnswer: 0,
    explanation: "Let $(h, k)$ be the midpoint of the chord. The equation of the chord is $T = S_1 \\implies hx + ky = h^2 + k^2$. Since this chord passes through the fixed point $(x_1, y_1)$, we substitute $(x_1, y_1)$ into the equation: $h x_1 + k y_1 = h^2 + k^2$. Replacing $(h, k)$ by $(x, y)$, the locus is $x^2 + y^2 - x x_1 - y y_1 = 0$, which is a circle with diameter joining the origin to $(x_1, y_1)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "medium"
  },
  {
    question: "If tangents drawn from a point $P$ to the circle $x^2 + y^2 = 9$ are mutually perpendicular, then $P$ lies on the circle:",
    options: [
      "$x^2 + y^2 = 18$",
      "$x^2 + y^2 = 81$",
      "$x^2 + y^2 = 27$",
      "$x^2 + y^2 = 36$"
    ],
    correctAnswer: 0,
    explanation: "The locus of the point of intersection of two mutually perpendicular tangents to a circle is its director circle. For the circle $x^2 + y^2 = a^2$, the director circle is $x^2 + y^2 = 2a^2$. Here $a^2 = 9$, so the director circle is $x^2 + y^2 = 18$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "The midpoint of the chord $3x + 4y - 10 = 0$ of the circle $x^2 + y^2 = 25$ is:",
    options: [
      "$(\\frac{6}{5}, \\frac{8}{5})$",
      "$(\\frac{3}{5}, \\frac{4}{5})$",
      "$(1, \\frac{7}{4})$",
      "$(\\frac{8}{5}, \\frac{6}{5})$"
    ],
    correctAnswer: 0,
    explanation: "The midpoint of any chord is the foot of the perpendicular from the center of the circle to that chord. The center is $(0, 0)$ and the line is $3x + 4y - 10 = 0$. The foot of the perpendicular $(h, k)$ from $(x_0, y_0) = (0, 0)$ to $ax + by + c = 0$ is given by $\\frac{h - 0}{3} = \\frac{k - 0}{4} = -\\frac{3(0) + 4(0) - 10}{3^2 + 4^2} = -\\frac{-10}{25} = \\frac{2}{5}$. Therefore, $h = 3 \\times \\frac{2}{5} = \\frac{6}{5}$ and $k = 4 \\times \\frac{2}{5} = \\frac{8}{5}$. Thus, the midpoint is $(\\frac{6}{5}, \\frac{8}{5})$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "medium"
  },
  {
    question: "The locus of the midpoint of a chord of length $2l$ of the circle $x^2 + y^2 = r^2$ is:",
    options: [
      "$x^2 + y^2 = r^2 - l^2$",
      "$x^2 + y^2 = r^2 + l^2$",
      "$x^2 + y^2 = l^2$",
      "$x^2 + y^2 = 2(r^2 - l^2)$"
    ],
    correctAnswer: 0,
    explanation: "Let $(h, k)$ be the midpoint of the chord. The distance from the center $(0, 0)$ to the midpoint is $d = \\sqrt{h^2 + k^2}$. In the right triangle formed by the center, the midpoint, and an endpoint of the chord, we have $d^2 + l^2 = r^2 \\implies d^2 = r^2 - l^2$. Thus, $h^2 + k^2 = r^2 - l^2$, which gives the locus $x^2 + y^2 = r^2 - l^2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "The length of the chord of the circle $x^2 + y^2 = 100$ having $(6, 0)$ as its midpoint is:",
    options: [
      "$16$",
      "$8$",
      "$12$",
      "$20$"
    ],
    correctAnswer: 0,
    explanation: "The center of the circle is $(0, 0)$ and the radius is $R = 10$. The distance from the center to the midpoint $(6, 0)$ is $d = 6$. The half-length of the chord is $\\sqrt{R^2 - d^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$. Therefore, the total length of the chord is $2 \\times 8 = 16$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "The area of the director circle of the circle $x^2 + y^2 = a^2$ is:",
    options: [
      "$2\\pi a^2$",
      "$\\pi a^2$",
      "$4\\pi a^2$",
      "$\\sqrt{2}\\pi a^2$"
    ],
    correctAnswer: 0,
    explanation: "The radius of the director circle of $x^2 + y^2 = a^2$ is $R = \\sqrt{2}a$. The area is $\\pi R^2 = \\pi (\\sqrt{2}a)^2 = 2\\pi a^2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "If a chord of the circle $x^2 + y^2 = 8$ is bisected at $(1, 1)$, its equation is:",
    options: [
      "$x + y = 2$",
      "$x + y = 4$",
      "$x - y = 0$",
      "$2x + 2y = 8$"
    ],
    correctAnswer: 0,
    explanation: "Using the chord with given midpoint formula $T = S_1$: $x(1) + y(1) - 8 = 1^2 + 1^2 - 8 \\implies x + y = 2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },

  // --- 10 Assertion-Reason Questions ---
  {
    question: "Assertion (A): The director circle of the circle $x^2 + y^2 = 16$ is $x^2 + y^2 = 32$.\\nReason (R): The director circle of a circle $x^2 + y^2 = r^2$ is the locus of the point of intersection of two perpendicular tangents, given by $x^2 + y^2 = 2r^2$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The director circle is defined as the locus of points from which perpendicular tangents can be drawn to the circle. Its equation is $x^2 + y^2 = 2r^2$. For $r^2 = 16$, this gives $x^2 + y^2 = 32$. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The equation of the chord of the circle $x^2 + y^2 = a^2$ having midpoint $(x_1, y_1)$ is $x x_1 + y y_1 = x_1^2 + y_1^2$.\\nReason (R): For any conic, the equation of a chord with given midpoint $(x_1, y_1)$ is given by $T = S_1$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "For the circle $S \\equiv x^2 + y^2 - a^2 = 0$, $T = x x_1 + y y_1 - a^2$ and $S_1 = x_1^2 + y_1^2 - a^2$. Equating $T = S_1$ cancels $-a^2$ from both sides, yielding $x x_1 + y y_1 = x_1^2 + y_1^2$. Both are true and Reason correctly explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The perpendicular from the center of a circle to any chord bisects the chord.\\nReason (R): The midpoint of any chord of a circle is the foot of the perpendicular drawn from the center to the chord.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "In any circle, the triangle formed by the center and the endpoints of the chord is isosceles ($OA = OB = r$). Thus, the altitude from $O$ to the chord is also the median, bisecting the chord. Hence the midpoint is the foot of the perpendicular. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The director circle is always concentric with the original circle.\\nReason (R): In the Cartesian plane, scaling a circle's radius by $\\sqrt{2}$ without shifting its center maintains the same center coordinates.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The equation of the director circle of $(x - h)^2 + (y - k)^2 = r^2$ is $(x - h)^2 + (y - k)^2 = 2r^2$, which has the exact same center $(h, k)$ and a radius $\\sqrt{2}r$. Hence it is concentric, and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If $(x_1, y_1)$ is an exterior point of the circle $x^2 + y^2 = a^2$, it cannot be the midpoint of any real chord of the circle.\\nReason (R): For any real chord of a circle, the midpoint must strictly lie inside the circle.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Any chord connects two points on the boundary of the circle. By convexity of the disc, all interior points of the segment (including the midpoint) must lie strictly inside the circle, satisfying $x_1^2 + y_1^2 < a^2$. Therefore, an exterior point cannot be the midpoint of any chord. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The locus of the midpoints of chords of the circle $x^2 + y^2 = 25$ which touch the circle $x^2 + y^2 = 9$ is $x^2 + y^2 = 9$.\\nReason (R): If a chord of the outer circle touches the concentric inner circle, its distance from the common center equals the radius of the inner circle, so the midpoint is the point of contact on the inner circle.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The point of tangency on the inner circle is the foot of the perpendicular from the center to the tangent line (chord of outer circle). Since the perpendicular from the center to any chord bisects it, this point of tangency is precisely the midpoint of the chord. Thus, the locus of midpoints is the inner circle $x^2 + y^2 = 9$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The angle between the tangents drawn from any point on $x^2 + y^2 = 2r^2$ to the circle $x^2 + y^2 = r^2$ is always $90^\\circ$.\\nReason (R): The director circle is defined as the locus of points from which the pair of tangents to the circle are at right angles.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "By definition, the director circle of any central conic is the locus of points of intersection of perpendicular tangents. For a circle of radius $r$, the director circle is $x^2 + y^2 = 2r^2$. Hence, tangents from any point on it are perpendicular. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): A chord of the circle $x^2 + y^2 = 16$ cannot have $(3, 3)$ as its midpoint.\\nReason (R): For $(3, 3)$, $x^2 + y^2 = 3^2 + 3^2 = 18 > 16$, which means $(3, 3)$ lies outside the circle.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The midpoint of any chord of a circle must lie in the interior of the circle ($S_1 < 0$). Here $S_1 = 3^2 + 3^2 - 16 = 18 - 16 = 2 > 0$, so $(3, 3)$ is outside. Thus no real chord can have $(3, 3)$ as its midpoint. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The locus of the midpoints of parallel chords of a circle is a diameter of the circle.\\nReason (R): The line joining the center to the midpoint of any chord is perpendicular to the chord, and all parallel chords have the same perpendicular line passing through the center.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "For a family of parallel chords with slope $m$, the perpendicular line from the center $(0, 0)$ has slope $-1/m$. The midpoints of all such chords lie on this line, which passes through the center and is therefore a diameter. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The length of the chord of $x^2 + y^2 = 25$ having midpoint $(0, 0)$ is $10$.\\nReason (R): The chord whose midpoint is the center of the circle is a diameter, and its length is $2r$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Any chord passing through the center has the center as its midpoint. This chord is a diameter. For $x^2 + y^2 = 25$, $r = 5$, so the diameter length is $2 \\times 5 = 10$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },

  // --- 10 Numerical Questions ---
  {
    question: "If the radius of the director circle of $x^2 + y^2 = 50$ is $R$, find the value of $R$.",
    options: [],
    correctAnswer: "10",
    explanation: "For $x^2 + y^2 = r^2$, the director circle is $x^2 + y^2 = 2r^2$. Here $r^2 = 50$, so $R^2 = 2 \\times 50 = 100 \\implies R = 10$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "A chord of the circle $x^2 + y^2 = 25$ has $(3, 0)$ as its midpoint. Find the length of this chord.",
    options: [],
    correctAnswer: "8",
    explanation: "The center is $(0, 0)$ and radius $r = 5$. The distance from the center to the midpoint $(3, 0)$ is $d = 3$. The half-length of the chord is $\\sqrt{r^2 - d^2} = \\sqrt{25 - 9} = 4$. Thus, the total length of the chord is $2 \\times 4 = 8$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "The chord of the circle $x^2 + y^2 = 20$ having midpoint $(2, 2)$ has equation $x + y = k$. Find the value of $k$.",
    options: [],
    correctAnswer: "4",
    explanation: "Using the formula $T = S_1$ for chord with midpoint $(2, 2)$: $x(2) + y(2) - 20 = 2^2 + 2^2 - 20 \\implies 2x + 2y = 8 \\implies x + y = 4$. Thus, $k = 4$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "If the director circle of $(x - 1)^2 + (y - 2)^2 = r^2$ passes through the point $(1, 6)$, then find the value of $r^2$.",
    options: [],
    correctAnswer: "8",
    explanation: "The director circle is $(x - 1)^2 + (y - 2)^2 = 2r^2$. Since it passes through $(1, 6)$, we substitute: $(1 - 1)^2 + (6 - 2)^2 = 2r^2 \\implies 0 + 16 = 2r^2 \\implies 2r^2 = 16 \\implies r^2 = 8$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "medium"
  },
  {
    question: "The locus of the midpoints of chords of the circle $x^2 + y^2 = 16$ of length $6$ is $x^2 + y^2 = k$. Find the value of $k$.",
    options: [],
    correctAnswer: "7",
    explanation: "Half-length of the chord is $l = 3$. Radius of the circle is $r = 4$. The distance $d$ from the center to the midpoint satisfies $d^2 + l^2 = r^2 \\implies d^2 = r^2 - l^2 = 16 - 9 = 7$. Thus the locus is $x^2 + y^2 = d^2 = 7$. Hence, $k = 7$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "medium"
  },
  {
    question: "If a chord of the circle $x^2 + y^2 = 36$ subtends an angle of $60^\\circ$ at the center, then the distance of its midpoint from the origin is $\\sqrt{k}$. Find the value of $k$.",
    options: [],
    correctAnswer: "27",
    explanation: "Let the chord be $AB$. Triangle $\\triangle OAB$ is equilateral since $OA = OB = 6$ and $\\angle AOB = 60^\\circ$. The distance from the origin to the midpoint is the altitude of this equilateral triangle: $d = 6 \\times \\frac{\\sqrt{3}}{2} = 3\\sqrt{3} = \\sqrt{27}$. Thus, $k = 27$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "medium"
  },
  {
    question: "Find the slope of the chord of the circle $x^2 + y^2 = 25$ whose midpoint is $(2, 3)$. (If slope is $-\\frac{a}{b}$, find $a$ when $b = 3$)",
    options: [],
    correctAnswer: "2",
    explanation: "The equation of the chord with midpoint $(2, 3)$ is $T = S_1 \\implies 2x + 3y = 2^2 + 3^2 = 13$. The slope of this line is $-\\frac{2}{3}$. Comparing with $-\\frac{a}{b}$ where $b = 3$, we have $a = 2$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "The distance between the centers of a circle and its director circle is:",
    options: [],
    correctAnswer: "0",
    explanation: "The director circle and the given circle are concentric, meaning they share the exact same center. Thus, the distance between their centers is $0$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "If the chord $4x + 3y = c$ of the circle $x^2 + y^2 = 25$ has midpoint $(4, 3)$, then find the value of $c$.",
    options: [],
    correctAnswer: "25",
    explanation: "Using $T = S_1$, $x(4) + y(3) = 4^2 + 3^2 \\implies 4x + 3y = 25$. Thus, $c = 25$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  },
  {
    question: "Tangents are drawn from $P$ to the circle $x^2 + y^2 = 18$ such that they are perpendicular to each other. The distance of $P$ from the origin is:",
    options: [],
    correctAnswer: "6",
    explanation: "$P$ lies on the director circle $x^2 + y^2 = 2r^2$. Since $r^2 = 18$, the director circle is $x^2 + y^2 = 36$. The distance of any point on this circle from the origin is $\\sqrt{36} = 6$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Director circle and chord with given midpoint",
    difficulty: "easy"
  }
];

module.exports = { subtopic3Questions };
