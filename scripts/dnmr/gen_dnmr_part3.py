# -*- coding: utf-8 -*-
"""
Generate Batch 3 of Dual Nature of Matter and Radiation:
- Einstein's photoelectric equation and work function (45 MCQs)
Total = 45 MCQs
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
        "chapter": "Dual Nature of Matter and Radiation",
        "subtopic": subtopic,
        "subTopic": subtopic,
        "subject": "Physics",
        "examType": "JEE Mains"
    })

# ==============================================================================
# SUBTOPIC 5: Einstein's photoelectric equation and work function (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Einstein's photoelectric equation and work function",
    "In Einstein's photoelectric equation $K_{\\max} = h\\nu - \\phi_0$, the term $\\phi_0$ represents:",
    [
        "The minimum energy required to liberate an electron from the metal surface",
        "The maximum kinetic energy of the emitted photoelectrons",
        "The energy of the incident photon",
        "The energy absorbed per second per unit area"
    ],
    0,
    "The work function $\\phi_0$ is the minimum energy required by a conduction electron to overcome the surface barrier and escape from the metal surface.",
    "Easy"
)

# Q2
add_q(
    "Einstein's photoelectric equation and work function",
    "When a metal surface is illuminated by light of frequency $\\nu_1$, the stopping potential is $V_1$. When the frequency is changed to $\\nu_2$, the stopping potential is $V_2$. The Planck constant is given by:",
    [
        "$\\frac{e(V_1 - V_2)}{\\nu_1 - \\nu_2}$",
        "$\\frac{\\nu_1 - \\nu_2}{e(V_1 - V_2)}$",
        "$\\frac{e(V_1 + V_2)}{\\nu_1 + \\nu_2}$",
        "$\\frac{e(V_1 - V_2)}{\\nu_1 + \\nu_2}$"
    ],
    0,
    "Einstein's equations for the two frequencies are:\n$$eV_1 = h\\nu_1 - \\phi_0$$\n$$eV_2 = h\\nu_2 - \\phi_0$$\nSubtracting the two equations:\n$$e(V_1 - V_2) = h(\\nu_1 - \\nu_2) \\implies h = \\frac{e(V_1 - V_2)}{\\nu_1 - \\nu_2}$$",
    "Easy"
)

# Q3
add_q(
    "Einstein's photoelectric equation and work function",
    "From the previous question, the work function $\\phi_0$ of the metal can be expressed as:",
    [
        "$\\frac{e(V_1\\nu_2 - V_2\\nu_1)}{\\nu_1 - \\nu_2}$",
        "$\\frac{e(V_1\\nu_1 - V_2\\nu_2)}{\\nu_1 - \\nu_2}$",
        "$\\frac{e(V_1 - V_2)}{\\nu_1 - \\nu_2}$",
        "$\\frac{e(V_1 + V_2)}{2}$"
    ],
    0,
    "Substitute $h = \\frac{e(V_1 - V_2)}{\\nu_1 - \\nu_2}$ into $eV_1 = h\\nu_1 - \\phi_0$:\n$$\\phi_0 = h\\nu_1 - eV_1 = \\frac{e(V_1 - V_2)\\nu_1}{\\nu_1 - \\nu_2} - eV_1 = \\frac{e[V_1\\nu_1 - V_2\\nu_1 - V_1\\nu_1 + V_1\\nu_2]}{\\nu_1 - \\nu_2} = \\frac{e(V_1\\nu_2 - V_2\\nu_1)}{\\nu_1 - \\nu_2}$$",
    "Medium"
)

# Q4
add_q(
    "Einstein's photoelectric equation and work function",
    "A graph of maximum kinetic energy $K_{\\max}$ versus frequency $\\nu$ is plotted for two different metals A and B. Which feature is identical for both graphs?",
    [
        "The slope of the straight line",
        "The intercept on the frequency axis",
        "The intercept on the energy axis",
        "The threshold wavelength"
    ],
    0,
    "Einstein's equation is $K_{\\max} = h\\nu - \\phi_0$. When plotted against $\\nu$, the slope is Planck's constant $h$, which is a universal constant. Thus, the slope is identical for all metals, resulting in parallel lines.",
    "Easy"
)

# Q5
add_q(
    "Einstein's photoelectric equation and work function",
    "A plot of stopping potential $V_0$ versus $\\frac{1}{\\lambda}$ (where $\\lambda$ is the incident wavelength) yields a straight line. The slope of this line is:",
    [
        "$\\frac{hc}{e}$",
        "$hc$",
        "$\\frac{h}{e}$",
        "$\\frac{e}{hc}$"
    ],
    0,
    "The photoelectric equation can be written as:\n$$eV_0 = \\frac{hc}{\\lambda} - \\phi_0 \\implies V_0 = \\left(\\frac{hc}{e}\\right)\\frac{1}{\\lambda} - \\frac{\\phi_0}{e}$$\nPlotting $V_0$ vs $\\frac{1}{\\lambda}$ gives a straight line with slope $m = \\frac{hc}{e}$.",
    "Easy"
)

# Q6
add_q(
    "Einstein's photoelectric equation and work function",
    "In the graph of stopping potential $V_0$ versus $\\frac{1}{\\lambda}$, the intercept on the horizontal axis ($1/\\lambda$) represents:",
    [
        "$\\frac{1}{\\lambda_0}$ (where $\\lambda_0$ is the threshold wavelength)",
        "$\\lambda_0$",
        "$\\frac{\\phi_0}{e}$",
        "$\\frac{hc}{\\phi_0}$"
    ],
    0,
    "Setting $V_0 = 0$ in $V_0 = \\left(\\frac{hc}{e}\\right)\\frac{1}{\\lambda} - \\frac{\\phi_0}{e}$ gives:\n$$\\left(\\frac{hc}{e}\\right)\\frac{1}{\\lambda} = \\frac{\\phi_0}{e} \\implies \\frac{1}{\\lambda} = \\frac{\\phi_0}{hc} = \\frac{1}{\\lambda_0}$$\nThus, the intercept on the $1/\\lambda$ axis is the reciprocal of the threshold wavelength $\\frac{1}{\\lambda_0}$.",
    "Easy"
)

# Q7
add_q(
    "Einstein's photoelectric equation and work function",
    "When light of wavelength $\\lambda$ falls on a metal surface, the stopping potential is $V_0$. When light of wavelength $2\\lambda$ falls on the same surface, the stopping potential is $V_0 / 4$. The threshold wavelength of the metal is:",
    [
        "$\\frac{7}{3}\\lambda$",
        "$3\\lambda$",
        "$2\\lambda$",
        "$\\frac{5}{2}\\lambda$"
    ],
    0,
    "We have:\n$$eV_0 = \\frac{hc}{\\lambda} - \\phi_0 \\quad \\text{--- (1)}$$\n$$e\\left(\\frac{V_0}{4}\\right) = \\frac{hc}{2\\lambda} - \\phi_0 \\implies eV_0 = \\frac{2hc}{\\lambda} - 4\\phi_0 \\quad \\text{--- (2)}$$\nEquating (1) and (2):\n$$\\frac{hc}{\\lambda} - \\phi_0 = \\frac{2hc}{\\lambda} - 4\\phi_0 \\implies 3\\phi_0 = \\frac{hc}{\\lambda} \\implies \\phi_0 = \\frac{hc}{3\\lambda}$$\nWait: $\\frac{hc}{\\lambda_0} = \\frac{hc}{3\\lambda} \\implies \\lambda_0 = 3\\lambda$.\nWait, let's recheck: if $\\phi_0 = \\frac{hc}{3\\lambda}$, then $\\lambda_0 = 3\\lambda$.\nLet's test: $eV_0 = \\frac{hc}{\\lambda} - \\frac{hc}{3\\lambda} = \\frac{2hc}{3\\lambda}$.\nFor $2\\lambda$: $eV_0' = \\frac{hc}{2\\lambda} - \\frac{hc}{3\\lambda} = \\frac{hc}{6\\lambda} = \\frac{1}{4}\\left(\\frac{2hc}{3\\lambda}\\right) = \\frac{eV_0}{4}$. Perfect!\nTherefore, $\\lambda_0 = 3\\lambda$.",
    "Medium"
)

# Q8
add_q(
    "Einstein's photoelectric equation and work function",
    "When light of wavelength $\\lambda$ illuminates a photosensitive surface, the maximum speed of emitted electrons is $v$. If the wavelength is reduced to $\\lambda / 3$, the new maximum speed of photoelectrons will be:",
    [
        "Greater than $\\sqrt{3}v$",
        "Equal to $\\sqrt{3}v$",
        "Equal to $3v$",
        "Less than $\\sqrt{3}v$"
    ],
    0,
    "We have $K_1 = \\frac{1}{2}mv^2 = \\frac{hc}{\\lambda} - \\phi_0$.\nWhen wavelength is $\\lambda/3$, the photon energy triples:\n$$K_2 = \\frac{1}{2}m(v')^2 = \\frac{3hc}{\\lambda} - \\phi_0 = 3\\left(\\frac{hc}{\\lambda} - \\phi_0\\right) + 2\\phi_0 = 3K_1 + 2\\phi_0$$\nSince $\\phi_0 > 0$, $K_2 > 3K_1 \\implies (v')^2 > 3v^2 \\implies v' > \\sqrt{3}v$.",
    "Medium"
)

# Q9
add_q(
    "Einstein's photoelectric equation and work function",
    "The work function of a metal is $3.3\\text{ eV}$. What is the maximum wavelength of light that can eject photoelectrons from this metal? (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$376\\text{ nm}$",
        "$420\\text{ nm}$",
        "$310\\text{ nm}$",
        "$550\\text{ nm}$"
    ],
    0,
    "The maximum wavelength for photoelectric emission is the threshold wavelength:\n$$\\lambda_0 = \\frac{hc}{\\phi_0} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{3.3\\text{ eV}} \\approx 375.8\\text{ nm} \\approx 376\\text{ nm}$$",
    "Easy"
)

# Q10
add_q(
    "Einstein's photoelectric equation and work function",
    "Light of wavelength $2000\\text{ \\AA}$ falls on an aluminium surface of work function $4.2\\text{ eV}$. What is the kinetic energy of the fastest emitted photoelectrons? (Take $hc = 12400\\text{ eV}\\cdot\\text{\\AA}$)",
    [
        "$2.0\\text{ eV}$",
        "$6.2\\text{ eV}$",
        "$4.2\\text{ eV}$",
        "$1.0\\text{ eV}$"
    ],
    0,
    "Energy of the incident photon:\n$$E = \\frac{hc}{\\lambda} = \\frac{12400\\text{ eV}\\cdot\\text{\\AA}}{2000\\text{ \\AA}} = 6.2\\text{ eV}$$\nMaximum kinetic energy:\n$$K_{\\max} = E - \\phi_0 = 6.2\\text{ eV} - 4.2\\text{ eV} = 2.0\\text{ eV}$$",
    "Easy"
)

# Q11
add_q(
    "Einstein's photoelectric equation and work function",
    "Why are the kinetic energies of photoelectrons emitted from a metallic surface not all identical even when monochromatic light is used?",
    [
        "Electrons emitted from deeper layers lose varying amounts of energy through inelastic collisions before reaching the surface",
        "Photons have a continuous energy distribution",
        "Planck's constant varies with depth",
        "The work function fluctuates randomly"
    ],
    0,
    "Einstein's equation gives the maximum kinetic energy $K_{\\max}$, which belongs to electrons ejected from the outermost surface layer without energy loss. Electrons deeper inside the metal undergo inelastic collisions with other electrons and lattice ions on their way out, losing varying amounts of energy and emerging with kinetic energies ranging from 0 up to $K_{\\max}$.",
    "Easy"
)

# Q12
add_q(
    "Einstein's photoelectric equation and work function",
    "A photosensitive surface is irradiated with light of frequency $\\nu$. If $v_{\\max}$ is the maximum speed of emitted photoelectrons, which of the following graphs of $v_{\\max}^2$ versus $\\nu$ is correct?",
    [
        "A straight line with positive slope and a positive intercept on the $\\nu$-axis",
        "A straight line passing through the origin",
        "A parabola opening downwards",
        "A hyperbola asymptotic to both axes"
    ],
    0,
    "From $\\frac{1}{2}m v_{\\max}^2 = h\\nu - \\phi_0$, we get:\n$$v_{\\max}^2 = \\left(\\frac{2h}{m}\\right)\\nu - \\frac{2\\phi_0}{m}$$\nThis is a straight line $y = mx + c$ with positive slope $\\frac{2h}{m}$ and positive intercept on the frequency axis $\\nu_0 = \\frac{\\phi_0}{h}$.",
    "Medium"
)

# Q13
add_q(
    "Einstein's photoelectric equation and work function",
    "The stopping potential for photoelectrons from a metal surface is $V_1$ when irradiated with light of wavelength $\\lambda$, and $V_2$ when irradiated with wavelength $\\lambda/2$. Then:",
    [
        "$V_2 > 2V_1$",
        "$V_2 = 2V_1$",
        "$V_2 < 2V_1$",
        "$V_2 = V_1 / 2$"
    ],
    0,
    "We have:\n$$eV_1 = \\frac{hc}{\\lambda} - \\phi_0$$\n$$eV_2 = \\frac{2hc}{\\lambda} - \\phi_0 = 2\\left(\\frac{hc}{\\lambda} - \\phi_0\\right) + \\phi_0 = 2eV_1 + \\phi_0$$\nSince the work function $\\phi_0 > 0$, we have $eV_2 > 2eV_1 \\implies V_2 > 2V_1$.",
    "Medium"
)

# Q14
add_q(
    "Einstein's photoelectric equation and work function",
    "A metal with work function $\\phi_1$ has threshold wavelength $\\lambda_1$, and another metal with work function $\\phi_2$ has threshold wavelength $\\lambda_2$. If $\\phi_1 / \\phi_2 = 2$, then $\\lambda_1 / \\lambda_2$ is:",
    [
        "$1 / 2$",
        "$2$",
        "$1 / 4$",
        "$4$"
    ],
    0,
    "The threshold wavelength is inversely proportional to work function:\n$$\\lambda_0 = \\frac{hc}{\\phi_0} \\implies \\frac{\\lambda_1}{\\lambda_2} = \\frac{\\phi_2}{\\phi_1} = \\frac{1}{2}$$",
    "Easy"
)

# Q15
add_q(
    "Einstein's photoelectric equation and work function",
    "The work function of platinum is $5.6\\text{ eV}$, and that of cesium is $2.14\\text{ eV}$. Which of the two metals is more suitable for a photoelectric cell operating with visible light ($400\\text{ nm} - 700\\text{ nm}$)?",
    [
        "Cesium, because its threshold wavelength lies in the visible region",
        "Platinum, because it has higher work function and produces faster electrons",
        "Both are equally suitable",
        "Neither metal can emit photoelectrons with visible light"
    ],
    0,
    "For visible light, maximum photon energy is $\\frac{1240}{400} = 3.1\\text{ eV}$. Platinum requires $5.6\\text{ eV}$, which lies far in the ultraviolet region, so visible light cannot produce photoemission from platinum. Cesium requires only $2.14\\text{ eV}$ (threshold $\\lambda_0 \\approx 580\\text{ nm}$), so it readily emits photoelectrons under visible light.",
    "Easy"
)

# Q16
add_q(
    "Einstein's photoelectric equation and work function",
    "Photons of energy $5\\text{ eV}$ are incident on a cathode. The maximum kinetic energy of emitted photoelectrons is $2\\text{ eV}$. When photons of energy $6\\text{ eV}$ are incident on the same cathode, no photoelectrons reach the anode if the stopping potential is:",
    [
        "$-3\\text{ V}$",
        "$-1\\text{ V}$",
        "$-2\\text{ V}$",
        "$-4\\text{ V}$"
    ],
    0,
    "From the first condition:\n$$K_{\\max 1} = E_1 - \\phi_0 \\implies 2 = 5 - \\phi_0 \\implies \\phi_0 = 3\\text{ eV}$$\nWhen $E_2 = 6\\text{ eV}$:\n$$K_{\\max 2} = E_2 - \\phi_0 = 6 - 3 = 3\\text{ eV}$$\nTo stop all photoelectrons, a retarding potential of $3\\text{ V}$ (anode at $-3\\text{ V}$ relative to cathode) must be applied.",
    "Easy"
)

# Q17
add_q(
    "Einstein's photoelectric equation and work function",
    "In a photoelectric experiment, monochromatic light of wavelength $\\lambda$ falls on a metal having work function $\\phi_0$. If a retarding potential $V$ is applied such that $V > \\frac{hc}{e\\lambda} - \\frac{\\phi_0}{e}$, the photocurrent will be:",
    [
        "Zero",
        "Maximum saturation current",
        "Half of saturation current",
        "Negative"
    ],
    0,
    "The stopping potential is $V_0 = \\frac{hc}{e\\lambda} - \\frac{\\phi_0}{e}$. If the retarding potential exceeds $V_0$, even the fastest photoelectrons are turned back before reaching the collector plate, reducing the photocurrent to exactly zero.",
    "Easy"
)

# Q18
add_q(
    "Einstein's photoelectric equation and work function",
    "Light of wavelength $350\\text{ nm}$ falls on a potassium surface. If the stopping potential is $0.95\\text{ V}$, the work function of potassium is: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$2.59\\text{ eV}$",
        "$3.54\\text{ eV}$",
        "$1.64\\text{ eV}$",
        "$2.20\\text{ eV}$"
    ],
    0,
    "Photon energy is:\n$$E = \\frac{1240}{350} \\approx 3.543\\text{ eV}$$\nWork function:\n$$\\phi_0 = E - eV_0 = 3.543\\text{ eV} - 0.95\\text{ eV} = 2.593\\text{ eV} \\approx 2.59\\text{ eV}$$",
    "Medium"
)

# Q19
add_q(
    "Einstein's photoelectric equation and work function",
    "The threshold frequency of a metal corresponds to a wavelength of $5000\\text{ \\AA}$. Its work function is: (Take $h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3 \\times 10^8\\text{ m/s}$, $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$)",
    [
        "$2.48\\text{ eV}$",
        "$3.10\\text{ eV}$",
        "$1.85\\text{ eV}$",
        "$4.12\\text{ eV}$"
    ],
    0,
    "$$\\phi_0 = \\frac{hc}{\\lambda_0} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{5000 \\times 10^{-10} \\times 1.6 \\times 10^{-19}}\\text{ eV} = \\frac{19.89 \\times 10^{-26}}{8.0 \\times 10^{-26}} \\approx 2.48\\text{ eV}$$",
    "Easy"
)

# Q20
add_q(
    "Einstein's photoelectric equation and work function",
    "Two metals X and Y have work functions $\\phi_X = 2.0\\text{ eV}$ and $\\phi_Y = 4.0\\text{ eV}$. They are illuminated with monochromatic light of energy $E = 5.0\\text{ eV}$. The ratio of the maximum speeds of the emitted photoelectrons $v_X / v_Y$ is:",
    [
        "$\\sqrt{3}$",
        "$3$",
        "$\\sqrt{3}/2$",
        "$1/\\sqrt{3}$"
    ],
    0,
    "For metal X: $K_X = E - \\phi_X = 5.0 - 2.0 = 3.0\\text{ eV}$.\nFor metal Y: $K_Y = E - \\phi_Y = 5.0 - 4.0 = 1.0\\text{ eV}$.\nSince $K = \\frac{1}{2}mv^2$:\n$$\\frac{v_X}{v_Y} = \\sqrt{\\frac{K_X}{K_Y}} = \\sqrt{\\frac{3.0}{1.0}} = \\sqrt{3}$$",
    "Easy"
)

# Q21
add_q(
    "Einstein's photoelectric equation and work function",
    "A source of light is placed at a distance $d$ from a photosensitive plate and the stopping potential is $V_0$. If the distance is reduced to $d/3$, the stopping potential will be:",
    [
        "$V_0$",
        "$3V_0$",
        "$9V_0$",
        "$V_0 / 3$"
    ],
    0,
    "Changing the distance alters the intensity (photon flux per unit area) at the plate, but the frequency of each photon and the work function of the metal are strictly unchanged. Hence, stopping potential remains $V_0$.",
    "Easy"
)

# Q22
add_q(
    "Einstein's photoelectric equation and work function",
    "If the frequency of incident light is increased by $20\\%$, the maximum kinetic energy of the photoelectrons increases from $0.5\\text{ eV}$ to $0.8\\text{ eV}$. The work function of the metal is:",
    [
        "$1.0\\text{ eV}$",
        "$1.5\\text{ eV}$",
        "$0.5\\text{ eV}$",
        "$2.0\\text{ eV}$"
    ],
    0,
    "Initial equation:\n$$h\\nu - \\phi_0 = 0.5\\text{ eV} \\implies h\\nu = \\phi_0 + 0.5 \\quad \\text{--- (1)}$$\nWhen frequency increases by $20\\%$, new frequency is $1.2\\nu$:\n$$1.2 h\\nu - \\phi_0 = 0.8\\text{ eV} \\quad \\text{--- (2)}$$\nSubstitute (1) into (2):\n$$1.2(\\phi_0 + 0.5) - \\phi_0 = 0.8$$\n$$1.2\\phi_0 + 0.6 - \\phi_0 = 0.8$$\n$$0.2\\phi_0 = 0.2 \\implies \\phi_0 = 1.0\\text{ eV}$$",
    "Medium"
)

# Q23
add_q(
    "Einstein's photoelectric equation and work function",
    "When a photosensitive surface is illuminated with light of wavelength $\\lambda$, the stopping potential is $V$. When illuminated with light of wavelength $3\\lambda$, the stopping potential is $V/6$. The threshold wavelength of the surface is:",
    [
        "$\\frac{7}{2}\\lambda$",
        "$5\\lambda$",
        "$4\\lambda$",
        "$\\frac{9}{2}\\lambda$"
    ],
    0,
    "We have:\n$$eV = \\frac{hc}{\\lambda} - \\phi_0 \\quad \\text{--- (1)}$$\n$$e\\left(\\frac{V}{6}\\right) = \\frac{hc}{3\\lambda} - \\phi_0 \\implies eV = \\frac{2hc}{\\lambda} - 6\\phi_0 \\quad \\text{--- (2)}$$\nEquating (1) and (2):\n$$\\frac{hc}{\\lambda} - \\phi_0 = \\frac{2hc}{\\lambda} - 6\\phi_0 \\implies 5\\phi_0 = \\frac{hc}{\\lambda} \\implies \\phi_0 = \\frac{hc}{5\\lambda}$$\nWait: if $\\phi_0 = \\frac{hc}{5\\lambda}$, then $\\lambda_0 = 5\\lambda$!\nLet's check: $eV = \\frac{hc}{\\lambda} - \\frac{hc}{5\\lambda} = \\frac{4hc}{5\\lambda}$.\nFor $3\\lambda$: $eV' = \\frac{hc}{3\\lambda} - \\frac{hc}{5\\lambda} = \\frac{2hc}{15\\lambda}$.\nRatio: $\\frac{eV'}{eV} = \\frac{2/15}{4/5} = \\frac{2}{15} \\times \\frac{5}{4} = \\frac{1}{6}$. Perfect!\nThus $\\lambda_0 = 5\\lambda$. Wait, let's make sure the options include $5\\lambda$ as correct!",
    "Medium"
)
# Fix Q23: correct option is 5\lambda!
questions[-1]["options"] = ["$5\\lambda$", "$\\frac{7}{2}\\lambda$", "$4\\lambda$", "$\\frac{9}{2}\\lambda$"]
questions[-1]["correctAnswer"] = 0
questions[-1]["explanation"] = "We have:\n$$eV = \\frac{hc}{\\lambda} - \\phi_0 \\quad \\text{--- (1)}$$\n$$\\frac{eV}{6} = \\frac{hc}{3\\lambda} - \\phi_0 \\implies eV = \\frac{2hc}{\\lambda} - 6\\phi_0 \\quad \\text{--- (2)}$$\nEquating (1) and (2):\n$$\\frac{hc}{\\lambda} - \\phi_0 = \\frac{2hc}{\\lambda} - 6\\phi_0 \\implies 5\\phi_0 = \\frac{hc}{\\lambda} \\implies \\phi_0 = \\frac{hc}{5\\lambda}$$\nSince $\\phi_0 = \\frac{hc}{\\lambda_0}$, we get $\\lambda_0 = 5\\lambda$."

# Q24
add_q(
    "Einstein's photoelectric equation and work function",
    "The maximum kinetic energy of photoelectrons emitted from a surface when illuminated by light of frequency $\\nu$ is $K$. When the frequency is changed to $\\nu'$, the maximum kinetic energy becomes $2K$. Then:",
    [
        "$\\nu' = 2\\nu - \\frac{\\phi_0}{h}$",
        "$\\nu' = 2\\nu$",
        "$\\nu' = 2\\nu + \\frac{\\phi_0}{h}$",
        "$\\nu' = \\nu + \\frac{2\\phi_0}{h}$"
    ],
    0,
    "From Einstein's photoelectric equation:\n$$K = h\\nu - \\phi_0$$\n$$2K = h\\nu' - \\phi_0$$\nSubstitute $K$ into the second equation:\n$$2(h\\nu - \\phi_0) = h\\nu' - \\phi_0$$\n$$2h\\nu - 2\\phi_0 = h\\nu' - \\phi_0 \\implies h\\nu' = 2h\\nu - \\phi_0 \\implies \\nu' = 2\\nu - \\frac{\\phi_0}{h}$$",
    "Medium"
)

# Q25
add_q(
    "Einstein's photoelectric equation and work function",
    "A beam of light consists of two frequencies $\\nu_1 = 2\\nu_0$ and $\\nu_2 = 3\\nu_0$, where $\\nu_0$ is the threshold frequency of the metal. What is the maximum kinetic energy of the emitted photoelectrons?",
    [
        "$2h\\nu_0$",
        "$h\\nu_0$",
        "$3h\\nu_0$",
        "$\\frac{5}{2}h\\nu_0$"
    ],
    0,
    "The maximum kinetic energy is determined by the highest frequency component of the light beam:\n$$K_{\\max} = h\\nu_2 - \\phi_0 = h(3\\nu_0) - h\\nu_0 = 2h\\nu_0$$",
    "Easy"
)

# Q26
add_q(
    "Einstein's photoelectric equation and work function",
    "In a photoelectric effect experiment, the slope of the graph between the stopping potential $V_0$ and the frequency of incident radiation $\\nu$ is:",
    [
        "Independent of the metal used",
        "Directly proportional to the work function of the metal",
        "Inversely proportional to the work function of the metal",
        "Dependent on the intensity of incident light"
    ],
    0,
    "The slope of the $V_0$ vs $\\nu$ line is $m = \\frac{h}{e}$. Since both $h$ and $e$ are fundamental universal constants, the slope is strictly independent of the metal and identical for all photosensitive materials.",
    "Easy"
)

# Q27
add_q(
    "Einstein's photoelectric equation and work function",
    "The work function of a substance is $4.0\\text{ eV}$. The longest wavelength of light that can cause photoelectron emission from this substance is approximately: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$310\\text{ nm}$",
        "$400\\text{ nm}$",
        "$540\\text{ nm}$",
        "$220\\text{ nm}$"
    ],
    0,
    "$$\\lambda_0 = \\frac{hc}{\\phi_0} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{4.0\\text{ eV}} = 310\\text{ nm}$$",
    "Easy"
)

# Q28
add_q(
    "Einstein's photoelectric equation and work function",
    "When a certain metal surface is illuminated with light of frequency $\\nu$, the stopping potential is $V_0$. When the frequency is tripled to $3\\nu$, the stopping potential becomes:",
    [
        "Greater than $3V_0$",
        "Equal to $3V_0$",
        "Less than $3V_0$",
        "Equal to $9V_0$"
    ],
    0,
    "We have $eV_0 = h\\nu - \\phi_0$.\nFor frequency $3\\nu$:\n$$eV_0' = 3h\\nu - \\phi_0 = 3(h\\nu - \\phi_0) + 2\\phi_0 = 3eV_0 + 2\\phi_0$$\n$$V_0' = 3V_0 + \\frac{2\\phi_0}{e} > 3V_0$$\nTherefore, the new stopping potential is greater than $3V_0$.",
    "Medium"
)

# Q29
add_q(
    "Einstein's photoelectric equation and work function",
    "The work functions of silver and potassium are $4.7\\text{ eV}$ and $2.3\\text{ eV}$ respectively. The ratio of their threshold frequencies $\\nu_{0,\\text{Ag}} / \\nu_{0,\\text{K}}$ is approximately:",
    [
        "$2.04$",
        "$0.49$",
        "$1.00$",
        "$4.16$"
    ],
    0,
    "Since threshold frequency is directly proportional to work function ($\\nu_0 = \\phi_0 / h$):\n$$\\frac{\\nu_{0,\\text{Ag}}}{\\nu_{0,\\text{K}}} = \\frac{\\phi_{\\text{Ag}}}{\\phi_{\\text{K}}} = \\frac{4.7\\text{ eV}}{2.3\\text{ eV}} \\approx 2.04$$",
    "Easy"
)

# Q30
add_q(
    "Einstein's photoelectric equation and work function",
    "Monochromatic light of frequency $8.0 \\times 10^{14}\\text{ Hz}$ falls on a surface with work function $2.5\\text{ eV}$. What is the maximum speed of the emitted electrons? (Take $h = 4.14 \\times 10^{-15}\\text{ eV}\\cdot\\text{s}$, $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$)",
    [
        "$5.33 \\times 10^5\\text{ m/s}$",
        "$3.82 \\times 10^5\\text{ m/s}$",
        "$7.12 \\times 10^5\\text{ m/s}$",
        "$2.18 \\times 10^6\\text{ m/s}$"
    ],
    0,
    "Photon energy is:\n$$E = h\\nu = 4.14 \\times 10^{-15} \\times 8.0 \\times 10^{14} = 3.312\\text{ eV}$$\nMaximum kinetic energy:\n$$K_{\\max} = E - \\phi_0 = 3.312 - 2.500 = 0.812\\text{ eV} = 0.812 \\times 1.6 \\times 10^{-19}\\text{ J} \\approx 1.30 \\times 10^{-19}\\text{ J}$$\nMaximum speed:\n$$v_{\\max} = \\sqrt{\\frac{2 K_{\\max}}{m_e}} = \\sqrt{\\frac{2 \\times 1.30 \\times 10^{-19}}{9.1 \\times 10^{-31}}} = \\sqrt{2.857 \\times 10^{11}} \\approx 5.33 \\times 10^5\\text{ m/s}$$",
    "Medium"
)

# Q31
add_q(
    "Einstein's photoelectric equation and work function",
    "A photosensitive metal plate is illuminated with light of wavelength $\\lambda$. The stopping potential is $V_0$. If the stopping potential becomes $3V_0$ when the wavelength is changed to $\\lambda'$, then $\\lambda'$ is:",
    [
        "$\\frac{hc\\lambda}{3hc - 2\\phi_0\\lambda}$",
        "$\\frac{3hc\\lambda}{hc + 2\\phi_0\\lambda}$",
        "$\\frac{\\lambda}{3}$",
        "$\\frac{hc\\lambda}{hc + 2\\phi_0\\lambda}$"
    ],
    0,
    "We have:\n$$eV_0 = \\frac{hc}{\\lambda} - \\phi_0$$\n$$3eV_0 = \\frac{hc}{\\lambda'} - \\phi_0$$\nMultiply the first equation by 3:\n$$3eV_0 = \\frac{3hc}{\\lambda} - 3\\phi_0$$\nEquating:\n$$\\frac{hc}{\\lambda'} - \\phi_0 = \\frac{3hc}{\\lambda} - 3\\phi_0 \\implies \\frac{hc}{\\lambda'} = \\frac{3hc}{\\lambda} - 2\\phi_0 = \\frac{3hc - 2\\phi_0\\lambda}{\\lambda}$$\n$$\\lambda' = \\frac{hc\\lambda}{3hc - 2\\phi_0\\lambda}$$",
    "Hard"
)

# Q32
add_q(
    "Einstein's photoelectric equation and work function",
    "The threshold wavelength of a metal is $\\lambda_0$. When light of wavelength $\\lambda$ ($\\\\lambda < \\lambda_0$) is incident on it, the de Broglie wavelength of the emitted photoelectron with maximum kinetic energy is $\\lambda_d$. Then $\\lambda_d$ is proportional to:",
    [
        "$\\left(\\frac{\\lambda\\lambda_0}{\\lambda_0 - \\lambda}\\right)^{1/2}$",
        "$\\left(\\frac{\\lambda_0 - \\lambda}{\\lambda\\lambda_0}\\right)^{1/2}$",
        "$\\frac{\\lambda\\lambda_0}{\\lambda_0 - \\lambda}$",
        "$\\left(\\frac{\\lambda_0}{\\lambda}\\right)^{1/2}$"
    ],
    0,
    "Maximum kinetic energy is:\n$$K_{\\max} = hc\\left(\\frac{1}{\\lambda} - \\frac{1}{\\lambda_0}\\right) = hc\\left(\\frac{\\lambda_0 - \\lambda}{\\lambda\\lambda_0}\\right)$$\nde Broglie wavelength of the fastest electron:\n$$\\lambda_d = \\frac{h}{\\sqrt{2mK_{\\max}}} = \\frac{h}{\\sqrt{2mhc\\left(\\frac{\\lambda_0 - \\lambda}{\\lambda\\lambda_0}\\right)}} \\propto \\left(\\frac{\\lambda\\lambda_0}{\\lambda_0 - \\lambda}\\right)^{1/2}$$",
    "Hard"
)

# Q33
add_q(
    "Einstein's photoelectric equation and work function",
    "Which of the following metals has the lowest work function?",
    [
        "Cesium (Cs)",
        "Platinum (Pt)",
        "Copper (Cu)",
        "Aluminium (Al)"
    ],
    0,
    "Among all stable elements, alkali metals have the lowest work functions, and Cesium has the lowest of all at approximately $2.14\\text{ eV}$, making it extremely sensitive to visible light.",
    "Easy"
)

# Q34
add_q(
    "Einstein's photoelectric equation and work function",
    "A metal surface is illuminated by light of two wavelengths $\\lambda_1 = 250\\text{ nm}$ and $\\lambda_2 = 500\\text{ nm}$. If the work function is $2.4\\text{ eV}$, what are the maximum kinetic energies of the emitted photoelectrons for each wavelength? (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$2.56\\text{ eV}$ for $\\lambda_1$, and $0.08\\text{ eV}$ for $\\lambda_2$",
        "$4.96\\text{ eV}$ for $\\lambda_1$, and $2.48\\text{ eV}$ for $\\lambda_2$",
        "$2.56\\text{ eV}$ for $\\lambda_1$, and no emission for $\\lambda_2$",
        "$1.28\\text{ eV}$ for $\\lambda_1$, and $0.08\\text{ eV}$ for $\\lambda_2$"
    ],
    0,
    "For $\\lambda_1 = 250\\text{ nm}$:\n$$E_1 = \\frac{1240}{250} = 4.96\\text{ eV} \\implies K_{\\max 1} = 4.96 - 2.40 = 2.56\\text{ eV}$$\nFor $\\lambda_2 = 500\\text{ nm}$:\n$$E_2 = \\frac{1240}{500} = 2.48\\text{ eV} \\implies K_{\\max 2} = 2.48 - 2.40 = 0.08\\text{ eV}$$\nBoth wavelengths cause photoemission with $K_{\\max}$ of $2.56\\text{ eV}$ and $0.08\\text{ eV}$ respectively.",
    "Medium"
)

# Q35
add_q(
    "Einstein's photoelectric equation and work function",
    "If the work function of a metal is $\\phi_0$ and the incident frequency is $\\nu > \\phi_0/h$, the ratio of the maximum kinetic energy of the photoelectrons to the energy of the incident photon is:",
    [
        "$1 - \\frac{\\phi_0}{h\\nu}$",
        "$\\frac{\\phi_0}{h\\nu}$",
        "$1 + \\frac{\\phi_0}{h\\nu}$",
        "$\\frac{h\\nu}{\\phi_0}$"
    ],
    0,
    "Using $K_{\\max} = h\\nu - \\phi_0$:\n$$\\frac{K_{\\max}}{E_{\\text{photon}}} = \\frac{h\\nu - \\phi_0}{h\\nu} = 1 - \\frac{\\phi_0}{h\\nu}$$",
    "Easy"
)

# Q36
add_q(
    "Einstein's photoelectric equation and work function",
    "When a metal surface is illuminated with light of frequency $\\nu_0$ (its threshold frequency), the emitted electrons have zero kinetic energy. If the intensity of this light is multiplied by 100, what is the maximum kinetic energy of the emitted electrons?",
    [
        "Still zero",
        "100 times larger",
        "10 times larger",
        "50 times larger"
    ],
    0,
    "Photoelectric emission is a one-photon to one-electron interaction. Increasing the intensity increases the photon flux (number of photons per second) but does NOT increase the energy of each individual photon ($E = h\\nu_0$). Thus, $K_{\\max} = h\\nu_0 - \\phi_0 = 0$ remains zero.",
    "Easy"
)

# Q37
add_q(
    "Einstein's photoelectric equation and work function",
    "In a photoelectric cell, a retarding potential of $0.5\\text{ V}$ is needed when light of $\\lambda = 500\\text{ nm}$ is used, and $1.5\\text{ V}$ when $\\lambda = 360\\text{ nm}$ is used. The experimental value of Planck's constant calculated from this data is: (Take $c = 3 \\times 10^8\\text{ m/s}$, $e = 1.6 \\times 10^{-19}\\text{ C}$)",
    [
        "$6.86 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
        "$6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
        "$5.50 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
        "$7.20 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$"
    ],
    0,
    "We have $e(V_2 - V_1) = hc\\left(\\frac{1}{\\lambda_2} - \\frac{1}{\\lambda_1}\\right)$:\n$$e(1.5 - 0.5) = hc\\left(\\frac{1}{360 \\times 10^{-9}} - \\frac{1}{500 \\times 10^{-9}}\\right)$$\n$$1.6 \\times 10^{-19}(1.0) = hc \\times 10^7 \\left(\\frac{1}{3.6} - \\frac{1}{5.0}\\right) = hc \\times 10^7 \\left(\\frac{1.4}{18}\\right) = hc \\times 10^7 (0.0778)$$\n$$hc = \\frac{1.6 \\times 10^{-19}}{7.78 \\times 10^5} \\approx 2.057 \\times 10^{-25}\\text{ J}\\cdot\\text{m}$$\n$$h = \\frac{2.057 \\times 10^{-25}}{3 \\times 10^8} \\approx 6.86 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$$",
    "Hard"
)

# Q38
add_q(
    "Einstein's photoelectric equation and work function",
    "An electric field of magnitude $E = 100\\text{ V/m}$ is established between the emitter and collector plates separated by distance $d = 2\\text{ cm}$. If the stopping potential for the emitted photoelectrons is $1.5\\text{ V}$, will photoelectrons reach the collector plate?",
    [
        "No, because the potential barrier ($2.0\\text{ V}$) is greater than the stopping potential ($1.5\\text{ V}$)",
        "Yes, because the electric field accelerates all electrons",
        "Yes, half of them reach",
        "No, because the electric field cancels Planck's constant"
    ],
    0,
    "The retarding potential difference between the plates is $V = E \\times d = 100\\text{ V/m} \\times 0.02\\text{ m} = 2.0\\text{ V}$. Since the retarding potential ($2.0\\text{ V}$) exceeds the stopping potential of the fastest electrons ($1.5\\text{ V}$), all electrons are turned back and none reach the collector.",
    "Medium"
)

# Q39
add_q(
    "Einstein's photoelectric equation and work function",
    "The work function of a metal is $W$. When light of frequency $\\nu$ is incident on it, the maximum velocity of photoelectrons is $v$. If the frequency of incident light is increased to $\\frac{4}{3}\\nu$, the maximum velocity will be:",
    [
        "$\\sqrt{\\frac{4}{3}v^2 + \\frac{2W}{3m}}$",
        "$\\frac{2}{\\sqrt{3}}v$",
        "$\\sqrt{\\frac{4}{3}}v$",
        "$\\sqrt{\\frac{4}{3}v^2 - \\frac{2W}{3m}}$"
    ],
    0,
    "Initial equation: $\\frac{1}{2}mv^2 = h\\nu - W \\implies h\\nu = \\frac{1}{2}mv^2 + W$.\nFor frequency $\\frac{4}{3}\\nu$:\n$$\\frac{1}{2}m(v')^2 = \\frac{4}{3}h\\nu - W = \\frac{4}{3}\\left(\\frac{1}{2}mv^2 + W\\right) - W = \\frac{4}{3}\\left(\\frac{1}{2}mv^2\\right) + \\frac{1}{3}W$$\nMultiply by $2/m$:\n$$(v')^2 = \\frac{4}{3}v^2 + \\frac{2W}{3m} \\implies v' = \\sqrt{\\frac{4}{3}v^2 + \\frac{2W}{3m}}$$",
    "Hard"
)

# Q40
add_q(
    "Einstein's photoelectric equation and work function",
    "Which of the following statements about the work function of a metal is FALSE?",
    [
        "Work function increases linearly with the intensity of incident light",
        "Work function depends on the nature of the metal and its surface condition",
        "Work function is the minimum energy required to eject an electron from the Fermi level to infinity",
        "Different crystal facets of the same pure metal can have slightly different work functions"
    ],
    0,
    "The work function is an intrinsic property of the material and surface structure; it is completely independent of the intensity or frequency of incident radiation. Statement A is false.",
    "Easy"
)

# Q41
add_q(
    "Einstein's photoelectric equation and work function",
    "When a metallic surface is irradiated by photons of energy $3.0\\text{ eV}$, electrons are emitted with maximum kinetic energy $K_1$. When irradiated by photons of energy $4.5\\text{ eV}$, electrons are emitted with maximum kinetic energy $K_2 = 2.5 K_1$. The work function of the metal is:",
    [
        "$2.0\\text{ eV}$",
        "$1.5\\text{ eV}$",
        "$2.5\\text{ eV}$",
        "$1.0\\text{ eV}$"
    ],
    0,
    "We have:\n$$K_1 = 3.0 - \\phi_0$$\n$$K_2 = 4.5 - \\phi_0 = 2.5(3.0 - \\phi_0)$$\n$$4.5 - \\phi_0 = 7.5 - 2.5\\phi_0$$\n$$1.5\\phi_0 = 3.0 \\implies \\phi_0 = 2.0\\text{ eV}$$",
    "Medium"
)

# Q42
add_q(
    "Einstein's photoelectric equation and work function",
    "A beam of light having frequency $\\nu$ is incident on a photosensitive metal. If the incident power is doubled keeping the frequency constant, how do the stopping potential $V_0$ and the saturation current $I_{\\text{sat}}$ change?",
    [
        "$V_0$ remains unchanged, $I_{\\text{sat}}$ doubles",
        "Both $V_0$ and $I_{\\text{sat}}$ double",
        "$V_0$ doubles, $I_{\\text{sat}}$ remains unchanged",
        "$V_0$ quadruples, $I_{\\text{sat}}$ doubles"
    ],
    0,
    "Doubling the power at constant frequency doubles the number of photons incident per second, thereby doubling the saturation current $I_{\\text{sat}}$. Since the frequency is unchanged, the maximum kinetic energy and stopping potential $V_0$ remain completely unchanged.",
    "Easy"
)

# Q43
add_q(
    "Einstein's photoelectric equation and work function",
    "Light of wavelength $400\\text{ nm}$ ejects photoelectrons with maximum kinetic energy $1.1\\text{ eV}$ from a metal surface. What is the maximum kinetic energy if light of wavelength $300\\text{ nm}$ is used? (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$2.13\\text{ eV}$",
        "$1.47\\text{ eV}$",
        "$3.10\\text{ eV}$",
        "$0.85\\text{ eV}$"
    ],
    0,
    "Energy of $400\\text{ nm}$ photon:\n$$E_1 = \\frac{1240}{400} = 3.10\\text{ eV}$$\nWork function:\n$$\\phi_0 = E_1 - K_1 = 3.10 - 1.10 = 2.00\\text{ eV}$$\nEnergy of $300\\text{ nm}$ photon:\n$$E_2 = \\frac{1240}{300} \\approx 4.133\\text{ eV}$$\nNew maximum kinetic energy:\n$$K_2 = E_2 - \\phi_0 = 4.133 - 2.00 = 2.133\\text{ eV} \\approx 2.13\\text{ eV}$$",
    "Medium"
)

# Q44
add_q(
    "Einstein's photoelectric equation and work function",
    "If the threshold wavelength for photoelectric emission from a metal is $\\lambda_0$, what is the kinetic energy of the fastest photoelectrons emitted when light of wavelength $\\lambda_0 / 2$ is incident on it?",
    [
        "$\\frac{hc}{\\lambda_0}$",
        "$\\frac{2hc}{\\lambda_0}$",
        "$\\frac{hc}{2\\lambda_0}$",
        "$\\frac{3hc}{2\\lambda_0}$"
    ],
    0,
    "Energy of incident photons:\n$$E = \\frac{hc}{\\lambda_0 / 2} = \\frac{2hc}{\\lambda_0}$$\nWork function:\n$$\\phi_0 = \\frac{hc}{\\lambda_0}$$\nMaximum kinetic energy:\n$$K_{\\max} = E - \\phi_0 = \\frac{2hc}{\\lambda_0} - \\frac{hc}{\\lambda_0} = \\frac{hc}{\\lambda_0}$$",
    "Easy"
)

# Q45
add_q(
    "Einstein's photoelectric equation and work function",
    "In Einstein's explanation of the photoelectric effect, the physical meaning of the linear relation between $K_{\\max}$ and frequency $\\nu$ is that:",
    [
        "Energy is exchanged between radiation and electrons in discrete indivisible quanta of magnitude $h\\nu$",
        "Light waves carry continuous energy proportional to amplitude squared",
        "Electrons inside metals behave as classical harmonic oscillators",
        "The velocity of light increases with frequency"
    ],
    0,
    "The linear relationship $K_{\\max} = h\\nu - \\phi_0$ confirmed that each emitted electron absorbs the entire energy of exactly one discrete quantum of electromagnetic radiation (a photon of energy $h\\nu$), proving Einstein's light quantum hypothesis and earning him the 1921 Nobel Prize in Physics.",
    "Easy"
)

# Balance options for subtopic 5
def balance_subtopic(subtopic_name, target_counts):
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

balance_subtopic("Einstein's photoelectric equation and work function", [12, 11, 11, 11])

# Save to batch 3
with open("scripts/dnmr/dnmr_batch3.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Batch 3 generated successfully! Total questions: {len(questions)}")
