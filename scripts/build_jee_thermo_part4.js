const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Isothermal and adiabatic processes";
const CHAPTER = "Thermodynamics";
const SUBJECT = "Physics";
const CLASS = "Class 11";

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Assertion-Reason questions
const arQuestions = [
  {
    assertion: "The slope of an adiabatic $P-V$ curve at any point is steeper than that of an isothermal curve passing through the same point by a factor of $\\gamma$.",
    reason: "For an isothermal process $\\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = -\\frac{P}{V}$, while for an adiabatic process $\\left(\\frac{dP}{dV}\\right)_{\\text{adi}} = -\\gamma \\frac{P}{V}$, where $\\gamma > 1$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Differentiating $PV = \\text{const}$ gives $(dP/dV)_{\\text{iso}} = -P/V$. Differentiating $PV^\\gamma = \\text{const}$ gives $(dP/dV)_{\\text{adi}} = -\\gamma P/V = \\gamma (dP/dV)_{\\text{iso}}$. Since $\\gamma > 1$, the adiabatic curve is steeper by a factor of $\\gamma$."
  },
  {
    assertion: "When an ideal gas expands adiabatically, its temperature always decreases.",
    reason: "In an adiabatic expansion, the gas does work at the expense of its internal energy, since no heat enters the system ($Q = 0$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "From the first law $\\Delta Q = \\Delta U + W$. With $\\Delta Q = 0$, $\\Delta U = -W$. During expansion, work is done by the gas ($W > 0$), so $\\Delta U < 0$. Because $U = n C_v T$ for an ideal gas, temperature decreases."
  },
  {
    assertion: "During an adiabatic compression of an ideal gas, the work done on the gas results in a rise in its temperature.",
    reason: "In an adiabatic process, work done on the gas ($W < 0$) directly increases the internal energy of the system according to $\\Delta U = -W$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "With $Q = 0$, $\\Delta U = -W$. When work is done on the gas, $W_{\\text{by}} < 0$, so $\\Delta U > 0$. An increase in internal energy corresponds to an increase in temperature."
  },
  {
    assertion: "The adiabatic bulk modulus of an ideal gas is $\\gamma$ times its isothermal bulk modulus.",
    reason: "Isothermal bulk modulus is $B_{\\text{iso}} = P$, whereas adiabatic bulk modulus is $B_{\\text{adi}} = \\gamma P$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Bulk modulus is defined as $B = -V \\frac{dP}{dV}$. For an isothermal process, $B_{\\text{iso}} = -V(-P/V) = P$. For an adiabatic process, $B_{\\text{adi}} = -V(-\\gamma P/V) = \\gamma P$. Thus $B_{\\text{adi}} / B_{\\text{iso}} = \\gamma$."
  },
  {
    assertion: "A process carried out very slowly in a container having thin, highly conducting walls is essentially isothermal.",
    reason: "A slow process allows sufficient time for heat exchange with the surrounding thermal reservoir to maintain a constant temperature.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Conducting walls and a slow rate of execution ensure continuous thermal equilibrium with the surroundings, keeping the temperature uniform and constant throughout the process."
  },
  {
    assertion: "A sudden bursting of a bicycle tyre is an adiabatic process.",
    reason: "The expansion happens so rapidly that there is virtually no time for heat to be exchanged with the surroundings.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Adiabatic processes occur either in perfectly insulated containers or so rapidly that heat transfer with the surroundings is negligible ($Q \\approx 0$). The bursting of a tyre is an extremely rapid expansion, resulting in noticeable cooling."
  },
  {
    assertion: "When an ideal gas is compressed to half its initial volume, the final pressure is greater if the compression is adiabatic rather than isothermal.",
    reason: "In adiabatic compression, the temperature increases, which contributes an additional increase to the pressure alongside volume reduction.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For isothermal compression, $P_f = P_0 (V_0 / V_f) = 2P_0$. For adiabatic compression, $P_f = P_0 (V_0 / V_f)^\\gamma = 2^\\gamma P_0$. Since $\\gamma > 1$, $2^\\gamma > 2$, making the adiabatic pressure strictly higher."
  },
  {
    assertion: "The molar heat capacity of an ideal gas in an adiabatic process is zero.",
    reason: "Molar heat capacity is defined as $C = \\frac{\\Delta Q}{n \\Delta T}$, and $\\Delta Q = 0$ in an adiabatic process.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In an adiabatic process, no heat is exchanged with the surroundings ($dQ = 0$). By definition, molar heat capacity $C = dQ / (n\\,dT) = 0$."
  },
  {
    assertion: "The molar heat capacity of an ideal gas in an isothermal process is infinite.",
    reason: "In an isothermal process, heat is exchanged while the temperature remains strictly constant ($\\Delta T = 0$), so $C = \\frac{\\Delta Q}{n \\Delta T} \\to \\infty$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In an isothermal process, heat enters or leaves the system while $\\Delta T = 0$. From $C = dQ / (n\\,dT)$, dividing a non-zero quantity by zero gives $C = \\infty$."
  },
  {
    assertion: "For a given expansion ratio $V_2 / V_1 > 1$, the work done by a gas is greater in an isothermal expansion than in an adiabatic expansion starting from the same state.",
    reason: "The isothermal curve lies entirely above the adiabatic curve during expansion on a $P-V$ diagram.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because the adiabatic curve drops more steeply ($P \\propto V^{-\\gamma}$) than the isothermal curve ($P \\propto V^{-1}$), the area under the isothermal curve from $V_1$ to $V_2$ is strictly larger than under the adiabatic curve."
  },
  {
    assertion: "During adiabatic expansion of a monoatomic ideal gas, the pressure varies inversely as the $5/3$ power of its volume.",
    reason: "For a monoatomic ideal gas with 3 translational degrees of freedom, the ratio of molar heat capacities is $\\gamma = C_p / C_v = 5/3$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For a monoatomic gas, $C_v = \\frac{3}{2}R$ and $C_p = \\frac{5}{2}R$, giving $\\gamma = 5/3$. In a reversible adiabatic process, $P V^\\gamma = \\text{const}$, so $P \\propto V^{-5/3}$."
  },
  {
    assertion: "Two identical samples of an ideal gas at the same initial state are expanded to the same final volume, one isothermally and the other adiabatically. The final pressure is higher in the isothermal expansion.",
    reason: "In the isothermal process, heat absorbed maintains the temperature at its initial value, whereas in the adiabatic process, internal energy decreases and temperature drops.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Since $P = nRT/V$, at the same final volume $V_f$, the process with higher temperature has higher pressure. In isothermal expansion, $T_f = T_i$, while in adiabatic expansion, $T_f < T_i$. Thus $P_{\\text{iso}} > P_{\\text{adi}}$."
  },
  {
    assertion: "For an adiabatic process of an ideal gas, the relation between temperature and volume is $T V^{\\gamma - 1} = \\text{constant}$.",
    reason: "Substituting $P = nRT/V$ into the adiabatic equation $P V^\\gamma = \\text{constant}$ yields $T V^{\\gamma - 1} = \\text{constant}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "From $PV^\\gamma = \\text{const}$ and $P = nRT/V$, we have $(nRT/V)V^\\gamma = nR(T V^{\\gamma - 1}) = \\text{const}$, so $T V^{\\gamma - 1} = \\text{const}$."
  },
  {
    assertion: "For an adiabatic process of an ideal gas, the relation between temperature and pressure is $T^\\gamma P^{1 - \\gamma} = \\text{constant}$.",
    reason: "Substituting $V = nRT/P$ into $P V^\\gamma = \\text{constant}$ gives $P (nRT/P)^\\gamma = \\text{constant}$, which simplifies to $T^\\gamma P^{1 - \\gamma} = \\text{constant}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$P V^\\gamma = P (nRT/P)^\\gamma = (nR)^\\gamma P^{1 - \\gamma} T^\\gamma = \\text{const} \\implies T^\\gamma P^{1 - \\gamma} = \\text{const}$, or $T P^{(1-\\gamma)/\\gamma} = \\text{const}$."
  },
  {
    assertion: "Newton's formula for the speed of sound in air was corrected by Laplace by assuming that sound propagation is an adiabatic process rather than an isothermal process.",
    reason: "Sound waves compress and rarefy air so rapidly that no significant heat can be exchanged between adjacent compressions and rarefactions.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Laplace realized that acoustic vibrations are rapid pressure fluctuations with minimal thermal conduction over acoustic wavelengths, making the process adiabatic ($B = \\gamma P$) rather than isothermal ($B = P$). This led to $v = \\sqrt{\\gamma P / \\rho}$."
  },
  {
    assertion: "In a polytropic process characterized by $PV^n = \\text{constant}$, the molar heat capacity of the gas is $C = C_v + \\frac{R}{1 - n}$.",
    reason: "From the first law $dQ = dU + dW = n C_v dT + P\\,dV$, and integrating $P\\,dV$ for $PV^n = \\text{const}$ yields $W = \\frac{nR\\Delta T}{1 - n}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Dividing $dQ = n C_v dT + \\frac{nR\\,dT}{1 - n}$ by $n\\,dT$ gives $C = C_v + \\frac{R}{1 - n}$. For $n = \\gamma$, $C = C_v + \\frac{R}{1 - \\gamma} = C_v - C_v = 0$ (adiabatic)."
  },
  {
    assertion: "An ideal gas can have a negative molar heat capacity in certain polytropic processes.",
    reason: "If the work done by the gas during expansion exceeds the heat supplied to the gas, its internal energy and temperature decrease even as heat is added.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "If $1 < n < \\gamma$, then $\\frac{R}{1 - n}$ is negative and has a magnitude greater than $C_v = \\frac{R}{\\gamma - 1}$. Thus $C = C_v + \\frac{R}{1 - n} < 0$, meaning temperature falls even when heat is supplied."
  },
  {
    assertion: "Two different ideal gases, monoatomic and diatomic, are compressed adiabatically from the same initial state to the same fraction of their initial volume. The monoatomic gas reaches a higher final temperature.",
    reason: "The adiabatic exponent $\\gamma$ for a monoatomic gas ($5/3$) is greater than that for a diatomic gas ($7/5$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "From $T_f = T_i (V_i / V_f)^{\\gamma - 1}$, with $V_i / V_f > 1$, a larger exponent $(\\gamma - 1)$ yields a larger final temperature. Since $(\\gamma - 1)_{\\text{mono}} = 2/3 > (\\gamma - 1)_{\\text{dia}} = 2/5$, the monoatomic gas reaches a higher temperature."
  },
  {
    assertion: "When an ideal gas undergoes free expansion, the process is adiabatic and isothermal, but not reversible.",
    reason: "Free expansion takes place into an insulated vacuum ($Q = 0$ and $W = 0$), so $\\Delta U = 0$ and $\\Delta T = 0$, but the intermediate states are non-equilibrium.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In free expansion, $Q = 0$ (adiabatic) and $W = 0$ (expansion against vacuum), so $\\Delta U = 0$ giving $T_f = T_i$ (isothermal for ideal gas). However, turbulence and lack of equilibrium make it strictly irreversible."
  },
  {
    assertion: "The equation $P V^\\gamma = \\text{constant}$ is valid for both reversible and irreversible adiabatic processes.",
    reason: "Any adiabatic process satisfies $dQ = 0$.",
    correctAnswer: "(A) is false but (R) is true",
    explanation: "(A) is false because $P V^\\gamma = \\text{constant}$ is derived assuming quasi-static (reversible) path conditions where $dW = P\\,dV$. For irreversible adiabatic processes (e.g., free expansion), $P V^\\gamma \\neq \\text{constant}$."
  },
  {
    assertion: "During isothermal compression of an ideal gas, heat is rejected by the gas to the surrounding reservoir.",
    reason: "In an isothermal process of an ideal gas, $\\Delta U = 0$, so by the first law $Q = W$; since compression involves negative work ($W < 0$), $Q$ must be negative.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Work is done ON the gas ($W_{\\text{by}} < 0$). To keep temperature constant, internal energy cannot increase ($\\Delta U = 0$), so all mechanical work done on the gas must be expelled as heat to the reservoir ($Q < 0$)."
  },
  {
    assertion: "An adiabatic curve never intersects another adiabatic curve for the same sample of gas on a $P-V$ diagram.",
    reason: "If two adiabatic curves intersected, a closed cycle formed by two adiabatics and an isotherm could violate the Second Law of Thermodynamics.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "If two adiabatic curves intersected, one could construct a cycle producing net work while exchanging heat with only one reservoir, directly violating the Kelvin-Planck statement."
  },
  {
    assertion: "The work done during an adiabatic expansion of $n$ moles of an ideal gas from $(P_1, V_1, T_1)$ to $(P_2, V_2, T_2)$ is $W = \\frac{nR(T_1 - T_2)}{\\gamma - 1}$.",
    reason: "In an adiabatic process $W = -\\Delta U = -n C_v (T_2 - T_1) = n C_v (T_1 - T_2)$, and $C_v = \\frac{R}{\\gamma - 1}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "From the first law with $Q = 0$, $W = -\\Delta U = -n C_v \\Delta T = n C_v (T_1 - T_2)$. Substituting $C_v = \\frac{R}{\\gamma - 1}$ yields $W = \\frac{nR(T_1 - T_2)}{\\gamma - 1}$."
  },
  {
    assertion: "In an isothermal expansion of an ideal gas, the work done by the gas is equal to the heat absorbed.",
    reason: "Internal energy of an ideal gas depends only on its temperature, which remains constant in an isothermal process.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because $T$ is constant, $\\Delta U = 0$. By the first law $\\Delta Q = \\Delta U + W = 0 + W = W$. All heat absorbed is converted into mechanical work."
  },
  {
    assertion: "A gas enclosed in a perfectly insulating vessel undergoes an expansion against a constant external pressure $P_{\\text{ext}}$. The final temperature of the gas is lower than its initial temperature.",
    reason: "Because the container is insulated, $Q = 0$, and work done by the expanding gas against external pressure reduces its internal energy.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "With $Q = 0$, $\\Delta U = -W = -P_{\\text{ext}}\\Delta V < 0$. Since internal energy decreases, temperature must decrease."
  },
  {
    assertion: "An ideal gas undergoing an adiabatic process with $\\gamma = 1.4$ has a higher temperature sensitivity to volume change than one with $\\gamma = 1.67$.",
    reason: "The rate of fractional temperature change with fractional volume change is given by $\\left|\\frac{dT/T}{dV/V}\\right| = \\gamma - 1$.",
    correctAnswer: "(A) is false but (R) is true",
    explanation: "From $T V^{\\gamma - 1} = \\text{const}$, taking differentials gives $\\frac{dT}{T} + (\\gamma - 1)\\frac{dV}{V} = 0$, so $\\left|\\frac{dT/T}{dV/V}\\right| = \\gamma - 1$. For $\\gamma = 1.67$, $\\gamma - 1 = 0.67$, whereas for $\\gamma = 1.4$, $\\gamma - 1 = 0.40$. Thus the gas with $\\gamma = 1.67$ has higher temperature sensitivity, making (A) false."
  }
];

// 11 Multiple Choice Questions
const mcqQuestions = [
  {
    question: "One mole of an ideal gas with adiabatic exponent $\\gamma = 1.5$ undergoes an adiabatic expansion such that its volume increases by a factor of $4$. If the initial temperature was $400\\text{ K}$, the final temperature of the gas is:",
    options: [
      "$200\\text{ K}$",
      "$100\\text{ K}$",
      "$250\\text{ K}$",
      "$300\\text{ K}$"
    ],
    correctAnswer: "$200\\text{ K}$",
    explanation: "For an adiabatic process: $T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1}$.\\nHere $\\gamma - 1 = 1.5 - 1 = 0.5 = 1/2$, and $V_2 / V_1 = 4$.\\n$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{0.5} = 400 \\times \\left(\\frac{1}{4}\\right)^{1/2} = 400 \\times \\frac{1}{2} = 200\\text{ K}$."
  },
  {
    question: "During an adiabatic process, the pressure of a gas is observed to be proportional to the cube of its absolute temperature ($P \\propto T^3$). The ratio of molar heat capacities $\\gamma = C_p / C_v$ for this gas is:",
    options: [
      "$\\frac{3}{2}$",
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$",
      "$\\frac{7}{5}$"
    ],
    correctAnswer: "$\\frac{3}{2}$",
    explanation: "The adiabatic relation between $P$ and $T$ is $P^{1 - \\gamma} T^\\gamma = \\text{const} \\implies P \\propto T^{\\frac{\\gamma}{\\gamma - 1}}$.\\nGiven $P \\propto T^3$, we equate exponents:\\n$\\frac{\\gamma}{\\gamma - 1} = 3 \\implies \\gamma = 3\\gamma - 3 \\implies 2\\gamma = 3 \\implies \\gamma = \\frac{3}{2}$."
  },
  {
    question: "An ideal gas expands from volume $V_1$ to $V_2$ at constant temperature $T$. If the process is carried out reversibly, the work done by the gas is $W_1$. If the same expansion from $V_1$ to $V_2$ occurs adiabatically and reversibly, the work done is $W_2$. Which relation is correct?",
    options: [
      "$W_1 > W_2$",
      "$W_2 > W_1$",
      "$W_1 = W_2$",
      "$W_2 = \\gamma W_1$"
    ],
    correctAnswer: "$W_1 > W_2$",
    explanation: "During expansion from $V_1$ to $V_2$ starting from the same state $(P_1, V_1)$:\\n- In the isothermal process, temperature is held constant at $T$, so pressure falls as $1/V$.\\n- In the adiabatic process, the gas cools as it expands, so pressure falls more steeply as $1/V^\\gamma$ (where $\\gamma > 1$).\\nSince the isothermal curve lies entirely above the adiabatic curve, the area under the isothermal curve is larger: $W_1 > W_2$."
  },
  {
    question: "The ratio of the slope of an adiabatic curve to that of an isothermal curve at any common point $(P, V)$ on an indicator diagram is:",
    options: [
      "$\\gamma$",
      "$\\frac{1}{\\gamma}$",
      "$\\gamma - 1$",
      "$\\frac{\\gamma}{\\gamma - 1}$"
    ],
    correctAnswer: "$\\gamma$",
    explanation: "For an isothermal process, $PV = \\text{const} \\implies \\frac{dP}{dV} = -\\frac{P}{V}$.\\nFor an adiabatic process, $PV^\\gamma = \\text{const} \\implies \\frac{dP}{dV} = -\\gamma \\frac{P}{V}$.\\nRatio of slopes is $\\frac{(dP/dV)_{\\text{adi}}}{(dP/dV)_{\\text{iso}}} = \\frac{-\\gamma P/V}{-P/V} = \\gamma$."
  },
  {
    question: "An ideal diatomic gas ($\\gamma = 1.4$) at $300\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its initial volume. Its final temperature will be:",
    options: [
      "$1200\\text{ K}$",
      "$600\\text{ K}$",
      "$900\\text{ K}$",
      "$1500\\text{ K}$"
    ],
    correctAnswer: "$1200\\text{ K}$",
    explanation: "For an adiabatic process: $T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$.\\nHere $\\gamma - 1 = 1.4 - 1 = 0.4 = 2/5$.\\n$V_1 / V_2 = 32 = 2^5$.\\n$T_2 = 300 \\times (2^5)^{2/5} = 300 \\times 2^2 = 300 \\times 4 = 1200\\text{ K}$."
  },
  {
    question: "An ideal gas undergoes a process in which $P V^2 = \\text{constant}$. The molar heat capacity of the gas during this process is ($C_v$ is molar heat capacity at constant volume):",
    options: [
      "$C_v - R$",
      "$C_v + R$",
      "$C_v - 2R$",
      "$C_v + 2R$"
    ],
    correctAnswer: "$C_v - R$",
    explanation: "For a polytropic process $PV^n = \\text{const}$, molar heat capacity is given by:\\n$C = C_v + \\frac{R}{1 - n}$.\\nHere $n = 2$, so:\\n$C = C_v + \\frac{R}{1 - 2} = C_v - R$."
  },
  {
    question: "In an adiabatic expansion of an ideal gas, the volume increases by $8$ times and the absolute temperature becomes half. The ratio of molar heat capacities $\\gamma$ is:",
    options: [
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$",
      "$\\frac{7}{5}$",
      "$\\frac{3}{2}$"
    ],
    correctAnswer: "$\\frac{4}{3}$",
    explanation: "From $T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1}$:\\n$\\frac{T_2}{T_1} = \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} \\implies \\frac{1}{2} = \\left(\\frac{1}{8}\\right)^{\\gamma - 1} = \\left(\\frac{1}{2}\\right)^{3(\\gamma - 1)}$.\\nEquating exponents: $1 = 3(\\gamma - 1) \\implies \\gamma - 1 = \\frac{1}{3} \\implies \\gamma = 1 + \\frac{1}{3} = \\frac{4}{3}$."
  },
  {
    question: "A monoatomic ideal gas ($\\gamma = 5/3$) initially at $27^\\circ\\text{C}$ is suddenly compressed to one-eighth of its original volume. The rise in temperature of the gas is:",
    options: [
      "$900\\text{ K}$",
      "$1200\\text{ K}$",
      "$600\\text{ K}$",
      "$300\\text{ K}$"
    ],
    correctAnswer: "$900\\text{ K}$",
    explanation: "Initial temperature $T_1 = 27 + 273 = 300\\text{ K}$.\\nSudden compression is adiabatic: $T_2 = T_1 (V_1/V_2)^{\\gamma - 1}$.\\nHere $\\gamma - 1 = 5/3 - 1 = 2/3$, and $V_1/V_2 = 8 = 2^3$.\\n$T_2 = 300 \\times (2^3)^{2/3} = 300 \\times 2^2 = 300 \\times 4 = 1200\\text{ K}$.\\nRise in temperature: $\\Delta T = T_2 - T_1 = 1200 - 300 = 900\\text{ K}$."
  },
  {
    question: "If a gas is compressed isothermally, the work done on the gas is $W_{\\text{iso}}$. If the same gas is compressed adiabatically by the same volume reduction, the work done on the gas is $W_{\\text{adi}}$. Which relation holds?",
    options: [
      "$W_{\\text{adi}} > W_{\\text{iso}}$",
      "$W_{\\text{iso}} > W_{\\text{adi}}$",
      "$W_{\\text{adi}} = W_{\\text{iso}}$",
      "$W_{\\text{adi}} = \\frac{W_{\\text{iso}}}{\\gamma}$"
    ],
    correctAnswer: "$W_{\\text{adi}} > W_{\\text{iso}}$",
    explanation: "During compression, the adiabatic curve lies entirely above the isothermal curve because heating increases the pressure. Hence, more work must be done on the gas along the adiabatic path: $W_{\\text{adi}} > W_{\\text{iso}}$."
  },
  {
    question: "An ideal gas undergoes an isothermal expansion from volume $V_0$ to $2V_0$ at temperature $T$. The change in internal energy of the gas is:",
    options: [
      "$0$",
      "$nRT \\ln 2$",
      "$-nRT \\ln 2$",
      "$\\frac{nRT}{2}$"
    ],
    correctAnswer: "$0$",
    explanation: "Internal energy of an ideal gas depends solely on temperature: $U = n C_v T$. In an isothermal process, temperature remains constant ($\\Delta T = 0$), so $\\Delta U = 0$."
  },
  {
    question: "For an ideal gas undergoing a reversible adiabatic process, the quantity that remains constant is:",
    options: [
      "Entropy",
      "Temperature",
      "Internal energy",
      "Pressure"
    ],
    correctAnswer: "Entropy",
    explanation: "In a reversible adiabatic process, $dQ_{\\text{rev}} = 0$, so $dS = \\frac{dQ_{\\text{rev}}}{T} = 0$. Thus, entropy remains constant (the process is isentropic)."
  }
];

// Helper to generate 166 diverse, authentic numerical questions
const numQuestions = [];

// Archetype 1: Adiabatic expansion T2 from T1 and volume ratio (Monoatomic gamma = 5/3)
// T2 = T1 * (1/ratio)^(2/3)
const arch1Data = [
  { T1: 300, ratio: 8, ans: 75, q: "One mole of an ideal monoatomic gas ($\\gamma = 5/3$) at $300\\text{ K}$ expands adiabatically to $8$ times its initial volume. The final temperature of the gas is ______ $\\text{K}$." },
  { T1: 400, ratio: 8, ans: 100, q: "A monoatomic ideal gas ($\\gamma = 5/3$) initially at $400\\text{ K}$ expands adiabatically until its volume is $8$ times larger. The final temperature is ______ $\\text{K}$." },
  { T1: 600, ratio: 8, ans: 150, q: "An ideal monoatomic gas at $600\\text{ K}$ expands adiabatically such that its volume becomes $8$ times its original volume. The final temperature of the gas is ______ $\\text{K}$." },
  { T1: 800, ratio: 8, ans: 200, q: "A sample of monoatomic ideal gas ($\\gamma = 5/3$) at $800\\text{ K}$ undergoes an adiabatic expansion to $8$ times its volume. The final temperature of the gas is ______ $\\text{K}$." },
  { T1: 1000, ratio: 8, ans: 250, q: "An ideal gas ($\\gamma = 5/3$) at $1000\\text{ K}$ expands adiabatically to $8$ times its initial volume. The final temperature is ______ $\\text{K}$." },
  { T1: 1200, ratio: 8, ans: 300, q: "One mole of monoatomic gas at $1200\\text{ K}$ expands adiabatically to $8$ times its initial volume. The final temperature is ______ $\\text{K}$." },
  { T1: 270, ratio: 27, ans: 30, q: "An ideal monoatomic gas ($\\gamma = 5/3$) at $270\\text{ K}$ expands adiabatically to $27$ times its initial volume. The final temperature is ______ $\\text{K}$." },
  { T1: 540, ratio: 27, ans: 60, q: "A monoatomic gas ($\\gamma = 5/3$) at $540\\text{ K}$ expands adiabatically to $27$ times its original volume. The final temperature is ______ $\\text{K}$." },
  { T1: 810, ratio: 27, ans: 90, q: "An ideal monoatomic gas at $810\\text{ K}$ undergoes adiabatic expansion to $27$ times its original volume. The final temperature is ______ $\\text{K}$." },
  { T1: 640, ratio: 64, ans: 40, q: "A monoatomic gas ($\\gamma = 5/3$) at $640\\text{ K}$ expands adiabatically to $64$ times its initial volume. The final temperature is ______ $\\text{K}$." }
];

arch1Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.ans),
    solution: `For an adiabatic process of a monoatomic gas ($\\gamma = 5/3$):\\n$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = T_1 \\left(\\frac{1}{${d.ratio}}\\right)^{2/3}$.\\nEvaluating gives $T_2 = ${d.ans}\\text{ K}$.`
  });
});

// Archetype 2: Adiabatic compression T2 from T1 and compression ratio (Diatomic gamma = 7/5)
// T2 = T1 * (ratio)^(2/5)
const arch2Data = [
  { T1: 300, comp: 32, ans: 1200, q: "An ideal diatomic gas ($\\gamma = 1.4$) at $300\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its initial volume. The final temperature of the gas is ______ $\\text{K}$." },
  { T1: 250, comp: 32, ans: 1000, q: "A diatomic gas ($\\gamma = 7/5$) initially at $250\\text{ K}$ is suddenly compressed to $\\frac{1}{32}$ of its original volume. The final temperature of the gas is ______ $\\text{K}$." },
  { T1: 200, comp: 32, ans: 800, q: "An ideal diatomic gas at $200\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its initial volume. The final temperature is ______ $\\text{K}$." },
  { T1: 350, comp: 32, ans: 1400, q: "A diatomic gas ($\\gamma = 1.4$) at $350\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its volume. The final temperature of the gas is ______ $\\text{K}$." },
  { T1: 400, comp: 32, ans: 1600, q: "One mole of an ideal diatomic gas at $400\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its initial volume. The final temperature is ______ $\\text{K}$." },
  { T1: 150, comp: 32, ans: 600, q: "A diatomic gas ($\\gamma = 7/5$) at $150\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its original volume. The final temperature is ______ $\\text{K}$." },
  { T1: 275, comp: 32, ans: 1100, q: "An ideal diatomic gas ($\\gamma = 1.4$) at $275\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its volume. The final temperature of the gas is ______ $\\text{K}$." },
  { T1: 300, comp: 32, rise: 900, q: "A diatomic ideal gas ($\\gamma = 1.4$) at $300\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its volume. The rise in temperature of the gas is ______ $\\text{K}$." },
  { T1: 250, comp: 32, rise: 750, q: "A diatomic gas ($\\gamma = 7/5$) at $250\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its volume. The rise in temperature of the gas is ______ $\\text{K}$." },
  { T1: 200, comp: 32, rise: 600, q: "An ideal diatomic gas at $200\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its volume. The rise in temperature of the gas is ______ $\\text{K}$." }
];

arch2Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.rise !== undefined ? d.rise : d.ans),
    solution: `For an adiabatic process of a diatomic gas ($\\gamma = 7/5$):\\n$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = ${d.T1} \\times (32)^{0.4} = ${d.T1} \\times (2^5)^{2/5} = ${d.T1} \\times 4 = ${d.ans || (d.T1 * 4)}\\text{ K}$.${d.rise ? `\\nRise in temperature $\\Delta T = ${d.T1 * 4} - ${d.T1} = ${d.rise}\\text{ K}$.` : ''}`
  });
});

// Archetype 3: Adiabatic compression T2 for Monoatomic (gamma = 5/3)
// T2 = T1 * (comp)^(2/3)
const arch3Data = [
  { T1: 300, comp: 8, ans: 1200, q: "A monoatomic ideal gas ($\\gamma = 5/3$) at $300\\text{ K}$ is compressed adiabatically to $\\frac{1}{8}$ of its initial volume. The final temperature is ______ $\\text{K}$." },
  { T1: 250, comp: 8, ans: 1000, q: "An ideal monoatomic gas at $250\\text{ K}$ is compressed adiabatically to $\\frac{1}{8}$ of its original volume. The final temperature is ______ $\\text{K}$." },
  { T1: 200, comp: 8, ans: 800, q: "One mole of a monoatomic gas ($\\gamma = 5/3$) at $200\\text{ K}$ is suddenly compressed to $\\frac{1}{8}$ of its original volume. The final temperature of the gas is ______ $\\text{K}$." },
  { T1: 350, comp: 8, ans: 1400, q: "A monoatomic ideal gas at $350\\text{ K}$ is compressed adiabatically to $\\frac{1}{8}$ of its initial volume. The final temperature of the gas is ______ $\\text{K}$." },
  { T1: 150, comp: 8, ans: 600, q: "An ideal gas with $\\gamma = 5/3$ at $150\\text{ K}$ is compressed adiabatically to $\\frac{1}{8}$ of its volume. The final temperature is ______ $\\text{K}$." },
  { T1: 100, comp: 8, ans: 400, q: "A monoatomic gas at $100\\text{ K}$ is compressed adiabatically to $\\frac{1}{8}$ of its volume. The final temperature is ______ $\\text{K}$." },
  { T1: 300, comp: 8, rise: 900, q: "An ideal monoatomic gas ($\\gamma = 5/3$) at $300\\text{ K}$ is compressed adiabatically to one-eighth of its original volume. The increase in temperature of the gas is ______ $\\text{K}$." },
  { T1: 250, comp: 8, rise: 750, q: "A monoatomic gas at $250\\text{ K}$ is compressed adiabatically to one-eighth of its original volume. The increase in temperature of the gas is ______ $\\text{K}$." },
  { T1: 200, comp: 8, rise: 600, q: "An ideal monoatomic gas at $200\\text{ K}$ is compressed adiabatically to one-eighth of its original volume. The increase in temperature is ______ $\\text{K}$." },
  { T1: 150, comp: 8, rise: 450, q: "A monoatomic ideal gas at $150\\text{ K}$ is compressed adiabatically to one-eighth of its original volume. The increase in temperature is ______ $\\text{K}$." }
];

arch3Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.rise !== undefined ? d.rise : d.ans),
    solution: `For adiabatic compression of a monoatomic gas ($\\gamma = 5/3$):\\n$T_2 = T_1 (V_1/V_2)^{2/3} = ${d.T1} \\times (8)^{2/3} = ${d.T1} \\times 4 = ${d.ans || (d.T1 * 4)}\\text{ K}$.${d.rise ? `\\nIncrease in temperature $\\Delta T = ${d.T1 * 4} - ${d.T1} = ${d.rise}\\text{ K}$.` : ''}`
  });
});

// Archetype 4: Adiabatic pressure from volume ratio (P2 = P1 * (V1/V2)^gamma)
const arch4Data = [
  { P1: 100, comp: 8, gamma: "5/3", ans: 3200, q: "An ideal monoatomic gas ($\\gamma = 5/3$) initially at a pressure of $100\\text{ kPa}$ is compressed adiabatically to $\\frac{1}{8}$ of its initial volume. The final pressure of the gas is ______ $\\text{kPa}$." },
  { P1: 50, comp: 8, gamma: "5/3", ans: 1600, q: "A monoatomic gas at $50\\text{ kPa}$ is compressed adiabatically to one-eighth of its original volume. The final pressure of the gas is ______ $\\text{kPa}$." },
  { P1: 150, comp: 8, gamma: "5/3", ans: 4800, q: "An ideal monoatomic gas at $150\\text{ kPa}$ is compressed adiabatically to $\\frac{1}{8}$ of its original volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 200, comp: 8, gamma: "5/3", ans: 6400, q: "A monoatomic gas ($\\gamma = 5/3$) at $200\\text{ kPa}$ is compressed adiabatically to $\\frac{1}{8}$ of its volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 100, comp: 32, gamma: "7/5", ans: 12800, q: "A diatomic gas ($\\gamma = 1.4$) at an initial pressure of $100\\text{ kPa}$ is compressed adiabatically to $\\frac{1}{32}$ of its volume. The final pressure of the gas is ______ $\\text{kPa}$." },
  { P1: 50, comp: 32, gamma: "7/5", ans: 6400, q: "An ideal diatomic gas at $50\\text{ kPa}$ is compressed adiabatically to $\\frac{1}{32}$ of its initial volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 20, comp: 32, gamma: "7/5", ans: 2560, q: "A diatomic gas ($\\gamma = 1.4$) at $20\\text{ kPa}$ is compressed adiabatically to $\\frac{1}{32}$ of its initial volume. The final pressure of the gas is ______ $\\text{kPa}$." },
  { P1: 10, comp: 32, gamma: "7/5", ans: 1280, q: "One mole of diatomic gas at $10\\text{ kPa}$ is compressed adiabatically to $\\frac{1}{32}$ of its volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 3200, exp: 8, gamma: "5/3", ans: 100, q: "An ideal monoatomic gas ($\\gamma = 5/3$) at an initial pressure of $3200\\text{ kPa}$ expands adiabatically to $8$ times its initial volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 1600, exp: 8, gamma: "5/3", ans: 50, q: "A monoatomic gas at $1600\\text{ kPa}$ expands adiabatically to $8$ times its original volume. The final pressure is ______ $\\text{kPa}$." }
];

arch4Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.ans),
    solution: `For an adiabatic process $P_1 V_1^\\gamma = P_2 V_2^\\gamma \\implies P_2 = P_1 (V_1/V_2)^\\gamma$.\\nEvaluating with $\\gamma = ${d.gamma}$ gives $P_2 = ${d.ans}\\text{ kPa}$.`
  });
});

// Archetype 5: Adiabatic work done W = n R (T1 - T2) / (gamma - 1)
// Let n, deltaT, R, gamma be clean integers
const arch5Data = [
  { n: 1, dT: 100, gamma: 1.4, R: 8.3, ans: 2075, q: "One mole of an ideal diatomic gas ($\\gamma = 1.4$) expands adiabatically such that its temperature falls by $100\\text{ K}$. Given $R = 8.3\\text{ J/(mol}\\cdot\\text{K)}$, the work done by the gas is ______ $\\text{J}$." },
  { n: 2, dT: 50, gamma: 1.4, R: 8.3, ans: 2075, q: "Two moles of an ideal diatomic gas ($\\gamma = 1.4$) undergo adiabatic expansion with a temperature drop of $50\\text{ K}$. Taking $R = 8.3\\text{ J/(mol}\\cdot\\text{K)}$, the work done by the gas is ______ $\\text{J}$." },
  { n: 1, dT: 60, gamma: 1.4, R: 8.3, ans: 1245, q: "One mole of a diatomic gas ($\\gamma = 1.4$) expands adiabatically resulting in a temperature decrease of $60\\text{ K}$. If $R = 8.3\\text{ J/(mol}\\cdot\\text{K)}$, the work done by the gas is ______ $\\text{J}$." },
  { n: 2, dT: 100, gamma: 1.4, R: 8.3, ans: 4150, q: "Two moles of an ideal diatomic gas ($\\gamma = 1.4$) undergo an adiabatic expansion such that the temperature decreases by $100\\text{ K}$. Taking $R = 8.3\\text{ J/(mol}\\cdot\\text{K)}$, the work done by the gas is ______ $\\text{J}$." },
  { n: 3, dT: 40, gamma: 1.4, R: 8.3, ans: 2490, q: "Three moles of a diatomic gas ($\\gamma = 1.4$) expand adiabatically, and the temperature falls by $40\\text{ K}$. If $R = 8.3\\text{ J/(mol}\\cdot\\text{K)}$, the work done by the gas is ______ $\\text{J}$." },
  { n: 1, dT: 100, gamma: 5/3, R: 8.31, ans: 1247, q: "One mole of an ideal monoatomic gas ($\\gamma = 5/3$) expands adiabatically such that its temperature falls by $100\\text{ K}$. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$)" },
  { n: 2, dT: 100, gamma: 5/3, R: 8.31, ans: 2493, q: "Two moles of an ideal monoatomic gas ($\\gamma = 5/3$) expand adiabatically resulting in a temperature drop of $100\\text{ K}$. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$)" },
  { n: 1, dT: 200, gamma: 5/3, R: 8.31, ans: 2493, q: "One mole of a monoatomic ideal gas undergoes an adiabatic expansion where the temperature decreases by $200\\text{ K}$. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$)" },
  { n: 4, dT: 50, gamma: 1.4, R: 8.3, ans: 4150, q: "Four moles of an ideal diatomic gas ($\\gamma = 1.4$) expand adiabatically so that the temperature decreases by $50\\text{ K}$. Taking $R = 8.3\\text{ J/(mol}\\cdot\\text{K)}$, the work done by the gas is ______ $\\text{J}$." },
  { n: 5, dT: 20, gamma: 1.4, R: 8.3, ans: 2075, q: "Five moles of a diatomic ideal gas ($\\gamma = 1.4$) undergo an adiabatic expansion such that its temperature drops by $20\\text{ K}$. Taking $R = 8.3\\text{ J/(mol}\\cdot\\text{K)}$, the work done is ______ $\\text{J}$." }
];

arch5Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.ans),
    solution: `For an adiabatic process:\\n$W = \\frac{n R \\Delta T}{\\gamma - 1}$.\\nSubstituting values: $W = ${d.ans}\\text{ J}$.`
  });
});

// Archetype 6: Isothermal work W = n R T ln(V2/V1)
// Let ln 2 = 0.693, ln 4 = 1.386, ln(e) = 1, etc.
const arch6Data = [
  { n: 1, T: 300, factor: "2", lnVal: 0.693, R: 8.31, ans: 1728, q: "One mole of an ideal gas expands isothermally at $300\\text{ K}$ to twice its initial volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 2 = 0.693$)" },
  { n: 2, T: 300, factor: "2", lnVal: 0.693, R: 8.31, ans: 3456, q: "Two moles of an ideal gas expand isothermally at $300\\text{ K}$ to twice its initial volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 2 = 0.693$)" },
  { n: 1, T: 400, factor: "2", lnVal: 0.693, R: 8.31, ans: 2304, q: "One mole of an ideal gas expands isothermally at $400\\text{ K}$ to twice its initial volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 2 = 0.693$)" },
  { n: 3, T: 300, factor: "2", lnVal: 0.693, R: 8.31, ans: 5184, q: "Three moles of an ideal gas expand isothermally at $300\\text{ K}$ to twice their original volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 2 = 0.693$)" },
  { n: 1, T: 500, factor: "2", lnVal: 0.693, R: 8.31, ans: 2880, q: "One mole of an ideal gas expands isothermally at $500\\text{ K}$ to twice its volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 2 = 0.693$)" },
  { n: 2, T: 400, factor: "2", lnVal: 0.693, R: 8.31, ans: 4608, q: "Two moles of an ideal gas expand isothermally at $400\\text{ K}$ to twice their initial volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 2 = 0.693$)" },
  { n: 1, T: 300, factor: "e", lnVal: 1, R: 8.31, ans: 2493, q: "One mole of an ideal gas expands isothermally at $300\\text{ K}$ to $e$ times its initial volume (where $e$ is base of natural log). The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$)" },
  { n: 2, T: 300, factor: "e", lnVal: 1, R: 8.31, ans: 4986, q: "Two moles of an ideal gas expand isothermally at $300\\text{ K}$ to $e$ times their initial volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$)" },
  { n: 1, T: 300, factor: "e^2", lnVal: 2, R: 8.31, ans: 4986, q: "One mole of an ideal gas expands isothermally at $300\\text{ K}$ to $e^2$ times its initial volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$)" },
  { n: 1, T: 400, factor: "e", lnVal: 1, R: 8.31, ans: 3324, q: "One mole of an ideal gas expands isothermally at $400\\text{ K}$ to $e$ times its initial volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$)" }
];

arch6Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.ans),
    solution: `For isothermal expansion:\\n$W = n R T \\ln\\left(\\frac{V_f}{V_i}\\right) = ${d.n} \\times ${d.R} \\times ${d.T} \\times ${d.lnVal} = ${d.ans}\\text{ J}$.`
  });
});

// Archetype 7: Polytropic molar heat capacity C = Cv + R / (1 - n)
// For monoatomic: Cv = 1.5 R. For diatomic: Cv = 2.5 R.
const arch7Data = [
  { gas: "monoatomic", n: 2, factor: "0.5", ans: "0.5", q: "For a monoatomic ideal gas ($C_v = 1.5R$) undergoing a polytropic process $PV^2 = \\text{constant}$, the molar heat capacity of the gas is $x R$. The value of $x$ is ______ ." },
  { gas: "monoatomic", n: -1, factor: "2", ans: "2", q: "A monoatomic ideal gas ($C_v = 1.5R$) undergoes a process $P/V = \\text{constant}$ (i.e., $PV^{-1} = \\text{constant}$). The molar heat capacity is $x R$. The value of $x$ is ______ ." },
  { gas: "diatomic", n: 2, factor: "1.5", ans: "1.5", q: "For an ideal diatomic gas ($C_v = 2.5R$) undergoing a process $PV^2 = \\text{constant}$, the molar heat capacity is $x R$. The value of $x$ is ______ ." },
  { gas: "diatomic", n: 3, factor: "2", ans: "2", q: "An ideal diatomic gas ($C_v = 2.5R$) undergoes a process $PV^3 = \\text{constant}$. The molar heat capacity is $x R$. The value of $x$ is ______ ." },
  { gas: "monoatomic", n: 3, factor: "1", ans: "1", q: "A monoatomic ideal gas ($C_v = 1.5R$) undergoes a process $PV^3 = \\text{constant}$. The molar heat capacity is $x R$. The value of $x$ is ______ ." },
  { gas: "diatomic", n: -1, factor: "3", ans: "3", q: "A diatomic ideal gas ($C_v = 2.5R$) undergoes a process $P \\propto V$ ($PV^{-1} = \\text{constant}$). The molar heat capacity is $x R$. The value of $x$ is ______ ." },
  { gas: "monoatomic", n: 0.5, factor: "3.5", ans: "3.5", q: "A monoatomic ideal gas ($C_v = 1.5R$) undergoes a process $P\\sqrt{V} = \\text{constant}$ ($PV^{0.5} = \\text{constant}$). The molar heat capacity is $x R$. The value of $x$ is ______ ." },
  { gas: "diatomic", n: 0.5, factor: "4.5", ans: "4.5", q: "A diatomic ideal gas ($C_v = 2.5R$) undergoes a process $P\\sqrt{V} = \\text{constant}$ ($PV^{0.5} = \\text{constant}$). The molar heat capacity is $x R$. The value of $x$ is ______ ." },
  { gas: "monoatomic", n: 4, factor: "1.17", ans: "1.17", q: "For a process $PV^n = \\text{constant}$, if molar heat capacity is zero, the value of $n$ for a monoatomic gas is ______ (expressed as a fraction $5/3 \\approx 1.67$, or for diatomic $1.4$)." }
];

// Let's refine arch7Data with pure integer answers
const cleanArch7 = [
  { q: "For an ideal monoatomic gas ($C_v = \\frac{3}{2}R$) undergoing a process $P/V = \\text{constant}$ ($PV^{-1} = \\text{constant}$), the molar heat capacity is $x R$. The value of $2x$ is ______ .", ans: "4", sol: "$C = C_v + \\frac{R}{1 - (-1)} = \\frac{3}{2}R + \\frac{R}{2} = 2R \\implies x = 2 \\implies 2x = 4$." },
  { q: "For an ideal diatomic gas ($C_v = \\frac{5}{2}R$) undergoing a process $P \\propto V$ ($PV^{-1} = \\text{constant}$), the molar heat capacity is $x R$. The value of $x$ is ______ .", ans: "3", sol: "$C = \\frac{5}{2}R + \\frac{R}{2} = 3R \\implies x = 3$." },
  { q: "A monoatomic ideal gas ($C_v = \\frac{3}{2}R$) undergoes a process $PV^2 = \\text{constant}$. The molar heat capacity is $x R$. The value of $2x$ is ______ .", ans: "1", sol: "$C = \\frac{3}{2}R + \\frac{R}{1 - 2} = \\frac{3}{2}R - R = \\frac{1}{2}R \\implies x = 1/2 \\implies 2x = 1$." },
  { q: "A diatomic ideal gas ($C_v = \\frac{5}{2}R$) undergoes a process $PV^3 = \\text{constant}$. The molar heat capacity is $x R$. The value of $x$ is ______ .", ans: "2", sol: "$C = \\frac{5}{2}R + \\frac{R}{1 - 3} = \\frac{5}{2}R - \\frac{1}{2}R = 2R \\implies x = 2$." },
  { q: "A monoatomic ideal gas ($C_v = \\frac{3}{2}R$) undergoes a process $PV^3 = \\text{constant}$. The molar heat capacity is $x R$. The value of $x$ is ______ .", ans: "1", sol: "$C = \\frac{3}{2}R + \\frac{R}{1 - 3} = \\frac{3}{2}R - \\frac{1}{2}R = R \\implies x = 1$." },
  { q: "An ideal gas undergoes a process $P V^n = \\text{constant}$ where its molar heat capacity is zero. If the gas is diatomic with $\\gamma = 1.4$, the value of $10n$ is ______ .", ans: "14", sol: "When $C = 0$, the process is adiabatic, so $n = \\gamma = 1.4$. Therefore, $10n = 14$." },
  { q: "An ideal gas undergoes a process $P V^n = \\text{constant}$ where molar heat capacity is zero. If the gas is monoatomic with $\\gamma = 5/3$, the value of $3n$ is ______ .", ans: "5", sol: "When $C = 0$, $n = \\gamma = 5/3 \\implies 3n = 5$." },
  { q: "For an ideal gas with $\\gamma = 1.5$, in a polytropic process $PV^2 = \\text{constant}$, the molar heat capacity is $x R$. If $C_v = 2R$, the value of $x$ is ______ .", ans: "1", sol: "$C = C_v + \\frac{R}{1 - 2} = 2R - R = R \\implies x = 1$." },
  { q: "A diatomic gas ($C_v = 2.5R$) expands such that $P \\propto T^3$. The polytropic index $n$ satisfies $P V^n = \\text{constant}$. The value of $10n$ is ______ .", ans: "15", sol: "$P \\propto T^3 \\implies P^{1 - 3/2} \\dots$ For $P V^n = \\text{const}$, $P^{1-n} T^n = \\text{const} \\implies P \\propto T^{n/(n-1)}$. Setting $n/(n-1) = 3 \\implies n = 3n - 3 \\implies 2n = 3 \\implies n = 1.5 \\implies 10n = 15$." },
  { q: "For a process $V \\propto T^2$ for an ideal gas, the polytropic index $n$ in $PV^n = \\text{constant}$ gives $n = -1$. If the gas is monoatomic ($C_v = 1.5R$), the molar heat capacity is $x R$. The value of $x$ is ______ .", ans: "2", sol: "$P = nRT/V \\propto V^2 / V = V \\implies P/V = \\text{const} \\implies n = -1$. $C = 1.5R + R/2 = 2R \\implies x = 2$." }
];

cleanArch7.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: d.ans,
    solution: d.sol
  });
});

// Archetype 8: Adiabatic Bulk Modulus B_adi = gamma * P, Isothermal B_iso = P
const arch8Data = [
  { P: 100, gamma: 1.4, ans: 140, q: "The pressure of air ($\\gamma = 1.4$) is $100\\text{ kPa}$. The adiabatic bulk modulus of air is ______ $\\text{kPa}$." },
  { P: 200, gamma: 1.4, ans: 280, q: "At a pressure of $200\\text{ kPa}$, the adiabatic bulk modulus of a diatomic gas ($\\gamma = 1.4$) is ______ $\\text{kPa}$." },
  { P: 150, gamma: 1.4, ans: 210, q: "The adiabatic bulk modulus of an ideal diatomic gas ($\\gamma = 1.4$) at pressure $150\\text{ kPa}$ is ______ $\\text{kPa}$." },
  { P: 300, gamma: 1.4, ans: 420, q: "The pressure of an ideal diatomic gas ($\\gamma = 1.4$) is $300\\text{ kPa}$. The adiabatic bulk modulus of the gas is ______ $\\text{kPa}$." },
  { P: 120, gamma: 5/3, ans: 200, q: "The pressure of a monoatomic gas ($\\gamma = 5/3$) is $120\\text{ kPa}$. The adiabatic bulk modulus of the gas is ______ $\\text{kPa}$." },
  { P: 180, gamma: 5/3, ans: 300, q: "An ideal monoatomic gas ($\\gamma = 5/3$) is at a pressure of $180\\text{ kPa}$. The adiabatic bulk modulus of the gas is ______ $\\text{kPa}$." },
  { P: 240, gamma: 5/3, ans: 400, q: "The adiabatic bulk modulus of an ideal monoatomic gas ($\\gamma = 5/3$) at a pressure of $240\\text{ kPa}$ is ______ $\\text{kPa}$." },
  { P: 300, gamma: 5/3, ans: 500, q: "The pressure of a monoatomic gas ($\\gamma = 5/3$) is $300\\text{ kPa}$. The adiabatic bulk modulus of the gas is ______ $\\text{kPa}$." },
  { P: 150, ans: 150, q: "The isothermal bulk modulus of an ideal gas at a pressure of $150\\text{ kPa}$ is ______ $\\text{kPa}$." },
  { P: 250, ans: 250, q: "The isothermal bulk modulus of an ideal gas at a pressure of $250\\text{ kPa}$ is ______ $\\text{kPa}$." }
];

arch8Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.ans),
    solution: d.gamma 
      ? `For an adiabatic process, bulk modulus is $B_{\\text{adi}} = \\gamma P = ${d.gamma} \\times ${d.P}\\text{ kPa} = ${d.ans}\\text{ kPa}$.`
      : `For an isothermal process, bulk modulus is $B_{\\text{iso}} = P = ${d.P}\\text{ kPa}$.`
  });
});

// Archetype 9: Slope of adiabatic / isothermal curves: ratio = gamma
const arch9Data = [
  { gamma: 1.4, ans: 14, q: "The slope of an adiabatic $P-V$ curve for a diatomic gas is $\\gamma$ times the slope of the isothermal curve at the same point. If $\\gamma = 1.4$, the value of $10\\gamma$ is ______ ." },
  { gamma: 5/3, ans: 5, q: "For a monoatomic gas, the ratio of adiabatic slope to isothermal slope on a $P-V$ diagram is $\\gamma = 5/3$. The value of $3\\gamma$ is ______ ." },
  { gamma: 4/3, ans: 4, q: "For a triatomic gas with $\\gamma = 4/3$, the ratio of adiabatic slope to isothermal slope on a $P-V$ diagram is $\\gamma$. The value of $3\\gamma$ is ______ ." },
  { gamma: 1.5, ans: 15, q: "If the ratio of the adiabatic slope to the isothermal slope for an ideal gas is $1.5$, the value of $10\\gamma$ is ______ ." },
  { P: 100, V: 2, ans: 50, q: "At a point $(P = 100\\text{ kPa}, V = 2\\text{ m}^3)$, the magnitude of the slope of the isothermal $P-V$ curve $\\left|\\frac{dP}{dV}\\right|$ is ______ $\\text{kPa/m}^3$." },
  { P: 200, V: 4, ans: 50, q: "At a state where $P = 200\\text{ kPa}$ and $V = 4\\text{ m}^3$, the magnitude of the slope of the isothermal curve is ______ $\\text{kPa/m}^3$." },
  { P: 140, V: 2, gamma: 1.4, ans: 98, q: "For a diatomic gas ($\\gamma = 1.4$) at $P = 140\\text{ kPa}$ and $V = 2\\text{ m}^3$, the magnitude of the slope of the adiabatic curve $\\left|\\frac{dP}{dV}\\right|$ is ______ $\\text{kPa/m}^3$." },
  { P: 100, V: 1, gamma: 1.4, ans: 140, q: "For a diatomic gas ($\\gamma = 1.4$) at $P = 100\\text{ kPa}$ and $V = 1\\text{ m}^3$, the magnitude of the slope of the adiabatic curve is ______ $\\text{kPa/m}^3$." },
  { P: 150, V: 1, gamma: 5/3, ans: 250, q: "For a monoatomic gas ($\\gamma = 5/3$) at $P = 150\\text{ kPa}$ and $V = 1\\text{ m}^3$, the magnitude of the slope of the adiabatic curve is ______ $\\text{kPa/m}^3$." },
  { P: 120, V: 2, gamma: 5/3, ans: 100, q: "For a monoatomic gas ($\\gamma = 5/3$) at $P = 120\\text{ kPa}$ and $V = 2\\text{ m}^3$, the magnitude of the slope of the adiabatic curve is ______ $\\text{kPa/m}^3$." }
];

arch9Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.ans),
    solution: `For an isothermal curve, $|dP/dV| = P/V$.\\nFor an adiabatic curve, $|dP/dV| = \\gamma P/V$.\\nEvaluating gives ${d.ans}.`
  });
});

// Archetype 10: Pressure change during isothermal expansion / compression
const arch10Data = [
  { P1: 200, factor: 2, ans: 100, q: "An ideal gas at a pressure of $200\\text{ kPa}$ expands isothermally until its volume doubles. The final pressure of the gas is ______ $\\text{kPa}$." },
  { P1: 300, factor: 3, ans: 100, q: "An ideal gas at $300\\text{ kPa}$ expands isothermally until its volume triples. The final pressure of the gas is ______ $\\text{kPa}$." },
  { P1: 400, factor: 4, ans: 100, q: "An ideal gas at $400\\text{ kPa}$ expands isothermally to $4$ times its initial volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 500, factor: 5, ans: 100, q: "An ideal gas at $500\\text{ kPa}$ expands isothermally to $5$ times its initial volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 150, factor: 2, ans: 300, q: "An ideal gas at $150\\text{ kPa}$ is compressed isothermally to half its original volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 100, factor: 4, ans: 400, q: "An ideal gas at $100\\text{ kPa}$ is compressed isothermally to one-fourth of its initial volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 80, factor: 5, ans: 400, q: "An ideal gas at $80\\text{ kPa}$ is compressed isothermally to one-fifth of its original volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 250, factor: 2, ans: 500, q: "An ideal gas at $250\\text{ kPa}$ is compressed isothermally to half its initial volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 120, factor: 3, ans: 360, q: "An ideal gas at $120\\text{ kPa}$ is compressed isothermally to one-third of its volume. The final pressure is ______ $\\text{kPa}$." },
  { P1: 60, factor: 4, ans: 240, q: "An ideal gas at $60\\text{ kPa}$ is compressed isothermally to one-fourth of its initial volume. The final pressure is ______ $\\text{kPa}$." }
];

arch10Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.ans),
    solution: `For an isothermal process, $P_1 V_1 = P_2 V_2 \\implies P_2 = P_1 (V_1 / V_2) = ${d.ans}\\text{ kPa}$.`
  });
});

// Archetype 11: Speed of sound Laplace correction vs Newton (ratio = sqrt(gamma))
const arch11Data = [
  { gamma: 1.44, ans: 12, q: "If the ratio of specific heats of a gas is $\\gamma = 1.44$, the ratio of the speed of sound predicted by Laplace to that by Newton is $x$. The value of $10x$ is ______ ." },
  { gamma: 1.69, ans: 13, q: "For a gas with $\\gamma = 1.69$, the ratio of Laplace's adiabatic speed of sound to Newton's isothermal speed of sound is $x$. The value of $10x$ is ______ ." },
  { gamma: 1.21, ans: 11, q: "For a gas with $\\gamma = 1.21$, the ratio of the adiabatic speed of sound to the isothermal speed of sound is $x$. The value of $10x$ is ______ ." },
  { v_iso: 280, gamma: 1.44, ans: 336, q: "If Newton's formula gives the speed of sound in a gas as $280\\text{ m/s}$ and $\\gamma = 1.44$, the speed of sound according to Laplace's formula is ______ $\\text{m/s}$." },
  { v_iso: 300, gamma: 1.44, ans: 360, q: "If the isothermal speed of sound in a gas is $300\\text{ m/s}$ and $\\gamma = 1.44$, the adiabatic speed of sound is ______ $\\text{m/s}$." },
  { v_iso: 250, gamma: 1.44, ans: 300, q: "If the speed of sound calculated isothermally is $250\\text{ m/s}$ and $\\gamma = 1.44$, the speed of sound calculated adiabatically is ______ $\\text{m/s}$." }
];

arch11Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.ans),
    solution: `$v_{\\text{adi}} = \\sqrt{\\gamma} v_{\\text{iso}}$. Evaluating gives ${d.ans}.`
  });
});

// Archetype 12: Internal energy changes in adiabatic / isothermal processes
const arch12Data = [
  { W: 500, ans: -500, q: "In an adiabatic expansion, the work done by the gas is $500\\text{ J}$. The change in internal energy of the gas is ______ $\\text{J}$." },
  { W: 800, ans: -800, q: "An ideal gas performs $800\\text{ J}$ of work during an adiabatic expansion. The change in internal energy $\\Delta U$ of the gas is ______ $\\text{J}$." },
  { W_on: 600, ans: 600, q: "During an adiabatic compression, $600\\text{ J}$ of work is done on the gas. The increase in internal energy of the gas is ______ $\\text{J}$." },
  { W_on: 1200, ans: 1200, q: "In an adiabatic compression, $1200\\text{ J}$ of work is performed on the gas. The change in internal energy of the gas is ______ $\\text{J}$." },
  { W_on: 450, ans: 450, q: "An ideal gas is compressed adiabatically with $450\\text{ J}$ of work done on it. The increase in its internal energy is ______ $\\text{J}$." },
  { ans: 0, q: "Two moles of an ideal gas expand isothermally at $300\\text{ K}$ from volume $V_0$ to $4V_0$. The change in internal energy of the gas is ______ $\\text{J}$." },
  { ans: 0, q: "One mole of an ideal gas undergoes an isothermal compression at $400\\text{ K}$ to half its original volume. The change in internal energy of the gas is ______ $\\text{J}$." },
  { ans: 0, q: "An ideal gas undergoes free expansion into an insulated evacuated vessel. The change in internal energy of the gas is ______ $\\text{J}$." },
  { ans: 0, q: "In a free expansion of $3\\text{ moles}$ of an ideal gas, the work done by the gas is ______ $\\text{J}$." },
  { ans: 0, q: "During the free expansion of an ideal gas in an isolated container, the change in temperature of the gas is ______ $\\text{K}$." }
];

arch12Data.forEach(d => {
  numQuestions.push({
    question: d.q,
    correctAnswer: String(d.ans),
    solution: d.ans === 0 
      ? `For an isothermal process, free expansion, or when $T = \\text{const}$, $\\Delta U = 0$ and $W = 0$.`
      : `In an adiabatic process $Q = 0$, so $\\Delta U = -W = ${d.ans}\\text{ J}$.`
  });
});

// Archetype 13: Diverse parameter variations for adiabatic & isothermal work & states
// Generate systematically until total numericals reaches 166
const remainingCount = 166 - numQuestions.length;
console.log(`Current NUM count: ${numQuestions.length}, needed: ${remainingCount}`);

// Let's generate the remaining 100 questions systematically
for (let i = 1; i <= remainingCount; i++) {
  // We can create varied questions on:
  // - Work in adiabatic process for varied moles and temperatures
  // - Pressure and volume relationships
  // - Polytropic equations
  // - Temperature drops
  const type = i % 5;
  if (type === 0) {
    // Work done in adiabatic expansion: W = n * R * dT / (gamma - 1)
    const n = (i % 3) + 1;
    const dT = 20 * ((i % 4) + 1);
    const gamma = 1.4;
    const R = 8.3; // R / 0.4 = 20.75
    const W = Math.round(n * (R / 0.4) * dT);
    numQuestions.push({
      question: `${n} mole(s) of an ideal diatomic gas ($\\gamma = 1.4$) undergo(es) an adiabatic expansion where the temperature decreases by $${dT}\\text{ K}$. Taking $R = 8.3\\text{ J/(mol}\\cdot\\text{K)}$, the work done by the gas is ______ $\\text{J}$.`,
      correctAnswer: String(W),
      solution: `For adiabatic expansion:\\n$W = \\frac{n R \\Delta T}{\\gamma - 1} = \\frac{${n} \\times 8.3 \\times ${dT}}{0.4} = ${W}\\text{ J}$.`
    });
  } else if (type === 1) {
    // Adiabatic expansion temperature: T2 = T1 / (ratio)^(gamma - 1)
    // Monoatomic gamma = 5/3, ratio = 8 -> ratio^(2/3) = 4
    const T1 = 200 + i * 15;
    const T2 = Math.round(T1 / 4);
    numQuestions.push({
      question: `An ideal monoatomic gas ($\\gamma = 5/3$) initially at temperature $T_1 = ${T1}\\text{ K}$ expands adiabatically to $8$ times its original volume. The final temperature of the gas is ______ $\\text{K}$.`,
      correctAnswer: String(T2),
      solution: `$T_2 = T_1 (V_1/V_2)^{\\gamma - 1} = ${T1} \\times (1/8)^{2/3} = ${T1} / 4 = ${T2}\\text{ K}$.`
    });
  } else if (type === 2) {
    // Isothermal work: W = n R T ln 2
    const n = (i % 4) + 1;
    const T = 250 + (i % 5) * 50;
    const W = Math.round(n * 8.31 * T * 0.693);
    numQuestions.push({
      question: `${n} mole(s) of an ideal gas expand(s) isothermally at $T = ${T}\\text{ K}$ to double its volume. The work done by the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 2 = 0.693$)`,
      correctAnswer: String(W),
      solution: `$W = n R T \\ln 2 = ${n} \\times 8.31 \\times ${T} \\times 0.693 = ${W}\\text{ J}$.`
    });
  } else if (type === 3) {
    // Adiabatic bulk modulus B = gamma * P
    const P = 100 + i * 5;
    const B = Math.round(1.4 * P);
    numQuestions.push({
      question: `The pressure of a diatomic ideal gas ($\\gamma = 1.4$) is $${P}\\text{ kPa}$. The adiabatic bulk modulus of the gas is ______ $\\text{kPa}$.`,
      correctAnswer: String(B),
      solution: `$B_{\\text{adi}} = \\gamma P = 1.4 \\times ${P}\\text{ kPa} = ${B}\\text{ kPa}$.`
    });
  } else {
    // Polytropic process work or heat
    const P1 = 100 + i * 10;
    const V1 = 1;
    const V2 = 2;
    // For PV^2 = const, W = (P1 V1 - P2 V2) / (2 - 1) = P1 V1 (1 - 1/2) = P1 / 2
    const W = Math.round(P1 / 2);
    numQuestions.push({
      question: `An ideal gas expands from volume $V_1 = 1\\text{ m}^3$ to $V_2 = 2\\text{ m}^3$ following the polytropic process $PV^2 = \\text{constant}$. If the initial pressure is $P_1 = ${P1}\\text{ kPa}$, the work done by the gas is ______ $\\text{kJ}$.`,
      correctAnswer: String(W),
      solution: `For $PV^2 = \\text{const}$, $P_2 = P_1 (V_1/V_2)^2 = ${P1} / 4\\text{ kPa}$.\\n$W = \\frac{P_1 V_1 - P_2 V_2}{2 - 1} = (${P1} \\times 1) - (${P1/4} \\times 2) = ${P1} - ${P1/2} = ${W}\\text{ kJ}$.`
    });
  }
}

console.log(`Final NUM count: ${numQuestions.length}`);

// Assemble all 203 questions
const allQuestions = [];

arQuestions.forEach((q, i) => {
  allQuestions.push({
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): ${q.assertion}\\nReason (R): ${q.reason}\\nIn the light of the above statements, choose the correct answer from the options given below:`,
    options: AR_OPTIONS,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    type: "ASSERTION_REASON",
    subject: SUBJECT,
    chapter: CHAPTER,
    subtopic: SUBTOPIC,
    class: CLASS,
    difficulty: i % 3 === 0 ? "Hard" : (i % 3 === 1 ? "Medium" : "Easy"),
    examType: "JEE Mains",
    marks: 4,
    negativeMarks: 1
  });
});

mcqQuestions.forEach((q, i) => {
  allQuestions.push({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    type: "MCQ",
    subject: SUBJECT,
    chapter: CHAPTER,
    subtopic: SUBTOPIC,
    class: CLASS,
    difficulty: i % 2 === 0 ? "Medium" : "Hard",
    examType: "JEE Mains",
    marks: 4,
    negativeMarks: 1
  });
});

numQuestions.forEach((q, i) => {
  allQuestions.push({
    question: q.question,
    correctAnswer: q.correctAnswer,
    solution: q.solution,
    type: "NUMERICAL",
    subject: SUBJECT,
    chapter: CHAPTER,
    subtopic: SUBTOPIC,
    class: CLASS,
    difficulty: i % 2 === 0 ? "Medium" : "Hard",
    examType: "JEE Mains",
    marks: 4,
    negativeMarks: 0
  });
});

console.log(`Part 4 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);

const outPath = path.join(__dirname, 'data_jee_thermo_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
