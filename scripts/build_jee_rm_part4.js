const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Angular momentum conservation";
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
    question: "Assertion: If the net external torque acting on a system about a given axis is zero, the total angular momentum of the system about that axis remains conserved.\\nReason: Newton's second law for rotational motion states that $\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}$, so when $\\vec{\\tau}_{\\text{ext}} = 0$, $\\frac{d\\vec{L}}{dt} = 0$, which implies $\\vec{L} = \\text{constant}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The rate of change of angular momentum equals the net external torque. When $\\vec{\\tau}_{\\text{ext}} = \\vec{0}$, angular momentum $\\vec{L}$ is invariant in time. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: An ice skater spinning on ice increases her angular speed by pulling her outstretched arms closer to her chest.\\nReason: By pulling her arms inwards, the skater reduces her moment of inertia $I$, which increases her angular speed $\\omega$ to keep angular momentum $L = I\\omega$ conserved.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Because there is no external torque from the low-friction ice, angular momentum $L = I\\omega = \\text{constant}$. Pulling arms inward shifts mass closer to the rotation axis, decreasing $I$. Consequently, $\\omega$ must increase proportionally: $\\omega_2 = \\left(\\frac{I_1}{I_2}\\right)\\omega_1 > \\omega_1$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a spinning skater pulls in her arms, her rotational kinetic energy increases even though no external torque acts on her.\\nReason: The increase in rotational kinetic energy comes from the positive internal muscular work done by the skater while pulling her arms inward against centrifugal reaction.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Rotational kinetic energy is $K = \\frac{L^2}{2I}$. As $I$ decreases while $L$ remains constant, $K$ increases inversely with $I$. This extra kinetic energy is supplied by internal chemical/muscular work done by the skater's muscles pulling her arms inward. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Kepler's second law (areal velocity $\\frac{dA}{dt} = \\text{constant}$) is a direct consequence of the conservation of angular momentum.\\nReason: The gravitational force exerted by the Sun on a planet is a central force, exerting zero torque about the center of the Sun, which keeps the planet's angular momentum constant.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The areal velocity swept out by the radius vector is $\\frac{dA}{dt} = \\frac{1}{2}|\\vec{r} \\times \\vec{v}| = \\frac{L}{2m}$. Since the gravitational force is central, $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$, making $L = \\text{constant}$ and thus $\\frac{dA}{dt} = \\text{constant}$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A planet moves faster at perihelion (closest approach to the Sun) than at aphelion (farthest distance from the Sun).\\nReason: Angular momentum $L = m v r\\sin\\theta$ is conserved, so at the turning points where $\\theta = 90^\\circ$, $v_p r_p = v_a r_a$, implying $v_p = \\left(\\frac{r_a}{r_p}\\right)v_a > v_a$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Since the orbit is governed by a central force, angular momentum is conserved. At perihelion and aphelion, velocity is perpendicular to the position vector, giving $L = m v_p r_p = m v_a r_a$. Because $r_p < r_a$, it follows that $v_p > v_a$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A person standing on a stationary frictionless rotating turntable who starts running clockwise along the rim causes the turntable to rotate counter-clockwise.\\nReason: The total angular momentum of the (person + turntable) system about the vertical rotation axis is initially zero and remains zero because no external vertical torque acts on the system.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The forces between the runner's shoes and the turntable are internal forces. With zero initial angular momentum and zero external torque, $L_{\\text{total}} = I_{\\text{person}}\\vec{\\omega}_{\\text{person}} + I_{\\text{table}}\\vec{\\omega}_{\\text{table}} = 0$. When the person generates clockwise angular momentum, the turntable must counter-rotate with equal and opposite angular momentum. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A cat falling from a height with zero initial angular momentum can twist its body in mid-air and land safely on its feet.\\nReason: By contorting different parts of its flexible body (tucking front legs while extending rear legs and twisting along different axes), the cat can rotate its net orientation while keeping its total angular momentum strictly zero at all times.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The falling cat phenomenon obeys conservation of angular momentum with $L = 0$. By altering the moments of inertia of its front and rear body halves independently during internal twisting, non-holonomic rotation allows a net $180^\\circ$ body orientation flip without external torque. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If polar ice caps melt and the water flows towards the equator, the duration of a day on Earth will slightly increase.\\nReason: Water shifting from the poles toward the equator distributes mass farther from Earth's rotation axis, increasing its moment of inertia $I$ and therefore decreasing its rotational angular speed $\\omega$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "By conservation of angular momentum for Earth ($L = I\\omega = \\text{constant}$), moving mass from near the rotation axis (poles) to far from the axis (equator) increases Earth's moment of inertia $I$. To maintain constant $L$, angular speed $\\omega$ must decrease, increasing the time period $T = \\frac{2\\pi}{\\omega}$ (the length of a day). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A particle moving in a straight line with constant velocity has constant, non-zero angular momentum about any origin not lying on its line of motion.\\nReason: The perpendicular distance $r_\\perp$ from the origin to the straight line of motion remains constant, so $L = p r_\\perp = m v r_\\perp = \\text{constant}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Magnitude of angular momentum is $L = |\\vec{r} \\times m\\vec{v}| = m v (r\\sin\\theta) = m v r_\\perp$. Since the particle travels in a straight line at uniform speed, both $v$ and the perpendicular distance $r_\\perp$ from the chosen point to the line of travel are constant. Thus $\\vec{L}$ is constant. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a horizontal disc rotating freely about a vertical axle has a lump of clay dropped gently onto its rim, the angular velocity of the disc decreases.\\nReason: The dropped clay increases the total moment of inertia of the system without introducing any external torque about the vertical rotation axis.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The clay introduces only vertical forces (gravity and normal contact) and internal horizontal friction forces. About the vertical axle, $\\tau_{\\text{ext}} = 0$. The new moment of inertia is $I' = I_0 + m R^2 > I_0$. By conservation of angular momentum, $\\omega' = \\frac{I_0}{I_0 + m R^2}\\omega_0 < \\omega_0$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: In an isolated two-disc clutch engagement where one rotating disc is brought into contact with a stationary coaxial disc, mechanical energy is conserved.\\nReason: The frictional forces between the engaging disc faces are internal forces, so no external torque acts on the composite system.",
    options: arOptions,
    correctAnswer: 3,
    explanation: "Assertion is false: Although angular momentum is conserved because friction forces are internal, kinetic energy is NOT conserved. Slipping between the disc surfaces generates friction work that dissipates kinetic energy into heat until a common angular velocity is attained. Reason is true regarding internal forces. Thus Assertion is false but Reason is true.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A helicopter must have a tail rotor or a tandem counter-rotating main rotor system to remain flight-stable.\\nReason: By conservation of angular momentum, the torque required to spin the main rotor clockwise would otherwise cause the helicopter fuselage to spin uncontrollably counter-clockwise.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "According to Newton's third law and conservation of angular momentum, driving the main overhead rotor produces an equal and opposite reaction torque on the fuselage. The sideways thrust of a tail rotor provides an external counter-torque to prevent fuselage spin. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A bullet fired horizontally hits and embeds into a uniform rod hinged vertically at its top end. Angular momentum is conserved about the hinge during impact, but linear momentum is not conserved.\\nReason: The hinge exerts an impulsive external reaction force on the rod during the collision, but because this reaction force acts directly at the hinge, its torque about the hinge is zero.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The hinge exerts a horizontal impulsive force $\\vec{F}_{\\text{hinge}}$, violating linear momentum conservation ($\\Delta P \\neq 0$). However, because the line of action of this impulsive force passes directly through the pivot ($r = 0$), its torque about the pivot is zero ($\\tau_{\\text{hinge}} = 0$). Thus angular momentum about the hinge is strictly conserved. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a man on a rotating stool extends his arms holding heavy weights, his angular velocity decreases.\\nReason: Extending his arms increases the distance of the weights from the axis of rotation, increasing his moment of inertia and lowering his angular speed by conservation of angular momentum.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "With no external torque along the vertical axis, $L = I\\omega = \\text{constant}$. Extending weights increases the mass distribution radius, increasing $I$. Consequently, $\\omega$ must drop. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: For a particle moving in a central force field, its motion is strictly confined to a single two-dimensional plane.\\nReason: The torque about the center of force is zero, so the angular momentum vector $\\vec{L} = \\vec{r} \\times \\vec{p}$ is constant in both magnitude and direction, and the position vector $\\vec{r}$ must remain perpendicular to the fixed vector $\\vec{L}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Because $\\vec{\\tau} = 0$, the vector $\\vec{L}$ is constant in time. By definition, $\\vec{r} \\cdot \\vec{L} = \\vec{r} \\cdot (\\vec{r} \\times \\vec{p}) = 0$, meaning the position vector $\\vec{r}$ is always orthogonal to the fixed direction of $\\vec{L}$, confining the particle to a fixed plane perpendicular to $\\vec{L}$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the Earth were to suddenly shrink to half its current radius with its mass remaining constant, the length of a day would become 6 hours.\\nReason: Moment of inertia of a solid sphere is $I = \\frac{2}{5}M R^2$. If $R$ halves, $I$ becomes $I/4$, so by conservation of angular momentum $I\\omega = \\text{constant}$, $\\omega$ quadruples, reducing the time period $T$ from $24\\,\\text{hours}$ to $6\\,\\text{hours}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "$I_2 = \\frac{2}{5}M(R/2)^2 = \\frac{I_1}{4}$. Conservation of angular momentum gives $I_1 \\omega_1 = I_2 \\omega_2 \\implies \\omega_2 = 4\\omega_1$. Since $T = 2\\pi/\\omega$, $T_2 = T_1 / 4 = 24 / 4 = 6\\,\\text{hours}$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A person holding a spinning bicycle wheel while sitting on a stationary swivel stool can cause the stool to rotate by flipping the wheel upside down.\\nReason: Flipping the wheel changes its angular momentum vector from $+L\\hat{k}$ to $-L\\hat{k}$, so by conservation of total angular momentum about the vertical axis, the stool and person must acquire an angular momentum of $+2L\\hat{k}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Initial angular momentum along vertical is $L_{\\text{initial}} = L_{\\text{wheel}} = L$. When flipped, $L_{\\text{wheel}} = -L$. With zero external vertical torque, $L_{\\text{initial}} = L_{\\text{final}} \\implies L = -L + L_{\\text{person+stool}} \\implies L_{\\text{person+stool}} = 2L$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: When a diver executes somersaults off a high diving board, she curls her body tightly into a tuck position.\\nReason: Tucking reduces the diver's moment of inertia, thereby substantially increasing her angular rotational speed $\\omega$ through conservation of angular momentum.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Once airborne, gravity acts through the diver's center of mass, producing zero external torque about the CM. By tucking, she decreases her moment of inertia $I$, increasing $\\omega$ to execute multiple rapid somersaults before extending her limbs to slow rotation for a clean entry. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A sphere rolling on a horizontal floor strikes an inelastic vertical step of height $h < R$. Angular momentum of the sphere is conserved about the corner edge of the step during the impact.\\nReason: The impulsive contact normal and friction forces exerted by the step act directly through the corner edge, producing zero torque about the corner.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "During the sudden collision with the step edge, the impulsive contact reaction force passes right through the edge of the step. Consequently, the torque of the impulsive impact about that edge is zero, conserving angular momentum about the step edge. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: The SI unit of angular momentum is $\\text{J}\\cdot\\text{s}$ (joule-second) or $\\text{kg}\\cdot\\text{m}^2/\\text{s}$.\\nReason: Angular momentum is the moment of linear momentum ($L = r p$), whose dimensions are $[\\text{L}][\\text{M L T}^{-1}] = [\\text{M L}^2 \\text{T}^{-1}]$, identical to Planck's constant.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The dimensions of angular momentum are $[\\text{M L}^2 \\text{T}^{-1}]$. Since energy is $[\\text{M L}^2 \\text{T}^{-2}]$, energy $\\times$ time yields $[\\text{M L}^2 \\text{T}^{-1}] = \\text{J}\\cdot\\text{s}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A gyroscope precesses in a horizontal circle when supported at one end rather than falling over under gravity.\\nReason: The gravitational torque is perpendicular to the horizontal spin angular momentum vector $\\vec{L}$, causing the direction of $\\vec{L}$ to change continuously ($d\\vec{L} = \\vec{\\tau} dt$) without altering its magnitude.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Because the gravitational torque $\\vec{\\tau}$ is orthogonal to the high spin angular momentum $\\vec{L}$, it cannot change the length of $\\vec{L}$, only its orientation. This causes the axle to precess horizontally with angular velocity $\\Omega_p = \\frac{\\tau}{L}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: A particle moving in uniform circular motion has a constant angular momentum about the center of the circle.\\nReason: In uniform circular motion, speed $v$ and radius $r$ are constant, and the centripetal force is directed toward the center, exerting zero torque about the center of the circle.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The centripetal force $\\vec{F}_c$ points radially inward, collinear with $-\\vec{r}$. The torque about the center is $\\vec{\\tau} = \\vec{r} \\times \\vec{F}_c = 0$. Since $\\vec{\\tau} = 0$, the angular momentum $\\vec{L} = mvr\\hat{k}$ is constant in both magnitude and direction. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Angular momentum is an axial vector (pseudovector).\\nReason: The direction of angular momentum is defined using the right-hand rule for the vector cross product $\\vec{L} = \\vec{r} \\times \\vec{p}$, which remains invariant under space inversion (parity transformation).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Under spatial inversion (parity $\\vec{r} \\to -\\vec{r}$ and $\\vec{p} \\to -\\vec{p}$), $\\vec{L} = (-\\vec{r}) \\times (-\\vec{p}) = +(\\vec{r} \\times \\vec{p}) = \\vec{L}$. Because it does not flip sign under coordinate reflection, it is classified as an axial vector (pseudovector). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If a child runs radially toward the center of a rotating merry-go-round, the angular velocity of the merry-go-round increases.\\nReason: The child running inward exerts no torque about the central axis, and moving mass closer to the center decreases the total moment of inertia.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "As the child moves radially inward, her distance $r$ from the axis decreases, reducing her moment of inertia contribution $m r^2$. Because the forces are internal and radial, no torque acts about the central axle. By $L = I\\omega = \\text{constant}$, the angular velocity $\\omega$ must increase. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: If the polar ice caps melted completely, the speed of rotation of the Earth would increase.\\nReason: Melting ice increases the density of water.",
    options: arOptions,
    correctAnswer: 3,
    explanation: "Assertion is false: As established, meltwater flows toward equatorial oceans, shifting mass away from the rotation axis and increasing Earth's moment of inertia, which slows down rotation (decreases $\\omega$). Reason is true because liquid water is denser than ice at $0^\\circ\\text{C}$, but does not support the false assertion. Thus Assertion is false but Reason is true.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "ASSERTION_REASON",
    question: "Assertion: Angular momentum of a projectile about its point of launch continuously increases during its flight.\\nReason: The torque due to gravity about the launch point is $\\vec{\\tau} = \\vec{r} \\times m\\vec{g}$, which has non-zero magnitude and acts constantly in the same rotational direction throughout the flight.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Torque about launch origin is $\\tau(t) = x(t) mg = (u\\cos\\theta t)mg$. Since $\\tau(t) > 0$ for all $t > 0$, $\\frac{dL}{dt} = \\tau(t) > 0$. Therefore, angular momentum about the launch point increases monotonically with time: $L(t) = \\int_0^t (mg u\\cos\\theta) t dt = \\frac{1}{2}mg u\\cos\\theta t^2$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 7 Multiple Choice Questions (MCQs)
  {
    type: "MCQ",
    question: "A thin horizontal circular disc of mass $M$ and radius $R$ is rotating about its central vertical axis with angular velocity $\\omega_0$. Two small sticky lumps of clay, each of mass $m$, are gently dropped onto the opposite ends of a diameter of the disc. The new angular velocity of the disc is:",
    options: [
      "$\\frac{M}{M + 4m}\\omega_0$",
      "$\\frac{M}{M + 2m}\\omega_0$",
      "$\\frac{M}{M + m}\\omega_0$",
      "$\\frac{2M}{2M + m}\\omega_0$"
    ],
    correctAnswer: 0,
    explanation: "Initial moment of inertia is $I_0 = \\frac{1}{2}M R^2$. Each clay lump lands at distance $R$, adding moment of inertia $m R^2 + m R^2 = 2 m R^2$. New moment of inertia is $I = \\frac{1}{2}M R^2 + 2 m R^2 = \\frac{1}{2}(M + 4m)R^2$. By conservation of angular momentum: $I_0 \\omega_0 = I \\omega \\implies \\frac{1}{2}M R^2 \\omega_0 = \\frac{1}{2}(M + 4m)R^2 \\omega \\implies \\omega = \\frac{M}{M + 4m}\\omega_0$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A uniform disc of mass $M$ and radius $R$ is rotating with angular speed $\\omega_1$ about its vertical axis. Another identical disc of mass $M$ and radius $R$, initially at rest, is dropped coaxially onto the first disc. If the two discs stick together and rotate as a single unit, the fraction of initial kinetic energy lost due to friction is:",
    options: [
      "$50\\%$",
      "$25\\%$",
      "$75\\%$",
      "$33.3\\%$"
    ],
    correctAnswer: 0,
    explanation: "Initial angular momentum is $L = I\\omega_1$. Combined moment of inertia is $I' = 2I$. By conservation of angular momentum, final angular velocity is $\\omega_2 = \\frac{I}{2I}\\omega_1 = \\frac{1}{2}\\omega_1$. Initial kinetic energy is $K_1 = \\frac{1}{2}I\\omega_1^2$. Final kinetic energy is $K_2 = \\frac{1}{2}(2I)\\left(\\frac{\\omega_1}{2}\\right)^2 = \\frac{1}{4}I\\omega_1^2 = \\frac{1}{2}K_1$. The fraction of kinetic energy lost is $\\frac{K_1 - K_2}{K_1} = \\frac{1}{2} = 50\\%$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A particle of mass $m$ is projected with speed $u$ at an angle $\\theta$ above the horizontal. What is the magnitude of the angular momentum of the particle about the point of projection when the particle reaches its maximum height?",
    options: [
      "$\\frac{m u^3 \\sin^2\\theta \\cos\\theta}{2g}$",
      "$\\frac{m u^3 \\sin\\theta \\cos^2\\theta}{2g}$",
      "$\\frac{m u^3 \\sin^2\\theta \\cos\\theta}{g}$",
      "$\\frac{m u^3 \\cos\\theta}{2g}$"
    ],
    correctAnswer: 0,
    explanation: "At the peak, maximum height is $H = \\frac{u^2\\sin^2\\theta}{2g}$ and the velocity is purely horizontal: $v_x = u\\cos\\theta$. The perpendicular distance from the launch origin to the horizontal velocity vector at the peak is simply the height $H$. Therefore, the magnitude of angular momentum is $L = m v_x H = m (u\\cos\\theta)\\left(\\frac{u^2\\sin^2\\theta}{2g}\\right) = \\frac{m u^3 \\sin^2\\theta \\cos\\theta}{2g}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A uniform thin rod of mass $M$ and length $L$ lies on a smooth horizontal table. A small particle of mass $m$ moving with speed $v$ perpendicular to the rod strikes one end of the rod and sticks to it. What is the angular velocity of the system immediately after the collision?",
    options: [
      "$\\frac{6 m v}{(M + 4m)L}$",
      "$\\frac{3 m v}{(M + 3m)L}$",
      "$\\frac{12 m v}{(M + 4m)L}$",
      "$\\frac{6 m v}{(M + m)L}$"
    ],
    correctAnswer: 0,
    explanation: "Let's find the center of mass of the (rod + particle) system after collision: $y_{cm} = \\frac{m(L/2)}{M + m}$ from the rod center towards the impact end. The particle is at distance $r_p = L/2 - y_{cm} = \\frac{M L}{2(M+m)}$ from the CM, and the rod center is at distance $y_{cm}$. By conservation of angular momentum about the system CM: $L_{\\text{initial}} = m v r_p = m v \\left(\\frac{M L}{2(M + m)}\\right)$. The moment of inertia about CM is $I_{cm} = \\left[\\frac{1}{12}M L^2 + M y_{cm}^2\\right] + m r_p^2 = \\frac{1}{12}M L^2 + \\frac{M m L^2}{4(M + m)} = \\frac{M(M + 4m)L^2}{12(M + m)}$. Thus $\\omega = \\frac{L_{\\text{initial}}}{I_{cm}} = \\frac{\\frac{m M v L}{2(M + m)}}{\\frac{M(M + 4m)L^2}{12(M + m)}} = \\frac{6 m v}{(M + 4m)L}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A person with mass $m$ stands at the rim of a circular platform of radius $R$ and moment of inertia $I$ that is rotating with angular velocity $\\omega_0$. If the person walks from the rim to the center of the platform, the final angular velocity of the platform is:",
    options: [
      "$\\frac{I + m R^2}{I}\\omega_0$",
      "$\\frac{I}{I + m R^2}\\omega_0$",
      "$\\frac{I + m R^2}{I + 2m R^2}\\omega_0$",
      "$\\left(1 + \\frac{m R^2}{2I}\\right)\\omega_0$"
    ],
    correctAnswer: 0,
    explanation: "Initial moment of inertia is $I_1 = I + m R^2$. At the center ($r = 0$), the person's contribution to moment of inertia vanishes, so $I_2 = I$. By conservation of angular momentum: $I_1 \\omega_0 = I_2 \\omega \\implies (I + m R^2)\\omega_0 = I \\omega \\implies \\omega = \\frac{I + m R^2}{I}\\omega_0$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A uniform rod of length $L$ and mass $M$ is pivoted at its upper end $O$ so it can swing freely. A bullet of mass $m$ travelling horizontally with speed $v$ strikes the lower end of the rod and embeds in it. What is the angular velocity of the rod immediately after collision?",
    options: [
      "$\\frac{3 m v}{(M + 3m)L}$",
      "$\\frac{m v}{(M + m)L}$",
      "$\\frac{3 m v}{(M + m)L}$",
      "$\\frac{6 m v}{(2M + 3m)L}$"
    ],
    correctAnswer: 0,
    explanation: "Angular momentum about pivot $O$ is conserved. Before collision: $L_i = m v L$. After collision, moment of inertia about $O$ is $I = \\frac{1}{3}M L^2 + m L^2 = \\left(\\frac{M}{3} + m\\right)L^2 = \\frac{M + 3m}{3}L^2$. Conservation of angular momentum gives $m v L = \\left(\\frac{M + 3m}{3}\\right)L^2 \\omega \\implies \\omega = \\frac{3 m v}{(M + 3m)L}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "MCQ",
    question: "A planet of mass $m$ revolves around the Sun of mass $M_s$ in an elliptical orbit. If the ratio of maximum to minimum distance from the Sun is $3:1$, what is the ratio of maximum to minimum orbital speed?",
    options: [
      "$3:1$",
      "$9:1$",
      "$\\sqrt{3}:1$",
      "$1:3$"
    ],
    correctAnswer: 0,
    explanation: "By conservation of angular momentum: $L = m v_{\\max} r_{\\min} = m v_{\\min} r_{\\max} \\implies \\frac{v_{\\max}}{v_{\\min}} = \\frac{r_{\\max}}{r_{\\min}} = 3:1$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 20 Numerical Questions
  {
    type: "NUMERICAL",
    question: "A particle of mass $2\\,\\text{kg}$ moves in the $xy$-plane with a constant velocity $\\vec{v} = 4\\hat{i}\\,\\text{m/s}$ along the line $y = 3\\,\\text{m}$. What is the magnitude of its angular momentum in $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ about the origin?",
    correctAnswer: 24,
    explanation: "Angular momentum magnitude is $L = m v r_\\perp = 2 \\times 4 \\times 3 = 24\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A wheel of moment of inertia $4\\,\\text{kg}\\cdot\\text{m}^2$ is rotating at $15\\,\\text{rad/s}$. What is its angular momentum in $\\text{J}\\cdot\\text{s}$?",
    correctAnswer: 60,
    explanation: "$L = I\\omega = 4 \\times 15 = 60\\,\\text{J}\\cdot\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A disc of moment of inertia $2\\,\\text{kg}\\cdot\\text{m}^2$ rotating at $30\\,\\text{rad/s}$ is coupled coaxially to another disc of moment of inertia $1\\,\\text{kg}\\cdot\\text{m}^2$ rotating at $15\\,\\text{rad/s}$ in the same direction. What is the common angular velocity in $\\text{rad/s}$ after coupling?",
    correctAnswer: 25,
    explanation: "Total initial angular momentum is $L_i = I_1\\omega_1 + I_2\\omega_2 = 2(30) + 1(15) = 60 + 15 = 75\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Combined moment of inertia is $I = 2 + 1 = 3\\,\\text{kg}\\cdot\\text{m}^2$. Common angular speed is $\\omega = \\frac{75}{3} = 25\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "If the second disc in the previous problem were rotating at $15\\,\\text{rad/s}$ in the opposite direction, what would be the common angular velocity in $\\text{rad/s}$ after coupling?",
    correctAnswer: 15,
    explanation: "$L_i = 2(30) - 1(15) = 60 - 15 = 45\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Common angular speed is $\\omega = \\frac{45}{3} = 15\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A turntable of moment of inertia $100\\,\\text{kg}\\cdot\\text{m}^2$ is rotating at $1.2\\,\\text{rad/s}$. A person of mass $50\\,\\text{kg}$ standing at the center walks out to a distance of $1.0\\,\\text{m}$ from the center. What is the new angular velocity in $\\text{rad/s}$?",
    correctAnswer: 0.8,
    explanation: "Initial moment of inertia is $I_1 = 100\\,\\text{kg}\\cdot\\text{m}^2$. At $r = 1\\,\\text{m}$, the person adds $m r^2 = 50(1^2) = 50\\,\\text{kg}\\cdot\\text{m}^2$. New moment of inertia is $I_2 = 100 + 50 = 150\\,\\text{kg}\\cdot\\text{m}^2$. By conservation of angular momentum: $\\omega_2 = \\frac{I_1 \\omega_1}{I_2} = \\frac{100 \\times 1.2}{150} = 0.8\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A planet in an elliptical orbit around the Sun has perihelion distance $1.0 \\times 10^8\\,\\text{km}$ and aphelion distance $2.0 \\times 10^8\\,\\text{km}$. If its speed at perihelion is $60\\,\\text{km/s}$, what is its speed at aphelion in $\\text{km/s}$?",
    correctAnswer: 30,
    explanation: "$v_a r_a = v_p r_p \\implies v_a = v_p \\frac{r_p}{r_a} = 60 \\times \\frac{1.0}{2.0} = 30\\,\\text{km/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform rod of length $1\\,\\text{m}$ and mass $2\\,\\text{kg}$ is hinged at its top end. A bullet of mass $0.1\\,\\text{kg}$ moving at $100\\,\\text{m/s}$ hits the bottom end of the rod and embeds in it. What is the angular velocity of the rod in $\\text{rad/s}$ immediately after the impact?",
    correctAnswer: 13,
    explanation: "$L_i = m v L = 0.1 \\times 100 \\times 1 = 10\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Moment of inertia is $I = \\frac{1}{3}M L^2 + m L^2 = \\frac{1}{3}(2)(1) + 0.1(1) = \\frac{2}{3} + 0.1 = 0.667 + 0.1 = 0.767\\,\\text{kg}\\cdot\\text{m}^2$. $\\omega = \\frac{10}{0.767} \\approx 13.04 \\approx 13\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A horizontal circular disc of mass $2\\,\\text{kg}$ and radius $0.5\\,\\text{m}$ rotates freely about its axis with angular velocity $40\\,\\text{rad/s}$. What is its angular momentum in $\\text{kg}\\cdot\\text{m}^2/\\text{s}$?",
    correctAnswer: 10,
    explanation: "Moment of inertia is $I = \\frac{1}{2}M R^2 = \\frac{1}{2}(2)(0.5)^2 = 0.25\\,\\text{kg}\\cdot\\text{m}^2$. Angular momentum is $L = I\\omega = 0.25 \\times 40 = 10\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "If a solid sphere of radius $R$ contracts uniformly to radius $R/3$ without changing its mass, by what factor does its rotational kinetic energy increase?",
    correctAnswer: 9,
    explanation: "Moment of inertia is $I \\propto R^2$. Contracting to $R/3$ reduces $I$ by a factor of $(1/3)^2 = 1/9$. Angular momentum is conserved: $L = \\text{constant}$. Kinetic energy is $K = \\frac{L^2}{2I} \\propto \\frac{1}{I}$. Therefore, $K$ increases by a factor of 9.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A man stands on a frictionless turntable holding two $5\\,\\text{kg}$ weights at arm's length ($0.8\\,\\text{m}$ from axis), spinning at $1\\,\\text{rev/s}$. When he pulls the weights to his chest ($0.2\\,\\text{m}$ from axis), his total moment of inertia drops from $8.0\\,\\text{kg}\\cdot\\text{m}^2$ to $2.0\\,\\text{kg}\\cdot\\text{m}^2$. What is his new rotational speed in $\\text{rev/s}$?",
    correctAnswer: 4,
    explanation: "By conservation of angular momentum: $I_1 \\omega_1 = I_2 \\omega_2 \\implies 8.0 \\times 1 = 2.0 \\times \\omega_2 \\implies \\omega_2 = 4\\,\\text{rev/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A torque of $10\\,\\text{N}\\cdot\\text{m}$ acts on a body for $4\\,\\text{seconds}$. What is the increase in the angular momentum of the body in $\\text{J}\\cdot\\text{s}$?",
    correctAnswer: 40,
    explanation: "$\\Delta L = \\tau \\Delta t = 10 \\times 4 = 40\\,\\text{J}\\cdot\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A particle of mass $0.5\\,\\text{kg}$ is moving in a circular path of radius $2\\,\\text{m}$ with constant angular velocity $6\\,\\text{rad/s}$. What is its angular momentum about the center in $\\text{kg}\\cdot\\text{m}^2/\\text{s}$?",
    correctAnswer: 12,
    explanation: "$L = m r^2 \\omega = 0.5 \\times (2^2) \\times 6 = 0.5 \\times 4 \\times 6 = 12\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform thin rod of length $2\\,\\text{m}$ and mass $3\\,\\text{kg}$ is rotating in a horizontal plane about a vertical axis through its center with angular speed $10\\,\\text{rad/s}$. What is its angular momentum in $\\text{kg}\\cdot\\text{m}^2/\\text{s}$?",
    correctAnswer: 10,
    explanation: "$I_{cm} = \\frac{1}{12}M L^2 = \\frac{1}{12}(3)(2^2) = \\frac{12}{12} = 1\\,\\text{kg}\\cdot\\text{m}^2$. $L = I\\omega = 1 \\times 10 = 10\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A satellite of mass $1000\\,\\text{kg}$ is in an elliptical orbit around the Earth. At closest approach, its distance is $7000\\,\\text{km}$ and speed is $8\\,\\text{km/s}$. What is its speed in $\\text{km/s}$ at farthest approach where distance is $14000\\,\\text{km}$?",
    correctAnswer: 4,
    explanation: "$v_2 = v_1 \\left(\\frac{r_1}{r_2}\\right) = 8\\left(\\frac{7000}{14000}\\right) = 4\\,\\text{km/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two discs of moments of inertia $I_1 = 3\\,\\text{kg}\\cdot\\text{m}^2$ and $I_2 = 1\\,\\text{kg}\\cdot\\text{m}^2$ rotate on the same axis at $\\omega_1 = 20\\,\\text{rad/s}$ and $\\omega_2 = 0$. When brought into contact, what is the loss in rotational kinetic energy in joules?",
    correctAnswer: 150,
    explanation: "Initial kinetic energy: $K_i = \\frac{1}{2}(3)(20^2) = 600\\,\\text{J}$. Final angular speed: $\\omega_f = \\frac{3(20)}{3 + 1} = \\frac{60}{4} = 15\\,\\text{rad/s}$. Final kinetic energy: $K_f = \\frac{1}{2}(4)(15^2) = 2(225) = 450\\,\\text{J}$. Loss in kinetic energy is $\\Delta K = 600 - 450 = 150\\,\\text{J}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A sphere of radius $0.1\\,\\text{m}$ and mass $1\\,\\text{kg}$ is spinning at $50\\,\\text{rad/s}$ about its diameter. What is its angular momentum in $\\text{kg}\\cdot\\text{m}^2/\\text{s}$?",
    correctAnswer: 0.2,
    explanation: "$I = \\frac{2}{5}M R^2 = \\frac{2}{5}(1)(0.01) = 0.004\\,\\text{kg}\\cdot\\text{m}^2$. $L = I\\omega = 0.004 \\times 50 = 0.2\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A circular disc has mass $4\\,\\text{kg}$ and radius $0.5\\,\\text{m}$. A tangential impulse of $10\\,\\text{N}\\cdot\\text{s}$ is applied to its rim. What is the resulting angular speed in $\\text{rad/s}$, starting from rest?",
    correctAnswer: 10,
    explanation: "Angular impulse is $J_\\theta = J \\times R = 10 \\times 0.5 = 5\\,\\text{N}\\cdot\\text{m}\\cdot\\text{s}$. Moment of inertia is $I = \\frac{1}{2}M R^2 = \\frac{1}{2}(4)(0.25) = 0.5\\,\\text{kg}\\cdot\\text{m}^2$. Angular speed is $\\omega = \\frac{J_\\theta}{I} = \\frac{5}{0.5} = 10\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A person with moment of inertia $3\\,\\text{kg}\\cdot\\text{m}^2$ stands on a platform with moment of inertia $2\\,\\text{kg}\\cdot\\text{m}^2$. If the person spins at $5\\,\\text{rad/s}$ relative to the platform, and the combined system starts from rest, what is the magnitude of the angular velocity of the platform relative to ground in $\\text{rad/s}$?",
    correctAnswer: 3,
    explanation: "Let platform velocity be $\\omega_p$. Person velocity is $\\omega_m = \\omega_p + 5$. Total angular momentum is zero: $I_p \\omega_p + I_m \\omega_m = 0 \\implies 2 \\omega_p + 3(\\omega_p + 5) = 0 \\implies 5 \\omega_p + 15 = 0 \\implies \\omega_p = -3\\,\\text{rad/s}$. Magnitude is $3\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A solid sphere of mass $M$ and radius $R$ rolls without slipping on a horizontal surface with linear speed $v = 14\\,\\text{m/s}$. What is the total angular momentum of the sphere in units of $M R$ about a point on the ground?",
    correctAnswer: 19.6,
    explanation: "About a point on the ground, angular momentum is $L = I_{cm}\\omega + M v R = \\frac{2}{5}M R^2\\left(\\frac{v}{R}\\right) + M v R = \\frac{7}{5}M v R$. With $v = 14\\,\\text{m/s}$, $L = \\frac{7}{5}(14) M R = \\frac{98}{5} M R = 19.6 M R$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A turntable of radius $R = 2\\,\\text{m}$ and moment of inertia $I = 200\\,\\text{kg}\\cdot\\text{m}^2$ is rotating at $2\\,\\text{rad/s}$. A boy of mass $50\\,\\text{kg}$ gently steps onto the outer rim from a stationary ladder. Find the new angular speed in $\\text{rad/s}$.",
    correctAnswer: 1,
    explanation: "Initial angular momentum is $L = I_0 \\omega_0 = 200 \\times 2 = 400\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. The boy adds $m R^2 = 50(2^2) = 200\\,\\text{kg}\\cdot\\text{m}^2$. New moment of inertia is $I = 200 + 200 = 400\\,\\text{kg}\\cdot\\text{m}^2$. New angular speed is $\\omega = \\frac{400}{400} = 1\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  }
];

const outputPath = path.join(__dirname, 'data_jee_rm_part4.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');

console.log(`Part 4 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'ASSERTION_REASON').length}, MCQ: ${questions.filter(q => q.type === 'MCQ').length}, NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);
console.log(`Saved to ${outputPath}`);
