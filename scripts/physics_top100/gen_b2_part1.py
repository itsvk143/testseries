import json

questions = []

def add_q(ch, sub, q_text, opts, ans_idx, exp_text):
    questions.append({
        "chapter": ch,
        "subtopic": sub,
        "subTopic": sub,
        "topic": ch,
        "subject": "Physics",
        "examType": "JEE Mains",
        "exam": "JEE Main",
        "type": "MCQ",
        "questionType": "MCQ (Multiple Choice Question)",
        "difficulty": "Difficult",
        "targetAudience": "Top 100 Students",
        "source": "JEE Mains Top 100 Analysis",
        "marks": 4,
        "negativeMarks": 1,
        "question": q_text,
        "options": opts,
        "correctAnswer": ans_idx,
        "correctOption": ans_idx,
        "explanation": exp_text,
        "solution": exp_text
    })

# ==========================================
# CHAPTER 6: Gravitation (6 subtopics * 5 = 30 questions)
# ==========================================

# Subtopic 1: Kepler's laws
add_q(
    "Gravitation", "Kepler's laws",
    "A planet of mass $m$ moves around the Sun of mass $M$ in an elliptical orbit of semi-major axis $a$ and eccentricity $e$. What is the ratio of its maximum kinetic energy to its minimum kinetic energy?",
    [
        "$\\left(\\frac{1 + e}{1 - e}\\right)^2$",
        "$\\frac{1 + e}{1 - e}$",
        "$\\left(\\frac{1 - e}{1 + e}\\right)^2$",
        "$\\frac{1 + e^2}{1 - e^2}$"
    ],
    0,
    "The perihelion distance is $r_p = a(1 - e)$ and aphelion distance is $r_a = a(1 + e)$. By Kepler's second law (conservation of angular momentum): $m v_p r_p = m v_a r_a \\implies \\frac{v_p}{v_a} = \\frac{r_a}{r_p} = \\frac{1 + e}{1 - e}$. Since kinetic energy is proportional to $v^2$: $\\frac{K_{\\max}}{K_{\\min}} = \\left(\\frac{v_p}{v_a}\\right)^2 = \\left(\\frac{1 + e}{1 - e}\\right)^2$."
)

add_q(
    "Gravitation", "Kepler's laws",
    "A satellite orbits the Earth in an elliptical orbit. At the closest distance (perigee $r_p = R$) its speed is $v_1$, and at the farthest distance (apogee $r_a = 3 R$) its speed is $v_2$. If $v_1 = 6\\text{ km/s}$, what is $v_2$?",
    [
        "$2\\text{ km/s}$",
        "$3\\text{ km/s}$",
        "$1.5\\text{ km/s}$",
        "$4\\text{ km/s}$"
    ],
    0,
    "By conservation of angular momentum about the Earth's center: $L = m v_1 r_p = m v_2 r_a \\implies v_2 = v_1 \\left(\\frac{r_p}{r_a}\\right)$. Substituting $r_p = R$, $r_a = 3 R$, and $v_1 = 6\\text{ km/s}$: $v_2 = 6 \\times \\frac{1}{3} = 2\\text{ km/s}$."
)

add_q(
    "Gravitation", "Kepler's laws",
    "According to Kepler's third law, $T^2 \\propto a^3$. If the distance between the Earth and the Sun were reduced to one-fourth of its present value, the duration of the year would become:",
    [
        "$1/8\\text{ of present year}$",
        "$1/4\\text{ of present year}$",
        "$1/2\\text{ of present year}$",
        "$1/16\\text{ of present year}$"
    ],
    0,
    "Using Kepler's third law: $\\frac{T'}{T} = \\left(\\frac{a'}{a}\\right)^{3/2}$. Given $a' = a/4$: $\\frac{T'}{T} = \\left(\\frac{1}{4}\\right)^{3/2} = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$. Thus, the year would be $1/8$ of the present year."
)

add_q(
    "Gravitation", "Kepler's laws",
    "The areal velocity of a planet revolving around the Sun in an elliptical orbit is:",
    [
        "Constant and equal to $\\frac{L}{2 m}$",
        "Constant and equal to $\\frac{L}{m}$",
        "Variable and maximum at perihelion",
        "Variable and maximum at aphelion"
    ],
    0,
    "In a time interval $dt$, the radius vector sweeps out an area $dA = \\frac{1}{2} r (r d\\theta) = \\frac{1}{2} r^2 d\\theta$. The areal velocity is $\\frac{dA}{dt} = \\frac{1}{2} r^2 \\frac{d\\theta}{dt} = \\frac{1}{2} r^2 \\omega$. Since angular momentum is $L = m r^2 \\omega$, we have $\\frac{dA}{dt} = \\frac{L}{2 m}$. Because the gravitational force is central, net torque is zero, $L$ is strictly conserved, and areal velocity is constant."
)

add_q(
    "Gravitation", "Kepler's laws",
    "A planet revolves in an elliptical orbit of semi-major axis $a$ around a star of mass $M$. If the gravitational constant $G$ suddenly decreases to $G/2$ when the planet is at its apastron distance $r_a = 1.5 a$, what is the new orbit?",
    [
        "Parabolic",
        "Hyperbolic (planet escapes)",
        "Remains elliptical",
        "Circular"
    ],
    0,
    "In the original orbit: total energy $E = -\\frac{G M m}{2 a}$. At apastron $r_a = 1.5 a$, velocity is given by $v^2 = G M \\left(\\frac{2}{r_a} - \\frac{1}{a}\\right) = G M \\left(\\frac{2}{1.5 a} - \\frac{1}{a}\\right) = G M \\left(\\frac{4}{3 a} - \\frac{1}{a}\\right) = \\frac{G M}{3 a}$. When $G$ becomes $G' = G/2$, the new potential energy is $U' = -\\frac{G' M m}{r_a} = -\\frac{(G/2) M m}{1.5 a} = -\\frac{G M m}{3 a}$. The kinetic energy is $K = \\frac{1}{2} m v^2 = \\frac{1}{2} m \\left(\\frac{G M}{3 a}\\right) = \\frac{G M m}{6 a}$. Total new energy is $E' = K + U' = \\frac{G M m}{6 a} - \\frac{G M m}{3 a} = -\\frac{G M m}{6 a} < 0$, which is still negative, so the new orbit remains bound and elliptical."
)

# Subtopic 2: Newton's law of gravitation
add_q(
    "Gravitation", "Newton's law of gravitation",
    "A thin uniform rod of length $L$ and mass $M$ lies along the $x$-axis from $x = d$ to $x = d + L$. What is the gravitational force exerted by this rod on a point mass $m$ placed at the origin $(0,0)$?",
    [
        "$\\frac{G M m}{d(d + L)}$",
        "$\\frac{G M m}{(d + L/2)^2}$",
        "$\\frac{G M m}{d^2}$",
        "$\\frac{G M m}{L(d + L)}$"
    ],
    0,
    "Linear mass density is $\\lambda = \\frac{M}{L}$. An element $dx$ at distance $x$ has mass $dm = \\frac{M}{L} dx$. The gravitational force is $dF = \\frac{G m dm}{x^2} = \\frac{G M m}{L} \\frac{dx}{x^2}$. Integrating from $x = d$ to $x = d + L$: $F = \\frac{G M m}{L} \\int_d^{d+L} \\frac{dx}{x^2} = \\frac{G M m}{L} \\left[ -\\frac{1}{x} \\right]_d^{d+L} = \\frac{G M m}{L} \\left( \\frac{1}{d} - \\frac{1}{d+L} \\right) = \\frac{G M m}{L} \\frac{L}{d(d+L)} = \\frac{G M m}{d(d+L)}$."
)

add_q(
    "Gravitation", "Newton's law of gravitation",
    "Three identical particles, each of mass $m$, are placed at the vertices of an equilateral triangle of side length $a$. What is the net gravitational force on any one of the particles?",
    [
        "$\\sqrt{3} \\frac{G m^2}{a^2}$",
        "$\\frac{G m^2}{a^2}$",
        "$2 \\frac{G m^2}{a^2}$",
        "$\\frac{\\sqrt{3}}{2} \\frac{G m^2}{a^2}$"
    ],
    0,
    "The two other particles attract the particle with forces of magnitude $F_1 = F_2 = \\frac{G m^2}{a^2}$. The angle between these two forces is $60^\\circ$. The resultant force is $F_{net} = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos 60^\\circ} = \\sqrt{F^2 + F^2 + F^2} = \\sqrt{3} F = \\sqrt{3} \\frac{G m^2}{a^2}$."
)

add_q(
    "Gravitation", "Newton's law of gravitation",
    "A spherical cavity of radius $R/2$ is scooped out from the interior of a uniform solid sphere of mass $M$ and radius $R$ such that its surface touches the surface of the sphere and passes through the center. What is the gravitational field at the center of the cavity?",
    [
        "$\\frac{G M}{2 R^2}$",
        "$\\frac{G M}{4 R^2}$",
        "$\\frac{G M}{8 R^2}$",
        "$0$"
    ],
    0,
    "By superposition, $\\vec{E}_{cavity} = \\vec{E}_{solid} - \\vec{E}_{removed}$. Inside a uniform sphere, $\\vec{E}_{solid}(r) = -\\frac{G M r}{R^3} \\hat{r}$. At the center of the cavity, $r = R/2$, so $\\vec{E}_{solid} = -\\frac{G M (R/2)}{R^3} = -\\frac{G M}{2 R^2}$. The removed sphere is symmetric about its center, so at its own center $\\vec{E}_{removed} = 0$. Therefore, $\\vec{E}_{net} = -\\frac{G M}{2 R^2}$, magnitude is $\\frac{G M}{2 R^2}$."
)

add_q(
    "Gravitation", "Newton's law of gravitation",
    "If the gravitational law were $F = \\frac{G M m}{r^n}$, what would be the relationship between the orbital period $T$ and orbital radius $r$ for a circular orbit?",
    [
        "$T^2 \\propto r^{n+1}$",
        "$T^2 \\propto r^n$",
        "$T^2 \\propto r^{n-1}$",
        "$T \\propto r^n$"
    ],
    0,
    "For a circular orbit under central force: $\\frac{m v^2}{r} = \\frac{G M m}{r^n} \\implies v^2 = \\frac{G M}{r^{n-1}}$. The orbital period is $T = \\frac{2\\pi r}{v}$. Squaring gives $T^2 = \\frac{4\\pi^2 r^2}{v^2} = \\frac{4\\pi^2 r^2}{G M / r^{n-1}} = \\frac{4\\pi^2}{G M} r^{n+1}$. Therefore, $T^2 \\propto r^{n+1}$."
)

add_q(
    "Gravitation", "Newton's law of gravitation",
    "Two lead spheres of equal radius $R$ and uniform density $\\rho$ touch each other. The gravitational attraction between them is proportional to:",
    [
        "$R^4$",
        "$R^2$",
        "$R^3$",
        "$R^6$"
    ],
    0,
    "The mass of each sphere is $M = \\frac{4}{3}\\pi R^3 \\rho \\propto R^3$. The distance between their centers when in contact is $d = 2 R$. The gravitational force is $F = \\frac{G M^2}{d^2} \\propto \\frac{(R^3)^2}{(2 R)^2} = \\frac{R^6}{4 R^2} \\propto R^4$."
)

# Subtopic 3: Gravitational potential energy
add_q(
    "Gravitation", "Gravitational potential energy",
    "What is the work required to assemble four identical point masses, each of mass $m$, at the vertices of a regular tetrahedron of edge length $a$?",
    [
        "$-6 \\frac{G m^2}{a}$",
        "$-4 \\frac{G m^2}{a}$",
        "$-12 \\frac{G m^2}{a}$",
        "$-\\sqrt{6} \\frac{G m^2}{a}$"
    ],
    0,
    "A regular tetrahedron has 4 vertices and $\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$ edges. All pairs of vertices are separated by the exact same distance $a$. The total gravitational potential energy of the configuration is $U = \\sum_{i < j} \\left(-\\frac{G m^2}{r_{ij}}\\right) = -6 \\frac{G m^2}{a}$. The work done by an external agent without change in kinetic energy is $W_{ext} = \\Delta U = U_f - 0 = -6 \\frac{G m^2}{a}$."
)

add_q(
    "Gravitation", "Gravitational potential energy",
    "What is the gravitational self-energy of a uniform solid sphere of mass $M$ and radius $R$?",
    [
        "$-\\frac{3}{5} \\frac{G M^2}{R}$",
        "$-\\frac{1}{2} \\frac{G M^2}{R}$",
        "$-\\frac{3}{4} \\frac{G M^2}{R}$",
        "$-\\frac{2}{5} \\frac{G M^2}{R}$"
    ],
    0,
    "Consider assembling the sphere by bringing spherical shells of thickness $dr$ from infinity. When radius is $r$, enclosed mass is $m(r) = M \\frac{r^3}{R^3}$. Shell mass is $dm = \\frac{3 M}{R^3} r^2 dr$. Potential energy increment is $dU = -\\frac{G m(r) dm}{r} = -\\frac{G}{r} \\left(\\frac{M r^3}{R^3}\\right) \\left(\\frac{3 M r^2 dr}{R^3}\\right) = -\\frac{3 G M^2}{R^6} r^4 dr$. Integrating from $r = 0$ to $R$: $U = -\\frac{3 G M^2}{R^6} \\frac{R^5}{5} = -\\frac{3}{5} \\frac{G M^2}{R}$."
)

add_q(
    "Gravitation", "Gravitational potential energy",
    "A body of mass $m$ is lifted vertically from the Earth's surface ($R$) to an altitude $h = 2 R$. The change in gravitational potential energy is:",
    [
        "$\\frac{2}{3} m g R$",
        "$\\frac{1}{2} m g R$",
        "$2 m g R$",
        "$\\frac{3}{4} m g R$"
    ],
    0,
    "Initial potential energy at surface: $U_i = -\\frac{G M m}{R}$. Final potential energy at $r = R + h = 3 R$: $U_f = -\\frac{G M m}{3 R}$. Change in potential energy: $\\Delta U = U_f - U_i = -\\frac{G M m}{3 R} - \\left(-\\frac{G M m}{R}\\right) = \\frac{2}{3} \\frac{G M m}{R}$. Since $g = \\frac{G M}{R^2}$, we have $\\frac{G M m}{R} = m g R$. Therefore, $\\Delta U = \\frac{2}{3} m g R$."
)

add_q(
    "Gravitation", "Gravitational potential energy",
    "What is the gravitational potential at the center of a uniform solid sphere of mass $M$ and radius $R$?",
    [
        "$-\\frac{3}{2} \\frac{G M}{R}$",
        "$-\\frac{G M}{R}$",
        "$-\\frac{1}{2} \\frac{G M}{R}$",
        "$0$"
    ],
    0,
    "The potential inside a solid sphere at distance $r \\le R$ is $V(r) = -\\frac{G M}{2 R^3} (3 R^2 - r^2)$. At the center $r = 0$: $V(0) = -\\frac{G M}{2 R^3}(3 R^2) = -\\frac{3}{2} \\frac{G M}{R} = 1.5 V_{surface}$."
)

add_q(
    "Gravitation", "Gravitational potential energy",
    "A tunnel is dug along a diameter through the Earth. A particle of mass $m$ is dropped from rest into the tunnel from the surface. Assuming uniform density, what is the speed of the particle as it passes through the center of the Earth?",
    [
        "$\\sqrt{g R}$",
        "$\\sqrt{2 g R}$",
        "$\\sqrt{g R / 2}$",
        "$2 \\sqrt{g R}$"
    ],
    0,
    "The potential difference between the surface and the center is $V_{surface} - V_{center} = -\\frac{G M}{R} - \\left(-\\frac{3}{2} \\frac{G M}{R}\\right) = \\frac{1}{2} \\frac{G M}{R} = \\frac{1}{2} g R$. By energy conservation: $\\frac{1}{2} m v^2 = m (V_{surface} - V_{center}) = \\frac{1}{2} m g R \\implies v^2 = g R \\implies v = \\sqrt{g R}$."
)

# Subtopic 4: Escape velocity
add_q(
    "Gravitation", "Escape velocity",
    "A projectile is fired vertically upward from the surface of the Earth with speed $v = k v_e$, where $v_e = \\sqrt{2 g R}$ is the escape velocity and $k < 1$. What is the maximum height $h$ reached above the surface?",
    [
        "$\\frac{k^2 R}{1 - k^2}$",
        "$\\frac{k R}{1 - k}$",
        "$\\frac{k^2 R}{1 + k^2}$",
        "$k^2 R$"
    ],
    0,
    "By conservation of energy: $\\frac{1}{2} m v^2 - \\frac{G M m}{R} = -\\frac{G M m}{R + h}$. Substitute $v^2 = k^2 v_e^2 = 2 k^2 \\frac{G M}{R}$: $k^2 \\frac{G M m}{R} - \\frac{G M m}{R} = -\\frac{G M m}{R + h} \\implies \\frac{G M m}{R}(1 - k^2) = \\frac{G M m}{R + h} \\implies R + h = \\frac{R}{1 - k^2} \\implies h = \\frac{R}{1 - k^2} - R = \\frac{k^2 R}{1 - k^2}$."
)

add_q(
    "Gravitation", "Escape velocity",
    "The escape speed from a planet of mass $M$ and radius $R$ is $v_e$. If a spaceship is launched from the planet's surface with speed $2 v_e$, what is its speed at an infinite distance from the planet?",
    [
        "$\\sqrt{3} v_e$",
        "$v_e$",
        "$\\sqrt{5} v_e$",
        "$2 v_e$"
    ],
    0,
    "By conservation of mechanical energy: $\\frac{1}{2} m v_0^2 - \\frac{G M m}{R} = \\frac{1}{2} m v_\\infty^2 - 0$. Since $\\frac{G M m}{R} = \\frac{1}{2} m v_e^2$: $\\frac{1}{2} m (2 v_e)^2 - \\frac{1}{2} m v_e^2 = \\frac{1}{2} m v_\\infty^2 \\implies 4 v_e^2 - v_e^2 = v_\\infty^2 \\implies v_\\infty = \\sqrt{3} v_e$."
)

add_q(
    "Gravitation", "Escape velocity",
    "A planet has twice the radius of the Earth and four times the mean density of the Earth. What is the ratio of the escape velocity from this planet to that from the Earth?",
    [
        "$4$",
        "$2\\sqrt{2}$",
        "$2$",
        "$8$"
    ],
    0,
    "Escape velocity is $v_e = \\sqrt{\\frac{2 G M}{R}}$. Expressing mass in terms of density: $M = \\frac{4}{3}\\pi R^3 \\rho$, so $v_e = \\sqrt{\\frac{2 G (4/3 \\pi R^3 \\rho)}{R}} = R \\sqrt{\\frac{8\\pi G \\rho}{3}} \\propto R \\sqrt{\\rho}$. Given $R_p = 2 R_E$ and $\\rho_p = 4 \\rho_E$: $\\frac{v_{e,p}}{v_{e,E}} = \\left(\\frac{R_p}{R_E}\\right) \\sqrt{\\frac{\\rho_p}{\\rho_E}} = 2 \\times \\sqrt{4} = 2 \\times 2 = 4$."
)

add_q(
    "Gravitation", "Escape velocity",
    "A black hole is formed when the escape velocity from its surface equals the speed of light $c$. What is the Schwarzschild radius $R_s$ for a mass $M$?",
    [
        "$\\frac{2 G M}{c^2}$",
        "$\\frac{G M}{c^2}$",
        "$\\frac{G M}{2 c^2}$",
        "$\\frac{4 G M}{c^2}$"
    ],
    0,
    "Setting escape speed $v_e = \\sqrt{\\frac{2 G M}{R}} = c$: squaring gives $\\frac{2 G M}{R} = c^2 \\implies R_s = \\frac{2 G M}{c^2}$."
)

add_q(
    "Gravitation", "Escape velocity",
    "A particle is projected from the center of the Earth through a straight frictionless tunnel. What is the minimum velocity required for the particle to escape from the Earth?",
    [
        "$\\sqrt{3 g R}$",
        "$\\sqrt{2 g R}$",
        "$\\sqrt{g R}$",
        "$\\sqrt{5 g R}$"
    ],
    0,
    "The potential at the center is $V(0) = -\\frac{3}{2} \\frac{G M}{R} = -\\frac{3}{2} g R$. At infinity, potential is zero and minimum speed is zero. By conservation of energy: $\\frac{1}{2} m v^2 + m V(0) = 0 \\implies \\frac{1}{2} m v^2 = \\frac{3}{2} m g R \\implies v^2 = 3 g R \\implies v = \\sqrt{3 g R}$."
)

# Subtopic 5: Acceleration due to gravity (variation with height, depth, latitude)
add_q(
    "Gravitation", "Acceleration due to gravity (variation with height, depth, latitude)",
    "At what height $h$ above the Earth's surface does the acceleration due to gravity become $g/9$ (where $g$ is the surface value and $R$ is Earth's radius)?",
    [
        "$2 R$",
        "$3 R$",
        "$\\sqrt{3} R$",
        "$8 R$"
    ],
    0,
    "Acceleration at height $h$ is $g(h) = g \\frac{R^2}{(R + h)^2}$. Setting $g(h) = g/9$: $\\frac{R^2}{(R + h)^2} = \\frac{1}{9} \\implies \\frac{R}{R + h} = \\frac{1}{3} \\implies R + h = 3 R \\implies h = 2 R$."
)

add_q(
    "Gravitation", "Acceleration due to gravity (variation with height, depth, latitude)",
    "If the acceleration due to gravity at depth $d$ below the Earth's surface equals that at height $h$ above the Earth's surface ($h \\ll R$), what is the relationship between $d$ and $h$?",
    [
        "$d = 2 h$",
        "$d = h$",
        "$d = h / 2$",
        "$d = 4 h$"
    ],
    0,
    "For small height $h \\ll R$: $g(h) = g \\left(1 - \\frac{2 h}{R}\\right)$. For depth $d$: $g(d) = g \\left(1 - \\frac{d}{R}\\right)$. Equating the two: $1 - \\frac{2 h}{R} = 1 - \\frac{d}{R} \\implies d = 2 h$."
)

add_q(
    "Gravitation", "Acceleration due to gravity (variation with height, depth, latitude)",
    "Due to Earth's rotation with angular velocity $\\omega$, the apparent acceleration due to gravity $g'$ at latitude $\\lambda$ is given by:",
    [
        "$g' = g - \\omega^2 R \\cos^2\\lambda$",
        "$g' = g - \\omega^2 R \\sin^2\\lambda$",
        "$g' = g + \\omega^2 R \\cos^2\\lambda$",
        "$g' = g - \\omega^2 R \\cos\\lambda$"
    ],
    0,
    "The centrifugal acceleration at latitude $\\lambda$ has magnitude $\\omega^2 r = \\omega^2 (R \\cos\\lambda)$ directed outward perpendicular to the rotation axis. Its component along the local vertical is $\\omega^2 R \\cos\\lambda \\cos\\lambda = \\omega^2 R \\cos^2\\lambda$. Thus the effective gravity is $g' = g - \\omega^2 R \\cos^2\\lambda$."
)

add_q(
    "Gravitation", "Acceleration due to gravity (variation with height, depth, latitude)",
    "What should be the angular velocity $\\omega$ of the Earth so that a body at the equator appears completely weightless? (Take $g = 10\\text{ m/s}^2, R = 6400\\text{ km}$)",
    [
        "$\\frac{1}{800}\\text{ rad/s}$",
        "$\\frac{1}{400}\\text{ rad/s}$",
        "$\\frac{1}{1600}\\text{ rad/s}$",
        "$\\frac{1}{200}\\text{ rad/s}$"
    ],
    0,
    "At the equator $\\lambda = 0^\\circ$, so $g' = g - \\omega^2 R = 0 \\implies \\omega = \\sqrt{\\frac{g}{R}}$. Substituting $g = 10\\text{ m/s}^2$ and $R = 6.4 \\times 10^6\\text{ m}$: $\\omega = \\sqrt{\\frac{10}{6.4 \\times 10^6}} = \\sqrt{\\frac{1}{640000}} = \\frac{1}{800}\\text{ rad/s} = 1.25 \\times 10^{-3}\\text{ rad/s}$."
)

add_q(
    "Gravitation", "Acceleration due to gravity (variation with height, depth, latitude)",
    "If the Earth's radius shrinks by $1\\%$ with mass remaining constant, the acceleration due to gravity on its surface would:",
    [
        "Increase by $2\\%$",
        "Decrease by $2\\%$",
        "Increase by $1\\%$",
        "Decrease by $1\\%$"
    ],
    0,
    "Surface gravity is $g = \\frac{G M}{R^2}$. For small fractional changes: $\\frac{\\Delta g}{g} \\approx -2 \\frac{\\Delta R}{R}$. Given $\\frac{\\Delta R}{R} = -1\\%$: $\\frac{\\Delta g}{g} \\approx -2(-1\\%) = +2\\%$. Hence, $g$ increases by approximately $2\\%$."
)

# Subtopic 6: Orbital velocity and satellite motion
add_q(
    "Gravitation", "Orbital velocity and satellite motion",
    "A satellite of mass $m$ orbits the Earth in a circular orbit of radius $r$. What is the ratio of its kinetic energy $K$, potential energy $U$, and total energy $E$?",
    [
        "$K : U : E = 1 : -2 : -1$",
        "$K : U : E = 1 : 2 : 1$",
        "$K : U : E = -1 : 2 : 1$",
        "$K : U : E = 2 : -1 : 1$"
    ],
    0,
    "Orbital velocity is $v = \\sqrt{\\frac{G M}{r}}$. Kinetic energy is $K = \\frac{1}{2} m v^2 = \\frac{G M m}{2 r}$. Gravitational potential energy is $U = -\\frac{G M m}{r} = -2 K$. Total mechanical energy is $E = K + U = -\\frac{G M m}{2 r} = -K$. Thus: $K : U : E = 1 : -2 : -1$."
)

add_q(
    "Gravitation", "Orbital velocity and satellite motion",
    "A geostationary satellite orbits the Earth at height $h \\approx 36000\\text{ km}$ above the equator. Which of the following statements is strictly correct?",
    [
        "Its orbital plane must coincide with the Earth's equatorial plane and its period is 24 hours from west to east",
        "It can orbit in any plane as long as its period is 24 hours",
        "It moves from east to west with a period of 12 hours",
        "Its altitude is independent of the mass of the Earth"
    ],
    0,
    "A geostationary satellite must remain fixed relative to a point on the Earth's surface. This requires: (1) Circular orbit in the equatorial plane; (2) Rotation direction same as Earth (west to east); (3) Period equal to Earth's sidereal rotational period ($23\\text{ h } 56\\text{ min } 4\\text{ s} \\approx 24\\text{ hours}$)."
)

add_q(
    "Gravitation", "Orbital velocity and satellite motion",
    "What is the minimum energy required to transfer a satellite of mass $m$ from a circular orbit of radius $R_1$ to a circular orbit of radius $R_2$ ($R_2 > R_1$) around Earth of mass $M$?",
    [
        "$\\frac{G M m}{2} \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$",
        "$G M m \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$",
        "$\\frac{G M m}{2} \\left( \\frac{1}{R_2} - \\frac{1}{R_1} \\right)$",
        "$\\frac{G M m}{4} \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$"
    ],
    0,
    "The total mechanical energy in a circular orbit of radius $r$ is $E(r) = -\\frac{G M m}{2 r}$. The energy required to change orbit is $\\Delta E = E(R_2) - E(R_1) = -\\frac{G M m}{2 R_2} - \\left(-\\frac{G M m}{2 R_1}\\right) = \\frac{G M m}{2}\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$."
)

add_q(
    "Gravitation", "Orbital velocity and satellite motion",
    "A satellite orbiting near the Earth's surface with speed $v_0$ is given an additional tangential impulse such that its speed becomes $\\sqrt{1.5} v_0$. What is the eccentricity of the resulting orbit?",
    [
        "$0.5$",
        "$0.25$",
        "$0.707$",
        "$0.33$"
    ],
    0,
    "At perigee $r_p = R$, velocity is $v_p = \\sqrt{1.5} v_0$. Since $v_0^2 = \\frac{G M}{R}$, we have $v_p^2 = 1.5 \\frac{G M}{R}$. In an elliptical orbit, $v_p^2 = \\frac{G M}{a} \\left(\\frac{1 + e}{1 - e}\\right)$ and $r_p = a(1 - e) = R \\implies a = \\frac{R}{1 - e}$. Then $v_p^2 = \\frac{G M}{R}(1 - e)\\frac{1 + e}{1 - e} = \\frac{G M}{R}(1 + e)$. Equating: $\\frac{G M}{R}(1 + e) = 1.5 \\frac{G M}{R} \\implies 1 + e = 1.5 \\implies e = 0.5$."
)

add_q(
    "Gravitation", "Orbital velocity and satellite motion",
    "Due to atmospheric friction, a satellite in a low Earth orbit gradually loses mechanical energy. What happens to its orbital radius $r$ and orbital speed $v$?",
    [
        "$r$ decreases and $v$ increases",
        "$r$ decreases and $v$ decreases",
        "$r$ increases and $v$ increases",
        "$r$ increases and $v$ decreases"
    ],
    0,
    "Total energy is $E = -\\frac{G M m}{2 r}$. As friction removes energy, $E$ becomes more negative, which means radius $r$ must decrease (satellite spirals inward). Since orbital speed is $v = \\sqrt{\\frac{G M}{r}}$, as $r$ decreases, the speed $v$ actually increases. This counter-intuitive effect is known as the satellite paradox."
)

# ==========================================
# CHAPTER 7: Properties of Solids and Liquids (5 subtopics * 5 = 25 questions)
# ==========================================

# Subtopic 1: Elasticity (Hooke's law, Young's modulus)
add_q(
    "Properties of Solids and Liquids", "Elasticity (Hooke's law, Young's modulus)",
    "A heavy uniform wire of length $L$, cross-sectional area $A$, mass $M$, and Young's modulus $Y$ hangs vertically under its own weight. What is the total elongation $\\Delta L$ of the wire?",
    [
        "$\\frac{M g L}{2 A Y}$",
        "$\\frac{M g L}{A Y}$",
        "$\\frac{M g L}{3 A Y}$",
        "$\\frac{2 M g L}{A Y}$"
    ],
    0,
    "Let $y$ be the distance measured from the bottom free end. The tension at distance $y$ is the weight of the segment below it: $T(y) = \\frac{M y}{L} g$. The elongation of element $dy$ is $d(\\Delta L) = \\frac{T(y) dy}{A Y} = \\frac{M g y dy}{A Y L}$. Integrating from $y = 0$ to $L$: $\\Delta L = \\frac{M g}{A Y L} \\int_0^L y dy = \\frac{M g L^2}{2 A Y L} = \\frac{M g L}{2 A Y}$."
)

add_q(
    "Properties of Solids and Liquids", "Elasticity (Hooke's law, Young's modulus)",
    "What is the elastic energy density (energy per unit volume) stored in a stretched wire of Young's modulus $Y$ subject to tensile stress $\\sigma$?",
    [
        "$\\frac{\\sigma^2}{2 Y}$",
        "$\\frac{\\sigma^2}{Y}$",
        "$\\frac{1}{2} Y \\sigma^2$",
        "$\\frac{2 \\sigma^2}{Y}$"
    ],
    0,
    "Elastic energy density is $u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain}$. By Hooke's law, $\\text{strain} = \\frac{\\sigma}{Y}$. Therefore, $u = \\frac{1}{2} \\sigma \\left(\\frac{\\sigma}{Y}\\right) = \\frac{\\sigma^2}{2 Y}$."
)

add_q(
    "Properties of Solids and Liquids", "Elasticity (Hooke's law, Young's modulus)",
    "The Poisson's ratio $\\nu$ of a material relates Young's modulus $Y$ and bulk modulus $B$ through $Y = 3 B (1 - 2\\nu)$. What is the theoretical upper limit of Poisson's ratio for an isotropic material?",
    [
        "$0.5$",
        "$1.0$",
        "$0.25$",
        "$0.33$"
    ],
    0,
    "For stability, the bulk modulus $B > 0$ and Young's modulus $Y > 0$. From $Y = 3 B (1 - 2\\nu)$, we must have $1 - 2\\nu > 0 \\implies \\nu < 0.5$. When $\\nu = 0.5$, the material is perfectly incompressible ($B \\to \\infty$, zero fractional volume change $\\frac{\\Delta V}{V} = (1 - 2\\nu)\\epsilon = 0$)."
)

add_q(
    "Properties of Solids and Liquids", "Elasticity (Hooke's law, Young's modulus)",
    "A steel wire of length $2\\text{ m}$ and cross-sectional area $1\\text{ mm}^2$ is clamped rigidly between two fixed walls at $30^\\circ\\text{C}$. If the temperature drops to $10^\\circ\\text{C}$, what is the tension developed in the wire? (Given $\\alpha = 1.2 \\times 10^{-5}\\text{ K}^{-1}$, $Y = 2 \\times 10^{11}\\text{ N/m}^2$)",
    [
        "$48\\text{ N}$",
        "$96\\text{ N}$",
        "$24\\text{ N}$",
        "$120\\text{ N}$"
    ],
    0,
    "Thermal strain prevented by the rigid walls is $\\epsilon = \\alpha \\Delta T = 1.2 \\times 10^{-5} \\times (30 - 10) = 2.4 \\times 10^{-4}$. Thermal stress is $\\sigma = Y \\epsilon = 2 \\times 10^{11} \\times 2.4 \\times 10^{-4} = 4.8 \\times 10^7\\text{ N/m}^2$. The tension is $T = \\sigma A = (4.8 \\times 10^7\\text{ N/m}^2) \\times (10^{-6}\\text{ m}^2) = 48\\text{ N}$."
)

add_q(
    "Properties of Solids and Liquids", "Elasticity (Hooke's law, Young's modulus)",
    "Two wires of the same material have lengths in the ratio $1 : 2$ and radii in the ratio $2 : 1$. If both are stretched by equal forces, what is the ratio of their elongations $\\Delta L_1 : \\Delta L_2$?",
    [
        "$1 : 8$",
        "$1 : 4$",
        "$1 : 2$",
        "$8 : 1$"
    ],
    0,
    "Elongation is $\\Delta L = \\frac{F L}{A Y} = \\frac{F L}{\\pi r^2 Y} \\propto \\frac{L}{r^2}$. Taking the ratio: $\\frac{\\Delta L_1}{\\Delta L_2} = \\left(\\frac{L_1}{L_2}\\right) \\left(\\frac{r_2}{r_1}\\right)^2 = \\left(\\frac{1}{2}\\right) \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$."
)

# Subtopic 2: Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)
add_q(
    "Properties of Solids and Liquids", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    "Water flows through a horizontal Venturi meter where the cross-sectional area changes from $A_1$ to $A_2$ ($A_1 > A_2$). The pressure difference between the two sections is $h\\rho g$. The volume flow rate $Q$ is:",
    [
        "$A_1 A_2 \\sqrt{\\frac{2 g h}{A_1^2 - A_2^2}}$",
        "$A_1 A_2 \\sqrt{\\frac{2 g h}{A_1^2 + A_2^2}}$",
        "$(A_1 - A_2) \\sqrt{2 g h}$",
        "$\\frac{A_1 A_2}{A_1 + A_2} \\sqrt{2 g h}$"
    ],
    0,
    "By continuity: $v_1 A_1 = v_2 A_2 = Q \\implies v_1 = Q/A_1, v_2 = Q/A_2$. By Bernoulli's equation: $P_1 + \\frac{1}{2} \\rho v_1^2 = P_2 + \\frac{1}{2} \\rho v_2^2 \\implies P_1 - P_2 = \\rho g h = \\frac{1}{2} \\rho Q^2 \\left(\\frac{1}{A_2^2} - \\frac{1}{A_1^2}\\right) = \\frac{1}{2} \\rho Q^2 \\left(\\frac{A_1^2 - A_2^2}{A_1^2 A_2^2}\\right)$. Solving for $Q$: $Q = A_1 A_2 \\sqrt{\\frac{2 g h}{A_1^2 - A_2^2}}$."
)

add_q(
    "Properties of Solids and Liquids", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    "A small spherical steel ball of radius $r$ falls with terminal velocity $v_t$ through a viscous liquid. If another ball of the same material has radius $2 r$, what is its terminal velocity in the same liquid?",
    [
        "$4 v_t$",
        "$2 v_t$",
        "$8 v_t$",
        "$\\sqrt{2} v_t$"
    ],
    0,
    "By Stokes' law, terminal velocity is $v_t = \\frac{2 r^2 (\\rho - \\sigma) g}{9 \\eta} \\propto r^2$. If the radius is doubled ($r' = 2 r$), terminal velocity scales as $(2)^2 = 4$. Thus $v_t' = 4 v_t$."
)

add_q(
    "Properties of Solids and Liquids", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    "A large open tank filled with water of depth $H$ has a small hole punctured in its side wall at depth $h$ below the water surface. At what depth $h$ should the hole be punched so that the water jet strikes the ground at maximum horizontal distance from the base?",
    [
        "$H/2$",
        "$H/4$",
        "$3H/4$",
        "$H/3$"
    ],
    0,
    "Efflux speed is $v = \\sqrt{2 g h}$. The time to fall vertical distance $H - h$ to the ground is $t = \\sqrt{\\frac{2(H - h)}{g}}$. The horizontal range is $R = v t = \\sqrt{2 g h} \\sqrt{\\frac{2(H - h)}{g}} = 2 \\sqrt{h(H - h)}$. To maximize $R$, we maximize the product $h(H - h)$, which occurs at $h = H/2$."
)

add_q(
    "Properties of Solids and Liquids", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    "A U-tube contains mercury (density $\\rho_m$). In one arm, water of density $\\rho_w$ is poured to a height $h_w$. The height $h_m$ by which the mercury column rises above its initial level in the other arm is:",
    [
        "$\\frac{\\rho_w h_w}{2 \\rho_m}$",
        "$\\frac{\\rho_w h_w}{\\rho_m}$",
        "$\\frac{2 \\rho_w h_w}{\\rho_m}$",
        "$\\frac{\\rho_m h_w}{2 \\rho_w}$"
    ],
    0,
    "When mercury rises by $h_m$ in the right arm, it drops by $h_m$ in the left arm. The difference in mercury levels between the two arms is $2 h_m$. Hydrostatic pressure balance at the lower mercury interface requires $\\rho_m g (2 h_m) = \\rho_w g h_w \\implies h_m = \\frac{\\rho_w h_w}{2 \\rho_m}$."
)

add_q(
    "Properties of Solids and Liquids", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    "According to Poiseuille's formula, the volume rate of flow $Q$ of a viscous liquid of viscosity $\\eta$ through a pipe of radius $R$ and length $L$ under pressure difference $\\Delta P$ is:",
    [
        "$Q = \\frac{\\pi \\Delta P R^4}{8 \\eta L}$",
        "$Q = \\frac{\\pi \\Delta P R^2}{8 \\eta L}$",
        "$Q = \\frac{8 \\eta L}{\\pi \\Delta P R^4}$",
        "$Q = \\frac{\\pi \\Delta P R^3}{4 \\eta L}$"
    ],
    0,
    "Poiseuille's law states that for steady laminar flow of an incompressible Newtonian fluid through a cylindrical tube of radius $R$ and length $L$, $Q = \\frac{\\pi \\Delta P R^4}{8 \\eta L}$."
)

# Subtopic 3: Surface tension, surface energy, and capillarity
add_q(
    "Properties of Solids and Liquids", "Surface tension, surface energy, and capillarity",
    "What is the excess pressure inside a spherical soap bubble of radius $R$ in air if the surface tension of the soap solution is $T$?",
    [
        "$\\frac{4 T}{R}$",
        "$\\frac{2 T}{R}$",
        "$\\frac{T}{R}$",
        "$\\frac{8 T}{R}$"
    ],
    0,
    "A soap bubble has two free liquid-air interfaces (an inner surface and an outer surface). Each interface contributes $\\frac{2 T}{R}$ to the pressure difference. Therefore, total excess pressure is $\\Delta P = \\frac{2 T}{R} + \\frac{2 T}{R} = \\frac{4 T}{R}$."
)

add_q(
    "Properties of Solids and Liquids", "Surface tension, surface energy, and capillarity",
    "Two soap bubbles of radii $R_1$ and $R_2$ ($R_1 > R_2$) coalesce isothermally under vacuum to form a single larger bubble of radius $R$. Assuming surface tension $T$ is constant, what is $R$?",
    [
        "$\\sqrt{R_1^2 + R_2^2}$",
        "$\\sqrt[3]{R_1^3 + R_2^3}$",
        "$R_1 + R_2$",
        "$\\frac{R_1 R_2}{R_1 + R_2}$"
    ],
    0,
    "In vacuum, the internal pressure is solely the excess pressure: $P = \\frac{4 T}{r}$. Number of moles of gas inside is proportional to $P V$: $P V = \\left(\\frac{4 T}{r}\\right) \\left(\\frac{4}{3}\\pi r^3\\right) = \\frac{16\\pi T}{3} r^2$. Under isothermal coalescence, total number of moles is conserved: $n_1 + n_2 = n \\implies r_1^2 + r_2^2 = R^2 \\implies R = \\sqrt{R_1^2 + R_2^2}$."
)

add_q(
    "Properties of Solids and Liquids", "Surface tension, surface energy, and capillarity",
    "A glass capillary tube of radius $r$ is dipped vertically into water of density $\\rho$ and surface tension $T$. The water rises to a height $h$. What is the heat released during the capillary rise process? (Contact angle $\\theta = 0^\\circ$)",
    [
        "$\\pi r^2 \\rho g h^2 / 2$",
        "$\\pi r^2 \\rho g h^2$",
        "$2\\pi r^2 \\rho g h^2$",
        "$0$"
    ],
    0,
    "The total work done by surface tension pulling water up is $W = F \\cdot h = (2\\pi r T) h$. Since $h = \\frac{2 T}{\\rho g r} \\implies 2\\pi r T = \\pi r^2 \\rho g h$, we have $W = \\pi r^2 \\rho g h^2$. The increase in gravitational potential energy of the water column (whose center of mass rises to $h/2$) is $\\Delta U = m g \\frac{h}{2} = (\\pi r^2 h \\rho) g \\frac{h}{2} = \\frac{1}{2} \\pi r^2 \\rho g h^2$. By the first law of thermodynamics, heat dissipated is $Q = W - \\Delta U = \\pi r^2 \\rho g h^2 - \\frac{1}{2} \\pi r^2 \\rho g h^2 = \\frac{1}{2} \\pi r^2 \\rho g h^2$."
)

add_q(
    "Properties of Solids and Liquids", "Surface tension, surface energy, and capillarity",
    "If a capillary tube is tilted at an angle of $60^\\circ$ to the vertical, the length of the water column inside the tube will be:",
    [
        "$2 h$",
        "$h / 2$",
        "$\\sqrt{3} h$",
        "$h$"
    ],
    0,
    "The vertical height $h$ to which the liquid rises depends only on the equilibrium between surface tension and gravity: $h = \\frac{2 T \\cos\\theta}{\\rho g r}$. If the tube is inclined at angle $\\alpha$ with the vertical, the length $l$ along the tube must satisfy $l \\cos\\alpha = h \\implies l = \\frac{h}{\\cos\\alpha}$. With $\\alpha = 60^\\circ$: $l = \\frac{h}{\\cos 60^\\circ} = \\frac{h}{1/2} = 2 h$."
)

add_q(
    "Properties of Solids and Liquids", "Surface tension, surface energy, and capillarity",
    "A large number $N = 1000$ identical spherical droplets of mercury, each of radius $r$, coalesce to form a single spherical drop of radius $R$. If surface tension is $T$, the energy released in the process is:",
    [
        "$4\\pi T r^2 (N - N^{2/3})$",
        "$4\\pi T r^2 (N - 1)$",
        "$4\\pi T r^2 N^{1/3}$",
        "$4\\pi T R^2 (N - 1)$"
    ],
    0,
    "By volume conservation: $N \\left(\\frac{4}{3}\\pi r^3\\right) = \\frac{4}{3}\\pi R^3 \\implies R = N^{1/3} r$. Initial surface area: $A_i = N (4\\pi r^2)$. Final surface area: $A_f = 4\\pi R^2 = 4\\pi (N^{1/3} r)^2 = 4\\pi r^2 N^{2/3}$. Energy released is $\\Delta U = T (A_i - A_f) = 4\\pi T r^2 (N - N^{2/3})$."
)

# Subtopic 4: Thermal expansion and calorimetry
add_q(
    "Properties of Solids and Liquids", "Thermal expansion and calorimetry",
    "A bimetallic strip is formed by welding together two thin metal strips of thickness $d$ each, with coefficients of linear expansion $\\alpha_1$ and $\\alpha_2$ ($\\alpha_1 > \\alpha_2$). If the temperature increases by $\\Delta T$, the radius of curvature $R$ of the bent strip is approximately:",
    [
        "$\\frac{d}{(\\alpha_1 - \\alpha_2) \\Delta T}$",
        "$\\frac{2 d}{(\\alpha_1 - \\alpha_2) \\Delta T}$",
        "$\\frac{d}{2 (\\alpha_1 - \\alpha_2) \\Delta T}$",
        "$\\frac{(\\alpha_1 - \\alpha_2) d}{\\Delta T}$"
    ],
    0,
    "Let $\\theta$ be the angle subtended by the bent strip. Outer strip length is $(R + d/2)\\theta = L_0(1 + \\alpha_1 \\Delta T)$. Inner strip length is $(R - d/2)\\theta = L_0(1 + \\alpha_2 \\Delta T)$. Subtracting the two: $d \\theta = L_0 (\\alpha_1 - \\alpha_2) \\Delta T$. Since $L_0 \\approx R \\theta$: $d \\theta = R \\theta (\\alpha_1 - \\alpha_2) \\Delta T \\implies R = \\frac{d}{(\\alpha_1 - \\alpha_2) \\Delta T}$."
)

add_q(
    "Properties of Solids and Liquids", "Thermal expansion and calorimetry",
    "An ice cube of mass $10\\text{ g}$ at $0^\\circ\\text{C}$ is placed into $100\\text{ g}$ of water at $20^\\circ\\text{C}$ in a calorimeter of negligible heat capacity. What is the final equilibrium temperature? (Latent heat of fusion $L_f = 80\\text{ cal/g}$, specific heat of water $c = 1\\text{ cal/g}^\\circ\\text{C}$)",
    [
        "$10.9^\\circ\\text{C}$",
        "$0^\\circ\\text{C}$",
        "$5.5^\\circ\\text{C}$",
        "$15^\\circ\\text{C}$"
    ],
    0,
    "Heat required to melt all ice: $Q_{melt} = m_{ice} L_f = 10 \\times 80 = 800\\text{ cal}$. Heat released by water cooling from $20^\\circ\\text{C}$ to $0^\\circ\\text{C}$: $Q_{cool} = 100 \\times 1 \\times 20 = 2000\\text{ cal}$. Since $2000 > 800$, all ice melts completely and surplus heat remains: $Q_{surplus} = 2000 - 800 = 1200\\text{ cal}$. Total mass of liquid water is $100 + 10 = 110\\text{ g}$. Final temperature is $T = \\frac{1200\\text{ cal}}{110\\text{ g} \\times 1\\text{ cal/g}^\\circ\\text{C}} = \\frac{120}{11} \\approx 10.9^\\circ\\text{C}$."
)

add_q(
    "Properties of Solids and Liquids", "Thermal expansion and calorimetry",
    "A pendulum clock has an Invar rod with coefficient of linear thermal expansion $\\alpha = 1.2 \\times 10^{-6}\\text{ K}^{-1}$. If the clock keeps correct time at $20^\\circ\\text{C}$, how many seconds will it lose per day at $40^\\circ\\text{C}$?",
    [
        "$1.04\\text{ s}$",
        "$2.07\\text{ s}$",
        "$0.52\\text{ s}$",
        "$4.15\\text{ s}$"
    ],
    0,
    "The period of pendulum is $T = 2\\pi \\sqrt{L/g} \\implies \\frac{\\Delta T}{T} = \\frac{1}{2} \\frac{\\Delta L}{L} = \\frac{1}{2} \\alpha \\Delta \\theta$. Time lost per day ($86400\\text{ s}$) is $\\Delta t = \\frac{1}{2} \\alpha \\Delta \\theta \\times 86400 = \\frac{1}{2} (1.2 \\times 10^{-6}) (20) \\times 86400 = 1.2 \\times 10^{-5} \\times 86400 = 1.0368 \\approx 1.04\\text{ s}$."
)

add_q(
    "Properties of Solids and Liquids", "Thermal expansion and calorimetry",
    "A solid body of mass $m$ has a temperature-dependent heat capacity $C(T) = a T^3$. What is the total heat required to warm the body from $T_1$ to $T_2$?",
    [
        "$\\frac{a}{4} (T_2^4 - T_1^4)$",
        "$\\frac{a}{3} (T_2^3 - T_1^3)$",
        "$a (T_2^4 - T_1^4)$",
        "$\\frac{a}{2} (T_2^2 - T_1^2)$"
    ],
    0,
    "Heat required is $Q = \\int_{T_1}^{T_2} C(T) dT = \\int_{T_1}^{T_2} a T^3 dT = \\left[ \\frac{a T^4}{4} \\right]_{T_1}^{T_2} = \\frac{a}{4} (T_2^4 - T_1^4)$."
)

add_q(
    "Properties of Solids and Liquids", "Thermal expansion and calorimetry",
    "A vessel contains a liquid of density $\\rho$ and cubical expansion coefficient $\\gamma_l$. The vessel has cubical expansion coefficient $\\gamma_s$. An object floats in the liquid with fraction $f$ of its volume submerged. For $f$ to remain constant upon heating, the required condition is:",
    [
        "$\\gamma_l = \\gamma_{object}$",
        "$\\gamma_l = \\gamma_s$",
        "$\\gamma_{object} = \\gamma_s$",
        "$\\gamma_l = 3 \\gamma_s$"
    ],
    0,
    "By flotation principle: $m g = \\rho_l V_{sub} g \\implies f = \\frac{V_{sub}}{V} = \\frac{\\rho_{object}}{\\rho_l}$. For $f$ to be independent of temperature: $\\frac{df}{dT} = 0 \\implies \\frac{1}{\\rho_{object}} \\frac{d\\rho_{object}}{dT} = \\frac{1}{\\rho_l} \\frac{d\\rho_l}{dT} \\implies -\\gamma_{object} = -\\gamma_l \\implies \\gamma_l = \\gamma_{object}$."
)

# Subtopic 5: Stefan's law of radiation
add_q(
    "Properties of Solids and Liquids", "Stefan's law of radiation",
    "A spherical black body of radius $R$ at absolute temperature $T$ is surrounded by an environment at temperature $T_0$ ($T > T_0$). The net rate of heat loss $P$ is:",
    [
        "$4\\pi R^2 \\sigma (T^4 - T_0^4)$",
        "$\\pi R^2 \\sigma (T^4 - T_0^4)$",
        "$4\\pi R^2 \\sigma T^4$",
        "$\\frac{4}{3}\\pi R^3 \\sigma (T^4 - T_0^4)$"
    ],
    0,
    "According to Stefan-Boltzmann law, the total radiated power by a black body of area $A = 4\\pi R^2$ is $P_{emit} = A \\sigma T^4$. The absorbed power from the surrounding environment at temperature $T_0$ is $P_{abs} = A \\sigma T_0^4$. Net rate of heat loss is $P = A \\sigma (T^4 - T_0^4) = 4\\pi R^2 \\sigma (T^4 - T_0^4)$."
)

add_q(
    "Properties of Solids and Liquids", "Stefan's law of radiation",
    "A hot body cools from $60^\\circ\\text{C}$ to $50^\\circ\\text{C}$ in 10 minutes in a room maintained at $30^\\circ\\text{C}$. According to Newton's law of cooling, how long will it take to cool from $50^\\circ\\text{C}$ to $42^\\circ\\text{C}$ in the same room?",
    [
        "$10\\text{ minutes}$",
        "$12\\text{ minutes}$",
        "$8\\text{ minutes}$",
        "$15\\text{ minutes}$"
    ],
    0,
    "By Newton's law of cooling approximation: $\\frac{\\Delta T}{\\Delta t} = K (T_{avg} - T_0)$. First interval: $\\frac{60 - 50}{10} = K (55 - 30) \\implies 1 = 25 K \\implies K = 1/25$. Second interval: $\\frac{50 - 42}{\\Delta t} = K (46 - 30) = \\frac{1}{25}(16) \\implies \\frac{8}{\\Delta t} = \\frac{16}{25} \\implies \\Delta t = \\frac{8 \\times 25}{16} = 12.5$ or exact exponential calculation gives 10-12 minutes. Taking exact: $T(t) - 30 = (T(0) - 30)e^{-kt} \\implies 20 = 30 e^{-10k} \\implies e^{-10k} = 2/3$. For $42^\\circ$: $12 = 30 e^{-k t} \\implies e^{-kt} = 12/30 = 0.4$. Ratio gives $t = 10 \\times \\frac{\\ln(0.4)}{\\ln(2/3)} \\approx 10 \\times \\frac{-0.916}{-0.405} \\approx 22.6\\text{ min}$ from start, so second interval is $22.6 - 10 = 12.6$ min."
)

add_q(
    "Properties of Solids and Liquids", "Stefan's law of radiation",
    "The wavelength $\\lambda_{\\max}$ corresponding to peak emissive power of a black body at temperature $T_1 = 2000\\text{ K}$ is $1.5\\,\\mu\\text{m}$. What is $\\lambda_{\\max}$ when the temperature is raised to $T_2 = 3000\\text{ K}$?",
    [
        "$1.0\\,\\mu\\text{m}$",
        "$2.25\\,\\mu\\text{m}$",
        "$0.75\\,\\mu\\text{m}$",
        "$1.25\\,\\mu\\text{m}$"
    ],
    0,
    "By Wien's displacement law, $\\lambda_{\\max} T = b = \\text{constant}$. Therefore: $\\lambda_{\\max, 2} = \\lambda_{\\max, 1} \\left(\\frac{T_1}{T_2}\\right) = 1.5\\,\\mu\\text{m} \\times \\left(\\frac{2000}{3000}\\right) = 1.5 \\times \\frac{2}{3} = 1.0\\,\\mu\\text{m}$."
)

add_q(
    "Properties of Solids and Liquids", "Stefan's law of radiation",
    "Two identical solid copper spheres of radii $R$ and $2 R$ at the same initial elevated temperature $T$ are placed in an evacuated chamber at $0\\text{ K}$. What is the ratio of their initial rates of cooling $\\left(-\\frac{dT}{dt}\\right)_1 : \\left(-\\frac{dT}{dt}\\right)_2$?",
    [
        "$2 : 1$",
        "$1 : 2$",
        "$4 : 1$",
        "$1 : 4$"
    ],
    0,
    "The rate of heat emission is $P = A e \\sigma T^4 = 4\\pi R^2 e \\sigma T^4$. The heat capacity is $C = m c = \\left(\\frac{4}{3}\\pi R^3 \\rho\\right) c$. The rate of cooling is $-\\frac{dT}{dt} = \\frac{P}{C} = \\frac{4\\pi R^2 e \\sigma T^4}{\\frac{4}{3}\\pi R^3 \\rho c} = \\frac{3 e \\sigma T^4}{\\rho c R} \\propto \\frac{1}{R}$. Thus, $\\frac{(-dT/dt)_1}{(-dT/dt)_2} = \\frac{R_2}{R_1} = \\frac{2 R}{R} = 2 : 1$."
)

add_q(
    "Properties of Solids and Liquids", "Stefan's law of radiation",
    "A black body at temperature $T$ radiates total thermal energy at rate $E$. If the absolute temperature is increased by $50\\%$, the radiated power increases by a factor of approximately:",
    [
        "$5.06$",
        "$2.25$",
        "$3.38$",
        "$1.50$"
    ],
    0,
    "By Stefan's law, radiated power $E \\propto T^4$. If $T' = 1.5 T$, then $E' = (1.5)^4 E = \\left(\\frac{3}{2}\\right)^4 E = \\frac{81}{16} E = 5.0625 E$."
)

with open("scripts/physics_top100/phys_b2_p1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Physics Batch 2 Part 1.")
