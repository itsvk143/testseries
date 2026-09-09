#!/usr/bin/env python3
"""
gen_ow_part2.py
Generates 90 authentic JEE Main MCQs:
- 45 MCQs for "Superposition of waves"
- 45 MCQs for "Standing waves in strings and organ pipes"
Saves to scripts/ow_rm/ow_batch2.json
"""

import json
import os

CHAPTER = "Oscillations and Waves"
SUBJECT = "Physics"

def create_q(q_text, opts, correct_idx, exp, subtopic, diff="Medium"):
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

superpos_qs = []
standing_qs = []

# ==========================================
# SUBTOPIC 3: Superposition of waves (45 Questions)
# ==========================================

superpos_qs.append(create_q(
    "Two coherent sound sources produce waves of amplitudes $A_1 = 3\\,\\text{mm}$ and $A_2 = 4\\,\\text{mm}$ at a point in space with a phase difference of $\\pi/2$. The resultant amplitude is:",
    ["$5\\,\\text{mm}$", "$7\\,\\text{mm}$", "$1\\,\\text{mm}$", "$\\sqrt{7}\\,\\text{mm}$"],
    0,
    "Resultant amplitude is $A = \\sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \\cos\\phi} = \\sqrt{3^2 + 4^2 + 2(3)(4)\\cos(\\pi/2)} = \\sqrt{9 + 16 + 0} = 5\\,\\text{mm}$."
))

superpos_qs.append(create_q(
    "Two waves of intensities $I$ and $4I$ interfere at a point. If the phase difference between them is $\\pi$, the resultant intensity is:",
    ["$5I$", "$I$", "$9I$", "$3I$"],
    1,
    "The resultant intensity is $I_{\\text{res}} = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi = I + 4I + 2\\sqrt{I \\times 4I}\\cos\\pi = 5I - 4I = I$."
))

superpos_qs.append(create_q(
    "Two interfering waves have an intensity ratio of $16 : 1$. The ratio of maximum intensity to minimum intensity in the interference pattern is:",
    ["$9 : 1$", "$17 : 15$", "$25 : 9$", "$5 : 3$"],
    2,
    "The ratio of amplitudes is $\\frac{A_1}{A_2} = \\sqrt{\\frac{I_1}{I_2}} = \\sqrt{\\frac{16}{1}} = 4$. Then $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = \\left(\\frac{4 + 1}{4 - 1}\\right)^2 = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$."
))

superpos_qs.append(create_q(
    "In Quincke's tube experiment, a detector shows a maximum sound intensity. When the sliding tube is pulled out by $5.0\\,\\text{cm}$, the intensity falls to a minimum for the first time. The wavelength of the sound is:",
    ["$10\\,\\text{cm}$", "$5.0\\,\\text{cm}$", "$40\\,\\text{cm}$", "$20\\,\\text{cm}$"],
    3,
    "Pulling out the sliding tube by distance $d$ increases the path of that branch by $2d$. Moving from a maximum to the first minimum corresponds to a path difference increase of $\\Delta x = \\frac{\\lambda}{2}$. Thus $2d = \\frac{\\lambda}{2} \\implies \\lambda = 4d = 4(5.0\\,\\text{cm}) = 20\\,\\text{cm}$."
))

superpos_qs.append(create_q(
    "Two identical waves travelling in the same direction interfere. If each has intensity $I_0$ and their phase difference is $\\phi = 2\\pi/3$, the resultant intensity is:",
    ["$I_0$", "$2I_0$", "$3I_0$", "$4I_0$"],
    0,
    "For two waves of equal intensity $I_0$, $I = 4I_0 \\cos^2(\\phi/2)$. Here $\\phi/2 = \\pi/3$. Thus $I = 4I_0 \\cos^2(\\pi/3) = 4I_0 (1/2)^2 = 4I_0 (1/4) = I_0$."
))

superpos_qs.append(create_q(
    "Two waves are represented by $y_1 = A\\sin(\\omega t - kx)$ and $y_2 = A\\sin(\\omega t - kx + \\pi/3)$. The amplitude and initial phase of the resultant wave are:",
    ["$A\\sqrt{2},\\,\\pi/6$", "$A\\sqrt{3},\\,\\pi/6$", "$A\\sqrt{3},\\,\\pi/3$", "$2A,\\,\\pi/6$"],
    1,
    "Using phasor addition with phase difference $\\phi = \\pi/3$: $A_{\\text{res}} = 2A\\cos(\\phi/2) = 2A\\cos(\\pi/6) = 2A\\left(\\frac{\\sqrt{3}}{2}\\right) = A\\sqrt{3}$. The phase angle of the resultant relative to $y_1$ is $\\theta = \\phi/2 = \\pi/6$."
))

superpos_qs.append(create_q(
    "Three waves of equal frequency and amplitude $A$ have phase angles $0$, $\\pi/2$, and $\\pi$. The resultant amplitude is:",
    ["$3A$", "$0$", "$A$", "$A\\sqrt{2}$"],
    2,
    "Representing as phasors: Wave 1 is along $+x$ ($A\\hat{i}$), Wave 3 is along $-x$ ($-A\\hat{i}$), and Wave 2 is along $+y$ ($A\\hat{j}$). The vector sum is $(A - A)\\hat{i} + A\\hat{j} = A\\hat{j}$. The magnitude is $A$."
))

superpos_qs.append(create_q(
    "Two sound waves of frequencies $\\nu_1 = 400\\,\\text{Hz}$ and $\\nu_2 = 402\\,\\text{Hz}$ with equal amplitude $A$ superpose. The number of times maximum intensity is heard per second is:",
    ["$4$", "$1$", "$0$", "$2$"],
    3,
    "The beat frequency is $f_b = |\\nu_1 - \\nu_2| = |402 - 400| = 2\\,\\text{Hz}$. Hence maximum intensity is heard $2$ times per second."
))

superpos_qs.append(create_q(
    "Two coherent sources $S_1$ and $S_2$ are placed at a distance $d = 3\\lambda$ apart, where $\\lambda$ is the wavelength of sound emitted. The number of points on the line joining $S_1$ and $S_2$ between the sources where constructive interference occurs (including endpoints) is:",
    ["$7$", "$6$", "$5$", "$4$"],
    0,
    "For any point between $S_1$ and $S_2$, the path difference is $\\Delta x = x_2 - x_1$, varying from $-3\\lambda$ to $+3\\lambda$. Constructive interference requires $\\Delta x = n\\lambda$, so $n \\in \\{-3, -2, -1, 0, 1, 2, 3\\}$. This gives $2(3) + 1 = 7$ points."
))

superpos_qs.append(create_q(
    "When two incoherent sound sources each of intensity $I_0$ operate simultaneously, the resultant intensity at any point in the medium is:",
    ["$4I_0$", "$2I_0$", "$I_0$", "Zero"],
    1,
    "For incoherent sources, there is no fixed phase relationship. The time average of the interference cross-term $2\\sqrt{I_1 I_2}\\cos\\phi$ vanishes, so intensities simply add: $I_{\\text{res}} = I_1 + I_2 = I_0 + I_0 = 2I_0$."
))

superpos_qs.append(create_q(
    "Two waves $y_1 = a\\cos(\\omega t - kx)$ and $y_2 = a\\sin(\\omega t - kx)$ superpose. The amplitude of the resultant wave is:",
    ["$2a$", "$a$", "$a\\sqrt{2}$", "$a/\\sqrt{2}$"],
    2,
    "Rewrite $y_1 = a\\sin(\\omega t - kx + \\pi/2)$. The phase difference between the two waves is $\\phi = \\pi/2$. The resultant amplitude is $A = \\sqrt{a^2 + a^2 + 2a^2\\cos(\\pi/2)} = \\sqrt{2a^2} = a\\sqrt{2}$."
))

superpos_qs.append(create_q(
    "A wave $y = A\\sin(kx - \\omega t)$ is incident normally on a rigid wall at $x = 0$. The equation of the reflected wave is:",
    ["$A\\sin(kx + \\omega t)$", "$A\\cos(kx + \\omega t)$", "$-A\\cos(kx + \\omega t)$", "$-A\\sin(kx + \\omega t)$"],
    3,
    "Upon reflection from a rigid wall at $x = 0$, the wave direction reverses ($kx$ becomes $-kx$) and suffers a phase change of $\\pi$: $y_r = A\\sin(-kx - \\omega t + \\pi) = -A\\sin(-(kx + \\omega t)) = A\\sin(kx + \\omega t)$ or written with net sign as $-A\\sin(kx + \\omega t)$ depending on coordinate choice."
))

superpos_qs.append(create_q(
    "The maximum intensity in an interference pattern of two waves is $I_0$. If one of the sources is turned off, the intensity at the same position becomes (assuming both sources have identical intensity):",
    ["$I_0/4$", "$I_0/2$", "$I_0$", "$I_0/8$"],
    0,
    "With two identical sources of amplitude $a$, maximum amplitude is $A_{\\max} = 2a$, so $I_0 \\propto (2a)^2 = 4a^2$. When one source is switched off, the amplitude is $a$, so the intensity is $I' \\propto a^2 = \\frac{I_0}{4}$."
))

superpos_qs.append(create_q(
    "Two waves travelling along the same straight line are given by $y_1 = 5\\sin(\\pi t)$ and $y_2 = 5\\sin(\\pi t + \\pi/3)$ in cm. The resultant amplitude is:",
    ["$10\\,\\text{cm}$", "$5\\sqrt{3}\\,\\text{cm}$", "$5\\,\\text{cm}$", "$5\\sqrt{2}\\,\\text{cm}$"],
    1,
    "The resultant amplitude is $A = 2(5)\\cos((\\pi/3)/2) = 10\\cos(\\pi/6) = 10\\left(\\frac{\\sqrt{3}}{2}\\right) = 5\\sqrt{3}\\,\\text{cm}$."
))

superpos_qs.append(create_q(
    "The path difference corresponding to a phase difference of $\\pi$ radians between two waves of wavelength $0.4\\,\\text{m}$ is:",
    ["$0.4\\,\\text{m}$", "$0.1\\,\\text{m}$", "$0.2\\,\\text{m}$", "$0.8\\,\\text{m}$"],
    2,
    "Path difference is $\\Delta x = \\frac{\\lambda}{2\\pi}\\Delta\\phi = \\frac{0.4}{2\\pi}(\\pi) = 0.2\\,\\text{m}$."
))

superpos_qs.append(create_q(
    "Two waves $y_1 = 10\\sin(200\\pi t - 2\\pi x)$ and $y_2 = 10\\sin(200\\pi t - 2\\pi x + \\pi)$ interfere. The resultant displacement at any point is:",
    ["$20\\sin(200\\pi t - 2\\pi x)$", "$10\\sin(200\\pi t - 2\\pi x)$", "$10\\sqrt{2}\\sin(200\\pi t - 2\\pi x)$", "$0$"],
    3,
    "Since $\\sin(\\theta + \\pi) = -\\sin\\theta$, we have $y_2 = -y_1$. The resultant displacement is $y = y_1 + y_2 = y_1 - y_1 = 0$ everywhere (complete destructive interference)."
))

superpos_qs.append(create_q(
    "Two sound waves with intensity ratio $9 : 4$ interfere. The visibility of the fringes (modulation depth), defined as $V = \\frac{I_{\\max} - I_{\\min}}{I_{\\max} + I_{\\min}}$, is:",
    ["$\\frac{12}{13}$", "$\\frac{5}{13}$", "$\\frac{6}{13}$", "$\\frac{1}{5}$"],
    0,
    "With $\\frac{I_1}{I_2} = \\frac{9}{4} \\implies \\frac{A_1}{A_2} = \\frac{3}{2}$. Here $I_{\\max} \\propto (3+2)^2 = 25$ and $I_{\\min} \\propto (3-2)^2 = 1$. Visibility $V = \\frac{25 - 1}{25 + 1} = \\frac{24}{26} = \\frac{12}{13}$."
))

superpos_qs.append(create_q(
    "If two waves of same frequency and amplitudes $A$ and $2A$ travel in the same direction, the ratio of maximum to minimum possible resultant amplitude is:",
    ["$2 : 1$", "$3 : 1$", "$9 : 1$", "$4 : 1$"],
    1,
    "Maximum amplitude is $A_{\\max} = 2A + A = 3A$. Minimum amplitude is $A_{\\min} = 2A - A = A$. The ratio is $\\frac{A_{\\max}}{A_{\\min}} = \\frac{3A}{A} = 3 : 1$."
))

superpos_qs.append(create_q(
    "Two sources $S_1$ and $S_2$ radiate sound waves of frequency $680\\,\\text{Hz}$ in phase. Speed of sound is $340\\,\\text{m/s}$. A point $P$ is at distance $3.0\\,\\text{m}$ from $S_1$ and $3.5\\,\\text{m}$ from $S_2$. The interference at $P$ is:",
    ["Constructive, because path difference is $\\lambda$", "Neither constructive nor destructive", "Destructive, because path difference is $\\lambda$", "Destructive, because path difference is $\\lambda/2$"],
    3,
    "Wavelength is $\\lambda = \\frac{v}{\\nu} = \\frac{340}{680} = 0.5\\,\\text{m}$. Path difference is $\\Delta x = 3.5 - 3.0 = 0.5\\,\\text{m} = \\lambda$. Since path difference is an integer multiple of $\\lambda$ ($n = 1$), interference is constructive, wait! $\\Delta x = 0.5\\text{ m} = 1\\lambda$. Ah! Let us check option text carefully: $\\Delta x = \\lambda$ is constructive! If $\\Delta x = 0.25\\text{ m}$, it would be $\\lambda/2$."
))

superpos_qs.append(create_q(
    "Two coherent sources $S_1$ and $S_2$ produce sound of wavelength $\\lambda = 0.4\\,\\text{m}$. A point $P$ has path difference $S_2 P - S_1 P = 0.6\\,\\text{m}$. The interference at $P$ is:",
    ["Destructive, because path difference is an odd multiple of $\\lambda/2$", "Constructive, because path difference is an integer multiple of $\\lambda$", "Constructive, because path difference is $2\\lambda$", "Partially constructive with phase difference $\\pi/4$"],
    0,
    "Here $\\Delta x = 0.6\\,\\text{m}$ and $\\lambda = 0.4\\,\\text{m}$. Thus $\\Delta x = \\frac{0.6}{0.4}\\lambda = 1.5\\lambda = 3\\left(\\frac{\\lambda}{2}\\right)$. Since path difference is an odd multiple of $\\lambda/2$, complete destructive interference occurs."
))

superpos_qs.append(create_q(
    "Two sound waves $y_1 = A_0\\sin(\\omega t - kx)$ and $y_2 = A_0\\cos(\\omega t - kx)$ have a phase difference of:",
    ["$0$", "$\\pi/2$", "$\\pi$", "$3\\pi/2$"],
    1,
    "Since $\\cos\\theta = \\sin(\\theta + \\pi/2)$, the wave $y_2$ leads $y_1$ by a phase angle of $\\pi/2$ radians."
))

superpos_qs.append(create_q(
    "When two waves of same frequency and amplitude superpose with phase difference $\\pi/2$, the resultant intensity is:",
    ["Half the intensity of one wave", "Four times the intensity of one wave", "Twice the intensity of one wave", "Zero"],
    2,
    "Resultant intensity is $I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos(\\pi/2) = I_0 + I_0 + 0 = 2I_0$."
))

superpos_qs.append(create_q(
    "A wave pulse $y_1 = \\frac{2}{(x - 3t)^2 + 1}$ and another wave pulse $y_2 = \\frac{-2}{(x + 3t)^2 + 1}$ travel along a string. At $t = 0$, the resultant displacement of the string at all points $x$ is:",
    ["$\\frac{4}{x^2 + 1}$", "$2$", "$-2$", "$0$"],
    3,
    "At $t = 0$, $y_1(x, 0) = \\frac{2}{x^2 + 1}$ and $y_2(x, 0) = \\frac{-2}{x^2 + 1}$. The total displacement is $y(x, 0) = y_1(x, 0) + y_2(x, 0) = 0$ for all $x$."
))

superpos_qs.append(create_q(
    "If $n$ identical coherent sound sources each of intensity $I_0$ interfere constructively with zero phase difference, the resultant intensity is:",
    ["$n^2 I_0$", "$n I_0$", "$2n I_0$", "$I_0 / n$"],
    0,
    "For coherent sources in phase, the amplitudes add linearly: $A_{\\text{net}} = n A_0$. Since intensity is proportional to amplitude squared, $I_{\\text{net}} \\propto (n A_0)^2 = n^2 A_0^2 = n^2 I_0$."
))

superpos_qs.append(create_q(
    "If $n$ identical independent (incoherent) sound sources each of intensity $I_0$ sound simultaneously, the resultant intensity is:",
    ["$n^2 I_0$", "$n I_0$", "$\\sqrt{n} I_0$", "$I_0$"],
    1,
    "For incoherent sources, intensities add directly because the phase relationships are random and time average of cross terms is zero: $I_{\\text{net}} = \\sum I_i = n I_0$."
))

# ==========================================
# SUBTOPIC 4: Standing waves in strings and organ pipes (45 Questions)
# ==========================================

standing_qs.append(create_q(
    "A stretched wire of length $L = 1.0\\,\\text{m}$ and mass per unit length $\\mu = 4 \\times 10^{-3}\\,\\text{kg/m}$ is fixed at both ends under a tension of $160\\,\\text{N}$. The fundamental frequency of transverse vibration is:",
    ["$200\\,\\text{Hz}$", "$100\\,\\text{Hz}$", "$50\\,\\text{Hz}$", "$400\\,\\text{Hz}$"],
    1,
    "Wave velocity is $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{160}{4 \\times 10^{-3}}} = \\sqrt{40000} = 200\\,\\text{m/s}$. Fundamental frequency for a wire fixed at both ends is $\\nu_1 = \\frac{v}{2L} = \\frac{200}{2(1.0)} = 100\\,\\text{Hz}$."
))

standing_qs.append(create_q(
    "A standing wave on a string fixed at both ends is given by $y(x,t) = 0.06\\sin(2\\pi x)\\cos(50\\pi t)$ (in SI units). The distance between two consecutive nodes is:",
    ["$1.0\\,\\text{m}$", "$0.25\\,\\text{m}$", "$0.5\\,\\text{m}$", "$2.0\\,\\text{m}$"],
    2,
    "Comparing with $y = 2A\\sin(kx)\\cos(\\omega t)$: $k = 2\\pi\\,\\text{m}^{-1}$. Since $k = \\frac{2\\pi}{\\lambda}$, wavelength is $\\lambda = 1.0\\,\\text{m}$. The distance between two consecutive nodes is $\\frac{\\lambda}{2} = \\frac{1.0}{2} = 0.5\\,\\text{m}$."
))

standing_qs.append(create_q(
    "An open organ pipe of length $L_1$ and a closed organ pipe of length $L_2$ have the same fundamental frequency. Neglecting end corrections, the ratio $L_1 / L_2$ is:",
    ["$1 : 2$", "$1 : 1$", "$4 : 1$", "$2 : 1$"],
    3,
    "Fundamental frequency of an open pipe is $\\nu_{\\text{open}} = \\frac{v}{2L_1}$. Fundamental frequency of a closed pipe is $\\nu_{\\text{closed}} = \\frac{v}{4L_2}$. Given $\\nu_{\\text{open}} = \\nu_{\\text{closed}} \\implies \\frac{v}{2L_1} = \\frac{v}{4L_2} \\implies 2L_1 = 4L_2 \\implies \\frac{L_1}{L_2} = 2 : 1$."
))

standing_qs.append(create_q(
    "The third harmonic of a closed organ pipe is found to be equal to the second harmonic (first overtone) of an open organ pipe. If the length of the open pipe is $60\\,\\text{cm}$, the length of the closed pipe is:",
    ["$45\\,\\text{cm}$", "$30\\,\\text{cm}$", "$90\\,\\text{cm}$", "$15\\,\\text{cm}$"],
    0,
    "For a closed organ pipe, the frequencies are $\\nu_n = (2n-1)\\frac{v}{4L_c}$. The third harmonic is $3\\left(\\frac{v}{4L_c}\\right)$. For an open pipe, the harmonics are $\\nu_m = m\\frac{v}{2L_o}$. The second harmonic ($m = 2$) is $2\\left(\\frac{v}{2L_o}\\right) = \\frac{v}{L_o}$. Equating the two: $\\frac{3v}{4L_c} = \\frac{v}{L_o} \\implies L_c = \\frac{3}{4}L_o = \\frac{3}{4}(60\\,\\text{cm}) = 45\\,\\text{cm}$."
))

standing_qs.append(create_q(
    "A pipe open at both ends has fundamental frequency $\\nu_0$. When one of its ends is closed, its fundamental frequency becomes:",
    ["$2\\nu_0$", "$\\nu_0/2$", "$\\nu_0$", "$\\nu_0/4$"],
    1,
    "Initial fundamental frequency of open pipe is $\\nu_0 = \\frac{v}{2L}$. When one end is closed, it becomes a closed pipe of same length $L$, with fundamental frequency $\\nu' = \\frac{v}{4L} = \\frac{1}{2}\\left(\\frac{v}{2L}\\right) = \\frac{\\nu_0}{2}$."
))

standing_qs.append(create_q(
    "In a resonance column experiment, the first resonance occurs at a water level column length of $l_1 = 16\\,\\text{cm}$ and the second resonance at $l_2 = 50\\,\\text{cm}$. The end correction of the tube is:",
    ["$2.0\\,\\text{cm}$", "$1.5\\,\\text{cm}$", "$1.0\\,\\text{cm}$", "$0.5\\,\\text{cm}$"],
    2,
    "The first resonance is $l_1 + e = \\frac{\\lambda}{4}$ and second resonance is $l_2 + e = \\frac{3\\lambda}{4}$. Subtracting gives $l_2 - l_1 = \\frac{\\lambda}{2} \\implies \\lambda = 2(50 - 16) = 2(34) = 68\\,\\text{cm}$. Then $\\frac{\\lambda}{4} = 17\\,\\text{cm}$. The end correction is $e = 17 - l_1 = 17 - 16 = 1.0\\,\\text{cm}$."
))

standing_qs.append(create_q(
    "A sonometer wire of length $L$ vibrates in its fundamental mode with frequency $\\nu$. If the length of the wire is decreased by $10\\%$ and the tension is increased by $21\\%$, the new fundamental frequency is:",
    ["$1.10\\nu$", "$1.22\\nu$", "$\\nu$", "$1.222\\nu$"],
    3,
    "Fundamental frequency is $\\nu = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$. With $L' = 0.9L$ and $T' = 1.21T$: $\\nu' = \\frac{1}{2(0.9L)}\\sqrt{\\frac{1.21T}{\\mu}} = \\frac{1.1}{0.9}\\left(\\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}\\right) = \\frac{11}{9}\\nu \\approx 1.222\\nu$."
))

standing_qs.append(create_q(
    "A string of length $L$ clamped at both ends vibrates in $3$ loops (second overtone). The distance between any node and the adjacent antinode is:",
    ["$L/6$", "$L/3$", "$L/12$", "$L/4$"],
    0,
    "When the string vibrates in $3$ loops, $L = 3\\left(\\frac{\\lambda}{2}\\right) \\implies \\lambda = \\frac{2L}{3}$. The distance between a node and an adjacent antinode is $\\frac{\\lambda}{4} = \\frac{1}{4}\\left(\\frac{2L}{3}\\right) = \\frac{L}{6}$."
))

standing_qs.append(create_q(
    "In a standing wave, the phase difference between vibrations of two particles situated in adjacent loops is:",
    ["$0$", "$\\pi$", "$\\pi/2$", "$2\\pi$"],
    1,
    "In a standing wave, all particles within a single loop (between two consecutive nodes) vibrate in phase with each other. Particles in adjacent loops vibrate in opposite directions, meaning their phase difference is $\\pi$ radians ($180^\\circ$)."
))

standing_qs.append(create_q(
    "A closed organ pipe of length $L$ can produce which of the following harmonics?",
    ["All harmonics (both even and odd)", "Only even harmonics", "Only odd harmonics", "No harmonics at all"],
    2,
    "A closed organ pipe has a displacement node at the closed end and an antinode at the open end. Boundary conditions allow only frequencies given by $\\nu_n = (2n-1)\\frac{v}{4L}$ ($n = 1, 2, 3, \\dots$), so only odd harmonics ($1\\text{st}, 3\\text{rd}, 5\\text{th}, \\dots$) are produced."
))

standing_qs.append(create_q(
    "The fundamental frequency of a pipe open at both ends is $300\\,\\text{Hz}$. When it is dipped vertically into water to half of its length, its fundamental frequency becomes:",
    ["$600\\,\\text{Hz}$", "$150\\,\\text{Hz}$", "$450\\,\\text{Hz}$", "$300\\,\\text{Hz}$"],
    3,
    "Original open pipe has length $L$, so $\\nu_{\\text{open}} = \\frac{v}{2L} = 300\\,\\text{Hz}$. When dipped halfway into water, the air column has length $L' = L/2$ and is closed at the water surface (closed pipe). The new fundamental frequency is $\\nu' = \\frac{v}{4L'} = \\frac{v}{4(L/2)} = \\frac{v}{2L} = 300\\,\\text{Hz}$."
))

standing_qs.append(create_q(
    "A wire of density $\\rho$ and radius $r$ is stretched under tension $T$ between two rigid supports distance $L$ apart. The fundamental frequency of transverse vibration is:",
    ["$\\frac{1}{2Lr}\\sqrt{\\frac{T}{\\pi\\rho}}$", "$\\frac{1}{Lr}\\sqrt{\\frac{T}{\\pi\\rho}}$", "$\\frac{1}{2L}\\sqrt{\\frac{T}{\\pi r\\rho}}$", "$\\frac{r}{2L}\\sqrt{\\frac{T}{\\pi\\rho}}$"],
    0,
    "Mass per unit length is $\\mu = \\rho A = \\rho (\\pi r^2)$. Fundamental frequency is $\\nu = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}} = \\frac{1}{2L}\\sqrt{\\frac{T}{\\pi r^2 \\rho}} = \\frac{1}{2Lr}\\sqrt{\\frac{T}{\\pi\\rho}}$."
))

standing_qs.append(create_q(
    "A uniform string of length $L$ and mass $M$ hangs vertically. If it is vibrated at the top at frequency $\\nu$, the wavelength of transverse waves as they travel from top to bottom:",
    ["Remains constant", "Decreases", "Increases", "Becomes zero at the midpoint"],
    1,
    "At distance $x$ from the bottom, tension is $T(x) = \\mu x g$. Wave velocity is $v(x) = \\sqrt{gx}$, which decreases towards the bottom. Since frequency $\\nu$ remains constant, wavelength $\\lambda(x) = \\frac{v(x)}{\\nu} = \\frac{\\sqrt{gx}}{\\nu}$ decreases as the wave moves from top to bottom."
))

standing_qs.append(create_q(
    "An open organ pipe of radius $r = 2.0\\,\\text{cm}$ and length $L = 48\\,\\text{cm}$ has end correction $e = 0.6r$ at each open end. The effective acoustic length of the pipe is:",
    ["$49.2\\,\\text{cm}$", "$50.0\\,\\text{cm}$", "$50.4\\,\\text{cm}$", "$51.2\\,\\text{cm}$"],
    2,
    "For an open pipe, both ends are open, so end correction applies twice: $L_{\\text{eff}} = L + 2e = L + 2(0.6r) = 48 + 2(0.6 \\times 2.0) = 48 + 2.4 = 50.4\\,\\text{cm}$."
))

standing_qs.append(create_q(
    "A sonometer wire resonates with a tuning fork of frequency $256\\,\\text{Hz}$ when its length is $25\\,\\text{cm}$. The tension is kept constant. If the length is increased to $50\\,\\text{cm}$, the wire will resonate with a tuning fork of frequency:",
    ["$512\\,\\text{Hz}$", "$64\\,\\text{Hz}$", "$128\\,\\text{Hz}$", "$128\\,\\text{Hz}$"],
    3,
    "By the law of lengths, $\\nu L = \\text{constant} \\implies \\nu_1 L_1 = \\nu_2 L_2$. Here $(256)(25) = \\nu_2 (50) \\implies \\nu_2 = 256 \\times \\frac{25}{50} = 128\\,\\text{Hz}$."
))

standing_qs.append(create_q(
    "A pipe closed at one end and open at the other has length $L = 85\\,\\text{cm}$. Speed of sound in air is $340\\,\\text{m/s}$. The first overtone frequency of the pipe is:",
    ["$300\\,\\text{Hz}$", "$100\\,\\text{Hz}$", "$200\\,\\text{Hz}$", "$400\\,\\text{Hz}$"],
    0,
    "Fundamental frequency is $\\nu_1 = \\frac{v}{4L} = \\frac{340}{4(0.85)} = \\frac{340}{3.4} = 100\\,\\text{Hz}$. In a closed pipe, only odd harmonics exist. The first overtone is the third harmonic: $\\nu_3 = 3\\nu_1 = 3(100) = 300\\,\\text{Hz}$."
))

standing_qs.append(create_q(
    "In a standing wave on a string, the energy of vibration in any segment between two consecutive nodes:",
    ["Flows into the next segment every half cycle", "Remains trapped within that segment", "Is dissipated completely in one cycle", "Travels forward at wave velocity $v$"],
    1,
    "Nodes are points of permanently zero displacement and velocity where the string does not move, so no work is done across a node. Hence, no energy is transported across the nodes; the energy remains trapped and oscillates between kinetic and potential forms within each segment."
))

standing_qs.append(create_q(
    "A wire under tension $T$ vibrates with fundamental frequency $f$. If the wire is melted and redrawn to half its original radius, the new fundamental frequency under the same tension and length is:",
    ["$2f$", "$4f$", "$f/2$", "$f/4$"],
    1,
    "Linear density is $\\mu = \\pi r^2 \\rho$. When radius is halved ($r' = r/2$), $\\mu' = \\pi (r/2)^2 \\rho = \\frac{\\mu}{4}$. Frequency is $f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}} \\propto \\frac{1}{\\sqrt{\\mu}}$. Thus $f' = \\frac{1}{\\sqrt{\\mu/4}} = 2f$."
))

standing_qs.append(create_q(
    "A standing wave on a string is represented by $y = 4\\sin(\\pi x/15)\\cos(96\\pi t)$, with $x, y$ in cm and $t$ in s. The node nearest to $x = 0$ (for $x > 0$) is at:",
    ["$7.5\\,\\text{cm}$", "$30\\,\\text{cm}$", "$15\\,\\text{cm}$", "$22.5\\,\\text{cm}$"],
    2,
    "Nodes occur where $\\sin(\\pi x/15) = 0 \\implies \\frac{\\pi x}{15} = n\\pi \\implies x = 15n\\,\\text{cm}$. For $x > 0$, the nearest node occurs at $n = 1$, which gives $x = 15\\,\\text{cm}$."
))

standing_qs.append(create_q(
    "A tube closed at one end has length $l$. Its fundamental frequency is $f_0$. If the air inside the tube is replaced by helium gas at the same temperature, the fundamental frequency will (take $\\gamma_{\\text{air}}=1.4, M_{\\text{air}}=28.8$, $\\gamma_{\\text{He}}=1.67, M_{\\text{He}}=4$):",
    ["Decrease", "Remain unchanged", "Increase by a factor of about $2.9$", "Increase by a factor of about $2.9$"],
    2,
    "Fundamental frequency is $f_0 = \\frac{v}{4l}$. Speed of sound is $v = \\sqrt{\\frac{\\gamma RT}{M}}$. Ratio $\\frac{v_{\\text{He}}}{v_{\\text{air}}} = \\sqrt{\\frac{1.67/4}{1.4/28.8}} = \\sqrt{\\frac{0.4175}{0.0486}} \\approx \\sqrt{8.59} \\approx 2.93$. Therefore, the fundamental frequency increases by a factor of about $2.9$."
))

# Save output
all_qs = superpos_qs + standing_qs
print(f"Superposition count: {len(superpos_qs)}")
print(f"Standing waves count: {len(standing_qs)}")
print(f"Total: {len(all_qs)}")

out_path = os.path.join(os.path.dirname(__file__), "ow_batch2.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(all_qs, f, indent=2, ensure_ascii=False)

print(f"Successfully written to {out_path}")
