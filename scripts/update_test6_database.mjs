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

const testId = "neet-SUBTOPIC-Physics-Uniformly-accelerated-motion-and-equations";
const testPaper = await db.collection("testPapers").findOne({ testId });
console.log("Updating Test 6:", testPaper.title);

// 1. Diagram Q1 (index 0)
const q1Update = {
  question: "A ball $A$ is dropped from rest from the top of a vertical tower of height $H = 100\\text{ m}$. At the exact same instant, another ball $B$ is projected vertically upward from the base of the tower with an initial speed of $u = 50\\text{ m/s}$, as depicted in the figure. Taking $g = 10\\text{ m/s}^2$, at what height above the ground do the two balls cross each other?",
  text: "A ball $A$ is dropped from rest from the top of a vertical tower of height $H = 100\\text{ m}$. At the exact same instant, another ball $B$ is projected vertically upward from the base of the tower with an initial speed of $u = 50\\text{ m/s}$, as depicted in the figure. Taking $g = 10\\text{ m/s}^2$, at what height above the ground do the two balls cross each other?",
  options: [
    "$80\\text{ m}$",
    "$75\\text{ m}$",
    "$60\\text{ m}$",
    "$50\\text{ m}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Method 1: Relative Motion Approach:**\n- Relative velocity of ball $B$ with respect to ball $A$:\n$$v_{\\text{rel}} = v_B - v_A = 50 - 0 = 50\\text{ m/s} \\quad (\\text{upward})$$\n- Relative acceleration of ball $B$ with respect to ball $A$:\n$$a_{\\text{rel}} = (-g) - (-g) = 0$$\n- The relative acceleration is zero, so relative velocity is constant. The initial separation is $H = 100\\text{ m}$.\n- Time to collision / meeting:\n$$t = \\frac{H}{v_{\\text{rel}}} = \\frac{100\\text{ m}}{50\\text{ m/s}} = 2\\text{ s}$$\n\n**Method 2: Height Calculation for Ball $B$:**\nPosition of ball $B$ above the ground at $t = 2\\text{ s}$:\n$$y = u t - \\frac{1}{2}gt^2 = (50\\text{ m/s})(2\\text{ s}) - \\frac{1}{2}(10\\text{ m/s}^2)(2\\text{ s})^2 = 100 - 20 = 80\\text{ m}.$$",
  image: "/images/diagrams/kinematics/test6_q1_tower_balls_meeting.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test6_q1_tower_balls_meeting.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (0,0) -- (4,0);\n\\draw[fill=gray!20] (0.5,0) rectangle (1.2,4) node[midway,rotate=90]{Tower $100\\text{ m}$};\n\\draw[fill=red] (1.8,4) circle (3pt) node[right]{$A$ (Dropped)};\n\\draw[->,thick,red] (1.8,4) -- (1.8,3.2);\n\\draw[fill=blue] (1.8,0) circle (3pt) node[right]{$B$ ($50\\text{ m/s}$)};\n\\draw[->,thick,blue] (1.8,0) -- (1.8,0.8);\n\\draw[dashed,green!60!black] (1.2,3.2) -- (2.5,3.2) node[right]{$M$ ($y=80\\text{ m}$)};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Uniformly accelerated motion and equations",
  difficulty: "medium",
  type: "MCQ"
};

// 2. Diagram Q4 (index 3)
const q4Update = {
  question: "The velocity–time ($v-t$) graph of a body moving along a straight line with initial velocity $u = 10\\text{ m/s}$ and constant acceleration $a = 2\\text{ m/s}^2$ for $t = 5\\text{ s}$ is partitioned geometrically into Region I (rectangle of area $u \\cdot t$) and Region II (triangle of area $\\frac{1}{2}a t^2$), as shown in the diagram. What is the ratio of the distance traversed due to the initial velocity (Region I) to the additional distance gained due to the acceleration (Region II)?",
  text: "The velocity–time ($v-t$) graph of a body moving along a straight line with initial velocity $u = 10\\text{ m/s}$ and constant acceleration $a = 2\\text{ m/s}^2$ for $t = 5\\text{ s}$ is partitioned geometrically into Region I (rectangle of area $u \\cdot t$) and Region II (triangle of area $\\frac{1}{2}a t^2$), as shown in the diagram. What is the ratio of the distance traversed due to the initial velocity (Region I) to the additional distance gained due to the acceleration (Region II)?",
  options: [
    "$2 : 1$",
    "$1 : 2$",
    "$3 : 1$",
    "$1 : 1$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Calculate the area of Region I (Rectangle):**\n$$A_{\\text{rect}} = u \\times t = 10\\text{ m/s} \\times 5\\text{ s} = 50\\text{ m}$$\n\n**Step 2: Calculate the area of Region II (Triangle):**\nFinal velocity $v = u + at = 10 + 2(5) = 20\\text{ m/s}$.\n$$A_{\\text{tri}} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times t \\times (v - u) = \\frac{1}{2} \\times 5\\text{ s} \\times (20 - 10)\\text{ m/s} = 25\\text{ m}$$\n*(Equivalently, $A_{\\text{tri}} = \\frac{1}{2} a t^2 = \\frac{1}{2}(2)(5^2) = 25\\text{ m}$.)*\n\n**Step 3: Compute the ratio:**\n$$\\text{Ratio} = \\frac{A_{\\text{rect}}}{A_{\\text{tri}}} = \\frac{50\\text{ m}}{25\\text{ m}} = \\frac{2}{1} = 2 : 1.$$",
  image: "/images/diagrams/kinematics/test6_q4_vt_area_partition.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test6_q4_vt_area_partition.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick,->] (0,0) -- (4,0) node[right]{$t\\text{ (s)}$};\n\\draw[thick,->] (0,0) -- (0,3) node[above]{$v\\text{ (m/s)}$};\n\\draw[fill=blue!15] (0,0) rectangle (3,1);\n\\draw[fill=yellow!25] (0,1) -- (3,1) -- (3,2.5) -- cycle;\n\\draw[very thick,blue] (0,1) -- (3,2.5);\n\\node[left] at (0,1) {$u=10$};\n\\node[left] at (0,2.5) {$v=20$};\n\\node[below] at (3,0) {$t=5$};\n\\node at (1.5,0.5) {Region I ($50\\text{ m}$)};\n\\node at (2,1.5) {Region II ($25\\text{ m}$)};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Uniformly accelerated motion and equations",
  difficulty: "medium",
  type: "MCQ"
};

// 3. Diagram Q7 (index 6)
const q7Update = {
  question: "Water drops are falling at regular, equal time intervals from a water tap located at a height of $H = 5\\text{ m}$ above the ground, as illustrated in the figure. At the precise instant when the $1^{\\text{st}}$ drop strikes the ground, the $4^{\\text{th}}$ drop is just beginning to detach from the tap nozzle. Taking $g = 10\\text{ m/s}^2$, what is the separation distance between the $2^{\\text{nd}}$ drop and the $3^{\\text{rd}}$ drop in mid-air at this instant?",
  text: "Water drops are falling at regular, equal time intervals from a water tap located at a height of $H = 5\\text{ m}$ above the ground, as illustrated in the figure. At the precise instant when the $1^{\\text{st}}$ drop strikes the ground, the $4^{\\text{th}}$ drop is just beginning to detach from the tap nozzle. Taking $g = 10\\text{ m/s}^2$, what is the separation distance between the $2^{\\text{nd}}$ drop and the $3^{\\text{rd}}$ drop in mid-air at this instant?",
  options: [
    "$\\frac{5}{3}\\text{ m} \\approx 1.67\\text{ m}$",
    "$\\frac{5}{9}\\text{ m} \\approx 0.56\\text{ m}$",
    "$\\frac{20}{9}\\text{ m} \\approx 2.22\\text{ m}$",
    "$1.25\\text{ m}$",
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Total fall time for the 1st drop:**\n$$H = \\frac{1}{2}gt^2 \\implies 5 = \\frac{1}{2}(10)T^2 = 5T^2 \\implies T = 1\\text{ s}$$\n\n**Step 2: Time interval between successive drops:**\nSince the 4th drop is leaving the tap when the 1st drop hits the ground, the time interval has been partitioned into 3 equal gaps:\n$$\\Delta t = \\frac{T}{3} = \\frac{1}{3}\\text{ s}$$\n\n**Step 3: Distance fallen by 2nd and 3rd drops from the tap:**\n- 4th drop: elapsed time $t_4 = 0\\text{ s} \\implies y_4 = 0\\text{ m}$\n- 3rd drop: elapsed time $t_3 = \\frac{1}{3}\\text{ s} \\implies y_3 = \\frac{1}{2}(10)\\left(\\frac{1}{3}\\right)^2 = \\frac{5}{9}\\text{ m}$\n- 2nd drop: elapsed time $t_2 = \\frac{2}{3}\\text{ s} \\implies y_2 = \\frac{1}{2}(10)\\left(\\frac{2}{3}\\right)^2 = \\frac{20}{9}\\text{ m}$\n\n**Step 4: Separation distance between 2nd and 3rd drops:**\n$$\\Delta y = y_2 - y_3 = \\frac{20}{9} - \\frac{5}{9} = \\frac{15}{9} = \\frac{5}{3}\\text{ m} \\approx 1.67\\text{ m}.$$",
  image: "/images/diagrams/kinematics/test6_q7_water_drops.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test6_q7_water_drops.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick] (0,5) -- (2,5) node[right]{Tap};\n\\draw[thick] (-0.5,0) -- (2.5,0) node[right]{Ground};\n\\draw[fill=blue] (1,5) circle (2pt) node[right]{4th};\n\\draw[fill=blue] (1,4.44) circle (3pt) node[right]{3rd};\n\\draw[fill=blue] (1,2.78) circle (3pt) node[right]{2nd};\n\\draw[fill=blue] (1,0) circle (4pt) node[right]{1st};\n\\draw[<->,thick,red] (0.5,4.44) -- (0.5,2.78) node[midway,left]{$\\Delta y = \\frac{5}{3}\\text{ m}$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Uniformly accelerated motion and equations",
  difficulty: "hard",
  type: "MCQ"
};

// Section B: 6 Assertion-Reason Questions (Q40 to Q45)
const q40Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** For a body projected vertically upward in vacuum, the time taken to reach the maximum height (time of ascent) equals the time taken to return to the projection level (time of descent).\n**Reason (R):** In the absence of air resistance, the downward gravitational acceleration $g$ is identical in both magnitude and direction during both upward ascent and downward descent.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** For a body projected vertically upward in vacuum, the time taken to reach the maximum height (time of ascent) equals the time taken to return to the projection level (time of descent).\n**Reason (R):** In the absence of air resistance, the downward gravitational acceleration $g$ is identical in both magnitude and direction during both upward ascent and downward descent.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Assertion (A) is true: $t_{\\text{ascent}} = \\frac{u}{g}$ and $t_{\\text{descent}} = \\sqrt{\\frac{2H}{g}} = \\sqrt{\\frac{2(u^2/2g)}{g}} = \\frac{u}{g}$. Thus $t_{\\text{ascent}} = t_{\\text{descent}}$.\n\nReason (R) is true: Gravity acts with constant downward acceleration $g$ uniformly throughout both legs of motion, which directly explains the temporal symmetry.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Uniformly accelerated motion and equations",
  difficulty: "easy",
  type: "ASSERTION_REASON"
};

const q41Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The velocity of a particle moving with uniform acceleration along a straight line can change its algebraic sign during the motion.\n**Reason (R):** In uniformly accelerated rectilinear motion, the acceleration vector remains strictly constant in both magnitude and direction.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The velocity of a particle moving with uniform acceleration along a straight line can change its algebraic sign during the motion.\n**Reason (R):** In uniformly accelerated rectilinear motion, the acceleration vector remains strictly constant in both magnitude and direction.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 1,
  correctOption: "b",
  explanation: "Assertion (A) is true: For instance, a ball thrown vertically upwards has initial positive velocity $+u$, passes through $v = 0$ at the apex, and acquires negative velocity $-gt$ during descent.\n\nReason (R) is true: By definition of uniform acceleration, $\\vec{a}$ is constant.\n\nHowever, Reason (R) is not the complete explanation of (A). Velocity reverses sign specifically because the initial velocity vector and acceleration vector are antiparallel (opposite in direction).",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Uniformly accelerated motion and equations",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const q42Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In the kinematic equation for displacement in the $n^{\\text{th}}$ second ($s_n = u + \\frac{a}{2}(2n - 1)$), both sides of the equation are dimensionally consistent.\n**Reason (R):** The term $(2n - 1)$ in the expression is purely dimensionless because $n$ is an integer counting seconds.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In the kinematic equation for displacement in the $n^{\\text{th}}$ second ($s_n = u + \\frac{a}{2}(2n - 1)$), both sides of the equation are dimensionally consistent.\n**Reason (R):** The term $(2n - 1)$ in the expression is purely dimensionless because $n$ is an integer counting seconds.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 2,
  correctOption: "c",
  explanation: "Assertion (A) is true: The formula represents $s_n = s(n) - s(n - 1) = u(1\\text{ s}) + \\frac{1}{2}a(2n - 1)(1\\text{ s})^2$. Each term on the right has dimension of length $[L]$, matching the left side $[L]$.\n\nReason (R) is false: The factor $(2n - 1)$ carries the dimension of time $[T]$ because it arises from the difference between two time intervals $[n^2 - (n-1)^2]\\text{ s}^2 = (2n - 1)\\text{ s}^2$, where one second is absorbed. It is not dimensionless.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Uniformly accelerated motion and equations",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q43Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle moving with constant non-zero acceleration along a straight line can never reverse its direction of motion.\n**Reason (R):** The instantaneous direction of motion of a particle is determined by the direction of its instantaneous velocity vector, not by its acceleration vector.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle moving with constant non-zero acceleration along a straight line can never reverse its direction of motion.\n**Reason (R):** The instantaneous direction of motion of a particle is determined by the direction of its instantaneous velocity vector, not by its acceleration vector.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 3,
  correctOption: "d",
  explanation: "Assertion (A) is false: A particle with acceleration opposite to initial velocity will decelerate to rest and reverse its direction of motion (e.g. a ball thrown vertically upward under gravity reverses direction at the top).\n\nReason (R) is true: Direction of motion is always parallel to the instantaneous velocity vector $\\vec{v}$, whereas acceleration $\\vec{a}$ determines the rate of change of $\\vec{v}$.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Uniformly accelerated motion and equations",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const q44Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a body is dropped from rest from a high tower, the ratio of the distances fallen in the $1^{\\text{st}}$, $2^{\\text{nd}}$, and $3^{\\text{rd}}$ seconds is $1 : 3 : 5$.\n**Reason (R):** In uniformly accelerated motion starting from rest, the distance traversed in the $n^{\\text{th}}$ unit time interval is directly proportional to $(2n - 1)$.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a body is dropped from rest from a high tower, the ratio of the distances fallen in the $1^{\\text{st}}$, $2^{\\text{nd}}$, and $3^{\\text{rd}}$ seconds is $1 : 3 : 5$.\n**Reason (R):** In uniformly accelerated motion starting from rest, the distance traversed in the $n^{\\text{th}}$ unit time interval is directly proportional to $(2n - 1)$.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Both Assertion (A) and Reason (R) are true, and (R) mathematically explains (A) via Galileo's law of odd numbers: $s_n = \\frac{g}{2}(2n - 1) \\implies s_1 : s_2 : s_3 = 1 : 3 : 5$.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Uniformly accelerated motion and equations",
  difficulty: "easy",
  type: "ASSERTION_REASON"
};

const q45Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The slope of the velocity–time ($v-t$) graph of a body moving in a straight line at any instant equals its instantaneous acceleration.\n**Reason (R):** The area under the acceleration–time ($a-t$) graph between two instants represents the net change in velocity ($\\Delta v$) over that time interval.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The slope of the velocity–time ($v-t$) graph of a body moving in a straight line at any instant equals its instantaneous acceleration.\n**Reason (R):** The area under the acceleration–time ($a-t$) graph between two instants represents the net change in velocity ($\\Delta v$) over that time interval.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 1,
  correctOption: "b",
  explanation: "Assertion (A) is true: By calculus definition, $a = \\frac{dv}{dt}$, which is geometrically the slope of the tangent to the $v-t$ curve.\n\nReason (R) is true: $\\Delta v = \\int a\\,dt$, which is the definite integral (area) under the $a-t$ curve.\n\nHowever, Reason (R) is not the explanation of (A). (A) is explained by the definition of derivative as slope.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Uniformly accelerated motion and equations",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const updates = [
  { index: 0, data: q1Update },
  { index: 3, data: q4Update },
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
  console.log(`Updated Test 6 Q${u.index + 1} (${qId})`);
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

console.log("Successfully updated Test 6 (Uniformly Accelerated Motion) in questionBank and testPapers!");
await client.close();
