# -*- coding: utf-8 -*-
"""
Generate Batch 2 of Thermodynamics:
- Isothermal and adiabatic processes (45 MCQs)
- Work done in thermodynamic processes (45 MCQs)
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
# SUBTOPIC 3: Isothermal and adiabatic processes (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Isothermal and adiabatic processes",
    "The slope of an adiabatic curve on a $P-V$ indicator diagram is related to the slope of an isothermal curve at the same point by:",
    [
        "$(\\text{Slope})_{\\text{adia}} = \\gamma (\\text{Slope})_{\\text{iso}}$",
        "$(\\text{Slope})_{\\text{adia}} = \\frac{1}{\\gamma} (\\text{Slope})_{\\text{iso}}$",
        "$(\\text{Slope})_{\\text{adia}} = (\\text{Slope})_{\\text{iso}}$",
        "$(\\text{Slope})_{\\text{adia}} = \\gamma^2 (\\text{Slope})_{\\text{iso}}$"
    ],
    0,
    "For an isothermal process, $PV = \\text{constant} \\implies \\frac{dP}{dV} = -\\frac{P}{V}$.\nFor an adiabatic process, $PV^\\gamma = \\text{constant} \\implies \\frac{dP}{dV} = -\\gamma \\frac{P}{V} = \\gamma \\left(-\\frac{P}{V}\\right)$.\nTherefore, the adiabatic curve is $\\gamma$ times steeper than the isothermal curve.",
    "Easy"
)

# Q2
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas initially at pressure $P_1$ and volume $V_1$ expands adiabatically to volume $V_2 = 2V_1$. If the adiabatic exponent is $\\gamma = 1.4$, the final pressure $P_2$ is:",
    [
        "$P_1 / (2^{1.4})$",
        "$P_1 / 2$",
        "$P_1 / (1.4)^2$",
        "$2^{1.4} P_1$"
    ],
    0,
    "In an adiabatic process, $P_1 V_1^\\gamma = P_2 V_2^\\gamma$.\n$$P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma = P_1 \\left(\\frac{1}{2}\\right)^{1.4} = \\frac{P_1}{2^{1.4}}$$",
    "Easy"
)

# Q3
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas at temperature $T_1$ is compressed adiabatically to one-eighth of its initial volume. If $\\gamma = 5/3$, the final temperature $T_2$ is:",
    [
        "$4T_1$",
        "$2T_1$",
        "$8T_1$",
        "$16T_1$"
    ],
    0,
    "For an adiabatic process, $T V^{\\gamma - 1} = \\text{constant}$.\n$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = T_1 (8)^{(5/3 - 1)} = T_1 (8)^{2/3} = T_1 (2^3)^{2/3} = T_1 (2^2) = 4T_1$$",
    "Easy"
)

# Q4
add_q(
    "Isothermal and adiabatic processes",
    "The work done during an isothermal expansion of $n$ moles of an ideal gas from volume $V_1$ to $V_2$ at temperature $T$ is:",
    [
        "$nRT \\ln\\left(\\frac{V_2}{V_1}\\right)$",
        "$nRT \\left(\\frac{V_2}{V_1}\\right)$",
        "$\\frac{nR(T_2 - T_1)}{\\gamma - 1}$",
        "$n C_v T \\ln\\left(\\frac{V_2}{V_1}\\right)$"
    ],
    0,
    "Work done in an isothermal process is $W = \\int_{V_1}^{V_2} P dV = \\int_{V_1}^{V_2} \\frac{nRT}{V} dV = nRT \\ln\\left(\\frac{V_2}{V_1}\\right)$.",
    "Easy"
)

# Q5
add_q(
    "Isothermal and adiabatic processes",
    "The work done by an ideal gas during a reversible adiabatic expansion from initial state $(P_1, V_1, T_1)$ to final state $(P_2, V_2, T_2)$ is:",
    [
        "$\\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$",
        "$\\frac{P_2 V_2 - P_1 V_1}{\\gamma - 1}$",
        "$\\frac{P_1 V_1 + P_2 V_2}{\\gamma + 1}$",
        "$(\\gamma - 1)(P_1 V_1 - P_2 V_2)$"
    ],
    0,
    "For an adiabatic process, $W = -\\Delta U = -n C_v (T_2 - T_1) = n \\left(\\frac{R}{\\gamma - 1}\\right)(T_1 - T_2) = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$.",
    "Easy"
)

# Q6
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas expands from volume $V$ to $2V$ under three different processes: (I) isobaric, (II) isothermal, and (III) adiabatic. If $W_1, W_2, W_3$ are the work done respectively, then:",
    [
        "$W_1 > W_2 > W_3$",
        "$W_3 > W_2 > W_1$",
        "$W_2 > W_1 > W_3$",
        "$W_1 > W_3 > W_2$"
    ],
    0,
    "On a $P-V$ diagram, the isobaric line is horizontal (highest pressure throughout), the isothermal curve drops as $1/V$, and the adiabatic curve drops even steeper as $1/V^\\gamma$. Since work done is the area under the $P-V$ curve, the areas satisfy: $\\text{Area}_{\\text{isobaric}} > \\text{Area}_{\\text{isothermal}} > \\text{Area}_{\\text{adiabatic}} \\implies W_1 > W_2 > W_3$.",
    "Easy"
)

# Q7
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas is compressed from volume $V$ to $V/2$ under two different processes: (I) isothermal, and (II) adiabatic. If $W_{\\text{iso}}$ and $W_{\\text{adia}}$ are the magnitudes of work done on the gas, then:",
    [
        "$W_{\\text{adia}} > W_{\\text{iso}}$",
        "$W_{\\text{iso}} > W_{\\text{adia}}$",
        "$W_{\\text{adia}} = W_{\\text{iso}}$",
        "$W_{\\text{adia}} = 0$"
    ],
    0,
    "During compression, the adiabatic curve lies strictly ABOVE the isothermal curve because pressure rises much faster ($P \\propto V^{-\\gamma}$ vs $P \\propto V^{-1}$). Therefore, the area under the adiabatic curve during compression is greater than that under the isothermal curve, meaning more work must be done on the gas: $W_{\\text{adia}} > W_{\\text{iso}}$.",
    "Medium"
)

# Q8
add_q(
    "Isothermal and adiabatic processes",
    "The isothermal bulk modulus $B_T$ and adiabatic bulk modulus $B_S$ of an ideal gas at pressure $P$ are:",
    [
        "$B_T = P, \\quad B_S = \\gamma P$",
        "$B_T = \\gamma P, \\quad B_S = P$",
        "$B_T = P/\\gamma, \\quad B_S = P$",
        "$B_T = P, \\quad B_S = P/\\gamma$"
    ],
    0,
    "Bulk modulus is defined as $B = -V \\frac{dP}{dV}$.\nFor isothermal: $\\frac{dP}{dV} = -\\frac{P}{V} \\implies B_T = -V\\left(-\\frac{P}{V}\\right) = P$.\nFor adiabatic: $\\frac{dP}{dV} = -\\gamma \\frac{P}{V} \\implies B_S = -V\\left(-\\gamma \\frac{P}{V}\\right) = \\gamma P$.",
    "Easy"
)

# Q9
add_q(
    "Isothermal and adiabatic processes",
    "During an adiabatic expansion of a gas, the relationship between temperature $T$ and pressure $P$ is given by:",
    [
        "$T^\\gamma P^{1-\\gamma} = \\text{constant}$",
        "$T P^{\\gamma - 1} = \\text{constant}$",
        "$T^{1-\\gamma} P^\\gamma = \\text{constant}$",
        "$T^\\gamma P = \\text{constant}$"
    ],
    0,
    "Using $P V^\\gamma = \\text{constant}$ and substituting $V = \\frac{nRT}{P}$:\n$$P \\left(\\frac{T}{P}\\right)^\\gamma = \\text{constant} \\implies P^{1-\\gamma} T^\\gamma = \\text{constant}$$",
    "Easy"
)

# Q10
add_q(
    "Isothermal and adiabatic processes",
    "A gas for which $\\gamma = 1.5$ is suddenly compressed to one-fourth of its initial volume. The ratio of the final pressure to the initial pressure is:",
    [
        "$8$",
        "$4$",
        "$16$",
        "$2$"
    ],
    0,
    "A sudden process is adiabatic ($Q = 0$).\n$$P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma = P_1 (4)^{1.5} = P_1 (4)^{3/2} = P_1 (2^3) = 8P_1$$\nTherefore, the ratio $P_2 / P_1 = 8$.",
    "Easy"
)

# Q11
add_q(
    "Isothermal and adiabatic processes",
    "In an adiabatic process, the pressure of a gas is found to be proportional to the cube of its absolute temperature ($P \\propto T^3$). The value of $\\gamma$ for the gas is:",
    [
        "$3/2$",
        "$4/3$",
        "$5/3$",
        "$7/5$"
    ],
    0,
    "We know $P^{1-\\gamma} T^\\gamma = \\text{constant} \\implies P \\propto T^{\\frac{\\gamma}{\\gamma - 1}}$.\nGiven $P \\propto T^3$, we equate the exponents:\n$$\\frac{\\gamma}{\\gamma - 1} = 3 \\implies \\gamma = 3\\gamma - 3 \\implies 2\\gamma = 3 \\implies \\gamma = \\frac{3}{2}$$",
    "Medium"
)

# Q12
add_q(
    "Isothermal and adiabatic processes",
    "Two moles of an ideal monoatomic gas ($\\gamma = 5/3$) at $300\\text{ K}$ undergo adiabatic expansion until its temperature drops to $200\\text{ K}$. The work done by the gas is: (Take $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$)",
    [
        "$2494\\text{ J}$",
        "$1663\\text{ J}$",
        "$3326\\text{ J}$",
        "$4988\\text{ J}$"
    ],
    0,
    "$$W = \\frac{nR(T_1 - T_2)}{\\gamma - 1} = \\frac{2 \\times 8.314 \\times (300 - 200)}{5/3 - 1} = \\frac{2 \\times 8.314 \\times 100}{2/3} = 3 \\times 831.4 = 2494.2\\text{ J}$$",
    "Medium"
)

# Q13
add_q(
    "Isothermal and adiabatic processes",
    "Air in a tire pump is compressed rapidly from $1.0\\text{ atm}$ to $5.0\\text{ atm}$. Assuming the process is adiabatic and $\\gamma = 1.4$, the final temperature of the air (initial temperature $300\\text{ K}$) is approximately: (Use $5^{0.286} \\approx 1.58$)",
    [
        "$474\\text{ K}$",
        "$400\\text{ K}$",
        "$520\\text{ K}$",
        "$350\\text{ K}$"
    ],
    0,
    "$$T_2 = T_1 \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma - 1}{\\gamma}} = 300 \\times (5)^{\\frac{1.4 - 1}{1.4}} = 300 \\times (5)^{\\frac{0.4}{1.4}} = 300 \\times 5^{0.286} \\approx 300 \\times 1.58 = 474\\text{ K}$$",
    "Medium"
)

# Q14
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas expands isothermally from $\\left(P_0, V_0\\right)$ to $\\left(P_0/2, 2V_0\\right)$ and then expands adiabatically from $2V_0$ to $4V_0$. If $\\gamma = 1.5$, the final pressure of the gas is:",
    [
        "$\\frac{P_0}{4\\sqrt{2}}$",
        "$\\frac{P_0}{4}$",
        "$\\frac{P_0}{8}$",
        "$\\frac{P_0}{2\\sqrt{2}}$"
    ],
    0,
    "At the end of the isothermal step, $P_1 = P_0/2$ and $V_1 = 2V_0$.\nDuring the adiabatic expansion from $2V_0$ to $4V_0$:\n$$P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma = \\left(\\frac{P_0}{2}\\right) \\left(\\frac{2V_0}{4V_0}\\right)^{1.5} = \\left(\\frac{P_0}{2}\\right) \\left(\\frac{1}{2}\\right)^{3/2} = \\frac{P_0}{2} \\times \\frac{1}{2\\sqrt{2}} = \\frac{P_0}{4\\sqrt{2}}$$",
    "Medium"
)

# Q15
add_q(
    "Isothermal and adiabatic processes",
    "Which of the following is an example of an adiabatic process in everyday life?",
    [
        "Sudden bursting of an inflated bicycle tube",
        "Slow expansion of air in a balloon heated gently by sunshine",
        "Boiling of water in an open kettle",
        "Melting of ice in an icebox"
    ],
    0,
    "When a bicycle tube suddenly bursts, the high-pressure gas expands into the atmosphere so rapidly that there is virtually no time for heat exchange ($Q \\approx 0$), resulting in rapid adiabatic cooling (the escaping air feels cold).",
    "Easy"
)

# Q16
add_q(
    "Isothermal and adiabatic processes",
    "A cylinder fitted with a thermally conducting piston contains a gas. The piston is moved very slowly. The thermodynamic process taking place is predominantly:",
    [
        "Isothermal",
        "Adiabatic",
        "Isochoric",
        "Isobaric"
    ],
    0,
    "Because the cylinder/piston is thermally conducting and the process is carried out infinitely slowly (quasi-statically), heat has ample time to flow and maintain thermal equilibrium with the surroundings at constant temperature, making it isothermal.",
    "Easy"
)

# Q17
add_q(
    "Isothermal and adiabatic processes",
    "The ratio of the speed of sound in an ideal gas calculated using Laplace's adiabatic formula to that calculated using Newton's isothermal formula is:",
    [
        "$\\sqrt{\\gamma}$",
        "$\\gamma$",
        "$1/\\sqrt{\\gamma}$",
        "$\\gamma^2$"
    ],
    0,
    "Newton's formula assumes isothermal propagation: $v_{\\text{Newton}} = \\sqrt{\\frac{B_T}{\\rho}} = \\sqrt{\\frac{P}{\\rho}}$.\nLaplace corrected it to adiabatic propagation: $v_{\\text{Laplace}} = \\sqrt{\\frac{B_S}{\\rho}} = \\sqrt{\\frac{\\gamma P}{\\rho}}$.\nRatio:\n$$\\frac{v_{\\text{Laplace}}}{v_{\\text{Newton}}} = \\frac{\\sqrt{\\gamma P / \\rho}}{\\sqrt{P / \\rho}} = \\sqrt{\\gamma}$$",
    "Easy"
)

# Q18
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas is expanded from $V$ to $2V$ first isothermally and then the experiment is repeated adiabatically. In which case is the final pressure higher?",
    [
        "Isothermal expansion",
        "Adiabatic expansion",
        "Both give the same final pressure",
        "Cannot be determined without knowing $\\gamma$"
    ],
    0,
    "For isothermal expansion, $P_{\\text{iso}} = P_0/2$.\nFor adiabatic expansion, $P_{\\text{adia}} = P_0 / 2^\\gamma$.\nSince $\\gamma > 1$, $2^\\gamma > 2$, so $P_{\\text{iso}} > P_{\\text{adia}}$. The final pressure is higher in the isothermal expansion.",
    "Easy"
)

# Q19
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas expands adiabatically such that its volume becomes twice the initial volume. If its initial temperature is $27^\\circ\\text{C}$ and $\\gamma = 1.5$, what is its final temperature?",
    [
        "$212\\text{ K}$",
        "$150\\text{ K}$",
        "$250\\text{ K}$",
        "$180\\text{ K}$"
    ],
    0,
    "$$T_1 = 27 + 273 = 300\\text{ K}$$\n$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = 300 \\left(\\frac{1}{2}\\right)^{1.5 - 1} = 300 \\left(\\frac{1}{2}\\right)^{0.5} = \\frac{300}{\\sqrt{2}} \\approx \\frac{300}{1.414} \\approx 212.13\\text{ K}$$",
    "Medium"
)

# Q20
add_q(
    "Isothermal and adiabatic processes",
    "When an ideal gas undergoes an adiabatic expansion, the change in internal energy is $\\Delta U = -200\\text{ J}$. The work done by the gas is:",
    [
        "$+200\\text{ J}$",
        "$-200\\text{ J}$",
        "$0\\text{ J}$",
        "$+400\\text{ J}$"
    ],
    0,
    "In an adiabatic process, $Q = 0$. By the first law:\n$$Q = \\Delta U + W \\implies 0 = \\Delta U + W \\implies W = -\\Delta U = -(-200\\text{ J}) = +200\\text{ J}$$",
    "Easy"
)

# Q21
add_q(
    "Isothermal and adiabatic processes",
    "A gas is compressed isothermally to half its initial volume. The same gas is compressed adiabatically to half its initial volume starting from the same initial state. The temperature of the gas:",
    [
        "Increases in the adiabatic case, but remains constant in the isothermal case",
        "Decreases in both cases",
        "Increases in both cases",
        "Remains constant in both cases"
    ],
    0,
    "In an isothermal process, $T$ is held constant by definition. In adiabatic compression, work is done on the gas ($W < 0$) with $Q = 0$, so $\\Delta U = -W > 0$, causing the temperature to rise.",
    "Easy"
)

# Q22
add_q(
    "Isothermal and adiabatic processes",
    "A monoatomic gas ($\\gamma = 5/3$) is compressed adiabatically to $1/8$ of its initial volume. If the initial pressure was $1\\text{ atm}$, the final pressure is:",
    [
        "$32\\text{ atm}$",
        "$16\\text{ atm}$",
        "$64\\text{ atm}$",
        "$8\\text{ atm}$"
    ],
    0,
    "$$P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma = 1 \\times (8)^{5/3} = (2^3)^{5/3} = 2^5 = 32\\text{ atm}$$",
    "Easy"
)

# Q23
add_q(
    "Isothermal and adiabatic processes",
    "In an adiabatic expansion of 2 moles of an ideal gas, the work done was found to be $831.4\\text{ J}$. If the gas is diatomic (rigid, $C_v = \\frac{5}{2}R$), the change in temperature is: (Take $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$)",
    [
        "$-20\\text{ K}$",
        "$+20\\text{ K}$",
        "$-10\\text{ K}$",
        "$+10\\text{ K}$"
    ],
    0,
    "For adiabatic process: $\\Delta U = -W = -831.4\\text{ J}$.\nAlso $\\Delta U = n C_v \\Delta T = 2 \\times \\left(\\frac{5}{2} \\times 8.314\\right) \\Delta T = 5 \\times 8.314 \\Delta T = 41.57 \\Delta T$.\n$$\\Delta T = \\frac{-831.4}{41.57} = -20\\text{ K}$$",
    "Medium"
)

# Q24
add_q(
    "Isothermal and adiabatic processes",
    "During an isothermal process, the heat capacity of an ideal gas is:",
    [
        "Infinite",
        "Zero",
        "$C_v$",
        "$C_p$"
    ],
    0,
    "Heat capacity is defined as $C = \\frac{dQ}{dT}$. In an isothermal process, heat is exchanged while temperature change is zero ($dT = 0$). Thus, $C = \\frac{dQ}{0} = \\infty$.",
    "Easy"
)

# Q25
add_q(
    "Isothermal and adiabatic processes",
    "During an adiabatic process, the heat capacity of a gas is:",
    [
        "Zero",
        "Infinite",
        "$C_v$",
        "$C_p$"
    ],
    0,
    "In an adiabatic process, $dQ = 0$ while $dT \\ne 0$. Therefore, the heat capacity is $C = \\frac{dQ}{dT} = \\frac{0}{dT} = 0$.",
    "Easy"
)

# Q26
add_q(
    "Isothermal and adiabatic processes",
    "Two identical samples of a gas are at the same temperature and pressure. One sample is expanded isothermally to twice its volume, and the other is expanded adiabatically to twice its volume. Comparing the final pressures $P_{\\text{iso}}$ and $P_{\\text{adia}}$:",
    [
        "$P_{\\text{iso}} = 2^{\\gamma - 1} P_{\\text{adia}}$",
        "$P_{\\text{adia}} = 2^{\\gamma - 1} P_{\\text{iso}}$",
        "$P_{\\text{iso}} = 2^\\gamma P_{\\text{adia}}$",
        "$P_{\\text{iso}} = P_{\\text{adia}}$"
    ],
    0,
    "$$P_{\\text{iso}} = \\frac{P_0}{2}, \\quad P_{\\text{adia}} = \\frac{P_0}{2^\\gamma}$$\n$$\\frac{P_{\\text{iso}}}{P_{\\text{adia}}} = \\frac{P_0 / 2}{P_0 / 2^\\gamma} = 2^{\\gamma - 1} \\implies P_{\\text{iso}} = 2^{\\gamma - 1} P_{\\text{adia}}$$",
    "Medium"
)

# Q27
add_q(
    "Isothermal and adiabatic processes",
    "In an isothermal expansion of an ideal gas at temperature $T$, the heat absorbed by the gas is equal to:",
    [
        "The external work done by the gas",
        "The change in internal energy",
        "Zero",
        "The enthalpy change minus work done"
    ],
    0,
    "In an isothermal process for an ideal gas, $\\Delta U = 0$. By the first law, $Q = \\Delta U + W = W$. All heat absorbed from the reservoir is entirely converted into work.",
    "Easy"
)

# Q28
add_q(
    "Isothermal and adiabatic processes",
    "A gas expands from $(P_1, V_1)$ to $(P_2, V_2)$ along an isothermal curve. The average pressure during this expansion is:",
    [
        "$\\frac{P_1 V_1}{V_2 - V_1}\\ln\\left(\\frac{V_2}{V_1}\\right)$",
        "$\\frac{P_1 + P_2}{2}$",
        "$\\sqrt{P_1 P_2}$",
        "$\\frac{P_1 V_1 + P_2 V_2}{V_1 + V_2}$"
    ],
    0,
    "Average pressure is defined as $P_{\\text{avg}} = \\frac{W}{V_2 - V_1} = \\frac{nRT\\ln(V_2/V_1)}{V_2 - V_1} = \\frac{P_1 V_1}{V_2 - V_1}\\ln\\left(\\frac{V_2}{V_1}\\right)$.",
    "Medium"
)

# Q29
add_q(
    "Isothermal and adiabatic processes",
    "A certain mass of gas expands adiabatically. If the temperature falls from $300\\text{ K}$ to $200\\text{ K}$ and the initial volume is $V_0$, the final volume (for $\\gamma = 1.5$) is:",
    [
        "$\\frac{9}{4}V_0$",
        "$\\frac{3}{2}V_0$",
        "$\\frac{2}{3}V_0$",
        "$\\frac{4}{9}V_0$"
    ],
    0,
    "Using $T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1}$ with $\\gamma - 1 = 1.5 - 1 = 0.5$:\n$$300 \\sqrt{V_0} = 200 \\sqrt{V_2} \\implies \\sqrt{\\frac{V_2}{V_0}} = \\frac{300}{200} = \\frac{3}{2} \\implies \\frac{V_2}{V_0} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4} \\implies V_2 = \\frac{9}{4}V_0$$",
    "Medium"
)

# Q30
add_q(
    "Isothermal and adiabatic processes",
    "During an adiabatic compression, 50 J of work is done on the gas. The change in internal energy is:",
    [
        "$+50\\text{ J}$",
        "$-50\\text{ J}$",
        "$0\\text{ J}$",
        "$+100\\text{ J}$"
    ],
    0,
    "By the first law, $\\Delta Q = \\Delta U + W$. In adiabatic compression, $\\Delta Q = 0$ and $W = -50\\text{ J}$.\n$$\\Delta U = -W = -(-50\\text{ J}) = +50\\text{ J}$$",
    "Easy"
)

# Q31
add_q(
    "Isothermal and adiabatic processes",
    "Two gases 1 and 2 have adiabatic exponents $\\gamma_1 = 5/3$ and $\\gamma_2 = 7/5$. Both are compressed adiabatically to half their initial volumes from the same initial state. The ratio of their final pressures $P_1 / P_2$ is:",
    [
        "$2^{4/15}$",
        "$2^{2/3}$",
        "$2^{1/5}$",
        "$1$"
    ],
    0,
    "$$P_1 = P_0 (2)^{5/3}, \\quad P_2 = P_0 (2)^{7/5}$$\n$$\\frac{P_1}{P_2} = 2^{5/3 - 7/5} = 2^{(25 - 21)/15} = 2^{4/15}$$",
    "Medium"
)

# Q32
add_q(
    "Isothermal and adiabatic processes",
    "Which quantity remains strictly invariant during a reversible adiabatic process?",
    [
        "Entropy",
        "Temperature",
        "Pressure",
        "Internal energy"
    ],
    0,
    "A reversible adiabatic process has $dQ = 0 \\implies dS = dQ/T = 0$, so entropy remains invariant (isentropic process).",
    "Easy"
)

# Q33
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas at pressure $P$ and volume $V$ is compressed isothermally to $V/4$. The work done on the gas is:",
    [
        "$2PV\\ln 2$",
        "$PV\\ln 2$",
        "$4PV\\ln 2$",
        "$PV/4$"
    ],
    0,
    "$$W_{\\text{by}} = nRT\\ln(V_f/V_i) = PV\\ln(1/4) = -PV\\ln 4 = -2PV\\ln 2$$\nWork done ON the gas is $|W| = 2PV\\ln 2$.",
    "Easy"
)

# Q34
add_q(
    "Isothermal and adiabatic processes",
    "For an adiabatic expansion of a gas, the value of $\\Delta U / W$ is:",
    [
        "$-1$",
        "$+1$",
        "$0$",
        "$\\gamma$"
    ],
    0,
    "Since $Q = \\Delta U + W = 0$ for an adiabatic process, we have $\\Delta U = -W \\implies \\Delta U / W = -1$.",
    "Easy"
)

# Q35
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas has adiabatic exponent $\\gamma = 4/3$. If the volume of the gas is doubled adiabatically, the temperature changes by a factor of:",
    [
        "$2^{-1/3}$",
        "$2^{1/3}$",
        "$2^{-1/2}$",
        "$2^{1/2}$"
    ],
    0,
    "$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = T_1 \\left(\\frac{1}{2}\\right)^{4/3 - 1} = T_1 2^{-1/3}$$",
    "Easy"
)

# Q36
add_q(
    "Isothermal and adiabatic processes",
    "In an isothermal compression of an ideal gas, the work done on the gas is $W$. The heat expelled to the surroundings is:",
    [
        "$W$",
        "$W/2$",
        "$2W$",
        "$0$"
    ],
    0,
    "For isothermal compression, $\\Delta U = 0$. By the first law, $Q = W_{\\text{by}} = -W_{\\text{on}}$. The heat expelled is $-Q = W_{\\text{on}} = W$.",
    "Easy"
)

# Q37
add_q(
    "Isothermal and adiabatic processes",
    "A gas expands adiabatically from $V_1$ to $V_2$. If $\\Delta T$ is the change in temperature, the work done by the gas is:",
    [
        "$-n C_v \\Delta T$",
        "$n C_v \\Delta T$",
        "$n C_p \\Delta T$",
        "$-n C_p \\Delta T$"
    ],
    0,
    "In an adiabatic process, $W = -\\Delta U = -n C_v \\Delta T$. (Since temperature decreases, $\\Delta T < 0$, making $W > 0$).",
    "Easy"
)

# Q38
add_q(
    "Isothermal and adiabatic processes",
    "If an ideal gas is compressed adiabatically, which of the following increases?",
    [
        "Temperature, pressure, and internal energy",
        "Temperature only",
        "Pressure only",
        "Volume and temperature"
    ],
    0,
    "In adiabatic compression, work is done on the gas ($W < 0$) with $Q = 0$, so $\\Delta U = -W > 0$ (internal energy increases, and so does temperature). The volume decreases, causing pressure to increase even faster than isothermally.",
    "Easy"
)

# Q39
add_q(
    "Isothermal and adiabatic processes",
    "A container with rigid insulating walls is divided into two halves by an insulating partition. One half contains gas at $T_1$, the other at $T_2$. When the partition is removed, the process is:",
    [
        "Adiabatic and irreversible",
        "Isothermal and reversible",
        "Isobaric and reversible",
        "Adiabatic and reversible"
    ],
    0,
    "Because the container walls are insulating, no heat enters or leaves the system ($Q = 0$). Removing the partition causes spontaneous mixing and pressure equalization across a finite gradient, which is irreversible.",
    "Medium"
)

# Q40
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas undergoes an adiabatic process in which $P \\propto V^{-5/3}$. The degrees of freedom of the molecules of the gas must be:",
    [
        "$3$",
        "$5$",
        "$6$",
        "$7$"
    ],
    0,
    "We have $P V^{5/3} = \\text{constant}$, so $\\gamma = 5/3$. Using $\\gamma = 1 + 2/f$:\n$$1 + \\frac{2}{f} = \\frac{5}{3} \\implies \\frac{2}{f} = \\frac{2}{3} \\implies f = 3$$\nThis corresponds to a monoatomic gas.",
    "Easy"
)

# Q41
add_q(
    "Isothermal and adiabatic processes",
    "At what point on the $P-V$ diagram do an isothermal and an adiabatic curve intersect?",
    [
        "At the unique state $(P_0, V_0)$ where both curves pass through the same state, with the adiabatic curve having a steeper negative slope",
        "They can never intersect",
        "They are tangent to each other",
        "They intersect at two points"
    ],
    0,
    "An isothermal curve and an adiabatic curve through a given state point $(P_0, V_0)$ intersect at that single point. Since $\\gamma > 1$, the slope of the adiabatic curve is $\\gamma$ times steeper than the isothermal curve, so they cross each other cleanly without being tangent.",
    "Medium"
)

# Q42
add_q(
    "Isothermal and adiabatic processes",
    "The work done in an isothermal expansion from volume $V$ to $e V$ (where $e$ is Euler's number) for 1 mole of gas at $300\\text{ K}$ is: (Take $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$)",
    [
        "$2494\\text{ J}$",
        "$1247\\text{ J}$",
        "$831\\text{ J}$",
        "$4988\\text{ J}$"
    ],
    0,
    "$$W = nRT\\ln(V_f/V_i) = 1 \\times 8.314 \\times 300 \\times \\ln(e) = 2494.2 \\times 1 \\approx 2494\\text{ J}$$",
    "Easy"
)

# Q43
add_q(
    "Isothermal and adiabatic processes",
    "If an adiabatic curve is given by $T V^x = \\text{constant}$, then $x$ is equal to:",
    [
        "$\\gamma - 1$",
        "$\\gamma$",
        "$1 - \\gamma$",
        "$1/\\gamma$"
    ],
    0,
    "The adiabatic relation in temperature and volume is $T V^{\\gamma - 1} = \\text{constant}$, so $x = \\gamma - 1$.",
    "Easy"
)

# Q44
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas at $27^\\circ\\text{C}$ is compressed adiabatically until its pressure is 8 times the original pressure. If $\\gamma = 1.5$, the final temperature is:",
    [
        "$600\\text{ K}$",
        "$450\\text{ K}$",
        "$300\\text{ K}$",
        "$900\\text{ K}$"
    ],
    0,
    "$$T_1 = 300\\text{ K}$$\n$$T_2 = T_1 \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma - 1}{\\gamma}} = 300 \\times (8)^{\\frac{1.5 - 1}{1.5}} = 300 \\times 8^{1/3} = 300 \\times 2 = 600\\text{ K}$$",
    "Easy"
)

# Q45
add_q(
    "Isothermal and adiabatic processes",
    "An ideal gas expands isothermally from volume $V_1$ to $V_2$, and then is compressed adiabatically back to volume $V_1$. The final pressure $P_f$ compared to initial pressure $P_i$ satisfies:",
    [
        "$P_f > P_i$",
        "$P_f < P_i$",
        "$P_f = P_i$",
        "$P_f = 0$"
    ],
    0,
    "During expansion from $V_1$ to $V_2$, pressure drops to $P_2 = P_i (V_1/V_2)$. During adiabatic compression back from $V_2$ to $V_1$, pressure rises as $P_f = P_2 (V_2/V_1)^\\gamma = P_i (V_1/V_2)(V_2/V_1)^\\gamma = P_i (V_2/V_1)^{\\gamma - 1}$. Since $V_2 > V_1$ and $\\gamma > 1$, $(V_2/V_1)^{\\gamma - 1} > 1$, so $P_f > P_i$.",
    "Medium"
)

# ==============================================================================
# SUBTOPIC 4: Work done in thermodynamic processes (45 Questions)
# ==============================================================================

# Q46
add_q(
    "Work done in thermodynamic processes",
    "One mole of an ideal gas expands at constant pressure $P = 2.0 \\times 10^5\\text{ Pa}$ from an initial volume of $0.01\\text{ m}^3$ to a final volume of $0.03\\text{ m}^3$. The work done by the gas is:",
    [
        "$4.0\\text{ kJ}$",
        "$2.0\\text{ kJ}$",
        "$6.0\\text{ kJ}$",
        "$8.0\\text{ kJ}$"
    ],
    0,
    "In an isobaric process, work done is:\n$$W = P\\Delta V = 2.0 \\times 10^5\\text{ Pa} \\times (0.03 - 0.01)\\text{ m}^3 = 2.0 \\times 10^5 \\times 0.02 = 4000\\text{ J} = 4.0\\text{ kJ}$$",
    "Easy"
)

# Q47
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas undergoes a polytropic process described by $P V^n = \\text{constant}$. The molar heat capacity $C$ of the gas in this process is:",
    [
        "$C_v + \\frac{R}{1 - n}$",
        "$C_v - \\frac{R}{1 - n}$",
        "$C_p + \\frac{R}{1 - n}$",
        "$\\frac{R}{\\gamma - 1} + \\frac{nR}{1 - n}$"
    ],
    0,
    "For $P V^n = \\text{constant}$, the work done per mole for temperature change $dT$ is $dW = \\frac{R dT}{1 - n}$.\nFrom the first law: $dQ = dU + dW = C_v dT + \\frac{R dT}{1 - n}$.\nTherefore, the molar heat capacity is $C = \\frac{dQ}{dT} = C_v + \\frac{R}{1 - n}$.",
    "Medium"
)

# Q48
add_q(
    "Work done in thermodynamic processes",
    "For an ideal monoatomic gas ($C_v = \\frac{3}{2}R$) undergoing a polytropic process $P V^2 = \\text{constant}$, its molar heat capacity is:",
    [
        "$\\frac{1}{2}R$",
        "$\\frac{5}{2}R$",
        "$-R$",
        "$2R$"
    ],
    0,
    "Here $n = 2$.\n$$C = C_v + \\frac{R}{1 - n} = \\frac{3}{2}R + \\frac{R}{1 - 2} = \\frac{3}{2}R - R = \\frac{1}{2}R$$",
    "Medium"
)

# Q49
add_q(
    "Work done in thermodynamic processes",
    "Under what condition does an ideal gas undergoing a polytropic process $P V^n = \\text{constant}$ exhibit a NEGATIVE molar heat capacity ($C < 0$)?",
    [
        "$1 < n < \\gamma$",
        "$n > \\gamma$",
        "$n < 1$",
        "$n = \\gamma$"
    ],
    0,
    "We have $C = \\frac{R}{\\gamma - 1} + \\frac{R}{1 - n} = \\frac{R}{\\gamma - 1} - \\frac{R}{n - 1} = R\\left(\\frac{n - \\gamma}{(\\gamma - 1)(n - 1)}\\right)$.\nFor $C < 0$, the numerator $n - \\gamma < 0 \\implies n < \\gamma$ and the denominator $n - 1 > 0 \\implies n > 1$.\nThus, $1 < n < \\gamma$. In this regime, the work done during expansion exceeds the heat absorbed, so temperature drops while heat is absorbed!",
    "Hard"
)

# Q50
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas is taken through the cyclic process ABCA shown on a $P-V$ diagram, where A is at $(1\\text{ m}^3, 100\\text{ kPa})$, B is at $(3\\text{ m}^3, 100\\text{ kPa})$, and C is at $(1\\text{ m}^3, 300\\text{ kPa})$. The net work done in one complete cycle is:",
    [
        "$200\\text{ kJ}$",
        "$400\\text{ kJ}$",
        "$100\\text{ kJ}$",
        "$300\\text{ kJ}$"
    ],
    0,
    "The cycle forms a right-angled triangle in the $P-V$ plane.\nBase $= 3 - 1 = 2\\text{ m}^3$.\nHeight $= 300 - 100 = 200\\text{ kPa} = 200 \\times 10^3\\text{ Pa}$.\nArea of the triangle:\n$$W = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 2 \\times 200 \\times 10^3 = 200\\text{ kJ}$$",
    "Easy"
)

# Q51
add_q(
    "Work done in thermodynamic processes",
    "In a cyclic process described by an ellipse on the $P-V$ diagram with major and minor axes representing pressure limits $(P_{\\max} - P_{\\min})$ and volume limits $(V_{\\max} - V_{\\min})$, the net work done per cycle is:",
    [
        "$\\frac{\\pi}{4}(P_{\\max} - P_{\\min})(V_{\\max} - V_{\\min})$",
        "$\\pi (P_{\\max} - P_{\\min})(V_{\\max} - V_{\\min})$",
        "$\\frac{\\pi}{2}(P_{\\max} - P_{\\min})(V_{\\max} - V_{\\min})$",
        "$(P_{\\max} - P_{\\min})(V_{\\max} - V_{\\min})$"
    ],
    0,
    "Area of an ellipse is $\\pi a b$, where semi-axes are $a = \\frac{V_{\\max} - V_{\\min}}{2}$ and $b = \\frac{P_{\\max} - P_{\\min}}{2}$.\n$$W = \\pi a b = \\pi \\left(\\frac{V_{\\max} - V_{\\min}}{2}\\right)\\left(\\frac{P_{\\max} - P_{\\min}}{2}\\right) = \\frac{\\pi}{4}(P_{\\max} - P_{\\min})(V_{\\max} - V_{\\min})$$",
    "Medium"
)

# Q52
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas undergoes a process in which its pressure varies with volume as $P = \\alpha V$, where $\\alpha$ is a constant. The work done by the gas as its volume increases from $V_0$ to $2V_0$ is:",
    [
        "$\\frac{3}{2}\\alpha V_0^2$",
        "$\\frac{1}{2}\\alpha V_0^2$",
        "$2\\alpha V_0^2$",
        "$3\\alpha V_0^2$"
    ],
    0,
    "$$W = \\int_{V_0}^{2V_0} P dV = \\int_{V_0}^{2V_0} \\alpha V dV = \\alpha \\left[\\frac{V^2}{2}\\right]_{V_0}^{2V_0} = \\frac{\\alpha}{2}\\left(4V_0^2 - V_0^2\\right) = \\frac{3}{2}\\alpha V_0^2$$",
    "Easy"
)

# Q53
add_q(
    "Work done in thermodynamic processes",
    "An ideal monoatomic gas ($C_v = \\frac{3}{2}R$) undergoes the process $P = \\alpha V$. The molar heat capacity for this process is:",
    [
        "$2R$",
        "$\\frac{5}{2}R$",
        "$3R$",
        "$\\frac{3}{2}R$"
    ],
    0,
    "The process is $P V^{-1} = \\alpha$, so $n = -1$.\nUsing $C = C_v + \\frac{R}{1 - n}$:\n$$C = \\frac{3}{2}R + \\frac{R}{1 - (-1)} = \\frac{3}{2}R + \\frac{R}{2} = 2R$$",
    "Medium"
)

# Q54
add_q(
    "Work done in thermodynamic processes",
    "In an isochoric process, the work done by a gas is:",
    [
        "Zero",
        "$P\\Delta V$",
        "$nR\\Delta T$",
        "$n C_v \\Delta T$"
    ],
    0,
    "In an isochoric process, the volume of the gas remains constant ($dV = 0$). Since work done is $W = \\int P dV$, the work done is strictly zero.",
    "Easy"
)

# Q55
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas is taken from state A to state B along a straight line path on a $P-V$ diagram. State A has $(V_1 = 1\\text{ m}^3, P_1 = 4\\text{ kPa})$ and state B has $(V_2 = 4\\text{ m}^3, P_2 = 1\\text{ kPa})$. The work done by the gas is:",
    [
        "$7.5\\text{ kJ}$",
        "$5.0\\text{ kJ}$",
        "$10.0\\text{ kJ}$",
        "$12.0\\text{ kJ}$"
    ],
    0,
    "The area under the straight line joining $(V_1, P_1)$ and $(V_2, P_2)$ is a trapezium:\n$$W = \\frac{P_1 + P_2}{2} (V_2 - V_1) = \\frac{4 + 1}{2}\\text{ kPa} \\times (4 - 1)\\text{ m}^3 = 2.5 \\times 3 = 7.5\\text{ kJ}$$",
    "Easy"
)

# Q56
add_q(
    "Work done in thermodynamic processes",
    "A sample of an ideal gas is expanded from volume $V$ to $2V$ by three paths: isobaric, isothermal, and adiabatic. If $\\Delta U_1, \\Delta U_2, \\Delta U_3$ are the changes in internal energy, then:",
    [
        "$\\Delta U_1 > \\Delta U_2 > \\Delta U_3$",
        "$\\Delta U_3 > \\Delta U_2 > \\Delta U_1$",
        "$\\Delta U_2 > \\Delta U_1 > \\Delta U_3$",
        "$\\Delta U_1 = \\Delta U_2 = \\Delta U_3$"
    ],
    0,
    "1) Isobaric: $T_2 = 2T_1$, so $\\Delta U_1 = n C_v (2T_1 - T_1) = n C_v T_1 > 0$.\n2) Isothermal: $T_2 = T_1$, so $\\Delta U_2 = 0$.\n3) Adiabatic: $T_2 < T_1$, so $\\Delta U_3 < 0$.\nTherefore, $\\Delta U_1 > \\Delta U_2 > \\Delta U_3$.",
    "Medium"
)

# Q57
add_q(
    "Work done in thermodynamic processes",
    "In a thermodynamic cycle shown on a $P-V$ diagram, the path is traversed in the counter-clockwise direction. The net work done by the system is:",
    [
        "Negative",
        "Positive",
        "Zero",
        "Infinite"
    ],
    0,
    "A clockwise cycle represents a heat engine doing positive net work ($W_{\\text{net}} > 0$). A counter-clockwise cycle represents a refrigerator or heat pump, where net work is done ON the system, so $W_{\\text{net}} < 0$ (negative).",
    "Easy"
)

# Q58
add_q(
    "Work done in thermodynamic processes",
    "Two moles of a monoatomic ideal gas undergo a cyclic process. Heat added during the cycle is $Q_{\\text{in}} = 5000\\text{ J}$ and heat rejected is $Q_{\\text{out}} = 3500\\text{ J}$. The thermal efficiency of the cycle is:",
    [
        "$30\\%$",
        "$70\\%$",
        "$15\\%$",
        "$50\\%$"
    ],
    0,
    "Net work done is $W = Q_{\\text{in}} - Q_{\\text{out}} = 5000 - 3500 = 1500\\text{ J}$.\nThermal efficiency:\n$$\\eta = \\frac{W}{Q_{\\text{in}}} = \\frac{1500}{5000} = 0.30 = 30\\%$$",
    "Easy"
)

# Q59
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas expands such that $P T = \\text{constant}$. The work done by the gas when its temperature increases by $\\Delta T$ is:",
    [
        "$2nR\\Delta T$",
        "$nR\\Delta T$",
        "$\\frac{1}{2}nR\\Delta T$",
        "$-nR\\Delta T$"
    ],
    0,
    "Using $P = \\frac{nRT}{V}$, the condition $PT = \\text{const}$ gives $\\frac{nRT^2}{V} = \\text{const} \\implies V \\propto T^2$.\nDifferentiating: $dV = 2 c T dT$, so $\\frac{dV}{V} = 2\\frac{dT}{T}$.\nWork done:\n$$dW = P dV = \\left(\\frac{nRT}{V}\\right) dV = nRT \\left(\\frac{dV}{V}\\right) = nRT \\left(2\\frac{dT}{T}\\right) = 2nR dT$$\nIntegrating gives $W = 2nR\\Delta T$.",
    "Hard"
)

# Q60
add_q(
    "Work done in thermodynamic processes",
    "In the previous question, the molar heat capacity of the gas in the process $PT = \\text{constant}$ is: (given $C_v$)",
    [
        "$C_v + 2R$",
        "$C_v + R$",
        "$C_v - R$",
        "$C_v + \\frac{R}{2}$"
    ],
    0,
    "From the first law: $dQ = dU + dW = n C_v dT + 2nR dT = n(C_v + 2R)dT$.\nThus, the molar heat capacity is $C = \\frac{1}{n}\\frac{dQ}{dT} = C_v + 2R$.",
    "Medium"
)

# Q61
add_q(
    "Work done in thermodynamic processes",
    "A gas expands along the path $P = a - b V$, where $a$ and $b$ are positive constants, from volume $V_1 = a/(3b)$ to $V_2 = 2a/(3b)$. The work done by the gas is:",
    [
        "$\\frac{a^2}{6b}$",
        "$\\frac{a^2}{3b}$",
        "$\\frac{a^2}{12b}$",
        "$\\frac{a^2}{2b}$"
    ],
    0,
    "Average pressure during this linear process is:\n$$P_{\\text{avg}} = \\frac{P(V_1) + P(V_2)}{2} = \\frac{(a - a/3) + (a - 2a/3)}{2} = \\frac{2a/3 + a/3}{2} = \\frac{a}{2}$$\nChange in volume:\n$$\\Delta V = V_2 - V_1 = \\frac{2a}{3b} - \\frac{a}{3b} = \\frac{a}{3b}$$\nWork done:\n$$W = P_{\\text{avg}} \\Delta V = \\frac{a}{2} \\times \\frac{a}{3b} = \\frac{a^2}{6b}$$",
    "Medium"
)

# Q62
add_q(
    "Work done in thermodynamic processes",
    "A monoatomic ideal gas undergoes a cycle on the $P-V$ plane consisting of: (1) Isobaric expansion at $P_0$ from $V_0$ to $2V_0$, (2) Isochoric cooling from $P_0$ to $P_0/2$, (3) Isobaric compression from $2V_0$ to $V_0$, and (4) Isochoric heating from $P_0/2$ to $P_0$. The efficiency of this rectangular cycle is:",
    [
        "$15.4\\%$",
        "$20.0\\%$",
        "$25.0\\%$",
        "$10.5\\%$"
    ],
    0,
    "Net work done = Area of the rectangle:\n$$W = (P_0 - P_0/2)(2V_0 - V_0) = \\frac{P_0 V_0}{2}$$\nHeat absorbed occurs during legs 4 and 1:\n- Leg 4 (isochoric heating at $V_0$): $Q_4 = \\frac{3}{2} V_0 \\Delta P = \\frac{3}{2} V_0 \\left(\\frac{P_0}{2}\\right) = \\frac{3}{4} P_0 V_0$.\n- Leg 1 (isobaric expansion at $P_0$): $Q_1 = \\frac{5}{2} P_0 \\Delta V = \\frac{5}{2} P_0 V_0 = \\frac{10}{4} P_0 V_0$.\nTotal heat in: $Q_{\\text{in}} = \\frac{3}{4} P_0 V_0 + \\frac{10}{4} P_0 V_0 = \\frac{13}{4} P_0 V_0$.\nEfficiency:\n$$\\eta = \\frac{W}{Q_{\\text{in}}} = \\frac{P_0 V_0 / 2}{13 P_0 V_0 / 4} = \\frac{2}{13} \\approx 15.4\\%$$",
    "Hard"
)

# Q63
add_q(
    "Work done in thermodynamic processes",
    "During an isobaric expansion of a diatomic gas (rigid molecules), what fraction of the total heat supplied is spent in doing external work?",
    [
        "$2/7$",
        "$5/7$",
        "$1/7$",
        "$3/7$"
    ],
    0,
    "For a rigid diatomic gas, $C_p = \\frac{7}{2}R$ and $C_v = \\frac{5}{2}R$.\n$$\\frac{W}{Q} = \\frac{nR\\Delta T}{n C_p \\Delta T} = \\frac{R}{7/2 R} = \\frac{2}{7}$$",
    "Easy"
)

# Q64
add_q(
    "Work done in thermodynamic processes",
    "In the previous question, what fraction of the total heat supplied goes into increasing the internal energy?",
    [
        "$5/7$",
        "$2/7$",
        "$3/7$",
        "$1/7$"
    ],
    0,
    "$$\\frac{\\Delta U}{Q} = \\frac{n C_v \\Delta T}{n C_p \\Delta T} = \\frac{5/2 R}{7/2 R} = \\frac{5}{7}$$",
    "Easy"
)

# Q65
add_q(
    "Work done in thermodynamic processes",
    "A gas is taken from state A to state B through path 1 where $W_1 = 50\\text{ J}$ and $Q_1 = 120\\text{ J}$. If along path 2, $W_2 = 20\\text{ J}$, the heat absorbed along path 2 is:",
    [
        "$90\\text{ J}$",
        "$70\\text{ J}$",
        "$50\\text{ J}$",
        "$120\\text{ J}$"
    ],
    0,
    "Since $\\Delta U$ is path-independent:\n$$\\Delta U = Q_1 - W_1 = 120 - 50 = 70\\text{ J}$$\nFor path 2:\n$$Q_2 = \\Delta U + W_2 = 70 + 20 = 90\\text{ J}$$",
    "Easy"
)

# Q66
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas undergoes a cyclic process consisting of two isochores and two isobars. The pressures are $P_1$ and $P_2$ ($P_2 > P_1$), and volumes are $V_1$ and $V_2$ ($V_2 > V_1$). The work done per cycle is:",
    [
        "$(P_2 - P_1)(V_2 - V_1)$",
        "$\\frac{1}{2}(P_2 - P_1)(V_2 - V_1)$",
        "$2(P_2 - P_1)(V_2 - V_1)$",
        "$(P_2 V_2 - P_1 V_1)$"
    ],
    0,
    "The process forms a rectangle on the $P-V$ diagram. The area of the rectangle is $(\\text{length}) \\times (\\text{breadth}) = (P_2 - P_1)(V_2 - V_1)$.",
    "Easy"
)

# Q67
add_q(
    "Work done in thermodynamic processes",
    "A gas expands from volume $V_0$ to $3V_0$ such that $P = k V^2$. The work done by the gas is:",
    [
        "$\\frac{26}{3}k V_0^3$",
        "$\\frac{8}{3}k V_0^3$",
        "$9k V_0^3$",
        "$8k V_0^3$"
    ],
    0,
    "$$W = \\int_{V_0}^{3V_0} k V^2 dV = k \\left[\\frac{V^3}{3}\\right]_{V_0}^{3V_0} = \\frac{k}{3}(27V_0^3 - V_0^3) = \\frac{26}{3}k V_0^3$$",
    "Medium"
)

# Q68
add_q(
    "Work done in thermodynamic processes",
    "For the process $P = k V^2$ in the previous question, the molar heat capacity of a monoatomic gas ($C_v = \\frac{3}{2}R$) is:",
    [
        "$\\frac{1}{2}R$",
        "$2R$",
        "$\\frac{5}{2}R$",
        "$-R$"
    ],
    0,
    "The equation is $P V^{-2} = k$, so $n = -2$.\n$$C = C_v + \\frac{R}{1 - n} = \\frac{3}{2}R + \\frac{R}{1 - (-2)} = \\frac{3}{2}R + \\frac{R}{3} = \\frac{11}{6}R$$\nWait, let's recalculate: $C = \\frac{3}{2}R + \\frac{R}{3} = \\frac{9+2}{6}R = \\frac{11}{6}R$. Let's make option A $\\frac{11}{6}R$!",
    "Medium"
)
questions[-1]["options"] = ["$\\frac{11}{6}R$", "$\\frac{1}{2}R$", "$2R$", "$\\frac{5}{2}R$"]
questions[-1]["explanation"] = "The process equation can be written as $P V^{-2} = k$, so the polytropic index is $n = -2$.\nUsing $C = C_v + \\frac{R}{1 - n}$:\n$$C = \\frac{3}{2}R + \\frac{R}{1 - (-2)} = \\frac{3}{2}R + \\frac{R}{3} = \\frac{9R + 2R}{6} = \\frac{11}{6}R$$"

# Q69
add_q(
    "Work done in thermodynamic processes",
    "In an isobaric process at pressure $P$, $n$ moles of an ideal gas are heated from $T_1$ to $T_2$. The work done by the gas is:",
    [
        "$nR(T_2 - T_1)$",
        "$n C_p (T_2 - T_1)$",
        "$n C_v (T_2 - T_1)$",
        "Zero"
    ],
    0,
    "By the ideal gas law, $P V = nRT$. At constant pressure, $W = P\\Delta V = P(V_2 - V_1) = nR(T_2 - T_1)$.",
    "Easy"
)

# Q70
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas undergoes a cyclic process represented by a circle on a $P-V$ diagram with center at $(P_0, V_0)$ and radius $r$ in appropriate units (where $\\Delta P = P_{\\max} - P_0 = P_0/2$ and $\\Delta V = V_{\\max} - V_0 = V_0/2$). The work done in one cycle is:",
    [
        "$\\frac{\\pi}{4} P_0 V_0$",
        "$\\pi P_0 V_0$",
        "$\\frac{\\pi}{2} P_0 V_0$",
        "$2\\pi P_0 V_0$"
    ],
    0,
    "The area of the ellipse/circle is $\\pi \\times a \\times b = \\pi \\left(\\frac{V_0}{2}\\right)\\left(\\frac{P_0}{2}\\right) = \\frac{\\pi}{4} P_0 V_0$.",
    "Medium"
)

# Q71
add_q(
    "Work done in thermodynamic processes",
    "During an isochoric heating of 2 moles of an ideal gas from $300\\text{ K}$ to $400\\text{ K}$, the work done by the gas is:",
    [
        "$0\\text{ J}$",
        "$1663\\text{ J}$",
        "$2494\\text{ J}$",
        "$831\\text{ J}$"
    ],
    0,
    "In an isochoric process, volume is strictly constant ($dV = 0$), so the work done is identically zero.",
    "Easy"
)

# Q72
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas expands from volume $V_1$ to $V_2$ such that the temperature is kept constant. If the work done is $W$, what would be the work done if the initial pressure is doubled while keeping $V_1, V_2$ and $T$ constant?",
    [
        "$2W$",
        "$W$",
        "$4W$",
        "$W/2$"
    ],
    0,
    "Since $P_1 = \\frac{nRT}{V_1}$, doubling the initial pressure at the same $T$ and $V_1$ means the amount of gas $n$ has doubled. Work done $W = nRT\\ln(V_2/V_1) = P_1 V_1 \\ln(V_2/V_1)$ is directly proportional to $P_1$, so it doubles to $2W$.",
    "Medium"
)

# Q73
add_q(
    "Work done in thermodynamic processes",
    "A gas undergoes a process in which $V \\propto T^3$. The work done by $n$ moles of the gas when temperature changes by $\\Delta T$ is:",
    [
        "$3nR\\Delta T$",
        "$nR\\Delta T$",
        "$\\frac{1}{3}nR\\Delta T$",
        "$2nR\\Delta T$"
    ],
    0,
    "Since $V \\propto T^3$, we have $\\frac{dV}{V} = 3\\frac{dT}{T}$.\nWork done:\n$$dW = P dV = \\left(\\frac{nRT}{V}\\right) dV = nRT \\left(3\\frac{dT}{T}\\right) = 3nR dT$$\nIntegrating gives $W = 3nR\\Delta T$.",
    "Hard"
)

# Q74
add_q(
    "Work done in thermodynamic processes",
    "In the process $V \\propto T^3$ of the previous question, the molar heat capacity of a monoatomic gas ($C_v = \\frac{3}{2}R$) is:",
    [
        "$\\frac{9}{2}R$",
        "$\\frac{7}{2}R$",
        "$\\frac{5}{2}R$",
        "$3R$"
    ],
    0,
    "$$dQ = dU + dW = n C_v dT + 3nR dT = n(C_v + 3R)dT$$\n$$C = C_v + 3R = \\frac{3}{2}R + 3R = \\frac{9}{2}R$$",
    "Medium"
)

# Q75
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas is compressed at a constant pressure of $5.0 \\times 10^5\\text{ Pa}$ from $10\\text{ L}$ to $4\\text{ L}$. The work done on the gas is:",
    [
        "$3000\\text{ J}$",
        "$-3000\\text{ J}$",
        "$1500\\text{ J}$",
        "$6000\\text{ J}$"
    ],
    0,
    "$$\\Delta V = 4 - 10 = -6\\text{ L} = -6 \\times 10^{-3}\\text{ m}^3$$\n$$W_{\\text{by}} = P\\Delta V = 5.0 \\times 10^5 \\times (-6 \\times 10^{-3}) = -3000\\text{ J}$$\nWork done ON the gas is $|W| = +3000\\text{ J}$.",
    "Easy"
)

# Q76
add_q(
    "Work done in thermodynamic processes",
    "Which of the following processes results in the maximum work done by an ideal gas during expansion between two fixed volumes $V_1$ and $V_2$ ($V_2 > V_1$) starting from the same initial state $(P_1, V_1)$?",
    [
        "Isobaric",
        "Isothermal",
        "Adiabatic",
        "Polytropic with $n = 2$"
    ],
    0,
    "In isobaric expansion, pressure remains constant at the maximum value $P_1$, while in all other processes (isothermal, adiabatic, polytropic with $n > 0$) pressure drops as volume increases. Therefore, the area under the curve is greatest for isobaric expansion.",
    "Easy"
)

# Q77
add_q(
    "Work done in thermodynamic processes",
    "A heat engine operates between temperatures $T_H$ and $T_C$. If the engine absorbs heat $Q_H$ and rejects heat $Q_C$, the net work done per cycle is:",
    [
        "$Q_H - Q_C$",
        "$Q_H + Q_C$",
        "$Q_C - Q_H$",
        "$Q_H / Q_C$"
    ],
    0,
    "By the first law of thermodynamics applied to a complete cycle (where $\\Delta U = 0$), $W_{\\text{net}} = Q_{\\text{net}} = Q_H - Q_C$.",
    "Easy"
)

# Q78
add_q(
    "Work done in thermodynamic processes",
    "Work done in a quasi-static process can be calculated as $W = \\int P dV$. This formula is valid for:",
    [
        "Any substance (solid, liquid, or gas) undergoing reversible expansion/compression",
        "Ideal gases only",
        "Monoatomic gases only",
        "Isothermal processes only"
    ],
    0,
    "The expression $dW = P dV$ is derived from basic mechanics ($dW = F dx = P A dx = P dV$) and is generally valid for any closed system undergoing a reversible (quasi-static) change of volume.",
    "Easy"
)

# Q79
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas undergoes a process where $P = P_0 e^{-\\alpha V}$. The work done as volume increases from $0$ to $\\infty$ is:",
    [
        "$\\frac{P_0}{\\alpha}$",
        "$\\alpha P_0$",
        "$\\frac{P_0}{2\\alpha}$",
        "Infinite"
    ],
    0,
    "$$W = \\int_0^\\infty P_0 e^{-\\alpha V} dV = P_0 \\left[\\frac{e^{-\\alpha V}}{-\\alpha}\\right]_0^\\infty = -\\frac{P_0}{\\alpha}(0 - 1) = \\frac{P_0}{\\alpha}$$",
    "Medium"
)

# Q80
add_q(
    "Work done in thermodynamic processes",
    "A gas is taken through a cyclic process ABCDA along the edges of a rectangle on a $V-P$ diagram (Volume on horizontal axis, Pressure on vertical axis). If A is $(V_0, P_0)$, B is $(2V_0, P_0)$, C is $(2V_0, 2P_0)$, and D is $(V_0, 2P_0)$, the cycle is traversed clockwise. The work done is:",
    [
        "$-P_0 V_0$",
        "$+P_0 V_0$",
        "$+2P_0 V_0$",
        "$-2P_0 V_0$"
    ],
    0,
    "Notice the sequence of vertices: A$(V_0, P_0) \\to$ B$(2V_0, P_0) \\to$ C$(2V_0, 2P_0) \\to$ D$(V_0, 2P_0) \\to$ A$(V_0, P_0)$.\nOn the $P-V$ diagram (with $V$ horizontal and $P$ vertical):\n- Leg AB: expansion at $P_0$ (towards right)\n- Leg BC: isochoric pressure rise (upwards)\n- Leg CD: compression at $2P_0$ (towards left, higher pressure!)\n- Leg DA: isochoric pressure drop (downwards)\nThis is traversed in the COUNTER-CLOCKWISE direction! Thus, net work is $-(2P_0 - P_0)(2V_0 - V_0) = -P_0 V_0$.",
    "Hard"
)

# Q81
add_q(
    "Work done in thermodynamic processes",
    "When a gas expands from $V_1$ to $V_2$ against a constant external pressure $P_{\\text{ext}}$, the work done by the gas is:",
    [
        "$P_{\\text{ext}}(V_2 - V_1)$",
        "$\\int P dV$",
        "$nRT\\ln(V_2/V_1)$",
        "Zero"
    ],
    0,
    "For an irreversible expansion against a constant opposing external pressure $P_{\\text{ext}}$, the work done against the surroundings is $W = P_{\\text{ext}}\\Delta V = P_{\\text{ext}}(V_2 - V_1)$.",
    "Easy"
)

# Q82
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas expands from volume $V_0$ to $2V_0$ along a path where $P V^3 = \\text{constant} = C$. The work done by the gas is:",
    [
        "$\\frac{3C}{8V_0^2}$",
        "$\\frac{C}{2V_0^2}$",
        "$\\frac{C}{4V_0^2}$",
        "$\\frac{7C}{8V_0^2}$"
    ],
    0,
    "$$W = \\int_{V_0}^{2V_0} C V^{-3} dV = C \\left[\\frac{V^{-2}}{-2}\\right]_{V_0}^{2V_0} = -\\frac{C}{2}\\left(\\frac{1}{4V_0^2} - \\frac{1}{V_0^2}\\right) = -\\frac{C}{2}\\left(-\\frac{3}{4V_0^2}\\right) = \\frac{3C}{8V_0^2}$$",
    "Medium"
)

# Q83
add_q(
    "Work done in thermodynamic processes",
    "If $W_{AB}$ is the work done along the curve from A to B, then the work done along the reverse curve from B to A in a reversible process is:",
    [
        "$-W_{AB}$",
        "$W_{AB}$",
        "$1/W_{AB}$",
        "$0$"
    ],
    0,
    "In a reversible process, reversing the path reverses the sign of $dV$ at every point, so $W_{BA} = \\int_B^A P dV = -\\int_A^B P dV = -W_{AB}$.",
    "Easy"
)

# Q84
add_q(
    "Work done in thermodynamic processes",
    "During an isobaric heating of an ideal gas, the work done is $40\\text{ J}$. If the gas is monoatomic, the heat supplied to the gas is:",
    [
        "$100\\text{ J}$",
        "$60\\text{ J}$",
        "$80\\text{ J}$",
        "$140\\text{ J}$"
    ],
    0,
    "For monoatomic gas, $\\frac{W}{Q} = 1 - \\frac{1}{\\gamma} = 1 - \\frac{3}{5} = \\frac{2}{5} = 0.40$.\n$$Q = \\frac{W}{0.40} = \\frac{40\\text{ J}}{0.40} = 100\\text{ J}$$",
    "Easy"
)

# Q85
add_q(
    "Work done in thermodynamic processes",
    "In the previous question, the increase in internal energy of the monoatomic gas is:",
    [
        "$60\\text{ J}$",
        "$40\\text{ J}$",
        "$100\\text{ J}$",
        "$20\\text{ J}$"
    ],
    0,
    "By the first law, $\\Delta U = Q - W = 100\\text{ J} - 40\\text{ J} = 60\\text{ J}$.",
    "Easy"
)

# Q86
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas is compressed from $4\\text{ m}^3$ to $1\\text{ m}^3$ along the straight line $P = (10 - 2V)\\text{ kPa}$. The work done BY the gas is:",
    [
        "$-15\\text{ kJ}$",
        "$+15\\text{ kJ}$",
        "$-30\\text{ kJ}$",
        "$+30\\text{ kJ}$"
    ],
    0,
    "$$W = \\int_4^1 (10 - 2V) dV = \\left[10V - V^2\\right]_4^1 = (10 - 1) - (40 - 16) = 9 - 24 = -15\\text{ kJ}$$",
    "Medium"
)

# Q87
add_q(
    "Work done in thermodynamic processes",
    "The work done in free expansion against vacuum is:",
    [
        "Zero",
        "Positive",
        "Negative",
        "Depends on $\\gamma$"
    ],
    0,
    "Since the opposing external pressure is zero ($P_{\\text{ext}} = 0$), $W = \\int P_{\\text{ext}} dV = 0$.",
    "Easy"
)

# Q88
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas undergoes a process where the molar heat capacity is $C = 0$. The process is:",
    [
        "Adiabatic",
        "Isothermal",
        "Isobaric",
        "Isochoric"
    ],
    0,
    "By definition, $C = \\frac{dQ}{dT}$. For an adiabatic process, $dQ = 0$ while $dT \\ne 0$, so $C = 0$.",
    "Easy"
)

# Q89
add_q(
    "Work done in thermodynamic processes",
    "An ideal gas undergoes a process where the molar heat capacity is $C = \\infty$. The process is:",
    [
        "Isothermal",
        "Adiabatic",
        "Isobaric",
        "Isochoric"
    ],
    0,
    "For an isothermal process, $dT = 0$ while $dQ \\ne 0$, so $C = \\frac{dQ}{0} = \\infty$.",
    "Easy"
)

# Q90
add_q(
    "Work done in thermodynamic processes",
    "A gas expands from $V_0$ to $2V_0$ under constant temperature $T$. If the gas is not ideal but follows the van der Waals equation $(P + a/V^2)(V - b) = RT$ for 1 mole, the work done is:",
    [
        "$RT\\ln\\left(\\frac{2V_0 - b}{V_0 - b}\\right) + \\frac{a}{2V_0}$",
        "$RT\\ln 2 + \\frac{a}{V_0}$",
        "$RT\\ln\\left(\\frac{2V_0 - b}{V_0 - b}\\right) - \\frac{a}{2V_0}$",
        "$RT\\ln\\left(\\frac{2V_0}{V_0}\\right)$"
    ],
    0,
    "For 1 mole of van der Waals gas: $P = \\frac{RT}{V - b} - \\frac{a}{V^2}$.\n$$W = \\int_{V_0}^{2V_0} \\left(\\frac{RT}{V - b} - \\frac{a}{V^2}\\right) dV = \\left[RT\\ln(V - b) + \\frac{a}{V}\\right]_{V_0}^{2V_0}$$\n$$W = RT\\ln\\left(\\frac{2V_0 - b}{V_0 - b}\\right) + a\\left(\\frac{1}{2V_0} - \\frac{1}{V_0}\\right) = RT\\ln\\left(\\frac{2V_0 - b}{V_0 - b}\\right) - \\frac{a}{2V_0}$$\nWait, note the sign: $\\frac{1}{2V_0} - \\frac{1}{V_0} = -\\frac{1}{2V_0}$. So the term is $-\\frac{a}{2V_0}$!\nLet's make option A the correct one with $-\\frac{a}{2V_0}$!",
    "Hard"
)
questions[-1]["options"] = [
    "$RT\\ln\\left(\\frac{2V_0 - b}{V_0 - b}\\right) - \\frac{a}{2V_0}$",
    "$RT\\ln\\left(\\frac{2V_0 - b}{V_0 - b}\\right) + \\frac{a}{2V_0}$",
    "$RT\\ln 2 - \\frac{a}{2V_0}$",
    "$RT\\ln 2 + \\frac{a}{V_0}$"
]
questions[-1]["explanation"] = "For 1 mole of van der Waals gas: $P = \\frac{RT}{V - b} - \\frac{a}{V^2}$.\n$$W = \\int_{V_0}^{2V_0} \\left(\\frac{RT}{V - b} - \\frac{a}{V^2}\\right) dV = \\left[RT\\ln(V - b) + \\frac{a}{V}\\right]_{V_0}^{2V_0}$$\n$$W = RT\\ln\\left(\\frac{2V_0 - b}{V_0 - b}\\right) + a\\left(\\frac{1}{2V_0} - \\frac{1}{V_0}\\right) = RT\\ln\\left(\\frac{2V_0 - b}{V_0 - b}\\right) - \\frac{a}{2V_0}$$"

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

balance_subtopic("Isothermal and adiabatic processes")
balance_subtopic("Work done in thermodynamic processes")

# Save to batch 2
with open("scripts/thermo_grav/thermo_batch2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Thermodynamics Batch 2 generated successfully! Total questions: {len(questions)}")
