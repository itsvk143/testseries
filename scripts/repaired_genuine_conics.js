// scripts/repaired_genuine_conics.js
// Surgically repaired 30 genuine questions for Conic Sections (Parabola, Ellipse, Hyperbola)

const repairedGenuineConics = {
  // [1]
  '6a98e87e910bb37b0e5586bc': {
    question: 'Find the equation of an ellipse with foci at $(0, \\pm 4)$ and vertices at $(0, \\pm 5)$.',
    options: [
      '$\\frac{x^2}{9} + \\frac{y^2}{25} = 1$',
      '$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$',
      '$\\frac{x^2}{16} + \\frac{y^2}{25} = 1$',
      '$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$'
    ],
    correctAnswer: 0,
    explanation: 'Since the foci and vertices are on the $y$-axis, the major axis is vertical: $\\frac{x^2}{b^2} + \\frac{y^2}{a^2} = 1$.\nHere $a = 5$ and $c = 4$. Using $b^2 = a^2 - c^2 = 25 - 16 = 9$, the equation is $\\frac{x^2}{9} + \\frac{y^2}{25} = 1$.'
  },
  // [2]
  '6a98e87e910bb37b0e5586bd': {
    question: 'What are the coordinates of the foci of the ellipse given by the equation $\\frac{x^2}{36} + \\frac{y^2}{16} = 1$?',
    options: [
      '$(\\pm\\sqrt{20}, 0)$',
      '$(0, \\pm\\sqrt{20})$',
      '$(\\pm 6, 0)$',
      '$(0, \\pm 4)$'
    ],
    correctAnswer: 0,
    explanation: 'This is a horizontal ellipse with $a^2 = 36$ and $b^2 = 16$. The distance from the center to the foci is $c = \\sqrt{a^2 - b^2} = \\sqrt{36 - 16} = \\sqrt{20}$. Thus, the foci are at $(\\pm\\sqrt{20}, 0)$.'
  },
  // [3]
  '6a98e87e910bb37b0e5586be': {
    question: 'Find the length of the major axis of the ellipse $\\frac{(x-1)^2}{25} + \\frac{(y+2)^2}{4} = 1$.',
    options: ['$2$', '$4$', '$5$', '$10$'],
    correctAnswer: 3,
    explanation: 'Here $a^2 = 25 \\implies a = 5$. The length of the major axis is $2a = 2(5) = 10$.'
  },
  // [4]
  '6a98e87e910bb37b0e5586bf': {
    question: 'An ellipse has its center at the origin, a vertex at $(0, 7)$, and a focus at $(0, 3)$. What is the equation of the ellipse?',
    options: [
      '$\\frac{x^2}{40} + \\frac{y^2}{49} = 1$',
      '$\\frac{x^2}{49} + \\frac{y^2}{40} = 1$',
      '$\\frac{x^2}{7} + \\frac{y^2}{3} = 1$',
      '$\\frac{x^2}{10} + \\frac{y^2}{49} = 1$'
    ],
    correctAnswer: 0,
    explanation: 'The major axis is along the $y$-axis with $a = 7$ and $c = 3$. Then $b^2 = a^2 - c^2 = 49 - 9 = 40$. The equation is $\\frac{x^2}{40} + \\frac{y^2}{49} = 1$.'
  },
  // [5]
  '6a98e87e910bb37b0e5586c0': {
    question: 'What is the eccentricity of the ellipse $\\frac{x^2}{100} + \\frac{y^2}{64} = 1$?',
    options: ['$0.6$', '$0.8$', '$0.36$', '$0.64$'],
    correctAnswer: 0,
    explanation: 'Here $a^2 = 100$ and $b^2 = 64$. Eccentricity $e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{64}{100}} = \\sqrt{\\frac{36}{100}} = \\frac{6}{10} = 0.6$.'
  },
  // [6]
  '6a98e87e910bb37b0e5586c1': {
    question: 'Find the center of the ellipse $\\frac{(x+3)^2}{16} + \\frac{(y-5)^2}{9} = 1$.',
    options: ['$(3, -5)$', '$(-3, 5)$', '$(16, 9)$', '$(-16, 9)$'],
    correctAnswer: 1,
    explanation: 'Comparing with the standard shifted form $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$, the center is $(h, k) = (-3, 5)$.'
  },
  // [7]
  '6a98e87e910bb37b0e5586c2': {
    question: 'Determine the semi-minor axis length of the ellipse $\\frac{x^2}{4} + \\frac{y^2}{25} = 1$.',
    options: ['$2$', '$4$', '$5$', '$25$'],
    correctAnswer: 0,
    explanation: 'Here $a^2 = 25$ (along $y$) and $b^2 = 4$ (along $x$). The semi-minor axis length is $b = \\sqrt{4} = 2$.'
  },
  // [8]
  '6a98e87e910bb37b0e5586c3': {
    question: 'What is the sum of the distances from any point on the ellipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ to its two foci?',
    options: ['$2$', '$3$', '$4$', '$6$'],
    correctAnswer: 3,
    explanation: 'By the focal property of an ellipse, the sum of focal distances to any point is equal to the length of the major axis $2a = 2\\sqrt{9} = 2(3) = 6$.'
  },
  // [9]
  '6a98e87e910bb37b0e5586c4': {
    question: 'Find the equation of the ellipse with center at $(2, 1)$, semi-major axis of length $5$ parallel to the $x$-axis, and semi-minor axis of length $3$.',
    options: [
      '$\\frac{(x-2)^2}{25} + \\frac{(y-1)^2}{9} = 1$',
      '$\\frac{(x-2)^2}{9} + \\frac{(y-1)^2}{25} = 1$',
      '$\\frac{(x+2)^2}{25} + \\frac{(y+1)^2}{9} = 1$',
      '$\\frac{(x-2)^2}{5} + \\frac{(y-1)^2}{3} = 1$'
    ],
    correctAnswer: 0,
    explanation: 'With center $(h, k) = (2, 1)$, $a = 5$, and $b = 3$, the equation is $\\frac{(x-2)^2}{25} + \\frac{(y-1)^2}{9} = 1$.'
  },
  // [10]
  '6a98e87e910bb37b0e5586c5': {
    question: 'Which of the following points lies on the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$?',
    options: ['$(4, 0)$', '$(0, 9)$', '$(2, \\sqrt{5})$', '$(3, 0)$'],
    correctAnswer: 0,
    explanation: 'Substituting $(4, 0)$ into the ellipse equation gives $\\frac{4^2}{16} + \\frac{0^2}{9} = 1 + 0 = 1$, so $(4, 0)$ lies on the ellipse.'
  },
  // [11]
  '6a98e881910bb37b0e5586d0': {
    question: 'What is the standard form of the equation of a parabola with vertex at the origin, opening upwards, and focal length of $3$ units?',
    options: ['$x^2 = 12y$', '$y^2 = 12x$', '$x^2 = -12y$', '$y^2 = -12x$'],
    correctAnswer: 0,
    explanation: 'A parabola with vertex at the origin opening upwards has equation $x^2 = 4ay$. Given $a = 3$, the equation is $x^2 = 12y$.'
  },
  // [12]
  '6a98e881910bb37b0e5586d1': {
    question: 'Find the standard equation of a parabola with vertex at $(2, -1)$ and directrix $x = -1$.',
    options: [
      '$(y+1)^2 = 12(x-2)$',
      '$(x-2)^2 = 12(y+1)$',
      '$y^2 = 12x$',
      '$(y-1)^2 = -12(x-2)$'
    ],
    correctAnswer: 0,
    explanation: 'The directrix is $x = -1$ and vertex is $(h, k) = (2, -1)$. The distance from directrix to vertex is $a = 2 - (-1) = 3$. Since the directrix is vertical and to the left of the vertex, the parabola opens to the right: $(y - k)^2 = 4a(x - h) \\implies (y + 1)^2 = 12(x - 2)$.'
  },
  // [13]
  '6a98e881910bb37b0e5586d2': {
    question: 'What is the standard equation of a parabola with vertex at the origin, opening downwards, and passing through the point $(4, -8)$?',
    options: ['$x^2 = -2y$', '$y^2 = -8x$', '$x^2 = 8y$', '$y^2 = 8x$'],
    correctAnswer: 0,
    explanation: 'Standard form opening downwards is $x^2 = -4ay$. Substituting $(4, -8)$: $16 = -4a(-8) = 32a \\implies 4a = 2$. Thus $x^2 = -2y$.'
  },
  // [14]
  '6a98e881910bb37b0e5586d3': {
    question: 'What is the standard form of the equation of a parabola with vertex at the origin and directrix $x = 5$?',
    options: ['$y^2 = -20x$', '$x^2 = -20y$', '$y^2 = 20x$', '$x^2 = 20y$'],
    correctAnswer: 0,
    explanation: 'Directrix $x = a = 5$ implies the parabola opens to the left: $y^2 = -4ax = -20x$.'
  },
  // [15]
  '6a98e881910bb37b0e5586d4': {
    question: 'The equation $(y-3)^2 = -16(x+2)$ represents a parabola. What are the coordinates of its vertex?',
    options: ['$(-2, 3)$', '$(-2, -3)$', '$(-3, 2)$', '$(2, -3)$'],
    correctAnswer: 0,
    explanation: 'Comparing with $(y - k)^2 = -4a(x - h)$, the vertex is $(h, k) = (-2, 3)$.'
  },
  // [16]
  '6a98e881910bb37b0e5586d5': {
    question: 'Which of the following is the equation of a parabola with vertex at $(1, 4)$, opening upwards, and with latus rectum $8$?',
    options: [
      '$(x-1)^2 = 8(y-4)$',
      '$(y-4)^2 = 8(x-1)$',
      '$(x-1)^2 = -8(y-4)$',
      '$(y-4)^2 = -8(x-1)$'
    ],
    correctAnswer: 0,
    explanation: 'A parabola opening upwards has standard equation $(x-h)^2 = 4a(y-k)$. For vertex $(1, 4)$ and latus rectum $4a = 8$, the equation is $(x-1)^2 = 8(y-4)$.'
  },
  // [17]
  '6a98e881910bb37b0e5586d6': {
    question: 'Determine the standard equation of a parabola with vertex at the origin and focus at $(0, -5)$.',
    options: ['$x^2 = 20y$', '$y^2 = -20x$', '$x^2 = -20y$', '$y^2 = 20x$'],
    correctAnswer: 2,
    explanation: 'Vertex is $(0, 0)$ and focus is $(0, -5)$, so the parabola opens downwards along the $y$-axis with $a = 5$: $x^2 = -4ay = -20y$.'
  },
  // [18]
  '6a98e881910bb37b0e5586d7': {
    question: 'What is the standard form of the equation for a parabola with vertex at $(-3, 1)$ and directrix $y = 5$?',
    options: [
      '$(x+3)^2 = -16(y-1)$',
      '$(x-3)^2 = 16(y+1)$',
      '$(y+3)^2 = 16(x-1)$',
      '$(x+3)^2 = 16(y-1)$'
    ],
    correctAnswer: 0,
    explanation: 'Vertex is $(h, k) = (-3, 1)$ and directrix is $y = 5$. Since the directrix is horizontal and above the vertex, the parabola opens downwards with $a = 5 - 1 = 4$: $(x - h)^2 = -4a(y - k) \\implies (x+3)^2 = -16(y-1)$.'
  },
  // [19]
  '6a98e881910bb37b0e5586d8': {
    question: 'Identify the standard equation of a parabola with vertex at the origin, opening to the right, and passing through the point $(8, 4)$.',
    options: ['$y^2 = 2x$', '$x^2 = 2y$', '$y^2 = 8x$', '$x^2 = 8y$'],
    correctAnswer: 0,
    explanation: 'Standard form: $y^2 = 4ax$. Substituting $(8, 4)$: $4^2 = 4a(8) \\implies 16 = 32a \\implies 4a = 2$. Thus $y^2 = 2x$.'
  },
  // [20]
  '6a98e881910bb37b0e5586d9': {
    question: 'What is the standard form of the equation of a parabola with vertex at $(5, -2)$ and focus at $(5, -4)$?',
    options: [
      '$(x-5)^2 = 8(y+2)$',
      '$(x-5)^2 = -8(y+2)$',
      '$(y+2)^2 = 8(x-5)$',
      '$(y+2)^2 = -8(x-5)$'
    ],
    correctAnswer: 1,
    explanation: 'The $x$-coordinates are the same, so the axis is vertical. The focus $(5, -4)$ is below the vertex $(5, -2)$, so the parabola opens downwards with $a = |-2 - (-4)| = 2$: $(x - 5)^2 = -4(2)(y - (-2)) \\implies (x-5)^2 = -8(y+2)$.'
  },
  // [21]
  '6a98e8bc910bb37b0e5586da': {
    question: 'Find the equation of the hyperbola with vertices at $(\\pm 5, 0)$ and foci at $(\\pm 7, 0)$.',
    options: [
      '$\\frac{x^2}{25} - \\frac{y^2}{24} = 1$',
      '$\\frac{x^2}{49} - \\frac{y^2}{24} = 1$',
      '$\\frac{x^2}{25} - \\frac{y^2}{49} = 1$',
      '$\\frac{x^2}{24} - \\frac{y^2}{25} = 1$'
    ],
    correctAnswer: 0,
    explanation: 'Here $a = 5$ and $c = 7$. For a horizontal hyperbola, $b^2 = c^2 - a^2 = 49 - 25 = 24$. The equation is $\\frac{x^2}{25} - \\frac{y^2}{24} = 1$.'
  },
  // [22]
  '6a98e8bc910bb37b0e5586db': {
    question: 'What is the center of the hyperbola given by the equation $\\frac{(x-2)^2}{16} - \\frac{(y+3)^2}{9} = 1$?',
    options: ['$(2, 3)$', '$(-2, 3)$', '$(2, -3)$', '$(-2, -3)$'],
    correctAnswer: 2,
    explanation: 'Comparing with $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$, the center is $(h, k) = (2, -3)$.'
  },
  // [23]
  '6a98e8bc910bb37b0e5586dc': {
    question: 'Identify the orientation of the transverse axis of the hyperbola $\\frac{y^2}{36} - \\frac{x^2}{16} = 1$.',
    options: ['Horizontal', 'Vertical', 'Along $y = x$', 'Along $y = -x$'],
    correctAnswer: 1,
    explanation: 'Since the $y^2$ term is positive, the transverse axis is vertical (along the $y$-axis).'
  },
  // [24]
  '6a98e8bc910bb37b0e5586dd': {
    question: 'Find the distance between the foci of the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$.',
    options: ['$5$', '$10$', '$25$', '$49$'],
    correctAnswer: 1,
    explanation: 'Here $a^2 = 9$ and $b^2 = 16$, so $c^2 = a^2 + b^2 = 25 \\implies c = 5$. The distance between the foci is $2c = 2(5) = 10$.'
  },
  // [25]
  '6a98e8bc910bb37b0e5586de': {
    question: 'What are the equations of the asymptotes for the hyperbola $\\frac{x^2}{100} - \\frac{y^2}{49} = 1$?',
    options: [
      '$y = \\pm \\frac{7}{10}x$',
      '$y = \\pm \\frac{10}{7}x$',
      '$y = \\pm \\frac{49}{100}x$',
      '$y = \\pm \\frac{100}{49}x$'
    ],
    correctAnswer: 0,
    explanation: 'For $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the asymptotes are $y = \\pm \\frac{b}{a}x$. Here $a = 10$ and $b = 7$, so $y = \\pm \\frac{7}{10}x$.'
  },
  // [26]
  '6a98e8bc910bb37b0e5586df': {
    question: 'Determine the eccentricity $e$ of the hyperbola $\\frac{x^2}{25} - \\frac{y^2}{144} = 1$.',
    options: [
      '$\\frac{13}{5}$',
      '$\\frac{5}{13}$',
      '$\\frac{12}{5}$',
      '$\\frac{5}{12}$'
    ],
    correctAnswer: 0,
    explanation: 'Here $a^2 = 25$ and $b^2 = 144$. Eccentricity $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{1 + \\frac{144}{25}} = \\sqrt{\\frac{169}{25}} = \\frac{13}{5}$.'
  },
  // [27]
  '6a98e8bc910bb37b0e5586e0': {
    question: 'A hyperbola has its center at the origin, vertices at $(0, \\pm 3)$, and foci at $(0, \\pm 5)$. What is its equation?',
    options: [
      '$\\frac{y^2}{9} - \\frac{x^2}{16} = 1$',
      '$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$',
      '$\\frac{y^2}{25} - \\frac{x^2}{9} = 1$',
      '$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$'
    ],
    correctAnswer: 0,
    explanation: 'Vertices and foci are on the $y$-axis, so the hyperbola is vertical: $\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1$.\nHere $a = 3$ and $c = 5 \\implies b^2 = c^2 - a^2 = 25 - 9 = 16$. Thus $\\frac{y^2}{9} - \\frac{x^2}{16} = 1$.'
  },
  // [28]
  '6a98e8bc910bb37b0e5586e1': {
    question: 'Find the conjugate axis length of the hyperbola $\\frac{(y+1)^2}{49} - \\frac{(x-2)^2}{25} = 1$.',
    options: ['$5$', '$10$', '$7$', '$14$'],
    correctAnswer: 1,
    explanation: 'This is a vertical hyperbola with transverse semi-axis $a = 7$ along $y$ and conjugate semi-axis $b = 5$ along $x$. The length of the conjugate axis is $2b = 2(5) = 10$.'
  },
  // [29]
  '6a98e8bc910bb37b0e5586e2': {
    question: 'Which of the following equations represents a hyperbola?',
    options: [
      '$x^2 + y^2 = 9$',
      '$4x^2 + 9y^2 = 36$',
      '$9x^2 - 4y^2 = 36$',
      '$y^2 = 16x$'
    ],
    correctAnswer: 2,
    explanation: 'Dividing $9x^2 - 4y^2 = 36$ by $36$ gives $\\frac{x^2}{4} - \\frac{y^2}{9} = 1$, which is the standard equation of a hyperbola.'
  },
  // [30]
  '6a98e8bc910bb37b0e5586e3': {
    question: 'If the vertices of a hyperbola are at $(\\pm 6, 0)$ and its asymptotes are $y = \\pm \\frac{4}{3}x$, find the equation of the hyperbola.',
    options: [
      '$\\frac{x^2}{36} - \\frac{y^2}{64} = 1$',
      '$\\frac{x^2}{64} - \\frac{y^2}{36} = 1$',
      '$\\frac{x^2}{36} - \\frac{y^2}{48} = 1$',
      '$\\frac{x^2}{48} - \\frac{y^2}{36} = 1$'
    ],
    correctAnswer: 0,
    explanation: 'Vertices at $(\\pm 6, 0)$ give $a = 6$. Asymptotes are $y = \\pm \\frac{b}{a}x = \\pm \\frac{4}{3}x \\implies \\frac{b}{6} = \\frac{4}{3} \\implies b = 8$. The equation is $\\frac{x^2}{36} - \\frac{y^2}{64} = 1$.'
  }
};

module.exports = { repairedGenuineConics };
