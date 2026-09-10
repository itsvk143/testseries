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
# CHAPTER 13: Magnetic Effects of Current and Magnetism (7 subtopics * 5 = 35 questions)
# ==========================================

# Subtopic 1: Lorentz force
add_q(
    "Magnetic Effects of Current and Magnetism", "Lorentz force",
    "A particle of mass $m$ and charge $q$ is projected into a region with crossed uniform electric and magnetic fields $\\vec{E} = E_0 \\hat{j}$ and $\\vec{B} = B_0 \\hat{k}$. If the particle passes through without any deflection, its initial velocity vector must be:",
    [
        "$\\frac{E_0}{B_0} \\hat{i}$",
        "$-\\frac{E_0}{B_0} \\hat{i}$",
        "$\\frac{E_0}{B_0} \\hat{j}$",
        "$\\frac{B_0}{E_0} \\hat{i}$"
    ],
    0,
    "The net Lorentz force is $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}) = 0 \\implies \\vec{E} = -\\vec{v} \\times \\vec{B} = \\vec{B} \\times \\vec{v}$. For $\\vec{E} = E_0 \\hat{j}$ and $\\vec{B} = B_0 \\hat{k}$: let $\\vec{v} = v_x \\hat{i}$. Then $\\vec{v} \\times \\vec{B} = (v_x \\hat{i}) \\times (B_0 \\hat{k}) = -v_x B_0 \\hat{j}$. For electric and magnetic forces to cancel: $q E_0 \\hat{j} - q v_x B_0 \\hat{j} = 0 \\implies v_x = \\frac{E_0}{B_0}$. Hence $\\vec{v} = \\frac{E_0}{B_0} \\hat{i}$ (velocity selector condition)."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Lorentz force",
    "A charged particle enters a uniform magnetic field $\\vec{B}$ with its velocity vector at an angle $\\theta$ ($0 < \\theta < 90^\\circ$) to $\\vec{B}$. What is the pitch $p$ of the resulting helical trajectory?",
    [
        "$\\frac{2\\pi m v \\cos\\theta}{q B}$",
        "$\\frac{2\\pi m v \\sin\\theta}{q B}$",
        "$\\frac{2\\pi m v}{q B}$",
        "$\\frac{\\pi m v \\cos\\theta}{q B}$"
    ],
    0,
    "The velocity component parallel to $\\vec{B}$ is $v_\\parallel = v \\cos\\theta$, which remains constant. The perpendicular component is $v_\\perp = v \\sin\\theta$, which produces circular motion with cyclotron period $T = \\frac{2\\pi m}{q B}$. The pitch is the distance traveled parallel to $\\vec{B}$ in one cyclotron revolution: $p = v_\\parallel T = (v \\cos\\theta) \\left(\\frac{2\\pi m}{q B}\\right) = \\frac{2\\pi m v \\cos\\theta}{q B}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Lorentz force",
    "The magnetic Lorentz force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ does how much work on a moving charged particle?",
    [
        "Strictly zero at all times",
        "$q v B d$",
        "$\\frac{1}{2} m v^2$",
        "Depends on the orientation of $\\vec{B}$"
    ],
    0,
    "The instantaneous power delivered by the magnetic force is $P = \\vec{F} \\cdot \\vec{v} = q(\\vec{v} \\times \\vec{B}) \\cdot \\vec{v} = 0$, because the cross product $\\vec{v} \\times \\vec{B}$ is identically perpendicular to $\\vec{v}$. Consequently, the work done $dW = P dt = 0$. A static magnetic force can alter the direction of motion, but can never change the speed or kinetic energy of a charged particle."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Lorentz force",
    "A proton, a deuteron, and an alpha particle are accelerated through the same potential difference $V$ and enter normally into a uniform magnetic field $B$. What is the ratio of their orbital radii $r_p : r_d : r_\\alpha$?",
    [
        "$1 : \\sqrt{2} : \\sqrt{2}$",
        "$1 : 2 : 2$",
        "$1 : \\sqrt{2} : 1$",
        "$1 : 1 : \\sqrt{2}$"
    ],
    2,
    "Kinetic energy after accelerating through $V$ is $K = q V$. Orbital radius is $r = \\frac{m v}{q B} = \\frac{\\sqrt{2 m K}}{q B} = \\frac{\\sqrt{2 m q V}}{q B} = \\frac{1}{B} \\sqrt{\\frac{2 V m}{q}} \\propto \\sqrt{\\frac{m}{q}}$. For proton: $m_p = 1, q_p = 1 \\implies \\sqrt{1/1} = 1$. For deuteron: $m_d = 2, q_d = 1 \\implies \\sqrt{2/1} = \\sqrt{2}$. For alpha particle: $m_\\alpha = 4, q_\\alpha = 2 \\implies \\sqrt{4/2} = \\sqrt{2}$. Thus $r_p : r_d : r_\\alpha = 1 : \\sqrt{2} : \\sqrt{2}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Lorentz force",
    "A rigid wire carrying current $I$ has the shape of a planar polygon of perimeter $P$ with arbitrary shape. If placed in a uniform magnetic field $\\vec{B}$, the net magnetic force on the complete closed loop is:",
    [
        "Strictly zero",
        "$I P B$",
        "$\\frac{1}{2} I P B$",
        "$I A B$"
    ],
    0,
    "The net magnetic force on any closed loop carrying steady current $I$ in a uniform magnetic field $\\vec{B}$ is $\\vec{F} = \\oint I (d\\vec{l} \\times \\vec{B}) = I \\left( \\oint d\\vec{l} \\right) \\times \\vec{B}$. For any closed loop, the contour vector displacement is identically zero: $\\oint d\\vec{l} = 0$. Thus $\\vec{F} = 0$."
)

# Subtopic 2: Ampere's law
add_q(
    "Magnetic Effects of Current and Magnetism", "Ampere's law",
    "A solid cylindrical copper wire of radius $R$ carries a total current $I$ uniformly distributed across its cross-section. The magnetic field $B(r)$ at distance $r < R$ from the central axis is:",
    [
        "$\\frac{\\mu_0 I r}{2\\pi R^2}$",
        "$\\frac{\\mu_0 I}{2\\pi r}$",
        "$\\frac{\\mu_0 I r^2}{2\\pi R^3}$",
        "$\\frac{\\mu_0 I}{4\\pi R}$"
    ],
    0,
    "Applying Ampere's circuital law $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$ to a circular Amperian loop of radius $r < R$: $B(2\\pi r) = \\mu_0 I \\left(\\frac{\\pi r^2}{\\pi R^2}\\right) = \\mu_0 I \\frac{r^2}{R^2} \\implies B(r) = \\frac{\\mu_0 I r}{2\\pi R^2}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Ampere's law",
    "A long hollow cylindrical pipe of inner radius $a$ and outer radius $b$ carries a current $I$ distributed uniformly throughout its cross-section. The magnetic field at a distance $r$ ($a < r < b$) from the axis is:",
    [
        "$\\frac{\\mu_0 I}{2\\pi r} \\left( \\frac{r^2 - a^2}{b^2 - a^2} \\right)$",
        "$\\frac{\\mu_0 I r}{2\\pi (b^2 - a^2)}$",
        "$\\frac{\\mu_0 I}{2\\pi r}$",
        "$\\frac{\\mu_0 I (b - r)}{2\\pi (b - a)}$"
    ],
    0,
    "Current density is $J = \\frac{I}{\\pi(b^2 - a^2)}$. Enclosed current within radius $r$ is $I_{enc} = J \\pi (r^2 - a^2) = I \\frac{r^2 - a^2}{b^2 - a^2}$. By Ampere's law: $B(2\\pi r) = \\mu_0 I_{enc} \\implies B(r) = \\frac{\\mu_0 I}{2\\pi r} \\left(\\frac{r^2 - a^2}{b^2 - a^2}\\right)$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Ampere's law",
    "Inside an ideal toroid of mean radius $R$, cross-sectional radius $r$ ($r \\ll R$), and total turns $N$ carrying current $I$, the magnetic field is:",
    [
        "$\\frac{\\mu_0 N I}{2\\pi R}$",
        "$\\frac{\\mu_0 N I}{R}$",
        "$\\frac{\\mu_0 N I}{4\\pi R}$",
        "$\\mu_0 N I$"
    ],
    0,
    "Applying Ampere's circuital law along a circular path of radius $R$ inside the toroid: $\\oint \\vec{B} \\cdot d\\vec{l} = B(2\\pi R) = \\mu_0 N I \\implies B = \\frac{\\mu_0 N I}{2\\pi R} = \\mu_0 n I$, where $n = \\frac{N}{2\\pi R}$ is the number of turns per unit length."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Ampere's law",
    "A long straight cylindrical conductor has an off-axis cylindrical cavity of radius $a$ drilled along its entire length, with cavity axis displaced by $\\vec{d}$ from the cylinder axis. If the remaining metal carries uniform current density $\\vec{J}$, what is the magnetic field inside the cavity?",
    [
        "$\\frac{1}{2} \\mu_0 (\\vec{J} \\times \\vec{d})$, completely uniform",
        "$\\frac{1}{2} \\mu_0 (\\vec{d} \\times \\vec{J})$, varying with $r$",
        "Strictly zero",
        "$\\frac{\\mu_0 J d}{2\\pi} \\hat{r}$"
    ],
    0,
    "By superposition, $\\vec{B}_{cavity} = \\vec{B}_{solid} - \\vec{B}_{removed}$. Inside a solid cylinder of current density $\\vec{J}$: $\\vec{B}(\\vec{r}) = \\frac{1}{2} \\mu_0 (\\vec{J} \\times \\vec{r})$. Let $\\vec{r}_1$ and $\\vec{r}_2$ be position vectors from the cylinder axis and cavity axis respectively, so $\\vec{r}_1 = \\vec{d} + \\vec{r}_2 \\implies \\vec{r}_1 - \\vec{r}_2 = \\vec{d}$. Then $\\vec{B} = \\frac{1}{2} \\mu_0 (\\vec{J} \\times \\vec{r}_1) - \\frac{1}{2} \\mu_0 (\\vec{J} \\times \\vec{r}_2) = \\frac{1}{2} \\mu_0 [\\vec{J} \\times (\\vec{r}_1 - \\vec{r}_2)] = \\frac{1}{2} \\mu_0 (\\vec{J} \\times \\vec{d})$, which is completely uniform in magnitude and direction."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Ampere's law",
    "An infinite flat conducting sheet carrying a uniform surface current density $\\vec{K} = K \\hat{i}$ (current per unit width) lies in the $x-y$ plane. What is the magnetic field $\\vec{B}$ on either side of the sheet?",
    [
        "$\\vec{B} = \\pm \\frac{1}{2} \\mu_0 K \\hat{j}$",
        "$\\vec{B} = \\pm \\mu_0 K \\hat{j}$",
        "$\\vec{B} = \\frac{1}{2} \\mu_0 K \\hat{k}$",
        "$\\vec{B} = \\pm \\frac{\\mu_0 K}{2\\pi} \\hat{j}$"
    ],
    0,
    "By symmetry and the right-hand rule, above the sheet ($z > 0$), $\\vec{B} = -\\frac{1}{2} \\mu_0 K \\hat{j}$, and below the sheet ($z < 0$), $\\vec{B} = +\\frac{1}{2} \\mu_0 K \\hat{j}$. Applying Ampere's law to a rectangular loop of width $w$ spanning across the sheet: $\\oint \\vec{B} \\cdot d\\vec{l} = 2 B w = \\mu_0 (K w) \\implies B = \\frac{1}{2} \\mu_0 K$."
)

# Subtopic 3: Magnetic field calculation
add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic field calculation",
    "What is the magnetic field at the center of a square loop of side length $a$ carrying a steady current $I$?",
    [
        "$\\frac{2\\sqrt{2} \\mu_0 I}{\\pi a}$",
        "$\\frac{\\sqrt{2} \\mu_0 I}{\\pi a}$",
        "$\\frac{4\\sqrt{2} \\mu_0 I}{\\pi a}$",
        "$\\frac{\\mu_0 I}{2\\pi a}$"
    ],
    0,
    "The distance from the center to each side is $d = a/2$. For one side, the angles subtended by the ends are $\\theta_1 = \\theta_2 = 45^\\circ$. The field due to one side is $B_1 = \\frac{\\mu_0 I}{4\\pi d}(\\sin 45^\\circ + \\sin 45^\\circ) = \\frac{\\mu_0 I}{4\\pi (a/2)} \\left(\\frac{2}{\\sqrt{2}}\\right) = \\frac{\\mu_0 I}{2\\pi a} \\sqrt{2} = \\frac{\\sqrt{2}\\mu_0 I}{2\\pi a}$. All four sides contribute in the same direction: $B_{total} = 4 B_1 = 4 \\left(\\frac{\\sqrt{2} \\mu_0 I}{2\\pi a}\\right) = \\frac{2\\sqrt{2} \\mu_0 I}{\\pi a}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic field calculation",
    "A current $I$ flows along the perimeter of an equilateral triangle of side length $a$. What is the magnetic field at the centroid of the triangle?",
    [
        "$\\frac{9 \\mu_0 I}{2\\pi a}$",
        "$\\frac{3\\sqrt{3} \\mu_0 I}{2\\pi a}$",
        "$\\frac{9\\sqrt{3} \\mu_0 I}{2\\pi a}$",
        "$\\frac{3 \\mu_0 I}{\\pi a}$"
    ],
    0,
    "The perpendicular distance from the centroid to each side is $d = \\frac{a}{2\\sqrt{3}}$. Each side subtends angles $\\theta_1 = \\theta_2 = 60^\\circ$ at the centroid. The field from one side is $B_1 = \\frac{\\mu_0 I}{4\\pi d}(\\sin 60^\\circ + \\sin 60^\\circ) = \\frac{\\mu_0 I}{4\\pi (a / (2\\sqrt{3}))} (\\sqrt{3}) = \\frac{\\mu_0 I \\sqrt{3}}{2\\pi a} (\\sqrt{3}) = \\frac{3 \\mu_0 I}{2\\pi a}$. Total field due to all 3 sides is $B = 3 B_1 = \\frac{9 \\mu_0 I}{2\\pi a}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic field calculation",
    "A circular loop of radius $R$ carries current $I$. At what distance $x$ along the axis from the center of the loop is the magnetic field $\\frac{1}{8}$ of the field at its center?",
    [
        "$\\sqrt{3} R$",
        "$R / \\sqrt{3}$",
        "$2 R$",
        "$\\sqrt{7} R$"
    ],
    0,
    "Center field is $B_0 = \\frac{\\mu_0 I}{2 R}$. Axial field is $B(x) = \\frac{\\mu_0 I R^2}{2 (R^2 + x^2)^{3/2}} = B_0 \\frac{R^3}{(R^2 + x^2)^{3/2}}$. Setting $B(x) = \\frac{B_0}{8}$: $\\frac{R^3}{(R^2 + x^2)^{3/2}} = \\frac{1}{8} \\implies \\frac{R}{\\sqrt{R^2 + x^2}} = \\frac{1}{2} \\implies R^2 + x^2 = 4 R^2 \\implies x^2 = 3 R^2 \\implies x = \\sqrt{3} R$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic field calculation",
    "Helmholtz coils consist of two identical coaxial circular coils of radius $R$ and $N$ turns each, separated by distance equal to their radius $R$. This specific spacing is chosen because:",
    [
        "$\\frac{d B}{d x} = 0$ and $\\frac{d^2 B}{d x^2} = 0$ at the midpoint, creating an exceptionally uniform field",
        "The field at the midpoint is strictly zero",
        "It minimizes the self-inductance of the pair",
        "It maximizes the resonance frequency"
    ],
    0,
    "In Helmholtz coils, spacing the coils at $d = R$ ensures that both the first and second spatial derivatives of the magnetic field along the axis vanish at the midpoint between the coils: $\\frac{dB}{dx} = 0$ and $\\frac{d^2 B}{dx^2} = 0$. This provides a maximally flat, uniform magnetic field over a wide volume around the midpoint."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic field calculation",
    "What is the magnetic field at the center of a regular polygon of $n$ sides inscribed in a circle of radius $R$ carrying current $I$ as $n \\to \\infty$?",
    [
        "$\\frac{\\mu_0 I}{2 R}$",
        "$\\frac{\\mu_0 I}{\\pi R}$",
        "$\\frac{\\mu_0 I}{4 R}$",
        "$0$"
    ],
    0,
    "As the number of sides $n \\to \\infty$, the regular polygon approaches a smooth circle of radius $R$. The magnetic field at the center of a circular loop of radius $R$ carrying current $I$ is $B = \\frac{\\mu_0 I}{2 R}$."
)

# Subtopic 4: Biot-Savart law and applications
add_q(
    "Magnetic Effects of Current and Magnetism", "Biot-Savart law and applications",
    "According to the Biot-Savart law, the magnetic field $d\\vec{B}$ produced by a current element $I d\\vec{l}$ at position vector $\\vec{r}$ relative to the element is:",
    [
        "$\\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\vec{r})}{r^3}$",
        "$\\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\vec{r})}{r^2}$",
        "$\\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\cdot \\vec{r})}{r^3}$",
        "$\\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{l}}{r^2}$"
    ],
    0,
    "The Biot-Savart law in vector form is $d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\hat{r})}{r^2} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\vec{r})}{r^3}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Biot-Savart law and applications",
    "A circular arc of radius $R$ subtends an angle $\\theta$ (in radians) at its center. If it carries a steady current $I$, the magnetic field at the center of curvature is:",
    [
        "$\\frac{\\mu_0 I \\theta}{4\\pi R}$",
        "$\\frac{\\mu_0 I \\theta}{2\\pi R}$",
        "$\\frac{\\mu_0 I}{4\\pi R \\theta}$",
        "$\\frac{\\mu_0 I (2\\pi - \\theta)}{4\\pi R}$"
    ],
    0,
    "For a complete circular loop ($\\theta = 2\\pi$), $B = \\frac{\\mu_0 I}{2 R}$. By the Biot-Savart law, each segment $dl$ is perpendicular to $\\vec{r}$, so $B = \\int \\frac{\\mu_0 I dl}{4\\pi R^2} = \\frac{\\mu_0 I (R \\theta)}{4\\pi R^2} = \\frac{\\mu_0 I \\theta}{4\\pi R}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Biot-Savart law and applications",
    "A non-conducting disk of radius $R$ has a uniform surface charge density $\\sigma$. It rotates about its central perpendicular axis with angular velocity $\\omega$. What is the magnetic field at its center?",
    [
        "$\\frac{1}{2} \\mu_0 \\sigma \\omega R$",
        "$\\mu_0 \\sigma \\omega R$",
        "$\\frac{1}{4} \\mu_0 \\sigma \\omega R$",
        "$\\frac{1}{3} \\mu_0 \\sigma \\omega R$"
    ],
    0,
    "Consider a ring of radius $r$ and width $dr$. Its charge is $dq = \\sigma (2\\pi r dr)$. The effective current is $dI = \\frac{dq}{T} = dq \\frac{\\omega}{2\\pi} = \\sigma \\omega r dr$. The magnetic field at the center due to this ring is $dB = \\frac{\\mu_0 dI}{2 r} = \\frac{\\mu_0 (\\sigma \\omega r dr)}{2 r} = \\frac{1}{2} \\mu_0 \\sigma \\omega dr$. Integrating from $r = 0$ to $R$: $B = \\frac{1}{2} \\mu_0 \\sigma \\omega \\int_0^R dr = \\frac{1}{2} \\mu_0 \\sigma \\omega R$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Biot-Savart law and applications",
    "What is the magnetic dipole moment of the rotating disk described in the previous question?",
    [
        "$\\frac{\\pi}{4} \\sigma \\omega R^4$",
        "$\\frac{\\pi}{2} \\sigma \\omega R^4$",
        "$\\pi \\sigma \\omega R^3$",
        "$\\frac{1}{3} \\pi \\sigma \\omega R^4$"
    ],
    0,
    "For ring of radius $r$, $dM = (dI) A = (\\sigma \\omega r dr)(\\pi r^2) = \\pi \\sigma \\omega r^3 dr$. Integrating from $r = 0$ to $R$: $M = \\pi \\sigma \\omega \\int_0^R r^3 dr = \\frac{\\pi}{4} \\sigma \\omega R^4$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Biot-Savart law and applications",
    "A semi-infinite straight wire carrying current $I$ terminates at the origin $(0,0)$. What is the magnetic field at a point $(0, d)$ perpendicular to the wire?",
    [
        "$\\frac{\\mu_0 I}{4\\pi d}$",
        "$\\frac{\\mu_0 I}{2\\pi d}$",
        "$\\frac{\\mu_0 I}{8\\pi d}$",
        "$0$"
    ],
    0,
    "For a straight wire from $x = -\\infty$ to $x = 0$, the angles subtended at $(0, d)$ are $\\theta_1 = 90^\\circ$ and $\\theta_2 = 0^\\circ$. The field is $B = \\frac{\\mu_0 I}{4\\pi d}(\\sin 90^\\circ + \\sin 0^\\circ) = \\frac{\\mu_0 I}{4\\pi d}$."
)

# Subtopic 5: Force between two parallel currents
add_q(
    "Magnetic Effects of Current and Magnetism", "Force between two parallel currents",
    "Two long parallel wires separated by distance $d$ carry currents $I_1$ and $I_2$ in opposite directions. The magnetic force per unit length between them is:",
    [
        "$\\frac{\\mu_0 I_1 I_2}{2\\pi d}$, repulsive",
        "$\\frac{\\mu_0 I_1 I_2}{2\\pi d}$, attractive",
        "$\\frac{\\mu_0 I_1 I_2}{4\\pi d}$, repulsive",
        "$\\frac{\\mu_0 I_1 I_2}{\\pi d^2}$, attractive"
    ],
    0,
    "By the right-hand rule and Ampere's force law, parallel currents flowing in opposite directions (antiparallel) repel each other with force per unit length $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Force between two parallel currents",
    "The standard SI definition of the Ampere (historically) is based on the magnetic force between two parallel infinitely long thin wires in vacuum separated by $1\\text{ m}$. What is the force per meter when each carries $1\\text{ A}$?",
    [
        "$2 \\times 10^{-7}\\text{ N/m}$",
        "$10^{-7}\\text{ N/m}$",
        "$4\\pi \\times 10^{-7}\\text{ N/m}$",
        "$2\\pi \\times 10^{-7}\\text{ N/m}$"
    ],
    0,
    "Using $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ with $I_1 = I_2 = 1\\text{ A}$ and $d = 1\\text{ m}$: $\\frac{F}{L} = \\frac{(4\\pi \\times 10^{-7})(1)(1)}{2\\pi(1)} = 2 \\times 10^{-7}\\text{ N/m}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Force between two parallel currents",
    "Three long straight parallel wires $A, B, C$ are placed in a plane with equal spacing $d$. They carry currents $I, 2I, 3I$ respectively in the same direction. The net magnetic force per unit length on the middle wire $B$ is:",
    [
        "$\\frac{\\mu_0 I^2}{\\pi d}$, towards wire $C$",
        "$\\frac{\\mu_0 I^2}{\\pi d}$, towards wire $A$",
        "$\\frac{2\\mu_0 I^2}{\\pi d}$, towards wire $C$",
        "$0$"
    ],
    0,
    "Wire $A$ attracts wire $B$ to the left with force per unit length $F_{AB}/L = \\frac{\\mu_0 (I)(2I)}{2\\pi d} = \\frac{\\mu_0 I^2}{\\pi d}$. Wire $C$ attracts wire $B$ to the right with force per unit length $F_{CB}/L = \\frac{\\mu_0 (3I)(2I)}{2\\pi d} = \\frac{3\\mu_0 I^2}{\\pi d}$. Net force on wire $B$ is to the right (towards $C$): $\\frac{F_{net}}{L} = \\frac{3\\mu_0 I^2}{\\pi d} - \\frac{\\mu_0 I^2}{\\pi d} = \\frac{2\\mu_0 I^2}{\\pi d}$ wait: $F_{CB} - F_{AB} = \\frac{6 \\mu_0 I^2}{2\\pi d} - \\frac{2 \\mu_0 I^2}{2\\pi d} = \\frac{4 \\mu_0 I^2}{2\\pi d} = \\frac{2 \\mu_0 I^2}{\\pi d}$ towards wire $C$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Force between two parallel currents",
    "Two parallel metal rails separated by distance $L$ lie on a horizontal plane. A conducting bar of mass $m$ is free to slide on them in a vertical magnetic field $B$. If a current $I$ passes through the bar, what is its acceleration?",
    [
        "$\\frac{I L B}{m}$",
        "$\\frac{2 I L B}{m}$",
        "$\\frac{I L B}{2 m}$",
        "$\\frac{I B}{m L}$"
    ],
    0,
    "The magnetic force on the current-carrying bar perpendicular to the magnetic field is $F = I L B$. By Newton's second law, $F = m a \\implies a = \\frac{I L B}{m}$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Force between two parallel currents",
    "Two streams of protons travel parallel to each other with speed $v$. What is the ratio of their magnetic repulsive force $F_m$ to their electrostatic repulsive force $F_e$?",
    [
        "$v^2 / c^2$",
        "$v / c$",
        "$c^2 / v^2$",
        "$1$"
    ],
    0,
    "The electrostatic force between two charges moving parallel is $F_e = \\frac{q^2}{4\\pi \\varepsilon_0 r^2}$. The magnetic attractive force between two parallel currents $I = q v$ is $F_m = \\frac{\\mu_0 I^2}{2\\pi r} = \\frac{\\mu_0 q^2 v^2}{4\\pi r^2}$ (relativistic approximation). The ratio is $\\frac{F_m}{F_e} = \\mu_0 \\varepsilon_0 v^2 = \\frac{v^2}{c^2}$."
)

# Subtopic 6: Moving coil galvanometer and conversion to ammeter/voltmeter
add_q(
    "Magnetic Effects of Current and Magnetism", "Moving coil galvanometer and conversion to ammeter/voltmeter",
    "A moving coil galvanometer has coil resistance $G = 50\\,\\Omega$ and full-scale deflection current $I_g = 2\\text{ mA}$. To convert it into an ammeter of range $0-10\\text{ A}$, what shunt resistance $S$ must be connected in parallel?",
    [
        "$0.010\\,\\Omega$",
        "$0.025\\,\\Omega$",
        "$0.005\\,\\Omega$",
        "$0.10\\,\\Omega$"
    ],
    0,
    "Shunt resistance formula is $S = \\frac{I_g G}{I - I_g}$. Substituting $I_g = 2 \\times 10^{-3}\\text{ A}$, $G = 50\\,\\Omega$, and $I = 10\\text{ A}$: $S = \\frac{(2 \\times 10^{-3})(50)}{10 - 0.002} \\approx \\frac{0.10}{10} = 0.010\\,\\Omega$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Moving coil galvanometer and conversion to ammeter/voltmeter",
    "To convert the same galvanometer ($G = 50\\,\\Omega, I_g = 2\\text{ mA}$) into a voltmeter of range $0-10\\text{ V}$, what series resistance $R$ must be connected?",
    [
        "$4950\\,\\Omega$",
        "$5000\\,\\Omega$",
        "$5050\\,\\Omega$",
        "$4500\\,\\Omega$"
    ],
    0,
    "Series resistance is $R = \\frac{V}{I_g} - G = \\frac{10}{2 \\times 10^{-3}} - 50 = 5000 - 50 = 4950\\,\\Omega$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Moving coil galvanometer and conversion to ammeter/voltmeter",
    "The use of soft iron core and concave cylindrical magnetic pole pieces in a moving coil galvanometer produces:",
    [
        "A radial magnetic field so that deflecting torque is strictly proportional to current ($\\tau \\propto I$)",
        "A uniform parallel magnetic field",
        "Reduced sensitivity to eliminate damping",
        "Higher electrical resistance"
    ],
    0,
    "Concave pole pieces with a central cylindrical soft iron core produce a radial magnetic field. In a radial field, the plane of the coil is always parallel to the magnetic lines of force regardless of deflection ($\\sin\\theta = 1$). Thus deflecting torque is $\\tau = N I A B$, directly proportional to current $I$, which ensures a perfectly linear deflection scale ($\theta \\propto I$)."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Moving coil galvanometer and conversion to ammeter/voltmeter",
    "Current sensitivity of a galvanometer is $S_i = \\frac{\\theta}{I} = \\frac{N A B}{k}$. If the number of turns $N$ is doubled, how do the current sensitivity and voltage sensitivity change?",
    [
        "Current sensitivity doubles, voltage sensitivity remains approximately unchanged",
        "Both double",
        "Both remain unchanged",
        "Voltage sensitivity doubles, current sensitivity remains unchanged"
    ],
    0,
    "Current sensitivity is $S_i = \\frac{N A B}{k} \\propto N$, so doubling $N$ doubles $S_i$. However, doubling the number of turns doubles the length of wire in the coil, which doubles its resistance $G' \\approx 2 G$. Voltage sensitivity is $S_v = \\frac{S_i}{G} \\propto \\frac{N}{G}$. Since both $N$ and $G$ double, $S_v$ remains approximately constant."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Moving coil galvanometer and conversion to ammeter/voltmeter",
    "Dead-beat galvanometers achieve critical damping by utilizing:",
    [
        "Eddy currents induced in the non-magnetic metallic frame on which the coil is wound",
        "Air friction dampers",
        "High mechanical friction in the pivot jewels",
        "Viscous oil immersion"
    ],
    0,
    "In dead-beat galvanometers, the coil is wound on a light metallic (copper or aluminum) frame. When the coil oscillates, the changing magnetic flux induces eddy currents in the metal frame that oppose the motion according to Lenz's law, causing electromagnetic damping that quickly brings the coil to rest at its steady-state reading without oscillation."
)

# Subtopic 7: Magnetic properties (dia, para, ferromagnetism)
add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic properties (dia, para, ferromagnetism)",
    "For a diamagnetic substance, the magnetic susceptibility $\\chi_m$ and relative permeability $\\mu_r$ satisfy:",
    [
        "$-1 \\le \\chi_m < 0$ and $0 \\le \\mu_r < 1$",
        "$\\chi_m > 0$ and $\\mu_r > 1$",
        "$\\chi_m \\gg 1$ and $\\mu_r \\gg 1$",
        "$\\chi_m = 0$ and $\\mu_r = 1$"
    ],
    0,
    "Diamagnetic materials have negative susceptibility ($-1 \\le \\chi_m < 0$) and relative permeability slightly less than 1 ($0 \\le \\mu_r < 1$). For a superconductor (perfect diamagnetism), $\\chi_m = -1$ and $\\mu_r = 0$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic properties (dia, para, ferromagnetism)",
    "According to Curie's law, the magnetic susceptibility of a paramagnetic substance at absolute temperature $T$ is proportional to:",
    [
        "$1 / T$",
        "$T$",
        "$1 / T^2$",
        "Independent of $T$"
    ],
    0,
    "Curie's law states that for paramagnetic materials, $\\chi = \\frac{C}{T}$, where $C$ is the Curie constant. Thermal agitation disrupts the alignment of permanent atomic magnetic dipoles, so susceptibility is inversely proportional to absolute temperature."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic properties (dia, para, ferromagnetism)",
    "Above the Curie temperature $T_C$, a ferromagnetic material undergoes a phase transition and behaves as a:",
    [
        "Paramagnetic material obeying the Curie-Weiss law $\\chi = \\frac{C}{T - T_C}$",
        "Diamagnetic material",
        "Superconductor",
        "Perfect insulator"
    ],
    0,
    "Above the Curie temperature $T_C$, thermal energy overcomes the quantum exchange coupling responsible for spontaneous domain alignment. The material becomes paramagnetic, with susceptibility following the Curie-Weiss law $\\chi = \\frac{C}{T - T_C}$ for $T > T_C$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic properties (dia, para, ferromagnetism)",
    "The area enclosed by the hysteresis loop ($B-H$ curve) of a ferromagnetic material represents:",
    [
        "Thermal energy dissipated per unit volume per cycle",
        "Total magnetic flux through the core",
        "Coercivity of the material",
        "Remanence magnetization"
    ],
    0,
    "The area enclosed by the $B-H$ hysteresis loop represents the magnetic energy converted into heat per unit volume of the specimen during one complete cycle of magnetization: $W = \\oint H dB$."
)

add_q(
    "Magnetic Effects of Current and Magnetism", "Magnetic properties (dia, para, ferromagnetism)",
    "An ideal material for constructing transformer cores and electromagnet cores should possess:",
    [
        "High magnetic permeability, low coercivity, and narrow hysteresis loop",
        "High coercivity, high retentivity, and broad hysteresis loop",
        "Low permeability and high coercivity",
        "Negative susceptibility"
    ],
    0,
    "Transformer cores undergo rapid cyclic magnetization (e.g. at $50\\text{ Hz}$). To minimize hysteresis energy losses and achieve large flux with small magnetizing current, soft magnetic materials (like soft iron or silicon steel) are chosen because they possess high permeability, low coercivity, and a narrow hysteresis loop area."
)

# ==========================================
# CHAPTER 14: Electromagnetic Induction and Alternating Currents (7 subtopics * 5 = 35 questions)
# ==========================================

# Subtopic 1: Faraday's law
add_q(
    "Electromagnetic Induction and Alternating Currents", "Faraday's law",
    "A conducting rod of length $L$ rotates with constant angular velocity $\\omega$ in a plane perpendicular to a uniform magnetic field $B$ about a pivot at one end. The induced EMF between the pivot and the outer tip is:",
    [
        "$\\frac{1}{2} B \\omega L^2$",
        "$B \\omega L^2$",
        "$\\frac{1}{4} B \\omega L^2$",
        "$2 B \\omega L^2$"
    ],
    0,
    "For an element $dr$ at distance $r$ from the pivot, its linear speed is $v = \\omega r$. The motional EMF across $dr$ is $d\\mathcal{E} = B v dr = B \\omega r dr$. Integrating along the rod from $r = 0$ to $L$: $\\mathcal{E} = \\int_0^L B \\omega r dr = \\frac{1}{2} B \\omega L^2$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Faraday's law",
    "A circular loop of wire of radius $r$ and resistance $R$ is placed in a magnetic field $B(t) = B_0 e^{-\\alpha t}$ perpendicular to the plane of the loop. What is the total electric charge that flows through any cross-section of the loop from $t = 0$ to $t \\to \\infty$?",
    [
        "$\\frac{\\pi r^2 B_0}{R}$",
        "$\\frac{\\pi r^2 B_0}{\\alpha R}$",
        "$\\frac{\\alpha \\pi r^2 B_0}{R}$",
        "$0$"
    ],
    0,
    "By Faraday's law, total charge flown is strictly determined by total change in magnetic flux: $\\Delta q = \\frac{|\\Delta \\Phi|}{R}$. Initial flux at $t = 0$ is $\\Phi_i = B_0 (\\pi r^2)$. Final flux as $t \\to \\infty$ is $\\Phi_f = 0$. Thus $\\Delta \\Phi = \\pi r^2 B_0$, and $\\Delta q = \\frac{\\pi r^2 B_0}{R}$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Faraday's law",
    "A copper ring of radius $R$ is placed in a time-varying magnetic field $B(t) = \\beta t$ directed into the page. What is the induced non-conservative electric field $E$ along the circumference of the ring?",
    [
        "$\\frac{1}{2} \\beta R$",
        "$\\beta R$",
        "$\\frac{1}{4} \\beta R$",
        "$2 \\beta R$"
    ],
    0,
    "By Faraday's law in integral form: $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi}{dt}$. By azimuthal symmetry: $E(2\\pi R) = \\frac{d}{dt}(B \\pi R^2) = \\pi R^2 \\frac{dB}{dt} = \\pi R^2 \\beta \\implies E = \\frac{1}{2} \\beta R$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Faraday's law",
    "A metal airplane with wingspan $L = 30\\text{ m}$ flies horizontally at speed $v = 200\\text{ m/s}$ in a region where the vertical component of Earth's magnetic field is $B_v = 4 \\times 10^{-5}\\text{ T}$. What is the induced potential difference between its wing tips?",
    [
        "$0.24\\text{ V}$",
        "$2.4\\text{ V}$",
        "$0.024\\text{ V}$",
        "$0.48\\text{ V}$"
    ],
    0,
    "Motional EMF across the wing tips cutting the vertical magnetic field lines is $\\mathcal{E} = B_v L v = (4 \\times 10^{-5}\\text{ T}) \\times (30\\text{ m}) \\times (200\\text{ m/s}) = 0.24\\text{ V}$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Faraday's law",
    "A square wire loop of side $a$ and resistance $R$ enters a uniform magnetic field $B$ with constant velocity $v$ perpendicular to one of its sides. What external mechanical force is required to maintain this constant velocity while the loop is entering the field?",
    [
        "$\\frac{B^2 a^2 v}{R}$",
        "$\\frac{B^2 a^2 v^2}{R}$",
        "$\\frac{B a v}{R}$",
        "$\\frac{2 B^2 a^2 v}{R}$"
    ],
    0,
    "Motional EMF is $\\mathcal{E} = B a v$. Induced current is $I = \\frac{\\mathcal{E}}{R} = \\frac{B a v}{R}$. The magnetic braking force on the leading edge is $F_{mag} = I a B = \\left(\\frac{B a v}{R}\\right) a B = \\frac{B^2 a^2 v}{R}$. To maintain constant velocity, the external applied force must balance this: $F_{ext} = \\frac{B^2 a^2 v}{R}$."
)

# Subtopic 2: Lenz's law
add_q(
    "Electromagnetic Induction and Alternating Currents", "Lenz's law",
    "Lenz's law is a direct consequence of which fundamental principle of physics?",
    [
        "Conservation of energy",
        "Conservation of momentum",
        "Conservation of charge",
        "Newton's third law only"
    ],
    0,
    "Lenz's law states that an induced current always flows in such a direction that its magnetic effect opposes the change in magnetic flux that produced it. If the induced current assisted the flux change, mechanical energy would be generated spontaneously without input work, violating the principle of Conservation of Energy."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Lenz's law",
    "A bar magnet is dropped vertically along the axis of a long vertical copper pipe. What happens to its motion?",
    [
        "It accelerates initially and then reaches a constant terminal velocity",
        "It falls with constant acceleration $g$",
        "It accelerates with acceleration greater than $g$",
        "It bounces back upward"
    ],
    0,
    "As the magnet falls, changing magnetic flux induces eddy currents in the copper pipe walls. By Lenz's law, these eddy currents generate a magnetic force opposing the downward motion of the magnet. As speed increases, the upward magnetic drag force increases until it balances gravity $m g$, after which the magnet falls at a steady terminal velocity ($a = 0$)."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Lenz's law",
    "A metallic ring is held horizontally and a bar magnet is dropped through the ring with its North pole pointing downward. The acceleration of the falling magnet while approaching the ring is:",
    [
        "Less than $g$",
        "Equal to $g$",
        "Greater than $g$",
        "Zero"
    ],
    0,
    "As the North pole approaches the ring, magnetic flux downward increases. By Lenz's law, induced current in the ring flows counter-clockwise (viewed from above), establishing an upward magnetic field with a North pole on top that repels the falling magnet. Consequently, net downward force is $m g - F_{mag} < m g$, so acceleration is strictly less than $g$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Lenz's law",
    "A closed circular loop and an open circular loop (with a small slit) made of identical copper wire are both placed in an increasing magnetic field. What is induced in each?",
    [
        "Both develop induced EMF, but only the closed loop carries induced current",
        "Only the closed loop develops induced EMF",
        "Neither develops induced EMF",
        "Both carry equal induced current"
    ],
    0,
    "Faraday's law states that an EMF $\\mathcal{E} = -\\frac{d\\Phi}{dt}$ is induced along any closed path regardless of whether the circuit is closed or open. However, continuous electric current can only flow through a complete closed conducting loop. Thus, both have induced EMF, but only the closed loop sustains induced current."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Lenz's law",
    "A copper disk is rotated between the poles of a strong permanent magnet. What effect does the magnetic field have on the rotation?",
    [
        "It creates a strong braking torque that slows down the disk",
        "It accelerates the rotation of the disk",
        "It has no effect on the rotation",
        "It creates an alternating oscillation"
    ],
    0,
    "As the copper disk rotates through the localized magnetic field, eddy currents are induced in the disk. According to Lenz's law, the Lorentz force on these eddy currents opposes the relative motion between the conductor and the magnetic field, generating an electromagnetic braking torque that dissipates rotational kinetic energy as heat."
)

# Subtopic 3: AC circuits
add_q(
    "Electromagnetic Induction and Alternating Currents", "AC circuits",
    "In a series LCR circuit driven by an AC source $V(t) = V_0 \\sin(\\omega t)$, at resonance ($\\omega = \\omega_0 = 1/\\sqrt{L C}$), the power factor of the circuit is:",
    [
        "$1.0$",
        "$0$",
        "$0.5$",
        "$1/\\sqrt{2}$"
    ],
    0,
    "At resonance, inductive reactance equals capacitive reactance: $X_L = X_C \\implies \\omega L = \\frac{1}{\\omega C}$. The total circuit impedance is $Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. The phase angle between voltage and current is $\\phi = 0$. The power factor is $\\cos\\phi = \\cos 0 = 1.0$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "AC circuits",
    "The quality factor $Q$ of a series LCR resonant circuit is given by:",
    [
        "$\\frac{1}{R} \\sqrt{\\frac{L}{C}}$",
        "$\\frac{R}{\\sqrt{L C}}$",
        "$R \\sqrt{\\frac{C}{L}}$",
        "$\\frac{\\omega_0 L}{R^2}$"
    ],
    0,
    "Quality factor is defined as $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$. Since resonant angular frequency is $\\omega_0 = \\frac{1}{\\sqrt{L C}}$: $Q = \\frac{1}{\\sqrt{L C}} \\frac{L}{R} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "AC circuits",
    "A series LCR circuit has $R = 10\\,\\Omega, L = 0.1\\text{ H}, C = 10\\,\\mu\\text{F}$. When connected to an AC source of frequency $f = 50\\text{ Hz}$, the current:",
    [
        "Leads the voltage",
        "Lags behind the voltage",
        "Is in phase with the voltage",
        "Is zero"
    ],
    0,
    "At $f = 50\\text{ Hz}$: $\\omega = 2\\pi(50) = 100\\pi \\approx 314\\text{ rad/s}$. $X_L = \\omega L = 314 \\times 0.1 = 31.4\\,\\Omega$. $X_C = \\frac{1}{\\omega C} = \\frac{1}{314 \\times 10^{-5}} = \\frac{10^5}{314} \\approx 318.5\\,\\Omega$. Since $X_C \\gg X_L$, the circuit is predominantly capacitive, so the current leads the applied voltage."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "AC circuits",
    "What is the average power dissipated over a complete cycle in an ideal inductor connected to an AC source?",
    [
        "$0$",
        "$\\frac{1}{2} L I_0^2$",
        "$V_{rms} I_{rms}$",
        "$\\frac{V_0 I_0}{2}$"
    ],
    0,
    "For an ideal pure inductor, the phase angle between voltage and current is $\\phi = 90^\\circ$ (current lags voltage by $\\pi/2$). The power factor is $\\cos\\phi = \\cos 90^\\circ = 0$. The average power is $P_{avg} = V_{rms} I_{rms} \\cos\\phi = 0$. Energy is alternately stored in the magnetic field and returned to the source without dissipation."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "AC circuits",
    "A circuit consists of a resistance $R$ and capacitance $C$ in series with an AC source. If the frequency of the source is increased, what happens to the impedance $Z$ and current $I$?",
    [
        "$Z$ decreases and $I$ increases",
        "$Z$ increases and $I$ decreases",
        "Both remain unchanged",
        "$Z$ decreases and $I$ decreases"
    ],
    0,
    "Capacitive reactance is $X_C = \\frac{1}{2\\pi f C}$. As frequency $f$ increases, $X_C$ decreases. The total impedance is $Z = \\sqrt{R^2 + X_C^2}$, which decreases. Consequently, the current amplitude $I = V/Z$ increases."
)

# Subtopic 4: RMS values
add_q(
    "Electromagnetic Induction and Alternating Currents", "RMS values",
    "An alternating voltage is given by $V(t) = 100 \\sin(100\\pi t) + 100 \\cos(100\\pi t)\\text{ V}$. What is the root-mean-square (RMS) voltage?",
    [
        "$100\\text{ V}$",
        "$100\\sqrt{2}\\text{ V}$",
        "$50\\sqrt{2}\\text{ V}$",
        "$70.7\\text{ V}$"
    ],
    0,
    "Combining the sine and cosine terms: $V(t) = 100\\sqrt{2} \\left(\\frac{1}{\\sqrt{2}}\\sin(100\\pi t) + \\frac{1}{\\sqrt{2}}\\cos(100\\pi t)\\right) = 100\\sqrt{2} \\sin(100\\pi t + \\pi/4)$. The peak amplitude is $V_0 = 100\\sqrt{2}\\text{ V}$. The RMS voltage is $V_{rms} = \\frac{V_0}{\\sqrt{2}} = \\frac{100\\sqrt{2}}{\\sqrt{2}} = 100\\text{ V}$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "RMS values",
    "A current wave consists of a DC component $I_{dc} = 3\\text{ A}$ superposed on an AC component $i_{ac}(t) = 4 \\sin(\\omega t)\\text{ A}$. What is the RMS value of the combined current?",
    [
        "$\\sqrt{17}\\text{ A} \\approx 4.12\\text{ A}$",
        "$5\\text{ A}$",
        "$7\\text{ A}$",
        "$\\sqrt{25}\\text{ A} = 5\\text{ A}$"
    ],
    0,
    "The RMS value of a combined waveform $I(t) = I_{dc} + I_0 \\sin(\\omega t)$ is $I_{rms} = \\sqrt{I_{dc}^2 + I_{ac, rms}^2} = \\sqrt{I_{dc}^2 + \\frac{I_0^2}{2}}$. Substituting $I_{dc} = 3\\text{ A}$ and $I_0 = 4\\text{ A}$: $I_{rms} = \\sqrt{3^2 + \\frac{4^2}{2}} = \\sqrt{9 + 8} = \\sqrt{17}\\text{ A} \\approx 4.12\\text{ A}$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "RMS values",
    "A symmetric square wave alternates between $+V_0$ and $-V_0$ with equal half-periods. What is its RMS value?",
    [
        "$V_0$",
        "$V_0 / \\sqrt{2}$",
        "$V_0 / 2$",
        "$\\sqrt{2} V_0$"
    ],
    0,
    "The square of the voltage at all times is $V^2(t) = (+V_0)^2 = (-V_0)^2 = V_0^2$. The mean square value is $\\langle V^2 \\rangle = V_0^2$. Taking the square root gives $V_{rms} = \\sqrt{\\langle V^2 \\rangle} = V_0$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "RMS values",
    "For a half-wave rectified sinusoidal voltage of peak value $V_0$, what is the RMS value?",
    [
        "$V_0 / 2$",
        "$V_0 / \\sqrt{2}$",
        "$V_0 / \\pi$",
        "$2 V_0 / \\pi$"
    ],
    0,
    "In half-wave rectification, $V(t) = V_0 \\sin(\\omega t)$ for $0 \\le t < T/2$, and $V(t) = 0$ for $T/2 \\le t < T$. Mean square value: $\\langle V^2 \\rangle = \\frac{1}{T} \\int_0^{T/2} V_0^2 \\sin^2(\\omega t) dt = \\frac{V_0^2}{T} \\frac{T}{4} = \\frac{V_0^2}{4}$. Taking square root: $V_{rms} = \\frac{V_0}{2}$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "RMS values",
    "In India, household AC electricity is supplied at $220\\text{ V}, 50\\text{ Hz}$. What is the peak voltage $V_0$ of this supply?",
    [
        "$311\\text{ V}$",
        "$220\\text{ V}$",
        "$440\\text{ V}$",
        "$155\\text{ V}$"
    ],
    0,
    "The nominal rating of AC mains refers to RMS voltage: $V_{rms} = 220\\text{ V}$. The peak voltage is $V_0 = \\sqrt{2} V_{rms} = 1.414 \\times 220 \\approx 311.1\\text{ V}$."
)

# Subtopic 5: Self and mutual inductance
add_q(
    "Electromagnetic Induction and Alternating Currents", "Self and mutual inductance",
    "Two coaxial solenoids of equal length $l$ have radii $r_1$ and $r_2$ ($r_1 < r_2$) and number of turns $N_1$ and $N_2$. What is their mutual inductance $M$?",
    [
        "$\\frac{\\mu_0 N_1 N_2 \\pi r_1^2}{l}$",
        "$\\frac{\\mu_0 N_1 N_2 \\pi r_2^2}{l}$",
        "$\\frac{\\mu_0 N_1 N_2 \\pi (r_1 + r_2)^2}{2 l}$",
        "$\\frac{\\mu_0 N_1 N_2 \\pi r_1 r_2}{l}$"
    ],
    0,
    "Magnetic field inside the outer solenoid carrying current $I_2$ is $B_2 = \\frac{\\mu_0 N_2 I_2}{l}$. The magnetic flux linked through the inner solenoid of radius $r_1$ and $N_1$ turns is $\\Phi_1 = N_1 (B_2 A_1) = N_1 \\left(\\frac{\\mu_0 N_2 I_2}{l}\\right) (\\pi r_1^2)$. By definition of mutual inductance: $M = \\frac{\\Phi_1}{I_2} = \\frac{\\mu_0 N_1 N_2 \\pi r_1^2}{l}$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Self and mutual inductance",
    "The magnetic energy stored in an inductor of inductance $L$ carrying steady current $I$ is:",
    [
        "$\\frac{1}{2} L I^2$",
        "$L I^2$",
        "$\\frac{1}{2} L^2 I$",
        "$\\frac{L I}{2}$"
    ],
    0,
    "The work done in establishing current against back EMF is $W = \\int P dt = \\int (L \\frac{dI}{dt} I) dt = L \\int_0^I I' dI' = \\frac{1}{2} L I^2$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Self and mutual inductance",
    "If two coils of self-inductances $L_1$ and $L_2$ have mutual inductance $M$, the coupling coefficient $k$ is defined by $k = \\frac{M}{\\sqrt{L_1 L_2}}$. What is the theoretical maximum value of $k$?",
    [
        "$1.0$",
        "$0.5$",
        "$2.0$",
        "$\\infty$"
    ],
    0,
    "The coupling coefficient $k$ represents the fraction of magnetic flux linked between the two coils. For complete flux linkage (ideal tightly coupled coils without flux leakage), $k = 1.0$. In all real configurations, $0 \\le k \\le 1$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Self and mutual inductance",
    "A long solenoid of length $l$, radius $r$, and total turns $N$ has self-inductance $L$. If the length is doubled and the number of turns is doubled (with radius unchanged), what is the new self-inductance?",
    [
        "$2 L$",
        "$4 L$",
        "$L$",
        "$L / 2$"
    ],
    0,
    "Self-inductance of a solenoid is $L = \\frac{\\mu_0 N^2 A}{l}$. With $N' = 2 N$ and $l' = 2 l$: $L' = \\frac{\\mu_0 (2 N)^2 A}{2 l} = \\frac{4}{2} \\frac{\\mu_0 N^2 A}{l} = 2 L$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Self and mutual inductance",
    "In an RL circuit connected to a DC source $V_0$ at $t = 0$, the current reaches $63.2\\%$ of its steady-state value in a time equal to:",
    [
        "One time constant $\\tau = L/R$",
        "Two time constants $2 L/R$",
        "Half time constant $L/(2R)$",
        "$\\tau = R C$"
    ],
    0,
    "The growth of current in an inductive circuit is $I(t) = I_0(1 - e^{-t/\\tau})$, where inductive time constant $\\tau = L/R$. At $t = \\tau$: $I(\\tau) = I_0(1 - e^{-1}) = I_0(1 - 0.368) = 0.632 I_0$ ($63.2\\%$)."
)

# Subtopic 6: LC oscillations
add_q(
    "Electromagnetic Induction and Alternating Currents", "LC oscillations",
    "In an ideal LC circuit with capacitor $C$ charged initially to $Q_0$ and inductor $L$, the maximum current in the circuit is:",
    [
        "$\\frac{Q_0}{\\sqrt{L C}}$",
        "$\\frac{Q_0}{L C}$",
        "$Q_0 \\sqrt{L C}$",
        "$\\frac{Q_0^2}{2 L C}$"
    ],
    0,
    "By conservation of energy, the maximum electric potential energy stored in capacitor equals the maximum magnetic energy stored in inductor: $\\frac{Q_0^2}{2 C} = \\frac{1}{2} L I_{\\max}^2 \\implies I_{\\max}^2 = \\frac{Q_0^2}{L C} \\implies I_{\\max} = \\frac{Q_0}{\\sqrt{L C}} = \\omega_0 Q_0$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "LC oscillations",
    "In an LC oscillation circuit, how often does the electric energy stored in the capacitor reach its maximum value during one complete cycle of period $T$?",
    [
        "Twice per period (at $t = 0$ and $t = T/2$)",
        "Once per period",
        "Four times per period",
        "Continuously"
    ],
    0,
    "Charge varies as $q(t) = Q_0 \\cos(\\omega t)$. Energy in the capacitor is $U_E(t) = \\frac{q^2}{2 C} = \\frac{Q_0^2}{2 C} \\cos^2(\\omega t) = \\frac{Q_0^2}{4 C}(1 + \\cos(2\\omega t))$. Because energy involves the square of cosine, it oscillates at twice the frequency ($2\\omega$) and reaches maximum twice during each fundamental period $T$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "LC oscillations",
    "In a real LC circuit with non-zero resistance $R$, the oscillations are damped. What is the condition on $R$ for the circuit to produce underdamped oscillatory behavior?",
    [
        "$R < 2 \\sqrt{\\frac{L}{C}}$",
        "$R > 2 \\sqrt{\\frac{L}{C}}$",
        "$R = 2 \\sqrt{\\frac{L}{C}}$",
        "$R = 0$ strictly"
    ],
    0,
    "The differential equation is $L \\frac{d^2 q}{dt^2} + R \\frac{dq}{dt} + \\frac{q}{C} = 0$. The roots of the characteristic equation are $-\\frac{R}{2 L} \\pm \\sqrt{\\left(\\frac{R}{2 L}\\right)^2 - \\frac{1}{L C}}$. For oscillatory solutions (complex conjugate roots): $\\left(\\frac{R}{2 L}\\right)^2 < \\frac{1}{L C} \\implies R < 2 \\sqrt{\\frac{L}{C}}$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "LC oscillations",
    "What is the mechanical analog of inductance $L$ and reciprocal capacitance $1/C$ in the LC oscillator - mass-spring system analogy?",
    [
        "Inductance $L \\leftrightarrow$ Mass $m$, and $1/C \\leftrightarrow$ Spring constant $k$",
        "Inductance $L \\leftrightarrow$ Spring constant $k$, and $C \\leftrightarrow$ Mass $m$",
        "Inductance $L \\leftrightarrow$ Velocity $v$, and $C \\leftrightarrow$ Displacement $x$",
        "Inductance $L \\leftrightarrow$ Momentum $p$, and $C \\leftrightarrow$ Force $F$"
    ],
    0,
    "Comparing the differential equations: $L \\frac{d^2 q}{dt^2} + \\frac{1}{C} q = 0$ and $m \\frac{d^2 x}{dt^2} + k x = 0$. Here charge $q \\leftrightarrow$ displacement $x$, current $I = \\dot{q} \\leftrightarrow$ velocity $v = \\dot{x}$, inductance $L \\leftrightarrow$ mass $m$ (inertia), and reciprocal capacitance $1/C \\leftrightarrow$ spring constant $k$ (stiffness)."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "LC oscillations",
    "An LC circuit has $L = 2\\text{ mH}$ and $C = 5\\,\\mu\\text{F}$. What is the natural frequency of oscillation?",
    [
        "$1.59\\text{ kHz}$",
        "$10^4\\text{ Hz}$",
        "$3.18\\text{ kHz}$",
        "$795\\text{ Hz}$"
    ],
    0,
    "Angular frequency is $\\omega = \\frac{1}{\\sqrt{L C}} = \\frac{1}{\\sqrt{(2 \\times 10^{-3})(5 \\times 10^{-6})}} = \\frac{1}{\\sqrt{10^{-8}}} = 10^4\\text{ rad/s}$. The natural frequency is $f = \\frac{\\omega}{2\\pi} = \\frac{10^4}{2\\pi} \\approx 1591.5\\text{ Hz} \\approx 1.59\\text{ kHz}$."
)

# Subtopic 7: Transformers and AC generator
add_q(
    "Electromagnetic Induction and Alternating Currents", "Transformers and AC generator",
    "An ideal step-up transformer has a primary to secondary turns ratio of $N_p : N_s = 1 : 20$. If an input voltage of $110\\text{ V}$ is applied to the primary and primary current is $10\\text{ A}$, what are the secondary voltage and current?",
    [
        "$V_s = 2200\\text{ V}, I_s = 0.5\\text{ A}$",
        "$V_s = 2200\\text{ V}, I_s = 200\\text{ A}$",
        "$V_s = 5.5\\text{ V}, I_s = 200\\text{ A}$",
        "$V_s = 1100\\text{ V}, I_s = 1.0\\text{ A}$"
    ],
    0,
    "Transformer turns ratio gives $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = 20 \\implies V_s = 20 \\times 110 = 2200\\text{ V}$. For an ideal transformer (100% efficiency), input power equals output power: $V_p I_p = V_s I_s \\implies I_s = I_p \\frac{V_p}{V_s} = 10 \\times \\frac{1}{20} = 0.5\\text{ A}$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Transformers and AC generator",
    "Which of the following is NOT an energy loss mechanism in a real transformer?",
    [
        "Radiation loss due to charge annihilation",
        "Joule copper loss in windings ($I^2 R$)",
        "Eddy current loss in iron core",
        "Hysteresis loss in iron core"
    ],
    0,
    "Real transformer losses include: (1) Copper loss due to resistance of windings; (2) Eddy current loss in the laminated core; (3) Hysteresis loss due to cyclic magnetic reversal; (4) Flux leakage; (5) Humming noise (magnetostriction). Charge annihilation radiation is completely non-existent in transformers."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Transformers and AC generator",
    "An AC generator has a rectangular coil of $N$ turns and area $A$ rotating with constant angular velocity $\\omega$ in a uniform magnetic field $B$. The instantaneous EMF generated is:",
    [
        "$\\mathcal{E}(t) = N A B \\omega \\sin(\\omega t)$",
        "$\\mathcal{E}(t) = N A B \\cos(\\omega t)$",
        "$\\mathcal{E}(t) = \\frac{1}{2} N A B \\omega^2 \\sin(\\omega t)$",
        "$\\mathcal{E}(t) = N A B \\omega t$"
    ],
    0,
    "The magnetic flux through the coil is $\\Phi(t) = N B A \\cos(\\omega t)$. By Faraday's law of electromagnetic induction: $\\mathcal{E}(t) = -\\frac{d\\Phi}{dt} = -N B A (-\\omega \\sin(\\omega t)) = N A B \\omega \\sin(\\omega t)$."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Transformers and AC generator",
    "Laminating the iron core of a transformer with insulating varnish serves primarily to:",
    [
        "Reduce eddy current energy dissipation",
        "Reduce hysteresis loss",
        "Increase magnetic flux linkage",
        "Eliminate winding resistance"
    ],
    0,
    "Laminating the core breaks large circular eddy current loops into narrow paths with high transverse electrical resistance. Since eddy current power loss is proportional to the square of the sheet thickness ($P_{eddy} \\propto t^2$), thin laminations drastically suppress eddy current Joule heating."
)

add_q(
    "Electromagnetic Induction and Alternating Currents", "Transformers and AC generator",
    "A transformer cannot be used to step up or step down a steady DC voltage because:",
    [
        "A steady DC current produces a constant magnetic flux, so $\\frac{d\\Phi}{dt} = 0$ and no EMF is induced in the secondary",
        "DC current burns the primary winding instantaneously",
        "DC voltage has infinite wavelength",
        "Magnetic domains cannot align with DC"
    ],
    0,
    "Electromagnetic induction in the secondary winding requires a time-varying magnetic flux ($\\mathcal{E}_s = -N_s \\frac{d\\Phi}{dt}$). A steady DC current produces a constant magnetic field, so $\\frac{d\\Phi}{dt} = 0$, meaning zero voltage is induced in the secondary winding."
)

# ==========================================
# CHAPTER 15: Electromagnetic Waves (4 subtopics * 5 = 20 questions)
# ==========================================

# Subtopic 1: Displacement current
add_q(
    "Electromagnetic Waves", "Displacement current",
    "Maxwell's modification of Ampere's circuital law introduces the displacement current density $\\vec{J}_d$, defined as:",
    [
        "$\\vec{J}_d = \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$",
        "$\\vec{J}_d = \\mu_0 \\frac{\\partial \\vec{E}}{\\partial t}$",
        "$\\vec{J}_d = \\frac{1}{\\varepsilon_0} \\frac{\\partial \\vec{B}}{\\partial t}$",
        "$\\vec{J}_d = \\varepsilon_0 \\vec{E}$"
    ],
    0,
    "Maxwell realized that Ampere's law was incomplete for time-dependent fields (violating continuity $\\nabla \\cdot \\vec{J} = -\\frac{\\partial \\rho}{\\partial t}$). By adding the displacement current $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$, the generalized Ampere-Maxwell law becomes $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d)$, with displacement current density $\\vec{J}_d = \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$."
)

add_q(
    "Electromagnetic Waves", "Displacement current",
    "A parallel plate circular capacitor of plate radius $R$ and plate separation $d$ is charged with a constant current $I$. What is the displacement current between the plates?",
    [
        "$I$",
        "$0$",
        "$I \\frac{R}{d}$",
        "$\\frac{I}{2}$"
    ],
    0,
    "Between the plates, no conduction current flows ($I_c = 0$). By continuity of current through the Gaussian surface spanning the plates, the displacement current between the plates is identically equal to the conduction current in the connecting wires: $I_d = \\varepsilon_0 \\frac{d}{dt}\\left(E \\pi R^2\\right) = \\varepsilon_0 \\frac{d}{dt}\\left(\\frac{q}{\\varepsilon_0 A} A\\right) = \\frac{dq}{dt} = I$."
)

add_q(
    "Electromagnetic Waves", "Displacement current",
    "In the same charging circular capacitor of radius $R$ with charging current $I$, what is the induced magnetic field at distance $r < R$ from the central symmetry axis?",
    [
        "$\\frac{\\mu_0 I r}{2\\pi R^2}$",
        "$\\frac{\\mu_0 I}{2\\pi r}$",
        "$\\frac{\\mu_0 I r^2}{2\\pi R^3}$",
        "$0$"
    ],
    0,
    "Applying the Ampere-Maxwell law to a circular loop of radius $r < R$: $B(2\\pi r) = \\mu_0 I_{d, enc}$. Since the electric field is uniform, displacement current is distributed uniformly: $I_{d, enc} = I_d \\frac{\\pi r^2}{\\pi R^2} = I \\frac{r^2}{R^2}$. Thus: $B(2\\pi r) = \\mu_0 I \\frac{r^2}{R^2} \\implies B(r) = \\frac{\\mu_0 I r}{2\\pi R^2}$."
)

add_q(
    "Electromagnetic Waves", "Displacement current",
    "Which of Maxwell's equations directly implies that isolated magnetic monopoles do not exist in classical electromagnetism?",
    [
        "$\\nabla \\cdot \\vec{B} = 0$",
        "$\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}$",
        "$\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$",
        "$\\nabla \\times \\vec{B} = \\mu_0 \\vec{J} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$"
    ],
    0,
    "Gauss's law for magnetism states that $\\oint \\vec{B} \\cdot d\\vec{A} = 0$, or in differential form $\\nabla \\cdot \\vec{B} = 0$. This means magnetic field lines always form closed loops with neither sources nor sinks, establishing the absence of isolated magnetic monopoles."
)

add_q(
    "Electromagnetic Waves", "Displacement current",
    "A voltage $V(t) = V_0 \\sin(\\omega t)$ is applied across a parallel plate capacitor of capacitance $C$. The displacement current through the capacitor is:",
    [
        "$\\omega C V_0 \\cos(\\omega t)$",
        "$\\omega C V_0 \\sin(\\omega t)$",
        "$\\frac{V_0}{\\omega C} \\cos(\\omega t)$",
        "$0$"
    ],
    0,
    "Displacement current equals conduction current: $I_d = I_c = \\frac{dq}{dt} = \\frac{d}{dt}(C V(t)) = C \\frac{d}{dt}(V_0 \\sin(\\omega t)) = \\omega C V_0 \\cos(\\omega t)$."
)

# Subtopic 2: EM spectrum
add_q(
    "Electromagnetic Waves", "EM spectrum",
    "Which of the following correctly lists the components of the electromagnetic spectrum in order of increasing frequency (decreasing wavelength)?",
    [
        "Radio waves $<$ Microwaves $<$ Infrared $<$ Visible $<$ Ultraviolet $<$ X-rays $<$ Gamma rays",
        "Gamma rays $<$ X-rays $<$ Ultraviolet $<$ Visible $<$ Infrared $<$ Microwaves $<$ Radio waves",
        "Radio waves $<$ Infrared $<$ Microwaves $<$ Visible $<$ X-rays $<$ Ultraviolet $<$ Gamma rays",
        "Microwaves $<$ Radio waves $<$ Infrared $<$ Visible $<$ Ultraviolet $<$ X-rays $<$ Gamma rays"
    ],
    0,
    "The standard electromagnetic spectrum in order of increasing frequency (and photon energy): Radio waves ($10^4-10^9\\text{ Hz}$), Microwaves ($10^9-10^{11}\\text{ Hz}$), Infrared ($10^{11}-4\\times 10^{14}\\text{ Hz}$), Visible light ($4\\times 10^{14}-7.5\\times 10^{14}\\text{ Hz}$), Ultraviolet ($7.5\\times 10^{14}-10^{16}\\text{ Hz}$), X-rays ($10^{16}-10^{19}\\text{ Hz}$), Gamma rays ($> 10^{19}\\text{ Hz}$)."
)

add_q(
    "Electromagnetic Waves", "EM spectrum",
    "Microwave ovens heat food containing water molecules efficiently because microwave frequency is tuned to:",
    [
        "Resonant rotational excitation frequencies of polar water molecules",
        "Electronic transition levels of hydrogen",
        "Nuclear magnetic resonance",
        "Vibrational stretching of the O-H covalent bond"
    ],
    0,
    "Microwaves (typically $2.45\\text{ GHz}$) couple directly with the permanent electric dipole moment of water molecules in food, causing rapid rotational reorientation (dielectric heating) that frictionally generates thermal energy throughout the food."
)

add_q(
    "Electromagnetic Waves", "EM spectrum",
    "Ozone layer in the upper stratosphere protects terrestrial life by absorbing which harmful portion of the solar electromagnetic spectrum?",
    [
        "Ultraviolet radiation",
        "Infrared radiation",
        "Gamma rays",
        "Cosmic microwave background"
    ],
    0,
    "The stratospheric ozone ($O_3$) layer strongly absorbs solar ultraviolet radiation (particularly UV-B and UV-C wavelengths, $200-315\\text{ nm}$), protecting biological organisms from DNA cellular damage."
)

add_q(
    "Electromagnetic Waves", "EM spectrum",
    "Which electromagnetic waves are produced when high-energy electrons decelerate rapidly upon striking a heavy metal target (Bremsstrahlung)?",
    [
        "X-rays",
        "Gamma rays",
        "Ultraviolet rays",
        "Microwaves"
    ],
    0,
    "Continuous X-rays are produced by Bremsstrahlung ('braking radiation') when fast-moving electrons are rapidly decelerated by the strong Coulomb field of heavy target nuclei in an X-ray tube."
)

add_q(
    "Electromagnetic Waves", "EM spectrum",
    "The greenhouse effect on Earth is primarily caused by atmospheric absorption of which type of radiation emitted by the Earth's surface?",
    [
        "Infrared radiation",
        "Ultraviolet radiation",
        "Visible green light",
        "Microwaves"
    ],
    0,
    "The Earth absorbs high-energy short-wavelength visible sunlight and re-emits thermal energy as longer-wavelength infrared radiation. Greenhouse gases ($CO_2, H_2 O, CH_4$) absorb this outgoing infrared radiation, trapping heat in the lower atmosphere."
)

# Subtopic 3: Transverse nature of EM waves
add_q(
    "Electromagnetic Waves", "Transverse nature of EM waves",
    "In a plane electromagnetic wave propagating along the positive $z$-axis in vacuum, if the electric field is $\\vec{E} = E_0 \\sin(k z - \\omega t) \\hat{i}$, what is the magnetic field $\\vec{B}$?",
    [
        "$\\vec{B} = \\frac{E_0}{c} \\sin(k z - \\omega t) \\hat{j}$",
        "$\\vec{B} = -\\frac{E_0}{c} \\sin(k z - \\omega t) \\hat{j}$",
        "$\\vec{B} = \\frac{E_0}{c} \\sin(k z - \\omega t) \\hat{i}$",
        "$\\vec{B} = c E_0 \\sin(k z - \\omega t) \\hat{k}$"
    ],
    0,
    "The propagation direction is given by the Poynting vector $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B}) \\propto +\\hat{k}$. Since $\\vec{E} \\propto \\hat{i}$, we require $\\hat{i} \\times \\hat{u}_B = \\hat{k} \\implies \\hat{u}_B = \\hat{j}$. The ratio of amplitudes in vacuum is $E_0 / B_0 = c \\implies B_0 = E_0 / c$. Therefore, $\\vec{B} = \\frac{E_0}{c} \\sin(k z - \\omega t) \\hat{j}$."
)

add_q(
    "Electromagnetic Waves", "Transverse nature of EM waves",
    "Which physical phenomenon provides definitive experimental proof of the transverse nature of electromagnetic waves?",
    [
        "Polarization",
        "Interference",
        "Diffraction",
        "Refraction"
    ],
    0,
    "Interference, diffraction, and refraction occur in both longitudinal waves (like sound) and transverse waves. Only transverse waves possess a spatial vibration direction perpendicular to the propagation axis, allowing them to be polarized. Therefore, polarization conclusively proves that light and EM waves are transverse."
)

add_q(
    "Electromagnetic Waves", "Transverse nature of EM waves",
    "The speed of light in vacuum is related to the fundamental electromagnetic constants by Maxwell's relation:",
    [
        "$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$",
        "$c = \\sqrt{\\mu_0 \\varepsilon_0}$",
        "$c = \\sqrt{\\frac{\\mu_0}{\\varepsilon_0}}$",
        "$c = \\frac{1}{\\mu_0 \\varepsilon_0}$"
    ],
    0,
    "From Maxwell's wave equation derived from Faraday's and Ampere-Maxwell laws: $\\nabla^2 \\vec{E} = \\mu_0 \\varepsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2}$. Comparing with standard wave equation $\\nabla^2 \\psi = \\frac{1}{v^2} \\frac{\\partial^2 \\psi}{\\partial t^2}$ gives $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$."
)

add_q(
    "Electromagnetic Waves", "Transverse nature of EM waves",
    "In any electromagnetic wave in vacuum, what is the phase difference between the oscillating electric field $\\vec{E}$ and oscillating magnetic field $\\vec{B}$?",
    [
        "$0$ (they are in phase)",
        "$\\pi/2$ ($90^\\circ$)",
        "$\\pi$ ($180^\\circ$)",
        "$\\pi/4$ ($45^\\circ$)"
    ],
    0,
    "In a plane propagating electromagnetic wave in non-conducting vacuum, the electric field $\\vec{E}$ and magnetic field $\\vec{B}$ oscillate strictly in phase, reaching their maximum, zero, and minimum values at the exact same positions and instants."
)

add_q(
    "Electromagnetic Waves", "Transverse nature of EM waves",
    "The ratio of electric energy density $u_E$ to magnetic energy density $u_B$ in a plane electromagnetic wave in vacuum is:",
    [
        "$1 : 1$",
        "$c : 1$",
        "$c^2 : 1$",
        "$1 : 2$"
    ],
    0,
    "Electric energy density is $u_E = \\frac{1}{2} \\varepsilon_0 E^2$. Magnetic energy density is $u_B = \\frac{B^2}{2 \\mu_0}$. Since $E = c B$ and $c^2 = \\frac{1}{\\mu_0 \\varepsilon_0}$, we have $u_E = \\frac{1}{2} \\varepsilon_0 (c B)^2 = \\frac{1}{2} \\varepsilon_0 \\left(\\frac{1}{\\mu_0 \\varepsilon_0}\\right) B^2 = \\frac{B^2}{2 \\mu_0} = u_B$. Energy is shared equally ($1 : 1$)."
)

# Subtopic 4: Energy density and Poynting vector
add_q(
    "Electromagnetic Waves", "Energy density and Poynting vector",
    "The Poynting vector $\\vec{S}$, which represents the rate of electromagnetic energy transport per unit area, is defined as:",
    [
        "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
        "$\\vec{S} = \\varepsilon_0 (\\vec{E} \\times \\vec{B})$",
        "$\\vec{S} = \\frac{1}{\\varepsilon_0} (\\vec{E} \\cdot \\vec{B})$",
        "$\\vec{S} = \\mu_0 (\\vec{E} \\times \\vec{B})$"
    ],
    0,
    "The Poynting vector is defined as $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$. Its direction gives the direction of wave energy propagation, and its magnitude represents energy flux (power per unit area, $\\text{W/m}^2$)."
)

add_q(
    "Electromagnetic Waves", "Energy density and Poynting vector",
    "A laser beam with intensity $I = 1.5\\text{ kW/m}^2$ falls perpendicularly on a completely absorbing surface of area $A = 2.0\\text{ m}^2$. What is the radiation force exerted on the surface?",
    [
        "$1.0 \\times 10^{-5}\\text{ N}$",
        "$2.0 \\times 10^{-5}\\text{ N}$",
        "$5.0 \\times 10^{-6}\\text{ N}$",
        "$3.0 \\times 10^{-5}\\text{ N}$"
    ],
    0,
    "For total absorption, radiation pressure is $P_{rad} = \\frac{I}{c}$. The radiation force is $F = P_{rad} A = \\frac{I A}{c} = \\frac{(1500\\text{ W/m}^2) \\times (2.0\\text{ m}^2)}{3.0 \\times 10^8\\text{ m/s}} = \\frac{3000}{3.0 \\times 10^8} = 1.0 \\times 10^{-5}\\text{ N}$."
)

add_q(
    "Electromagnetic Waves", "Energy density and Poynting vector",
    "If the laser beam in the previous question were directed onto a perfectly reflecting surface, what would be the radiation force?",
    [
        "$2.0 \\times 10^{-5}\\text{ N}$",
        "$1.0 \\times 10^{-5}\\text{ N}$",
        "$4.0 \\times 10^{-5}\\text{ N}$",
        "$0$"
    ],
    0,
    "For a perfectly reflecting mirror, photon momentum is reversed, so momentum transfer per photon is $2 p = \\frac{2 E}{c}$. The radiation force is doubled: $F = \\frac{2 I A}{c} = 2 \\times (1.0 \\times 10^{-5}) = 2.0 \\times 10^{-5}\\text{ N}$."
)

add_q(
    "Electromagnetic Waves", "Energy density and Poynting vector",
    "The amplitude of the electric field in an electromagnetic wave is $E_0 = 60\\text{ V/m}$. What is the average intensity $I_{avg}$ of the wave?",
    [
        "$4.77\\text{ W/m}^2$",
        "$9.54\\text{ W/m}^2$",
        "$2.38\\text{ W/m}^2$",
        "$1.20\\text{ W/m}^2$"
    ],
    0,
    "The average intensity of a plane electromagnetic wave is $I_{avg} = \\frac{1}{2} c \\varepsilon_0 E_0^2 = \\frac{1}{2} (3 \\times 10^8) \\times (8.854 \\times 10^{-12}) \\times (60)^2 = 1.5 \\times 10^8 \\times 8.854 \\times 10^{-12} \\times 3600 = 5400 \\times 10^8 \\times 8.854 \\times 10^{-12} = 5.4 \\times 10^{11} \\times 8.854 \\times 10^{-12} = 4.78\\text{ W/m}^2$."
)

add_q(
    "Electromagnetic Waves", "Energy density and Poynting vector",
    "A point source radiates electromagnetic waves isotropically with power $P = 1000\\text{ W}$. What is the amplitude of the electric field $E_0$ at a distance of $r = 3.0\\text{ m}$ from the source?",
    [
        "$57.7\\text{ V/m}$",
        "$81.6\\text{ V/m}$",
        "$40.8\\text{ V/m}$",
        "$115.4\\text{ V/m}$"
    ],
    0,
    "Intensity at distance $r$ is $I = \\frac{P}{4\\pi r^2} = \\frac{1000}{4\\pi (9)} = \\frac{1000}{36\\pi} \\approx 8.84\\text{ W/m}^2$. Since $I = \\frac{1}{2} c \\varepsilon_0 E_0^2$: $E_0 = \\sqrt{\\frac{2 I}{c \\varepsilon_0}} = \\sqrt{\\frac{2 \\times 8.84}{(3 \\times 10^8)(8.854 \\times 10^{-12})}} = \\sqrt{\\frac{17.68}{2.656 \\times 10^{-3}}} = \\sqrt{6656} \\approx 81.6\\text{ V/m}$."
)

with open("scripts/physics_top100/phys_b3_p2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Physics Batch 3 Part 2.")
