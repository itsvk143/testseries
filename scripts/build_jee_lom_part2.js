const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Friction";
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
    question: "Assertion: Static friction is a self-adjusting force in both magnitude and direction.\\nReason: The static friction force adjusts its value to exactly balance the applied tangential force up to a limiting maximum value $f_{\\text{max}} = \\mu_s N$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Static friction matches the applied tangential force in magnitude and opposes the impending direction of relative motion until the threshold of limiting friction $\\mu_s N$ is reached. Hence both Assertion and Reason are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Pulling a heavy lawn roller is easier than pushing it across a rough ground.\\nReason: When pulling, the vertical component of the applied force decreases the normal reaction, thereby reducing kinetic friction.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "When pulling with force $F$ at an angle $\\theta$ above horizontal, $N = mg - F\\sin\\theta$, so friction $f_k = \\mu_k(mg - F\\sin\\theta)$. When pushing at angle $\\theta$ below horizontal, $N = mg + F\\sin\\theta$, which increases normal force and friction. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The coefficient of kinetic friction $\\mu_k$ is generally less than the coefficient of static friction $\\mu_s$.\\nReason: Once relative motion starts, the surface irregularities and microscopic cold welds do not get enough time to fully interlock.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "At rest, microscopic contact points (asperities) form cold-welded junctions under high local pressure. When sliding occurs, contact points break continuously before strong interatomic bonds can reform, resulting in $\\mu_k < \\mu_s$. Both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Frictional force can do positive mechanical work on a body.\\nReason: The direction of static friction acting on a body can be in the same direction as the displacement of that body.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Consider a block $A$ placed on a moving flatbed truck accelerating forward. Static friction between truck bed and block accelerates block $A$ forward. The force and displacement are in the same direction, so work done by static friction on block $A$ is positive. Both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Rolling friction is significantly smaller than sliding friction between the same pair of surfaces.\\nReason: During pure rolling, there is no relative sliding at the instantaneous point of contact, and resistance is mainly due to small surface deformation.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In ideal rolling, the instantaneous contact point is momentarily at rest relative to the ground. Resistance arises due to slight elastic/inelastic deformation and adhesive forces, making rolling friction several orders of magnitude smaller than sliding friction. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The angle of repose is equal to the angle of static friction for a given pair of contact surfaces.\\nReason: Both the angle of repose $\\theta$ and the angle of friction $\\lambda$ satisfy the condition $\\tan\\theta = \\tan\\lambda = \\mu_s$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "On an inclined plane at angle $\\theta$, limiting equilibrium occurs when $mg\\sin\\theta = \\mu_s mg\\cos\\theta \\implies \\tan\\theta = \\mu_s$. By definition, the angle of friction $\\lambda$ satisfies $\\tan\\lambda = f_s/N = \\mu_s$. Thus $\\theta = \\lambda$. Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A car can accelerate forward on a rough horizontal road because of the friction exerted by the road on the driving wheels.\\nReason: The static friction exerted by the road on the driving wheels acts in the forward direction of the car's motion.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The engine rotates the driving wheels, which tend to push the ground backward at the contact point. By Newton's third law, the road exerts a forward static friction force on the wheels, driving the car forward. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The coefficient of static friction depends strongly on the apparent macroscopic surface area of contact.\\nReason: Limiting static friction force is directly proportional to the normal reaction ($f_{\\text{max}} = \\mu_s N$).",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: To a very good approximation (Amontons' laws of friction), friction is independent of the macroscopic area of contact because the true microscopic contact area depends only on the normal force and material hardness. Reason is true: $f_{\\text{max}} = \\mu_s N$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A block remains stationary on an inclined plane of inclination $\\theta$ if $\\theta \\le \\tan^{-1}(\\mu_s)$.\\nReason: At inclination $\\theta \\le \\tan^{-1}(\\mu_s)$, the component of gravity down the plane $mg\\sin\\theta$ does not exceed the maximum limiting static friction $\\mu_s mg\\cos\\theta$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The downward gravitational component is $mg\\sin\\theta$ and maximum static friction is $\\mu_s mg\\cos\\theta$. If $\\tan\\theta \\le \\mu_s$, $mg\\sin\\theta \\le \\mu_s mg\\cos\\theta$, so static friction prevents slipping. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Kinetic friction between two sliding dry metallic surfaces increases drastically when the sliding speed is doubled.\\nReason: Kinetic friction is directly proportional to the relative sliding speed between the surfaces.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Both Assertion and Reason are false (Option D corresponds to Assertion false): Kinetic friction is largely independent of the relative velocity of sliding over a moderate range of speeds. It depends only on normal reaction and nature of the surfaces.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The total contact force exerted by a rough horizontal surface on a resting block of mass $m$ pulled by a horizontal force $F < \\mu_s mg$ has magnitude $\\sqrt{(mg)^2 + F^2}$.\\nReason: The total contact force is the vector resultant of the normal reaction $N$ and the static friction force $f_s$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since the block remains at rest, vertical equilibrium gives $N = mg$ and horizontal equilibrium gives $f_s = F$. The total contact force is $R = \\sqrt{N^2 + f_s^2} = \\sqrt{(mg)^2 + F^2}$. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: It is impossible to walk on a completely frictionless horizontal sheet of ice.\\nReason: Walking requires an external horizontal force, which is provided by the static friction between our shoes and the ground.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "When walking, we push backward against the ground. If there is no friction ($\\,\\mu = 0$), the ground cannot exert a forward reactionary force, making horizontal acceleration impossible. Both Assertion and Reason are true, and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The coefficient of friction between two surfaces can never exceed unity ($\\mu \\le 1$).\\nReason: Friction force can never exceed the normal contact reaction force between two bodies.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: Certain materials, such as clean metals in vacuum, silicone rubber, and racing car tires on dry asphalt, can have coefficients of friction significantly greater than 1 (e.g. $\\mu \\approx 1.2$ to $2.0$). Reason is false: When $\\mu > 1$, friction force exceeds normal reaction.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a ladder leans against a rough vertical wall and a smooth horizontal floor, it cannot be in static equilibrium.\\nReason: For horizontal equilibrium, the normal reaction from the vertical wall must be balanced by a horizontal friction force, which cannot be provided by a smooth floor.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The vertical wall exerts a normal force perpendicular to itself (horizontal). For translational equilibrium in the horizontal direction, $\\sum F_x = 0$. Since the floor is smooth, it cannot provide any horizontal frictional force to balance the wall's normal force. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Lubricants reduce sliding friction between moving machine components.\\nReason: Lubricants form a thin fluid film between solid surfaces, replacing dry solid-solid contact with lower internal fluid viscosity resistance.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Lubricating oils and greases fill microscopic surface asperities and separate metal parts with a thin layer of fluid, replacing high dry friction with hydrodynamic shear resistance. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Total mechanical work done by kinetic friction on a two-block sliding system is always strictly negative.\\nReason: Kinetic friction dissipates mechanical energy into thermal energy at the rubbing contact interface.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "While kinetic friction can do positive work on one individual body, the net work done on the interacting system is $W_{\\text{net}} = -f_k \\Delta s_{\\text{rel}} < 0$, which represents mechanical energy lost as heat. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Highly polished smooth surfaces in vacuum can sometimes exhibit an extremely high resistance to sliding.\\nReason: Extreme smoothness increases the actual microscopic area of contact, resulting in cold welding of surface atoms.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "When two very clean, ultra-flat surfaces are brought together, the actual area of contact approaches the apparent area, causing strong molecular cohesion and cold welding that increases the force needed to slide them. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Sand is scattered on tracks covered with snow to prevent trains and vehicles from skidding.\\nReason: Scattering sand increases the roughness of the contact surface, thereby increasing the coefficient of friction.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Sand particles embed into the smooth, slippery snow/ice layer, creating microscopic irregularities and increasing the coefficient of friction to allow tires/wheels to grip without slipping. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A heavy box is resting on a rough horizontal floor. If a horizontal force of $10\\,\\text{N}$ is applied and the box does not move, the static friction force is $10\\,\\text{N}$.\\nReason: Static friction is always equal to $\\mu_s N$, regardless of the magnitude of the applied horizontal force.",
    options: AR_OPTIONS,
    correctAnswer: 2,
    explanation: "Assertion is true: Since the box remains at rest, $\\sum F_x = 0 \\implies f_s = F_{\\text{applied}} = 10\\,\\text{N}$. Reason is false: $\\mu_s N$ is the maximum (limiting) value of static friction; for applied force below limiting friction, $f_s = F_{\\text{applied}} < \\mu_s N$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Ball bearings are installed in wheel hubs and rotating machinery to minimize mechanical energy loss.\\nReason: Ball bearings replace sliding contact with rolling contact, drastically reducing frictional resistance.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Rolling friction is typically tens or hundreds of times smaller than sliding friction. Ball bearings convert sliding between axle and hub into rolling motion of steel balls. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The angle of friction is the angle which the resultant contact force makes with the normal reaction when the body is in limiting equilibrium.\\nReason: In limiting equilibrium, $\\tan\\lambda = \\frac{f_{\\text{max}}}{N} = \\mu_s$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "By definition, the resultant contact force $\\vec{R} = \\vec{N} + \\vec{f}_{\\text{max}}$. The angle $\\lambda$ between $\\vec{R}$ and $\\vec{N}$ satisfies $\\tan\\lambda = f_{\\text{max}}/N = \\mu_s$. Both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A block of mass $m$ placed on an inclined plane of angle $45^\\circ$ slides down with acceleration $\\frac{g}{\\sqrt{2}}(1 - \\mu_k)$.\\nReason: The equation of motion along the plane is $mg\\sin 45^\\circ - f_k = ma$, where $f_k = \\mu_k mg\\cos 45^\\circ$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "$mg\\sin 45^\\circ - \\mu_k mg\\cos 45^\\circ = ma$. Since $\\sin 45^\\circ = \\cos 45^\\circ = 1/\\sqrt{2}$, $a = \\frac{g}{\\sqrt{2}}(1 - \\mu_k)$. Both Assertion and Reason are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If a block sliding down a rough inclined plane reaches a constant terminal velocity, the angle of inclination of the plane must equal the angle of kinetic friction.\\nReason: At constant velocity, net force along the incline is zero: $mg\\sin\\theta = \\mu_k mg\\cos\\theta \\implies \\tan\\theta = \\mu_k$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For zero acceleration, the downhill component of gravity balances kinetic friction: $mg\\sin\\theta = f_k = \\mu_k mg\\cos\\theta \\implies \\tan\\theta = \\mu_k = \\tan\\lambda_k$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a cylinder rolls without slipping down a rough inclined plane, static friction does zero net mechanical work on the cylinder.\\nReason: The instantaneous point of contact of the rolling cylinder with the inclined plane has zero instantaneous displacement.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In pure rolling, the contact point is at rest at each instant ($v_{\\text{contact}} = 0$). Since there is no displacement of the point of application of the force, the work done by static friction is zero. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Thermal energy generated per second at a sliding contact interface is equal to $f_k v_{\\text{rel}}$, where $v_{\\text{rel}}$ is the relative sliding velocity.\\nReason: Power dissipated by kinetic friction is the rate of work done by kinetic friction against relative motion.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Rate of heat generation equals mechanical power dissipated by friction: $P_{\\text{diss}} = f_k \\times v_{\\text{rel}}$. Both Assertion and Reason are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When brakes are applied to lock the wheels of a speeding car, the stopping distance is shorter than when braking without wheel lock (using ABS).\\nReason: The coefficient of kinetic friction $\\mu_k$ is strictly greater than the coefficient of static friction $\\mu_s$.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Both Assertion and Reason are false (Option D corresponds to Assertion false): Locking wheels replaces static friction with kinetic friction. Since $\\mu_s > \\mu_k$, anti-lock braking systems (ABS) maintain impending static friction, resulting in shorter stopping distance and better steering control.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 7 MCQ QUESTIONS ---
  {
    type: "MCQ",
    question: "A block of mass $m = 2\\,\\text{kg}$ is held against a vertical wall by applying a horizontal force $F$. If the coefficient of static friction between the block and the wall is $\\mu_s = 0.4$, the minimum horizontal force $F$ required to keep the block stationary is: (Take $g = 10\\,\\text{m/s}^2$)",
    options: [
      "$20\\,\\text{N}$",
      "$50\\,\\text{N}$",
      "$40\\,\\text{N}$",
      "$80\\,\\text{N}$"
    ],
    correctAnswer: 1,
    explanation: "For vertical equilibrium, $f_s = mg$. The maximum static friction is $\\mu_s N = \\mu_s F$. To prevent slipping: $\\mu_s F \\ge mg \\implies F \\ge \\frac{mg}{\\mu_s} = \\frac{2 \\times 10}{0.4} = 50\\,\\text{N}$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A block of mass $M = 10\\,\\text{kg}$ is placed on a rough horizontal surface with $\\mu_s = 0.5$ and $\\mu_k = 0.4$. A horizontal force of $30\\,\\text{N}$ is applied to the block. The frictional force acting on the block is: (Take $g = 10\\,\\text{m/s}^2$)",
    options: [
      "$50\\,\\text{N}$",
      "$40\\,\\text{N}$",
      "$30\\,\\text{N}$",
      "$0\\,\\text{N}$"
    ],
    correctAnswer: 2,
    explanation: "Limiting static friction is $f_{\\text{max}} = \\mu_s mg = 0.5 \\times 10 \\times 10 = 50\\,\\text{N}$. The applied force is $F = 30\\,\\text{N} < 50\\,\\text{N}$. Since the applied force is less than limiting friction, the block remains at rest and static friction self-adjusts to equal the applied force: $f = 30\\,\\text{N}$. Option C is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A block slides down an inclined plane of inclination $30^\\circ$ with constant velocity. What is the coefficient of kinetic friction between the block and the inclined plane?",
    options: [
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\sqrt{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    correctAnswer: 0,
    explanation: "For motion with constant velocity (zero acceleration): $mg\\sin\\theta = f_k = \\mu_k mg\\cos\\theta \\implies \\mu_k = \\tan\\theta = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A block of mass $m$ is placed on top of another block of mass $M$ which rests on a smooth horizontal table. The coefficient of static friction between the two blocks is $\\mu$. What is the maximum horizontal force that can be applied to mass $M$ so that both blocks move together without slipping?",
    options: [
      "$\\mu mg$",
      "$\\mu (M + m)g$",
      "$\\mu Mg$",
      "$\\frac{\\mu M mg}{M + m}$"
    ],
    correctAnswer: 1,
    explanation: "The maximum acceleration that friction can impart to mass $m$ without slipping is $a_{\\text{max}} = \\frac{\\mu mg}{m} = \\mu g$. For both blocks to accelerate together with $a_{\\text{max}}$, the external force applied to the system of mass $(M + m)$ is $F_{\\text{max}} = (M + m)a_{\\text{max}} = \\mu (M + m)g$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A body of mass $m$ is moving on a rough horizontal surface with initial velocity $v_0$. If $\\mu$ is the coefficient of kinetic friction, the distance travelled by the body before coming to rest is:",
    options: [
      "$\\frac{v_0^2}{\\mu g}$",
      "$\\frac{v_0^2}{2\\mu g}$",
      "$\\frac{2v_0^2}{\\mu g}$",
      "$\\frac{\\mu v_0^2}{2g}$"
    ],
    correctAnswer: 1,
    explanation: "Retardation is $a = \\mu g$. Using kinematic equation $v^2 = u^2 - 2as \\implies 0 = v_0^2 - 2(\\mu g)s \\implies s = \\frac{v_0^2}{2\\mu g}$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "What is the minimum force $F$ required to drag a block of mass $m$ along a rough horizontal plane (coefficient of friction $\\mu$) by applying a force at an angle $\\theta$ with the horizontal?",
    options: [
      "$\\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$",
      "$\\mu mg$",
      "$\\frac{mg}{\\sqrt{1 + \\mu^2}}$",
      "$\\frac{\\mu mg}{1 + \\mu^2}$"
    ],
    correctAnswer: 0,
    explanation: "Horizontal equilibrium requires $F\\cos\\theta = \\mu (mg - F\\sin\\theta) \\implies F = \\frac{\\mu mg}{\\cos\\theta + \\mu\\sin\\theta}$. To minimize $F$, denominator $\\cos\\theta + \\mu\\sin\\theta$ must be maximum, which is $\\sqrt{1 + \\mu^2}$ (when $\\tan\\theta = \\mu$). Thus $F_{\\text{min}} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A conveyer belt is moving horizontally at a constant speed of $2\\,\\text{m/s}$. A box is gently dropped on it. If the coefficient of kinetic friction between the box and the belt is $\\mu = 0.5$, how far does the box slide relative to the belt before it stops slipping? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [
      "$0.2\\,\\text{m}$",
      "$0.4\\,\\text{m}$",
      "$0.8\\,\\text{m}$",
      "$1.0\\,\\text{m}$"
    ],
    correctAnswer: 1,
    explanation: "In ground frame, acceleration of the box is $a = \\mu g = 0.5 \\times 10 = 5\\,\\text{m/s}^2$. Time to reach belt speed $v = 2\\,\\text{m/s}$ is $t = v/a = 2/5 = 0.4\\,\\text{s}$. In this time, belt moves $s_{\\text{belt}} = vt = 2 \\times 0.4 = 0.8\\,\\text{m}$. Box moves $s_{\\text{box}} = \\frac{1}{2}at^2 = \\frac{1}{2}(5)(0.4)^2 = 0.4\\,\\text{m}$. Relative displacement is $s_{\\text{rel}} = s_{\\text{belt}} - s_{\\text{box}} = 0.8 - 0.4 = 0.4\\,\\text{m}$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 20 NUMERICAL QUESTIONS ---
  {
    type: "NUMERICAL",
    question: "A block of mass $4\\,\\text{kg}$ is pushed along a horizontal surface with a constant speed by a horizontal force of $16\\,\\text{N}$. What is the coefficient of kinetic friction between the block and the surface? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 0.4,
    explanation: "At constant speed, $F = f_k = \\mu_k mg \\implies 16 = \\mu_k (4 \\times 10) = 40\\mu_k \\implies \\mu_k = 16/40 = 0.4$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $5\\,\\text{kg}$ is resting on a rough horizontal surface with coefficient of static friction $\\mu_s = 0.6$. What is the magnitude of limiting friction (in Newtons)? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 30,
    explanation: "$f_{\\text{lim}} = \\mu_s mg = 0.6 \\times 5 \\times 10 = 30\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A car moving at $20\\,\\text{m/s}$ skids to a stop on a level rough road where the coefficient of friction is $\\mu = 0.4$. What is the stopping distance in meters? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 50,
    explanation: "$s = \\frac{v^2}{2\\mu g} = \\frac{20^2}{2 \\times 0.4 \\times 10} = \\frac{400}{8} = 50\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $10\\,\\text{kg}$ is released from rest on an inclined plane of angle $37^\\circ$ ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). If the coefficient of kinetic friction is $\\mu_k = 0.25$, find the acceleration of the block down the incline in $\\text{m/s}^2$. (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 4,
    explanation: "$a = g(\\sin 37^\\circ - \\mu_k\\cos 37^\\circ) = 10(0.6 - 0.25 \\times 0.8) = 10(0.6 - 0.2) = 10 \\times 0.4 = 4\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A force of $60\\,\\text{N}$ is applied horizontally to a $10\\,\\text{kg}$ block on a rough floor. If the coefficient of kinetic friction is $\\mu_k = 0.4$, what is the acceleration of the block in $\\text{m/s}^2$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 2,
    explanation: "$f_k = \\mu_k mg = 0.4 \\times 10 \\times 10 = 40\\,\\text{N}$. Net force $F_{\\text{net}} = 60 - 40 = 20\\,\\text{N}$. Acceleration $a = 20/10 = 2\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $2\\,\\text{kg}$ is pressed against a vertical wall with a horizontal force of $100\\,\\text{N}$. The coefficient of static friction between block and wall is $\\mu_s = 0.3$. What is the frictional force (in Newtons) acting on the block? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 20,
    explanation: "Limiting friction is $f_{\\text{max}} = \\mu_s F = 0.3 \\times 100 = 30\\,\\text{N}$. The downward weight is $mg = 2 \\times 10 = 20\\,\\text{N}$. Since $mg < f_{\\text{max}}$, the block does not slip and static friction balances weight exactly: $f_s = 20\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block slides down an inclined plane of inclination $45^\\circ$. The distance travelled by the block on the rough incline is found to take twice the time it takes on an identical smooth incline of same length. Calculate the coefficient of kinetic friction $\\mu_k$ of the rough incline.",
    options: [],
    correctAnswer: 0.75,
    explanation: "$s = \\frac{1}{2}a t^2$. On smooth incline: $a_1 = g\\sin 45^\\circ$. On rough incline: $a_2 = g(\\sin 45^\\circ - \\mu_k\\cos 45^\\circ) = g\\sin 45^\\circ(1 - \\mu_k)$. Since $t_2 = 2t_1$, $a_1 = 4a_2 \\implies 1 = 4(1 - \\mu_k) \\implies 1 - \\mu_k = 0.25 \\implies \\mu_k = 0.75$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $1\\,\\text{kg}$ lies on a horizontal surface. The coefficient of static friction is $\\mu_s = 0.5$. If a horizontal force of $2\\,\\text{N}$ is applied to the block, find the magnitude of the frictional force in Newtons. (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 2,
    explanation: "Limiting friction is $f_{\\text{max}} = \\mu_s mg = 0.5 \\times 1 \\times 10 = 5\\,\\text{N}$. The applied force $2\\,\\text{N} < 5\\,\\text{N}$, so static friction equals the applied force: $f = 2\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A $20\\,\\text{kg}$ crate is placed on the bed of a truck. The coefficient of static friction between the crate and the truck bed is $\\mu_s = 0.3$. What is the maximum horizontal acceleration (in $\\text{m/s}^2$) the truck can have without the crate slipping backwards? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 3,
    explanation: "Friction provides the acceleration: $ma \\le \\mu_s mg \\implies a_{\\text{max}} = \\mu_s g = 0.3 \\times 10 = 3\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $6\\,\\text{kg}$ is at rest on a rough horizontal plane ($\\mu_s = 0.4$, $\\mu_k = 0.3$). If a horizontal force of $36\\,\\text{N}$ is applied, find the acceleration produced in the body in $\\text{m/s}^2$. (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 3,
    explanation: "Limiting friction is $f_s = 0.4 \\times 6 \\times 10 = 24\\,\\text{N}$. Applied force $36\\,\\text{N} > 24\\,\\text{N}$, so the body slides. Kinetic friction $f_k = \\mu_k mg = 0.3 \\times 60 = 18\\,\\text{N}$. Acceleration $a = \\frac{36 - 18}{6} = \\frac{18}{6} = 3\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A chain of length $L = 2\\,\\text{m}$ is placed on a rough horizontal table. What is the maximum length (in meters) of the chain that can hang over the edge of the table without slipping, if the coefficient of static friction is $\\mu_s = 0.25$?",
    options: [],
    correctAnswer: 0.4,
    explanation: "Let hanging length be $x$. Mass per unit length is $\\lambda$. Hanging weight is $\\lambda x g$. Table portion has mass $\\lambda(L - x)$, so maximum static friction is $\\mu_s \\lambda(L - x)g$. For equilibrium: $\\lambda x g = \\mu_s \\lambda(L - x)g \\implies x = \\mu_s(L - x) \\implies x(1 + \\mu_s) = \\mu_s L \\implies x = \\frac{\\mu_s L}{1 + \\mu_s} = \\frac{0.25 \\times 2}{1.25} = 0.4\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $2\\,\\text{kg}$ is placed on an inclined plane. When the angle of inclination is increased to $30^\\circ$, the block just begins to slide down. Find the coefficient of static friction $\\mu_s$ to two decimal places (round to 0.58).",
    options: [],
    correctAnswer: 0.58,
    explanation: "Angle of repose $\\theta = 30^\\circ \\implies \\mu_s = \\tan 30^\\circ = 1/\\sqrt{3} \\approx 0.58$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $5\\,\\text{kg}$ is pulled across a rough horizontal floor by a force of $40\\,\\text{N}$ acting at an angle of $30^\\circ$ above the horizontal. If $\\mu_k = 0.2$, what is the normal reaction (in Newtons) exerted by the floor? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 30,
    explanation: "$N + F\\sin 30^\\circ = mg \\implies N = mg - F\\sin 30^\\circ = 5(10) - 40(0.5) = 50 - 20 = 30\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $4\\,\\text{kg}$ is projected up an inclined plane of inclination $30^\\circ$ with an initial velocity of $10\\,\\text{m/s}$. If $\\mu_k = \\frac{1}{2\\sqrt{3}}$, calculate the retardation (in $\\text{m/s}^2$) of the block. (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 7.5,
    explanation: "When moving up, both gravity and friction oppose motion: $a = g(\\sin 30^\\circ + \\mu_k\\cos 30^\\circ) = 10\\left(0.5 + \\frac{1}{2\\sqrt{3}} \\times \\frac{\\sqrt{3}}{2}\\right) = 10(0.5 + 0.25) = 10 \\times 0.75 = 7.5\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $3\\,\\text{kg}$ is placed on top of a $7\\,\\text{kg}$ block resting on a frictionless horizontal table. The coefficient of static friction between the two blocks is $\\mu_s = 0.3$. What is the maximum horizontal force (in Newtons) that can be applied to the $7\\,\\text{kg}$ block so that both blocks move together? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 30,
    explanation: "Maximum acceleration without slipping is $a_{\\text{max}} = \\mu_s g = 0.3 \\times 10 = 3\\,\\text{m/s}^2$. Total mass is $m_1 + m_2 = 3 + 7 = 10\\,\\text{kg}$. Maximum force $F = (m_1 + m_2)a_{\\text{max}} = 10 \\times 3 = 30\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $2\\,\\text{kg}$ is at rest on a rough horizontal surface with $\\mu_s = 0.4$. A horizontal force of $5\\,\\text{N}$ is applied to it. What is the total contact force (in Newtons) exerted by the surface on the body? (Take $g = 10\\,\\text{m/s}^2$, and round to 2 decimals or integer: $\\sqrt{425} \\approx 20.6$)",
    options: [],
    correctAnswer: 20.6,
    explanation: "Limiting friction is $f_{\\text{lim}} = 0.4 \\times 20 = 8\\,\\text{N}$. Since applied force is $5\\,\\text{N} < 8\\,\\text{N}$, static friction is $f_s = 5\\,\\text{N}$. Normal force is $N = 20\\,\\text{N}$. Total contact force $R = \\sqrt{N^2 + f_s^2} = \\sqrt{20^2 + 5^2} = \\sqrt{425} \\approx 20.6\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform ladder of length $5\\,\\text{m}$ and mass $20\\,\\text{kg}$ leans against a smooth vertical wall with its base on a rough horizontal floor at a distance of $3\\,\\text{m}$ from the wall. What is the minimum coefficient of static friction $\\mu$ between the floor and ladder to prevent slipping? (Round to 3 decimals: 0.375)",
    options: [],
    correctAnswer: 0.375,
    explanation: "Height along wall is $h = \\sqrt{5^2 - 3^2} = 4\\,\\text{m}$. Taking torque about bottom point: $N_{\\text{wall}} \\times 4 = mg \\times 1.5 \\implies N_{\\text{wall}} = \\frac{20(10)(1.5)}{4} = 75\\,\\text{N}$. Vertical equilibrium: $N_{\\text{floor}} = mg = 200\\,\\text{N}$. To prevent slipping: $\\mu N_{\\text{floor}} \\ge N_{\\text{wall}} \\implies \\mu \\ge 75/200 = 0.375$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A car is moving with velocity $v$ on a level road. The driver applies brakes and the car skids to a stop in a distance of $25\\,\\text{m}$. If the coefficient of kinetic friction is $\\mu = 0.5$, what was the initial speed of the car in $\\text{m/s}$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 15.8,
    explanation: "Retardation $a = \\mu g = 0.5 \\times 10 = 5\\,\\text{m/s}^2$. From $v^2 = 2as \\implies v = \\sqrt{2 \\times 5 \\times 25} = \\sqrt{250} \\approx 15.8\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A $2\\,\\text{kg}$ block on a flat floor has $\\mu_k = 0.2$. A horizontal force of $10\\,\\text{N}$ is applied for $2\\,\\text{s}$ starting from rest. What is the velocity of the block in $\\text{m/s}$ at $t = 2\\,\\text{s}$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 6,
    explanation: "Kinetic friction $f_k = \\mu_k mg = 0.2 \\times 20 = 4\\,\\text{N}$. Net force $F_{\\text{net}} = 10 - 4 = 6\\,\\text{N}$. Acceleration $a = 6/2 = 3\\,\\text{m/s}^2$. Velocity at $t = 2\\,\\text{s}$ is $v = at = 3 \\times 2 = 6\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A bullet of mass $20\\,\\text{g}$ travelling at $100\\,\\text{m/s}$ penetrates horizontally into a wooden block of mass $980\\,\\text{g}$ resting on a rough horizontal floor ($\\mu_k = 0.2$). How far (in meters) does the combined block-bullet system slide before coming to rest? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 1,
    explanation: "By conservation of momentum: $m v = (m + M)V \\implies 0.02 \\times 100 = (0.02 + 0.98)V \\implies 2 = 1.0 V \\implies V = 2\\,\\text{m/s}$. Retardation on rough floor is $a = \\mu_k g = 0.2 \\times 10 = 2\\,\\text{m/s}^2$. Stopping distance $s = \\frac{V^2}{2a} = \\frac{2^2}{2 \\times 2} = 1\\,\\text{m}$.",
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

console.log(`Part 2 generated: ${questions.length} questions (AR: ${arCount}, MCQ: ${mcqCount}, NUM: ${numCount})`);

const outPath = path.join(__dirname, 'data_jee_lom_part2.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
