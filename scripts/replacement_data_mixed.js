module.exports = [
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions and Electrochemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "question": "For the cell $Zn(s) | Zn^{2+}(aq, 0.01\\text{ M}) || Cu^{2+}(aq, 1.0\\text{ M}) | Cu(s)$, given $E^\\circ(Zn^{2+}/Zn) = -0.76\\text{ V}$ and $E^\\circ(Cu^{2+}/Cu) = +0.34\\text{ V}$, what is the cell electromotive force ($E_{cell}$) at $298\\text{ K}$? (Use $\\frac{2.303 RT}{F} = 0.0591\\text{ V}$)",
    "options": [
      "$1.159\\text{ V}$",
      "$1.100\\text{ V}$",
      "$1.041\\text{ V}$",
      "$1.218\\text{ V}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The cell reaction is $Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)$, with $n = 2$ electrons transferred.\\n$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.34 - (-0.76) = 1.10\\text{ V}$.\\nUsing the Nernst equation:\\n$E_{cell} = E^\\circ_{cell} - \\frac{0.0591}{n} \\log\\left(\\frac{[Zn^{2+}]}{[Cu^{2+}]}\\right) = 1.10 - \\frac{0.0591}{2} \\log\\left(\\frac{0.01}{1.0}\\right) = 1.10 - 0.02955 \\times (-2) = 1.10 + 0.0591 = 1.1591 \\approx 1.159\\text{ V}$.",
    "subTopic": "Nernst Equation"
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions and Electrochemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "question": "For the electrochemical reaction $Cu(s) + 2Ag^+(aq) \\rightleftharpoons Cu^{2+}(aq) + 2Ag(s)$, given $E^\\circ_{cell} = +0.46\\text{ V}$ at $298\\text{ K}$, what is the equilibrium constant $K_c$? (Take $\\frac{2.303 RT}{F} = 0.0591\\text{ V}$)",
    "options": [
      "$3.7 \\times 10^{15}$",
      "$1.9 \\times 10^{7}$",
      "$2.5 \\times 10^{20}$",
      "$4.8 \\times 10^{10}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Here $n = 2$ electrons are transferred. At equilibrium, $E_{cell} = 0$, so $\\log K_c = \\frac{n E^\\circ_{cell}}{0.0591} = \\frac{2 \\times 0.46}{0.0591} = \\frac{0.92}{0.0591} \\approx 15.567$.\\n$K_c = 10^{15.567} = 10^{0.567} \\times 10^{15} \\approx 3.7 \\times 10^{15}$.",
    "subTopic": "Equilibrium Constant and Cell Potential"
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions and Electrochemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "question": "Given the limiting molar conductivities at $298\\text{ K}$:\\n$\\Lambda_m^\\circ(CH_3COONa) = 91.0\\text{ S cm}^2\\text{mol}^{-1}$, $\\Lambda_m^\\circ(HCl) = 426.0\\text{ S cm}^2\\text{mol}^{-1}$, and $\\Lambda_m^\\circ(NaCl) = 126.0\\text{ S cm}^2\\text{mol}^{-1}$.\\nCalculate $\\Lambda_m^\\circ$ for acetic acid ($CH_3COOH$):",
    "options": [
      "$391.0\\text{ S cm}^2\\text{mol}^{-1}$",
      "$643.0\\text{ S cm}^2\\text{mol}^{-1}$",
      "$209.0\\text{ S cm}^2\\text{mol}^{-1}$",
      "$517.0\\text{ S cm}^2\\text{mol}^{-1}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "According to Kohlrausch's law of independent migration of ions:\\n$\\Lambda_m^\\circ(CH_3COOH) = \\lambda^\\circ(CH_3COO^-) + \\lambda^\\circ(H^+) = \\Lambda_m^\\circ(CH_3COONa) + \\Lambda_m^\\circ(HCl) - \\Lambda_m^\\circ(NaCl)$.\\n$\\Lambda_m^\\circ(CH_3COOH) = 91.0 + 426.0 - 126.0 = 517.0 - 126.0 = 391.0\\text{ S cm}^2\\text{mol}^{-1}$.",
    "subTopic": "Kohlrausch Law"
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions and Electrochemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "question": "The molar conductivity of a $0.025\\text{ M}$ methanoic acid solution is $46.1\\text{ S cm}^2\\text{mol}^{-1}$. If its limiting molar conductivity $\\Lambda_m^\\circ = 400.0\\text{ S cm}^2\\text{mol}^{-1}$, what is its degree of dissociation ($\\alpha$) and acid dissociation constant ($K_a$)?",
    "options": [
      "$\\alpha = 0.115$; $K_a = 3.7 \\times 10^{-4}\\text{ mol L}^{-1}$",
      "$\\alpha = 0.050$; $K_a = 6.25 \\times 10^{-5}\\text{ mol L}^{-1}$",
      "$\\alpha = 0.230$; $K_a = 1.48 \\times 10^{-3}\\text{ mol L}^{-1}$",
      "$\\alpha = 0.011$; $K_a = 3.0 \\times 10^{-6}\\text{ mol L}^{-1}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Degree of dissociation $\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ} = \\frac{46.1}{400.0} = 0.11525 \\approx 0.115$.\\nDissociation constant $K_a = \\frac{C \\alpha^2}{1 - \\alpha} = \\frac{0.025 \\times (0.11525)^2}{1 - 0.11525} = \\frac{0.025 \\times 0.01328}{0.88475} = \\frac{3.32 \\times 10^{-4}}{0.88475} \\approx 3.75 \\times 10^{-4}\\text{ mol L}^{-1}$.",
    "subTopic": "Conductivity and Dissociation Constant"
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions and Electrochemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "question": "Two electrolytic cells containing aqueous $AgNO_3$ and aqueous $CuSO_4$ are connected in series. A constant electric current is passed until $1.08\\text{ g}$ of silver is deposited at the cathode of the first cell. What mass of copper will be simultaneously deposited in the second cell? ($Ag = 108\\text{ g/mol}, Cu = 63.5\\text{ g/mol}$)",
    "options": [
      "$0.3175\\text{ g}$",
      "$0.635\\text{ g}$",
      "$1.08\\text{ g}$",
      "$0.1587\\text{ g}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "By Faraday's second law of electrolysis, the masses deposited by the same quantity of electricity are proportional to their equivalent weights ($W_1 / E_1 = W_2 / E_2$).\\nEquivalent weight of Silver $E_{Ag} = \\frac{108}{1} = 108\\text{ g/eq}$.\\nEquivalent weight of Copper $E_{Cu} = \\frac{63.5}{2} = 31.75\\text{ g/eq}$.\\n$\\frac{W_{Cu}}{E_{Cu}} = \\frac{W_{Ag}}{E_{Ag}} \\implies W_{Cu} = 1.08 \\times \\frac{31.75}{108} = 0.01 \\times 31.75 = 0.3175\\text{ g}$.",
    "subTopic": "Faraday Laws of Electrolysis"
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions and Electrochemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "question": "During the electrolysis of concentrated aqueous sodium chloride (brine) using inert platinum electrodes, chlorine gas is evolved at the anode rather than oxygen gas, even though $E^\\circ(O_2/H_2O) = +1.23\\text{ V}$ is lower than $E^\\circ(Cl_2/Cl^-) = +1.36\\text{ V}$. Why?",
    "options": [
      "Oxidation of water to oxygen is kinetically sluggish and requires a substantial overpotential on platinum",
      "Chloride ions have higher mobility than hydroxide ions",
      "Platinum dissolves in presence of oxygen",
      "The standard free energy change of chlorine discharge is negative"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Thermodynamically, oxidation of water to oxygen ($2H_2O \\rightarrow O_2 + 4H^+ + 4e^-, E^\\circ = +1.23\\text{ V}$) is favored over oxidation of chloride to chlorine ($2Cl^- \\rightarrow Cl_2 + 2e^-, E^\\circ = +1.36\\text{ V}$). However, oxygen evolution involves breaking four bonds and transferring four electrons, making it kinetically very slow. This kinetic barrier imposes a significant overpotential on platinum electrodes, making the effective oxidation potential for oxygen higher than that for chlorine. Thus, $Cl_2$ gas is preferentially evolved.",
    "subTopic": "Electrolysis and Overpotential"
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions and Electrochemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "question": "In a hydrogen-oxygen fuel cell, the theoretical thermodynamic efficiency $\\eta$ is given by:",
    "options": [
      "$\\eta = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ} \\times 100\\%$",
      "$\\eta = \\frac{\\Delta H^\\circ}{\\Delta G^\\circ} \\times 100\\%$",
      "$\\eta = \\frac{T \\Delta S^\\circ}{\\Delta H^\\circ} \\times 100\\%$",
      "$\\eta = \\left(1 - \\frac{T_C}{T_H}\\right) \\times 100\\%$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "A fuel cell converts the free energy of a chemical combustion reaction directly into electrical work without passing through thermal energy. Since electrical work done is $W_{elec} = -\\Delta G^\\circ$ and heat released is $\\Delta H^\\circ$, the theoretical efficiency is $\\eta = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ} \\times 100\\%$. Because $\\Delta S < 0$ for $2H_2 + O_2 \\rightarrow 2H_2O$, $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, and theoretical efficiency is typically around $83\\%$ at $298\\text{ K}$.",
    "subTopic": "Fuel Cells"
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions and Electrochemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "question": "The potential of a standard hydrogen electrode (SHE) immersed in an aqueous solution of $pH = 5.0$ at $298\\text{ K}$ and $1\\text{ atm } H_2$ pressure is:",
    "options": [
      "$-0.2955\\text{ V}$",
      "$+0.2955\\text{ V}$",
      "$-0.0591\\text{ V}$",
      "$0.000\\text{ V}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The electrode reduction reaction is $2H^+(aq) + 2e^- \\rightleftharpoons H_{2(g)}$.\\nUsing Nernst equation at $298\\text{ K}$:\\n$E = E^\\circ - \\frac{0.0591}{1} \\log\\left(\\frac{1}{[H^+]}\\right) = 0 - 0.0591 \\cdot pH = -0.0591 \\times 5.0 = -0.2955\\text{ V}$.",
    "subTopic": "Hydrogen Electrode and pH"
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions and Electrochemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "question": "In the electrochemical mechanism of rusting of iron, what reaction occurs at the cathode region?",
    "options": [
      "$O_2(g) + 4H^+(aq) + 4e^- \\rightarrow 2H_2O(l)$",
      "$Fe(s) \\rightarrow Fe^{2+}(aq) + 2e^-$",
      "$2H_2O(l) + 2e^- \\rightarrow H_2(g) + 2OH^-(aq)$",
      "$Fe^{2+}(aq) + 2e^- \\rightarrow Fe(s)$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Rusting operates as a localized electrochemical cell where iron acts as the anode: $Fe(s) \\rightarrow Fe^{2+}(aq) + 2e^-$. Electrons migrate through the metal to another spot on the surface that acts as the cathode, where dissolved atmospheric oxygen is reduced in the presence of $H^+$ (from carbonic acid $H_2CO_3$): $O_2(g) + 4H^+(aq) + 4e^- \\rightarrow 2H_2O(l)$.",
    "subTopic": "Corrosion Mechanism"
  },
  {
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics",
    "question": "A Carnot engine operates between a source at temperature $T_1 = 600\\text{ K}$ and a sink at $T_2 = 300\\text{ K}$. If the source temperature is raised to $900\\text{ K}$ while the sink is kept unchanged, by what percentage does the efficiency of the engine increase relative to its initial value?",
    "options": [
      "$33.3\\%$",
      "$50.0\\%$",
      "$66.7\\%$",
      "$16.7\\%$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Initial efficiency $\\eta_1 = 1 - \\frac{T_2}{T_1} = 1 - \\frac{300}{600} = 0.50$ ($50\\%$).\\nNew efficiency $\\eta_2 = 1 - \\frac{T_2}{T_1'} = 1 - \\frac{300}{900} = 1 - \\frac{1}{3} = \\frac{2}{3} \\approx 0.6667$ ($66.67\\%$).\\nFractional increase in efficiency $= \\frac{\\eta_2 - \\eta_1}{\\eta_1} = \\frac{2/3 - 1/2}{1/2} = \\frac{1/6}{1/2} = \\frac{1}{3} \\approx 33.33\\%$.",
    "subTopic": "Carnot Engine Efficiency"
  },
  {
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics",
    "question": "One mole of a monoatomic ideal gas ($\\gamma = 5/3$) undergoes a reversible adiabatic expansion from an initial state $(P_0, V_0)$ to a final volume $V = 8V_0$. The work done by the gas during this expansion is:",
    "options": [
      "$\\frac{9}{8} P_0 V_0$",
      "$\\frac{3}{4} P_0 V_0$",
      "$\\frac{7}{4} P_0 V_0$",
      "$\\frac{3}{2} P_0 V_0$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For adiabatic process: $P V^\\gamma = \\text{const} \\implies P_1 = P_0\\left(\\frac{V_0}{8V_0}\\right)^{5/3} = P_0\\left(\\frac{1}{8}\\right)^{5/3} = P_0\\left(2^{-3}\\right)^{5/3} = P_0 \\cdot 2^{-5} = \\frac{P_0}{32}$.\\nWork done $W = \\frac{P_0 V_0 - P_1 V_1}{\\gamma - 1} = \\frac{P_0 V_0 - (P_0/32)(8V_0)}{5/3 - 1} = \\frac{P_0 V_0 - P_0 V_0 / 4}{2/3} = \\frac{\\frac{3}{4} P_0 V_0}{2/3} = \\frac{3}{4} \\times \\frac{3}{2} P_0 V_0 = \\frac{9}{8} P_0 V_0$.",
    "subTopic": "Adiabatic Expansion Work"
  },
  {
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics",
    "question": "An ideal gas is taken through a cyclic process $A \\rightarrow B \\rightarrow C \\rightarrow A$, where $A \\rightarrow B$ is isobaric at pressure $P$, $B \\rightarrow C$ is isochoric at volume $2V$, and $C \\rightarrow A$ is a straight line on the $P-V$ diagram returning to $(2P, V)$. What is the net work done by the gas in one complete cycle?",
    "options": [
      "$- \\frac{1}{2} PV$ (work done on the gas is $\\frac{1}{2} PV$)",
      "$+ \\frac{1}{2} PV$",
      "$- PV$",
      "$+ PV$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The vertices on the $P-V$ plane are $A(P, V)$, $B(P, 2V)$, and $C(2P, 2V)$. The path proceeds $A(P, V) \\rightarrow B(P, 2V) \\rightarrow C(2P, 2V) \\rightarrow A(P, V)$ in a clockwise or counterclockwise direction? Let's check:\\nFrom $A(P,V)$ to $B(P,2V)$ is rightward along horizontal line $P$.\\nFrom $B(P,2V)$ to $C(2P,2V)$ is upward along vertical line $2V$.\\nFrom $C(2P,2V)$ to $A(P,V)$ goes diagonally left and down.\\nThis path forms a triangle traversed counter-clockwise!\\nThe area of the right triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times (2V - V) \\times (2P - P) = \\frac{1}{2} PV$.\\nSince it is traversed in a counter-clockwise direction on the $P-V$ indicator diagram, the net work done by the gas is negative: $W_{net} = -\\frac{1}{2} PV$.",
    "subTopic": "Cyclic Process Work"
  },
  {
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics",
    "question": "A gas mixture consists of $2\\text{ moles}$ of helium (monoatomic, $C_v = \\frac{3}{2}R$) and $1\\text{ mole}$ of oxygen (diatomic, $C_v = \\frac{5}{2}R$). What is the effective adiabatic exponent $\\gamma_{mix} = C_{p,mix}/C_{v,mix}$ of the mixture?",
    "options": [
      "$\\frac{17}{11}$",
      "$\\frac{19}{11}$",
      "$\\frac{15}{11}$",
      "$\\frac{14}{9}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For the mixture:\\n$C_{v,mix} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{2(1.5 R) + 1(2.5 R)}{2 + 1} = \\frac{5.5 R}{3} = \\frac{11}{6} R$.\\n$C_{p,mix} = C_{v,mix} + R = \\frac{11}{6} R + R = \\frac{17}{6} R$.\\nTherefore, $\\gamma_{mix} = \\frac{C_{p,mix}}{C_{v,mix}} = \\frac{17/6 R}{11/6 R} = \\frac{17}{11}$.",
    "subTopic": "Adiabatic Exponent of Gas Mixture"
  },
  {
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics",
    "question": "On a $P-V$ diagram, the slope of an adiabatic curve passing through a given state $(P, V)$ relates to the slope of an isothermal curve passing through the same state as:",
    "options": [
      "$\\left(\\frac{dP}{dV}\\right)_{adia} = \\gamma \\left(\\frac{dP}{dV}\\right)_{iso}$",
      "$\\left(\\frac{dP}{dV}\\right)_{adia} = \\frac{1}{\\gamma} \\left(\\frac{dP}{dV}\\right)_{iso}$",
      "$\\left(\\frac{dP}{dV}\\right)_{adia} = -\\gamma^2 \\left(\\frac{dP}{dV}\\right)_{iso}$",
      "$\\left(\\frac{dP}{dV}\\right)_{adia} = \\left(\\frac{dP}{dV}\\right)_{iso}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For an isothermal process, $PV = \\text{constant} \\implies P + V\\frac{dP}{dV} = 0 \\implies \\left(\\frac{dP}{dV}\\right)_{iso} = -\\frac{P}{V}$.\\nFor an adiabatic process, $PV^\\gamma = \\text{constant} \\implies \\gamma P V^{\\gamma-1} + V^\\gamma \\frac{dP}{dV} = 0 \\implies \\left(\\frac{dP}{dV}\\right)_{adia} = -\\gamma \\frac{P}{V}$.\\nThus, $\\left(\\frac{dP}{dV}\\right)_{adia} = \\gamma \\left(\\frac{dP}{dV}\\right)_{iso}$. Because $\\gamma > 1$, the adiabatic curve is $\\gamma$ times steeper than the isothermal curve.",
    "subTopic": "Slope of Adiabatic vs Isothermal"
  },
  {
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics",
    "question": "A Carnot refrigerator operates between $-13^\\circ\\text{C}$ ($260\\text{ K}$) and $+27^\\circ\\text{C}$ ($300\\text{ K}$). To extract $520\\text{ J}$ of heat from the cold reservoir, the mechanical work required is:",
    "options": [
      "$80\\text{ J}$",
      "$60\\text{ J}$",
      "$100\\text{ J}$",
      "$52\\text{ J}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The coefficient of performance (COP) of a Carnot refrigerator is:\\n$\\beta = \\frac{Q_C}{W} = \\frac{T_C}{T_H - T_C} = \\frac{260}{300 - 260} = \\frac{260}{40} = 6.5$.\\nTherefore, work required is $W = \\frac{Q_C}{\\beta} = \\frac{520\\text{ J}}{6.5} = 80\\text{ J}$.",
    "subTopic": "Carnot Refrigerator COP"
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "Chemical Kinetics",
    "question": "For a first-order chemical reaction, the time required for $99.9\\%$ completion ($t_{99.9\\%}$) is approximately how many times its half-life ($t_{1/2}$)?",
    "options": [
      "$10\\text{ times}$",
      "$3\\text{ times}$",
      "$6.6\\text{ times}$",
      "$20\\text{ times}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For a first-order reaction:\\n$t_{99.9\\%} = \\frac{2.303}{k} \\log\\left(\\frac{100}{100 - 99.9}\\right) = \\frac{2.303}{k} \\log\\left(\\frac{100}{0.1}\\right) = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303 \\times 3}{k} = \\frac{6.909}{k}$.\\nHalf-life $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$.\\nRatio $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} \\approx 9.97 \\approx 10$. Thus $t_{99.9\\%} \\approx 10 \\times t_{1/2}$.",
    "subTopic": "First Order Integrated Rate Law"
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "Chemical Kinetics",
    "question": "The rate constant of a reaction doubles when the temperature increases from $300\\text{ K}$ to $310\\text{ K}$. What is the activation energy ($E_a$) of the reaction? ($R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}, \\ln 2 = 0.693$)",
    "options": [
      "$53.6\\text{ kJ/mol}$",
      "$26.8\\text{ kJ/mol}$",
      "$107.2\\text{ kJ/mol}$",
      "$41.8\\text{ kJ/mol}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Using the Arrhenius equation:\\n$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right) \\implies 0.693 = \\frac{E_a}{8.314}\\left(\\frac{10}{300 \\times 310}\\right)$.\\n$E_a = \\frac{0.693 \\times 8.314 \\times 93000}{10} = 0.693 \\times 8.314 \\times 9300 = 53582\\text{ J/mol} \\approx 53.6\\text{ kJ/mol}$.",
    "subTopic": "Arrhenius Equation"
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "Chemical Kinetics",
    "question": "The acid-catalyzed hydrolysis of ethyl acetate, $CH_3COOC_2H_5 + H_2O \\xrightarrow{H^+} CH_3COOH + C_2H_5OH$, is an example of:",
    "options": [
      "Pseudo-first-order reaction, because water is in large excess so its concentration remains essentially constant",
      "Zero-order reaction, because the rate is independent of both reactants",
      "True second-order reaction with identical orders for ester and water",
      "Third-order reaction involving catalyst collision"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Although two molecules react in the elementary stoichiometric step, water is present in enormous excess ($~55.5\\text{ M}$). Its concentration changes negligibly during the entire reaction course ($[H_2O] \\approx \\text{constant}$). Hence the rate law simplifies to $\\text{Rate} = k'[CH_3COOC_2H_5][H_2O] = k[CH_3COOC_2H_5]$, which behaves as a first-order rate law, designated as a pseudo-first-order reaction.",
    "subTopic": "Pseudo First Order Reactions"
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Principles of Organic Chemistry",
    "topic": "Some Basic Principles of Organic Chemistry",
    "question": "Which of the following carbocations is the MOST stable due to aromaticity (H\u00fcckel's $(4n+2)\\pi$ rule)?",
    "options": [
      "Tropylium cation ($C_7H_7^+$)",
      "Triphenylmethyl cation ($(C_6H_5)_3C^+$)",
      "Benzyl cation ($C_6H_5CH_2^+$)",
      "tert-Butyl cation ($(CH_3)_3C^+$)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The tropylium cation (cycloheptatrienyl cation, $C_7H_7^+$) is a planar, completely conjugated monocyclic ring possessing $6$ delocalized $\\pi$-electrons ($n = 1$ in $4n+2$). By H\u00fcckel's rule, it possesses extraordinary aromatic stabilization energy, making it far more stable than ordinary carbocations and allowing it to form stable crystalline ionic salts (e.g., tropylium bromide).",
    "subTopic": "Carbocation Stability"
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Principles of Organic Chemistry",
    "topic": "Some Basic Principles of Organic Chemistry",
    "question": "In aqueous medium, the correct order of basic strength of methyl-substituted amines is:",
    "options": [
      "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$",
      "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$",
      "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$",
      "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In aqueous solution, the basicity of aliphatic amines is determined by the combined interplay of three effects: inductive effect ($+I$), hydration/solvation energy of the conjugate ammonium cation, and steric hindrance. For methyl-substituted amines, the steric hindrance is small, so secondary amine balances $+I$ and hydration optimally, giving the order: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$. (For ethyl-substituted amines, steric hindrance makes secondary highest followed by tertiary: $(C_2H_5)_2NH > (C_2H_5)_3N > C_2H_5NH_2 > NH_3$).",
    "subTopic": "Basicity of Amines"
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "topic": "Biomolecules",
    "question": "$\\\\alpha$-D-glucopyranose and $\\\\beta$-D-glucopyranose differ in configuration at which specific carbon atom, and what term describes this stereochemical relationship?",
    "options": [
      "At $C-1$; they are anomers",
      "At $C-2$; they are epimers",
      "At $C-4$; they are enantiomers",
      "At $C-5$; they are diastereomers"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "During ring closure (intramolecular hemiacetal formation between the $C-1$ carbonyl aldehyde and the $C-5$ hydroxyl group), the $C-1$ carbon becomes an asymmetric chiral center known as the anomeric carbon. Isomers that differ only in configuration at this anomeric carbon ($C-1$) are called anomers. In $\\alpha$-D-glucopyranose, the $-OH$ group at $C-1$ is trans to the $-CH_2OH$ group (axial/down), whereas in $\\beta$-D-glucopyranose it is equatorial (up).",
    "subTopic": "Carbohydrates - Anomers"
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "topic": "Biomolecules",
    "question": "When a native protein undergoes denaturation (by heating or change in pH), which structural levels are disrupted and which structural level remains intact?",
    "options": [
      "Secondary, tertiary, and quaternary structures are disrupted, but the primary structure remains completely intact",
      "All structures including the primary sequence are completely hydrolyzed",
      "Only the quaternary structure is disrupted while others remain intact",
      "The primary structure is disrupted while helical coils remain unchanged"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Denaturation disrupts the non-covalent interactions (hydrogen bonds, ionic attractions, disulfide bonds, and hydrophobic interactions) that stabilize the secondary ($\\\\alpha$-helix, $\\\\beta$-pleated sheet), tertiary, and quaternary conformations of a protein, causing the molecule to unfold and lose biological activity. However, the strong covalent peptide bonds that define the primary amino acid sequence are not broken during physical denaturation.",
    "subTopic": "Protein Structure and Denaturation"
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts in Chemistry",
    "topic": "Some Basic Concepts in Chemistry",
    "question": "In the Haber process, $56.0\\text{ g}$ of $N_2$ reacts with $18.0\\text{ g}$ of $H_2$ according to $N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$. If the reaction proceeds to completion, what is the limiting reagent and the mass of ammonia produced?",
    "options": [
      "$N_2$ is limiting reagent; $68.0\\text{ g}$ of $NH_3$ formed",
      "$H_2$ is limiting reagent; $102.0\\text{ g}$ of $NH_3$ formed",
      "Both are in exact stoichiometric amounts; $74.0\\text{ g}$ of $NH_3$ formed",
      "$N_2$ is limiting reagent; $34.0\\text{ g}$ of $NH_3$ formed"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Moles of $N_2 = \\frac{56.0\\text{ g}}{28.0\\text{ g/mol}} = 2.00\\text{ mol}$.\\nMoles of $H_2 = \\frac{18.0\\text{ g}}{2.016\\text{ g/mol}} = 8.93\\text{ mol}$.\\nAccording to stoichiometry, $1\\text{ mol } N_2$ requires $3\\text{ mol } H_2$. Therefore, $2.00\\text{ mol } N_2$ requires $6.00\\text{ mol } H_2$. Since $8.93\\text{ mol } H_2$ is available, $H_2$ is in excess and $N_2$ is the limiting reagent.\\nMoles of $NH_3$ produced $= 2 \\times 2.00 = 4.00\\text{ mol}$.\\nMass of $NH_3 = 4.00\\text{ mol} \\times 17.03\\text{ g/mol} = 68.12 \\approx 68.0\\text{ g}$.",
    "subTopic": "Limiting Reagent Stoichiometry"
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Thermodynamics",
    "topic": "Chemical Thermodynamics",
    "question": "Given the standard enthalpies of combustion at $298\\text{ K}$:\\n$\\Delta_c H^\\circ[C(graphite)] = -393.5\\text{ kJ/mol}$,\\n$\\Delta_c H^\\circ[H_2(g)] = -285.8\\text{ kJ/mol}$, and\\n$\\Delta_c H^\\circ[CH_4(g)] = -890.3\\text{ kJ/mol}$.\\nCalculate the standard enthalpy of formation ($\\Delta_f H^\\circ$) of methane ($CH_4$):",
    "options": [
      "$-74.8\\text{ kJ/mol}$",
      "$+74.8\\text{ kJ/mol}$",
      "$-211.0\\text{ kJ/mol}$",
      "$-1569.6\\text{ kJ/mol}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The formation reaction is: $C(graphite) + 2H_2(g) \\rightarrow CH_4(g)$.\\nUsing Hess's law: $\\Delta_f H^\\circ(CH_4) = \\Delta_c H^\\circ[C] + 2\\Delta_c H^\\circ[H_2] - \\Delta_c H^\\circ[CH_4]$.\\n$\\Delta_f H^\\circ(CH_4) = (-393.5) + 2(-285.8) - (-890.3) = -393.5 - 571.6 + 890.3 = -965.1 + 890.3 = -74.8\\text{ kJ/mol}$.",
    "subTopic": "Hess Law and Enthalpy of Formation"
  },
  {
    "subject": "Chemistry",
    "chapter": "Principles Related to Practical Chemistry",
    "topic": "Principles Related to Practical Chemistry",
    "question": "In qualitative inorganic salt analysis, Group II cations ($Cu^{2+}, Pb^{2+}, Bi^{3+}, Cd^{2+}$) are precipitated as sulfides by passing $H_2S$ gas in the presence of dilute $HCl$. Why is dilute $HCl$ added before passing $H_2S$?",
    "options": [
      "Due to the common ion effect of $H^+$, the ionization of weak acid $H_2S$ is suppressed, lowering $[S^{2-}]$ so that only Group II cations (with very low $K_{sp}$) precipitate while Group IV cations remain dissolved",
      "To neutralize any basic impurities that would dissolve sulfide precipitates",
      "To oxidize $S^{2-}$ to colloidal sulfur",
      "To convert metal cations into soluble chloride complexes"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "$H_2S$ is a weak diprotic acid: $H_2S \\rightleftharpoons 2H^+ + S^{2-}$. In the presence of strong acid $HCl$, the high concentration of common ion $H^+$ shifts the equilibrium strongly to the left (common ion effect), sharply depressing the concentration of sulfide ions $[S^{2-}]$. Group II metal sulfides have extremely low solubility products ($K_{sp} \\sim 10^{-30}$ to $10^{-45}$), so their ionic product exceeds $K_{sp}$ and they precipitate. Group IV sulfides ($ZnS, NiS, MnS$) have higher $K_{sp}$ ($10^{-15}$ to $10^{-23}$) and do not precipitate in acidic medium.",
    "subTopic": "Qualitative Salt Analysis"
  },
  {
    "subject": "Physics",
    "chapter": "Electrostatics",
    "topic": "Electrostatics",
    "question": "A thin spherical conducting shell of radius $R$ carries a uniform surface charge $Q$. The electrostatic potential $V(r)$ and electric field $E(r)$ at a distance $r < R$ from the center of the shell are:",
    "options": [
      "$V = \\frac{Q}{4\\pi\\varepsilon_0 R}$ and $E = 0$",
      "$V = 0$ and $E = 0$",
      "$V = \\frac{Q}{4\\pi\\varepsilon_0 r}$ and $E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$",
      "$V = \\frac{Q}{4\\pi\\varepsilon_0 R}$ and $E = \\frac{Q}{4\\pi\\varepsilon_0 R^2}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "By Gauss's law, enclosing any spherical surface of radius $r < R$ inside the hollow shell yields zero enclosed charge ($q_{enc} = 0$), so the electric field is strictly zero everywhere inside: $E(r) = 0$. Since $E = -\\frac{dV}{dr} = 0$, the electrostatic potential is constant throughout the entire interior and equals the potential at the surface: $V(r) = V(R) = \\frac{Q}{4\\pi\\varepsilon_0 R}$.",
    "subTopic": "Conducting Shell Potentials"
  },
  {
    "subject": "Physics",
    "chapter": "Dual Nature of Matter and Radiation",
    "topic": "Dual Nature of Matter and Radiation",
    "question": "When monochromatic radiation of wavelength $\\lambda$ falls on a photosensitive metallic surface, the stopping potential is $3V_0$. When radiation of wavelength $2\\lambda$ falls on the same surface, the stopping potential becomes $V_0$. What is the threshold wavelength ($\\lambda_0$) for this photosensitive material?",
    "options": [
      "$4\\lambda$",
      "$3\\lambda$",
      "$5\\lambda$",
      "$6\\lambda$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "From Einstein's photoelectric equation:\\n$e(3V_0) = \\frac{hc}{\\lambda} - \\Phi$  ...(1)\\n$e(V_0) = \\frac{hc}{2\\lambda} - \\Phi$  ...(2)\\nMultiplying (2) by 3 and subtracting (1):\\n$3e V_0 - 3e V_0 = 3\\left(\\frac{hc}{2\\lambda} - \\Phi\\right) - \\left(\\frac{hc}{\\lambda} - \\Phi\\right) = 0$\\n$\\frac{3hc}{2\\lambda} - 3\\Phi - \\frac{hc}{\\lambda} + \\Phi = 0 \\implies \\frac{hc}{2\\lambda} = 2\\Phi \\implies \\Phi = \\frac{hc}{4\\lambda}$.\\nSince work function $\\Phi = \\frac{hc}{\\lambda_0}$, equating gives $\\lambda_0 = 4\\lambda$.",
    "subTopic": "Photoelectric Effect Threshold"
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits, Continuity & Differentiability",
    "topic": "Limits, Continuity & Differentiability",
    "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{e^x - e^{-x} - 2x}{x - \\sin x}$:",
    "options": [
      "$2$",
      "$1$",
      "$4$",
      "$0$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Using Maclaurin series expansions near $x = 0$:\\n$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$\\n$e^{-x} = 1 - x + \\frac{x^2}{2!} - \\frac{x^3}{3!} + \\frac{x^4}{4!} - \\cdots$\\nNumerator: $(e^x - e^{-x}) - 2x = 2\\left(x + \\frac{x^3}{6} + \\cdots\\right) - 2x = \\frac{x^3}{3} + O(x^5)$.\\nDenominator: $x - \\sin x = x - \\left(x - \\frac{x^3}{6} + O(x^5)\\right) = \\frac{x^3}{6} + O(x^5)$.\\nTherefore, $\\lim_{x \\to 0} \\frac{x^3/3 + O(x^5)}{x^3/6 + O(x^5)} = \\frac{1/3}{1/6} = 2$.",
    "subTopic": "Limits Series Expansion"
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits, Continuity & Differentiability",
    "topic": "Limits, Continuity & Differentiability",
    "question": "Let $f(x) = \\begin{cases} x^2 \\sin\\left(\\frac{1}{x}\\right), & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$. Which statement regarding continuity and differentiability at $x = 0$ is correct?",
    "options": [
      "$f(x)$ is continuous and differentiable at $x = 0$, but $f'(x)$ is not continuous at $x = 0$",
      "$f(x)$ is continuous but not differentiable at $x = 0$",
      "$f(x)$ is discontinuous at $x = 0$",
      "$f(x)$ and $f'(x)$ are both continuous at $x = 0$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "1. Differentiability at $0$: $f'(0) = \\lim_{h \\to 0} \\frac{f(h) - f(0)}{h} = \\lim_{h \\to 0} \\frac{h^2 \\sin(1/h)}{h} = \\lim_{h \\to 0} h \\sin(1/h) = 0$ (since $|\\sin(1/h)| \\le 1$). Thus $f$ is differentiable at $0$ with $f'(0) = 0$.\\n2. For $x \\neq 0$: by product rule, $f'(x) = 2x \\sin(1/x) + x^2 \\cos(1/x) \\cdot (-1/x^2) = 2x \\sin(1/x) - \\cos(1/x)$.\\nAs $x \\to 0$, $2x \\sin(1/x) \\to 0$, but $\\cos(1/x)$ oscillates between $-1$ and $+1$ and does not approach a limit. Hence $\\lim_{x \\to 0} f'(x)$ does not exist, meaning $f'(x)$ is discontinuous at $x = 0$.",
    "subTopic": "Continuity and Differentiability"
  },
  {
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "Integrals",
    "question": "Evaluate the definite integral: $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx$:",
    "options": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{8}$",
      "$1$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Let $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx$.  ...(1)\\nApplying the property $\\int_0^a f(x) \\, dx = \\int_0^a f(a - x) \\, dx$:\\nSince $\\sin(\\pi/2 - x) = \\cos x$ and $\\cos(\\pi/2 - x) = \\sin x$:\\n$I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}} \\, dx$.  ...(2)\\nAdding (1) and (2):\\n$2I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x} + \\sqrt{\\cos x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx = \\int_0^{\\pi/2} 1 \\, dx = \\frac{\\pi}{2} \\implies I = \\frac{\\pi}{4}$.",
    "subTopic": "Definite Integrals Properties"
  },
  {
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "Integrals",
    "question": "Evaluate the indefinite integral: $I = \\int \\frac{dx}{x(x^4 + 1)}$:",
    "options": [
      "$\\frac{1}{4} \\ln\\left|\\frac{x^4}{x^4 + 1}\\right| + C$",
      "$\\frac{1}{4} \\ln\\left|\\frac{x^4 + 1}{x^4}\\right| + C$",
      "$\\frac{1}{2} \\tan^{-1}(x^2) + C$",
      "$\\ln|x^4 + 1| - \\ln|x| + C$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Multiply numerator and denominator by $x^3$:\\n$I = \\int \\frac{x^3 \\, dx}{x^4(x^4 + 1)}$.\\nLet $u = x^4 \\implies du = 4x^3 \\, dx \\implies x^3 \\, dx = \\frac{du}{4}$.\\n$I = \\frac{1}{4} \\int \\frac{du}{u(u + 1)} = \\frac{1}{4} \\int \\left(\\frac{1}{u} - \\frac{1}{u + 1}\\right) du = \\frac{1}{4} \\left(\\ln|u| - \\ln|u + 1|\\right) + C = \\frac{1}{4} \\ln\\left|\\frac{x^4}{x^4 + 1}\\right| + C$.",
    "subTopic": "Indefinite Integration"
  },
  {
    "subject": "Mathematics",
    "chapter": "Trigonometric Identities",
    "topic": "Trigonometric Identities",
    "question": "The exact numerical value of the product $\\cos\\left(\\frac{\\pi}{7}\\right) \\cos\\left(\\frac{2\\pi}{7}\\right) \\cos\\left(\\frac{4\\pi}{7}\\right)$ is:",
    "options": [
      "$-\\frac{1}{8}$",
      "$\\frac{1}{8}$",
      "$-\\frac{1}{4}$",
      "$\\frac{1}{16}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Multiply and divide by $2^3 \\sin(\\pi/7) = 8 \\sin(\\pi/7)$:\\n$P = \\frac{2 \\sin(\\pi/7) \\cos(\\pi/7) \\cdot 2 \\cos(2\\pi/7) \\cdot 2 \\cos(4\\pi/7)}{8 \\sin(\\pi/7)}$.\\nUsing double angle formula $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ repeatedly:\\n$2\\sin(\\pi/7)\\cos(\\pi/7) = \\sin(2\\pi/7)$.\\n$2\\sin(2\\pi/7)\\cos(2\\pi/7) = \\sin(4\\pi/7)$.\\n$2\\sin(4\\pi/7)\\cos(4\\pi/7) = \\sin(8\\pi/7)$.\\n$P = \\frac{\\sin(8\\pi/7)}{8 \\sin(\\pi/7)} = \\frac{\\sin(\\pi + \\pi/7)}{8 \\sin(\\pi/7)} = \\frac{-\\sin(\\pi/7)}{8 \\sin(\\pi/7)} = -\\frac{1}{8}$.",
    "subTopic": "Trigonometric Products"
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets, Relations, and Functions",
    "topic": "Sets, Relations, and Functions",
    "question": "Let $S = \\{1, 2, 3\\}$. What is the total number of equivalence relations that can be defined on set $S$?",
    "options": [
      "$5$",
      "$6$",
      "$8$",
      "$9$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Every equivalence relation on a non-empty set partitions the set into disjoint equivalence classes. Thus, the number of equivalence relations on a set of $n$ elements is equal to the Bell number $B_n$ (the number of partitions of an $n$-element set).\\nFor $n = 3$, the partitions of $\\{1, 2, 3\\}$ are:\\n1. $1$ partition of size $3$: $\\{\\{1, 2, 3\\}\\}$.\\n2. $3$ partitions into $1$ pair and $1$ singleton: $\\{\\{1, 2\\}, \\{3\\}\\}$, $\\{\\{1, 3\\}, \\{2\\}\\}$, $\\{\\{2, 3\\}, \\{1\\}\\}$.\\n3. $1$ partition into $3$ singletons: $\\{\\{1\\}, \\{2\\}, \\{3\\}\\}$.\\nTotal partitions $= 1 + 3 + 1 = 5$. Thus $B_3 = 5$.",
    "subTopic": "Equivalence Relations"
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "Straight Lines",
    "question": "The reflection (image) of the point $P(1, 2)$ in the straight line $x - 2y + 8 = 0$ is:",
    "options": [
      "$(-1, 6)$",
      "$(3, -2)$",
      "$(2, 4)$",
      "$(0, 5)$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Let $(x', y')$ be the image of $P(x_1, y_1) = (1, 2)$ in line $ax + by + c = 0$ with $a = 1, b = -2, c = 8$.\\nUsing the image formula:\\n$\\frac{x' - x_1}{a} = \\frac{y' - y_1}{b} = \\frac{-2(ax_1 + by_1 + c)}{a^2 + b^2}$.\\nHere $ax_1 + by_1 + c = 1(1) - 2(2) + 8 = 5$, and $a^2 + b^2 = 1^2 + (-2)^2 = 5$.\\nTherefore, $\\frac{-2(5)}{5} = -2$.\\n$x' - 1 = 1(-2) \\implies x' = -1$.\\n$y' - 2 = (-2)(-2) = 4 \\implies y' = 6$.\\nThus, the image is $(-1, 6)$.",
    "subTopic": "Reflection in a Straight Line"
  },
  {
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "topic": "Inverse Trigonometric Functions",
    "question": "Evaluate the infinite series: $S = \\sum_{n=1}^\\infty \\tan^{-1}\\left(\\frac{1}{n^2 + n + 1}\\right)$:",
    "options": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{6}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Notice that $\\frac{1}{n^2 + n + 1} = \\frac{(n + 1) - n}{1 + (n + 1)n}$.\\nUsing the identity $\\tan^{-1}\\left(\\frac{x - y}{1 + xy}\\right) = \\tan^{-1} x - \\tan^{-1} y$ for $x, y > 0$:\\n$\\tan^{-1}\\left(\\frac{1}{n^2 + n + 1}\\right) = \\tan^{-1}(n + 1) - \\tan^{-1}(n)$.\\nThis is a telescoping series with partial sum $S_N$:\\n$S_N = \\sum_{n=1}^N [\\tan^{-1}(n + 1) - \\tan^{-1}(n)] = \\tan^{-1}(N + 1) - \\tan^{-1}(1)$.\\nTaking the limit as $N \\to \\infty$:\\n$S = \\lim_{N \\to \\infty} \\tan^{-1}(N + 1) - \\tan^{-1}(1) = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$.",
    "subTopic": "Inverse Trigonometric Series"
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "topic": "Application of Derivatives",
    "question": "The maximum volume of a right circular cylinder that can be inscribed in a sphere of radius $R$ is:",
    "options": [
      "$\\frac{4\\pi R^3}{3\\sqrt{3}}$",
      "$\\frac{2\\pi R^3}{3\\sqrt{3}}$",
      "$\\frac{4\\pi R^3}{9}$",
      "$\\frac{\\pi R^3}{2\\sqrt{3}}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Let the radius of the inscribed cylinder be $r$ and its height be $h$. By Pythagoras theorem in the meridian section: $r^2 + (h/2)^2 = R^2 \\implies r^2 = R^2 - \\frac{h^2}{4}$.\\nVolume of cylinder $V = \\pi r^2 h = \\pi\\left(R^2 - \\frac{h^2}{4}\\right)h = \\pi\\left(R^2 h - \\frac{h^3}{4}\\right)$.\\nFor maximum volume, $\\frac{dV}{dh} = \\pi\\left(R^2 - \\frac{3h^2}{4}\\right) = 0 \\implies h^2 = \\frac{4R^2}{3} \\implies h = \\frac{2R}{\\sqrt{3}}$.\\n$r^2 = R^2 - \\frac{4R^2/3}{4} = R^2 - \\frac{R^2}{3} = \\frac{2R^2}{3}$.\\n$V_{max} = \\pi r^2 h = \\pi \\left(\\frac{2R^2}{3}\\right)\\left(\\frac{2R}{\\sqrt{3}}\\right) = \\frac{4\\pi R^3}{3\\sqrt{3}}$.",
    "subTopic": "Maxima and Minima Applications"
  },
  {
    "subject": "Mathematics",
    "chapter": "Vectors",
    "topic": "Vectors",
    "question": "If $\\vec{a}, \\vec{b}, \\vec{c}$ are three non-coplanar unit vectors such that $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = \\frac{\\vec{b} + \\vec{c}}{\\sqrt{2}}$, what is the angle between $\\vec{a}$ and $\\vec{b}$?",
    "options": [
      "$\\frac{3\\pi}{4}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{2\\pi}{3}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Using the vector triple product expansion: $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$.\\nWe are given: $(\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c} = \\frac{1}{\\sqrt{2}}\\vec{b} + \\frac{1}{\\sqrt{2}}\\vec{c}$.\\nSince $\\vec{b}$ and $\\vec{c}$ are non-collinear, we can equate coefficients:\\n$\\vec{a} \\cdot \\vec{c} = \\frac{1}{\\sqrt{2}}$ and $-(\\vec{a} \\cdot \\vec{b}) = \\frac{1}{\\sqrt{2}} \\implies \\vec{a} \\cdot \\vec{b} = -\\frac{1}{\\sqrt{2}}$.\\nSince $\\vec{a}$ and $\\vec{b}$ are unit vectors: $|\\vec{a}||\\vec{b}|\\cos\\theta = 1 \\cdot 1 \\cdot \\cos\\theta = -\\frac{1}{\\sqrt{2}} \\implies \\theta = \\frac{3\\pi}{4}$.",
    "subTopic": "Vector Triple Product"
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "Probability",
    "question": "Box $A$ contains 2 red balls and 3 white balls. Box $B$ contains 4 red balls and 1 white ball. A box is chosen at random with equal probability and a ball is drawn, which turns out to be red. What is the conditional probability that the ball was drawn from Box $B$?",
    "options": [
      "$\\frac{2}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{4}{7}$",
      "$\\frac{3}{5}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Let $E_1$ be the event of choosing Box $A$ and $E_2$ be choosing Box $B$: $P(E_1) = P(E_2) = \\frac{1}{2}$.\\nLet $R$ be the event of drawing a red ball:\\n$P(R | E_1) = \\frac{2}{5}$, $P(R | E_2) = \\frac{4}{5}$.\\nBy Bayes' Theorem:\\n$P(E_2 | R) = \\frac{P(E_2) P(R | E_2)}{P(E_1) P(R | E_1) + P(E_2) P(R | E_2)} = \\frac{\\frac{1}{2} \\times \\frac{4}{5}}{\\frac{1}{2} \\times \\frac{2}{5} + \\frac{1}{2} \\times \\frac{4}{5}} = \\frac{4/5}{2/5 + 4/5} = \\frac{4}{6} = \\frac{2}{3}$.",
    "subTopic": "Bayes Theorem"
  },
  {
    "subject": "Mathematics",
    "chapter": "Conic Sections (Parabola, Ellipse, Hyperbola)",
    "topic": "Conic Sections (Parabola, Ellipse, Hyperbola)",
    "question": "The equation of a common tangent to the parabola $y^2 = 8x$ and the hyperbola $3x^2 - y^2 = 3$ is:",
    "options": [
      "$2x - y + 1 = 0$",
      "$x - 2y + 4 = 0$",
      "$3x + y - 2 = 0$",
      "$2x + y + 2 = 0$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The hyperbola is $\\frac{x^2}{1} - \\frac{y^2}{3} = 1$, so $a^2 = 1, b^2 = 3$.\\nThe equation of any tangent to the parabola $y^2 = 4(2)x$ with slope $m$ is $y = mx + \\frac{2}{m}$.\\nFor this line to be a tangent to the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the condition of tangency is $c^2 = a^2 m^2 - b^2$:\\n$\\left(\\frac{2}{m}\\right)^2 = 1 \\cdot m^2 - 3 \\implies \\frac{4}{m^2} = m^2 - 3 \\implies m^4 - 3m^2 - 4 = 0$.\\n$(m^2 - 4)(m^2 + 1) = 0 \\implies m^2 = 4 \\implies m = \\pm 2$.\\nFor $m = 2$: $c = \\frac{2}{2} = 1$. The tangent line is $y = 2x + 1 \\implies 2x - y + 1 = 0$.",
    "subTopic": "Common Tangents to Conics"
  }
];
