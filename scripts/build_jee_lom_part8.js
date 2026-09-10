const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Static and kinetic friction";
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
    question: "Assertion: Static friction is a self-adjusting force in both magnitude and direction.\\nReason: Static friction adjusts itself to precisely balance any applied tangential force up to a limiting maximum value $f_{s,\\max} = \\mu_s N$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "As long as the body remains at rest relative to the surface, static friction equals the applied horizontal force in magnitude and opposes the impending direction of motion. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The coefficient of static friction $\\mu_s$ is always greater than the coefficient of kinetic friction $\\mu_k$ for a given pair of surfaces.\\nReason: Once relative motion begins, the microscopic asperities on the contact surfaces do not get sufficient time to interlock and form strong cold-welded junctions.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "At rest, prolonged contact creates extensive microscopic cold welding at asperities. During motion, junctions are continuously sheared before full bonding can occur, making $\\mu_k < \\mu_s$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: It is easier to pull a heavy lawn roller than to push it across a rough horizontal lawn.\\nReason: Pulling provides a vertical upward component of force that decreases the normal reaction from the ground, thereby reducing the maximum static and kinetic friction.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "When pulling with force $F$ at angle $\\theta$ above horizontal, $N = mg - F\\sin\\theta$, so friction is $\\mu(mg - F\\sin\\theta)$. When pushing at angle $\\theta$ below horizontal, $N = mg + F\\sin\\theta$, which increases friction. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The angle of repose $\\alpha$ for a rough inclined plane is equal to the angle of friction $\\lambda$.\\nReason: Both the angle of repose and the angle of friction satisfy $\\tan\\alpha = \\mu_s$ and $\\tan\\lambda = \\mu_s$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "On an incline, impending downward slipping occurs when $mg\\sin\\alpha = \\mu_s mg\\cos\\alpha \\implies \\tan\\alpha = \\mu_s$. By definition, angle of friction satisfies $\\tan\\lambda = f_s/N = \\mu_s$. Thus $\\alpha = \\lambda$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Frictional force between two solid macroscopic surfaces is largely independent of the apparent area of contact.\\nReason: Although the apparent area changes, the actual microscopic area of contact (where asperities touch) depends only on normal load $N$ and material yield pressure.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Real contact occurs only at microscopic peaks where pressure equals the yield pressure $p_y$. Thus actual contact area is $A_{\\text{real}} = N/p_y$, making friction proportional to $N$ and independent of apparent surface dimensions. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The resultant contact force exerted by a rough surface on a resting block subjected to limiting friction is $R = N\\sqrt{1 + \\mu_s^2}$.\\nReason: The normal reaction $N$ and the limiting friction force $f_s = \\mu_s N$ are mutually perpendicular components of the total contact force.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The total force exerted by the surface is $\\vec{R} = \\vec{N} + \\vec{f}_s$. Since $\\vec{N} \\perp \\vec{f}_s$, $R = \\sqrt{N^2 + f_s^2} = \\sqrt{N^2 + (\\mu_s N)^2} = N\\sqrt{1 + \\mu_s^2}$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Friction can accelerate a body.\\nReason: When a person walks, static friction exerted forward by the ground on the foot provides the net external force that accelerates the person forward.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The foot pushes backward on the ground; by Newton's third law, the ground pushes the foot forward with static friction $f_s$, providing the forward acceleration. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The work done by kinetic friction on a single isolated moving block on a fixed floor is always negative.\\nReason: Kinetic friction on the block always acts in the direction opposite to the displacement of the block relative to the floor.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "$W = \\vec{f}_k \\cdot \\vec{d} = f_k d \\cos 180^\\circ = -f_k d < 0$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a block-on-block system, static friction between the blocks can do positive work on the upper block.\\nReason: Static friction acts in the direction of motion of the upper block, accelerating it forward.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "When the lower block is pulled forward, static friction on the upper block acts forward (in the direction of its displacement), doing positive work $W = +f_s d$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The net work done by static friction on an entire closed mechanical system is always zero.\\nReason: At the contact interface where static friction acts, there is zero relative displacement between the two contacting bodies.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Action-reaction pairs of static friction act across the same displacement $\\vec{d}$: $W_{\\text{net}} = \\vec{f}_s \\cdot \\vec{d} + (-\\vec{f}_s) \\cdot \\vec{d} = 0$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The coefficient of friction can exceed unity ($\\\\mu > 1$).\\nReason: Highly polished clean surfaces or soft rubber on dry tarmac can have adhesive bonding forces that exceed the perpendicular normal load.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Friction coefficient is not bounded by 1. Silicone rubber on glass or racing tyres on dry track can have $\\mu \\approx 1.5$ to $2.0$ due to molecular adhesion. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If two ultra-clean, highly polished metal surfaces are placed in contact in an ultra-high vacuum, the friction coefficient becomes extremely large.\\nReason: Absence of oxide films and atmospheric adsorbates allows extensive cold welding across nearly the entire contact area.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In high vacuum without oxide layers, identical metals seize or cold-weld completely, effectively fusing into a single piece of metal. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The stopping distance of a skidding car on a flat level road is independent of the mass of the car.\\nReason: Both the kinetic friction retarding force and the inertia of the car are directly proportional to its mass, making deceleration $a = \\mu_k g$ independent of mass.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "$a = f_k / m = (\\mu_k mg)/m = \\mu_k g$. Stopping distance $s = v^2 / (2a) = v^2 / (2\\mu_k g)$, which is completely independent of $m$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When sand is thrown on railway tracks during rain, the locomotive wheels grip the rails better.\\nReason: Sand particles increase the effective coefficient of static friction between the steel wheels and wet steel rails.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Crushed sand between wheel and rail breaks the slippery water film and increases mechanical interlocking and static friction coefficient. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: To pull a block along a rough horizontal plane with the absolute minimum force, the force must be inclined at an angle $\\theta = \\tan^{-1}\\mu$ to the horizontal.\\nReason: At this optimal angle, the normal force is partially reduced while the horizontal pulling component is maximized relative to the resultant contact force.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The required force is $F = \\frac{\\mu mg}{\\cos\\theta + \\mu\\sin\\theta}$. Denominator is maximized when $\\tan\\theta = \\mu$, yielding $F_{\\min} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A heavy ladder leaning against a smooth vertical wall and a rough horizontal floor is more likely to slip when a person reaches near the top of the ladder than when the person is at the bottom.\\nReason: As the person climbs higher, their weight produces a larger clockwise overturning torque about the base, requiring a larger horizontal wall reaction and hence a larger required static friction at the floor.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Wall reaction $N_{\\text{wall}} = \\frac{mg x \\cos\\theta}{L\\sin\\theta}$ increases as distance $x$ up the ladder increases. Since floor friction must balance $N_{\\text{wall}}$, slipping is most critical near the top. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Kinetic friction force is strictly independent of the sliding velocity over ordinary macroscopic speed ranges.\\nReason: Amontons-Coulomb laws state that kinetic friction depends only on normal load and the nature of the contacting materials.",
    options: AR_OPTIONS,
    correctAnswer: 1,
    explanation: "Both statements are true as classical macroscopic approximations, but the Coulomb law is empirical rather than a fundamental explanation. Reason correctly states the law but doesn't explain the microscopic origin. (Option B).",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Kinetic friction is a non-conservative force.\\nReason: The mechanical work done by kinetic friction along a closed loop path is non-zero and always negative, being dissipated irreversibly into thermal energy.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For a closed path, $\\oint \\vec{f}_k \\cdot d\\vec{r} = -\\oint f_k ds < 0$. Because loop work is non-zero, kinetic friction is non-conservative. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If a block is resting on a rough horizontal surface with no horizontal force applied, the static friction force acting on it is $\\mu_s mg$.\\nReason: Static friction is always equal to $\\mu_s N$.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: with no horizontal force, static friction is strictly ZERO. Reason is false: $\\mu_s N$ is the maximum (limiting) value, not the actual value of static friction.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a car accelerates forward from rest on a level road, the static friction force exerted by the road on the driving wheels acts in the forward direction.\\nReason: The engine applies torque to the drive wheels, causing the bottom of the tyres to push backward against the road surface.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The tyre tread tends to slip backward, so static friction acts forward to oppose this impending relative motion, propelling the vehicle forward. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A body placed on an inclined plane with inclination angle equal to the angle of repose remains at rest in limiting equilibrium.\\nReason: At the angle of repose, the component of gravity down the plane is precisely balanced by the maximum static friction force.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "$mg\\sin\\alpha = \\mu_s mg\\cos\\alpha = f_{s,\\max}$. The body is on the verge of sliding down the plane. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Lubricating oils reduce wear and friction between sliding metal parts in an engine.\\nReason: The oil film keeps the metal surfaces separated, replacing solid-solid dry friction with lower viscous fluid friction.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Hydrodynamic lubrication creates a continuous fluid film that prevents direct contact between asperities. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A heavy box on a truck's flatbed does not slip backward when the truck accelerates moderately forward.\\nReason: Static friction between the truck bed and the box accelerates the box forward with the truck.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In an inertial frame, the only horizontal force on the box is forward static friction $f_s = ma$. As long as $a \\le \\mu_s g$, no slipping occurs. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The coefficient of friction depends on the temperature of the contact surfaces.\\nReason: Changes in temperature alter the yield strength, hardness, and molecular adhesion of the contacting materials.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Thermal changes affect material hardness and surface oxidation, causing variations in both $\\mu_s$ and $\\mu_k$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Friction is regarded as a necessary evil in engineering mechanics.\\nReason: While friction causes undesirable mechanical wear and dissipation of useful energy into heat, it is indispensable for walking, driving, braking, and holding screws and nails in place.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Friction is both dissipative (causes power loss) and essential (enables locomotion, transmission, and structural fasteners). Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Friction is a fundamental force of nature alongside gravity, electromagnetism, and nuclear forces.\\nReason: Frictional force obeys an inverse-square law with distance.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: Friction is a non-fundamental, emergent macroscopic force of electromagnetic origin. Reason is also false: Friction does not obey an inverse-square law.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 7 MCQ QUESTIONS ---
  {
    type: "MCQ",
    question: "A block of mass $m$ rests on a rough horizontal surface with coefficient of static friction $\\mu$. What is the minimum force $F$ required to move the block, and at what angle $\\theta$ to the horizontal should it be directed?",
    options: [
      "$F_{\\min} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$ at $\\theta = \\tan^{-1}\\mu$",
      "$F_{\\min} = \\mu mg$ at $\\theta = 0^\\circ$",
      "$F_{\\min} = \\frac{\\mu mg}{1 + \\mu}$ at $\\theta = 45^\\circ$",
      "$F_{\\min} = \\frac{mg}{\\sqrt{1 + \\mu^2}}$ at $\\theta = \\cos^{-1}\\mu$"
    ],
    correctAnswer: 0,
    explanation: "$F(\\cos\\theta + \\mu\\sin\\theta) = \\mu mg \\implies F = \\frac{\\mu mg}{\\cos\\theta + \\mu\\sin\\theta}$. Maximize denominator: $\\tan\\theta = \\mu$, denominator becomes $\\sqrt{1 + \\mu^2}$, so $F_{\\min} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A uniform chain of length $L$ lies on a rough horizontal table. If the coefficient of static friction between the chain and the table is $\\mu$, what is the maximum fraction of its length that can hang over the edge without sliding?",
    options: [
      "$\\frac{\\mu}{1 + \\mu}$",
      "$\\frac{\\mu}{1 - \\mu}$",
      "$\\frac{1}{1 + \\mu}$",
      "$\\frac{\\mu}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Let hanging length be $x$. Weight of hanging part is $\\left(\\frac{M}{L}x\\right)g$. Weight on table is $\\frac{M}{L}(L - x)g$. Maximum friction is $\\mu \\frac{M}{L}(L - x)g$. At limiting equilibrium: $\\frac{M}{L}x g = \\mu \\frac{M}{L}(L - x)g \\implies x = \\mu(L - x) \\implies x(1 + \\mu) = \\mu L \\implies \\frac{x}{L} = \\frac{\\mu}{1 + \\mu}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A block of mass $m$ is pressed against a vertical wall by a horizontal force $F$. If the coefficient of static friction between the block and the wall is $\\mu$, what is the minimum horizontal force $F$ required to prevent the block from sliding down?",
    options: [
      "$\\frac{mg}{\\mu}$",
      "$\\mu mg$",
      "$\\frac{\\mu mg}{2}$",
      "$mg(1 + \\mu)$"
    ],
    correctAnswer: 0,
    explanation: "Normal reaction is $N = F$. Vertical equilibrium requires upward static friction to balance weight: $f_s = mg$. For no sliding: $f_s \\le \\mu N \\implies mg \\le \\mu F \\implies F \\ge \\frac{mg}{\\mu}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "The angle of friction $\\lambda$ between two surfaces in contact is defined as the angle between:",
    options: [
      "The normal reaction and the resultant contact force under limiting friction",
      "The contact surface and the friction force",
      "The normal reaction and the applied horizontal force",
      "The resultant contact force and the friction force"
    ],
    correctAnswer: 0,
    explanation: "By definition, the angle of friction $\\lambda$ is the angle made by the resultant contact force $\\vec{R} = \\vec{N} + \\vec{f}_s$ with the normal reaction $\\vec{N}$, giving $\\tan\\lambda = f_s / N = \\mu_s$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A block is released from rest at the top of a rough inclined plane of angle $45^\\circ$ and length $s$. It takes $n$ times longer to slide down the rough plane than down a smooth plane of identical dimensions. The coefficient of kinetic friction $\\mu_k$ is:",
    options: [
      "$1 - \\frac{1}{n^2}$",
      "$\\frac{1}{1 - n^2}$",
      "$\\sqrt{1 - \\frac{1}{n^2}}$",
      "$1 - \\frac{1}{n}$"
    ],
    correctAnswer: 0,
    explanation: "Smooth plane acceleration: $a_1 = g\\sin 45^\\circ$. Rough plane acceleration: $a_2 = g(\\sin 45^\\circ - \\mu_k \\cos 45^\\circ) = g\\sin 45^\\circ(1 - \\mu_k)$. Time $t = \\sqrt{2s/a}$, so $t_2 / t_1 = \\sqrt{a_1 / a_2} = n \\implies a_1 / a_2 = n^2 \\implies \\frac{1}{1 - \\mu_k} = n^2 \\implies 1 - \\mu_k = \\frac{1}{n^2} \\implies \\mu_k = 1 - \\frac{1}{n^2}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "Which of the following graphs correctly represents the variation of frictional force $f$ with an increasing applied horizontal force $F$ on a resting block until it slides?",
    options: [
      "A straight line of slope $1$ passing through the origin up to limiting friction, followed by a slight drop and a horizontal line",
      "A horizontal line throughout",
      "A parabola opening upward",
      "An exponential decay curve"
    ],
    correctAnswer: 0,
    explanation: "For $F \\le f_{s,\\max}$, $f = F$ (slope 1). Once $F > f_{s,\\max}$, the block slips, friction drops slightly to kinetic friction $f_k = \\mu_k N$, and remains constant with further increase in $F$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A block of mass $m$ is placed on another block of mass $M$ which rests on a frictionless floor. The coefficient of friction between the two blocks is $\\mu$. What is the maximum horizontal force that can be applied to the lower block $M$ such that both blocks move together without slipping?",
    options: [
      "$\\mu (m + M) g$",
      "$\\mu m g$",
      "$\\mu M g$",
      "$\\frac{\\mu m M g}{m + M}$"
    ],
    correctAnswer: 0,
    explanation: "Maximum acceleration of upper block $m$ without slipping is $a_{\\max} = \\frac{f_{s,\\max}}{m} = \\frac{\\mu m g}{m} = \\mu g$. For the combined system $(M + m)$, maximum horizontal force is $F_{\\max} = (M + m) a_{\\max} = \\mu (m + M) g$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 20 NUMERICAL QUESTIONS ---
  {
    type: "NUMERICAL",
    question: "A block of mass $5\\,\\text{kg}$ rests on a horizontal table. The coefficient of static friction is $\\mu_s = 0.4$ and kinetic friction is $\\mu_k = 0.3$. A horizontal force of $15\\,\\text{N}$ is applied to the block. What is the magnitude of the frictional force in Newtons acting on the block? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 15,
    explanation: "Maximum static friction is $f_{s,\\max} = \\mu_s N = 0.4 \\times (5 \\times 10) = 20\\,\\text{N}$. Since the applied force $F = 15\\,\\text{N} < 20\\,\\text{N}$, the block does not move, and the static friction self-adjusts to equal the applied force: $f = 15\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the previous problem, if the applied horizontal force is increased to $25\\,\\text{N}$, what is the acceleration of the block in $\\text{m/s}^2$?",
    options: [],
    correctAnswer: 2,
    explanation: "Since $F = 25\\,\\text{N} > f_{s,\\max} = 20\\,\\text{N}$, the block moves. Kinetic friction acts: $f_k = \\mu_k N = 0.3 \\times 50 = 15\\,\\text{N}$. Net force is $F_{\\text{net}} = 25 - 15 = 10\\,\\text{N}$. Acceleration $a = 10 / 5 = 2\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A car traveling at $20\\,\\text{m/s}$ applies brakes and skids to a halt on a level road with $\\mu_k = 0.5$. Calculate the stopping distance in meters. (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 40,
    explanation: "Deceleration $a = \\mu_k g = 0.5 \\times 10 = 5\\,\\text{m/s}^2$. Stopping distance $s = \\frac{u^2}{2a} = \\frac{20^2}{2 \\times 5} = \\frac{400}{10} = 40\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the car problem above, how many seconds does the car take to come to rest?",
    options: [],
    correctAnswer: 4,
    explanation: "$t = \\frac{u}{a} = \\frac{20}{5} = 4\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $2\\,\\text{kg}$ is held against a vertical wall by applying a horizontal force $F$. If $\\mu_s = 0.5$, what is the minimum value of $F$ in Newtons required to keep the block from sliding? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 40,
    explanation: "$f_s = mg = 2 \\times 10 = 20\\,\\text{N}$. For no sliding, $f_s \\le \\mu_s F \\implies 20 \\le 0.5 F \\implies F \\ge 40\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform chain of length $2\\,\\text{m}$ lies on a rough table. The coefficient of static friction is $\\mu_s = 0.25$. What is the maximum length in meters of the chain that can hang over the edge without causing the chain to slide?",
    options: [],
    correctAnswer: 0.4,
    explanation: "$x = \\frac{\\mu_s}{1 + \\mu_s} L = \\frac{0.25}{1 + 0.25} \\times 2 = \\frac{0.25}{1.25} \\times 2 = \\frac{1}{5} \\times 2 = 0.4\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block slides down a $45^\\circ$ inclined plane with uniform velocity. What is the coefficient of kinetic friction $\\mu_k$?",
    options: [],
    correctAnswer: 1,
    explanation: "At uniform velocity, acceleration $a = g(\\sin\\theta - \\mu_k\\cos\\theta) = 0 \\implies \\mu_k = \\tan\\theta = \\tan 45^\\circ = 1$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $10\\,\\text{kg}$ is on a rough incline of $30^\\circ$. If $\\mu_s = 0.6$, what is the frictional force in Newtons acting on the body? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 50,
    explanation: "Angle of repose is $\\alpha = \\tan^{-1}(0.6) \\approx 31^\\circ$. Since incline angle $30^\\circ < 31^\\circ$, the body remains at rest! Therefore, static friction balances the downhill gravity component: $f_s = mg\\sin 30^\\circ = 10 \\times 10 \\times 0.5 = 50\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $4\\,\\text{kg}$ rests on a horizontal plane with $\\mu_s = 0.75$. What is the magnitude of the resultant contact force in Newtons exerted by the plane on the block when limiting friction is reached? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 50,
    explanation: "$N = mg = 4 \\times 10 = 40\\,\\text{N}$. Limiting friction is $f_s = \\mu_s N = 0.75 \\times 40 = 30\\,\\text{N}$. Resultant contact force is $R = \\sqrt{N^2 + f_s^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $M = 8\\,\\text{kg}$ rests on a smooth horizontal floor. A smaller block of mass $m = 2\\,\\text{kg}$ sits atop it with $\\mu_s = 0.3$. What is the maximum horizontal force in Newtons that can be applied to the $8\\,\\text{kg}$ block so that both blocks move together? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 30,
    explanation: "$F_{\\max} = (M + m) a_{\\max} = (M + m)(\\mu_s g) = (8 + 2)(0.3 \\times 10) = 10 \\times 3 = 30\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the previous system, if a horizontal force of $50\\,\\text{N}$ is applied to the lower $8\\,\\text{kg}$ block, and kinetic friction between blocks is $\\mu_k = 0.2$, what is the acceleration of the top $2\\,\\text{kg}$ block in $\\text{m/s}^2$?",
    options: [],
    correctAnswer: 2,
    explanation: "Since $F = 50\\,\\text{N} > 30\\,\\text{N}$, slipping occurs. The only horizontal force on the top block is kinetic friction: $f_k = \\mu_k m g = 0.2 \\times 2 \\times 10 = 4\\,\\text{N}$. Acceleration of top block is $a_{\\text{top}} = f_k / m = 4 / 2 = 2\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the above problem, what is the acceleration of the lower $8\\,\\text{kg}$ block in $\\text{m/s}^2$?",
    options: [],
    correctAnswer: 5.75,
    explanation: "For the lower block, applied force is $F = 50\\,\\text{N}$ forward, and friction from top block is $f_k = 4\\,\\text{N}$ backward. Net force $= 50 - 4 = 46\\,\\text{N}$. Acceleration $a_{\\text{bottom}} = 46 / 8 = 5.75\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A $20\\,\\text{kg}$ crate is pushed along a horizontal surface at a constant speed of $4\\,\\text{m/s}$ by a horizontal force of $60\\,\\text{N}$. What is the coefficient of kinetic friction $\\mu_k$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 0.3,
    explanation: "At constant speed, $F = f_k = \\mu_k mg \\implies 60 = \\mu_k (20 \\times 10) \\implies 200\\mu_k = 60 \\implies \\mu_k = 0.3$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "What is the absolute minimum force in Newtons required to pull a $10\\,\\text{kg}$ block across a rough horizontal floor with $\\mu = 0.75$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 60,
    explanation: "$F_{\\min} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}} = \\frac{0.75 \\times (10 \\times 10)}{\\sqrt{1 + 0.75^2}} = \\frac{75}{\\sqrt{1 + 0.5625}} = \\frac{75}{1.25} = 60\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A horizontal conveyor belt moves with constant speed $v = 3\\,\\text{m/s}$. A package of mass $5\\,\\text{kg}$ is gently placed onto the belt with zero initial velocity. If $\\mu_k = 0.3$, how many meters does the package slip relative to the ground before it stops slipping? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 1.5,
    explanation: "Acceleration of package is $a = \\mu_k g = 0.3 \\times 10 = 3\\,\\text{m/s}^2$. Package reaches belt speed in time $t = v/a = 3/3 = 1\\,\\text{s}$. Distance traveled relative to ground: $s = \\frac{v^2}{2a} = \\frac{3^2}{2 \\times 3} = \\frac{9}{6} = 1.5\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the conveyor belt problem above, what is the distance in meters that the package slips relative to the belt?",
    options: [],
    correctAnswer: 1.5,
    explanation: "Distance moved by belt in $1\\,\\text{s}$ is $s_{\\text{belt}} = v t = 3 \\times 1 = 3\\,\\text{m}$. Distance moved by package is $1.5\\,\\text{m}$. Relative slip distance = $3 - 1.5 = 1.5\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $m = 1\\,\\text{kg}$ is placed on an inclined plane of angle $30^\\circ$. If $\\mu_k = 0.2$, what is the acceleration of the block down the incline in $\\text{m/s}^2$? (Take $g = 10\\,\\text{m/s}^2, \\sin 30^\\circ = 0.5, \\cos 30^\\circ = 0.866$. Round to 2 decimal places: $10(0.5 - 0.2 \\times 0.866) = 10(0.5 - 0.1732) = 3.27\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 3.27,
    explanation: "$a = g(\\sin 30^\\circ - \\mu_k \\cos 30^\\circ) = 10(0.5 - 0.2 \\times 0.866) = 10(0.5 - 0.1732) = 3.268 \\approx 3.27\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block released from the top of an inclined plane of inclination $45^\\circ$ takes twice as long to slide down as it does on a frictionless incline of the same length. What is the coefficient of kinetic friction $\\mu_k$?",
    options: [],
    correctAnswer: 0.75,
    explanation: "$\\mu_k = 1 - \\frac{1}{n^2}$. Here $n = 2$, so $\\mu_k = 1 - \\frac{1}{4} = 0.75$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A force of $100\\,\\text{N}$ is applied to a $10\\,\\text{kg}$ box at an angle of $37^\\circ$ below the horizontal (pushing). If $\\mu_k = 0.25$, calculate the acceleration of the box in $\\text{m/s}^2$. (Take $g = 10\\,\\text{m/s}^2, \\cos 37^\\circ = 0.8, \\sin 37^\\circ = 0.6$)",
    options: [],
    correctAnswer: 4,
    explanation: "Normal reaction is $N = mg + F\\sin 37^\\circ = (10 \\times 10) + 100(0.6) = 100 + 60 = 160\\,\\text{N}$. Kinetic friction is $f_k = \\mu_k N = 0.25 \\times 160 = 40\\,\\text{N}$. Horizontal component of applied force is $F_x = F\\cos 37^\\circ = 100 \\times 0.8 = 80\\,\\text{N}$. Net horizontal force is $F_x - f_k = 80 - 40 = 40\\,\\text{N}$. Acceleration $a = 40 / 10 = 4\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the box problem above, if the same $100\\,\\text{N}$ force is applied at $37^\\circ$ above the horizontal (pulling), what is the acceleration of the box in $\\text{m/s}^2$?",
    options: [],
    correctAnswer: 7,
    explanation: "Normal reaction is $N = mg - F\\sin 37^\\circ = 100 - 60 = 40\\,\\text{N}$. Kinetic friction is $f_k = \\mu_k N = 0.25 \\times 40 = 10\\,\\text{N}$. Forward force is $F_x = 80\\,\\text{N}$. Net horizontal force $= 80 - 10 = 70\\,\\text{N}$. Acceleration $a = 70 / 10 = 7\\,\\text{m/s}^2$.",
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

console.log(`Part 8 generated: ${questions.length} questions (AR: ${arCount}, MCQ: ${mcqCount}, NUM: ${numCount})`);

const outPath = path.join(__dirname, 'data_jee_lom_part8.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
