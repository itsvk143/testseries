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
// TEST 4: FRICTION (neet-SUBTOPIC-Physics-Friction)
// -------------------------------------------------------------
const t4_updates = {
  testId: "neet-SUBTOPIC-Physics-Friction",
  subtopic: "Friction",
  diagrams: [
    {
      index: 0,
      data: {
        question: "The graph below shows the frictional force $f$ plotted against the horizontally applied force $F$ for a block of mass $m = 4\\text{ kg}$ placed on a horizontal rough surface ($g = 10\\text{ m/s}^2$). The peak value of static friction is $f_s = 20\\text{ N}$ and the constant kinetic friction is $f_k = 16\\text{ N}$. What are the coefficient of static friction $\\mu_s$ and the coefficient of kinetic friction $\\mu_k$ between the block and the surface?",
        text: "The graph below shows the frictional force $f$ plotted against the horizontally applied force $F$ for a block of mass $m = 4\\text{ kg}$ placed on a horizontal rough surface ($g = 10\\text{ m/s}^2$). The peak value of static friction is $f_s = 20\\text{ N}$ and the constant kinetic friction is $f_k = 16\\text{ N}$. What are the coefficient of static friction $\\mu_s$ and the coefficient of kinetic friction $\\mu_k$ between the block and the surface?",
        options: [
          "$\\mu_s = 0.50$ and $\\mu_k = 0.40$",
          "$\\mu_s = 0.40$ and $\\mu_k = 0.50$",
          "$\\mu_s = 0.20$ and $\\mu_k = 0.16$",
          "$\\mu_s = 0.50$ and $\\mu_k = 0.32$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Calculate normal reaction force:**\n$$N = mg = 4\\text{ kg} \\times 10\\text{ m/s}^2 = 40\\text{ N}$$\n\n**Step 2: Calculate coefficient of static friction $\\mu_s$:**\n$$\\mu_s = \\frac{f_s}{N} = \\frac{20\\text{ N}}{40\\text{ N}} = 0.50$$\n\n**Step 3: Calculate coefficient of kinetic friction $\\mu_k$:**\n$$\\mu_k = \\frac{f_k}{N} = \\frac{16\\text{ N}}{40\\text{ N}} = 0.40.$$",
        image: "/images/diagrams/laws_of_motion/test4_q1_friction_vs_applied_force.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test4_q1_friction_vs_applied_force.svg",
        diagramType: "PGFPLOTS",
        difficulty: "easy",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "A block of mass $m = 2\\text{ kg}$ rests on an inclined plane whose angle of inclination is $\\theta = 30^\\circ$, as shown in the figure. The coefficient of static friction between the block and the incline is $\\mu_s = 0.8$ ($g = 10\\text{ m/s}^2$). What is the magnitude and direction of the frictional force acting on the block?",
        text: "A block of mass $m = 2\\text{ kg}$ rests on an inclined plane whose angle of inclination is $\\theta = 30^\\circ$, as shown in the figure. The coefficient of static friction between the block and the incline is $\\mu_s = 0.8$ ($g = 10\\text{ m/s}^2$). What is the magnitude and direction of the frictional force acting on the block?",
        options: [
          "$10\\text{ N}$ acting up the incline",
          "$13.86\\text{ N}$ acting up the incline",
          "$10\\text{ N}$ acting down the incline",
          "$0\\text{ N}$ (frictionless equilibrium)"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Calculate limiting static friction:**\n$$f_L = \\mu_s mg \\cos\\theta = 0.8 \\times 2 \\times 10 \\times \\cos 30^\\circ = 16 \\times \\frac{\\sqrt{3}}{2} \\approx 13.86\\text{ N}$$\n\n**Step 2: Calculate driving force down the incline:**\n$$F_\\parallel = mg \\sin\\theta = 2 \\times 10 \\times \\sin 30^\\circ = 10\\text{ N}$$\n\n**Step 3: Compare forces and determine actual static friction:**\nSince $F_\\parallel (10\\text{ N}) < f_L (13.86\\text{ N})$, the block remains strictly at rest.\nStatic friction is self-adjusting and equals the impending driving force:\n$$f_s = mg\\sin 30^\\circ = 10\\text{ N} \\text{ (directed up the incline)}.$$",
        image: "/images/diagrams/laws_of_motion/test4_q2_angle_of_repose_incline.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test4_q2_angle_of_repose_incline.svg",
        diagramType: "TIKZ",
        difficulty: "medium",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "A block of mass $m = 2\\text{ kg}$ is placed on top of a larger block of mass $M = 3\\text{ kg}$, which rests on a frictionless horizontal floor, as shown in the figure. The coefficient of static friction between the two blocks is $\\mu_s = 0.4$ ($g = 10\\text{ m/s}^2$). What is the maximum horizontal force $F_{\\text{max}}$ that can be applied to the lower block $M$ such that both blocks accelerate together without relative slipping?",
        text: "A block of mass $m = 2\\text{ kg}$ is placed on top of a larger block of mass $M = 3\\text{ kg}$, which rests on a frictionless horizontal floor, as shown in the figure. The coefficient of static friction between the two blocks is $\\mu_s = 0.4$ ($g = 10\\text{ m/s}^2$). What is the maximum horizontal force $F_{\\text{max}}$ that can be applied to the lower block $M$ such that both blocks accelerate together without relative slipping?",
        options: [
          "$20\\text{ N}$",
          "$8\\text{ N}$",
          "$12\\text{ N}$",
          "$25\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Maximum acceleration of the upper block without slipping:**\nThe upper block $m$ is accelerated solely by the static friction between the two blocks:\n$$f_{s,\\text{max}} = \\mu_s mg = 0.4 \\times 2 \\times 10 = 8\\text{ N}$$\n$$a_{\\text{max}} = \\frac{f_{s,\\text{max}}}{m} = \\mu_s g = 0.4 \\times 10 = 4\\text{ m/s}^2$$\n\n**Step 2: Total force on combined system:**\nFor the combined system of mass $(M + m)$ to move at $a_{\\text{max}}$:\n$$F_{\\text{max}} = (M + m) a_{\\text{max}} = (3 + 2)\\text{ kg} \\times 4\\text{ m/s}^2 = 20\\text{ N}.$$",
        image: "/images/diagrams/laws_of_motion/test4_q3_two_blocks_friction.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test4_q3_two_blocks_friction.svg",
        diagramType: "TIKZ",
        difficulty: "hard",
        type: "MCQ"
      }
    }
  ],
  sectionB: [
    {
      index: 39,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Static friction is a self-adjusting force in both magnitude and direction up to its limiting value.\n**Reason (R):** Static friction opposes impending relative motion between two contact surfaces and balances the applied tangential force until limiting friction is reached.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Static friction is a self-adjusting force in both magnitude and direction up to its limiting value.\n**Reason (R):** Static friction opposes impending relative motion between two contact surfaces and balances the applied tangential force until limiting friction is reached.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: static friction adjusts its magnitude from zero up to $f_L = \\mu_s N$ and its direction to oppose impending relative motion. Reason (R) is true and correctly explains why static friction adjusts to maintain relative rest between surfaces.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** It is easier to pull a heavy lawn roller than to push it across a rough level ground.\n**Reason (R):** Pulling introduces an upward vertical component of the applied force which decreases the normal reaction from the ground ($N = mg - F\\sin\\theta$), thereby reducing frictional resistance.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** It is easier to pull a heavy lawn roller than to push it across a rough level ground.\n**Reason (R):** Pulling introduces an upward vertical component of the applied force which decreases the normal reaction from the ground ($N = mg - F\\sin\\theta$), thereby reducing frictional resistance.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: pulling requires less force than pushing. Reason (R) is true and correctly explains this: pulling has an upward component reducing $N$, so $f_k = \\mu_k(mg - F\\sin\\theta)$; pushing adds a downward component increasing $N = mg + F\\sin\\theta$, creating higher friction.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The coefficient of kinetic friction $\\mu_k$ is slightly less than the coefficient of static friction $\\mu_s$ for a given pair of dry surfaces.\n**Reason (R):** Once relative motion starts, the microscopic asperities (cold-welded contact points) do not have sufficient time to lock into each other as firmly as during static contact.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The coefficient of kinetic friction $\\mu_k$ is slightly less than the coefficient of static friction $\\mu_s$ for a given pair of dry surfaces.\n**Reason (R):** Once relative motion starts, the microscopic asperities (cold-welded contact points) do not have sufficient time to lock into each other as firmly as during static contact.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: $\\mu_k < \\mu_s$. Reason (R) is true and is the correct physical explanation: moving surfaces lack the dwell time necessary to form deep interlocking and microscopic cold welds, resulting in lower kinetic resistance.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Frictional force always opposes the actual motion of a body in every frame of reference.\n**Reason (R):** Frictional force is a non-conservative force and converts mechanical energy irreversibly into thermal energy.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Frictional force always opposes the actual motion of a body in every frame of reference.\n**Reason (R):** Frictional force is a non-conservative force and converts mechanical energy irreversibly into thermal energy.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: friction opposes relative motion between contacting surfaces, not actual motion. For instance, friction between our shoes and the ground drives us forward, and friction accelerates the upper block in a stacked-block system. Reason (R) is true: friction is indeed a non-conservative force that dissipates mechanical energy as heat.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The angle of repose of a rough inclined plane is numerically equal to the angle of friction between the body and the incline.\n**Reason (R):** At the angle of repose $\\theta_r$, the downslope gravitational component balances the limiting static friction: $\\tan\\theta_r = \\mu_s = \\tan\\lambda$, where $\\lambda$ is the angle of friction.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The angle of repose of a rough inclined plane is numerically equal to the angle of friction between the body and the incline.\n**Reason (R):** At the angle of repose $\\theta_r$, the downslope gravitational component balances the limiting static friction: $\\tan\\theta_r = \\mu_s = \\tan\\lambda$, where $\\lambda$ is the angle of friction.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: angle of repose $\\theta_r$ equals angle of friction $\\lambda$. Reason (R) is true and correctly provides the mathematical derivation: $mg\\sin\\theta_r = \\mu_s mg\\cos\\theta_r \\implies \\tan\\theta_r = \\mu_s$. By definition of angle of friction, $\\tan\\lambda = \\mu_s$. Hence $\\theta_r = \\lambda$.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Lubricants like oil and grease increase the contact area between rough surfaces, thereby enhancing normal reaction.\n**Reason (R):** The limiting friction between two dry metallic bodies depends directly on the true microscopic contact area of the asperities.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Lubricants like oil and grease increase the contact area between rough surfaces, thereby enhancing normal reaction.\n**Reason (R):** The limiting friction between two dry metallic bodies depends directly on the true microscopic contact area of the asperities.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: lubricants form a thin hydrodynamic layer that physically separates the microscopic asperities of solid surfaces, drastically reducing the coefficient of friction. Reason (R) is true: for dry solid contacts, the actual microscopic area of contact where cold welding occurs dictates the limiting friction.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    }
  ]
};

// -------------------------------------------------------------
// TEST 5: BANKING OF ROADS (neet-SUBTOPIC-Physics-Banking-of-roads)
// -------------------------------------------------------------
const t5_updates = {
  testId: "neet-SUBTOPIC-Physics-Banking-of-roads",
  subtopic: "Banking of Roads",
  diagrams: [
    {
      index: 0,
      data: {
        question: "A circular race track of radius $R = 80\\text{ m}$ is banked at an angle $\\theta$ such that a vehicle can negotiate the curve safely without relying on friction at a design speed of $v_0 = 72\\text{ km/h}$ ($20\\text{ m/s}$). Taking $g = 10\\text{ m/s}^2$, what is the required angle of banking $\\theta$?",
        text: "A circular race track of radius $R = 80\\text{ m}$ is banked at an angle $\\theta$ such that a vehicle can negotiate the curve safely without relying on friction at a design speed of $v_0 = 72\\text{ km/h}$ ($20\\text{ m/s}$). Taking $g = 10\\text{ m/s}^2$, what is the required angle of banking $\\theta$?",
        options: [
          "$\\tan^{-1}(0.5) \\approx 26.6^\\circ$",
          "$\\tan^{-1}(0.25) \\approx 14.0^\\circ$",
          "$\\tan^{-1}(0.8) \\approx 38.7^\\circ$",
          "$45^\\circ$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Balance forces for a frictionless banked curve:**\n- Vertical equilibrium: $N\\cos\\theta = mg$\n- Horizontal centripetal force: $N\\sin\\theta = \\frac{m v_0^2}{R}$\n\n**Step 2: Solve for $\\tan\\theta$:**\n$$\\tan\\theta = \\frac{v_0^2}{Rg} = \\frac{(20\\text{ m/s})^2}{80\\text{ m} \\times 10\\text{ m/s}^2} = \\frac{400}{800} = 0.5$$\n$$\\theta = \\tan^{-1}(0.5) \\approx 26.6^\\circ.$$",
        image: "/images/diagrams/laws_of_motion/test5_q1_frictionless_banked_road.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test5_q1_frictionless_banked_road.svg",
        diagramType: "TIKZ",
        difficulty: "easy",
        type: "MCQ"
      }
    },
    {
      index: 1,
      data: {
        question: "A curved road of radius $R = 50\\text{ m}$ is banked at an angle $\\theta = 45^\\circ$. The coefficient of static friction between the car tires and the road surface is $\\mu_s = 0.2$ ($g = 10\\text{ m/s}^2$). What is the maximum safe speed $v_{\\text{max}}$ at which the car can negotiate the curve without skidding outwards up the banking?",
        text: "A curved road of radius $R = 50\\text{ m}$ is banked at an angle $\\theta = 45^\\circ$. The coefficient of static friction between the car tires and the road surface is $\\mu_s = 0.2$ ($g = 10\\text{ m/s}^2$). What is the maximum safe speed $v_{\\text{max}}$ at which the car can negotiate the curve without skidding outwards up the banking?",
        options: [
          "$27.4\\text{ m/s}$ (approx. $98.6\\text{ km/h}$)",
          "$22.4\\text{ m/s}$ (approx. $80.6\\text{ km/h}$)",
          "$31.6\\text{ m/s}$ (approx. $113.8\\text{ km/h}$)",
          "$18.2\\text{ m/s}$ (approx. $65.5\\text{ km/h}$)"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Formula for maximum safe speed on a rough banked road:**\n$$v_{\\text{max}} = \\sqrt{R g \\left( \\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta} \\right)}$$\n\n**Step 2: Substitute given values ($\\\\theta = 45^\\circ \\implies \\tan 45^\\circ = 1$):**\n$$\\frac{\\tan 45^\\circ + 0.2}{1 - (0.2)(1)} = \\frac{1.2}{0.8} = 1.5$$\n$$v_{\\text{max}} = \\sqrt{50 \\times 10 \\times 1.5} = \\sqrt{750} \\approx 27.39\\text{ m/s} \\approx 27.4\\text{ m/s}.$$",
        image: "/images/diagrams/laws_of_motion/test5_q2_banked_road_friction.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test5_q2_banked_road_friction.svg",
        diagramType: "TIKZ",
        difficulty: "hard",
        type: "MCQ"
      }
    },
    {
      index: 2,
      data: {
        question: "A car is negotiating an unbanked, level circular bend of radius $R = 40\\text{ m}$. The coefficient of static friction between the tires and the road is $\\mu_s = 0.4$ ($g = 10\\text{ m/s}^2$). What is the maximum speed $v_{\\text{max}}$ with which the car can round the bend without skidding radially outwards?",
        text: "A car is negotiating an unbanked, level circular bend of radius $R = 40\\text{ m}$. The coefficient of static friction between the tires and the road is $\\mu_s = 0.4$ ($g = 10\\text{ m/s}^2$). What is the maximum speed $v_{\\text{max}}$ with which the car can round the bend without skidding radially outwards?",
        options: [
          "$12.65\\text{ m/s}$ (approx. $45.5\\text{ km/h}$)",
          "$16.0\\text{ m/s}$ (approx. $57.6\\text{ km/h}$)",
          "$8.94\\text{ m/s}$ (approx. $32.2\\text{ km/h}$)",
          "$20.0\\text{ m/s}$ (approx. $72.0\\text{ km/h}$)"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "**Step 1: Balance centripetal force with static friction on a flat road:**\n$$f_s \\le \\mu_s N = \\mu_s mg$$\n$$\\frac{m v^2}{R} \\le \\mu_s mg \\implies v \\le \\sqrt{\\mu_s g R}$$\n\n**Step 2: Calculate numerical value:**\n$$v_{\\text{max}} = \\sqrt{0.4 \\times 10 \\times 40} = \\sqrt{160} \\approx 12.65\\text{ m/s}.$$",
        image: "/images/diagrams/laws_of_motion/test5_q3_level_curved_road.svg",
        diagramAssetUrl: "/images/diagrams/laws_of_motion/test5_q3_level_curved_road.svg",
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
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The outer edge of a curved road is raised relative to the inner edge (banking) to allow vehicles to take curves at higher speeds.\n**Reason (R):** Banking provides a horizontal component of the normal contact force ($N\\sin\\theta$) towards the center of curvature, which contributes to the required centripetal force without relying solely on friction.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The outer edge of a curved road is raised relative to the inner edge (banking) to allow vehicles to take curves at higher speeds.\n**Reason (R):** Banking provides a horizontal component of the normal contact force ($N\\sin\\theta$) towards the center of curvature, which contributes to the required centripetal force without relying solely on friction.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: roads are banked precisely for safe high-speed turning. Reason (R) is true and correctly explains the physical mechanism: the inclined normal force has a horizontal component $N\\sin\\theta = mv^2/R$, reducing friction wear and preventing skidding.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 40,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** On a banked track designed for speed $v_0 = \\sqrt{Rg\\tan\\theta}$, there is zero lateral frictional force exerted on a vehicle moving at exactly $v_0$.\n**Reason (R):** At the design speed $v_0$, the horizontal component of the normal reaction force alone provides the exact centripetal force needed: $N\\sin\\theta = mv_0^2/R$.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** On a banked track designed for speed $v_0 = \\sqrt{Rg\\tan\\theta}$, there is zero lateral frictional force exerted on a vehicle moving at exactly $v_0$.\n**Reason (R):** At the design speed $v_0$, the horizontal component of the normal reaction force alone provides the exact centripetal force needed: $N\\sin\\theta = mv_0^2/R$.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: at the rated speed $v_0$, no friction is invoked. Reason (R) is true and correctly explains why: the normal reaction's horizontal component matches the centripetal demand exactly, leaving zero net lateral force along the incline.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 41,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** For a vehicle traveling on a banked road at a speed $v < \\sqrt{Rg\\tan\\theta}$, the static friction force acts upwards along the incline.\n**Reason (R):** When speed is lower than the design speed, the inward gravitational component $mg\\sin\\theta$ exceeds the required centripetal contribution from normal force, creating an impending inward slipping tendency.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** For a vehicle traveling on a banked road at a speed $v < \\sqrt{Rg\\tan\\theta}$, the static friction force acts upwards along the incline.\n**Reason (R):** When speed is lower than the design speed, the inward gravitational component $mg\\sin\\theta$ exceeds the required centripetal contribution from normal force, creating an impending inward slipping tendency.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: friction acts upwards along the slope. Reason (R) is true and correctly explains the tendency: at lower speeds, the vehicle tends to slide down the incline due to gravity; static friction opposes this downward slip by acting upwards along the inclined surface.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 42,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A cyclist safely rounds an unbanked level curve by leaning outward away from the center of curvature.\n**Reason (R):** Leaning outward increases the effective weight of the cyclist on the outer tire, thereby enhancing ground friction.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** A cyclist safely rounds an unbanked level curve by leaning outward away from the center of curvature.\n**Reason (R):** Leaning outward increases the effective weight of the cyclist on the outer tire, thereby enhancing ground friction.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: the cyclist must lean inward towards the center of curvature at an angle $\\theta = \\tan^{-1}(v^2/rg)$ so that the torque of the ground reaction counteracts the outward overturning torque. Reason (R) is also false: leaning outward causes catastrophic toppling due to uncompensated centrifugal torque.",
        difficulty: "medium",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 43,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Even on an icy, completely frictionless banked track ($\\mu_s = 0$), a car can safely take a turn at a specific designated speed without sliding.\n**Reason (R):** On a banked incline, the normal contact force is tilted from the vertical, and its horizontal component $N\\sin\\theta$ provides the centripetal acceleration independently of friction.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** Even on an icy, completely frictionless banked track ($\\mu_s = 0$), a car can safely take a turn at a specific designated speed without sliding.\n**Reason (R):** On a banked incline, the normal contact force is tilted from the vertical, and its horizontal component $N\\sin\\theta$ provides the centripetal acceleration independently of friction.",
        options: standardAROptions,
        correctAnswer: 0,
        correctOption: "a",
        explanation: "Assertion (A) is true: at speed $v_0 = \\sqrt{Rg\\tan\\theta}$, no friction is needed. Reason (R) is true and correctly states the principle: $N\\sin\\theta = mv^2/R$ supplies 100% of the centripetal force required.",
        difficulty: "easy",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    },
    {
      index: 44,
      data: {
        question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The maximum safe speed of a vehicle rounding an unbanked horizontal curve is proportional to the mass of the vehicle.\n**Reason (R):** A heavier vehicle exerts a larger normal reaction on the road, generating a proportionally larger maximum static friction force.",
        text: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\n**Assertion (A):** The maximum safe speed of a vehicle rounding an unbanked horizontal curve is proportional to the mass of the vehicle.\n**Reason (R):** A heavier vehicle exerts a larger normal reaction on the road, generating a proportionally larger maximum static friction force.",
        options: standardAROptions,
        correctAnswer: 3,
        correctOption: "d",
        explanation: "Assertion (A) is false: $v_{\\text{max}} = \\sqrt{\\mu_s g R}$, which is independent of vehicle mass. Reason (R) is true: $f_L = \\mu_s mg$ is indeed proportional to mass, but the centripetal force required ($m v^2/R$) is also proportional to mass, so mass cancels out completely.",
        difficulty: "hard",
        type: "ASSERTION_REASON",
        questionType: "Assertion–Reasoning"
      }
    }
  ]
};

async function applyTestUpdate(testConf) {
  console.log(`Applying ${testConf.subtopic} (${testConf.testId}) updates...`);
  const tp = await db.collection("testPapers").findOne({ testId: testConf.testId });
  if (!tp) {
    console.error(`Test ${testConf.testId} not found in testPapers!`);
    return;
  }

  // Update Diagrams
  for (const item of testConf.diagrams) {
    const qId = tp.questions[item.index];
    const updateDoc = {
      ...item.data,
      chapter: "Laws of Motion",
      subtopic: testConf.subtopic,
      subject: "Physics",
      updatedAt: new Date()
    };
    await db.collection("questionBank").updateOne(
      { _id: ObjectId.isValid(qId) && String(qId).length === 24 ? new ObjectId(qId) : qId },
      { $set: updateDoc }
    );
    console.log(`Updated ${testConf.subtopic} Q${item.index + 1}`);
  }

  // Update Section B
  for (const item of testConf.sectionB) {
    const qId = tp.questions[item.index];
    const updateDoc = {
      ...item.data,
      chapter: "Laws of Motion",
      subtopic: testConf.subtopic,
      subject: "Physics",
      updatedAt: new Date()
    };
    await db.collection("questionBank").updateOne(
      { _id: ObjectId.isValid(qId) && String(qId).length === 24 ? new ObjectId(qId) : qId },
      { $set: updateDoc }
    );
    console.log(`Updated ${testConf.subtopic} Q${item.index + 1}`);
  }
}

await applyTestUpdate(t4_updates);
await applyTestUpdate(t5_updates);

console.log("Tests 4 & 5 successfully updated!");
await client.close();
