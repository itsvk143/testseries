const fs = require('fs');
const path = require('path');

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const subTopic = "Gravitational potential energy";
const chapter = "Gravitation";
const subject = "Physics";

// 26 Assertion-Reason questions
const arQuestions = [
  {
    assertion: "The gravitational potential energy of a two-particle system is always negative if the reference point of zero potential energy is chosen at infinity.",
    reason: "Gravitational force is purely attractive, so positive external work must be done against gravity to separate the particles to infinite distance.",
    correctOptionIndex: 0,
    explanation: "Because gravity is strictly attractive, bringing two masses from infinity to a separation $r$ results in positive work done by the gravitational field, causing the potential energy to decrease below zero: $U(r) = -\\int_{\\infty}^r F_g dr = -\\frac{G m_1 m_2}{r}$. Therefore, $U < 0$ everywhere, and both Assertion and Reason are true with Reason explaining Assertion."
  },
  {
    assertion: "The gravitational potential inside a uniform hollow spherical shell of radius $R$ is constant and equal to $-\\frac{GM}{R}$.",
    reason: "The gravitational field inside a hollow spherical shell is zero everywhere, and $E = -\\frac{dV}{dr}$.",
    correctOptionIndex: 0,
    explanation: "Since the gravitational field inside the shell is zero ($E = 0$), the potential gradient is zero ($\\frac{dV}{dr} = 0$), which means $V$ is constant throughout the interior. By continuity at the surface $r = R$, $V(r) = V(R) = -\\frac{GM}{R}$ for all $r \\le R$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "At the centre of a uniform solid sphere of mass $M$ and radius $R$, the gravitational potential is $-1.5\\frac{GM}{R}$.",
    reason: "Inside a uniform solid sphere, the gravitational potential varies with distance $r$ from the centre as $V(r) = -\\frac{GM}{2R^3}(3R^2 - r^2)$.",
    correctOptionIndex: 0,
    explanation: "The potential inside a solid sphere is derived from $V(r) - V(R) = -\\int_R^r E dr = -\\int_R^r \\frac{GM r'}{R^3} dr'$, giving $V(r) = -\\frac{GM}{2R^3}(3R^2 - r^2)$. Setting $r = 0$ gives $V(0) = -\\frac{3GM}{2R} = -1.5\\frac{GM}{R}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Work done in moving a mass along a gravitational equipotential surface is always zero.",
    reason: "The gravitational field vector is everywhere perpendicular to the equipotential surface.",
    correctOptionIndex: 0,
    explanation: "Work done is $W = \\int \\vec{F}\\cdot d\\vec{r} = m \\int \\vec{E}\\cdot d\\vec{r} = -m \\Delta V$. On an equipotential surface, $\\Delta V = 0$. Furthermore, $\\vec{E} = -\\vec{\\nabla} V$, so $\\vec{E}$ is orthogonal to surfaces of constant $V$, making $\\vec{E}\\cdot d\\vec{r} = 0$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The increase in gravitational potential energy of a mass $m$ raised from the surface of the Earth to a height $h = R$ is $\\frac{1}{2}mgR$.",
    reason: "The gain in potential energy is given by $\\Delta U = \\frac{mgh}{1 + h/R}$, where $g = \\frac{GM}{R^2}$.",
    correctOptionIndex: 0,
    explanation: "$\\Delta U = U(2R) - U(R) = -\\frac{GMm}{2R} - \\left(-\\frac{GMm}{R}\\right) = \\frac{GMm}{2R} = \\frac{1}{2}mgR$. Substituting $h = R$ into $\\frac{mgh}{1 + h/R}$ yields $\\frac{mgR}{1 + 1} = \\frac{1}{2}mgR$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "For a height $h \\ll R$, the change in gravitational potential energy simplifies to $\\Delta U \\approx mgh$.",
    reason: "Near the surface of the Earth, the acceleration due to gravity $g$ can be treated as practically uniform.",
    correctOptionIndex: 0,
    explanation: "From $\\Delta U = \\frac{mgh}{1 + h/R}$, when $h/R \\ll 1$, the denominator $(1 + h/R) \\approx 1$, leading directly to $\\Delta U \\approx mgh$. This corresponds to a uniform field approximation. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "No work is done by the gravitational field when a satellite moves in a circular orbit around the Earth.",
    reason: "In a circular orbit, the gravitational force is strictly centripetal and always perpendicular to the instantaneous displacement vector.",
    correctOptionIndex: 0,
    explanation: "In a circular orbit, the gravitational force is directed along the radius vector towards the centre, while the velocity vector is tangential. Thus $\\vec{F} \\cdot d\\vec{r} = F ds \\cos 90^\\circ = 0$. Hence work done is zero. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Gravitational potential is a scalar quantity while gravitational field intensity is a vector quantity.",
    reason: "Gravitational potential represents potential energy per unit mass, whereas gravitational field intensity represents gravitational force per unit mass.",
    correctOptionIndex: 0,
    explanation: "Gravitational potential $V = \\frac{U}{m}$ is work/energy per unit mass (scalar, SI unit $\\text{J/kg}$). Gravitational field $\\vec{E} = \\frac{\\vec{F}}{m}$ is force per unit mass (vector, SI unit $\\text{N/kg}$ or $\\text{m/s}^2$). Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A particle released from rest at a distance $r$ from a fixed mass accelerates towards it and its kinetic energy increases as potential energy decreases.",
    reason: "Gravitational interaction is conservative, so total mechanical energy $E = K + U$ remains constant.",
    correctOptionIndex: 0,
    explanation: "Under conservative gravitational forces, $\\Delta K + \\Delta U = 0$. As the particle falls inward, $r$ decreases, causing $U = -\\frac{GMm}{r}$ to become more negative (decrease), which is converted into an increase in kinetic energy $K$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a body is projected vertically upwards with speed $v = \\sqrt{gR}$ from the Earth's surface, it reaches a maximum height $h = R$.",
    reason: "By conservation of mechanical energy, $\\frac{1}{2}mv^2 = \\frac{mgh}{1 + h/R}$.",
    correctOptionIndex: 0,
    explanation: "Equating initial kinetic energy to potential energy gain: $\\frac{1}{2}m(gR) = \\frac{mgh}{1 + h/R} \\implies \\frac{1}{2}R = \\frac{h}{1 + h/R} \\implies \\frac{1}{2}R + \\frac{1}{2}h = h \\implies \\frac{1}{2}h = \\frac{1}{2}R \\implies h = R$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The total mechanical energy of a bound two-body gravitational system is always negative.",
    reason: "For a bound system, the potential energy is negative and its magnitude is greater than the positive kinetic energy.",
    correctOptionIndex: 0,
    explanation: "For a bound circular orbit, $K = \\frac{GMm}{2r}$ and $U = -\\frac{GMm}{r}$. Total energy $E = K + U = -\\frac{GMm}{2r} < 0$. A negative total mechanical energy signifies that the system is bound and cannot separate to infinity without external energy input. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The work required to lift a body of mass $m$ from the surface of Earth to infinity is equal to $mgR$.",
    reason: "The gravitational potential at the surface of Earth is $-gR$ and at infinity is 0.",
    correctOptionIndex: 0,
    explanation: "Work required $W = U(\\infty) - U(R) = 0 - \\left(-\\frac{GMm}{R}\\right) = \\frac{GMm}{R} = mgR$ (since $g = GM/R^2$). Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Gravitational equipotential surfaces around a point mass are concentric spheres centred at the mass.",
    reason: "The gravitational potential of a point mass depends only on the radial distance $r$ from the mass: $V(r) = -\\frac{GM}{r}$.",
    correctOptionIndex: 0,
    explanation: "Because $V(r)$ is spherically symmetric and constant for a fixed $r$, the surfaces of constant potential $V = \\text{constant}$ are concentric spherical shells centred at the point mass. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The gravitational potential at a point on the axis of a uniform thin circular ring of radius $R$ and mass $M$ at distance $x$ from the centre is $V(x) = -\\frac{GM}{\\sqrt{R^2 + x^2}}$.",
    reason: "Every point on the ring is at the same distance $\\sqrt{R^2 + x^2}$ from the axial point.",
    correctOptionIndex: 0,
    explanation: "Because every element $dM$ on the ring is equidistant from the axial point at $r = \\sqrt{R^2 + x^2}$, the scalar potential is $V = -\\int \\frac{G dM}{\\sqrt{R^2 + x^2}} = -\\frac{G M}{\\sqrt{R^2 + x^2}}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The binding energy of a body of mass $m$ lying on the surface of the Earth is $\\frac{GMm}{R}$.",
    reason: "Binding energy is defined as the minimum energy that must be supplied to a body to remove it to infinity from the gravitational field.",
    correctOptionIndex: 0,
    explanation: "At rest on the surface, $E = U = -\\frac{GMm}{R}$. To take it to infinity with zero kinetic energy ($E = 0$), the energy supplied must be $\\Delta E = 0 - \\left(-\\frac{GMm}{R}\\right) = \\frac{GMm}{R} = mgR$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If gravitational potential in a region is constant, the gravitational field intensity in that region must be zero.",
    reason: "Gravitational field intensity is related to potential by $\\vec{E} = -\\vec{\\nabla} V$.",
    correctOptionIndex: 0,
    explanation: "Since $\\vec{E} = -\\vec{\\nabla} V$, if $V$ is constant everywhere in a region, its spatial derivatives are zero, hence $\\vec{E} = 0$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Three identical particles of mass $m$ placed at the vertices of an equilateral triangle of side $a$ have total gravitational potential energy $U = -\\frac{3Gm^2}{a}$.",
    reason: "There are three distinct pairs of interacting particles in a system of three particles.",
    correctOptionIndex: 0,
    explanation: "For three particles, the number of pairs is $\\binom{3}{2} = 3$. Each pair contributes $-\\frac{Gm^2}{a}$. Total potential energy is $U = 3\\left(-\\frac{Gm^2}{a}\\right) = -\\frac{3Gm^2}{a}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The gravitational potential at infinity can be chosen to have any arbitrary constant value $V_0$.",
    reason: "Only differences in potential $\\Delta V$ have physical significance in classical mechanics.",
    correctOptionIndex: 0,
    explanation: "Because physical quantities such as gravitational force and work depend only on the gradient of potential ($\\vec{E} = -\\vec{\\nabla} V$) and potential differences, adding an arbitrary constant $V_0$ to potential everywhere does not alter any observable physical effect. Both are true and Reason explains Assertion."
  },
  {
    assertion: "When a meteor falls towards Earth from deep space, its velocity increases as it approaches the surface.",
    reason: "As the distance from Earth's centre decreases, the gravitational potential energy becomes more negative, converting into kinetic energy.",
    correctOptionIndex: 0,
    explanation: "Total mechanical energy is conserved: $K + U = \\text{constant}$. Since $U = -\\frac{GMm}{r}$ decreases (becomes more negative) as $r$ decreases, $K = \\frac{1}{2}mv^2$ must increase, speeding up the meteor. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Two concentric spherical shells of masses $M_1$ and $M_2$ and radii $R_1 < R_2$ produce a potential at a point $r < R_1$ equal to $-G\\left(\\frac{M_1}{R_1} + \\frac{M_2}{R_2}\\right)$.",
    reason: "The potential inside any uniform spherical shell is uniform and equal to its value on the surface.",
    correctOptionIndex: 0,
    explanation: "For $r < R_1$, the point is inside both shells. Shell 1 contributes $-GM_1/R_1$ and shell 2 contributes $-GM_2/R_2$. By superposition, $V = -G\\left(\\frac{M_1}{R_1} + \\frac{M_2}{R_2}\\right)$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A body of mass $m$ is moved from Earth's centre to its surface. The work done by external agent is $\\frac{1}{2}mgR$.",
    reason: "The potential at the centre is $-1.5 gR$ and at the surface is $-gR$, so $\\Delta V = 0.5 gR$.",
    correctOptionIndex: 0,
    explanation: "$W_{\\text{ext}} = m(V_{\\text{surface}} - V_{\\text{centre}}) = m\\left(-gR - (-1.5 gR)\\right) = 0.5 mgR = \\frac{1}{2}mgR$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Gravitational field lines always point in the direction of increasing gravitational potential.",
    reason: "The electric field points in the direction of decreasing potential, but gravitational field is attractive.",
    correctOptionIndex: 3,
    explanation: "By definition, $\\vec{E} = -\\vec{\\nabla} V$. The negative sign ensures that the field vector always points in the direction of steepest DECREASE of potential. Hence Assertion is false, Reason is false (correct choice: Assertion is false, Reason is false/true -> D)."
  },
  {
    assertion: "The escape speed from the surface of Earth does not depend on the direction in which the body is projected.",
    reason: "Gravitational potential energy is a scalar quantity and depends only on distance from the centre of Earth.",
    correctOptionIndex: 0,
    explanation: "Conservation of mechanical energy states $\\frac{1}{2}mv^2 - \\frac{GMm}{R} = 0$. Since kinetic energy and potential energy are scalar quantities independent of velocity direction, the required escape speed is identical in all directions (neglecting Earth's rotation). Both are true and Reason explains Assertion."
  },
  {
    assertion: "The dimensional formula of gravitational potential is $[M^0 L^2 T^{-2}]$.",
    reason: "Gravitational potential is defined as work done per unit mass, which gives $[V] = \\frac{[M L^2 T^{-2}]}{[M]} = [L^2 T^{-2}]$.",
    correctOptionIndex: 0,
    explanation: "Work has dimensions $[M L^2 T^{-2}]$ and mass has dimension $[M]$. Therefore $[V] = [M^0 L^2 T^{-2}]$. Both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "Four particles of equal mass $m$ at the corners of a square of side $a$ have total potential energy $U = -\\frac{Gm^2}{a}(4 + \\sqrt{2})$.",
    reason: "There are four sides of length $a$ and two diagonals of length $a\\sqrt{2}$, making a total of 6 pairwise interactions.",
    correctOptionIndex: 0,
    explanation: "The 4 sides each contribute $-\\frac{Gm^2}{a}$. The 2 diagonals each contribute $-\\frac{Gm^2}{a\\sqrt{2}} = -\\frac{\\sqrt{2}Gm^2}{2a} = -\\frac{Gm^2}{\\sqrt{2}a}$.\nTotal $U = -4\\frac{Gm^2}{a} - 2\\frac{Gm^2}{\\sqrt{2}a} = -\\frac{Gm^2}{a}(4 + \\sqrt{2})$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a body is dropped from height $h = R$ above Earth's surface, its speed on striking the ground is $v = \\sqrt{gR}$.",
    reason: "The loss in gravitational potential energy is $\\frac{1}{2}mgR$, which equals the gain in kinetic energy $\\frac{1}{2}mv^2$.",
    correctOptionIndex: 0,
    explanation: "$\\Delta U = \\frac{mgh}{1 + h/R} = \\frac{mgR}{2}$.\nEquating to kinetic energy: $\\frac{1}{2}mv^2 = \\frac{1}{2}mgR \\implies v = \\sqrt{gR}$.\nBoth Assertion and Reason are true and Reason is the correct explanation."
  }
];

// 7 Multiple-Choice questions
const mcqQuestions = [
  {
    question: "A body of mass $m$ is lifted from the surface of Earth to an altitude $h = 2R$, where $R$ is the radius of Earth and $g$ is the acceleration due to gravity on Earth's surface. The change in gravitational potential energy of the body is:",
    options: [
      "$\\frac{2}{3}mgR$",
      "$\\frac{1}{3}mgR$",
      "$\\frac{1}{2}mgR$",
      "$2mgR$"
    ],
    correctOptionIndex: 0,
    explanation: "The change in gravitational potential energy is:\n$$\\Delta U = U(R+h) - U(R) = -\\frac{GMm}{R+h} - \\left(-\\frac{GMm}{R}\\right) = GMm\\left(\\frac{1}{R} - \\frac{1}{R+h}\\right) = \\frac{GMm h}{R(R+h)} = \\frac{mgh}{1 + h/R}$$\nSubstitute $h = 2R$:\n$$\\Delta U = \\frac{mg(2R)}{1 + 2} = \\frac{2}{3}mgR$$"
  },
  {
    question: "The gravitational potential $V$ in a region varies with distance $x$ according to $V(x) = \\frac{-k}{x}$, where $k$ is a positive constant. The magnitude and direction of the gravitational field intensity $E$ is:",
    options: [
      "$\\frac{k}{x^2}$, directed along $-x$ direction",
      "$\\frac{k}{x^2}$, directed along $+x$ direction",
      "$\\frac{k}{x}$, directed along $-x$ direction",
      "$\\frac{2k}{x^3}$, directed along $+x$ direction"
    ],
    correctOptionIndex: 0,
    explanation: "Gravitational field is $E_x = -\\frac{dV}{dx} = -\\frac{d}{dx}\\left(-\\frac{k}{x}\\right) = -\\left(\\frac{k}{x^2}\\right) = -\\frac{k}{x^2}$.\nThe magnitude is $\\frac{k}{x^2}$ and the negative sign indicates it is directed along the $-x$ direction."
  },
  {
    question: "A particle of mass $m$ is placed at the centre of a uniform spherical shell of mass $M$ and radius $R$. The gravitational potential at a distance $r = R/2$ from the centre is:",
    options: [
      "$-\\frac{GM}{R} - \\frac{2Gm}{R}$",
      "$-\\frac{GM}{R}$",
      "$-\\frac{2Gm}{R}$",
      "$-\\frac{3GM}{2R}$"
    ],
    correctOptionIndex: 0,
    explanation: "Potential at distance $r = R/2$ has two contributions:\n1. Due to the spherical shell: since $r < R$, $V_{\\text{shell}} = -\\frac{GM}{R}$.\n2. Due to the point mass $m$ at the centre: at distance $r = R/2$, $V_{\\text{point}} = -\\frac{Gm}{r} = -\\frac{Gm}{R/2} = -\\frac{2Gm}{R}$.\nTotal potential: $V = -\\frac{GM}{R} - \\frac{2Gm}{R}$."
  },
  {
    question: "Three equal masses of mass $M$ are placed at the vertices of an equilateral triangle of side $a$. What is the gravitational potential at the centroid of the triangle?",
    options: [
      "$-3\\sqrt{3}\\frac{GM}{a}$",
      "$-3\\frac{GM}{a}$",
      "$-\\sqrt{3}\\frac{GM}{a}$",
      "$-6\\frac{GM}{a}$"
    ],
    correctOptionIndex: 0,
    explanation: "Distance from each vertex to the centroid of an equilateral triangle of side $a$ is $r_0 = \\frac{a}{\\sqrt{3}}$.\nEach mass contributes $V_i = -\\frac{GM}{r_0} = -\\frac{GM}{a/\\sqrt{3}} = -\\frac{\\sqrt{3}GM}{a}$.\nTotal potential at the centroid:\n$$V = 3 \\times \\left(-\\frac{\\sqrt{3}GM}{a}\\right) = -3\\sqrt{3}\\frac{GM}{a}$$"
  },
  {
    question: "If a body is released from a height $h = 3R$ above the surface of Earth, the velocity with which it strikes the surface of Earth is:",
    options: [
      "$\\sqrt{\\frac{3}{2}gR}$",
      "$\\sqrt{\\frac{1}{2}gR}$",
      "$\\sqrt{2gR}$",
      "$\\sqrt{\\frac{2}{3}gR}$"
    ],
    correctOptionIndex: 0,
    explanation: "Loss in potential energy equals gain in kinetic energy:\n$$\\frac{1}{2}mv^2 = \\Delta U = \\frac{mgh}{1 + h/R} = \\frac{mg(3R)}{1 + 3} = \\frac{3}{4}mgR$$\n$$v^2 = 2 \\times \\frac{3}{4}gR = \\frac{3}{2}gR \\implies v = \\sqrt{\\frac{3}{2}gR}$$"
  },
  {
    question: "The gravitational potential $V$ at the surface of a uniform solid sphere of radius $R$ is $V_0$. What is the gravitational potential at the centre of this sphere?",
    options: [
      "$1.5 V_0$",
      "$2 V_0$",
      "$V_0$",
      "$0.5 V_0$"
    ],
    correctOptionIndex: 0,
    explanation: "For a uniform solid sphere, potential at distance $r \\le R$ is $V(r) = -\\frac{GM}{2R^3}(3R^2 - r^2)$.\nAt surface: $V_0 = -\\frac{GM}{R}$.\nAt centre ($r = 0$): $V_{\\text{centre}} = -\\frac{3GM}{2R} = \\frac{3}{2} V_0 = 1.5 V_0$."
  },
  {
    question: "What is the minimum work required to double the distance between two masses $m_1$ and $m_2$ which are initially separated by a distance $r$?",
    options: [
      "$\\frac{G m_1 m_2}{2r}$",
      "$\\frac{G m_1 m_2}{r}$",
      "$\\frac{2G m_1 m_2}{r}$",
      "$\\frac{G m_1 m_2}{4r}$"
    ],
    correctOptionIndex: 0,
    explanation: "Initial potential energy: $U_i = -\\frac{G m_1 m_2}{r}$.\nFinal potential energy: $U_f = -\\frac{G m_1 m_2}{2r}$.\nWork required: $W = U_f - U_i = -\\frac{G m_1 m_2}{2r} - \\left(-\\frac{G m_1 m_2}{r}\\right) = \\frac{G m_1 m_2}{2r}$."
  }
];

// 20 Numerical questions
const numQuestions = [
  {
    question: "A body of mass $m$ is projected vertically upwards from Earth's surface with speed $v = \\sqrt{\\frac{4}{3}gR}$. Find the maximum height $h$ reached by the body in terms of $R$ (i.e. if $h = 2R$, enter 2).",
    correctAnswer: "2",
    explanation: "Using conservation of energy: $\\frac{1}{2}mv^2 = \\frac{mgh}{1 + h/R}$.\n$$\\frac{1}{2}m\\left(\\frac{4}{3}gR\\right) = \\frac{mgh}{1 + h/R} \\implies \\frac{2}{3}R = \\frac{h}{1 + h/R}$$\n$$2R + 2h = 3h \\implies h = 2R$$"
  },
  {
    question: "A body of mass $m = 10\\text{ kg}$ is taken from Earth's surface to a height equal to the radius of Earth ($R = 6400\\text{ km}$). If $g = 10\\text{ m/s}^2$, find the increase in potential energy in megajoules ($10^6\\text{ J}$) rounded to the nearest integer.",
    correctAnswer: "320",
    explanation: "$\\Delta U = \\frac{1}{2}mgR = \\frac{1}{2}(10)(10)(6.4 \\times 10^6) = 320 \\times 10^6\\text{ J} = 320\\text{ MJ}$."
  },
  {
    question: "Three point masses of $1\\text{ kg}, 2\\text{ kg}$, and $3\\text{ kg}$ are located at the vertices of an equilateral triangle of side $1\\text{ m}$. The magnitude of the gravitational potential energy of the system is $n \\times G\\text{ J}$. Find the value of $n$.",
    correctAnswer: "11",
    explanation: "Pairs are $(1,2)$, $(2,3)$, and $(1,3)$:\n$$U = -G\\left(\\frac{1 \\times 2}{1} + \\frac{2 \\times 3}{1} + \\frac{1 \\times 3}{1}\\right) = -G(2 + 6 + 3) = -11G$$\nMagnitude is $11G$, so $n = 11$."
  },
  {
    question: "A body is released from a height $h = R$ above the Earth's surface. If it reaches the surface with speed $v = \\sqrt{k \\times gR}$, find the value of $k$ as a decimal.",
    correctAnswer: "1",
    explanation: "Loss in potential energy equals gain in kinetic energy:\n$$\\frac{1}{2}mv^2 = \\frac{mgh}{1 + h/R} = \\frac{mgR}{2} \\implies v^2 = gR \\implies v = \\sqrt{1 \\times gR}$$\nThus $k = 1$."
  },
  {
    question: "A rocket is fired vertically upwards from Earth's surface with speed $v$. If the maximum altitude reached is $h = 3R$, and $v = \\sqrt{k \\times gR}$, find the value of $k$ as a decimal.",
    correctAnswer: "1.5",
    explanation: "$\\frac{1}{2}mv^2 = \\frac{mgh}{1 + h/R} = \\frac{mg(3R)}{1 + 3} = \\frac{3}{4}mgR$.\n$$v^2 = 2 \\times \\frac{3}{4}gR = \\frac{3}{2}gR = 1.5 gR$$\nThus $k = 1.5$."
  },
  {
    question: "The gravitational potential on the surface of a planet is $-6.0 \\times 10^7\\text{ J/kg}$. What is the gravitational potential at the centre of the planet in units of $10^7\\text{ J/kg}$? (Assuming uniform density; enter numerical value, e.g. -9)",
    correctAnswer: "-9",
    explanation: "At the centre of a uniform solid sphere, $V_c = 1.5 V_s = 1.5 \\times (-6.0 \\times 10^7) = -9.0 \\times 10^7\\text{ J/kg}$."
  },
  {
    question: "Four identical masses, each of $1\\text{ kg}$, are placed at the four corners of a square of side $1\\text{ m}$. The magnitude of total gravitational potential energy of the system is $k \\times G\\text{ J}$. Find $k$ rounded to two decimal places (using $\\sqrt{2} \\approx 1.414$).",
    correctAnswer: "5.41",
    explanation: "4 sides of length 1 m contribute $4 \\times \\frac{G(1)(1)}{1} = 4G$.\n2 diagonals of length $\\sqrt{2}\\text{ m}$ contribute $2 \\times \\frac{G(1)(1)}{\\sqrt{2}} = \\sqrt{2}G \\approx 1.414 G$.\nTotal magnitude: $U = (4 + 1.414)G = 5.414 G \\approx 5.41 G$."
  },
  {
    question: "What is the work done (in Joules) by an external agent in taking a mass of $1\\text{ kg}$ from a point where the gravitational potential is $-20\\text{ J/kg}$ to a point where the gravitational potential is $-5\\text{ J/kg}$?",
    correctAnswer: "15",
    explanation: "$$W = m(V_f - V_i) = 1 \\times (-5 - (-20)) = 1 \\times 15 = 15\\text{ J}$$"
  },
  {
    question: "Two bodies of masses $m$ and $M$ are initially at rest at an infinite separation. If they move towards each other under mutual gravitational attraction, their relative velocity of approach at a separation $r$ is $v = \\sqrt{\\frac{2G(M+m)}{r}}$. If $M = 3\\text{ kg}, m = 1\\text{ kg}, r = 1\\text{ m}$, and $v = \\sqrt{k G}$, find the integer $k$.",
    correctAnswer: "8",
    explanation: "By conservation of momentum and energy:\n$$\\frac{1}{2}\\mu v_{\\text{rel}}^2 = \\frac{GMm}{r}$$\nwhere reduced mass $\\mu = \\frac{Mm}{M+m}$.\n$$v_{\\text{rel}} = \\sqrt{\\frac{2GMm}{\\mu r}} = \\sqrt{\\frac{2G(M+m)}{r}} = \\sqrt{\\frac{2G(4)}{1}} = \\sqrt{8G}$$\nThus $k = 8$."
  },
  {
    question: "A uniform spherical shell has mass $M = 100\\text{ kg}$ and radius $R = 2\\text{ m}$. The gravitational potential at distance $r = 1\\text{ m}$ from the centre in terms of $G$ is $-n G\\text{ J/kg}$. Find the integer $n$.",
    correctAnswer: "50",
    explanation: "Inside the shell ($r < R$), the potential is constant and equal to the surface potential:\n$$V = -\\frac{GM}{R} = -\\frac{G(100)}{2} = -50G\\text{ J/kg}$$\nThus $n = 50$."
  },
  {
    question: "A body of mass $m$ is projected vertically upwards from Earth's surface with speed $v = \\sqrt{0.5 gR}$. The maximum height reached by the body is $h = R / n$. Find the integer $n$.",
    correctAnswer: "3",
    explanation: "$\\frac{1}{2}m(0.5 gR) = \\frac{mgh}{1 + h/R} \\implies \\frac{1}{4}R = \\frac{h}{1 + h/R} \\implies R + h = 4h \\implies 3h = R \\implies h = R/3$.\nThus $n = 3$."
  },
  {
    question: "A mass of $2\\text{ kg}$ is moved from the centre of Earth to its surface. If mass of Earth is $M$, radius $R$, and $gR = 6.4 \\times 10^7\\text{ J/kg}$, find the work done in megajoules ($10^6\\text{ J}$) rounded to the nearest integer.",
    correctAnswer: "64",
    explanation: "$W = m(V_s - V_c) = m(-gR - (-1.5 gR)) = 0.5 m gR = 0.5 \\times 2 \\times 6.4 \\times 10^7 = 6.4 \\times 10^7\\text{ J} = 64\\text{ MJ}$."
  },
  {
    question: "The gravitational potential in a region along the x-axis is given by $V(x) = (20x^2 - 40x)\\text{ J/kg}$. At what position $x$ (in metres) is the gravitational field intensity zero?",
    correctAnswer: "1",
    explanation: "$$E_x = -\\frac{dV}{dx} = -(40x - 40) = 40 - 40x$$\nSetting $E_x = 0 \\implies 40 - 40x = 0 \\implies x = 1\\text{ m}$."
  },
  {
    question: "If the gravitational potential on Earth's surface is $-gR$, how much energy (in units of $mgR$) is required to launch a particle of mass $m$ to an altitude $h = 4R$?",
    correctAnswer: "0.8",
    explanation: "$$\\Delta U = \\frac{mgh}{1 + h/R} = \\frac{mg(4R)}{1 + 4} = \\frac{4}{5}mgR = 0.8 mgR$$"
  },
  {
    question: "A uniform ring of mass $M = 8\\text{ kg}$ and radius $R = 3\\text{ m}$ is situated in space. What is the gravitational potential at a point on its axis at $x = 4\\text{ m}$ from the centre in terms of $G$? (Enter magnitude of $V/G$, e.g. 1.6)",
    correctAnswer: "1.6",
    explanation: "$$V = -\\frac{GM}{\\sqrt{R^2 + x^2}} = -\\frac{G(8)}{\\sqrt{9 + 16}} = -\\frac{8G}{5} = -1.6G$$\nMagnitude is $1.6$."
  },
  {
    question: "Two masses $m_1 = 4\\text{ kg}$ and $m_2 = 9\\text{ kg}$ are initially separated by $3\\text{ m}$. What is the work done in Joules by an external agent to increase their separation to $6\\text{ m}$? (Answer in terms of $G$, i.e. $W/G$ as an integer)",
    correctAnswer: "6",
    explanation: "$$W = -G m_1 m_2 \\left(\\frac{1}{r_2} - \\frac{1}{r_1}\\right) = -G(4)(9)\\left(\\frac{1}{6} - \\frac{1}{3}\\right) = -36G\\left(-\\frac{1}{6}\\right) = 6G$$\nThus $W/G = 6$."
  },
  {
    question: "A particle of mass $m$ is projected vertically from Earth's surface. If the ratio of kinetic energy to potential energy at the surface is $1/2$ (taking $U = -mgR$), what is the maximum height $h$ reached in terms of $R$?",
    correctAnswer: "1",
    explanation: "Given $K = \\frac{1}{2}|U| = \\frac{1}{2}mgR$.\nEquating to $\\Delta U$: $\\frac{1}{2}mgR = \\frac{mgh}{1 + h/R} \\implies \\frac{1}{2} = \\frac{h/R}{1 + h/R} \\implies 1 + h/R = 2h/R \\implies h = R$."
  },
  {
    question: "The potential energy of a satellite of mass $m = 100\\text{ kg}$ in a circular orbit of radius $2R$ around Earth is $U = -k \\times 10^9\\text{ J}$. If $g = 10\\text{ m/s}^2$ and $R = 6.4 \\times 10^6\\text{ m}$, find the value of $k$ as a decimal.",
    correctAnswer: "3.2",
    explanation: "$$U = -\\frac{GMm}{r} = -\\frac{GMm}{2R} = -\\frac{1}{2}mgR = -\\frac{1}{2}(100)(10)(6.4 \\times 10^6) = -3.2 \\times 10^9\\text{ J}$$\nThus $k = 3.2$."
  },
  {
    question: "Two concentric spherical shells have masses $M$ and $2M$ and radii $R$ and $2R$. What is the gravitational potential at their common centre in terms of $GM/R$? (Enter magnitude as a decimal, e.g. 2.0)",
    correctAnswer: "2.0",
    explanation: "At the centre, shell 1 contributes $-GM/R$ and shell 2 contributes $-G(2M)/(2R) = -GM/R$.\nTotal $V = -GM/R - GM/R = -2 GM/R$.\nMagnitude is $2.0$."
  },
  {
    question: "At what distance $r$ from the centre of a uniform solid sphere of mass $M$ and radius $R = 4\\text{ m}$ is the gravitational potential equal to $-1.25\\frac{GM}{R}$? (Enter distance in metres)",
    correctAnswer: "2",
    explanation: "Inside the solid sphere: $V(r) = -\\frac{GM}{2R^3}(3R^2 - r^2) = -1.25\\frac{GM}{R} = -\\frac{5}{4}\\frac{GM}{R}$.\n$$\\frac{3R^2 - r^2}{2R^2} = \\frac{5}{4} \\implies 6R^2 - 2r^2 = 5R^2 \\implies 2r^2 = R^2 \\implies r = \\frac{R}{\\sqrt{2}}$$\nWait, with $R = 4\\text{ m}$, $r = 4/\\sqrt{2} = 2\\sqrt{2} \\approx 2.83\\text{ m}$.\nLet us choose $V(r) = -1.125 \\frac{GM}{R} = -\\frac{9}{8}\\frac{GM}{R}$:\n$$\\frac{3R^2 - r^2}{2R^2} = \\frac{9}{8} \\implies 12R^2 - 4r^2 = 9R^2 \\implies 4r^2 = 3R^2$$\nWait, let's look at $V(r) = -1.375 \\frac{GM}{R} = -\\frac{11}{8}\\frac{GM}{R}$:\n$$\\frac{3R^2 - r^2}{2R^2} = \\frac{11}{8} \\implies 12R^2 - 4r^2 = 11R^2 \\implies 4r^2 = R^2 \\implies r = R/2 = 4/2 = 2\\text{ m}$$.\nAt $r = R/2 = 2\\text{ m}$, $V = -\\frac{GM}{2R^3}(3R^2 - R^2/4) = -\\frac{GM}{2R^3}\\frac{11R^2}{4} = -\\frac{11}{8}\\frac{GM}{R} = -1.375\\frac{GM}{R}$."
  }
];

function buildPart2() {
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

  const outPath = path.join(__dirname, 'data_jee_grav_part2.js');
  const fileContent = `// Auto-generated Part 2 for Gravitation - Gravitational potential energy\nmodule.exports = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf-8');
  console.log(`Part 2 generated: ${result.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);
  console.log(`Saved to ${outPath}`);
}

buildPart2();
