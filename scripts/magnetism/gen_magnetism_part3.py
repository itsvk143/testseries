import json
import os

# Batch 3:
# 5. Force between two parallel currents (45 MCQs)
# 6. Moving coil galvanometer and conversion to ammeter/voltmeter (45 MCQs)

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

def create_force_parallel_questions():
    questions = []

    # 1
    questions.append({
        "question": "The force per unit length between two infinitely long, thin parallel wires separated by distance $d$ carrying currents $I_1$ and $I_2$ in vacuum is:",
        "options": ["$\\frac{\\mu_0 I_1 I_2}{2\\pi d}$", "$\\frac{\\mu_0 I_1 I_2}{4\\pi d}$", "$\\frac{\\mu_0 I_1 I_2}{2\\pi d^2}$", "$\\frac{\\mu_0 I_1 I_2}{\\pi d}$"],
        "correctAnswer": 0,
        "explanation": "By Ampere's force law, the force per unit length between two parallel currents is $\\frac{dF}{dL} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$."
    })
    # 2
    questions.append({
        "question": "Two parallel conductors carrying currents in the same direction attract each other because:",
        "options": ["The magnetic force between parallel currents is attractive", "Electrostatic charges of opposite signs accumulate on them", "Electrons in one wire attract protons in the other", "Of atmospheric pressure gradients"],
        "correctAnswer": 0,
        "explanation": "Applying the right-hand rule for magnetic field and Lorentz force shows that currents in the same direction attract each other, whereas currents in opposite directions repel."
    })
    # 3
    questions.append({
        "question": "One ampere is defined as that steady current which, when maintained in each of two infinitely long parallel conductors of negligible cross-section placed $1\\text{ m}$ apart in vacuum, produces a force between them of:",
        "options": ["$2 \\times 10^{-7}\\text{ N/m}$", "$4\\pi \\times 10^{-7}\\text{ N/m}$", "$10^{-7}\\text{ N/m}$", "$1\\text{ N/m}$"],
        "correctAnswer": 0,
        "explanation": "Setting $I_1 = I_2 = 1\\text{ A}$ and $d = 1\\text{ m}$: $\\frac{F}{L} = \\frac{\\mu_0 (1)(1)}{2\\pi(1)} = \\frac{4\\pi \\times 10^{-7}}{2\\pi} = 2 \\times 10^{-7}\\text{ N/m}$."
    })
    # 4
    questions.append({
        "question": "A straight wire of length $L$ carrying a current $I$ is placed in a uniform magnetic field $B$ at an angle $\\theta$ to the field. The magnitude of magnetic force on the wire is:",
        "options": ["$I L B \\sin\\theta$", "$I L B \\cos\\theta$", "$I L B$", "$I L B \\tan\\theta$"],
        "correctAnswer": 0,
        "explanation": "The magnetic force on a straight current-carrying segment in a uniform magnetic field is $\\vec{F} = I(\\vec{L} \\times \\vec{B})$, so its magnitude is $F = I L B \\sin\\theta$."
    })
    # 5
    questions.append({
        "question": "A horizontal wire of mass $10\\text{ g}$ and length $1\\text{ m}$ carries a current of $2\\text{ A}$. What minimum magnetic field is required to support the weight of the wire? (Take $g = 9.8\\text{ m/s}^2$)",
        "options": ["$0.049\\text{ T}$", "$0.098\\text{ T}$", "$0.0245\\text{ T}$", "$0.196\\text{ T}$"],
        "correctAnswer": 0,
        "explanation": "For magnetic force to balance gravity: $I L B = m g \\implies B = \\frac{mg}{IL} = \\frac{0.01 \\times 9.8}{2 \\times 1} = 0.049\\text{ T}$."
    })
    # 6
    questions.append({
        "question": "A planar current loop of area $A$ carrying current $I$ has $N$ turns. Its magnetic dipole moment $\\vec{M}$ is defined as:",
        "options": ["$N I \\vec{A}$", "$\\frac{N I}{\\vec{A}}$", "$N I A^2$", "$\\frac{I \\vec{A}}{N}$"],
        "correctAnswer": 0,
        "explanation": "The magnetic dipole moment of a planar coil is given by $\\vec{M} = N I \\vec{A}$, where $\\vec{A}$ is the area vector perpendicular to the plane of the loop (by right-hand rule)."
    })
    # 7
    questions.append({
        "question": "The torque experienced by a magnetic dipole $\\vec{M}$ in a uniform magnetic field $\\vec{B}$ is:",
        "options": ["$\\vec{\\tau} = \\vec{M} \\times \\vec{B}$", "$\\vec{\\tau} = \\vec{B} \\times \\vec{M}$", "$\\vec{\\tau} = \\vec{M} \\cdot \\vec{B}$", "$\\vec{\\tau} = M B$"],
        "correctAnswer": 0,
        "explanation": "The torque on a magnetic dipole in a uniform magnetic field is $\\vec{\\tau} = \\vec{M} \\times \\vec{B}$."
    })
    # 8
    questions.append({
        "question": "The potential energy of a magnetic dipole $\\vec{M}$ in a uniform magnetic field $\\vec{B}$ is:",
        "options": ["$-\\vec{M} \\cdot \\vec{B}$", "$+\\vec{M} \\cdot \\vec{B}$", "$\\vec{M} \\times \\vec{B}$", "Zero"],
        "correctAnswer": 0,
        "explanation": "The magnetic potential energy is defined as $U = -\\vec{M} \\cdot \\vec{B} = -M B \\cos\\theta$."
    })
    # 9
    questions.append({
        "question": "A magnetic dipole is in stable equilibrium in a uniform magnetic field when the angle between $\\vec{M}$ and $\\vec{B}$ is:",
        "options": ["$0^\\circ$", "$180^\\circ$", "$90^\\circ$", "$45^\\circ$"],
        "correctAnswer": 0,
        "explanation": "At $\\theta = 0^\\circ$, $U = -MB$ is a minimum and torque is zero, representing stable equilibrium. At $\\theta = 180^\\circ$, $U = +MB$ is a maximum, representing unstable equilibrium."
    })
    # 10
    questions.append({
        "question": "The work done in rotating a magnetic dipole of moment $M$ in a uniform magnetic field $B$ from $\\theta = 0^\\circ$ to $\\theta = 90^\\circ$ is:",
        "options": ["$M B$", "$2 M B$", "$-M B$", "Zero"],
        "correctAnswer": 0,
        "explanation": "$W = U(90^\\circ) - U(0^\\circ) = (-MB \\cos 90^\\circ) - (-MB \\cos 0^\\circ) = 0 - (-MB) = MB$."
    })
    # 11
    questions.append({
        "question": "The work done in rotating the same dipole from $\\theta = 0^\\circ$ to $\\theta = 180^\\circ$ is:",
        "options": ["$2 M B$", "$M B$", "Zero", "$-2 M B$"],
        "correctAnswer": 0,
        "explanation": "$W = U(180^\\circ) - U(0^\\circ) = -MB(-1) - (-MB(1)) = MB + MB = 2MB$."
    })
    # 12
    questions.append({
        "question": "An electron moves in a circle of radius $r$ with speed $v$. The ratio of its orbital magnetic dipole moment to its orbital angular momentum (the gyromagnetic ratio) is:",
        "options": ["$\\frac{e}{2m}$", "$\\frac{e}{m}$", "$\\frac{2e}{m}$", "$\\frac{e}{4m}$"],
        "correctAnswer": 0,
        "explanation": "Magnetic moment $M = I A = \\left(\\frac{e v}{2\\pi r}\\right)(\\pi r^2) = \\frac{1}{2}e v r$. Angular momentum $L = m v r$. The gyromagnetic ratio is $\\frac{M}{L} = \\frac{e v r / 2}{m v r} = \\frac{e}{2m}$."
    })
    # 13
    questions.append({
        "question": "The Bohr magneton $\\mu_B$ represents the elementary quantum of magnetic moment and is defined as:",
        "options": ["$\\frac{e\\hbar}{2m_e}$", "$\\frac{e\\hbar}{m_e}$", "$\\frac{2e\\hbar}{m_e}$", "$\\frac{e h}{4\\pi m_e^2}$"],
        "correctAnswer": 0,
        "explanation": "According to Bohr's postulate, $L = n\\hbar$. For $n = 1$, the orbital magnetic moment is $\\mu_B = \\frac{e}{2m_e}\\hbar = \\frac{e\\hbar}{2m_e} = \\frac{eh}{4\\pi m_e} \\approx 9.27 \\times 10^{-24}\\text{ A}\\cdot\\text{m}^2$."
    })
    # 14
    questions.append({
        "question": "Two long parallel wires separated by $20\\text{ cm}$ carry currents of $5\\text{ A}$ and $10\\text{ A}$ in opposite directions. The force on a $2\\text{ m}$ length of each wire is:",
        "options": ["$1.0 \\times 10^{-4}\\text{ N}$ (repulsive)", "$1.0 \\times 10^{-4}\\text{ N}$ (attractive)", "$5.0 \\times 10^{-5}\\text{ N}$ (repulsive)", "$2.0 \\times 10^{-4}\\text{ N}$ (repulsive)"],
        "correctAnswer": 0,
        "explanation": "$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = \\frac{2 \\times 10^{-7} \\times 5 \\times 10}{0.2} = 5.0 \\times 10^{-5}\\text{ N/m}$. For $L = 2\\text{ m}$: $F = 5.0 \\times 10^{-5} \\times 2 = 1.0 \\times 10^{-4}\\text{ N}$. Since currents are antiparallel, the force is repulsive."
    })
    # 15
    questions.append({
        "question": "A rectangular loop of sides $10\\text{ cm}$ and $5\\text{ cm}$ carrying a current of $2\\text{ A}$ is placed parallel to a long straight wire carrying $10\\text{ A}$ at a distance of $2\\text{ cm}$ from the nearer side. The net magnetic force on the loop is:",
        "options": ["$6.67 \\times 10^{-5}\\text{ N}$ towards the wire", "$6.67 \\times 10^{-5}\\text{ N}$ away from the wire", "$3.33 \\times 10^{-5}\\text{ N}$ towards the wire", "Zero"],
        "correctAnswer": 0,
        "explanation": "Forces on the two perpendicular $5\\text{ cm}$ sides cancel out. Near side ($d_1 = 2\\text{ cm}$, parallel, attractive): $F_1 = \\frac{\\mu_0 I_1 I_2 L}{2\\pi d_1} = \\frac{2 \\times 10^{-7} \\times 10 \\times 2 \\times 0.1}{0.02} = 2.0 \\times 10^{-5}\\text{ N}$ (towards wire). Far side ($d_2 = 2 + 5 = 7\\text{ cm}$... wait: if $L = 10\\text{ cm}$ is parallel, $F_1 = \\frac{2 \\times 10^{-7} \\times 10 \\times 2 \\times 0.10}{0.02} = 2.0 \\times 10^{-5}\\text{ N}$. If $5\\text{ cm}$ is parallel, let's specify which side is parallel)."
    })
    # Fix 15 clearly
    questions[-1]["question"] = "A rectangular loop of sides $a = 10\\text{ cm}$ (parallel to wire) and $b = 5\\text{ cm}$ (perpendicular) carries current $2\\text{ A}$. It is placed at distance $2\\text{ cm}$ from a long wire carrying $20\\text{ A}$. The net force on the loop is:"
    questions[-1]["options"] = ["$2.86 \\times 10^{-5}\\text{ N}$ towards the wire", "$4.0 \\times 10^{-5}\\text{ N}$ towards the wire", "$1.14 \\times 10^{-5}\\text{ N}$ away from the wire", "Zero"]
    questions[-1]["correctAnswer"] = 0
    questions[-1]["explanation"] = "Near side ($d_1 = 2\\text{ cm} = 0.02\\text{ m}$, attractive): $F_1 = \\frac{\\mu_0 I_1 I_2 a}{2\\pi d_1} = \\frac{2 \\times 10^{-7} \\times 20 \\times 2 \\times 0.10}{0.02} = 4.0 \\times 10^{-5}\\text{ N}$. Far side ($d_2 = 7\\text{ cm} = 0.07\\text{ m}$, repulsive): $F_2 = \\frac{2 \\times 10^{-7} \\times 20 \\times 2 \\times 0.10}{0.07} = 1.14 \\times 10^{-5}\\text{ N}$. Net force is $F_{\\text{net}} = F_1 - F_2 = (4.0 - 1.14) \\times 10^{-5} = 2.86 \\times 10^{-5}\\text{ N}$ towards the wire."

    # 16
    questions.append({
        "question": "A square loop of side $l$ carrying current $I$ is placed in a uniform magnetic field $B$. If the angle between the normal to the loop and $\\vec{B}$ is $30^\\circ$, the magnitude of torque experienced by the loop is:",
        "options": ["$\\frac{1}{2} I l^2 B$", "$\\frac{\\sqrt{3}}{2} I l^2 B$", "$I l^2 B$", "$2 I l^2 B$"],
        "correctAnswer": 0,
        "explanation": "$\\tau = M B \\sin\\theta = (I A) B \\sin 30^\\circ = I l^2 B \\left(\\frac{1}{2}\\right) = \\frac{1}{2} I l^2 B$."
    })
    # 17
    questions.append({
        "question": "A circular loop of radius $r$ carrying current $I$ is free to rotate in a uniform magnetic field $B$. In which orientation will the loop experience maximum torque?",
        "options": ["When the plane of the loop is parallel to the magnetic field", "When the plane of the loop is perpendicular to the magnetic field", "When the plane of the loop is inclined at $45^\\circ$ to the field", "Torque is constant for all orientations"],
        "correctAnswer": 0,
        "explanation": "Torque is $\\tau = M B \\sin\\theta$, where $\\theta$ is the angle between the normal (area vector) and $\\vec{B}$. Maximum torque occurs when $\\theta = 90^\\circ$, which corresponds to the plane of the loop being parallel to the magnetic field lines."
    })
    # 18
    questions.append({
        "question": "Three long parallel wires $A, B, C$ are equally spaced by distance $d$ in a plane. Wires $A$ and $C$ carry current $I$ into the page, and the central wire $B$ carries current $I$ out of the page. The net force per unit length on wire $B$ is:",
        "options": ["Zero", "$\\frac{\\mu_0 I^2}{2\\pi d}$", "$\\frac{\\mu_0 I^2}{\\pi d}$", "$\\frac{2\\mu_0 I^2}{\\pi d}$"],
        "correctAnswer": 0,
        "explanation": "Wire $A$ exerts a repulsive force on $B$ away from $A$ (towards $C$), while wire $C$ exerts an equal repulsive force on $B$ away from $C$ (towards $A$). The two equal and opposite forces cancel out, giving zero net force on $B$."
    })
    # 19
    questions.append({
        "question": "In the previous configuration, the net force per unit length on wire $A$ is:",
        "options": ["$\\frac{\\mu_0 I^2}{4\\pi d}$ directed away from $B$", "Zero", "$\\frac{\\mu_0 I^2}{2\\pi d}$ towards $B$", "$\\frac{3\\mu_0 I^2}{4\\pi d}$ away from $B$"],
        "correctAnswer": 0,
        "explanation": "Force from wire $B$ ($d$ away, antiparallel $\\implies$ repulsive, away from $B$): $F_B = \\frac{\\mu_0 I^2}{2\\pi d}$ (directed left). Force from wire $C$ ($2d$ away, parallel $\\implies$ attractive, towards $C$, i.e., right): $F_C = \\frac{\\mu_0 I^2}{2\\pi(2d)} = \\frac{\\mu_0 I^2}{4\\pi d}$. Net force is $F_B - F_C = \\frac{\\mu_0 I^2}{2\\pi d} - \\frac{\\mu_0 I^2}{4\\pi d} = \\frac{\\mu_0 I^2}{4\\pi d}$ directed away from $B$."
    })
    # 20
    questions.append({
        "question": "A rigid wire loop carrying current $I$ has an arbitrary irregular shape in a plane, enclosing area $A$. If placed in a uniform magnetic field $B$ parallel to its plane, the torque on the loop:",
        "options": ["Depends only on the enclosed area $A$ and equals $I A B$", "Depends on the specific shape of the loop", "Is zero for non-circular loops", "Depends on the perimeter of the loop"],
        "correctAnswer": 0,
        "explanation": "The magnetic moment of any planar loop is $\\vec{M} = I \\vec{A}$, where $A$ is the enclosed area regardless of the shape. When $\\vec{B}$ is in the plane of the loop, $\\theta = 90^\\circ$, so torque $\\tau = M B = I A B$ strictly depends on area, not shape."
    })
    # 21
    questions.append({
        "question": "A wire of length $L$ carries current $I$. To maximize the magnetic dipole moment, the wire should be bent into:",
        "options": ["A single circular loop", "A square loop", "An equilateral triangle", "A coil with multiple circular turns"],
        "correctAnswer": 0,
        "explanation": "For a given perimeter $L$, the circle encloses the maximum area ($A = L^2 / 4\\pi$). Furthermore, a single turn ($N=1$) has $A_1 = L^2/4\\pi$, while $N$ turns each have perimeter $L/N$ and area $A_N = (L/N)^2/4\\pi$, giving total moment $M = N I A_N = I L^2 / (4\\pi N)$, which is maximized when $N = 1$."
    })
    # 22
    questions.append({
        "question": "An electron of mass $m_e$ revolves around a nucleus in an orbit of radius $r$ with angular momentum $L$. The magnetic dipole moment $\\vec{M}$ and angular momentum $\\vec{L}$ are related vectorially by:",
        "options": ["$\\vec{M} = -\\frac{e}{2m_e}\\vec{L}$", "$\\vec{M} = +\\frac{e}{2m_e}\\vec{L}$", "$\\vec{M} = -\\frac{e}{m_e}\\vec{L}$", "$\\vec{M} = \\frac{2m_e}{e}\\vec{L}$"],
        "correctAnswer": 0,
        "explanation": "Because the electron carries negative charge ($-e$), the effective conventional current flows opposite to the direction of velocity. Hence the magnetic moment vector $\\vec{M}$ is antiparallel to the orbital angular momentum vector $\\vec{L}$: $\\vec{M} = -\\frac{e}{2m_e}\\vec{L}$."
    })
    # 23
    questions.append({
        "question": "Two long parallel wires carrying equal currents $I$ are separated by distance $2d$. A third parallel wire carrying current $I_0$ in the same direction is placed midway between them. The net force per unit length on the third wire is:",
        "options": ["Zero", "$\\frac{\\mu_0 I I_0}{\\pi d}$", "$\\frac{2\\mu_0 I I_0}{\\pi d}$", "$\\frac{\\mu_0 I I_0}{2\\pi d}$"],
        "correctAnswer": 0,
        "explanation": "The two outer wires are equidistant from the center wire and carry identical currents, producing equal and opposite attractive forces on the center wire. The net force is zero."
    })
    # 24
    questions.append({
        "question": "A closed current-carrying loop of any arbitrary 3D shape placed in a uniform magnetic field experiences:",
        "options": ["Zero net force, but generally non-zero net torque", "Zero net torque, but non-zero net force", "Non-zero net force and non-zero net torque", "Zero net force and zero net torque always"],
        "correctAnswer": 0,
        "explanation": "In any uniform magnetic field, the net force on any closed loop is $\\vec{F} = \\oint I (d\\vec{l} \\times \\vec{B}) = I \\left(\\oint d\\vec{l}\\right) \\times \\vec{B} = 0$, because $\\oint d\\vec{l} = 0$. However, the net torque $\\vec{\\tau} = \\vec{M} \\times \\vec{B}$ is generally non-zero unless aligned."
    })
    # 25
    questions.append({
        "question": "A circular coil of 50 turns and radius $7\\text{ cm}$ carries a current of $4\\text{ A}$. It is suspended in a uniform horizontal magnetic field of $0.5\\text{ T}$. The maximum torque that can act on the coil is:",
        "options": ["$1.54\\text{ N}\\cdot\\text{m}$", "$3.08\\text{ N}\\cdot\\text{m}$", "$0.77\\text{ N}\\cdot\\text{m}$", "$6.16\\text{ N}\\cdot\\text{m}$"],
        "correctAnswer": 0,
        "explanation": "Area $A = \\pi r^2 = \\frac{22}{7} \\times (0.07)^2 = 0.0154\\text{ m}^2$. Dipole moment $M = N I A = 50 \\times 4 \\times 0.0154 = 3.08\\text{ A}\\cdot\\text{m}^2$. Maximum torque is $\\tau_{\\max} = M B = 3.08 \\times 0.5 = 1.54\\text{ N}\\cdot\\text{m}$."
    })
    # 26
    questions.append({
        "question": "Two parallel wires carrying currents $I_1$ and $I_2$ in opposite directions are separated by distance $r$. If the current in each wire is doubled and the separation distance is halved, the force per unit length between them increases by a factor of:",
        "options": ["$8$", "$4$", "$2$", "$16$"],
        "correctAnswer": 0,
        "explanation": "$F' / L = \\frac{\\mu_0 (2I_1)(2I_2)}{2\\pi (r/2)} = 8 \\frac{\\mu_0 I_1 I_2}{2\\pi r} = 8 (F/L)$."
    })
    # 27
    questions.append({
        "question": "A current $I$ flows in a circular loop of wire of radius $R$. The magnetic dipole moment of the loop has the dimensions of:",
        "options": ["$[\\text{A L}^2]$", "$[\\text{A L}]$", "$[\\text{A}^{-1} \\text{L}^2]$", "$[\\text{M L}^2 \\text{T}^{-1}]$"],
        "correctAnswer": 0,
        "explanation": "$M = I A$, so $[M] = [I][A] = \\text{A} \\cdot \\text{m}^2 = [\\text{A L}^2]$."
    })
    # 28
    questions.append({
        "question": "A small circular coil of radius $R$ and $N$ turns carrying current $I$ is placed in a non-uniform magnetic field $\\vec{B}$. The coil will experience:",
        "options": ["Both a net force and a net torque in general", "Only a net torque, force is always zero", "Only a net force, torque is always zero", "Neither force nor torque"],
        "correctAnswer": 0,
        "explanation": "In a non-uniform magnetic field, $\\vec{F} = \\nabla(\\vec{M} \\cdot \\vec{B}) \\ne 0$. In general, the dipole experiences both a translational force and a rotational torque."
    })
    # 29
    questions.append({
        "question": "A coil of magnetic moment $M$ is placed with its axis along the magnetic field $B$. The work done in rotating it through $60^\\circ$ is:",
        "options": ["$\\frac{1}{2} M B$", "$M B$", "$\\frac{\\sqrt{3}}{2} M B$", "$2 M B$"],
        "correctAnswer": 0,
        "explanation": "$W = -MB(\\cos 60^\\circ - \\cos 0^\\circ) = -MB(1/2 - 1) = \\frac{1}{2}MB$."
    })
    # 30
    questions.append({
        "question": "If the magnetic field is uniform, the force on a planar closed loop carrying current $I$:",
        "options": ["Is strictly zero regardless of shape and orientation", "Depends on the loop's perimeter", "Depends on the loop's area", "Is zero only if the loop is circular"],
        "correctAnswer": 0,
        "explanation": "For any closed loop in a uniform field, $\\vec{F} = I \\oint d\\vec{l} \\times \\vec{B} = I (\\oint d\\vec{l}) \\times \\vec{B} = 0$, as the vector sum of elements around a closed path is zero."
    })
    # 31
    questions.append({
        "question": "Two long parallel wires carry currents $I_1$ and $I_2$ ($I_1 > I_2$) in opposite directions. The magnetic field at a point midway between them is:",
        "options": ["$\\frac{\\mu_0 (I_1 + I_2)}{\\pi d}$ where $d$ is the distance between the wires", "$\\frac{\\mu_0 (I_1 - I_2)}{\\pi d}$", "Zero", "$\\frac{\\mu_0 (I_1 + I_2)}{2\\pi d}$"],
        "correctAnswer": 0,
        "explanation": "At the midpoint, distance to each wire is $d/2$. Since currents are in opposite directions, the magnetic fields from both wires point in the same direction: $B = \\frac{\\mu_0 I_1}{2\\pi (d/2)} + \\frac{\\mu_0 I_2}{2\\pi (d/2)} = \\frac{\\mu_0(I_1 + I_2)}{\\pi d}$."
    })
    # 32
    questions.append({
        "question": "A particle with charge $q$ rotates in a circle of radius $R$ at frequency $f$. Its magnetic dipole moment is:",
        "options": ["$\\pi q f R^2$", "$2\\pi q f R^2$", "$\\frac{q f R^2}{2}$", "$q f R$"],
        "correctAnswer": 0,
        "explanation": "Effective current is $I = q f$. Area is $A = \\pi R^2$. Magnetic moment $M = I A = q f (\\pi R^2) = \\pi q f R^2$."
    })
    # 33
    questions.append({
        "question": "A uniform flexible wire of length $L$ carries a current $I$. When placed in a strong uniform magnetic field $B$ perpendicular to its plane, the wire naturally takes the shape of:",
        "options": ["A circle", "A square", "A parabola", "An ellipse"],
        "correctAnswer": 0,
        "explanation": "The magnetic radial outward forces ($I d\\vec{l} \\times \\vec{B}$) produce uniform tension throughout the wire, maximizing the enclosed magnetic flux and driving the flexible wire into a perfect circle."
    })
    # 34
    questions.append({
        "question": "In the circular loop formed by the flexible wire in the previous question, the tension $T$ in the wire is:",
        "options": ["$\\frac{I L B}{2\\pi}$", "$I L B$", "$\\frac{I L B}{\\pi}$", "$2\\pi I L B$"],
        "correctAnswer": 0,
        "explanation": "Radius is $R = L / (2\\pi)$. For an element subtending angle $d\\theta$: $2 T \\sin(d\\theta/2) \\approx T d\\theta = I (R d\\theta) B \\implies T = I R B = \\frac{I L B}{2\\pi}$."
    })
    # 35
    questions.append({
        "question": "A square loop of side $a$ carrying current $I$ has magnetic moment $M$. If the same wire is bent into a circular loop, the new magnetic moment will be:",
        "options": ["$\\frac{4}{\\pi} M$", "$\\frac{\\pi}{4} M$", "$\\frac{2}{\\pi} M$", "$M$"],
        "correctAnswer": 0,
        "explanation": "Wire length $L = 4a$. Square area $A_s = a^2 = L^2 / 16$, so $M_s = I L^2 / 16$. Circle radius $R = L / (2\\pi)$, area $A_c = \\pi R^2 = L^2 / (4\\pi)$, so $M_c = I L^2 / (4\\pi)$. Ratio $M_c / M_s = \\frac{16}{4\\pi} = \\frac{4}{\\pi}$. Thus $M_c = \\frac{4}{\\pi} M$."
    })
    # 36
    questions.append({
        "question": "The magnetic field produced by a magnetic dipole of moment $M$ at distance $r$ on its equatorial line is:",
        "options": ["$\\frac{\\mu_0}{4\\pi} \\frac{M}{r^3}$ antiparallel to $\\vec{M}$", "$\\frac{\\mu_0}{4\\pi} \\frac{2M}{r^3}$ parallel to $\\vec{M}$", "$\\frac{\\mu_0}{4\\pi} \\frac{M}{r^2}$", "Zero"],
        "correctAnswer": 0,
        "explanation": "For a magnetic dipole, $B_{\\text{axial}} = \\frac{\\mu_0}{4\\pi}\\frac{2M}{r^3}$ along $\\vec{M}$, and $B_{\\text{equatorial}} = \\frac{\\mu_0}{4\\pi}\\frac{M}{r^3}$ pointing opposite to $\\vec{M}$."
    })
    # 37
    questions.append({
        "question": "The ratio of magnetic field on the axis to that on the equatorial line of a short magnetic dipole at the same distance $r$ is:",
        "options": ["$2 : 1$", "$1 : 2$", "$4 : 1$", "$1 : 1$"],
        "correctAnswer": 0,
        "explanation": "$\\frac{B_{\\text{axial}}}{B_{\\text{equatorial}}} = \\frac{2M / r^3}{M / r^3} = 2 : 1$."
    })
    # 38
    questions.append({
        "question": "A current $I$ is flowing in an equilateral triangular loop of side $L$. The magnetic dipole moment of the loop is:",
        "options": ["$\\frac{\\sqrt{3}}{4} I L^2$", "$\\frac{1}{2} I L^2$", "$\\sqrt{3} I L^2$", "$\\frac{\\sqrt{3}}{2} I L^2$"],
        "correctAnswer": 0,
        "explanation": "Area of an equilateral triangle is $A = \\frac{\\sqrt{3}}{4}L^2$. Magnetic moment is $M = I A = \\frac{\\sqrt{3}}{4} I L^2$."
    })
    # 39
    questions.append({
        "question": "Two long parallel straight wires carry currents $I$ in the same direction. What is the magnetic force per unit length on a wire if their separation is $10\\text{ cm}$ and $I = 20\\text{ A}$?",
        "options": ["$8.0 \\times 10^{-4}\\text{ N/m}$ (attractive)", "$8.0 \\times 10^{-4}\\text{ N/m}$ (repulsive)", "$4.0 \\times 10^{-4}\\text{ N/m}$ (attractive)", "$2.0 \\times 10^{-4}\\text{ N/m}$ (attractive)"],
        "correctAnswer": 0,
        "explanation": "$\\frac{F}{L} = \\frac{\\mu_0 I^2}{2\\pi d} = \\frac{2 \\times 10^{-7} \\times (20)^2}{0.1} = \\frac{2 \\times 10^{-7} \\times 400}{0.1} = 8.0 \\times 10^{-4}\\text{ N/m}$. Since currents are in the same direction, the force is attractive."
    })
    # 40
    questions.append({
        "question": "A circular current loop of area $A$ and moment $M$ is placed in a magnetic field $B$. The frequency of small angular oscillations of the loop about its stable equilibrium axis (rotational inertia $I_0$) is:",
        "options": ["$\\frac{1}{2\\pi}\\sqrt{\\frac{M B}{I_0}}$", "$\\frac{1}{2\\pi}\\sqrt{\\frac{I_0}{M B}}$", "$2\\pi\\sqrt{\\frac{M B}{I_0}}$", "$\\frac{1}{2\\pi}\\frac{M B}{I_0}$"],
        "correctAnswer": 0,
        "explanation": "For small $\\theta$, $\\tau = -MB\\theta = I_0 \\alpha \\implies \\frac{d^2\\theta}{dt^2} + \\left(\\frac{MB}{I_0}\\right)\\theta = 0$. Angular frequency is $\\omega = \\sqrt{\\frac{MB}{I_0}}$, so frequency is $f = \\frac{1}{2\\pi}\\sqrt{\\frac{MB}{I_0}}$."
    })
    # 41
    questions.append({
        "question": "A long wire is suspended horizontally by two springs. When a current is passed through it in the presence of a horizontal perpendicular magnetic field, the springs extend by an additional amount $x$. If the current is reversed, the springs:",
        "options": ["Compress by $x$ relative to the equilibrium position under gravity", "Extend by $2x$", "Remain extended by $x$", "Show zero displacement"],
        "correctAnswer": 0,
        "explanation": "Reversing current reverses the direction of the magnetic force $\\vec{F} = I(\\vec{L}\\times\\vec{B})$. Since it pulled downward originally (adding to gravity), it now pushes upward with equal magnitude, compressing the springs by $x$ relative to gravity equilibrium."
    })
    # 42
    questions.append({
        "question": "Two electrons move parallel to each other with the same velocity $v$. The ratio of the magnetic force $F_m$ to the electric repulsive force $F_e$ between them is:",
        "options": ["$\\frac{v^2}{c^2}$", "$\\frac{v}{c}$", "$\\frac{c^2}{v^2}$", "$1$"],
        "correctAnswer": 0,
        "explanation": "$F_e = \\frac{1}{4\\pi \\varepsilon_0}\\frac{e^2}{r^2}$. $F_m = \\frac{\\mu_0}{4\\pi}\\frac{e^2 v^2}{r^2}$. The ratio is $\\frac{F_m}{F_e} = \\mu_0 \\varepsilon_0 v^2 = \\frac{v^2}{c^2}$ since $c^2 = 1/(\\mu_0 \\varepsilon_0)$."
    })
    # 43
    questions.append({
        "question": "A rectangular loop of sides $a$ and $b$ carries current $I$. If it is rotated about an axis passing through the centers of opposite sides of length $b$, the maximum torque is:",
        "options": ["$I a b B$", "$\\frac{1}{2} I a b B$", "$2 I a b B$", "Zero"],
        "correctAnswer": 0,
        "explanation": "Area is $A = a b$. Maximum torque occurs when the normal to the loop is perpendicular to $\\vec{B}$, yielding $\\tau_{\\max} = M B = I A B = I a b B$."
    })
    # 44
    questions.append({
        "question": "A loop carrying current $I$ is placed in a uniform magnetic field $\\vec{B}$. Which quantity is independent of the choice of reference point for calculating torque?",
        "options": ["The total magnetic torque on the closed loop", "The magnetic potential energy", "The force on individual segments", "None of these"],
        "correctAnswer": 0,
        "explanation": "Because the net force on any closed loop in a uniform magnetic field is strictly zero ($\\vec{F}_{\\text{net}} = 0$), the torque $\\vec{\\tau} = \\vec{M} \\times \\vec{B}$ is a pure couple and is completely independent of the choice of origin or reference point."
    })
    # 45
    questions.append({
        "question": "Two thin long wires are held parallel at distance $d$ carrying equal currents $I$. If one wire is rotated by $90^\\circ$ so that they become mutually perpendicular, the net force between them becomes:",
        "options": ["Zero", "Double", "Halved", "$\\frac{\\mu_0 I^2}{4\\pi d}$"],
        "correctAnswer": 0,
        "explanation": "By symmetry, for two mutually perpendicular straight wires carrying current, the magnetic forces on segments of one wire on opposite sides of the perpendicular intersection cancel out exactly, resulting in zero net force."
    })

    return questions

def create_galvanometer_questions():
    questions = []

    # 1
    questions.append({
        "question": "In a moving coil galvanometer, the magnetic field is made radial by using:",
        "options": ["Concave (cylindrical) magnetic pole pieces and a cylindrical soft iron core", "Flat pole pieces", "A strong electric field", "A non-magnetic copper core"],
        "correctAnswer": 0,
        "explanation": "Concave pole pieces combined with a cylindrical soft iron core make the magnetic field radial everywhere in the gap, ensuring that the plane of the coil is always parallel to the field lines ($\theta = 90^\\circ$), yielding a linear scale $\\tau = NIAB$."
    })
    # 2
    questions.append({
        "question": "In a moving coil galvanometer, the restoring torque is provided by:",
        "options": ["The torsion in the phosphor-bronze suspension strip", "The magnetic field of the permanent magnet", "The soft iron core", "Eddy currents in the coil frame"],
        "correctAnswer": 0,
        "explanation": "When the coil rotates through angle $\\theta$, the phosphor-bronze suspension wire twists, developing a restoring elastic torque $\\tau = C\\theta$, where $C$ is the torsional constant."
    })
    # 3
    questions.append({
        "question": "The current sensitivity of a moving coil galvanometer is defined as:",
        "options": ["$\\frac{\\theta}{I} = \\frac{NAB}{C}$", "$\\frac{I}{\\theta} = \\frac{C}{NAB}$", "$\\frac{\\theta}{V} = \\frac{NAB}{C R}$", "$\\frac{C}{NAB}$"],
        "correctAnswer": 0,
        "explanation": "At equilibrium: deflecting torque equals restoring torque: $NIAB = C\\theta \\implies \\frac{\\theta}{I} = \\frac{NAB}{C}$."
    })
    # 4
    questions.append({
        "question": "The voltage sensitivity of a galvanometer having coil resistance $R_g$ is:",
        "options": ["$\\frac{NAB}{C R_g}$", "$\\frac{NAB R_g}{C}$", "$\\frac{C R_g}{NAB}$", "$\\frac{C}{NAB R_g}$"],
        "correctAnswer": 0,
        "explanation": "Voltage sensitivity is deflection per unit voltage: $S_v = \\frac{\\theta}{V} = \\frac{\\theta}{I R_g} = \\frac{S_i}{R_g} = \\frac{NAB}{C R_g}$."
    })
    # 5
    questions.append({
        "question": "If the number of turns $N$ in a moving coil galvanometer is doubled, which of the following is correct?",
        "options": ["Current sensitivity is doubled, but voltage sensitivity remains almost unchanged", "Both current and voltage sensitivities are doubled", "Current sensitivity is halved", "Voltage sensitivity is doubled"],
        "correctAnswer": 0,
        "explanation": "Doubling $N$ doubles current sensitivity ($S_i \\propto N$). However, doubling $N$ also doubles the length of the wire and hence doubles the coil resistance $R_g$. Thus $S_v = S_i / R_g = (2 S_i) / (2 R_g) = S_v$ remains unchanged."
    })
    # 6
    questions.append({
        "question": "A galvanometer of resistance $G$ is converted into an ammeter of range $0$ to $I$. If $I_g$ is the full-scale deflection current, the required shunt resistance $S$ is:",
        "options": ["$S = \\frac{I_g G}{I - I_g}$", "$S = \\frac{(I - I_g)G}{I_g}$", "$S = \\frac{I G}{I_g}$", "$S = \\frac{I_g}{I - I_g} + G$"],
        "correctAnswer": 0,
        "explanation": "In parallel, the potential difference across the shunt equals that across the galvanometer: $(I - I_g)S = I_g G \\implies S = \\frac{I_g G}{I - I_g}$."
    })
    # 7
    questions.append({
        "question": "A galvanometer of resistance $G$ is converted into a voltmeter of range $0$ to $V$. If $I_g$ is the full-scale deflection current, the required series resistance $R$ is:",
        "options": ["$R = \\frac{V}{I_g} - G$", "$R = \\frac{V}{I_g} + G$", "$R = \\frac{I_g}{V} - G$", "$R = \\frac{V - G}{I_g}$"],
        "correctAnswer": 0,
        "explanation": "The total resistance is $R_V = R + G$. At full scale: $V = I_g(R + G) \\implies R + G = \\frac{V}{I_g} \\implies R = \\frac{V}{I_g} - G$."
    })
    # 8
    questions.append({
        "question": "The resistance of an ideal ammeter and an ideal voltmeter are respectively:",
        "options": ["Zero and infinite", "Infinite and zero", "Zero and zero", "Infinite and infinite"],
        "correctAnswer": 0,
        "explanation": "An ideal ammeter is connected in series and should have zero resistance so it does not alter the circuit current. An ideal voltmeter is connected in parallel and should have infinite resistance so it draws zero current."
    })
    # 9
    questions.append({
        "question": "A galvanometer has a resistance of $50\\;\\Omega$ and gives full-scale deflection for a current of $0.05\\text{ A}$. The resistance that should be connected in parallel to convert it into an ammeter of range $0$ to $5\\text{ A}$ is approximately:",
        "options": ["$0.505\\;\\Omega$", "$0.05\\;\\Omega$", "$5.0\\;\\Omega$", "$1.0\\;\\Omega$"],
        "correctAnswer": 0,
        "explanation": "$S = \\frac{I_g G}{I - I_g} = \\frac{0.05 \\times 50}{5 - 0.05} = \\frac{2.5}{4.95} \\approx 0.505\\;\\Omega$."
    })
    # 10
    questions.append({
        "question": "A galvanometer of resistance $100\\;\\Omega$ gives full-scale deflection with $1\\text{ mA}$. To convert it into a voltmeter of range $0$ to $10\\text{ V}$, the required series resistance is:",
        "options": ["$9900\\;\\Omega$", "$10000\\;\\Omega$", "$9000\\;\\Omega$", "$100\\;\\Omega$"],
        "correctAnswer": 0,
        "explanation": "$R = \\frac{V}{I_g} - G = \\frac{10}{10^{-3}} - 100 = 10000 - 100 = 9900\\;\\Omega$."
    })
    # 11
    questions.append({
        "question": "The effective resistance of an ammeter consisting of a galvanometer of resistance $G$ and shunt $S$ is:",
        "options": ["$\\frac{G S}{G + S}$", "$G + S$", "$\\frac{G - S}{G + S}$", "$\\sqrt{G S}$"],
        "correctAnswer": 0,
        "explanation": "Since the galvanometer and shunt are in parallel, the equivalent resistance is $R_A = \\frac{G S}{G + S}$."
    })
    # 12
    questions.append({
        "question": "Phosphor-bronze is preferred for the suspension strip in a moving coil galvanometer because it has:",
        "options": ["Low torsional constant and high tensile strength", "High electrical resistance", "Ferromagnetic properties", "Large coefficient of linear expansion"],
        "correctAnswer": 0,
        "explanation": "Phosphor-bronze has a very small restoring couple per unit twist ($C$), giving high sensitivity, combined with high mechanical tensile strength and resistance to rusting."
    })
    # 13
    questions.append({
        "question": "In a dead-beat galvanometer, electromagnetic damping is achieved by:",
        "options": ["Winding the coil on a metallic (usually aluminum) frame", "Immersing the coil in oil", "Using heavy springs", "Using air friction vanes"],
        "correctAnswer": 0,
        "explanation": "As the aluminum frame rotates in the magnetic field, eddy currents are induced in the closed metallic frame. By Lenz's law, these eddy currents produce a retarding torque that quickly brings the coil to rest without prolonged oscillation."
    })
    # 14
    questions.append({
        "question": "A galvanometer has a coil of 100 turns, area $4\\text{ cm}^2$, in a magnetic field of $0.02\\text{ T}$. If the restoring couple of the suspension is $10^{-8}\\text{ N}\\cdot\\text{m/degree}$, its current sensitivity is:",
        "options": ["$8 \\times 10^4\\text{ degrees/A}$", "$4 \\times 10^4\\text{ degrees/A}$", "$2 \\times 10^4\\text{ degrees/A}$", "$10^5\\text{ degrees/A}$"],
        "correctAnswer": 0,
        "explanation": "$S_i = \\frac{NAB}{C} = \\frac{100 \\times (4 \\times 10^{-4}) \\times 0.02}{10^{-8}} = \\frac{8 \\times 10^{-4}}{10^{-8}} = 8 \\times 10^4\\text{ degrees/A}$."
    })
    # 15
    questions.append({
        "question": "A galvanometer gives full-scale deflection with current $I_g$. If a shunt of value $S = G/9$ is connected across it, the new current range of the ammeter is:",
        "options": ["$10 I_g$", "$9 I_g$", "$8 I_g$", "$11 I_g$"],
        "correctAnswer": 0,
        "explanation": "$S = \\frac{I_g G}{I - I_g} \\implies \\frac{G}{9} = \\frac{I_g G}{I - I_g} \\implies I - I_g = 9 I_g \\implies I = 10 I_g$."
    })
    # 16
    questions.append({
        "question": "What fraction of the total circuit current passes through the galvanometer in the previous problem?",
        "options": ["$1/10$", "$1/9$", "$9/10$", "$1/8$"],
        "correctAnswer": 0,
        "explanation": "Fraction passing through the galvanometer is $\\frac{I_g}{I} = \\frac{I_g}{10 I_g} = \\frac{1}{10} = 10\\%$."
    })
    # 17
    questions.append({
        "question": "To increase the current sensitivity of a moving coil galvanometer by $50\\%$, the number of turns is increased. What happens to its voltage sensitivity if the resistance of the coil also increases by $50\\%$?",
        "options": ["Remains unchanged", "Increases by $50\\%$", "Decreases by $50\\%$", "Doubles"],
        "correctAnswer": 0,
        "explanation": "$S_v = \\frac{S_i}{R_g}$. When $S_i' = 1.5 S_i$ and $R_g' = 1.5 R_g$, $S_v' = \\frac{1.5 S_i}{1.5 R_g} = S_v$. Voltage sensitivity remains completely unchanged."
    })
    # 18
    questions.append({
        "question": "A voltmeter of resistance $R_V$ is connected across a resistor $R$ in a circuit. The percentage error in the measured voltage is minimized when:",
        "options": ["$R_V \\gg R$", "$R_V \\ll R$", "$R_V = R$", "$R_V = 0$"],
        "correctAnswer": 0,
        "explanation": "When a voltmeter is placed across $R$, the equivalent resistance becomes $R_{\\text{eq}} = \\frac{R R_V}{R + R_V} = R\\left(1 - \\frac{R}{R + R_V}\\right)$. To minimize loading error ($R_{\\text{eq}} \\approx R$), we require $R_V \\gg R$."
    })
    # 19
    questions.append({
        "question": "An ammeter of resistance $R_A$ is connected in series with a resistor $R$. The percentage error in measuring current is minimized when:",
        "options": ["$R_A \\ll R$", "$R_A \\gg R$", "$R_A = R$", "$R_A = \\infty$"],
        "correctAnswer": 0,
        "explanation": "Total circuit resistance becomes $R + R_A$. Current is $I' = \\frac{V}{R + R_A}$. For $I' \\approx I = V/R$, we require $R_A \\ll R$."
    })
    # 20
    questions.append({
        "question": "A moving coil galvanometer has 50 divisions. A current of $4 \\times 10^{-4}\\text{ A}$ gives a deflection of 10 divisions. The figure of merit of the galvanometer is:",
        "options": ["$4.0 \\times 10^{-5}\\text{ A/division}$", "$2.5 \\times 10^4\\text{ divisions/A}$", "$4.0 \\times 10^{-4}\\text{ A/division}$", "$1.0 \\times 10^{-5}\\text{ A/division}$"],
        "correctAnswer": 0,
        "explanation": "Figure of merit $k$ is the current required for unit deflection: $k = \\frac{I}{\\theta} = \\frac{4 \\times 10^{-4}\\text{ A}}{10\\text{ divisions}} = 4.0 \\times 10^{-5}\\text{ A/division}$."
    })
    # 21
    questions.append({
        "question": "The full-scale deflection current $I_g$ for the galvanometer in the previous problem is:",
        "options": ["$2.0 \\times 10^{-3}\\text{ A}$ ($2\\text{ mA}$)", "$4.0 \\times 10^{-3}\\text{ A}$", "$1.0 \\times 10^{-3}\\text{ A}$", "$5.0 \\times 10^{-4}\\text{ A}$"],
        "correctAnswer": 0,
        "explanation": "$I_g = k \\times \\theta_{\\text{total}} = (4.0 \\times 10^{-5}\\text{ A/div}) \\times 50\\text{ div} = 2.0 \\times 10^{-3}\\text{ A} = 2\\text{ mA}$."
    })
    # 22
    questions.append({
        "question": "A galvanometer has resistance $G$. A shunt $S$ is connected across it to convert it into an ammeter of range $n I_g$. The value of $S$ is:",
        "options": ["$\\frac{G}{n - 1}$", "$\\frac{G}{n}$", "$\\frac{G}{n + 1}$", "$(n - 1)G$"],
        "correctAnswer": 0,
        "explanation": "$S = \\frac{I_g G}{I - I_g} = \\frac{I_g G}{n I_g - I_g} = \\frac{G}{n - 1}$."
    })
    # 23
    questions.append({
        "question": "A galvanometer of resistance $G$ is converted into a voltmeter of range $n V_g$, where $V_g = I_g G$. The required series resistance $R$ is:",
        "options": ["$(n - 1)G$", "$\\frac{G}{n - 1}$", "$n G$", "$(n + 1)G$"],
        "correctAnswer": 0,
        "explanation": "$R = \\frac{V}{I_g} - G = \\frac{n V_g}{I_g} - G = \\frac{n(I_g G)}{I_g} - G = nG - G = (n - 1)G$."
    })
    # 24
    questions.append({
        "question": "A galvanometer of resistance $25\\;\\Omega$ is shunted by a $2.5\\;\\Omega$ wire. The part of total current that flows through the shunt is:",
        "options": ["$\\frac{10}{11}$", "$\\frac{1}{11}$", "$\\frac{9}{10}$", "$\\frac{1}{10}$"],
        "correctAnswer": 0,
        "explanation": "Current through shunt is $I_s = I \\frac{G}{G + S} = I \\frac{25}{25 + 2.5} = I \\frac{25}{27.5} = I \\frac{10}{11}$."
    })
    # 25
    questions.append({
        "question": "The soft iron core in a galvanometer serves two primary functions:",
        "options": ["Increases the magnetic field strength and makes the field radial", "Provides restoring torque and reduces friction", "Prevents eddy currents and cools the coil", "Acts as an electrical conductor for the signal"],
        "correctAnswer": 0,
        "explanation": "Because of its high magnetic permeability ($\\mu_r \\gg 1$), soft iron concentrates the magnetic lines of force (increasing $B$) and directs them normal to the cylindrical surface, ensuring a strictly radial magnetic field."
    })
    # 26
    questions.append({
        "question": "Two galvanometers $A$ and $B$ have coils with details: $N_A = 30, A_A = 3.6 \\times 10^{-3}\\text{ m}^2, B_A = 0.25\\text{ T}, R_A = 10\\;\\Omega$ and $N_B = 42, A_B = 1.8 \\times 10^{-3}\\text{ m}^2, B_B = 0.50\\text{ T}, R_B = 14\\;\\Omega$. If torsional constants are identical, the ratio of their current sensitivities $S_{iA} / S_{iB}$ is:",
        "options": ["$\\frac{5}{7}$", "$\\frac{7}{5}$", "$1$", "$\\frac{3}{4}$"],
        "correctAnswer": 0,
        "explanation": "$S_i = \\frac{NAB}{C}$. $\\frac{S_{iA}}{S_{iB}} = \\frac{N_A A_A B_A}{N_B A_B B_B} = \\frac{30 \\times 3.6 \\times 0.25}{42 \\times 1.8 \\times 0.50} = \\frac{27}{37.8} = \\frac{5}{7}$."
    })
    # 27
    questions.append({
        "question": "For the same two galvanometers in the previous question, the ratio of their voltage sensitivities $S_{vA} / S_{vB}$ is:",
        "options": ["$1$", "$\\frac{5}{7}$", "$\\frac{7}{5}$", "$\\frac{2}{3}$"],
        "correctAnswer": 0,
        "explanation": "$\\frac{S_{vA}}{S_{vB}} = \\frac{S_{iA}}{S_{iB}} \\times \\frac{R_B}{R_A} = \\frac{5}{7} \\times \\frac{14}{10} = \\frac{5}{7} \\times \\frac{7}{5} = 1$."
    })
    # 28
    questions.append({
        "question": "A milliammeter of range $10\\text{ mA}$ has a resistance of $1\\;\\Omega$. How will you convert it into a voltmeter reading up to $10\\text{ V}$?",
        "options": ["Connect a resistance of $999\\;\\Omega$ in series", "Connect a resistance of $999\\;\\Omega$ in parallel", "Connect a resistance of $1000\\;\\Omega$ in series", "Connect a resistance of $0.001\\;\\Omega$ in parallel"],
        "correctAnswer": 0,
        "explanation": "$R = \\frac{V}{I_g} - G = \\frac{10}{10 \\times 10^{-3}} - 1 = 1000 - 1 = 999\\;\\Omega$ in series."
    })
    # 29
    questions.append({
        "question": "How will you convert the same milliammeter ($10\\text{ mA}, 1\\;\\Omega$) into an ammeter reading up to $1\\text{ A}$?",
        "options": ["Connect a shunt of $\\frac{1}{99}\\;\\Omega$ in parallel", "Connect a shunt of $99\\;\\Omega$ in parallel", "Connect a resistance of $99\\;\\Omega$ in series", "Connect a shunt of $0.01\\;\\Omega$ in parallel"],
        "correctAnswer": 0,
        "explanation": "$S = \\frac{I_g G}{I - I_g} = \\frac{0.010 \\times 1}{1.0 - 0.010} = \\frac{0.010}{0.99} = \\frac{1}{99}\\;\\Omega$ in parallel."
    })
    # 30
    questions.append({
        "question": "A voltmeter has a range $0$ to $V$ with resistance $R$. If its range is to be extended to $n V$, the additional resistance to be connected in series is:",
        "options": ["$(n - 1)R$", "$n R$", "$\\frac{R}{n}$", "$\\frac{R}{n - 1}$"],
        "correctAnswer": 0,
        "explanation": "At full scale, current is $I_g = V/R$. For new range $V' = nV$: total resistance $R' = \\frac{nV}{I_g} = nR$. Additional series resistance is $\\Delta R = R' - R = nR - R = (n - 1)R$."
    })
    # 31
    questions.append({
        "question": "An ammeter has a range $0$ to $I$ and resistance $R_A$. To extend its range to $n I$, the required shunt resistance to be connected across it is:",
        "options": ["$\\frac{R_A}{n - 1}$", "$(n - 1)R_A$", "$\\frac{R_A}{n}$", "$\\frac{R_A}{n + 1}$"],
        "correctAnswer": 0,
        "explanation": "Treating the ammeter as a meter with internal resistance $R_A$ and full-scale current $I$: $S = \\frac{I R_A}{nI - I} = \\frac{R_A}{n - 1}$."
    })
    # 32
    questions.append({
        "question": "A galvanometer has resistance $G$. When a shunt of $4\\;\\Omega$ is connected across it, the deflection is reduced to $1/5$ of its initial value. The value of $G$ is:",
        "options": ["$16\\;\\Omega$", "$20\\;\\Omega$", "$8\\;\\Omega$", "$12\\;\\Omega$"],
        "correctAnswer": 0,
        "explanation": "Deflection is reduced to $1/5 \\implies I_g = I/5$. By shunt formula: $S = \\frac{I_g G}{I - I_g} = \\frac{(I/5)G}{4I/5} = \\frac{G}{4} \\implies 4\\;\\Omega = \\frac{G}{4} \\implies G = 16\\;\\Omega$."
    })
    # 33
    questions.append({
        "question": "A circuit consists of a battery of EMF $6\\text{ V}$ and internal resistance $1\\;\\Omega$ connected to a resistor of $5\\;\\Omega$. An ammeter of resistance $0.5\\;\\Omega$ is inserted to measure the current. The percentage error in the measurement is:",
        "options": ["$7.7\\%$", "$10.0\\%$", "$5.0\\%$", "$12.5\\%$"],
        "correctAnswer": 0,
        "explanation": "True current without ammeter: $I = \\frac{6}{5 + 1} = 1.0\\text{ A}$. Measured current with ammeter: $I' = \\frac{6}{5 + 1 + 0.5} = \\frac{6}{6.5} \\approx 0.923\\text{ A}$. Percentage error $= \\frac{1.0 - 0.923}{1.0} \\times 100\\% = 7.7\\%$."
    })
    # 34
    questions.append({
        "question": "A multi-range voltmeter uses a single galvanometer with several series resistors. This combination is known as a:",
        "options": ["Multiplier", "Shunt", "Potentiometer", "Wheatstone bridge"],
        "correctAnswer": 0,
        "explanation": "A high resistance connected in series with a galvanometer to convert it into a voltmeter is called a multiplier."
    })
    # 35
    questions.append({
        "question": "Which of the following modifications will DEFINITIVELY increase both the current sensitivity and voltage sensitivity of a moving coil galvanometer simultaneously?",
        "options": ["Increasing the magnetic field $B$ by using stronger magnets", "Increasing the number of turns $N$", "Increasing the torsional constant $C$", "Using a wire of higher electrical resistivity"],
        "correctAnswer": 0,
        "explanation": "Increasing $B$ increases both $S_i = \\frac{NAB}{C}$ and $S_v = \\frac{NAB}{C R_g}$ without changing the resistance $R_g$ or wire length."
    })
    # 36
    questions.append({
        "question": "Why is a tangent galvanometer oriented such that its coil lies in the magnetic meridian?",
        "options": ["So that the magnetic field produced at the center is perpendicular to the horizontal component of Earth's magnetic field", "To maximize Earth's magnetic field", "To protect the needle from gravity", "To cancel out Earth's vertical field component"],
        "correctAnswer": 0,
        "explanation": "In a tangent galvanometer, the coil is placed in the magnetic meridian so that its magnetic field $B$ is perpendicular to Earth's horizontal component $B_H$. Under two perpendicular fields, the needle deflects by angle $\\theta$ satisfying the tangent law $B = B_H \\tan\\theta$."
    })
    # 37
    questions.append({
        "question": "A tangent galvanometer has 50 turns of radius $8\\text{ cm}$. If the deflection of the compass needle is $45^\\circ$ when placed in Earth's field $B_H = 3.9 \\times 10^{-5}\\text{ T}$, the current in the coil is:",
        "options": ["$0.1\\text{ A}$", "$0.2\\text{ A}$", "$0.05\\text{ A}$", "$0.5\\text{ A}$"],
        "correctAnswer": 0,
        "explanation": "By tangent law: $B = B_H \\tan 45^\\circ = B_H$. Field at center: $B = \\frac{\\mu_0 N I}{2R} = B_H \\implies I = \\frac{2 R B_H}{\\mu_0 N} = \\frac{2 \\times 0.08 \\times 3.9 \\times 10^{-5}}{(4\\pi \\times 10^{-7}) \\times 50} = \\frac{6.24 \\times 10^{-6}}{6.28 \\times 10^{-5}} \\approx 0.1\\text{ A}$."
    })
    # 38
    questions.append({
        "question": "In a ballistic galvanometer, the first deflection (throw) $\\theta$ of the coil is directly proportional to:",
        "options": ["The total electric charge $q$ that passed through the coil", "The steady current $I$", "The power dissipated", "The rate of change of current"],
        "correctAnswer": 0,
        "explanation": "In a ballistic galvanometer, a brief current pulse passes through before the coil starts moving noticeably. The initial angular impulse produces an initial angular velocity proportional to total charge $q = \\int i dt$, resulting in a first throw $\\theta \\propto q$."
    })
    # 39
    questions.append({
        "question": "A galvanometer with a resistance of $12\\;\\Omega$ gives a full-scale deflection for a current of $2.5\\text{ mA}$. How can it be converted into an ammeter of range $0$ to $7.5\\text{ A}$?",
        "options": ["By connecting a shunt of $0.004\\;\\Omega$ in parallel", "By connecting a resistance of $3000\\;\\Omega$ in series", "By connecting a shunt of $0.04\\;\\Omega$ in parallel", "By connecting a resistance of $0.004\\;\\Omega$ in series"],
        "correctAnswer": 0,
        "explanation": "$S = \\frac{I_g G}{I - I_g} = \\frac{0.0025 \\times 12}{7.5 - 0.0025} \\approx \\frac{0.030}{7.4975} \\approx 0.004\\;\\Omega$ in parallel."
    })
    # 40
    questions.append({
        "question": "A voltmeter of resistance $2000\\;\\Omega$ reads $2.0\\text{ V}$ per division. The total number of divisions is 50. The current required for full scale deflection is:",
        "options": ["$0.05\\text{ A}$ ($50\\text{ mA}$)", "$0.001\\text{ A}$", "$0.02\\text{ A}$", "$0.1\\text{ A}$"],
        "correctAnswer": 0,
        "explanation": "Full-scale voltage is $V = 50 \\times 2.0 = 100\\text{ V}$. Full scale current is $I_g = \\frac{V}{R} = \\frac{100\\text{ V}}{2000\\;\\Omega} = 0.05\\text{ A} = 50\\text{ mA}$."
    })
    # 41
    questions.append({
        "question": "A galvanometer coil has resistance $15\\;\\Omega$ and the meter shows full scale deflection for a current of $4\\text{ mA}$. To convert the meter into a voltmeter of range 0 to $18\\text{ V}$, the required series resistor is:",
        "options": ["$4485\\;\\Omega$", "$4500\\;\\Omega$", "$4515\\;\\Omega$", "$4000\\;\\Omega$"],
        "correctAnswer": 0,
        "explanation": "$R = \\frac{V}{I_g} - G = \\frac{18}{4 \\times 10^{-3}} - 15 = 4500 - 15 = 4485\\;\\Omega$."
    })
    # 42
    questions.append({
        "question": "An ammeter reads up to $1\\text{ A}$. Its internal resistance is $0.81\\;\\Omega$. To increase the range to $10\\text{ A}$, the required shunt resistance is:",
        "options": ["$0.09\\;\\Omega$", "$0.9\\;\\Omega$", "$0.081\\;\\Omega$", "$0.01\\;\\Omega$"],
        "correctAnswer": 0,
        "explanation": "$S = \\frac{R_A}{n - 1} = \\frac{0.81}{10 - 1} = \\frac{0.81}{9} = 0.09\\;\\Omega$."
    })
    # 43
    questions.append({
        "question": "If an ammeter is accidentally connected in parallel across a voltage source, what is the most likely consequence?",
        "options": ["A very large current will pass through it, potentially burning the coil", "It will read the correct EMF", "The pointer will not deflect at all", "It will act as an ideal voltmeter"],
        "correctAnswer": 0,
        "explanation": "Because an ammeter has very low internal resistance ($R_A \\approx 0$), connecting it in parallel across a potential difference will draw an enormous short-circuit current ($I = V/R_A$), damaging or burning out the meter."
    })
    # 44
    questions.append({
        "question": "If a voltmeter is accidentally connected in series with a load in a circuit, what will happen?",
        "options": ["Almost no current will flow in the circuit, and the voltmeter will read nearly the full supply voltage", "The voltmeter will burn out", "The load will operate at double power", "The circuit will short-circuit"],
        "correctAnswer": 0,
        "explanation": "Because a voltmeter has a very high internal resistance ($R_V \\gg R$), connecting it in series reduces the circuit current to near zero. Almost the entire source voltage drops across the voltmeter, so it safely reads nearly the supply voltage."
    })
    # 45
    questions.append({
        "question": "The angle of deflection $\\theta$ in a moving coil galvanometer with a radial magnetic field is directly proportional to:",
        "options": ["$I$", "$I^2$", "$\\sqrt{I}$", "$1/I$"],
        "correctAnswer": 0,
        "explanation": "Because of the radial magnetic field, $\\tau = NIAB = C\\theta$, so $\\theta = \\left(\\frac{NAB}{C}\\right)I$, which is strictly linear and directly proportional to current $I$."
    })

    return questions

def main():
    parallel_raw = create_force_parallel_questions()
    galv_raw = create_galvanometer_questions()

    print(f"Force parallel questions: {len(parallel_raw)}")
    print(f"Galvanometer questions: {len(galv_raw)}")

    parallel_balanced = format_and_balance(parallel_raw, "Force between two parallel currents")
    galv_balanced = format_and_balance(galv_raw, "Moving coil galvanometer and conversion to ammeter/voltmeter")

    batch3 = parallel_balanced + galv_balanced

    out_path = "/Users/laxmikumari/Desktop/web/project going on /testseries/scripts/magnetism/magnetism_batch3.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(batch3, f, indent=2)

    print(f"Generated {len(batch3)} MCQs for batch 3 saved to {out_path}")

if __name__ == "__main__":
    main()
