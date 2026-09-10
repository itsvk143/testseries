// scripts/repaired_genuine_limits.js
// Surgical repairs for the 20 genuine Question Bank questions in Limits, Continuity & Differentiability

const repairedGenuineLimits = {
  '6a98e8f7910bb37b0e558738': {
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$',
    options: ['1', '3', '0', '$\\frac{1}{3}$'],
    correctAnswer: 1,
    explanation: 'This is an indeterminate form of type $\\frac{0}{0}$. Applying L\'Hospital\'s rule or standard limit $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$:\n$$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = \\lim_{x \\to 0} \\frac{3\\cos(3x)}{1} = 3\\cos(0) = 3.$$'
  },
  '6a98e8f7910bb37b0e558739': {
    question: 'Evaluate the limit: $\\lim_{x \\to \\infty} \\frac{5x^2 + 2x}{x^2 - 1}$',
    options: ['0', '5', '2', '1'],
    correctAnswer: 1,
    explanation: 'This limit is of the indeterminate form $\\frac{\\infty}{\\infty}$. Dividing numerator and denominator by $x^2$:\n$$\\lim_{x \\to \\infty} \\frac{5x^2 + 2x}{x^2 - 1} = \\lim_{x \\to \\infty} \\frac{5 + \\frac{2}{x}}{1 - \\frac{1}{x^2}} = \\frac{5 + 0}{1 - 0} = 5.$$'
  },
  '6a98e8f7910bb37b0e55873a': {
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$',
    options: ['1', '2', '0', '$\\ln(2)$'],
    correctAnswer: 1,
    explanation: 'This limit is of the indeterminate form $\\frac{0}{0}$. Applying L\'Hospital\'s rule:\n$$\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x} = \\lim_{x \\to 0} \\frac{2e^{2x}}{1} = 2e^0 = 2.$$'
  },
  '6a98e8f7910bb37b0e55873b': {
    question: 'Evaluate the limit: $\\lim_{x \\to 0^+} x \\ln(x)$',
    options: ['1', '0', '$\\infty$', '-1'],
    correctAnswer: 1,
    explanation: 'Rewrite the expression in the form $\\frac{\\infty}{\\infty}$:\n$$\\lim_{x \\to 0^+} x\\ln(x) = \\lim_{x \\to 0^+} \\frac{\\ln x}{1/x}.$$ Applying L\'Hospital\'s rule:\n$$\\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0.$$'
  },
  '6a98e8f7910bb37b0e55873c': {
    question: 'Evaluate the limit: $\\lim_{x \\to \\frac{\\pi}{2}} \\frac{x - \\frac{\\pi}{2}}{\\cos(x)}$',
    options: ['-1', '1', '0', '$\\pi$'],
    correctAnswer: 0,
    explanation: 'As $x \\to \\frac{\\pi}{2}$, the expression is of indeterminate form $\\frac{0}{0}$. Applying L\'Hospital\'s rule:\n$$\\lim_{x \\to \\frac{\\pi}{2}} \\frac{\\frac{d}{dx}\\left(x - \\frac{\\pi}{2}\\right)}{\\frac{d}{dx}(\\cos x)} = \\lim_{x \\to \\frac{\\pi}{2}} \\frac{1}{-\\sin x} = \\frac{1}{-\\sin\\left(\\frac{\\pi}{2}\\right)} = -1.$$'
  },
  '6a98e8f7910bb37b0e55873d': {
    question: 'Evaluate the limit: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1}$',
    options: ['1', '$\\frac{3}{2}$', '0', '$\\infty$'],
    correctAnswer: 1,
    explanation: 'This limit is of the indeterminate form $\\frac{0}{0}$. Factoring or applying L\'Hospital\'s rule:\n$$\\lim_{x \\to 1} \\frac{3x^2}{2x} = \\frac{3(1)^2}{2(1)} = \\frac{3}{2}.$$'
  },
  '6a98e8f7910bb37b0e55873e': {
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$',
    options: ['1', '$\\frac{1}{2}$', '0', '-1'],
    correctAnswer: 1,
    explanation: 'This limit is of indeterminate form $\\frac{0}{0}$. Applying L\'Hospital\'s rule:\n$$\\lim_{x \\to 0} \\frac{\\sin x}{2x} = \\frac{1}{2} \\lim_{x \\to 0} \\frac{\\sin x}{x} = \\frac{1}{2}.$$'
  },
  '6a98e8f7910bb37b0e55873f': {
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{x - \\sin(x)}{x^3}$',
    options: ['0', '1', '$\\frac{1}{6}$', '$\\frac{1}{3}$'],
    correctAnswer: 2,
    explanation: 'Using the Taylor expansion $\\sin x = x - \\frac{x^3}{6} + O(x^5)$:\n$$\\lim_{x \\to 0} \\frac{x - \\left(x - \\frac{x^3}{6} + \\dots\\right)}{x^3} = \\lim_{x \\to 0} \\frac{\\frac{x^3}{6}}{x^3} = \\frac{1}{6}.$$'
  },
  '6a98e8f7910bb37b0e558740': {
    question: 'Evaluate the limit: $\\lim_{x \\to 1} (1-x) \\tan\\left(\\frac{\\pi x}{2}\\right)$',
    options: ['1', '0', '$\\frac{2}{\\pi}$', '$-\\frac{2}{\\pi}$'],
    correctAnswer: 2,
    explanation: 'Let $x = 1 - t$, then as $x \\to 1$, $t \\to 0$:\n$$\\lim_{t \\to 0} t \\tan\\left(\\frac{\\pi(1-t)}{2}\\right) = \\lim_{t \\to 0} t \\cot\\left(\\frac{\\pi t}{2}\\right) = \\lim_{t \\to 0} \\frac{t}{\\tan\\left(\\frac{\\pi t}{2}\\right)} = \\frac{1}{\\frac{\\pi}{2}} = \\frac{2}{\\pi}.$$'
  },
  '6a98e8f7910bb37b0e558741': {
    question: 'Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\arctan(x)}{x}$',
    options: ['0', '1', '$\\infty$', '$\\pi$'],
    correctAnswer: 1,
    explanation: 'This is an indeterminate form of type $\\frac{0}{0}$. Applying L\'Hospital\'s rule:\n$$\\lim_{x \\to 0} \\frac{\\frac{1}{1+x^2}}{1} = \\frac{1}{1+0} = 1.$$'
  },
  '6a98e8f9910bb37b0e55874c': {
    question: 'The position of a particle moving along a straight line is given by $s(t) = 3t^3 - 5t^2 + 2t + 1$, where $s$ is in meters and $t$ is in seconds. What is the instantaneous velocity of the particle at $t = 2$ seconds?',
    options: ['10 m/s', '18 m/s', '26 m/s', '34 m/s'],
    correctAnswer: 1,
    explanation: 'Velocity is the first derivative of position with respect to time:\n$$v(t) = s\'(t) = 9t^2 - 10t + 2.$$\nEvaluating at $t = 2$:\n$$v(2) = 9(2)^2 - 10(2) + 2 = 36 - 20 + 2 = 18\\text{ m/s}.$$'
  },
  '6a98e8f9910bb37b0e55874d': {
    question: 'The temperature $T$ in degrees Celsius along a metal rod is given by $T(x) = 100 - 5x + 0.1x^2$, where $x$ is the distance from one end in cm. What is the rate of change of temperature with respect to distance at $x = 10$ cm?',
    options: ['-3 $^{\\circ}$C/cm', '-5 $^{\\circ}$C/cm', '2 $^{\\circ}$C/cm', '0 $^{\\circ}$C/cm'],
    correctAnswer: 0,
    explanation: 'The rate of change of temperature with respect to distance is given by $T\'(x)$:\n$$T\'(x) = \\frac{d}{dx}(100 - 5x + 0.1x^2) = -5 + 0.2x.$$\nAt $x = 10\\text{ cm}$:\n$$T\'(10) = -5 + 0.2(10) = -5 + 2 = -3^\\circ\\text{C/cm}.$$'
  },
  '6a98e8f9910bb37b0e55874e': {
    question: 'The volume of a spherical balloon is increasing at a rate of $100\\text{ cm}^3/\\text{s}$. At the instant when the radius is $5\\text{ cm}$, how fast is the radius changing?',
    options: ['$\\frac{10}{\\pi}\\text{ cm/s}$', '$\\frac{5}{\\pi}\\text{ cm/s}$', '$\\frac{2}{\\pi}\\text{ cm/s}$', '$\\frac{1}{\\pi}\\text{ cm/s}$'],
    correctAnswer: 3,
    explanation: 'The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$. Differentiating with respect to $t$:\n$$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}.$$\nGiven $\\frac{dV}{dt} = 100$ and $r = 5$:\n$$100 = 4\\pi(5)^2 \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = \\frac{1}{\\pi}\\text{ cm/s}.$$'
  },
  '6a98e8f9910bb37b0e55874f': {
    question: 'The population of a town is growing according to $P(t) = 5000 + 200t + 5t^2$, where $t$ is the number of years. What is the rate of population growth at $t = 10$ years?',
    options: ['300 people/year', '200 people/year', '250 people/year', '350 people/year'],
    correctAnswer: 0,
    explanation: 'The rate of population growth is given by the derivative $P\'(t)$:\n$$P\'(t) = \\frac{d}{dt}(5000 + 200t + 5t^2) = 200 + 10t.$$\nAt $t = 10$ years:\n$$P\'(10) = 200 + 10(10) = 300\\text{ people/year}.$$'
  },
  '6a98e8f9910bb37b0e558750': {
    question: 'The area of a square is increasing at a rate of $10\\text{ cm}^2/\\text{s}$. How fast is the side length of the square increasing when the side length is $5\\text{ cm}$?',
    options: ['0.5 cm/s', '1 cm/s', '2 cm/s', '5 cm/s'],
    correctAnswer: 1,
    explanation: 'Let $A$ be the area and $s$ be the side length. Then $A = s^2$.\nDifferentiating with respect to $t$:\n$$\\frac{dA}{dt} = 2s \\frac{ds}{dt}.$$\nGiven $\\frac{dA}{dt} = 10$ and $s = 5$:\n$$10 = 2(5) \\frac{ds}{dt} = 10 \\frac{ds}{dt} \\implies \\frac{ds}{dt} = 1\\text{ cm/s}.$$'
  },
  '6a98e8f9910bb37b0e558751': {
    question: 'The number of bacteria in a culture is given by $N(t) = 1000e^{0.1t}$, where $t$ is in hours. At what rate is the number of bacteria growing at $t = 5$ hours? (Take $e^{0.5} \\approx 1.65$)',
    options: ['100 bacteria/hour', '165 bacteria/hour', '1000 bacteria/hour', '1650 bacteria/hour'],
    correctAnswer: 1,
    explanation: 'The growth rate is $N\'(t)$:\n$$N\'(t) = 1000(0.1)e^{0.1t} = 100e^{0.1t}.$$\nAt $t = 5$:\n$$N\'(5) = 100e^{0.5} \\approx 100(1.65) = 165\\text{ bacteria/hour}.$$'
  },
  '6a98e8f9910bb37b0e558752': {
    question: 'The total cost function in dollars for producing $x$ units of a product is $C(x) = 0.01x^2 + 5x + 1000$. What is the marginal cost when $x = 100$ units?',
    options: ['$7', '$15', '$25', '$35'],
    correctAnswer: 0,
    explanation: 'Marginal cost is the derivative of the cost function $C(x)$:\n$$C\'(x) = 0.02x + 5.$$\nEvaluating at $x = 100$:\n$$C\'(100) = 0.02(100) + 5 = 2 + 5 = 7.$$\nThus, the marginal cost is $7.'
  },
  '6a98e8f9910bb37b0e558753': {
    question: 'The height of a projectile launched vertically is given by $h(t) = -16t^2 + 100t + 5$, where $h$ is in feet and $t$ is in seconds. What is the initial velocity of the projectile?',
    options: ['0 ft/s', '50 ft/s', '100 ft/s', '116 ft/s'],
    correctAnswer: 2,
    explanation: 'The velocity is the derivative of the height function:\n$$v(t) = h\'(t) = -32t + 100.$$\nInitial velocity is at $t = 0$:\n$$v(0) = -32(0) + 100 = 100\\text{ ft/s}.$$'
  },
  '6a98e8f9910bb37b0e558754': {
    question: 'The amount of a radioactive substance decays according to $A(t) = A_0 e^{-kt}$. If the half-life is $10$ years, what is the rate of change of $A(t)$ at $t = 0$?',
    options: [
      '$-\\frac{\\ln 2}{10} A_0$',
      '$-\\frac{A_0}{10}$',
      '$-\\frac{k A_0}{10}$',
      '$0$'
    ],
    correctAnswer: 0,
    explanation: 'Since half-life is 10 years, $A(10) = \\frac{A_0}{2} = A_0 e^{-10k} \\implies k = \\frac{\\ln 2}{10}$.\nThe rate of change is $A\'(t) = -k A_0 e^{-kt}$.\nAt $t = 0$:\n$$A\'(0) = -k A_0 = -\\frac{\\ln 2}{10} A_0.$$'
  },
  '6a98e8f9910bb37b0e558755': {
    question: 'The speed of a car is given by $v(t) = 20t + 5$, where $v$ is in m/s and $t$ is in seconds. What is the acceleration of the car at $t = 3$ seconds?',
    options: ['5 $\\text{m/s}^{2}$', '10 $\\text{m/s}^{2}$', '20 $\\text{m/s}^{2}$', '35 $\\text{m/s}^{2}$'],
    correctAnswer: 2,
    explanation: 'Acceleration is the derivative of velocity with respect to time:\n$$a(t) = v\'(t) = \\frac{d}{dt}(20t + 5) = 20\\text{ m/s}^2.$$\nSince the acceleration is constant, at $t = 3\\text{ s}$, $a(3) = 20\\text{ m/s}^2$.'
  }
};

module.exports = { repairedGenuineLimits };
