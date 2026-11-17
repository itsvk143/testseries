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

// ------------------------------------------------------------------------
// TEST 4: THEOREMS OF PARALLEL AND PERPENDICULAR AXES
// ------------------------------------------------------------------------
const t4_updates = {
  testId: "neet-SUBTOPIC-Physics-Theorems-of-parallel-and-perpendicular-axes",
  subtopic: "Theorems of parallel and perpendicular axes",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A uniform thin rod of mass $M$ and length $L$ has a moment of inertia $I_{CM} = \\frac{1}{12} M L^2$ about an axis perpendicular to its length through its center of mass. A parallel axis passes through the rod at a perpendicular distance $d = \\frac{L}{4}$ from the center of mass, as shown in the diagram. Using the parallel axis theorem, what is the moment of inertia $I$ of the rod about this shifted axis?",
        text: "A uniform thin rod of mass $M$ and length $L$ has a moment of inertia $I_{CM} = \\frac{1}{12} M L^2$ about an axis perpendicular to its length through its center of mass. A parallel axis passes through the rod at a perpendicular distance $d = \\frac{L}{4}$ from the center of mass, as shown in the diagram. Using the parallel axis theorem, what is the moment of inertia $I$ of the rod about this shifted axis?",
        options: [
          "$\\frac{7}{48} M L^2$",
          "$\\frac{1}{6} M L^2$",
          "$\\frac{5}{24} M L^2$",
          "$\\frac{1}{3} M L^2$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test4_q1_parallel_axes_rod.svg",
        explanation: "By the parallel axis theorem:\n$$I = I_{CM} + M d^2$$\nGiven $I_{CM} = \\frac{1}{12} M L^2$ and $d = \\frac{L}{4}$:\n$$I = \\frac{1}{12} M L^2 + M\\left(\\frac{L}{4}\\right)^2 = \\frac{1}{12} M L^2 + \\frac{1}{16} M L^2$$\nFinding a common denominator of 48:\n$$I = \\left(\\frac{4}{48} + \\frac{3}{48}\\right) M L^2 = \\frac{7}{48} M L^2$$\nHence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "A uniform thin circular disc of mass $M$ and radius $R$ lies in the $xy$-plane, as shown in the diagram. Its moment of inertia about the central perpendicular $z$-axis is $I_z = \\frac{1}{2} M R^2$. By applying the perpendicular axis theorem and symmetry, what is the moment of inertia of the disc about a tangent line in the plane of the disc?",
        text: "A uniform thin circular disc of mass $M$ and radius $R$ lies in the $xy$-plane, as shown in the diagram. Its moment of inertia about the central perpendicular $z$-axis is $I_z = \\frac{1}{2} M R^2$. By applying the perpendicular axis theorem and symmetry, what is the moment of inertia of the disc about a tangent line in the plane of the disc?",
        options: [
          "$\\frac{5}{4} M R^2$",
          "$\\frac{3}{2} M R^2$",
          "$\\frac{7}{4} M R^2$",
          "$\\frac{1}{2} M R^2$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test4_q2_perpendicular_axes_disc.svg",
        explanation: "Step 1: By the perpendicular axis theorem for a planar lamina in the $xy$-plane:\n$$I_z = I_x + I_y$$\nBy circular symmetry, any diameter in the plane is equivalent ($I_x = I_y = I_d$):\n$$I_z = 2 I_d \\implies I_d = \\frac{1}{2} I_z = \\frac{1}{2}\\left(\\frac{1}{2} M R^2\\right) = \\frac{1}{4} M R^2$$\nStep 2: A tangent in the plane of the disc is parallel to a diameter axis at a distance $d = R$. By the parallel axis theorem:\n$$I_{\\text{tangent}} = I_d + M R^2 = \\frac{1}{4} M R^2 + M R^2 = \\frac{5}{4} M R^2$$\nHence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "A uniform thin square plate of mass $M$ and side length $a$ lies in the $xy$-plane with its center at the origin $O$, as shown in the figure. Axis 1 is a line parallel to one of its edges passing through $O$, and Axis 2 is a diagonal of the square passing through $O$. What is the moment of inertia of the square plate about Axis 2 (diagonal)?",
        text: "A uniform thin square plate of mass $M$ and side length $a$ lies in the $xy$-plane with its center at the origin $O$, as shown in the figure. Axis 1 is a line parallel to one of its edges passing through $O$, and Axis 2 is a diagonal of the square passing through $O$. What is the moment of inertia of the square plate about Axis 2 (diagonal)?",
        options: [
          "$\\frac{1}{12} M a^2$",
          "$\\frac{1}{6} M a^2$",
          "$\\frac{1}{24} M a^2$",
          "$\\frac{1}{3} M a^2$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test4_q3_square_lamina_axes.svg",
        explanation: "The moment of inertia of a square plate about an in-plane axis parallel to one side through its center is $I_x = I_y = \\frac{1}{12} M a^2$.\nBy the perpendicular axis theorem, the moment of inertia about the central perpendicular axis $z$ is:\n$$I_z = I_x + I_y = \\frac{1}{12} M a^2 + \\frac{1}{12} M a^2 = \\frac{1}{6} M a^2$$\nNow consider the two mutually perpendicular diagonals $d_1$ and $d_2$ in the plane of the plate. By symmetry, $I_{d_1} = I_{d_2} = I_{\\text{diag}}$. Applying the perpendicular axis theorem again:\n$$I_z = I_{d_1} + I_{d_2} = 2 I_{\\text{diag}} \\implies I_{\\text{diag}} = \\frac{I_z}{2} = \\frac{1}{12} M a^2$$\nThus, the moment of inertia about any diagonal is identical to that about a side midline: $\\frac{1}{12} M a^2$. Hence, option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The perpendicular axis theorem can be applied to find the moment of inertia of a solid cylinder or a solid sphere about any axis.\nReason (R): The perpendicular axis theorem is valid strictly and exclusively for two-dimensional planar laminae.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The perpendicular axis theorem can be applied to find the moment of inertia of a solid cylinder or a solid sphere about any axis.\nReason (R): The perpendicular axis theorem is valid strictly and exclusively for two-dimensional planar laminae.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: The perpendicular axis theorem $I_z = I_x + I_y$ cannot be applied to three-dimensional objects like a solid cylinder or solid sphere; it applies only to two-dimensional planar laminae where $z_i = 0$ for all mass elements.\nReason (R) is true: The proof requires $\\sum m_i(x_i^2 + y_i^2) = \\sum m_i x_i^2 + \\sum m_i y_i^2$, which holds only when $z = 0$. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The parallel axis theorem $I = I_{CM} + M d^2$ can be applied to find the moment of inertia about any axis parallel to an arbitrary known axis $I_A$, written as $I = I_A + M d^2$.\nReason (R): In the parallel axis theorem, one of the two parallel axes must necessarily pass through the center of mass of the body.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The parallel axis theorem $I = I_{CM} + M d^2$ can be applied to find the moment of inertia about any axis parallel to an arbitrary known axis $I_A$, written as $I = I_A + M d^2$.\nReason (R): In the parallel axis theorem, one of the two parallel axes must necessarily pass through the center of mass of the body.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: The parallel axis theorem cannot be applied directly between any two arbitrary parallel axes. The reference axis must pass through the center of mass ($I_{CM}$). If an axis $A$ does not pass through the CM, one must first find $I_{CM} = I_A - M d_A^2$ and then find $I_B = I_{CM} + M d_B^2$.\nReason (R) is true: The cross-term $\\sum 2 m_i x_i d$ vanishes in the expansion only when the origin is chosen at the center of mass. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The moment of inertia of a rigid body is minimum about an axis passing through its center of mass compared to any other parallel axis.\nReason (R): According to the parallel axis theorem $I = I_{CM} + M d^2$, the term $M d^2$ is always non-negative for any non-zero perpendicular distance $d$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The moment of inertia of a rigid body is minimum about an axis passing through its center of mass compared to any other parallel axis.\nReason (R): According to the parallel axis theorem $I = I_{CM} + M d^2$, the term $M d^2$ is always non-negative for any non-zero perpendicular distance $d$.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Among all axes parallel to a given direction, the moment of inertia is strictly minimized when the axis passes through the center of mass ($d = 0$).\nReason (R) is true and directly explains Assertion (A): Since $M > 0$ and $d^2 > 0$ for any parallel axis not through the CM, $I = I_{CM} + M d^2 > I_{CM}$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The moment of inertia of a circular ring of mass $M$ and radius $R$ about an axis tangent to the ring and perpendicular to its plane is $2 M R^2$.\nReason (R): The moment of inertia of the ring about its central perpendicular axis is $M R^2$, and the distance to the tangent is $R$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The moment of inertia of a circular ring of mass $M$ and radius $R$ about an axis tangent to the ring and perpendicular to its plane is $2 M R^2$.\nReason (R): The moment of inertia of the ring about its central perpendicular axis is $M R^2$, and the distance to the tangent is $R$.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: By the parallel axis theorem, $I_{\\text{tan},\\perp} = I_{CM,\\perp} + M R^2 = M R^2 + M R^2 = 2 M R^2$.\nReason (R) is true and correctly explains Assertion (A): $I_{CM,\\perp} = M R^2$ and the perpendicular distance from the center to the tangent is $d = R$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a uniform spherical shell, the moment of inertia about a tangent axis is $\\frac{7}{5} M R^2$.\nReason (R): By the parallel axis theorem, $I_{\\text{tangent}} = I_{CM} + M R^2$, and for a spherical shell $I_{CM} = \\frac{2}{3} M R^2$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a uniform spherical shell, the moment of inertia about a tangent axis is $\\frac{7}{5} M R^2$.\nReason (R): By the parallel axis theorem, $I_{\\text{tangent}} = I_{CM} + M R^2$, and for a spherical shell $I_{CM} = \\frac{2}{3} M R^2$.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: For a hollow spherical shell, $I_{CM} = \\frac{2}{3} M R^2$. By the parallel axis theorem, $I_{\\text{tangent}} = \\frac{2}{3} M R^2 + M R^2 = \\frac{5}{3} M R^2$. The value $\\frac{7}{5} M R^2$ is for a SOLID sphere (where $I_{CM} = \\frac{2}{5} M R^2$).\nReason (R) is true: $I_{\\text{tangent}} = I_{CM} + M R^2$ is correct, and $I_{CM} = \\frac{2}{3} M R^2$ for a spherical shell is correct. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The perpendicular axis theorem applies to planar laminae of arbitrary geometric shape, not just circular or rectangular ones.\nReason (R): The theorem $I_z = I_x + I_y$ depends purely on the coordinate geometry condition $z_i = 0$ for all particles in the plane.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The perpendicular axis theorem applies to planar laminae of arbitrary geometric shape, not just circular or rectangular ones.\nReason (R): The theorem $I_z = I_x + I_y$ depends purely on the coordinate geometry condition $z_i = 0$ for all particles in the plane.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: The perpendicular axis theorem holds for any flat two-dimensional lamina regardless of boundary shape (triangular, irregular, etc.).\nReason (R) is true and directly explains Assertion (A): $I_z = \\sum m_i(x_i^2 + y_i^2) = \\sum m_i x_i^2 + \\sum m_i y_i^2 = I_y + I_x$, which relies strictly on $z = 0$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    }
  ]
};

// ------------------------------------------------------------------------
// TEST 5: ANGULAR MOMENTUM CONSERVATION
// ------------------------------------------------------------------------
const t5_updates = {
  testId: "neet-SUBTOPIC-Physics-Angular-momentum-conservation",
  subtopic: "Angular momentum conservation",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A student stands at the center of a turntable rotating freely with initial angular velocity $\\omega_1 = 2\\text{ rad/s}$ about a vertical frictionless axis, holding two equal heavy dumbbells with arms fully extended ($I_1 = 6\\text{ kg m}^2$). When the student pulls the dumbbells inwards towards their chest, the moment of inertia of the system reduces to $I_2 = 2\\text{ kg m}^2$, as shown in the diagram. Neglecting friction, what is the new angular velocity $\\omega_2$, and what is the ratio of final to initial rotational kinetic energy $\\frac{K_2}{K_1}$?",
        text: "A student stands at the center of a turntable rotating freely with initial angular velocity $\\omega_1 = 2\\text{ rad/s}$ about a vertical frictionless axis, holding two equal heavy dumbbells with arms fully extended ($I_1 = 6\\text{ kg m}^2$). When the student pulls the dumbbells inwards towards their chest, the moment of inertia of the system reduces to $I_2 = 2\\text{ kg m}^2$, as shown in the diagram. Neglecting friction, what is the new angular velocity $\\omega_2$, and what is the ratio of final to initial rotational kinetic energy $\\frac{K_2}{K_1}$?",
        options: [
          "$\\omega_2 = 6\\text{ rad/s}$, $\\frac{K_2}{K_1} = 3$",
          "$\\omega_2 = 4\\text{ rad/s}$, $\\frac{K_2}{K_1} = 2$",
          "$\\omega_2 = 6\\text{ rad/s}$, $\\frac{K_2}{K_1} = 1$",
          "$\\omega_2 = 2\\text{ rad/s}$, $\\frac{K_2}{K_1} = 3$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test5_q1_rotating_platform_person.svg",
        explanation: "Since the turntable is frictionless and no external torque acts about the vertical axis ($\\tau_{\\text{ext}} = 0$), angular momentum is conserved:\n$$L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2$$\n$$\\omega_2 = \\frac{I_1}{I_2} \\omega_1 = \\frac{6}{2} \\times 2 = 3 \\times 2 = 6\\text{ rad/s}$$\nNow, rotational kinetic energy is $K = \\frac{L^2}{2I}$:\n$$\\frac{K_2}{K_1} = \\frac{L^2 / (2I_2)}{L^2 / (2I_1)} = \\frac{I_1}{I_2} = \\frac{6}{2} = 3$$\nRotational kinetic energy triples because the student performs internal mechanical work against centrifugal forces to pull the dumbbells inward. Hence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "A particle of mass $m$ moves with a constant speed $v$ along a horizontal straight line given by $y = d$ in the $xy$-plane, as shown in the diagram. What is the magnitude and direction of the angular momentum $\\vec{L}$ of the particle about the origin $O$ at any instant of time?",
        text: "A particle of mass $m$ moves with a constant speed $v$ along a horizontal straight line given by $y = d$ in the $xy$-plane, as shown in the diagram. What is the magnitude and direction of the angular momentum $\\vec{L}$ of the particle about the origin $O$ at any instant of time?",
        options: [
          "$m v d$, constant and pointing along $-\\hat{k}$ (into the page)",
          "$m v d$, increasing as the particle moves further away",
          "$m v r$, dependent on the instantaneous distance $r$",
          "Zero, because the particle is moving in a straight line"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test5_q2_particle_moving_straight_line.svg",
        explanation: "By definition, the angular momentum of a particle about origin $O$ is:\n$$\\vec{L} = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$$\nAt any position $(x, d)$, the position vector is $\\vec{r} = x\\hat{i} + d\\hat{j}$ and velocity is $\\vec{v} = v\\hat{i}$.\n$$\\vec{L} = (x\\hat{i} + d\\hat{j}) \\times (m v \\hat{i}) = d m v (\\hat{j} \\times \\hat{i}) = -m v d \\hat{k}$$\nThe magnitude is $|\\vec{L}| = m v d$, which is constant at all times because the perpendicular distance $d$ between the origin and the line of velocity does not change. Hence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "A uniform circular disc of moment of inertia $I_1$ rotates freely with initial angular velocity $\\omega_0$ on a vertical frictionless spindle. A second coaxial disc of moment of inertia $I_2 = 2 I_1$, initially at rest ($\\omega_2 = 0$), is dropped gently onto the first disc, as shown in the figure. The two discs quickly reach a common angular velocity $\\omega$ due to surface friction. What is the final common angular velocity $\\omega$, and what fraction of the initial rotational kinetic energy is lost as heat?",
        text: "A uniform circular disc of moment of inertia $I_1$ rotates freely with initial angular velocity $\\omega_0$ on a vertical frictionless spindle. A second coaxial disc of moment of inertia $I_2 = 2 I_1$, initially at rest ($\\omega_2 = 0$), is dropped gently onto the first disc, as shown in the figure. The two discs quickly reach a common angular velocity $\\omega$ due to surface friction. What is the final common angular velocity $\\omega$, and what fraction of the initial rotational kinetic energy is lost as heat?",
        options: [
          "$\\omega = \\frac{\\omega_0}{3}$, $\\text{Fractional energy loss} = \\frac{2}{3}$",
          "$\\omega = \\frac{\\omega_0}{2}$, $\\text{Fractional energy loss} = \\frac{1}{2}$",
          "$\\omega = \\frac{\\omega_0}{3}$, $\\text{Fractional energy loss} = \\frac{1}{3}$",
          "$\\omega = \\frac{2\\omega_0}{3}$, $\\text{Fractional energy loss} = \\frac{1}{4}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test5_q3_two_discs_dropped.svg",
        explanation: "1. Conservation of angular momentum (interfacial friction is internal to the two-disc system):\n$$I_1 \\omega_0 = (I_1 + I_2) \\omega \\implies \\omega = \\frac{I_1 \\omega_0}{I_1 + 2 I_1} = \\frac{\\omega_0}{3}$$\n2. Kinetic energy calculation:\n- Initial: $K_i = \\frac{1}{2} I_1 \\omega_0^2$\n- Final: $K_f = \\frac{1}{2}(I_1 + I_2)\\omega^2 = \\frac{1}{2}(3 I_1)\\left(\\frac{\\omega_0}{3}\\right)^2 = \\frac{3}{18} I_1 \\omega_0^2 = \\frac{1}{6} I_1 \\omega_0^2 = \\frac{1}{3} K_i$\n- Loss in kinetic energy: $\\Delta K = K_i - K_f = K_i - \\frac{1}{3} K_i = \\frac{2}{3} K_i$.\nTherefore, the fractional energy loss is $\\frac{\\Delta K}{K_i} = \\frac{2}{3}$. Hence, option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The angular momentum of an isolated system is conserved if and only if the net external torque acting on the system is zero.\nReason (R): According to rotational dynamics, the time rate of change of total angular momentum equals the net external torque: $\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The angular momentum of an isolated system is conserved if and only if the net external torque acting on the system is zero.\nReason (R): According to rotational dynamics, the time rate of change of total angular momentum equals the net external torque: $\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}$.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Conservation of angular momentum states that $\\vec{L}$ remains constant when $\\vec{\\tau}_{\\text{ext}} = 0$.\nReason (R) is true and directly explains Assertion (A): By $\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}$, setting $\\vec{\\tau}_{\\text{ext}} = 0$ yields $\\frac{d\\vec{L}}{dt} = 0 \\implies \\vec{L} = \\text{constant}$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A ballet dancer can increase her rotational speed during a spin by stretching out her arms and legs.\nReason (R): Stretching out arms and legs increases the moment of inertia, which by conservation of angular momentum causes angular velocity to decrease.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A ballet dancer can increase her rotational speed during a spin by stretching out her arms and legs.\nReason (R): Stretching out arms and legs increases the moment of inertia, which by conservation of angular momentum causes angular velocity to decrease.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: To increase rotational speed, the dancer must fold her arms and legs inwards to reduce moment of inertia ($I \\downarrow \\implies \\omega \\uparrow$). Stretching out her limbs slows her down.\nReason (R) is true: $I = \\sum m r^2$ increases when limbs are extended, so by $I\\omega = \\text{constant}$, $\\omega$ must decrease. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a planet orbits the Sun in an elliptical path, the areal velocity of the planet remains strictly constant throughout the orbit.\nReason (R): The gravitational force exerted by the Sun on the planet is a central force, exerting zero torque about the Sun.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a planet orbits the Sun in an elliptical path, the areal velocity of the planet remains strictly constant throughout the orbit.\nReason (R): The gravitational force exerted by the Sun on the planet is a central force, exerting zero torque about the Sun.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: This is Kepler's second law: $\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$.\nReason (R) is true and directly explains Assertion (A): Because gravitational force $\\vec{F}$ is radial towards the Sun, $\\vec{r} \\parallel \\vec{F} \\implies \\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$. Hence $\\vec{L}$ is conserved, ensuring areal velocity is constant. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Whenever the angular momentum of a rotating system is conserved, the rotational kinetic energy of the system is also strictly conserved.\nReason (R): Rotational kinetic energy can be expressed as $K = \\frac{L^2}{2I}$, which changes if the moment of inertia $I$ changes even when $L$ is constant.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Whenever the angular momentum of a rotating system is conserved, the rotational kinetic energy of the system is also strictly conserved.\nReason (R): Rotational kinetic energy can be expressed as $K = \\frac{L^2}{2I}$, which changes if the moment of inertia $I$ changes even when $L$ is constant.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: Conservation of angular momentum does not imply conservation of rotational kinetic energy. If $I$ changes (e.g., skater pulling in arms), $K = \\frac{L^2}{2I}$ increases because internal muscular work is done.\nReason (R) is true: $K = \\frac{L^2}{2I}$ clearly shows that if $I$ changes, $K$ must change. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If polar ice caps melt and the resulting water flows toward the equator, the length of a day on Earth will increase.\nReason (R): Redistribution of mass toward the equator increases Earth's moment of inertia about its rotational axis, causing its angular velocity to decrease by conservation of angular momentum.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If polar ice caps melt and the resulting water flows toward the equator, the length of a day on Earth will increase.\nReason (R): Redistribution of mass toward the equator increases Earth's moment of inertia about its rotational axis, causing its angular velocity to decrease by conservation of angular momentum.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Earth rotates slower, so the time period of one complete rotation ($T = \\frac{2\\pi}{\\omega}$) increases, making the day longer.\nReason (R) is true and directly explains Assertion (A): Water moving from the poles (near the axis) to the equator (distance $R$ from the axis) increases $I$. Since no external torque acts on Earth, $I\\omega = \\text{constant} \\implies \\omega$ decreases, so $T = 2\\pi/\\omega$ increases. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): An internal torque within a system of interacting particles can alter the total angular momentum of the system.\nReason (R): By Newton's third law, internal forces occur in equal and opposite pairs along the line joining the particles, so the sum of all internal torques is identically zero.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): An internal torque within a system of interacting particles can alter the total angular momentum of the system.\nReason (R): By Newton's third law, internal forces occur in equal and opposite pairs along the line joining the particles, so the sum of all internal torques is identically zero.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: Internal torques always cancel out in pairs; they can only transfer angular momentum between parts of the system, but cannot alter the total angular momentum of the system.\nReason (R) is true: Since $\\vec{F}_{ij} = -\\vec{F}_{ji}$ and acts along $(\\vec{r}_i - \\vec{r}_j)$, $\\vec{\\tau}_{\\text{int}} = (\\vec{r}_i - \\vec{r}_j) \\times \\vec{F}_{ij} = 0$. Therefore, (A) is false but (R) is true."
      }
    }
  ]
};

// ------------------------------------------------------------------------
// TEST 6: ROLLING MOTION
// ------------------------------------------------------------------------
const t6_updates = {
  testId: "neet-SUBTOPIC-Physics-Rolling-motion",
  subtopic: "Rolling motion",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A wheel of radius $R$ rolls purely without slipping on a horizontal track with center-of-mass linear velocity $v_{CM}$ and angular velocity $\\omega = \\frac{v_{CM}}{R}$, as shown in the diagram. What is the instantaneous linear speed of the point at the topmost position of the wheel rim, and the point at the lowest point of contact with the ground?",
        text: "A wheel of radius $R$ rolls purely without slipping on a horizontal track with center-of-mass linear velocity $v_{CM}$ and angular velocity $\\omega = \\frac{v_{CM}}{R}$, as shown in the diagram. What is the instantaneous linear speed of the point at the topmost position of the wheel rim, and the point at the lowest point of contact with the ground?",
        options: [
          "Top: $2 v_{CM}$, Bottom: $0$",
          "Top: $v_{CM}$, Bottom: $0$",
          "Top: $2 v_{CM}$, Bottom: $v_{CM}$",
          "Top: $\\sqrt{2} v_{CM}$, Bottom: $0$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test6_q1_pure_rolling_wheel.svg",
        explanation: "The velocity of any point on a rolling wheel is the vector sum of center-of-mass translational velocity and tangential rotational velocity:\n$$\\vec{v} = \\vec{v}_{CM} + \\vec{v}_{\\text{rot}}$$\n1. Topmost point: $\\vec{v}_{\\text{rot}} = R\\omega\\hat{i} = v_{CM}\\hat{i}$. Thus, $v_{\\text{top}} = v_{CM} + v_{CM} = 2 v_{CM}$.\n2. Lowest contact point: $\\vec{v}_{\\text{rot}} = -R\\omega\\hat{i} = -v_{CM}\\hat{i}$. Thus, $v_{\\text{contact}} = v_{CM} - v_{CM} = 0$.\nThe instantaneous velocity of the contact point is zero (point of instantaneous rest). Hence, option (A) is correct."
      }
    },
    {
      index: 1,
      data: {
        question: "A solid sphere, a uniform solid cylinder (disc), and a thin circular ring, each having the same radius $R$ and mass $M$, are released simultaneously from rest at the top of an inclined plane of inclination $\\theta$ and height $h$, as shown in the diagram. If all three bodies roll down purely without slipping, which body reaches the bottom first with the greatest linear acceleration?",
        text: "A solid sphere, a uniform solid cylinder (disc), and a thin circular ring, each having the same radius $R$ and mass $M$, are released simultaneously from rest at the top of an inclined plane of inclination $\\theta$ and height $h$, as shown in the diagram. If all three bodies roll down purely without slipping, which body reaches the bottom first with the greatest linear acceleration?",
        options: [
          "Solid sphere",
          "Solid cylinder (disc)",
          "Thin circular ring",
          "All three reach simultaneously"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test6_q2_rolling_down_incline.svg",
        explanation: "The linear acceleration of a body rolling without slipping down an inclined plane of angle $\\theta$ is:\n$$a = \\frac{g \\sin\\theta}{1 + \\frac{k^2}{R^2}}$$\nComparing the values of $\\frac{k^2}{R^2}$:\n- Solid sphere: $\\frac{k^2}{R^2} = \\frac{2}{5} = 0.4 \\implies a = \\frac{g\\sin\\theta}{1 + 0.4} = \\frac{5}{7}g\\sin\\theta \\approx 0.714 g\\sin\\theta$\n- Solid cylinder (disc): $\\frac{k^2}{R^2} = \\frac{1}{2} = 0.5 \\implies a = \\frac{g\\sin\\theta}{1 + 0.5} = \\frac{2}{3}g\\sin\\theta \\approx 0.667 g\\sin\\theta$\n- Thin circular ring: $\\frac{k^2}{R^2} = 1.0 \\implies a = \\frac{g\\sin\\theta}{1 + 1} = \\frac{1}{2}g\\sin\\theta = 0.500 g\\sin\\theta$\n\nSince the solid sphere has the smallest $k^2/R^2$, it has the largest acceleration ($a_{\\text{sphere}} > a_{\\text{disc}} > a_{\\text{ring}}$) and shortest time of descent ($t = \\sqrt{2s/a}$). It reaches the bottom first. Hence, option (A) is correct."
      }
    },
    {
      index: 2,
      data: {
        question: "A uniform solid cylinder of mass $M$ and radius $R$ rests on a rough horizontal floor. A horizontal pulling force $\\vec{F}$ is applied at a height $h$ directly above the center of mass, as shown in the diagram. What must be the value of $h$ so that the cylinder rolls purely without slipping without any friction force being called into play ($f_s = 0$)?",
        text: "A uniform solid cylinder of mass $M$ and radius $R$ rests on a rough horizontal floor. A horizontal pulling force $\\vec{F}$ is applied at a height $h$ directly above the center of mass, as shown in the diagram. What must be the value of $h$ so that the cylinder rolls purely without slipping without any friction force being called into play ($f_s = 0$)?",
        options: [
          "$h = \\frac{R}{2}$",
          "$h = R$",
          "$h = \\frac{R}{4}$",
          "$h = \\frac{2R}{3}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        image: "/images/diagrams/rotational_motion/test6_q3_cylinder_on_rough_floor.svg",
        explanation: "For the cylinder to roll without slipping with zero friction ($f_s = 0$):\n1. Linear equation: $F = M a_{CM} \\implies a_{CM} = \\frac{F}{M}$.\n2. Angular equation about CM: $\\tau_{CM} = F h = I_{CM} \\alpha \\implies \\alpha = \\frac{F h}{I_{CM}}$.\n3. Pure rolling constraint: $a_{CM} = R \\alpha$.\nSubstituting $a_{CM}$ and $\\alpha$:\n$$\\frac{F}{M} = R \\left(\\frac{F h}{I_{CM}}\\right) \\implies h = \\frac{I_{CM}}{M R}$$\nFor a uniform solid cylinder, $I_{CM} = \\frac{1}{2} M R^2$:\n$$h = \\frac{\\frac{1}{2} M R^2}{M R} = \\frac{R}{2}$$\nThus, applying force at height $h = R/2$ above the center induces pure rolling without requiring any friction from the floor. Hence, option (A) is correct."
      }
    }
  ],
  assertionReasons: [
    {
      index: 39, // Q40
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In pure rolling of a round body without slipping on a stationary horizontal plane, the work done by static friction is zero.\nReason (R): In pure rolling without slipping, the instantaneous linear velocity of the point of contact relative to the ground is always zero.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In pure rolling of a round body without slipping on a stationary horizontal plane, the work done by static friction is zero.\nReason (R): In pure rolling without slipping, the instantaneous linear velocity of the point of contact relative to the ground is always zero.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Static friction does not dissipate mechanical energy in pure rolling ($W_{f} = 0$).\nReason (R) is true and directly explains Assertion (A): Work done by friction is $dW = f_s \\cdot ds$. Since the instantaneous point of contact has zero velocity ($v_{\\text{contact}} = 0$) and does not slip over the surface ($ds = 0$ during contact), the rate of work done is $P = f_s v = 0$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 40, // Q41
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A ring rolling without slipping on a horizontal floor has equal amounts of translational and rotational kinetic energy.\nReason (R): For a ring, the moment of inertia about its central axis is $I = M R^2$, which yields $K_{\\text{rot}} = \\frac{1}{2} I \\omega^2 = \\frac{1}{2}(M R^2)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2} M v^2 = K_{\\text{trans}}$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A ring rolling without slipping on a horizontal floor has equal amounts of translational and rotational kinetic energy.\nReason (R): For a ring, the moment of inertia about its central axis is $I = M R^2$, which yields $K_{\\text{rot}} = \\frac{1}{2} I \\omega^2 = \\frac{1}{2}(M R^2)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2} M v^2 = K_{\\text{trans}}$.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: Exactly 50% of the total kinetic energy is translational and 50% is rotational.\nReason (R) is true and is the exact mathematical proof: $K_{\\text{total}} = K_{\\text{trans}} + K_{\\text{rot}} = \\frac{1}{2} M v^2 + \\frac{1}{2} M R^2 (v/R)^2 = \\frac{1}{2} M v^2 + \\frac{1}{2} M v^2$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 41, // Q42
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A sphere rolling down an inclined plane rolls faster and arrives at the bottom sooner if the inclined plane is completely frictionless (smooth).\nReason (R): On a frictionless incline, the sphere slips purely without rolling, transforming 100% of the potential energy into translational kinetic energy.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A sphere rolling down an inclined plane rolls faster and arrives at the bottom sooner if the inclined plane is completely frictionless (smooth).\nReason (R): On a frictionless incline, the sphere slips purely without rolling, transforming 100% of the potential energy into translational kinetic energy.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: On a frictionless incline, acceleration is $a = g\\sin\\theta$, which is greater than pure rolling acceleration $a = \\frac{5}{7}g\\sin\\theta$. Thus, it arrives sooner with greater translational speed.\nReason (R) is true and directly explains Assertion (A): In the absence of friction, torque about the center of mass is zero ($\\tau = 0$), so no rotational motion is initiated ($\\omega = 0$). All potential energy $mgh$ is converted directly into translational kinetic energy $\\frac{1}{2}mv^2$. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 42, // Q43
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a disc rolling purely without slipping on a horizontal surface, the direction of static friction acting on the disc is always opposite to the direction of motion.\nReason (R): When a rolling disc moves at a constant velocity on a horizontal surface without any applied driving force, the static friction force is zero.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a disc rolling purely without slipping on a horizontal surface, the direction of static friction acting on the disc is always opposite to the direction of motion.\nReason (R): When a rolling disc moves at a constant velocity on a horizontal surface without any applied driving force, the static friction force is zero.",
        options: standardAROptions,
        correctAnswer: 3, // D
        correctOption: "d",
        explanation: "Assertion (A) is false: For pure rolling at constant velocity on a level surface, static friction is zero ($f = 0$). Even when accelerating, the direction of static friction depends on the point of application of the external torque/force and can act forwards, backwards, or be zero.\nReason (R) is true: By Newton's second law, if there is no acceleration ($a = 0, \\alpha = 0$), no horizontal force is required, so $f = 0$. Therefore, (A) is false but (R) is true."
      }
    },
    {
      index: 43, // Q44
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a body of mass $M$ and radius of gyration $k$ undergoing pure rolling with velocity $v_{CM}$, the ratio of rotational kinetic energy to total kinetic energy is $\\frac{k^2}{R^2 + k^2}$.\nReason (R): The total kinetic energy of a rolling body is the sum of translational kinetic energy $\\frac{1}{2} M v_{CM}^2$ and rotational kinetic energy $\\frac{1}{2} M k^2 \\omega^2$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For a body of mass $M$ and radius of gyration $k$ undergoing pure rolling with velocity $v_{CM}$, the ratio of rotational kinetic energy to total kinetic energy is $\\frac{k^2}{R^2 + k^2}$.\nReason (R): The total kinetic energy of a rolling body is the sum of translational kinetic energy $\\frac{1}{2} M v_{CM}^2$ and rotational kinetic energy $\\frac{1}{2} M k^2 \\omega^2$.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: $K_{\\text{rot}} = \\frac{1}{2} M k^2 (v/R)^2 = \\frac{1}{2} M v^2 (k^2/R^2)$ and $K_{\\text{total}} = \\frac{1}{2} M v^2 (1 + k^2/R^2)$. The ratio is $\\frac{k^2/R^2}{1 + k^2/R^2} = \\frac{k^2}{R^2 + k^2}$.\nReason (R) is true and directly explains Assertion (A): $K = K_{\\text{trans}} + K_{\\text{rot}}$ and with $\\omega = v/R$, the algebraic derivation follows directly. Both (A) and (R) are true, and (R) correctly explains (A)."
      }
    },
    {
      index: 44, // Q45
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The velocity of the lowest point of contact of a rolling body is zero at every instant, yet the acceleration of this point is non-zero.\nReason (R): The point of contact undergoes centripetal acceleration directed vertically upward toward the center of the rolling body.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The velocity of the lowest point of contact of a rolling body is zero at every instant, yet the acceleration of this point is non-zero.\nReason (R): The point of contact undergoes centripetal acceleration directed vertically upward toward the center of the rolling body.",
        options: standardAROptions,
        correctAnswer: 0, // A
        correctOption: "a",
        explanation: "Assertion (A) is true: At the contact point, the linear velocity is momentarily zero ($v = 0$), but the cycloid trajectory curves upward, meaning the acceleration is non-zero.\nReason (R) is true and directly explains Assertion (A): The point on the rim is executing circular motion relative to the center of mass with centripetal acceleration $a_c = \\frac{v^2}{R} = R\\omega^2$ directed towards the center (vertically upward). Both (A) and (R) are true, and (R) correctly explains (A)."
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

await applyTestUpdates(t4_updates);
await applyTestUpdates(t5_updates);
await applyTestUpdates(t6_updates);

await client.close();
