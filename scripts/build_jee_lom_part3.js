const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Connected motion and pulley problems";
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
    question: "Assertion: In an ideal Atwood machine consisting of two masses $m_1$ and $m_2$ ($m_1 > m_2$) connected by a light inextensible string over a light frictionless pulley, the tension in the string is less than $m_1 g$ and greater than $m_2 g$.\\nReason: The mass $m_1$ accelerates downwards with $a = \\frac{m_1 - m_2}{m_1 + m_2}g$, requiring $m_1 g - T > 0$, while $m_2$ accelerates upwards, requiring $T - m_2 g > 0$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For downward acceleration of $m_1$: $m_1 g - T = m_1 a > 0 \\implies T < m_1 g$. For upward acceleration of $m_2$: $T - m_2 g = m_2 a > 0 \\implies T > m_2 g$. Hence $m_2 g < T < m_1 g$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a pulley system, the tension throughout a single light inextensible string passing over an ideal frictionless pulley is uniform.\\nReason: An ideal string is massless ($m = 0$) and the ideal pulley has zero moment of inertia and zero friction.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since the string is massless, any net force on an element would produce infinite acceleration; therefore, the tension must be identical on both sides of any element. Because the pulley is frictionless and massless, no torque is required to rotate it, so tension is uniform throughout. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The total downward force exerted by an ideal Atwood machine on its supporting clamp is strictly less than $(m_1 + m_2)g$ when $m_1 \\neq m_2$.\\nReason: The tension in the string is $T = \\frac{2m_1 m_2}{m_1 + m_2}g$, and the downward clamp force is $2T = \\frac{4m_1 m_2}{m_1 + m_2}g < (m_1 + m_2)g$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since $(m_1 - m_2)^2 > 0 \\implies (m_1 + m_2)^2 > 4m_1 m_2 \\implies \\frac{4m_1 m_2}{m_1 + m_2} < m_1 + m_2$. Thus the force on the clamp $F_{\\text{clamp}} = 2T < (m_1 + m_2)g$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a movable pulley system where one end of the string is fixed to the ceiling and the other passes under a movable pulley supporting load $W$, the tension in the string is $W/2$ in equilibrium.\\nReason: The two vertical segments of the string supporting the movable pulley share the load equally ($2T = W$).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For vertical equilibrium of the ideal movable pulley: $2T = W \\implies T = W/2$. Thus both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a system of interconnected bodies connected by taut inextensible strings, the virtual work done by internal string tensions is always zero ($\\sum \\vec{T} \\cdot \\vec{a} = 0$).\\nReason: The length of an inextensible string remains constant at all times.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since the total string length is fixed, $\\sum l_i = \\text{constant}$. Differentiating twice with respect to time gives the constraint relation between accelerations, which is equivalent to $\\sum \\vec{T} \\cdot \\vec{a} = 0$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Two bodies of masses $m_1$ and $m_2$ connected by a light spring are suspended from the ceiling. If the upper supporting string is cut, the initial acceleration of mass $m_1$ is $\\frac{m_1 + m_2}{m_1}g$ downwards.\\nReason: Immediately after cutting, the spring tension does not change instantaneously and remains equal to $m_2 g$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Before cutting, spring tension is $T_s = m_2 g$. Immediately after cutting the upper string, the spring extension cannot change instantaneously, so it still exerts downward force $T_s = m_2 g$ on $m_1$. Net downward force on $m_1$ is $m_1 g + m_2 g$, giving downward acceleration $a_1 = \\frac{m_1 + m_2}{m_1}g$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In the spring-mass system from the previous question, the initial acceleration of mass $m_2$ immediately after cutting the upper string is zero.\\nReason: The forces acting on $m_2$ immediately after cutting remain the downward gravity $m_2 g$ and the upward spring force $T_s = m_2 g$, which exactly cancel.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Because the spring extension remains temporarily unchanged, the upward tension on $m_2$ is still $T_s = m_2 g$. Net force on $m_2$ is $m_2 g - m_2 g = 0$, giving initial acceleration $a_2 = 0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A block of mass $m$ on a smooth horizontal table is connected by a string passing over a pulley to a hanging mass $m$. The acceleration of the system is $g/2$.\\nReason: The total accelerating gravitational force on the system is $mg$, and the total mass being accelerated is $2m$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The net external driving force is the weight of the hanging mass ($mg$). The total inertia of the connected system is $m + m = 2m$. By Newton's second law, acceleration is $a = \\frac{mg}{2m} = \\frac{g}{2}$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the string connecting two blocks in an accelerating Atwood machine is suddenly cut, each mass immediately begins to accelerate downwards with acceleration $g$.\\nReason: Once the string is cut, the tension in the string drops instantly to zero, and the only force acting on each body is gravity.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Without the string tension ($T = 0$), each mass is under pure free fall under gravity, accelerating downward at $g$. Both statements are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a system of three blocks $m_1, m_2, m_3$ resting in contact on a smooth horizontal surface and pushed by a horizontal force $F$ applied to $m_1$, the contact force between $m_2$ and $m_3$ is $\\frac{m_3 F}{m_1 + m_2 + m_3}$.\\nReason: The contact force between $m_2$ and $m_3$ accelerates only block $m_3$ with the common acceleration $a = \\frac{F}{m_1 + m_2 + m_3}$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Common acceleration of the system is $a = \\frac{F}{m_1 + m_2 + m_3}$. The only horizontal force acting on $m_3$ is the normal contact force $N_{23}$ from $m_2$. Therefore, $N_{23} = m_3 a = \\frac{m_3 F}{m_1 + m_2 + m_3}$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a monkey climbs up a light rope hanging from a fixed branch with an acceleration $a$, the tension in the rope is $m(g + a)$.\\nReason: The equation of vertical motion for the monkey is $T - mg = ma$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The monkey pulls down on the rope, and by Newton's third law the rope exerts upward force $T$. For upward acceleration $a$: $T - mg = ma \\implies T = m(g + a)$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the monkey slides down the rope with an acceleration $a = g$, the tension in the rope becomes zero.\\nReason: The equation of downward motion is $mg - T = ma$, which gives $T = m(g - a) = m(g - g) = 0$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "When accelerating downwards at $g$, the monkey is in free fall, so the normal grip force and tension in the rope are zero. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The acceleration of a block sliding down a smooth inclined plane of angle $\\theta$ is independent of its mass.\\nReason: Both the component of gravitational force down the incline and the mass of the block are directly proportional to $m$, so $a = \\frac{mg\\sin\\theta}{m} = g\\sin\\theta$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In the absence of friction, $F_{\\text{net}} = mg\\sin\\theta = ma \\implies a = g\\sin\\theta$, which depends only on $g$ and $\\theta$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: For two blocks of masses $m_1$ and $m_2$ connected by a string on a double inclined plane with angles $\\alpha$ and $\\beta$, equilibrium requires $m_1\\sin\\alpha = m_2\\sin\\beta$ (assuming smooth surfaces).\\nReason: Tension in the continuous connecting string must balance the gravitational component of each block along its respective incline.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For mass $m_1$: $T = m_1 g\\sin\\alpha$. For mass $m_2$: $T = m_2 g\\sin\\beta$. Equating tensions gives $m_1\\sin\\alpha = m_2\\sin\\beta$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A heavy rope of mass $M$ and length $L$ is pulled horizontally on a smooth table by a force $F$. The tension at a distance $x$ from the end where force is applied is $F\\left(1 - \\frac{x}{L}\\right)$.\\nReason: The acceleration of the rope is $a = F/M$, and the tension at distance $x$ accelerates the remaining mass of length $(L - x)$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The mass of the portion behind distance $x$ is $m' = M\\frac{L - x}{L}$. The tension at $x$ accelerates this mass: $T = m' a = M\\left(1 - \\frac{x}{L}\\right)\\frac{F}{M} = F\\left(1 - \\frac{x}{L}\\right)$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In an Atwood machine, the center of mass of the two masses accelerates downwards with acceleration $a_{\\text{cm}} = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)^2 g$ (where $m_1 > m_2$).\\nReason: The acceleration of center of mass is given by $\\vec{a}_{\\text{cm}} = \\frac{m_1\\vec{a}_1 + m_2\\vec{a}_2}{m_1 + m_2}$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Taking downward as positive: $a_1 = +a$ and $a_2 = -a$, where $a = \\frac{m_1 - m_2}{m_1 + m_2}g$. Then $a_{\\text{cm}} = \\frac{m_1(+a) + m_2(-a)}{m_1 + m_2} = \\frac{m_1 - m_2}{m_1 + m_2}a = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)^2 g$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a block and tackle system with 4 pulleys, the ideal mechanical advantage is 4.\\nReason: The velocity ratio of an ideal pulley system with $n$ pulleys supporting the load is equal to $n$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In an ideal pulley system with $n$ segments of string supporting the movable load, the effort moves $n$ times the distance moved by the load ($VR = n$). Since efficiency $\\eta = 1$, mechanical advantage $MA = VR = n = 4$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a mass $m$ is suspended by a vertical string from the ceiling of an accelerating train car with acceleration $a$, the angle $\\theta$ that the string makes with the vertical satisfies $\\tan\\theta = a/g$.\\nReason: In the frame of the train, the pseudo force $ma$ acts horizontally and balances the horizontal component of string tension $T\\sin\\theta$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Horizontal equilibrium in train frame: $T\\sin\\theta = ma$. Vertical equilibrium: $T\\cos\\theta = mg$. Dividing equations yields $\\tan\\theta = a/g$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a pulley system, a massless string passing over a frictionless pulley exerts a resultant force of $\\sqrt{2}T$ on the axle when the string segments are mutually perpendicular.\\nReason: The resultant of two perpendicular vectors each of magnitude $T$ is $\\sqrt{T^2 + T^2} = \\sqrt{2}T$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The forces exerted by the two string segments on the pulley are perpendicular vectors of magnitude $T$. Their vector sum is $F = \\sqrt{T^2 + T^2} = \\sqrt{2}T$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If two masses $m_1 = 3\\,\\text{kg}$ and $m_2 = 2\\,\\text{kg}$ are tied to the ends of a string passing over a pulley, the lighter mass moves up with acceleration $g/5$.\\nReason: Acceleration in a simple Atwood machine is given by $a = \\frac{m_1 - m_2}{m_1 + m_2}g = \\frac{3 - 2}{3 + 2}g = \\frac{g}{5}$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The formula for acceleration in Atwood machine is $a = \\frac{m_1 - m_2}{m_1 + m_2}g$. For $m_1 = 3\\,\\text{kg}$ and $m_2 = 2\\,\\text{kg}$, $a = \\frac{3 - 2}{5}g = g/5$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a system of two connected blocks being pulled vertically upwards by a force $F$, both blocks have the same upward acceleration.\\nReason: The connecting string is light and inextensible, maintaining a constant separation between the blocks.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Inextensibility of the string ensures that the relative displacement between the two blocks is zero, so they share identical velocity and acceleration. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A light string passing over a fixed pulley has a mass $m$ at one end and a person of mass $m$ at the other. If the person climbs up the rope with acceleration $a$ relative to the rope, the mass $m$ also moves upwards with acceleration $a$ relative to the rope.\\nReason: The tension in the string is identical on both sides of the frictionless pulley, exerting identical upward forces on both the person and the mass.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since both bodies have the exact same mass $m$ and experience the identical upward tension $T$, their equations of motion in the inertial frame are identical ($T - mg = m a_{\\text{ground}}$). Hence both ascend with identical acceleration. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a pulley system, if the string has finite non-zero mass, the tension varies from point to point along the string.\\nReason: Each segment of a massive string requires a non-zero net force to accelerate, which is provided by the difference in tension across that segment.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For an infinitesimal element of mass $dm$, $T(x + dx) - T(x) = dm \\cdot a$. Hence tension is non-uniform along a string with mass. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The mechanical advantage of an ideal single fixed pulley is 1.\\nReason: A single fixed pulley changes only the direction of the applied effort without multiplying the force.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For an ideal single fixed pulley, effort equals load ($E = L$), so $MA = L/E = 1$. It provides directional convenience rather than force multiplication. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A spring balance reading always gives the sum of tensions exerted at its two opposite ends.\\nReason: A spring balance measures the restoring elastic force $F = kx$, which equals the tension $T$ transmitted through it.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: A spring balance pulled by force $T$ at both ends reads $T$ (the tension), NOT $2T$. Reason is true: The reading indicates the tension $T = kx$ corresponding to its extension.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When an elevator containing an Atwood machine accelerates upwards with acceleration $a_0$, the acceleration of mass $m_1$ relative to the elevator is $\\frac{m_1 - m_2}{m_1 + m_2}(g + a_0)$.\\nReason: In the non-inertial frame of the elevator, the effective gravitational acceleration is $g_{\\text{eff}} = g + a_0$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In an elevator accelerating upward with $a_0$, the pseudo force adds to gravity, giving effective gravity $g_{\\text{eff}} = g + a_0$. The relative acceleration is simply $a_{\\text{rel}} = \\frac{m_1 - m_2}{m_1 + m_2}g_{\\text{eff}}$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 7 MCQ QUESTIONS ---
  {
    type: "MCQ",
    question: "Two bodies of masses $m_1 = 4\\,\\text{kg}$ and $m_2 = 6\\,\\text{kg}$ are connected by a light inextensible string passing over a smooth frictionless pulley. Taking $g = 10\\,\\text{m/s}^2$, what is the tension in the string?",
    options: [
      "$24\\,\\text{N}$",
      "$48\\,\\text{N}$",
      "$60\\,\\text{N}$",
      "$96\\,\\text{N}$"
    ],
    correctAnswer: 1,
    explanation: "Tension in Atwood machine is $T = \\frac{2m_1 m_2}{m_1 + m_2}g = \\frac{2 \\times 4 \\times 6}{4 + 6} \\times 10 = \\frac{48}{10} \\times 10 = 48\\,\\text{N}$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A block of mass $m = 3\\,\\text{kg}$ on a smooth horizontal table is connected by a light string passing over a frictionless pulley to a hanging block of mass $M = 2\\,\\text{kg}$. What is the acceleration of the system? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [
      "$2\\,\\text{m/s}^2$",
      "$4\\,\\text{m/s}^2$",
      "$5\\,\\text{m/s}^2$",
      "$6.7\\,\\text{m/s}^2$"
    ],
    correctAnswer: 1,
    explanation: "Acceleration $a = \\frac{Mg}{m + M} = \\frac{2 \\times 10}{3 + 2} = \\frac{20}{5} = 4\\,\\text{m/s}^2$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "Three blocks of masses $m_1 = 1\\,\\text{kg}$, $m_2 = 2\\,\\text{kg}$, and $m_3 = 3\\,\\text{kg}$ are placed in contact on a frictionless horizontal table. A horizontal force $F = 12\\,\\text{N}$ is applied to $m_1$ towards $m_3$. The contact force between $m_2$ and $m_3$ is:",
    options: [
      "$2\\,\\text{N}$",
      "$4\\,\\text{N}$",
      "$6\\,\\text{N}$",
      "$8\\,\\text{N}$"
    ],
    correctAnswer: 2,
    explanation: "Common acceleration is $a = \\frac{F}{m_1 + m_2 + m_3} = \\frac{12}{1 + 2 + 3} = \\frac{12}{6} = 2\\,\\text{m/s}^2$. The contact force between $m_2$ and $m_3$ accelerates $m_3$ alone: $N_{23} = m_3 a = 3 \\times 2 = 6\\,\\text{N}$. Option C is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A block of mass $M$ is pulled along a horizontal frictionless surface by a rope of mass $m$. A horizontal force $F$ is applied at one end of the rope. What is the force exerted by the rope on the block?",
    options: [
      "$\\frac{MF}{M + m}$",
      "$\\frac{mF}{M + m}$",
      "$F$",
      "$\\frac{MF}{M - m}$"
    ],
    correctAnswer: 0,
    explanation: "The acceleration of the combined rope-block system is $a = \\frac{F}{M + m}$. The tension at the junction between rope and block accelerates block $M$: $T = M a = \\frac{MF}{M + m}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "In an Atwood machine, the masses are $m_1 = 5\\,\\text{kg}$ and $m_2 = 3\\,\\text{kg}$. What is the magnitude of the force exerted by the string on the pulley? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [
      "$37.5\\,\\text{N}$",
      "$75\\,\\text{N}$",
      "$50\\,\\text{N}$",
      "$80\\,\\text{N}$"
    ],
    correctAnswer: 1,
    explanation: "Tension in the string is $T = \\frac{2m_1 m_2}{m_1 + m_2}g = \\frac{2(5)(3)}{5 + 3}(10) = \\frac{300}{8} = 37.5\\,\\text{N}$. The pulley is pulled downwards by two segments of string, so force on the pulley is $F = 2T = 2 \\times 37.5 = 75\\,\\text{N}$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "Two masses $m$ and $2m$ are connected by a light string over a frictionless pulley. If the system is released from rest, what is the distance travelled by mass $2m$ in time $t$?",
    options: [
      "$\\frac{1}{2}gt^2$",
      "$\\frac{1}{4}gt^2$",
      "$\\frac{1}{6}gt^2$",
      "$\\frac{1}{3}gt^2$"
    ],
    correctAnswer: 2,
    explanation: "Acceleration is $a = \\frac{2m - m}{2m + m}g = \\frac{g}{3}$. Distance travelled from rest is $s = \\frac{1}{2}at^2 = \\frac{1}{2}\\left(\\frac{g}{3}\\right)t^2 = \\frac{1}{6}gt^2$. Option C is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A monkey of mass $40\\,\\text{kg}$ climbs up a light rope that can withstand a maximum tension of $600\\,\\text{N}$. What is the maximum upward acceleration with which the monkey can climb without breaking the rope? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [
      "$5\\,\\text{m/s}^2$",
      "$10\\,\\text{m/s}^2$",
      "$15\\,\\text{m/s}^2$",
      "$2\\,\\text{m/s}^2$"
    ],
    correctAnswer: 0,
    explanation: "Tension during upward climb is $T = m(g + a)$. Setting $T \\le T_{\\text{max}}$: $40(10 + a) \\le 600 \\implies 10 + a \\le 15 \\implies a \\le 5\\,\\text{m/s}^2$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 20 NUMERICAL QUESTIONS ---
  {
    type: "NUMERICAL",
    question: "In an Atwood machine, masses are $7\\,\\text{kg}$ and $3\\,\\text{kg}$. Taking $g = 10\\,\\text{m/s}^2$, calculate the acceleration of the masses in $\\text{m/s}^2$.",
    options: [],
    correctAnswer: 4,
    explanation: "$a = \\frac{m_1 - m_2}{m_1 + m_2}g = \\frac{7 - 3}{7 + 3} \\times 10 = \\frac{4}{10} \\times 10 = 4\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two blocks of masses $8\\,\\text{kg}$ and $12\\,\\text{kg}$ are connected at the two ends of a light string that passes over a frictionless pulley. Find the tension in the string in Newtons. (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 96,
    explanation: "$T = \\frac{2m_1 m_2}{m_1 + m_2}g = \\frac{2 \\times 8 \\times 12}{8 + 12} \\times 10 = \\frac{192}{20} \\times 10 = 96\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $4\\,\\text{kg}$ on a smooth horizontal table is attached to a hanging block of mass $6\\,\\text{kg}$ by a light string over a frictionless pulley. What is the tension (in Newtons) in the string? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 24,
    explanation: "Acceleration is $a = \\frac{6 \\times 10}{4 + 6} = 6\\,\\text{m/s}^2$. Tension is $T = m a = 4 \\times 6 = 24\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two blocks of masses $2\\,\\text{kg}$ and $3\\,\\text{kg}$ are placed on a smooth horizontal floor and connected by a light horizontal string. A force of $25\\,\\text{N}$ pulls the $3\\,\\text{kg}$ block horizontally. Find the tension (in Newtons) in the connecting string.",
    options: [],
    correctAnswer: 10,
    explanation: "Acceleration $a = \\frac{F}{m_1 + m_2} = \\frac{25}{2 + 3} = 5\\,\\text{m/s}^2$. Tension is $T = m_1 a = 2 \\times 5 = 10\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform rope of mass $2\\,\\text{kg}$ and length $1\\,\\text{m}$ hangs vertically from a rigid support. A block of mass $8\\,\\text{kg}$ is suspended from the free lower end of the rope. What is the tension (in Newtons) at the midpoint of the rope? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 90,
    explanation: "The midpoint supports the lower half of the rope (mass $1\\,\\text{kg}$) plus the block ($8\\,\\text{kg}$). Total supported mass is $1 + 8 = 9\\,\\text{kg}$. Tension $T = 9 \\times 10 = 90\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In an Atwood machine, the masses are $m_1 = 3\\,\\text{kg}$ and $m_2 = 1\\,\\text{kg}$. Starting from rest, what is the speed (in $\\text{m/s}$) of each mass after $1\\,\\text{second}$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 5,
    explanation: "Acceleration is $a = \\frac{3 - 1}{3 + 1}g = \\frac{2}{4}(10) = 5\\,\\text{m/s}^2$. Velocity after $1\\,\\text{s}$ is $v = at = 5 \\times 1 = 5\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A mass of $5\\,\\text{kg}$ on a smooth $30^\\circ$ inclined plane is connected by a light string passing over a frictionless pulley at the top of the incline to a hanging mass of $5\\,\\text{kg}$. What is the acceleration of the system in $\\text{m/s}^2$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 2.5,
    explanation: "Net force along the string is $M g - m g\\sin 30^\\circ = 5(10) - 5(10)(0.5) = 50 - 25 = 25\\,\\text{N}$. Total mass is $5 + 5 = 10\\,\\text{kg}$. Acceleration $a = 25/10 = 2.5\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two blocks of masses $m_1 = 4\\,\\text{kg}$ and $m_2 = 2\\,\\text{kg}$ are tied to a string on a smooth double inclined plane with inclinations $30^\\circ$ and $60^\\circ$ respectively. What is the net acceleration of the blocks in $\\text{m/s}^2$? (Round to 2 decimals or calculate exact: take $g = 10\\,\\text{m/s}^2$, $\\sin 30^\\circ = 0.5$, $\\sin 60^\\circ = 0.866$. Force difference is $4(10)(0.5) - 2(10)(0.866) = 20 - 17.32 = 2.68\\,\\text{N}$. Total mass is $6\\,\\text{kg}$. $a = 2.68/6 \\approx 0.45\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 0.45,
    explanation: "$F_1 = m_1 g\\sin 30^\\circ = 4 \\times 10 \\times 0.5 = 20\\,\\text{N}$. $F_2 = m_2 g\\sin 60^\\circ = 2 \\times 10 \\times 0.866 = 17.32\\,\\text{N}$. Net driving force is $20 - 17.32 = 2.68\\,\\text{N}$. Acceleration $a = \\frac{2.68}{4 + 2} = 0.447 \\approx 0.45\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A system consists of three connected blocks of masses $m_1 = 2\\,\\text{kg}$, $m_2 = 3\\,\\text{kg}$, and $m_3 = 5\\,\\text{kg}$ pulled along a smooth horizontal surface by a horizontal force of $50\\,\\text{N}$ applied to $m_3$. What is the tension (in Newtons) in the string connecting $m_1$ and $m_2$?",
    options: [],
    correctAnswer: 10,
    explanation: "Acceleration $a = \\frac{F}{m_1 + m_2 + m_3} = \\frac{50}{2 + 3 + 5} = 5\\,\\text{m/s}^2$. The string between $m_1$ and $m_2$ accelerates $m_1$ only: $T_1 = m_1 a = 2 \\times 5 = 10\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the previous three-block system, what is the tension (in Newtons) in the string connecting $m_2$ and $m_3$?",
    options: [],
    correctAnswer: 25,
    explanation: "The string between $m_2$ and $m_3$ accelerates both $m_1$ and $m_2$: $T_2 = (m_1 + m_2)a = (2 + 3) \\times 5 = 25\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A man of mass $60\\,\\text{kg}$ is holding a rope supporting a platform of mass $20\\,\\text{kg}$ on which he stands, through a light pulley fixed to the ceiling. With what force (in Newtons) must he pull the rope to keep himself and the platform in equilibrium? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 400,
    explanation: "Let tension be $T$. Both the platform and the man are pulled upwards by tension: $2T = (M + m)g = (60 + 20)10 = 800\\,\\text{N} \\implies T = 400\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two masses $m_1 = 5\\,\\text{kg}$ and $m_2 = 5\\,\\text{kg}$ are suspended from the ends of a light string over a frictionless pulley. If a small mass of $2\\,\\text{kg}$ is added to $m_1$, what will be the acceleration of the system in $\\text{m/s}^2$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 1.67,
    explanation: "New masses are $7\\,\\text{kg}$ and $5\\,\\text{kg}$. Acceleration $a = \\frac{7 - 5}{7 + 5} \\times 10 = \\frac{2}{12} \\times 10 = \\frac{20}{12} \\approx 1.67\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A light inextensible string passes over a fixed frictionless pulley and has masses $m_1 = 6\\,\\text{kg}$ and $m_2 = 4\\,\\text{kg}$ attached at its ends. What is the downward acceleration of the center of mass of the two masses in $\\text{m/s}^2$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 0.4,
    explanation: "$a = \\frac{6 - 4}{6 + 4}g = \\frac{2}{10}(10) = 2\\,\\text{m/s}^2$. Acceleration of center of mass is $a_{\\text{cm}} = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right) a = \\left(\\frac{2}{10}\\right)(2) = 0.4\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two blocks of masses $m_1 = 10\\,\\text{kg}$ and $m_2 = 5\\,\\text{kg}$ are connected by a light string over a frictionless pulley. Mass $m_1$ is on a rough horizontal surface with $\\mu_k = 0.2$ and $m_2$ hangs vertically. Calculate the acceleration of the system in $\\text{m/s}^2$. (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 2,
    explanation: "Friction on $m_1$ is $f_k = \\mu_k m_1 g = 0.2 \\times 10 \\times 10 = 20\\,\\text{N}$. Weight of hanging mass is $m_2 g = 5 \\times 10 = 50\\,\\text{N}$. Net accelerating force is $50 - 20 = 30\\,\\text{N}$. Total mass is $10 + 5 = 15\\,\\text{kg}$. Acceleration $a = 30/15 = 2\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the previous problem, what is the tension in the string in Newtons? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 40,
    explanation: "For the hanging mass: $m_2 g - T = m_2 a \\implies 50 - T = 5(2) \\implies T = 50 - 10 = 40\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A string passing over a frictionless pulley supports two masses $m_1 = 9\\,\\text{kg}$ and $m_2 = 6\\,\\text{kg}$. If the system is released from rest, find the total downward force (in Newtons) exerted on the pulley axle. (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 144,
    explanation: "$T = \\frac{2m_1 m_2}{m_1 + m_2}g = \\frac{2 \\times 9 \\times 6}{9 + 6} \\times 10 = \\frac{108}{15} \\times 10 = 72\\,\\text{N}$. Total downward force on pulley is $2T = 2 \\times 72 = 144\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a movable pulley arrangement, load $W = 120\\,\\text{N}$ is attached to the movable pulley. Neglecting friction and the mass of the pulley, what effort force (in Newtons) is required to support the load in equilibrium?",
    options: [],
    correctAnswer: 60,
    explanation: "$2T = W \\implies T = W/2 = 120/2 = 60\\,\\text{N}$. The effort required is $E = T = 60\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A light string carries two blocks of masses $m_1 = 3\\,\\text{kg}$ and $m_2 = 1\\,\\text{kg}$ over a frictionless pulley. If the system is released from rest, how many meters will the heavier mass descend in $2\\,\\text{seconds}$? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 10,
    explanation: "Acceleration $a = \\frac{3 - 1}{3 + 1}(10) = 5\\,\\text{m/s}^2$. Distance descended is $s = \\frac{1}{2}at^2 = \\frac{1}{2}(5)(2^2) = 10\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $2\\,\\text{kg}$ is suspended by two light strings inclined at angles of $30^\\circ$ and $60^\\circ$ to the vertical. Calculate the tension (in Newtons) in the string inclined at $60^\\circ$ to the vertical. (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 10,
    explanation: "Let angles with vertical be $\\theta_1 = 30^\\circ$ and $\\theta_2 = 60^\\circ$. The strings are mutually perpendicular because $30^\\circ + 60^\\circ = 90^\\circ$. Resolving forces: $T_1 = mg\\cos 30^\\circ$ and $T_2 = mg\\cos 60^\\circ = 2(10)(0.5) = 10\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two masses $m_1 = 4\\,\\text{kg}$ and $m_2 = 1\\,\\text{kg}$ are connected by a light string over a pulley. If the pulley is accelerated vertically upwards with an acceleration of $2\\,\\text{m/s}^2$, what is the tension in the string in Newtons? (Take $g = 10\\,\\text{m/s}^2$)",
    options: [],
    correctAnswer: 19.2,
    explanation: "Effective gravity is $g_{\\text{eff}} = g + a = 10 + 2 = 12\\,\\text{m/s}^2$. Tension is $T = \\frac{2m_1 m_2}{m_1 + m_2}g_{\\text{eff}} = \\frac{2 \\times 4 \\times 1}{4 + 1} \\times 12 = \\frac{8}{5} \\times 12 = 19.2\\,\\text{N}$.",
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

console.log(`Part 3 generated: ${questions.length} questions (AR: ${arCount}, MCQ: ${mcqCount}, NUM: ${numCount})`);

const outPath = path.join(__dirname, 'data_jee_lom_part3.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
