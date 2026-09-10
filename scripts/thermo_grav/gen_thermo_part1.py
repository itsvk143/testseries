# -*- coding: utf-8 -*-
"""
Generate Batch 1 of Thermodynamics:
- Thermal equilibrium (45 MCQs)
- Laws of thermodynamics (zeroth, first, second) (45 MCQs)
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
        "chapter": "Thermodynamics",
        "subtopic": subtopic,
        "subTopic": subtopic,
        "subject": "Physics",
        "examType": "JEE Mains"
    })

# ==============================================================================
# SUBTOPIC 1: Thermal equilibrium (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Thermal equilibrium",
    "Two bodies A and B are each in thermal equilibrium with a third body C. According to the Zeroth Law of Thermodynamics:",
    [
        "A and B are in thermal equilibrium with each other",
        "A and B must have the same internal energy",
        "No heat can ever be transferred between A and C",
        "The masses of A, B, and C must be identical"
    ],
    0,
    "The Zeroth Law of Thermodynamics states that if two systems are each in thermal equilibrium with a third system, they are also in thermal equilibrium with each other. This law establishes the physical basis for temperature as a state variable.",
    "Easy"
)

# Q2
add_q(
    "Thermal equilibrium",
    "The triple point of water is assigned an exact value of temperature on the Kelvin scale equal to:",
    [
        "$273.16\\text{ K}$",
        "$273.15\\text{ K}$",
        "$0.00\\text{ K}$",
        "$373.15\\text{ K}$"
    ],
    0,
    "The triple point of water, where solid ice, liquid water, and water vapor coexist in stable thermodynamic equilibrium, is defined as exactly $273.16\\text{ K}$ ($0.01^\\circ\\text{C}$) at a partial vapor pressure of $611.65\\text{ Pa}$.",
    "Easy"
)

# Q3
add_q(
    "Thermal equilibrium",
    "A platinum resistance thermometer has a resistance of $5.00\\text{ }\\Omega$ at $0^\\circ\\text{C}$ and $5.93\\text{ }\\Omega$ at $100^\\circ\\text{C}$. When placed in a hot bath, its resistance is $5.795\\text{ }\\Omega$. The temperature of the bath on the platinum scale is:",
    [
        "$85.5^\\circ\\text{C}$",
        "$80.0^\\circ\\text{C}$",
        "$79.5^\\circ\\text{C}$",
        "$90.0^\\circ\\text{C}$"
    ],
    0,
    "The temperature on the resistance scale is defined as:\n$$t = \\frac{R_t - R_0}{R_{100} - R_0} \\times 100^\\circ\\text{C} = \\frac{5.795 - 5.00}{5.93 - 5.00} \\times 100 = \\frac{0.795}{0.93} \\times 100 \\approx 85.48^\\circ\\text{C} \\approx 85.5^\\circ\\text{C}$$",
    "Medium"
)

# Q4
add_q(
    "Thermal equilibrium",
    "For an ideal gas, Mayer's relation connecting the molar heat capacities at constant pressure ($C_p$) and constant volume ($C_v$) is:",
    [
        "$C_p - C_v = R$",
        "$C_v - C_p = R$",
        "$C_p / C_v = R$",
        "$C_p + C_v = R$"
    ],
    0,
    "According to Mayer's relation, the difference between molar heat capacities of an ideal gas is equal to the universal gas constant: $C_p - C_v = R$. This difference accounts for the external work done by the gas during isobaric expansion ($P\\Delta V = R\\Delta T$ per mole).",
    "Easy"
)

# Q5
add_q(
    "Thermal equilibrium",
    "For a rigid diatomic gas molecule, the number of degrees of freedom is:",
    [
        "$5$",
        "$3$",
        "$6$",
        "$7$"
    ],
    0,
    "A rigid diatomic molecule has 3 translational degrees of freedom and 2 rotational degrees of freedom (about axes perpendicular to the internuclear axis). Since vibrational modes are frozen at ordinary temperatures, the total degrees of freedom is $f = 3 + 2 = 5$.",
    "Easy"
)

# Q6
add_q(
    "Thermal equilibrium",
    "The ratio of specific heats $\\gamma = C_p / C_v$ for a rigid diatomic gas is:",
    [
        "$7/5$",
        "$5/3$",
        "$4/3$",
        "$9/7$"
    ],
    0,
    "For a rigid diatomic gas with $f = 5$ degrees of freedom:\n$$C_v = \\frac{f}{2}R = \\frac{5}{2}R, \\quad C_p = C_v + R = \\frac{7}{2}R$$\n$$\\gamma = \\frac{C_p}{C_v} = \\frac{7/2}{5/2} = \\frac{7}{5} = 1.40$$",
    "Easy"
)

# Q7
add_q(
    "Thermal equilibrium",
    "The ratio of specific heats $\\gamma = C_p / C_v$ for a monoatomic ideal gas is:",
    [
        "$5/3$",
        "$7/5$",
        "$4/3$",
        "$3/2$"
    ],
    0,
    "A monoatomic gas has $f = 3$ translational degrees of freedom.\n$$C_v = \\frac{3}{2}R, \\quad C_p = \\frac{5}{2}R \\implies \\gamma = \\frac{5/2}{3/2} = \\frac{5}{3} \\approx 1.67$$",
    "Easy"
)

# Q8
add_q(
    "Thermal equilibrium",
    "One mole of a monoatomic gas is mixed with three moles of a diatomic gas (rigid molecules). The molar heat capacity at constant volume ($C_v$) of the mixture is:",
    [
        "$\\frac{9}{4}R$",
        "$\\frac{7}{4}R$",
        "$2R$",
        "$\\frac{5}{2}R$"
    ],
    0,
    "The molar heat capacity of the mixture is:\n$$C_{v,\\text{mix}} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{1 \\times \\left(\\frac{3}{2}R\\right) + 3 \\times \\left(\\frac{5}{2}R\\right)}{1 + 3} = \\frac{\\frac{3}{2}R + \\frac{15}{2}R}{4} = \\frac{9R}{4} = \\frac{9}{4}R$$",
    "Medium"
)

# Q9
add_q(
    "Thermal equilibrium",
    "In the previous question, the adiabatic exponent $\\gamma_{\\text{mix}}$ of the gas mixture is:",
    [
        "$13/9$",
        "$11/9$",
        "$7/5$",
        "$5/3$"
    ],
    0,
    "We have $C_{v,\\text{mix}} = \\frac{9}{4}R$.\n$$C_{p,\\text{mix}} = C_{v,\\text{mix}} + R = \\frac{9}{4}R + R = \\frac{13}{4}R$$\n$$\\gamma_{\\text{mix}} = \\frac{C_{p,\\text{mix}}}{C_{v,\\text{mix}}} = \\frac{13/4}{9/4} = \\frac{13}{9} \\approx 1.44$$",
    "Medium"
)

# Q10
add_q(
    "Thermal equilibrium",
    "A gas thermometer measures temperature based on the pressure of a fixed volume of gas. If the pressure is $50\\text{ kPa}$ at the triple point of water ($273.16\\text{ K}$), what is the temperature when the pressure is $65\\text{ kPa}$?",
    [
        "$355.1\\text{ K}$",
        "$320.5\\text{ K}$",
        "$300.0\\text{ K}$",
        "$410.2\\text{ K}$"
    ],
    0,
    "For a constant volume gas thermometer:\n$$T = 273.16 \\times \\frac{P}{P_{\\text{tr}}} = 273.16 \\times \\frac{65}{50} = 273.16 \\times 1.30 \\approx 355.11\\text{ K}$$",
    "Easy"
)

# Q11
add_q(
    "Thermal equilibrium",
    "Two containers of equal volume contain an ideal gas at pressures $P_1, P_2$ and temperatures $T_1, T_2$ respectively. If they are connected by a thin tube of negligible volume, the equilibrium temperature of the mixture is (assuming no heat exchange with surroundings):",
    [
        "$\\frac{T_1 T_2 (P_1 + P_2)}{P_1 T_2 + P_2 T_1}$",
        "$\\frac{T_1 + T_2}{2}$",
        "$\\frac{P_1 T_1 + P_2 T_2}{P_1 + P_2}$",
        "$\\sqrt{T_1 T_2}$"
    ],
    0,
    "Total number of moles is $n = n_1 + n_2 = \\frac{P_1 V}{R T_1} + \\frac{P_2 V}{R T_2}$.\nTotal internal energy is conserved: $U = U_1 + U_2$:\n$$n C_v T = n_1 C_v T_1 + n_2 C_v T_2 \\implies n T = n_1 T_1 + n_2 T_2$$\n$$n_1 T_1 + n_2 T_2 = \\frac{P_1 V}{R} + \\frac{P_2 V}{R} = \\frac{(P_1 + P_2)V}{R}$$\n$$T = \\frac{(P_1 + P_2)V / R}{n} = \\frac{(P_1 + P_2)V / R}{\\frac{V}{R}\\left(\\frac{P_1}{T_1} + \\frac{P_2}{T_2}\\right)} = \\frac{P_1 + P_2}{\\frac{P_1 T_2 + P_2 T_1}{T_1 T_2}} = \\frac{T_1 T_2 (P_1 + P_2)}{P_1 T_2 + P_2 T_1}$$",
    "Hard"
)

# Q12
add_q(
    "Thermal equilibrium",
    "In the previous problem, the final equilibrium pressure of the mixture is:",
    [
        "$\\frac{P_1 + P_2}{2}$",
        "$P_1 + P_2$",
        "$\\frac{P_1 P_2}{P_1 + P_2}$",
        "$\\sqrt{P_1 P_2}$"
    ],
    0,
    "Total volume is $V_{\\text{tot}} = 2V$. Total internal energy is $U = \\frac{f}{2} P_{\\text{final}} (2V)$.\nSince $U = U_1 + U_2 = \\frac{f}{2} P_1 V + \\frac{f}{2} P_2 V = \\frac{f}{2}(P_1 + P_2)V$:\n$$P_{\\text{final}} (2V) = (P_1 + P_2)V \\implies P_{\\text{final}} = \\frac{P_1 + P_2}{2}$$",
    "Medium"
)

# Q13
add_q(
    "Thermal equilibrium",
    "At very high temperatures, the vibrational modes of a diatomic molecule become active. What are the molar heat capacity $C_v$ and the adiabatic exponent $\\gamma$ of a diatomic gas including one vibrational mode?",
    [
        "$C_v = \\frac{7}{2}R, \\quad \\gamma = \\frac{9}{7}$",
        "$C_v = \\frac{5}{2}R, \\quad \\gamma = \\frac{7}{5}$",
        "$C_v = 3R, \\quad \\gamma = \\frac{4}{3}$",
        "$C_v = 4R, \\quad \\gamma = \\frac{5}{4}$"
    ],
    0,
    "Each vibrational mode contributes 2 degrees of freedom (1 kinetic + 1 potential). Thus, $f = 3\\text{ (trans)} + 2\\text{ (rot)} + 2\\text{ (vib)} = 7$.\n$$C_v = \\frac{7}{2}R, \\quad C_p = C_v + R = \\frac{9}{2}R \\implies \\gamma = \\frac{9/2}{7/2} = \\frac{9}{7} \\approx 1.29$$",
    "Medium"
)

# Q14
add_q(
    "Thermal equilibrium",
    "A faulty thermometer has its fixed points marked as $5^\\circ$ and $95^\\circ$. The temperature of a body as read by this thermometer is $59^\\circ$. Its true temperature on the Celsius scale is:",
    [
        "$60^\\circ\\text{C}$",
        "$54^\\circ\\text{C}$",
        "$64^\\circ\\text{C}$",
        "$59^\\circ\\text{C}$"
    ],
    0,
    "Using linear interpolation:\n$$\\frac{C - 0}{100 - 0} = \\frac{\\theta - 5}{95 - 5} = \\frac{59 - 5}{90} = \\frac{54}{90} = \\frac{6}{10} = 0.60 \\implies C = 60^\\circ\\text{C}$$",
    "Easy"
)

# Q15
add_q(
    "Thermal equilibrium",
    "Equal masses of three different liquids A, B, and C have temperatures $12^\\circ\\text{C}, 19^\\circ\\text{C}$, and $28^\\circ\\text{C}$ respectively. When A and B are mixed, the equilibrium temperature is $16^\\circ\\text{C}$. When B and C are mixed, the equilibrium temperature is $23^\\circ\\text{C}$. What is the equilibrium temperature when A and C are mixed?",
    [
        "$20.25^\\circ\\text{C}$",
        "$18.50^\\circ\\text{C}$",
        "$21.75^\\circ\\text{C}$",
        "$16.00^\\circ\\text{C}$"
    ],
    0,
    "Let the specific heats be $s_A, s_B, s_C$.\nFrom A and B:\n$$m s_A (16 - 12) = m s_B (19 - 16) \\implies 4 s_A = 3 s_B \\implies s_B = \\frac{4}{3}s_A$$\nFrom B and C:\n$$m s_B (23 - 19) = m s_C (28 - 23) \\implies 4 s_B = 5 s_C \\implies 4\\left(\\frac{4}{3}s_A\\right) = 5 s_C \\implies s_C = \\frac{16}{15}s_A$$\nWhen A and C are mixed:\n$$m s_A (T - 12) = m s_C (28 - T) \\implies s_A (T - 12) = \\frac{16}{15}s_A (28 - T)$$\n$$15(T - 12) = 16(28 - T) \\implies 15T - 180 = 448 - 16T \\implies 31T = 628 \\implies T = \\frac{628}{31} \\approx 20.26^\\circ\\text{C}$$",
    "Hard"
)

# Q16
add_q(
    "Thermal equilibrium",
    "An ideal gas has an adiabatic exponent $\\gamma$. The molar heat capacity at constant volume $C_v$ in terms of $R$ and $\\gamma$ is:",
    [
        "$\\frac{R}{\\gamma - 1}$",
        "$\\frac{\\gamma R}{\\gamma - 1}$",
        "$(\\gamma - 1)R$",
        "$\\frac{R}{\\gamma + 1}$"
    ],
    0,
    "Since $\\gamma = \\frac{C_p}{C_v} = \\frac{C_v + R}{C_v} = 1 + \\frac{R}{C_v}$, we have $\\frac{R}{C_v} = \\gamma - 1 \\implies C_v = \\frac{R}{\\gamma - 1}$.",
    "Easy"
)

# Q17
add_q(
    "Thermal equilibrium",
    "In terms of $\\gamma$ and $R$, the molar heat capacity at constant pressure $C_p$ of an ideal gas is:",
    [
        "$\\frac{\\gamma R}{\\gamma - 1}$",
        "$\\frac{R}{\\gamma - 1}$",
        "$\\frac{\\gamma R}{\\gamma + 1}$",
        "$\\frac{\\gamma - 1}{\\gamma}R$"
    ],
    0,
    "$$C_p = \\gamma C_v = \\gamma \\left(\\frac{R}{\\gamma - 1}\\right) = \\frac{\\gamma R}{\\gamma - 1}$$",
    "Easy"
)

# Q18
add_q(
    "Thermal equilibrium",
    "Two ideal gases with molar heat capacities at constant volume $C_{v1}$ and $C_{v2}$ have mole numbers $n_1$ and $n_2$. If they are mixed, the effective adiabatic exponent $\\gamma_{\\text{mix}}$ is given by:",
    [
        "$\\frac{n_1 C_{p1} + n_2 C_{p2}}{n_1 C_{v1} + n_2 C_{v2}}$",
        "$\\frac{n_1 \\gamma_1 + n_2 \\gamma_2}{n_1 + n_2}$",
        "$\\sqrt{\\gamma_1 \\gamma_2}$",
        "$\\frac{\\gamma_1 + \\gamma_2}{2}$"
    ],
    0,
    "By definition, $\\gamma_{\\text{mix}} = \\frac{C_{p,\\text{mix}}}{C_{v,\\text{mix}}}$. Since $C_{p,\\text{mix}} = \\frac{\\sum n_i C_{pi}}{\\sum n_i}$ and $C_{v,\\text{mix}} = \\frac{\\sum n_i C_{vi}}{\\sum n_i}$, the total moles cancel, giving $\\gamma_{\\text{mix}} = \\frac{n_1 C_{p1} + n_2 C_{p2}}{n_1 C_{v1} + n_2 C_{v2}}$.",
    "Medium"
)

# Q19
add_q(
    "Thermal equilibrium",
    "A vessel contains 2 moles of helium gas (monoatomic) and 1 mole of oxygen gas (diatomic). The effective degrees of freedom per molecule of the mixture is:",
    [
        "$11/3$",
        "$4$",
        "$13/3$",
        "$7/2$"
    ],
    0,
    "Total degrees of freedom in the mixture is $\\sum n_i f_i = 2(3) + 1(5) = 6 + 5 = 11$. Total number of moles is $n_1 + n_2 = 3$. Therefore, the average degrees of freedom is $f_{\\text{avg}} = \\frac{11}{3}$.",
    "Medium"
)

# Q20
add_q(
    "Thermal equilibrium",
    "If the temperature of a gas is raised from $27^\\circ\\text{C}$ to $927^\\circ\\text{C}$, the ratio of the root-mean-square speed of its molecules is:",
    [
        "$2 : 1$",
        "$1 : 2$",
        "$4 : 1$",
        "$1 : 4$"
    ],
    0,
    "$$T_1 = 27 + 273 = 300\\text{ K}, \\quad T_2 = 927 + 273 = 1200\\text{ K}$$\nSince $v_{\\text{rms}} \\propto \\sqrt{T}$:\n$$\\frac{v_{\\text{rms},2}}{v_{\\text{rms},1}} = \\sqrt{\\frac{1200}{300}} = \\sqrt{4} = 2 : 1$$",
    "Easy"
)

# Q21
add_q(
    "Thermal equilibrium",
    "The internal energy of $n$ moles of an ideal gas depends solely on:",
    [
        "Its absolute temperature $T$",
        "Its pressure $P$ only",
        "Its volume $V$ only",
        "Both its pressure and volume independently"
    ],
    0,
    "According to Joule's law of thermodynamics, the internal energy of an ideal gas depends exclusively on its absolute temperature $T$: $U = n C_v T$. It is independent of volume and pressure at a given temperature.",
    "Easy"
)

# Q22
add_q(
    "Thermal equilibrium",
    "The temperature of the sun's surface is measured using:",
    [
        "An optical pyrometer",
        "A platinum resistance thermometer",
        "A gas thermometer",
        "A mercury thermometer"
    ],
    0,
    "High temperatures like the surface of the Sun ($~6000\\text{ K}$) cannot be measured by physical contact instruments. An optical pyrometer measures temperature by analyzing the spectrum and intensity of emitted thermal radiation using Planck's and Stefan-Boltzmann's laws.",
    "Easy"
)

# Q23
add_q(
    "Thermal equilibrium",
    "Two gases A and B having the same temperature, pressure, and volume are mixed. If the mixture has the same temperature and volume, the resulting pressure will be:",
    [
        "$2P$",
        "$P$",
        "$P/2$",
        "$4P$"
    ],
    0,
    "By Dalton's law of partial pressures, $P_{\\text{total}} = P_A + P_B$. Since each gas was initially at pressure $P$ and occupies the same volume $V$ at the same temperature $T$, the total pressure is $P + P = 2P$.",
    "Easy"
)

# Q24
add_q(
    "Thermal equilibrium",
    "A gas mixture consists of 2 moles of oxygen (molar mass $32\\text{ g/mol}$) and 4 moles of argon (molar mass $40\\text{ g/mol}$) at temperature $T$. The ratio of the total translational kinetic energy of oxygen to that of argon is:",
    [
        "$1 : 2$",
        "$2 : 1$",
        "$1 : 1$",
        "$4 : 5$"
    ],
    0,
    "The translational kinetic energy per mole for any ideal gas is $\\frac{3}{2}RT$, independent of molar mass or molecular structure. Therefore, the ratio of total translational kinetic energy depends solely on the ratio of mole numbers:\n$$\\frac{E_{\\text{trans, }\\text{O}_2}}{E_{\\text{trans, Ar}}} = \\frac{n_1}{n_2} = \\frac{2}{4} = \\frac{1}{2}$$",
    "Medium"
)

# Q25
add_q(
    "Thermal equilibrium",
    "The heat capacity of a solid at very low temperatures varies as $C \\propto T^3$ (Debye $T^3$ law). The heat required to raise the temperature of the solid from $0\\text{ K}$ to $T$ is proportional to:",
    [
        "$T^4$",
        "$T^3$",
        "$T^2$",
        "$T$"
    ],
    0,
    "Heat required is $Q = \\int_0^T C dT = \\int_0^T k T^3 dT = \\frac{k T^4}{4} \\propto T^4$.",
    "Medium"
)

# Q26
add_q(
    "Thermal equilibrium",
    "Which of the following properties of an isolated system must remain constant when it reaches thermal and thermodynamic equilibrium?",
    [
        "Temperature, pressure, and chemical composition throughout the system",
        "Only its mass",
        "Only its total volume",
        "Only its temperature"
    ],
    0,
    "Thermodynamic equilibrium requires thermal equilibrium (uniform temperature), mechanical equilibrium (uniform pressure), and chemical equilibrium (uniform chemical composition and no net reaction).",
    "Easy"
)

# Q27
add_q(
    "Thermal equilibrium",
    "A solid cube of copper of mass $1\\text{ kg}$ at $100^\\circ\\text{C}$ is placed in an insulated container containing $1\\text{ kg}$ of water at $0^\\circ\\text{C}$. Specific heat of copper is $0.1\\text{ cal}/(\\text{g}\\cdot^\\circ\\text{C})$ and water is $1.0\\text{ cal}/(\\text{g}\\cdot^\\circ\\text{C})$. Neglecting heat capacity of the container, the equilibrium temperature is:",
    [
        "$9.1^\\circ\\text{C}$",
        "$10.0^\\circ\\text{C}$",
        "$50.0^\\circ\\text{C}$",
        "$15.2^\\circ\\text{C}$"
    ],
    0,
    "Heat lost by copper = Heat gained by water:\n$$m_{\\text{Cu}} s_{\\text{Cu}} (100 - T) = m_w s_w (T - 0)$$\n$$1000(0.1)(100 - T) = 1000(1.0)T$$\n$$100(100 - T) = 1000T \\implies 100 - T = 10T \\implies 11T = 100 \\implies T = \\frac{100}{11} \\approx 9.09^\\circ\\text{C} \\approx 9.1^\\circ\\text{C}$$",
    "Easy"
)

# Q28
add_q(
    "Thermal equilibrium",
    "The kinetic energy of 1 g-molecule (1 mole) of a gas at normal temperature and pressure is approximately: (Take $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, $T = 273\\text{ K}$)",
    [
        "$3.40 \\times 10^3\\text{ J}$",
        "$6.80 \\times 10^3\\text{ J}$",
        "$1.70 \\times 10^3\\text{ J}$",
        "$5.10 \\times 10^3\\text{ J}$"
    ],
    0,
    "The translational kinetic energy of 1 mole is:\n$$E = \\frac{3}{2}RT = 1.5 \\times 8.314 \\times 273 \\approx 3.405 \\times 10^3\\text{ J}$$",
    "Easy"
)

# Q29
add_q(
    "Thermal equilibrium",
    "At what temperature do the Celsius and Fahrenheit temperature scales coincide?",
    [
        "$-40^\\circ$",
        "$+40^\\circ$",
        "$-20^\\circ$",
        "$+100^\\circ$"
    ],
    0,
    "Using $F = \\frac{9}{5}C + 32$ and setting $F = C = x$:\n$$x = \\frac{9}{5}x + 32 \\implies x - \\frac{9}{5}x = 32 \\implies -\\frac{4}{5}x = 32 \\implies x = -40^\\circ$$",
    "Easy"
)

# Q30
add_q(
    "Thermal equilibrium",
    "The average translational kinetic energy of an ideal gas molecule at temperature $T$ depends only on:",
    [
        "Temperature $T$, independent of the nature of the gas",
        "Both temperature and molecular mass",
        "Pressure and volume",
        "Degrees of freedom of rotation"
    ],
    0,
    "By the equipartition theorem, the average translational kinetic energy per molecule is $\\frac{3}{2}k_B T$, which depends strictly on absolute temperature $T$ and is identical for all gases regardless of their mass or molecular structure.",
    "Easy"
)

# Q31
add_q(
    "Thermal equilibrium",
    "Two identical containers A and B contain helium and nitrogen gas respectively at the same temperature and pressure. The ratio of the average kinetic energy per molecule of helium to that of nitrogen is:",
    [
        "$1 : 1$",
        "$4 : 28$",
        "$28 : 4$",
        "$3 : 5$"
    ],
    0,
    "The translational kinetic energy per molecule is $\\frac{3}{2}k_B T$. Since both are at the same temperature, the average translational kinetic energy per molecule is identical, giving a ratio of $1 : 1$.",
    "Easy"
)

# Q32
add_q(
    "Thermal equilibrium",
    "The difference between $C_p$ and $C_v$ for a real gas at low pressure approaches:",
    [
        "$R$",
        "$0$",
        "$\\infty$",
        "$R/2$"
    ],
    0,
    "At sufficiently low pressures and high temperatures, intermolecular forces become negligible and a real gas behaves as an ideal gas, for which $C_p - C_v = R$.",
    "Easy"
)

# Q33
add_q(
    "Thermal equilibrium",
    "A gas mixture contains equal masses of hydrogen ($M_1 = 2$) and helium ($M_2 = 4$). The ratio of the number of molecules of hydrogen to helium is:",
    [
        "$2 : 1$",
        "$1 : 2$",
        "$1 : 1$",
        "$4 : 1$"
    ],
    0,
    "Let the mass of each be $m$. Number of moles of $\\text{H}_2$ is $n_1 = m/2$, and of $\\text{He}$ is $n_2 = m/4$. The ratio of molecules is $\\frac{N_1}{N_2} = \\frac{n_1}{n_2} = \\frac{m/2}{m/4} = 2 : 1$.",
    "Easy"
)

# Q34
add_q(
    "Thermal equilibrium",
    "In the mixture of the previous problem, the ratio of the total internal energy of hydrogen (diatomic, $f=5$) to that of helium (monoatomic, $f=3$) at the same temperature is:",
    [
        "$10 : 3$",
        "$5 : 3$",
        "$5 : 6$",
        "$3 : 5$"
    ],
    0,
    "Internal energy is $U = n\\frac{f}{2}RT$.\n$$\\frac{U_{\\text{H}_2}}{U_{\\text{He}}} = \\frac{n_1 f_1}{n_2 f_2} = \\frac{2 \\times 5}{1 \\times 3} = \\frac{10}{3} = 10 : 3$$",
    "Medium"
)

# Q35
add_q(
    "Thermal equilibrium",
    "When a liquid boils at constant pressure, its temperature remains constant. The heat absorbed by the liquid during boiling is entirely used to:",
    [
        "Increase potential energy by overcoming intermolecular attractions",
        "Increase kinetic energy of the molecules",
        "Decrease the entropy of the system",
        "Perform internal work on the container"
    ],
    0,
    "During phase change at constant temperature, the kinetic energy of the molecules ($~T$) remains constant. The latent heat of vaporization is utilized in doing work against intermolecular cohesive forces to increase molecular separation (increasing potential energy) and in expanding against external atmospheric pressure.",
    "Easy"
)

# Q36
add_q(
    "Thermal equilibrium",
    "The adiabatic exponent $\\gamma$ of a triatomic non-linear gas (like $\\text{H}_2\\text{O}$ or $\\text{SO}_2$, rigid molecule) is:",
    [
        "$4/3$",
        "$5/3$",
        "$7/5$",
        "$9/7$"
    ],
    0,
    "A non-linear triatomic molecule has 3 translational and 3 rotational degrees of freedom ($f = 6$).\n$$C_v = \\frac{6}{2}R = 3R, \\quad C_p = 4R \\implies \\gamma = \\frac{4R}{3R} = \\frac{4}{3} \\approx 1.33$$",
    "Easy"
)

# Q37
add_q(
    "Thermal equilibrium",
    "The adiabatic exponent $\\gamma$ of a triatomic linear gas (like $\\text{CO}_2$, rigid molecule) is:",
    [
        "$7/5$",
        "$4/3$",
        "$5/3$",
        "$9/7$"
    ],
    0,
    "A linear molecule has 3 translational and 2 rotational degrees of freedom ($f = 5$).\n$$C_v = \\frac{5}{2}R, \\quad C_p = \\frac{7}{2}R \\implies \\gamma = \\frac{7}{5} = 1.40$$",
    "Medium"
)

# Q38
add_q(
    "Thermal equilibrium",
    "A thermistor is a temperature sensor characterized by:",
    [
        "A large negative temperature coefficient of resistance",
        "A constant resistance independent of temperature",
        "Zero resistance at room temperature",
        "Linear expansion proportional to $T^2$"
    ],
    0,
    "Thermistors are semiconductor devices whose electrical resistance decreases rapidly and non-linearly with increasing temperature (large negative temperature coefficient of resistance, NTC), making them highly sensitive temperature sensors.",
    "Easy"
)

# Q39
add_q(
    "Thermal equilibrium",
    "The value of $C_p - C_v$ for 1 gram of hydrogen gas is $r_1$ and for 1 gram of nitrogen gas is $r_2$. Then the ratio $r_1 / r_2$ is: (Take molar masses $M_{\\text{H}_2} = 2\\text{ g/mol}$, $M_{\\text{N}_2} = 28\\text{ g/mol}$)",
    [
        "$14$",
        "$1/14$",
        "$1$",
        "$28$"
    ],
    0,
    "Specific heat per gram satisfies $c_p - c_v = \\frac{R}{M}$.\n$$r_1 = \\frac{R}{2}, \\quad r_2 = \\frac{R}{28} \\implies \\frac{r_1}{r_2} = \\frac{R/2}{R/28} = \\frac{28}{2} = 14$$",
    "Medium"
)

# Q40
add_q(
    "Thermal equilibrium",
    "Two rigid boxes contain different ideal gases at the same temperature and pressure. One box contains monoatomic gas and the other contains diatomic gas. The average energy per molecule in the two boxes is in the ratio:",
    [
        "$3 : 5$",
        "$5 : 3$",
        "$1 : 1$",
        "$3 : 7$"
    ],
    0,
    "For monoatomic gas, total energy per molecule is $E_1 = \\frac{3}{2}k_B T$.\nFor rigid diatomic gas, total energy per molecule is $E_2 = \\frac{5}{2}k_B T$.\n$$\\frac{E_1}{E_2} = \\frac{3/2}{5/2} = 3 : 5$$",
    "Easy"
)

# Q41
add_q(
    "Thermal equilibrium",
    "The temperature of an ideal gas is increased from $100\\text{ K}$ to $400\\text{ K}$. If the root mean square speed at $100\\text{ K}$ is $v$, its value at $400\\text{ K}$ is:",
    [
        "$2v$",
        "$4v$",
        "$\\sqrt{2}v$",
        "$v/2$"
    ],
    0,
    "$$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\propto \\sqrt{T}$$\nWhen $T$ quadruples ($100\\text{ K} \\to 400\\text{ K}$), the speed doubles: $v' = \\sqrt{4}v = 2v$.",
    "Easy"
)

# Q42
add_q(
    "Thermal equilibrium",
    "A cylinder contains 3 moles of an ideal gas at $300\\text{ K}$. If 2 moles of another gas at $400\\text{ K}$ are added to it (both gases have $C_v = \\frac{3}{2}R$), the final equilibrium temperature of the mixture is (assuming no heat loss):",
    [
        "$340\\text{ K}$",
        "$350\\text{ K}$",
        "$360\\text{ K}$",
        "$330\\text{ K}$"
    ],
    0,
    "By conservation of internal energy:\n$$(n_1 + n_2)C_v T = n_1 C_v T_1 + n_2 C_v T_2$$\n$$(3 + 2)T = 3(300) + 2(400) = 900 + 800 = 1700$$\n$$5T = 1700 \\implies T = 340\\text{ K}$$",
    "Easy"
)

# Q43
add_q(
    "Thermal equilibrium",
    "The Zeroth Law of Thermodynamics enables us to define:",
    [
        "Temperature",
        "Entropy",
        "Internal energy",
        "Work"
    ],
    0,
    "The Zeroth law provides the logical basis for the concept of temperature as the property that determines whether systems are in thermal equilibrium.",
    "Easy"
)

# Q44
add_q(
    "Thermal equilibrium",
    "On a new scale of temperature (which is linear) and called the W scale, the freezing and boiling points of water are $39^\\circ\\text{W}$ and $239^\\circ\\text{W}$ respectively. What will be the temperature on the new scale corresponding to $39^\\circ\\text{C}$?",
    [
        "$117^\\circ\\text{W}$",
        "$100^\\circ\\text{W}$",
        "$78^\\circ\\text{W}$",
        "$139^\\circ\\text{W}$"
    ],
    0,
    "$$\\frac{W - 39}{239 - 39} = \\frac{C - 0}{100 - 0} \\implies \\frac{W - 39}{200} = \\frac{39}{100} \\implies W - 39 = 78 \\implies W = 117^\\circ\\text{W}$$",
    "Easy"
)

# Q45
add_q(
    "Thermal equilibrium",
    "In which of the following processes does the internal energy of an ideal gas NOT change?",
    [
        "Isothermal expansion",
        "Adiabatic expansion",
        "Isobaric compression",
        "Isochoric cooling"
    ],
    0,
    "Internal energy of an ideal gas is purely a function of temperature ($U = n C_v T$). In an isothermal process, $T = \\text{constant}$, so $\\Delta U = 0$.",
    "Easy"
)

# ==============================================================================
# SUBTOPIC 2: Laws of thermodynamics (zeroth, first, second) (45 Questions)
# ==============================================================================

# Q46
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "According to the First Law of Thermodynamics, $\\Delta Q = \\Delta U + W$. Which of the following is a state function?",
    [
        "Internal energy $U$",
        "Heat added $Q$",
        "Work done $W$",
        "Both $Q$ and $W$"
    ],
    0,
    "Internal energy $U$ depends only on the current thermodynamic state (e.g., $P, V, T$) of the system and is independent of the path taken. Heat $Q$ and work $W$ are path-dependent quantities (path functions).",
    "Easy"
)

# Q47
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "In an adiabatic process, a gas does $150\\text{ J}$ of work on its surroundings. The change in internal energy of the gas is:",
    [
        "$-150\\text{ J}$",
        "$+150\\text{ J}$",
        "$0\\text{ J}$",
        "$+300\\text{ J}$"
    ],
    0,
    "In an adiabatic process, $\\Delta Q = 0$. By the first law:\n$$\\Delta Q = \\Delta U + W \\implies 0 = \\Delta U + 150 \\implies \\Delta U = -150\\text{ J}$$",
    "Easy"
)

# Q48
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "A Carnot engine operates between temperatures $T_H = 500\\text{ K}$ and $T_C = 300\\text{ K}$. Its thermal efficiency is:",
    [
        "$40\\%$",
        "$60\\%$",
        "$20\\%$",
        "$50\\%$"
    ],
    0,
    "The efficiency of a Carnot engine is:\n$$\\eta = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300}{500} = 1 - 0.60 = 0.40 = 40\\%$$",
    "Easy"
)

# Q49
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "If a Carnot engine absorbs $2000\\text{ J}$ of heat from a reservoir at $600\\text{ K}$ and exhausts heat to a sink at $300\\text{ K}$, the work delivered by the engine per cycle is:",
    [
        "$1000\\text{ J}$",
        "$1500\\text{ J}$",
        "$500\\text{ J}$",
        "$2000\\text{ J}$"
    ],
    0,
    "Efficiency $\\eta = 1 - \\frac{300}{600} = 0.50$.\nWork done: $W = \\eta Q_H = 0.50 \\times 2000\\text{ J} = 1000\\text{ J}$.",
    "Easy"
)

# Q50
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "The coefficient of performance (COP) $\\beta$ of an ideal Carnot refrigerator operating between temperatures $T_C$ and $T_H$ ($T_H > T_C$) is:",
    [
        "$\\frac{T_C}{T_H - T_C}$",
        "$\\frac{T_H}{T_H - T_C}$",
        "$\\frac{T_H - T_C}{T_C}$",
        "$1 - \\frac{T_C}{T_H}$"
    ],
    0,
    "The coefficient of performance of a refrigerator is defined as $\\beta = \\frac{Q_C}{W} = \\frac{Q_C}{Q_H - Q_C} = \\frac{T_C}{T_H - T_C}$.",
    "Easy"
)

# Q51
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "A refrigerator works between $0^\\circ\\text{C}$ and $27^\\circ\\text{C}$. For every $1\\text{ J}$ of work supplied to the compressor, the heat extracted from the cold reservoir is:",
    [
        "$10.1\\text{ J}$",
        "$9.1\\text{ J}$",
        "$8.0\\text{ J}$",
        "$12.5\\text{ J}$"
    ],
    0,
    "$$T_C = 0 + 273 = 273\\text{ K}, \\quad T_H = 27 + 273 = 300\\text{ K}$$\n$$\\beta = \\frac{T_C}{T_H - T_C} = \\frac{273}{300 - 273} = \\frac{273}{27} \\approx 10.11$$\nHeat extracted $Q_C = \\beta W = 10.11 \\times 1\\text{ J} \\approx 10.1\\text{ J}$.",
    "Medium"
)

# Q52
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "The Kelvin-Planck statement of the Second Law of Thermodynamics asserts that:",
    [
        "It is impossible to construct a heat engine operating in a cycle that produces no effect other than the extraction of heat from a reservoir and the performance of an equivalent amount of work",
        "Heat can spontaneously flow from a colder body to a hotter body without any external work",
        "The total energy of an isolated system is conserved",
        "Entropy of an isolated system always decreases"
    ],
    0,
    "The Kelvin-Planck statement establishes that 100% efficient heat engines are physically impossible; a heat engine must reject some heat to a lower temperature sink.",
    "Easy"
)

# Q53
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "The Clausius statement of the Second Law of Thermodynamics asserts that:",
    [
        "It is impossible to construct a device operating in a cycle that produces no effect other than the transfer of heat from a cooler body to a hotter body",
        "Heat cannot be converted into work under any circumstances",
        "All natural processes are reversible",
        "Absolute zero can be achieved in a finite number of steps"
    ],
    0,
    "The Clausius statement forbids a self-acting refrigerator that transfers heat from a lower temperature body to a higher temperature body without external work input.",
    "Easy"
)

# Q54
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "In any reversible cyclic process, the cyclic integral of $dQ / T$ is:",
    [
        "$\\oint \\frac{dQ}{T} = 0$",
        "$\\oint \\frac{dQ}{T} > 0$",
        "$\\oint \\frac{dQ}{T} < 0$",
        "$\\oint \\frac{dQ}{T} = \\infty$"
    ],
    0,
    "By Clausius' theorem, for any reversible cycle, $\\oint \\frac{dQ}{T} = 0$. This proves that entropy $S$, defined by $dS = \\frac{dQ_{\\text{rev}}}{T}$, is a state function.",
    "Easy"
)

# Q55
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "For an irreversible process in an isolated system, the change in entropy is:",
    [
        "$\\Delta S > 0$",
        "$\\Delta S = 0$",
        "$\\Delta S < 0$",
        "$\\Delta S = -\\infty$"
    ],
    0,
    "The principle of increase of entropy states that for any spontaneous or irreversible process in an isolated system, the total entropy of the system must increase: $\\Delta S > 0$.",
    "Easy"
)

# Q56
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "A Carnot engine has an efficiency of $50\\%$ when its sink is at $20^\\circ\\text{C}$ ($293\\text{ K}$). If the source temperature remains unchanged, by how much should the sink temperature be lowered to increase the efficiency to $60\\%$?",
    [
        "$58.6\\text{ K}$",
        "$29.3\\text{ K}$",
        "$75.0\\text{ K}$",
        "$117.2\\text{ K}$"
    ],
    0,
    "Initial condition: $\\eta = 1 - \\frac{T_C}{T_H} = 0.50 \\implies \\frac{293}{T_H} = 0.50 \\implies T_H = 586\\text{ K}$.\nDesired efficiency $\\eta' = 0.60$:\n$$1 - \\frac{T_C'}{586} = 0.60 \\implies \\frac{T_C'}{586} = 0.40 \\implies T_C' = 586 \\times 0.40 = 234.4\\text{ K}$$\nTemperature reduction:\n$$\\Delta T_C = T_C - T_C' = 293 - 234.4 = 58.6\\text{ K}$$",
    "Medium"
)

# Q57
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "Two Carnot engines A and B operate in series. Engine A receives heat at $T_1$ and rejects heat to a reservoir at temperature $T$. Engine B receives the heat rejected by A and rejects heat to a sink at $T_2$. If the work outputs of the two engines are equal ($W_A = W_B$), the intermediate temperature $T$ is:",
    [
        "$\\frac{T_1 + T_2}{2}$",
        "$\\sqrt{T_1 T_2}$",
        "$\\frac{2T_1 T_2}{T_1 + T_2}$",
        "$\\frac{T_1 - T_2}{2}$"
    ],
    0,
    "For engine A: $W_A = Q_1 - Q = Q_1\\left(1 - \\frac{T}{T_1}\\right)$.\nSince $\\frac{Q_1}{T_1} = \\frac{Q}{T}$, we have $W_A = C(T_1 - T)$, where $C = Q_1 / T_1$.\nSimilarly, for engine B: $W_B = Q - Q_2 = C(T - T_2)$.\nSetting $W_A = W_B$:\n$$T_1 - T = T - T_2 \\implies 2T = T_1 + T_2 \\implies T = \\frac{T_1 + T_2}{2}$$",
    "Medium"
)

# Q58
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "In the previous question, if the two engines have equal efficiencies ($\\eta_A = \\eta_B$), the intermediate temperature $T$ is:",
    [
        "$\\sqrt{T_1 T_2}$",
        "$\\frac{T_1 + T_2}{2}$",
        "$\\frac{2T_1 T_2}{T_1 + T_2}$",
        "$\\frac{T_1^2 + T_2^2}{T_1 + T_2}$"
    ],
    0,
    "Equal efficiencies imply:\n$$1 - \\frac{T}{T_1} = 1 - \\frac{T_2}{T} \\implies \\frac{T}{T_1} = \\frac{T_2}{T} \\implies T^2 = T_1 T_2 \\implies T = \\sqrt{T_1 T_2}$$",
    "Medium"
)

# Q59
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "A system goes from state A to state B via two different paths 1 and 2. If $W_1$ and $W_2$ are the work done and $Q_1$ and $Q_2$ are the heat absorbed along the respective paths, which of the following relations is ALWAYS correct?",
    [
        "$Q_1 - W_1 = Q_2 - W_2$",
        "$Q_1 = Q_2$",
        "$W_1 = W_2$",
        "$Q_1 + W_1 = Q_2 + W_2$"
    ],
    0,
    "By the first law of thermodynamics, $\\Delta U = Q - W$. Since internal energy is a state function, the change $\\Delta U = U_B - U_A$ is the same for both paths:\n$$\\Delta U_1 = \\Delta U_2 \\implies Q_1 - W_1 = Q_2 - W_2$$",
    "Easy"
)

# Q60
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "One mole of an ideal monoatomic gas undergoes a cyclic process. The net work done by the gas in one complete cycle is $1200\\text{ J}$. The net heat absorbed by the gas in the cycle is:",
    [
        "$1200\\text{ J}$",
        "$0\\text{ J}$",
        "$-1200\\text{ J}$",
        "$2400\\text{ J}$"
    ],
    0,
    "For any complete cyclic process, the initial and final states are identical, so $\\Delta U = 0$. By the first law:\n$$Q_{\\text{net}} = \\Delta U + W_{\\text{net}} = 0 + 1200\\text{ J} = 1200\\text{ J}$$",
    "Easy"
)

# Q61
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "If the door of a working refrigerator is left open in a closed, thermally insulated room, the temperature of the room will:",
    [
        "Increase",
        "Decrease",
        "Remain unchanged",
        "First decrease then remain constant"
    ],
    0,
    "The refrigerator extracts heat $Q_C$ from the room and discharges heat $Q_H = Q_C + W$ into the room, where $W$ is the electrical work done by the compressor. Thus, the net heat added to the room per unit time is $Q_H - Q_C = W > 0$, so the room temperature gradually increases.",
    "Easy"
)

# Q62
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "A Carnot engine absorbs $1000\\text{ kJ}$ of heat from a reservoir at $400\\text{ K}$ and rejects heat to a sink at $300\\text{ K}$. The heat rejected to the sink per cycle is:",
    [
        "$750\\text{ kJ}$",
        "$250\\text{ kJ}$",
        "$500\\text{ kJ}$",
        "$800\\text{ kJ}$"
    ],
    0,
    "For a Carnot cycle:\n$$\\frac{Q_C}{Q_H} = \\frac{T_C}{T_H} \\implies Q_C = Q_H \\frac{T_C}{T_H} = 1000\\text{ kJ} \\times \\frac{300}{400} = 750\\text{ kJ}$$",
    "Easy"
)

# Q63
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "The entropy change $\\Delta S$ when $1\\text{ mole}$ of an ideal gas undergoes a reversible isothermal expansion from volume $V_1$ to $V_2$ is:",
    [
        "$R\\ln\\left(\\frac{V_2}{V_1}\\right)$",
        "$R\\ln\\left(\\frac{V_1}{V_2}\\right)$",
        "$0$",
        "$C_v\\ln\\left(\\frac{V_2}{V_1}\\right)$"
    ],
    0,
    "In an isothermal process, $T = \\text{constant}$, and $Q = W = nRT \\ln(V_2/V_1)$.\n$$\\Delta S = \\int \\frac{dQ}{T} = \\frac{Q}{T} = \\frac{nRT\\ln(V_2/V_1)}{T} = nR\\ln\\left(\\frac{V_2}{V_1}\\right)$$\nFor $n = 1$, $\\Delta S = R\\ln(V_2/V_1)$.",
    "Medium"
)

# Q64
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "During a free expansion of an ideal gas into an evacuated insulated container (Joule expansion), which of the following is true?",
    [
        "$W = 0, \\quad Q = 0, \\quad \\Delta U = 0, \\quad \\Delta T = 0$",
        "$W > 0, \\quad Q = 0, \\quad \\Delta U < 0$",
        "$W = 0, \\quad Q > 0, \\quad \\Delta U > 0$",
        "$W < 0, \\quad Q = 0, \\quad \\Delta T > 0$"
    ],
    0,
    "In free expansion against vacuum ($P_{\\text{ext}} = 0$), $W = 0$. Since the vessel is insulated, $Q = 0$. By the first law, $\\Delta U = Q - W = 0$. For an ideal gas, $U = n C_v T$, so $\\Delta U = 0$ implies $\\Delta T = 0$ (temperature remains constant). Note however that the process is highly irreversible and entropy increases.",
    "Medium"
)

# Q65
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "In the free expansion described in the previous question, the entropy change of the ideal gas of $n$ moles expanding from $V$ to $2V$ is:",
    [
        "$nR\\ln 2$",
        "$0$",
        "$-nR\\ln 2$",
        "$n C_v \\ln 2$"
    ],
    0,
    "Entropy is a state function. Since initial and final temperatures are identical ($T_1 = T_2$), we connect the initial and final states by a reversible isothermal process:\n$$\\Delta S = nR\\ln\\left(\\frac{V_2}{V_1}\\right) = nR\\ln\\left(\\frac{2V}{V}\\right) = nR\\ln 2 > 0$$",
    "Medium"
)

# Q66
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "A Carnot engine operates with a source at $127^\\circ\\text{C}$ and a sink at $27^\\circ\\text{C}$. If it absorbs $4000\\text{ J}$ of heat from the source, the amount of heat converted into useful mechanical work is:",
    [
        "$1000\\text{ J}$",
        "$3000\\text{ J}$",
        "$2000\\text{ J}$",
        "$400\\text{ J}$"
    ],
    0,
    "$$T_H = 127 + 273 = 400\\text{ K}, \\quad T_C = 27 + 273 = 300\\text{ K}$$\n$$\\eta = 1 - \\frac{300}{400} = 0.25$$\n$$W = \\eta Q_H = 0.25 \\times 4000\\text{ J} = 1000\\text{ J}$$",
    "Easy"
)

# Q67
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "Which of the following processes is thermodynamically REVERSIBLE?",
    [
        "Quasi-static isothermal expansion with frictionless piston",
        "Free expansion of a gas into vacuum",
        "Heat conduction across a finite temperature difference",
        "Inelastic collision of two bodies"
    ],
    0,
    "A process is reversible only if it is quasi-static (infinitely slow, passing through equilibrium states) and completely dissipative-free (no friction, viscosity, or finite temperature gradients).",
    "Easy"
)

# Q68
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "The maximum possible efficiency of any heat engine operating between two thermal reservoirs at temperatures $T_H$ and $T_C$ is:",
    [
        "That of a reversible Carnot engine: $1 - T_C/T_H$",
        "$100\\%$",
        "$T_C / T_H$",
        "$\\frac{T_H - T_C}{T_H + T_C}$"
    ],
    0,
    "Carnot's theorem states that no heat engine operating between two given reservoirs can be more efficient than a reversible Carnot engine operating between the same reservoirs.",
    "Easy"
)

# Q69
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "An ideal gas absorbs $300\\text{ J}$ of heat and expands against a constant external pressure of $1.0 \\times 10^5\\text{ Pa}$ from $1.0\\text{ L}$ to $2.5\\text{ L}$. The change in internal energy of the gas is:",
    [
        "$+150\\text{ J}$",
        "$+450\\text{ J}$",
        "$-150\\text{ J}$",
        "$+300\\text{ J}$"
    ],
    0,
    "Change in volume:\n$$\\Delta V = 2.5\\text{ L} - 1.0\\text{ L} = 1.5\\text{ L} = 1.5 \\times 10^{-3}\\text{ m}^3$$\nWork done by the gas:\n$$W = P_{\\text{ext}}\\Delta V = 1.0 \\times 10^5 \\times 1.5 \\times 10^{-3} = 150\\text{ J}$$\nBy the first law:\n$$\\Delta U = Q - W = 300\\text{ J} - 150\\text{ J} = +150\\text{ J}$$",
    "Medium"
)

# Q70
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "An engine operating between $100^\\circ\\text{C}$ and $0^\\circ\\text{C}$ takes in $1000\\text{ J}$ of heat and produces $300\\text{ J}$ of work. This engine:",
    [
        "Violates the Second Law of Thermodynamics",
        "Violates the First Law of Thermodynamics",
        "Is a valid reversible engine",
        "Is an ideal Carnot engine"
    ],
    0,
    "The maximum theoretical efficiency between $373\\text{ K}$ and $273\\text{ K}$ is:\n$$\\eta_{\\text{Carnot}} = 1 - \\frac{273}{373} \\approx 1 - 0.732 = 0.268 = 26.8\\%$$\nThe claimed efficiency is $\\eta = \\frac{W}{Q} = \\frac{300}{1000} = 30.0\\%$. Since claimed efficiency exceeds the maximum theoretical Carnot efficiency ($30\\% > 26.8\\%$), it violates the Second Law of Thermodynamics.",
    "Medium"
)

# Q71
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "The relation between the coefficient of performance $\\beta$ of a Carnot refrigerator and the efficiency $\\eta$ of a Carnot heat engine operating between the same temperature limits is:",
    [
        "$\\beta = \\frac{1 - \\eta}{\\eta}$",
        "$\\beta = \\frac{\\eta}{1 - \\eta}$",
        "$\\beta = \\frac{1}{\\eta}$",
        "$\\beta = 1 - \\eta$"
    ],
    0,
    "Since $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{T_H - T_C}{T_H}$ and $\\beta = \\frac{T_C}{T_H - T_C}$:\n$$\\frac{1 - \\eta}{\\eta} = \\frac{T_C / T_H}{(T_H - T_C)/T_H} = \\frac{T_C}{T_H - T_C} = \\beta$$",
    "Medium"
)

# Q72
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "A Carnot engine has efficiency $\\eta = 0.40$. If it is operated in reverse as a refrigerator, its coefficient of performance will be:",
    [
        "$1.5$",
        "$2.5$",
        "$0.67$",
        "$0.40$"
    ],
    0,
    "Using $\\beta = \\frac{1 - \\eta}{\\eta}$:\n$$\\beta = \\frac{1 - 0.40}{0.40} = \\frac{0.60}{0.40} = 1.5$$",
    "Easy"
)

# Q73
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "For an ideal gas, the change in internal energy during any process is given by $\\Delta U = n C_v \\Delta T$. This expression is valid for:",
    [
        "Any thermodynamic process (isochoric, isobaric, isothermal, adiabatic, or polytropic)",
        "Isochoric processes only",
        "Isobaric processes only",
        "Adiabatic processes only"
    ],
    0,
    "Because internal energy of an ideal gas is solely a function of temperature ($U = U(T)$), the change $\\Delta U$ depends exclusively on the initial and final temperatures, and is identically equal to $n C_v \\Delta T$ for any process whatsoever.",
    "Easy"
)

# Q74
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "When a gas is compressed adiabatically, its temperature:",
    [
        "Increases",
        "Decreases",
        "Remains unchanged",
        "Becomes zero"
    ],
    0,
    "In adiabatic compression, $Q = 0$ and work is done ON the gas ($W < 0$). By the first law, $\\Delta U = Q - W = 0 - (-|W|) = +|W| > 0$. Since internal energy increases, the temperature of the gas rises.",
    "Easy"
)

# Q75
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "When a gas expands adiabatically, its temperature:",
    [
        "Decreases",
        "Increases",
        "Remains constant",
        "Becomes infinite"
    ],
    0,
    "In adiabatic expansion, $Q = 0$ and work is done BY the gas ($W > 0$). By the first law, $\\Delta U = -W < 0$. The gas cools at the expense of its own internal energy.",
    "Easy"
)

# Q76
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "If $100\\text{ J}$ of heat is added to a system while it does $40\\text{ J}$ of work, and later $20\\text{ J}$ of heat is removed while $30\\text{ J}$ of work is done on it, the net change in internal energy of the system is:",
    [
        "$+70\\text{ J}$",
        "$+50\\text{ J}$",
        "$+90\\text{ J}$",
        "$+30\\text{ J}$"
    ],
    0,
    "First step: $\\Delta U_1 = Q_1 - W_1 = 100 - 40 = +60\\text{ J}$.\nSecond step: $\\Delta U_2 = Q_2 - W_2 = (-20) - (-30) = -20 + 30 = +10\\text{ J}$.\nNet change: $\\Delta U = \\Delta U_1 + \\Delta U_2 = 60 + 10 = +70\\text{ J}$.",
    "Easy"
)

# Q77
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "A reversible engine converts one-sixth of the heat input into work. When the temperature of the sink is reduced by $62^\\circ\\text{C}$, the efficiency is doubled. The temperatures of the source and sink are:",
    [
        "$99^\\circ\\text{C}$ and $37^\\circ\\text{C}$",
        "$100^\\circ\\text{C}$ and $0^\\circ\\text{C}$",
        "$127^\\circ\\text{C}$ and $27^\\circ\\text{C}$",
        "$80^\\circ\\text{C}$ and $18^\\circ\\text{C}$"
    ],
    0,
    "Initially: $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{1}{6} \\implies \\frac{T_C}{T_H} = \\frac{5}{6} \\implies T_C = \\frac{5}{6}T_H$.\nWhen $T_C$ is reduced by $62\\text{ K}$, new efficiency is $2 \\times \\frac{1}{6} = \\frac{1}{3}$:\n$$1 - \\frac{T_C - 62}{T_H} = \\frac{1}{3} \\implies \\frac{T_C - 62}{T_H} = \\frac{2}{3}$$\n$$\\frac{T_C}{T_H} - \\frac{62}{T_H} = \\frac{2}{3} \\implies \\frac{5}{6} - \\frac{62}{T_H} = \\frac{4}{6} \\implies \\frac{62}{T_H} = \\frac{1}{6} \\implies T_H = 372\\text{ K}$$\nIn Celsius: $T_H = 372 - 273 = 99^\\circ\\text{C}$.\nSink temperature: $T_C = \\frac{5}{6}(372) = 310\\text{ K} = 310 - 273 = 37^\\circ\\text{C}$.",
    "Hard"
)

# Q78
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "During an isothermal expansion of an ideal gas, its entropy:",
    [
        "Increases",
        "Decreases",
        "Remains unchanged",
        "Becomes zero"
    ],
    0,
    "In isothermal expansion, heat is absorbed by the gas ($Q > 0$) at constant temperature $T$. The entropy change is $\\Delta S = Q/T > 0$, so entropy increases.",
    "Easy"
)

# Q79
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "During a reversible adiabatic process, the entropy of the system:",
    [
        "Remains constant",
        "Increases linearly",
        "Decreases exponentially",
        "Becomes negative"
    ],
    0,
    "In a reversible adiabatic process, $dQ_{\\text{rev}} = 0$, so $dS = \\frac{dQ_{\\text{rev}}}{T} = 0$. Hence, the entropy remains strictly constant (isentropic process).",
    "Easy"
)

# Q80
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "The efficiency of a Carnot engine depends only on:",
    [
        "The temperatures of the heat source and heat sink",
        "The working substance used",
        "The volume of the cylinder",
        "The nature of the fuel"
    ],
    0,
    "Carnot efficiency $\\eta = 1 - \\frac{T_C}{T_H}$ is completely independent of the working substance (whether ideal gas, steam, or liquid) and depends purely on the absolute temperatures of the hot source and cold sink.",
    "Easy"
)

# Q81
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "Heat energy cannot be completely converted into mechanical work in a continuous cycle. This fact is a consequence of:",
    [
        "The Second Law of Thermodynamics",
        "The First Law of Thermodynamics",
        "The Zeroth Law of Thermodynamics",
        "The Third Law of Thermodynamics"
    ],
    0,
    "The limitation on converting heat entirely into work in a continuous cyclic process is dictated by the Second Law of Thermodynamics (Kelvin-Planck statement).",
    "Easy"
)

# Q82
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "An ideal heat engine exhausts heat at $77^\\circ\\text{C}$. To achieve an efficiency of $30\\%$, the temperature of the source must be:",
    [
        "$227^\\circ\\text{C}$",
        "$100^\\circ\\text{C}$",
        "$150^\\circ\\text{C}$",
        "$300^\\circ\\text{C}$"
    ],
    0,
    "$$T_C = 77 + 273 = 350\\text{ K}$$\n$$\\eta = 1 - \\frac{T_C}{T_H} = 0.30 \\implies \\frac{350}{T_H} = 0.70 \\implies T_H = \\frac{350}{0.70} = 500\\text{ K}$$\nIn Celsius: $T_H = 500 - 273 = 227^\\circ\\text{C}$.",
    "Easy"
)

# Q83
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "A refrigerator has a coefficient of performance of 5. If the temperature inside the freezer is $-20^\\circ\\text{C}$ ($253\\text{ K}$), what is the temperature of the surroundings?",
    [
        "$30.6^\\circ\\text{C}$",
        "$25.0^\\circ\\text{C}$",
        "$35.2^\\circ\\text{C}$",
        "$40.0^\\circ\\text{C}$"
    ],
    0,
    "$$\\beta = \\frac{T_C}{T_H - T_C} \\implies 5 = \\frac{253}{T_H - 253} \\implies T_H - 253 = \\frac{253}{5} = 50.6$$\n$$T_H = 253 + 50.6 = 303.6\\text{ K} = 303.6 - 273 = 30.6^\\circ\\text{C}$$",
    "Medium"
)

# Q84
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "In a thermodynamic cycle, the area enclosed by the cycle on a Temperature-Entropy ($T-S$) indicator diagram represents:",
    [
        "The net work done per cycle",
        "The total internal energy",
        "The heat rejected to the sink only",
        "The thermal conductivity"
    ],
    0,
    "Since $dQ = T dS$, the area enclosed by a closed reversible cycle in the $T-S$ plane is $\\oint T dS = Q_{\\text{net}}$. For any cyclic process, $\\Delta U = 0$, so $W_{\\text{net}} = Q_{\\text{net}}$. Thus, the enclosed area represents the net work done.",
    "Medium"
)

# Q85
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "For a Carnot cycle plotted on a $T-S$ (temperature vs entropy) diagram, the shape of the cycle is a:",
    [
        "Rectangle",
        "Circle",
        "Parallelogram with slanted sides",
        "Triangle"
    ],
    0,
    "A Carnot cycle consists of two isothermal processes (constant temperature, horizontal lines on $T-S$) and two reversible adiabatic processes (constant entropy, vertical lines on $T-S$). The combination of two horizontal and two vertical lines forms a rectangle.",
    "Easy"
)

# Q86
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "When ice melts at $0^\\circ\\text{C}$ and atmospheric pressure, the work done by the atmosphere on the ice-water system is positive because:",
    [
        "Water has higher density than ice, so the volume contracts upon melting",
        "Water expands upon melting",
        "Latent heat of fusion is absorbed",
        "Temperature remains constant"
    ],
    0,
    "Ice has an open lattice structure and is less dense than liquid water ($0.917\\text{ g/cm}^3$ vs $1.00\\text{ g/cm}^3$). Upon melting, volume decreases ($\\Delta V < 0$). Work done BY the system is $P\\Delta V < 0$, which means work done ON the system by the atmosphere is positive.",
    "Medium"
)

# Q87
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "An ideal gas is taken through an isobaric process. If the heat supplied is $Q$, the fraction of heat converted into work is: (given adiabatic exponent $\\gamma$)",
    [
        "$1 - \\frac{1}{\\gamma}$",
        "$\\frac{1}{\\gamma}$",
        "$\\frac{\\gamma - 1}{\\gamma + 1}$",
        "$\\gamma - 1$"
    ],
    0,
    "For an isobaric process, $W = P\\Delta V = nR\\Delta T$ and $Q = n C_p \\Delta T$.\n$$\\frac{W}{Q} = \\frac{nR\\Delta T}{n C_p \\Delta T} = \\frac{R}{C_p} = \\frac{C_p - C_v}{C_p} = 1 - \\frac{C_v}{C_p} = 1 - \\frac{1}{\\gamma}$$",
    "Medium"
)

# Q88
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "In the previous question, the fraction of heat supplied that goes into increasing the internal energy is:",
    [
        "$\\frac{1}{\\gamma}$",
        "$1 - \\frac{1}{\\gamma}$",
        "$\\frac{\\gamma}{\\gamma - 1}$",
        "$\\frac{1}{\\gamma - 1}$"
    ],
    0,
    "$$\\frac{\\Delta U}{Q} = \\frac{n C_v \\Delta T}{n C_p \\Delta T} = \\frac{C_v}{C_p} = \\frac{1}{\\gamma}$$",
    "Easy"
)

# Q89
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "For a monoatomic ideal gas ($\\gamma = 5/3$) undergoing isobaric heating, what percentage of the heat added is converted into mechanical work?",
    [
        "$40\\%$",
        "$60\\%$",
        "$25\\%$",
        "$50\\%$"
    ],
    0,
    "$$\\frac{W}{Q} = 1 - \\frac{1}{\\gamma} = 1 - \\frac{1}{5/3} = 1 - \\frac{3}{5} = \\frac{2}{5} = 40\\%$$",
    "Easy"
)

# Q90
add_q(
    "Laws of thermodynamics (zeroth, first, second)",
    "The Third Law of Thermodynamics states that:",
    [
        "The entropy of a perfect crystal approaches zero as the absolute temperature approaches zero",
        "Energy cannot be created or destroyed",
        "The entropy of the universe is constant",
        "Thermal equilibrium is transitive"
    ],
    0,
    "According to the Nernst-Planck statement of the Third Law of Thermodynamics, the entropy of a pure, perfectly crystalline substance is zero at absolute zero temperature ($T = 0\\text{ K}$).",
    "Easy"
)

# Balance options for both subtopics
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

balance_subtopic("Thermal equilibrium")
balance_subtopic("Laws of thermodynamics (zeroth, first, second)")

# Save to batch 1
with open("scripts/thermo_grav/thermo_batch1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Thermodynamics Batch 1 generated successfully! Total questions: {len(questions)}")
