import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';

const envFile = fs.readFileSync('.env.local', 'utf8');
let uri = '';
envFile.split('\n').forEach(line => {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/['"]/g, '');
  }
});

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const testId = 'neet-SUBTOPIC-Physics-Graphical-analysis-of-motion-(x-t,-v-t-graphs)';
const paper = await db.collection('testPapers').findOne({ testId });
if (!paper) throw new Error('Paper not found: ' + testId);

console.log('Auditing and updating Test 1:', testId);

// 1. Update Q2 (Diagram Question 1: Trapezoidal v-t Graph)
const q2Tikz = `\\begin{tikzpicture}
  \\begin{axis}[
    width=9cm, height=5.5cm,
    xlabel={$t\\text{ (s)}$},
    ylabel={$v\\text{ (m/s)}$},
    xmin=0, xmax=14,
    ymin=0, ymax=25,
    xtick={0, 4, 8, 12},
    ytick={0, 10, 20},
    grid=both,
    grid style={dashed, gray!30},
    axis lines=left,
    enlargelimits=false
  ]
    \\addplot[fill=blue!10, draw=none] coordinates {(0,0) (4,20) (4,0)} \\closedcycle;
    \\addplot[fill=green!10, draw=none] coordinates {(4,0) (4,20) (8,20) (8,0)} \\closedcycle;
    \\addplot[fill=red!10, draw=none] coordinates {(8,0) (8,20) (12,0)} \\closedcycle;
    \\addplot[color=blue, ultra thick] coordinates {(0,0) (4,20) (8,20) (12,0)};
  \\end{axis}
\\end{tikzpicture}`;

await db.collection('questionBank').updateOne(
  { _id: paper.questions[1] },
  {
    $set: {
      question: "The velocity–time ($v-t$) graph of a body moving along a straight line is shown in the accompanying figure. What is the ratio of the distance traveled by the body during its uniform acceleration phase to the total displacement of the body in the entire $12\\text{ s}$ interval?",
      options: [
        "$1 : 4$",
        "$1 : 2$",
        "$1 : 3$",
        "$2 : 5$"
      ],
      correctAnswer: 0,
      correctOption: "a",
      explanation: "From the given $v-t$ graph:\n1. Distance during uniform acceleration ($t = 0$ to $4\\text{ s}$):\n$s_1 = \\text{Area of first triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 4 \\times 20 = 40\\text{ m}$.\n\n2. Distance during constant velocity ($t = 4$ to $8\\text{ s}$):\n$s_2 = \\text{Area of rectangle} = 4 \\times 20 = 80\\text{ m}$.\n\n3. Distance during uniform deceleration ($t = 8$ to $12\\text{ s}$):\n$s_3 = \\text{Area of final triangle} = \\frac{1}{2} \\times 4 \\times 20 = 40\\text{ m}$.\n\nTotal displacement $s_{\\text{total}} = s_1 + s_2 + s_3 = 40 + 80 + 40 = 160\\text{ m}$ (or by trapezoid formula: $\\frac{1}{2}(12 + 4) \\times 20 = 160\\text{ m}$).\n\nRatio $= \\frac{s_1}{s_{\\text{total}}} = \\frac{40\\text{ m}}{160\\text{ m}} = \\frac{1}{4}$.",
      image: "/images/diagrams/kinematics/test1_q2_vt_graph.svg",
      diagramRequired: true,
      diagramLatex: q2Tikz,
      diagramType: "PGFPLOTS",
      diagramRenderStatus: "VERIFIED",
      diagramAssetUrl: "/images/diagrams/kinematics/test1_q2_vt_graph.svg",
      difficulty: "Medium",
      updatedAt: new Date()
    }
  }
);

// 2. Update Q21 (Diagram Question 2: Meeting of Two Bodies from x-t Graph)
const q21Tikz = `\\begin{tikzpicture}
  \\begin{axis}[
    width=9cm, height=5.5cm,
    xlabel={$t\\text{ (s)}$},
    ylabel={$x\\text{ (m)}$},
    xmin=0, xmax=7,
    ymin=0, ymax=80,
    xtick={0, 2, 4, 6},
    ytick={0, 20, 40, 60},
    grid=both,
    grid style={dashed, gray!30},
    axis lines=left
  ]
    \\addplot[color=blue, very thick] coordinates {(0,0) (4,60) (5.33,80)};
    \\addplot[color=orange, very thick] coordinates {(0,40) (4,60) (6,70)};
    \\node[label={above:\\textbf{P(4, 60)}}, circle, fill=purple, inner sep=2pt] at (axis cs:4,60) {};
  \\end{axis}
\\end{tikzpicture}`;

await db.collection('questionBank').updateOne(
  { _id: paper.questions[20] },
  {
    $set: {
      question: "The position–time ($x-t$) graphs of two particles $A$ and $B$ moving along the same straight line are shown in the figure. At what time $t$ and position $x$ does particle $A$ overtake particle $B$, and what is the relative velocity of $A$ with respect to $B$ at the instant of meeting?",
      options: [
        "$t = 4\\text{ s},\\ x = 60\\text{ m},\\ v_{AB} = 10\\text{ m/s}$",
        "$t = 4\\text{ s},\\ x = 60\\text{ m},\\ v_{AB} = 5\\text{ m/s}$",
        "$t = 3\\text{ s},\\ x = 45\\text{ m},\\ v_{AB} = 10\\text{ m/s}$",
        "$t = 5\\text{ s},\\ x = 75\\text{ m},\\ v_{AB} = 15\\text{ m/s}$"
      ],
      correctAnswer: 0,
      correctOption: "a",
      explanation: "From the given position–time graph:\n1. The two straight lines intersect at the point $P(t = 4\\text{ s}, x = 60\\text{ m})$. Thus, particle $A$ overtakes particle $B$ at $t = 4\\text{ s}$ and position $x = 60\\text{ m}$.\n\n2. Velocity of particle $A$ (slope of line $A$):\n$v_A = \\frac{\\Delta x_A}{\\Delta t} = \\frac{60 - 0}{4 - 0} = 15\\text{ m/s}$.\n\n3. Velocity of particle $B$ (slope of line $B$):\n$v_B = \\frac{\\Delta x_B}{\\Delta t} = \\frac{60 - 40}{4 - 0} = \\frac{20}{4} = 5\\text{ m/s}$.\n\n4. Relative velocity of $A$ with respect to $B$:\n$v_{AB} = v_A - v_B = 15\\text{ m/s} - 5\\text{ m/s} = 10\\text{ m/s}$.",
      image: "/images/diagrams/kinematics/test1_q21_xt_meeting.svg",
      diagramRequired: true,
      diagramLatex: q21Tikz,
      diagramType: "PGFPLOTS",
      diagramRenderStatus: "VERIFIED",
      diagramAssetUrl: "/images/diagrams/kinematics/test1_q21_xt_meeting.svg",
      difficulty: "Medium",
      updatedAt: new Date()
    }
  }
);

// 3. Update Q24 (Diagram Question 3: v-t Graph with Negative Region Area)
const q24Tikz = `\\begin{tikzpicture}
  \\begin{axis}[
    width=9cm, height=5.5cm,
    xlabel={$t\\text{ (s)}$},
    ylabel={$v\\text{ (m/s)}$},
    xmin=0, xmax=7,
    ymin=-6, ymax=10,
    xtick={0, 2, 4, 5, 6},
    ytick={-4, 0, 8},
    grid=both,
    grid style={dashed, gray!30},
    axis lines=center
  ]
    \\addplot[fill=blue!15, draw=none] coordinates {(0,0) (2,8) (4,0)} \\closedcycle;
    \\addplot[fill=red!15, draw=none] coordinates {(4,0) (5,-4) (6,0)} \\closedcycle;
    \\addplot[color=blue, ultra thick] coordinates {(0,0) (2,8) (4,0) (5,-4) (6,0)};
  \\end{axis}
\\end{tikzpicture}`;

await db.collection('questionBank').updateOne(
  { _id: paper.questions[23] },
  {
    $set: {
      question: "The velocity–time ($v-t$) graph of an object moving in a straight line is shown in the figure. What are the total distance traveled and the magnitude of the net displacement of the object in the time interval from $t = 0$ to $t = 6\\text{ s}$?",
      options: [
        "$\\text{Distance} = 20\\text{ m},\\ |\\text{Displacement}| = 12\\text{ m}$",
        "$\\text{Distance} = 12\\text{ m},\\ |\\text{Displacement}| = 12\\text{ m}$",
        "$\\text{Distance} = 16\\text{ m},\\ |\\text{Displacement}| = 8\\text{ m}$",
        "$\\text{Distance} = 24\\text{ m},\\ |\\text{Displacement}| = 16\\text{ m}$"
      ],
      correctAnswer: 0,
      correctOption: "a",
      explanation: "From the given $v-t$ graph:\n1. Area of upper triangle ($t = 0$ to $4\\text{ s}$):\n$A_1 = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 4 \\times 8 = +16\\text{ m}$.\n\n2. Area of lower triangle ($t = 4$ to $6\\text{ s}$):\n$A_2 = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 2 \\times (-4) = -4\\text{ m}$.\n\n3. Total distance is the sum of magnitudes of the areas:\n$\\text{Distance} = |A_1| + |A_2| = 16\\text{ m} + 4\\text{ m} = 20\\text{ m}$.\n\n4. Net displacement is the algebraic sum of the areas:\n$\\text{Displacement} = A_1 + A_2 = 16\\text{ m} + (-4\\text{ m}) = +12\\text{ m}$.\nMagnitude of displacement $= 12\\text{ m}$.",
      image: "/images/diagrams/kinematics/test1_q24_vt_area.svg",
      diagramRequired: true,
      diagramLatex: q24Tikz,
      diagramType: "PGFPLOTS",
      diagramRenderStatus: "VERIFIED",
      diagramAssetUrl: "/images/diagrams/kinematics/test1_q24_vt_area.svg",
      difficulty: "Medium",
      updatedAt: new Date()
    }
  }
);

// 4. Update Q35 (Diagram Question 4: Curved v-t Graph with Extrema Points P, Q, R, S)
const q35Tikz = `\\begin{tikzpicture}
  \\begin{axis}[
    width=9cm, height=5.5cm,
    xlabel={$t$},
    ylabel={$v$},
    axis lines=center,
    ticks=none
  ]
    \\addplot[color=blue, very thick, smooth] coordinates {(0,0) (1,1.2) (2,2) (3.5,0) (5,-1.5) (6.5,0)};
    \\node[label={above left:$P$}, circle, fill=orange, inner sep=2pt] at (axis cs:1,1.2) {};
    \\node[label={above:$Q$}, circle, fill=green!70!black, inner sep=2.5pt] at (axis cs:2,2) {};
    \\node[label={above right:$R$}, circle, fill=red, inner sep=2pt] at (axis cs:3.5,0) {};
    \\node[label={below:$S$}, circle, fill=gray, inner sep=2pt] at (axis cs:5,-1.5) {};
  \\end{axis}
\\end{tikzpicture}`;

await db.collection('questionBank').updateOne(
  { _id: paper.questions[34] },
  {
    $set: {
      question: "The velocity–time ($v-t$) curve of a particle moving along a straight line is shown in the figure with four designated points $P, Q, R,$ and $S$. At which of these points is the instantaneous acceleration of the particle zero while its speed is maximum in the positive direction?",
      options: [
        "Point $P$",
        "Point $Q$",
        "Point $R$",
        "Point $S$"
      ],
      correctAnswer: 1,
      correctOption: "b",
      explanation: "In a velocity–time ($v-t$) graph, the slope of the tangent at any point gives the instantaneous acceleration ($a = \\frac{dv}{dt}$):\n- At point $P$: The slope is positive ($a > 0$) and velocity is positive ($v > 0$).\n- At point $Q$: The tangent is strictly horizontal (slope $= 0 \\implies a = 0$). Furthermore, $Q$ is the crest of the curve, representing maximum positive velocity ($v = v_{\\max} > 0$). Hence, speed is maximum in the positive direction.\n- At point $R$: The curve crosses the time axis, so velocity is zero ($v = 0$), but the slope is negative ($a < 0$).\n- At point $S$: The tangent is horizontal ($a = 0$), but this is in the negative velocity region ($v < 0$).\n\nTherefore, point $Q$ satisfies both conditions: $a = 0$ and speed is maximum in the positive direction.",
      image: "/images/diagrams/kinematics/test1_q35_vt_inflection.svg",
      diagramRequired: true,
      diagramLatex: q35Tikz,
      diagramType: "PGFPLOTS",
      diagramRenderStatus: "VERIFIED",
      diagramAssetUrl: "/images/diagrams/kinematics/test1_q35_vt_inflection.svg",
      difficulty: "Difficult",
      updatedAt: new Date()
    }
  }
);

// 5. Section B: Q40 to Q45 (6 Assertion-Reason Questions with NEET 4-Option Format)
const arOptions = [
  "Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of Assertion (A).",
  "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).",
  "Assertion (A) is true, but Reason (R) is false.",
  "Assertion (A) is false, but Reason (R) is true."
];

// Q40
await db.collection('questionBank').updateOne(
  { _id: paper.questions[39] },
  {
    $set: {
      question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The slope of the position–time ($x-t$) graph gives the instantaneous velocity of a particle, whereas the slope of the velocity–time ($v-t$) graph gives its instantaneous acceleration.\n\nReason (R): Instantaneous velocity is mathematically defined as the first time-derivative of position ($v = \\frac{dx}{dt}$), and instantaneous acceleration is defined as the first time-derivative of velocity ($a = \\frac{dv}{dt}$).",
      options: arOptions,
      correctAnswer: 0,
      correctOption: "a",
      questionType: "Assertion–Reasoning",
      type: "ASSERTION_REASON",
      explanation: "Assertion (A) is true: The slope of the tangent to an $x-t$ curve at any instant equals $\\frac{dx}{dt}$, which is instantaneous velocity. Similarly, the slope of the tangent to a $v-t$ curve equals $\\frac{dv}{dt}$, which is instantaneous acceleration.\nReason (R) is true: By calculus definitions, $v = \\frac{dx}{dt}$ and $a = \\frac{dv}{dt}$.\nSince Reason (R) provides the foundational calculus definition explaining why the slopes yield velocity and acceleration respectively, Reason (R) is the correct explanation of Assertion (A).",
      difficulty: "Medium",
      updatedAt: new Date()
    }
  }
);

// Q41
await db.collection('questionBank').updateOne(
  { _id: paper.questions[40] },
  {
    $set: {
      question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The area bounded by a velocity–time ($v-t$) curve and the time axis between $t_1$ and $t_2$ represents total distance traveled only if the particle does not reverse its direction of motion during that interval.\n\nReason (R): When a particle reverses its direction of motion, the algebraic area under the $v-t$ graph yields net displacement, whereas the arithmetic sum of the absolute values of the areas above and below the time axis yields the total distance.",
      options: arOptions,
      correctAnswer: 0,
      correctOption: "a",
      questionType: "Assertion–Reasoning",
      type: "ASSERTION_REASON",
      explanation: "Assertion (A) is true: If velocity remains of constant sign ($v \\ge 0$ throughout), displacement equals distance, and the area directly gives total distance. If velocity changes sign, displacement and distance diverge.\nReason (R) is true: $\\Delta x = \\int_{t_1}^{t_2} v(t)\\, dt$ gives displacement (areas below axis are subtracted), whereas total distance $s = \\int_{t_1}^{t_2} |v(t)|\\, dt$ (areas below axis are counted positively).\nTherefore, Reason (R) correctly explains Assertion (A).",
      difficulty: "Difficult",
      updatedAt: new Date()
    }
  }
);

// Q42
await db.collection('questionBank').updateOne(
  { _id: paper.questions[41] },
  {
    $set: {
      question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A particle moving along a straight line can have zero instantaneous velocity and simultaneously non-zero acceleration.\n\nReason (R): For a ball thrown vertically upwards under gravity, at the highest point of its trajectory, the instantaneous velocity is zero while the acceleration is $g = 9.8\\text{ m/s}^2$ directed downward.",
      options: arOptions,
      correctAnswer: 0,
      correctOption: "a",
      questionType: "Assertion–Reasoning",
      type: "ASSERTION_REASON",
      explanation: "Assertion (A) is true: Acceleration is the rate of change of velocity, not the velocity itself. Even when velocity passes through zero at a turning point, its rate of change can be non-zero.\nReason (R) is true: When a ball reaches maximum height, $v = 0$ momentarily, but gravity acts continuously downward with $a = -g = -9.8\\text{ m/s}^2$.\nReason (R) provides the definitive physical verification that directly confirms and explains Assertion (A).",
      difficulty: "Medium",
      updatedAt: new Date()
    }
  }
);

// Q43
await db.collection('questionBank').updateOne(
  { _id: paper.questions[42] },
  {
    $set: {
      question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A speed–time graph of a moving object can never have a negative slope.\n\nReason (R): Speed is a scalar quantity and can never be negative.",
      options: arOptions,
      correctAnswer: 3,
      correctOption: "d",
      questionType: "Assertion–Reasoning",
      type: "ASSERTION_REASON",
      explanation: "Assertion (A) is false: While speed itself cannot be negative ($v \\ge 0$), the slope of a speed–time graph represents the rate of change of speed (tangential acceleration/deceleration). Whenever a moving object applies brakes or slows down, its speed decreases with time, resulting in a negative slope ($\\\\frac{dv}{dt} < 0$).\nReason (R) is true: Speed is the magnitude of velocity, so by definition speed $\\\\ge 0$ (non-negative scalar).\nTherefore, Assertion (A) is false, but Reason (R) is true.",
      difficulty: "Difficult",
      updatedAt: new Date()
    }
  }
);

// Q44
await db.collection('questionBank').updateOne(
  { _id: paper.questions[43] },
  {
    $set: {
      question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the position–time ($x-t$) graph of a particle is concave upwards (opens upwards), the acceleration of the particle is positive.\n\nReason (R): Concavity of a curve is determined by its second derivative; when $\\frac{d^2x}{dt^2} > 0$, the slope $\\frac{dx}{dt}$ (velocity) is continuously increasing with time.",
      options: arOptions,
      correctAnswer: 0,
      correctOption: "a",
      questionType: "Assertion–Reasoning",
      type: "ASSERTION_REASON",
      explanation: "Assertion (A) is true: An $x-t$ graph that is concave upward indicates that the slope is becoming steeper in the positive direction (or less negative), which means velocity is increasing, corresponding to positive acceleration ($a > 0$).\nReason (R) is true: From calculus, concavity upward corresponds to $\\frac{d^2x}{dt^2} > 0$. Since acceleration $a = \\frac{d^2x}{dt^2}$, positive second derivative means positive acceleration and an increasing velocity function.\nTherefore, Reason (R) is the correct explanation of Assertion (A).",
      difficulty: "Difficult",
      updatedAt: new Date()
    }
  }
);

// Q45
await db.collection('questionBank').updateOne(
  { _id: paper.questions[44] },
  {
    $set: {
      question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The area enclosed under an acceleration–time ($a-t$) graph between times $t_1$ and $t_2$ gives the final velocity of the particle at time $t_2$.\n\nReason (R): By definition, acceleration is $a = \\frac{dv}{dt}$; integrating $a$ with respect to time yields $\\int_{t_1}^{t_2} a\\, dt = v(t_2) - v(t_1) = \\Delta v$, which represents the change in velocity rather than the final velocity itself.",
      options: arOptions,
      correctAnswer: 3,
      correctOption: "d",
      questionType: "Assertion–Reasoning",
      type: "ASSERTION_REASON",
      explanation: "Assertion (A) is false: The area under the $a-t$ graph equals the change in velocity $\\\\Delta v = v_2 - v_1$. It equals the final velocity $v_2$ only if the initial velocity $v_1$ is strictly zero. In general, final velocity $v_2 = v_1 + \\\\text{Area}$.\nReason (R) is true: Integrating $a = \\\\frac{dv}{dt}$ gives $\\\\int_{t_1}^{t_2} a\\\\, dt = v(t_2) - v(t_1) = \\\\Delta v$.\nTherefore, Assertion (A) is false, but Reason (R) is true.",
      difficulty: "Difficult",
      updatedAt: new Date()
    }
  }
);

console.log('Test 1 successfully updated in Central Question Bank!');
await client.close();
