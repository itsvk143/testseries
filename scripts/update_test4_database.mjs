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

const testId = "neet-SUBTOPIC-Physics-Relative-velocity";
const testPaper = await db.collection("testPapers").findOne({ testId });
console.log("Updating Test 4:", testPaper.title);

// 1. Diagram Q1 (index 0)
const q1Update = {
  question: "Two trains $A$ and $B$ of lengths $L_A = 120\\text{ m}$ and $L_B = 180\\text{ m}$ are travelling in the same direction on parallel straight railway tracks with uniform speeds of $v_A = 20\\text{ m/s}$ and $v_B = 10\\text{ m/s}$ respectively, as shown in the diagram. What is the time taken by train $A$ to completely overtake train $B$?",
  text: "Two trains $A$ and $B$ of lengths $L_A = 120\\text{ m}$ and $L_B = 180\\text{ m}$ are travelling in the same direction on parallel straight railway tracks with uniform speeds of $v_A = 20\\text{ m/s}$ and $v_B = 10\\text{ m/s}$ respectively, as shown in the diagram. What is the time taken by train $A$ to completely overtake train $B$?",
  options: [
    "$30\\text{ s}$",
    "$15\\text{ s}$",
    "$10\\text{ s}$",
    "$60\\text{ s}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Determine relative velocity:**\nSince both trains move in the same direction, the relative velocity of train $A$ with respect to train $B$ is:\n$$v_{\\text{rel}} = v_A - v_B = 20\\text{ m/s} - 10\\text{ m/s} = 10\\text{ m/s}$$\n\n**Step 2: Determine total distance to overtake:**\nFor train $A$ to completely overtake train $B$, the rear end of train $A$ must clear the front end of train $B$. Therefore, the relative distance to be covered is:\n$$d_{\\text{rel}} = L_A + L_B = 120\\text{ m} + 180\\text{ m} = 300\\text{ m}$$\n\n**Step 3: Calculate time taken:**\n$$t = \\frac{d_{\\text{rel}}}{v_{\\text{rel}}} = \\frac{300\\text{ m}}{10\\text{ m/s}} = 30\\text{ s}.$$",
  image: "/images/diagrams/kinematics/test4_q1_trains_overtaking.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test4_q1_trains_overtaking.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[dashed] (0,1) -- (6,1);\n\\draw[dashed] (0,0) -- (6,0);\n\\draw[fill=blue!20] (0.5,0.8) rectangle (2.5,1.2) node[midway]{Train $A$};\n\\draw[fill=green!20] (2.2,-0.2) rectangle (4.5,0.2) node[midway]{Train $B$};\n\\draw[->,thick,blue] (2.5,1) -- (3.5,1) node[right]{$20\\text{ m/s}$};\n\\draw[->,thick,green!60!black] (4.5,0) -- (5.2,0) node[right]{$10\\text{ m/s}$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Relative velocity",
  difficulty: "medium",
  type: "MCQ"
};

// 2. Diagram Q3 (index 2)
const q3Update = {
  question: "Rain is falling vertically downwards with a speed of $v_r = 20\\text{ m/s}$. A man runs due east along a flat horizontal road with a speed of $v_m = 20\\text{ m/s}$, as illustrated in the figure. At what angle with the vertical must the man hold his umbrella to protect himself from the rain?",
  text: "Rain is falling vertically downwards with a speed of $v_r = 20\\text{ m/s}$. A man runs due east along a flat horizontal road with a speed of $v_m = 20\\text{ m/s}$, as illustrated in the figure. At what angle with the vertical must the man hold his umbrella to protect himself from the rain?",
  options: [
    "$45^\\circ\\text{ towards East}$",
    "$45^\\circ\\text{ towards West}$",
    "$30^\\circ\\text{ towards East}$",
    "$60^\\circ\\text{ towards West}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Set up vector notation:**\nLet unit vector $\\hat{i}$ be towards East and $\\hat{j}$ be vertically upwards.\n- Velocity of rain: $\\vec{v}_r = -20\\hat{j}\\text{ m/s}$\n- Velocity of man: $\\vec{v}_m = +20\\hat{i}\\text{ m/s}$\n\n**Step 2: Calculate relative velocity of rain with respect to man:**\n$$\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m = -20\\hat{j} - 20\\hat{i} = -20\\hat{i} - 20\\hat{j}\\text{ m/s}$$\n\n**Step 3: Determine umbrella direction:**\nThe rain appears to fall with horizontal component directed towards West ($-20\\hat{i}$) and downward component ($-20\\hat{j}$). Therefore, the rain appears to come from the East at an angle $\\theta$ to the vertical:\n$$\\tan\\theta = \\frac{|v_{rm, x}|}{|v_{rm, y}|} = \\frac{20}{20} = 1 \\implies \\theta = 45^\\circ$$\nTo shield himself, the man must hold the umbrella tilted into the direction from which rain appears to come, which is $45^\\circ$ towards East.",
  image: "/images/diagrams/kinematics/test4_q3_rain_man.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test4_q3_rain_man.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[->,thick,blue] (0,0) -- (0,-2.5) node[left]{$\\vec{v}_r$};\n\\draw[->,thick,green!60!black] (0,-2.5) -- (-2.5,-2.5) node[below]{$-\\vec{v}_m$};\n\\draw[->,very thick,purple] (0,0) -- (-2.5,-2.5) node[midway,above left]{$\\vec{v}_{rm}$};\n\\draw (0,-0.8) arc (-90:-135:0.8) node[midway,below]{$\\theta = 45^\\circ$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Relative velocity",
  difficulty: "medium",
  type: "MCQ"
};

// 3. Diagram Q7 (index 6)
const q7Update = {
  question: "A river of width $w = 500\\text{ m}$ flows due east with a uniform speed of $v_r = 3\\text{ m/s}$. A motorboat can travel at $v_b = 5\\text{ m/s}$ in still water. If the boat wishes to cross directly across the river along the shortest path (from point $A$ on the south bank to point $B$ directly opposite on the north bank with zero drift) as depicted in the figure, what is the time taken by the boat to cross the river?",
  text: "A river of width $w = 500\\text{ m}$ flows due east with a uniform speed of $v_r = 3\\text{ m/s}$. A motorboat can travel at $v_b = 5\\text{ m/s}$ in still water. If the boat wishes to cross directly across the river along the shortest path (from point $A$ on the south bank to point $B$ directly opposite on the north bank with zero drift) as depicted in the figure, what is the time taken by the boat to cross the river?",
  options: [
    "$125\\text{ s}$",
    "$100\\text{ s}$",
    "$166.7\\text{ s}$",
    "$250\\text{ s}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Condition for zero drift (shortest path):**\nTo cancel the river drift, the boat must head upstream at an angle $\\alpha$ with the line $AB$ perpendicular to the river bank such that:\n$$v_b \\sin\\alpha = v_r \\implies \\sin\\alpha = \\frac{v_r}{v_b} = \\frac{3}{5} = 0.6 \\implies \\alpha = 37^\\circ$$\n\n**Step 2: Resultant crossing speed:**\nThe net velocity of the boat directed straight across from $A$ to $B$ is:\n$$v_{\\text{res}} = v_b \\cos\\alpha = \\sqrt{v_b^2 - v_r^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4\\text{ m/s}$$\n\n**Step 3: Calculate time to cross:**\n$$t = \\frac{\\text{width of river}}{v_{\\text{res}}} = \\frac{500\\text{ m}}{4\\text{ m/s}} = 125\\text{ s}.$$",
  image: "/images/diagrams/kinematics/test4_q7_river_shortest_path.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test4_q7_river_shortest_path.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (0,2.5) -- (5,2.5) node[right]{North Bank};\n\\draw[thick] (0,0) -- (5,0) node[right]{South Bank};\n\\draw[fill=black] (2,0) circle (2pt) node[below]{$A$};\n\\draw[fill=green!60!black] (2,2.5) circle (2pt) node[above]{$B$};\n\\draw[->,blue,thick] (1,1.8) -- (2.5,1.8) node[right]{$v_r = 3\\text{ m/s}$};\n\\draw[->,red,very thick] (2,0) -- (1,2) node[left]{$v_b = 5\\text{ m/s}$};\n\\draw[->,green!60!black,very thick,dashed] (2,0) -- (2,2.4) node[midway,right]{$v_{\\text{res}} = 4\\text{ m/s}$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Relative velocity",
  difficulty: "medium",
  type: "MCQ"
};

// Section B: 6 Assertion-Reason Questions (Q40 to Q45)
const q40Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The relative velocity of particle $A$ with respect to particle $B$ ($\\vec{v}_{AB}$) is equal in magnitude and opposite in direction to the relative velocity of particle $B$ with respect to particle $A$ ($\\vec{v}_{BA}$).\n**Reason (R):** By vector definition, $\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B = -(\\vec{v}_B - \\vec{v}_A) = -\\vec{v}_{BA}$.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The relative velocity of particle $A$ with respect to particle $B$ ($\\vec{v}_{AB}$) is equal in magnitude and opposite in direction to the relative velocity of particle $B$ with respect to particle $A$ ($\\vec{v}_{BA}$).\n**Reason (R):** By vector definition, $\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B = -(\\vec{v}_B - \\vec{v}_A) = -\\vec{v}_{BA}$.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Assertion (A) is true: The two relative velocities are negative vectors of each other ($\\vec{v}_{AB} = -\\vec{v}_{BA}$), meaning $|\\vec{v}_{AB}| = |\\vec{v}_{BA}|$ with mutually opposite directions.\n\nReason (R) is true and directly explains (A) from fundamental vector arithmetic.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Relative velocity",
  difficulty: "easy",
  type: "ASSERTION_REASON"
};

const q41Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** To cross a flowing river in the minimum possible time, a swimmer must steer the boat directly perpendicular to the river banks regardless of river flow speed.\n**Reason (R):** The speed of water in a natural river stream is highest along the middle channel and lowest near the river banks due to boundary shear viscosity.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** To cross a flowing river in the minimum possible time, a swimmer must steer the boat directly perpendicular to the river banks regardless of river flow speed.\n**Reason (R):** The speed of water in a natural river stream is highest along the middle channel and lowest near the river banks due to boundary shear viscosity.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 1,
  correctOption: "b",
  explanation: "Assertion (A) is true: Time to cross is $t = \\frac{w}{v_y} = \\frac{w}{v_s \\cos\\theta}$, where $\\theta$ is the angle with the perpendicular. This time is minimized when $\\cos\\theta = 1 \\implies \\theta = 0^\\circ$ (steering straight across perpendicular to flow).\n\nReason (R) is true from fluid dynamics, but it is not the reason for (A). The reason for (A) is that the component of velocity responsible for traversing river width is maximized when all engine effort is directed perpendicular to the banks.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Relative velocity",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q42Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When two cars $A$ and $B$ travel in opposite directions along a straight highway with speeds $v_A$ and $v_B$, the magnitude of their relative velocity equals $v_A + v_B$.\n**Reason (R):** Velocity is a scalar quantity that depends solely on the speedometer reading of a vehicle.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When two cars $A$ and $B$ travel in opposite directions along a straight highway with speeds $v_A$ and $v_B$, the magnitude of their relative velocity equals $v_A + v_B$.\n**Reason (R):** Velocity is a scalar quantity that depends solely on the speedometer reading of a vehicle.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 2,
  correctOption: "c",
  explanation: "Assertion (A) is true: Let one direction be $+x$ (so $\\vec{v}_A = v_A\\hat{i}$) and the other $-x$ (so $\\vec{v}_B = -v_B\\hat{i}$). Then $\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B = v_A\\hat{i} - (-v_B\\hat{i}) = (v_A + v_B)\\hat{i}$. The magnitude is $v_A + v_B$.\n\nReason (R) is completely false: Velocity is a vector quantity having both magnitude and direction; speed is the scalar quantity.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Relative velocity",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const q43Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The relative acceleration between two stones released from rest at different heights in free fall under uniform gravity is equal to $2g$.\n**Reason (R):** The acceleration due to gravity near the Earth's surface is identical for all freely falling bodies irrespective of their mass or initial height.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The relative acceleration between two stones released from rest at different heights in free fall under uniform gravity is equal to $2g$.\n**Reason (R):** The acceleration due to gravity near the Earth's surface is identical for all freely falling bodies irrespective of their mass or initial height.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 3,
  correctOption: "d",
  explanation: "Assertion (A) is false: Both stones experience identical acceleration $\\vec{g}$ directed downwards ($\\vec{a}_1 = -g\\hat{j}, \\vec{a}_2 = -g\\hat{j}$). The relative acceleration is $\\vec{a}_{\\text{rel}} = \\vec{a}_1 - \\vec{a}_2 = (-g\\hat{j}) - (-g\\hat{j}) = 0$. (They accelerate at the same rate, so relative acceleration is zero, not $2g$).\n\nReason (R) is true: Gravitational acceleration near the surface of the Earth is uniformly $g = 9.8\\text{ m/s}^2$ downward for all bodies.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Relative velocity",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q44Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If a swimmer's maximum speed in still water ($v_s$) is strictly less than the river flow speed ($v_r$), it is physically impossible for the swimmer to cross the river with zero drift.\n**Reason (R):** The condition to achieve zero drift requires $\\sin\\alpha = \\frac{v_r}{v_s} \\le 1$, which can never be satisfied if $v_s < v_r$ because the sine of a real angle cannot exceed unity.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** If a swimmer's maximum speed in still water ($v_s$) is strictly less than the river flow speed ($v_r$), it is physically impossible for the swimmer to cross the river with zero drift.\n**Reason (R):** The condition to achieve zero drift requires $\\sin\\alpha = \\frac{v_r}{v_s} \\le 1$, which can never be satisfied if $v_s < v_r$ because the sine of a real angle cannot exceed unity.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Both (A) and (R) are true, and (R) mathematically explains why zero drift cannot be attained when the river current is faster than the swimmer.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Relative velocity",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const q45Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The motion of one projectile as viewed from another projectile moving in mid-air under gravity is a straight line.\n**Reason (R):** Gravitational force between two masses is inversely proportional to the square of the distance separating them.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The motion of one projectile as viewed from another projectile moving in mid-air under gravity is a straight line.\n**Reason (R):** Gravitational force between two masses is inversely proportional to the square of the distance separating them.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 1,
  correctOption: "b",
  explanation: "Assertion (A) is true: Since both projectiles have identical acceleration $\\vec{g}$ downwards, their relative acceleration is $\\vec{a}_{\\text{rel}} = \\vec{g} - \\vec{g} = 0$. Motion with zero relative acceleration is unaccelerated motion with constant relative velocity, whose trajectory is a straight line.\n\nReason (R) is true (Newton's law of universal gravitation), but it is not the explanation of (A). The straight line path is explained by $\\vec{a}_{\\text{rel}} = 0$.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Relative velocity",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const updates = [
  { index: 0, data: q1Update },
  { index: 2, data: q3Update },
  { index: 6, data: q7Update },
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
  console.log(`Updated Test 4 Q${u.index + 1} (${qId})`);
}

// Update test metadata to ensure correct chapter mapping
await db.collection("testPapers").updateOne(
  { _id: testPaper._id },
  {
    $set: {
      chapter: "Motion in a Straight Line",
      subject: "Physics",
      updatedAt: new Date()
    }
  }
);

console.log("Successfully updated Test 4 (Relative Velocity) in questionBank and testPapers!");
await client.close();
