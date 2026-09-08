const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Lorentz force";
const questions = [];

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
  "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion.",
  "Assertion is true but Reason is false.",
  "Assertion is false but Reason is true."
];

// 26 ASSERTION_REASON questions
const arData = [
  {
    assertion: "A charged particle moving in a uniform magnetic field does not change its kinetic energy.",
    reason: "The magnetic Lorentz force acting on the charged particle is always perpendicular to its instantaneous velocity vector, doing zero work.",
    correct: 0,
    explanation: "The magnetic force is given by $\\vec{F} = q(\\vec{v} \\times \\vec{B})$, which is always perpendicular to the velocity $\\vec{v}$. The instantaneous power is $P = \\vec{F} \\cdot \\vec{v} = 0$. Since work done is zero, by the work-energy theorem the kinetic energy and speed remain constant. Both Assertion and Reason are true, and Reason is the correct explanation."
  },
  {
    assertion: "The time period of revolution of a charged particle in a uniform magnetic field is independent of its speed and radius of the circular path.",
    reason: "As the speed of the particle increases, the radius of the circular orbit increases proportionally such that the ratio $v/r = qB/m$ remains constant.",
    correct: 0,
    explanation: "The radius of circular motion in a magnetic field is $r = \\frac{mv}{qB}$. The time period is $T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$. Because $r \\propto v$, the angular frequency $\\omega = v/r = qB/m$ and period $T$ are independent of both speed and radius. Both Assertion and Reason are true, and Reason explains Assertion."
  },
  {
    assertion: "A proton and an alpha particle enter a uniform magnetic field perpendicular to it with the same kinetic energy. The radius of the circular trajectory of the proton is equal to that of the alpha particle.",
    reason: "The radius of a charged particle moving perpendicular to a magnetic field is given by $r = \\frac{\\sqrt{2mK}}{qB}$.",
    correct: 0,
    explanation: "For a proton, $m_p = m$ and $q_p = q$. For an alpha particle, $m_\\alpha = 4m$ and $q_\\alpha = 2q$. The radius is $r = \\frac{\\sqrt{2mK}}{qB}$. For proton: $r_p = \\frac{\\sqrt{2mK}}{qB}$. For alpha particle: $r_\\alpha = \\frac{\\sqrt{2(4m)K}}{(2q)B} = \\frac{2\\sqrt{2mK}}{2qB} = \\frac{\\sqrt{2mK}}{qB} = r_p$. Both are true and Reason explains Assertion."
  },
  {
    assertion: "A charged particle projected parallel or antiparallel to a uniform magnetic field experiences zero magnetic force and continues in a straight-line motion.",
    reason: "The magnitude of the magnetic Lorentz force is $F = q v B \\sin\\theta$, which vanishes when $\\theta = 0^\\circ$ or $\\theta = 180^\\circ$.",
    correct: 0,
    explanation: "Magnetic force is $\\vec{F} = q(\\vec{v} \\times \\vec{B})$. When the velocity is collinear with the magnetic field (angle $\\theta = 0^\\circ$ or $180^\\circ$), $\\sin\\theta = 0$, so $\\vec{F} = 0$. Consequently, the particle undergoes unaccelerated uniform motion along a straight line."
  },
  {
    assertion: "In a region containing mutually perpendicular electric and magnetic fields, a charged particle can pass through undeflected at only one particular speed.",
    reason: "For undeflected motion, the electrostatic force $q\\vec{E}$ and the magnetic force $q(\\vec{v} \\times \\vec{B})$ must be equal in magnitude and opposite in direction, which requires $v = E/B$.",
    correct: 0,
    explanation: "In crossed fields, the total Lorentz force is $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$. If $\\vec{E} \\perp \\vec{B}$ and $\\vec{v} \\perp \\vec{E}, \\vec{B}$, the electric and magnetic forces oppose each other. Zero deflection occurs when $qE = qvB \\implies v = E/B$. This forms the operating principle of a velocity selector."
  },
  {
    assertion: "A current-carrying planar loop of arbitrary shape placed in a uniform magnetic field experiences zero net translational magnetic force.",
    reason: "The net magnetic force on any closed loop in a uniform magnetic field is given by $\\vec{F} = I \\left( \\oint d\\vec{l} \\right) \\times \\vec{B}$, and the closed loop line integral $\\oint d\\vec{l}$ is identically zero.",
    correct: 0,
    explanation: "For a closed loop in a uniform field $\\vec{B}$, $\\vec{F} = I \\oint (d\\vec{l} \\times \\vec{B}) = I \\left( \\oint d\\vec{l} \\right) \\times \\vec{B}$. Since the vector sum of displacement vectors around any closed path is zero, $\\oint d\\vec{l} = 0$, giving $\\vec{F} = 0$."
  },
  {
    assertion: "The pitch of the helical path of a charged particle in a uniform magnetic field depends on both the parallel component of velocity and the magnetic field strength.",
    reason: "Pitch is the distance travelled along the magnetic field direction in one time period, given by $p = v_\\parallel T = (v \\cos\\theta) \\frac{2\\pi m}{qB}$.",
    correct: 0,
    explanation: "When a charged particle enters a magnetic field at an angle $\\theta$ ($0 < \\theta < 90^\\circ$), its velocity resolves into $v_\\parallel = v\\cos\\theta$ and $v_\\perp = v\\sin\\theta$. The pitch is $p = v_\\parallel T = (v\\cos\\theta)\\frac{2\\pi m}{qB}$, which clearly depends on both $v_\\parallel$ and $B$."
  },
  {
    assertion: "A neutron moving perpendicular to a strong magnetic field follows a circular path.",
    reason: "The magnetic force on a particle depends on its velocity and the magnetic field strength.",
    correct: 3,
    explanation: "A neutron is an electrically neutral particle ($q = 0$). Since the magnetic Lorentz force is $\\vec{F} = q(\\vec{v} \\times \\vec{B})$, $\\vec{F} = 0$ for a neutron regardless of its velocity or field strength. Thus, the neutron moves in an undeflected straight line, making Assertion false. Reason is true for charged particles."
  },
  {
    assertion: "If a charged particle is projected into a magnetic field, its acceleration is always perpendicular to its velocity.",
    reason: "Newton's second law gives $\\vec{a} = \\frac{\\vec{F}}{m} = \\frac{q}{m}(\\vec{v} \\times \\vec{B})$, and the cross product $\\vec{v} \\times \\vec{B}$ is orthogonal to both $\\vec{v}$ and $\\vec{B}$.",
    correct: 0,
    explanation: "Because the magnetic force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is purely orthogonal to $\\vec{v}$, the acceleration $\\vec{a} = \\vec{F}/m$ is perpendicular to $\\vec{v}$. This constitutes a purely centripetal acceleration."
  },
  {
    assertion: "The kinetic energy of an ion emerging from a cyclotron is directly proportional to the square of the radius of the dees.",
    reason: "The maximum speed of the ion at the exit radius $R$ is $v_{max} = \\frac{q B R}{m}$, yielding maximum kinetic energy $K_{max} = \\frac{q^2 B^2 R^2}{2m}$.",
    correct: 0,
    explanation: "At the outer radius $R$ of the dees, the centripetal force is supplied by the magnetic force: $\\frac{m v_{max}^2}{R} = q v_{max} B \\implies v_{max} = \\frac{qBR}{m}$. The maximum kinetic energy is $K_{max} = \\frac{1}{2}m v_{max}^2 = \\frac{q^2 B^2 R^2}{2m}$, which is directly proportional to $R^2$."
  },
  {
    assertion: "Electrons cannot be accelerated to high relativistic energies using a standard cyclotron.",
    reason: "At relativistic speeds, the mass of the electron increases significantly according to $m = \\frac{m_0}{\\sqrt{1 - v^2/c^2}}$, causing the resonance frequency $\\nu = \\frac{qB}{2\\pi m}$ to decrease and fall out of phase with the oscillator.",
    correct: 0,
    explanation: "Because an electron has an extremely small rest mass, it reaches relativistic speeds at very low energies. Relativistic mass increase changes the orbital period, destroying synchronization with the constant-frequency RF electric field."
  },
  {
    assertion: "A stationary electric charge placed in a uniform magnetic field experiences a strong magnetic force.",
    reason: "The magnetic force on a charge depends directly on the magnitude of the charge and the magnetic field.",
    correct: 3,
    explanation: "Magnetic force is $\\vec{F} = q(\\vec{v} \\times \\vec{B})$. When the charge is at rest ($v = 0$), the magnetic force is identically zero. Hence, Assertion is false. Reason is also misleading because it omits the velocity dependence."
  },
  {
    assertion: "A straight wire of length $L$ carrying current $I$ placed in a magnetic field $\\vec{B}$ experiences maximum force when it is perpendicular to the field.",
    reason: "The magnitude of the magnetic force on a current element is $F = I L B \\sin\\theta$, which attains its maximum value when $\\theta = 90^\\circ$.",
    correct: 0,
    explanation: "The magnetic force on a straight current-carrying wire is $\\vec{F} = I(\\vec{L} \\times \\vec{B})$. The magnitude is $F = I L B \\sin\\theta$. Maximum force occurs when $\\sin\\theta = 1$, i.e. $\\theta = 90^\\circ$."
  },
  {
    assertion: "A current loop placed in a non-uniform magnetic field may experience both a net force and a net torque.",
    reason: "In a non-uniform magnetic field, the magnetic forces acting on opposite segments of the loop do not cancel out, resulting in a net translational force in addition to torque.",
    correct: 0,
    explanation: "In a uniform magnetic field, the net force on any closed loop is zero while the torque $\\vec{\\tau} = \\vec{M} \\times \\vec{B}$ can be non-zero. However, if the field is non-uniform, $\\oint d\\vec{l} \\times \\vec{B} \\ne 0$, leading to a net non-zero magnetic force $\\vec{F} = \\nabla(\\vec{M} \\cdot \\vec{B})$ as well as a net torque."
  },
  {
    assertion: "The potential energy of a magnetic dipole $\\vec{M}$ in a uniform magnetic field $\\vec{B}$ is minimum when $\\vec{M}$ is antiparallel to $\\vec{B}$.",
    reason: "The potential energy of a magnetic dipole in a magnetic field is given by $U = -\\vec{M} \\cdot \\vec{B} = -M B \\cos\\theta$.",
    correct: 3,
    explanation: "The potential energy is $U = -M B \\cos\\theta$. For $\\theta = 180^\\circ$ (antiparallel), $U = +MB$, which is the maximum potential energy (unstable equilibrium). The minimum potential energy is $U = -MB$ when $\\theta = 0^\\circ$ (parallel, stable equilibrium). Assertion is false, Reason is true."
  },
  {
    assertion: "When an electron and a proton enter a transverse magnetic field with the same momentum, they follow circular paths of identical radius.",
    reason: "The orbital radius of a charged particle in a transverse magnetic field is given by $r = \\frac{p}{|q|B}$, which depends only on momentum $p$, magnitude of charge $|q|$, and magnetic field $B$.",
    correct: 0,
    explanation: "Orbital radius is $r = \\frac{mv}{|q|B} = \\frac{p}{|q|B}$. Since the proton and electron have identical magnitudes of charge ($e$) and the same momentum $p$, their radii of curvature in the same magnetic field $B$ are identical."
  },
  {
    assertion: "When an electron and a proton enter a transverse magnetic field with the same velocity, the radius of the electron's path is much smaller than that of the proton.",
    reason: "At identical velocities, the orbital radius is proportional to mass ($r = \\frac{mv}{qB}$), and the mass of an electron is approximately $1/1836$ of the proton's mass.",
    correct: 0,
    explanation: "Since $r = \\frac{mv}{qB}$ and both particles have the same speed $v$ and charge magnitude $e$, the ratio of their radii is $r_e / r_p = m_e / m_p \\approx 1/1836 \\ll 1$. Both Assertion and Reason are true, and Reason explains Assertion."
  },
  {
    assertion: "A flexible circular wire carrying current expands when placed in an external magnetic field directed perpendicular and outwards from its plane.",
    reason: "By Fleming's left-hand rule or $\\vec{F} = I(d\\vec{l} \\times \\vec{B})$, each current element of the circular wire experiences a radially outward magnetic force if the current is clockwise.",
    correct: 0,
    explanation: "If the current is clockwise and $\\vec{B}$ is directed outwards, $d\\vec{l} \\times \\vec{B}$ points radially outwards everywhere along the circumference. This tension causes the flexible loop to expand and assume a circular shape of maximum area."
  },
  {
    assertion: "The work done by a uniform magnetic field on a moving electric charge over any time interval is always zero.",
    reason: "The magnetic Lorentz force is conservative in nature.",
    correct: 2,
    explanation: "The magnetic force does zero work because it is always perpendicular to velocity: $dW = \\vec{F} \\cdot d\\vec{r} = q(\\vec{v} \\times \\vec{B}) \\cdot \\vec{v} dt = 0$. However, magnetic force is not conservative in the classical scalar potential sense (it is velocity-dependent and cannot be derived from a scalar potential $V(\\vec{r})$). Thus Assertion is true, but Reason is false."
  },
  {
    assertion: "In a magnetic field, the frequency of revolution of a charged particle does not depend on its kinetic energy.",
    reason: "The cyclotron frequency is given by $\\nu = \\frac{qB}{2\\pi m}$, which depends only on the specific charge $q/m$ and the magnetic field $B$.",
    correct: 0,
    explanation: "The frequency $\\nu = \\frac{1}{T} = \\frac{qB}{2\\pi m}$ depends solely on $q, m,$ and $B$, completely independent of velocity, radius, or kinetic energy. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Two ions having equal mass and equal charge enter a uniform magnetic field with kinetic energies in the ratio $1 : 4$. The ratio of their orbital radii is $1 : 2$.",
    reason: "The radius of the circular path of an ion in a magnetic field is directly proportional to the square root of its kinetic energy.",
    correct: 0,
    explanation: "Radius in terms of kinetic energy is $r = \\frac{\\sqrt{2mK}}{qB}$. Since $m, q,$ and $B$ are identical, $r \\propto \\sqrt{K}$. Therefore, $r_1 / r_2 = \\sqrt{K_1 / K_2} = \\sqrt{1/4} = 1/2$."
  },
  {
    assertion: "A current-carrying wire placed in a uniform magnetic field can be in static equilibrium under gravity and magnetic force.",
    reason: "By properly choosing the direction of current perpendicular to the magnetic field, the upward magnetic force $I L B$ can balance the downward gravitational force $m g$.",
    correct: 0,
    explanation: "If a horizontal wire carries current perpendicular to a horizontal magnetic field, an upward magnetic force $\\vec{F} = I(\\vec{L} \\times \\vec{B})$ of magnitude $F = ILB$ is produced. Equilibrium is achieved when $I L B = m g \\implies I = \\frac{mg}{LB}$."
  },
  {
    assertion: "A circular loop carrying current $I$ has magnetic moment $\\vec{M}$. If the radius of the loop is doubled while the current remains unchanged, its magnetic moment increases by a factor of 4.",
    reason: "The magnetic moment of a planar loop of area $A$ carrying current $I$ is $M = I A$, and the area of a circle is proportional to the square of its radius.",
    correct: 0,
    explanation: "Magnetic moment is $M = I A = I(\\pi R^2)$. When $R \\to 2R$, $A' = \\pi(2R)^2 = 4\\pi R^2 = 4A$. Hence, $M' = 4M$. Reason correctly explains Assertion."
  },
  {
    assertion: "An electron moving with velocity $\\vec{v}$ enters a region where both $\\vec{E}$ and $\\vec{B}$ exist. If the net force on it is zero, then $\\vec{E}$ and $\\vec{B}$ must be perpendicular to each other.",
    reason: "The net force is $\\vec{F} = -e(\\vec{E} + \\vec{v} \\times \\vec{B}) = 0$, which implies $\\vec{E} = -(\\vec{v} \\times \\vec{B})$. The cross product $\\vec{v} \\times \\vec{B}$ is inherently perpendicular to $\\vec{B}$, so $\\vec{E}$ must be perpendicular to $\\vec{B}$.",
    correct: 0,
    explanation: "For zero Lorentz force, $\\vec{E} = -(\\vec{v} \\times \\vec{B})$. Since $\\vec{v} \\times \\vec{B}$ is perpendicular to $\\vec{B}$, $\\vec{E}$ must be orthogonal to $\\vec{B}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a charged particle enters a region of uniform magnetic field at an acute angle to the field lines, the path traced is a helix with uniform pitch.",
    reason: "The parallel component of velocity $v_\\parallel = v\\cos\\theta$ remains constant because there is no component of magnetic force along the field direction.",
    correct: 0,
    explanation: "Since $\\vec{F} = q(\\vec{v} \\times \\vec{B})$, the component of force along $\\vec{B}$ is zero: $F_\\parallel = 0$. Hence $v_\\parallel$ is constant, producing uniform translation along the field lines, while $v_\\perp$ generates uniform circular motion, resulting in a constant-pitch helix."
  },
  {
    assertion: "A magnetic dipole in a uniform magnetic field experiences zero net torque when aligned either parallel or antiparallel to the field.",
    reason: "The magnitude of torque on a magnetic dipole is $\\tau = M B \\sin\\theta$, which vanishes at $\\theta = 0^\\circ$ and $\\theta = 180^\\circ$.",
    correct: 0,
    explanation: "The torque is $\\vec{\\tau} = \\vec{M} \\times \\vec{B}$, with magnitude $\\tau = MB\\sin\\theta$. At $\\theta = 0^\\circ$ (stable equilibrium) and $\\theta = 180^\\circ$ (unstable equilibrium), $\\sin\\theta = 0$, so the torque is zero."
  }
];

arData.forEach((item, idx) => {
  questions.push({
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.assertion}\nReason (R): ${item.reason}\nIn the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: arOptions,
    correctAnswer: item.correct,
    explanation: item.explanation,
    type: "ASSERTION_REASON",
    questionType: "Assertion-Reason",
    difficulty: idx % 3 === 0 ? "Easy" : (idx % 3 === 1 ? "Medium" : "Hard"),
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: "Magnetic Effects of Current and Magnetism",
    subject: "Physics",
    source: "JEE Main Question Bank"
  });
});

// 7 MCQ questions
const mcqData = [
  {
    q: "A proton, a deuteron, and an alpha particle with the same kinetic energy enter a uniform magnetic field perpendicular to their velocities. The ratio of the radii of their circular paths $r_p : r_d : r_\\alpha$ is:",
    opts: [
      "$1 : \\sqrt{2} : 1$",
      "$1 : 2 : 1$",
      "$\\sqrt{2} : 1 : 1$",
      "$1 : 1 : \\sqrt{2}$"
    ],
    ans: 0,
    exp: "Radius in terms of kinetic energy: $r = \\frac{\\sqrt{2mK}}{qB}$. Since $K$ and $B$ are the same, $r \\propto \\frac{\\sqrt{m}}{q}$. For proton: $m_p = 1, q_p = 1 \\implies \\frac{\\sqrt{1}}{1} = 1$. For deuteron: $m_d = 2, q_d = 1 \\implies \\frac{\\sqrt{2}}{1} = \\sqrt{2}$. For alpha particle: $m_\\alpha = 4, q_\\alpha = 2 \\implies \\frac{\\sqrt{4}}{2} = 1$. Therefore, $r_p : r_d : r_\\alpha = 1 : \\sqrt{2} : 1$."
  },
  {
    q: "A uniform magnetic field of magnitude $B = 0.5\\text{ T}$ points in the $+z$-direction. A particle of mass $m = 2.0 \\times 10^{-26}\\text{ kg}$ and charge $q = +1.6 \\times 10^{-19}\\text{ C}$ enters the field with velocity $\\vec{v} = (3.0\\hat{i} + 4.0\\hat{k}) \\times 10^5\\text{ m/s}$. The pitch of the helical path traversed by the particle is:",
    opts: [
      "$3.14\\text{ cm}$",
      "$6.28\\text{ cm}$",
      "$1.57\\text{ cm}$",
      "$4.71\\text{ cm}$"
    ],
    ans: 1,
    exp: "Here $v_\\parallel = 4.0 \\times 10^5\\text{ m/s}$ along $\\hat{k}$, and $v_\\perp = 3.0 \\times 10^5\\text{ m/s}$. Time period is $T = \\frac{2\\pi m}{qB} = \\frac{2\\pi (2.0 \\times 10^{-26})}{(1.6 \\times 10^{-19})(0.5)} = \\frac{4\\pi \\times 10^{-26}}{0.8 \\times 10^{-19}} = 5\\pi \\times 10^{-7}\\text{ s} = 1.571 \\times 10^{-6}\\text{ s}$. The pitch is $p = v_\\parallel T = (4.0 \\times 10^5)(5\\pi \\times 10^{-7}) = 2\\pi \\times 10^{-1}\\text{ m} = 0.2\\pi\\text{ m} \\approx 0.628\\text{ m} = 62.8\\text{ cm}$. Wait: let's recalculate: $4.0 \\times 10^5 \\times 5\\pi \\times 10^{-7} = 0.2\\pi\\text{ m} = 62.8\\text{ cm}$! If $m = 2.0 \\times 10^{-27}\\text{ kg}$, $p = 6.28\\text{ cm}$! Let's use $m = 2.0 \\times 10^{-27}\\text{ kg}$."
  },
  {
    q: "A horizontal wire of mass $10\\text{ g}$ and length $20\\text{ cm}$ carries a current of $2.0\\text{ A}$ towards the east. The minimum magnitude of the magnetic field required to support the weight of the wire is: (Take $g = 9.8\\text{ m/s}^2$)",
    opts: [
      "$0.125\\text{ T}$",
      "$0.245\\text{ T}$",
      "$0.490\\text{ T}$",
      "$0.980\\text{ T}$"
    ],
    ans: 1,
    exp: "For equilibrium, magnetic force must balance gravity: $F = I L B = m g \\implies B = \\frac{mg}{IL} = \\frac{(10 \\times 10^{-3}\\text{ kg})(9.8\\text{ m/s}^2)}{(2.0\\text{ A})(0.20\\text{ m})} = \\frac{0.098}{0.40} = 0.245\\text{ T}$."
  },
  {
    q: "An electron is moving with a velocity $\\vec{v} = 2 \\times 10^6\\hat{i}\\text{ m/s}$ in a region where an electric field $\\vec{E} = -8 \\times 10^3\\hat{j}\\text{ V/m}$ and a magnetic field $\\vec{B}$ are present. If the electron passes undeflected, what is the magnetic field $\\vec{B}$?",
    opts: [
      "$4 \\times 10^{-3}\\hat{k}\\text{ T}$",
      "$-4 \\times 10^{-3}\\hat{k}\\text{ T}$",
      "$4 \\times 10^{-3}\\hat{j}\\text{ T}$",
      "$-4 \\times 10^{-3}\\hat{i}\\text{ T}$"
    ],
    ans: 1,
    exp: "For zero deflection: $\\vec{F} = -e(\\vec{E} + \\vec{v} \\times \\vec{B}) = 0 \\implies \\vec{E} + \\vec{v} \\times \\vec{B} = 0 \\implies \\vec{v} \\times \\vec{B} = -\\vec{E}$. Here $-\\vec{E} = +8 \\times 10^3\\hat{j}$. So $(2 \\times 10^6\\hat{i}) \\times \\vec{B} = 8 \\times 10^3\\hat{j}$. Since $\\hat{i} \\times (-\\hat{k}) = \\hat{j}$, we have $\\vec{B} = -4 \\times 10^{-3}\\hat{k}\\text{ T}$."
  },
  {
    q: "A square loop of side $10\\text{ cm}$ consisting of $20$ turns carries a current of $5\\text{ A}$. The loop is suspended vertically in a uniform horizontal magnetic field of $0.4\\text{ T}$. If the plane of the loop makes an angle of $30^\\circ$ with the magnetic field lines, the torque experienced by the loop is:",
    opts: [
      "$0.2\\sqrt{3}\\text{ N}\\cdot\\text{m}$",
      "$0.2\\text{ N}\\cdot\\text{m}$",
      "$0.4\\sqrt{3}\\text{ N}\\cdot\\text{m}$",
      "$0.4\\text{ N}\\cdot\\text{m}$"
    ],
    ans: 0,
    exp: "Magnetic moment is $M = N I A = 20 \\times 5 \\times (0.10 \\times 0.10) = 100 \\times 0.01 = 1.0\\text{ A}\\cdot\\text{m}^2$. The normal to the loop makes an angle $\\theta = 90^\\circ - 30^\\circ = 60^\\circ$ with the field lines. Torque is $\\tau = M B \\sin\\theta = (1.0)(0.4)\\sin 60^\\circ = 0.4 \\times \\frac{\\sqrt{3}}{2} = 0.2\\sqrt{3}\\text{ N}\\cdot\\text{m}$."
  },
  {
    q: "A particle of mass $m$ and charge $q$ is accelerated through a potential difference $V$ from rest and then enters a transverse magnetic field $B$. The radius of the circular path described by the particle is:",
    opts: [
      "$\\sqrt{\\frac{2mV}{qB^2}}$",
      "$\\frac{1}{B}\\sqrt{\\frac{2mV}{q}}$",
      "$\\sqrt{\\frac{mV}{2qB^2}}$",
      "$\\frac{B}{\\sqrt{2mqV}}$"
    ],
    ans: 1,
    exp: "Kinetic energy acquired is $K = qV$. The radius of circular motion in the magnetic field is $r = \\frac{\\sqrt{2mK}}{qB} = \\frac{\\sqrt{2mqV}}{qB} = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}}$."
  },
  {
    q: "A semicircular wire of radius $R$ carrying current $I$ lies in the $xy$-plane with its diameter along the $x$-axis from $x = -R$ to $x = +R$. A uniform magnetic field $\\vec{B} = B\\hat{k}$ is applied. The net magnetic force on the semicircular arc is:",
    opts: [
      "$2 I R B \\hat{j}$",
      "$-2 I R B \\hat{j}$",
      "$\\pi I R B \\hat{j}$",
      "$0$"
    ],
    ans: 1,
    exp: "For any curved wire in a uniform magnetic field, the net force is $\\vec{F} = I(\\vec{L}' \\times \\vec{B})$, where $\\vec{L}'$ is the displacement vector from start to end. For the semicircular arc with current flowing from $(-R, 0)$ to $(+R, 0)$, $\\vec{L}' = 2R\\hat{i}$. Then $\\vec{F} = I(2R\\hat{i} \\times B\\hat{k}) = 2IRB(\\hat{i} \\times \\hat{k}) = -2IRB\\hat{j}$."
  }
];

// Fix mass in mcqData[1]
mcqData[1].q = "A uniform magnetic field of magnitude $B = 0.5\\text{ T}$ points in the $+z$-direction. A particle of mass $m = 2.0 \\times 10^{-27}\\text{ kg}$ and charge $q = +1.6 \\times 10^{-19}\\text{ C}$ enters the field with velocity $\\vec{v} = (3.0\\hat{i} + 4.0\\hat{k}) \\times 10^5\\text{ m/s}$. The pitch of the helical path traversed by the particle is:";
mcqData[1].exp = "Here $v_\\parallel = 4.0 \\times 10^5\\text{ m/s}$ along $\\hat{k}$, and $v_\\perp = 3.0 \\times 10^5\\text{ m/s}$. Time period is $T = \\frac{2\\pi m}{qB} = \\frac{2\\pi (2.0 \\times 10^{-27})}{(1.6 \\times 10^{-19})(0.5)} = \\frac{4\\pi \\times 10^{-27}}{0.8 \\times 10^{-19}} = 5\\pi \\times 10^{-8}\\text{ s}$. The pitch is $p = v_\\parallel T = (4.0 \\times 10^5)(5\\pi \\times 10^{-8}) = 2\\pi \\times 10^{-2}\\text{ m} = 0.02\\pi\\text{ m} \\approx 0.0628\\text{ m} = 6.28\\text{ cm}$.";

mcqData.forEach((item, idx) => {
  questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    difficulty: idx % 3 === 0 ? "Easy" : (idx % 3 === 1 ? "Medium" : "Hard"),
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: "Magnetic Effects of Current and Magnetism",
    subject: "Physics",
    source: "JEE Main Question Bank"
  });
});

// 20 NUMERICAL questions
const numData = [
  {
    q: "A proton ($q = 1.6 \\times 10^{-19}\\text{ C}, m = 1.67 \\times 10^{-27}\\text{ kg}$) is accelerated through a potential difference of $200\\text{ V}$ and enters a uniform magnetic field $B = 0.1\\text{ T}$ perpendicular to its velocity. The radius of the circular path in millimeters is $r$. Find the value of $\\lfloor r \\rfloor$ (the greatest integer less than or equal to $r$).",
    val: "20",
    exp: "Speed acquired: $v = \\sqrt{\\frac{2qV}{m}} = \\sqrt{\\frac{2(1.6 \\times 10^{-19})(200)}{1.67 \\times 10^{-27}}} = \\sqrt{3.832 \\times 10^{10}} \\approx 1.958 \\times 10^5\\text{ m/s}$. Radius: $r = \\frac{mv}{qB} = \\frac{(1.67 \\times 10^{-27})(1.958 \\times 10^5)}{(1.6 \\times 10^{-19})(0.1)} = \\frac{3.27 \\times 10^{-22}}{1.6 \\times 10^{-20}} = 2.044 \\times 10^{-2}\\text{ m} = 20.44\\text{ mm}$. Thus $\\lfloor r \\rfloor = 20$."
  },
  {
    q: "An electron is moving with a speed of $3.2 \\times 10^6\\text{ m/s}$ in a magnetic field of $0.5\\text{ T}$ at an angle of $30^\\circ$ to the field lines. Find the magnitude of the magnetic force on the electron in units of $10^{-13}\\text{ N}$.",
    val: "1.28",
    exp: "$F = q v B \\sin\\theta = (1.6 \\times 10^{-19}\\text{ C})(3.2 \\times 10^6\\text{ m/s})(0.5\\text{ T})\\sin 30^\\circ = (2.56 \\times 10^{-13})(0.5) = 1.28 \\times 10^{-13}\\text{ N}$. In units of $10^{-13}\\text{ N}$, the value is $1.28$."
  },
  {
    q: "A wire of length $L = 50\\text{ cm}$ carries a current of $4.0\\text{ A}$ in a uniform magnetic field $B = 0.6\\text{ T}$. If the wire experiences a magnetic force of $0.6\\text{ N}$, the angle between the wire and the magnetic field in degrees is:",
    val: "30",
    exp: "$F = I L B \\sin\\theta \\implies 0.6 = (4.0)(0.50)(0.6) \\sin\\theta = 1.2 \\sin\\theta \\implies \\sin\\theta = \\frac{0.6}{1.2} = 0.5 \\implies \\theta = 30^\\circ$."
  },
  {
    q: "In a cyclotron, the magnetic field is $B = 1.5\\text{ T}$ and the radius of the dees is $R = 0.5\\text{ m}$. If deuterons ($q = 1.6 \\times 10^{-19}\\text{ C}, m = 3.34 \\times 10^{-27}\\text{ kg}$) are accelerated, the maximum kinetic energy in MeV is $K$. Find the value of $10 K$ rounded to the nearest integer.",
    val: "135",
    exp: "$K_{max} = \\frac{q^2 B^2 R^2}{2m} = \\frac{(1.6 \\times 10^{-19})^2 (1.5)^2 (0.5)^2}{2(3.34 \\times 10^{-27})} = \\frac{(2.56 \\times 10^{-38})(2.25)(0.25)}{6.68 \\times 10^{-27}} = \\frac{1.44 \\times 10^{-38}}{6.68 \\times 10^{-27}} \\approx 2.1557 \\times 10^{-12}\\text{ J}$. In MeV: $K = \\frac{2.1557 \\times 10^{-12}}{1.602 \\times 10^{-13}} \\approx 13.456\\text{ MeV}$. Hence $10K \\approx 135$."
  },
  {
    q: "A circular coil of radius $5.0\\text{ cm}$ having $100$ turns carries a current of $2.0\\text{ A}$. The coil is placed in a uniform magnetic field of $0.2\\text{ T}$. The maximum torque that can act on the coil is $\\tau\\text{ N}\\cdot\\text{m}$. Find the value of $100\\tau$ rounded to the nearest integer. (Take $\\pi = 3.14$)",
    val: "31",
    exp: "Area $A = \\pi r^2 = 3.14 \\times (0.05)^2 = 3.14 \\times 0.0025 = 7.85 \\times 10^{-3}\\text{ m}^2$. Magnetic moment $M = N I A = 100 \\times 2.0 \\times (7.85 \\times 10^{-3}) = 1.57\\text{ A}\\cdot\\text{m}^2$. Maximum torque $\\tau_{max} = M B = 1.57 \\times 0.2 = 0.314\\text{ N}\\cdot\\text{m}$. Thus $100\\tau \\approx 31$."
  },
  {
    q: "An alpha particle ($q = 2e, m = 4m_p$) and a proton enter a uniform magnetic field with the same speed perpendicular to the field. If the radius of the proton's trajectory is $10\\text{ cm}$, find the radius of the alpha particle's trajectory in centimeters.",
    val: "20",
    exp: "Radius is $r = \\frac{mv}{qB}$. Here $v$ and $B$ are constant, so $r \\propto \\frac{m}{q}$. For alpha: $m_\\alpha / q_\\alpha = 4/2 = 2$. For proton: $m_p / q_p = 1/1 = 1$. Therefore, $r_\\alpha / r_p = 2/1 \\implies r_\\alpha = 2 r_p = 2(10\\text{ cm}) = 20\\text{ cm}$."
  },
  {
    q: "A particle with charge $q = 5\\,\\mu\\text{C}$ moves with velocity $\\vec{v} = (2\\hat{i} + 3\\hat{j}) \\times 10^6\\text{ m/s}$ in a magnetic field $\\vec{B} = (0.4\\hat{j} - 0.2\\hat{k})\\text{ T}$. The magnitude of the magnetic force on the particle in Newtons is $F$. Find the value of $100 F$ rounded to the nearest integer.",
    val: "41",
    exp: "$\\vec{v} \\times \\vec{B} = 10^6 [(2\\hat{i} + 3\\hat{j}) \\times (0.4\\hat{j} - 0.2\\hat{k})] = 10^6 [0.8\\hat{k} + 0.4\\hat{j} - 0.6\\hat{i}] = 10^6 (-0.6\\hat{i} + 0.4\\hat{j} + 0.8\\hat{k})$. Magnitude is $10^6 \\sqrt{(-0.6)^2 + 0.4^2 + 0.8^2} = 10^6 \\sqrt{0.36 + 0.16 + 0.64} = 10^6 \\sqrt{1.16} \\approx 1.077 \\times 10^6\\text{ m}^2/\\text{s}\\cdot\\text{T}$. Force $F = q |\\vec{v} \\times \\vec{B}| = (5 \\times 10^{-6})(1.077 \\times 10^6) \\approx 0.4135\\text{ N}$ -- wait, $5 \\times 1.077 = 5.385\\text{ N}$! Let's check: $5 \\times 1.077 = 5.385$! Let's recalculate: $5 \\times 10^{-6} \\times 10^6 \\times 1.077 = 5.385\\text{ N}$. Let's adjust values so the answer is an exact integer."
  },
  {
    q: "A particle with charge $q = 2\\,\\mu\\text{C}$ moves with velocity $\\vec{v} = (3\\hat{i} + 4\\hat{j}) \\times 10^6\\text{ m/s}$ in a uniform magnetic field $\\vec{B} = 0.5\\hat{k}\\text{ T}$. Find the magnitude of the magnetic force on the particle in Newtons.",
    val: "5",
    exp: "$|\\vec{v}| = \\sqrt{3^2 + 4^2} \\times 10^6 = 5 \\times 10^6\\text{ m/s}$. Since $\\vec{v}$ lies entirely in the $xy$-plane and $\\vec{B}$ is along $\\hat{k}$, $\\vec{v} \\perp \\vec{B}$. The force is $F = q v B = (2 \\times 10^{-6}\\text{ C})(5 \\times 10^6\\text{ m/s})(0.5\\text{ T}) = 5.0\\text{ N}$."
  },
  {
    q: "In a velocity selector, the electric field is $E = 1.2 \\times 10^5\\text{ V/m}$ and the magnetic field is $B = 0.4\\text{ T}$. A charged particle enters the region undeflected. Find the speed of the particle in units of $10^5\\text{ m/s}$.",
    val: "3",
    exp: "Condition for zero deflection is $v = \\frac{E}{B} = \\frac{1.2 \\times 10^5}{0.4} = 3.0 \\times 10^5\\text{ m/s}$. In units of $10^5\\text{ m/s}$, the value is $3$."
  },
  {
    q: "An electron revolves in a circle of radius $R = 2.0\\text{ cm}$ in a transverse magnetic field $B = 1.0 \\times 10^{-3}\\text{ T}$. Find the time period of revolution in nanoseconds (ns). (Take $m_e = 9.1 \\times 10^{-31}\\text{ kg}, e = 1.6 \\times 10^{-19}\\text{ C}, \\pi = 3.14$)",
    val: "36",
    exp: "Time period $T = \\frac{2\\pi m}{qB} = \\frac{2 \\times 3.14 \\times (9.1 \\times 10^{-31})}{(1.6 \\times 10^{-19})(1.0 \\times 10^{-3})} = \\frac{57.148 \\times 10^{-31}}{1.6 \\times 10^{-22}} = 35.72 \\times 10^{-9}\\text{ s} \\approx 36\\text{ ns}$."
  },
  {
    q: "A magnetic dipole of moment $M = 0.8\\text{ A}\\cdot\\text{m}^2$ is aligned parallel to a magnetic field of $B = 0.5\\text{ T}$. The work done in rotating the dipole from stable equilibrium to unstable equilibrium (an angle of $180^\\circ$) in Joules is $W$. Find the value of $10W$.",
    val: "8",
    exp: "$W = U(180^\\circ) - U(0^\\circ) = -MB\\cos 180^\\circ - (-MB\\cos 0^\\circ) = MB - (-MB) = 2MB = 2(0.8)(0.5) = 0.8\\text{ J}$. Thus $10W = 8$."
  },
  {
    q: "A straight wire of length $0.8\\text{ m}$ carrying a current of $5\\text{ A}$ lies along the $x$-axis from $x = 0$ to $x = 0.8\\text{ m}$. A uniform magnetic field $\\vec{B} = (0.3\\hat{j} + 0.4\\hat{k})\\text{ T}$ exists in the region. Find the magnitude of the magnetic force on the wire in Newtons.",
    val: "2",
    exp: "$\\vec{L} = 0.8\\hat{i}\\text{ m}$. The force is $\\vec{F} = I(\\vec{L} \\times \\vec{B}) = 5 [0.8\\hat{i} \\times (0.3\\hat{j} + 0.4\\hat{k})] = 5 [0.24\\hat{k} - 0.32\\hat{j}] = 1.2\\hat{k} - 1.6\\hat{j}\\text{ N}$. Magnitude is $F = \\sqrt{(1.2)^2 + (-1.6)^2} = \\sqrt{1.44 + 2.56} = \\sqrt{4.0} = 2.0\\text{ N}$."
  },
  {
    q: "A cyclotron oscillator frequency is $10\\text{ MHz}$. What magnetic field $B$ in Tesla is required for accelerating protons? (Take $m_p = 1.67 \\times 10^{-27}\\text{ kg}, q = 1.6 \\times 10^{-19}\\text{ C}, \\pi = 3.14$). Find $100 B$ rounded to the nearest integer.",
    val: "66",
    exp: "Cyclotron frequency $\\nu = \\frac{qB}{2\\pi m} \\implies B = \\frac{2\\pi m \\nu}{q} = \\frac{2(3.14)(1.67 \\times 10^{-27})(10 \\times 10^6)}{1.6 \\times 10^{-19}} = \\frac{1.04876 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 0.6555\\text{ T}$. Hence $100B \\approx 66$."
  },
  {
    q: "Two particles $A$ and $B$ having charges in the ratio $q_A / q_B = 2/1$ and masses in the ratio $m_A / m_B = 4/1$ are accelerated through the same potential difference $V$ and enter a transverse uniform magnetic field. The ratio of their orbital radii $r_A / r_B$ is:",
    val: "1",
    exp: "$r = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}} \\propto \\sqrt{\\frac{m}{q}}$. Therefore, $\\frac{r_A}{r_B} = \\sqrt{\\frac{m_A / m_B}{q_A / q_B}} = \\sqrt{\\frac{4}{2}} = \\sqrt{2}$ -- wait! $\\sqrt{4/2} = \\sqrt{2} \\approx 1.414$. If $m_A / m_B = 4/1$ and $q_A / q_B = 4/1$, then $r_A/r_B = 1$. Let's set $m_A/m_B = 2/1$ and $q_A/q_B = 2/1$, then $r_A/r_B = 1$."
  },
  {
    q: "A planar loop of area $A = 0.05\\text{ m}^2$ carrying a current of $10\\text{ A}$ is placed in a uniform magnetic field $B = 0.4\\text{ T}$ such that the angle between the area vector and the magnetic field is $60^\\circ$. Find the magnitude of the torque on the loop in $\\text{N}\\cdot\\text{m}$. Find the value of $10\\tau / \\sqrt{3}$.",
    val: "1",
    exp: "$M = I A = (10)(0.05) = 0.5\\text{ A}\\cdot\\text{m}^2$. Torque $\\tau = M B \\sin\\theta = (0.5)(0.4)\\sin 60^\\circ = 0.20 \\times \\frac{\\sqrt{3}}{2} = 0.1\\sqrt{3}\\text{ N}\\cdot\\text{m}$. Thus $\\frac{10\\tau}{\\sqrt{3}} = 1$."
  },
  {
    q: "An electron moves in a circle of radius $r = 1.0\\text{ cm}$ in a uniform magnetic field $B = 2.0 \\times 10^{-3}\\text{ T}$. What is the kinetic energy of the electron in electron-volts (eV)? Find the value to the nearest integer. (Take $m_e = 9.1 \\times 10^{-31}\\text{ kg}, e = 1.6 \\times 10^{-19}\\text{ C}$)",
    val: "35",
    exp: "$p = q B r = (1.6 \\times 10^{-19})(2.0 \\times 10^{-3})(0.01) = 3.2 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$. Kinetic energy $K = \\frac{p^2}{2m} = \\frac{(3.2 \\times 10^{-24})^2}{2(9.1 \\times 10^{-31})} = \\frac{1.024 \\times 10^{-47}}{1.82 \\times 10^{-30}} \\approx 5.626 \\times 10^{-18}\\text{ J}$. In eV: $K = \\frac{5.626 \\times 10^{-18}}{1.6 \\times 10^{-19}} \\approx 35.16\\text{ eV} \\approx 35\\text{ eV}$."
  },
  {
    q: "A current loop carrying $2\\text{ A}$ has shape of an equilateral triangle of side $a = 20\\text{ cm}$. Find its magnetic dipole moment in units of $10^{-2}\\text{ A}\\cdot\\text{m}^2$. (Take $\\sqrt{3} = 1.732$). Round to nearest integer.",
    val: "3",
    exp: "Area of equilateral triangle is $A = \\frac{\\sqrt{3}}{4}a^2 = \\frac{1.732}{4}(0.20)^2 = 0.433 \\times 0.04 = 0.01732\\text{ m}^2$. Magnetic moment $M = I A = 2 \\times 0.01732 = 0.03464\\text{ A}\\cdot\\text{m}^2 = 3.464 \\times 10^{-2}\\text{ A}\\cdot\\text{m}^2 \\approx 3 \\times 10^{-2}\\text{ A}\\cdot\\text{m}^2$."
  },
  {
    q: "A uniform magnetic field $B = 0.2\\text{ T}$ acts along the $+x$-axis. A charged particle with $q = 10\\,\\mu\\text{C}$ is projected with velocity $\\vec{v} = (3\\hat{j} + 4\\hat{k})\\text{ m/s}$. Find the magnitude of the magnetic force on the particle in micro-Newtons ($\\mu\\text{N}$).",
    val: "10",
    exp: "Speed perpendicular to $\\vec{B}$: $v_\\perp = \\sqrt{3^2 + 4^2} = 5\\text{ m/s}$. Since $\\vec{B} = 0.2\\hat{i}$, $\\vec{v}$ is completely perpendicular to $\\vec{B}$. $F = q v B = (10 \\times 10^{-6}\\text{ C})(5\\text{ m/s})(0.2\\text{ T}) = 10 \\times 10^{-6}\\text{ N} = 10\\,\\mu\\text{N}$."
  },
  {
    q: "A rigid wire loop in the shape of a right-angled triangle with base $b = 30\\text{ cm}$ and height $h = 40\\text{ cm}$ carries a current of $3.0\\text{ A}$. It is placed in a uniform magnetic field $B = 0.5\\text{ T}$ parallel to its base. The torque experienced by the loop in $\\text{N}\\cdot\\text{m}$ is $\\tau$. Find the value of $100\\tau$.",
    val: "9",
    exp: "Area $A = \\frac{1}{2} b h = \\frac{1}{2}(0.30)(0.40) = 0.06\\text{ m}^2$. Magnetic moment $M = I A = 3.0 \\times 0.06 = 0.18\\text{ A}\\cdot\\text{m}^2$. The normal to the loop is perpendicular to the base, so the angle between the magnetic moment (normal to loop) and the field (parallel to base) is $90^\\circ$. Torque $\\tau = M B \\sin 90^\\circ = 0.18 \\times 0.5 = 0.09\\text{ N}\\cdot\\text{m}$. Thus $100\\tau = 9$."
  },
  {
    q: "A proton moves in a circle of radius $r = 5.0\\text{ cm}$ in a transverse magnetic field $B = 0.4\\text{ T}$. What is the magnetic flux enclosed by the orbit in milli-Webers (mWb)? (Take $\\pi = 3.14$)",
    val: "3.14",
    exp: "Area enclosed by the circular orbit is $A = \\pi r^2 = 3.14 \\times (0.05)^2 = 3.14 \\times 0.0025 = 7.85 \\times 10^{-3}\\text{ m}^2$. Magnetic flux $\\Phi = B A = 0.4 \\times (7.85 \\times 10^{-3}) = 3.14 \\times 10^{-3}\\text{ Wb} = 3.14\\text{ mWb}$."
  }
];

// Fix numData[6] and numData[13]
numData[6] = {
  q: "A particle with charge $q = 2\\,\\mu\\text{C}$ moves with velocity $\\vec{v} = (3\\hat{i} + 4\\hat{j}) \\times 10^6\\text{ m/s}$ in a uniform magnetic field $\\vec{B} = 0.5\\hat{k}\\text{ T}$. Find the magnitude of the magnetic force on the particle in Newtons.",
  val: "5",
  exp: "$|\\vec{v}| = \\sqrt{3^2 + 4^2} \\times 10^6 = 5 \\times 10^6\\text{ m/s}$. Since $\\vec{v}$ lies entirely in the $xy$-plane and $\\vec{B}$ is along $\\hat{k}$, $\\vec{v} \\perp \\vec{B}$. The force is $F = q v B = (2 \\times 10^{-6}\\text{ C})(5 \\times 10^6\\text{ m/s})(0.5\\text{ T}) = 5.0\\text{ N}$."
};

numData[13] = {
  q: "Two particles $A$ and $B$ having charges in the ratio $q_A / q_B = 2/1$ and masses in the ratio $m_A / m_B = 2/1$ are accelerated through the same potential difference $V$ and enter a transverse uniform magnetic field. The ratio of their orbital radii $r_A / r_B$ is:",
  val: "1",
  exp: "$r = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}} \\propto \\sqrt{\\frac{m}{q}}$. Therefore, $\\frac{r_A}{r_B} = \\sqrt{\\frac{m_A / m_B}{q_A / q_B}} = \\sqrt{\\frac{2}{2}} = 1$."
};

numData.forEach((item, idx) => {
  questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.val,
    numericalAnswer: item.val,
    explanation: item.exp,
    type: "NUMERICAL",
    questionType: "Numerical",
    difficulty: idx % 3 === 0 ? "Easy" : (idx % 3 === 1 ? "Medium" : "Hard"),
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: "Magnetic Effects of Current and Magnetism",
    subject: "Physics",
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 1 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'ASSERTION_REASON').length}, MCQ: ${questions.filter(q => q.type === 'MCQ').length}, NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);

const outputPath = path.join(__dirname, 'data_jee_magnetism_part1.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outputPath}`);
