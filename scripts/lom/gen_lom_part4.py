# -*- coding: utf-8 -*-
"""
Generate Batch 4 of Laws of Motion:
- Equilibrium of concurrent forces (45 MCQs)
Total = 45 MCQs
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
# SUBTOPIC 7: Equilibrium of concurrent forces (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Equilibrium of concurrent forces",
    "Three concurrent forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ act on a particle in equilibrium. According to Lami's theorem, if $\\alpha, \\beta, \\gamma$ are the angles opposite to $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ respectively, then:",
    [
        "$\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$",
        "$\\frac{F_1}{\\cos\\alpha} = \\frac{F_2}{\\cos\\beta} = \\frac{F_3}{\\cos\\gamma}$",
        "$F_1\\sin\\alpha = F_2\\sin\\beta = F_3\\sin\\gamma$",
        "$\\frac{\\sin\\alpha}{F_1^2} = \\frac{\\sin\\beta}{F_2^2} = \\frac{\\sin\\gamma}{F_3^2}$"
    ],
    0,
    "Lami's theorem states that for three coplanar concurrent forces in equilibrium:\n$$\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$$"
)

# Q2
add_q(
    "Equilibrium of concurrent forces",
    "Three coplanar forces of magnitudes $6\\text{ N}$, $8\\text{ N}$, and $10\\text{ N}$ keep a body in equilibrium. The angle between the $6\\text{ N}$ and $8\\text{ N}$ forces is:",
    ["$90^\\circ$", "$60^\\circ$", "$120^\\circ$", "$45^\\circ$"],
    0,
    "The resultant of $6\\text{ N}$ and $8\\text{ N}$ must balance the $10\\text{ N}$ force:\n$$R^2 = F_1^2 + F_2^2 + 2F_1 F_2\\cos\\theta = 10^2$$\n$$6^2 + 8^2 + 2(6)(8)\\cos\\theta = 100 \\implies 36 + 64 + 96\\cos\\theta = 100$$\n$$100 + 96\\cos\\theta = 100 \\implies \\cos\\theta = 0 \\implies \\theta = 90^\\circ$$"
)

# Q3
add_q(
    "Equilibrium of concurrent forces",
    "Which of the following sets of concurrent forces CANNOT be in equilibrium?",
    ["$2\\text{ N}, 3\\text{ N}, 6\\text{ N}$", "$3\\text{ N}, 4\\text{ N}, 5\\text{ N}$", "$5\\text{ N}, 12\\text{ N}, 13\\text{ N}$", "$1\\text{ N}, 1\\text{ N}, 1\\text{ N}$"],
    0,
    "For three forces to be in equilibrium, the sum of any two magnitudes must be greater than or equal to the third (triangle inequality). For $2\\text{ N}, 3\\text{ N}, 6\\text{ N}$:\n$$2 + 3 = 5 < 6$$\nHence, they can never form a closed triangle, so equilibrium is impossible."
)

# Q4
add_q(
    "Equilibrium of concurrent forces",
    "A body of mass $m = 5\\text{ kg}$ is suspended by two light strings of equal length attached to two points on a horizontal ceiling. If each string makes an angle of $30^\\circ$ with the ceiling, the tension in each string is: (Take $g = 10\\text{ m/s}^2$)",
    ["$50\\text{ N}$", "$25\\text{ N}$", "$100\\text{ N}$", "$25\\sqrt{3}\\text{ N}$"],
    0,
    "Resolving forces vertically:\n$$2T\\sin 30^\\circ = mg \\implies 2T(0.5) = 5 \\times 10 = 50\\text{ N} \\implies T = 50\\text{ N}$$"
)

# Q5
add_q(
    "Equilibrium of concurrent forces",
    "A mass $M = 10\\text{ kg}$ is suspended from a knot $O$ connected to two light strings $OA$ and $OB$. String $OA$ is horizontal and attached to a vertical wall, while string $OB$ makes an angle of $45^\\circ$ with the vertical ceiling. The tension in string $OA$ is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$98\\text{ N}$", "$98\\sqrt{2}\\text{ N}$", "$49\\text{ N}$", "$196\\text{ N}$"],
    0,
    "At the knot $O$ in equilibrium:\nVertical balance: $T_{OB}\\cos 45^\\circ = Mg = 10 \\times 9.8 = 98\\text{ N} \\implies T_{OB} = 98\\sqrt{2}\\text{ N}$.\nHorizontal balance: $T_{OA} = T_{OB}\\sin 45^\\circ = (98\\sqrt{2})\\left(\\frac{1}{\\sqrt{2}}\\right) = 98\\text{ N}$."
)

# Q6
add_q(
    "Equilibrium of concurrent forces",
    "A uniform smooth sphere of mass $M$ and radius $R$ is held in equilibrium between two smooth planes inclined at $30^\\circ$ and $60^\\circ$ to the horizontal. The normal reaction exerted by the $30^\\circ$ plane on the sphere is:",
    ["$\\frac{\\sqrt{3}}{2}Mg$", "$\\frac{1}{2}Mg$", "$Mg$", "$\\frac{Mg}{\\sqrt{3}}$"],
    0,
    "The two planes are perpendicular ($30^\\circ + 60^\\circ = 90^\\circ$).\nLet $N_1$ be the normal from the $30^\\circ$ plane (inclined at $60^\\circ$ to horizontal) and $N_2$ from the $60^\\circ$ plane (inclined at $30^\\circ$ to horizontal).\nSince the normals are mutually perpendicular:\n$$N_1 = Mg\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}Mg, \\quad N_2 = Mg\\cos 60^\\circ = \\frac{1}{2}Mg$$"
)

# Q7
add_q(
    "Equilibrium of concurrent forces",
    "Two forces $\\vec{F}_1 = (2\\hat{i} + 3\\hat{j} - 4\\hat{k})\\text{ N}$ and $\\vec{F}_2 = (-5\\hat{i} + 2\\hat{j} + 7\\hat{k})\\text{ N}$ act concurrently on a particle. The third force $\\vec{F}_3$ needed to keep the particle in equilibrium is:",
    ["$(3\\hat{i} - 5\\hat{j} - 3\\hat{k})\\text{ N}$", "$(-3\\hat{i} + 5\\hat{j} + 3\\hat{k})\\text{ N}$", "$(7\\hat{i} - \\hat{j} - 11\\hat{k})\\text{ N}$", "$(3\\hat{i} + 5\\hat{j} - 3\\hat{k})\\text{ N}$"],
    0,
    "For equilibrium:\n$$\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0 \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$$\n$$\\vec{F}_1 + \\vec{F}_2 = (2 - 5)\\hat{i} + (3 + 2)\\hat{j} + (-4 + 7)\\hat{k} = -3\\hat{i} + 5\\hat{j} + 3\\hat{k}$$\n$$\\vec{F}_3 = -(-3\\hat{i} + 5\\hat{j} + 3\\hat{k}) = 3\\hat{i} - 5\\hat{j} - 3\\hat{k}\\text{ N}$$"
)

# Q8
add_q(
    "Equilibrium of concurrent forces",
    "A sphere of mass $m$ rests against a smooth vertical wall and is supported by a light string of length equal to the radius $R$ of the sphere, tied to a point on the wall and tangential to the sphere at the attachment point (so string length from wall to sphere surface is $L = R$). The tension in the string is:",
    ["$\\frac{2}{\\sqrt{3}}mg$", "$\\sqrt{3}mg$", "$2mg$", "$\\frac{1}{\\sqrt{3}}mg$"],
    0,
    "Distance from wall hinge to center of sphere is $L + R = 2R$. Since radius is $R$, the angle $\\theta$ the string line (to center) makes with the vertical satisfies:\n$$\\sin\\theta = \\frac{R}{2R} = \\frac{1}{2} \\implies \\theta = 30^\\circ$$\nVertical equilibrium: $T\\cos 30^\\circ = mg \\implies T\\left(\\frac{\\sqrt{3}}{2}\\right) = mg \\implies T = \\frac{2}{\\sqrt{3}}mg$."
)

# Q9
add_q(
    "Equilibrium of concurrent forces",
    "In the previous question, the normal reaction exerted by the vertical wall on the sphere is:",
    ["$\\frac{mg}{\\sqrt{3}}$", "$\\frac{2mg}{\\sqrt{3}}$", "$mg\\sqrt{3}$", "$\\frac{mg}{2}$"],
    0,
    "Horizontal equilibrium:\n$$N = T\\sin 30^\\circ = \\left(\\frac{2}{\\sqrt{3}}mg\\right)\\left(\\frac{1}{2}\\right) = \\frac{mg}{\\sqrt{3}}$$"
)

# Q10
add_q(
    "Equilibrium of concurrent forces",
    "A smooth ring of mass $m$ can slide freely along a smooth light string of length $L$ whose ends are fixed to two points at the same horizontal level separated by distance $d < L$. When the ring is in equilibrium at the center:",
    [
        "The tension in both segments of the string is equal.",
        "The tension in the longer segment is greater.",
        "The angle made by both segments with the horizontal is different.",
        "The tension in the string is zero."
    ],
    0,
    "Since the string is continuous and the ring is smooth, the tension $T$ is uniform throughout the string. By symmetry, both segments make the exact same angle $\\theta$ with the horizontal, and each carries the same tension $T$."
)

# Q11
add_q(
    "Equilibrium of concurrent forces",
    "In the previous problem, the tension in the string supporting the ring of mass $m$ is:",
    ["$\\frac{mg}{2\\sqrt{1 - (d/L)^2}}$", "$\\frac{mg}{2(d/L)}$", "$\\frac{mg L}{2d}$", "$\\frac{1}{2}mg$"],
    0,
    "Each half of the string has length $L/2$ and horizontal span $d/2$.\n$$\\cos\\theta = \\frac{d/2}{L/2} = \\frac{d}{L} \\implies \\sin\\theta = \\sqrt{1 - (d/L)^2}$$\nVertical balance: $2T\\sin\\theta = mg \\implies T = \\frac{mg}{2\\sin\\theta} = \\frac{mg}{2\\sqrt{1 - (d/L)^2}}$."
)

# Q12
add_q(
    "Equilibrium of concurrent forces",
    "Four coplanar concurrent forces of magnitudes $10\\text{ N}, 20\\text{ N}, 30\\text{ N}$, and $40\\text{ N}$ act along the $+x, +y, -x$, and $-y$ directions respectively. The magnitude of the additional force required to maintain equilibrium is:",
    ["$20\\sqrt{2}\\text{ N}$", "$20\\text{ N}$", "$40\\text{ N}$", "$10\\sqrt{2}\\text{ N}$"],
    0,
    "Resultant force:\n$$F_x = 10 - 30 = -20\\text{ N}$$\n$$F_y = 20 - 40 = -20\\text{ N}$$\n$$\\vec{F}_{\\text{res}} = -20\\hat{i} - 20\\hat{j}$$\nTo maintain equilibrium, the equilibrant force must be:\n$$\\vec{F}_{\\text{eq}} = -\\vec{F}_{\\text{res}} = 20\\hat{i} + 20\\hat{j}$$\n$$|\\vec{F}_{\\text{eq}}| = \\sqrt{20^2 + 20^2} = 20\\sqrt{2}\\text{ N}$$"
)

# Q13
add_q(
    "Equilibrium of concurrent forces",
    "Three coplanar forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ are in equilibrium. If $|\\vec{F}_1| = 5\\text{ N}$ and $|\\vec{F}_2| = 12\\text{ N}$, and the angle between $\\vec{F}_1$ and $\\vec{F}_2$ is $90^\\circ$, then the magnitude of $\\vec{F}_3$ is:",
    ["$13\\text{ N}$", "$17\\text{ N}$", "$7\\text{ N}$", "$119\\text{ N}$"],
    0,
    "$$\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$$\n$$|\\vec{F}_3| = \\sqrt{F_1^2 + F_2^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\text{ N}$$"
)

# Q14
add_q(
    "Equilibrium of concurrent forces",
    "A body of weight $W$ is suspended by a string of length $L$. It is pulled aside by a horizontal force $F$ until the string makes an angle of $60^\\circ$ with the vertical. The value of $F$ is:",
    ["$W\\sqrt{3}$", "$W/\\sqrt{3}$", "$W$", "$2W$"],
    0,
    "$$\\tan 60^\\circ = \\frac{F}{W} \\implies F = W\\tan 60^\\circ = W\\sqrt{3}$$"
)

# Q15
add_q(
    "Equilibrium of concurrent forces",
    "In the previous setup, the tension in the string at $60^\\circ$ to the vertical is:",
    ["$2W$", "$W\\sqrt{3}$", "$W$", "$W/2$"],
    0,
    "$$T\\cos 60^\\circ = W \\implies T(0.5) = W \\implies T = 2W$$"
)

# Q16
add_q(
    "Equilibrium of concurrent forces",
    "Three concurrent coplanar forces of equal magnitude $F$ are in equilibrium. The angle between any two adjacent forces is:",
    ["$120^\\circ$", "$90^\\circ$", "$60^\\circ$", "$180^\\circ$"],
    0,
    "By symmetry, three equal coplanar forces must be equally spaced at angles of $\\frac{360^\\circ}{3} = 120^\\circ$ to cancel out."
)

# Q17
add_q(
    "Equilibrium of concurrent forces",
    "If $n$ equal coplanar forces act on a particle such that the angle between any two consecutive forces is $\\frac{2\\pi}{n}$, the resultant force on the particle is:",
    ["$0$", "$n F$", "$F$", "$F\\sqrt{n}$"],
    0,
    "The forces form a regular closed polygon of $n$ sides when placed tip-to-tail. Since the polygon is closed, the vector sum (resultant) is identically zero."
)

# Q18
add_q(
    "Equilibrium of concurrent forces",
    "A particle is in equilibrium under the action of three forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. If $\\vec{F}_1 = 3\\hat{i} + 4\\hat{j}$ and $\\vec{F}_2 = -2\\hat{i} + \\hat{j}$, what is the direction of $\\vec{F}_3$?",
    ["Third quadrant ($180^\\circ < \\theta < 270^\\circ$)", "First quadrant", "Second quadrant", "Fourth quadrant"],
    0,
    "$$\\vec{F}_1 + \\vec{F}_2 = (3 - 2)\\hat{i} + (4 + 1)\\hat{j} = \\hat{i} + 5\\hat{j}$$\n$$\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) = -\\hat{i} - 5\\hat{j}$$\nSince both x and y components of $\\vec{F}_3$ are negative, it lies in the third quadrant."
)

# Q19
add_q(
    "Equilibrium of concurrent forces",
    "A smooth roller of weight $W = 100\\text{ N}$ and radius $R = 20\\text{ cm}$ is pulled over a step of height $h = 10\\text{ cm}$ by a horizontal force $F$ applied at its center. The minimum value of $F$ to just lift the roller off the ground is:",
    ["$100\\sqrt{3}\\text{ N}$", "$\\frac{100}{\\sqrt{3}}\\text{ N}$", "$100\\text{ N}$", "$50\\sqrt{3}\\text{ N}$"],
    0,
    "At the step edge $P$, the vertical distance from center is $R - h = 20 - 10 = 10\\text{ cm}$.\nHorizontal distance from center to step edge is $d = \\sqrt{R^2 - (R - h)^2} = \\sqrt{20^2 - 10^2} = \\sqrt{300} = 10\\sqrt{3}\\text{ cm}$.\nTaking torque about step edge $P$:\n$$F(R - h) = W d \\implies F(10) = 100(10\\sqrt{3}) \\implies F = 100\\sqrt{3}\\text{ N}$$"
)

# Q20
add_q(
    "Equilibrium of concurrent forces",
    "A mass $m$ is suspended by a string. A force $F$ is applied perpendicular to the string to hold it at an angle $\\theta$ with the vertical. The magnitude of $F$ is:",
    ["$mg\\sin\\theta$", "$mg\\tan\\theta$", "$mg\\cos\\theta$", "$\\frac{mg}{\\sin\\theta}$"],
    0,
    "Resolving forces perpendicular to the string:\nThe component of gravity perpendicular to the string is $mg\\sin\\theta$.\nSince $F$ is applied perpendicular to the string, it directly balances this gravity component:\n$$F = mg\\sin\\theta$$"
)

# Q21
add_q(
    "Equilibrium of concurrent forces",
    "In the previous problem, the tension $T$ in the string when $F$ is applied perpendicular to the string is:",
    ["$mg\\cos\\theta$", "$mg/\\cos\\theta$", "$mg$", "$mg\\tan\\theta$"],
    0,
    "Resolving forces along the string:\nThe only forces along the string are tension $T$ and the component of gravity $mg\\cos\\theta$.\n$$T = mg\\cos\\theta$$"
)

# Q22
add_q(
    "Equilibrium of concurrent forces",
    "Can two concurrent forces of unequal magnitudes ever be in equilibrium?",
    [
        "No, because two forces can be in equilibrium only if they are equal in magnitude and opposite in direction.",
        "Yes, if they act at $90^\\circ$.",
        "Yes, if they act along the same line in the same direction.",
        "Yes, if their cross product is zero."
    ],
    0,
    "For two forces $\\vec{F}_1 + \\vec{F}_2 = 0 \\implies \\vec{F}_1 = -\\vec{F}_2$, which strictly requires $|\\vec{F}_1| = |\\vec{F}_2|$ and opposite directions."
)

# Q23
add_q(
    "Equilibrium of concurrent forces",
    "The minimum number of unequal coplanar concurrent forces whose vector sum can be zero is:",
    ["$3$", "$2$", "$4$", "$5$"],
    0,
    "Two unequal forces cannot sum to zero. Three unequal coplanar forces can form a closed triangle (e.g. $3\\text{ N}, 4\\text{ N}, 5\\text{ N}$), so the minimum number is 3."
)

# Q24
add_q(
    "Equilibrium of concurrent forces",
    "The minimum number of non-coplanar concurrent forces whose vector sum can be zero is:",
    ["$4$", "$3$", "$2$", "$5$"],
    0,
    "Three non-coplanar forces cannot sum to zero because the resultant of any two lies in their common plane, which cannot cancel the third force lying outside that plane. Therefore, at least 4 non-coplanar forces are required."
)

# Q25
add_q(
    "Equilibrium of concurrent forces",
    "A sphere of mass $M$ rests in a V-shaped groove whose sides are smooth and inclined at $45^\\circ$ each to the horizontal. The normal reaction on the sphere from each inclined surface is:",
    ["$\\frac{Mg}{\\sqrt{2}}$", "$Mg\\sqrt{2}$", "$Mg$", "$\\frac{Mg}{2}$"],
    0,
    "The two normal forces $N$ are inclined at $45^\\circ$ to the vertical.\nVertical equilibrium:\n$$2 N \\cos 45^\\circ = Mg \\implies 2 N \\left(\\frac{1}{\\sqrt{2}}\\right) = Mg \\implies N\\sqrt{2} = Mg \\implies N = \\frac{Mg}{\\sqrt{2}}$$"
)

# Q26
add_q(
    "Equilibrium of concurrent forces",
    "A particle is in equilibrium under three forces $F_1, F_2, F_3$. If $F_1 = 8\\text{ N}, F_2 = 6\\text{ N}$, the range of possible values for $F_3$ is:",
    ["$2\\text{ N} \\le F_3 \\le 14\\text{ N}$", "$6\\text{ N} \\le F_3 \\le 8\\text{ N}$", "$0 \\le F_3 \\le 14\\text{ N}$", "$2\\text{ N} \\le F_3 \\le 10\\text{ N}$"],
    0,
    "The magnitude of the resultant of $F_1$ and $F_2$ ranges from $|F_1 - F_2| = |8 - 6| = 2\\text{ N}$ to $F_1 + F_2 = 8 + 6 = 14\\text{ N}$. Since $F_3$ must balance this resultant, $2\\text{ N} \\le F_3 \\le 14\\text{ N}$."
)

# Q27
add_q(
    "Equilibrium of concurrent forces",
    "A heavy block of weight $W$ is supported by three ropes $OA, OB, OC$ joined at knot $O$. If $OA$ and $OB$ are horizontal and perpendicular to each other, and $OC$ supports the weight $W$, the tension in $OC$ is:",
    ["$W$", "$W\\sqrt{2}$", "$2W$", "$W/\\sqrt{2}$"],
    0,
    "Since $OA$ and $OB$ are purely horizontal, they have zero vertical component. Therefore, the vertical string $OC$ must balance the entire weight $W$, so $T_{OC} = W$."
)

# Q28
add_q(
    "Equilibrium of concurrent forces",
    "A mass $m$ is suspended from the junction of two light strings $OA$ and $OB$. $OA$ makes $30^\\circ$ with the vertical and $OB$ makes $60^\\circ$ with the vertical. The ratio of tensions $T_{OA}/T_{OB}$ is:",
    ["$\\sqrt{3}$", "$1/\\sqrt{3}$", "$1$", "$3$"],
    0,
    "Horizontal equilibrium of the junction:\n$$T_{OA}\\sin 30^\\circ = T_{OB}\\sin 60^\\circ \\implies T_{OA}(1/2) = T_{OB}(\\sqrt{3}/2) \\implies \\frac{T_{OA}}{T_{OB}} = \\sqrt{3}$$"
)

# Q29
add_q(
    "Equilibrium of concurrent forces",
    "In the previous question, the value of tension $T_{OA}$ in terms of $mg$ is:",
    ["$\\frac{\\sqrt{3}}{2}mg$", "$\\frac{1}{2}mg$", "$mg$", "$\\frac{2}{\\sqrt{3}}mg$"],
    0,
    "Vertical equilibrium:\n$$T_{OA}\\cos 30^\\circ + T_{OB}\\cos 60^\\circ = mg$$\nSubstitute $T_{OB} = T_{OA}/\\sqrt{3}$:\n$$T_{OA}\\left(\\frac{\\sqrt{3}}{2}\\right) + \\frac{T_{OA}}{\\sqrt{3}}\\left(\\frac{1}{2}\\right) = mg \\implies T_{OA}\\left(\\frac{3 + 1}{2\\sqrt{3}}\\right) = mg \\implies T_{OA}\\left(\\frac{2}{\\sqrt{3}}\\right) = mg \\implies T_{OA} = \\frac{\\sqrt{3}}{2}mg$$"
)

# Q30
add_q(
    "Equilibrium of concurrent forces",
    "A particle of mass $m$ is placed on a smooth horizontal table and attached to three identical horizontal springs of stiffness $k$ whose other ends are fixed at the vertices of an equilateral triangle. In the equilibrium position, each spring is extended by $x_0$. If the particle is displaced slightly from the center, the net force on it when at the center is:",
    ["$0$", "$3kx_0$", "$kx_0$", "$\\sqrt{3}kx_0$"],
    0,
    "At the center, the three spring forces have equal magnitudes $k x_0$ and are directed toward the three vertices at $120^\\circ$ to each other. Their vector sum is identically zero."
)

# Q31
add_q(
    "Equilibrium of concurrent forces",
    "If three forces acting at a point are represented in magnitude, direction, and sense by the sides of a triangle taken in order, their resultant is:",
    ["Zero", "Twice the perimeter of the triangle", "Equal to the longest side", "Infinite"],
    0,
    "By the triangle law of vector addition, $\\vec{AB} + \\vec{BC} + \\vec{CA} = 0$. Hence, their resultant is zero and the particle is in static equilibrium."
)

# Q32
add_q(
    "Equilibrium of concurrent forces",
    "A weight $W = 50\\text{ N}$ is suspended from the midpoint of a rope of length $10\\text{ m}$ stretched between two points $8\\text{ m}$ apart at the same height. The tension in the rope is:",
    ["$41.67\\text{ N}$", "$25\\text{ N}$", "$50\\text{ N}$", "$31.25\\text{ N}$"],
    0,
    "Each half of the rope has length $l = 5\\text{ m}$ and horizontal span $x = 4\\text{ m}$.\nThe sag is $y = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = 3\\text{ m}$.\n$$\\sin\\theta = \\frac{y}{l} = \\frac{3}{5} = 0.6$$\nVertical equilibrium:\n$$2 T \\sin\\theta = W \\implies 2 T (0.6) = 50 \\implies 1.2 T = 50 \\implies T = \\frac{50}{1.2} = 41.67\\text{ N}$$"
)

# Q33
add_q(
    "Equilibrium of concurrent forces",
    "Two forces of $10\\text{ N}$ each act at an angle of $120^\\circ$ on a particle. The magnitude and direction of the third force required to maintain equilibrium is:",
    [
        "$10\\text{ N}$ bisecting the angle between them externally ($180^\\circ$ to the resultant).",
        "$20\\text{ N}$ along the angle bisector.",
        "$10\\sqrt{3}\\text{ N}$ perpendicular to the bisector.",
        "$5\\text{ N}$ along the bisector."
    ],
    0,
    "Resultant of two equal forces $F$ at $120^\\circ$ is $R = 2F\\cos(120^\\circ/2) = 2(10)\\cos 60^\\circ = 10\\text{ N}$ along the angle bisector.\nThe third force must have equal magnitude ($10\\text{ N}$) and point in the exactly opposite direction."
)

# Q34
add_q(
    "Equilibrium of concurrent forces",
    "A body of mass $2\\text{ kg}$ is in equilibrium under three concurrent forces: $\\vec{F}_1 = 4\\hat{i}\\text{ N}, \\vec{F}_2 = 3\\hat{j}\\text{ N}$, and $\\vec{F}_3$. If the force $\\vec{F}_1$ is suddenly removed, the acceleration of the body will be:",
    ["$2\\text{ m/s}^2$ along $-\\hat{i}$", "$2\\text{ m/s}^2$ along $+\\hat{i}$", "$1.5\\text{ m/s}^2$ along $-\\hat{j}$", "$2.5\\text{ m/s}^2$ along $+\\hat{i}$"],
    0,
    "Initially in equilibrium: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0 \\implies \\vec{F}_2 + \\vec{F}_3 = -\\vec{F}_1$.\nWhen $\\vec{F}_1$ is removed, the remaining net force is $\\vec{F}_2 + \\vec{F}_3 = -\\vec{F}_1 = -4\\hat{i}\\text{ N}$.\n$$\\vec{a} = \\frac{\\vec{F}_{\\text{net}}}{m} = \\frac{-4\\hat{i}}{2} = -2\\hat{i}\\text{ m/s}^2$$\nThus, the acceleration is $2\\text{ m/s}^2$ along $-\\hat{i}$."
)

# Q35
add_q(
    "Equilibrium of concurrent forces",
    "A particle of mass $m$ is in equilibrium under three forces. If one force of magnitude $F$ is reversed in direction without changing its magnitude, the net resultant force on the particle becomes:",
    ["$2F$", "$F$", "$0$", "$F/2$"],
    0,
    "Initially: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F} = 0 \\implies \\vec{F}_1 + \\vec{F}_2 = -\\vec{F}$.\nWhen $\\vec{F}$ is reversed to $-\\vec{F}$:\n$$\\vec{F}_{\\text{net}} = \\vec{F}_1 + \\vec{F}_2 + (-\\vec{F}) = -\\vec{F} - \\vec{F} = -2\\vec{F}$$\nThe magnitude of the resultant is $2F$."
)

# Q36
add_q(
    "Equilibrium of concurrent forces",
    "Two strings of lengths $3\\text{ m}$ and $4\\text{ m}$ are tied to a load of mass $M = 5\\text{ kg}$. Their other ends are fixed to points on a ceiling $5\\text{ m}$ apart. The tension in the $3\\text{ m}$ string is: (Take $g = 10\\text{ m/s}^2$)",
    ["$40\\text{ N}$", "$30\\text{ N}$", "$50\\text{ N}$", "$25\\text{ N}$"],
    0,
    "The lengths $3, 4, 5$ form a right-angled triangle, with the right angle at the load!\nLet $\\theta$ be the angle of the $3\\text{ m}$ string with the vertical.\nThen $\\cos\\theta = 4/5 = 0.8$ and $\\sin\\theta = 3/5 = 0.6$.\nTension $T_1 = Mg\\cos\\theta = 5(10)(0.8) = 40\\text{ N}$."
)

# Q37
add_q(
    "Equilibrium of concurrent forces",
    "In the previous right-angled string triangle problem, the tension in the $4\\text{ m}$ string is:",
    ["$30\\text{ N}$", "$40\\text{ N}$", "$50\\text{ N}$", "$20\\text{ N}$"],
    0,
    "$$T_2 = Mg\\sin\\theta = 5(10)(0.6) = 30\\text{ N}$$"
)

# Q38
add_q(
    "Equilibrium of concurrent forces",
    "Three concurrent forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ keep a body in equilibrium. If $\\vec{F}_1$ is along north, $\\vec{F}_2$ is along east, then $\\vec{F}_3$ must be directed towards:",
    ["South-West", "North-East", "North-West", "South-East"],
    0,
    "$$\\vec{F}_1 = F_1\\hat{j}, \\quad \\vec{F}_2 = F_2\\hat{i}$$\n$$\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) = -F_2\\hat{i} - F_1\\hat{j}$$\nThis points West ($-x$) and South ($-y$), which is South-West."
)

# Q39
add_q(
    "Equilibrium of concurrent forces",
    "A cylinder of weight $W$ and radius $R$ is placed between two smooth inclined walls making angles of $30^\\circ$ and $60^\\circ$ with the horizontal. The normal force on the cylinder from the $60^\\circ$ incline is:",
    ["$\\frac{1}{2}W$", "$\\frac{\\sqrt{3}}{2}W$", "$W$", "$\\frac{W}{\\sqrt{3}}$"],
    0,
    "Since the two walls are mutually perpendicular ($30^\\circ + 60^\\circ = 90^\\circ$), resolving along the normal to the $60^\\circ$ wall gives:\n$$N_2 = W\\cos 60^\\circ = \\frac{1}{2}W$$"
)

# Q40
add_q(
    "Equilibrium of concurrent forces",
    "A body of mass $m$ is suspended by a string of length $L$. It is displaced horizontally until the tension in the string becomes twice the weight of the body. The angle made by the string with the vertical is:",
    ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$"],
    0,
    "Vertical equilibrium: $T\\cos\\theta = mg$.\nGiven $T = 2mg$:\n$$(2mg)\\cos\\theta = mg \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ$$"
)

# Q41
add_q(
    "Equilibrium of concurrent forces",
    "The condition for three concurrent forces to be in rotational equilibrium about ANY arbitrary point in space is:",
    [
        "Always satisfied automatically if their vector sum is zero.",
        "Satisfied only if the point lies on the line of action of one force.",
        "Requires that the forces must all have equal magnitudes.",
        "Requires that the forces must be mutually perpendicular."
    ],
    0,
    "For concurrent forces, all lines of action intersect at a single common point $O$. The torque about $O$ is identically zero ($\\vec{r} = 0$). If the net force $\\sum \\vec{F} = 0$, the torque about any other point $P$ is $\\vec{\\tau}_P = \\vec{\\tau}_O + \\vec{r}_{OP} \\times \\left(\\sum \\vec{F}\\right) = 0 + 0 = 0$. Thus rotational equilibrium is automatically satisfied."
)

# Q42
add_q(
    "Equilibrium of concurrent forces",
    "A bead of mass $m$ is threaded on a smooth parabolic wire $y = cx^2$ in a vertical plane. When a horizontal force $F = mg$ is applied to the bead, the equilibrium x-coordinate of the bead is:",
    ["$\\frac{1}{2c}$", "$\\frac{1}{c}$", "$\\frac{2}{c}$", "$\\frac{1}{4c}$"],
    0,
    "For equilibrium on the smooth curve, the net force along the tangent must be zero, so the slope of the curve equals $\\tan\\theta = F / mg$:\n$$\\frac{dy}{dx} = 2cx$$\n$$2cx = \\frac{F}{mg} = \\frac{mg}{mg} = 1 \\implies x = \\frac{1}{2c}$$"
)

# Q43
add_q(
    "Equilibrium of concurrent forces",
    "A traffic light of mass $15\\text{ kg}$ is suspended by two symmetrical cables making angles of $30^\\circ$ with the horizontal. The tension in each cable is: (Take $g = 10\\text{ m/s}^2$)",
    ["$150\\text{ N}$", "$300\\text{ N}$", "$75\\text{ N}$", "$150\\sqrt{3}\\text{ N}$"],
    0,
    "$$2T\\sin 30^\\circ = mg \\implies 2T(0.5) = 15(10) = 150\\text{ N} \\implies T = 150\\text{ N}$$"
)

# Q44
add_q(
    "Equilibrium of concurrent forces",
    "If five concurrent forces of equal magnitude $F$ act in a plane such that the angle between any two consecutive forces is $72^\\circ$, their resultant is:",
    ["$0$", "$5F$", "$F$", "$F\\cos 72^\\circ$"],
    0,
    "The 5 forces form a closed regular pentagon when placed in head-to-tail arrangement. Hence, their vector sum is zero."
)

# Q45
add_q(
    "Equilibrium of concurrent forces",
    "A block of weight $W$ is supported by three strings $A, B, C$ meeting at a knot. String $C$ hangs vertically supporting $W$. String $A$ is horizontal, and string $B$ makes angle $\\theta$ with the horizontal ceiling. The tension in string $B$ is:",
    ["$\\frac{W}{\\sin\\theta}$", "$\\frac{W}{\\cos\\theta}$", "$W\\sin\\theta$", "$W\\tan\\theta$"],
    0,
    "Vertical equilibrium at the knot:\n$$T_B\\sin\\theta = W \\implies T_B = \\frac{W}{\\sin\\theta}$$"
)

with open("scripts/lom/lom_batch4.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions in scripts/lom/lom_batch4.json")
