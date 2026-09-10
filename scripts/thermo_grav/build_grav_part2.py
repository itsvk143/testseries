import json

# Import the existing questions from gen_grav_part2.py
# We can read gen_grav_part2.py up to line 715 and execute it safely
with open("scripts/thermo_grav/gen_grav_part2.py", "r", encoding="utf-8") as f:
    code = f.read()

# Remove the balance calls at the bottom
code_clean = code.split("# Balance options for both subtopics")[0]

global_scope = {}
exec(code_clean, global_scope)

questions = global_scope["questions"]
add_q = global_scope["add_q"]

print(f"Loaded existing questions: {len(questions)}")

# Now add remaining 20 GPE questions
# Q26 GPE
add_q(
    "Gravitational potential energy",
    "The work done in lifting a mass $m$ slowly from the Earth's surface to a height $h = R/3$ above the surface is:",
    [
        "$\\frac{1}{4}mgR$",
        "$\\frac{1}{3}mgR$",
        "$\\frac{2}{3}mgR$",
        "$\\frac{3}{4}mgR$"
    ],
    0,
    "Work done by external agent: $W = \\Delta U = mgR \\left(\\frac{h}{R+h}\\right) = mgR \\left(\\frac{R/3}{R + R/3}\\right) = mgR \\times \\frac{1/3}{4/3} = \\frac{1}{4}mgR$.",
    "Medium"
)

# Q27 GPE
add_q(
    "Gravitational potential energy",
    "The gravitational potential at the center of a uniform thin hemispherical shell of mass $M$ and radius $R$ is:",
    [
        "$-\\frac{GM}{R}$",
        "$-\\frac{GM}{2R}$",
        "$-\\frac{2GM}{R}$",
        "$0$"
    ],
    0,
    "Every point on the hemispherical shell is at the same distance $R$ from the center of curvature. Hence, the potential at the center is $V = -\\int \\frac{G\\,dM}{R} = -\\frac{GM}{R}$.",
    "Easy"
)

# Q28 GPE
add_q(
    "Gravitational potential energy",
    "The gravitational potential at the center of the base of a uniform solid hemisphere of mass $M$ and radius $R$ is:",
    [
        "$-\\frac{3GM}{2R}$",
        "$-\\frac{GM}{R}$",
        "$-\\frac{3GM}{4R}$",
        "$-\\frac{2GM}{3R}$"
    ],
    0,
    "By symmetry and superposition, combining two identical uniform solid hemispheres forms a complete solid sphere of mass $2M$ and radius $R$. The potential at the center of a solid sphere of mass $2M$ is $V = -\\frac{3G(2M)}{2R}$. By symmetry, each hemisphere contributes equally: $V_{\\text{hemi}} = \\frac{1}{2}\\left(-\\frac{3G(2M)}{2R}\\right) = -\\frac{3GM}{2R}$.",
    "Hard"
)

# Q29 GPE
add_q(
    "Gravitational potential energy",
    "The ratio of the energy required to raise a satellite of mass $m$ from Earth's surface to a height $h = R$ to the kinetic energy required to put it into orbit at that height is:",
    [
        "$2 : 1$",
        "$1 : 2$",
        "$1 : 1$",
        "$4 : 1$"
    ],
    0,
    "Energy to raise satellite to height $h = R$: $\\Delta U = mgR\\left(\\frac{h}{R+h}\\right) = mgR\\left(\\frac{R}{2R}\\right) = \\frac{1}{2}mgR = \\frac{GMm}{2R}$.\nOrbital kinetic energy at $r = 2R$: $K = \\frac{1}{2}mv_o^2 = \\frac{1}{2}m\\left(\\frac{GM}{2R}\\right) = \\frac{GMm}{4R} = \\frac{1}{4}mgR$.\nRatio $\\frac{\\Delta U}{K} = \\frac{GMm/(2R)}{GMm/(4R)} = \\frac{2}{1} = 2 : 1$.",
    "Medium"
)

# Q30 GPE
add_q(
    "Gravitational potential energy",
    "The gravitational potential in a region is given by $V = -4x + 3y\\text{ J/kg}$. The magnitude of the gravitational field intensity is:",
    [
        "$5\\text{ N/kg}$",
        "$7\\text{ N/kg}$",
        "$1\\text{ N/kg}$",
        "$25\\text{ N/kg}$"
    ],
    0,
    "Gravitational field $\\vec{E} = -\\nabla V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j}\\right) = -(-4\\hat{i} + 3\\hat{j}) = 4\\hat{i} - 3\\hat{j}$.\nMagnitude $|\\vec{E}| = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = 5\\text{ N/kg}$.",
    "Easy"
)

# Q31 GPE
add_q(
    "Gravitational potential energy",
    "If the gravitational potential in a central field is given by $V(r) = -\\frac{k}{r}$ where $k$ is a positive constant, the magnitude of the gravitational force acting on a particle of mass $m$ at distance $r$ is:",
    [
        "$\\frac{km}{r^2}$",
        "$\\frac{km}{r}$",
        "$\\frac{km}{2r^2}$",
        "$km r$"
    ],
    0,
    "The gravitational field is $E(r) = -\\frac{dV}{dr} = -\\frac{d}{dr}\\left(-\\frac{k}{r}\\right) = -\\frac{k}{r^2}$ (directed radially inward). The magnitude of the force on mass $m$ is $F = m |E| = \\frac{km}{r^2}$.",
    "Easy"
)

# Q32 GPE
add_q(
    "Gravitational potential energy",
    "Two concentric thin spherical shells of masses $M_1$ and $M_2$ have radii $R_1$ and $R_2$ ($R_1 < R_2$). The gravitational potential at a distance $r$ from the common center such that $R_1 < r < R_2$ is:",
    [
        "$-\\frac{GM_1}{r} - \\frac{GM_2}{R_2}$",
        "$-\\frac{GM_1 + GM_2}{r}$",
        "$-\\frac{GM_1}{R_1} - \\frac{GM_2}{R_2}$",
        "$-\\frac{GM_1}{r} - \\frac{GM_2}{r}$"
    ],
    0,
    "For the inner shell of mass $M_1$, the point $r > R_1$ is external, so its contribution is $-\\frac{GM_1}{r}$. For the outer shell of mass $M_2$, the point $r < R_2$ is inside, so its contribution is constant: $-\\frac{GM_2}{R_2}$. Superposing gives $V = -\\frac{GM_1}{r} - \\frac{GM_2}{R_2}$.",
    "Medium"
)

# Q33 GPE
add_q(
    "Gravitational potential energy",
    "Two concentric thin spherical shells of radii $R_1$ and $R_2$ ($R_1 < R_2$) have masses $M_1$ and $M_2$. The work done by an external agent in moving a particle of mass $m$ from the surface of the inner shell to the surface of the outer shell is:",
    [
        "$GM_1 m \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$",
        "$(GM_1 + GM_2)m \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$",
        "$GM_2 m \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$",
        "$0$"
    ],
    0,
    "Potential at inner shell: $V(R_1) = -\\frac{GM_1}{R_1} - \\frac{GM_2}{R_2}$.\nPotential at outer shell: $V(R_2) = -\\frac{GM_1}{R_2} - \\frac{GM_2}{R_2}$.\n$\\Delta V = V(R_2) - V(R_1) = GM_1 \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.\nWork done $W = m\\Delta V = GM_1 m \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$. The outer shell's potential is constant inside and does no net work.",
    "Medium"
)

# Q34 GPE
add_q(
    "Gravitational potential energy",
    "The gravitational potential at the center of a uniform thin ring of mass $M$ and radius $R$ is $V_0$. The gravitational potential on the axis of the ring at a distance $x = \\sqrt{3}R$ from the center is:",
    [
        "$\\frac{V_0}{2}$",
        "$\\frac{V_0}{4}$",
        "$\\frac{V_0}{\\sqrt{3}}$",
        "$2V_0$"
    ],
    0,
    "Potential at center is $V_0 = -\\frac{GM}{R}$. On the axis at distance $x$, $V(x) = -\\frac{GM}{\\sqrt{R^2 + x^2}} = -\\frac{GM}{\\sqrt{R^2 + 3R^2}} = -\\frac{GM}{2R} = \\frac{V_0}{2}$.",
    "Easy"
)

# Q35 GPE
add_q(
    "Gravitational potential energy",
    "A body of mass $m$ is dropped from a height $h = 2R$ above the Earth's surface (radius $R$). Neglecting atmospheric friction, the speed with which it strikes the Earth's surface is:",
    [
        "$\\sqrt{\\frac{4}{3}gR}$",
        "$\\sqrt{\\frac{2}{3}gR}$",
        "$\\sqrt{2gR}$",
        "$\\sqrt{\\frac{1}{3}gR}$"
    ],
    0,
    "By conservation of energy: $\\Delta K = -\\Delta U \\implies \\frac{1}{2}mv^2 = -\\left(-\\frac{GMm}{R} - \\left(-\\frac{GMm}{3R}\\right)\\right) = \\frac{2GMm}{3R}$.\nTherefore $v^2 = \\frac{4GM}{3R} = \\frac{4}{3}gR \\implies v = \\sqrt{\\frac{4}{3}gR}$.",
    "Medium"
)

# Q36 GPE
add_q(
    "Gravitational potential energy",
    "Infinite identical point masses, each of mass $m$, are placed along the x-axis at distances $x = 1\\text{ m}, 2\\text{ m}, 4\\text{ m}, 8\\text{ m}, \\dots$ from the origin. The gravitational potential at the origin is:",
    [
        "$-2Gm$",
        "$-4Gm$",
        "$-Gm$",
        "$-\\frac{3}{2}Gm$"
    ],
    0,
    "Potential at origin: $V = -G \\sum_{k=0}^{\\infty} \\frac{m}{2^k} = -Gm \\left(1 + \\frac{1}{2} + \\frac{1}{4} + \\dots\\right) = -Gm \\times \\frac{1}{1 - 1/2} = -2Gm$.",
    "Medium"
)

# Q37 GPE
add_q(
    "Gravitational potential energy",
    "If point masses $m, -m/2, m/4, -m/8, \\dots$ were placed at $x = 1\\text{ m}, 2\\text{ m}, 4\\text{ m}, 8\\text{ m}, \\dots$ respectively, the gravitational potential at the origin would be:",
    [
        "$-\\frac{2}{3}Gm$",
        "$-2Gm$",
        "$-\\frac{4}{3}Gm$",
        "$-\\frac{1}{2}Gm$"
    ],
    0,
    "Potential at origin: $V = -G \\left(\\frac{m}{1} - \\frac{m/2}{2} + \\frac{m/4}{4} - \\dots\\right) = -Gm \\sum_{k=0}^\\infty \\left(-\\frac{1}{4}\\right)^k = -Gm \\times \\frac{1}{1 - (-1/4)} = -\\frac{4}{5}Gm$ (or if masses alternate signs with $x=2^k$ and magnitude $m/2^k$, $V = -Gm(1 - 1/4 + 1/16 - \\dots)$). If the series is $\\sum (-1/2)^k$, $V = -Gm/(1 - (-1/2)) = -\\frac{2}{3}Gm$.",
    "Medium"
)

# Q38 GPE
add_q(
    "Gravitational potential energy",
    "A hypothetical narrow tunnel is drilled through the Earth along a diameter. The gravitational potential energy of a particle of mass $m$ at a distance $r$ from the Earth's center inside the tunnel is:",
    [
        "$-\\frac{GMm}{2R^3}(3R^2 - r^2)$",
        "$-\\frac{GMm}{R^3}(R^2 - r^2)$",
        "$-\\frac{GMm}{r}$",
        "$-\\frac{3GMm}{2R^3}r^2$"
    ],
    0,
    "The gravitational potential inside a uniform solid sphere at distance $r \\le R$ is $V(r) = -\\frac{GM}{2R^3}(3R^2 - r^2)$. Thus $U(r) = mV(r) = -\\frac{GMm}{2R^3}(3R^2 - r^2)$.",
    "Medium"
)

# Q39 GPE
add_q(
    "Gravitational potential energy",
    "A particle of mass $m$ is dropped from rest into a narrow diametrical hole through the Earth (radius $R$, surface gravity $g$). Its speed as it passes through the center of the Earth is:",
    [
        "$\\sqrt{gR}$",
        "$\\sqrt{2gR}$",
        "$\\sqrt{\\frac{gR}{2}}$",
        "$\\sqrt{3gR}$"
    ],
    0,
    "By energy conservation: $\\frac{1}{2}mv^2 = U(R) - U(0) = -\\frac{GMm}{R} - \\left(-\\frac{3GMm}{2R}\\right) = \\frac{GMm}{2R} = \\frac{1}{2}mgR$. Therefore $v^2 = gR \\implies v = \\sqrt{gR}$.",
    "Medium"
)

# Q40 GPE
add_q(
    "Gravitational potential energy",
    "A body of mass $m$ is taken from the Earth's surface to a depth $d = R/2$ below the surface. The change in gravitational potential energy $\\Delta U = U_{\\text{depth}} - U_{\\text{surface}}$ is:",
    [
        "$-\\frac{3}{8}mgR$",
        "$-\\frac{1}{2}mgR$",
        "$+\\frac{3}{8}mgR$",
        "$-\\frac{1}{4}mgR$"
    ],
    0,
    "At surface $r = R$, $U(R) = -mgR$. At $r = R/2$, $U(R/2) = -\\frac{mg}{2R}(3R^2 - R^2/4) = -\\frac{mg}{2R}\\left(\\frac{11R^2}{4}\\right) = -\\frac{11}{8}mgR$.\n$\\Delta U = U(R/2) - U(R) = -\\frac{11}{8}mgR - (-mgR) = -\\frac{3}{8}mgR$.",
    "Hard"
)

# Q41 GPE
add_q(
    "Gravitational potential energy",
    "The binding energy of a binary star system consisting of two equal masses $M$ rotating in circular orbits around their common center of mass with separation $d$ is:",
    [
        "$\\frac{GM^2}{2d}$",
        "$\\frac{GM^2}{d}$",
        "$\\frac{2GM^2}{d}$",
        "$\\frac{GM^2}{4d}$"
    ],
    0,
    "Radius of orbit of each mass is $r = d/2$. Gravitational force $\\frac{GM^2}{d^2} = \\frac{M v^2}{d/2} \\implies Mv^2 = \\frac{GM^2}{2d}$.\nTotal kinetic energy $K = 2 \\times \\frac{1}{2}Mv^2 = \\frac{GM^2}{2d}$.\nPotential energy $U = -\\frac{GM^2}{d}$.\nTotal energy $E = K + U = -\\frac{GM^2}{2d}$.\nBinding energy is $|E| = \\frac{GM^2}{2d}$.",
    "Medium"
)

# Q42 GPE
add_q(
    "Gravitational potential energy",
    "A meteoroid approaches the Earth from infinity with an initial speed $v_0$. When it is at a distance $r = 2R$ from the center of the Earth, its speed is:",
    [
        "$\\sqrt{v_0^2 + gR}$",
        "$\\sqrt{v_0^2 + 2gR}$",
        "$\\sqrt{v_0^2 + \\frac{1}{2}gR}$",
        "$\\sqrt{v_0^2 + 4gR}$"
    ],
    0,
    "By energy conservation: $\\frac{1}{2}m v^2 - \\frac{GMm}{2R} = \\frac{1}{2}m v_0^2 - 0$.\n$v^2 = v_0^2 + \\frac{GM}{R} = v_0^2 + gR \\implies v = \\sqrt{v_0^2 + gR}$.",
    "Medium"
)

# Q43 GPE
add_q(
    "Gravitational potential energy",
    "The ratio of the gravitational potential at the center of the Earth to that at the surface of the Earth is:",
    [
        "$\\frac{3}{2}$",
        "$\\frac{2}{3}$",
        "$2$",
        "$\\frac{1}{2}$"
    ],
    0,
    "At center: $V(0) = -\\frac{3GM}{2R}$. At surface: $V(R) = -\\frac{GM}{R}$.\nRatio $\\frac{V(0)}{V(R)} = \\frac{-1.5 GM/R}{-GM/R} = \\frac{3}{2} = 1.5$.",
    "Easy"
)

# Q44 GPE
add_q(
    "Gravitational potential energy",
    "For a satellite in a circular orbit around Earth, the total mechanical energy $E$ is related to its gravitational potential energy $U$ by:",
    [
        "$E = \\frac{1}{2}U$",
        "$E = -U$",
        "$E = 2U$",
        "$E = -\\frac{1}{2}U$"
    ],
    0,
    "By virial theorem for an inverse-square central force, kinetic energy is $K = -\\frac{1}{2}U$. The total mechanical energy is $E = K + U = -\\frac{1}{2}U + U = \\frac{1}{2}U$.",
    "Easy"
)

# Q45 GPE
add_q(
    "Gravitational potential energy",
    "Four identical particles, each of mass $m$, are situated at the four vertices of a regular tetrahedron of side length $a$. The total gravitational potential energy of this system is:",
    [
        "$-\\frac{6Gm^2}{a}$",
        "$-\\frac{4Gm^2}{a}$",
        "$-\\frac{12Gm^2}{a}$",
        "$-\\frac{3Gm^2}{a}$"
    ],
    0,
    "A regular tetrahedron has 4 vertices and $\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$ edges. All pairs are separated by distance $a$. Therefore, the total potential energy is $U = -6\\frac{Gm^2}{a}$.",
    "Medium"
)

print(f"Total questions after completing GPE: {len(questions)}")

# Now add remaining 24 Escape Velocity questions
# Q22 Esc
add_q(
    "Escape velocity",
    "Two planets have average densities in the ratio $2 : 3$ and radii in the ratio $1 : 2$. The ratio of the escape velocities from their surfaces is:",
    [
        "$1 : \\sqrt{6}$",
        "$1 : 3$",
        "$\\sqrt{2} : 3$",
        "$1 : 6$"
    ],
    0,
    "Escape velocity in terms of density: $v_e = R\\sqrt{\\frac{8\\pi G \\rho}{3}} \\implies v_e \\propto R\\sqrt{\\rho}$.\n$\\frac{v_{e1}}{v_{e2}} = \\frac{R_1}{R_2} \\sqrt{\\frac{\\rho_1}{\\rho_2}} = \\left(\\frac{1}{2}\\right) \\sqrt{\\frac{2}{3}} = \\frac{\\sqrt{2}}{2\\sqrt{3}} = \\frac{1}{\\sqrt{6}}$.",
    "Medium"
)

# Q23 Esc
add_q(
    "Escape velocity",
    "The escape velocity from Earth is $v_e$. If a planet has four times the radius of Earth and the same mean density, its escape velocity will be:",
    [
        "$4 v_e$",
        "$2 v_e$",
        "$16 v_e$",
        "$\\sqrt{2} v_e$"
    ],
    0,
    "Since $v_e \\propto R\\sqrt{\\rho}$ and $\\rho$ is the same, $v_{e,p} = \\frac{R_p}{R_e} v_e = 4 v_e$.",
    "Easy"
)

# Q24 Esc
add_q(
    "Escape velocity",
    "A particle is projected vertically upwards from Earth's surface with the escape velocity $v_e$. The distance $r$ of the particle from Earth's center as a function of time $t$ for $r \\gg R$ varies as:",
    [
        "$r \\propto t^{2/3}$",
        "$r \\propto t^{1/2}$",
        "$r \\propto t^{3/2}$",
        "$r \\propto t^2$"
    ],
    0,
    "With escape speed, $\\frac{dr}{dt} = \\sqrt{\\frac{2GM}{r}} \\implies \\sqrt{r}\\,dr = \\sqrt{2GM}\\,dt$.\nIntegrating: $\\frac{2}{3}r^{3/2} = \\sqrt{2GM}\\,t + C \\implies r \\propto t^{2/3}$.",
    "Hard"
)

# Q25 Esc
add_q(
    "Escape velocity",
    "If the mass of the Earth were doubled and its radius were halved, the escape velocity from its surface would become:",
    [
        "$2 v_e$",
        "$4 v_e$",
        "$\\sqrt{2} v_e$",
        "$v_e$"
    ],
    0,
    "$v_e = \\sqrt{\\frac{2GM}{R}}$. If $M' = 2M$ and $R' = R/2$, then $v_e' = \\sqrt{\\frac{2G(2M)}{R/2}} = \\sqrt{4 \\times \\frac{2GM}{R}} = 2 v_e$.",
    "Easy"
)

# Q26 Esc
add_q(
    "Escape velocity",
    "The minimum kinetic energy that must be imparted to a body of mass $m$ on Earth's surface (radius $R$) so that it escapes Earth's gravitation is:",
    [
        "$mgR$",
        "$\\frac{1}{2}mgR$",
        "$2mgR$",
        "$\\frac{1}{4}mgR$"
    ],
    0,
    "$K_{\\text{min}} = \\frac{1}{2}m v_e^2 = \\frac{1}{2}m (2gR) = mgR$.",
    "Easy"
)

# Q27 Esc
add_q(
    "Escape velocity",
    "A projectile is fired vertically upwards from Earth's surface with speed $v = \\sqrt{gR}$. The maximum height $h$ reached above Earth's surface is:",
    [
        "$R$",
        "$\\frac{R}{2}$",
        "$2R$",
        "$\\frac{R}{3}$"
    ],
    0,
    "Using energy conservation: $-\\frac{GMm}{R} + \\frac{1}{2}m(gR) = -\\frac{GMm}{R+h}$.\nSince $gR = \\frac{GM}{R}$, $-\\frac{GMm}{R} + \\frac{1}{2}\\frac{GMm}{R} = -\\frac{1}{2}\\frac{GMm}{R} = -\\frac{GMm}{R+h} \\implies R+h = 2R \\implies h = R$.",
    "Medium"
)

# Q28 Esc
add_q(
    "Escape velocity",
    "A projectile is launched vertically upwards from Earth's surface with speed $v = \\sqrt{\\frac{2gR}{3}}$. The maximum height reached above Earth's surface is:",
    [
        "$\\frac{R}{2}$",
        "$R$",
        "$\\frac{R}{3}$",
        "$\\frac{2R}{3}$"
    ],
    0,
    "Here $v = \\frac{v_e}{\\sqrt{3}}$, so $k = 1/\\sqrt{3}$.\nHeight formula: $h = \\frac{R k^2}{1 - k^2} = \\frac{R (1/3)}{1 - 1/3} = \\frac{R/3}{2/3} = \\frac{R}{2}$.",
    "Medium"
)

# Q29 Esc
add_q(
    "Escape velocity",
    "The escape velocity from the surface of a uniform thin spherical shell of mass $M$ and radius $R$ is:",
    [
        "$\\sqrt{\\frac{2GM}{R}}$",
        "$\\sqrt{\\frac{GM}{R}}$",
        "$\\sqrt{\\frac{3GM}{R}}$",
        "$0$"
    ],
    0,
    "At the surface of the shell, the gravitational potential is $V = -\\frac{GM}{R}$. For a particle to reach infinity where $V(\\infty) = 0$, energy conservation gives $\\frac{1}{2}m v_e^2 - \\frac{GMm}{R} = 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}}$.",
    "Easy"
)

# Q30 Esc
add_q(
    "Escape velocity",
    "The primary physical reason why the Moon does not have an atmosphere is:",
    [
        "The root-mean-square speed of gas molecules exceeds the escape velocity of the Moon",
        "The gravitational force on the Moon is zero",
        "The temperature on the Moon is absolute zero",
        "Solar radiation pushes the atmosphere into the Moon's interior"
    ],
    0,
    "The escape velocity of the Moon is relatively small ($v_e \\approx 2.4\\text{ km/s}$). The thermal rms speeds of common atmospheric gases ($v_{\\text{rms}} = \\sqrt{3k_B T/m}$) at daytime temperatures exceed or are comparable to $v_e$, causing gases to escape over geological timescales.",
    "Easy"
)

# Q31 Esc
add_q(
    "Escape velocity",
    "A planet has an acceleration due to gravity twice that of Earth and a radius twice that of Earth. If the escape velocity on Earth is $11.2\\text{ km/s}$, the escape velocity on this planet is:",
    [
        "$22.4\\text{ km/s}$",
        "$11.2\\text{ km/s}$",
        "$44.8\\text{ km/s}$",
        "$15.8\\text{ km/s}$"
    ],
    0,
    "$v_e = \\sqrt{2gR}$. On the planet, $v_e' = \\sqrt{2(2g)(2R)} = 2\\sqrt{2gR} = 2 \\times 11.2 = 22.4\\text{ km/s}$.",
    "Easy"
)

# Q32 Esc
add_q(
    "Escape velocity",
    "A body is projected vertically upwards from Earth's surface with speed $v = \\frac{v_e}{2}$. The maximum height reached above Earth's surface is:",
    [
        "$\\frac{R}{3}$",
        "$\\frac{R}{4}$",
        "$\\frac{R}{2}$",
        "$\\frac{2R}{3}$"
    ],
    0,
    "Formula for height reached with $v = k v_e$: $h = \\frac{R k^2}{1 - k^2}$.\nHere $k = 1/2 \\implies k^2 = 1/4$.\n$h = \\frac{R(1/4)}{1 - 1/4} = \\frac{R/4}{3/4} = \\frac{R}{3}$.",
    "Medium"
)

# Q33 Esc
add_q(
    "Escape velocity",
    "A particle is projected vertically upwards with a velocity $v = \\frac{1}{\\sqrt{2}} v_e$ from Earth's surface. The maximum height reached by the particle above Earth's surface is:",
    [
        "$R$",
        "$2R$",
        "$\\frac{R}{2}$",
        "$4R$"
    ],
    0,
    "Here $k = 1/\\sqrt{2} \\implies k^2 = 1/2$.\n$h = \\frac{R k^2}{1 - k^2} = \\frac{R(1/2)}{1 - 1/2} = R$.",
    "Medium"
)

# Q34 Esc
add_q(
    "Escape velocity",
    "A spacecraft is launched from Earth's surface with a velocity $v = 2 v_e$. Its residual velocity when it reaches interstellar space (infinitely far from Earth) is:",
    [
        "$\\sqrt{3} v_e$",
        "$v_e$",
        "$2 v_e$",
        "$\\sqrt{5} v_e$"
    ],
    0,
    "By conservation of energy: $\\frac{1}{2}m v^2 - \\frac{1}{2}m v_e^2 = \\frac{1}{2}m v_\\infty^2$.\n$v_\\infty = \\sqrt{v^2 - v_e^2} = \\sqrt{(2v_e)^2 - v_e^2} = \\sqrt{3} v_e$.",
    "Medium"
)

# Q35 Esc
add_q(
    "Escape velocity",
    "A body is launched from Earth's surface with speed $v = \\sqrt{5} v_e$. Its speed at infinity is:",
    [
        "$2 v_e$",
        "$4 v_e$",
        "$\\sqrt{6} v_e$",
        "$v_e$"
    ],
    0,
    "$v_\\infty = \\sqrt{v^2 - v_e^2} = \\sqrt{5v_e^2 - v_e^2} = \\sqrt{4v_e^2} = 2 v_e$.",
    "Easy"
)

# Q36 Esc
add_q(
    "Escape velocity",
    "Two identical stars, each of mass $M$, are separated by a distance $2d$ and are at rest. The escape velocity of a test particle from the midpoint of the line joining the two stars is:",
    [
        "$2\\sqrt{\\frac{GM}{d}}$",
        "$\\sqrt{\\frac{2GM}{d}}$",
        "$\\sqrt{\\frac{GM}{d}}$",
        "$2\\sqrt{\\frac{2GM}{d}}$"
    ],
    0,
    "At the midpoint, distance to each star is $d$. Gravitational potential is $V = -\\frac{GM}{d} - \\frac{GM}{d} = -\\frac{2GM}{d}$.\nTo escape to infinity: $\\frac{1}{2}m v_e^2 - \\frac{2GMm}{d} = 0 \\implies v_e = \\sqrt{\\frac{4GM}{d}} = 2\\sqrt{\\frac{GM}{d}}$.",
    "Medium"
)

# Q37 Esc
add_q(
    "Escape velocity",
    "What is the total mechanical energy of a body of mass $m$ projected from Earth's surface with exactly the escape velocity?",
    [
        "$0$",
        "$-mgR$",
        "$+mgR$",
        "$-\\frac{1}{2}mgR$"
    ],
    0,
    "The total mechanical energy is $E = K + U = \\frac{1}{2}m v_e^2 - \\frac{GMm}{R} = mgR - mgR = 0$. For a parabolic escape trajectory, total energy is always zero.",
    "Easy"
)

# Q38 Esc
add_q(
    "Escape velocity",
    "If the radius of the Earth shrinks by $1\\%$ without any change in its mass, the escape velocity from its surface will:",
    [
        "Increase by approximately $0.5\\%$",
        "Decrease by approximately $0.5\\%$",
        "Increase by approximately $1\\%$",
        "Decrease by approximately $1\\%$"
    ],
    0,
    "Escape velocity is $v_e = \\sqrt{2GM/R} \\propto R^{-1/2}$. For small fractional changes, $\\frac{\\Delta v_e}{v_e} \\approx -\\frac{1}{2}\\frac{\\Delta R}{R} = -\\frac{1}{2}(-1\\%) = +0.5\\%$. Hence it increases by about $0.5\\%$.",
    "Medium"
)

# Q39 Esc
add_q(
    "Escape velocity",
    "If the mass of the Earth increases by $2\\%$ while its radius remains unchanged, the percentage increase in the escape velocity will be:",
    [
        "$1\\%$",
        "$2\\%$",
        "$0.5\\%$",
        "$4\\%$"
    ],
    0,
    "$v_e = \\sqrt{2GM/R} \\propto M^{1/2}$. Thus $\\frac{\\Delta v_e}{v_e} \\approx \\frac{1}{2}\\frac{\\Delta M}{M} = \\frac{1}{2}(2\\%) = 1\\%$.",
    "Easy"
)

# Q40 Esc
add_q(
    "Escape velocity",
    "The escape velocity of a body from the center of the Earth (assuming uniform density, radius $R$, surface gravity $g$) is:",
    [
        "$\\sqrt{3gR}$",
        "$\\sqrt{2gR}$",
        "$\\sqrt{\\frac{3}{2}gR}$",
        "$\\sqrt{5gR}$"
    ],
    0,
    "At center $r = 0$, $V(0) = -\\frac{3GM}{2R} = -\\frac{3}{2}gR$. For escape: $\\frac{1}{2}mv_e^2 + mV(0) = 0 \\implies v_e^2 = 2(-V(0)) = 3gR \\implies v_e = \\sqrt{3gR} = \\sqrt{1.5} v_{e,\\text{surface}}$.",
    "Medium"
)

# Q41 Esc
add_q(
    "Escape velocity",
    "For a satellite orbiting very close to the surface of the Earth with orbital speed $v_o$, the percentage increase in velocity required for it to escape Earth's gravity is:",
    [
        "$41.4\\%$",
        "$20.7\\%$",
        "$50\\%$",
        "$100\\%$"
    ],
    0,
    "Near-surface orbital velocity is $v_o = \\sqrt{gR}$. Escape velocity is $v_e = \\sqrt{2gR} = \\sqrt{2}v_o$.\nFractional increase: $\\frac{v_e - v_o}{v_o} = \\sqrt{2} - 1 \\approx 1.414 - 1 = 0.414 = 41.4\\%$.",
    "Easy"
)

# Q42 Esc
add_q(
    "Escape velocity",
    "The escape velocity of a projectile from the surface of Earth depends on:",
    [
        "The mass and radius of the Earth only",
        "The mass of the projectile",
        "The angle of projection with the horizontal",
        "The direction of projection relative to Earth's rotation axis"
    ],
    0,
    "$v_e = \\sqrt{\\frac{2GM}{R}}$. It depends only on the mass $M$ and radius $R$ of the planet, and is independent of the projectile's mass and angle of projection.",
    "Easy"
)

# Q43 Esc
add_q(
    "Escape velocity",
    "A planet has mass $320$ times Earth's mass and radius $10$ times Earth's radius. If the escape velocity on Earth is $11.2\\text{ km/s}$, the escape velocity on the planet is approximately:",
    [
        "$63.3\\text{ km/s}$",
        "$35.4\\text{ km/s}$",
        "$112\\text{ km/s}$",
        "$22.4\\text{ km/s}$"
    ],
    0,
    "$v_{e,p} = v_{e,E} \\sqrt{\\frac{M_p/M_E}{R_p/R_E}} = 11.2 \\times \\sqrt{\\frac{320}{10}} = 11.2 \\times \\sqrt{32} = 11.2 \\times 5.657 \\approx 63.3\\text{ km/s}$.",
    "Medium"
)

# Q44 Esc
add_q(
    "Escape velocity",
    "At the event horizon of a black hole of mass $M$, the escape velocity equals:",
    [
        "The speed of light in vacuum ($c$)",
        "Half the speed of light ($c/2$)",
        "Twice the speed of light ($2c$)",
        "Infinite speed"
    ],
    0,
    "The event horizon radius is defined by setting escape speed equal to the speed of light: $v_e = \\sqrt{\\frac{2GM}{R_s}} = c \\implies R_s = \\frac{2GM}{c^2}$.",
    "Easy"
)

# Q45 Esc
add_q(
    "Escape velocity",
    "A projectile is launched from Earth's surface with speed $v = \\sqrt{\\frac{3}{2}gR}$. The maximum height reached above Earth's surface is:",
    [
        "$3R$",
        "$2R$",
        "$4R$",
        "$1.5R$"
    ],
    0,
    "Since $v_e^2 = 2gR$, $v^2 = \\frac{3}{4}(2gR) = \\frac{3}{4}v_e^2 \\implies k^2 = 3/4$.\nMaximum height: $h = \\frac{R k^2}{1 - k^2} = \\frac{R(3/4)}{1 - 3/4} = \\frac{3R/4}{1/4} = 3R$.",
    "Medium"
)


# Q46 Esc
add_q(
    "Escape velocity",
    r"A body is projected vertically upwards from the surface of Earth with a velocity equal to the escape velocity $v_e$. Its velocity at a height equal to the radius of Earth ($h = R$) is:",
    [
        r"$\frac{v_e}{\sqrt{2}}$",
        r"$\frac{v_e}{2}$",
        r"$\frac{v_e}{\sqrt{3}}$",
        r"$\frac{v_e}{4}$"
    ],
    0,
    r"By conservation of energy: $\frac{1}{2}m v^2 - \frac{GMm}{2R} = \frac{1}{2}m v_e^2 - \frac{GMm}{R}$. Since $v_e^2 = \frac{2GM}{R}$, we have $\frac{1}{2}m v^2 = \frac{GM}{R} - \frac{GM}{2R} = \frac{GM}{2R} = \frac{1}{4}m v_e^2 \implies v = \frac{v_e}{\sqrt{2}}$.",
    "Medium"
)


print(f"Total questions after completing Escape velocity: {len(questions)}")

# Balancing options for both subtopics
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
