/**
 * Authentic JEE Mains Questions for Circles
 * Subtopic 5: Parametric equation of circle
 * 30 questions: 10 MCQ (single_choice), 10 AR (assertion_reason), 10 NUM (numerical)
 */

const subtopic5Questions = [
  // --- 10 MCQs (Single Choice) ---
  {
    question: "The parametric coordinates of any point on the circle $(x - 3)^2 + (y + 4)^2 = 25$ are:",
    options: [
      "$(3 + 5\\cos\\theta, -4 + 5\\sin\\theta)$",
      "$(3 + 25\\cos\\theta, -4 + 25\\sin\\theta)$",
      "$(-3 + 5\\cos\\theta, 4 + 5\\sin\\theta)$",
      "$(3 - 5\\sin\\theta, 4 + 5\\cos\\theta)$"
    ],
    correctAnswer: 0,
    explanation: "For the circle $(x - h)^2 + (y - k)^2 = r^2$, the parametric representation is $x = h + r\\cos\\theta$ and $y = k + r\\sin\\theta$, where $\\theta \\in [0, 2\\pi)$. Here $h = 3$, $k = -4$, and $r = 5$. Thus, $(x, y) = (3 + 5\\cos\\theta, -4 + 5\\sin\\theta)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "The equation of the tangent to the circle $x^2 + y^2 = a^2$ at the point with parameter $\\theta$ is:",
    options: [
      "$x\\cos\\theta + y\\sin\\theta = a$",
      "$x\\sin\\theta + y\\cos\\theta = a$",
      "$x\\cos\\theta - y\\sin\\theta = a$",
      "$x\\cos\\theta + y\\sin\\theta = a^2$"
    ],
    correctAnswer: 0,
    explanation: "The parametric coordinates are $(a\\cos\\theta, a\\sin\\theta)$. Using $x x_1 + y y_1 = a^2$, we substitute $x_1 = a\\cos\\theta$ and $y_1 = a\\sin\\theta$: $x(a\\cos\\theta) + y(a\\sin\\theta) = a^2 \\implies x\\cos\\theta + y\\sin\\theta = a$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "The equation of the normal to the circle $x^2 + y^2 = a^2$ at the point $(a\\cos\\theta, a\\sin\\theta)$ is:",
    options: [
      "$y = x\\tan\\theta$",
      "$y = -x\\tan\\theta$",
      "$y = x\\cot\\theta$",
      "$x\\cos\\theta + y\\sin\\theta = 0$"
    ],
    correctAnswer: 0,
    explanation: "The normal passes through the center $(0, 0)$ and the point $(a\\cos\\theta, a\\sin\\theta)$. Its slope is $m = \\frac{a\\sin\\theta - 0}{a\\cos\\theta - 0} = \\tan\\theta$. The equation is $y - 0 = \\tan\\theta(x - 0) \\implies y = x\\tan\\theta$ (or $x\\sin\\theta - y\\cos\\theta = 0$).",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "The equation of the chord joining two points with parameters $\\alpha$ and $\\beta$ on the circle $x^2 + y^2 = a^2$ is:",
    options: [
      "$x\\cos(\\frac{\\alpha+\\beta}{2}) + y\\sin(\\frac{\\alpha+\\beta}{2}) = a\\cos(\\frac{\\alpha-\\beta}{2})$",
      "$x\\cos(\\frac{\\alpha-\\beta}{2}) + y\\sin(\\frac{\\alpha-\\beta}{2}) = a\\cos(\\frac{\\alpha+\\beta}{2})$",
      "$x\\sin(\\frac{\\alpha+\\beta}{2}) + y\\cos(\\frac{\\alpha+\\beta}{2}) = a\\cos(\\frac{\\alpha-\\beta}{2})$",
      "$x\\cos(\\alpha+\\beta) + y\\sin(\\alpha+\\beta) = a$"
    ],
    correctAnswer: 0,
    explanation: "The points are $P(a\\cos\\alpha, a\\sin\\alpha)$ and $Q(a\\cos\\beta, a\\sin\\beta)$. Using the two-point form of a line: $\\frac{y - a\\sin\\alpha}{x - a\\cos\\alpha} = \\frac{a\\sin\\beta - a\\sin\\alpha}{a\\cos\\beta - a\\cos\\alpha} = \\frac{2\\cos(\\frac{\\beta+\\alpha}{2})\\sin(\\frac{\\beta-\\alpha}{2})}{-2\\sin(\\frac{\\beta+\\alpha}{2})\\sin(\\frac{\\beta-\\alpha}{2})} = -\\cot(\\frac{\\alpha+\\beta}{2})$. Cross multiplying and simplifying yields $x\\cos(\\frac{\\alpha+\\beta}{2}) + y\\sin(\\frac{\\alpha+\\beta}{2}) = a\\cos(\\frac{\\alpha-\\beta}{2})$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "medium"
  },
  {
    question: "The length of the chord joining the points $\\theta = \\frac{\\pi}{6}$ and $\\theta = \\frac{\\pi}{2}$ on the circle $x^2 + y^2 = 16$ is:",
    options: [
      "$4$",
      "$2$",
      "$8$",
      "$4\\sqrt{3}$"
    ],
    correctAnswer: 0,
    explanation: "The radius is $r = 4$. The length of the chord joining points with parameters $\\alpha$ and $\\beta$ is $2r\\sin(\\frac{|\\alpha - \\beta|}{2})$. Here $|\\alpha - \\beta| = \\frac{\\pi}{2} - \\frac{\\pi}{6} = \\frac{\\pi}{3}$. Thus, $\\frac{|\\alpha - \\beta|}{2} = \\frac{\\pi}{6}$. The length of the chord is $2(4)\\sin(\\frac{\\pi}{6}) = 8 \\times \\frac{1}{2} = 4$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "medium"
  },
  {
    question: "The point of intersection of the tangents at points with parameters $\\alpha$ and $\\beta$ on the circle $x^2 + y^2 = a^2$ is:",
    options: [
      "$(\\frac{a\\cos(\\frac{\\alpha+\\beta}{2})}{\\cos(\\frac{\\alpha-\\beta}{2})}, \\frac{a\\sin(\\frac{\\alpha+\\beta}{2})}{\\cos(\\frac{\\alpha-\\beta}{2})})$",
      "$(\\frac{a\\cos(\\frac{\\alpha-\\beta}{2})}{\\cos(\\frac{\\alpha+\\beta}{2})}, \\frac{a\\sin(\\frac{\\alpha-\\beta}{2})}{\\cos(\\frac{\\alpha+\\beta}{2})})$",
      "$(a\\cos(\\frac{\\alpha+\\beta}{2}), a\\sin(\\frac{\\alpha+\\beta}{2}))",
      "$(\\frac{a}{\\cos(\\frac{\\alpha+\\beta}{2})}, \\frac{a}{\\sin(\\frac{\\alpha+\\beta}{2})})$"
    ],
    correctAnswer: 0,
    explanation: "The tangents are $x\\cos\\alpha + y\\sin\\alpha = a$ and $x\\cos\\beta + y\\sin\\beta = a$. Solving these simultaneously gives $x = \\frac{a\\cos(\\frac{\\alpha+\\beta}{2})}{\\cos(\\frac{\\alpha-\\beta}{2})}$ and $y = \\frac{a\\sin(\\frac{\\alpha+\\beta}{2})}{\\cos(\\frac{\\alpha-\\beta}{2})}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "medium"
  },
  {
    question: "If a point has coordinates $x = 2 + 3\\cos\\theta$ and $y = -1 + 3\\sin\\theta$, its locus as $\\theta$ varies in $[0, 2\\pi)$ is a circle with:",
    options: [
      "Center $(2, -1)$ and radius $3$",
      "Center $(-2, 1)$ and radius $3$",
      "Center $(2, -1)$ and radius $9$",
      "Center $(3, 3)$ and radius $2$"
    ],
    correctAnswer: 0,
    explanation: "From the given equations: $\\cos\\theta = \\frac{x - 2}{3}$ and $\\sin\\theta = \\frac{y + 1}{3}$. Squaring and adding using $\\cos^2\\theta + \\sin^2\\theta = 1$ yields $\\left(\\frac{x - 2}{3}\\right)^2 + \\left(\\frac{y + 1}{3}\\right)^2 = 1 \\implies (x - 2)^2 + (y + 1)^2 = 9$. The center is $(2, -1)$ and radius is $3$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "The angle between the tangents drawn at $\\theta = 0$ and $\\theta = \\frac{\\pi}{2}$ to the circle $x^2 + y^2 = a^2$ is:",
    options: [
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{3}$",
      "$\\pi$"
    ],
    correctAnswer: 0,
    explanation: "At $\\theta = 0$, the point is $(a, 0)$ and the tangent is $x = a$ (vertical line). At $\\theta = \\frac{\\pi}{2}$, the point is $(0, a)$ and the tangent is $y = a$ (horizontal line). The angle between a vertical and horizontal line is $\\frac{\\pi}{2}$ ($90^\\circ$).",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the chord joining points $\\theta = \\alpha$ and $\\theta = \\beta$ on $x^2 + y^2 = a^2$ passes through the origin, then:",
    options: [
      "$|\\alpha - \\beta| = \\pi$",
      "$|\\alpha - \\beta| = \\frac{\\pi}{2}$",
      "$\\alpha + \\beta = \\pi$",
      "$\\alpha + \\beta = 0$"
    ],
    correctAnswer: 0,
    explanation: "Any chord passing through the origin (the center) is a diameter. The endpoints of a diameter are diametrically opposite points on the circle, meaning their eccentric angles differ by $\\pi$. Hence, $|\\alpha - \\beta| = \\pi$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "The slope of the tangent to the circle $x^2 + y^2 = r^2$ at the point with parameter $\\theta$ (where $\\sin\\theta \\neq 0$) is:",
    options: [
      "$-\\cot\\theta$",
      "$-\\tan\\theta$",
      "$\\tan\\theta$",
      "$\\cot\\theta$"
    ],
    correctAnswer: 0,
    explanation: "The equation of the tangent is $x\\cos\\theta + y\\sin\\theta = r$. Rewriting in slope-intercept form: $y = -(\\cot\\theta) x + r\\operatorname{cosec}\\theta$. Hence, the slope of the tangent is $-\\cot\\theta$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },

  // --- 10 Assertion-Reason Questions ---
  {
    question: "Assertion (A): The coordinates $x = a\\cos\\theta$ and $y = a\\sin\\theta$ satisfy $x^2 + y^2 = a^2$ for every real $\\theta$.\\nReason (R): For any real number $\\theta$, the fundamental trigonometric identity $\\cos^2\\theta + \\sin^2\\theta = 1$ always holds.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "$x^2 + y^2 = (a\\cos\\theta)^2 + (a\\sin\\theta)^2 = a^2(\\cos^2\\theta + \\sin^2\\theta) = a^2(1) = a^2$. Both statements are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The normal to the circle $x^2 + y^2 = a^2$ at any point $\\theta$ always passes through the origin $(0, 0)$.\\nReason (R): The equation of the normal at parameter $\\theta$ is $x\\sin\\theta - y\\cos\\theta = 0$, which has no constant term.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The normal to a circle at any point passes through the center. Here the center is $(0, 0)$. The equation $x\\sin\\theta - y\\cos\\theta = 0$ is satisfied by $(0, 0)$ for all $\\theta$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): If tangents at $\\alpha$ and $\\beta$ on $x^2 + y^2 = a^2$ are perpendicular, then $|\\alpha - \\beta| = \\frac{\\pi}{2}$ or $\\frac{3\\pi}{2}$.\\nReason (R): The angle between the tangents at $\\alpha$ and $\\beta$ is equal to the angle between the corresponding radii, which is $|\\alpha - \\beta|$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 2,
    explanation: "Wait, the angle between the tangents is $\\pi - |\\alpha - \\beta|$ (or supplementary to the angle between radii in the cyclic quadrilateral $OAPB$). For the tangents to be perpendicular, the angle between radii must be $90^\\circ$ ($|\\alpha - \\beta| = \\pi/2$). Thus Assertion is true. However, Reason states that the angle between tangents equals the angle between radii, which is false (they are supplementary, adding to $180^\\circ$). Therefore, Assertion is true but Reason is false. Hence option 2.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): The chord joining the points $\\theta = \\alpha$ and $\\theta = \\alpha + \\pi$ on $x^2 + y^2 = a^2$ is a diameter.\\nReason (R): The midpoint of the segment joining $(a\\cos\\alpha, a\\sin\\alpha)$ and $(a\\cos(\\alpha+\\pi), a\\sin(\\alpha+\\pi))$ is $(0, 0)$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\cos(\\alpha + \\pi) = -\\cos\\alpha$ and $\\sin(\\alpha + \\pi) = -\\sin\\alpha$, the second point is $(-a\\cos\\alpha, -a\\sin\\alpha)$. The midpoint is $\\left(\\frac{a\\cos\\alpha - a\\cos\\alpha}{2}, \\frac{a\\sin\\alpha - a\\sin\\alpha}{2}\\right) = (0, 0)$, which is the center of the circle. Any chord passing through the center is a diameter. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The locus of the point of intersection of the perpendicular tangents $x\\cos\\theta + y\\sin\\theta = a$ and $-x\\sin\\theta + y\\cos\\theta = a$ is $x^2 + y^2 = 2a^2$.\\nReason (R): Squaring and adding the two perpendicular tangents eliminates $\\theta$ and yields $x^2 + y^2 = 2a^2$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The tangent at parameter $\\theta$ is $x\\cos\\theta + y\\sin\\theta = a$. A tangent perpendicular to it is at parameter $\\theta + \\pi/2$, which is $-x\\sin\\theta + y\\cos\\theta = a$. Squaring both equations: $(x\\cos\\theta + y\\sin\\theta)^2 = a^2$ and $(-x\\sin\\theta + y\\cos\\theta)^2 = a^2$. Adding them gives $x^2(\\cos^2\\theta + \\sin^2\\theta) + y^2(\\sin^2\\theta + \\cos^2\\theta) = 2a^2 \\implies x^2 + y^2 = 2a^2$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "medium"
  },
  {
    question: "Assertion (A): For the circle $(x - 1)^2 + (y - 2)^2 = 9$, the parameter $\\theta = 0$ corresponds to the point $(4, 2)$.\\nReason (R): The parametric equations are $x = 1 + 3\\cos\\theta$ and $y = 2 + 3\\sin\\theta$. At $\\theta = 0$, $x = 1 + 3(1) = 4$ and $y = 2 + 3(0) = 2$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "Substituting $\\theta = 0$ into the standard parametric equations directly yields $x = 4$ and $y = 2$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The distance between the points $\\theta_1$ and $\\theta_2$ on the unit circle $x^2 + y^2 = 1$ is $2\\left|\\sin\\left(\\frac{\\theta_1 - \\theta_2}{2}\\right)\\right|$.\\nReason (R): For any chord of a circle of radius $r$, the length is given by $2r\\sin(\\Delta\\theta/2)$ where $\\Delta\\theta$ is the angle subtended at the center.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "In an isosceles triangle with legs $r$ and vertex angle $\\Delta\\theta$, the base is $2r\\sin(\\Delta\\theta/2)$. For the unit circle, $r = 1$, so the chord length is $2\\sin(|\\theta_1 - \\theta_2|/2)$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The tangent to $x^2 + y^2 = 4$ at $\\theta = \\frac{\\pi}{4}$ is $x + y = 2\\sqrt{2}$.\\nReason (R): The tangent at $\\theta$ is $x\\cos\\theta + y\\sin\\theta = r$. Substituting $r = 2$ and $\\theta = \\frac{\\pi}{4}$ gives $x\\frac{1}{\\sqrt{2}} + y\\frac{1}{\\sqrt{2}} = 2 \\implies x + y = 2\\sqrt{2}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "At $\\theta = \\pi/4$, $\\cos(\\pi/4) = \\sin(\\pi/4) = 1/\\sqrt{2}$. Multiplying by $\\sqrt{2}$ gives $x + y = 2\\sqrt{2}$. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The line $x\\cos\\alpha + y\\sin\\alpha = p$ is always tangent to the circle $x^2 + y^2 = p^2$.\\nReason (R): The perpendicular distance from the center $(0, 0)$ to the line is $\\frac{|-p|}{\\sqrt{\\cos^2\\alpha + \\sin^2\\alpha}} = |p|$, which equals the radius of the circle.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "The condition for a line to be tangent to a circle is that the perpendicular distance from the center equals the radius. Since the distance is $|p|$ and the radius of $x^2 + y^2 = p^2$ is $|p|$, the line is always a tangent. Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "Assertion (A): The parametric equations $x = \\frac{1 - t^2}{1 + t^2}$ and $y = \\frac{2t}{1 + t^2}$ represent a circle.\\nReason (R): Setting $t = \\tan(\\theta/2)$ expresses $x = \\cos\\theta$ and $y = \\sin\\theta$, which satisfies $x^2 + y^2 = 1$ for all $\\theta \\neq \\pi$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: 0,
    explanation: "By the half-angle substitution, $\\cos\\theta = \\frac{1 - t^2}{1 + t^2}$ and $\\sin\\theta = \\frac{2t}{1 + t^2}$. Thus $x^2 + y^2 = \\cos^2\\theta + \\sin^2\\theta = 1$, representing the unit circle (except $(-1, 0)$ as $t \\to \\pm\\infty$). Both are true and Reason explains Assertion.",
    type: "assertion_reason",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Parametric equation of circle",
    difficulty: "medium"
  },

  // --- 10 Numerical Questions ---
  {
    question: "For the circle $x^2 + y^2 = 25$, the tangent at the point with parameter $\\theta = \\frac{\\pi}{3}$ is $x + \\sqrt{3}y = k$. Find the value of $k$.",
    options: [],
    correctAnswer: "10",
    explanation: "The tangent at parameter $\\theta$ is $x\\cos\\theta + y\\sin\\theta = r$. Here $r = 5$ and $\\theta = \\frac{\\pi}{3}$. So $x\\cos(\\frac{\\pi}{3}) + y\\sin(\\frac{\\pi}{3}) = 5 \\implies x(\\frac{1}{2}) + y(\\frac{\\sqrt{3}}{2}) = 5 \\implies x + \\sqrt{3}y = 10$. Thus, $k = 10$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "The length of the chord joining the points $\\theta_1 = 0$ and $\\theta_2 = \\frac{\\pi}{2}$ on the circle $x^2 + y^2 = 18$ is:",
    options: [],
    correctAnswer: "6",
    explanation: "Radius is $r = \\sqrt{18} = 3\\sqrt{2}$. The chord length is $2r\\sin(\\frac{|\\theta_1 - \\theta_2|}{2}) = 2(3\\sqrt{2})\\sin(\\frac{\\pi}{4}) = 6\\sqrt{2} \\times \\frac{1}{\\sqrt{2}} = 6$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the point $P(3\\cos\\theta, 3\\sin\\theta)$ on the circle $x^2 + y^2 = 9$ has parameter $\\theta = \\frac{\\pi}{6}$, find the value of $2y_P$.",
    options: [],
    correctAnswer: "3",
    explanation: "At $\\theta = \\frac{\\pi}{6}$, $y_P = 3\\sin(\\frac{\\pi}{6}) = 3 \\times \\frac{1}{2} = 1.5$. Thus, $2y_P = 2 \\times 1.5 = 3$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "The tangents drawn to the circle $x^2 + y^2 = 16$ at $\\theta = \\frac{\\pi}{4}$ and $\\theta = -\\frac{\\pi}{4}$ intersect at $(x_0, y_0)$. Find the value of $x_0^2$.",
    options: [],
    correctAnswer: "32",
    explanation: "The point of intersection of tangents at $\\alpha$ and $\\beta$ has x-coordinate $x_0 = \\frac{r\\cos(\\frac{\\alpha+\\beta}{2})}{\\cos(\\frac{\\alpha-\\beta}{2})}$. Here $\\alpha = \\frac{\\pi}{4}$, $\\beta = -\\frac{\\pi}{4}$. Then $\\frac{\\alpha+\\beta}{2} = 0$, and $\\frac{\\alpha-\\beta}{2} = \\frac{\\pi}{4}$. So $x_0 = \\frac{4\\cos 0}{\\cos(\\pi/4)} = \\frac{4}{1/\\sqrt{2}} = 4\\sqrt{2}$. Thus, $x_0^2 = (4\\sqrt{2})^2 = 32$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "medium"
  },
  {
    question: "If the chord joining $\\theta = \\frac{\\pi}{4}$ and $\\theta = \\frac{3\\pi}{4}$ on $x^2 + y^2 = 8$ is $y = k$, find the value of $k$.",
    options: [],
    correctAnswer: "2",
    explanation: "The equation of the chord is $x\\cos(\\frac{\\alpha+\\beta}{2}) + y\\sin(\\frac{\\alpha+\\beta}{2}) = r\\cos(\\frac{\\alpha-\\beta}{2})$. Here $\\alpha = \\pi/4, \\beta = 3\\pi/4$, so $\\frac{\\alpha+\\beta}{2} = \\pi/2$ and $\\frac{\\alpha-\\beta}{2} = -\\pi/4$. Radius is $r = \\sqrt{8} = 2\\sqrt{2}$. Then $x\\cos(\\pi/2) + y\\sin(\\pi/2) = 2\\sqrt{2}\\cos(-\\pi/4) \\implies y(1) = 2\\sqrt{2} \\times \\frac{1}{\\sqrt{2}} = 2$. Thus, $k = 2$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "medium"
  },
  {
    question: "The slope of the normal to $x^2 + y^2 = 25$ at the point with parameter $\\theta = \\frac{\\pi}{4}$ is:",
    options: [],
    correctAnswer: "1",
    explanation: "The normal passes through the origin and $(5\\cos(\\pi/4), 5\\sin(\\pi/4))$. Its slope is $\\tan(\\frac{\\pi}{4}) = 1$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "A point moves such that its coordinates are given by $x = 5 + 4\\cos\\theta$ and $y = -2 + 4\\sin\\theta$. Find the diameter of its circular trajectory.",
    options: [],
    correctAnswer: "8",
    explanation: "The radius of the circular path is $r = 4$. The diameter is $2r = 2 \\times 4 = 8$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "If the tangent to $x^2 + y^2 = 25$ at the point $\\theta$ passes through $(10, 0)$, then the value of $\\cos\\theta$ is $\\frac{1}{k}$. Find the value of $k$.",
    options: [],
    correctAnswer: "2",
    explanation: "The tangent is $x\\cos\\theta + y\\sin\\theta = 5$. Since it passes through $(10, 0)$: $10\\cos\\theta + 0 = 5 \\implies \\cos\\theta = \\frac{5}{10} = \\frac{1}{2}$. Thus, $k = 2$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  },
  {
    question: "The square of the distance between the points with parameters $\\theta = 0$ and $\\theta = \\frac{2\\pi}{3}$ on the circle $x^2 + y^2 = 4$ is:",
    options: [],
    correctAnswer: "12",
    explanation: "The length of the chord is $2r\\sin(\\frac{\\Delta\\theta}{2}) = 2(2)\\sin(\\frac{\\pi}{3}) = 4 \\times \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$. The square of the distance is $(2\\sqrt{3})^2 = 12$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "medium"
  },
  {
    question: "The area of the triangle formed by the origin and the points with parameters $\\theta = 0$ and $\\theta = \\frac{\\pi}{2}$ on the circle $x^2 + y^2 = 36$ is:",
    options: [],
    correctAnswer: "18",
    explanation: "The points are $(6, 0)$ and $(0, 6)$. Together with the origin $(0, 0)$, they form a right-angled triangle with legs of length $6$. The area is $\\frac{1}{2} \\times 6 \\times 6 = 18$.",
    type: "numerical",
    marks: 4,
    negativeMarks: 0,
    subtopic: "Parametric equation of circle",
    difficulty: "easy"
  }
];

module.exports = { subtopic5Questions };
