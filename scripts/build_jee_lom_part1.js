const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Newton's laws";
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
    question: "Assertion: Newton's first law of motion defines both inertia and force qualitatively.\\nReason: Newton's first law states that every body continues in its state of rest or uniform motion in a straight line unless compelled by an external unbalanced force to act otherwise.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Newton's first law introduces the concept of inertia (tendency to resist changes in state of motion) and gives the qualitative definition of force as an external agency that changes or tends to change that state. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Newton's second law of motion is considered the most fundamental law of mechanics.\\nReason: Both Newton's first law and third law can be derived from Newton's second law.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Newton's second law $\\vec{F} = \\frac{d\\vec{p}}{dt}$ gives first law when $\\vec{F} = 0 \\implies \\vec{v} = \\text{constant}$, and conservation of momentum during interaction of two isolated bodies gives $\\vec{F}_{12} = -\\vec{F}_{21}$ (third law). Hence the second law is the fundamental law of motion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Action and reaction forces never cancel each other out.\\nReason: Action and reaction forces always act on two different interacting bodies simultaneously.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "According to Newton's third law, action and reaction forces act on two different bodies at the same instant of time. For two forces to cancel each other, they must act on the exact same body. Hence Assertion and Reason are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A horse has to apply a greater pull to start a heavy cart from rest than to keep it moving at a constant speed.\\nReason: The coefficient of static friction is greater than the coefficient of kinetic friction.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "To initiate motion from rest, the limiting static friction $f_s = \\mu_s N$ must be overcome. Once relative motion begins, the opposing friction is kinetic friction $f_k = \\mu_k N$. Since $\\mu_s > \\mu_k$, the force required to start is greater than that required to maintain constant speed.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A pseudo force is not a real physical force arising from any physical interaction.\\nReason: Pseudo force is an apparent force introduced to apply Newton's second law in non-inertial (accelerating) reference frames.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Pseudo force has no reaction pair and does not originate from electromagnetic, gravitational, or nuclear interactions. It is a mathematical convenience introduced in an accelerating frame with acceleration $\\vec{a}_0$ as $\\vec{F}_{\\text{pseudo}} = -m\\vec{a}_0$ so that Newton's laws can be applied.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: An astronaut in an orbiting satellite experiences a state of weightlessness.\\nReason: Gravitational acceleration due to Earth becomes exactly zero inside an orbiting satellite.",
    options: AR_OPTIONS,
    correctAnswer: 2,
    explanation: "Assertion is true: The astronaut is in free fall along with the satellite, so the normal contact reaction from the floor is zero ($N = 0$). Reason is false: The gravitational force (and gravitational acceleration $g' = GM/r^2$) is NOT zero; it provides the necessary centripetal acceleration for the circular orbit.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A person standing in a lift moving upwards with uniform velocity feels heavier than their actual weight.\\nReason: The normal reaction exerted by the lift floor on the person equals $N = m(g + a)$, where $a$ is the upward acceleration.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: For uniform velocity, acceleration $a = 0$, so normal reaction $N = mg$, meaning the person feels their actual weight. Reason is true: If the lift has upward acceleration $a$, $N = m(g + a)$. Thus Assertion is false but Reason is true.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the cable of an elevator breaks and it falls freely under gravity, a body inside the elevator experiences zero apparent weight.\\nReason: For a freely falling frame, the acceleration is $a = g$ downwards, so the normal reaction $N = m(g - g) = 0$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In free fall, downward acceleration is $g$. Writing the equation of motion for a person of mass $m$: $mg - N = mg \\implies N = 0$. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a bullet is fired from a rifle, the rifle recoils with equal kinetic energy as that of the bullet.\\nReason: In an isolated system, the total linear momentum is conserved during the firing of a bullet.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: Linear momentum magnitudes are equal ($p_r = p_b = p$). Since kinetic energy $K = \\frac{p^2}{2m}$, the rifle (having much larger mass $M$) receives much smaller kinetic energy ($K_r = \\frac{p^2}{2M} \\ll K_b = \\frac{p^2}{2m}$). Reason is true: Total momentum is conserved. Thus Assertion is false but Reason is true.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Inertial mass and gravitational mass of a body are strictly proportional and experimentally found to be identical.\\nReason: The acceleration produced in a freely falling body is independent of the mass of the body.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "By Newton's second law, $F = m_i a$. Gravitational force is $F = m_g g$. Equating them gives $a = \\left(\\frac{m_g}{m_i}\\right) g$. Since all bodies fall with the same acceleration $g$ in vacuum, the ratio $\\frac{m_g}{m_i}$ is constant (equal to 1). Both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A rocket moves forward in empty space by pushing against the surrounding atmospheric air.\\nReason: According to Newton's third law, the forward thrust on the rocket is the reaction to the backward momentum carried away by the ejected exhaust gases.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: A rocket operates by expelling high-velocity exhaust gases; it does not need air to push against and functions effectively in a vacuum. Reason is true: The thrust force $F = u_{\\text{rel}} \\left(-\\frac{dm}{dt}\\right)$ is the reaction force due to gas ejection.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A particle can be in equilibrium even if several concurrent forces act upon it.\\nReason: The necessary and sufficient condition for equilibrium of a particle is that the vector sum of all external forces acting on it must be zero ($\\sum \\vec{F} = 0$).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For a point particle, when the resultant vector sum $\\sum \\vec{F} = 0$, its acceleration is zero by Newton's second law, which defines translational equilibrium. Both statements are true, and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a body moves in a horizontal circle with constant speed, the net work done by the net force over any time interval is zero.\\nReason: The centripetal force is always directed perpendicular to the instantaneous velocity vector of the body.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In uniform circular motion, $\\vec{F} \\perp \\vec{v}$, so power $P = \\vec{F} \\cdot \\vec{v} = 0$, and work done $W = \\int P\\,dt = 0$. Both Assertion and Reason are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In an accelerated railway carriage, a plumb line hangs inclined backwards at an angle $\\theta = \\tan^{-1}(a/g)$ to the vertical.\\nReason: In the non-inertial frame of the carriage, an apparent pseudo force $ma$ acts horizontally in the direction opposite to the acceleration.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In the frame of the carriage accelerating forward with $a$, the bob experiences downward gravity $mg$ and backward pseudo force $ma$. The string tension balances the resultant: $T\\sin\\theta = ma$ and $T\\cos\\theta = mg \\implies \\tan\\theta = a/g$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A cricketer lowers their hands while catching a fast-moving cricket ball.\\nReason: By increasing the duration of impact $\\Delta t$, the average impulsive force exerted on the hands ($F_{\\text{avg}} = \\Delta p / \\Delta t$) is reduced.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The change in momentum $\\Delta p$ is fixed. Since impulse $J = F_{\\text{avg}} \\Delta t = \\Delta p$, increasing the time $\\Delta t$ decreases the average force experienced by the hands, preventing injury.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the net external force acting on a body is zero, the momentum of the body must be zero.\\nReason: Newton's second law states that $\\vec{F}_{\\text{ext}} = \\frac{d\\vec{p}}{dt}$.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: If $\\vec{F}_{\\text{ext}} = 0$, $\\frac{d\\vec{p}}{dt} = 0$, which means $\\vec{p}$ is constant, not necessarily zero (the body can be moving uniformly). Reason is true: Newton's second law is $\\vec{F}_{\\text{ext}} = \\frac{d\\vec{p}}{dt}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A bird perches on a bare high-voltage wire and does not get electrocuted, but if a monkey hangs from it with one hand, the tension in the wire increases.\\nReason: When a mass $M$ is hung from the midpoint of a horizontal taut wire, the tension in the wire can become much greater than $Mg$.",
    options: AR_OPTIONS,
    correctAnswer: 1,
    explanation: "Assertion and Reason are both true: The wire sags by an angle $\\theta$, giving $2T\\sin\\theta = Mg \\implies T = \\frac{Mg}{2\\sin\\theta}$. Since $\\theta$ is small for a taut wire, $\\sin\\theta \\ll 1$, so $T \\gg Mg$. However, the bird not being electrocuted is due to zero potential difference between its feet, which is unrelated to the mechanical tension. Thus Reason is NOT the explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A particle moving in a straight line with non-zero acceleration must have a non-zero net external force acting on it.\\nReason: According to Newton's second law, acceleration is directly proportional to the net force and inversely proportional to the mass of the body ($\\vec{a} = \\vec{F}_{\\text{net}}/m$).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since $\\vec{F}_{\\text{net}} = m\\vec{a}$, non-zero acceleration directly implies non-zero net force. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: An object can move along a curved path with constant speed only if a net force acts on it.\\nReason: In curved motion, the direction of velocity changes continuously, requiring a transverse component of acceleration.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "A change in direction means velocity is not constant ($\\,\\frac{d\\vec{v}}{dt} \\neq 0$). By Newton's second law, an acceleration requires a net external force. Both Assertion and Reason are true, and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The normal force exerted by a table on a book and the gravitational weight of the book form an action-reaction pair according to Newton's third law.\\nReason: The normal force and gravitational weight are equal in magnitude and opposite in direction for a book at rest on a horizontal table.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: Normal force and gravity act on the SAME body (the book). Action-reaction pairs act on different bodies (reaction to gravity is the gravitational pull of the book on Earth; reaction to normal force is the force exerted by the book on the table). Reason is true: For a book at rest, $N = mg$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A massive block suspended by a string has another identical string attached to its bottom. If the lower string is pulled with a sudden sharp jerk, the lower string breaks.\\nReason: Due to the high inertia of the massive block, the sudden impulse does not immediately transmit tension to the upper string.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "A sharp jerk provides a large impulsive force over a very short time. The block's inertia prevents it from accelerating quickly, so the tension in the upper string remains virtually unchanged while the lower string exceeds its breaking strength. Both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the lower string in the previous system is pulled steadily and gradually with increasing force, the upper string breaks first.\\nReason: Under a gradual pull, the upper string supports both the weight of the massive block and the applied downward pull, making its tension strictly greater.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In quasi-static equilibrium, $T_{\\text{upper}} = T_{\\text{lower}} + mg$. Since $T_{\\text{upper}} > T_{\\text{lower}}$, the upper string reaches its breaking limit first. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A man in an elevator accelerating downwards with acceleration $a > g$ will rise and hit the ceiling of the elevator.\\nReason: The apparent acceleration of the man relative to the elevator is directed upwards with magnitude $(a - g)$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In the frame of the elevator, the upward pseudo force $ma$ exceeds the downward gravity $mg$. The net force in the elevator frame is $m(a - g)$ upwards, giving upward acceleration $(a - g)$ until he strikes the ceiling. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A frame of reference attached to the surface of the Earth is strictly an inertial frame.\\nReason: The Earth rotates about its polar axis and revolves around the Sun with zero acceleration.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: Earth rotates on its axis and orbits the Sun, having centripetal acceleration ($a_c \\approx 0.034\\,\\text{m/s}^2$ at equator). Thus it is strictly a non-inertial frame. Reason is false: Earth experiences both orbital and rotational centripetal acceleration. Both statements are false (Option D corresponds to Assertion false).",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a constant force acts on a body of constant mass, its momentum increases linearly with time.\\nReason: Impulse is defined as the change in linear momentum, and for a constant force $\\Delta p = F \\Delta t$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since $F = \\frac{dp}{dt}$, integrating a constant force gives $p(t) = p_0 + F t$, which is a linear function of time. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A body placed on the floor of a bus experiences a forward force when the bus suddenly applies brakes.\\nReason: The forward force felt by the body inside the braking bus is a real interaction force exerted by the air inside the bus.",
    options: AR_OPTIONS,
    correctAnswer: 2,
    explanation: "Assertion is true: In the decelerating frame of the bus, a forward pseudo force acts on the body. Reason is false: The pseudo force is an apparent force due to the non-inertial reference frame, not an interaction force exerted by air.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 7 MCQ QUESTIONS ---
  {
    type: "MCQ",
    question: "A body of mass $5\\,\\text{kg}$ is acted upon by two mutually perpendicular forces $F_1 = 6\\,\\text{N}$ and $F_2 = 8\\,\\text{N}$. The magnitude of the acceleration produced in the body is:",
    options: [
      "$1.0\\,\\text{m/s}^2$",
      "$2.0\\,\\text{m/s}^2$",
      "$2.8\\,\\text{m/s}^2$",
      "$1.4\\,\\text{m/s}^2$"
    ],
    correctAnswer: 1,
    explanation: "The resultant force is $F = \\sqrt{F_1^2 + F_2^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\,\\text{N}$. By Newton's second law, acceleration is $a = \\frac{F}{m} = \\frac{10}{5} = 2.0\\,\\text{m/s}^2$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A man of mass $60\\,\\text{kg}$ stands on a weighing machine inside an elevator. If the elevator is moving downwards with a uniform acceleration of $2.0\\,\\text{m/s}^2$, what is the reading of the weighing machine? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [
      "$720\\,\\text{N}$",
      "$600\\,\\text{N}$",
      "$480\\,\\text{N}$",
      "$360\\,\\text{N}$"
    ],
    correctAnswer: 2,
    explanation: "For downward acceleration $a$, the normal reaction is $N = m(g - a) = 60(10 - 2.0) = 60 \\times 8.0 = 480\\,\\text{N}$. Option C is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A rocket of initial mass $6000\\,\\text{kg}$ ejects exhaust gases at a constant speed of $1000\\,\\text{m/s}$ relative to the rocket. What must be the rate of consumption of fuel to overcome the weight of the rocket and impart an initial upward acceleration of $20\\,\\text{m/s}^2$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [
      "$120\\,\\text{kg/s}$",
      "$180\\,\\text{kg/s}$",
      "$240\\,\\text{kg/s}$",
      "$60\\,\\text{kg/s}$"
    ],
    correctAnswer: 1,
    explanation: "Upward thrust is $F_{\\text{thrust}} = u \\left(-\\frac{dm}{dt}\\right)$. The equation of upward motion is $F_{\\text{thrust}} - mg = ma \\implies u \\left(-\\frac{dm}{dt}\\right) = m(g + a)$. Thus $-\\frac{dm}{dt} = \\frac{m(g + a)}{u} = \\frac{6000(10 + 20)}{1000} = 6 \\times 30 = 180\\,\\text{kg/s}$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A particle of mass $m$ is moving in a horizontal circle of radius $r$ under a centripetal force given by $F = -\\frac{k}{r^2}$, where $k$ is a positive constant. The total mechanical energy of the particle is:",
    options: [
      "$-\\frac{k}{2r}$",
      "$\\frac{k}{2r}$",
      "$-\\frac{k}{r}$",
      "$\\frac{k}{r}$"
    ],
    correctAnswer: 0,
    explanation: "Centripetal force is $\\frac{mv^2}{r} = \\frac{k}{r^2} \\implies mv^2 = \\frac{k}{r}$. The kinetic energy is $K = \\frac{1}{2}mv^2 = \\frac{k}{2r}$. Since $F = -\\frac{dU}{dr} = -\\frac{k}{r^2} \\implies U = -\\frac{k}{r}$ (taking $U(\\infty) = 0$). Total mechanical energy is $E = K + U = \\frac{k}{2r} - \\frac{k}{r} = -\\frac{k}{2r}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A block of mass $m$ is placed on a smooth inclined plane of inclination $\\theta$. The inclined plane is accelerated horizontally to the right with acceleration $a$. For the block to remain stationary relative to the incline, the magnitude of $a$ must be:",
    options: [
      "$g \\sin\\theta$",
      "$g \\cos\\theta$",
      "$g \\tan\\theta$",
      "$g / \\tan\\theta$"
    ],
    correctAnswer: 2,
    explanation: "In the frame of the incline accelerating rightwards, a pseudo force $ma$ acts horizontally to the left. The forces along the incline are $mg\\sin\\theta$ downwards and $ma\\cos\\theta$ upwards. For relative rest: $ma\\cos\\theta = mg\\sin\\theta \\implies a = g\\tan\\theta$. Option C is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A bullet of mass $0.04\\,\\text{kg}$ moving with a speed of $90\\,\\text{m/s}$ enters a heavy wooden block and stops after penetrating a distance of $60\\,\\text{cm}$. The average resistive force exerted by the block on the bullet is:",
    options: [
      "$270\\,\\text{N}$",
      "$540\\,\\text{N}$",
      "$135\\,\\text{N}$",
      "$300\\,\\text{N}$"
    ],
    correctAnswer: 0,
    explanation: "By work-energy theorem or kinematics: $v^2 = u^2 + 2as \\implies 0 = 90^2 - 2a(0.60) \\implies a = \\frac{8100}{1.2} = 6750\\,\\text{m/s}^2$. The resistive force is $F = ma = 0.04 \\times 6750 = 270\\,\\text{N}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A force $\\vec{F} = (2t\\hat{i} + 3t^2\\hat{j})\\,\\text{N}$ acts on a body of mass $1\\,\\text{kg}$ initially at rest at the origin. What is the velocity of the body at time $t = 2\\,\\text{s}$?",
    options: [
      "$(4\\hat{i} + 8\\hat{j})\\,\\text{m/s}$",
      "$(2\\hat{i} + 6\\hat{j})\\,\\text{m/s}$",
      "$(4\\hat{i} + 12\\hat{j})\\,\\text{m/s}$",
      "$(8\\hat{i} + 16\\hat{j})\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "Acceleration is $\\vec{a} = \\vec{F}/m = 2t\\hat{i} + 3t^2\\hat{j}$. Integrating from $0$ to $t = 2\\,\\text{s}$: $\\vec{v} = \\int_0^2 (2t\\hat{i} + 3t^2\\hat{j})\\,dt = [t^2\\hat{i} + t^3\\hat{j}]_0^2 = 4\\hat{i} + 8\\hat{j}\\,\\text{m/s}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 20 NUMERICAL QUESTIONS ---
  {
    type: "NUMERICAL",
    question: "A constant retarding force of $50\\,\\text{N}$ is applied to a body of mass $20\\,\\text{kg}$ moving initially with a speed of $15\\,\\text{m/s}$. How long (in seconds) does the body take to come to rest?",
    options: [],
    correctAnswer: 6,
    explanation: "Retardation $a = F/m = 50/20 = 2.5\\,\\text{m/s}^2$. From $v = u - at \\implies 0 = 15 - 2.5t \\implies t = 15/2.5 = 6\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $2\\,\\text{kg}$ initially at rest is subjected to a constant force of $10\\,\\text{N}$ for $4\\,\\text{s}$. Calculate the kinetic energy (in Joules) acquired by the body at the end of $4\\,\\text{s}$.",
    options: [],
    correctAnswer: 400,
    explanation: "Acceleration $a = F/m = 10/2 = 5\\,\\text{m/s}^2$. Velocity at $t = 4\\,\\text{s}$ is $v = at = 5 \\times 4 = 20\\,\\text{m/s}$. Kinetic energy $K = \\frac{1}{2}mv^2 = \\frac{1}{2}(2)(20)^2 = 400\\,\\text{J}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A lift of mass $1000\\,\\text{kg}$ is accelerated upwards at $2\\,\\text{m/s}^2$. What is the tension (in $\\text{kN}$) in the supporting cable? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 12,
    explanation: "Tension $T = m(g + a) = 1000(10 + 2) = 12000\\,\\text{N} = 12\\,\\text{kN}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A horizontal force $F$ pushes a $4\\,\\text{kg}$ block against a vertical rough wall. If the coefficient of static friction is $\\mu_s = 0.5$, what is the minimum value of $F$ (in Newtons) required to prevent the block from slipping down? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 80,
    explanation: "For vertical equilibrium, $f_s = mg \\implies \\mu_s N = mg$. Here horizontal force provides normal reaction $N = F$. Thus $\\mu_s F = mg \\implies F = \\frac{mg}{\\mu_s} = \\frac{4 \\times 10}{0.5} = 80\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A rocket of mass $500\\,\\text{kg}$ is set for vertical firing. If the exhaust speed is $800\\,\\text{m/s}$, how many kilograms of gas per second must be ejected to give the rocket an initial upward acceleration of $6\\,\\text{m/s}^2$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 10,
    explanation: "Thrust $u \\left(-\\frac{dm}{dt}\\right) = m(g + a) \\implies -\\frac{dm}{dt} = \\frac{500(10 + 6)}{800} = \\frac{500 \\times 16}{800} = 10\\,\\text{kg/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A force $\\vec{F} = (6\\hat{i} - 8\\hat{j})\\,\\text{N}$ produces an acceleration of $5\\,\\text{m/s}^2$ in a body. What is the mass of the body in kilograms?",
    options: [],
    correctAnswer: 2,
    explanation: "Magnitude of force is $F = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = 10\\,\\text{N}$. Mass $m = F/a = 10/5 = 2\\,\\text{kg}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A car of mass $1000\\,\\text{kg}$ travelling at $20\\,\\text{m/s}$ is brought to rest over a distance of $50\\,\\text{m}$. Find the magnitude of the braking force in kilonewtons ($\\text{kN}$).",
    options: [],
    correctAnswer: 4,
    explanation: "From $v^2 = u^2 - 2as \\implies 0 = 20^2 - 2a(50) \\implies 100a = 400 \\implies a = 4\\,\\text{m/s}^2$. Force $F = ma = 1000 \\times 4 = 4000\\,\\text{N} = 4\\,\\text{kN}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $2\\,\\text{kg}$ is placed on the floor of an elevator. The elevator starts moving upwards with an acceleration of $3\\,\\text{m/s}^2$. What is the normal reaction (in Newtons) exerted by the floor on the block? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 26,
    explanation: "$N = m(g + a) = 2(10 + 3) = 2 \\times 13 = 26\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A helicopter of mass $2000\\,\\text{kg}$ rises vertically with an acceleration of $15\\,\\text{m/s}^2$. What is the magnitude of the vertical force (in $\\text{kN}$) exerted by the rotor on the surrounding air? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 50,
    explanation: "Upward lift force is $F = m(g + a) = 2000(10 + 15) = 2000 \\times 25 = 50000\\,\\text{N} = 50\\,\\text{kN}$. By Newton's third law, the rotor exerts an equal downward force of $50\\,\\text{kN}$ on the air.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A $70\\,\\text{kg}$ man stands in an elevator that accelerates downwards at $4\\,\\text{m/s}^2$. What is his apparent weight in Newtons? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 420,
    explanation: "Apparent weight $N = m(g - a) = 70(10 - 4) = 70 \\times 6 = 420\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A position-dependent force $F(x) = (3x^2 + 4)\\,\\text{N}$ acts on a particle of mass $2\\,\\text{kg}$ initially at rest at $x = 0$. What is the work done (in Joules) by the force as the particle moves from $x = 0$ to $x = 2\\,\\text{m}$?",
    options: [],
    correctAnswer: 16,
    explanation: "Work done $W = \\int_0^2 (3x^2 + 4)\\,dx = [x^3 + 4x]_0^2 = (2^3 + 4 \\times 2) = 8 + 8 = 16\\,\\text{J}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A force of $20\\,\\text{N}$ acts on a body of mass $5\\,\\text{kg}$ for a duration of $3\\,\\text{s}$. Find the change in momentum (in $\\text{kg}\\cdot\\text{m/s}$) of the body.",
    options: [],
    correctAnswer: 60,
    explanation: "$\\Delta p = F \\times \\Delta t = 20 \\times 3 = 60\\,\\text{kg}\\cdot\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $3\\,\\text{kg}$ moving with an initial velocity of $4\\,\\text{m/s}$ is acted upon by a force of $6\\,\\text{N}$ in the direction of motion. Calculate the speed of the body (in $\\text{m/s}$) after $5\\,\\text{seconds}$.",
    options: [],
    correctAnswer: 14,
    explanation: "Acceleration $a = F/m = 6/3 = 2\\,\\text{m/s}^2$. Final velocity $v = u + at = 4 + 2(5) = 14\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $10\\,\\text{kg}$ is held at rest on an inclined plane of inclination $30^\\circ$. What force (in Newtons) parallel to the incline is required to keep the block stationary if the surface is frictionless? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 50,
    explanation: "The component of weight along the incline is $F = mg\\sin 30^\\circ = 10 \\times 10 \\times 0.5 = 50\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A $0.5\\,\\text{kg}$ ball moving horizontally at $12\\,\\text{m/s}$ hits a vertical wall and bounces back horizontally at $8\\,\\text{m/s}$. If the contact time is $0.02\\,\\text{s}$, what is the magnitude of the average force (in Newtons) exerted by the wall on the ball?",
    options: [],
    correctAnswer: 500,
    explanation: "Change in momentum is $\\Delta p = m(v_f - v_i) = 0.5(8 - (-12)) = 0.5(20) = 10\\,\\text{kg}\\cdot\\text{m/s}$. Average force $F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t} = \\frac{10}{0.02} = 500\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A car accelerates uniformly from rest to $30\\,\\text{m/s}$ in $10\\,\\text{s}$. If the mass of the car is $1200\\,\\text{kg}$, what is the net accelerating force in kilonewtons ($\\text{kN}$)?",
    options: [],
    correctAnswer: 3.6,
    explanation: "Acceleration $a = (30 - 0)/10 = 3\\,\\text{m/s}^2$. Net force $F = ma = 1200 \\times 3 = 3600\\,\\text{N} = 3.6\\,\\text{kN}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A stone of mass $0.25\\,\\text{kg}$ tied to the end of a string is whirled round in a horizontal circle of radius $1.5\\,\\text{m}$ with a speed of $6\\,\\text{m/s}$. What is the tension (in Newtons) in the string?",
    options: [],
    correctAnswer: 6,
    explanation: "Tension provides centripetal force: $T = \\frac{mv^2}{r} = \\frac{0.25 \\times 6^2}{1.5} = \\frac{0.25 \\times 36}{1.5} = \\frac{9}{1.5} = 6\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $4\\,\\text{kg}$ is pulled along a smooth horizontal surface by a force of $20\\,\\text{N}$ inclined at an angle of $60^\\circ$ to the horizontal. Calculate the acceleration of the block in $\\text{m/s}^2$.",
    options: [],
    correctAnswer: 2.5,
    explanation: "Horizontal component of force is $F_x = F\\cos 60^\\circ = 20 \\times 0.5 = 10\\,\\text{N}$. Acceleration $a = F_x/m = 10/4 = 2.5\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "An object of mass $5\\,\\text{kg}$ moves under the action of a force such that its position is given by $x(t) = 2t^3 + 3t\\,\\text{m}$. What is the magnitude of the force (in Newtons) acting on the object at time $t = 1\\,\\text{s}$?",
    options: [],
    correctAnswer: 60,
    explanation: "$v(t) = \\frac{dx}{dt} = 6t^2 + 3$, and $a(t) = \\frac{dv}{dt} = 12t$. At $t = 1\\,\\text{s}$, $a = 12\\,\\text{m/s}^2$. Force $F = ma = 5 \\times 12 = 60\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring balance is attached to the ceiling of a lift. A man hangs his bag on the spring balance and the balance reads $49\\,\\text{N}$ when the lift is stationary. If the lift goes down with an acceleration of $5\\,\\text{m/s}^2$, what is the reading of the spring balance in Newtons? (Take $g = 9.8\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 24,
    explanation: "Actual weight is $mg = 49\\,\\text{N} \\implies m = 49/9.8 = 5\\,\\text{kg}$. When moving down with acceleration $a = 5\\,\\text{m/s}^2$, reading is $N = m(g - a) = 5(9.8 - 5) = 5 \\times 4.8 = 24\\,\\text{N}$.",
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

console.log(`Part 1 generated: ${questions.length} questions (AR: ${arCount}, MCQ: ${mcqCount}, NUM: ${numCount})`);

const outPath = path.join(__dirname, 'data_jee_lom_part1.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
