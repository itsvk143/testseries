# -*- coding: utf-8 -*-
"""
Generate Batch 1 of Gravitation:
- Kepler's laws (45 MCQs)
- Newton's law of gravitation (45 MCQs)
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
        "chapter": "Gravitation",
        "subtopic": subtopic,
        "subTopic": subtopic,
        "subject": "Physics",
        "examType": "JEE Mains"
    })

# ==============================================================================
# SUBTOPIC 1: Kepler's laws (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Kepler's laws",
    "Kepler's second law, which states that the areal velocity of a planet revolving around the Sun is constant, is a direct consequence of the conservation of:",
    [
        "Angular momentum",
        "Linear momentum",
        "Kinetic energy",
        "Mechanical energy"
    ],
    0,
    "The gravitational force between the Sun and a planet is a central force, which acts along the line connecting them. Hence, the torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$. Since net torque is zero, the orbital angular momentum $\\vec{L}$ is conserved. The areal velocity is $\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$.",
    "Easy"
)

# Q2
add_q(
    "Kepler's laws",
    "According to Kepler's third law, the square of the orbital period $T$ of a planet around the Sun is proportional to the cube of the:",
    [
        "Semi-major axis of the elliptical orbit",
        "Semi-minor axis of the elliptical orbit",
        "Perihelion distance",
        "Aphelion distance"
    ],
    0,
    "Kepler's third law (the law of periods) states that $T^2 \\propto a^3$, where $a$ is the semi-major axis of the elliptical orbit.",
    "Easy"
)

# Q3
add_q(
    "Kepler's laws",
    "A planet revolves in an elliptical orbit around the Sun. If $r_p$ and $r_a$ are the distances at perihelion and aphelion respectively, and $v_p$ and $v_a$ are the corresponding orbital speeds, then:",
    [
        "$r_p v_p = r_a v_a$",
        "$r_p v_a = r_a v_p$",
        "$r_p^2 v_p = r_a^2 v_a$",
        "$v_p = v_a$"
    ],
    0,
    "By conservation of angular momentum about the Sun, $L = m r_p v_p = m r_a v_a \\implies r_p v_p = r_a v_a$.",
    "Easy"
)

# Q4
add_q(
    "Kepler's laws",
    "The distance of a planet from the Sun is 4 times that of the Earth. The orbital period of this planet is:",
    [
        "$8\\text{ years}$",
        "$4\\text{ years}$",
        "$16\\text{ years}$",
        "$64\\text{ years}$"
    ],
    0,
    "Using $T^2 \\propto R^3$:\n$$\\frac{T}{T_E} = \\left(\\frac{R}{R_E}\\right)^{3/2} = (4)^{3/2} = (2^2)^{3/2} = 2^3 = 8$$\nSince $T_E = 1\\text{ year}$, $T = 8\\text{ years}$.",
    "Easy"
)

# Q5
add_q(
    "Kepler's laws",
    "If the distance between the Earth and the Sun were reduced to half its present value, the number of days in a year would be approximately:",
    [
        "$129\\text{ days}$",
        "$182.5\\text{ days}$",
        "$91\\text{ days}$",
        "$258\\text{ days}$"
    ],
    0,
    "Using $T \\propto R^{3/2}$:\n$$T' = T \\left(\\frac{1}{2}\\right)^{3/2} = \\frac{365}{2\\sqrt{2}} = \\frac{365}{2.828} \\approx 129.05\\text{ days}$$",
    "Medium"
)

# Q6
add_q(
    "Kepler's laws",
    "A planet moves around the Sun in an elliptical orbit of eccentricity $e$. The ratio of its maximum speed at perihelion to its minimum speed at aphelion is:",
    [
        "$\\frac{1 + e}{1 - e}$",
        "$\\frac{1 - e}{1 + e}$",
        "$\\sqrt{\\frac{1 + e}{1 - e}}$",
        "$\\left(\\frac{1 + e}{1 - e}\\right)^2$"
    ],
    0,
    "Perihelion distance is $r_p = a(1 - e)$ and aphelion distance is $r_a = a(1 + e)$. By angular momentum conservation:\n$$r_p v_{\\max} = r_a v_{\\min} \\implies \\frac{v_{\\max}}{v_{\\min}} = \\frac{r_a}{r_p} = \\frac{a(1 + e)}{a(1 - e)} = \\frac{1 + e}{1 - e}$$",
    "Medium"
)

# Q7
add_q(
    "Kepler's laws",
    "A satellite is in an elliptical orbit around the Earth. The ratio of the area swept out by the radius vector in 2 days to the area swept out in 6 days is:",
    [
        "$1 : 3$",
        "$1 : 9$",
        "$2 : 3$",
        "$1 : \\sqrt{3}$"
    ],
    0,
    "By Kepler's second law, the areal velocity $\\frac{dA}{dt} = \\text{constant}$. Thus, the area swept is directly proportional to time:\n$$\\frac{A_1}{A_2} = \\frac{t_1}{t_2} = \\frac{2}{6} = \\frac{1}{3}$$",
    "Easy"
)

# Q8
add_q(
    "Kepler's laws",
    "Two satellites A and B are revolving around a planet in circular orbits of radii $4R$ and $R$ respectively. The ratio of their orbital periods $T_A / T_B$ is:",
    [
        "$8$",
        "$4$",
        "$16$",
        "$2$"
    ],
    0,
    "$$\\frac{T_A}{T_B} = \\left(\\frac{r_A}{r_B}\\right)^{3/2} = \\left(\\frac{4R}{R}\\right)^{3/2} = 4^{3/2} = 8$$",
    "Easy"
)

# Q9
add_q(
    "Kepler's laws",
    "The linear speed of a planet in an elliptical orbit is:",
    [
        "Maximum at perihelion and minimum at aphelion",
        "Constant throughout the orbit",
        "Maximum at aphelion and minimum at perihelion",
        "Maximum when the radius vector is perpendicular to the major axis"
    ],
    0,
    "Because angular momentum $L = mrv\\sin\\phi$ is constant, when distance $r$ is minimum (perihelion), the speed $v$ is maximum. When $r$ is maximum (aphelion), speed $v$ is minimum.",
    "Easy"
)

# Q10
add_q(
    "Kepler's laws",
    "If the mass of the Sun suddenly became twice its present value, while the radius of the Earth's orbit remained the same, the new period of revolution of the Earth would be:",
    [
        "$\\frac{1}{\\sqrt{2}}\\text{ year}$",
        "$\\sqrt{2}\\text{ years}$",
        "$2\\text{ years}$",
        "$1/2\\text{ year}$"
    ],
    0,
    "From Newton's form of Kepler's third law, $T = 2\\pi \\sqrt{\\frac{a^3}{GM}}$. If $M$ doubles, $T' = \\frac{T}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\text{ year}$.",
    "Easy"
)

# Q11
add_q(
    "Kepler's laws",
    "The semi-major axis of the orbit of Halley's comet is $17.8\\text{ AU}$. Its orbital period is approximately:",
    [
        "$75.1\\text{ years}$",
        "$35.6\\text{ years}$",
        "$120.4\\text{ years}$",
        "$53.4\\text{ years}$"
    ],
    0,
    "Using $T^2 = a^3$ (with $a$ in AU and $T$ in years):\n$$T = a^{3/2} = (17.8)^{1.5} = 17.8 \\times \\sqrt{17.8} \\approx 17.8 \\times 4.219 \\approx 75.1\\text{ years}$$",
    "Medium"
)

# Q12
add_q(
    "Kepler's laws",
    "The kinetic energy of a planet moving in an elliptical orbit around the Sun is:",
    [
        "Variable, being maximum at perihelion",
        "Constant throughout the orbit",
        "Maximum at aphelion",
        "Zero at perihelion"
    ],
    0,
    "Kinetic energy is $K = \\frac{1}{2}m v^2$. Since the orbital speed is greatest at perihelion (closest approach), the kinetic energy is maximum at perihelion.",
    "Easy"
)

# Q13
add_q(
    "Kepler's laws",
    "The total mechanical energy $E$ of a planet of mass $m$ orbiting a star of mass $M$ in an elliptical orbit of semi-major axis $a$ is:",
    [
        "$-\\frac{GMm}{2a}$",
        "$-\\frac{GMm}{a}$",
        "$\\frac{GMm}{2a}$",
        "$0$"
    ],
    0,
    "In any bound Keplerian orbit (circular or elliptical), the total mechanical energy is negative and depends solely on the semi-major axis: $E = -\\frac{GMm}{2a}$.",
    "Medium"
)

# Q14
add_q(
    "Kepler's laws",
    "A planet of mass $m$ revolves around the Sun of mass $M$ in an elliptical orbit of semi-major axis $a$ and period $T$. The areal velocity of the planet is:",
    [
        "$\\frac{\\pi a b}{T}$",
        "$\\frac{2\\pi a b}{T}$",
        "$\\frac{\\pi a^2}{T}$",
        "$\\frac{\\pi b^2}{T}$"
    ],
    0,
    "The total area of an ellipse is $A = \\pi a b$. Since the areal velocity is constant, $\\frac{dA}{dt} = \\frac{\\text{Total Area}}{\\text{Period}} = \\frac{\\pi a b}{T}$.",
    "Medium"
)

# Q15
add_q(
    "Kepler's laws",
    "The ratio of the kinetic energy to the potential energy of a planet moving in a circular orbit of radius $r$ around the Sun is:",
    [
        "$-1/2$",
        "$-1$",
        "$+1/2$",
        "$-2$"
    ],
    0,
    "In a circular orbit, $K = \\frac{GMm}{2r}$ and $U = -\\frac{GMm}{r}$.\n$$\\frac{K}{U} = \\frac{\\frac{GMm}{2r}}{-\\frac{GMm}{r}} = -\\frac{1}{2}$$",
    "Easy"
)

# Q16
add_q(
    "Kepler's laws",
    "If a satellite is orbiting very close to the Earth's surface (radius $\\approx R$), its time period is given by:",
    [
        "$2\\pi\\sqrt{\\frac{R}{g}}$",
        "$\\pi\\sqrt{\\frac{R}{g}}$",
        "$2\\pi\\sqrt{\\frac{g}{R}}$",
        "$\\sqrt{\\frac{2R}{g}}$"
    ],
    0,
    "For orbit radius $r = R$, $v = \\sqrt{gR}$.\n$$T = \\frac{2\\pi R}{v} = \\frac{2\\pi R}{\\sqrt{gR}} = 2\\pi\\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ minutes}$$",
    "Easy"
)

# Q17
add_q(
    "Kepler's laws",
    "A binary star system consists of two stars of masses $m_1$ and $m_2$ separated by a distance $d$, revolving under their mutual gravitational attraction. Their period of revolution $T$ is:",
    [
        "$2\\pi\\sqrt{\\frac{d^3}{G(m_1 + m_2)}}$",
        "$2\\pi\\sqrt{\\frac{d^3}{G m_1}}$",
        "$2\\pi\\sqrt{\\frac{d^3}{2G(m_1 + m_2)}}$",
        "$2\\pi\\sqrt{\\frac{d^3}{G(m_1 - m_2)}}$"
    ],
    0,
    "In a binary star system, the stars rotate about their common center of mass. Using reduced mass $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$:\n$$T = 2\\pi\\sqrt{\\frac{d^3}{G(m_1 + m_2)}}$$",
    "Hard"
)

# Q18
add_q(
    "Kepler's laws",
    "Two planets A and B have periods $T_A$ and $T_B$ in the ratio $1 : 8$. The ratio of their distances from the Sun $r_A / r_B$ is:",
    [
        "$1 : 4$",
        "$1 : 2$",
        "$1 : 8$",
        "$1 : 16$"
    ],
    0,
    "Using $T^2 \\propto r^3 \\implies r \\propto T^{2/3}$:\n$$\\frac{r_A}{r_B} = \\left(\\frac{T_A}{T_B}\\right)^{2/3} = \\left(\\frac{1}{8}\\right)^{2/3} = \\left(\\frac{1}{2^3}\\right)^{2/3} = \\frac{1}{4}$$",
    "Easy"
)

# Q19
add_q(
    "Kepler's laws",
    "The orbit of a planet around the Sun is an ellipse with the Sun at one of the two foci. This statement is known as:",
    [
        "Kepler's First Law (Law of Orbits)",
        "Kepler's Second Law (Law of Areas)",
        "Kepler's Third Law (Law of Periods)",
        "Newton's Law of Gravitation"
    ],
    0,
    "Kepler's First Law states that all planets move in elliptical orbits with the Sun situated at one focus of the ellipse.",
    "Easy"
)

# Q20
add_q(
    "Kepler's laws",
    "If the angular momentum of a planet of mass $m$ orbiting the Sun is $L$, the area swept by its radius vector per unit time is:",
    [
        "$\\frac{L}{2m}$",
        "$\\frac{L}{m}$",
        "$\\frac{2L}{m}$",
        "$\\frac{L^2}{2m}$"
    ],
    0,
    "The elemental area swept by the radius vector in time $dt$ is $dA = \\frac{1}{2} r (r d\\theta) = \\frac{1}{2} r^2 \\omega dt$. Since $L = m r^2 \\omega$, we have $\\frac{dA}{dt} = \\frac{L}{2m}$.",
    "Easy"
)

# Q21
add_q(
    "Kepler's laws",
    "The eccentricity $e$ of a planetary orbit is defined in terms of semi-major axis $a$ and semi-minor axis $b$ by:",
    [
        "$e = \\sqrt{1 - \\frac{b^2}{a^2}}$",
        "$e = \\sqrt{1 - \\frac{a^2}{b^2}}$",
        "$e = 1 - \\frac{b}{a}$",
        "$e = \\frac{b}{a}$"
    ],
    0,
    "From analytical geometry, the relationship between axes of an ellipse is $b^2 = a^2(1 - e^2)$, which gives $e = \\sqrt{1 - b^2/a^2}$.",
    "Easy"
)

# Q22
add_q(
    "Kepler's laws",
    "For a circular orbit, the eccentricity $e$ is:",
    [
        "$0$",
        "$1$",
        "$0.5$",
        "$\\infty$"
    ],
    0,
    "A circle is a special case of an ellipse where the two foci coincide and semi-major axis equals semi-minor axis ($a = b$), giving $e = \\sqrt{1 - a^2/a^2} = 0$.",
    "Easy"
)

# Q23
add_q(
    "Kepler's laws",
    "A satellite in circular orbit of radius $r$ has period $T$. If the radius of its orbit is increased to $1.01r$ ($1\\%$ increase), the percentage increase in its orbital period is approximately:",
    [
        "$1.5\\%$",
        "$1.0\\%$",
        "$2.0\\%$",
        "$0.5\\%$"
    ],
    0,
    "Since $T \\propto r^{3/2}$, using fractional errors for small changes:\n$$\\frac{\\Delta T}{T} \\approx \\frac{3}{2}\\frac{\\Delta r}{r} = 1.5 \\times 1\\% = 1.5\\%$$",
    "Easy"
)

# Q24
add_q(
    "Kepler's laws",
    "During the revolution of a planet around the Sun in an elliptical orbit, which of the following quantities remains CONSTANT?",
    [
        "Angular momentum about the Sun",
        "Linear velocity",
        "Linear momentum",
        "Distance from the Sun"
    ],
    0,
    "Since the gravitational force is central (torque about the Sun is zero), only the angular momentum about the Sun remains strictly constant. Distance, speed, and linear momentum all vary along the orbit.",
    "Easy"
)

# Q25
add_q(
    "Kepler's laws",
    "If the perihelion distance of a comet is $0.5\\text{ AU}$ and the aphelion distance is $31.5\\text{ AU}$, the semi-major axis of its orbit is:",
    [
        "$16.0\\text{ AU}$",
        "$32.0\\text{ AU}$",
        "$15.5\\text{ AU}$",
        "$8.0\\text{ AU}$"
    ],
    0,
    "The major axis of the ellipse is $2a = r_p + r_a = 0.5 + 31.5 = 32.0\\text{ AU}$. Therefore, the semi-major axis is $a = 16.0\\text{ AU}$.",
    "Easy"
)

# Q26
add_q(
    "Kepler's laws",
    "In the previous problem, the orbital period of the comet around the Sun is:",
    [
        "$64\\text{ years}$",
        "$16\\text{ years}$",
        "$32\\text{ years}$",
        "$128\\text{ years}$"
    ],
    0,
    "Using $T = a^{3/2}$ with $a = 16.0\\text{ AU}$:\n$$T = (16)^{3/2} = (4^2)^{3/2} = 4^3 = 64\\text{ years}$$",
    "Easy"
)

# Q27
add_q(
    "Kepler's laws",
    "The ratio of the maximum to minimum gravitational force experienced by a planet in an elliptical orbit of eccentricity $e$ is:",
    [
        "$\\left(\\frac{1 + e}{1 - e}\\right)^2$",
        "$\\frac{1 + e}{1 - e}$",
        "$\\left(\\frac{1 - e}{1 + e}\\right)^2$",
        "$\\frac{1 + e^2}{1 - e^2}$"
    ],
    0,
    "Gravitational force is $F \\propto 1/r^2$.\nMaximum force occurs at perihelion $r_p = a(1 - e)$, and minimum force at aphelion $r_a = a(1 + e)$.\n$$\\frac{F_{\\max}}{F_{\\min}} = \\left(\\frac{r_a}{r_p}\\right)^2 = \\left(\\frac{a(1 + e)}{a(1 - e)}\\right)^2 = \\left(\\frac{1 + e}{1 - e}\\right)^2$$",
    "Medium"
)

# Q28
add_q(
    "Kepler's laws",
    "A planet orbits the Sun in a circle of radius $R_0$ with period $T_0$. If the gravitational force law were $F \\propto 1/r^3$ instead of $1/r^2$, how would the orbital period $T$ scale with radius $R$?",
    [
        "$T \\propto R^2$",
        "$T \\propto R^{3/2}$",
        "$T \\propto R$",
        "$T \\propto R^{5/2}$"
    ],
    0,
    "For a circular orbit under central force $F \\propto r^{-n}$:\n$$\\frac{m v^2}{r} = \\frac{k}{r^n} \\implies v \\propto r^{\\frac{1 - n}{2}}$$\nPeriod $T = \\frac{2\\pi r}{v} \\propto \\frac{r}{r^{(1-n)/2}} = r^{\\frac{n+1}{2}}$.\nFor $n = 3$, $T \\propto r^{\\frac{3+1}{2}} = r^2$.",
    "Hard"
)

# Q29
add_q(
    "Kepler's laws",
    "A planet moving in an elliptical orbit has speed $v_1$ when at distance $r_1$ from the Sun. Its speed $v_2$ when at distance $r_2$ is related by the conservation of mechanical energy as:",
    [
        "$\\frac{1}{2}m v_1^2 - \\frac{GMm}{r_1} = \\frac{1}{2}m v_2^2 - \\frac{GMm}{r_2}$",
        "$\\frac{1}{2}m v_1^2 + \\frac{GMm}{r_1} = \\frac{1}{2}m v_2^2 + \\frac{GMm}{r_2}$",
        "$v_1 r_1 = v_2 r_2$",
        "$v_1^2 r_1 = v_2^2 r_2$"
    ],
    0,
    "Because the gravitational field is conservative, total mechanical energy $E = K + U = \\frac{1}{2}mv^2 - \\frac{GMm}{r}$ is strictly conserved throughout the trajectory.",
    "Easy"
)

# Q30
add_q(
    "Kepler's laws",
    "The speed of an Earth satellite in a circular orbit of radius $r$ is $v$. What is its speed if the radius of the orbit is doubled?",
    [
        "$v/\\sqrt{2}$",
        "$v/2$",
        "$\\sqrt{2}v$",
        "$2v$"
    ],
    0,
    "Orbital speed in a circular orbit is $v = \\sqrt{\\frac{GM}{r}} \\propto \\frac{1}{\\sqrt{r}}$. When $r$ doubles, $v' = \\frac{v}{\\sqrt{2}}$.",
    "Easy"
)

# Q31
add_q(
    "Kepler's laws",
    "The gravitational potential energy of a planet revolving in an elliptical orbit is minimum at:",
    [
        "Perihelion",
        "Aphelion",
        "The ends of the minor axis",
        "It is constant everywhere"
    ],
    0,
    "Potential energy is $U = -\\frac{GMm}{r}$. As $r$ decreases, $U$ becomes more negative, hence smaller. At perihelion, $r$ is at its minimum value, so potential energy is minimum (most negative).",
    "Easy"
)

# Q32
add_q(
    "Kepler's laws",
    "If the eccentricity of the Earth's orbit is $e = 0.0167$, the ratio of the difference $(r_a - r_p)$ to the semi-major axis $a$ is:",
    [
        "$2e = 0.0334$",
        "$e = 0.0167$",
        "$e^2 \\approx 0.00028$",
        "$4e = 0.0668$"
    ],
    0,
    "$$r_a = a(1 + e), \\quad r_p = a(1 - e) \\implies r_a - r_p = a(1 + e) - a(1 - e) = 2ae$$\n$$\\frac{r_a - r_p}{a} = 2e = 2(0.0167) = 0.0334$$",
    "Easy"
)

# Q33
add_q(
    "Kepler's laws",
    "The orbital speed of the Earth around the Sun is approximately $30\\text{ km/s}$. What would be the orbital speed of a hypothetical planet orbiting at $4\\text{ AU}$ from the Sun?",
    [
        "$15\\text{ km/s}$",
        "$7.5\\text{ km/s}$",
        "$60\\text{ km/s}$",
        "$20\\text{ km/s}$"
    ],
    0,
    "$$v \\propto \\frac{1}{\\sqrt{r}} \\implies v' = v_E \\sqrt{\\frac{R_E}{R}} = 30 \\sqrt{\\frac{1}{4}} = 30 \\times \\frac{1}{2} = 15\\text{ km/s}$$",
    "Easy"
)

# Q34
add_q(
    "Kepler's laws",
    "In Kepler's third law $T^2 = k a^3$, the proportionality constant $k$ is equal to:",
    [
        "$\\frac{4\\pi^2}{GM}$",
        "$\\frac{2\\pi^2}{GM}$",
        "$\\frac{GM}{4\\pi^2}$",
        "$\\frac{4\\pi}{GM}$"
    ],
    0,
    "From centripetal equilibrium for circular orbit: $\\frac{m v^2}{a} = \\frac{GMm}{a^2} \\implies v^2 = \\frac{GM}{a}$.\nPeriod $T = \\frac{2\\pi a}{v} \\implies T^2 = \\frac{4\\pi^2 a^2}{v^2} = \\frac{4\\pi^2 a^2}{GM/a} = \\left(\\frac{4\\pi^2}{GM}\\right) a^3$.\nThus, $k = \\frac{4\\pi^2}{GM}$.",
    "Easy"
)

# Q35
add_q(
    "Kepler's laws",
    "Which of Kepler's laws requires the inverse-square nature ($F \\propto 1/r^2$) of the gravitational force?",
    [
        "Both the First Law (elliptical orbits) and the Third Law ($T^2 \\propto a^3$)",
        "The Second Law (conservation of areal velocity) only",
        "The Second Law and First Law only",
        "None of them; any force law produces Kepler's laws"
    ],
    0,
    "Kepler's second law holds for ANY central force (since torque is always zero). But the first law (closed stable elliptical orbits) and the third law ($T^2 \\propto a^3$) are unique consequences of the inverse-square ($1/r^2$) force law.",
    "Medium"
)

# Q36
add_q(
    "Kepler's laws",
    "If the Earth's orbit around the Sun were suddenly changed to a circle of radius equal to its present semi-minor axis $b$, the period of the Earth would:",
    [
        "Decrease",
        "Increase",
        "Remain the same",
        "Become zero"
    ],
    0,
    "Since $b = a\\sqrt{1 - e^2} < a$, the new radius would be smaller than the original semi-major axis $a$. By Kepler's third law ($T \\propto r^{3/2}$), a smaller orbital radius results in a shorter period.",
    "Easy"
)

# Q37
add_q(
    "Kepler's laws",
    "An artificial satellite is launched into an orbit such that its apogee is at distance $3R$ from Earth's center and perigee is at $R$. The ratio of its speed at perigee to apogee is:",
    [
        "$3 : 1$",
        "$9 : 1$",
        "$\\sqrt{3} : 1$",
        "$1 : 3$"
    ],
    0,
    "By conservation of angular momentum: $r_p v_p = r_a v_a \\implies \\frac{v_p}{v_a} = \\frac{r_a}{r_p} = \\frac{3R}{R} = 3 : 1$.",
    "Easy"
)

# Q38
add_q(
    "Kepler's laws",
    "A planet takes 200 days to complete half of its orbit starting from perihelion to aphelion. How long will it take to return from aphelion to perihelion?",
    [
        "$200\\text{ days}$",
        "$100\\text{ days}$",
        "$400\\text{ days}$",
        "$300\\text{ days}$"
    ],
    0,
    "The major axis divides the ellipse into two symmetrical halves of equal area. By Kepler's second law, equal areas are swept in equal times. Therefore, the time taken for each half is identical: 200 days.",
    "Easy"
)

# Q39
add_q(
    "Kepler's laws",
    "The ratio of the area of the orbit of a planet with semi-major axis $a$ and eccentricity $e$ to that of a circular orbit of radius $a$ is:",
    [
        "$\\sqrt{1 - e^2}$",
        "$1 - e^2$",
        "$1 - e$",
        "$\\frac{1}{\\sqrt{1 - e^2}}$"
    ],
    0,
    "Area of ellipse is $A_{\\text{ellipse}} = \\pi a b = \\pi a (a\\sqrt{1 - e^2}) = \\pi a^2 \\sqrt{1 - e^2}$.\nArea of circle of radius $a$ is $A_{\\text{circle}} = \\pi a^2$.\nRatio: $\\frac{A_{\\text{ellipse}}}{A_{\\text{circle}}} = \\sqrt{1 - e^2}$.",
    "Medium"
)

# Q40
add_q(
    "Kepler's laws",
    "What is the direction of the acceleration of a planet in an elliptical orbit around the Sun?",
    [
        "Always directed towards the Sun",
        "Along the tangent to the trajectory",
        "Towards the center of the ellipse",
        "Perpendicular to the major axis"
    ],
    0,
    "The only force acting on the planet is the gravitational attraction of the Sun, which acts along the line joining the planet to the Sun. By Newton's second law ($\\vec{F} = m\\vec{a}$), the acceleration is always directed towards the Sun (one of the foci).",
    "Easy"
)

# Q41
add_q(
    "Kepler's laws",
    "If the period of revolution of planet A is 27 times that of planet B, the ratio of their orbital radii $R_A / R_B$ is:",
    [
        "$9$",
        "$3$",
        "$27$",
        "$81$"
    ],
    0,
    "$$\\frac{R_A}{R_B} = \\left(\\frac{T_A}{T_B}\\right)^{2/3} = (27)^{2/3} = (3^3)^{2/3} = 3^2 = 9$$",
    "Easy"
)

# Q42
add_q(
    "Kepler's laws",
    "A geosynchronous satellite has an orbital period of 24 hours. A low-Earth satellite at an altitude where orbital radius is $1/4$ of the geosynchronous radius has an orbital period of:",
    [
        "$3\\text{ hours}$",
        "$6\\text{ hours}$",
        "$1.5\\text{ hours}$",
        "$8\\text{ hours}$"
    ],
    0,
    "$$T = T_{\\text{geo}} \\left(\\frac{r}{r_{\\text{geo}}}\\right)^{3/2} = 24 \\left(\\frac{1}{4}\\right)^{3/2} = 24 \\times \\frac{1}{8} = 3\\text{ hours}$$",
    "Easy"
)

# Q43
add_q(
    "Kepler's laws",
    "If a new planet is discovered at a distance of $9\\text{ AU}$ from the Sun, its year would be equivalent to how many Earth years?",
    [
        "$27\\text{ years}$",
        "$81\\text{ years}$",
        "$9\\text{ years}$",
        "$18\\text{ years}$"
    ],
    0,
    "$$T = a^{3/2} = 9^{3/2} = (3^2)^{3/2} = 3^3 = 27\\text{ years}$$",
    "Easy"
)

# Q44
add_q(
    "Kepler's laws",
    "For an elliptical orbit, the distance of closest approach (perihelion) is $r_1$ and the farthest distance (aphelion) is $r_2$. The orbital speed $v_1$ at perihelion in terms of $r_1, r_2, M$ is:",
    [
        "$\\sqrt{\\frac{2GM r_2}{r_1(r_1 + r_2)}}$",
        "$\\sqrt{\\frac{2GM r_1}{r_2(r_1 + r_2)}}$",
        "$\\sqrt{\\frac{GM}{r_1}}$",
        "$\\sqrt{\\frac{2GM}{r_1 + r_2}}$"
    ],
    0,
    "By conservation of angular momentum: $v_2 = v_1 \\frac{r_1}{r_2}$.\nBy conservation of energy:\n$$\\frac{1}{2}m v_1^2 - \\frac{GMm}{r_1} = \\frac{1}{2}m v_2^2 - \\frac{GMm}{r_2}$$\n$$\\frac{1}{2}v_1^2 \\left(1 - \\frac{r_1^2}{r_2^2}\\right) = GM\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) = GM\\frac{r_2 - r_1}{r_1 r_2}$$\n$$\\frac{1}{2}v_1^2 \\frac{(r_2 - r_1)(r_2 + r_1)}{r_2^2} = GM\\frac{r_2 - r_1}{r_1 r_2}$$\n$$v_1^2 = \\frac{2GM r_2}{r_1(r_1 + r_2)} \\implies v_1 = \\sqrt{\\frac{2GM r_2}{r_1(r_1 + r_2)}}$$",
    "Hard"
)

# Q45
add_q(
    "Kepler's laws",
    "In the previous problem, the orbital speed $v_2$ at aphelion is:",
    [
        "$\\sqrt{\\frac{2GM r_1}{r_2(r_1 + r_2)}}$",
        "$\\sqrt{\\frac{2GM r_2}{r_1(r_1 + r_2)}}$",
        "$\\sqrt{\\frac{GM}{r_2}}$",
        "$\\sqrt{\\frac{2GM}{r_2}}$"
    ],
    0,
    "Using $v_2 = v_1 \\frac{r_1}{r_2}$:\n$$v_2 = \\frac{r_1}{r_2}\\sqrt{\\frac{2GM r_2}{r_1(r_1 + r_2)}} = \\sqrt{\\frac{2GM r_1^2 r_2}{r_2^2 r_1(r_1 + r_2)}} = \\sqrt{\\frac{2GM r_1}{r_2(r_1 + r_2)}}$$",
    "Medium"
)

# ==============================================================================
# SUBTOPIC 2: Newton's law of gravitation (45 Questions)
# ==============================================================================

# Q46
add_q(
    "Newton's law of gravitation",
    "Two point masses $m_1$ and $m_2$ are separated by distance $r$. If the distance between them is tripled, the gravitational force between them becomes:",
    [
        "$1/9$ of its original value",
        "$1/3$ of its original value",
        "$3$ times its original value",
        "$9$ times its original value"
    ],
    0,
    "By Newton's law of universal gravitation, $F = G \\frac{m_1 m_2}{r^2}$. Tripling the distance ($r' = 3r$) reduces the force by a factor of $3^2 = 9$.",
    "Easy"
)

# Q47
add_q(
    "Newton's law of gravitation",
    "The gravitational constant $G$ has the SI dimensional formula:",
    [
        "[M$^{-1}$ L$^3$ T$^{-2}$]",
        "[M L$^2$ T$^{-2}$]",
        "[M$^{-1}$ L$^2$ T$^{-2}$]",
        "[M L$^3$ T$^{-2}$]"
    ],
    0,
    "From $F = G\\frac{m_1 m_2}{r^2} \\implies G = \\frac{F r^2}{m_1 m_2}$.\n$$[G] = \\frac{[\\text{M L T}^{-2}][\\text{L}^2]}{[\\text{M}^2]} = [\\text{M}^{-1} \\text{L}^3 \\text{T}^{-2}]$$",
    "Easy"
)

# Q48
add_q(
    "Newton's law of gravitation",
    "The gravitational force between two spheres of masses $m_1$ and $m_2$ separated by a distance $r$ inside water:",
    [
        "Remains unchanged compared to vacuum",
        "Decreases by a factor of dielectric constant",
        "Increases due to buoyancy",
        "Becomes zero"
    ],
    0,
    "Unlike electrostatic forces, gravitational force is strictly independent of the intervening medium. Therefore, the gravitational force in water is identical to that in vacuum.",
    "Easy"
)

# Q49
add_q(
    "Newton's law of gravitation",
    "Three equal point masses of mass $M$ are placed at the vertices of an equilateral triangle of side $a$. The net gravitational force on any one mass is:",
    [
        "$\\sqrt{3}\\frac{GM^2}{a^2}$",
        "$\\frac{GM^2}{a^2}$",
        "$2\\frac{GM^2}{a^2}$",
        "$\\frac{GM^2}{\\sqrt{3}a^2}$"
    ],
    0,
    "Each of the other two masses attracts the given mass with a force $F_0 = \\frac{GM^2}{a^2}$. The angle between the two forces is $60^\\circ$.\n$$F_{\\text{net}} = \\sqrt{F_0^2 + F_0^2 + 2F_0^2\\cos 60^\\circ} = \\sqrt{2F_0^2 + 2F_0^2(0.5)} = \\sqrt{3F_0^2} = \\sqrt{3}F_0 = \\sqrt{3}\\frac{GM^2}{a^2}$$",
    "Medium"
)

# Q50
add_q(
    "Newton's law of gravitation",
    "In the previous question, what is the net gravitational force on a mass $m$ placed at the centroid of the equilateral triangle?",
    [
        "$0$",
        "$3\\frac{GMm}{a^2}$",
        "$\\sqrt{3}\\frac{GMm}{a^2}$",
        "$\\frac{GMm}{a^2}$"
    ],
    0,
    "By symmetry, the three equal forces acting on the central mass are separated by angles of $120^\\circ$ from each other. Their vector sum is identically zero.",
    "Easy"
)

# Q51
add_q(
    "Newton's law of gravitation",
    "Four point masses, each of mass $m$, are placed at the four corners of a square of side $L$. The magnitude of the net gravitational force on any one mass is:",
    [
        "$\\frac{Gm^2}{L^2}\\left(\\sqrt{2} + \\frac{1}{2}\\right)$",
        "$\\frac{Gm^2}{L^2}\\left(2 + \\frac{1}{\\sqrt{2}}\\right)$",
        "$\\frac{2Gm^2}{L^2}$",
        "$\\frac{3Gm^2}{L^2}$"
    ],
    0,
    "The two adjacent masses at distance $L$ exert forces of magnitude $F_1 = \\frac{Gm^2}{L^2}$ at an angle of $90^\\circ$, giving resultant $\\sqrt{2}F_1$ along the diagonal. The diagonally opposite mass at distance $\\sqrt{2}L$ exerts force $F_2 = \\frac{Gm^2}{(\\sqrt{2}L)^2} = \\frac{Gm^2}{2L^2}$ in the same direction.\n$$F_{\\text{net}} = \\sqrt{2}F_1 + F_2 = \\frac{Gm^2}{L^2}\\left(\\sqrt{2} + \\frac{1}{2}\\right)$$",
    "Medium"
)

# Q52
add_q(
    "Newton's law of gravitation",
    "The gravitational field intensity inside a uniform thin spherical shell of mass $M$ and radius $R$ at a distance $r < R$ from the center is:",
    [
        "$0$",
        "$\\frac{GM}{R^2}$",
        "$\\frac{GMr}{R^3}$",
        "$\\frac{GM}{r^2}$"
    ],
    0,
    "By Newton's shell theorem, the gravitational field intensity everywhere inside a uniform spherical shell is identically zero.",
    "Easy"
)

# Q53
add_q(
    "Newton's law of gravitation",
    "The gravitational field intensity due to a uniform solid sphere of mass $M$ and radius $R$ at an interior point at distance $r < R$ from the center is:",
    [
        "$\\frac{GMr}{R^3}$",
        "$\\frac{GM}{r^2}$",
        "$\\frac{GM}{R^2}$",
        "$0$"
    ],
    0,
    "Only the mass of the sphere within radius $r$ contributes to the gravitational field: $M(r) = M\\left(\\frac{r}{R}\\right)^3$. Thus, $E(r) = \\frac{G M(r)}{r^2} = \\frac{G M r^3 / R^3}{r^2} = \\frac{GMr}{R^3}$, varying linearly with distance from the center.",
    "Easy"
)

# Q54
add_q(
    "Newton's law of gravitation",
    "Two bodies of masses $M$ and $4M$ are placed at a distance $d$ apart. The point on the line joining them where the net gravitational field is zero is at a distance of:",
    [
        "$d/3$ from mass $M$",
        "$d/4$ from mass $M$",
        "$d/5$ from mass $M$",
        "$d/2$ from mass $M$"
    ],
    0,
    "Let the point be at distance $x$ from $M$ and $d - x$ from $4M$:\n$$\\frac{GM}{x^2} = \\frac{G(4M)}{(d - x)^2} \\implies \\frac{1}{x} = \\frac{2}{d - x} \\implies d - x = 2x \\implies 3x = d \\implies x = \\frac{d}{3}$$",
    "Easy"
)

# Q55
add_q(
    "Newton's law of gravitation",
    "A uniform thin ring of mass $M$ and radius $R$ lies in the $y-z$ plane. The gravitational field intensity at an axial point at distance $x$ from the center is:",
    [
        "$\\frac{GMx}{(R^2 + x^2)^{3/2}}$",
        "$\\frac{GM}{(R^2 + x^2)}$",
        "$\\frac{GMx}{(R^2 + x^2)}$",
        "$\\frac{GMR}{(R^2 + x^2)^{3/2}}$"
    ],
    0,
    "Each mass element $dM$ at distance $\\sqrt{R^2 + x^2}$ produces field $dE = \\frac{G dM}{R^2 + x^2}$. Components perpendicular to the axis cancel by symmetry, while axial components add: $E = \\int dE\\cos\\theta = \\frac{GM}{R^2 + x^2}\\frac{x}{\\sqrt{R^2 + x^2}} = \\frac{GMx}{(R^2 + x^2)^{3/2}}$.",
    "Medium"
)

# Q56
add_q(
    "Newton's law of gravitation",
    "In the previous question, the distance $x$ from the center of the ring where the gravitational field intensity is MAXIMUM is:",
    [
        "$x = \\frac{R}{\\sqrt{2}}$",
        "$x = R$",
        "$x = \\sqrt{2}R$",
        "$x = \\frac{R}{2}$"
    ],
    0,
    "Differentiating $E(x) = \\frac{GMx}{(R^2 + x^2)^{3/2}}$ with respect to $x$ and setting $\\frac{dE}{dx} = 0$ gives $(R^2 + x^2)^{3/2} - x\\frac{3}{2}(R^2 + x^2)^{1/2}(2x) = 0 \\implies R^2 + x^2 - 3x^2 = 0 \\implies 2x^2 = R^2 \\implies x = \\frac{R}{\\sqrt{2}}$.",
    "Medium"
)

# Q57
add_q(
    "Newton's law of gravitation",
    "Two spheres of masses $m$ and $M$ are situated in air and the gravitational force between them is $F$. The space around the masses is now filled with a liquid of specific gravity $3$. The gravitational force between them now is:",
    [
        "$F$",
        "$F/3$",
        "$3F$",
        "$F/9$"
    ],
    0,
    "Gravitational attraction is a fundamental property of matter that depends only on the masses and separation distance; it is completely independent of the medium.",
    "Easy"
)

# Q58
add_q(
    "Newton's law of gravitation",
    "Two lead spheres of radius $R$ each, in contact with each other, attract each other with a gravitational force $F$. If the radius of each sphere is doubled while keeping the density constant, the new gravitational force between them is:",
    [
        "$16F$",
        "$4F$",
        "$8F$",
        "$2F$"
    ],
    0,
    "Mass is $M = \\frac{4}{3}\\pi R^3 \\rho \\propto R^3$. The distance between their centers is $d = 2R$.\n$$F = G\\frac{M^2}{d^2} \\propto \\frac{(R^3)^2}{(2R)^2} = \\frac{R^6}{4R^2} \\propto R^4$$\nWhen $R$ is doubled ($R' = 2R$), the force increases by a factor of $2^4 = 16$.",
    "Hard"
)

# Q59
add_q(
    "Newton's law of gravitation",
    "A point mass $m$ is placed at the center of a thin spherical shell of mass $M$ and radius $R$. The net gravitational force on the point mass $m$ is:",
    [
        "$0$",
        "$\\frac{GMm}{R^2}$",
        "$\\frac{2GMm}{R^2}$",
        "$\\frac{GMm}{2R^2}$"
    ],
    0,
    "The gravitational field inside a uniform spherical shell is zero everywhere, so the net force exerted by the shell on any mass placed inside it (including at the center) is zero.",
    "Easy"
)

# Q60
add_q(
    "Newton's law of gravitation",
    "A spherical cavity of radius $R/2$ is scooped out from a solid sphere of uniform density, mass $M$ and radius $R$, such that the cavity touches the surface of the sphere. The gravitational force exerted by this remaining mass on a point mass $m$ placed at distance $d$ ($d > R$) from the center on the line passing through both centers is:",
    [
        "$\\frac{GMm}{d^2}\\left[1 - \\frac{1}{8\\left(1 - \\frac{R}{2d}\\right)^2}\\right]$",
        "$\\frac{GMm}{d^2}\\left[1 - \\frac{1}{4\\left(1 - \\frac{R}{2d}\\right)^2}\\right]$",
        "$\\frac{7GMm}{8d^2}$",
        "$\\frac{GMm}{d^2}$"
    ],
    0,
    "The mass of the scooped cavity of radius $R/2$ is $M_{\\text{cav}} = M(1/2)^3 = M/8$. The center of the cavity is at distance $d - R/2$ from $m$. By superposition:\n$$F = F_{\\text{whole}} - F_{\\text{cavity}} = \\frac{GMm}{d^2} - \\frac{G(M/8)m}{(d - R/2)^2} = \\frac{GMm}{d^2}\\left[1 - \\frac{1}{8(1 - R/(2d))^2}\\right]$$",
    "Hard"
)

# Q61
add_q(
    "Newton's law of gravitation",
    "The gravitational field in a region is given by $\\vec{E} = -(5\\hat{i} + 12\\hat{j})\\text{ N/kg}$. The magnitude of the gravitational force on a mass of $2\\text{ kg}$ placed in this region is:",
    [
        "$26\\text{ N}$",
        "$13\\text{ N}$",
        "$34\\text{ N}$",
        "$17\\text{ N}$"
    ],
    0,
    "Magnitude of field: $|\\vec{E}| = \\sqrt{(-5)^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\text{ N/kg}$.\nForce: $F = m |\\vec{E}| = 2\\text{ kg} \\times 13\\text{ N/kg} = 26\\text{ N}$.",
    "Easy"
)

# Q62
add_q(
    "Newton's law of gravitation",
    "Which of the following is true regarding gravitational force between two point particles?",
    [
        "It acts along the line joining the two particles and obeys Newton's third law",
        "It is non-conservative",
        "It depends on the presence of other bodies nearby",
        "It is a repulsive force at very small distances"
    ],
    0,
    "Gravitational force is an action-reaction pair obeying Newton's third law ($\\vec{F}_{12} = -\\vec{F}_{21}$), directed along the line joining the centers (central force), conservative, and independent of other surrounding bodies.",
    "Easy"
)

# Q63
add_q(
    "Newton's law of gravitation",
    "A body of mass $m$ is taken into a tunnel drilled through the center of the Earth. The gravitational force on the body at distance $r$ from the center of the Earth is proportional to:",
    [
        "$r$",
        "$1/r$",
        "$1/r^2$",
        "$r^2$"
    ],
    0,
    "Inside the Earth, gravitational field is $E(r) = \\frac{GMr}{R^3}$. Thus, the force is $F = mE(r) = \\left(\\frac{GMm}{R^3}\\right)r \\propto r$. This linear restoring force produces simple harmonic motion.",
    "Easy"
)

# Q64
add_q(
    "Newton's law of gravitation",
    "In the previous question, if the body is released from rest at the surface of the Earth, it undergoes SHM with a time period of:",
    [
        "$2\\pi\\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ minutes}$",
        "$\\pi\\sqrt{\\frac{R}{g}} \\approx 42.3\\text{ minutes}$",
        "$4\\pi\\sqrt{\\frac{R}{g}}$",
        "$\\sqrt{\\frac{2R}{g}}$"
    ],
    0,
    "The restoring force is $F = -\\left(\\frac{mg}{R}\\right)r = -kr$, with $k = \\frac{mg}{R}$.\n$$T = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{\\frac{m}{mg/R}} = 2\\pi\\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ minutes}$$",
    "Medium"
)

# Q65
add_q(
    "Newton's law of gravitation",
    "The time taken by the body in the previous question to travel from one side of the Earth to the other through the tunnel is:",
    [
        "$\\pi\\sqrt{\\frac{R}{g}} \\approx 42.3\\text{ minutes}$",
        "$2\\pi\\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ minutes}$",
        "$\\frac{\\pi}{2}\\sqrt{\\frac{R}{g}} \\approx 21.2\\text{ minutes}$",
        "$\\sqrt{\\frac{R}{g}}$"
    ],
    0,
    "Traveling from one end to the other is half an oscillation ($T/2$):\n$$t = \\frac{T}{2} = \\pi\\sqrt{\\frac{R}{g}} \\approx 42.3\\text{ minutes}$$",
    "Easy"
)

# Q66
add_q(
    "Newton's law of gravitation",
    "A uniform thin spherical shell of radius $R$ and mass $M$ exerts a gravitational force on an exterior point mass $m$ at distance $r > R$ equal to:",
    [
        "$\\frac{GMm}{r^2}$",
        "$\\frac{GMm}{(r - R)^2}$",
        "$0$",
        "$\\frac{GMm}{R^2}$"
    ],
    0,
    "Newton's shell theorem states that for points outside the shell, the entire mass of the shell acts as if it were concentrated at its geometric center.",
    "Easy"
)

# Q67
add_q(
    "Newton's law of gravitation",
    "Infinite bodies, each of mass $3\\text{ kg}$, are situated on the $x$-axis at distances $1\\text{ m}, 2\\text{ m}, 4\\text{ m}, 8\\text{ m}, \\dots$ from the origin. The resulting gravitational field at the origin is:",
    [
        "$4G$",
        "$3G$",
        "$6G$",
        "$G$"
    ],
    0,
    "$$E = \\sum_{n=0}^\\infty \\frac{G m}{r_n^2} = G(3)\\left[\\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{4^2} + \\frac{1}{8^2} + \\dots\\right] = 3G\\left[1 + \\frac{1}{4} + \\frac{1}{16} + \\frac{1}{64} + \\dots\\right]$$\nSum of infinite GP: $S = \\frac{1}{1 - 1/4} = \\frac{4}{3}$.\n$$E = 3G \\times \\frac{4}{3} = 4G$$",
    "Medium"
)

# Q68
add_q(
    "Newton's law of gravitation",
    "In the previous question, if the masses at $2\\text{ m}, 8\\text{ m}, \\dots$ have their signs of force reversed (e.g., alternating direction), the resulting field at the origin would be:",
    [
        "$\\frac{12}{5}G$",
        "$2G$",
        "$\\frac{3}{5}G$",
        "$4G$"
    ],
    0,
    "$$E = 3G\\left[1 - \\frac{1}{4} + \\frac{1}{16} - \\frac{1}{64} + \\dots\\right] = 3G\\left[\\frac{1}{1 - (-1/4)}\\right] = 3G\\left(\\frac{1}{5/4}\\right) = \\frac{12}{5}G$$",
    "Medium"
)

# Q69
add_q(
    "Newton's law of gravitation",
    "Two identical solid copper spheres of radius $R$ are placed in contact. The gravitational attraction between them is proportional to:",
    [
        "$R^4$",
        "$R^2$",
        "$R^3$",
        "$R^6$"
    ],
    0,
    "Since $m \\propto R^3$ and separation is $d = 2R \\propto R$, the force is $F = G\\frac{m^2}{d^2} \\propto \\frac{(R^3)^2}{R^2} = R^4$.",
    "Easy"
)

# Q70
add_q(
    "Newton's law of gravitation",
    "The gravitational field at a point is defined as the force experienced per unit mass placed at that point. Its SI unit is:",
    [
        "$\\text{N/kg}$ or $\\text{m/s}^2$",
        "$\\text{N}\\cdot\\text{m}$",
        "$\\text{J/kg}$",
        "$\\text{kg}\\cdot\\text{m/s}$"
    ],
    0,
    "The gravitational field is $\\vec{E} = \\frac{\\vec{F}}{m}$. Its units are $\\text{N/kg}$, which is dimensionally equivalent to acceleration ($\text{m/s}^2$).",
    "Easy"
)

# Q71
add_q(
    "Newton's law of gravitation",
    "If the distance between two particles is halved and the mass of each is doubled, the gravitational force between them increases by a factor of:",
    [
        "$16$",
        "$8$",
        "$4$",
        "$2$"
    ],
    0,
    "$$F' = G\\frac{(2m_1)(2m_2)}{(r/2)^2} = G\\frac{4m_1 m_2}{r^2/4} = 16 \\left(G\\frac{m_1 m_2}{r^2}\\right) = 16F$$",
    "Easy"
)

# Q72
add_q(
    "Newton's law of gravitation",
    "A mass $M$ is split into two parts $m$ and $(M - m)$. For a given separation, the gravitational attraction between the two parts is maximum when $m/M$ is:",
    [
        "$1/2$",
        "$1/4$",
        "$1/3$",
        "$2/3$"
    ],
    0,
    "Force is proportional to the product of masses: $f(m) = m(M - m) = M m - m^2$. Differentiating and setting to zero:\n$$\\frac{df}{dm} = M - 2m = 0 \\implies m = \\frac{M}{2} \\implies \\frac{m}{M} = \\frac{1}{2}$$",
    "Easy"
)

# Q73
add_q(
    "Newton's law of gravitation",
    "The gravitational force between two bodies is independent of:",
    [
        "The medium separating them and the presence of other bodies",
        "Their masses",
        "The distance between them",
        "Their states of rest or motion"
    ],
    0,
    "Gravitational attraction is unaffected by intervening media or other surrounding masses.",
    "Easy"
)

# Q74
add_q(
    "Newton's law of gravitation",
    "Three point masses $m, 2m$, and $3m$ are placed at the corners of an equilateral triangle of side $L$. The net gravitational potential energy of the system is:",
    [
        "$-\\frac{11Gm^2}{L}$",
        "$-\\frac{6Gm^2}{L}$",
        "$-\\frac{5Gm^2}{L}$",
        "$-\\frac{14Gm^2}{L}$"
    ],
    0,
    "Sum of pairwise potential energies:\n$$U = -\\frac{G(m)(2m)}{L} - \\frac{G(2m)(3m)}{L} - \\frac{G(m)(3m)}{L} = -\\frac{Gm^2}{L}(2 + 6 + 3) = -\\frac{11Gm^2}{L}$$",
    "Medium"
)

# Q75
add_q(
    "Newton's law of gravitation",
    "What is the ratio of gravitational force to electrostatic force between two electrons? (Take $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$, $k_e = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, $e = 1.6 \\times 10^{-19}\\text{ C}$)",
    [
        "$2.4 \\times 10^{-43}$",
        "$10^{-36}$",
        "$10^{-20}$",
        "$1.0$"
    ],
    0,
    "$$\\frac{F_G}{F_E} = \\frac{G m_e^2}{k_e e^2} = \\frac{6.67 \\times 10^{-11} \\times (9.1 \\times 10^{-31})^2}{9 \\times 10^9 \\times (1.6 \\times 10^{-19})^2} \\approx 2.4 \\times 10^{-43}$$",
    "Medium"
)

# Q76
add_q(
    "Newton's law of gravitation",
    "The gravitational field intensity due to a uniform spherical shell of radius $R$ and mass $M$ at distance $r$ from its center is plotted as a function of $r$. The graph is:",
    [
        "Zero for $r < R$, and drops as $1/r^2$ for $r \\ge R$",
        "Linearly increasing for $r < R$, then drops as $1/r^2$",
        "Constant for $r < R$, then drops as $1/r$",
        "Decreases linearly from center to surface"
    ],
    0,
    "Inside the shell ($r < R$), $E = 0$. Outside ($r \\ge R$), $E = GM/r^2$, showing a discontinuous jump at $r = R$ from $0$ to $GM/R^2$.",
    "Easy"
)

# Q77
add_q(
    "Newton's law of gravitation",
    "The gravitational field intensity due to a uniform solid sphere of radius $R$ and mass $M$ at distance $r$ from its center:",
    [
        "Increases linearly with $r$ for $r \\le R$, and decreases as $1/r^2$ for $r \\ge R$",
        "Is zero for $r \\le R$ and decreases as $1/r^2$ for $r \\ge R$",
        "Decreases linearly for $r \\le R$",
        "Is constant for $r \\le R$"
    ],
    0,
    "Inside the solid sphere, $E = \\frac{GMr}{R^3} \\propto r$ (straight line through origin). Outside, $E = \\frac{GM}{r^2} \\propto 1/r^2$. At the surface $r = R$, $E$ reaches its maximum value $\\frac{GM}{R^2}$.",
    "Easy"
)

# Q78
add_q(
    "Newton's law of gravitation",
    "At what distance from the center of a uniform solid sphere of mass $M$ and radius $R$ is the gravitational field intensity equal to half of its value at the surface?",
    [
        "At $r = R/2$ and $r = \\sqrt{2}R$",
        "At $r = R/2$ only",
        "At $r = 2R$ only",
        "At $r = R/4$ and $r = 4R$"
    ],
    0,
    "At surface, $E_s = \\frac{GM}{R^2}$. We want $E = E_s/2$.\nInside ($r < R$): $E = \\frac{GMr}{R^3} = \\frac{E_s}{2} \\implies r = \\frac{R}{2}$.\nOutside ($r > R$): $E = \\frac{GM}{r^2} = \\frac{GM}{2R^2} \\implies r^2 = 2R^2 \\implies r = \\sqrt{2}R$.\nThus, there are two such points: $r = R/2$ (inside) and $r = \\sqrt{2}R$ (outside).",
    "Hard"
)

# Q79
add_q(
    "Newton's law of gravitation",
    "A straight smooth tunnel is dug through the Earth connecting two arbitrary points on its surface (not passing through the center). The period of oscillation of a particle dropped into this chord tunnel is:",
    [
        "Equal to $2\\pi\\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ minutes}$, identical to a diametrical tunnel",
        "Larger than $84.6\\text{ minutes}$",
        "Smaller than $84.6\\text{ minutes}$",
        "Zero"
    ],
    0,
    "Let $x$ be the displacement along the tunnel from its midpoint. The force along the tunnel is $F_x = F\\cos\\theta = \\left(\\frac{mg r}{R}\\right)\\left(\\frac{x}{r}\\right) = \\frac{mg}{R} x$. The effective spring constant along any chord tunnel is identical: $k = mg/R$. Thus, $T = 2\\pi\\sqrt{R/g} \\approx 84.6\\text{ min}$, completely independent of the chord length or orientation!",
    "Hard"
)

# Q80
add_q(
    "Newton's law of gravitation",
    "Two stars of masses $M$ and $2M$ are at distance $D$. If a third small mass $m$ is placed on the line between them such that it experiences zero gravitational force, the ratio of its distance from $M$ to that from $2M$ is:",
    [
        "$1 : \\sqrt{2}$",
        "$1 : 2$",
        "$1 : 4$",
        "$\\sqrt{2} : 1$"
    ],
    0,
    "$$\\frac{GMm}{r_1^2} = \\frac{G(2M)m}{r_2^2} \\implies \\frac{1}{r_1^2} = \\frac{2}{r_2^2} \\implies \\frac{r_1}{r_2} = \\frac{1}{\\sqrt{2}} = 1 : \\sqrt{2}$$",
    "Easy"
)

# Q81
add_q(
    "Newton's law of gravitation",
    "The gravitational field at the center of a hemispherical shell of uniform mass density and radius $R$ is directed:",
    [
        "Along the axis of symmetry towards the pole of the hemisphere",
        "Along the axis of symmetry away from the pole",
        "It is zero by symmetry",
        "Perpendicular to the symmetry axis"
    ],
    0,
    "By symmetry, sideways components cancel, and each mass element pulls along the axis toward the hemisphere, giving a net attractive field toward the pole of the hemisphere.",
    "Medium"
)

# Q82
add_q(
    "Newton's law of gravitation",
    "Two bodies each of mass $m$ are tied to the ends of a light spring of natural length $L_0$ and spring constant $k$. If the system is placed in deep space and allowed to reach equilibrium under mutual gravitation, the compression $\\Delta L$ in the spring is approximately: (assuming $\\Delta L \\ll L_0$)",
    [
        "$\\frac{Gm^2}{k L_0^2}$",
        "$\\frac{Gm^2}{2k L_0^2}$",
        "$\\frac{2Gm^2}{k L_0^2}$",
        "$\\frac{Gm}{k L_0}$"
    ],
    0,
    "At equilibrium, the spring restoring force equals the mutual gravitational attraction:\n$$k \\Delta L = \\frac{Gm^2}{(L_0 - \\Delta L)^2} \\approx \\frac{Gm^2}{L_0^2} \\implies \\Delta L = \\frac{Gm^2}{k L_0^2}$$",
    "Medium"
)

# Q83
add_q(
    "Newton's law of gravitation",
    "Newton's law of gravitation is valid for:",
    [
        "All bodies in the universe irrespective of their size or state",
        "Only terrestrial objects",
        "Only celestial objects",
        "Charged particles only"
    ],
    0,
    "Newton's law of gravitation is a universal law that applies to all masses, microscopic and macroscopic, throughout the universe.",
    "Easy"
)

# Q84
add_q(
    "Newton's law of gravitation",
    "A satellite of mass $m$ is orbiting the Earth of mass $M$ in a circular orbit. If the satellite experiences a gravitational force $F$, what is the reaction force?",
    [
        "An equal and opposite gravitational force $F$ exerted by the satellite on the Earth",
        "The centripetal force",
        "The centrifugal force",
        "Zero"
    ],
    0,
    "By Newton's third law, the reaction to the Earth's gravitational pull on the satellite is an equal and oppositely directed gravitational pull exerted by the satellite on the Earth.",
    "Easy"
)

# Q85
add_q(
    "Newton's law of gravitation",
    "The acceleration of a freely falling body does not depend on:",
    [
        "The mass of the falling body",
        "The mass of the planet",
        "The radius of the planet",
        "The distance from the center of the planet"
    ],
    0,
    "By Galileo's principle of equivalence, $m_{\\text{inertial}} a = G\\frac{M m_{\\text{grav}}}{r^2} \\implies a = \\frac{GM}{r^2}$. The acceleration is independent of the mass of the falling body.",
    "Easy"
)

# Q86
add_q(
    "Newton's law of gravitation",
    "Two identical hollow spheres of mass $M$ and radius $R$ are placed with their centers separated by distance $4R$. A point mass $m$ is placed midway between their centers. The net gravitational force on $m$ is:",
    [
        "$0$",
        "$\\frac{GMm}{2R^2}$",
        "$\\frac{GMm}{4R^2}$",
        "$\\frac{2GMm}{R^2}$"
    ],
    0,
    "The point mass is at distance $2R$ from the center of each identical sphere. The two equal and opposite forces cancel out completely, giving net force zero.",
    "Easy"
)

# Q87
add_q(
    "Newton's law of gravitation",
    "A uniform rod of mass $M$ and length $L$ lies along the $x$-axis from $x = a$ to $x = a + L$. The gravitational force exerted by this rod on a point mass $m$ at the origin is:",
    [
        "$\\frac{GMm}{a(a + L)}$",
        "$\\frac{GMm}{(a + L)^2}$",
        "$\\frac{GMm}{a^2}$",
        "$\\frac{GMm}{a + L/2}$"
    ],
    0,
    "Linear mass density is $\\lambda = M/L$. For an element $dx$ at distance $x$:\n$$dF = \\frac{G m (\\lambda dx)}{x^2}$$\n$$F = Gm\\lambda \\int_a^{a+L} \\frac{dx}{x^2} = Gm\\frac{M}{L}\\left[-\\frac{1}{x}\\right]_a^{a+L} = \\frac{GMm}{L}\\left(\\frac{1}{a} - \\frac{1}{a+L}\\right) = \\frac{GMm}{a(a+L)}$$",
    "Hard"
)

# Q88
add_q(
    "Newton's law of gravitation",
    "The gravitational field intensity due to the uniform rod in the previous question at distance $a \\gg L$ from the origin approaches:",
    [
        "$\\frac{GM}{a^2}$",
        "$\\frac{GM}{aL}$",
        "$\\frac{GM}{L^2}$",
        "$0$"
    ],
    0,
    "For $a \\gg L$, $a(a + L) \\approx a^2$. The force becomes $\\frac{GMm}{a^2}$, matching a point mass at distance $a$.",
    "Easy"
)

# Q89
add_q(
    "Newton's law of gravitation",
    "A thin semi-circular wire of mass $M$ and radius $R$ is placed in the $x-y$ plane with center of curvature at the origin. The gravitational field intensity at the origin is:",
    [
        "$\\frac{2GM}{\\pi R^2}$",
        "$\\frac{GM}{\\pi R^2}$",
        "$\\frac{4GM}{\\pi R^2}$",
        "$0$"
    ],
    0,
    "Mass per unit length is $\\lambda = \\frac{M}{\\pi R}$. For arc element $d\\theta$:\n$$dE = \\frac{G(\\lambda R d\\theta)}{R^2} = \\frac{G\\lambda}{R} d\\theta$$\nIntegrating symmetric components: $E = \\int_{-\\pi/2}^{\\pi/2} dE\\cos\\theta = \\frac{G\\lambda}{R} \\int_{-\\pi/2}^{\\pi/2} \\cos\\theta d\\theta = \\frac{G\\lambda}{R}(2) = \\frac{2G(M/(\\pi R))}{R} = \\frac{2GM}{\\pi R^2}$.",
    "Hard"
)

# Q90
add_q(
    "Newton's law of gravitation",
    "If the Earth were to contract to half its present radius without any change in mass, the gravitational force on an object at its new surface would:",
    [
        "Quadruple",
        "Double",
        "Be halved",
        "Remain the same"
    ],
    0,
    "Surface gravity is $g = \\frac{GM}{R^2}$. If $R$ is halved, $g' = \\frac{GM}{(R/2)^2} = 4g$. The force quadruples.",
    "Easy"
)

# Balance options for both subtopics
def balance_subtopic(subtopic_name):
    sub_qs = [q for q in questions if q["subtopic"] == subtopic_name]
    assert len(sub_qs) == 45, f"Expected 45 questions for {subtopic_name}, got {len(sub_qs)}"
    
    # Target counts: A:12, B:11, C:11, D:11
    targets = [0]*12 + [1]*11 + [2]*11 + [3]*11
    
    for i, target in enumerate(targets):
        q = sub_qs[i]
        orig_corr = q["correctAnswer"]
        if orig_corr != target:
            correct_option_text = q["options"][orig_corr]
            target_option_text = q["options"][target]
            q["options"][target] = correct_option_text
            q["options"][orig_corr] = target_option_text
            q["correctAnswer"] = target

balance_subtopic("Kepler's laws")
balance_subtopic("Newton's law of gravitation")

# Save to batch 1
with open("scripts/thermo_grav/grav_batch1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Gravitation Batch 1 generated successfully! Total questions: {len(questions)}")
