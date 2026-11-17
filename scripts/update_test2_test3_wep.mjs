import { MongoClient, ObjectId } from "mongodb";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
let uri = "";
for (const line of env.split("\n")) {
  if (line.startsWith("MONGODB_URI=")) {
    uri = line.replace("MONGODB_URI=", "").trim().replace(/^['"]|['"]$/g, "");
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const standardAROptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// -------------------------------------------------------------
// TEST 2: KINETIC/POTENTIAL ENERGY
// -------------------------------------------------------------
const t2_updates = {
  testId: "neet-SUBTOPIC-Physics-Kinetic/potential-energy",
  subtopic: "Kinetic/potential energy",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A block of mass $m = 1\\text{ kg}$ is pushed against a horizontal spring of force constant $k = 400\\text{ N/m}$, compressing it by $x = 0.2\\text{ m}$ on a smooth horizontal floor. When the spring is released, the block shoots forward across the frictionless floor and ascends a smooth curved incline, as shown in the figure. What is the maximum height $h$ attained by the block above the horizontal floor before coming momentarily to rest? ($g = 10\\text{ m/s}^2$)",
        text: "A block of mass $m = 1\\text{ kg}$ is pushed against a horizontal spring of force constant $k = 400\\text{ N/m}$, compressing it by $x = 0.2\\text{ m}$ on a smooth horizontal floor. When the spring is released, the block shoots forward across the frictionless floor and ascends a smooth curved incline, as shown in the figure. What is the maximum height $h$ attained by the block above the horizontal floor before coming momentarily to rest? ($g = 10\\text{ m/s}^2$)",
        options: [
          "$0.8\\text{ m}$",
          "$0.4\\text{ m}$",
          "$1.6\\text{ m}$",
          "$0.2\\text{ m}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Energy conservation from launch to maximum height:**\nSince all surfaces are frictionless ($W_{nc} = 0$), mechanical energy is strictly conserved:\n$$E_i = E_f$$\n$$K_i + U_{\\text{spring},i} = K_f + U_{\\text{grav},f}$$\n$$0 + \\frac{1}{2}kx^2 = 0 + mgh$$\n\n**Step 2: Calculate numerical value of height $h$:**\n$$\\frac{1}{2}(400)(0.2)^2 = (1)(10)h$$\n$$200(0.04) = 10h \\implies 8 = 10h \\implies h = 0.8\\text{ m}.$$",
        image: "/images/diagrams/work_energy_power/test2_q1_spring_compression_mass.svg",
        diagramAssetUrl: "/images/diagrams/work_energy_power/test2_q1_spring_compression_mass.svg",
        diagramType: "TIKZ",
        difficulty: "easy",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "A body of mass $m = 2\\text{ kg}$ is moved from initial level A at height $y_1 = +4\\text{ m}$ to final level C at depth $y_2 = -6\\text{ m}$ relative to intermediate reference plane B ($y = 0$), as shown in the diagram ($g = 10\\text{ m/s}^2$). What is the change in gravitational potential energy $\\Delta U = U_f - U_i$ of the body-Earth system, and does this change depend on the chosen reference level?",
        text: "A body of mass $m = 2\\text{ kg}$ is moved from initial level A at height $y_1 = +4\\text{ m}$ to final level C at depth $y_2 = -6\\text{ m}$ relative to intermediate reference plane B ($y = 0$), as shown in the diagram ($g = 10\\text{ m/s}^2$). What is the change in gravitational potential energy $\\Delta U = U_f - U_i$ of the body-Earth system, and does this change depend on the chosen reference level?",
        options: [
          "$\\Delta U = -200\\text{ J}$, independent of reference level",
          "$\\Delta U = +200\\text{ J}$, independent of reference level",
          "$\\Delta U = -120\\text{ J}$, dependent on reference level",
          "$\\Delta U = -80\\text{ J}$, dependent on reference level"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Calculate change in potential energy:**\n$$\\Delta U = U_f - U_i = mg y_2 - mg y_1 = mg(y_2 - y_1)$$\n$$\\Delta U = 2(10)(-6 - 4) = 20(-10) = -200\\text{ J}$$\n\n**Step 2: Reference independence:**\nWhile the absolute potential energy $U$ depends on the chosen origin ($y = 0$), the physical difference $\\Delta U = mg\\Delta y$ depends strictly on the net vertical displacement $\\Delta y$, making $\\Delta U$ invariant under reference-plane transformation.",
        image: "/images/diagrams/work_energy_power/test2_q2_gravitational_pe_reference.svg",
        diagramAssetUrl: "/images/diagrams/work_energy_power/test2_q2_gravitational_pe_reference.svg",
        diagramType: "TIKZ",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "Two bodies of masses $m_1 = 4\\text{ kg}$ and $m_2 = 1\\text{ kg}$ have equal kinetic energy $K_1 = K_2 = K$, as represented in the momentum–kinetic energy curves ($p = \\sqrt{2mK}$) shown below. What is the ratio of their linear momenta $\\frac{p_1}{p_2}$?",
        text: "Two bodies of masses $m_1 = 4\\text{ kg}$ and $m_2 = 1\\text{ kg}$ have equal kinetic energy $K_1 = K_2 = K$, as represented in the momentum–kinetic energy curves ($p = \\sqrt{2mK}$) shown below. What is the ratio of their linear momenta $\\frac{p_1}{p_2}$?",
        options: [
          "$2 : 1$",
          "$1 : 2$",
          "$4 : 1$",
          "$1 : 4$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Relation between momentum and kinetic energy:**\n$$K = \\frac{p^2}{2m} \\implies p = \\sqrt{2mK}$$\n\n**Step 2: Ratio of momenta for equal kinetic energy:**\n$$\\frac{p_1}{p_2} = \\frac{\\sqrt{2m_1 K}}{\\sqrt{2m_2 K}} = \\sqrt{\\frac{m_1}{m_2}} = \\sqrt{\\frac{4\\text{ kg}}{1\\text{ kg}}} = \\frac{2}{1} = 2 : 1.$$",
        image: "/images/diagrams/work_energy_power/test2_q3_two_blocks_kinetic_energy.svg",
        diagramAssetUrl: "/images/diagrams/work_energy_power/test2_q3_two_blocks_kinetic_energy.svg",
        diagramType: "PGFPLOTS",
        difficulty: "easy",
        type: "MCQ"
      }
    }
  ],
  sectionB: [
    {
      index: 39,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If the linear momentum of a body is doubled, its kinetic energy increases by 300%.\n**Reason (R):** The kinetic energy $K$ of a body of mass $m$ is directly proportional to the square of its linear momentum $p$ ($K = \\frac{p^2}{2m}$).",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If the linear momentum of a body is doubled, its kinetic energy increases by 300%.\n**Reason (R):** The kinetic energy $K$ of a body of mass $m$ is directly proportional to the square of its linear momentum $p$ ($K = \\frac{p^2}{2m}$).",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: $K_f = \\frac{(2p)^2}{2m} = 4\\left(\\frac{p^2}{2m}\\right) = 4K_i$. Fractional increase: $\\frac{K_f - K_i}{K_i} \\times 100\\% = \\frac{4K_i - K_i}{K_i} \\times 100\\% = 300\\%$. Reason (R) is true and correctly provides the mathematical relationship $K = p^2/(2m)$.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The gravitational potential energy of a particle at a point in a gravitational field is a scalar quantity that can take positive, negative, or zero values.\n**Reason (R):** The absolute value of potential energy depends on the arbitrary choice of the reference level where potential energy is defined to be zero.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The gravitational potential energy of a particle at a point in a gravitational field is a scalar quantity that can take positive, negative, or zero values.\n**Reason (R):** The absolute value of potential energy depends on the arbitrary choice of the reference level where potential energy is defined to be zero.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: $U$ can be positive (above reference), negative (below reference), or zero (at reference). Reason (R) is true and correctly explains why: potential energy is defined with respect to an arbitrary zero reference ($U(y) = mg(y - y_{\\text{ref}})$).",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A deformed ideal spring always possesses strictly positive elastic potential energy whether it is stretched or compressed.\n**Reason (R):** The elastic potential energy stored in an ideal spring of stiffness $k$ is proportional to the square of displacement from natural length ($U = \\frac{1}{2}kx^2$).",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A deformed ideal spring always possesses strictly positive elastic potential energy whether it is stretched or compressed.\n**Reason (R):** The elastic potential energy stored in an ideal spring of stiffness $k$ is proportional to the square of displacement from natural length ($U = \\frac{1}{2}kx^2$).",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: $U > 0$ for any non-zero extension ($x > 0$) or compression ($x < 0$). Reason (R) is true and correctly explains it: since $(-x)^2 = x^2 > 0$, $U = \\frac{1}{2}kx^2 > 0$ in both cases.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A lighter body and a heavier body possessing the exact same linear momentum have equal kinetic energies.\n**Reason (R):** For a given linear momentum $p$, kinetic energy is inversely proportional to mass ($K = \\frac{p^2}{2m}$), meaning the lighter body possesses greater kinetic energy.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A lighter body and a heavier body possessing the exact same linear momentum have equal kinetic energies.\n**Reason (R):** For a given linear momentum $p$, kinetic energy is inversely proportional to mass ($K = \\frac{p^2}{2m}$), meaning the lighter body possesses greater kinetic energy.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: for equal momentum $p$, $K = p^2/(2m)$, so the lighter mass has higher kinetic energy ($K_{\\text{light}} > K_{\\text{heavy}}$). Reason (R) is true and correctly states this inverse relationship.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The total kinetic energy of any system of particles can never be negative in any frame of reference.\n**Reason (R):** The mass of every physical particle is non-negative and the square of velocity $v_i^2$ is always greater than or equal to zero, ensuring $K = \\sum \\frac{1}{2}m_i v_i^2 \\ge 0$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The total kinetic energy of any system of particles can never be negative in any frame of reference.\n**Reason (R):** The mass of every physical particle is non-negative and the square of velocity $v_i^2$ is always greater than or equal to zero, ensuring $K = \\sum \\frac{1}{2}m_i v_i^2 \\ge 0$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: kinetic energy is intrinsically non-negative ($K \\ge 0$). Reason (R) is true and correctly provides the mathematical definition: since each term $\\frac{1}{2}m_i v_i^2 \\ge 0$, their sum can never be negative.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a body is dropped from rest under gravity in a vacuum, the rate of increase of its kinetic energy is constant with respect to time.\n**Reason (R):** The rate of increase of kinetic energy with time is instantaneous power $P = \\frac{dK}{dt} = \\vec{F}\\cdot\\vec{v} = (mg)(gt) = mg^2 t$, which increases linearly with time.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a body is dropped from rest under gravity in a vacuum, the rate of increase of its kinetic energy is constant with respect to time.\n**Reason (R):** The rate of increase of kinetic energy with time is instantaneous power $P = \\frac{dK}{dt} = \\vec{F}\\cdot\\vec{v} = (mg)(gt) = mg^2 t$, which increases linearly with time.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: $\\frac{dK}{dt} = mg^2 t$, which increases linearly with time $t$ (not constant). (Note: the rate of increase with respect to distance $\\frac{dK}{ds} = mg$ is constant, but with respect to time it increases). Reason (R) is true and correctly calculates the instantaneous power.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    }
  ]
};

// -------------------------------------------------------------
// TEST 3: CONSERVATIVE FORCES AND POTENTIAL ENERGY
// -------------------------------------------------------------
const t3_updates = {
  testId: "neet-SUBTOPIC-Physics-Conservative-forces-and-potential-energy",
  subtopic: "Conservative forces and potential energy",
  diagrams: [
    {
      index: 0,
      data: {
        question: "The potential energy $U(x)$ of a particle constrained to move along the $x$-axis is plotted as a function of position $x$ in the figure below. At which point is the particle in stable equilibrium, and what is the direction of the conservative force when the particle is slightly displaced to the right of this point?",
        text: "The potential energy $U(x)$ of a particle constrained to move along the $x$-axis is plotted as a function of position $x$ in the figure below. At which point is the particle in stable equilibrium, and what is the direction of the conservative force when the particle is slightly displaced to the right of this point?",
        options: [
          "At $x_1$ (stable equilibrium), and force acts in the negative $x$-direction (restoring force)",
          "At $x_2$ (stable equilibrium), and force acts in the positive $x$-direction",
          "At $x_1$ (unstable equilibrium), and force acts in the positive $x$-direction",
          "At $x_3$ (stable equilibrium), and force acts in the negative $x$-direction"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Conditions for equilibrium:**\n- Equilibrium requires $F = -\\frac{dU}{dx} = 0$.\n- Stable equilibrium requires a local minimum of $U(x)$, where $\\frac{d^2U}{dx^2} > 0$ (point $x_1$).\n- Unstable equilibrium occurs at a local maximum, where $\\frac{d^2U}{dx^2} < 0$ (point $x_2$).\n\n**Step 2: Direction of restoring force:**\nWhen displaced to the right ($x > x_1$), the slope is positive ($\\frac{dU}{dx} > 0$).\nTherefore, $F = -\\frac{dU}{dx} < 0$, acting in the negative $x$-direction to restore the particle to $x_1$.",
        image: "/images/diagrams/work_energy_power/test3_q1_u_vs_x_potential_well.svg",
        diagramAssetUrl: "/images/diagrams/work_energy_power/test3_q1_u_vs_x_potential_well.svg",
        diagramType: "PGFPLOTS",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "A particle of mass $m = 2\\text{ kg}$ is transported around a closed triangular loop $A \\to B \\to C \\to A$ in a uniform gravitational field $\\vec{g} = -10\\hat{j}\\text{ m/s}^2$, as shown in the figure. Path $AB$ is horizontal with length $4\\text{ m}$, path $BC$ is vertical upward with height $h = 3\\text{ m}$, and path $CA$ is the straight hypotenuse returning to $A$. What is the work done by gravity along each segment, and the total work done over the entire closed loop?",
        text: "A particle of mass $m = 2\\text{ kg}$ is transported around a closed triangular loop $A \\to B \\to C \\to A$ in a uniform gravitational field $\\vec{g} = -10\\hat{j}\\text{ m/s}^2$, as shown in the figure. Path $AB$ is horizontal with length $4\\text{ m}$, path $BC$ is vertical upward with height $h = 3\\text{ m}$, and path $CA$ is the straight hypotenuse returning to $A$. What is the work done by gravity along each segment, and the total work done over the entire closed loop?",
        options: [
          "$W_{AB} = 0$, $W_{BC} = -60\\text{ J}$, $W_{CA} = +60\\text{ J}$, and $W_{\\text{net}} = 0$",
          "$W_{AB} = +80\\text{ J}$, $W_{BC} = -60\\text{ J}$, $W_{CA} = -20\\text{ J}$, and $W_{\\text{net}} = 0$",
          "$W_{AB} = 0$, $W_{BC} = -60\\text{ J}$, $W_{CA} = -60\\text{ J}$, and $W_{\\text{net}} = -120\\text{ J}$",
          "$W_{AB} = 0$, $W_{BC} = +60\\text{ J}$, $W_{CA} = -60\\text{ J}$, and $W_{\\text{net}} = 0$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Work along horizontal path $AB$:**\n$$\\vec{F}_g \\perp \\Delta\\vec{r}_{AB} \\implies W_{AB} = 0\\text{ J}$$\n\n**Step 2: Work along vertical upward path $BC$:**\n$$W_{BC} = -mgh = -2(10)(3) = -60\\text{ J}$$\n\n**Step 3: Work along inclined downward path $CA$:**\n$$\\Delta y_{CA} = -3\\text{ m} \\implies W_{CA} = -mg(-h) = +mgh = +60\\text{ J}$$\n\n**Step 4: Total closed-loop work:**\n$$W_{\\text{loop}} = W_{AB} + W_{BC} + W_{CA} = 0 - 60 + 60 = 0\\text{ J}$$\nThis confirms the fundamental definition of a conservative force: $\\oint \\vec{F} \\cdot d\\vec{r} = 0$.",
        image: "/images/diagrams/work_energy_power/test3_q2_closed_path_conservative.svg",
        diagramAssetUrl: "/images/diagrams/work_energy_power/test3_q2_closed_path_conservative.svg",
        diagramType: "TIKZ",
        difficulty: "easy",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "The potential energy of a two-particle system as a function of their separation $r$ is given by $U(r) = \\frac{a}{r^2} - \\frac{b}{r}$, where $a$ and $b$ are positive constants, as shown in the potential energy curve below. At what equilibrium separation $r_0$ is the conservative interatomic force zero, and what is the nature of this equilibrium?",
        text: "The potential energy of a two-particle system as a function of their separation $r$ is given by $U(r) = \\frac{a}{r^2} - \\frac{b}{r}$, where $a$ and $b$ are positive constants, as shown in the potential energy curve below. At what equilibrium separation $r_0$ is the conservative interatomic force zero, and what is the nature of this equilibrium?",
        options: [
          "$r_0 = \\frac{2a}{b}$, stable equilibrium",
          "$r_0 = \\frac{a}{b}$, unstable equilibrium",
          "$r_0 = \\frac{a}{2b}$, stable equilibrium",
          "$r_0 = \\frac{2b}{a}$, neutral equilibrium"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Calculate force from potential energy:**\n$$F(r) = -\\frac{dU}{dr} = -\\left( -\\frac{2a}{r^3} + \\frac{b}{r^2} \\right) = \\frac{2a}{r^3} - \\frac{b}{r^2}$$\n\n**Step 2: Set force to zero for equilibrium:**\n$$F(r_0) = 0 \\implies \\frac{2a}{r_0^3} = \\frac{b}{r_0^2} \\implies r_0 = \\frac{2a}{b}$$\n\n**Step 3: Check stability using second derivative:**\n$$\\frac{d^2U}{dr^2} = \\frac{6a}{r_0^4} - \\frac{2b}{r_0^3} = \\frac{1}{r_0^3}\\left( \\frac{6a}{2a/b} - 2b \\right) = \\frac{b}{r_0^3} > 0$$\nSince $\\frac{d^2U}{dr^2} > 0$, the potential energy has a local minimum, corresponding to stable equilibrium.",
        image: "/images/diagrams/work_energy_power/test3_q3_central_force_r_graph.svg",
        diagramAssetUrl: "/images/diagrams/work_energy_power/test3_q3_central_force_r_graph.svg",
        diagramType: "PGFPLOTS",
        difficulty: "hard",
        type: "MCQ"
      }
    }
  ],
  sectionB: [
    {
      index: 39,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by a conservative force on a particle moving between any two points depends solely on the initial and final positions, not on the path traversed.\n**Reason (R):** For every conservative force field, the force can be expressed as the negative gradient of a single-valued scalar potential energy function: $\\vec{F} = -\\vec{\\nabla} U$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by a conservative force on a particle moving between any two points depends solely on the initial and final positions, not on the path traversed.\n**Reason (R):** For every conservative force field, the force can be expressed as the negative gradient of a single-valued scalar potential energy function: $\\vec{F} = -\\vec{\\nabla} U$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: work is path-independent for conservative forces ($W_c = -\\Delta U = U_i - U_f$). Reason (R) is true and correctly provides the mathematical foundation: since $\\vec{F} = -\\vec{\\nabla}U$, $\\int_A^B \\vec{F}\\cdot d\\vec{r} = -\\int_A^B dU = U(A) - U(B)$, which depends exclusively on end-points.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Gravitational force and ideal spring force are conservative forces, whereas kinetic friction and air resistance are non-conservative forces.\n**Reason (R):** Conservative forces do zero net work over any closed loop, whereas kinetic friction always dissipates mechanical energy into thermal energy along any closed path.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Gravitational force and ideal spring force are conservative forces, whereas kinetic friction and air resistance are non-conservative forces.\n**Reason (R):** Conservative forces do zero net work over any closed loop, whereas kinetic friction always dissipates mechanical energy into thermal energy along any closed path.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: gravity and spring forces conserve mechanical energy, while friction and air resistance are dissipative. Reason (R) is true and is the exact physical criterion: $\\oint \\vec{F}_c \\cdot d\\vec{r} = 0$, whereas $\\oint \\vec{f}_k \\cdot d\\vec{r} < 0$.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A scalar potential energy function can only be defined for conservative forces.\n**Reason (R):** For non-conservative forces, the work done in moving between two spatial coordinates is path-dependent, making it impossible to assign a unique, single-valued potential energy to a given position.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A scalar potential energy function can only be defined for conservative forces.\n**Reason (R):** For non-conservative forces, the work done in moving between two spatial coordinates is path-dependent, making it impossible to assign a unique, single-valued potential energy to a given position.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: potential energy is uniquely associated with conservative interactions. Reason (R) is true and correctly explains why: path dependence prevents $U(\\vec{r})$ from being a well-defined state function of position.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In a one-dimensional conservative force field, the force acting on a particle is zero at every point where the potential energy curve has a horizontal tangent.\n**Reason (R):** The one-dimensional conservative force is defined as the negative spatial gradient of potential energy: $F(x) = -\\frac{dU}{dx}$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In a one-dimensional conservative force field, the force acting on a particle is zero at every point where the potential energy curve has a horizontal tangent.\n**Reason (R):** The one-dimensional conservative force is defined as the negative spatial gradient of potential energy: $F(x) = -\\frac{dU}{dx}$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: a horizontal tangent means slope $\\frac{dU}{dx} = 0$, hence $F = 0$ (equilibrium point). Reason (R) is true and correctly provides the mathematical definition linking force to the slope of $U(x)$.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Frictional force can never do positive work on any body in any reference frame.\n**Reason (R):** Frictional force always opposes the absolute motion of a body in every frame of reference.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Frictional force can never do positive work on any body in any reference frame.\n**Reason (R):** Frictional force always opposes the absolute motion of a body in every frame of reference.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: static friction does positive work on a crate resting in the bed of an accelerating truck as seen from the ground. Reason (R) is also false: friction opposes relative motion between contacting surfaces, not absolute motion.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** At a point of unstable equilibrium, the potential energy of a particle attains a local maximum.\n**Reason (R):** At an unstable equilibrium position, any small displacement results in a force directed away from the equilibrium point because $\\frac{d^2U}{dx^2} < 0$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** At a point of unstable equilibrium, the potential energy of a particle attains a local maximum.\n**Reason (R):** At an unstable equilibrium position, any small displacement results in a force directed away from the equilibrium point because $\\frac{d^2U}{dx^2} < 0$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: unstable equilibrium corresponds to a peak in $U(x)$. Reason (R) is true and correctly explains why: since $\\frac{d^2U}{dx^2} < 0$, a positive displacement produces $\\frac{dU}{dx} < 0 \\implies F = -\\frac{dU}{dx} > 0$ (force accelerates the particle further away from equilibrium).",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    }
  ]
};

async function applyUpdates(testConf) {
  console.log(`Applying updates for ${testConf.subtopic} (${testConf.testId})...`);
  const tp = await db.collection("testPapers").findOne({ testId: testConf.testId });
  if (!tp) {
    console.error(`Test ${testConf.testId} not found!`);
    return;
  }

  // Update Diagrams
  for (const item of testConf.diagrams) {
    const qId = tp.questions[item.index];
    const updateDoc = {
      ...item.data,
      chapter: "Work, Energy & Power",
      subtopic: testConf.subtopic,
      subject: "Physics",
      updatedAt: new Date()
    };
    await db.collection("questionBank").updateOne(
      { _id: ObjectId.isValid(qId) && String(qId).length === 24 ? new ObjectId(qId) : qId },
      { $set: updateDoc }
    );
    console.log(`Updated ${testConf.subtopic} Q${item.index + 1}`);
  }

  // Update Section B
  for (const item of testConf.sectionB) {
    const qId = tp.questions[item.index];
    const updateDoc = {
      ...item.data,
      chapter: "Work, Energy & Power",
      subtopic: testConf.subtopic,
      subject: "Physics",
      updatedAt: new Date()
    };
    await db.collection("questionBank").updateOne(
      { _id: ObjectId.isValid(qId) && String(qId).length === 24 ? new ObjectId(qId) : qId },
      { $set: updateDoc }
    );
    console.log(`Updated ${testConf.subtopic} Q${item.index + 1}`);
  }

  await db.collection("testPapers").updateOne(
    { _id: tp._id },
    { $set: { chapter: "Work, Energy & Power", updatedAt: new Date() } }
  );
  console.log(`Test (${testConf.testId}) successfully updated!`);
}

await applyUpdates(t2_updates);
await applyUpdates(t3_updates);

await client.close();
