import { MongoClient, ObjectId } from "mongodb";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
let uri = "";
for (const line of env.split("\n")) {
  if (line.startsWith("MONGODB_URI=")) {
    uri = line.replace("MONGODB_URI=", "").trim().replace(/^['"]|['"]$/g, "");
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const standardAROptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// -------------------------------------------------------------
// TEST 2: IMPULSE (neet-SUBTOPIC-Physics-Impulse)
// -------------------------------------------------------------
const t2_updates = {
  testId: "neet-SUBTOPIC-Physics-Impulse",
  subtopic: "Impulse",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A variable force $F(t)$ acts on a particle of mass $m = 2\\text{ kg}$ initially at rest, as shown in the force–time ($F-t$) graph. The force rises from zero to a peak of $600\\text{ N}$ at $t = 2\\text{ ms}$ and drops linearly back to zero at $t = 6\\text{ ms}$. What is the magnitude of the impulse delivered to the particle, and what is the final speed of the particle at $t = 6\\text{ ms}$?",
        text: "A variable force $F(t)$ acts on a particle of mass $m = 2\\text{ kg}$ initially at rest, as shown in the force–time ($F-t$) graph. The force rises from zero to a peak of $600\\text{ N}$ at $t = 2\\text{ ms}$ and drops linearly back to zero at $t = 6\\text{ ms}$. What is the magnitude of the impulse delivered to the particle, and what is the final speed of the particle at $t = 6\\text{ ms}$?",
        options: [
          "$1.8\\text{ N}\\cdot\\text{s}$ and $0.9\\text{ m/s}$",
          "$3.6\\text{ N}\\cdot\\text{s}$ and $1.8\\text{ m/s}$",
          "$1.8\\text{ N}\\cdot\\text{s}$ and $3.6\\text{ m/s}$",
          "$0.9\\text{ N}\\cdot\\text{s}$ and $0.45\\text{ m/s}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Calculate impulse from area under $F-t$ graph:**\nBase $= 6\\text{ ms} = 6 \\times 10^{-3}\\text{ s}$, Height $= 600\\text{ N}$.\n$$J = \\text{Area of triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$\n$$J = \\frac{1}{2} \\times (6 \\times 10^{-3}\\text{ s}) \\times 600\\text{ N} = 1.8\\text{ N}\\cdot\\text{s}$$\n\n**Step 2: Calculate final speed using Impulse-Momentum Theorem:**\n$$J = \\Delta p = m(v - u)$$\nSince $u = 0$:\n$$1.8 = 2 \\times v \\implies v = \\frac{1.8}{2} = 0.9\\text{ m/s}.$$",
        image: "/images/diagrams/laws_of_motion/test2_q1_triangle_ft_graph.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test2_q1_triangle_ft_graph.svg",
        diagramType: "PGFPLOTS",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "A rectilinear force $F(t)$ acts along the $x$-axis on a particle of mass $m = 1\\text{ kg}$ initially moving at $u = 4\\text{ m/s}$. The force–time graph consists of a positive rectangular pulse ($F = +5\\text{ N}$ for $0 \\le t \\le 4\\text{ s}$) followed by a negative triangular pulse ($F$ dipping to $-4\\text{ N}$ between $t = 4\\text{ s}$ and $t = 8\\text{ s}$), as shown in the figure. What is the net impulse delivered to the particle, and its final velocity at $t = 8\\text{ s}$?",
        text: "A rectilinear force $F(t)$ acts along the $x$-axis on a particle of mass $m = 1\\text{ kg}$ initially moving at $u = 4\\text{ m/s}$. The force–time graph consists of a positive rectangular pulse ($F = +5\\text{ N}$ for $0 \\le t \\le 4\\text{ s}$) followed by a negative triangular pulse ($F$ dipping to $-4\\text{ N}$ between $t = 4\\text{ s}$ and $t = 8\\text{ s}$), as shown in the figure. What is the net impulse delivered to the particle, and its final velocity at $t = 8\\text{ s}$?",
        options: [
          "$+12\\text{ N}\\cdot\\text{s}$ and $+16\\text{ m/s}$",
          "$+20\\text{ N}\\cdot\\text{s}$ and $+24\\text{ m/s}$",
          "$+8\\text{ N}\\cdot\\text{s}$ and $+12\\text{ m/s}$",
          "$+12\\text{ N}\\cdot\\text{s}$ and $+12\\text{ m/s}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Calculate signed areas under the $F-t$ curve:**\n- Positive rectangular area (Region I, $t = 0$ to $4\\text{ s}$):\n$$A_1 = (+5\\text{ N}) \\times (4\\text{ s}) = +20\\text{ N}\\cdot\\text{s}$$\n- Negative triangular area (Region II, $t = 4$ to $8\\text{ s}$):\n$$A_2 = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times (4\\text{ s}) \\times (-4\\text{ N}) = -8\\text{ N}\\cdot\\text{s}$$\n\n**Step 2: Calculate net impulse:**\n$$J_{\\text{net}} = A_1 + A_2 = +20 - 8 = +12\\text{ N}\\cdot\\text{s}$$\n\n**Step 3: Calculate final velocity:**\n$$J_{\\text{net}} = m(v - u) \\implies 12 = 1 \\times (v - 4) \\implies v = 16\\text{ m/s}.$$",
        image: "/images/diagrams/laws_of_motion/test2_q2_bidirectional_ft_graph.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test2_q2_bidirectional_ft_graph.svg",
        diagramType: "PGFPLOTS",
        difficulty: "hard",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "A ball of mass $m = 0.2\\text{ kg}$ moving with an initial speed $u = 20\\text{ m/s}$ strikes a smooth vertical wall at an angle of incidence $\\theta = 60^\\circ$ to the normal and rebounds elastically at the same angle, as depicted in the figure. If the duration of impact is $\\Delta t = 0.02\\text{ s}$, what is the magnitude of the impulse imparted by the wall to the ball, and the average force exerted on the wall?",
        text: "A ball of mass $m = 0.2\\text{ kg}$ moving with an initial speed $u = 20\\text{ m/s}$ strikes a smooth vertical wall at an angle of incidence $\\theta = 60^\\circ$ to the normal and rebounds elastically at the same angle, as depicted in the figure. If the duration of impact is $\\Delta t = 0.02\\text{ s}$, what is the magnitude of the impulse imparted by the wall to the ball, and the average force exerted on the wall?",
        options: [
          "$4\\text{ N}\\cdot\\text{s}$ and $200\\text{ N}$",
          "$4\\sqrt{3}\\text{ N}\\cdot\\text{s}$ and $346.4\\text{ N}$",
          "$8\\text{ N}\\cdot\\text{s}$ and $400\\text{ N}$",
          "$2\\text{ N}\\cdot\\text{s}$ and $100\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Velocity components before and after collision:**\nLet the wall be along the $y$-axis and the normal along the $x$-axis.\n- Parallel to wall ($y$-direction): Speed remains unchanged ($u \\sin 60^\\circ = v \\sin 60^\\circ$). So $\\Delta p_y = 0$.\n- Perpendicular to wall ($x$-direction):\n$$p_{x, \\text{initial}} = +m u \\cos 60^\\circ$$\n$$p_{x, \\text{final}} = -m u \\cos 60^\\circ$$\n$$\\Delta p_x = p_{x, \\text{final}} - p_{x, \\text{initial}} = -2 m u \\cos 60^\\circ$$\n\n**Step 2: Magnitude of impulse:**\n$$J = 2 m u \\cos 60^\\circ = 2(0.2)(20)(0.5) = 4\\text{ N}\\cdot\\text{s}$$\n\n**Step 3: Average force:**\n$$F_{\\text{avg}} = \\frac{J}{\\Delta t} = \\frac{4\\text{ N}\\cdot\\text{s}}{0.02\\text{ s}} = 200\\text{ N}.$$",
        image: "/images/diagrams/laws_of_motion/test2_q3_wall_collision_impulse.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test2_q3_wall_collision_impulse.svg",
        diagramType: "TIKZ",
        difficulty: "medium",
        type: "MCQ"
      }
    }
  ],
  sectionB: [
    {
      index: 39,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The area under a force–time ($F-t$) graph over any time interval represents the impulse of the force.\n**Reason (R):** By definition, impulse is the definite integral of force with respect to time: $J = \\int_{t_1}^{t_2} F(t)\\,dt = \\Delta p$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The area under a force–time ($F-t$) graph over any time interval represents the impulse of the force.\n**Reason (R):** By definition, impulse is the definite integral of force with respect to time: $J = \\int_{t_1}^{t_2} F(t)\\,dt = \\Delta p$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Both (A) and (R) are true, and (R) directly explains (A) from calculus definition.",
        difficulty: "easy",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A heavy iron ball and a light rubber ball dropped from the same height onto a hard floor experience different impulses during the bounce.\n**Reason (R):** Impulse is a vector quantity having the same SI units and dimensions as linear momentum ($[\\text{MLT}^{-1}]$).",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A heavy iron ball and a light rubber ball dropped from the same height onto a hard floor experience different impulses during the bounce.\n**Reason (R):** Impulse is a vector quantity having the same SI units and dimensions as linear momentum ($[\\text{MLT}^{-1}]$).",
        options: standardAROptions,
        correctAnswer: 1,
        correctOption: "b",
        explanation: "Assertion (A) is true: The heavy ball has greater mass and thus carries greater momentum ($p = mv$), leading to a larger change in momentum upon impact.\nReason (R) is true: Units of impulse are $\\text{N}\\cdot\\text{s} = \\text{kg}\\cdot\\text{m/s}$.\nHowever, (R) does not explain (A). (A) is explained by the difference in mass and elasticity.",
        difficulty: "medium",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** An airbag in an automobile reduces the severity of injuries during a high-speed collision.\n**Reason (R):** An airbag reduces the total change in momentum of the passenger to zero during the collision.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** An airbag in an automobile reduces the severity of injuries during a high-speed collision.\n**Reason (R):** An airbag reduces the total change in momentum of the passenger to zero during the collision.",
        options: standardAROptions,
        correctAnswer: 2,
        correctOption: "c",
        explanation: "Assertion (A) is true: Airbags extend the collision time duration $\\Delta t$, thereby reducing the peak force $F = \\Delta p / \\Delta t$.\nReason (R) is completely false: The passenger's momentum changes from initial value $m v$ to zero regardless of whether an airbag is deployed or not ($\\Delta p = -mv$ in both cases). The airbag increases $\\Delta t$, it does not change $\\Delta p$.",
        difficulty: "hard",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a constant force $F$ acts on a body for time $\\Delta t$, the impulse delivered is inversely proportional to $\\Delta t$.\n**Reason (R):** Impulse is defined as the product of average force and the time interval: $J = F_{\\text{avg}} \\Delta t$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a constant force $F$ acts on a body for time $\\Delta t$, the impulse delivered is inversely proportional to $\\Delta t$.\n**Reason (R):** Impulse is defined as the product of average force and the time interval: $J = F_{\\text{avg}} \\Delta t$.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: For a constant force, $J = F \\Delta t$, which is DIRECTLY proportional to $\\Delta t$, not inversely proportional.\nReason (R) is true: $J = F_{\\text{avg}} \\Delta t$.",
        difficulty: "medium",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A rubber ball rebounding from a concrete wall receives a larger impulse than a lead ball of identical mass and speed that sticks to the wall without rebounding.\n**Reason (R):** For the rebounding rubber ball, the change in momentum is $\\Delta p = m(v - (-u)) = 2mu$, whereas for the lead ball that sticks, the change in momentum is only $\\Delta p = mu$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A rubber ball rebounding from a concrete wall receives a larger impulse than a lead ball of identical mass and speed that sticks to the wall without rebounding.\n**Reason (R):** For the rebounding rubber ball, the change in momentum is $\\Delta p = m(v - (-u)) = 2mu$, whereas for the lead ball that sticks, the change in momentum is only $\\Delta p = mu$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Both (A) and (R) are true, and (R) provides the exact mathematical derivation of why the impulse is approximately double for the bouncing ball.",
        difficulty: "medium",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When catching a fast-moving cricket ball, bare hands experience severe sting if held stationary at the catch point.\n**Reason (R):** In an elastic collision, both total kinetic energy and total linear momentum are conserved.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When catching a fast-moving cricket ball, bare hands experience severe sting if held stationary at the catch point.\n**Reason (R):** In an elastic collision, both total kinetic energy and total linear momentum are conserved.",
        options: standardAROptions,
        correctAnswer: 1,
        correctOption: "b",
        explanation: "Assertion (A) is true: Holding hands stationary reduces stopping time $\\Delta t$ to a very small fraction of a second, resulting in a large impulsive force $F = \\Delta p / \\Delta t$.\nReason (R) is true (standard definition of an elastic collision).\nHowever, (R) is not the explanation of (A). Catching a ball is an inelastic process where kinetic energy is absorbed.",
        difficulty: "hard",
        type: "ASSERTION_REASON"
      }
    }
  ]
};

// ---------------------------------------------------------------------------------
// TEST 3: CONSERVATION OF MOMENTUM (neet-SUBTOPIC-Physics-Conservation-of-momentum)
// ---------------------------------------------------------------------------------
const t3_updates = {
  testId: "neet-SUBTOPIC-Physics-Conservation-of-momentum",
  subtopic: "Conservation of momentum",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A rifle of mass $M = 4\\text{ kg}$ fires a bullet of mass $m = 20\\text{ g}$ horizontally with a muzzle speed of $v = 400\\text{ m/s}$, as illustrated in the figure. What is the recoil velocity of the rifle, and what is the ratio of the kinetic energy of the bullet to that of the rifle?",
        text: "A rifle of mass $M = 4\\text{ kg}$ fires a bullet of mass $m = 20\\text{ g}$ horizontally with a muzzle speed of $v = 400\\text{ m/s}$, as illustrated in the figure. What is the recoil velocity of the rifle, and what is the ratio of the kinetic energy of the bullet to that of the rifle?",
        options: [
          "$-2\\text{ m/s}$ and $200 : 1$",
          "$-4\\text{ m/s}$ and $100 : 1$",
          "$-2\\text{ m/s}$ and $100 : 1$",
          "$-1\\text{ m/s}$ and $400 : 1$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Conservation of linear momentum:**\nInitially, the rifle-bullet system is at rest ($p_{\\text{initial}} = 0$).\n$$M V_{\\text{recoil}} + m v = 0$$\n$$V_{\\text{recoil}} = -\\frac{m v}{M} = -\\frac{(0.02\\text{ kg})(400\\text{ m/s})}{4\\text{ kg}} = -2\\text{ m/s}$$\n(The minus sign denotes the backward direction of recoil).\n\n**Step 2: Ratio of kinetic energies:**\nSince momentum magnitudes are equal ($p_{\\text{bullet}} = p_{\\text{rifle}}$):\n$$KE = \\frac{p^2}{2m} \\implies \\frac{KE_{\\text{bullet}}}{KE_{\\text{rifle}}} = \\frac{M}{m} = \\frac{4\\text{ kg}}{0.02\\text{ kg}} = 200 : 1.$$",
        image: "/images/diagrams/laws_of_motion/test3_q1_rifle_recoil.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test3_q1_rifle_recoil.svg",
        diagramType: "TIKZ",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "A bomb of mass $M = 3\\text{ kg}$ initially at rest explodes into three fragments of equal mass ($1\\text{ kg}$ each), as shown in the diagram. If the first fragment flies due East with speed $v_1 = 30\\text{ m/s}$ and the second fragment flies due North with speed $v_2 = 40\\text{ m/s}$, what are the speed and direction of motion of the third fragment?",
        text: "A bomb of mass $M = 3\\text{ kg}$ initially at rest explodes into three fragments of equal mass ($1\\text{ kg}$ each), as shown in the diagram. If the first fragment flies due East with speed $v_1 = 30\\text{ m/s}$ and the second fragment flies due North with speed $v_2 = 40\\text{ m/s}$, what are the speed and direction of motion of the third fragment?",
        options: [
          "$50\\text{ m/s}$ at $53^\\circ$ South of West",
          "$70\\text{ m/s}$ at $45^\\circ$ South of West",
          "$50\\text{ m/s}$ at $37^\\circ$ South of West",
          "$25\\text{ m/s}$ at $53^\\circ$ South of West"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Set up momentum vectors:**\nLet East be $+\\hat{i}$ and North be $+\\hat{j}$.\n- Momentum of fragment 1: $\\vec{p}_1 = m_1 \\vec{v}_1 = (1)(+30\\hat{i}) = 30\\hat{i}\\text{ kg}\\cdot\\text{m/s}$\n- Momentum of fragment 2: $\\vec{p}_2 = m_2 \\vec{v}_2 = (1)(+40\\hat{j}) = 40\\hat{j}\\text{ kg}\\cdot\\text{m/s}$\n\n**Step 2: Conservation of linear momentum:**\nSince initial momentum is zero:\n$$\\vec{p}_1 + \\vec{p}_2 + \\vec{p}_3 = 0$$\n$$\\vec{p}_3 = -(\\vec{p}_1 + \\vec{p}_2) = -30\\hat{i} - 40\\hat{j}\\text{ kg}\\cdot\\text{m/s}$$\n\n**Step 3: Speed of the third fragment:**\n$$|\\vec{p}_3| = \\sqrt{(-30)^2 + (-40)^2} = 50\\text{ kg}\\cdot\\text{m/s}$$\nSince $m_3 = 1\\text{ kg}$, $v_3 = 50\\text{ m/s}$.\n\n**Direction:**\n$$\\tan\\theta = \\frac{|p_y|}{|p_x|} = \\frac{40}{30} = \\frac{4}{3} \\implies \\theta = 53^\\circ \\text{ South of West}.$$",
        image: "/images/diagrams/laws_of_motion/test3_q2_three_fragment_explosion.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test3_q2_three_fragment_explosion.svg",
        diagramType: "TIKZ",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "A cart $A$ of mass $m_1 = 3\\text{ kg}$ moving at a speed of $u_1 = 4\\text{ m/s}$ along a straight horizontal track collides with a stationary cart $B$ of mass $m_2 = 1\\text{ kg}$. Upon collision, the two carts latch together and move as a single combined body, as shown in the figure. What is the common final velocity of the carts, and what is the loss in kinetic energy during this collision?",
        text: "A cart $A$ of mass $m_1 = 3\\text{ kg}$ moving at a speed of $u_1 = 4\\text{ m/s}$ along a straight horizontal track collides with a stationary cart $B$ of mass $m_2 = 1\\text{ kg}$. Upon collision, the two carts latch together and move as a single combined body, as shown in the figure. What is the common final velocity of the carts, and what is the loss in kinetic energy during this collision?",
        options: [
          "$3\\text{ m/s}$ and $6\\text{ J}$",
          "$2\\text{ m/s}$ and $12\\text{ J}$",
          "$3\\text{ m/s}$ and $18\\text{ J}$",
          "$1\\text{ m/s}$ and $8\\text{ J}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Common velocity by momentum conservation:**\n$$m_1 u_1 + m_2 u_2 = (m_1 + m_2) V$$\n$$(3)(4) + (1)(0) = (3 + 1) V \\implies 12 = 4 V \\implies V = 3\\text{ m/s}$$\n\n**Step 2: Initial and final kinetic energy:**\n- Initial KE: $K_i = \\frac{1}{2} m_1 u_1^2 = \\frac{1}{2}(3)(4^2) = 24\\text{ J}$\n- Final KE: $K_f = \\frac{1}{2} (m_1 + m_2) V^2 = \\frac{1}{2}(4)(3^2) = 18\\text{ J}$\n\n**Step 3: Loss in kinetic energy:**\n$$\\Delta K = K_i - K_f = 24 - 18 = 6\\text{ J}.$$",
        image: "/images/diagrams/laws_of_motion/test3_q3_inelastic_cart_collision.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test3_q3_inelastic_cart_collision.svg",
        diagramType: "TIKZ",
        difficulty: "medium",
        type: "MCQ"
      }
    }
  ],
  sectionB: [
    {
      index: 39,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The total linear momentum of an isolated system of particles remains conserved in time.\n**Reason (R):** Internal forces between particles in an isolated system always occur in equal and opposite pairs obeying Newton's Third Law, adding vectorially to zero.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The total linear momentum of an isolated system of particles remains conserved in time.\n**Reason (R):** Internal forces between particles in an isolated system always occur in equal and opposite pairs obeying Newton's Third Law, adding vectorially to zero.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Both (A) and (R) are true, and (R) correctly explains (A) from Newton's Third Law: $\\frac{d\\vec{P}}{dt} = \\vec{F}_{\\text{ext}} = 0 \\implies \\vec{P} = \\text{constant}$.",
        difficulty: "easy",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In a rocket propulsion mechanism, the rocket accelerates forward even in the vacuum of outer space without pushing against atmospheric air.\n**Reason (R):** Kinetic energy of an isolated system is strictly conserved in all types of explosions and collisions.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In a rocket propulsion mechanism, the rocket accelerates forward even in the vacuum of outer space without pushing against atmospheric air.\n**Reason (R):** Kinetic energy of an isolated system is strictly conserved in all types of explosions and collisions.",
        options: standardAROptions,
        correctAnswer: 2,
        correctOption: "c",
        explanation: "Assertion (A) is true: The rocket accelerates by conservation of momentum as it ejects exhaust gases backwards with high speed.\nReason (R) is completely false: Kinetic energy is NOT conserved in explosions or inelastic collisions; chemical potential energy is converted into kinetic energy.",
        difficulty: "medium",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a person jumps off a small stationary boat onto the river shore, the boat pushes backwards away from the shore.\n**Reason (R):** In the absence of external horizontal forces, the center of mass of the (man + boat) system must maintain its state of rest.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a person jumps off a small stationary boat onto the river shore, the boat pushes backwards away from the shore.\n**Reason (R):** In the absence of external horizontal forces, the center of mass of the (man + boat) system must maintain its state of rest.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Both (A) and (R) are true, and (R) correctly explains (A) by conservation of linear momentum of an isolated system.",
        difficulty: "medium",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a gun is fired, the recoil velocity of the gun is equal in magnitude to the muzzle velocity of the bullet.\n**Reason (R):** The mass of the gun is enormously larger than the mass of the bullet.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** When a gun is fired, the recoil velocity of the gun is equal in magnitude to the muzzle velocity of the bullet.\n**Reason (R):** The mass of the gun is enormously larger than the mass of the bullet.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is completely false: The momentum magnitudes are equal ($M V = m v$), so $V = (m/M)v \\ll v$. The recoil velocity is much smaller than the bullet velocity.\nReason (R) is true ($M \\gg m$).",
        difficulty: "easy",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** During an explosive fragmentation of a stationary nucleus into two daughter fragments of masses $m_1$ and $m_2$, the lighter fragment carries greater kinetic energy.\n**Reason (R):** For two fragments carrying equal and opposite linear momenta, kinetic energy is inversely proportional to mass: $KE = \\frac{p^2}{2m}$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** During an explosive fragmentation of a stationary nucleus into two daughter fragments of masses $m_1$ and $m_2$, the lighter fragment carries greater kinetic energy.\n**Reason (R):** For two fragments carrying equal and opposite linear momenta, kinetic energy is inversely proportional to mass: $KE = \\frac{p^2}{2m}$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Both (A) and (R) are true, and (R) provides the exact mathematical derivation ($p_1 = p_2 \\implies KE \\propto 1/m$).",
        difficulty: "medium",
        type: "ASSERTION_REASON"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In any collision between two bodies in the absence of external impulsive forces, the total momentum is conserved along every direction.\n**Reason (R):** Linear momentum is a vector quantity that obeys independent conservation along orthogonal axes.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** In any collision between two bodies in the absence of external impulsive forces, the total momentum is conserved along every direction.\n**Reason (R):** Linear momentum is a vector quantity that obeys independent conservation along orthogonal axes.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Both (A) and (R) are true, and (R) correctly explains that vector conservation applies independently along $x$, $y$, and $z$ axes.",
        difficulty: "easy",
        type: "ASSERTION_REASON"
      }
    }
  ]
};

// Execute Test 2 updates
console.log("Applying Test 2 (Impulse) updates...");
const t2Paper = await db.collection("testPapers").findOne({ testId: t2_updates.testId });
for (const u of [...t2_updates.diagrams, ...t2_updates.sectionB]) {
  const qId = t2Paper.questions[u.index];
  await db.collection("questionBank").updateOne(
    { _id: new ObjectId(qId) },
    { $set: { ...u.data, chapter: "Laws of Motion", subtopic: t2_updates.subtopic, updatedAt: new Date() } }
  );
  console.log(`Updated Test 2 Q${u.index + 1}`);
}
await db.collection("testPapers").updateOne(
  { _id: t2Paper._id },
  { $set: { chapter: "Laws of Motion", subject: "Physics", updatedAt: new Date() } }
);

// Execute Test 3 updates
console.log("Applying Test 3 (Conservation of Momentum) updates...");
const t3Paper = await db.collection("testPapers").findOne({ testId: t3_updates.testId });
for (const u of [...t3_updates.diagrams, ...t3_updates.sectionB]) {
  const qId = t3Paper.questions[u.index];
  await db.collection("questionBank").updateOne(
    { _id: new ObjectId(qId) },
    { $set: { ...u.data, chapter: "Laws of Motion", subtopic: t3_updates.subtopic, updatedAt: new Date() } }
  );
  console.log(`Updated Test 3 Q${u.index + 1}`);
}
await db.collection("testPapers").updateOne(
  { _id: t3Paper._id },
  { $set: { chapter: "Laws of Motion", subject: "Physics", updatedAt: new Date() } }
);

console.log("Tests 2 & 3 successfully updated!");
await client.close();
