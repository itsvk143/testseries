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

const testId = "neet-SUBTOPIC-Physics-Uniform-circular-motion";
const testPaper = await db.collection("testPapers").findOne({ testId });
console.log("Updating Test 5:", testPaper.title);

// 1. Diagram Q1 (index 0)
const q1Update = {
  question: "A particle executes uniform circular motion (UCM) with a constant speed of $v = 10\\text{ m/s}$ along a circle of radius $R = 2\\text{ m}$ centered at the origin $O$, as depicted in the figure. At the instant the particle crosses point $P (x = +2\\text{ m}, y = 0)$, its tangential velocity is directed along $+y$ ($\\vec{v} = +10\\hat{j}\\text{ m/s}$). What is the centripetal acceleration vector of the particle at this instant?",
  text: "A particle executes uniform circular motion (UCM) with a constant speed of $v = 10\\text{ m/s}$ along a circle of radius $R = 2\\text{ m}$ centered at the origin $O$, as depicted in the figure. At the instant the particle crosses point $P (x = +2\\text{ m}, y = 0)$, its tangential velocity is directed along $+y$ ($\\vec{v} = +10\\hat{j}\\text{ m/s}$). What is the centripetal acceleration vector of the particle at this instant?",
  options: [
    "$-50\\hat{i}\\text{ m/s}^2$",
    "$+50\\hat{i}\\text{ m/s}^2$",
    "$-50\\hat{j}\\text{ m/s}^2$",
    "$+25\\hat{i}\\text{ m/s}^2$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Calculate magnitude of centripetal acceleration:**\n$$a_c = \\frac{v^2}{R} = \\frac{(10\\text{ m/s})^2}{2\\text{ m}} = \\frac{100}{2} = 50\\text{ m/s}^2$$\n\n**Step 2: Determine direction:**\nCentripetal acceleration is always directed radially inward towards the center of curvature $O(0,0)$.\nAt position $P(2, 0)$, the vector pointing towards the center $O$ is along the negative $x$-axis ($-\\hat{i}$).\n\n**Step 3: Vector expression:**\n$$\\vec{a}_c = -50\\hat{i}\\text{ m/s}^2.$$",
  image: "/images/diagrams/kinematics/test5_q1_ucm_vectors.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test5_q1_ucm_vectors.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[dashed] (0,0) circle (2);\n\\draw[fill=black] (0,0) circle (2pt) node[left]{$O$};\n\\draw[fill=blue] (2,0) circle (3pt) node[below right]{$P(R,0)$};\n\\draw[->,very thick,blue] (2,0) -- (2,1.8) node[right]{$\\vec{v}=10\\hat{j}$};\n\\draw[->,very thick,red] (2,0) -- (0.8,0) node[below]{$\\vec{a}_c$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Uniform circular motion",
  difficulty: "medium",
  type: "MCQ"
};

// 2. Diagram Q2 (index 1)
const q2Update = {
  question: "A particle undergoes uniform circular motion at a constant speed of $v = 10\\text{ m/s}$. As it travels along the circular path from point $A$ to point $B$, subtending a central angle of $\\theta = 60^\\circ$ at the center $O$ as shown in the diagram, what is the magnitude of the change in its velocity ($|\\Delta \\vec{v}|$)?",
  text: "A particle undergoes uniform circular motion at a constant speed of $v = 10\\text{ m/s}$. As it travels along the circular path from point $A$ to point $B$, subtending a central angle of $\\theta = 60^\\circ$ at the center $O$ as shown in the diagram, what is the magnitude of the change in its velocity ($|\\Delta \\vec{v}|$)?",
  options: [
    "$10\\text{ m/s}$",
    "$10\\sqrt{3}\\text{ m/s}$",
    "$20\\text{ m/s}$",
    "$0\\text{ m/s}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Key Formula:**\nIn uniform circular motion with constant speed $v$, the magnitude of the change in velocity vector after an angular displacement $\\theta$ is given by:\n$$|\\Delta \\vec{v}| = |\\vec{v}_B - \\vec{v}_A| = 2 v \\sin\\left(\\frac{\\theta}{2}\\right)$$\n\n**Calculation:**\nGiven $v = 10\\text{ m/s}$ and $\\theta = 60^\\circ$:\n$$|\\Delta \\vec{v}| = 2(10) \\sin\\left(\\frac{60^\\circ}{2}\\right) = 20 \\sin 30^\\circ = 20 \\times 0.5 = 10\\text{ m/s}.$$\n*(Note: Although the speed is constant and change in speed $|v_B| - |v_A| = 0$, the change in velocity vector has magnitude $10\\text{ m/s}$ due to direction change).*",
  image: "/images/diagrams/kinematics/test5_q2_delta_v.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test5_q2_delta_v.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[dashed] (0,0) arc (0:90:3);\n\\draw (0,0) -- (3,0) node[midway,below]{$R$};\n\\draw (0,0) -- (1.5,2.6) node[midway,above left]{$R$};\n\\draw[->,thick,blue] (3,0) -- (3,1.5) node[right]{$\\vec{v}_A$};\n\\draw[->,thick,blue] (1.5,2.6) -- (0.2,3.3) node[above]{$\\vec{v}_B$};\n\\draw (0.8,0) arc (0:60:0.8) node[midway,right]{$60^\\circ$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Uniform circular motion",
  difficulty: "medium",
  type: "MCQ"
};

// 3. Diagram Q4 (index 3)
const q4Update = {
  question: "A conical pendulum consists of a small bob of mass $m$ attached to a light string of length $L = 1\\text{ m}$ revolving in a horizontal circle such that the string makes a constant angle $\\theta = 45^\\circ$ with the vertical, as illustrated in the figure. Taking $g = 10\\text{ m/s}^2$, what is the time period of revolution of the bob?",
  text: "A conical pendulum consists of a small bob of mass $m$ attached to a light string of length $L = 1\\text{ m}$ revolving in a horizontal circle such that the string makes a constant angle $\\theta = 45^\\circ$ with the vertical, as illustrated in the figure. Taking $g = 10\\text{ m/s}^2$, what is the time period of revolution of the bob?",
  options: [
    "$2\\pi \\sqrt{\\frac{1}{10\\sqrt{2}}}\\text{ s} \\approx 1.67\\text{ s}$",
    "$2\\pi \\sqrt{\\frac{1}{10}}\\text{ s} \\approx 1.99\\text{ s}$",
    "$2\\pi \\sqrt{\\frac{\\sqrt{2}}{10}}\\text{ s} \\approx 2.36\\text{ s}$",
    "$\\pi\\text{ s} \\approx 3.14\\text{ s}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Free body diagram of bob:**\n- Vertical equilibrium: $T \\cos\\theta = mg \\implies T = \\frac{mg}{\\cos\\theta}$\n- Horizontal centripetal force: $T \\sin\\theta = m \\omega^2 r$\nwhere circular radius $r = L \\sin\\theta$.\n\n**Step 2: Relate angular velocity $\\omega$ to angle:**\n$$\\left(\\frac{mg}{\\cos\\theta}\\right) \\sin\\theta = m \\omega^2 (L \\sin\\theta)$$\n$$\\frac{g}{\\cos\\theta} = \\omega^2 L \\implies \\omega = \\sqrt{\\frac{g}{L \\cos\\theta}}$$\n\n**Step 3: Calculate time period $T_p$:**\n$$T_p = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{L \\cos\\theta}{g}}$$\nSubstitute $L = 1\\text{ m}$, $\\theta = 45^\\circ$ ($\\cos 45^\\circ = \\frac{1}{\\sqrt{2}}$), and $g = 10\\text{ m/s}^2$:\n$$T_p = 2\\pi \\sqrt{\\frac{1 \\times (1/\\sqrt{2})}{10}} = 2\\pi \\sqrt{\\frac{1}{10\\sqrt{2}}}\\text{ s} \\approx 2\\pi \\sqrt{0.0707} \\approx 2\\pi (0.266) \\approx 1.67\\text{ s}.$$",
  image: "/images/diagrams/kinematics/test5_q4_conical_pendulum.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test5_q4_conical_pendulum.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (-1,3) -- (1,3);\n\\draw[dashed] (0,3) -- (0,0);\n\\draw[thick] (0,3) -- (1.5,0.5) node[midway,above right]{$L=1\\text{ m}$};\n\\draw (0,2.2) arc (-90:-50:0.8) node[midway,below]{$\\theta$};\n\\draw[fill=blue] (1.5,0.5) circle (4pt);\n\\draw[dashed] (0,0.5) ellipse (1.5 and 0.4);\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Uniform circular motion",
  difficulty: "hard",
  type: "MCQ"
};

// Section B: 6 Assertion-Reason Questions (Q40 to Q45)
const q40Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In uniform circular motion (UCM), although the kinetic energy of the body remains constant, its linear momentum continuously changes with time.\n**Reason (R):** Kinetic energy depends on speed (a scalar quantity) which remains constant in UCM, whereas momentum depends on velocity (a vector quantity) whose direction continuously changes.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In uniform circular motion (UCM), although the kinetic energy of the body remains constant, its linear momentum continuously changes with time.\n**Reason (R):** Kinetic energy depends on speed (a scalar quantity) which remains constant in UCM, whereas momentum depends on velocity (a vector quantity) whose direction continuously changes.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Assertion (A) is true: $KE = \\frac{1}{2}mv^2 = \\text{constant}$ because speed $v$ is constant. Linear momentum $\\vec{p} = m\\vec{v}$ has changing direction tangent to the circle, so $\\vec{p}$ changes continuously.\n\nReason (R) is true and provides the exact physical explanation.",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Uniform circular motion",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const q41Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by the centripetal force on a particle in uniform circular motion over any time interval is identically zero.\n**Reason (R):** Centripetal force acts towards the center of curvature and curves the trajectory of the particle into a circle.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The work done by the centripetal force on a particle in uniform circular motion over any time interval is identically zero.\n**Reason (R):** Centripetal force acts towards the center of curvature and curves the trajectory of the particle into a circle.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 1,
  correctOption: "b",
  explanation: "Assertion (A) is true: Work done is $W = \\int \\vec{F}_c \\cdot d\\vec{r} = \\int (F_c \\, ds \\cos 90^\\circ) = 0$ because centripetal force is always perpendicular to instantaneous displacement.\n\nReason (R) is true (that is the role of centripetal force), but it is not the explanation of why work is zero. Work is zero specifically because $\\vec{F}_c \\perp \\vec{v}$ at all times.",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Uniform circular motion",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q42Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle moving along a circular path with constant speed is an accelerated motion.\n**Reason (R):** The acceleration of a moving body is non-zero only when the magnitude of its velocity (speed) changes with time.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle moving along a circular path with constant speed is an accelerated motion.\n**Reason (R):** The acceleration of a moving body is non-zero only when the magnitude of its velocity (speed) changes with time.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 2,
  correctOption: "c",
  explanation: "Assertion (A) is true: In circular motion, the direction of velocity changes continuously, requiring a centripetal acceleration $a_c = v^2/R$.\n\nReason (R) is false: Acceleration is the time rate of change of the velocity vector ($\\vec{a} = \\frac{d\\vec{v}}{dt}$). A change in direction alone produces acceleration even if speed remains perfectly constant.",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Uniform circular motion",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const q43Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In non-uniform circular motion, the net acceleration vector of the particle is always directed radially towards the center of the circle.\n**Reason (R):** In circular motion, tangential acceleration is responsible for changing the magnitude of velocity: $a_t = \\frac{dv}{dt}$.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In non-uniform circular motion, the net acceleration vector of the particle is always directed radially towards the center of the circle.\n**Reason (R):** In circular motion, tangential acceleration is responsible for changing the magnitude of velocity: $a_t = \\frac{dv}{dt}$.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 3,
  correctOption: "d",
  explanation: "Assertion (A) is false: In non-uniform circular motion, net acceleration is the vector sum of radial and tangential components: $\\vec{a}_{\\text{net}} = \\vec{a}_c + \\vec{a}_t$. Since $a_t \\ne 0$, $\\vec{a}_{\\text{net}}$ makes an angle with the radius and does not point purely towards the center.\n\nReason (R) is true: Tangential acceleration is indeed defined as $a_t = \\frac{dv}{dt}$.",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Uniform circular motion",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q44Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** For a car negotiating an unbanked circular curve of radius $R$ on a flat horizontal road, there exists a maximum safe speed $v_{\\text{max}} = \\sqrt{\\mu_s g R}$ beyond which the car skids radially outward.\n**Reason (R):** On an unbanked flat road, the required centripetal force is provided entirely by static friction between tires and road, which has an upper limiting threshold $f_{\\text{max}} = \\mu_s mg$.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** For a car negotiating an unbanked circular curve of radius $R$ on a flat horizontal road, there exists a maximum safe speed $v_{\\text{max}} = \\sqrt{\\mu_s g R}$ beyond which the car skids radially outward.\n**Reason (R):** On an unbanked flat road, the required centripetal force is provided entirely by static friction between tires and road, which has an upper limiting threshold $f_{\\text{max}} = \\mu_s mg$.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Both Assertion (A) and Reason (R) are true, and (R) provides the exact physical derivation: $\\frac{mv^2}{R} \\le \\mu_s mg \\implies v \\le \\sqrt{\\mu_s g R}$.",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Uniform circular motion",
  difficulty: "easy",
  type: "ASSERTION_REASON"
};

const q45Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** An unbanked horizontal curved road cannot safely permit vehicles to negotiate sharp turns at high speeds without substantial risk of skidding.\n**Reason (R):** Banking of roads tilts the road surface at an angle $\\theta$ to the horizontal so that a component of the normal reaction force provides the necessary centripetal acceleration independently of friction.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** An unbanked horizontal curved road cannot safely permit vehicles to negotiate sharp turns at high speeds without substantial risk of skidding.\n**Reason (R):** Banking of roads tilts the road surface at an angle $\\theta$ to the horizontal so that a component of the normal reaction force provides the necessary centripetal acceleration independently of friction.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 1,
  correctOption: "b",
  explanation: "Assertion (A) is true: The friction coefficient $\\mu_s$ is limited and can decrease drastically in wet/icy conditions, making high-speed turns unsafe on flat roads.\n\nReason (R) is true: The horizontal component $N\\sin\\theta$ supplies centripetal force for banked roads.\n\nHowever, Reason (R) describes the mechanism of banking, rather than explaining why unbanked roads are unsafe (which is due to the finite limit of static friction).",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Uniform circular motion",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const updates = [
  { index: 0, data: q1Update },
  { index: 1, data: q2Update },
  { index: 3, data: q4Update },
  { index: 39, data: q40Update },
  { index: 40, data: q41Update },
  { index: 41, data: q42Update },
  { index: 42, data: q43Update },
  { index: 43, data: q44Update },
  { index: 44, data: q45Update }
];

for (const u of updates) {
  const qId = testPaper.questions[u.index];
  const objId = new ObjectId(qId);
  await db.collection("questionBank").updateOne(
    { _id: objId },
    { $set: { ...u.data, updatedAt: new Date() } }
  );
  console.log(`Updated Test 5 Q${u.index + 1} (${qId})`);
}

// Update all questions in Test 5 to have chapter: "Motion in a Plane"
const allQIds = testPaper.questions.map(id => new ObjectId(id));
await db.collection("questionBank").updateMany(
  { _id: { $in: allQIds } },
  { $set: { chapter: "Motion in a Plane", topic: "Motion in a Plane", updatedAt: new Date() } }
);

// Update test metadata
await db.collection("testPapers").updateOne(
  { _id: testPaper._id },
  {
    $set: {
      chapter: "Motion in a Plane",
      subject: "Physics",
      updatedAt: new Date()
    }
  }
);

console.log("Successfully updated Test 5 (Uniform Circular Motion) in questionBank and testPapers!");
await client.close();
