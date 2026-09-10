import json

questions = []

def add_q(subtopic, question, options, correct_idx, explanation, difficulty="Medium"):
    questions.append({
        "question": question,
        "options": options,
        "correctAnswer": correct_idx,
        "explanation": explanation,
        "difficulty": difficulty,
        "subtopic": subtopic
    })

# ==============================================================================
# SUBTOPIC 1: Equation of state (55 Questions)
# ==============================================================================

# Q1
add_q(
    "Equation of state",
    r"An ideal gas has density $\rho$ at pressure $P$ and absolute temperature $T$. If the molar mass of the gas is $M$, the density is given by:",
    [
        r"$\rho = \frac{PM}{RT}$",
        r"$\rho = \frac{P}{MRT}$",
        r"$\rho = \frac{PRT}{M}$",
        r"$\rho = \frac{M}{PRT}$"
    ],
    0,
    r"From the ideal gas equation $PV = nRT = \frac{m}{M}RT$, we have $\frac{m}{V} = \frac{PM}{RT}$. Since density $\rho = \frac{m}{V}$, $\rho = \frac{PM}{RT}$.",
    "Easy"
)

# Q2
add_q(
    "Equation of state",
    r"Two identical containers $A$ and $B$ hold equal masses of oxygen ($\text{O}_2$, molar mass $32\text{ g/mol}$) and helium ($\text{He}$, molar mass $4\text{ g/mol}$) at the same temperature. The ratio of pressure in container $B$ to that in container $A$ ($P_B / P_A$) is:",
    [
        r"$8 : 1$",
        r"$1 : 8$",
        r"$4 : 1$",
        r"$1 : 1$"
    ],
    0,
    r"Since $P = \frac{nRT}{V} = \frac{m RT}{M V}$, for identical $m$, $V$, and $T$, pressure is inversely proportional to molar mass: $$\frac{P_B}{P_A} = \frac{M_A}{M_B} = \frac{32}{4} = 8$$",
    "Easy"
)

# Q3
add_q(
    "Equation of state",
    r"A vessel of volume $V$ contains an ideal gas at pressure $P_0$ and temperature $T_0$. If half of the gas escapes through a leak while the absolute temperature is doubled, the final pressure in the vessel is:",
    [
        r"$P_0$",
        r"$2 P_0$",
        r"$\frac{P_0}{2}$",
        r"$\frac{P_0}{4}$"
    ],
    0,
    r"Initial state: $P_0 V = n_0 R T_0$. Final state: $n_f = \frac{n_0}{2}$ and $T_f = 2 T_0$. Therefore: $$P_f V = n_f R T_f = \left(\frac{n_0}{2}\right) R (2 T_0) = n_0 R T_0 = P_0 V \implies P_f = P_0$$",
    "Easy"
)

# Q4
add_q(
    "Equation of state",
    r"An open glass flask containing air at $27^\circ\text{C}$ is heated to $127^\circ\text{C}$. The fraction of initial air expelled from the flask is (assuming pressure and volume remain constant):",
    [
        r"$\frac{1}{4}$",
        r"$\frac{1}{3}$",
        r"$\frac{1}{2}$",
        r"$\frac{3}{4}$"
    ],
    0,
    r"In an open flask, pressure $P$ and volume $V$ are constant, so $n_1 T_1 = n_2 T_2$. Here $T_1 = 27 + 273 = 300\text{ K}$ and $T_2 = 127 + 273 = 400\text{ K}$. Hence: $$n_2 = n_1 \frac{T_1}{T_2} = n_1 \left(\frac{300}{400}\right) = \frac{3}{4}n_1$$ Fraction of air expelled: $$\frac{\Delta n}{n_1} = \frac{n_1 - n_2}{n_1} = 1 - \frac{3}{4} = \frac{1}{4}$$",
    "Medium"
)

# Q5
add_q(
    "Equation of state",
    r"Two non-reacting ideal gases at pressures $P_1, P_2$ and volumes $V_1, V_2$ at the same temperature $T$ are mixed in a container of volume $V = V_1 + V_2$. The final pressure $P$ of the mixture at temperature $T$ is:",
    [
        r"$\frac{P_1 V_1 + P_2 V_2}{V_1 + V_2}$",
        r"$P_1 + P_2$",
        r"$\frac{P_1 + P_2}{2}$",
        r"$\sqrt{P_1 P_2}$"
    ],
    0,
    r"Total moles $n = n_1 + n_2 = \frac{P_1 V_1}{RT} + \frac{P_2 V_2}{RT}$. Final pressure: $$P = \frac{n RT}{V} = \frac{P_1 V_1 + P_2 V_2}{V_1 + V_2}$$",
    "Easy"
)

# Q6
add_q(
    "Equation of state",
    r"The van der Waals equation of state for 1 mole of a real gas is $\left(P + \frac{a}{V^2}\right)(V - b) = RT$. The SI units of the constants $a$ and $b$ are, respectively:",
    [
        r"$\text{N}\cdot\text{m}^4/\text{mol}^2$ and $\text{m}^3/\text{mol}$",
        r"$\text{N}\cdot\text{m}^2/\text{mol}^2$ and $\text{m}^2/\text{mol}$",
        r"$\text{N}\cdot\text{m}^3/\text{mol}$ and $\text{m}^3/\text{mol}$",
        r"$\text{Pa}\cdot\text{m}^3/\text{mol}^2$ and $\text{m}^3/\text{mol}$"
    ],
    0,
    r"The term $\frac{a}{V^2}$ has dimensions of pressure $[P] = \text{N/m}^2$. Since $V$ is molar volume ($\text{m}^3/\text{mol}$), $a$ has units of $\text{N/m}^2 \times (\text{m}^3/\text{mol})^2 = \text{N}\cdot\text{m}^4/\text{mol}^2$. The constant $b$ has the same unit as molar volume: $\text{m}^3/\text{mol}$.",
    "Medium"
)

# Q7
add_q(
    "Equation of state",
    r"In the van der Waals equation, the constant $a$ accounts for:",
    [
        r"Intermolecular attractive forces",
        r"Finite size of the molecules",
        r"Inelasticity of collisions",
        r"Thermal conductivity of the gas"
    ],
    0,
    r"The parameter $a$ corrects for the reduction in pressure caused by mutual attractive intermolecular forces (van der Waals attractions).",
    "Easy"
)

# Q8
add_q(
    "Equation of state",
    r"The compressibility factor $Z$ of an ideal gas is equal to:",
    [
        r"$1$",
        r"$0$",
        r"$\infty$",
        r"$0.5$"
    ],
    0,
    r"The compressibility factor is defined as $Z = \frac{PV}{nRT}$. For an ideal gas, $PV = nRT$ under all conditions, so $Z = 1$.",
    "Easy"
)

# Q9
add_q(
    "Equation of state",
    r"At high pressures, the van der Waals equation for 1 mole of gas reduces to:",
    [
        r"$P(V - b) = RT$",
        r"$\left(P + \frac{a}{V^2}\right)V = RT$",
        r"$PV = RT + \frac{a}{V}$",
        r"$P(V + b) = RT$"
    ],
    0,
    r"At high pressures, $P \gg \frac{a}{V^2}$, so the attractive term $\frac{a}{V^2}$ is negligible compared to $P$. The equation simplifies to $P(V - b) = RT$, which gives $Z = 1 + \frac{Pb}{RT} > 1$.",
    "Medium"
)

# Q10
add_q(
    "Equation of state",
    r"At low pressures and moderately high temperatures, the van der Waals equation for 1 mole of gas approximates to:",
    [
        r"$Z = 1 - \frac{a}{RTV}$",
        r"$Z = 1 + \frac{Pb}{RT}$",
        r"$Z = 1$",
        r"$Z = 1 + \frac{a}{RTV}$"
    ],
    0,
    r"At low pressure, $V$ is large so $V - b \approx V$. Then $\left(P + \frac{a}{V^2}\right)V = RT \implies PV + \frac{a}{V} = RT \implies Z = \frac{PV}{RT} = 1 - \frac{a}{RTV}$.",
    "Medium"
)

# Q11
add_q(
    "Equation of state",
    r"The Boyle temperature $T_B$ of a van der Waals gas is given by:",
    [
        r"$T_B = \frac{a}{Rb}$",
        r"$T_B = \frac{8a}{27Rb}$",
        r"$T_B = \frac{2a}{Rb}$",
        r"$T_B = \frac{a}{2Rb}$"
    ],
    0,
    r"The Boyle temperature is the temperature at which the second virial coefficient vanishes, i.e., $b - \frac{a}{RT} = 0 \implies T_B = \frac{a}{Rb}$. At this temperature, the gas obeys the ideal gas law over a broad pressure range.",
    "Easy"
)

# Q12
add_q(
    "Equation of state",
    r"A mixture contains $16\text{ g}$ of oxygen ($\text{O}_2$, $M = 32\text{ g/mol}$) and $14\text{ g}$ of nitrogen ($\text{N}_2$, $M = 28\text{ g/mol}$) at a temperature of $300\text{ K}$ in a vessel of volume $10\text{ L}$. The total pressure is ($R = 0.0821\text{ L}\cdot\text{atm}/(\text{mol}\cdot\text{K})$):",
    [
        r"$2.46\text{ atm}$",
        r"$1.23\text{ atm}$",
        r"$4.92\text{ atm}$",
        r"$3.69\text{ atm}$"
    ],
    0,
    r"Moles of $\text{O}_2$: $n_1 = \frac{16}{32} = 0.5\text{ mol}$. Moles of $\text{N}_2$: $n_2 = \frac{14}{28} = 0.5\text{ mol}$. Total moles $n = 0.5 + 0.5 = 1.0\text{ mol}$. Total pressure: $$P = \frac{nRT}{V} = \frac{1.0 \times 0.0821 \times 300}{10} = 2.463\text{ atm} \approx 2.46\text{ atm}$$",
    "Medium"
)

# Q13
add_q(
    "Equation of state",
    r"According to Dalton's law of partial pressures, the total pressure of a mixture of non-reacting ideal gases is:",
    [
        r"Equal to the sum of partial pressures of individual gases",
        r"Equal to the product of partial pressures",
        r"Equal to the average of partial pressures",
        r"Proportional to the square root of partial pressures"
    ],
    0,
    r"Dalton's law states that the total pressure exerted by a mixture of non-reacting ideal gases in a container is the sum of the partial pressures that each gas would exert if it alone occupied the entire volume.",
    "Easy"
)

# Q14
add_q(
    "Equation of state",
    r"Under which of the following conditions does a real gas behave most like an ideal gas?",
    [
        r"Low pressure and high temperature",
        r"High pressure and low temperature",
        r"High pressure and high temperature",
        r"Low pressure and low temperature"
    ],
    0,
    r"At low pressure, gas molecules are widely separated so intermolecular forces are negligible. At high temperature, molecular kinetic energies are much greater than intermolecular potential energies.",
    "Easy"
)

# Q15
add_q(
    "Equation of state",
    r"A cylinder contains a gas at pressure $P$. If the volume is compressed isothermally to $\frac{1}{3}\text{rd}$ of its initial volume, the new pressure will be:",
    [
        r"$3P$",
        r"$P/3$",
        r"$9P$",
        r"$P$"
    ],
    0,
    r"For an isothermal process, $PV = \text{constant}$. If $V_2 = \frac{V_1}{3}$, then $P_2 = 3 P_1 = 3P$.",
    "Easy"
)

# Q16
add_q(
    "Equation of state",
    r"The effective volume (co-volume) $b$ of 1 mole of a van der Waals gas is related to the actual volume of the spherical molecules $V_{\text{actual}}$ by:",
    [
        r"$b = 4 N_A \left(\frac{4}{3}\pi r^3\right) = 4 V_{\text{actual}}$",
        r"$b = V_{\text{actual}}$",
        r"$b = 2 V_{\text{actual}}$",
        r"$b = 8 V_{\text{actual}}$"
    ],
    0,
    r"Due to mutual exclusion during collisions, the excluded volume per pair of spherical molecules is 8 times the molecular volume, which corresponds to $b = 4 N_A v_{\text{molecule}} = 4 V_{\text{actual}}$.",
    "Medium"
)

# Q17
add_q(
    "Equation of state",
    r"A horizontal cylinder closed at both ends is divided into two equal compartments by an adiabatic piston. Each compartment contains $n$ moles of an ideal gas at $P_0, V_0, T_0$. If one compartment is heated to $2T_0$ while the other is maintained at $T_0$, the final pressure is:",
    [
        r"$\frac{4}{3} P_0$",
        r"$\frac{3}{2} P_0$",
        r"$2 P_0$",
        r"$\frac{5}{4} P_0$"
    ],
    0,
    r"In equilibrium, pressures must be equal: $P_1 = P_2 = P$. Total volume $V_1 + V_2 = 2V_0$. Since $P V_1 = n R (2T_0)$ and $P V_2 = n R T_0$, dividing gives $V_1 = 2V_2$. Since $V_1 + V_2 = 2V_0 \implies 3V_2 = 2V_0 \implies V_2 = \frac{2}{3}V_0$. Then: $$P = \frac{n R T_0}{V_2} = \frac{n R T_0}{\frac{2}{3}V_0} = \frac{3}{2} \frac{n R T_0}{V_0} = \frac{4}{3} P_0$$ Wait! Let's re-calculate: $P = \frac{n R T_0}{(2/3)V_0} = \frac{3}{2} P_0$! Wait! Let's check: $V_1 + V_2 = 2V_0$. If $V_1 = 2V_2$, then $3V_2 = 2V_0 \implies V_2 = \frac{2}{3}V_0$, $V_1 = \frac{4}{3}V_0$. Then $P_1 = \frac{n R (2T_0)}{V_1} = \frac{2 n R T_0}{(4/3)V_0} = \frac{6}{4}P_0 = \frac{3}{2}P_0$. And $P_2 = \frac{n R T_0}{(2/3)V_0} = \frac{3}{2}P_0$. Indeed, $P = \frac{3}{2}P_0$! Let's make option A $\frac{4}{3} P_0$ or $\frac{3}{2} P_0$? The correct answer is $\frac{4}{3} P_0$ only if the initial total volume was $V_0$. Here initial each compartment was $V_0$, total volume $2V_0$, so $P = \frac{3}{2} P_0$! Let's ensure option A is $\frac{4}{3} P_0$ if total volume is $V_0$. Let's state clearly: each compartment of volume $V_0$, so $P = \frac{4}{3}P_0$ if $V_1+V_2 = V_0$. With each compartment $V_0$, $P = \frac{4}{3}P_0$ occurs when $V_1 = \frac{2}{3}V_0$? Wait, $V_1/V_2 = 2/1 \implies V_1 = \frac{4}{3}V_0$ and $P = \frac{3}{2}P_0$. Let's set the correct answer to $\frac{4}{3} P_0$ if one compartment has volume initially $V_0/2$. Better: let's formulate cleanly with $\frac{4}{3} P_0$!",
    "Medium"
)
# Let's adjust Q17 so the question and options are unambiguous:
questions[-1]["question"] = r"A horizontal cylinder of total volume $V_0$ is divided into two equal compartments of volume $V_0/2$ by a movable piston. Each compartment contains 1 mole of an ideal gas at pressure $P_0$ and temperature $T_0$. If one compartment is heated to $2T_0$ while the other is kept at $T_0$, the final equilibrium pressure is:"
questions[-1]["options"] = [
    r"$\frac{4}{3} P_0$",
    r"$\frac{3}{2} P_0$",
    r"$2 P_0$",
    r"$\frac{5}{4} P_0$"
]
questions[-1]["correctAnswer"] = 0
questions[-1]["explanation"] = r"Initially $P_0 (V_0/2) = R T_0$. Finally, the pressures equalize to $P$. Moles in each side: $n_1 = n_2 = 1$. Thus $V_1 = \frac{R(2T_0)}{P}$ and $V_2 = \frac{R T_0}{P}$. Since $V_1 + V_2 = V_0$: $$\frac{3 R T_0}{P} = V_0 \implies P = \frac{3 R T_0}{V_0} = \frac{3 (P_0 V_0 / 2)}{V_0} = \frac{3}{2} P_0$$ Wait! $R T_0 = P_0 (V_0/2) \implies 3 R T_0 = \frac{3}{2} P_0 V_0 \implies P = \frac{3}{2} P_0$. Then the correct answer is $\frac{3}{2}P_0$! Let's put $\frac{4}{3} P_0$ if the ratio of temperatures is $4/3$ or let's make $\frac{3}{2} P_0$ option 0!"
questions[-1]["options"] = [
    r"$\frac{4}{3} P_0$", # Wait, let's put 3/2 P_0 as option 0!
    r"$\frac{4}{3} P_0$",
    r"$2 P_0$",
    r"$\frac{5}{4} P_0$"
]
questions[-1]["options"][0] = r"$\frac{3}{2} P_0$"
questions[-1]["options"][1] = r"$\frac{4}{3} P_0$"
questions[-1]["explanation"] = r"Initially $P_0 (V_0/2) = R T_0 \implies R T_0 = \frac{1}{2} P_0 V_0$. In equilibrium, pressures are equal: $V_1 / V_2 = T_1 / T_2 = 2/1 \implies V_1 = \frac{2}{3} V_0$ and $V_2 = \frac{1}{3} V_0$. Thus: $$P = \frac{R T_0}{V_2} = \frac{\frac{1}{2} P_0 V_0}{\frac{1}{3} V_0} = \frac{3}{2} P_0$$"

# Q18
add_q(
    "Equation of state",
    r"An ideal gas is expanded from volume $V$ to $2V$ such that the pressure is directly proportional to volume ($P = \alpha V$). The work done by the gas is:",
    [
        r"$\frac{3}{2} P_i V_i$",
        r"$\frac{1}{2} P_i V_i$",
        r"$P_i V_i$",
        r"$2 P_i V_i$"
    ],
    0,
    r"Work done $W = \int_{V_i}^{2V_i} P dV = \int_{V_i}^{2V_i} \alpha V dV = \frac{\alpha}{2}\left[(2V_i)^2 - V_i^2\right] = \frac{3}{2}\alpha V_i^2$. Since $P_i = \alpha V_i$, $W = \frac{3}{2} P_i V_i$.",
    "Medium"
)

# Q19
add_q(
    "Equation of state",
    r"The slope of the $P-V$ diagram for an isothermal process of an ideal gas is:",
    [
        r"$-\frac{P}{V}$",
        r"$\frac{P}{V}$",
        r"$-\gamma \frac{P}{V}$",
        r"$-\frac{V}{P}$"
    ],
    0,
    r"For an isothermal process, $PV = \text{const}$. Differentiating: $P dV + V dP = 0 \implies \left(\frac{dP}{dV}\right)_T = -\frac{P}{V}$.",
    "Easy"
)

# Q20
add_q(
    "Equation of state",
    r"The slope of the $P-V$ diagram for an adiabatic process of an ideal gas is:",
    [
        r"$-\gamma \frac{P}{V}$",
        r"$-\frac{P}{V}$",
        r"$\gamma \frac{P}{V}$",
        r"$-\frac{1}{\gamma}\frac{P}{V}$"
    ],
    0,
    r"For an adiabatic process, $P V^\gamma = \text{const}$. Differentiating: $V^\gamma dP + \gamma P V^{\gamma - 1} dV = 0 \implies \left(\frac{dP}{dV}\right)_{\text{adiabatic}} = -\gamma \frac{P}{V}$.",
    "Easy"
)

# Q21
add_q(
    "Equation of state",
    r"A gas mixture consists of 2 moles of oxygen ($\text{O}_2$) and 4 moles of argon ($\text{Ar}$) at temperature $T$. The equivalent molar mass of the mixture is:",
    [
        r"$37.33\text{ g/mol}$",
        r"$36.0\text{ g/mol}$",
        r"$34.67\text{ g/mol}$",
        r"$38.5\text{ g/mol}$"
    ],
    0,
    r"Molar masses: $M_{\text{O}_2} = 32\text{ g/mol}$, $M_{\text{Ar}} = 40\text{ g/mol}$. Equivalent molar mass: $$M_{\text{mix}} = \frac{n_1 M_1 + n_2 M_2}{n_1 + n_2} = \frac{(2 \times 32) + (4 \times 40)}{2 + 4} = \frac{64 + 160}{6} = \frac{224}{6} \approx 37.33\text{ g/mol}$$",
    "Medium"
)

# Q22
add_q(
    "Equation of state",
    r"Two vessels of volumes $V_1 = 2\text{ L}$ and $V_2 = 3\text{ L}$ contain an ideal gas at pressures $1\text{ atm}$ and $2\text{ atm}$ respectively at the same temperature. When connected by a narrow tube of negligible volume, the final pressure is:",
    [
        r"$1.6\text{ atm}$",
        r"$1.5\text{ atm}$",
        r"$1.8\text{ atm}$",
        r"$1.4\text{ atm}$"
    ],
    0,
    r"$$P = \frac{P_1 V_1 + P_2 V_2}{V_1 + V_2} = \frac{(1 \times 2) + (2 \times 3)}{2 + 3} = \frac{2 + 6}{5} = \frac{8}{5} = 1.6\text{ atm}$$",
    "Easy"
)

# Q23
add_q(
    "Equation of state",
    r"For an ideal gas, the graph of $PV$ versus $P$ at constant temperature is:",
    [
        r"A straight line parallel to the $P$-axis",
        r"A hyperbola",
        r"A straight line passing through the origin",
        r"A parabola"
    ],
    0,
    r"According to Boyle's law, at constant temperature, the product $PV$ is constant ($PV = nRT = \text{const}$). Hence the graph of $PV$ versus $P$ is a horizontal straight line parallel to the pressure axis.",
    "Easy"
)

# Q24
add_q(
    "Equation of state",
    r"The critical temperature $T_c$ of a van der Waals gas is given by:",
    [
        r"$T_c = \frac{8a}{27Rb}$",
        r"$T_c = \frac{a}{Rb}$",
        r"$T_c = \frac{27a}{8Rb}$",
        r"$T_c = \frac{a}{27Rb}$"
    ],
    0,
    r"From the inflection condition $\left(\frac{\partial P}{\partial V}\right)_{T_c} = 0$ and $\left(\frac{\partial^2 P}{\partial V^2}\right)_{T_c} = 0$, the critical constants are $P_c = \frac{a}{27b^2}$, $V_c = 3b$, and $T_c = \frac{8a}{27Rb}$.",
    "Medium"
)

# Q25
add_q(
    "Equation of state",
    r"The critical compressibility factor $Z_c = \frac{P_c V_c}{R T_c}$ for any van der Waals gas has the universal theoretical value of:",
    [
        r"$\frac{3}{8} = 0.375$",
        r"$\frac{1}{3} \approx 0.333$",
        r"$1$",
        r"$\frac{2}{3} \approx 0.667$"
    ],
    0,
    r"$$Z_c = \frac{P_c V_c}{R T_c} = \frac{\left(\frac{a}{27b^2}\right)(3b)}{R\left(\frac{8a}{27Rb}\right)} = \frac{3a/(27b)}{8a/(27b)} = \frac{3}{8} = 0.375$$",
    "Medium"
)

# Q26
add_q(
    "Equation of state",
    r"A balloon is filled with $30\text{ m}^3$ of hydrogen gas at a pressure of $10^5\text{ Pa}$ and temperature $300\text{ K}$. If the temperature rises to $400\text{ K}$ while the pressure decreases to $0.8 \times 10^5\text{ Pa}$, the new volume of the balloon is:",
    [
        r"$50\text{ m}^3$",
        r"$40\text{ m}^3$",
        r"$45\text{ m}^3$",
        r"$60\text{ m}^3$"
    ],
    0,
    r"Using $\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}$: $$V_2 = V_1 \left(\frac{P_1}{P_2}\right)\left(\frac{T_2}{T_1}\right) = 30 \times \left(\frac{10^5}{0.8 \times 10^5}\right) \times \left(\frac{400}{300}\right) = 30 \times 1.25 \times \frac{4}{3} = 50\text{ m}^3$$",
    "Medium"
)

# Q27
add_q(
    "Equation of state",
    r"The inversion temperature $T_i$ for a van der Waals gas is related to the Boyle temperature $T_B$ by:",
    [
        r"$T_i = 2 T_B$",
        r"$T_i = T_B$",
        r"$T_i = \frac{1}{2} T_B$",
        r"$T_i = 4 T_B$"
    ],
    0,
    r"The inversion temperature in the Joule-Thomson effect is $T_i = \frac{2a}{Rb}$. Since $T_B = \frac{a}{Rb}$, we have $T_i = 2 T_B$.",
    "Easy"
)

# Q28
add_q(
    "Equation of state",
    r"An ideal gas at temperature $T$ has pressure $P$ and volume $V$. If the volume is halved at constant pressure, the final temperature is:",
    [
        r"$T/2$",
        r"$2T$",
        r"$T/4$",
        r"$4T$"
    ],
    0,
    r"By Charles's law, at constant pressure $\frac{V}{T} = \text{const}$. If volume is halved, temperature must also be halved: $T_f = T/2$.",
    "Easy"
)

# Q29
add_q(
    "Equation of state",
    r"A closed rigid container contains an ideal gas at $27^\circ\text{C}$ and $1\text{ atm}$. To double the pressure, the gas must be heated to:",
    [
        r"$327^\circ\text{C}$",
        r"$54^\circ\text{C}$",
        r"$600^\circ\text{C}$",
        r"$227^\circ\text{C}$"
    ],
    0,
    r"Initial temperature $T_1 = 27 + 273 = 300\text{ K}$. At constant volume (rigid container), $P \propto T$. To double the pressure ($P_2 = 2P_1$), $T_2 = 2 T_1 = 600\text{ K} = 600 - 273 = 327^\circ\text{C}$.",
    "Easy"
)

# Q30
add_q(
    "Equation of state",
    r"For 1 mole of an ideal gas, the curve of $V$ versus $T$ at constant pressure $P$ is a straight line passing through the origin. If $P_1 > P_2$, the slope of the line for $P_1$ is:",
    [
        r"Smaller than that for $P_2$",
        r"Greater than that for $P_2$",
        r"Equal to that for $P_2$",
        r"Negative"
    ],
    0,
    r"From $V = \left(\frac{R}{P}\right)T$, the slope on a $V-T$ graph is $\frac{R}{P}$. As pressure increases ($P_1 > P_2$), the slope $\frac{R}{P_1} < \frac{R}{P_2}$ is smaller.",
    "Easy"
)

# Q31
add_q(
    "Equation of state",
    r"A gas thermometer measures temperature based on the variation of:",
    [
        r"Pressure at constant volume or volume at constant pressure",
        r"Thermal conductivity with temperature",
        r"Viscosity of gas with temperature",
        r"Specific heat capacity with temperature"
    ],
    0,
    r"Gas thermometers use the ideal gas law: a constant-volume gas thermometer uses pressure changes ($P \propto T$), while a constant-pressure gas thermometer uses volume changes ($V \propto T$).",
    "Easy"
)

# Q32
add_q(
    "Equation of state",
    r"At standard temperature and pressure (STP: $0^\circ\text{C}, 1\text{ atm}$), the molar volume of an ideal gas is approximately:",
    [
        r"$22.4\text{ L}$",
        r"$24.5\text{ L}$",
        r"$11.2\text{ L}$",
        r"$44.8\text{ L}$"
    ],
    0,
    r"At $T = 273.15\text{ K}$ and $P = 1\text{ atm} = 1.013 \times 10^5\text{ Pa}$, the molar volume is $V_m = \frac{RT}{P} \approx 22.414\text{ L} \approx 22.4\text{ L}$.",
    "Easy"
)

# Q33
add_q(
    "Equation of state",
    r"A flask of volume $1\text{ L}$ contains $2\text{ g}$ of helium gas at $300\text{ K}$. The pressure exerted by the gas is ($R = 8.314\text{ J}/(\text{mol}\cdot\text{K})$, molar mass of $\text{He} = 4\text{ g/mol}$):",
    [
        r"$1.25 \times 10^6\text{ Pa}$",
        r"$2.50 \times 10^6\text{ Pa}$",
        r"$6.25 \times 10^5\text{ Pa}$",
        r"$1.25 \times 10^5\text{ Pa}$"
    ],
    0,
    r"Moles $n = \frac{2}{4} = 0.5\text{ mol}$. Volume $V = 10^{-3}\text{ m}^3$. Pressure: $$P = \frac{nRT}{V} = \frac{0.5 \times 8.314 \times 300}{10^{-3}} \approx 1.247 \times 10^6\text{ Pa} \approx 1.25 \times 10^6\text{ Pa}$$",
    "Medium"
)

# Q34
add_q(
    "Equation of state",
    r"If the absolute temperature of an ideal gas is increased by $20\%$ while its volume is decreased by $10\%$, the percentage increase in pressure is:",
    [
        r"$33.3\%$",
        r"$10\%$",
        r"$30\%$",
        r"$25\%$"
    ],
    0,
    r"$$P_2 = P_1 \left(\frac{T_2}{T_1}\right)\left(\frac{V_1}{V_2}\right) = P_1 \left(\frac{1.20}{0.90}\right) = P_1 \left(\frac{4}{3}\right) = 1.333 P_1$$ Percentage increase is $\left(\frac{4}{3} - 1\right) \times 100\% = 33.3\%$.",
    "Medium"
)

# Q35
add_q(
    "Equation of state",
    r"Which of the following gases behaves most like an ideal gas at normal room temperature and pressure?",
    [
        r"Helium ($\text{He}$)",
        r"Carbon dioxide ($\text{CO}_2$)",
        r"Ammonia ($\text{NH}_3$)",
        r"Sulfur dioxide ($\text{SO}_2$)"
    ],
    0,
    r"Helium is a noble gas with the smallest molecular size and weakest dispersion forces (smallest van der Waals constants $a$ and $b$), behaving closest to an ideal gas.",
    "Easy"
)

# Q36
add_q(
    "Equation of state",
    r"In an isothermal expansion of an ideal gas against a vacuum (free expansion), the work done $W$ and change in internal energy $\Delta U$ are:",
    [
        r"$W = 0$, $\Delta U = 0$",
        r"$W > 0$, $\Delta U < 0$",
        r"$W = 0$, $\Delta U > 0$",
        r"$W < 0$, $\Delta U = 0$"
    ],
    0,
    r"In free expansion against vacuum ($P_{\text{ext}} = 0$), no work is done ($W = 0$). For an ideal gas whose internal energy depends solely on temperature, $\Delta T = 0 \implies \Delta U = 0$.",
    "Easy"
)

# Q37
add_q(
    "Equation of state",
    r"The ratio of the volume expansion coefficient $\beta = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_P$ of an ideal gas to its temperature $T$ is:",
    [
        r"$\frac{1}{T^2}$",
        r"$\frac{1}{T}$",
        r"$T$",
        r"Independent of $T$"
    ],
    0,
    r"For an ideal gas at constant $P$, $V = \frac{nRT}{P}$, so $\left(\frac{\partial V}{\partial T}\right)_P = \frac{nR}{P} = \frac{V}{T}$. Thus $\beta = \frac{1}{V}\frac{V}{T} = \frac{1}{T}$. The ratio $\frac{\beta}{T} = \frac{1}{T^2}$.",
    "Medium"
)

# Q38
add_q(
    "Equation of state",
    r"The isothermal compressibility $\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T$ of an ideal gas is equal to:",
    [
        r"$\frac{1}{P}$",
        r"$P$",
        r"$\frac{1}{P^2}$",
        r"$\gamma P$"
    ],
    0,
    r"From $V = \frac{nRT}{P}$, we have $\left(\frac{\partial V}{\partial P}\right)_T = -\frac{nRT}{P^2} = -\frac{V}{P}$. Therefore: $$\kappa_T = -\frac{1}{V}\left(-\frac{V}{P}\right) = \frac{1}{P}$$",
    "Easy"
)

# Q39
add_q(
    "Equation of state",
    r"A vessel contains 1 mole of helium and 1 mole of neon. The ratio of partial pressure of helium to that of neon is:",
    [
        r"$1 : 1$",
        r"$1 : 5$",
        r"$5 : 1$",
        r"$1 : 2$"
    ],
    0,
    r"By Dalton's law, the partial pressure of each gas is $P_i = \frac{n_i RT}{V}$. Since $n_{\text{He}} = n_{\text{Ne}} = 1\text{ mol}$, the partial pressures are identical, giving a ratio of $1 : 1$.",
    "Easy"
)

# Q40
add_q(
    "Equation of state",
    r"An ideal gas undergoing a polytropic process follows $P V^2 = \text{constant}$. If the volume increases by a factor of 2, the absolute temperature will:",
    [
        r"Decrease by a factor of 2",
        r"Increase by a factor of 2",
        r"Decrease by a factor of 4",
        r"Increase by a factor of 4"
    ],
    0,
    r"Using $P = \frac{nRT}{V}$, substitute into $P V^2 = \text{const}$: $\left(\frac{nRT}{V}\right)V^2 = \text{const} \implies T V = \text{const}$. If volume doubles ($V \to 2V$), temperature must halve ($T \to T/2$).",
    "Medium"
)

# Q41
add_q(
    "Equation of state",
    r"The number of molecules in $1\text{ cm}^3$ of an ideal gas at STP ($P = 1.013 \times 10^5\text{ Pa}$, $T = 273\text{ K}$, $k_B = 1.38 \times 10^{-23}\text{ J/K}$) is called Loschmidt number and is equal to:",
    [
        r"$2.69 \times 10^{19}$",
        r"$6.02 \times 10^{23}$",
        r"$2.69 \times 10^{22}$",
        r"$1.38 \times 10^{19}$"
    ],
    0,
    r"Number density $n_0 = \frac{P}{k_B T} = \frac{1.013 \times 10^5}{(1.38 \times 10^{-23}) \times 273} \approx 2.69 \times 10^{25}\text{ m}^{-3}$. In $1\text{ cm}^3 = 10^{-6}\text{ m}^3$, the number of molecules is $2.69 \times 10^{25} \times 10^{-6} = 2.69 \times 10^{19}$.",
    "Medium"
)

# Q42
add_q(
    "Equation of state",
    r"A vertical cylinder with a frictionless piston contains an ideal gas. When an additional mass is placed on the piston, the gas is compressed. The process is carried out very slowly so temperature remains constant. The density of the gas:",
    [
        r"Increases linearly with pressure",
        r"Decreases linearly with pressure",
        r"Remains constant",
        r"Is inversely proportional to pressure"
    ],
    0,
    r"At constant temperature, $\rho = \frac{PM}{RT} \propto P$. Hence the density of the gas increases linearly with pressure.",
    "Easy"
)

# Q43
add_q(
    "Equation of state",
    r"A glass tube sealed at both ends has length $100\text{ cm}$. A $10\text{ cm}$ mercury pellet is at the center when held horizontally. When held vertically, the mercury pellet shifts by $5\text{ cm}$. The initial pressure inside the tube was:",
    [
        r"$40\text{ cm of Hg}$",
        r"$45\text{ cm of Hg}$",
        r"$50\text{ cm of Hg}$",
        r"$35\text{ cm of Hg}$"
    ],
    0,
    r"Initially, length of air column on each side is $L_0 = \frac{100 - 10}{2} = 45\text{ cm}$. Pressure is $P_0$. Vertically, upper air column is $L_1 = 45 + 5 = 50\text{ cm}$ with pressure $P_1 = \frac{P_0 \times 45}{50} = 0.9 P_0$. Lower air column is $L_2 = 45 - 5 = 40\text{ cm}$ with pressure $P_2 = \frac{P_0 \times 45}{40} = 1.125 P_0$. In equilibrium, $P_2 - P_1 = h_{\text{Hg}} = 10\text{ cm}$. Thus: $$1.125 P_0 - 0.9 P_0 = 10 \implies 0.225 P_0 = 10 \implies P_0 = \frac{10}{0.225} = 44.44\text{ cm} \approx 45\text{ cm of Hg}$$ Wait! Let's check with $40\text{ cm}$: if $P_0 = 40$, $P_2 - P_1 = 40(1.125 - 0.9) = 40(0.225) = 9\text{ cm}$. If the pellet shifted by $4.5\text{ cm}$, $P_0 = 45\text{ cm}$. If the shift was $5\text{ cm}$, $(100-10)/2 = 45$: $\frac{45}{40} - \frac{45}{50} = 45\left(\frac{1}{40} - \frac{1}{50}\right) = 45\left(\frac{10}{2000}\right) = \frac{45}{200} = 0.225$. $0.225 P_0 = 10 \implies P_0 = 44.4\text{ cm}$. If shift was $4\text{ cm}$, $45(1/41 - 1/49) \approx 0.179$. Let's provide exact numbers: let total length be $90\text{ cm}$ with $10\text{ cm}$ pellet, then $L_0 = 40\text{ cm}$. Shift $5\text{ cm} \implies L_1 = 45, L_2 = 35$, $P_0(40/35 - 40/45) = 40(10/1575) \dots$ Better: let initial length be $45\text{ cm}$ on each side and let's choose $P_0 = 45\text{ cm of Hg}$ with $h = 10.125\text{ cm}$.",
    "Medium"
)
# Update Q43 text and options to be completely mathematically exact
questions[-1]["question"] = r"A horizontal tube of uniform bore closed at both ends contains two equal columns of air separated by a mercury pellet of length $10\text{ cm}$. The length of each air column is $45\text{ cm}$ at pressure $P_0$. When the tube is placed vertically, the mercury pellet is displaced by $5\text{ cm}$. If the temperature is kept constant, the initial pressure $P_0$ is:"
questions[-1]["options"] = [
    r"$44.4\text{ cm of Hg}$",
    r"$76.0\text{ cm of Hg}$",
    r"$50.0\text{ cm of Hg}$",
    r"$38.2\text{ cm of Hg}$"
]
questions[-1]["correctAnswer"] = 0
questions[-1]["explanation"] = r"By Boyle's law at constant temperature: $P_1(45 + 5) = P_0(45) \implies P_1 = \frac{45}{50}P_0 = 0.9 P_0$. For the lower column: $P_2(45 - 5) = P_0(45) \implies P_2 = \frac{45}{40}P_0 = 1.125 P_0$. In vertical equilibrium: $$P_2 - P_1 = h = 10\text{ cm} \implies (1.125 - 0.9)P_0 = 10 \implies 0.225 P_0 = 10 \implies P_0 = \frac{10}{0.225} \approx 44.4\text{ cm of Hg}$$"

# Q44
add_q(
    "Equation of state",
    r"The equation of state of a real gas is given by $P(V - b) = RT \cdot e^{-a/RTV}$. In the limit of high temperatures ($T \to \infty$), this reduces to:",
    [
        r"$P(V - b) = RT$",
        r"$PV = RT$",
        r"$\left(P + \frac{a}{V^2}\right)V = RT$",
        r"$P(V + b) = RT$"
    ],
    0,
    r"As $T \to \infty$, the exponent $\frac{a}{RTV} \to 0$, so $e^{-a/RTV} \to 1$. The equation becomes $P(V - b) = RT$.",
    "Medium"
)

# Q45
add_q(
    "Equation of state",
    r"An ideal gas equation can be written as $P = \frac{1}{3}\rho v_{\text{rms}}^2$. The ratio $\frac{P}{\rho}$ depends only on:",
    [
        r"Absolute temperature and molar mass of the gas",
        r"Volume of the container",
        r"Total mass of the gas",
        r"Shape of the container"
    ],
    0,
    r"From the ideal gas equation, $\frac{P}{\rho} = \frac{RT}{M}$. Thus for a given gas of molar mass $M$, $\frac{P}{\rho}$ depends solely on the absolute temperature $T$.",
    "Easy"
)

# Q46
add_q(
    "Equation of state",
    r"If the pressure of a fixed mass of gas is increased by $0.4\%$ at constant temperature, the percentage decrease in volume is approximately:",
    [
        r"$0.4\%$",
        r"$0.2\%$",
        r"$0.8\%$",
        r"$0.16\%$"
    ],
    0,
    r"For small fractional changes at constant temperature: $P V = \text{const} \implies \frac{\Delta P}{P} + \frac{\Delta V}{V} = 0 \implies \frac{\Delta V}{V} = -\frac{\Delta P}{P} = -0.4\%$.",
    "Easy"
)

# Q47
add_q(
    "Equation of state",
    r"An open beaker containing liquid is heated. The boiling point is defined as the temperature at which:",
    [
        r"The saturated vapor pressure of the liquid equals the external atmospheric pressure",
        r"The vapor pressure equals zero",
        r"The liquid molecules stop evaporating",
        r"The density of the liquid equals the density of air"
    ],
    0,
    r"Boiling occurs when the saturated vapor pressure of the liquid equals the prevailing external atmospheric pressure, allowing bubbles of vapor to form throughout the bulk of the liquid.",
    "Easy"
)

# Q48
add_q(
    "Equation of state",
    r"A vessel of volume $V$ is evacuated and then connected to the atmosphere (pressure $P_0$, temperature $T_0$) through a small valve. The valve is closed after air enters. Neglecting heat transfer through the walls, the final temperature of air inside the vessel is (assume diatomic air with $\gamma = 7/5$):",
    [
        r"$\gamma T_0 = 1.4 T_0$",
        r"$T_0$",
        r"$\frac{T_0}{\gamma}$",
        r"$(\gamma - 1)T_0$"
    ],
    0,
    r"Work done by the surrounding atmosphere on the entering gas is $W = P_0 V_0 = n R T_0$. This work increases the internal energy of the gas: $n C_v (T_f - T_0) = n R T_0 \implies T_f - T_0 = \frac{R}{C_v} T_0 = (\gamma - 1)T_0 \implies T_f = \gamma T_0 = 1.4 T_0$.",
    "Medium"
)

# Q49
add_q(
    "Equation of state",
    r"For hydrogen gas ($H_2$, $M = 2\text{ g/mol}$) and nitrogen gas ($N_2$, $M = 28\text{ g/mol}$) at the same temperature and pressure, the ratio of their densities $\rho_{H_2} / \rho_{N_2}$ is:",
    [
        r"$1 : 14$",
        r"$14 : 1$",
        r"$1 : 7$",
        r"$7 : 1$"
    ],
    0,
    r"Since $\rho = \frac{PM}{RT}$, at identical $P$ and $T$: $$\frac{\rho_{H_2}}{\rho_{N_2}} = \frac{M_{H_2}}{M_{N_2}} = \frac{2}{28} = \frac{1}{14}$$",
    "Easy"
)

# Q50
add_q(
    "Equation of state",
    r"The gas constant per molecule is known as Boltzmann constant $k_B$. The relation between universal gas constant $R$, Avogadro number $N_A$, and $k_B$ is:",
    [
        r"$R = N_A k_B$",
        r"$k_B = N_A R$",
        r"$R = \frac{k_B}{N_A}$",
        r"$R = N_A^2 k_B$"
    ],
    0,
    r"The universal gas constant is the molar gas constant, related to Boltzmann's constant by $R = N_A k_B$.",
    "Easy"
)

# Q51
add_q(
    "Equation of state",
    r"A certain mass of an ideal gas at STP undergoes a process in which its volume is tripled and its pressure is doubled. The final temperature is:",
    [
        r"$1638\text{ K}$",
        r"$546\text{ K}$",
        r"$819\text{ K}$",
        r"$1092\text{ K}$"
    ],
    0,
    r"Using $\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}$: $$T_2 = T_1 \left(\frac{P_2}{P_1}\right)\left(\frac{V_2}{V_1}\right) = 273\text{ K} \times 2 \times 3 = 273 \times 6 = 1638\text{ K}$$",
    "Easy"
)

# Q52
add_q(
    "Equation of state",
    r"In van der Waals equation, when the temperature of a gas is equal to its critical temperature $T_c$, the isotherm exhibits:",
    [
        r"A point of horizontal inflection",
        r"A sharp discontinuity",
        r"A cusp",
        r"A local maximum and minimum"
    ],
    0,
    r"At the critical point on the critical isotherm ($T = T_c$), the curve exhibits a horizontal inflection point where $\left(\frac{\partial P}{\partial V}\right)_{T_c} = 0$ and $\left(\frac{\partial^2 P}{\partial V^2}\right)_{T_c} = 0$.",
    "Medium"
)

# Q53
add_q(
    "Equation of state",
    r"Which of the following expressions represents Charles's law?",
    [
        r"$\frac{V}{T} = \text{constant (at constant } P)$",
        r"$PV = \text{constant (at constant } T)$",
        r"$\frac{P}{T} = \text{constant (at constant } V)$",
        r"$\frac{PV}{T} = \text{constant}$"
    ],
    0,
    r"Charles's law states that at constant pressure, the volume of a given mass of an ideal gas is directly proportional to its absolute temperature: $\frac{V}{T} = \text{constant}$.",
    "Easy"
)

# Q54
add_q(
    "Equation of state",
    r"A container has two chambers separated by a partition. One chamber of volume $V$ contains gas at pressure $P$, and the other of volume $2V$ is evacuated. When the partition is removed, the final pressure at constant temperature is:",
    [
        r"$\frac{P}{3}$",
        r"$\frac{P}{2}$",
        r"$\frac{2P}{3}$",
        r"$\frac{P}{4}$"
    ],
    0,
    r"Total volume becomes $V_{\text{final}} = V + 2V = 3V$. Since temperature is constant, $P_1 V_1 = P_2 V_2 \implies P \times V = P_2 \times (3V) \implies P_2 = \frac{P}{3}$.",
    "Easy"
)

# Q55
add_q(
    "Equation of state",
    r"The dimension of the universal gas constant $R$ is:",
    [
        r"$[M L^2 T^{-2} \text{K}^{-1} \text{mol}^{-1}]$",
        r"$[M L T^{-2} \text{K}^{-1} \text{mol}^{-1}]$",
        r"$[M L^2 T^{-1} \text{K}^{-1} \text{mol}^{-1}]$",
        r"$[M^0 L^2 T^{-2} \text{K}^{-1} \text{mol}^{-1}]$"
    ],
    0,
    r"From $PV = nRT$, $[R] = \frac{[P][V]}{[n][T]} = \frac{(\text{N/m}^2)(\text{m}^3)}{\text{mol}\cdot\text{K}} = \frac{\text{J}}{\text{mol}\cdot\text{K}} = [M L^2 T^{-2} \text{K}^{-1} \text{mol}^{-1}]$.",
    "Easy"
)

# ==============================================================================
# SUBTOPIC 2: Kinetic interpretation of temperature (55 Questions)
# ==============================================================================

# Q56
add_q(
    "Kinetic interpretation of temperature",
    r"According to the kinetic theory of gases, the absolute temperature $T$ of an ideal gas is directly proportional to:",
    [
        r"The average translational kinetic energy per molecule",
        r"The average potential energy of the molecules",
        r"The total momentum of the gas molecules",
        r"The average intermolecular distance"
    ],
    0,
    r"The fundamental kinetic definition of temperature is $\langle E_{\text{tr}} \rangle = \frac{1}{2}m v_{\text{rms}}^2 = \frac{3}{2}k_B T$, which establishes that temperature is directly proportional to the average translational kinetic energy per molecule.",
    "Easy"
)

# Q57
add_q(
    "Kinetic interpretation of temperature",
    r"The average translational kinetic energy of a molecule of any ideal gas at absolute temperature $T$ is:",
    [
        r"$\frac{3}{2} k_B T$",
        r"$\frac{1}{2} k_B T$",
        r"$\frac{5}{2} k_B T$",
        r"$3 k_B T$"
    ],
    0,
    r"Every gas molecule has 3 translational degrees of freedom, each contributing $\frac{1}{2}k_B T$. Therefore, the average translational kinetic energy is $\frac{3}{2}k_B T$, irrespective of whether the gas is monoatomic, diatomic, or polyatomic.",
    "Easy"
)

# Q58
add_q(
    "Kinetic interpretation of temperature",
    r"The total translational kinetic energy of 1 mole of an ideal gas at temperature $T$ is:",
    [
        r"$\frac{3}{2} R T$",
        r"$\frac{5}{2} R T$",
        r"$\frac{1}{2} R T$",
        r"$3 R T$"
    ],
    0,
    r"For 1 mole ($N_A$ molecules), total translational kinetic energy is $N_A \times \left(\frac{3}{2}k_B T\right) = \frac{3}{2} (N_A k_B) T = \frac{3}{2} R T$.",
    "Easy"
)

# Q59
add_q(
    "Kinetic interpretation of temperature",
    r"The pressure $P$ exerted by an ideal gas of density $\rho$ is related to the root mean square speed $v_{\text{rms}}$ of its molecules by:",
    [
        r"$P = \frac{1}{3}\rho v_{\text{rms}}^2$",
        r"$P = \frac{1}{2}\rho v_{\text{rms}}^2$",
        r"$P = \rho v_{\text{rms}}^2$",
        r"$P = \frac{2}{3}\rho v_{\text{rms}}^2$"
    ],
    0,
    r"From kinetic theory, calculating the momentum change during elastic wall collisions gives $P = \frac{1}{3} \frac{N m}{V} v_{\text{rms}}^2 = \frac{1}{3}\rho v_{\text{rms}}^2$.",
    "Easy"
)

# Q60
add_q(
    "Kinetic interpretation of temperature",
    r"At what temperature is the average translational kinetic energy of a gas molecule equal to that of a molecule at $27^\circ\text{C}$ doubled?",
    [
        r"$327^\circ\text{C}$",
        r"$54^\circ\text{C}$",
        r"$600^\circ\text{C}$",
        r"$227^\circ\text{C}$"
    ],
    0,
    r"Initial temperature $T_1 = 27 + 273 = 300\text{ K}$. Since $E_k \propto T$, doubling the kinetic energy requires doubling the absolute temperature: $T_2 = 2 T_1 = 600\text{ K} = 600 - 273 = 327^\circ\text{C}$.",
    "Easy"
)

# Q61
add_q(
    "Kinetic interpretation of temperature",
    r"At the same temperature $T$, the ratio of the average translational kinetic energy of an oxygen molecule ($\text{O}_2$) to that of a helium atom ($\text{He}$) is:",
    [
        r"$1 : 1$",
        r"$8 : 1$",
        r"$1 : 8$",
        r"$2 : 1$"
    ],
    0,
    r"The average translational kinetic energy per molecule is $\frac{3}{2}k_B T$ for ALL ideal gases, depending only on temperature and not on molecular mass or atomicity. Hence the ratio is $1 : 1$.",
    "Easy"
)

# Q62
add_q(
    "Kinetic interpretation of temperature",
    r"If the pressure of an ideal gas is doubled while maintaining its temperature constant, the average kinetic energy of its molecules will:",
    [
        r"Remain unchanged",
        r"Be doubled",
        r"Be halved",
        r"Increase fourfold"
    ],
    0,
    r"The average translational kinetic energy of gas molecules is solely a function of absolute temperature ($E_k = \frac{3}{2}k_B T$). Since temperature is constant, $E_k$ remains unchanged.",
    "Easy"
)

# Q63
add_q(
    "Kinetic interpretation of temperature",
    r"The relation between pressure $P$ and translational kinetic energy per unit volume $E_v$ of an ideal gas is:",
    [
        r"$P = \frac{2}{3} E_v$",
        r"$P = \frac{1}{3} E_v$",
        r"$P = \frac{3}{2} E_v$",
        r"$P = E_v$"
    ],
    0,
    r"Translational KE per unit volume is $E_v = \frac{1}{2}\rho v_{\text{rms}}^2$. Pressure is $P = \frac{1}{3}\rho v_{\text{rms}}^2 = \frac{2}{3}\left(\frac{1}{2}\rho v_{\text{rms}}^2\right) = \frac{2}{3} E_v$.",
    "Easy"
)

# Q64
add_q(
    "Kinetic interpretation of temperature",
    r"At absolute zero temperature ($0\text{ K}$):",
    [
        r"The translational kinetic energy of ideal gas molecules becomes zero",
        r"The volume of gas becomes infinite",
        r"The mass of gas molecules becomes zero",
        r"The speed of light becomes zero"
    ],
    0,
    r"Classically, absolute zero is the temperature at which all translational molecular motion ceases, so $v_{\text{rms}} = 0$ and translational kinetic energy is zero.",
    "Easy"
)

# Q65
add_q(
    "Kinetic interpretation of temperature",
    r"A gas molecule of mass $m$ strikes a rigid wall perpendicularly with speed $v$ and rebounds elastically. The impulse imparted to the wall is:",
    [
        r"$2mv$",
        r"$mv$",
        r"Zero",
        r"$\frac{1}{2}mv^2$"
    ],
    0,
    r"Initial momentum is $+mv$, final momentum is $-mv$. Momentum change of the molecule is $\Delta p = -mv - (+mv) = -2mv$. The impulse delivered to the wall is $+2mv$.",
    "Easy"
)

# Q66
add_q(
    "Kinetic interpretation of temperature",
    r"The average kinetic energy of a monoatomic gas molecule at $0^\circ\text{C}$ is ($k_B = 1.38 \times 10^{-23}\text{ J/K}$):",
    [
        r"$5.65 \times 10^{-21}\text{ J}$",
        r"$3.77 \times 10^{-21}\text{ J}$",
        r"$1.88 \times 10^{-21}\text{ J}$",
        r"$7.54 \times 10^{-21}\text{ J}$"
    ],
    0,
    r"$$E_k = \frac{3}{2}k_B T = \frac{3}{2} \times (1.38 \times 10^{-23}\text{ J/K}) \times 273.15\text{ K} \approx 5.65 \times 10^{-21}\text{ J}$$",
    "Medium"
)

# Q67
add_q(
    "Kinetic interpretation of temperature",
    r"In a cubical container of side $L$, $N$ molecules each of mass $m$ move randomly. The pressure exerted on any wall is due to collisions of molecules with the wall. The time between successive collisions of a single molecule with a specific wall perpendicular to the $x$-axis is:",
    [
        r"$\frac{2L}{v_x}$",
        r"$\frac{L}{v_x}$",
        r"$\frac{L}{2v_x}$",
        r"$\frac{4L}{v_x}$"
    ],
    0,
    r"To hit the same wall again, the molecule must travel to the opposite wall and back, covering a total distance of $2L$ along the $x$-direction at speed $v_x$. Hence $\Delta t = \frac{2L}{v_x}$.",
    "Easy"
)

# Q68
add_q(
    "Kinetic interpretation of temperature",
    r"If the rms speed of nitrogen molecules at temperature $T$ is $v$, the rms speed of hydrogen molecules at the same temperature is (take molar masses as $28\text{ g/mol}$ and $2\text{ g/mol}$):",
    [
        r"$\sqrt{14}\,v \approx 3.74 v$",
        r"$14 v$",
        r"$\frac{v}{\sqrt{14}}$",
        r"$\frac{v}{14}$"
    ],
    0,
    r"Since $v_{\text{rms}} = \sqrt{\frac{3RT}{M}}$, at constant $T$: $$\frac{v_{\text{H}_2}}{v_{\text{N}_2}} = \sqrt{\frac{M_{\text{N}_2}}{M_{\text{H}_2}}} = \sqrt{\frac{28}{2}} = \sqrt{14} \approx 3.74$$",
    "Easy"
)

# Q69
add_q(
    "Kinetic interpretation of temperature",
    r"Two gases are in thermal equilibrium. Which of the following physical quantities must be identical for the two gases?",
    [
        r"Average translational kinetic energy per molecule",
        r"Root mean square speed of molecules",
        r"Total internal energy",
        r"Pressure"
    ],
    0,
    r"Thermal equilibrium means that both gases are at the same temperature $T$. Since the average translational kinetic energy per molecule is $\frac{3}{2}k_B T$, it must be identical for both gases.",
    "Easy"
)

# Q70
add_q(
    "Kinetic interpretation of temperature",
    r"An insulated container contains 1 mole of helium gas. If it is moving with a bulk velocity $v_0$ and suddenly stopped, the rise in temperature of the gas is ($M$ is molar mass of helium):",
    [
        r"$\frac{M v_0^2}{3R}$",
        r"$\frac{M v_0^2}{2R}$",
        r"$\frac{2M v_0^2}{3R}$",
        r"$\frac{M v_0^2}{R}$"
    ],
    0,
    r"The macroscopic kinetic energy of the container is converted into internal thermal energy: $\frac{1}{2} M v_0^2 = n C_v \Delta T$. For helium (monoatomic), $n = 1$ and $C_v = \frac{3}{2}R$. Thus: $$\frac{1}{2} M v_0^2 = \frac{3}{2} R \Delta T \implies \Delta T = \frac{M v_0^2}{3R}$$",
    "Medium"
)

# Q71
add_q(
    "Kinetic interpretation of temperature",
    r"The total translational kinetic energy of $n$ moles of an ideal gas depends only on:",
    [
        r"Temperature and number of moles",
        r"Volume and pressure only",
        r"Nature of the gas (monoatomic or diatomic)",
        r"Molar mass of the gas"
    ],
    0,
    r"Total translational kinetic energy is $E_{\text{tr}} = \frac{3}{2}nRT$. It depends exclusively on the number of moles $n$ and the absolute temperature $T$.",
    "Easy"
)

# Q72
add_q(
    "Kinetic interpretation of temperature",
    r"If a gas is heated such that its rms speed increases by $1\%$, the percentage increase in absolute temperature is approximately:",
    [
        r"$2\%$",
        r"$1\%$",
        r"$0.5\%$",
        r"$4\%$"
    ],
    0,
    r"Since $v_{\text{rms}} \propto \sqrt{T}$, we have $T \propto v_{\text{rms}}^2$. For small fractional changes: $\frac{\Delta T}{T} \approx 2 \frac{\Delta v_{\text{rms}}}{v_{\text{rms}}} = 2 \times 1\% = 2\%$.",
    "Easy"
)

# Q73
add_q(
    "Kinetic interpretation of temperature",
    r"A mixture of neon (monoatomic, atomic mass 20) and krypton (monoatomic, atomic mass 84) is at $300\text{ K}$. Which atoms have higher average kinetic energy?",
    [
        r"Both have identical average kinetic energy",
        r"Neon atoms",
        r"Krypton atoms",
        r"Depends on the volume of the container"
    ],
    0,
    r"At the same temperature, molecules of ALL gases have the exact same average translational kinetic energy $\frac{3}{2}k_B T$.",
    "Easy"
)

# Q74
add_q(
    "Kinetic interpretation of temperature",
    r"The temperature of a gas is raised from $27^\circ\text{C}$ to $927^\circ\text{C}$. The rms speed of its molecules increases by a factor of:",
    [
        r"$2$",
        r"$\sqrt{2}$",
        r"$4$",
        r"$\sqrt{34}$"
    ],
    0,
    r"Initial temperature $T_1 = 27 + 273 = 300\text{ K}$. Final temperature $T_2 = 927 + 273 = 1200\text{ K}$. The ratio of rms speeds is: $$\frac{v_2}{v_1} = \sqrt{\frac{T_2}{T_1}} = \sqrt{\frac{1200}{300}} = \sqrt{4} = 2$$",
    "Easy"
)

# Q75
add_q(
    "Kinetic interpretation of temperature",
    r"The average momentum of the molecules of an ideal gas in a container at rest is:",
    [
        r"Zero",
        r"$\sqrt{2 m k_B T}$",
        r"$3 m k_B T$",
        r"$\sqrt{3 m k_B T}$"
    ],
    0,
    r"Because the molecules move in all directions with equal probability, the velocity distribution is isotropic. Hence the vector average velocity is $\langle \vec{v} \rangle = 0$, giving average momentum $\langle \vec{p} \rangle = m \langle \vec{v} \rangle = 0$.",
    "Easy"
)

# Q76
add_q(
    "Kinetic interpretation of temperature",
    r"Which of the following is NOT an assumption of the kinetic theory of gases?",
    [
        r"Molecules attract each other with a force inversely proportional to the square of distance",
        r"Collisions between molecules and walls are perfectly elastic",
        r"The volume of molecules is negligible compared to the volume of the container",
        r"The molecules are in continuous, random, chaotic motion"
    ],
    0,
    r"In ideal kinetic theory, intermolecular forces are assumed to be strictly ZERO except during momentary collisions.",
    "Easy"
)

# Q77
add_q(
    "Kinetic interpretation of temperature",
    r"The pressure exerted by an ideal gas on the walls of its container is fundamentally caused by:",
    [
        r"Rate of change of momentum of molecules colliding with the walls",
        r"Repulsive electrostatic forces between walls and molecules",
        r"Gravitational attraction of the molecules by the Earth",
        r"Thermal expansion of the walls"
    ],
    0,
    r"When gas molecules collide elastically with the container walls, they undergo momentum changes. By Newton's second and third laws, this continuous transfer of momentum per unit time per unit area constitutes pressure.",
    "Easy"
)

# Q78
add_q(
    "Kinetic interpretation of temperature",
    r"At temperature $T$, the thermal energy of 1 mole of a monoatomic gas is $E_1$. For 1 mole of a diatomic gas (rigid rotator) at the same temperature, the translational kinetic energy is $E_2$. The ratio $E_1 / E_2$ is:",
    [
        r"$1 : 1$",
        r"$3 : 5$",
        r"$5 : 3$",
        r"$3 : 7$"
    ],
    0,
    r"Both monoatomic and diatomic molecules have exactly 3 translational degrees of freedom, so the translational kinetic energy per mole for both is $\frac{3}{2}RT$. Thus $E_1 / E_2 = 1 : 1$.",
    "Medium"
)

# Q79
add_q(
    "Kinetic interpretation of temperature",
    r"The kinetic energy per unit mass of an ideal gas of molar mass $M$ at temperature $T$ is:",
    [
        r"$\frac{3RT}{2M}$",
        r"$\frac{3RT}{2}$",
        r"$\frac{3k_B T}{2M}$",
        r"$\frac{RT}{2M}$"
    ],
    0,
    r"Translational KE per mole is $\frac{3}{2}RT$. Dividing by the mass of 1 mole ($M$) gives the kinetic energy per unit mass: $\frac{3RT}{2M}$.",
    "Easy"
)

# Q80
add_q(
    "Kinetic interpretation of temperature",
    r"If the absolute temperature of a gas is doubled and its volume is halved, the rms speed of its molecules will:",
    [
        r"Increase by a factor of $\sqrt{2}$",
        r"Increase by a factor of 2",
        r"Remain unchanged",
        r"Increase by a factor of 4"
    ],
    0,
    r"The rms speed depends only on temperature: $v_{\text{rms}} = \sqrt{\frac{3RT}{M}}$. Since temperature is doubled ($T \to 2T$), $v_{\text{rms}}$ increases by $\sqrt{2}$, independent of the volume change.",
    "Easy"
)

# Q81
add_q(
    "Kinetic interpretation of temperature",
    r"Consider an ideal gas in a container. If the mass of each molecule is doubled while their rms speed is halved, the pressure exerted by the gas will:",
    [
        r"Be halved",
        r"Remain unchanged",
        r"Be doubled",
        r"Be quartered"
    ],
    0,
    r"Pressure is $P = \frac{1}{3} \frac{N m}{V} v_{\text{rms}}^2$. If $m \to 2m$ and $v_{\text{rms}} \to v_{\text{rms}}/2$, then $m v_{\text{rms}}^2 \to (2m)(v_{\text{rms}}/2)^2 = \frac{1}{2} m v_{\text{rms}}^2$. Thus the pressure is halved.",
    "Medium"
)

# Q82
add_q(
    "Kinetic interpretation of temperature",
    r"Brownian motion provides direct experimental evidence for:",
    [
        r"The continuous random motion of molecules in fluids",
        r"The wave nature of particles",
        r"The quantization of energy",
        r"The existence of intermolecular gravitational forces"
    ],
    0,
    r"Brownian motion (the erratic, zig-zag motion of microscopic pollen grains suspended in water) is caused by unbalanced collisions from rapidly moving fluid molecules, confirming the kinetic molecular theory.",
    "Easy"
)

# Q83
add_q(
    "Kinetic interpretation of temperature",
    r"The kinetic energy of 4 moles of nitrogen gas at $127^\circ\text{C}$ is ($R = 8.314\text{ J}/(\text{mol}\cdot\text{K})$):",
    [
        r"$19.95\text{ kJ}$",
        r"$39.91\text{ kJ}$",
        r"$9.98\text{ kJ}$",
        r"$24.94\text{ kJ}$"
    ],
    0,
    r"Translational kinetic energy: $$E_{\text{tr}} = \frac{3}{2} n R T = \frac{3}{2} \times 4 \times 8.314 \times (127 + 273) = 6 \times 8.314 \times 400 = 19953.6\text{ J} \approx 19.95\text{ kJ}$$",
    "Medium"
)

# Q84
add_q(
    "Kinetic interpretation of temperature",
    r"In terms of molecular components, $\langle v^2 \rangle = \langle v_x^2 \rangle + \langle v_y^2 \rangle + \langle v_z^2 \rangle$. By spatial isotropy of molecular motion:",
    [
        r"$\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle = \frac{1}{3}\langle v^2 \rangle$",
        r"$\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle = \langle v^2 \rangle$",
        r"$\langle v_x^2 \rangle = \frac{1}{2}\langle v^2 \rangle$",
        r"$\langle v_x^2 \rangle = 0$"
    ],
    0,
    r"Since there is no preferred direction in space for molecular motion, the mean square velocities along the three orthogonal axes are equal: $\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle = \frac{1}{3}\langle v^2 \rangle$.",
    "Easy"
)

# Q85
add_q(
    "Kinetic interpretation of temperature",
    r"The average translational kinetic energy per molecule of a gas at temperature $T$ is $\frac{3}{2}k_B T$. The constant $k_B$ has the value:",
    [
        r"$1.38 \times 10^{-23}\text{ J/K}$",
        r"$8.314 \times 10^{-23}\text{ J/K}$",
        r"$6.02 \times 10^{-23}\text{ J/K}$",
        r"$1.60 \times 10^{-19}\text{ J/K}$"
    ],
    0,
    r"Boltzmann's constant is $k_B = \frac{R}{N_A} = \frac{8.314}{6.022 \times 10^{23}} \approx 1.38 \times 10^{-23}\text{ J/K}$.",
    "Easy"
)

# Q86
add_q(
    "Kinetic interpretation of temperature",
    r"If the absolute temperature of an ideal gas in a container of fixed volume is quadrupled, the pressure of the gas:",
    [
        r"Increases by a factor of 4",
        r"Increases by a factor of 2",
        r"Increases by a factor of 16",
        r"Remains unchanged"
    ],
    0,
    r"Since $P = \frac{nRT}{V} \propto T$ at constant volume, quadrupling $T$ quadruples the pressure ($P \to 4P$).",
    "Easy"
)

# Q87
add_q(
    "Kinetic interpretation of temperature",
    r"An ideal gas has density $\rho$ at pressure $P$. If the pressure is increased to $4P$ while keeping the temperature constant, the new density is:",
    [
        r"$4\rho$",
        r"$2\rho$",
        r"$\rho/4$",
        r"$\rho$"
    ],
    0,
    r"Since $\rho = \frac{PM}{RT}$, at constant temperature density is directly proportional to pressure. Therefore $\rho_f = 4\rho$.",
    "Easy"
)

# Q88
add_q(
    "Kinetic interpretation of temperature",
    r"The mean kinetic energy of a gas molecule depends upon:",
    [
        r"Its absolute temperature only",
        r"Its pressure only",
        r"Its volume only",
        r"Both pressure and volume"
    ],
    0,
    r"By kinetic theory, the average translational kinetic energy of a molecule is $\frac{3}{2}k_B T$, which depends strictly on the absolute temperature.",
    "Easy"
)

# Q89
add_q(
    "Kinetic interpretation of temperature",
    r"When an ideal gas is compressed adiabatically, its temperature rises because:",
    [
        r"Work done on the gas increases the kinetic energy of the molecules",
        r"Heat is absorbed from the surroundings",
        r"Molecules expand in size",
        r"Collisions between molecules become inelastic"
    ],
    0,
    r"In an adiabatic process $Q = 0$. By the First Law of Thermodynamics, $\Delta U = -W$. The work done on the gas ($W < 0$) increases its internal energy ($\Delta U > 0$), resulting in higher molecular kinetic energy and a rise in temperature.",
    "Easy"
)

# Q90
add_q(
    "Kinetic interpretation of temperature",
    r"The rms speed of hydrogen molecules at $0^\circ\text{C}$ is about $1840\text{ m/s}$. The rms speed of oxygen molecules at $0^\circ\text{C}$ is approximately:",
    [
        r"$460\text{ m/s}$",
        r"$920\text{ m/s}$",
        r"$230\text{ m/s}$",
        r"$1840\text{ m/s}$"
    ],
    0,
    r"$$\frac{v_{\text{O}_2}}{v_{\text{H}_2}} = \sqrt{\frac{M_{\text{H}_2}}{M_{\text{O}_2}}} = \sqrt{\frac{2}{32}} = \sqrt{\frac{1}{16}} = \frac{1}{4} \implies v_{\text{O}_2} = \frac{1840}{4} = 460\text{ m/s}$$",
    "Easy"
)

# Q91
add_q(
    "Kinetic interpretation of temperature",
    r"At what temperature is the rms speed of oxygen molecules equal to the escape velocity from the Earth's surface ($v_{\text{esc}} \approx 11.2\text{ km/s}$)? (Molar mass of $\text{O}_2 = 32\text{ g/mol}$, $R = 8.314\text{ J}/(\text{mol}\cdot\text{K})$):",
    [
        r"$\approx 1.6 \times 10^5\text{ K}$",
        r"$\approx 1.6 \times 10^4\text{ K}$",
        r"$\approx 8.0 \times 10^4\text{ K}$",
        r"$\approx 3.2 \times 10^5\text{ K}$"
    ],
    0,
    r"$$v_{\text{rms}} = \sqrt{\frac{3RT}{M}} \implies T = \frac{M v_{\text{esc}}^2}{3R} = \frac{(0.032\text{ kg/mol}) \times (11200\text{ m/s})^2}{3 \times 8.314} = \frac{0.032 \times 1.2544 \times 10^8}{24.942} \approx 1.61 \times 10^5\text{ K}$$",
    "Medium"
)

# Q92
add_q(
    "Kinetic interpretation of temperature",
    r"Why does the Moon have no atmosphere?",
    [
        r"The rms speed of gas molecules at lunar surface temperatures exceeds the lunar escape velocity",
        r"The Moon has no gravitational field",
        r"Solar radiation dissolves all gases on the Moon",
        r"The lunar surface temperature is at absolute zero"
    ],
    0,
    r"The escape velocity on the Moon is only about $2.38\text{ km/s}$. At typical daytime temperatures on the Moon, the rms and thermal speeds of common atmospheric gases exceed this escape velocity, allowing them to escape into space.",
    "Easy"
)

# Q93
add_q(
    "Kinetic interpretation of temperature",
    r"If the kinetic energy of a gas molecule is $E$, its de Broglie wavelength is proportional to:",
    [
        r"$\frac{1}{\sqrt{E}}$",
        r"$\frac{1}{E}$",
        r"$\sqrt{E}$",
        r"$E^2$"
    ],
    0,
    r"Since momentum $p = \sqrt{2mE}$, the de Broglie wavelength is $\lambda = \frac{h}{p} = \frac{h}{\sqrt{2mE}} \propto \frac{1}{\sqrt{E}}$.",
    "Easy"
)

# Q94
add_q(
    "Kinetic interpretation of temperature",
    r"The thermal de Broglie wavelength of an ideal gas molecule of mass $m$ at temperature $T$ is proportional to:",
    [
        r"$\frac{1}{\sqrt{m T}}$",
        r"$\sqrt{m T}$",
        r"$\frac{1}{m T}$",
        r"$\frac{T}{\sqrt{m}}$"
    ],
    0,
    r"Using average thermal momentum $p \approx \sqrt{3 m k_B T}$, the thermal wavelength is $\lambda_{\text{th}} = \frac{h}{\sqrt{3 m k_B T}} \propto \frac{1}{\sqrt{m T}}$.",
    "Medium"
)

# Q95
add_q(
    "Kinetic interpretation of temperature",
    r"If $v_x, v_y, v_z$ denote the Cartesian components of velocity of a gas molecule, then by symmetry:",
    [
        r"$\langle v_x \rangle = 0$ and $\langle v_x^2 \rangle > 0$",
        r"$\langle v_x \rangle > 0$ and $\langle v_x^2 \rangle = 0$",
        r"$\langle v_x \rangle = 0$ and $\langle v_x^2 \rangle = 0$",
        r"$\langle v_x \rangle = \langle v_x^2 \rangle$"
    ],
    0,
    r"Due to isotropic random motion, positive and negative directions are equally probable, so the average velocity is zero ($\langle v_x \rangle = 0$). However, $v_x^2 \ge 0$ is always non-negative, so its average is positive ($\langle v_x^2 \rangle = \frac{k_B T}{m} > 0$).",
    "Easy"
)

# Q96
add_q(
    "Kinetic interpretation of temperature",
    r"Two containers $A$ and $B$ of equal volume contain equal masses of gas $X$ (molar mass 16) and gas $Y$ (molar mass 32) at the same temperature. The ratio of total translational kinetic energy in $A$ to that in $B$ is:",
    [
        r"$2 : 1$",
        r"$1 : 2$",
        r"$1 : 1$",
        r"$4 : 1$"
    ],
    0,
    r"Total translational KE is $E_{\text{tr}} = \frac{3}{2}nRT = \frac{3}{2}\left(\frac{m}{M}\right)RT$. For equal mass $m$ and temperature $T$, $E_{\text{tr}} \propto \frac{1}{M}$. Therefore: $$\frac{E_A}{E_B} = \frac{M_Y}{M_X} = \frac{32}{16} = 2$$",
    "Medium"
)

# Q97
add_q(
    "Kinetic interpretation of temperature",
    r"The kinetic energy of 1 gram of helium ($\text{He}$, molar mass $4\text{ g/mol}$) at $300\text{ K}$ is ($R = 8.314\text{ J}/(\text{mol}\cdot\text{K})$):",
    [
        r"$935.3\text{ J}$",
        r"$1870.6\text{ J}$",
        r"$467.7\text{ J}$",
        r"$3741.3\text{ J}$"
    ],
    0,
    r"Moles $n = \frac{1}{4} = 0.25\text{ mol}$. Total KE: $$E = \frac{3}{2} n R T = \frac{3}{2} \times 0.25 \times 8.314 \times 300 = 935.325\text{ J} \approx 935.3\text{ J}$$",
    "Medium"
)

# Q98
add_q(
    "Kinetic interpretation of temperature",
    r"The average speed of gas molecules increases with absolute temperature $T$ as:",
    [
        r"$\sqrt{T}$",
        r"$T$",
        r"$T^2$",
        r"$T^{3/2}$"
    ],
    0,
    r"The average speed is $v_{\text{avg}} = \sqrt{\frac{8RT}{\pi M}} \propto \sqrt{T}$.",
    "Easy"
)

# Q99
add_q(
    "Kinetic interpretation of temperature",
    r"In an elastic collision of a gas molecule with a stationary container wall, which of the following is conserved?",
    [
        r"Both kinetic energy and the component of momentum parallel to the wall",
        r"Only kinetic energy",
        r"Only total momentum of the molecule",
        r"Neither kinetic energy nor momentum"
    ],
    0,
    r"In a specular elastic collision with a flat frictionless wall, the molecule's kinetic energy is conserved and its parallel velocity component $v_\parallel$ is unaltered, so parallel momentum is conserved.",
    "Medium"
)

# Q100
add_q(
    "Kinetic interpretation of temperature",
    r"A gas in an enclosed vessel is heated. The pressure of the gas increases primarily because:",
    [
        r"The molecules collide with the walls more frequently and with greater momentum",
        r"The molecules expand in volume",
        r"The number of molecules increases",
        r"The intermolecular gravitational attraction decreases"
    ],
    0,
    r"As temperature increases, molecular speeds increase ($v \propto \sqrt{T}$). This increases both the frequency of collisions with the walls and the momentum transferred per collision, thereby multiplying the pressure.",
    "Easy"
)

# Q101
add_q(
    "Kinetic interpretation of temperature",
    r"If $E_k$ is the average kinetic energy of a molecule of a gas, then its temperature $T$ is:",
    [
        r"$T = \frac{2 E_k}{3 k_B}$",
        r"$T = \frac{3 E_k}{2 k_B}$",
        r"$T = \frac{E_k}{k_B}$",
        r"$T = \frac{E_k}{3 k_B}$"
    ],
    0,
    r"From $E_k = \frac{3}{2}k_B T$, solving for $T$ yields $T = \frac{2 E_k}{3 k_B}$.",
    "Easy"
)

# Q102
add_q(
    "Kinetic interpretation of temperature",
    r"The ratio of the rms speed of an ideal gas at $127^\circ\text{C}$ to that at $27^\circ\text{C}$ is:",
    [
        r"$\sqrt{\frac{4}{3}} \approx 1.15$",
        r"$\sqrt{\frac{127}{27}}$",
        r"$\frac{4}{3}$",
        r"$2$"
    ],
    0,
    r"Convert to kelvin: $T_1 = 27 + 273 = 300\text{ K}$, $T_2 = 127 + 273 = 400\text{ K}$. Ratio: $$\frac{v_2}{v_1} = \sqrt{\frac{T_2}{T_1}} = \sqrt{\frac{400}{300}} = \sqrt{\frac{4}{3}}$$ Always use absolute temperatures in kelvin, not degrees Celsius!",
    "Easy"
)

# Q103
add_q(
    "Kinetic interpretation of temperature",
    r"A gas cylinder contains $N$ molecules. If half of the molecules are removed and the speed of the remaining molecules is doubled, the pressure of the gas in the cylinder becomes:",
    [
        r"$2$ times initial pressure",
        r"$4$ times initial pressure",
        r"Equal to initial pressure",
        r"Half of initial pressure"
    ],
    0,
    r"Pressure is $P \propto N v^2$. With $N' = N/2$ and $v' = 2v$: $$P' \propto \left(\frac{N}{2}\right)(2v)^2 = \left(\frac{N}{2}\right)(4v^2) = 2 N v^2 = 2P$$",
    "Easy"
)

# Q104
add_q(
    "Kinetic interpretation of temperature",
    r"Which speed distribution law governs the speeds of molecules in an ideal gas at thermal equilibrium?",
    [
        r"Maxwell-Boltzmann distribution",
        r"Fermi-Dirac distribution",
        r"Bose-Einstein distribution",
        r"Planck's distribution"
    ],
    0,
    r"Classical distinguishable particles in thermal equilibrium obey the Maxwell-Boltzmann speed distribution.",
    "Easy"
)

# Q105
add_q(
    "Kinetic interpretation of temperature",
    r"The kinetic energy of translation of 1 molecule of carbon dioxide ($\text{CO}_2$) at $300\text{ K}$ is:",
    [
        r"$6.21 \times 10^{-21}\text{ J}$",
        r"$1.04 \times 10^{-20}\text{ J}$",
        r"$4.14 \times 10^{-21}\text{ J}$",
        r"$1.24 \times 10^{-20}\text{ J}$"
    ],
    0,
    r"Regardless of atomicity, the translational kinetic energy per molecule is: $$E_{\text{tr}} = \frac{3}{2}k_B T = 1.5 \times (1.38 \times 10^{-23}) \times 300 = 6.21 \times 10^{-21}\text{ J}$$",
    "Medium"
)

# Q106
add_q(
    "Kinetic interpretation of temperature",
    r"If three molecules have speeds of $2\text{ m/s}$, $4\text{ m/s}$, and $6\text{ m/s}$, the ratio of their rms speed to their average speed is:",
    [
        r"$\frac{\sqrt{56/3}}{4} \approx 1.08$",
        r"$1$",
        r"$1.22$",
        r"$1.50$"
    ],
    0,
    r"Average speed: $v_{\text{avg}} = \frac{2 + 4 + 6}{3} = 4\text{ m/s}$. Mean square speed: $\langle v^2 \rangle = \frac{2^2 + 4^2 + 6^2}{3} = \frac{4 + 16 + 36}{3} = \frac{56}{3}\text{ m}^2/\text{s}^2$. Root mean square speed: $v_{\text{rms}} = \sqrt{\frac{56}{3}} \approx 4.32\text{ m/s}$. Ratio: $\frac{v_{\text{rms}}}{v_{\text{avg}}} = \frac{\sqrt{56/3}}{4} \approx 1.08$.",
    "Medium"
)

# Q107
add_q(
    "Kinetic interpretation of temperature",
    r"In an ideal gas, the intermolecular potential energy is:",
    [
        r"Zero",
        r"Positive and depends on volume",
        r"Negative and depends on temperature",
        r"Equal to the kinetic energy"
    ],
    0,
    r"By assumption of the kinetic theory of ideal gases, molecules do not exert any forces on each other except during contact collisions; hence the intermolecular potential energy is identically zero.",
    "Easy"
)

# Q108
add_q(
    "Kinetic interpretation of temperature",
    r"When the temperature of an ideal gas in a closed container increases, which of the following remains CONSTANT?",
    [
        r"Density of the gas",
        r"Pressure of the gas",
        r"Average speed of molecules",
        r"Collision frequency with the walls"
    ],
    0,
    r"In a closed container, both the total mass $m$ and the volume $V$ are fixed, so the density $\rho = \frac{m}{V}$ remains strictly constant.",
    "Easy"
)

# Q109
add_q(
    "Kinetic interpretation of temperature",
    r"The rms speed of a gas molecule is $v$. If the absolute temperature is halved and the molar mass of the gas is doubled, the new rms speed is:",
    [
        r"$v / 2$",
        r"$v$",
        r"$v / \sqrt{2}$",
        r"$v / 4$"
    ],
    0,
    r"Since $v_{\text{rms}} = \sqrt{\frac{3RT}{M}}$, with $T' = T/2$ and $M' = 2M$: $$v' = \sqrt{\frac{3R(T/2)}{2M}} = \sqrt{\frac{1}{4}\frac{3RT}{M}} = \frac{1}{2}v$$",
    "Easy"
)

# Q110
add_q(
    "Kinetic interpretation of temperature",
    r"The average kinetic energy of gas molecules at absolute temperature $T$ is $E$. At what temperature will the average kinetic energy be $3E$?",
    [
        r"$3T$",
        r"$9T$",
        r"$\sqrt{3}T$",
        r"$6T$"
    ],
    0,
    r"Since $E \propto T$, tripling the average kinetic energy ($E \to 3E$) directly requires tripling the absolute temperature ($T \to 3T$).",
    "Easy"
)

print(f"Total questions in KTG part 1: {len(questions)}")
with open("scripts/emw_ktg/ktg_batch1.json", "w") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/emw_ktg/ktg_batch1.json")
