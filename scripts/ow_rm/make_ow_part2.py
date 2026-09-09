#!/usr/bin/env python3
"""
make_ow_part2.py
Generates exactly 45 questions for "Superposition of waves"
and 45 questions for "Standing waves in strings and organ pipes".
Saves to scripts/ow_rm/ow_batch2.json
"""

import json
import os

CHAPTER = "Oscillations and Waves"
SUBJECT = "Physics"

CURRENT_SUBTOPIC = "Superposition of waves"

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

superpos = []
standing = []

# =========================================================================
# SUBTOPIC: Superposition of waves (45 Questions)
# =========================================================================

# 1
superpos.append(q(
    "Two coherent sound sources produce waves of amplitudes $A_1 = 3\\,\\text{mm}$ and $A_2 = 4\\,\\text{mm}$ at a point in space with a phase difference of $\\pi/2$. The resultant amplitude is:",
    ["$5\\,\\text{mm}$", "$7\\,\\text{mm}$", "$1\\,\\text{mm}$", "$\\sqrt{7}\\,\\text{mm}$"],
    0, "Resultant amplitude is $A = \\sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \\cos\\phi} = \\sqrt{3^2 + 4^2 + 0} = 5\\,\\text{mm}$.", "Superposition of waves"
))

# 2
superpos.append(q(
    "Two waves of intensities $I$ and $4I$ interfere at a point. If the phase difference between them is $\\pi$, the resultant intensity is:",
    ["$5I$", "$I$", "$9I$", "$3I$"],
    1, "The resultant intensity is $I_{\\text{res}} = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\pi = I + 4I - 2\\sqrt{4I^2} = 5I - 4I = I$.", "Superposition of waves"
))

# 3
superpos.append(q(
    "Two interfering waves have an intensity ratio of $16 : 1$. The ratio of maximum intensity to minimum intensity in the interference pattern is:",
    ["$9 : 1$", "$17 : 15$", "$25 : 9$", "$5 : 3$"],
    2, "The ratio of amplitudes is $\\frac{A_1}{A_2} = \\sqrt{16/1} = 4$. Then $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{4 + 1}{4 - 1}\\right)^2 = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$.", "Superposition of waves"
))

# 4
superpos.append(q(
    "In Quincke's tube experiment, a detector shows a maximum sound intensity. When the sliding tube is pulled out by $5.0\\,\\text{cm}$, the intensity falls to a minimum for the first time. The wavelength of the sound is:",
    ["$10\\,\\text{cm}$", "$5.0\\,\\text{cm}$", "$40\\,\\text{cm}$", "$20\\,\\text{cm}$"],
    3, "Pulling out the tube by $d$ increases path difference by $2d$. Fall from maximum to minimum requires $\\Delta x = \\lambda/2$. Thus $2d = \\lambda/2 \\implies \\lambda = 4d = 4(5.0) = 20\\,\\text{cm}$.", "Superposition of waves"
))

# 5
superpos.append(q(
    "Two identical waves travelling in the same direction interfere. If each has intensity $I_0$ and their phase difference is $\\phi = 2\\pi/3$, the resultant intensity is:",
    ["$I_0$", "$2I_0$", "$3I_0$", "$4I_0$"],
    0, "$I = 4I_0 \\cos^2(\\phi/2) = 4I_0 \\cos^2(\\pi/3) = 4I_0(1/4) = I_0$.", "Superposition of waves"
))

# 6
superpos.append(q(
    "Two waves are represented by $y_1 = A\\sin(\\omega t - kx)$ and $y_2 = A\\sin(\\omega t - kx + \\pi/3)$. The amplitude and initial phase of the resultant wave are:",
    ["$A\\sqrt{2},\\,\\pi/6$", "$A\\sqrt{3},\\,\\pi/6$", "$A\\sqrt{3},\\,\\pi/3$", "$2A,\\,\\pi/6$"],
    1, "$A_{\\text{res}} = 2A\\cos(\\phi/2) = 2A\\cos(\\pi/6) = A\\sqrt{3}$. The phase angle is $\\phi/2 = \\pi/6$.", "Superposition of waves"
))

# 7
superpos.append(q(
    "Three waves of equal frequency and amplitude $A$ have phase angles $0$, $\\pi/2$, and $\\pi$. The resultant amplitude is:",
    ["$3A$", "$0$", "$A$", "$A\\sqrt{2}$"],
    2, "Phasor sum: $(A - A)\\hat{i} + A\\hat{j} = A\\hat{j}$. Magnitude is $A$.", "Superposition of waves"
))

# 8
superpos.append(q(
    "Two sound waves of frequencies $\\nu_1 = 400\\,\\text{Hz}$ and $\\nu_2 = 402\\,\\text{Hz}$ with equal amplitude $A$ superpose. The number of times maximum intensity is heard per second is:",
    ["$4$", "$1$", "$0$", "$2$"],
    3, "Beat frequency is $f_b = |402 - 400| = 2\\,\\text{Hz}$.", "Superposition of waves"
))

# 9
superpos.append(q(
    "Two coherent sources $S_1$ and $S_2$ are placed at a distance $d = 3\\lambda$ apart. The number of points on the line segment joining $S_1$ and $S_2$ where constructive interference occurs (including endpoints) is:",
    ["$7$", "$6$", "$5$", "$4$"],
    0, "Path difference ranges from $-3\\lambda$ to $+3\\lambda$. For constructive interference $\\Delta x = n\\lambda$, $n \\in \\{-3, -2, -1, 0, 1, 2, 3\\}$ giving $7$ points.", "Superposition of waves"
))

# 10
superpos.append(q(
    "When two incoherent sound sources each of intensity $I_0$ operate simultaneously, the resultant intensity at any point in the medium is:",
    ["$4I_0$", "$2I_0$", "$I_0$", "Zero"],
    1, "For incoherent sources, phase relationship is random, cross-term averages to zero: $I_{\\text{res}} = I_1 + I_2 = 2I_0$.", "Superposition of waves"
))

# 11
superpos.append(q(
    "Two waves $y_1 = a\\cos(\\omega t - kx)$ and $y_2 = a\\sin(\\omega t - kx)$ superpose. The amplitude of the resultant wave is:",
    ["$2a$", "$a$", "$a\\sqrt{2}$", "$a/\\sqrt{2}$"],
    2, "$y_1 = a\\sin(\\omega t - kx + \\pi/2)$. Phase difference is $\\pi/2$, so resultant amplitude is $\\sqrt{a^2 + a^2} = a\\sqrt{2}$.", "Superposition of waves"
))

# 12
superpos.append(q(
    "A wave $y = A\\sin(kx - \\omega t)$ is incident normally on a rigid wall at $x = 0$. The equation of the reflected wave is:",
    ["$A\\sin(kx + \\omega t)$", "$A\\cos(kx + \\omega t)$", "$-A\\cos(kx + \\omega t)$", "$-A\\sin(kx + \\omega t)$"],
    3, "Reflection from a rigid boundary introduces a phase change of $\\pi$: $y_r = A\\sin(-kx - \\omega t + \\pi) = -A\\sin(kx + \\omega t)$.", "Superposition of waves"
))

# 13
superpos.append(q(
    "The maximum intensity in an interference pattern of two identical waves is $I_0$. If one of the sources is turned off, the intensity at that position becomes:",
    ["$I_0/4$", "$I_0/2$", "$I_0$", "$I_0/8$"],
    0, "Maximum intensity is $I_0 = (2a)^2 = 4a^2$. With one source off, intensity is $a^2 = I_0/4$.", "Superposition of waves"
))

# 14
superpos.append(q(
    "Two waves travelling along the same straight line are given by $y_1 = 5\\sin(\\pi t)$ and $y_2 = 5\\sin(\\pi t + \\pi/3)$ in cm. The resultant amplitude is:",
    ["$10\\,\\text{cm}$", "$5\\sqrt{3}\\,\\text{cm}$", "$5\\,\\text{cm}$", "$5\\sqrt{2}\\,\\text{cm}$"],
    1, "$A = 2(5)\\cos((\\pi/3)/2) = 10\\cos(\\pi/6) = 5\\sqrt{3}\\,\\text{cm}$.", "Superposition of waves"
))

# 15
superpos.append(q(
    "The path difference corresponding to a phase difference of $\\pi$ radians between two waves of wavelength $0.4\\,\\text{m}$ is:",
    ["$0.4\\,\\text{m}$", "$0.1\\,\\text{m}$", "$0.2\\,\\text{m}$", "$0.8\\,\\text{m}$"],
    2, "$\\Delta x = \\frac{\\lambda}{2\\pi}\\Delta\\phi = \\frac{0.4}{2\\pi}(\\pi) = 0.2\\,\\text{m}$.", "Superposition of waves"
))

# 16
superpos.append(q(
    "Two waves $y_1 = 10\\sin(200\\pi t - 2\\pi x)$ and $y_2 = 10\\sin(200\\pi t - 2\\pi x + \\pi)$ interfere. The resultant displacement at any point is:",
    ["$20\\sin(200\\pi t - 2\\pi x)$", "$10\\sin(200\\pi t - 2\\pi x)$", "$10\\sqrt{2}\\sin(200\\pi t - 2\\pi x)$", "$0$"],
    3, "$\\sin(\\theta + \\pi) = -\\sin\\theta$, so $y_2 = -y_1 \\implies y_1 + y_2 = 0$.", "Superposition of waves"
))

# 17
superpos.append(q(
    "Two sound waves with intensity ratio $9 : 4$ interfere. The visibility of the fringes, defined as $V = \\frac{I_{\\max} - I_{\\min}}{I_{\\max} + I_{\\min}}$, is:",
    ["$\\frac{12}{13}$", "$\\frac{5}{13}$", "$\\frac{6}{13}$", "$\\frac{1}{5}$"],
    0, "$A_1/A_2 = 3/2$. $I_{\\max} = (3+2)^2 = 25, I_{\\min} = (3-2)^2 = 1$. $V = (25-1)/(25+1) = 24/26 = 12/13$.", "Superposition of waves"
))

# 18
superpos.append(q(
    "If two waves of same frequency and amplitudes $A$ and $2A$ travel in the same direction, the ratio of maximum to minimum possible resultant amplitude is:",
    ["$2 : 1$", "$3 : 1$", "$9 : 1$", "$4 : 1$"],
    1, "$A_{\\max} = 2A + A = 3A$, $A_{\\min} = 2A - A = A$. Ratio is $3 : 1$.", "Superposition of waves"
))

# 19
superpos.append(q(
    "Two coherent sources $S_1$ and $S_2$ produce sound of wavelength $\\lambda = 0.4\\,\\text{m}$. A point $P$ has path difference $S_2 P - S_1 P = 0.6\\,\\text{m}$. The interference at $P$ is:",
    ["Partially constructive with phase difference $\\pi/4$", "Constructive, because path difference is an integer multiple of $\\lambda$", "Destructive, because path difference is an odd multiple of $\\lambda/2$", "Constructive, because path difference is $2\\lambda$"],
    2, "$\\Delta x = 0.6 = 1.5\\lambda = 3(\\lambda/2)$. Odd multiple of $\\lambda/2$ produces destructive interference.", "Superposition of waves"
))

# 20
superpos.append(q(
    "Two sound waves $y_1 = A_0\\sin(\\omega t - kx)$ and $y_2 = A_0\\cos(\\omega t - kx)$ have a phase difference of:",
    ["$0$", "$\\pi$", "$3\\pi/2$", "$\\pi/2$"],
    3, "$\\cos\\theta = \\sin(\\theta + \\pi/2)$, so phase difference is $\\pi/2$.", "Superposition of waves"
))

# 21
superpos.append(q(
    "When two waves of same frequency and amplitude superpose with phase difference $\\pi/2$, the resultant intensity is:",
    ["Twice the intensity of one wave", "Four times the intensity of one wave", "Half the intensity of one wave", "Zero"],
    0, "$I = I_0 + I_0 + 2I_0\\cos(\\pi/2) = 2I_0$.", "Superposition of waves"
))

# 22
superpos.append(q(
    "A wave pulse $y_1 = \\frac{2}{(x - 3t)^2 + 1}$ and another wave pulse $y_2 = \\frac{-2}{(x + 3t)^2 + 1}$ travel along a string. At $t = 0$, the resultant displacement of the string at all points $x$ is:",
    ["$\\frac{4}{x^2 + 1}$", "$0$", "$2$", "$-2$"],
    1, "At $t = 0$, $y_1 = 2/(x^2+1)$ and $y_2 = -2/(x^2+1)$, so their sum is identically zero.", "Superposition of waves"
))

# 23
superpos.append(q(
    "If $n$ identical coherent sound sources each of intensity $I_0$ interfere constructively with zero phase difference, the resultant intensity is:",
    ["$n I_0$", "$2n I_0$", "$n^2 I_0$", "$I_0 / n$"],
    2, "Amplitudes add: $A_{\\text{net}} = nA_0 \\implies I \\propto (nA_0)^2 = n^2 I_0$.", "Superposition of waves"
))

# 24
superpos.append(q(
    "If $n$ identical independent (incoherent) sound sources each of intensity $I_0$ sound simultaneously, the resultant intensity is:",
    ["$n^2 I_0$", "$\\sqrt{n} I_0$", "$I_0$", "$n I_0$"],
    3, "For incoherent sources, intensities sum directly: $I_{\\text{net}} = n I_0$.", "Superposition of waves"
))

# 25
superpos.append(q(
    "A wave traveling along a string is incident on a junction with a lighter string. The reflected wave:",
    ["Does not invert (phase change is $0$)", "Suffers a phase change of $\\pi$", "Has larger amplitude than incident pulse", "Has speed lower than in the original string"],
    0, "Lighter string has lower density $\\implies$ higher speed $\\implies$ acts like a free end. Phase change upon reflection is $0$.", "Superposition of waves"
))

# 26
superpos.append(q(
    "A wave travelling along a string is incident on a junction with a heavier string. The reflected wave:",
    ["Does not invert", "Suffers a phase change of $\\pi$", "Has twice the speed of incident wave", "Has zero amplitude"],
    1, "Heavier string has higher density $\\implies$ acts like a rigid boundary. Reflection causes a phase change of $\\pi$.", "Superposition of waves"
))

# 27
superpos.append(q(
    "Two waves $y_1 = A\\sin(\\omega t - kx)$ and $y_2 = -A\\cos(\\omega t - kx)$ superpose. The amplitude of the resultant wave is:",
    ["$2A$", "$A$", "$A\\sqrt{2}$", "$0$"],
    2, "$y_2 = A\\sin(\\omega t - kx - \\pi/2)$. The phase difference is $\\pi/2$, giving amplitude $\\sqrt{A^2 + A^2} = A\\sqrt{2}$.", "Superposition of waves"
))

# 28
superpos.append(q(
    "If the ratio of intensities of two interfering waves is $4 : 1$, the ratio of maximum to minimum intensity in the interference pattern is:",
    ["$3 : 1$", "$5 : 3$", "$25 : 9$", "$9 : 1$"],
    3, "$A_1/A_2 = 2/1$. $I_{\\max}/I_{\\min} = (2+1)^2 / (2-1)^2 = 9/1 = 9 : 1$.", "Superposition of waves"
))

# 29
superpos.append(q(
    "Two sound waves with path difference $\\Delta x = 1.25\\lambda$ interfere. The phase difference between them is:",
    ["$2.5\\pi\\,\\text{rad}$", "$1.25\\pi\\,\\text{rad}$", "$5\\pi\\,\\text{rad}$", "$0.5\\pi\\,\\text{rad}$"],
    0, "$\\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{2\\pi}{\\lambda}(1.25\\lambda) = 2.5\\pi\\,\\text{rad}$.", "Superposition of waves"
))

# 30
superpos.append(q(
    "In an interference pattern produced by two identical waves, the intensity at a point where phase difference is $\\pi/3$ is $I$. The maximum intensity in the pattern is:",
    ["$4I/3$", "$4I/3$", "$2I$", "$3I/4$"],
    1, "$I = I_{\\max}\\cos^2(\\phi/2) = I_{\\max}\\cos^2(\\pi/6) = I_{\\max}(3/4) \\implies I_{\\max} = \\frac{4}{3}I$.", "Superposition of waves"
))

# 31
superpos.append(q(
    "Two waves $y_1 = 3\\sin(\\omega t - kx)$ and $y_2 = 4\\sin(\\omega t + kx)$ travel in opposite directions. The maximum displacement of any particle on the string is:",
    ["$1$", "$5$", "$7$", "$12$"],
    2, "Maximum possible displacement occurs when both crests coincide: $A_{\\max} = 3 + 4 = 7$.", "Superposition of waves"
))

# 32
superpos.append(q(
    "The minimum amplitude of vibration of any particle in the interference of two waves $y_1 = 6\\sin(\\omega t - kx)$ and $y_2 = 2\\sin(\\omega t + kx)$ is:",
    ["$8$", "$2$", "$0$", "$4$"],
    3, "At nodes of partial cancellation, minimum amplitude is $A_{\\min} = |A_1 - A_2| = |6 - 2| = 4$.", "Superposition of waves"
))

# 33
superpos.append(q(
    "Two coherent waves have amplitudes in ratio $2 : 1$. The ratio of the average intensity across the pattern to the minimum intensity is:",
    ["$5 : 1$", "$3 : 1$", "$9 : 1$", "$4 : 1$"],
    0, "$A_1 = 2a, A_2 = a$. Average intensity is $I_{\\text{avg}} = I_1 + I_2 = (2a)^2 + a^2 = 5a^2$. Minimum intensity is $I_{\\min} = (2a - a)^2 = a^2$. Ratio is $5 : 1$.", "Superposition of waves"
))

# 34
superpos.append(q(
    "Two sinusoidal waves of the same frequency travel in the same direction along a string with amplitudes $4\\,\\text{mm}$ and $3\\,\\text{mm}$. The phase difference between them is $\\pi$. The amplitude of the resultant wave is:",
    ["$7\\,\\text{mm}$", "$1\\,\\text{mm}$", "$5\\,\\text{mm}$", "$\\sqrt{7}\\,\\text{mm}$"],
    1, "$A = |A_1 - A_2| = |4 - 3| = 1\\,\\text{mm}$.", "Superposition of waves"
))

# 35
superpos.append(q(
    "The principle of superposition of waves is valid for:",
    ["Only sound waves", "Only light waves", "Linear elastic media where wave equations are linear", "Any medium regardless of amplitude"],
    2, "Superposition holds strictly when the medium responds linearly to deformations (Hooke's law / linear wave equation). At extremely high amplitudes, nonlinear effects appear.", "Superposition of waves"
))

# 36
superpos.append(q(
    "When two waves of same amplitude $A$ and same frequency $\\omega$ superpose with phase difference $\\phi = \\pi/2$, the trajectory of the resultant particle motion for collinear waves is:",
    ["A circle", "An ellipse", "A straight line of amplitude $A$", "A straight line of amplitude $A\\sqrt{2}$"],
    3, "Since both waves are collinear (along same line), they add scalar-wise to produce another collinear SHM of amplitude $A_{\\text{net}} = \\sqrt{A^2 + A^2} = A\\sqrt{2}$.", "Superposition of waves"
))

# 37
superpos.append(q(
    "Two coherent sound sources $S_1$ and $S_2$ vibrate in phase. A point $P$ has $S_1 P = 2.0\\,\\text{m}$ and $S_2 P = 2.6\\,\\text{m}$. If the speed of sound is $300\\,\\text{m/s}$, for which of the following frequencies will destructive interference occur at $P$?",
    ["$250\\,\\text{Hz}$", "$500\\,\\text{Hz}$", "$1000\\,\\text{Hz}$", "$750\\,\\text{Hz}$"],
    0, "Path difference is $\\Delta x = 0.6\\,\\text{m}$. Destructive interference requires $\\Delta x = (2n-1)\\lambda/2 \\implies \\lambda = \\frac{2\\Delta x}{2n-1} = \\frac{1.2}{2n-1}$. For $n = 1$, $\\lambda = 1.2\\,\\text{m} \\implies \\nu = v/\\lambda = 300/1.2 = 250\\,\\text{Hz}$."
))

# 38
superpos.append(q(
    "In the previous problem, for which frequency will constructive interference occur at $P$?",
    ["$250\\,\\text{Hz}$", "$500\\,\\text{Hz}$", "$750\\,\\text{Hz}$", "$125\\,\\text{Hz}$"],
    1, "Constructive interference requires $\\Delta x = n\\lambda \\implies \\lambda = 0.6/n$. For $n = 1$, $\\lambda = 0.6\\,\\text{m} \\implies \\nu = 300/0.6 = 500\\,\\text{Hz}$."
))

# 39
superpos.append(q(
    "Two waves $y_1 = A\\sin(\\omega t - kx)$ and $y_2 = A\\sin(\\omega t - kx + \\delta)$ interfere. The intensity is zero when $\\delta$ equals:",
    ["$0$", "$2\\pi$", "$\\pi$", "$\\pi/2$"],
    2, "Destructive interference occurs when the phase difference is an odd multiple of $\\pi$.", "Superposition of waves"
))

# 40
superpos.append(q(
    "The ratio of intensities at two points where path differences are $\\lambda/4$ and $\\lambda/3$ respectively in an interference pattern of two identical coherent waves is:",
    ["$2 : 3$", "$1 : 2$", "$3 : 4$", "$2 : 1$"],
    3, "At $\\Delta x = \\lambda/4$, $\\phi_1 = \\frac{2\\pi}{\\lambda}(\\lambda/4) = \\pi/2 \\implies I_1 = I_0\\cos^2(\\pi/4) = I_0/2$. At $\\Delta x = \\lambda/3$, $\\phi_2 = 2\\pi/3 \\implies I_2 = I_0\\cos^2(\\pi/3) = I_0/4$. Ratio $I_1 / I_2 = (I_0/2) / (I_0/4) = 2 : 1$."
))

# 41
superpos.append(q(
    "Two sound waves with equal frequency produce maximum intensity $I_{\\max}$. If their phase difference is changed to $\\pi/2$, the new intensity is:",
    ["$I_{\\max}/2$", "$I_{\\max}$", "$I_{\\max}/4$", "$I_{\\max}/\\sqrt{2}$"],
    0, "$I_{\\max} = (2a)^2 = 4a^2$. At $\\phi = \\pi/2$, $I = 2a^2 = I_{\\max}/2$."
))

# 42
superpos.append(q(
    "When a wave pulse travelling on a string is reflected from a rigid boundary, which of the following is true?",
    ["Wavelength doubles", "Velocity reverses and phase shifts by $\\pi$", "Frequency is halved", "Amplitude increases"],
    1, "Reflection from a fixed end inverts the displacement (phase shift $\\pi$) and reverses the propagation velocity."
))

# 43
superpos.append(q(
    "Two waves $y_1 = A\\sin(kx - \\omega t)$ and $y_2 = A\\cos(kx - \\omega t)$ superpose. The energy carried by the resultant wave is:",
    ["Equal to the sum of individual wave energies", "Twice the sum of individual wave energies", "Four times that of one wave", "Zero"],
    0, "Resultant amplitude is $\\sqrt{A^2 + A^2} = A\\sqrt{2}$. Since energy $\\propto A_{\\text{res}}^2 = 2A^2 = A^2 + A^2$, it is equal to the sum of individual energies."
))

# 44
superpos.append(q(
    "Two waves of equal amplitude $A$ and angular frequency $\\omega$ differ in phase by $120^\\circ$. The resultant amplitude is:",
    ["$A\\sqrt{3}$", "$A$", "$2A$", "$A/2$"],
    1, "$A_{\\text{res}} = 2A\\cos(120^\\circ/2) = 2A\\cos(60^\\circ) = 2A(1/2) = A$."
))

# 45
superpos.append(q(
    "Two coherent sources $S_1$ and $S_2$ separated by $d = \\lambda/2$ vibrate in opposite phase. Along the line segment joining $S_1$ and $S_2$, the midpoint between them is a point of:",
    ["Zero path difference and destructive interference", "Constructive interference", "Zero path difference and maximum intensity", "Destructive interference with phase difference $\\pi$"],
    1, "At midpoint, path difference is $\\Delta x = 0$. But sources vibrate in opposite phase (initial phase difference $\\pi$), so the net phase difference is $\\pi$, which gives destructive interference (zero intensity)."
))

# =========================================================================
# SUBTOPIC: Standing waves in strings and organ pipes (45 Questions)
# =========================================================================
CURRENT_SUBTOPIC = "Standing waves in strings and organ pipes"

# 1
standing.append(q(
    "A stretched wire of length $L = 1.0\\,\\text{m}$ and mass per unit length $\\mu = 4 \\times 10^{-3}\\,\\text{kg/m}$ is fixed at both ends under a tension of $160\\,\\text{N}$. The fundamental frequency of transverse vibration is:",
    ["$200\\,\\text{Hz}$", "$100\\,\\text{Hz}$", "$50\\,\\text{Hz}$", "$400\\,\\text{Hz}$"],
    1, "$v = \\sqrt{160/(4 \\times 10^{-3})} = 200\\,\\text{m/s}$. Fundamental is $\\nu_1 = v/(2L) = 200/2 = 100\\,\\text{Hz}$.", "Standing waves in strings and organ pipes"
))

# 2
standing.append(q(
    "A standing wave on a string fixed at both ends is given by $y(x,t) = 0.06\\sin(2\\pi x)\\cos(50\\pi t)$ (in SI units). The distance between two consecutive nodes is:",
    ["$1.0\\,\\text{m}$", "$0.25\\,\\text{m}$", "$0.5\\,\\text{m}$", "$2.0\\,\\text{m}$"],
    2, "$k = 2\\pi \\implies \\lambda = 1.0\\,\\text{m}$. Node-to-node distance is $\\lambda/2 = 0.5\\,\\text{m}$.", "Standing waves in strings and organ pipes"
))

# 3
standing.append(q(
    "An open organ pipe of length $L_1$ and a closed organ pipe of length $L_2$ have the same fundamental frequency. Neglecting end corrections, the ratio $L_1 / L_2$ is:",
    ["$1 : 2$", "$1 : 1$", "$4 : 1$", "$2 : 1$"],
    3, "$\\nu_o = v/(2L_1)$, $\\nu_c = v/(4L_2)$. Equating: $2L_1 = 4L_2 \\implies L_1/L_2 = 2 : 1$.", "Standing waves in strings and organ pipes"
))

# 4
standing.append(q(
    "The third harmonic of a closed organ pipe is equal to the second harmonic of an open organ pipe of length $60\\,\\text{cm}$. The length of the closed pipe is:",
    ["$45\\,\\text{cm}$", "$30\\,\\text{cm}$", "$90\\,\\text{cm}$", "$15\\,\\text{cm}$"],
    0, "$3(v/4L_c) = 2(v/2L_o) = v/L_o \\implies L_c = \\frac{3}{4}L_o = \\frac{3}{4}(60) = 45\\,\\text{cm}$.", "Standing waves in strings and organ pipes"
))

# 5
standing.append(q(
    "A pipe open at both ends has fundamental frequency $\\nu_0$. When one of its ends is closed, its fundamental frequency becomes:",
    ["$2\\nu_0$", "$\\nu_0/2$", "$\\nu_0$", "$\\nu_0/4$"],
    1, "Open: $\\nu_0 = v/(2L)$. Closed: $\\nu' = v/(4L) = \\nu_0/2$.", "Standing waves in strings and organ pipes"
))

# 6
standing.append(q(
    "In a resonance column experiment, the first resonance occurs at a water level column length of $l_1 = 16\\,\\text{cm}$ and the second resonance at $l_2 = 50\\,\\text{cm}$. The end correction of the tube is:",
    ["$2.0\\,\\text{cm}$", "$1.5\\,\\text{cm}$", "$1.0\\,\\text{cm}$", "$0.5\\,\\text{cm}$"],
    2, "$l_2 - l_1 = \\lambda/2 = 34\\,\\text{cm} \\implies \\lambda/4 = 17\\,\\text{cm}$. Then $e = 17 - 16 = 1.0\\,\\text{cm}$.", "Standing waves in strings and organ pipes"
))

# 7
standing.append(q(
    "A sonometer wire of length $L$ vibrates in its fundamental mode with frequency $\\nu$. If the length is decreased by $10\\%$ and tension is increased by $21\\%$, the new fundamental frequency is:",
    ["$1.10\\nu$", "$1.22\\nu$", "$\\nu$", "$1.222\\nu$"],
    3, "$\\nu' = \\frac{1}{2(0.9L)}\\sqrt{\\frac{1.21T}{\\mu}} = \\frac{1.1}{0.9}\\nu = \\frac{11}{9}\\nu \\approx 1.222\\nu$.", "Standing waves in strings and organ pipes"
))

# 8
standing.append(q(
    "A string of length $L$ clamped at both ends vibrates in $3$ loops. The distance between any node and the adjacent antinode is:",
    ["$L/6$", "$L/3$", "$L/12$", "$L/4$"],
    0, "$L = 3(\\lambda/2) \\implies \\lambda = 2L/3$. Node to antinode distance is $\\lambda/4 = L/6$.", "Standing waves in strings and organ pipes"
))

# 9
standing.append(q(
    "In a standing wave, the phase difference between vibrations of two particles situated in adjacent loops is:",
    ["$0$", "$\\pi$", "$\\pi/2$", "$2\\pi$"],
    1, "Particles in adjacent loops move in opposite directions, so phase difference is $\\pi$.", "Standing waves in strings and organ pipes"
))

# 10
standing.append(q(
    "A closed organ pipe of length $L$ can produce which of the following harmonics?",
    ["All harmonics", "Only even harmonics", "Only odd harmonics", "No harmonics"],
    2, "Boundary conditions require node at closed end and antinode at open end, allowing only odd harmonics $\\nu_n = (2n-1)v/(4L)$.", "Standing waves in strings and organ pipes"
))

# 11
standing.append(q(
    "The fundamental frequency of a pipe open at both ends is $300\\,\\text{Hz}$. When dipped vertically into water to half of its length, its fundamental frequency becomes:",
    ["$600\\,\\text{Hz}$", "$150\\,\\text{Hz}$", "$450\\,\\text{Hz}$", "$300\\,\\text{Hz}$"],
    3, "Air column length is now $L' = L/2$ closed at one end: $\\nu' = v/(4L') = v/(2L) = 300\\,\\text{Hz}$.", "Standing waves in strings and organ pipes"
))

# 12
standing.append(q(
    "A wire of density $\\rho$ and radius $r$ is stretched under tension $T$ between two rigid supports distance $L$ apart. The fundamental frequency of transverse vibration is:",
    ["$\\frac{1}{2Lr}\\sqrt{\\frac{T}{\\pi\\rho}}$", "$\\frac{1}{Lr}\\sqrt{\\frac{T}{\\pi\\rho}}$", "$\\frac{1}{2L}\\sqrt{\\frac{T}{\\pi r\\rho}}$", "$\\frac{r}{2L}\\sqrt{\\frac{T}{\\pi\\rho}}$"],
    0, "$\\mu = \\pi r^2 \\rho$. $\\nu = \\frac{1}{2L}\\sqrt{T/(\\pi r^2 \\rho)} = \\frac{1}{2Lr}\\sqrt{T/(\\pi\\rho)}$.", "Standing waves in strings and organ pipes"
))

# 13
standing.append(q(
    "An open organ pipe of length $L = 50\\,\\text{cm}$ vibrates in its fundamental mode. The speed of sound is $340\\,\\text{m/s}$. The fundamental frequency is:",
    ["$170\\,\\text{Hz}$", "$340\\,\\text{Hz}$", "$680\\,\\text{Hz}$", "$510\\,\\text{Hz}$"],
    1, "$\\nu = v/(2L) = 340/(2 \\times 0.50) = 340\\,\\text{Hz}$.", "Standing waves in strings and organ pipes"
))

# 14
standing.append(q(
    "In an organ pipe, a pressure node corresponds to:",
    ["A displacement node", "A point of zero speed", "A displacement antinode", "A point of maximum density variation"],
    2, "Where particles have maximum displacement amplitude (displacement antinode), pressure and density variations are zero (pressure node).", "Standing waves in strings and organ pipes"
))

# 15
standing.append(q(
    "At the closed end of an organ pipe, there is:",
    ["A displacement antinode and pressure node", "A displacement antinode and pressure antinode", "A displacement node and pressure node", "A displacement node and pressure antinode"],
    3, "Air molecules cannot move past the closed end (displacement node $\\implies$ zero displacement), which causes maximum compression/rarefaction (pressure antinode).", "Standing waves in strings and organ pipes"
))

# 16
standing.append(q(
    "A cylindrical resonance tube of diameter $d = 4\\,\\text{cm}$ has an end correction given by Rayleigh's formula $e = 0.3 d$. The end correction is:",
    ["$1.2\\,\\text{cm}$", "$2.4\\,\\text{cm}$", "$0.6\\,\\text{cm}$", "$1.8\\,\\text{cm}$"],
    0, "$e = 0.3 d = 0.3(4\\,\\text{cm}) = 1.2\\,\\text{cm}$ (or $0.6r = 0.6(2) = 1.2\\,\\text{cm}$).", "Standing waves in strings and organ pipes"
))

# 17
standing.append(q(
    "The fundamental frequency of a closed organ pipe is $220\\,\\text{Hz}$. The frequency of its first overtone is:",
    ["$440\\,\\text{Hz}$", "$660\\,\\text{Hz}$", "$880\\,\\text{Hz}$", "$550\\,\\text{Hz}$"],
    1, "For closed pipe, harmonics are $1, 3, 5, \\dots$. First overtone is the 3rd harmonic: $\\nu = 3(220) = 660\\,\\text{Hz}$.", "Standing waves in strings and organ pipes"
))

# 18
standing.append(q(
    "The fundamental frequency of an open organ pipe is $220\\,\\text{Hz}$. The frequency of its first overtone is:",
    ["$330\\,\\text{Hz}$", "$660\\,\\text{Hz}$", "$440\\,\\text{Hz}$", "$550\\,\\text{Hz}$"],
    2, "For open pipe, all harmonics exist: $\\nu_n = n\\nu_1$. The first overtone is the 2nd harmonic: $2(220) = 440\\,\\text{Hz}$.", "Standing waves in strings and organ pipes"
))

# 19
standing.append(q(
    "A string under tension $T$ vibrates in its fundamental mode. If the tension is quadrupled keeping length and mass constant, the fundamental frequency:",
    ["Is halved", "Remains unchanged", "Quadruples", "Doubles"],
    3, "$\\nu \\propto \\sqrt{T}$. Quadrupling tension doubles the frequency.", "Standing waves in strings and organ pipes"
))

# 20
standing.append(q(
    "A tuning fork of frequency $512\\,\\text{Hz}$ produces resonance in a resonance tube. If the first resonance length is $15\\,\\text{cm}$ and the second resonance length is $47\\,\\text{cm}$, the speed of sound is:",
    ["$327.7\\,\\text{m/s}$", "$340.0\\,\\text{m/s}$", "$320.0\\,\\text{m/s}$", "$330.5\\,\\text{m/s}$"],
    0, "$l_2 - l_1 = \\lambda/2 = 47 - 15 = 32\\,\\text{cm} = 0.32\\,\\text{m} \\implies \\lambda = 0.64\\,\\text{m}$. Speed is $v = \\nu\\lambda = 512 \\times 0.64 = 327.68\\,\\text{m/s} \\approx 327.7\\,\\text{m/s}$."
))

# 21
standing.append(q(
    "If the temperature of an organ pipe increases from $27^\\circ\\text{C}$ to $127^\\circ\\text{C}$, the ratio of its new fundamental frequency to its original fundamental frequency is:",
    ["$4/3$", "$2/\\sqrt{3}$", "$\\sqrt{3}/2$", "$3/4$"],
    1, "$\\nu \\propto v \\propto \\sqrt{T}$. $T_1 = 300\\,\\text{K}, T_2 = 400\\,\\text{K} \\implies \\nu_2/\\nu_1 = \\sqrt{400/300} = 2/\\sqrt{3}$."
))

# 22
standing.append(q(
    "In Melde's experiment in the transverse position, a string vibrates in $4$ loops under a tension of $36\\,\\text{g-wt}$. For the string to vibrate in $6$ loops under the same frequency, the tension must be:",
    ["$24\\,\\text{g-wt}$", "$18\\,\\text{g-wt}$", "$16\\,\\text{g-wt}$", "$9\\,\\text{g-wt}$"],
    2, "In transverse arrangement, $p\\sqrt{T} = \\text{constant} \\implies p_1^2 T_1 = p_2^2 T_2$. Thus $4^2(36) = 6^2 T_2 \\implies 16 \\times 36 = 36 T_2 \\implies T_2 = 16\\,\\text{g-wt}$."
))

# 23
standing.append(q(
    "In Melde's experiment, the frequency of vibration of a string in the longitudinal mode compared to the frequency of the tuning fork is:",
    ["Twice", "Equal", "Four times", "Half"],
    3, "In longitudinal arrangement, the string completes one oscillation for every two oscillations of the tuning fork: $\\nu_{\\text{string}} = \\nu_{\\text{fork}}/2$."
))

# 24
standing.append(q(
    "A sonometer wire of length $100\\,\\text{cm}$ is divided into two segments by a movable bridge. The fundamental frequencies of the two segments are $200\\,\\text{Hz}$ and $300\\,\\text{Hz}$. The position of the bridge from one end is:",
    ["$60\\,\\text{cm}$", "$50\\,\\text{cm}$", "$40\\,\\text{cm}$", "$75\\,\\text{cm}$"],
    0, "$\\nu L = \\text{constant} \\implies \\nu_1 L_1 = \\nu_2 L_2 \\implies 200 L_1 = 300(100 - L_1) \\implies 2L_1 = 300 - 3L_1 \\implies 5L_1 = 300 \\implies L_1 = 60\\,\\text{cm}$."
))

# 25
standing.append(q(
    "A guitar string of length $0.6\\,\\text{m}$ has fundamental frequency $250\\,\\text{Hz}$. To produce a fundamental frequency of $300\\,\\text{Hz}$ without changing tension, the string must be pressed against a fret at distance:",
    ["$0.4\\,\\text{m}$ from the bridge", "$0.5\\,\\text{m}$ from the bridge", "$0.1\\,\\text{m}$ from the bridge", "$0.2\\,\\text{m}$ from the bridge"],
    1, "$f_1 L_1 = f_2 L_2 \\implies 250(0.6) = 300 L_2 \\implies L_2 = 150/300 = 0.5\\,\\text{m}$."
))

# 26
standing.append(q(
    "A standing wave is represented by $y = 2A\\sin(kx)\\cos(\\omega t)$. The antinodes are located at positions $x$ given by:",
    ["$x = n\\lambda/2$", "$x = n\\lambda$", "$x = (2n + 1)\\lambda/4$", "$x = (2n + 1)\\lambda/2$"],
    2, "Antinodes occur where $|\\sin(kx)| = 1 \\implies kx = (2n+1)\\pi/2 \\implies x = (2n+1)\\lambda/4$ ($n = 0, 1, 2, \\dots$)."
))

# 27
standing.append(q(
    "A standing wave is represented by $y = 2A\\sin(kx)\\cos(\\omega t)$. The nodes are located at positions $x$ given by:",
    ["$x = (2n + 1)\\lambda/4$", "$x = (2n + 1)\\lambda/2$", "$x = n\\lambda/4$", "$x = n\\lambda/2$"],
    3, "Nodes occur where $\\sin(kx) = 0 \\implies kx = n\\pi \\implies x = n\\lambda/2$ ($n = 0, 1, 2, \\dots$)."
))

# 28
standing.append(q(
    "An organ pipe open at both ends has length $L$. It is cut into two equal halves. Each half will have a fundamental frequency:",
    ["Twice the original fundamental frequency", "Equal to the original fundamental frequency", "Half the original fundamental frequency", "Four times the original fundamental frequency"],
    0, "Each half is an open pipe of length $L/2$. Fundamental is $\\nu' = v/(2(L/2)) = v/L = 2(v/(2L)) = 2\\nu$."
))

# 29
standing.append(q(
    "A pipe open at both ends vibrates in its second overtone. The number of nodes and antinodes formed inside the pipe are:",
    ["$2$ nodes, $3$ antinodes", "$3$ nodes, $4$ antinodes", "$4$ nodes, $3$ antinodes", "$3$ nodes, $3$ antinodes"],
    1, "Second overtone of open pipe is the 3rd harmonic ($n = 3$). For $n = 3$, there are $n = 3$ nodes and $n + 1 = 4$ antinodes."
))

# 30
standing.append(q(
    "A closed organ pipe vibrates in its second overtone. The number of nodes and antinodes inside the pipe are:",
    ["$2$ nodes, $2$ antinodes", "$3$ nodes, $2$ antinodes", "$3$ nodes, $3$ antinodes", "$4$ nodes, $3$ antinodes"],
    2, "Second overtone of closed pipe is the 5th harmonic ($2n-1 = 5 \\implies n = 3$ quarter-wave modes). There are $3$ nodes and $3$ antinodes."
))

# 31
standing.append(q(
    "A sonometer wire of length $L$ carries a hanging weight of mass $M$. When the hanging mass is completely immersed in water, the fundamental frequency becomes $0.8$ times its initial value. The relative density of the hanging mass is:",
    ["$2.78$", "$1.56$", "$3.24$", "$2.78$"],
    0, "$\\nu'/\\nu = \\sqrt{T'/T} = \\sqrt{1 - 1/s} = 0.8 \\implies 1 - 1/s = 0.64 \\implies 1/s = 0.36 \\implies s = 1/0.36 = 100/36 = 2.78$."
))

# 32
standing.append(q(
    "A wire of length $1\\,\\text{m}$ fixed at both ends has fundamental frequency $200\\,\\text{Hz}$. The speed of transverse waves on the wire is:",
    ["$200\\,\\text{m/s}$", "$400\\,\\text{m/s}$", "$100\\,\\text{m/s}$", "$800\\,\\text{m/s}$"],
    1, "$\\nu_1 = v/(2L) \\implies v = 2L\\nu_1 = 2(1.0)(200) = 400\\,\\text{m/s}$."
))

# 33
standing.append(q(
    "In a resonance column experiment, if tuning forks of frequencies $\\nu_1$ and $\\nu_2$ give first resonance at lengths $l_1$ and $l_2$ respectively, the speed of sound $v$ in terms of end correction $e$ satisfies:",
    ["$v = 4\\nu_1(l_1 + e)$", "$v = 2\\nu_1(l_1 + e)$", "$v = 4\\nu_1(l_1 - e)$", "$v = \\nu_1(l_1 + e)$"],
    0, "For the first resonance of a closed pipe, $l_1 + e = \\lambda_1 / 4 \\implies \\lambda_1 = 4(l_1 + e)$. Thus $v = \\nu_1\\lambda_1 = 4\\nu_1(l_1 + e)$."
))

# 34
standing.append(q(
    "The tension in a piano wire of length $0.5\\,\\text{m}$ and mass $5\\,\\text{g}$ required to tune it to fundamental frequency $260\\,\\text{Hz}$ is:",
    ["$338\\,\\text{N}$", "$676\\,\\text{N}$", "$1352\\,\\text{N}$", "$169\\,\\text{N}$"],
    1, "$\\mu = m/L = 5 \\times 10^{-3} / 0.5 = 10^{-2}\\,\\text{kg/m}$. $v = 2L\\nu = 2(0.5)(260) = 260\\,\\text{m/s}$. $T = \\mu v^2 = (10^{-2})(260)^2 = 10^{-2}(67600) = 676\\,\\text{N}$."
))

# 35
standing.append(q(
    "A tube open at only one end has length $L = 0.25\\,\\text{m}$. Taking speed of sound $v = 340\\,\\text{m/s}$, the fundamental and next two resonant frequencies are:",
    ["$340\\,\\text{Hz}, 680\\,\\text{Hz}, 1020\\,\\text{Hz}$", "$340\\,\\text{Hz}, 510\\,\\text{Hz}, 680\\,\\text{Hz}$", "$340\\,\\text{Hz}, 1020\\,\\text{Hz}, 1700\\,\\text{Hz}$", "$170\\,\\text{Hz}, 510\\,\\text{Hz}, 850\\,\\text{Hz}$"],
    2, "Closed tube: $\\nu_1 = v/(4L) = 340/(4 \\times 0.25) = 340\\,\\text{Hz}$. Successive harmonics are $3\\nu_1 = 1020\\,\\text{Hz}$ and $5\\nu_1 = 1700\\,\\text{Hz}$."
))

# 36
standing.append(q(
    "The distance between a node and the nearest antinode in a stationary wave of wavelength $60\\,\\text{cm}$ is:",
    ["$30\\,\\text{cm}$", "$60\\,\\text{cm}$", "$120\\,\\text{cm}$", "$15\\,\\text{cm}$"],
    3, "Distance between node and adjacent antinode is $\\lambda/4 = 60/4 = 15\\,\\text{cm}$."
))

# 37
standing.append(q(
    "An organ pipe open at both ends resonates at $400\\,\\text{Hz}$ in its fundamental mode. If one end is closed, the fundamental frequency is $200\\,\\text{Hz}$. What is the third harmonic of this closed pipe?",
    ["$600\\,\\text{Hz}$", "$400\\,\\text{Hz}$", "$800\\,\\text{Hz}$", "$1200\\,\\text{Hz}$"],
    0, "Third harmonic of closed pipe is $3\\nu_1 = 3(200) = 600\\,\\text{Hz}$."
))

# 38
standing.append(q(
    "A wire of length $L$ vibrating at frequency $f$ has 3 nodes between its fixed ends. The wavelength of the standing wave is:",
    ["$L$", "$L/2$", "$2L/3$", "$L/4$"],
    1, "Two fixed ends are nodes, plus 3 nodes between them gives 5 nodes total $\\implies 4$ loops. $L = 4(\\lambda/2) = 2\\lambda \\implies \\lambda = L/2$."
))

# 39
standing.append(q(
    "In an open organ pipe, the pressure variation is:",
    ["Maximum at both ends", "Zero at the center", "Zero at both open ends and maximum at the center", "Uniform throughout the pipe"],
    2, "Open ends are displacement antinodes $\\implies$ pressure nodes (zero pressure variation). Center is a displacement node $\\implies$ pressure antinode (maximum pressure variation)."
))

# 40
standing.append(q(
    "A standing wave is formed on a string of linear density $0.01\\,\\text{kg/m}$ under tension $100\\,\\text{N}$. The maximum kinetic energy of a loop of the standing wave of wavelength $0.5\\,\\text{m}$ and amplitude $2\\,\\text{cm}$ is (take $\\pi^2 \\approx 10$):",
    ["$1.0\\,\\text{J}$", "$0.5\\,\\text{J}$", "$2.0\\,\\text{J}$", "$0.4\\,\\text{J}$"],
    3, "$v = \\sqrt{100/0.01} = 100\\,\\text{m/s}$. $\\omega = 2\\pi v/\\lambda = 2\\pi(100)/0.5 = 400\\pi\\,\\text{rad/s}$. For one loop (length $\\lambda/2 = 0.25\\,\\text{m}$), $E = \\frac{1}{4}\\mu(\\lambda/2)\\omega^2(2A)^2 = \\frac{1}{4}(0.01)(0.25)(160000\\pi^2)(0.04)^2 = 0.000625(1600000)(0.0016) = 1000 \\times 0.0016 = 1.6/4 = 0.4\\,\\text{J}$."
))

# 41
standing.append(q(
    "Two open organ pipes have lengths $0.5\\,\\text{m}$ and $0.505\\,\\text{m}$. When sounded together in their fundamental mode, the number of beats heard per second is (speed of sound $= 340\\,\\text{m/s}$):",
    ["$3.4\\,\\text{Hz}$", "$1.7\\,\\text{Hz}$", "$6.8\\,\\text{Hz}$", "$5.1\\,\\text{Hz}$"],
    0, "$\\nu_1 = 340/(2 \\times 0.5) = 340\\,\\text{Hz}$. $\\nu_2 = 340/(2 \\times 0.505) = 336.63\\,\\text{Hz}$. Beat frequency is $f_b = 340 - 336.63 \\approx 3.4\\,\\text{Hz}$."
))

# 42
standing.append(q(
    "A steel rod of length $1\\,\\text{m}$ clamped at its center is stroked to produce longitudinal stationary waves. The fundamental frequency of longitudinal vibration is (speed of sound in steel $v = 5000\\,\\text{m/s}$):",
    ["$5000\\,\\text{Hz}$", "$2500\\,\\text{Hz}$", "$1250\\,\\text{Hz}$", "$10000\\,\\text{Hz}$"],
    1, "Clamped at center $\\implies$ displacement node at center and antinodes at both free ends. Length $L = \\lambda/2 \\implies \\lambda = 2L = 2(1) = 2\\,\\text{m}$. Frequency is $\\nu = v/\\lambda = 5000/2 = 2500\\,\\text{Hz}$."
))

# 43
standing.append(q(
    "A resonance tube shows resonance at lengths $l_1 = 17\\,\\text{cm}$ and $l_2 = 53\\,\\text{cm}$ when excited by a fork of frequency $480\\,\\text{Hz}$. The end correction is:",
    ["$1.5\\,\\text{cm}$", "$0.5\\,\\text{cm}$", "$1.0\\,\\text{cm}$", "$2.0\\,\\text{cm}$"],
    2, "$l_2 - l_1 = \\lambda/2 = 36\\,\\text{cm} \\implies \\lambda/4 = 18\\,\\text{cm}$. $e = 18 - 17 = 1.0\\,\\text{cm}$."
))

# 44
standing.append(q(
    "A closed organ pipe of length $L$ and an open organ pipe of length $2L$ are sounded together. The ratio of their fundamental frequencies is:",
    ["$2 : 1$", "$1 : 2$", "$4 : 1$", "$1 : 1$"],
    3, "Closed: $\\nu_c = v/(4L)$. Open: $\\nu_o = v/(2(2L)) = v/(4L)$. Ratio is $1 : 1$."
))

# 45
standing.append(q(
    "The speed of transverse waves in a string is $v$. If the string is clamped at both ends and vibrates in $n$ loops, the frequency of vibration is:",
    ["$\\frac{nv}{2L}$", "$\\frac{v}{2nL}$", "$\\frac{2nv}{L}$", "$\\frac{nv}{L}$"],
    0, "$L = n(\\lambda/2) \\implies \\lambda = 2L/n$. Frequency is $\\nu = v/\\lambda = \\frac{nv}{2L}$."
))

print(f"Superposition questions count: {len(superpos)}")
print(f"Standing waves questions count: {len(standing)}")

all_batch2 = superpos + standing
out_path = os.path.join(os.path.dirname(__file__), "ow_batch2.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(all_batch2, f, indent=2, ensure_ascii=False)

print(f"Saved {len(all_batch2)} questions to {out_path}")
