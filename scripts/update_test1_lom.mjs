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
// TEST 1: NEWTON'S LAWS (neet-SUBTOPIC-Physics-Newton's-laws)
// -------------------------------------------------------------
const t1_updates = {
  testId: "neet-SUBTOPIC-Physics-Newton's-laws",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A block of mass $m = 5\\text{ kg}$ is placed on a smooth inclined plane making an angle of $\\theta = 30^\\circ$ with the horizontal, as shown in the free-body diagram. Taking $g = 10\\text{ m/s}^2$, what are the magnitude of the normal reaction force exerted by the incline on the block and the downhill acceleration of the block respectively?",
        text: "A block of mass $m = 5\\text{ kg}$ is placed on a smooth inclined plane making an angle of $\\theta = 30^\\circ$ with the horizontal, as shown in the free-body diagram. Taking $g = 10\\text{ m/s}^2$, what are the magnitude of the normal reaction force exerted by the incline on the block and the downhill acceleration of the block respectively?",
        options: [
          "$25\\sqrt{3}\\text{ N}$ and $5\\text{ m/s}^2$",
          "$25\\text{ N}$ and $5\\sqrt{3}\\text{ m/s}^2$",
          "$50\\text{ N}$ and $10\\text{ m/s}^2$",
          "$25\\sqrt{3}\\text{ N}$ and $2.5\\text{ m/s}^2$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Resolve gravitational force into components:**\n- Perpendicular to incline: $F_\\perp = mg \\cos 30^\\circ = (5)(10)\\left(\\frac{\\sqrt{3}}{2}\\right) = 25\\sqrt{3}\\text{ N}$.\n- Parallel to incline (downhill): $F_\\parallel = mg \\sin 30^\\circ = (5)(10)(0.5) = 25\\text{ N}$.\n\n**Step 2: Normal reaction force $N$:**\nSince there is no motion perpendicular to the incline:\n$$N = mg \\cos 30^\\circ = 25\\sqrt{3}\\text{ N}.$$\n\n**Step 3: Downhill acceleration $a$:**\nApplying Newton's second law along the incline:\n$$F_\\parallel = m a \\implies a = g \\sin 30^\\circ = 10 \\times 0.5 = 5\\text{ m/s}^2.$$",
        image: "/images/diagrams/laws_of_motion/test1_q1_incline_fbd.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test1_q1_incline_fbd.svg",
        diagramType: "TIKZ",
        diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (0,0) -- (4,0) -- (4,2.3) -- cycle;\n\\draw[rotate=30] (1.5,0) rectangle (2.5,0.8);\n\\end{tikzpicture}",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "A passenger of mass $m = 60\\text{ kg}$ stands on a spring weighing scale inside an elevator, as shown in the figure. If the elevator is accelerating vertically upwards with a constant acceleration of $a = 2\\text{ m/s}^2$, what is the reading shown by the weighing scale? (Take $g = 10\\text{ m/s}^2$)",
        text: "A passenger of mass $m = 60\\text{ kg}$ stands on a spring weighing scale inside an elevator, as shown in the figure. If the elevator is accelerating vertically upwards with a constant acceleration of $a = 2\\text{ m/s}^2$, what is the reading shown by the weighing scale? (Take $g = 10\\text{ m/s}^2$)",
        options: [
          "$720\\text{ N} \\text{ (or } 72\\text{ kgf)}$",
          "$600\\text{ N} \\text{ (or } 60\\text{ kgf)}$",
          "$480\\text{ N} \\text{ (or } 48\\text{ kgf)}$",
          "$840\\text{ N} \\text{ (or } 84\\text{ kgf)}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Free-body diagram of the passenger:**\nForces acting on the passenger of mass $m$:\n1. Normal reaction $N$ directed vertically upwards (this is the force measured by the scale).\n2. Gravitational force $W = mg$ directed vertically downwards.\n\n**Step 2: Apply Newton's Second Law:**\nSince the elevator accelerates upward with acceleration $a$:\n$$F_{\\text{net}} = m a \\implies N - mg = m a$$\n$$N = m(g + a)$$\n\n**Step 3: Calculation:**\n$$N = 60(10 + 2) = 60 \\times 12 = 720\\text{ N}$$\nIn terms of kilogram-force (reading on scale calibrated in kg):\n$$\\text{Reading} = \\frac{720}{10} = 72\\text{ kgf}.$$",
        image: "/images/diagrams/laws_of_motion/test1_q2_elevator_apparent_weight.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test1_q2_elevator_apparent_weight.svg",
        diagramType: "TIKZ",
        diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (0,0) rectangle (2,3);\n\\draw (0.5,0.2) rectangle (1.5,0.4);\n\\end{tikzpicture}",
        difficulty: "easy",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "Three blocks of masses $m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, and $m_3 = 5\\text{ kg}$ connected by light inextensible strings are placed on a smooth horizontal surface, as depicted in the diagram. A horizontal pulling force of $F = 50\\text{ N}$ is applied to mass $m_3$. What is the ratio of tension $T_1$ (between $m_1$ and $m_2$) to tension $T_2$ (between $m_2$ and $m_3$)?",
        text: "Three blocks of masses $m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, and $m_3 = 5\\text{ kg}$ connected by light inextensible strings are placed on a smooth horizontal surface, as depicted in the diagram. A horizontal pulling force of $F = 50\\text{ N}$ is applied to mass $m_3$. What is the ratio of tension $T_1$ (between $m_1$ and $m_2$) to tension $T_2$ (between $m_2$ and $m_3$)?",
        options: [
          "$2 : 5$",
          "$1 : 2$",
          "$3 : 5$",
          "$2 : 3$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Common acceleration of the system:**\nTotal mass $M = m_1 + m_2 + m_3 = 2 + 3 + 5 = 10\\text{ kg}$.\n$$a = \\frac{F}{M} = \\frac{50\\text{ N}}{10\\text{ kg}} = 5\\text{ m/s}^2$$\n\n**Step 2: Tension $T_1$:**\n$T_1$ accelerates only block $m_1$:\n$$T_1 = m_1 a = 2\\text{ kg} \\times 5\\text{ m/s}^2 = 10\\text{ N}$$\n\n**Step 3: Tension $T_2$:**\n$T_2$ accelerates blocks $(m_1 + m_2)$:\n$$T_2 = (m_1 + m_2) a = (2 + 3) \\times 5 = 25\\text{ N}$$\n\n**Step 4: Compute ratio:**\n$$\\frac{T_1}{T_2} = \\frac{10}{25} = \\frac{2}{5} = 2 : 5.$$",
        image: "/images/diagrams/laws_of_motion/test1_q3_three_blocks_tension.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test1_q3_three_blocks_tension.svg",
        diagramType: "TIKZ",
        diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (0,0) -- (6,0);\n\\draw (0.5,0) rectangle (1.5,1);\n\\draw (2.5,0) rectangle (3.5,1);\n\\draw (4.5,0) rectangle (5.5,1);\n\\end{tikzpicture}",
        difficulty: "medium",
        type: "MCQ"
      }
    }
  ],
  sectionB: [
    {
      index: 39,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Action and reaction forces never cancel each other out to produce zero acceleration of an individual object.\n**Reason (R):** According to Newton's Third Law, action and reaction forces always act simultaneously on two different bodies.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Action and reaction forces never cancel each other out to produce zero acceleration of an individual object.\n**Reason (R):** According to Newton's Third Law, action and reaction forces always act simultaneously on two different bodies.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Both (A) and (R) are true, and (R) correctly explains (A). Forces can cancel only when they act on the same body. Since action and reaction act on two mutually interacting different bodies, they cannot cancel each other.",
        difficulty: "easy",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle moving with constant non-zero velocity has zero net external force acting on it.\n**Reason (R):** Mass is a measure of the inertia of a body in rectilinear motion.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle moving with constant non-zero velocity has zero net external force acting on it.\n**Reason (R):** Mass is a measure of the inertia of a body in rectilinear motion.",
        options: standardAROptions,
        correctAnswer: 1,
        correctOption: "b",
        explanation: "Assertion (A) is true: By Newton's First Law, $\\vec{v} = \\text{constant} \\implies \\vec{a} = 0 \\implies \\vec{F}_{\\text{net}} = 0$.\nReason (R) is true: Mass is the quantitative measure of inertia.\nHowever, (R) is not the explanation of (A). (A) is explained by $\\vec{F} = m \\frac{d\\vec{v}}{dt} = 0$.",
        difficulty: "medium",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A man standing in an elevator feels completely weightless when the elevator cable snaps and it falls freely under gravity.\n**Reason (R):** In free fall, the downward acceleration of the elevator equals $g$, so the normal contact reaction force between the floor and the man drops to zero.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A man standing in an elevator feels completely weightless when the elevator cable snaps and it falls freely under gravity.\n**Reason (R):** In free fall, the downward acceleration of the elevator equals $g$, so the normal contact reaction force between the floor and the man drops to zero.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Both (A) and (R) are true, and (R) is the correct explanation. Apparent weight is measured by the normal reaction $N = m(g - a) = m(g - g) = 0$.",
        difficulty: "medium",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A cricket player draws his hands backwards while catching a fast-moving ball to reduce the impact force on his hands.\n**Reason (R):** By extending the time of contact $\\Delta t$, the rate of change of momentum is reduced, resulting in a smaller average stopping force ($F = \\frac{\\Delta p}{\\Delta t}$).",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A cricket player draws his hands backwards while catching a fast-moving ball to reduce the impact force on his hands.\n**Reason (R):** By extending the time of contact $\\Delta t$, the rate of change of momentum is reduced, resulting in a smaller average stopping force ($F = \\frac{\\Delta p}{\\Delta t}$).",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Both (A) and (R) are true, and (R) provides the exact scientific explanation from Newton's second law ($F = \\Delta p / \\Delta t$).",
        difficulty: "easy",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A horse pulls a cart forward because the force exerted by the horse on the cart is greater than the force exerted by the cart on the horse.\n**Reason (R):** The force exerted by the horse on the cart and the force exerted by the cart on the horse constitute an action-reaction pair obeying Newton's Third Law.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A horse pulls a cart forward because the force exerted by the horse on the cart is greater than the force exerted by the cart on the horse.\n**Reason (R):** The force exerted by the horse on the cart and the force exerted by the cart on the horse constitute an action-reaction pair obeying Newton's Third Law.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is completely false: By Newton's Third Law, the force exerted by the horse on the cart is ALWAYS equal and opposite to the force exerted by the cart on the horse. The cart moves forward because the forward friction force exerted by the ground on the horse's hooves exceeds the backward friction force on the cart's wheels.\nReason (R) is true.",
        difficulty: "hard",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** An object can have non-zero acceleration even when its instantaneous speed is momentarily zero.\n**Reason (R):** When a body comes to instantaneous rest, all external forces acting on it must instantaneously vanish.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** An object can have non-zero acceleration even when its instantaneous speed is momentarily zero.\n**Reason (R):** When a body comes to instantaneous rest, all external forces acting on it must instantaneously vanish.",
        options: standardAROptions,
        correctAnswer: 2,
        correctOption: "c",
        explanation: "Assertion (A) is true: For example, a ball thrown vertically upwards has zero speed at the apex, but its acceleration is $g = 9.8\\text{ m/s}^2$ downwards.\nReason (R) is false: The gravitational force $mg$ continues to act constantly regardless of whether the velocity is zero.",
        difficulty: "hard",
        type: "ASSERTION_REASON"
      }
    }
  ]
};

console.log("Applying Test 1 updates...");
const t1Paper = await db.collection("testPapers").findOne({ testId: t1_updates.testId });
for (const u of [...t1_updates.diagrams, ...t1_updates.sectionB]) {
  const qId = t1Paper.questions[u.index];
  await db.collection("questionBank").updateOne(
    { _id: new ObjectId(qId) },
    { $set: { ...u.data, chapter: "Laws of Motion", subtopic: "Newton's laws", updatedAt: new Date() } }
  );
  console.log(`Updated Test 1 Q${u.index + 1}`);
}

await db.collection("testPapers").updateOne(
  { _id: t1Paper._id },
  { $set: { chapter: "Laws of Motion", subject: "Physics", updatedAt: new Date() } }
);

console.log("Test 1 (Newton's Laws) successfully updated!");
await client.close();
