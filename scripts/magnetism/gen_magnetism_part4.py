import json
import os

# Batch 4:
# 7. Magnetic properties (dia, para, ferromagnetism) (45 MCQs)

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

def create_magnetic_properties_questions():
    questions = []

    # 1
    questions.append({
        "question": "The relation connecting magnetic flux density $\\vec{B}$, magnetic field intensity $\\vec{H}$, and magnetization $\\vec{M}$ in SI units is:",
        "options": ["$\\vec{B} = \\mu_0(\\vec{H} + \\vec{M})$", "$\\vec{B} = \\mu_0\\vec{H} + \\vec{M}$", "$\\vec{H} = \\mu_0(\\vec{B} + \\vec{M})$", "$\\vec{B} = \\frac{\\vec{H} + \\vec{M}}{\\mu_0}$"],
        "correctAnswer": 0,
        "explanation": "In SI units, the constitutive relation is $\\vec{B} = \\mu_0(\\vec{H} + \\vec{M})$."
    })
    # 2
    questions.append({
        "question": "Magnetic susceptibility $\\chi_m$ of a magnetic substance is defined as:",
        "options": ["$\\chi_m = \\frac{M}{H}$", "$\\chi_m = \\frac{B}{H}$", "$\\chi_m = \\frac{H}{M}$", "$\\chi_m = \\frac{\\mu_0 M}{B}$"],
        "correctAnswer": 0,
        "explanation": "Magnetic susceptibility is the ratio of magnetization $M$ induced in the material to the applied magnetic intensity $H$: $\\chi_m = \\frac{M}{H}$ (dimensionless)."
    })
    # 3
    questions.append({
        "question": "The relative magnetic permeability $\\mu_r$ of a substance is related to its magnetic susceptibility $\\chi_m$ by:",
        "options": ["$\\mu_r = 1 + \\chi_m$", "$\\mu_r = 1 - \\chi_m$", "$\\mu_r = \\frac{1}{\\chi_m}$", "$\\mu_r = \\chi_m - 1$"],
        "correctAnswer": 0,
        "explanation": "$B = \\mu H = \\mu_0(H + M) = \\mu_0 H(1 + M/H) = \\mu_0 H(1 + \\chi_m)$. Hence $\\mu = \\mu_0(1 + \\chi_m) \\implies \\mu_r = \\frac{\\mu}{\\mu_0} = 1 + \\chi_m$."
    })
    # 4
    questions.append({
        "question": "For a diamagnetic substance, the magnetic susceptibility $\\chi_m$ is:",
        "options": ["Negative and small ($-1 \\le \\chi_m < 0$)", "Positive and small ($0 < \\chi_m \\ll 1$)", "Positive and very large ($\\chi_m \\gg 1$)", "Zero"],
        "correctAnswer": 0,
        "explanation": "Diamagnetic materials develop magnetization opposite to the applied field. Their susceptibility is negative, small (order of $10^{-5}$), and $\\mu_r < 1$."
    })
    # 5
    questions.append({
        "question": "For a paramagnetic substance, the magnetic susceptibility $\\chi_m$ is:",
        "options": ["Small and positive", "Negative and small", "Very large and positive", "Infinite"],
        "correctAnswer": 0,
        "explanation": "Paramagnetic substances develop weak magnetization in the direction of the applied field, so $\\chi_m$ is small and positive (order $10^{-5}$ to $10^{-3}$), with $\\mu_r > 1$."
    })
    # 6
    questions.append({
        "question": "For a ferromagnetic substance, the magnetic susceptibility $\\chi_m$ is:",
        "options": ["Very large and positive ($\\chi_m \\gg 1$)", "Small and negative", "Small and positive", "$-1$"],
        "correctAnswer": 0,
        "explanation": "Ferromagnetic substances have domains that align strongly with the external field, producing very large magnetization, so $\\chi_m \\gg 1$ (often $10^3$ to $10^5$) and $\\mu_r \\gg 1$."
    })
    # 7
    questions.append({
        "question": "Superconductors exhibit perfect diamagnetism (the Meissner effect). For a superconductor, the magnetic susceptibility $\\chi_m$ and relative permeability $\\mu_r$ are respectively:",
        "options": ["$-1$ and $0$", "$0$ and $1$", "$1$ and $2$", "$\\infty$ and $\\infty$"],
        "correctAnswer": 0,
        "explanation": "Inside a superconductor, magnetic field is completely expelled ($B = 0$). From $B = \\mu_0(H + M) = 0 \\implies M = -H \\implies \\chi_m = M/H = -1$. Then $\\mu_r = 1 + \\chi_m = 1 + (-1) = 0$."
    })
    # 8
    questions.append({
        "question": "Curie's law for paramagnetic substances states that the magnetic susceptibility varies with absolute temperature $T$ as:",
        "options": ["$\\chi_m \\propto \\frac{1}{T}$", "$\\chi_m \\propto T$", "$\\chi_m \\propto \\frac{1}{T^2}$", "$\\chi_m$ is independent of $T$"],
        "correctAnswer": 0,
        "explanation": "Curie's law states that for paramagnetic substances, thermal agitation opposes dipole alignment: $\\chi_m = \\frac{C}{T}$, where $C$ is the Curie constant."
    })
    # 9
    questions.append({
        "question": "Above the Curie temperature $T_c$, a ferromagnetic substance transforms into a:",
        "options": ["Paramagnetic substance obeying the Curie-Weiss law", "Diamagnetic substance", "Superconductor", "Permanent magnet with fixed magnetization"],
        "correctAnswer": 0,
        "explanation": "Above the Curie temperature $T_c$, thermal energy destroys the spontaneous domain alignment. The substance becomes paramagnetic and obeys the Curie-Weiss law: $\\chi_m = \\frac{C}{T - T_c}$ for $T > T_c$."
    })
    # 10
    questions.append({
        "question": "The magnetic susceptibility of a diamagnetic substance depends on absolute temperature $T$ as:",
        "options": ["Independent of temperature", "$\\chi_m \\propto 1/T$", "$\\chi_m \\propto T$", "$\\chi_m \\propto 1/T^2$"],
        "correctAnswer": 0,
        "explanation": "Diamagnetism arises from the induced orbital motion of paired electrons (Lenz's law at atomic level) and is completely independent of thermal agitation and temperature."
    })
    # 11
    questions.append({
        "question": "When a diamagnetic liquid is placed in a watch glass resting on the pole pieces of a magnet placed close together (strongest field at center), the liquid:",
        "options": ["Accumulates at the sides, forming a depression in the middle", "Accumulates at the middle, forming a mound", "Remains completely flat", "Starts rotating"],
        "correctAnswer": 0,
        "explanation": "Diamagnetic materials are repelled from regions of stronger magnetic field to regions of weaker magnetic field. Since the field is strongest at the center when poles are close, the liquid moves away from the center toward the sides."
    })
    # 12
    questions.append({
        "question": "When a paramagnetic liquid is placed in the same watch glass with poles close together, the liquid:",
        "options": ["Accumulates in the middle, forming a mound", "Accumulates at the sides", "Remains flat", "Evaporates immediately"],
        "correctAnswer": 0,
        "explanation": "Paramagnetic substances are attracted toward regions of stronger magnetic field. When the poles are close together, the field is strongest in the middle, so the liquid concentrates in the middle."
    })
    # 13
    questions.append({
        "question": "A thin rod of diamagnetic material is suspended freely in a uniform horizontal magnetic field. In equilibrium, the rod aligns itself:",
        "options": ["Perpendicular to the magnetic field", "Parallel to the magnetic field", "At $45^\\circ$ to the field", "In continuous rotation"],
        "correctAnswer": 0,
        "explanation": "A diamagnetic rod experiences repulsion from the magnetic field lines. To minimize its interaction energy, it sets its longest dimension perpendicular to the direction of the magnetic field."
    })
    # 14
    questions.append({
        "question": "A thin rod of paramagnetic material suspended freely in a uniform horizontal magnetic field aligns itself:",
        "options": ["Parallel to the magnetic field", "Perpendicular to the magnetic field", "At $45^\\circ$ to the field", "Vertically"],
        "correctAnswer": 0,
        "explanation": "Paramagnetic materials are attracted by the magnetic field, so the rod sets its longest axis parallel to the magnetic field lines to maximize flux through it."
    })
    # 15
    questions.append({
        "question": "In the hysteresis curve ($B$-$H$ loop) of a ferromagnetic material, the value of $B$ remaining in the material when the magnetizing field $H$ is reduced to zero is called:",
        "options": ["Retentivity (or remanence)", "Coercivity", "Susceptibility", "Permeability"],
        "correctAnswer": 0,
        "explanation": "Retentivity (or remanence) is the residual magnetic flux density remaining in the ferromagnetic material when the external magnetizing field $H$ is reduced to zero."
    })
    # 16
    questions.append({
        "question": "The reverse magnetizing field $H_c$ required to completely demagnetize the ferromagnetic material (reduce $B$ to zero) is called:",
        "options": ["Coercivity", "Retentivity", "Curie point", "Saturation field"],
        "correctAnswer": 0,
        "explanation": "Coercivity is the magnitude of the reverse magnetic intensity $H$ needed to wipe out the residual magnetism ($B = 0$)."
    })
    # 17
    questions.append({
        "question": "The area enclosed by the $B$-$H$ hysteresis loop represents:",
        "options": ["The energy dissipated as heat per unit volume of the material per cycle of magnetization", "The total magnetic moment", "The retentivity of the material", "The permeability"],
        "correctAnswer": 0,
        "explanation": "The area of the hysteresis loop equals $\\oint H dB$, which represents the hysteresis energy loss per unit volume per magnetization cycle, dissipated as heat."
    })
    # 18
    questions.append({
        "question": "For making permanent magnets, the material should have:",
        "options": ["High retentivity and high coercivity", "High retentivity and low coercivity", "Low retentivity and high coercivity", "Low retentivity and low coercivity"],
        "correctAnswer": 0,
        "explanation": "Permanent magnets require high retentivity (to retain a strong magnetic field) and high coercivity (so that stray magnetic fields or mechanical shocks do not demagnetize it), like Alnico or carbon steel."
    })
    # 19
    questions.append({
        "question": "For making transformer cores and electromagnets, soft iron is preferred over steel because soft iron has:",
        "options": ["High permeability and low hysteresis loss (narrow hysteresis loop)", "High coercivity and high retentivity", "Low permeability and high retentivity", "Large hysteresis loop area"],
        "correctAnswer": 0,
        "explanation": "Soft iron has high magnetic permeability (easily magnetized), high saturation magnetization, and low coercivity resulting in a narrow hysteresis loop, which minimizes energy dissipation during rapid AC cycles."
    })
    # 20
    questions.append({
        "question": "The horizontal component of Earth's magnetic field at a place is $B_H$ and the angle of dip is $\\delta$. The total magnetic field $B$ of the Earth at that place is:",
        "options": ["$\\frac{B_H}{\\cos\\delta}$", "$B_H \\cos\\delta$", "$\\frac{B_H}{\\sin\\delta}$", "$B_H \\tan\\delta$"],
        "correctAnswer": 0,
        "explanation": "Since $B_H = B \\cos\\delta$, the total field is $B = \\frac{B_H}{\\cos\\delta}$."
    })
    # 21
    questions.append({
        "question": "At the magnetic equator of the Earth, the angle of dip (inclination) $\\delta$ is:",
        "options": ["$0^\\circ$", "$90^\\circ$", "$45^\\circ$", "$180^\\circ$"],
        "correctAnswer": 0,
        "explanation": "At the magnetic equator, the magnetic field lines are strictly horizontal, so the vertical component $B_V = 0$, giving $\\tan\\delta = B_V/B_H = 0 \\implies \\delta = 0^\\circ$."
    })
    # 22
    questions.append({
        "question": "At the magnetic poles of the Earth, the angle of dip $\\delta$ is:",
        "options": ["$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$60^\\circ$"],
        "correctAnswer": 0,
        "explanation": "At the magnetic poles, the Earth's field lines are strictly vertical ($B_H = 0$), so a dip needle points vertically, giving $\\delta = 90^\\circ$."
    })
    # 23
    questions.append({
        "question": "At a place on Earth, the horizontal and vertical components of magnetic field are equal. The angle of dip at that place is:",
        "options": ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"],
        "correctAnswer": 0,
        "explanation": "$\\tan\\delta = \\frac{B_V}{B_H}$. When $B_V = B_H$, $\\tan\\delta = 1 \\implies \\delta = 45^\\circ$."
    })
    # 24
    questions.append({
        "question": "The angle between the magnetic meridian and the geographic meridian at a place is called:",
        "options": ["Magnetic declination", "Angle of dip", "Magnetic latitude", "Magnetic inclination"],
        "correctAnswer": 0,
        "explanation": "Magnetic declination (or variation) is the angle between the geographic meridian (true north-south) and the magnetic meridian (magnetic north-south) at a given location on Earth's surface."
    })
    # 25
    questions.append({
        "question": "A dip circle is oriented in a plane making an angle $\\theta$ with the magnetic meridian. The apparent dip $\\delta'$ is related to the true dip $\\delta$ by:",
        "options": ["$\\tan\\delta' = \\frac{\\tan\\delta}{\\cos\\theta}$", "$\\tan\\delta' = \\tan\\delta \\cos\\theta$", "$\\tan\\delta' = \\frac{\\tan\\delta}{\\sin\\theta}$", "$\\tan\\delta' = \\tan\\delta \\sin\\theta$"],
        "correctAnswer": 0,
        "explanation": "In a plane inclined at $\\theta$ to the magnetic meridian, the vertical component is unchanged ($B_V' = B_V$), but the horizontal component is $B_H' = B_H\\cos\\theta$. Thus $\\tan\\delta' = \\frac{B_V'}{B_H'} = \\frac{B_V}{B_H\\cos\\theta} = \\frac{\\tan\\delta}{\\cos\\theta}$."
    })
    # 26
    questions.append({
        "question": "If $\\delta_1$ and $\\delta_2$ are the apparent dips observed in two mutually perpendicular vertical planes, the true dip $\\delta$ satisfies:",
        "options": ["$\\cot^2\\delta = \\cot^2\\delta_1 + \\cot^2\\delta_2$", "$\\tan^2\\delta = \\tan^2\\delta_1 + \\tan^2\\delta_2$", "$\\sin^2\\delta = \\sin^2\\delta_1 + \\sin^2\\delta_2$", "$\\cos^2\\delta = \\cos^2\\delta_1 + \\cos^2\\delta_2$"],
        "correctAnswer": 0,
        "explanation": "Let the two planes be at angles $\\theta$ and $90^\\circ - \\theta$ to the magnetic meridian. $\\tan\\delta_1 = \\frac{\\tan\\delta}{\\cos\\theta} \\implies \\cos\\theta = \\frac{\\tan\\delta}{\\tan\\delta_1} = \\tan\\delta\\cot\\delta_1$. Similarly $\\sin\\theta = \\tan\\delta\\cot\\delta_2$. Since $\\cos^2\\theta + \\sin^2\\theta = 1$: $\\tan^2\\delta(\\cot^2\\delta_1 + \\cot^2\\delta_2) = 1 \\implies \\cot^2\\delta = \\cot^2\\delta_1 + \\cot^2\\delta_2$."
    })
    # 27
    questions.append({
        "question": "A sample of paramagnetic salt contains $2.0 \\times 10^{24}$ atomic dipoles each of dipole moment $1.5 \\times 10^{-23}\\text{ J/T}$. The sample is placed under a magnetic field of $0.64\\text{ T}$ and cooled to a temperature of $4.2\\text{ K}$. The degree of magnetic saturation achieved is $15\\%$. What is the total dipole moment of the sample?",
        "options": ["$4.5\\text{ J/T}$", "$30.0\\text{ J/T}$", "$6.0\\text{ J/T}$", "$0.45\\text{ J/T}$"],
        "correctAnswer": 0,
        "explanation": "Total maximum possible dipole moment is $M_{\\max} = N m = (2.0 \\times 10^{24}) \\times (1.5 \\times 10^{-23}) = 30\\text{ J/T}$. At $15\\%$ saturation: $M = 0.15 \\times 30 = 4.5\\text{ J/T}$."
    })
    # 28
    questions.append({
        "question": "A magnetic needle free to rotate in a vertical plane orientation at the magnetic poles will stand:",
        "options": ["Vertical", "Horizontal", "At $45^\\circ$ to the horizontal", "In any random direction"],
        "correctAnswer": 0,
        "explanation": "At the magnetic poles, the horizontal component of Earth's magnetic field is zero ($B_H = 0$) and the total field is purely vertical. Hence the dip needle points vertically."
    })
    # 29
    questions.append({
        "question": "A compass needle which is allowed to move in a horizontal plane only at the magnetic poles will:",
        "options": ["Stay in any direction (no restoring torque)", "Point strictly North", "Point strictly South", "Rotate continuously"],
        "correctAnswer": 0,
        "explanation": "Since $B_H = 0$ at the magnetic poles, there is zero horizontal magnetic field to exert torque in the horizontal plane. The needle experiences zero restoring couple and will rest in any arbitrary direction."
    })
    # 30
    questions.append({
        "question": "An example of a diamagnetic substance is:",
        "options": ["Bismuth and Copper", "Aluminum and Sodium", "Iron and Nickel", "Oxygen gas at STP"],
        "correctAnswer": 0,
        "explanation": "Bismuth, copper, water, lead, nitrogen, and gold are classic diamagnetic substances with fully paired electron shells."
    })
    # 31
    questions.append({
        "question": "An example of a paramagnetic substance is:",
        "options": ["Aluminum and liquid Oxygen", "Bismuth and Gold", "Iron and Cobalt", "Water and Sodium Chloride"],
        "correctAnswer": 0,
        "explanation": "Aluminum, liquid oxygen, chromium, manganese, and sodium are paramagnetic substances possessing unpaired electron spins."
    })
    # 32
    questions.append({
        "question": "The SI unit of magnetization $\\vec{M}$ and magnetic intensity $\\vec{H}$ is:",
        "options": ["$\\text{A/m}$", "$\\text{Tesla}$", "$\\text{Weber}$", "$\\text{A}\\cdot\\text{m}^2$"],
        "correctAnswer": 0,
        "explanation": "Magnetization is magnetic moment per unit volume ($[M] = \\text{A}\\cdot\\text{m}^2 / \\text{m}^3 = \\text{A/m}$). Magnetic intensity $H$ also has units of $\\text{A/m}$ (or ampere-turns per meter)."
    })
    # 33
    questions.append({
        "question": "The magnetic susceptibility of a paramagnetic material at $-73^\\circ\\text{C}$ ($200\\text{ K}$) is $0.0075$. Its value at $-173^\\circ\\text{C}$ ($100\\text{ K}$) is:",
        "options": ["$0.0150$", "$0.00375$", "$0.0075$", "$0.0300$"],
        "correctAnswer": 0,
        "explanation": "By Curie's law, $\\chi_1 T_1 = \\chi_2 T_2 \\implies \\chi_2 = \\chi_1 \\frac{T_1}{T_2} = 0.0075 \\times \\frac{200}{100} = 0.0150$."
    })
    # 34
    questions.append({
        "question": "A solenoid of 1000 turns per meter has an iron core of relative permeability $\\mu_r = 500$. If a current of $0.5\\text{ A}$ passes through the solenoid, the magnetization $M$ of the core is approximately:",
        "options": ["$2.5 \\times 10^5\\text{ A/m}$", "$500\\text{ A/m}$", "$1.25 \\times 10^5\\text{ A/m}$", "$2.5 \\times 10^4\\text{ A/m}$"],
        "correctAnswer": 0,
        "explanation": "$H = n I = 1000 \\times 0.5 = 500\\text{ A/m}$. Susceptibility $\\chi = \\mu_r - 1 = 500 - 1 = 499$. Magnetization $M = \\chi H = 499 \\times 500 \\approx 2.5 \\times 10^5\\text{ A/m}$."
    })
    # 35
    questions.append({
        "question": "The primary origin of diamagnetism in atoms is:",
        "options": ["Induced orbital motion of electrons according to Lenz's law", "Alignment of permanent electron spin dipole moments", "Alignment of nuclear spins", "Spontaneous domain magnetization"],
        "correctAnswer": 0,
        "explanation": "When an external magnetic field is applied, the orbital motion of electrons is modified such that the induced magnetic moments oppose the external field in accordance with Lenz's law. This occurs in all atoms."
    })
    # 36
    questions.append({
        "question": "Paramagnetism occurs in atoms or molecules that have:",
        "options": ["Permanent magnetic dipole moments due to unpaired electrons", "Only completely filled electron shells", "Zero orbital angular momentum and zero spin", "Superconducting band gaps"],
        "correctAnswer": 0,
        "explanation": "Paramagnetism arises in materials whose atoms possess permanent net magnetic dipole moments from unpaired electron spins or orbital angular momenta."
    })
    # 37
    questions.append({
        "question": "Magnetic shielding (screening a sensitive instrument from stray external magnetic fields) is accomplished by enclosing the instrument inside a container made of:",
        "options": ["Soft iron or mu-metal (high permeability material)", "Copper (high electrical conductivity)", "Aluminum", "Lead"],
        "correctAnswer": 0,
        "explanation": "High permeability materials like soft iron or mu-metal provide an easy, low-reluctance path for magnetic field lines, channeling them through the container walls and leaving the interior cavity virtually field-free."
    })
    # 38
    questions.append({
        "question": "A bar magnet of magnetic moment $M$ is cut into two equal halves along its length (longitudinally). The magnetic moment of each half is:",
        "options": ["$M/2$", "$M$", "$2M$", "$M/4$"],
        "correctAnswer": 0,
        "explanation": "Cutting along the length halves the pole strength ($m' = m/2$) while keeping the length $2l$ unchanged: $M' = m'(2l) = (m/2)(2l) = M/2$."
    })
    # 39
    questions.append({
        "question": "If the same bar magnet of moment $M$ is cut into two equal halves transverse to its length (perpendicularly), the magnetic moment of each half is:",
        "options": ["$M/2$", "$M$", "$2M$", "$M/4$"],
        "correctAnswer": 0,
        "explanation": "Cutting perpendicular to the length keeps pole strength $m$ unchanged but halves the magnetic length ($l' = l$): $M' = m l = M/2$."
    })
    # 40
    questions.append({
        "question": "A bar magnet has pole strength $m$ and length $2l$. It is bent into a semicircle. The new magnetic dipole moment is:",
        "options": ["$\\frac{2M}{\\pi}$", "$\\frac{M}{\\pi}$", "$\\frac{\\pi M}{2}$", "$M$"],
        "correctAnswer": 0,
        "explanation": "Initial moment is $M = m(2l)$. When bent into a semicircle of radius $R$: $\\pi R = 2l \\implies R = 2l / \\pi$. The new distance between poles is the diameter $2R = \\frac{4l}{\\pi}$. New moment is $M' = m(2R) = m\\left(\\frac{4l}{\\pi}\\right) = \\frac{2(2ml)}{\\pi} = \\frac{2M}{\\pi}$."
    })
    # 41
    questions.append({
        "question": "A magnetic needle suspended horizontally in Earth's field oscillates with frequency $2\\text{ Hz}$ at a place where $B_H = 0.4\\text{ G}$. At another place where $B_H = 0.1\\text{ G}$, its frequency of oscillation will be:",
        "options": ["$1\\text{ Hz}$", "$4\\text{ Hz}$", "$0.5\\text{ Hz}$", "$2\\text{ Hz}$"],
        "correctAnswer": 0,
        "explanation": "Oscillation frequency is $f = \\frac{1}{2\\pi}\\sqrt{\\frac{M B_H}{I}} \\propto \\sqrt{B_H}$. $\\frac{f_2}{f_1} = \\sqrt{\\frac{B_{H2}}{B_{H1}}} = \\sqrt{\\frac{0.1}{0.4}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2} \\implies f_2 = \\frac{2\\text{ Hz}}{2} = 1\\text{ Hz}$."
    })
    # 42
    questions.append({
        "question": "The time period of oscillation of a magnet in a vibration magnetometer is $T$. If another identical magnet is placed symmetrically over it with like poles together, the new time period is:",
        "options": ["$T$", "$T/\\sqrt{2}$", "$T\\sqrt{2}$", "$2T$"],
        "correctAnswer": 0,
        "explanation": "Moment of inertia doubles ($I' = 2I$), and magnetic moment doubles ($M' = 2M$). Time period $T' = 2\\pi\\sqrt{\\frac{I'}{M' B_H}} = 2\\pi\\sqrt{\\frac{2I}{2M B_H}} = T$."
    })
    # 43
    questions.append({
        "question": "If the two identical magnets in the previous problem are placed with opposite poles together, the new time period of oscillation will be:",
        "options": ["Infinite (will not oscillate)", "$T$", "$2T$", "Zero"],
        "correctAnswer": 0,
        "explanation": "Net magnetic moment becomes $M' = M - M = 0$. Since there is no restoring torque, the angular frequency $\\omega = 0$ and the time period becomes $T' = \\infty$."
    })
    # 44
    questions.append({
        "question": "Gauss's law for magnetism states that $\\oint \\vec{B} \\cdot d\\vec{A} = 0$. This fundamental law implies that:",
        "options": ["Isolated magnetic monopoles do not exist", "Magnetic field lines have beginnings and ends", "Magnetic fields cannot do work", "Magnetic force is always zero on neutral atoms"],
        "correctAnswer": 0,
        "explanation": "The vanishing of total magnetic flux through any closed surface means magnetic field lines form continuous closed loops with no sources or sinks, proving that isolated magnetic monopoles do not exist in nature."
    })
    # 45
    questions.append({
        "question": "Electromagnets are made of soft iron because soft iron has:",
        "options": ["High permeability and low retentivity", "High retentivity and high coercivity", "Low permeability and high coercivity", "Zero susceptibility"],
        "correctAnswer": 0,
        "explanation": "An electromagnet must produce a strong magnetic field when current is on (requiring high permeability) and lose virtually all magnetism when current is switched off (requiring low retentivity and low coercivity)."
    })

    return questions

def main():
    props_raw = create_magnetic_properties_questions()
    print(f"Magnetic properties questions: {len(props_raw)}")

    props_balanced = format_and_balance(props_raw, "Magnetic properties (dia, para, ferromagnetism)")
    batch4 = props_balanced

    out_path = "/Users/laxmikumari/Desktop/web/project going on /testseries/scripts/magnetism/magnetism_batch4.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(batch4, f, indent=2)

    print(f"Generated {len(batch4)} MCQs for batch 4 saved to {out_path}")

if __name__ == "__main__":
    main()
