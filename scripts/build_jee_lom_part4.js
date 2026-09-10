const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Conservation of momentum";
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
    question: "Assertion: The total linear momentum of an isolated system of interacting particles is strictly conserved.\\nReason: Internal forces between interacting particles within the system always occur in equal and opposite action-reaction pairs whose vector sum is zero.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "By Newton's second law, $\\frac{d\\vec{P}}{dt} = \\vec{F}_{\\text{ext}}$. Since internal forces cancel pairwise by Newton's third law ($\\sum \\vec{F}_{\\text{int}} = 0$), when $\\vec{F}_{\\text{ext}} = 0$, $\\frac{d\\vec{P}}{dt} = 0$, so $\\vec{P} = \\text{constant}$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A heavy cannon recoils backwards when a cannonball is fired horizontally from it.\\nReason: To conserve horizontal linear momentum of the isolated system (cannon + cannonball), the cannon must acquire a momentum equal in magnitude and opposite in direction to that of the cannonball.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Initially, the total horizontal momentum is zero. In the absence of external horizontal forces during the explosion, $M\\vec{V}_{\\text{recoil}} + m\\vec{v}_{\\text{ball}} = 0 \\implies \\vec{V}_{\\text{recoil}} = -\\frac{m}{M}\\vec{v}_{\\text{ball}}$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In any collision between two bodies, the total kinetic energy is always conserved.\\nReason: The total linear momentum of the colliding bodies is conserved in every collision provided no net external impulsive force acts on the system.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: Kinetic energy is conserved only in perfectly elastic collisions; in inelastic collisions, part of the kinetic energy is converted into heat, sound, or deformation. Reason is true: Linear momentum is always conserved in all collisions if external forces are absent. Thus Assertion is false but Reason is true.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a shell exploding in mid-air bursts into multiple fragments, the center of mass of the fragments continues along the original parabolic trajectory (neglecting air resistance).\\nReason: The explosion is driven solely by internal chemical forces, which cannot alter the motion of the center of mass of the system.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The acceleration of center of mass depends only on external forces: $\\vec{F}_{\\text{ext}} = M\\vec{a}_{\\text{cm}}$. Since the only external force before and after explosion is gravity, $\\vec{a}_{\\text{cm}} = \\vec{g}$ remains unchanged, keeping the center of mass on the original parabolic trajectory. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A rocket can accelerate forward in deep interstellar space where there is no atmosphere.\\nReason: The forward acceleration of a rocket is due to the backward momentum carried away by high-speed exhaust gases ejected from its nozzle.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "By conservation of momentum, ejecting exhaust mass backwards with relative speed $u$ creates a forward reaction thrust $F_{\\text{thrust}} = u\\left(-\\frac{dm}{dt}\\right)$ on the rocket, independent of the presence of any atmosphere. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a person jumps off a small stationary boat onto a riverbank, the boat moves backwards away from the shore.\\nReason: In the absence of external horizontal resistive forces, the total horizontal momentum of the person-boat system must remain zero.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Initial momentum is zero. As the person moves forward towards the bank with momentum $m v$, the boat must move backward with momentum $M V = -m v$ to conserve total horizontal momentum. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When sand is continuously dropped at rate $\\frac{dm}{dt}$ onto a conveyer belt moving horizontally with constant velocity $v$, an additional force $F = v\\frac{dm}{dt}$ must be applied by the motor.\\nReason: The falling sand has zero initial horizontal velocity, so the belt must exert a force to accelerate each added particle of sand to velocity $v$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The rate of change of momentum of the added sand is $\\frac{dp}{dt} = v\\frac{dm}{dt}$. To maintain constant velocity $v$, the driving motor must supply this extra horizontal force. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If an external force acts on a system, the linear momentum of the system cannot be conserved in any direction.\\nReason: Linear momentum of a system is conserved along a specific axis if the component of the net external force along that axis is zero.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: If external forces exist along the vertical axis (e.g. gravity) but $\\sum F_x = 0$, momentum is still conserved along the $x$-axis. Reason is true: Component momentum is conserved along any direction with zero net external force. Thus Assertion is false but Reason is true.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a completely inelastic collision between two identical moving spheres sticking together, maximum kinetic energy is dissipated into other forms.\\nReason: When colliding bodies stick together, their relative velocity of separation after impact is zero ($e = 0$).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In a completely inelastic collision, the bodies coalesce and move with a common final velocity ($e = 0$), which maximizes the loss of kinetic energy consistent with momentum conservation. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A man standing at one end of a stationary flat car on a frictionless track walks to the other end; the center of mass of the system remains at rest.\\nReason: No horizontal external force acts on the man-car system, so the horizontal acceleration of the center of mass is zero.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since $\\sum F_{\\text{ext}, x} = 0$, the center of mass cannot accelerate. Since it was initially at rest, its position remains completely stationary relative to the ground. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a stationary nucleus undergoes alpha decay, the daughter nucleus and the alpha particle recoil in exactly opposite directions.\\nReason: Total linear momentum of the isolated parent nucleus is zero before decay, requiring the vector sum of momenta of the products to be zero.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Before decay, $\\vec{P} = 0$. After decay, $\\vec{p}_{\\alpha} + \\vec{p}_{\\text{daughter}} = 0 \\implies \\vec{p}_{\\text{daughter}} = -\\vec{p}_{\\alpha}$. Their momenta are equal in magnitude and collinear in opposite directions. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In an elastic head-on collision between two equal masses where one mass is initially stationary, the incident mass comes to complete rest after collision.\\nReason: In a 1D elastic collision between identical masses, the two colliding bodies exchange their velocities completely.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "For $m_1 = m_2$ and $e = 1$, standard collision formulas give $v_1 = u_2$ and $v_2 = u_1$. Since $u_2 = 0$, $v_1 = 0$ and $v_2 = u_1$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The recoil speed of a rifle can be reduced by making the rifle heavier.\\nReason: Recoil speed is given by $V = -\\frac{m}{M}v$, which is inversely proportional to the mass $M$ of the rifle.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "From conservation of momentum, $M V = m v \\implies V = \\frac{m v}{M}$. Increasing rifle mass $M$ decreases the recoil speed $V$ for the same bullet momentum. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a bomb at rest on a frictionless horizontal plane explodes into three fragments, the three momentum vectors must be coplanar.\\nReason: The sum of three non-zero vectors can be zero only if all three vectors lie in the same plane.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since $\\vec{p}_1 + \\vec{p}_2 + \\vec{p}_3 = 0$, we have $\\vec{p}_3 = -(\\vec{p}_1 + \\vec{p}_2)$. The vector $-(\\vec{p}_1 + \\vec{p}_2)$ lies in the plane defined by $\\vec{p}_1$ and $\\vec{p}_2$. Hence all three momentum vectors must be coplanar. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a two-body collision, the impulse experienced by body 1 is equal in magnitude and opposite in direction to the impulse experienced by body 2.\\nReason: According to Newton's third law, the contact force $\\vec{F}_{12}(t) = -\\vec{F}_{21}(t)$ at every instant of the collision.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Impulse is $\\vec{J}_1 = \\int \\vec{F}_{12}\\,dt = -\\int \\vec{F}_{21}\\,dt = -\\vec{J}_2$. Action and reaction are equal and opposite at every instant during contact. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If a heavy cart loaded with water has a small leak at the bottom allowing water to drip vertically downward, the forward velocity of the cart on a frictionless track remains constant.\\nReason: The dripping water carries away horizontal momentum proportional to its mass and current speed of the cart, exerting zero net horizontal thrust.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Because the water drops vertically relative to the cart, its horizontal velocity upon detachment is identical to the cart's velocity $v$. It carries away momentum $dm \\cdot v$, so $\\frac{dv}{dt} = 0$. The cart's speed remains constant. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If rain falls vertically into an open cart moving horizontally on a frictionless track, the horizontal speed of the cart decreases.\\nReason: The falling raindrops have zero initial horizontal momentum, so the cart must share its momentum with the added mass of water.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Initial horizontal momentum of cart is $M v_0$. As mass increases to $M + m$, horizontal momentum conservation requires $(M + m)v = M v_0 \\implies v = \\frac{M}{M + m}v_0 < v_0$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Conservation of linear momentum is a consequence of the homogeneity of space.\\nReason: According to Noether's theorem, translational invariance of physical laws in space leads directly to the law of conservation of linear momentum.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "By Noether's theorem, every continuous symmetry of a physical system has a corresponding conservation law. Invariance under spatial translations (homogeneity of space) corresponds to conservation of linear momentum. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A bullet fired into a block of wood suspended by a string transfers all its kinetic energy to the block.\\nReason: The collision between the bullet and the block is an elastic collision.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: A bullet embedding into wood is a perfectly inelastic collision; most of the initial kinetic energy is dissipated as heat, sound, and fiber damage. Reason is false: The collision is inelastic, not elastic.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a particle moves in a central force field, its linear momentum is conserved.\\nReason: A central force is always directed along the position vector towards or away from the center of force.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: A central force provides a non-zero external force $\\vec{F} = f(r)\\hat{r} \\neq 0$, so $\\frac{d\\vec{p}}{dt} \\neq 0$ (linear momentum is NOT conserved; angular momentum $\\vec{L}$ is conserved because torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$). Reason is true: Central forces act along $\\hat{r}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: For an isolated system consisting of two charged particles interacting through electrostatic Coulomb forces, total linear momentum is conserved.\\nReason: Electrostatic Coulomb forces obey Newton's third law.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "The electrostatic force between two charges is an action-reaction pair: $\\vec{F}_{12} = -\\vec{F}_{21}$. Since net external force is zero, $\\frac{d\\vec{P}}{dt} = \\vec{F}_{12} + \\vec{F}_{21} = 0$, so total linear momentum is conserved. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: During a head-on collision between two billiard balls, the momentum of each individual ball remains constant throughout the collision.\\nReason: Momentum is conserved only for the isolated system of both balls together, while each individual ball experiences a strong contact force that changes its momentum.",
    options: AR_OPTIONS,
    correctAnswer: 3,
    explanation: "Assertion is false: Each ball experiences a contact force, so each ball's momentum changes dramatically during impact. Reason is true: The system's total momentum is conserved, but not that of individual balls.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In a rocket operating in gravity-free space, its final burnout velocity can exceed the exhaust speed of the expelled gases.\\nReason: Burnout velocity is given by $v = u\\ln\\left(\\frac{m_0}{m_f}\\right)$, and if the mass ratio $\\frac{m_0}{m_f} > e \\approx 2.718$, then $v > u$.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "From Tsiolkovsky rocket equation: $v = u\\ln(m_0/m_f)$. When $m_0/m_f > e$, $\\ln(m_0/m_f) > 1$, meaning $v > u$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If a ball is thrown vertically upwards, linear momentum of the ball is not conserved during its flight.\\nReason: Gravity acts as an external unbalanced downward force on the ball throughout its motion.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Because gravity acts as an external force ($F_{\\text{ext}} = -mg$), $\\frac{dp}{dt} = -mg \\neq 0$. Therefore, momentum of the ball alone is not conserved. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: For the combined system of Earth and the vertically thrown ball from the previous question, total linear momentum is conserved.\\nReason: The gravitational attraction between Earth and the ball is an internal action-reaction force pair of the closed Earth-ball system.",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "In the isolated two-body system (Earth + ball), the gravitational pull on the ball and the gravitational pull on Earth are equal and opposite internal forces. With no external force, total momentum of the combined system is conserved. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Two skaters initially at rest on frictionless ice push each other apart; they always move off in opposite directions with speeds inversely proportional to their masses.\\nReason: Total linear momentum of the two-skater system is zero initially and remains zero after pushing ($m_1 v_1 = m_2 v_2$).",
    options: AR_OPTIONS,
    correctAnswer: 0,
    explanation: "Since external horizontal force is zero, $m_1\\vec{v}_1 + m_2\\vec{v}_2 = 0 \\implies \\frac{v_1}{v_2} = \\frac{m_2}{m_1}$. Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 7 MCQ QUESTIONS ---
  {
    type: "MCQ",
    question: "A bullet of mass $10\\,\\text{g}$ is fired from a rifle of mass $5\\,\\text{kg}$ with a muzzle velocity of $500\\,\\text{m/s}$. What is the recoil velocity of the rifle?",
    options: [
      "$-1.0\\,\\text{m/s}$",
      "$-0.5\\,\\text{m/s}$",
      "$-2.0\\,\\text{m/s}$",
      "$-0.1\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "By conservation of momentum: $M V + m v = 0 \\implies V = -\\frac{m v}{M} = -\\frac{0.010 \\times 500}{5} = -\\frac{5}{5} = -1.0\\,\\text{m/s}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A stationary bomb of mass $9\\,\\text{kg}$ explodes into two fragments of masses $3\\,\\text{kg}$ and $6\\,\\text{kg}$. If the velocity of the $3\\,\\text{kg}$ fragment is $16\\,\\text{m/s}$, the kinetic energy of the $6\\,\\text{kg}$ fragment is:",
    options: [
      "$192\\,\\text{J}$",
      "$384\\,\\text{J}$",
      "$96\\,\\text{J}$",
      "$576\\,\\text{J}$"
    ],
    correctAnswer: 0,
    explanation: "By conservation of momentum: $m_1 v_1 = m_2 v_2 \\implies 3 \\times 16 = 6 \\times v_2 \\implies v_2 = 8\\,\\text{m/s}$. Kinetic energy of the $6\\,\\text{kg}$ fragment is $K_2 = \\frac{1}{2}m_2 v_2^2 = \\frac{1}{2}(6)(8^2) = 3 \\times 64 = 192\\,\\text{J}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A body of mass $2\\,\\text{kg}$ moving with a speed of $4\\,\\text{m/s}$ collides head-on with a stationary body of mass $2\\,\\text{kg}$. If the collision is perfectly inelastic, the loss in kinetic energy of the system during the collision is:",
    options: [
      "$4\\,\\text{J}$",
      "$8\\,\\text{J}$",
      "$16\\,\\text{J}$",
      "$12\\,\\text{J}$"
    ],
    correctAnswer: 1,
    explanation: "Initial kinetic energy $K_i = \\frac{1}{2}(2)(4^2) = 16\\,\\text{J}$. After collision, common velocity $V = \\frac{m_1 u_1}{m_1 + m_2} = \\frac{2 \\times 4}{2 + 2} = 2\\,\\text{m/s}$. Final kinetic energy $K_f = \\frac{1}{2}(2 + 2)(2^2) = \\frac{1}{2}(4)(4) = 8\\,\\text{J}$. Loss in kinetic energy is $\\Delta K = K_i - K_f = 16 - 8 = 8\\,\\text{J}$. Option B is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A stationary bomb explodes into three pieces. Two pieces of mass $1\\,\\text{kg}$ each fly off at right angles to each other with equal speeds of $30\\,\\text{m/s}$. If the third piece has mass $3\\,\\text{kg}$, its speed immediately after the explosion is:",
    options: [
      "$10\\sqrt{2}\\,\\text{m/s}$",
      "$20\\sqrt{2}\\,\\text{m/s}$",
      "$10\\,\\text{m/s}$",
      "$15\\sqrt{2}\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "Let the two fragments move along the $x$ and $y$ axes: $\\vec{p}_1 = 1(30)\\hat{i} = 30\\hat{i}$ and $\\vec{p}_2 = 30\\hat{j}$. For total momentum to be zero: $\\vec{p}_3 = -(30\\hat{i} + 30\\hat{j})$. The magnitude is $p_3 = \\sqrt{30^2 + 30^2} = 30\\sqrt{2}\\,\\text{kg}\\cdot\\text{m/s}$. Speed of third fragment is $v_3 = \\frac{p_3}{m_3} = \\frac{30\\sqrt{2}}{3} = 10\\sqrt{2}\\,\\text{m/s}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A man of mass $50\\,\\text{kg}$ is standing at one end of a boat of mass $200\\,\\text{kg}$ and length $10\\,\\text{m}$ floating at rest on calm water. If the man walks to the other end of the boat, the distance moved by the boat relative to the water is:",
    options: [
      "$2.0\\,\\text{m}$",
      "$2.5\\,\\text{m}$",
      "$1.67\\,\\text{m}$",
      "$3.0\\,\\text{m}$"
    ],
    correctAnswer: 0,
    explanation: "Since no external horizontal force acts on the boat-man system, center of mass position is stationary: $m \\Delta x_{\\text{man}} + M \\Delta x_{\\text{boat}} = 0$. Let boat shift by $x$ in opposite direction: $m(L - x) = M x \\implies x = \\frac{m L}{M + m} = \\frac{50 \\times 10}{200 + 50} = \\frac{500}{250} = 2.0\\,\\text{m}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A rocket of mass $1000\\,\\text{kg}$ exhausts gases at a rate of $4\\,\\text{kg/s}$ with a velocity of $3000\\,\\text{m/s}$ relative to the rocket. What is the thrust force exerted on the rocket?",
    options: [
      "$12000\\,\\text{N}$",
      "$750\\,\\text{N}$",
      "$1200\\,\\text{N}$",
      "$3000\\,\\text{N}$"
    ],
    correctAnswer: 0,
    explanation: "Thrust force is $F_{\\text{thrust}} = u_{\\text{rel}} \\left(-\\frac{dm}{dt}\\right) = 3000 \\times 4 = 12000\\,\\text{N}$. Option A is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A ball of mass $m$ moving with speed $v$ collides elastically with another identical ball of mass $m$ at rest. If the collision is oblique and the two balls separate with trajectories at angles $\\theta_1$ and $\\theta_2$ to the incident direction, the angle between their final velocity vectors is:",
    options: [
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$180^\\circ$"
    ],
    correctAnswer: 2,
    explanation: "For an elastic collision between equal masses with one initially at rest: $\\vec{v}_1 + \\vec{v}_2 = \\vec{u}$ and $v_1^2 + v_2^2 = u^2$. Squaring momentum gives $v_1^2 + v_2^2 + 2\\vec{v}_1 \\cdot \\vec{v}_2 = u^2 \\implies 2\\vec{v}_1 \\cdot \\vec{v}_2 = 0 \\implies \\vec{v}_1 \\perp \\vec{v}_2$. The angle between their paths is $90^\\circ$. Option C is correct.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // --- 20 NUMERICAL QUESTIONS ---
  {
    type: "NUMERICAL",
    question: "A shell of mass $20\\,\\text{kg}$ is fired from a cannon of mass $1000\\,\\text{kg}$ with a speed of $100\\,\\text{m/s}$. Find the recoil speed of the cannon in $\\text{m/s}$.",
    options: [],
    correctAnswer: 2,
    explanation: "$M V = m v \\implies 1000 \\times V = 20 \\times 100 = 2000 \\implies V = 2\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A stationary nucleus of mass $210\\,\\text{u}$ emits an alpha particle of mass $4\\,\\text{u}$ with kinetic energy $E_\\alpha = 5.3\\,\\text{MeV}$. What is the kinetic energy (in $\\text{keV}$) of the recoiling daughter nucleus? (Round to nearest integer: $4 \\times 5.3 / 206 \\approx 0.1029\\,\\text{MeV} = 103\\,\\text{keV}$)",
    options: [],
    correctAnswer: 103,
    explanation: "Daughter nucleus mass is $210 - 4 = 206\\,\\text{u}$. Since linear momenta are equal in magnitude, $K_d = \\frac{p^2}{2m_d} = \\frac{m_\\alpha}{m_d}E_\\alpha = \\frac{4}{206} \\times 5300\\,\\text{keV} \\approx 102.9 \\approx 103\\,\\text{keV}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $4\\,\\text{kg}$ moving with speed $6\\,\\text{m/s}$ collides head-on with a stationary body of mass $2\\,\\text{kg}$ and sticks to it. What is the final common speed (in $\\text{m/s}$) of the combined mass?",
    options: [],
    correctAnswer: 4,
    explanation: "$V = \\frac{m_1 u_1}{m_1 + m_2} = \\frac{4 \\times 6}{4 + 2} = \\frac{24}{6} = 4\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A bomb of mass $12\\,\\text{kg}$ initially at rest explodes into two parts of masses $4\\,\\text{kg}$ and $8\\,\\text{kg}$. If the $8\\,\\text{kg}$ mass moves with a velocity of $6\\,\\text{m/s}$, what is the velocity of the $4\\,\\text{kg}$ mass in $\\text{m/s}$?",
    options: [],
    correctAnswer: 12,
    explanation: "$m_1 v_1 = m_2 v_2 \\implies 4 \\times v_1 = 8 \\times 6 = 48 \\implies v_1 = 12\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A rocket of initial mass $5000\\,\\text{kg}$ expels gas at a constant velocity of $1200\\,\\text{m/s}$ relative to the rocket. If the rate of consumption of fuel is $50\\,\\text{kg/s}$, what is the acceleration of the rocket (in $\\text{m/s}^2$) at launch, neglecting gravity?",
    options: [],
    correctAnswer: 12,
    explanation: "Thrust $F = u \\left(-\\frac{dm}{dt}\\right) = 1200 \\times 50 = 60000\\,\\text{N}$. Acceleration $a = F/m = 60000/5000 = 12\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A sand-dropping hopper discharges sand at a constant rate of $0.5\\,\\text{kg/s}$ onto a flat horizontal conveyer belt moving at a constant speed of $4\\,\\text{m/s}$. What horizontal force (in Newtons) is required to keep the belt moving at the same constant speed?",
    options: [],
    correctAnswer: 2,
    explanation: "$F = v\\frac{dm}{dt} = 4 \\times 0.5 = 2\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A $60\\,\\text{kg}$ man sitting in a $140\\,\\text{kg}$ cart at rest throws a $5\\,\\text{kg}$ stone horizontally with a speed of $8\\,\\text{m/s}$ relative to the ground. What is the recoil speed of the man-cart system in $\\text{m/s}$?",
    options: [],
    correctAnswer: 0.2,
    explanation: "Total mass of man + cart is $60 + 140 = 200\\,\\text{kg}$. Momentum of stone is $5 \\times 8 = 40\\,\\text{kg}\\cdot\\text{m/s}$. Recoil speed $V = 40/200 = 0.2\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A $3\\,\\text{kg}$ mass moving along the $x$-axis at $4\\,\\text{m/s}$ hits a stationary $1\\,\\text{kg}$ mass. After collision, the $3\\,\\text{kg}$ mass moves along the $x$-axis at $2\\,\\text{m/s}$. What is the speed of the $1\\,\\text{kg}$ mass in $\\text{m/s}$?",
    options: [],
    correctAnswer: 6,
    explanation: "Total initial momentum is $3 \\times 4 = 12\\,\\text{kg}\\cdot\\text{m/s}$. After collision: $3(2) + 1(v) = 12 \\implies 6 + v = 12 \\implies v = 6\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $1\\,\\text{kg}$ explodes into two fragments of masses $0.4\\,\\text{kg}$ and $0.6\\,\\text{kg}$. If the kinetic energy of the lighter fragment is $12\\,\\text{J}$, what is the kinetic energy of the heavier fragment in Joules?",
    options: [],
    correctAnswer: 8,
    explanation: "Since linear momenta are equal: $K_1 m_1 = K_2 m_2 \\implies 12 \\times 0.4 = K_2 \\times 0.6 \\implies 4.8 = 0.6 K_2 \\implies K_2 = 8\\,\\text{J}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two railway carriages of masses $10\\,\\text{tons}$ and $15\\,\\text{tons}$ moving in the same direction at $4\\,\\text{m/s}$ and $2\\,\\text{m/s}$ collide and couple together. What is their common velocity in $\\text{m/s}$?",
    options: [],
    correctAnswer: 2.8,
    explanation: "$V = \\frac{m_1 u_1 + m_2 u_2}{m_1 + m_2} = \\frac{10(4) + 15(2)}{10 + 15} = \\frac{40 + 30}{25} = \\frac{70}{25} = 2.8\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A machine gun fires 10 bullets per second, each of mass $40\\,\\text{g}$ with a speed of $600\\,\\text{m/s}$. What average force (in Newtons) must the soldier exert on the gun to hold it in position?",
    options: [],
    correctAnswer: 240,
    explanation: "Rate of momentum delivery is $F = n \\cdot m \\cdot v = 10 \\times 0.040 \\times 600 = 240\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A rocket with an initial mass of $600\\,\\text{kg}$ ejects exhaust gas with relative speed $u = 1000\\,\\text{m/s}$. What must be the mass of the rocket (in $\\text{kg}$) at burnout if its speed is to reach $1000\\,\\text{m/s}$ in gravity-free space? (Round to nearest integer: $600 / e \\approx 221\\,\\text{kg}$)",
    options: [],
    correctAnswer: 221,
    explanation: "Rocket formula: $v = u\\ln(m_0/m)$. Here $v = u \\implies \\ln(m_0/m) = 1 \\implies m_0/m = e \\approx 2.718$. Thus $m = 600 / 2.718 \\approx 221\\,\\text{kg}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A $2\\,\\text{kg}$ block moving at $5\\,\\text{m/s}$ collides elastically with a stationary $3\\,\\text{kg}$ block. Find the speed of the $3\\,\\text{kg}$ block (in $\\text{m/s}$) after collision.",
    options: [],
    correctAnswer: 4,
    explanation: "For 1D elastic collision with $u_2 = 0$: $v_2 = \\frac{2m_1}{m_1 + m_2}u_1 = \\frac{2(2)}{2 + 3}(5) = \\frac{4}{5}(5) = 4\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In the previous problem, what is the speed of the $2\\,\\text{kg}$ block (in $\\text{m/s}$) after collision?",
    options: [],
    correctAnswer: 1,
    explanation: "$v_1 = \\frac{m_1 - m_2}{m_1 + m_2}u_1 = \\frac{2 - 3}{2 + 3}(5) = -1\\,\\text{m/s}$. The speed is $|v_1| = 1\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $0.5\\,\\text{kg}$ is at rest on a frictionless horizontal table. A bullet of mass $0.01\\,\\text{kg}$ travelling horizontally at $400\\,\\text{m/s}$ strikes the block and emerges with a speed of $100\\,\\text{m/s}$. What is the resulting speed of the block in $\\text{m/s}$?",
    options: [],
    correctAnswer: 6,
    explanation: "Conservation of momentum: $m u = m v + M V \\implies 0.01 \\times 400 = 0.01 \\times 100 + 0.5 V \\implies 4 = 1 + 0.5 V \\implies 0.5 V = 3 \\implies V = 6\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A bomb at rest explodes into two pieces of masses in the ratio $1:3$. If the total kinetic energy liberated in the explosion is $400\\,\\text{J}$, how many Joules of kinetic energy are carried away by the smaller fragment?",
    options: [],
    correctAnswer: 300,
    explanation: "Momentum magnitudes are equal: $p_1 = p_2$. Kinetic energy $K \\propto 1/m$. Thus $\\frac{K_1}{K_2} = \\frac{m_2}{m_1} = \\frac{3}{1}$. The smaller fragment gets $\\frac{3}{3 + 1} \\times 400 = \\frac{3}{4} \\times 400 = 300\\,\\text{J}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A flat railroad car of mass $2000\\,\\text{kg}$ is coasting along a level track at $5\\,\\text{m/s}$. A man of mass $80\\,\\text{kg}$ jumps off the car horizontally in the forward direction with a speed of $2\\,\\text{m/s}$ relative to the car. What is the new speed of the car in $\\text{m/s}$? (Round to 2 decimal places: 4.92)",
    options: [],
    correctAnswer: 4.92,
    explanation: "Initial momentum: $(M + m)v_0 = (2000 + 80)5 = 2080 \\times 5 = 10400\\,\\text{kg}\\cdot\\text{m/s}$. If the car's final speed is $V$, the man's speed relative to ground is $V + 2$. Conservation of momentum: $M V + m(V + 2) = 10400 \\implies 2080 V + 160 = 10400 \\implies 2080 V = 10240 \\implies V = 10240/2080 \\approx 4.92\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $2\\,\\text{kg}$ moving at $10\\,\\text{m/s}$ collides head-on with a stationary body of mass $3\\,\\text{kg}$. If the coefficient of restitution is $e = 0.5$, calculate the speed of the $3\\,\\text{kg}$ body (in $\\text{m/s}$) after collision.",
    options: [],
    correctAnswer: 6,
    explanation: "$v_2 = \\frac{m_1 u_1(1 + e)}{m_1 + m_2} = \\frac{2 \\times 10 \\times (1 + 0.5)}{2 + 3} = \\frac{20 \\times 1.5}{5} = \\frac{30}{5} = 6\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A projectile is fired with a velocity of $50\\,\\text{m/s}$ at an angle of $30^\\circ$ to the horizontal. At the highest point of its trajectory, it explodes into two equal fragments. One fragment comes to complete rest immediately after explosion. What is the horizontal speed of the other fragment in $\\text{m/s}$?",
    options: [],
    correctAnswer: 86.6,
    explanation: "Horizontal velocity at highest point is $u_x = 50\\cos 30^\\circ = 50 \\times \\frac{\\sqrt{3}}{2} = 25\\sqrt{3} \\approx 43.3\\,\\text{m/s}$. Since one half falls vertically from rest, momentum conservation gives $m u_x = \\frac{m}{2}(0) + \\frac{m}{2}v_2 \\implies v_2 = 2 u_x = 2 \\times 43.3 = 86.6\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A $5\\,\\text{kg}$ particle at rest explodes into three pieces with masses $m_1 = 1\\,\\text{kg}$, $m_2 = 2\\,\\text{kg}$, and $m_3 = 2\\,\\text{kg}$. If $m_1$ moves with velocity $8\\hat{i}\\,\\text{m/s}$ and $m_2$ moves with velocity $4\\hat{j}\\,\\text{m/s}$, what is the speed of $m_3$ in $\\text{m/s}$? (Round to 2 decimals: $\\sqrt{32} \\approx 5.66$)",
    options: [],
    correctAnswer: 5.66,
    explanation: "Momentum balance: $\\vec{p}_1 + \\vec{p}_2 + \\vec{p}_3 = 0 \\implies 1(8\\hat{i}) + 2(4\\hat{j}) + 2\\vec{v}_3 = 0 \\implies 8\\hat{i} + 8\\hat{j} + 2\\vec{v}_3 = 0 \\implies \\vec{v}_3 = -(4\\hat{i} + 4\\hat{j})$. Speed is $|\\vec{v}_3| = \\sqrt{4^2 + 4^2} = \\sqrt{32} \\approx 5.66\\,\\text{m/s}$.",
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

console.log(`Part 4 generated: ${questions.length} questions (AR: ${arCount}, MCQ: ${mcqCount}, NUM: ${numCount})`);

const outPath = path.join(__dirname, 'data_jee_lom_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
