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

const testId = "neet-SUBTOPIC-Physics-Projectile-motion";
const testPaper = await db.collection("testPapers").findOne({ testId });
console.log("Updating Test 3:", testPaper.title);

// 1. Diagram Q1 (index 0)
const q1Update = {
  question: "A projectile is fired horizontally with a speed of $u = 20\\text{ m/s}$ from the top of a vertical tower of height $h = 45\\text{ m}$ above level ground, as depicted in the figure. Taking $g = 10\\text{ m/s}^2$, what is the horizontal distance (range $R$) from the foot of the tower to the point where the projectile lands on the ground?",
  text: "A projectile is fired horizontally with a speed of $u = 20\\text{ m/s}$ from the top of a vertical tower of height $h = 45\\text{ m}$ above level ground, as depicted in the figure. Taking $g = 10\\text{ m/s}^2$, what is the horizontal distance (range $R$) from the foot of the tower to the point where the projectile lands on the ground?",
  options: [
    "$60\\text{ m}$",
    "$45\\text{ m}$",
    "$90\\text{ m}$",
    "$30\\text{ m}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Vertical motion to determine time of flight:**\nInitial vertical velocity $u_y = 0$, vertical acceleration $a_y = g = 10\\text{ m/s}^2$.\n$$h = u_y t + \\frac{1}{2}gt^2 \\implies 45 = \\frac{1}{2}(10)t^2 = 5t^2$$\n$$t^2 = \\frac{45}{5} = 9 \\implies t = 3\\text{ s}.$$\n\n**Step 2: Horizontal motion to determine range $R$:**\nHorizontal velocity remains constant ($u_x = 20\\text{ m/s}$, $a_x = 0$):\n$$R = u_x \\times t = 20\\text{ m/s} \\times 3\\text{ s} = 60\\text{ m}.$$",
  image: "/images/diagrams/kinematics/test3_q1_horizontal_proj.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test3_q1_horizontal_proj.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (0,0) -- (5,0);\n\\draw[fill=gray!20] (0,0) rectangle (0.8,3);\n\\draw[blue,very thick,->] (0.8,3) -- (2.2,3) node[right]{$u=20\\text{ m/s}$};\n\\draw[red,dashed,thick] (0.8,3) parabola[bend pos=0] (4.2,0);\n\\draw[<->] (0.8,0.3) -- (4.2,0.3) node[midway,above]{$R$};\n\\node[left] at (0,1.5) {$h=45\\text{ m}$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Projectile motion",
  difficulty: "medium",
  type: "MCQ"
};

// 2. Diagram Q2 (index 1)
const q2Update = {
  question: "Two projectiles are launched from the same point on level ground with identical speed $u$ at complementary angles of projection $\\theta_1 = 30^\\circ$ and $\\theta_2 = 60^\\circ$, achieving the exact same horizontal range $R$ as shown in the diagram. If the maximum heights reached by the two projectiles are $H_1$ and $H_2$ respectively, the horizontal range $R$ is related to $H_1$ and $H_2$ by:",
  text: "Two projectiles are launched from the same point on level ground with identical speed $u$ at complementary angles of projection $\\theta_1 = 30^\\circ$ and $\\theta_2 = 60^\\circ$, achieving the exact same horizontal range $R$ as shown in the diagram. If the maximum heights reached by the two projectiles are $H_1$ and $H_2$ respectively, the horizontal range $R$ is related to $H_1$ and $H_2$ by:",
  options: [
    "$R = 4\\sqrt{H_1 H_2}$",
    "$R = 2\\sqrt{H_1 H_2}$",
    "$R = \\sqrt{2 H_1 H_2}$",
    "$R = 16 H_1 H_2$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Write maximum heights for both projectiles:**\n$$H_1 = \\frac{u^2 \\sin^2 30^\\circ}{2g} = \\frac{u^2 (1/2)^2}{2g} = \\frac{u^2}{8g}$$\n$$H_2 = \\frac{u^2 \\sin^2 60^\\circ}{2g} = \\frac{u^2 (\\sqrt{3}/2)^2}{2g} = \\frac{3u^2}{8g}$$\n\n**Step 2: Multiply the two heights:**\n$$H_1 H_2 = \\left(\\frac{u^2}{8g}\\right) \\left(\\frac{3u^2}{8g}\\right) = \\frac{3 u^4}{64 g^2}$$\n\n**Step 3: Relate to the horizontal range $R$:**\n$$R = \\frac{u^2 \\sin(2 \\times 30^\\circ)}{g} = \\frac{u^2 \\sin 60^\\circ}{g} = \\frac{\\sqrt{3} u^2}{2g}$$\nSquaring both sides:\n$$R^2 = \\frac{3 u^4}{4 g^2}$$\n\nNotice that:\n$$16 H_1 H_2 = 16 \\times \\frac{3 u^4}{64 g^2} = \\frac{3 u^4}{4 g^2} = R^2$$\n$$\\therefore R = \\sqrt{16 H_1 H_2} = 4\\sqrt{H_1 H_2}.$$",
  image: "/images/diagrams/kinematics/test3_q2_complementary_angles.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test3_q2_complementary_angles.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (0,0) -- (6,0) node[right]{$x$};\n\\draw[blue,thick] (0,0) parabola[bend at end] (2.5,1.2) parabola[bend at start] (5,0);\n\\draw[purple,dashed,thick] (0,0) parabola[bend at end] (2.5,2.4) parabola[bend at start] (5,0);\n\\node[below] at (5,0) {$R$};\n\\node[left,blue] at (2.5,1.2) {$H_1$};\n\\node[left,purple] at (2.5,2.4) {$H_2$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Projectile motion",
  difficulty: "medium",
  type: "MCQ"
};

// 3. Diagram Q4 (index 3)
const q4Update = {
  question: "A particle is projected from level ground with an initial speed $u = 20\\text{ m/s}$ at an angle $\\theta = 60^\\circ$ above the horizontal, as illustrated in the figure. Taking $g = 10\\text{ m/s}^2$, what is the radius of curvature ($\\rho$) of the parabolic trajectory at the highest point (apex $P$)?",
  text: "A particle is projected from level ground with an initial speed $u = 20\\text{ m/s}$ at an angle $\\theta = 60^\\circ$ above the horizontal, as illustrated in the figure. Taking $g = 10\\text{ m/s}^2$, what is the radius of curvature ($\\rho$) of the parabolic trajectory at the highest point (apex $P$)?",
  options: [
    "$10\\text{ m}$",
    "$20\\text{ m}$",
    "$40\\text{ m}$",
    "$5\\text{ m}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Key Concept:**\nThe radius of curvature $\\rho$ at any point on a curved path is given by:\n$$\\rho = \\frac{v^2}{a_\\perp}$$\nwhere $v$ is the speed and $a_\\perp$ is the component of acceleration perpendicular to velocity.\n\n**At the highest point (apex $P$):**\n1. Velocity is purely horizontal:\n$$v = u\\cos\\theta = 20\\text{ m/s} \\times \\cos 60^\\circ = 20 \\times 0.5 = 10\\text{ m/s}$$\n2. The acceleration is purely vertical (downwards):\n$$\\vec{a} = \\vec{g} = 10\\text{ m/s}^2$$\nSince velocity is horizontal and gravity is vertical, gravity is completely perpendicular to velocity:\n$$a_\\perp = g = 10\\text{ m/s}^2$$\n\n**Calculation:**\n$$\\rho = \\frac{(u\\cos\\theta)^2}{g} = \\frac{(10\\text{ m/s})^2}{10\\text{ m/s}^2} = \\frac{100}{10} = 10\\text{ m}.$$",
  image: "/images/diagrams/kinematics/test3_q4_apex_curvature.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test3_q4_apex_curvature.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (0,0) -- (6,0);\n\\draw[blue,thick] (0,0) parabola[bend at end] (3,2.5) parabola[bend at start] (6,0);\n\\draw[->,very thick,red] (3,2.5) -- (4.2,2.5) node[right]{$v=u\\cos\\theta$};\n\\draw[->,very thick,green!60!black] (3,2.5) -- (3,1.3) node[right]{$g$};\n\\node[above] at (3,2.5) {$P$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Projectile motion",
  difficulty: "hard",
  type: "MCQ"
};

// Section B: 6 Assertion-Reason Questions (Q40 to Q45)
const q40Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The horizontal range of an oblique projectile projected with a given initial speed $u$ is identical for complementary angles of projection $\\theta$ and $(90^\\circ - \\theta)$. \n**Reason (R):** The mathematical expression for horizontal range $R = \\frac{u^2 \\sin 2\\theta}{g}$ satisfies the trigonometric identity $\\sin 2(90^\\circ - \\theta) = \\sin(180^\\circ - 2\\theta) = \\sin 2\\theta$.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The horizontal range of an oblique projectile projected with a given initial speed $u$ is identical for complementary angles of projection $\\theta$ and $(90^\\circ - \\theta)$. \n**Reason (R):** The mathematical expression for horizontal range $R = \\frac{u^2 \\sin 2\\theta}{g}$ satisfies the trigonometric identity $\\sin 2(90^\\circ - \\theta) = \\sin(180^\\circ - 2\\theta) = \\sin 2\\theta$.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Assertion (A) is true: Complementary angles such as $30^\\circ$ and $60^\\circ$, or $15^\\circ$ and $75^\\circ$, produce identical horizontal ranges on level ground.\n\nReason (R) is true: Since $\\sin(180^\\circ - 2\\theta) = \\sin 2\\theta$, evaluating $R$ at $(90^\\circ - \\theta)$ gives the identical value as at $\\theta$. This provides the exact mathematical explanation of (A).",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Projectile motion",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const q41Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The trajectory of an oblique projectile in vacuum under uniform gravitational acceleration is a parabola.\n**Reason (R):** The total mechanical energy (kinetic + gravitational potential) of the projectile remains conserved throughout the flight.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The trajectory of an oblique projectile in vacuum under uniform gravitational acceleration is a parabola.\n**Reason (R):** The total mechanical energy (kinetic + gravitational potential) of the projectile remains conserved throughout the flight.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 1,
  correctOption: "b",
  explanation: "Assertion (A) is true: Eliminating time $t$ between $x = (u\\cos\\theta)t$ and $y = (u\\sin\\theta)t - \\frac{1}{2}gt^2$ yields $y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$, which is a second-degree polynomial (parabola).\n\nReason (R) is true: Since gravity is a conservative force and air resistance is neglected, mechanical energy is conserved.\n\nHowever, Reason (R) is not the explanation of why the trajectory is a parabola (e.g. planetary orbits conserve energy but are ellipses). The parabolic shape arises specifically because horizontal acceleration is zero while vertical acceleration is constant.",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Projectile motion",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q42Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** At the highest point of an oblique projectile's flight, the instantaneous velocity vector is strictly perpendicular to the acceleration vector.\n**Reason (R):** At the highest point of the trajectory, the net gravitational acceleration of the projectile momentarily becomes zero.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** At the highest point of an oblique projectile's flight, the instantaneous velocity vector is strictly perpendicular to the acceleration vector.\n**Reason (R):** At the highest point of the trajectory, the net gravitational acceleration of the projectile momentarily becomes zero.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 2,
  correctOption: "c",
  explanation: "Assertion (A) is true: At the summit, vertical velocity $v_y = 0$, so velocity is purely horizontal ($\vec{v} = u\\cos\\theta\\,\\hat{i}$). Gravitational acceleration is purely vertical ($\vec{a} = -g\\,\\hat{j}$). The dot product $\\vec{v} \\cdot \\vec{a} = 0$, so they are strictly perpendicular.\n\nReason (R) is false: The Earth's gravity acts constantly downwards at $g = 9.8\\text{ m/s}^2$ throughout the entire flight. Acceleration never drops to zero.",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Projectile motion",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q43Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Two balls projected horizontally from the top of a cliff of height $h$ with different initial speeds $u_1$ and $u_2$ ($u_1 > u_2$) hit the level ground at different times.\n**Reason (R):** In 2D projectile motion under gravity, horizontal motion and vertical motion are mutually independent.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Two balls projected horizontally from the top of a cliff of height $h$ with different initial speeds $u_1$ and $u_2$ ($u_1 > u_2$) hit the level ground at different times.\n**Reason (R):** In 2D projectile motion under gravity, horizontal motion and vertical motion are mutually independent.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 3,
  correctOption: "d",
  explanation: "Assertion (A) is false: Both balls have zero initial vertical velocity ($u_y = 0$) and experience identical vertical downward acceleration $g$. Therefore, both take the exact same time $T = \\sqrt{2h/g}$ to hit the ground regardless of horizontal speed.\n\nReason (R) is true: The two orthogonal motions are independent, which is why vertical fall time is independent of horizontal launch velocity.",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Projectile motion",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q44Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** For a given launch speed $u$, the maximum horizontal range on level ground is achieved at a launch angle of $\\theta = 45^\\circ$.\n**Reason (R):** The horizontal range formula $R = \\frac{u^2 \\sin 2\\theta}{g}$ attains its maximum value when the trigonometric factor $\\sin 2\\theta$ is maximum, which occurs when $\\sin 2\\theta = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** For a given launch speed $u$, the maximum horizontal range on level ground is achieved at a launch angle of $\\theta = 45^\\circ$.\n**Reason (R):** The horizontal range formula $R = \\frac{u^2 \\sin 2\\theta}{g}$ attains its maximum value when the trigonometric factor $\\sin 2\\theta$ is maximum, which occurs when $\\sin 2\\theta = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Both Assertion (A) and Reason (R) are true, and (R) provides the exact mathematical condition maximizing the sine function in the range formula.",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Projectile motion",
  difficulty: "easy",
  type: "ASSERTION_REASON"
};

const q45Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If the initial launch speed of an oblique projectile is doubled while keeping the launch angle $\\theta$ constant, both its maximum height ($H_{\\text{max}}$) and horizontal range ($R$) increase by a factor of 4.\n**Reason (R):** The total time of flight of the projectile ($T$) doubles when the initial launch speed is doubled.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If the initial launch speed of an oblique projectile is doubled while keeping the launch angle $\\theta$ constant, both its maximum height ($H_{\\text{max}}$) and horizontal range ($R$) increase by a factor of 4.\n**Reason (R):** The total time of flight of the projectile ($T$) doubles when the initial launch speed is doubled.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 1,
  correctOption: "b",
  explanation: "Assertion (A) is true: $H_{\\text{max}} = \\frac{u^2\\sin^2\\theta}{2g} \\propto u^2$, and $R = \\frac{u^2\\sin 2\\theta}{g} \\propto u^2$. Doubling $u$ quadruples both quantities ($2^2 = 4$).\n\nReason (R) is true: $T = \\frac{2u\\sin\\theta}{g} \\propto u$, so doubling $u$ doubles $T$.\n\nHowever, Reason (R) is not the complete explanation of (A), because the quadrupling arises directly from the quadratic dependence of kinetic energy and displacement equations on initial velocity ($u^2$).",
  subject: "Physics",
  chapter: "Motion in a Plane",
  subtopic: "Projectile motion",
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
  console.log(`Updated Test 3 Q${u.index + 1} (${qId})`);
}

// Update all remaining questions of Test 3 to have chapter: "Motion in a Plane"
const allQIds = testPaper.questions.map(id => new ObjectId(id));
await db.collection("questionBank").updateMany(
  { _id: { $in: allQIds } },
  { $set: { chapter: "Motion in a Plane", topic: "Motion in a Plane", updatedAt: new Date() } }
);

// Update testPaper metadata
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

console.log("Successfully updated Test 3 (Projectile Motion) in questionBank and testPapers!");
await client.close();
