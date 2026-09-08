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

const subTopic = "Electric dipole and dipole moment";
const chapter = "Electrostatics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Electric Dipole and Dipole Moment
const arData = [
  {
    a: "The net electrostatic force on an electric dipole placed in a uniform electric field is zero.",
    r: "The two equal and opposite charges $+q$ and $-q$ experience forces $\\vec{F}_+ = +q\\vec{E}$ and $\\vec{F}_- = -q\\vec{E}$ that vectorially cancel each other: $\\vec{F}_{net} = q\\vec{E} - q\\vec{E} = 0$.",
    ans: 0,
    exp: "Because the field is uniform, the forces on $+q$ and $-q$ are identical in magnitude and opposite in direction, yielding zero net translational force. (R) correctly explains (A)."
  },
  {
    a: "An electric dipole placed at an angle $\\theta$ in a uniform electric field experiences a torque given by $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$.",
    r: "The forces on $+q$ and $-q$ form a couple with lever arm $2a\\sin\\theta$, producing torque $\\tau = qE(2a\\sin\\theta) = (q\\cdot 2a)E\\sin\\theta = pE\\sin\\theta$.",
    ans: 0,
    exp: "The two collinear forces do not share the same line of action, creating a couple of moment $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic potential energy of an electric dipole of dipole moment $\\vec{p}$ in a uniform electric field $\\vec{E}$ is $U = -\\vec{p} \\cdot \\vec{E}$.",
    r: "The work required to rotate the dipole from reference angle $\\theta_0 = 90^\\circ$ (where $U = 0$) to angle $\\theta$ is $W = \\int_{90^\\circ}^\\theta \\tau_{ext}\\, d\\theta = \\int_{90^\\circ}^\\theta pE\\sin\\theta\\, d\\theta = -pE\\cos\\theta = -\\vec{p}\\cdot\\vec{E}$.",
    ans: 0,
    exp: "Integrating the torque from the conventional zero-energy position ($90^\\circ$) gives $U(\\theta) = -pE\\cos\\theta = -\\vec{p}\\cdot\\vec{E}$. (R) correctly explains (A)."
  },
  {
    a: "An electric dipole is in stable equilibrium when its dipole moment $\\vec{p}$ is parallel to the electric field $\\vec{E}$ ($\\theta = 0^\\circ$).",
    r: "At $\\theta = 0^\\circ$, the torque is zero and the potential energy attains its minimum possible value $U_{min} = -pE$.",
    ans: 0,
    exp: "Equilibrium requires $\\vec{\\tau} = 0$ (satisfied at $\\theta = 0^\\circ$). Stability requires minimum potential energy: $\\frac{d^2 U}{d\\theta^2} = pE > 0$, confirming stable equilibrium. (R) correctly explains (A)."
  },
  {
    a: "An electric dipole is in unstable equilibrium when its dipole moment $\\vec{p}$ is antiparallel to the electric field $\\vec{E}$ ($\\theta = 180^\\circ$).",
    r: "At $\\theta = 180^\\circ$, the torque is zero but the potential energy attains its maximum possible value $U_{max} = +pE$.",
    ans: 0,
    exp: "At $\\theta = 180^\\circ$, $\\tau = 0$ but $U = +pE$. The second derivative $\\frac{d^2 U}{d\\theta^2} = -pE < 0$, which defines an unstable potential maximum. (R) correctly explains (A)."
  },
  {
    a: "For a short electric dipole, the electric field at an axial point is twice the electric field at an equatorial point at the same distance $r$.",
    r: "The axial field is $E_{axial} = \\frac{2kp}{r^3}$ and the equatorial field is $E_{equatorial} = \\frac{kp}{r^3}$, so $\\frac{E_{axial}}{E_{equatorial}} = 2$.",
    ans: 0,
    exp: "Comparing axial $E = \\frac{2kp}{r^3}$ with equatorial $E = \\frac{kp}{r^3}$ yields the exact ratio of $2 : 1$. (R) correctly explains (A)."
  },
  {
    a: "The electric field of a short dipole at any point $(r, \\theta)$ decreases with distance as $\\frac{1}{r^3}$.",
    r: "The net field is the vector sum of fields from $+q$ and $-q$, whose leading-order monopole terms ($1/r^2$) cancel, leaving the dipole term proportional to $\\frac{1}{r^3}$.",
    ans: 0,
    exp: "Because the net charge of the dipole is zero, the dominant far-field term varies as $1/r^3$: $E = \\frac{kp}{r^3}\\sqrt{1 + 3\\cos^2\\theta}$. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic potential at any point on the equatorial plane of an electric dipole is zero.",
    r: "Every point on the equatorial plane is equidistant from the two charges $+q$ and $-q$, so their potentials $V_+ = \\frac{kq}{r}$ and $V_- = -\\frac{kq}{r}$ add up to zero: $V = V_+ + V_- = 0$.",
    ans: 0,
    exp: "Equatorial symmetry implies $r_1 = r_2$, hence $V = \\frac{kq}{r_1} - \\frac{kq}{r_2} = 0$. The equatorial plane is an equipotential surface of $V = 0$. (R) correctly explains (A)."
  },
  {
    a: "The electric field at any point on the equatorial plane of an electric dipole is non-zero, even though the potential is zero.",
    r: "Electric field is the negative spatial gradient of potential: $\\vec{E} = -\\vec{\\nabla}V$, and potential changes along directions perpendicular to the equatorial plane.",
    ans: 0,
    exp: "While $V = 0$ across the equatorial plane, $\\frac{\\partial V}{\\partial z} \\ne 0$ along the dipole axis, producing an equatorial field $\\vec{E} = -\\frac{k\\vec{p}}{r^3} \\ne 0$. (R) correctly explains (A)."
  },
  {
    a: "The work done in rotating an electric dipole from $\\theta = 0^\\circ$ to $\\theta = 180^\\circ$ in a uniform electric field is $W = 2pE$.",
    r: "Work done by an external agent is $W = U(180^\\circ) - U(0^\\circ) = (+pE) - (-pE) = 2pE$.",
    ans: 0,
    exp: "$W = \\Delta U = pE(\\cos 0^\\circ - \\cos 180^\\circ) = pE(1 - (-1)) = 2pE$. (R) correctly explains (A)."
  },
  {
    a: "When displaced slightly from its stable equilibrium position $\\theta = 0^\\circ$ in a uniform electric field, a dipole of moment of inertia $I$ executes simple harmonic angular oscillations.",
    r: "For small angular displacement $\\theta$, the restoring torque is $\\tau = -pE\\sin\\theta \\approx -pE\\theta$, which satisfies the equation of angular SHM: $I\\frac{d^2\\theta}{dt^2} + pE\\theta = 0$.",
    ans: 0,
    exp: "The equation $I\\ddot{\\theta} + pE\\theta = 0$ yields angular SHM with frequency $\\omega = \\sqrt{\\frac{pE}{I}}$ and period $T = 2\\pi\\sqrt{\\frac{I}{pE}}$. (R) correctly explains (A)."
  },
  {
    a: "In a non-uniform electric field, an electric dipole experiences both a net force and a net torque.",
    r: "Because the electric field varies spatially, the forces on $+q$ and $-q$ have different magnitudes ($\\vec{F}_+ \\ne -\\vec{F}_-$), resulting in a non-zero net translational force $\\vec{F} = (\\vec{p}\\cdot\\vec{\\nabla})\\vec{E}$.",
    ans: 0,
    exp: "The gradient of field gives a translational force $\\vec{F} = p\\frac{dE}{dx}\\hat{i}$ in addition to torque $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$. (R) correctly explains (A)."
  },
  {
    a: "The direction of the electric dipole moment vector $\\vec{p}$ is conventionally taken from the negative charge to the positive charge.",
    r: "By international convention in physics, the displacement vector $2\\vec{a}$ points from $-q$ to $+q$, defining $\\vec{p} = q(2\\vec{a})$.",
    ans: 0,
    exp: "In physics, dipole moment points from $-q$ to $+q$ (contrary to the convention in chemistry). (R) correctly explains (A)."
  },
  {
    a: "The electrostatic potential of a short dipole at distance $r$ along an axis inclined at angle $\\theta$ to the dipole moment is $V = \\frac{kp\\cos\\theta}{r^2}$.",
    r: "Using the far-field dipole expansion, the path difference between the charges is $\\Delta r \\approx 2a\\cos\\theta$, giving $V \\approx \\frac{kq(2a\\cos\\theta)}{r^2} = \\frac{kp\\cos\\theta}{r^2}$.",
    ans: 0,
    exp: "$V(r, \\theta) = \\frac{1}{4\\pi\\varepsilon_0}\\frac{\\vec{p}\\cdot\\hat{r}}{r^2} = \\frac{kp\\cos\\theta}{r^2}$. (R) correctly explains (A)."
  },
  {
    a: "The mutual electrostatic force of interaction between two collinear short electric dipoles separated by distance $r$ varies inversely as the fourth power of distance ($F \\propto \\frac{1}{r^4}$).",
    r: "The electric field of a dipole falls off as $1/r^3$, and the force on a second dipole in this field gradient is $F = p_2 \\frac{dE_1}{dr} \\propto p_2 \\frac{d}{dr}\\left(\\frac{1}{r^3}\\right) \\propto \\frac{1}{r^4}$.",
    ans: 0,
    exp: "Differentiating $E \\propto r^{-3}$ gives $\\frac{dE}{dr} \\propto r^{-4}$, resulting in $F \\propto r^{-4}$. (R) correctly explains (A)."
  },
  {
    a: "The electric field at an equatorial point of an electric dipole is directed antiparallel to the dipole moment vector $\\vec{p}$.",
    r: "At equatorial points, the radial components of fields from $+q$ and $-q$ cancel, while their tangential components add constructively in the direction opposite to $\\vec{p}$: $\\vec{E} = -\\frac{k\\vec{p}}{r^3}$.",
    ans: 0,
    exp: "The vector formula $\\vec{E}_{equatorial} = -\\frac{k\\vec{p}}{r^3}$ has a negative sign, confirming it points strictly opposite to $\\vec{p}$. (R) correctly explains (A)."
  },
  {
    a: "The work done in rotating a dipole by $90^\\circ$ from its stable equilibrium position is $pE$.",
    r: "Work done is $W = U(90^\\circ) - U(0^\\circ) = 0 - (-pE) = pE$.",
    ans: 0,
    exp: "$W = -pE\\cos 90^\\circ - (-pE\\cos 0^\\circ) = 0 + pE = pE$. (R) correctly explains (A)."
  },
  {
    a: "An ideal electric point dipole has zero physical separation ($2a \\to 0$) and infinitely large charge ($q \\to \\infty$) such that the product $p = 2qa$ remains finite.",
    r: "A point dipole represents the mathematical limit of an electric dipole where dimensions are infinitesimal compared to any observation distance.",
    ans: 0,
    exp: "In the limit $a \\to 0, q \\to \\infty$ with $p = 2qa = \\text{constant}$, higher-order multipole moments vanish identically, leaving pure dipole fields. (R) correctly explains (A)."
  },
  {
    a: "The electric flux through a Gaussian surface enclosing an electric dipole is zero.",
    r: "By Gauss's law, total electric flux is $\\Phi_E = \\frac{Q_{enclosed}}{\\varepsilon_0}$, and for an electric dipole, $Q_{enclosed} = (+q) + (-q) = 0$.",
    ans: 0,
    exp: "Because the net enclosed charge is zero, Gauss's law guarantees zero net electric flux through any surface completely enclosing the dipole. (R) correctly explains (A)."
  },
  {
    a: "The angle $\\alpha$ made by the total electric field vector with the position vector $\\vec{r}$ of a short dipole satisfies $\\tan\\alpha = \\frac{1}{2}\\tan\\theta$.",
    r: "Resolving the dipole moment into components along $\\vec{r}$ ($p\\cos\\theta$) and perpendicular to $\\vec{r}$ ($p\\sin\\theta$) gives radial field $E_r = \\frac{2kp\\cos\\theta}{r^3}$ and transverse field $E_\\theta = \\frac{kp\\sin\\theta}{r^3}$, so $\\tan\\alpha = \\frac{E_\\theta}{E_r} = \\frac{1}{2}\\tan\\theta$.",
    ans: 0,
    exp: "Dividing transverse field by radial field yields $\\tan\\alpha = \\frac{kp\\sin\\theta / r^3}{2kp\\cos\\theta / r^3} = \\frac{1}{2}\\tan\\theta$. (R) correctly explains (A)."
  },
  {
    a: "An electric dipole placed in a uniform electric field experiences a net translational force.",
    r: "The force on $+q$ and the force on $-q$ in a uniform electric field are equal in magnitude and opposite in direction.",
    ans: 3,
    exp: "Assertion is false: net force in a uniform field is zero ($+qE - qE = 0$). Reason is true."
  },
  {
    a: "The torque acting on an electric dipole is maximum when the dipole moment is perpendicular to the electric field.",
    r: "Torque magnitude is $\\tau = pE\\sin\\theta$, which attains its maximum value $\\tau_{max} = pE$ at $\\theta = 90^\\circ$.",
    ans: 0,
    exp: "Because $\\sin\\theta \\le 1$ with maximum at $\\theta = 90^\\circ$, torque is maximized when $\\vec{p} \\perp \\vec{E}$. (R) correctly explains (A)."
  },
  {
    a: "The SI unit of electric dipole moment is Coulomb-meter ($\\text{C}\\cdot\\text{m}$).",
    r: "Dipole moment is defined as the product of electric charge and separation vector: $\\vec{p} = q(2\\vec{a})$, having dimension $[\\text{Charge}] \\times [\\text{Length}]$.",
    ans: 0,
    exp: "Dimensionally $[p] = [q][L] = \\text{C}\\cdot\\text{m}$. (R) correctly explains (A)."
  },
  {
    a: "If the electric field is zero at a point, the electrostatic potential must also be zero at that point.",
    r: "Electric field and potential are related by $\\vec{E} = -\\vec{\\nabla}V$.",
    ans: 3,
    exp: "Assertion is false: inside a charged hollow conductor, $\\vec{E} = 0$ everywhere while potential $V = \\text{constant} \\ne 0$. Reason is true: $\\vec{E} = -\\vec{\\nabla}V$, so $V$ being constant yields $\\vec{E} = 0$."
  },
  {
    a: "Two charges $+q$ and $-q$ separated by $2a$ form an electric dipole. The total field at the midpoint between the charges is $\\frac{2kq}{a^2}$ directed towards $-q$.",
    r: "At the midpoint, both charges create electric fields pointing in the same direction towards the negative charge: $E_{mid} = \\frac{kq}{a^2} + \\frac{kq}{a^2} = \\frac{2kq}{a^2}$.",
    ans: 0,
    exp: "The field from $+q$ pushes towards $-q$ and the field from $-q$ pulls towards $-q$. Their magnitudes add: $E_{net} = \\frac{2kq}{a^2}$. (R) correctly explains (A)."
  },
  {
    a: "The electric field of an electric dipole is spherically symmetric.",
    r: "The electric field of an electric dipole depends on the angle $\\theta$ made with the dipole axis: $E(r, \\theta) = \\frac{kp}{r^3}\\sqrt{1 + 3\\cos^2\\theta}$.",
    ans: 3,
    exp: "Assertion is false: dipole field has axial (cylindrical) symmetry about $\\vec{p}$, not spherical symmetry, because it varies with $\\theta$. Reason is true."
  }
];

// 7 Generator MCQs on Electric Dipole
const mcqData = [
  {
    q: "An electric dipole consists of two charges $+2\\mu\\text{C}$ and $-2\\mu\\text{C}$ separated by a distance of $4\\text{ cm}$. The dipole is placed in a uniform electric field of $E = 10^5\\text{ N/C}$ at an angle of $30^\\circ$ to the field. The torque acting on the dipole is:",
    opts: [
      "$4 \\times 10^{-3}\\text{ N}\\cdot\\text{m}$",
      "$8 \\times 10^{-3}\\text{ N}\\cdot\\text{m}$",
      "$2 \\times 10^{-3}\\text{ N}\\cdot\\text{m}$",
      "$4\\sqrt{3} \\times 10^{-3}\\text{ N}\\cdot\\text{m}$"
    ],
    ans: 0,
    exp: "Dipole moment is $p = q(2a) = (2 \\times 10^{-6}\\text{ C})(0.04\\text{ m}) = 8 \\times 10^{-8}\\text{ C}\\cdot\\text{m}$. Torque is $\\tau = pE\\sin 30^\\circ = (8 \\times 10^{-8})(10^5)(0.5) = 4 \\times 10^{-3}\\text{ N}\\cdot\\text{m}$."
  },
  {
    q: "The work done in rotating an electric dipole of dipole moment $p$ in a uniform electric field $E$ from an angle of $0^\\circ$ (parallel to field) to $60^\\circ$ is:",
    opts: ["$\\frac{1}{2}pE$", "$pE$", "$\\frac{\\sqrt{3}}{2}pE$", "$2pE$"],
    ans: 0,
    exp: "$W = pE(\\cos 0^\\circ - \\cos 60^\\circ) = pE(1 - 0.5) = \\frac{1}{2}pE$."
  },
  {
    q: "At what angle $\\theta$ with the dipole axis is the electrostatic potential of a short dipole equal to zero?",
    opts: ["$90^\\circ$", "$0^\\circ$", "$180^\\circ$", "$45^\\circ$"],
    ans: 0,
    exp: "Potential is $V = \\frac{kp\\cos\\theta}{r^2}$. For $V = 0$, $\\cos\\theta = 0 \\implies \\theta = 90^\\circ$ (the equatorial plane)."
  },
  {
    q: "The electric field of a short dipole at a distance $r$ on its axial line is $E_1$, and at a distance $2r$ on its equatorial line is $E_2$. The ratio $\\frac{E_1}{E_2}$ is:",
    opts: ["$16$", "$8$", "$4$", "$2$"],
    ans: 0,
    exp: "$E_1 = \\frac{2kp}{r^3}$. $E_2 = \\frac{kp}{(2r)^3} = \\frac{kp}{8r^3}$. The ratio is $\\frac{E_1}{E_2} = \\frac{2kp/r^3}{kp/(8r^3)} = 2 \\times 8 = 16$."
  },
  {
    q: "An electric dipole of moment $p$ is placed in a uniform electric field $E$. If it is rotated from stable equilibrium ($\\theta = 0^\\circ$) to unstable equilibrium ($\\theta = 180^\\circ$), the change in its potential energy is:",
    opts: ["$2pE$", "$pE$", "$-2pE$", "$0$"],
    ans: 0,
    exp: "$\\Delta U = U(180^\\circ) - U(0^\\circ) = (+pE) - (-pE) = 2pE$."
  },
  {
    q: "A short electric dipole has a dipole moment of $16 \\times 10^{-9}\\text{ C}\\cdot\\text{m}$. The electric potential at a point situated at a distance of $0.6\\text{ m}$ from the center of the dipole along a line making an angle of $60^\\circ$ with the dipole axis is (take $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$):",
    opts: ["$200\\text{ V}$", "$400\\text{ V}$", "$100\\text{ V}$", "$50\\text{ V}$"],
    ans: 0,
    exp: "$V = \\frac{kp\\cos 60^\\circ}{r^2} = \\frac{(9 \\times 10^9)(16 \\times 10^{-9})(0.5)}{(0.6)^2} = \\frac{72}{0.36} = 200\\text{ V}$."
  },
  {
    q: "An electric dipole of moment $\\vec{p}$ is placed along the $x$-axis in a non-uniform electric field $\\vec{E} = (\\alpha x)\\hat{i}$. The force acting on the dipole is:",
    opts: ["$p\\alpha\\hat{i}$", "$-p\\alpha\\hat{i}$", "$2p\\alpha\\hat{i}$", "$0$"],
    ans: 0,
    exp: "$\\vec{F} = (\\vec{p}\\cdot\\vec{\\nabla})\\vec{E} = \\left(p\\frac{\\partial}{\\partial x}\\right)(\\alpha x\\hat{i}) = p\\alpha\\hat{i}$."
  }
];

// 20 Authentic Numerical Questions on Electric Dipole
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Maximum torque tau_max = p * E
for (let i = 1; i <= 5; i++) {
  const p_nCm = 10 * i; // nC*m
  const E_kVm = 20; // kV/m
  const tau_uNm = p_nCm * E_kVm; // (10^-9 * 10^3 = 10^-6 N*m = 1 uN*m)
  addNumerical(
    `An electric dipole with dipole moment $p = ${p_nCm}\\text{ nC}\\cdot\\text{m}$ is placed in a uniform electric field of $E = ${E_kVm}\\text{ kV/m}$. Find the maximum torque $\\tau_{max}$ (in $\\mu\\text{N}\\cdot\\text{m}$) that the field can exert on the dipole.`,
    tau_uNm,
    `$\\tau_{max} = pE = (${p_nCm} \\times 10^{-9}\\text{ C}\\cdot\\text{m})(${E_kVm} \\times 10^3\\text{ V/m}) = ${tau_uNm} \\times 10^{-6}\\text{ N}\\cdot\\text{m} = ${tau_uNm}\\mu\\text{N}\\cdot\\text{m}$.`
  );
}

// 2. Work to rotate dipole from 0 to 90 deg: W = p * E
for (let i = 1; i <= 5; i++) {
  const p_nCm = 5 * i;
  const E_kVm = 10;
  const W_uJ = p_nCm * E_kVm;
  addNumerical(
    `Find the work done (in $\\mu\\text{J}$) by an external agent to rotate an electric dipole of dipole moment $p = ${p_nCm}\\text{ nC}\\cdot\\text{m}$ from $\\theta = 0^\\circ$ to $\\theta = 90^\\circ$ in a uniform electric field of $E = ${E_kVm}\\text{ kV/m}$.`,
    W_uJ,
    `$W = pE(\\cos 0^\\circ - \\cos 90^\\circ) = pE(1 - 0) = pE = (${p_nCm} \\times 10^{-9})(${E_kVm} \\times 10^3) = ${W_uJ}\\mu\\text{J}$.`
  );
}

// 3. Work to rotate dipole from 0 to 180 deg: W = 2 * p * E
for (let i = 1; i <= 5; i++) {
  const p_nCm = 4 * i;
  const E_kVm = 10;
  const W_uJ = 2 * p_nCm * E_kVm;
  addNumerical(
    `Calculate the work done (in $\\mu\\text{J}$) required to turn an electric dipole of moment $p = ${p_nCm}\\text{ nC}\\cdot\\text{m}$ end-for-end (from $\\theta = 0^\\circ$ to $\\theta = 180^\\circ$) in a uniform electric field of $E = ${E_kVm}\\text{ kV/m}$.`,
    W_uJ,
    `$W = 2pE = 2(${p_nCm} \\times 10^{-9}\\text{ C}\\cdot\\text{m})(${E_kVm} \\times 10^3\\text{ V/m}) = ${W_uJ}\\mu\\text{J}$.`
  );
}

// 4. Potential on axial line: V = k * p / r^2 (k = 9e9)
// Let r = 0.3 m -> r^2 = 0.09. Let p = i nC*m -> V = 9e9 * i*1e-9 / 0.09 = 9i / 0.09 = 100 * i V
for (let i = 1; i <= 5; i++) {
  const p_nCm = i;
  const r = 0.3;
  const V = 100 * i;
  addNumerical(
    `A short electric dipole has a dipole moment of $p = ${p_nCm}\\text{ nC}\\cdot\\text{m}$. Find the electrostatic potential $V$ (in Volts) at an axial point at a distance of $r = 0.3\\text{ m}$ from the dipole center. (Take $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$).`,
    V,
    `$V = \\frac{kp}{r^2} = \\frac{(9 \\times 10^9)(${p_nCm} \\times 10^{-9})}{(0.3)^2} = \\frac{${9 * i}}{0.09} = ${V}\\text{ V}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 20)`);

// Assemble total 53 questions
const part5Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part5Questions.push({
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

  part5Questions.push({
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

  part5Questions.push({
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

console.log(`Part 5 generated: ${part5Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_electrostatics_part5.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part5Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
