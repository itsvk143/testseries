import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db('testseries');

console.log("=== UPDATING GRAVITATION TESTS 4, 5, AND 6 ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 4: ESCAPE VELOCITY
// =========================================================================
const test4DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-GRAV-EV-001",
    question: "Refer to the given trajectories of bodies projected with different initial speeds from the surface of the Earth. If $v_o = \\sqrt{gR}$ is the orbital speed near the surface, which speed corresponds to the parabolic escape trajectory that allows a projectile to just overcome Earth's gravitational pull?",
    options: [
      "$v = \\sqrt{2gR}$",
      "$v = \\sqrt{gR}$",
      "$v = \\sqrt{\\frac{gR}{2}}$",
      "$v = 2\\sqrt{gR}$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/gravitation/test4_q1_escape_trajectory.svg",
    explanation: "For a body to just escape the gravitational attraction of Earth to infinity, its total mechanical energy at the surface must be at least zero ($E \\ge 0$):\n$$\\frac{1}{2} m v_e^2 - \\frac{G M m}{R} = 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$$\nAt this exact escape speed ($v = v_e$), the trajectory of the escaping projectile is a parabola with the Earth at its focus. For $v < v_e$, the path is an ellipse (or circle); for $v > v_e$, the trajectory is a hyperbola."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-GRAV-EV-002",
    question: "A rocket is launched from a platform situated at an altitude $h = R$ above the Earth's surface (where $R$ is the Earth's radius), as illustrated in the figure. If the escape velocity from Earth's surface is $v_e = 11.2 \\text{ km s}^{-1}$, the escape velocity from this altitude is:",
    options: [
      "$\\frac{v_e}{\\sqrt{2}} \\approx 7.92 \\text{ km s}^{-1}$",
      "$\\frac{v_e}{2} = 5.6 \\text{ km s}^{-1}$",
      "$\\sqrt{2} \\, v_e \\approx 15.8 \\text{ km s}^{-1}$",
      "$2 v_e = 22.4 \\text{ km s}^{-1}$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test4_q2_escape_from_height_h.svg",
    explanation: "At an altitude $h$ above the Earth's surface, the distance from the center is $r = R + h$. By conservation of energy:\n$$\\frac{1}{2} m v_e(h)^2 - \\frac{GMm}{R+h} = 0 \\implies v_e(h) = \\sqrt{\\frac{2GM}{R+h}} = \\sqrt{\\frac{2GM}{R}} \\sqrt{\\frac{R}{R+h}} = v_e(0) \\sqrt{\\frac{R}{R+h}}$$\nSubstituting $h = R$:\n$$v_e(R) = v_e \\sqrt{\\frac{R}{2R}} = \\frac{v_e}{\\sqrt{2}} = \\frac{11.2}{\\sqrt{2}} \\approx 7.92 \\text{ km s}^{-1}$$"
  },
  {
    index: 2,
    commercialId: "NEET-PHY-GRAV-EV-003",
    question: "The graph shows the Maxwell-Boltzmann molecular speed distribution of an atmospheric gas compared with the escape velocities of the Moon and the Earth. Why does the Moon lack an atmosphere whereas the Earth retains abundant nitrogen and oxygen?",
    options: [
      "The root-mean-square speed $v_{\\text{rms}}$ of gas molecules on the Moon exceeds one-fifth of its escape velocity ($v_{\\text{rms}} > \\frac{1}{5} v_e^{\\text{Moon}}$), allowing rapid escape",
      "The Moon's gravitational field is zero at its surface",
      "The temperature on the Moon is absolute zero, so all gases freeze into solid rock",
      "The Moon's escape velocity is greater than the speed of light"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test4_q3_atmosphere_retention.svg",
    explanation: "The escape velocity on the Moon is only $v_e^{\\text{Moon}} \\approx 2.38 \\text{ km s}^{-1}$ due to its smaller mass and radius. The root-mean-square thermal velocity of gas molecules at daytime lunar temperature (around $370 \\text{ K}$) is of the order of $0.5\\text{--}1.5 \\text{ km s}^{-1}$, which is greater than $\\frac{1}{5}$ to $\\frac{1}{6}$ of $v_e^{\\text{Moon}}$. Over astronomical timescales, Maxwellian tail molecules readily escape into space, dissipating any lunar atmosphere. On Earth, $v_e = 11.2 \\text{ km s}^{-1} \\gg v_{\\text{rms}}$, so gases remain permanently bound."
  }
];

const test4ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-GRAV-EV-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The escape speed of a body from the surface of the Earth is independent of the mass of the projected body and its angle of projection (provided $\\theta \\neq 0$).\nReason (R): Escape speed is derived from mechanical energy conservation ($\\frac{1}{2} m v_e^2 - \\frac{GMm}{R} = 0$), in which the mass $m$ of the body cancels out and kinetic energy is a scalar quantity.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "The energy equation $\\frac{1}{2} m v_e^2 = \\frac{GMm}{R}$ yields $v_e = \\sqrt{\\frac{2GM}{R}}$, which does not contain $m$ or any projection angle $\\theta$. As long as the trajectory does not intersect the Earth's surface, the body escapes regardless of direction. Both (A) and (R) are true and (R) is the correct explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-GRAV-EV-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If a projectile is fired from the Earth's surface with a speed $v = 2 v_e$, its asymptotic residual speed in interstellar space far away from Earth is $\\sqrt{3} \\, v_e$.\nReason (R): In outer space where gravitational potential energy vanishes ($U_\\infty = 0$), energy conservation gives $\\frac{1}{2} m v_\\infty^2 = \\frac{1}{2} m v^2 - \\frac{1}{2} m v_e^2 \\implies v_\\infty = \\sqrt{v^2 - v_e^2}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "Total energy conservation: $E_i = E_f \\implies \\frac{1}{2} m v^2 - \\frac{GMm}{R} = \\frac{1}{2} m v_\\infty^2 + 0$. Since $\\frac{GMm}{R} = \\frac{1}{2} m v_e^2$, we have $\\frac{1}{2} m v_\\infty^2 = \\frac{1}{2} m v^2 - \\frac{1}{2} m v_e^2 \\implies v_\\infty = \\sqrt{v^2 - v_e^2}$. For $v = 2v_e$, $v_\\infty = \\sqrt{(2v_e)^2 - v_e^2} = \\sqrt{3} \\, v_e$. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-GRAV-EV-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A space rocket must be propelled with an initial launch velocity of at least $11.2 \\text{ km s}^{-1}$ at the Earth's surface to reach outer space.\nReason (R): The escape velocity from the surface of Earth is $11.2 \\text{ km s}^{-1}$ for an unpowered, ballistic projectile.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Medium",
    explanation: "Assertion (A) is false: a rocket carries its own fuel and produces continuous thrust. It can escape Earth at any constant low speed (even $1 \\text{ m s}^{-1}$) as long as its engine continuously supplies upward thrust overcoming gravity. Reason (R) is true: $v_e = 11.2 \\text{ km s}^{-1}$ is the required speed only for a ballistic projectile that receives all its energy instantaneously at launch with no subsequent propulsion."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-GRAV-EV-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the radius of the Earth were to contract to half its present value while its mass remained strictly constant, the escape velocity from its surface would increase by a factor of $\\sqrt{2}$.\nReason (R): Escape velocity is inversely proportional to the square root of the planet's radius ($v_e = \\sqrt{\\frac{2GM}{R}}$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Since $v_e = \\sqrt{\\frac{2GM}{R}}$, if $R' = R/2$ and $M$ is constant, $v_e' = \\sqrt{\\frac{2GM}{R/2}} = \\sqrt{2} \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} \\, v_e$. Both (A) and (R) are true and (R) is the exact mathematical explanation of (A)."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-GRAV-EV-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a body of mass $M$ compressed into a sphere of radius less than its Schwarzschild radius $R_s = \\frac{2GM}{c^2}$, not even light can escape from its surface, creating a black hole.\nReason (R): Setting the Newtonian escape velocity formula equal to the speed of light $c = \\sqrt{\\frac{2GM}{R_s}}$ yields $R_s = \\frac{2GM}{c^2}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "Setting the escape speed equal to the speed of light $c$: $c = \\sqrt{\\frac{2GM}{R_s}} \\implies c^2 = \\frac{2GM}{R_s} \\implies R_s = \\frac{2GM}{c^2}$. When the radius is smaller than $R_s$, the escape velocity exceeds the speed of light in vacuum, so no signal or particle can escape to infinity. Both (A) and (R) are true, and (R) correctly explains (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-GRAV-EV-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The escape velocity from the surface of a planet having twice the density and twice the radius of Earth is $2\\sqrt{2}$ times the escape velocity of Earth.\nReason (R): In terms of mean density $\\rho$ and radius $R$, escape velocity is $v_e = R \\sqrt{\\frac{8\\pi G \\rho}{3}}$, which is directly proportional to $R \\sqrt{\\rho}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Expressing mass in terms of density: $M = \\frac{4}{3} \\pi R^3 \\rho$. Substituting into $v_e$:\n$$v_e = \\sqrt{\\frac{2G}{R} \\left(\\frac{4}{3} \\pi R^3 \\rho\\right)} = R \\sqrt{\\frac{8\\pi G \\rho}{3}} \\propto R \\sqrt{\\rho}$$\nIf $R' = 2R$ and $\\rho' = 2\\rho$, then $v_e' = (2R) \\sqrt{2\\rho} = 2\\sqrt{2} \\, (R\\sqrt{\\rho}) = 2\\sqrt{2} \\, v_e$. Both (A) and (R) are true and (R) is the correct mathematical explanation."
  }
];

// =========================================================================
// TEST 5: ACCELERATION DUE TO GRAVITY (VARIATION WITH HEIGHT, DEPTH, LATITUDE)
// =========================================================================
const test5DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-GRAV-VG-001",
    question: "The graph shows the variation of acceleration due to gravity $g(r)$ as a function of distance $r$ from the center of a uniform solid spherical planet of mass $M$ and radius $R$. The acceleration due to gravity reaches its absolute maximum value at:",
    options: [
      "The surface of the planet ($r = R$)",
      "The center of the planet ($r = 0$)",
      "An altitude $h = R$ above the surface ($r = 2R$)",
      "Infinity ($r \\to \\infty$)"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/gravitation/test5_q1_g_vs_r_graph.svg",
    explanation: "For a uniform solid spherical planet:\n1. Inside the planet $(r \\le R)$: $g(r) = \\frac{GM}{R^3} r = g_0 \\frac{r}{R}$, which increases linearly from $0$ at the center to $g_0$ at the surface.\n2. Outside the planet $(r \\ge R)$: $g(r) = \\frac{GM}{r^2} = g_0 \\frac{R^2}{r^2}$, which decreases inversely as $r^2$.\nTherefore, the maximum value of $g$ occurs uniquely at the surface of the planet $(r = R)$, where $g = g_0 = \\frac{GM}{R^2}$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-GRAV-VG-002",
    question: "Refer to the diagram showing the variation of $g$ with height $h$ and depth $d$. At what depth $d$ below the Earth's surface will the value of acceleration due to gravity be the same as that at a small height $h$ ($h \\ll R$) above the surface?",
    options: [
      "$d = 2h$",
      "$d = h$",
      "$d = \\frac{h}{2}$",
      "$d = 4h$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test5_q2_earth_depth_height.svg",
    explanation: "For small height $h \\ll R$:\n$$g_h = g \\left(1 - \\frac{2h}{R}\\right)$$\nAt depth $d$ below the surface:\n$$g_d = g \\left(1 - \\frac{d}{R}\\right)$$\nEquating $g_h = g_d$:\n$$g \\left(1 - \\frac{2h}{R}\\right) = g \\left(1 - \\frac{d}{R}\\right) \\implies \\frac{2h}{R} = \\frac{d}{R} \\implies d = 2h$$\nThus, for equal small distances, the decrease in $g$ going up to height $h$ is twice the decrease in $g$ going down to depth $h$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-GRAV-VG-003",
    question: "The diagram depicts a point $P$ at latitude $\\lambda$ on Earth rotating with angular velocity $\\omega$. If the Earth suddenly stops rotating on its axis, what will happen to the apparent acceleration due to gravity $g'$ at the equator and at the poles?",
    options: [
      "$g'$ at the equator increases by $R\\omega^2$, while $g'$ at the poles remains unchanged",
      "$g'$ at both the equator and poles increases by $R\\omega^2$",
      "$g'$ at the equator decreases by $R\\omega^2$, while $g'$ at the poles increases",
      "$g'$ at both the equator and poles remains unchanged"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test5_q3_earth_rotation_latitude.svg",
    explanation: "Due to Earth's rotation, the apparent acceleration due to gravity at latitude $\\lambda$ is:\n$$g' = g - R \\omega^2 \\cos^2 \\lambda$$\n1. At the equator ($\\lambda = 0^\\circ$): $\\cos 0^\\circ = 1$, so $g_{\\text{eq}} = g - R\\omega^2$. If rotation ceases $(\\omega = 0)$, $g_{\\text{eq}}$ increases from $g - R\\omega^2$ to $g$ (an increase of $R\\omega^2$).\n2. At the poles ($\\lambda = 90^\\circ$): $\\cos 90^\\circ = 0$, so $g_{\\text{pole}} = g$, which is unaffected by rotation. Hence, $g'$ at the poles remains completely unchanged."
  }
];

const test5ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-GRAV-VG-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The weight of an object placed at the geometric center of the Earth is zero.\nReason (R): At the center of the Earth, the acceleration due to gravity is zero ($g_d = g(1 - d/R) = 0$ for $d = R$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "At the center of the Earth, $d = R$. Substituting into the depth formula gives $g_{\\text{center}} = g(1 - R/R) = 0$. Since weight is $W = mg$, the weight at the center is $W = m(0) = 0$. Both (A) and (R) are true and (R) is the correct explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-GRAV-VG-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A body weighs slightly more at the poles than at the equator of the Earth.\nReason (R): The equatorial radius of the Earth is greater than the polar radius by approximately $21 \\text{ km}$, and the centrifugal force due to Earth's diurnal rotation is maximum at the equator.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Two factors contribute to $g_{\\text{pole}} > g_{\\text{eq}}$:\n1. Earth is an oblate spheroid ($R_{\\text{eq}} > R_{\\text{pole}}$ by $\\approx 21 \\text{ km}$), so $g = \\frac{GM}{R^2}$ is larger at the poles.\n2. Earth's rotation reduces apparent gravity at the equator by $R\\omega^2$, while leaving the poles unaffected. Both (A) and (R) are true and (R) provides the complete scientific explanation."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-GRAV-VG-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the Earth were to rotate 17 times faster than its present angular speed, bodies at the equator would feel completely weightless.\nReason (R): Weightlessness at the equator occurs when the centrifugal acceleration equals the gravitational acceleration ($R\\omega'^2 = g \\implies \\omega' = \\sqrt{g/R} \\approx 17 \\omega$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "For apparent gravity at the equator to become zero: $g' = g - R\\omega'^2 = 0 \\implies \\omega' = \\sqrt{\\frac{g}{R}} = \\sqrt{\\frac{9.8}{6.4 \\times 10^6}} \\approx 1.237 \\times 10^{-3} \\text{ rad s}^{-1}$. Earth's present angular speed is $\\omega = \\frac{2\\pi}{86400} \\approx 7.27 \\times 10^{-5} \\text{ rad s}^{-1}$. The ratio is $\\frac{\\omega'}{\\omega} \\approx 17$. Both (A) and (R) are true, and (R) is the exact mathematical derivation."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-GRAV-VG-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The percentage decrease in the value of $g$ at a height of $32 \\text{ km}$ above the Earth's surface is $1\\%$.\nReason (R): For small heights $h \\ll R$, the fractional change is $\\frac{\\Delta g}{g} = -\\frac{2h}{R}$, so for $h = 32 \\text{ km}$ and $R = 6400 \\text{ km}$, $\\left|\\frac{\\Delta g}{g}\\right| = \\frac{2 \\times 32}{6400} = 0.01 = 1\\%$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Since $h = 32 \\text{ km} \\ll 6400 \\text{ km}$, the approximation $\\frac{\\Delta g}{g} = -\\frac{2h}{R}$ is valid. Thus, $\\frac{\\Delta g}{g} = -\\frac{2 \\times 32}{6400} = -\\frac{64}{6400} = -0.01 = -1\\%$. Both (A) and (R) are true and (R) is the exact calculation."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-GRAV-VG-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): As we go deep into a mine, the time period of a simple pendulum increases.\nReason (R): As depth increases, the acceleration due to gravity $g$ decreases according to $g_d = g(1 - d/R)$, and the time period of a simple pendulum is $T = 2\\pi \\sqrt{l/g}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Inside a mine (at depth $d$), $g_d = g(1 - d/R) < g$. The time period of a simple pendulum is $T = 2\\pi\\sqrt{\\frac{l}{g}}$. As $g$ decreases, $T$ increases, causing the pendulum clock to run slow. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-GRAV-VG-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The acceleration due to gravity at an altitude $h = R$ is $\\frac{g}{2}$.\nReason (R): For any arbitrary height $h$, the exact formula for $g_h$ is $g_h = \\frac{g}{(1 + h/R)^2}$, which for $h = R$ yields $g_h = \\frac{g}{(1+1)^2} = \\frac{g}{4}$.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Easy",
    explanation: "Assertion (A) is false: at $h = R$, $g_h = \\frac{GM}{(R+R)^2} = \\frac{GM}{4R^2} = \\frac{g}{4}$, NOT $\\frac{g}{2}$ (the linear approximation $g(1 - 2h/R)$ fails completely for large heights). Reason (R) is true: the exact inverse-square law gives $g_h = \\frac{g}{(1 + h/R)^2} = \\frac{g}{4}$."
  }
];

// =========================================================================
// TEST 6: ORBITAL VELOCITY AND SATELLITE MOTION
// =========================================================================
const test6DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-GRAV-SM-001",
    question: "An artificial satellite of mass $m$ is orbiting Earth (mass $M$, radius $R$) in a circular orbit at altitude $h$, as shown in the diagram. The condition for the satellite to maintain a stable circular orbit is:",
    options: [
      "The gravitational attraction provides the necessary centripetal force: $\\frac{G M m}{r^2} = \\frac{m v_o^2}{r}$, where $r = R + h$",
      "The centrifugal force must exceed the gravitational force by a factor of 2",
      "The satellite must continuously fire its engines to overcome gravity",
      "The orbital radius must be exactly equal to the radius of Earth ($r = R$)"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/gravitation/test6_q1_satellite_circular_orbit.svg",
    explanation: "In a stable circular orbit, the inward gravitational force $\\frac{GMm}{r^2}$ acts as the required centripetal force $\\frac{m v_o^2}{r}$:\n$$\\frac{G M m}{r^2} = \\frac{m v_o^2}{r} \\implies v_o = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{GM}{R+h}}$$\nNo propulsion is required once in orbit because gravity continuously deflects the velocity vector perpendicularly without altering speed."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-GRAV-SM-002",
    question: "The figure contrasts a geostationary satellite orbit with a polar satellite orbit. Which of the following statements correctly distinguishes between these two satellite systems?",
    options: [
      "Geostationary satellites orbit in the equatorial plane from West to East with $T = 24\\text{ h}$ at $h \\approx 36,000\\text{ km}$, while polar satellites orbit North-South at $h \\approx 500\\text{--}800\\text{ km}$ with $T \\approx 100\\text{ min}$",
      "Geostationary satellites orbit North to South with $T = 12\\text{ h}$, while polar satellites orbit in the equatorial plane with $T = 24\\text{ h}$",
      "Geostationary satellites have an altitude of $500\\text{ km}$, while polar satellites have an altitude of $36,000\\text{ km}$",
      "Both satellites have the exact same altitude, orbital speed, and time period"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test6_q2_geostationary_vs_polar.svg",
    explanation: "1. Geostationary satellite: Orbits in the equatorial plane in the direction of Earth's rotation (West to East) with time period $T = 24\\text{ hours}$ at altitude $h \\approx 35,800\\text{ km}$ ($r \\approx 42,200\\text{ km}$). It appears stationary relative to an Earth observer and is used for telecommunications.\n2. Polar satellite: Orbits in a polar North-South plane at low Earth altitude ($h \\approx 500\\text{--}800\\text{ km}$) with $T \\approx 84\\text{--}100\\text{ minutes}$. It scans successive longitude strips as Earth rotates beneath it, making it ideal for remote sensing, meteorology, and environmental surveys."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-GRAV-SM-003",
    question: "The graph displays the kinetic energy $K$, gravitational potential energy $U$, and total mechanical energy $E$ of a satellite as functions of orbital radius $r$. Which fundamental relationship correctly relates these three energies?",
    options: [
      "$E = -K = \\frac{U}{2}$",
      "$E = K = -U$",
      "$E = 2K = -U$",
      "$E = -2K = U$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test6_q3_satellite_energies_graph.svg",
    explanation: "For a satellite of mass $m$ in a circular orbit of radius $r$ around Earth (mass $M$):\n1. Orbital speed: $v_o = \\sqrt{\\frac{GM}{r}}$, so Kinetic Energy is $K = \\frac{1}{2} m v_o^2 = +\\frac{GMm}{2r}$.\n2. Potential Energy is $U = -\\frac{GMm}{r}$.\n3. Total Mechanical Energy is $E = K + U = \\frac{GMm}{2r} - \\frac{GMm}{r} = -\\frac{GMm}{2r}$.\nComparing these expressions gives the virial relation: $E = -K = \\frac{U}{2}$, and $|U| = 2K = 2|E|$."
  }
];

const test6ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-GRAV-SM-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): An astronaut orbiting Earth inside the International Space Station experiences a sensation of complete weightlessness.\nReason (R): In an orbiting spacecraft, both the astronaut and the spacecraft accelerate towards the Earth with the exact same gravitational acceleration ($g' = \\frac{GM}{r^2}$), resulting in zero normal reaction force.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "The sensation of weight arises from the contact/normal reaction force from the floor ($N$). Inside an orbiting spacecraft in free-fall, both the astronaut and the vessel accelerate together at $a = g'$. The equation of motion is $mg' - N = ma = mg' \\implies N = 0$. The gravitational force is NOT zero; rather, the absence of support reaction creates weightlessness. Both (A) and (R) are true and (R) is the correct explanation of (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-GRAV-SM-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When an artificial satellite encounters slight atmospheric friction in low Earth orbit and spirals into a lower radius, its orbital speed actually increases.\nReason (R): For a circular orbit, orbital speed is $v_o = \\sqrt{\\frac{GM}{r}}$, so as orbital radius $r$ decreases, the speed $v_o$ must increase.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "As atmospheric friction dissipates total mechanical energy ($E = -\\frac{GMm}{2r}$ becomes more negative), the orbital radius $r$ decreases. Since $K = +\\frac{GMm}{2r} = -E$, the kinetic energy increases, which means the speed $v_o = \\sqrt{\\frac{GM}{r}}$ increases! The loss of potential energy is twice the gain in kinetic energy, with the other half lost as frictional heat. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-GRAV-SM-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A geostationary satellite cannot be placed in an orbit passing over the North and South poles.\nReason (R): The center of any satellite orbit around the Earth must coincide with the center of mass of the Earth, and to remain fixed over a point on the rotating equator, the orbit must lie in the equatorial plane.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "A geostationary satellite must remain stationary relative to the surface of the rotating Earth. Earth rotates about an axis connecting the North and South poles; any point on Earth except the equator has a circular motion centered on the rotation axis (not the center of Earth). Since a satellite orbit must be centered on the Earth's center of mass, the only orbit whose plane remains stationary relative to latitude circles is the equatorial plane. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-GRAV-SM-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The escape velocity of a body from a circular orbit of radius $r$ is $\\sqrt{2}$ times its orbital velocity ($v_e = \\sqrt{2} v_o$).\nReason (R): A satellite in a circular orbit already possesses kinetic energy $K = \\frac{1}{2} m v_o^2 = \\frac{GMm}{2r}$, so to escape ($E=0$), its kinetic energy must be doubled.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "In a circular orbit, total energy is $E = -\\frac{GMm}{2r}$. To escape to infinity, total energy must become zero: $E_f = \\frac{1}{2} m v_{\\text{escape}}^2 - \\frac{GMm}{r} = 0 \\implies v_{\\text{escape}} = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} v_o$. Kinetic energy needed is $K_{\\text{esc}} = \\frac{GMm}{r} = 2 K_{\\text{orbital}}$, which requires increasing kinetic energy by $100\\%$ or multiplying velocity by $\\sqrt{2}$ (a $41.4\\%$ increase). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-GRAV-SM-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Polar satellites are unsuitable for continuous telecommunication broadcast across a fixed geographic territory.\nReason (R): Polar satellites have low Earth orbits with a period of about 100 minutes, so they pass quickly over any given location on Earth and do not hover over one spot.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "Polar satellites move in low Earth orbits ($h \\approx 500\\text{--}800\\text{ km}$) with periods of $\\approx 100\\text{ minutes}$. Because they orbit rapidly and the Earth rotates underneath them, they only view any specific location on Earth for a few minutes per pass. For continuous stationary telecommunication, geostationary satellites with $T = 24\\text{ h}$ are required. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-GRAV-SM-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the speed of a satellite orbiting in a circular orbit close to the Earth is increased by $41.4\\%$, the satellite escapes into space.\nReason (R): Escape velocity near Earth is $v_e = \\sqrt{2} v_o \\approx 1.414 \\, v_o$, which represents a fractional increase of $\\frac{v_e - v_o}{v_o} = \\sqrt{2} - 1 \\approx 0.414 = 41.4\\%$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "The ratio of escape velocity to orbital velocity is $\\frac{v_e}{v_o} = \\sqrt{2} \\approx 1.414$. The percentage increase in speed required for escape is $(\\sqrt{2} - 1) \\times 100\\% = 41.4\\%$. Both (A) and (R) are true and (R) is the exact mathematical justification of (A)."
  }
];

// Helper function to update test paper
async function updateTestPaper(testId, slugAliases, subtopicTitle, diagramQs, arQs) {
  console.log(`\n--- Processing Test: ${testId} ---`);
  let tp = await db.collection('testPapers').findOne({ testId });
  if (!tp) {
    for (const alias of slugAliases) {
      tp = await db.collection('testPapers').findOne({ testId: alias });
      if (tp) break;
    }
  }

  let existingQuestionIds = [];
  if (tp && tp.questions) {
    existingQuestionIds = tp.questions.map(q => {
      const raw = typeof q === 'string' ? q : (q._id || q.questionId || q.id);
      return ObjectId.isValid(raw) ? new ObjectId(raw) : raw;
    });
  }

  const existingDocs = await db.collection('questionBank').find({ _id: { $in: existingQuestionIds.filter(id => id instanceof ObjectId) } }).toArray();
  const existingMap = new Map(existingDocs.map(d => [d._id.toString(), d]));

  const finalQuestionIds = [];

  for (let idx = 0; idx < 45; idx++) {
    const diagDef = diagramQs.find(d => d.index === idx);
    const arDef = arQs.find(a => a.index === idx);

    if (diagDef) {
      const existingId = existingQuestionIds[idx];
      let docId = existingId instanceof ObjectId ? existingId : new ObjectId();
      await db.collection('questionBank').updateOne(
        { _id: docId },
        {
          $set: {
            commercialId: diagDef.commercialId,
            question: diagDef.question,
            options: diagDef.options,
            correctAnswer: diagDef.correctOption,
            correctOption: diagDef.correctOption,
            explanation: diagDef.explanation,
            difficulty: diagDef.difficulty,
            image: diagDef.image,
            img: diagDef.image,
            subject: 'Physics',
            chapter: 'Gravitation',
            subTopic: subtopicTitle,
            subtopic: subtopicTitle,
            type: 'MCQ',
            questionType: 'MCQ (Multiple Choice Question)',
            classGrade: 'Class 11',
            marks: 4,
            negativeMarks: 1,
            updatedAt: new Date()
          }
        },
        { upsert: true }
      );
      finalQuestionIds.push(docId);
      console.log(`Q${idx + 1} updated as DIAGRAM question: ${diagDef.image}`);
    } else if (arDef) {
      const existingId = existingQuestionIds[idx];
      let docId = existingId instanceof ObjectId ? existingId : new ObjectId();
      await db.collection('questionBank').updateOne(
        { _id: docId },
        {
          $set: {
            commercialId: arDef.commercialId,
            question: arDef.question,
            options: arDef.options,
            correctAnswer: arDef.correctOption,
            correctOption: arDef.correctOption,
            explanation: arDef.explanation,
            difficulty: arDef.difficulty,
            subject: 'Physics',
            chapter: 'Gravitation',
            subTopic: subtopicTitle,
            subtopic: subtopicTitle,
            type: 'ASSERTION_REASON',
            questionType: 'Assertion–Reasoning',
            classGrade: 'Class 11',
            marks: 4,
            negativeMarks: 1,
            updatedAt: new Date()
          }
        },
        { upsert: true }
      );
      finalQuestionIds.push(docId);
      console.log(`Q${idx + 1} updated as Section B ASSERTION-REASON question: ans=${arDef.correctOption}`);
    } else {
      const existingId = existingQuestionIds[idx];
      if (existingId instanceof ObjectId && existingMap.has(existingId.toString())) {
        const curDoc = existingMap.get(existingId.toString());
        await db.collection('questionBank').updateOne(
          { _id: curDoc._id },
          {
            $set: {
              subject: 'Physics',
              chapter: 'Gravitation',
              subTopic: subtopicTitle,
              subtopic: subtopicTitle,
              type: 'MCQ',
              questionType: 'MCQ (Multiple Choice Question)',
              classGrade: 'Class 11',
              marks: 4,
              negativeMarks: 1,
              updatedAt: new Date()
            }
          }
        );
        finalQuestionIds.push(curDoc._id);
      } else {
        const newDoc = {
          subject: 'Physics',
          chapter: 'Gravitation',
          subTopic: subtopicTitle,
          subtopic: subtopicTitle,
          type: 'MCQ',
          questionType: 'MCQ (Multiple Choice Question)',
          question: `Sample Gravitation problem on ${subtopicTitle} regarding fundamental concepts.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctOption: "a",
          correctAnswer: "a",
          explanation: "Standard explanation based on NCERT Gravitation.",
          difficulty: "Medium",
          classGrade: 'Class 11',
          marks: 4,
          negativeMarks: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        const ins = await db.collection('questionBank').insertOne(newDoc);
        finalQuestionIds.push(ins.insertedId);
      }
    }
  }

  const allIdsToUpdate = [testId, ...slugAliases];
  for (const tid of allIdsToUpdate) {
    await db.collection('testPapers').updateOne(
      { testId: tid },
      {
        $set: {
          testId: tid,
          title: subtopicTitle,
          exam: 'NEET',
          subject: 'Physics',
          chapter: 'Gravitation',
          duration: 60,
          totalMarks: 180,
          questionsCount: 45,
          standardQuestionsCount: 45,
          questions: finalQuestionIds,
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );
    console.log(`Synced testPaper ${tid} with 45 questions.`);
  }
}

// Run Test 4
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Escape-velocity",
  ["neet-SUBTOPIC-Physics-Escape-Velocity", "neet-SUBTOPIC-Physics-escape-velocity"],
  "Escape velocity",
  test4DiagramQuestions,
  test4ARQuestions
);

// Run Test 5
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Acceleration-due-to-gravity-(variation-with-height,-depth,-latitude)",
  [],
  "Acceleration due to gravity (variation with height, depth, latitude)",
  test5DiagramQuestions,
  test5ARQuestions
);

// Run Test 6
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Orbital-velocity-and-satellite-motion",
  [],
  "Orbital velocity and satellite motion",
  test6DiagramQuestions,
  test6ARQuestions
);

await client.close();
console.log("\nTests 4, 5, and 6 successfully updated!");
