# -*- coding: utf-8 -*-
"""
Generate Batch 1 of Dual Nature of Matter and Radiation:
- Photoelectric effect (45 MCQs)
- de Broglie wavelength (45 MCQs)
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
        "chapter": "Dual Nature of Matter and Radiation",
        "subtopic": subtopic,
        "subTopic": subtopic,
        "subject": "Physics",
        "examType": "JEE Mains"
    })

# ==============================================================================
# SUBTOPIC 1: Photoelectric effect (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Photoelectric effect",
    "In a photoelectric effect experiment, when the intensity of incident monochromatic light is increased keeping its frequency constant, which of the following quantities increases?",
    [
        "Stopping potential",
        "Saturation photoelectric current",
        "Maximum kinetic energy of photoelectrons",
        "Threshold frequency of the metal"
    ],
    1,
    "The intensity of monochromatic light is proportional to the number of photons incident per unit time. An increase in intensity increases the number of photoelectrons emitted per second, thereby increasing the saturation photoelectric current. The maximum kinetic energy and stopping potential depend only on the frequency and work function, not on intensity.",
    "Easy"
)

# Q2
add_q(
    "Photoelectric effect",
    "A point source of light is placed at a distance of $0.5\\text{ m}$ from a photosensitive plate and produces a saturation current of $16\\text{ mA}$. If the distance of the light source is increased to $1.0\\text{ m}$, the new saturation current will be:",
    [
        "$8\\text{ mA}$",
        "$4\\text{ mA}$",
        "$2\\text{ mA}$",
        "$16\\text{ mA}$"
    ],
    1,
    "The intensity of radiation from a point source varies inversely with the square of distance:\n$$I \\propto \\frac{1}{r^2}$$\nWhen the distance is doubled ($r' = 2r$), the intensity becomes $\\frac{1}{4}$ of its initial value. Since saturation current is directly proportional to intensity:\n$$i' = \\frac{i}{4} = \\frac{16\\text{ mA}}{4} = 4\\text{ mA}$$",
    "Easy"
)

# Q3
add_q(
    "Photoelectric effect",
    "The threshold wavelength for photoelectric emission from a metal surface is $620\\text{ nm}$. What is the work function of the metal? (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$1.5\\text{ eV}$",
        "$2.0\\text{ eV}$",
        "$2.5\\text{ eV}$",
        "$3.1\\text{ eV}$"
    ],
    1,
    "The work function $\\phi$ is related to the threshold wavelength $\\lambda_0$ by:\n$$\\phi = \\frac{hc}{\\lambda_0} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{620\\text{ nm}} = 2.0\\text{ eV}$$",
    "Easy"
)

# Q4
add_q(
    "Photoelectric effect",
    "Light of wavelength $310\\text{ nm}$ is incident on a metal plate having a work function of $2.2\\text{ eV}$. The stopping potential required to stop the most energetic photoelectrons is: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$1.2\\text{ V}$",
        "$1.8\\text{ V}$",
        "$2.2\\text{ V}$",
        "$4.0\\text{ V}$"
    ],
    1,
    "The energy of the incident photon is:\n$$E = \\frac{hc}{\\lambda} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{310\\text{ nm}} = 4.0\\text{ eV}$$\nFrom Einstein's equation:\n$$K_{\\max} = E - \\phi = 4.0\\text{ eV} - 2.2\\text{ eV} = 1.8\\text{ eV}$$\nSince $K_{\\max} = e V_0$, the stopping potential is:\n$$V_0 = 1.8\\text{ V}$$",
    "Medium"
)

# Q5
add_q(
    "Photoelectric effect",
    "When a metal surface is illuminated with light of frequency $\\nu$, the stopping potential is $V_0$. When the frequency is changed to $2\\nu$, the stopping potential becomes:",
    [
        "Equal to $2V_0$",
        "Greater than $2V_0$",
        "Less than $2V_0$",
        "Equal to $V_0/2$"
    ],
    1,
    "Einstein's equation gives:\n$$e V_0 = h\\nu - \\phi \\implies V_0 = \\frac{h\\nu}{e} - \\frac{\\phi}{e}$$\nFor frequency $2\\nu$:\n$$e V_0' = 2h\\nu - \\phi = 2(h\\nu - \\phi) + \\phi = 2eV_0 + \\phi$$\n$$V_0' = 2V_0 + \\frac{\\phi}{e} > 2V_0$$\nThus, the new stopping potential is greater than $2V_0$.",
    "Medium"
)

# Q6
add_q(
    "Photoelectric effect",
    "The time lag between the incidence of light and the emission of photoelectrons from a metal surface is experimentally observed to be of the order of:",
    [
        "A few minutes",
        "A few seconds",
        "Less than $10^{-9}\\text{ s}$",
        "Approximately $10^{-3}\\text{ s}$"
    ],
    2,
    "Photoelectric emission is essentially an instantaneous process. The collision between a photon and a conduction electron is elastic and instantaneous, with the measured time lag being less than $10^{-9}\\text{ s}$ ($~10^{-10}\\text{ s}$).",
    "Easy"
)

# Q7
add_q(
    "Photoelectric effect",
    "A monochromatic light source of power $66\\text{ W}$ emits light of wavelength $600\\text{ nm}$. The number of photons emitted by the source per second is approximately: (Take $h = 6.6 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3 \\times 10^8\\text{ m/s}$)",
    [
        "$2.0 \\times 10^{20}$",
        "$1.0 \\times 10^{20}$",
        "$3.3 \\times 10^{19}$",
        "$6.6 \\times 10^{19}$"
    ],
    0,
    "Energy of one photon is:\n$$E = \\frac{hc}{\\lambda} = \\frac{6.6 \\times 10^{-34} \\times 3 \\times 10^8}{600 \\times 10^{-9}} = 3.3 \\times 10^{-19}\\text{ J}$$\nThe rate of photon emission is:\n$$n = \\frac{P}{E} = \\frac{66}{3.3 \\times 10^{-19}} = 2.0 \\times 10^{20}\\text{ photons/s}$$",
    "Medium"
)

# Q8
add_q(
    "Photoelectric effect",
    "If only $1\\%$ of incident photons of wavelength $400\\text{ nm}$ produce photoelectrons from a photocell receiving $1.5\\text{ mW}$ of power, the resulting photoelectric saturation current is: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$, $e = 1.6 \\times 10^{-19}\\text{ C}$)",
    [
        "$4.84\\text{ }\\mu\\text{A}$",
        "$2.42\\text{ }\\mu\\text{A}$",
        "$9.68\\text{ }\\mu\\text{A}$",
        "$1.21\\text{ }\\mu\\text{A}$"
    ],
    0,
    "Energy of each photon is:\n$$E_p = \\frac{1240}{400} = 3.1\\text{ eV} = 3.1 \\times 1.6 \\times 10^{-19} = 4.96 \\times 10^{-19}\\text{ J}$$\nNumber of photons incident per second:\n$$n_p = \\frac{P}{E_p} = \\frac{1.5 \\times 10^{-3}}{4.96 \\times 10^{-19}} \\approx 3.024 \\times 10^{15}\\text{ s}^{-1}$$\nNumber of photoelectrons emitted per second with $\\eta = 1\\% = 0.01$:\n$$n_e = 0.01 \\times 3.024 \\times 10^{15} = 3.024 \\times 10^{13}\\text{ s}^{-1}$$\nPhotoelectric current:\n$$i = n_e e = 3.024 \\times 10^{13} \\times 1.6 \\times 10^{-19} = 4.84 \\times 10^{-6}\\text{ A} = 4.84\\text{ }\\mu\\text{A}$$",
    "Medium"
)

# Q9
add_q(
    "Photoelectric effect",
    "Which of the following graphs correctly represents the variation of stopping potential ($V_0$) with the intensity ($I$) of incident monochromatic light of fixed frequency?",
    [
        "A straight line parallel to the intensity axis",
        "A straight line passing through the origin",
        "A parabola opening upwards",
        "An exponentially decaying curve"
    ],
    0,
    "The stopping potential depends solely on the frequency of incident radiation and the work function of the metal ($eV_0 = h\\nu - \\phi$). It is completely independent of the intensity of light. Therefore, the graph of $V_0$ vs $I$ is a horizontal straight line parallel to the intensity axis.",
    "Easy"
)

# Q10
add_q(
    "Photoelectric effect",
    "An isolated neutral copper sphere of radius $R = 10\\text{ cm}$ is illuminated with ultraviolet light of wavelength $200\\text{ nm}$. If the work function of copper is $4.7\\text{ eV}$, the maximum electric potential the sphere can attain is: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$1.5\\text{ V}$",
        "$6.2\\text{ V}$",
        "$4.7\\text{ V}$",
        "$2.5\\text{ V}$"
    ],
    0,
    "As photoelectrons are emitted, the sphere acquires a positive potential $V$. Photoemission stops when the positive potential equals the stopping potential $V_0$:\n$$V_{\\max} = V_0 = \\frac{h\\nu - \\phi}{e}$$\n$$h\\nu = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{200\\text{ nm}} = 6.2\\text{ eV}$$\n$$V_{\\max} = \\frac{6.2\\text{ eV} - 4.7\\text{ eV}}{e} = 1.5\\text{ V}$$",
    "Medium"
)

# Q11
add_q(
    "Photoelectric effect",
    "In the previous problem, what is the maximum positive charge acquired by the copper sphere of radius $R = 10\\text{ cm}$? (Take $\\frac{1}{4\\pi\\epsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$)",
    [
        "$1.67 \\times 10^{-11}\\text{ C}$",
        "$3.33 \\times 10^{-11}\\text{ C}$",
        "$1.50 \\times 10^{-10}\\text{ C}$",
        "$2.50 \\times 10^{-9}\\text{ C}$"
    ],
    0,
    "The potential of a charged conducting sphere of radius $R$ is:\n$$V = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{R}$$\nAt maximum potential $V = 1.5\\text{ V}$:\n$$Q = 4\\pi\\epsilon_0 R V = \\frac{1}{9 \\times 10^9} \\times 0.10 \\times 1.5 = \\frac{0.15}{9 \\times 10^9} \\approx 1.67 \\times 10^{-11}\\text{ C}$$",
    "Medium"
)

# Q12
add_q(
    "Photoelectric effect",
    "The work functions of metals A, B, and C are $1.92\\text{ eV}$, $2.0\\text{ eV}$, and $5.0\\text{ eV}$ respectively. If light of wavelength $410\\text{ nm}$ is incident on all three metals, photoelectric emission will occur from: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "A only",
        "A and B only",
        "All three metals",
        "None of the metals"
    ],
    1,
    "Energy of incident photons:\n$$E = \\frac{1240}{410} \\approx 3.02\\text{ eV}$$\nPhotoelectric emission occurs only when $E \\ge \\phi$:\n- For A: $3.02\\text{ eV} > 1.92\\text{ eV}$ (emission occurs)\n- For B: $3.02\\text{ eV} > 2.0\\text{ eV}$ (emission occurs)\n- For C: $3.02\\text{ eV} < 5.0\\text{ eV}$ (no emission)\nThus, emission occurs from metals A and B only.",
    "Easy"
)

# Q13
add_q(
    "Photoelectric effect",
    "A beam of light consisting of two wavelengths $400\\text{ nm}$ and $600\\text{ nm}$ with equal intensity falls on a metal surface having work function $2.2\\text{ eV}$. The stopping potential observed will be determined by: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "The $600\\text{ nm}$ component only",
        "The $400\\text{ nm}$ component only",
        "The average wavelength $500\\text{ nm}$",
        "The sum of both wavelengths"
    ],
    1,
    "Stopping potential is determined by the electrons having the maximum kinetic energy. The maximum kinetic energy corresponds to the highest frequency (shortest wavelength) component of the incident light.\nHere, $\\lambda = 400\\text{ nm}$ has photon energy $E_1 = \\frac{1240}{400} = 3.1\\text{ eV} > \\phi$, giving $K_{\\max} = 3.1 - 2.2 = 0.9\\text{ eV}$.\nFor $\\lambda = 600\\text{ nm}$, $E_2 = \\frac{1240}{600} \\approx 2.07\\text{ eV} < \\phi$, so it does not even cause photoemission.\nHence, the stopping potential is governed solely by the $400\\text{ nm}$ component.",
    "Medium"
)

# Q14
add_q(
    "Photoelectric effect",
    "In a photoelectric experiment, the collector plate is maintained at a positive potential with respect to the emitter plate. As the collector potential is gradually increased from zero to large values, the photocurrent:",
    [
        "Increases indefinitely",
        "Increases initially and then reaches a constant saturation value",
        "Decreases to zero",
        "Remains constant from the very beginning"
    ],
    1,
    "As the positive potential of the collector increases, more emitted electrons are collected per second until all electrons emitted from the cathode reach the anode. At this stage, the photocurrent saturates and no further increase occurs regardless of increasing potential.",
    "Easy"
)

# Q15
add_q(
    "Photoelectric effect",
    "The maximum speed of photoelectrons emitted from a surface is $v$. When the frequency of the incident radiation is doubled, the new maximum speed of photoelectrons will be:",
    [
        "Equal to $2v$",
        "Equal to $\\sqrt{2}v$",
        "Greater than $\\sqrt{2}v$",
        "Less than $v$"
    ],
    2,
    "We have:\n$$K_{\\max 1} = \\frac{1}{2}mv^2 = h\\nu - \\phi$$\nWhen frequency is doubled to $2\\nu$:\n$$K_{\\max 2} = \\frac{1}{2}m(v')^2 = 2h\\nu - \\phi = 2(h\\nu - \\phi) + \\phi = 2K_{\\max 1} + \\phi$$\n$$\\frac{1}{2}m(v')^2 > 2\\left(\\frac{1}{2}mv^2\\right) \\implies (v')^2 > 2v^2 \\implies v' > \\sqrt{2}v$$",
    "Medium"
)

# Q16
add_q(
    "Photoelectric effect",
    "When a metal is illuminated with light of wavelength $\\lambda$, the stopping potential is $3V$. When the wavelength is increased to $2\\lambda$, the stopping potential is $V$. The threshold wavelength of the metal is:",
    [
        "$3\\lambda$",
        "$4\\lambda$",
        "$5\\lambda$",
        "$2.5\\lambda$"
    ],
    1,
    "From Einstein's photoelectric equation:\n$$3eV = \\frac{hc}{\\lambda} - \\phi \\quad \\text{--- (1)}$$\n$$eV = \\frac{hc}{2\\lambda} - \\phi \\quad \\text{--- (2)}$$\nMultiplying equation (2) by 3:\n$$3eV = \\frac{3hc}{2\\lambda} - 3\\phi$$\nEquating with (1):\n$$\\frac{hc}{\\lambda} - \\phi = \\frac{3hc}{2\\lambda} - 3\\phi$$\n$$2\\phi = \\frac{3hc}{2\\lambda} - \\frac{hc}{\\lambda} = \\frac{hc}{2\\lambda} \\implies \\phi = \\frac{hc}{4\\lambda}$$\nSince $\\phi = \\frac{hc}{\\lambda_0}$, we get:\n$$\\lambda_0 = 4\\lambda$$",
    "Hard"
)

# Q17
add_q(
    "Photoelectric effect",
    "A surface is illuminated by monochromatic light of frequency $\\nu_1$ and then by frequency $\\nu_2$. The ratio of the maximum speeds of the emitted photoelectrons is $1 : 2$. The work function of the metal is:",
    [
        "$\\frac{h(4\\nu_1 - \\nu_2)}{3}$",
        "$\\frac{h(2\\nu_1 - \\nu_2)}{2}$",
        "$\\frac{h(\\nu_2 - \\nu_1)}{3}$",
        "$h(2\\nu_1 - \\nu_2)$"
    ],
    0,
    "Kinetic energy is proportional to the square of speed:\n$$\\frac{K_1}{K_2} = \\left(\\frac{v_1}{v_2}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$\nUsing $K = h\\nu - \\phi$:\n$$\\frac{h\\nu_1 - \\phi}{h\\nu_2 - \\phi} = \\frac{1}{4} \\implies 4h\\nu_1 - 4\\phi = h\\nu_2 - \\phi$$\n$$3\\phi = 4h\\nu_1 - h\\nu_2 \\implies \\phi = \\frac{h(4\\nu_1 - \\nu_2)}{3}$$",
    "Medium"
)

# Q18
add_q(
    "Photoelectric effect",
    "Which of the following statements is INCORRECT regarding the photoelectric effect?",
    [
        "For a given metal and frequency of incident radiation, the number of photoelectrons emitted per second is directly proportional to the intensity.",
        "The stopping potential is directly proportional to the frequency of incident radiation.",
        "There exists a threshold frequency below which no photoelectrons are emitted regardless of intensity.",
        "The maximum kinetic energy of photoelectrons is independent of the intensity of incident light."
    ],
    1,
    "The stopping potential is given by $V_0 = \\frac{h}{e}\\nu - \\frac{\\phi}{e}$. It varies linearly with frequency, but is NOT directly proportional to frequency because there is a non-zero negative intercept ($-\\phi/e$). Statement B is therefore incorrect.",
    "Easy"
)

# Q19
add_q(
    "Photoelectric effect",
    "Light of frequency $1.5\\nu_0$ is incident on a photosensitive material of threshold frequency $\\nu_0$. If the frequency is halved and intensity is doubled, the photoelectric current will:",
    [
        "Become zero",
        "Double",
        "Be halved",
        "Remain unchanged"
    ],
    0,
    "Initial frequency is $1.5\\nu_0$. When the frequency is halved, the new frequency becomes $\\frac{1.5\\nu_0}{2} = 0.75\\nu_0$. Since $0.75\\nu_0 < \\nu_0$ (below the threshold frequency), no photoelectrons are emitted at all. Thus, the photoelectric current becomes zero, regardless of the intensity.",
    "Easy"
)

# Q20
add_q(
    "Photoelectric effect",
    "A photocell is operating in saturation current mode. If an aperture is placed before the photocell reducing the diameter of the incident light beam by half without changing its intensity, the saturation current will:",
    [
        "Remain the same",
        "Be halved",
        "Become one-fourth",
        "Double"
    ],
    2,
    "The area of the aperture is $A = \\pi (d/2)^2 \\propto d^2$. Halving the diameter reduces the illuminated area by a factor of 4. Since the total power incident is $P = I \\times A$, the incident power and the number of incident photons per second decrease by a factor of 4. Consequently, the saturation photocurrent becomes one-fourth.",
    "Medium"
)

# Q21
add_q(
    "Photoelectric effect",
    "The threshold frequency of a certain metal is $\\nu_0$. If radiation of frequency $2\\nu_0$ is incident on the metal, the maximum velocity of photoelectrons is $v_1$. When the frequency is increased to $5\\nu_0$, the maximum velocity is $v_2$. The ratio $v_1 : v_2$ is:",
    [
        "$1 : 2$",
        "$1 : 4$",
        "$1 : \\sqrt{2}$",
        "$2 : 5$"
    ],
    0,
    "Using $K_{\\max} = \\frac{1}{2}mv^2 = h\\nu - h\\nu_0$:\n$$K_1 = \\frac{1}{2}mv_1^2 = 2h\\nu_0 - h\\nu_0 = h\\nu_0$$\n$$K_2 = \\frac{1}{2}mv_2^2 = 5h\\nu_0 - h\\nu_0 = 4h\\nu_0$$\nTaking the ratio:\n$$\\frac{v_1^2}{v_2^2} = \\frac{h\\nu_0}{4h\\nu_0} = \\frac{1}{4} \\implies \\frac{v_1}{v_2} = \\frac{1}{2}$$",
    "Medium"
)

# Q22
add_q(
    "Photoelectric effect",
    "A monochromatic point source illuminates a metal plate, producing a stopping potential of $3.0\\text{ V}$. If the distance between the source and the plate is doubled, the new stopping potential is:",
    [
        "$1.5\\text{ V}$",
        "$0.75\\text{ V}$",
        "$3.0\\text{ V}$",
        "$6.0\\text{ V}$"
    ],
    2,
    "Changing the distance between the source and the photosensitive plate changes the intensity of incident light, but not its frequency. Since stopping potential depends strictly on frequency and work function, it remains completely unchanged at $3.0\\text{ V}$.",
    "Easy"
)

# Q23
add_q(
    "Photoelectric effect",
    "A 100 W sodium lamp radiates energy uniformly in all directions. If the lamp is situated at the center of a large sphere that absorbs all sodium light ($589\\text{ nm}$), the rate at which photons arrive at the sphere is: (Take $hc = 2.0 \\times 10^{-25}\\text{ J}\\cdot\\text{m}$)",
    [
        "$3.0 \\times 10^{20}\\text{ photons/s}$",
        "$1.5 \\times 10^{19}\\text{ photons/s}$",
        "$5.0 \\times 10^{20}\\text{ photons/s}$",
        "$2.5 \\times 10^{18}\\text{ photons/s}$"
    ],
    0,
    "Energy of each photon is:\n$$E_p = \\frac{hc}{\\lambda} = \\frac{2.0 \\times 10^{-25}}{589 \\times 10^{-9}} \\approx 3.4 \\times 10^{-19}\\text{ J}$$\nThe rate of photon emission is:\n$$n = \\frac{P}{E_p} = \\frac{100}{3.4 \\times 10^{-19}} \\approx 2.95 \\times 10^{20} \\approx 3.0 \\times 10^{20}\\text{ photons/s}$$",
    "Medium"
)

# Q24
add_q(
    "Photoelectric effect",
    "In a photoelectric experiment, anode voltage is plotted against photocurrent for two light beams of frequencies $\\nu_1$ and $\\nu_2$ with intensities $I_1$ and $I_2$. If the stopping potentials are equal but the saturation current for beam 1 is twice that of beam 2, which of the following is true?",
    [
        "$\\nu_1 = \\nu_2$ and $I_1 = 2I_2$",
        "$\\nu_1 = 2\\nu_2$ and $I_1 = I_2$",
        "$\\nu_1 = \\nu_2$ and $I_1 = I_2/2$",
        "$\\nu_1 > \\nu_2$ and $I_1 = I_2$"
    ],
    0,
    "Equal stopping potential implies equal maximum kinetic energy and hence equal incident frequency: $\\nu_1 = \\nu_2$. Saturation current is directly proportional to intensity at a given frequency, so $i_{s1} = 2i_{s2} \\implies I_1 = 2I_2$.",
    "Easy"
)

# Q25
add_q(
    "Photoelectric effect",
    "The work function of cesium is $2.14\\text{ eV}$. When light of frequency $6.0 \\times 10^{14}\\text{ Hz}$ is incident on the cesium surface, the maximum kinetic energy of the emitted electrons is: (Take $h = 4.14 \\times 10^{-15}\\text{ eV}\\cdot\\text{s}$)",
    [
        "$0.344\\text{ eV}$",
        "$0.450\\text{ eV}$",
        "$0.850\\text{ eV}$",
        "$1.200\\text{ eV}$"
    ],
    0,
    "Photon energy is:\n$$E = h\\nu = 4.14 \\times 10^{-15} \\times 6.0 \\times 10^{14} = 2.484\\text{ eV}$$\nMaximum kinetic energy:\n$$K_{\\max} = E - \\phi = 2.484\\text{ eV} - 2.14\\text{ eV} = 0.344\\text{ eV}$$",
    "Easy"
)

# Q26
add_q(
    "Photoelectric effect",
    "The threshold wavelength for photoelectric emission from sodium is $540\\text{ nm}$. When sodium is irradiated with light of wavelength $400\\text{ nm}$, what is the maximum kinetic energy of the photoelectrons? (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$0.80\\text{ eV}$",
        "$1.25\\text{ eV}$",
        "$2.30\\text{ eV}$",
        "$3.10\\text{ eV}$"
    ],
    0,
    "Work function of sodium is:\n$$\\phi = \\frac{hc}{\\lambda_0} = \\frac{1240}{540} \\approx 2.30\\text{ eV}$$\nEnergy of incident photon:\n$$E = \\frac{hc}{\\lambda} = \\frac{1240}{400} = 3.10\\text{ eV}$$\nMaximum kinetic energy:\n$$K_{\\max} = E - \\phi = 3.10 - 2.30 = 0.80\\text{ eV}$$",
    "Medium"
)

# Q27
add_q(
    "Photoelectric effect",
    "When ultraviolet light of wavelength $100\\text{ nm}$ is incident on a metal surface, photoelectrons are ejected with a maximum kinetic energy of $9.4\\text{ eV}$. If the wavelength of the incident light is doubled to $200\\text{ nm}$, the maximum kinetic energy of the photoelectrons will be: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$3.2\\text{ eV}$",
        "$4.7\\text{ eV}$",
        "$6.2\\text{ eV}$",
        "$1.5\\text{ eV}$"
    ],
    0,
    "For $\\lambda_1 = 100\\text{ nm}$:\n$$E_1 = \\frac{1240}{100} = 12.4\\text{ eV}$$\n$$K_1 = E_1 - \\phi \\implies 9.4 = 12.4 - \\phi \\implies \\phi = 3.0\\text{ eV}$$\nWhen wavelength is doubled ($\\\\lambda_2 = 200\\text{ nm}$):\n$$E_2 = \\frac{1240}{200} = 6.2\\text{ eV}$$\n$$K_2 = E_2 - \\phi = 6.2 - 3.0 = 3.2\\text{ eV}$$",
    "Medium"
)

# Q28
add_q(
    "Photoelectric effect",
    "Two identical photocells are illuminated by two monochromatic light sources of wavelengths $\\lambda_1$ and $\\lambda_2$ ($\\lambda_1 > \\lambda_2$). If the maximum kinetic energies of the emitted photoelectrons are $K_1$ and $K_2$, then:",
    [
        "$K_1 > K_2$",
        "$K_1 < K_2$",
        "$K_1 = K_2$",
        "$K_1 = \\frac{\\lambda_1}{\\lambda_2} K_2$"
    ],
    1,
    "The kinetic energy of photoelectrons is $K = \\frac{hc}{\\lambda} - \\phi$. Since $\\lambda_1 > \\lambda_2$, the photon energy for the first source is less than that for the second: $\\frac{hc}{\\lambda_1} < \\frac{hc}{\\lambda_2}$. Therefore, $K_1 < K_2$.",
    "Easy"
)

# Q29
add_q(
    "Photoelectric effect",
    "A photocell is illuminated by a small point source of light placed $1\\text{ m}$ away. When the source is brought to a distance of $0.2\\text{ m}$, the saturation current increases by a factor of:",
    [
        "$5$",
        "$10$",
        "$25$",
        "$50$"
    ],
    2,
    "The intensity of light from a point source is $I \\propto \\frac{1}{r^2}$.\n$$\\frac{I_2}{I_1} = \\left(\\frac{r_1}{r_2}\\right)^2 = \\left(\\frac{1}{0.2}\\right)^2 = 5^2 = 25$$\nSince saturation current is directly proportional to intensity, it increases by a factor of 25.",
    "Easy"
)

# Q30
add_q(
    "Photoelectric effect",
    "In a photoelectric experiment, stopping potential $V_0$ is measured for various frequencies $\\nu$. The slope of the straight line obtained by plotting $V_0$ versus $\\nu$ is equal to:",
    [
        "$h$",
        "$h/e$",
        "$e/h$",
        "$\\phi/e$"
    ],
    1,
    "According to Einstein's equation:\n$$eV_0 = h\\nu - \\phi \\implies V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi}{e}$$\nThis represents a straight line of the form $y = mx + c$, where the slope $m = \\frac{h}{e}$. This provides a direct experimental method to determine Planck's constant.",
    "Easy"
)

# Q31
add_q(
    "Photoelectric effect",
    "The work function of a metal is $\\phi = 2.5\\text{ eV}$. What is the threshold frequency of this metal? (Take $h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$)",
    [
        "$6.03 \\times 10^{14}\\text{ Hz}$",
        "$3.77 \\times 10^{14}\\text{ Hz}$",
        "$4.50 \\times 10^{14}\\text{ Hz}$",
        "$7.25 \\times 10^{14}\\text{ Hz}$"
    ],
    0,
    "The threshold frequency $\\nu_0$ is:\n$$\\nu_0 = \\frac{\\phi}{h} = \\frac{2.5 \\times 1.6 \\times 10^{-19}\\text{ J}}{6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}} = \\frac{4.0 \\times 10^{-19}}{6.63 \\times 10^{-34}} \\approx 6.03 \\times 10^{14}\\text{ Hz}$$",
    "Medium"
)

# Q32
add_q(
    "Photoelectric effect",
    "Radiation of wavelength $\\lambda$ falls on a metal surface of work function $\\phi_0$. The de Broglie wavelength of the fastest photoelectron emitted is $\\lambda_e$. Then $\\lambda$ is given by:",
    [
        "$\\lambda = \\frac{hc}{\\frac{h^2}{2m\\lambda_e^2} + \\phi_0}$",
        "$\\lambda = \\frac{hc}{\\frac{h^2}{2m\\lambda_e^2} - \\phi_0}$",
        "$\\lambda = \\frac{h^2}{2m\\lambda_e^2 hc + \\phi_0}$",
        "$\\lambda = \\frac{hc}{\\phi_0 - \\frac{h^2}{2m\\lambda_e^2}}$"
    ],
    0,
    "The maximum kinetic energy of the emitted photoelectron is related to its de Broglie wavelength by:\n$$K_{\\max} = \\frac{p^2}{2m} = \\frac{h^2}{2m\\lambda_e^2}$$\nFrom Einstein's photoelectric equation:\n$$\\frac{hc}{\\lambda} - \\phi_0 = K_{\\max} = \\frac{h^2}{2m\\lambda_e^2}$$\n$$\\frac{hc}{\\lambda} = \\frac{h^2}{2m\\lambda_e^2} + \\phi_0 \\implies \\lambda = \\frac{hc}{\\frac{h^2}{2m\\lambda_e^2} + \\phi_0}$$",
    "Hard"
)

# Q33
add_q(
    "Photoelectric effect",
    "A laser beam of wavelength $660\\text{ nm}$ with power $3\\text{ mW}$ is directed onto a metal surface with work function $1.5\\text{ eV}$. If the quantum efficiency is $0.1\\%$, what is the resulting saturation photocurrent? (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$, $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$)",
    [
        "$1.6\\text{ }\\mu\\text{A}$",
        "$3.2\\text{ }\\mu\\text{A}$",
        "$0.8\\text{ }\\mu\\text{A}$",
        "$4.8\\text{ }\\mu\\text{A}$"
    ],
    0,
    "Energy of each photon is:\n$$E = \\frac{hc}{\\lambda} = \\frac{1240}{660} \\approx 1.88\\text{ eV} = 1.88 \\times 1.6 \\times 10^{-19}\\text{ J} \\approx 3.0 \\times 10^{-19}\\text{ J}$$\nNumber of photons per second:\n$$n_p = \\frac{P}{E} = \\frac{3 \\times 10^{-3}\\text{ W}}{3.0 \\times 10^{-19}\\text{ J}} = 1.0 \\times 10^{16}\\text{ s}^{-1}$$\nQuantum efficiency $\\eta = 0.1\\% = 10^{-3}$, so the number of electrons emitted per second is:\n$$n_e = 10^{-3} \\times 1.0 \\times 10^{16} = 1.0 \\times 10^{13}\\text{ s}^{-1}$$\nPhotocurrent:\n$$i = n_e e = 1.0 \\times 10^{13} \\times 1.6 \\times 10^{-19}\\text{ C} = 1.6 \\times 10^{-6}\\text{ A} = 1.6\\text{ }\\mu\\text{A}$$",
    "Hard"
)

# Q34
add_q(
    "Photoelectric effect",
    "An electron is accelerated from rest through a potential difference $V$. It then collides with a heavy target, stopping completely and emitting a single bremsstrahlung X-ray photon. The minimum wavelength of the emitted X-ray is:",
    [
        "$\\lambda_{\\min} = \\frac{hc}{eV}$",
        "$\\lambda_{\\min} = \\frac{eV}{hc}$",
        "$\\lambda_{\\min} = \\frac{h}{\\sqrt{2meV}}$",
        "$\\lambda_{\\min} = \\frac{2hc}{eV}$"
    ],
    0,
    "By the Duane-Hunt law, the maximum photon energy equals the kinetic energy gained by the electron: $E_{\\max} = eV$. Thus:\n$$E_{\\max} = \\frac{hc}{\\lambda_{\\min}} = eV \\implies \\lambda_{\\min} = \\frac{hc}{eV}$$",
    "Easy"
)

# Q35
add_q(
    "Photoelectric effect",
    "A beam of light consists of photons each of energy $3.5\\text{ eV}$. It falls on a metal surface of work function $2.0\\text{ eV}$. To stop all photoelectrons from reaching the collector plate, a retarding potential of magnitude $V_0$ is applied. The value of $V_0$ is:",
    [
        "$1.5\\text{ V}$",
        "$2.0\\text{ V}$",
        "$3.5\\text{ V}$",
        "$5.5\\text{ V}$"
    ],
    0,
    "The maximum kinetic energy of the photoelectrons is:\n$$K_{\\max} = E - \\phi = 3.5\\text{ eV} - 2.0\\text{ eV} = 1.5\\text{ eV}$$\nSince $K_{\\max} = eV_0$, the stopping potential is $V_0 = 1.5\\text{ V}$.",
    "Easy"
)

# Q36
add_q(
    "Photoelectric effect",
    "When a metallic surface is illuminated with light of frequency $\\nu_1$, the stopping potential is $V_1$. When illuminated with light of frequency $\\nu_2$, the stopping potential is $V_2$. Planck's constant $h$ can be determined as:",
    [
        "$h = \\frac{e(V_1 - V_2)}{\\nu_1 - \\nu_2}$",
        "$h = \\frac{e(V_1 + V_2)}{\\nu_1 + \\nu_2}$",
        "$h = \\frac{\\nu_1 - \\nu_2}{e(V_1 - V_2)}$",
        "$h = e(V_1 - V_2)(\\nu_1 - \\nu_2)$"
    ],
    0,
    "From Einstein's photoelectric equation:\n$$eV_1 = h\\nu_1 - \\phi$$\n$$eV_2 = h\\nu_2 - \\phi$$\nSubtracting the two equations:\n$$e(V_1 - V_2) = h(\\nu_1 - \\nu_2) \\implies h = \\frac{e(V_1 - V_2)}{\\nu_1 - \\nu_2}$$",
    "Easy"
)

# Q37
add_q(
    "Photoelectric effect",
    "In Millikan's oil drop and photoelectric experiment, the slope of the cut-off voltage versus frequency curve is found to be $4.14 \\times 10^{-15}\\text{ V}\\cdot\\text{s}$. The experimental value of Planck's constant is: (Take $e = 1.6 \\times 10^{-19}\\text{ C}$)",
    [
        "$6.624 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
        "$4.140 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
        "$2.587 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
        "$7.120 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$"
    ],
    0,
    "The slope of the $V_0$ vs $\\nu$ graph is $\\frac{h}{e}$.\n$$\\frac{h}{e} = 4.14 \\times 10^{-15}\\text{ V}\\cdot\\text{s}$$\n$$h = e \\times 4.14 \\times 10^{-15} = 1.6 \\times 10^{-19} \\times 4.14 \\times 10^{-15} = 6.624 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$$",
    "Easy"
)

# Q38
add_q(
    "Photoelectric effect",
    "Monochromatic light of wavelength $300\\text{ nm}$ falls on a photocell. The stopping potential is measured as $1.85\\text{ V}$. If the wavelength is changed to $400\\text{ nm}$, the new stopping potential will be: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$0.82\\text{ V}$",
        "$1.03\\text{ V}$",
        "$1.38\\text{ V}$",
        "$0.55\\text{ V}$"
    ],
    0,
    "Energy of $300\\text{ nm}$ photon:\n$$E_1 = \\frac{1240}{300} = 4.133\\text{ eV}$$\nWork function:\n$$\\phi = E_1 - eV_{01} = 4.133 - 1.85 = 2.283\\text{ eV}$$\nEnergy of $400\\text{ nm}$ photon:\n$$E_2 = \\frac{1240}{400} = 3.100\\text{ eV}$$\nNew stopping potential:\n$$eV_{02} = E_2 - \\phi = 3.100 - 2.283 = 0.817\\text{ eV} \\implies V_{02} \\approx 0.82\\text{ V}$$",
    "Medium"
)

# Q39
add_q(
    "Photoelectric effect",
    "The work function for a certain metal is $4.0\\text{ eV}$. To emit photoelectrons with zero velocity, the wavelength of incident radiation must be: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$310\\text{ nm}$",
        "$620\\text{ nm}$",
        "$155\\text{ nm}$",
        "$400\\text{ nm}$"
    ],
    0,
    "Zero velocity photoelectrons correspond to the threshold condition where $K_{\\max} = 0$, so $E = \\phi$:\n$$\\lambda_0 = \\frac{hc}{\\phi} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{4.0\\text{ eV}} = 310\\text{ nm}$$",
    "Easy"
)

# Q40
add_q(
    "Photoelectric effect",
    "A photocathode is irradiated simultaneously by two light sources: Source 1 emits at $\\lambda_1 = 300\\text{ nm}$ with intensity $I_1$, and Source 2 emits at $\\lambda_2 = 500\\text{ nm}$ with intensity $I_2 = 10 I_1$. The work function of the photocathode is $2.0\\text{ eV}$. The stopping potential will be: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
    [
        "$2.13\\text{ V}$",
        "$0.48\\text{ V}$",
        "$1.31\\text{ V}$",
        "$3.00\\text{ V}$"
    ],
    0,
    "Photon energy for Source 1: $E_1 = \\frac{1240}{300} \\approx 4.13\\text{ eV}$.\nPhoton energy for Source 2: $E_2 = \\frac{1240}{500} = 2.48\\text{ eV}$.\nSince stopping potential is determined by the most energetic photoelectrons:\n$$K_{\\max} = E_1 - \\phi = 4.13\\text{ eV} - 2.0\\text{ eV} = 2.13\\text{ eV}$$\nThus, the stopping potential is $V_0 = 2.13\\text{ V}$, irrespective of the higher intensity of Source 2.",
    "Medium"
)

# Q41
add_q(
    "Photoelectric effect",
    "Light from a hydrogen discharge tube falls on a cathode of work function $2.28\\text{ eV}$. Which transition of the hydrogen atom will produce photoelectrons with the maximum kinetic energy?",
    [
        "$n = 2 \\to n = 1$",
        "$n = 3 \\to n = 2$",
        "$n = 4 \\to n = 2$",
        "$n = 4 \\to n = 3$"
    ],
    0,
    "The photon energy emitted in a hydrogen transition is given by:\n$$\\Delta E = 13.6\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)\\text{ eV}$$\nFor $n = 2 \\to 1$: $\\Delta E = 13.6\\left(1 - \\frac{1}{4}\\right) = 10.2\\text{ eV}$.\nFor $n = 3 \\to 2$: $\\Delta E = 13.6\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 1.89\\text{ eV} < \\phi$ (cannot cause photoemission).\nFor $n = 4 \\to 2$: $\\Delta E = 2.55\\text{ eV}$.\nThus, $n = 2 \\to 1$ produces the photon with the greatest energy ($10.2\\text{ eV}$), yielding the maximum kinetic energy $K_{\\max} = 10.2 - 2.28 = 7.92\\text{ eV}$.",
    "Medium"
)

# Q42
add_q(
    "Photoelectric effect",
    "If the frequency of light incident on a photosensitive plate is doubled, how do the stopping potential $V_0$ and the saturation current $i_s$ change (assuming constant power of incident light)?",
    [
        "$V_0$ more than doubles, $i_s$ is halved",
        "$V_0$ doubles, $i_s$ remains unchanged",
        "$V_0$ increases by less than double, $i_s$ doubles",
        "$V_0$ more than doubles, $i_s$ remains unchanged"
    ],
    0,
    "1) Stopping potential: $V_0' = 2V_0 + \\phi/e > 2V_0$ (more than doubles).\n2) If power $P$ is constant, the number of incident photons per second is $N = P / (h\\nu)$. Doubling the frequency halves the number of photons incident per second, which halves the number of emitted electrons, and hence halves the saturation current $i_s$.",
    "Hard"
)

# Q43
add_q(
    "Photoelectric effect",
    "In a photoelectric cell, the stopping potential is measured for three different frequencies $\\nu_A < \\nu_B < \\nu_C$ of incident light. If the stopping potentials are $V_A, V_B, V_C$, then:",
    [
        "$V_C > V_B > V_A$",
        "$V_A > V_B > V_C$",
        "$V_A = V_B = V_C$",
        "$V_B > V_C > V_A$"
    ],
    0,
    "The stopping potential is related to frequency by $V_0 = \\frac{h}{e}\\nu - \\frac{\\phi}{e}$. Since the slope $\\frac{h}{e} > 0$, higher frequency produces higher maximum kinetic energy and hence higher stopping potential. Therefore, $V_C > V_B > V_A$.",
    "Easy"
)

# Q44
add_q(
    "Photoelectric effect",
    "A metal surface emits photoelectrons when illuminated with green light but not with yellow light. Which of the following colors of light will definitely cause photoelectric emission?",
    [
        "Blue light",
        "Orange light",
        "Red light",
        "Infrared light"
    ],
    0,
    "The visible spectrum in order of increasing frequency is: Red < Orange < Yellow < Green < Blue < Indigo < Violet.\nSince yellow does not cause emission but green does, the threshold frequency lies between yellow and green. Any color with frequency higher than green (such as blue, violet, ultraviolet) will definitely cause photoelectric emission.",
    "Easy"
)

# Q45
add_q(
    "Photoelectric effect",
    "A beam of light of wavelength $400\\text{ nm}$ and power $1.55\\text{ mW}$ falls normally on a photocathode of work function $2.0\\text{ eV}$. If each photon has a $10\\%$ probability of ejecting an electron, what is the saturation current? (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$, $e = 1.6 \\times 10^{-19}\\text{ C}$)",
    [
        "$50\\text{ }\\mu\\text{A}$",
        "$25\\text{ }\\mu\\text{A}$",
        "$100\\text{ }\\mu\\text{A}$",
        "$10\\text{ }\\mu\\text{A}$"
    ],
    0,
    "Energy of each photon:\n$$E = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{400\\text{ nm}} = 3.1\\text{ eV} = 3.1 \\times 1.6 \\times 10^{-19}\\text{ J} = 4.96 \\times 10^{-19}\\text{ J}$$\nNumber of incident photons per second:\n$$n_p = \\frac{P}{E} = \\frac{1.55 \\times 10^{-3}\\text{ W}}{4.96 \\times 10^{-19}\\text{ J}} = 3.125 \\times 10^{15}\\text{ s}^{-1}$$\nNumber of electrons emitted per second:\n$$n_e = 0.10 \\times 3.125 \\times 10^{15} = 3.125 \\times 10^{14}\\text{ s}^{-1}$$\nSaturation current:\n$$i = n_e e = 3.125 \\times 10^{14} \\times 1.6 \\times 10^{-19}\\text{ C} = 5.0 \\times 10^{-5}\\text{ A} = 50\\text{ }\\mu\\text{A}$$",
    "Medium"
)

# ==============================================================================
# SUBTOPIC 2: de Broglie wavelength (45 Questions)
# ==============================================================================

# Q46
add_q(
    "de Broglie wavelength",
    "The de Broglie wavelength of an electron accelerated from rest through a potential difference of $100\\text{ V}$ is approximately:",
    [
        "$0.123\\text{ nm}$",
        "$0.246\\text{ nm}$",
        "$1.227\\text{ nm}$",
        "$0.012\\text{ nm}$"
    ],
    0,
    "The de Broglie wavelength of an electron accelerated through potential difference $V$ is:\n$$\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm}$$\nFor $V = 100\\text{ V}$:\n$$\\lambda = \\frac{1.227}{\\sqrt{100}} = \\frac{1.227}{10} = 0.1227\\text{ nm} \\approx 0.123\\text{ nm}$$",
    "Easy"
)

# Q47
add_q(
    "de Broglie wavelength",
    "A proton and an $\\alpha$-particle are accelerated from rest through the same potential difference $V$. The ratio of their de Broglie wavelengths $\\lambda_p : \\lambda_\\alpha$ is:",
    [
        "$2\\sqrt{2} : 1$",
        "$1 : 2\\sqrt{2}$",
        "$4 : 1$",
        "$2 : 1$"
    ],
    0,
    "The de Broglie wavelength for a particle of mass $m$ and charge $q$ accelerated through potential $V$ is:\n$$\\lambda = \\frac{h}{\\sqrt{2mqV}} \\propto \\frac{1}{\\sqrt{mq}}$$\nFor a proton, $m_p = m, q_p = e$.\nFor an $\\alpha$-particle, $m_\\alpha = 4m, q_\\alpha = 2e$.\n$$\\frac{\\lambda_p}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha q_\\alpha}{m_p q_p}} = \\sqrt{\\frac{4m \\times 2e}{m \\times e}} = \\sqrt{8} = 2\\sqrt{2} : 1$$",
    "Medium"
)

# Q48
add_q(
    "de Broglie wavelength",
    "If an electron and a proton have the same kinetic energy, the ratio of their de Broglie wavelengths $\\lambda_e / \\lambda_p$ is equal to: (where $m_p$ and $m_e$ are masses of proton and electron)",
    [
        "$\\sqrt{\\frac{m_p}{m_e}}$",
        "$\\sqrt{\\frac{m_e}{m_p}}$",
        "$\\frac{m_p}{m_e}$",
        "$1$"
    ],
    0,
    "The de Broglie wavelength in terms of kinetic energy $K$ is:\n$$\\lambda = \\frac{h}{\\sqrt{2mK}}$$\nSince both have the same kinetic energy $K$:\n$$\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}}$$",
    "Easy"
)

# Q49
add_q(
    "de Broglie wavelength",
    "If an electron and a photon each have a wavelength of $1.00\\text{ nm}$, the ratio of their momenta $p_e / p_{\\text{photon}}$ is:",
    [
        "$1$",
        "$2$",
        "$0.5$",
        "$\\sqrt{2}$"
    ],
    0,
    "By the de Broglie relation, momentum is uniquely determined by wavelength:\n$$p = \\frac{h}{\\lambda}$$\nSince both have the exact same wavelength $\\lambda = 1.00\\text{ nm}$, their momenta must be equal:\n$$\\frac{p_e}{p_{\\text{photon}}} = 1$$",
    "Easy"
)

# Q50
add_q(
    "de Broglie wavelength",
    "An electron and a photon each have an energy of $100\\text{ eV}$. The ratio of the de Broglie wavelength of the electron to that of the photon is: (Take $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, $c = 3 \\times 10^8\\text{ m/s}$)",
    [
        "$\\frac{1}{c}\\sqrt{\\frac{E}{2m_e}}$",
        "$c\\sqrt{\\frac{2m_e}{E}}$",
        "$\\frac{E}{2m_e c^2}$",
        "$\\sqrt{\\frac{2m_e c^2}{E}}$"
    ],
    0,
    "For the electron:\n$$\\lambda_e = \\frac{h}{\\sqrt{2m_e E}}$$\nFor the photon:\n$$\\lambda_{\\text{photon}} = \\frac{hc}{E}$$\nTaking the ratio:\n$$\\frac{\\lambda_e}{\\lambda_{\\text{photon}}} = \\frac{h/\\sqrt{2m_e E}}{hc/E} = \\frac{E}{c\\sqrt{2m_e E}} = \\frac{1}{c}\\sqrt{\\frac{E}{2m_e}}$$",
    "Medium"
)

# Q51
add_q(
    "de Broglie wavelength",
    "The kinetic energy of a particle is increased by $300\\%$. The percentage decrease in its de Broglie wavelength is:",
    [
        "$50\\%$",
        "$75\\%$",
        "$25\\%$",
        "$100\\%$"
    ],
    0,
    "The de Broglie wavelength is $\\lambda \\propto \\frac{1}{\\sqrt{K}}$.\nIf $K$ increases by $300\\%$, the new kinetic energy is:\n$$K' = K + 3K = 4K$$\nThe new wavelength is:\n$$\\lambda' = \\frac{\\lambda}{\\sqrt{4}} = \\frac{\\lambda}{2}$$\nThe percentage decrease is:\n$$\\frac{\\lambda - \\lambda'}{\\lambda} \\times 100\\% = \\frac{\\lambda - 0.5\\lambda}{\\lambda} \\times 100\\% = 50\\%$$",
    "Medium"
)

# Q52
add_q(
    "de Broglie wavelength",
    "The de Broglie wavelength of a thermal neutron at temperature $T$ (in Kelvin) is proportional to:",
    [
        "$T^{-1/2}$",
        "$T^{1/2}$",
        "$T^{-1}$",
        "$T$"
    ],
    0,
    "The average thermal kinetic energy of a neutron in thermal equilibrium at temperature $T$ is $K = \\frac{3}{2}k_B T$. Therefore, its de Broglie wavelength is:\n$$\\lambda = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{3m k_B T}} \\propto T^{-1/2}$$",
    "Easy"
)

# Q53
add_q(
    "de Broglie wavelength",
    "A particle of mass $m$ is moving in a horizontal circle of radius $r$ under a central force $F = -\\frac{k}{r}$. The de Broglie wavelength of the particle is:",
    [
        "$\\lambda = \\frac{h}{\\sqrt{mk}}$",
        "$\\lambda = \\frac{h}{\\sqrt{2mk}}$",
        "$\\lambda = \\frac{h}{r\\sqrt{mk}}$",
        "$\\lambda = \\frac{h}{\\sqrt{mkr}}$"
    ],
    0,
    "For circular motion under central force of magnitude $k/r$:\n$$\\frac{mv^2}{r} = \\frac{k}{r} \\implies mv^2 = k$$\nMomentum of the particle:\n$$p = mv = \\sqrt{m(mv^2)} = \\sqrt{mk}$$\nTherefore, the de Broglie wavelength is:\n$$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{mk}}$$",
    "Hard"
)

# Q54
add_q(
    "de Broglie wavelength",
    "The de Broglie wavelength of an electron in the first Bohr orbit of a hydrogen atom ($r_1 = 0.53\\text{ \\AA}$) is:",
    [
        "$3.33\\text{ \\AA}$",
        "$0.53\\text{ \\AA}$",
        "$1.06\\text{ \\AA}$",
        "$6.66\\text{ \\AA}$"
    ],
    0,
    "According to de Broglie's standing wave condition for Bohr orbits:\n$$2\\pi r_n = n\\lambda$$\nFor the first orbit ($n = 1$):\n$$\\lambda = 2\\pi r_1 = 2 \\times 3.1416 \\times 0.53\\text{ \\AA} \\approx 3.33\\text{ \\AA}$$",
    "Medium"
)

# Q55
add_q(
    "de Broglie wavelength",
    "A proton, a deuteron, and an $\\alpha$-particle have the same kinetic energy. Their de Broglie wavelengths $\\lambda_p, \\lambda_d, \\lambda_\\alpha$ are in the ratio:",
    [
        "$2 : \\sqrt{2} : 1$",
        "$1 : \\sqrt{2} : 2$",
        "$4 : 2 : 1$",
        "$1 : 2 : 4$"
    ],
    0,
    "For constant kinetic energy:\n$$\\lambda = \\frac{h}{\\sqrt{2mK}} \\propto \\frac{1}{\\sqrt{m}}$$\nMasses: $m_p = m, m_d = 2m, m_\\alpha = 4m$.\n$$\\lambda_p : \\lambda_d : \\lambda_\\alpha = \\frac{1}{\\sqrt{1}} : \\frac{1}{\\sqrt{2}} : \\frac{1}{\\sqrt{4}} = 1 : \\frac{1}{\\sqrt{2}} : \\frac{1}{2} = 2 : \\sqrt{2} : 1$$",
    "Medium"
)

# Q56
add_q(
    "de Broglie wavelength",
    "An electron moves along a circular path of radius $r$ in a uniform magnetic field $B$. The de Broglie wavelength of the electron is given by:",
    [
        "$\\lambda = \\frac{h}{eBr}$",
        "$\\lambda = \\frac{eBr}{h}$",
        "$\\lambda = \\frac{h}{\\sqrt{2eBr}}$",
        "$\\lambda = \\frac{2\\pi r}{eB}$"
    ],
    0,
    "For an electron moving in a magnetic field, the magnetic Lorentz force provides the centripetal force:\n$$\\frac{mv^2}{r} = evB \\implies p = mv = eBr$$\nThe de Broglie wavelength is:\n$$\\lambda = \\frac{h}{p} = \\frac{h}{eBr}$$",
    "Easy"
)

# Q57
add_q(
    "de Broglie wavelength",
    "Two particles of masses $m_1$ and $m_2$ have equal de Broglie wavelengths. The ratio of their kinetic energies $K_1 / K_2$ is:",
    [
        "$m_2 / m_1$",
        "$m_1 / m_2$",
        "$\\sqrt{m_2 / m_1}$",
        "$\\sqrt{m_1 / m_2}$"
    ],
    0,
    "Equal de Broglie wavelengths imply equal momenta: $p_1 = p_2 = p$.\nKinetic energy is given by $K = \\frac{p^2}{2m}$.\n$$\\frac{K_1}{K_2} = \\frac{p^2 / (2m_1)}{p^2 / (2m_2)} = \\frac{m_2}{m_1}$$",
    "Easy"
)

# Q58
add_q(
    "de Broglie wavelength",
    "If the momentum of a particle is increased by $100\\%$, its de Broglie wavelength changes by:",
    [
        "Decreases by $50\\%$",
        "Increases by $100\\%$",
        "Decreases by $100\\%$",
        "Decreases by $25\\%$"
    ],
    0,
    "The de Broglie wavelength is $\\lambda = \\frac{h}{p}$.\nWhen momentum is doubled ($p' = 2p$):\n$$\\lambda' = \\frac{h}{2p} = \\frac{\\lambda}{2}$$\nThe fractional change is:\n$$\\frac{\\lambda' - \\lambda}{\\lambda} = -\\frac{1}{2} = -50\\%$$\nThus, it decreases by $50\\%$.",
    "Easy"
)

# Q59
add_q(
    "de Broglie wavelength",
    "A ball of mass $0.15\\text{ kg}$ is thrown with a velocity of $40\\text{ m/s}$. Its de Broglie wavelength is: (Take $h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)",
    [
        "$1.1 \\times 10^{-34}\\text{ m}$",
        "$2.2 \\times 10^{-34}\\text{ m}$",
        "$4.4 \\times 10^{-34}\\text{ m}$",
        "$8.8 \\times 10^{-34}\\text{ m}$"
    ],
    0,
    "Momentum of the ball:\n$$p = mv = 0.15\\text{ kg} \\times 40\\text{ m/s} = 6.0\\text{ kg}\\cdot\\text{m/s}$$\nde Broglie wavelength:\n$$\\lambda = \\frac{h}{p} = \\frac{6.63 \\times 10^{-34}}{6.0} \\approx 1.1 \\times 10^{-34}\\text{ m}$$\nThis explains why the wave nature of macroscopic objects cannot be observed.",
    "Easy"
)

# Q60
add_q(
    "de Broglie wavelength",
    "The de Broglie wavelength of an electron having kinetic energy equal to the energy of a photon of wavelength $500\\text{ nm}$ is: (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$, $m_e = 9.1 \\times 10^{-31}\\text{ kg}$)",
    [
        "$0.78\\text{ nm}$",
        "$0.39\\text{ nm}$",
        "$1.56\\text{ nm}$",
        "$500\\text{ nm}$"
    ],
    0,
    "Energy of the photon:\n$$E = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{500\\text{ nm}} = 2.48\\text{ eV}$$\nSince the electron's kinetic energy is $K = 2.48\\text{ eV}$, it is equivalent to being accelerated through $V = 2.48\\text{ V}$.\n$$\\lambda_e = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{1.227}{\\sqrt{2.48}} = \\frac{1.227}{1.575} \\approx 0.78\\text{ nm}$$",
    "Medium"
)

# Q61
add_q(
    "de Broglie wavelength",
    "A particle of mass $M$ at rest decays into two particles of masses $m_1$ and $m_2$ having non-zero velocities. The ratio of their de Broglie wavelengths $\\lambda_1 / \\lambda_2$ is:",
    [
        "$1$",
        "$m_1 / m_2$",
        "$m_2 / m_1$",
        "$\\sqrt{m_1 / m_2}$"
    ],
    0,
    "By conservation of linear momentum, the total momentum before decay is zero. Therefore, the two fragments must have equal and opposite momenta:\n$$\\vec{p}_1 + \\vec{p}_2 = 0 \\implies |\\vec{p}_1| = |\\vec{p}_2| = p$$\nSince de Broglie wavelength is $\\lambda = \\frac{h}{p}$, both particles have the exact same de Broglie wavelength, so $\\lambda_1 / \\lambda_2 = 1$.",
    "Medium"
)

# Q62
add_q(
    "de Broglie wavelength",
    "An alpha particle and a proton are accelerated through potential differences of $V_\\alpha$ and $V_p$ respectively such that their de Broglie wavelengths are equal. The ratio $V_p / V_\\alpha$ is:",
    [
        "$8$",
        "$4$",
        "$2$",
        "$1$"
    ],
    0,
    "Equal de Broglie wavelengths imply:\n$$\\lambda_p = \\lambda_\\alpha \\implies \\frac{h}{\\sqrt{2m_p q_p V_p}} = \\frac{h}{\\sqrt{2m_\\alpha q_\\alpha V_\\alpha}}$$\n$$m_p q_p V_p = m_\\alpha q_\\alpha V_\\alpha$$\nGiven $m_\\alpha = 4m_p$ and $q_\\alpha = 2q_p$:\n$$m_p q_p V_p = (4m_p)(2q_p) V_\\alpha = 8 m_p q_p V_\\alpha \\implies \\frac{V_p}{V_\\alpha} = 8$$",
    "Medium"
)

# Q63
add_q(
    "de Broglie wavelength",
    "The de Broglie wavelength of an atom of helium at temperature $0^\\circ\\text{C}$ is $\\lambda_{\\text{He}}$. The ratio of the de Broglie wavelength of helium to neon ($m_{\\text{Ne}} \\approx 5 m_{\\text{He}}$) at the same temperature is:",
    [
        "$\\sqrt{5}$",
        "$5$",
        "$1/\\sqrt{5}$",
        "$1/5$"
    ],
    0,
    "The de Broglie wavelength of gas atoms at temperature $T$ is:\n$$\\lambda = \\frac{h}{\\sqrt{3mk_B T}} \\propto \\frac{1}{\\sqrt{m}}$$\nTherefore:\n$$\\frac{\\lambda_{\\text{He}}}{\\lambda_{\\text{Ne}}} = \\sqrt{\\frac{m_{\\text{Ne}}}{m_{\\text{He}}}} = \\sqrt{5}$$",
    "Easy"
)

# Q64
add_q(
    "de Broglie wavelength",
    "A charged particle of mass $m$ and charge $q$ is accelerated through a potential difference $V$. If its velocity is relativistic, its de Broglie wavelength is given by:",
    [
        "$\\lambda = \\frac{hc}{\\sqrt{qV(qV + 2mc^2)}}$",
        "$\\lambda = \\frac{h}{\\sqrt{2mqV}}$",
        "$\\lambda = \\frac{hc}{qV + mc^2}$",
        "$\\lambda = \\frac{hc}{\\sqrt{qV(qV - 2mc^2)}}$"
    ],
    0,
    "In relativistic mechanics, total energy is $E = K + mc^2 = qV + mc^2$.\nAlso, $E^2 = p^2 c^2 + m^2 c^4$:\n$$(qV + mc^2)^2 = p^2 c^2 + m^2 c^4$$\n$$(qV)^2 + 2qV mc^2 + m^2 c^4 = p^2 c^2 + m^2 c^4$$\n$$p^2 c^2 = qV(qV + 2mc^2) \\implies p = \\frac{\\sqrt{qV(qV + 2mc^2)}}{c}$$\nThus, the de Broglie wavelength is:\n$$\\lambda = \\frac{h}{p} = \\frac{hc}{\\sqrt{qV(qV + 2mc^2)}}$$",
    "Hard"
)

# Q65
add_q(
    "de Broglie wavelength",
    "A particle of mass $m$ has a velocity $v$. If another particle of mass $2m$ has the same de Broglie wavelength, its velocity must be:",
    [
        "$v/2$",
        "$v$",
        "$2v$",
        "$v/4$"
    ],
    0,
    "Equal de Broglie wavelength means equal momentum:\n$$p_1 = p_2 \\implies m_1 v_1 = m_2 v_2$$\n$$m v = (2m) v_2 \\implies v_2 = \\frac{v}{2}$$",
    "Easy"
)

# Q66
add_q(
    "de Broglie wavelength",
    "An electron is projected with velocity $\\vec{v} = v_0 \\hat{i}$ into a region of uniform electric field $\\vec{E} = -E_0 \\hat{i}$. The de Broglie wavelength of the electron after time $t$ is: (Take $\\lambda_0 = h/(mv_0)$)",
    [
        "$\\lambda = \\frac{\\lambda_0}{1 + \\frac{eE_0 t}{mv_0}}$",
        "$\\lambda = \\lambda_0\\left(1 + \\frac{eE_0 t}{mv_0}\\right)$",
        "$\\lambda = \\frac{\\lambda_0}{1 - \\frac{eE_0 t}{mv_0}}$",
        "$\\lambda = \\lambda_0\\sqrt{1 + \\frac{eE_0 t}{mv_0}}$"
    ],
    0,
    "The force on the electron is $\\vec{F} = -e\\vec{E} = -e(-E_0\\hat{i}) = eE_0\\hat{i}$.\nThe acceleration is $a = \\frac{eE_0}{m}$ in the positive $x$-direction.\nVelocity at time $t$:\n$$v(t) = v_0 + at = v_0 + \\frac{eE_0 t}{m} = v_0\\left(1 + \\frac{eE_0 t}{mv_0}\\right)$$\nMomentum at time $t$ is $p(t) = mv(t) = mv_0\\left(1 + \\frac{eE_0 t}{mv_0}\\right)$.\nTherefore:\n$$\\lambda(t) = \\frac{h}{p(t)} = \\frac{h}{mv_0\\left(1 + \\frac{eE_0 t}{mv_0}\\right)} = \\frac{\\lambda_0}{1 + \\frac{eE_0 t}{mv_0}}$$",
    "Hard"
)

# Q67
add_q(
    "de Broglie wavelength",
    "The de Broglie wavelength of a neutron of energy $0.04\\text{ eV}$ is approximately: (Take $m_n = 1.67 \\times 10^{-27}\\text{ kg}$, $h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$)",
    [
        "$0.143\\text{ nm}$",
        "$0.286\\text{ nm}$",
        "$0.071\\text{ nm}$",
        "$1.43\\text{ nm}$"
    ],
    0,
    "Energy in Joules:\n$$E = 0.04 \\times 1.6 \\times 10^{-19} = 6.4 \\times 10^{-21}\\text{ J}$$\nMomentum:\n$$p = \\sqrt{2m_n E} = \\sqrt{2 \\times 1.67 \\times 10^{-27} \\times 6.4 \\times 10^{-21}} = \\sqrt{2.138 \\times 10^{-47}} \\approx 4.62 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$$\nde Broglie wavelength:\n$$\\lambda = \\frac{h}{p} = \\frac{6.63 \\times 10^{-34}}{4.62 \\times 10^{-24}} \\approx 1.43 \\times 10^{-10}\\text{ m} = 0.143\\text{ nm}$$",
    "Medium"
)

# Q68
add_q(
    "de Broglie wavelength",
    "A proton and an electron have the same de Broglie wavelength. Which particle moves faster and by what factor? (where $m_p \\approx 1840 m_e$)",
    [
        "Electron moves faster by a factor of $1840$",
        "Proton moves faster by a factor of $1840$",
        "Electron moves faster by a factor of $\\sqrt{1840}$",
        "Both move with the same speed"
    ],
    0,
    "Since their wavelengths are equal, their momenta are equal:\n$$p_e = p_p \\implies m_e v_e = m_p v_p \\implies \\frac{v_e}{v_p} = \\frac{m_p}{m_e} \\approx 1840$$\nThus, the lighter electron moves 1840 times faster than the proton.",
    "Easy"
)

# Q69
add_q(
    "de Broglie wavelength",
    "An electron of mass $m$ with an initial velocity $\\vec{v} = v_0\\hat{i}$ enters an electric field $\\vec{E} = E_0\\hat{j}$ at $t = 0$. If $\\lambda_0$ is its initial de Broglie wavelength, then its de Broglie wavelength at time $t$ is:",
    [
        "$\\frac{\\lambda_0}{\\sqrt{1 + \\frac{e^2 E_0^2 t^2}{m^2 v_0^2}}}$",
        "$\\lambda_0\\sqrt{1 + \\frac{e^2 E_0^2 t^2}{m^2 v_0^2}}$",
        "$\\frac{\\lambda_0}{1 + \\frac{e E_0 t}{m v_0}}$",
        "$\\lambda_0\\left(1 + \\frac{e E_0 t}{m v_0}\\right)$"
    ],
    0,
    "At time $t$:\n$$v_x = v_0, \\quad v_y = -\\frac{eE_0}{m}t$$\nTotal speed:\n$$v(t) = \\sqrt{v_x^2 + v_y^2} = \\sqrt{v_0^2 + \\frac{e^2 E_0^2 t^2}{m^2}} = v_0\\sqrt{1 + \\frac{e^2 E_0^2 t^2}{m^2 v_0^2}}$$\nSince momentum $p(t) = m v(t)$:\n$$\\lambda(t) = \\frac{h}{m v(t)} = \\frac{h}{m v_0 \\sqrt{1 + \\frac{e^2 E_0^2 t^2}{m^2 v_0^2}}} = \\frac{\\lambda_0}{\\sqrt{1 + \\frac{e^2 E_0^2 t^2}{m^2 v_0^2}}}$$",
    "Hard"
)

# Q70
add_q(
    "de Broglie wavelength",
    "What is the ratio of the de Broglie wavelength of an electron in the second Bohr orbit to that in the third Bohr orbit of a hydrogen atom?",
    [
        "$2 : 3$",
        "$3 : 2$",
        "$4 : 9$",
        "$9 : 4$"
    ],
    0,
    "For the $n$-th Bohr orbit, the velocity is $v_n \\propto \\frac{1}{n}$.\nTherefore, the momentum is $p_n \\propto \\frac{1}{n}$, and the de Broglie wavelength is:\n$$\\lambda_n = \\frac{h}{p_n} \\propto n$$\nHence:\n$$\\frac{\\lambda_2}{\\lambda_3} = \\frac{2}{3}$$",
    "Medium"
)

# Q71
add_q(
    "de Broglie wavelength",
    "If the radius of the first Bohr orbit is $a_0$, the de Broglie wavelength of the electron in the $n$-th orbit is:",
    [
        "$\\frac{2\\pi a_0 n^2}{n} = 2\\pi n a_0$",
        "$\\frac{2\\pi a_0}{n}$",
        "$2\\pi n^2 a_0$",
        "$\\frac{a_0}{n}$"
    ],
    0,
    "The radius of the $n$-th Bohr orbit is $r_n = n^2 a_0$.\nBy Bohr-de Broglie quantization:\n$$2\\pi r_n = n\\lambda_n \\implies \\lambda_n = \\frac{2\\pi r_n}{n} = \\frac{2\\pi (n^2 a_0)}{n} = 2\\pi n a_0$$",
    "Medium"
)

# Q72
add_q(
    "de Broglie wavelength",
    "A photon and an electron possess the same momentum. If $E_p$ is the energy of the photon and $E_e$ is the kinetic energy of the electron, then $E_p / E_e$ is: (where $v$ is the velocity of the electron)",
    [
        "$\\frac{2c}{v}$",
        "$\\frac{c}{v}$",
        "$\\frac{v}{2c}$",
        "$\\frac{c}{2v}$"
    ],
    0,
    "Since they have the same momentum $p$:\nEnergy of photon: $E_p = pc$.\nKinetic energy of electron: $E_e = \\frac{p^2}{2m} = \\frac{p(mv)}{2m} = \\frac{1}{2}pv$.\nRatio:\n$$\\frac{E_p}{E_e} = \\frac{pc}{\\frac{1}{2}pv} = \\frac{2c}{v}$$",
    "Medium"
)

# Q73
add_q(
    "de Broglie wavelength",
    "When the velocity of an electron increases, its de Broglie wavelength:",
    [
        "Decreases",
        "Increases",
        "Remains unchanged",
        "First increases then decreases"
    ],
    0,
    "The de Broglie wavelength is $\\lambda = \\frac{h}{mv}$. As velocity $v$ increases, the momentum increases, and consequently the de Broglie wavelength decreases inversely with velocity.",
    "Easy"
)

# Q74
add_q(
    "de Broglie wavelength",
    "A deuteron and an $\\alpha$-particle are accelerated from rest through the same potential difference. If $\\lambda_d$ and $\\lambda_\\alpha$ are their respective de Broglie wavelengths, then:",
    [
        "$\\lambda_d = 2\\lambda_\\alpha$",
        "$\\lambda_\\alpha = 2\\lambda_d$",
        "$\\lambda_d = \\sqrt{2}\\lambda_\\alpha$",
        "$\\lambda_\\alpha = \\sqrt{2}\\lambda_d$"
    ],
    0,
    "Using $\\lambda = \\frac{h}{\\sqrt{2mqV}}$:\n$$\\frac{\\lambda_d}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha q_\\alpha}{m_d q_d}} = \\sqrt{\\frac{4m \\times 2e}{2m \\times e}} = \\sqrt{4} = 2$$\nTherefore, $\\lambda_d = 2\\lambda_\\alpha$.",
    "Medium"
)

# Q75
add_q(
    "de Broglie wavelength",
    "The de Broglie wavelength of an electron accelerated through a potential difference of $V$ is $\\lambda$. What additional potential difference must be applied so that its de Broglie wavelength becomes $\\lambda / 2$?",
    [
        "$3V$",
        "$4V$",
        "$2V$",
        "$V$"
    ],
    0,
    "We know $\\lambda \\propto \\frac{1}{\\sqrt{V}}$.\nTo reduce wavelength by a factor of 2, the total potential must become 4 times the initial value:\n$$V' = 4V$$\nThe additional potential difference required is:\n$$\\Delta V = V' - V = 4V - V = 3V$$",
    "Medium"
)

# Q76
add_q(
    "de Broglie wavelength",
    "Find the ratio of the de Broglie wavelength of a molecule of hydrogen gas to that of helium gas at temperatures $27^\\circ\\text{C}$ and $127^\\circ\\text{C}$ respectively. (Take molar mass of $\\text{H}_2 = 2\\text{ g/mol}$, $\\text{He} = 4\\text{ g/mol}$)",
    [
        "$\\sqrt{\\frac{8}{3}}$",
        "$\\sqrt{\\frac{3}{8}}$",
        "$\\frac{4}{3}$",
        "$\\frac{2}{\\sqrt{3}}$"
    ],
    0,
    "Thermal de Broglie wavelength is $\\lambda = \\frac{h}{\\sqrt{3mk_B T}} \\propto \\frac{1}{\\sqrt{mT}}$.\n$$T_1 = 27 + 273 = 300\\text{ K}, \\quad T_2 = 127 + 273 = 400\\text{ K}$$\n$$\\frac{\\lambda_{\\text{H}_2}}{\\lambda_{\\text{He}}} = \\sqrt{\\frac{m_{\\text{He}} T_2}{m_{\\text{H}_2} T_1}} = \\sqrt{\\frac{4 \\times 400}{2 \\times 300}} = \\sqrt{\\frac{1600}{600}} = \\sqrt{\\frac{8}{3}}$$",
    "Hard"
)

# Q77
add_q(
    "de Broglie wavelength",
    "An electron of mass $m$ is moving with a non-relativistic kinetic energy $K$. Its de Broglie wavelength is $\\lambda$. The kinetic energy of an $\\alpha$-particle having the same de Broglie wavelength $\\lambda$ is: (Take $m_\\alpha = 4m_p \\approx 7360 m_e$)",
    [
        "$K / 7360$",
        "$7360 K$",
        "$K / \\sqrt{7360}$",
        "$\\sqrt{7360} K$"
    ],
    0,
    "Equal de Broglie wavelength means equal momentum $p$. Since kinetic energy is $K = \\frac{p^2}{2m}$, for constant momentum:\n$$K \\propto \\frac{1}{m} \\implies \\frac{K_\\alpha}{K_e} = \\frac{m_e}{m_\\alpha} = \\frac{1}{7360} \\implies K_\\alpha = \\frac{K}{7360}$$",
    "Medium"
)

# Q78
add_q(
    "de Broglie wavelength",
    "A particle of mass $m$ is projected at an angle $\\theta$ with the horizontal with speed $u$. The ratio of its de Broglie wavelength at the point of projection to that at the highest point of its trajectory is:",
    [
        "$\\cos\\theta$",
        "$\\sec\\theta$",
        "$\\sin\\theta$",
        "$1$"
    ],
    0,
    "At projection, speed is $u$, so momentum is $p_0 = mu$, and wavelength is $\\lambda_0 = \\frac{h}{mu}$.\nAt the highest point, vertical velocity is zero, and horizontal velocity is $u\\cos\\theta$, so momentum is $p_H = mu\\cos\\theta$, and wavelength is $\\lambda_H = \\frac{h}{mu\\cos\\theta}$.\nRatio:\n$$\\frac{\\lambda_0}{\\lambda_H} = \\frac{mu\\cos\\theta}{mu} = \\cos\\theta$$",
    "Medium"
)

# Q79
add_q(
    "de Broglie wavelength",
    "An electron is accelerated through a potential difference of $V$ volts. If Planck's constant is $h$, electron mass is $m$, and electronic charge is $e$, the de Broglie wavelength associated with it is:",
    [
        "$\\frac{h}{\\sqrt{2meV}}$",
        "$\\frac{h}{2meV}$",
        "$\\frac{\\sqrt{2meV}}{h}$",
        "$\\frac{2meV}{h}$"
    ],
    0,
    "The kinetic energy gained is $K = eV = \\frac{p^2}{2m} \\implies p = \\sqrt{2meV}$.\nTherefore, the de Broglie wavelength is:\n$$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2meV}}$$",
    "Easy"
)

# Q80
add_q(
    "de Broglie wavelength",
    "The de Broglie wavelength of an electron revolving in the $n = 4$ state of a hydrogen atom is $\\lambda$. The circumference of this orbit is:",
    [
        "$4\\lambda$",
        "$2\\lambda$",
        "$\\lambda / 4$",
        "$16\\lambda$"
    ],
    0,
    "According to de Broglie's hypothesis, a stationary orbit corresponds to an integral number of de Broglie wavelengths fitting along its circumference:\n$$2\\pi r_n = n\\lambda$$\nFor $n = 4$, the circumference is $2\\pi r_4 = 4\\lambda$.",
    "Easy"
)

# Q81
add_q(
    "de Broglie wavelength",
    "Two electrons are moving with kinetic energies in the ratio $1 : 4$. The ratio of their de Broglie wavelengths is:",
    [
        "$2 : 1$",
        "$1 : 2$",
        "$4 : 1$",
        "$1 : 4$"
    ],
    0,
    "Since $\\lambda = \\frac{h}{\\sqrt{2mK}} \\propto \\frac{1}{\\sqrt{K}}$:\n$$\\frac{\\lambda_1}{\\lambda_2} = \\sqrt{\\frac{K_2}{K_1}} = \\sqrt{\\frac{4}{1}} = 2 : 1$$",
    "Easy"
)

# Q82
add_q(
    "de Broglie wavelength",
    "A proton of mass $m$ and charge $e$ is accelerated from rest through a potential difference $V$. The de Broglie wavelength of the proton is given by:",
    [
        "$\\lambda = \\frac{0.286}{\\sqrt{V}}\\text{ \\AA}$",
        "$\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ \\AA}$",
        "$\\lambda = \\frac{0.101}{\\sqrt{V}}\\text{ \\AA}$",
        "$\\lambda = \\frac{0.073}{\\sqrt{V}}\\text{ \\AA}$"
    ],
    0,
    "For a proton, $m_p \\approx 1836 m_e$.\n$$\\lambda_p = \\frac{1.227}{\\sqrt{1836}\\sqrt{V}}\\text{ nm} = \\frac{0.0286}{\\sqrt{V}}\\text{ nm} = \\frac{0.286}{\\sqrt{V}}\\text{ \\AA}$$",
    "Medium"
)

# Q83
add_q(
    "de Broglie wavelength",
    "A particle of mass $m$ falls from rest from a height $h$ in a uniform gravitational field $g$. Its de Broglie wavelength as a function of the distance $y$ fallen is proportional to:",
    [
        "$y^{-1/2}$",
        "$y^{1/2}$",
        "$y^{-1}$",
        "$y$"
    ],
    0,
    "After falling through a distance $y$, the velocity is $v = \\sqrt{2gy}$.\nMomentum is $p = m\\sqrt{2gy}$.\nde Broglie wavelength:\n$$\\lambda = \\frac{h}{p} = \\frac{h}{m\\sqrt{2gy}} \\propto y^{-1/2}$$",
    "Easy"
)

# Q84
add_q(
    "de Broglie wavelength",
    "If the de Broglie wavelength of a particle is equal to the distance traveled by it in one second, then its velocity is:",
    [
        "$\\sqrt{\\frac{h}{m}}$",
        "$\\frac{h}{m}$",
        "$\\sqrt{\\frac{2h}{m}}$",
        "$\\frac{h}{2m}$"
    ],
    0,
    "Distance traveled in one second is $s = v \\times 1 = v$.\nGiven $\\lambda = v$:\n$$\\frac{h}{mv} = v \\implies v^2 = \\frac{h}{m} \\implies v = \\sqrt{\\frac{h}{m}}$$",
    "Medium"
)

# Q85
add_q(
    "de Broglie wavelength",
    "An electron is moving with a speed of $3 \\times 10^7\\text{ m/s}$ ($0.1c$). Its relativistic de Broglie wavelength differs from its non-relativistic calculation by approximately: (Use $\\gamma = 1/\\sqrt{1 - v^2/c^2} \\approx 1 + \\frac{1}{2}\\frac{v^2}{c^2}$)",
    [
        "$0.5\\%$",
        "$1.0\\%$",
        "$5.0\\%$",
        "$0.1\\%$"
    ],
    0,
    "Relativistic momentum is $p_{\\text{rel}} = \\gamma m v$, where $\\gamma = \\left(1 - \\frac{v^2}{c^2}\\right)^{-1/2} \\approx 1 + \\frac{1}{2}\\left(\\frac{0.1c}{c}\\right)^2 = 1 + 0.005 = 1.005$.\nSince $\\lambda_{\\text{rel}} = \\frac{h}{\\gamma m v} = \\frac{\\lambda_{\\text{non-rel}}}{\\gamma} \\approx \\lambda_{\\text{non-rel}}(1 - 0.005)$, the difference is about $0.5\\%$.",
    "Hard"
)

# Q86
add_q(
    "de Broglie wavelength",
    "A neutron collides elastically and head-on with a stationary deuteron. If the initial de Broglie wavelength of the neutron was $\\lambda_0$, the de Broglie wavelength of the deuteron after collision is:",
    [
        "$\\frac{3}{4}\\lambda_0$",
        "$\\frac{4}{3}\\lambda_0$",
        "$\\frac{2}{3}\\lambda_0$",
        "$\\frac{3}{2}\\lambda_0$"
    ],
    0,
    "In an elastic head-on collision between mass $m$ (neutron) with velocity $u$ and stationary mass $2m$ (deuteron), the velocity of the deuteron after collision is:\n$$v_d = \\frac{2m}{m + 2m} u = \\frac{2}{3}u$$\nMomentum of the deuteron after collision:\n$$p_d = (2m) v_d = 2m\\left(\\frac{2}{3}u\\right) = \\frac{4}{3}mu = \\frac{4}{3}p_0$$\nTherefore, the de Broglie wavelength of the deuteron is:\n$$\\lambda_d = \\frac{h}{p_d} = \\frac{h}{\\frac{4}{3}p_0} = \\frac{3}{4}\\frac{h}{p_0} = \\frac{3}{4}\\lambda_0$$",
    "Hard"
)

# Q87
add_q(
    "de Broglie wavelength",
    "The de Broglie wavelength of an electron accelerated through $54\\text{ V}$ (as in the Davisson-Germer experiment) is:",
    [
        "$0.167\\text{ nm}$",
        "$0.123\\text{ nm}$",
        "$0.205\\text{ nm}$",
        "$0.082\\text{ nm}$"
    ],
    0,
    "Using $\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm}$:\n$$\\lambda = \\frac{1.227}{\\sqrt{54}} = \\frac{1.227}{7.348} \\approx 0.167\\text{ nm}$$",
    "Easy"
)

# Q88
add_q(
    "de Broglie wavelength",
    "A macroscopic body of mass $1\\text{ mg}$ has a velocity of $1\\text{ m/s}$. The order of magnitude of its de Broglie wavelength is:",
    [
        "$10^{-28}\\text{ m}$",
        "$10^{-34}\\text{ m}$",
        "$10^{-25}\\text{ m}$",
        "$10^{-20}\\text{ m}$"
    ],
    0,
    "Mass $m = 1\\text{ mg} = 10^{-6}\\text{ kg}$, $v = 1\\text{ m/s}$.\nMomentum $p = mv = 10^{-6}\\text{ kg}\\cdot\\text{m/s}$.\n$$\\lambda = \\frac{h}{p} = \\frac{6.63 \\times 10^{-34}}{10^{-6}} = 6.63 \\times 10^{-28}\\text{ m} \\sim 10^{-28}\\text{ m}$$",
    "Easy"
)

# Q89
add_q(
    "de Broglie wavelength",
    "Two non-relativistic particles have the same momentum. Particle 1 has mass $m_1$ and de Broglie wavelength $\\lambda_1$, while particle 2 has mass $m_2$ and de Broglie wavelength $\\lambda_2$. Then:",
    [
        "$\\lambda_1 = \\lambda_2$",
        "$\\lambda_1 / \\lambda_2 = m_1 / m_2$",
        "$\\lambda_1 / \\lambda_2 = m_2 / m_1$",
        "$\\lambda_1 / \\lambda_2 = \\sqrt{m_1 / m_2}$"
    ],
    0,
    "The de Broglie wavelength is $\\lambda = \\frac{h}{p}$. Since both particles have the same momentum $p$, their wavelengths are strictly equal: $\\lambda_1 = \\lambda_2$, regardless of their masses.",
    "Easy"
)

# Q90
add_q(
    "de Broglie wavelength",
    "An electron is moving with kinetic energy $E$. Its de Broglie wavelength is $\\lambda$. If its kinetic energy is changed to $E/4$, the new de Broglie wavelength will be:",
    [
        "$2\\lambda$",
        "$\\lambda / 2$",
        "$4\\lambda$",
        "$\\lambda / 4$"
    ],
    0,
    "Since $\\lambda \\propto \\frac{1}{\\sqrt{E}}$:\n$$\\lambda' = \\frac{h}{\\sqrt{2m(E/4)}} = 2\\frac{h}{\\sqrt{2mE}} = 2\\lambda$$",
    "Easy"
)

# Balance options for both subtopics
def balance_subtopic(subtopic_name, target_counts):
    sub_qs = [q for q in questions if q["subtopic"] == subtopic_name]
    assert len(sub_qs) == 45, f"Expected 45 questions for {subtopic_name}, got {len(sub_qs)}"
    
    # We want target counts: A:12, B:11, C:11, D:11
    # Rotate options so that correctAnswer matches target
    current_idx = 0
    targets = [0]*12 + [1]*11 + [2]*11 + [3]*11
    
    for i, target in enumerate(targets):
        q = sub_qs[i]
        orig_corr = q["correctAnswer"]
        if orig_corr != target:
            # Swap options so that the correct answer lands at target
            correct_option_text = q["options"][orig_corr]
            target_option_text = q["options"][target]
            q["options"][target] = correct_option_text
            q["options"][orig_corr] = target_option_text
            q["correctAnswer"] = target

balance_subtopic("Photoelectric effect", [12, 11, 11, 11])
balance_subtopic("de Broglie wavelength", [12, 11, 11, 11])

# Save to batch 1
with open("scripts/dnmr/dnmr_batch1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Batch 1 generated successfully! Total questions: {len(questions)}")
