const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Magnetic field calculation";
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
    assertion: "The magnetic field on the axis of a circular current loop at a distance $x$ from its center decreases monotonically as $x$ increases.",
    reason: "The axial magnetic field is given by $B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$, which has its maximum value at the center $x = 0$ and decays as $1/x^3$ for $x \\gg R$.",
    correct: 0,
    explanation: "At $x = 0$, $B(0) = \\frac{\\mu_0 I}{2R}$. As $x$ increases, the denominator $(R^2 + x^2)^{3/2}$ increases monotonically, causing $B(x)$ to decrease smoothly to zero at infinity."
  },
  {
    assertion: "The magnetic field at the center of a circular wire carrying current $I$ is always perpendicular to the plane of the wire.",
    reason: "By the Biot-Savart law, each infinitesimal element $I d\\vec{l}$ produces a magnetic field $d\\vec{B} \\propto d\\vec{l} \\times \\hat{r}$ which points normal to the plane containing the circle.",
    correct: 0,
    explanation: "For every element $d\\vec{l}$ along the circle, the unit vector $\\hat{r}$ points toward the center within the plane of the circle. The cross product $d\\vec{l} \\times \\hat{r}$ points strictly perpendicular to the plane of the circle everywhere."
  },
  {
    assertion: "A straight wire of finite length carrying current $I$ produces a magnetic field that is not constant along a concentric circle around the wire.",
    reason: "For a finite wire, the angle subtended by the ends of the wire varies as one moves parallel to the wire, so cylindrical symmetry is broken.",
    correct: 0,
    explanation: "An infinitely long wire has translation symmetry along its axis, making $B$ uniform on any cylinder of radius $d$. For a finite wire, the angles $\\theta_1$ and $\\theta_2$ depend on the axial position $z$, so $B$ varies along the length."
  },
  {
    assertion: "The magnetic field at the center of a circular coil of radius $R$ is greater than the magnetic field at the center of a square coil of side $2R$ carrying the same current.",
    reason: "For the square coil of side $2R$, the distance from the center to each side is $R$, but the corners are at distance $\\sqrt{2}R$, making the average distance greater than $R$.",
    correct: 0,
    explanation: "For circle of radius $R$: $B_{circ} = \\frac{\\mu_0 I}{2R} \\approx 0.5 \\frac{\\mu_0 I}{R}$. For square of side $2R$: $d = R$, $B_{sq} = 4 \\times \\frac{\\mu_0 I}{4\\pi R}(\\sin 45^\\circ + \\sin 45^\\circ) = \\frac{\\sqrt{2}\\mu_0 I}{\\pi R} \\approx 0.45 \\frac{\\mu_0 I}{R}$. Thus $B_{circ} > B_{sq}$."
  },
  {
    assertion: "At any point on the axis of an infinitely long straight wire carrying steady current, the magnetic field is zero.",
    reason: "The cross product $d\\vec{l} \\times \\hat{r}$ vanishes for any point lying on the axis of the current element because $d\\vec{l}$ and $\\hat{r}$ are collinear.",
    correct: 0,
    explanation: "On the axis of the wire, $\\theta = 0^\\circ$ or $180^\\circ$, so $d\\vec{l} \\times \\hat{r} = 0$. By superposition, the net magnetic field at any point along the axis is zero."
  },
  {
    assertion: "The magnetic field inside an infinitely long ideal solenoid is uniform and parallel to the axis.",
    reason: "The radial and azimuthal components of the magnetic field from adjacent loops cancel out by symmetry, leaving only the axial component.",
    correct: 0,
    explanation: "By translational and rotational symmetry, field lines inside an ideal infinite solenoid are straight, parallel lines along the axis, with magnitude $B = \\mu_0 n I$ everywhere inside."
  },
  {
    assertion: "The magnetic field at the center of a circular arc of radius $R$ subtending angle $\\theta$ is proportional to $\\theta$.",
    reason: "Every current element along the circular arc is at the same perpendicular distance $R$ from the center, so the integrated field is $B = \\frac{\\mu_0 I \\theta}{4\\pi R}$.",
    correct: 0,
    explanation: "Since all elements are at distance $R$ and $d\\vec{l} \\perp \\hat{r}$, $B = \\int \\frac{\\mu_0 I dl}{4\\pi R^2} = \\frac{\\mu_0 I (R\\theta)}{4\\pi R^2} = \\frac{\\mu_0 I \\theta}{4\\pi R} \\propto \\theta$."
  },
  {
    assertion: "Two infinitely long straight wires carrying equal currents in perpendicular non-intersecting planes produce a non-zero magnetic field at the origin.",
    reason: "The vector magnetic fields produced by mutually perpendicular wires are orthogonal and cannot cancel each other out.",
    correct: 0,
    explanation: "Because the field vectors from perpendicular wires are orthogonal (e.g. $\\vec{B}_1 = B_1\\hat{i}$ and $\\vec{B}_2 = B_2\\hat{j}$), the resultant field magnitude is $B = \\sqrt{B_1^2 + B_2^2} > 0$. They cannot destructively cancel."
  },
  {
    assertion: "The magnetic field at the center of an equilateral triangle of side $a$ carrying current $I$ is $B = \\frac{9\\mu_0 I}{2\\pi a}$.",
    reason: "The distance from the centroid to each side is $d = \\frac{a}{2\\sqrt{3}}$ and each side subtends an angle of $60^\\circ$ on either side of the perpendicular.",
    correct: 0,
    explanation: "Distance $d = \\frac{a}{2\\sqrt{3}}$. Field of 1 side: $B_1 = \\frac{\\mu_0 I}{4\\pi d}(\\sin 60^\\circ + \\sin 60^\\circ) = \\frac{\\mu_0 I}{4\\pi (a / 2\\sqrt{3})}(\\sqrt{3}) = \\frac{3\\mu_0 I}{2\\pi a}$. For 3 sides: $B = 3 B_1 = \\frac{9\\mu_0 I}{2\\pi a}$. Reason correctly explains Assertion."
  },
  {
    assertion: "At the center of a regular hexagon of side $a$ carrying current $I$, the magnetic field is $\\frac{\\sqrt{3}\\mu_0 I}{\\pi a}$.",
    reason: "Each of the 6 sides is at distance $d = \\frac{\\sqrt{3}}{2}a$ from the center and subtends an angle of $30^\\circ$ on either side of the normal.",
    correct: 0,
    explanation: "Distance to each side is $d = a\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}a$. For one side: $B_1 = \\frac{\\mu_0 I}{4\\pi d}(\\sin 30^\\circ + \\sin 30^\\circ) = \\frac{\\mu_0 I}{4\\pi (\\frac{\\sqrt{3}}{2}a)}(1) = \\frac{\\mu_0 I}{2\\sqrt{3}\\pi a}$. For 6 sides: $B = 6 B_1 = \\frac{6\\mu_0 I}{2\\sqrt{3}\\pi a} = \\frac{\\sqrt{3}\\mu_0 I}{\\pi a}$."
  },
  {
    assertion: "The magnetic field at the center of a circular loop is always greater than the magnetic field at any point on its axis.",
    reason: "The denominator in the axial field formula $B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$ attains its minimum value at $x = 0$.",
    correct: 0,
    explanation: "Because $R^2 + x^2 \\ge R^2$ for all real $x$, $(R^2 + x^2)^{3/2} \\ge R^3$, making $B(x) \\le B(0)$ with the maximum strictly at $x = 0$."
  },
  {
    assertion: "For a current-carrying circular coil, the field at an axial point distant $x = R$ is $\\frac{1}{2\\sqrt{2}}$ times the field at the center.",
    reason: "Substituting $x = R$ into $B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$ gives $B(R) = \\frac{\\mu_0 I R^2}{2(2R^2)^{3/2}} = \\frac{\\mu_0 I}{2R(2\\sqrt{2})} = \\frac{B_0}{2\\sqrt{2}}$.",
    correct: 0,
    explanation: "At $x = R$, $(R^2 + R^2)^{3/2} = (2R^2)^{3/2} = 2\\sqrt{2} R^3$. Hence $B(R) = \\frac{\\mu_0 I R^2}{2(2\\sqrt{2}R^3)} = \\frac{\\mu_0 I}{4\\sqrt{2}R} = \\frac{B_0}{2\\sqrt{2}}$."
  },
  {
    assertion: "A charged particle rotating in a circle of radius $R$ with constant angular speed $\\omega$ behaves as a magnetic dipole.",
    reason: "The circulating charge constitutes an electric current $I = \\frac{q\\omega}{2\\pi}$, producing a magnetic dipole moment $\\vec{M} = I \\vec{A} = \\frac{1}{2}q\\omega R^2 \\hat{n}$.",
    correct: 0,
    explanation: "A revolving charge creates an average current $I = q/T = q\\omega / (2\\pi)$. The area of the circle is $A = \\pi R^2$. The magnetic moment is $M = I A = \\frac{q\\omega}{2\\pi}(\\pi R^2) = \\frac{1}{2}q\\omega R^2$. Reason explains Assertion."
  },
  {
    assertion: "The gyromagnetic ratio of an electron in an atom is a universal constant equal to $\\frac{e}{2m_e}$.",
    reason: "The ratio of orbital magnetic dipole moment $\\mu_l$ to orbital angular momentum $L$ for an electron is $\\frac{\\mu_l}{L} = \\frac{e}{2m_e}$.",
    correct: 0,
    explanation: "Orbital magnetic moment is $\\mu_l = I A = \\frac{e v}{2\\pi r}(\\pi r^2) = \\frac{e v r}{2}$. Angular momentum is $L = m_e v r$. The ratio is $\\frac{\\mu_l}{L} = \\frac{e}{2m_e}$, which depends only on fundamental electron constants."
  },
  {
    assertion: "Two concentric circular coils of radii $R$ and $2R$ carrying equal currents in opposite directions produce a net field of $\\frac{\\mu_0 I}{4R}$ at their common center.",
    reason: "The magnetic fields produced by the two coils are $B_1 = \\frac{\\mu_0 I}{2R}$ and $B_2 = \\frac{\\mu_0 I}{4R}$. Since the currents are in opposite directions, the net field is $B_1 - B_2 = \\frac{\\mu_0 I}{4R}$.",
    correct: 0,
    explanation: "Coil 1 produces $B_1 = \\frac{\\mu_0 I}{2R}$. Coil 2 produces $B_2 = \\frac{\\mu_0 I}{2(2R)} = \\frac{\\mu_0 I}{4R}$. The fields oppose each other, yielding $B_{net} = B_1 - B_2 = \\frac{\\mu_0 I}{4R}$."
  },
  {
    assertion: "The magnetic field produced by a semi-infinite straight wire at a point perpendicular to its end at distance $d$ is half that of an infinite wire.",
    reason: "The angular limits for a semi-infinite wire are $\\theta_1 = 0^\\circ$ and $\\theta_2 = 90^\\circ$, giving $B = \\frac{\\mu_0 I}{4\\pi d}(\\sin 0^\\circ + \\sin 90^\\circ) = \\frac{\\mu_0 I}{4\\pi d} = \\frac{1}{2}B_{infinite}$.",
    correct: 0,
    explanation: "For an infinite wire, the limits are $-90^\\circ$ to $+90^\\circ$, giving $B = \\frac{\\mu_0 I}{2\\pi d}$. For a semi-infinite wire starting at the perpendicular foot, limits are $0^\\circ$ to $90^\\circ$, giving exactly half the field: $B = \\frac{\\mu_0 I}{4\\pi d}$."
  },
  {
    assertion: "The magnetic field at the center of an elliptical loop carrying steady current is greater than that of a circular loop of the same perimeter.",
    reason: "The average distance of the perimeter from the center is smaller for an ellipse than for a circle of the same perimeter.",
    correct: 0,
    explanation: "A circle encloses the maximum area for a given perimeter. For an ellipse of the same perimeter, the minor axis brings current elements closer to the center, leading to an enhanced magnetic field at the center."
  },
  {
    assertion: "Inside a toroid, the magnetic field is non-zero, while outside the toroid and in its open central hole, the magnetic field is zero.",
    reason: "By Ampere's circuital law, an Amperian loop inside the core encloses current $N I$, while Amperian loops outside and in the central cavity enclose zero current.",
    correct: 0,
    explanation: "Inside the toroidal core, $\\oint \\vec{B} \\cdot d\\vec{l} = B(2\\pi r) = \\mu_0 N I \\ne 0$. Outside and in the hole, $I_{encl} = 0$, so $B = 0$ by rotational symmetry."
  },
  {
    assertion: "The magnetic field at a distance $r$ from an infinitely long straight wire is independent of the wire's cross-sectional shape if $r$ is much larger than the wire's dimensions.",
    reason: "At large distances, higher-order multipole moments decay rapidly with distance, and the monopole-equivalent line current dominates.",
    correct: 0,
    explanation: "According to multipole analysis, at distances $r \\gg \\text{wire radius}$, the geometric details of the cross-section become negligible, and the field reduces strictly to the Biot-Savart line field $B = \\frac{\\mu_0 I}{2\\pi r}$."
  },
  {
    assertion: "The magnetic field at the center of a thin spherical shell of radius $R$ carrying uniform surface charge $\\sigma$ rotating with angular velocity $\\omega$ is $\\frac{2}{3}\\mu_0 \\sigma \\omega R$.",
    reason: "Integrating the magnetic fields produced by differential current rings of the rotating sphere yields $B = \\frac{2}{3}\\mu_0 \\sigma \\omega R$.",
    correct: 0,
    explanation: "Each ring of latitude $\\theta$ has radius $r = R\\sin\\theta$, width $R d\\theta$, and carries current $dI = \\sigma(2\\pi R\\sin\\theta R d\\theta)\\frac{\\omega}{2\\pi} = \\sigma \\omega R^2 \\sin\\theta d\\theta$. Integrating $dB = \\frac{\\mu_0 dI (R\\sin\\theta)^2}{2 R^3}$ from $0$ to $\\pi$ yields $B = \\frac{2}{3}\\mu_0 \\sigma \\omega R$."
  },
  {
    assertion: "Two identical circular coils carrying the same current in the same sense are placed coaxially with separation $R$. The magnetic field is nearly uniform near the midpoint.",
    reason: "In the Helmholtz coil arrangement, the first and second derivatives of the magnetic field with respect to axial displacement vanish at the midpoint.",
    correct: 0,
    explanation: "The Helmholtz condition separation $d = R$ cancels both $\\frac{dB}{dx}$ and $\\frac{d^2 B}{dx^2}$ at the midpoint, producing a remarkably flat, uniform magnetic field profile."
  },
  {
    assertion: "If an electron circulates in a clockwise direction, its magnetic dipole moment vector points into the page.",
    reason: "Conventional current flows in the direction opposite to electron motion, so clockwise electron motion corresponds to counterclockwise conventional current.",
    correct: 3,
    explanation: "Clockwise electron motion implies counterclockwise conventional electric current. By the right-hand grip rule, counterclockwise current produces a magnetic dipole moment pointing OUT of the page, not into the page. Assertion is false, Reason is true."
  },
  {
    assertion: "A straight wire carrying current $I$ is bent into a hairpin shape consisting of two long parallel arms separated by distance $2R$ joined by a semicircle of radius $R$. The field at the center of the semicircle is $\\frac{\\mu_0 I}{2\\pi R}(1 + \\pi/2)$.",
    reason: "Each semi-infinite straight arm contributes $\\frac{\\mu_0 I}{4\\pi R}$, and the semicircle contributes $\\frac{\\mu_0 I}{4R}$, all pointing in the same direction.",
    correct: 0,
    explanation: "Field from two semi-infinite straight wires: $2 \\times \\frac{\\mu_0 I}{4\\pi R} = \\frac{\\mu_0 I}{2\\pi R}$. Field from semicircle: $\\frac{\\mu_0 I}{4R}$. Summing both: $B = \\frac{\\mu_0 I}{2\\pi R} + \\frac{\\mu_0 I}{4R} = \\frac{\\mu_0 I}{2\\pi R}\\left(1 + \\frac{\\pi}{2}\\right)$."
  },
  {
    assertion: "The magnetic field produced by an infinite sheet of uniform current is independent of distance from the sheet.",
    reason: "By planar symmetry, the field lines are parallel to the sheet and constant in magnitude everywhere on either side, given by $B = \\frac{1}{2}\\mu_0 K$.",
    correct: 0,
    explanation: "For an infinite plane sheet carrying uniform linear current density $K$, the magnetic field is uniform in space: $B = \\frac{1}{2}\\mu_0 K$ for all distances $z > 0$, exactly analogous to the electric field of an infinite sheet of charge."
  },
  {
    assertion: "A closed planar wire loop carrying current $I$ in a uniform magnetic field experiences zero net force regardless of its shape.",
    reason: "The vector sum of displacement elements around any closed path $\\oint d\\vec{l}$ is identically zero.",
    correct: 0,
    explanation: "The net magnetic force is $\\vec{F} = I \\oint d\\vec{l} \\times \\vec{B} = I \\left(\\oint d\\vec{l}\\right) \\times \\vec{B} = 0$, because the closed loop integral $\\oint d\\vec{l} = 0$."
  },
  {
    assertion: "The magnetic field on the axis of a circular current loop at distance $x \\gg R$ is given by $B = \\frac{\\mu_0}{4\\pi}\\frac{2M}{x^3}$.",
    reason: "A small planar current loop of area $A$ carrying current $I$ is mathematically equivalent to a magnetic dipole of moment $M = I A$.",
    correct: 0,
    explanation: "At large distances ($x \\gg R$), the axial field is $B = \\frac{\\mu_0 I R^2}{2x^3} = \\frac{\\mu_0 (I\\pi R^2)}{2\\pi x^3} = \\frac{\\mu_0}{4\\pi}\\frac{2M}{x^3}$, which is identical to the electric field on the axis of an electric dipole."
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
    q: "A circular loop of radius $R$ carries a current $I$. At what distance $x$ from the center along the axis of the loop is the magnetic field $\\frac{1}{27}$ of the magnetic field at the center?",
    opts: [
      "$2\\sqrt{2}R$",
      "$\\sqrt{8}R$",
      "$3\\sqrt{3}R$",
      "$\\sqrt{3}R$"
    ],
    ans: 0,
    exp: "Axial field: $B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$. Central field: $B_0 = \\frac{\\mu_0 I}{2R}$. Given $B(x) = \\frac{B_0}{27} \\implies \\frac{R^3}{(R^2 + x^2)^{3/2}} = \\frac{1}{27} \\implies \\frac{R^2 + x^2}{R^2} = 27^{2/3} = 9 \\implies R^2 + x^2 = 9R^2 \\implies x^2 = 8R^2 \\implies x = 2\\sqrt{2}R$."
  },
  {
    q: "An infinitely long wire carrying a current $I$ is bent into a shape consisting of two semi-infinite straight wires and a circular loop of radius $R$ in the same plane. If the loop is traversed in a clockwise direction while the straight wire current flows from left to right tangential to the loop, the net magnetic field at the center of the loop is:",
    opts: [
      "$\\frac{\\mu_0 I}{2R}\\left(1 + \\frac{1}{\\pi}\\right)$",
      "$\\frac{\\mu_0 I}{2R}\\left(1 - \\frac{1}{\\pi}\\right)$",
      "$\\frac{\\mu_0 I}{2\\pi R}$",
      "$\\frac{\\mu_0 I}{2R}$"
    ],
    ans: 0,
    exp: "The circular loop produces $B_{loop} = \\frac{\\mu_0 I}{2R}$ into the page. The straight wire is at distance $R$ from the center and produces $B_{line} = \\frac{\\mu_0 I}{2\\pi R}$ in the same direction (into the page). Net field: $B = B_{loop} + B_{line} = \\frac{\\mu_0 I}{2R} + \\frac{\\mu_0 I}{2\\pi R} = \\frac{\\mu_0 I}{2R}\\left(1 + \\frac{1}{\\pi}\\right)$."
  },
  {
    q: "Two identical circular coils of radius $R$ carrying equal currents $I$ are placed concentrically such that their planes are mutually perpendicular. What is the magnitude of the resultant magnetic field at their common center?",
    opts: [
      "$\\frac{\\sqrt{2}\\mu_0 I}{2R}$",
      "$\\frac{\\mu_0 I}{2R}$",
      "$\\frac{\\mu_0 I}{R}$",
      "$\\frac{2\\mu_0 I}{R}$"
    ],
    ans: 0,
    exp: "Each coil produces a field $B_0 = \\frac{\\mu_0 I}{2R}$ along its axis. Since the planes are mutually perpendicular, their axis vectors are orthogonal: $\\vec{B}_1 \\perp \\vec{B}_2$. Resultant field: $B = \\sqrt{B_0^2 + B_0^2} = \\sqrt{2}B_0 = \\frac{\\sqrt{2}\\mu_0 I}{2R}$."
  },
  {
    q: "A current $I$ flows through a square loop of side $a$. What is the magnetic field at the center of the square?",
    opts: [
      "$\\frac{2\\sqrt{2}\\mu_0 I}{\\pi a}$",
      "$\\frac{\\sqrt{2}\\mu_0 I}{\\pi a}$",
      "$\\frac{4\\mu_0 I}{\\pi a}$",
      "$\\frac{\\mu_0 I}{2\\pi a}$"
    ],
    ans: 0,
    exp: "Distance from center to each side is $d = a/2$. Angles are $\\theta_1 = \\theta_2 = 45^\\circ$. For one side: $B_1 = \\frac{\\mu_0 I}{4\\pi (a/2)}(\\sin 45^\\circ + \\sin 45^\\circ) = \\frac{\\mu_0 I}{2\\pi a}\\sqrt{2} = \\frac{\\sqrt{2}\\mu_0 I}{\\pi a}$. For 4 sides: $B = 4 B_1 = \\frac{4\\sqrt{2}\\mu_0 I}{2\\pi (a/2)} = \\frac{2\\sqrt{2}\\mu_0 I}{\\pi a}$."
  },
  {
    q: "A uniform thin disc of radius $R$ carries a uniform surface charge density $\\sigma$. It rotates with angular velocity $\\omega$ about its central symmetry axis. The magnetic field at the center of the disc is:",
    opts: [
      "$\\frac{1}{2}\\mu_0 \\sigma \\omega R$",
      "$\\mu_0 \\sigma \\omega R$",
      "$\\frac{1}{4}\\mu_0 \\sigma \\omega R$",
      "$\\frac{2}{3}\\mu_0 \\sigma \\omega R$"
    ],
    ans: 0,
    exp: "A ring of radius $r$ and width $dr$ carries charge $dq = \\sigma (2\\pi r dr)$ and current $dI = dq \\frac{\\omega}{2\\pi} = \\sigma \\omega r dr$. The magnetic field at the center is $dB = \\frac{\\mu_0 dI}{2r} = \\frac{\\mu_0 \\sigma \\omega}{2} dr$. Integrating from $r = 0$ to $R$: $B = \\frac{1}{2}\\mu_0 \\sigma \\omega R$."
  },
  {
    q: "A long straight wire is bent into a circular arc of radius $R$ subtending an angle of $90^\\circ$ at the center, with straight extensions continuing outward. If current $I$ flows through the wire, the magnetic field at the center of curvature due to the arc alone is:",
    opts: [
      "$\\frac{\\mu_0 I}{8R}$",
      "$\\frac{\\mu_0 I}{4R}$",
      "$\\frac{\\mu_0 I}{2R}$",
      "$\\frac{\\mu_0 I}{16R}$"
    ],
    ans: 0,
    exp: "An arc of angle $\\theta = \\pi/2$ produces field $B = \\frac{\\mu_0 I \\theta}{4\\pi R} = \\frac{\\mu_0 I (\\pi/2)}{4\\pi R} = \\frac{\\mu_0 I}{8R}$."
  },
  {
    q: "A coaxial cable consists of an inner solid cylinder of radius $a$ and an outer thin cylindrical shell of radius $b$. A current $I$ flows down the inner conductor and returns along the outer shell. The magnetic field at distance $r$ such that $a < r < b$ is:",
    opts: [
      "$\\frac{\\mu_0 I}{2\\pi r}$",
      "Zero",
      "$\\frac{\\mu_0 I r}{2\\pi a^2}$",
      "$\\frac{\\mu_0 I}{2\\pi (b - a)}$"
    ],
    ans: 0,
    exp: "An Amperian loop of radius $r$ ($a < r < b$) encloses only the inner conductor's current $I$. By Ampere's circuital law: $B(2\\pi r) = \\mu_0 I \\implies B = \\frac{\\mu_0 I}{2\\pi r}$."
  }
];

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

// Now 163 NUMERICAL questions spanning all magnetic field calculations
// We'll generate a diverse array of 163 distinct, authentic numerical problems
const numQuestions = [];

// Template 1: Circular loop at center B = mu_0 * I / (2 * R) (15 questions)
for (let i = 1; i <= 15; i++) {
  const current = (i * 2 + 1); // 3, 5, 7, ..., 31 A
  const radiusCm = (i + 4); // 5, 6, ..., 19 cm
  const R_m = radiusCm / 100;
  // B = (4 * pi * 1e-7 * current) / (2 * R_m) = 2 * pi * 1e-7 * current / R_m in T
  // microTesla = B * 1e6 = 0.2 * pi * current / R_m = 2 * pi * current / radiusCm
  const B_uT = (2 * Math.PI * current / R_m) * 1e-1; // 2 * pi * current / R_m * 1e-1 = 20 * pi * current / radiusCm
  const rounded = Math.round(20 * 3.1416 * current / radiusCm);
  numQuestions.push({
    q: `A circular coil of radius $R = ${radiusCm}\\text{ cm}$ carries a steady current of $I = ${current}\\text{ A}$. What is the magnetic field at the center of the coil in micro-Tesla ($\\mu\\text{T}$)? (Take $\\pi = 3.14$). Round to nearest integer.`,
    val: String(rounded),
    exp: `At the center of a circular coil: $B = \\frac{\\mu_0 I}{2R} = \\frac{(4\\pi \\times 10^{-7})(${current})}{2(${R_m})} \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Template 2: Straight wire B = mu_0 * I / (2 * pi * d) (15 questions)
for (let i = 1; i <= 15; i++) {
  const current = (i * 3 + 2); // 5, 8, 11, ... A
  const distCm = (i * 2 + 3); // 5, 7, 9, ... cm
  const d_m = distCm / 100;
  // B = 2 * 1e-7 * I / d_m
  // microTesla = 2 * 1e-7 * I / d_m * 1e6 = 0.2 * I / d_m = 20 * I / distCm
  const rounded = Math.round(20 * current / distCm);
  numQuestions.push({
    q: `An infinitely long straight wire carries a current of $I = ${current}\\text{ A}$. What is the magnitude of the magnetic field at a distance of $d = ${distCm}\\text{ cm}$ from the wire in micro-Tesla ($\\mu\\text{T}$)? Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\frac{\\mu_0 I}{2\\pi d} = \\frac{(2 \\times 10^{-7})(${current})}{${d_m}} \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Template 3: Solenoid center B = mu_0 * n * I (15 questions)
for (let i = 1; i <= 15; i++) {
  const turnsPerMeter = 200 + i * 50; // 250, 300, ..., 950
  const current = (i % 5 + 1); // 1, 2, 3, 4, 5 A
  // B = 4 * pi * 1e-7 * n * I in T
  // B in mT = 4 * pi * 1e-4 * n * I = 4 * 3.1416 * 1e-4 * n * I * 1000 = 0.4 * pi * n * I / 1000
  const val_mT = ((4 * Math.PI * 1e-7 * turnsPerMeter * current) * 1000).toFixed(2);
  const rounded = Math.round(parseFloat(val_mT) * 10);
  numQuestions.push({
    q: `A long solenoid has $n = ${turnsPerMeter}\\text{ turns/m}$ and carries a current of $I = ${current}\\text{ A}$. If the magnetic field at the center is $B\\text{ mT}$, find the value of $10 B$ rounded to the nearest integer. (Take $\\pi = 3.14$)`,
    val: String(rounded),
    exp: `$B = \\mu_0 n I = (4\\pi \\times 10^{-7})(${turnsPerMeter})(${current}) = ${(parseFloat(val_mT)).toFixed(3)}\\text{ mT}$. Therefore $10B \\approx ${rounded}$.`
  });
}

// Template 4: Axial field of circular loop (15 questions)
for (let i = 1; i <= 15; i++) {
  const R_cm = (i + 2); // 3, 4, ..., 17 cm
  const x_cm = R_cm; // x = R
  const current = (i * 2); // 2, 4, ..., 30 A
  // B_axis = mu_0 * I / (4 * sqrt(2) * R_m)
  // B_axis in uT = 2 * pi * 1e-7 * I / (sqrt(2) * R_m) * 1e6 = 0.2 * pi * I / (1.414 * R_m) = 20 * pi * I / (1.414 * R_cm)
  const rounded = Math.round(20 * 3.1416 * current / (1.4142 * R_cm));
  numQuestions.push({
    q: `A circular coil of radius $R = ${R_cm}\\text{ cm}$ carries a current of $I = ${current}\\text{ A}$. What is the magnetic field at an axial distance $x = ${R_cm}\\text{ cm}$ from the center of the coil in micro-Tesla ($\\mu\\text{T}$)? (Take $\\pi = 3.14, \\sqrt{2} = 1.414$). Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}} = \\frac{\\mu_0 I}{4\\sqrt{2}R} \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Template 5: Square loop of side a (15 questions)
for (let i = 1; i <= 15; i++) {
  const side_cm = (i * 2 + 4); // 6, 8, ..., 34 cm
  const current = (i * 2 + 3); // 5, 7, ..., 33 A
  // B = 2 * sqrt(2) * mu_0 * I / (pi * a_m) = 2 * 1.4142 * 4 * pi * 1e-7 * I / (pi * a_m) = 8 * 1.4142 * 1e-7 * I / a_m
  // In uT: 8 * 1.4142 * 0.1 * I / (side_cm / 100) = 113.137 * I / side_cm
  const rounded = Math.round(113.137 * current / side_cm);
  numQuestions.push({
    q: `A square wire loop of side $a = ${side_cm}\\text{ cm}$ carries a current of $I = ${current}\\text{ A}$. What is the magnetic field at the center of the square in micro-Tesla ($\\mu\\text{T}$)? (Take $\\sqrt{2} = 1.414, \\pi = 3.14$). Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\frac{2\\sqrt{2}\\mu_0 I}{\\pi a} = \\frac{2(1.414)(4\\pi \\times 10^{-7})(${current})}{\\pi (${(side_cm/100).toFixed(2)})} \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Template 6: Semicircular arc B = mu_0 * I / (4 * R) (15 questions)
for (let i = 1; i <= 15; i++) {
  const radius_cm = (i * 2 + 5); // 7, 9, ..., 35 cm
  const current = (i * 4); // 4, 8, ..., 60 A
  // B = mu_0 * I / (4 * R_m) = 4 * pi * 1e-7 * I / (4 * R_m) = pi * 1e-7 * I / R_m
  // in uT: pi * 1e-1 * I / (radius_cm / 100) = 10 * pi * I / radius_cm
  const rounded = Math.round(10 * 3.1416 * current / radius_cm);
  numQuestions.push({
    q: `A wire carrying current $I = ${current}\\text{ A}$ is bent into a semicircle of radius $R = ${radius_cm}\\text{ cm}$. What is the magnetic field at the center of curvature in micro-Tesla ($\\mu\\text{T}$)? (Take $\\pi = 3.14$). Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\frac{\\mu_0 I}{4R} = \\frac{(4\\pi \\times 10^{-7})(${current})}{4(${(radius_cm/100).toFixed(2)})} \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Template 7: Toroid B = mu_0 * N * I / (2 * pi * r) (15 questions)
for (let i = 1; i <= 15; i++) {
  const turns = 500 + i * 100; // 600, 700, ..., 2000
  const radius_cm = 10 + i * 2; // 12, 14, ..., 40 cm
  const current = (i % 4 + 1.5); // 2.5, 3.5, 4.5, 1.5, ...
  // B = 2 * 1e-7 * N * I / r_m
  // in mT: 2 * 1e-7 * N * I / (radius_cm / 100) * 1000 = 0.2 * N * I / radius_cm
  const rounded = Math.round(0.2 * turns * current / radius_cm);
  numQuestions.push({
    q: `A toroid has $N = ${turns}\\text{ turns}$ and a mean radius of $r = ${radius_cm}\\text{ cm}$. When a current of $I = ${current}\\text{ A}$ passes through the winding, what is the magnetic field inside the core in milli-Tesla (mT)? Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\frac{\\mu_0 N I}{2\\pi r} = \\frac{(2 \\times 10^{-7})(${turns})(${current})}{${(radius_cm/100).toFixed(2)}} \\approx ${rounded}\\text{ mT}$.`
  });
}

// Template 8: Equilateral triangle of side a (15 questions)
for (let i = 1; i <= 15; i++) {
  const side_cm = (i * 3 + 5); // 8, 11, 14, ... cm
  const current = (i * 2 + 1); // 3, 5, 7, ... A
  // B = 9 * mu_0 * I / (2 * pi * a_m) = 9 * 2 * 1e-7 * I / a_m = 18 * 1e-7 * I / a_m
  // In uT: 18 * 0.1 * I / (side_cm / 100) = 180 * I / side_cm
  const rounded = Math.round(180 * current / side_cm);
  numQuestions.push({
    q: `An equilateral triangular loop of wire of side $a = ${side_cm}\\text{ cm}$ carries a steady current of $I = ${current}\\text{ A}$. What is the magnitude of the magnetic field at the centroid in micro-Tesla ($\\mu\\text{T}$)? Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\frac{9\\mu_0 I}{2\\pi a} = \\frac{9(2 \\times 10^{-7})(${current})}{${(side_cm/100).toFixed(2)}} \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Template 9: Regular hexagon of side a (15 questions)
for (let i = 1; i <= 15; i++) {
  const side_cm = (i * 2 + 6); // 8, 10, ..., 36 cm
  const current = (i * 3); // 3, 6, ..., 45 A
  // B = sqrt(3) * mu_0 * I / (pi * a_m) = 1.732 * 4 * pi * 1e-7 * I / (pi * a_m) = 6.928 * 1e-7 * I / a_m
  // In uT: 6.928 * 0.1 * I / (side_cm / 100) = 69.28 * I / side_cm
  const rounded = Math.round(69.28 * current / side_cm);
  numQuestions.push({
    q: `A wire in the shape of a regular hexagon of side $a = ${side_cm}\\text{ cm}$ carries a current of $I = ${current}\\text{ A}$. What is the magnetic field at the center of the hexagon in micro-Tesla ($\\mu\\text{T}$)? (Take $\\sqrt{3} = 1.732, \\pi = 3.14$). Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\frac{\\sqrt{3}\\mu_0 I}{\\pi a} = \\frac{1.732(4\\pi \\times 10^{-7})(${current})}{\\pi(${(side_cm/100).toFixed(2)})} \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Template 10: Arc of angle theta (15 questions)
for (let i = 1; i <= 15; i++) {
  const angleDeg = (i * 20); // 20, 40, ..., 300 deg
  const R_cm = (i + 5); // 6, 7, ..., 20 cm
  const current = (i + 2); // 3, 4, ..., 17 A
  // B = mu_0 * I * theta_rad / (4 * pi * R_m) = 1e-7 * I * (angleDeg * pi / 180) / (R_cm / 100)
  // in uT: 1e-1 * I * (angleDeg * pi / 180) / (R_cm / 100) = 10 * pi * I * angleDeg / (180 * R_cm) = pi * I * angleDeg / (18 * R_cm)
  const rounded = Math.round(3.1416 * current * angleDeg / (18 * R_cm));
  numQuestions.push({
    q: `A circular arc of radius $R = ${R_cm}\\text{ cm}$ subtends an angle of $${angleDeg}^\\circ$ at its center of curvature and carries a current of $I = ${current}\\text{ A}$. What is the magnetic field at the center of curvature in micro-Tesla ($\\mu\\text{T}$)? (Take $\\pi = 3.14$). Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\frac{\\mu_0 I \\theta}{4\\pi R} = \\frac{(10^{-7})(${current})(${angleDeg} \\times \\pi / 180)}{${(R_cm/100).toFixed(2)}} \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Template 11: Two perpendicular circular coils (15 questions)
for (let i = 1; i <= 15; i++) {
  const R_cm = (i * 2 + 5); // 7, 9, ... cm
  const I1 = (i + 2); // 3, 4, ... A
  const I2 = (i + 5); // 6, 7, ... A
  // B1 = 2 * pi * 1e-7 * I1 / R_m, B2 = 2 * pi * 1e-7 * I2 / R_m
  // B_net = sqrt(B1^2 + B2^2) = 2 * pi * 1e-7 * sqrt(I1^2 + I2^2) / R_m
  // in uT: 20 * pi * sqrt(I1^2 + I2^2) / R_cm
  const I_hyp = Math.sqrt(I1 * I1 + I2 * I2);
  const rounded = Math.round(20 * 3.1416 * I_hyp / R_cm);
  numQuestions.push({
    q: `Two identical circular coils of radius $R = ${R_cm}\\text{ cm}$ are placed concentrically in mutually perpendicular planes, carrying currents $I_1 = ${I1}\\text{ A}$ and $I_2 = ${I2}\\text{ A}$ respectively. What is the magnitude of the net magnetic field at their common center in micro-Tesla ($\\mu\\text{T}$)? (Take $\\pi = 3.14$). Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\sqrt{B_1^2 + B_2^2} = \\frac{\\mu_0}{2R}\\sqrt{I_1^2 + I_2^2} \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Remaining 13 questions to reach exactly 163 (15 * 10 = 150 + 13 = 163)
for (let i = 1; i <= 13; i++) {
  const current = (i * 5 + 5); // 10, 15, ..., 70 A
  const inner_cm = (i + 2); // 3, 4, ... cm
  const outer_cm = inner_cm * 2; // 6, 8, ... cm
  // Concentric coplanar coils carrying current in same direction:
  // B = mu_0 * I / (2 * R1) + mu_0 * I / (2 * R2) = mu_0 * I / 2 * (1/R1 + 1/R2)
  // in uT: 20 * pi * I * (1/inner_cm + 1/outer_cm)
  const factor = (1 / inner_cm) + (1 / outer_cm);
  const rounded = Math.round(20 * 3.1416 * current * factor);
  numQuestions.push({
    q: `Two concentric coplanar circular loops have radii $R_1 = ${inner_cm}\\text{ cm}$ and $R_2 = ${outer_cm}\\text{ cm}$ and carry equal currents of $I = ${current}\\text{ A}$ in the same direction. What is the net magnetic field at their common center in micro-Tesla ($\\mu\\text{T}$)? (Take $\\pi = 3.14$). Round to nearest integer.`,
    val: String(rounded),
    exp: `$B = \\frac{\\mu_0 I}{2}\\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right) \\approx ${rounded}\\,\\mu\\text{T}$.`
  });
}

// Ensure exactly 163 numerical questions
const finalNumQuestions = numQuestions.slice(0, 163);
console.log(`Generated ${finalNumQuestions.length} numerical questions (target 163).`);

finalNumQuestions.forEach((item, idx) => {
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

console.log(`Part 7 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'ASSERTION_REASON').length}, MCQ: ${questions.filter(q => q.type === 'MCQ').length}, NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);

const outputPath = path.join(__dirname, 'data_jee_magnetism_part7.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outputPath}`);
