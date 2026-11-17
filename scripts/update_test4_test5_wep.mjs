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
// TEST 4: CONSERVATION OF MECHANICAL ENERGY
// -------------------------------------------------------------
const t4_updates = {
  testId: "neet-SUBTOPIC-Physics-Conservation-of-mechanical-energy",
  subtopic: "Conservation of mechanical energy",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A small frictionless slider of mass $m$ is released from rest at height $h$ on a curved track that terminates in a vertical circular loop of radius $R$, as shown in the figure. What is the minimum release height $h_{\\text{min}}$ so that the slider completes the vertical loop without losing contact with the track at the highest point?",
        text: "A small frictionless slider of mass $m$ is released from rest at height $h$ on a curved track that terminates in a vertical circular loop of radius $R$, as shown in the figure. What is the minimum release height $h_{\\text{min}}$ so that the slider completes the vertical loop without losing contact with the track at the highest point?",
        options: [
          "$\\frac{5}{2}R$",
          "$2R$",
          "$\\frac{3}{2}R$",
          "$3R$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test4_q1_curved_track_loop.svg",
        explanation: "To complete the vertical circular loop without losing contact at the highest point, the critical speed at the top must satisfy $N + mg = \\frac{m v_{\\text{top}}^2}{R} \\implies v_{\\text{top}} \\ge \\sqrt{gR}$.\n\nBy conservation of mechanical energy between the release point (height $h$) and the top of the loop (height $2R$):\n$$mgh = mg(2R) + \\frac{1}{2}m v_{\\text{top}}^2$$\nSubstituting $v_{\\text{top}}^2 = gR$:\n$$mgh_{\\text{min}} = 2mgR + \\frac{1}{2}mgR = \\frac{5}{2}mgR \\implies h_{\\text{min}} = \\frac{5}{2}R$$\nHence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "A simple pendulum of bob mass $m$ and string length $L$ is displaced from its vertical equilibrium position by an initial angle $\\theta_0 = 60^\\circ$ and released from rest, as shown in the diagram. Neglecting air resistance, what is the speed $v$ of the bob as it passes through the lowest equilibrium point?",
        text: "A simple pendulum of bob mass $m$ and string length $L$ is displaced from its vertical equilibrium position by an initial angle $\\theta_0 = 60^\\circ$ and released from rest, as shown in the diagram. Neglecting air resistance, what is the speed $v$ of the bob as it passes through the lowest equilibrium point?",
        options: [
          "$\\sqrt{gL}$",
          "$\\sqrt{2gL}$",
          "$\\sqrt{\\frac{gL}{2}}$",
          "$2\\sqrt{gL}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test4_q2_pendulum_energy_exchange.svg",
        explanation: "The initial vertical height of the bob above the lowest point is:\n$$h = L(1 - \\cos\\theta_0) = L(1 - \\cos 60^\\circ) = L\\left(1 - \\frac{1}{2}\\right) = \\frac{L}{2}$$\nSince only gravity does work (tension is perpendicular to displacement), mechanical energy is conserved:\n$$mgh = \\frac{1}{2}m v^2 \\implies mg\\left(\\frac{L}{2}\\right) = \\frac{1}{2}m v^2 \\implies v = \\sqrt{gL}$$\nHence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "A block of mass $m = 2\\text{ kg}$ is released from rest at the top of an inclined plane of length $d = 5\\text{ m}$ and angle of inclination $\\theta = 30^\\circ$. The incline is rough with coefficient of kinetic friction $\\mu_k = 0.2$. At the bottom of the incline, the block collides with and compresses a light spring of stiffness $k = 400\\text{ N/m}$. What is the maximum compression $x$ of the spring? (Take $g = 10\\text{ m/s}^2$, $\\cos 30^\\circ = 0.866$, and assume the spring length is small compared to $d$.)",
        text: "A block of mass $m = 2\\text{ kg}$ is released from rest at the top of an inclined plane of length $d = 5\\text{ m}$ and angle of inclination $\\theta = 30^\\circ$. The incline is rough with coefficient of kinetic friction $\\mu_k = 0.2$. At the bottom of the incline, the block collides with and compresses a light spring of stiffness $k = 400\\text{ N/m}$. What is the maximum compression $x$ of the spring? (Take $g = 10\\text{ m/s}^2$, $\\cos 30^\\circ = 0.866$, and assume the spring length is small compared to $d$.)",
        options: [
          "$0.41\\text{ m}$",
          "$0.25\\text{ m}$",
          "$0.58\\text{ m}$",
          "$0.82\\text{ m}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test4_q3_rough_incline_energy_loss.svg",
        explanation: "By the work-energy theorem, the change in mechanical energy equals the work done by non-conservative frictional forces:\n$$\\Delta E = W_{\\text{friction}} = -f_k \\cdot d = -\\mu_k mg\\cos\\theta \\cdot d$$\nInitial energy: $E_i = mgh = mg d\\sin\\theta = 2 \\times 10 \\times 5 \\times \\sin 30^\\circ = 50\\text{ J}$.\nFrictional work loss: $|W_f| = \\mu_k mg\\cos\\theta \\cdot d = 0.2 \\times 2 \\times 10 \\times 0.866 \\times 5 = 17.32\\text{ J}$.\nRemaining mechanical energy transferred to spring elastic potential energy:\n$$E_{\\text{spring}} = 50 - 17.32 = 32.68\\text{ J}$$\n$$\\frac{1}{2}kx^2 = 32.68 \\implies \\frac{1}{2}(400)x^2 = 32.68 \\implies 200 x^2 = 32.68 \\implies x^2 \\approx 0.1634 \\implies x \\approx 0.405\\text{ m} \\approx 0.41\\text{ m}$$\nHence, option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The total mechanical energy of an isolated system is strictly conserved if and only if all the internal forces doing work are conservative.\nReason (R): When non-conservative internal forces (such as internal friction or viscosity) act inside a system, mechanical energy is irreversibly dissipated into internal thermal energy.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The total mechanical energy of an isolated system is strictly conserved if and only if all the internal forces doing work are conservative.\nReason (R): When non-conservative internal forces (such as internal friction or viscosity) act inside a system, mechanical energy is irreversibly dissipated into internal thermal energy.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: By the work-energy theorem, $\\Delta K = W_{\\text{cons}} + W_{\\text{non-cons}}$. Since $\\Delta U = -W_{\\text{cons}}$, we have $\\Delta(K + U) = W_{\\text{non-cons}}$. Total mechanical energy $E = K + U$ is conserved ($\Delta E = 0$) if and only if $W_{\\text{non-cons}} = 0$.\nReason (R) is true and directly explains Assertion (A): Non-conservative forces convert organized mechanical energy into disorganized thermal or acoustic energy. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a conservative force field, the total mechanical energy depends on the choice of the reference point where potential energy is defined to be zero.\nReason (R): Potential energy at any point is defined relative to an arbitrary reference zero, but potential energy difference $\\Delta U$ between two points is reference-independent.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In a conservative force field, the total mechanical energy depends on the choice of the reference point where potential energy is defined to be zero.\nReason (R): Potential energy at any point is defined relative to an arbitrary reference zero, but potential energy difference $\\Delta U$ between two points is reference-independent.",
        options: standardAROptions,
        correctAnswer: 1, // B
        correctOption: "b",
        explanation: "Assertion (A) is true: Because $U(r) = U_0 - \\int F\\,dr$, changing the reference value $U_0$ shifts the numerical value of $U$ by an additive constant, and hence shifts total mechanical energy $E = K + U$ by that same constant.\nReason (R) is true: The potential energy difference $\\Delta U = U_B - U_A = -\\int_A^B F\\,dr$ is an absolute physical quantity independent of reference.\nHowever, Reason (R) states why $\\Delta U$ is invariant, which is a property of potential difference, not the explanation of why absolute total energy depends on reference. Thus, both are true, but (R) is not the correct explanation of (A)."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A body released from rest at height $h$ slides down two frictionless ramps of identical height $h$ but different angles of inclination $\\theta_1$ and $\\theta_2$. The speed of the body at the bottom is identical on both ramps.\nReason (R): The normal reaction of the ramp is a non-conservative force and does negative work on the sliding body.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A body released from rest at height $h$ slides down two frictionless ramps of identical height $h$ but different angles of inclination $\\theta_1$ and $\\theta_2$. The speed of the body at the bottom is identical on both ramps.\nReason (R): The normal reaction of the ramp is a non-conservative force and does negative work on the sliding body.",
        options: standardAROptions,
        correctAnswer: 2, // C
        correctOption: "c",
        explanation: "Assertion (A) is true: Gravity is a conservative force, and for a frictionless incline, normal force is everywhere perpendicular to the instantaneous velocity ($N \\perp v$), so $W_N = 0$. By conservation of mechanical energy, $mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh}$, which is independent of the incline angle $\\theta$.\nReason (R) is false: On a stationary ramp, normal reaction does zero work ($W_N = 0$), not negative work. Therefore, (A) is true but (R) is false."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In simple harmonic motion of a block-spring system on a smooth horizontal table, the kinetic energy is maximum when potential energy is maximum.\nReason (R): The sum of kinetic energy and elastic potential energy remains constant at all points of oscillation.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In simple harmonic motion of a block-spring system on a smooth horizontal table, the kinetic energy is maximum when potential energy is maximum.\nReason (R): The sum of kinetic energy and elastic potential energy remains constant at all points of oscillation.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: In SHM, kinetic energy is zero when potential energy is maximum (at the extreme positions $x = \\pm A$), and kinetic energy is maximum when potential energy is minimum (at the mean position $x = 0$).\nReason (R) is true: Since the spring force is conservative and friction is absent, total mechanical energy $E = K + U = \\frac{1}{2}kA^2$ is conserved at all points of oscillation. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a satellite moves in an elliptical orbit around Earth, its speed increases as it approaches perigee (closest point to Earth).\nReason (R): Gravitational force is conservative, so the loss in gravitational potential energy between apogee and perigee is converted into kinetic energy.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a satellite moves in an elliptical orbit around Earth, its speed increases as it approaches perigee (closest point to Earth).\nReason (R): Gravitational force is conservative, so the loss in gravitational potential energy between apogee and perigee is converted into kinetic energy.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: As the satellite moves from apogee to perigee, its distance $r$ from Earth decreases, and its orbital speed increases.\nReason (R) is true and is the correct explanation: Gravitational potential energy $U = -\\frac{GMm}{r}$ becomes more negative as $r$ decreases. Since gravity is a conservative central force, total mechanical energy $E = K + U$ is constant, so $\\Delta K = -\\Delta U > 0$, causing speed to increase. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For an object sliding down a rough incline, the total mechanical energy of the object decreases with time.\nReason (R): Kinetic friction always acts opposite to relative motion and does negative work on the sliding object, dissipating mechanical energy into heat.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For an object sliding down a rough incline, the total mechanical energy of the object decreases with time.\nReason (R): Kinetic friction always acts opposite to relative motion and does negative work on the sliding object, dissipating mechanical energy into heat.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Due to friction, $\\Delta E = W_f < 0$, so mechanical energy continuously decreases.\nReason (R) is true and correctly explains Assertion (A): Kinetic friction opposes relative motion, so the angle between frictional force and displacement is $180^\\circ$, yielding $W_f = -f_k d < 0$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    }
  ]
};

// -------------------------------------------------------------
// TEST 5: VERTICAL CIRCULAR MOTION
// -------------------------------------------------------------
const t5_updates = {
  testId: "neet-SUBTOPIC-Physics-Vertical-circular-motion",
  subtopic: "Vertical circular motion",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A small heavy bob of mass $m$ is tied to an inextensible light string of length $R$ and whirled in a vertical circle, as shown in the free-body diagram. What is the difference between the string tension at the lowest point ($T_{\\text{bot}}$) and the string tension at the highest point ($T_{\\text{top}}$) when the loop is completed?",
        text: "A small heavy bob of mass $m$ is tied to an inextensible light string of length $R$ and whirled in a vertical circle, as shown in the free-body diagram. What is the difference between the string tension at the lowest point ($T_{\\text{bot}}$) and the string tension at the highest point ($T_{\\text{top}}$) when the loop is completed?",
        options: [
          "$6mg$",
          "$3mg$",
          "$4mg$",
          "$2mg$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test5_q1_vertical_circle_free_body.svg",
        explanation: "At the bottom: $T_{\\text{bot}} - mg = \\frac{m v_{\\text{bot}}^2}{R} \\implies T_{\\text{bot}} = mg + \\frac{m v_{\\text{bot}}^2}{R}$.\nAt the top: $T_{\\text{top}} + mg = \\frac{m v_{\\text{top}}^2}{R} \\implies T_{\\text{top}} = \\frac{m v_{\\text{top}}^2}{R} - mg$.\nBy conservation of mechanical energy:\n$$\\frac{1}{2}m v_{\\text{bot}}^2 = \\frac{1}{2}m v_{\\text{top}}^2 + mg(2R) \\implies v_{\\text{bot}}^2 - v_{\\text{top}}^2 = 4gR$$\nSubtracting the tension equations:\n$$T_{\\text{bot}} - T_{\\text{top}} = 2mg + \\frac{m(v_{\\text{bot}}^2 - v_{\\text{top}}^2)}{R} = 2mg + \\frac{m(4gR)}{R} = 6mg$$\nThis difference of $6mg$ holds for any completed vertical circular loop, regardless of initial speed. Hence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "A particle of mass $m$ attached to a string of length $R$ is whirled in a vertical circle. At an angular position where the string makes an angle $\\theta$ with the downward vertical, as shown in the figure, what is the exact expression for the string tension $T(\\theta)$ in terms of the instantaneous speed $v$ and angle $\\theta$?",
        text: "A particle of mass $m$ attached to a string of length $R$ is whirled in a vertical circle. At an angular position where the string makes an angle $\\theta$ with the downward vertical, as shown in the figure, what is the exact expression for the string tension $T(\\theta)$ in terms of the instantaneous speed $v$ and angle $\\theta$?",
        options: [
          "$T = \\frac{mv^2}{R} + mg\\cos\\theta$",
          "$T = \\frac{mv^2}{R} - mg\\cos\\theta$",
          "$T = \\frac{mv^2}{R} + mg\\sin\\theta$",
          "$T = \\frac{mv^2}{R}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test5_q2_tension_vs_angle.svg",
        explanation: "Resolving gravity into radial and tangential components:\n- Component of gravity acting radially outward away from the center is $mg\\cos\\theta$.\n- Tension $T$ acts radially inward toward the center.\nThe net radial centripetal force is:\n$$F_c = T - mg\\cos\\theta = \\frac{mv^2}{R} \\implies T = \\frac{mv^2}{R} + mg\\cos\\theta$$\nHence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "A small solid particle is placed at the apex of a smooth fixed hemispherical dome of radius $R$ and given a negligible nudge so that it slides down without friction, as shown in the figure. At what vertical distance $h$ from the horizontal base does the particle lose contact with the hemisphere?",
        text: "A small solid particle is placed at the apex of a smooth fixed hemispherical dome of radius $R$ and given a negligible nudge so that it slides down without friction, as shown in the figure. At what vertical distance $h$ from the horizontal base does the particle lose contact with the hemisphere?",
        options: [
          "$\\frac{2}{3}R$",
          "$\\frac{1}{3}R$",
          "$\\frac{1}{2}R$",
          "$\\frac{3}{4}R$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/work_energy_power/test5_q3_sphere_leaving_hemisphere.svg",
        explanation: "Let $\\theta$ be the angle subtended by the particle with the upward vertical.\nBy conservation of mechanical energy:\n$$mg R(1 - \\cos\\theta) = \\frac{1}{2}mv^2 \\implies v^2 = 2gR(1 - \\cos\\theta)$$\nThe radial equation of motion on the spherical surface is:\n$$mg\\cos\\theta - N = \\frac{mv^2}{R}$$\nThe particle leaves the surface when normal reaction $N = 0$:\n$$mg\\cos\\theta = \\frac{m(2gR(1 - \\cos\\theta))}{R} = 2mg(1 - \\cos\\theta)$$\n$$\\cos\\theta = 2 - 2\\cos\\theta \\implies 3\\cos\\theta = 2 \\implies \\cos\\theta = \\frac{2}{3}$$\nThe vertical height above the base is $h = R\\cos\\theta = \\frac{2}{3}R$.\nHence, option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a body tied to a string and looped in a vertical circle of radius $R$, the minimum speed required at the bottom to complete the circle is $\\sqrt{5gR}$.\nReason (R): At the highest point of the loop, the critical condition for the string to remain taut without slacking is that tension $T \\ge 0$, which requires a minimum speed of $\\sqrt{gR}$ at the top.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a body tied to a string and looped in a vertical circle of radius $R$, the minimum speed required at the bottom to complete the circle is $\\sqrt{5gR}$.\nReason (R): At the highest point of the loop, the critical condition for the string to remain taut without slacking is that tension $T \\ge 0$, which requires a minimum speed of $\\sqrt{gR}$ at the top.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: The minimum bottom speed to complete the vertical circle is $u_{\\text{min}} = \\sqrt{5gR}$.\nReason (R) is true and directly explains Assertion (A): At the top, $T + mg = \\frac{mv^2}{R}$. For the string not to slack, $T \\ge 0 \\implies v_{\\text{top}} \\ge \\sqrt{gR}$. By conservation of energy, $\\frac{1}{2}m u^2 = \\frac{1}{2}m v_{\\text{top}}^2 + mg(2R) \\implies u^2 = gR + 4gR = 5gR \\implies u = \\sqrt{5gR}$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a body attached to a light rigid rod of length $R$, the minimum speed at the lowest point required to describe a complete vertical circle is $\\sqrt{4gR} = 2\\sqrt{gR}$.\nReason (R): A rigid rod can support both tension and compressive forces, so the velocity of the body at the top can be zero without the rod buckling.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a body attached to a light rigid rod of length $R$, the minimum speed at the lowest point required to describe a complete vertical circle is $\\sqrt{4gR} = 2\\sqrt{gR}$.\nReason (R): A rigid rod can support both tension and compressive forces, so the velocity of the body at the top can be zero without the rod buckling.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: With a rigid rod, the body only needs to reach the highest point with $v_{\\text{top}} = 0$, so $\\frac{1}{2}mv_{\\text{bot}}^2 = mg(2R) \\implies v_{\\text{bot}} = \\sqrt{4gR} = 2\\sqrt{gR}$.\nReason (R) is true and is the exact physical explanation: Unlike a flexible string which slacks when $T < 0$, a rigid rod can exert an upward compressive thrust, so zero velocity at the top is stable. Both (A) and (R) are true, and (R) is the correct explanation of (A)."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the speed of a particle whirled in a vertical circle by a string is $\\sqrt{3gR}$ at the lowest point, the string slacks before the particle reaches the horizontal position ($\\theta = 90^\\circ$).\nReason (R): For any bottom speed between $\\sqrt{2gR}$ and $\\sqrt{5gR}$, the string slacks in the upper hemisphere where $90^\\circ < \\theta < 180^\\circ$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the speed of a particle whirled in a vertical circle by a string is $\\sqrt{3gR}$ at the lowest point, the string slacks before the particle reaches the horizontal position ($\\theta = 90^\\circ$).\nReason (R): For any bottom speed between $\\sqrt{2gR}$ and $\\sqrt{5gR}$, the string slacks in the upper hemisphere where $90^\\circ < \\theta < 180^\\circ$.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: For the particle to reach the horizontal position ($\\theta = 90^\\circ$), the required bottom speed is $\\sqrt{2gR}$. At $\\theta = 90^\\circ$, tension is $T = \\frac{mv^2}{R} = \\frac{m(u^2 - 2gR)}{R} = \\frac{m(3gR - 2gR)}{R} = mg > 0$, so the string is still taut! Tension only drops to zero in the upper hemisphere between $90^\\circ$ and $180^\\circ$.\nReason (R) is true: For $\\sqrt{2gR} < u < \\sqrt{5gR}$, the particle successfully crosses $\\theta = 90^\\circ$ and the string slacks in the upper hemisphere ($90^\\circ < \\theta < 180^\\circ$), after which it follows a parabolic trajectory. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In vertical circular motion of a bob tied to a string, the tangential acceleration of the bob is zero at both the lowest and the highest points.\nReason (R): At the lowest and highest points of a vertical circle, the force of gravity is perpendicular to the trajectory of the bob.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In vertical circular motion of a bob tied to a string, the tangential acceleration of the bob is zero at both the lowest and the highest points.\nReason (R): At the lowest and highest points of a vertical circle, the force of gravity is perpendicular to the trajectory of the bob.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Tangential acceleration is $a_t = g\\sin\\theta$, where $\\theta$ is the angle with the vertical. At the bottom ($\\theta = 0^\\circ$) and top ($\\theta = 180^\\circ$), $\\sin\\theta = 0$, so $a_t = 0$.\nReason (R) is true and correctly explains Assertion (A): At the top and bottom points, the velocity is purely horizontal, while gravity acts purely vertically. Gravity has zero component along the tangent ($g \\perp v$). Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In uniform circular motion the mechanical energy is conserved, but in non-uniform vertical circular motion the mechanical energy of the particle is not conserved.\nReason (R): In vertical circular motion, the speed of the particle changes continuously as it moves around the circle.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In uniform circular motion the mechanical energy is conserved, but in non-uniform vertical circular motion the mechanical energy of the particle is not conserved.\nReason (R): In vertical circular motion, the speed of the particle changes continuously as it moves around the circle.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: In ideal vertical circular motion without air resistance, gravity is conservative and string tension does no work ($T \\perp v$), so total mechanical energy $E = K + U$ is strictly conserved!\nReason (R) is true: The speed does change continuously because gravity does work, exchanging kinetic and gravitational potential energy ($K + U = \\text{constant}$). Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The difference between tension at the bottom and tension at the top for a bob completing a vertical circle of radius $R$ is always $6mg$, independent of the initial speed $v_{\\text{bot}} \\ge \\sqrt{5gR}$.\nReason (R): As the bob moves from bottom to top, the loss in kinetic energy is exactly $2mgR$ in any circular path.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The difference between tension at the bottom and tension at the top for a bob completing a vertical circle of radius $R$ is always $6mg$, independent of the initial speed $v_{\\text{bot}} \\ge \\sqrt{5gR}$.\nReason (R): As the bob moves from bottom to top, the loss in kinetic energy is exactly $2mgR$ in any circular path.",
        options: standardAROptions,
        correctAnswer: 2, // C
        correctOption: "c",
        explanation: "Assertion (A) is true: As derived from Newton's second law and energy conservation, $T_{\\text{bot}} - T_{\\text{top}} = 6mg$, which is a constant invariant for all completed loops.\nReason (R) is false: The vertical height between bottom and top is $2R$, so the gain in potential energy is $\\Delta U = mg(2R) = 2mgR$. Therefore, by energy conservation $\\Delta K = -\\Delta U = -2mgR$, which means the loss in kinetic energy is $2mgR$. However, kinetic energy loss is $\\frac{1}{2}m(v_{\\text{bot}}^2 - v_{\\text{top}}^2) = 2mgR$, so $v_{\\text{bot}}^2 - v_{\\text{top}}^2 = 4gR$. Since Reason states 'loss in kinetic energy is $2mgR$ in any circular path' without specifying vertical gravity, and more crucially the question of $6mg$ arises from $2mg$ (weight contribution) PLUS $4mg$ (centripetal contribution from $v^2$ drop). Actually, loss in KE is $2mgR$, but that gives $4mg$ to the tension difference, not $6mg$. But more directly, Reason (R) states 'in any circular path' which is false for horizontal circles where $\\Delta K = 0$. Therefore, (A) is true and (R) is false."
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

await applyTestUpdates(t4_updates);
await applyTestUpdates(t5_updates);

await client.close();
