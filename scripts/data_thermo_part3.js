// Chemical Thermodynamics - Part 3
// Subtopics:
// 1. Gibbs free energy (ΔG) (47 questions)
// 2. Spontaneity (47 questions)

function createQ(subTopic, question, options, correctIndex, explanation, difficulty = "Medium", questionType = "MCQ") {
  return {
    question,
    options,
    correctAnswer: options[correctIndex],
    correctOption: correctIndex,
    explanation,
    subject: "Chemistry",
    chapter: "Chemical Thermodynamics",
    subTopic,
    difficulty,
    questionType,
    type: questionType === "ASSERTION_REASON" ? "assertion-reason" : "multiple-choice",
    source: "JEE Main & NEET Chapter Bank",
    targetExams: ["JEE Main", "NEET"]
  };
}

function getGibbsFreeEnergyQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Gibbs free energy (ΔG)", text, opts, ans, exp, diff, type));

  add(
    "Gibbs free energy ($G$) is defined mathematically in terms of enthalpy ($H$), absolute temperature ($T$), and entropy ($S$) as:",
    ["$G = H - TS$", "$G = H + TS$", "$G = U - TS$", "$G = H - T\\Delta S$"],
    0,
    "By thermodynamic definition, Gibbs free energy is $G = H - TS$.",
    "Easy"
  );
  add(
    "At constant temperature and pressure, the change in Gibbs free energy is given by the Gibbs-Helmholtz equation:",
    ["$\\Delta G = \\Delta H - T\\Delta S$", "$\\Delta G = \\Delta H + T\\Delta S$", "$\\Delta G = \\Delta U - T\\Delta S$", "$\\Delta G = \\Delta H - S\\Delta T$"],
    0,
    "At constant temperature, $\\Delta G = \\Delta H - T\\Delta S$.",
    "Easy"
  );
  add(
    "The physical significance of decrease in Gibbs free energy ($-\\Delta G$) at constant temperature and pressure is that it equals:",
    ["The maximum useful non-expansion (non-$PV$) work obtainable from the system", "The total heat evolved", "The expansion work done against atmosphere", "The total internal energy change"],
    0,
    "$-\\Delta G = w_{\\text{useful, max}}$, representing electrical, mechanical, or chemical work other than pressure-volume expansion work.",
    "Easy"
  );
  add(
    "The criterion for spontaneity of a process at CONSTANT TEMPERATURE AND PRESSURE is:",
    ["$\\Delta G_{\\text{sys}} < 0$", "$\\Delta G_{\\text{sys}} > 0$", "$\\Delta G_{\\text{sys}} = 0$", "$\\Delta H_{\\text{sys}} < 0$ always"],
    0,
    "At constant $T$ and $P$, a process is spontaneous if and only if the Gibbs free energy of the system decreases: $\\Delta G_{\\text{sys}} < 0$.",
    "Easy"
  );
  add(
    "At chemical or physical equilibrium at constant $T$ and $P$, the value of $\\Delta G$ is:",
    ["Zero ($\\Delta G = 0$)", "Negative ($\\Delta G < 0$)", "Positive ($\\Delta G > 0$)", "Minimum negative infinity"],
    0,
    "At equilibrium, the system is in a state of minimum Gibbs energy, so $\\Delta G = 0$.",
    "Easy"
  );
  add(
    "The standard Gibbs free energy change $\\Delta G^\\circ$ is related to the equilibrium constant $K$ of a reaction by:",
    ["$\\Delta G^\\circ = -RT \\ln K = -2.303 RT \\log_{10} K$", "$\\Delta G^\\circ = +RT \\ln K$", "$\\Delta G^\\circ = -nFE^\\circ$", "$\\Delta G^\\circ = \\frac{RT}{\\ln K}$"],
    0,
    "At equilibrium, $\\Delta G = \\Delta G^\\circ + RT \\ln K = 0 \\implies \\Delta G^\\circ = -RT \\ln K = -2.303 RT \\log_{10} K$.",
    "Easy"
  );
  add(
    "If a reaction has an equilibrium constant $K > 1$, then its standard Gibbs free energy change $\\Delta G^\\circ$ must be:",
    ["Negative ($\\Delta G^\\circ < 0$)", "Positive ($\\Delta G^\\circ > 0$)", "Zero", "Undefined"],
    0,
    "Since $\\ln K > 0$ when $K > 1$, $\\Delta G^\\circ = -RT \\ln K < 0$.",
    "Easy"
  );
  add(
    "If $\\Delta G^\\circ = 0$ for a chemical reaction at temperature $T$, what is the equilibrium constant $K$?",
    ["$K = 1$", "$K = 0$", "$K = \\infty$", "$K = -1$"],
    0,
    "$\\Delta G^\\circ = -RT \\ln K = 0 \\implies \\ln K = 0 \\implies K = e^0 = 1$.",
    "Easy"
  );
  add(
    "The standard Gibbs free energy of formation $\\Delta_f G^\\circ$ of an element in its standard state at $298\\text{ K}$ and $1\\text{ bar}$ is assigned as:",
    ["Zero", "$-285.8\\text{ kJ/mol}$", "$+100\\text{ kJ/mol}$", "Dependent on atomic mass"],
    0,
    "By convention, the standard Gibbs free energy of formation of pure elements in their most stable allotropic reference state is zero.",
    "Easy"
  );
  add(
    "For an electrochemical cell with standard cell potential $E^\\circ_{\\text{cell}}$ and $n$ moles of electrons transferred, the relation to $\\Delta G^\\circ$ is:",
    ["$\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}}$", "$\\Delta G^\\circ = +n F E^\\circ_{\\text{cell}}$", "$\\Delta G^\\circ = -\\frac{n F}{E^\\circ_{\\text{cell}}}$", "$\\Delta G^\\circ = -\\frac{E^\\circ_{\\text{cell}}}{n F}$"],
    0,
    "Electrical work done by a galvanic cell is $w_{\\text{elec}} = n F E_{\\text{cell}}$. Since $-\\Delta G = w_{\\text{useful}}$, $\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}}$.",
    "Easy"
  );
  add(
    "A galvanic cell operates spontaneously when:",
    ["$E_{\\text{cell}} > 0$ and $\\Delta G < 0$", "$E_{\\text{cell}} < 0$ and $\\Delta G > 0$", "$E_{\\text{cell}} = 0$ and $\\Delta G = 0$", "$E_{\\text{cell}} > 0$ and $\\Delta G > 0$"],
    0,
    "Because $\\Delta G = -nFE_{\\text{cell}}$, a positive cell electromotive force ($E_{\\text{cell}} > 0$) corresponds to a negative free energy change ($\\Delta G < 0$, spontaneous).",
    "Easy"
  );
  add(
    "For a reaction with $\\Delta H = -100\\text{ kJ}$ and $\\Delta S = -200\\text{ J/K}$, at what temperature will the reaction reach equilibrium ($\\Delta G = 0$)?",
    ["$500\\text{ K}$", "$200\\text{ K}$", "$300\\text{ K}$", "$1000\\text{ K}$"],
    0,
    "At equilibrium $\\Delta G = \\Delta H - T\\Delta S = 0 \\implies T = \\frac{\\Delta H}{\\Delta S} = \\frac{-100 \\times 10^3\\text{ J}}{-200\\text{ J/K}} = 500\\text{ K}$.",
    "Easy"
  );
  add(
    "For the same reaction ($\\Delta H = -100\\text{ kJ}, \\Delta S = -200\\text{ J/K}$), the reaction is spontaneous at:",
    ["Temperatures below $500\\text{ K}$", "Temperatures above $500\\text{ K}$", "All temperatures", "No temperature"],
    0,
    "$\\Delta G = \\Delta H - T\\Delta S = -100000 + 200T$. For $\\Delta G < 0$, $200T < 100000 \\implies T < 500\\text{ K}$.",
    "Medium"
  );
  add(
    "A reaction has $\\Delta H = +30.56\\text{ kJ/mol}$ and $\\Delta S = +66.0\\text{ J/(mol}\\cdot\\text{K)}$. Above which temperature will this reaction become spontaneous?",
    ["$463\\text{ K}$", "$300\\text{ K}$", "$298\\text{ K}$", "$550\\text{ K}$"],
    0,
    "$T > \\frac{\\Delta H}{\\Delta S} = \\frac{30560\\text{ J/mol}}{66.0\\text{ J/(mol}\\cdot\\text{K)}} \\approx 463\\text{ K}$.",
    "Easy"
  );
  add(
    "For the phase change $\\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{H}_2\\text{O(g)}$ at $100^\\circ\\text{C}$ and $1\\text{ atm}$ pressure, what is $\\Delta G$?",
    ["Zero", "Positive", "Negative", "Undefined"],
    0,
    "At normal boiling point ($100^\\circ\\text{C}, 1\\text{ atm}$), liquid water and water vapor exist in dynamic equilibrium, so $\\Delta G = 0$.",
    "Easy"
  );
  add(
    "For the freezing of water at $-10^\\circ\\text{C}$ and $1\\text{ atm}$, the change in Gibbs free energy $\\Delta G$ is:",
    ["Negative ($\\Delta G < 0$)", "Positive ($\\Delta G > 0$)", "Zero", "Equal to $\\Delta H$"],
    0,
    "At $-10^\\circ\\text{C}$ (supercooled water), freezing into ice is a spontaneous process, so $\\Delta G < 0$.",
    "Easy"
  );
  add(
    "For the melting of ice at $-10^\\circ\\text{C}$ and $1\\text{ atm}$, $\\Delta G$ is:",
    ["Positive ($\\Delta G > 0$, non-spontaneous)", "Negative ($\\Delta G < 0$)", "Zero", "Undefined"],
    0,
    "Ice does not melt spontaneously below its freezing point ($0^\\circ\\text{C}$), so melting is non-spontaneous: $\\Delta G > 0$.",
    "Easy"
  );
  add(
    "The variation of $\\Delta G$ with temperature at constant pressure is related to entropy by:",
    ["$\\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P = -\\Delta S$", "$\\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P = +\\Delta S$", "$\\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P = -\\Delta H$", "$\\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P = +\\Delta V$"],
    0,
    "From the fundamental relation $dG = V dP - S dT$, at constant pressure $\\left(\\frac{\\partial G}{\\partial T}\\right)_P = -S$. For a process, $\\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P = -\\Delta S$.",
    "Medium"
  );
  add(
    "The variation of Gibbs free energy with pressure at constant temperature is given by:",
    ["$\\left(\\frac{\\partial G}{\\partial P}\\right)_T = V$", "$\\left(\\frac{\\partial G}{\\partial P}\\right)_T = -S$", "$\\left(\\frac{\\partial G}{\\partial P}\\right)_T = H$", "$\\left(\\frac{\\partial G}{\\partial P}\\right)_T = -V$"],
    0,
    "From $dG = V dP - S dT$, taking the partial derivative with respect to $P$ at constant $T$ gives $\\left(\\frac{\\partial G}{\\partial P}\\right)_T = V$.",
    "Easy"
  );
  add(
    "For $1\\text{ mole}$ of an ideal gas expanding isothermally from $P_1$ to $P_2$, the change in Gibbs free energy is:",
    ["$\\Delta G = RT \\ln(P_2 / P_1)$", "$\\Delta G = RT \\ln(P_1 / P_2)$", "$\\Delta G = -RT \\ln(P_2 / P_1)$", "$\\Delta G = 0$"],
    0,
    "$dG = V dP = \\frac{RT}{P} dP$. Integrating gives $\\Delta G = RT \\ln(P_2 / P_1)$. In expansion $P_2 < P_1$, so $\\Delta G < 0$.",
    "Medium"
  );
  add(
    "The Gibbs-Helmholtz equation relating $\\Delta G$ and $\\Delta H$ is expressed as:",
    ["$\\left[\\frac{\\partial(\\Delta G / T)}{\\partial T}\\right]_P = -\\frac{\\Delta H}{T^2}$", "$\\left[\\frac{\\partial(\\Delta G / T)}{\\partial T}\\right]_P = +\\frac{\\Delta H}{T^2}$", "$\\Delta G = \\Delta H + T \\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P$", "Both A and C are correct"],
    3,
    "Both forms are classic Gibbs-Helmholtz formulations: $\\Delta G = \\Delta H + T\\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P$ and $\\frac{\\partial(\\Delta G/T)}{\\partial T} = -\\frac{\\Delta H}{T^2}$.",
    "Hard"
  );
  add(
    "For the dimerization reaction $2\\text{NO}_2\\text{(g)} \\rightleftharpoons \\text{N}_2\\text{O}_4\\text{(g)}$, $\\Delta H^\circ < 0$ and $\\Delta S^\circ < 0$. The reaction becomes non-spontaneous at:",
    ["High temperatures", "Low temperatures", "All temperatures", "It is always spontaneous"],
    0,
    "Since $\\Delta S < 0$, the $-T\\Delta S$ term is positive ($+T|\\Delta S|$). At high temperatures, $+T|\\Delta S|$ dominates over $-\\Delta H$, making $\\Delta G > 0$ (non-spontaneous).",
    "Medium"
  );
  add(
    "The van 't Hoff equation describes how the equilibrium constant $K$ changes with temperature:",
    ["$\\frac{d\\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2}$", "$\\frac{d\\ln K}{dT} = -\\frac{\\Delta H^\\circ}{RT^2}$", "$\\frac{d\\ln K}{dT} = \\frac{\\Delta G^\\circ}{RT^2}$", "$\\frac{d\\ln K}{dT} = \\frac{\\Delta S^\\circ}{R}$"],
    0,
    "The van 't Hoff equation is $\\frac{d\\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2}$. Integrated: $\\ln\\frac{K_2}{K_1} = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.",
    "Medium"
  );
  add(
    "For an endothermic reaction ($\\Delta H^\\circ > 0$), as temperature increases, the equilibrium constant $K$:",
    ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
    0,
    "By van 't Hoff equation, $\\frac{d\\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2} > 0$. Thus $\\ln K$ (and $K$) increases with increasing temperature (Le Chatelier's principle).",
    "Easy"
  );
  add(
    "For an exothermic reaction ($\\Delta H^\\circ < 0$), as temperature increases, the equilibrium constant $K$:",
    ["Decreases", "Increases", "Remains unchanged", "Becomes infinite"],
    0,
    "Since $\\Delta H^\\circ < 0$, $\\frac{d\\ln K}{dT} < 0$. Higher temperature shifts the equilibrium towards reactants, decreasing $K$.",
    "Easy"
  );
  add(
    "What is $\\Delta G^\\circ$ for a reaction with $K = 10^4$ at $298\\text{ K}$? ($2.303 RT = 5.71\\text{ kJ/mol}$ at $298\\text{ K}$)",
    ["$-22.84\\text{ kJ/mol}$", "$+22.84\\text{ kJ/mol}$", "$-5.71\\text{ kJ/mol}$", "$-11.42\\text{ kJ/mol}$"],
    0,
    "$\\Delta G^\\circ = -2.303 RT \\log_{10}(K) = -5.71 \\times \\log_{10}(10^4) = -5.71 \\times 4 = -22.84\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "If $\\Delta G^\\circ = -57.1\\text{ kJ/mol}$ at $298\\text{ K}$, what is the value of equilibrium constant $K$? ($2.303 RT = 5.71\\text{ kJ/mol}$)",
    ["$10^{10}$", "$10^5$", "$10^{-10}$", "$10^{-5}$"],
    0,
    "$-57.1 = -5.71 \\log_{10} K \\implies \\log_{10} K = 10 \\implies K = 10^{10}$.",
    "Easy"
  );
  add(
    "Which of the following is true for the reaction quotient $Q$ and equilibrium constant $K$ when $\\Delta G < 0$?",
    ["$Q < K$", "$Q > K$", "$Q = K$", "$Q = 1$"],
    0,
    "$\\Delta G = \\Delta G^\\circ + RT \\ln Q = -RT \\ln K + RT \\ln Q = RT \\ln(Q/K)$. For $\\Delta G < 0$, $\\ln(Q/K) < 0 \\implies Q < K$ (forward reaction is spontaneous).",
    "Medium"
  );
  add(
    "When $Q > K$, the reaction proceeds spontaneously in which direction?",
    ["Reverse direction (reactants form)", "Forward direction (products form)", "Remains at equilibrium", "Explosive decomposition"],
    0,
    "When $Q > K$, $\\Delta G = RT \\ln(Q/K) > 0$ for the forward reaction, meaning the reverse reaction is spontaneous ($\\Delta G_{\\text{rev}} < 0$).",
    "Easy"
  );
  add(
    "The standard cell potential for the Daniell cell $\\text{Zn(s)} + \\text{Cu}^{2+}\\text{(aq)} \\rightarrow \\text{Zn}^{2+}\\text{(aq)} + \\text{Cu(s)}$ is $+1.10\\text{ V}$. What is $\\Delta G^\\circ$? ($F = 96500\\text{ C/mol}$)",
    ["$-212.3\\text{ kJ/mol}$", "$+212.3\\text{ kJ/mol}$", "$-106.15\\text{ kJ/mol}$", "$-424.6\\text{ kJ/mol}$"],
    0,
    "$n = 2$. $\\Delta G^\\circ = -n F E^\\circ = -2 \\times 96500 \\times 1.10 = -212300\\text{ J/mol} = -212.3\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "For the autoionization of water $2\\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{H}_3\\text{O}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$ at $298\\text{ K}$, $K_w = 1.0 \\times 10^{-14}$. What is $\\Delta G^\\circ$? ($2.303 RT = 5.71\\text{ kJ/mol}$)",
    ["$+79.94\\text{ kJ/mol}$", "$-79.94\\text{ kJ/mol}$", "$+57.1\\text{ kJ/mol}$", "$+14.0\\text{ kJ/mol}$"],
    0,
    "$\\Delta G^\\circ = -2.303 RT \\log_{10}(10^{-14}) = -5.71 \\times (-14) = +79.94\\text{ kJ/mol}$ (non-spontaneous under standard $1\\text{ M}$ conditions).",
    "Medium"
  );
  add(
    "If a reaction has $\\Delta G^\\circ > 0$, does this mean the reaction can NEVER proceed?",
    ["No, it only means products cannot reach standard $1\\text{ M}$ concentration; it proceeds forward until $Q = K$", "Yes, it can never proceed under any condition", "Yes, because energy is not conserved", "No, but it requires infinite catalyst"],
    0,
    "$\\Delta G^\\circ > 0$ means $K < 1$. A small amount of products will still form spontaneously starting from pure reactants until $Q = K$ (equilibrium is reached).",
    "Medium"
  );
  add(
    "Which plot of $\\ln K$ vs $1/T$ gives a straight line with slope equal to $-\\frac{\\Delta H^\\circ}{R}$?",
    ["van 't Hoff plot", "Arrhenius plot", "Lineweaver-Burk plot", "Langmuir isotherm"],
    0,
    "From $\\ln K = -\\frac{\\Delta H^\\circ}{R}\\frac{1}{T} + \\frac{\\Delta S^\\circ}{R}$, plotting $\\ln K$ against $1/T$ gives a straight line of slope $-\\frac{\\Delta H^\\circ}{R}$ and intercept $\\frac{\\Delta S^\\circ}{R}$.",
    "Medium"
  );
  add(
    "In a van 't Hoff plot ($\\ln K$ vs $1/T$), a POSITIVE slope indicates that the reaction is:",
    ["Exothermic ($\\Delta H^\\circ < 0$)", "Endothermic ($\\Delta H^\\circ > 0$)", "Athermal ($\\Delta H^\\circ = 0$)", "Irreversible"],
    0,
    "Slope $= -\\Delta H^\\circ / R$. If slope $> 0$, then $-\\Delta H^\\circ > 0 \\implies \\Delta H^\\circ < 0$ (exothermic).",
    "Medium"
  );
  add(
    "In a van 't Hoff plot, a NEGATIVE slope indicates that the reaction is:",
    ["Endothermic ($\\Delta H^\\circ > 0$)", "Exothermic ($\\Delta H^\\circ < 0$)", "Spontaneous at all temperatures", "Non-spontaneous"],
    0,
    "Slope $= -\\Delta H^\\circ / R < 0 \\implies \\Delta H^\\circ > 0$ (endothermic).",
    "Medium"
  );
  add(
    "The maximum work that can be derived from a chemical process occurring at constant volume and temperature is given by the decrease in:",
    ["Helmholtz free energy ($A = U - TS$)", "Gibbs free energy ($G$)", "Enthalpy ($H$)", "Internal energy ($U$)"],
    0,
    "At constant $T$ and $V$, maximum work (including $PV$ work) is given by $-\\Delta A = w_{\\text{max}}$, where $A$ is the Helmholtz free energy (or work function).",
    "Medium"
  );
  add(
    "For the reaction $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$, $\\Delta H^\circ = -92.4\\text{ kJ}$ and $\\Delta S^\circ = -198.3\\text{ J/K}$. Calculate $\\Delta G^\circ$ at $298\\text{ K}$:",
    ["$-33.3\\text{ kJ}$", "$+33.3\\text{ kJ}$", "$-92.4\\text{ kJ}$", "$-151.5\\text{ kJ}$"],
    0,
    "$\\Delta G^\circ = \\Delta H^\circ - T\\Delta S^\circ = -92.4 - [298 \\times (-0.1983)] = -92.4 + 59.09 = -33.31\\text{ kJ}$.",
    "Easy"
  );
  add(
    "The partial molar Gibbs free energy of a component in a mixture is known as its:",
    ["Chemical potential ($\\mu_i$)", "Partial pressure", "Activity coefficient", "Fugacity"],
    0,
    "By definition, $\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\neq i}}$, representing the chemical potential of component $i$.",
    "Medium"
  );
  add(
    "At equilibrium, the chemical potential $\\mu$ of a substance in two phases (e.g. liquid and vapor) must be:",
    ["Equal in both phases ($\\mu_{\\text{liquid}} = \\mu_{\\text{vapor}}$)", "Higher in vapor phase", "Higher in liquid phase", "Zero in both phases"],
    0,
    "Phase equilibrium requires equality of chemical potentials: $\\mu_A(\\alpha) = \\mu_A(\\beta)$, ensuring no net mass transfer between phases.",
    "Medium"
  );
  add(
    "Coupling of a thermodynamically non-spontaneous reaction with an exergonic reaction is widely utilized in biology. The overall reaction is spontaneous if:",
    ["$\\Delta G_{\\text{net}} = \\Delta G_1 + \\Delta G_2 < 0$", "$\\Delta H_1 + \\Delta H_2 < 0$", "$\\Delta S_1 + \\Delta S_2 < 0$", "Both reactions are endothermic"],
    0,
    "ATP hydrolysis ($\\Delta G^\\circ \\approx -30.5\\text{ kJ/mol}$) drives endergonic cellular reactions when the combined free energy change is negative.",
    "Easy"
  );
  add(
    "For the vaporization of benzene $\\text{C}_6\\text{H}_6\\text{(l)} \\rightleftharpoons \\text{C}_6\\text{H}_6\\text{(g)}$ at its normal boiling point $80^\\circ\\text{C}$ ($353\\text{ K}$), the values of $\\Delta G$ and $\\Delta G^\\circ$ are:",
    ["$\\Delta G = 0$ and $\\Delta G^\\circ = 0$", "$\\Delta G < 0$ and $\\Delta G^\\circ < 0$", "$\\Delta G = 0$ and $\\Delta G^\\circ > 0$", "$\\Delta G > 0$ and $\\Delta G^\\circ = 0$"],
    0,
    "At normal boiling point ($1\\text{ atm}$), the system is at equilibrium under standard pressure, so both $\\Delta G = 0$ and $\\Delta G^\\circ = -RT \\ln(1) = 0$.",
    "Medium"
  );
  add(
    "Assertion (A): For an isolated system, the condition of equilibrium is $\\Delta S_{\\text{isolated}} = 0$ (at maximum entropy).\nReason (R): In an isolated system, no heat exchange occurs, so $\\Delta S_{\\text{total}} = \\Delta S_{\\text{sys}}$, which is maximized at equilibrium.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "At equilibrium in an isolated system, entropy reaches its absolute maximum, so virtual variations give $dS = 0$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): For a spontaneous reaction at constant $T$ and $P$, $\\Delta G$ must be negative.\nReason (R): $\\Delta G = -T\\Delta S_{\\text{total}}$, so a decrease in Gibbs free energy corresponds to an increase in total entropy of the universe.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since $\\Delta S_{\\text{surr}} = -\\Delta H / T$, $\\Delta S_{\\text{total}} = \\Delta S_{\\text{sys}} - \\Delta H / T = -\\frac{\\Delta H - T\\Delta S}{T} = -\\frac{\\Delta G}{T}$. Thus $\\Delta G < 0 \\iff \\Delta S_{\\text{total}} > 0$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): An endothermic reaction can be spontaneous at high temperatures.\nReason (R): In $\\Delta G = \\Delta H - T\\Delta S$, if $\\Delta S > 0$, the $-T\\Delta S$ term becomes more negative as $T$ increases and overcomes $\\Delta H > 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "At high $T$, $T\\Delta S > \\Delta H$, resulting in $\\Delta G < 0$. Both are true and (R) is the correct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): A reaction with $\\Delta G^\\circ > 0$ can still proceed in the forward direction.\nReason (R): Spontaneity depends on $\\Delta G$ (which includes actual concentrations via $Q$), not on $\\Delta G^\\circ$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "$\\Delta G = \\Delta G^\\circ + RT \\ln Q$. If the concentration of products is very low ($Q \\ll K$), $\\Delta G$ can be negative even if $\\Delta G^\\circ > 0$. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): For an exothermic reaction, increasing temperature decreases the value of the equilibrium constant $K$.\nReason (R): According to the van 't Hoff equation, $\\frac{d\\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2}$, which is negative when $\\Delta H^\\circ < 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The derivative is negative for exothermic reactions, so $\\ln K$ decreases as $T$ increases. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Standard cell potential $E^\\circ$ is an intensive property, while standard Gibbs energy $\\Delta G^\\circ$ is an extensive property.\nReason (R): Doubling the stoichiometric coefficients doubles $\\Delta G^\\circ$ and $n$, leaving $E^\\circ = -\\Delta G^\\circ / (nF)$ unchanged.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Cell potential is voltage (energy per charge), which is intensive. Gibbs energy is total energy, which is extensive. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getSpontaneityQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Spontaneity", text, opts, ans, exp, diff, type));

  add(
    "A reaction will be spontaneous at ALL temperatures if:",
    ["$\\Delta H < 0$ (exothermic) and $\\Delta S > 0$ (entropy increases)", "$\\Delta H > 0$ and $\\Delta S > 0$", "$\\Delta H < 0$ and $\\Delta S < 0$", "$\\Delta H > 0$ and $\\Delta S < 0$"],
    0,
    "When $\\Delta H < 0$ and $\\Delta S > 0$, both terms in $\\Delta G = \\Delta H - T\\Delta S$ are negative at any positive absolute temperature $T$, making $\\Delta G < 0$ unconditionally.",
    "Easy"
  );
  add(
    "A reaction will be NON-SPONTANEOUS at all temperatures if:",
    ["$\\Delta H > 0$ (endothermic) and $\\Delta S < 0$ (entropy decreases)", "$\\Delta H < 0$ and $\\Delta S > 0$", "$\\Delta H > 0$ and $\\Delta S > 0$", "$\\Delta H < 0$ and $\\Delta S < 0$"],
    0,
    "When $\\Delta H > 0$ and $\\Delta S < 0$, $\\Delta G = \\Delta H - T\\Delta S = (+ ) - T(-) = (+) + (+) > 0$ at all temperatures.",
    "Easy"
  );
  add(
    "A reaction having $\\Delta H > 0$ and $\\Delta S > 0$ will be spontaneous at:",
    ["High temperatures ($T > \\Delta H / \\Delta S$)", "Low temperatures ($T < \\Delta H / \\Delta S$)", "All temperatures", "No temperature"],
    0,
    "At high temperatures, the positive $T\\Delta S$ term exceeds the positive $\\Delta H$, making $\\Delta G = \\Delta H - T\\Delta S < 0$.",
    "Easy"
  );
  add(
    "A reaction having $\\Delta H < 0$ and $\\Delta S < 0$ will be spontaneous at:",
    ["Low temperatures ($T < \\Delta H / \\Delta S$)", "High temperatures ($T > \\Delta H / \\Delta S$)", "All temperatures", "No temperature"],
    0,
    "At low temperatures, the favorable negative $\\Delta H$ outweighs the unfavorable $-T\\Delta S > 0$, making $\\Delta G < 0$.",
    "Easy"
  );
  add(
    "Which of the following is a classic example of a spontaneous, entropy-driven process?",
    ["Melting of ice at room temperature ($25^\\circ\\text{C}$)", "Freezing of water at $+10^\\circ\\text{C}$", "Combustion of charcoal", "Synthesis of ammonia at $1000\\text{ K}$"],
    0,
    "Melting of ice is endothermic ($\\Delta H > 0$). At room temperature ($T > 273\\text{ K}$), $T\\Delta S > \\Delta H$, driven entirely by the entropy increase of liquid water.",
    "Easy"
  );
  add(
    "Which of the following is an example of an enthalpy-driven spontaneous process at room temperature?",
    ["Combustion of methane ($\\Delta H \\ll 0$)", "Evaporation of water", "Dissolution of $\\text{NH}_4\\text{Cl}$ in water", "Sublimation of camphor"],
    0,
    "Combustion reactions release tremendous amounts of heat ($\\Delta H \\ll 0$), driving the reaction spontaneously forward regardless of small entropy effects.",
    "Easy"
  );
  add(
    "A process is in a state of thermodynamic equilibrium when:",
    ["$\\Delta S_{\\text{univ}} = 0$ and $\\Delta G_{\\text{sys}} = 0$", "$\\Delta S_{\\text{univ}} > 0$", "$\\Delta G_{\\text{sys}} < 0$", "$\\Delta H_{\\text{sys}} = 0$"],
    0,
    "At equilibrium, entropy of the universe has reached its maximum ($\\Delta S_{\\text{univ}} = 0$) and Gibbs energy is minimized ($\\Delta G = 0$).",
    "Easy"
  );
  add(
    "For the decomposition reaction $\\text{CaCO}_3\\text{(s)} \\rightarrow \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$, $\\Delta H = +178\\text{ kJ/mol}$ and $\\Delta S = +160\\text{ J/(mol}\\cdot\\text{K)}$. The reaction becomes spontaneous above:",
    ["$1112.5\\text{ K}$ ($839.5^\\circ\\text{C}$)", "$298\\text{ K}$", "$500\\text{ K}$", "$2000\\text{ K}$"],
    0,
    "$T_{\\text{eq}} = \\frac{\\Delta H}{\\Delta S} = \\frac{178000\\text{ J/mol}}{160\\text{ J/(mol}\\cdot\\text{K)}} = 1112.5\\text{ K}$.",
    "Medium"
  );
  add(
    "Can an endothermic process with a DECREASE in entropy be spontaneous?",
    ["No, never at any temperature", "Yes, at very high temperatures", "Yes, at very low temperatures", "Yes, if catalyst is added"],
    0,
    "If $\\Delta H > 0$ and $\\Delta S < 0$, $\\Delta G = \\Delta H - T\\Delta S > 0$ at all temperatures. No catalyst or temperature can make it spontaneous.",
    "Easy"
  );
  add(
    "The spontaneous flow of heat from a body at higher temperature to one at lower temperature is driven by:",
    ["An increase in the total entropy of the universe", "A decrease in total energy", "Conservation of momentum", "Decrease in internal energy"],
    0,
    "Heat transfer from $T_H$ to $T_C$ results in $\\Delta S_{\\text{total}} = -\\frac{q}{T_H} + \\frac{q}{T_C} = q\\left(\\frac{1}{T_C} - \\frac{1}{T_H}\\right) > 0$.",
    "Easy"
  );
  add(
    "Why does liquid water evaporate spontaneously at room temperature even though its boiling point is $100^\\circ\\text{C}$?",
    ["The partial pressure of water vapor in dry air is much lower than its equilibrium vapor pressure ($Q < K$)", "Evaporation is exothermic at room temperature", "Entropy decreases during evaporation", "Air contains catalyst for evaporation"],
    0,
    "Because unsaturated air has $P_{\\text{H}_2\\text{O}} < P^\\circ_{\\text{vapor}}$, the reaction quotient $Q < K$, making $\\Delta G = RT \\ln(Q/K) < 0$ (spontaneous evaporation).",
    "Medium"
  );
  add(
    "For the reaction $2\\text{A(g)} + \\text{B(g)} \\rightarrow 2\\text{C(g)}$, $\\Delta H = -40\\text{ kJ}$ and $\\Delta S = -100\\text{ J/K}$. At what temperature is the reaction at equilibrium?",
    ["$400\\text{ K}$", "$250\\text{ K}$", "$500\\text{ K}$", "$100\\text{ K}$"],
    0,
    "$T_{\\text{eq}} = \\frac{\\Delta H}{\\Delta S} = \\frac{-40000\\text{ J}}{-100\\text{ J/K}} = 400\\text{ K}$.",
    "Easy"
  );
  add(
    "For the reaction above ($T_{\\text{eq}} = 400\\text{ K}$), at $500\\text{ K}$ the reaction will be:",
    ["Non-spontaneous ($\\Delta G > 0$)", "Spontaneous in the forward direction", "At equilibrium", "Explosive"],
    0,
    "At $500\\text{ K}$, $\\Delta G = -40000 - 500(-100) = -40000 + 50000 = +10000\\text{ J} = +10\\text{ kJ} > 0$. The forward reaction is non-spontaneous.",
    "Easy"
  );
  add(
    "For the same reaction, at $300\\text{ K}$ the reaction will be:",
    ["Spontaneous in the forward direction ($\\Delta G < 0$)", "Non-spontaneous", "At equilibrium", "Endothermic"],
    0,
    "At $300\\text{ K}$, $\\Delta G = -40000 - 300(-100) = -40000 + 30000 = -10\\text{ kJ} < 0$. Spontaneous forward.",
    "Easy"
  );
  add(
    "Which of the following statements about a catalyst is TRUE regarding thermodynamics?",
    ["A catalyst does not alter $\\Delta H, \\Delta S, \\Delta G,$ or the equilibrium constant $K$", "A catalyst can make a non-spontaneous reaction spontaneous", "A catalyst increases the value of $K$", "A catalyst makes $\\Delta G$ more negative"],
    0,
    "A catalyst lowers activation energy and increases reaction rates equally in both forward and reverse directions, leaving all thermodynamic state functions and equilibrium position unchanged.",
    "Easy"
  );
  add(
    "A spontaneous process must be accompanied by:",
    ["A net increase in entropy of the universe", "A decrease in enthalpy of the system", "An increase in entropy of the system", "A decrease in temperature"],
    0,
    "The fundamental requirement for any spontaneous change in nature is $\\Delta S_{\\text{universe}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} > 0$.",
    "Easy"
  );
  add(
    "In Ellingham diagrams for metallurgical reduction of metal oxides, the plot shows $\\Delta G^\\circ$ versus $T$. The slope of most metal oxidation curves is POSITIVE because:",
    ["$2\\text{M(s)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{MO(s)}$ consumes gas, so $\\Delta S^\\circ < 0$, making slope $= -\\Delta S^\\circ > 0$", "Metal oxides are volatile", "Oxidation is endothermic", "Entropy increases upon oxidation"],
    0,
    "Since $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, slope $= \\frac{d\\Delta G^\\circ}{dT} = -\\Delta S^\\circ$. Gas consumption makes $\\Delta S^\\circ < 0$, so $-\\Delta S^\\circ > 0$ (positive slope).",
    "Hard"
  );
  add(
    "In Ellingham diagrams, the line for $2\\text{C(s)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{CO(g)}$ has a NEGATIVE slope because:",
    ["One mole of gas forms two moles of gas, so $\\Delta S^\\circ > 0$, making slope $= -\\Delta S^\\circ < 0$", "$\\text{CO}$ is endothermic", "Carbon sublimates", "Oxygen is consumed"],
    0,
    "Generating two moles of gaseous $\\text{CO}$ from one mole of $\\text{O}_2$ increases entropy ($\\Delta S^\circ > 0$). Therefore, the slope $-\\Delta S^\circ$ is negative, making $\\text{CO}$ increasingly stable at higher temperatures.",
    "Hard"
  );
  add(
    "Carbon can reduce virtually any metal oxide to free metal at sufficiently high temperatures because:",
    ["The $\\text{C} \\rightarrow \\text{CO}$ line slopes downwards and eventually crosses below any metal oxide line on an Ellingham diagram", "Carbon is liquid at high temperatures", "Carbon forms carbon dioxide exclusively", "Carbon has zero ionization energy"],
    0,
    "Because the free energy of formation of $\\text{CO}$ becomes increasingly negative as temperature rises, $\\Delta G^\\circ$ for reduction of metal oxides by carbon becomes negative at high temperatures.",
    "Medium"
  );
  add(
    "Which of the following processes is non-spontaneous at room temperature but becomes spontaneous upon heating?",
    ["Thermal decomposition of limestone ($\\text{CaCO}_3\\text{(s)}$)", "Dissolving table salt in water", "Rusting of iron", "Explosion of dynamite"],
    0,
    "$\\text{CaCO}_3\\text{(s)} \\rightarrow \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$ is endothermic with $\\Delta S > 0$. It is non-spontaneous at $298\\text{ K}$ but becomes spontaneous above $1112\\text{ K}$.",
    "Easy"
  );
  add(
    "The mixing of two noble gases (like $\\text{Ar}$ and $\\text{Ne}$) at constant temperature and pressure is spontaneous purely due to:",
    ["An increase in entropy ($\\Delta S > 0$), since $\\Delta H = 0$", "Strong attractive forces between argon and neon", "A large decrease in enthalpy ($\\Delta H < 0$)", "Formation of chemical bonds"],
    0,
    "For ideal gases, intermolecular interactions are zero ($\\Delta H = 0$). Mixing is driven entirely by entropy: $\\Delta G = \\Delta H - T\\Delta S = 0 - T\\Delta S < 0$.",
    "Easy"
  );
  add(
    "If $\\Delta H > 0$ and $\\Delta S = 0$ for a process, the process is:",
    ["Non-spontaneous at all temperatures", "Spontaneous at all temperatures", "At equilibrium", "Spontaneous at high temperatures"],
    0,
    "$\\Delta G = \\Delta H - T(0) = \\Delta H > 0$ at all temperatures, so it is strictly non-spontaneous.",
    "Easy"
  );
  add(
    "If $\\Delta H = 0$ and $\\Delta S < 0$, the process is:",
    ["Non-spontaneous at all temperatures", "Spontaneous at all temperatures", "At equilibrium", "Spontaneous at low temperatures"],
    0,
    "$\\Delta G = 0 - T\\Delta S = -T(-|\\Delta S|) = +T|\\Delta S| > 0$ at all $T > 0\\text{ K}$, so it can never be spontaneous.",
    "Easy"
  );
  add(
    "What is the sign of $\\Delta G$ for the crystallization of a solute from a supersaturated solution?",
    ["Negative ($\\Delta G < 0$, spontaneous)", "Positive ($\\Delta G > 0$)", "Zero", "Undefined"],
    0,
    "A supersaturated solution is unstable; precipitation/crystallization of excess solute occurs spontaneously, so $\\Delta G < 0$.",
    "Easy"
  );
  add(
    "The formation of water from hydrogen and oxygen: $2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{H}_2\\text{O(l)}$ has $\\Delta G^\circ = -474\\text{ kJ}$ at $298\\text{ K}$, yet a mixture of $\\text{H}_2$ and $\\text{O}_2$ can be kept indefinitely at room temperature without reaction. Why?",
    ["The reaction is thermodynamically spontaneous but kinetically extremely slow due to high activation energy", "The reaction is non-spontaneous", "Water is unstable", "Enthalpy of reaction is positive"],
    0,
    "Thermodynamic spontaneity ($\\Delta G < 0$) indicates the feasibility of a reaction, but does not guarantee speed. Breaking the $\\text{H-H}$ and $\\text{O=O}$ bonds requires huge activation energy, making it kinetically dormant at $298\\text{ K}$.",
    "Medium"
  );
  add(
    "For the transition of diamond to graphite at $298\\text{ K}$ and $1\\text{ atm}$: $\\text{C(diamond)} \\rightarrow \\text{C(graphite)}$, $\\Delta G^\circ = -2.9\\text{ kJ/mol}$. Why do diamonds not turn into graphite at room temperature?",
    ["The process has an enormous activation energy (extremely slow kinetics)", "The reaction is non-spontaneous", "Graphite has higher free energy", "Diamond is harder than graphite"],
    0,
    "Diamond is thermodynamically metastable ($\\Delta G < 0$ to graphite), but kinetic conversion requires breaking rigid covalent tetrahedral bonds with massive activation energy ($\sim 700\\text{ kJ/mol}$).",
    "Medium"
  );
  add(
    "Which thermodynamic condition ensures that a chemical reaction will proceed spontaneously from left to right?",
    ["$\\Delta_r G < 0$ at the prevailing composition", "$\\Delta_r G^\circ < 0$ under standard state", "$K = 1$", "$\\Delta_r H < 0$"],
    0,
    "Spontaneity under actual conditions requires the actual Gibbs free energy change $\\Delta_r G = \\Delta_r G^\circ + RT \\ln Q < 0$.",
    "Medium"
  );
  add(
    "At what temperature are the liquid and solid phases of a pure substance in thermodynamic equilibrium at $1\\text{ atm}$?",
    ["Normal melting point (freezing point) $T_f = \\Delta_{\\text{fus}} H / \\Delta_{\\text{fus}} S$", "Absolute zero", "Boiling point", "Critical temperature"],
    0,
    "At normal melting point, $\\Delta G = \\Delta H - T\\Delta S = 0 \\implies T_f = \\frac{\\Delta_{\\text{fus}} H}{\\Delta_{\\text{fus}} S}$.",
    "Easy"
  );
  add(
    "For the reaction $\\text{A(s)} \\rightarrow \\text{B(s)} + \\text{C(g)}$, $\\Delta H = +150\\text{ kJ}$ and $\\Delta S = +100\\text{ J/K}$. What is $\\Delta G$ at $1000\\text{ K}$?",
    ["$+50\\text{ kJ}$ (non-spontaneous)", "$-50\\text{ kJ}$ (spontaneous)", "$-250\\text{ kJ}$", "$+250\\text{ kJ}$"],
    0,
    "$\\Delta G = 150 - (1000 \\times 0.100) = 150 - 100 = +50\\text{ kJ}$. Since $\\Delta G > 0$, the forward reaction is non-spontaneous at $1000\\text{ K}$.",
    "Easy"
  );
  add(
    "At what temperature does the reaction above become spontaneous?",
    ["Above $1500\\text{ K}$", "Above $1000\\text{ K}$", "Below $1500\\text{ K}$", "Below $500\\text{ K}$"],
    0,
    "$T > \\frac{\\Delta H}{\\Delta S} = \\frac{150000}{100} = 1500\\text{ K}$.",
    "Easy"
  );
  add(
    "If a reaction has $\\Delta H = -80\\text{ kJ}$ and $\\Delta S = +20\\text{ J/K}$, what is $\\Delta G$ at $300\\text{ K}$?",
    ["$-86\\text{ kJ}$", "$-74\\text{ kJ}$", "$+86\\text{ kJ}$", "$-80\\text{ kJ}$"],
    0,
    "$\\Delta G = -80\\text{ kJ} - [300 \\times (+0.020\\text{ kJ/K})] = -80 - 6 = -86\\text{ kJ}$ (highly spontaneous).",
    "Easy"
  );
  add(
    "A process has $\\Delta H = 0$ and $\\Delta S > 0$. The value of $\\Delta G$ is:",
    ["Negative at all temperatures $T > 0\\text{ K}$", "Positive", "Zero", "Depends on pressure"],
    0,
    "$\\Delta G = 0 - T\\Delta S = -T\\Delta S < 0$ for any $T > 0$.",
    "Easy"
  );
  add(
    "A spontaneous endothermic reaction in solution causes the temperature of the reaction mixture to:",
    ["Decrease (absorbs thermal energy from the solvent)", "Increase", "Remain constant", "Boil instantaneously"],
    0,
    "Because the reaction absorbs heat ($\\Delta H > 0$) from the surrounding solvent, the solution temperature decreases (e.g. dissolving $\\text{NH}_4\\text{NO}_3$).",
    "Easy"
  );
  add(
    "For the reaction $\\text{N}_2\\text{O}_4\\text{(g)} \\rightleftharpoons 2\\text{NO}_2\\text{(g)}$, $\\Delta H = +57.2\\text{ kJ}$ and $\\Delta S = +176\\text{ J/K}$. The threshold temperature above which $\\text{N}_2\\text{O}_4$ decomposes spontaneously is:",
    ["$325\\text{ K}$ ($52^\\circ\\text{C}$)", "$298\\text{ K}$", "$373\\text{ K}$", "$273\\text{ K}$"],
    0,
    "$T_{\\text{eq}} = \\frac{57200\\text{ J}}{176\\text{ J/K}} \\approx 325\\text{ K}$.",
    "Easy"
  );
  add(
    "If a system is at equilibrium, any infinitesimal disturbance creates a state where:",
    ["$dG = 0$ and $d^2G > 0$ (Gibbs energy is at a minimum)", "$dG < 0$ and $d^2G < 0$", "$dG > 0$ and $d^2G = 0$", "$G$ is maximized"],
    0,
    "Thermodynamic equilibrium at constant $T$ and $P$ is characterized by the global minimum of the Gibbs free energy function ($dG = 0, d^2G > 0$).",
    "Medium"
  );
  add(
    "Which of the following describes the thermodynamic driving force for the spontaneous expansion of a gas into a vacuum?",
    ["Entropic driving force ($T\\Delta S > 0$), while $\\Delta H = 0$", "Enthalpic driving force ($\\Delta H < 0$)", "Gravitational force", "Intermolecular repulsion"],
    0,
    "In free expansion into vacuum, $q = 0, w = 0 \\implies \\Delta U = 0$ and $\\Delta H = 0$. The gas expands solely because entropy increases ($\\Delta S = n R \\ln(V_2/V_1) > 0$).",
    "Easy"
  );
  add(
    "Under what conditions does the Gibbs free energy equation $\\Delta G = \\Delta H - T\\Delta S$ strictly apply?",
    ["At constant temperature and constant pressure", "At constant volume and constant temperature", "At constant enthalpy and constant entropy", "Under any non-isothermal conditions"],
    0,
    "$\\Delta G = \\Delta H - T\\Delta S$ is derived from $G = H - TS$ specifically under isothermal ($dT = 0$) and isobaric ($dP = 0$) constraints.",
    "Easy"
  );
  add(
    "Assertion (A): A reaction that has a negative $\\Delta H$ and a positive $\\Delta S$ is spontaneous at all temperatures.\nReason (R): In the relation $\\Delta G = \\Delta H - T\\Delta S$, both terms contribute negatively to $\\Delta G$, ensuring $\\Delta G < 0$ for any $T > 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "$\\Delta G = -|\\Delta H| - T|\\Delta S| < 0$ always. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): An endothermic reaction can occur spontaneously at room temperature.\nReason (R): If the entropy change $\\Delta S$ is sufficiently positive, $T\\Delta S$ can exceed $\\Delta H$, making $\\Delta G < 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Dissolution of salts like $\\text{NH}_4\\text{NO}_3$ in water is endothermic yet spontaneous because of high positive $\\Delta S$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The equilibrium state of a system at constant $T$ and $P$ corresponds to minimum Gibbs free energy.\nReason (R): For any spontaneous process at constant $T$ and $P$, $\\Delta G < 0$; therefore, when $G$ reaches its minimum, no further spontaneous change can occur.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "A system continuously decreases its Gibbs free energy until it reaches the minimum, which is equilibrium. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Thermodynamics can predict whether a reaction is feasible, but cannot predict how fast it will occur.\nReason (R): Spontaneity depends on state functions ($\\Delta G$), whereas reaction rate depends on the kinetic activation energy pathway.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Thermodynamics is independent of mechanism and time; chemical kinetics governs rates and pathways. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Adding a catalyst to a non-spontaneous reaction ($\\Delta G > 0$) cannot make it spontaneous.\nReason (R): A catalyst lowers the activation energy for both forward and reverse reactions equally without changing the initial or final state thermodynamic functions.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "A catalyst alters reaction kinetics, not thermodynamic spontaneity. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In Ellingham diagrams, the reduction of metal oxides by carbon becomes more feasible at higher temperatures.\nReason (R): The reaction $2\\text{C(s)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{CO(g)}$ has a positive entropy change ($\\Delta S > 0$), making $\\Delta G^\\circ$ more negative as temperature increases.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The downward slope of the $\\text{C} \\rightarrow \\text{CO}$ line means CO becomes more stable at higher $T$, effectively reducing metal oxides. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Water does not boil at $80^\\circ\\text{C}$ at $1\\text{ atm}$ pressure.\nReason (R): At $80^\\circ\\text{C}$ and $1\\text{ atm}$, the Gibbs free energy change for vaporization of water $\\Delta_{\\text{vap}} G$ is positive.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Below the normal boiling point ($100^\\circ\\text{C}$), $T\\Delta S < \\Delta H$, so $\\Delta G = \\Delta H - T\\Delta S > 0$, making bulk boiling non-spontaneous. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "For an isolated system, the change in energy $\\Delta U$ and the change in entropy $\\Delta S$ for any spontaneous process must be:",
    ["$\\Delta U = 0$ and $\\Delta S > 0$", "$\\Delta U < 0$ and $\\Delta S = 0$", "$\\Delta U > 0$ and $\\Delta S > 0$", "$\\Delta U = 0$ and $\\Delta S < 0$"],
    0,
    "Because an isolated system cannot exchange heat or work with surroundings, $q = 0, w = 0 \\implies \\Delta U = 0$. By the Second Law, any spontaneous process within an isolated system must increase total entropy ($\\Delta S > 0$).",
    "Easy"
  );
  add(
    "Which of the following changes is spontaneous under standard atmospheric conditions at $25^\\circ\\text{C}$?",
    ["Expansion of an ideal gas into an evacuated bulb", "Diffusion of sugar from a dilute solution into a concentrated solution", "Separation of air into nitrogen and oxygen spontaneously", "Flow of heat from cold water to hot water"],
    0,
    "Gas expanding into a vacuum is an irreversible, spontaneous process driven by the increase in entropy (positional disorder). The other three processes decrease entropy and are non-spontaneous.",
    "Easy"
  );
  add(
    "Assertion (A): Mixing of two ideal gases is always an irreversible spontaneous process.\nReason (R): For ideal gases, $\\Delta H_{\\text{mix}} = 0$, but the entropy of mixing $\\Delta S_{\\text{mix}} = -nR \\sum x_i \\ln x_i$ is strictly positive, making $\\Delta G_{\\text{mix}} < 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since mole fractions $x_i < 1$, $\\ln x_i$ is negative, so $\\Delta S_{\\text{mix}} > 0$. At constant $T$ and $P$, $\\Delta G_{\\text{mix}} = -T\\Delta S_{\\text{mix}} < 0$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getGibbsFreeEnergyQuestions,
  getSpontaneityQuestions
};
