# -*- coding: utf-8 -*-
"""
Generate Batch 2 of Laws of Motion:
- Conservation of momentum (45 MCQs)
- Friction (45 MCQs)
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
# SUBTOPIC 3: Conservation of momentum (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Conservation of momentum",
    "A rifle of mass $4\\text{ kg}$ fires a bullet of mass $50\\text{ g}$ with a muzzle velocity of $800\\text{ m/s}$. The recoil velocity of the rifle is:",
    ["$5\\text{ m/s}$", "$10\\text{ m/s}$", "$15\\text{ m/s}$", "$20\\text{ m/s}$"],
    1,
    "By conservation of linear momentum (initial momentum = 0):\n$$M V + m v = 0 \\implies V = -\\frac{m v}{M}$$\n$$V = -\\frac{0.050 \\times 800}{4} = -\\frac{40}{4} = -10\\text{ m/s}$$\nThe magnitude of the recoil velocity is $10\\text{ m/s}$."
)

# Q2
add_q(
    "Conservation of momentum",
    "In the problem of a rifle of mass $M$ firing a bullet of mass $m$, the ratio of the kinetic energy of the bullet to that of the rifle is:",
    ["$M/m$", "$m/M$", "$\\sqrt{M/m}$", "$\\sqrt{m/M}$"],
    0,
    "Since the magnitudes of their momenta are equal ($p_{\\text{bullet}} = p_{\\text{rifle}} = p$):\n$$K = \\frac{p^2}{2m} \\implies \\frac{K_{\\text{bullet}}}{K_{\\text{rifle}}} = \\frac{p^2 / 2m}{p^2 / 2M} = \\frac{M}{m}$$"
)

# Q3
add_q(
    "Conservation of momentum",
    "A shell of mass $M$ is fired with speed $u$ at an angle $\\theta$ to the horizontal. At the highest point of its trajectory, it explodes into two equal fragments. If one fragment retraces its path back to the gun, the velocity of the other fragment immediately after the explosion is:",
    ["$2u\\cos\\theta$", "$3u\\cos\\theta$", "$u\\cos\\theta$", "$4u\\cos\\theta$"],
    1,
    "At the highest point, velocity before explosion is $\\vec{v}_0 = u\\cos\\theta\\hat{i}$.\nTotal initial momentum: $M u\\cos\\theta\\hat{i}$.\nFragment 1 retraces its path, so its horizontal velocity is $-u\\cos\\theta\\hat{i}$.\nBy conservation of momentum:\n$$M u\\cos\\theta\\hat{i} = \\frac{M}{2}(-u\\cos\\theta\\hat{i}) + \\frac{M}{2}\\vec{v}_2$$\n$$u\\cos\\theta = -\\frac{1}{2}u\\cos\\theta + \\frac{1}{2}v_2 \\implies \\frac{3}{2}u\\cos\\theta = \\frac{1}{2}v_2 \\implies v_2 = 3u\\cos\\theta$$"
)

# Q4
add_q(
    "Conservation of momentum",
    "A projectile of mass $m$ is projected with speed $v_0$ at $60^\\circ$ to the horizontal. At the top of its flight, it splits into two fragments of masses $m/3$ and $2m/3$. If the smaller fragment falls vertically downwards with zero initial horizontal speed, the horizontal speed of the larger fragment is:",
    ["$v_0/4$", "$3v_0/4$", "$v_0/2$", "$3v_0/2$"],
    1,
    "Velocity at highest point before explosion is $v_x = v_0\\cos 60^\\circ = v_0/2$.\nInitial momentum: $m(v_0/2)$.\nAfter explosion: smaller fragment has $v_{1x} = 0$.\n$$m\\left(\\frac{v_0}{2}\\right) = \\frac{m}{3}(0) + \\frac{2m}{3}v_{2x} \\implies \\frac{v_0}{2} = \\frac{2}{3}v_{2x} \\implies v_{2x} = \\frac{3}{4}v_0$$"
)

# Q5
add_q(
    "Conservation of momentum",
    "A bomb of mass $16\\text{ kg}$ at rest explodes into three pieces of masses $4\\text{ kg}$, $4\\text{ kg}$, and $8\\text{ kg}$. The two pieces of mass $4\\text{ kg}$ each fly off perpendicularly to each other with a speed of $30\\text{ m/s}$. The speed of the $8\\text{ kg}$ piece is:",
    ["$15\\text{ m/s}$", "$15\\sqrt{2}\\text{ m/s}$", "$30\\text{ m/s}$", "$30\\sqrt{2}\\text{ m/s}$"],
    1,
    "Let the two $4\\text{ kg}$ pieces move along $+x$ and $+y$:\n$$\\vec{p}_1 = 4(30)\\hat{i} = 120\\hat{i}, \\quad \\vec{p}_2 = 4(30)\\hat{j} = 120\\hat{j}$$\nResultant momentum of the two pieces:\n$$|\\vec{p}_{12}| = \\sqrt{120^2 + 120^2} = 120\\sqrt{2}\\text{ kg}\\cdot\\text{m/s}$$\nFor total momentum to remain zero, the $8\\text{ kg}$ piece must have equal and opposite momentum:\n$$p_3 = 8 v_3 = 120\\sqrt{2} \\implies v_3 = \\frac{120\\sqrt{2}}{8} = 15\\sqrt{2}\\text{ m/s}$$"
)

# Q6
add_q(
    "Conservation of momentum",
    "In the previous problem, the direction of the velocity of the $8\\text{ kg}$ piece makes an angle with the direction of motion of either of the $4\\text{ kg}$ pieces equal to:",
    ["$45^\\circ$", "$90^\\circ$", "$135^\\circ$", "$180^\\circ$"],
    2,
    "The resultant of the two perpendicular momenta makes an angle of $45^\\circ$ with each. The third fragment moves in the diametrically opposite direction ($180^\\circ - 45^\\circ = 135^\\circ$)."
)

# Q7
add_q(
    "Conservation of momentum",
    "A man of mass $50\\text{ kg}$ stands at one end of a boat of mass $200\\text{ kg}$ and length $10\\text{ m}$ floating on still water. If the man walks to the other end of the boat, the displacement of the boat relative to the water is:",
    ["$1.5\\text{ m}$", "$2.0\\text{ m}$", "$2.5\\text{ m}$", "$3.0\\text{ m}$"],
    1,
    "Center of mass of the isolated system remains fixed:\n$$m(L - x) - M x = 0 \\implies x = \\frac{m L}{M + m} = \\frac{50 \\times 10}{200 + 50} = \\frac{500}{250} = 2.0\\text{ m}$$"
)

# Q8
add_q(
    "Conservation of momentum",
    "A man of mass $m$ stands on a cart of mass $M$ initially at rest on a frictionless horizontal track. The man jumps off the cart with a horizontal velocity $u$ relative to the cart. The recoil velocity of the cart relative to the ground is:",
    ["$\\frac{m u}{M + m}$", "$\\frac{m u}{M}$", "$\\frac{M u}{M + m}$", "$\\frac{(M+m)u}{M}$"],
    0,
    "Let the velocity of the cart be $-V$. Velocity of the man relative to ground is $u - V$.\n$$m(u - V) + M(-V) = 0 \\implies m u = (M + m)V \\implies V = \\frac{m u}{M + m}$$"
)

# Q9
add_q(
    "Conservation of momentum",
    "A man of mass $m$ stands on a cart of mass $M$ at rest. If the man jumps off with horizontal velocity $u$ relative to the ground, the velocity of the cart is:",
    ["$\\frac{m u}{M}$", "$\\frac{m u}{M + m}$", "$\\frac{M u}{m}$", "$u$"],
    0,
    "Here $u$ is relative to the ground. By conservation of momentum:\n$$m u + M V = 0 \\implies V = -\\frac{m u}{M}$$\nThe speed of the cart is $\\frac{mu}{M}$."
)

# Q10
add_q(
    "Conservation of momentum",
    "Two men each of mass $m$ stand on a cart of mass $M$ initially at rest. They can jump off horizontally with speed $u$ relative to the cart. If they jump simultaneously, the cart attains speed $V_1$. If they jump one after the other, the cart attains speed $V_2$. Which of the following is correct?",
    ["$V_1 > V_2$", "$V_1 = V_2$", "$V_1 < V_2$", "Depends on the values of $M$ and $m$"],
    2,
    "Sequential jumping yields:\n$$V_2 = \\frac{m u}{M + 2m} + \\frac{m u}{M + m} > \\frac{2m u}{M + 2m} = V_1$$\nTherefore, $V_1 < V_2$."
)

# Q11
add_q(
    "Conservation of momentum",
    "Two blocks of masses $m_1 = 1\\text{ kg}$ and $m_2 = 4\\text{ kg}$ hold a compressed spring of spring constant $k = 100\\text{ N/m}$ between them on a smooth horizontal floor. The spring is compressed by $0.2\\text{ m}$ and released. The speed of the $1\\text{ kg}$ block as the spring regains its natural length is:",
    ["$1.6\\text{ m/s}$", "$1.79\\text{ m/s}$", "$0.89\\text{ m/s}$", "$2.0\\text{ m/s}$"],
    1,
    "By conservation of momentum: $m_1 v_1 = m_2 v_2 \\implies v_2 = v_1/4$.\nTotal energy $U = \\frac{1}{2}(100)(0.04) = 2.0\\text{ J}$.\n$$\\frac{1}{2}(1)v_1^2 + \\frac{1}{2}(4)(v_1/4)^2 = 2.0 \\implies \\frac{5}{8}v_1^2 = 2.0 \\implies v_1 = \\sqrt{3.2} \\approx 1.79\\text{ m/s}$$"
)

# Q12
add_q(
    "Conservation of momentum",
    "A stationary radium nucleus $^{226}\\text{Ra}$ decays by emitting an $\\alpha$-particle ($^4\\text{He}$) and a radon daughter nucleus ($^{222}\\text{Rn}$). The total disintegration energy is $Q = 4.87\\text{ MeV}$. The kinetic energy of the emitted $\\alpha$-particle is:",
    ["$4.78\\text{ MeV}$", "$4.87\\text{ MeV}$", "$2.44\\text{ MeV}$", "$0.09\\text{ MeV}$"],
    0,
    "$$K_\\alpha = Q \\left(\\frac{m_{\\text{Rn}}}{m_{\\text{Rn}} + m_\\alpha}\\right) = 4.87 \\times \\frac{222}{226} \\approx 4.78\\text{ MeV}$$"
)

# Q13
add_q(
    "Conservation of momentum",
    "A stationary particle explodes into two particles of masses $m_1$ and $m_2$ which move apart with speeds $v_1$ and $v_2$. The ratio of their de Broglie wavelengths $\\lambda_1/\\lambda_2$ is:",
    ["$1$", "$m_1/m_2$", "$m_2/m_1$", "$\\sqrt{m_2/m_1}$"],
    0,
    "By conservation of momentum, $|\\vec{p}_1| = |\\vec{p}_2| = p$. Since $\\lambda = h/p$, the ratio is identically $1$."
)

# Q14
add_q(
    "Conservation of momentum",
    "An open railway car of mass $M$ moves along a straight frictionless track with speed $v_0$. Rain begins to fall vertically into the car at a rate $\\lambda = dm/dt$. The speed of the car after collecting a mass $m$ of rainwater is:",
    ["$v_0$", "$\\frac{M v_0}{M + m}$", "$\\frac{(M + m)v_0}{M}$", "$v_0 e^{-\\lambda t/M}$"],
    1,
    "No external horizontal force acts on the car. Horizontal momentum is conserved:\n$$M v_0 = (M + m)v \\implies v = \\frac{M v_0}{M + m}$$"
)

# Q15
add_q(
    "Conservation of momentum",
    "In the previous setup, if a hole is opened in the bottom of the water-filled cart so that water leaks out vertically downward relative to the cart, the speed of the cart will:",
    [
        "Increase because mass decreases.",
        "Decrease due to drag.",
        "Remain unchanged.",
        "Increase first and then decrease."
    ],
    2,
    "Leaking water leaves with the horizontal velocity of the cart, carrying away its own momentum. No horizontal reaction acts on the cart, so the speed of the cart remains unchanged."
)

# Q16
add_q(
    "Conservation of momentum",
    "A bullet of mass $m = 10\\text{ g}$ is fired horizontally into a wooden block of mass $M = 990\\text{ g}$ suspended by a light vertical cord of length $1\\text{ m}$. The block and bullet together swing up through a maximum vertical height of $0.2\\text{ m}$. The initial speed of the bullet was: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$100\\text{ m/s}$", "$198\\text{ m/s}$", "$200\\text{ m/s}$", "$140\\text{ m/s}$"],
    1,
    "Common speed $V = \\sqrt{2gh} = \\sqrt{2(9.8)(0.2)} = 1.98\\text{ m/s}$.\nBy momentum conservation:\n$$m v = (m + M)V \\implies 0.010 v = 1.0(1.98) \\implies v = 198\\text{ m/s}$$"
)

# Q17
add_q(
    "Conservation of momentum",
    "A plank of mass $M = 80\\text{ kg}$ and length $L = 6\\text{ m}$ lies on smooth ice. A boy of mass $m = 40\\text{ kg}$ walks from one end of the plank to the other. The distance moved by the boy relative to the ice is:",
    ["$2\\text{ m}$", "$4\\text{ m}$", "$3\\text{ m}$", "$5\\text{ m}$"],
    1,
    "$$x_b\\left(1 + \\frac{m}{M}\\right) = L \\implies x_b\\left(1 + \\frac{40}{80}\\right) = 6 \\implies 1.5 x_b = 6 \\implies x_b = 4\\text{ m}$$"
)

# Q18
add_q(
    "Conservation of momentum",
    "A railway flatcar of mass $M$ with a mounted cannon of mass $m_c$ is at rest on a frictionless horizontal track. The cannon fires a shell of mass $m_s$ with a muzzle velocity $u$ relative to the barrel at an angle $\\theta$ to the horizontal. The recoil speed of the flatcar is:",
    ["$\\frac{m_s u\\cos\\theta}{M + m_c + m_s}$", "$\\frac{m_s u\\cos\\theta}{M + m_c}$", "$\\frac{m_s u}{M + m_c + m_s}$", "$\\frac{(M+m_c)u\\cos\\theta}{m_s}$"],
    0,
    "Relative to barrel, shell speed is $u\\cos\\theta$. Relative to ground, shell horizontal velocity is $u\\cos\\theta - V$.\n$$(M + m_c)(-V) + m_s(u\\cos\\theta - V) = 0 \\implies V = \\frac{m_s u\\cos\\theta}{M + m_c + m_s}$$"
)

# Q19
add_q(
    "Conservation of momentum",
    "A bullet of mass $m$ travelling horizontally at speed $v$ passes clean through a wooden block of mass $M$ initially at rest on a frictionless floor. The bullet emerges with speed $v/3$. The velocity acquired by the block is:",
    ["$\\frac{m v}{3M}$", "$\\frac{2m v}{3M}$", "$\\frac{m v}{M}$", "$\\frac{2M v}{3m}$"],
    1,
    "$$m v = m(v/3) + M V \\implies M V = \\frac{2}{3}m v \\implies V = \\frac{2m v}{3M}$$"
)

# Q20
add_q(
    "Conservation of momentum",
    "A stationary body explodes into three fragments of masses $m_1$, $m_2$, and $m_3$ which fly apart with equal speeds in directions mutually separated by $120^\\circ$ in a plane. The relationship between their masses is:",
    ["$m_1 = m_2 = m_3$", "$m_1 + m_2 = m_3$", "$m_1^2 + m_2^2 = m_3^2$", "$m_1 = 2m_2 = 3m_3$"],
    0,
    "For three vectors at $120^\\circ$ to sum to zero with equal speeds $v$, their mass coefficients must satisfy $m_1 = m_2 = m_3$."
)

# Q21
add_q(
    "Conservation of momentum",
    "For an isolated system of particles with no external forces acting on it, which of the following quantities is strictly conserved?",
    [
        "Total kinetic energy only",
        "Total linear momentum only",
        "Total mechanical energy only",
        "Both total linear momentum and center of mass velocity"
    ],
    3,
    "Since $\\vec{F}_{\\text{ext}} = 0$, linear momentum $\\vec{P} = \\sum m_i \\vec{v}_i$ is constant, and $\\vec{v}_{\\text{cm}} = \\vec{P}/M_{\\text{total}}$ is also constant."
)

# Q22
add_q(
    "Conservation of momentum",
    "A small block of mass $m$ is released from the top of a smooth curved wedge of mass $M$ and height $h$ resting on a smooth horizontal table. When the block reaches the bottom and slides horizontally, its speed relative to the table is:",
    ["$\\sqrt{\\frac{2Mgh}{M + m}}$", "$\\sqrt{\\frac{2mgh}{M + m}}$", "$\\sqrt{2gh}$", "$\\sqrt{\\frac{2Mgh}{m}}$"],
    0,
    "Conserving horizontal momentum: $M V = m v \\implies V = (m/M)v$.\nConserving total mechanical energy:\n$$mgh = \\frac{1}{2}m v^2 + \\frac{1}{2}M\\left(\\frac{m}{M}v\\right)^2 = \\frac{1}{2}m v^2\\left(\\frac{M + m}{M}\\right) \\implies v = \\sqrt{\\frac{2Mgh}{M + m}}$$"
)

# Q23
add_q(
    "Conservation of momentum",
    "In the previous problem, the speed of the wedge $M$ when the block leaves horizontally is:",
    ["$\\sqrt{\\frac{2m^2 gh}{M(M + m)}}$", "$\\sqrt{\\frac{2M gh}{M + m}}$", "$\\frac{m}{M}\\sqrt{2gh}$", "$\\sqrt{\\frac{2m gh}{M}}$"],
    0,
    "$$V = \\frac{m}{M}v = \\frac{m}{M}\\sqrt{\\frac{2Mgh}{M+m}} = \\sqrt{\\frac{2m^2 gh}{M(M+m)}}$$"
)

# Q24
add_q(
    "Conservation of momentum",
    "A body of mass $2\\text{ kg}$ moving at $6\\text{ m/s}$ collides with another body of mass $4\\text{ kg}$ moving in the same direction at $3\\text{ m/s}$. If they stick together after collision, the common velocity is:",
    ["$4\\text{ m/s}$", "$4.5\\text{ m/s}$", "$5\\text{ m/s}$", "$3.5\\text{ m/s}$"],
    0,
    "$$m_1 v_1 + m_2 v_2 = (m_1 + m_2)V \\implies 2(6) + 4(3) = 6V \\implies 24 = 6V \\implies V = 4\\text{ m/s}$$"
)

# Q25
add_q(
    "Conservation of momentum",
    "In the previous problem ($2\\text{ kg}$ at $6\\text{ m/s}$ and $4\\text{ kg}$ at $3\\text{ m/s}$ sticking together), the loss of kinetic energy during the collision is:",
    ["$6\\text{ J}$", "$12\\text{ J}$", "$18\\text{ J}$", "$24\\text{ J}$"],
    0,
    "$$K_i = \\frac{1}{2}(2)(36) + \\frac{1}{2}(4)(9) = 36 + 18 = 54\\text{ J}$$\n$$K_f = \\frac{1}{2}(6)(16) = 48\\text{ J} \\implies \\Delta K = 54 - 48 = 6\\text{ J}$$"
)

# Q26
add_q(
    "Conservation of momentum",
    "A projectile of mass $3m$ explodes into three equal fragments at the highest point of its trajectory. One fragment flies vertically upwards with speed $v_0$ and another flies vertically downwards with speed $v_0$. If the speed of the projectile just before the explosion was $u$, the velocity of the third fragment immediately after explosion is:",
    ["$u$", "$3u$", "$2u$", "$\\sqrt{u^2 + v_0^2}$"],
    1,
    "Before explosion: $\\vec{P}_i = (3m)u\\hat{i}$.\nAfter explosion: $\\vec{P}_f = m(v_0\\hat{j}) + m(-v_0\\hat{j}) + m\\vec{v}_3 = m\\vec{v}_3$.\nBy conservation of momentum:\n$$3m u\\hat{i} = m\\vec{v}_3 \\implies \\vec{v}_3 = 3u\\hat{i}$$\nThus, the speed of the third fragment is $3u$ horizontally forward."
)

# Q27
add_q(
    "Conservation of momentum",
    "Two astronauts of masses $60\\text{ kg}$ and $90\\text{ kg}$ are initially at rest in space separated by a distance of $15\\text{ m}$ holding a light rope. The $60\\text{ kg}$ astronaut pulls the rope until they meet. The distance moved by the $60\\text{ kg}$ astronaut before they collide is:",
    ["$6\\text{ m}$", "$9\\text{ m}$", "$7.5\\text{ m}$", "$10\\text{ m}$"],
    1,
    "Since no external force acts, the center of mass remains stationary:\nTaking the initial position of the $60\\text{ kg}$ astronaut as origin:\n$$x_{\\text{cm}} = \\frac{60(0) + 90(15)}{60 + 90} = \\frac{1350}{150} = 9\\text{ m}$$\nThey collide at the center of mass, so the $60\\text{ kg}$ astronaut moves $9\\text{ m}$."
)

# Q28
add_q(
    "Conservation of momentum",
    "A bullet of mass $m$ travelling with speed $v$ hits a block of mass $M$ suspended by a string and gets embedded in it. The fractional loss of kinetic energy during the collision is:",
    ["$\\frac{M}{M + m}$", "$\\frac{m}{M + m}$", "$\\frac{M - m}{M + m}$", "$\\frac{m}{M}$"],
    0,
    "Initial kinetic energy $K_i = \\frac{1}{2}mv^2$.\nFinal kinetic energy $K_f = \\frac{1}{2}(M + m)V^2 = \\frac{1}{2}(M + m)\\left(\\frac{mv}{M + m}\\right)^2 = \\frac{1}{2}\\frac{m^2 v^2}{M + m} = K_i\\left(\\frac{m}{M + m}\\right)$.\n$$\\text{Fractional loss } = \\frac{K_i - K_f}{K_i} = 1 - \\frac{m}{M + m} = \\frac{M}{M + m}$$"
)

# Q29
add_q(
    "Conservation of momentum",
    "A particle of mass $m$ moving with velocity $v\\hat{i}$ collides elastically with a stationary particle of mass $2m$. The velocity of the incident particle after the collision is:",
    ["$-v/3\\hat{i}$", "$v/3\\hat{i}$", "$-v/2\\hat{i}$", "$2v/3\\hat{i}$"],
    0,
    "For 1D elastic collision:\n$$v_1 = \\frac{m_1 - m_2}{m_1 + m_2}u_1 = \\frac{m - 2m}{m + 2m}v = -\\frac{1}{3}v$$\nThus, velocity is $-\\frac{v}{3}\\hat{i}$."
)

# Q30
add_q(
    "Conservation of momentum",
    "In the previous elastic collision, the velocity of the $2m$ particle after collision is:",
    ["$2v/3\\hat{i}$", "$v/3\\hat{i}$", "$4v/3\\hat{i}$", "$v/2\\hat{i}$"],
    0,
    "$$v_2 = \\frac{2m_1}{m_1 + m_2}u_1 = \\frac{2m}{3m}v = \\frac{2}{3}v\\hat{i}$$"
)

# Q31
add_q(
    "Conservation of momentum",
    "Two skaters $A$ ($50\\text{ kg}$) and $B$ ($70\\text{ kg}$) stand facing each other on frictionless ice. Skater $A$ pushes skater $B$ with a constant force of $35\\text{ N}$ for $2\\text{ s}$. The speed of skater $A$ at the end of $2\\text{ s}$ is:",
    ["$1.0\\text{ m/s}$", "$1.4\\text{ m/s}$", "$2.0\\text{ m/s}$", "$0.7\\text{ m/s}$"],
    1,
    "By Newton's 3rd law, skater $A$ experiences an equal impulse of $35 \\times 2 = 70\\text{ N}\\cdot\\text{s}$.\n$$v_A = \\frac{J}{m_A} = \\frac{70}{50} = 1.4\\text{ m/s}$$"
)

# Q32
add_q(
    "Conservation of momentum",
    "A cannon of mass $1000\\text{ kg}$ on horizontal rails recoils against a spring bumper of stiffness $k = 40000\\text{ N/m}$. If the cannon fires a $10\\text{ kg}$ shell at $400\\text{ m/s}$, the maximum compression of the spring is:",
    ["$0.5\\text{ m}$", "$1.0\\text{ m}$", "$0.2\\text{ m}$", "$2.0\\text{ m}$"],
    1,
    "Recoil speed of cannon: $M V = m v \\implies 1000 V = 10(400) = 4000 \\implies V = 4\\text{ m/s}$.\nEnergy stored in spring: $\\frac{1}{2}k x^2 = \\frac{1}{2}M V^2$:\n$$\\frac{1}{2}(40000)x^2 = \\frac{1}{2}(1000)(16) \\implies 40000 x^2 = 16000 \\implies x^2 = \\frac{16}{40} = 0.4 \\implies x \\approx 0.63\\text{ m}$$\nWait, let's pick clean numbers: $M = 1000\\text{ kg}, m = 10\\text{ kg}, v = 200\\text{ m/s} \\implies V = 2\\text{ m/s}$. $\\frac{1}{2}(40000)x^2 = \\frac{1}{2}(1000)(4) = 2000 \\implies x^2 = 2000/20000 = 0.1$. Let's adjust to $k = 16000\\text{ N/m}$, $V = 4\\text{ m/s} \\implies 1/2(16000)x^2 = 1/2(1000)(16) \\implies 16000 x^2 = 16000 \\implies x = 1.0\\text{ m}$."
)
# Update Q32 with clean values:
questions[-1]["question"] = "A cannon of mass $1000\\text{ kg}$ on horizontal rails recoils against a spring bumper of stiffness $k = 16000\\text{ N/m}$. If the cannon fires a $10\\text{ kg}$ shell with a muzzle velocity of $400\\text{ m/s}$, the maximum compression of the spring bumper is:"
questions[-1]["options"] = ["$0.5\\text{ m}$", "$1.0\\text{ m}$", "$1.5\\text{ m}$", "$2.0\\text{ m}$"]
questions[-1]["correctAnswer"] = 1
questions[-1]["explanation"] = "Recoil speed of cannon:\n$$V = \\frac{m v}{M} = \\frac{10 \\times 400}{1000} = 4\\text{ m/s}$$\nKinetic energy of cannon is converted into spring elastic potential energy:\n$$\\frac{1}{2}M V^2 = \\frac{1}{2}k x^2 \\implies 1000(16) = 16000 x^2 \\implies 16000 = 16000 x^2 \\implies x = 1.0\\text{ m}$$"

# Q33
add_q(
    "Conservation of momentum",
    "A boat of mass $100\\text{ kg}$ and length $4\\text{ m}$ is floating in still water. Two persons $A$ ($40\\text{ kg}$) and $B$ ($60\\text{ kg}$) are standing at the opposite ends. If they exchange their positions, the displacement of the boat is:",
    ["$0.4\\text{ m}$", "$0.8\\text{ m}$", "$0.2\\text{ m}$", "$0.5\\text{ m}$"],
    0,
    "Let origin be at $A$'s initial end. Initial center of mass:\n$$x_{\\text{cm},i} = \\frac{40(0) + 100(2) + 60(4)}{40 + 100 + 60} = \\frac{200 + 240}{200} = \\frac{440}{200} = 2.2\\text{ m}$$\nWhen they exchange positions, new CM relative to the boat:\n$$x_{\\text{cm},f} = \\frac{60(0) + 100(2) + 40(4)}{200} = \\frac{200 + 160}{200} = \\frac{360}{200} = 1.8\\text{ m}$$\nShift of boat relative to water: $\\Delta x = x_{\\text{cm},i} - x_{\\text{cm},f} = 2.2 - 1.8 = 0.4\\text{ m}$."
)

# Q34
add_q(
    "Conservation of momentum",
    "A bomb explodes into two pieces of masses in the ratio $1:2$. The ratio of the kinetic energies of the lighter piece to the heavier piece is:",
    ["$1:2$", "$2:1$", "$1:4$", "$4:1$"],
    1,
    "Since momenta are equal in magnitude ($p_1 = p_2$):\n$$K = \\frac{p^2}{2m} \\implies \\frac{K_1}{K_2} = \\frac{m_2}{m_1} = \\frac{2}{1}$$"
)

# Q35
add_q(
    "Conservation of momentum",
    "A bullet of mass $m$ strikes a pendulum bob of mass $M$ with speed $v_0$ and gets embedded. The minimum speed $v_0$ for the pendulum of length $L$ to swing through a full vertical circle is:",
    ["$\\frac{M+m}{m}\\sqrt{5gL}$", "$\\frac{m}{M+m}\\sqrt{5gL}$", "$\\sqrt{5gL}$", "$\\frac{M+m}{m}\\sqrt{2gL}$"],
    0,
    "Minimum speed of the bob at the bottom to loop the loop is $V = \\sqrt{5gL}$.\nBy conservation of momentum: $m v_0 = (M + m)V \\implies v_0 = \\frac{M+m}{m}\\sqrt{5gL}$."
)

# Q36
add_q(
    "Conservation of momentum",
    "A bullet of mass $10\\text{ g}$ moving at $200\\text{ m/s}$ hits a block of mass $2\\text{ kg}$ attached to a horizontal spring of force constant $k = 50\\text{ N/m}$ on a frictionless surface and stays inside it. The amplitude of the resulting simple harmonic motion is:",
    ["$0.14\\text{ m}$", "$0.20\\text{ m}$", "$0.28\\text{ m}$", "$0.10\\text{ m}$"],
    1,
    "Velocity after collision:\n$$V = \\frac{m v_0}{M + m} \\approx \\frac{0.010 \\times 200}{2.01} \\approx \\frac{2.0}{2.0} = 1.0\\text{ m/s}$$\nUsing conservation of energy for the spring-mass system:\n$$\\frac{1}{2}(M + m)V^2 = \\frac{1}{2}k A^2 \\implies A = V\\sqrt{\\frac{M + m}{k}} = 1.0 \\times \\sqrt{\\frac{2}{50}} = \\sqrt{0.04} = 0.20\\text{ m}$$"
)

# Q37
add_q(
    "Conservation of momentum",
    "A boy of mass $40\\text{ kg}$ running at $5\\text{ m/s}$ jumps onto a stationary skateboard of mass $10\\text{ kg}$. The final speed of the boy on the skateboard is:",
    ["$4\\text{ m/s}$", "$5\\text{ m/s}$", "$2\\text{ m/s}$", "$2.5\\text{ m/s}$"],
    0,
    "$$m v = (m + M)V \\implies 40(5) = (40 + 10)V \\implies 200 = 50V \\implies V = 4\\text{ m/s}$$"
)

# Q38
add_q(
    "Conservation of momentum",
    "A block of mass $m$ slides down a smooth wedge of mass $M$ which rests on a frictionless horizontal table. If the horizontal component of displacement of the block relative to the wedge is $L$, the distance moved by the wedge relative to the table is:",
    ["$\\frac{m L}{M + m}$", "$\\frac{M L}{M + m}$", "$\\frac{m L}{M}$", "$L$"],
    0,
    "No external horizontal force acts on the system, so the center of mass has zero horizontal displacement:\n$$m(L - x) - M x = 0 \\implies x = \\frac{m L}{M + m}$$"
)

# Q39
add_q(
    "Conservation of momentum",
    "In a chemical rocket in gravity-free space, what fraction of its initial mass $M_0$ must be consumed as propellant so that the rocket reaches a final speed equal to its exhaust speed $u$?",
    ["$1 - \\frac{1}{e}$", "$\\frac{1}{e}$", "$1 - e$", "$e - 1$"],
    0,
    "$$v = u \\ln\\left(\\frac{M_0}{M}\\right) \\implies u = u \\ln\\left(\\frac{M_0}{M}\\right) \\implies \\ln\\left(\\frac{M_0}{M}\\right) = 1 \\implies \\frac{M_0}{M} = e \\implies M = \\frac{M_0}{e}$$\nPropellant consumed: $\\Delta M = M_0 - M = M_0\\left(1 - \\frac{1}{e}\\right)$."
)

# Q40
add_q(
    "Conservation of momentum",
    "Two spheres $A$ and $B$ of masses $m$ and $2m$ moving in opposite directions with speeds $2v$ and $v$ respectively undergo a head-on elastic collision. Their velocities after the collision are:",
    ["$-2v, v$", "$0, 0$", "$-v, v/2$", "$-2v/3, 4v/3$"],
    0,
    "Let direction of $A$ be $+x$, so $u_1 = +2v$ and $u_2 = -v$.\n$$v_1 = \\frac{m - 2m}{3m}(2v) + \\frac{2(2m)}{3m}(-v) = -\\frac{2}{3}v - \\frac{4}{3}v = -2v$$\n$$v_2 = \\frac{2m}{3m}(2v) + \\frac{2m - m}{3m}(-v) = \\frac{4}{3}v - \\frac{1}{3}v = +v$$\nThey simply reverse their velocities!"
)

# Q41
add_q(
    "Conservation of momentum",
    "A body of mass $M$ at rest splits into two pieces of masses $m_1$ and $m_2$. The ratio of their velocities $v_1/v_2$ is:",
    ["$-m_2/m_1$", "$-m_1/m_2$", "$m_2/m_1$", "$\\sqrt{m_2/m_1}$"],
    0,
    "$$m_1 v_1 + m_2 v_2 = 0 \\implies \\frac{v_1}{v_2} = -\\frac{m_2}{m_1}$$"
)

# Q42
add_q(
    "Conservation of momentum",
    "In an oblique elastic collision between two identical smooth spheres where one is initially at rest, the angle between their velocity vectors after the collision is:",
    ["$45^\\circ$", "$60^\\circ$", "$90^\\circ$", "$180^\\circ$"],
    2,
    "Conservation of momentum: $\\vec{u}_1 = \\vec{v}_1 + \\vec{v}_2 \\implies u_1^2 = v_1^2 + v_2^2 + 2\\vec{v}_1\\cdot\\vec{v}_2$.\nConservation of kinetic energy: $u_1^2 = v_1^2 + v_2^2$.\nComparing gives $\\vec{v}_1 \\cdot \\vec{v}_2 = 0$, meaning they separate at $90^\\circ$."
)

# Q43
add_q(
    "Conservation of momentum",
    "A machine gun fires 360 bullets per minute, each of mass $5\\text{ g}$ with a velocity of $600\\text{ m/s}$. The power developed by the gun is:",
    ["$5.4\\text{ kW}$", "$10.8\\text{ kW}$", "$2.7\\text{ kW}$", "$1.8\\text{ kW}$"],
    0,
    "Rate of bullets $n = 360/60 = 6\\text{ bullets/s}$.\nKinetic energy per bullet $K = \\frac{1}{2}mv^2 = \\frac{1}{2}(0.005)(360000) = 900\\text{ J}$.\n$$\\text{Power } P = n K = 6 \\times 900 = 5400\\text{ W} = 5.4\\text{ kW}$$"
)

# Q44
add_q(
    "Conservation of momentum",
    "A bomb at rest explodes into many fragments. The trajectory of the center of mass of all the fragments:",
    [
        "Follows the heaviest fragment.",
        "Remains at the original point of rest.",
        "Moves in the direction of the fastest fragment.",
        "Expands outwards in a sphere."
    ],
    1,
    "Since the explosion is caused entirely by internal forces and no external force acts, the center of mass of the fragments remains stationary at the explosion point."
)

# Q45
add_q(
    "Conservation of momentum",
    "A shell fired from a gun follows a parabolic path. In flight, it explodes into fragments. The center of mass of all the fragments:",
    [
        "Continues along the original parabolic path until the first fragment hits the ground.",
        "Comes to rest immediately.",
        "Moves vertically downwards.",
        "Deviates towards the heavier fragment."
    ],
    0,
    "Since the explosion forces are internal, the only external force is gravity. Therefore, the center of mass continues to move along the original parabolic trajectory until external forces change (e.g. fragments hitting the ground)."
)


# ==============================================================================
# SUBTOPIC 4: Friction (45 Questions)
# ==============================================================================

# Q46
add_q(
    "Friction",
    "When a person walks forward on a horizontal road, the direction of the frictional force exerted by the road on the person is:",
    [
        "In the backward direction.",
        "In the forward direction.",
        "Perpendicular to the direction of motion.",
        "Zero."
    ],
    1,
    "To walk forward, the person pushes the ground backward with their feet. By Newton's third law, the static friction exerted by the ground on the feet acts in the forward direction, which accelerates the person forward."
)

# Q47
add_q(
    "Friction",
    "A block of mass $5\\text{ kg}$ rests on a rough horizontal floor with coefficients of friction $\\mu_s = 0.4$ and $\\mu_k = 0.3$. A horizontal force of $15\\text{ N}$ is applied to the block. The frictional force acting on the block is: (Take $g = 10\\text{ m/s}^2$)",
    ["$15\\text{ N}$", "$20\\text{ N}$", "$19.6\\text{ N}$", "$0\\text{ N}$"],
    0,
    "Maximum limiting static friction:\n$$f_{s,\\text{max}} = \\mu_s N = \\mu_s mg = 0.4 \\times 5 \\times 10 = 20\\text{ N}$$\nSince applied force $F = 15\\text{ N} < f_{s,\\text{max}}$, the block does not move. Static friction adjusts itself to equal the applied force, so $f = 15\\text{ N}$."
)

# Q48
add_q(
    "Friction",
    "For the block in the previous question, if the applied horizontal force is increased to $25\\text{ N}$, the frictional force acting on the block and its acceleration are respectively:",
    ["$15\\text{ N}, 2\\text{ m/s}^2$", "$20\\text{ N}, 1\\text{ m/s}^2$", "$15\\text{ N}, 1.5\\text{ m/s}^2$", "$25\\text{ N}, 0\\text{ m/s}^2$"],
    0,
    "Since $F = 25\\text{ N} > f_{s,\\text{max}} = 20\\text{ N}$, the block slides. The friction acting is kinetic friction:\n$$f_k = \\mu_k mg = 0.3 \\times 5 \\times 10 = 15\\text{ N}$$\n$$a = \\frac{F - f_k}{m} = \\frac{25 - 15}{5} = 2\\text{ m/s}^2$$"
)

# Q49
add_q(
    "Friction",
    "A block of mass $m$ rests on a rough horizontal floor with coefficient of friction $\\mu$. The minimum force $F$ required to pull the block across the floor and the angle $\\theta$ it must make with the horizontal are:",
    [
        "$\\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$ at $\\theta = \\tan^{-1}\\mu$",
        "$\\mu mg$ at $\\theta = 0$",
        "$\\frac{mg}{\\sqrt{1 + \\mu^2}}$ at $\\theta = \\tan^{-1}(1/\\mu)$",
        "$\\frac{\\mu mg}{1 + \\mu}$ at $\\theta = 45^\\circ$"
    ],
    0,
    "For pulling force $F$ at angle $\\theta$:\n$$F = \\frac{\\mu mg}{\\cos\\theta + \\mu\\sin\\theta}$$\nMinimizing $F$ gives $F_{\\text{min}} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$ when $\\tan\\theta = \\mu$."
)

# Q50
add_q(
    "Friction",
    "It is easier to pull a heavy lawn roller than to push it because:",
    [
        "Pulling decreases the coefficient of friction.",
        "Pulling provides a vertical upward component that decreases the normal force, hence reducing friction.",
        "Pushing increases the weight of the roller.",
        "Pulling changes kinetic friction into rolling friction."
    ],
    1,
    "When pulling at angle $\\theta$, $N = mg - F\\sin\\theta$, reducing friction. When pushing, $N = mg + F\\sin\\theta$, increasing friction."
)

# Q51
add_q(
    "Friction",
    "A body takes $n$ times as much time to slide down a rough inclined plane of inclination $\\theta$ as it takes to slide down an identical smooth inclined plane. The coefficient of friction between the body and the rough plane is:",
    ["$\\left(1 - \\frac{1}{n^2}\\right)\\tan\\theta$", "$\\left(1 - \\frac{1}{n}\\right)\\tan\\theta$", "$\\left(1 + \\frac{1}{n^2}\\right)\\tan\\theta$", "$\\frac{\\tan\\theta}{n^2}$"],
    0,
    "$$t = \\sqrt{2s/a} \\implies \\frac{a_{\\text{smooth}}}{a_{\\text{rough}}} = n^2$$\n$$\\frac{g\\sin\\theta}{g(\\sin\\theta - \\mu\\cos\\theta)} = n^2 \\implies \\mu = \\left(1 - \\frac{1}{n^2}\\right)\\tan\\theta$$"
)

# Q52
add_q(
    "Friction",
    "A block takes twice as long to slide down a $45^\\circ$ rough inclined plane as it takes to slide down a $45^\\circ$ smooth inclined plane of the same length. The coefficient of friction is:",
    ["$0.25$", "$0.50$", "$0.75$", "$0.33$"],
    2,
    "$$\\mu = \\left(1 - \\frac{1}{4}\\right)\\tan 45^\\circ = \\frac{3}{4} = 0.75$$"
)

# Q53
add_q(
    "Friction",
    "A block begins to slide down an inclined plane when the angle of inclination reaches $30^\\circ$. The coefficient of static friction between the block and the plane is:",
    ["$1/\\sqrt{3}$", "$\\sqrt{3}$", "$1/2$", "$1$"],
    0,
    "The angle of repose satisfies $\\mu_s = \\tan\\theta = \\tan 30^\\circ = 1/\\sqrt{3}$."
)

# Q54
add_q(
    "Friction",
    "A block of mass $m$ is on a rough inclined plane of inclination $\\theta$ with coefficient of friction $\\mu < \\tan\\theta$. The minimum force $F$ applied along the incline to keep the block from sliding down is:",
    ["$mg(\\sin\\theta - \\mu\\cos\\theta)$", "$mg(\\sin\\theta + \\mu\\cos\\theta)$", "$mg\\sin\\theta$", "$\\mu mg\\cos\\theta$"],
    0,
    "Friction acts upwards along the incline ($f_s = \\mu mg\\cos\\theta$):\n$$F + \\mu mg\\cos\\theta = mg\\sin\\theta \\implies F = mg(\\sin\\theta - \\mu\\cos\\theta)$$"
)

# Q55
add_q(
    "Friction",
    "The minimum force $F$ applied along the incline to push the block in the previous question up the incline with uniform speed is:",
    ["$mg(\\sin\\theta + \\mu\\cos\\theta)$", "$mg(\\sin\\theta - \\mu\\cos\\theta)$", "$mg\\cos\\theta$", "$\\mu mg\\sin\\theta$"],
    0,
    "When moving up, friction acts downwards along the incline:\n$$F = mg\\sin\\theta + \\mu mg\\cos\\theta = mg(\\sin\\theta + \\mu\\cos\\theta)$$"
)

# Q56
add_q(
    "Friction",
    "If the force required to just push a body up a rough inclined plane is twice the force required to prevent it from sliding down, and $\\theta = 45^\\circ$, the coefficient of friction $\\mu$ is:",
    ["$1/3$", "$1/2$", "$1/\\sqrt{3}$", "$2/3$"],
    0,
    "$$mg(\\sin\\theta + \\mu\\cos\\theta) = 2mg(\\sin\\theta - \\mu\\cos\\theta) \\implies 3\\mu\\cos\\theta = \\sin\\theta \\implies \\mu = \\frac{1}{3}\\tan 45^\\circ = \\frac{1}{3}$$"
)

# Q57
add_q(
    "Friction",
    "A block $A$ of mass $2\\text{ kg}$ rests on a block $B$ of mass $3\\text{ kg}$ which lies on a smooth horizontal floor. The coefficient of friction between $A$ and $B$ is $\\mu_s = 0.3$. The maximum horizontal force $F$ that can be applied to block $B$ so that both blocks move together without slipping is: (Take $g = 10\\text{ m/s}^2$)",
    ["$6\\text{ N}$", "$15\\text{ N}$", "$12\\text{ N}$", "$9\\text{ N}$"],
    1,
    "Max friction on $A$: $f_{\\text{max}} = 0.3(2)(10) = 6\\text{ N}$.\nMax acceleration of $A$: $a_{\\text{max}} = 6/2 = 3\\text{ m/s}^2$.\n$$F_{\\text{max}} = (m_A + m_B)a_{\\text{max}} = (2 + 3)(3) = 15\\text{ N}$$"
)

# Q58
add_q(
    "Friction",
    "In the same system ($m_A = 2\\text{ kg}, m_B = 3\\text{ kg}, \\mu_s = 0.3$, smooth floor), if the horizontal force $F$ is applied to block $A$, the maximum force for which both blocks move together is:",
    ["$10\\text{ N}$", "$15\\text{ N}$", "$8\\text{ N}$", "$12\\text{ N}$"],
    0,
    "Max acceleration of block $B$: $a_{\\text{max}} = f_{\\text{max}}/m_B = 6/3 = 2\\text{ m/s}^2$.\n$$F_{\\text{max}} = (2 + 3)(2) = 10\\text{ N}$$"
)

# Q59
add_q(
    "Friction",
    "In the previous system with force applied on top block $A$, if $F = 14\\text{ N}$ is applied to $A$ (with $\\mu_k = \\mu_s = 0.3$), the accelerations of $A$ and $B$ are respectively:",
    ["$4\\text{ m/s}^2, 2\\text{ m/s}^2$", "$2.8\\text{ m/s}^2, 2.8\\text{ m/s}^2$", "$5\\text{ m/s}^2, 2\\text{ m/s}^2$", "$3\\text{ m/s}^2, 1\\text{ m/s}^2$"],
    0,
    "$$a_B = f_k/m_B = 6/3 = 2\\text{ m/s}^2$$\n$$a_A = (F - f_k)/m_A = (14 - 6)/2 = 4\\text{ m/s}^2$$"
)

# Q60
add_q(
    "Friction",
    "A uniform chain of length $L$ lies on a rough horizontal table with a part of its length hanging over the edge. If the coefficient of static friction is $\\mu$, the maximum fraction of its length that can hang over the edge without the chain sliding off is:",
    ["$\\frac{\\mu}{\\mu + 1}$", "$\\frac{1}{\\mu + 1}$", "$\\frac{\\mu}{1 - \\mu}$", "$\\mu$"],
    0,
    "Weight of hanging part $f Mg = \\mu(1 - f)Mg \\implies f = \\frac{\\mu}{\\mu + 1}$."
)

# Q61
add_q(
    "Friction",
    "A body of mass $m$ is pushed up a rough inclined plane of inclination $\\theta$ and base length $L$ (horizontal run) with coefficient of friction $\\mu$. The work done against friction as the body moves from bottom to top is:",
    ["$\\mu mg L$", "$\\mu mg L\\cos\\theta$", "$\\mu mg L\\sin\\theta$", "$\\frac{\\mu mg L}{\\cos\\theta}$"],
    0,
    "$$W_f = f s = (\\mu mg\\cos\\theta)\\left(\\frac{L}{\\cos\\theta}\\right) = \\mu mg L$$"
)

# Q62
add_q(
    "Friction",
    "A car moving at speed $v$ on a straight road skids to a stop in distance $d$ when the brakes lock the wheels completely. If the car's initial speed is doubled to $2v$, the stopping distance will be:",
    ["$2d$", "$4d$", "$8d$", "$\\sqrt{2}d$"],
    1,
    "$$d = \\frac{v^2}{2\\mu g} \\propto v^2 \\implies (2v)^2 \\implies 4d$$"
)

# Q63
add_q(
    "Friction",
    "For a rear-wheel drive car accelerating forward on a straight horizontal road, the directions of the frictional force on the rear wheels and front wheels are respectively:",
    [
        "Forward on rear wheels, backward on front wheels.",
        "Backward on rear wheels, forward on front wheels.",
        "Forward on both wheels.",
        "Backward on both wheels."
    ],
    0,
    "Rear wheels are driven by the engine and push the ground backward; ground pushes forward. Front wheels roll freely due to backward ground friction creating torque."
)

# Q64
add_q(
    "Friction",
    "A block of mass $m = 1\\text{ kg}$ is held stationary against a rough vertical wall by applying a horizontal force $F$. If $\\mu_s = 0.25$, the minimum horizontal force $F$ required is: (Take $g = 10\\text{ m/s}^2$)",
    ["$20\\text{ N}$", "$40\\text{ N}$", "$25\\text{ N}$", "$50\\text{ N}$"],
    1,
    "$$f_s = mg = 10\\text{ N} \\le \\mu_s F \\implies F \\ge \\frac{10}{0.25} = 40\\text{ N}$$"
)

# Q65
add_q(
    "Friction",
    "The angle of friction $\\lambda$ is defined as the angle which:",
    [
        "The inclined plane makes with the horizontal when a body begins to slide.",
        "The resultant of the limiting friction and normal reaction makes with the normal reaction.",
        "The friction force makes with the direction of motion.",
        "The normal reaction makes with the vertical."
    ],
    1,
    "$$\\tan\\lambda = \\frac{f_s}{N} = \\mu_s$$"
)

# Q66
add_q(
    "Friction",
    "An insect crawls up a rough hemispherical bowl of radius $R$. If the coefficient of friction between the bowl and the insect is $\\mu = 0.75$, the maximum height $h$ to which the insect can crawl without slipping is:",
    ["$0.2R$", "$0.25R$", "$0.5R$", "$0.75R$"],
    0,
    "At angle $\\theta$ from the bottom, the incline angle is $\\theta$. Slipping occurs when $\\tan\\theta = \\mu = 0.75 = 3/4$.\nThus $\\cos\\theta = 4/5 = 0.8$.\nHeight $h = R(1 - \\cos\\theta) = R(1 - 0.8) = 0.2R$."
)

# Q67
add_q(
    "Friction",
    "A block of mass $m$ is projected up a rough inclined plane of angle $\\theta$ with initial speed $v_0$. If $\\mu$ is the coefficient of friction, the distance $s$ travelled by the block along the incline before coming to rest momentarily is:",
    ["$\\frac{v_0^2}{2g(\\sin\\theta + \\mu\\cos\\theta)}$", "$\\frac{v_0^2}{2g(\\sin\\theta - \\mu\\cos\\theta)}$", "$\\frac{v_0^2}{2g\\sin\\theta}$", "$\\frac{v_0^2}{2\\mu g\\cos\\theta}$"],
    0,
    "Deceleration while moving up: $a = g(\\sin\\theta + \\mu\\cos\\theta)$.\n$$s = \\frac{v_0^2}{2a} = \\frac{v_0^2}{2g(\\sin\\theta + \\mu\\cos\\theta)}$$"
)

# Q68
add_q(
    "Friction",
    "For the block in the previous question, the ratio of time taken to slide down the same distance $s$ to the time taken to go up is:",
    ["$\\sqrt{\\frac{\\sin\\theta + \\mu\\cos\\theta}{\\sin\\theta - \\mu\\cos\\theta}}$", "$\\sqrt{\\frac{\\sin\\theta - \\mu\\cos\\theta}{\\sin\\theta + \\mu\\cos\\theta}}$", "$\\frac{\\sin\\theta + \\mu\\cos\\theta}{\\sin\\theta - \\mu\\cos\\theta}$", "$1$"],
    0,
    "Since $t = \\sqrt{2s/a}$, the ratio of times is:\n$$\\frac{t_{\\text{down}}}{t_{\\text{up}}} = \\sqrt{\\frac{a_{\\text{up}}}{a_{\\text{down}}}} = \\sqrt{\\frac{g(\\sin\\theta + \\mu\\cos\\theta)}{g(\\sin\\theta - \\mu\\cos\\theta)}} = \\sqrt{\\frac{\\sin\\theta + \\mu\\cos\\theta}{\\sin\\theta - \\mu\\cos\\theta}}$$"
)

# Q69
add_q(
    "Friction",
    "A coin is placed on a horizontal turntable rotating about its central vertical axis. The coin just begins to slip when the turntable reaches an angular speed $\\omega$. If the distance of the coin from the center is doubled, the angular speed at which it slips will become:",
    ["$\\omega/\\sqrt{2}$", "$\\omega/2$", "$\\omega\\sqrt{2}$", "$2\\omega$"],
    0,
    "The required centripetal force is provided by static friction:\n$$m \\omega^2 r \\le \\mu_s mg \\implies \\omega_{\\text{max}} = \\sqrt{\\frac{\\mu_s g}{r}}$$\nIf $r$ is doubled, $\\omega_{\\text{new}} = \\omega / \\sqrt{2}$."
)

# Q70
add_q(
    "Friction",
    "A block is pressed against a ceiling by applying a vertical force $F$. If the mass of the block is $2\\text{ kg}$ and $\\mu_s = 0.5$, the minimum vertical force $F$ required to prevent the block from moving under a horizontal force of $10\\text{ N}$ is: (Take $g = 10\\text{ m/s}^2$)",
    ["$20\\text{ N}$", "$40\\text{ N}$", "$30\\text{ N}$", "$50\\text{ N}$"],
    1,
    "Normal force from the ceiling: $N = F - mg$.\nLimiting friction: $f_s = \\mu_s N = 0.5(F - 20)$.\nTo balance $10\\text{ N}$ horizontally:\n$$0.5(F - 20) \\ge 10 \\implies F - 20 \\ge 20 \\implies F \\ge 40\\text{ N}$$"
)

# Q71
add_q(
    "Friction",
    "A ladder of length $L$ and mass $M$ leans against a smooth vertical wall with its foot on a rough horizontal floor at an angle $\\theta$ to the horizontal. The minimum coefficient of friction $\\mu$ between the floor and ladder to prevent slipping is:",
    ["$\\frac{1}{2}\\cot\\theta$", "$\\frac{1}{2}\\tan\\theta$", "$\\cot\\theta$", "$\\frac{1}{2}\\cos\\theta$"],
    0,
    "Torque about the foot of the ladder in equilibrium:\n$$N_{\\text{wall}}(L\\sin\\theta) = Mg\\left(\\frac{L}{2}\\cos\\theta\\right) \\implies N_{\\text{wall}} = \\frac{1}{2}Mg\\cot\\theta$$\nAt the floor: $N_{\\text{floor}} = Mg$, and friction $f = N_{\\text{wall}}$.\n$$f \\le \\mu N_{\\text{floor}} \\implies \\frac{1}{2}Mg\\cot\\theta \\le \\mu Mg \\implies \\mu \\ge \\frac{1}{2}\\cot\\theta$$"
)

# Q72
add_q(
    "Friction",
    "Why is it recommended to take smaller steps while walking on a slippery ice road?",
    [
        "Smaller steps decrease the normal reaction from the ground.",
        "Smaller steps keep the reaction force closer to vertical, reducing the required friction angle $\\tan\\theta$.",
        "Smaller steps increase the coefficient of friction.",
        "Smaller steps reduce the person's weight."
    ],
    1,
    "When taking smaller steps, the angle of the leg with the vertical $\\theta$ is small, so the required horizontal friction $f = N\\tan\\theta$ is much smaller, remaining within $f \\le \\mu N$."
)

# Q73
add_q(
    "Friction",
    "A block of mass $m$ is placed on a rough horizontal surface where $\\mu_s = 0.6$ and $\\mu_k = 0.4$. A horizontal force $F$ is gradually increased from zero. The graph of friction force $f$ versus applied force $F$ is:",
    [
        "A straight line $f = F$ up to $F = \\mu_s mg$, then dropping abruptly to a constant horizontal line at $f = \\mu_k mg$.",
        "A constant horizontal line at $\\mu_s mg$.",
        "A parabola opening downwards.",
        "A continuous line increasing indefinitely."
    ],
    0,
    "For $F \\le \\mu_s mg$, static friction self-adjusts such that $f = F$ (slope 1). At $F = \\mu_s mg$, it reaches the peak, then drops slightly to the constant kinetic friction $f_k = \\mu_k mg$."
)

# Q74
add_q(
    "Friction",
    "A body of mass $10\\text{ kg}$ is kept on a rough horizontal surface with $\\mu = 0.5$. A horizontal force of $F = 40\\text{ N}$ acts on it. The contact force exerted by the surface on the body is: (Take $g = 10\\text{ m/s}^2$)",
    ["$100\\text{ N}$", "$107.7\\text{ N}$", "$50\\text{ N}$", "$140\\text{ N}$"],
    1,
    "Normal force $N = mg = 10 \\times 10 = 100\\text{ N}$.\n$f_{s,\\text{max}} = \\mu N = 0.5 \\times 100 = 50\\text{ N}$.\nSince $F = 40\\text{ N} < 50\\text{ N}$, the body is at rest and $f = 40\\text{ N}$.\nThe total contact force is the resultant of $N$ and $f$:\n$$R = \\sqrt{N^2 + f^2} = \\sqrt{100^2 + 40^2} = \\sqrt{10000 + 1600} = \\sqrt{11600} \\approx 107.7\\text{ N}$$"
)

# Q75
add_q(
    "Friction",
    "A box of mass $m$ rests on the floor of a truck. If $\\mu_s = 0.3$, the maximum acceleration the truck can have without the box sliding backward is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$2.94\\text{ m/s}^2$", "$1.96\\text{ m/s}^2$", "$4.9\\text{ m/s}^2$", "$0.98\\text{ m/s}^2$"],
    0,
    "In the truck frame, pseudo force is $ma$. For no sliding:\n$$ma \\le \\mu_s mg \\implies a_{\\text{max}} = \\mu_s g = 0.3 \\times 9.8 = 2.94\\text{ m/s}^2$$"
)

# Q76
add_q(
    "Friction",
    "A heavy box is pushed with a force $F$ at an angle $\\theta$ below the horizontal on a rough floor. The box can never be moved, no matter how large $F$ is, if:",
    ["$\\mu\\tan\\theta \\ge 1$", "$\\mu\\cot\\theta \\ge 1$", "$\\tan\\theta \\ge \\mu$", "$\\mu \\ge 1$"],
    0,
    "Normal reaction: $N = mg + F\\sin\\theta$.\nHorizontal driving force: $F_{\\text{drive}} = F\\cos\\theta$.\nFor motion, $F\\cos\\theta > \\mu(mg + F\\sin\\theta) = \\mu mg + \\mu F\\sin\\theta$.\n$$F(\\cos\\theta - \\mu\\sin\\theta) > \\mu mg$$\nIf $(\\cos\\theta - \\mu\\sin\\theta) \\le 0 \\implies 1 \\le \\mu\\tan\\theta \\implies \\mu\\tan\\theta \\ge 1$, the force can never move the box."
)

# Q77
add_q(
    "Friction",
    "A block of mass $m$ is placed on an inclined plane whose coefficient of friction varies with distance $x$ from the top as $\\mu(x) = kx$. The block will stop sliding down the incline after traversing a distance:",
    ["$\\frac{2\\tan\\theta}{k}$", "$\\frac{\\tan\\theta}{k}$", "$\\frac{\\tan\\theta}{2k}$", "$\\frac{k}{\\tan\\theta}$"],
    0,
    "Using work-energy theorem from top ($x = 0$) to stopping point ($x$):\n$$W_{\\text{gravity}} + W_{\\text{friction}} = 0$$\n$$mg\\sin\\theta \\cdot x - \\int_0^x (kx)mg\\cos\\theta dx = 0$$\n$$mg\\sin\\theta \\cdot x - kmg\\cos\\theta \\frac{x^2}{2} = 0 \\implies x\\left(\\sin\\theta - \\frac{kx\\cos\\theta}{2}\\right) = 0 \\implies x = \\frac{2\\tan\\theta}{k}$$"
)

# Q78
add_q(
    "Friction",
    "Rolling friction is generally much smaller than sliding friction because:",
    [
        "The area of contact is zero.",
        "There is virtually no relative slipping between the contacting surfaces at the contact point.",
        "The normal reaction for rolling bodies is zero.",
        "The coefficient of rolling friction is dimensionless."
    ],
    1,
    "In pure rolling, the instantaneous point of contact is momentarily at rest relative to the surface. Since there is no relative macroscopic sliding, dissipative sliding friction is absent."
)

# Q79
add_q(
    "Friction",
    "A conveyor belt moves horizontally at a constant speed of $2\\text{ m/s}$. A box is gently placed on the belt. If $\\mu_k = 0.5$, the time taken for the box to stop slipping on the belt is: (Take $g = 10\\text{ m/s}^2$)",
    ["$0.2\\text{ s}$", "$0.4\\text{ s}$", "$0.8\\text{ s}$", "$1.0\\text{ s}$"],
    1,
    "Acceleration of the box due to kinetic friction:\n$$a = \\mu_k g = 0.5 \\times 10 = 5\\text{ m/s}^2$$\nTime to reach belt speed $v = 2\\text{ m/s}$:\n$$v = u + at \\implies 2 = 0 + 5t \\implies t = 0.4\\text{ s}$$"
)

# Q80
add_q(
    "Friction",
    "In the previous problem, the distance travelled by the box relative to the ground during slipping is:",
    ["$0.2\\text{ m}$", "$0.4\\text{ m}$", "$0.8\\text{ m}$", "$1.0\\text{ m}$"],
    1,
    "$$s = \\frac{v^2 - u^2}{2a} = \\frac{2^2 - 0}{2(5)} = \\frac{4}{10} = 0.4\\text{ m}$$"
)

# Q81
add_q(
    "Friction",
    "And the distance travelled by the box relative to the conveyor belt during slipping is:",
    ["$0.2\\text{ m}$", "$0.4\\text{ m}$", "$0.8\\text{ m}$", "$1.2\\text{ m}$"],
    1,
    "Distance moved by the belt: $s_{\\text{belt}} = v t = 2 \\times 0.4 = 0.8\\text{ m}$.\nDistance moved by the box: $s_{\\text{box}} = 0.4\\text{ m}$.\nRelative slip distance: $s_{\\text{rel}} = s_{\\text{belt}} - s_{\\text{box}} = 0.8 - 0.4 = 0.4\\text{ m}$."
)

# Q82
add_q(
    "Friction",
    "Two blocks $m_1 = 4\\text{ kg}$ and $m_2 = 2\\text{ kg}$ are connected by a light string on a rough horizontal table ($\\mu = 0.2$). A horizontal force $F = 30\\text{ N}$ pulls $m_1$ away from $m_2$. The tension in the string is: (Take $g = 10\\text{ m/s}^2$)",
    ["$10\\text{ N}$", "$15\\text{ N}$", "$20\\text{ N}$", "$5\\text{ N}$"],
    0,
    "Friction forces: $f_1 = 0.2(4)(10) = 8\\text{ N}$, $f_2 = 0.2(2)(10) = 4\\text{ N}$.\nTotal friction $f_{\\text{total}} = 12\\text{ N}$.\nCommon acceleration:\n$$a = \\frac{F - f_{\\text{total}}}{m_1 + m_2} = \\frac{30 - 12}{6} = 3\\text{ m/s}^2$$\nFor block $m_2$:\n$$T - f_2 = m_2 a \\implies T - 4 = 2(3) \\implies T = 10\\text{ N}$$"
)

# Q83
add_q(
    "Friction",
    "The maximum speed with which a car can safely take an unbanked circular curve of radius $40\\text{ m}$ on a road with $\\mu = 0.4$ is: (Take $g = 10\\text{ m/s}^2$)",
    ["$10\\text{ m/s}$", "$12.65\\text{ m/s}$", "$16\\text{ m/s}$", "$20\\text{ m/s}$"],
    1,
    "$$v_{\\text{max}} = \\sqrt{\\mu g R} = \\sqrt{0.4 \\times 10 \\times 40} = \\sqrt{160} \\approx 12.65\\text{ m/s}$$"
)

# Q84
add_q(
    "Friction",
    "Which of the following is TRUE about the coefficient of friction $\\mu$?",
    [
        "$\\mu$ can never exceed 1.",
        "$\\mu$ is a dimensionless quantity that can exceed 1 for very rough/sticky surfaces.",
        "$\\mu$ has dimensions of force.",
        "$\\mu$ depends on the macroscopic surface area of contact."
    ],
    1,
    "Coefficient of friction is the ratio of two forces ($f/N$) and is dimensionless. For certain materials (like silicone rubber or specially treated clean metals in vacuum), $\\mu$ can be greater than 1."
)

# Q85
add_q(
    "Friction",
    "A block of mass $m$ slides down an inclined plane of inclination $30^\\circ$ with constant velocity. The coefficient of kinetic friction is:",
    ["$1/\\sqrt{3}$", "$\\sqrt{3}$", "$1/2$", "$1$"],
    0,
    "Constant velocity implies zero acceleration:\n$$mg\\sin 30^\\circ = f_k = \\mu_k mg\\cos 30^\\circ \\implies \\mu_k = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$$"
)

# Q86
add_q(
    "Friction",
    "A block of mass $m$ placed on an incline of angle $\\theta$ is subjected to a horizontal force $F$ towards the incline. If the block is on the verge of sliding up the incline, the condition is:",
    ["$F\\cos\\theta = mg\\sin\\theta + \\mu(mg\\cos\\theta + F\\sin\\theta)$", "$F\\sin\\theta = mg\\cos\\theta$", "$F\\cos\\theta = mg\\sin\\theta$", "$F = mg\\tan\\theta$"],
    0,
    "Normal force: $N = mg\\cos\\theta + F\\sin\\theta$.\nDriving force up the plane: $F\\cos\\theta$.\nOpposing forces down the plane: $mg\\sin\\theta + f_s = mg\\sin\\theta + \\mu N$.\nHence: $F\\cos\\theta = mg\\sin\\theta + \\mu(mg\\cos\\theta + F\\sin\\theta)$."
)

# Q87
add_q(
    "Friction",
    "A heavy body of mass $50\\text{ kg}$ is dragged across a rough floor at a constant speed of $2\\text{ m/s}$. If $\\mu = 0.3$, the power delivered by the pulling force is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$294\\text{ W}$", "$147\\text{ W}$", "$588\\text{ W}$", "$98\\text{ W}$"],
    0,
    "Pulling force $F = \\mu mg = 0.3 \\times 50 \\times 9.8 = 147\\text{ N}$.\n$$\\text{Power } P = F v = 147 \\times 2 = 294\\text{ W}$$"
)

# Q88
add_q(
    "Friction",
    "A block of mass $m$ is held between two identical vertical plates by applying a horizontal force $F$ to each plate. If the coefficient of static friction between the block and each plate is $\\mu_s$, the minimum force $F$ to keep the block from falling is:",
    ["$\\frac{mg}{2\\mu_s}$", "$\\frac{mg}{\\mu_s}$", "$\\frac{2mg}{\\mu_s}$", "$\\frac{\\mu_s mg}{2}$"],
    0,
    "There are two contact surfaces. Each provides upward friction $f_s \\le \\mu_s F$.\nTotal upward friction $2f_s = mg \\implies 2\\mu_s F \\ge mg \\implies F \\ge \\frac{mg}{2\\mu_s}$."
)

# Q89
add_q(
    "Friction",
    "A wooden cube of side $a$ and mass $m$ rests on a rough horizontal table. A horizontal force $F$ is applied at the top edge of the cube. If the cube topples before it slides, the coefficient of friction $\\mu$ must satisfy:",
    ["$\\mu > 0.5$", "$\\mu < 0.5$", "$\\mu > 1$", "$\\mu < 1$"],
    0,
    "Force to cause sliding: $F_{\\text{slide}} = \\mu mg$.\nFor toppling about the bottom front edge, torque of $F$ must exceed torque of gravity:\n$$F a > mg\\left(\\frac{a}{2}\\right) \\implies F_{\\text{topple}} = \\frac{1}{2}mg$$\nFor toppling before sliding, $F_{\\text{topple}} < F_{\\text{slide}} \\implies \\frac{1}{2}mg < \\mu mg \\implies \\mu > 0.5$."
)

# Q90
add_q(
    "Friction",
    "A body of mass $2\\text{ kg}$ is sliding down an inclined plane of $30^\\circ$ with an acceleration of $1.5\\text{ m/s}^2$. The frictional force acting on the body is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$6.8\\text{ N}$", "$9.8\\text{ N}$", "$3.0\\text{ N}$", "$4.9\\text{ N}$"],
    0,
    "Along the incline:\n$$mg\\sin 30^\\circ - f = ma$$\n$$2(9.8)(0.5) - f = 2(1.5) \\implies 9.8 - f = 3.0 \\implies f = 6.8\\text{ N}$$"
)

with open("scripts/lom/lom_batch2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions in scripts/lom/lom_batch2.json")
