# -*- coding: utf-8 -*-
"""
Generate Batch 1 of Laws of Motion:
- Newton's laws (45 MCQs)
- Impulse (45 MCQs)
Total = 90 MCQs
"""

import json

questions = []

def add_q(subtopic, question, options, correct_idx, explanation, difficulty="Medium"):
    questions.append({
        "question": question,
        "options": options,
        "correctAnswer": correct_idx,
        "explanation": explanation,
        "type": "MCQ",
        "questionType": "MCQ (Multiple Choice Question)",
        "marks": 4,
        "negativeMarks": 1,
        "difficulty": difficulty,
        "chapter": "Laws of Motion",
        "subtopic": subtopic,
        "subTopic": subtopic,
        "subject": "Physics",
        "examType": "JEE Mains"
    })

# ==============================================================================
# SUBTOPIC 1: Newton's laws (45 Questions)
# ==============================================================================

# Q1: Apparent weight in elevator
add_q(
    "Newton's laws",
    "A person of mass $70\\text{ kg}$ stands on a weighing machine in an elevator. What is the reading of the machine when the elevator ascends with a uniform acceleration of $2.2\\text{ m/s}^2$? (Take $g = 9.8\\text{ m/s}^2$)",
    ["$700\\text{ N}$", "$840\\text{ N}$", "$532\\text{ N}$", "$686\\text{ N}$"],
    1,
    "When the elevator ascends with acceleration $a$, the normal reaction is given by:\n$$N = m(g + a) = 70(9.8 + 2.2) = 70(12) = 840\\text{ N}$$\nThus, the reading of the scale is $840\\text{ N}$."
)

# Q2: Elevator cable snaps
add_q(
    "Newton's laws",
    "A body of mass $m$ is suspended by a spring balance inside an elevator. If the cable supporting the elevator snaps, the reading of the spring balance during the free fall becomes:",
    ["$mg$", "$2mg$", "$0$", "$mg/2$"],
    2,
    "During free fall, the downward acceleration of the elevator is $a = g$. The apparent weight is:\n$$N = m(g - a) = m(g - g) = 0$$\nTherefore, the spring balance reads zero."
)

# Q3: Apparent weight descending elevator
add_q(
    "Newton's laws",
    "A man of mass $60\\text{ kg}$ is in a lift that descends with an acceleration of $1.8\\text{ m/s}^2$. The force exerted by the man on the floor of the lift is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$480\\text{ N}$", "$588\\text{ N}$", "$696\\text{ N}$", "$720\\text{ N}$"],
    0,
    "For a descending elevator with acceleration $a$:\n$$N = m(g - a) = 60(9.8 - 1.8) = 60 \\times 8.0 = 480\\text{ N}$$"
)

# Q4: Accelerating wedge - block stationary
add_q(
    "Newton's laws",
    "A block of mass $m$ rests on a smooth wedge of inclination $\\theta$. The minimum horizontal acceleration $a$ that should be given to the wedge so that the block remains stationary relative to the wedge is:",
    ["$g\\sin\\theta$", "$g\\cos\\theta$", "$g\\tan\\theta$", "$g\\cot\\theta$"],
    2,
    "In the non-inertial frame of the wedge, a pseudo force $ma$ acts horizontally opposite to acceleration. For equilibrium along the incline:\n$$mg\\sin\\theta = ma\\cos\\theta \\implies a = g\\tan\\theta$$"
)

# Q5: Pendulum in accelerating car
add_q(
    "Newton's laws",
    "A simple pendulum is suspended from the ceiling of a car accelerating horizontally with acceleration $a = g/\\sqrt{3}$. The angle made by the string with the vertical in equilibrium relative to the car is:",
    ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"],
    0,
    "In the frame of the accelerating car, the forces on the bob are gravity $mg$ downward and pseudo force $ma$ horizontally backwards.\n$$\\tan\\theta = \\frac{ma}{mg} = \\frac{a}{g} = \\frac{g/\\sqrt{3}}{g} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ$$"
)

# Q6: Rocket propulsion - initial thrust
add_q(
    "Newton's laws",
    "A rocket of initial mass $6000\\text{ kg}$ ejects gases at a constant speed of $1000\\text{ m/s}$ relative to the rocket. To give the rocket an initial upward acceleration of $20\\text{ m/s}^2$, the rate of burning of fuel must be: (Take $g = 10\\text{ m/s}^2$)",
    ["$180\\text{ kg/s}$", "$120\\text{ kg/s}$", "$60\\text{ kg/s}$", "$240\\text{ kg/s}$"],
    0,
    "The equation of motion for a vertical rocket is:\n$$F_{\\text{thrust}} - mg = ma \\implies v_{\\text{rel}}\\frac{dm}{dt} = m(g + a)$$\n$$\\frac{dm}{dt} = \\frac{6000(10 + 20)}{1000} = \\frac{6000 \\times 30}{1000} = 180\\text{ kg/s}$$"
)

# Q7: Rocket in gravity-free space
add_q(
    "Newton's laws",
    "In a gravity-free space, a rocket of total initial mass $M_0$ burns fuel at rate $r = -\\frac{dm}{dt}$ with exhaust speed $u$. The velocity of the rocket when its mass reduces to $M_0/e^2$ is (assuming it starts from rest):",
    ["$u$", "$2u$", "$u/2$", "$4u$"],
    1,
    "In gravity-free space, Tsiolkovsky rocket equation gives:\n$$v = u \\ln\\left(\\frac{M_0}{M}\\right) = u \\ln\\left(\\frac{M_0}{M_0/e^2}\\right) = u \\ln(e^2) = 2u$$"
)

# Q8: Water jet hitting vertical wall
add_q(
    "Newton's laws",
    "A stream of water flowing horizontally with a speed of $15\\text{ m/s}$ pushes out of a tube of cross-sectional area $10^{-2}\\text{ m}^2$ and hits a vertical wall perpendicularly. If the water does not bounce back, the force exerted on the wall is: (Density of water $\\rho = 1000\\text{ kg/m}^3$)",
    ["$1500\\text{ N}$", "$2250\\text{ N}$", "$3000\\text{ N}$", "$4500\\text{ N}$"],
    1,
    "The mass of water striking the wall per second is:\n$$\\frac{dm}{dt} = \\rho A v = 1000 \\times 10^{-2} \\times 15 = 150\\text{ kg/s}$$\nSince the water stops upon impact ($v_f = 0$):\n$$F = \\frac{dp}{dt} = v\\frac{dm}{dt} = 150 \\times 15 = 2250\\text{ N}$$"
)

# Q9: Water jet reflected back
add_q(
    "Newton's laws",
    "A horizontal jet of water with cross-section $A$ and speed $v$ hits a flat plate normally and rebounds elastically with the same speed. The force exerted by the jet on the plate is:",
    ["$\\rho A v^2$", "$2\\rho A v^2$", "$\\frac{1}{2}\\rho A v^2$", "$4\\rho A v^2$"],
    1,
    "The rate of mass arriving is $dm/dt = \\rho A v$. With elastic reflection, change in velocity is $\\Delta v = v - (-v) = 2v$. Hence:\n$$F = \\frac{dm}{dt} \\Delta v = (\\rho A v)(2v) = 2\\rho A v^2$$"
)

# Q10: Sand dropped on conveyor belt
add_q(
    "Newton's laws",
    "Sand is dropped vertically onto a conveyor belt moving horizontally at a constant speed of $2\\text{ m/s}$ at a rate of $5\\text{ kg/s}$. The extra force and extra power needed to keep the belt moving at the same constant speed are respectively:",
    ["$10\\text{ N}, 20\\text{ W}$", "$5\\text{ N}, 10\\text{ W}$", "$10\\text{ N}, 10\\text{ W}$", "$20\\text{ N}, 40\\text{ W}$"],
    0,
    "The extra force required is:\n$$F = v\\frac{dm}{dt} = 2 \\times 5 = 10\\text{ N}$$\nThe extra power needed is:\n$$P = F v = 10 \\times 2 = 20\\text{ W}$$\n(Note that half of this power is dissipated as heat during sliding)."
)

# Q11: Time-dependent force on particle
add_q(
    "Newton's laws",
    "A particle of mass $2\\text{ kg}$ is initially at rest at $t = 0$. A force $\\vec{F} = (6t\\hat{i} + 4\\hat{j})\\text{ N}$ acts on it. The speed of the particle at $t = 2\\text{ s}$ is:",
    ["$5\\text{ m/s}$", "$2\\sqrt{13}\\text{ m/s}$", "$4\\sqrt{5}\\text{ m/s}$", "$10\\text{ m/s}$"],
    1,
    "Acceleration $\\vec{a} = \\vec{F}/m = (3t\\hat{i} + 2\\hat{j})\\text{ m/s}^2$.\nIntegrating from $t = 0$ to $t = 2$:\n$$\\vec{v}(2) = \\int_0^2 (3t\\hat{i} + 2\\hat{j})dt = \\left[\\frac{3t^2}{2}\\hat{i} + 2t\\hat{j}\\right]_0^2 = 6\\hat{i} + 4\\hat{j}$$\nSpeed $v = \\sqrt{6^2 + 4^2} = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}\\text{ m/s}$."
)

# Q12: Exponentially decaying force
add_q(
    "Newton's laws",
    "A force $F = F_0 e^{-kt}$ acts on a particle of mass $m$ initially at rest. The maximum terminal velocity attained by the particle as $t \\to \\infty$ is:",
    ["$\\frac{F_0}{mk}$", "$\\frac{F_0 k}{m}$", "$\\frac{F_0}{m k^2}$", "$\\frac{m F_0}{k}$"],
    0,
    "$$m \\frac{dv}{dt} = F_0 e^{-kt} \\implies dv = \\frac{F_0}{m} e^{-kt} dt$$\nIntegrating from $t = 0$ to $\\infty$:\n$$v_{\\text{max}} = \\frac{F_0}{m} \\left[-\\frac{e^{-kt}}{k}\\right]_0^\\infty = \\frac{F_0}{mk}(0 - (-1)) = \\frac{F_0}{mk}$$"
)

# Q13: Force proportional to time, stopping a body
add_q(
    "Newton's laws",
    "A body of mass $m$ moving with speed $v_0$ enters a resistive medium where a retarding force $F = -ct$ acts on it. The time taken for the body to come to a complete stop is:",
    ["$\\sqrt{\\frac{2m v_0}{c}}$", "$\\frac{m v_0}{c}$", "$\\frac{2m v_0}{c}$", "$\\sqrt{\\frac{m v_0}{2c}}$"],
    0,
    "$$m \\frac{dv}{dt} = -ct \\implies m dv = -ct dt$$\nIntegrating from $v_0$ to $0$:\n$$m(0 - v_0) = -c\\frac{t^2}{2} \\implies mv_0 = \\frac{1}{2}ct^2 \\implies t = \\sqrt{\\frac{2mv_0}{c}}$$"
)

# Q14: Weighing machine in decelerating lift
add_q(
    "Newton's laws",
    "A lift is moving upwards with a speed of $10\\text{ m/s}$ and slows down to a stop with a constant deceleration of $2\\text{ m/s}^2$. A person of mass $50\\text{ kg}$ inside the lift stands on a scale. The reading of the scale during deceleration is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$390\\text{ N}$", "$490\\text{ N}$", "$590\\text{ N}$", "$290\\text{ N}$"],
    0,
    "Moving upwards and slowing down means downward acceleration $a = 2\\text{ m/s}^2$.\n$$N = m(g - a) = 50(9.8 - 2) = 50 \\times 7.8 = 390\\text{ N}$$"
)

# Q15: Monkey climbing a rope
add_q(
    "Newton's laws",
    "A monkey of mass $40\\text{ kg}$ climbs up a light rope hanging from a ceiling. The rope can withstand a maximum tension of $600\\text{ N}$. The maximum upward acceleration with which the monkey can safely climb is: (Take $g = 10\\text{ m/s}^2$)",
    ["$2.5\\text{ m/s}^2$", "$5\\text{ m/s}^2$", "$7.5\\text{ m/s}^2$", "$10\\text{ m/s}^2$"],
    1,
    "When climbing up with acceleration $a$:\n$$T = m(g + a) \\le T_{\\text{max}}$$\n$$40(10 + a) \\le 600 \\implies 10 + a \\le 15 \\implies a \\le 5\\text{ m/s}^2$$"
)

# Q16: Monkey sliding down a rope
add_q(
    "Newton's laws",
    "A rope can support a maximum tension equal to $3/4$ of the weight of a monkey. The minimum downward acceleration with which the monkey must slide down the rope so that the rope does not break is:",
    ["$g/4$", "$g/2$", "$3g/4$", "$g$"],
    0,
    "When sliding down with acceleration $a$:\n$$T = m(g - a)$$\nTo keep $T \\le \\frac{3}{4}mg$:\n$$m(g - a) \\le \\frac{3}{4}mg \\implies g - a \\le \\frac{3}{4}g \\implies a \\ge \\frac{g}{4}$$\nThus, the minimum acceleration is $g/4$."
)

# Q17: Action and reaction forces
add_q(
    "Newton's laws",
    "Which of the following statements is INCORRECT regarding Newton's third law of motion?",
    [
        "Action and reaction forces act on different bodies.",
        "Action and reaction forces occur simultaneously.",
        "Action and reaction cancel each other out to give zero net force on a single body.",
        "Action and reaction are always of the same physical nature (both gravitational, both normal, etc.)."
    ],
    2,
    "Action and reaction forces act on two different bodies, so they never cancel each other on a single body. They can only cancel if we consider both interacting bodies together as a single composite system."
)

# Q18: Two blocks pushed on frictionless floor
add_q(
    "Newton's laws",
    "Two blocks of masses $m_1 = 4\\text{ kg}$ and $m_2 = 6\\text{ kg}$ are in contact on a smooth horizontal surface. A horizontal force $F = 20\\text{ N}$ is applied to $m_1$ towards $m_2$. The contact force between the two blocks is:",
    ["$8\\text{ N}$", "$12\\text{ N}$", "$16\\text{ N}$", "$20\\text{ N}$"],
    1,
    "Acceleration of the system:\n$$a = \\frac{F}{m_1 + m_2} = \\frac{20}{4 + 6} = 2\\text{ m/s}^2$$\nThe contact force $N$ accelerates $m_2$:\n$$N = m_2 a = 6 \\times 2 = 12\\text{ N}$$"
)

# Q19: Three blocks pushed together
add_q(
    "Newton's laws",
    "Three blocks of masses $2\\text{ kg}$, $3\\text{ kg}$, and $5\\text{ kg}$ are placed in contact on a frictionless table. A force of $50\\text{ N}$ is applied horizontally on the $2\\text{ kg}$ block. The contact force between the $3\\text{ kg}$ and $5\\text{ kg}$ blocks is:",
    ["$15\\text{ N}$", "$25\\text{ N}$", "$35\\text{ N}$", "$40\\text{ N}$"],
    1,
    "Common acceleration:\n$$a = \\frac{50}{2 + 3 + 5} = 5\\text{ m/s}^2$$\nThe contact force between the $3\\text{ kg}$ and $5\\text{ kg}$ blocks pushes only the $5\\text{ kg}$ block:\n$$N_{23} = 5 \\times 5 = 25\\text{ N}$$"
)

# Q20: Force on inclined plane - normal force
add_q(
    "Newton's laws",
    "A block of mass $m$ is pushed up a smooth inclined plane of inclination $\\theta$ by a horizontal force $F$. The normal contact force exerted by the incline on the block is:",
    ["$mg\\cos\\theta$", "$mg\\cos\\theta + F\\sin\\theta$", "$mg\\cos\\theta - F\\sin\\theta$", "$F\\cos\\theta$"],
    1,
    "Resolving forces perpendicular to the inclined plane:\nNormal force $N$ balances the perpendicular component of gravity $mg\\cos\\theta$ and the perpendicular component of $F$, which is $F\\sin\\theta$.\n$$N = mg\\cos\\theta + F\\sin\\theta$$"
)

# Q21: Minimum force along incline
add_q(
    "Newton's laws",
    "A block of mass $m$ is at rest on a smooth inclined plane of inclination $\\theta$. A force $F$ applied horizontally keeps the block in equilibrium. The magnitude of $F$ is:",
    ["$mg\\sin\\theta$", "$mg\\cos\\theta$", "$mg\\tan\\theta$", "$mg\\cot\\theta$"],
    2,
    "Balancing forces along the incline:\n$$F\\cos\\theta = mg\\sin\\theta \\implies F = mg\\tan\\theta$$"
)

# Q22: Liquid surface in accelerating tanker
add_q(
    "Newton's laws",
    "An open tanker filled with water moves horizontally with a constant acceleration $a = 2.45\\text{ m/s}^2$. The angle made by the free surface of water with the horizontal is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$\\tan^{-1}(0.25)$", "$\\tan^{-1}(0.5)$", "$\\tan^{-1}(0.75)$", "$\\tan^{-1}(1.0)$"],
    0,
    "In the frame of the accelerating tanker, the effective gravity makes an angle $\\theta$ with the vertical:\n$$\\tan\\theta = \\frac{a}{g} = \\frac{2.45}{9.8} = 0.25$$\nThe free liquid surface is perpendicular to $\\vec{g}_{\\text{eff}}$, so it tilts by $\\theta = \\tan^{-1}(0.25)$ to the horizontal."
)

# Q23: U-tube accelerating horizontally
add_q(
    "Newton's laws",
    "A U-tube with horizontal limb length $L$ containing liquid is accelerated horizontally with acceleration $a$. The difference in liquid levels $h$ between the two vertical limbs is:",
    ["$\\frac{aL}{g}$", "$\\frac{gL}{a}$", "$\\frac{a^2 L}{2g}$", "$\\frac{aL}{2g}$"],
    0,
    "The pressure difference across the horizontal limb of length $L$ is $\\Delta P = \\rho a L$. This pressure difference is balanced by the hydrostatic head difference $\\rho g h$:\n$$\\rho g h = \\rho a L \\implies h = \\frac{aL}{g}$$"
)

# Q24: Spring balance reading with two equal forces
add_q(
    "Newton's laws",
    "Two men pull horizontally on opposite ends of a spring balance with forces of $100\\text{ N}$ each. The reading of the spring balance will be:",
    ["$0\\text{ N}$", "$100\\text{ N}$", "$200\\text{ N}$", "$50\\text{ N}$"],
    1,
    "A spring balance measures the tension within it. When pulled with $100\\text{ N}$ on both sides, the tension throughout the spring is $100\\text{ N}$, so it reads $100\\text{ N}$ (not $200\\text{ N}$ or $0\\text{ N}$)."
)

# Q25: Balloon descending with constant acceleration
add_q(
    "Newton's laws",
    "A hot air balloon of total mass $M$ descends vertically with acceleration $a$ ($a < g$). What mass $m$ of ballast must be removed from the balloon so that it starts ascending with the same acceleration $a$ (assuming the buoyant force remains constant)?",
    ["$\\frac{2Ma}{g + a}$", "$\\frac{Ma}{g + a}$", "$\\frac{2Ma}{g - a}$", "$\\frac{Ma}{g - a}$"],
    0,
    "When descending:\n$$Mg - B = Ma \\implies B = M(g - a)$$\nWhen ascending after removing mass $m$:\n$$B - (M - m)g = (M - m)a$$\nSubstitute $B = M(g - a)$:\n$$M(g - a) - Mg + mg = Ma - ma + mg \\implies -2Ma = -m(g + a) \\implies m = \\frac{2Ma}{g + a}$$"
)

# Q26: Machine gun firing bullets
add_q(
    "Newton's laws",
    "A machine gun fires bullets of mass $20\\text{ g}$ each with a muzzle velocity of $500\\text{ m/s}$ at a rate of 10 bullets per second. The average force needed to hold the gun stationary is:",
    ["$50\\text{ N}$", "$100\\text{ N}$", "$150\\text{ N}$", "$200\\text{ N}$"],
    1,
    "Mass per second $\\frac{dm}{dt} = 10 \\times 0.020 = 0.2\\text{ kg/s}$.\nForce exerted by recoil:\n$$F = v \\frac{dm}{dt} = 500 \\times 0.2 = 100\\text{ N}$$\nTo hold the gun, a force of $100\\text{ N}$ must be exerted."
)

# Q27: Helicopter hover thrust
add_q(
    "Newton's laws",
    "A helicopter of mass $2000\\text{ kg}$ hovers motionless in air. The rotor blades sweep out a circle of radius $5\\text{ m}$. The downward velocity imparted to the air column of density $\\rho = 1.2\\text{ kg/m}^3$ is: (Take $g = 10\\text{ m/s}^2$)",
    ["$14.5\\text{ m/s}$", "$10.3\\text{ m/s}$", "$18.2\\text{ m/s}$", "$20.5\\text{ m/s}$"],
    0,
    "Thrust balances weight: $T = mg = 2000 \\times 10 = 20000\\text{ N}$.\nThrust is also given by $\\rho A v^2$, where $A = \\pi r^2 = \\pi (5)^2 = 25\\pi \\approx 78.54\\text{ m}^2$.\n$$20000 = 1.2 \\times 78.54 \\times v^2 \\approx 94.25 v^2 \\implies v^2 \\approx 212.2 \\implies v \\approx 14.57\\text{ m/s}$$"
)

# Q28: Bullet penetrating wooden block
add_q(
    "Newton's laws",
    "A bullet of mass $10\\text{ g}$ travelling at $300\\text{ m/s}$ strikes a target and penetrates $6\\text{ cm}$ into it before stopping. The average resistive force exerted by the target on the bullet is:",
    ["$5000\\text{ N}$", "$7500\\text{ N}$", "$6000\\text{ N}$", "$9000\\text{ N}$"],
    1,
    "Using $v^2 = u^2 - 2as$:\n$$0 = 300^2 - 2a(0.06) \\implies a = \\frac{90000}{0.12} = 7.5 \\times 10^5\\text{ m/s}^2$$\nResistive force:\n$$F = ma = 0.010 \\times 7.5 \\times 10^5 = 7500\\text{ N}$$"
)

# Q29: Frame of reference
add_q(
    "Newton's laws",
    "A frame of reference attached to a particle moving in a uniform circle with constant speed is:",
    [
        "An inertial frame because the speed is constant.",
        "A non-inertial frame because the direction of velocity changes continuously.",
        "An inertial frame if viewed from the center of the circle.",
        "A non-inertial frame only if the angular speed changes."
    ],
    1,
    "A reference frame is inertial only if it has zero acceleration. In uniform circular motion, there is a continuous centripetal acceleration towards the center ($a_c = v^2/r$). Hence, the frame is non-inertial."
)

# Q30: Variable mass - falling raindrop
add_q(
    "Newton's laws",
    "A raindrop of initial mass $m_0$ falls from rest under gravity and collects moisture from clouds at a rate proportional to its speed: $\\frac{dm}{dt} = kv$. If air resistance is neglected, the acceleration of the drop when its speed is $v$ is:",
    ["$g - \\frac{kv^2}{m}$", "$g + \\frac{kv^2}{m}$", "$g - \\frac{kv}{m}$", "$g$"],
    0,
    "Equation of motion for variable mass:\n$$\\frac{d(mv)}{dt} = mg \\implies m\\frac{dv}{dt} + v\\frac{dm}{dt} = mg$$\n$$m a + v(kv) = mg \\implies ma = mg - kv^2 \\implies a = g - \\frac{kv^2}{m}$$"
)

# Q31: Two bodies connected by spring in elevator
add_q(
    "Newton's laws",
    "Two masses $m_1 = 3\\text{ kg}$ and $m_2 = 2\\text{ kg}$ are connected by a light spring and suspended from the ceiling of an elevator. When the elevator moves up with acceleration $a = 2\\text{ m/s}^2$, the force exerted by the ceiling on the upper end of the spring is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$49\\text{ N}$", "$59\\text{ N}$", "$39\\text{ N}$", "$68\\text{ N}$"],
    1,
    "The total mass supported by the ceiling is $M = m_1 + m_2 = 5\\text{ kg}$.\nWith upward acceleration $a$:\n$$F = M(g + a) = 5(9.8 + 2) = 5(11.8) = 59\\text{ N}$$"
)

# Q32: Action-reaction pair for gravitational attraction
add_q(
    "Newton's laws",
    "An apple of mass $m$ falls from a tree due to the Earth's gravitational pull. If the gravitational force on the apple by the Earth is $F_1$ and the gravitational force on the Earth by the apple is $F_2$, then:",
    ["$F_1 > F_2$", "$F_1 < F_2$", "$F_1 = F_2$", "$F_2 = 0$"],
    2,
    "By Newton's third law, the gravitational force exerted by the Earth on the apple and that exerted by the apple on the Earth form an action-reaction pair. Therefore, $|F_1| = |F_2|$ in magnitude, directed oppositely."
)

# Q33: Accelerometer reading
add_q(
    "Newton's laws",
    "An accelerometer inside a box car consists of a small mass $m$ suspended by a string of length $L$. If the car moves on a straight horizontal track and the string deflects by an angle $\\theta = 45^\\circ$ from the vertical, the acceleration of the car is:",
    ["$g/2$", "$g$", "$g\\sqrt{2}$", "$g/\\sqrt{2}$"],
    1,
    "$$\\tan\\theta = \\frac{a}{g} \\implies a = g\\tan 45^\\circ = g$$"
)

# Q34: Apparent weight at the bottom of a vertical loop
add_q(
    "Newton's laws",
    "A pilot of mass $m$ flies a fighter jet in a vertical loop of radius $R$ at a constant speed $v$. The apparent weight of the pilot at the lowest point of the loop is:",
    ["$mg$", "$m\\left(g + \\frac{v^2}{R}\\right)$", "$m\\left(\\frac{v^2}{R} - g\\right)$", "$\\frac{mv^2}{R}$"],
    1,
    "At the bottom of the loop, the normal force $N$ points upwards and gravity $mg$ points downwards. The net force provides centripetal acceleration:\n$$N - mg = \\frac{mv^2}{R} \\implies N = m\\left(g + \\frac{v^2}{R}\\right)$$"
)

# Q35: Apparent weight at the top of a vertical loop
add_q(
    "Newton's laws",
    "For the pilot in the previous question, the minimum speed $v$ at the top of the vertical loop of radius $R$ for the pilot to remain in contact with the seat is:",
    ["$\\sqrt{gR}$", "$\\sqrt{2gR}$", "$\\sqrt{3gR}$", "$\\sqrt{5gR}$"],
    0,
    "At the top of the loop, both normal force $N$ and gravity $mg$ act downwards:\n$$N + mg = \\frac{mv^2}{R}$$\nFor contact, $N \\ge 0 \\implies mg \\le \\frac{mv^2}{R} \\implies v \\ge \\sqrt{gR}$."
)

# Q36: Mass on inclined wedge with friction absent
add_q(
    "Newton's laws",
    "A block of mass $m$ is placed on a smooth wedge of angle $\\theta$ and mass $M$ which rests on a smooth horizontal floor. The horizontal force $F$ applied on the wedge to keep the block stationary relative to the wedge is:",
    ["$(M + m)g\\tan\\theta$", "$Mg\\tan\\theta$", "$mg\\tan\\theta$", "$(M + m)g\\sin\\theta$"],
    0,
    "To keep the block stationary relative to the wedge, the acceleration of the wedge must be $a = g\\tan\\theta$.\nThe total mass of the system is $(M + m)$. Therefore, the required horizontal force is:\n$$F = (M + m)a = (M + m)g\\tan\\theta$$"
)

# Q37: String cut in suspended mass system
add_q(
    "Newton's laws",
    "Two blocks $A$ (mass $m$) and $B$ (mass $m$) are suspended from a ceiling by a light spring (between ceiling and $A$) and a light string (between $A$ and $B$). Immediately after the string between $A$ and $B$ is cut, the accelerations of $A$ and $B$ are respectively:",
    ["$g$ upwards, $g$ downwards", "$2g$ upwards, $g$ downwards", "$g$ downwards, $g$ downwards", "$0$, $g$ downwards"],
    0,
    "Before cutting, the tension in the spring is $T_s = (m + m)g = 2mg$. The tension in the string is $T = mg$.\nImmediately after the string is cut:\n- Block $B$ has only gravity acting on it, so $a_B = g$ downwards.\n- The spring tension cannot change instantaneously, so $T_s = 2mg$ upwards remains on block $A$.\nNet force on $A$ is $F_{\\text{net}} = T_s - mg = 2mg - mg = mg$ upwards.\nThus $a_A = mg/m = g$ upwards."
)

# Q38: String cut above top mass
add_q(
    "Newton's laws",
    "In the previous system of blocks $A$ and $B$ suspended by a string from the ceiling with a spring connecting $A$ and $B$, if the string connecting $A$ to the ceiling is cut, the accelerations of $A$ and $B$ immediately after cutting are:",
    ["$2g$ downwards, $0$", "$g$ downwards, $g$ downwards", "$0$, $2g$ downwards", "$g$ upwards, $g$ downwards"],
    0,
    "Before cutting, spring tension is $T_s = mg$.\nWhen the string to the ceiling is cut:\n- Block $B$ still experiences upward spring force $T_s = mg$ and downward gravity $mg$, so net force on $B$ is $0$, hence $a_B = 0$.\n- Block $A$ experiences downward gravity $mg$ and downward spring force $T_s = mg$. Net force on $A$ is $2mg$ downwards, so $a_A = 2g$ downwards."
)

# Q39: Force on a particle with position x(t)
add_q(
    "Newton's laws",
    "A body of mass $3\\text{ kg}$ moves along the x-axis according to $x(t) = 4t^3 - 2t^2 + 5\\text{ m}$. The force acting on the body at $t = 2\\text{ s}$ is:",
    ["$60\\text{ N}$", "$132\\text{ N}$", "$144\\text{ N}$", "$72\\text{ N}$"],
    1,
    "$$v(t) = \\frac{dx}{dt} = 12t^2 - 4t$$\n$$a(t) = \\frac{dv}{dt} = 24t - 4$$\nAt $t = 2\\text{ s}$, $a(2) = 24(2) - 4 = 48 - 4 = 44\\text{ m/s}^2$.\n$$F = ma = 3 \\times 44 = 132\\text{ N}$$"
)

# Q40: Velocity-dependent force
add_q(
    "Newton's laws",
    "A particle of mass $m$ moving with speed $v_0$ experiences a resisting force $F = -kv^2$. The distance $x$ traversed by the particle until its speed reduces to $v_0/2$ is:",
    ["$\\frac{m}{k}\\ln 2$", "$\\frac{2m}{k}\\ln 2$", "$\\frac{m}{2k}\\ln 2$", "$\\frac{m}{k}$"],
    0,
    "$$m v \\frac{dv}{dx} = -kv^2 \\implies \\frac{dv}{v} = -\\frac{k}{m} dx$$\nIntegrating from $v_0$ to $v_0/2$:\n$$\\ln\\left(\\frac{v_0/2}{v_0}\\right) = -\\frac{k}{m} x \\implies -\\ln 2 = -\\frac{k}{m} x \\implies x = \\frac{m}{k}\\ln 2$$"
)

# Q41: Rope of mass M pulled by force F
add_q(
    "Newton's laws",
    "A uniform rope of length $L$ and mass $M$ is pulled horizontally on a smooth table by a force $F$ applied at one end. The tension in the rope at a distance $x$ from the end where the force is applied is:",
    ["$F\\left(1 - \\frac{x}{L}\\right)$", "$F\\frac{x}{L}$", "$F\\left(1 + \\frac{x}{L}\\right)$", "$F$"],
    0,
    "Acceleration of the rope is $a = F/M$.\nThe portion of the rope behind the point at distance $x$ has mass $m' = M\\frac{L - x}{L}$.\nThe tension at distance $x$ must accelerate this mass $m'$:\n$$T(x) = m' a = M\\left(1 - \\frac{x}{L}\\right) \\frac{F}{M} = F\\left(1 - \\frac{x}{L}\\right)$$"
)

# Q42: Massive rope hanging from ceiling
add_q(
    "Newton's laws",
    "A heavy uniform rope of length $L$ and mass $M$ hangs vertically from a rigid ceiling. The tension in the rope at a distance $y$ measured from the bottom free end is:",
    ["$\\frac{M g y}{L}$", "$M g \\left(1 - \\frac{y}{L}\\right)$", "$Mg$", "$\\frac{1}{2}Mg$"],
    0,
    "The tension at distance $y$ from the bottom supports the weight of the rope below it, which has mass $m(y) = M\\frac{y}{L}$.\n$$T(y) = m(y) g = \\frac{Mgy}{L}$$"
)

# Q43: Weight of bird inside closed cage
add_q(
    "Newton's laws",
    "A bird of mass $m$ sits in a closed wire mesh cage of mass $M$ which is weighed on a spring balance. If the bird flies around inside the closed cage with an acceleration $a$ upwards, the reading of the balance will be:",
    ["$(M + m)g$", "$(M + m)g + ma$", "$(M + m)g - ma$", "$Mg$"],
    1,
    "In a closed container, the air column transmits the downward thrust exerted by the bird's wings. For the bird to accelerate upwards with $a$, the upward force by the air on the bird must be $F = m(g + a)$. By Newton's third law, the bird exerts an equal downward force on the air, which acts on the bottom of the cage. Thus, the total balance reading is $(M + m)g + ma$."
)

# Q44: Bird flying at constant speed in closed cage
add_q(
    "Newton's laws",
    "In the previous setup, if the bird flies at a constant speed horizontally inside the closed airtight cage, the balance reading is:",
    ["$(M + m)g$", "$Mg$", "$(M - m)g$", "$M g + \\frac{1}{2}mg$"],
    0,
    "When the bird flies at constant velocity, its vertical acceleration is zero. The downward aerodynamic thrust equals its weight $mg$. Therefore, the balance reads the total weight $(M + m)g$."
)

# Q45: Spring cutting tension problem
add_q(
    "Newton's laws",
    "A system of three identical blocks each of mass $m$ are connected by two light springs and suspended from the ceiling. When the system is in equilibrium, the tension in the upper spring is $T_1$ and in the lower spring is $T_2$. The ratio $T_1/T_2$ is:",
    ["$3/2$", "$3/1$", "$2/1$", "$1/1$"],
    1,
    "The lower spring supports only the bottom mass, so $T_2 = mg$.\nThe upper spring supports the middle and bottom masses, so $T_1 = (m + m)g = 2mg$ if the top mass is connected to the ceiling, or if the top mass is below the first spring, $T_1 = 3mg$.\nFor three suspended blocks connected in series by springs: the top spring supports all 3 blocks ($T_1 = 3mg$), and the lowest spring supports 1 block ($T_2 = mg$).\n$$\\frac{T_1}{T_2} = \\frac{3mg}{mg} = 3$$"
)


# ==============================================================================
# SUBTOPIC 2: Impulse (45 Questions)
# ==============================================================================

# Q46: Definition of impulse from F-t curve
add_q(
    "Impulse",
    "A force acts on a $2\\text{ kg}$ object which is initially at rest. The force increases linearly from $0$ to $50\\text{ N}$ in $4\\text{ s}$, then drops to zero immediately. The final speed of the object is:",
    ["$25\\text{ m/s}$", "$50\\text{ m/s}$", "$100\\text{ m/s}$", "$12.5\\text{ m/s}$"],
    1,
    "The impulse is the area under the $F-t$ triangle:\n$$J = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 4 \\times 50 = 100\\text{ N}\\cdot\\text{s}$$\nFrom the impulse-momentum theorem:\n$$J = \\Delta p = m v_f - 0 \\implies 100 = 2 v_f \\implies v_f = 50\\text{ m/s}$$"
)

# Q47: Ball hitting floor elastically
add_q(
    "Impulse",
    "A ball of mass $0.15\\text{ kg}$ is dropped from a height of $5\\text{ m}$ and rebounds to a height of $5\\text{ m}$. If the contact time with the floor is $0.02\\text{ s}$, the average force exerted on the ball by the floor during impact is: (Take $g = 10\\text{ m/s}^2$)",
    ["$150\\text{ N}$", "$151.5\\text{ N}$", "$75\\text{ N}$", "$300\\text{ N}$"],
    1,
    "Speed just before hitting floor: $v_1 = \\sqrt{2gh} = \\sqrt{2(10)(5)} = 10\\text{ m/s}$ (downward).\nSpeed just after rebound: $v_2 = \\sqrt{2gh} = 10\\text{ m/s}$ (upward).\n$$\\Delta p = m(v_2 - (-v_1)) = 0.15(10 + 10) = 3.0\\text{ N}\\cdot\\text{s}$$\nAverage net force $F_{\\text{net}} = \\frac{\\Delta p}{\\Delta t} = \\frac{3.0}{0.02} = 150\\text{ N}$.\nNormal force exerted by the floor $N = F_{\\text{net}} + mg = 150 + (0.15 \\times 10) = 151.5\\text{ N}$."
)

# Q48: Inelastic rebound from floor
add_q(
    "Impulse",
    "A rubber ball of mass $0.2\\text{ kg}$ hits the ground with a speed of $20\\text{ m/s}$ and rebounds with a speed of $15\\text{ m/s}$. The magnitude of the impulse imparted to the ball by the floor is:",
    ["$1\\text{ N}\\cdot\\text{s}$", "$7\\text{ N}\\cdot\\text{s}$", "$3.5\\text{ N}\\cdot\\text{s}$", "$4\\text{ N}\\cdot\\text{s}$"],
    1,
    "Taking upward as positive:\n$$v_i = -20\\text{ m/s}, \\quad v_f = +15\\text{ m/s}$$\n$$J = \\Delta p = m(v_f - v_i) = 0.2(15 - (-20)) = 0.2(35) = 7.0\\text{ N}\\cdot\\text{s}$$"
)

# Q49: Ball hitting wall at an angle
add_q(
    "Impulse",
    "A ball of mass $m$ strikes a rigid vertical wall with speed $v$ at an angle of $60^\\circ$ to the normal and rebounds elastically with the same speed at the same angle. The impulse delivered by the wall to the ball is:",
    ["$mv$", "$2mv$", "$mv\\sqrt{3}$", "$\\frac{1}{2}mv$"],
    0,
    "Let the normal to the wall be along the x-axis. The component of velocity parallel to the wall is unchanged ($v\\sin 60^\\circ$).\nThe perpendicular component reverses:\n$$\\Delta p_x = m(v\\cos 60^\\circ - (-v\\cos 60^\\circ)) = 2mv\\cos 60^\\circ = 2mv\\left(\\frac{1}{2}\\right) = mv$$\nImpulse delivered is $mv$ normal to the wall."
)

# Q50: Cricket ball caught by player
add_q(
    "Impulse",
    "A cricket ball of mass $150\\text{ g}$ moving at $24\\text{ m/s}$ is caught by a player who brings it to rest in $0.1\\text{ s}$. The average impulsive force exerted by the player's hands on the ball is:",
    ["$36\\text{ N}$", "$18\\text{ N}$", "$72\\text{ N}$", "$15\\text{ N}$"],
    0,
    "$$\\Delta p = 0 - (0.15 \\times 24) = -3.6\\text{ kg}\\cdot\\text{m/s}$$\n$$F_{\\text{avg}} = \\frac{|\\Delta p|}{\\Delta t} = \\frac{3.6}{0.1} = 36\\text{ N}$$"
)

# Q51: Pulling hands back in catching
add_q(
    "Impulse",
    "A fielder in a cricket match pulls his hands backwards while catching a fast-moving ball. This action primarily reduces:",
    [
        "The momentum of the ball.",
        "The impulse experienced by the hands.",
        "The force exerted on the hands by increasing the time of catch.",
        "The kinetic energy of the ball."
    ],
    2,
    "Since the change in momentum $\\Delta p$ is fixed, increasing the contact time $\\Delta t$ by moving the hands backwards reduces the average force $F_{\\text{avg}} = \\Delta p / \\Delta t$, thereby preventing injury."
)

# Q52: Trapezoidal F-t graph
add_q(
    "Impulse",
    "A force acting on an object of mass $5\\text{ kg}$ varies with time as a trapezoid: from $t = 0$ to $2\\text{ s}$, $F$ increases linearly from $0$ to $20\\text{ N}$; from $t = 2$ to $4\\text{ s}$, $F$ remains constant at $20\\text{ N}$; from $t = 4$ to $6\\text{ s}$, $F$ drops linearly to $0$. The total impulse imparted to the object is:",
    ["$60\\text{ N}\\cdot\\text{s}$", "$80\\text{ N}\\cdot\\text{s}$", "$100\\text{ N}\\cdot\\text{s}$", "$120\\text{ N}\\cdot\\text{s}$"],
    1,
    "Area of trapezoid:\n$$J = \\frac{1}{2}(a + b)h = \\frac{1}{2}((4-2) + 6) \\times 20 = \\frac{1}{2}(2 + 6) \\times 20 = 4 \\times 20 = 80\\text{ N}\\cdot\\text{s}$$"
)

# Q53: Sinusoidal force pulse
add_q(
    "Impulse",
    "A half-cycle sinusoidal force pulse $F(t) = F_0\\sin\\left(\\frac{\\pi t}{T}\\right)$ acts on a particle from $t = 0$ to $t = T$. The total impulse delivered is:",
    ["$\\frac{F_0 T}{\\pi}$", "$\\frac{2 F_0 T}{\\pi}$", "$\\frac{\\pi F_0 T}{2}$", "$F_0 T$"],
    1,
    "$$J = \\int_0^T F_0 \\sin\\left(\\frac{\\pi t}{T}\\right) dt = F_0 \\left[-\\frac{T}{\\pi}\\cos\\left(\\frac{\\pi t}{T}\\right)\\right]_0^T = \\frac{F_0 T}{\\pi}(-\\cos\\pi + \\cos 0) = \\frac{2F_0 T}{\\pi}$$"
)

# Q54: Parabolic force pulse
add_q(
    "Impulse",
    "A force $F(t) = 12t - 3t^2$ (in N) acts on a $2\\text{ kg}$ particle initially at rest from $t = 0$ to the time when $F$ becomes zero again. The velocity of the particle at this time is:",
    ["$16\\text{ m/s}$", "$32\\text{ m/s}$", "$24\\text{ m/s}$", "$8\\text{ m/s}$"],
    0,
    "$F = 0 \\implies 12t - 3t^2 = 0 \\implies 3t(4 - t) = 0 \\implies t = 4\\text{ s}$.\nImpulse:\n$$J = \\int_0^4 (12t - 3t^2)dt = \\left[6t^2 - t^3\\right]_0^4 = 6(16) - 64 = 96 - 64 = 32\\text{ N}\\cdot\\text{s}$$\nFinal velocity:\n$$v_f = \\frac{J}{m} = \\frac{32}{2} = 16\\text{ m/s}$$"
)

# Q55: Hammer driving a nail
add_q(
    "Impulse",
    "A hammer of mass $1\\text{ kg}$ moving at $10\\text{ m/s}$ strikes a nail and drives it $2\\text{ cm}$ into a wooden block. If the hammer does not bounce back, the average resistive force exerted by the wood is:",
    ["$2500\\text{ N}$", "$2510\\text{ N}$", "$5000\\text{ N}$", "$1250\\text{ N}$"],
    1,
    "Using work-energy theorem on the hammer during penetration $d = 0.02\\text{ m}$:\n$$W_{\\text{net}} = \\Delta K \\implies (mg - \\bar{F})d = 0 - \\frac{1}{2}mv^2$$\n$$\\bar{F}d = \\frac{1}{2}mv^2 + mgd \\implies \\bar{F} = \\frac{mv^2}{2d} + mg$$\n$$\\bar{F} = \\frac{1 \\times 10^2}{2 \\times 0.02} + 1(10) = \\frac{100}{0.04} + 10 = 2500 + 10 = 2510\\text{ N}$$"
)

# Q56: Tennis racket hitting ball
add_q(
    "Impulse",
    "A tennis ball of mass $60\\text{ g}$ arrives at a racket with a horizontal speed of $30\\text{ m/s}$ and returns horizontally in the opposite direction at $40\\text{ m/s}$. The racket is in contact with the ball for $4\\text{ ms}$. The average force applied by the racket on the ball is:",
    ["$1050\\text{ N}$", "$525\\text{ N}$", "$2100\\text{ N}$", "$700\\text{ N}$"],
    0,
    "$$\\Delta p = m(v_f - v_i) = 0.060(40 - (-30)) = 0.060 \\times 70 = 4.2\\text{ N}\\cdot\\text{s}$$\n$$F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t} = \\frac{4.2}{4 \\times 10^{-3}} = 1050\\text{ N}$$"
)

# Q57: Sudden jerk in slack string
add_q(
    "Impulse",
    "Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 3\\text{ kg}$ lying on a smooth horizontal table are connected by a light slack string of length $L$. Block $m_1$ is given a velocity $v_0 = 10\\text{ m/s}$ directly away from $m_2$. The common velocity of the blocks immediately after the string becomes taut is:",
    ["$2\\text{ m/s}$", "$4\\text{ m/s}$", "$6\\text{ m/s}$", "$5\\text{ m/s}$"],
    1,
    "When the string becomes taut, internal impulsive tension acts between the two masses. Total momentum along the string is conserved:\n$$m_1 v_0 = (m_1 + m_2)v \\implies v = \\frac{m_1 v_0}{m_1 + m_2} = \\frac{2 \\times 10}{2 + 3} = \\frac{20}{5} = 4\\text{ m/s}$$"
)

# Q58: Impulse of tension in slack string
add_q(
    "Impulse",
    "In the previous problem, the impulse of the tension in the string during the jerk is:",
    ["$8\\text{ N}\\cdot\\text{s}$", "$12\\text{ N}\\cdot\\text{s}$", "$20\\text{ N}\\cdot\\text{s}$", "$6\\text{ N}\\cdot\\text{s}$"],
    1,
    "The impulse of tension on block $m_2$ is equal to its change in momentum:\n$$J = m_2 v - 0 = 3 \\times 4 = 12\\text{ N}\\cdot\\text{s}$$\n(Equivalently, on $m_1$: $J = m_1(v_0 - v) = 2(10 - 4) = 12\\text{ N}\\cdot\\text{s}$)."
)

# Q59: Loss of mechanical energy during jerk
add_q(
    "Impulse",
    "In the same two-block system ($m_1 = 2\\text{ kg}, m_2 = 3\\text{ kg}, v_0 = 10\\text{ m/s}$), the loss of kinetic energy during the sudden jerk is:",
    ["$40\\text{ J}$", "$60\\text{ J}$", "$100\\text{ J}$", "$80\\text{ J}$"],
    1,
    "Initial kinetic energy: $K_i = \\frac{1}{2}m_1 v_0^2 = \\frac{1}{2}(2)(100) = 100\\text{ J}$.\nFinal kinetic energy: $K_f = \\frac{1}{2}(m_1 + m_2)v^2 = \\frac{1}{2}(5)(4^2) = \\frac{1}{2}(5)(16) = 40\\text{ J}$.\n$$\\Delta K_{\\text{loss}} = 100 - 40 = 60\\text{ J}$$"
)

# Q60: Force varying as F = at + b
add_q(
    "Impulse",
    "A force $F = (4t + 2)\\text{ N}$ acts on a body of mass $2\\text{ kg}$ initially moving at $3\\text{ m/s}$. The speed of the body at $t = 3\\text{ s}$ is:",
    ["$12\\text{ m/s}$", "$15\\text{ m/s}$", "$18\\text{ m/s}$", "$21\\text{ m/s}$"],
    1,
    "Impulse:\n$$J = \\int_0^3 (4t + 2)dt = \\left[2t^2 + 2t\\right]_0^3 = 2(9) + 2(3) = 18 + 6 = 24\\text{ N}\\cdot\\text{s}$$\n$$J = m(v_f - v_i) \\implies 24 = 2(v_f - 3) \\implies v_f - 3 = 12 \\implies v_f = 15\\text{ m/s}$$"
)

# Q61: Impact of hail on windshield
add_q(
    "Impulse",
    "Hailstones of mass $10\\text{ g}$ fall vertically at $20\\text{ m/s}$ onto a flat roof of area $10\\text{ m}^2$ at a rate of 50 hailstones per square meter per second. If the hailstones bounce back elastically with the same speed, the average pressure exerted on the roof is:",
    ["$10\\text{ Pa}$", "$20\\text{ Pa}$", "$40\\text{ Pa}$", "$100\\text{ Pa}$"],
    1,
    "Number of hailstones striking per second per unit area: $n = 50\\text{ s}^{-1}\\text{m}^{-2}$.\nChange in momentum per hailstone: $\\Delta p = 2mv = 2(0.010)(20) = 0.4\\text{ N}\\cdot\\text{s}$.\nPressure $P = n \\Delta p = 50 \\times 0.4 = 20\\text{ Pa}$."
)

# Q62: Impulse on a pendulum bob at bottom
add_q(
    "Impulse",
    "A simple pendulum bob of mass $m$ suspended by a string of length $L$ hangs vertically. A horizontal impulse $J$ is imparted to the bob. The minimum value of $J$ so that the bob completes a full vertical circle is:",
    ["$m\\sqrt{gL}$", "$m\\sqrt{3gL}$", "$m\\sqrt{5gL}$", "$2m\\sqrt{gL}$"],
    2,
    "The minimum velocity at the bottom to complete a vertical circle is $v_{\\text{min}} = \\sqrt{5gL}$.\nSince $J = \\Delta p = m v_{\\text{min}} - 0$:\n$$J = m\\sqrt{5gL}$$"
)

# Q63: Pile driver striking pile
add_q(
    "Impulse",
    "A pile driver of mass $200\\text{ kg}$ falls from a height of $5\\text{ m}$ onto a pile of mass $50\\text{ kg}$ and sticks to it. The common velocity of the driver and pile immediately after collision is: (Take $g = 10\\text{ m/s}^2$)",
    ["$6\\text{ m/s}$", "$8\\text{ m/s}$", "$10\\text{ m/s}$", "$4\\text{ m/s}$"],
    1,
    "Velocity of the driver just before impact:\n$$u = \\sqrt{2gh} = \\sqrt{2(10)(5)} = 10\\text{ m/s}$$\nBy conservation of momentum during impact:\n$$M u = (M + m)v \\implies 200 \\times 10 = (200 + 50)v \\implies 2000 = 250v \\implies v = 8\\text{ m/s}$$"
)

# Q64: Impulse unit equivalence
add_q(
    "Impulse",
    "The SI unit of impulse is equivalent to which of the following?",
    ["$\\text{N}\\cdot\\text{m}$", "$\\text{kg}\\cdot\\text{m/s}$", "$\\text{kg}\\cdot\\text{m/s}^2$", "$\\text{J}\\cdot\\text{s}$"],
    1,
    "$$\\text{Impulse } J = F \\Delta t = \\text{N}\\cdot\\text{s} = (\\text{kg}\\cdot\\text{m/s}^2)\\cdot\\text{s} = \\text{kg}\\cdot\\text{m/s}$$\nThis is identically the unit of linear momentum."
)

# Q65: Force inversely proportional to time
add_q(
    "Impulse",
    "A force given by $F = \\frac{C}{t + 1}$ acts on a particle of mass $m$ from $t = 0$ to $t = t_1$. If the particle starts from rest, its speed at $t_1$ is:",
    ["$\\frac{C}{m}\\ln(t_1 + 1)$", "$\\frac{C}{m(t_1 + 1)}$", "$\\frac{C t_1}{m}$", "$\\frac{C}{m}\\left(\\frac{1}{t_1 + 1} - 1\\right)$"],
    0,
    "$$J = \\int_0^{t_1} \\frac{C}{t + 1} dt = C [\\ln(t + 1)]_0^{t_1} = C \\ln(t_1 + 1)$$\n$$v = \\frac{J}{m} = \\frac{C}{m}\\ln(t_1 + 1)$$"
)

# Q66: Vector impulse on a particle
add_q(
    "Impulse",
    "A particle of mass $1\\text{ kg}$ moving with velocity $\\vec{v}_1 = 3\\hat{i}\\text{ m/s}$ receives an impulse $\\vec{J} = 4\\hat{j}\\text{ N}\\cdot\\text{s}$. The magnitude of its final velocity is:",
    ["$1\\text{ m/s}$", "$5\\text{ m/s}$", "$7\\text{ m/s}$", "$12\\text{ m/s}$"],
    1,
    "$$\\vec{v}_2 = \\vec{v}_1 + \\frac{\\vec{J}}{m} = 3\\hat{i} + \\frac{4\\hat{j}}{1} = 3\\hat{i} + 4\\hat{j}\\text{ m/s}$$\n$$|\\vec{v}_2| = \\sqrt{3^2 + 4^2} = 5\\text{ m/s}$$"
)

# Q67: F-t graph rectangular pulse
add_q(
    "Impulse",
    "A rectangular force pulse of magnitude $F_0 = 100\\text{ N}$ and duration $\\Delta t = 0.05\\text{ s}$ acts on a mass $m = 2.5\\text{ kg}$ moving initially with speed $2\\text{ m/s}$ in the direction of the force. The final speed is:",
    ["$2\\text{ m/s}$", "$4\\text{ m/s}$", "$6\\text{ m/s}$", "$8\\text{ m/s}$"],
    1,
    "Impulse $J = F_0 \\Delta t = 100 \\times 0.05 = 5\\text{ N}\\cdot\\text{s}$.\n$$\\Delta v = \\frac{J}{m} = \\frac{5}{2.5} = 2\\text{ m/s}$$\n$$v_f = v_i + \\Delta v = 2 + 2 = 4\\text{ m/s}$$"
)

# Q68: Force F = k sqrt(t)
add_q(
    "Impulse",
    "A force varying as $F = 6\\sqrt{t}\\text{ N}$ acts on a $1\\text{ kg}$ body from $t = 0$ to $t = 4\\text{ s}$. If the body is initially at rest, its speed at $t = 4\\text{ s}$ is:",
    ["$16\\text{ m/s}$", "$32\\text{ m/s}$", "$24\\text{ m/s}$", "$48\\text{ m/s}$"],
    1,
    "$$J = \\int_0^4 6 t^{1/2} dt = \\left[6 \\times \\frac{2}{3} t^{3/2}\\right]_0^4 = \\left[4 t^{3/2}\\right]_0^4 = 4(4^{3/2}) = 4(8) = 32\\text{ N}\\cdot\\text{s}$$\n$$v = \\frac{J}{m} = \\frac{32}{1} = 32\\text{ m/s}$$"
)

# Q69: Impulsive normal force in collision
add_q(
    "Impulse",
    "A small sphere of mass $m$ slides down a smooth quarter-circular track of radius $R$ and strikes a rigid floor horizontally. If the collision with the floor is perfectly inelastic in the vertical direction, the impulse exerted by the floor on the sphere during the impact is:",
    ["$m\\sqrt{2gR}$", "$m\\sqrt{gR}$", "$2m\\sqrt{gR}$", "$\\frac{1}{2}m\\sqrt{2gR}$"],
    0,
    "Speed of the sphere just before impact is $v = \\sqrt{2gR}$, directed tangentially. At the instant of hitting the horizontal floor, its downward vertical velocity component is $v_y = \\sqrt{2gR}$.\nSince it comes to rest vertically, the impulse of the normal force is:\n$$J_N = m v_y = m\\sqrt{2gR}$$"
)

# Q70: Glass cup falling on carpet vs marble floor
add_q(
    "Impulse",
    "A glass tumbler dropped from a height $h$ onto a hard concrete floor breaks, but when dropped from the same height onto a thick carpet it does not break. This is because:",
    [
        "The change in momentum is less on the carpet.",
        "The impulse is greater on the concrete floor.",
        "The carpet increases the duration of impact, reducing the peak force.",
        "The carpet exerts an upward force before the glass touches it."
    ],
    2,
    "The initial and final velocities are identical in both cases, so the total change in momentum $\\Delta p = \\int F dt$ is the same. The soft carpet deforms and increases the collision time $\\Delta t$, dramatically lowering the peak impact force below the breaking threshold of glass."
)

# Q71: Force vs time triangle pulse with negative area
add_q(
    "Impulse",
    "A particle of mass $1\\text{ kg}$ is subjected to a force that varies with time: from $t = 0$ to $2\\text{ s}$, $F = +10\\text{ N}$; from $t = 2$ to $4\\text{ s}$, $F = -10\\text{ N}$. If the particle was initially moving with velocity $v_0 = 5\\text{ m/s}$, its velocity at $t = 4\\text{ s}$ is:",
    ["$0\\text{ m/s}$", "$5\\text{ m/s}$", "$10\\text{ m/s}$", "$-5\\text{ m/s}$"],
    1,
    "Total impulse:\n$$J = \\int_0^4 F dt = (10 \\times 2) + (-10 \\times 2) = 20 - 20 = 0\\text{ N}\\cdot\\text{s}$$\nSince the net impulse is zero, the momentum is unchanged, so $v(4) = v_0 = 5\\text{ m/s}$."
)

# Q72: Cricket ball caught with glove padding
add_q(
    "Impulse",
    "A wicketkeeper wearing padded gloves catches a ball of mass $0.16\\text{ kg}$ moving at $30\\text{ m/s}$. The padding compresses by $2\\text{ cm}$ as the ball comes to rest. The average force exerted on the keeper's hands is:",
    ["$1800\\text{ N}$", "$3600\\text{ N}$", "$900\\text{ N}$", "$720\\text{ N}$"],
    1,
    "Using work-energy theorem:\n$$F_{\\text{avg}} d = \\frac{1}{2}m v^2 \\implies F_{\\text{avg}}(0.02) = \\frac{1}{2}(0.16)(900) = 72\\text{ J}$$\n$$F_{\\text{avg}} = \\frac{72}{0.02} = 3600\\text{ N}$$"
)

# Q73: Impulse on golf ball
add_q(
    "Impulse",
    "A golf ball of mass $45\\text{ g}$ is struck by a club. The contact lasts for $0.5\\text{ ms}$ and the ball leaves with a speed of $70\\text{ m/s}$. The average force exerted by the club is:",
    ["$3150\\text{ N}$", "$6300\\text{ N}$", "$1575\\text{ N}$", "$7000\\text{ N}$"],
    1,
    "$$\\Delta p = mv = 0.045 \\times 70 = 3.15\\text{ N}\\cdot\\text{s}$$\n$$F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t} = \\frac{3.15}{0.5 \\times 10^{-3}} = 6300\\text{ N}$$"
)

# Q74: Collision with spring bumper
add_q(
    "Impulse",
    "A railway cart of mass $2000\\text{ kg}$ moving at $5\\text{ m/s}$ strikes a spring buffer which brings it to rest momentarily in $0.2\\text{ s}$. The average force exerted by the buffer during this time is:",
    ["$25000\\text{ N}$", "$50000\\text{ N}$", "$10000\\text{ N}$", "$20000\\text{ N}$"],
    1,
    "$$\\Delta p = 2000 \\times 5 = 10000\\text{ kg}\\cdot\\text{m/s}$$\n$$F_{\\text{avg}} = \\frac{10000}{0.2} = 50000\\text{ N}$$"
)

# Q75: Impulse from momentum-time graph
add_q(
    "Impulse",
    "The linear momentum $p$ of a body varies with time as $p(t) = 3t^2 + 4t + 5\\text{ kg}\\cdot\\text{m/s}$. The impulse delivered to the body between $t = 1\\text{ s}$ and $t = 3\\text{ s}$ is:",
    ["$32\\text{ N}\\cdot\\text{s}$", "$44\\text{ N}\\cdot\\text{s}$", "$56\\text{ N}\\cdot\\text{s}$", "$28\\text{ N}\\cdot\\text{s}$"],
    0,
    "By definition, impulse is the change in momentum:\n$$J = p(3) - p(1)$$\n$$p(3) = 3(9) + 4(3) + 5 = 27 + 12 + 5 = 44$$\n$$p(1) = 3(1) + 4(1) + 5 = 12$$\n$$J = 44 - 12 = 32\\text{ N}\\cdot\\text{s}$$"
)

# Q76: Sand hitting scale pan
add_q(
    "Impulse",
    "Sand drops onto a scale pan at the rate of $0.05\\text{ kg/s}$ from a height of $2\\text{ m}$. If the sand comes to rest on impact without bouncing, the force exerted on the pan due to the impact of sand is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$0.313\\text{ N}$", "$0.626\\text{ N}$", "$0.490\\text{ N}$", "$0.980\\text{ N}$"],
    0,
    "Velocity of sand hitting the pan: $v = \\sqrt{2gh} = \\sqrt{2(9.8)(2)} = \\sqrt{39.2} \\approx 6.26\\text{ m/s}$.\nForce due to momentum change:\n$$F = v\\frac{dm}{dt} = 6.26 \\times 0.05 = 0.313\\text{ N}$$"
)

# Q77: Non-perpendicular impact on wall
add_q(
    "Impulse",
    "A particle of mass $m$ strikes a smooth horizontal surface at an angle $\\theta$ with the vertical with speed $v$ and rebounds elastically. The direction of the impulse imparted by the surface is:",
    [
        "Along the incident path.",
        "Vertically upwards.",
        "Horizontally forward.",
        "Along the reflected path."
    ],
    1,
    "Since the surface is smooth, there is no tangential force ($F_x = 0$), so the horizontal velocity component remains unchanged. The vertical velocity component reverses from $-v\\cos\\theta$ to $+v\\cos\\theta$. Therefore, the impulse $\\vec{J} = \\Delta \\vec{p}$ is directed vertically upwards."
)

# Q78: Inelastic collision impulse ratio
add_q(
    "Impulse",
    "A ball of mass $m$ is dropped from height $h$ onto a floor. If the coefficient of restitution is $e$, the ratio of the impulse during the first collision to the impulse if the collision were perfectly elastic is:",
    ["$\\frac{1 + e}{2}$", "$\\frac{1 - e}{2}$", "$e$", "$\\frac{1 + e^2}{2}$"],
    0,
    "Before impact, speed is $u = \\sqrt{2gh}$ downward.\nAfter impact, speed is $v = eu$ upward.\nActual impulse: $J = m(v - (-u)) = mu(1 + e)$.\nFor perfectly elastic collision ($e = 1$): $J_{\\text{elastic}} = 2mu$.\n$$\\frac{J}{J_{\\text{elastic}}} = \\frac{mu(1 + e)}{2mu} = \\frac{1 + e}{2}$$"
)

# Q79: Force pulse F = F0 (1 - t/T)
add_q(
    "Impulse",
    "A triangular force pulse starts at $F_0$ at $t = 0$ and decreases linearly to $0$ at $t = T$. The impulse delivered by this force is:",
    ["$F_0 T$", "$\\frac{1}{2}F_0 T$", "$\\frac{1}{3}F_0 T$", "$2F_0 T$"],
    1,
    "$$J = \\int_0^T F_0\\left(1 - \\frac{t}{T}\\right)dt = F_0\\left[t - \\frac{t^2}{2T}\\right]_0^T = F_0\\left(T - \\frac{T}{2}\\right) = \\frac{1}{2}F_0 T$$"
)

# Q80: Impulse in string jerk with three blocks
add_q(
    "Impulse",
    "Three identical blocks $A$, $B$, and $C$ of mass $m$ each are connected by light slack strings of equal length on a smooth table in a line. Block $A$ is projected with speed $v_0$ away from $B$ and $C$. After both strings become taut, the final speed of all three blocks is:",
    ["$v_0/2$", "$v_0/3$", "$v_0/4$", "$v_0$"],
    1,
    "Total momentum along the line of motion is conserved:\n$$m v_0 = (m + m + m)v_f \\implies 3m v_f = m v_0 \\implies v_f = \\frac{v_0}{3}$$"
)

# Q81: Impulse of friction
add_q(
    "Impulse",
    "A block of mass $2\\text{ kg}$ is sliding on a rough horizontal floor with an initial speed of $8\\text{ m/s}$. If the coefficient of kinetic friction is $\\mu_k = 0.2$, the impulse of the friction force until the block comes to rest is: (Take $g = 10\\text{ m/s}^2$)",
    ["$8\\text{ N}\\cdot\\text{s}$", "$16\\text{ N}\\cdot\\text{s}$", "$32\\text{ N}\\cdot\\text{s}$", "$4\\text{ N}\\cdot\\text{s}$"],
    1,
    "The impulse of friction is equal to the change in momentum of the block:\n$$|J_f| = |\\Delta p| = m(v_0 - 0) = 2 \\times 8 = 16\\text{ N}\\cdot\\text{s}$$"
)

# Q82: Time to stop by friction from impulse
add_q(
    "Impulse",
    "In the previous question, the time taken for the block to come to rest is:",
    ["$2\\text{ s}$", "$4\\text{ s}$", "$6\\text{ s}$", "$8\\text{ s}$"],
    1,
    "Friction force $f_k = \\mu_k mg = 0.2 \\times 2 \\times 10 = 4\\text{ N}$.\n$$J_f = f_k \\Delta t \\implies 16 = 4 \\Delta t \\implies \\Delta t = 4\\text{ s}$$"
)

# Q83: Two opposite impulses on a particle
add_q(
    "Impulse",
    "A body of mass $4\\text{ kg}$ moving at $5\\text{ m/s}$ along $+x$ is given an impulse of $30\\text{ N}\\cdot\\text{s}$ in the $-x$ direction. Its final velocity is:",
    ["$2.5\\text{ m/s}$ along $+x$", "$2.5\\text{ m/s}$ along $-x$", "$5\\text{ m/s}$ along $-x$", "$7.5\\text{ m/s}$ along $-x$"],
    1,
    "Initial momentum: $p_i = 4 \\times (+5) = +20\\text{ kg}\\cdot\\text{m/s}$.\nFinal momentum: $p_f = p_i + J = 20 + (-30) = -10\\text{ kg}\\cdot\\text{m/s}$.\nFinal velocity: $v_f = p_f/m = -10/4 = -2.5\\text{ m/s}$, which is $2.5\\text{ m/s}$ along the $-x$ direction."
)

# Q84: Area under force-displacement vs force-time
add_q(
    "Impulse",
    "The area under the force-displacement ($F-x$) graph and the force-time ($F-t$) graph represent respectively:",
    [
        "Work done and Impulse",
        "Impulse and Work done",
        "Power and Momentum",
        "Kinetic energy and Acceleration"
    ],
    0,
    "$$\\int F dx = W \\quad (\\text{Work done})$$\n$$\\int F dt = J \\quad (\\text{Impulse})$$"
)

# Q85: Bullet embedded in block - impulse on block
add_q(
    "Impulse",
    "A bullet of mass $m = 20\\text{ g}$ moving horizontally at $400\\text{ m/s}$ embeds itself in a wooden block of mass $M = 1.98\\text{ kg}$ initially at rest on a frictionless table. The impulse delivered by the bullet to the block during the embedding process is:",
    ["$4.95\\text{ N}\\cdot\\text{s}$", "$7.92\\text{ N}\\cdot\\text{s}$", "$8.00\\text{ N}\\cdot\\text{s}$", "$3.96\\text{ N}\\cdot\\text{s}$"],
    1,
    "Common velocity after collision:\n$$v = \\frac{m v_0}{m + M} = \\frac{0.020 \\times 400}{0.020 + 1.98} = \\frac{8}{2.0} = 4\\text{ m/s}$$\nImpulse delivered to the block is the change in momentum of the block:\n$$J_{\\text{block}} = M v = 1.98 \\times 4 = 7.92\\text{ N}\\cdot\\text{s}$$"
)

# Q86: Collision of two identical billiard balls
add_q(
    "Impulse",
    "Two identical billiard balls $A$ and $B$ collide head-on elastically. Ball $A$ has initial speed $v_0$ and $B$ is at rest. The impulse received by ball $B$ during the collision is:",
    ["$\\frac{1}{2}m v_0$", "$m v_0$", "$2m v_0$", "$\\frac{1}{4}m v_0$"],
    1,
    "In a head-on elastic collision between identical masses, velocities are exchanged. Ball $A$ comes to rest and ball $B$ acquires speed $v_0$.\nImpulse received by $B$ is:\n$$J_B = m(v_0 - 0) = m v_0$$"
)

# Q87: Impulse on falling drop of mercury
add_q(
    "Impulse",
    "A droplet of liquid of mass $m$ hits a surface with speed $v$ and spreads out into a thin film without rebounding. The impulse delivered to the surface is:",
    ["$mv$", "$2mv$", "$mv/2$", "$0$"],
    0,
    "The droplet comes to rest completely along the normal direction, so $\\Delta p = 0 - (-mv) = mv$. The impulse delivered to the surface is $mv$."
)

# Q88: Jet engine intake impulse
add_q(
    "Impulse",
    "An aircraft engine takes in $50\\text{ kg}$ of air per second at a flight speed of $200\\text{ m/s}$ and expels the combustion gases at $600\\text{ m/s}$ relative to the aircraft. Neglecting fuel mass, the thrust force developed by the engine is:",
    ["$10000\\text{ N}$", "$20000\\text{ N}$", "$30000\\text{ N}$", "$40000\\text{ N}$"],
    1,
    "Thrust is given by:\n$$F = \\frac{dm}{dt}(v_{\\text{exhaust}} - v_{\\text{intake}}) = 50(600 - 200) = 50 \\times 400 = 20000\\text{ N}$$"
)

# Q89: Average force with non-zero rebound angle
add_q(
    "Impulse",
    "A ball of mass $0.2\\text{ kg}$ approaches a wall along the $+x$ axis with speed $10\\text{ m/s}$ and rebounds along the $+y$ axis with speed $10\\text{ m/s}$. The magnitude of the impulse delivered to the ball is:",
    ["$2\\text{ N}\\cdot\\text{s}$", "$2\\sqrt{2}\\text{ N}\\cdot\\text{s}$", "$4\\text{ N}\\cdot\\text{s}$", "$4\\sqrt{2}\\text{ N}\\cdot\\text{s}$"],
    1,
    "$$\\vec{p}_i = 0.2(10\\hat{i}) = 2\\hat{i}\\text{ kg}\\cdot\\text{m/s}$$\n$$\\vec{p}_f = 0.2(10\\hat{j}) = 2\\hat{j}\\text{ kg}\\cdot\\text{m/s}$$\n$$\\vec{J} = \\vec{p}_f - \\vec{p}_i = 2\\hat{j} - 2\\hat{i}\\text{ N}\\cdot\\text{s}$$\n$$|\\vec{J}| = \\sqrt{(-2)^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}\\text{ N}\\cdot\\text{s}$$"
)

# Q90: Impulse from harmonic force
add_q(
    "Impulse",
    "A force $F(t) = 10\\cos(100\\pi t)\\text{ N}$ acts on a body of mass $0.5\\text{ kg}$ from $t = 0$ to $t = \\frac{1}{200}\\text{ s}$. The impulse delivered is:",
    ["$\\frac{1}{10\\pi}\\text{ N}\\cdot\\text{s}$", "$\\frac{1}{5\\pi}\\text{ N}\\cdot\\text{s}$", "$\\frac{1}{\\pi}\\text{ N}\\cdot\\text{s}$", "$\\frac{2}{\\pi}\\text{ N}\\cdot\\text{s}$"],
    0,
    "$$J = \\int_0^{1/200} 10\\cos(100\\pi t) dt = \\left[\\frac{10}{100\\pi}\\sin(100\\pi t)\\right]_0^{1/200}$$\n$$= \\frac{1}{10\\pi}\\left[\\sin\\left(100\\pi \\times \\frac{1}{200}\\right) - \\sin 0\\right] = \\frac{1}{10\\pi}\\sin\\left(\\frac{\\pi}{2}\\right) = \\frac{1}{10\\pi}\\text{ N}\\cdot\\text{s}$$"
)

with open("scripts/lom/lom_batch1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions in scripts/lom/lom_batch1.json")
