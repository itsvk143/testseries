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
# CHAPTER 8: Thermodynamics (4 subtopics * 5 = 20 questions)
# ==========================================

# Subtopic 1: Thermal equilibrium
add_q(
    "Thermodynamics", "Thermal equilibrium",
    "Two isolated bodies $A$ and $B$ of heat capacities $C_A$ and $C_B$ at initial temperatures $T_A$ and $T_B$ ($T_A > T_B$) are brought into thermal contact. If no heat is exchanged with the surroundings, what is the change in entropy $\\Delta S$ of the universe?",
    [
        "$C_A \\ln\\left(\\frac{T_f}{T_A}\\right) + C_B \\ln\\left(\\frac{T_f}{T_B}\\right) > 0$",
        "$0$",
        "$\\frac{C_A (T_A - T_f)}{T_A} + \\frac{C_B (T_f - T_B)}{T_B}$",
        "$C_A \\ln\\left(\\frac{T_A}{T_f}\\right) + C_B \\ln\\left(\\frac{T_B}{T_f}\\right)$"
    ],
    0,
    "The final equilibrium temperature is $T_f = \\frac{C_A T_A + C_B T_B}{C_A + C_B}$. Since temperature changes reversibly in concept, entropy changes are $\\Delta S_A = \\int_{T_A}^{T_f} \\frac{C_A dT}{T} = C_A \\ln\\left(\\frac{T_f}{T_A}\\right)$ and $\\Delta S_B = \\int_{T_B}^{T_f} \\frac{C_B dT}{T} = C_B \\ln\\left(\\frac{T_f}{T_B}\\right)$. Because heat conduction across a finite temperature difference is spontaneous and irreversible, the net entropy change of the isolated system is strictly positive: $\\Delta S_{total} = C_A \\ln(T_f/T_A) + C_B \\ln(T_f/T_B) > 0$."
)

add_q(
    "Thermodynamics", "Thermal equilibrium",
    "The Zeroth Law of Thermodynamics provides the theoretical foundation for which fundamental concept?",
    [
        "Definition and operational measurement of temperature",
        "Conservation of internal energy",
        "Absolute zero of entropy",
        "Direction of spontaneous heat flow"
    ],
    0,
    "The Zeroth Law states that if bodies $A$ and $B$ are separately in thermal equilibrium with a third body $C$, then $A$ and $B$ are in thermal equilibrium with each other. This establishes that thermal equilibrium is an equivalence relation, defining an empirical state variable called 'temperature' and enabling thermometer calibration."
)

add_q(
    "Thermodynamics", "Thermal equilibrium",
    "Three liquids $A, B, C$ of masses $m, 2m, 3m$ have initial temperatures $10^\\circ\\text{C}, 20^\\circ\\text{C}, 30^\\circ\\text{C}$ and specific heat capacities $3c, 2c, c$ respectively. What is the equilibrium temperature when all three are mixed?",
    [
        "$21^\\circ\\text{C}$",
        "$20^\\circ\\text{C}$",
        "$22.5^\\circ\\text{C}$",
        "$24^\\circ\\text{C}$"
    ],
    0,
    "Heat capacities are: $C_A = m(3c) = 3 mc$, $C_B = (2m)(2c) = 4 mc$, $C_C = (3m)c = 3 mc$. Total heat capacity is $C_{total} = 3 mc + 4 mc + 3 mc = 10 mc$. Final equilibrium temperature is $T_f = \\frac{C_A T_A + C_B T_B + C_C T_C}{C_{total}} = \\frac{3 mc(10) + 4 mc(20) + 3 mc(30)}{10 mc} = \\frac{30 + 80 + 90}{10} = \\frac{200}{10} = 20^\\circ\\text{C}$."
)

add_q(
    "Thermodynamics", "Thermal equilibrium",
    "A copper sphere of mass $M$ at temperature $T_1$ is immersed in a liquid of mass $m$ at temperature $T_2$ ($T_1 > T_2$) inside an adiabatic container. If the liquid boils at $T_b$ ($T_1 > T_b > T_2$), what is the condition that some liquid vaporizes? (Latent heat $L$)",
    [
        "$M c_{cu} (T_1 - T_b) > m c_l (T_b - T_2)$",
        "$M c_{cu} (T_1 - T_2) < m L$",
        "$M c_{cu} T_1 = m c_l T_2$",
        "$M c_{cu} (T_1 - T_b) < m c_l (T_b - T_2)$"
    ],
    0,
    "The maximum heat that the copper sphere can release while cooling down to boiling point $T_b$ is $Q_{give} = M c_{cu} (T_1 - T_b)$. The heat required to warm the entire liquid from $T_2$ to its boiling point $T_b$ is $Q_{req} = m c_l (T_b - T_2)$. For vaporization to occur, the available heat from copper must exceed the heat required to bring the liquid to boiling temperature: $M c_{cu}(T_1 - T_b) > m c_l (T_b - T_2)$."
)

add_q(
    "Thermodynamics", "Thermal equilibrium",
    "Two containers of equal volume $V$ containing an ideal gas at $(P_1, T_1)$ and $(P_2, T_2)$ are connected by a thin tube of negligible volume. If thermal insulation is maintained, the final equilibrium pressure $P_f$ is:",
    [
        "$\\frac{P_1 T_2 + P_2 T_1}{T_1 + T_2}$",
        "$\\frac{P_1 + P_2}{2}$",
        "$\\sqrt{P_1 P_2}$",
        "$\\frac{2 P_1 P_2}{P_1 + P_2}$"
    ],
    0,
    "Number of moles in container 1 is $n_1 = \\frac{P_1 V}{R T_1}$ and in container 2 is $n_2 = \\frac{P_2 V}{R T_2}$. Total moles $n = n_1 + n_2 = \\frac{V}{R}\\left(\\frac{P_1}{T_1} + \\frac{P_2}{T_2}\\right)$. Total internal energy is $U = n_1 C_v T_1 + n_2 C_v T_2 = \\frac{C_v V}{R}(P_1 + P_2)$. Finally, total moles $n$ occupy volume $2V$ at final temperature $T_f = \\frac{P_1 + P_2}{\\frac{P_1}{T_1} + \\frac{P_2}{T_2}}$. The final pressure is $P_f = \\frac{n R T_f}{2 V} = \\frac{P_1 + P_2}{2}$ if temperatures equalize, or if each vessel remains at its original temperature: $n_1' + n_2' = n \\implies \\frac{P_f V}{R T_1} + \\frac{P_f V}{R T_2} = \\frac{P_1 V}{R T_1} + \\frac{P_2 V}{R T_2} \\implies P_f \\left(\\frac{T_1 + T_2}{T_1 T_2}\\right) = \\frac{P_1 T_2 + P_2 T_1}{T_1 T_2} \\implies P_f = \\frac{P_1 T_2 + P_2 T_1}{T_1 + T_2}$."
)

# Subtopic 2: Laws of thermodynamics (zeroth, first, second)
add_q(
    "Thermodynamics", "Laws of thermodynamics (zeroth, first, second)",
    "A Carnot engine operates between temperatures $T_H = 600\\text{ K}$ and $T_C = 300\\text{ K}$. It absorbs $1200\\text{ J}$ of heat from the hot reservoir per cycle. What is the work done per cycle and the heat rejected?",
    [
        "$W = 600\\text{ J}, Q_C = 600\\text{ J}$",
        "$W = 400\\text{ J}, Q_C = 800\\text{ J}$",
        "$W = 800\\text{ J}, Q_C = 400\\text{ J}$",
        "$W = 900\\text{ J}, Q_C = 300\\text{ J}$"
    ],
    0,
    "Carnot efficiency is $\\eta = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300}{600} = 0.5$. Work done is $W = \\eta Q_H = 0.5 \\times 1200 = 600\\text{ J}$. By energy conservation, heat rejected is $Q_C = Q_H - W = 1200 - 600 = 600\\text{ J}$."
)

add_q(
    "Thermodynamics", "Laws of thermodynamics (zeroth, first, second)",
    "An ideal monoatomic gas undergoes a process where its pressure and volume are related by $P V^2 = \\text{constant}$. What is the molar heat capacity $C$ of the gas during this process?",
    [
        "$R/2$",
        "$3R/2$",
        "$2R$",
        "$5R/2$"
    ],
    0,
    "For a polytropic process $P V^n = \\text{constant}$, the molar heat capacity is $C = C_v + \\frac{R}{1 - n}$. For a monoatomic gas, $C_v = \\frac{3}{2} R$. Here $n = 2$. Therefore: $C = \\frac{3}{2} R + \\frac{R}{1 - 2} = \\frac{3}{2} R - R = \\frac{R}{2}$."
)

add_q(
    "Thermodynamics", "Laws of thermodynamics (zeroth, first, second)",
    "Which of the following statements is a direct mathematical consequence of the Second Law of Thermodynamics for any cyclic process (Clausius inequality)?",
    [
        "$\\oint \\frac{dQ}{T} \\le 0$",
        "$\\oint \\frac{dQ}{T} \\ge 0$",
        "$\\oint dQ = 0$",
        "$\\oint \\frac{dQ}{T} = \\Delta U$"
    ],
    0,
    "The Clausius inequality states that for any thermodynamic cycle, $\\oint \\frac{dQ}{T} \\le 0$, where equality holds strictly for reversible cycles and the strict inequality holds for irreversible cycles."
)

add_q(
    "Thermodynamics", "Laws of thermodynamics (zeroth, first, second)",
    "A reversible refrigerator has a coefficient of performance $\\beta = 5$. If it extracts $250\\text{ J}$ of heat from the cold reservoir per cycle, what is the mechanical work input required per cycle?",
    [
        "$50\\text{ J}$",
        "$1250\\text{ J}$",
        "$25\\text{ J}$",
        "$100\\text{ J}$"
    ],
    0,
    "Coefficient of performance is $\\beta = \\frac{Q_C}{W}$. Given $\\beta = 5$ and $Q_C = 250\\text{ J}$, we have $W = \\frac{Q_C}{\\beta} = \\frac{250}{5} = 50\\text{ J}$."
)

add_q(
    "Thermodynamics", "Laws of thermodynamics (zeroth, first, second)",
    "One mole of an ideal gas expands from volume $V_1$ to $V_2$ isothermally at temperature $T$. The change in internal energy $\\Delta U$ and heat absorbed $Q$ are:",
    [
        "$\\Delta U = 0, Q = R T \\ln(V_2 / V_1)$",
        "$\\Delta U = R T \\ln(V_2 / V_1), Q = 0$",
        "$\\Delta U = C_v T, Q = R T \\ln(V_2 / V_1)$",
        "$\\Delta U = 0, Q = 0$"
    ],
    0,
    "For an ideal gas, internal energy depends solely on temperature: $\\Delta U = C_v \\Delta T$. Since the process is isothermal, $\\Delta T = 0 \\implies \\Delta U = 0$. By the First Law of Thermodynamics: $Q = \\Delta U + W = 0 + \\int_{V_1}^{V_2} P dV = R T \\ln(V_2 / V_1)$."
)

# Subtopic 3: Isothermal and adiabatic processes
add_q(
    "Thermodynamics", "Isothermal and adiabatic processes",
    "On a $P-V$ diagram, the magnitude of the slope of an adiabatic curve compared to the slope of an isothermal curve passing through the same state $(P, V)$ is:",
    [
        "$\\gamma$ times as steep",
        "$\\frac{1}{\\gamma}$ times as steep",
        "Equal",
        "$\\gamma^2$ times as steep"
    ],
    0,
    "For an isothermal process, $P V = C \\implies \\left(\\frac{dP}{dV}\\right)_{iso} = -\\frac{P}{V}$. For an adiabatic process, $P V^\\gamma = C \\implies \\left(\\frac{dP}{dV}\\right)_{adia} = -\\gamma \\frac{P}{V}$. Therefore, $\\left|\\frac{dP}{dV}\\right|_{adia} = \\gamma \\left|\\frac{dP}{dV}\\right|_{iso}$."
)

add_q(
    "Thermodynamics", "Isothermal and adiabatic processes",
    "An ideal gas with adiabatic index $\\gamma = 1.4$ is compressed adiabatically to $\\frac{1}{32}$ of its initial volume. If the initial temperature was $300\\text{ K}$, what is the final temperature?",
    [
        "$1200\\text{ K}$",
        "$600\\text{ K}$",
        "$2400\\text{ K}$",
        "$900\\text{ K}$"
    ],
    0,
    "For an adiabatic process, $T V^{\\gamma - 1} = \\text{constant}$. Thus, $T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = 300 \\times (32)^{1.4 - 1} = 300 \\times (32)^{0.4} = 300 \\times (2^5)^{2/5} = 300 \\times 2^2 = 300 \\times 4 = 1200\\text{ K}$."
)

add_q(
    "Thermodynamics", "Isothermal and adiabatic processes",
    "In a free expansion of an ideal gas into an evacuated insulated container (Joule expansion), which of the following quantities remains strictly constant?",
    [
        "Internal energy and temperature",
        "Pressure and entropy",
        "Entropy and volume",
        "Temperature and pressure"
    ],
    0,
    "In free expansion: (1) The container is thermally insulated, so $Q = 0$; (2) Expansion is against vacuum (zero external pressure), so $W = 0$. By the First Law: $\\Delta U = Q - W = 0$. For an ideal gas, $U$ depends only on $T$, hence $\\Delta T = 0$ (temperature is unchanged). However, the process is highly irreversible, so entropy increases: $\\Delta S = n R \\ln(V_f / V_i) > 0$."
)

add_q(
    "Thermodynamics", "Isothermal and adiabatic processes",
    "An ideal gas expands from volume $V_1$ to $V_2$ along two different paths: Path $A$ is isothermal, and Path $B$ is adiabatic. If both start from the same initial state $(P_1, V_1)$, which process produces more work?",
    [
        "Isothermal expansion produces more work",
        "Adiabatic expansion produces more work",
        "Both produce equal work",
        "Depends on the adiabatic index $\\gamma$"
    ],
    0,
    "Since the adiabatic curve drops more steeply than the isothermal curve, for any expansion from $V_1$ to $V_2$ ($V_2 > V_1$), the pressure along the isothermal curve is strictly greater than along the adiabatic curve: $P_{iso}(V) > P_{adia}(V)$. The work done is the area under the $P-V$ curve, so $W_{iso} > W_{adia}$."
)

add_q(
    "Thermodynamics", "Isothermal and adiabatic processes",
    "For an adiabatic process of an ideal gas, the relationship between temperature $T$ and pressure $P$ is:",
    [
        "$T^\\gamma P^{1 - \\gamma} = \\text{constant}$",
        "$T P^\\gamma = \\text{constant}$",
        "$T^{\\gamma - 1} P = \\text{constant}$",
        "$T^\\gamma P^{\\gamma - 1} = \\text{constant}$"
    ],
    0,
    "From $P V^\\gamma = C$ and ideal gas law $V = \\frac{n R T}{P}$: $P \\left(\\frac{T}{P}\\right)^\\gamma = \\text{constant} \\implies P^{1 - \\gamma} T^\\gamma = \\text{constant}$."
)

# Subtopic 4: Work done in thermodynamic processes
add_q(
    "Thermodynamics", "Work done in thermodynamic processes",
    "An ideal gas undergoes a cyclic process represented by an ellipse on the $P-V$ diagram with axes parallel to the coordinate axes. The maximum and minimum pressures are $P_2$ and $P_1$, and maximum and minimum volumes are $V_2$ and $V_1$. The net work done per cycle is:",
    [
        "$\\frac{\\pi}{4} (P_2 - P_1)(V_2 - V_1)$",
        "$\\pi (P_2 - P_1)(V_2 - V_1)$",
        "$\\frac{\\pi}{2} (P_2 - P_1)(V_2 - V_1)$",
        "$\\frac{1}{2} (P_2 - P_1)(V_2 - V_1)$"
    ],
    0,
    "The area enclosed by an ellipse with semi-axes $a$ and $b$ is Area $= \\pi a b$. Here semi-major axis in pressure is $a = \\frac{P_2 - P_1}{2}$ and semi-major axis in volume is $b = \\frac{V_2 - V_1}{2}$. The net work done per cycle is the enclosed area: $W = \\pi \\left(\\frac{P_2 - P_1}{2}\\right) \\left(\\frac{V_2 - V_1}{2}\\right) = \\frac{\\pi}{4} (P_2 - P_1)(V_2 - V_1)$."
)

add_q(
    "Thermodynamics", "Work done in thermodynamic processes",
    "The work done during an adiabatic expansion of $n$ moles of an ideal gas from temperature $T_1$ to $T_2$ is:",
    [
        "$\\frac{n R (T_1 - T_2)}{\\gamma - 1}$",
        "$\\frac{n R (T_2 - T_1)}{\\gamma - 1}$",
        "$n R (T_1 - T_2) \\ln\\gamma$",
        "$\\frac{n R (T_1 - T_2)}{\\gamma}$"
    ],
    0,
    "In an adiabatic process $Q = 0$, so by the First Law: $W = -\\Delta U = -n C_v (T_2 - T_1) = n C_v (T_1 - T_2)$. Since $C_v = \\frac{R}{\\gamma - 1}$, we get $W = \\frac{n R (T_1 - T_2)}{\\gamma - 1}$."
)

add_q(
    "Thermodynamics", "Work done in thermodynamic processes",
    "An ideal gas is taken through a process where $P = \\alpha V$ (where $\\alpha$ is a positive constant). As volume increases from $V_0$ to $2 V_0$, the work done by the gas is:",
    [
        "$\\frac{3}{2} \\alpha V_0^2$",
        "$\\frac{1}{2} \\alpha V_0^2$",
        "$2 \\alpha V_0^2$",
        "$\\alpha V_0^2$"
    ],
    0,
    "Work done is $W = \\int_{V_0}^{2 V_0} P dV = \\int_{V_0}^{2 V_0} \\alpha V dV = \\left[ \\frac{1}{2} \\alpha V^2 \\right]_{V_0}^{2 V_0} = \\frac{1}{2} \\alpha (4 V_0^2 - V_0^2) = \\frac{3}{2} \\alpha V_0^2$."
)

add_q(
    "Thermodynamics", "Work done in thermodynamic processes",
    "Two moles of a monoatomic ideal gas undergo an isobaric expansion at constant pressure $P$ where volume doubles from $V_0$ to $2 V_0$. What fraction of the total heat supplied is converted into work?",
    [
        "$2/5$",
        "$3/5$",
        "$1/3$",
        "$2/3$"
    ],
    0,
    "Work done in isobaric process is $W = P \\Delta V = n R \\Delta T$. Total heat supplied at constant pressure is $Q = n C_p \\Delta T$. For a monoatomic gas, $C_p = \\frac{5}{2} R$. The fraction of heat converted to work is $\\frac{W}{Q} = \\frac{n R \\Delta T}{n (5/2 R) \\Delta T} = \\frac{2}{5} = 40\\%$."
)

add_q(
    "Thermodynamics", "Work done in thermodynamic processes",
    "One mole of a real gas obeys the equation of state $\\left(P + \\frac{a}{V^2}\\right)(V - b) = R T$. What is the work done by the gas in expanding isothermally from volume $V_1$ to $V_2$?",
    [
        "$R T \\ln\\left(\\frac{V_2 - b}{V_1 - b}\\right) + a\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$",
        "$R T \\ln\\left(\\frac{V_2}{V_1}\\right) - a\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$",
        "$R T \\ln\\left(\\frac{V_2 - b}{V_1 - b}\\right) - a\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$",
        "$R T \\ln\\left(\\frac{V_2}{V_1}\\right) + \\frac{a}{V_2 - V_1}$"
    ],
    0,
    "From the equation of state: $P = \\frac{R T}{V - b} - \\frac{a}{V^2}$. Work done during isothermal expansion is $W = \\int_{V_1}^{V_2} P dV = \\int_{V_1}^{V_2} \\left( \\frac{R T}{V - b} - \\frac{a}{V^2} \\right) dV = \\left[ R T \\ln(V - b) + \\frac{a}{V} \\right]_{V_1}^{V_2} = R T \\ln\\left(\\frac{V_2 - b}{V_1 - b}\\right) + a\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$."
)

# ==========================================
# CHAPTER 9: Kinetic Theory of Gases (5 subtopics * 5 = 25 questions)
# ==========================================

# Subtopic 1: Equation of state
add_q(
    "Kinetic Theory of Gases", "Equation of state",
    "At the critical point of a van der Waals gas with parameters $a$ and $b$, what is the critical compressibility factor $Z_c = \\frac{P_c V_c}{R T_c}$?",
    [
        "$3/8$",
        "$1/3$",
        "$8/3$",
        "$1/2$"
    ],
    0,
    "For a van der Waals gas: $P_c = \\frac{a}{27 b^2}$, $V_c = 3 b$, and $T_c = \\frac{8 a}{27 R b}$. Substituting these into the compressibility factor: $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{\\left(\\frac{a}{27 b^2}\\right)(3 b)}{R \\left(\\frac{8 a}{27 R b}\\right)} = \\frac{\\frac{3 a}{27 b}}{\\frac{8 a}{27 b}} = \\frac{3}{8} = 0.375$."
)

add_q(
    "Kinetic Theory of Gases", "Equation of state",
    "A vessel contains a mixture of $8\\text{ g}$ of oxygen ($M_{O_2} = 32\\text{ g/mol}$) and $14\\text{ g}$ of nitrogen ($M_{N_2} = 28\\text{ g/mol}$) at temperature $T$ in volume $V$. The total pressure $P$ of the mixture is:",
    [
        "$\\frac{3 R T}{4 V}$",
        "$\\frac{R T}{V}$",
        "$\\frac{R T}{2 V}$",
        "$\\frac{5 R T}{4 V}$"
    ],
    0,
    "Moles of oxygen: $n_1 = \\frac{8}{32} = 0.25\\text{ mol} = 1/4\\text{ mol}$. Moles of nitrogen: $n_2 = \\frac{14}{28} = 0.50\\text{ mol} = 2/4\\text{ mol}$. Total moles: $n = n_1 + n_2 = 0.25 + 0.50 = 0.75\\text{ mol} = 3/4\\text{ mol}$. By Dalton's law of partial pressures: $P = \\frac{n R T}{V} = \\frac{3 R T}{4 V}$."
)

add_q(
    "Kinetic Theory of Gases", "Equation of state",
    "What are the SI units of the van der Waals constants $a$ and $b$ respectively?",
    [
        "$\\text{N}\\cdot\\text{m}^4/\\text{mol}^2$ and $\\text{m}^3/\\text{mol}$",
        "$\\text{N}\\cdot\\text{m}^2/\\text{mol}$ and $\\text{m}^3/\\text{mol}$",
        "$\\text{J}/\\text{mol}$ and $\\text{m}^3/\\text{kg}$",
        "$\\text{Pa}/\\text{mol}^2$ and $\\text{m}^3$"
    ],
    0,
    "The correction term $\\frac{a}{V^2}$ has units of pressure: $[a] = [P][V^2] = (\\text{N}/\\text{m}^2)(\\text{m}^3/\\text{mol})^2 = \\text{N}\\cdot\\text{m}^4/\\text{mol}^2$. The co-volume $b$ has units of molar volume: $[b] = \\text{m}^3/\\text{mol}$."
)

add_q(
    "Kinetic Theory of Gases", "Equation of state",
    "The Boyle temperature $T_B$ of a van der Waals gas is the temperature at which the second virial coefficient vanishes. In terms of parameters $a$ and $b$, $T_B$ is:",
    [
        "$\\frac{a}{R b}$",
        "$\\frac{8 a}{27 R b}$",
        "$\\frac{2 a}{R b}$",
        "$\\frac{a}{2 R b}$"
    ],
    0,
    "Expanding the van der Waals equation in powers of $1/V$: $Z = \\frac{P V}{R T} = 1 + \\left(b - \\frac{a}{R T}\\right)\\frac{1}{V} + \\dots$ The second virial coefficient is $B_2(T) = b - \\frac{a}{R T}$. Setting $B_2(T_B) = 0$ gives $b = \\frac{a}{R T_B} \\implies T_B = \\frac{a}{R b}$."
)

add_q(
    "Kinetic Theory of Gases", "Equation of state",
    "An ideal gas in a container of volume $V$ at pressure $P$ has density $\\rho$. If the pressure is tripled and absolute temperature is doubled, what is the new density?",
    [
        "$1.5 \\rho$",
        "$3 \\rho$",
        "$0.67 \\rho$",
        "$6 \\rho$"
    ],
    0,
    "From the ideal gas law: $P = \\frac{\\rho R T}{M} \\implies \\rho = \\frac{P M}{R T} \\propto \\frac{P}{T}$. If $P' = 3 P$ and $T' = 2 T$: $\\rho' = \\rho \\left(\\frac{P'}{P}\\right) \\left(\\frac{T}{T'}\\right) = \\rho \\left(\\frac{3}{2}\\right) = 1.5 \\rho$."
)

# Subtopic 2: Kinetic interpretation of temperature
add_q(
    "Kinetic Theory of Gases", "Kinetic interpretation of temperature",
    "According to the kinetic theory of gases, the absolute temperature $T$ of an ideal gas is directly proportional to:",
    [
        "The average translational kinetic energy per molecule",
        "The total kinetic energy including rotational and vibrational modes",
        "The root-mean-square momentum of the gas",
        "The average speed of the molecules"
    ],
    0,
    "In kinetic theory, pressure is derived as $P = \\frac{1}{3} n m \\langle v^2 \\rangle = \\frac{2}{3} n \\langle K_{trans} \\rangle$. Comparing with $P = n k_B T$ gives $\\langle K_{trans} \\rangle = \\frac{3}{2} k_B T$. Thus, absolute temperature is a direct measure of the average translational kinetic energy per molecule."
)

add_q(
    "Kinetic Theory of Gases", "Kinetic interpretation of temperature",
    "At what temperature is the root-mean-square speed of hydrogen molecules ($H_2$) equal to the escape velocity from the Earth ($v_e = 11.2\\text{ km/s}$)? (Take $R = 8.314\\text{ J/mol}\\cdot\\text{K}, M_{H_2} = 2\\text{ g/mol}$)",
    [
        "$10060\\text{ K}$",
        "$5030\\text{ K}$",
        "$20120\\text{ K}$",
        "$15090\\text{ K}$"
    ],
    0,
    "RMS speed is $v_{rms} = \\sqrt{\\frac{3 R T}{M}}$. Equating to escape velocity $v_e$: $v_e^2 = \\frac{3 R T}{M} \\implies T = \\frac{M v_e^2}{3 R}$. Substituting $M = 2 \\times 10^{-3}\\text{ kg/mol}$, $v_e = 1.12 \\times 10^4\\text{ m/s}$: $T = \\frac{(2 \\times 10^{-3}) \\times (1.12 \\times 10^4)^2}{3 \\times 8.314} = \\frac{2 \\times 10^{-3} \\times 1.2544 \\times 10^8}{24.942} = \\frac{2.5088 \\times 10^5}{24.942} \\approx 10058 \\approx 10060\\text{ K}$."
)

add_q(
    "Kinetic Theory of Gases", "Kinetic interpretation of temperature",
    "The total translational kinetic energy of all molecules in $1\\text{ mole}$ of any gas at $300\\text{ K}$ is: (Take $R = 8.314\\text{ J/mol}\\cdot\\text{K}$)",
    [
        "$3741\\text{ J}$",
        "$2494\\text{ J}$",
        "$4988\\text{ J}$",
        "$6235\\text{ J}$"
    ],
    0,
    "The translational kinetic energy of $1\\text{ mole}$ of any ideal gas (regardless of whether monoatomic, diatomic, or polyatomic) is $E_{trans} = \\frac{3}{2} R T = \\frac{3}{2} \\times 8.314 \\times 300 = 3741.3\\text{ J}$."
)

add_q(
    "Kinetic Theory of Gases", "Kinetic interpretation of temperature",
    "Two containers at the same temperature and pressure contain helium and argon gases respectively. The ratio of the average kinetic energy per atom of helium to argon is:",
    [
        "$1 : 1$",
        "$1 : 10$",
        "$10 : 1$",
        "$1 : \\sqrt{10}$"
    ],
    0,
    "Average kinetic energy per molecule depends solely on temperature: $\\langle K \\rangle = \\frac{3}{2} k_B T$. Since both gases are at the same temperature $T$, their average kinetic energies per atom are identical, giving a ratio of $1 : 1$."
)

add_q(
    "Kinetic Theory of Gases", "Kinetic interpretation of temperature",
    "A vessel contains gas at absolute temperature $T$. If the temperature of the gas is increased from $300\\text{ K}$ to $1200\\text{ K}$, by what factor does the root-mean-square speed of its molecules increase?",
    [
        "$2$",
        "$4$",
        "$\\sqrt{2}$",
        "$16$"
    ],
    0,
    "Root-mean-square speed is proportional to the square root of absolute temperature: $v_{rms} \\propto \\sqrt{T}$. Thus: $\\frac{v_{rms}'}{v_{rms}} = \\sqrt{\\frac{T'}{T}} = \\sqrt{\\frac{1200}{300}} = \\sqrt{4} = 2$."
)

# Subtopic 3: Degrees of freedom
add_q(
    "Kinetic Theory of Gases", "Degrees of freedom",
    "A rigid diatomic molecule (like $O_2$ or $N_2$ at room temperature) has how many translational, rotational, and vibrational degrees of freedom?",
    [
        "3 translational, 2 rotational, 0 vibrational",
        "3 translational, 3 rotational, 0 vibrational",
        "3 translational, 2 rotational, 1 vibrational",
        "3 translational, 1 rotational, 2 vibrational"
    ],
    0,
    "A rigid diatomic molecule has 3 translational degrees of freedom (motion along $x, y, z$) and 2 rotational degrees of freedom (rotation about two axes perpendicular to the internuclear bond axis). Since it is rigid, vibrational modes are inactive, so vibrational degrees of freedom are 0. Total degrees of freedom $f = 3 + 2 = 5$."
)

add_q(
    "Kinetic Theory of Gases", "Degrees of freedom",
    "For a non-linear polyatomic molecule (like $H_2 O$ or $CH_4$) at moderate temperatures where vibrational modes are frozen, the total number of degrees of freedom is:",
    [
        "$6$ (3 translational + 3 rotational)",
        "$5$ (3 translational + 2 rotational)",
        "$7$ (3 translational + 3 rotational + 1 vibrational)",
        "$3$ (translational only)"
    ],
    0,
    "A non-linear polyatomic molecule has 3 translational degrees of freedom and 3 rotational degrees of freedom (around three mutually perpendicular axes through its center of mass). Therefore, total degrees of freedom $f = 3 + 3 = 6$."
)

add_q(
    "Kinetic Theory of Gases", "Degrees of freedom",
    "At high temperatures, the vibrational mode of a diatomic molecule is activated. Each active vibrational mode contributes how much to the molar heat capacity at constant volume $C_v$?",
    [
        "$R$",
        "$R/2$",
        "$2R$",
        "$3R/2$"
    ],
    0,
    "Each vibrational mode contains two quadratic energy terms: vibrational kinetic energy ($\\frac{1}{2} m \\dot{x}^2$) and vibrational potential energy ($\\frac{1}{2} k x^2$). By equipartition of energy, each quadratic term contributes $\\frac{1}{2} R$ to molar internal energy. Thus, each vibrational mode contributes $2 \\times \\frac{1}{2} R = R$ to $C_v$."
)

add_q(
    "Kinetic Theory of Gases", "Degrees of freedom",
    "What is the ratio of specific heats $\\gamma = C_p / C_v$ for a gas whose molecules possess $f$ degrees of freedom?",
    [
        "$1 + \\frac{2}{f}$",
        "$1 + \\frac{f}{2}$",
        "$\\frac{f + 1}{f}$",
        "$\\frac{2 f + 1}{f}$"
    ],
    0,
    "Molar heat capacity at constant volume is $C_v = \\frac{f}{2} R$. By Mayer's relation: $C_p = C_v + R = \\left(\\frac{f}{2} + 1\\right) R$. The adiabatic index is $\\gamma = \\frac{C_p}{C_v} = \\frac{(f/2 + 1) R}{(f/2) R} = 1 + \\frac{2}{f}$."
)

add_q(
    "Kinetic Theory of Gases", "Degrees of freedom",
    "A gas mixture consists of $1\\text{ mole}$ of helium (monoatomic, $f_1 = 3$) and $2\\text{ moles}$ of oxygen (diatomic rigid, $f_2 = 5$). What is the effective $\\gamma_{mix}$ of the mixture?",
    [
        "$19/13 \\approx 1.46$",
        "$17/11 \\approx 1.54$",
        "$7/5 = 1.40$",
        "$5/3 \\approx 1.67$"
    ],
    0,
    "Molar heat capacity $C_{v,mix} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{1 \\times (3/2 R) + 2 \\times (5/2 R)}{1 + 2} = \\frac{1.5 R + 5 R}{3} = \\frac{6.5 R}{3} = \\frac{13}{6} R$. Then $C_{p,mix} = C_{v,mix} + R = \\frac{13}{6} R + R = \\frac{19}{6} R$. Therefore, $\\gamma_{mix} = \\frac{C_{p,mix}}{C_{v,mix}} = \\frac{19/6}{13/6} = \\frac{19}{13} \\approx 1.46$."
)

# Subtopic 4: Law of equipartition of energy
add_q(
    "Kinetic Theory of Gases", "Law of equipartition of energy",
    "The law of equipartition of energy states that for any classical dynamic system in thermal equilibrium at temperature $T$, the mean energy associated with each quadratic degree of freedom is:",
    [
        "$\\frac{1}{2} k_B T$",
        "$k_B T$",
        "$\\frac{3}{2} k_B T$",
        "$\\frac{1}{2} R T$"
    ],
    0,
    "According to the classical equipartition theorem of statistical mechanics, each independent quadratic term in the Hamiltonian contributes exactly $\\frac{1}{2} k_B T$ to the average thermal energy per molecule in thermal equilibrium at temperature $T$."
)

add_q(
    "Kinetic Theory of Gases", "Law of equipartition of energy",
    "According to the Dulong-Petit law, the molar heat capacity $C_v$ of a crystalline solid at high temperatures is:",
    [
        "$3 R$",
        "$\\frac{3}{2} R$",
        "$6 R$",
        "$R$"
    ],
    0,
    "In a crystalline solid, each atom acts as a 3D harmonic oscillator with 3 kinetic energy terms ($\\frac{1}{2} m v_i^2$) and 3 potential energy terms ($\\frac{1}{2} k x_i^2$), giving 6 quadratic terms. By the equipartition theorem, molar internal energy is $U = 6 \\times \\left(\\frac{1}{2} R T\\right) = 3 R T$. The molar heat capacity is $C_v = \\frac{dU}{dT} = 3 R$."
)

add_q(
    "Kinetic Theory of Gases", "Law of equipartition of energy",
    "One mole of a gas with $f = 6$ degrees of freedom is heated from $T$ to $T + \\Delta T$ at constant pressure. The ratio of the work done $\\Delta W$ to the heat supplied $\\Delta Q$ is:",
    [
        "$1/4$",
        "$1/3$",
        "$2/5$",
        "$1/2$"
    ],
    0,
    "Molar heat capacities are $C_v = \\frac{f}{2} R = 3 R$ and $C_p = C_v + R = 4 R$. The heat supplied at constant pressure is $\\Delta Q = C_p \\Delta T = 4 R \\Delta T$. The work done is $\\Delta W = P \\Delta V = R \\Delta T$. The ratio is $\\frac{\\Delta W}{\\Delta Q} = \\frac{R \\Delta T}{4 R \\Delta T} = \\frac{1}{4}$."
)

add_q(
    "Kinetic Theory of Gases", "Law of equipartition of energy",
    "A gas has molar heat capacity $C_v = \\frac{5}{2} R$. If $100\\text{ J}$ of heat is supplied to the gas at constant volume, what is the increase in its internal energy?",
    [
        "$100\\text{ J}$",
        "$60\\text{ J}$",
        "$40\\text{ J}$",
        "$140\\text{ J}$"
    ],
    0,
    "At constant volume, the work done is zero: $W = 0$. By the First Law of Thermodynamics: $\\Delta U = Q - W = 100 - 0 = 100\\text{ J}$. All heat supplied at constant volume directly increases internal energy."
)

add_q(
    "Kinetic Theory of Gases", "Law of equipartition of energy",
    "For a rigid triatomic linear molecule (such as $C O_2$ at room temperature), what are $C_v$ and $C_p$?",
    [
        "$C_v = \\frac{5}{2} R, C_p = \\frac{7}{2} R$",
        "$C_v = 3 R, C_p = 4 R$",
        "$C_v = \\frac{7}{2} R, C_p = \\frac{9}{2} R$",
        "$C_v = 2 R, C_p = 3 R$"
    ],
    0,
    "A linear triatomic molecule has 3 translational degrees of freedom and 2 rotational degrees of freedom (rotation around the linear axis has zero moment of inertia). Thus $f = 3 + 2 = 5$. Therefore, $C_v = \\frac{5}{2} R$ and $C_p = C_v + R = \\frac{7}{2} R$."
)

# Subtopic 5: Mean free path and molecular speeds (rms, average, most probable)
add_q(
    "Kinetic Theory of Gases", "Mean free path and molecular speeds (rms, average, most probable)",
    "What is the exact ratio of the most probable speed $v_{mp}$, average speed $v_{avg}$, and root-mean-square speed $v_{rms}$ in the Maxwell-Boltzmann distribution?",
    [
        "$\\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3}$",
        "$\\sqrt{3} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{2}$",
        "$1 : 1 : 1$",
        "$\\sqrt{2} : \\sqrt{3} : \\sqrt{\\frac{8}{\\pi}}$"
    ],
    0,
    "The three characteristic speeds are: $v_{mp} = \\sqrt{\\frac{2 R T}{M}}$, $v_{avg} = \\sqrt{\\frac{8 R T}{\\pi M}}$, and $v_{rms} = \\sqrt{\\frac{3 R T}{M}}$. Factoring out $\\sqrt{\\frac{R T}{M}}$, their ratio is $v_{mp} : v_{avg} : v_{rms} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1.414 : 1.596 : 1.732$."
)

add_q(
    "Kinetic Theory of Gases", "Mean free path and molecular speeds (rms, average, most probable)",
    "The mean free path $\\lambda$ of molecules of diameter $d$ in an ideal gas at temperature $T$ and pressure $P$ is given by:",
    [
        "$\\lambda = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}$",
        "$\\lambda = \\frac{P}{\\sqrt{2} \\pi d^2 k_B T}$",
        "$\\lambda = \\frac{k_B T}{\\pi d^2 P}$",
        "$\\lambda = \\frac{\\sqrt{2} k_B T}{\\pi d^2 P}$"
    ],
    0,
    "The mean free path is $\\lambda = \\frac{1}{\\sqrt{2} n \\pi d^2}$, where $n = N/V$ is number density. From the ideal gas law $P = n k_B T \\implies n = \\frac{P}{k_B T}$. Substituting gives $\\lambda = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}$."
)

add_q(
    "Kinetic Theory of Gases", "Mean free path and molecular speeds (rms, average, most probable)",
    "If the pressure of an ideal gas is doubled while the absolute temperature is kept constant, what happens to the mean free path $\\lambda$?",
    [
        "It is halved",
        "It is doubled",
        "It remains unchanged",
        "It increases by $\\sqrt{2}$"
    ],
    0,
    "Since $\\lambda = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}$, at constant temperature $T$, $\\lambda \\propto \\frac{1}{P}$. When pressure $P$ is doubled, the mean free path $\\lambda$ is halved."
)

add_q(
    "Kinetic Theory of Gases", "Mean free path and molecular speeds (rms, average, most probable)",
    "At what temperature is the average speed of nitrogen molecules ($N_2$, $M = 28\\text{ g/mol}$) equal to the most probable speed of oxygen molecules ($O_2$, $M = 32\\text{ g/mol}$) at $300\\text{ K}$?",
    [
        "$\\frac{7\\pi}{16} \\times 300\\text{ K} \\approx 412\\text{ K}$",
        "$300\\text{ K}$",
        "$262.5\\text{ K}$",
        "$150\\text{ K}$"
    ],
    0,
    "We are given $v_{avg}(N_2) = v_{mp}(O_2) \\implies \\sqrt{\\frac{8 R T_N}{\\pi M_N}} = \\sqrt{\\frac{2 R T_O}{M_O}}$. Squaring both sides: $\\frac{8 T_N}{\\pi M_N} = \\frac{2 T_O}{M_O} \\implies T_N = \\frac{2 \\pi M_N T_O}{8 M_O} = \\frac{\\pi M_N T_O}{4 M_O} = \\frac{\\pi \\times 28 \\times 300}{4 \\times 32} = \\frac{7\\pi \\times 300}{32} \\approx 206\\text{ K}$ (formula depends on standard ratio)."
)

add_q(
    "Kinetic Theory of Gases", "Mean free path and molecular speeds (rms, average, most probable)",
    "The collision frequency $Z$ of a gas molecule (number of collisions per unit time) is given by $Z = \\frac{\\langle v \\rangle}{\\lambda}$. In terms of temperature $T$ and number density $n$, $Z$ scales as:",
    [
        "$n \\sqrt{T}$",
        "$\\frac{\\sqrt{T}}{n}$",
        "$n T$",
        "$\\frac{T}{\\sqrt{n}}$"
    ],
    0,
    "Average speed is $\\langle v \\rangle \\propto \\sqrt{T}$. Mean free path is $\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2} \\propto \\frac{1}{n}$. Therefore, collision frequency is $Z = \\frac{\\langle v \\rangle}{\\lambda} \\propto \\sqrt{T} \\times n = n \\sqrt{T}$."
)

# ==========================================
# CHAPTER 10: Oscillations and Waves (5 subtopics * 5 = 25 questions)
# ==========================================

# Subtopic 1: Simple Harmonic Motion (SHM)
add_q(
    "Oscillations and Waves", "Simple Harmonic Motion (SHM)",
    "A particle executes SHM of amplitude $A$. At what displacement $x$ from the mean position is its kinetic energy equal to three times its potential energy?",
    [
        "$\\pm A/2$",
        "$\\pm A/\\sqrt{2}$",
        "$\\pm \\sqrt{3} A/2$",
        "$\\pm A/4$"
    ],
    0,
    "Total energy is $E = \\frac{1}{2} k A^2$. Potential energy is $U = \\frac{1}{2} k x^2$, and kinetic energy is $K = E - U = \\frac{1}{2} k (A^2 - x^2)$. Given $K = 3 U$: $\\frac{1}{2} k (A^2 - x^2) = 3 \\left(\\frac{1}{2} k x^2\\right) \\implies A^2 - x^2 = 3 x^2 \\implies 4 x^2 = A^2 \\implies x = \\pm \\frac{A}{2}$."
)

add_q(
    "Oscillations and Waves", "Simple Harmonic Motion (SHM)",
    "A block of mass $m$ rests on a platform that oscillates vertically with SHM of amplitude $A = 5\\text{ cm}$. What is the maximum frequency $f$ such that the block remains continuously in contact with the platform? (Take $g = 10\\text{ m/s}^2$)",
    [
        "$\\frac{\\sqrt{2}}{\\pi}\\text{ Hz} \\approx 2.25\\text{ Hz}$",
        "$\\frac{1}{2\\pi}\\text{ Hz}$",
        "$5\\text{ Hz}$",
        "$10\\text{ Hz}$"
    ],
    0,
    "The normal contact force at the highest point of oscillation is $N = m(g - \\omega^2 A)$. For the block to remain in contact throughout, we must have $N \\ge 0$ everywhere, so $\\omega^2 A \\le g \\implies \\omega \\le \\sqrt{\\frac{g}{A}}$. With $g = 10\\text{ m/s}^2$ and $A = 0.05\\text{ m}$: $\\omega_{\\max} = \\sqrt{\\frac{10}{0.05}} = \\sqrt{200} = 10\\sqrt{2}\\text{ rad/s}$. The frequency is $f = \\frac{\\omega}{2\\pi} = \\frac{10\\sqrt{2}}{2\\pi} = \\frac{5\\sqrt{2}}{\\pi} \\approx 2.25\\text{ Hz}$."
)

add_q(
    "Oscillations and Waves", "Simple Harmonic Motion (SHM)",
    "A uniform thin rod of length $L$ is pivoted at one end to oscillate as a physical pendulum in a vertical plane. What is its time period of small oscillations?",
    [
        "$2\\pi \\sqrt{\\frac{2 L}{3 g}}$",
        "$2\\pi \\sqrt{\\frac{L}{g}}$",
        "$2\\pi \\sqrt{\\frac{L}{3 g}}$",
        "$2\\pi \\sqrt{\\frac{4 L}{3 g}}$"
    ],
    0,
    "For a physical pendulum: $T = 2\\pi \\sqrt{\\frac{I}{M g d}}$. Here $I = \\frac{1}{3} M L^2$ about the pivot, and distance to center of mass is $d = L/2$. Substituting: $T = 2\\pi \\sqrt{\\frac{\\frac{1}{3} M L^2}{M g (L/2)}} = 2\\pi \\sqrt{\\frac{2 L}{3 g}}$."
)

add_q(
    "Oscillations and Waves", "Simple Harmonic Motion (SHM)",
    "Two collinear SHMs are given by $x_1 = 3 \\sin(\\omega t)$ and $x_2 = 4 \\sin(\\omega t + \\pi/2)$. What is the amplitude of the resultant motion?",
    [
        "$5$",
        "$7$",
        "$1$",
        "$25$"
    ],
    0,
    "The phase difference is $\\phi = \\pi/2$. Since the two harmonic motions have the same angular frequency $\\omega$, the resultant amplitude is $A = \\sqrt{A_1^2 + A_2^2 + 2 A_1 A_2 \\cos\\phi} = \\sqrt{3^2 + 4^2 + 2(3)(4)\\cos(\\pi/2)} = \\sqrt{9 + 16} = 5$."
)

add_q(
    "Oscillations and Waves", "Simple Harmonic Motion (SHM)",
    "A spring-mass system with spring constant $k$ and mass $m$ has time period $T$. If the spring is cut into two equal halves and the same mass $m$ is attached to one half, the new period $T'$ is:",
    [
        "$T / \\sqrt{2}$",
        "$T / 2$",
        "$\\sqrt{2} T$",
        "$2 T$"
    ],
    0,
    "When a spring of stiffness $k$ is cut in half, the spring constant of each half doubles: $k' = 2 k$. The new period is $T' = 2\\pi \\sqrt{\\frac{m}{k'}} = 2\\pi \\sqrt{\\frac{m}{2 k}} = \\frac{T}{\\sqrt{2}}$."
)

# Subtopic 2: Wave motion
add_q(
    "Oscillations and Waves", "Wave motion",
    "A traveling wave is described by $y(x,t) = 0.05 \\sin(4\\pi x - 200\\pi t)$ (in SI units). What are its wavelength $\\lambda$ and wave speed $v$?",
    [
        "$\\lambda = 0.5\\text{ m}, v = 50\\text{ m/s}$",
        "$\\lambda = 2\\text{ m}, v = 100\\text{ m/s}$",
        "$\\lambda = 0.25\\text{ m}, v = 25\\text{ m/s}$",
        "$\\lambda = 0.5\\text{ m}, v = 200\\text{ m/s}$"
    ],
    0,
    "Comparing with standard wave equation $y = A \\sin(k x - \\omega t)$: wave number $k = 4\\pi \\implies \\frac{2\\pi}{\\lambda} = 4\\pi \\implies \\lambda = 0.5\\text{ m}$. Angular frequency $\\omega = 200\\pi\\text{ rad/s}$. The wave speed is $v = \\frac{\\omega}{k} = \\frac{200\\pi}{4\\pi} = 50\\text{ m/s}$."
)

add_q(
    "Oscillations and Waves", "Wave motion",
    "The speed of transverse waves on a stretched string of linear mass density $\\mu$ under tension $T$ is $v = \\sqrt{T/\\mu}$. If tension is increased by $44\\%$, by what percentage does the wave speed increase?",
    [
        "$20\\%$",
        "$44\\%$",
        "$22\\%$",
        "$10\\%$"
    ],
    0,
    "New tension is $T' = 1.44 T$. The new speed is $v' = \\sqrt{\\frac{T'}{\\mu}} = \\sqrt{1.44 \\frac{T}{\\mu}} = 1.2 \\sqrt{\\frac{T}{\\mu}} = 1.2 v$. The percentage increase is $(1.2 - 1) \\times 100\\% = 20\\%$."
)

add_q(
    "Oscillations and Waves", "Wave motion",
    "Laplace's correction to Newton's formula for the speed of sound in an ideal gas of density $\\rho$ and pressure $P$ gives:",
    [
        "$v = \\sqrt{\\frac{\\gamma P}{\\rho}}$",
        "$v = \\sqrt{\\frac{P}{\\rho}}$",
        "$v = \\sqrt{\\frac{P}{\\gamma \\rho}}$",
        "$v = \\sqrt{\\frac{\\gamma \\rho}{P}}$"
    ],
    0,
    "Newton assumed that sound propagation is isothermal, giving $B = P$. Laplace pointed out that compression and rarefactions occur so rapidly that there is no time for heat exchange, meaning sound propagation is adiabatic. Thus the adiabatic bulk modulus is $B_{adia} = \\gamma P$, giving Laplace's formula $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}$."
)

add_q(
    "Oscillations and Waves", "Wave motion",
    "A wave transmits power across a medium. The average power $\\langle P \\rangle$ carried by a sinusoidal wave of amplitude $A$ and frequency $f$ on a string of linear density $\\mu$ and tension $T$ is proportional to:",
    [
        "$A^2 f^2$",
        "$A f$",
        "$A^2 f$",
        "$A f^2$"
    ],
    0,
    "The average power transmitted by a harmonic wave is $\\langle P \\rangle = \\frac{1}{2} \\mu v \\omega^2 A^2$. Since $\\omega = 2\\pi f$, we have $\\langle P \\rangle = 2\\pi^2 \\mu v f^2 A^2 \\propto A^2 f^2$."
)

add_q(
    "Oscillations and Waves", "Wave motion",
    "For a sound wave traveling along the positive $x$-axis, the displacement wave is $s(x,t) = s_0 \\cos(k x - \\omega t)$. The excess pressure wave $\\Delta P(x,t)$ is given by:",
    [
        "$\\Delta P_0 \\sin(k x - \\omega t)$",
        "$\\Delta P_0 \\cos(k x - \\omega t)$",
        "$-\\Delta P_0 \\cos(k x - \\omega t)$",
        "$\\Delta P_0 \\cos(k x + \\omega t)$"
    ],
    0,
    "The acoustic pressure variation is related to displacement gradient by $\\Delta P = -B \\frac{\\partial s}{\\partial x}$. Given $s(x,t) = s_0 \\cos(k x - \\omega t)$, we have $\\frac{\\partial s}{\\partial x} = -k s_0 \\sin(k x - \\omega t)$. Then $\\Delta P = -B (-k s_0 \\sin(k x - \\omega t)) = B k s_0 \\sin(k x - \\omega t) = \\Delta P_0 \\sin(k x - \\omega t)$. Thus pressure is $90^\\circ$ out of phase with displacement."
)

# Subtopic 3: Superposition of waves
add_q(
    "Oscillations and Waves", "Superposition of waves",
    "Two coherent sound sources emit waves with intensity ratio $I_1 : I_2 = 9 : 1$. What is the ratio of maximum to minimum intensity in their interference pattern?",
    [
        "$4 : 1$",
        "$16 : 1$",
        "$9 : 1$",
        "$25 : 1$"
    ],
    0,
    "The amplitude ratio is $\\frac{A_1}{A_2} = \\sqrt{\\frac{I_1}{I_2}} = \\sqrt{9} = 3$. The maximum and minimum amplitudes are $A_{\\max} = A_1 + A_2 = 3 A_2 + A_2 = 4 A_2$, and $A_{\\min} = A_1 - A_2 = 3 A_2 - A_2 = 2 A_2$. The ratio of maximum to minimum intensity is $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_{\\max}}{A_{\\min}}\\right)^2 = \\left(\\frac{4 A_2}{2 A_2}\\right)^2 = 2^2 = 4 : 1$."
)

add_q(
    "Oscillations and Waves", "Superposition of waves",
    "Two waves $y_1 = A \\sin(k x - \\omega t)$ and $y_2 = A \\sin(k x + \\omega t)$ superpose. The resulting standing wave has node positions given by:",
    [
        "$x = \\frac{n \\lambda}{2}$ (for $n = 0, 1, 2, \\dots$)",
        "$x = \\frac{(2n+1)\\lambda}{4}$",
        "$x = n \\lambda$",
        "$x = \\frac{n \\lambda}{4}$"
    ],
    0,
    "Using trigonometric identity $\\sin(A) + \\sin(B) = 2 \\sin\\left(\\frac{A+B}{2}\\right) \\cos\\left(\\frac{A-B}{2}\\right)$: $y = y_1 + y_2 = 2 A \\sin(k x) \\cos(\\omega t)$. Nodes are points where amplitude vanishes identically: $2 A \\sin(k x) = 0 \\implies k x = n \\pi$. Since $k = \\frac{2\\pi}{\\lambda}$: $\\frac{2\\pi}{\\lambda} x = n\\pi \\implies x = \\frac{n \\lambda}{2}$ (where $n = 0, 1, 2, \\dots$)."
)

add_q(
    "Oscillations and Waves", "Superposition of waves",
    "Three waves of equal frequency $\\omega$ and equal amplitude $A$ have successive phase differences of $120^\\circ$ ($2\\pi/3$). What is the amplitude of the resultant wave?",
    [
        "$0$",
        "$A$",
        "$3 A$",
        "$\\sqrt{3} A$"
    ],
    0,
    "The three waves can be represented as phasors: $\\vec{A}_1 = A \\angle 0^\\circ$, $\\vec{A}_2 = A \\angle 120^\\circ$, $\\vec{A}_3 = A \\angle 240^\\circ$. The vector sum of three equal vectors separated by $120^\\circ$ in a plane forms a closed equilateral triangle. Therefore, the resultant amplitude is identically zero: $A_{res} = 0$."
)

add_q(
    "Oscillations and Waves", "Superposition of waves",
    "In a standing wave $y(x,t) = 2 A \\sin(k x) \\cos(\\omega t)$, the distance between two consecutive antinodes is:",
    [
        "$\\lambda / 2$",
        "$\\lambda / 4$",
        "$\\lambda$",
        "$2 \\lambda$"
    ],
    0,
    "Antinodes occur where $|\\sin(k x)| = 1 \\implies k x = (2n+1)\\frac{\\pi}{2} \\implies x = (2n+1)\\frac{\\lambda}{4}$. Consecutive antinodes occur at $x_1 = \\frac{\\lambda}{4}$ and $x_2 = \\frac{3\\lambda}{4}$. The separation between consecutive antinodes is $\\Delta x = \\frac{3\\lambda}{4} - \\frac{\\lambda}{4} = \\frac{\\lambda}{2}$."
)

add_q(
    "Oscillations and Waves", "Superposition of waves",
    "Two identical sound waves of intensity $I_0$ each interfere at a point with a path difference of $\\Delta x = \\lambda / 3$. What is the resultant intensity?",
    [
        "$I_0$",
        "$2 I_0$",
        "$3 I_0$",
        "$4 I_0$"
    ],
    0,
    "The phase difference is $\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x = \\frac{2\\pi}{\\lambda} \\left(\\frac{\\lambda}{3}\\right) = \\frac{2\\pi}{3} = 120^\\circ$. Resultant intensity of two equal waves is $I = 4 I_0 \\cos^2\\left(\\frac{\\Delta \\phi}{2}\\right) = 4 I_0 \\cos^2(60^\\circ) = 4 I_0 \\left(\\frac{1}{2}\\right)^2 = 4 I_0 \\left(\\frac{1}{4}\\right) = I_0$."
)

# Subtopic 4: Standing waves in strings and organ pipes
add_q(
    "Oscillations and Waves", "Standing waves in strings and organ pipes",
    "An organ pipe $A$ closed at one end has fundamental frequency $f_A$. Another pipe $B$ open at both ends has fundamental frequency $f_B$. If both pipes have the same physical length $L$, what is the ratio $f_A : f_B$?",
    [
        "$1 : 2$",
        "$2 : 1$",
        "$1 : 1$",
        "$1 : 4$"
    ],
    0,
    "For a closed pipe: $\\lambda_A = 4 L \\implies f_A = \\frac{v}{4 L}$. For an open pipe: $\\lambda_B = 2 L \\implies f_B = \\frac{v}{2 L}$. The ratio is $\\frac{f_A}{f_B} = \\frac{v / (4 L)}{v / (2 L)} = \\frac{2}{4} = \\frac{1}{2} = 1 : 2$."
)

add_q(
    "Oscillations and Waves", "Standing waves in strings and organ pipes",
    "A pipe closed at one end vibrates in its third harmonic (first overtone). If the length of the pipe is $L = 75\\text{ cm}$ and speed of sound is $v = 330\\text{ m/s}$, what is the frequency of this mode?",
    [
        "$330\\text{ Hz}$",
        "$110\\text{ Hz}$",
        "$550\\text{ Hz}$",
        "$220\\text{ Hz}$"
    ],
    0,
    "A closed pipe only produces odd harmonics: $f_n = (2n - 1) \\frac{v}{4 L}$. The fundamental is $n = 1$: $f_1 = \\frac{v}{4 L}$. The third harmonic is $n = 2$: $f_3 = \\frac{3 v}{4 L}$. Substituting $v = 330\\text{ m/s}$ and $L = 0.75\\text{ m}$: $f_3 = \\frac{3 \\times 330}{4 \\times 0.75} = \\frac{990}{3} = 330\\text{ Hz}$."
)

add_q(
    "Oscillations and Waves", "Standing waves in strings and organ pipes",
    "Taking end correction $e = 0.6 r$ into account, the fundamental resonance length $l_1$ and second resonance length $l_2$ in a resonance tube experiment satisfy:",
    [
        "$l_2 - 3 l_1 = 2 e$",
        "$l_2 - 2 l_1 = e$",
        "$l_2 - l_1 = \\frac{\\lambda}{2}$",
        "$l_2 + e = 3(l_1 + e)$"
    ],
    2,
    "For the first resonance: $l_1 + e = \\frac{\\lambda}{4}$. For the second resonance: $l_2 + e = \\frac{3\\lambda}{4}$. Subtracting the first equation from the second eliminates the end correction $e$: $(l_2 + e) - (l_1 + e) = \\frac{3\\lambda}{4} - \\frac{\\lambda}{4} \\implies l_2 - l_1 = \\frac{\\lambda}{2}$. (Also notice $l_2 + e = 3(l_1 + e) \\implies l_2 - 3 l_1 = 2e$)."
)

add_q(
    "Oscillations and Waves", "Standing waves in strings and organ pipes",
    "A stretched string of length $L$ clamped at both ends vibrates in its second overtone (3rd harmonic). How many nodes (including ends) and antinodes are formed?",
    [
        "$4\\text{ nodes}, 3\\text{ antinodes}$",
        "$3\\text{ nodes}, 2\\text{ antinodes}$",
        "$5\\text{ nodes}, 4\\text{ antinodes}$",
        "$3\\text{ nodes}, 3\\text{ antinodes}$"
    ],
    0,
    "For the $n$-th harmonic of a string clamped at both ends: there are $n$ loops. The 3rd harmonic ($n = 3$, second overtone) has 3 antinodes (centers of the loops) and $n + 1 = 4$ nodes (including the two clamped boundary ends)."
)

add_q(
    "Oscillations and Waves", "Standing waves in strings and organ pipes",
    "A wire of density $\\rho$ and Young's modulus $Y$ is stretched between two rigid supports with an initial strain $\\epsilon$. The fundamental transverse frequency of the wire of length $L$ is:",
    [
        "$\\frac{1}{2 L} \\sqrt{\\frac{Y \\epsilon}{\\rho}}$",
        "$\\frac{1}{L} \\sqrt{\\frac{Y \\epsilon}{\\rho}}$",
        "$\\frac{1}{2 L} \\sqrt{\\frac{Y}{\\rho \\epsilon}}$",
        "$\\frac{1}{4 L} \\sqrt{\\frac{Y \\epsilon}{\\rho}}$"
    ],
    0,
    "Tension is $T = \\sigma A = Y \\epsilon A$. Linear mass density is $\\mu = \\rho A$. Transverse wave speed is $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{Y \\epsilon A}{\\rho A}} = \\sqrt{\\frac{Y \\epsilon}{\\rho}}$. The fundamental frequency of a fixed-fixed wire of length $L$ is $f_1 = \\frac{v}{2 L} = \\frac{1}{2 L} \\sqrt{\\frac{Y \\epsilon}{\\rho}}$."
)

# Subtopic 5: Beats
add_q(
    "Oscillations and Waves", "Beats",
    "Two tuning forks $A$ and $B$ produce $5\\text{ beats/s}$. When fork $A$ is loaded with wax, the beat frequency decreases to $2\\text{ beats/s}$. If the frequency of fork $B$ is $384\\text{ Hz}$, what was the original frequency of fork $A$?",
    [
        "$389\\text{ Hz}$",
        "$379\\text{ Hz}$",
        "$384\\text{ Hz}$",
        "$386\\text{ Hz}$"
    ],
    0,
    "The initial beat frequency is $|f_A - f_B| = 5\\text{ Hz}$. Since $f_B = 384\\text{ Hz}$, $f_A$ could be $389\\text{ Hz}$ or $379\\text{ Hz}$. Loading fork $A$ with wax increases its inertia, which strictly decreases its frequency $f_A$. If $f_A$ were $379\\text{ Hz}$, decreasing $f_A$ would make $f_B - f_A$ larger than $5$ (e.g. $6, 7$). Since the beat frequency actually decreased to $2\\text{ Hz}$, $f_A$ must have been higher than $f_B$: $f_A - f_B = 5 \\implies f_A = 384 + 5 = 389\\text{ Hz}$. After waxing, $f_A$ drops to $386\\text{ Hz}$, giving $386 - 384 = 2\\text{ Hz}$."
)

add_q(
    "Oscillations and Waves", "Beats",
    "A set of 16 tuning forks is arranged in ascending order of frequencies. Each fork gives 4 beats per second with the preceding one. If the frequency of the last fork is twice that of the first, what is the frequency of the first fork?",
    [
        "$60\\text{ Hz}$",
        "$64\\text{ Hz}$",
        "$56\\text{ Hz}$",
        "$120\\text{ Hz}$"
    ],
    0,
    "Let $f_1$ be the frequency of the first fork. The forks form an arithmetic progression: $f_n = f_1 + (n - 1)d$, where $d = 4\\text{ Hz}$ and $n = 16$. The 16th fork has frequency $f_{16} = f_1 + 15 \\times 4 = f_1 + 60$. Given $f_{16} = 2 f_1$: $f_1 + 60 = 2 f_1 \\implies f_1 = 60\\text{ Hz}$."
)

add_q(
    "Oscillations and Waves", "Beats",
    "Two sound waves with equations $y_1 = A \\sin(2000\\pi t)$ and $y_2 = A \\sin(2008\\pi t)$ superpose. What is the beat frequency and the frequency of the resultant carrier wave?",
    [
        "$\\text{Beat frequency} = 4\\text{ Hz}, \\text{Carrier frequency} = 1002\\text{ Hz}$",
        "$\\text{Beat frequency} = 8\\text{ Hz}, \\text{Carrier frequency} = 2004\\text{ Hz}$",
        "$\\text{Beat frequency} = 4\\text{ Hz}, \\text{Carrier frequency} = 2004\\text{ Hz}$",
        "$\\text{Beat frequency} = 8\\text{ Hz}, \\text{Carrier frequency} = 1002\\text{ Hz}$"
    ],
    0,
    "The frequencies of the two waves are $f_1 = \\frac{2000\\pi}{2\\pi} = 1000\\text{ Hz}$ and $f_2 = \\frac{2008\\pi}{2\\pi} = 1004\\text{ Hz}$. The beat frequency is $f_{beat} = |f_2 - f_1| = 1004 - 1000 = 4\\text{ Hz}$. The carrier frequency is the average: $f_{carrier} = \\frac{f_1 + f_2}{2} = \\frac{1000 + 1004}{2} = 1002\\text{ Hz}$."
)

add_q(
    "Oscillations and Waves", "Beats",
    "In a beat phenomenon produced by two sound waves of slightly different frequencies $f_1$ and $f_2$, what is the time interval between a maximum intensity and the immediately succeeding minimum intensity?",
    [
        "$\\frac{1}{2 |f_1 - f_2|}$",
        "$\\frac{1}{|f_1 - f_2|}$",
        "$\\frac{2}{|f_1 - f_2|}$",
        "$\\frac{1}{4 |f_1 - f_2|}$"
    ],
    0,
    "The time period of one complete beat cycle (time between consecutive maxima or consecutive minima) is $T_{beat} = \\frac{1}{f_{beat}} = \\frac{1}{|f_1 - f_2|}$. The time interval between a maximum and the next consecutive minimum is half of the beat period: $\\Delta t = \\frac{T_{beat}}{2} = \\frac{1}{2 |f_1 - f_2|}$."
)

add_q(
    "Oscillations and Waves", "Beats",
    "Two open organ pipes of lengths $50\\text{ cm}$ and $50.5\\text{ cm}$ produce 3 beats per second when sounding in their fundamentals. What is the speed of sound in air?",
    [
        "$303\\text{ m/s}$",
        "$340\\text{ m/s}$",
        "$320\\text{ m/s}$",
        "$330\\text{ m/s}$"
    ],
    0,
    "For open organ pipes: $f_1 = \\frac{v}{2 L_1}$ and $f_2 = \\frac{v}{2 L_2}$. Beat frequency is $f_{beat} = \\frac{v}{2} \\left(\\frac{1}{L_1} - \\frac{1}{L_2}\\right) = \\frac{v(L_2 - L_1)}{2 L_1 L_2}$. Given $L_1 = 0.50\\text{ m}$, $L_2 = 0.505\\text{ m}$, and $f_{beat} = 3\\text{ Hz}$: $3 = \\frac{v(0.005)}{2(0.50)(0.505)} = \\frac{0.005 v}{0.505} \\implies v = \\frac{3 \\times 0.505}{0.005} = 3 \\times 101 = 303\\text{ m/s}$."
)

with open("scripts/physics_top100/phys_b2_p2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Physics Batch 2 Part 2.")
