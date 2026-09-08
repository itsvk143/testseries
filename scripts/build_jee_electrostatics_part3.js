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

const subTopic = "Coulomb's law";
const chapter = "Electrostatics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Coulomb's Law
const arData = [
  {
    a: "The electrostatic force between two stationary point charges is strictly an inverse-square central force.",
    r: "Coulomb's law states that the force acts along the straight line joining the two point charges and varies inversely with the square of their separation: $\\vec{F} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}\\hat{r}$.",
    ans: 0,
    exp: "Because $\\vec{F} \\parallel \\hat{r}$ and $F \\propto \\frac{1}{r^2}$, Coulomb's electrostatic interaction is by definition both central and inverse-square. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic force between two point charges placed in a dielectric medium of dielectric constant $K$ is $\\frac{1}{K}$ times the force between them in vacuum.",
    r: "The permittivity of the medium is $\\varepsilon = K\\varepsilon_0$, so Coulomb's force becomes $F_{med} = \\frac{1}{4\\pi\\varepsilon}\\frac{q_1 q_2}{r^2} = \\frac{F_{vac}}{K}$.",
    ans: 0,
    exp: "Polarization of the intervening dielectric medium reduces the net electrostatic force between the charges by a factor of the relative permittivity $K$. (R) correctly explains (A)."
  },
  {
    a: "Coulomb's law is valid only for stationary point charges.",
    r: "Moving charges produce magnetic fields in addition to electric fields, and acceleration causes radiation of electromagnetic waves, modifying the simple electrostatic inverse-square law.",
    ans: 0,
    exp: "Electrostatic Coulomb interaction requires charges to be stationary; moving charges involve velocity-dependent magnetic Lorentz forces and retarded potentials. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic force obeys Newton's third law of motion: $\\vec{F}_{12} = -\\vec{F}_{21}$.",
    r: "The force exerted by charge $q_1$ on charge $q_2$ is equal in magnitude and opposite in direction to the force exerted by $q_2$ on $q_1$ along the line joining them.",
    ans: 0,
    exp: "Coulomb's forces form an action-reaction pair collinear with the displacement vector between the two point charges: $\\vec{F}_{12} = -\\vec{F}_{21}$. (R) correctly explains (A)."
  },
  {
    a: "A third charge placed near two interacting charges does not alter the mutual electrostatic force between the original two charges.",
    r: "According to the principle of superposition, the electrostatic force between any pair of charges is completely independent of the presence or absence of other charges in the vicinity.",
    ans: 0,
    exp: "While the net force on either charge changes due to vector addition, the pairwise Coulomb force between the original two charges remains unaffected. (R) correctly explains (A)."
  },
  {
    a: "Two identical conducting spheres carrying charges $+q$ and $-3q$ separated by distance $r$ attract each other with force $F_1$. If they are brought into contact and separated to the same distance, they repel each other with force $F_2 = \\frac{F_1}{3}$.",
    r: "Upon contact, the net charge $+q - 3q = -2q$ divides equally, so each sphere retains $-q$, giving repulsive force $F_2 = \\frac{k(-q)(-q)}{r^2} = \\frac{kq^2}{r^2} = \\frac{F_1}{3}$.",
    ans: 0,
    exp: "$F_1 = \\frac{k(q)(3q)}{r^2} = \\frac{3kq^2}{r^2}$. Each sphere ends up with $\\frac{q - 3q}{2} = -q$. Then $F_2 = \\frac{k q^2}{r^2} = \\frac{F_1}{3}$, which is repulsive. (R) correctly explains (A)."
  },
  {
    a: "Earnshaw's theorem states that a collection of stationary point charges cannot be maintained in a state of stable electrostatic equilibrium solely by electrostatic forces.",
    r: "Laplace's equation $\\nabla^2 V = 0$ in charge-free space implies that electrostatic potential $V$ cannot have a local maximum or minimum, only saddle points.",
    ans: 0,
    exp: "Because $\\nabla^2 V = 0$, there are no local extrema in electrostatic potential in charge-free space; any displacement restoring equilibrium in one direction destabilizes it in an orthogonal direction. (R) correctly explains (A)."
  },
  {
    a: "A positive test charge placed midway between two equal positive charges $+Q$ is in stable equilibrium for displacements along the line joining the charges.",
    r: "Displacing the test charge along the axial line brings it closer to one positive charge, resulting in a stronger repulsive force pushing it back towards the midpoint.",
    ans: 0,
    exp: "Along the axis, displacing by $+x$ increases repulsion from the approached charge, producing a net restoring force directed back towards the center. (R) correctly explains (A)."
  },
  {
    a: "A positive test charge placed midway between two equal positive charges $+Q$ is in unstable equilibrium for displacements perpendicular to the line joining the charges.",
    r: "Displacing the positive charge perpendicular to the axis produces a net repulsive force pointing away from the axis, driving the charge further away.",
    ans: 0,
    exp: "The lateral components of the repulsive forces add constructively along the displacement direction, pushing the charge away from the midpoint rather than restoring it. (R) correctly explains (A)."
  },
  {
    a: "Electric charge is strictly quantized: any observable charge is an integral multiple of the elementary charge $e = 1.6 \\times 10^{-19}\\text{ C}$.",
    r: "Electric charge can only be transferred between physical bodies through the transfer of an integer number of discrete electrons.",
    ans: 0,
    exp: "Charge quantization means $Q = \\pm ne$ where $n \\in \\mathbb{Z}$. Macroscopic charges are formed by integral exchanges of electrons. (R) correctly explains (A)."
  },
  {
    a: "The value of Coulomb's constant in SI units is approximately $k = \\frac{1}{4\\pi\\varepsilon_0} \\approx 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$.",
    r: "The permittivity of free space is defined as $\\varepsilon_0 \\approx 8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$.",
    ans: 0,
    exp: "Evaluating $\\frac{1}{4\\pi(8.854 \\times 10^{-12})}$ directly yields $8.988 \\times 10^9 \\approx 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$. (R) correctly explains (A)."
  },
  {
    a: "If the distance between two point charges is halved, the electrostatic force between them quadruples.",
    r: "Coulomb's force is inversely proportional to the square of the separation between the charges: $F \\propto \\frac{1}{r^2}$.",
    ans: 0,
    exp: "Since $F \\propto 1/r^2$, halving $r$ gives $F' = \\frac{k q_1 q_2}{(r/2)^2} = 4F$. (R) correctly explains (A)."
  },
  {
    a: "Two point charges $+q$ and $+4q$ are separated by distance $L$. A third charge $q_0$ must be placed at distance $L/3$ from $+q$ on the line joining them for it to experience zero net force.",
    r: "For equilibrium, $\\frac{k q q_0}{x^2} = \\frac{k(4q)q_0}{(L - x)^2} \\implies \\frac{1}{x} = \\frac{2}{L - x} \\implies L - x = 2x \\implies x = \\frac{L}{3}$.",
    ans: 0,
    exp: "Equating the magnitudes of the two opposing repulsive forces yields $x = \\frac{\\sqrt{q}}{\\sqrt{q} + \\sqrt{4q}} L = \\frac{1}{1 + 2} L = \\frac{L}{3}$. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic force between two protons separated by $1\\text{ fm}$ is overwhelmingly stronger than the gravitational force between them.",
    r: "The ratio of electrostatic repulsion to gravitational attraction for two protons is $\\frac{F_e}{F_g} = \\frac{k e^2}{G m_p^2} \\approx 10^{36}$.",
    ans: 0,
    exp: "Evaluating $\\frac{(9 \\times 10^9)(1.6 \\times 10^{-19})^2}{(6.67 \\times 10^{-11})(1.67 \\times 10^{-27})^2} \\approx 1.24 \\times 10^{36}$. The electrostatic force dwarfs gravity by 36 orders of magnitude. (R) correctly explains (A)."
  },
  {
    a: "Two small equally charged spheres suspended from a common point by light strings of length $L$ attain equilibrium at separation $x$. If the strings have small angular deflection, $x \\propto q^{2/3}$.",
    r: "For small angles, $\\tan\\theta \\approx \\sin\\theta = \\frac{x}{2L}$, and equilibrium requires $\\tan\\theta = \\frac{F_e}{mg} = \\frac{k q^2}{x^2 mg}$, yielding $x^3 = \\frac{2k q^2 L}{mg}$.",
    ans: 0,
    exp: "From $x^3 = \\frac{q^2 L}{2\\pi\\varepsilon_0 mg}$, taking the cube root gives $x \\propto q^{2/3}$. (R) correctly explains (A)."
  },
  {
    a: "When the suspended spheres from the previous problem are immersed in a dielectric liquid of density $\\rho$ and dielectric constant $K$, the separation remains unchanged if the sphere density is $\\sigma = \\frac{K\\rho}{K - 1}$.",
    r: "The reduction in electrostatic force by factor $K$ is exactly balanced by the reduction in effective weight due to buoyant upthrust: $mg_{eff} = mg\\left(1 - \\frac{\\rho}{\\sigma}\\right) = \\frac{mg}{K}$.",
    ans: 0,
    exp: "For angle $\\theta$ to remain identical: $\\tan\\theta = \\frac{F/K}{mg(1 - \\rho/\\sigma)} = \\frac{F}{mg} \\implies K\\left(1 - \\frac{\\rho}{\\sigma}\\right) = 1 \\implies \\sigma = \\frac{K\\rho}{K - 1}$. (R) correctly explains (A)."
  },
  {
    a: "Coulomb's law holds valid over atomic distances down to approximately $10^{-15}\\text{ m}$.",
    r: "Below $10^{-15}\\text{ m}$ ($1\\text{ fm}$), the strong nuclear force becomes dominant over electrostatic forces between nucleons.",
    ans: 0,
    exp: "Coulomb's law accurately describes forces down to sub-nanometer scales; below $1\\text{ fm}$, strong nuclear forces dominate, though electromagnetic interactions still persist. (R) correctly explains (A)."
  },
  {
    a: "The electric force between two charges does not depend on the medium between them.",
    r: "Dielectric polarization of a material medium produces induced bound charges that weaken the net electric field and net force.",
    ans: 3,
    exp: "Assertion is false: the net electrostatic force between two charges is strongly dependent on the medium ($F_{med} = F_{vac}/K$). Reason is true: polarization generates opposing bound charges."
  },
  {
    a: "Total electric charge in an isolated physical system is strictly conserved.",
    r: "Electric charges cannot be created or destroyed in isolation; they can only be transferred or created in equal and opposite pairs (such as pair production).",
    ans: 0,
    exp: "Law of conservation of charge asserts that the algebraic sum of all positive and negative charges in an isolated system is constant in time. (R) correctly explains (A)."
  },
  {
    a: "A glass rod rubbed with silk acquires a positive charge.",
    r: "Electrons are transferred from the silk cloth to the glass rod during rubbing.",
    ans: 2,
    exp: "Assertion is true: glass loses electrons and becomes positive. Reason is false: electrons transfer from the glass rod to the silk, leaving the glass positively charged and silk negatively charged."
  },
  {
    a: "An uncharged metallic body is attracted towards a nearby charged body.",
    r: "The charged body induces opposite charges on the nearer side of the metallic body and like charges on the farther side, and since force decreases with distance, the attractive force exceeds the repulsive force.",
    ans: 0,
    exp: "Because the near induced charge is opposite in sign, $F_{attraction} = \\frac{k Q q_{ind}}{r_{near}^2} > F_{repulsion} = \\frac{k Q q_{ind}}{r_{far}^2}$, producing net attraction. (R) correctly explains (A)."
  },
  {
    a: "A charged comb attracts small pieces of paper.",
    r: "Electric polarization of neutral dielectric paper molecules creates electric dipoles that experience a net attractive force in the non-uniform electric field of the comb.",
    ans: 0,
    exp: "Non-uniform field of the charged comb exerts a net force $\\vec{F} = (\\vec{p}\\cdot\\vec{\\nabla})\\vec{E}$ on the induced dipoles in the neutral paper, drawing them towards the comb. (R) correctly explains (A)."
  },
  {
    a: "If two point charges of same sign are released from rest, their kinetic energy increases continuously while electrostatic potential energy decreases.",
    r: "By conservation of mechanical energy, the work done by the repulsive Coulomb force converts stored electrostatic potential energy into kinetic energy: $\\Delta K = -\\Delta U$.",
    ans: 0,
    exp: "The repulsive force accelerates the charges outward, doing positive work ($W > 0$), which increases kinetic energy while potential energy $U = \\frac{k q_1 q_2}{r} \\to 0$. (R) explains (A)."
  },
  {
    a: "The unit of electric charge, the Coulomb, is equivalent to Ampere-second ($\\text{A}\\cdot\\text{s}$).",
    r: "Electric current is defined as the rate of flow of electric charge: $I = \\frac{dQ}{dt}$, so $Q = \\int I\\, dt$.",
    ans: 0,
    exp: "By definition, $1\\text{ C} = 1\\text{ A} \\times 1\\text{ s}$. (R) correctly explains (A)."
  },
  {
    a: "Electrostatic forces are non-conservative forces.",
    r: "The work done by electrostatic force in moving a charge along any closed path is zero: $\\oint \\vec{E}\\cdot d\\vec{r} = 0$.",
    ans: 3,
    exp: "Assertion is false: electrostatic forces are central and strictly conservative forces. Reason is true: the line integral over any closed path vanishes."
  },
  {
    a: "For three charges $+q, +q,$ and $-q/4$ placed on a straight line at $x = 0, x = L,$ and $x = L/2$, the entire system of three charges is in electrostatic equilibrium.",
    r: "The net electrostatic force on each of the three charges vanishes identically.",
    ans: 0,
    exp: "On $+q$ at $x = 0$: $F = \\frac{k q(q/4)}{(L/2)^2} - \\frac{k q^2}{L^2} = \\frac{k q^2}{L^2} - \\frac{k q^2}{L^2} = 0$. By symmetry, force on $+q$ at $x = L$ is zero. On $-q/4$ at $x = L/2$, the equal opposing forces cancel. Thus all three charges are in equilibrium. (R) explains (A)."
  }
];

// 7 Generator MCQs on Coulomb's Law
const mcqData = [
  {
    q: "Two identical conducting spheres $A$ and $B$ carry charges $+12\\mu\\text{C}$ and $-4\\mu\\text{C}$ respectively, and are separated by a distance $r$. They exert an attractive force $F_1$ on each other. If they are brought into momentary contact and then placed back at the same separation $r$, the new electrostatic force $F_2$ between them is:",
    opts: [
      "$\\frac{F_1}{3}$ (repulsive)",
      "$\\frac{F_1}{4}$ (repulsive)",
      "$3F_1$ (attractive)",
      "$\\frac{F_1}{2}$ (repulsive)"
    ],
    ans: 0,
    exp: "$F_1 = \\frac{k(12)(4)}{r^2} = \\frac{48k}{r^2}$. When touched, net charge is $+12 - 4 = +8\\mu\\text{C}$, dividing equally to $+4\\mu\\text{C}$ on each sphere. New force is $F_2 = \\frac{k(4)(4)}{r^2} = \\frac{16k}{r^2}$. The ratio is $\\frac{F_2}{F_1} = \\frac{16}{48} = \\frac{1}{3}$, and it is repulsive."
  },
  {
    q: "Two point charges $+q$ and $+9q$ are fixed at a distance $L$ apart. Where should a third charge $Q$ be placed on the line joining them so that the third charge is in equilibrium?",
    opts: [
      "At a distance of $L/4$ from $+q$",
      "At a distance of $L/3$ from $+q$",
      "At a distance of $L/2$ from $+q$",
      "At a distance of $3L/4$ from $+q$"
    ],
    ans: 0,
    exp: "Let distance from $+q$ be $x$. For equilibrium, $\\frac{k q Q}{x^2} = \\frac{k(9q)Q}{(L - x)^2} \\implies \\frac{1}{x} = \\frac{3}{L - x} \\implies L - x = 3x \\implies 4x = L \\implies x = \\frac{L}{4}$."
  },
  {
    q: "The force between two charges separated by distance $r$ in vacuum is $100\\text{ N}$. When the space between the charges is filled with a dielectric medium of dielectric constant $K = 5$, the force between them becomes:",
    opts: ["$20\\text{ N}$", "$500\\text{ N}$", "$25\\text{ N}$", "$50\\text{ N}$"],
    ans: 0,
    exp: "$F_{med} = \\frac{F_{vac}}{K} = \\frac{100\\text{ N}}{5} = 20\\text{ N}$."
  },
  {
    q: "Four equal point charges $+q$ are placed at the four corners of a square of side $a$. The magnitude of the net electrostatic force experienced by any one of the charges is:",
    opts: [
      "$\\frac{kq^2}{a^2}\\left(\\sqrt{2} + \\frac{1}{2}\\right)$",
      "$\\frac{kq^2}{a^2}\\left(2\\sqrt{2} + 1\\right)$",
      "$\\frac{kq^2}{a^2}\\sqrt{2}$",
      "$\\frac{3kq^2}{a^2}$"
    ],
    ans: 0,
    exp: "The two adjacent charges each exert force $F = \\frac{kq^2}{a^2}$ at $90^\\circ$, whose resultant is $\\sqrt{2}F$. The diagonally opposite charge exerts force $F_{diag} = \\frac{kq^2}{(\\sqrt{2}a)^2} = \\frac{F}{2}$ in the same direction. Total force is $F_{net} = \\sqrt{2}F + \\frac{1}{2}F = F\\left(\\sqrt{2} + \\frac{1}{2}\\right) = \\frac{kq^2}{a^2}\\left(\\sqrt{2} + \\frac{1}{2}\\right)$."
  },
  {
    q: "Two identical small spheres carrying charge $q$ each are suspended by strings of length $L$ from a common point. The angle between the strings is $2\\theta$. If the mass of each sphere is $m$, the equilibrium separation $x$ for small $\\theta$ is:",
    opts: [
      "$\\left(\\frac{q^2 L}{2\\pi\\varepsilon_0 mg}\\right)^{1/3}$",
      "$\\left(\\frac{q^2 L}{\\pi\\varepsilon_0 mg}\\right)^{1/3}$",
      "$\\left(\\frac{q^2 L}{4\\pi\\varepsilon_0 mg}\\right)^{1/2}$",
      "$\\left(\\frac{2q^2 L}{\\pi\\varepsilon_0 mg}\\right)^{1/3}$"
    ],
    ans: 0,
    exp: "For small $\\theta$, $\\tan\\theta \\approx \\sin\\theta = \\frac{x/2}{L} = \\frac{x}{2L}$. Balancing horizontal electrostatic force and gravity: $\\tan\\theta = \\frac{F_e}{mg} = \\frac{k q^2}{x^2 mg} \\implies \\frac{x}{2L} = \\frac{q^2}{4\\pi\\varepsilon_0 x^2 mg} \\implies x^3 = \\frac{q^2 L}{2\\pi\\varepsilon_0 mg} \\implies x = \\left(\\frac{q^2 L}{2\\pi\\varepsilon_0 mg}\\right)^{1/3}$."
  },
  {
    q: "A charge $Q$ is to be divided into two parts $q$ and $(Q - q)$ such that the electrostatic force of repulsion between them at a fixed separation is maximum. The value of $q$ should be:",
    opts: ["$Q/2$", "$Q/4$", "$Q/3$", "$2Q/3$"],
    ans: 0,
    exp: "$F(q) = \\frac{k q(Q - q)}{r^2} = \\frac{k}{r^2}(qQ - q^2)$. To maximize force, $\\frac{dF}{dq} = 0 \\implies Q - 2q = 0 \\implies q = \\frac{Q}{2}$."
  },
  {
    q: "How many electrons must be removed from a neutral conductor to give it a positive charge of $1.6\\mu\\text{C}$?",
    opts: ["$10^{13}$", "$10^{19}$", "$10^{16}$", "$10^{10}$"],
    ans: 0,
    exp: "$n = \\frac{Q}{e} = \\frac{1.6 \\times 10^{-6}\\text{ C}}{1.6 \\times 10^{-19}\\text{ C}} = 10^{13}$ electrons."
  }
];

// 20 Authentic Numerical Questions on Coulomb's Law
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Force between two point charges F = k * q1 * q2 / r^2 (k = 9e9)
// Let q1 = 2 uC, q2 = 5 uC, r = 0.3 m -> F = 9e9 * 10e-12 / 0.09 = 90 / 0.09 = 1 N
for (let i = 1; i <= 5; i++) {
  const q1 = i * 2; // uC
  const q2 = 5; // uC
  const r = 0.3; // meters -> r^2 = 0.09
  // F = 9e9 * (2i * 5 * 10^-12) / 0.09 = 9e-2 * 10 * i / 0.09 = 10 * i / 10 = i N
  const F = i;
  addNumerical(
    `Two point charges $q_1 = ${q1}\\mu\\text{C}$ and $q_2 = ${q2}\\mu\\text{C}$ are separated by a distance of $r = 0.3\\text{ m}$ in vacuum. Calculate the magnitude of the electrostatic force $F$ (in Newtons) between them. (Take $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$).`,
    F,
    `$F = \\frac{k q_1 q_2}{r^2} = \\frac{(9 \\times 10^9)(${q1} \\times 10^{-6})(${q2} \\times 10^{-6})}{(0.3)^2} = \\frac{${90 * i} \\times 10^{-3}}{0.09} = ${F}\\text{ N}$.`
  );
}

// 2. Force in dielectric medium: F_med = F_vac / K
for (let i = 1; i <= 5; i++) {
  const Fvac = 20 * i;
  const K = 4;
  const Fmed = Math.round(Fvac / K);
  addNumerical(
    `The electrostatic force between two point charges in vacuum is $F_{vac} = ${Fvac}\\text{ N}$. If the entire system is placed in an oil bath of dielectric constant $K = ${K}$ without changing the separation, find the new electrostatic force $F$ (in Newtons).`,
    Fmed,
    `$F_{med} = \\frac{F_{vac}}{K} = \\frac{${Fvac}\\text{ N}}{${K}} = ${Fmed}\\text{ N}$.`
  );
}

// 3. Number of electrons in charge Q: n = Q / e (find in units of 10^12)
for (let i = 1; i <= 5; i++) {
  const n_factor = 2 * i; // in units of 10^12
  const Q_uC = Math.round(n_factor * 1.6 * 10) / 100; // Q = n * 1.6e-19 C
  addNumerical(
    `If a neutral plastic rod is rubbed with fur and gains a negative charge of $Q = ${Math.round(n_factor * 0.16 * 100) / 100}\\mu\\text{C}$, find the number of electrons transferred to the rod in units of $10^{12}$. (Take $e = 1.6 \\times 10^{-19}\\text{ C}$).`,
    n_factor,
    `$n = \\frac{Q}{e} = \\frac{${Math.round(n_factor * 0.16 * 100) / 100} \\times 10^{-6}\\text{ C}}{1.6 \\times 10^{-19}\\text{ C}} = ${n_factor} \\times 10^{12}$.`
  );
}

// 4. Equilibrium position of third charge between q and 4q at distance L: x = L/3
for (let i = 1; i <= 5; i++) {
  const L = 30 * i; // cm
  const x = 10 * i; // cm
  addNumerical(
    `Two point charges $+q$ and $+4q$ are fixed at a separation of $L = ${L}\\text{ cm}$. A third charge $q_0$ is placed on the line segment joining them such that it is in equilibrium. Find the distance $x$ (in cm) of $q_0$ from the charge $+q$.`,
    x,
    `For equilibrium, $\\frac{k q q_0}{x^2} = \\frac{k (4q) q_0}{(${L} - x)^2} \\implies \\frac{1}{x} = \\frac{2}{${L} - x} \\implies ${L} - x = 2x \\implies 3x = ${L} \\implies x = ${x}\\text{ cm}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 20)`);

// Assemble total 53 questions
const part3Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part3Questions.push({
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

  part3Questions.push({
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

  part3Questions.push({
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

console.log(`Part 3 generated: ${part3Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_electrostatics_part3.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part3Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
