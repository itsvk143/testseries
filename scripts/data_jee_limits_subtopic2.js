// scripts/data_jee_limits_subtopic2.js
// Subtopic 2: Derivative as a rate of change
// 30 authentic JEE Mains questions: 10 MCQ, 10 ASSERTION_REASON, 10 NUMERICAL

const subtopic2Questions = [
  // --- 10 MCQs ---
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'A ladder $10\\text{ m}$ long leans against a vertical wall. If the bottom of the ladder slides away from the wall at a speed of $2\\text{ m/s}$, how fast is the top of the ladder sliding down the wall when the bottom is $6\\text{ m}$ from the wall?',
    options: ['1.5 m/s', '2.0 m/s', '1.2 m/s', '0.8 m/s'],
    correctAnswer: 0,
    explanation: 'Let $x$ be the distance of the bottom from the wall and $y$ be the height of the top on the wall.\nBy the Pythagorean theorem:\n$$x^2 + y^2 = 10^2 = 100.$$\nWhen $x = 6$, $y = \\sqrt{100 - 36} = 8\\text{ m}$.\nDifferentiating with respect to $t$:\n$$2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0.$$\nSubstituting $x = 6$, $y = 8$, and $\\frac{dx}{dt} = 2$:\n$$6(2) + 8 \\frac{dy}{dt} = 0 \\implies \\frac{dy}{dt} = -\\frac{12}{8} = -1.5\\text{ m/s}.$$\nThus, the top of the ladder is sliding down at $1.5\\text{ m/s}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'A stone is dropped into a quiet lake and circular ripples move outward at a speed of $4\\text{ cm/s}$. At the instant when the radius of the outer ripple is $10\\text{ cm}$, how fast is the enclosed area increasing?',
    options: [
      '$80\\pi\\text{ cm}^2/\\text{s}$',
      '$40\\pi\\text{ cm}^2/\\text{s}$',
      '$160\\pi\\text{ cm}^2/\\text{s}$',
      '$20\\pi\\text{ cm}^2/\\text{s}$'
    ],
    correctAnswer: 0,
    explanation: 'The area of a circle is $A = \\pi r^2$.\nDifferentiating with respect to $t$:\n$$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}.$$\nGiven $r = 10\\text{ cm}$ and $\\frac{dr}{dt} = 4\\text{ cm/s}$:\n$$\\frac{dA}{dt} = 2\\pi (10)(4) = 80\\pi\\text{ cm}^2/\\text{s}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Water is poured into an inverted right circular cone of base radius $5\\text{ m}$ and height $10\\text{ m}$ at a constant rate of $2\\text{ m}^3/\\text{min}$. At what rate is the water level rising when the depth of water is $4\\text{ m}$?',
    options: [
      '$\\frac{1}{2\\pi}\\text{ m/min}$',
      '$\\frac{1}{4\\pi}\\text{ m/min}$',
      '$\\frac{1}{\\pi}\\text{ m/min}$',
      '$\\frac{2}{\\pi}\\text{ m/min}$'
    ],
    correctAnswer: 0,
    explanation: 'Let $r$ and $h$ be the radius of the water surface and the depth of water at time $t$.\nBy similar triangles, $\\frac{r}{h} = \\frac{5}{10} = \\frac{1}{2} \\implies r = \\frac{h}{2}$.\nThe volume of water is:\n$$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{h}{2}\\right)^2 h = \\frac{\\pi}{12} h^3.$$\nDifferentiating with respect to $t$:\n$$\\frac{dV}{dt} = \\frac{\\pi}{4} h^2 \\frac{dh}{dt}.$$\nSubstituting $\\frac{dV}{dt} = 2$ and $h = 4$:\n$$2 = \\frac{\\pi}{4}(16) \\frac{dh}{dt} = 4\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = \\frac{2}{4\\pi} = \\frac{1}{2\\pi}\\text{ m/min}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'A man $2\\text{ m}$ tall walks away from a street lamp $6\\text{ m}$ high at a speed of $5\\text{ km/h}$. At what rate is the length of his shadow increasing?',
    options: ['2.5 km/h', '3.0 km/h', '1.5 km/h', '5.0 km/h'],
    correctAnswer: 0,
    explanation: 'Let $x$ be the distance from the lamp post to the man, and $s$ be the length of his shadow.\nBy similar triangles:\n$$\\frac{6}{x + s} = \\frac{2}{s} \\implies 6s = 2x + 2s \\implies 4s = 2x \\implies s = \\frac{x}{2}.$$\nDifferentiating with respect to time:\n$$\\frac{ds}{dt} = \\frac{1}{2}\\frac{dx}{dt}.$$\nSince $\\frac{dx}{dt} = 5\\text{ km/h}$, $\\frac{ds}{dt} = \\frac{5}{2} = 2.5\\text{ km/h}$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'The total revenue received from the sale of $x$ units of a product is given by $R(x) = 3x^2 + 36x + 5$. What is the marginal revenue when $x = 15$?',
    options: ['126', '116', '136', '96'],
    correctAnswer: 0,
    explanation: 'Marginal revenue is the first derivative of the revenue function $R(x)$:\n$$MR = R\'(x) = 6x + 36.$$\nAt $x = 15$:\n$$MR = 6(15) + 36 = 90 + 36 = 126.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The radius of an air bubble is increasing at the rate of $0.5\\text{ cm/s}$. At what rate is the surface area of the bubble increasing when the radius is $2\\text{ cm}$?',
    options: [
      '$8\\pi\\text{ cm}^2/\\text{s}$',
      '$4\\pi\\text{ cm}^2/\\text{s}$',
      '$16\\pi\\text{ cm}^2/\\text{s}$',
      '$2\\pi\\text{ cm}^2/\\text{s}$'
    ],
    correctAnswer: 0,
    explanation: 'Surface area of a sphere is $S = 4\\pi r^2$.\nDifferentiating with respect to $t$:\n$$\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}.$$\nSubstituting $r = 2\\text{ cm}$ and $\\frac{dr}{dt} = 0.5\\text{ cm/s}$:\n$$\\frac{dS}{dt} = 8\\pi(2)(0.5) = 8\\pi\\text{ cm}^2/\\text{s}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'If the radius of a cylinder is increasing at $2\\text{ cm/s}$ and its height is decreasing at $3\\text{ cm/s}$, at what rate is the volume changing when the radius is $3\\text{ cm}$ and the height is $5\\text{ cm}$?',
    options: [
      '$33\\pi\\text{ cm}^3/\\text{s}$',
      '$27\\pi\\text{ cm}^3/\\text{s}$',
      '$60\\pi\\text{ cm}^3/\\text{s}$',
      '$-27\\pi\\text{ cm}^3/\\text{s}$'
    ],
    correctAnswer: 0,
    explanation: 'The volume of a cylinder is $V = \\pi r^2 h$.\nDifferentiating with respect to $t$ by the product rule:\n$$\\frac{dV}{dt} = \\pi \\left[2rh \\frac{dr}{dt} + r^2 \\frac{dh}{dt}\\right].$$\nGiven $r = 3$, $h = 5$, $\\frac{dr}{dt} = 2$, and $\\frac{dh}{dt} = -3$:\n$$\\frac{dV}{dt} = \\pi [2(3)(5)(2) + (3)^2(-3)] = \\pi [60 - 27] = 33\\pi\\text{ cm}^3/\\text{s}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'A point moves along the parabola $y = x^2$. At what point on the parabola are the $x$-coordinate and $y$-coordinate changing at the exact same rate (assuming $\\frac{dx}{dt} \\neq 0$)?',
    options: [
      '$(1/2, 1/4)$',
      '$(1, 1)$',
      '$(2, 4)$',
      '$(1/4, 1/16)$'
    ],
    correctAnswer: 0,
    explanation: 'Differentiating $y = x^2$ with respect to time $t$:\n$$\\frac{dy}{dt} = 2x \\frac{dx}{dt}.$$\nFor $\\frac{dy}{dt} = \\frac{dx}{dt} \\neq 0$, we have:\n$$1 = 2x \\implies x = \\frac{1}{2}.$$\nThen $y = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\nThus, the required point is $(1/2, 1/4)$.'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'The side of an equilateral triangle is increasing at the rate of $2\\text{ cm/s}$. At what rate is its area increasing when the side length is $10\\text{ cm}$?',
    options: [
      '$10\\sqrt{3}\\text{ cm}^2/\\text{s}$',
      '$20\\sqrt{3}\\text{ cm}^2/\\text{s}$',
      '$5\\sqrt{3}\\text{ cm}^2/\\text{s}$',
      '$15\\sqrt{3}\\text{ cm}^2/\\text{s}$'
    ],
    correctAnswer: 0,
    explanation: 'The area of an equilateral triangle with side $s$ is $A = \\frac{\\sqrt{3}}{4}s^2$.\nDifferentiating with respect to $t$:\n$$\\frac{dA}{dt} = \\frac{\\sqrt{3}}{4} \\cdot 2s \\frac{ds}{dt} = \\frac{\\sqrt{3}}{2} s \\frac{ds}{dt}.$$\nSubstituting $s = 10\\text{ cm}$ and $\\frac{ds}{dt} = 2\\text{ cm/s}$:\n$$\\frac{dA}{dt} = \\frac{\\sqrt{3}}{2}(10)(2) = 10\\sqrt{3}\\text{ cm}^2/\\text{s}.$$'
  },
  {
    type: 'MCQ',
    questionType: 'MCQ (Multiple Choice Question)',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Boyle\'s law states that $PV = C$ (constant). At a certain instant, the volume is $600\\text{ cm}^3$, the pressure is $150\\text{ kPa}$, and the pressure is increasing at $20\\text{ kPa/min}$. At what rate is the volume decreasing at this instant?',
    options: [
      '$80\\text{ cm}^3/\\text{min}$',
      '$50\\text{ cm}^3/\\text{min}$',
      '$100\\text{ cm}^3/\\text{min}$',
      '$40\\text{ cm}^3/\\text{min}$'
    ],
    correctAnswer: 0,
    explanation: 'Differentiating $PV = C$ with respect to time $t$:\n$$P \\frac{dV}{dt} + V \\frac{dP}{dt} = 0 \\implies \\frac{dV}{dt} = -\\frac{V}{P}\\frac{dP}{dt}.$$\nGiven $V = 600$, $P = 150$, and $\\frac{dP}{dt} = 20$:\n$$\\frac{dV}{dt} = -\\frac{600}{150}(20) = -4(20) = -80\\text{ cm}^3/\\text{min}.$$\nThus, the volume is decreasing at the rate of $80\\text{ cm}^3/\\text{min}$.'
  },

  // --- 10 ASSERTION-REASON ---
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the radius of a circle increases at a constant rate, the rate of increase of its area is directly proportional to its radius.\nReason (R): The rate of change of area is given by $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$, and $\\frac{dr}{dt}$ is a constant.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since $A = \\pi r^2$, differentiating gives $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$. If $\\frac{dr}{dt} = k$ (constant), then $\\frac{dA}{dt} = (2\\pi k)r$, which is directly proportional to $r$. Both statements are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The derivative $\\frac{dy}{dx}$ evaluated at $x = x_0$ represents the instantaneous rate of change of $y$ with respect to $x$ at $x_0$.\nReason (R): The instantaneous rate of change is defined as the limit of average rates of change: $\\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'By the very definition of the derivative, $\\frac{dy}{dx} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$, which provides the exact mathematical meaning of instantaneous rate of change. Both statements are true and (R) provides the definition for (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A particle moving along a straight line with position $s(t) = t^3 - 6t^2 + 9t$ is momentarily at rest at $t = 1$ and $t = 3$.\nReason (R): A particle is at rest when its instantaneous velocity $v(t) = s\'(t) = 0$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Instantaneous velocity is $v(t) = s\'(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$. Setting $v(t) = 0$ yields $t = 1$ and $t = 3$. Hence (A) is true, (R) is true, and (R) is the correct explanation.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the volume of a cube is increasing at $9\\text{ cm}^3/\\text{s}$, then at the instant when its edge is $3\\text{ cm}$, its total surface area is increasing at $12\\text{ cm}^2/\\text{s}$.\nReason (R): For a cube of edge $x$, $\\frac{dV}{dt} = 3x^2 \\frac{dx}{dt}$ and $\\frac{dS}{dt} = 12x \\frac{dx}{dt}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'From $V = x^3$, $\\frac{dV}{dt} = 3x^2 \\frac{dx}{dt} \\implies 9 = 3(9)\\frac{dx}{dt} \\implies \\frac{dx}{dt} = \\frac{1}{3}\\text{ cm/s}$.\nFrom $S = 6x^2$, $\\frac{dS}{dt} = 12x \\frac{dx}{dt} = 12(3)\\left(\\frac{1}{3}\\right) = 12\\text{ cm}^2/\\text{s}$.\nBoth (A) and (R) are true, and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the position of a particle is given by $s(t) = 5t - 2t^2$, the particle is slowing down for $t > 1.25$.\nReason (R): A particle is slowing down (speed is decreasing) if and only if its velocity and acceleration have opposite signs.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 3,
    explanation: 'Velocity is $v(t) = 5 - 4t$ and acceleration is $a(t) = -4$.\nFor $t > 1.25$, $v(t) < 0$ and $a(t) = -4 < 0$. Since velocity and acceleration have the SAME sign, the speed $|v(t)|$ is increasing, meaning the particle is speeding up, not slowing down! Hence (A) is false. Reason (R) correctly defines slowing down (opposite signs of velocity and acceleration). Thus (A) is false but (R) is true.'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Marginal cost is the instantaneous rate of change of total cost with respect to output.\nReason (R): By definition, marginal cost is $MC = \\frac{dC}{dx}$ where $C(x)$ is the total cost of producing $x$ units.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'In economics and calculus, marginal cost is defined precisely as the derivative of the total cost function with respect to units produced. Both (A) and (R) are true, and (R) defines (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For a vertically projected particle whose height is $h(t) = ut - \\frac{1}{2}gt^2$, maximum height is attained when $\\frac{dh}{dt} = 0$.\nReason (R): At the highest point of vertical trajectory, the instantaneous vertical velocity is zero.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'The vertical velocity is $v(t) = \\frac{dh}{dt} = u - gt$. At the peak, the body momentarily stops climbing before descending, so $v(t) = 0$. Both (A) and (R) are true and (R) explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If the side of a square increases at $3\\text{ cm/s}$, its perimeter increases at $12\\text{ cm/s}$.\nReason (R): The perimeter of a square is $P = 4s$, so $\\frac{dP}{dt} = 4\\frac{ds}{dt}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Since $P = 4s$, differentiating with respect to $t$ gives $\\frac{dP}{dt} = 4\\frac{ds}{dt} = 4(3) = 12\\text{ cm/s}$. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The rate of change of the volume of a sphere with respect to its surface area at radius $r = 2$ is equal to $1$.\nReason (R): For a sphere, $\\frac{dV}{dS} = \\frac{dV/dr}{dS/dr} = \\frac{4\\pi r^2}{8\\pi r} = \\frac{r}{2}$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 0,
    explanation: 'Using the chain rule, $\\frac{dV}{dS} = \\frac{dV/dr}{dS/dr} = \\frac{4\\pi r^2}{8\\pi r} = \\frac{r}{2}$. At $r = 2$, $\\frac{dV}{dS} = \\frac{2}{2} = 1$. Both (A) and (R) are true and (R) correctly explains (A).'
  },
  {
    type: 'ASSERTION_REASON',
    questionType: 'Assertion–Reasoning',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 1,
    question: 'Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $y = x^3$, the rate of increase of $y$ with respect to time $t$ is constant whenever $x$ increases at a constant rate.\nReason (R): By the chain rule, $\\frac{dy}{dt} = 3x^2 \\frac{dx}{dt}$, which depends explicitly on $x$.',
    options: [
      'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
      'Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).',
      'Assertion (A) is true but Reason (R) is false.',
      'Assertion (A) is false but Reason (R) is true.'
    ],
    correctAnswer: 3,
    explanation: 'Since $\\frac{dy}{dt} = 3x^2 \\frac{dx}{dt}$, even if $\\frac{dx}{dt}$ is constant, $\\frac{dy}{dt}$ varies quadratically with $x$, so it cannot be constant. Hence (A) is false and (R) is true.'
  },

  // --- 10 NUMERICAL QUESTIONS ---
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'A ladder $13\\text{ m}$ long leans against a vertical wall. If the bottom of the ladder is pulled away from the wall at $12\\text{ m/s}$, find the magnitude of the velocity (in m/s) with which the top of the ladder is sliding down when the bottom is $5\\text{ m}$ from the wall.',
    options: [],
    correctAnswer: 5,
    explanation: 'From $x^2 + y^2 = 13^2 = 169$, when $x = 5$, $y = \\sqrt{169 - 25} = 12\\text{ m}$.\nDifferentiating with respect to time:\n$$2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0.$$\nSubstituting $x = 5$, $y = 12$, and $\\frac{dx}{dt} = 12$:\n$$5(12) + 12 \\frac{dy}{dt} = 0 \\implies \\frac{dy}{dt} = -5\\text{ m/s}.$$\nThe magnitude of the velocity is $5\\text{ m/s}$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The volume of a cube is increasing at a rate of $24\\text{ cm}^3/\\text{s}$. Find the rate of increase of its total surface area (in $\\text{cm}^2/\\text{s}$) when the length of an edge is $4\\text{ cm}$.',
    options: [],
    correctAnswer: 24,
    explanation: 'Volume $V = x^3 \\implies \\frac{dV}{dt} = 3x^2 \\frac{dx}{dt}$.\nGiven $\\frac{dV}{dt} = 24$ and $x = 4$:\n$$24 = 3(16) \\frac{dx}{dt} = 48 \\frac{dx}{dt} \\implies \\frac{dx}{dt} = 0.5\\text{ cm/s}.$$\nSurface area $S = 6x^2 \\implies \\frac{dS}{dt} = 12x \\frac{dx}{dt}$.\n$$\\frac{dS}{dt} = 12(4)(0.5) = 24\\text{ cm}^2/\\text{s}.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The radius of a circle is increasing uniformly at the rate of $3\\text{ cm/s}$. At what rate (in $\\text{cm}^2/\\text{s}$) is the area increasing at the instant when the radius is $\\frac{10}{\\pi}\\text{ cm}$?',
    options: [],
    correctAnswer: 60,
    explanation: 'Area $A = \\pi r^2 \\implies \\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$.\nSubstituting $r = \\frac{10}{\\pi}$ and $\\frac{dr}{dt} = 3$:\n$$\\frac{dA}{dt} = 2\\pi \\left(\\frac{10}{\\pi}\\right)(3) = 60\\text{ cm}^2/\\text{s}.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'A particle moves along the curve $6y = x^3 + 2$. Find the positive value of the $x$-coordinate at the point where the $y$-coordinate changes $8$ times as fast as the $x$-coordinate.',
    options: [],
    correctAnswer: 4,
    explanation: 'Differentiating $6y = x^3 + 2$ with respect to time $t$:\n$$6 \\frac{dy}{dt} = 3x^2 \\frac{dx}{dt}.$$\nGiven that $\\frac{dy}{dt} = 8\\frac{dx}{dt}$ with $\\frac{dx}{dt} \\neq 0$:\n$$6(8) = 3x^2 \\implies 48 = 3x^2 \\implies x^2 = 16.$$\nSince we seek the positive $x$-coordinate, $x = 4$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Hard',
    marks: 4,
    negativeMarks: 0,
    question: 'Sand is pouring from a pipe at the rate of $12\\text{ cm}^3/\\text{s}$. The falling sand forms a conical pile on the ground such that the height of the cone is always one-sixth of the radius of the base ($h = r/6$). If the rate at which the height is increasing when $h = 4\\text{ cm}$ is written as $\\frac{1}{k\\pi}\\text{ cm/s}$, find the value of $k$.',
    options: [],
    correctAnswer: 48,
    explanation: 'Given $h = \\frac{r}{6} \\implies r = 6h$.\nVolume of the cone $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (36h^2) h = 12\\pi h^3$.\nDifferentiating with respect to time:\n$$\\frac{dV}{dt} = 36\\pi h^2 \\frac{dh}{dt}.$$\nGiven $\\frac{dV}{dt} = 12$ and $h = 4$:\n$$12 = 36\\pi (16) \\frac{dh}{dt} = 576\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = \\frac{12}{576\\pi} = \\frac{1}{48\\pi}\\text{ cm/s}.$$\nComparing with $\\frac{1}{k\\pi}$, we get $k = 48$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The total cost function in rupees for producing $x$ units of an item is given by $C(x) = 0.005x^3 - 0.05x^2 + 30x + 5000$. Find the marginal cost (in rupees) when $x = 20$.',
    options: [],
    correctAnswer: 34,
    explanation: 'Marginal cost is the derivative $C\'(x)$:\n$$C\'(x) = 3(0.005)x^2 - 2(0.05)x + 30 = 0.015x^2 - 0.10x + 30.$$\nAt $x = 20$:\n$$C\'(20) = 0.015(400) - 0.10(20) + 30 = 6 - 2 + 30 = 34.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The side of an equilateral triangle is increasing at the rate of $\\sqrt{3}\\text{ cm/s}$. Find the rate of increase of its area (in $\\text{cm}^2/\\text{s}$) at the instant when the side length is $8\\text{ cm}$.',
    options: [],
    correctAnswer: 12,
    explanation: 'The area of an equilateral triangle is $A = \\frac{\\sqrt{3}}{4}s^2$.\nDifferentiating with respect to $t$:\n$$\\frac{dA}{dt} = \\frac{\\sqrt{3}}{2} s \\frac{ds}{dt}.$$\nSubstituting $s = 8$ and $\\frac{ds}{dt} = \\sqrt{3}$:\n$$\\frac{dA}{dt} = \\frac{\\sqrt{3}}{2}(8)(\\sqrt{3}) = 4(3) = 12\\text{ cm}^2/\\text{s}.$$'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'The displacement of a particle is given by $s(t) = 2t^3 - 9t^2 + 12t - 5$ meters. Find the magnitude of acceleration (in $\\text{m/s}^2$) of the particle at the instant when its velocity is zero for the first time ($t > 0$).',
    options: [],
    correctAnswer: 6,
    explanation: 'Velocity is $v(t) = s\'(t) = 6t^2 - 18t + 12 = 6(t-1)(t-2)$.\nThe velocity becomes zero at $t = 1$ and $t = 2$.\nThe first time is $t = 1\\text{ s}$.\nAcceleration is $a(t) = s\'\'(t) = 12t - 18$.\nAt $t = 1$, $a(1) = 12(1) - 18 = -6\\text{ m/s}^2$.\nThe magnitude is $|-6| = 6\\text{ m/s}^2$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Medium',
    marks: 4,
    negativeMarks: 0,
    question: 'A spherical iron ball melts so that its volume decreases at a constant rate of $36\\pi\\text{ cm}^3/\\text{min}$. Find the rate of decrease of its radius (in cm/min) when its radius is $3\\text{ cm}$.',
    options: [],
    correctAnswer: 1,
    explanation: 'Volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.\nDifferentiating with respect to $t$:\n$$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}.$$\nGiven $\\frac{dV}{dt} = -36\\pi$ and $r = 3$:\n$$-36\\pi = 4\\pi (3)^2 \\frac{dr}{dt} = 36\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = -1\\text{ cm/min}.$$\nThus, the radius decreases at the rate of $1\\text{ cm/min}$.'
  },
  {
    type: 'NUMERICAL',
    questionType: 'Numerical',
    difficulty: 'Easy',
    marks: 4,
    negativeMarks: 0,
    question: 'The edge of a variable cube is increasing at the rate of $5\\text{ cm/s}$. How fast (in $\\text{cm}^3/\\text{s}$) is the volume of the cube increasing when the edge is $6\\text{ cm}$ long?',
    options: [],
    correctAnswer: 540,
    explanation: 'Volume $V = x^3$.\nDifferentiating with respect to $t$:\n$$\\frac{dV}{dt} = 3x^2 \\frac{dx}{dt}.$$\nGiven $x = 6\\text{ cm}$ and $\\frac{dx}{dt} = 5\\text{ cm/s}$:\n$$\\frac{dV}{dt} = 3(6)^2(5) = 3(36)(5) = 540\\text{ cm}^3/\\text{s}.$$'
  }
];

module.exports = { subtopic2Questions };
