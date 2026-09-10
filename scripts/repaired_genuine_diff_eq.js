// scripts/repaired_genuine_diff_eq.js
// Surgically repaired 40 genuine questions for Differential Equations (Mathematics, Class 12)

const repairedGenuineDiffEq = {
  // [1] Order and degree
  '6a98e951910bb37b0e5587bd': {
    question: 'What is the order of the differential equation $\\frac{d^3y}{dx^3} + 3\\frac{d^2y}{dx^2} - 5\\frac{dy}{dx} + y = e^x$?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 2,
    explanation: 'The order of a differential equation is the order of the highest derivative present. Here, the highest order derivative is $\\frac{d^3y}{dx^3}$, which is of order $3$.'
  },

  // [2] Order and degree
  '6a98e951910bb37b0e5587be': {
    question: 'Determine the degree of the differential equation $\\left(\\frac{dy}{dx}\\right)^2 + \\frac{dy}{dx} - y = 0$.',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 1,
    explanation: 'The highest order derivative in the equation is $\\frac{dy}{dx}$ (order $1$). The highest power of $\\frac{dy}{dx}$ in the polynomial equation is $2$. Hence, the degree is $2$.'
  },

  // [3] Order and degree
  '6a98e951910bb37b0e5587bf': {
    question: 'What is the order of the differential equation $\\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2} = \\frac{d^2y}{dx^2}$?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 1,
    explanation: 'The highest derivative present is $\\frac{d^2y}{dx^2}$, so the order is $2$.'
  },

  // [4] Order and degree
  '6a98e951910bb37b0e5587c0': {
    question: 'What is the degree of the differential equation $\\frac{d^2y}{dx^2} + \\sin\\left(\\frac{dy}{dx}\\right) = 0$?',
    options: ['$1$', '$2$', '$3$', 'Undefined'],
    correctAnswer: 3,
    explanation: 'Because $\\frac{dy}{dx}$ is the argument of a sine function, the equation cannot be written as a polynomial in its derivatives. Therefore, its degree is undefined.'
  },

  // [5] Order and degree
  '6a98e951910bb37b0e5587c1': {
    question: 'Find the order and degree of the differential equation $y\'\' + (y\')^2 = xy$.',
    options: [
      'Order $1$, Degree $1$',
      'Order $2$, Degree $1$',
      'Order $2$, Degree $2$',
      'Order $1$, Degree $2$'
    ],
    correctAnswer: 1,
    explanation: 'The highest order derivative is $y\'\' = \\frac{d^2y}{dx^2}$, so the order is $2$. The power of this highest derivative is $1$, so the degree is $1$.'
  },

  // [6] Order and degree
  '6a98e951910bb37b0e5587c2': {
    question: 'What is the degree of the differential equation $\\frac{d^3y}{dx^3} + 2\\left(\\frac{d^2y}{dx^2}\\right)^2 - \\frac{dy}{dx} = 5$?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 0,
    explanation: 'The highest order derivative is $\\frac{d^3y}{dx^3}$. Its power in the polynomial equation is $1$. Therefore, the degree is $1$.'
  },

  // [7] Order and degree
  '6a98e951910bb37b0e5587c3': {
    question: 'Consider the differential equation $\\frac{d^2y}{dx^2} + \\left(\\frac{dy}{dx}\\right)^3 = x^2 \\frac{dy}{dx}$. What is its order and degree?',
    options: [
      'Order $2$, Degree $1$',
      'Order $1$, Degree $3$',
      'Order $2$, Degree $3$',
      'Order $2$, Degree $2$'
    ],
    correctAnswer: 0,
    explanation: 'The highest order derivative is $\\frac{d^2y}{dx^2}$ (order $2$). The exponent of $\\frac{d^2y}{dx^2}$ is $1$, so the degree is $1$.'
  },

  // [8] Order and degree
  '6a98e951910bb37b0e5587c4': {
    question: 'What is the order of the differential equation $\\frac{d^4y}{dx^4} - 5\\frac{d^2y}{dx^2} + y = 0$?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 3,
    explanation: 'The highest order derivative present is $\\frac{d^4y}{dx^4}$, which is the fourth derivative. Hence, the order is $4$.'
  },

  // [9] Order and degree
  '6a98e951910bb37b0e5587c5': {
    question: 'Find the degree of the differential equation $y = x\\frac{dy}{dx} + \\sqrt{a^2 \\left(1+\\left(\\frac{dy}{dx}\\right)^2\\right)}$.',
    options: ['$1$', '$2$', '$3$', 'Undefined'],
    correctAnswer: 1,
    explanation: 'Isolating the square root gives $\\left(y - x\\frac{dy}{dx}\\right)^2 = a^2 \\left(1 + \\left(\\frac{dy}{dx}\\right)^2\\right)$. This is a polynomial in $\\frac{dy}{dx}$ with highest power $2$. Hence, the degree is $2$.'
  },

  // [10] Order and degree
  '6a98e951910bb37b0e5587c6': {
    question: 'What is the order and degree of the differential equation $\\frac{d^2y}{dx^2} + \\left(\\frac{dy}{dx}\\right)^2 = x \\ln x$?',
    options: [
      'Order $2$, Degree $1$',
      'Order $1$, Degree $2$',
      'Order $2$, Degree $2$',
      'Order $1$, Degree $1$'
    ],
    correctAnswer: 0,
    explanation: 'The highest derivative is $\\frac{d^2y}{dx^2}$ (order $2$). The power of $\\frac{d^2y}{dx^2}$ is $1$, so the degree is $1$.'
  },

  // [11] Separation of variables
  '6a98e952910bb37b0e5587c7': {
    question: 'Solve the differential equation: $\\frac{dy}{dx} = \\frac{x^2}{y}$.',
    options: [
      '$3y^2 = 2x^3 + C$',
      '$2y^2 = 3x^3 + C$',
      '$y^2 = x^3 + C$',
      '$y^3 = x^2 + C$'
    ],
    correctAnswer: 0,
    explanation: 'Separating variables gives $y dy = x^2 dx$. Integrating both sides yields $\\frac{y^2}{2} = \\frac{x^3}{3} + C_1 \\implies 3y^2 = 2x^3 + C$.'
  },

  // [12] Separation of variables
  '6a98e952910bb37b0e5587c8': {
    question: 'Find the general solution of the differential equation $\\frac{dr}{dt} = \\frac{2t}{r}$.',
    options: [
      '$r^2 = 2t^2 + C$',
      '$r^2 = t^2 + C$',
      '$r = 2t^2 + C$',
      '$r^2 = 4t^2 + C$'
    ],
    correctAnswer: 0,
    explanation: 'Separating variables gives $r dr = 2t dt$. Integrating both sides gives $\\frac{r^2}{2} = t^2 + C_1 \\implies r^2 = 2t^2 + C$.'
  },

  // [13] Separation of variables
  '6a98e952910bb37b0e5587c9': {
    question: 'Given the differential equation $\\frac{dP}{dt} = kP$, where $k$ is a constant, find the general solution.',
    options: [
      '$P = e^{kt} + C$',
      '$P = Ce^{kt}$',
      '$P = kt + C$',
      '$P = \\frac{1}{2}kt^2 + C$'
    ],
    correctAnswer: 1,
    explanation: 'Separating variables: $\\frac{dP}{P} = k dt$. Integrating gives $\\ln|P| = kt + C_1 \\implies P = C e^{kt}$.'
  },

  // [14] Separation of variables
  '6a98e952910bb37b0e5587ca': {
    question: 'Solve the initial value problem: $\\frac{dy}{dx} = \\frac{y}{x}$ with $y(1) = 2$.',
    options: [
      '$y = 2x$',
      '$y = x^2$',
      '$y = \\frac{2}{x}$',
      '$y = x + 1$'
    ],
    correctAnswer: 0,
    explanation: 'Separating variables: $\\frac{dy}{y} = \\frac{dx}{x} \\implies \\ln|y| = \\ln|x| + \\ln|C| \\implies y = Cx$. Using $y(1) = 2$, we find $C = 2$, so $y = 2x$.'
  },

  // [15] Separation of variables
  '6a98e952910bb37b0e5587cb': {
    question: 'Find the solution to $\\frac{dx}{dt} = -\\frac{x}{t}$ with $x(2) = 4$.',
    options: [
      '$x = \\frac{8}{t}$',
      '$x = \\frac{t}{2}$',
      '$x = \\frac{t^2}{2}$',
      '$x = \\frac{t^2}{4}$'
    ],
    correctAnswer: 0,
    explanation: 'Separating variables: $\\frac{dx}{x} = -\\frac{dt}{t} \\implies \\ln|x| = -\\ln|t| + \\ln|C| \\implies xt = C$. With $x(2) = 4$, $C = 4 \\times 2 = 8$, so $x = \\frac{8}{t}$.'
  },

  // [16] Separation of variables
  '6a98e952910bb37b0e5587cc': {
    question: 'What is the general solution of $\\frac{dy}{dx} = e^{x+y}$?',
    options: [
      '$e^{-y} = e^x + C$',
      '$e^y = e^x + C$',
      '$e^{-y} = -e^x + C$',
      '$e^y = -e^x + C$'
    ],
    correctAnswer: 2,
    explanation: 'Rewrite as $\\frac{dy}{dx} = e^x e^y$. Separating variables gives $e^{-y} dy = e^x dx$. Integrating gives $-e^{-y} = e^x + C_1 \\implies e^{-y} = -e^x + C$.'
  },

  // [17] Separation of variables
  '6a98e952910bb37b0e5587cd': {
    question: 'Solve the differential equation $\\frac{dN}{dt} = \\frac{N(10-N)}{100}$.',
    options: [
      '$N = \\frac{10e^{t/10}}{C - e^{t/10}}$',
      '$N = \\frac{10}{1 + Ce^{-t/10}}$',
      '$N = \\frac{10}{C + e^{t/10}}$',
      '$N = \\frac{10e^{t/10}}{1 + Ce^{t/10}}$'
    ],
    correctAnswer: 1,
    explanation: 'Separating variables gives $\\frac{dN}{N(10-N)} = \\frac{dt}{100} \\implies \\frac{1}{10}\\left(\\frac{1}{N} + \\frac{1}{10-N}\\right) dN = \\frac{dt}{100}$. Integrating gives $\\ln\\left|\\frac{N}{10-N}\\right| = \\frac{t}{10} + C_1 \\implies \\frac{10-N}{N} = C e^{-t/10} \\implies \\frac{10}{N} = 1 + C e^{-t/10} \\implies N = \\frac{10}{1 + C e^{-t/10}}$.'
  },

  // [18] Separation of variables
  '6a98e952910bb37b0e5587ce': {
    question: 'Find the particular solution of $\\frac{dy}{dx} = xy$ given $y(0) = 1$.',
    options: [
      '$y = e^{x^2/2}$',
      '$y = e^{x^2}$',
      '$y = \\frac{1}{2}x^2 + 1$',
      '$y = e^{x/2}$'
    ],
    correctAnswer: 0,
    explanation: 'Separating variables gives $\\frac{dy}{y} = x dx \\implies \\ln|y| = \\frac{x^2}{2} + C$. Since $y(0) = 1$, $C = 0$, so $y = e^{x^2/2}$.'
  },

  // [19] Separation of variables
  '6a98e952910bb37b0e5587cf': {
    question: 'Solve the differential equation $\\frac{dy}{dx} = \\frac{x^2+1}{y}$.',
    options: [
      '$3y^2 = 2x^3 + 6x + C$',
      '$y^2 = \\frac{x^3}{3} + x + C$',
      '$3y^2 = x^3 + 3x + C$',
      '$2y^2 = 3x^3 + 6x + C$'
    ],
    correctAnswer: 0,
    explanation: 'Separating variables: $y dy = (x^2 + 1) dx$. Integrating both sides: $\\frac{y^2}{2} = \\frac{x^3}{3} + x + C_1 \\implies 3y^2 = 2x^3 + 6x + C$.'
  },

  // [20] Separation of variables
  '6a98e952910bb37b0e5587d0': {
    question: 'What is the general solution to $\\frac{dy}{dx} = \\frac{y^2+1}{x}$?',
    options: [
      '$\\tan^{-1}(y) = \\ln|x| + C$',
      '$y = \\ln|x| + C$',
      '$\\tan^{-1}(y) = \\frac{x^2}{2} + C$',
      '$y = \\frac{x^2}{2} + C$'
    ],
    correctAnswer: 0,
    explanation: 'Separating variables: $\\frac{dy}{y^2 + 1} = \\frac{dx}{x}$. Integrating both sides gives $\\tan^{-1}(y) = \\ln|x| + C$.'
  },

  // [21] Linear differential equations
  '6a98e95a910bb37b0e5587d1': {
    question: 'Solve the first-order linear differential equation: $\\frac{dy}{dx} + 2xy = x$.',
    options: [
      '$y = \\frac{1}{2} + Ce^{-x^2}$',
      '$y = Ce^{x^2} + \\frac{1}{2}$',
      '$y = \\frac{1}{2} + Ce^{x^2}$',
      '$y = Ce^{-x^2} - \\frac{1}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'Integrating factor is $\\text{IF} = e^{\\int 2x dx} = e^{x^2}$. Multiplying gives $\\frac{d}{dx}(y e^{x^2}) = x e^{x^2}$. Integrating: $y e^{x^2} = \\frac{1}{2}e^{x^2} + C \\implies y = \\frac{1}{2} + C e^{-x^2}$.'
  },

  // [22] Linear differential equations
  '6a98e95a910bb37b0e5587d2': {
    question: 'Find the general solution to the differential equation: $(x^2+1)\\frac{dy}{dx} + 2xy = 4x^2$.',
    options: [
      '$y = \\frac{4x^3}{3(x^2+1)} + \\frac{C}{x^2+1}$',
      '$y = \\frac{x^3}{x^2+1} + \\frac{C}{x^2+1}$',
      '$y = \\frac{4x^3}{3(x^2+1)} + C$',
      '$y = \\frac{4x^3}{x^2+1} + \\frac{C}{x^2+1}$'
    ],
    correctAnswer: 0,
    explanation: 'Notice that the left side is the exact derivative of $(x^2 + 1)y$: $\\frac{d}{dx}[(x^2 + 1)y] = 4x^2$. Integrating both sides: $(x^2 + 1)y = \\frac{4}{3}x^3 + C \\implies y = \\frac{4x^3}{3(x^2+1)} + \\frac{C}{x^2+1}$.'
  },

  // [23] Linear differential equations
  '6a98e95a910bb37b0e5587d3': {
    question: 'Determine the particular solution for $\\frac{dy}{dx} - y = e^{2x}$ with initial condition $y(0) = 1$.',
    options: [
      '$y = e^{2x}$',
      '$y = e^{2x} + e^x$',
      '$y = \\frac{1}{2}e^{2x} + \\frac{1}{2}e^x$',
      '$y = 2e^{2x} - e^x$'
    ],
    correctAnswer: 0,
    explanation: 'Integrating factor is $\\text{IF} = e^{\\int -1 dx} = e^{-x}$. Multiplying gives $\\frac{d}{dx}(y e^{-x}) = e^{2x} e^{-x} = e^x$. Integrating gives $y e^{-x} = e^x + C \\implies y = e^{2x} + C e^x$. With $y(0) = 1 \\implies 1 = 1 + C \\implies C = 0$. Hence $y = e^{2x}$.'
  },

  // [24] Linear differential equations
  '6a98e95a910bb37b0e5587d4': {
    question: 'Find the integrating factor for the differential equation: $y\' + y \\cot(x) = \\cos(x)$.',
    options: [
      '$\\sin(x)$',
      '$e^{\\cos(x)}$',
      '$e^{-\\cos(x)}$',
      '$\\csc(x)$'
    ],
    correctAnswer: 0,
    explanation: 'This is a linear equation with $P(x) = \\cot(x)$. The integrating factor is $\\text{IF} = e^{\\int \\cot(x) dx} = e^{\\ln|\\sin(x)|} = \\sin(x)$.'
  },

  // [25] Linear differential equations
  '6a98e95a910bb37b0e5587d5': {
    question: 'Solve the linear differential equation $\\frac{dy}{dx} + \\frac{1}{x}y = x^2$ for $x > 0$.',
    options: [
      '$y = \\frac{x^3}{4} + \\frac{C}{x}$',
      '$y = \\frac{x^4}{4} + \\frac{C}{x}$',
      '$y = \\frac{x^3}{4} + Cx$',
      '$y = \\frac{x^3}{3} + \\frac{C}{x}$'
    ],
    correctAnswer: 0,
    explanation: 'The integrating factor is $\\text{IF} = e^{\\int \\frac{1}{x} dx} = e^{\\ln x} = x$. Multiplying by $x$ gives $\\frac{d}{dx}(xy) = x^3$. Integrating gives $xy = \\frac{x^4}{4} + C \\implies y = \\frac{x^3}{4} + \\frac{C}{x}$.'
  },

  // [26] Linear differential equations
  '6a98e95a910bb37b0e5587d6': {
    question: 'What is the complementary function for the differential equation $\\frac{d^2y}{dx^2} - 5\\frac{dy}{dx} + 6y = e^x$?',
    options: [
      '$y_c = C_1e^{2x} + C_2e^{3x}$',
      '$y_c = C_1e^{-2x} + C_2e^{-3x}$',
      '$y_c = C_1e^x + C_2e^{2x}$',
      '$y_c = C_1e^x + C_2e^{3x}$'
    ],
    correctAnswer: 0,
    explanation: 'The auxiliary equation is $m^2 - 5m + 6 = 0 \\implies (m - 2)(m - 3) = 0$. The roots are $m = 2, 3$. Hence, the complementary function is $y_c = C_1e^{2x} + C_2e^{3x}$.'
  },

  // [27] Linear differential equations
  '6a98e95a910bb37b0e5587d7': {
    question: 'Find the particular integral for $\\frac{d^2y}{dx^2} - 5\\frac{dy}{dx} + 6y = e^x$.',
    options: [
      '$y_p = \\frac{1}{2}e^x$',
      '$y_p = e^x$',
      '$y_p = \\frac{1}{4}e^x$',
      '$y_p = 2e^x$'
    ],
    correctAnswer: 0,
    explanation: 'The particular integral is $y_p = \\frac{1}{D^2 - 5D + 6} e^x = \\frac{1}{1^2 - 5(1) + 6} e^x = \\frac{1}{2}e^x$.'
  },

  // [28] Linear differential equations
  '6a98e95a910bb37b0e5587d8': {
    question: 'The general solution of $\\frac{dy}{dx} + y = 0$ is:',
    options: [
      '$y = Ce^x$',
      '$y = Ce^{-x}$',
      '$y = C$',
      '$y = Cx$'
    ],
    correctAnswer: 1,
    explanation: 'Separating variables gives $\\frac{dy}{y} = -dx \\implies \\ln|y| = -x + C_1 \\implies y = C e^{-x}$.'
  },

  // [29] Linear differential equations
  '6a98e95a910bb37b0e5587d9': {
    question: 'Find the general solution of $\\frac{d^2y}{dx^2} + 4y = 0$.',
    options: [
      '$y = C_1\\cos(2x) + C_2\\sin(2x)$',
      '$y = C_1e^{2x} + C_2e^{-2x}$',
      '$y = C_1\\cos(x) + C_2\\sin(x)$',
      '$y = C_1e^{x} + C_2e^{-x}$'
    ],
    correctAnswer: 0,
    explanation: 'The auxiliary equation is $m^2 + 4 = 0 \\implies m = \\pm 2i$. Therefore, the general solution is $y = C_1\\cos(2x) + C_2\\sin(2x)$.'
  },

  // [30] Linear differential equations
  '6a98e95a910bb37b0e5587da': {
    question: 'Solve the initial value problem: $\\frac{dy}{dx} - 2y = 0$, $y(0)=5$.',
    options: [
      '$y = 5e^{2x}$',
      '$y = 5e^{-2x}$',
      '$y = 5 + 2x$',
      '$y = 5(1-2x)$'
    ],
    correctAnswer: 0,
    explanation: 'The equation is separable: $\\frac{dy}{y} = 2dx \\implies \\ln|y| = 2x + C_1 \\implies y = C e^{2x}$. Given $y(0) = 5$, $C = 5$, so $y = 5e^{2x}$.'
  },

  // [31] Homogeneous equations
  '6a98e966910bb37b0e5587ef': {
    question: 'Solve the homogeneous differential equation: $\\frac{dy}{dx} = \\frac{x^2 + y^2}{xy}$.',
    options: [
      '$y^2 = 2x^2(\\ln|x| + C)$',
      '$x^2 - y^2 = Cx$',
      '$y^2 - x^2 = Cx$',
      '$x^2 + y^2 = Cx$'
    ],
    correctAnswer: 0,
    explanation: 'Let $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$. Substituting gives $v + x\\frac{dv}{dx} = \\frac{x^2 + v^2 x^2}{x(vx)} = \\frac{1+v^2}{v} = \\frac{1}{v} + v \\implies x\\frac{dv}{dx} = \\frac{1}{v}$. Separating variables: $v dv = \\frac{dx}{x} \\implies \\frac{v^2}{2} = \\ln|x| + C \\implies \\frac{y^2}{2x^2} = \\ln|x| + C \\implies y^2 = 2x^2(\\ln|x| + C)$.'
  },

  // [32] Homogeneous equations
  '6a98e966910bb37b0e5587f0': {
    question: 'Find the general solution of the differential equation: $(x^2 - y^2)dx + 2xy dy = 0$.',
    options: [
      '$x^2 + y^2 = Cx$',
      '$x^2 - y^2 = Cx$',
      '$y^2 - x^2 = Cx$',
      '$x^2 + y^2 = Cy$'
    ],
    correctAnswer: 0,
    explanation: 'Rewriting gives $x^2 dx + (2xy dy - y^2 dx) = 0$. Dividing by $x^2$: $dx + \\frac{2xy dy - y^2 dx}{x^2} = 0 \\implies dx + d\\left(\\frac{y^2}{x}\\right) = 0$. Integrating gives $x + \\frac{y^2}{x} = C \\implies x^2 + y^2 = Cx$.'
  },

  // [33] Homogeneous equations
  '6a98e966910bb37b0e5587f1': {
    question: 'Solve the differential equation: $x \\frac{dy}{dx} = y + \\sqrt{x^2 + y^2}$.',
    options: [
      '$y + \\sqrt{x^2 + y^2} = Cx^2$',
      '$y = x\\cosh\\left(\\frac{C}{x}\\right)$',
      '$y = x\\sinh\\left(\\frac{C}{x}\\right)$',
      '$y = x\\tan\\left(\\frac{C}{x}\\right)$'
    ],
    correctAnswer: 0,
    explanation: 'Divide by $x$: $\\frac{dy}{dx} = \\frac{y}{x} + \\sqrt{1 + \\left(\\frac{y}{x}\\right)^2}$. Put $y = vx \\implies v + x\\frac{dv}{dx} = v + \\sqrt{1+v^2} \\implies \\frac{dv}{\\sqrt{1+v^2}} = \\frac{dx}{x}$. Integrating: $\\ln\\left(v + \\sqrt{1+v^2}\\right) = \\ln|x| + \\ln C \\implies v + \\sqrt{1+v^2} = Cx \\implies \\frac{y}{x} + \\sqrt{1+\\frac{y^2}{x^2}} = Cx \\implies y + \\sqrt{x^2+y^2} = Cx^2$.'
  },

  // [34] Homogeneous equations
  '6a98e966910bb37b0e5587f2': {
    question: 'Determine the particular solution of $(x+y)dx + (x-y)dy = 0$ given $y(1)=1$.',
    options: [
      '$x^2 + 2xy - y^2 = 2$',
      '$x^2 + 2xy - y^2 = 1$',
      '$x^2 - 2xy + y^2 = 1$',
      '$x^2 - 2xy - y^2 = 2$'
    ],
    correctAnswer: 0,
    explanation: 'Rewrite as $(x dx - y dy) + (y dx + x dy) = 0 \\implies d\\left(\\frac{x^2 - y^2}{2}\\right) + d(xy) = 0 \\implies x^2 + 2xy - y^2 = C$. Since $y(1) = 1$, $1^2 + 2(1)(1) - 1^2 = 2 = C$. Hence the solution is $x^2 + 2xy - y^2 = 2$.'
  },

  // [35] Homogeneous equations
  '6a98e966910bb37b0e5587f3': {
    question: 'Solve the differential equation: $\\frac{dy}{dx} = \\frac{x+y}{x-y}$.',
    options: [
      '$\\ln(x^2+y^2) - 2\\tan^{-1}(y/x) = C$',
      '$x^2 + 2xy - y^2 = C$',
      '$x^2 - 2xy + y^2 = C$',
      '$\\ln(x^2+y^2) + 2\\tan^{-1}(y/x) = C$'
    ],
    correctAnswer: 0,
    explanation: 'Rewrite as $(x-y)dy = (x+y)dx \\implies (x dx + y dy) - (x dy - y dx) = 0$. Dividing by $x^2 + y^2$: $\\frac{1}{2}\\frac{d(x^2+y^2)}{x^2+y^2} - d\\left(\\tan^{-1}(y/x)\\right) = 0$. Integrating gives $\\frac{1}{2}\\ln(x^2+y^2) - \\tan^{-1}(y/x) = C_1 \\implies \\ln(x^2+y^2) - 2\\tan^{-1}(y/x) = C$.'
  },

  // [36] Homogeneous equations
  '6a98e966910bb37b0e5587f4': {
    question: 'Find the solution to $\\frac{dy}{dx} = \\frac{y^2}{xy + x^2}$.',
    options: [
      '$y e^{y/x} = C$',
      '$x e^{y/x} = C$',
      '$y^2 = x^2(Cx - 1)$',
      '$y = Cx e^{y/x}$'
    ],
    correctAnswer: 0,
    explanation: 'Let $y = vx \\implies v + x\\frac{dv}{dx} = \\frac{v^2}{v+1} \\implies x\\frac{dv}{dx} = \\frac{v^2 - v^2 - v}{v+1} = -\\frac{v}{v+1}$. Separating variables: $\\frac{v+1}{v} dv = -\\frac{dx}{x} \\implies \\left(1 + \\frac{1}{v}\\right)dv = -\\frac{dx}{x}$. Integrating: $v + \\ln|v| = -\\ln|x| + \\ln C \\implies v + \\ln|vx| = \\ln C \\implies \\frac{y}{x} + \\ln|y| = \\ln C \\implies y e^{y/x} = C$.'
  },

  // [37] Homogeneous equations
  '6a98e966910bb37b0e5587f5': {
    question: 'Solve the differential equation $(x^2+y^2)dx - 2xy dy = 0$.',
    options: [
      '$x^2 - y^2 = Cx$',
      '$y^2 - x^2 = Cx$',
      '$x^2 + y^2 = Cx$',
      '$y^2 + x^2 = Cx$'
    ],
    correctAnswer: 0,
    explanation: 'Rewrite as $x^2 dx - (2xy dy - y^2 dx) = 0$. Dividing by $x^2$: $dx - d\\left(\\frac{y^2}{x}\\right) = 0$. Integrating gives $x - \\frac{y^2}{x} = C \\implies x^2 - y^2 = Cx$.'
  },

  // [38] Homogeneous equations
  '6a98e966910bb37b0e5587f6': {
    question: 'An integrating factor for the differential equation $(x^2 + y^2)dx - 2xy dy = 0$ is:',
    options: [
      '$\\frac{1}{x^2}$',
      '$\\frac{1}{y^2}$',
      '$x$',
      '$y$'
    ],
    correctAnswer: 0,
    explanation: 'Comparing with $M dx + N dy = 0$, $M = x^2 + y^2, N = -2xy$. Then $\\frac{\\partial M}{\\partial y} = 2y$ and $\\frac{\\partial N}{\\partial x} = -2y$. We have $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = \\frac{2y - (-2y)}{-2xy} = -\\frac{2}{x}$, which is a function of $x$ alone. The integrating factor is $e^{\\int -\\frac{2}{x} dx} = e^{-2\\ln x} = \\frac{1}{x^2}$.'
  },

  // [39] Homogeneous equations
  '6a98e966910bb37b0e5587f7': {
    question: 'Solve the differential equation: $\\frac{dy}{dx} = \\frac{x \\sin(y/x) + y \\cos(y/x)}{x \\cos(y/x)}$.',
    options: [
      '$\\sin(y/x) = Cx$',
      '$x \\cos(y/x) = C$',
      '$y \\cos(x/y) = C$',
      '$x \\sin(y/x) = C$'
    ],
    correctAnswer: 0,
    explanation: 'Rewrite as $\\frac{dy}{dx} = \\tan(y/x) + \\frac{y}{x}$. Let $y = vx \\implies v + x\\frac{dv}{dx} = \\tan v + v \\implies x\\frac{dv}{dx} = \\tan v \\implies \\cot v dv = \\frac{dx}{x}$. Integrating gives $\\ln|\\sin v| = \\ln|x| + \\ln C \\implies \\sin(y/x) = Cx$.'
  },

  // [40] Homogeneous equations
  '6a98e966910bb37b0e5587f8': {
    question: 'Given the differential equation $\\frac{dy}{dx} = \\frac{y}{x} + \\tan\\left(\\frac{y}{x}\\right)$, find the general solution.',
    options: [
      '$\\sin(y/x) = Cx$',
      '$\\cos(y/x) = Cx$',
      '$\\tan(y/x) = Cx$',
      '$\\cot(y/x) = Cx$'
    ],
    correctAnswer: 0,
    explanation: 'Put $y = vx \\implies v + x\\frac{dv}{dx} = v + \\tan v \\implies x\\frac{dv}{dx} = \\tan v \\implies \\cot v dv = \\frac{dx}{x}$. Integrating both sides gives $\\ln|\\sin v| = \\ln|x| + \\ln C \\implies \\sin(y/x) = Cx$.'
  }
};

module.exports = { repairedGenuineDiffEq };
