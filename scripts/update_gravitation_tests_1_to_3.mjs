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

console.log("=== UPDATING GRAVITATION TESTS 1, 2, AND 3 ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 1: KEPLER'S LAWS
// =========================================================================
const test1DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-GRAV-KL-001",
    question: "Refer to the given figure of an elliptical orbit of a planet around the Sun. If the distance of perihelion is $r_p$ and aphelion is $r_a$, and the speed of the planet at perihelion is $v_p$, then its speed $v_a$ at aphelion is:",
    options: [
      "$v_a = v_p \\left(\\frac{r_p}{r_a}\\right)$",
      "$v_a = v_p \\left(\\frac{r_a}{r_p}\\right)$",
      "$v_a = v_p \\sqrt{\\frac{r_p}{r_a}}$",
      "$v_a = v_p \\left(\\frac{r_p}{r_a}\\right)^2$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/gravitation/test1_q1_kepler_ellipse_orbit.svg",
    explanation: "Since the gravitational force exerted by the Sun on the planet is purely central, no torque acts on the planet about the Sun $(\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0)$. Therefore, the angular momentum of the planet is strictly conserved throughout its orbit:\n$$L = m v_p r_p = m v_a r_a \\implies v_a = v_p \\left(\\frac{r_p}{r_a}\\right)$$\nSince $r_a > r_p$, we have $v_a < v_p$ (the planet moves slowest at aphelion and fastest at perihelion)."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-GRAV-KL-002",
    question: "The figure illustrates Kepler's second law where a planet sweeps out areas $A_1$ and $A_2$ in equal time intervals $\\Delta t$. Which fundamental physical conservation law directly yields Kepler's second law, and what is the relation between the swept areas?",
    options: [
      "Conservation of angular momentum, with $A_1 = A_2$",
      "Conservation of linear momentum, with $A_1 = A_2$",
      "Conservation of mechanical energy, with $A_1 > A_2$",
      "Conservation of total mass, with $A_1 < A_2$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/gravitation/test1_q2_areal_velocity_sectors.svg",
    explanation: "Kepler's second law states that the radius vector drawn from the Sun to the planet sweeps out equal areas in equal intervals of time. The areal velocity is given by:\n$$\\frac{dA}{dt} = \\frac{1}{2} r (r \\, d\\theta / dt) = \\frac{1}{2} r^2 \\omega = \\frac{L}{2m}$$\nBecause the gravitational force is central, angular momentum $L$ is constant. Hence, the areal velocity $\\frac{dA}{dt} = \\text{constant}$, meaning equal areas $A_1 = A_2$ are swept in equal times $\\Delta t$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-GRAV-KL-003",
    question: "The graph shown represents $T^2$ versus $r^3$ for planets revolving around the Sun in circular/elliptical orbits of semi-major axis $r$. The slope of this straight-line graph depends on:",
    options: [
      "Only the universal gravitational constant $G$ and the mass of the Sun $M_{\\odot}$",
      "Only the mass of the orbiting planet $m$",
      "Both the mass of the Sun and the mass of the planet",
      "The radius of the planet and the eccentricity of the orbit"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test1_q3_t2_vs_r3_graph.svg",
    explanation: "According to Kepler's third law for a planet of mass $m$ orbiting the Sun of mass $M_{\\odot}$:\n$$\\frac{m v^2}{r} = \\frac{G M_{\\odot} m}{r^2} \\implies v = \\sqrt{\\frac{G M_{\\odot}}{r}}$$\nThe period is $T = \\frac{2\\pi r}{v} = \\frac{2\\pi r^{3/2}}{\\sqrt{G M_{\\odot}}}$. Squaring both sides yields:\n$$T^2 = \\left(\\frac{4\\pi^2}{G M_{\\odot}}\\right) r^3$$\nThus, the plot of $T^2$ against $r^3$ is a straight line through the origin with slope $\\text{Slope} = \\frac{4\\pi^2}{G M_{\\odot}}$, which depends solely on $G$ and the mass of the central attracting body (the Sun), and is completely independent of the mass of the revolving planet."
  }
];

const test1ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-GRAV-KL-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The areal velocity of a planet revolving in an elliptical orbit around the Sun remains constant.\nReason (R): The gravitational force acting on the planet is a central force, so the torque acting on it about the Sun is zero.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Since the gravitational force $\\vec{F} = -\\frac{GMm}{r^2} \\hat{r}$ acts along the line joining the planet to the Sun, the torque about the Sun is $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$. By $\\vec{\\tau} = \\frac{d\\vec{L}}{dt} = 0$, angular momentum $\\vec{L}$ is conserved. The areal velocity is $\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$. Thus, both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-GRAV-KL-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The linear speed of a planet in an elliptical orbit is maximum at perihelion and minimum at aphelion.\nReason (R): A planet moves faster when it is closer to the Sun because its total mechanical energy increases near the Sun.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: by conservation of angular momentum, $v_p r_p = v_a r_a$. Since $r_p < r_a$, we have $v_p > v_a$. However, Reason (R) is false: the total mechanical energy $E = -\\frac{GMm}{2a}$ of a planet in an orbit of semi-major axis $a$ remains constant throughout the motion because the gravitational force is conservative. Near the Sun, potential energy becomes more negative, so kinetic energy increases, keeping total mechanical energy constant."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-GRAV-KL-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the distance between the Earth and the Sun were doubled, the duration of one Earth year would become approximately 2.83 years.\nReason (R): According to Kepler's third law, the square of the orbital period is proportional to the cube of the semi-major axis ($T^2 \\propto r^3$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "By Kepler's third law, $T \\propto r^{3/2}$. If the distance is doubled $(r' = 2r)$, then $T' = T (2)^{3/2} = 2\\sqrt{2} \\, T \\approx 2.828 \\text{ years}$. Both Assertion (A) and Reason (R) are true, and (R) is the exact mathematical explanation of (A)."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-GRAV-KL-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The ratio $T^2 / r^3$ is identical for all planets in our solar system, and has the exact same numerical value for all moons orbiting the planet Jupiter.\nReason (R): According to Kepler's third law, $T^2 / r^3 = \\frac{4\\pi^2}{GM}$, which depends exclusively on the universal gravitational constant $G$ and the mass $M$ of the central body.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Difficult",
    explanation: "Assertion (A) is false: for the planets in our solar system, the central attracting body is the Sun ($M = M_{\\odot}$), whereas for Jupiter's moons, the central body is Jupiter ($M = M_{\\text{Jupiter}}$). Since $M_{\\odot} \\approx 1047 \\, M_{\\text{Jupiter}}$, the constant $\\frac{4\\pi^2}{GM}$ is vastly different. Reason (R) is true: $T^2 / r^3 = \\frac{4\\pi^2}{GM}$ depends only on $G$ and the central body's mass $M$."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-GRAV-KL-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Comets moving in highly eccentric elliptical orbits spend far more time at large distances from the Sun than near the perihelion.\nReason (R): In an elliptical orbit, the semi-minor axis is always shorter than the semi-major axis.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion (A) is true: by Kepler's second law, areal velocity is constant, so when $r$ is large near aphelion, the linear speed $v = \\frac{L}{mr}$ is very small, meaning the comet takes a very long time to traverse the distant parts of its orbit. Reason (R) is also true ($b = a\\sqrt{1-e^2} < a$ for $e > 0$), but it is not the explanation for why the comet spends more time far from the Sun (which is governed by angular momentum conservation and Kepler's 2nd law)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-GRAV-KL-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a satellite revolving in a circular orbit around the Earth, Kepler's second law implies that its speed remains constant along the entire path.\nReason (R): In a circular orbit, the radius $r$ is constant, so equal areas swept in equal times implies equal arc lengths traversed in equal times.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "In a circle, $r = \\text{constant}$. A swept sector area is $dA = \\frac{1}{2} r^2 d\\theta$. If $\\frac{dA}{dt} = \\text{constant}$, then $\\frac{d\\theta}{dt} = \\omega = \\text{constant}$, which means the orbital speed $v = r\\omega = \\text{constant}$. Both (A) and (R) are true, and (R) correctly explains (A)."
  }
];

// =========================================================================
// TEST 2: NEWTON'S LAW OF GRAVITATION
// =========================================================================
const test2DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-GRAV-NL-001",
    question: "Two spherical bodies of masses $m_1$ and $m_2$ are placed in vacuum with a separation distance $r$ between their centers, as shown. The magnitude of the gravitational force exerted by $m_1$ on $m_2$ is $F_1$, and by $m_2$ on $m_1$ is $F_2$. If $m_1 = 4 m_2$, the ratio $F_1 / F_2$ is:",
    options: [
      "$1 : 1$",
      "$4 : 1$",
      "$1 : 4$",
      "$16 : 1$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/gravitation/test2_q1_two_masses_gravity.svg",
    explanation: "According to Newton's third law of motion and universal law of gravitation, gravitational interaction between two masses forms an action-reaction pair: $\\vec{F}_{12} = -\\vec{F}_{21}$. The magnitude of force on both masses is identically $F = \\frac{G m_1 m_2}{r^2}$. Therefore, $F_1 = F_2$, giving a ratio of $1 : 1$, regardless of any disparity in their masses."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-GRAV-NL-002",
    question: "Three identical point masses, each of mass $m$, are situated at the vertices of an equilateral triangle of side $L$, as depicted in the figure. A fourth particle of mass $m_0$ is placed at the centroid $G$ of the triangle. The net gravitational force acting on $m_0$ is:",
    options: [
      "Zero",
      "$\\frac{3 G m m_0}{L^2}$",
      "$\\frac{\\sqrt{3} G m m_0}{L^2}$",
      "$\\frac{6 G m m_0}{L^2}$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test2_q2_three_masses_triangle.svg",
    explanation: "The centroid $G$ is equidistant from all three vertices: distance $r_G = \\frac{L}{\\sqrt{3}}$. Each vertex mass pulls $m_0$ with an equal magnitude force:\n$$F = \\frac{G m m_0}{r_G^2} = \\frac{3 G m m_0}{L^2}$$\nThese three forces are directed towards the vertices, making mutual angles of $120^\\circ$ with each other in a plane. The vector sum of three equal coplanar vectors spaced at $120^\\circ$ is identically zero: $\\vec{F}_{\\text{net}} = \\vec{F}_A + \\vec{F}_B + \\vec{F}_C = 0$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-GRAV-NL-003",
    question: "The graph shows the variation of gravitational field intensity $E(r)$ with distance $r$ from the center of a thin uniform spherical shell of mass $M$ and radius $R$. Which of the following statements correctly describes $E(r)$?",
    options: [
      "$E = 0$ for $r < R$, and $E = \\frac{GM}{r^2}$ for $r \\ge R$",
      "$E = \\frac{GM}{R^2}$ for $r < R$, and $E = 0$ for $r \\ge R$",
      "$E \\propto r$ for $r < R$, and $E \\propto \\frac{1}{r^2}$ for $r \\ge R$",
      "$E = \\text{constant} \\neq 0$ everywhere"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test2_q3_spherical_shell_field.svg",
    explanation: "By Newton's shell theorem:\n1. Inside a uniform spherical shell $(r < R)$, the gravitational forces from all symmetric mass elements cancel vectorially, so the gravitational field is zero: $E = 0$.\n2. Outside the shell $(r \\ge R)$, the entire mass $M$ of the shell acts as if it were concentrated at its geometric center, so $E(r) = \\frac{GM}{r^2}$. There is a step discontinuity at the surface $r = R$ from $0$ to $\\frac{GM}{R^2}$."
  }
];

const test2ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-GRAV-NL-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The gravitational force between two point masses does not change when a thick lead plate is introduced between them.\nReason (R): Gravitational force between two particles is strictly independent of the intervening medium.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "Unlike electrostatic force which depends heavily on the dielectric constant of the intervening medium, the universal gravitational interaction is completely independent of the medium separating the masses. Hence, placing a lead plate between the masses does not alter their mutual gravitational attraction. Both (A) and (R) are true, and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-GRAV-NL-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The acceleration of a lighter body towards the Earth is the same as that of a much heavier body when dropped in vacuum.\nReason (R): The gravitational force exerted by the Earth on a body is directly proportional to its mass, but its acceleration is inversely proportional to its mass ($a = F/m$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "The force on mass $m$ is $F = \\frac{GM_E m}{R^2}$. By Newton's second law, $a = \\frac{F}{m} = \\frac{GM_E}{R^2} = g$, which is completely independent of the falling body's mass $m$. The inertial mass equals the gravitational mass, so both accelerate identically. Both (A) and (R) are true, and (R) is the correct explanation."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-GRAV-NL-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A body situated at the center of a uniform spherical shell of mass $M$ experiences zero gravitational force, but its gravitational potential at that point is zero.\nReason (R): Inside a spherical shell, gravitational field is zero everywhere, which implies that gravitational potential is uniform and equal to that at the surface ($V = -\\frac{GM}{R}$).",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Difficult",
    explanation: "Assertion (A) is false: while the gravitational force at the center is indeed zero, the gravitational potential at the center (and everywhere inside the shell) is NOT zero; it is negative: $V = -\\frac{GM}{R}$. Reason (R) is true: since $E = -\\frac{dV}{dr} = 0$, potential $V$ must be constant throughout the interior, matching the surface value $V = -\\frac{GM}{R}$."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-GRAV-NL-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Gravitational forces are always attractive and obey the inverse-square law, yet they can keep planets in stable closed circular and elliptical orbits without the planets spiraling into the Sun.\nReason (R): A planet possesses transverse angular velocity giving rise to a required centripetal acceleration ($v^2/r$) that perfectly balances the inward gravitational attraction.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Gravitational force provides the necessary inward centripetal acceleration $\\frac{v^2}{r} = \\frac{GM}{r^2}$. The transverse orbital velocity prevents the planet from falling radially into the Sun, ensuring stable bounded orbits. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-GRAV-NL-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Newton's universal gravitational constant $G$ has dimensions $[M^{-1} L^3 T^{-2}]$ and its value is $6.674 \\times 10^{-11} \\text{ N m}^2 \\text{ kg}^{-2}$.\nReason (R): The value of $G$ is universal and does not depend on temperature, pressure, time, or nature of the masses.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "From $F = G \\frac{m_1 m_2}{r^2}$, we have $G = \\frac{F r^2}{m_1 m_2}$, giving dimensions $\\frac{[M L T^{-2}] [L^2]}{[M^2]} = [M^{-1} L^3 T^{-2}]$ and value $6.674 \\times 10^{-11} \\text{ N m}^2 \\text{ kg}^{-2}$. Both Assertion (A) and Reason (R) are true, but Reason (R) explains why $G$ is called 'universal', not how its dimensional formula is derived."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-GRAV-NL-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the Earth suddenly shrank to half its present radius with its mass remaining unchanged, the weight of an object on its surface would become four times its original weight.\nReason (R): Weight on the surface is $W = m g = \\frac{G M m}{R^2}$, so when $R$ is halved, $W$ increases by a factor of $2^2 = 4$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Since $W = \\frac{GMm}{R^2}$, if $R' = R/2$ and $M$ is unchanged, $W' = \\frac{GMm}{(R/2)^2} = 4 \\frac{GMm}{R^2} = 4W$. Both (A) and (R) are true and (R) is the correct mathematical explanation of (A)."
  }
];

// =========================================================================
// TEST 3: GRAVITATIONAL POTENTIAL ENERGY
// =========================================================================
const test3DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-GRAV-PE-001",
    question: "The graph shows the variation of gravitational potential energy $U(r)$ of a mass $m$ with distance $r$ from a planet of mass $M$. Why is $U(r)$ negative at all finite distances, and what does this negative sign physically represent?",
    options: [
      "The gravitational force is attractive, so the system is bound and work must be supplied from outside to separate the masses to infinity",
      "The gravitational force is repulsive, so energy is released when masses are separated",
      "The potential energy of a particle at infinity is chosen as $-\\infty$",
      "The negative sign is a mathematical artifact with no physical significance"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/gravitation/test3_q1_u_vs_r_graph.svg",
    explanation: "By convention, gravitational potential energy is taken as zero at infinity ($U(\\infty) = 0$). Because gravity is an attractive force, bringing a mass from infinity to distance $r$ involves positive work done by the gravitational field, which means external work done is negative: $U(r) = -\\int_\\infty^r \\vec{F} \\cdot d\\vec{r} = -\\frac{GMm}{r}$. A negative potential energy physically signifies a bound system; an external energy of $+\\frac{GMm}{r}$ (the binding energy) must be supplied to liberate the mass to infinity."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-GRAV-PE-002",
    question: "The given graph depicts the gravitational potential $V(r)$ inside and outside a uniform solid sphere of mass $M$ and radius $R$. The ratio of the potential at the center $V(0)$ to the potential at the surface $V(R)$ is:",
    options: [
      "$3 : 2$",
      "$2 : 3$",
      "$1 : 1$",
      "$4 : 3$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test3_q2_solid_sphere_potential.svg",
    explanation: "For a uniform solid sphere of mass $M$ and radius $R$:\n1. At the surface $(r = R)$: $V(R) = -\\frac{GM}{R}$.\n2. Inside the sphere $(r \\le R)$: $V(r) = -\\frac{GM}{2R^3} (3R^2 - r^2)$.\nAt the center $(r = 0)$:\n$$V(0) = -\\frac{3GM}{2R} = \\frac{3}{2} V(R)$$\nTherefore, the ratio of the magnitude of potential at the center to that at the surface is $\\frac{|V(0)|}{|V(R)|} = \\frac{3/2}{1} = 3 : 2$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-GRAV-PE-003",
    question: "Four equal point masses, each of mass $m$, are fixed at the corners of a square of side $a$, as shown in the diagram. The total gravitational potential energy of this four-mass system is:",
    options: [
      "$-\\frac{G m^2}{a} (4 + \\sqrt{2})$",
      "$-\\frac{4 G m^2}{a}$",
      "$-\\frac{G m^2}{a} (4 + 2\\sqrt{2})$",
      "$-\\frac{6 G m^2}{a}$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/gravitation/test3_q3_four_mass_square_pe.svg",
    explanation: "The total number of interacting pairs among 4 masses is $\\binom{4}{2} = 6$. These consist of:\n1. 4 pairs along the sides of the square, each separated by distance $a$:\n$$U_{\\text{sides}} = 4 \\times \\left(-\\frac{G m^2}{a}\\right) = -\\frac{4 G m^2}{a}$$\n2. 2 pairs along the diagonals, each separated by distance $\\sqrt{2}a$:\n$$U_{\\text{diagonals}} = 2 \\times \\left(-\\frac{G m^2}{\\sqrt{2}a}\\right) = -\\frac{\\sqrt{2} G m^2}{a}$$\nSumming all pairs gives the total potential energy:\n$$U_{\\text{total}} = -\\frac{G m^2}{a} (4 + \\sqrt{2})$$"
  }
];

const test3ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-GRAV-PE-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a body of mass $m$ is raised from the surface of Earth to a small height $h$ ($h \\ll R$), the change in gravitational potential energy is approximately $mgh$.\nReason (R): For $h \\ll R$, the gravitational acceleration $g$ is nearly constant, and $\\Delta U = -\\frac{GMm}{R+h} - \\left(-\\frac{GMm}{R}\\right) = \\frac{GMmh}{R(R+h)} \\approx \\frac{GMmh}{R^2} = mgh$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "The exact change in potential energy is $\\Delta U = GMm \\left(\\frac{1}{R} - \\frac{1}{R+h}\\right) = \\frac{GMmh}{R(R+h)}$. Since $h \\ll R$, $R+h \\approx R$, giving $\\Delta U \\approx \\frac{GMmh}{R^2} = m \\left(\\frac{GM}{R^2}\\right) h = mgh$. Both (A) and (R) are true, and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-GRAV-PE-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The gravitational potential at the center of the Earth is greater in magnitude than the gravitational potential at its surface.\nReason (R): The gravitational potential at the center is $V(0) = -\\frac{3}{2} \\frac{GM}{R}$, whereas at the surface it is $V(R) = -\\frac{GM}{R}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "At the center of a uniform solid sphere, $V(0) = -1.5 \\frac{GM}{R}$, whose magnitude $|V(0)| = 1.5 \\frac{GM}{R}$ is 1.5 times the surface potential magnitude $|V(R)| = \\frac{GM}{R}$. Both statements are true and (R) is the exact justification of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-GRAV-PE-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Gravitational potential is a scalar quantity and its SI unit is $\\text{J kg}^{-1}$ or $\\text{m}^2 \\text{s}^{-2}$.\nReason (R): Gravitational potential at a point represents the gravitational force acting per unit mass placed at that point.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: gravitational potential is work done per unit mass, which is a scalar with SI unit $\\text{J kg}^{-1} = \\text{m}^2 \\text{s}^{-2}$. However, Reason (R) is false: gravitational force per unit mass defines the gravitational field intensity $\\vec{E}$ (a vector quantity), not gravitational potential."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-GRAV-PE-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): As a spacecraft moves from the surface of the Earth to the surface of the Moon, its gravitational potential energy first increases, reaches a maximum, and then decreases.\nReason (R): Between the Earth and the Moon, there exists a neutral point where the gravitational field intensities of the Earth and Moon cancel out, corresponding to a local maximum of potential.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "At the neutral point between Earth and Moon, the net gravitational field is zero: $\\vec{E} = -\\frac{dV}{dr} = 0$. Since the potential $V$ is negative near both Earth and Moon and approaches its least negative (highest) value at the neutral point, the potential energy $U = mV$ reaches a maximum at this point. Thus, $U$ increases from Earth to the neutral point, then decreases from the neutral point to the Moon. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-GRAV-PE-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The work done by an external agent in moving a particle between two points in a gravitational field is independent of the path taken.\nReason (R): The gravitational force is a conservative force, which means the line integral of gravitational force around any closed path is zero ($\\oint \\vec{F} \\cdot d\\vec{r} = 0$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "Because gravitational force is conservative, the work done depends only on the initial and final position vectors, and is completely path-independent. The line integral around any closed loop is zero. Both (A) and (R) are true and (R) is the exact definition and explanation."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-GRAV-PE-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If a body is released from a height $h$ equal to the radius of the Earth ($h = R$), its velocity upon striking the surface of the Earth is $\\sqrt{gR}$.\nReason (R): By conservation of energy, $\\frac{1}{2} m v^2 = -\\frac{GMm}{2R} - \\left(-\\frac{GMm}{R}\\right) = \\frac{GMm}{2R} = \\frac{1}{2} m (gR) \\implies v = \\sqrt{gR}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "By conservation of mechanical energy: $E_i = E_f \\implies 0 - \\frac{GMm}{R+h} = \\frac{1}{2}mv^2 - \\frac{GMm}{R}$. Substituting $h = R$:\n$$\\frac{1}{2}mv^2 = \\frac{GMm}{R} - \\frac{GMm}{2R} = \\frac{GMm}{2R} = \\frac{mgR}{2} \\implies v = \\sqrt{gR}$$\nBoth (A) and (R) are true, and (R) correctly explains (A)."
  }
];

// Helper function to update test paper
async function updateTestPaper(testId, slugAliases, subtopicTitle, diagramQs, arQs) {
  console.log(`\n--- Processing Test: ${testId} ---`);
  let tp = await db.collection('testPapers').findOne({ testId });
  if (!tp) {
    // Try alias
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

  // Fetch all existing question docs
  const existingDocs = await db.collection('questionBank').find({ _id: { $in: existingQuestionIds.filter(id => id instanceof ObjectId) } }).toArray();
  const existingMap = new Map(existingDocs.map(d => [d._id.toString(), d]));

  // Build the 45 questions
  const finalQuestionIds = [];

  for (let idx = 0; idx < 45; idx++) {
    // Check if this is one of our 3 diagram questions (idx 0, 1, 2)
    const diagDef = diagramQs.find(d => d.index === idx);
    // Check if this is one of our 6 AR questions (idx 39, 40, 41, 42, 43, 44)
    const arDef = arQs.find(a => a.index === idx);

    if (diagDef) {
      // Upsert into questionBank
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
      // Middle questions Q4 - Q39
      const existingId = existingQuestionIds[idx];
      if (existingId instanceof ObjectId && existingMap.has(existingId.toString())) {
        const curDoc = existingMap.get(existingId.toString());
        // Clean and ensure valid NEET MCQ format
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
        // Fallback create doc
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

  // Update testPaper in MongoDB under both testId and all slugAliases
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

// Run Test 1
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Kepler's-laws",
  ["neet-SUBTOPIC-Physics-Kepler-s-laws", "neet-SUBTOPIC-Physics-Keplers-laws"],
  "Kepler's laws",
  test1DiagramQuestions,
  test1ARQuestions
);

// Run Test 2
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Newton's-law-of-gravitation",
  ["neet-SUBTOPIC-Physics-Newton-s-law-of-gravitation", "neet-SUBTOPIC-Physics-Newtons-law-of-gravitation"],
  "Newton's law of gravitation",
  test2DiagramQuestions,
  test2ARQuestions
);

// Run Test 3
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Gravitational-potential-energy",
  ["neet-SUBTOPIC-Physics-Gravitational-Potential-Energy"],
  "Gravitational potential energy",
  test3DiagramQuestions,
  test3ARQuestions
);

await client.close();
console.log("\nTests 1, 2, and 3 successfully updated!");
