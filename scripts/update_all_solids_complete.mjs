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

console.log("=== COMPREHENSIVE UPDATE & AUDIT OF ALL 5 SOLIDS & ASSOCIATED TESTS ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// Definition of 5 tests
const testsData = [
  // =========================================================================
  // TEST 1: ELASTICITY (HOOKE'S LAW, YOUNG'S MODULUS)
  // =========================================================================
  {
    testId: "neet-SUBTOPIC-Physics-Elasticity-(Hooke's-law,-Young's-modulus)",
    slugAliases: [
      "neet-SUBTOPIC-Physics-Elasticity-(Hooke-s-law,-Young-s-modulus)",
      "neet-SUBTOPIC-Physics-Elasticity-(Hookes-law-Youngs-modulus)",
      "neet-SUBTOPIC-Physics-Elasticity-Hookes-law-Youngs-modulus"
    ],
    title: "Elasticity (Hooke's law, Young's modulus)",
    chapter: "Mechanical Properties of Solids",
    diagramQs: [
      {
        index: 0,
        commercialId: "NEET-PHY-SOL-EL-001",
        question: "The stress-strain curve for a typical structural metal is shown in the diagram. Identify points $P$, $E$, and $U$ on the curve in the correct sequence.",
        options: [
          "Proportional limit, Elastic limit (yield point), Ultimate tensile strength",
          "Yield point, Proportional limit, Fracture point",
          "Elastic limit, Plastic limit, Breaking point",
          "Proportional limit, Fracture point, Ultimate tensile strength"
        ],
        correctOption: "a",
        difficulty: "Easy",
        image: "/images/diagrams/solids/test1_q1_stress_strain_curve.svg",
        explanation: "In a standard tensile stress-strain test for a ductile metal: Point P is the proportional limit where Hooke's law (stress $\\propto$ strain) strictly holds; Point E is the elastic limit (yield point) beyond which permanent plastic deformation begins; and Point U represents the ultimate tensile strength (maximum stress the material can sustain before necking and fracture at F)."
      },
      {
        index: 1,
        commercialId: "NEET-PHY-SOL-EL-002",
        question: "A uniform metallic wire of length $L$ and radius $r$ is suspended vertically from a rigid ceiling. When a mass $M$ is attached to its free lower end, the elongation produced in the wire is $\\Delta L$. If the same load $M$ is suspended from another wire of identical material but of length $2L$ and radius $2r$, what will be the elongation in the second wire?",
        options: [
          "$\\Delta L$",
          "$\\frac{\\Delta L}{2}$",
          "$2\\Delta L$",
          "$\\frac{\\Delta L}{4}$"
        ],
        correctOption: "b",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test1_q2_wire_extension_cantilever.svg",
        explanation: "By Hooke's law, elongation $\\Delta L = \\frac{F L}{A Y} = \\frac{M g L}{\\pi r^2 Y}$. For the second wire: $\\Delta L' = \\frac{M g (2L)}{\\pi (2r)^2 Y} = \\frac{2 M g L}{4 \\pi r^2 Y} = \\frac{1}{2} \\left( \\frac{M g L}{\\pi r^2 Y} \\right) = \\frac{\\Delta L}{2}$. Therefore, the extension is halved."
      },
      {
        index: 2,
        commercialId: "NEET-PHY-SOL-EL-003",
        question: "The diagram depicts stress-strain graphs for two distinct materials, $A$ and $B$, plotted on identical scales. Based on these curves, which of the following comparative statements is completely correct?",
        options: [
          "Material B has a higher Young's modulus and is more ductile than Material A",
          "Material A is brittle, while Material B is ductile",
          "Material A has a higher Young's modulus and is more ductile than Material B",
          "Material B has higher tensile strength than Material A"
        ],
        correctOption: "c",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test1_q3_stress_strain_comparison.svg",
        explanation: "1. The slope of the linear elastic region gives Young's modulus ($Y = \\frac{\\text{stress}}{\\text{strain}}$). The slope of curve A is steeper than curve B, so $Y_A > Y_B$.\n2. Material A has a large plastic region between its elastic limit and fracture point, indicating high ductility. Material B fractures immediately after its elastic limit with virtually no plastic deformation, indicating it is brittle."
      }
    ],
    arQs: [
      {
        index: 39,
        commercialId: "NEET-PHY-SOL-EL-040",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Steel is scientifically considered more elastic than rubber.\nReason (R): For the same deforming force applied to identical wires of steel and rubber, steel produces a much smaller strain than rubber, meaning its Young's modulus ($Y = \\frac{\\text{stress}}{\\text{strain}}$) is vastly greater.",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Medium",
        explanation: "In physics, elasticity is defined by the resistance a body offers to deformation and the magnitude of the restoring force generated per unit strain. Since Young's modulus of steel ($Y_{\\text{steel}} \\approx 2 \\times 10^{11}\\text{ N m}^{-2}$) is roughly 20,000 times greater than that of rubber ($Y_{\\text{rubber}} \\approx 10^7\\text{ N m}^{-2}$), steel requires far more stress for a given strain. Both (A) and (R) are true and (R) correctly explains (A)."
      },
      {
        index: 40,
        commercialId: "NEET-PHY-SOL-EL-041",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a metallic wire is stretched by an external tensile load within its elastic limit, work is done on the wire and stored as elastic potential energy.\nReason (R): Young's modulus is an intensive material property that depends only on the nature of the material and temperature, and is independent of the wire's length and radius.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Medium",
        explanation: "Assertion is true: the work done in stretching the wire against internal interatomic restoring forces is stored as elastic potential energy ($U = \\frac{1}{2} F \\Delta L = \\frac{1}{2} \\frac{Y A}{L} (\\Delta L)^2$). Reason is also true: Young's modulus is an intrinsic material property that does not depend on dimensions. However, Reason does not explain why energy is stored during stretching. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
      },
      {
        index: 41,
        commercialId: "NEET-PHY-SOL-EL-042",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The extension and restoring force in a stretched helical spring are governed by the shear modulus (modulus of rigidity) of the spring material rather than its Young's modulus.\nReason (R): When a helical spring is stretched longitudinally, the wire of the spring undergoes simple linear tensile elongation without any twisting.",
        options: AR_OPTIONS,
        correctOption: "c",
        difficulty: "Hard",
        explanation: "Assertion is true: pulling the ends of a helical spring subjects the wire to torsional shear (twisting) along its circumference. The spring constant depends on the shear modulus $\\eta$: $k = \\frac{\\eta r^4}{4 N R^3}$. Reason is false because the wire undergoes torsional twisting and shear strain, not simple linear tensile elongation. Thus, (A) is true but (R) is false."
      },
      {
        index: 42,
        commercialId: "NEET-PHY-SOL-EL-043",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The breaking stress of a metallic wire depends directly on its length and halves when the wire is cut in half.\nReason (R): The maximum breaking force a wire can withstand is proportional to its cross-sectional area ($F_{\\text{break}} = \\sigma_{\\text{break}} A$) and is independent of its length.",
        options: AR_OPTIONS,
        correctOption: "d",
        difficulty: "Hard",
        explanation: "Assertion is false: breaking stress is an intensive characteristic property of the material and does not change when the length of the wire is altered. Reason is true: the total breaking force depends directly on cross-sectional area ($F = \\sigma A$) and is independent of length. Thus, (A) is false but (R) is true."
      },
      {
        index: 43,
        commercialId: "NEET-PHY-SOL-EL-044",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Structural steel girders used in bridges and overhead crane tracks are engineered with an I-shaped cross-section rather than a solid square cross-section of the same mass.\nReason (R): The central depression of a loaded beam supported at its ends is $\\delta = \\frac{W L^3}{4 Y b d^3}$; an I-section provides a large effective depth $d$ with minimal material, vastly reducing bending depression while preventing buckling.",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Medium",
        explanation: "Since beam deflection $\\delta$ is inversely proportional to the cube of depth ($d^3$) and only linearly proportional to width ($b$), increasing depth is far more effective at reducing sagging. The I-shape concentrates steel in the top and bottom flanges (maximum tensile and compressive bending stresses) while keeping the web thin, saving material and weight. Both (A) and (R) are true and (R) correctly explains (A)."
      },
      {
        index: 44,
        commercialId: "NEET-PHY-SOL-EL-045",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The bulk modulus of an ideal gas in an adiabatic process ($B_{\\text{ad}} = \\gamma P$) is always greater than its bulk modulus in an isothermal process ($B_{\\text{iso}} = P$).\nReason (R): For a monoatomic ideal gas, the ratio of specific heats is $\\gamma = \\frac{5}{3} \\approx 1.67$.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Easy",
        explanation: "Assertion is true: adiabatic bulk modulus is $B_{\\text{ad}} = -V\\frac{dP}{dV} = \\gamma P$, whereas isothermal bulk modulus is $B_{\\text{iso}} = P$. Since $\\gamma = C_p/C_v > 1$ for all gases, $B_{\\text{ad}} > B_{\\text{iso}}$. Reason is also true: for a monoatomic ideal gas $\\gamma = 5/3$. However, the specific value for monoatomic gases does not explain why adiabatic bulk modulus exceeds isothermal bulk modulus for all gases. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
      }
    ]
  },

  // =========================================================================
  // TEST 2: FLUID MECHANICS (PASCAL'S LAW, BERNOULLI'S PRINCIPLE, VISCOSITY)
  // =========================================================================
  {
    testId: "neet-SUBTOPIC-Physics-Fluid-mechanics-(Pascal's-law,-Bernoulli's-principle,-viscosity)",
    slugAliases: [
      "neet-SUBTOPIC-Physics-Fluid-mechanics-(Pascal-s-law,-Bernoulli-s-principle,-viscosity)",
      "neet-SUBTOPIC-Physics-Fluid-mechanics-(Pascals-law-Bernoullis-principle-viscosity)",
      "neet-SUBTOPIC-Physics-Fluid-mechanics-Pascals-law-Bernoullis-principle-viscosity"
    ],
    title: "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    chapter: "Mechanical Properties of Fluids",
    diagramQs: [
      {
        index: 0,
        commercialId: "NEET-PHY-SOL-FM-001",
        question: "In the hydraulic lift shown in the diagram, a downward force $F_1 = 50\\text{ N}$ is applied to the small piston of cross-sectional area $A_1 = 10\\text{ cm}^2$. If the large piston has a cross-sectional area $A_2 = 400\\text{ cm}^2$, what maximum load mass $M$ can be supported on the large platform at the same horizontal level? ($g = 10\\text{ m s}^{-2}$)",
        options: [
          "$100\\text{ kg}$",
          "$200\\text{ kg}$",
          "$400\\text{ kg}$",
          "$50\\text{ kg}$"
        ],
        correctOption: "b",
        difficulty: "Easy",
        image: "/images/diagrams/solids/test2_q1_hydraulic_lift.svg",
        explanation: "By Pascal's law, pressure is transmitted equally throughout the enclosed fluid: $P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$. Therefore: $F_2 = F_1 \\left( \\frac{A_2}{A_1} \\right) = 50 \\times \\left( \\frac{400}{10} \\right) = 50 \\times 40 = 2000\\text{ N}$. Since $F_2 = M g$, the supported mass is $M = \\frac{2000}{10} = 200\\text{ kg}$."
      },
      {
        index: 1,
        commercialId: "NEET-PHY-SOL-FM-002",
        question: "An ideal incompressible liquid of density $\\rho$ flows smoothly through a horizontal pipe of varying cross-section, as shown. At point 1 (area $A_1$, flow speed $v_1$), the static pressure is $P_1$. At point 2 (area $A_2 < A_1$, flow speed $v_2$), the static pressure is $P_2$. According to Bernoulli's equation, what is the pressure difference $P_1 - P_2$ in terms of fluid speed and density?",
        options: [
          "$P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$",
          "$P_1 - P_2 = \\frac{1}{2}\\rho (v_1^2 - v_2^2)$",
          "$P_1 - P_2 = \\rho g h$",
          "$P_1 - P_2 = \\frac{1}{2}\\rho (v_2 - v_1)^2$"
        ],
        correctOption: "a",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test2_q2_bernoulli_pipe_venturi.svg",
        explanation: "Applying Bernoulli's equation along a streamline in a horizontal pipe ($h_1 = h_2$):\n$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$$\nRearranging yields:\n$$P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$$\nSince the pipe narrows ($A_2 < A_1$), continuity requires $v_2 > v_1$, which means $P_1 > P_2$ (the static pressure is lower in the constriction)."
      },
      {
        index: 2,
        commercialId: "NEET-PHY-SOL-FM-003",
        question: "A small solid sphere of radius $r$ and density $\\rho$ falls under gravity through a viscous liquid of density $\\sigma$ and viscosity $\\eta$. At terminal velocity $v_t$, which of the following expressions correctly gives $v_t$ based on Stokes' law?",
        options: [
          "$v_t = \\frac{2}{9}\\frac{r(\\rho - \\sigma)g}{\\eta}$",
          "$v_t = \\frac{9}{2}\\frac{r^2(\\rho - \\sigma)g}{\\eta}$",
          "$v_t = \\frac{2}{9}\\frac{r^2(\\rho - \\sigma)g}{\\eta}$",
          "$v_t = \\frac{2}{9}\\frac{r^2(\\rho + \\sigma)g}{\\eta}$"
        ],
        correctOption: "c",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test2_q3_terminal_velocity_stokes.svg",
        explanation: "At terminal velocity, the net force on the sphere is zero:\n$$\\text{Weight } W = \\text{Buoyancy } F_B + \\text{Viscous Drag } F_v$$\n$$\\frac{4}{3}\\pi r^3 \\rho g = \\frac{4}{3}\\pi r^3 \\sigma g + 6\\pi \\eta r v_t$$\n$$6\\pi \\eta r v_t = \\frac{4}{3}\\pi r^3 (\\rho - \\sigma) g$$\n$$v_t = \\frac{2}{9}\\frac{r^2(\\rho - \\sigma)g}{\\eta}$$"
      }
    ],
    arQs: [
      {
        index: 39,
        commercialId: "NEET-PHY-SOL-FM-040",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a hydraulic lift, a small input force applied on a small piston can easily lift a massive automobile placed on a large piston.\nReason (R): By Pascal's law, pressure applied to an enclosed incompressible fluid is transmitted undiminished to every portion of the fluid, producing an output force magnified by $F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right)$.",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Medium",
        explanation: "Pascal's law states that any pressure change in an enclosed incompressible fluid is transmitted undiminished to all points: $P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right)$. Because $A_2 \\gg A_1$, the output force is magnified. Both (A) and (R) are true and (R) is the exact explanation."
      },
      {
        index: 40,
        commercialId: "NEET-PHY-SOL-FM-041",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When an ideal fluid flows through a horizontal pipe of varying diameter, static pressure is noticeably lower in the narrow constriction than in the wider sections.\nReason (R): For steady streamline flow of an incompressible fluid, the equation of continuity requires $A_1 v_1 = A_2 v_2 = \\text{constant}$.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Medium",
        explanation: "Assertion is true: according to Bernoulli's principle ($P + \\frac{1}{2}\\rho v^2 = \\text{constant}$), fluid velocity increases in the narrow section, which reduces static pressure. Reason is also true: continuity requires $A v = \\text{constant}$. However, continuity explains only why velocity increases; conservation of mechanical energy (Bernoulli's principle) is required to explain why static pressure drops. Both (A) and (R) are true, but (R) is not the complete explanation of (A)."
      },
      {
        index: 41,
        commercialId: "NEET-PHY-SOL-FM-042",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A spherical raindrop falling through air reaches a constant terminal velocity after descending a certain distance.\nReason (R): At terminal velocity, the upward buoyant force and the viscous drag force acting on the raindrop both vanish completely.",
        options: AR_OPTIONS,
        correctOption: "c",
        difficulty: "Hard",
        explanation: "Assertion is true: as the drop accelerates, viscous drag increases until drag plus buoyancy exactly balances downward gravitational weight, giving zero net acceleration and constant terminal velocity ($v_t = \\frac{2}{9}\\frac{r^2(\\rho - \\sigma)g}{\\eta}$). Reason is false because buoyant force and viscous drag do NOT vanish; rather, their sum exactly balances weight ($F_v + F_B = W$). Thus, (A) is true but (R) is false."
      },
      {
        index: 42,
        commercialId: "NEET-PHY-SOL-FM-043",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The dynamic viscosity of liquids increases with rise in temperature, whereas the viscosity of gases decreases with rise in temperature.\nReason (R): In liquids, higher temperature increases molecular kinetic energy and weakens cohesive bonds; in gases, higher temperature increases molecular collision frequency and transverse momentum transfer.",
        options: AR_OPTIONS,
        correctOption: "d",
        difficulty: "Hard",
        explanation: "Assertion is false: viscosity of liquids DECREASES with rising temperature (e.g. heated motor oil or syrup flows much faster), while viscosity of gases INCREASES with rising temperature ($\\eta_{\\text{gas}} \\propto \\sqrt{T}$). Reason is true: it correctly explains the microscopic mechanism (cohesion dominates in liquids and weakens with heat, while momentum exchange dominates in gases and increases with heat). Thus, (A) is false but (R) is true."
      },
      {
        index: 43,
        commercialId: "NEET-PHY-SOL-FM-044",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A spinning cricket or tennis ball thrown forward in air follows a curved trajectory that deviates sideways from a vertical plane (Magnus effect).\nReason (R): The spinning boundary layer drags air, creating a higher airflow speed on one side of the ball than on the opposite side; by Bernoulli's principle, lower pressure on the high-speed side produces a transverse aerodynamic lift force.",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Medium",
        explanation: "When a spinning ball travels through air, air dragged along its surface accelerates airflow on one side ($v + \\omega r$) and retards airflow on the other ($v - \\omega r$). According to Bernoulli's principle, the region of higher airspeed has lower pressure, generating an unbalanced transverse aerodynamic force (Magnus effect). Both (A) and (R) are true and (R) correctly explains (A)."
      },
      {
        index: 44,
        commercialId: "NEET-PHY-SOL-FM-045",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Blood velocity in the human circulatory system is much lower in the capillaries than in the aorta, despite each individual capillary having a microscopic diameter.\nReason (R): Poiseuille's formula states that the volume flow rate of a viscous fluid through a cylindrical tube is $Q = \\frac{\\pi P r^4}{8 \\eta L}$.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Medium",
        explanation: "Assertion is true: while each capillary is microscopic, the human body contains billions of capillaries in parallel whose total combined cross-sectional area is hundreds of times greater than the aorta. By the continuity equation ($A_1 v_1 = A_{\\text{total}} v_2$), the flow velocity is very low, allowing efficient gas and nutrient exchange. Reason is also true (Poiseuille's equation correctly describes viscous laminar flow). However, Reason does not explain the velocity drop across the vascular bed. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
      }
    ]
  },

  // =========================================================================
  // TEST 3: SURFACE TENSION, SURFACE ENERGY, AND CAPILLARITY
  // =========================================================================
  {
    testId: "neet-SUBTOPIC-Physics-Surface-tension,-surface-energy,-and-capillarity",
    slugAliases: [
      "neet-SUBTOPIC-Physics-Surface-tension-surface-energy-and-capillarity",
      "neet-SUBTOPIC-Physics-Surface-Tension,-Surface-Energy,-and-Capillarity"
    ],
    title: "Surface tension, surface energy, and capillarity",
    chapter: "Mechanical Properties of Fluids",
    diagramQs: [
      {
        index: 0,
        commercialId: "NEET-PHY-SOL-ST-001",
        question: "A liquid drop of radius $R$ and surface tension $T$ has an excess internal pressure $\\Delta P_1$. A soap bubble blown with the same liquid in air has the same radius $R$ and an excess internal pressure $\\Delta P_2$. What is the ratio $\\Delta P_1 : \\Delta P_2$?",
        options: [
          "$2 : 1$",
          "$4 : 1$",
          "$1 : 2$",
          "$1 : 1$"
        ],
        correctOption: "c",
        difficulty: "Easy",
        image: "/images/diagrams/solids/test3_q1_excess_pressure_drop_bubble.svg",
        explanation: "1. For a liquid drop, there is only one air-liquid interface: $\\Delta P_1 = \\frac{2T}{R}$.\n2. For a soap bubble, there are two air-liquid interfaces (inner and outer): $\\Delta P_2 = \\frac{4T}{R}$.\n3. The ratio is $\\frac{\\Delta P_1}{\\Delta P_2} = \\frac{2T/R}{4T/R} = \\frac{1}{2} = 1 : 2$."
      },
      {
        index: 1,
        commercialId: "NEET-PHY-SOL-ST-002",
        question: "A glass capillary tube of internal radius $r$ is dipped vertically into a liquid of surface tension $T$, contact angle $\\theta$, and density $\\rho$. The liquid rises to a vertical height $h$ inside the capillary. Which of the following formulas correctly gives this capillary ascent $h$?",
        options: [
          "$h = \\frac{2T\\cos\\theta}{r\\rho g}$",
          "$h = \\frac{T\\cos\\theta}{2r\\rho g}$",
          "$h = \\frac{4T\\cos\\theta}{r\\rho g}$",
          "$h = \\frac{2T}{r\\rho g\\cos\\theta}$"
        ],
        correctOption: "a",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test3_q2_capillary_rise_meniscus.svg",
        explanation: "The upward vertical component of surface tension acts along the perimeter of the meniscus: $F_{\\text{up}} = (2\\pi r) T \\cos\\theta$. This upward force supports the weight of the elevated liquid column: $W = m g = (\\pi r^2 h \\rho) g$. Equating both: $2\\pi r T \\cos\\theta = \\pi r^2 h \\rho g \\implies h = \\frac{2T\\cos\\theta}{r\\rho g}$."
      },
      {
        index: 2,
        commercialId: "NEET-PHY-SOL-ST-003",
        question: "The diagrams depict the contact angle $\\theta$ formed at the solid-liquid-air junction for two different liquids placed on a flat glass plate. Liquid 1 forms an acute contact angle ($\\theta_1 < 90^\\circ$), while Liquid 2 forms an obtuse contact angle ($\\theta_2 > 90^\\circ$). Which of the following deductions regarding adhesion, cohesion, and wetting is correct?",
        options: [
          "Liquid 1 has stronger cohesive forces than adhesive forces and does not wet glass",
          "Liquid 1 wets glass (adhesion > cohesion), while Liquid 2 does not wet glass (cohesion > adhesion)",
          "Both liquids completely wet glass regardless of contact angle",
          "Liquid 2 wets glass, while Liquid 1 forms spherical beads"
        ],
        correctOption: "b",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test3_q3_contact_angle_wetting.svg",
        explanation: "1. For Liquid 1 (acute angle $\\theta_1 < 90^\\circ$), adhesive forces between liquid and glass molecules are stronger than cohesive forces between liquid molecules. The liquid spreads, wets the glass, and rises in a capillary with a concave meniscus (e.g. water on glass).\n2. For Liquid 2 (obtuse angle $\\theta_2 > 90^\\circ$), cohesive forces dominate over adhesive forces. The liquid balls up, does not wet glass, and is depressed in a capillary with a convex meniscus (e.g. mercury on glass)."
      }
    ],
    arQs: [
      {
        index: 39,
        commercialId: "NEET-PHY-SOL-ST-040",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The excess internal pressure inside a spherical soap bubble of radius $R$ in air is twice the excess internal pressure inside a liquid drop of the same radius and surface tension.\nReason (R): A soap bubble has two free liquid surfaces (interior and exterior) exposed to air, giving $\\Delta P_{\\text{bubble}} = \\frac{4T}{R}$, whereas a liquid drop has only a single free surface, giving $\\Delta P_{\\text{drop}} = \\frac{2T}{R}$.",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Medium",
        explanation: "Work done in forming a soap bubble requires creating two spherical air-liquid interfaces (inner and outer), resulting in twice the surface energy per unit volume: $\\Delta P = \\frac{4T}{R}$. A liquid drop has only one outer surface, giving $\\Delta P = \\frac{2T}{R}$. Both (A) and (R) are true and (R) correctly explains (A)."
      },
      {
        index: 40,
        commercialId: "NEET-PHY-SOL-ST-041",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Pure water rises in a clean glass capillary tube with a concave meniscus, whereas mercury is depressed below the surrounding level in the same capillary tube with a convex meniscus.\nReason (R): The surface tension of mercury ($T \\approx 0.465\\text{ N m}^{-1}$) is roughly six times greater than that of pure water ($T \\approx 0.072\\text{ N m}^{-1}$) at room temperature.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Medium",
        explanation: "Assertion is true: water wets glass with an acute contact angle ($\\theta < 90^\\circ$), giving $\\cos\\theta > 0$ and capillary rise $h > 0$. Mercury does not wet glass with an obtuse contact angle ($\\theta \\approx 135^\\circ$), giving $\\cos\\theta < 0$ and capillary depression $h < 0$. Reason is also true: mercury has a much higher surface tension. However, the magnitude of surface tension does not determine the sign of $h$ or the curvature of the meniscus; that is determined entirely by the contact angle $\\cos\\theta$. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
      },
      {
        index: 41,
        commercialId: "NEET-PHY-SOL-ST-042",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When thousands of microscopic water droplets coalesce isothermally to form a single large spherical drop, thermal energy is released and the temperature of the drop increases.\nReason (R): Coalescence of small droplets into a single large drop results in an overall increase in the total surface area of the liquid, requiring external work to be done on the system.",
        options: AR_OPTIONS,
        correctOption: "c",
        difficulty: "Hard",
        explanation: "Assertion is true: when $n$ small droplets coalesce into one drop of radius $R = n^{1/3} r$, the total surface area decreases ($\\Delta A = 4\\pi R^2 (n^{1/3} - 1) < 0$). The decrease in surface energy is released as heat: $Q = T |\\Delta A| = m s \\Delta\\theta > 0$, causing temperature to rise. Reason is false because coalescence DECREASES total surface area rather than increasing it. Thus, (A) is true but (R) is false."
      },
      {
        index: 42,
        commercialId: "NEET-PHY-SOL-ST-043",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If a capillary tube of insufficient length $L < h$ is dipped into water, water will continuously overflow and fountain out from the top rim.\nReason (R): In a capillary tube of insufficient length, liquid rises to the top edge and flattens its meniscus, increasing its radius of curvature ($R' > R$) until $\\frac{2T}{R'} = \\rho g L$, preventing overflow.",
        options: AR_OPTIONS,
        correctOption: "d",
        difficulty: "Hard",
        explanation: "Assertion is false: water cannot overflow continuously from a capillary of insufficient length; a spontaneous, perpetual-motion fountain without external energy input would violate the first and second laws of thermodynamics. Reason is true: at the upper rim, the meniscus flattens to a larger radius of curvature $R'$ such that $h R = L R'$, balancing hydrostatic pressure exactly. Thus, (A) is false but (R) is true."
      },
      {
        index: 43,
        commercialId: "NEET-PHY-SOL-ST-044",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Addition of synthetic detergents to laundry water greatly enhances its cleaning power on oily and greasy fabrics.\nReason (R): Detergent molecules concentrate at interfaces, drastically lowering the surface tension of water and reducing the contact angle on fabric fibers, enabling water to thoroughly wet and emulsify greasy particles.",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Medium",
        explanation: "Pure water has a relatively high surface tension ($0.072\\text{ N m}^{-1}$) and cannot penetrate oily stains. Detergent molecules are amphiphilic (hydrophobic hydrocarbon tails dissolve in oil, while hydrophilic polar heads remain in water). By concentrating at interfaces, detergents lower surface tension and contact angle, allowing water to penetrate tiny pores in fabrics and emulsify grease. Both (A) and (R) are true and (R) correctly explains (A)."
      },
      {
        index: 44,
        commercialId: "NEET-PHY-SOL-ST-045",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Small aquatic insects such as water striders can walk freely on the surface of calm water without sinking.\nReason (R): The surface tension of pure water decreases progressively with an increase in water temperature.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Medium",
        explanation: "Assertion is true: the insect's weight causes slight dimples in the surface membrane, and the upward vertical components of surface tension acting along the perimeter of these depressions balance the insect's weight ($F_{\\text{up}} = \\sum 2 T L \\cos\\theta \\ge W$). Reason is also true: surface tension decreases with rising temperature ($T_t = T_0 (1 - \\alpha t)$). However, temperature dependence does not explain how surface tension supports the insect. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
      }
    ]
  },

  // =========================================================================
  // TEST 4: THERMAL EXPANSION AND CALORIMETRY
  // =========================================================================
  {
    testId: "neet-SUBTOPIC-Physics-Thermal-expansion-and-calorimetry",
    slugAliases: [
      "neet-SUBTOPIC-Physics-Thermal-Expansion-and-Calorimetry",
      "neet-SUBTOPIC-Physics-thermal-expansion-and-calorimetry"
    ],
    title: "Thermal expansion and calorimetry",
    chapter: "Thermal Properties of Matter",
    diagramQs: [
      {
        index: 0,
        commercialId: "NEET-PHY-SOL-TE-001",
        question: "A bimetallic strip consists of two equal strips of Brass (linear expansion coefficient $\\alpha_1$) and Steel ($\\alpha_2$) riveted together firmly. If $\\alpha_1 > \\alpha_2$, what happens when the strip is heated uniformly above its initial room temperature?",
        options: [
          "The strip bends into an arc with Brass on the outer (convex) side and Steel on the inner (concave) side",
          "The strip bends into an arc with Steel on the outer (convex) side and Brass on the inner (concave) side",
          "The strip expands linearly without bending",
          "The strip twists perpendicular to its plane"
        ],
        correctOption: "a",
        difficulty: "Easy",
        image: "/images/diagrams/solids/test4_q1_bimetallic_strip.svg",
        explanation: "Because the coefficient of linear expansion of brass is greater than that of steel ($\\alpha_{\\text{brass}} > \\alpha_{\\text{steel}}$), brass expands more than steel for the same temperature rise ($\\Delta L_1 > \\Delta L_2$). Since the two strips are welded together at their interface, the strip must bend into a circular arc with the longer element (brass) on the convex (outer) circumference and the shorter element (steel) on the concave (inner) circumference."
      },
      {
        index: 1,
        commercialId: "NEET-PHY-SOL-TE-002",
        question: "The graph shows the heating curve of $1\\text{ g}$ of ice at $-10^\\circ\\text{C}$ converting to steam at $120^\\circ\\text{C}$ as heat is added at a constant rate. Why is the boiling plateau (vaporization at $100^\\circ\\text{C}$) noticeably wider than the melting plateau (fusion at $0^\\circ\\text{C}$)?",
        options: [
          "The boiling point of water is higher than the melting point of ice",
          "The latent heat of vaporization of water ($L_v \\approx 540\\text{ cal g}^{-1}$) is nearly $6.75$ times greater than the latent heat of fusion of ice ($L_f \\approx 80\\text{ cal g}^{-1}$)",
          "The specific heat capacity of steam is greater than that of ice",
          "Ice absorbs heat faster than boiling water"
        ],
        correctOption: "b",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test4_q2_heating_curve_water.svg",
        explanation: "The horizontal length of each plateau represents the time taken for phase change, which is proportional to latent heat ($Q = m L$). The latent heat of vaporization of water is $L_v \\approx 540\\text{ cal g}^{-1}$ ($2260\\text{ J g}^{-1}$), whereas the latent heat of fusion of ice is $L_f \\approx 80\\text{ cal g}^{-1}$ ($334\\text{ J g}^{-1}$). Because vaporization requires complete overcoming of intermolecular hydrogen bonds, $L_v$ is $6.75$ times larger, making the vaporization plateau $6.75$ times wider."
      },
      {
        index: 2,
        commercialId: "NEET-PHY-SOL-TE-003",
        question: "A uniform metal rod of natural length $L$, cross-sectional area $A$, Young's modulus $Y$, and linear expansion coefficient $\\alpha$ is clamped rigidly between two immovable walls, as shown. When the temperature of the rod is increased by $\\Delta T$, the compressive thermal force developed in the rod is:",
        options: [
          "$F = \\frac{Y A \\alpha}{\\Delta T}$",
          "$F = \\frac{Y \\alpha \\Delta T}{A}$",
          "$F = Y A \\alpha \\Delta T$",
          "$F = Y A L \\alpha \\Delta T$"
        ],
        correctOption: "c",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test4_q3_thermal_stress_rod.svg",
        explanation: "If free to expand, the rod would lengthen by $\\Delta L = L \\alpha \\Delta T$. Because the rigid unyielding walls prevent any expansion, the effective compressive strain produced is:\n$$\\varepsilon = \\frac{\\Delta L}{L} = \\frac{L \\alpha \\Delta T}{L} = \\alpha \\Delta T$$\nBy Hooke's law, the compressive thermal stress is:\n$$\\sigma = Y \\varepsilon = Y \\alpha \\Delta T$$\nThe compressive force exerted by the walls on the rod is:\n$$F = \\sigma A = Y A \\alpha \\Delta T$$\nNote that this force is completely independent of the original length $L$ of the rod."
      }
    ],
    arQs: [
      {
        index: 39,
        commercialId: "NEET-PHY-SOL-TE-040",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For an isotropic solid material, the coefficients of linear expansion ($\\alpha$), superficial expansion ($\\beta$), and cubical expansion ($\\gamma$) are related by the ratio $\\alpha : \\beta : \\gamma = 1 : 2 : 3$.\nReason (R): For small temperature changes, area expands as $A' = L^2(1 + \\alpha\\Delta T)^2 \\approx A(1 + 2\\alpha\\Delta T)$ and volume expands as $V' = L^3(1 + \\alpha\\Delta T)^3 \\approx V(1 + 3\\alpha\\Delta T)$, since higher powers of $\\alpha \\Delta T$ are negligible.",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Medium",
        explanation: "By binomial expansion, for an isotropic solid cube: $(1 + \\alpha\\Delta T)^2 \\approx 1 + 2\\alpha\\Delta T \\implies \\beta = 2\\alpha$, and $(1 + \\alpha\\Delta T)^3 \\approx 1 + 3\\alpha\\Delta T \\implies \\gamma = 3\\alpha$. Thus, $\\alpha : \\beta : \\gamma = 1 : 2 : 3$. Both (A) and (R) are true and (R) is the exact mathematical proof."
      },
      {
        index: 40,
        commercialId: "NEET-PHY-SOL-TE-041",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a flat metal disc with a central circular hole is heated uniformly, the diameter of the hole increases.\nReason (R): The density of all metallic solids decreases as temperature increases.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Medium",
        explanation: "Assertion is true: thermal expansion acts like a photographic enlargement; every chord and circumference expands uniformly, so the hole diameter expands ($d' = d(1 + \\alpha\\Delta T)$). Reason is also true: since mass is constant and volume expands, density decreases ($\\rho' = \\frac{\\rho}{1 + \\gamma\\Delta T}$). However, density decrease does not explain why the hole specifically expands rather than closing inward. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
      },
      {
        index: 41,
        commercialId: "NEET-PHY-SOL-TE-042",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Fresh water in deep lakes freezes only at the surface during cold winters, maintaining liquid water at approximately $4^\\circ\\text{C}$ at the lake bottom to sustain aquatic life.\nReason (R): Water expands continuously as its temperature decreases from $100^\\circ\\text{C}$ all the way down to $0^\\circ\\text{C}$.",
        options: AR_OPTIONS,
        correctOption: "c",
        difficulty: "Hard",
        explanation: "Assertion is true: water exhibits anomalous expansion between $0^\\circ\\text{C}$ and $4^\\circ\\text{C}$, attaining its maximum density at $4^\\circ\\text{C}$. The densest $4^\\circ\\text{C}$ water sinks to the bottom, while freezing starts from the top. Reason is false because water contracts normally as it cools from $100^\\circ\\text{C}$ down to $4^\\circ\\text{C}$; it expands only between $4^\\circ\\text{C}$ and $0^\\circ\\text{C}$. Thus, (A) is true but (R) is false."
      },
      {
        index: 42,
        commercialId: "NEET-PHY-SOL-TE-043",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When equal masses of boiling water at $100^\\circ\\text{C}$ and ice at $0^\\circ\\text{C}$ are mixed in an insulated calorimeter, the final equilibrium temperature of the mixture is $50^\\circ\\text{C}$.\nReason (R): Heat released by water cooling from $100^\\circ\\text{C}$ to $0^\\circ\\text{C}$ ($Q = m \\times 1 \\times 100 = 100 m\\text{ cal}$) exceeds the latent heat required to melt the ice ($Q = m L_f = 80 m\\text{ cal}$), leaving surplus heat to warm the total mass to $10^\\circ\\text{C}$.",
        options: AR_OPTIONS,
        correctOption: "d",
        difficulty: "Hard",
        explanation: "Assertion is false: heat lost by water cooling to $0^\\circ\\text{C}$ is $100m\\text{ cal}$. Heat needed to melt ice is $80m\\text{ cal}$. The surplus heat is $20m\\text{ cal}$, which warms the total mass of water ($2m$): $\\Delta T = \\frac{20m}{2m \\times 1} = 10^\\circ\\text{C}$, so the final temperature is $10^\\circ\\text{C}$, not $50^\\circ\\text{C}$. Reason is true: it correctly evaluates the heat exchange. Thus, (A) is false but (R) is true."
      },
      {
        index: 43,
        commercialId: "NEET-PHY-SOL-TE-044",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Thermal burns caused by steam at $100^\\circ\\text{C}$ are substantially more severe and painful than burns caused by boiling water at $100^\\circ\\text{C}$.\nReason (R): Each gram of steam at $100^\\circ\\text{C}$ contains $540\\text{ cal}$ ($2260\\text{ J}$) of additional latent heat of vaporization that is released directly onto the skin upon condensing into water at $100^\\circ\\text{C}$.",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Easy",
        explanation: "When $1\\text{ g}$ of steam at $100^\\circ\\text{C}$ contacts skin, it first condenses into water at $100^\\circ\\text{C}$, releasing its full latent heat of condensation ($540\\text{ cal} \\approx 2260\\text{ J}$). After condensing, it further cools as boiling water. Boiling water at $100^\\circ\\text{C}$ releases only sensible heat upon cooling ($1\\text{ cal g}^{-1}{^\\circ\\text{C}}^{-1}$). Both (A) and (R) are true and (R) correctly explains (A)."
      },
      {
        index: 44,
        commercialId: "NEET-PHY-SOL-TE-045",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Pendulum clocks regulated by uncompensated brass rods run slow in summer and run fast in winter.\nReason (R): The coefficient of linear expansion of brass is positive and approximately $\\alpha_{\\text{brass}} \\approx 1.9 \\times 10^{-5}\\text{ K}^{-1}$.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Medium",
        explanation: "Assertion is true: in summer, higher temperature causes the pendulum rod to lengthen by $\\Delta L = L \\alpha \\Delta\\theta$. The fractional change in time period is $\\frac{\\Delta T}{T} = \\frac{1}{2}\\frac{\\Delta L}{L} = \\frac{1}{2}\\alpha\\Delta\\theta > 0$. Each oscillation takes longer, so the clock loses time (runs slow). In winter, the rod contracts and the clock runs fast. Reason is also true ($\\alpha_{\\text{brass}}$ is positive). However, the numerical value alone does not explain why the clock runs slow. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
      }
    ]
  },

  // =========================================================================
  // TEST 5: STEFAN'S LAW OF RADIATION
  // =========================================================================
  {
    testId: "neet-SUBTOPIC-Physics-Stefan's-law-of-radiation",
    slugAliases: [
      "neet-SUBTOPIC-Physics-Stefan-s-law-of-radiation",
      "neet-SUBTOPIC-Physics-Stefans-law-of-radiation",
      "neet-SUBTOPIC-Physics-Stefan's-Law-of-Radiation"
    ],
    title: "Stefan's law of radiation",
    chapter: "Thermal Properties of Matter",
    diagramQs: [
      {
        index: 0,
        commercialId: "NEET-PHY-SOL-SR-001",
        question: "The graph illustrates the spectral emissive power $E_\\lambda$ versus wavelength $\\lambda$ for a blackbody radiator at three absolute temperatures $T_1 < T_2 < T_3$. Which of the following laws governs the shift in peak wavelength $\\lambda_m$ with temperature, and how does the total area under each curve scale with temperature?",
        options: [
          "Wien's displacement law ($\\lambda_m T = b$) governs the peak shift; total area scales as $T^4$ according to Stefan-Boltzmann law",
          "Wien's law states $\\lambda_m / T = \\text{constant}$; total area scales as $T^2$",
          "Rayleigh-Jeans law governs the peak shift; total area scales linearly with $T$",
          "The peak wavelength is independent of temperature; total area scales as $T^3$"
        ],
        correctOption: "a",
        difficulty: "Easy",
        image: "/images/diagrams/solids/test5_q1_blackbody_radiation_curves.svg",
        explanation: "1. Wien's displacement law states that the wavelength corresponding to maximum spectral emissive power is inversely proportional to absolute temperature: $\\lambda_m \\propto \\frac{1}{T} \\implies \\lambda_m T = b \\approx 2.898 \\times 10^{-3} \\text{ m K}$. Thus, as temperature increases, the peak shifts towards shorter wavelengths.\n2. The total emissive power is the integral of $E_\\lambda$ over all wavelengths (represented by the total area under the $E_\\lambda - \\lambda$ curve). By the Stefan-Boltzmann law, this total area is directly proportional to the fourth power of absolute temperature: $\\text{Area} = E = \\sigma T^4$."
      },
      {
        index: 1,
        commercialId: "NEET-PHY-SOL-SR-002",
        question: "A non-black body of surface area $A$ and emissivity $e$ ($0 < e < 1$) at absolute temperature $T$ is placed inside an evacuated enclosure maintained at constant temperature $T_0$ ($T > T_0$), as depicted in the diagram. The net rate of heat loss by radiation $P_{\\text{net}}$ from the body is:",
        options: [
          "$P_{\\text{net}} = e \\sigma A (T - T_0)^4$",
          "$P_{\\text{net}} = e \\sigma A (T^4 - T_0^4)$",
          "$P_{\\text{net}} = \\sigma A (T^4 - T_0^4)$",
          "$P_{\\text{net}} = e \\sigma A (T^2 - T_0^2)$"
        ],
        correctOption: "b",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test5_q2_stefan_cooling_surroundings.svg",
        explanation: "According to Stefan-Boltzmann law:\n1. The rate of radiant energy emitted by the body is $P_{\\text{emit}} = e \\sigma A T^4$.\n2. The body also absorbs radiation emitted by the enclosure walls at temperature $T_0$: $P_{\\text{absorb}} = e \\sigma A T_0^4$ (by Kirchhoff's law, absorptivity equals emissivity: $a = e$).\n3. The net rate of heat loss from the body to its surroundings is:\n$$P_{\\text{net}} = P_{\\text{emit}} - P_{\\text{absorb}} = e \\sigma A (T^4 - T_0^4)$$"
      },
      {
        index: 2,
        commercialId: "NEET-PHY-SOL-SR-003",
        question: "The graphs depict the relationship between radiated power $P$ and absolute temperature $T$ of a blackbody. In a logarithmic plot of $\\log P$ versus $\\log T$, the slope of the resulting straight line is:",
        options: [
          "$1$",
          "$2$",
          "$4$",
          "$\\frac{1}{4}$"
        ],
        correctOption: "c",
        difficulty: "Medium",
        image: "/images/diagrams/solids/test5_q3_power_vs_temperature_graph.svg",
        explanation: "From Stefan's law: $P = e \\sigma A T^4$. Taking the natural or base-10 logarithm of both sides:\n$$\\log P = \\log(e \\sigma A) + 4 \\log T$$\nComparing this with the equation of a straight line $y = c + m x$, where $y = \\log P$ and $x = \\log T$:\n$$\\text{Slope } m = 4$$\nThus, the slope is exactly 4, reflecting the fourth-power temperature dependence."
      }
    ],
    arQs: [
      {
        index: 39,
        commercialId: "NEET-PHY-SOL-SR-040",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the absolute temperature of a blackbody radiator is doubled from $T$ to $2T$, the total rate of radiant energy emitted increases by a factor of 16.\nReason (R): According to the Stefan-Boltzmann law, the total radiant energy emitted per second by a blackbody of surface area $A$ is directly proportional to the fourth power of its absolute temperature ($E = \\sigma A T^4$).",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Medium",
        explanation: "By the Stefan-Boltzmann law, radiant power is $E = \\sigma A T^4$. When absolute temperature is doubled ($T' = 2T$), the new emitted power is $E' = \\sigma A (2T)^4 = 16 \\sigma A T^4 = 16 E$. Both (A) and (R) are true and (R) correctly explains (A)."
      },
      {
        index: 40,
        commercialId: "NEET-PHY-SOL-SR-041",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): As the temperature of an incandescent blackbody increases, the peak of its spectral emission shifts progressively toward shorter wavelengths.\nReason (R): The Stefan-Boltzmann constant is a universal physical constant with value $\\sigma \\approx 5.67 \\times 10^{-8}\\text{ W m}^{-2}\\text{ K}^{-4}$.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Medium",
        explanation: "Assertion is true: by Wien's displacement law ($\\lambda_m T = b$), peak wavelength is inversely proportional to absolute temperature, shifting to shorter wavelengths at higher temperatures. Reason is also true: $\\sigma \\approx 5.67 \\times 10^{-8}\\text{ W m}^{-2}\\text{ K}^{-4}$. However, Reason describes the Stefan-Boltzmann constant (which governs total emissive power), not the peak wavelength shift described by Wien's law. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
      },
      {
        index: 41,
        commercialId: "NEET-PHY-SOL-SR-042",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Cooking utensils, vacuum flasks, and teapots are engineered with highly polished and silvered exterior surfaces to minimize heat loss.\nReason (R): Highly polished, mirror-like metallic surfaces are excellent absorbers and excellent emitters of thermal radiation.",
        options: AR_OPTIONS,
        correctOption: "c",
        difficulty: "Hard",
        explanation: "Assertion is true: polished surfaces have very low emissivity ($e \\approx 0.02 - 0.05$), dramatically reducing radiative heat loss ($P = e \\sigma A T^4$). Reason is false: by Kirchhoff's law of radiation ($a = e$), good reflectors are poor absorbers ($a \\ll 1$) and therefore poor emitters ($e \\ll 1$). Thus, (A) is true but (R) is false."
      },
      {
        index: 42,
        commercialId: "NEET-PHY-SOL-SR-043",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Newton's law of cooling ($\\frac{dT}{dt} = -k(T - T_0)$) accurately predicts the rate of heat loss for any arbitrarily large temperature difference between a hot body and its surroundings.\nReason (R): Newton's law of cooling is an approximation of the Stefan-Boltzmann law ($T^4 - T_0^4 \\approx 4 T_0^3 \\Delta T$), strictly valid only when the temperature excess $\\Delta T = T - T_0$ is very small compared to the absolute temperature $T_0$.",
        options: AR_OPTIONS,
        correctOption: "d",
        difficulty: "Hard",
        explanation: "Assertion is false: Newton's law of cooling assumes a linear temperature difference and fails completely at large temperature differences where higher-order terms of the Stefan-Boltzmann fourth-power law dominate. Reason is true: expanding $(T_0 + \\Delta T)^4 - T_0^4 \\approx 4 T_0^3 \\Delta T$ is valid only when $\\Delta T / T_0 \\ll 1$. Thus, (A) is false but (R) is true."
      },
      {
        index: 43,
        commercialId: "NEET-PHY-SOL-SR-044",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The SI unit of the Stefan-Boltzmann constant $\\sigma$ is $\\text{W m}^{-2}\\text{ K}^{-4}$ and its dimensional formula is $[M^1 L^0 T^{-3} K^{-4}]$.\nReason (R): From Stefan's law, $\\sigma = \\frac{E}{A t T^4}$, which yields SI units $\\frac{\\text{J}}{\\text{m}^2 \\cdot \\text{s} \\cdot \\text{K}^4} = \\text{W m}^{-2}\\text{ K}^{-4}$ and dimensions $\\frac{[M L^2 T^{-2}]}{[L^2][T][K^4]} = [M^1 L^0 T^{-3} K^{-4}]$.",
        options: AR_OPTIONS,
        correctOption: "a",
        difficulty: "Medium",
        explanation: "Radiant power emitted per unit area is $E = \\sigma T^4 \\implies \\sigma = \\frac{E}{T^4} = \\frac{\\text{Power}}{\\text{Area} \\cdot T^4}$. Units: $\\frac{\\text{W}}{\\text{m}^2\\text{ K}^4} = \\text{W m}^{-2}\\text{ K}^{-4}$. Dimensions: $\\frac{[M L^2 T^{-3}]}{[L^2][K^4]} = [M^1 L^0 T^{-3} K^{-4}]$. Both (A) and (R) are true and (R) is the exact derivation."
      },
      {
        index: 44,
        commercialId: "NEET-PHY-SOL-SR-045",
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A blackened sphere, a blackened cube, and a thin circular blackened disc made of the same material and having identical mass, heated to the same initial temperature $300^\\circ\\text{C}$, cool at different initial rates in the same cooler surroundings.\nReason (R): For a given volume, a sphere possesses the minimum surface area among all geometrical shapes.",
        options: AR_OPTIONS,
        correctOption: "b",
        difficulty: "Medium",
        explanation: "Assertion is true: initial rate of cooling is $\\frac{dT}{dt} = \\frac{e \\sigma A (T^4 - T_0^4)}{m c} \\propto A$. Since surface area differs for a sphere, cube, and disc of the same mass and material, their cooling rates differ (disc has the largest area and cools fastest, while sphere has the smallest area and cools slowest). Reason is also true: a sphere has the minimal surface-to-volume ratio. However, Reason only explains why the sphere cools slowest, not why all three cool at different rates. Both (A) and (R) are true, but (R) is not the complete explanation of (A)."
      }
    ]
  }
];

for (const t of testsData) {
  console.log(`\n======================================================`);
  console.log(`Processing Test: ${t.testId} (${t.title})`);
  console.log(`======================================================`);

  let tp = await db.collection('testPapers').findOne({ testId: t.testId });
  if (!tp) {
    for (const alias of t.slugAliases) {
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
    const diagDef = t.diagramQs.find(d => d.index === idx);
    const arDef = t.arQs.find(a => a.index === idx);

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
            chapter: t.chapter,
            subTopic: t.title,
            subtopic: t.title,
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
      console.log(`Q${idx + 1} DIAGRAM question set: ${diagDef.image} (ans=${diagDef.correctOption})`);
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
            image: '',
            img: '',
            subject: 'Physics',
            chapter: t.chapter,
            subTopic: t.title,
            subtopic: t.title,
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
      console.log(`Q${idx + 1} Section B AR question set: ans=${arDef.correctOption} (diff=${arDef.difficulty})`);
    } else {
      const existingId = existingQuestionIds[idx];
      if (existingId instanceof ObjectId && existingMap.has(existingId.toString())) {
        const curDoc = existingMap.get(existingId.toString());
        await db.collection('questionBank').updateOne(
          { _id: curDoc._id },
          {
            $set: {
              subject: 'Physics',
              chapter: t.chapter,
              subTopic: t.title,
              subtopic: t.title,
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
          chapter: t.chapter,
          subTopic: t.title,
          subtopic: t.title,
          type: 'MCQ',
          questionType: 'MCQ (Multiple Choice Question)',
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

  // Update primary testPaper
  await db.collection('testPapers').updateOne(
    { testId: t.testId },
    {
      $set: {
        testId: t.testId,
        title: t.title,
        chapter: t.chapter,
        canonicalChapter: t.chapter,
        subject: 'Physics',
        exam: 'NEET',
        examType: 'NEET',
        classGrade: 'Class 11',
        standardQuestionsCount: 45,
        questionsCount: 45,
        duration: 60,
        totalMarks: 180,
        questions: finalQuestionIds,
        updatedAt: new Date()
      }
    },
    { upsert: true }
  );
  console.log(`Synced primary testPaper ${t.testId} with 45 questions.`);

  // Update aliases
  for (const alias of t.slugAliases) {
    const aliasDoc = await db.collection('testPapers').findOne({ testId: alias });
    if (aliasDoc) {
      await db.collection('testPapers').updateOne(
        { _id: aliasDoc._id },
        {
          $set: {
            title: t.title,
            chapter: t.chapter,
            canonicalChapter: t.chapter,
            subject: 'Physics',
            exam: 'NEET',
            examType: 'NEET',
            classGrade: 'Class 11',
            standardQuestionsCount: 45,
            questionsCount: 45,
            duration: 60,
            totalMarks: 180,
            questions: finalQuestionIds,
            updatedAt: new Date()
          }
        }
      );
      console.log(`Synced alias testPaper ${alias} with 45 questions.`);
    }
  }
}

console.log("\nAll 5 tests successfully updated and synchronized!");
await client.close();
