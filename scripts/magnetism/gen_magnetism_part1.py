import json
import os

# Batch 1:
# 1. Biot-Savart law and applications (45 MCQs)
# 2. Ampere's law (45 MCQs)

def format_and_balance(raw_questions, subtopic):
    formatted = []
    for i, q in enumerate(raw_questions):
        target_idx = i % 4
        orig_opts = list(q["options"])
        orig_correct = q["correctAnswer"]
        correct_text = orig_opts[orig_correct]
        other_opts = [opt for j, opt in enumerate(orig_opts) if j != orig_correct]
        
        new_opts = []
        other_ptr = 0
        for pos in range(4):
            if pos == target_idx:
                new_opts.append(correct_text)
            else:
                new_opts.append(other_opts[other_ptr])
                other_ptr += 1
        
        formatted.append({
            "question": q["question"],
            "options": new_opts,
            "correctAnswer": target_idx,
            "explanation": q["explanation"],
            "difficulty": "Medium",
            "chapter": "Magnetic Effects of Current and Magnetism",
            "subTopic": subtopic,
            "marks": 4,
            "negativeMarks": 1,
            "type": "MCQ"
        })
    return formatted

def create_biot_savart_questions():
    questions = []

    # 1
    questions.append({
        "question": "According to the Biot-Savart law, the magnetic field $d\\vec{B}$ at a distance $\\vec{r}$ from a current element $I d\\vec{l}$ is given by:",
        "options": ["$\\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\hat{r})}{r^2}$", "$\\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\cdot \\hat{r})}{r^2}$", "$\\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\vec{r})}{r^2}$", "$\\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{l}}{r^3}$"],
        "correctAnswer": 0,
        "explanation": "By Biot-Savart law: $d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I(d\\vec{l} \\times \\hat{r})}{r^2} = \\frac{\\mu_0}{4\\pi} \\frac{I(d\\vec{l} \\times \\vec{r})}{r^3}$."
    })
    # 2
    questions.append({
        "question": "A circular coil of radius $R$ carries a steady current $I$. The ratio of the magnetic field at the center of the coil to that at an axial distance $x = R\\sqrt{3}$ from the center is:",
        "options": ["$8 : 1$", "$4 : 1$", "$2 : 1$", "$16 : 1$"],
        "correctAnswer": 0,
        "explanation": "Field at center: $B_c = \\frac{\\mu_0 I}{2R}$. Field on axis: $B_{\\text{axis}} = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$. For $x = R\\sqrt{3}$, $R^2 + x^2 = 4R^2$, so $(4R^2)^{3/2} = 8R^3$. Thus $B_{\\text{axis}} = \\frac{\\mu_0 I R^2}{2 \\times 8R^3} = \\frac{\\mu_0 I}{16R} = \\frac{B_c}{8}$. The ratio is $8 : 1$."
    })
    # 3
    questions.append({
        "question": "A circular arc of radius $R$ subtends an angle of $60^\\circ$ at its center and carries a current $I$. The magnitude of magnetic field at the center is:",
        "options": ["$\\frac{\\mu_0 I}{12R}$", "$\\frac{\\mu_0 I}{6R}$", "$\\frac{\\mu_0 I}{24R}$", "$\\frac{\\mu_0 I}{4R}$"],
        "correctAnswer": 0,
        "explanation": "Field due to an arc subtending angle $\\theta$ (in radians) is $B = \\frac{\\mu_0 I}{4\\pi R}\\theta$. For $\\theta = 60^\\circ = \\pi/3\\text{ rad}$: $B = \\frac{\\mu_0 I}{4\\pi R}\\left(\\frac{\\pi}{3}\\right) = \\frac{\\mu_0 I}{12R}$."
    })
    # 4
    questions.append({
        "question": "Two identical circular coils of radius $R$ each carrying current $I$ are placed coaxially separated by a distance $R$ such that their magnetic fields reinforce each other. This setup is known as Helmholtz coils. The magnetic field at the midpoint on the axis is:",
        "options": ["$\\frac{8\\mu_0 I}{5\\sqrt{5}R}$", "$\\frac{4\\mu_0 I}{5\\sqrt{5}R}$", "$\\frac{\\mu_0 I}{2R}$", "$\\frac{16\\mu_0 I}{5\\sqrt{5}R}$"],
        "correctAnswer": 0,
        "explanation": "Midpoint is at $x = R/2$ from each coil. For one coil: $B_1 = \\frac{\\mu_0 I R^2}{2(R^2 + R^2/4)^{3/2}} = \\frac{\\mu_0 I R^2}{2(5/4 R^2)^{3/2}} = \\frac{\\mu_0 I R^2}{2 \\times \\frac{5\\sqrt{5}}{8} R^3} = \\frac{4\\mu_0 I}{5\\sqrt{5}R}$. Total field for two coils is $2 B_1 = \\frac{8\\mu_0 I}{5\\sqrt{5}R}$."
    })
    # 5
    questions.append({
        "question": "A wire of length $L$ carrying current $I$ is first bent into a circular loop of 1 turn, producing a magnetic field $B$ at its center. If the same wire is now bent into a circular coil of 3 turns carrying the same current $I$, the magnetic field at the new center will be:",
        "options": ["$9B$", "$3B$", "$B/3$", "$27B$"],
        "correctAnswer": 0,
        "explanation": "Length $L = 2\\pi R_1 = n(2\\pi R_n) \\implies R_n = R_1 / n$. Field at center $B_n = \\frac{\\mu_0 n I}{2 R_n} = \\frac{\\mu_0 n I}{2 (R_1 / n)} = n^2 B_1$. For $n = 3$, $B_3 = 3^2 B = 9B$."
    })
    # 6
    questions.append({
        "question": "Two concentric circular coils of radii $R$ and $2R$ carry currents $I_1$ and $I_2$ in opposite directions. If the net magnetic field at their common center is zero, then the ratio $I_1 / I_2$ must be:",
        "options": ["$1/2$", "$2$", "$1/4$", "$4$"],
        "correctAnswer": 0,
        "explanation": "$B_1 = B_2 \\implies \\frac{\\mu_0 I_1}{2R} = \\frac{\\mu_0 I_2}{2(2R)} \\implies I_1 = \\frac{I_2}{2} \\implies \\frac{I_1}{I_2} = \\frac{1}{2}$."
    })
    # 7
    questions.append({
        "question": "Two identical circular loops of radius $R$ carrying equal current $I$ are placed in perpendicular planes (one in the $xy$-plane and the other in the $yz$-plane) with their centers coinciding. The magnitude of resultant magnetic field at their common center is:",
        "options": ["$\\frac{\\mu_0 I}{\\sqrt{2}R}$", "$\\frac{\\mu_0 I}{2R}$", "$\\frac{\\sqrt{2}\\mu_0 I}{R}$", "$\\frac{\\mu_0 I}{4R}$"],
        "correctAnswer": 0,
        "explanation": "Field due to first loop is $\\vec{B}_1 = \\frac{\\mu_0 I}{2R}\\hat{k}$. Field due to second loop is $\\vec{B}_2 = \\frac{\\mu_0 I}{2R}\\hat{i}$. Since they are mutually perpendicular, $B_{\\text{net}} = \\sqrt{B_1^2 + B_2^2} = \\sqrt{2}\\left(\\frac{\\mu_0 I}{2R}\\right) = \\frac{\\mu_0 I}{\\sqrt{2}R}$."
    })
    # 8
    questions.append({
        "question": "A circular loop of radius $R$ carries a current $I$. At what distance $x$ along the axis from the center of the loop is the magnetic field equal to $\\frac{1}{2\\sqrt{2}}$ times the magnetic field at the center?",
        "options": ["$R$", "$R/2$", "$R\\sqrt{3}$", "$2R$"],
        "correctAnswer": 0,
        "explanation": "We need $\\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}} = \\frac{1}{2\\sqrt{2}} \\frac{\\mu_0 I}{2R} = \\frac{\\mu_0 I}{4\\sqrt{2}R}$.\nThus $\\frac{R^2}{(R^2 + x^2)^{3/2}} = \\frac{1}{2\\sqrt{2}R} \\implies (R^2 + x^2)^{3/2} = 2\\sqrt{2}R^3 = (2R^2)^{3/2} \\implies R^2 + x^2 = 2R^2 \\implies x = R$."
    })
    # 9
    questions.append({
        "question": "An electron revolves in a circular orbit of radius $r$ with angular speed $\\omega$. The magnetic field produced by the electron at the center of the orbit is:",
        "options": ["$\\frac{\\mu_0 e \\omega}{4\\pi r}$", "$\\frac{\\mu_0 e \\omega}{2\\pi r}$", "$\\frac{\\mu_0 e \\omega^2}{4\\pi r}$", "$\\frac{\\mu_0 e}{2\\pi r \\omega}$"],
        "correctAnswer": 0,
        "explanation": "Current $I = \\frac{e}{T} = \\frac{e \\omega}{2\\pi}$. Magnetic field at the center of a circular loop is $B = \\frac{\\mu_0 I}{2r} = \\frac{\\mu_0 (e\\omega / 2\\pi)}{2r} = \\frac{\\mu_0 e \\omega}{4\\pi r}$."
    })
    # 10
    questions.append({
        "question": "A steady current $I$ flows in a semicircular wire of radius $R$ as shown. The magnetic field at the center of curvature $O$ due only to the semicircular arc is:",
        "options": ["$\\frac{\\mu_0 I}{4R}$", "$\\frac{\\mu_0 I}{2R}$", "$\\frac{\\mu_0 I}{8R}$", "$\\frac{\\mu_0 I}{\\pi R}$"],
        "correctAnswer": 0,
        "explanation": "For a full circle, $B = \\frac{\\mu_0 I}{2R}$. For a semicircle (subtending angle $\\pi$), the field is half: $B = \\frac{\\mu_0 I}{4R}$."
    })
    # 11
    questions.append({
        "question": "What is the magnetic field at the center of a circular loop of radius $R$ carrying current $I$, if the current enters and leaves the loop at two diametrically opposite points through straight leads?",
        "options": ["Zero", "$\\frac{\\mu_0 I}{2R}$", "$\\frac{\\mu_0 I}{4R}$", "$\\frac{\\mu_0 I}{\\pi R}$"],
        "correctAnswer": 0,
        "explanation": "Current divides into two equal halves $I/2$ flowing in opposite semicircular halves. The magnetic fields produced at the center are equal in magnitude ($B = \\frac{\\mu_0 (I/2)}{4R}$) but opposite in direction, cancelling out completely to zero."
    })
    # 12
    questions.append({
        "question": "A current $I$ enters a circular wire loop at point $A$ and leaves at point $B$ such that the minor arc subtends an angle $\\theta$ at the center. The net magnetic field at the center of the loop is:",
        "options": ["Zero", "$\\frac{\\mu_0 I}{4\\pi R}\\theta$", "$\\frac{\\mu_0 I}{2\\pi R}(\\pi - \\theta)$", "$\\frac{\\mu_0 I}{4R}$"],
        "correctAnswer": 0,
        "explanation": "Let resistances be $R_1 \\propto \\theta$ and $R_2 \\propto (2\\pi - \\theta)$. In parallel, $I_1 R_1 = I_2 R_2 \\implies I_1 \\theta = I_2 (2\\pi - \\theta)$. Since magnetic field of an arc is proportional to $I\\theta$, $B_1 \\propto I_1 \\theta$ and $B_2 \\propto I_2(2\\pi - \\theta)$, which are equal in magnitude and opposite in direction. The net field at the center is always zero for any angle $\\theta$."
    })
    # 13
    questions.append({
        "question": "The dimension of $\\mu_0$ (permeability of free space) is:",
        "options": ["$[\\text{M L T}^{-2} \\text{A}^{-2}]$", "$[\\text{M L}^2 \\text{T}^{-2} \\text{A}^{-1}]$", "$[\\text{M L}^{-1} \\text{T}^{-2} \\text{A}^{-2}]$", "$[\\text{M}^{-1} \\text{L T}^2 \\text{A}^2]$"],
        "correctAnswer": 0,
        "explanation": "From force per unit length: $\\frac{F}{L} = \\frac{\\mu_0 I^2}{2\\pi d} \\implies [\\mu_0] = \\frac{[F][d]}{[L][I^2]} = \\frac{[\\text{M L T}^{-2}][\\text{L}]}{[\\text{L}][\\text{A}^2]} = [\\text{M L T}^{-2} \\text{A}^{-2}]$."
    })
    # 14
    questions.append({
        "question": "A circular loop of radius $a$ carries a current $I$. The distance along the axis of the loop where the magnetic field is $\\frac{1}{8}$ of the field at its center is:",
        "options": ["$a\\sqrt{3}$", "$a$", "$a\\sqrt{2}$", "$2a$"],
        "correctAnswer": 0,
        "explanation": "$B_{\\text{axis}} = \\frac{B_c}{8} \\implies \\frac{\\mu_0 I a^2}{2(a^2 + x^2)^{3/2}} = \\frac{1}{8}\\frac{\\mu_0 I}{2a} \\implies (a^2 + x^2)^{3/2} = 8a^3 = (4a^2)^{3/2} \\implies a^2 + x^2 = 4a^2 \\implies x^2 = 3a^2 \\implies x = a\\sqrt{3}$."
    })
    # 15
    questions.append({
        "question": "In a hydrogen atom, an electron moves in a circle of radius $0.53\\text{ \\AA}$ with a speed of $2.2 \\times 10^6\\text{ m/s}$. The magnetic field produced at the nucleus is approximately:",
        "options": ["$12.5\\text{ T}$", "$6.25\\text{ T}$", "$1.25\\text{ T}$", "$25.0\\text{ T}$"],
        "correctAnswer": 0,
        "explanation": "Current $I = \\frac{e v}{2\\pi r} = \\frac{1.6 \\times 10^{-19} \\times 2.2 \\times 10^6}{2\\pi \\times 0.53 \\times 10^{-10}} \\approx 1.057\\text{ mA}$.\n$B = \\frac{\\mu_0 I}{2r} = \\frac{4\\pi \\times 10^{-7} \\times 1.057 \\times 10^{-3}}{2 \\times 0.53 \\times 10^{-10}} \\approx 12.5\\text{ T}$."
    })
    # 16
    questions.append({
        "question": "Two circular coils have radii in the ratio $1:2$ and number of turns in the ratio $2:1$. If they carry the same current, the ratio of magnetic fields at their centers is:",
        "options": ["$4 : 1$", "$1 : 1$", "$2 : 1$", "$1 : 4$"],
        "correctAnswer": 0,
        "explanation": "$B = \\frac{\\mu_0 N I}{2R} \\implies \\frac{B_1}{B_2} = \\frac{N_1}{N_2} \\times \\frac{R_2}{R_1} = \\left(\\frac{2}{1}\\right) \\times \\left(\\frac{2}{1}\\right) = 4 : 1$."
    })
    # 17
    questions.append({
        "question": "A charged ring of radius $R$ with uniform linear charge density $\\lambda$ rotates about its axis with angular velocity $\\omega$. The magnetic field at its center is:",
        "options": ["$\\frac{\\mu_0 \\lambda \\omega}{2}$", "$\\mu_0 \\lambda \\omega$", "$\\frac{\\mu_0 \\lambda \\omega R}{2}$", "$\\frac{\\mu_0 \\lambda \\omega}{4}$"],
        "correctAnswer": 0,
        "explanation": "Total charge $Q = 2\\pi R \\lambda$. Current $I = \\frac{Q}{T} = \\frac{Q\\omega}{2\\pi} = \\frac{2\\pi R \\lambda \\omega}{2\\pi} = \\lambda R \\omega$. Magnetic field at center $B = \\frac{\\mu_0 I}{2R} = \\frac{\\mu_0 \\lambda R \\omega}{2R} = \\frac{\\mu_0 \\lambda \\omega}{2}$."
    })
    # 18
    questions.append({
        "question": "A uniformly charged non-conducting disc of surface charge density $\\sigma$ and radius $R$ is rotated about its central axis with constant angular velocity $\\omega$. The magnetic field at the center of the disc is:",
        "options": ["$\\frac{\\mu_0 \\sigma \\omega R}{2}$", "$\\mu_0 \\sigma \\omega R$", "$\\frac{\\mu_0 \\sigma \\omega R}{4}$", "$\\frac{\\mu_0 \\sigma \\omega R^2}{2}$"],
        "correctAnswer": 0,
        "explanation": "Consider a ring of radius $r$ and width $dr$. Charge $dq = \\sigma (2\\pi r dr)$. Current $dI = dq \\frac{\\omega}{2\\pi} = \\sigma \\omega r dr$. Field $dB = \\frac{\\mu_0 dI}{2r} = \\frac{\\mu_0 \\sigma \\omega dr}{2}$. Total field $B = \\int_0^R dB = \\frac{\\mu_0 \\sigma \\omega R}{2}$."
    })
    # 19
    questions.append({
        "question": "Which of the following statements about Biot-Savart law and Coulomb's law is FALSE?",
        "options": ["Both fields are produced by scalar sources", "Coulomb's field is along the displacement vector while Biot-Savart field is perpendicular to the plane containing current element and displacement vector", "Both are long-range inverse square laws", "Biot-Savart field depends on the angle between current element and position vector"],
        "correctAnswer": 0,
        "explanation": "Electrostatic field is produced by a scalar source (charge $q$), whereas magnetic field is produced by a vector source (current element $I d\\vec{l}$). Hence, stating that both are produced by scalar sources is false."
    })
    # 20
    questions.append({
        "question": "Along the axis of a circular current loop of radius $R$, the points where the rate of change of magnetic field with distance $\\frac{dB}{dx}$ is maximum (points of inflection where $\\frac{d^2B}{dx^2} = 0$) are located at:",
        "options": ["$x = \\pm R/2$", "$x = \\pm R$", "$x = \\pm R/\\sqrt{2}$", "$x = \\pm R\\sqrt{3}$"],
        "correctAnswer": 0,
        "explanation": "Differentiating the axial field $B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$ twice with respect to $x$ and setting $\\frac{d^2B}{dx^2} = 0$ yields $x = \\pm R/2$. This principle is utilized in Helmholtz coils to obtain a highly uniform field."
    })
    # 21
    questions.append({
        "question": "A circular current loop of radius $R$ produces magnetic field $B_0$ at its center. The fractional decrease in magnetic field at a small axial distance $x$ ($x \\ll R$) from the center is approximately:",
        "options": ["$\\frac{3}{2}\\frac{x^2}{R^2}$", "$\\frac{1}{2}\\frac{x^2}{R^2}$", "$\\frac{3x}{R}$", "$\\frac{x^2}{R^2}$"],
        "correctAnswer": 0,
        "explanation": "$B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}} = B_0\\left(1 + \\frac{x^2}{R^2}\\right)^{-3/2} \\approx B_0\\left(1 - \\frac{3}{2}\\frac{x^2}{R^2}\\right)$. The fractional decrease is $\\frac{B_0 - B(x)}{B_0} = \\frac{3}{2}\\frac{x^2}{R^2}$."
    })
    # 22
    questions.append({
        "question": "A current $I$ flows in a conductor shaped as shown: two concentric circular arcs of radii $R_1$ and $R_2$ ($R_2 > R_1$) connected by radial straight segments, subtending angle $\\theta$ at common center $O$. The magnetic field at $O$ is:",
        "options": ["$\\frac{\\mu_0 I \\theta}{4\\pi}\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$", "$\\frac{\\mu_0 I \\theta}{4\\pi}\\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$", "$\\frac{\\mu_0 I}{4\\pi}\\left(\\frac{R_2 - R_1}{R_1 R_2}\\right)$", "Zero"],
        "correctAnswer": 0,
        "explanation": "The radial straight segments point directly towards/away from $O$, so $d\\vec{l} \\times \\hat{r} = 0$, giving zero field. The two arcs carry current in opposite angular directions, so $B = B_1 - B_2 = \\frac{\\mu_0 I \\theta}{4\\pi R_1} - \\frac{\\mu_0 I \\theta}{4\\pi R_2} = \\frac{\\mu_0 I \\theta}{4\\pi}\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$."
    })
    # 23
    questions.append({
        "question": "In SI units, the value of $\\frac{\\mu_0}{4\\pi}$ is exactly:",
        "options": ["$10^{-7}\\text{ T}\\cdot\\text{m/A}$", "$4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$", "$10^{-5}\\text{ T}\\cdot\\text{m/A}$", "$9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$"],
        "correctAnswer": 0,
        "explanation": "By definition, $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$, hence $\\frac{\\mu_0}{4\\pi} = 10^{-7}\\text{ T}\\cdot\\text{m/A}$ (or $\\text{N/A}^2$)."
    })
    # 24
    questions.append({
        "question": "A circular loop carrying current $I$ has magnetic moment $M$. If the current is doubled and radius is halved, the new magnetic moment will be:",
        "options": ["$M/2$", "$M$", "$2M$", "$M/4$"],
        "correctAnswer": 0,
        "explanation": "Magnetic moment $M = I A = I(\\pi R^2)$. When $I' = 2I$ and $R' = R/2$, $M' = (2I)\\pi(R/2)^2 = \\frac{2}{4} I \\pi R^2 = \\frac{M}{2}$."
    })
    # 25
    questions.append({
        "question": "The magnetic field at a point on the axis of a circular current-carrying coil of radius $R$ at distance $x \\gg R$ varies with distance $x$ as:",
        "options": ["$x^{-3}$", "$x^{-2}$", "$x^{-1}$", "$x^{-3/2}$"],
        "correctAnswer": 0,
        "explanation": "For $x \\gg R$: $B = \\frac{\\mu_0 I R^2}{2 x^3} = \\frac{\\mu_0 (I \\pi R^2)}{2\\pi x^3} = \\frac{\\mu_0}{4\\pi}\\frac{2M}{x^3} \\propto x^{-3}$, exactly like an electric dipole field."
    })
    # 26
    questions.append({
        "question": "Three concentric circular loops of radii $R, 2R, 3R$ carry currents $I, 2I, 3I$ respectively in alternating clockwise and anticlockwise directions. The net magnetic field at their common center is:",
        "options": ["$\\frac{\\mu_0 I}{2R}$", "$\\frac{3\\mu_0 I}{2R}$", "Zero", "$\\frac{\\mu_0 I}{R}$"],
        "correctAnswer": 0,
        "explanation": "$B_1 = \\frac{\\mu_0 I}{2R}$, $B_2 = \\frac{\\mu_0 (2I)}{2(2R)} = \\frac{\\mu_0 I}{2R}$, $B_3 = \\frac{\\mu_0 (3I)}{2(3R)} = \\frac{\\mu_0 I}{2R}$. Alternating directions: $B_{\\text{net}} = B_1 - B_2 + B_3 = \\frac{\\mu_0 I}{2R} - \\frac{\\mu_0 I}{2R} + \\frac{\\mu_0 I}{2R} = \\frac{\\mu_0 I}{2R}$."
    })
    # 27
    questions.append({
        "question": "A current $I$ is flowing in a circular coil of radius $R$ having $N$ turns. If the coil is unwound and rewound into another circular coil of radius $R/2$, what should be the current in the new coil so that the magnetic field at its center remains the same?",
        "options": ["$I/4$", "$I/2$", "$I$", "$2I$"],
        "correctAnswer": 0,
        "explanation": "Length $L = N(2\\pi R) = N'(2\\pi R/2) \\implies N' = 2N$. Center field $B = \\frac{\\mu_0 N I}{2R}$. In the new coil: $B' = \\frac{\\mu_0 N' I'}{2(R/2)} = \\frac{\\mu_0 (2N) I'}{R} = \\frac{4\\mu_0 N I'}{2R}$. For $B' = B$: $4 I' = I \\implies I' = I/4$."
    })
    # 28
    questions.append({
        "question": "A straight wire carrying current $I$ is extended to infinity in both directions. The magnetic field at any point situated along the length of the wire (collinear with the wire axis) is:",
        "options": ["Zero", "Infinite", "$\\frac{\\mu_0 I}{2\\pi r}$", "$\\frac{\\mu_0 I}{4\\pi r}$"],
        "correctAnswer": 0,
        "explanation": "For any point lying along the line of the current element, the position vector $\\vec{r}$ is parallel to $d\\vec{l}$. Thus $d\\vec{l} \\times \\hat{r} = 0$, so the magnetic field everywhere on the wire's axis is identically zero."
    })
    # 29
    questions.append({
        "question": "Two circular coils $A$ and $B$ are made from the same wire. Coil $A$ has radius $R_1$ and $N_1$ turns, while coil $B$ has radius $R_2$ and $N_2$ turns. If the same potential difference $V$ is applied across each coil, the ratio of magnetic fields at their centers $B_A / B_B$ is:",
        "options": ["$\\frac{R_2^2}{R_1^2}$", "$\\frac{R_1^2}{R_2^2}$", "$\\frac{R_2}{R_1}$", "$\\frac{R_1}{R_2}$"],
        "correctAnswer": 0,
        "explanation": "Wire length $L = N(2\\pi R)$. Resistance $R_{\\text{res}} \\propto L \\propto N R$. Current $I = V / R_{\\text{res}} \\propto \\frac{1}{NR}$. Magnetic field at center $B = \\frac{\\mu_0 N I}{2R} \\propto \\frac{N(1/NR)}{R} = \\frac{1}{R^2}$. Thus $B_A / B_B = (R_2 / R_1)^2$."
    })
    # 30
    questions.append({
        "question": "A current $I$ flows in a thin wire twisted into a spiral having $N$ closely wound turns with inner radius $a$ and outer radius $b$. The magnetic field at the center of the spiral is:",
        "options": ["$\\frac{\\mu_0 N I}{2(b - a)} \\ln\\left(\\frac{b}{a}\\right)$", "$\\frac{\\mu_0 N I}{2(b + a)}$", "$\\frac{\\mu_0 N I}{2b}$", "$\\frac{\\mu_0 N I}{2\\pi(b - a)} \\ln\\left(\\frac{b}{a}\\right)$"],
        "correctAnswer": 0,
        "explanation": "Number of turns per unit radial width is $n = \\frac{N}{b - a}$. For a ring of radius $r$ and thickness $dr$, turns $dN = n dr$. Field $dB = \\frac{\\mu_0 dN I}{2r} = \\frac{\\mu_0 N I}{2(b - a)}\\frac{dr}{r}$. Integrating from $a$ to $b$: $B = \\frac{\\mu_0 N I}{2(b - a)} \\ln(b/a)$."
    })
    # 31
    questions.append({
        "question": "Two identical circular coils of radius $R$ and $N$ turns carry current $I$. They are placed horizontally one above the other separated by a vertical distance $R$ (Helmholtz arrangement). The magnetic field at any point near the midpoint between them is:",
        "options": ["Very uniform and parallel to the axis", "Zero", "Varying sharply as $x^3$", "Radially outward"],
        "correctAnswer": 0,
        "explanation": "At the midpoint between Helmholtz coils separated by $R$, the first and second derivatives of the axial field vanish: $\\frac{dB}{dx} = 0$ and $\\frac{d^2B}{dx^2} = 0$. Consequently, the field is remarkably uniform over a significant central volume."
    })
    # 32
    questions.append({
        "question": "A current loop consists of two semicircles of radii $a$ and $b$ in the same plane carrying current $I$ in the same sense, connected by straight segments. The magnetic field at the common center is:",
        "options": ["$\\frac{\\mu_0 I}{4}\\left(\\frac{1}{a} + \\frac{1}{b}\\right)$", "$\\frac{\\mu_0 I}{4}\\left(\\frac{1}{a} - \\frac{1}{b}\\right)$", "$\\frac{\\mu_0 I}{2}\\left(\\frac{1}{a} + \\frac{1}{b}\\right)$", "Zero"],
        "correctAnswer": 0,
        "explanation": "Both semicircles produce magnetic fields in the same direction perpendicular to the plane. $B = \\frac{\\mu_0 I}{4a} + \\frac{\\mu_0 I}{4b} = \\frac{\\mu_0 I}{4}\\left(\\frac{1}{a} + \\frac{1}{b}\\right)$."
    })
    # 33
    questions.append({
        "question": "The magnetic field produced by a moving point charge $q$ with velocity $\\vec{v}$ ($v \\ll c$) at a position $\\vec{r}$ relative to the charge is:",
        "options": ["$\\frac{\\mu_0}{4\\pi} \\frac{q(\\vec{v} \\times \\hat{r})}{r^2}$", "$\\frac{\\mu_0}{4\\pi} \\frac{q(\\vec{v} \\cdot \\hat{r})}{r^2}$", "$\\frac{\\mu_0}{4\\pi} \\frac{q \\vec{v}}{r^3}$", "$\\frac{\\mu_0}{4\\pi} \\frac{q(\\hat{r} \\times \\vec{v})}{r^3}$"],
        "correctAnswer": 0,
        "explanation": "Replacing $I d\\vec{l}$ with $q\\vec{v}$ in Biot-Savart law yields the non-relativistic magnetic field of a moving charge: $\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{q(\\vec{v} \\times \\hat{r})}{r^2}$."
    })
    # 34
    questions.append({
        "question": "A long straight wire carrying current $I$ is bent into a loop of radius $R$ at one point, with the loop lying in the same plane as the wire. The magnetic field at the center of the circular loop is:",
        "options": ["$\\frac{\\mu_0 I}{2R}\\left(1 + \\frac{1}{\\pi}\\right)$ or $\\frac{\\mu_0 I}{2R}\\left(1 - \\frac{1}{\\pi}\\right)$ depending on current sense", "$\\frac{\\mu_0 I}{2R}$ only", "$\\frac{\\mu_0 I}{2\\pi R}$ only", "Zero"],
        "correctAnswer": 0,
        "explanation": "The field is the vector sum of the circular loop ($B_{\\text{loop}} = \\frac{\\mu_0 I}{2R}$) and the straight wire ($B_{\\text{wire}} = \\frac{\\mu_0 I}{2\\pi R}$). Both are perpendicular to the plane, so $B_{\\text{net}} = \\frac{\\mu_0 I}{2R}\\left(1 \\pm \\frac{1}{\\pi}\\right)$ depending on whether the currents reinforce or oppose."
    })
    # 35
    questions.append({
        "question": "A circular loop of wire of radius $R$ carries a current $I$. The magnetic energy density at the center of the loop in vacuum is:",
        "options": ["$\\frac{\\mu_0 I^2}{8 R^2}$", "$\\frac{\\mu_0 I^2}{4 R^2}$", "$\\frac{\\mu_0 I^2}{2 R^2}$", "$\\frac{\\mu_0 I^2}{16 R^2}$"],
        "correctAnswer": 0,
        "explanation": "Field at center is $B = \\frac{\\mu_0 I}{2R}$. Magnetic energy density is $u_B = \\frac{B^2}{2\\mu_0} = \\frac{1}{2\\mu_0}\\left(\\frac{\\mu_0 I}{2R}\\right)^2 = \\frac{\\mu_0^2 I^2}{2\\mu_0 (4R^2)} = \\frac{\\mu_0 I^2}{8R^2}$."
    })
    # 36
    questions.append({
        "question": "Two circular loops of radii $r$ and $R$ ($r \\ll R$) are placed coplanar and concentric. When a current $I$ flows in the outer loop, the magnetic flux linked with the smaller inner loop is approximately:",
        "options": ["$\\frac{\\mu_0 \\pi r^2 I}{2R}$", "$\\frac{\\mu_0 \\pi R^2 I}{2r}$", "$\\frac{\\mu_0 r^2 I}{4R}$", "$\\frac{\\mu_0 I}{2R}$"],
        "correctAnswer": 0,
        "explanation": "Since $r \\ll R$, the magnetic field inside the small loop is nearly uniform and equal to the field at the center of the large loop: $B = \\frac{\\mu_0 I}{2R}$. The flux is $\\Phi = B A = \\frac{\\mu_0 I}{2R}(\\pi r^2) = \\frac{\\mu_0 \\pi r^2 I}{2R}$."
    })
    # 37
    questions.append({
        "question": "From the result of the previous question, the mutual inductance $M$ of the two concentric coplanar loops ($r \\ll R$) is:",
        "options": ["$\\frac{\\mu_0 \\pi r^2}{2R}$", "$\\frac{\\mu_0 \\pi R^2}{2r}$", "$\\frac{\\mu_0 r^2}{2R}$", "$\\frac{\\mu_0 \\pi r}{2R^2}$"],
        "correctAnswer": 0,
        "explanation": "By definition, $\\Phi = M I \\implies M = \\frac{\\Phi}{I} = \\frac{\\mu_0 \\pi r^2}{2R}$."
    })
    # 38
    questions.append({
        "question": "A current $I$ flows through a wire bent in the form of a square of side $a$. The magnetic field at the center of the square is:",
        "options": ["$\\frac{2\\sqrt{2}\\mu_0 I}{\\pi a}$", "$\\frac{\\sqrt{2}\\mu_0 I}{\\pi a}$", "$\\frac{4\\mu_0 I}{\\pi a}$", "$\\frac{\\mu_0 I}{2\\pi a}$"],
        "correctAnswer": 0,
        "explanation": "Perpendicular distance from center to each side is $d = a/2$. Angles at ends are $\\theta_1 = \\theta_2 = 45^\\circ$. Field due to one side: $B_1 = \\frac{\\mu_0 I}{4\\pi(a/2)}(\\sin 45^\\circ + \\sin 45^\\circ) = \\frac{\\mu_0 I}{2\\pi a}\\left(\\frac{2}{\\sqrt{2}}\\right) = \\frac{\\sqrt{2}\\mu_0 I}{2\\pi a}$. For all 4 sides: $B = 4 B_1 = \\frac{2\\sqrt{2}\\mu_0 I}{\\pi a}$."
    })
    # 39
    questions.append({
        "question": "A current $I$ flows in an equilateral triangle of side $a$. The magnetic field at the centroid of the triangle is:",
        "options": ["$\\frac{9\\mu_0 I}{2\\pi a}$", "$\\frac{3\\sqrt{3}\\mu_0 I}{2\\pi a}$", "$\\frac{6\\mu_0 I}{\\pi a}$", "$\\frac{3\\mu_0 I}{\\pi a}$"],
        "correctAnswer": 0,
        "explanation": "Distance of centroid from each side is $d = \\frac{a}{2\\sqrt{3}}$. Angles are $\\theta_1 = \\theta_2 = 60^\\circ$. Field due to 1 side: $B_1 = \\frac{\\mu_0 I}{4\\pi (a/2\\sqrt{3})}(2\\sin 60^\\circ) = \\frac{\\sqrt{3}\\mu_0 I}{2\\pi a}\\left(2 \\times \\frac{\\sqrt{3}}{2}\\right) = \\frac{3\\mu_0 I}{2\\pi a}$. For 3 sides: $B = 3 B_1 = \\frac{9\\mu_0 I}{2\\pi a}$."
    })
    # 40
    questions.append({
        "question": "A circular loop of radius $R$ carries current $I$. If the loop is rotated by $180^\\circ$ about one of its diameters in a uniform external magnetic field $B$ parallel to its initial dipole moment, the work done is:",
        "options": ["$2 I \\pi R^2 B$", "$I \\pi R^2 B$", "Zero", "$-2 I \\pi R^2 B$"],
        "correctAnswer": 0,
        "explanation": "Initial potential energy: $U_i = -M B \\cos 0^\\circ = -M B$. Final potential energy: $U_f = -M B \\cos 180^\\circ = +M B$. Work done by external agent is $W = U_f - U_i = 2 M B = 2 (I \\pi R^2) B$."
    })
    # 41
    questions.append({
        "question": "A semicircular wire of radius $R$ carries a current $I$. It is placed in the $xy$-plane with diameter along the $x$-axis from $(-R, 0)$ to $(+R, 0)$. In a uniform magnetic field $\\vec{B} = B_0\\hat{k}$, the net magnetic force on the semicircular wire is:",
        "options": ["$2 I R B_0\\hat{j}$ (or magnitude $2IRB_0$ directed along $+y$)", "$I \\pi R B_0$", "Zero", "$\\frac{1}{2}I R B_0$"],
        "correctAnswer": 0,
        "explanation": "In a uniform magnetic field, the force on any curved wire depends only on the vector displacement between endpoints: $\\vec{F} = I(\\vec{L}_{\\text{eff}} \\times \\vec{B})$. Here $\\vec{L}_{\\text{eff}} = 2R\\hat{i}$. Thus $\\vec{F} = I(2R\\hat{i} \\times B_0\\hat{k}) = -2IRB_0\\hat{j}$ (or $+2IRB_0\\hat{j}$ depending on current direction)."
    })
    # 42
    questions.append({
        "question": "If $c$ is the speed of light in vacuum, $\\varepsilon_0$ is the permittivity of free space, and $\\mu_0$ is the permeability of free space, which relation is correct?",
        "options": ["$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$", "$c = \\sqrt{\\mu_0 \\varepsilon_0}$", "$c = \\frac{\\mu_0}{\\varepsilon_0}$", "$c = \\frac{\\varepsilon_0}{\\mu_0}$"],
        "correctAnswer": 0,
        "explanation": "Maxwell showed from electromagnetic wave equations that the speed of light in vacuum is $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$."
    })
    # 43
    questions.append({
        "question": "A circular coil of radius $R$ is placed in a uniform magnetic field $B$ such that the plane of the coil is perpendicular to the field. If the coil carries a current $I$, the net magnetic force and net torque on the coil are respectively:",
        "options": ["Zero and zero", "$2\\pi R I B$ and zero", "Zero and $I \\pi R^2 B$", "$I B R$ and zero"],
        "correctAnswer": 0,
        "explanation": "In any uniform magnetic field, the net force on any closed loop is strictly zero. Furthermore, since $\\vec{M}$ is parallel to $\\vec{B}$ (angle $\\theta = 0^\\circ$), torque $\\vec{\\tau} = \\vec{M} \\times \\vec{B} = 0$."
    })
    # 44
    questions.append({
        "question": "Two parallel circular rings of radius $R$ each have a common axis and carry currents $I$ in opposite directions. The magnetic field at the midpoint between their centers along the axis is:",
        "options": ["Zero", "$\\frac{8\\mu_0 I}{5\\sqrt{5}R}$", "$\\frac{\\mu_0 I}{R}$", "$\\frac{4\\mu_0 I}{5\\sqrt{5}R}$"],
        "correctAnswer": 0,
        "explanation": "Since the coils carry currents in opposite directions, the magnetic fields produced by them at the equidistant midpoint are equal in magnitude and directed in opposite directions along the axis, giving exactly zero net field."
    })
    # 45
    questions.append({
        "question": "A current $I$ flows along the perimeter of an $n$-sided regular polygon inscribed in a circle of radius $R$. In the limit as $n \\to \\infty$, the magnetic field at the center of the polygon approaches:",
        "options": ["$\\frac{\\mu_0 I}{2R}$", "$\\frac{\\mu_0 I}{R}$", "$\\frac{\\mu_0 I}{4\\pi R}$", "Infinite"],
        "correctAnswer": 0,
        "explanation": "As $n \\to \\infty$, the regular polygon smoothly approaches a circular loop of radius $R$, so the magnetic field at the center approaches the circular loop value $B = \\frac{\\mu_0 I}{2R}$."
    })

    return questions

def create_ampere_law_questions():
    questions = []

    # 1
    questions.append({
        "question": "Ampere's circuital law states that the line integral of magnetic field around any closed loop is equal to:",
        "options": ["$\\mu_0 I_{\\text{enclosed}}$", "$\\frac{I_{\\text{enclosed}}}{\\mu_0}$", "$\\varepsilon_0 I_{\\text{enclosed}}$", "$\\frac{I_{\\text{enclosed}}}{\\varepsilon_0}$"],
        "correctAnswer": 0,
        "explanation": "Ampere's circuital law in integral form is $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}}$."
    })
    # 2
    questions.append({
        "question": "A long straight solid cylindrical conductor of radius $R$ carries a steady current $I$ uniformly distributed across its cross-section. The magnetic field at a distance $r$ from the axis inside the cylinder ($r < R$) is proportional to:",
        "options": ["$r$", "$1/r$", "$r^2$", "$1/r^2$"],
        "correctAnswer": 0,
        "explanation": "By Ampere's law with an Amperian loop of radius $r < R$: $B(2\\pi r) = \\mu_0 I_{\\text{enc}} = \\mu_0 I \\frac{\\pi r^2}{\\pi R^2} = \\frac{\\mu_0 I r^2}{R^2} \\implies B = \\frac{\\mu_0 I r}{2\\pi R^2} \\propto r$."
    })
    # 3
    questions.append({
        "question": "In the same solid cylindrical conductor of radius $R$ carrying current $I$, the magnetic field at an outside point ($r > R$) is:",
        "options": ["$\\frac{\\mu_0 I}{2\\pi r}$", "$\\frac{\\mu_0 I r}{2\\pi R^2}$", "$\\frac{\\mu_0 I}{2\\pi R}$", "Zero"],
        "correctAnswer": 0,
        "explanation": "For $r > R$, the entire current $I$ is enclosed: $B(2\\pi r) = \\mu_0 I \\implies B = \\frac{\\mu_0 I}{2\\pi r} \\propto 1/r$."
    })
    # 4
    questions.append({
        "question": "A long hollow cylindrical pipe of inner radius $a$ and outer radius $b$ carries a steady current $I$ uniformly distributed over its cross-section. The magnetic field in the hollow region ($r < a$) is:",
        "options": ["Zero", "$\\frac{\\mu_0 I}{2\\pi r}$", "$\\frac{\\mu_0 I r}{2\\pi a^2}$", "Constant and non-zero"],
        "correctAnswer": 0,
        "explanation": "An Amperian loop of radius $r < a$ encloses zero current ($I_{\\text{enclosed}} = 0$). By symmetry, $B(2\\pi r) = 0 \\implies B = 0$ everywhere in the central cavity."
    })
    # 5
    questions.append({
        "question": "In the previous hollow cylinder (radii $a$ and $b$ carrying current $I$), the magnetic field at a point inside the material ($a < r < b$) is:",
        "options": ["$\\frac{\\mu_0 I}{2\\pi r} \\frac{r^2 - a^2}{b^2 - a^2}$", "$\\frac{\\mu_0 I r}{2\\pi(b^2 - a^2)}$", "$\\frac{\\mu_0 I}{2\\pi r}$", "$\\frac{\\mu_0 I}{2\\pi(b - a)}$"],
        "correctAnswer": 0,
        "explanation": "Current enclosed is $I_{\\text{enc}} = I \\frac{\\pi(r^2 - a^2)}{\\pi(b^2 - a^2)} = I \\frac{r^2 - a^2}{b^2 - a^2}$. Ampere's law gives $B(2\\pi r) = \\mu_0 I_{\\text{enc}} \\implies B = \\frac{\\mu_0 I}{2\\pi r}\\frac{r^2 - a^2}{b^2 - a^2}$."
    })
    # 6
    questions.append({
        "question": "A long solenoid of length $L$ and radius $R$ ($L \\gg R$) has $n$ turns per unit length and carries a current $I$. The magnetic field near the center inside the solenoid is:",
        "options": ["$\\mu_0 n I$", "$\\frac{1}{2}\\mu_0 n I$", "$2\\mu_0 n I$", "Zero"],
        "correctAnswer": 0,
        "explanation": "For an ideal long solenoid, the interior magnetic field is uniform and given by $B = \\mu_0 n I$."
    })
    # 7
    questions.append({
        "question": "The magnetic field at the end of a long solenoid carrying current $I$ and having $n$ turns per unit length is:",
        "options": ["$\\frac{1}{2}\\mu_0 n I$", "$\\mu_0 n I$", "$2\\mu_0 n I$", "Zero"],
        "correctAnswer": 0,
        "explanation": "At the very end of a semi-infinite solenoid, the solid angle subtended by the windings is halved, so the magnetic field is exactly half the interior value: $B_{\\text{end}} = \\frac{1}{2}\\mu_0 n I$."
    })
    # 8
    questions.append({
        "question": "A toroid of mean radius $R$ and total $N$ turns carries a current $I$. The magnetic field at a point in the internal cavity (hole) of the toroid is:",
        "options": ["Zero", "$\\frac{\\mu_0 N I}{2\\pi R}$", "$\\mu_0 N I$", "Infinite"],
        "correctAnswer": 0,
        "explanation": "An Amperian loop inside the open central hole of a toroid encloses zero current, so by Ampere's law the magnetic field is strictly zero."
    })
    # 9
    questions.append({
        "question": "The magnetic field inside the core of the same toroid (mean radius $R$, total $N$ turns, current $I$) is:",
        "options": ["$\\frac{\\mu_0 N I}{2\\pi R}$", "$\\mu_0 N I$", "$\\frac{\\mu_0 N I}{R}$", "Zero"],
        "correctAnswer": 0,
        "explanation": "Inside the core windings, an Amperian loop of radius $r$ encloses all $N$ turns: $\\oint \\vec{B} \\cdot d\\vec{l} = B(2\\pi r) = \\mu_0 N I \\implies B = \\frac{\\mu_0 N I}{2\\pi r}$."
    })
    # 10
    questions.append({
        "question": "A long cylindrical wire of radius $R$ carries a non-uniform current density $J(r) = kr$, where $r$ is the radial distance from the axis and $k$ is a constant. The magnetic field at $r < R$ is:",
        "options": ["$\\frac{\\mu_0 k r^2}{3}$", "$\\frac{\\mu_0 k r^2}{2}$", "$\\frac{\\mu_0 k r}{3}$", "$\\mu_0 k r^2$"],
        "correctAnswer": 0,
        "explanation": "$I_{\\text{enc}} = \\int_0^r J(r') 2\\pi r' dr' = 2\\pi k \\int_0^r r'^2 dr' = \\frac{2\\pi k r^3}{3}$. By Ampere's law: $B(2\\pi r) = \\mu_0 I_{\\text{enc}} = \\mu_0 \\frac{2\\pi k r^3}{3} \\implies B = \\frac{\\mu_0 k r^2}{3}$."
    })
    # 11
    questions.append({
        "question": "A long straight solid wire of radius $a$ carries a current $I$. At what two distances from the axis (one inside and one outside) is the magnetic field equal to half of its maximum value?",
        "options": ["$r = a/2$ and $r = 2a$", "$r = a/4$ and $r = 4a$", "$r = a/\\sqrt{2}$ and $r = a\\sqrt{2}$", "$r = a/3$ and $r = 3a$"],
        "correctAnswer": 0,
        "explanation": "Maximum field occurs at surface $r = a$: $B_{\\max} = \\frac{\\mu_0 I}{2\\pi a}$. Inside: $B = B_{\\max}(r/a) = B_{\\max}/2 \\implies r = a/2$. Outside: $B = B_{\\max}(a/r) = B_{\\max}/2 \\implies r = 2a$."
    })
    # 12
    questions.append({
        "question": "A long cylinder carrying uniform current density $\\vec{J}$ has a cylindrical cavity whose axis is parallel to the cylinder axis and displaced by vector $\\vec{d}$. The magnetic field inside the cavity is:",
        "options": ["Uniform and given by $\\frac{\\mu_0}{2}(\\vec{J} \\times \\vec{d})$", "Zero", "Radial and proportional to distance from cavity axis", "Varying as $1/r$"],
        "correctAnswer": 0,
        "explanation": "Using superposition: a solid cylinder with density $\\vec{J}$ plus a cavity-sized cylinder with density $-\\vec{J}$. At any point $\\vec{r}$ inside cavity: $\\vec{B} = \\vec{B}_1 + \\vec{B}_2 = \\frac{\\mu_0}{2}(\\vec{J} \\times \\vec{r}_1) + \\frac{\\mu_0}{2}(-\\vec{J} \\times \\vec{r}_2) = \\frac{\\mu_0}{2}\\vec{J} \\times (\\vec{r}_1 - \\vec{r}_2) = \\frac{\\mu_0}{2}(\\vec{J} \\times \\vec{d})$, which is strictly uniform."
    })
    # 13
    questions.append({
        "question": "A coaxial cable consists of an inner solid conductor of radius $a$ carrying current $I$ and an outer thin cylindrical shell of radius $b$ carrying the return current $I$ in the opposite direction. The magnetic field at a distance $r > b$ is:",
        "options": ["Zero", "$\\frac{\\mu_0 I}{2\\pi r}$", "$\\frac{\\mu_0 I}{\\pi r}$", "$\\frac{\\mu_0 I}{2\\pi(b - a)}$"],
        "correctAnswer": 0,
        "explanation": "For $r > b$, an Amperian loop encloses both forward and return currents: $I_{\\text{enc}} = I - I = 0$. Hence $B = 0$ everywhere outside the coaxial cable."
    })
    # 14
    questions.append({
        "question": "In the same coaxial cable, the magnetic field in the region between the conductors ($a < r < b$) is:",
        "options": ["$\\frac{\\mu_0 I}{2\\pi r}$", "Zero", "$\\frac{\\mu_0 I r}{2\\pi a^2}$", "$\\frac{\\mu_0 I}{2\\pi b}$"],
        "correctAnswer": 0,
        "explanation": "For $a < r < b$, the Amperian loop encloses only the inner conductor current $I$, so $B(2\\pi r) = \\mu_0 I \\implies B = \\frac{\\mu_0 I}{2\\pi r}$."
    })
    # 15
    questions.append({
        "question": "A solenoid of length $0.5\\text{ m}$ has a radius of $1\\text{ cm}$ and is made up of 500 turns. It carries a current of $5\\text{ A}$. The magnetic field inside the solenoid is:",
        "options": ["$6.28 \\times 10^{-3}\\text{ T}$", "$3.14 \\times 10^{-3}\\text{ T}$", "$1.25 \\times 10^{-2}\\text{ T}$", "$6.28 \\times 10^{-4}\\text{ T}$"],
        "correctAnswer": 0,
        "explanation": "$n = \\frac{N}{L} = \\frac{500}{0.5} = 1000\\text{ turns/m}$. $B = \\mu_0 n I = (4\\pi \\times 10^{-7}) \\times 1000 \\times 5 = 2\\pi \\times 10^{-3}\\text{ T} \\approx 6.28 \\times 10^{-3}\\text{ T}$."
    })
    # 16
    questions.append({
        "question": "Ampere's circuital law is mathematically equivalent to which of the following differential Maxwell equations (for static fields)?",
        "options": ["$\\nabla \\times \\vec{B} = \\mu_0 \\vec{J}$", "$\\nabla \\cdot \\vec{B} = 0$", "$\\nabla \\cdot \\vec{E} = \\rho / \\varepsilon_0$", "$\\nabla \\times \\vec{E} = 0$"],
        "correctAnswer": 0,
        "explanation": "By Stokes' theorem: $\\oint \\vec{B} \\cdot d\\vec{l} = \\int (\\nabla \\times \\vec{B}) \\cdot d\\vec{A} = \\mu_0 \\int \\vec{J} \\cdot d\\vec{A}$. Hence $\\nabla \\times \\vec{B} = \\mu_0 \\vec{J}$."
    })
    # 17
    questions.append({
        "question": "A solenoid has $N$ turns, length $L$, and carries current $I$. If its length is doubled by stretching it uniformly without changing $N$ and the same current $I$ is maintained, the magnetic field inside becomes:",
        "options": ["Halved", "Doubled", "Four times", "Unchanged"],
        "correctAnswer": 0,
        "explanation": "$B = \\mu_0 n I = \\mu_0 (N/L) I$. If $L$ is doubled, $n' = N/(2L) = n/2$, so the magnetic field is halved."
    })
    # 18
    questions.append({
        "question": "A long solenoid has turns per unit length $n$ and carries a current $I = I_0 \\cos\\omega t$. The magnetic field inside the solenoid is:",
        "options": ["$\\mu_0 n I_0 \\cos\\omega t$", "$\\frac{1}{2}\\mu_0 n I_0 \\cos\\omega t$", "Zero", "$\\mu_0 n I_0 \\sin\\omega t$"],
        "correctAnswer": 0,
        "explanation": "In quasi-static approximation ($L \\ll \\lambda$), the magnetic field instantaneously follows the current: $B(t) = \\mu_0 n I(t) = \\mu_0 n I_0 \\cos\\omega t$."
    })
    # 19
    questions.append({
        "question": "What is the magnetic field outside an ideal, infinitely long solenoid carrying current $I$?",
        "options": ["Zero", "$\\mu_0 n I$", "$\\frac{\\mu_0 n I}{2}$", "$\\frac{\\mu_0 I}{2\\pi r}$"],
        "correctAnswer": 0,
        "explanation": "For an infinitely long tightly-wound solenoid, the magnetic field outside is strictly zero, because exterior return fields cancel everywhere."
    })
    # 20
    questions.append({
        "question": "A toroid has a non-magnetic core of inner radius $25\\text{ cm}$ and outer radius $26\\text{ cm}$, around which 3500 turns of wire are wound. If current in wire is $11\\text{ A}$, the magnetic field inside the core is approximately:",
        "options": ["$3.0 \\times 10^{-2}\\text{ T}$", "$1.5 \\times 10^{-2}\\text{ T}$", "$6.0 \\times 10^{-2}\\text{ T}$", "$4.5 \\times 10^{-3}\\text{ T}$"],
        "correctAnswer": 0,
        "explanation": "Mean radius $r = \\frac{25 + 26}{2} = 25.5\\text{ cm} = 0.255\\text{ m}$. $B = \\frac{\\mu_0 N I}{2\\pi r} = \\frac{(4\\pi \\times 10^{-7}) \\times 3500 \\times 11}{2\\pi \\times 0.255} = \\frac{2 \\times 10^{-7} \\times 38500}{0.255} \\approx 3.02 \\times 10^{-2}\\text{ T}$."
    })
    # 21
    questions.append({
        "question": "A large sheet carries a uniform surface current density $\\vec{K} = K\\hat{i}$ in the $xy$-plane ($z = 0$). The magnetic field $\\vec{B}$ just above the sheet ($z > 0$) is:",
        "options": ["$-\\frac{1}{2}\\mu_0 K\\hat{j}$", "$\\frac{1}{2}\\mu_0 K\\hat{j}$", "$\\mu_0 K\\hat{k}$", "$-\\mu_0 K\\hat{i}$"],
        "correctAnswer": 0,
        "explanation": "Using Ampere's law with a rectangular loop of width $w$ spanning across the sheet: $\\oint \\vec{B} \\cdot d\\vec{l} = 2 B w = \\mu_0 K w \\implies B = \\frac{1}{2}\\mu_0 K$. By right-hand rule, for $\\vec{K} = K\\hat{i}$, $\\vec{B} = -\\frac{1}{2}\\mu_0 K\\hat{j}$ above ($z > 0$) and $+\\frac{1}{2}\\mu_0 K\\hat{j}$ below ($z < 0$)."
    })
    # 22
    questions.append({
        "question": "Two identical parallel infinite sheets in the $xy$-plane carry equal surface current densities $K$ in opposite directions ($+\\hat{i}$ on one sheet and $-\\hat{i}$ on the other). The magnetic field in the region between the sheets is:",
        "options": ["$\\mu_0 K$", "Zero", "$\\frac{1}{2}\\mu_0 K$", "$2\\mu_0 K$"],
        "correctAnswer": 0,
        "explanation": "Between the sheets, the magnetic fields due to both sheets point in the same direction and reinforce each other: $B_{\\text{between}} = \\frac{1}{2}\\mu_0 K + \\frac{1}{2}\\mu_0 K = \\mu_0 K$. Outside both sheets, the fields cancel to zero."
    })
    # 23
    questions.append({
        "question": "In Ampere's circuital law $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}}$, the magnetic field $\\vec{B}$ on the left-hand side is due to:",
        "options": ["All currents present everywhere in space (both inside and outside the loop)", "Only the currents enclosed by the loop", "Only the currents outside the loop", "Only the displacement current"],
        "correctAnswer": 0,
        "explanation": "The field $\\vec{B}$ at any point on the Amperian loop is the net magnetic field produced by ALL currents everywhere. However, the line integral $\\oint \\vec{B} \\cdot d\\vec{l}$ over the closed path evaluates to $\\mu_0$ times only the enclosed current."
    })
    # 24
    questions.append({
        "question": "A long straight wire of radius $R$ carries a steady current $I$. The ratio of magnetic field at $r = R/3$ inside to that at $r = 3R$ outside is:",
        "options": ["$1 : 1$", "$1 : 3$", "$1 : 9$", "$3 : 1$"],
        "correctAnswer": 0,
        "explanation": "Inside: $B_{\\text{in}} = \\frac{\\mu_0 I (R/3)}{2\\pi R^2} = \\frac{\\mu_0 I}{6\\pi R}$. Outside: $B_{\\text{out}} = \\frac{\\mu_0 I}{2\\pi(3R)} = \\frac{\\mu_0 I}{6\\pi R}$. The ratio is $1 : 1$."
    })
    # 25
    questions.append({
        "question": "A current $I$ flows along the length of an infinitely long, thin-walled cylindrical pipe of radius $R$. What is the magnetic field at a distance $r$ from the axis?",
        "options": ["$B = 0$ for $r < R$, and $B = \\frac{\\mu_0 I}{2\\pi r}$ for $r > R$", "$B = \\frac{\\mu_0 I}{2\\pi r}$ everywhere", "$B = 0$ everywhere", "$B = \\frac{\\mu_0 I r}{2\\pi R^2}$ for all $r$"],
        "correctAnswer": 0,
        "explanation": "Inside the thin pipe ($r < R$), no current is enclosed, so $B = 0$. Outside ($r > R$), all current $I$ is enclosed, so $B = \\frac{\\mu_0 I}{2\\pi r}$."
    })
    # 26
    questions.append({
        "question": "A steady current $I$ flows along a long straight wire. An Amperian loop is chosen such that the wire passes outside the loop. The value of $\\oint \\vec{B} \\cdot d\\vec{l}$ around this loop is:",
        "options": ["Zero", "$\\mu_0 I$", "$-\\mu_0 I$", "Depends on the distance to the wire"],
        "correctAnswer": 0,
        "explanation": "Since the wire lies entirely outside the loop, $I_{\\text{enclosed}} = 0$. By Ampere's circuital law, $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (0) = 0$."
    })
    # 27
    questions.append({
        "question": "Why is Ampere's circuital law alone not sufficient to calculate the magnetic field of a finite length straight current-carrying wire?",
        "options": ["The symmetry of the magnetic field lines is insufficient to take $B$ outside the integral", "Ampere's circuital law is invalid for steady currents", "The current is not continuous", "Magnetic field around a finite wire is zero"],
        "correctAnswer": 0,
        "explanation": "Ampere's circuital law is always physically valid for magnetostatics, but to compute $B$ analytically, high symmetry (cylindrical, planar, or axial) is required so that $B$ is tangential and constant along the Amperian path. A finite wire lacks infinite translational symmetry, so $B$ varies and cannot be factored out."
    })
    # 28
    questions.append({
        "question": "An iron core of relative permeability $\\mu_r = 1000$ is inserted into a long solenoid having 500 turns per meter carrying a current of $2\\text{ A}$. The magnetic field inside the iron core is:",
        "options": ["$1.26\\text{ T}$", "$1.26 \\times 10^{-3}\\text{ T}$", "$0.63\\text{ T}$", "$2.52\\text{ T}$"],
        "correctAnswer": 0,
        "explanation": "$B = \\mu_0 \\mu_r n I = (4\\pi \\times 10^{-7}) \\times 1000 \\times 500 \\times 2 = 4\\pi \\times 10^{-1} = 0.4\\pi \\approx 1.257\\text{ T} \\approx 1.26\\text{ T}$."
    })
    # 29
    questions.append({
        "question": "A long solenoid has magnetic field $B$ inside it. If both the number of turns and the length of the solenoid are doubled while the current is unchanged, the new magnetic field inside will be:",
        "options": ["$B$", "$2B$", "$4B$", "$B/2$"],
        "correctAnswer": 0,
        "explanation": "Turn density $n = N/L$. When both $N$ and $L$ are doubled, $n' = (2N)/(2L) = n$. Therefore $B = \\mu_0 n I$ remains unchanged."
    })
    # 30
    questions.append({
        "question": "A solenoid of radius $R$ and $n$ turns per unit length carries a current $I$. The magnetic flux through a cross-section of the solenoid of radius $2R$ perpendicular to its axis is:",
        "options": ["$\\mu_0 n I \\pi R^2$", "$4\\mu_0 n I \\pi R^2$", "$2\\mu_0 n I \\pi R^2$", "Zero"],
        "correctAnswer": 0,
        "explanation": "The magnetic field is non-zero ($B = \\mu_0 n I$) only inside the solenoid of radius $R$, and zero outside ($r > R$). Thus flux exists only within area $\\pi R^2$: $\\Phi = B(\\pi R^2) = \\mu_0 n I \\pi R^2$."
    })
    # 31
    questions.append({
        "question": "Maxwell modified Ampere's circuital law by introducing displacement current because Ampere's original law:",
        "options": ["Violated the continuity equation for time-varying electric fields (such as charging a capacitor)", "Was experimentally incorrect for permanent magnets", "Could not explain the Biot-Savart law", "Was invalid in dielectric media"],
        "correctAnswer": 0,
        "explanation": "Taking the divergence of $\\nabla \\times \\vec{B} = \\mu_0 \\vec{J}$ gives $\\nabla \\cdot \\vec{J} = 0$, which contradicts the continuity equation $\\nabla \\cdot \\vec{J} = -\\partial\\rho/\\partial t$ when charge accumulates. Maxwell added the displacement current term $\\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to restore consistency."
    })
    # 32
    questions.append({
        "question": "In a cylindrical conductor of radius $R$, the current density varies as $J = J_0(1 - r/R)$ for $0 \\le r \\le R$. The total current carried by the conductor is:",
        "options": ["$\\frac{1}{3}\\pi R^2 J_0$", "$\\frac{1}{2}\\pi R^2 J_0$", "$\\pi R^2 J_0$", "$\\frac{2}{3}\\pi R^2 J_0$"],
        "correctAnswer": 0,
        "explanation": "$I = \\int_0^R J(r) 2\\pi r dr = 2\\pi J_0 \\int_0^R (r - r^2/R) dr = 2\\pi J_0 \\left[\\frac{R^2}{2} - \\frac{R^3}{3R}\\right] = 2\\pi J_0 \\left(\\frac{R^2}{6}\\right) = \\frac{1}{3}\\pi R^2 J_0$."
    })
    # 33
    questions.append({
        "question": "For the conductor in the previous question, the magnetic field at the outer surface $r = R$ is:",
        "options": ["$\\frac{\\mu_0 J_0 R}{6}$", "$\\frac{\\mu_0 J_0 R}{3}$", "$\\frac{\\mu_0 J_0 R}{2}$", "$\\frac{\\mu_0 J_0 R}{4}$"],
        "correctAnswer": 0,
        "explanation": "$B(2\\pi R) = \\mu_0 I_{\\text{total}} = \\mu_0 \\left(\\frac{1}{3}\\pi R^2 J_0\\right) \\implies B = \\frac{\\mu_0 J_0 R}{6}$."
    })
    # 34
    questions.append({
        "question": "A cylindrical conductor of radius $R$ carries a uniform current $I$. At what distance from the surface inside the wire is the magnetic field equal to $\\frac{1}{3}$ of the field at the surface?",
        "options": ["$2R/3$", "$R/3$", "$R/4$", "$R/2$"],
        "correctAnswer": 0,
        "explanation": "Field inside is $B(r) = B_{\\text{surface}}(r/R)$. For $B = B_{\\text{surface}}/3$, we have $r = R/3$ from the axis. The distance from the surface is $d = R - r = R - R/3 = 2R/3$."
    })
    # 35
    questions.append({
        "question": "The magnetic field inside an infinitely long ideal solenoid is independent of:",
        "options": ["Both its cross-sectional area and the position of the point inside", "The current flowing through it", "The number of turns per unit length", "The permeability of the core material"],
        "correctAnswer": 0,
        "explanation": "Since $B = \\mu n I$, the field inside an ideal solenoid is completely uniform and depends neither on the radial position within the cross-section nor on the cross-sectional shape or area."
    })
    # 36
    questions.append({
        "question": "A hollow cylindrical conductor has inner radius $R_1$ and outer radius $R_2$. It carries a steady current $I$ along its length. The magnetic field at a distance $r$ such that $r = \\sqrt{R_1 R_2}$ is:",
        "options": ["$\\frac{\\mu_0 I}{2\\pi \\sqrt{R_1 R_2}}\\frac{R_1 R_2 - R_1^2}{R_2^2 - R_1^2}$", "Zero", "$\\frac{\\mu_0 I}{2\\pi R_2}$", "$\\frac{\\mu_0 I}{2\\pi R_1}$"],
        "correctAnswer": 0,
        "explanation": "From the formula for hollow cylinder: $B(r) = \\frac{\\mu_0 I}{2\\pi r}\\frac{r^2 - R_1^2}{R_2^2 - R_1^2}$. Substituting $r = \\sqrt{R_1 R_2}$ gives $r^2 = R_1 R_2$, yielding $B = \\frac{\\mu_0 I}{2\\pi \\sqrt{R_1 R_2}}\\frac{R_1 R_2 - R_1^2}{R_2^2 - R_1^2}$."
    })
    # 37
    questions.append({
        "question": "Two long parallel solenoids of the same length and radius have turns $N_1$ and $N_2$. If they carry the same current, the ratio of magnetic energy stored in them $U_1 / U_2$ is:",
        "options": ["$N_1^2 / N_2^2$", "$N_1 / N_2$", "$\\sqrt{N_1 / N_2}$", "$1 : 1$"],
        "correctAnswer": 0,
        "explanation": "Self-inductance of a solenoid is $L = \\frac{\\mu_0 N^2 A}{l} \\propto N^2$. Magnetic energy stored is $U = \\frac{1}{2}L I^2 \\propto L \\propto N^2$. Hence $U_1 / U_2 = N_1^2 / N_2^2$."
    })
    # 38
    questions.append({
        "question": "Which of the following graphs correctly represents the variation of magnetic field $B$ with distance $r$ from the axis of a long solid cylindrical wire of radius $R$ carrying uniform current?",
        "options": ["Linearly increases from $0$ to $R$, then decays as $1/r$ for $r > R$", "Decays as $1/r$ everywhere", "Constant from $0$ to $R$, then decays as $1/r^2$", "Zero for $r < R$, then jumps to maximum and decays as $1/r$"],
        "correctAnswer": 0,
        "explanation": "For $r \\le R$, $B = \\frac{\\mu_0 I}{2\\pi R^2}r$ (linear increase through origin). For $r \\ge R$, $B = \\frac{\\mu_0 I}{2\\pi r}$ (hyperbolic decay as $1/r$)."
    })
    # 39
    questions.append({
        "question": "A long solenoid has 200 turns per cm and carries a current of $2.5\\text{ A}$. The magnetic field at its center is:",
        "options": ["$6.28 \\times 10^{-2}\\text{ T}$", "$3.14 \\times 10^{-2}\\text{ T}$", "$1.26 \\times 10^{-2}\\text{ T}$", "$6.28 \\times 10^{-3}\\text{ T}$"],
        "correctAnswer": 0,
        "explanation": "$n = 200\\text{ turns/cm} = 20000\\text{ turns/m}$. $B = \\mu_0 n I = (4\\pi \\times 10^{-7}) \\times 20000 \\times 2.5 = 4\\pi \\times 10^{-7} \\times 50000 = 2\\pi \\times 10^{-2}\\text{ T} \\approx 6.28 \\times 10^{-2}\\text{ T}$."
    })
    # 40
    questions.append({
        "question": "A copper pipe of diameter $4\\text{ cm}$ carries a current of $100\\text{ A}$ along its length. The magnetic field at a point $1\\text{ cm}$ from the central axis of the pipe is:",
        "options": ["Zero", "$10^{-3}\\text{ T}$", "$5 \\times 10^{-4}\\text{ T}$", "$2 \\times 10^{-3}\\text{ T}$"],
        "correctAnswer": 0,
        "explanation": "Radius of pipe is $R = 2\\text{ cm}$. The point is at $r = 1\\text{ cm} < R$, which lies inside the hollow interior. An Amperian loop of radius $1\\text{ cm}$ encloses no current, hence $B = 0$."
    })
    # 41
    questions.append({
        "question": "In the same copper pipe (diameter $4\\text{ cm}$, current $100\\text{ A}$), the magnetic field at a point $5\\text{ cm}$ from the central axis is:",
        "options": ["$4.0 \\times 10^{-4}\\text{ T}$", "$2.0 \\times 10^{-4}\\text{ T}$", "$1.0 \\times 10^{-4}\\text{ T}$", "$8.0 \\times 10^{-4}\\text{ T}$"],
        "correctAnswer": 0,
        "explanation": "$r = 5\\text{ cm} = 0.05\\text{ m} > R$. All current $I = 100\\text{ A}$ is enclosed: $B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{2 \\times 10^{-7} \\times 100}{0.05} = 4.0 \\times 10^{-4}\\text{ T}$."
    })
    # 42
    questions.append({
        "question": "A toroidal solenoid has 3000 turns and a mean radius of $10\\text{ cm}$. It carries a current of $2\\text{ A}$. The magnetic field at a point on the outer edge outside the windings is:",
        "options": ["Zero", "$1.2\\text{ T}$", "$0.012\\text{ T}$", "$0.06\\text{ T}$"],
        "correctAnswer": 0,
        "explanation": "For any point completely outside the toroidal windings, an Amperian loop encloses equal numbers of forward and backward currents, so $I_{\\text{enclosed}} = 0$, giving $B = 0$."
    })
    # 43
    questions.append({
        "question": "The magnetic field $\\vec{B}$ inside a long current-carrying cylindrical wire of radius $R$ is directed:",
        "options": ["Azimuthally (along concentric circular paths around the axis)", "Radially outward", "Radially inward", "Parallel to the cylinder axis"],
        "correctAnswer": 0,
        "explanation": "By the right-hand thumb rule, currents flowing along the cylinder axis produce concentric azimuthal magnetic field lines around the axis."
    })
    # 44
    questions.append({
        "question": "An ideal solenoid has $n$ turns per unit length and carries current $I$. The magnetic energy per unit length stored inside the solenoid of radius $R$ is:",
        "options": ["$\\frac{1}{2}\\mu_0 n^2 I^2 \\pi R^2$", "$\\mu_0 n^2 I^2 \\pi R^2$", "$\\frac{1}{4}\\mu_0 n^2 I^2 \\pi R^2$", "$\\frac{1}{2}\\mu_0 n I^2 R$"],
        "correctAnswer": 0,
        "explanation": "Energy density is $u_B = \\frac{B^2}{2\\mu_0} = \\frac{(\\mu_0 n I)^2}{2\\mu_0} = \\frac{1}{2}\\mu_0 n^2 I^2$. Volume per unit length is $\\pi R^2$. Hence energy per unit length is $u_B \\times \\pi R^2 = \\frac{1}{2}\\mu_0 n^2 I^2 \\pi R^2$."
    })
    # 45
    questions.append({
        "question": "A long cylindrical solid conductor of radius $a$ carries current $I$. If the current density $J$ is uniform, at what radial distance $r$ inside the conductor is the enclosed current equal to $I/4$?",
        "options": ["$a/2$", "$a/4$", "$a/\\sqrt{2}$", "$a/16$"],
        "correctAnswer": 0,
        "explanation": "$I_{\\text{enc}} = I \\frac{\\pi r^2}{\\pi a^2} = I\\left(\\frac{r}{a}\\right)^2 = \\frac{I}{4} \\implies \\frac{r}{a} = \\frac{1}{2} \\implies r = \\frac{a}{2}$."
    })

    return questions

def main():
    bs_raw = create_biot_savart_questions()
    ampere_raw = create_ampere_law_questions()

    print(f"Biot-Savart questions: {len(bs_raw)}")
    print(f"Ampere's law questions: {len(ampere_raw)}")

    bs_balanced = format_and_balance(bs_raw, "Biot-Savart law and applications")
    ampere_balanced = format_and_balance(ampere_raw, "Ampere's law")

    batch1 = bs_balanced + ampere_balanced

    os.makedirs("/Users/laxmikumari/Desktop/web/project going on /testseries/scripts/magnetism", exist_ok=True)
    out_path = "/Users/laxmikumari/Desktop/web/project going on /testseries/scripts/magnetism/magnetism_batch1.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(batch1, f, indent=2)

    print(f"Generated {len(batch1)} MCQs for batch 1 saved to {out_path}")

if __name__ == "__main__":
    main()
