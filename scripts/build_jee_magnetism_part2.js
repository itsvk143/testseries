const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Ampere's law";
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
    assertion: "Ampere's circuital law states that the line integral of magnetic field $\\oint \\vec{B} \\cdot d\\vec{l}$ around any closed loop equals $\\mu_0$ times the total current enclosed by the loop.",
    reason: "The line integral $\\oint \\vec{B} \\cdot d\\vec{l}$ depends only on the current enclosed by the Amperian loop, even though the magnetic field $\\vec{B}$ at any point on the loop is produced by all currents present inside and outside.",
    correct: 0,
    explanation: "According to Ampere's law, $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{encl}$. The net circulation depends strictly on the enclosed current $I_{encl}$, but $\\vec{B}$ at any point on the contour is the resultant field of all currents in the universe. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Inside a long cylindrical wire of radius $R$ carrying a uniformly distributed current $I$, the magnetic field is directly proportional to the distance $r$ from the axis ($r < R$).",
    reason: "The current enclosed by an Amperian loop of radius $r < R$ is proportional to the enclosed cross-sectional area, giving $I_{encl} = I \\frac{r^2}{R^2}$.",
    correct: 0,
    explanation: "For an Amperian circle of radius $r < R$: $B(2\\pi r) = \\mu_0 I_{encl} = \\mu_0 I \\frac{\\pi r^2}{\\pi R^2} = \\mu_0 I \\frac{r^2}{R^2}$. Thus $B = \\frac{\\mu_0 I r}{2\\pi R^2}$, showing $B \\propto r$. Both Assertion and Reason are true, and Reason is the correct explanation."
  },
  {
    assertion: "The magnetic field inside the hollow central core of a long cylindrical conducting tube carrying a longitudinal current is zero everywhere.",
    reason: "An Amperian loop drawn inside the central hollow region encloses zero net electric current.",
    correct: 0,
    explanation: "By cylindrical symmetry, $\\oint \\vec{B} \\cdot d\\vec{l} = B(2\\pi r)$. In the hollow region, $I_{encl} = 0$, hence $B(2\\pi r) = 0 \\implies B = 0$. Reason correctly explains Assertion."
  },
  {
    assertion: "The magnetic field outside a coaxial cable carrying equal and opposite currents in the inner and outer conductors is identically zero.",
    reason: "An Amperian loop enclosing both the inner and outer conductors encloses a net current $I_{net} = I - I = 0$.",
    correct: 0,
    explanation: "Applying Ampere's circuital law for radius $r > R_{outer}$, $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0(I - I) = 0$. By symmetry, $B(2\\pi r) = 0 \\implies B = 0$ outside the cable."
  },
  {
    assertion: "At the center of a long ideal solenoid carrying current, the magnetic field is twice as strong as at either end of the solenoid.",
    reason: "At the center of a semi-infinite solenoid the solid angle subtended is $2\\pi$, whereas at the ends it is $2\\pi$, halving the field from $B = \\mu_0 n I$ to $B = \\frac{1}{2}\\mu_0 n I$.",
    correct: 0,
    explanation: "For an infinite solenoid, $B = \\mu_0 n I$. At the ends of a very long solenoid, by symmetry or solid angle arguments, $B_{end} = \\frac{1}{2}\\mu_0 n I = \\frac{1}{2}B_{center}$. Thus $B_{center} = 2 B_{end}$."
  },
  {
    assertion: "The magnetic field in the open empty space outside an ideal, infinitely long, tightly wound solenoid is zero.",
    reason: "The outside fields produced by the opposite sides of the tightly packed circular loops cancel each other out completely.",
    correct: 0,
    explanation: "For an ideal tightly wound solenoid, the helical pitch approaches zero. Outside, the axial magnetic field vanishes due to destructive interference of field lines from adjacent turns. Applying an Amperian loop partially inside and outside yields $B_{out} = 0$."
  },
  {
    assertion: "The magnetic field inside the core of a toroid of mean radius $r$ with $N$ turns carrying current $I$ is $B = \\frac{\\mu_0 N I}{2\\pi r}$.",
    reason: "An Amperian circular loop of radius $r$ inside the toroidal core threads all $N$ turns, enclosing a total current of $N I$.",
    correct: 0,
    explanation: "By circular symmetry, the magnetic field lines are concentric circles inside the core. Taking an Amperian loop of radius $r$: $\\oint \\vec{B} \\cdot d\\vec{l} = B(2\\pi r) = \\mu_0 (N I) \\implies B = \\frac{\\mu_0 N I}{2\\pi r}$."
  },
  {
    assertion: "Ampere's circuital law is always true for any steady current configuration, but it is practically useful for calculating $\\vec{B}$ only when high spatial symmetry exists.",
    reason: "Unless the symmetry allows $\\vec{B}$ to be factored out of the line integral $\\oint \\vec{B} \\cdot d\\vec{l}$, evaluating the integral does not directly isolate the value of $\\vec{B}$.",
    correct: 0,
    explanation: "Ampere's law is universally valid for steady currents, just as Gauss's law is for electrostatics. However, calculating $B$ directly from $\\oint \\vec{B} \\cdot d\\vec{l} = B \\oint dl$ requires that $\\vec{B}$ be tangential and uniform in magnitude over the Amperian path."
  },
  {
    assertion: "If an Amperian loop encloses no net current, the magnetic field at every point on the loop must be zero.",
    reason: "Ampere's circuital law states that $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{encl}$, so when $I_{encl} = 0$, the integral vanishes.",
    correct: 3,
    explanation: "When $I_{encl} = 0$, $\\oint \\vec{B} \\cdot d\\vec{l} = 0$. However, this only means that the integral over the entire loop is zero, not that $\\vec{B}$ is zero at every point (e.g. an external magnetic field passing through the loop will have non-zero $\\vec{B}$ along the path whose positive and negative contributions cancel). Thus Assertion is false, Reason is true."
  },
  {
    assertion: "The magnetic field inside a solid conductor carrying a current with non-uniform current density $J = c r$ is proportional to $r^2$.",
    reason: "The current enclosed within radius $r$ is $I_{encl} = \\int_0^r (c r') 2\\pi r' dr' = \\frac{2\\pi c r^3}{3}$, so $B = \\frac{\\mu_0 I_{encl}}{2\\pi r} \\propto r^2$.",
    correct: 0,
    explanation: "Enclosed current: $I_{encl} = 2\\pi c \\int_0^r r'^2 dr' = \\frac{2\\pi c r^3}{3}$. By Ampere's law, $B(2\\pi r) = \\mu_0 I_{encl} = \\mu_0 \\frac{2\\pi c r^3}{3} \\implies B = \\frac{\\mu_0 c r^2}{3}$. Therefore $B \\propto r^2$."
  },
  {
    assertion: "Maxwell modified Ampere's circuital law by adding the displacement current term $\\mu_0 \\epsilon_0 \\frac{\\partial \\Phi_E}{\\partial t}$.",
    reason: "During the charging of a capacitor, the conduction current between the plates is zero, which would violate the continuity of current in the original Ampere's law.",
    correct: 0,
    explanation: "Between capacitor plates, no conduction current flows. Without displacement current, an Amperian loop between the plates would yield zero field, while a loop encircling the lead wire would yield non-zero field. Maxwell added displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ to resolve this inconsistency."
  },
  {
    assertion: "For a current-carrying infinite sheet with surface current density $K$ (in $\\text{A/m}$), the magnetic field on either side is uniform and has magnitude $B = \\frac{1}{2}\\mu_0 K$.",
    reason: "Applying Ampere's law to a rectangular loop perpendicular to the sheet of width $L$ gives $2 B L = \\mu_0 (K L) \\implies B = \\frac{1}{2}\\mu_0 K$.",
    correct: 0,
    explanation: "By planar symmetry, the field is parallel to the sheet and opposite on opposite sides. A rectangular loop of width $L$ enclosing current $K L$ gives $\\oint \\vec{B} \\cdot d\\vec{l} = B L + 0 + B L + 0 = 2 B L = \\mu_0 K L \\implies B = \\frac{\\mu_0 K}{2}$."
  },
  {
    assertion: "The magnetic field inside the central cavity of a toroid (the hole in the donut) is zero.",
    reason: "An Amperian loop of radius smaller than the inner radius of the toroid encloses zero current.",
    correct: 0,
    explanation: "In the central hole of the toroid, an Amperian loop of radius $r < R_{inner}$ encloses no wire turns, so $I_{encl} = 0$. By circular symmetry, $B(2\\pi r) = 0 \\implies B = 0$."
  },
  {
    assertion: "A straight wire of radius $R$ carries a uniform current. The magnetic field at a distance $r = R/2$ inside is equal to the magnetic field at a distance $r = 2R$ outside.",
    reason: "The magnetic field inside is $B_{in} = \\frac{\\mu_0 I r}{2\\pi R^2}$ and outside is $B_{out} = \\frac{\\mu_0 I}{2\\pi r}$. At $r = R/2$, $B_{in} = \\frac{\\mu_0 I}{4\\pi R}$, and at $r = 2R$, $B_{out} = \\frac{\\mu_0 I}{4\\pi R}$.",
    correct: 0,
    explanation: "At $r = R/2$: $B_{in} = \\frac{\\mu_0 I (R/2)}{2\\pi R^2} = \\frac{\\mu_0 I}{4\\pi R}$. At $r = 2R$: $B_{out} = \\frac{\\mu_0 I}{2\\pi (2R)} = \\frac{\\mu_0 I}{4\\pi R}$. Both are equal, so Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The magnetic field on the axis of a long solenoid depends on the radius of the solenoid.",
    reason: "The magnetic field inside an ideal solenoid is given by $B = \\mu_0 n I$, where $n$ is the number of turns per unit length and $I$ is the current.",
    correct: 3,
    explanation: "The field inside an ideal solenoid is $B = \\mu_0 n I$, which is completely independent of the radius or cross-sectional area of the solenoid. Thus Assertion is false, Reason is true."
  },
  {
    assertion: "In a thick hollow cylindrical conductor of inner radius $a$ and outer radius $b$ carrying current $I$ uniformly distributed over its cross-section, the field at distance $r$ ($a < r < b$) is $B = \\frac{\\mu_0 I}{2\\pi r} \\frac{r^2 - a^2}{b^2 - a^2}$.",
    reason: "The fraction of current enclosed within radius $r$ is the ratio of areas $\\frac{\\pi(r^2 - a^2)}{\\pi(b^2 - a^2)}$.",
    correct: 0,
    explanation: "Current density is $J = \\frac{I}{\\pi(b^2 - a^2)}$. Enclosed current is $I_{encl} = J \\pi(r^2 - a^2) = I \\frac{r^2 - a^2}{b^2 - a^2}$. From Ampere's law, $B(2\\pi r) = \\mu_0 I_{encl} \\implies B = \\frac{\\mu_0 I}{2\\pi r} \\frac{r^2 - a^2}{b^2 - a^2}$."
  },
  {
    assertion: "If the number of turns per unit length of a solenoid is doubled and the current is halved, the magnetic field inside remains unchanged.",
    reason: "The magnetic field inside an ideal solenoid is directly proportional to the product $n I$.",
    correct: 0,
    explanation: "Since $B = \\mu_0 n I$, if $n' = 2n$ and $I' = I/2$, the new field is $B' = \\mu_0 (2n)(I/2) = \\mu_0 n I = B$. The product $n I$ remains constant."
  },
  {
    assertion: "The magnetic field along the axis of an infinitely long straight wire carrying current $I$ is non-zero.",
    reason: "The magnetic field lines formed by a straight current-carrying wire are concentric circles centered on the axis of the wire, having no axial component.",
    correct: 3,
    explanation: "On the axis of the wire ($r = 0$), the magnetic field is zero because $B = \\frac{\\mu_0 I r}{2\\pi R^2} = 0$. Assertion is false. Reason correctly describes the circular nature of field lines, so Reason is true."
  },
  {
    assertion: "If a soft iron core is inserted inside a current-carrying solenoid, the magnetic field inside increases substantially.",
    reason: "Soft iron is a ferromagnetic material with high relative magnetic permeability ($\\mu_r \\gg 1$), resulting in an enhanced total field $B = \\mu_r \\mu_0 n I$.",
    correct: 0,
    explanation: "The magnetic field inside a medium of relative permeability $\\mu_r$ is $B = \\mu n I = \\mu_r \\mu_0 n I$. For ferromagnetic soft iron, $\\mu_r \\sim 10^3 - 10^4$, drastically amplifying the field."
  },
  {
    assertion: "Ampere's law can be applied to find the magnetic field outside an infinitely long solenoid.",
    reason: "By choosing a rectangular Amperian loop that lies completely outside the solenoid with sides parallel and perpendicular to the axis, one finds $B_{out} = 0$.",
    correct: 0,
    explanation: "Using an Amperian loop with both long sides outside the solenoid parallel to the axis, enclosing zero net current, one deduces that $B_{out}$ must be independent of distance. At infinite distance, $B \\to 0$, hence $B_{out} = 0$ everywhere outside."
  },
  {
    assertion: "The magnetic field inside a toroid is strictly uniform across its cross-section.",
    reason: "A toroid has circular symmetry and finite cross-sectional radius.",
    correct: 3,
    explanation: "Inside the core of a toroid, $B = \\frac{\\mu_0 N I}{2\\pi r}$. Because $r$ varies from the inner radius $R_1$ to the outer radius $R_2$, the field is stronger near the inner edge and weaker near the outer edge. It is not strictly uniform unless the core radius is negligibly small compared to the mean radius. Assertion is false, Reason is true."
  },
  {
    assertion: "The magnetic field produced by a steady electric current does not have any magnetic monopoles as sources.",
    reason: "The divergence of magnetic field is always zero ($\\nabla \\cdot \\vec{B} = 0$), implying magnetic field lines always form continuous closed loops.",
    correct: 0,
    explanation: "Gauss's law for magnetism states that $\\oint \\vec{B} \\cdot d\\vec{A} = 0$, which means magnetic monopoles do not exist in classical electromagnetism and magnetic field lines form closed curves."
  },
  {
    assertion: "When a current-carrying copper pipe is connected to a battery, a magnetic needle placed inside the pipe shows no deflection.",
    reason: "By Ampere's circuital law, the magnetic field inside any hollow region of a cylindrical conductor carrying axial current is identically zero.",
    correct: 0,
    explanation: "For an Amperian loop inside the hollow interior of the pipe, $I_{encl} = 0$. By symmetry, the magnetic field inside is zero everywhere, so a compass needle placed inside experiences zero magnetic torque and does not deflect."
  },
  {
    assertion: "A finite solenoid has a magnetic field at its center that is smaller than that of an infinitely long solenoid with identical turns and current.",
    reason: "For a finite solenoid of length $L$ and radius $R$, the field at the axial center is $B = \\mu_0 n I \\cos\\theta$, where $\\cos\\theta = \\frac{L}{\\sqrt{L^2 + 4R^2}} < 1$.",
    correct: 0,
    explanation: "At the center of a finite solenoid, $B = \\mu_0 n I \\frac{L}{\\sqrt{L^2 + 4R^2}}$. As $L \\to \\infty$, this factor approaches 1. For any finite length $L$, the factor is strictly less than 1."
  },
  {
    assertion: "The circulation of magnetic field $\\oint \\vec{B} \\cdot d\\vec{l}$ around an Amperian loop enclosing two wires carrying currents of $5\\text{ A}$ and $3\\text{ A}$ in opposite directions is $2\\mu_0$.",
    reason: "Enclosed current is the algebraic sum of currents passing through the surface bounded by the Amperian loop: $I_{encl} = 5\\text{ A} - 3\\text{ A} = 2\\text{ A}$.",
    correct: 0,
    explanation: "By Ampere's law, $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{encl}$. Since the currents flow in opposite directions, the algebraic sum is $I_{encl} = 5 - 3 = 2\\text{ A}$. Thus the circulation is $2\\mu_0$."
  },
  {
    assertion: "In an Amperian loop, reversing the direction of integration changes the sign of the circulation $\\oint \\vec{B} \\cdot d\\vec{l}$.",
    reason: "The line element vector $d\\vec{l}$ reverses direction when the path traversal direction is reversed.",
    correct: 0,
    explanation: "Line integration depends on the orientation of $d\\vec{l}$. Reversing the traversal direction replaces $d\\vec{l}$ with $-d\\vec{l}$, thus inverting the sign of the integral $\\oint \\vec{B} \\cdot d\\vec{l}$."
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
    q: "A long straight solid cylindrical wire of radius $R$ carries a steady current $I$ that is uniformly distributed across its cross-section. The magnetic field at distance $r$ from the axis is plotted against $r$. Which of the following describes the variation?",
    opts: [
      "$B \\propto r$ for $r < R$, and $B \\propto 1/r$ for $r > R$",
      "$B \\propto 1/r$ for $r < R$, and $B \\propto r$ for $r > R$",
      "$B = 0$ for $r < R$, and $B \\propto 1/r^2$ for $r > R$",
      "$B \\propto r^2$ for $r < R$, and $B \\propto 1/r$ for $r > R$"
    ],
    ans: 0,
    exp: "Inside the wire ($r < R$), $B = \\frac{\\mu_0 I r}{2\\pi R^2} \\propto r$. Outside the wire ($r > R$), $B = \\frac{\\mu_0 I}{2\\pi r} \\propto \\frac{1}{r}$. At the surface ($r = R$), the field reaches its maximum value $B_{max} = \\frac{\\mu_0 I}{2\\pi R}$."
  },
  {
    q: "A long solenoid has $500$ turns per meter and carries a current of $2.0\\text{ A}$. The magnetic field at the center of the solenoid and at one of its ends are respectively:",
    opts: [
      "$1.26 \\times 10^{-3}\\text{ T}$ and $0.63 \\times 10^{-3}\\text{ T}$",
      "$2.51 \\times 10^{-3}\\text{ T}$ and $1.26 \\times 10^{-3}\\text{ T}$",
      "$0.63 \\times 10^{-3}\\text{ T}$ and $1.26 \\times 10^{-3}\\text{ T}$",
      "$1.26 \\times 10^{-3}\\text{ T}$ and $1.26 \\times 10^{-3}\\text{ T}$"
    ],
    ans: 0,
    exp: "At the center: $B_c = \\mu_0 n I = (4\\pi \\times 10^{-7})(500)(2.0) = 4\\pi \\times 10^{-4}\\text{ T} \\approx 1.257 \\times 10^{-3}\\text{ T}$. At the end: $B_e = \\frac{1}{2} B_c \\approx 0.628 \\times 10^{-3}\\text{ T}$."
  },
  {
    q: "A hollow cylindrical conductor of inner radius $a$ and outer radius $b$ carries a total current $I$ uniformly distributed over its cross-section. The magnetic field at a radial distance $r$ such that $a < r < b$ is:",
    opts: [
      "$\\frac{\\mu_0 I}{2\\pi r} \\frac{r^2 - a^2}{b^2 - a^2}$",
      "$\\frac{\\mu_0 I}{2\\pi r} \\frac{b^2 - r^2}{b^2 - a^2}$",
      "$\\frac{\\mu_0 I}{2\\pi r} \\frac{r^2}{b^2 - a^2}$",
      "$\\frac{\\mu_0 I}{2\\pi} \\frac{r - a}{b - a}$"
    ],
    ans: 0,
    exp: "The current density is $J = \\frac{I}{\\pi(b^2 - a^2)}$. The enclosed current is $I_{encl} = J \\pi(r^2 - a^2) = I \\frac{r^2 - a^2}{b^2 - a^2}$. By Ampere's law, $B(2\\pi r) = \\mu_0 I_{encl} \\implies B = \\frac{\\mu_0 I}{2\\pi r} \\frac{r^2 - a^2}{b^2 - a^2}$."
  },
  {
    q: "A toroid has a non-ferromagnetic core of inner radius $25\\text{ cm}$ and outer radius $26\\text{ cm}$, around which $3500$ turns of wire are wound. If the current in the wire is $11\\text{ A}$, the magnetic field inside the core of the toroid is:",
    opts: [
      "$3.02 \\times 10^{-2}\\text{ T}$",
      "$2.12 \\times 10^{-2}\\text{ T}$",
      "$1.51 \\times 10^{-2}\\text{ T}$",
      "$4.24 \\times 10^{-2}\\text{ T}$"
    ],
    ans: 0,
    exp: "Mean radius is $r = \\frac{25 + 26}{2} = 25.5\\text{ cm} = 0.255\\text{ m}$. Magnetic field is $B = \\frac{\\mu_0 N I}{2\\pi r} = \\frac{(4\\pi \\times 10^{-7})(3500)(11)}{2\\pi (0.255)} = \\frac{2 \\times 10^{-7} \\times 38500}{0.255} = \\frac{7.7 \\times 10^{-3}}{0.255} \\approx 3.02 \\times 10^{-2}\\text{ T}$."
  },
  {
    q: "A long straight solid wire of radius $R$ carries current $I$ with a non-uniform current density $J = k r$, where $k$ is a constant and $r$ is the radial distance from the axis. The magnetic field inside the wire at distance $r$ ($r < R$) is proportional to:",
    opts: [
      "$r$",
      "$r^2$",
      "$r^3$",
      "$1/r$"
    ],
    ans: 1,
    exp: "$I_{encl} = \\int_0^r J(r') 2\\pi r' dr' = 2\\pi k \\int_0^r r'^2 dr' = \\frac{2\\pi k r^3}{3}$. Ampere's law: $B(2\\pi r) = \\mu_0 I_{encl} = \\mu_0 \\frac{2\\pi k r^3}{3} \\implies B = \\frac{\\mu_0 k r^2}{3} \\propto r^2$."
  },
  {
    q: "An infinitely long thin hollow metal cylinder of radius $R$ carries a steady longitudinal current $I$. The magnetic field $B$ is:",
    opts: [
      "Zero everywhere inside and $\\frac{\\mu_0 I}{2\\pi r}$ outside",
      "$\\frac{\\mu_0 I}{2\\pi r}$ inside and zero outside",
      "$\\frac{\\mu_0 I r}{2\\pi R^2}$ inside and $\\frac{\\mu_0 I}{2\\pi r}$ outside",
      "Zero everywhere both inside and outside"
    ],
    ans: 0,
    exp: "For any point inside the cylinder ($r < R$), an Amperian loop encloses zero current, so $B = 0$. For any point outside ($r > R$), an Amperian loop encloses the entire current $I$, yielding $B = \\frac{\\mu_0 I}{2\\pi r}$."
  },
  {
    q: "A flat infinite sheet carries a uniform surface current density $\\vec{K} = K \\hat{i}\\text{ A/m}$ in the $xy$-plane. The magnetic field at a distance $z > 0$ above the sheet is:",
    opts: [
      "$-\\frac{\\mu_0 K}{2}\\hat{j}$",
      "$\\frac{\\mu_0 K}{2}\\hat{j}$",
      "$\\frac{\\mu_0 K}{2}\\hat{k}$",
      "$-\\frac{\\mu_0 K}{2}\\hat{k}$"
    ],
    ans: 0,
    exp: "By the right-hand rule, for current in the $+x$ direction ($\\hat{i}$), the magnetic field above the plane ($z > 0$) points in the $-y$ direction ($-\\hat{j}$) and below the plane ($z < 0$) points in the $+y$ direction ($+\\hat{j}$). The magnitude is $B = \\frac{\\mu_0 K}{2}$, so $\\vec{B} = -\\frac{\\mu_0 K}{2}\\hat{j}$."
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

// 20 NUMERICAL questions
const numData = [
  {
    q: "A long straight solid wire of radius $R = 4.0\\text{ mm}$ carries a uniformly distributed current of $8.0\\text{ A}$. What is the magnetic field in micro-Tesla ($\\mu\\text{T}$) at a distance of $2.0\\text{ mm}$ from the axis of the wire? (Take $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
    val: "200",
    exp: "Inside the wire ($r < R$): $B = \\frac{\\mu_0 I r}{2\\pi R^2} = \\frac{(4\\pi \\times 10^{-7})(8.0)(2.0 \\times 10^{-3})}{2\\pi (4.0 \\times 10^{-3})^2} = \\frac{2 \\times 10^{-7} \\times 16 \\times 10^{-3}}{16 \\times 10^{-6}} = 2.0 \\times 10^{-4}\\text{ T} = 200\\,\\mu\\text{T}$."
  },
  {
    q: "A long solenoid has length $1.0\\text{ m}$ and inner diameter $3.0\\text{ cm}$ and has five layers of windings of $800$ turns each. It carries a current of $2.5\\text{ A}$. What is the magnetic field at the center of the solenoid in milli-Tesla (mT)? (Take $\\pi = 3.14$)",
    val: "12.56",
    exp: "Total turns $N = 5 \\times 800 = 4000$ turns. Turns per meter $n = 4000 / 1.0 = 4000\\text{ m}^{-1}$. Field at center is $B = \\mu_0 n I = (4\\pi \\times 10^{-7})(4000)(2.5) = 4\\pi \\times 10^{-7} \\times 10000 = 4\\pi \\times 10^{-3}\\text{ T} = 4(3.14)\\text{ mT} = 12.56\\text{ mT}$."
  },
  {
    q: "A toroid has $2000$ turns and carries a current of $1.5\\text{ A}$. If the mean radius of the toroid is $20\\text{ cm}$, the magnetic field inside the toroid in milli-Tesla (mT) is:",
    val: "3",
    exp: "$B = \\frac{\\mu_0 N I}{2\\pi r} = \\frac{(4\\pi \\times 10^{-7})(2000)(1.5)}{2\\pi (0.20)} = \\frac{2 \\times 10^{-7} \\times 3000}{0.20} = \\frac{6.0 \\times 10^{-4}}{0.20} = 3.0 \\times 10^{-3}\\text{ T} = 3\\text{ mT}$."
  },
  {
    q: "A hollow cylindrical pipe of inner radius $2.0\\text{ cm}$ and outer radius $4.0\\text{ cm}$ carries a current of $30\\text{ A}$ uniformly distributed over its cross-section. What is the magnetic field at a distance of $3.0\\text{ cm}$ from the cylinder axis in micro-Tesla ($\\mu\\text{T}$)?",
    val: "83",
    exp: "Enclosed current: $I_{encl} = I \\frac{r^2 - a^2}{b^2 - a^2} = 30 \\frac{3^2 - 2^2}{4^2 - 2^2} = 30 \\frac{9 - 4}{16 - 4} = 30 \\times \\frac{5}{12} = 12.5\\text{ A}$. Then $B = \\frac{\\mu_0 I_{encl}}{2\\pi r} = \\frac{(2 \\times 10^{-7})(12.5)}{0.03} = \\frac{2.5 \\times 10^{-6}}{0.03} \\approx 83.33\\,\\mu\\text{T} \\approx 83\\,\\mu\\text{T}$."
  },
  {
    q: "A solid cylindrical wire of radius $R = 10\\text{ mm}$ carries a current of $50\\text{ A}$. The magnetic field at its surface is $B_0$. At what distance outside the wire (in mm from the axis) is the magnetic field equal to $B_0 / 5$?",
    val: "50",
    exp: "At the surface: $B_0 = \\frac{\\mu_0 I}{2\\pi R}$. Outside: $B(r) = \\frac{\\mu_0 I}{2\\pi r}$. Setting $B(r) = B_0 / 5$ gives $\\frac{1}{r} = \\frac{1}{5R} \\implies r = 5R = 5(10\\text{ mm}) = 50\\text{ mm}$."
  },
  {
    q: "A solenoid of length $0.4\\text{ m}$ has $400$ turns. A current of $3.0\\text{ A}$ is passed through it. What is the magnetic field at one of its ends in micro-Tesla ($\\mu\\text{T}$)? (Take $\\pi = 3.14$)",
    val: "1884",
    exp: "$n = \\frac{400}{0.4} = 1000\\text{ m}^{-1}$. At the end: $B_{end} = \\frac{1}{2}\\mu_0 n I = \\frac{1}{2}(4\\pi \\times 10^{-7})(1000)(3.0) = 6\\pi \\times 10^{-4}\\text{ T} = 6(3.14) \\times 10^{-4}\\text{ T} = 1.884 \\times 10^{-3}\\text{ T} = 1884\\,\\mu\\text{T}$."
  },
  {
    q: "A cylindrical wire of radius $R = 6.0\\text{ mm}$ has current density varying as $J(r) = C r^2$. If the total current carried by the wire is $18\\text{ A}$, the magnetic field at $r = 3.0\\text{ mm}$ from the axis in micro-Tesla ($\\mu\\text{T}$) is:",
    val: "75",
    exp: "Enclosed current: $I(r) = \\int_0^r C r'^2 (2\\pi r') dr' = 2\\pi C \\frac{r^4}{4} \\propto r^4$. Thus $\\frac{I(r)}{I_{total}} = \\left(\\frac{r}{R}\\right)^4$. For $r = R/2$: $I(r) = 18 \\times (1/2)^4 = 18 / 16 = 1.125\\text{ A}$. By Ampere's law: $B = \\frac{\\mu_0 I(r)}{2\\pi r} = \\frac{(2 \\times 10^{-7})(1.125)}{3.0 \\times 10^{-3}} = \\frac{2.25 \\times 10^{-7}}{3.0 \\times 10^{-3}} = 7.5 \\times 10^{-5}\\text{ T} = 75\\,\\mu\\text{T}$."
  },
  {
    q: "An infinite flat sheet carries a surface current density $K = 40\\text{ A/m}$. The magnetic field just above the sheet in micro-Tesla ($\\mu\\text{T}$) is: (Take $\\pi = 3.14$)",
    val: "25",
    exp: "$B = \\frac{1}{2}\\mu_0 K = \\frac{1}{2}(4\\pi \\times 10^{-7})(40) = 80\\pi \\times 10^{-7}\\text{ T} = 8\\pi \\times 10^{-6}\\text{ T} = 8(3.14) \\times 10^{-6}\\text{ T} = 25.12\\,\\mu\\text{T} \\approx 25\\,\\mu\\text{T}$."
  },
  {
    q: "A coaxial cable consists of an inner conductor of radius $1.0\\text{ mm}$ carrying current $2.0\\text{ A}$, and an outer thin cylindrical shell of radius $3.0\\text{ mm}$ carrying return current $2.0\\text{ A}$. What is the magnetic field at distance $r = 2.0\\text{ mm}$ from the central axis in micro-Tesla ($\\mu\\text{T}$)?",
    val: "200",
    exp: "Between the conductors ($1.0\\text{ mm} < r < 3.0\\text{ mm}$), the Amperian loop encloses only the inner current $I = 2.0\\text{ A}$. Thus $B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{(2 \\times 10^{-7})(2.0)}{2.0 \\times 10^{-3}} = 2.0 \\times 10^{-4}\\text{ T} = 200\\,\\mu\\text{T}$."
  },
  {
    q: "For the same coaxial cable with inner current $2.0\\text{ A}$ and outer current $-2.0\\text{ A}$, what is the magnetic field at distance $r = 5.0\\text{ mm}$ outside the cable in micro-Tesla?",
    val: "0",
    exp: "For $r = 5.0\\text{ mm} > 3.0\\text{ mm}$, the Amperian loop encloses both conductors: $I_{encl} = 2.0\\text{ A} - 2.0\\text{ A} = 0$. By Ampere's law, $B = 0$."
  },
  {
    q: "Two straight long parallel wires carry currents of $10\\text{ A}$ in opposite directions. The wires are separated by $20\\text{ cm}$. The magnitude of the magnetic field at the midpoint between the two wires in micro-Tesla ($\\mu\\text{T}$) is:",
    val: "40",
    exp: "At the midpoint ($d = 10\\text{ cm} = 0.1\\text{ m}$ from each wire), since the currents are opposite, by the right-hand rule their magnetic fields point in the SAME direction. $B_{net} = 2 \\times \\frac{\\mu_0 I}{2\\pi d} = 2 \\times \\frac{(2 \\times 10^{-7})(10)}{0.10} = 2 \\times 2.0 \\times 10^{-5} = 4.0 \\times 10^{-5}\\text{ T} = 40\\,\\mu\\text{T}$."
  },
  {
    q: "A long solenoid has $1000$ turns per meter. The current required to produce a magnetic field of $6.28\\text{ mT}$ at its center in Amperes is: (Take $\\pi = 3.14$)",
    val: "5",
    exp: "$B = \\mu_0 n I \\implies I = \\frac{B}{\\mu_0 n} = \\frac{6.28 \\times 10^{-3}}{(4 \\times 3.14 \\times 10^{-7})(1000)} = \\frac{6.28 \\times 10^{-3}}{1.256 \\times 10^{-3}} = 5.0\\text{ A}$."
  },
  {
    q: "A toroid of mean diameter $40\\text{ cm}$ has $1000$ turns of wire. If a magnetic field of $1.0\\text{ mT}$ is produced inside the core, the current in the winding in Amperes is: (Take $\\pi = 3.14$)",
    val: "1",
    exp: "Mean radius $r = 20\\text{ cm} = 0.20\\text{ m}$. $B = \\frac{\\mu_0 N I}{2\\pi r} = \\frac{(2 \\times 10^{-7})(1000)(I)}{0.20} = 1.0 \\times 10^{-3} I$. Since $B = 1.0\\text{ mT} = 1.0 \\times 10^{-3}\\text{ T}$, we have $1.0 \\times 10^{-3} = 1.0 \\times 10^{-3} I \\implies I = 1.0\\text{ A}$."
  },
  {
    q: "A solid cylindrical conductor of radius $R$ carries a uniform current $I$. The ratio of the magnetic field at $r = R/4$ inside the conductor to the magnetic field at $r = 4R$ outside the conductor is:",
    val: "1",
    exp: "Inside at $r = R/4$: $B_{in} = \\frac{\\mu_0 I (R/4)}{2\\pi R^2} = \\frac{\\mu_0 I}{8\\pi R}$. Outside at $r = 4R$: $B_{out} = \\frac{\\mu_0 I}{2\\pi (4R)} = \\frac{\\mu_0 I}{8\\pi R}$. The ratio $B_{in} / B_{out} = 1$."
  },
  {
    q: "A parallel-plate capacitor with circular plates of radius $R = 10\\text{ cm}$ is being charged. At a certain instant, the electric field between the plates is changing at the rate $\\frac{dE}{dt} = 1.0 \\times 10^{12}\\text{ V/m}\\cdot\\text{s}$. Find the displacement current in Amperes. (Take $\\epsilon_0 = 8.85 \\times 10^{-12}\\text{ F/m}, \\pi = 3.14$)",
    val: "0.28",
    exp: "$I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt} = \\epsilon_0 A \\frac{dE}{dt} = (8.85 \\times 10^{-12}) [3.14 \\times (0.1)^2] (1.0 \\times 10^{12}) = 8.85 \\times 0.0314 = 0.278\\text{ A} \\approx 0.28\\text{ A}$."
  },
  {
    q: "A circular Amperian loop of radius $r = 5.0\\text{ cm}$ encloses three wires carrying currents $I_1 = 4.0\\text{ A}$ (out of page), $I_2 = 7.0\\text{ A}$ (into page), and $I_3 = 5.0\\text{ A}$ (out of page). The circulation $\\oint \\vec{B} \\cdot d\\vec{l}$ in units of $10^{-6}\\text{ T}\\cdot\\text{m}$ is: (Take $\\pi = 3.14$)",
    val: "2.51",
    exp: "$I_{encl} = 4.0 - 7.0 + 5.0 = 2.0\\text{ A}$. Circulation is $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{encl} = (4\\pi \\times 10^{-7})(2.0) = 8\\pi \\times 10^{-7} = 8(3.14) \\times 10^{-7} = 2.512 \\times 10^{-6}\\text{ T}\\cdot\\text{m} \\approx 2.51 \\times 10^{-6}\\text{ T}\\cdot\\text{m}$."
  },
  {
    q: "A solid wire of radius $a = 5.0\\text{ mm}$ carries a current of $25\\text{ A}$. What is the maximum magnetic field produced by this wire in milli-Tesla (mT)?",
    val: "1",
    exp: "Maximum magnetic field occurs at the surface ($r = a$): $B_{max} = \\frac{\\mu_0 I}{2\\pi a} = \\frac{(2 \\times 10^{-7})(25)}{5.0 \\times 10^{-3}} = \\frac{50 \\times 10^{-7}}{5.0 \\times 10^{-3}} = 1.0 \\times 10^{-3}\\text{ T} = 1.0\\text{ mT}$."
  },
  {
    q: "A long solenoid of radius $R = 2.0\\text{ cm}$ has $600$ turns per meter and carries a current of $4.0\\text{ A}$. Find the magnetic flux passing through a cross-section of the solenoid in micro-Webers ($\\mu\\text{Wb}$). (Take $\\pi = 3.14$)",
    val: "3.8",
    exp: "$B = \\mu_0 n I = (4\\pi \\times 10^{-7})(600)(4.0) = 9.6\\pi \\times 10^{-4}\\text{ T}$. Cross-sectional area is $A = \\pi R^2 = \\pi (0.02)^2 = 4\\pi \\times 10^{-4}\\text{ m}^2$. Flux is $\\Phi = B A = (9.6\\pi \\times 10^{-4})(4\\pi \\times 10^{-4}) = 38.4 \\pi^2 \\times 10^{-8} \\approx 38.4(9.87) \\times 10^{-8} = 379 \\times 10^{-8}\\text{ Wb} = 3.79\\,\\mu\\text{Wb} \\approx 3.8\\,\\mu\\text{Wb}$."
  },
  {
    q: "A current $I = 10\\text{ A}$ flows through an infinite cylindrical shell of inner radius $1\\text{ cm}$ and outer radius $2\\text{ cm}$. The magnetic field at distance $r = 0.5\\text{ cm}$ from the axis in Tesla is:",
    val: "0",
    exp: "The point $r = 0.5\\text{ cm}$ lies inside the hollow core of the cylindrical shell ($r < 1\\text{ cm}$). By Ampere's circuital law, the enclosed current is zero, so $B = 0$."
  },
  {
    q: "A solenoid of length $50\\text{ cm}$ and diameter $2\\text{ cm}$ has $500$ turns. It carries a current of $1.0\\text{ A}$. If a core of relative permeability $\\mu_r = 500$ is inserted, the magnetic field at the center of the solenoid in Tesla is: (Take $\\pi = 3.14$)",
    val: "0.628",
    exp: "$n = 500 / 0.50 = 1000\\text{ m}^{-1}$. The field is $B = \\mu_r \\mu_0 n I = 500 \\times (4\\pi \\times 10^{-7})(1000)(1.0) = 2\\pi \\times 10^{-1} = 0.2\\pi\\text{ T} = 0.2(3.14) = 0.628\\text{ T}$."
  }
];

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

console.log(`Part 2 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'ASSERTION_REASON').length}, MCQ: ${questions.filter(q => q.type === 'MCQ').length}, NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);

const outputPath = path.join(__dirname, 'data_jee_magnetism_part2.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outputPath}`);
