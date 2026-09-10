const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Equilibrium of concurrent forces";
const CHAPTER = "Laws of Motion";
const SUBJECT = "Physics";

const AR_OPTIONS = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const questions = [
  // --- 26 ASSERTION-REASON QUESTIONS ---
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A particle subjected to three concurrent coplanar forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ is in translational equilibrium if and only if $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0$.\\nReason: Translational equilibrium of a particle requires the net resultant force acting on it to be strictly zero.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For a particle (where rotational effects and torque are absent), the sole condition for translational equilibrium is $\\sum \\vec{F}_i = 0$. Thus both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: According to Lami's Theorem, if three concurrent coplanar forces keep a particle in equilibrium, then each force is directly proportional to the sine of the angle between the other two forces.\\nReason: Lami's theorem is the trigonometric sine rule applied to the closed triangle formed by the three force vectors.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "If $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0$, the three vectors form a closed triangle. Applying the sine rule gives $\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$, where $\\alpha, \\beta, \\gamma$ are angles between pairs of forces. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A body can be in translational equilibrium even when it is moving with a constant non-zero velocity.\\nReason: When the net force acting on a body is zero, its acceleration is zero, which means its velocity remains constant (dynamic equilibrium).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Translational equilibrium requires $\\vec{a} = 0$, which encompasses both static equilibrium ($\\vec{v} = 0$) and dynamic equilibrium ($\\vec{v} = \\text{constant} \\neq 0$). Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Three coplanar forces of magnitudes $3\\,\\text{N}$, $5\\,\\text{N}$, and $9\\,\\text{N}$ can never keep a particle in equilibrium.\\nReason: Three forces can be in equilibrium only if the sum of any two magnitudes is greater than or equal to the third magnitude ($F_1 + F_2 \\ge F_3$).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Here $3 + 5 = 8 < 9$. The triangle inequality is violated, so the three vectors cannot form a closed triangle, meaning their resultant can never be zero. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If a mass $m$ is suspended by a vertical string and pulled horizontally by a force $F$ until the string makes an angle $\\theta$ with the vertical, the tension in the string is $T = \\frac{mg}{\\cos\\theta}$.\\nReason: For vertical equilibrium of the hanging mass, the upward component of string tension $T\\cos\\theta$ must balance the downward gravitational force $mg$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Resolving forces vertically: $\\sum F_y = T\\cos\\theta - mg = 0 \\implies T = \\frac{mg}{\\cos\\theta}$. Resolving horizontally: $T\\sin\\theta = F$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In the suspended mass system pulled horizontally, the required horizontal force is $F = mg\\tan\\theta$.\\nReason: Dividing the horizontal equilibrium equation $T\\sin\\theta = F$ by the vertical equilibrium equation $T\\cos\\theta = mg$ gives $F = mg\\tan\\theta$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "From $T\\sin\\theta = F$ and $T\\cos\\theta = mg$, taking their ratio directly yields $\\tan\\theta = F/(mg) \\implies F = mg\\tan\\theta$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If four coplanar concurrent forces acting on a particle are in equilibrium, their vector polygon must be closed.\\nReason: The condition for equilibrium $\\sum \\vec{F}_i = 0$ requires that placing the vectors head-to-tail returns to the starting point.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "A null resultant vector geometrically corresponds to a closed polygon of forces when placed head-to-tail in order. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A particle under the action of two equal and opposite forces is always in equilibrium.\\nReason: Two equal and opposite collinear forces produce a zero resultant force on the particle.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For two forces, $\\vec{F}_1 + \\vec{F}_2 = 0 \\iff \\vec{F}_1 = -\\vec{F}_2$. They are equal in magnitude and opposite in direction. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A heavy uniform ball resting in a smooth V-shaped groove experiences normal reaction forces from both inclined walls.\\nReason: The normal reactions act perpendicular to the inclined surfaces and pass through the center of the ball, forming concurrent forces with gravity.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Because the surfaces are smooth, the reaction forces act along the normal to the surface at the contact points. For a spherical ball, these normals pass through the center of mass, making the normal forces and gravity concurrent. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the angle between two equal concurrent forces increases from $0^\\circ$ to $180^\\circ$, their resultant magnitude decreases continuously from $2F$ to $0$.\\nReason: The resultant of two equal forces of magnitude $F$ at an angle $\\theta$ is $R = 2F\\cos(\\theta/2)$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "$R = \\sqrt{F^2 + F^2 + 2F^2\\cos\\theta} = \\sqrt{2F^2(1 + \\cos\\theta)} = 2F\\cos(\\theta/2)$. As $\\theta$ increases from $0^\\circ$ to $180^\\circ$, $\\cos(\\theta/2)$ decreases monotonically from 1 to 0. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A minimum of three non-collinear coplanar forces of unequal magnitudes is required to keep a particle in equilibrium.\\nReason: Two unequal forces can never cancel each other, so at least one more non-parallel force is needed to produce a closed vector triangle.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Two unequal forces have a non-zero resultant whose magnitude lies in $[|F_1 - F_2|, F_1 + F_2]$. Thus at least three forces of unequal magnitudes are required to sum to zero. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A minimum of four non-coplanar forces is required to keep a particle in equilibrium.\\nReason: The resultant of any three non-coplanar forces cannot be zero.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Any two vectors define a plane; the third vector has a component perpendicular to that plane that cannot be cancelled by the first two. Therefore, a fourth vector is required to cancel that out-of-plane component. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a bird sits at the midpoint of a horizontal stretched telephone wire, the wire sags slightly downwards.\\nReason: A finite downward gravitational force $mg$ cannot be balanced by a strictly horizontal tension because a horizontal tension has zero vertical component.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For vertical equilibrium, $2T\\sin\\theta = mg \\implies T = \\frac{mg}{2\\sin\\theta}$. If $\\theta = 0^\\circ$ (completely horizontal), $T \\to \\infty$, which is impossible. Hence the wire must sag by a non-zero angle $\\theta$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: To keep a stretched string carrying a central load perfectly horizontal, an infinite tension would be required.\\nReason: The upward balancing force is $2T\\sin\\theta$, and as the sag angle $\\theta \\to 0$, $\\sin\\theta \\to 0$, requiring $T \\to \\infty$ for any finite load.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "$T = \\frac{W}{2\\sin\\theta}$. As $\\theta \\to 0$, $\\sin\\theta \\to 0 \\implies T \\to \\infty$. Both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In stable equilibrium, a slight displacement of the body produces a restoring force that tends to return it to the equilibrium position.\\nReason: At a position of stable equilibrium, the potential energy of the system is at a local minimum ($\\frac{dU}{dx} = 0$ and $\\frac{d^2 U}{dx^2} > 0$).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For stable equilibrium, potential energy is a minimum, so any small displacement $\\Delta x$ gives a restoring force $F = -\\frac{dU}{dx} \\approx -\\left(\\frac{d^2 U}{dx^2}\\right)\\Delta x$, driving the body back toward the minimum. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: At an unstable equilibrium position, any small displacement produces a force that pushes the particle further away from equilibrium.\\nReason: At an unstable equilibrium point, the potential energy of the particle is at a local maximum ($\\frac{dU}{dx} = 0$ and $\\frac{d^2 U}{dx^2} < 0$).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "At a potential energy maximum, $\\frac{d^2 U}{dx^2} < 0$, so the force $F = -\\frac{dU}{dx}$ has the same sign as displacement $\\Delta x$, accelerating the particle away from equilibrium. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: For a particle in neutral equilibrium, small displacements do not produce any restoring or destabilizing forces.\\nReason: In neutral equilibrium, the potential energy of the system remains constant over a finite neighborhood ($\\frac{dU}{dx} = 0$ and $\\frac{d^2 U}{dx^2} = 0$).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Because potential energy is constant in the vicinity, the force $F = -\\frac{dU}{dx} = 0$ everywhere in that region, meaning the particle remains in equilibrium at any adjacent point. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the resultant of three concurrent forces is zero, their lines of action must meet at a single common point.\\nReason: Forces that act on a single particle are concurrent by definition.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Concurrent forces are forces whose lines of action intersect at a common point. For a single point particle, all forces act at that point and are therefore concurrent. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A particle suspended by two identical strings of equal length attached to points at the same level experiences equal tension in both strings.\\nReason: By symmetry, the angles that the two strings make with the vertical must be identical, leading to equal vertical components $T_1\\cos\\theta = T_2\\cos\\theta$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Symmetry ensures equal angles $\\theta_1 = \\theta_2 = \\theta$. Horizontal balance gives $T_1\\sin\\theta = T_2\\sin\\theta \\implies T_1 = T_2$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the angle between two supporting strings of a hanging load is increased, the tension in each string increases.\\nReason: The vertical equilibrium condition $2T\\cos(\\theta/2) = W$ implies that as $\\theta$ increases, $\\cos(\\theta/2)$ decreases, requiring a larger $T$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Let the total angle between strings be $\\theta$. Then each string makes an angle $\\theta/2$ with the vertical. $2T\\cos(\\theta/2) = W \\implies T = \\frac{W}{2\\cos(\\theta/2)}$. As $\\theta$ increases towards $180^\\circ$, $\\cos(\\theta/2) \\to 0$, so $T \\to \\infty$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The condition $\\sum \\vec{F} = 0$ is both necessary and sufficient for the complete equilibrium of an extended rigid body.\\nReason: An extended rigid body can rotate even if the net external force acting on it is zero.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: For an extended rigid body, both net force $\\sum \\vec{F} = 0$ AND net torque $\\sum \\vec{\\tau} = 0$ must vanish for complete equilibrium. Reason is true: A couple consists of two equal and opposite forces having $\\sum \\vec{F} = 0$ but non-zero torque, producing rotational acceleration.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If three coplanar forces acting on a rigid body keep it in equilibrium, they must be either concurrent or parallel.\\nReason: If the three non-parallel forces do not intersect at a common point, the torque about the intersection of any two forces would be non-zero due to the third force.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Taking torque about the intersection point of two lines of action, their torques vanish. For total torque to be zero, the line of action of the third force must also pass through that same point, making all three concurrent. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A particle placed at the origin under a force field $\\vec{F} = -k x\\hat{i}$ is in stable equilibrium at $x = 0$ (for $k > 0$).\\nReason: The potential energy associated with $\\vec{F} = -k x\\hat{i}$ is $U = \\frac{1}{2}kx^2$, which has a minimum at $x = 0$ since $\\frac{d^2 U}{dx^2} = k > 0$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "At $x = 0$, $F = 0$, so it is an equilibrium position. Since $d^2 U / dx^2 = k > 0$, the potential energy is a minimum, ensuring stable equilibrium. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A particle placed under a force field $\\vec{F} = +k x\\hat{i}$ ($k > 0$) is in unstable equilibrium at $x = 0$.\\nReason: The potential energy is $U = -\\frac{1}{2}kx^2$, so $\\frac{d^2 U}{dx^2} = -k < 0$, representing a maximum of potential energy.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Because $d^2 U / dx^2 = -k < 0$, potential energy has a local maximum at $x = 0$. Any displacement leads to a force $F = +kx$ directing the particle away from equilibrium. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: An object resting on a horizontal floor has normal reaction $N = mg$ only when no other vertical forces are applied.\\nReason: The normal force is an adjusting contact force that adjusts to balance all vertical forces keeping the body in vertical equilibrium.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Normal force adjusts according to $\\sum F_y = 0$. If an upward pulling force $F_{\\text{ext}}$ is applied, $N = mg - F_{\\text{ext}}$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a block of mass $m$ rests on an incline of angle $\\theta$ in equilibrium, the resultant force exerted by the incline on the block is $mg$ acting vertically upwards.\\nReason: The only other force acting on the block is gravity ($mg$ acting vertically downwards), so by equilibrium the total contact force from the incline must equal $mg$ upwards.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The contact force from the incline comprises normal force $N = mg\\cos\\theta$ and static friction $f_s = mg\\sin\\theta$. Their vector resultant is $\\sqrt{N^2 + f_s^2} = \\sqrt{(mg\\cos\\theta)^2 + (mg\\sin\\theta)^2} = mg$, directed vertically upwards to balance gravity. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 7 MCQ QUESTIONS ---
  {
    type: "MCQ",
    question: "A mass of $10\\,\\text{kg}$ is suspended from a ceiling by a light string. It is pulled aside by a horizontal force $F$ until the string makes an angle of $45^\\circ$ with the vertical. What is the value of $F$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [
      "$50\\,\\text{N}$",
      "$100\\,\\text{N}$",
      "$100\\sqrt{2}\\,\\text{N}$",
      "$70.7\\,\\text{N}$"
    ],
    correctAnswer: 1,
    explanation: "Equilibrium conditions: $T\\sin 45^\\circ = F$ and $T\\cos 45^\\circ = mg$. Dividing gives $F = mg\\tan 45^\\circ = 10 \\times 10 \\times 1 = 100\\,\\text{N}$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "In the above problem, what is the tension in the string in equilibrium?",
    options: [
      "$100\\,\\text{N}$",
      "$100\\sqrt{2}\\,\\text{N}$",
      "$200\\,\\text{N}$",
      "$50\\sqrt{2}\\,\\text{N}$"
    ],
    correctAnswer: 1,
    explanation: "Tension is $T = \\frac{mg}{\\cos 45^\\circ} = \\frac{100}{1/\\sqrt{2}} = 100\\sqrt{2}\\,\\text{N}$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "Three concurrent forces $\\vec{F}_1 = 2\\hat{i} + 3\\hat{j}$, $\\vec{F}_2 = -4\\hat{i} + 5\\hat{j}$, and $\\vec{F}_3$ keep a particle in equilibrium. What is $\\vec{F}_3$?",
    options: [
      "$2\\hat{i} - 8\\hat{j}$",
      "$-2\\hat{i} + 8\\hat{j}$",
      "$6\\hat{i} - 2\\hat{j}$",
      "$-6\\hat{i} - 8\\hat{j}$"
    ],
    correctAnswer: 0,
    explanation: "For equilibrium: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0 \\implies (2 - 4)\\hat{i} + (3 + 5)\\hat{j} + \\vec{F}_3 = 0 \\implies -2\\hat{i} + 8\\hat{j} + \\vec{F}_3 = 0 \\implies \\vec{F}_3 = 2\\hat{i} - 8\\hat{j}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A body of mass $m$ is suspended by two strings of equal length attached to points at the same level. If the angle between the two strings is $120^\\circ$, the tension in each string is:",
    options: [
      "$mg$",
      "$mg/2$",
      "$\\frac{mg}{\\sqrt{3}}$",
      "$2mg$"
    ],
    correctAnswer: 0,
    explanation: "The angle each string makes with the vertical is $\\theta = 120^\\circ / 2 = 60^\\circ$. For vertical equilibrium: $2T\\cos 60^\\circ = mg \\implies 2T(0.5) = mg \\implies T = mg$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "Which of the following sets of concurrent coplanar forces CANNOT keep a particle in equilibrium?",
    options: [
      "$2\\,\\text{N}, 3\\,\\text{N}, 4\\,\\text{N}$",
      "$5\\,\\text{N}, 7\\,\\text{N}, 9\\,\\text{N}$",
      "$1\\,\\text{N}, 3\\,\\text{N}, 5\\,\\text{N}$",
      "$10\\,\\text{N}, 10\\,\\text{N}, 10\\,\\text{N}$"
    ],
    correctAnswer: 2,
    explanation: "For equilibrium, the sum of the two smaller forces must be $\\ge$ the largest force. In option C: $1 + 3 = 4 < 5$, violating the triangle inequality. Hence they cannot be in equilibrium. Option C is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A sphere of mass $M$ rests in a smooth V-shaped trough whose sides are inclined at $30^\\circ$ and $60^\\circ$ to the horizontal. What is the normal reaction from the $30^\\circ$ inclined surface?",
    options: [
      "$Mg\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}Mg$",
      "$Mg\\sin 30^\\circ = \\frac{1}{2}Mg$",
      "$Mg$",
      "$Mg\\tan 30^\\circ$"
    ],
    correctAnswer: 0,
    explanation: "Since the trough sides are at $30^\\circ$ and $60^\\circ$, they are mutually perpendicular ($30^\\circ + 60^\\circ = 90^\\circ$). The normal to the $30^\\circ$ surface is at $60^\\circ$ to the horizontal ($30^\\circ$ to vertical). Resolving along this normal gives $N_1 = Mg\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}Mg$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "The potential energy of a particle moving along the $x$-axis is given by $U(x) = 2x^3 - 9x^2 + 12x$. The particle is in stable equilibrium at:",
    options: [
      "$x = 1$",
      "$x = 2$",
      "$x = 3$",
      "$x = 0$"
    ],
    correctAnswer: 1,
    explanation: "$dU/dx = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2) = 0 \\implies x = 1, 2$. Second derivative: $d^2 U / dx^2 = 12x - 18$. At $x = 1$, $12(1) - 18 = -6 < 0$ (unstable). At $x = 2$, $12(2) - 18 = +6 > 0$ (stable). Thus stable equilibrium is at $x = 2$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 20 NUMERICAL QUESTIONS ---
  {
    type: "NUMERICAL",
    question: "A lamp of weight $60\\,\\text{N}$ is suspended from the ceiling by two cords making angles of $30^\\circ$ and $60^\\circ$ with the ceiling. Find the tension (in Newtons) in the cord making an angle of $30^\\circ$ with the ceiling.",
    options: [],
    correctAnswer: 30,
    explanation: "Let tensions be $T_1$ (at $30^\\circ$ to horizontal) and $T_2$ (at $60^\\circ$ to horizontal). The angle between cords is $30^\\circ + 60^\\circ = 90^\\circ$. By Lami's theorem or resolution: $T_1 = W\\sin 30^\\circ = 60 \\times 0.5 = 30\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the lamp problem above, what is the tension (in Newtons) in the cord making an angle of $60^\\circ$ with the ceiling? (Round to 2 decimal places: $60\\sin 60^\\circ = 60 \\times 0.866 = 51.96\\,\\text{N}$)",
    options: [],
    correctAnswer: 51.96,
    explanation: "$T_2 = W\\sin 60^\\circ = 60 \\times \\frac{\\sqrt{3}}{2} = 30\\sqrt{3} \\approx 51.96\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A mass of $5\\,\\text{kg}$ is suspended by a string of length $2\\,\\text{m}$. A horizontal force $F$ is applied to hold the mass at a horizontal distance of $1.2\\,\\text{m}$ from the vertical. What is the magnitude of $F$ in Newtons? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 37.5,
    explanation: "$\\sin\\theta = 1.2/2 = 0.6 \\implies \\cos\\theta = 0.8 \\implies \\tan\\theta = 0.6/0.8 = 0.75$. Horizontal force $F = mg\\tan\\theta = 5 \\times 10 \\times 0.75 = 37.5\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the previous problem, what is the tension in the string in Newtons?",
    options: [],
    correctAnswer: 62.5,
    explanation: "Tension $T = \\frac{mg}{\\cos\\theta} = \\frac{50}{0.8} = 62.5\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Three forces $\\vec{F}_1 = 3\\hat{i} + 4\\hat{j}$, $\\vec{F}_2 = -7\\hat{i} + 2\\hat{j}$, and $\\vec{F}_3 = a\\hat{i} + b\\hat{j}$ maintain equilibrium. Calculate the value of $(a + b)$.",
    options: [],
    correctAnswer: -2,
    explanation: "$\\sum \\vec{F} = 0 \\implies (3 - 7 + a)\\hat{i} + (4 + 2 + b)\\hat{j} = 0 \\implies a = 4, b = -6$. Then $a + b = 4 + (-6) = -2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of weight $W = 100\\,\\text{N}$ hangs from the midpoint of a horizontal rope of length $10\\,\\text{m}$ supported at both ends. If the center sags by $0.5\\,\\text{m}$, find the tension in the rope in Newtons. (Round to nearest integer: $\\sin\\theta \\approx 0.5 / 5 = 0.1 \\implies T = 100 / (2 \\times 0.1) = 500\\,\\text{N}$)",
    options: [],
    correctAnswer: 500,
    explanation: "Half-length is $L/2 = 5\\,\\text{m}$. Angle of sag satisfies $\\sin\\theta = \\frac{0.5}{5} = 0.1$. Vertical equilibrium gives $2T\\sin\\theta = W \\implies 2T(0.1) = 100 \\implies 0.2 T = 100 \\implies T = 500\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two forces $F_1 = 20\\,\\text{N}$ and $F_2 = 20\\,\\text{N}$ act at an angle of $60^\\circ$ on a particle. What third force (in Newtons) must be applied to produce equilibrium? (Round to 2 decimal places: $20\\sqrt{3} \\approx 34.64$)",
    options: [],
    correctAnswer: 34.64,
    explanation: "Resultant of the two forces is $R = 2F\\cos(60^\\circ / 2) = 2(20)\\cos 30^\\circ = 40 \\times \\frac{\\sqrt{3}}{2} = 20\\sqrt{3} \\approx 34.64\\,\\text{N}$. The balancing force must be equal and opposite, of magnitude $34.64\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "The potential energy function of a particle is $U(x) = x^2 - 4x + 7$. What is the position $x$ of equilibrium in meters?",
    options: [],
    correctAnswer: 2,
    explanation: "Equilibrium occurs where $dU/dx = 0 \\implies 2x - 4 = 0 \\implies x = 2\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the previous problem, what is the value of the second derivative $\\frac{d^2 U}{dx^2}$ at equilibrium (in $\\text{J/m}^2$)?",
    options: [],
    correctAnswer: 2,
    explanation: "$d^2 U / dx^2 = 2\\,\\text{J/m}^2 > 0$ (confirming stable equilibrium).",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform sphere of mass $6\\,\\text{kg}$ is suspended by a string attached to a smooth vertical wall. The string makes an angle of $30^\\circ$ with the wall. Find the normal force exerted by the wall on the sphere in Newtons. (Take $g = 10\\,\\text{m/s}^2$. Round to 2 decimal places: $60\\tan 30^\\circ = 60/\\sqrt{3} \\approx 34.64\\,\\text{N}$)",
    options: [],
    correctAnswer: 34.64,
    explanation: "Vertical equilibrium: $T\\cos 30^\\circ = mg = 60\\,\\text{N}$. Horizontal equilibrium: $N = T\\sin 30^\\circ$. Dividing gives $N = mg\\tan 30^\\circ = 60 / \\sqrt{3} \\approx 34.64\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the previous problem, what is the tension in the string in Newtons? (Round to 2 decimal places: $60/\\cos 30^\\circ = 120/\\sqrt{3} \\approx 69.28\\,\\text{N}$)",
    options: [],
    correctAnswer: 69.28,
    explanation: "Tension is $T = \\frac{mg}{\\cos 30^\\circ} = \\frac{60}{\\sqrt{3}/2} = \\frac{120}{\\sqrt{3}} \\approx 69.28\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A ring of mass $0.2\\,\\text{kg}$ is threaded on a smooth horizontal wire. A horizontal force $F$ pulls a string attached to the ring at an angle of $30^\\circ$ above the horizontal. If the normal force exerted by the wire on the ring becomes zero, what is the magnitude of $F$ in Newtons? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 4,
    explanation: "Vertical equilibrium of ring: $N + F\\sin 30^\\circ = mg$. For $N = 0$: $F\\sin 30^\\circ = mg \\implies F(0.5) = 0.2 \\times 10 = 2 \\implies F = 4\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A particle is acted upon by four concurrent coplanar forces of magnitudes $10\\,\\text{N}, 20\\,\\text{N}, 10\\,\\text{N}, 20\\,\\text{N}$ directed along North, East, South, and West respectively. What is the net resultant force on the particle in Newtons?",
    options: [],
    correctAnswer: 0,
    explanation: "Along North-South: $10\\,\\text{N} - 10\\,\\text{N} = 0$. Along East-West: $20\\,\\text{N} - 20\\,\\text{N} = 0$. Resultant force is $0\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A load of $200\\,\\text{N}$ is supported symmetrically by two cables. Each cable makes an angle of $45^\\circ$ with the ceiling. Find the tension in each cable in Newtons. (Round to 2 decimal places: $200 / (2\\sin 45^\\circ) = 100\\sqrt{2} \\approx 141.42\\,\\text{N}$)",
    options: [],
    correctAnswer: 141.42,
    explanation: "$2T\\sin 45^\\circ = 200 \\implies 2T(1/\\sqrt{2}) = 200 \\implies T\\sqrt{2} = 200 \\implies T = 100\\sqrt{2} \\approx 141.42\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of weight $50\\,\\text{N}$ rests on a smooth inclined plane of angle $30^\\circ$. What force applied parallel to the incline is needed to keep the block in equilibrium?",
    options: [],
    correctAnswer: 25,
    explanation: "Component of weight down the incline is $W\\sin 30^\\circ = 50 \\times 0.5 = 25\\,\\text{N}$. To balance it, an upward force along the incline of $25\\,\\text{N}$ is required.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the previous problem, what horizontal force $F_h$ (applied horizontally, not along the incline) is required to keep the block in equilibrium? (Round to 2 decimal places: $50\\tan 30^\\circ = 50/\\sqrt{3} \\approx 28.87\\,\\text{N}$)",
    options: [],
    correctAnswer: 28.87,
    explanation: "For equilibrium along the incline: $F_h\\cos 30^\\circ = W\\sin 30^\\circ \\implies F_h = W\\tan 30^\\circ = 50 / \\sqrt{3} \\approx 28.87\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two concurrent forces of magnitudes $8\\,\\text{N}$ and $6\\,\\text{N}$ act at right angles to each other. What is the magnitude of the balancing force in Newtons?",
    options: [],
    correctAnswer: 10,
    explanation: "$R = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\,\\text{N}$. The balancing force has magnitude $10\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A particle of mass $1\\,\\text{kg}$ is held in equilibrium under three coplanar forces. Two forces are $F_1 = 12\\,\\text{N}$ and $F_2 = 5\\,\\text{N}$ directed along the positive $x$ and negative $y$ axes respectively. What is the magnitude of the third force $F_3$ in Newtons?",
    options: [],
    correctAnswer: 13,
    explanation: "$F_3 = \\sqrt{12^2 + (-5)^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A potential energy function is given by $U(x) = \\frac{a}{x^2} - \\frac{b}{x}$ where $a = 2\\,\\text{J}\\cdot\\text{m}^2$ and $b = 4\\,\\text{J}\\cdot\\text{m}$. Find the equilibrium position $x_0$ in meters.",
    options: [],
    correctAnswer: 1,
    explanation: "$dU/dx = -\\frac{2a}{x^3} + \\frac{b}{x^2} = 0 \\implies \\frac{b}{x^2} = \\frac{2a}{x^3} \\implies x_0 = \\frac{2a}{b} = \\frac{2(2)}{4} = 1\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the Lennard-Jones style potential above ($a = 2, b = 4$), what is the minimum potential energy $U(x_0)$ in Joules at the equilibrium position?",
    options: [],
    correctAnswer: -2,
    explanation: "$U(1) = \\frac{2}{1^2} - \\frac{4}{1} = 2 - 4 = -2\\,\\text{J}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  }
];

const arCount = questions.filter(q => q.type === 'ASSERTION_REASON').length;
const mcqCount = questions.filter(q => q.type === 'MCQ').length;
const numCount = questions.filter(q => q.type === 'NUMERICAL').length;

console.log(`Part 5 generated: ${questions.length} questions (AR: ${arCount}, MCQ: ${mcqCount}, NUM: ${numCount})`);

const outPath = path.join(__dirname, 'data_jee_lom_part5.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
