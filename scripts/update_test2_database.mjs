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

const testId = "neet-SUBTOPIC-Physics-Motion-in-a-straight-line/plane";
const testPaper = await db.collection("testPapers").findOne({ testId });
console.log("Updating Test 2:", testPaper.title);

// 1. Diagram Q1 (index 0)
const q1Update = {
  question: "A particle executes 1D rectilinear motion along the $x$-axis as shown in the diagram. It starts from the origin $O (x = 0)$ and travels to point $A (x = +120\\text{ m})$ in $6\\text{ s}$, then immediately turns around and travels to point $B (x = -40\\text{ m})$ in $4\\text{ s}$. What is the ratio of its average speed to the magnitude of its average velocity for the entire journey?",
  text: "A particle executes 1D rectilinear motion along the $x$-axis as shown in the diagram. It starts from the origin $O (x = 0)$ and travels to point $A (x = +120\\text{ m})$ in $6\\text{ s}$, then immediately turns around and travels to point $B (x = -40\\text{ m})$ in $4\\text{ s}$. What is the ratio of its average speed to the magnitude of its average velocity for the entire journey?",
  options: [
    "$7 : 1$",
    "$4 : 1$",
    "$5 : 2$",
    "$3 : 1$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Calculate total distance covered:**\n- Forward path $O \\to A$: $\\Delta x_1 = |120 - 0| = 120\\text{ m}$.\n- Backward path $A \\to B$: $\\Delta x_2 = |-40 - 120| = |-160| = 160\\text{ m}$.\n- Total distance $d = \\Delta x_1 + \\Delta x_2 = 120\\text{ m} + 160\\text{ m} = 280\\text{ m}$.\n\n**Step 2: Calculate net displacement:**\n- Net displacement $\\Delta x = x_{\\text{final}} - x_{\\text{initial}} = -40 - 0 = -40\\text{ m}$.\n- Magnitude of net displacement $|\\Delta x| = 40\\text{ m}$.\n\n**Step 3: Calculate total time:**\n- Total time $t_{\\text{total}} = 6\\text{ s} + 4\\text{ s} = 10\\text{ s}$.\n\n**Step 4: Determine average speed and average velocity:**\n- Average speed $v_{\\text{avg}} = \\frac{\\text{Total distance}}{t_{\\text{total}}} = \\frac{280\\text{ m}}{10\\text{ s}} = 28\\text{ m/s}$.\n- Magnitude of average velocity $|\\vec{v}_{\\text{avg}}| = \\frac{|\\Delta x|}{t_{\\text{total}}} = \\frac{40\\text{ m}}{10\\text{ s}} = 4\\text{ m/s}$.\n\n**Step 5: Compute the required ratio:**\n$$\\text{Ratio} = \\frac{v_{\\text{avg}}}{|\\vec{v}_{\\text{avg}}|} = \\frac{28}{4} = \\frac{7}{1} = 7 : 1.$$",
  image: "/images/diagrams/kinematics/test2_q1_numberline.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test2_q1_numberline.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick,->] (-2,0) -- (6,0) node[right]{$x\\text{ (m)}$};\n\\draw[fill=black] (0,0) circle (2pt) node[below]{$O(0)$};\n\\draw[fill=blue] (5,0) circle (2pt) node[below]{$A(+120)$};\n\\draw[fill=red] (-1.5,0) circle (2pt) node[below]{$B(-40)$};\n\\draw[blue,thick,->] (0,0.5) -- (5,0.5) node[midway,above]{$O \\to A$ ($6\\text{ s}$)};\n\\draw[red,thick,->] (5,1.0) -- (-1.5,1.0) node[midway,above]{$A \\to B$ ($4\\text{ s}$)};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "medium",
  type: "MCQ"
};

// 2. Diagram Q16 (index 15)
const q16Update = {
  question: "The position-time ($x-t$) graph of a particle executing rectilinear motion along a straight line is shown in the figure. Tangents drawn to the curve at points $P$ (at $t = 2\\text{ s}$) and $Q$ (at $t = 5\\text{ s}$) make angles of $30^\\circ$ and $60^\\circ$ respectively with the positive time axis. The ratio of the instantaneous velocity of the particle at point $P$ to that at point $Q$ is:",
  text: "The position-time ($x-t$) graph of a particle executing rectilinear motion along a straight line is shown in the figure. Tangents drawn to the curve at points $P$ (at $t = 2\\text{ s}$) and $Q$ (at $t = 5\\text{ s}$) make angles of $30^\\circ$ and $60^\\circ$ respectively with the positive time axis. The ratio of the instantaneous velocity of the particle at point $P$ to that at point $Q$ is:",
  options: [
    "$1 : 3$",
    "$1 : \\sqrt{3}$",
    "$\\sqrt{3} : 1$",
    "$3 : 1$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Key Concept:**\nIn a position–time ($x-t$) graph, the instantaneous velocity at any point equals the slope of the tangent to the curve at that point:\n$$v = \\frac{dx}{dt} = \\tan\\theta$$\nwhere $\\theta$ is the angle made by the tangent with the positive time axis.\n\n**Calculation:**\n- At point $P$: $\\theta_P = 30^\\circ \\implies v_P = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.\n- At point $Q$: $\\theta_Q = 60^\\circ \\implies v_Q = \\tan 60^\\circ = \\sqrt{3}$.\n\n**Ratio:**\n$$\\frac{v_P}{v_Q} = \\frac{\\tan 30^\\circ}{\\tan 60^\\circ} = \\frac{1/\\sqrt{3}}{\\sqrt{3}} = \\frac{1}{3} = 1 : 3.$$",
  image: "/images/diagrams/kinematics/test2_q16_xt_tangents.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test2_q16_xt_tangents.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick,->] (0,0) -- (5,0) node[right]{$t\\text{ (s)}$};\n\\draw[thick,->] (0,0) -- (0,4) node[above]{$x\\text{ (m)}$};\n\\draw[blue,very thick] (0,0) to[out=10,in=250] (4,3.5);\n\\draw[red,dashed] (1.5,0.7) -- (3,1.5) node[right]{$\\theta = 30^\\circ$ at $P$};\n\\draw[green!60!black,dashed] (3.0,2.0) -- (3.8,3.5) node[right]{$\\theta = 60^\\circ$ at $Q$};\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "medium",
  type: "MCQ"
};

// 3. Diagram Q28 (index 27)
const q28Update = {
  question: "The acceleration versus position ($a-x$) graph of a particle moving along a straight horizontal track is shown in the figure. If the particle starts from rest at the origin ($x = 0$), its speed when it reaches $x = 8\\text{ m}$ is:",
  text: "The acceleration versus position ($a-x$) graph of a particle moving along a straight horizontal track is shown in the figure. If the particle starts from rest at the origin ($x = 0$), its speed when it reaches $x = 8\\text{ m}$ is:",
  options: [
    "$4\\sqrt{3}\\text{ m/s}$",
    "$6\\text{ m/s}$",
    "$8\\text{ m/s}$",
    "$2\\sqrt{6}\\text{ m/s}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Key Concept:**\nAcceleration can be expressed in terms of velocity and position using the chain rule:\n$$a = v \\frac{dv}{dx} \\implies a\\,dx = v\\,dv$$\nIntegrating both sides from $x = 0$ (where $u = 0$) to $x = 8\\text{ m}$ (where velocity is $v$):\n$$\\int_{0}^{8} a\\,dx = \\int_{0}^{v} v\\,dv = \\frac{v^2}{2}$$\nThe integral $\\int a\\,dx$ is equal to the area under the $a-x$ curve.\n\n**Area Calculation:**\nThe region is a right-angled triangle with base $= 8\\text{ m}$ and height $= 6\\text{ m/s}^2$:\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ m}^2/\\text{s}^2$$\n\n**Solving for $v$:**\n$$\\frac{v^2}{2} = 24 \\implies v^2 = 48 \\implies v = \\sqrt{48} = 4\\sqrt{3}\\text{ m/s} \\approx 6.93\\text{ m/s}.$$",
  image: "/images/diagrams/kinematics/test2_q28_ax_graph.svg",
  diagramAssetUrl: "/images/diagrams/kinematics/test2_q28_ax_graph.svg",
  diagramType: "PGFPLOTS",
  diagramLatex: "\\begin{tikzpicture}\n\\draw[thick,->] (0,0) -- (5,0) node[right]{$x\\text{ (m)}$};\n\\draw[thick,->] (0,0) -- (0,3.5) node[above]{$a\\text{ (m/s}^2)$};\n\\draw[blue,very thick] (0,3) -- (4,0);\n\\node[left] at (0,3) {$6$};\n\\node[below] at (4,0) {$8$};\n\\fill[blue!15] (0,0) -- (0,3) -- (4,0) -- cycle;\n\\end{tikzpicture}",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "hard",
  type: "MCQ"
};

// 4. Replacement of River-boat / Circular questions
// Q8 (index 7): Average speed in thirds of distance
const q8Update = {
  question: "A car travelling along a straight highway covers the first third of the total distance with speed $v_1 = 20\\text{ km/h}$, the second third with $v_2 = 30\\text{ km/h}$, and the final third with $v_3 = 60\\text{ km/h}$. What is the average speed of the car for the entire trip?",
  text: "A car travelling along a straight highway covers the first third of the total distance with speed $v_1 = 20\\text{ km/h}$, the second third with $v_2 = 30\\text{ km/h}$, and the final third with $v_3 = 60\\text{ km/h}$. What is the average speed of the car for the entire trip?",
  options: [
    "$30\\text{ km/h}$",
    "$36.7\\text{ km/h}$",
    "$40\\text{ km/h}$",
    "$25\\text{ km/h}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Let the total distance be $3s$. Each one-third distance is $s$.\n\n- Time for first third: $t_1 = \\frac{s}{20}$\n- Time for second third: $t_2 = \\frac{s}{30}$\n- Time for final third: $t_3 = \\frac{s}{60}$\n\nTotal time $t_{\\text{total}} = s\\left(\\frac{1}{20} + \\frac{1}{30} + \\frac{1}{60}\\right) = s\\left(\\frac{3 + 2 + 1}{60}\\right) = s\\left(\\frac{6}{60}\\right) = \\frac{s}{10}$.\n\nAverage speed:\n$$v_{\\text{avg}} = \\frac{\\text{Total distance}}{\\text{Total time}} = \\frac{3s}{s/10} = 30\\text{ km/h}.$$",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "medium",
  type: "MCQ"
};

// Q9 (index 8): Acceleration from successive equal time intervals
const q9Update = {
  question: "A particle moving along a straight line with uniform acceleration covers successive distances $x$ and $y$ in two consecutive equal time intervals of $t$ seconds each. The constant acceleration of the particle is given by:",
  text: "A particle moving along a straight line with uniform acceleration covers successive distances $x$ and $y$ in two consecutive equal time intervals of $t$ seconds each. The constant acceleration of the particle is given by:",
  options: [
    "$\\frac{y - x}{t^2}$",
    "$\\frac{2(y - x)}{t^2}$",
    "$\\frac{y + x}{2t^2}$",
    "$\\frac{y - x}{2t^2}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Let initial velocity at the start of the first interval be $u$.\n\n1. Distance in first interval of time $t$:\n$$x = ut + \\frac{1}{2}at^2$$\n\n2. Total distance in time $2t$ (both intervals):\n$$x + y = u(2t) + \\frac{1}{2}a(2t)^2 = 2ut + 2at^2$$\n\nMultiply the first equation by 2: $2x = 2ut + at^2$.\nSubtract this from the total distance equation:\n$$(x + y) - 2x = (2ut + 2at^2) - (2ut + at^2)$$\n$$y - x = at^2 \\implies a = \\frac{y - x}{t^2}.$$",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "medium",
  type: "MCQ"
};

// Q10 (index 9): Stopping distance proportionality
const q10Update = {
  question: "A vehicle moving at a speed $v$ along a straight horizontal road can be brought to rest in a minimum stopping distance $s$ by applying maximum braking force. If the speed of the vehicle is increased to $3v$ on the same road, the minimum stopping distance under the same braking deceleration becomes:",
  text: "A vehicle moving at a speed $v$ along a straight horizontal road can be brought to rest in a minimum stopping distance $s$ by applying maximum braking force. If the speed of the vehicle is increased to $3v$ on the same road, the minimum stopping distance under the same braking deceleration becomes:",
  options: [
    "$9s$",
    "$3s$",
    "$6s$",
    "$18s$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "From the third equation of motion:\n$$v_f^2 = u^2 - 2as$$\nFor stopping ($v_f = 0$):\n$$0 = u^2 - 2as \\implies s = \\frac{u^2}{2a}$$\nSince the braking deceleration $a$ is constant, stopping distance is directly proportional to the square of initial speed:\n$$s \\propto u^2$$\nWhen speed is tripled ($u' = 3u$):\n$$s' = \\frac{(3u)^2}{2a} = 9 \\left(\\frac{u^2}{2a}\\right) = 9s.$$",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "easy",
  type: "MCQ"
};

// Q12 (index 11): Variable acceleration relation x^2 = at^2 + 2bt + c
const q12Update = {
  question: "A body moves in a straight line such that its displacement $x$ at any time $t$ satisfies $x^2 = at^2 + 2bt + c$, where $a, b, c$ are constants. The acceleration of the body is proportional to:",
  text: "A body moves in a straight line such that its displacement $x$ at any time $t$ satisfies $x^2 = at^2 + 2bt + c$, where $a, b, c$ are constants. The acceleration of the body is proportional to:",
  options: [
    "$x^{-3}$",
    "$x^{-2}$",
    "$x^2$",
    "$x^3$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Differentiating $x^2 = at^2 + 2bt + c$ with respect to time $t$:\n$$2x \\frac{dx}{dt} = 2at + 2b \\implies x v = at + b$$\n\nDifferentiating again with respect to $t$:\n$$\\frac{d}{dt}(x v) = x \\frac{dv}{dt} + v \\frac{dx}{dt} = x a_{\\text{acc}} + v^2 = a$$\n$$x a_{\\text{acc}} = a - v^2$$\n\nSubstitute $v = \\frac{at + b}{x}$ into the equation:\n$$x a_{\\text{acc}} = a - \\frac{(at + b)^2}{x^2} = \\frac{a x^2 - (at + b)^2}{x^2}$$\n\nSubstitute $x^2 = at^2 + 2bt + c$ into the numerator:\n$$\\text{Numerator} = a(at^2 + 2bt + c) - (a^2t^2 + 2abt + b^2) = ac - b^2 = \\text{constant}$$\n\nTherefore:\n$$x a_{\\text{acc}} = \\frac{ac - b^2}{x^2} \\implies a_{\\text{acc}} = \\frac{ac - b^2}{x^3} \\propto x^{-3}.$$",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "hard",
  type: "MCQ"
};

// Q37 (index 36): Displacement vs distance for turnaround x = (t - 2)^2
const q37Update = {
  question: "The displacement of a particle moving along a straight line varies with time as $x = (t - 2)^2\\text{ m}$, where $t$ is in seconds. What is the total distance travelled by the particle in the first $4\\text{ seconds}$ (from $t = 0$ to $t = 4\\text{ s}$)?",
  text: "The displacement of a particle moving along a straight line varies with time as $x = (t - 2)^2\\text{ m}$, where $t$ is in seconds. What is the total distance travelled by the particle in the first $4\\text{ seconds}$ (from $t = 0$ to $t = 4\\text{ s}$)?",
  options: [
    "$8\\text{ m}$",
    "$0\\text{ m}$",
    "$4\\text{ m}$",
    "$16\\text{ m}$"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "**Step 1: Check if the particle turns around:**\nVelocity is the derivative of position:\n$$v = \\frac{dx}{dt} = 2(t - 2)$$\nSetting $v = 0$ gives $t = 2\\text{ s}$. The particle comes to instantaneous rest and reverses its direction of motion at $t = 2\\text{ s}$.\n\n**Step 2: Calculate positions at key times:**\n- At $t = 0\\text{ s}$: $x(0) = (0 - 2)^2 = 4\\text{ m}$\n- At $t = 2\\text{ s}$: $x(2) = (2 - 2)^2 = 0\\text{ m}$\n- At $t = 4\\text{ s}$: $x(4) = (4 - 2)^2 = 4\\text{ m}$\n\n**Step 3: Calculate distance travelled in each segment:**\n- First segment ($t = 0$ to $2\\text{ s}$): $d_1 = |x(2) - x(0)| = |0 - 4| = 4\\text{ m}$\n- Second segment ($t = 2$ to $4\\text{ s}$): $d_2 = |x(4) - x(2)| = |4 - 0| = 4\\text{ m}$\n\n**Total distance travelled:**\n$$d_{\\text{total}} = d_1 + d_2 = 4\\text{ m} + 4\\text{ m} = 8\\text{ m}.$$\n*(Note: Net displacement over the 4 seconds is $x(4) - x(0) = 4 - 4 = 0\\text{ m}$, but total distance is $8\\text{ m}$.)*",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "medium",
  type: "MCQ"
};

// 5. Section B: Balanced Assertion-Reason Questions (Q40 to Q45)
const q40Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In uniformly accelerated rectilinear motion, the distances traversed by a body starting from rest in successive equal time intervals are in the ratio of consecutive odd numbers $1 : 3 : 5 : 7 : \\dots$ (Galileo's law of odd numbers).\n**Reason (R):** The distance covered in the $n^{\\text{th}}$ second of uniform acceleration from rest is given by $s_n = \\frac{a}{2}(2n - 1)$, which is directly proportional to $(2n - 1)$.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In uniformly accelerated rectilinear motion, the distances traversed by a body starting from rest in successive equal time intervals are in the ratio of consecutive odd numbers $1 : 3 : 5 : 7 : \\dots$ (Galileo's law of odd numbers).\n**Reason (R):** The distance covered in the $n^{\\text{th}}$ second of uniform acceleration from rest is given by $s_n = \\frac{a}{2}(2n - 1)$, which is directly proportional to $(2n - 1)$.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 0,
  correctOption: "a",
  explanation: "Assertion (A) is true: Galileo's law of odd numbers states that for a body starting from rest with uniform acceleration, the distances covered in successive equal time intervals $\\tau$ are proportional to $1, 3, 5, 7, \\dots$\n\nReason (R) is true: The distance in the $n^{\\text{th}}$ interval is $s_n = u\\tau + \\frac{a}{2}(2n - 1)\\tau^2$. For $u = 0$, $s_n = \\frac{a\\tau^2}{2}(2n - 1) \\propto (2n - 1)$. This provides the exact mathematical derivation and correct explanation of (A).",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "medium",
  type: "ASSERTION_REASON"
};

const q41Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The magnitude of the average velocity of a particle over any finite time interval can never exceed its average speed during that interval.\n**Reason (R):** The displacement of a particle can have negative, zero, or positive values depending on the chosen coordinate frame.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The magnitude of the average velocity of a particle over any finite time interval can never exceed its average speed during that interval.\n**Reason (R):** The displacement of a particle can have negative, zero, or positive values depending on the chosen coordinate frame.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 1,
  correctOption: "b",
  explanation: "Assertion (A) is true: Since the magnitude of displacement between two points is the shortest straight-line distance, $|\\text{displacement}| \\le \\text{total distance}$. Dividing by elapsed time $\\Delta t$ gives $|\\vec{v}_{\\text{avg}}| \\le v_{\\text{avg}}$.\n\nReason (R) is true: Displacement is a vector and its components depend on the origin and axis orientation, so it can be positive, negative, or zero.\n\nHowever, Reason (R) is not the explanation of (A). The correct explanation of (A) is that the straight-line path is the minimum possible path length between two designated points in space.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q42Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A stone projected vertically upward under gravity has a non-zero acceleration at the highest point of its trajectory even though its instantaneous velocity is zero.\n**Reason (R):** When a body comes to instantaneous rest, the net external force acting on it must instantaneously drop to zero.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A stone projected vertically upward under gravity has a non-zero acceleration at the highest point of its trajectory even though its instantaneous velocity is zero.\n**Reason (R):** When a body comes to instantaneous rest, the net external force acting on it must instantaneously drop to zero.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 2,
  correctOption: "c",
  explanation: "Assertion (A) is true: At the apex, $v = 0$, but the gravitational acceleration $g = 9.8\\text{ m/s}^2$ continues to act downwards because the Earth continues to pull it.\n\nReason (R) is false: A non-zero net force is precisely what causes a body's velocity to change through zero (e.g. gravitational force $F_g = mg$ is constant throughout the motion). If the net force were zero at the top, the stone would remain suspended in mid-air at rest!",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

const q43Update = {
  question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle moving strictly along a 1D straight line with constant speed can have a non-zero acceleration.\n**Reason (R):** In 1D rectilinear motion, acceleration is defined as the time rate of change of velocity: $a = \\frac{dv}{dt}$.",
  text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A particle moving strictly along a 1D straight line with constant speed can have a non-zero acceleration.\n**Reason (R):** In 1D rectilinear motion, acceleration is defined as the time rate of change of velocity: $a = \\frac{dv}{dt}$.",
  options: [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ],
  correctAnswer: 3,
  correctOption: "d",
  explanation: "Assertion (A) is false: In one-dimensional straight-line motion, velocity has only one spatial degree of freedom. If speed $|v|$ is constant, the particle can only maintain constant velocity $+v$ or $-v$. It cannot reverse direction without its speed momentarily becoming zero. Therefore, constant speed in 1D strictly implies constant velocity, meaning acceleration $a = \\frac{dv}{dt} = 0$.\n\nReason (R) is true: By definition, acceleration is the derivative of velocity with respect to time.",
  subject: "Physics",
  chapter: "Motion in a Straight Line",
  subtopic: "Motion in a straight line/plane",
  difficulty: "hard",
  type: "ASSERTION_REASON"
};

// Map updates to test questions
const updates = [
  { index: 0, data: q1Update },
  { index: 7, data: q8Update },
  { index: 8, data: q9Update },
  { index: 9, data: q10Update },
  { index: 11, data: q12Update },
  { index: 15, data: q16Update },
  { index: 27, data: q28Update },
  { index: 36, data: q37Update },
  { index: 39, data: q40Update },
  { index: 40, data: q41Update },
  { index: 41, data: q42Update },
  { index: 42, data: q43Update },
];

for (const u of updates) {
  const qId = testPaper.questions[u.index];
  const objId = new ObjectId(qId);
  await db.collection("questionBank").updateOne(
    { _id: objId },
    { $set: { ...u.data, updatedAt: new Date() } }
  );
  console.log(`Successfully updated Q${u.index + 1} (${qId})`);
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

console.log("Test 2 updated with 3 diagram questions, 1D kinematics content, and balanced Assertion-Reason questions!");
await client.close();
