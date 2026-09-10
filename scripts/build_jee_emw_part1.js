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

const subTopic = "Displacement current";
const chapter = "Electromagnetic Waves";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Displacement current
const arData = [
  {
    a: "Ampere's original circuital law $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c$ is logically inconsistent for time-varying electric fields.",
    r: "When applied to a closed loop around the wire leading to a charging capacitor, different open surfaces bounded by the same loop yield contradictory values of enclosed current.",
    ans: 0,
    exp: "A flat surface piercing the conducting wire encloses conduction current $I_c$, while a balloon-shaped surface passing between the capacitor plates encloses zero conduction current. Maxwell resolved this discrepancy by introducing displacement current $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$."
  },
  {
    a: "Inside the region between the plates of a charging capacitor, a magnetic field is produced even in the absence of moving free charges.",
    r: "A time-varying electric field acts as a source of magnetic field through displacement current, in accordance with the Ampere-Maxwell law $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$.",
    ans: 0,
    exp: "Between the capacitor plates there is vacuum or a dielectric, so conduction current $I_c = 0$. However, the accumulating charge generates a changing electric field $\\frac{dE}{dt} \\neq 0$, which gives rise to displacement current and induces a magnetic field."
  },
  {
    a: "The total current $I = I_c + I_d$ satisfies the continuity condition across any cross-section of a charging circuit.",
    r: "At every instant, the displacement current between the capacitor plates equals the conduction current in the connecting wires.",
    ans: 0,
    exp: "The charge on the plates is $q(t)$, so conduction current is $I_c = \\frac{dq}{dt}$. Between the plates, flux is $\\Phi_E = E A = \\frac{q}{\\varepsilon_0}$. Thus $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\frac{dq}{dt} = I_c$. Current continuity is preserved everywhere."
  },
  {
    a: "The displacement current density between the parallel plates of a capacitor is directly proportional to the time rate of change of the electric field.",
    r: "The displacement current density is given by $j_d = \\varepsilon_0 \\frac{\\partial E}{\\partial t}$.",
    ans: 0,
    exp: "By definition, displacement current is $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\varepsilon_0 A \\frac{dE}{dt}$ for a uniform field. Dividing by plate area $A$ gives $j_d = \\frac{I_d}{A} = \\varepsilon_0 \\frac{\\partial E}{\\partial t}$."
  },
  {
    a: "The induced magnetic field at the exact central axis between two circular parallel plates of a charging capacitor is zero.",
    r: "The magnetic field inside the circular plates of radius $R$ at a radial distance $r \\le R$ is $B(r) = \\frac{\\mu_0 I_d r}{2\\pi R^2}$, which vanishes as $r \\to 0$.",
    ans: 0,
    exp: "By Ampere-Maxwell law for a circular path of radius $r$, $B(2\\pi r) = \\mu_0 I_{d,\\text{enclosed}} = \\mu_0 I_d \\left(\\frac{\\pi r^2}{\\pi R^2}\\right)$. Solving gives $B(r) = \\frac{\\mu_0 I_d r}{2\\pi R^2}$. At the axis ($r = 0$), $B = 0$."
  },
  {
    a: "Between the plates of a charging circular capacitor, the induced magnetic field increases linearly with distance from the central axis up to the edge of the plates.",
    r: "The electric flux enclosed by an Amperian loop of radius $r \\le R$ is proportional to the area $\\pi r^2$, while the circumference scales as $2\\pi r$.",
    ans: 0,
    exp: "Since $\\oint \\vec{B} \\cdot d\\vec{l} = B(2\\pi r) = \\mu_0 \\varepsilon_0 \\left(\\pi r^2 \\frac{dE}{dt}\\right)$, we find $B = \\frac{\\mu_0 \\varepsilon_0 r}{2}\\frac{dE}{dt} \\propto r$. Hence $B$ increases linearly with $r$ up to $r = R$."
  },
  {
    a: "Outside the circular plates of a charging capacitor ($r > R$), the induced magnetic field decreases inversely with the distance $r$.",
    r: "For $r > R$, the Amperian loop encloses the entire displacement current $I_d$, yielding $B(r) = \\frac{\\mu_0 I_d}{2\\pi r}$.",
    ans: 0,
    exp: "For an Amperian circle of radius $r > R$, all electric field lines are enclosed, so the enclosed displacement current is constant and equal to total $I_d$. Thus $B(2\\pi r) = \\mu_0 I_d \\implies B(r) = \\frac{\\mu_0 I_d}{2\\pi r}$."
  },
  {
    a: "When a capacitor is connected across a steady DC voltage source and has become fully charged, the displacement current between its plates is zero.",
    r: "Once fully charged, the potential difference across the plates is constant, so $\\frac{dE}{dt} = 0$, leading to zero displacement current.",
    ans: 0,
    exp: "In steady state with DC, the charge on the capacitor is constant ($q = CV$). Since $\\frac{dq}{dt} = 0$, both the conduction current in the wires and the displacement current between the plates vanish."
  },
  {
    a: "Displacement current possesses the same dimensions and SI unit as conduction current.",
    r: "Displacement current $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$ has units $[\\text{F/m}] \\cdot [\\text{V}\\cdot\\text{m/s}] = \\text{F}\\cdot\\text{V/s} = \\text{C/s} = \\text{A}$.",
    ans: 0,
    exp: "Since $\\varepsilon_0 = \\frac{\\text{C}}{\\text{V} \\cdot \\text{m}}$ and $[\\Phi_E] = \\text{V} \\cdot \\text{m}$, we have $[I_d] = \\frac{\\text{C}}{\\text{V} \\cdot \\text{m}} \\times \\frac{\\text{V} \\cdot \\text{m}}{\\text{s}} = \\text{A}$ (Ampere). (R) correctly explains (A)."
  },
  {
    a: "The Poynting vector between the plates of a charging circular parallel plate capacitor points radially inward toward the central axis.",
    r: "The electric field $\\vec{E}$ is directed from the positive to the negative plate, and the induced magnetic field $\\vec{B}$ forms concentric circular loops around the axis, giving $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B})$ directed radially inward.",
    ans: 0,
    exp: "If $\\vec{E}$ is in the $+z$ direction and $\\vec{B}$ is in the $+\\hat{\\phi}$ azimuthal direction, $\\vec{E} \\times \\vec{B} = E \\hat{z} \\times B \\hat{\\phi} = -E B \\hat{r}$ (radially inward). This represents electromagnetic energy flowing from the outer space into the capacitor volume."
  },
  {
    a: "Electromagnetic energy entering the volume between capacitor plates via the Poynting vector equals the rate of increase of electrostatic energy stored in the capacitor.",
    r: "Integrating the Poynting vector over the cylindrical boundary surface of the capacitor gives $\\oint \\vec{S} \\cdot d\\vec{A} = V I_c = \\frac{d}{dt}\\left(\\frac{1}{2} C V^2\\right)$.",
    ans: 0,
    exp: "At $r = R$, $S = \\frac{1}{\\mu_0} E B = \\frac{1}{\\mu_0} \\left(\\frac{V}{d}\\right) \\left(\\frac{\\mu_0 I_c}{2\\pi R}\\right) = \\frac{V I_c}{2\\pi R d}$. Multiplying by cylindrical area $2\\pi R d$ gives the power input $P = V I_c = \\frac{d U_E}{dt}$."
  },
  {
    a: "If an alternating voltage $V(t) = V_0 \\sin(\\omega t)$ is applied across a capacitor, the displacement current leads the voltage by a phase difference of $\\frac{\\pi}{2}$.",
    r: "The displacement current is given by $I_d = C \\frac{dV}{dt} = \\omega C V_0 \\cos(\\omega t) = \\omega C V_0 \\sin\\left(\\omega t + \\frac{\\pi}{2}\\right)$.",
    ans: 0,
    exp: "Since $I_d = C \\frac{dV}{dt}$, differentiating $\\sin(\\omega t)$ gives $\\omega \\cos(\\omega t) = \\omega \\sin(\\omega t + \\pi/2)$. Thus displacement current leads the applied voltage by $90^\\circ$."
  },
  {
    a: "Displacement current produces the same magnetic effect as a conduction current of equal magnitude.",
    r: "In the Ampere-Maxwell equation $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d)$, both $I_c$ and $I_d$ act as symmetric sources of the magnetic field.",
    ans: 0,
    exp: "Maxwell's formulation treats displacement current and conduction current as equivalent in their ability to generate a circuital magnetic field $\\vec{B}$."
  },
  {
    a: "If a dielectric of dielectric constant $K$ completely fills the space between capacitor plates, the displacement current for a given $\\frac{dE}{dt}$ is multiplied by $K$.",
    r: "In a material medium of permittivity $\\varepsilon = K\\varepsilon_0$, the displacement current is given by $I_d = \\varepsilon \\frac{d\\Phi_E}{dt} = K \\varepsilon_0 \\frac{d\\Phi_E}{dt}$.",
    ans: 0,
    exp: "In a dielectric, displacement current includes both vacuum displacement current $\\varepsilon_0 \\frac{dE}{dt}$ and the polarization current density $\\frac{\\partial P}{\\partial t}$, combining to $D = \\varepsilon E = K\\varepsilon_0 E$. Thus $I_d = K \\varepsilon_0 \\frac{d\\Phi_E}{dt}$."
  },
  {
    a: "Gauss's law for magnetism $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ implies that isolated magnetic monopoles do not exist.",
    r: "Magnetic field lines are continuous closed loops without beginning or end, so the net magnetic flux passing through any arbitrary closed surface is always zero.",
    ans: 0,
    exp: "Because magnetic field lines form continuous closed loops, the number of lines entering any closed surface must equal the number of lines exiting it. Hence no net magnetic charge (monopole) exists."
  },
  {
    a: "A stationary electric charge cannot produce an electromagnetic wave.",
    r: "A stationary charge produces only a static electric field that does not change with time, so no time-varying magnetic field or self-sustaining wave can be generated.",
    ans: 0,
    exp: "According to Maxwell's equations, a propagating electromagnetic wave requires mutually regenerating time-varying electric and magnetic fields ($\\frac{\\partial E}{\\partial t} \\neq 0$ and $\\frac{\\partial B}{\\partial t} \\neq 0$). A static charge has $\\frac{\\partial E}{\\partial t} = 0$ and $B = 0$."
  },
  {
    a: "An electric charge moving with constant velocity does not radiate electromagnetic waves.",
    r: "Although a steadily moving charge creates a magnetic field, the electric and magnetic fields do not undergo acceleration-induced radiation.",
    ans: 0,
    exp: "A charge moving at constant velocity produces steady fields in its rest frame, and energy does not detach to form radiation. Only accelerated (or decelerated) charges produce radiation that carries away energy."
  },
  {
    a: "Maxwell's equations predict that electromagnetic waves propagate in vacuum with speed $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$.",
    r: "Combining Faraday's law of induction and the Ampere-Maxwell law in vacuum leads directly to wave equations for $\\vec{E}$ and $\\vec{B}$ with wave speed $v = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$.",
    ans: 0,
    exp: "Taking the curl of $\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ and substituting $\\nabla \\times \\vec{B} = \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ yields $\\nabla^2 \\vec{E} = \\mu_0 \\varepsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2}$. Comparing with standard wave equation $\\nabla^2 \\vec{E} = \\frac{1}{v^2}\\frac{\\partial^2 \\vec{E}}{\\partial t^2}$ gives $v = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = c$."
  },
  {
    a: "During the discharging of a capacitor through a resistor, the direction of the displacement current between the plates is opposite to that during charging.",
    r: "During discharging, the electric field between the plates decreases with time ($\\frac{dE}{dt} < 0$), so the displacement current vector points opposite to the electric field.",
    ans: 0,
    exp: "Since $\\vec{j}_d = \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$, when $\\vec{E}$ decreases, $\\frac{\\partial \\vec{E}}{\\partial t}$ points antiparallel to $\\vec{E}$. During charging $\\frac{\\partial \\vec{E}}{\\partial t}$ is in the direction of $\\vec{E}$. Thus the displacement current reverses direction."
  },
  {
    a: "A parallel plate capacitor is charged with a constant current $I_0$. If the plate separation is slowly doubled while maintaining $I_0$, the displacement current remains $I_0$.",
    r: "Displacement current between capacitor plates depends strictly on $\\frac{dq}{dt} = I_c$, which is held constant at $I_0$ independent of plate separation.",
    ans: 0,
    exp: "Since $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\varepsilon_0 \\frac{d}{dt}\\left(\\frac{q}{\\varepsilon_0}\\right) = \\frac{dq}{dt} = I_0$, the displacement current depends only on the charging rate of charge, not on the separation $d$."
  },
  {
    a: "The ratio of conduction current density to displacement current density in a good conductor for low frequencies is extremely large.",
    r: "In a conducting medium, conduction current density is $j_c = \\sigma E$, while displacement current density is $j_d = \\varepsilon \\omega E$, so $\\frac{j_c}{j_d} = \\frac{\\sigma}{\\varepsilon \\omega} \\gg 1$ for metals at standard frequencies.",
    ans: 0,
    exp: "For copper, $\\sigma \\approx 6 \\times 10^7\\,\\text{S/m}$. Even at optical frequencies, $\\frac{\\sigma}{\\varepsilon_0 \\omega} \\gg 1$. Hence displacement current in good conductors is entirely negligible compared to conduction current."
  },
  {
    a: "Displacement current does not involve real physical transport of electric charges through space.",
    r: "Displacement current arises purely from the temporal rate of variation of electric displacement field $\\vec{D}$ in space.",
    ans: 0,
    exp: "Unlike conduction current which involves drifting electrons or ions, displacement current in vacuum is a field property ($I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$) that produces magnetic fields without charge flow."
  },
  {
    a: "Between circular capacitor plates of radius $R$, the induced magnetic field reaches its maximum value at the perimeter $r = R$.",
    r: "For $r \\le R$, $B(r) \\propto r$, and for $r \\ge R$, $B(r) \\propto \\frac{1}{r}$, so the boundary $r = R$ is the global maximum of $B(r)$.",
    ans: 0,
    exp: "Inside, $B(r) = \\frac{\\mu_0 I_d r}{2\\pi R^2}$ increases linearly from 0 to $\\frac{\\mu_0 I_d}{2\\pi R}$. Outside, $B(r) = \\frac{\\mu_0 I_d}{2\\pi r}$ decays as $1/r$. The peak occurs precisely at $r = R$."
  },
  {
    a: "In an electromagnetic wave propagating in free space, the conduction current is zero everywhere.",
    r: "Free space is a perfect dielectric insulator with electrical conductivity $\\sigma = 0$, so no free charge carriers exist to support conduction current.",
    ans: 0,
    exp: "In vacuum, $\\sigma = 0 \\implies \\vec{j}_c = 0$. The wave propagates solely via mutually regenerating time-varying $\\vec{E}$ and $\\vec{B}$ fields governed by displacement current."
  },
  {
    a: "The integral form of Faraday's law of induction is $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$.",
    r: "A changing magnetic flux through any surface induces a non-conservative electric field along the closed boundary contour.",
    ans: 0,
    exp: "Faraday's law states that the line integral of induced electric field around a closed loop equals the negative time rate of change of enclosed magnetic flux. This induced electric field has non-zero circulation, unlike electrostatic fields."
  },
  {
    a: "The displacement current between the plates of a parallel plate capacitor is independent of the plate area for a given charging current $I_c$.",
    r: "The total displacement current equals the conduction current $I_c$ regardless of the geometric cross-sectional area $A$ of the plates.",
    ans: 0,
    exp: "Although the displacement current density $j_d = \\frac{I_c}{A}$ decreases as plate area increases, the total displacement current $I_d = \\int j_d dA = I_c$ remains unchanged."
  }
];

// 7 Authentic MCQs for Displacement current
const mcqData = [
  {
    q: "A parallel plate capacitor with circular plates of radius $R = 0.1\\,\\text{m}$ is being charged by an external current of $1.5\\,\\text{A}$. The magnitude of the induced magnetic field at a radial distance of $r = 0.05\\,\\text{m}$ from the central axis between the plates is:",
    opts: [
      "$1.5 \\times 10^{-6}\\,\\text{T}$",
      "$3.0 \\times 10^{-6}\\,\\text{T}$",
      "$6.0 \\times 10^{-6}\\,\\text{T}$",
      "$0.75 \\times 10^{-6}\\,\\text{T}$"
    ],
    ans: 0,
    exp: "Inside circular plates ($r \\le R$), $B(r) = \\frac{\\mu_0 I_d r}{2\\pi R^2}$. Since $I_d = I_c = 1.5\\,\\text{A}$, $B = \\frac{(4\\pi \\times 10^{-7}) \\times 1.5 \\times 0.05}{2\\pi \\times (0.1)^2} = \\frac{2 \\times 10^{-7} \\times 1.5 \\times 0.05}{0.01} = 1.5 \\times 10^{-6}\\,\\text{T}$."
  },
  {
    q: "A parallel plate capacitor consists of two circular plates of radius $R$. If the charging current is $I$, what is the induced magnetic field at a point outside the plates at a distance $r = 2R$ from the central axis?",
    opts: [
      "$\\frac{\\mu_0 I}{4\\pi R}$",
      "$\\frac{\\mu_0 I}{2\\pi R}$",
      "$\\frac{\\mu_0 I}{8\\pi R}$",
      "$\\frac{\\mu_0 I}{\\pi R}$"
    ],
    ans: 0,
    exp: "For $r \\ge R$, the Amperian loop encloses the entire displacement current $I_d = I$. Thus $\\oint \\vec{B} \\cdot d\\vec{l} = B(2\\pi r) = \\mu_0 I \\implies B(2R) = \\frac{\\mu_0 I}{2\\pi (2R)} = \\frac{\\mu_0 I}{4\\pi R}$."
  },
  {
    q: "A parallel-plate capacitor with capacitance $C = 20\\,\\mu\\text{F}$ is connected to an alternating AC source $V(t) = 200\\sqrt{2} \\sin(100\\pi t)\\,\\text{V}$. The peak value of the displacement current between the plates is:",
    opts: [
      "$0.4\\pi\\sqrt{2}\\,\\text{A}$",
      "$0.2\\pi\\sqrt{2}\\,\\text{A}$",
      "$0.4\\pi\\,\\text{A}$",
      "$2\\pi\\,\\text{A}$"
    ],
    ans: 0,
    exp: "Displacement current is $I_d(t) = C \\frac{dV}{dt} = C \\omega V_0 \\cos(\\omega t)$. Peak value is $I_{d0} = \\omega C V_0 = (100\\pi) \\times (20 \\times 10^{-6}) \\times (200\\sqrt{2}) = 0.4\\pi\\sqrt{2}\\,\\text{A} \\approx 1.777\\,\\text{A}$."
  },
  {
    q: "The electric field between the plates of a parallel plate capacitor varies with time as $E(t) = (5.0 \\times 10^5 - 2.0 \\times 10^4 t)\\,\\text{V/m}$, where $t$ is in seconds. If the plate area is $A = 0.2\\,\\text{m}^2$, the displacement current between the plates is (take $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$):",
    opts: [
      "$-3.54 \\times 10^{-8}\\,\\text{A}$",
      "$3.54 \\times 10^{-8}\\,\\text{A}$",
      "$-1.77 \\times 10^{-8}\\,\\text{A}$",
      "$7.08 \\times 10^{-8}\\,\\text{A}$"
    ],
    ans: 0,
    exp: "Displacement current $I_d = \\varepsilon_0 A \\frac{dE}{dt}$. Here $\\frac{dE}{dt} = -2.0 \\times 10^4\\,\\text{V/(m}\\cdot\\text{s)}$. Thus $I_d = (8.85 \\times 10^{-12}) \\times 0.2 \\times (-2.0 \\times 10^4) = -3.54 \\times 10^{-8}\\,\\text{A}$."
  },
  {
    q: "Which of the following equations represents Maxwell's modification of Ampere's law?",
    opts: [
      "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$",
      "$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$",
      "$\\oint \\vec{B} \\cdot d\\vec{A} = 0$",
      "$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enc}}}{\\varepsilon_0}$"
    ],
    ans: 0,
    exp: "Maxwell added the displacement current term $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$ to Ampere's circuital law, resulting in $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d) = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$."
  },
  {
    q: "A parallel plate capacitor is being charged such that the rate of change of electric flux is $\\frac{d\\Phi_E}{dt} = 1.13 \\times 10^{11}\\,\\text{V}\\cdot\\text{m/s}$. Taking $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{C}^2/(\\text{N}\\cdot\\text{m}^2)$, the displacement current is approximately:",
    opts: [
      "$1.0\\,\\text{A}$",
      "$0.5\\,\\text{A}$",
      "$2.0\\,\\text{A}$",
      "$0.1\\,\\text{A}$"
    ],
    ans: 0,
    exp: "$I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = (8.85 \\times 10^{-12}) \\times (1.13 \\times 10^{11}) = 0.99995\\,\\text{A} \\approx 1.0\\,\\text{A}$."
  },
  {
    q: "In a plane electromagnetic wave travelling in free space, what is the ratio of the displacement current density $j_d$ to the term $\\varepsilon_0 \\frac{\\partial E}{\\partial t}$?",
    opts: [
      "$1$",
      "$\\mu_0$",
      "$\\frac{1}{c}$",
      "$c$"
    ],
    ans: 0,
    exp: "By definition in vacuum, displacement current density is $j_d = \\varepsilon_0 \\frac{\\partial E}{\\partial t}$. Hence the ratio is identically 1."
  }
];

// 20 Authentic Numerical questions for Displacement current
const numData = [
  {
    q: "A parallel plate capacitor with circular plates of radius $R = 10\\,\\text{cm}$ is charged by a current of $2\\,\\text{A}$. Find the magnetic field (in $\\mu\\text{T}$) at a distance of $5\\,\\text{cm}$ from the central axis between the plates.",
    ans: 2,
    exp: "Using $B(r) = \\frac{\\mu_0 I_d r}{2\\pi R^2}$ with $r = 0.05\\,\\text{m}$, $R = 0.1\\,\\text{m}$, $I_d = 2\\,\\text{A}$: $B = \\frac{(4\\pi \\times 10^{-7}) \\times 2 \\times 0.05}{2\\pi \\times 0.01} = \\frac{2 \\times 10^{-7} \\times 0.1}{0.01} = 2 \\times 10^{-6}\\,\\text{T} = 2\\,\\mu\\text{T}$."
  },
  {
    q: "A parallel plate capacitor having circular plates of radius $R = 6\\,\\text{cm}$ is being charged. If the electric field between the plates is changing at a rate of $\\frac{dE}{dt} = 10^{13}\\,\\text{V/(m}\\cdot\\text{s)}$, determine the total displacement current (in $\\text{A}$) between the plates. (Take $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, $\\pi = 3.14$, round to nearest integer).",
    ans: 1,
    exp: "$I_d = \\varepsilon_0 A \\frac{dE}{dt} = \\varepsilon_0 (\\pi R^2) \\frac{dE}{dt} = (8.85 \\times 10^{-12}) \\times [3.14 \\times (0.06)^2] \\times 10^{13} = 8.85 \\times 3.14 \\times 0.0036 \\times 10 = 1.00\\,\\text{A}$."
  },
  {
    q: "A parallel plate capacitor has plate area $A = 0.04\\,\\text{m}^2$ and plate separation $d = 2\\,\\text{mm}$. The potential difference between the plates changes at a uniform rate of $\\frac{dV}{dt} = 10^6\\,\\text{V/s}$. If $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, calculate the displacement current in $\\mu\\text{A}$ (rounded to nearest integer).",
    ans: 177,
    exp: "Capacitance $C = \\frac{\\varepsilon_0 A}{d} = \\frac{8.85 \\times 10^{-12} \\times 0.04}{2 \\times 10^{-3}} = 1.77 \\times 10^{-10}\\,\\text{F}$. Displacement current $I_d = C \\frac{dV}{dt} = (1.77 \\times 10^{-10}) \\times 10^6 = 1.77 \\times 10^{-4}\\,\\text{A} = 177\\,\\mu\\text{A}$."
  },
  {
    q: "A circular parallel plate capacitor of radius $R = 20\\,\\text{cm}$ is charged with a constant current of $4\\,\\text{A}$. Find the maximum value of the induced magnetic field $B_{\\text{max}}$ between the plates in $\\mu\\text{T}$.",
    ans: 4,
    exp: "$B_{\\text{max}}$ occurs at $r = R$: $B_{\\text{max}} = \\frac{\\mu_0 I_d}{2\\pi R} = \\frac{4\\pi \\times 10^{-7} \\times 4}{2\\pi \\times 0.20} = \\frac{2 \\times 10^{-7} \\times 4}{0.20} = 4 \\times 10^{-6}\\,\\text{T} = 4\\,\\mu\\text{T}$."
  },
  {
    q: "In a charging capacitor, the displacement current density is $j_d = 1.77\\,\\text{A/m}^2$. If $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, find the rate of change of electric field $\\frac{dE}{dt}$ in units of $10^{11}\\,\\text{V/(m}\\cdot\\text{s)}$.",
    ans: 2,
    exp: "$\\frac{dE}{dt} = \\frac{j_d}{\\varepsilon_0} = \\frac{1.77}{8.85 \\times 10^{-12}} = 0.2 \\times 10^{12} = 2 \\times 10^{11}\\,\\text{V/(m}\\cdot\\text{s)}$. Thus the value is 2."
  },
  {
    q: "A capacitor of capacitance $C = 5\\,\\mu\\text{F}$ is charged through a resistor of $R = 2\\,\\text{M}\\Omega$ by a $20\\,\\text{V}$ battery. At time $t = 0$ the switch is closed. Find the displacement current (in $\\mu\\text{A}$) between the plates at $t = 0$.",
    ans: 10,
    exp: "At $t = 0$, the uncharged capacitor acts as a short circuit ($V_C = 0$). Conduction current is $I_c(0) = \\frac{V}{R} = \\frac{20}{2 \\times 10^6} = 10^{-5}\\,\\text{A} = 10\\,\\mu\\text{A}$. By current continuity, $I_d(0) = I_c(0) = 10\\,\\mu\\text{A}$."
  },
  {
    q: "A parallel plate capacitor is charged by a current $I_0 = 3\\,\\text{A}$. If circular plates of radius $R = 15\\,\\text{cm}$ are used, find the induced magnetic field (in $\\mu\\text{T}$) at a point outside the capacitor at distance $r = 30\\,\\text{cm}$ from the axis.",
    ans: 2,
    exp: "For $r \\ge R$, $B(r) = \\frac{\\mu_0 I_d}{2\\pi r}$. With $r = 0.3\\,\\text{m}$: $B = \\frac{(4\\pi \\times 10^{-7}) \\times 3}{2\\pi \\times 0.3} = \\frac{2 \\times 10^{-7} \\times 3}{0.3} = 2 \\times 10^{-6}\\,\\text{T} = 2\\,\\mu\\text{T}$."
  },
  {
    q: "A capacitor has circular plates of radius $R = 12\\,\\text{cm}$. The magnetic field at $r = 3\\,\\text{cm}$ from the central axis is $1.5\\,\\mu\\text{T}$. Find the magnetic field (in $\\mu\\text{T}$) at $r = 6\\,\\text{cm}$ from the central axis.",
    ans: 3,
    exp: "Inside the plates ($r \\le R$), $B(r) \\propto r$. Therefore $\\frac{B(6\\,\\text{cm})}{B(3\\,\\text{cm})} = \\frac{6}{3} = 2$. Thus $B(6\\,\\text{cm}) = 2 \\times 1.5\\,\\mu\\text{T} = 3\\,\\mu\\text{T}$."
  },
  {
    q: "A parallel-plate capacitor with plates of area $A = 0.5\\,\\text{m}^2$ has an electric field changing at $\\frac{dE}{dt} = 4.52 \\times 10^{11}\\,\\text{V/(m}\\cdot\\text{s)}$. Taking $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, calculate the displacement current (in $\\text{A}$) to the nearest integer.",
    ans: 2,
    exp: "$I_d = \\varepsilon_0 A \\frac{dE}{dt} = (8.85 \\times 10^{-12}) \\times 0.5 \\times (4.52 \\times 10^{11}) = 4.425 \\times 10^{-12} \\times 4.52 \\times 10^{11} \\approx 2.0001\\,\\text{A} \\approx 2\\,\\text{A}$."
  },
  {
    q: "A voltage of $V(t) = 100 \\sin(100 t)\\,\\text{V}$ is applied across a $200\\,\\mu\\text{F}$ capacitor. Find the maximum displacement current in $\\text{A}$.",
    ans: 2,
    exp: "$I_{d\\text{max}} = \\omega C V_0 = 100 \\times (200 \\times 10^{-6}) \\times 100 = 2\\,\\text{A}$."
  },
  {
    q: "Between circular plates of radius $R = 25\\,\\text{cm}$ of a capacitor, the induced magnetic field at distance $r_1 = 10\\,\\text{cm}$ from the axis is $B_1$. At distance $r_2 = 62.5\\,\\text{cm}$ from the axis, the magnetic field is $B_2$. Find the ratio $\\frac{B_1}{B_2}$.",
    ans: 1,
    exp: "For $r_1 = 10\\,\\text{cm} < R$: $B_1 = \\frac{\\mu_0 I_d r_1}{2\\pi R^2} = \\frac{\\mu_0 I_d (0.10)}{2\\pi (0.25)^2} = \\frac{\\mu_0 I_d}{2\\pi} \\times 1.6$. For $r_2 = 62.5\\,\\text{cm} > R$: $B_2 = \\frac{\\mu_0 I_d}{2\\pi r_2} = \\frac{\\mu_0 I_d}{2\\pi (0.625)} = \\frac{\\mu_0 I_d}{2\\pi} \\times 1.6$. Thus $\\frac{B_1}{B_2} = 1$."
  },
  {
    q: "The electric flux through a surface bounded by a circular loop changes at a rate of $\\frac{d\\Phi_E}{dt} = 3.39 \\times 10^{11}\\,\\text{V}\\cdot\\text{m/s}$. Taking $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, find the displacement current in $\\text{A}$ (round to nearest integer).",
    ans: 3,
    exp: "$I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = (8.85 \\times 10^{-12}) \\times (3.39 \\times 10^{11}) \\approx 3.00\\,\\text{A}$."
  },
  {
    q: "A capacitor with capacitance $C = 10\\,\\mu\\text{F}$ is being charged such that the voltage increases at $\\frac{dV}{dt} = 4 \\times 10^5\\,\\text{V/s}$. Find the displacement current in $\\text{A}$.",
    ans: 4,
    exp: "$I_d = C \\frac{dV}{dt} = (10 \\times 10^{-6}) \\times (4 \\times 10^5) = 4\\,\\text{A}$."
  },
  {
    q: "A parallel plate capacitor is charged with a constant current of $I_c = 6\\,\\text{A}$. The plates are circular with radius $R = 10\\,\\text{cm}$. What is the value of $\\oint \\vec{B} \\cdot d\\vec{l}$ (in units of $10^{-7}\\,\\text{T}\\cdot\\text{m}$) around a concentric circle of radius $r = 5\\,\\text{cm}$ between the plates? (Take $\\pi = 3.14$, round to nearest integer).",
    ans: 19,
    exp: "Enclosed displacement current $I_{d,\\text{enc}} = I_d \\left(\\frac{r}{R}\\right)^2 = 6 \\times \\left(\\frac{5}{10}\\right)^2 = 6 \\times 0.25 = 1.5\\,\\text{A}$. From Ampere-Maxwell law, $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{d,\\text{enc}} = (4\\pi \\times 10^{-7}) \\times 1.5 = 6\\pi \\times 10^{-7} \\approx 18.85 \\times 10^{-7}\\,\\text{T}\\cdot\\text{m} \\approx 19 \\times 10^{-7}$."
  },
  {
    q: "A parallel plate capacitor with circular plates of radius $R = 5\\,\\text{cm}$ and separation $d = 1\\,\\text{mm}$ is being charged by a current of $1.0\\,\\text{A}$. What is the magnitude of the Poynting vector $S$ (in $\\text{kW/m}^2$) at the cylindrical edge of the capacitor ($r = R$) when the voltage across the capacitor is $20\\,\\text{V}$? (Take $\\pi = 3.14$, round to nearest integer).",
    ans: 64,
    exp: "$E = \\frac{V}{d} = \\frac{20}{10^{-3}} = 2 \\times 10^4\\,\\text{V/m}$. At $r = R$, $B = \\frac{\\mu_0 I}{2\\pi R} = \\frac{4\\pi \\times 10^{-7} \\times 1.0}{2\\pi \\times 0.05} = 4 \\times 10^{-6}\\,\\text{T}$. $S = \\frac{1}{\\mu_0} E B = \\frac{(2 \\times 10^4)(4 \\times 10^{-6})}{4\\pi \\times 10^{-7}} = \\frac{0.08}{1.2566 \\times 10^{-6}} = 6.366 \\times 10^4\\,\\text{W/m}^2 \\approx 64\\,\\text{kW/m}^2$."
  },
  {
    q: "A circular capacitor of radius $R = 0.5\\,\\text{m}$ has a uniform displacement current density $j_d = 40/\\pi\\,\\text{A/m}^2$. Calculate the total displacement current (in $\\text{A}$) through the capacitor.",
    ans: 10,
    exp: "$I_d = j_d \\times (\\pi R^2) = \\frac{40}{\\pi} \\times \\pi (0.5)^2 = 40 \\times 0.25 = 10\\,\\text{A}$."
  },
  {
    q: "An AC voltage $V = V_0 \\cos(\\omega t)$ with frequency $f = 50\\,\\text{Hz}$ is applied to a capacitor of capacitance $C = 100\\,\\mu\\text{F}$. If the peak displacement current is $I_{d0} = 3.14\\,\\text{A}$, find the peak voltage $V_0$ in volts (take $\\pi = 3.14$).",
    ans: 100,
    exp: "$I_{d0} = \\omega C V_0 = 2\\pi f C V_0 = 2(3.14)(50)(100 \\times 10^{-6}) V_0 = 314 \\times 10^{-4} V_0 = 0.0314 V_0$. Since $0.0314 V_0 = 3.14$, we get $V_0 = 100\\,\\text{V}$."
  },
  {
    q: "In a charging parallel-plate capacitor, the electric field changes at a rate of $2.26 \\times 10^{12}\\,\\text{V/(m}\\cdot\\text{s)}$. If the displacement current is $4\\,\\text{A}$, find the radius of the circular plates in cm (take $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, $\\pi = 3.14$).",
    ans: 25,
    exp: "$I_d = \\varepsilon_0 (\\pi R^2) \\frac{dE}{dt} \\implies R^2 = \\frac{I_d}{\\pi \\varepsilon_0 (dE/dt)} = \\frac{4}{3.14 \\times (8.85 \\times 10^{-12}) \\times (2.26 \\times 10^{12})} = \\frac{4}{3.14 \\times 20.001} = \\frac{4}{62.8} \\approx 0.0637\\,\\text{m}^2 \\implies R = 0.252\\,\\text{m} \\approx 25\\,\\text{cm}$."
  },
  {
    q: "A parallel plate capacitor is discharging with a current of $5\\,\\text{A}$. Find the circulation of the magnetic field $\\oint \\vec{B} \\cdot d\\vec{l}$ along a path surrounding the entire space between the plates, in units of $10^{-6}\\,\\text{T}\\cdot\\text{m}$ (take $\\pi = 3.14$, round to nearest integer).",
    ans: 6,
    exp: "From the Ampere-Maxwell law, $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_d = (4\\pi \\times 10^{-7}) \\times 5 = 20\\pi \\times 10^{-7} = 2\\pi \\times 10^{-6} \\approx 6.28 \\times 10^{-6}\\,\\text{T}\\cdot\\text{m} \\approx 6 \\times 10^{-6}\\,\\text{T}\\cdot\\text{m}$."
  },
  {
    q: "A capacitor with capacitance $C = 2\\,\\mu\\text{F}$ is connected to a battery of $V = 50\\,\\text{V}$. If it is charged through a resistor such that its voltage reaches $25\\,\\text{V}$ in $2\\,\\text{ms}$, what is the average displacement current (in $\\text{mA}$) during this interval?",
    ans: 25,
    exp: "$I_{d,\\text{avg}} = \\frac{\\Delta Q}{\\Delta t} = C \\frac{\\Delta V}{\\Delta t} = (2 \\times 10^{-6}) \\times \\frac{25}{2 \\times 10^{-3}} = 25 \\times 10^{-3}\\,\\text{A} = 25\\,\\text{mA}$."
  }
];

// Combine into part 1 questions
const part1Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part1Questions.push({
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`,
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

const outPath = path.join(__dirname, 'data_jee_emw_part1.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part1Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
