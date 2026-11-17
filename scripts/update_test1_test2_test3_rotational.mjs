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
// TEST 1: CENTER OF MASS
// -------------------------------------------------------------
const t1_updates = {
  testId: "neet-SUBTOPIC-Physics-Center-of-mass",
  subtopic: "Center of mass",
  diagrams: [
    {
      index: 0,
      data: {
        question: "Three point masses $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, and $m_3 = 3\\text{ kg}$ are located at the vertices of an equilateral triangle of side $L = 1\\text{ m}$ on the $xy$-plane, as shown in the figure. Mass $m_1$ is at the origin $(0,0)$, $m_2$ is at $(1, 0)$, and $m_3$ is at $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$. What are the coordinates $(x_{CM}, y_{CM})$ of the center of mass of the system?",
        text: "Three point masses $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, and $m_3 = 3\\text{ kg}$ are located at the vertices of an equilateral triangle of side $L = 1\\text{ m}$ on the $xy$-plane, as shown in the figure. Mass $m_1$ is at the origin $(0,0)$, $m_2$ is at $(1, 0)$, and $m_3$ is at $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$. What are the coordinates $(x_{CM}, y_{CM})$ of the center of mass of the system?",
        options: [
          "$\\left(\\frac{7}{12}\\text{ m}, \\frac{\\sqrt{3}}{4}\\text{ m}\\right)$",
          "$\\left(\\frac{1}{2}\\text{ m}, \\frac{\\sqrt{3}}{6}\\text{ m}\\right)$",
          "$\\left(\\frac{5}{12}\\text{ m}, \\frac{\\sqrt{3}}{4}\\text{ m}\\right)$",
          "$\\left(\\frac{7}{12}\\text{ m}, \\frac{\\sqrt{3}}{2}\\text{ m}\\right)$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test1_q1_triangle_three_masses.svg",
        explanation: "Total mass of the system: $M = m_1 + m_2 + m_3 = 1 + 2 + 3 = 6\\text{ kg}$.\nCoordinates of the masses:\n- $m_1 = 1\\text{ kg}$ at $(x_1, y_1) = (0, 0)$\n- $m_2 = 2\\text{ kg}$ at $(x_2, y_2) = (1, 0)$\n- $m_3 = 3\\text{ kg}$ at $(x_3, y_3) = \\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$\n\nCalculating $x_{CM}$:\n$$x_{CM} = \\frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{M} = \\frac{1(0) + 2(1) + 3(1/2)}{6} = \\frac{2 + 1.5}{6} = \\frac{3.5}{6} = \\frac{7}{12}\\text{ m}$$\nCalculating $y_{CM}$:\n$$y_{CM} = \\frac{m_1 y_1 + m_2 y_2 + m_3 y_3}{M} = \\frac{1(0) + 2(0) + 3(\\sqrt{3}/2)}{6} = \\frac{3\\sqrt{3}}{12} = \\frac{\\sqrt{3}}{4}\\text{ m}$$\nThus, the center of mass is at $\\left(\\frac{7}{12}\\text{ m}, \\frac{\\sqrt{3}}{4}\\text{ m}\\right)$. Hence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "A uniform thin sheet of metal is cut in the shape of an L-shaped lamina consisting of three identical square sections of side $L$, as shown in the diagram. If the origin $O$ is at the bottom-left corner, what are the coordinates $(x_{CM}, y_{CM})$ of the center of mass of the lamina?",
        text: "A uniform thin sheet of metal is cut in the shape of an L-shaped lamina consisting of three identical square sections of side $L$, as shown in the diagram. If the origin $O$ is at the bottom-left corner, what are the coordinates $(x_{CM}, y_{CM})$ of the center of mass of the lamina?",
        options: [
          "$\\left(\\frac{5}{6}L, \\frac{5}{6}L\\right)$",
          "$\\left(\\frac{3}{4}L, \\frac{3}{4}L\\right)$",
          "$\\left(\\frac{2}{3}L, \\frac{2}{3}L\\right)$",
          "$\\left(\\frac{1}{2}L, \\frac{1}{2}L\\right)$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test1_q2_l_shaped_lamina.svg",
        explanation: "Let each square have mass $m$. The total mass of the 3 squares is $M = 3m$.\nThe coordinates of the geometric centers of the three squares are:\n- Square 1 (bottom-left): $\\left(\\frac{L}{2}, \\frac{L}{2}\\right)$\n- Square 2 (bottom-right): $\\left(\\frac{3L}{2}, \\frac{L}{2}\\right)$\n- Square 3 (top-left): $\\left(\\frac{L}{2}, \\frac{3L}{2}\\right)$\n\nBy symmetry, $x_{CM} = y_{CM}$.\n$$x_{CM} = \\frac{m(L/2) + m(3L/2) + m(L/2)}{3m} = \\frac{L/2 + 3L/2 + L/2}{3} = \\frac{5L/2}{3} = \\frac{5}{6}L$$\n$$y_{CM} = \\frac{m(L/2) + m(L/2) + m(3L/2)}{3m} = \\frac{5}{6}L$$\nThus, the center of mass is at $\\left(\\frac{5}{6}L, \\frac{5}{6}L\\right)$. Hence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 4\\text{ kg}$ are connected by a light spring of force constant $k$ on a frictionless horizontal floor, as shown in the figure. The blocks are pulled apart compressing or stretching the spring and released from rest at $t = 0$. In the absence of external horizontal forces, what is the acceleration $\\vec{a}_{CM}$ and velocity $\\vec{v}_{CM}$ of the center of mass at any subsequent time $t$?",
        text: "Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 4\\text{ kg}$ are connected by a light spring of force constant $k$ on a frictionless horizontal floor, as shown in the figure. The blocks are pulled apart compressing or stretching the spring and released from rest at $t = 0$. In the absence of external horizontal forces, what is the acceleration $\\vec{a}_{CM}$ and velocity $\\vec{v}_{CM}$ of the center of mass at any subsequent time $t$?",
        options: [
          "$\\vec{a}_{CM} = 0$ and $\\vec{v}_{CM} = 0$",
          "$\\vec{a}_{CM} \\neq 0$ and oscillates periodically",
          "$\\vec{a}_{CM} = 0$ but $\\vec{v}_{CM}$ increases linearly with time",
          "$\\vec{a}_{CM} = \\frac{k}{m_1+m_2}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test1_q3_two_particles_internal_forces.svg",
        explanation: "By Newton's second law for a system of particles:\n$$\\vec{F}_{\\text{ext}} = M \\vec{a}_{CM}$$\nHere, the spring force acting between $m_1$ and $m_2$ is purely an internal action-reaction pair ($\\vec{F}_{12} = -\\vec{F}_{21}$). Since the table is frictionless and no external horizontal force acts on the two-block system, $\\vec{F}_{\\text{ext}} = 0$.\nTherefore, $\\vec{a}_{CM} = 0$ at all times. Since the system was initially released from rest, $\\vec{v}_{CM}(0) = 0$, meaning $\\vec{v}_{CM} = 0$ remains stationary at all times. Hence, option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The center of mass of a body must always lie inside the physical material of the body.\nReason (R): Center of mass is the point where the entire mass of the body can be assumed to be concentrated for translational mechanics.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The center of mass of a body must always lie inside the physical material of the body.\nReason (R): Center of mass is the point where the entire mass of the body can be assumed to be concentrated for translational mechanics.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: The center of mass of a body does not necessarily lie inside the material of the body. For example, the center of mass of a hollow ring, hollow cylinder, or hollow sphere lies in empty space at its geometric center where no matter exists.\nReason (R) is true: By definition, the center of mass is the point that moves as though all the mass were concentrated there and all external forces were applied there. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A bomb thrown in a parabolic trajectory in air explodes into multiple fragments at the apex of its path. The center of mass of all the fragments continues to follow the original parabolic trajectory until the first fragment hits the ground.\nReason (R): The forces involved in the explosion are purely internal forces of the system, and internal forces cannot change the state of motion of the center of mass.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A bomb thrown in a parabolic trajectory in air explodes into multiple fragments at the apex of its path. The center of mass of all the fragments continues to follow the original parabolic trajectory until the first fragment hits the ground.\nReason (R): The forces involved in the explosion are purely internal forces of the system, and internal forces cannot change the state of motion of the center of mass.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: The net external force on the system before and after the explosion is solely the force of gravity ($M\\vec{g}$). Therefore, $\\vec{a}_{CM} = \\vec{g}$, and the center of mass continues along the same parabolic trajectory as if no explosion had occurred.\nReason (R) is true and directly explains Assertion (A): Explosion forces are internal chemical/mechanical forces that cancel in pairs by Newton's third law ($\sum \\vec{F}_{\\text{int}} = 0$). Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a uniform semicircular wire of radius $R$, the center of mass lies at a distance of $\\frac{2R}{\\pi}$ from its center along the axis of symmetry.\nReason (R): For any symmetrical planar body, the center of mass must coincide with its geometrical center of area.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a uniform semicircular wire of radius $R$, the center of mass lies at a distance of $\\frac{2R}{\\pi}$ from its center along the axis of symmetry.\nReason (R): For any symmetrical planar body, the center of mass must coincide with its geometrical center of area.",
        options: standardAROptions,
        correctAnswer: 2, // C
        correctOption: "c",
        explanation: "Assertion (A) is true: For a uniform semicircular wire of radius $R$, $y_{CM} = \\frac{\\int y\\,dm}{\\int dm} = \\frac{2R}{\\pi}$ along the axis of symmetry from the center.\nReason (R) is false: For bodies that are not closed shapes or symmetric about multiple orthogonal planes (such as a semicircular ring or wire), the center of mass does not coincide with the center of curvature; it is shifted toward the mass concentration. Therefore, (A) is true but (R) is false."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a heavy boy and a light boy sit on a frictionless sheet of ice and pull each other toward the center using a rope, they meet at the center of mass of the two-boy system.\nReason (R): In the absence of external horizontal friction, the center of mass remains at rest because the tension in the rope is an internal force.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a heavy boy and a light boy sit on a frictionless sheet of ice and pull each other toward the center using a rope, they meet at the center of mass of the two-boy system.\nReason (R): In the absence of external horizontal friction, the center of mass remains at rest because the tension in the rope is an internal force.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Since the ice is frictionless and no external force acts horizontally, the position of the center of mass does not shift. When they meet, both boys must be at that same stationary point, which is the center of mass.\nReason (R) is true and is the exact physical explanation: The rope tension pulling the two boys is an internal action-reaction pair. Hence $\\vec{F}_{\\text{ext}} = 0 \\implies \\vec{a}_{CM} = 0$. Since $\\vec{v}_{CM} = 0$ initially, the CM remains fixed. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a non-uniform gravitational field, the center of mass and the center of gravity of an extended body do not coincide.\nReason (R): Center of mass depends only on mass distribution, whereas center of gravity is the point where the net gravitational torque on the body is zero.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a non-uniform gravitational field, the center of mass and the center of gravity of an extended body do not coincide.\nReason (R): Center of mass depends only on mass distribution, whereas center of gravity is the point where the net gravitational torque on the body is zero.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: The center of mass is determined solely by mass distribution $\\vec{R}_{CM} = \\frac{\\sum m_i \\vec{r}_i}{M}$. In a non-uniform gravitational field where $g$ varies with location, the lower parts experience stronger gravitational force per unit mass, shifting the center of gravity below the center of mass.\nReason (R) is true and correctly explains Assertion (A): Center of mass is purely geometric/inertial, while center of gravity involves the weighted force $m_i \\vec{g}_i$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the net external force on a system of particles is zero, the position of the center of mass of the system must remain completely stationary for all time.\nReason (R): When net external force is zero, the velocity of the center of mass is constant, but it may have a non-zero initial value.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the net external force on a system of particles is zero, the position of the center of mass of the system must remain completely stationary for all time.\nReason (R): When net external force is zero, the velocity of the center of mass is constant, but it may have a non-zero initial value.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: $\\vec{F}_{\\text{ext}} = 0$ implies $\\vec{a}_{CM} = 0$, which means $\\vec{v}_{CM} = \\text{constant}$. If the center of mass had an initial velocity $\\vec{v}_0 \\neq 0$, it continues to move with constant velocity in a straight line; it is not stationary!\nReason (R) is true: $\\vec{F}_{\\text{ext}} = M\\frac{d\\vec{v}_{CM}}{dt} = 0 \\implies \\vec{v}_{CM} = \\text{constant}$, which may be non-zero. Therefore, (A) is false but (R) is true."
      }
    }
  ]
};

// -------------------------------------------------------------
// TEST 2: TORQUE
// -------------------------------------------------------------
const t2_updates = {
  testId: "neet-SUBTOPIC-Physics-Torque",
  subtopic: "Torque",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A uniform horizontal rod of length $L = 2\\text{ m}$ is pivoted at its left end $O$ to a vertical wall. A force $\\vec{F} = 40\\text{ N}$ is applied at the free right end of the rod at an angle $\\theta = 30^\\circ$ above the horizontal, as shown in the diagram. What is the magnitude of the torque exerted by this force about the pivot $O$?",
        text: "A uniform horizontal rod of length $L = 2\\text{ m}$ is pivoted at its left end $O$ to a vertical wall. A force $\\vec{F} = 40\\text{ N}$ is applied at the free right end of the rod at an angle $\\theta = 30^\\circ$ above the horizontal, as shown in the diagram. What is the magnitude of the torque exerted by this force about the pivot $O$?",
        options: [
          "$40\\text{ N m}$",
          "$80\\text{ N m}$",
          "$40\\sqrt{3}\\text{ N m}$",
          "$20\\text{ N m}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test2_q1_pivoted_rod_angled_force.svg",
        explanation: "Torque about the pivot $O$ is given by the cross product of position vector and force vector:\n$$\\tau = |\\vec{r} \\times \\vec{F}| = r F \\sin\\theta$$\nHere, $r = L = 2\\text{ m}$, $F = 40\\text{ N}$, and $\\theta = 30^\\circ$ is the angle between the rod (position vector) and the force.\n$$\\tau = 2 \\times 40 \\times \\sin 30^\\circ = 80 \\times 0.5 = 40\\text{ N m}$$\nThe direction of the torque is counter-clockwise (out of the page). Hence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "A light horizontal beam of negligible mass is balanced on a fulcrum placed at its center, as shown in the figure. A mass $m_1 = 5\\text{ kg}$ is placed at a distance $d_1 = 1.5\\text{ m}$ to the left of the fulcrum. At what distance $d_2$ to the right of the fulcrum must a mass $m_2 = 3\\text{ kg}$ be placed to maintain rotational equilibrium? ($g = 10\\text{ m/s}^2$)",
        text: "A light horizontal beam of negligible mass is balanced on a fulcrum placed at its center, as shown in the figure. A mass $m_1 = 5\\text{ kg}$ is placed at a distance $d_1 = 1.5\\text{ m}$ to the left of the fulcrum. At what distance $d_2$ to the right of the fulcrum must a mass $m_2 = 3\\text{ kg}$ be placed to maintain rotational equilibrium? ($g = 10\\text{ m/s}^2$)",
        options: [
          "$2.5\\text{ m}$",
          "$2.0\\text{ m}$",
          "$3.0\\text{ m}$",
          "$1.8\\text{ m}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test2_q2_seesaw_equilibrium.svg",
        explanation: "For rotational equilibrium, the sum of clockwise torques about the fulcrum must equal the sum of counter-clockwise torques:\n$$\\sum \\tau = 0 \\implies m_1 g d_1 = m_2 g d_2$$\nSubstituting the given values:\n$$5 \\times 10 \\times 1.5 = 3 \\times 10 \\times d_2$$\n$$75 = 30 d_2 \\implies d_2 = \\frac{75}{30} = 2.5\\text{ m}$$\nThus, the mass $m_2$ must be placed at $2.5\\text{ m}$ to the right of the fulcrum. Hence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "Two equal and opposite forces of magnitude $F = 50\\text{ N}$ act tangentially in opposite directions on opposite rims of a circular steering wheel of radius $R = 0.2\\text{ m}$ (arm length $d = 2R = 0.4\\text{ m}$), as shown in the diagram. What is the net torque produced by this couple about the central axis, and what is the net translational force on the wheel?",
        text: "Two equal and opposite forces of magnitude $F = 50\\text{ N}$ act tangentially in opposite directions on opposite rims of a circular steering wheel of radius $R = 0.2\\text{ m}$ (arm length $d = 2R = 0.4\\text{ m}$), as shown in the diagram. What is the net torque produced by this couple about the central axis, and what is the net translational force on the wheel?",
        options: [
          "Torque = $20\\text{ N m}$, Net force = $0\\text{ N}$",
          "Torque = $10\\text{ N m}$, Net force = $100\\text{ N}$",
          "Torque = $0\\text{ N m}$, Net force = $0\\text{ N}$",
          "Torque = $20\\text{ N m}$, Net force = $100\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test2_q3_couple_forces.svg",
        explanation: "A couple consists of two equal, opposite, and non-collinear forces:\n1. Net translational force: $\\vec{F}_{\\text{net}} = \\vec{F} + (-\\vec{F}) = 0\\text{ N}$.\n2. Moment of couple (torque): $\\tau = F \\times d$, where $d$ is the perpendicular separation between the lines of action of the forces.\n$$\\tau = 50\\text{ N} \\times 0.4\\text{ m} = 20\\text{ N m}$$\nA couple causes pure rotation without any translational acceleration of the center of mass. Hence, option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): To open a heavy door easily, the door handle is always fixed near the outer free edge rather than near the hinge.\nReason (R): For a given applied force, torque increases linearly with the perpendicular distance from the axis of rotation.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): To open a heavy door easily, the door handle is always fixed near the outer free edge rather than near the hinge.\nReason (R): For a given applied force, torque increases linearly with the perpendicular distance from the axis of rotation.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Fixing the handle at the maximum possible distance from the hinges allows a person to open the door with minimal effort (force).\nReason (R) is true and directly explains Assertion (A): Torque is $\\tau = r F \\sin\\theta$. By maximizing lever arm $r$, a smaller force $F$ produces the required torque $\\tau$ to overcome the hinge friction and inertia. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the net external torque on a rigid body is zero about a given axis, the body must be completely at rest.\nReason (R): Rotational equilibrium requires only that the angular acceleration of the body is zero; the body may be rotating with a constant angular velocity.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the net external torque on a rigid body is zero about a given axis, the body must be completely at rest.\nReason (R): Rotational equilibrium requires only that the angular acceleration of the body is zero; the body may be rotating with a constant angular velocity.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: Zero net external torque implies $\\alpha = 0$, which means angular velocity $\\omega$ is constant. The body can either be at rest (static equilibrium, $\\omega = 0$) or rotating with steady angular velocity (dynamic rotational equilibrium, $\\omega = \\text{constant} \\neq 0$).\nReason (R) is true: By rotational dynamics $\\tau = I\\alpha = 0 \\implies \\alpha = 0$. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A couple acting on a rigid body produces rotational motion without causing any translational motion.\nReason (R): The net external force exerted by a couple is identically zero.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A couple acting on a rigid body produces rotational motion without causing any translational motion.\nReason (R): The net external force exerted by a couple is identically zero.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: A couple comprises two equal and opposite parallel forces. It provides a non-zero turning effect (torque) but cannot accelerate the center of mass.\nReason (R) is true and directly explains Assertion (A): Since $\\vec{F}_1 = -\\vec{F}_2$, $\\sum \\vec{F} = 0 \\implies \\vec{a}_{CM} = 0$. Thus there is zero translational acceleration. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Torque and work have the same dimensional formula $[\\text{M L}^2 \\text{T}^{-2}]$, yet torque is a vector quantity while work is a scalar quantity.\nReason (R): Work is defined by the dot product of force and displacement, whereas torque is defined by the cross product of position vector and force.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Torque and work have the same dimensional formula $[\\text{M L}^2 \\text{T}^{-2}]$, yet torque is a vector quantity while work is a scalar quantity.\nReason (R): Work is defined by the dot product of force and displacement, whereas torque is defined by the cross product of position vector and force.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Both quantities have dimensions $[\\text{M L}^2 \\text{T}^{-2}]$. However, torque is an axial vector pointing along the axis of rotation, while work/energy is a scalar.\nReason (R) is true and correctly explains Assertion (A): $W = \\vec{F} \\cdot \\vec{d}$ (scalar product), whereas $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ (vector product). Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The torque of a force about an axis passing through the point of application of the force is always zero.\nReason (R): When the position vector $\\vec{r}$ of the point of application relative to the axis is zero, the cross product $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ vanishes.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The torque of a force about an axis passing through the point of application of the force is always zero.\nReason (R): When the position vector $\\vec{r}$ of the point of application relative to the axis is zero, the cross product $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ vanishes.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: If the line of action or point of application intersects the axis, $\\tau = 0$.\nReason (R) is true and directly explains Assertion (A): $\\vec{r} = 0 \\implies \\vec{\\tau} = 0 \\times \\vec{F} = 0$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The magnitude of torque exerted by a couple depends strictly on the choice of the reference origin about which it is calculated.\nReason (R): The moment of a couple is given by the product of either force and the perpendicular distance between their lines of action, which is independent of the reference point.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The magnitude of torque exerted by a couple depends strictly on the choice of the reference origin about which it is calculated.\nReason (R): The moment of a couple is given by the product of either force and the perpendicular distance between their lines of action, which is independent of the reference point.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: The torque of a couple is unique and completely independent of the choice of reference origin: $\\vec{\\tau} = \\vec{r}_1 \\times \\vec{F} + \\vec{r}_2 \\times (-\\vec{F}) = (\\vec{r}_1 - \\vec{r}_2) \\times \\vec{F} = \\vec{r}_{12} \\times \\vec{F}$.\nReason (R) is true: The relative displacement vector $\\vec{r}_{12}$ between the two forces is origin-independent. Therefore, (A) is false but (R) is true."
      }
    }
  ]
};

// -------------------------------------------------------------
// TEST 3: MOMENT OF INERTIA
// -------------------------------------------------------------
const t3_updates = {
  testId: "neet-SUBTOPIC-Physics-Moment-of-inertia",
  subtopic: "Moment of inertia",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A uniform thin rod of mass $M$ and length $L$ is rotated about two different axes perpendicular to its length, as shown in the diagram: Axis 1 passes through its center of mass ($I_1$), and Axis 2 passes through one of its ends ($I_2$). What is the exact ratio $\\frac{I_2}{I_1}$?",
        text: "A uniform thin rod of mass $M$ and length $L$ is rotated about two different axes perpendicular to its length, as shown in the diagram: Axis 1 passes through its center of mass ($I_1$), and Axis 2 passes through one of its ends ($I_2$). What is the exact ratio $\\frac{I_2}{I_1}$?",
        options: [
          "$4$",
          "$2$",
          "$3$",
          "$\\frac{1}{4}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test3_q1_rod_center_vs_end.svg",
        explanation: "For a uniform thin rod of mass $M$ and length $L$:\n1. Moment of inertia about central transverse axis (through CM): $I_1 = \\frac{1}{12} M L^2$.\n2. Moment of inertia about transverse end axis: $I_2 = \\frac{1}{3} M L^2$.\n$$\\frac{I_2}{I_1} = \\frac{\\frac{1}{3} M L^2}{\\frac{1}{12} M L^2} = \\frac{12}{3} = 4$$\nThus, the moment of inertia about the end is 4 times that about the center. Hence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "Four point masses, each of mass $m$, are fixed at the four corners $A, B, C, D$ of a light rigid square frame of side $a$ and negligible mass, as shown in the figure. What is the moment of inertia of the system about an axis passing through the side $AB$?",
        text: "Four point masses, each of mass $m$, are fixed at the four corners $A, B, C, D$ of a light rigid square frame of side $a$ and negligible mass, as shown in the figure. What is the moment of inertia of the system about an axis passing through the side $AB$?",
        options: [
          "$2 m a^2$",
          "$4 m a^2$",
          "$m a^2$",
          "$\\frac{3}{2} m a^2$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test3_q2_four_masses_square.svg",
        explanation: "The axis of rotation passes along side $AB$:\n- The perpendicular distance of masses at corners $A$ and $B$ from the axis is $r_A = 0$ and $r_B = 0$.\n- The perpendicular distance of mass at corner $C$ from side $AB$ is $r_C = a$.\n- The perpendicular distance of mass at corner $D$ from side $AB$ is $r_D = a$.\n\nTotal moment of inertia:\n$$I = m r_A^2 + m r_B^2 + m r_C^2 + m r_D^2 = m(0)^2 + m(0)^2 + m a^2 + m a^2 = 2 m a^2$$\nHence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "A thin circular ring, a uniform circular disc, and a solid sphere all have the identical mass $M$ and radius $R$, as shown in the diagram. Which of the following correctly arranges these three bodies in descending order of their radius of gyration $k$ about their respective central axes of symmetry?",
        text: "A thin circular ring, a uniform circular disc, and a solid sphere all have the identical mass $M$ and radius $R$, as shown in the diagram. Which of the following correctly arranges these three bodies in descending order of their radius of gyration $k$ about their respective central axes of symmetry?",
        options: [
          "$k_{\\text{ring}} > k_{\\text{disc}} > k_{\\text{sphere}}$",
          "$k_{\\text{sphere}} > k_{\\text{disc}} > k_{\\text{ring}}$",
          "$k_{\\text{disc}} > k_{\\text{ring}} > k_{\\text{sphere}}$",
          "$k_{\\text{ring}} = k_{\\text{disc}} = k_{\\text{sphere}}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test3_q3_ring_disc_annular.svg",
        explanation: "Radius of gyration $k = \\sqrt{\\frac{I}{M}}$:\n- Thin circular ring: $I = M R^2 \\implies k_{\\text{ring}} = R = 1.0 R$\n- Uniform disc: $I = \\frac{1}{2} M R^2 \\implies k_{\\text{disc}} = \\frac{R}{\\sqrt{2}} \\approx 0.707 R$\n- Solid sphere: $I = \\frac{2}{5} M R^2 \\implies k_{\\text{sphere}} = \\sqrt{\\frac{2}{5}} R \\approx 0.632 R$\n\nComparing values: $1.0 R > 0.707 R > 0.632 R$, so $k_{\\text{ring}} > k_{\\text{disc}} > k_{\\text{sphere}}$. Hence, option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The moment of inertia of a rigid body depends not only on its total mass, but also on the distribution of mass relative to the axis of rotation.\nReason (R): For a system of particles, moment of inertia is defined as $I = \\sum m_i r_i^2$, where $r_i$ is the perpendicular distance of the $i^{\\text{th}}$ particle from the axis.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The moment of inertia of a rigid body depends not only on its total mass, but also on the distribution of mass relative to the axis of rotation.\nReason (R): For a system of particles, moment of inertia is defined as $I = \\sum m_i r_i^2$, where $r_i$ is the perpendicular distance of the $i^{\\text{th}}$ particle from the axis.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Two bodies with the exact same mass and radius (e.g., a ring and a disc) have different moments of inertia because the mass is located at different distances from the axis.\nReason (R) is true and directly explains Assertion (A): The definition $I = \\sum m_i r_i^2$ demonstrates that mass elements located further from the axis contribute quadratically more to the rotational inertia. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A hollow cylinder has a larger moment of inertia than a solid cylinder of the same mass, outer length, and outer radius when rotated about their central longitudinal axes.\nReason (R): In a hollow cylinder, the entire mass is concentrated at the maximum radius from the axis of rotation.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A hollow cylinder has a larger moment of inertia than a solid cylinder of the same mass, outer length, and outer radius when rotated about their central longitudinal axes.\nReason (R): In a hollow cylinder, the entire mass is concentrated at the maximum radius from the axis of rotation.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: $I_{\\text{hollow}} = M R^2$, whereas $I_{\\text{solid}} = \\frac{1}{2} M R^2$. The hollow cylinder has twice the moment of inertia.\nReason (R) is true and directly explains Assertion (A): For the thin hollow cylinder, all particles are at distance $R$ from the axis, whereas for the solid cylinder, mass is distributed from $0$ to $R$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The radius of gyration of a rotating rigid body is a fixed physical constant of the body, completely independent of the choice of rotation axis.\nReason (R): The radius of gyration is defined by $k = \\sqrt{\\frac{I}{M}}$, which depends directly on the moment of inertia $I$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The radius of gyration of a rotating rigid body is a fixed physical constant of the body, completely independent of the choice of rotation axis.\nReason (R): The radius of gyration is defined by $k = \\sqrt{\\frac{I}{M}}$, which depends directly on the moment of inertia $I$.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: The radius of gyration $k = \\sqrt{I/M}$ changes whenever the axis of rotation changes, because $I$ changes with the axis.\nReason (R) is true: By definition $k = \\sqrt{I/M}$, so $k$ varies directly as $I$ changes for different axes. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the temperature of a uniform solid metal disc increases, its moment of inertia about its central transverse axis increases.\nReason (R): Thermal expansion increases the radius of the disc, while the total mass of the disc remains constant.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the temperature of a uniform solid metal disc increases, its moment of inertia about its central transverse axis increases.\nReason (R): Thermal expansion increases the radius of the disc, while the total mass of the disc remains constant.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: As temperature increases, $I = \\frac{1}{2} M R^2$ increases.\nReason (R) is true and correctly explains Assertion (A): $R = R_0(1 + \\alpha \\Delta T)$, so $I = \\frac{1}{2}M R_0^2(1 + 2\\alpha \\Delta T)$. Since mass $M$ is conserved and radius $R$ expands, $I$ increases. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In rotational motion, the moment of inertia plays the exact same role as mass plays in linear translational motion.\nReason (R): Just as mass represents the measure of inertia in linear motion ($F = ma$), moment of inertia represents the measure of rotational inertia in angular motion ($\\tau = I\\alpha$).",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In rotational motion, the moment of inertia plays the exact same role as mass plays in linear translational motion.\nReason (R): Just as mass represents the measure of inertia in linear motion ($F = ma$), moment of inertia represents the measure of rotational inertia in angular motion ($\\tau = I\\alpha$).",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Moment of inertia is the rotational analogue of inertial mass.\nReason (R) is true and is the exact explanation: Newton's second law for rotation is $\\tau = I\\alpha$, where $I$ quantifies the resistance of an object to changes in its rotational state. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The moment of inertia of a uniform circular ring about an axis in its own plane passing through its center is $\\frac{1}{2}MR^2$.\nReason (R): By the perpendicular axis theorem, the moment of inertia about any diameter in the plane of the ring is half the moment of inertia about the central perpendicular axis.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The moment of inertia of a uniform circular ring about an axis in its own plane passing through its center is $\\frac{1}{2}MR^2$.\nReason (R): By the perpendicular axis theorem, the moment of inertia about any diameter in the plane of the ring is half the moment of inertia about the central perpendicular axis.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: An axis in the plane of the ring through its center is a diameter axis, and $I_d = \\frac{1}{2} M R^2$.\nReason (R) is true and correctly explains Assertion (A): By the perpendicular axis theorem, $I_z = I_x + I_y = 2 I_d$. Since $I_z = M R^2$, $I_d = \\frac{1}{2} I_z = \\frac{1}{2} M R^2$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    }
  ]
};

async function applyTestUpdates(cfg) {
  console.log(`Applying updates for ${cfg.subtopic} (${cfg.testId})...`);
  const test = await db.collection("testPapers").findOne({ testId: cfg.testId });
  if (!test) {
    console.error(`Test ${cfg.testId} not found in testPapers!`);
    return;
  }

  const qIds = test.questions;

  // 1. Update Diagram Questions
  for (const diag of cfg.diagrams) {
    const qId = qIds[diag.index];
    const objId = ObjectId.isValid(qId) ? new ObjectId(qId) : qId;

    await db.collection("questionBank").updateOne(
      { _id: objId },
      {
        $set: {
          ...diag.data,
          chapter: "System of Particles & Rotational Motion",
          topic: "System of Particles & Rotational Motion",
          subTopic: cfg.subtopic,
          subject: "Physics",
          difficulty: "Medium",
          type: "MCQ",
          questionType: "MCQ (Multiple Choice Question)",
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated ${cfg.subtopic} Q${diag.index + 1}`);
  }

  // 2. Update Assertion-Reason Questions
  for (const ar of cfg.assertionReasons) {
    const qId = qIds[ar.index];
    const objId = ObjectId.isValid(qId) ? new ObjectId(qId) : qId;

    await db.collection("questionBank").updateOne(
      { _id: objId },
      {
        $set: {
          ...ar.data,
          chapter: "System of Particles & Rotational Motion",
          topic: "System of Particles & Rotational Motion",
          subTopic: cfg.subtopic,
          subject: "Physics",
          difficulty: "Difficult",
          type: "ASSERTION_REASON",
          questionType: "Assertion–Reasoning",
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated ${cfg.subtopic} Q${ar.index + 1}`);
  }

  // 3. Update testPaper metadata
  await db.collection("testPapers").updateOne(
    { testId: cfg.testId },
    {
      $set: {
        chapter: "System of Particles & Rotational Motion",
        subject: "Physics",
        updatedAt: new Date()
      }
    }
  );
  console.log(`Test (${cfg.testId}) successfully updated!`);
}

await applyTestUpdates(t1_updates);
await applyTestUpdates(t2_updates);
await applyTestUpdates(t3_updates);

await client.close();
