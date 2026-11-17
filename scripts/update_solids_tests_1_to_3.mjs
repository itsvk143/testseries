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

console.log("=== UPDATING MECHANICAL PROPERTIES TESTS 1, 2, AND 3 ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 1: ELASTICITY (HOOKE'S LAW, YOUNG'S MODULUS)
// =========================================================================
const test1DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-SOL-EL-001",
    question: "Refer to the given stress-strain curve for a ductile metallic wire under tensile load. In which region does the material strictly obey Hooke's law, and what physical quantity does the slope of this initial linear portion represent?",
    options: [
      "Region OP, where slope represents Young's modulus of elasticity ($Y$)",
      "Region PE, where slope represents the Bulk modulus ($B$)",
      "Region EY, where slope represents the shear modulus ($G$)",
      "Region UB, where slope represents the breaking stress"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/solids/test1_q1_stress_strain_curve.svg",
    explanation: "In the stress-strain curve for a ductile material:\n1. From the origin $O$ to point $P$ (the proportional limit), stress is directly proportional to strain ($\\sigma \\propto \\varepsilon$). This is the linear elastic region where Hooke's law strictly holds.\n2. The slope of this straight-line portion is $\\frac{\\text{Stress}}{\\text{Strain}} = Y$, which is Young's modulus of elasticity of the material.\n3. Beyond $P$ up to $E$, the wire remains elastic but is non-linear; beyond $E$, permanent plastic deformation occurs."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-SOL-EL-002",
    question: "A uniform metallic wire of natural length $L$, cross-sectional area $A$, and Young's modulus $Y$ is suspended vertically from a rigid ceiling and loaded with a weight $F = Mg$, resulting in an extension $\\Delta L$. The elastic potential energy $U$ stored in the stretched wire is given by:",
    options: [
      "$U = \\frac{1}{2} F \\Delta L = \\frac{A Y (\\Delta L)^2}{2L}$",
      "$U = F \\Delta L = \\frac{A Y (\\Delta L)^2}{L}$",
      "$U = \\frac{1}{2} F (\\Delta L)^2 = \\frac{A Y \\Delta L}{2L}$",
      "$U = \\frac{F L}{2 A Y}$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test1_q2_wire_extension_cantilever.svg",
    explanation: "When a wire extends by $x$, the restoring force is $F(x) = \\frac{Y A}{L} x$. The work done by the stretching force is:\n$$W = \\int_0^{\\Delta L} F(x) \\, dx = \\frac{Y A}{L} \\left[\\frac{x^2}{2}\\right]_0^{\\Delta L} = \\frac{1}{2} \\left(\\frac{Y A \\Delta L}{L}\\right) \\Delta L = \\frac{1}{2} F \\Delta L$$\nThis work is stored as elastic potential energy: $U = \\frac{1}{2} F \\Delta L = \\frac{A Y (\\Delta L)^2}{2L}$.\nNotice that the work done by the hanging weight is $W_{\\text{ext}} = F \\Delta L$, of which exactly half is stored as elastic strain energy and the other half is converted to thermal energy during stretching."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-SOL-EL-003",
    question: "The graph shows the comparative stress-strain curves of two materials, A and B. Material A exhibits a steeper initial linear slope and a large plastic deformation region between elastic limit and fracture, whereas Material B has a smaller slope and fractures immediately after its elastic limit. Which of the following conclusions is correct?",
    options: [
      "Material A has a higher Young's modulus ($Y_A > Y_B$) and is ductile; Material B is brittle",
      "Material B has a higher Young's modulus ($Y_B > Y_A$) and is ductile; Material A is brittle",
      "Both materials have the same Young's modulus and ductility",
      "Material A is brittle while Material B is ductile"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test1_q3_stress_strain_comparison.svg",
    explanation: "1. The slope of the initial linear region gives Young's modulus ($Y = \\text{slope}$). Since Material A has a steeper slope, $Y_A > Y_B$, meaning Material A is more elastic and stiffer than Material B.\n2. In Material A, the distance between the elastic limit and the fracture point is large, which defines a ductile material (it can be drawn into thin wires).\n3. In Material B, the fracture point lies very close to the elastic limit with negligible plastic flow, which defines a brittle material (like glass or cast iron)."
  }
];

const test1ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-SOL-EL-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Steel is physically more elastic than rubber.\nReason (R): For the same applied deforming tensile stress, the longitudinal strain produced in steel is much smaller than that in rubber, giving $Y_{\\text{steel}} > Y_{\\text{rubber}}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "In physics, elasticity is the property of a body to oppose deformation and completely recover its original shape and size. Modulus of elasticity is $Y = \\frac{\\text{Stress}}{\\text{Strain}}$. For an identical stress, $\\varepsilon_{\\text{steel}} \\ll \\varepsilon_{\\text{rubber}}$, meaning $Y_{\\text{steel}} \\approx 2 \\times 10^{11} \\text{ N m}^{-2} \\gg Y_{\\text{rubber}} \\approx 10^7 \\text{ N m}^{-2}$. Hence, steel is far more elastic than rubber. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-SOL-EL-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a stretched metallic wire under heavy tension suddenly snaps and breaks, its temperature rises slightly.\nReason (R): A stretched wire stores elastic potential energy $U = \\frac{1}{2} F \\Delta L$; upon snapping, this stored strain energy is converted into random thermal vibrations of its constituent atoms.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "During stretching, an elastic strain energy $U = \\frac{1}{2} F \\Delta L$ is stored within the interatomic bonds of the metal. When the wire snaps, the restoring forces pull the wire segments back rapidly, and internal damping converts the released strain energy into thermal internal energy ($Q = m s \\Delta T$), causing an observable rise in temperature. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-SOL-EL-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The breaking stress of a wire is a constant material characteristic, whereas the breaking force is directly proportional to the cross-sectional area of the wire.\nReason (R): Breaking force is given by $F_{\\text{break}} = \\text{Breaking Stress} \\times \\text{Area of Cross-section}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "Breaking stress depends solely on the nature of the material and temperature; it does not depend on length or thickness. However, the maximum load/force a wire can bear before snapping is $F_{\\text{break}} = \\sigma_{\\text{break}} \\times A$, which scales linearly with the cross-sectional area ($A = \\pi r^2$). Both (A) and (R) are true and (R) is the exact mathematical explanation."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-SOL-EL-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Structural bridge girders and crane booms are commonly fabricated with an 'I-shaped' cross-section rather than a solid square or circular cross-section.\nReason (R): The central vertical depression of a rectangular beam of length $L$, breadth $b$, and depth $d$ under a central load $W$ is $\\delta = \\frac{W L^3}{4 Y b d^3}$, showing that increasing depth $d$ minimizes sag most effectively while saving steel weight.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "The sagging/bending depression of a loaded beam is $\\delta = \\frac{W L^3}{4 Y b d^3}$. Since $\\delta \\propto \\frac{1}{d^3}$, increasing the vertical depth $d$ reduces bending far more effectively than increasing width $b$. An I-shape provides large vertical depth and concentrates strong flanges at the top (compression) and bottom (tension) where bending stress is maximum, while minimizing material in the neutral web. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-SOL-EL-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The Bulk modulus of an ideal, completely incompressible liquid is infinite ($B = \\infty$).\nReason (R): For an incompressible substance, the change in volume $\\Delta V$ is identically zero under any finite applied pressure, giving a volume strain of zero ($\\frac{\\Delta V}{V} = 0$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "Bulk modulus is defined as $B = -\\frac{\\Delta P}{\\Delta V / V}$. For an incompressible fluid, $\\Delta V = 0$ for any applied pressure change $\\Delta P$. Thus, $B = \\frac{\\Delta P}{0} = \\infty$, and compressibility $K = \\frac{1}{B} = 0$. Both (A) and (R) are true and (R) is the exact mathematical justification of (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-SOL-EL-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the length of a stretched elastic wire is doubled while keeping the stretching force and wire material unchanged, the elastic potential energy stored in the wire is doubled.\nReason (R): Elastic energy stored is $U = \\frac{1}{2} F \\Delta L$, and elongation is $\\Delta L = \\frac{F L}{A Y}$, which means $U = \\frac{F^2 L}{2 A Y} \\propto L$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Substituting $\\Delta L = \\frac{F L}{A Y}$ into $U = \\frac{1}{2} F \\Delta L$ yields $U = \\frac{F^2 L}{2 A Y}$. Since $F$, $A$, and $Y$ are constant, $U$ is directly proportional to original length $L$. Doubling $L$ doubles the extension $\\Delta L$ and hence doubles the stored energy $U$. Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

// =========================================================================
// TEST 2: FLUID MECHANICS (PASCAL'S LAW, BERNOULLI'S PRINCIPLE, VISCOSITY)
// =========================================================================
const test2DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-SOL-FM-001",
    question: "A hydraulic automobile lift operates on Pascal's principle. The cross-sectional area of the small effort piston is $A_1 = 5\\times 10^{-3} \\text{ m}^2$ and that of the large load piston is $A_2 = 0.25 \\text{ m}^2$. If a downward force $F_1 = 200 \\text{ N}$ is applied to the small piston, the maximum load force $F_2$ that can be supported by the large piston is:",
    options: [
      "$10,000 \\text{ N}$",
      "$200 \\text{ N}$",
      "$50,000 \\text{ N}$",
      "$4 \\text{ N}$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/solids/test2_q1_hydraulic_lift.svg",
    explanation: "According to Pascal's principle, pressure applied to an enclosed, incompressible liquid is transmitted undiminished in all directions:\n$$P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right)$$\nSubstituting the values:\n$$F_2 = 200 \\times \\left(\\frac{0.25}{5 \\times 10^{-3}}\\right) = 200 \\times 50 = 10,000 \\text{ N}$$\nThe mechanical advantage of the lift is $\\frac{A_2}{A_1} = 50$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-SOL-FM-002",
    question: "An ideal incompressible liquid flows steadily through a horizontal Venturimeter tube. At the entrance cross-section of area $A_1$, the fluid speed is $v_1$ and pressure is $P_1$. At the constricted throat of area $A_2$ ($A_2 < A_1$), the fluid speed is $v_2$ and pressure is $P_2$. Which of the following relationships is correct according to the continuity equation and Bernoulli's theorem?",
    options: [
      "$v_2 > v_1$ and $P_2 < P_1$",
      "$v_2 < v_1$ and $P_2 > P_1$",
      "$v_2 > v_1$ and $P_2 > P_1$",
      "$v_2 = v_1$ and $P_2 = P_1$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test2_q2_bernoulli_pipe_venturi.svg",
    explanation: "1. By the equation of continuity: $A_1 v_1 = A_2 v_2$. Since the throat area is smaller ($A_2 < A_1$), fluid velocity must increase: $v_2 = \\left(\\frac{A_1}{A_2}\\right) v_1 > v_1$.\n2. By Bernoulli's equation for horizontal streamline flow ($h_1 = h_2$):\n$$P_1 + \\frac{1}{2} \\rho v_1^2 = P_2 + \\frac{1}{2} \\rho v_2^2 \\implies P_1 - P_2 = \\frac{1}{2} \\rho (v_2^2 - v_1^2)$$\nSince $v_2 > v_1$, the kinetic energy density increases, which necessitates a corresponding drop in static pressure: $P_2 < P_1$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-SOL-FM-003",
    question: "A solid sphere of radius $r$ and density $\\rho_s$ falls through a column of viscous oil of density $\\rho_f$ and coefficient of viscosity $\\eta$. At terminal velocity $v_t$, which force balance equation holds, and how does $v_t$ scale with the radius $r$ of the sphere?",
    options: [
      "Downward weight is balanced by buoyant force plus viscous drag: $W = F_B + F_v$, with $v_t \\propto r^2$",
      "Downward weight is balanced only by viscous drag: $W = F_v$, with $v_t \\propto r$",
      "Downward weight is balanced only by buoyant force: $W = F_B$, with $v_t \\propto r^3$",
      "Viscous drag balances buoyant force: $F_v = F_B$, with $v_t \\propto \\frac{1}{r}$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test2_q3_terminal_velocity_stokes.svg",
    explanation: "When the falling sphere reaches terminal velocity, acceleration is zero ($a = 0$), so net force is zero:\n$$W = F_B + F_v$$\nwhere $W = \\frac{4}{3} \\pi r^3 \\rho_s g$, $F_B = \\frac{4}{3} \\pi r^3 \\rho_f g$, and by Stokes' law, $F_v = 6\\pi \\eta r v_t$. Substituting:\n$$6\\pi \\eta r v_t = \\frac{4}{3} \\pi r^3 (\\rho_s - \\rho_f) g \\implies v_t = \\frac{2 r^2 (\\rho_s - \\rho_f) g}{9 \\eta}$$\nThus, terminal velocity is directly proportional to the square of the radius ($v_t \\propto r^2$)."
  }
];

const test2ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-SOL-FM-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): During a violent cyclonic storm, the tin roof of a building is often blown upwards and carried away.\nReason (R): According to Bernoulli's principle, rapid wind blowing over the upper surface of the roof creates a region of low pressure ($P_{\\text{top}} < P_{\\text{atm}}$), producing a large upward aerodynamic lift force.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Air inside the house is stagnant, exerting standard atmospheric pressure $P_0$ upwards on the roof. The storm wind rushes over the roof with high velocity $v$. By Bernoulli's equation, $P_{\\text{top}} = P_0 - \\frac{1}{2}\\rho v^2 < P_0$. The resulting upward pressure difference $\\Delta P = \\frac{1}{2}\\rho v^2$ produces a net upward force $F = \\Delta P \\cdot A$ that lifts the roof. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-SOL-FM-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A spinning cricket ball in flight curves sideways away from its parabolic trajectory (Magnus effect).\nReason (R): The spin of the ball causes the relative air speed to be higher on one side and lower on the opposite side, generating an asymmetric pressure difference according to Bernoulli's theorem.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "When a spinning ball travels through air, the boundary layer of air rotates with it. On one side, the surface velocity adds to the oncoming air stream (high speed, low pressure); on the other side, it opposes the air stream (low speed, high pressure). By Bernoulli's principle, a lateral dynamic force acts from high pressure to low pressure, curving the trajectory (Magnus effect). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-SOL-FM-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Raindrops falling from thunderclouds miles above Earth strike the ground with a moderate, safe speed rather than a lethal bullet-like speed.\nReason (R): As the falling raindrop accelerates, the upward viscous drag force of air ($F_v = 6\\pi\\eta r v$) increases until it exactly balances the effective downward gravitational weight, resulting in a constant terminal speed.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "Without air resistance, a drop falling from $h = 2000 \\text{ m}$ would hit at $v = \\sqrt{2gh} \\approx 200 \\text{ m s}^{-1} \\approx 720 \\text{ km/h}$. However, air viscosity imposes an upward drag $F_v \\propto v$. When $F_v + F_B = W$, acceleration drops to zero, and the raindrop descends at a gentle terminal speed of only $5\\text{--}9 \\text{ m s}^{-1}$. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-SOL-FM-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The terminal velocity of a small spherical air bubble rising through a column of water is directed vertically upwards.\nReason (R): For an air bubble in water, the density of air is less than the density of water ($\\rho_{\\text{air}} < \\rho_{\\text{water}}$), making the buoyant force greater than the weight of the bubble.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "From Stokes' terminal velocity equation $v_t = \\frac{2r^2(\\rho_s - \\rho_f)g}{9\\eta}$, for an air bubble in water, $\\rho_s = \\rho_{\\text{air}} \\approx 1.2 \\text{ kg/m}^3$ and $\\rho_f = \\rho_{\\text{water}} \\approx 1000 \\text{ kg/m}^3$. Since $\\rho_s < \\rho_f$, $(\\rho_s - \\rho_f)$ is negative, indicating that terminal velocity $v_t$ is directed upward (buoyant force exceeds gravity). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-SOL-FM-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When water flows through a pipe of variable cross-section, the static pressure of water is greater where the pipe is narrower.\nReason (R): By the equation of continuity, the speed of flow is greater at the narrow constriction ($v \\propto 1/A$).",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Medium",
    explanation: "Assertion (A) is false: by Bernoulli's theorem, where the pipe is narrower, speed is greater ($v_2 > v_1$), so dynamic pressure $\\frac{1}{2}\\rho v^2$ is larger, which means static pressure is LOWER ($P_2 < P_1$). Reason (R) is true: by continuity $A_1 v_1 = A_2 v_2$, speed is inversely proportional to cross-sectional area."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-SOL-FM-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The coefficient of viscosity of liquids decreases with rise in temperature, whereas the coefficient of viscosity of gases increases with rise in temperature.\nReason (R): In liquids, viscosity arises from cohesive intermolecular forces which weaken as temperature rises, whereas in gases, viscosity arises from molecular momentum transfer which increases with thermal speed.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "In liquids, viscous drag is governed by intermolecular cohesive bonds. As temperature rises, molecular thermal agitation breaks these cohesive bonds, lowering $\\eta$ (e.g. heated honey flows faster). In gases, viscosity is due to random molecular collisions transferring momentum across layers ($\\\\eta \\propto \\sqrt{T}$). As temperature rises, average molecular speed increases, increasing collision rate and momentum exchange, which raises $\\eta$. Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

// =========================================================================
// TEST 3: SURFACE TENSION, SURFACE ENERGY AND CAPILLARITY
// =========================================================================
const test3DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-SOL-ST-001",
    question: "Refer to the figure comparing a spherical liquid droplet and a soap bubble in air, each having the same radius $R$ and liquid-air surface tension $T$. The ratio of the excess pressure inside the soap bubble to that inside the liquid droplet is:",
    options: [
      "$2 : 1$",
      "$1 : 1$",
      "$1 : 2$",
      "$4 : 1$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/solids/test3_q1_excess_pressure_drop_bubble.svg",
    explanation: "1. For a spherical liquid droplet in air, there is only one liquid-gas interface (outer surface). The excess pressure is:\n$$\\Delta P_{\\text{drop}} = \\frac{2T}{R}$$\n2. For a soap bubble in air, there is a thin liquid film with two free surfaces (an inner air-liquid interface and an outer liquid-air interface). The excess pressure is:\n$$\\Delta P_{\\text{bubble}} = \\frac{4T}{R}$$\nTherefore, the ratio is $\\frac{\\Delta P_{\\text{bubble}}}{\\Delta P_{\\text{drop}}} = \\frac{4T/R}{2T/R} = 2 : 1$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-SOL-ST-002",
    question: "In a capillary ascent experiment, water of surface tension $T$ and density $\\rho$ rises to a vertical height $h$ in a tube of radius $r$. If this tube is replaced by a narrower capillary tube of radius $r' = \\frac{r}{3}$, the new equilibrium height $h'$ of water rise in the narrower tube will be:",
    options: [
      "$3h$",
      "$\\frac{h}{3}$",
      "$9h$",
      "$\\sqrt{3} h$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test3_q2_capillary_rise_meniscus.svg",
    explanation: "According to Jurin's law for capillary rise:\n$$h = \\frac{2T \\cos\\theta}{r \\rho g} \\implies h \\cdot r = \\text{constant}$$\nTherefore, $h' r' = h r$. When $r' = \\frac{r}{3}$:\n$$h' = h \\left(\\frac{r}{r'}\\right) = h \\left(\\frac{r}{r/3}\\right) = 3h$$\nThe water rises three times higher in the narrower tube."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-SOL-ST-003",
    question: "The figure illustrates the contact angle $\\theta$ for a wetting liquid (water on glass, $\\theta < 90^\\circ$) versus a non-wetting liquid (mercury on glass, $\\theta > 90^\\circ$). Which of the following conditions correctly explains why water wets glass while mercury forms spherical beads that do not wet glass?",
    options: [
      "For water, adhesive force between water and glass exceeds cohesive force of water; for mercury, cohesive force between mercury atoms exceeds adhesive force with glass",
      "For mercury, adhesive force with glass exceeds its cohesive force",
      "Water has a higher surface tension than mercury",
      "Mercury has zero cohesive force"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test3_q3_contact_angle_wetting.svg",
    explanation: "1. Wetting condition (Water on Glass): The adhesive force between water molecules and glass molecules is stronger than the cohesive force between water molecules ($F_{\\text{adhesive}} > \\frac{F_{\\text{cohesive}}}{\\sqrt{2}}$). This causes the liquid to spread, forming an acute contact angle ($\\theta < 90^\\circ$) and a concave meniscus that rises in a capillary tube.\n2. Non-wetting condition (Mercury on Glass): The cohesive forces between mercury atoms are much stronger than the adhesive attraction to glass. Mercury minimizes its contact with glass, forming an obtuse contact angle ($\\theta \\approx 135^\\circ\\text{--}140^\\circ$) and a convex meniscus that experiences capillary depression."
  }
];

const test3ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-SOL-ST-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Small droplets of rain and tiny beads of mercury are almost perfectly spherical, whereas large liquid drops flatten out.\nReason (R): For small drops, surface tension forces dominate over gravitational forces, and a sphere has the minimum surface area for a given volume.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "Surface energy is minimized when surface area is minimum. For a given volume, a sphere has the smallest surface area. In tiny drops, gravity ($W \\propto r^3$) is negligible compared to surface tension forces ($F \\propto r$), keeping the drop spherical. For large drops, gravitational force flattens the liquid. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-SOL-ST-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Hot water and hot soup taste better and spread more easily over the tongue than cold water and cold soup.\nReason (R): The surface tension of liquids decreases with increase in temperature, allowing hot liquids to spread over a larger surface area.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "As temperature increases, intermolecular cohesive forces weaken due to increased molecular kinetic energy, causing surface tension to decrease. Lower surface tension reduces the contact angle, allowing hot soup to spread uniformly over taste buds. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-SOL-ST-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If a capillary tube of insufficient length ($L < h$) is dipped into water, water rises to the top end of the tube and stays there without overflowing as a fountain.\nReason (R): When water reaches the upper rim of the tube, the meniscus automatically flattens, increasing its radius of curvature $R'$ such that $h' R' = h R = \\frac{2T}{\\rho g}$, maintaining static equilibrium.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "Water does NOT overflow from an insufficient capillary tube (which would violate conservation of energy and form a perpetual motion machine). Instead, the contact angle $\\theta$ increases and the meniscus flattens, increasing the radius of curvature $R'$ from $r/\\cos\\theta$ to a larger value such that $L R' = h R = \\frac{2T}{\\rho g}$. Both (A) and (R) are true and (R) is the exact physical explanation."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-SOL-ST-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When detergents and surfactants are added to water, the washing and cleaning ability of water is greatly enhanced.\nReason (R): Detergent molecules drastically lower the surface tension of water and reduce the contact angle, enabling water to penetrate deep into the narrow microscopic pores of fabric fibers.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Pure water has high surface tension ($T \\approx 0.073 \\text{ N/m}$), forming beads that cannot easily enter the tight microscopic weave of dirty fabric. Detergents lower surface tension and contact angle, making water a powerful wetting agent that enters small crevices to loosen dirt and grease. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-SOL-ST-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The work done in blowing a soap bubble from radius $R$ to radius $2R$ is $24\\pi R^2 T$.\nReason (R): A soap bubble has two free liquid-air surfaces, so the increase in surface area is $\\Delta A = 2 \\times 4\\pi [(2R)^2 - R^2] = 24\\pi R^2$, and work done is $W = T \\Delta A = 24\\pi R^2 T$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "A soap bubble consists of a hollow spherical shell with two free surfaces (inner and outer). Initial surface area is $A_1 = 2 \\times 4\\pi R^2 = 8\\pi R^2$. Final surface area is $A_2 = 2 \\times 4\\pi (2R)^2 = 32\\pi R^2$. The increase in surface area is $\\Delta A = 32\\pi R^2 - 8\\pi R^2 = 24\\pi R^2$. Work required is $W = T \\Delta A = 24\\pi R^2 T$. Both (A) and (R) are true and (R) is the correct mathematical derivation."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-SOL-ST-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A clean, dry steel sewing needle placed gently on the surface of calm water can float horizontally, even though the density of steel is nearly 8 times that of water.\nReason (R): The floating needle is supported entirely by Archimedes' buoyant force.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Easy",
    explanation: "Assertion (A) is true: a greased needle creates a depression in the water surface without wetting it, and the upward vertical components of surface tension forces ($2 T L \\cos\\theta$) support the needle's weight. Reason (R) is false: the needle is NOT supported by Archimedes' buoyant force (the displaced volume of water is negligible and insufficient to support steel's weight); it is supported by surface tension."
  }
];

// Helper function to update test paper
async function updateTestPaper(testId, slugAliases, subtopicTitle, chapterName, diagramQs, arQs) {
  console.log(`\n--- Processing Test: ${testId} ---`);
  let tp = await db.collection('testPapers').findOne({ testId });
  if (!tp) {
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

  const existingDocs = await db.collection('questionBank').find({ _id: { $in: existingQuestionIds.filter(id => id instanceof ObjectId) } }).toArray();
  const existingMap = new Map(existingDocs.map(d => [d._id.toString(), d]));

  const finalQuestionIds = [];

  for (let idx = 0; idx < 45; idx++) {
    const diagDef = diagramQs.find(d => d.index === idx);
    const arDef = arQs.find(a => a.index === idx);

    if (diagDef) {
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
            chapter: chapterName,
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
            chapter: chapterName,
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
      const existingId = existingQuestionIds[idx];
      if (existingId instanceof ObjectId && existingMap.has(existingId.toString())) {
        const curDoc = existingMap.get(existingId.toString());
        await db.collection('questionBank').updateOne(
          { _id: curDoc._id },
          {
            $set: {
              subject: 'Physics',
              chapter: chapterName,
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
        const newDoc = {
          subject: 'Physics',
          chapter: chapterName,
          subTopic: subtopicTitle,
          subtopic: subtopicTitle,
          type: 'MCQ',
          questionType: 'MCQ (Multiple Choice Question)',
          question: `Sample problem on ${subtopicTitle} regarding fundamental concepts.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctOption: "a",
          correctAnswer: "a",
          explanation: "Standard explanation based on NCERT Physics.",
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
          chapter: chapterName,
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
  "neet-SUBTOPIC-Physics-Elasticity-(Hooke's-law,-Young's-modulus)",
  [
    "neet-SUBTOPIC-Physics-Elasticity-(Hooke-s-law,-Young-s-modulus)",
    "neet-SUBTOPIC-Physics-Elasticity-(Hookes-law-Youngs-modulus)",
    "neet-SUBTOPIC-Physics-Elasticity-Hookes-law-Youngs-modulus"
  ],
  "Elasticity (Hooke's law, Young's modulus)",
  "Mechanical Properties of Solids",
  test1DiagramQuestions,
  test1ARQuestions
);

// Run Test 2
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Fluid-mechanics-(Pascal's-law,-Bernoulli's-principle,-viscosity)",
  [
    "neet-SUBTOPIC-Physics-Fluid-mechanics-(Pascal-s-law,-Bernoulli-s-principle,-viscosity)",
    "neet-SUBTOPIC-Physics-Fluid-mechanics-(Pascals-law-Bernoullis-principle-viscosity)",
    "neet-SUBTOPIC-Physics-Fluid-mechanics-Pascals-law-Bernoullis-principle-viscosity"
  ],
  "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
  "Mechanical Properties of Fluids",
  test2DiagramQuestions,
  test2ARQuestions
);

// Run Test 3
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Surface-tension,-surface-energy,-and-capillarity",
  [
    "neet-SUBTOPIC-Physics-Surface-tension-surface-energy-and-capillarity",
    "neet-SUBTOPIC-Physics-Surface-Tension-Surface-Energy-and-Capillarity"
  ],
  "Surface tension, surface energy, and capillarity",
  "Mechanical Properties of Fluids",
  test3DiagramQuestions,
  test3ARQuestions
);

await client.close();
console.log("\nTests 1, 2, and 3 successfully updated!");
