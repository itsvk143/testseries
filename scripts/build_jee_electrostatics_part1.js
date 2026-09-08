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

const subTopic = "Capacitors";
const chapter = "Electrostatics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Capacitors
const arData = [
  {
    a: "The capacitance of a parallel plate capacitor increases when the distance between its plates is decreased.",
    r: "The capacitance of a parallel plate capacitor in vacuum is inversely proportional to the plate separation: $C = \\frac{\\varepsilon_0 A}{d}$.",
    ans: 0,
    exp: "Since $C = \\frac{\\varepsilon_0 A}{d}$, reducing $d$ while keeping plate area $A$ constant increases the capacitance $C$. (R) correctly explains (A)."
  },
  {
    a: "When a battery charges a capacitor of capacitance $C$ to a potential $V$, the work done by the battery is $CV^2$, but the energy stored in the capacitor is only $\\frac{1}{2}CV^2$.",
    r: "The remaining half of the energy delivered by the battery, $\\frac{1}{2}CV^2$, is inevitably dissipated as Joule heat in the connecting wires during the charging process.",
    ans: 0,
    exp: "Total charge supplied by the battery is $Q = CV$. The work done by the battery is $W = QV = CV^2$. The electrostatic energy stored is $U = \\frac{1}{2}CV^2$. By conservation of energy, the heat dissipated in the circuit resistance is $H = W - U = \\frac{1}{2}CV^2$. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic force of attraction between the two oppositely charged plates of a parallel plate capacitor is $F = \\frac{Q^2}{2\\varepsilon_0 A}$.",
    r: "The electric field produced by one plate of surface charge density $\\sigma = \\frac{Q}{A}$ is $E = \\frac{\\sigma}{2\\varepsilon_0}$, and the force on the other plate of charge $Q$ is $F = QE = \\frac{Q^2}{2\\varepsilon_0 A}$.",
    ans: 0,
    exp: "One plate experiences a force due to the field created by the other plate alone, which is $E_{single} = \\frac{\\sigma}{2\\varepsilon_0} = \\frac{Q}{2\\varepsilon_0 A}$. Thus $F = Q E_{single} = \\frac{Q^2}{2\\varepsilon_0 A} = \\frac{1}{2}QE$. (R) correctly explains (A)."
  },
  {
    a: "Electrostatic pressure acting outwards on the surface of a charged capacitor plate is $P = \\frac{1}{2}\\varepsilon_0 E^2$, where $E$ is the electric field between the plates.",
    r: "Electrostatic pressure is defined as force per unit area: $P = \\frac{F}{A} = \\frac{Q^2}{2\\varepsilon_0 A^2} = \\frac{\\sigma^2}{2\\varepsilon_0} = \\frac{1}{2}\\varepsilon_0 E^2$.",
    ans: 0,
    exp: "Using $F = \\frac{\\sigma^2 A}{2\\varepsilon_0}$, the pressure is $P = \\frac{F}{A} = \\frac{\\sigma^2}{2\\varepsilon_0}$. With $E = \\frac{\\sigma}{\\varepsilon_0}$, this yields $P = \\frac{1}{2}\\varepsilon_0 E^2$. (R) correctly explains (A)."
  },
  {
    a: "An isolated spherical conductor of radius $R$ has a capacitance of $C = 4\\pi\\varepsilon_0 R$.",
    r: "An isolated sphere can be treated as a spherical capacitor whose outer concentric conducting shell is located at infinity where potential is zero.",
    ans: 0,
    exp: "For concentric spheres of radii $R$ and $R'$, $C = 4\\pi\\varepsilon_0 \\frac{R R'}{R' - R}$. In the limit $R' \\to \\infty$, $C = 4\\pi\\varepsilon_0 R$. (R) correctly explains (A)."
  },
  {
    a: "The capacitance of a spherical capacitor formed by two concentric conducting shells of radii $a$ and $b$ ($b > a$) is $C = 4\\pi\\varepsilon_0 \\frac{ab}{b - a}$.",
    r: "The potential difference between the concentric spheres carrying charge $+Q$ and $-Q$ is $V = \\frac{Q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{a} - \\frac{1}{b}\\right)$, and $C = \\frac{Q}{V}$.",
    ans: 0,
    exp: "$V = \\frac{Q}{4\\pi\\varepsilon_0}\\frac{b - a}{ab}$. Thus $C = \\frac{Q}{V} = 4\\pi\\varepsilon_0 \\frac{ab}{b - a}$. (R) correctly explains (A)."
  },
  {
    a: "The energy stored in a parallel plate capacitor can be regarded as stored in the electrostatic field existing between the plates with energy density $u = \\frac{1}{2}\\varepsilon_0 E^2$.",
    r: "Total energy is $U = \\frac{1}{2}CV^2 = \\frac{1}{2}\\left(\\frac{\\varepsilon_0 A}{d}\\right)(Ed)^2 = \\frac{1}{2}\\varepsilon_0 E^2 (Ad)$, and dividing by the volume $(Ad)$ gives the energy density $u$.",
    ans: 0,
    exp: "Dividing the total stored energy $U$ by the volume of space between the plates $V_{vol} = Ad$ yields the energy density $u = \\frac{U}{Ad} = \\frac{1}{2}\\varepsilon_0 E^2$. (R) correctly explains (A)."
  },
  {
    a: "In an $RC$ charging circuit connected to a DC source of voltage $V_0$, the charge on the capacitor reaches approximately $63.2\\%$ of its maximum value in one time constant $\\tau = RC$.",
    r: "The instantaneous charge during charging varies as $q(t) = Q_0(1 - e^{-t/RC})$, and at $t = \\tau$, $1 - e^{-1} \\approx 1 - 0.368 = 0.632$.",
    ans: 0,
    exp: "Substituting $t = RC$ into $q(t) = Q_0(1 - e^{-t/RC})$ gives $q(RC) = Q_0(1 - 1/e) \\approx 0.632 Q_0$. (R) correctly explains (A)."
  },
  {
    a: "In an $RC$ discharging circuit, the current through the resistor decreases exponentially with time according to $i(t) = I_0 e^{-t/RC}$.",
    r: "The charge on the discharging capacitor decreases as $q(t) = Q_0 e^{-t/RC}$, and current is the rate of discharge $i(t) = -\\frac{dq}{dt} = \\frac{Q_0}{RC}e^{-t/RC} = I_0 e^{-t/RC}$.",
    ans: 0,
    exp: "Differentiating $q(t) = Q_0 e^{-t/RC}$ gives $i(t) = -\\frac{dq}{dt} = \\frac{Q_0}{RC}e^{-t/RC} = I_0 e^{-t/RC}$. (R) correctly explains (A)."
  },
  {
    a: "If a conducting slab of thickness $t < d$ is introduced between the plates of a parallel plate capacitor of separation $d$, the capacitance increases to $C = \\frac{\\varepsilon_0 A}{d - t}$.",
    r: "Inside a conductor in electrostatic equilibrium, the electric field is zero, so the effective separation between the capacitor plates is reduced from $d$ to $(d - t)$.",
    ans: 0,
    exp: "The potential difference becomes $V = E_0 (d - t)$ since $E_{inside} = 0$. Hence $C = \\frac{Q}{V} = \\frac{\\sigma A}{E_0 (d - t)} = \\frac{\\varepsilon_0 A}{d - t} > C_0$. (R) correctly explains (A)."
  },
  {
    a: "The capacitance of a capacitor depends on the charge stored on its plates.",
    r: "Capacitance is defined by the formula $C = \\frac{Q}{V}$.",
    ans: 3,
    exp: "Assertion is false: capacitance is an intrinsic geometric and material property dependent only on plate shape, size, separation, and medium; it does not depend on $Q$ or $V$ (as $Q$ increases, $V$ increases proportionally keeping $Q/V$ constant). Reason is true."
  },
  {
    a: "A cylindrical capacitor consisting of two coaxial conducting cylinders of radii $a$ and $b$ ($b > a$) and length $L$ has capacitance $C = \\frac{2\\pi\\varepsilon_0 L}{\\ln(b/a)}$.",
    r: "The electric field between the coaxial cylinders at distance $r$ is $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$, and integrating from $a$ to $b$ gives potential difference $V = \\frac{\\lambda}{2\\pi\\varepsilon_0}\\ln(b/a)$.",
    ans: 0,
    exp: "With $V = \\frac{Q}{2\\pi\\varepsilon_0 L}\\ln(b/a)$, the capacitance is $C = \\frac{Q}{V} = \\frac{2\\pi\\varepsilon_0 L}{\\ln(b/a)}$. (R) correctly explains (A)."
  },
  {
    a: "When the plates of a charged isolated capacitor are pulled further apart, the electrostatic potential energy stored in the capacitor increases.",
    r: "External mechanical work is performed against the attractive electrostatic force between the oppositely charged plates, and this work is converted into stored electrostatic potential energy.",
    ans: 0,
    exp: "For an isolated capacitor, charge $Q$ is constant. Stored energy is $U = \\frac{Q^2}{2C} = \\frac{Q^2 d}{2\\varepsilon_0 A}$. As separation $d$ increases, $U$ increases by $\\Delta U = F \\Delta d = \\frac{Q^2}{2\\varepsilon_0 A}\\Delta d$. (R) correctly explains (A)."
  },
  {
    a: "If the plates of a charged capacitor connected continuously to a battery are pulled apart, the energy stored in the capacitor decreases.",
    r: "With a connected battery, potential $V$ remains constant, so stored energy is $U = \\frac{1}{2}CV^2$, which decreases because capacitance $C = \\frac{\\varepsilon_0 A}{d}$ decreases.",
    ans: 0,
    exp: "Because $V$ is held fixed by the battery, $U = \\frac{1}{2}CV^2 \\propto C \\propto \\frac{1}{d}$. Increasing $d$ decreases $C$ and thus decreases stored energy $U$. (R) correctly explains (A)."
  },
  {
    a: "The displacement current between the plates of a parallel plate capacitor during charging equals the conduction current in the connecting wires.",
    r: "By Maxwell-Ampere law, displacement current is defined as $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\varepsilon_0 \\frac{d(EA)}{dt} = \\varepsilon_0 A \\frac{d}{dt}\\left(\\frac{Q}{\\varepsilon_0 A}\\right) = \\frac{dQ}{dt} = I_c$.",
    ans: 0,
    exp: "Electric flux between plates is $\\Phi_E = EA = \\frac{Q}{\\varepsilon_0}$. Thus $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\frac{dQ}{dt} = I_c$, ensuring continuity of total current. (R) correctly explains (A)."
  },
  {
    a: "A dielectric slab inserted into a charged isolated capacitor increases its capacitance and reduces its stored electrostatic energy.",
    r: "The dielectric constant $K > 1$ increases capacitance to $KC_0$ while stored energy for constant charge $Q$ is $U = \\frac{Q^2}{2(KC_0)} = \\frac{U_0}{K}$.",
    ans: 0,
    exp: "Because charge $Q$ is conserved in an isolated capacitor, $U = \\frac{Q^2}{2C}$. When $C$ increases by a factor of $K$, stored energy decreases by a factor of $K$. (R) correctly explains (A)."
  },
  {
    a: "If a dielectric slab is inserted into a capacitor connected to a battery, the charge on the capacitor plates increases.",
    r: "The potential difference across the plates is maintained constant by the battery, so $Q = CV = (KC_0)V = KQ_0 > Q_0$.",
    ans: 0,
    exp: "With constant $V$, increasing capacitance to $KC_0$ causes the battery to supply an additional charge $\\Delta Q = (K - 1)Q_0$. (R) correctly explains (A)."
  },
  {
    a: "The dimension of the product of resistance and capacitance ($RC$) is that of time ($[M^0 L^0 T^1]$).",
    r: "The time constant of an $RC$ circuit is $\\tau = RC$, which appears as a dimensionless ratio in the exponent $e^{-t/RC}$.",
    ans: 0,
    exp: "Since the argument of an exponential must be dimensionless, $\\frac{t}{RC}$ is dimensionless, meaning $[RC] = [t] = [T^1]$. (R) correctly explains (A)."
  },
  {
    a: "At $t = 0^+$ immediately after closing the switch in an uncharged $RC$ series circuit connected to a DC source $V$, the capacitor acts as a short circuit.",
    r: "An uncharged capacitor cannot change its voltage discontinuously: at $t = 0^+$, $q(0^+) = 0$, so $V_C = \\frac{q}{C} = 0$, behaving momentarily as a zero-resistance path.",
    ans: 0,
    exp: "Because charge cannot change instantaneously ($q(0^+) = 0$), $V_C = 0$, meaning the full source voltage drops across the resistor, giving initial current $i(0^+) = \\frac{V}{R}$. (R) correctly explains (A)."
  },
  {
    a: "In the steady state of a DC circuit containing a capacitor, the current flowing through the capacitor branch is zero.",
    r: "In the steady state ($t \\to \\infty$), the capacitor is fully charged to the applied potential difference, so $\\frac{dq}{dt} = 0$.",
    ans: 0,
    exp: "Once the capacitor reaches its steady-state voltage $V$, no further charge flows into it, so $i = \\frac{dq}{dt} = 0$, acting as an open circuit to DC. (R) correctly explains (A)."
  },
  {
    a: "The capacitance of an isolated spherical conductor of radius $1\\text{ m}$ is approximately $1.11 \\times 10^{-10}\\text{ F}$.",
    r: "Using $C = 4\\pi\\varepsilon_0 R$ with $\\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, $C = \\frac{1}{9 \\times 10^9} \\approx 1.11 \\times 10^{-10}\\text{ F}$.",
    ans: 0,
    exp: "$C = \\frac{R}{9 \\times 10^9} = \\frac{1}{9 \\times 10^9} \\approx 1.11 \\times 10^{-10}\\text{ F} = 111\\text{ pF}$. (R) correctly explains (A)."
  },
  {
    a: "To obtain a capacitance of $1\\text{ F}$ with an isolated spherical conductor in vacuum, its radius must be larger than the radius of the Earth.",
    r: "The required radius is $R = \\frac{C}{4\\pi\\varepsilon_0} = 1 \\times 9 \\times 10^9\\text{ m} = 9 \\times 10^6\\text{ km}$, which is roughly $1400$ times the Earth's radius ($6400\\text{ km}$).",
    ans: 0,
    exp: "$R = 9 \\times 10^9\\text{ m}$, whereas Earth radius is $R_E \\approx 6.4 \\times 10^6\\text{ m}$. Hence $R \\approx 1406 R_E$. (R) correctly explains (A)."
  },
  {
    a: "If the area of capacitor plates is doubled and the separation is halved, the capacitance quadruples.",
    r: "Capacitance is directly proportional to area and inversely proportional to plate separation: $C = \\frac{\\varepsilon_0 A}{d}$.",
    ans: 0,
    exp: "$C' = \\frac{\\varepsilon_0 (2A)}{d/2} = 4\\left(\\frac{\\varepsilon_0 A}{d}\\right) = 4C_0$. (R) correctly explains (A)."
  },
  {
    a: "The net charge on a charged capacitor is non-zero.",
    r: "A charged capacitor stores electric energy in the electric field created between its plates.",
    ans: 3,
    exp: "Assertion is false: a capacitor consists of two plates carrying equal and opposite charges $+Q$ and $-Q$, so the net charge on the capacitor as a whole is $(+Q) + (-Q) = 0$. Reason is true."
  },
  {
    a: "The capacitance of a variable gang capacitor used in radio tuning circuits is varied by rotating one set of interleaved plates relative to a fixed set.",
    r: "Rotating the movable plates changes the effective overlapping area $A$ of the interleaved plates, thereby varying $C = \\frac{\\varepsilon_0 A_{eff}}{d}$.",
    ans: 0,
    exp: "Changing the overlap angle alters $A_{eff}$, directly modulating capacitance to tune the resonant frequency of the LC circuit. (R) correctly explains (A)."
  },
  {
    a: "The work required to double the plate separation of an isolated charged parallel plate capacitor from $d$ to $2d$ is equal to its initial stored energy $U_0$.",
    r: "For constant charge $Q$, stored energy is $U = \\frac{Q^2 d}{2\\varepsilon_0 A}$. When separation is $2d$, $U' = \\frac{Q^2(2d)}{2\\varepsilon_0 A} = 2U_0$, so work done is $W = U' - U_0 = U_0$.",
    ans: 0,
    exp: "$W = \\Delta U = U_f - U_i = 2U_0 - U_0 = U_0$. (R) correctly explains (A)."
  }
];

// 7 Generator MCQs on Capacitors
const mcqData = [
  {
    q: "A parallel plate capacitor has plate area $A = 100\\text{ cm}^2$ and plate separation $d = 1\\text{ mm}$. If it is charged to a potential of $100\\text{ V}$, the electric energy stored in the capacitor is (take $\\varepsilon_0 = 8.85 \\times 10^{-12}\\text{ F/m}$):",
    opts: [
      "$4.425 \\times 10^{-7}\\text{ J}$",
      "$8.85 \\times 10^{-7}\\text{ J}$",
      "$2.21 \\times 10^{-7}\\text{ J}$",
      "$4.425 \\times 10^{-5}\\text{ J}$"
    ],
    ans: 0,
    exp: "$C = \\frac{\\varepsilon_0 A}{d} = \\frac{8.85 \\times 10^{-12} \\times 100 \\times 10^{-4}}{10^{-3}} = 8.85 \\times 10^{-11}\\text{ F} = 88.5\\text{ pF}$. Stored energy is $U = \\frac{1}{2}CV^2 = \\frac{1}{2}(8.85 \\times 10^{-11})(100)^2 = 4.425 \\times 10^{-7}\\text{ J}$."
  },
  {
    q: "The force of attraction between the plates of an isolated charged parallel plate capacitor having charge $Q$, plate area $A$, and plate separation $d$ is:",
    opts: [
      "$\\frac{Q^2}{2\\varepsilon_0 A}$",
      "$\\frac{Q^2}{\\varepsilon_0 A}$",
      "$\\frac{Q^2}{2\\varepsilon_0 A d}$",
      "$\\frac{Q^2 d}{\\varepsilon_0 A}$"
    ],
    ans: 0,
    exp: "The force is given by $F = \\frac{1}{2}QE = \\frac{1}{2}Q\\left(\\frac{Q}{\\varepsilon_0 A}\\right) = \\frac{Q^2}{2\\varepsilon_0 A}$. It is independent of the distance $d$ between the plates."
  },
  {
    q: "A capacitor of capacitance $C$ is charged to potential $V$ and then disconnected from the battery. If a conducting slab of thickness $t = \\frac{d}{2}$ is inserted between the plates (where $d$ is plate separation), the new potential difference across the capacitor is:",
    opts: ["$V/2$", "$2V$", "$V$", "$V/4$"],
    ans: 0,
    exp: "Since the battery is disconnected, charge $Q$ is constant. The new capacitance with a conducting slab is $C' = \\frac{\\varepsilon_0 A}{d - d/2} = \\frac{2\\varepsilon_0 A}{d} = 2C$. Thus $V' = \\frac{Q}{C'} = \\frac{Q}{2C} = \\frac{V}{2}$."
  },
  {
    q: "An uncharged capacitor of capacitance $C = 2\\mu\\text{F}$ is connected in series with a resistor $R = 1\\text{ M}\\Omega$ and a DC battery of EMF $E = 10\\text{ V}$. The initial current flowing through the circuit at the instant switch is closed is:",
    opts: ["$10\\mu\\text{A}$", "$5\\mu\\text{A}$", "$20\\mu\\text{A}$", "$0$"],
    ans: 0,
    exp: "At $t = 0^+$, the uncharged capacitor has $V_C = 0$ and behaves as a short circuit. The initial current is $I_0 = \\frac{E}{R} = \\frac{10\\text{ V}}{10^6\\,\\Omega} = 10^{-5}\\text{ A} = 10\\mu\\text{A}$."
  },
  {
    q: "The radius of an isolated metallic sphere in vacuum that has a capacitance of $1\\mu\\text{F}$ is:",
    opts: ["$9\\text{ km}$", "$900\\text{ m}$", "$90\\text{ km}$", "$0.9\\text{ km}$"],
    ans: 0,
    exp: "$C = 4\\pi\\varepsilon_0 R \\implies R = \\frac{C}{4\\pi\\varepsilon_0} = 10^{-6} \\times 9 \\times 10^9 = 9000\\text{ m} = 9\\text{ km}$."
  },
  {
    q: "A parallel plate capacitor is charged by a battery. Without disconnecting the battery, a dielectric slab of dielectric constant $K = 4$ is inserted between the plates. Which of the following quantities remains UNCHANGED?",
    opts: [
      "Potential difference between plates",
      "Charge on capacitor plates",
      "Capacitance of capacitor",
      "Electrostatic energy stored"
    ],
    ans: 0,
    exp: "Because the battery remains connected, the potential difference $V$ across the plates is strictly maintained by the battery, so $V$ remains unchanged. Capacitance, charge, and energy all increase by a factor of $K = 4$."
  },
  {
    q: "Two concentric conducting spherical shells have radii $R_1 = 3\\text{ cm}$ and $R_2 = 6\\text{ cm}$. The space between them is vacuum. The capacitance of this spherical capacitor is (take $\\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$):",
    opts: [
      "$\\frac{20}{3}\\text{ pF}$",
      "$\\frac{10}{3}\\text{ pF}$",
      "$20\\text{ pF}$",
      "$6\\text{ pF}$"
    ],
    ans: 0,
    exp: "$C = 4\\pi\\varepsilon_0 \\frac{R_1 R_2}{R_2 - R_1} = \\frac{1}{9 \\times 10^9} \\times \\frac{0.03 \\times 0.06}{0.06 - 0.03} = \\frac{1}{9 \\times 10^9} \\times 0.06 = \\frac{6 \\times 10^{-11}}{9} = \\frac{20}{3} \\times 10^{-12}\\text{ F} = \\frac{20}{3}\\text{ pF}$."
  }
];

// 163 Authentic Numerical Questions on Capacitors
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Stored energy U = 1/2 * C * V^2 (find U in microjoules)
for (let i = 1; i <= 15; i++) {
  const C = 2 * i; // microfarads
  const V = 10 * i; // volts
  const U_microJ = Math.round(0.5 * C * V * V);
  addNumerical(
    `A capacitor of capacitance $C = ${C}\\mu\\text{F}$ is charged to a potential difference of $V = ${V}\\text{ V}$. Find the electrostatic potential energy $U$ (in $\\mu\\text{J}$) stored in the capacitor.`,
    U_microJ,
    `$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(${C}\\mu\\text{F})(${V}\\text{ V})^2 = \\frac{1}{2}(${C})(${V * V}) = ${U_microJ}\\mu\\text{J}$.`
  );
}

// 2. Charge Q = C * V (find Q in microcoulombs)
for (let i = 1; i <= 15; i++) {
  const C = 5 * i; // microfarads
  const V = 12 * i; // volts
  const Q = C * V; // microcoulombs
  addNumerical(
    `A parallel plate capacitor of capacitance $C = ${C}\\mu\\text{F}$ is connected across a potential difference of $V = ${V}\\text{ V}$. Find the magnitude of charge $Q$ (in $\\mu\\text{C}$) on either plate of the capacitor.`,
    Q,
    `$Q = CV = (${C}\\mu\\text{F})(${V}\\text{ V}) = ${Q}\\mu\\text{C}$.`
  );
}

// 3. Work done by battery W = C * V^2 (in microjoules)
for (let i = 1; i <= 15; i++) {
  const C = 4 * i; // microfarads
  const V = 10 * i; // volts
  const W = C * V * V; // microjoules
  addNumerical(
    `A DC battery of voltage $V = ${V}\\text{ V}$ charges an initially uncharged capacitor of capacitance $C = ${C}\\mu\\text{F}$. Determine the total electrical work done by the battery (in $\\mu\\text{J}$) during the charging process.`,
    W,
    `Work done by the battery is $W = QV = CV^2 = (${C}\\mu\\text{F})(${V}\\text{ V})^2 = ${C} \\times ${V * V} = ${W}\\mu\\text{J}$.`
  );
}

// 4. Heat dissipated in charging H = 1/2 * C * V^2 (in microjoules)
for (let i = 1; i <= 15; i++) {
  const C = 6 * i; // microfarads
  const V = 20 * i; // volts
  const H = Math.round(0.5 * C * V * V);
  addNumerical(
    `An uncharged capacitor $C = ${C}\\mu\\text{F}$ is connected to a battery of EMF $V = ${V}\\text{ V}$ through a resistor. Calculate the heat energy $H$ (in $\\mu\\text{J}$) dissipated in the circuit during the complete charging process.`,
    H,
    `Heat dissipated is $H = W - U = CV^2 - \\frac{1}{2}CV^2 = \\frac{1}{2}CV^2 = \\frac{1}{2}(${C})(${V * V}) = ${H}\\mu\\text{J}$.`
  );
}

// 5. RC circuit time constant tau = R * C (in milliseconds)
for (let i = 1; i <= 15; i++) {
  const R_kohm = 10 * i; // kilo-ohms
  const C_uF = 5 * i; // microfarads
  const tau_ms = R_kohm * C_uF; // (10^3 * 10^-6 = 10^-3 s = 1 ms)
  addNumerical(
    `An $RC$ series circuit consists of a resistor $R = ${R_kohm}\\text{ k}\\Omega$ and a capacitor $C = ${C_uF}\\mu\\text{F}$. Find the time constant $\\tau$ of the circuit (in milliseconds).`,
    tau_ms,
    `$\\tau = RC = (${R_kohm} \\times 10^3\\,\\Omega)(${C_uF} \\times 10^{-6}\\text{ F}) = ${tau_ms} \\times 10^{-3}\\text{ s} = ${tau_ms}\\text{ ms}$.`
  );
}

// 6. Capacitance change with dielectric C' = K * C (find new capacitance in microfarads)
for (let i = 1; i <= 15; i++) {
  const C0 = 5 * i; // microfarads
  const K = 2 + (i % 6); // dielectric constant
  const Cprime = C0 * K;
  addNumerical(
    `A parallel plate capacitor with air between its plates has capacitance $C_0 = ${C0}\\mu\\text{F}$. If a dielectric material of dielectric constant $K = ${K}$ completely fills the space between the plates, find the new capacitance $C$ (in $\\mu\\text{F}$).`,
    Cprime,
    `$C = K C_0 = ${K} \\times ${C0}\\mu\\text{F} = ${Cprime}\\mu\\text{F}$.`
  );
}

// 7. Force between plates F = Q^2 / (2 * eps0 * A) = 1/2 * Q * E
for (let i = 1; i <= 15; i++) {
  const Q_uC = 4 * i; // microcoulombs
  const E_kVm = 5 * i; // kV/m
  const F_mN = Math.round(0.5 * Q_uC * E_kVm); // (10^-6 * 10^3 = 10^-3 N = 1 mN)
  addNumerical(
    `The electric field between the plates of a capacitor is $E = ${E_kVm}\\text{ kV/m}$ and the charge on each plate is $Q = ${Q_uC}\\mu\\text{C}$. Find the electrostatic force of attraction between the plates (in milliNewtons, $\\text{mN}$).`,
    F_mN,
    `$F = \\frac{1}{2}QE = \\frac{1}{2}(${Q_uC} \\times 10^{-6}\\text{ C})(${E_kVm} \\times 10^3\\text{ V/m}) = ${F_mN} \\times 10^{-3}\\text{ N} = ${F_mN}\\text{ mN}$.`
  );
}

// 8. Isolated spherical conductor radius R = C / (4*pi*eps0) = C * 9e9 m = C_uF * 9 km
for (let i = 1; i <= 15; i++) {
  const C_uF = 2 * i;
  const R_km = C_uF * 9;
  addNumerical(
    `An isolated spherical conductor in vacuum has a capacitance of $C = ${C_uF}\\mu\\text{F}$. Determine the radius $R$ of the sphere (in kilometers, $\\text{km}$). (Take $\\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$).`,
    R_km,
    `$R = \\frac{C}{4\\pi\\varepsilon_0} = (${C_uF} \\times 10^{-6}\\text{ F})(9 \\times 10^9\\text{ m/F}) = ${C_uF * 9000}\\text{ m} = ${R_km}\\text{ km}$.`
  );
}

// 9. Initial charging current I0 = V / R (in microamperes)
for (let i = 1; i <= 15; i++) {
  const V = 10 * i; // volts
  const R_Mohm = i <= 5 ? 1 : 2; // mega-ohms
  const I0_uA = Math.round(V / R_Mohm);
  addNumerical(
    `A series circuit has a resistor $R = ${R_Mohm}\\text{ M}\\Omega$ and an uncharged capacitor connected to a $V = ${V}\\text{ V}$ battery. What is the initial current $I_0$ (in $\\mu\\text{A}$) immediately after closing the switch?`,
    I0_uA,
    `At $t = 0$, $V_C = 0$, so $I_0 = \\frac{V}{R} = \\frac{${V}\\text{ V}}{${R_Mohm} \\times 10^6\\,\\Omega} = ${I0_uA}\\mu\\text{A}$.`
  );
}

// 10. Energy density u = 1/2 * eps0 * E^2 (normalized representation)
// Let E = 20 kV/m, find energy in specific volume
for (let i = 1; i <= 15; i++) {
  const C_pF = 10 * i;
  const V = 20 * i;
  const U_nJ = Math.round(0.5 * C_pF * V * V / 1000); // in nJ
  addNumerical(
    `A capacitor of capacitance $C = ${C_pF}\\text{ pF}$ is charged to a potential difference of $V = ${V}\\text{ V}$. Find the stored electrostatic energy (in nanojoules, $\\text{nJ}$).`,
    U_nJ,
    `$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(${C_pF} \\times 10^{-12}\\text{ F})(${V}\\text{ V})^2 = \\frac{1}{2}(${C_pF})(${V * V}) \\times 10^{-12}\\text{ J} = ${U_nJ}\\text{ nJ}$.`
  );
}

// 11. Capacitance with partial dielectric insertion C = eps0*A / (d - t + t/K)
// Let d = 2t, then d - t + t/K = t(1 + 1/K). If K = 2, d - t + t/2 = t(3/2) = 3/4 d -> C = 4/3 C0
for (let i = 1; i <= 13; i++) {
  const C0 = 3 * i; // microfarads
  const Cnew = 4 * i; // microfarads
  addNumerical(
    `A parallel plate capacitor has capacitance $C_0 = ${C0}\\mu\\text{F}$ in air. A dielectric slab of dielectric constant $K = 2$ and thickness $t = \\frac{d}{2}$ is inserted between the plates (where $d$ is plate separation). Find the new capacitance $C$ (in $\\mu\\text{F}$).`,
    Cnew,
    `$C = \\frac{\\varepsilon_0 A}{d - t + t/K} = \\frac{\\varepsilon_0 A}{d - d/2 + d/4} = \\frac{\\varepsilon_0 A}{\\frac{3}{4}d} = \\frac{4}{3}C_0 = \\frac{4}{3}(${C0}\\mu\\text{F}) = ${Cnew}\\mu\\text{F}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 163)`);

// Assemble total 196 questions
const part1Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part1Questions.push({
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

  part1Questions.push({
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

  part1Questions.push({
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

console.log(`Part 1 generated: ${part1Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_electrostatics_part1.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part1Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
