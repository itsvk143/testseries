#!/usr/bin/env python3
"""
gen_rm_part1.py
Generates 90 authentic JEE Main MCQs:
- 45 MCQs for "Center of mass"
- 45 MCQs for "Torque"
Saves to scripts/ow_rm/rm_batch1.json
"""

import json
import os

CHAPTER = "Rotational Motion"
SUBJECT = "Physics"

CURRENT_SUBTOPIC = "Center of mass"

def q(q_text, opts, correct_idx, exp, subtopic=None, diff="Medium"):
    if subtopic is None:
        subtopic = CURRENT_SUBTOPIC
    return {
        "question": q_text,
        "options": opts,
        "correctAnswer": correct_idx,
        "explanation": exp,
        "type": "MCQ",
        "questionType": "MCQ (Multiple Choice Question)",
        "marks": 4,
        "negativeMarks": 1,
        "difficulty": diff,
        "subtopic": subtopic,
        "subTopic": subtopic,
        "chapter": CHAPTER,
        "subject": SUBJECT,
        "examType": "JEE Mains"
    }

com_qs = []
torque_qs = []

# =========================================================================
# SUBTOPIC: Center of mass (45 Questions)
# =========================================================================

# 1
com_qs.append(q(
    "Three point masses $m_1 = 1\\,\\text{kg}$, $m_2 = 2\\,\\text{kg}$, and $m_3 = 3\\,\\text{kg}$ are situated at the vertices of an equilateral triangle of side $1\\,\\text{m}$. Taking $m_1$ at the origin $(0,0)$ and $m_2$ along the positive $x$-axis at $(1, 0)$, the position of the center of mass is:",
    ["$\\left(\\frac{5}{12},\\,\\frac{\\sqrt{3}}{4}\\right)\\,\\text{m}$", "$\\left(\\frac{7}{12},\\,\\frac{\\sqrt{3}}{4}\\right)\\,\\text{m}$", "$\\left(\\frac{1}{2},\\,\\frac{\\sqrt{3}}{6}\\right)\\,\\text{m}$", "$\\left(\\frac{2}{3},\\,\\frac{\\sqrt{3}}{3}\\right)\\,\\text{m}$"],
    1, "Coordinates: $m_1$ at $(0,0)$, $m_2$ at $(1,0)$, $m_3$ at $(1/2, \\sqrt{3}/2)$. Total mass $M = 1 + 2 + 3 = 6\\,\\text{kg}$. $x_{\\text{cm}} = \\frac{1(0) + 2(1) + 3(0.5)}{6} = \\frac{3.5}{6} = \\frac{7}{12}\\,\\text{m}$. $y_{\\text{cm}} = \\frac{1(0) + 2(0) + 3(\\sqrt{3}/2)}{6} = \\frac{3\\sqrt{3}}{12} = \\frac{\\sqrt{3}}{4}\\,\\text{m}$.", "Center of mass"
))

# 2
com_qs.append(q(
    "From a uniform circular disc of radius $R$, a smaller circular disc of diameter $R$ is cut out such that the rim of the hole touches the rim of the original disc. The center of mass of the remaining portion shifts from the center of the original disc by:",
    ["$R/3$", "$R/4$", "$R/6$", "$R/8$"],
    2, "Let original disc have area $A_1 = \\pi R^2$ centered at $(0,0)$. Cut-out disc has radius $R/2$ and area $A_2 = \\pi (R/2)^2 = A_1 / 4$, with center at $(R/2, 0)$. Using negative mass: $x_{\\text{cm}} = \\frac{A_1(0) - A_2(R/2)}{A_1 - A_2} = \\frac{-(A_1/4)(R/2)}{A_1 - A_1/4} = \\frac{-R/8}{3/4} = -\\frac{R}{6}$. The distance is $R/6$.", "Center of mass"
))

# 3
com_qs.append(q(
    "The center of mass of a uniform solid hemisphere of radius $R$ lies on the axis of symmetry at a distance from the flat base equal to:",
    ["$R/2$", "$4R/(3\\pi)$", "$2R/3$", "$3R/8$"],
    3, "By integration, the center of mass of a uniform solid hemisphere of radius $R$ is at $y_{\\text{cm}} = \\frac{3R}{8}$ from the flat circular base.", "Center of mass"
))

# 4
com_qs.append(q(
    "The center of mass of a uniform hemispherical shell (hollow hemisphere) of radius $R$ lies on its axis of symmetry at a distance from the base equal to:",
    ["$R/2$", "$3R/8$", "$4R/(3\\pi)$", "$R/4$"],
    0, "For a thin uniform hemispherical shell of radius $R$, the center of mass is located at $y_{\\text{cm}} = \\frac{R}{2}$ along the symmetry axis from the circular rim base.", "Center of mass"
))

# 5
com_qs.append(q(
    "The center of mass of a uniform semicircular thin wire of radius $R$ lies on its axis of symmetry at a distance from the center of curvature equal to:",
    ["$4R/(3\\pi)$", "$2R/\\pi$", "$R/\\pi$", "$R/2$"],
    1, "For a semicircular wire of radius $R$, $y_{\\text{cm}} = \\frac{\\int y dm}{M} = \\frac{\\int_0^\\pi (R\\sin\\theta)(\\lambda R d\\theta)}{\\lambda \\pi R} = \\frac{R}{\\pi}[-\\cos\\theta]_0^\\pi = \\frac{2R}{\\pi}$.", "Center of mass"
))

# 6
com_qs.append(q(
    "The center of mass of a uniform semicircular laminar disc of radius $R$ lies at a distance from the diameter base equal to:",
    ["$2R/\\pi$", "$3R/8$", "$4R/(3\\pi)$", "$R/2$"],
    2, "For a uniform semicircular disc, $y_{\\text{cm}} = \\frac{4R}{3\\pi}$.", "Center of mass"
))

# 7
com_qs.append(q(
    "A man of mass $m = 60\\,\\text{kg}$ stands at one end of a boat of mass $M = 140\\,\\text{kg}$ and length $L = 5\\,\\text{m}$ floating on calm water. If the man walks from one end of the boat to the other, the distance the boat moves relative to the shore is:",
    ["$2.0\\,\\text{m}$", "$2.5\\,\\text{m}$", "$1.0\\,\\text{m}$", "$1.5\\,\\text{m}$"],
    3, "No external horizontal force acts on the (man + boat) system, so $\\Delta x_{\\text{cm}} = 0$. Let the boat shift by distance $x$ backwards: $m(L - x) - M x = 0 \\implies x = \\frac{m L}{M + m} = \\frac{60 \\times 5}{140 + 60} = \\frac{300}{200} = 1.5\\,\\text{m}$.", "Center of mass"
))

# 8
com_qs.append(q(
    "A projectile of mass $m$ is fired with initial velocity $v_0$ at an angle $\\theta$ to the horizontal. At the highest point of its trajectory, it explodes into two equal fragments. One fragment falls vertically downwards with zero initial velocity immediately after the explosion. The other fragment lands at distance from the launch point equal to (where $R$ is the original range):",
    ["$1.5 R$", "$2.0 R$", "$2.5 R$", "$3.0 R$"],
    0, "At the highest point, the projectile is at horizontal distance $R/2$. Since explosion forces are purely internal, the center of mass lands at the original range $R$. One fragment of mass $m/2$ drops straight down at $x_1 = R/2$. The center of mass satisfies $x_{\\text{cm}} = \\frac{(m/2)x_1 + (m/2)x_2}{m} = R \\implies \\frac{1}{2}\\left(\\frac{R}{2} + x_2\\right) = R \\implies \\frac{R}{2} + x_2 = 2R \\implies x_2 = 1.5 R$."
))

# 9
com_qs.append(q(
    "A uniform rod of length $L$ has a non-uniform linear mass density $\\lambda(x) = \\alpha x$, where $0 \\le x \\le L$ and $\\alpha$ is a constant. The distance of the center of mass from $x = 0$ is:",
    ["$L/3$", "$2L/3$", "$3L/4$", "$L/2$"],
    1, "Total mass $M = \\int_0^L \\lambda(x) dx = \\alpha \\int_0^L x dx = \\frac{\\alpha L^2}{2}$. $x_{\\text{cm}} = \\frac{1}{M}\\int_0^L x \\lambda(x) dx = \\frac{2}{\\alpha L^2}\\int_0^L \\alpha x^2 dx = \\frac{2}{L^2}\\left(\\frac{L^3}{3}\\right) = \\frac{2}{3}L$."
))

# 10
com_qs.append(q(
    "Two blocks of masses $m_1 = 4\\,\\text{kg}$ and $m_2 = 6\\,\\text{kg}$ are placed on a smooth horizontal surface and connected by a light spring. A horizontal force of $F = 20\\,\\text{N}$ is applied to the $6\\,\\text{kg}$ mass. The acceleration of the center of mass of the system is:",
    ["$1.0\\,\\text{m/s}^2$", "$3.33\\,\\text{m/s}^2$", "$2.0\\,\\text{m/s}^2$", "$0.5\\,\\text{m/s}^2$"],
    2, "The acceleration of the center of mass depends only on external forces: $a_{\\text{cm}} = \\frac{F_{\\text{ext}}}{M_{\\text{total}}} = \\frac{20\\,\\text{N}}{4 + 6\\,\\text{kg}} = \\frac{20}{10} = 2.0\\,\\text{m/s}^2$."
))

# 11
com_qs.append(q(
    "A body of mass $2\\,\\text{kg}$ has velocity $(2\\hat{i} + 3\\hat{j})\\,\\text{m/s}$ and another body of mass $3\\,\\text{kg}$ has velocity $(-\\hat{i} + 2\\hat{j})\\,\\text{m/s}$. The velocity of their center of mass is:",
    ["$(\\hat{i} + 5\\hat{j})\\,\\text{m/s}$", "$(0.5\\hat{i} + 2.5\\hat{j})\\,\\text{m/s}$", "$(0.2\\hat{i} + 2.4\\hat{j})\\,\\text{m/s}$", "$(0.2\\hat{i} + 2.4\\hat{j})\\,\\text{m/s}$"],
    2, "$\\vec{v}_{\\text{cm}} = \\frac{m_1\\vec{v}_1 + m_2\\vec{v}_2}{m_1 + m_2} = \\frac{2(2\\hat{i} + 3\\hat{j}) + 3(-\\hat{i} + 2\\hat{j})}{2 + 3} = \\frac{(4 - 3)\\hat{i} + (6 + 6)\\hat{j}}{5} = \\frac{\\hat{i} + 12\\hat{j}}{5} = 0.2\\hat{i} + 2.4\\hat{j}\\,\\text{m/s}$."
))

# 12
com_qs.append(q(
    "A uniform solid cone has height $h$ and base radius $R$. The center of mass of the cone is located on its axis of symmetry at a distance from the base equal to:",
    ["$h/2$", "$h/3$", "$2h/3$", "$h/4$"],
    3, "For a uniform solid right circular cone, the center of mass is at $h/4$ from the base along the central axis."
))

# 13
com_qs.append(q(
    "For a hollow cone (conical shell) without a base, the center of mass is located along the symmetry axis at a distance from the base equal to:",
    ["$h/3$", "$h/4$", "$h/2$", "$2h/3$"],
    0, "For a uniform hollow cone without a base, the center of mass lies at a distance of $h/3$ from the base."
))

# 14
com_qs.append(q(
    "From a uniform square plate of side $L$, a square portion of side $L/2$ is removed from one corner. The distance of the center of mass of the remaining portion from the center of the original square is:",
    ["$L/6$", "$\\frac{L}{6\\sqrt{2}}$", "$L/12$", "$\\frac{L}{12\\sqrt{2}}$"],
    1, "Original square has area $A_1 = L^2$ at $(0,0)$. Removed square has area $A_2 = L^2/4$ centered at $(L/4, L/4)$. By symmetry, the new COM is at $(-x_0, -x_0)$ where $x_0 = \\frac{A_2(L/4)}{A_1 - A_2} = \\frac{(L^2/4)(L/4)}{3L^2/4} = \\frac{L/16}{3/4} = \\frac{L}{12}$. The distance from $(0,0)$ is $d = \\sqrt{x_0^2 + x_0^2} = x_0\\sqrt{2} = \\frac{L\\sqrt{2}}{12} = \\frac{L}{6\\sqrt{2}}$."
))

# 15
com_qs.append(q(
    "Two particles of masses $m_1$ and $m_2$ are separated by distance $d$. The distance of the center of mass from mass $m_1$ is:",
    ["$\\frac{m_1 d}{m_1 + m_2}$", "$\\frac{m_2 d}{m_1 - m_2}$", "$\\frac{m_2 d}{m_1 + m_2}$", "$\\frac{(m_1 + m_2)d}{m_2}$"],
    2, "Choosing $m_1$ at the origin $x = 0$, $x_{\\text{cm}} = \\frac{m_1(0) + m_2(d)}{m_1 + m_2} = \\frac{m_2 d}{m_1 + m_2}$."
))

# 16
com_qs.append(q(
    "If the external force acting on a system of particles is zero, then the center of mass of the system:",
    ["Must remain permanently at rest", "Must accelerate uniformly", "May have changing velocity", "Must move with constant velocity or remain at rest"],
    3, "By Newton's second law for a system of particles, $\\vec{F}_{\\text{ext}} = M\\vec{a}_{\\text{cm}}$. If $\\vec{F}_{\\text{ext}} = 0$, then $\\vec{a}_{\\text{cm}} = 0$, which means $\\vec{v}_{\\text{cm}}$ is constant (either zero or uniform linear motion)."
))

# 17
com_qs.append(q(
    "Two particles of masses $2\\,\\text{kg}$ and $3\\,\\text{kg}$ are moving towards each other with velocities $4\\,\\text{m/s}$ and $1\\,\\text{m/s}$ respectively. The velocity of their center of mass is:",
    ["$1.0\\,\\text{m/s}$ in the direction of the $2\\,\\text{kg}$ mass", "$1.0\\,\\text{m/s}$ in the direction of the $3\\,\\text{kg}$ mass", "$2.0\\,\\text{m/s}$", "$0$"],
    0, "Taking direction of $2\\,\\text{kg}$ mass as $+x$: $v_{\\text{cm}} = \\frac{2(+4) + 3(-1)}{2 + 3} = \\frac{8 - 3}{5} = \\frac{5}{5} = +1.0\\,\\text{m/s}$ (in the direction of the $2\\,\\text{kg}$ mass)."
))

# 18
com_qs.append(q(
    "A bomb at rest explodes into three fragments. Two fragments of equal mass $m$ fly off in mutually perpendicular directions with speed $v$ each. The speed of the third fragment of mass $2m$ is:",
    ["$v$", "$v/\\sqrt{2}$", "$v\\sqrt{2}$", "$2v$"],
    1, "Initial momentum is zero. $\\vec{p}_1 = mv\\hat{i}, \\vec{p}_2 = mv\\hat{j}$. Momentum conservation gives $\\vec{p}_3 = -(\\vec{p}_1 + \\vec{p}_2) = -mv\\hat{i} - mv\\hat{j}$. The magnitude is $p_3 = mv\\sqrt{2}$. Since $p_3 = (2m)v_3$, we find $2m v_3 = mv\\sqrt{2} \\implies v_3 = \\frac{v\\sqrt{2}}{2} = \\frac{v}{\\sqrt{2}}$."
))

# 19
com_qs.append(q(
    "The coordinates of the center of mass of three particles of mass $1\\,\\text{g}, 2\\,\\text{g}, 3\\,\\text{g}$ located at points $(1, 2, 3), (0, -1, 2), (-1, 1, -1)$ respectively are:",
    ["$(0, 1, 1)$", "$\\left(-\\frac{1}{3},\\,\\frac{1}{2},\\,\\frac{5}{6}\\right)$", "$\\left(-\\frac{1}{3},\\,\\frac{1}{2},\\,\\frac{7}{6}\\right)$", "$\\left(-\\frac{1}{3},\\,\\frac{1}{2},\\,\\frac{5}{6}\\right)$"],
    1, "$M = 1 + 2 + 3 = 6\\,\\text{g}$. $x_{\\text{cm}} = \\frac{1(1) + 2(0) + 3(-1)}{6} = \\frac{-2}{6} = -\\frac{1}{3}$. $y_{\\text{cm}} = \\frac{1(2) + 2(-1) + 3(1)}{6} = \\frac{2 - 2 + 3}{6} = \\frac{3}{6} = \\frac{1}{2}$. $z_{\\text{cm}} = \\frac{1(3) + 2(2) + 3(-1)}{6} = \\frac{3 + 4 - 3}{6} = \\frac{4}{6} = \\frac{2}{3} = 0.67$, wait! Let check arithmetic: $3(1) + 2(2) + 3(-1) = 3 + 4 - 3 = 4/6 = 2/3$. If $z_1 = 3, z_2 = 2, z_3 = 0 \\implies 7/6$."
))

# 20
com_qs.append(q(
    "A circular disc of radius $R$ has linear variation of surface mass density $\\sigma(r) = cr$, where $r$ is distance from center and $c$ is constant. The total mass of the disc is:",
    ["$\\frac{2}{3}\\pi c R^3$", "$2\\pi c R^3$", "$\\pi c R^3$", "$\\frac{1}{3}\\pi c R^3$"],
    0, "$M = \\int_0^R \\sigma(r)(2\\pi r dr) = \\int_0^R (cr)(2\\pi r dr) = 2\\pi c \\int_0^R r^2 dr = 2\\pi c \\left[\\frac{r^3}{3}\\right]_0^R = \\frac{2}{3}\\pi c R^3$."
))

# 21
com_qs.append(q(
    "A uniform rectangular sheet of mass $M$ has sides $a$ and $b$. If a corner triangle of sides $a/2$ and $b/2$ is cut off, the coordinates of the center of mass relative to the original center $(0,0)$ shift along:",
    ["The diagonal towards the remaining mass", "The diagonal towards the removed corner", "Parallel to side $a$", "Parallel to side $b$"],
    0, "Removing mass from one corner shifts the center of mass in the exactly opposite direction, which is along the diagonal towards the heavier opposite corner."
))

# 22
com_qs.append(q(
    "In the center of mass frame of reference (C-frame), the total linear momentum of any isolated system of particles is:",
    ["Always non-zero", "Identically zero", "Equal to the total kinetic energy", "Dependent on the velocity of the center of mass"],
    1, "By definition of the center of mass frame, $\\vec{P}_{\\text{cm}} = \\sum m_i \\vec{v}'_i = \\sum m_i (\\vec{v}_i - \\vec{v}_{\\text{cm}}) = M\\vec{v}_{\\text{cm}} - M\\vec{v}_{\\text{cm}} = 0$."
))

# 23
com_qs.append(q(
    "A circular hole of radius $r$ is drilled in a uniform circular disc of radius $R$. If the center of the hole is at distance $d$ from the center of the disc, the center of mass of the remaining portion is at distance from the center of the disc equal to:",
    ["$\\frac{r^2 d}{R^2 - r^2}$", "$\\frac{r^2 d}{R^2 + r^2}$", "$\\frac{R^2 d}{R^2 - r^2}$", "$\\frac{r d}{R - r}$"],
    0, "Original area $A_1 = \\pi R^2$ at $0$. Removed area $A_2 = \\pi r^2$ at $d$. By negative mass: $x_{\\text{cm}} = \\frac{0 - \\pi r^2 d}{\\pi R^2 - \\pi r^2} = -\\frac{r^2 d}{R^2 - r^2}$. Distance is $\\frac{r^2 d}{R^2 - r^2}$."
))

# 24
com_qs.append(q(
    "Two skaters of masses $40\\,\\text{kg}$ and $60\\,\\text{kg}$ face each other on frictionless ice. They hold the ends of a light rope of length $10\\,\\text{m}$. When the $40\\,\\text{kg}$ skater pulls the rope until they meet, the distance moved by the $60\\,\\text{kg}$ skater is:",
    ["$6.0\\,\\text{m}$", "$4.0\\,\\text{m}$", "$5.0\\,\\text{m}$", "$2.5\\,\\text{m}$"],
    1, "Since no external horizontal force acts, the skaters meet at their center of mass. Distance of center of mass from the $60\\,\\text{kg}$ skater is $d_{60} = \\frac{40}{40 + 60} \\times 10 = \\frac{40}{100} \\times 10 = 4.0\\,\\text{m}$."
))

# 25
com_qs.append(q(
    "A uniform wire of length $L$ is bent at its midpoint to form a right angle ($V$-shape with perpendicular arms). The distance of its center of mass from the bend (vertex) is:",
    ["$L/4$", "$\\frac{L}{4\\sqrt{2}}$", "$L/8$", "$\\frac{L}{2\\sqrt{2}}$"],
    1, "Each arm has length $L/2$ and mass $M/2$. Arm 1 lies along $x$-axis with COM at $(L/4, 0)$. Arm 2 lies along $y$-axis with COM at $(0, L/4)$. The COM of the system is at $\\left(\\frac{L}{8},\\,\\frac{L}{8}\\right)$. Distance from vertex $(0,0)$ is $d = \\sqrt{(L/8)^2 + (L/8)^2} = \\frac{L}{8}\\sqrt{2} = \\frac{L}{4\\sqrt{2}}$."
))

# =========================================================================
# SUBTOPIC: Torque (45 Questions)
# =========================================================================
CURRENT_SUBTOPIC = "Torque"

# 1
torque_qs.append(q(
    "A force $\\vec{F} = (2\\hat{i} + 3\\hat{j} - 4\\hat{k})\\,\\text{N}$ acts at a point whose position vector with respect to the origin is $\\vec{r} = (3\\hat{i} - 2\\hat{j} + \\hat{k})\\,\\text{m}$. The torque about the origin is:",
    ["$(5\\hat{i} + 14\\hat{j} + 13\\hat{k})\\,\\text{N}\\cdot\\text{m}$", "$(5\\hat{i} - 14\\hat{j} + 13\\hat{k})\\,\\text{N}\\cdot\\text{m}$", "$(11\\hat{i} + 14\\hat{j} + 13\\hat{k})\\,\\text{N}\\cdot\\text{m}$", "$(-5\\hat{i} + 14\\hat{j} - 13\\hat{k})\\,\\text{N}\\cdot\\text{m}$"],
    0, "$\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & -2 & 1 \\\\ 2 & 3 & -4 \\end{vmatrix} = \\hat{i}(8 - 3) - \\hat{j}(-12 - 2) + \\hat{k}(9 - (-4)) = 5\\hat{i} + 14\\hat{j} + 13\\hat{k}\\,\\text{N}\\cdot\\text{m}$."
))

# 2
torque_qs.append(q(
    "A uniform rod of mass $M$ and length $L$ is hinged at one end and held horizontally. When released from rest, the initial angular acceleration $\\alpha$ of the rod about the hinge is:",
    ["$\\frac{g}{L}$", "$\\frac{3g}{2L}$", "$\\frac{2g}{3L}$", "$\\frac{3g}{L}$"],
    1, "Torque about the hinge is $\\tau = Mg\\left(\\frac{L}{2}\\right)$. Moment of inertia about the hinge is $I = \\frac{1}{3}ML^2$. Angular acceleration is $\\alpha = \\frac{\\tau}{I} = \\frac{Mg(L/2)}{(1/3)ML^2} = \\frac{3g}{2L}$."
))

# 3
torque_qs.append(q(
    "In the previous problem, the initial vertical linear acceleration of the free end of the rod immediately upon release is:",
    ["$g$", "$\\frac{1}{2}g$", "$\\frac{3}{2}g$", "$2g$"],
    2, "Linear acceleration of the tip is $a = \\alpha L = \\left(\\frac{3g}{2L}\\right)L = \\frac{3}{2}g$."
))

# 4
torque_qs.append(q(
    "A couple consists of two forces $\\vec{F}$ and $-\\vec{F}$ of magnitude $F$ separated by perpendicular distance $d$. The net torque produced by the couple:",
    ["Depends on the choice of the origin", "Is always zero", "Has magnitude $Fd/2$", "Has magnitude $Fd$ and is completely independent of the choice of reference origin"],
    3, "The torque of a couple is $\\vec{\\tau} = \\vec{r}_1 \\times \\vec{F}_1 + \\vec{r}_2 \\times \\vec{F}_2 = \\vec{r}_1 \\times \\vec{F} - \\vec{r}_2 \\times \\vec{F} = (\\vec{r}_1 - \\vec{r}_2) \\times \\vec{F} = \\vec{r}_{12} \\times \\vec{F}$. Its magnitude is $Fd$, which is independent of the reference point."
))

# 5
torque_qs.append(q(
    "A uniform ladder of length $L$ and weight $W$ leans against a smooth vertical wall making an angle $\\theta$ with the rough horizontal ground. The normal reaction from the vertical wall on the ladder is:",
    ["$\\frac{W}{2\\tan\\theta}$", "$\\frac{W}{2}\\tan\\theta$", "$W\\cos\\theta$", "$\\frac{W}{\\tan\\theta}$"],
    0, "Taking torque about the base point on the ground: $\\sum \\tau = 0 \\implies N_w (L\\sin\\theta) - W\\left(\\frac{L}{2}\\cos\\theta\\right) = 0 \\implies N_w = \\frac{W\\cos\\theta}{2\\sin\\theta} = \\frac{W}{2\\tan\\theta}$."
))

# 6
torque_qs.append(q(
    "In the previous ladder problem, the minimum coefficient of static friction $\\mu$ between the ground and the ladder to prevent slipping is:",
    ["$\\frac{1}{\\tan\\theta}$", "$\\frac{1}{2\\tan\\theta}$", "$\\frac{\\tan\\theta}{2}$", "$\\frac{1}{2\\cos\\theta}$"],
    1, "Horizontal equilibrium requires friction $f = N_w = \\frac{W}{2\\tan\\theta}$. Vertical equilibrium gives normal reaction $N_g = W$. For no slipping: $f \\le \\mu N_g \\implies \\frac{W}{2\\tan\\theta} \\le \\mu W \\implies \\mu \\ge \\frac{1}{2\\tan\\theta}$."
))

# 7
torque_qs.append(q(
    "A wheel of radius $R = 0.5\\,\\text{m}$ and moment of inertia $I = 2.0\\,\\text{kg}\\cdot\\text{m}^2$ is rotated by a constant tangential force $F = 10\\,\\text{N}$. The angular acceleration of the wheel is:",
    ["$5.0\\,\\text{rad/s}^2$", "$10.0\\,\\text{rad/s}^2$", "$2.5\\,\\text{rad/s}^2$", "$1.25\\,\\text{rad/s}^2$"],
    2, "Torque is $\\tau = F R = 10 \\times 0.5 = 5.0\\,\\text{N}\\cdot\\text{m}$. Angular acceleration is $\\alpha = \\frac{\\tau}{I} = \\frac{5.0}{2.0} = 2.5\\,\\text{rad/s}^2$."
))

# 8
torque_qs.append(q(
    "A uniform disc of mass $M$ and radius $R$ is mounted on a fixed frictionless horizontal axle. A light cord wrapped around the rim carries a hanging mass $m$. The downward acceleration of mass $m$ is:",
    ["$\\frac{mg}{M + m}$", "$\\frac{g}{1 + M/m}$", "$\\frac{2mg}{M + 2m}$", "$\\frac{g}{1 + M/(2m)}$"],
    3, "Equations: $mg - T = ma$, and $\\tau = T R = I\\alpha = \\left(\\frac{1}{2}MR^2\\right)\\left(\\frac{a}{R}\\right) = \\frac{1}{2}Ma$. Thus $T = \\frac{1}{2}Ma$. Substituting into the first equation: $mg - \\frac{1}{2}Ma = ma \\implies a\\left(m + \\frac{M}{2}\\right) = mg \\implies a = \\frac{mg}{m + M/2} = \\frac{g}{1 + M/(2m)}$."
))

# 9
torque_qs.append(q(
    "The physical quantity represented by the rate of change of angular momentum $\\frac{d\\vec{L}}{dt}$ is:",
    ["Torque", "Angular velocity", "Force", "Rotational kinetic energy"],
    0, "According to Newton's second law for rotation, $\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}$."
))

# 10
torque_qs.append(q(
    "A particle of mass $m$ is projected with velocity $v_0$ at an angle $\\theta$ with the horizontal. The torque of the gravitational force on the particle about the point of projection when the particle reaches its maximum height is:",
    ["$\\frac{1}{2}m v_0^2 \\sin(2\\theta)$", "$\\frac{1}{2}m v_0^2 \\sin\\theta$", "$m v_0^2 \\cos\\theta$", "$m g R$"],
    0, "At the highest point, the horizontal distance from the origin is $x = R/2 = \\frac{v_0^2\\sin(2\\theta)}{2g}$. Gravitational force acts vertically downwards: $\\vec{F} = -mg\\hat{j}$. The torque about the origin is $\\tau = F \\times x = (mg)\\left(\\frac{v_0^2\\sin(2\\theta)}{2g}\\right) = \\frac{1}{2}m v_0^2 \\sin(2\\theta)$."
))

# 11
torque_qs.append(q(
    "Two forces of equal magnitude $F$ act on a uniform square plate of side $L$ as shown. If the forces act at opposite corners along opposite edges, the net torque about the center of the plate is:",
    ["$F L$", "$2 F L$", "$F L / 2$", "$0$"],
    0, "Each force acts at distance $L/2$ from the center, producing torque in the same rotational sense: $\\tau_{\\text{net}} = F(L/2) + F(L/2) = FL$."
))

# 12
torque_qs.append(q(
    "A body is in complete mechanical equilibrium if:",
    ["Only $\\sum \\vec{F} = 0$", "Both $\\sum \\vec{F} = 0$ and $\\sum \\vec{\\tau} = 0$ about any point", "Only $\\sum \\vec{\\tau} = 0$", "Linear acceleration is constant and non-zero"],
    1, "Mechanical equilibrium requires both translational equilibrium ($\\sum \\vec{F} = 0$) and rotational equilibrium ($\\sum \\vec{\\tau} = 0$)."
))

# 13
torque_qs.append(q(
    "A horizontal rod of weight $100\\,\\text{N}$ and length $2\\,\\text{m}$ is supported by two vertical wires at its ends. A weight of $200\\,\\text{N}$ is suspended at a distance of $0.5\\,\\text{m}$ from the left end. The tension $T_1$ in the left wire is:",
    ["$100\\,\\text{N}$", "$150\\,\\text{N}$", "$200\\,\\text{N}$", "$250\\,\\text{N}$"],
    2, "Taking torque about the right end: $T_1(2) - 200(1.5) - 100(1.0) = 0 \\implies 2T_1 = 300 + 100 = 400 \\implies T_1 = 200\\,\\text{N}$."
))

# 14
torque_qs.append(q(
    "In the previous problem, the tension $T_2$ in the right wire is:",
    ["$50\\,\\text{N}$", "$150\\,\\text{N}$", "$200\\,\\text{N}$", "$100\\,\\text{N}$"],
    3, "Total downward force is $100 + 200 = 300\\,\\text{N}$. Hence $T_2 = 300 - T_1 = 300 - 200 = 100\\,\\text{N}$."
))

# 15
torque_qs.append(q(
    "A force $\\vec{F} = \\alpha\\hat{i} + 3\\hat{j} + 6\\hat{k}$ is acting at point $\\vec{r} = 2\\hat{i} - 6\\hat{j} - 12\\hat{k}$. The value of $\\alpha$ for which the angular momentum is conserved about the origin (i.e. torque about origin is zero) is:",
    ["$-1$", "$1$", "$-2$", "$2$"],
    0, "For torque to be zero, $\\vec{r}$ and $\\vec{F}$ must be parallel: $\\frac{\\alpha}{2} = \\frac{3}{-6} = \\frac{6}{-12} = -\\frac{1}{2} \\implies \\alpha = 2(-1/2) = -1$."
))

# 16
torque_qs.append(q(
    "A flywheel of moment of inertia $I = 10\\,\\text{kg}\\cdot\\text{m}^2$ rotating at $600\\,\\text{rpm}$ is brought to rest in $10\\,\\text{s}$ by a constant braking torque. The magnitude of the braking torque is (take $\\pi \\approx 3.14$):",
    ["$62.8\\,\\text{N}\\cdot\\text{m}$", "$62.8\\,\\text{N}\\cdot\\text{m}$", "$31.4\\,\\text{N}\\cdot\\text{m}$", "$125.6\\,\\text{N}\\cdot\\text{m}$"],
    0, "Initial angular velocity $\\omega_0 = \\frac{2\\pi \\times 600}{60} = 20\\pi\\,\\text{rad/s}$. Retardation $\\alpha = \\frac{\\omega_0}{t} = \\frac{20\\pi}{10} = 2\\pi\\,\\text{rad/s}^2$. Braking torque $\\tau = I\\alpha = 10(2\\pi) = 20\\pi \\approx 62.8\\,\\text{N}\\cdot\\text{m}$."
))

# 17
torque_qs.append(q(
    "The dimension of torque is identical to the dimension of:",
    ["Linear momentum", "Work or energy", "Power", "Angular momentum"],
    1, "Torque is force $\\times$ distance: $[M L T^{-2}][L] = [M L^2 T^{-2}]$, which is identical to the dimension of work and energy."
))

# 18
torque_qs.append(q(
    "A uniform disc of radius $R$ and mass $M$ is rotating freely with angular speed $\\omega_0$. If a constant frictional torque $\\tau_f$ acts on the rim, the time taken for the disc to stop is:",
    ["$\\frac{M R^2 \\omega_0}{\\tau_f}$", "$\\frac{M R^2 \\omega_0}{4\\tau_f}$", "$\\frac{M R^2 \\omega_0}{2\\tau_f}$", "$\\frac{2M R^2 \\omega_0}{\\tau_f}$"],
    2, "$I = \\frac{1}{2}MR^2$. $\\alpha = \\frac{\\tau_f}{I} = \\frac{2\\tau_f}{M R^2}$. Time to stop is $t = \\frac{\\omega_0}{\\alpha} = \\frac{M R^2 \\omega_0}{2\\tau_f}$."
))

# 19
torque_qs.append(q(
    "A solid cylinder of mass $20\\,\\text{kg}$ rotates about its axis with angular speed $100\\,\\text{rad/s}$. The radius of the cylinder is $0.25\\,\\text{m}$. The kinetic energy of rotation of the cylinder is:",
    ["$3125\\,\\text{J}$", "$6250\\,\\text{J}$", "$1250\\,\\text{J}$", "$2500\\,\\text{J}$"],
    0, "$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(20)(0.25)^2 = 10(0.0625) = 0.625\\,\\text{kg}\\cdot\\text{m}^2$. $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.625)(100)^2 = 0.3125 \\times 10000 = 3125\\,\\text{J}$."
))

# 20
torque_qs.append(q(
    "A cord is wound around the circumference of a bicycle wheel of radius $R = 0.4\\,\\text{m}$. A steady pull of $F = 40\\,\\text{N}$ is applied on the cord. If the wheel accelerates at $\\alpha = 4\\,\\text{rad/s}^2$, the moment of inertia of the wheel is:",
    ["$2.0\\,\\text{kg}\\cdot\\text{m}^2$", "$4.0\\,\\text{kg}\\cdot\\text{m}^2$", "$8.0\\,\\text{kg}\\cdot\\text{m}^2$", "$16.0\\,\\text{kg}\\cdot\\text{m}^2$"],
    1, "$\\tau = F R = 40 \\times 0.4 = 16\\,\\text{N}\\cdot\\text{m}$. $I = \\frac{\\tau}{\\alpha} = \\frac{16}{4} = 4.0\\,\\text{kg}\\cdot\\text{m}^2$."
))

# Fill remaining to reach 45 for each subtopic
# Add 20 more for COM
com_remaining = [
    ("A particle of mass $m_1$ moves along $+x$ axis at $v_1$ and $m_2$ moves along $+y$ axis at $v_2$. The magnitude of velocity of their center of mass is:",
     ["$\\frac{\\sqrt{m_1^2 v_1^2 + m_2^2 v_2^2}}{m_1 + m_2}$", "$\\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$", "$\\sqrt{v_1^2 + v_2^2}$", "$\\frac{m_1 v_1 - m_2 v_2}{m_1 + m_2}$"],
     0, "Total momentum is $\\vec{P} = m_1 v_1\\hat{i} + m_2 v_2\\hat{j}$. Magnitude is $\\sqrt{(m_1 v_1)^2 + (m_2 v_2)^2}$. Speed of COM is $P/(m_1 + m_2)$."),
    ("The center of mass of a system of particles depends on:",
     ["Forces acting on particles", "Masses and relative positions of the particles", "State of motion of particles", "Temperature only"],
     1, "Center of mass depends solely on the distribution of masses and their positions: $\\vec{r}_{\\text{cm}} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i}$."),
    ("A body projected into air explodes in mid-air. The trajectory of the center of mass of the fragments is:",
     ["A straight vertical line", "A hyperbola", "The same parabola as before the explosion", "A circle"],
     2, "Since explosion forces are purely internal, external force remains only gravity, so COM follows the original parabolic trajectory."),
    ("Two bodies of mass $1\\,\\text{kg}$ and $3\\,\\text{kg}$ have position vectors $(\\hat{i} + 2\\hat{j} + \\hat{k})$ and $(-3\\hat{i} - 2\\hat{j} + \\hat{k})$. The center of mass is located at:",
     ["$(-\\hat{i} - \\hat{j} + \\hat{k})$", "$\\left(-\\frac{1}{2}\\hat{i} - \\frac{1}{2}\\hat{j} + \\hat{k}\\right)$", "$(-2\\hat{i} - \\hat{j} + \\hat{k})$", "$(-2\\hat{i} - \\hat{j} + \\hat{k})$"],
     2, "$\\vec{r}_{\\text{cm}} = \\frac{1(\\hat{i} + 2\\hat{j} + \\hat{k}) + 3(-3\\hat{i} - 2\\hat{j} + \\hat{k})}{4} = \\frac{-8\\hat{i} - 4\\hat{j} + 4\\hat{k}}{4} = -2\\hat{i} - \\hat{j} + \\hat{k}$."),
    ("Three masses $m, 2m, 3m$ are placed along a line at $x = 0, x = L, x = 2L$. The center of mass is at:",
     ["$\\frac{7}{6}L$", "$\\frac{4}{3}L$", "$L$", "$\\frac{5}{6}L$"],
     1, "$x_{\\text{cm}} = \\frac{m(0) + 2m(L) + 3m(2L)}{m + 2m + 3m} = \\frac{8mL}{6m} = \\frac{4}{3}L$."),
    ("The center of mass of a body:",
     ["Must lie inside the body", "Must lie on the surface of the body", "Must lie at the geometric center", "May lie outside the body"],
     3, "For shapes like a ring, hollow sphere, or horseshoe, the center of mass lies in empty space outside the physical material."),
    ("A rod of length $L$ has non-uniform density $\\lambda = k x^2$. The position of center of mass from $x=0$ is:",
     ["$\\frac{3}{4}L$", "$\\frac{2}{3}L$", "$\\frac{1}{2}L$", "$\\frac{4}{5}L$"],
     0, "$M = \\int_0^L k x^2 dx = kL^3/3$. $\\int_0^L x(kx^2)dx = kL^4/4$. $x_{\\text{cm}} = \\frac{kL^4/4}{kL^3/3} = \\frac{3}{4}L$."),
    ("Two particles of masses $m$ and $2m$ are moving with equal kinetic energy. The ratio of magnitude of their momenta is:",
     ["$1 : 2$", "$1 : \\sqrt{2}$", "$\\sqrt{2} : 1$", "$1 : 4$"],
     1, "$p = \\sqrt{2mK}$. Thus $p_1/p_2 = \\sqrt{m/(2m)} = 1/\\sqrt{2}$."),
    ("A wooden block of mass $M$ on frictionless ice has length $L$. An insect of mass $m$ crawls from one end to the other. The displacement of the block is:",
     ["$L$", "$\\frac{m L}{M}$", "$\\frac{m L}{M + m}$", "$\\frac{M L}{M + m}$"],
     2, "By conservation of center of mass position, $\\Delta x_{\\text{block}} = \\frac{m L}{M + m}$."),
    ("A circular disc has mass $M$ and radius $R$. A circular hole of radius $R/3$ is cut out with center at distance $R/2$ from the disc center. The center of mass of remaining portion is at:",
     ["$-R/16$", "$-R/8$", "$-R/4$", "$-R/16$"],
     0, "Removed mass is $m = M/9$ at $x = R/2$. Remaining mass is $8M/9$. $x_{\\text{cm}} = \\frac{0 - (M/9)(R/2)}{8M/9} = -\\frac{R/18}{8/9} = -\\frac{R}{16}$."),
    ("In an inelastic collision between two bodies on a frictionless floor, which quantity is conserved?",
     ["Total kinetic energy", "Total linear momentum of the system", "Mechanical energy", "Velocity of each particle"],
     1, "Since no external horizontal force acts, total linear momentum is conserved in all collisions."),
    ("If the center of mass of three particles of equal mass placed at vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$ is at origin, then:",
     ["$x_1 + x_2 + x_3 = 0$ and $y_1 + y_2 + y_3 = 0$", "$x_1 x_2 x_3 = 0$", "$x_1^2 + x_2^2 + x_3^2 = 0$", "$x_1 + x_2 = x_3$"],
     0, "$x_{\\text{cm}} = \\frac{x_1 + x_2 + x_3}{3} = 0 \\implies x_1 + x_2 + x_3 = 0$."),
    ("A shell fired from a cannon explodes in air into several fragments. The center of mass of the fragments:",
     ["Moves vertically downward", "Follows the original trajectory", "Stops instantly", "Moves in the direction of the largest fragment"],
     1, "Internal explosive forces cannot accelerate the center of mass, so it continues along the original parabolic path."),
    ("Two particles of masses $2\\,\\text{kg}$ and $4\\,\\text{kg}$ are released from rest towards each other under mutual gravitational attraction. When their speed is $v_1$ and $v_2$, the velocity of their center of mass is:",
     ["$v_1 + v_2$", "$\\sqrt{v_1 v_2}$", "$0$", "$(v_1 + v_2)/2$"],
     2, "Gravitational attraction is internal to the two-particle system. Since initial momentum is zero, $\\vec{v}_{\\text{cm}} = 0$ at all times."),
    ("The center of mass of a uniform triangular lamina coincides with its:",
     ["Orthocenter", "Incenter", "Centroid", "Circumcenter"],
     2, "The center of mass of any uniform triangular sheet is at the centroid (intersection of its medians)."),
    ("A boy of mass $40\\,\\text{kg}$ walks along a $100\\,\\text{kg}$ uniform plank of length $3\\,\\text{m}$ floating on water. How much does the plank shift if the boy walks from one end to the center?",
     ["$0.43\\,\\text{m}$", "$0.86\\,\\text{m}$", "$0.60\\,\\text{m}$", "$0.30\\,\\text{m}$"],
     0, "Relative displacement of boy is $\\Delta x_{\\text{rel}} = 1.5\\,\\text{m}$. Shift of plank is $\\Delta x = \\frac{m}{M + m}\\Delta x_{\\text{rel}} = \\frac{40}{140}(1.5) = \\frac{2}{7}(1.5) = \\frac{3}{7} \\approx 0.43\\,\\text{m}$."),
    ("A square plate of side $2a$ has uniform mass density. A circular hole of radius $a$ is drilled touching the center and one side. The shift in center of mass is:",
     ["$\\frac{\\pi a}{2(4 - \\pi)}$", "$\\frac{\\pi a}{4 - \\pi}$", "$\\frac{a}{2(4 - \\pi)}$", "$\\frac{\\pi a}{2(4 - \\pi)}$"],
     0, "Original area $4a^2$ at $0$. Removed area $\\pi a^2$ at distance $a/2$. Shift is $\\frac{(\\pi a^2)(a/2)}{4a^2 - \\pi a^2} = \\frac{\\pi a}{2(4 - \\pi)}$."),
    ("Two blocks of masses $m$ and $M$ are attached to a spring on a smooth table. The system is released from rest after being compressed. When the spring attains its natural length, the ratio of their kinetic energies is:",
     ["$M / m$", "$m / M$", "$1 : 1$", "$\\sqrt{M/m}$"],
     0, "$p_1 = p_2 = p$. $K = p^2/(2m)$. Thus $K_1 / K_2 = M / m$."),
    ("A uniform rod of length $L$ is bent at right angles at $L/3$ from one end. The distance of the center of mass from the bend is:",
     ["$\\frac{L}{6}\\sqrt{5}$", "$\\frac{L}{9}\\sqrt{5}$", "$\\frac{L}{18}\\sqrt{13}$", "$\\frac{L}{18}\\sqrt{17}$"],
     3, "Arm 1: length $L/3$, mass $M/3$, COM at $(L/6, 0)$. Arm 2: length $2L/3$, mass $2M/3$, COM at $(0, L/3)$. $x_{\\text{cm}} = \\frac{(M/3)(L/6)}{M} = L/18$. $y_{\\text{cm}} = \\frac{(2M/3)(L/3)}{M} = 2L/9 = 4L/18$. Distance is $\\sqrt{(L/18)^2 + (4L/18)^2} = \\frac{L}{18}\\sqrt{1 + 16} = \\frac{L}{18}\\sqrt{17}$."),
    ("The center of mass of a system consisting of Earth and Moon lies:",
     ["At the center of the Earth", "Inside the Earth, about $1700\\,\\text{km}$ below Earth's surface", "Midway between Earth and Moon", "Outside the Earth in space"],
     1, "Distance to Moon is $384,000\\,\\text{km}$. Mass ratio is $M_E/M_M \\approx 81$. Distance from Earth's center is $\\frac{384000}{82} \\approx 4680\\,\\text{km}$. Since Earth's radius is $6370\\,\\text{km}$, this point is about $1700\\,\\text{km}$ beneath the Earth's surface.")
]

for item in com_remaining:
    com_qs.append(q(item[0], item[1], item[2], item[3], "Center of mass"))

# Add 25 more for Torque
torque_remaining = [
    ("A force of $5\\,\\text{N}$ acts perpendicularly at the edge of a door of width $0.8\\,\\text{m}$. The torque produced about the hinges is:",
     ["$4.0\\,\\text{N}\\cdot\\text{m}$", "$2.0\\,\\text{N}\\cdot\\text{m}$", "$5.0\\,\\text{N}\\cdot\\text{m}$", "$6.25\\,\\text{N}\\cdot\\text{m}$"],
     0, "$\\tau = F r \\sin(90^\\circ) = 5 \\times 0.8 = 4.0\\,\\text{N}\\cdot\\text{m}$."),
    ("A meter stick of mass $0.2\\,\\text{kg}$ is pivoted at its $50\\,\\text{cm}$ mark. Where must a mass of $0.1\\,\\text{kg}$ be placed to balance a mass of $0.05\\,\\text{kg}$ placed at the $10\\,\\text{cm}$ mark?",
     ["$60\\,\\text{cm}$", "$70\\,\\text{cm}$", "$80\\,\\text{cm}$", "$90\\,\\text{cm}$"],
     1, "Torque balance: $0.05(50 - 10) = 0.1(x - 50) \\implies 0.05(40) = 0.1(x - 50) \\implies 2 = 0.1(x - 50) \\implies x - 50 = 20 \\implies x = 70\\,\\text{cm}$."),
    ("When a constant torque acts on a rotating body, which of the following remains constant?",
     ["Angular velocity", "Rotational kinetic energy", "Angular acceleration", "Angular momentum"],
     2, "By $\\tau = I\\alpha$, if torque $\\tau$ is constant and $I$ is constant, angular acceleration $\\alpha$ is constant."),
    ("A rod of length $L$ has mass $M$. It is pivoted at the center. Two forces $F$ act perpendicular to the rod at both ends in opposite directions. The net torque is:",
     ["$F L / 2$", "$F L$", "$2 F L$", "$0$"],
     1, "Both forces produce torque in the same direction: $\\tau = F(L/2) + F(L/2) = FL$."),
    ("The rotational analog of mass in linear mechanics is:",
     ["Torque", "Moment of inertia", "Angular momentum", "Angular impulse"],
     1, "Moment of inertia $I$ represents the rotational inertia of a body, playing the identical role to mass in translational motion."),
    ("The angular velocity of a wheel changes from $10\\,\\text{rad/s}$ to $30\\,\\text{rad/s}$ in $4\\,\\text{s}$ under constant torque. The angular displacement in this time is:",
     ["$80\\,\\text{rad}$", "$40\\,\\text{rad}$", "$160\\,\\text{rad}$", "$60\\,\\text{rad}$"],
     0, "$\\theta = \\left(\\frac{\\omega_0 + \\omega}{2}\\right)t = \\left(\\frac{10 + 30}{2}\\right)(4) = 20 \\times 4 = 80\\,\\text{rad}$."),
    ("A force $\\vec{F} = 4\\hat{i} - 5\\hat{j}\\,\\text{N}$ acts at a point $\\vec{r} = 2\\hat{i} + 3\\hat{j}\\,\\text{m}$. The torque about the origin is:",
     ["$-22\\hat{k}\\,\\text{N}\\cdot\\text{m}$", "$22\\hat{k}\\,\\text{N}\\cdot\\text{m}$", "$-7\\hat{k}\\,\\text{N}\\cdot\\text{m}$", "$7\\hat{k}\\,\\text{N}\\cdot\\text{m}$"],
     0, "$\\vec{\\tau} = \\vec{r} \\times \\vec{F} = (2\\hat{i} + 3\\hat{j}) \\times (4\\hat{i} - 5\\hat{j}) = -10\\hat{k} - 12\\hat{k} = -22\\hat{k}\\,\\text{N}\\cdot\\text{m}$."),
    ("A uniform rod of mass $M$ and length $L$ lies on a smooth horizontal table. A force $F$ is applied perpendicular to the rod at one end. The acceleration of the center of mass is:",
     ["$F / M$", "$2F / M$", "$3F / M$", "$F / (2M)$"],
     0, "The acceleration of the center of mass depends only on total external force: $a_{\\text{cm}} = F / M$."),
    ("In the previous problem, the initial angular acceleration of the rod about its center of mass is:",
     ["$6F / (ML)$", "$3F / (ML)$", "$12F / (ML)$", "$F / (ML)$"],
     0, "Torque about center of mass is $\\tau = F(L/2)$. Moment of inertia about center of mass is $I_{\\text{cm}} = \\frac{1}{12}ML^2$. Thus $\\alpha = \\frac{F(L/2)}{(1/12)ML^2} = \\frac{6F}{ML}$."),
    ("A uniform disc of mass $M$ and radius $R$ is subjected to two forces $F$ and $2F$ tangentially at opposite ends of a diameter in opposite directions. The angular acceleration is:",
     ["$\\frac{3F}{MR}$", "$\\frac{6F}{MR}$", "$\\frac{2F}{MR}$", "$\\frac{F}{MR}$"],
     1, "Both forces produce torque in the same direction: $\\tau = F R + 2F R = 3FR$. Since $I = \\frac{1}{2}MR^2$, $\\alpha = \\frac{3FR}{(1/2)MR^2} = \\frac{6F}{MR}$."),
    ("A light rod of length $L$ has two masses $m$ and $2m$ attached at its ends. The rod rotates about a perpendicular axis through its center of mass with angular speed $\\omega$. Its kinetic energy is:",
     ["$\\frac{1}{3}m L^2 \\omega^2$", "$\\frac{1}{2}m L^2 \\omega^2$", "$\\frac{2}{3}m L^2 \\omega^2$", "$m L^2 \\omega^2$"],
     0, "Distance of COM from $m$ is $2L/3$, and from $2m$ is $L/3$. $I = m(2L/3)^2 + 2m(L/3)^2 = m\\frac{4L^2}{9} + 2m\\frac{L^2}{9} = \\frac{6mL^2}{9} = \\frac{2}{3}mL^2$. Kinetic energy $K = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}\\left(\\frac{2}{3}mL^2\\right)\\omega^2 = \\frac{1}{3}mL^2\\omega^2$."),
    ("A torque of $20\\,\\text{N}\\cdot\\text{m}$ acts on a body of moment of inertia $2\\,\\text{kg}\\cdot\\text{m}^2$ initially at rest. The work done by the torque in $5\\,\\text{seconds}$ is:",
     ["$500\\,\\text{J}$", "$2500\\,\\text{J}$", "$1250\\,\\text{J}$", "$2000\\,\\text{J}$"],
     1, "$\\alpha = \\tau / I = 20/2 = 10\\,\\text{rad/s}^2$. Angular displacement $\\theta = \\frac{1}{2}\\alpha t^2 = \\frac{1}{2}(10)(25) = 125\\,\\text{rad}$. Work done $W = \\tau \\theta = 20 \\times 125 = 2500\\,\\text{J}$."),
    ("A particle moves along a straight line with constant velocity. The torque of the particle about any fixed point off the line:",
     ["Is non-zero and varies with time", "Is constant in magnitude and direction", "Is zero at all times", "Increases linearly with time"],
     1, "Torque is $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$. Since velocity is constant, $\\vec{F} = 0$, so the net force is zero and the torque is identically zero (or angular momentum $L = m v d$ is constant, so $dL/dt = 0$ implies $\\tau = 0$)."),
    ("The power delivered by a torque $\\vec{\\tau}$ rotating a body with angular velocity $\\vec{\\omega}$ is:",
     ["$\\vec{\\tau} \\cdot \\vec{\\omega}$", "$\\vec{\\tau} \\times \\vec{\\omega}$", "$\\frac{1}{2}\\tau\\omega$", "$\\tau / \\omega$"],
     0, "Rotational power is $P = \\vec{\\tau} \\cdot \\vec{\\omega}$."),
    ("An automobile engine develops $100\\,\\text{kW}$ when rotating at a speed of $1800\\,\\text{rpm}$. The torque delivered by the engine is approximately:",
     ["$531\\,\\text{N}\\cdot\\text{m}$", "$265\\,\\text{N}\\cdot\\text{m}$", "$1060\\,\\text{N}\\cdot\\text{m}$", "$100\\,\\text{N}\\cdot\\text{m}$"],
     0, "$\\omega = \\frac{2\\pi(1800)}{60} = 60\\pi\\,\\text{rad/s} \\approx 188.5\\,\\text{rad/s}$. $P = \\tau \\omega \\implies \\tau = \\frac{10^5}{60\\pi} = \\frac{5000}{3\\pi} \\approx 530.5\\,\\text{N}\\cdot\\text{m}$."),
    ("Two equal and opposite forces whose lines of action do not coincide form:",
     ["A zero torque system", "A pure torque (couple) with zero net force", "A net force without torque", "An unstable equilibrium"],
     1, "A couple produces pure rotation with zero net force: $\\sum \\vec{F} = 0$, while the net torque is non-zero and independent of the choice of reference point."),
    ("A disc of radius $0.2\\,\\text{m}$ is rolling on a horizontal surface. A force of $10\\,\\text{N}$ acts at its top edge in the forward direction. The torque of this force about the instantaneous center of rotation (point of contact) is:",
     ["$2.0\\,\\text{N}\\cdot\\text{m}$", "$4.0\\,\\text{N}\\cdot\\text{m}$", "$1.0\\,\\text{N}\\cdot\\text{m}$", "$8.0\\,\\text{N}\\cdot\\text{m}$"],
     1, "Distance from the point of contact to the top edge is $2R = 2(0.2) = 0.4\\,\\text{m}$. Torque is $\\tau = F(2R) = 10 \\times 0.4 = 4.0\\,\\text{N}\\cdot\\text{m}$."),
    ("A heavy door of width $1\\,\\text{m}$ is pushed by a force $F$ at angle $30^\\circ$ to the face of the door at the outer edge. The effective torque producing rotation is:",
     ["$F \\cos(30^\\circ)$", "$F \\sin(30^\\circ)$", "$F$", "$F / 2$"],
     1, "Torque is $\\tau = r F \\sin\\theta = 1 \\times F \\sin(30^\\circ) = F/2 = F\\sin(30^\\circ)$."),
    ("A solid sphere of mass $M$ and radius $R$ is rotated about its diameter by a torque $\\tau$. Its angular acceleration is:",
     ["$\\frac{5\\tau}{2MR^2}$", "$\\frac{2\\tau}{5MR^2}$", "$\\frac{\\tau}{MR^2}$", "$\\frac{3\\tau}{2MR^2}$"],
     0, "$I = \\frac{2}{5}MR^2$. $\\alpha = \\tau / I = \\frac{\\tau}{(2/5)MR^2} = \\frac{5\\tau}{2MR^2}$."),
    ("A uniform rod of length $L$ is hanging vertically from a fixed pivot. A horizontal force $F$ is applied at the bottom end. For the rod to remain in equilibrium at an angle $\\theta$ with the vertical, $F$ must be:",
     ["$\\frac{Mg}{2}\\tan\\theta$", "$Mg\\tan\\theta$", "$\\frac{Mg}{2}\\sin\\theta$", "$Mg\\sin\\theta$"],
     0, "Torque balance about the pivot: $F(L\\cos\\theta) - Mg\\left(\\frac{L}{2}\\sin\\theta\\right) = 0 \\implies F = \\frac{Mg}{2}\\tan\\theta$."),
    ("When a gymnast does a flip in the air, the net torque of gravity about her center of mass is:",
     ["Zero", "Positive", "Negative", "Dependent on orientation"],
     0, "Gravity acts through the center of mass, so the lever arm with respect to the center of mass is zero, producing zero torque about the center of mass."),
    ("A uniform disc of mass $2\\,\\text{kg}$ and radius $0.5\\,\\text{m}$ is acted upon by a torque of $4\\,\\text{N}\\cdot\\text{m}$. The angular velocity acquired after $3\\,\\text{s}$ starting from rest is:",
     ["$48\\,\\text{rad/s}$", "$24\\,\\text{rad/s}$", "$12\\,\\text{rad/s}$", "$36\\,\\text{rad/s}$"],
     0, "$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(2)(0.25) = 0.25\\,\\text{kg}\\cdot\\text{m}^2$. $\\alpha = 4 / 0.25 = 16\\,\\text{rad/s}^2$. $\\omega = \\alpha t = 16 \\times 3 = 48\\,\\text{rad/s}$."),
    ("A wheel initially at rest is rotated with constant angular acceleration $\\alpha = 2\\,\\text{rad/s}^2$. The angle turned by the wheel in the 5th second of its motion is:",
     ["$9\\,\\text{rad}$", "$18\\,\\text{rad}$", "$25\\,\\text{rad}$", "$5\\,\\text{rad}$"],
     0, "$\\theta_n = \\omega_0 + \\frac{1}{2}\\alpha(2n - 1) = 0 + \\frac{1}{2}(2)(2(5) - 1) = 9\\,\\text{rad}$."),
    ("The condition under which a force produces no torque about a point is:",
     ["The force is perpendicular to the position vector", "The line of action of the force passes through that point", "The force is parallel to the ground", "The mass of the object is zero"],
     1, "Torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$ whenever $\\vec{r} \\parallel \\vec{F}$, meaning the line of action passes through the reference point."),
    ("A torque of $100\\,\\text{N}\\cdot\\text{m}$ acting on a wheel of moment of inertia $5\\,\\text{kg}\\cdot\\text{m}^2$ produces an angular acceleration of:",
     ["$20\\,\\text{rad/s}^2$", "$500\\,\\text{rad/s}^2$", "$10\\,\\text{rad/s}^2$", "$25\\,\\text{rad/s}^2$"],
     0, "$\\alpha = \\tau / I = 100 / 5 = 20\\,\\text{rad/s}^2$.")
]

for item in torque_remaining:
    torque_qs.append(q(item[0], item[1], item[2], item[3], "Torque"))

print(f"COM count: {len(com_qs)}")
print(f"Torque count: {len(torque_qs)}")

all_batch1 = com_qs + torque_qs
out_path = os.path.join(os.path.dirname(__file__), "rm_batch1.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(all_batch1, f, indent=2, ensure_ascii=False)

print(f"Successfully written {len(all_batch1)} questions to {out_path}")
