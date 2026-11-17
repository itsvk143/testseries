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

const t1_updates = {
  testId: "neet-SUBTOPIC-Physics-Work-energy-theorem",
  subtopic: "Work-Energy Theorem",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A particle of mass $m = 2\\text{ kg}$ initially moving at speed $u = 2\\text{ m/s}$ along the $x$-axis is subjected to a one-dimensional variable force $F(x)$ whose profile is shown in the force–displacement graph below. The force acts in the positive $x$-direction ($F = +20\\text{ N}$) from $x = 0$ to $x = 3\\text{ m}$, drops linearly to zero at $x = 5\\text{ m}$, reverses direction to reach a peak of $-10\\text{ N}$ at $x = 7\\text{ m}$, and returns to zero at $x = 10\\text{ m}$. Using the Work–Energy Theorem, what is the net work done on the particle between $x = 0$ and $x = 10\\text{ m}$, and its final speed $v$ at $x = 10\\text{ m}$?",
        text: "A particle of mass $m = 2\\text{ kg}$ initially moving at speed $u = 2\\text{ m/s}$ along the $x$-axis is subjected to a one-dimensional variable force $F(x)$ whose profile is shown in the force–displacement graph below. The force acts in the positive $x$-direction ($F = +20\\text{ N}$) from $x = 0$ to $x = 3\\text{ m}$, drops linearly to zero at $x = 5\\text{ m}$, reverses direction to reach a peak of $-10\\text{ N}$ at $x = 7\\text{ m}$, and returns to zero at $x = 10\\text{ m}$. Using the Work–Energy Theorem, what is the net work done on the particle between $x = 0$ and $x = 10\\text{ m}$, and its final speed $v$ at $x = 10\\text{ m}$?",
        options: [
          "$W_{\\text{net}} = 56\\text{ J}$ and $v = \\sqrt{60}\\text{ m/s} \\approx 7.75\\text{ m/s}$",
          "$W_{\\text{net}} = 70\\text{ J}$ and $v = \\sqrt{74}\\text{ m/s} \\approx 8.60\\text{ m/s}$",
          "$W_{\\text{net}} = 84\\text{ J}$ and $v = 9.38\\text{ m/s}$",
          "$W_{\\text{net}} = 42\\text{ J}$ and $v = 6.78\\text{ m/s}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Calculate positive work (Area $A_1$, $x = 0$ to $5\\text{ m}$):**\nArea of trapezoid = $\\frac{\\text{top base} + \\text{bottom base}}{2} \\times \\text{height} = \\frac{2 + 5}{2} \\times 20 = 70\\text{ J}$.\n\n**Step 2: Calculate negative work (Area $A_2$, $x = 5$ to $10\\text{ m}$):**\nArea of triangle = $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 5 \\times (-5.6) = -14\\text{ J}$.\n\n**Step 3: Total net work:**\n$$W_{\\text{net}} = A_1 + A_2 = 70 - 14 = 56\\text{ J}$$\n\n**Step 4: Apply Work–Energy Theorem:**\n$$W_{\\text{net}} = \\Delta K = \\frac{1}{2}m(v^2 - u^2)$$\n$$56 = \\frac{1}{2}(2)(v^2 - 2^2) = v^2 - 4 \\implies v^2 = 60 \\implies v = \\sqrt{60}\\text{ m/s} \\approx 7.75\\text{ m/s}.$$",
        image: "/images/diagrams/work_energy_power/test1_q1_fx_trapezoid_graph.svg",
        diagramAssetUrl: "/images/diagrams/work_energy_power/test1_q1_fx_trapezoid_graph.svg",
        diagramType: "PGFPLOTS",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "A block of mass $m = 5\\text{ kg}$ is pulled up a rough inclined plane ($\\theta = 37^\\circ$) by a constant force $F = 50\\text{ N}$ directed at an angle $\\phi = 37^\\circ$ above the inclined surface, as shown in the diagram. The block is displaced by a distance $s = 10\\text{ m}$ along the incline ($g = 10\\text{ m/s}^2$, $\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). If the coefficient of kinetic friction between the block and the incline is $\\mu_k = 0.25$, what is the net work done on the block by all forces acting on it?",
        text: "A block of mass $m = 5\\text{ kg}$ is pulled up a rough inclined plane ($\\theta = 37^\\circ$) by a constant force $F = 50\\text{ N}$ directed at an angle $\\phi = 37^\\circ$ above the inclined surface, as shown in the diagram. The block is displaced by a distance $s = 10\\text{ m}$ along the incline ($g = 10\\text{ m/s}^2$, $\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). If the coefficient of kinetic friction between the block and the incline is $\\mu_k = 0.25$, what is the net work done on the block by all forces acting on it?",
        options: [
          "$+75\\text{ J}$",
          "$+100\\text{ J}$",
          "$+400\\text{ J}$",
          "$+50\\text{ J}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Work done by applied force $F$:**\n$$W_F = F s \\cos\\phi = 50 \\times 10 \\times \\cos 37^\\circ = 50 \\times 10 \\times 0.8 = 400\\text{ J}$$\n\n**Step 2: Normal reaction and work by friction:**\nPerpendicular to incline: $N + F\\sin\\phi = mg\\cos\\theta$\n$$N = mg\\cos 37^\\circ - F\\sin 37^\\circ = 5(10)(0.8) - 50(0.6) = 40 - 30 = 10\\text{ N}$$\nFrictional force: $f_k = \\mu_k N = 0.25 \\times 10 = 2.5\\text{ N}$\n$$W_f = -f_k s = -2.5 \\times 10 = -25\\text{ J}$$\n\n**Step 3: Work done by gravity:**\n$$W_g = -mg s \\sin\\theta = -5(10)(10)(0.6) = -300\\text{ J}$$\n\n**Step 4: Net work done:**\n$$W_{\\text{net}} = W_F + W_g + W_f + W_N = 400 - 300 - 25 + 0 = +75\\text{ J}.$$",
        image: "/images/diagrams/work_energy_power/test1_q2_angled_pull_incline.svg",
        diagramAssetUrl: "/images/diagrams/work_energy_power/test1_q2_angled_pull_incline.svg",
        diagramType: "TIKZ",
        difficulty: "hard",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "A block of mass $m = 2\\text{ kg}$ moving with an initial speed $v_0 = 4\\text{ m/s}$ along a rough horizontal floor ($\\mu = 0.2$) strikes and compresses a horizontal buffer spring of stiffness $k = 200\\text{ N/m}$, as illustrated in the figure ($g = 10\\text{ m/s}^2$). Using the Work–Energy Theorem, determine the maximum compression $x_{\\text{max}}$ of the spring before the block momentarily comes to rest.",
        text: "A block of mass $m = 2\\text{ kg}$ moving with an initial speed $v_0 = 4\\text{ m/s}$ along a rough horizontal floor ($\\mu = 0.2$) strikes and compresses a horizontal buffer spring of stiffness $k = 200\\text{ N/m}$, as illustrated in the figure ($g = 10\\text{ m/s}^2$). Using the Work–Energy Theorem, determine the maximum compression $x_{\\text{max}}$ of the spring before the block momentarily comes to rest.",
        options: [
          "$0.38\\text{ m}$ (approx. $38\\text{ cm}$)",
          "$0.40\\text{ m}$ (approx. $40\\text{ cm}$)",
          "$0.25\\text{ m}$ (approx. $25\\text{ cm}$)",
          "$0.50\\text{ m}$ (approx. $50\\text{ cm}$)"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Work–Energy formulation:**\n$$W_{\\text{net}} = \\Delta K = K_f - K_i = 0 - \\frac{1}{2}mv_0^2 = -\\frac{1}{2}(2)(4^2) = -16\\text{ J}$$\nForces performing work during compression $x$:\n- Spring force: $W_s = -\\frac{1}{2}kx^2 = -\\frac{1}{2}(200)x^2 = -100x^2$\n- Kinetic friction: $W_f = -f_k x = -(\\mu mg)x = -(0.2 \\times 2 \\times 10)x = -4x$\n\n**Step 2: Set up quadratic equation:**\n$$-100x^2 - 4x = -16 \\implies 25x^2 + x - 4 = 0$$\n$$x = \\frac{-1 + \\sqrt{1 - 4(25)(-4)}}{50} = \\frac{-1 + \\sqrt{401}}{50} \\approx \\frac{-1 + 20.025}{50} \\approx 0.3805\\text{ m} \\approx 38\\text{ cm}.$$",
        image: "/images/diagrams/work_energy_power/test1_q3_variable_force_spring.svg",
        diagramAssetUrl: "/images/diagrams/work_energy_power/test1_q3_variable_force_spring.svg",
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
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by the net resultant force on a particle is always equal to the change in its kinetic energy, irrespective of whether the individual forces acting on it are conservative or non-conservative.\n**Reason (R):** The Work–Energy Theorem ($W_{\\text{net}} = \\Delta K$) is directly derived by integrating Newton's Second Law ($\\vec{F}_{\\text{net}} = m \\frac{d\\vec{v}}{dt}$) along the trajectory of motion.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by the net resultant force on a particle is always equal to the change in its kinetic energy, irrespective of whether the individual forces acting on it are conservative or non-conservative.\n**Reason (R):** The Work–Energy Theorem ($W_{\\text{net}} = \\Delta K$) is directly derived by integrating Newton's Second Law ($\\vec{F}_{\\text{net}} = m \\frac{d\\vec{v}}{dt}$) along the trajectory of motion.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: the work-energy theorem is universal and accounts for all forces (conservative, non-conservative, internal, and external). Reason (R) is true and is the exact mathematical proof: $\\int \\vec{F}_{\\text{net}} \\cdot d\\vec{r} = \\int m\\frac{d\\vec{v}}{dt} \\cdot \\vec{v}\\,dt = \\int m\\vec{v}\\cdot d\\vec{v} = \\frac{1}{2}m v_f^2 - \\frac{1}{2}m v_i^2 = \\Delta K$.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by a normal reaction force on an object is always strictly zero in every inertial reference frame.\n**Reason (R):** A normal reaction force is always perpendicular to the surface of contact between two bodies.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by a normal reaction force on an object is always strictly zero in every inertial reference frame.\n**Reason (R):** A normal reaction force is always perpendicular to the surface of contact between two bodies.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: normal force can do positive, negative, or zero work depending on the displacement of the contact surface. For example, for a person standing in an elevator accelerating upward, normal force acts upward and displacement is upward, so $W_N > 0$. Reason (R) is true: by definition, normal contact force is perpendicular to the contacting surfaces at the contact point.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The kinetic energy of a moving body is an inertial frame-dependent quantity.\n**Reason (R):** The velocity of a particle depends on the motion of the reference frame, and kinetic energy is defined as $K = \\frac{1}{2}mv^2$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The kinetic energy of a moving body is an inertial frame-dependent quantity.\n**Reason (R):** The velocity of a particle depends on the motion of the reference frame, and kinetic energy is defined as $K = \\frac{1}{2}mv^2$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: an observer moving with the particle measures $v = 0$ and $K = 0$, whereas a stationary observer measures $K = \\frac{1}{2}mv^2 > 0$. Reason (R) is true and correctly explains why: velocity is relative, hence kinetic energy is also relative to the observer's inertial frame.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a car travels on a level circular road with constant speed, the work done by the centripetal static friction is zero over any arc of motion.\n**Reason (R):** The centripetal force is directed radially towards the center of curvature, acting perpendicular to the instantaneous tangential velocity vector at every point.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a car travels on a level circular road with constant speed, the work done by the centripetal static friction is zero over any arc of motion.\n**Reason (R):** The centripetal force is directed radially towards the center of curvature, acting perpendicular to the instantaneous tangential velocity vector at every point.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: $W = 0$. Reason (R) is true and correctly explains this: since $\\vec{F}_c \\perp d\\vec{r}$ at every instant ($d\\vec{r} \\parallel \\vec{v}$), the differential work $dW = \\vec{F}_c \\cdot d\\vec{r} = F_c ds \\cos 90^\\circ = 0$.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by kinetic friction on a block sliding along a stationary horizontal floor is always negative.\n**Reason (R):** Kinetic friction acts in a direction strictly opposite to the instantaneous relative velocity of the sliding block with respect to the floor.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by kinetic friction on a block sliding along a stationary horizontal floor is always negative.\n**Reason (R):** Kinetic friction acts in a direction strictly opposite to the instantaneous relative velocity of the sliding block with respect to the floor.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: $W = -f_k s < 0$. Reason (R) is true and correctly explains why: because $\\vec{f}_k$ opposes relative displacement, the angle between $\\vec{f}_k$ and $d\\vec{r}$ is $\\theta = 180^\\circ$, giving $\\cos 180^\\circ = -1$.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If the net work done on a particle during a round trip is zero, all forces acting on the particle must be conservative forces.\n**Reason (R):** Non-conservative forces can never perform zero net work over any trajectory.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If the net work done on a particle during a round trip is zero, all forces acting on the particle must be conservative forces.\n**Reason (R):** Non-conservative forces can never perform zero net work over any trajectory.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: the net work being zero over one particular round trip does not prove that all forces are conservative; by definition, a force is conservative only if the work is zero around EVERY possible closed path. Reason (R) is also false: magnetic Lorentz force $\\vec{F} = q(\\vec{v}\\times\\vec{B})$ is a non-conservative velocity-dependent force that does identically zero work along every path because $\\vec{F} \\perp \\vec{v}$.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    }
  ]
};

async function applyTest1Update() {
  console.log(`Applying updates for ${t1_updates.subtopic} (${t1_updates.testId})...`);
  const tp = await db.collection("testPapers").findOne({ testId: t1_updates.testId });
  if (!tp) {
    console.error(`Test ${t1_updates.testId} not found in testPapers!`);
    return;
  }

  // Update Diagrams
  for (const item of t1_updates.diagrams) {
    const qId = tp.questions[item.index];
    const updateDoc = {
      ...item.data,
      chapter: "Work, Energy & Power",
      subtopic: t1_updates.subtopic,
      subject: "Physics",
      updatedAt: new Date()
    };
    await db.collection("questionBank").updateOne(
      { _id: ObjectId.isValid(qId) && String(qId).length === 24 ? new ObjectId(qId) : qId },
      { $set: updateDoc }
    );
    console.log(`Updated ${t1_updates.subtopic} Q${item.index + 1}`);
  }

  // Update Section B
  for (const item of t1_updates.sectionB) {
    const qId = tp.questions[item.index];
    const updateDoc = {
      ...item.data,
      chapter: "Work, Energy & Power",
      subtopic: t1_updates.subtopic,
      subject: "Physics",
      updatedAt: new Date()
    };
    await db.collection("questionBank").updateOne(
      { _id: ObjectId.isValid(qId) && String(qId).length === 24 ? new ObjectId(qId) : qId },
      { $set: updateDoc }
    );
    console.log(`Updated ${t1_updates.subtopic} Q${item.index + 1}`);
  }

  // Ensure chapter mapping in testPapers is normalized to "Work, Energy & Power"
  await db.collection("testPapers").updateOne(
    { _id: tp._id },
    { $set: { chapter: "Work, Energy & Power", updatedAt: new Date() } }
  );
  console.log(`Test 1 (${t1_updates.testId}) successfully updated!`);
}

await applyTest1Update();
await client.close();
