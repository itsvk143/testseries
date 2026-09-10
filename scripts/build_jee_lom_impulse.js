const fs = require('fs');

const subTopic = "Impulse";
const subject = "Physics";
const chapter = "Laws of Motion";

const AR_OPTIONS = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const arQuestions = [
  {
    assertion: "A cricketer moves his hands backward while catching a fast-moving cricket ball.",
    reason: "Moving the hands backward increases the time of contact during the catch, which reduces the average force exerted on the player's hands for the same change in momentum.",
    correctAnswer: 0,
    explanation: "By the impulse-momentum theorem, $J = F_{\\text{avg}} \\Delta t = \\Delta p$. To produce the required change in momentum $\\Delta p$, increasing the contact duration $\\Delta t$ proportionally reduces the average impact force $F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Impulse has the same dimensions and SI units as linear momentum.",
    reason: "Impulse is defined as the time integral of force, $\\vec{J} = \\int \\vec{F} dt$, which by Newton's second law equals the change in linear momentum $\\Delta\\vec{p}$.",
    correctAnswer: 0,
    explanation: "Since $\\vec{J} = \\Delta\\vec{p}$, the dimensions are $[MLT^{-1}]$ and the SI unit is $\\text{N}\\cdot\\text{s} = \\text{kg}\\cdot\\text{m/s}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A large force acting on a body for an extremely short duration can produce a finite change in momentum.",
    reason: "Such large transient forces are called impulsive forces, and their time integral $\\int \\vec{F} dt$ remains finite even as $\\Delta t \\to 0$.",
    correctAnswer: 0,
    explanation: "An impulsive force is very large in magnitude but acts over an infinitesimal time $\\Delta t$. The product $F \\Delta t$ remains finite and equals the net impulse delivered. Both Assertion and Reason are true."
  },
  {
    assertion: "When a rubber ball rebounds from a rigid floor with the same speed, the impulse delivered by the floor to the ball is zero.",
    reason: "The magnitude of the final momentum of the ball is equal to the magnitude of its initial momentum.",
    correctAnswer: 3,
    explanation: "Impulse is a vector: $\\vec{J} = \\vec{p}_f - \\vec{p}_i = m v - (-m v) = 2mv$ upwards. Although kinetic energy and speed are unchanged, momentum reverses direction, so the impulse is $2mv$, not zero. Assertion is false, Reason is true."
  },
  {
    assertion: "During an impact where impulsive forces act, non-impulsive forces like gravity and normal friction can be neglected during the collision interval.",
    reason: "The duration of impact is so short that the impulse of finite, non-impulsive forces during this time is practically zero compared to the impulse of the impact force.",
    correctAnswer: 0,
    explanation: "For gravity, $\\int mg\\,dt = mg \\Delta t \\to 0$ as $\\Delta t \\to 0$, whereas impulsive contact forces have $\\int F_{\\text{contact}}\\,dt \\gg mg \\Delta t$. Both Assertion and Reason are true."
  },
  {
    assertion: "The area under a force-time ($F-t$) graph represents the impulse imparted by the force.",
    reason: "Impulse is mathematically defined as the definite integral of force with respect to time, $J = \\int_{t_1}^{t_2} F(t)\\,dt$, which geometrically equals the area under the $F-t$ curve.",
    correctAnswer: 0,
    explanation: "The definite integral $\\int F dt$ gives the geometric area under the curve between the time limits, which corresponds directly to the net impulse. Both Assertion and Reason are true."
  },
  {
    assertion: "A glass vessel breaks when it falls on a hard cemented floor, but survives when it falls from the same height onto a soft carpet or sand.",
    reason: "A soft surface yields upon impact, increasing the stopping time and therefore reducing the peak impulsive force on the glass.",
    correctAnswer: 0,
    explanation: "The change in momentum is the same in both falls. Because the sand/carpet compresses, the impact time $\\Delta t$ increases, thereby reducing $F_{\\text{avg}} = \\Delta p / \\Delta t$ below the breaking threshold. Both Assertion and Reason are true."
  },
  {
    assertion: "When a ball hits a smooth wall obliquely with angle of incidence $\\theta$, the impulse received by the ball is directed perpendicular to the wall.",
    reason: "For a smooth frictionless wall, there is no tangential force along the wall surface, so the impulsive force acts strictly along the common normal.",
    correctAnswer: 0,
    explanation: "Without friction, the parallel component of force is zero ($F_\\parallel = 0$). Hence the parallel momentum is conserved, and impulse is exclusively along the normal direction. Both Assertion and Reason are true."
  },
  {
    assertion: "Cars are designed with crumple zones in their front and rear ends for safety during head-on collisions.",
    reason: "Crumple zones deform plastically during a crash, prolonging the impact duration and lowering the average deceleration experienced by the passengers.",
    correctAnswer: 0,
    explanation: "Crumpling absorbs collision kinetic energy over a longer distance and duration $\\Delta t$, decreasing $a = \\Delta v / \\Delta t$ and reducing the impulsive impact force on passengers. Both Assertion and Reason are true."
  },
  {
    assertion: "The impulse delivered to a wall by a stream of water bouncing back elastically is greater than that if the water splashes and comes to rest.",
    reason: "In an elastic rebound, the change in momentum is $2mv$, whereas when water comes to rest, the change in momentum is only $mv$.",
    correctAnswer: 0,
    explanation: "For rebound, $\\Delta p = m v - (-m v) = 2mv$, doubling the change in momentum and the impulse delivered per unit time compared to inelastic splash $\\Delta p = mv$. Both Assertion and Reason are true."
  },
  {
    assertion: "A karate player can break a pile of tiles with a swift single blow of bare hand.",
    reason: "By delivering the blow in an extremely short time interval, the player maximizes the rate of change of momentum and exerts an enormous impulsive force.",
    correctAnswer: 0,
    explanation: "The hand moves with high speed and stops almost instantaneously ($\\Delta t \\to 0$), producing an extremely high peak force $F = \\Delta p / \\Delta t$ exceeding the breaking strength of tiles. Both Assertion and Reason are true."
  },
  {
    assertion: "If the net impulse acting on a particle over a time interval is zero, the force acting on the particle must have been zero throughout that interval.",
    reason: "Impulse is the integral of force over time, so zero force implies zero impulse.",
    correctAnswer: 3,
    explanation: "Zero impulse only means $\\int F dt = 0$. The force can vary symmetrically, taking positive and negative values such that the total area under the $F-t$ curve cancels to zero. Assertion is false, Reason is true."
  },
  {
    assertion: "An iron nail is driven deeper into a wooden plank by a quick blow of a heavy hammer than by pushing it with a steady force equal to the hammer's weight.",
    reason: "The hammer possesses substantial kinetic energy that is destroyed in a fraction of a second, resulting in a transient impulsive force much larger than the static weight.",
    correctAnswer: 0,
    explanation: "The deceleration time during impact is tiny, so $F_{\\text{impulse}} = \\frac{m v}{\\Delta t} \\gg mg$. This huge force overcomes the high static friction of the wood. Both Assertion and Reason are true."
  },
  {
    assertion: "For a projectile in flight under gravity, the impulse of gravitational force between launch and landing is non-zero.",
    reason: "Gravity exerts a continuous downward force $mg$, delivering an impulse $\\vec{J} = \\vec{F} t = -mg T\\hat{j}$, where $T$ is the total time of flight.",
    correctAnswer: 0,
    explanation: "The vertical momentum changes from $+m u \\sin\\theta$ to $-m u \\sin\\theta$, giving $\\Delta p_y = -2 m u \\sin\\theta = -mg T$. Hence gravity delivers a finite downward impulse. Both Assertion and Reason are true."
  },
  {
    assertion: "A bird perching on a high-voltage wire receives zero electrical impulse as long as it touches only one line.",
    reason: "Impulse in mechanics refers strictly to the time integral of mechanical force and has no connection with electric charge flow unless electromagnetic forces are involved.",
    correctAnswer: 1,
    explanation: "Mechanically, the wire exerts only normal support balancing gravity. Electrically, both feet are at the same potential, so no significant current or electrical force acts. Both statements are true, but Reason is a definition rather than the physical cause of bird safety. Both are true, Reason not explanation."
  },
  {
    assertion: "When two bodies undergo an inelastic collision, the impulse experienced by one body is equal and opposite to the impulse experienced by the other.",
    reason: "According to Newton's third law, at every instant during contact, the action force on one body is equal in magnitude and opposite in direction to the reaction force on the other.",
    correctAnswer: 0,
    explanation: "Since $\\vec{F}_{12}(t) = -\\vec{F}_{21}(t)$ at every instant, their time integrals over the collision duration satisfy $\\vec{J}_1 = -\\vec{J}_2$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A gun recoils backward with the same magnitude of impulse that is imparted to the fired bullet.",
    reason: "In the absence of external forces, the internal explosion forces form an action-reaction pair, imparting equal and opposite impulses to bullet and gun.",
    correctAnswer: 0,
    explanation: "By conservation of linear momentum, $\\vec{p}_{\\text{bullet}} + \\vec{p}_{\\text{gun}} = 0$, meaning $|\\vec{J}_{\\text{bullet}}| = |\\vec{J}_{\\text{gun}}|$. Both Assertion and Reason are true."
  },
  {
    assertion: "Shock absorbers in automobiles reduce the bumpy sensations on uneven roads.",
    reason: "Shock absorbers decrease the period of oscillation by dissipating mechanical energy and spreading the impulse over a longer time.",
    correctAnswer: 0,
    explanation: "Dampers absorb vibration energy through viscous resistance, converting sharp impulse impacts into smooth, prolonged decelerations with lower peak force. Both Assertion and Reason are true."
  },
  {
    assertion: "A heavy bag of sand is preferred over a hard wooden block for boxing punch practice.",
    reason: "The sand deforms continuously upon impact, providing a larger stopping time and lower peak impact force on the boxer's wrists.",
    correctAnswer: 0,
    explanation: "Sand grain rearrangement yields significantly, extending contact time $\\Delta t$ and protecting bones from high peak shock forces. Both Assertion and Reason are true."
  },
  {
    assertion: "The impulse imparted by a force $\\vec{F} = (2t\\hat{i} + 3t^2\\hat{j})\\,\\text{N}$ from $t=0$ to $t=2\\,\\text{s}$ is $(4\\hat{i} + 8\\hat{j})\\,\\text{N}\\cdot\\text{s}$.",
    reason: "Impulse is obtained by integrating the vector force over the given time interval: $\\vec{J} = \\int_0^2 (2t\\hat{i} + 3t^2\\hat{j})\\,dt = [t^2]_0^2\\hat{i} + [t^3]_0^2\\hat{j} = 4\\hat{i} + 8\\hat{j}$.",
    correctAnswer: 0,
    explanation: "Direct integration: $\\int_0^2 2t\\,dt = 4$, and $\\int_0^2 3t^2\\,dt = 8$. Thus $\\vec{J} = (4\\hat{i} + 8\\hat{j})\\,\\text{N}\\cdot\\text{s}$. Both Assertion and Reason are true."
  },
  {
    assertion: "A rubber ball and a lead sphere of equal mass dropped from the same height onto a stone floor experience the same impulse.",
    reason: "Both objects have the same downward momentum just before striking the stone floor.",
    correctAnswer: 3,
    explanation: "The lead sphere deforms and sticks without bouncing ($\\Delta p = mv$), whereas the rubber ball rebounds upward ($\\Delta p \\approx 2mv$). Hence the rubber ball receives almost twice the impulse of the lead sphere. Assertion is false, Reason is true."
  },
  {
    assertion: "During a collision between two billiard balls, the contact force varies continuously from zero to a maximum and back to zero.",
    reason: "The contact force depends on the elastic compression of the balls, which increases until the common velocity is reached and then decreases during restitution.",
    correctAnswer: 0,
    explanation: "As the balls compress, elastic restoring force grows to a peak at maximum deformation, then decreases as the stored elastic potential energy drives them apart. Both Assertion and Reason are true."
  },
  {
    assertion: "When a person jumps from a certain height onto a hard floor, bending the knees upon landing prevents bone fracture.",
    reason: "Bending the knees increases the displacement over which the body's center of mass comes to rest, prolonging the impact time and minimizing the impact force.",
    correctAnswer: 0,
    explanation: "Knee flexion increases the landing distance and duration $\\Delta t$, reducing $a = v / \\Delta t$ and normal reaction force $N = m(g + a)$. Both Assertion and Reason are true."
  },
  {
    assertion: "An impulse cannot change the kinetic energy of a system without doing work.",
    reason: "Impulse changes the momentum of a body, but the change in kinetic energy is determined strictly by the work done by the force over displacement.",
    correctAnswer: 0,
    explanation: "By work-energy theorem, $\\Delta K = W = \\int \\vec{F}\\cdot d\\vec{r}$. A pure impulsive force that acts without displacement (e.g. infinite force over zero distance) does zero work. Both Assertion and Reason are true."
  },
  {
    assertion: "In a triangular force-time pulse of base $t_0$ and peak force $F_0$, the impulse delivered is $\\frac{1}{2} F_0 t_0$.",
    reason: "The area of a triangle with base $b$ and height $h$ is given by $\\frac{1}{2} b h$.",
    correctAnswer: 0,
    explanation: "The impulse is the area of the triangular $F-t$ curve: $J = \\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} F_0 t_0$. Both Assertion and Reason are true."
  },
  {
    assertion: "A flexible heavy chain falling vertically onto a table delivers an impulse due to both the resting weight and the destruction of momentum of newly landing links.",
    reason: "At any instant, the instantaneous force on the table is $F = \\lambda x g + \\lambda v^2$, where $\\lambda$ is linear mass density and $v$ is the impact velocity.",
    correctAnswer: 0,
    explanation: "The rate of momentum destruction of falling links is $\\frac{dp}{dt} = v\\frac{dm}{dt} = v(\\lambda v) = \\lambda v^2$. Adding the static weight $\\lambda x g$ gives the total force, which is 3 times the static weight when free falling. Both Assertion and Reason are true."
  }
];

const mcqQuestions = [
  {
    question: "A ball of mass $0.2\\,\\text{kg}$ moving horizontally with a speed of $20\\,\\text{m/s}$ strikes a vertical wall normally and rebounds with a speed of $15\\,\\text{m/s}$. If the ball was in contact with the wall for $0.01\\,\\text{s}$, the average force exerted by the wall on the ball is:",
    options: [
      "$700\\,\\text{N}$",
      "$100\\,\\text{N}$",
      "$350\\,\\text{N}$",
      "$1400\\,\\text{N}$"
    ],
    correctAnswer: 0,
    explanation: "Change in momentum $\\Delta p = m(v_f - v_i) = 0.2 \\times [15 - (-20)] = 0.2 \\times 35 = 7.0\\,\\text{N}\\cdot\\text{s}$. Average force $F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t} = \\frac{7.0}{0.01} = 700\\,\\text{N}$."
  },
  {
    question: "A force acting on a particle of mass $m$ is given by $F(t) = F_0 e^{-t/\\tau}$, where $F_0$ and $\\tau$ are positive constants. The total impulse imparted to the particle as $t$ goes from $0$ to $\\infty$ is:",
    options: [
      "$F_0 \\tau$",
      "$\\frac{F_0}{\\tau}$",
      "$F_0 \\tau^2$",
      "$\\frac{F_0 \\tau}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Impulse $J = \\int_0^\\infty F_0 e^{-t/\\tau}\\,dt = F_0 \\left[-\\tau e^{-t/\\tau}\\right]_0^\\infty = F_0 (0 - (-\\tau)) = F_0 \\tau$."
  },
  {
    question: "A ball of mass $m$ strikes a rigid smooth wall at an angle of incidence $\\theta$ with speed $v$ and rebounds elastically at the same angle $\\theta$ with the normal. The magnitude of the impulse imparted to the ball by the wall is:",
    options: [
      "$2 m v \\cos\\theta$",
      "$2 m v \\sin\\theta$",
      "$m v \\cos\\theta$",
      "$2 m v$"
    ],
    correctAnswer: 0,
    explanation: "Taking normal along the $x$-axis: $p_{ix} = m v \\cos\\theta$ and $p_{fx} = -m v \\cos\\theta$. The parallel component $p_y = m v \\sin\\theta$ remains unchanged since the wall is smooth. Hence $\\Delta p_x = -m v \\cos\\theta - m v \\cos\\theta = -2 m v \\cos\\theta$. The magnitude of the impulse is $2 m v \\cos\\theta$."
  },
  {
    question: "A particle of mass $0.5\\,\\text{kg}$ is acted upon by a time-dependent force $F(t) = (6t\\hat{i} + 8t^3\\hat{j})\\,\\text{N}$. If the particle is initially at rest at $t=0$, its speed at $t = 2\\,\\text{s}$ is:",
    options: [
      "$80\\,\\text{m/s}$",
      "$40\\,\\text{m/s}$",
      "$20\\,\\text{m/s}$",
      "$100\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "Impulse $\\vec{J} = \\int_0^2 (6t\\hat{i} + 8t^3\\hat{j})\\,dt = [3t^2]_0^2\\hat{i} + [2t^4]_0^2\\hat{j} = (12\\hat{i} + 32\\hat{j})\\,\\text{N}\\cdot\\text{s}$. Velocity $\\vec{v} = \\frac{\\vec{J}}{m} = \\frac{12\\hat{i} + 32\\hat{j}}{0.5} = (24\\hat{i} + 64\\hat{j})\\,\\text{m/s}$. Speed $v = \\sqrt{24^2 + 64^2} = \\sqrt{576 + 4096} = \\sqrt{4672} \\approx \\sqrt{80^2} = 80\\,\\text{m/s}$ wait: $24^2 + 64^2 = 8^2(3^2 + 8^2) = 64 \\times 73 = 4672 \\approx 68.35$. Let's choose nicer numbers: $6t\\hat{i} + 12t^2\\hat{j}$ -> $\\int_0^2 6t = 12$, $\\int_0^2 12t^2 = 32$, $m=0.5 \\implies \\vec{v} = 24\\hat{i} + 64\\hat{j}$. Wait, let's use $F(t) = (6t\\hat{i} + 4t\\hat{j})\\,\\text{N}$: $\\vec{J} = (12\\hat{i} + 8\\hat{j})$. Let's adjust to give exactly $100\\,\\text{m/s}$ or $80\\,\\text{m/s}$."
  },
  {
    question: "A stream of water flowing horizontally with speed $v = 15\\,\\text{m/s}$ from a hose of cross-sectional area $A = 10^{-2}\\,\\text{m}^2$ hits a vertical wall and splashes down without rebounding. Taking the density of water $\\rho = 1000\\,\\text{kg/m}^3$, the force exerted by the water on the wall is:",
    options: [
      "$2250\\,\\text{N}$",
      "$1125\\,\\text{N}$",
      "$4500\\,\\text{N}$",
      "$1500\\,\\text{N}$"
    ],
    correctAnswer: 0,
    explanation: "Mass flow rate $\\frac{dm}{dt} = \\rho A v = 1000 \\times 10^{-2} \\times 15 = 150\\,\\text{kg/s}$. Force $F = v \\frac{dm}{dt} = 15 \\times 150 = 2250\\,\\text{N}$."
  },
  {
    question: "The force-time graph for a linear impact on a body of mass $2\\,\\text{kg}$ initially at rest is an isosceles triangle of base duration $4\\,\\text{ms}$ and peak force $1000\\,\\text{N}$. The velocity acquired by the body is:",
    options: [
      "$1\\,\\text{m/s}$",
      "$2\\,\\text{m/s}$",
      "$4\\,\\text{m/s}$",
      "$0.5\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "Impulse $J = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times (4 \\times 10^{-3}\\,\\text{s}) \\times 1000\\,\\text{N} = 2.0\\,\\text{N}\\cdot\\text{s}$. Velocity $v = \\frac{J}{m} = \\frac{2.0}{2} = 1.0\\,\\text{m/s}$."
  },
  {
    question: "A bullet of mass $20\\,\\text{g}$ travelling horizontally at $500\\,\\text{m/s}$ passes through a wooden target of thickness $0.2\\,\\text{m}$ and emerges with a speed of $100\\,\\text{m/s}$. The magnitude of the impulse delivered to the bullet is:",
    options: [
      "$8\\,\\text{N}\\cdot\\text{s}$",
      "$10\\,\\text{N}\\cdot\\text{s}$",
      "$12\\,\\text{N}\\cdot\\text{s}$",
      "$4\\,\\text{N}\\cdot\\text{s}$"
    ],
    correctAnswer: 0,
    explanation: "Impulse $J = |\\Delta p| = m(v_i - v_f) = (20 \\times 10^{-3}\\,\\text{kg}) \\times (500 - 100)\\,\\text{m/s} = 0.02 \\times 400 = 8.0\\,\\text{N}\\cdot\\text{s}$."
  }
];

// Fix Question 4 of MCQ to have clean numbers:
mcqQuestions[3] = {
  question: "A particle of mass $0.5\\,\\text{kg}$ is acted upon by a time-dependent force $\\vec{F}(t) = (6t\\hat{i} + 8t\\hat{j})\\,\\text{N}$. If the particle starts from rest at $t=0$, its speed at $t = 2\\,\\text{s}$ is:",
  options: [
    "$40\\,\\text{m/s}$",
    "$20\\,\\text{m/s}$",
    "$80\\,\\text{m/s}$",
    "$50\\,\\text{m/s}$"
  ],
  correctAnswer: 0,
  explanation: "Impulse $\\vec{J} = \\int_0^2 (6t\\hat{i} + 8t\\hat{j})\\,dt = [3t^2]_0^2\\hat{i} + [4t^2]_0^2\\hat{j} = (12\\hat{i} + 16\\hat{j})\\,\\text{N}\\cdot\\text{s}$. The momentum is $\\vec{p} = \\vec{J} = (12\\hat{i} + 16\\hat{j})\\,\\text{kg}\\cdot\\text{m/s}$. The velocity is $\\vec{v} = \\frac{\\vec{p}}{m} = \\frac{12\\hat{i} + 16\\hat{j}}{0.5} = (24\\hat{i} + 32\\hat{j})\\,\\text{m/s}$. Magnitude $v = \\sqrt{24^2 + 32^2} = \\sqrt{576 + 1024} = \\sqrt{1600} = 40\\,\\text{m/s}$."
};

const numQuestions = [
  {
    question: "A ball of mass $0.15\\,\\text{kg}$ is dropped from a height of $10\\,\\text{m}$ onto a flat horizontal surface. It rebounds to a height of $2.5\\,\\text{m}$. Taking $g = 10\\,\\text{m/s}^2$, the magnitude of impulse delivered to the ball by the ground is (in $\\text{N}\\cdot\\text{s}$):",
    correctAnswer: 3,
    explanation: "Velocity just before hitting ground $v_1 = \\sqrt{2 g h_1} = \\sqrt{2 \\times 10 \\times 10} = \\sqrt{200} = 14.14\\,\\text{m/s}$. Velocity just after rebound $v_2 = \\sqrt{2 g h_2} = \\sqrt{2 \\times 10 \\times 2.5} = \\sqrt{50} = 7.07\\,\\text{m/s}$. Let's use heights $20\\,\\text{m}$ and $5\\,\\text{m}$: $v_1 = 20\\,\\text{m/s}$ and $v_2 = 10\\,\\text{m/s}$. Then $J = m(v_1 + v_2) = 0.15 \\times (20 + 10) = 4.5$. For $h_1 = 10\\,\\text{m}$ and $h_2 = 2.5\\,\\text{m}$, let's use $m = 0.2\\,\\text{kg}$ with $v_1 = 10\\sqrt{2}$. Better: dropped from $5\\,\\text{m}$ ($v_1 = 10\\,\\text{m/s}$) and rebounds to $1.25\\,\\text{m}$ ($v_2 = 5\\,\\text{m/s}$). Then $J = 0.2 \\times (10 + 5) = 3.0\\,\\text{N}\\cdot\\text{s}$."
  },
  {
    question: "A force $F(t) = 300 - 100t$ acts on a particle of mass $2\\,\\text{kg}$ from $t=0$ to $t=3\\,\\text{s}$, where $F$ is in Newtons and $t$ is in seconds. The impulse imparted by the force over this $3\\,\\text{s}$ interval is (in $\\text{N}\\cdot\\text{s}$):",
    correctAnswer: 450,
    explanation: "Impulse $J = \\int_0^3 (300 - 100t)\\,dt = [300t - 50t^2]_0^3 = 300(3) - 50(9) = 900 - 450 = 450\\,\\text{N}\\cdot\\text{s}$."
  },
  {
    question: "A rubber ball of mass $0.25\\,\\text{kg}$ is thrown against a wall with velocity $16\\,\\text{m/s}$ and rebounds along the same line at $12\\,\\text{m/s}$. If the contact lasts for $0.02\\,\\text{s}$, the average force exerted on the wall is (in $\\text{N}$):",
    correctAnswer: 350,
    explanation: "Change in momentum $\\Delta p = 0.25 \\times [16 - (-12)] = 0.25 \\times 28 = 7.0\\,\\text{N}\\cdot\\text{s}$. Average force $F = \\frac{\\Delta p}{\\Delta t} = \\frac{7.0}{0.02} = 350\\,\\text{N}$."
  },
  {
    question: "A constant force of $25\\,\\text{N}$ acts on a body of mass $5\\,\\text{kg}$ for $4\\,\\text{seconds}$. The change in linear momentum of the body is (in $\\text{kg}\\cdot\\text{m/s}$):",
    correctAnswer: 100,
    explanation: "By impulse-momentum theorem: $\\Delta p = J = F \\Delta t = 25 \\times 4 = 100\\,\\text{kg}\\cdot\\text{m/s}$."
  },
  {
    question: "A stream of bullets each of mass $10\\,\\text{g}$ is fired at a rate of $20\\,\\text{bullets per second}$ against a wall with a speed of $400\\,\\text{m/s}$. If the bullets stop dead on impact, the average force exerted on the wall is (in $\\text{N}$):",
    correctAnswer: 80,
    explanation: "Average force $F = n m v = (20\\,\\text{s}^{-1}) \\times (0.01\\,\\text{kg}) \\times (400\\,\\text{m/s}) = 80\\,\\text{N}$."
  },
  {
    question: "A body of mass $4\\,\\text{kg}$ moving with an initial velocity of $15\\,\\text{m/s}$ is brought to rest by an opposing impulse. The magnitude of this impulse is (in $\\text{N}\\cdot\\text{s}$):",
    correctAnswer: 60,
    explanation: "Impulse $J = |\\Delta p| = m(v_i - 0) = 4 \\times 15 = 60\\,\\text{N}\\cdot\\text{s}$."
  },
  {
    question: "A cricket ball of mass $160\\,\\text{g}$ moving at $30\\,\\text{m/s}$ is caught by a player in $0.08\\,\\text{seconds}$. The average force applied by the player's hand is (in $\\text{N}$):",
    correctAnswer: 60,
    explanation: "Impulse $J = 0.16 \\times 30 = 4.8\\,\\text{N}\\cdot\\text{s}$. Average force $F = \\frac{4.8}{0.08} = 60\\,\\text{N}$."
  },
  {
    question: "A force-time pulse is given by a semicircle of radius $R = 20\\,\\text{N}$ on an axis where diameter corresponds to duration $\\Delta t = 4\\,\\text{s}$. If the area represents impulse, the impulse delivered (taking $\\pi = 3.14$) is (in $\\text{N}\\cdot\\text{s}$, rounded to nearest integer):",
    correctAnswer: 31,
    explanation: "Semi-ellipse with semi-axes $F_0 = 20\\,\\text{N}$ and time radius $a = 2\\,\\text{s}$: $\\text{Area} = \\frac{\\pi F_0 a}{2} = \\frac{3.14 \\times 20 \\times 2}{2} = 62.8$. If semi-circular profile in scaled units where area is $\\frac{1}{2} \\pi F_0 \\times 1 = 31.4 \\approx 31$. Let's make it an exact triangle or rectangle to avoid unit mismatch: A force varies triangularly with time, reaching a peak of $120\\,\\text{N}$ at $t=2\\,\\text{s}$ and dropping to zero at $t=4\\,\\text{s}$. Then $J = \\frac{1}{2} \\times 4 \\times 120 = 240\\,\\text{N}\\cdot\\text{s}$."
  },
  {
    question: "A block of mass $2\\,\\text{kg}$ is moving at $10\\,\\text{m/s}$ on a smooth surface. It receives an impulse of $8\\,\\text{N}\\cdot\\text{s}$ in the direction of its motion. Its new speed is (in $\\text{m/s}$):",
    correctAnswer: 14,
    explanation: "Initial momentum $p_i = 2 \\times 10 = 20\\,\\text{kg}\\cdot\\text{m/s}$. Final momentum $p_f = p_i + J = 20 + 8 = 28\\,\\text{kg}\\cdot\\text{m/s}$. Final speed $v_f = \\frac{28}{2} = 14\\,\\text{m/s}$."
  },
  {
    question: "A hammer of mass $1.5\\,\\text{kg}$ strikes a nail with a speed of $8\\,\\text{m/s}$ and drives it into a block, stopping in $0.002\\,\\text{s}$. The average impulsive force exerted on the nail is (in $\\text{N}$):",
    correctAnswer: 6000,
    explanation: "Change in momentum $\\Delta p = 1.5 \\times 8 = 12\\,\\text{N}\\cdot\\text{s}$. Average force $F = \\frac{12}{0.002} = 6000\\,\\text{N}$."
  },
  {
    question: "A force $\\vec{F} = (4t\\hat{i})\\,\\text{N}$ acts on a particle of mass $1\\,\\text{kg}$ from $t=0$ to $t=5\\,\\text{s}$. The change in velocity produced is (in $\\text{m/s}$):",
    correctAnswer: 50,
    explanation: "Impulse $J = \\int_0^5 4t\\,dt = [2t^2]_0^5 = 2(25) = 50\\,\\text{N}\\cdot\\text{s}$. Change in velocity $\\Delta v = \\frac{J}{m} = \\frac{50}{1} = 50\\,\\text{m/s}$."
  },
  {
    question: "A sandbag of mass $5\\,\\text{kg}$ is suspended by a rope. A bullet of mass $0.05\\,\\text{kg}$ moving horizontally at $400\\,\\text{m/s}$ embeds into the bag. The impulse imparted to the bullet during impact is (in $\\text{N}\\cdot\\text{s}$, to the nearest integer):",
    correctAnswer: 20,
    explanation: "Common speed $V = \\frac{m v}{M + m} = \\frac{0.05 \\times 400}{5.05} \\approx 3.96\\,\\text{m/s}$. Change in momentum of the bullet is $\\Delta p = m(v - V) = 0.05 \\times (400 - 3.96) \\approx 0.05 \\times 396.04 = 19.8\\,\\text{N}\\cdot\\text{s} \\approx 20\\,\\text{N}\\cdot\\text{s}$."
  },
  {
    question: "A $0.5\\,\\text{kg}$ ball moving at $12\\,\\text{m/s}$ collides perpendicularly with a wall and rebounds with $8\\,\\text{m/s}$. The magnitude of impulse delivered to the wall is (in $\\text{N}\\cdot\\text{s}$):",
    correctAnswer: 10,
    explanation: "Impulse $J = m(v_1 + v_2) = 0.5 \\times (12 + 8) = 0.5 \\times 20 = 10\\,\\text{N}\\cdot\\text{s}$."
  },
  {
    question: "A rocket burns fuel at a rate of $2\\,\\text{kg/s}$ and ejects gas with an exhaust velocity of $600\\,\\text{m/s}$. The thrust force (impulse per second) exerted on the rocket is (in $\\text{N}$):",
    correctAnswer: 1200,
    explanation: "Thrust $F = v_{\\text{rel}} \\frac{dm}{dt} = 600 \\times 2 = 1200\\,\\text{N}$."
  },
  {
    question: "A hockey player hits a stationary puck of mass $0.16\\,\\text{kg}$, imparting a velocity of $25\\,\\text{m/s}$. The impulse delivered by the stick is (in $\\text{N}\\cdot\\text{s}$):",
    correctAnswer: 4,
    explanation: "Impulse $J = m v = 0.16 \\times 25 = 4.0\\,\\text{N}\\cdot\\text{s}$."
  },
  {
    question: "A particle of mass $3\\,\\text{kg}$ is moving along the $x$-axis. A force given by $F(t) = 12 - 3t^2\\,\\text{N}$ acts on it from $t=0$ to $t=2\\,\\text{s}$. The impulse delivered to the particle is (in $\\text{N}\\cdot\\text{s}$):",
    correctAnswer: 16,
    explanation: "Impulse $J = \\int_0^2 (12 - 3t^2)\\,dt = [12t - t^3]_0^2 = 12(2) - 8 = 24 - 8 = 16\\,\\text{N}\\cdot\\text{s}$."
  },
  {
    question: "A ball of mass $0.2\\,\\text{kg}$ strikes a smooth floor at an angle of $60^\\circ$ with the vertical at a speed of $10\\,\\text{m/s}$ and rebounds at the same angle with the same speed. The impulse delivered by the floor to the ball is (in $\\text{N}\\cdot\\text{s}$):",
    correctAnswer: 2,
    explanation: "The normal component of velocity before impact is $v_y = v \\cos 60^\\circ = 10 \\times 0.5 = 5\\,\\text{m/s}$. After elastic rebound, normal velocity is $-5\\,\\text{m/s}$. The impulse is $J = 2 m v \\cos 60^\\circ = 2 \\times 0.2 \\times 5 = 2.0\\,\\text{N}\\cdot\\text{s}$."
  },
  {
    question: "A pile driver of mass $200\\,\\text{kg}$ falls from a height of $5\\,\\text{m}$ onto a pile. Taking $g = 10\\,\\text{m/s}^2$, the velocity just before impact is $10\\,\\text{m/s}$. If it is brought to rest in $0.05\\,\\text{s}$, the average force exerted on the pile is (in $\\text{N}$):",
    correctAnswer: 42000,
    explanation: "Average deceleration force $F_{\\text{impulse}} = \\frac{m v}{\\Delta t} = \\frac{200 \\times 10}{0.05} = 40000\\,\\text{N}$. Total average force on pile during impact includes gravity: $F_{\\text{total}} = F_{\\text{impulse}} + mg = 40000 + 200(10) = 42000\\,\\text{N}$."
  },
  {
    question: "A tennis ball of mass $60\\,\\text{g}$ moving horizontally at $30\\,\\text{m/s}$ is struck by a racket, returning in the opposite direction at $40\\,\\text{m/s}$. If the contact time is $0.015\\,\\text{s}$, the average impact force is (in $\\text{N}$):",
    correctAnswer: 280,
    explanation: "Impulse $J = m(v_1 + v_2) = 0.06 \\times (30 + 40) = 0.06 \\times 70 = 4.2\\,\\text{N}\\cdot\\text{s}$. Average force $F = \\frac{4.2}{0.015} = 280\\,\\text{N}$."
  },
  {
    question: "A force increases linearly from $0$ to $200\\,\\text{N}$ over $0.5\\,\\text{s}$, remains constant at $200\\,\\text{N}$ for $1.0\\,\\text{s}$, and decreases linearly to $0$ over $0.5\\,\\text{s}$. The total impulse delivered by this trapezoidal force is (in $\\text{N}\\cdot\\text{s}$):",
    correctAnswer: 300,
    explanation: "Trapezoid area: base $1 = 2.0\\,\\text{s}$, base $2 = 1.0\\,\\text{s}$, height $= 200\\,\\text{N}$. Area $J = \\frac{2.0 + 1.0}{2} \\times 200 = 1.5 \\times 200 = 300\\,\\text{N}\\cdot\\text{s}$."
  }
];

// Refine numQuestions[0] and numQuestions[7] to have crisp integer statements:
numQuestions[0] = {
  question: "A ball of mass $0.2\\,\\text{kg}$ is dropped from a height of $5\\,\\text{m}$ onto a flat horizontal floor. It rebounds to a height of $1.25\\,\\text{m}$. Taking $g = 10\\,\\text{m/s}^2$, the magnitude of impulse delivered to the ball by the floor is (in $\\text{N}\\cdot\\text{s}$):",
  correctAnswer: 3,
  explanation: "Velocity just before hitting floor: $v_1 = \\sqrt{2 g h_1} = \\sqrt{2 \\times 10 \\times 5} = 10\\,\\text{m/s}$. Velocity just after rebound: $v_2 = \\sqrt{2 g h_2} = \\sqrt{2 \\times 10 \\times 1.25} = \\sqrt{25} = 5\\,\\text{m/s}$. Impulse $J = m(v_1 + v_2) = 0.2\\,\\text{kg} \\times (10 + 5)\\,\\text{m/s} = 0.2 \\times 15 = 3.0\\,\\text{N}\\cdot\\text{s}$."
};

numQuestions[7] = {
  question: "A force acting on a body varies triangularly with time, starting at zero at $t=0$, reaching a peak value of $120\\,\\text{N}$ at $t=2\\,\\text{s}$, and returning to zero at $t=4\\,\\text{s}$. The total impulse delivered to the body is (in $\\text{N}\\cdot\\text{s}$):",
  correctAnswer: 240,
  explanation: "The impulse is given by the area under the triangular $F-t$ curve: $J = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 4\\,\\text{s} \\times 120\\,\\text{N} = 240\\,\\text{N}\\cdot\\text{s}$."
};

const allQuestions = [];

arQuestions.forEach(q => {
  allQuestions.push({
    question: `Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: ${q.assertion}\nReason R: ${q.reason}\nIn the light of the above statements, choose the correct answer from the options given below:`,
    options: AR_OPTIONS,
    correctAnswer: q.correctAnswer,
    type: "ASSERTION_REASON",
    explanation: q.explanation,
    subject: subject,
    chapter: chapter,
    subTopic: subTopic,
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  });
});

mcqQuestions.forEach(q => {
  allQuestions.push({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    type: "MCQ",
    explanation: q.explanation,
    subject: subject,
    chapter: chapter,
    subTopic: subTopic,
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  });
});

numQuestions.forEach(q => {
  allQuestions.push({
    question: q.question,
    options: [],
    correctAnswer: q.correctAnswer,
    type: "NUMERICAL",
    explanation: q.explanation,
    subject: subject,
    chapter: chapter,
    subTopic: subTopic,
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  });
});

console.log(`Impulse generated: ${allQuestions.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);

const outPath = './scripts/data_jee_lom_impulse.js';
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
