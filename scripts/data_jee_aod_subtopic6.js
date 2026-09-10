// scripts/data_jee_aod_subtopic6.js
// 30 authentic JEE Mains questions on 'Rate of change'
// Subtopic 6 for Application of Derivatives (Mathematics, Class 12)

module.exports = [
  // 10 MCQs
  {
    questionType: "MCQ",
    question: "A man $2\\text{ m}$ tall walks away from a lamppost $6\\text{ m}$ high at a uniform speed of $4\\text{ km/h}$. The rate at which the length of his shadow increases is:",
    options: [
      "$2\\text{ km/h}$",
      "$1\\text{ km/h}$",
      "$3\\text{ km/h}$",
      "$4\\text{ km/h}$"
    ],
    correctAnswer: "$2\\text{ km/h}$",
    explanation: "Let $x$ be the distance of the man from the lamppost and $s$ be the length of his shadow. By similar triangles: $\\frac{s}{2} = \\frac{x + s}{6} \\implies 6s = 2x + 2s \\implies 4s = 2x \\implies s = \\frac{1}{2}x$. Differentiating with respect to time: $\\frac{ds}{dt} = \\frac{1}{2}\\frac{dx}{dt}$. Given $\\frac{dx}{dt} = 4\\text{ km/h}$, we find $\\frac{ds}{dt} = \\frac{1}{2}(4) = 2\\text{ km/h}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "A spherical snowball melts at a rate proportional to its surface area. The rate of decrease of its radius is:",
    options: [
      "Constant",
      "Proportional to the radius",
      "Proportional to the square of the radius",
      "Inversely proportional to the radius"
    ],
    correctAnswer: "Constant",
    explanation: "Volume $V = \\frac{4}{3}\\pi r^3$ and surface area $S = 4\\pi r^2$. We are given $\\frac{dV}{dt} = -kS = -k(4\\pi r^2)$ for some constant $k > 0$. Since $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$, we have $4\\pi r^2 \\frac{dr}{dt} = -k(4\\pi r^2) \\implies \\frac{dr}{dt} = -k = \\text{constant}$. Thus, the radius decreases at a constant rate.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The volume of a sphere is increasing at a rate of $8\\pi\\text{ cm}^3\\text{/s}$. The rate of increase of its surface area when the radius is $2\\text{ cm}$ is:",
    options: [
      "$8\\pi\\text{ cm}^2\\text{/s}$",
      "$4\\pi\\text{ cm}^2\\text{/s}$",
      "$2\\pi\\text{ cm}^2\\text{/s}$",
      "$16\\pi\\text{ cm}^2\\text{/s}$"
    ],
    correctAnswer: "$8\\pi\\text{ cm}^2\\text{/s}$",
    explanation: "Volume $V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. Given $\\frac{dV}{dt} = 8\\pi$ and $r = 2\\text{ cm}$: $8\\pi = 4\\pi(2^2)\\frac{dr}{dt} = 16\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = \\frac{1}{2}\\text{ cm/s}$. Surface area is $S = 4\\pi r^2 \\implies \\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt} = 8\\pi(2)\\left(\\frac{1}{2}\\right) = 8\\pi\\text{ cm}^2\\text{/s}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "A point moves along the parabola $y^2 = 8x$ such that the rate of increase of its $x$-coordinate is $2\\text{ units/s}$. The rate of increase of its $y$-coordinate when $y = 4$ is:",
    options: [
      "$2\\text{ units/s}$",
      "$1\\text{ unit/s}$",
      "$4\\text{ units/s}$",
      "$8\\text{ units/s}$"
    ],
    correctAnswer: "$2\\text{ units/s}$",
    explanation: "Differentiating $y^2 = 8x$ with respect to time: $2y \\frac{dy}{dt} = 8\\frac{dx}{dt} \\implies y \\frac{dy}{dt} = 4\\frac{dx}{dt}$. Given $y = 4$ and $\\frac{dx}{dt} = 2\\text{ units/s}$: $4\\frac{dy}{dt} = 4(2) = 8 \\implies \\frac{dy}{dt} = 2\\text{ units/s}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "Sand is pouring from a pipe at the rate of $12\\text{ cm}^3\\text{/s}$. The falling sand forms a cone on the ground in such a way that the height of the cone is always one-sixth of the radius of the base. How fast is the height of the sand cone increasing when the height is $4\\text{ cm}$?",
    options: [
      "$\\frac{1}{48\\pi}\\text{ cm/s}$",
      "$\\frac{1}{24\\pi}\\text{ cm/s}$",
      "$\\frac{1}{12\\pi}\\text{ cm/s}$",
      "$\\frac{1}{36\\pi}\\text{ cm/s}$"
    ],
    correctAnswer: "$\\frac{1}{48\\pi}\\text{ cm/s}$",
    explanation: "Given $h = \\frac{1}{6}r \\implies r = 6h$. The volume of the cone is $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(6h)^2 h = 12\\pi h^3$. Differentiating with respect to time $t$: $\\frac{dV}{dt} = 36\\pi h^2 \\frac{dh}{dt}$. Given $\\frac{dV}{dt} = 12\\text{ cm}^3\\text{/s}$ and $h = 4\\text{ cm}$: $12 = 36\\pi(4^2)\\frac{dh}{dt} = 576\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = \\frac{12}{576\\pi} = \\frac{1}{48\\pi}\\text{ cm/s}$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "A stone is dropped into a quiet lake and waves move in circles at a speed of $4\\text{ cm/s}$. At the instant when the radius of the circular wave is $10\\text{ cm}$, how fast is the enclosed area increasing?",
    options: [
      "$80\\pi\\text{ cm}^2\\text{/s}$",
      "$40\\pi\\text{ cm}^2\\text{/s}$",
      "$20\\pi\\text{ cm}^2\\text{/s}$",
      "$100\\pi\\text{ cm}^2\\text{/s}$"
    ],
    correctAnswer: "$80\\pi\\text{ cm}^2\\text{/s}$",
    explanation: "Area of the circle is $A = \\pi r^2$. Differentiating with respect to time: $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$. Given $\\frac{dr}{dt} = 4\\text{ cm/s}$ and $r = 10\\text{ cm}$: $\\frac{dA}{dt} = 2\\pi(10)(4) = 80\\pi\\text{ cm}^2\\text{/s}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "A ladder $13\\text{ m}$ long leans against a vertical wall. If the bottom of the ladder is pulled away from the wall at $2\\text{ m/s}$, the rate at which the angle $\\theta$ between the ladder and the ground changes when the bottom is $5\\text{ m}$ from the wall is:",
    options: [
      "$-\\frac{1}{6}\\text{ rad/s}$",
      "$-\\frac{1}{12}\\text{ rad/s}$",
      "$-\\frac{2}{13}\\text{ rad/s}$",
      "$-\\frac{5}{12}\\text{ rad/s}$"
    ],
    correctAnswer: "$-\\frac{1}{6}\\text{ rad/s}$",
    explanation: "Let $x$ be the distance of the bottom from the wall. Then $\\cos\\theta = \\frac{x}{13} \\implies x = 13\\cos\\theta$. Differentiating with respect to $t$: $\\frac{dx}{dt} = -13\\sin\\theta \\frac{d\\theta}{dt}$. When $x = 5\\text{ m}$, the height on the wall is $y = \\sqrt{13^2 - 5^2} = 12\\text{ m}$, so $\\sin\\theta = \\frac{12}{13}$. Substituting $\\frac{dx}{dt} = 2\\text{ m/s}$: $2 = -13\\left(\\frac{12}{13}\\right)\\frac{d\\theta}{dt} = -12\\frac{d\\theta}{dt} \\implies \\frac{d\\theta}{dt} = -\\frac{2}{12} = -\\frac{1}{6}\\text{ rad/s}$.",
    difficulty: "Hard",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The side of an equilateral triangle is increasing at the rate of $2\\text{ cm/s}$. At what rate is its area increasing when the side is $10\\text{ cm}$?",
    options: [
      "$10\\sqrt{3}\\text{ cm}^2\\text{/s}$",
      "$5\\sqrt{3}\\text{ cm}^2\\text{/s}$",
      "$20\\sqrt{3}\\text{ cm}^2\\text{/s}$",
      "$15\\sqrt{3}\\text{ cm}^2\\text{/s}$"
    ],
    correctAnswer: "$10\\sqrt{3}\\text{ cm}^2\\text{/s}$",
    explanation: "The area of an equilateral triangle of side $s$ is $A = \\frac{\\sqrt{3}}{4} s^2$. Differentiating with respect to time: $\\frac{dA}{dt} = \\frac{\\sqrt{3}}{4}(2s)\\frac{ds}{dt} = \\frac{\\sqrt{3}}{2}s \\frac{ds}{dt}$. Given $s = 10\\text{ cm}$ and $\\frac{ds}{dt} = 2\\text{ cm/s}$: $\\frac{dA}{dt} = \\frac{\\sqrt{3}}{2}(10)(2) = 10\\sqrt{3}\\text{ cm}^2\\text{/s}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "The total cost function for producing $x$ items is $C(x) = 0.005x^3 - 0.02x^2 + 30x + 5000$. The marginal cost when $x = 10$ is:",
    options: [
      "$31.1$",
      "$30.5$",
      "$32.0$",
      "$29.5$"
    ],
    correctAnswer: "$31.1$",
    explanation: "Marginal cost is the derivative of the total cost: $MC(x) = C'(x) = 0.015x^2 - 0.04x + 30$. When $x = 10$: $C'(10) = 0.015(100) - 0.04(10) + 30 = 1.5 - 0.4 + 30 = 31.1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "MCQ",
    question: "A particle moves along the curve $6y = x^3 + 2$. The points on the curve at which the $y$-coordinate is changing $8$ times as fast as the $x$-coordinate are:",
    options: [
      "$(4, 11)$ and $(-4, -31/3)$",
      "$(4, 11)$ and $(2, 5/3)$",
      "$(3, 29/6)$ and $(-3, -25/6)$",
      "$(1, 1/2)$ and $(-1, 1/6)$"
    ],
    correctAnswer: "$(4, 11)$ and $(-4, -31/3)$",
    explanation: "Differentiating $6y = x^3 + 2$ with respect to $t$: $6\\frac{dy}{dt} = 3x^2 \\frac{dx}{dt}$. Given $\\frac{dy}{dt} = 8\\frac{dx}{dt}$: $6\\left(8\\frac{dx}{dt}\\right) = 3x^2 \\frac{dx}{dt} \\implies 48 = 3x^2 \\implies x^2 = 16 \\implies x = \\pm 4$. For $x = 4$: $6y = 4^3 + 2 = 66 \\implies y = 11$, giving $(4, 11)$. For $x = -4$: $6y = (-4)^3 + 2 = -64 + 2 = -62 \\implies y = -62/6 = -31/3$, giving $(-4, -31/3)$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Assertion-Reason Questions
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the radius of a circle increases at a constant rate, its area increases at an accelerating rate.\nReason (R): Since $A = \\pi r^2$, the rate of change of area is $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$, which is proportional to $r$ when $\\frac{dr}{dt}$ is constant.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$. Since $r$ increases with time, the rate of increase of area $\\frac{dA}{dt}$ grows larger as $r$ increases. Its second derivative $\\frac{d^2A}{dt^2} = 2\\pi\\left(\\frac{dr}{dt}\\right)^2 > 0$, so the area increases at an accelerating rate. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For a top of a ladder of length $L$ sliding down a vertical wall with the foot pulled away at constant speed $v$, the speed of the top approaches infinity as the top approaches the ground.\nReason (R): From $x^2 + y^2 = L^2$, we have $\\frac{dy}{dt} = -\\frac{x}{y}\\frac{dx}{dt}$, and as $y \\to 0$, $-\\frac{x}{y}v \\to -\\infty$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Differentiating $x^2 + y^2 = L^2$ gives $2x\\dot{x} + 2y\\dot{y} = 0 \\implies \\dot{y} = -\\frac{x}{y}\\dot{x}$. As the top of the ladder hits the ground ($y \\to 0^+$), $x \\to L$, so $|\\dot{y}| = \\frac{L}{y}v \\to \\infty$. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the volume of a cube is increasing at a constant rate, its edge length increases at a decelerating rate.\nReason (R): Since $V = s^3$, we have $\\frac{ds}{dt} = \\frac{1}{3s^2}\\frac{dV}{dt}$, which decreases as $s$ increases.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "With $\\frac{dV}{dt} = c$ (constant), $\\frac{ds}{dt} = \\frac{c}{3s^2}$. As time progresses, $s$ increases, so $\\frac{ds}{dt}$ decreases, meaning $\\frac{d^2s}{dt^2} < 0$ (decelerating growth). Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): When a man walks away from a lamppost at speed $v$, the tip of his shadow moves faster than the man himself.\nReason (R): The speed of the shadow tip is the sum of the walking speed of the man and the rate of elongation of his shadow.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "If $x$ is the distance of the man from the post and $s$ is the shadow length, the position of the shadow tip from the post is $x + s$. Its velocity is $\\frac{d}{dt}(x + s) = \\frac{dx}{dt} + \\frac{ds}{dt} = v + \\frac{ds}{dt}$. Since $\\frac{ds}{dt} > 0$, the tip moves strictly faster than $v$. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For water draining from an inverted conical tank at a constant rate of volume $\\frac{dV}{dt} = -k$, the water level drops fastest when the depth of water is smallest.\nReason (R): The cross-sectional area of the water surface is proportional to the square of depth $h$, so $\\left|\\frac{dh}{dt}\\right| = \\frac{k}{\\pi r^2} \\propto \\frac{1}{h^2}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Since $\\frac{dV}{dt} = A(h)\\frac{dh}{dt}$, we have $\\left|\\frac{dh}{dt}\\right| = \\frac{k}{A(h)} = \\frac{k}{c h^2}$. As $h \\to 0$, $A(h)$ becomes very small, making $\\left|\\frac{dh}{dt}\\right|$ very large. Thus the water level drops fastest when the depth is smallest. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the side of a square increases at $3\\text{ cm/s}$, the perimeter increases at $12\\text{ cm/s}$.\nReason (R): The perimeter of a square is $P = 4s$, so $\\frac{dP}{dt} = 4\\frac{ds}{dt}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Differentiating $P = 4s$ gives $\\frac{dP}{dt} = 4\\frac{ds}{dt} = 4(3) = 12\\text{ cm/s}$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If a particle moves according to $s(t) = t^3 - 6t^2 + 9t$, the particle is at rest at $t = 1$ and $t = 3$.\nReason (R): A particle is at rest when its instantaneous velocity $v(t) = s'(t)$ equals zero.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Velocity is $v(t) = s'(t) = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t - 1)(t - 3)$. Setting $v(t) = 0$ gives $t = 1$ and $t = 3$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The rate of change of the area of a circle with respect to its diameter is equal to half of its circumference.\nReason (R): Area in terms of diameter $D$ is $A = \\frac{\\pi D^2}{4}$, so $\\frac{dA}{dD} = \\frac{\\pi D}{2} = \\frac{1}{2}(\\pi D) = \\frac{1}{2}C$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Area $A = \\frac{\\pi D^2}{4}$. Differentiating with respect to diameter $D$: $\\frac{dA}{dD} = \\frac{\\pi D}{2} = \\frac{1}{2}(\\pi D) = \\frac{1}{2}C$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the radius of a sphere is measured with an error of $1\\%$, the relative error in its calculated volume is approximately $3\\%$.\nReason (R): For $V = \\frac{4}{3}\\pi r^3$, taking logarithms gives $\\ln V = \\ln(4\\pi/3) + 3\\ln r$, so the differential relation is $\\frac{dV}{V} = 3\\frac{dr}{r}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Logarithmic differentiation yields $\\frac{dV}{V} = 3\\frac{dr}{r}$. Thus $\\frac{\\Delta V}{V} \\times 100\\% \\approx 3\\left(\\frac{\\Delta r}{r} \\times 100\\%\\right) = 3(1\\%) = 3\\%$. Both statements are true and Reason explains Assertion.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 1
  },
  {
    questionType: "AR",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the volume of a gas expands isothermally according to Boyle's law $PV = k$ (where $k$ is constant), the rate of change of pressure with respect to volume is directly proportional to pressure and inversely proportional to volume.\nReason (R): Differentiating $PV = k$ with respect to $V$ gives $P + V\\frac{dP}{dV} = 0 \\implies \\frac{dP}{dV} = -\\frac{P}{V}$.",
    options: [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
      "Assertion is true but Reason is false",
      "Assertion is false but Reason is true"
    ],
    correctAnswer: "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
    explanation: "Differentiating implicitly: $P(1) + V\\frac{dP}{dV} = 0 \\implies \\frac{dP}{dV} = -\\frac{P}{V}$. Hence, the rate of change of pressure is directly proportional to $P$ and inversely proportional to $V$. Both statements are true and Reason explains Assertion.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  },

  // 10 Numerical Value Questions
  {
    questionType: "NUMERICAL",
    question: "The radius of a circle is increasing at the rate of $3\\text{ cm/s}$. Find the rate of increase of its area (in $\\text{cm}^2\\text{/s}$) when the radius is $5\\text{ cm}$. If the answer is $K\\pi$, enter the value of $K$.",
    correctAnswer: "30",
    explanation: "Area $A = \\pi r^2$. Differentiating: $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(5)(3) = 30\\pi\\text{ cm}^2\\text{/s}$. Thus $K = 30$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The edge of a variable cube is increasing at the rate of $3\\text{ cm/s}$. How fast is the volume of the cube increasing (in $\\text{cm}^3\\text{/s}$) when the edge is $10\\text{ cm}$ long?",
    correctAnswer: "900",
    explanation: "Volume $V = s^3$. Differentiating: $\\frac{dV}{dt} = 3s^2 \\frac{ds}{dt} = 3(10^2)(3) = 3(100)(3) = 900\\text{ cm}^3\\text{/s}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "A ladder $5\\text{ m}$ long leans against a wall. The bottom of the ladder is pulled away from the wall at the rate of $2\\text{ m/s}$. How fast is the top sliding down the wall (in $\\text{m/s}$) when the bottom is $4\\text{ m}$ from the wall? If the answer is expressed as a fraction, enter the value of $3 \\times \\text{speed}$.",
    correctAnswer: "8",
    explanation: "Let $x$ be distance from wall and $y$ be height on wall. $x^2 + y^2 = 25$. Differentiating: $2x\\dot{x} + 2y\\dot{y} = 0 \\implies \\dot{y} = -\\frac{x}{y}\\dot{x}$. When $x = 4\\text{ m}$, $y = \\sqrt{25 - 16} = 3\\text{ m}$. Given $\\dot{x} = 2\\text{ m/s}$: $\\dot{y} = -\\frac{4}{3}(2) = -\\frac{8}{3}\\text{ m/s}$. The sliding speed is $\\frac{8}{3}\\text{ m/s}$. Therefore $3 \\times \\text{speed} = 3 \\times \\frac{8}{3} = 8$.",
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "A particle moves along the curve $y = x^2 + 2x$. At what value of $x$ do the $x$-coordinate and $y$-coordinate change at the same rate?",
    correctAnswer: "-0.5",
    explanation: "Differentiating with respect to $t$: $\\frac{dy}{dt} = (2x + 2)\\frac{dx}{dt}$. When coordinates change at the same rate, $\\frac{dy}{dt} = \\frac{dx}{dt} \\implies 2x + 2 = 1 \\implies 2x = -1 \\implies x = -0.5$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The total revenue (in rupees) received from the sale of $x$ units of a product is given by $R(x) = 3x^2 + 36x + 5$. Find the marginal revenue (in rupees) when $x = 15$.",
    correctAnswer: "126",
    explanation: "Marginal revenue is the derivative of the total revenue function: $MR(x) = R'(x) = 6x + 36$. At $x = 15$: $MR(15) = 6(15) + 36 = 90 + 36 = 126$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "A spherical balloon has radius $r = x + 2$. Find the rate of change of its volume with respect to $x$ when $x = 1$. If the answer is $K\\pi$, find the value of $K$.",
    correctAnswer: "36",
    explanation: "Volume $V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(x + 2)^3$. Differentiating with respect to $x$: $\\frac{dV}{dx} = 4\\pi(x + 2)^2$. At $x = 1$: $\\frac{dV}{dx} = 4\\pi(1 + 2)^2 = 4\\pi(9) = 36\\pi$. Thus $K = 36$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The displacement $s$ of a particle moving in a straight line is given by $s = 2t^3 - 9t^2 + 12t + 4$. Find the acceleration of the particle (in $\\text{m/s}^2$) when its velocity is zero for the first time ($t > 0$).",
    correctAnswer: "-6",
    explanation: "Velocity $v(t) = s'(t) = 6t^2 - 18t + 12 = 6(t^2 - 3t + 2) = 6(t - 1)(t - 2)$. Velocity is zero for the first time at $t = 1\\text{ s}$. Acceleration is $a(t) = v'(t) = 12t - 18$. At $t = 1$: $a(1) = 12(1) - 18 = -6\\text{ m/s}^2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The volume of a sphere is increasing at a rate of $36\\pi\\text{ cm}^3\\text{/s}$. Find the radius (in $\\text{cm}$) at the instant when the radius is increasing at a rate of $1\\text{ cm/s}$.",
    correctAnswer: "3",
    explanation: "Volume $V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. Given $\\frac{dV}{dt} = 36\\pi$ and $\\frac{dr}{dt} = 1$: $36\\pi = 4\\pi r^2(1) \\implies 4r^2 = 36 \\implies r^2 = 9 \\implies r = 3\\text{ cm}$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "A particle moves along a straight line with position $x(t) = t^4 - 4t^3 + 16$. Find the time $t > 0$ when its acceleration is zero.",
    correctAnswer: "2",
    explanation: "Velocity $v(t) = x'(t) = 4t^3 - 12t^2$. Acceleration $a(t) = x''(t) = 12t^2 - 24t = 12t(t - 2)$. Setting $a(t) = 0$ for $t > 0$ gives $t - 2 = 0 \\implies t = 2$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  },
  {
    questionType: "NUMERICAL",
    question: "The surface area of a balloon is expanding at the rate of $8\\pi\\text{ cm}^2\\text{/s}$. Find the rate of increase of its radius (in $\\text{cm/s}$) when the radius is $2\\text{ cm}$. If the rate is $R\\text{ cm/s}$, find $2R$.",
    correctAnswer: "1",
    explanation: "Surface area $S = 4\\pi r^2 \\implies \\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$. Given $\\frac{dS}{dt} = 8\\pi$ and $r = 2\\text{ cm}$: $8\\pi = 8\\pi(2)\\frac{dr}{dt} \\implies 1 = 2\\frac{dr}{dt} \\implies \\frac{dr}{dt} = \\frac{1}{2} = 0.5\\text{ cm/s}$. Therefore $2R = 2(0.5) = 1$.",
    difficulty: "Easy",
    marks: 4,
    negativeMarks: 0
  }
];
