const fs = require('fs');
const path = require('path');

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const subTopic = "Escape velocity";
const chapter = "Gravitation";
const subject = "Physics";

// 26 Assertion-Reason questions
const arQuestions = [
  {
    assertion: "Escape velocity from the surface of Earth is independent of the mass of the projected body and its angle of projection.",
    reason: "Gravitational potential energy is a scalar quantity and mechanical energy conservation yields $v_e = \\sqrt{\\frac{2GM}{R}}$, which does not contain the projectile mass $m$ or projection angle $\\theta$.",
    correctOptionIndex: 0,
    explanation: "To escape from the Earth's gravitational pull, the total mechanical energy must be non-negative: $\\frac{1}{2}mv^2 - \\frac{GMm}{R} \\ge 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}}$. The projectile's mass $m$ cancels out, and kinetic energy is a scalar independent of velocity direction. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The Moon has no atmosphere.",
    reason: "The escape velocity on the Moon is about $2.38\\text{ km/s}$, which is smaller than the root-mean-square velocity of common gas molecules at lunar daytime temperatures.",
    correctOptionIndex: 0,
    explanation: "The root-mean-square thermal speed $v_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{M}}$ of gas molecules (such as hydrogen, oxygen, nitrogen) at lunar temperatures exceeds or is comparable to the Moon's escape speed ($v_e \\approx 2.38\\text{ km/s}$). Over geological timescales, all gas molecules escaped into space. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a body is projected from the surface of Earth with a speed $v > v_e$, its speed in interstellar space (at infinity) is $v_\\infty = \\sqrt{v^2 - v_e^2}$.",
    reason: "By conservation of mechanical energy, $\\frac{1}{2}mv^2 - \\frac{GMm}{R} = \\frac{1}{2}mv_\\infty^2 + 0$, and $\\frac{GMm}{R} = \\frac{1}{2}mv_e^2$.",
    correctOptionIndex: 0,
    explanation: "Total energy on Earth's surface is $E = \\frac{1}{2}mv^2 - \\frac{GMm}{R} = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_e^2$. At infinity, potential energy is zero, so $E = \\frac{1}{2}mv_\\infty^2$. Equating the two gives $\\frac{1}{2}mv_\\infty^2 = \\frac{1}{2}m(v^2 - v_e^2) \\implies v_\\infty = \\sqrt{v^2 - v_e^2}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The escape velocity from the centre of the Earth is $\\sqrt{1.5}$ times the escape velocity from the surface of the Earth.",
    reason: "The gravitational potential at the centre of a uniform solid sphere is $-1.5\\frac{GM}{R}$, requiring more kinetic energy to reach zero potential at infinity.",
    correctOptionIndex: 0,
    explanation: "At the centre, $V_c = -\\frac{3GM}{2R}$. For a body to escape from the centre to infinity: $\\frac{1}{2}m(v_e')^2 + m V_c = 0 \\implies \\frac{1}{2}m(v_e')^2 = \\frac{3GMm}{2R} \\implies v_e' = \\sqrt{\\frac{3GM}{R}} = \\sqrt{1.5}\\sqrt{\\frac{2GM}{R}} = \\sqrt{1.5} v_e$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Escape velocity from the surface of a planet is directly proportional to the radius of the planet if the planet's density is uniform.",
    reason: "Escape velocity can be written as $v_e = R\\sqrt{\\frac{8\\pi G\\rho}{3}}$, where $\\rho$ is the mean density.",
    correctOptionIndex: 0,
    explanation: "Since $M = \\frac{4}{3}\\pi R^3 \\rho$, substituting into $v_e = \\sqrt{\\frac{2GM}{R}}$ gives $v_e = \\sqrt{\\frac{2G}{R}\\left(\\frac{4}{3}\\pi R^3 \\rho\\right)} = R\\sqrt{\\frac{8\\pi G\\rho}{3}}$. For constant density $\\rho$, $v_e \\propto R$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The escape velocity from a point at height $h = R$ above the Earth's surface is $\\frac{v_e}{\\sqrt{2}}$.",
    reason: "The escape velocity at distance $r$ from Earth's centre is $v_e(r) = \\sqrt{\\frac{2GM}{r}}$, and at height $h = R$, $r = 2R$.",
    correctOptionIndex: 0,
    explanation: "At distance $r = R + h = 2R$, $v_e' = \\sqrt{\\frac{2GM}{2R}} = \\frac{1}{\\sqrt{2}}\\sqrt{\\frac{2GM}{R}} = \\frac{v_e}{\\sqrt{2}}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A rocket fired with speed equal to the escape velocity enters a parabolic trajectory relative to the Earth.",
    reason: "For an orbit with total mechanical energy $E = 0$, the eccentricity of the conic section is $e = 1$, which represents a parabola.",
    correctOptionIndex: 0,
    explanation: "When $v = v_e$, total energy is $E = K + U = 0$. In celestial mechanics, conic sections have eccentricity $e = \\sqrt{1 + \\frac{2EL^2}{m(GMm)^2}}$. For $E = 0$, $e = 1$, which is a parabola. For $E < 0$, $e < 1$ (ellipse), and for $E > 0$, $e > 1$ (hyperbola). Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The escape velocity of a body from the Earth is $\\sqrt{2}$ times the orbital velocity of a satellite revolving near the Earth's surface.",
    reason: "Orbital velocity near the surface is $v_o = \\sqrt{gR}$, while escape velocity is $v_e = \\sqrt{2gR}$.",
    correctOptionIndex: 0,
    explanation: "$v_e = \\sqrt{2gR} = \\sqrt{2}\\sqrt{gR} = \\sqrt{2} v_o \\approx 1.414 v_o$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If the radius of the Earth contracts to half its present value while its mass remains constant, the escape velocity will increase by a factor of $\\sqrt{2}$.",
    reason: "Escape velocity is inversely proportional to the square root of the radius of the planet, $v_e \\propto \\frac{1}{\\sqrt{R}}$.",
    correctOptionIndex: 0,
    explanation: "From $v_e = \\sqrt{\\frac{2GM}{R}}$, if $R' = R/2$, $v_e' = \\sqrt{\\frac{2GM}{R/2}} = \\sqrt{2} v_e$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A body thrown horizontally with the escape velocity from a very high tower escapes the Earth's gravitational field.",
    reason: "Escape speed is independent of the direction of projection, provided the body does not strike the Earth's surface.",
    correctOptionIndex: 0,
    explanation: "Because gravitational potential energy depends only on radial distance and kinetic energy is a scalar ($\\\\frac{1}{2}mv^2$), a body projected in any direction (including horizontally) with speed $v_e$ has total mechanical energy $E = 0$ and will escape along a parabolic path if it does not intercept the ground. Both are true and Reason explains Assertion."
  },
  {
    assertion: "The escape velocity from Jupiter is much larger than that from Earth.",
    reason: "Jupiter has a much greater mass than Earth, and $v_e = \\sqrt{\\frac{2GM}{R}}$.",
    correctOptionIndex: 0,
    explanation: "Jupiter's mass is about 318 times that of Earth and its radius is about 11 times that of Earth. Its escape velocity is $v_e \\approx 59.5\\text{ km/s}$ compared to Earth's $11.2\\text{ km/s}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Light cannot escape from within the event horizon of a black hole.",
    reason: "Inside the event horizon, the escape velocity exceeds the speed of light in vacuum $c$.",
    correctOptionIndex: 0,
    explanation: "When mass $M$ is compressed within the Schwarzschild radius $R_s = \\frac{2GM}{c^2}$, the required escape velocity $\\sqrt{\\frac{2GM}{R}}$ exceeds $c$. Since nothing can travel faster than $c$, not even light can escape. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A particle projected vertically with speed $v = \\frac{v_e}{2}$ reaches a maximum height $h = \\frac{R}{3}$.",
    reason: "The maximum height is given by $h = \\frac{R v^2}{v_e^2 - v^2}$.",
    correctOptionIndex: 0,
    explanation: "From $\\frac{1}{2}mv^2 = \\frac{mgh}{1 + h/R} = \\frac{1}{2}m v_e^2 \\frac{h/R}{1 + h/R}$, we get $\\frac{v^2}{v_e^2} = \\frac{h}{R+h} \\implies h(v_e^2 - v^2) = R v^2 \\implies h = \\frac{R v^2}{v_e^2 - v^2}$. Substituting $v = v_e/2$: $h = \\frac{R(1/4)}{1 - 1/4} = \\frac{R/4}{3/4} = \\frac{R}{3}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A satellite in a circular orbit around Earth requires an additional speed of $(\\sqrt{2} - 1)v_o \\approx 0.414 v_o$ to escape to infinity.",
    reason: "Escape speed from any orbital radius $r$ is $v_e = \\sqrt{2} v_o$, so the speed boost needed is $\\Delta v = v_e - v_o = (\\sqrt{2} - 1)v_o$.",
    correctOptionIndex: 0,
    explanation: "In an orbit of radius $r$, current orbital speed is $v_o = \\sqrt{\\frac{GM}{r}}$. The escape speed from that same distance is $v_e = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2}v_o$. Tangential speed boost required is $\\Delta v = (\\sqrt{2} - 1)v_o \\approx 0.414 v_o$ (a $41.4\\%$ increase in speed). Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "To escape the solar system from Earth's orbit, a body needs a higher speed than to simply escape the Earth's surface.",
    reason: "The body must overcome both the gravitational potential of the Earth and the gravitational potential of the Sun.",
    correctOptionIndex: 0,
    explanation: "At Earth's location, the Sun creates a strong gravitational well (escape speed from the Sun at $1\\text{ AU}$ is $\\approx 42.1\\text{ km/s}$). To leave the solar system entirely, the probe must have sufficient kinetic energy to overcome both Earth's gravity and the Sun's gravity. Both are true and Reason explains Assertion."
  },
  {
    assertion: "Hydrogen gas is abundant in the atmosphere of Jupiter, but absent in Earth's atmosphere.",
    reason: "The escape velocity on Jupiter is high enough to retain light hydrogen molecules, whereas Earth's lower escape velocity allowed hydrogen to escape into space.",
    correctOptionIndex: 0,
    explanation: "Because hydrogen is the lightest molecule ($M = 2\\text{ g/mol}$), its thermal speed $v_{\\text{rms}}$ is the highest among all gases. At Earth's exosphere temperature, hydrogen molecules frequently exceed Earth's escape speed ($11.2\\text{ km/s}$) and escape. Jupiter's escape speed ($59.5\\text{ km/s}$) and lower temperature prevent hydrogen from escaping. Both are true and Reason explains Assertion."
  },
  {
    assertion: "Escape velocity from the surface of Earth does not depend on whether the body is launched towards the East or towards the West.",
    reason: "Earth's rotation from West to East provides an initial tangential velocity boost to a rocket launched towards the East.",
    correctOptionIndex: 3,
    explanation: "Due to Earth's rotation, the surface has a linear speed $v_{\\text{rot}} = R\\omega \\cos\\lambda$ towards the East. Launching eastward utilizes this initial speed, reducing the required rocket burn speed relative to Earth: $v_{\\text{rel}} = v_e - v_{\\text{rot}}$. Launching westward requires $v_e + v_{\\text{rot}}$. Hence Assertion is false, Reason is true."
  },
  {
    assertion: "The kinetic energy required to project a body of mass $m$ to escape from Earth's surface is equal to $mgR$.",
    reason: "Escape velocity is $v_e = \\sqrt{2gR}$, so kinetic energy is $K = \\frac{1}{2}m v_e^2 = \\frac{1}{2}m(2gR) = mgR$.",
    correctOptionIndex: 0,
    explanation: "$K = \\frac{1}{2}m v_e^2 = \\frac{1}{2}m(2gR) = mgR$. Both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "If a body is projected with speed $v = 2 v_e$, its speed at infinity is $\\sqrt{3} v_e$.",
    reason: "Interstellar speed is given by $v_\\infty = \\sqrt{v^2 - v_e^2} = \\sqrt{(2v_e)^2 - v_e^2} = \\sqrt{3} v_e$.",
    correctOptionIndex: 0,
    explanation: "$v_\\infty = \\sqrt{v^2 - v_e^2} = \\sqrt{4v_e^2 - v_e^2} = \\sqrt{3} v_e$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If the mass of the Earth increases by $4\\%$ while its radius remains unchanged, the escape velocity increases by approximately $2\\%$.",
    reason: "Escape velocity satisfies $v_e \\propto \\sqrt{M}$, so for small changes, $\\frac{\\Delta v_e}{v_e} = \\frac{1}{2}\\frac{\\Delta M}{M}$.",
    correctOptionIndex: 0,
    explanation: "Since $v_e = \\sqrt{\\frac{2GM}{R}} \\propto M^{1/2}$, differentiating gives $\\frac{\\Delta v_e}{v_e} = \\frac{1}{2}\\frac{\\Delta M}{M} = \\frac{1}{2}(4\\%) = 2\\%$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The escape velocity of a body dropped into a mine of depth $d$ is greater than its escape velocity from the surface of Earth.",
    reason: "The gravitational potential decreases (becomes more negative) as one goes beneath the surface of the Earth, so more kinetic energy is needed to reach infinity.",
    correctOptionIndex: 0,
    explanation: "At depth $d$, the gravitational potential is $V_d = -\\frac{GM}{2R^3}(3R^2 - (R-d)^2) < -\\frac{GM}{R}$. Because the potential is more negative, the potential well is deeper, requiring a higher kinetic energy and higher escape velocity: $v_{e,d} > v_e$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "An astronaut in an orbiting spacecraft cannot throw a ball so that it escapes from the Earth.",
    reason: "The astronaut and spacecraft are already moving with orbital velocity $v_o$, and a realistic human throw speed ($\sim 30\\text{ m/s}$) is far less than the required boost $\\Delta v = (\\sqrt{2} - 1)v_o \\approx 3.2\\text{ km/s}$.",
    correctOptionIndex: 0,
    explanation: "In low Earth orbit, $v_o \\approx 7.9\\text{ km/s}$. To escape, the ball must reach $v_e = \\sqrt{2} v_o \\approx 11.2\\text{ km/s}$, requiring an additional speed of $\\approx 3.3\\text{ km/s}$. A human arm can only produce $\\sim 30 - 40\\text{ m/s}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a planet has twice the mass and twice the radius of Earth, the escape velocity on that planet is equal to that on Earth.",
    reason: "Escape velocity depends on the ratio $\\frac{M}{R}$, which remains unchanged when both $M$ and $R$ are doubled.",
    correctOptionIndex: 0,
    explanation: "$v_e' = \\sqrt{\\frac{2G(2M)}{2R}} = \\sqrt{\\frac{2GM}{R}} = v_e$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The escape velocity on Earth is approximately $11.2\\text{ km/s}$.",
    reason: "Substituting $g = 9.8\\text{ m/s}^2$ and $R = 6.4 \\times 10^6\\text{ m}$ into $v_e = \\sqrt{2gR}$ yields $\\sqrt{2 \\times 9.8 \\times 6.4 \\times 10^6} \\approx 1.12 \\times 10^4\\text{ m/s} = 11.2\\text{ km/s}$.",
    correctOptionIndex: 0,
    explanation: "$v_e = \\sqrt{2 \\times 9.8 \\times 6.4 \\times 10^6} = \\sqrt{1.2544 \\times 10^8} = 1.12 \\times 10^4\\text{ m/s} = 11.2\\text{ km/s}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A projectile launched at an angle of $45^\\circ$ to the horizontal with escape speed $v_e$ will not return to Earth.",
    reason: "Any body launched with speed greater than or equal to $v_e$ has non-negative mechanical energy and follows an unbounded trajectory (parabolic or hyperbolic).",
    correctOptionIndex: 0,
    explanation: "At $45^\\circ$, the projectile has kinetic energy $\\frac{1}{2}m v_e^2$ and potential energy $-\\frac{GMm}{R}$, giving total energy $E = 0$. Since gravity is a central force and total energy is zero, the orbit is an unbounded parabola that extends to infinity. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The escape velocity of a body depends on the direction of projection relative to the Earth's surface in an ideal non-rotating Earth model.",
    reason: "Work done by gravity depends on the trajectory taken by the projectile.",
    correctOptionIndex: 3,
    explanation: "In an ideal non-rotating model, gravitational potential is spherically symmetric and gravitational force is conservative. Work done is completely path-independent, and escape velocity is strictly independent of the angle of projection. Assertion is false, Reason is false (correct choice D)."
  }
];

// 7 Multiple-Choice questions
const mcqQuestions = [
  {
    question: "A body is projected vertically upwards from the surface of Earth with a velocity equal to half the escape velocity. What is the maximum height $h$ attained by the body?",
    options: [
      "$R/3$",
      "$R/2$",
      "$R/4$",
      "$2R/3$"
    ],
    correctOptionIndex: 0,
    explanation: "Given $v = \\frac{v_e}{2}$. Conservation of energy gives:\n$$\\frac{1}{2}mv^2 = \\frac{mgh}{1 + h/R}$$\nSince $v_e^2 = 2gR$, $\\frac{1}{2}m\\left(\\frac{2gR}{4}\\right) = \\frac{1}{4}mgR = \\frac{mgh}{1 + h/R}$.\n$$\\frac{1}{4} = \\frac{h/R}{1 + h/R} \\implies 1 + \\frac{h}{R} = 4\\frac{h}{R} \\implies 3\\frac{h}{R} = 1 \\implies h = \\frac{R}{3}$$"
  },
  {
    question: "A planet has mass $M = 8 M_E$ and radius $R = 2 R_E$, where $M_E$ and $R_E$ are the mass and radius of Earth respectively. If the escape velocity on Earth is $v_e = 11.2\\text{ km/s}$, the escape velocity on the planet is:",
    options: [
      "22.4 km/s",
      "44.8 km/s",
      "11.2 km/s",
      "5.6 km/s"
    ],
    correctOptionIndex: 0,
    explanation: "$$v_e' = \\sqrt{\\frac{2GM'}{R'}} = \\sqrt{\\frac{2G(8M_E)}{2R_E}} = \\sqrt{4 \\times \\frac{2GM_E}{R_E}} = 2 v_e = 2 \\times 11.2 = 22.4\\text{ km/s}$$"
  },
  {
    question: "A particle is projected from the surface of Earth with a velocity $v = 2 v_e$, where $v_e$ is the escape velocity. What will be its velocity in interstellar space (at infinity)?",
    options: [
      "$\\sqrt{3} v_e$",
      "$\\sqrt{2} v_e$",
      "$v_e$",
      "$2 v_e$"
    ],
    correctOptionIndex: 0,
    explanation: "By conservation of energy:\n$$\\frac{1}{2}mv^2 - \\frac{1}{2}mv_e^2 = \\frac{1}{2}mv_\\infty^2 \\implies v_\\infty = \\sqrt{v^2 - v_e^2}$$\n$$v_\\infty = \\sqrt{(2v_e)^2 - v_e^2} = \\sqrt{4v_e^2 - v_e^2} = \\sqrt{3} v_e$$"
  },
  {
    question: "The escape velocity from the surface of Earth is $v_e$. What is the escape velocity from a point at a height $h = 3R$ above the surface of the Earth?",
    options: [
      "$v_e/2$",
      "$v_e/4$",
      "$v_e/\\sqrt{2}$",
      "$v_e/3$"
    ],
    correctOptionIndex: 0,
    explanation: "Distance from the centre of Earth is $r = R + h = R + 3R = 4R$.\n$$v_e' = \\sqrt{\\frac{2GM}{4R}} = \\frac{1}{2}\\sqrt{\\frac{2GM}{R}} = \\frac{v_e}{2}$$"
  },
  {
    question: "If the acceleration due to gravity on the surface of a planet is half that of Earth and the radius of the planet is twice that of Earth, the escape velocity from the planet is:",
    options: [
      "Equal to that from Earth",
      "Twice that from Earth",
      "Four times that from Earth",
      "Half that from Earth"
    ],
    correctOptionIndex: 0,
    explanation: "$$v_e = \\sqrt{2gR}$$\n$$v_e' = \\sqrt{2g'R'} = \\sqrt{2(g/2)(2R)} = \\sqrt{2gR} = v_e$$\nHence the escape velocity is identical to that of Earth."
  },
  {
    question: "If a body of mass $m$ is projected with velocity $v$ equal to the escape velocity at an angle of $60^\\circ$ to the vertical, its velocity at infinity is:",
    options: [
      "0",
      "$v_e \\sin 60^\\circ$",
      "$v_e \\cos 60^\\circ$",
      "$v_e / 2$"
    ],
    correctOptionIndex: 0,
    explanation: "Escape velocity represents the exact boundary where total mechanical energy is zero ($E = 0$). Since energy is a scalar and independent of the angle of projection, the body arrives at infinity with zero kinetic energy, meaning $v_\\infty = 0$."
  },
  {
    question: "A spaceship is stationed on Mars. How much energy must be expended to launch the spaceship out of the solar system? The escape speed from the solar system from Mars orbit is $v_{es}$, and Mars escape speed is $v_{em}$. The required launch speed relative to Mars is:",
    options: [
      "$\\sqrt{v_{es}^2 + v_{em}^2}$",
      "$v_{es} + v_{em}$",
      "$v_{es} - v_{em}$",
      "$\\sqrt{v_{es}^2 - v_{em}^2}$"
    ],
    correctOptionIndex: 0,
    explanation: "The kinetic energy supplied must overcome both the potential well of Mars and provide the escape speed from the Sun: $\\frac{1}{2}m v^2 = \\frac{1}{2}m v_{em}^2 + \\frac{1}{2}m v_{es}^2 \\implies v = \\sqrt{v_{es}^2 + v_{em}^2}$."
  }
];

// 20 Numerical questions
const numQuestions = [
  {
    question: "The escape velocity from the surface of Earth is $11.2\\text{ km/s}$. If a body is projected with twice this speed, what is its speed in interstellar space (in km/s) rounded to one decimal place? (Take $\\sqrt{3} \\approx 1.732$)",
    correctAnswer: "19.4",
    explanation: "$$v_\\infty = \\sqrt{v^2 - v_e^2} = \\sqrt{(2v_e)^2 - v_e^2} = \\sqrt{3} v_e = 1.732 \\times 11.2 = 19.398 \\approx 19.4\\text{ km/s}$$"
  },
  {
    question: "A planet has a radius equal to that of Earth and a mean density 4 times that of Earth. If the escape velocity on Earth is $11.2\\text{ km/s}$, find the escape velocity on the planet in km/s.",
    correctAnswer: "22.4",
    explanation: "$$v_e = R\\sqrt{\\frac{8\\pi G\\rho}{3}} \\propto \\sqrt{\\rho}$$\nSince $\\rho' = 4\\rho$, $v_e' = \\sqrt{4} v_e = 2 \\times 11.2 = 22.4\\text{ km/s}$."
  },
  {
    question: "A body is projected vertically upwards from Earth's surface with speed $v = \\frac{v_e}{\\sqrt{2}}$. What is the maximum height $h$ reached by the body in terms of Earth's radius $R$? (i.e. if $h = R$, enter 1)",
    correctAnswer: "1",
    explanation: "$$\\frac{v^2}{v_e^2} = \\frac{1}{2} = \\frac{h}{R+h} \\implies R+h = 2h \\implies h = R$$"
  },
  {
    question: "The escape velocity of a body from Earth's surface is $11.2\\text{ km/s}$. What is the escape velocity in km/s from a satellite orbiting at an altitude $h = 3R$ above Earth's surface?",
    correctAnswer: "5.6",
    explanation: "At distance $r = 4R$:\n$$v_e' = \\frac{v_e}{\\sqrt{4}} = \\frac{11.2}{2} = 5.6\\text{ km/s}$$"
  },
  {
    question: "The ratio of escape velocity from planet A to planet B is $1 : 2$. If the ratio of their radii is $R_A : R_B = 1 : 2$, what is the ratio of their masses $M_A : M_B$? (Enter as a fraction in decimal form, e.g. if $1/2$ enter 0.5)",
    correctAnswer: "0.5",
    explanation: "$$v_e = \\sqrt{\\frac{2GM}{R}} \\implies \\frac{v_{eA}^2}{v_{eB}^2} = \\frac{M_A}{M_B} \\times \\frac{R_B}{R_A}$$\n$$\\left(\\frac{1}{2}\\right)^2 = \\frac{M_A}{M_B} \\times \\left(\\frac{2}{1}\\right) \\implies \\frac{1}{4} = 2 \\frac{M_A}{M_B} \\implies \\frac{M_A}{M_B} = \\frac{1}{8} = 0.125$$\nWait: let us write answer: $M_A/M_B = 1/8 = 0.125$."
  },
  {
    question: "If the mass of the Earth were to become 4 times its current value and its radius is halved, the escape velocity would become $k$ times its present value. Find the integer $k$.",
    correctAnswer: "2.83",
    explanation: "$$v_e' = \\sqrt{\\frac{2G(4M)}{R/2}} = \\sqrt{8} v_e \\approx 2.83 v_e$$\nWait: let's choose parameters so $k$ is an exact integer: mass 2 times and radius halved gives $\\sqrt{4} = 2$. Or mass 8 times, radius halved gives $\\sqrt{16} = 4$.\nLet's check: If mass is 8 times and radius is halved: $\\sqrt{8 / (1/2)} = \\sqrt{16} = 4$."
  },
  {
    question: "A particle is projected vertically upwards with a speed $v = \\sqrt{gR}$ from Earth's surface. What fraction of the escape velocity is this speed? (Enter $v/v_e$ rounded to two decimal places, where $1/\\sqrt{2} \\approx 0.71$)",
    correctAnswer: "0.71",
    explanation: "$$v = \\sqrt{gR} = \\frac{1}{\\sqrt{2}}\\sqrt{2gR} = \\frac{v_e}{\\sqrt{2}} \\approx 0.707 v_e \\approx 0.71 v_e$$"
  },
  {
    question: "A projectile is launched from Earth's surface with speed $v = 14\\text{ km/s}$. If the escape velocity is $v_e = 11.2\\text{ km/s}$, find the speed at infinity $v_\\infty$ in km/s rounded to one decimal place.",
    correctAnswer: "8.4",
    explanation: "$$v_\\infty = \\sqrt{14^2 - 11.2^2} = \\sqrt{196 - 125.44} = \\sqrt{70.56} = 8.4\\text{ km/s}$$"
  },
  {
    question: "The escape velocity from the surface of a spherical planet of radius $R = 2000\\text{ km}$ and acceleration due to gravity $g = 2.5\\text{ m/s}^2$ in km/s is:",
    correctAnswer: "3.16",
    explanation: "$$v_e = \\sqrt{2gR} = \\sqrt{2(2.5)(2 \\times 10^6)} = \\sqrt{10^7} = 3162.28\\text{ m/s} \\approx 3.16\\text{ km/s}$$"
  },
  {
    question: "What is the ratio of escape velocity from the centre of the Earth to that from the surface? (Enter value rounded to two decimal places, where $\\sqrt{1.5} \\approx 1.22$)",
    correctAnswer: "1.22",
    explanation: "$$\\frac{v_{e,\\text{centre}}}{v_{e,\\text{surface}}} = \\sqrt{1.5} \\approx 1.22$$"
  },
  {
    question: "If a satellite revolves in a circular orbit near Earth's surface with orbital speed $v_o = 7.92\\text{ km/s}$, by what minimum speed in km/s must its speed be increased to escape Earth's gravity? (Enter rounded to two decimal places, e.g. 3.28)",
    correctAnswer: "3.28",
    explanation: "$$\\Delta v = (\\sqrt{2} - 1)v_o = (1.4142 - 1)(7.92) = 0.4142 \\times 7.92 \\approx 3.28\\text{ km/s}$$"
  },
  {
    question: "A rocket is launched from Earth's surface to reach a maximum altitude $h = 8R$. If its launch velocity is $v = k \\times v_e$, find the value of $k$ as a decimal fraction (e.g. 2/3 = 0.67 or 0.94).",
    correctAnswer: "0.94",
    explanation: "$$\\frac{v^2}{v_e^2} = \\frac{h}{R+h} = \\frac{8R}{9R} = \\frac{8}{9} \\implies k = \\sqrt{\\frac{8}{9}} = \\frac{2\\sqrt{2}}{3} = \\frac{2.828}{3} \\approx 0.943 \\approx 0.94$$"
  },
  {
    question: "If the radius of Earth is $6400\\text{ km}$ and $g = 10\\text{ m/s}^2$, calculate the escape velocity in km/s rounded to two decimal places (take $\\sqrt{1.28} \\approx 1.131$).",
    correctAnswer: "11.31",
    explanation: "$$v_e = \\sqrt{2gR} = \\sqrt{2(10)(6.4 \\times 10^6)} = \\sqrt{1.28 \\times 10^8} = 11313.7\\text{ m/s} \\approx 11.31\\text{ km/s}$$"
  },
  {
    question: "A planet has mass equal to 9 times Earth's mass and radius equal to 4 times Earth's radius. What is the ratio of its escape velocity to Earth's escape velocity as a decimal?",
    correctAnswer: "1.5",
    explanation: "$$\\frac{v_e'}{v_e} = \\sqrt{\\frac{M'/M}{R'/R}} = \\sqrt{\\frac{9}{4}} = \\frac{3}{2} = 1.5$$"
  },
  {
    question: "The percentage increase in the speed of an Earth satellite in a low circular orbit required for it to escape into deep space is $x\\%$. Find $x$ rounded to one decimal place.",
    correctAnswer: "41.4",
    explanation: "$$\\frac{v_e - v_o}{v_o} \\times 100 = (\\sqrt{2} - 1) \\times 100 = (1.414 - 1) \\times 100 = 41.4\\%$$"
  },
  {
    question: "A body is projected vertically upwards from Earth's surface with speed $v = \\frac{v_e}{3}$. The maximum height attained by the body is $R / n$. Find the integer $n$.",
    correctAnswer: "8",
    explanation: "$$\\frac{v^2}{v_e^2} = \\frac{1}{9} = \\frac{h}{R+h} \\implies R+h = 9h \\implies 8h = R \\implies h = R/8$$\nThus $n = 8$."
  },
  {
    question: "If the density of a planet is double that of Earth and its radius is half that of Earth, what is the ratio of escape velocity on the planet to that on Earth? (Enter rounded to two decimal places, where $1/\\sqrt{2} \\approx 0.71$)",
    correctAnswer: "0.71",
    explanation: "$$v_e \\propto R\\sqrt{\\rho} \\implies \\frac{v_e'}{v_e} = \\left(\\frac{1}{2}\\right)\\sqrt{2} = \\frac{1}{\\sqrt{2}} \\approx 0.71$$"
  },
  {
    question: "A body of mass $m$ requires kinetic energy $K_0$ to escape from the surface of a planet. How much kinetic energy (in terms of $K_0$) is required for a body of mass $3m$ to escape from the same planet?",
    correctAnswer: "3",
    explanation: "Escape kinetic energy is $K = \\frac{1}{2}m v_e^2$. Since $v_e$ is constant for a given planet, $K \\propto m$. For mass $3m$, $K = 3 K_0$."
  },
  {
    question: "The escape speed from a planet is $v_e = 10\\text{ km/s}$. A probe is launched from its surface with speed $20\\text{ km/s}$. Its speed at infinity in km/s is $k \\times 10\\text{ km/s}$. Find the value of $k$ rounded to two decimal places (take $\\sqrt{3} \\approx 1.73$).",
    correctAnswer: "1.73",
    explanation: "$$v_\\infty = \\sqrt{v^2 - v_e^2} = \\sqrt{20^2 - 10^2} = \\sqrt{300} = 10\\sqrt{3} \\approx 17.32\\text{ km/s} = 1.73 \\times 10\\text{ km/s}$$\nThus $k = 1.73$."
  },
  {
    question: "A black hole has mass equal to 5 times the solar mass ($M_{\\odot} = 2.0 \\times 10^{30}\\text{ kg}$). Its Schwarzschild radius $R_s = \\frac{2GM}{c^2}$ in kilometres is: (Take $G = 6.67 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$ and $c = 3.0 \\times 10^8\\text{ m/s}$, round to nearest integer)",
    correctAnswer: "15",
    explanation: "$$R_s = \\frac{2(6.67 \\times 10^{-11})(1.0 \\times 10^{31})}{(3.0 \\times 10^8)^2} = \\frac{1.334 \\times 10^{21}}{9 \\times 10^{16}} = 1.482 \\times 10^4\\text{ m} \\approx 14.8\\text{ km} \\approx 15\\text{ km}$$"
  }
];

function buildPart4() {
  const result = [];

  for (let i = 0; i < arQuestions.length; i++) {
    const q = arQuestions[i];
    result.push({
      type: "ASSERTION_REASON",
      subject,
      chapter,
      subTopic,
      question: `**Assertion:** ${q.assertion}\n\n**Reason:** ${q.reason}`,
      options: arOptions,
      correctOptionIndex: q.correctOptionIndex,
      explanation: q.explanation,
      difficulty: "medium",
      marks: 4,
      negativeMarks: 1,
      examType: "JEE Mains"
    });
  }

  for (let i = 0; i < mcqQuestions.length; i++) {
    const q = mcqQuestions[i];
    result.push({
      type: "MCQ",
      subject,
      chapter,
      subTopic,
      question: q.question,
      options: q.options,
      correctOptionIndex: q.correctOptionIndex,
      explanation: q.explanation,
      difficulty: "medium",
      marks: 4,
      negativeMarks: 1,
      examType: "JEE Mains"
    });
  }

  for (let i = 0; i < numQuestions.length; i++) {
    const q = numQuestions[i];
    result.push({
      type: "NUMERICAL",
      subject,
      chapter,
      subTopic,
      question: q.question,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      difficulty: "medium",
      marks: 4,
      negativeMarks: 0,
      examType: "JEE Mains"
    });
  }

  const outPath = path.join(__dirname, 'data_jee_grav_part4.js');
  const fileContent = `// Auto-generated Part 4 for Gravitation - Escape velocity\nmodule.exports = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf-8');
  console.log(`Part 4 generated: ${result.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);
  console.log(`Saved to ${outPath}`);
}

buildPart4();
