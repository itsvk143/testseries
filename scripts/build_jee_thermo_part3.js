const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Laws of thermodynamics (zeroth, first, second)";
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
    assertion: "The Zeroth Law of Thermodynamics provides the theoretical foundation for the concept and measurement of temperature.",
    reason: "If two bodies $A$ and $B$ are separately in thermal equilibrium with a third body $C$, then $A$ and $B$ are in thermal equilibrium with each other.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The zeroth law establishes that thermal equilibrium is an equivalence relation. This allows the definition of an intensive state variable—temperature—such that two systems in thermal equilibrium have the same temperature. Thus, (R) correctly explains (A)."
  },
  {
    assertion: "The first law of thermodynamics is essentially a statement of the principle of conservation of energy applied to thermodynamic systems.",
    reason: "The first law states that the net heat supplied to a system equals the increase in its internal energy plus the work done by the system ($\Delta Q = \Delta U + W$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The first law $\\Delta Q = \\Delta U + W$ asserts that energy can neither be created nor destroyed, only transformed between heat, internal energy, and mechanical work. Thus (R) correctly explains (A)."
  },
  {
    assertion: "Internal energy $U$ of an ideal gas is a state function, whereas heat $Q$ and work $W$ are path functions.",
    reason: "The change in internal energy depends only on the initial and final states, whereas the heat exchanged and work done depend on the specific path taken between those states.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For any thermodynamic process, $\\Delta U = U_f - U_i$ is path-independent ($dU$ is an exact differential), while $\\delta Q$ and $\\delta W$ are inexact differentials whose line integrals depend on the path. Hence (R) correctly explains (A)."
  },
  {
    assertion: "For any cyclic process, the net change in internal energy of a system is zero.",
    reason: "Because internal energy is a state property, the cyclic integral $\\oint dU = 0$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A cyclic process returns the system to its initial thermodynamic state ($T_f = T_i, P_f = P_i, V_f = V_i$). Since $U$ is a single-valued state function, $\\Delta U = U_i - U_i = 0$. Hence $\\oint dU = 0$."
  },
  {
    assertion: "A heat engine cannot have an efficiency of $100\\%$ even if there is no friction or mechanical loss.",
    reason: "According to the Kelvin-Planck statement of the Second Law of Thermodynamics, it is impossible to construct a heat engine operating in a cycle that absorbs heat from a single reservoir and converts it completely into mechanical work.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The Kelvin-Planck statement strictly forbids complete conversion of heat into work in a continuous cyclic process; a cold sink is indispensable to reject heat. Therefore, thermal efficiency $\\eta = 1 - Q_C/Q_H < 1$ always."
  },
  {
    assertion: "Heat cannot spontaneously flow from a colder body to a hotter body without an external input of work.",
    reason: "This is the Clausius statement of the Second Law of Thermodynamics.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The Clausius statement explicitly states that it is impossible to construct a cyclic device whose sole effect is the transfer of heat from a lower-temperature reservoir to a higher-temperature reservoir. An external work input is always required."
  },
  {
    assertion: "The Kelvin-Planck statement and the Clausius statement of the Second Law of Thermodynamics are completely equivalent.",
    reason: "Violation of the Kelvin-Planck statement leads directly to a violation of the Clausius statement, and vice versa.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By coupling a hypothetical engine that violates the Kelvin-Planck statement with a standard refrigerator, one can create a device that transfers heat from cold to hot without external work (violating Clausius), proving their strict logical equivalence."
  },
  {
    assertion: "The efficiency of a Carnot engine depends only on the temperatures of the hot source and the cold sink, and is independent of the working substance.",
    reason: "For a Carnot cycle, the ratio of heat exchanged equals the ratio of absolute temperatures: $Q_C / Q_H = T_C / T_H$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Carnot's theorem proves that all reversible engines operating between the same two temperatures have efficiency $\\eta = 1 - T_C / T_H$, which depends exclusively on the reservoir temperatures $T_H$ and $T_C$, completely independent of the working substance."
  },
  {
    assertion: "No heat engine operating between two given temperatures $T_H$ and $T_C$ can have an efficiency greater than a Carnot engine operating between the same temperatures.",
    reason: "Carnot's theorem states that a reversible engine operating between two thermal reservoirs has the maximum possible efficiency.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Carnot's theorem, which is a direct consequence of the Second Law of Thermodynamics, establishes that the Carnot efficiency $\\eta_{\\text{Carnot}} = 1 - T_C/T_H$ represents the theoretical upper limit of efficiency for any heat engine operating between those reservoirs."
  },
  {
    assertion: "When ice melts at $0^\\circ\\text{C}$ into water at $0^\\circ\\text{C}$ at atmospheric pressure, the heat supplied goes into increasing internal energy and doing work against the atmosphere.",
    reason: "During a phase change at constant temperature and pressure, the first law gives $\\Delta Q = \\Delta U + P\\Delta V$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Even though temperature is constant, latent heat is absorbed ($\Delta Q > 0$), bonds are broken (increasing potential part of $\Delta U$), and volume contracts slightly ($\Delta V < 0$, so work is done on the ice). By $\Delta Q = \Delta U + P\Delta V$, the first law is strictly satisfied."
  },
  {
    assertion: "For an ideal gas, the change in internal energy in any process is given by $\\Delta U = n C_v \\Delta T$.",
    reason: "Internal energy of an ideal gas depends solely on its temperature, so $(\\partial U / \\partial V)_T = 0$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By Joule's law, internal energy of an ideal gas is a function of temperature alone: $U = U(T)$. Therefore, whether the process is isobaric, isothermal, adiabatic, or polytropic, the change in internal energy is always $\\Delta U = n C_v \\Delta T$."
  },
  {
    assertion: "The molar heat capacity of an ideal gas at constant pressure $C_p$ is always greater than that at constant volume $C_v$.",
    reason: "At constant pressure, part of the heat supplied is utilized in doing external work against the surroundings during expansion ($C_p = C_v + R$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "At constant volume, all heat supplied increases the internal energy ($dQ = dU$). At constant pressure, heat supplied must increase internal energy AND perform expansion work ($dQ = dU + P\\,dV$). Hence $C_p = C_v + R > C_v$."
  },
  {
    assertion: "The coefficient of performance of a refrigerator can be greater than $1$.",
    reason: "The coefficient of performance is defined as $\\beta = Q_C / W$, and the heat removed from the cold reservoir $Q_C$ can be larger than the mechanical work input $W$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Unlike engine efficiency which must be $< 1$, the coefficient of performance $\\beta = T_C / (T_H - T_C)$ can easily exceed unity when the temperature difference $T_H - T_C$ is small. Both statements are true and (R) explains (A)."
  },
  {
    assertion: "If the door of a working household refrigerator is kept open in a closed, thermally insulated room, the temperature of the room will eventually increase.",
    reason: "The refrigerator expels heat into the room equal to the heat removed from the interior plus the electrical energy consumed by the compressor ($Q_H = Q_C + W$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In an insulated room, the net heat released into the room is $Q_H - Q_C = W$, where $W > 0$ is the electrical work input converted into heat. Thus, the room temperature rises continuously."
  },
  {
    assertion: "In a free expansion of an ideal gas into an evacuated insulated container, the entropy of the universe increases.",
    reason: "Free expansion is an irreversible process, and the entropy of the universe always increases in an irreversible process.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Free expansion cannot be reversed spontaneously without external intervention. For any spontaneous, irreversible process in an isolated system, $\\Delta S_{\\text{universe}} > 0$. Both statements are true and (R) correctly explains (A)."
  },
  {
    assertion: "A Carnot engine operating between $T_H = 600\\text{ K}$ and $T_C = 300\\text{ K}$ has an efficiency of $50\\%$.",
    reason: "The efficiency of a Carnot engine is $\\eta = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300}{600} = 0.50 = 50\\%$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Direct application of Carnot's formula $\\eta = 1 - T_C / T_H$ gives $1 - 300/600 = 0.50 = 50\\%$. Both statements are true and (R) correctly explains (A)."
  },
  {
    assertion: "The change in entropy of an ideal gas in an isothermal reversible expansion is positive.",
    reason: "During an isothermal reversible expansion, heat is absorbed by the gas from the reservoir, so $\\Delta S = \\int \\frac{dQ_{\\text{rev}}}{T} > 0$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "During isothermal expansion, the gas does positive work ($W > 0$). Since $\\Delta U = 0$, the gas absorbs heat $Q_{\\text{rev}} = W > 0$. Hence $\\Delta S = Q_{\\text{rev}}/T = n R \\ln(V_2/V_1) > 0$."
  },
  {
    assertion: "In an adiabatic reversible process, the entropy of the system remains constant.",
    reason: "In a reversible adiabatic process, no heat enters or leaves the system ($dQ_{\\text{rev}} = 0$), so $dS = \\frac{dQ_{\\text{rev}}}{T} = 0$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By definition, an isentropic process is a reversible adiabatic process. Because $dQ_{\\text{rev}} = 0$, the integral $\\Delta S = \\int \\frac{dQ_{\\text{rev}}}{T} = 0$, meaning entropy remains constant."
  },
  {
    assertion: "The First Law of Thermodynamics indicates the direction in which a thermodynamic process can naturally occur.",
    reason: "The First Law states that energy is conserved in all thermodynamic processes.",
    correctAnswer: "(A) is false but (R) is true",
    explanation: "The First Law only ensures conservation of energy; it places no restriction on the direction of heat flow or spontaneity. It is the Second Law of Thermodynamics that dictates the direction of spontaneous processes."
  },
  {
    assertion: "It is impossible to achieve absolute zero temperature in a finite number of thermodynamic operations.",
    reason: "This is a statement of the Third Law of Thermodynamics (Nernst Heat Theorem).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The third law implies that as $T \\to 0$, entropy changes approach zero, making the cooling steps infinitesimally small. Hence, absolute zero cannot be attained in a finite sequence of operations."
  },
  {
    assertion: "Mayer's relation $C_p - C_v = R$ is valid strictly for ideal gases.",
    reason: "For real gases, intermolecular forces and potential energy changes cause $(\\partial U / \\partial V)_T \\neq 0$, modifying the difference between heat capacities.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Mayer's relation relies on $U$ depending only on $T$ ($(\\partial U / \\partial V)_T = 0$) and $PV = nRT$. In real gases, intermolecular attractions contribute to internal energy upon volume change, so $C_p - C_v > R$."
  },
  {
    assertion: "An electric heater submerged in a well-insulated container of water heats the water, but this process cannot be reversed completely without external effects.",
    reason: "Conversion of electrical work into heat is a completely irreversible thermodynamic process.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Work can be converted 100% into heat (Joule heating), but by the Second Law, heat cannot be converted completely back into work in a cycle without producing changes in the surroundings."
  },
  {
    assertion: "When heat $Q$ is supplied to an ideal monoatomic gas at constant pressure, the fraction of heat converted into internal energy is $3/5$.",
    reason: "For a monoatomic gas, $C_v = \\frac{3}{2}R$ and $C_p = \\frac{5}{2}R$, so $\\frac{\\Delta U}{\\Delta Q} = \\frac{C_v}{C_p} = \\frac{3}{5}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "At constant pressure, $\\Delta U = n C_v \\Delta T$ and $\\Delta Q = n C_p \\Delta T$. The fraction converted to internal energy is $\\Delta U / \\Delta Q = C_v / C_p = 1 / \\gamma = (3/2)/(5/2) = 3/5$."
  },
  {
    assertion: "The coefficient of performance of a heat pump is always greater than that of a refrigerator operating between the same two temperatures by exactly $1$.",
    reason: "For a heat pump $\\alpha = Q_H / W$ and for a refrigerator $\\beta = Q_C / W$. Since $Q_H = Q_C + W$, we have $\\alpha = \\beta + 1$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By energy conservation, $Q_H = Q_C + W$. Dividing both sides by $W$ yields $Q_H/W = Q_C/W + 1$, which is $\\alpha = \\beta + 1$. Thus (R) correctly explains (A)."
  },
  {
    assertion: "A perpetual motion machine of the first kind (PMM1) is a machine that violates the First Law of Thermodynamics.",
    reason: "A PMM1 produces continuous mechanical work without consuming an equivalent amount of energy from any source.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A PMM1 creates energy out of nothing, which directly contradicts the First Law of Thermodynamics (conservation of energy). Both statements are true and (R) explains (A)."
  },
  {
    assertion: "A perpetual motion machine of the second kind (PMM2) violates the Second Law of Thermodynamics even though it satisfies the First Law.",
    reason: "A PMM2 converts heat drawn from a single reservoir completely into mechanical work without any heat rejection to a cold reservoir.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A PMM2 conserves energy ($W = Q$), so it does not violate the First Law. However, it violates the Kelvin-Planck statement of the Second Law, as complete conversion of heat to work in a cycle without a cold sink is impossible."
  }
];

// 11 Multiple Choice Questions
const mcqQuestions = [
  {
    question: "A Carnot engine absorbs $1000\\text{ J}$ of heat from a reservoir at $400\\text{ K}$ and rejects heat to a reservoir at $300\\text{ K}$. The work done by the engine per cycle is:",
    options: [
      "$250\\text{ J}$",
      "$750\\text{ J}$",
      "$333\\text{ J}$",
      "$500\\text{ J}$"
    ],
    correctAnswer: "$250\\text{ J}$",
    explanation: "Efficiency of a Carnot engine is:\\n$\\eta = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300}{400} = 0.25 = 25\\%$.\\nWork done per cycle is:\\n$W = \\eta Q_H = 0.25 \\times 1000\\text{ J} = 250\\text{ J}$."
  },
  {
    question: "One mole of an ideal monoatomic gas ($\\gamma = 5/3$) is heated at constant pressure. The fraction of heat supplied that is used to do external work is:",
    options: [
      "$\\frac{2}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$"
    ],
    correctAnswer: "$\\frac{2}{5}$",
    explanation: "At constant pressure:\\n$W = P\\Delta V = n R \\Delta T$\\n$\\Delta Q = n C_p \\Delta T = n \\left(\\frac{5}{2}R\\right) \\Delta T$\\nFraction of heat converted into work is:\\n$\\frac{W}{\\Delta Q} = \\frac{R}{C_p} = \\frac{R}{\\frac{5}{2}R} = \\frac{2}{5}$."
  },
  {
    question: "A Carnot refrigerator operates between temperatures of $250\\text{ K}$ and $300\\text{ K}$. If it consumes $100\\text{ J}$ of mechanical work per cycle, the heat extracted from the cold reservoir is:",
    options: [
      "$500\\text{ J}$",
      "$600\\text{ J}$",
      "$250\\text{ J}$",
      "$120\\text{ J}$"
    ],
    correctAnswer: "$500\\text{ J}$",
    explanation: "The coefficient of performance of a Carnot refrigerator is:\\n$\\beta = \\frac{T_C}{T_H - T_C} = \\frac{250}{300 - 250} = \\frac{250}{50} = 5$.\\nSince $\\beta = \\frac{Q_C}{W}$, we have:\\n$Q_C = \\beta \\times W = 5 \\times 100\\text{ J} = 500\\text{ J}$."
  },
  {
    question: "Two Carnot engines $A$ and $B$ are operated in series. Engine $A$ absorbs heat from a reservoir at $T_1 = 900\\text{ K}$ and rejects heat to an intermediate reservoir at temperature $T$. Engine $B$ absorbs the heat rejected by engine $A$ and rejects it to a sink at $T_2 = 400\\text{ K}$. If both engines have the same efficiency, the intermediate temperature $T$ is:",
    options: [
      "$600\\text{ K}$",
      "$650\\text{ K}$",
      "$500\\text{ K}$",
      "$550\\text{ K}$"
    ],
    correctAnswer: "$600\\text{ K}$",
    explanation: "Efficiency of engine $A$ is $\\eta_A = 1 - \\frac{T}{T_1}$.\\nEfficiency of engine $B$ is $\\eta_B = 1 - \\frac{T_2}{T}$.\\nEquating efficiencies: $1 - \\frac{T}{T_1} = 1 - \\frac{T_2}{T} \\implies \\frac{T}{T_1} = \\frac{T_2}{T} \\implies T^2 = T_1 T_2$.\\nTherefore, $T = \\sqrt{900 \\times 400} = 30 \\times 20 = 600\\text{ K}$."
  },
  {
    question: "If the two engines in the previous question instead perform equal work ($W_A = W_B$), the intermediate temperature $T$ would be:",
    options: [
      "$650\\text{ K}$",
      "$600\\text{ K}$",
      "$700\\text{ K}$",
      "$550\\text{ K}$"
    ],
    correctAnswer: "$650\\text{ K}$",
    explanation: "Work done by engine $A$: $W_A = Q_1 - Q = Q_1 \\left(1 - \\frac{T}{T_1}\\right)$.\\nWork done by engine $B$: $W_B = Q - Q_2 = Q \\left(1 - \\frac{T_2}{T}\\right)$.\\nSince $Q/Q_1 = T/T_1$, $W_A = W_B \\implies T_1 - T = T - T_2 \\implies 2T = T_1 + T_2$.\\n$T = \\frac{T_1 + T_2}{2} = \\frac{900 + 400}{2} = 650\\text{ K}$."
  },
  {
    question: "An ideal gas system is taken from an initial state $i$ to a final state $f$ along path $iaf$ where $Q = 50\\text{ cal}$ and $W = 20\\text{ cal}$. Along path $ibf$, $Q = 36\\text{ cal}$. What is the work done along path $ibf$?",
    options: [
      "$6\\text{ cal}$",
      "$12\\text{ cal}$",
      "$16\\text{ cal}$",
      "$26\\text{ cal}$"
    ],
    correctAnswer: "$6\\text{ cal}$",
    explanation: "Change in internal energy between state $i$ and $f$ is:\\n$\\Delta U = Q_{iaf} - W_{iaf} = 50 - 20 = 30\\text{ cal}$.\\nSince $\\Delta U$ is path-independent:\\n$\\Delta U = Q_{ibf} - W_{ibf} \\implies 30 = 36 - W_{ibf} \\implies W_{ibf} = 36 - 30 = 6\\text{ cal}$."
  },
  {
    question: "Which of the following statements is INCORRECT regarding thermodynamic processes?",
    options: [
      "In an adiabatic process, temperature always remains constant.",
      "In an isothermal process of an ideal gas, change in internal energy is zero.",
      "Work done in a cyclic process equals the area enclosed on the $P-V$ diagram.",
      "The change in internal energy of an ideal gas depends only on the temperature difference."
    ],
    correctAnswer: "In an adiabatic process, temperature always remains constant.",
    explanation: "In an adiabatic process ($Q = 0$), $W = -\\Delta U$. When the gas expands ($W > 0$), internal energy decreases and temperature drops. Temperature remains constant only in an isothermal process."
  },
  {
    question: "The efficiency of a Carnot engine is $\\eta_1$ when operating between $T_1 = 500\\text{ K}$ and $T_2 = 300\\text{ K}$. If the sink temperature is decreased by $100\\text{ K}$ while keeping the source temperature constant, the new efficiency $\\eta_2$ becomes:",
    options: [
      "$0.60$",
      "$0.50$",
      "$0.40$",
      "$0.75$"
    ],
    correctAnswer: "$0.60$",
    explanation: "Initially, $\\eta_1 = 1 - \\frac{300}{500} = 1 - 0.60 = 0.40$.\\nNew sink temperature $T_2' = 300 - 100 = 200\\text{ K}$.\\nNew efficiency $\\eta_2 = 1 - \\frac{200}{500} = 1 - 0.40 = 0.60$."
  },
  {
    question: "A diatomic ideal gas ($\\gamma = 1.4$) is heated at constant pressure. The ratio of change in internal energy to the heat supplied ($\\Delta U / \\Delta Q$) is:",
    options: [
      "$\\frac{5}{7}$",
      "$\\frac{2}{7}$",
      "$\\frac{3}{5}$",
      "$\\frac{2}{5}$"
    ],
    correctAnswer: "$\\frac{5}{7}$",
    explanation: "For a diatomic gas, $C_v = \\frac{5}{2}R$ and $C_p = \\frac{7}{2}R$.\\nAt constant pressure:\\n$\\frac{\\Delta U}{\\Delta Q} = \\frac{n C_v \\Delta T}{n C_p \\Delta T} = \\frac{C_v}{C_p} = \\frac{1}{\\gamma} = \\frac{\\frac{5}{2}R}{\\frac{7}{2}R} = \\frac{5}{7}$."
  },
  {
    question: "A heat pump is used to maintain the temperature of a house at $27^\\circ\\text{C}$ when the outside temperature is $-3^\\circ\\text{C}$. The theoretical maximum coefficient of performance of this heat pump is:",
    options: [
      "$10$",
      "$9$",
      "$11$",
      "$8$"
    ],
    correctAnswer: "$10$",
    explanation: "$T_H = 27 + 273 = 300\\text{ K}$.\\n$T_C = -3 + 273 = 270\\text{ K}$.\\nFor a Carnot heat pump:\\n$\\text{COP}_{\\text{HP}} = \\frac{T_H}{T_H - T_C} = \\frac{300}{300 - 270} = \\frac{300}{30} = 10$."
  },
  {
    question: "During an isothermal expansion of an ideal gas at temperature $T$, the heat absorbed from the surroundings is $Q$. The change in entropy of the gas is:",
    options: [
      "$\\frac{Q}{T}$",
      "$0$",
      "$\\frac{-Q}{T}$",
      "$\\frac{Q}{2T}$"
    ],
    correctAnswer: "$\\frac{Q}{T}$",
    explanation: "For a reversible isothermal process at temperature $T$, entropy change is defined as:\\n$\\Delta S = \\int \\frac{dQ_{\\text{rev}}}{T} = \\frac{1}{T}\\int dQ_{\\text{rev}} = \\frac{Q}{T}$.\\nSince heat is absorbed, $Q > 0$, so $\\Delta S = +Q/T$."
  }
];

// 25 Numerical Questions
const numQuestions = [
  {
    question: "A Carnot engine operates between a source at $500\\text{ K}$ and a sink at $300\\text{ K}$. The efficiency of the engine is ______ $\\%$.",
    correctAnswer: "40",
    solution: "$\\eta = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300}{500} = 1 - 0.60 = 0.40 = 40\\%$."
  },
  {
    question: "A Carnot engine having an efficiency of $25\\%$ absorbs $800\\text{ J}$ of heat from the hot reservoir in each cycle. The heat rejected to the sink per cycle is ______ $\\text{J}$.",
    correctAnswer: "600",
    solution: "$\\eta = 1 - \\frac{Q_C}{Q_H} \\implies 0.25 = 1 - \\frac{Q_C}{800} \\implies \\frac{Q_C}{800} = 0.75 \\implies Q_C = 600\\text{ J}$."
  },
  {
    question: "A refrigerator works between $0^\\circ\\text{C}$ and $27^\\circ\\text{C}$. The theoretical coefficient of performance of this refrigerator is ______ . (Take $0^\\circ\\text{C} = 273\\text{ K}$ and $27^\\circ\\text{C} = 300\\text{ K}$)",
    correctAnswer: "10",
    solution: "$T_C = 273\\text{ K}$, $T_H = 300\\text{ K}$.\\n$\\beta = \\frac{T_C}{T_H - T_C} = \\frac{273}{300 - 273} = \\frac{273}{27} = 10.11 \\approx 10$."
  },
  {
    question: "When $1\\text{ mole}$ of an ideal monoatomic gas is heated at constant volume from $300\\text{ K}$ to $400\\text{ K}$, the change in internal energy of the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$)",
    correctAnswer: "1247",
    solution: "For monoatomic gas: $C_v = \\frac{3}{2}R$.\\n$\\Delta U = n C_v \\Delta T = 1 \\times \\left(\\frac{3}{2} \\times 8.31\\right) \\times (400 - 300) = 1.5 \\times 8.31 \\times 100 = 1246.5 \\approx 1247\\text{ J}$."
  },
  {
    question: "Two moles of an ideal diatomic gas undergo an isobaric heating by $50\\text{ K}$. The heat supplied to the gas is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$ and $C_p = \\frac{7}{2}R$)",
    correctAnswer: "2909",
    solution: "$Q = n C_p \\Delta T = 2 \\times \\left(\\frac{7}{2} \\times 8.31\\right) \\times 50 = 7 \\times 8.31 \\times 50 = 2908.5 \\approx 2909\\text{ J}$."
  },
  {
    question: "A Carnot engine has an efficiency of $40\\%$ when its sink is at $300\\text{ K}$. If the efficiency is to be increased to $50\\%$, keeping the sink temperature constant, the source temperature must be increased by ______ $\\text{K}$.",
    correctAnswer: "100",
    solution: "Initially: $\\eta_1 = 1 - \\frac{300}{T_1} = 0.40 \\implies \\frac{300}{T_1} = 0.60 \\implies T_1 = 500\\text{ K}$.\\nNew efficiency: $\\eta_2 = 1 - \\frac{300}{T_2} = 0.50 \\implies \\frac{300}{T_2} = 0.50 \\implies T_2 = 600\\text{ K}$.\\nIncrease in source temperature: $\\Delta T = 600 - 500 = 100\\text{ K}$."
  },
  {
    question: "An ideal gas system absorbs $1200\\text{ J}$ of heat while performing $400\\text{ J}$ of work. The change in internal energy of the system is ______ $\\text{J}$.",
    correctAnswer: "800",
    solution: "From the First Law of Thermodynamics:\\n$\\Delta U = Q - W = 1200 - 400 = 800\\text{ J}$."
  },
  {
    question: "In an adiabatic compression of a gas, $650\\text{ J}$ of work is done on the gas. The change in internal energy of the gas is ______ $\\text{J}$.",
    correctAnswer: "650",
    solution: "In an adiabatic process, $Q = 0$.\\nWork done BY the gas is $W = -650\\text{ J}$.\\n$\\Delta U = Q - W = 0 - (-650) = +650\\text{ J}$."
  },
  {
    question: "A refrigerator has a coefficient of performance of $4$. To extract $1000\\text{ J}$ of heat from the cold chamber, the work required to be done by the compressor is ______ $\\text{J}$.",
    correctAnswer: "250",
    solution: "$\\beta = \\frac{Q_C}{W} \\implies W = \\frac{Q_C}{\\beta} = \\frac{1000}{4} = 250\\text{ J}$."
  },
  {
    question: "A heat engine absorbs $5000\\text{ J}$ of heat from a hot reservoir and expels $3500\\text{ J}$ of heat to the cold reservoir in each cycle. The efficiency of the engine is ______ $\\%$.",
    correctAnswer: "30",
    solution: "$W = Q_H - Q_C = 5000 - 3500 = 1500\\text{ J}$.\\n$\\eta = \\frac{W}{Q_H} = \\frac{1500}{5000} = 0.30 = 30\\%$."
  },
  {
    question: "One mole of an ideal gas expands isothermally at $400\\text{ K}$ such that its volume doubles. The heat absorbed by the gas during this process is ______ $\\text{J}$. (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 2 = 0.693$)",
    correctAnswer: "2304",
    solution: "In an isothermal process, $\\Delta U = 0$, so $Q = W = n R T \\ln(V_f/V_i) = 1 \\times 8.31 \\times 400 \\times 0.693 = 3324 \\times 0.693 = 2303.5 \\approx 2304\\text{ J}$."
  },
  {
    question: "A Carnot engine works between $600\\text{ K}$ and $300\\text{ K}$. If it produces $600\\text{ J}$ of useful work per cycle, the heat absorbed from the source is ______ $\\text{J}$.",
    correctAnswer: "1200",
    solution: "$\\eta = 1 - \\frac{300}{600} = 0.50$.\\n$Q_H = \\frac{W}{\\eta} = \\frac{600}{0.50} = 1200\\text{ J}$."
  },
  {
    question: "When an ideal monoatomic gas expands isobarically, $500\\text{ J}$ of heat is supplied. The increase in internal energy of the gas is ______ $\\text{J}$.",
    correctAnswer: "300",
    solution: "For a monoatomic gas, $\\Delta U / \\Delta Q = C_v / C_p = \\frac{3/2 R}{5/2 R} = \\frac{3}{5}$.\\n$\\Delta U = \\frac{3}{5} \\times 500\\text{ J} = 300\\text{ J}$."
  },
  {
    question: "In the above problem, the work done by the gas during the isobaric expansion is ______ $\\text{J}$.",
    correctAnswer: "200",
    solution: "$W = \\Delta Q - \\Delta U = 500 - 300 = 200\\text{ J}$."
  },
  {
    question: "A reversible heat engine absorbs $2000\\text{ J}$ of heat from a reservoir at $500\\text{ K}$ and rejects heat to a reservoir at $250\\text{ K}$. The heat rejected by the engine is ______ $\\text{J}$.",
    correctAnswer: "1000",
    solution: "For a reversible engine, $\\frac{Q_C}{Q_H} = \\frac{T_C}{T_H}$.\\n$Q_C = Q_H \\times \\frac{T_C}{T_H} = 2000 \\times \\frac{250}{500} = 1000\\text{ J}$."
  },
  {
    question: "An ideal gas undergoes a cycle where it absorbs $800\\text{ J}$ of heat and does $300\\text{ J}$ of work in path 1, then rejects $200\\text{ J}$ of heat in path 2. Over the complete cycle, the net work done by the gas is ______ $\\text{J}$.",
    correctAnswer: "600",
    solution: "Over a complete cycle, $\\Delta U_{\\text{cycle}} = 0$.\\n$W_{\\text{net}} = Q_{\\text{net}} = Q_1 + Q_2 = 800 - 200 = 600\\text{ J}$."
  },
  {
    question: "A heat pump absorbs $1800\\text{ J}$ of heat from the cold outside environment and requires $600\\text{ J}$ of electrical work. The heat delivered to the room is ______ $\\text{J}$.",
    correctAnswer: "2400",
    solution: "From energy conservation: $Q_H = Q_C + W = 1800 + 600 = 2400\\text{ J}$."
  },
  {
    question: "For an ideal gas, the ratio of molar heat capacities is $\\gamma = 1.5$. The molar heat capacity at constant volume in terms of the universal gas constant $R$ is $C_v = x R$. The value of $x$ is ______ .",
    correctAnswer: "2",
    solution: "Since $\\gamma = C_p / C_v = 1 + R / C_v$:\\n$1.5 = 1 + R / C_v \\implies R / C_v = 0.5 = 1/2 \\implies C_v = 2R$. Hence $x = 2$."
  },
  {
    question: "A Carnot engine operates with a source at $127^\\circ\\text{C}$ and a sink at $27^\\circ\\text{C}$. The percentage efficiency of the engine is ______ $\\%$.",
    correctAnswer: "25",
    solution: "$T_H = 127 + 273 = 400\\text{ K}$, $T_C = 27 + 273 = 300\\text{ K}$.\\n$\\eta = 1 - \\frac{300}{400} = 1 - 0.75 = 0.25 = 25\\%$."
  },
  {
    question: "The coefficient of performance of a domestic refrigerator is $5$. If the power of the motor is $200\\text{ W}$, the rate at which heat is extracted from the interior is ______ $\\text{W}$.",
    correctAnswer: "1000",
    solution: "$\\beta = \\frac{dQ_C / dt}{dW / dt} \\implies \\frac{dQ_C}{dt} = \\beta \\times P = 5 \\times 200\\text{ W} = 1000\\text{ W}$."
  },
  {
    question: "A gas expands from an initial volume of $0.01\\text{ m}^3$ to $0.04\\text{ m}^3$ at a constant pressure of $2\\times 10^5\\text{ Pa}$. During this process, $9000\\text{ J}$ of heat is supplied. The change in internal energy of the gas is ______ $\\text{J}$.",
    correctAnswer: "3000",
    solution: "$W = P\\Delta V = 2\\times 10^5 \\times (0.04 - 0.01) = 2\\times 10^5 \\times 0.03 = 6000\\text{ J}$.\\nFrom the first law: $\\Delta U = Q - W = 9000 - 6000 = 3000\\text{ J}$."
  },
  {
    question: "Two Carnot engines operate between temperatures $T_1 = 800\\text{ K}$, $T = 600\\text{ K}$ and $T_2 = 450\\text{ K}$. The ratio of the efficiency of the first engine to the second engine is ______ .",
    correctAnswer: "1",
    solution: "$\\eta_1 = 1 - \\frac{600}{800} = 1 - 0.75 = 0.25$.\\n$\\eta_2 = 1 - \\frac{450}{600} = 1 - 0.75 = 0.25$.\\nRatio $\\eta_1 / \\eta_2 = 0.25 / 0.25 = 1$."
  },
  {
    question: "In a cyclic heat engine, the heat absorbed from the hot reservoir is $4000\\text{ J}$ and the net work done is $1200\\text{ J}$. The heat rejected to the sink per cycle is ______ $\\text{J}$.",
    correctAnswer: "2800",
    solution: "$Q_C = Q_H - W = 4000 - 1200 = 2800\\text{ J}$."
  },
  {
    question: "An ideal gas absorbs $750\\text{ J}$ of heat and its internal energy increases by $250\\text{ J}$. The work done by the gas is ______ $\\text{J}$.",
    correctAnswer: "500",
    solution: "$W = Q - \\Delta U = 750 - 250 = 500\\text{ J}$."
  },
  {
    question: "A Carnot engine has an efficiency of $20\\%$. If the temperature of the sink is $240\\text{ K}$, the temperature of the source is ______ $\\text{K}$.",
    correctAnswer: "300",
    solution: "$\\eta = 1 - \\frac{T_C}{T_H} \\implies 0.20 = 1 - \\frac{240}{T_H} \\implies \\frac{240}{T_H} = 0.80 \\implies T_H = \\frac{240}{0.80} = 300\\text{ K}$."
  }
];

// Recheck Question 3 of numQuestions:
// Refrigerator between 0 C (273 K) and 27 C (300 K) -> beta = 273 / 27 = 10.11
// Let's use 260 K and 300 K -> beta = 260 / (300 - 260) = 260 / 40 = 6.5 or 250 K and 300 K -> beta = 250 / 50 = 5.
numQuestions[2] = {
  question: "A Carnot refrigerator operates between a cold reservoir at $250\\text{ K}$ and a warm reservoir at $300\\text{ K}$. The coefficient of performance of this refrigerator is ______ .",
  correctAnswer: "5",
  solution: "For a Carnot refrigerator:\\n$\\beta = \\frac{T_C}{T_H - T_C} = \\frac{250}{300 - 250} = \\frac{250}{50} = 5$."
};

// Assemble 62 questions
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

console.log(`Part 3 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);

const outPath = path.join(__dirname, 'data_jee_thermo_part3.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
