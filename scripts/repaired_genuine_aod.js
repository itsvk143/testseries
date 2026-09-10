// scripts/repaired_genuine_aod.js
// Surgically repaired 41 genuine questions for Application of Derivatives (Mathematics, Class 12)

const repairedGenuineAOD = {
  // [1] Maxima and minima
  '6a98e90e910bb37b0e55876c': {
    question: 'Find the maximum value of the quadratic function $f(x) = -x^2 + 4x - 3$.',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 0,
    explanation: 'Differentiating $f(x)$, we get $f\'(x) = -2x + 4$. Setting $f\'(x) = 0$ gives $x = 2$. Since $f\'\'(x) = -2 < 0$, the function attains a maximum at $x = 2$. The maximum value is $f(2) = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1$.'
  },

  // [2] Maxima and minima
  '6a98e90e910bb37b0e55876d': {
    question: 'A farmer wants to fence a rectangular field adjacent to a straight river. If no fence is needed along the river and the farmer has $100\\text{ m}$ of fencing wire, what is the maximum area that can be enclosed?',
    options: ['$1250\\text{ m}^2$', '$1000\\text{ m}^2$', '$1500\\text{ m}^2$', '$2500\\text{ m}^2$'],
    correctAnswer: 0,
    explanation: 'Let the two sides perpendicular to the river have length $x$ and the side parallel to the river have length $y$. Then $2x + y = 100 \\implies y = 100 - 2x$. The area is $A(x) = xy = x(100 - 2x) = 100x - 2x^2$. To maximize, $A\'(x) = 100 - 4x = 0 \\implies x = 25\\text{ m}$. Since $A\'\'(x) = -4 < 0$, the maximum area is $A(25) = 25(100 - 50) = 1250\\text{ m}^2$.'
  },

  // [3] Maxima and minima
  '6a98e90e910bb37b0e55876e': {
    question: 'Find the local minimum value of the cubic function $g(x) = x^3 - 3x^2 + 5$.',
    options: ['$1$', '$3$', '$5$', '$0$'],
    correctAnswer: 0,
    explanation: 'Differentiating, $g\'(x) = 3x^2 - 6x = 3x(x - 2)$. Setting $g\'(x) = 0$ gives critical points $x = 0$ and $x = 2$. The second derivative is $g\'\'(x) = 6x - 6$. At $x = 2$, $g\'\'(2) = 12 - 6 = 6 > 0$, indicating a local minimum. The local minimum value is $g(2) = 2^3 - 3(2^2) + 5 = 8 - 12 + 5 = 1$.'
  },

  // [4] Maxima and minima
  '6a98e90e910bb37b0e55876f': {
    question: 'What is the point of local maximum on the curve $h(x) = x^3 - 6x^2 + 5$?',
    options: ['$(0, 5)$', '$(4, -27)$', '$(2, -11)$', '$(-1, 0)$'],
    correctAnswer: 0,
    explanation: 'Differentiating, $h\'(x) = 3x^2 - 12x = 3x(x - 4) = 0 \\implies x = 0$ or $x = 4$. The second derivative is $h\'\'(x) = 6x - 12$. For $x = 0$, $h\'\'(0) = -12 < 0$, which corresponds to a local maximum. At $x = 0$, $h(0) = 5$. Thus, the local maximum point is $(0, 5)$.'
  },

  // [5] Maxima and minima
  '6a98e90e910bb37b0e558770': {
    question: 'Find the dimensions of a rectangle with perimeter $200\\text{ cm}$ that encloses the largest possible area.',
    options: [
      '$25\\text{ cm} \\times 25\\text{ cm}$',
      '$50\\text{ cm} \\times 50\\text{ cm}$',
      '$40\\text{ cm} \\times 60\\text{ cm}$',
      '$30\\text{ cm} \\times 70\\text{ cm}$'
    ],
    correctAnswer: 1,
    explanation: 'Let the length and breadth be $x$ and $y$. Perimeter $2(x + y) = 200 \\implies x + y = 100 \\implies y = 100 - x$. Area $A(x) = x(100 - x) = 100x - x^2$. Setting $A\'(x) = 100 - 2x = 0 \\implies x = 50\\text{ cm}$, so $y = 50\\text{ cm}$. Hence, the dimensions are $50\\text{ cm} \\times 50\\text{ cm}$.'
  },

  // [6] Maxima and minima
  '6a98e90e910bb37b0e558771': {
    question: 'A closed cylindrical can is to have a volume of $128\\pi\\text{ cm}^3$. Find the height of the can that minimizes its total surface area.',
    options: ['$4\\text{ cm}$', '$8\\text{ cm}$', '$12\\text{ cm}$', '$16\\text{ cm}$'],
    correctAnswer: 1,
    explanation: 'The volume is $V = \\pi r^2 h = 128\\pi \\implies h = \\frac{128}{r^2}$. The total surface area is $S = 2\\pi r^2 + 2\\pi rh = 2\\pi r^2 + 2\\pi r \\left(\\frac{128}{r^2}\\right) = 2\\pi r^2 + \\frac{256\\pi}{r}$. Differentiating with respect to $r$: $S\'(r) = 4\\pi r - \\frac{256\\pi}{r^2} = 0 \\implies 4\\pi r^3 = 256\\pi \\implies r^3 = 64 \\implies r = 4\\text{ cm}$. The height is $h = \\frac{128}{4^2} = 8\\text{ cm}$.'
  },

  // [7] Maxima and minima
  '6a98e90e910bb37b0e558772': {
    question: 'Find the local minimum value of the polynomial function $f(x) = x^4 - 2x^2 + 3$.',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctAnswer: 1,
    explanation: 'Differentiating, $f\'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1)$. Critical points are $x = 0, 1, -1$. The second derivative is $f\'\'(x) = 12x^2 - 4$. At $x = \\pm 1$, $f\'\'(\\pm 1) = 8 > 0$, so local minima occur at $x = \\pm 1$. The minimum value is $f(\\pm 1) = 1 - 2 + 3 = 2$.'
  },

  // [8] Maxima and minima
  '6a98e90e910bb37b0e558773': {
    question: 'A point moves along the curve $y = x^3 - 3x$. At which point on the curve is the slope of the tangent a minimum?',
    options: ['$(0, 0)$', '$(1, -2)$', '$(-1, 2)$', '$(2, 2)$'],
    correctAnswer: 0,
    explanation: 'The slope of the tangent at any point is $m(x) = \\frac{dy}{dx} = 3x^2 - 3$. Since $m(x)$ is a quadratic in $x$ with positive leading coefficient $3$, its minimum occurs at its vertex $x = 0$. The minimum slope is $m(0) = -3$. The corresponding point on the curve is $x = 0, y = 0^3 - 3(0) = 0$, which is $(0, 0)$.'
  },

  // [9] Maxima and minima
  '6a98e90e910bb37b0e558774': {
    question: 'An open rectangular box with a square base of side $x$ is to have a volume of $32\\text{ cm}^3$. Find the dimensions of the box that minimize the surface area of material used.',
    options: [
      '$4\\text{ cm} \\times 4\\text{ cm} \\times 2\\text{ cm}$',
      '$2\\text{ cm} \\times 2\\text{ cm} \\times 8\\text{ cm}$',
      '$8\\text{ cm} \\times 8\\text{ cm} \\times 0.5\\text{ cm}$',
      '$4\\text{ cm} \\times 2\\text{ cm} \\times 4\\text{ cm}$'
    ],
    correctAnswer: 0,
    explanation: 'Let the square base have side $x$ and height be $h$. Volume $V = x^2 h = 32 \\implies h = \\frac{32}{x^2}$. Surface area of the open box is $S = x^2 + 4xh = x^2 + 4x\\left(\\frac{32}{x^2}\\right) = x^2 + \\frac{128}{x}$. Differentiating: $S\'(x) = 2x - \\frac{128}{x^2} = 0 \\implies 2x^3 = 128 \\implies x^3 = 64 \\implies x = 4\\text{ cm}$. Height $h = \\frac{32}{16} = 2\\text{ cm}$. The dimensions are $4\\text{ cm} \\times 4\\text{ cm} \\times 2\\text{ cm}$.'
  },

  // [10] Maxima and minima
  '6a98e90e910bb37b0e558775': {
    question: 'Find the absolute maximum value of the function $f(x) = 3x^4 - 4x^3$ on the closed interval $[-1, 2]$.',
    options: ['$0$', '$7$', '$16$', '$-1$'],
    correctAnswer: 2,
    explanation: 'Differentiating, $f\'(x) = 12x^3 - 12x^2 = 12x^2(x - 1) = 0 \\implies$ critical points $x = 0$ and $x = 1$. Evaluating at critical points and endpoints: $f(-1) = 3(-1)^4 - 4(-1)^3 = 3 + 4 = 7$; $f(0) = 0$; $f(1) = 3(1) - 4(1) = -1$; $f(2) = 3(16) - 4(8) = 48 - 32 = 16$. The absolute maximum value is $16$.'
  },

  // [11] Maxima and minima
  '6a98e90e910bb37b0e558776': {
    question: 'What is the absolute minimum value of the function $f(x) = e^x - x$ for $x \\in \\mathbb{R}$?',
    options: ['$0$', '$1$', '$e$', '$e - 1$'],
    correctAnswer: 1,
    explanation: 'Differentiating, $f\'(x) = e^x - 1$. Setting $f\'(x) = 0 \\implies e^x = 1 \\implies x = 0$. Since $f\'\'(x) = e^x > 0$ for all $x$, $x = 0$ is the global minimum. The minimum value is $f(0) = e^0 - 0 = 1$.'
  },

  // [12] Rate of change
  '6a98e920910bb37b0e558777': {
    question: 'A particle moves along the curve $y = 3x^2 + 2$. If the $x$-coordinate is increasing at a constant rate of $5\\text{ units/sec}$, what is the rate of change of the $y$-coordinate when $x = 2$?',
    options: ['$15\\text{ units/sec}$', '$30\\text{ units/sec}$', '$60\\text{ units/sec}$', '$45\\text{ units/sec}$'],
    correctAnswer: 2,
    explanation: 'Differentiating $y$ with respect to time $t$: $\\frac{dy}{dt} = 6x \\frac{dx}{dt}$. Substituting $x = 2$ and $\\frac{dx}{dt} = 5$: $\\frac{dy}{dt} = 6(2)(5) = 60\\text{ units/sec}$.'
  },

  // [13] Rate of change
  '6a98e920910bb37b0e558778': {
    question: 'The radius of a circular oil spill is increasing at the rate of $0.5\\text{ cm/sec}$. How fast is the area of the oil spill increasing when the radius is $10\\text{ cm}$?',
    options: [
      '$5\\pi\\text{ cm}^2\\text{/sec}$',
      '$10\\pi\\text{ cm}^2\\text{/sec}$',
      '$20\\pi\\text{ cm}^2\\text{/sec}$',
      '$50\\pi\\text{ cm}^2\\text{/sec}$'
    ],
    correctAnswer: 1,
    explanation: 'The area of the circle is $A = \\pi r^2$. Differentiating with respect to $t$: $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$. Given $r = 10\\text{ cm}$ and $\\frac{dr}{dt} = 0.5\\text{ cm/sec}$, we have $\\frac{dA}{dt} = 2\\pi(10)(0.5) = 10\\pi\\text{ cm}^2\\text{/sec}$.'
  },

  // [14] Rate of change
  '6a98e920910bb37b0e558779': {
    question: 'A ladder $10\\text{ m}$ long is leaning against a vertical wall. The bottom of the ladder is pulled away from the wall at the rate of $1\\text{ m/s}$. How fast is the top of the ladder sliding down the wall when the bottom is $6\\text{ m}$ from the wall?',
    options: ['$0.5\\text{ m/s}$', '$0.75\\text{ m/s}$', '$1\\text{ m/s}$', '$1.5\\text{ m/s}$'],
    correctAnswer: 1,
    explanation: 'Let $x$ be the distance from the wall to the base of the ladder, and $y$ be the height of the top of the ladder on the wall. Then $x^2 + y^2 = 10^2 = 100$. Differentiating with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$. When $x = 6\\text{ m}$, $y = \\sqrt{100 - 36} = 8\\text{ m}$. Given $\\frac{dx}{dt} = 1\\text{ m/s}$, we obtain $6(1) + 8\\frac{dy}{dt} = 0 \\implies \\frac{dy}{dt} = -\\frac{6}{8} = -0.75\\text{ m/s}$. Thus, the ladder is sliding down at $0.75\\text{ m/s}$.'
  },

  // [15] Rate of change
  '6a98e920910bb37b0e55877a': {
    question: 'Water is draining from an inverted conical tank of top radius $2\\text{ m}$ and height $4\\text{ m}$. If the water level is dropping at a rate of $0.5\\text{ m/min}$, how fast is the volume of water decreasing when the depth of water is $3\\text{ m}$?',
    options: [
      '$-\\frac{3\\pi}{4}\\text{ m}^3\\text{/min}$',
      '$-\\frac{9\\pi}{8}\\text{ m}^3\\text{/min}$',
      '$-\\frac{27\\pi}{16}\\text{ m}^3\\text{/min}$',
      '$-\\frac{81\\pi}{32}\\text{ m}^3\\text{/min}$'
    ],
    correctAnswer: 1,
    explanation: 'By similar triangles, the water radius $r$ and depth $h$ satisfy $\\frac{r}{h} = \\frac{2}{4} = \\frac{1}{2} \\implies r = \\frac{h}{2}$. The volume of water in the cone is $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{h}{2}\\right)^2 h = \\frac{\\pi}{12} h^3$. Differentiating with respect to time $t$: $\\frac{dV}{dt} = \\frac{\\pi h^2}{4} \\frac{dh}{dt}$. Given $h = 3\\text{ m}$ and $\\frac{dh}{dt} = -0.5\\text{ m/min}$, we find $\\frac{dV}{dt} = \\frac{\\pi(3^2)}{4}(-0.5) = -\\frac{9\\pi}{8}\\text{ m}^3\\text{/min}$.'
  },

  // [16] Rate of change
  '6a98e920910bb37b0e55877b': {
    question: 'The volume of a cube is increasing at a rate of $10\\text{ cm}^3\\text{/sec}$. How fast is the surface area of the cube increasing when the edge length is $5\\text{ cm}$?',
    options: ['$2\\text{ cm}^2\\text{/sec}$', '$4\\text{ cm}^2\\text{/sec}$', '$6\\text{ cm}^2\\text{/sec}$', '$8\\text{ cm}^2\\text{/sec}$'],
    correctAnswer: 3,
    explanation: 'For a cube of edge length $s$, volume is $V = s^3$ and surface area is $A = 6s^2$. Differentiating $V$: $\\frac{dV}{dt} = 3s^2 \\frac{ds}{dt} \\implies 10 = 3(5^2) \\frac{ds}{dt} = 75 \\frac{ds}{dt} \\implies \\frac{ds}{dt} = \\frac{10}{75} = \\frac{2}{15}\\text{ cm/sec}$. Now differentiating $A$: $\\frac{dA}{dt} = 12s \\frac{ds}{dt} = 12(5)\\left(\\frac{2}{15}\\right) = 60 \\times \\frac{2}{15} = 8\\text{ cm}^2\\text{/sec}$.'
  },

  // [17] Rate of change
  '6a98e920910bb37b0e55877c': {
    question: 'Two particles move along the $x$-axis with positions $x_1(t) = t^2$ and $x_2(t) = 3t - 5$ for $t \\ge 0$. Find the rate of change of the distance between them at $t = 2\\text{ seconds}$.',
    options: ['$1\\text{ m/s}$', '$2\\text{ m/s}$', '$3\\text{ m/s}$', '$4\\text{ m/s}$'],
    correctAnswer: 0,
    explanation: 'The separation between the particles is $D(t) = x_1(t) - x_2(t) = t^2 - 3t + 5$. Since the discriminant of $t^2 - 3t + 5$ is $(-3)^2 - 4(1)(5) = -11 < 0$, $D(t) > 0$ for all $t$. Differentiating: $D\'(t) = 2t - 3$. At $t = 2\\text{ s}$, $D\'(2) = 2(2) - 3 = 1\\text{ m/s}$.'
  },

  // [18] Rate of change
  '6a98e920910bb37b0e55877d': {
    question: 'Air is being pumped into a spherical balloon at a rate of $100\\text{ cm}^3\\text{/sec}$. How fast is the radius of the balloon increasing when the diameter is $20\\text{ cm}$?',
    options: [
      '$\\frac{1}{\\pi}\\text{ cm/sec}$',
      '$\\frac{2}{\\pi}\\text{ cm/sec}$',
      '$\\frac{1}{2\\pi}\\text{ cm/sec}$',
      '$\\frac{1}{4\\pi}\\text{ cm/sec}$'
    ],
    correctAnswer: 3,
    explanation: 'The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$. Differentiating: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. Given diameter $20\\text{ cm} \\implies$ radius $r = 10\\text{ cm}$, and $\\frac{dV}{dt} = 100\\text{ cm}^3\\text{/sec}$. Then $100 = 4\\pi(10^2) \\frac{dr}{dt} = 400\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = \\frac{100}{400\\pi} = \\frac{1}{4\\pi}\\text{ cm/sec}$.'
  },

  // [19] Rate of change
  '6a98e920910bb37b0e55877e': {
    question: 'The length of a rectangle is decreasing at a rate of $2\\text{ cm/sec}$ and its width is increasing at a rate of $3\\text{ cm/sec}$. When the length is $10\\text{ cm}$ and width is $5\\text{ cm}$, how fast is the area changing?',
    options: [
      '$20\\text{ cm}^2\\text{/sec}$',
      '$10\\text{ cm}^2\\text{/sec}$',
      '$-10\\text{ cm}^2\\text{/sec}$',
      '$-20\\text{ cm}^2\\text{/sec}$'
    ],
    correctAnswer: 0,
    explanation: 'Area of rectangle $A = LW$. Differentiating with respect to time: $\\frac{dA}{dt} = L \\frac{dW}{dt} + W \\frac{dL}{dt}$. Substituting $L = 10\\text{ cm}$, $W = 5\\text{ cm}$, $\\frac{dL}{dt} = -2\\text{ cm/sec}$, and $\\frac{dW}{dt} = 3\\text{ cm/sec}$: $\\frac{dA}{dt} = 10(3) + 5(-2) = 30 - 10 = 20\\text{ cm}^2\\text{/sec}$.'
  },

  // [20] Rate of change
  '6a98e920910bb37b0e55877f': {
    question: 'A boat is pulled into a dock by a rope attached to the bow and passing through a pulley on the dock $3\\text{ m}$ above the bow. If the rope is hauled in at a rate of $2\\text{ m/s}$, how fast is the boat approaching the dock when it is $4\\text{ m}$ from the dock?',
    options: ['$1.5\\text{ m/s}$', '$2.0\\text{ m/s}$', '$2.5\\text{ m/s}$', '$3.0\\text{ m/s}$'],
    correctAnswer: 2,
    explanation: 'Let $x$ be the horizontal distance from the boat to the dock, and $y$ be the length of rope between boat and pulley. Since the pulley is $3\\text{ m}$ above, $x^2 + 3^2 = y^2$. Differentiating with respect to $t$: $2x \\frac{dx}{dt} = 2y \\frac{dy}{dt} \\implies x \\frac{dx}{dt} = y \\frac{dy}{dt}$. When $x = 4\\text{ m}$, $y = \\sqrt{4^2 + 3^2} = 5\\text{ m}$. Since the rope is being hauled in at $2\\text{ m/s}$, $\\frac{dy}{dt} = -2\\text{ m/s}$. Thus $4 \\frac{dx}{dt} = 5(-2) = -10 \\implies \\frac{dx}{dt} = -2.5\\text{ m/s}$. The speed at which the boat approaches the dock is $2.5\\text{ m/s}$.'
  },

  // [21] Rate of change
  '6a98e920910bb37b0e558780': {
    question: 'A car is traveling north at $60\\text{ km/h}$ and another car is traveling east at $80\\text{ km/h}$, both starting from the same intersection at the same time. How fast is the distance between them increasing after $1\\text{ hour}$?',
    options: ['$90\\text{ km/h}$', '$100\\text{ km/h}$', '$110\\text{ km/h}$', '$120\\text{ km/h}$'],
    correctAnswer: 1,
    explanation: 'Let $x(t) = 80t$ be the distance east and $y(t) = 60t$ be the distance north. The distance between them is $D = \\sqrt{x^2 + y^2}$. After $t = 1\\text{ hr}$, $x = 80\\text{ km}, y = 60\\text{ km}$, and $D = \\sqrt{80^2 + 60^2} = 100\\text{ km}$. Differentiating $D^2 = x^2 + y^2$ gives $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} \\implies D \\frac{dD}{dt} = x(80) + y(60)$. At $t = 1$: $100 \\frac{dD}{dt} = 80(80) + 60(60) = 6400 + 3600 = 10000 \\implies \\frac{dD}{dt} = 100\\text{ km/h}$.'
  },

  // [22] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e558781': {
    question: 'Find the equation of the tangent line to the parabola $y = x^2 + 3x - 4$ at the point where $x = 1$.',
    options: ['$y = 5x - 5$', '$y = -5x + 5$', '$y = 3x - 3$', '$y = -3x + 3$'],
    correctAnswer: 0,
    explanation: 'When $x = 1$, $y = 1^2 + 3(1) - 4 = 0$, so the point of tangency is $(1, 0)$. The derivative is $\\frac{dy}{dx} = 2x + 3$. At $x = 1$, slope $m = 2(1) + 3 = 5$. The equation of the tangent is $y - 0 = 5(x - 1) \\implies y = 5x - 5$.'
  },

  // [23] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e558782': {
    question: 'What is the slope of the normal to the rectangular hyperbola $y = \\frac{1}{x}$ at the point $\\left(2, \\frac{1}{2}\\right)$?',
    options: ['$4$', '$1/4$', '$-4$', '$-1/4$'],
    correctAnswer: 0,
    explanation: 'Differentiating $y = x^{-1}$, we get $\\frac{dy}{dx} = -\\frac{1}{x^2}$. At $x = 2$, the slope of the tangent is $m_t = -\\frac{1}{4}$. The slope of the normal is the negative reciprocal: $m_n = -\\frac{1}{m_t} = 4$.'
  },

  // [24] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e558783': {
    question: 'Find the equation of the normal line to the curve $y = x^3$ at the point $(1, 1)$.',
    options: ['$x + 3y = 4$', '$3x + y = 4$', '$x - 3y = -2$', '$3x - y = 2$'],
    correctAnswer: 0,
    explanation: 'The derivative is $\\frac{dy}{dx} = 3x^2$. At $x = 1$, the slope of the tangent is $m_t = 3(1)^2 = 3$. The slope of the normal is $m_n = -\\frac{1}{3}$. Using point-slope form: $y - 1 = -\\frac{1}{3}(x - 1) \\implies 3y - 3 = -x + 1 \\implies x + 3y = 4$.'
  },

  // [25] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e558784': {
    question: 'At which point on the parabola $y = x^2$ is the tangent line parallel to the line $y = 4x - 3$?',
    options: ['$(2, 4)$', '$(4, 16)$', '$(1, 1)$', '$(3, 9)$'],
    correctAnswer: 0,
    explanation: 'The slope of the line $y = 4x - 3$ is $4$. The slope of the tangent to $y = x^2$ is $\\frac{dy}{dx} = 2x$. For parallelism, $2x = 4 \\implies x = 2$. The corresponding $y$-coordinate is $y = 2^2 = 4$. Hence, the required point is $(2, 4)$.'
  },

  // [26] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e558785': {
    question: 'Find the equation of the tangent line to the curve $y = \\sin x$ at $x = \\frac{\\pi}{2}$.',
    options: ['$y = 1$', '$y = x - \\frac{\\pi}{2}$', '$y = -x + 1$', '$y = 0$'],
    correctAnswer: 0,
    explanation: 'At $x = \\frac{\\pi}{2}$, $y = \\sin\\left(\\frac{\\pi}{2}\\right) = 1$. The derivative is $\\frac{dy}{dx} = \\cos x$. At $x = \\frac{\\pi}{2}$, the slope is $m = \\cos\\left(\\frac{\\pi}{2}\\right) = 0$. The tangent line is horizontal: $y - 1 = 0(x - \\pi/2) \\implies y = 1$.'
  },

  // [27] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e558786': {
    question: 'Find the slope of the tangent to the exponential curve $y = e^{2x}$ at the point where $x = 0$.',
    options: ['$1$', '$2$', '$e^2$', '$0$'],
    correctAnswer: 1,
    explanation: 'Differentiating with respect to $x$, we have $\\frac{dy}{dx} = 2e^{2x}$. At $x = 0$, the slope is $\\left.\\frac{dy}{dx}\\right|_{x=0} = 2e^0 = 2(1) = 2$.'
  },

  // [28] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e558787': {
    question: 'The equation of the tangent line to the curve $y = \\sqrt{x}$ at the point $(4, 2)$ is:',
    options: ['$4y = x + 4$', '$y = 4x - 14$', '$4y = -x + 12$', '$y = \\frac{1}{4}x - 1$'],
    correctAnswer: 0,
    explanation: 'The derivative is $\\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}}$. At $x = 4$, the slope is $m = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4}$. The equation of the tangent line is $y - 2 = \\frac{1}{4}(x - 4) \\implies 4y - 8 = x - 4 \\implies 4y = x + 4$.'
  },

  // [29] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e558788': {
    question: 'Find the point on the parabola $y = x^2 - 5x + 6$ where the tangent line is parallel to the $x$-axis.',
    options: ['$(2, 0)$', '$(3, 0)$', '$(5/2, -1/4)$', '$(5/2, 1/4)$'],
    correctAnswer: 2,
    explanation: 'A line parallel to the $x$-axis has slope $0$. The derivative is $\\frac{dy}{dx} = 2x - 5$. Setting $\\frac{dy}{dx} = 0 \\implies 2x - 5 = 0 \\implies x = \\frac{5}{2}$. The $y$-coordinate is $y = \\left(\\frac{5}{2}\\right)^2 - 5\\left(\\frac{5}{2}\\right) + 6 = \\frac{25}{4} - \\frac{25}{2} + 6 = -\\frac{1}{4}$. Thus, the point is $(5/2, -1/4)$.'
  },

  // [30] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e558789': {
    question: 'What is the equation of the normal line to the curve $y = \\ln x$ at the point $(e, 1)$?',
    options: ['$ex + y = e^2 + 1$', '$ex - y = e^2 - 1$', '$x + ey = 2e$', '$x - ey = 0$'],
    correctAnswer: 0,
    explanation: 'The derivative is $\\frac{dy}{dx} = \\frac{1}{x}$. At $x = e$, the slope of the tangent is $m_t = \\frac{1}{e}$. The slope of the normal is $m_n = -\\frac{1}{m_t} = -e$. The equation of the normal is $y - 1 = -e(x - e) \\implies y - 1 = -ex + e^2 \\implies ex + y = e^2 + 1$.'
  },

  // [31] Maxima and minima (Tangents & Normals)
  '6a98e941910bb37b0e55878a': {
    question: 'Find the equation of the tangent line to the curve $y = \\frac{1}{x+1}$ at the point $(0, 1)$.',
    options: ['$x + y = 1$', '$x - y = -1$', '$y - x = 1$', '$x + y = -1$'],
    correctAnswer: 0,
    explanation: 'The derivative is $\\frac{dy}{dx} = -\\frac{1}{(x+1)^2}$. At $x = 0$, the slope is $m = -\\frac{1}{(0+1)^2} = -1$. The equation of the tangent line is $y - 1 = -1(x - 0) \\implies x + y = 1$.'
  },

  // [32] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587a9': {
    question: 'For the cubic function $f(x) = 3x^3 - 15x^2 + 25x - 7$, find the maximal interval where $f(x)$ is strictly increasing.',
    options: ['$(-\\infty, \\infty)$', '$(1, 5)$', '$(-\\infty, 1) \\cup (5, \\infty)$', '$(5/3, \\infty)$'],
    correctAnswer: 0,
    explanation: 'Differentiating $f(x)$, we get $f\'(x) = 9x^2 - 30x + 25 = (3x - 5)^2$. Since $(3x - 5)^2 > 0$ for all $x \\ne 5/3$ and equals zero only at the isolated point $x = 5/3$, $f(x)$ is strictly increasing on the entire real line $(-\\infty, \\infty)$.'
  },

  // [33] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587aa': {
    question: 'Determine the interval where the polynomial function $f(x) = x^4 - 4x^3 + 2$ is strictly decreasing.',
    options: ['$(-\\infty, 3)$', '$(3, \\infty)$', '$(0, 3)$', '$(-\\infty, 0) \\cup (3, \\infty)$'],
    correctAnswer: 0,
    explanation: 'The derivative is $f\'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$. Since $4x^2 \\ge 0$ for all $x$, the sign of $f\'(x)$ is determined by $x - 3$. Thus $f\'(x) < 0$ when $x < 3$ (with $x \\ne 0$). The function is strictly decreasing on $(-\\infty, 3]$.'
  },

  // [34] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587ab': {
    question: 'Find the set of all real values of $k$ such that the function $f(x) = x^3 + kx^2 + 3x + 5$ is strictly increasing on $\\mathbb{R}$.',
    options: ['$[-3, 3]$', '$(-3, 3)$', '$(-\\infty, -3] \\cup [3, \\infty)$', '$[-9, 9]$'],
    correctAnswer: 0,
    explanation: 'For $f(x)$ to be strictly increasing on $\\mathbb{R}$, we require $f\'(x) \\ge 0$ for all $x \\in \\mathbb{R}$. Here $f\'(x) = 3x^2 + 2kx + 3$. Since the leading coefficient $3 > 0$, this quadratic is non-negative everywhere if and only if its discriminant $D \\le 0$: $D = (2k)^2 - 4(3)(3) = 4k^2 - 36 \\le 0 \\implies k^2 \\le 9 \\implies k \\in [-3, 3]$.'
  },

  // [35] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587ac': {
    question: 'Consider the function $f(x) = \\frac{x}{\\ln x}$ defined for $x \\in (0, 1) \\cup (1, \\infty)$. Determine the complete interval where $f(x)$ is strictly decreasing.',
    options: ['$(0, 1) \\cup (1, e)$', '$(e, \\infty)$', '$(1, e)$', '$(0, e)$'],
    correctAnswer: 0,
    explanation: 'Differentiating $f(x)$ using the quotient rule: $f\'(x) = \\frac{(\\ln x)(1) - x(1/x)}{(\\ln x)^2} = \\frac{\\ln x - 1}{(\\ln x)^2}$. Since $(\\ln x)^2 > 0$ for all $x \\in (0, 1) \\cup (1, \\infty)$, $f\'(x) < 0 \\iff \\ln x - 1 < 0 \\iff \\ln x < 1 \\iff x < e$. Respecting the domain of $f(x)$, it is strictly decreasing on $(0, 1) \\cup (1, e)$.'
  },

  // [36] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587ad': {
    question: 'Find the set of values of $a$ for which the function $f(x) = x^3 - ax^2 + 3x + 5$ is strictly increasing for all $x \\in \\mathbb{R}$.',
    options: ['$(-3, 3)$', '$[-3, 3]$', '$(-\\infty, -3) \\cup (3, \\infty)$', '$(-2\\sqrt{2}, 2\\sqrt{2})$'],
    correctAnswer: 1,
    explanation: 'The derivative is $f\'(x) = 3x^2 - 2ax + 3$. For $f(x)$ to be monotonically increasing on $\\mathbb{R}$, we need $f\'(x) \\ge 0$ for all $x$. This requires the discriminant $D \\le 0$: $D = (-2a)^2 - 4(3)(3) = 4a^2 - 36 \\le 0 \\implies a^2 \\le 9 \\implies a \\in [-3, 3]$.'
  },

  // [37] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587ae': {
    question: 'For what condition on the constant $c$ is the function $f(x) = e^{cx} - x$ strictly decreasing in an open neighborhood around $x = 0$?',
    options: ['$c < 1$', '$c > 1$', '$c \\le 0$', '$c = 1$'],
    correctAnswer: 0,
    explanation: 'Differentiating with respect to $x$, we have $f\'(x) = c e^{cx} - 1$. At $x = 0$, $f\'(0) = c e^0 - 1 = c - 1$. For $f(x)$ to be strictly decreasing in a neighborhood of $0$, we need $f\'(0) < 0 \\implies c - 1 < 0 \\implies c < 1$.'
  },

  // [38] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587af': {
    question: 'Determine the subset of $[0, 2\\pi]$ where the trigonometric function $f(x) = \\sin x - \\cos x$ is strictly increasing.',
    options: [
      '$[0, \\frac{3\\pi}{4}) \\cup (\\frac{7\\pi}{4}, 2\\pi]$',
      '$(\\frac{3\\pi}{4}, \\frac{7\\pi}{4})$',
      '$[0, \\frac{\\pi}{2}]$',
      '$[\\frac{\\pi}{4}, \\frac{5\\pi}{4}]$'
    ],
    correctAnswer: 0,
    explanation: 'Differentiating $f(x)$: $f\'(x) = \\cos x + \\sin x = \\sqrt{2} \\cos\\left(x - \\frac{\\pi}{4}\\right)$. For strictly increasing, we require $f\'(x) > 0 \\implies \\cos x + \\sin x > 0$. In $[0, 2\\pi]$, $\\cos x + \\sin x = 0$ at $x = \\frac{3\\pi}{4}$ and $x = \\frac{7\\pi}{4}$. Testing values, $\\cos x + \\sin x > 0$ for $x \\in [0, 3\\pi/4) \\cup (7\\pi/4, 2\\pi]$.'
  },

  // [39] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587b0': {
    question: 'Find the set of all real values of $p$ for which the function $f(x) = \\frac{1}{3}x^3 - px^2 + 4x + 1$ is monotonically increasing on $\\mathbb{R}$.',
    options: ['$[-2, 2]$', '$(-2, 2)$', '$(-\\infty, -2] \\cup [2, \\infty)$', '$[0, 2]$'],
    correctAnswer: 0,
    explanation: 'The derivative is $f\'(x) = x^2 - 2px + 4$. For $f(x)$ to be increasing on $\\mathbb{R}$, we require $f\'(x) \\ge 0$ for all $x \\in \\mathbb{R}$. The quadratic $x^2 - 2px + 4 \\ge 0$ requires discriminant $D \\le 0$: $D = (-2p)^2 - 4(1)(4) = 4p^2 - 16 \\le 0 \\implies p^2 \\le 4 \\implies p \\in [-2, 2]$.'
  },

  // [40] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587b1': {
    question: 'Let $f(x) = x^3 + ax^2 + bx + c$. If $f(x)$ is strictly increasing on $(-\\infty, 1)$ and $(3, \\infty)$ and strictly decreasing on $(1, 3)$, find the values of $a$ and $b$.',
    options: [
      '$a = -6, b = 9$',
      '$a = 6, b = 9$',
      '$a = -4, b = 3$',
      '$a = 4, b = -3$'
    ],
    correctAnswer: 0,
    explanation: 'The derivative is $f\'(x) = 3x^2 + 2ax + b$. Since the sign of $f\'(x)$ changes at $x = 1$ and $x = 3$, these must be the roots of $f\'(x) = 0$. Thus $f\'(x) = 3(x - 1)(x - 3) = 3(x^2 - 4x + 3) = 3x^2 - 12x + 9$. Comparing coefficients with $3x^2 + 2ax + b$: $2a = -12 \\implies a = -6$ and $b = 9$.'
  },

  // [41] Increasing and decreasing functions
  '6a98e94b910bb37b0e5587b2': {
    question: 'Find the complete interval where the function $f(x) = x \\ln x$ is strictly decreasing.',
    options: ['$(0, 1/e)$', '$(1/e, \\infty)$', '$(0, 1)$', '$(1, \\infty)$'],
    correctAnswer: 0,
    explanation: 'The domain of $f(x)$ is $x \\in (0, \\infty)$. Differentiating: $f\'(x) = \\ln x + x\\left(\\frac{1}{x}\\right) = \\ln x + 1$. For $f(x)$ to be strictly decreasing, we require $f\'(x) < 0 \\implies \\ln x + 1 < 0 \\implies \\ln x < -1 \\implies 0 < x < e^{-1} = \\frac{1}{e}$. Thus, the function is strictly decreasing on $(0, 1/e)$.'
  }
};

module.exports = { repairedGenuineAOD };
