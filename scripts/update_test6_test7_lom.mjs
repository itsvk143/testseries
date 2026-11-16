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
// TEST 6: CONNECTED MOTION AND PULLEY PROBLEMS
// -------------------------------------------------------------
const t6_updates = {
  testId: "neet-SUBTOPIC-Physics-Connected-motion-and-pulley-problems",
  subtopic: "Connected Motion and Pulley Problems",
  diagrams: [
    {
      index: 0,
      data: {
        question: "In the ideal Atwood machine shown in the figure, two masses $m_1 = 3\\text{ kg}$ and $m_2 = 2\\text{ kg}$ are connected by a light inextensible string passing over a frictionless, massless pulley ($g = 10\\text{ m/s}^2$). When the system is released from rest, what is the acceleration $a$ of the masses, and what is the tension $T$ in the string?",
        text: "In the ideal Atwood machine shown in the figure, two masses $m_1 = 3\\text{ kg}$ and $m_2 = 2\\text{ kg}$ are connected by a light inextensible string passing over a frictionless, massless pulley ($g = 10\\text{ m/s}^2$). When the system is released from rest, what is the acceleration $a$ of the masses, and what is the tension $T$ in the string?",
        options: [
          "$a = 2\\text{ m/s}^2$ and $T = 24\\text{ N}$",
          "$a = 2.5\\text{ m/s}^2$ and $T = 25\\text{ N}$",
          "$a = 1\\text{ m/s}^2$ and $T = 20\\text{ N}$",
          "$a = 2\\text{ m/s}^2$ and $T = 30\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Equation of motion for heavier mass $m_1$ (moving downwards):**\n$$m_1 g - T = m_1 a \\implies 3(10) - T = 3a \\implies 30 - T = 3a$$\n\n**Step 2: Equation of motion for lighter mass $m_2$ (moving upwards):**\n$$T - m_2 g = m_2 a \\implies T - 2(10) = 2a \\implies T - 20 = 2a$$\n\n**Step 3: Solve for acceleration $a$ and tension $T$:**\nAdding equations:\n$$(30 - 20) = (3 + 2)a \\implies 10 = 5a \\implies a = 2\\text{ m/s}^2$$\n$$T = 20 + 2(2) = 24\\text{ N}.$$",
        image: "/images/diagrams/laws_of_motion/test6_q1_atwood_machine.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test6_q1_atwood_machine.svg",
        diagramType: "TIKZ",
        difficulty: "easy",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "A block of mass $M = 3\\text{ kg}$ sits on a smooth horizontal table and is attached via a light string over a frictionless corner pulley to a suspended mass $m = 2\\text{ kg}$, as illustrated in the figure ($g = 10\\text{ m/s}^2$). Assuming the string is taut and inextensible, what is the common acceleration $a$ of the system and the tension $T$ in the connecting string?",
        text: "A block of mass $M = 3\\text{ kg}$ sits on a smooth horizontal table and is attached via a light string over a frictionless corner pulley to a suspended mass $m = 2\\text{ kg}$, as illustrated in the figure ($g = 10\\text{ m/s}^2$). Assuming the string is taut and inextensible, what is the common acceleration $a$ of the system and the tension $T$ in the connecting string?",
        options: [
          "$a = 4\\text{ m/s}^2$ and $T = 12\\text{ N}$",
          "$a = 6.67\\text{ m/s}^2$ and $T = 20\\text{ N}$",
          "$a = 4\\text{ m/s}^2$ and $T = 8\\text{ N}$",
          "$a = 5\\text{ m/s}^2$ and $T = 15\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Equation of motion for table mass $M$:**\nSince table is smooth ($f = 0$):\n$$T = M a = 3 a$$\n\n**Step 2: Equation of motion for hanging mass $m$:**\n$$m g - T = m a \\implies 2(10) - T = 2 a \\implies 20 - T = 2 a$$\n\n**Step 3: Solve for $a$ and $T$:**\n$$20 - 3a = 2a \\implies 5a = 20 \\implies a = 4\\text{ m/s}^2$$\n$$T = 3 \\times 4 = 12\\text{ N}.$$",
        image: "/images/diagrams/laws_of_motion/test6_q2_table_hanging_pulley.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test6_q2_table_hanging_pulley.svg",
        diagramType: "TIKZ",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "A block $m_1 = 5\\text{ kg}$ rests on a frictionless inclined plane of inclination $\\theta = 30^\\circ$ and is connected by a light string over a frictionless summit pulley to a vertically hanging mass $m_2 = 3\\text{ kg}$, as shown in the diagram ($g = 10\\text{ m/s}^2$). What is the acceleration of mass $m_2$ and the tension $T$ in the string?",
        text: "A block $m_1 = 5\\text{ kg}$ rests on a frictionless inclined plane of inclination $\\theta = 30^\\circ$ and is connected by a light string over a frictionless summit pulley to a vertically hanging mass $m_2 = 3\\text{ kg}$, as shown in the diagram ($g = 10\\text{ m/s}^2$). What is the acceleration of mass $m_2$ and the tension $T$ in the string?",
        options: [
          "$a = 0.625\\text{ m/s}^2$ (downward) and $T = 28.125\\text{ N}$",
          "$a = 1.25\\text{ m/s}^2$ (downward) and $T = 26.25\\text{ N}$",
          "$a = 0.625\\text{ m/s}^2$ (upward) and $T = 31.875\\text{ N}$",
          "$a = 0\\text{ m/s}^2$ (equilibrium) and $T = 25\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Compare driving gravitational forces:**\n- Hanging mass: $F_2 = m_2 g = 3 \\times 10 = 30\\text{ N}$\n- Incline component: $F_{1\\parallel} = m_1 g \\sin 30^\\circ = 5 \\times 10 \\times 0.5 = 25\\text{ N}$\nSince $F_2 > F_{1\\parallel}$, mass $m_2$ accelerates downwards and $m_1$ accelerates up the incline.\n\n**Step 2: Calculate net acceleration:**\n$$a = \\frac{m_2 g - m_1 g \\sin\\theta}{m_1 + m_2} = \\frac{30 - 25}{5 + 3} = \\frac{5}{8} = 0.625\\text{ m/s}^2$$\n\n**Step 3: Calculate tension $T$:**\n$$m_2 g - T = m_2 a \\implies T = m_2(g - a) = 3(10 - 0.625) = 3(9.375) = 28.125\\text{ N}.$$",
        image: "/images/diagrams/laws_of_motion/test6_q3_incline_pulley_system.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test6_q3_incline_pulley_system.svg",
        diagramType: "TIKZ",
        difficulty: "hard",
        type: "MCQ"
      }
    }
  ],
  sectionB: [
    {
      index: 39,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In an ideal Atwood machine ($m_1 > m_2$), the tension in the connecting string is always strictly less than the weight of the heavier mass ($T < m_1 g$) and strictly greater than the weight of the lighter mass ($T > m_2 g$).\n**Reason (R):** For the heavier mass to accelerate downwards, the downward gravitational force must exceed tension ($m_1 g - T = m_1 a$), and for the lighter mass to accelerate upwards, tension must exceed its weight ($T - m_2 g = m_2 a$).",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In an ideal Atwood machine ($m_1 > m_2$), the tension in the connecting string is always strictly less than the weight of the heavier mass ($T < m_1 g$) and strictly greater than the weight of the lighter mass ($T > m_2 g$).\n**Reason (R):** For the heavier mass to accelerate downwards, the downward gravitational force must exceed tension ($m_1 g - T = m_1 a$), and for the lighter mass to accelerate upwards, tension must exceed its weight ($T - m_2 g = m_2 a$).",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: $m_2 g < T < m_1 g$. Reason (R) is true and is the exact Newton's Second Law derivation explaining why tension must lie between the two weights during non-zero acceleration.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In an ideal Atwood machine, the upward force exerted by the axle on the pulley is equal to the sum of weights of the two masses ($F = (m_1 + m_2)g$).\n**Reason (R):** When masses accelerate, the tension in the string is given by $T = \\frac{2m_1m_2}{m_1+m_2}g$, which is strictly less than $\\frac{(m_1+m_2)g}{2}$, making the support reaction $2T < (m_1+m_2)g$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In an ideal Atwood machine, the upward force exerted by the axle on the pulley is equal to the sum of weights of the two masses ($F = (m_1 + m_2)g$).\n**Reason (R):** When masses accelerate, the tension in the string is given by $T = \\frac{2m_1m_2}{m_1+m_2}g$, which is strictly less than $\\frac{(m_1+m_2)g}{2}$, making the support reaction $2T < (m_1+m_2)g$.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: because the center of mass of the system accelerates downwards, the net downward force causes the supporting reaction to be $2T = \\frac{4m_1m_2}{m_1+m_2}g < (m_1+m_2)g$. Reason (R) is true and correctly provides the mathematical basis for this inequality.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The tension along an ideal string passing over a frictionless, massless pulley is uniform throughout its length.\n**Reason (R):** A massless string cannot have any net force acting on any segment without resulting in infinite acceleration according to $F_{\\text{net}} = ma$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The tension along an ideal string passing over a frictionless, massless pulley is uniform throughout its length.\n**Reason (R):** A massless string cannot have any net force acting on any segment without resulting in infinite acceleration according to $F_{\\text{net}} = ma$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: tension is identical throughout a light string over a frictionless pulley. Reason (R) is true and correctly explains why: for $m = 0$, $F_{\\text{net}} = 0$ everywhere, requiring equal tensions at both ends of every differential string element.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If a heavy rope of mass $M$ and length $L$ hangs vertically from a ceiling, the tension is maximum at the ceiling and decreases linearly to zero at the free bottom end.\n**Reason (R):** The tension at any cross-section of a hanging heavy rope supports only the weight of the segment of rope located below that cross-section.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If a heavy rope of mass $M$ and length $L$ hangs vertically from a ceiling, the tension is maximum at the ceiling and decreases linearly to zero at the free bottom end.\n**Reason (R):** The tension at any cross-section of a hanging heavy rope supports only the weight of the segment of rope located below that cross-section.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: $T(y) = \\frac{M}{L} y g$, which equals $Mg$ at $y = L$ (top) and $0$ at $y = 0$ (bottom). Reason (R) is true and correctly explains this distribution by static equilibrium of the lower portion.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In a movable pulley system where one end of the string is fixed to the ceiling, the acceleration of the suspended load is twice the acceleration of the free end pulled by a hand.\n**Reason (R):** By string constraint, the total length of the inextensible string remains constant at all times.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In a movable pulley system where one end of the string is fixed to the ceiling, the acceleration of the suspended load is twice the acceleration of the free end pulled by a hand.\n**Reason (R):** By string constraint, the total length of the inextensible string remains constant at all times.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: the load suspended from the movable pulley moves with HALF the acceleration of the free end ($a_{\\text{load}} = a_{\\text{end}} / 2$). Reason (R) is true: the string constraint $x_{\\text{free}} + 2 x_{\\text{pulley}} = \\text{constant}$ governs this relationship.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If a person climbs up an ideal light rope hanging over a frictionless pulley connected to an identical counterweight, both the person and the counterweight move upward with the exact same acceleration relative to the ground.\n**Reason (R):** The tension produced in the single string by the person's pull acts equally upward on both the person and the counterweight.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If a person climbs up an ideal light rope hanging over a frictionless pulley connected to an identical counterweight, both the person and the counterweight move upward with the exact same acceleration relative to the ground.\n**Reason (R):** The tension produced in the single string by the person's pull acts equally upward on both the person and the counterweight.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: since the masses are identical ($m$) and tension $T$ is identical, both experience the identical net vertical force $T - mg$, producing identical upward accelerations $a = (T - mg)/m$. Reason (R) is true and correctly provides the fundamental physical explanation.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    }
  ]
};

// -------------------------------------------------------------
// TEST 7: EQUILIBRIUM OF CONCURRENT FORCES
// -------------------------------------------------------------
const t7_updates = {
  testId: "neet-SUBTOPIC-Physics-Equilibrium-of-concurrent-forces",
  subtopic: "Equilibrium of Concurrent Forces",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A load of weight $W = 100\\text{ N}$ is suspended from a ceiling by two light strings making angles of $60^\\circ$ and $30^\\circ$ with the vertical, as shown in the figure. Under static equilibrium, what are the tensions $T_1$ and $T_2$ in the two strings?",
        text: "A load of weight $W = 100\\text{ N}$ is suspended from a ceiling by two light strings making angles of $60^\\circ$ and $30^\\circ$ with the vertical, as shown in the figure. Under static equilibrium, what are the tensions $T_1$ and $T_2$ in the two strings?",
        options: [
          "$T_1 = 50\\text{ N}$ and $T_2 = 50\\sqrt{3}\\text{ N} \\approx 86.6\\text{ N}$",
          "$T_1 = 50\\sqrt{3}\\text{ N}$ and $T_2 = 50\\text{ N}$",
          "$T_1 = 100\\text{ N}$ and $T_2 = 50\\text{ N}$",
          "$T_1 = 70.7\\text{ N}$ and $T_2 = 70.7\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Balance horizontal forces at the junction:**\n$$T_1 \\sin 60^\\circ = T_2 \\sin 30^\\circ \\implies T_1 \\frac{\\sqrt{3}}{2} = T_2 \\frac{1}{2} \\implies T_2 = \\sqrt{3} T_1$$\n\n**Step 2: Balance vertical forces:**\n$$T_1 \\cos 60^\\circ + T_2 \\cos 30^\\circ = W$$\n$$T_1 (0.5) + (\\sqrt{3} T_1) \\frac{\\sqrt{3}}{2} = 100$$\n$$0.5 T_1 + 1.5 T_1 = 100 \\implies 2 T_1 = 100 \\implies T_1 = 50\\text{ N}$$\n\n**Step 3: Solve for $T_2$:**\n$$T_2 = 50\\sqrt{3} \\approx 86.6\\text{ N}.$$",
        image: "/images/diagrams/laws_of_motion/test7_q1_lamis_theorem_suspended.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test7_q1_lamis_theorem_suspended.svg",
        diagramType: "TIKZ",
        difficulty: "easy",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "Three concurrent coplanar forces $\\vec{F}_1$, $\\vec{F}_2$, and $\\vec{F}_3$ keep a particle in static equilibrium. When placed head-to-tail, they form a closed triangle as shown in the diagram, where the angles opposite to $\\vec{F}_1$, $\\vec{F}_2$, and $\\vec{F}_3$ are $30^\\circ$, $60^\\circ$, and $90^\\circ$, respectively. If $|\\vec{F}_1| = 20\\text{ N}$, what are the magnitudes $|\\vec{F}_2|$ and $|\\vec{F}_3|$?",
        text: "Three concurrent coplanar forces $\\vec{F}_1$, $\\vec{F}_2$, and $\\vec{F}_3$ keep a particle in static equilibrium. When placed head-to-tail, they form a closed triangle as shown in the diagram, where the angles opposite to $\\vec{F}_1$, $\\vec{F}_2$, and $\\vec{F}_3$ are $30^\\circ$, $60^\\circ$, and $90^\\circ$, respectively. If $|\\vec{F}_1| = 20\\text{ N}$, what are the magnitudes $|\\vec{F}_2|$ and $|\\vec{F}_3|$?",
        options: [
          "$|\\vec{F}_2| = 20\\sqrt{3}\\text{ N} \\approx 34.64\\text{ N}$ and $|\\vec{F}_3| = 40\\text{ N}$",
          "$|\\vec{F}_2| = 20\\text{ N}$ and $|\\vec{F}_3| = 40\\text{ N}$",
          "$|\\vec{F}_2| = 40\\text{ N}$ and $|\\vec{F}_3| = 20\\sqrt{3}\\text{ N}$",
          "$|\\vec{F}_2| = 10\\sqrt{3}\\text{ N}$ and $|\\vec{F}_3| = 20\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Apply Lami's Theorem / Law of Sines for a force triangle:**\n$$\\frac{F_1}{\\sin 30^\\circ} = \\frac{F_2}{\\sin 60^\\circ} = \\frac{F_3}{\\sin 90^\\circ}$$\n\n**Step 2: Solve for $F_2$:**\n$$F_2 = F_1 \\frac{\\sin 60^\\circ}{\\sin 30^\\circ} = 20 \\times \\frac{\\sqrt{3}/2}{1/2} = 20\\sqrt{3} \\approx 34.64\\text{ N}$$\n\n**Step 3: Solve for $F_3$:**\n$$F_3 = F_1 \\frac{\\sin 90^\\circ}{\\sin 30^\\circ} = 20 \\times \\frac{1}{0.5} = 40\\text{ N}.$$",
        image: "/images/diagrams/laws_of_motion/test7_q2_closed_force_triangle.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test7_q2_closed_force_triangle.svg",
        diagramType: "TIKZ",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "A uniform smooth sphere of weight $W = 60\\text{ N}$ rests symmetrically in equilibrium inside a smooth V-shaped groove whose inclined walls make an angle of $60^\\circ$ with each other ($30^\\circ$ each to the vertical), as depicted in the figure. What is the magnitude of the normal reaction force exerted by each wall on the sphere?",
        text: "A uniform smooth sphere of weight $W = 60\\text{ N}$ rests symmetrically in equilibrium inside a smooth V-shaped groove whose inclined walls make an angle of $60^\\circ$ with each other ($30^\\circ$ each to the vertical), as depicted in the figure. What is the magnitude of the normal reaction force exerted by each wall on the sphere?",
        options: [
          "$20\\sqrt{3}\\text{ N} \\approx 34.64\\text{ N}$",
          "$60\\text{ N}$",
          "$30\\text{ N}$",
          "$60\\sqrt{3}\\text{ N} \\approx 103.9\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Normal reaction directions:**\nEach normal reaction force is perpendicular to the corresponding inclined wall. Since each wall is inclined at $60^\\circ$ to the horizontal ($30^\\circ$ to vertical), each normal reaction acts at $30^\\circ$ above the horizontal ($60^\\circ$ to vertical).\n\n**Step 2: Balance vertical components:**\nBy symmetry, $N_1 = N_2 = N$:\n$$2 N \\cos 30^\\circ = W \\implies 2 N \\left(\\frac{\\sqrt{3}}{2}\\right) = 60$$\n$$\\sqrt{3} N = 60 \\implies N = \\frac{60}{\\sqrt{3}} = 20\\sqrt{3}\\text{ N} \\approx 34.64\\text{ N}.$$",
        image: "/images/diagrams/laws_of_motion/test7_q3_sphere_in_v_groove.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test7_q3_sphere_in_v_groove.svg",
        diagramType: "TIKZ",
        difficulty: "hard",
        type: "MCQ"
      }
    }
  ],
  sectionB: [
    {
      index: 39,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If three coplanar concurrent forces acting on a particle maintain it in equilibrium, the vector sum of any two of the forces must be equal in magnitude and opposite in direction to the third force.\n**Reason (R):** For translational equilibrium of a point mass under concurrent forces, the net resultant force must be strictly zero: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_1 + \\vec{F}_2 = -\\vec{F}_3$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If three coplanar concurrent forces acting on a particle maintain it in equilibrium, the vector sum of any two of the forces must be equal in magnitude and opposite in direction to the third force.\n**Reason (R):** For translational equilibrium of a point mass under concurrent forces, the net resultant force must be strictly zero: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_1 + \\vec{F}_2 = -\\vec{F}_3$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: any two forces must equilibrate the third. Reason (R) is true and is the exact vector equation defining translational equilibrium of concurrent forces.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Lami's theorem can be applied to determine the magnitudes of four coplanar concurrent forces keeping a particle in static equilibrium.\n**Reason (R):** Lami's theorem states that each force is proportional to the sine of the angle between the remaining two forces.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Lami's theorem can be applied to determine the magnitudes of four coplanar concurrent forces keeping a particle in static equilibrium.\n**Reason (R):** Lami's theorem states that each force is proportional to the sine of the angle between the remaining two forces.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: Lami's theorem applies strictly to exactly THREE coplanar, concurrent forces in equilibrium. Reason (R) is true: it correctly defines Lami's theorem for three concurrent forces ($F_1/\\sin\\alpha = F_2/\\sin\\beta = F_3/\\sin\\gamma$).",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle can remain in static equilibrium under the action of three concurrent forces of magnitudes $3\\text{ N}$, $5\\text{ N}$, and $9\\text{ N}$.\n**Reason (R):** For three coplanar forces to form a closed triangle of equilibrium, the sum of any two magnitudes must be strictly greater than or equal to the third magnitude ($F_1 + F_2 \\ge F_3$).",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle can remain in static equilibrium under the action of three concurrent forces of magnitudes $3\\text{ N}$, $5\\text{ N}$, and $9\\text{ N}$.\n**Reason (R):** For three coplanar forces to form a closed triangle of equilibrium, the sum of any two magnitudes must be strictly greater than or equal to the third magnitude ($F_1 + F_2 \\ge F_3$).",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: $3 + 5 = 8 < 9$, violating the triangle inequality; therefore, they cannot form a closed force triangle or produce zero resultant. Reason (R) is true: triangle inequality of vectors is mandatory for three forces to produce equilibrium.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If the line of action of all applied forces pass through a single common point, rotational equilibrium about that point is automatically guaranteed.\n**Reason (R):** The lever arm (perpendicular distance) from the concurrent intersection point to the line of action of each force is zero, resulting in zero net torque about that point.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If the line of action of all applied forces pass through a single common point, rotational equilibrium about that point is automatically guaranteed.\n**Reason (R):** The lever arm (perpendicular distance) from the concurrent intersection point to the line of action of each force is zero, resulting in zero net torque about that point.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: concurrent forces generate no torque about their point of concurrency. Reason (R) is true and correctly provides the mathematical reason: $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{0}$ because $\\vec{r} = \\vec{0}$ for all forces.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A minimum of three non-collinear, coplanar forces of equal magnitude can maintain a particle in static equilibrium.\n**Reason (R):** If three equal forces act on a point with mutual angles of $120^\\circ$ between each pair, their vector sum is zero.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A minimum of three non-collinear, coplanar forces of equal magnitude can maintain a particle in static equilibrium.\n**Reason (R):** If three equal forces act on a point with mutual angles of $120^\\circ$ between each pair, their vector sum is zero.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: two non-collinear forces of equal magnitude cannot cancel; at least three are required. Reason (R) is true and gives the symmetric configuration where three equal forces at $120^\\circ$ cancel completely.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a body is in equilibrium under concurrent forces, its velocity must be strictly zero.\n**Reason (R):** Equilibrium under concurrent forces only requires zero acceleration ($\\vec{a} = \\vec{0}$), which is consistent with either rest or uniform rectilinear motion at constant velocity.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a body is in equilibrium under concurrent forces, its velocity must be strictly zero.\n**Reason (R):** Equilibrium under concurrent forces only requires zero acceleration ($\\vec{a} = \\vec{0}$), which is consistent with either rest or uniform rectilinear motion at constant velocity.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: dynamic equilibrium occurs when a body moves with constant non-zero velocity ($\\vec{v} = \\text{constant}$). Reason (R) is true: equilibrium strictly means zero net force and zero acceleration.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    }
  ]
};

async function applyTestUpdate(testConf) {
  console.log(`Applying ${testConf.subtopic} (${testConf.testId}) updates...`);
  const tp = await db.collection("testPapers").findOne({ testId: testConf.testId });
  if (!tp) {
    console.error(`Test ${testConf.testId} not found in testPapers!`);
    return;
  }

  // Update Diagrams
  for (const item of testConf.diagrams) {
    const qId = tp.questions[item.index];
    const updateDoc = {
      ...item.data,
      chapter: "Laws of Motion",
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
      chapter: "Laws of Motion",
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
}

await applyTestUpdate(t6_updates);
await applyTestUpdate(t7_updates);

console.log("Tests 6 & 7 successfully updated!");
await client.close();
