# -*- coding: utf-8 -*-
"""
Generate Batch 3 of Laws of Motion:
- Banking of roads (45 MCQs)
- Connected motion and pulley problems (45 MCQs)
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
# SUBTOPIC 5: Banking of roads (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Banking of roads",
    "The maximum safe speed of a vehicle of mass $m$ negotiating an unbanked circular curve of radius $r$ on a level road with coefficient of friction $\\mu$ is:",
    ["$\\sqrt{\\mu r g}$", "$\\sqrt{r g / \\mu}$", "$\\mu \\sqrt{r g}$", "$\\sqrt{2\\mu r g}$"],
    0,
    "The required centripetal force is provided entirely by static friction:\n$$\\frac{m v^2}{r} \\le \\mu m g \\implies v_{\\text{max}} = \\sqrt{\\mu r g}$$"
)

# Q2
add_q(
    "Banking of roads",
    "A car of mass $1000\\text{ kg}$ rounds a level curve of radius $50\\text{ m}$ at a speed of $14\\text{ m/s}$. The minimum coefficient of static friction required between the tires and the road to prevent skidding is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$0.20$", "$0.40$", "$0.50$", "$0.60$"],
    1,
    "$$\\mu \\ge \\frac{v^2}{r g} = \\frac{14^2}{50 \\times 9.8} = \\frac{196}{490} = 0.40$$"
)

# Q3
add_q(
    "Banking of roads",
    "A cyclist negotiates a level circular curve of radius $10\\sqrt{3}\\text{ m}$ at a speed of $10\\text{ m/s}$. The angle made by the cycle frame with the vertical to prevent skidding or falling is: (Take $g = 10\\text{ m/s}^2$)",
    ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$15^\\circ$"],
    0,
    "$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{10^2}{(10\\sqrt{3})(10)} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ$$"
)

# Q4
add_q(
    "Banking of roads",
    "For a road banked at an angle $\\theta$ of radius $r$, the optimum speed $v_0$ at which no frictional force is required between the tires and the road is:",
    ["$\\sqrt{rg\\tan\\theta}$", "$\\sqrt{rg\\sin\\theta}$", "$\\sqrt{rg\\cos\\theta}$", "$\\sqrt{rg\\cot\\theta}$"],
    0,
    "$$N\\sin\\theta = \\frac{mv^2}{r}, \\quad N\\cos\\theta = mg \\implies \\tan\\theta = \\frac{v^2}{rg} \\implies v_0 = \\sqrt{rg\\tan\\theta}$$"
)

# Q5
add_q(
    "Banking of roads",
    "The normal reaction exerted by a smooth banked road (angle $\\theta$) on a car moving at the design speed $v_0 = \\sqrt{rg\\tan\\theta}$ is:",
    ["$mg\\cos\\theta$", "$\\frac{mg}{\\cos\\theta}$", "$mg\\sin\\theta$", "$mg$"],
    1,
    "$$N\\cos\\theta = mg \\implies N = \\frac{mg}{\\cos\\theta}$$"
)

# Q6
add_q(
    "Banking of roads",
    "A circular track of radius $100\\text{ m}$ is banked for a speed of $72\\text{ km/h}$. The banking angle $\\theta$ is: (Take $g = 10\\text{ m/s}^2$)",
    ["$\\tan^{-1}(0.2)$", "$\\tan^{-1}(0.4)$", "$\\tan^{-1}(0.5)$", "$\\tan^{-1}(0.8)$"],
    1,
    "$$v = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$$\n$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{20^2}{100 \\times 10} = \\frac{400}{1000} = 0.40 \\implies \\theta = \\tan^{-1}(0.4)$$"
)

# Q7
add_q(
    "Banking of roads",
    "On a rough banked curved road of radius $r$ and angle $\\theta$ with coefficient of friction $\\mu$, the maximum safe speed without skidding outwards is:",
    [
        "$\\sqrt{rg\\left(\\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta}\\right)}$",
        "$\\sqrt{rg\\left(\\frac{\\tan\\theta - \\mu}{1 + \\mu\\tan\\theta}\\right)}$",
        "$\\sqrt{rg(\\tan\\theta + \\mu)}$",
        "$\\sqrt{\\frac{rg}{\\tan\\theta + \\mu}}$"
    ],
    0,
    "At maximum speed, friction acts down the incline:\n$$v_{\\text{max}} = \\sqrt{rg\\left(\\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta}\\right)}$$"
)

# Q8
add_q(
    "Banking of roads",
    "The minimum safe speed of a vehicle on the same rough banked road to prevent it from sliding inwards down the incline is:",
    [
        "$\\sqrt{rg\\left(\\frac{\\tan\\theta - \\mu}{1 + \\mu\\tan\\theta}\\right)}$",
        "$\\sqrt{rg\\left(\\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta}\\right)}$",
        "$\\sqrt{rg(\\tan\\theta - \\mu)}$",
        "$0$"
    ],
    0,
    "At minimum speed, friction acts upwards along the incline:\n$$v_{\\text{min}} = \\sqrt{rg\\left(\\frac{\\tan\\theta - \\mu}{1 + \\mu\\tan\\theta}\\right)}$$"
)

# Q9
add_q(
    "Banking of roads",
    "A four-wheeler of mass $m$ with distance between wheels $2d$ and height of center of mass $h$ negotiates an unbanked circular curve of radius $r$. The maximum speed without overturning is:",
    ["$\\sqrt{\\frac{grd}{h}}$", "$\\sqrt{\\frac{grh}{d}}$", "$\\sqrt{\\frac{2grd}{h}}$", "$\\sqrt{\\frac{grd}{2h}}$"],
    0,
    "Balancing overturning torque about the outer wheel: $\\frac{mv^2}{r}h = mg d \\implies v_{\\text{max}} = \\sqrt{\\frac{grd}{h}}$."
)

# Q10
add_q(
    "Banking of roads",
    "When a four-wheeler rounds a sharp unbanked curve at an excessive speed, which wheels leave the ground first?",
    [
        "The inner wheels.",
        "The outer wheels.",
        "The front wheels.",
        "Both inner and outer wheels simultaneously."
    ],
    0,
    "Centrifugal torque reduces normal force on the inner wheels and increases it on outer wheels. Hence inner wheels lift off first."
)

# Q11
add_q(
    "Banking of roads",
    "A conical pendulum has a bob of mass $m$ attached to a light string of length $L$ executing horizontal circular motion at an angle $\\theta$ with the vertical. The tension in the string is:",
    ["$\\frac{mg}{\\cos\\theta}$", "$mg\\cos\\theta$", "$mg\\sin\\theta$", "$\\frac{mg}{\\sin\\theta}$"],
    0,
    "$$T\\cos\\theta = mg \\implies T = \\frac{mg}{\\cos\\theta}$$"
)

# Q12
add_q(
    "Banking of roads",
    "The time period of the conical pendulum of length $L$ making angle $\\theta$ with the vertical is:",
    ["$2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$", "$2\\pi\\sqrt{\\frac{L}{g}}$", "$2\\pi\\sqrt{\\frac{L\\sin\\theta}{g}}$", "$2\\pi\\sqrt{\\frac{L}{g\\cos\\theta}}$"],
    0,
    "$$T_{\\text{period}} = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$$"
)

# Q13
add_q(
    "Banking of roads",
    "In a rotor (death well) of radius $R$, a person of mass $m$ stands against the vertical wall as it spins with angular speed $\\omega$. If the floor drops away, the minimum angular speed $\\omega$ to prevent the person from falling down is: (Coefficient of static friction is $\\mu$)",
    ["$\\sqrt{\\frac{g}{\\mu R}}$", "$\\sqrt{\\frac{\\mu g}{R}}$", "$\\sqrt{\\frac{g}{R}}$", "$\\frac{g}{\\mu R}$"],
    0,
    "$$mg \\le \\mu N = \\mu m\\omega^2 R \\implies \\omega_{\\text{min}} = \\sqrt{\\frac{g}{\\mu R}}$$"
)

# Q14
add_q(
    "Banking of roads",
    "A death well of radius $4\\text{ m}$ has a wall with $\\mu = 0.4$. The minimum speed with which a motorcyclist must ride horizontally inside it is: (Take $g = 10\\text{ m/s}^2$)",
    ["$10\\text{ m/s}$", "$15\\text{ m/s}$", "$20\\text{ m/s}$", "$5\\text{ m/s}$"],
    0,
    "$$v_{\\text{min}} = \\sqrt{\\frac{g R}{\\mu}} = \\sqrt{\\frac{10 \\times 4}{0.4}} = 10\\text{ m/s}$$"
)

# Q15
add_q(
    "Banking of roads",
    "An airplane banks at an angle of $45^\\circ$ to make a horizontal turn of radius $1000\\text{ m}$. The speed of the airplane is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$70\\text{ m/s}$", "$98.99\\text{ m/s}$", "$140\\text{ m/s}$", "$50\\text{ m/s}$"],
    1,
    "$$\\tan 45^\\circ = \\frac{v^2}{rg} \\implies 1 = \\frac{v^2}{1000 \\times 9.8} \\implies v = \\sqrt{9800} \\approx 98.99\\text{ m/s}$$"
)

# Q16
add_q(
    "Banking of roads",
    "On a railway track, the outer rail is elevated above the inner rail by a height $h$. If the distance between the rails is $d$ (track gauge) and the radius of the curve is $r$, the required super-elevation $h$ for speed $v$ is: (assuming $h \\ll d$)",
    ["$\\frac{v^2 d}{rg}$", "$\\frac{v^2 r}{dg}$", "$\\frac{v^2 g}{rd}$", "$\\frac{rd g}{v^2}$"],
    0,
    "$$\\tan\\theta \\approx \\frac{h}{d} = \\frac{v^2}{rg} \\implies h = \\frac{v^2 d}{rg}$$"
)

# Q17
add_q(
    "Banking of roads",
    "A train moves on a circular track of radius $800\\text{ m}$ with gauge $1.5\\text{ m}$ at a speed of $72\\text{ km/h}$. The height of the outer rail above the inner rail should be: (Take $g = 10\\text{ m/s}^2$)",
    ["$0.075\\text{ m}$", "$0.050\\text{ m}$", "$0.100\\text{ m}$", "$0.150\\text{ m}$"],
    0,
    "$$v = 20\\text{ m/s}, \\quad h = \\frac{20^2 \\times 1.5}{800 \\times 10} = \\frac{600}{8000} = 0.075\\text{ m} = 7.5\\text{ cm}$$"
)

# Q18
add_q(
    "Banking of roads",
    "If a vehicle rounds a curve of radius $r$ banked at angle $\\theta$ with a speed $v < \\sqrt{rg\\tan\\theta}$, the friction on the tires acts:",
    [
        "Upwards along the incline.",
        "Downwards along the incline.",
        "Perpendicular to the incline.",
        "Zero."
    ],
    0,
    "When speed is below the design speed, gravity component down the incline dominates, so friction acts upwards along the incline to prevent slipping inwards."
)

# Q19
add_q(
    "Banking of roads",
    "If the speed of the vehicle on the banked curve is $v > \\sqrt{rg\\tan\\theta}$, the friction on the tires acts:",
    [
        "Downwards along the incline.",
        "Upwards along the incline.",
        "Along the direction of velocity.",
        "Opposite to the direction of velocity."
    ],
    0,
    "When speed exceeds design speed, the vehicle tends to skid outwards, so friction acts downwards along the inclined surface."
)

# Q20
add_q(
    "Banking of roads",
    "A plumb line suspended from the ceiling of a car taking a horizontal curve of radius $r = 20\\text{ m}$ at speed $v = 10\\text{ m/s}$ deflects by an angle $\\theta$. The value of $\\theta$ is: (Take $g = 10\\text{ m/s}^2$)",
    ["$\\tan^{-1}(0.5)$", "$\\tan^{-1}(1.0)$", "$\\tan^{-1}(0.25)$", "$\\tan^{-1}(2.0)$"],
    0,
    "$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{100}{200} = 0.5 \\implies \\theta = \\tan^{-1}(0.5)$$"
)

# Q21
add_q(
    "Banking of roads",
    "The apparent weight of a passenger in an aircraft of mass $m$ flying at speed $v$ executing a coordinated banked horizontal turn of radius $r$ is:",
    ["$m\\sqrt{g^2 + \\left(\\frac{v^2}{r}\\right)^2}$", "$mg$", "$m\\left(g + \\frac{v^2}{r}\\right)$", "$m\\left(g - \\frac{v^2}{r}\\right)$"],
    0,
    "Effective gravity is the vector sum of downward gravity and horizontal centrifugal acceleration: $g_{\\text{eff}} = \\sqrt{g^2 + (v^2/r)^2}$."
)

# Q22
add_q(
    "Banking of roads",
    "A car travels around a banked circular track at the design speed $v_0$. Which force provides the necessary centripetal force?",
    [
        "The horizontal component of the normal reaction.",
        "The vertical component of the normal reaction.",
        "Static friction along the incline.",
        "Kinetic friction."
    ],
    0,
    "At design speed, $N\\sin\\theta$ provides the full centripetal force and no friction is called upon."
)

# Q23
add_q(
    "Banking of roads",
    "A curved road of radius $50\\text{ m}$ is banked at an angle of $45^\\circ$. If the coefficient of static friction is $\\mu_s = 0.5$, the maximum safe speed is: (Take $g = 10\\text{ m/s}^2$)",
    ["$38.7\\text{ m/s}$", "$25.5\\text{ m/s}$", "$15.8\\text{ m/s}$", "$50.0\\text{ m/s}$"],
    0,
    "$$v_{\\text{max}} = \\sqrt{50(10)\\left(\\frac{1 + 0.5}{1 - 0.5}\\right)} = \\sqrt{500 \\times 3} \\approx 38.73\\text{ m/s}$$"
)

# Q24
add_q(
    "Banking of roads",
    "In the same banked road setup ($\\theta = 45^\\circ, r = 50\\text{ m}, \\mu_s = 0.5$), the minimum safe speed without slipping down is: (Take $g = 10\\text{ m/s}^2$)",
    ["$12.9\\text{ m/s}$", "$10.0\\text{ m/s}$", "$15.0\\text{ m/s}$", "$8.5\\text{ m/s}$"],
    0,
    "$$v_{\\text{min}} = \\sqrt{50(10)\\left(\\frac{1 - 0.5}{1 + 0.5}\\right)} = \\sqrt{\\frac{500}{3}} \\approx 12.91\\text{ m/s}$$"
)

# Q25
add_q(
    "Banking of roads",
    "If the banking angle is $\\theta = 30^\\circ$ and the coefficient of friction is $\\mu = 1/\\sqrt{3}$, the minimum speed to avoid slipping inwards is:",
    ["$0$", "$\\sqrt{rg/\\sqrt{3}}$", "$\\sqrt{rg}$", "$\\sqrt{2rg}$"],
    0,
    "Since $\\mu = \\tan 30^\\circ$, static friction alone can prevent slipping at rest, so $v_{\\text{min}} = 0$."
)

# Q26
add_q(
    "Banking of roads",
    "In a conical pendulum with string of length $L$ making angle $\\theta = 60^\\circ$ with the vertical, the tension in the string is:",
    ["$2mg$", "$mg$", "$\\sqrt{3}mg$", "$mg/2$"],
    0,
    "$$T = \\frac{mg}{\\cos 60^\\circ} = \\frac{mg}{0.5} = 2mg$$"
)

# Q27
add_q(
    "Banking of roads",
    "A cyclist taking a turn leans inward to:",
    [
        "Provide a torque about the center of mass that balances the overturning torque of friction.",
        "Reduce the normal reaction.",
        "Increase the coefficient of friction.",
        "Reduce centripetal acceleration."
    ],
    0,
    "The friction force $f$ at the ground produces an overturning torque about the CM. Leaning inward allows the normal reaction $N$ to exert an opposing torque about the CM, ensuring rotational equilibrium."
)

# Q28
add_q(
    "Banking of roads",
    "Two cars $A$ and $B$ of masses $1000\\text{ kg}$ and $2000\\text{ kg}$ respectively travel on the same unbanked circular curve of radius $R$ with the same tire-road friction coefficient $\\mu$. The ratio of their maximum safe speeds $v_A/v_B$ is:",
    ["$1$", "$1/2$", "$2$", "$\\sqrt{2}$"],
    0,
    "Since $v_{\\text{max}} = \\sqrt{\\mu g R}$ is independent of vehicle mass, the ratio is $1$."
)

# Q29
add_q(
    "Banking of roads",
    "In a death well, if the coefficient of friction between the wall and the tires is doubled, the minimum required angular speed $\\omega$ for safe riding will:",
    ["Decrease by a factor of $\\sqrt{2}$", "Increase by a factor of $\\sqrt{2}$", "Be halved", "Remain unchanged"],
    0,
    "Since $\\omega_{\\text{min}} = \\sqrt{\\frac{g}{\\mu R}} \\propto \\frac{1}{\\sqrt{\\mu}}$, doubling $\\mu$ decreases $\\omega_{\\text{min}}$ by a factor of $\\sqrt{2}$."
)

# Q30
add_q(
    "Banking of roads",
    "A conical pendulum of string length $L = 1\\text{ m}$ has a bob rotating horizontally at angle $\\theta = 45^\\circ$ with the vertical. The radius of the circular path is: (Take $\\sqrt{2} \\approx 1.414$)",
    ["$0.707\\text{ m}$", "$1.0\\text{ m}$", "$0.5\\text{ m}$", "$1.414\\text{ m}$"],
    0,
    "$$r = L\\sin\\theta = 1 \\times \\sin 45^\\circ = \\frac{1}{\\sqrt{2}} \\approx 0.707\\text{ m}$$"
)

# Q31
add_q(
    "Banking of roads",
    "An aircraft executes a horizontal turn at a bank angle of $60^\\circ$. The load factor $n = L/mg$ experienced by the aircraft structure is:",
    ["$2$", "$1.5$", "$\\sqrt{3}$", "$0.5$"],
    0,
    "In a coordinated turn: $L\\cos\\theta = mg \\implies \\frac{L}{mg} = \\frac{1}{\\cos 60^\\circ} = \\frac{1}{0.5} = 2$."
)

# Q32
add_q(
    "Banking of roads",
    "If a car travels on a banked road with zero friction at a speed greater than the design speed, the car will:",
    [
        "Skid up the banked surface.",
        "Slide down the banked surface.",
        "Overturn toward the center.",
        "Continue without any tendency to slide."
    ],
    0,
    "At speed $v > v_0$, the horizontal component of normal force is insufficient to provide the necessary centripetal force ($N\\sin\\theta < mv^2/r$). Without friction, the car skids up the banked surface."
)

# Q33
add_q(
    "Banking of roads",
    "A curve of radius $30\\text{ m}$ on a level road is icy with $\\mu = 0.1$. The maximum safe speed is: (Take $g = 10\\text{ m/s}^2$)",
    ["$\\sqrt{30}\\text{ m/s}$", "$3\\text{ m/s}$", "$30\\text{ m/s}$", "$10\\text{ m/s}$"],
    0,
    "$$v_{\\text{max}} = \\sqrt{\\mu g R} = \\sqrt{0.1 \\times 10 \\times 30} = \\sqrt{30} \\approx 5.48\\text{ m/s}$$"
)

# Q34
add_q(
    "Banking of roads",
    "The banking angle of a circular track depends on:",
    [
        "Speed of vehicle and radius of track, but not on mass of vehicle.",
        "Mass of vehicle and speed only.",
        "Mass of vehicle and radius of track only.",
        "Mass of vehicle, speed, and radius of track."
    ],
    0,
    "$$\\tan\\theta = \\frac{v^2}{rg}$$\nIt depends on $v$ and $r$, but is completely independent of the mass $m$ of the vehicle."
)

# Q35
add_q(
    "Banking of roads",
    "A coin placed at a distance of $9\\text{ cm}$ from the center of a rotating turntable just slips when the frequency of rotation is $33\\frac{1}{3}\\text{ rpm}$. If the coin is placed at $16\\text{ cm}$ from the center, the frequency at which it will just slip is:",
    ["$25\\text{ rpm}$", "$20\\text{ rpm}$", "$30\\text{ rpm}$", "$15\\text{ rpm}$"],
    0,
    "Condition for slipping: $\\mu g = \\omega^2 r = (2\\pi f)^2 r \\implies f^2 r = \\text{constant}$.\n$$f_1^2 r_1 = f_2^2 r_2 \\implies \\left(\\frac{100}{3}\\right)^2 (9) = f_2^2 (16)$$\n$$\\frac{10000}{9} \\times 9 = 16 f_2^2 \\implies 10000 = 16 f_2^2 \\implies f_2 = \\frac{100}{4} = 25\\text{ rpm}$$"
)

# Q36
add_q(
    "Banking of roads",
    "A bucket containing water is rotated in a vertical circle of radius $r = 1.6\\text{ m}$. The minimum speed at the highest point so that water does not spill out is: (Take $g = 10\\text{ m/s}^2$)",
    ["$4\\text{ m/s}$", "$5\\text{ m/s}$", "$2\\text{ m/s}$", "$8\\text{ m/s}$"],
    0,
    "At the highest point, for water not to leave the bottom of the bucket, normal force $N \\ge 0$:\n$$\\frac{mv^2}{r} \\ge mg \\implies v \\ge \\sqrt{rg} = \\sqrt{1.6 \\times 10} = \\sqrt{16} = 4\\text{ m/s}$$"
)

# Q37
add_q(
    "Banking of roads",
    "In an unbanked circular curve, overturning of a vehicle is prevented if:",
    ["$\\mu < d/h$", "$\\mu > d/h$", "$\\mu > 2d/h$", "$\\mu = 1$"],
    0,
    "The maximum speed before skidding is $v_s = \\sqrt{\\mu g r}$. The maximum speed before overturning is $v_o = \\sqrt{\\frac{grd}{h}}$.\nFor the vehicle to skid rather than overturn, $v_s < v_o \\implies \\mu < d/h$."
)

# Q38
add_q(
    "Banking of roads",
    "A motorcyclist rides in a horizontal circle on the inner wall of a vertical cylindrical room of radius $R$. The normal force exerted by the wall on the motorcycle is:",
    ["$m\\frac{v^2}{R}$", "$mg$", "$m\\left(g + \\frac{v^2}{R}\\right)$", "$\\frac{mg}{\\mu}$"],
    0,
    "The wall provides the horizontal centripetal force: $N = \\frac{mv^2}{R}$."
)

# Q39
add_q(
    "Banking of roads",
    "The angle of banking $\\theta$ for a railway track of radius $r = 500\\text{ m}$ designed for trains running at $90\\text{ km/h}$ is: (Take $g = 10\\text{ m/s}^2$)",
    ["$\\tan^{-1}(0.125)$", "$\\tan^{-1}(0.25)$", "$\\tan^{-1}(0.5)$", "$\\tan^{-1}(0.0625)$"],
    0,
    "$$v = 90 \\times \\frac{5}{18} = 25\\text{ m/s}$$\n$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{25^2}{500 \\times 10} = \\frac{625}{5000} = 0.125 \\implies \\theta = \\tan^{-1}(0.125)$$"
)

# Q40
add_q(
    "Banking of roads",
    "A car of mass $m$ takes a banked curve of radius $r$ at the design speed $v_0$. If the banking angle is $\\theta = 45^\\circ$, then:",
    ["$v_0 = \\sqrt{rg}$", "$v_0 = \\sqrt{2rg}$", "$v_0 = \\sqrt{rg/2}$", "$v_0 = rg$"],
    0,
    "$$v_0 = \\sqrt{rg\\tan 45^\\circ} = \\sqrt{rg(1)} = \\sqrt{rg}$$"
)

# Q41
add_q(
    "Banking of roads",
    "When a conical pendulum swings with $\\theta \\to 90^\\circ$, the tension in the string approaches:",
    ["$\\infty$", "$0$", "$mg$", "$2mg$"],
    0,
    "Since $T = \\frac{mg}{\\cos\\theta}$, as $\\theta \\to 90^\\circ$, $\\cos\\theta \\to 0$, so $T \\to \\infty$. (A string can never be completely horizontal in a conical pendulum under gravity)."
)

# Q42
add_q(
    "Banking of roads",
    "A car moving on a banked road has normal reaction $N$. Compared to its static weight $mg$, the normal reaction $N$ is always:",
    ["Greater than $mg$", "Less than $mg$", "Equal to $mg$", "Zero"],
    0,
    "Since $N\\cos\\theta = mg$ and $\\cos\\theta < 1$ for $\\theta > 0$, $N = \\frac{mg}{\\cos\\theta} > mg$."
)

# Q43
add_q(
    "Banking of roads",
    "A motorcycle moves around a vertical circular loop of radius $R$ inside a globe of death. The minimum speed at the lowest point of the loop to complete the loop is:",
    ["$\\sqrt{5gR}$", "$\\sqrt{3gR}$", "$\\sqrt{gR}$", "$\\sqrt{2gR}$"],
    0,
    "By conservation of energy, the speed at the bottom must satisfy $v_{\\text{bottom}} \\ge \\sqrt{5gR}$ for the rider to maintain contact ($N \\ge 0$) at the top."
)

# Q44
add_q(
    "Banking of roads",
    "In an unbanked circular curve, raising the center of mass of a vehicle:",
    ["Decreases the overturning speed.", "Increases the overturning speed.", "Has no effect on overturning.", "Prevents skidding."],
    0,
    "Overturning speed is $v = \\sqrt{\\frac{grd}{h}}$. As $h$ increases, $v$ decreases, making overturning more likely."
)

# Q45
add_q(
    "Banking of roads",
    "A hemispherical bowl of radius $R$ rotates about its vertical axis of symmetry with angular speed $\\omega$. A small bead of mass $m$ rests on the smooth inner surface at angle $\\theta$ from the lowest point. The equilibrium angle satisfies:",
    ["$\\cos\\theta = \\frac{g}{\\omega^2 R}$", "$\\sin\\theta = \\frac{g}{\\omega^2 R}$", "$\\tan\\theta = \\frac{\\omega^2 R}{g}$", "$\\cos\\theta = \\frac{\\omega^2 R}{g}$"],
    0,
    "Radius of circular path of bead is $r = R\\sin\\theta$.\nNormal force resolves into $N\\cos\\theta = mg$ and $N\\sin\\theta = m\\omega^2 r = m\\omega^2 R\\sin\\theta$.\nFrom the second equation, $N = m\\omega^2 R$.\nSubstitute into the first: $(m\\omega^2 R)\\cos\\theta = mg \\implies \\cos\\theta = \\frac{g}{\\omega^2 R}$."
)


# ==============================================================================
# SUBTOPIC 6: Connected motion and pulley problems (45 Questions)
# ==============================================================================

# Q46
add_q(
    "Connected motion and pulley problems",
    "In an ideal Atwood machine, two masses $m_1 = 5\\text{ kg}$ and $m_2 = 3\\text{ kg}$ are connected by a light inextensible string passing over a frictionless pulley. The acceleration of the masses is: (Take $g = 9.8\\text{ m/s}^2$)",
    ["$2.45\\text{ m/s}^2$", "$4.90\\text{ m/s}^2$", "$1.22\\text{ m/s}^2$", "$9.80\\text{ m/s}^2$"],
    0,
    "$$a = \\frac{m_1 - m_2}{m_1 + m_2}g = \\frac{5 - 3}{5 + 3}(9.8) = 2.45\\text{ m/s}^2$$"
)

# Q47
add_q(
    "Connected motion and pulley problems",
    "In the previous Atwood machine ($m_1 = 5\\text{ kg}, m_2 = 3\\text{ kg}, g = 9.8\\text{ m/s}^2$), the tension in the string is:",
    ["$36.75\\text{ N}$", "$73.5\\text{ N}$", "$49.0\\text{ N}$", "$24.5\\text{ N}$"],
    0,
    "$$T = \\frac{2m_1 m_2}{m_1 + m_2}g = \\frac{2(5)(3)}{8}(9.8) = 36.75\\text{ N}$$"
)

# Q48
add_q(
    "Connected motion and pulley problems",
    "The total force exerted by the string on the pulley axle in the Atwood machine is:",
    ["$73.5\\text{ N}$", "$36.75\\text{ N}$", "$80.0\\text{ N}$", "$49.0\\text{ N}$"],
    0,
    "$$F = 2T = 2 \\times 36.75 = 73.5\\text{ N}$$"
)

# Q49
add_q(
    "Connected motion and pulley problems",
    "A block of mass $M$ on a smooth horizontal table is connected by a string passing over a light frictionless pulley at the edge to a hanging mass $m$. The acceleration of the system is:",
    ["$\\frac{m g}{M + m}$", "$\\frac{M g}{M + m}$", "$g$", "$\\frac{m g}{M}$"],
    0,
    "$$a = \\frac{mg}{M + m}$$"
)

# Q50
add_q(
    "Connected motion and pulley problems",
    "In the previous system, the tension in the string connecting the blocks is:",
    ["$\\frac{M m g}{M + m}$", "$\\frac{m g}{M + m}$", "$mg$", "$\\frac{2Mm g}{M + m}$"],
    0,
    "$$T = Ma = \\frac{Mmg}{M + m}$$"
)

# Q51
add_q(
    "Connected motion and pulley problems",
    "If the table in the previous system is rough with coefficient of kinetic friction $\\mu$, the acceleration of the system is:",
    ["$\\frac{(m - \\mu M)g}{M + m}$", "$\\frac{(M - \\mu m)g}{M + m}$", "$\\frac{mg}{M + m}$", "$\\frac{\\mu mg}{M + m}$"],
    0,
    "$$a = \\frac{mg - \\mu Mg}{M + m} = \\frac{(m - \\mu M)g}{M + m}$$"
)

# Q52
add_q(
    "Connected motion and pulley problems",
    "Two blocks of masses $m_1$ and $m_2$ ($m_1 > m_2$) are placed on two smooth inclined planes of inclinations $\\alpha$ and $\\beta$ respectively, connected by a string passing over a pulley at the top ridge. The acceleration of the system is:",
    ["$\\frac{(m_1\\sin\\alpha - m_2\\sin\\beta)g}{m_1 + m_2}$", "$\\frac{(m_1\\cos\\alpha - m_2\\cos\\beta)g}{m_1 + m_2}$", "$\\frac{(m_1 - m_2)g}{m_1 + m_2}$", "$\\frac{(m_1\\sin\\alpha + m_2\\sin\\beta)g}{m_1 + m_2}$"],
    0,
    "$$a = \\frac{m_1 g\\sin\\alpha - m_2 g\\sin\\beta}{m_1 + m_2} = \\frac{(m_1\\sin\\alpha - m_2\\sin\\beta)g}{m_1 + m_2}$$"
)

# Q53
add_q(
    "Connected motion and pulley problems",
    "In a movable pulley system, a mass $M$ is suspended from a movable pulley $P$, and one end of the string is fixed to the ceiling while the other end goes over a fixed pulley to a hanging mass $m$. The constraint relation between the acceleration $a_M$ of mass $M$ and $a_m$ of mass $m$ is:",
    ["$a_m = 2 a_M$", "$a_M = 2 a_m$", "$a_m = a_M$", "$a_m = 4 a_M$"],
    0,
    "$$\\sum \\vec{T}\\cdot\\vec{a} = 0 \\implies 2T a_M - T a_m = 0 \\implies a_m = 2a_M$$"
)

# Q54
add_q(
    "Connected motion and pulley problems",
    "In the movable pulley setup described above, if $M = 4\\text{ kg}$ and $m = 3\\text{ kg}$, the acceleration of mass $m$ is: (Take $g = 10\\text{ m/s}^2$)",
    ["$2.5\\text{ m/s}^2$", "$1.25\\text{ m/s}^2$", "$5.0\\text{ m/s}^2$", "$3.75\\text{ m/s}^2$"],
    0,
    "$$a = \\frac{(2m - M)g}{4m + M} = \\frac{(6 - 4)(10)}{12 + 4} = \\frac{20}{16} = 1.25\\text{ m/s}^2$$\n$$a_m = 2a = 2.5\\text{ m/s}^2$$"
)

# Q55
add_q(
    "Connected motion and pulley problems",
    "A heavy uniform rope of mass $m$ and length $L$ connects two blocks of masses $m_1$ and $m_2$ on a smooth horizontal table. A horizontal force $F$ is applied to $m_1$ pulling the system. The tension at the midpoint of the rope is:",
    [
        "$\\frac{m_2 + m/2}{m_1 + m_2 + m} F$",
        "$\\frac{m_1 + m/2}{m_1 + m_2 + m} F$",
        "$\\frac{m_2}{m_1 + m_2 + m} F$",
        "$\\frac{1}{2}F$"
    ],
    0,
    "$$T_{\\text{mid}} = (m_2 + m/2)a = \\frac{m_2 + m/2}{m_1 + m_2 + m}F$$"
)

# Q56
add_q(
    "Connected motion and pulley problems",
    "Three blocks $A$, $B$, and $C$ of masses $1\\text{ kg}$, $2\\text{ kg}$, and $3\\text{ kg}$ are connected by light strings and placed on a frictionless table. A force $F = 12\\text{ N}$ pulls block $C$. The tension in the string between $A$ and $B$ is:",
    ["$2\\text{ N}$", "$4\\text{ N}$", "$6\\text{ N}$", "$8\\text{ N}$"],
    0,
    "$$a = \\frac{12}{1 + 2 + 3} = 2\\text{ m/s}^2, \\quad T_{AB} = m_A a = 1(2) = 2\\text{ N}$$"
)

# Q57
add_q(
    "Connected motion and pulley problems",
    "In the previous system of three blocks, the tension in the string between $B$ and $C$ is:",
    ["$6\\text{ N}$", "$4\\text{ N}$", "$8\\text{ N}$", "$10\\text{ N}$"],
    0,
    "$$T_{BC} = (m_A + m_B)a = (1 + 2)(2) = 6\\text{ N}$$"
)

# Q58
add_q(
    "Connected motion and pulley problems",
    "An Atwood machine with masses $m_1 = 3\\text{ kg}$ and $m_2 = 1\\text{ kg}$ is placed inside an elevator ascending with acceleration $a_0 = 2\\text{ m/s}^2$. The acceleration of $m_1$ relative to the elevator is: (Take $g = 10\\text{ m/s}^2$)",
    ["$6\\text{ m/s}^2$", "$5\\text{ m/s}^2$", "$4\\text{ m/s}^2$", "$3\\text{ m/s}^2$"],
    0,
    "$$g_{\\text{eff}} = 10 + 2 = 12\\text{ m/s}^2, \\quad a_{\\text{rel}} = \\frac{3 - 1}{3 + 1}(12) = 6\\text{ m/s}^2$$"
)

# Q59
add_q(
    "Connected motion and pulley problems",
    "Two blocks of masses $m_1$ and $m_2$ are connected by a spring of force constant $k$ on a smooth horizontal surface. If a constant horizontal force $F$ is applied to $m_1$ pulling away from $m_2$, the maximum extension of the spring is:",
    ["$\\frac{2 m_2 F}{k(m_1 + m_2)}$", "$\\frac{m_2 F}{k(m_1 + m_2)}$", "$\\frac{2 m_1 F}{k(m_1 + m_2)}$", "$\\frac{F}{k}$"],
    0,
    "$$x_{\\text{max}} = 2 x_{\\text{eq}} = \\frac{2 m_2 F}{k(m_1 + m_2)}$$"
)

# Q60
add_q(
    "Connected motion and pulley problems",
    "A block of mass $m$ is supported by two light strings symmetrically inclined at an angle $\\theta$ to the horizontal. The tension in each string is:",
    ["$\\frac{mg}{2\\sin\\theta}$", "$\\frac{mg}{2\\cos\\theta}$", "$\\frac{mg}{\\sin\\theta}$", "$mg\\sin\\theta$"],
    0,
    "$$2T\\sin\\theta = mg \\implies T = \\frac{mg}{2\\sin\\theta}$$"
)

# Q61
add_q(
    "Connected motion and pulley problems",
    "A mass $m$ is suspended by a string from a rigid support. A horizontal force $F$ is applied to the mass so that the string is inclined at an angle $\\theta$ to the vertical in equilibrium. The magnitude of $F$ and the tension $T$ are respectively:",
    ["$mg\\tan\\theta, \\frac{mg}{\\cos\\theta}$", "$mg\\sin\\theta, mg\\cos\\theta$", "$mg\\cot\\theta, mg$", "$mg\\tan\\theta, mg\\cos\\theta$"],
    0,
    "$$T\\sin\\theta = F, \\quad T\\cos\\theta = mg \\implies F = mg\\tan\\theta, \\quad T = \\frac{mg}{\\cos\\theta}$$"
)

# Q62
add_q(
    "Connected motion and pulley problems",
    "A wedge of mass $M$ with angle $\\theta$ can slide horizontally on a frictionless floor. A block of mass $m$ is placed on its smooth inclined face. If the block slides down the wedge, the horizontal acceleration of the wedge is:",
    ["$\\frac{mg\\sin\\theta\\cos\\theta}{M + m\\sin^2\\theta}$", "$\\frac{mg\\sin\\theta}{M + m}$", "$\\frac{mg\\cos\\theta}{M + m\\cos^2\\theta}$", "$g\\tan\\theta$"],
    0,
    "$$A = \\frac{mg\\sin\\theta\\cos\\theta}{M + m\\sin^2\\theta}$$"
)

# Q63
add_q(
    "Connected motion and pulley problems",
    "Two masses $m_1 = 4\\text{ kg}$ and $m_2 = 1\\text{ kg}$ are connected by a string passing over a pulley. Mass $m_1$ is on a smooth $30^\\circ$ inclined plane, and $m_2$ hangs freely vertically. The acceleration of the system is: (Take $g = 10\\text{ m/s}^2$)",
    ["$2\\text{ m/s}^2$", "$4\\text{ m/s}^2$", "$1\\text{ m/s}^2$", "$3\\text{ m/s}^2$"],
    0,
    "$$a = \\frac{4(10)(0.5) - 1(10)}{4 + 1} = \\frac{20 - 10}{5} = 2\\text{ m/s}^2$$"
)

# Q64
add_q(
    "Connected motion and pulley problems",
    "In the previous question, the tension in the string is:",
    ["$12\\text{ N}$", "$16\\text{ N}$", "$10\\text{ N}$", "$8\\text{ N}$"],
    0,
    "$$T = m_2(g + a) = 1(10 + 2) = 12\\text{ N}$$"
)

# Q65
add_q(
    "Connected motion and pulley problems",
    "A monkey of mass $m$ climbs up a rope which passes over a frictionless light pulley and is connected to a counterweight of equal mass $m$. As the monkey accelerates upwards relative to the rope, the counterweight:",
    [
        "Accelerates upwards with the same acceleration as the monkey.",
        "Remains stationary.",
        "Accelerates downwards.",
        "Accelerates upwards with half the monkey's acceleration."
    ],
    0,
    "Since the tension $T$ is identical on both sides, both the monkey and counterweight experience identical net force $T - mg$, giving both identical upward accelerations relative to ground."
)

# Q66
add_q(
    "Connected motion and pulley problems",
    "In an Atwood machine, when the masses $m_1$ and $m_2$ ($m_1 > m_2$) are moving with acceleration $a$, the acceleration of the center of mass of the system is:",
    ["$\\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)^2 g$", "$\\frac{m_1 - m_2}{m_1 + m_2} g$", "$\\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right) a$", "$0$"],
    0,
    "$$a_{\\text{cm}} = \\frac{m_1 a_1 + m_2 a_2}{m_1 + m_2} = \\frac{m_1(-a) + m_2(+a)}{m_1 + m_2} = -\\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)a = -\\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)^2 g$$"
)

# Q67
add_q(
    "Connected motion and pulley problems",
    "A block of mass $m_1 = 3\\text{ kg}$ on a smooth table is connected via a string passing over a pulley at the edge to mass $m_2 = 2\\text{ kg}$. When the system is released, the force exerted by the string on the pulley is: (Take $g = 10\\text{ m/s}^2$)",
    ["$12\\sqrt{2}\\text{ N}$", "$12\\text{ N}$", "$24\\text{ N}$", "$10\\sqrt{2}\\text{ N}$"],
    0,
    "$$a = \\frac{m_2 g}{m_1 + m_2} = \\frac{2(10)}{3 + 2} = 4\\text{ m/s}^2$$\n$$T = m_1 a = 3(4) = 12\\text{ N}$$\nThe string pulls horizontally and vertically on the pulley, so net force is:\n$$F = \\sqrt{T^2 + T^2} = T\\sqrt{2} = 12\\sqrt{2}\\text{ N}$$"
)

# Q68
add_q(
    "Connected motion and pulley problems",
    "A man of mass $60\\text{ kg}$ stands inside a cage of mass $40\\text{ kg}$. He pulls on a rope passed over a fixed light pulley to keep the cage in equilibrium. The force with which he must pull the rope is: (Take $g = 10\\text{ m/s}^2$)",
    ["$500\\text{ N}$", "$1000\\text{ N}$", "$250\\text{ N}$", "$600\\text{ N}$"],
    0,
    "Total mass $M + m = 100\\text{ kg}$. Two segments of rope support the (man + cage) system:\n$$2T = (M + m)g = 100(10) = 1000\\text{ N} \\implies T = 500\\text{ N}$$\nThus, the man must pull with $500\\text{ N}$."
)

# Q69
add_q(
    "Connected motion and pulley problems",
    "In the previous question, the contact force exerted by the man on the floor of the cage is:",
    ["$100\\text{ N}$", "$600\\text{ N}$", "$500\\text{ N}$", "$400\\text{ N}$"],
    0,
    "For the man alone in equilibrium:\n$$N + T = m_{\\text{man}} g \\implies N + 500 = 60(10) = 600 \\implies N = 100\\text{ N}$$"
)

# Q70
add_q(
    "Connected motion and pulley problems",
    "If the man in the cage wishes to accelerate the cage upwards at $2\\text{ m/s}^2$, the tension in the rope must be: (Take $g = 10\\text{ m/s}^2$)",
    ["$600\\text{ N}$", "$500\\text{ N}$", "$1200\\text{ N}$", "$700\\text{ N}$"],
    0,
    "$$2T - (M + m)g = (M + m)a$$\n$$2T - 1000 = 100(2) = 200 \\implies 2T = 1200 \\implies T = 600\\text{ N}$$"
)

# Q71
add_q(
    "Connected motion and pulley problems",
    "A block of mass $m_1 = 6\\text{ kg}$ on a table is connected to a hanging mass $m_2 = 4\\text{ kg}$. If the coefficient of static friction between $m_1$ and the table is $\\mu_s = 0.5$, will the system move when released?",
    [
        "No, because the maximum static friction ($30\\text{ N}$) is less than the hanging weight ($40\\text{ N}$), so it WILL move.",
        "Yes, it moves with acceleration $1\\text{ m/s}^2$.",
        "No, because static friction prevents motion.",
        "Yes, it moves with acceleration $4\\text{ m/s}^2$."
    ],
    1,
    "Limiting friction $f_{s,\\text{max}} = \\mu_s m_1 g = 0.5 \\times 6 \\times 10 = 30\\text{ N}$.\nHanging weight $m_2 g = 4 \\times 10 = 40\\text{ N}$.\nSince $40\\text{ N} > 30\\text{ N}$, the block slips and accelerates! Assuming $\\mu_k = 0.5$:\n$$a = \\frac{40 - 30}{6 + 4} = \\frac{10}{10} = 1\\text{ m/s}^2$$"
)

# Q72
add_q(
    "Connected motion and pulley problems",
    "Two blocks of masses $m_1$ and $m_2$ ($m_1 > m_2$) are suspended from an Atwood machine. The system is released from rest. After time $t$, the heavier mass has fallen a distance $h$. If the string is cut at this instant, the time taken by $m_2$ to reach its maximum height from the instant of cutting is:",
    ["$\\frac{a t}{g}$", "$\\frac{g t}{a}$", "$t$", "$\\frac{a t}{2g}$"],
    0,
    "At time $t$, the upward velocity of $m_2$ is $v = a t$.\nOnce the string is cut, $m_2$ moves freely under gravity with downward acceleration $g$.\nTime to reach maximum height is $t' = \\frac{v}{g} = \\frac{a t}{g}$."
)

# Q73
add_q(
    "Connected motion and pulley problems",
    "A light string passes over a frictionless pulley. A mass $m_1 = 3\\text{ kg}$ is attached to one end and two masses of $1\\text{ kg}$ each are attached in series to the other end. The tension in the string connecting the two $1\\text{ kg}$ masses is: (Take $g = 10\\text{ m/s}^2$)",
    ["$12\\text{ N}$", "$10\\text{ N}$", "$8\\text{ N}$", "$14\\text{ N}$"],
    0,
    "Total masses: left side $m_1 = 3\\text{ kg}$, right side $m_2 = 1 + 1 = 2\\text{ kg}$.\n$$a = \\frac{3 - 2}{3 + 2}g = \\frac{1}{5}(10) = 2\\text{ m/s}^2$$\nRight side moves upwards with $a = 2\\text{ m/s}^2$.\nFor the bottom $1\\text{ kg}$ mass on the right:\n$$T' - mg = ma \\implies T' = m(g + a) = 1(10 + 2) = 12\\text{ N}$$"
)

# Q74
add_q(
    "Connected motion and pulley problems",
    "In the previous system, the tension in the main string passing over the pulley is:",
    ["$24\\text{ N}$", "$12\\text{ N}$", "$30\\text{ N}$", "$20\\text{ N}$"],
    0,
    "For the top mass on right ($1\\text{ kg}$):\n$$T - T' - mg = ma \\implies T - 12 - 10 = 1(2) \\implies T = 24\\text{ N}$$\n(Check left mass: $m_1 g - T = m_1 a \\implies 30 - 24 = 6 = 3(2)$)."
)

# Q75
add_q(
    "Connected motion and pulley problems",
    "Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 3\\text{ kg}$ are connected by a spring of stiffness $k = 120\\text{ N/m}$ on a smooth horizontal floor. Block $m_2$ is pulled by a constant horizontal force $F = 10\\text{ N}$. The extension in the spring when both blocks move with common acceleration is:",
    ["$3.33\\text{ cm}$", "$5.00\\text{ cm}$", "$6.67\\text{ cm}$", "$2.50\\text{ cm}$"],
    0,
    "Common acceleration:\n$$a = \\frac{F}{m_1 + m_2} = \\frac{10}{2 + 3} = 2\\text{ m/s}^2$$\nThe spring force accelerates $m_1$:\n$$k x = m_1 a = 2 \\times 2 = 4\\text{ N}$$\n$$x = \\frac{4}{120}\\text{ m} = \\frac{1}{30}\\text{ m} \\approx 0.0333\\text{ m} = 3.33\\text{ cm}$$"
)

# Q76
add_q(
    "Connected motion and pulley problems",
    "A uniform rope of length $L$ and linear mass density $\\lambda$ is coiled on a floor. A person pulls one end vertically upwards with constant speed $v$. The force required to lift the rope at the instant a length $x$ is off the floor is:",
    ["$\\lambda x g + \\lambda v^2$", "$\\lambda x g$", "$\\lambda v^2$", "$\\lambda x g + \\frac{1}{2}\\lambda v^2$"],
    0,
    "The required force must support the weight of the lifted rope $\\lambda x g$ and provide the rate of momentum change of the newly lifted segments:\n$$F = \\lambda x g + v\\frac{dm}{dt} = \\lambda x g + v(\\lambda v) = \\lambda x g + \\lambda v^2$$"
)

# Q77
add_q(
    "Connected motion and pulley problems",
    "A block of mass $m$ is suspended by a string from a ceiling. A second identical string hangs from the bottom of the block. If the lower string is pulled with a sudden jerk, which string breaks?",
    [
        "The lower string breaks because the inertia of the block prevents instantaneous transmission of tension to the upper string.",
        "The upper string breaks because it supports the weight plus tension.",
        "Both strings break simultaneously.",
        "Neither string breaks."
    ],
    0,
    "Due to the mass/inertia of the block, an abrupt jerk produces large tension in the lower string before the block can accelerate and transmit tension to the upper string. Hence the lower string snaps."
)

# Q78
add_q(
    "Connected motion and pulley problems",
    "In the previous setup, if the lower string is pulled slowly and steadily with increasing force, which string breaks?",
    [
        "The upper string breaks because tension in the upper string is $T_{\\text{upper}} = T_{\\text{lower}} + mg$.",
        "The lower string breaks.",
        "Both strings break simultaneously.",
        "Neither string breaks."
    ],
    0,
    "Under quasi-static pulling, the upper string experiences tension equal to the lower string's tension plus the weight of the block ($T_{\\text{upper}} = T + mg > T$). Thus, the upper string reaches the breaking tension first."
)

# Q79
add_q(
    "Connected motion and pulley problems",
    "A wedge of mass $M$ with inclination angle $\\alpha$ rests on a smooth floor. A vertical rod of mass $m$ constrained to move only vertically has its lower end resting on the smooth inclined face of the wedge. If the wedge is pushed horizontally with acceleration $a_w$, the downward acceleration $a_r$ of the rod is:",
    ["$a_w\\tan\\alpha$", "$a_w\\cot\\alpha$", "$a_w\\sin\\alpha$", "$a_w\\cos\\alpha$"],
    0,
    "From geometry of the wedge surface $y = x\\tan\\alpha$. Differentiating twice with respect to time:\n$$a_r = a_w\\tan\\alpha$$"
)

# Q80
add_q(
    "Connected motion and pulley problems",
    "A ladder of length $L$ slides down along a smooth vertical wall and a smooth horizontal floor. When the ladder makes an angle $\\theta$ with the horizontal, the relation between the velocity of the top end $v_y$ and bottom end $v_x$ is:",
    ["$v_y = -v_x\\cot\\theta$", "$v_y = -v_x\\tan\\theta$", "$v_y = v_x\\sin\\theta$", "$v_y = -v_x$"],
    0,
    "Position relation: $x^2 + y^2 = L^2$.\nDifferentiating with respect to time:\n$$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0 \\implies x v_x + y v_y = 0 \\implies v_y = -\\frac{x}{y}v_x = -v_x\\cot\\theta$$"
)

# Q81
add_q(
    "Connected motion and pulley problems",
    "Two blocks $A$ ($4\\text{ kg}$) and $B$ ($2\\text{ kg}$) are connected by a light string over a pulley. Block $A$ is on a smooth horizontal table and $B$ hangs vertically. If the string snaps when $B$ is falling at $2\\text{ m/s}$, the velocity of block $A$ immediately after snapping is:",
    ["$2\\text{ m/s}$", "$0\\text{ m/s}$", "$4\\text{ m/s}$", "$1\\text{ m/s}$"],
    0,
    "Immediately after the string snaps, the tension becomes zero. Since no horizontal force acts on block $A$ on the smooth table, by Newton's first law it continues to slide with its current velocity of $2\\text{ m/s}$."
)

# Q82
add_q(
    "Connected motion and pulley problems",
    "A light string passes over a fixed frictionless pulley. Two masses $m_1 = 4\\text{ kg}$ and $m_2 = 4\\text{ kg}$ are connected to the ends. If an extra mass of $2\\text{ kg}$ is added to $m_1$, the acceleration of the system becomes: (Take $g = 10\\text{ m/s}^2$)",
    ["$2\\text{ m/s}^2$", "$4\\text{ m/s}^2$", "$1\\text{ m/s}^2$", "$5\\text{ m/s}^2$"],
    0,
    "$$a = \\frac{(4 + 2) - 4}{(4 + 2) + 4}g = \\frac{6 - 4}{10}(10) = \\frac{2}{10}(10) = 2\\text{ m/s}^2$$"
)

# Q83
add_q(
    "Connected motion and pulley problems",
    "A mass $m$ is suspended from the midpoint of a light horizontal rope of length $2L$ whose ends are fixed at the same horizontal level. If the sag at the center is $d$ ($d \\ll L$), the tension in the rope is approximately:",
    ["$\\frac{mg L}{2d}$", "$\\frac{mg d}{2L}$", "$\\frac{mg L}{d}$", "$\\frac{mg}{2}$"],
    0,
    "Let $\\theta$ be the angle with horizontal: $\\sin\\theta \\approx \\tan\\theta = d/L$.\nVertical equilibrium:\n$$2 T \\sin\\theta = mg \\implies 2 T \\left(\\frac{d}{L}\\right) = mg \\implies T = \\frac{mg L}{2d}$$"
)

# Q84
add_q(
    "Connected motion and pulley problems",
    "Can a horizontal rope supporting a mass $m$ at its center ever be pulled completely straight ($d = 0$) by applying finite horizontal tensions at its ends?",
    [
        "No, because $T = \\frac{mg L}{2d} \\to \\infty$ as $d \\to 0$.",
        "Yes, if the tension exceeds $2mg$.",
        "Yes, if the rope is massless.",
        "Yes, if the mass $m$ is small."
    ],
    0,
    "For the vertical component $2T\\sin\\theta$ to balance the non-zero downward weight $mg$, $\\sin\\theta$ cannot be zero. If $d = 0$, $\\theta = 0$, requiring $T = \\infty$."
)

# Q85
add_q(
    "Connected motion and pulley problems",
    "Two blocks of masses $m_1$ and $m_2$ connected by a light string over a frictionless pulley are placed on two inclined planes back-to-back with angles $\\theta_1$ and $\\theta_2$. The condition for equilibrium is:",
    ["$m_1\\sin\\theta_1 = m_2\\sin\\theta_2$", "$m_1\\cos\\theta_1 = m_2\\cos\\theta_2$", "$m_1\\tan\\theta_1 = m_2\\tan\\theta_2$", "$m_1 = m_2$"],
    0,
    "The tension in the string is $T = m_1 g\\sin\\theta_1 = m_2 g\\sin\\theta_2 \\implies m_1\\sin\\theta_1 = m_2\\sin\\theta_2$."
)

# Q86
add_q(
    "Connected motion and pulley problems",
    "In a system with a movable pulley of mass $m_p = 0$, three sections of string support the load $W$. The mechanical advantage of the system is:",
    ["$3$", "$2$", "$1$", "$4$"],
    0,
    "With 3 supporting vertical segments of string carrying tension $T$, $3T = W$, so the effort required is $E = T = W/3$. The mechanical advantage is $\\text{MA} = W/E = 3$."
)

# Q87
add_q(
    "Connected motion and pulley problems",
    "A block of mass $m$ is attached to a string wrapped around a solid cylinder of mass $M$ and radius $R$ that can rotate about its fixed horizontal axis. The downward acceleration of the block is:",
    ["$\\frac{g}{1 + M/(2m)}$", "$\\frac{g}{1 + M/m}$", "$g$", "$\\frac{2g}{3}$"],
    0,
    "Equation for block: $mg - T = ma$.\nTorque on cylinder: $T R = I\\alpha = \\left(\\frac{1}{2}MR^2\\right)\\left(\\frac{a}{R}\\right) \\implies T = \\frac{1}{2}Ma$.\n$$mg - \\frac{1}{2}Ma = ma \\implies mg = a\\left(m + \\frac{1}{2}M\\right) \\implies a = \\frac{g}{1 + M/(2m)}$$"
)

# Q88
add_q(
    "Connected motion and pulley problems",
    "A string wrapped around a uniform disc of mass $M$ and radius $R$ has its free end held fixed to the ceiling. When the disc is released, it falls unwinding the string. The acceleration of the center of mass of the disc is:",
    ["$\\frac{2}{3}g$", "$\\frac{1}{2}g$", "$g$", "$\\frac{3}{4}g$"],
    0,
    "$$Mg - T = Ma$$\n$$T R = I\\alpha = \\left(\\frac{1}{2}MR^2\\right)\\left(\\frac{a}{R}\\right) \\implies T = \\frac{1}{2}Ma$$\n$$Mg - \\frac{1}{2}Ma = Ma \\implies \\frac{3}{2}Ma = Mg \\implies a = \\frac{2}{3}g$$"
)

# Q89
add_q(
    "Connected motion and pulley problems",
    "A string has a breaking strength of $40\\text{ N}$. A mass of $3\\text{ kg}$ is attached to one end and pulled vertically upwards. The maximum upward acceleration that can be imparted without breaking the string is: (Take $g = 10\\text{ m/s}^2$)",
    ["$3.33\\text{ m/s}^2$", "$10\\text{ m/s}^2$", "$5\\text{ m/s}^2$", "$13.33\\text{ m/s}^2$"],
    0,
    "$$T = m(g + a) \\le 40 \\implies 3(10 + a) \\le 40 \\implies 10 + a \\le 13.33 \\implies a \\le 3.33\\text{ m/s}^2$$"
)

# Q90
add_q(
    "Connected motion and pulley problems",
    "Two blocks of mass $m$ each are connected by a spring of stiffness $k$. One block rests on the floor while the other is on top of it. What minimum downward compression must be given to the top block so that when released, the bottom block just leaves the floor?",
    ["$\\frac{2mg}{k}$", "$\\frac{mg}{k}$", "$\\frac{3mg}{k}$", "$\\frac{mg}{2k}$"],
    0,
    "Let initial equilibrium compression be $x_0 = mg/k$.\nFor the bottom block to lift off, the spring must extend upward by $x_1$ such that $k x_1 = mg \\implies x_1 = mg/k$.\nTotal extension from equilibrium position is $A = x_0 + x_1 = \\frac{2mg}{k}$.\nSince amplitude of oscillation above equilibrium equals maximum compression below equilibrium, the top block must be pushed down by an additional $x = \\frac{2mg}{k}$ beyond equilibrium."
)

with open("scripts/lom/lom_batch3.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions in scripts/lom/lom_batch3.json")
