/**
 * Authentic JEE Mains Questions for Circles
 * Subtopic 1: Chord of contact
 * 30 questions: 10 MCQ (single_choice), 10 AR (assertion_reason), 10 NUM (numerical)
 */

const subtopic1Questions = [
  // --- 10 MCQs (Single Choice) ---
  {
    question: "The chords of contact of the pair of tangents drawn from each point on the line $2x + y = 4$ to the circle $x^2 + y^2 = 1$ pass through the fixed point:",
    options: [
      "$(\\frac{1}{2}, \\frac{1}{4})$",
      "$(\\frac{1}{4}, \\frac{1}{2})$",
      "$(2, 1)$",
      "$(1, 2)$"
    ],
    correctAnswer: 0,
    explanation: "Any point on the line $2x + y = 4$ can be written as $(h, 4 - 2h)$. The chord of contact from this point to $x^2 + y^2 = 1$ is $hx + (4 - 2h)y = 1 \\implies h(x - 2y) + (4y - 1) = 0$. This represents a family of lines passing through the intersection of $x - 2y = 0$ and $4y - 1 = 0$. From $4y - 1 = 0$, we get $y = \\frac{1}{4}$. Then $x = 2y = \\frac{1}{2}$. Thus, the fixed point is $(\\frac{1}{2}, \\frac{1}{4})$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "If the chord of contact of tangents drawn from a point $P$ to the circle $x^2 + y^2 = a^2$ subtends an angle $\\theta$ at the center, then the distance of $P$ from the center of the circle is:",
    options: [
      "$a \\sec(\\frac{\\theta}{2})$",
      "$a \\operatorname{cosec}(\\frac{\\theta}{2})$",
      "$a \\cos(\\frac{\\theta}{2})$",
      "$a \\sin(\\frac{\\theta}{2})$"
    ],
    correctAnswer: 0,
    explanation: "Let $O$ be the center and $A, B$ be the points of contact of the tangents from $P$. Then $\\angle AOB = \\theta$. The line $OP$ bisects $\\angle AOB$, so $\\angle AOP = \\frac{\\theta}{2}$. In right-angled triangle $\\triangle OAP$ (with right angle at $A$), $\\cos(\\angle AOP) = \\frac{OA}{OP} = \\frac{a}{OP} \\implies OP = \\frac{a}{\\cos(\\theta/2)} = a \\sec(\\frac{\\theta}{2})$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "The area of the triangle formed by the tangents from $(x_1, y_1)$ to the circle $x^2 + y^2 = a^2$ and their chord of contact is:",
    options: [
      "$\\frac{a(x_1^2 + y_1^2 - a^2)^{3/2}}{x_1^2 + y_1^2}$",
      "$\\frac{a^2(x_1^2 + y_1^2 - a^2)^{3/2}}{x_1^2 + y_1^2}$",
      "$\\frac{(x_1^2 + y_1^2 - a^2)^{3/2}}{a(x_1^2 + y_1^2)}$",
      "$\\frac{a(x_1^2 + y_1^2 - a^2)}{x_1^2 + y_1^2}$"
    ],
    correctAnswer: 0,
    explanation: "Let $L = \\sqrt{x_1^2 + y_1^2 - a^2}$ be the length of the tangent, and $R = a$ be the radius. The angle $\\theta$ between the tangents satisfies $\\tan(\\theta/2) = \\frac{R}{L}$. The area of $\\triangle PAB$ is given by $\\frac{R L^3}{R^2 + L^2}$. Here $R = a$ and $R^2 + L^2 = a^2 + (x_1^2 + y_1^2 - a^2) = x_1^2 + y_1^2$. Thus, $\\text{Area} = \\frac{a (x_1^2 + y_1^2 - a^2)^{3/2}}{x_1^2 + y_1^2}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "Tangents are drawn from the point $P(3, 4)$ to the circle $x^2 + y^2 = 9$. If the chord of contact touches the circle $x^2 + y^2 = r^2$, then $r$ is equal to:",
    options: [
      "$\\frac{9}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{12}{5}$",
      "$\\frac{6}{5}$"
    ],
    correctAnswer: 0,
    explanation: "The equation of the chord of contact from $P(3, 4)$ to $x^2 + y^2 = 9$ is $3x + 4y = 9$. If this line touches the concentric circle $x^2 + y^2 = r^2$, the perpendicular distance from the center $(0, 0)$ to $3x + 4y - 9 = 0$ must equal $r$. Distance $d = \\frac{|3(0) + 4(0) - 9|}{\\sqrt{3^2 + 4^2}} = \\frac{9}{5}$. Hence, $r = \\frac{9}{5}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "If the chord of contact of tangents drawn from $P$ to the circle $x^2 + y^2 = 25$ is $3x + 4y = 10$, then the coordinates of $P$ are:",
    options: [
      "$(\\frac{15}{2}, 10)$",
      "$(6, 8)$",
      "$(\\frac{15}{4}, 5)$",
      "$(15, 20)$"
    ],
    correctAnswer: 0,
    explanation: "Let $P(x_1, y_1)$. The chord of contact to $x^2 + y^2 = 25$ is $x x_1 + y y_1 = 25$. Comparing with $3x + 4y = 10$, we write $\\frac{x_1}{3} = \\frac{y_1}{4} = \\frac{25}{10} = \\frac{5}{2}$. Therefore, $x_1 = 3 \\times \\frac{5}{2} = \\frac{15}{2}$ and $y_1 = 4 \\times \\frac{5}{2} = 10$. Thus, $P = (\\frac{15}{2}, 10)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "The locus of the point of intersection of perpendicular tangents to the circle $x^2 + y^2 = a^2$ is the director circle $x^2 + y^2 = 2a^2$. The chord of contact of these tangents with respect to $x^2 + y^2 = a^2$ always touches:",
    options: [
      "$x^2 + y^2 = \\frac{a^2}{2}$",
      "$x^2 + y^2 = \\frac{a^2}{4}$",
      "$x^2 + y^2 = a^2$",
      "$x^2 + y^2 = 4a^2$"
    ],
    correctAnswer: 0,
    explanation: "Let $P(h, k)$ lie on the director circle, so $h^2 + k^2 = 2a^2$. The chord of contact of tangents from $P$ to $x^2 + y^2 = a^2$ is $hx + ky = a^2$. The perpendicular distance from $(0, 0)$ to this chord is $d = \\frac{a^2}{\\sqrt{h^2 + k^2}} = \\frac{a^2}{\\sqrt{2a^2}} = \\frac{a}{\\sqrt{2}}$. Since the distance from origin is constant and equals $\\frac{a}{\\sqrt{2}}$, this chord of contact always touches the circle $x^2 + y^2 = (\\frac{a}{\\sqrt{2}})^2 = \\frac{a^2}{2}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "Tangents are drawn to $x^2 + y^2 = 16$ from any point on $x^2 + y^2 = 25$. The locus of the midpoint of the chord of contact is:",
    options: [
      "$25(x^2 + y^2)^2 = 256$",
      "$25(x^2 + y^2) = 256$",
      "$(x^2 + y^2)^2 = 256$",
      "$16(x^2 + y^2)^2 = 625$"
    ],
    correctAnswer: 0,
    explanation: "Let $(h, k)$ be the midpoint of the chord of contact. The equation of the chord with given midpoint $(h, k)$ is $T = S_1 \\implies hx + ky - 16 = h^2 + k^2 - 16 \\implies hx + ky = h^2 + k^2$. Also, if $P(x_1, y_1)$ is the external point on $x^2 + y^2 = 25$, the chord of contact is $x_1 x + y_1 y = 16$. Comparing the two equations: $\\frac{x_1}{h} = \\frac{y_1}{k} = \\frac{16}{h^2 + k^2} \\implies x_1 = \\frac{16h}{h^2 + k^2},\\; y_1 = \\frac{16k}{h^2 + k^2}$. Since $x_1^2 + y_1^2 = 25$: $\\frac{256(h^2 + k^2)}{(h^2 + k^2)^2} = 25 \\implies 25(h^2 + k^2) = 256$. Replacing $(h, k)$ by $(x, y)$, we get $25(x^2 + y^2) = 256$, or equivalently the radius squared is $\\frac{256}{25}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "hard"
  },
  {
    question: "If the line $x - 2y = 4$ is the chord of contact of tangents drawn from a point $P$ to the circle $x^2 + y^2 = 4$, then the coordinates of $P$ are:",
    options: [
      "$(1, -2)$",
      "$(2, -4)$",
      "$(1, 2)$",
      "$(-1, 2)$"
    ],
    correctAnswer: 0,
    explanation: "Let $P(x_1, y_1)$. The chord of contact is $x x_1 + y y_1 = 4$. Comparing with $x - 2y = 4$, we find $x_1 = 1$ and $y_1 = -2$. Thus, $P = (1, -2)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "From a point $P(2, 2)$, tangents $PA$ and $PB$ are drawn to the circle $x^2 + y^2 = 2$. The circumcircle of $\\triangle PAB$ has equation:",
    options: [
      "$x^2 + y^2 - 2x - 2y = 0$",
      "$x^2 + y^2 + 2x + 2y = 0$",
      "$x^2 + y^2 - 4x - 4y = 0$",
      "$x^2 + y^2 - x - y = 0$"
    ],
    correctAnswer: 0,
    explanation: "Since $PA$ and $PB$ are tangents to the circle with center $O(0, 0)$, $\\angle PAO = 90^\\circ$ and $\\angle PBO = 90^\\circ$. Hence, the points $O, A, P, B$ are concyclic and lie on a circle having $OP$ as diameter. The diameter endpoints are $O(0, 0)$ and $P(2, 2)$. Using diameter form: $(x - 0)(x - 2) + (y - 0)(y - 2) = 0 \\implies x^2 + y^2 - 2x - 2y = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "The length of the chord of contact of the tangents drawn from $(5, 12)$ to the circle $x^2 + y^2 = 25$ is:",
    options: [
      "$\\frac{120}{13}$",
      "$\\frac{60}{13}$",
      "$\\frac{240}{13}$",
      "$10$"
    ],
    correctAnswer: 0,
    explanation: "Here $r = 5$, and distance of $P(5, 12)$ from the origin is $d = \\sqrt{5^2 + 12^2} = 13$. Length of tangent is $L = \\sqrt{d^2 - r^2} = \\sqrt{169 - 25} = 12$. The length of the chord of contact is given by $\\frac{2rL}{d} = \\frac{2 \\times 5 \\times 12}{13} = \\frac{120}{13}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },

  // --- 10 Assertion-Reason Questions ---
  {
    question: "Assertion (A): The chord of contact of tangents drawn from any point on the circle $x^2 + y^2 = 2a^2$ to the circle $x^2 + y^2 = a^2$ subtends a right angle at the center.\\nReason (R): For any circle $x^2 + y^2 = a^2$, the director circle is $x^2 + y^2 = 2a^2$, and the tangents drawn from any point on the director circle are mutually perpendicular.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "If tangents from $P$ are mutually perpendicular (angle between tangents is $90^\\circ$), then in the cyclic quadrilateral $OAPB$, $\\angle AOB = 180^\\circ - 90^\\circ = 90^\\circ$. The locus of such points $P$ is the director circle $x^2 + y^2 = 2a^2$. Hence, both Assertion and Reason are true, and Reason correctly explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The chord of contact of tangents drawn from the point $(4, 3)$ to the circle $x^2 + y^2 = 9$ is $4x + 3y = 9$.\\nReason (R): The equation of the chord of contact of tangents drawn from a point $(x_1, y_1)$ to the circle $x^2 + y^2 = a^2$ is given by $x x_1 + y y_1 = a^2$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "By the standard formula $T = 0$, the chord of contact from $(x_1, y_1)$ to $x^2 + y^2 = a^2$ is $x x_1 + y y_1 = a^2$. Substituting $(x_1, y_1) = (4, 3)$ and $a^2 = 9$ gives $4x + 3y = 9$. Both statements are true and Reason directly explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If a point lies inside a circle, its chord of contact of tangents with respect to that circle is a real line.\\nReason (R): From an interior point of a circle, no real tangents can be drawn to the circle, and the points of contact are imaginary.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is false but Reason is true",
      "Assertion is true but Reason is false"
    ],
    correctAnswer: 2,
    explanation: "Wait, the line $x x_1 + y y_1 = a^2$ is indeed a real line in the plane (as $x_1, y_1, a$ are real), but the chord of contact represents the line segment connecting real points of contact. Since no real tangents can be drawn from an inside point, there are no real points of contact, so the chord of contact does not exist as a chord connecting points on the circle. Thus Assertion is false, while Reason is true. Hence option 3 (Assertion is false, Reason is true).",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The length of the chord of contact of tangents from $(x_1, y_1)$ to $x^2 + y^2 = a^2$ is $\\frac{2a\\sqrt{x_1^2 + y_1^2 - a^2}}{\\sqrt{x_1^2 + y_1^2}}$.\\nReason (R): The distance of the chord of contact $x x_1 + y y_1 = a^2$ from the origin is $\\frac{a^2}{\\sqrt{x_1^2 + y_1^2}}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The perpendicular distance of the chord from the origin is $d = \\frac{a^2}{\\sqrt{x_1^2 + y_1^2}}$. The half-length of the chord is $\\sqrt{a^2 - d^2} = \\sqrt{a^2 - \\frac{a^4}{x_1^2 + y_1^2}} = \\frac{a\\sqrt{x_1^2 + y_1^2 - a^2}}{\\sqrt{x_1^2 + y_1^2}}$. Multiplying by $2$ gives the full length. Thus, both are true and Reason correctly explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): If the chords of contact of tangents from two points $P$ and $Q$ to the circle $x^2 + y^2 = a^2$ pass through $Q$ and $P$ respectively, then the points $P$ and $Q$ are conjugate points.\\nReason (R): Two points $(x_1, y_1)$ and $(x_2, y_2)$ are conjugate with respect to the circle $x^2 + y^2 = a^2$ if and only if $x_1 x_2 + y_1 y_2 = a^2$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The polar/chord of contact of $P(x_1, y_1)$ is $x x_1 + y y_1 = a^2$. If it passes through $Q(x_2, y_2)$, then $x_2 x_1 + y_2 y_1 = a^2$. By symmetry, the chord of contact of $Q$ also passes through $P$. Such points are termed conjugate points with respect to the circle. Both Assertion and Reason are true and Reason is the correct explanation.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The line joining the center of a circle to an external point $P$ is always perpendicular to the chord of contact of tangents from $P$.\\nReason (R): The line joining the center to $P$ is the axis of symmetry of the two tangents drawn from $P$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The line $OP$ is the angle bisector of $\\angle APB$ and $\\angle AOB$. In the isosceles triangle $\\triangle OAB$ (where $OA = OB = r$), the angle bisector of the vertex angle $\\angle AOB$ is also the perpendicular bisector of the base $AB$ (the chord of contact). Hence $OP \\perp AB$, and Reason is the correct explanation.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If tangents are drawn from the point $(a, b)$ to the circle $x^2 + y^2 = r^2$, the circumcircle of the triangle formed by the tangents and the chord of contact passes through the origin.\\nReason (R): The angle between the radius to the point of tangency and the tangent is $90^\\circ$, making the line segment joining the origin to $(a, b)$ the diameter of the circumcircle.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Let $P = (a, b)$ and $O = (0, 0)$ be the center. The points of contact $A$ and $B$ satisfy $\\angle PAO = 90^\\circ$ and $\\angle PBO = 90^\\circ$. Thus, the quadrilateral $OAPB$ is cyclic with $OP$ as diameter. The circumcircle of $\\triangle PAB$ is this same circle and therefore passes through the origin $O(0, 0)$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The locus of a point whose chord of contact with respect to $x^2 + y^2 = a^2$ subtends an angle of $120^\\circ$ at the center is $x^2 + y^2 = 4a^2$.\\nReason (R): If the angle subtended by the chord of contact at the center is $2\\alpha$, then the distance of the point from the center is $d = a \\sec \\alpha$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "If the angle subtended by the chord of contact $AB$ at the center is $120^\\circ$, then $2\\alpha = 120^\\circ \\implies \\alpha = 60^\\circ$. The distance from the center is $d = a \\sec 60^\\circ = 2a$. Thus $x^2 + y^2 = d^2 = 4a^2$. Both Assertion and Reason are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The chord of contact of tangents from $(1, 2)$ to $x^2 + y^2 = 5$ is a tangent to the circle.\\nReason (R): The point $(1, 2)$ lies on the circumference of the circle $x^2 + y^2 = 5$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "When $(x_1, y_1)$ lies on the circle, the formula $T = 0$ yields the tangent at that point, which can be viewed as the degenerate chord of contact where both contact points coincide. Since $1^2 + 2^2 = 5$, the point lies on the circle and $T = 0$ gives the tangent line $x + 2y = 5$. Both are true and Reason correctly explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If chords of contact from points $P_1$ and $P_2$ to a circle are parallel, then the center of the circle and the points $P_1, P_2$ are collinear.\\nReason (R): The chord of contact of $(x_1, y_1)$ with respect to $x^2 + y^2 = a^2$ has slope $-x_1/y_1$, so parallel chords must have equal slopes $-x_1/y_1 = -x_2/y_2$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The chord of contact is $x x_i + y y_i = a^2$ with normal vector $(x_i, y_i)$. If two chords are parallel, their normal vectors are proportional: $(x_1, y_1) = k(x_2, y_2)$, meaning $P_1, P_2$ and the origin $(0, 0)$ lie on the same straight line through the center. Both are true and Reason is the correct explanation.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },

  // --- 10 Numerical Questions ---
  {
    question: "Tangents are drawn from the point $P(4, 3)$ to the circle $x^2 + y^2 = 9$. If the length of the chord of contact is $\\frac{L}{5}$, then the integer value of $L$ is:",
    options: [],
    correctAnswer: "24",
    explanation: "The radius is $r = 3$. The distance from the center $(0, 0)$ to $P(4, 3)$ is $d = \\sqrt{4^2 + 3^2} = 5$. The length of the tangent is $\\sqrt{d^2 - r^2} = \\sqrt{25 - 9} = 4$. The length of the chord of contact is $\\frac{2rL_t}{d} = \\frac{2 \\times 3 \\times 4}{5} = \\frac{24}{5}$. Comparing with $\\frac{L}{5}$, we have $L = 24$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "If the chord of contact of tangents drawn from the point $(h, k)$ to the circle $x^2 + y^2 = 16$ subtends a right angle at the center, then the value of $h^2 + k^2$ is:",
    options: [],
    correctAnswer: "32",
    explanation: "If the chord of contact subtends a right angle at the center, the tangents from $(h, k)$ are mutually perpendicular. Thus, $(h, k)$ lies on the director circle $x^2 + y^2 = 2r^2$. Here $r^2 = 16$, so $h^2 + k^2 = 2 \\times 16 = 32$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "Tangents are drawn from the point $P(6, 8)$ to the circle $x^2 + y^2 = 25$. If the distance of the chord of contact from the center of the circle is $d$, then the value of $4d$ is:",
    options: [],
    correctAnswer: "10",
    explanation: "Distance of $P$ from the center is $OP = \\sqrt{6^2 + 8^2} = 10$. The equation of the chord of contact is $6x + 8y = 25$. The perpendicular distance from the center $(0, 0)$ to this line is $d = \\frac{25}{\\sqrt{6^2 + 8^2}} = \\frac{25}{10} = 2.5$. Thus, $4d = 4 \\times 2.5 = 10$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "The area of the triangle formed by the tangents from $(5, 0)$ to the circle $x^2 + y^2 = 9$ and their chord of contact is $\\frac{A}{25}$. Find the value of $A$.",
    options: [],
    correctAnswer: "192",
    explanation: "Radius $r = 3$, distance $d = 5$. Length of tangent is $L = \\sqrt{d^2 - r^2} = \\sqrt{25 - 9} = 4$. The area of the triangle is $\\frac{r L^3}{d^2} = \\frac{3 \\times 4^3}{5^2} = \\frac{3 \\times 64}{25} = \\frac{192}{25}$. Thus, $A = 192$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "If the line $3x + 4y = 25$ is the chord of contact of tangents drawn from $P(\\alpha, \\beta)$ to the circle $x^2 + y^2 = 25$, then $\\alpha + \\beta$ is equal to:",
    options: [],
    correctAnswer: "7",
    explanation: "The chord of contact from $(\\alpha, \\beta)$ to $x^2 + y^2 = 25$ is $\\alpha x + \\beta y = 25$. Comparing with $3x + 4y = 25$, we get $\\alpha = 3$ and $\\beta = 4$. Thus, $\\alpha + \\beta = 3 + 4 = 7$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "Tangents are drawn from $P(10, 0)$ to the circle $x^2 + y^2 = 36$. If the chord of contact intersects the x-axis at $(k, 0)$, find the value of $10k$.",
    options: [],
    correctAnswer: "36",
    explanation: "The chord of contact from $(10, 0)$ to $x^2 + y^2 = 36$ is $10x + 0y = 36 \\implies x = \\frac{36}{10} = 3.6$. The point on the x-axis is $(3.6, 0)$, so $k = 3.6$. Therefore, $10k = 36$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "If the chords of contact of tangents from $(h, 1)$ to the circle $x^2 + y^2 = 4$ passes through the point $(2, 2)$, then find the value of $h$.",
    options: [],
    correctAnswer: "1",
    explanation: "The equation of the chord of contact from $(h, 1)$ to $x^2 + y^2 = 4$ is $hx + 1y = 4$. Since it passes through $(2, 2)$: $h(2) + 2 = 4 \\implies 2h = 2 \\implies h = 1$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "Tangents are drawn from $P(8, 6)$ to the circle $x^2 + y^2 = 36$. If the length of the tangent is $L$, find the value of $L$.",
    options: [],
    correctAnswer: "8",
    explanation: "The length of the tangent is $\\sqrt{x_1^2 + y_1^2 - r^2} = \\sqrt{8^2 + 6^2 - 36} = \\sqrt{64 + 36 - 36} = \\sqrt{64} = 8$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "easy"
  },
  {
    question: "If the chord of contact of tangents from $P$ to the circle $x^2 + y^2 = 9$ touches the circle $x^2 + y^2 = 4$, then the distance of $P$ from the center of the circle is $\\frac{k}{2}$. Find the value of $k$.",
    options: [],
    correctAnswer: "9",
    explanation: "Let $P(x_1, y_1)$ and $d = \\sqrt{x_1^2 + y_1^2}$. The chord of contact is $x_1 x + y_1 y = 9$. The distance of this line from the origin is $\\frac{9}{\\sqrt{x_1^2 + y_1^2}} = \\frac{9}{d}$. Since it touches $x^2 + y^2 = 4$, its distance from origin equals the radius $2$. So $\\frac{9}{d} = 2 \\implies d = \\frac{9}{2}$. Thus, $k = 9$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "medium"
  },
  {
    question: "From the point $P(5, 5)$, tangents $PA$ and $PB$ are drawn to the circle $x^2 + y^2 = 25$. The radius of the circle circumscribing $\\triangle PAB$ is $\\frac{5\\sqrt{2}}{k}$. Find the value of $k$.",
    options: [],
    correctAnswer: "2",
    explanation: "The circumcircle of $\\triangle PAB$ has $OP$ as diameter, where $O(0, 0)$ is the center. The diameter is $OP = \\sqrt{5^2 + 5^2} = 5\\sqrt{2}$. The radius is $\\frac{OP}{2} = \\frac{5\\sqrt{2}}{2}$. Comparing with $\\frac{5\\sqrt{2}}{k}$, we get $k = 2$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Chord of contact",
    difficulty: "medium"
  }
];

module.exports = { subtopic1Questions };
