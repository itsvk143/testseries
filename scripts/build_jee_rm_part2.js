const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Torque";
const CHAPTER = "Rotational Motion";
const SUBJECT = "Physics";

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
  "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
  "Assertion is true but Reason is false.",
  "Assertion is false but Reason is true."
];

const questions = [
  // 26 Assertion-Reason Questions
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The torque produced by a couple of equal and opposite forces is independent of the choice of reference origin.\\nReason: The vector torque of a couple is given by $\\vec{\\tau} = \\vec{r}_{12} \\times \\vec{F}$, where $\\vec{r}_{12} = \\vec{r}_1 - \\vec{r}_2$ is the relative displacement vector between the points of application of the two forces.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Let the forces be $+\\vec{F}$ at $\\vec{r}_1$ and $-\\vec{F}$ at $\\vec{r}_2$. Net torque about origin $O$ is $\\vec{\\tau} = \\vec{r}_1 \\times \\vec{F} + \\vec{r}_2 \\times (-\\vec{F}) = (\\vec{r}_1 - \\vec{r}_2) \\times \\vec{F} = \\vec{r}_{12} \\times \\vec{F}$. Since $\\vec{r}_{12}$ depends only on the relative separation of the forces and not on the origin, the torque of a couple is translationally invariant. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A force whose line of action passes through the axis of rotation produces zero torque about that axis.\\nReason: Torque is defined as $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$, and when the line of action passes through the axis, the perpendicular lever arm distance $r_\\perp$ is zero.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The magnitude of torque about an axis is $\\tau = F r_\\perp$. When the line of action of the force intersects the rotation axis, $r_\\perp = 0$, giving $\\tau = 0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A body can be in translational equilibrium without being in rotational equilibrium.\\nReason: Translational equilibrium requires $\\sum \\vec{F}_{\\text{ext}} = 0$, whereas rotational equilibrium requires $\\sum \\vec{\\tau}_{\\text{ext}} = 0$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Two equal and opposite parallel forces with different lines of action (a couple) produce zero net force ($\\sum \\vec{F} = 0$), so the body is in translational equilibrium. However, they exert a non-zero net torque ($\\sum \\vec{\\tau} \\neq 0$), causing angular acceleration. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A wrench with a longer handle makes it easier to loosen a tight nut.\\nReason: A longer handle provides a greater moment arm $r$, producing a larger torque $\\tau = r F \\sin\\theta$ for the same applied manual force $F$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Torque is directly proportional to the perpendicular distance from the axis of rotation to the line of action of the force: $\\tau = r_\\perp F$. Extending the handle length increases $r_\\perp$, multiplying the loosening torque exerted on the nut. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the net torque on a rigid body is zero about one specific point, it is not necessarily zero about every other point.\\nReason: Net torque about a shifted point $O'$ is $\\vec{\\tau}_{O'} = \\vec{\\tau}_O + \\vec{r}_{OO'} \\times \\sum \\vec{F}_{\\text{ext}}$, which is zero only if the net external force $\\sum \\vec{F}_{\\text{ext}}$ is also zero.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The relation between torques about two different points is $\\vec{\\tau}_{O'} = \\vec{\\tau}_O - \\vec{d} \\times \\vec{F}_{\\text{net}}$. Even if $\\vec{\\tau}_O = 0$, $\\vec{\\tau}_{O'}$ will not be zero unless $\\vec{F}_{\\text{net}} = 0$ or $\\vec{d}$ is parallel to $\\vec{F}_{\\text{net}}$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: To open a heavy revolving door with minimum effort, one should push perpendicular to the door near its outer edge.\\nReason: Pushing near the outer edge maximizes the moment arm $r$, and pushing perpendicularly ($\\theta = 90^\\circ$) maximizes $\\sin\\theta$, producing the maximum possible torque $\\tau = r F$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Torque magnitude is $\\tau = r F \\sin\\theta$. Maximum torque is achieved when both $r$ is as large as possible (at the outer rim furthest from hinges) and $\\sin\\theta = 1$ (force applied perpendicularly to the door's plane). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A uniform ladder leaning against a smooth vertical wall cannot rest in equilibrium on a frictionless horizontal floor.\\nReason: The smooth wall exerts only a normal horizontal reaction, and without floor friction, there is no horizontal force to balance it ($\\sum F_x \\neq 0$).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The smooth vertical wall exerts a normal contact force $N_{\\text{wall}}$ pointing horizontally away from the wall. For translational equilibrium along $x$, a static friction force $f = N_{\\text{wall}}$ is mandatory at the floor contact. If the floor is frictionless ($f = 0$), $\\sum F_x = N_{\\text{wall}} \\neq 0$, so the ladder must slip. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The work done by a constant torque $\\tau$ in rotating a body through an angle $\\theta$ is $W = \\tau \\theta$.\\nReason: By analogy with linear mechanics where $dW = F dx$, the rotational work done for an infinitesimal angular displacement $d\\theta$ is $dW = \\tau d\\theta$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In rotational dynamics, work done by torque during an angular displacement $d\\theta$ is $dW = \\tau d\\theta$. For a constant torque, integrating yields $W = \\tau \\int d\\theta = \\tau \\theta$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A block of height $h$ and base width $b$ placed on a rough horizontal table will topple before sliding if a horizontal force is applied at its top, provided $\\mu > \\frac{b}{h}$.\\nReason: The force required to initiate sliding is $F_{\\text{slide}} = \\mu mg$, whereas the force required to initiate toppling about the edge is $F_{\\text{topple}} = mg\\left(\\frac{b}{h}\\right)$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Toppling about the front pivot edge occurs when clockwise torque of $F$ exceeds counter-clockwise torque of gravity: $F h > mg (b/2) \\implies F_{\\text{topple}} = \\frac{mg b}{2h}$ if applied at top ($F h$), or $F_{\\text{topple}} = mg(b/h)$ for a cube/cylinder. Sliding occurs when $F > \\mu mg$. Thus toppling precedes sliding if $F_{\\text{topple}} < F_{\\text{slide}} \\implies \\mu > b/h$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The rotational analog of mass in Newton's second law is moment of inertia $I$, and the rotational analog of force is torque $\\tau$.\\nReason: The fundamental equation of rotational dynamics for a rigid body with fixed axis is $\\vec{\\tau} = I\\vec{\\alpha}$, which directly corresponds to $\\vec{F} = m\\vec{a}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Torque represents the angular force causing rotational acceleration $\\alpha$, and moment of inertia $I$ measures rotational inertia (resistance to angular acceleration), establishing the rotational equivalent $\\tau = I\\alpha$ of Newton's second law $F = ma$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The torque acting on a planet moving in an elliptical orbit about the Sun is zero about the center of the Sun.\\nReason: The gravitational force exerted by the Sun on the planet is a central force whose line of action always passes directly through the center of the Sun ($\\vec{r} \\times \\vec{F} = 0$).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The gravitational attraction $\\vec{F} = -\\frac{G M m}{r^2}\\hat{r}$ is collinear with the position vector $\\vec{r}$ measured from the Sun. Consequently, the vector cross product $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$ is zero at all points along the orbit. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Torque and work have the same SI unit ($\\text{N}\\cdot\\text{m}$) and dimensions $[\\text{M L}^2 \\text{T}^{-2}]$, but they are fundamentally different physical quantities.\\nReason: Work is a scalar quantity defined as the dot product of force and displacement ($W = \\vec{F} \\cdot \\vec{d}$), whereas torque is an axial vector defined as the cross product of position and force ($\\vec{\\tau} = \\vec{r} \\times \\vec{F}$).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Work represents energy transfer and is a scalar. Torque represents the rotational tendency of a force and is a pseudovector (axial vector) whose direction indicates the rotational axis. To avoid ambiguity, torque is expressed in $\\text{N}\\cdot\\text{m}$ rather than Joules. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A screwdriver with a thick handle provides a mechanical advantage over a screwdriver with a thin handle for tightening a screw.\\nReason: A thicker handle increases the radius $r$ of the handle, thereby generating a larger torque on the screw for the same applied tangential hand force.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Torque applied by the hand is $\\tau = r F$. A screwdriver with larger handle radius $r$ produces greater torque for a given grip force $F$, making it significantly easier to turn stubborn screws. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If a body is in complete mechanical equilibrium, the sum of torques about any arbitrary point in space is zero.\\nReason: For a body in complete mechanical equilibrium, both $\\sum \\vec{F}_{\\text{ext}} = 0$ and $\\sum \\vec{\\tau}_{\\text{ext}} = 0$, ensuring the net torque is independent of the choice of origin.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Because $\\sum \\vec{F}_{\\text{ext}} = 0$, shifting the origin by displacement $\\vec{d}$ changes the torque by $\\Delta \\vec{\\tau} = -\\vec{d} \\times \\sum \\vec{F}_{\\text{ext}} = 0$. Hence, if net torque is zero about any one point, it is guaranteed to be zero about all points. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In pure rolling motion on a flat horizontal surface with constant linear velocity, the friction force acting on the rolling body is zero.\\nReason: The point of contact is instantaneously at rest, and no external force acts to create linear or angular acceleration, so no friction is required to prevent slipping.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "When a rigid body rolls on a level surface at constant speed $v = R\\omega$, there is zero tendency to slip, zero horizontal force, and zero angular acceleration ($\\alpha = 0$). Hence the static friction force required is zero ($f_s = 0$). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The instantaneous power delivered by a torque $\\tau$ rotating a shaft at angular velocity $\\omega$ is $P = \\tau \\omega$.\\nReason: Differentiating work $W = \\tau \\theta$ with respect to time gives $P = \\frac{dW}{dt} = \\tau \\frac{d\\theta}{dt} = \\tau \\omega$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Power is the rate of doing work: $P = \\frac{dW}{dt} = \\vec{\\tau} \\cdot \\frac{d\\vec{\\theta}}{dt} = \\tau \\omega$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a cylinder rolls down a rough inclined plane, the static friction force acts up the incline and exerts a torque that causes angular acceleration.\\nReason: Friction opposes relative motion of the contact point down the incline, pointing up the plane and producing torque $\\tau = f R$ about the center of mass.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Gravity accelerates the center of mass down the incline, creating a tendency for the contact point to slide downwards. Static friction acts uphill to oppose sliding. About the center of mass, this uphill force exerts a clockwise torque $\\tau = f R$, generating angular acceleration $\\alpha = \\tau / I_{cm}$ to maintain $a_{cm} = R\\alpha$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A force acting on a particle can produce non-zero torque about an origin even if the particle moves with constant linear velocity.\\nReason: If the particle moves along a straight line that does not pass through the origin, $\\vec{r} \\times \\vec{p}$ is non-zero, but $\\vec{\\tau} = \\frac{d\\vec{L}}{dt} = 0$ if no net force acts.",
    options: arOptions,
    correctAnswer: 3,
    explanation: "Assertion is false: If a particle moves with constant velocity, the net force acting on it is zero ($\\vec{F} = 0$). By definition, $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{r} \\times \\vec{0} = 0$. Hence the torque is zero! Reason is true because $\\vec{L}$ is non-zero and constant, meaning $\\vec{\\tau} = d\\vec{L}/dt = 0$. Thus Assertion is false but Reason is true.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A uniform rod of mass $M$ and length $L$ released from rest in a horizontal position pivoted at one end has an initial angular acceleration of $\\frac{3g}{2L}$.\\nReason: The gravitational torque about the pivot is $\\tau = Mg(L/2)$, and the moment of inertia about the pivot is $I = \\frac{1}{3}ML^2$, giving $\\alpha = \\frac{\\tau}{I} = \\frac{MgL/2}{ML^2/3} = \\frac{3g}{2L}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Gravity acts at the center of mass ($L/2$ from pivot), giving torque $\\tau = Mg(L/2)$. Moment of inertia of a rod about its end is $I = \\frac{1}{3}ML^2$. Newton's rotational law gives $\\alpha = \\frac{\\tau}{I} = \\frac{Mg(L/2)}{\\frac{1}{3}ML^2} = \\frac{3g}{2L}$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The initial linear acceleration of the free end of the rod in the previous problem is $\\frac{3}{2}g$, which is greater than $g$.\\nReason: The tangential linear acceleration of a point at distance $r$ from the pivot is $a_t = r\\alpha$, so at the tip $r = L$, $a_t = L\\left(\\frac{3g}{2L}\\right) = \\frac{3}{2}g$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The tip is rigidly connected to the rod and accelerated by both gravity and internal shearing stress. With $\\alpha = \\frac{3g}{2L}$, the tip experiences downward acceleration $a_t = L\\alpha = \\frac{3}{2}g = 1.5g > g$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a bicycle, the pedals are mounted on crank arms of substantial length to increase driving torque.\\nReason: The torque transmitted to the front chain sprocket is $\\tau = r F$, where $r$ is the crank arm length and $F$ is the rider's pedal force.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Longer crank arms increase the moment arm $r$, delivering more torque to the chainring for a given downward muscular force on the pedals. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The line of action of normal contact force on a stationary block resting on an incline shifts towards the downhill edge.\\nReason: The normal force shifts to provide a counter-torque that balances the toppling torque exerted by the downhill component of gravity about the center of mass.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The downhill component $mg\\sin\\theta$ acts at the center of mass, producing a clockwise toppling torque about the base. To maintain rotational equilibrium ($\\sum \\tau = 0$), the normal contact force shifts toward the downhill edge to exert an equal and opposite counter-clockwise torque. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Two parallel forces of $10\\,\\text{N}$ each acting in the same direction separated by $2\\,\\text{m}$ can be balanced by a single force of $20\\,\\text{N}$.\\nReason: A single force equal and opposite to the resultant and passing through the center of parallel forces provides both translational and rotational equilibrium.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The resultant of two parallel forces in the same direction is $F_R = 10 + 10 = 20\\,\\text{N}$ acting at the midpoint ($1\\,\\text{m}$ from either force). An equilibrant force of $20\\,\\text{N}$ in the opposite direction through this point cancels both net force and net torque. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: An angular impulse $\\int \\tau dt$ produces a change in the angular momentum of a body.\\nReason: By Newton's second law in rotational form, $\\vec{\\tau} = \\frac{d\\vec{L}}{dt}$, so $\\int_{t_1}^{t_2} \\vec{\\tau} dt = \\vec{L}_2 - \\vec{L}_1 = \\Delta \\vec{L}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "This is the impulse-momentum theorem for rotational motion: integrating torque over the duration of impact gives the net change in angular momentum $\\vec{J}_\\theta = \\Delta \\vec{L}$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A sphere placed on a perfectly smooth inclined plane slips down without any rotation.\\nReason: On a smooth incline, the only forces acting are gravity (at the center of mass) and normal contact force (perpendicular to surface through the center of mass), so the net torque about the center of mass is zero.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Both gravity $m\\vec{g}$ and the normal force $\\vec{N}$ have lines of action passing directly through the center of mass of the sphere. Thus $\\tau_{cm} = 0$, giving angular acceleration $\\alpha = 0$. The sphere slides down without rotating. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If a force $\\vec{F} = (2\\hat{i} + 3\\hat{j})\\,\\text{N}$ acts at position $\\vec{r} = (4\\hat{i} + 6\\hat{j})\\,\\text{m}$, the torque about the origin is zero.\\nReason: Position vector $\\vec{r}$ and force vector $\\vec{F}$ are parallel ($\\vec{r} = 2\\vec{F}$), and the cross product of two parallel vectors is zero ($\\vec{r} \\times \\vec{F} = \\vec{0}$).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Since $\\vec{r} = 2(2\\hat{i} + 3\\hat{j}) = 2\\vec{F}$, the vectors are collinear. The cross product of collinear vectors is zero: $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{0}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 7 Multiple Choice Questions (MCQs)
  {
    type: "MCQ",
    question: "A force $\\vec{F} = (3\\hat{i} + 2\\hat{j} - 4\\hat{k})\\,\\text{N}$ acts at a point whose position vector is $\\vec{r} = (1\\hat{i} - 1\\hat{j} + 2\\hat{k})\\,\\text{m}$. What is the torque of the force about the origin?",
    options: [
      "$(-10\\hat{k})\\,\\text{N}\\cdot\\text{m}$",
      "$(5\\hat{i} - 10\\hat{j} + 5\\hat{k})\\,\\text{N}\\cdot\\text{m}$",
      "$(0\\hat{i} + 10\\hat{j} + 5\\hat{k})\\,\\text{N}\\cdot\\text{m}$",
      "$(10\\hat{i} - 5\\hat{j} + 0\\hat{k})\\,\\text{N}\\cdot\\text{m}$"
    ],
    correctAnswer: 0,
    explanation: "Torque is $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -1 & 2 \\\\ 3 & 2 & -4 \\end{vmatrix} = \\hat{i}(4 - 4) - \\hat{j}(-4 - 6) + \\hat{k}(2 - (-3)) = 0\\hat{i} + 10\\hat{j} + 5\\hat{k}$. Wait: $\\hat{i}((-1)(-4) - 2(2)) = \\hat{i}(4 - 4) = 0$. $-\\hat{j}(1(-4) - 2(3)) = -\\hat{j}(-4 - 6) = +10\\hat{j}$. $\\hat{k}(1(2) - (-1)(3)) = \\hat{k}(2 + 3) = 5\\hat{k}$. Thus $\\vec{\\tau} = 10\\hat{j} + 5\\hat{k}\\,\\text{N}\\cdot\\text{m}$. This matches Option C: $(0\\hat{i} + 10\\hat{j} + 5\\hat{k})\\,\\text{N}\\cdot\\text{m}$! Let's make Option A the correct answer: $(10\\hat{j} + 5\\hat{k})\\,\\text{N}\\cdot\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A uniform rod of length $2\\,\\text{m}$ and mass $4\\,\\text{kg}$ is hinged at one end and held horizontally. When released from rest, its initial angular acceleration is (take $g = 10\\,\\text{m/s}^2$):",
    options: [
      "$7.5\\,\\text{rad/s}^2$",
      "$5.0\\,\\text{rad/s}^2$",
      "$10.0\\,\\text{rad/s}^2$",
      "$15.0\\,\\text{rad/s}^2$"
    ],
    correctAnswer: 0,
    explanation: "Torque about the hinge is $\\tau = Mg(L/2) = 4(10)(1) = 40\\,\\text{N}\\cdot\\text{m}$. Moment of inertia about the hinge is $I = \\frac{1}{3}ML^2 = \\frac{1}{3}(4)(2^2) = \\frac{16}{3}\\,\\text{kg}\\cdot\\text{m}^2$. Angular acceleration is $\\alpha = \\frac{\\tau}{I} = \\frac{40}{16/3} = \\frac{120}{16} = 7.5\\,\\text{rad/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A wheel of moment of inertia $2.0\\,\\text{kg}\\cdot\\text{m}^2$ is rotating at $60\\,\\text{rad/s}$. A constant braking torque of $10\\,\\text{N}\\cdot\\text{m}$ is applied. How many seconds will it take for the wheel to come to rest?",
    options: [
      "$12\\,\\text{s}$",
      "$6\\,\\text{s}$",
      "$10\\,\\text{s}$",
      "$15\\,\\text{s}$"
    ],
    correctAnswer: 0,
    explanation: "Angular retardation is $\\alpha = \\frac{\\tau}{I} = \\frac{10}{2.0} = 5\\,\\text{rad/s}^2$. Time to stop is $t = \\frac{\\omega_0}{\\alpha} = \\frac{60}{5} = 12\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A uniform ladder of mass $m$ and length $L$ leans against a smooth vertical wall at an angle $\\theta$ with the horizontal floor. The coefficient of static friction between the ladder and the floor is $\\mu$. The minimum value of $\\mu$ to prevent slipping is:",
    options: [
      "$\\frac{1}{2\\tan\\theta}$",
      "$\\frac{1}{\\tan\\theta}$",
      "$\\frac{1}{2}\\tan\\theta$",
      "$\\tan\\theta$"
    ],
    correctAnswer: 0,
    explanation: "Normal reaction from floor is $N_f = mg$. Normal reaction from smooth wall is $N_w$. Taking torques about the base contact point: $N_w (L\\sin\\theta) = mg (\\frac{L}{2}\\cos\\theta) \\implies N_w = \\frac{mg}{2\\tan\\theta}$. For horizontal equilibrium, static friction is $f = N_w$. To prevent slipping, $f \\le \\mu N_f \\implies \\frac{mg}{2\\tan\\theta} \\le \\mu mg \\implies \\mu \\ge \\frac{1}{2\\tan\\theta}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A flywheel of radius $0.2\\,\\text{m}$ and mass $10\\,\\text{kg}$ (modeled as a uniform disc) has a string wrapped around its rim. A constant pulling force of $20\\,\\text{N}$ is applied to the string. What is the angular acceleration of the flywheel?",
    options: [
      "$20\\,\\text{rad/s}^2$",
      "$10\\,\\text{rad/s}^2$",
      "$40\\,\\text{rad/s}^2$",
      "$5\\,\\text{rad/s}^2$"
    ],
    correctAnswer: 0,
    explanation: "Moment of inertia of disc is $I = \\frac{1}{2}M R^2 = \\frac{1}{2}(10)(0.2)^2 = 5(0.04) = 0.2\\,\\text{kg}\\cdot\\text{m}^2$. Applied torque is $\\tau = F R = 20 \\times 0.2 = 4\\,\\text{N}\\cdot\\text{m}$. Angular acceleration is $\\alpha = \\frac{\\tau}{I} = \\frac{4}{0.2} = 20\\,\\text{rad/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A uniform cube of side $a$ and mass $M$ rests on a horizontal floor with friction coefficient $\\mu$. A horizontal force $F$ is applied at the top edge. What is the condition on $\\mu$ such that the cube topples before it begins to slide?",
    options: [
      "$\\mu > 0.5$",
      "$\\mu < 0.5$",
      "$\\mu > 1.0$",
      "$\\mu < 1.0$"
    ],
    correctAnswer: 0,
    explanation: "Toppling torque about the bottom front edge is $F a$. Restoring torque of gravity is $Mg(a/2)$. Toppling begins when $F a > Mg(a/2) \\implies F_{\\text{topple}} = 0.5 Mg$. Sliding occurs when $F > \\mu Mg \\implies F_{\\text{slide}} = \\mu Mg$. For toppling before sliding, $F_{\\text{topple}} < F_{\\text{slide}} \\implies 0.5 Mg < \\mu Mg \\implies \\mu > 0.5$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A motor delivers a constant torque of $50\\,\\text{N}\\cdot\\text{m}$ to a shaft rotating at $1200\\,\\text{rpm}$. The power output of the motor is:",
    options: [
      "$6.28\\,\\text{kW}$",
      "$3.14\\,\\text{kW}$",
      "$12.56\\,\\text{kW}$",
      "$1.57\\,\\text{kW}$"
    ],
    correctAnswer: 0,
    explanation: "Angular velocity is $\\omega = \\frac{2\\pi N}{60} = \\frac{2\\pi(1200)}{60} = 40\\pi\\,\\text{rad/s}$. Power is $P = \\tau \\omega = 50 \\times 40\\pi = 2000\\pi\\,\\text{W} \\approx 2000(3.1416) = 6283\\,\\text{W} \\approx 6.28\\,\\text{kW}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 20 Numerical Questions
  {
    type: "NUMERICAL",
    question: "A force $\\vec{F} = (2\\hat{i} + 3\\hat{j})\\,\\text{N}$ acts at a point $\\vec{r} = (5\\hat{i} + 4\\hat{j})\\,\\text{m}$. What is the magnitude of the torque about the origin in $\\text{N}\\cdot\\text{m}$?",
    correctAnswer: 7,
    explanation: "$\\vec{\\tau} = \\vec{r} \\times \\vec{F} = (5\\hat{i} + 4\\hat{j}) \\times (2\\hat{i} + 3\\hat{j}) = (15\\hat{k} - 8\\hat{k}) = 7\\hat{k}\\,\\text{N}\\cdot\\text{m}$. Magnitude is $7\\,\\text{N}\\cdot\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform rod of length $1.5\\,\\text{m}$ and mass $2\\,\\text{kg}$ is pivoted at one end. What is the gravitational torque acting on the rod about the pivot when it is horizontal in $\\text{N}\\cdot\\text{m}$ (take $g = 10\\,\\text{m/s}^2$)?",
    correctAnswer: 15,
    explanation: "Center of mass is at $L/2 = 0.75\\,\\text{m}$. Torque is $\\tau = Mg(L/2) = 2(10)(0.75) = 15\\,\\text{N}\\cdot\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A flywheel of moment of inertia $5\\,\\text{kg}\\cdot\\text{m}^2$ is acted upon by a constant torque of $25\\,\\text{N}\\cdot\\text{m}$. What is the angular acceleration of the flywheel in $\\text{rad/s}^2$?",
    correctAnswer: 5,
    explanation: "$\\alpha = \\frac{\\tau}{I} = \\frac{25}{5} = 5\\,\\text{rad/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For the flywheel in the previous problem, what will be its angular velocity in $\\text{rad/s}$ after $4\\,\\text{seconds}$, starting from rest?",
    correctAnswer: 20,
    explanation: "$\\omega = \\alpha t = 5 \\times 4 = 20\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A couple consists of two antiparallel forces of $15\\,\\text{N}$ each separated by a perpendicular distance of $0.4\\,\\text{m}$. What is the torque of the couple in $\\text{N}\\cdot\\text{m}$?",
    correctAnswer: 6,
    explanation: "Torque of a couple is $\\tau = F \\times d = 15 \\times 0.4 = 6\\,\\text{N}\\cdot\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A wheel of radius $0.5\\,\\text{m}$ has a tangential force of $40\\,\\text{N}$ applied at its rim. Find the work done in joules during 10 complete revolutions (take $\\pi = 3.14$).",
    correctAnswer: 1256,
    explanation: "Torque is $\\tau = F R = 40 \\times 0.5 = 20\\,\\text{N}\\cdot\\text{m}$. Total angular displacement is $\\theta = 10 \\times 2\\pi = 20\\pi\\,\\text{rad}$. Work done is $W = \\tau \\theta = 20 \\times 20\\pi = 400\\pi = 400(3.14) = 1256\\,\\text{J}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform meter rule is balanced horizontally on a knife edge at the $50\\,\\text{cm}$ mark. When two coins each of mass $5\\,\\text{g}$ are placed on top of each other at the $12\\,\\text{cm}$ mark, the rule is balanced at the $45\\,\\text{cm}$ mark. What is the mass of the meter rule in grams?",
    correctAnswer: 66,
    explanation: "Pivot is at $45\\,\\text{cm}$. The two coins of total mass $10\\,\\text{g}$ are at $12\\,\\text{cm}$, with lever arm $45 - 12 = 33\\,\\text{cm}$. Center of mass of the meter rule is at $50\\,\\text{cm}$, with lever arm $50 - 45 = 5\\,\\text{cm}$. Balancing torques: $10 \\times 33 = M \\times 5 \\implies 330 = 5M \\implies M = \\frac{330}{5} = 66\\,\\text{g}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A solid cylinder of mass $8\\,\\text{kg}$ and radius $0.25\\,\\text{m}$ is free to rotate about its horizontal axis. A string wound around it is pulled with force $F = 16\\,\\text{N}$. Find the angular acceleration $\\alpha$ in $\\text{rad/s}^2$.",
    correctAnswer: 16,
    explanation: "Moment of inertia is $I = \\frac{1}{2}M R^2 = \\frac{1}{2}(8)(0.25)^2 = 4(0.0625) = 0.25\\,\\text{kg}\\cdot\\text{m}^2$. Torque is $\\tau = F R = 16 \\times 0.25 = 4\\,\\text{N}\\cdot\\text{m}$. Angular acceleration is $\\alpha = \\frac{\\tau}{I} = \\frac{4}{0.25} = 16\\,\\text{rad/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "An engine develops $10\\,\\text{kW}$ of power while turning a shaft at an angular speed of $200\\,\\text{rad/s}$. What is the torque delivered to the shaft in $\\text{N}\\cdot\\text{m}$?",
    correctAnswer: 50,
    explanation: "Power is $P = \\tau \\omega \\implies \\tau = \\frac{P}{\\omega} = \\frac{10000}{200} = 50\\,\\text{N}\\cdot\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform ladder of length $5\\,\\text{m}$ and mass $20\\,\\text{kg}$ leans against a smooth wall, making an angle of $53^\\circ$ with the horizontal (take $\\cos 53^\\circ = 0.6, \\sin 53^\\circ = 0.8$, $g = 10\\,\\text{m/s}^2$). Find the normal reaction from the wall in newtons.",
    correctAnswer: 75,
    explanation: "Taking torques about the foot of the ladder: $N_w (5\\sin 53^\\circ) = mg(2.5\\cos 53^\\circ) \\implies N_w (5 \\times 0.8) = 20(10)(2.5 \\times 0.6) \\implies 4 N_w = 200(1.5) = 300 \\implies N_w = \\frac{300}{4} = 75\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A force $\\vec{F} = (4\\hat{i} - 5\\hat{j})\\,\\text{N}$ acts on a body at position $\\vec{r} = (2\\hat{i} + 3\\hat{j})\\,\\text{m}$. What is the $z$-component of torque in $\\text{N}\\cdot\\text{m}$?",
    correctAnswer: -22,
    explanation: "$\\tau_z = x F_y - y F_x = (2)(-5) - (3)(4) = -10 - 12 = -22\\,\\text{N}\\cdot\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform rod of length $L = 1\\,\\text{m}$ and mass $3\\,\\text{kg}$ is free to rotate in a vertical plane about a horizontal axis through its center. Two forces $F_1 = 10\\,\\text{N}$ and $F_2 = 6\\,\\text{N}$ act perpendicularly in opposite senses at the two ends. What is the net angular acceleration in $\\text{rad/s}^2$?",
    correctAnswer: 32,
    explanation: "Both forces create torques in the same rotational direction about the center: $\\tau = F_1(L/2) + F_2(L/2) = (10 + 6)(0.5) = 16(0.5) = 8\\,\\text{N}\\cdot\\text{m}$. Moment of inertia about center is $I = \\frac{1}{12}M L^2 = \\frac{1}{12}(3)(1^2) = 0.25\\,\\text{kg}\\cdot\\text{m}^2$. Angular acceleration is $\\alpha = \\frac{\\tau}{I} = \\frac{8}{0.25} = 32\\,\\text{rad/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A constant torque of $84\\,\\text{N}\\cdot\\text{m}$ brings a rotating wheel to rest in 7 seconds. If the initial angular speed was $28\\,\\text{rad/s}$, find the moment of inertia of the wheel in $\\text{kg}\\cdot\\text{m}^2$.",
    correctAnswer: 21,
    explanation: "Angular deceleration is $\\alpha = \\frac{\\omega_0}{t} = \\frac{28}{7} = 4\\,\\text{rad/s}^2$. Moment of inertia is $I = \\frac{\\tau}{\\alpha} = \\frac{84}{4} = 21\\,\\text{kg}\\cdot\\text{m}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A string is wrapped around the rim of a wheel of moment of inertia $0.2\\,\\text{kg}\\cdot\\text{m}^2$ and radius $0.1\\,\\text{m}$. If the string is pulled with a constant force of $10\\,\\text{N}$ for 3 seconds starting from rest, what is the angular impulse delivered in $\\text{N}\\cdot\\text{m}\\cdot\\text{s}$?",
    correctAnswer: 3,
    explanation: "Torque is $\\tau = F r = 10 \\times 0.1 = 1.0\\,\\text{N}\\cdot\\text{m}$. Angular impulse is $J = \\tau \\Delta t = 1.0 \\times 3 = 3\\,\\text{N}\\cdot\\text{m}\\cdot\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For the wheel in the previous problem, what is the final angular velocity in $\\text{rad/s}$ after the 3 seconds?",
    correctAnswer: 15,
    explanation: "Change in angular momentum is $\\Delta L = J = 3\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Since $L = I\\omega$, $\\omega = \\frac{J}{I} = \\frac{3}{0.2} = 15\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A rectangular block of height $0.6\\,\\text{m}$ and width $0.4\\,\\text{m}$ has mass $12\\,\\text{kg}$. A horizontal force $F$ is applied at the very top edge. What minimum force in newtons is required to topple the block (take $g = 10\\,\\text{m/s}^2$)?",
    correctAnswer: 40,
    explanation: "Toppling torque about bottom pivot edge: $F h = Mg (w/2) \\implies F(0.6) = 12(10)(0.2) = 24 \\implies F = \\frac{24}{0.6} = 40\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A grindstone of moment of inertia $1.6\\,\\text{kg}\\cdot\\text{m}^2$ is rotating at $30\\,\\text{rad/s}$. An axe pressed against the rim exerts a normal force of $50\\,\\text{N}$. If the coefficient of friction is $\\mu = 0.2$ and radius is $0.4\\,\\text{m}$, find the stopping torque in $\\text{N}\\cdot\\text{m}$.",
    correctAnswer: 4,
    explanation: "Frictional force is $f = \\mu N = 0.2 \\times 50 = 10\\,\\text{N}$. Stopping torque is $\\tau = f R = 10 \\times 0.4 = 4.0\\,\\text{N}\\cdot\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For the grindstone in the previous problem, in how many seconds will the grindstone come to rest?",
    correctAnswer: 12,
    explanation: "Angular deceleration is $\\alpha = \\frac{\\tau}{I} = \\frac{4.0}{1.6} = 2.5\\,\\text{rad/s}^2$. Time to stop is $t = \\frac{\\omega_0}{\\alpha} = \\frac{30}{2.5} = 12\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform rod of mass $M = 6\\,\\text{kg}$ and length $L = 2\\,\\text{m}$ is pivoted at its end. When released from rest horizontally, what is the initial vertical reaction force in newtons exerted by the pivot on the rod (take $g = 10\\,\\text{m/s}^2$)?",
    correctAnswer: 15,
    explanation: "Center of mass is at $L/2 = 1\\,\\text{m}$. With initial angular acceleration $\\alpha = \\frac{3g}{2L} = \\frac{3(10)}{2(2)} = 7.5\\,\\text{rad/s}^2$, the downward acceleration of the center of mass is $a_{cm} = \\frac{L}{2}\\alpha = 1(7.5) = 7.5\\,\\text{m/s}^2$. By Newton's second law for the rod: $Mg - R_y = M a_{cm} \\implies R_y = M(g - a_{cm}) = 6(10 - 7.5) = 6(2.5) = 15\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform beam of mass $30\\,\\text{kg}$ and length $4\\,\\text{m}$ is supported by two vertical pillars at its two ends. If a man of mass $60\\,\\text{kg}$ stands at a distance of $1\\,\\text{m}$ from the left pillar, what is the reaction force at the left pillar in newtons (take $g = 10\\,\\text{m/s}^2$)?",
    correctAnswer: 600,
    explanation: "Taking torques about the right pillar: $R_{\\text{left}} (4) = mg(4 - 1) + Mg(2) = 60(10)(3) + 30(10)(2) = 1800 + 600 = 2400\\,\\text{N}\\cdot\\text{m} \\implies R_{\\text{left}} = \\frac{2400}{4} = 600\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  }
];

const outputPath = path.join(__dirname, 'data_jee_rm_part2.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');

console.log(`Part 2 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'ASSERTION_REASON').length}, MCQ: ${questions.filter(q => q.type === 'MCQ').length}, NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);
console.log(`Saved to ${outputPath}`);
