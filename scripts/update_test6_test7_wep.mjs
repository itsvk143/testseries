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
// TEST 6: POWER AND VARIABLE FORCE
// -------------------------------------------------------------
const t6_updates = {
  testId: "neet-SUBTOPIC-Physics-Power-and-variable-force",
  subtopic: "Power and variable force",
  diagrams: [
    {
      index: 0,
      data: {
        question: "The power $P$ delivered to a particle of mass $m = 2\\text{ kg}$ initially at rest varies with time $t$ as shown in the trapezoidal graph. What is the speed of the particle at $t = 6\\text{ s}$?",
        text: "The power $P$ delivered to a particle of mass $m = 2\\text{ kg}$ initially at rest varies with time $t$ as shown in the trapezoidal graph. What is the speed of the particle at $t = 6\\text{ s}$?",
        options: [
          "$6\\text{ m/s}$",
          "$12\\text{ m/s}$",
          "$4\\text{ m/s}$",
          "$8\\text{ m/s}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test6_q1_power_time_graph.svg",
        explanation: "The total work done on the particle is equal to the area under the power-time graph from $t = 0$ to $t = 6\\text{ s}$:\n$$\\text{Area} = \\frac{1}{2} \\times (\\text{sum of parallel sides}) \\times \\text{height} = \\frac{1}{2} \\times (6 + 3) \\times 8 = \\frac{1}{2} \\times 9 \\times 8 = 36\\text{ J}$$\nBy the work-energy theorem, since the particle starts from rest ($K_i = 0$):\n$$W = \\Delta K = \\frac{1}{2} m v^2 \\implies 36 = \\frac{1}{2}(2) v^2 \\implies v^2 = 36 \\implies v = 6\\text{ m/s}$$\nHence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "A constant force $\\vec{F} = 20\\text{ N}$ acts on a body moving with instantaneous velocity $\\vec{v} = 5\\text{ m/s}$. If the angle between the force vector and the velocity vector is $\\theta = 60^\\circ$, as shown in the diagram, what is the instantaneous power delivered by the force?",
        text: "A constant force $\\vec{F} = 20\\text{ N}$ acts on a body moving with instantaneous velocity $\\vec{v} = 5\\text{ m/s}$. If the angle between the force vector and the velocity vector is $\\theta = 60^\\circ$, as shown in the diagram, what is the instantaneous power delivered by the force?",
        options: [
          "$50\\text{ W}$",
          "$100\\text{ W}$",
          "$25\\sqrt{3}\\text{ W}$",
          "$86.6\\text{ W}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test6_q2_force_velocity_vectors.svg",
        explanation: "Instantaneous power is given by the scalar product of force and velocity vectors:\n$$P = \\vec{F} \\cdot \\vec{v} = F v \\cos\\theta$$\nGiven $F = 20\\text{ N}$, $v = 5\\text{ m/s}$, and $\\theta = 60^\\circ$:\n$$P = 20 \\times 5 \\times \\cos 60^\\circ = 100 \\times 0.5 = 50\\text{ W}$$\nHence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "An electric vehicle of mass $m$ starts from rest and is driven by an engine delivering constant mechanical power $P$. The velocity-time response of the vehicle is shown in the figure. How does the distance $x$ traversed by the vehicle vary with elapsed time $t$?",
        text: "An electric vehicle of mass $m$ starts from rest and is driven by an engine delivering constant mechanical power $P$. The velocity-time response of the vehicle is shown in the figure. How does the distance $x$ traversed by the vehicle vary with elapsed time $t$?",
        options: [
          "$x \\propto t^{3/2}$",
          "$x \\propto t^{2}$",
          "$x \\propto t^{1/2}$",
          "$x \\propto t^{5/2}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test6_q3_constant_power_vt_graph.svg",
        explanation: "Given constant power $P$:\n$$P = F v = \\left(m v \\frac{dv}{dt}\\right) v = m v^2 \\frac{dv}{dt} \\implies v^2 dv = \\frac{P}{m} dt$$\nIntegrating from rest ($v = 0$ at $t = 0$):\n$$\\frac{v^3}{3} = \\frac{P}{m} t \\implies v = \\left(\\frac{3P}{m}\\right)^{1/3} t^{1/3}$$\nAlternatively, using work-energy: $P t = \\frac{1}{2}m v^2 \\implies v = \\sqrt{\\frac{2P}{m}} t^{1/2}$.\n(Note: If power is constant with instantaneous speed $v = \\frac{dx}{dt}$):\n$$v = \\frac{dx}{dt} = k t^{1/2} \\implies x = \\int k t^{1/2} dt = \\frac{2}{3} k t^{3/2} \\implies x \\propto t^{3/2}$$\nHence, distance varies as $t^{3/2}$, and option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A vehicle accelerated from rest by an engine delivering constant power has a decreasing acceleration over time.\nReason (R): When power $P = F v$ is constant, the driving force $F = \\frac{P}{v}$ decreases as speed $v$ increases.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A vehicle accelerated from rest by an engine delivering constant power has a decreasing acceleration over time.\nReason (R): When power $P = F v$ is constant, the driving force $F = \\frac{P}{v}$ decreases as speed $v$ increases.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: For constant power, acceleration $a = \\frac{F}{m} = \\frac{P}{m v}$. Since speed $v$ increases with time, acceleration $a$ inversely decreases.\nReason (R) is true and correctly explains Assertion (A): $P = F v$ implies $F = P/v$, so force is inversely proportional to velocity. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The unit kilowatt-hour ($\\text{kWh}$) is a commercial unit of electrical power.\nReason (R): One kilowatt-hour is equivalent to $3.6 \\times 10^6\\text{ Joules}$ of energy.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The unit kilowatt-hour ($\\text{kWh}$) is a commercial unit of electrical power.\nReason (R): One kilowatt-hour is equivalent to $3.6 \\times 10^6\\text{ Joules}$ of energy.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: Kilowatt-hour ($\\text{kWh}$) is a unit of energy, not power. Power is energy per unit time (kilowatt), so $\\text{power} \\times \\text{time} = \\text{energy}$.\nReason (R) is true: $1\\text{ kWh} = 1000\\text{ W} \\times 3600\\text{ s} = 3.6 \\times 10^6\\text{ J}$. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Power is a scalar quantity even though it is calculated from two vector quantities, force and velocity.\nReason (R): Instantaneous power is defined as the dot product (scalar product) of force and velocity vectors: $P = \\vec{F} \\cdot \\vec{v}$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Power is a scalar quantity even though it is calculated from two vector quantities, force and velocity.\nReason (R): Instantaneous power is defined as the dot product (scalar product) of force and velocity vectors: $P = \\vec{F} \\cdot \\vec{v}$.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Power has magnitude only and obeys scalar addition rules.\nReason (R) is true and correctly explains Assertion (A): By definition, $P = \\frac{dW}{dt} = \\frac{\\vec{F}\\cdot d\\vec{r}}{dt} = \\vec{F}\\cdot \\vec{v}$, which is the scalar product of two vectors, producing a scalar. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A variable force $\\vec{F} = (3x^2\\hat{i} + 2y\\hat{j})\\text{ N}$ acting on a particle moving from the origin $(0,0)$ to $(2,3)$ does a unique amount of work independent of the path taken.\nReason (R): The work done by any variable force is calculated by integrating $W = \\int \\vec{F} \\cdot d\\vec{r}$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A variable force $\\vec{F} = (3x^2\\hat{i} + 2y\\hat{j})\\text{ N}$ acting on a particle moving from the origin $(0,0)$ to $(2,3)$ does a unique amount of work independent of the path taken.\nReason (R): The work done by any variable force is calculated by integrating $W = \\int \\vec{F} \\cdot d\\vec{r}$.",
        options: standardAROptions,
        correctAnswer: 1, // B
        correctOption: "b",
        explanation: "Assertion (A) is true: The curl of $\\vec{F}$ is zero ($\\frac{\\partial F_y}{\\partial x} = \\frac{\\partial F_x}{\\partial y} = 0$), so the force is conservative and path-independent.\nReason (R) is true: The work done by any variable force is indeed $W = \\int \\vec{F}\\cdot d\\vec{r}$.\nHowever, Reason (R) is the general formula for work and does not explain path-independence (path-independence requires $\\vec{F}$ to be conservative). Thus, both are true, but (R) is not the correct explanation of (A)."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The slope of the work-time graph at any instant represents the instantaneous power delivered to the body.\nReason (R): The area under the power-time graph over an interval represents the work done during that interval.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The slope of the work-time graph at any instant represents the instantaneous power delivered to the body.\nReason (R): The area under the power-time graph over an interval represents the work done during that interval.",
        options: standardAROptions,
        correctAnswer: 1, // B
        correctOption: "b",
        explanation: "Assertion (A) is true: Instantaneous power is $P = \\frac{dW}{dt}$, which is the derivative (slope) of the work versus time curve.\nReason (R) is true: Since $dW = P\\,dt$, the integral $W = \\int P\\,dt$ is the area under the power-time curve.\nBoth are fundamental calculus relations of power and work, but (R) does not explain (A). Therefore, both are true, but (R) is not the correct explanation of (A)."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a pump lifts water at a constant rate $v$ from a well of depth $h$ and discharges it with velocity $v$, the power delivered by the pump is simply $P = \\left(\\frac{dm}{dt}\\right)gh$.\nReason (R): The pump must supply energy both to increase the gravitational potential energy of the water and to impart kinetic energy to the discharged water stream.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a pump lifts water at a constant rate $v$ from a well of depth $h$ and discharges it with velocity $v$, the power delivered by the pump is simply $P = \\left(\\frac{dm}{dt}\\right)gh$.\nReason (R): The pump must supply energy both to increase the gravitational potential energy of the water and to impart kinetic energy to the discharged water stream.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: The total power delivered is $P = \\left(\\frac{dm}{dt}\\right)gh + \\frac{1}{2}\\left(\\frac{dm}{dt}\\right)v^2$, which includes both potential energy and kinetic energy components.\nReason (R) is true: The work done per second equals $\\frac{dE}{dt} = \\frac{d(mgh)}{dt} + \\frac{d(\\frac{1}{2}mv^2)}{dt}$. Therefore, (A) is false but (R) is true."
      }
    }
  ]
};

// -------------------------------------------------------------
// TEST 7: ELASTIC AND INELASTIC COLLISIONS
// -------------------------------------------------------------
const t7_updates = {
  testId: "neet-SUBTOPIC-Physics-Elastic-and-inelastic-collisions",
  subtopic: "Elastic and inelastic collisions",
  diagrams: [
    {
      index: 0,
      data: {
        question: "Two smooth spheres of masses $m_1 = 3\\text{ kg}$ and $m_2 = 1\\text{ kg}$ undergo a 1D head-on elastic collision along a horizontal frictionless surface, as shown in the diagram. Initially, $m_1$ moves to the right with speed $u_1 = 4\\text{ m/s}$ and $m_2$ is at rest ($u_2 = 0$). What is the velocity $v_1$ of the $3\\text{ kg}$ mass after the collision?",
        text: "Two smooth spheres of masses $m_1 = 3\\text{ kg}$ and $m_2 = 1\\text{ kg}$ undergo a 1D head-on elastic collision along a horizontal frictionless surface, as shown in the diagram. Initially, $m_1$ moves to the right with speed $u_1 = 4\\text{ m/s}$ and $m_2$ is at rest ($u_2 = 0$). What is the velocity $v_1$ of the $3\\text{ kg}$ mass after the collision?",
        options: [
          "$2\\text{ m/s}$ to the right",
          "$1\\text{ m/s}$ to the right",
          "$3\\text{ m/s}$ to the right",
          "$0\\text{ m/s}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test7_q1_1d_elastic_collision.svg",
        explanation: "For a 1D head-on elastic collision with $u_2 = 0$, the velocity of $m_1$ after collision is:\n$$v_1 = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right) u_1$$\nGiven $m_1 = 3\\text{ kg}$, $m_2 = 1\\text{ kg}$, and $u_1 = 4\\text{ m/s}$:\n$$v_1 = \\left(\\frac{3 - 1}{3 + 1}\\right) \\times 4 = \\frac{2}{4} \\times 4 = 2\\text{ m/s}$$\nSince $v_1 > 0$, it continues to move to the right at $2\\text{ m/s}$. Hence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "In a ballistic pendulum experiment shown in the figure, a bullet of mass $m = 20\\text{ g}$ is fired horizontally with speed $u = 200\\text{ m/s}$ into a stationary wooden block of mass $M = 980\\text{ g}$ suspended by light strings. The bullet embeds completely inside the block. What is the maximum vertical height $h$ to which the block-bullet system rises? ($g = 10\\text{ m/s}^2$)",
        text: "In a ballistic pendulum experiment shown in the figure, a bullet of mass $m = 20\\text{ g}$ is fired horizontally with speed $u = 200\\text{ m/s}$ into a stationary wooden block of mass $M = 980\\text{ g}$ suspended by light strings. The bullet embeds completely inside the block. What is the maximum vertical height $h$ to which the block-bullet system rises? ($g = 10\\text{ m/s}^2$)",
        options: [
          "$0.8\\text{ m}$",
          "$0.4\\text{ m}$",
          "$1.2\\text{ m}$",
          "$1.6\\text{ m}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test7_q2_ballistic_pendulum.svg",
        explanation: "Stage 1 (Perfectly inelastic collision): Momentum is conserved during the impact:\n$$m u = (M + m) V \\implies V = \\frac{m u}{M + m} = \\frac{0.02 \\times 200}{0.98 + 0.02} = \\frac{4}{1.0} = 4\\text{ m/s}$$\nStage 2 (Conservation of mechanical energy during the swing):\n$$\\frac{1}{2}(M + m) V^2 = (M + m)gh \\implies h = \\frac{V^2}{2g} = \\frac{4^2}{2 \\times 10} = \\frac{16}{20} = 0.8\\text{ m}$$\nHence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "A moving sphere of mass $m$ strikes an identical stationary sphere of mass $m$ in an oblique elastic 2D collision on a frictionless horizontal plane, as shown in the diagram. After the collision, the two spheres scatter at angles $\\theta_1$ and $\\theta_2$ relative to the incident direction. What is the sum of the scattering angles $\\theta_1 + \\theta_2$?",
        text: "A moving sphere of mass $m$ strikes an identical stationary sphere of mass $m$ in an oblique elastic 2D collision on a frictionless horizontal plane, as shown in the diagram. After the collision, the two spheres scatter at angles $\\theta_1$ and $\\theta_2$ relative to the incident direction. What is the sum of the scattering angles $\\theta_1 + \\theta_2$?",
        options: [
          "$90^\\circ$",
          "$60^\\circ$",
          "$45^\\circ$",
          "$120^\\circ$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test7_q3_2d_oblique_collision.svg",
        explanation: "By conservation of linear momentum: $\\vec{u}_1 = \\vec{v}_1 + \\vec{v}_2$.\nSquaring both sides:\n$$u_1^2 = v_1^2 + v_2^2 + 2 \\vec{v}_1 \\cdot \\vec{v}_2$$\nBy conservation of kinetic energy for an elastic collision ($e = 1$):\n$$\\frac{1}{2}m u_1^2 = \\frac{1}{2}m v_1^2 + \\frac{1}{2}m v_2^2 \\implies u_1^2 = v_1^2 + v_2^2$$\nEquating the two expressions for $u_1^2$:\n$$v_1^2 + v_2^2 = v_1^2 + v_2^2 + 2 \\vec{v}_1 \\cdot \\vec{v}_2 \\implies 2 \\vec{v}_1 \\cdot \\vec{v}_2 = 0 \\implies \\vec{v}_1 \\perp \\vec{v}_2$$\nThus, the angle between the two final velocity vectors is $\\theta_1 + \\theta_2 = 90^\\circ$.\nHence, option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In any collision between two isolated bodies, the total linear momentum of the system is strictly conserved, whether the collision is elastic or inelastic.\nReason (R): During a collision, the forces exerted by the colliding bodies on each other are internal action-reaction pairs that cancel each other according to Newton's third law.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In any collision between two isolated bodies, the total linear momentum of the system is strictly conserved, whether the collision is elastic or inelastic.\nReason (R): During a collision, the forces exerted by the colliding bodies on each other are internal action-reaction pairs that cancel each other according to Newton's third law.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: In the absence of net external forces, total linear momentum is conserved in all collisions.\nReason (R) is true and is the exact fundamental explanation: The collision forces $\\vec{F}_{12} = -\\vec{F}_{21}$ are internal to the two-body system, so net external force $\\vec{F}_{\\text{ext}} = 0$, meaning $\\frac{d\\vec{P}}{dt} = 0$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a head-on elastic collision between two bodies of equal mass, the colliding bodies completely interchange their velocities after impact.\nReason (R): In a 1D elastic collision between equal masses, conservation of linear momentum and conservation of kinetic energy uniquely require $v_1 = u_2$ and $v_2 = u_1$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a head-on elastic collision between two bodies of equal mass, the colliding bodies completely interchange their velocities after impact.\nReason (R): In a 1D elastic collision between equal masses, conservation of linear momentum and conservation of kinetic energy uniquely require $v_1 = u_2$ and $v_2 = u_1$.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: For $m_1 = m_2$ and $e = 1$, $v_1 = u_2$ and $v_2 = u_1$.\nReason (R) is true and directly explains Assertion (A): From the standard 1D elastic equations $v_1 = \\frac{m_1 - m_2}{m_1 + m_2}u_1 + \\frac{2m_2}{m_1 + m_2}u_2$, setting $m_1 = m_2$ yields $v_1 = u_2$ and $v_2 = u_1$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a perfectly inelastic collision, 100% of the initial kinetic energy of the system is always converted into thermal energy or deformation.\nReason (R): In a perfectly inelastic collision, the colliding bodies stick together and move with a common velocity.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a perfectly inelastic collision, 100% of the initial kinetic energy of the system is always converted into thermal energy or deformation.\nReason (R): In a perfectly inelastic collision, the colliding bodies stick together and move with a common velocity.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: 100% kinetic energy is lost only when the initial total linear momentum is zero in the center of mass frame (such as equal masses moving toward each other with equal speeds). If the initial momentum is non-zero, the combined mass must retain kinetic energy $K_f = \\frac{P^2}{2(m_1 + m_2)} > 0$ to satisfy momentum conservation.\nReason (R) is true: By definition of a perfectly inelastic collision ($e = 0$), the bodies coalesce and move with a single common velocity. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a heavy truck collides head-on with a stationary mosquito, the speed of the mosquito after an elastic collision is nearly twice the speed of the truck.\nReason (R): In a head-on elastic collision with a stationary target of negligible mass ($m_2 \\ll m_1$), the target rebounds with velocity $v_2 \\approx 2 u_1$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a heavy truck collides head-on with a stationary mosquito, the speed of the mosquito after an elastic collision is nearly twice the speed of the truck.\nReason (R): In a head-on elastic collision with a stationary target of negligible mass ($m_2 \\ll m_1$), the target rebounds with velocity $v_2 \\approx 2 u_1$.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: The final speed of the light body is $v_2 \\approx 2 u_1$.\nReason (R) is true and correctly explains Assertion (A): From $v_2 = \\frac{2m_1}{m_1 + m_2} u_1 + \\frac{m_2 - m_1}{m_1 + m_2} u_2$, for $u_2 = 0$ and $m_2 \\ll m_1$, $\\frac{2m_1}{m_1 + m_2} \\approx \\frac{2m_1}{m_1} = 2$, so $v_2 \\approx 2 u_1$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The coefficient of restitution $e$ for a collision between two bodies is a property of the materials of the colliding bodies and is independent of their geometry or impact velocity.\nReason (R): For perfectly elastic collision $e = 1$, and for perfectly inelastic collision $e = 0$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The coefficient of restitution $e$ for a collision between two bodies is a property of the materials of the colliding bodies and is independent of their geometry or impact velocity.\nReason (R): For perfectly elastic collision $e = 1$, and for perfectly inelastic collision $e = 0$.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: In real mechanics, the coefficient of restitution $e$ depends not only on the material pair, but also on the shape, size, surface roughness, and significantly on the impact velocity (at higher velocities, plastic deformation increases, decreasing $e$).\nReason (R) is true: By definition, $e = 1$ for an ideal elastic collision and $e = 0$ for a perfectly inelastic collision. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a two-dimensional elastic collision between two particles of equal mass, where one particle is initially at rest, the particles always move at right angles ($90^\\circ$) to each other after the collision.\nReason (R): In any elastic collision, both momentum vector $\\vec{P}$ and scalar kinetic energy $K$ are conserved.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a two-dimensional elastic collision between two particles of equal mass, where one particle is initially at rest, the particles always move at right angles ($90^\\circ$) to each other after the collision.\nReason (R): In any elastic collision, both momentum vector $\\vec{P}$ and scalar kinetic energy $K$ are conserved.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Provided the collision is not head-on (in which case one stops and the other continues along the line of motion), the angle between the two final velocities is $\\theta_1 + \\theta_2 = 90^\\circ$.\nReason (R) is true and correctly explains Assertion (A): $\\vec{u}_1 = \\vec{v}_1 + \\vec{v}_2 \\implies u_1^2 = v_1^2 + v_2^2 + 2\\vec{v}_1\\cdot\\vec{v}_2$. Kinetic energy conservation gives $u_1^2 = v_1^2 + v_2^2$. Therefore, $2\\vec{v}_1\\cdot\\vec{v}_2 = 0 \\implies \\vec{v}_1 \\perp \\vec{v}_2$. Both (A) and (R) are true, and (R) correctly explains (A)."
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
          chapter: "Work, Energy & Power",
          topic: "Work, Energy & Power",
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
          chapter: "Work, Energy & Power",
          topic: "Work, Energy & Power",
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
        chapter: "Work, Energy & Power",
        subject: "Physics",
        updatedAt: new Date()
      }
    }
  );
  console.log(`Test (${cfg.testId}) successfully updated!`);
}

await applyTestUpdates(t6_updates);
await applyTestUpdates(t7_updates);

await client.close();
