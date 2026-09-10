# -*- coding: utf-8 -*-
"""
Generate Batch 2 of Gravitation:
- Gravitational potential energy (45 MCQs)
- Escape velocity (45 MCQs)
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
# SUBTOPIC 3: Gravitational potential energy (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Gravitational potential energy",
    "The gravitational potential energy of a body of mass $m$ at a distance $r$ from the center of the Earth (mass $M$) is:",
    [
        "$-\\frac{GMm}{r}$",
        "$\\frac{GMm}{r}$",
        "$-\\frac{GMm}{r^2}$",
        "$\\frac{GMm}{r^2}$"
    ],
    0,
    "By definition, gravitational potential energy with reference at infinity ($U(\\infty) = 0$) is the work done in bringing the mass from infinity to distance $r$:\n$$U = -\\int_\\infty^r F dr = -\\int_\\infty^r \\frac{GMm}{r^2} dr = -\\frac{GMm}{r}$$",
    "Easy"
)

# Q2
add_q(
    "Gravitational potential energy",
    "The work done in raising a body of mass $m$ from the surface of the Earth (radius $R$) to a height $h = R$ is:",
    [
        "$\\frac{1}{2}mgR$",
        "$mgR$",
        "$2mgR$",
        "$\\frac{1}{4}mgR$"
    ],
    0,
    "Work done equals the increase in gravitational potential energy:\n$$W = \\Delta U = \\frac{mgh}{1 + h/R}$$\nFor $h = R$:\n$$W = \\frac{mgR}{1 + R/R} = \\frac{1}{2}mgR$$",
    "Easy"
)

# Q3
add_q(
    "Gravitational potential energy",
    "The work done in raising a mass $m$ from the surface of the Earth to a height $h = 2R$ is:",
    [
        "$\\frac{2}{3}mgR$",
        "$\\frac{1}{3}mgR$",
        "$\\frac{1}{2}mgR$",
        "$2mgR$"
    ],
    0,
    "Using $W = \\frac{mgh}{1 + h/R}$ with $h = 2R$:\n$$W = \\frac{mg(2R)}{1 + 2} = \\frac{2}{3}mgR$$",
    "Easy"
)

# Q4
add_q(
    "Gravitational potential energy",
    "The gravitational potential at the center of a uniform solid sphere of mass $M$ and radius $R$ is:",
    [
        "$-\\frac{3GM}{2R}$",
        "$-\\frac{GM}{R}$",
        "$0$",
        "$-\\frac{GM}{2R}$"
    ],
    0,
    "The potential inside a solid sphere at distance $r$ is $V(r) = -\\frac{GM}{2R^3}(3R^2 - r^2)$. At the center ($r = 0$):\n$$V_c = -\\frac{3GM}{2R} = 1.5 V_{\\text{surface}}$$",
    "Easy"
)

# Q5
add_q(
    "Gravitational potential energy",
    "The gravitational potential inside a uniform thin spherical shell of mass $M$ and radius $R$ is:",
    [
        "Constant and equal to $-\\frac{GM}{R}$ everywhere inside",
        "Zero everywhere inside",
        "Linearly dependent on distance $r$",
        "Inversely proportional to $r$"
    ],
    0,
    "Since the gravitational field inside a uniform shell is zero everywhere ($\\vec{E} = -\\frac{dV}{dr} = 0$), the potential is constant throughout the interior and equal to its value at the surface, which is $-\\frac{GM}{R}$.",
    "Easy"
)

# Q6
add_q(
    "Gravitational potential energy",
    "The change in potential energy when a body of mass $m$ is raised from height $R$ to height $2R$ above the Earth's surface is:",
    [
        "$\\frac{1}{6}mgR$",
        "$\\frac{1}{2}mgR$",
        "$\\frac{2}{3}mgR$",
        "$\\frac{1}{3}mgR$"
    ],
    0,
    "Initial distance $r_1 = R + R = 2R$, final distance $r_2 = R + 2R = 3R$.\n$$\\Delta U = -\\frac{GMm}{r_2} - \\left(-\\frac{GMm}{r_1}\\right) = GMm\\left(\\frac{1}{2R} - \\frac{1}{3R}\\right) = \\frac{GMm}{6R} = \\frac{mgR^2}{6R} = \\frac{1}{6}mgR$$",
    "Medium"
)

# Q7
add_q(
    "Gravitational potential energy",
    "Three particles, each of mass $m$, are situated at the vertices of an equilateral triangle of side $a$. The work required to increase each side of the triangle to $2a$ is:",
    [
        "$\\frac{3Gm^2}{2a}$",
        "$\\frac{3Gm^2}{a}$",
        "$\\frac{Gm^2}{2a}$",
        "$\\frac{6Gm^2}{a}$"
    ],
    0,
    "Initial potential energy:\n$$U_i = 3 \\times \\left(-\\frac{Gm^2}{a}\\right) = -\\frac{3Gm^2}{a}$$\nFinal potential energy with side $2a$:\n$$U_f = 3 \\times \\left(-\\frac{Gm^2}{2a}\\right) = -\\frac{3Gm^2}{2a}$$\nWork required:\n$$W = U_f - U_i = -\\frac{3Gm^2}{2a} - \\left(-\\frac{3Gm^2}{a}\\right) = \\frac{3Gm^2}{2a}$$",
    "Medium"
)

# Q8
add_q(
    "Gravitational potential energy",
    "The gravitational potential in a region is given by $V = (2x - 3y + 4z)\\text{ J/kg}$. The gravitational field intensity $\\vec{E}$ at $(1, 1, 1)$ is:",
    [
        "$-2\\hat{i} + 3\\hat{j} - 4\\hat{k}$",
        "$2\\hat{i} - 3\\hat{j} + 4\\hat{k}$",
        "$-2\\hat{i} - 3\\hat{j} - 4\\hat{k}$",
        "$2\\hat{i} + 3\\hat{j} + 4\\hat{k}$"
    ],
    0,
    "Using $\\vec{E} = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)$:\n$$\\frac{\\partial V}{\\partial x} = 2, \\quad \\frac{\\partial V}{\\partial y} = -3, \\quad \\frac{\\partial V}{\\partial z} = 4$$\n$$\\vec{E} = -(2\\hat{i} - 3\\hat{j} + 4\\hat{k}) = -2\\hat{i} + 3\\hat{j} - 4\\hat{k}$$",
    "Easy"
)

# Q9
add_q(
    "Gravitational potential energy",
    "A body of mass $m$ is dropped from a height $h = R$ above the Earth's surface. The speed with which it strikes the Earth (neglecting air resistance) is:",
    [
        "$\\sqrt{gR}$",
        "$\\sqrt{2gR}$",
        "$\\sqrt{gR/2}$",
        "$2\\sqrt{gR}$"
    ],
    0,
    "By conservation of mechanical energy:\n$$E_i = -\\frac{GMm}{R + R} = -\\frac{GMm}{2R}$$\n$$E_f = \\frac{1}{2}mv^2 - \\frac{GMm}{R}$$\n$$\\frac{1}{2}mv^2 = \\frac{GMm}{R} - \\frac{GMm}{2R} = \\frac{GMm}{2R} = \\frac{mgR}{2} \\implies v = \\sqrt{gR}$$",
    "Medium"
)

# Q10
add_q(
    "Gravitational potential energy",
    "A particle of mass $m$ is released from rest at a large distance from Earth. Its speed on reaching the Earth's surface is:",
    [
        "$\\sqrt{2gR}$",
        "$\\sqrt{gR}$",
        "$2\\sqrt{gR}$",
        "$\\sqrt{gR/2}$"
    ],
    0,
    "At infinity, $E = 0$. At the surface:\n$$\\frac{1}{2}mv^2 - \\frac{GMm}{R} = 0 \\implies v = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$$",
    "Easy"
)

# Q11
add_q(
    "Gravitational potential energy",
    "The gravitational potential at a distance $r$ from the center of a thin spherical shell of mass $M$ and radius $R$ is $V$. Which of the following graphs correctly represents $V$ versus $r$?",
    [
        "Constant horizontal line at $-\\frac{GM}{R}$ from $r = 0$ to $R$, then curving smoothly towards zero as $-1/r$ for $r > R$",
        "Zero for $r < R$ and curving as $-1/r$ for $r > R$",
        "Decreasing linearly from $0$ to $R$, then dropping as $-1/r$",
        "Parabolic for $r < R$, then hyperbola for $r > R$"
    ],
    0,
    "Inside the shell ($r \\le R$), $V = -GM/R$ (constant). Outside ($r > R$), $V = -GM/r$, which approaches zero asymptotically from negative values.",
    "Easy"
)

# Q12
add_q(
    "Gravitational potential energy",
    "The gravitational potential $V$ as a function of distance $r$ inside a uniform solid sphere of mass $M$ and radius $R$ is parabolic. The difference between the potential at the center and at the surface is:",
    [
        "$V_s - V_c = \\frac{GM}{2R}$",
        "$V_s - V_c = \\frac{GM}{R}$",
        "$V_s - V_c = \\frac{3GM}{2R}$",
        "$V_s - V_c = 0$"
    ],
    0,
    "$$V_c = -\\frac{3GM}{2R}, \\quad V_s = -\\frac{GM}{R}$$\n$$V_s - V_c = -\\frac{GM}{R} - \\left(-\\frac{3GM}{2R}\\right) = \\frac{3GM}{2R} - \\frac{GM}{R} = \\frac{GM}{2R}$$",
    "Medium"
)

# Q13
add_q(
    "Gravitational potential energy",
    "A body of mass $m$ is projected vertically upwards from the Earth's surface with speed $v = \\sqrt{gR}$. The maximum height attained above the surface is:",
    [
        "$R$",
        "$R/2$",
        "$2R$",
        "$4R$"
    ],
    0,
    "By energy conservation, $\\frac{1}{2}mv^2 = \\Delta U = \\frac{mgh}{1 + h/R}$.\n$$\\frac{1}{2}m(gR) = \\frac{mgh}{1 + h/R} \\implies \\frac{R}{2} = \\frac{h}{1 + h/R}$$\n$$\\frac{R}{2}\\left(1 + \\frac{h}{R}\\right) = h \\implies \\frac{R}{2} + \\frac{h}{2} = h \\implies \\frac{h}{2} = \\frac{R}{2} \\implies h = R$$",
    "Medium"
)

# Q14
add_q(
    "Gravitational potential energy",
    "A projectile is fired vertically upwards from the Earth's surface with speed $v = \\frac{1}{2}v_e$, where $v_e$ is the escape velocity. The maximum height reached by the projectile above the surface is:",
    [
        "$R/3$",
        "$R/4$",
        "$R/2$",
        "$R$"
    ],
    0,
    "Escape velocity is $v_e = \\sqrt{2gR}$. Here $v = \\frac{v_e}{2} \\implies v^2 = \\frac{v_e^2}{4} = \\frac{2gR}{4} = \\frac{gR}{2}$.\n$$\\frac{1}{2}mv^2 = \\frac{1}{2}m\\left(\\frac{gR}{2}\\right) = \\frac{mgR}{4}$$\nEquating to $\\Delta U = \\frac{mgh}{1 + h/R}$:\n$$\\frac{mgR}{4} = \\frac{mgh}{1 + h/R} \\implies \\frac{R}{4} = \\frac{h}{1 + h/R} \\implies R\\left(1 + \\frac{h}{R}\\right) = 4h \\implies R + h = 4h \\implies 3h = R \\implies h = \\frac{R}{3}$$",
    "Medium"
)

# Q15
add_q(
    "Gravitational potential energy",
    "Two bodies of masses $m_1$ and $m_2$ initially at rest at infinite separation move towards each other under mutual gravitational attraction. Their relative velocity of approach when separated by distance $r$ is:",
    [
        "$\\sqrt{\\frac{2G(m_1 + m_2)}{r}}$",
        "$\\sqrt{\\frac{2G m_1 m_2}{r(m_1 + m_2)}}$",
        "$\\sqrt{\\frac{G(m_1 + m_2)}{r}}$",
        "$\\sqrt{\\frac{2G(m_1 - m_2)}{r}}$"
    ],
    0,
    "By conservation of linear momentum: $m_1 v_1 = m_2 v_2$. By conservation of energy:\n$$\\frac{1}{2}m_1 v_1^2 + \\frac{1}{2}m_2 v_2^2 - \\frac{Gm_1 m_2}{r} = 0$$\nUsing reduced mass $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$, the kinetic energy in the center of mass frame is $\\frac{1}{2}\\mu v_{\\text{rel}}^2$.\n$$\\frac{1}{2}\\mu v_{\\text{rel}}^2 = \\frac{Gm_1 m_2}{r} \\implies \\frac{1}{2}\\frac{m_1 m_2}{m_1 + m_2} v_{\\text{rel}}^2 = \\frac{Gm_1 m_2}{r} \\implies v_{\\text{rel}} = \\sqrt{\\frac{2G(m_1 + m_2)}{r}}$$",
    "Hard"
)

# Q16
add_q(
    "Gravitational potential energy",
    "The binding energy of a satellite of mass $m$ in a circular orbit of radius $r$ around Earth (mass $M$) is:",
    [
        "$\\frac{GMm}{2r}$",
        "$\\frac{GMm}{r}$",
        "$-\\frac{GMm}{2r}$",
        "$0$"
    ],
    0,
    "The total mechanical energy of the satellite is $E = -\\frac{GMm}{2r}$. The binding energy is the minimum energy required to liberate the satellite from the gravitational field to infinity, which is $E_B = -E = \\frac{GMm}{2r}$.",
    "Easy"
)

# Q17
add_q(
    "Gravitational potential energy",
    "Gravitational potential is a:",
    [
        "Scalar quantity with SI unit $\\text{J/kg}$",
        "Vector quantity with SI unit $\\text{N/kg}$",
        "Dimensionless quantity",
        "Scalar quantity with SI unit $\\text{N}\\cdot\\text{m}$"
    ],
    0,
    "Gravitational potential is the work done per unit mass in bringing a test mass from infinity to the given point: $V = W/m$. It is a scalar quantity with SI unit $\\text{J/kg}$.",
    "Easy"
)

# Q18
add_q(
    "Gravitational potential energy",
    "The escape speed from Earth is $v_e$. A body is projected vertically upwards with speed $v = 2v_e$. Its speed in interstellar space (at infinity) is:",
    [
        "$\\sqrt{3}v_e$",
        "$v_e$",
        "$2v_e$",
        "$\\sqrt{5}v_e$"
    ],
    0,
    "By energy conservation: $\\frac{1}{2}m v^2 - \\frac{GMm}{R} = \\frac{1}{2}m v_\\infty^2$.\nSince $\\frac{GMm}{R} = \\frac{1}{2}m v_e^2$:\n$$v_\\infty^2 = v^2 - v_e^2 = (2v_e)^2 - v_e^2 = 4v_e^2 - v_e^2 = 3v_e^2 \\implies v_\\infty = \\sqrt{3}v_e$$",
    "Medium"
)

# Q19
add_q(
    "Gravitational potential energy",
    "A rocket is fired from the Earth's surface with speed $v = 3v_e$. Its asymptotic speed at infinity is:",
    [
        "$2\\sqrt{2}v_e$",
        "$3v_e$",
        "$\\sqrt{8}v_e$",
        "$2v_e$"
    ],
    0,
    "$$v_\\infty = \\sqrt{v^2 - v_e^2} = \\sqrt{(3v_e)^2 - v_e^2} = \\sqrt{9v_e^2 - v_e^2} = \\sqrt{8}v_e = 2\\sqrt{2}v_e$$",
    "Easy"
)

# Q20
add_q(
    "Gravitational potential energy",
    "The gravitational potential at a point on the axis of a uniform thin ring of mass $M$ and radius $R$ at distance $x$ from its center is:",
    [
        "$-\\frac{GM}{\\sqrt{R^2 + x^2}}$",
        "$-\\frac{GMx}{R^2 + x^2}$",
        "$-\\frac{GM}{R+x}$",
        "$-\\frac{GM}{(R^2 + x^2)^{3/2}}$"
    ],
    0,
    "Every element $dM$ on the ring is at the same distance $r = \\sqrt{R^2 + x^2}$ from the axial point. Thus, $V = -\\int \\frac{G dM}{\\sqrt{R^2 + x^2}} = -\\frac{GM}{\\sqrt{R^2 + x^2}}$.",
    "Easy"
)

# Q21
add_q(
    "Gravitational potential energy",
    "If a particle of mass $m$ is released from rest from the axis of the ring in the previous question at $x = \\sqrt{3}R$, its speed when it reaches the center of the ring ($x = 0$) is:",
    [
        "$\\sqrt{\\frac{GM}{R}}$",
        "$\\sqrt{\\frac{2GM}{R}}$",
        "$\\sqrt{\\frac{GM}{2R}}$",
        "$\\frac{GM}{R}$"
    ],
    0,
    "Initial potential: $V_i = -\\frac{GM}{\\sqrt{R^2 + 3R^2}} = -\\frac{GM}{2R}$.\nFinal potential at center: $V_f = -\\frac{GM}{R}$.\n$$\\frac{1}{2}m v^2 = m(V_i - V_f) = m\\left(-\\frac{GM}{2R} + \\frac{GM}{R}\\right) = \\frac{GMm}{2R} \\implies v^2 = \\frac{GM}{R} \\implies v = \\sqrt{\\frac{GM}{R}}$$",
    "Medium"
)

# Q22
add_q(
    "Gravitational potential energy",
    "The gravitational self-energy of a uniform solid sphere of mass $M$ and radius $R$ is:",
    [
        "$-\\frac{3GM^2}{5R}$",
        "$-\\frac{GM^2}{2R}$",
        "$-\\frac{3GM^2}{4R}$",
        "$-\\frac{5GM^2}{3R}$"
    ],
    0,
    "Building up the solid sphere layer by layer gives $U_{\\text{self}} = -\\int_0^R \\frac{G M(r) dM}{r} = -\\frac{3GM^2}{5R}$.",
    "Medium"
)

# Q23
add_q(
    "Gravitational potential energy",
    "The gravitational self-energy of a uniform thin spherical shell of mass $M$ and radius $R$ is:",
    [
        "$-\\frac{GM^2}{2R}$",
        "$-\\frac{3GM^2}{5R}$",
        "$-\\frac{GM^2}{R}$",
        "$-\\frac{2GM^2}{3R}$"
    ],
    0,
    "For a spherical shell, $U_{\\text{self}} = -\\frac{GM^2}{2R}$.",
    "Medium"
)

# Q24
add_q(
    "Gravitational potential energy",
    "An asteroid of mass $m$ at a very large distance moves towards the Earth with negligible initial speed. Taking into account Earth's gravitational pull, the work done by the gravitational force until it hits the Earth is:",
    [
        "$\\frac{GMm}{R}$",
        "$\\frac{GMm}{2R}$",
        "$2\\frac{GMm}{R}$",
        "$mgR/2$"
    ],
    0,
    "Work done by gravity: $W = -\\Delta U = -(U_f - U_i) = -\\left(-\\frac{GMm}{R} - 0\\right) = +\\frac{GMm}{R} = mgR$.",
    "Easy"
)

# Q25
add_q(
    "Gravitational potential energy",
    "The work done in assembling four point masses, each of mass $m$, at the corners of a square of side $a$ from infinite separation is:",
    [
        "$-\\frac{Gm^2}{a}(4 + \\sqrt{2})$",
        "$-\\frac{4Gm^2}{a}$",
        "$-\\frac{Gm^2}{a}(2 + \\sqrt{2})$",
        "$-\\frac{6Gm^2}{a}$"
    ],
    0,
    "There are 4 pairs of adjacent masses separated by distance $a$ (potential energy $-4\\frac{Gm^2}{a}$) and 2 pairs of diagonally opposite masses separated by distance $\\sqrt{2}a$ (potential energy $-2\\frac{Gm^2}{\\sqrt{2}a} = -\\sqrt{2}\\frac{Gm^2}{a}$).\n$$U_{\\text{net}} = -\\frac{Gm^2}{a}(4 + \\sqrt{2})$$\nWork done by external agent is $W = U_{\\text{net}} = -\\frac{Gm^2}{a}(4 + \\sqrt{2})$.",
    "Medium"
)

# ==============================================================================
# SUBTOPIC 4: Escape velocity (45 Questions)
# ==============================================================================

# Q26
add_q(
    "Escape velocity",
    "The escape velocity of a body from the surface of the Earth is approximately:",
    [
        "$11.2\\text{ km/s}$",
        "$7.9\\text{ km/s}$",
        "$9.8\\text{ km/s}$",
        "$22.4\\text{ km/s}$"
    ],
    0,
    "The escape speed from Earth's surface is $v_e = \\sqrt{2gR} = \\sqrt{2 \\times 9.8 \\times 6.4 \\times 10^6} \\approx 1.12 \\times 10^4\\text{ m/s} = 11.2\\text{ km/s}$.",
    "Easy"
)

# Q27
add_q(
    "Escape velocity",
    "The escape velocity of a body from the surface of a planet does NOT depend on:",
    [
        "The mass of the body and the angle of projection",
        "The mass of the planet",
        "The radius of the planet",
        "The gravitational constant $G$"
    ],
    0,
    "From $v_e = \\sqrt{\\frac{2GM}{R}}$, escape velocity depends solely on the mass $M$ and radius $R$ of the planet; it is completely independent of the mass of the projectile and its projection angle (provided it does not intersect the planet).",
    "Easy"
)

# Q28
add_q(
    "Escape velocity",
    "A planet has mass twice that of Earth and radius twice that of Earth. The escape velocity from the surface of this planet is:",
    [
        "Equal to that from Earth ($11.2\\text{ km/s}$)",
        "Twice that from Earth",
        "Half that from Earth",
        "$\\sqrt{2}$ times that from Earth"
    ],
    0,
    "$$v_e = \\sqrt{\\frac{2GM}{R}}$$\nSince $M' = 2M$ and $R' = 2R$, the ratio $\\frac{M'}{R'} = \\frac{2M}{2R} = \\frac{M}{R}$. Thus, the escape velocity is identical to that of Earth.",
    "Easy"
)

# Q29
add_q(
    "Escape velocity",
    "The ratio of the escape velocity from Earth to the orbital velocity of a satellite in a circular orbit close to the Earth's surface is:",
    [
        "$\\sqrt{2} : 1$",
        "$1 : \\sqrt{2}$",
        "$2 : 1$",
        "$1 : 1$"
    ],
    0,
    "For near-Earth orbit: $v_o = \\sqrt{gR}$.\nEscape velocity: $v_e = \\sqrt{2gR}$.\n$$\\frac{v_e}{v_o} = \\frac{\\sqrt{2gR}}{\\sqrt{gR}} = \\sqrt{2} : 1$$",
    "Easy"
)

# Q30
add_q(
    "Escape velocity",
    "The escape velocity from the surface of the Moon is about $2.4\\text{ km/s}$. The main reason why the Moon has no atmosphere is:",
    [
        "The root-mean-square thermal velocity of gas molecules at lunar temperatures exceeds the escape velocity",
        "There are no volcanoes on the Moon",
        "The Moon's magnetic field repels all gases",
        "The solar radiation absorbs all gases"
    ],
    0,
    "Because the Moon has low mass and small escape velocity ($v_e \\approx 2.38\\text{ km/s}$), the root-mean-square thermal speed of common atmospheric gas molecules ($\\text{N}_2, \\text{O}_2, \\text{H}_2\\text{O}$) easily exceeds $v_e/6$ during lunar daytime ($T \\approx 400\\text{ K}$), causing all atmospheric gases to escape into space over geological timescales.",
    "Easy"
)

# Q31
add_q(
    "Escape velocity",
    "A planet has radius $R$ and uniform mass density $\\rho$. The escape velocity from the surface of the planet is proportional to:",
    [
        "$R\\sqrt{\\rho}$",
        "$\\sqrt{R\\rho}$",
        "$R^2 \\rho$",
        "$R/\\sqrt{\\rho}$"
    ],
    0,
    "Mass is $M = \\frac{4}{3}\\pi R^3 \\rho$.\n$$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{\\frac{2G}{R}\\left(\\frac{4}{3}\\pi R^3 \\rho\\right)} = R\\sqrt{\\frac{8\\pi G \\rho}{3}} \\propto R\\sqrt{\\rho}$$",
    "Medium"
)

# Q32
add_q(
    "Escape velocity",
    "Two planets have the same average density, but the radius of planet A is twice that of planet B. The ratio of the escape velocity from planet A to that from planet B is:",
    [
        "$2 : 1$",
        "$1 : 2$",
        "$4 : 1$",
        "$\\sqrt{2} : 1$"
    ],
    0,
    "Since $v_e \\propto R\\sqrt{\\rho}$ and densities are equal, $v_e \\propto R$. Therefore, $\\frac{v_{e,A}}{v_{e,B}} = \\frac{R_A}{R_B} = 2 : 1$.",
    "Easy"
)

# Q33
add_q(
    "Escape velocity",
    "The escape velocity from the Earth's surface is $v_e$. What is the escape velocity from a point at height $h = 3R$ above the Earth's surface?",
    [
        "$v_e / 2$",
        "$v_e / 4$",
        "$v_e / \\sqrt{3}$",
        "$v_e / 3$"
    ],
    0,
    "At distance $r = R + h = R + 3R = 4R$:\n$$v_e' = \\sqrt{\\frac{2GM}{r}} = \\sqrt{\\frac{2GM}{4R}} = \\frac{1}{2}\\sqrt{\\frac{2GM}{R}} = \\frac{v_e}{2}$$",
    "Medium"
)

# Q34
add_q(
    "Escape velocity",
    "What is the escape velocity of a body from the center of the Earth (assuming Earth to be a uniform sphere of radius $R$ and mass $M$)?",
    [
        "$\\sqrt{1.5} v_e = \\sqrt{\\frac{3GM}{R}}$",
        "$v_e$",
        "$\\sqrt{2} v_e$",
        "$2 v_e$"
    ],
    0,
    "At the center of Earth, potential is $V_c = -\\frac{3GM}{2R}$. To escape to infinity ($E_\\infty = 0$):\n$$\\frac{1}{2}m v_{e,c}^2 + m V_c = 0 \\implies \\frac{1}{2}v_{e,c}^2 = \\frac{3GM}{2R} \\implies v_{e,c} = \\sqrt{\\frac{3GM}{R}} = \\sqrt{1.5}\\sqrt{\\frac{2GM}{R}} = \\sqrt{1.5} v_e \\approx 1.225 v_e$$",
    "Hard"
)

# Q35
add_q(
    "Escape velocity",
    "If a body is projected from Earth at an angle of $45^\\circ$ to the vertical, its escape speed is:",
    [
        "$11.2\\text{ km/s}$",
        "$11.2\\sqrt{2}\\text{ km/s}$",
        "$11.2/\\sqrt{2}\\text{ km/s}$",
        "$22.4\\text{ km/s}$"
    ],
    0,
    "Escape speed is a scalar derived from energy conservation. As long as the trajectory does not collide with the planet, the escape speed is strictly independent of the projection angle: $v_e = 11.2\\text{ km/s}$.",
    "Easy"
)

# Q36
add_q(
    "Escape velocity",
    "A body of mass $10\\text{ kg}$ has escape velocity $11.2\\text{ km/s}$ on Earth. What is the escape velocity of a $1000\\text{ kg}$ satellite from the same location?",
    [
        "$11.2\\text{ km/s}$",
        "$112\\text{ km/s}$",
        "$1.12\\text{ km/s}$",
        "$1120\\text{ km/s}$"
    ],
    0,
    "Escape velocity is completely independent of the mass of the escaping object. Both the $10\\text{ kg}$ body and the $1000\\text{ kg}$ satellite require exactly $11.2\\text{ km/s}$.",
    "Easy"
)

# Q37
add_q(
    "Escape velocity",
    "The escape speed from a planet of mass $M$ and radius $R$ is $v_e$. If a planet has mass $4M$ and radius $R/4$, the escape speed is:",
    [
        "$4v_e$",
        "$2v_e$",
        "$8v_e$",
        "$v_e$"
    ],
    0,
    "$$v_e' = \\sqrt{\\frac{2G(4M)}{R/4}} = \\sqrt{16\\frac{2GM}{R}} = 4\\sqrt{\\frac{2GM}{R}} = 4v_e$$",
    "Easy"
)

# Q38
add_q(
    "Escape velocity",
    "The Schwarzschild radius $R_s$ of a black hole of mass $M$ (where escape speed equals the speed of light $c$) is given by:",
    [
        "$R_s = \\frac{2GM}{c^2}$",
        "$R_s = \\frac{GM}{c^2}$",
        "$R_s = \\frac{GM}{2c^2}$",
        "$R_s = \\frac{2GM}{c}$"
    ],
    0,
    "Setting escape speed equal to $c$:\n$$c = \\sqrt{\\frac{2GM}{R_s}} \\implies c^2 = \\frac{2GM}{R_s} \\implies R_s = \\frac{2GM}{c^2}$$",
    "Medium"
)

# Q39
add_q(
    "Escape velocity",
    "A particle is projected vertically upwards with a velocity $v = k v_e$ ($k < 1$). The maximum height $h$ reached by the particle above the Earth's surface is:",
    [
        "$\\frac{k^2 R}{1 - k^2}$",
        "$\\frac{k R}{1 - k}$",
        "$\\frac{k^2 R}{1 + k^2}$",
        "$\\frac{R}{1 - k^2}$"
    ],
    0,
    "Using energy conservation: $\\frac{1}{2}mv^2 = \\frac{mgh}{1 + h/R}$.\nSubstitute $v^2 = k^2 v_e^2 = k^2(2gR)$:\n$$\\frac{1}{2}m(2k^2 gR) = \\frac{mgh}{1 + h/R} \\implies k^2 R = \\frac{h}{1 + h/R}$$\n$$k^2 R\\left(1 + \\frac{h}{R}\\right) = h \\implies k^2 R + k^2 h = h \\implies h(1 - k^2) = k^2 R \\implies h = \\frac{k^2 R}{1 - k^2}$$",
    "Hard"
)

# Q40
add_q(
    "Escape velocity",
    "If $v_e$ is the escape velocity from the surface of the Earth, the velocity required to throw a body to a height equal to the radius of the Earth is:",
    [
        "$\\frac{v_e}{\\sqrt{2}}$",
        "$\\frac{v_e}{2}$",
        "$\\sqrt{2}v_e$",
        "$v_e$"
    ],
    0,
    "For $h = R$, from the formula $h = \\frac{k^2 R}{1 - k^2}$:\n$$R = \\frac{k^2 R}{1 - k^2} \\implies 1 - k^2 = k^2 \\implies 2k^2 = 1 \\implies k = \\frac{1}{\\sqrt{2}}$$\nThus, $v = k v_e = \\frac{v_e}{\\sqrt{2}}$.",
    "Medium"
)

# Q41
add_q(
    "Escape velocity",
    "A body is launched with speed $v = \\sqrt{3}v_e$ from Earth. What will be its speed when it escapes to infinity?",
    [
        "$\\sqrt{2}v_e$",
        "$\\sqrt{3}v_e$",
        "$v_e$",
        "$2v_e$"
    ],
    0,
    "$$v_\\infty = \\sqrt{v^2 - v_e^2} = \\sqrt{3v_e^2 - v_e^2} = \\sqrt{2v_e^2} = \\sqrt{2}v_e$$",
    "Easy"
)

# Q42
add_q(
    "Escape velocity",
    "The escape velocity on a planet whose radius and mass are both half of those of Earth is:",
    [
        "$11.2\\text{ km/s}$",
        "$5.6\\text{ km/s}$",
        "$22.4\\text{ km/s}$",
        "$15.8\\text{ km/s}$"
    ],
    0,
    "$$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{\\frac{2G(M_E/2)}{R_E/2}} = \\sqrt{\\frac{2GM_E}{R_E}} = 11.2\\text{ km/s}$$",
    "Easy"
)

# Q43
add_q(
    "Escape velocity",
    "If the acceleration due to gravity on the surface of a planet is $g$ and its radius is $R$, the escape velocity is given by:",
    [
        "$\\sqrt{2gR}$",
        "$\\sqrt{gR}$",
        "$2\\sqrt{gR}$",
        "$\\sqrt{gR/2}$"
    ],
    0,
    "Since $g = \\frac{GM}{R^2} \\implies GM = gR^2$, substituting into $v_e = \\sqrt{\\frac{2GM}{R}}$ gives $v_e = \\sqrt{\\frac{2gR^2}{R}} = \\sqrt{2gR}$.",
    "Easy"
)

# Q44
add_q(
    "Escape velocity",
    "The escape velocity from the Earth is $v_e$. For a planet having twice the density and twice the radius of Earth, the escape velocity will be:",
    [
        "$2\\sqrt{2}v_e$",
        "$2v_e$",
        "$4v_e$",
        "$\\sqrt{2}v_e$"
    ],
    0,
    "Using $v_e \\propto R\\sqrt{\\rho}$:\n$$\\frac{v_e'}{v_e} = \\left(\\frac{R'}{R}\\right)\\sqrt{\\frac{\\rho'}{\\rho}} = 2\\sqrt{2} \\implies v_e' = 2\\sqrt{2}v_e$$",
    "Medium"
)

# Q45
add_q(
    "Escape velocity",
    "A space probe launched from Earth requires a minimum velocity to escape the gravitational attraction of the Sun. This speed at Earth's orbital distance $R_{\\text{orbit}}$ is:",
    [
        "$\\sqrt{\\frac{2GM_{\\text{Sun}}}{R_{\\text{orbit}}}} = \\sqrt{2} v_{\\text{orbital}}$",
        "$\\sqrt{\\frac{GM_{\\text{Sun}}}{R_{\\text{orbit}}}}$",
        "$2\\sqrt{\\frac{GM_{\\text{Sun}}}{R_{\\text{orbit}}}}$",
        "$\\frac{1}{\\sqrt{2}}v_{\\text{orbital}}$"
    ],
    0,
    "At distance $R_{\\text{orbit}}$ from the Sun, the escape speed relative to the Sun is $v_{e,\\text{Sun}} = \\sqrt{\\frac{2GM_{\\text{Sun}}}{R_{\\text{orbit}}}} = \\sqrt{2} v_{\\text{orbital}} \\approx \\sqrt{2} \\times 29.8\\text{ km/s} \\approx 42.1\\text{ km/s}$.",
    "Medium"
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

balance_subtopic("Gravitational potential energy")
balance_subtopic("Escape velocity")

# Save to batch 2
with open("scripts/thermo_grav/grav_batch2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Gravitation Batch 2 generated successfully! Total questions: {len(questions)}")
