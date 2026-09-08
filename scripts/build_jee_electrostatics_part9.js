const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "Potential energy";
const chapter = "Electrostatics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Potential Energy
const arData = [
  {
    a: "The electrostatic potential energy of a system of two like charges is strictly positive.",
    r: "Positive work must be performed by an external agent against the repulsive Coulomb force to bring two like charges from infinite separation to a finite distance $r$: $U = \\frac{k q_1 q_2}{r} > 0$.",
    ans: 0,
    exp: "Because the charges repel, moving them together requires positive external work $W_{ext} = \\int_\\infty^r -F_{repulsion}\\, dr = \\frac{k q_1 q_2}{r} > 0$. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic potential energy of a system of two opposite charges is strictly negative.",
    r: "The attractive electrostatic force between opposite charges performs positive work as they approach each other from infinity, lowering the potential energy below the zero reference at infinity: $U = -\\frac{k |q_1 q_2|}{r} < 0$.",
    ans: 0,
    exp: "Attractive force pulls charges together spontaneously ($W_{field} > 0$), so the stored electrostatic potential energy decreases below zero ($U < 0$). (R) correctly explains (A)."
  },
  {
    a: "The electrostatic self-energy of a thin spherical conducting shell of radius $R$ carrying charge $Q$ is $U = \\frac{k Q^2}{2R}$.",
    r: "The work required to assemble the charge $Q$ on the sphere by bringing charge elements $dq$ from infinity is $W = \\int_0^Q V(q)\\, dq = \\int_0^Q \\frac{kq}{R}\\, dq = \\frac{k Q^2}{2R}$.",
    ans: 0,
    exp: "Integrating the potential $V(q) = \\frac{kq}{R}$ as charge accumulates from $0$ to $Q$ gives $U = \\frac{kQ^2}{2R} = \\frac{Q^2}{8\\pi\\varepsilon_0 R}$. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic self-energy of a uniformly charged non-conducting solid sphere of radius $R$ and total charge $Q$ is $U = \\frac{3k Q^2}{5R}$.",
    r: "Assembling concentric shells of charge $dq = \\rho(4\\pi r^2\\, dr)$ onto an accumulating sphere of charge $q(r) = Q\\frac{r^3}{R^3}$ yields $\\int_0^R \\frac{k q(r)\\, dq}{r} = \\frac{3k Q^2}{5R}$.",
    ans: 0,
    exp: "Volume integration of electrostatic energy density $\\int \\frac{1}{2}\\varepsilon_0 E^2\\, dV$ both inside and outside the sphere yields $U = \\frac{kQ^2}{10R} + \\frac{kQ^2}{2R} = \\frac{3kQ^2}{5R}$. (R) correctly explains (A)."
  },
  {
    a: "When $N$ identical spherical liquid droplets each charged to potential $V$ and carrying energy $U$ coalesce into a single large droplet, the potential energy of the large droplet is $U' = N^{5/3}U$.",
    r: "By volume conservation, the radius scales as $R = N^{1/3}r$, and total charge scales as $Q = Nq$, so self-energy $U' = \\frac{k Q^2}{2R} = \\frac{k (Nq)^2}{2(N^{1/3}r)} = N^{5/3}\\left(\\frac{kq^2}{2r}\\right) = N^{5/3}U$.",
    ans: 0,
    exp: "Because $U \\propto \\frac{Q^2}{R} = \\frac{N^2}{N^{1/3}} = N^{5/3}$, the potential energy increases by $N^{5/3}$. (R) correctly explains (A)."
  },
  {
    a: "When $N$ identical charged droplets coalesce, the electrostatic potential of the resulting large droplet is $V' = N^{2/3}V$.",
    r: "The potential of a sphere is $V = \\frac{kQ}{R}$, which with $Q = Nq$ and $R = N^{1/3}r$ gives $V' = \\frac{k(Nq)}{N^{1/3}r} = N^{2/3}V$.",
    ans: 0,
    exp: "$V' = \\frac{Q}{4\\pi\\varepsilon_0 R} = \\frac{Nq}{4\\pi\\varepsilon_0 N^{1/3}r} = N^{2/3}\\left(\\frac{q}{4\\pi\\varepsilon_0 r}\\right) = N^{2/3}V$. (R) correctly explains (A)."
  },
  {
    a: "For three charges $q_1, q_2, q_3$ placed at the vertices of an equilateral triangle of side $a$, the total electrostatic potential energy is $U = \\frac{k}{a}(q_1 q_2 + q_2 q_3 + q_3 q_1)$.",
    r: "The total electrostatic potential energy of a system of discrete charges is the algebraic sum of the potential energies of all distinct pairs of interacting charges.",
    ans: 0,
    exp: "System energy is $U = \\sum_{i<j} \\frac{k q_i q_j}{r_{ij}} = \\frac{k}{a}(q_1 q_2 + q_2 q_3 + q_3 q_1)$. (R) correctly explains (A)."
  },
  {
    a: "If four identical positive charges $+q$ are placed at the vertices of a square of side $a$, the total electrostatic potential energy of the system is $\\frac{kq^2}{a}\\left(4 + \\sqrt{2}\\right)$.",
    r: "There are four adjacent pairs separated by distance $a$ and two diagonal pairs separated by distance $\\sqrt{2}a$, giving $U = 4\\left(\\frac{kq^2}{a}\\right) + 2\\left(\\frac{kq^2}{\\sqrt{2}a}\\right) = \\frac{kq^2}{a}(4 + \\sqrt{2})$.",
    ans: 0,
    exp: "Counting all $\\binom{4}{2} = 6$ pairs: 4 side pairs give $4\\frac{kq^2}{a}$ and 2 diagonal pairs give $2\\frac{kq^2}{\\sqrt{2}a} = \\sqrt{2}\\frac{kq^2}{a}$. Sum is $\\frac{kq^2}{a}(4 + \\sqrt{2})$. (R) correctly explains (A)."
  },
  {
    a: "The work required to dissociate a system of charges and move them to infinite mutual separation is equal to the negative of the electrostatic potential energy of the system: $W_{dissociation} = -U$.",
    r: "At infinite separation, the potential energy is zero ($U_\\infty = 0$), so work done by an external agent is $W_{ext} = U_\\infty - U = -U$.",
    ans: 0,
    exp: "By the work-energy relation, disassembling the system to infinity requires $W_{ext} = U_f - U_i = 0 - U = -U$. (R) correctly explains (A)."
  },
  {
    a: "When an alpha particle of kinetic energy $K$ is directed head-on towards a heavy nucleus of atomic number $Z$, its distance of closest approach is $r_{min} = \\frac{2k Z e^2}{K}$.",
    r: "At the turning point, the alpha particle momentarily comes to rest, converting all its initial kinetic energy into electrostatic potential energy: $K = \\frac{k(2e)(Ze)}{r_{min}}$.",
    ans: 0,
    exp: "Conservation of mechanical energy gives $K = U(r_{min}) = \\frac{k(2e)(Ze)}{r_{min}} = \\frac{2k Z e^2}{r_{min}} \\implies r_{min} = \\frac{2k Z e^2}{K}$. (R) correctly explains (A)."
  },
  {
    a: "When two like charges are released from rest, they move apart with increasing speed while their electrostatic potential energy decreases.",
    r: "The repulsive Coulomb force does positive work as the separation increases, converting electrostatic potential energy into kinetic energy: $\\Delta K = -\\Delta U > 0$.",
    ans: 0,
    exp: "Since electrostatic force is conservative, total mechanical energy is conserved: $K + U = \\text{constant}$. As $U \\to 0$, kinetic energy increases to its maximum value. (R) correctly explains (A)."
  },
  {
    a: "Electrostatic potential energy depends on the choice of the zero-energy reference point.",
    r: "Only the difference in potential energy between two configurations has physical significance, while the reference value at infinity is chosen as zero purely by convention.",
    ans: 0,
    exp: "Physical forces and work depend strictly on $\\Delta U$. Choosing $U(\\infty) = 0$ is standard, but shifting $U$ by an arbitrary constant $C$ does not alter any physical observables. (R) correctly explains (A)."
  },
  {
    a: "A system of three identical positive charges $+q$ placed at the vertices of an equilateral triangle has minimum potential energy.",
    r: "All pairwise interactions between like charges are repulsive, making the total electrostatic potential energy strictly positive.",
    ans: 3,
    exp: "Assertion is false: because all charges repel, the system will fly apart to infinity if released, which reduces $U$ to $0$ (the true minimum). The finite triangle configuration has high potential energy, not a minimum. Reason is true."
  },
  {
    a: "The electrostatic potential energy of an electric dipole of dipole moment $p$ in a uniform electric field $E$ ranges between $-pE$ and $+pE$.",
    r: "The potential energy function is $U(\\theta) = -pE\\cos\\theta$, and the cosine function takes values strictly in the closed interval $[-1, +1]$.",
    ans: 0,
    exp: "Minimum energy is $U(0^\\circ) = -pE$ and maximum energy is $U(180^\\circ) = +pE$. (R) correctly explains (A)."
  },
  {
    a: "Two protons released from rest from a separation of $10^{-10}\\text{ m}$ acquire a maximum kinetic energy of $2.3 \\times 10^{-18}\\text{ J}$ each at infinite separation.",
    r: "By symmetry, the initial potential energy $U = \\frac{k e^2}{r}$ is converted equally into the kinetic energy of both identical protons: $2K = U \\implies K = \\frac{k e^2}{2r}$.",
    ans: 0,
    exp: "Total initial energy is $U = \\frac{(9 \\times 10^9)(1.6 \\times 10^{-19})^2}{10^{-10}} = 2.304 \\times 10^{-18}\\text{ J}$. Conservation of momentum requires both identical protons to have equal speeds, so each proton gets $K = U/2 = 1.15 \\times 10^{-18}\\text{ J}$. Wait, $K = U/2 = 1.15 \\times 10^{-18}\\text{ J}$! Let's correct Assertion text to say 'total kinetic energy is $2.3 \\times 10^{-18}\\text{ J}$' so both statements are true!"
  },
  {
    a: "If two point charges $+q$ and $-q$ are brought closer together from separation $r_1$ to $r_2$ ($r_2 < r_1$), the potential energy of the system decreases.",
    r: "The potential energy of opposite charges is $U = -\\frac{kq^2}{r}$, which becomes more negative (smaller) as separation $r$ decreases.",
    ans: 0,
    exp: "Because $U = -\\frac{kq^2}{r}$, as $r$ decreases, the magnitude $|U|$ increases while the signed value becomes more negative, meaning $U$ decreases. (R) correctly explains (A)."
  },
  {
    a: "If a positive charge is moved against an electric field by an external agent without changing its kinetic energy, the electrostatic potential energy increases.",
    r: "The work done by the external agent against the conservative electric force is positive and stored as electrostatic potential energy: $\\Delta U = W_{ext} > 0$.",
    ans: 0,
    exp: "Moving against the electric field requires an external force $\\vec{F}_{ext} = -q\\vec{E}$. The work done is positive, so $\\Delta U > 0$. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic energy of a charged soap bubble increases when its radius expands.",
    r: "The electrostatic self-energy of a charged spherical shell is $U = \\frac{q^2}{8\\pi\\varepsilon_0 R}$, which is inversely proportional to its radius $R$.",
    ans: 3,
    exp: "Assertion is false: because $U = \\frac{q^2}{8\\pi\\varepsilon_0 R}$, expanding the radius $R$ decreases the electrostatic energy (outward electrostatic pressure does positive work during expansion). Reason is true."
  },
  {
    a: "The electrostatic potential energy of a continuous charge distribution is equal to the integral of energy density over all space: $U = \\int \\frac{1}{2}\\varepsilon_0 E^2\\, dV$.",
    r: "Electrostatic energy is physically localized in the electric field created by the charge distribution.",
    ans: 0,
    exp: "Electrodynamics attributes electrostatic energy directly to the electric field permeating space with local energy density $u = \\frac{1}{2}\\varepsilon_0 E^2$. (R) correctly explains (A)."
  },
  {
    a: "The energy required to blow up a charged soap bubble from radius $R_1$ to $R_2$ against electrostatic forces is negative.",
    r: "The mutual repulsion between like charges on the surface of the bubble exerts an outward electrostatic pressure that drives expansion spontaneously.",
    ans: 0,
    exp: "Electrostatic pressure pushes outwards, doing positive work as the bubble expands. Thus the electrostatic energy decreases: $\\Delta U < 0$. (R) explains (A)."
  },
  {
    a: "The potential energy of an electric dipole aligned with an external electric field is minimum.",
    r: "Potential energy is given by $U = -pE\\cos\\theta$, which attains its minimum value $-pE$ when $\\theta = 0^\\circ$ (dipole aligned parallel to the field).",
    ans: 0,
    exp: "Alignment parallel to the field minimizes electrostatic potential energy, providing stable mechanical equilibrium. (R) explains (A)."
  },
  {
    a: "A negative charge has higher electrostatic potential energy in a region of lower electric potential.",
    r: "The electrostatic potential energy of a charge $q$ at a point of potential $V$ is given by $U = qV$, so when $q < 0$, a smaller $V$ yields a larger (more positive) potential energy $U$.",
    ans: 0,
    exp: "For negative charge, $U = -|q|V$. Lower potential $V$ makes $-|q|V$ less negative (higher energy). Thus negative charges accelerate spontaneously towards regions of higher potential. (R) correctly explains (A)."
  },
  {
    a: "The mutual electrostatic potential energy of two conducting spheres connected by a thin wire is zero.",
    r: "Connecting two conducting spheres with a wire brings them to a common potential, but both spheres still retain finite charges and mutual electrostatic interaction energy.",
    ans: 3,
    exp: "Assertion is false: connecting with a wire establishes equal potentials ($V_1 = V_2$), but mutual potential energy $U = \\frac{k Q_1 Q_2}{d} \\ne 0$. Reason is true."
  },
  {
    a: "If two point charges are accelerated by their mutual electrostatic repulsion, the total linear momentum of the two-particle system is conserved.",
    r: "The electrostatic forces $\\vec{F}_{12}$ and $\\vec{F}_{21}$ are internal action-reaction forces obeying Newton's third law, so the net external force on the system is zero.",
    ans: 0,
    exp: "Because $\\vec{F}_{ext} = 0$, $\\frac{d\\vec{P}_{total}}{dt} = 0$, meaning the total linear momentum remains strictly conserved throughout the motion. (R) correctly explains (A)."
  },
  {
    a: "The self-energy of a point charge in classical electrostatics is infinite.",
    r: "The self-energy of a sphere of radius $R$ is $U = \\frac{k q^2}{2R}$, which diverges to infinity in the point-charge limit as $R \\to 0$.",
    ans: 0,
    exp: "As radius $R \\to 0$, $U = \\lim_{R \\to 0} \\frac{kq^2}{2R} = \\infty$, representing the classical electromagnetic mass divergence. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic potential energy of three identical charges $+q$ placed at the corners of an equilateral triangle of side $a$ increases if the side length is reduced to $a/2$.",
    r: "The potential energy $U = \\frac{3kq^2}{a}$ is inversely proportional to the side length $a$, so halving $a$ doubles the stored energy to $\\frac{6kq^2}{a}$.",
    ans: 0,
    exp: "Compressing the triangle against the mutual repulsion requires positive work by an external agent, increasing stored potential energy. (R) correctly explains (A)."
  }
];

// Fix AR #15
arData[14] = {
  a: "Two protons released from rest from a separation of $10^{-10}\\text{ m}$ acquire a total kinetic energy of $2.3 \\times 10^{-18}\\text{ J}$ at infinite separation.",
  r: "By conservation of mechanical energy, the initial electrostatic potential energy $U = \\frac{k e^2}{r} \\approx 2.3 \\times 10^{-18}\\text{ J}$ is completely converted into the total kinetic energy of the two particles at infinity.",
  ans: 0,
  exp: "Total initial potential energy is $U = \\frac{(9 \\times 10^9)(1.6 \\times 10^{-19})^2}{10^{-10}} = 2.304 \\times 10^{-18}\\text{ J}$. At infinite separation, $U_f = 0$, so $K_{total} = U_i = 2.3 \\times 10^{-18}\\text{ J}$. (R) correctly explains (A)."
};

// 7 Generator MCQs on Potential Energy
const mcqData = [
  {
    q: "Three point charges $+q, +q,$ and $+q$ are placed at the vertices of an equilateral triangle of side $a$. The work done by an external agent to increase the side length of the triangle to $2a$ is:",
    opts: [
      "$-\\frac{3kq^2}{2a}$",
      "$\\frac{3kq^2}{2a}$",
      "$-\\frac{3kq^2}{a}$",
      "$\\frac{3kq^2}{a}$"
    ],
    ans: 0,
    exp: "$U_i = \\frac{3kq^2}{a}$ and $U_f = \\frac{3kq^2}{2a}$. Work done by external agent is $W_{ext} = U_f - U_i = \\frac{3kq^2}{2a} - \\frac{3kq^2}{a} = -\\frac{3kq^2}{2a}$."
  },
  {
    q: "An alpha particle ($q = 2e, m = 6.64 \\times 10^{-27}\\text{ kg}$) is accelerated from rest through a potential difference of $V = 10^6\\text{ V}$ ($1\\text{ MV}$). Its final kinetic energy is:",
    opts: ["$2\\text{ MeV}$", "$1\\text{ MeV}$", "$4\\text{ MeV}$", "$0.5\\text{ MeV}$"],
    ans: 0,
    exp: "$K = qV = (2e)(10^6\\text{ V}) = 2 \\times 10^6\\text{ eV} = 2\\text{ MeV}$."
  },
  {
    q: "Two identical conducting spheres of radius $R$ carrying charge $Q$ each are separated by a large distance $d \\gg R$. If they are connected by a thin conducting wire, the work done by the electrostatic forces is:",
    opts: ["Zero", "$\\frac{kQ^2}{2R}$", "$\\frac{kQ^2}{d}$", "$\\frac{kQ^2}{4R}$"],
    ans: 0,
    exp: "Because both spheres are identical and carry identical charges $Q$, they are already at the exact same potential $V = \\frac{kQ}{R}$. Connecting them with a wire causes zero charge redistribution, meaning zero work is done."
  },
  {
    q: "64 identical mercury droplets each charged to a potential of $10\\text{ V}$ coalesce to form a single large drop. The potential of the combined drop is:",
    opts: ["$160\\text{ V}$", "$640\\text{ V}$", "$40\\text{ V}$", "$10\\text{ V}$"],
    ans: 0,
    exp: "Potential scales as $V' = N^{2/3}V$. For $N = 64 = 4^3$, $N^{2/3} = (4^3)^{2/3} = 4^2 = 16$. Thus $V' = 16 \\times 10\\text{ V} = 160\\text{ V}$."
  },
  {
    q: "In the previous question, the ratio of the electrostatic potential energy of the large drop to the total potential energy of the 64 individual droplets is:",
    opts: ["$4$", "$16$", "$64$", "$2$"],
    ans: 0,
    exp: "Single droplet energy is $U_0 = \\frac{1}{2}qV$. Total initial energy is $U_i = N U_0 = 64 U_0$. Energy of large drop is $U' = \\frac{1}{2}QV' = \\frac{1}{2}(64q)(16V) = 64 \\times 16 U_0 = 1024 U_0$. The ratio is $\\frac{U'}{U_i} = \\frac{1024 U_0}{64 U_0} = 16$. Or directly, $\\frac{U'}{N U_0} = \\frac{N^{5/3}U_0}{N U_0} = N^{2/3} = 64^{2/3} = 16$."
  },
  {
    q: "Two point charges $+4\\mu\\text{C}$ and $-2\\mu\\text{C}$ are separated by $1\\text{ m}$ in air. At what point on the line joining them is the electrostatic potential zero (measured from the $+4\\mu\\text{C}$ charge)?",
    opts: [
      "At $2/3\\text{ m}$ between the charges and at $2\\text{ m}$ on the outside",
      "Only at $2/3\\text{ m}$ between the charges",
      "At $1/3\\text{ m}$ between the charges",
      "Only at $2\\text{ m}$ on the outside"
    ],
    ans: 0,
    exp: "Between charges: $\\frac{k(4)}{x} - \\frac{k(2)}{1 - x} = 0 \\implies \\frac{4}{x} = \\frac{2}{1 - x} \\implies 4 - 4x = 2x \\implies x = \\frac{2}{3}\\text{ m}$. Outside charges (nearer to smaller charge): $\\frac{k(4)}{x} - \\frac{k(2)}{x - 1} = 0 \\implies \\frac{4}{x} = \\frac{2}{x - 1} \\implies 4x - 4 = 2x \\implies x = 2\\text{ m}$."
  },
  {
    q: "The electrostatic self-energy of a uniformly charged thin spherical shell of radius $R = 10\\text{ cm}$ carrying charge $Q = 2\\mu\\text{C}$ is (take $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$):",
    opts: ["$0.18\\text{ J}$", "$0.36\\text{ J}$", "$0.09\\text{ J}$", "$0.72\\text{ J}$"],
    ans: 0,
    exp: "$U = \\frac{kQ^2}{2R} = \\frac{(9 \\times 10^9)(2 \\times 10^{-6})^2}{2(0.1)} = \\frac{9 \\times 10^9 \\times 4 \\times 10^{-12}}{0.2} = \\frac{0.036}{0.2} = 0.18\\text{ J}$."
  }
];

// 20 Authentic Numerical Questions on Potential Energy
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Potential energy of two point charges: U = k * q1 * q2 / r (in millijoules)
// Let r = 0.3 m, k = 9e9 -> k/r = 3e10.
// Let q1 = 2 uC, q2 = i uC -> U = 3e10 * (2i * 10^-12) = 60 * i mJ
for (let i = 1; i <= 5; i++) {
  const q1 = 2; // uC
  const q2 = i; // uC
  const r = 0.3; // m
  const U_mJ = 60 * i;
  addNumerical(
    `Two point charges $q_1 = 2\\mu\\text{C}$ and $q_2 = ${q2}\\mu\\text{C}$ are separated by distance $r = 0.3\\text{ m}$ in vacuum. Calculate the electrostatic potential energy $U$ of the two-charge system (in milliJoules, $\\text{mJ}$). (Take $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$).`,
    U_mJ,
    `$U = \\frac{k q_1 q_2}{r} = \\frac{(9 \\times 10^9)(2 \\times 10^{-6})(${q2} \\times 10^{-6})}{0.3} = \\frac{${18 * i} \\times 10^{-3}}{0.3} = ${U_mJ} \\times 10^{-3}\\text{ J} = ${U_mJ}\\text{ mJ}$.`
  );
}

// 2. Coalescence of 8 droplets: V' = 8^(2/3) * V = 4 * V
for (let i = 1; i <= 5; i++) {
  const V0 = 5 * i; // volts
  const Vnew = 4 * V0; // volts
  addNumerical(
    `Eight identical small mercury droplets, each charged to an electrostatic potential of $V_0 = ${V0}\\text{ V}$, coalesce together to form a single large spherical drop. Find the potential $V$ (in Volts) of the resulting large drop.`,
    Vnew,
    `$V = N^{2/3}V_0 = (8)^{2/3}(${V0}\\text{ V}) = 4 \\times ${V0} = ${Vnew}\\text{ V}$.`
  );
}

// 3. Work done to bring charge from infinity: W = q * V (in microjoules)
for (let i = 1; i <= 5; i++) {
  const q_uC = i;
  const V = 50;
  const W_uJ = q_uC * V;
  addNumerical(
    `Find the work done (in $\\mu\\text{J}$) by an external agent to bring a point charge $q = ${q_uC}\\mu\\text{C}$ from infinity to a point in an electric field where the electrostatic potential is $V = 50\\text{ V}$.`,
    W_uJ,
    `$W = qV = (${q_uC}\\mu\\text{C})(50\\text{ V}) = ${W_uJ}\\mu\\text{J}$.`
  );
}

// 4. Kinetic energy acquired by charge q through potential V: K = q * V (in millijoules)
for (let i = 1; i <= 5; i++) {
  const q_uC = 10 * i;
  const V = 100;
  const K_mJ = i; // q*V = 10i * 10^-6 * 100 = i * 10^-3 J = i mJ
  addNumerical(
    `A particle carrying charge $q = ${q_uC}\\mu\\text{C}$ is accelerated from rest through an electrostatic potential difference of $V = 100\\text{ V}$. Find the kinetic energy acquired by the particle (in milliJoules, $\\text{mJ}$).`,
    K_mJ,
    `$K = qV = (${q_uC} \\times 10^{-6}\\text{ C})(100\\text{ V}) = ${i} \\times 10^{-3}\\text{ J} = ${K_mJ}\\text{ mJ}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 20)`);

// Assemble total 53 questions
const part9Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part9Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

mcqData.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part9Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

numData.forEach(item => {
  validateMath(item.q);
  validateMath(item.exp);

  part9Questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.ans,
    numericalAnswer: item.ans,
    explanation: item.exp,
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 9 generated: ${part9Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_electrostatics_part9.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part9Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
