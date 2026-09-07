// Chemical Thermodynamics - Part 1
// Subtopics:
// 1. First law of thermodynamics (47 questions)
// 2. Work done in isothermal and adiabatic expansions (47 questions)
// 3. Heat capacity (Cp, Cv) and relation Cp - Cv = R (47 questions)

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

function getFirstLawQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("First law of thermodynamics", text, opts, ans, exp, diff, type));

  add(
    "According to the IUPAC convention, the mathematical expression for the First Law of Thermodynamics is:",
    ["$\\Delta U = q + w$", "$\\Delta U = q - w$", "$\\Delta H = q + w$", "$\\Delta U = q \\times w$"],
    0,
    "According to modern IUPAC convention, $\\Delta U = q + w$, where $q$ is heat absorbed by the system and $w$ is work done ON the system.",
    "Easy"
  );
  add(
    "Which of the following is a state function?",
    ["Internal energy ($U$)", "Work ($w$)", "Heat ($q$)", "Heat capacity during expansion"],
    0,
    "Internal energy $U$ depends only on the state of the system and not on the path followed, making it a state function. Heat and work are path functions.",
    "Easy"
  );
  add(
    "Which of the following is an INTENSIVE thermodynamic property?",
    ["Density", "Volume", "Internal energy", "Enthalpy"],
    0,
    "Density is independent of the amount of substance present in the system, so it is an intensive property. Volume, internal energy, and enthalpy are extensive.",
    "Easy"
  );
  add(
    "Which of the following pairs contains only EXTENSIVE properties?",
    ["Volume and Internal energy", "Temperature and Pressure", "Refractive index and Viscosity", "Density and Molar heat capacity"],
    0,
    "Volume and internal energy depend directly on the mass/size of the system, so both are extensive properties.",
    "Easy"
  );
  add(
    "In an isolated system, which of the following statements is true for any process?",
    ["$q = 0, w = 0 \\implies \\Delta U = 0$", "$q \\neq 0, w = 0$", "$q = 0, w \\neq 0$", "$\\Delta U \\neq 0$"],
    0,
    "An isolated system neither exchanges matter nor energy (heat or work) with its surroundings. Thus $q = 0, w = 0 \\implies \\Delta U = 0$.",
    "Easy"
  );
  add(
    "During a cyclic process, what is the change in internal energy $\\Delta U$ of the system?",
    ["$\\Delta U = 0$", "$\\Delta U > 0$", "$\\Delta U < 0$", "$\\Delta U = q + w \\neq 0$"],
    0,
    "Because internal energy $U$ is a state function, returning to the initial state means $\\Delta U = U_{\\text{final}} - U_{\\text{initial}} = 0$.",
    "Easy"
  );
  add(
    "In an isochoric process ($V = \\text{constant}$), the work of expansion is zero. The heat absorbed by the system is equal to:",
    ["$\\Delta U$", "$\\Delta H$", "$\\Delta G$", "$-w$"],
    0,
    "For an isochoric process, $dV = 0 \\implies w = -P_{\\text{ext}} dV = 0$. Therefore, by First Law: $q_v = \\Delta U$.",
    "Easy"
  );
  add(
    "In an isobaric process ($P = \\text{constant}$), the heat absorbed by the system $q_p$ is equal to the change in:",
    ["Enthalpy ($\\Delta H$)", "Internal energy ($\\Delta U$)", "Gibbs free energy ($\\Delta G$)", "Helmholtz free energy ($\\Delta A$)"],
    0,
    "At constant pressure, $q_p = \\Delta U + P\\Delta V = \\Delta(U + PV) = \\Delta H$.",
    "Easy"
  );
  add(
    "For an adiabatic process, heat exchange between system and surroundings is zero ($q = 0$). Therefore:",
    ["$\\Delta U = w_{\\text{ad}}$", "$\\Delta U = 0$", "$\\Delta H = 0$", "$w = 0$"],
    0,
    "In an adiabatic process, $q = 0$. From First Law $\\Delta U = q + w$, we get $\\Delta U = w_{\\text{ad}}$.",
    "Easy"
  );
  add(
    "A system absorbs $300\\text{ J}$ of heat and performs $100\\text{ J}$ of work on the surroundings. The change in internal energy is:",
    ["$+200\\text{ J}$", "$+400\\text{ J}$", "$-200\\text{ J}$", "$-400\\text{ J}$"],
    0,
    "$q = +300\\text{ J}$ (heat absorbed). Work done by the system is $w = -100\\text{ J}$. $\\Delta U = q + w = 300 - 100 = +200\\text{ J}$.",
    "Easy"
  );
  add(
    "If $500\\text{ J}$ of work is done ON a system and it releases $200\\text{ J}$ of heat to the surroundings, what is $\\Delta U$?",
    ["$+300\\text{ J}$", "$-300\\text{ J}$", "$+700\\text{ J}$", "$-700\\text{ J}$"],
    0,
    "Work done on the system $w = +500\\text{ J}$. Heat released $q = -200\\text{ J}$. $\\Delta U = q + w = -200 + 500 = +300\\text{ J}$.",
    "Easy"
  );
  add(
    "For an ideal gas, internal energy $U$ depends strictly on:",
    ["Temperature only", "Pressure only", "Volume only", "Both temperature and volume"],
    0,
    "According to Joule's law, intermolecular forces in an ideal gas are zero, so $\\left(\\frac{\\partial U}{\\partial V}\\right)_T = 0$. Thus internal energy depends solely on temperature: $U = f(T)$.",
    "Easy"
  );
  add(
    "An ideal gas undergoes an isothermal process. What is the change in internal energy $\\Delta U$?",
    ["Zero", "Positive", "Negative", "Equal to heat absorbed"],
    0,
    "Since $U$ is a function of $T$ only for an ideal gas, when $\\Delta T = 0$, $\\Delta U = n C_v \\Delta T = 0$.",
    "Easy"
  );
  add(
    "In an isothermal expansion of an ideal gas, since $\\Delta U = 0$, the relation between heat $q$ and work $w$ is:",
    ["$q = -w$", "$q = w$", "$q = 0$", "$w = 0$"],
    0,
    "$\\Delta U = q + w = 0 \\implies q = -w$. Heat absorbed equals work done by the gas.",
    "Easy"
  );
  add(
    "A gas expands from $2\\text{ L}$ to $6\\text{ L}$ against a constant external pressure of $2\\text{ atm}$. The work done is: ($1\\text{ L}\\cdot\\text{atm} = 101.3\\text{ J}$)",
    ["$-810.4\\text{ J}$", "$+810.4\\text{ J}$", "$-405.2\\text{ J}$", "$+405.2\\text{ J}$"],
    0,
    "$w = -P_{\\text{ext}} \\Delta V = -2\\text{ atm} \\times (6 - 2)\\text{ L} = -8\\text{ L}\\cdot\\text{atm} = -8 \\times 101.325\\text{ J} = -810.6\\text{ J} \\approx -810.4\\text{ J}$.",
    "Easy"
  );
  add(
    "During free expansion of an ideal gas into a vacuum under adiabatic conditions, which of the following is correct?",
    ["$q = 0, w = 0, \\Delta U = 0, \\Delta T = 0$", "$q = 0, w > 0, \\Delta U > 0, \\Delta T > 0$", "$q > 0, w = 0, \\Delta U > 0, \\Delta T = 0$", "$q = 0, w < 0, \\Delta U < 0, \\Delta T < 0$"],
    0,
    "In free expansion against vacuum, $P_{\\text{ext}} = 0 \\implies w = 0$. In adiabatic conditions, $q = 0$. Thus $\\Delta U = q + w = 0$. Since $U = f(T)$ for ideal gas, $\\Delta T = 0$.",
    "Medium"
  );
  add(
    "Which of the following properties is an intensive property?",
    ["Molar volume", "Heat capacity", "Mass", "Entropy"],
    0,
    "Molar volume ($V_m = V / n$) is the ratio of two extensive properties, which is always an intensive property.",
    "Easy"
  );
  add(
    "Which of the following is NOT a state function?",
    ["Work ($w$)", "Pressure ($P$)", "Temperature ($T$)", "Enthalpy ($H$)"],
    0,
    "Work ($w$) is a path-dependent quantity and cannot be expressed as a difference between final and initial state values.",
    "Easy"
  );
  add(
    "One mole of an ideal gas absorbs $1200\\text{ J}$ of heat at constant volume. The change in temperature if $C_v = 20\\text{ J/K}$ is:",
    ["$60\\text{ K}$", "$24\\text{ K}$", "$12\\text{ K}$", "$120\\text{ K}$"],
    0,
    "At constant volume, $q_v = \\Delta U = n C_v \\Delta T \\implies 1200 = 1 \\times 20 \\times \\Delta T \\implies \\Delta T = 60\\text{ K}$.",
    "Easy"
  );
  add(
    "A piston expands isothermally against a vacuum ($P_{\\text{ext}} = 0$). The work done by the system is:",
    ["Zero", "Infinite", "$nRT \\ln(V_2/V_1)$", "$P\\Delta V$"],
    0,
    "Expansion against vacuum has zero resisting external pressure ($P_{\\text{ext}} = 0$), so $w = -\\int P_{\\text{ext}} dV = 0$.",
    "Easy"
  );
  add(
    "In a reversible process, the driving force and opposing force differ by:",
    ["An infinitesimal amount", "A finite amount", "A very large amount", "Zero at all times without movement"],
    0,
    "A reversible process proceeds through a succession of equilibrium states where driving and opposing forces differ only infinitesimally ($dP$ or $dT$).",
    "Easy"
  );
  add(
    "For an adiabatic expansion of an ideal gas, the temperature:",
    ["Decreases", "Increases", "Remains constant", "First increases then decreases"],
    0,
    "In adiabatic expansion, $q = 0 \\implies \\Delta U = w < 0$. Since internal energy decreases ($\Delta U = n C_v \\Delta T < 0$), temperature must decrease (cooling effect).",
    "Easy"
  );
  add(
    "For an adiabatic compression of an ideal gas, the temperature:",
    ["Increases", "Decreases", "Remains constant", "Becomes absolute zero"],
    0,
    "In compression, work is done ON the gas ($w > 0$). Since $q = 0$, $\\Delta U = w > 0 \\implies n C_v \\Delta T > 0$, so the gas heats up.",
    "Easy"
  );
  add(
    "The internal energy of $1\\text{ mole}$ of a monoatomic ideal gas at temperature $T$ is:",
    ["$\\frac{3}{2}RT$", "$\\frac{5}{2}RT$", "$3RT$", "$RT$"],
    0,
    "For a monoatomic ideal gas, only 3 translational degrees of freedom exist: $U = 3 \\times \\frac{1}{2}RT = \\frac{3}{2}RT$.",
    "Easy"
  );
  add(
    "The change in internal energy for a reaction when carried out in a bomb calorimeter gives directly:",
    ["$q_v$ (heat at constant volume)", "$q_p$ (heat at constant pressure)", "$\\Delta H$", "$\\Delta G$"],
    0,
    "A bomb calorimeter is a rigid sealed container of constant volume ($dV = 0$). Hence $w = 0$, and the heat measured is $q_v = \\Delta U$.",
    "Easy"
  );
  add(
    "If a system undergoes a change in which $\\Delta U = 0$, but heat is absorbed ($q > 0$), what must be true about work?",
    ["$w < 0$ (work done by the system)", "$w > 0$ (work done on the system)", "$w = 0$", "$w = q$"],
    0,
    "$\\Delta U = q + w = 0 \\implies w = -q$. Since $q > 0$, $w = -q < 0$ (work done by the system).",
    "Easy"
  );
  add(
    "The ratio of extensive property to extensive property is always:",
    ["An intensive property", "An extensive property", "A dimensionless constant only", "A path function"],
    0,
    "Dividing one extensive property by another yields an intensive property (e.g. Mass/Volume = Density; Heat capacity/Mass = Specific heat capacity).",
    "Easy"
  );
  add(
    "Which of the following is NOT an extensive property?",
    ["Surface tension", "Enthalpy", "Entropy", "Gibbs free energy"],
    0,
    "Surface tension is force per unit length, which does not depend on the total bulk volume or mass of the system; it is intensive.",
    "Easy"
  );
  add(
    "When an ideal gas undergoes isothermal compression, heat is:",
    ["Released to the surroundings ($q < 0$)", "Absorbed from the surroundings ($q > 0$)", "Zero ($q = 0$)", "Equal to $\\Delta U$"],
    0,
    "In compression, $w > 0$. For an isothermal process of an ideal gas, $\\Delta U = 0 \\implies q = -w < 0$. Heat is evolved.",
    "Easy"
  );
  add(
    "In an adiabatic process, no heat enters or leaves the system. Which boundary is required?",
    ["Adiabatic (thermally insulating) wall", "Diathermic (thermally conducting) wall", "Permeable wall", "Transparent wall"],
    0,
    "An adiabatic wall prevents heat exchange between the system and surroundings ($q = 0$).",
    "Easy"
  );
  add(
    "If a gas absorbs $400\\text{ J}$ of heat and its internal energy increases by $150\\text{ J}$, the work done is:",
    ["$-250\\text{ J}$ (done by gas)", "$+250\\text{ J}$ (done on gas)", "$+550\\text{ J}$", "$-550\\text{ J}$"],
    0,
    "$\\Delta U = q + w \\implies 150 = 400 + w \\implies w = 150 - 400 = -250\\text{ J}$. Work is done by the system.",
    "Easy"
  );
  add(
    "A system goes from state A to state B via two different paths 1 and 2. Which quantity must be the same for both paths?",
    ["$q_1 + w_1 = q_2 + w_2$", "$q_1 = q_2$", "$w_1 = w_2$", "$q_1 - w_1 = q_2 - w_2$"],
    0,
    "While $q$ and $w$ depend on path, their sum $q + w = \\Delta U$ is a state function and must be identical for any path connecting states A and B.",
    "Medium"
  );
  add(
    "The differential of a state function is:",
    ["An exact differential", "An inexact differential", "Always zero", "Always positive"],
    0,
    "State functions have exact (Euler-reciprocal) differentials ($dU, dH, dS$), while path functions have inexact differentials ($\\delta q, \\delta w$).",
    "Medium"
  );
  add(
    "Under what condition is $\\Delta U = \\Delta H$ for a chemical reaction involving gases?",
    ["When $\\Delta n_g = 0$", "When $\\Delta n_g > 0$", "When $\\Delta n_g < 0$", "Always at any temperature"],
    0,
    "$\\Delta H = \\Delta U + \\Delta n_g RT$. When the change in moles of gaseous species $\\Delta n_g = 0$, $\\Delta H = \\Delta U$.",
    "Easy"
  );
  add(
    "For the reaction $\\text{C(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)}$ at $298\\text{ K}$, the relation between $\\Delta H$ and $\\Delta U$ is:",
    ["$\\Delta H = \\Delta U$", "$\\Delta H > \\Delta U$", "$\\Delta H < \\Delta U$", "$\\Delta H = \\Delta U + RT$"],
    0,
    "Here, $n_g(\\text{products}) = 1$ ($\text{CO}_2$), and $n_g(\\text{reactants}) = 1$ ($\text{O}_2$). Carbon is solid ($s$). $\\Delta n_g = 1 - 1 = 0 \\implies \\Delta H = \\Delta U$.",
    "Easy"
  );
  add(
    "For the reaction $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$, $\\Delta n_g$ is:",
    ["$-2$", "$+2$", "$0$", "$-1$"],
    0,
    "$\\Delta n_g = 2 - (1 + 3) = 2 - 4 = -2$. Therefore $\\Delta H = \\Delta U - 2RT$.",
    "Easy"
  );
  add(
    "For the decomposition of $\\text{PCl}_5\\text{(g)} \\rightarrow \\text{PCl}_3\\text{(g)} + \\text{Cl}_2\\text{(g)}$, the relation between $\\Delta H$ and $\\Delta U$ is:",
    ["$\\Delta H = \\Delta U + RT$", "$\\Delta H = \\Delta U - RT$", "$\\Delta H = \\Delta U$", "$\\Delta H = \\Delta U + 2RT$"],
    0,
    "$\\Delta n_g = (1 + 1) - 1 = +1$. Therefore $\\Delta H = \\Delta U + \\Delta n_g RT = \\Delta U + RT$.",
    "Easy"
  );
  add(
    "When ice melts into water at $0^\\circ\\text{C}$ and $1\\text{ atm}$, which is greater: $\\Delta H$ or $\\Delta U$?",
    ["$\\Delta U > \\Delta H$ because volume decreases on melting", "$\\Delta H > \\Delta U$ because volume increases", "$\\Delta H = \\Delta U$", "Cannot be predicted"],
    0,
    "Water has higher density than ice, so ice contracts on melting ($V_{\\text{liquid}} < V_{\\text{ice}} \\implies \\Delta V < 0$). Thus $\\Delta H = \\Delta U + P\\Delta V < \\Delta U \\implies \\Delta U > \\Delta H$.",
    "Hard"
  );
  add(
    "Which of the following statements about First Law of Thermodynamics is FALSE?",
    ["It provides information about the direction of spontaneous heat flow", "It is an expression of the law of conservation of energy", "It states that energy can neither be created nor destroyed", "Total energy of an isolated system remains constant"],
    0,
    "The First Law only establishes the conservation of energy; it does NOT predict the spontaneity or direction of processes (which is the domain of the Second Law).",
    "Easy"
  );
  add(
    "A gas expands in an insulated container against an external pressure. Which of the following is true?",
    ["$w < 0, q = 0, \\Delta T < 0$", "$w > 0, q = 0, \\Delta T > 0$", "$w < 0, q > 0, \\Delta T = 0$", "$w = 0, q = 0, \\Delta T = 0$"],
    0,
    "Insulated container means $q = 0$ (adiabatic). Expansion means work is done by the gas ($w < 0$). Hence $\\Delta U = w < 0$, which causes a temperature drop ($\\Delta T < 0$).",
    "Medium"
  );
  add(
    "A sample of gas is compressed from $10\\text{ L}$ to $5\\text{ L}$ by a constant pressure of $4\\text{ atm}$. During this, $800\\text{ J}$ of heat is liberated. What is $\\Delta U$? ($1\\text{ L}\\cdot\\text{atm} = 101.3\\text{ J}$)",
    ["$+1226\\text{ J}$", "$-1226\\text{ J}$", "$+2026\\text{ J}$", "$-2826\\text{ J}$"],
    0,
    "Compression work $w = -P_{\\text{ext}} (V_2 - V_1) = -4 \\times (5 - 10) = +20\\text{ L}\\cdot\\text{atm} = 20 \\times 101.3 = +2026\\text{ J}$. Heat released $q = -800\\text{ J}$. $\\Delta U = q + w = -800 + 2026 = +1226\\text{ J}$.",
    "Medium"
  );
  add(
    "The Joule-Thomson coefficient $\\mu_{\\text{JT}}$ is defined as:",
    ["$\\left(\\frac{\\partial T}{\\partial P}\\right)_H$", "$\\left(\\frac{\\partial T}{\\partial P}\\right)_U$", "$\\left(\\frac{\\partial H}{\\partial P}\\right)_T$", "$\\left(\\frac{\\partial U}{\\partial V}\\right)_T$"],
    0,
    "The Joule-Thomson expansion is an isenthalpic ($H = \\text{constant}$) process, and $\\mu_{\\text{JT}} = \\left(\\frac{\\partial T}{\\partial P}\\right)_H$.",
    "Medium"
  );
  add(
    "For an ideal gas, the Joule-Thomson coefficient $\\mu_{\\text{JT}}$ is equal to:",
    ["Zero", "Positive", "Negative", "Infinite"],
    0,
    "Because enthalpy of an ideal gas depends only on temperature and intermolecular forces are absent, $\\mu_{\\text{JT}} = 0$ for an ideal gas at all temperatures and pressures.",
    "Easy"
  );
  add(
    "Assertion (A): Internal energy $U$ of an ideal gas is a function of temperature only.\nReason (R): For an ideal gas, intermolecular attractive forces are zero, so potential energy is zero and internal energy is purely kinetic.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since intermolecular attractions are absent, changing the volume at constant temperature changes no potential energy. Thus $U$ depends only on kinetic energy, which is proportional to $T$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In an adiabatic free expansion of an ideal gas, there is neither heat exchange nor temperature change.\nReason (R): In free expansion $w = 0$, and for adiabatic process $q = 0$, hence $\\Delta U = 0$. For an ideal gas $\\Delta U = n C_v \\Delta T = 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because $P_{\\text{ext}} = 0$, $w = 0$. Because walls are adiabatic, $q = 0$. Thus $\\Delta U = 0$, which for an ideal gas implies $\\Delta T = 0$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): For a cyclic process, the net work done equals the net heat absorbed.\nReason (R): In any cyclic process, the change in internal energy $\\Delta U$ is zero.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since the system returns to its initial state, $\\Delta U = 0$. Therefore, by First Law: $0 = q + w \\implies q = -w$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Enthalpy is an extensive property, whereas molar enthalpy is an intensive property.\nReason (R): The ratio of two extensive properties is always an intensive property.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Molar enthalpy $H_m = H / n$ is the ratio of enthalpy (extensive) to amount of substance (extensive), making it an intensive property. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getWorkExpansionsQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Work done in isothermal and adiabatic expansions", text, opts, ans, exp, diff, type));

  add(
    "The work done in a reversible isothermal expansion of $n$ moles of an ideal gas from $V_1$ to $V_2$ at temperature $T$ is:",
    ["$-2.303 nRT \\log_{10}(V_2 / V_1)$", "$+2.303 nRT \\log_{10}(V_2 / V_1)$", "$-nRT (V_2 - V_1)$", "$-P_{\\text{ext}} (V_2 - V_1)$"],
    0,
    "For reversible isothermal expansion, $P = nRT / V$. Integrating $w = -\\int P dV = -nRT \\int_{V_1}^{V_2} \\frac{dV}{V} = -nRT \\ln\\frac{V_2}{V_1} = -2.303 nRT \\log_{10}\\frac{V_2}{V_1}$.",
    "Easy"
  );
  add(
    "Work done during a reversible isothermal expansion of an ideal gas expressed in terms of pressures is:",
    ["$-nRT \\ln(P_1 / P_2)$", "$-nRT \\ln(P_2 / P_1)$", "$+nRT \\ln(P_1 / P_2)$", "$-P_1 V_1 \\ln(P_2 / P_1)$"],
    0,
    "By Boyle's law at constant temperature, $P_1 V_1 = P_2 V_2 \\implies \\frac{V_2}{V_1} = \\frac{P_1}{P_2}$. Thus $w = -nRT \\ln(P_1 / P_2)$.",
    "Easy"
  );
  add(
    "Calculate the work done when $1\\text{ mole}$ of an ideal gas expands reversibly and isothermally from $10\\text{ L}$ to $100\\text{ L}$ at $300\\text{ K}$: ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$)",
    ["$-5744\\text{ J}$", "$+5744\\text{ J}$", "$-2494\\text{ J}$", "$-11488\\text{ J}$"],
    0,
    "$w = -2.303 nRT \\log_{10}(100/10) = -2.303 \\times 1 \\times 8.314 \\times 300 \\times 1 = -5744.1\\text{ J}$.",
    "Easy"
  );
  add(
    "For the same initial state and same final volume, the magnitude of work done in an isothermal expansion vs adiabatic expansion of an ideal gas compares as:",
    ["$|w_{\\text{isothermal}}| > |w_{\\text{adiabatic}}|$", "$|w_{\\text{adiabatic}}| > |w_{\\text{isothermal}}|$", "$|w_{\\text{isothermal}}| = |w_{\\text{adiabatic}}|$", "Depends on atomicity of the gas"],
    0,
    "In adiabatic expansion, cooling occurs ($T$ drops), so pressure drops faster than in isothermal expansion ($P \\propto 1/V^\\gamma$ vs $1/V$). The area under the isothermal $P-V$ curve is larger, so $|w_{\\text{iso}}| > |w_{\\text{adia}}|$.",
    "Medium"
  );
  add(
    "For the same initial state and same final volume, the magnitude of work required during compression compares as:",
    ["$|w_{\\text{adiabatic}}| > |w_{\\text{isothermal}}|$", "$|w_{\\text{isothermal}}| > |w_{\\text{adiabatic}}|$", "$|w_{\\text{adiabatic}}| = |w_{\\text{isothermal}}|$", "Work is zero for both"],
    0,
    "During adiabatic compression, temperature rises, keeping pressure higher throughout the process compared to isothermal compression. Thus more work is needed: $|w_{\\text{adia}}| > |w_{\\text{iso}}|$.",
    "Medium"
  );
  add(
    "The slope of an adiabatic curve on a $P-V$ indicator diagram is related to the slope of an isothermal curve by:",
    ["$\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = \\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}$", "$\\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = \\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{adia}}$", "Both slopes are identical", "$\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = -\\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}$"],
    0,
    "For isothermal, $PV = C \\implies dP/dV = -P/V$. For adiabatic, $PV^\\gamma = C \\implies dP/dV = -\\gamma P/V = \\gamma (dP/dV)_{\\text{iso}}$. The adiabatic slope is steeper by a factor of $\\gamma$.",
    "Medium"
  );
  add(
    "For a reversible adiabatic process involving an ideal gas, which of the following relations is correct?",
    ["$T V^{\\gamma - 1} = \\text{constant}$", "$T V^\\gamma = \\text{constant}$", "$T^{\\gamma - 1} V = \\text{constant}$", "$T / V^{\\gamma - 1} = \\text{constant}$"],
    0,
    "Using $PV^\\gamma = \\text{const}$ and substituting $P = nRT/V$, we get $(T/V) V^\\gamma = \\text{const} \\implies T V^{\\gamma - 1} = \\text{constant}$.",
    "Easy"
  );
  add(
    "The pressure-temperature relation for a reversible adiabatic expansion of an ideal gas is:",
    ["$T^\\gamma P^{1 - \\gamma} = \\text{constant}$", "$T P^\\gamma = \\text{constant}$", "$T^{1 - \\gamma} P^\\gamma = \\text{constant}$", "$T^\\gamma P^{\\gamma - 1} = \\text{constant}$"],
    0,
    "Substituting $V = nRT/P$ into $PV^\\gamma = \\text{const}$ gives $P (T/P)^\\gamma = \\text{const} \\implies P^{1-\\gamma} T^\\gamma = \\text{constant}$.",
    "Medium"
  );
  add(
    "The work done in a reversible adiabatic expansion of $n$ moles of an ideal gas between temperatures $T_1$ and $T_2$ is:",
    ["$\\frac{nR(T_2 - T_1)}{\\gamma - 1}$", "$\\frac{nR(T_1 - T_2)}{\\gamma}$", "$nRT \\ln(T_2 / T_1)$", "$nR(T_2 - T_1)$"],
    0,
    "For adiabatic process $q = 0 \\implies w = \\Delta U = n C_v (T_2 - T_1) = \\frac{nR(T_2 - T_1)}{\\gamma - 1}$.",
    "Medium"
  );
  add(
    "An ideal monoatomic gas ($\\gamma = 5/3$) at $300\\text{ K}$ is compressed adiabatically and reversibly to one-eighth ($1/8$) of its original volume. What is the final temperature?",
    ["$1200\\text{ K}$", "$600\\text{ K}$", "$2400\\text{ K}$", "$900\\text{ K}$"],
    0,
    "$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = 300 \\times (8)^{5/3 - 1} = 300 \\times (8)^{2/3} = 300 \\times (2)^2 = 300 \\times 4 = 1200\\text{ K}$.",
    "Medium"
  );
  add(
    "When an ideal gas expands into a vacuum ($P_{\\text{ext}} = 0$) irreversibly and adiabatically, the work done is:",
    ["Zero", "Maximum", "$-nRT \\ln(V_2 / V_1)$", "$-\\Delta U$"],
    0,
    "Free expansion against vacuum always yields zero work: $w = -P_{\\text{ext}} \\Delta V = 0 \\times \\Delta V = 0$.",
    "Easy"
  );
  add(
    "Two moles of an ideal gas expand isothermally and irreversibly at $300\\text{ K}$ from $10\\text{ L}$ to $20\\text{ L}$ against a constant pressure of $2\\text{ atm}$. Work done is: ($1\\text{ L}\\cdot\\text{atm} = 101.3\\text{ J}$)",
    ["$-2026\\text{ J}$", "$+2026\\text{ J}$", "$-3456\\text{ J}$", "$-1013\\text{ J}$"],
    0,
    "$w = -P_{\\text{ext}} (V_2 - V_1) = -2\\text{ atm} \\times (20 - 10)\\text{ L} = -20\\text{ L}\\cdot\\text{atm} = -20 \\times 101.325 = -2026.5\\text{ J}$.",
    "Easy"
  );
  add(
    "Compare the work done in a reversible isothermal expansion ($w_{\\text{rev}}$) and an irreversible isothermal expansion ($w_{\\text{irrev}}$) between the same limits:",
    ["$|w_{\\text{rev}}| > |w_{\\text{irrev}}|$", "$|w_{\\text{irrev}}| > |w_{\\text{rev}}|$", "$|w_{\\text{rev}}| = |w_{\\text{irrev}}|$", "No general relation exists"],
    0,
    "A reversible expansion operates against an external pressure that is infinitesimally smaller than internal gas pressure at every step, yielding the maximum possible work: $|w_{\\text{rev}}| > |w_{\\text{irrev}}|$.",
    "Easy"
  );
  add(
    "During an irreversible compression of an ideal gas against a constant external pressure $P_{\\text{ext}}$, the work done satisfies:",
    ["$w_{\\text{irrev}} > w_{\\text{rev}}$", "$w_{\\text{rev}} > w_{\\text{irrev}}$", "$w_{\\text{irrev}} = w_{\\text{rev}}$", "$w_{\\text{irrev}} = 0$"],
    0,
    "In irreversible compression, the external pressure must be at least as large as the final pressure $P_2$, meaning more work must be done on the gas than in a reversible compression.",
    "Medium"
  );
  add(
    "For an adiabatic reversible expansion of an ideal gas, the work done is represented in terms of pressures and volumes as:",
    ["$\\frac{P_2 V_2 - P_1 V_1}{\\gamma - 1}$", "$\\frac{P_1 V_1 - P_2 V_2}{\\gamma}$", "$P_1 V_1 \\ln(P_1 / P_2)$", "$\\frac{P_2 V_2 - P_1 V_1}{\\gamma}$"],
    0,
    "Since $nRT_2 = P_2 V_2$ and $nRT_1 = P_1 V_1$, $w = \\frac{nR(T_2 - T_1)}{\\gamma - 1} = \\frac{P_2 V_2 - P_1 V_1}{\\gamma - 1}$.",
    "Medium"
  );
  add(
    "In an irreversible adiabatic expansion of an ideal gas against constant external pressure $P_{\\text{ext}}$, the final temperature $T_2$ is found using:",
    ["$n C_v (T_2 - T_1) = -P_{\\text{ext}} (V_2 - V_1)$", "$T_2 V_2^{\\gamma - 1} = T_1 V_1^{\\gamma - 1}$", "$T_2 = T_1$", "$P_2 V_2^\\gamma = P_1 V_1^\\gamma$"],
    0,
    "Since the process is irreversible, the relation $T V^{\\gamma-1} = \\text{const}$ CANNOT be used. One must apply the First Law directly: $\\Delta U = w \\implies n C_v (T_2 - T_1) = -P_{\\text{ext}} (V_2 - V_1)$.",
    "Hard"
  );
  add(
    "One mole of a monoatomic ideal gas expands adiabatically against a constant external pressure of $1\\text{ atm}$ from $V_1 = 5\\text{ L}, T_1 = 300\\text{ K}$ to $V_2 = 10\\text{ L}$. What is $\\Delta U$? ($1\\text{ L}\\cdot\\text{atm} = 101.3\\text{ J}$)",
    ["$-506.5\\text{ J}$", "$+506.5\\text{ J}$", "$-1013\\text{ J}$", "$0\\text{ J}$"],
    0,
    "For adiabatic process $q = 0 \\implies \\Delta U = w = -P_{\\text{ext}} (V_2 - V_1) = -1\\text{ atm} \\times (10 - 5)\\text{ L} = -5\\text{ L}\\cdot\\text{atm} = -506.5\\text{ J}$.",
    "Medium"
  );
  add(
    "During isothermal expansion of an ideal gas, heat absorbed from the surroundings $q$ is equal to:",
    ["$-w$", "$+w$", "$0$", "$\\Delta H$"],
    0,
    "Since $\\Delta U = 0$ for an isothermal process of an ideal gas, $\\Delta U = q + w = 0 \\implies q = -w$.",
    "Easy"
  );
  add(
    "An ideal gas expands from volume $V_1$ to $V_2$ at constant temperature $T$. If the expansion is done in three stages with increasing volume against intermediate external pressures, the work done compared to a single-stage expansion is:",
    ["Greater in magnitude", "Smaller in magnitude", "Equal in magnitude", "Zero"],
    0,
    "As the number of stages increases, the process approaches reversibility, and the area under the step-curve increases towards the maximum reversible work.",
    "Medium"
  );
  add(
    "For a reversible adiabatic process, which of the following remains constant?",
    ["Entropy ($S$)", "Temperature ($T$)", "Internal energy ($U$)", "Volume ($V$)"],
    0,
    "A reversible adiabatic process has $dq_{\\text{rev}} = 0 \\implies dS = dq_{\\text{rev}}/T = 0$. Hence entropy remains constant (isentropic process).",
    "Easy"
  );
  add(
    "Which curve on a $P-V$ diagram has the smallest slope in magnitude at a given point $(P, V)$?",
    ["Isobaric line", "Isothermal curve", "Adiabatic curve", "Isochoric line"],
    0,
    "An isobaric line is horizontal with slope $dP/dV = 0$, which is the smallest possible slope in magnitude.",
    "Easy"
  );
  add(
    "On a $P-V$ diagram, an isochoric line is:",
    ["A vertical straight line with slope $\\infty$", "A horizontal straight line with slope 0", "A rectangular hyperbola", "A parabolic curve"],
    0,
    "At constant volume, $V = \\text{constant}$, giving a vertical line on a $P-V$ plot where $dV = 0$ and slope $\\frac{dP}{dV} = \\infty$.",
    "Easy"
  );
  add(
    "An ideal gas expands isothermally from $1\\text{ L}$ to $10\\text{ L}$ at $300\\text{ K}$. If the same gas expands adiabatically from $1\\text{ L}$ to $10\\text{ L}$ starting from $300\\text{ K}$, the final pressure in the adiabatic process is:",
    ["Lower than in the isothermal process", "Higher than in the isothermal process", "Equal to the isothermal process", "Depends on the mass of gas"],
    0,
    "$P_{\\text{iso}} = P_1 (1/10)$, whereas $P_{\\text{adia}} = P_1 (1/10)^\\gamma$. Since $\\gamma > 1$, $(1/10)^\\gamma < (1/10)$, so final adiabatic pressure is lower.",
    "Medium"
  );
  add(
    "A gas expands from $10^{-3}\\text{ m}^3$ to $10^{-2}\\text{ m}^3$ against a constant external pressure of $10^5\\text{ N/m}^2$. The work done is:",
    ["$-900\\text{ J}$", "$+900\\text{ J}$", "$-90\\text{ J}$", "$+1000\\text{ J}$"],
    0,
    "$w = -P_{\\text{ext}} \\Delta V = -10^5\\text{ N/m}^2 \\times (10^{-2} - 10^{-3})\\text{ m}^3 = -10^5 \\times 0.009 = -900\\text{ J}$.",
    "Easy"
  );
  add(
    "During an isothermal reversible compression of an ideal gas, work done on the gas is:",
    ["Positive", "Negative", "Zero", "Dependent on heat capacity"],
    0,
    "In compression, $V_2 < V_1$, so $\\ln(V_2/V_1) < 0$. Therefore $w = -nRT \\ln(V_2/V_1) > 0$. Work is done ON the gas.",
    "Easy"
  );
  add(
    "If an ideal gas expands adiabatically and reversibly, its temperature drops from $400\\text{ K}$ to $200\\text{ K}$. If $C_v = 1.5R$ and $n = 1\\text{ mol}$, work done is: ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$)",
    ["$-2494.2\\text{ J}$", "$+2494.2\\text{ J}$", "$-4988.4\\text{ J}$", "$-1662.8\\text{ J}$"],
    0,
    "For adiabatic process, $w = \\Delta U = n C_v (T_2 - T_1) = 1 \\times 1.5 \\times 8.314 \\times (200 - 400) = 12.471 \\times (-200) = -2494.2\\text{ J}$.",
    "Easy"
  );
  add(
    "Which of the following processes produces MAXIMUM work done by the system for a given expansion from $V_1$ to $V_2$?",
    ["Reversible isothermal expansion", "Irreversible isothermal expansion against constant $P_{\\text{ext}}$", "Reversible adiabatic expansion", "Free expansion into vacuum"],
    0,
    "Reversible isothermal expansion maintains the highest possible temperature ($T_1$) and highest pressure at all stages, enclosing the maximum area on a $P-V$ diagram.",
    "Medium"
  );
  add(
    "For an adiabatic free expansion of a real gas into a vacuum:",
    ["Temperature may decrease, increase, or stay constant depending on initial temperature and inversion temperature", "Temperature must always decrease", "Temperature must always increase", "Temperature cannot change"],
    0,
    "For a real gas, $\\Delta U = 0$. Since $(\\partial U/\\partial V)_T \\neq 0$, doing work against internal van der Waals attractive forces leads to cooling if $T < T_i$ (inversion temp) or heating if $T > T_i$.",
    "Hard"
  );
  add(
    "An ideal gas undergoes a polytropic process $PV^n = \\text{constant}$. The work done in expansion from $(P_1, V_1)$ to $(P_2, V_2)$ is:",
    ["$\\frac{P_1 V_1 - P_2 V_2}{n - 1}$ (for $n \\neq 1$)", "$\\frac{P_2 V_2 - P_1 V_1}{n}$", "$P_1 V_1 \\ln(V_2 / V_1)$", "$nR(T_2 - T_1)$"],
    0,
    "Integrating $w = -\\int P dV = -\\int C V^{-n} dV = -\\frac{C (V_2^{1-n} - V_1^{1-n})}{1 - n} = \\frac{P_2 V_2 - P_1 V_1}{n - 1}$. Work done BY the gas is $\\frac{P_1 V_1 - P_2 V_2}{n - 1}$.",
    "Medium"
  );
  add(
    "For an isobaric expansion of an ideal gas ($P = \\text{constant}$), the work done by the gas is:",
    ["$P(V_2 - V_1) = nR(T_2 - T_1)$", "$nRT \\ln(V_2 / V_1)$", "$\\frac{nR(T_2 - T_1)}{\\gamma - 1}$", "Zero"],
    0,
    "At constant pressure, $w_{\\text{by}} = P \\Delta V$. By ideal gas equation, $P \\Delta V = nR \\Delta T = nR(T_2 - T_1)$.",
    "Easy"
  );
  add(
    "Work done during an isochoric heating of a gas from $T_1$ to $T_2$ is:",
    ["Zero", "$nR(T_2 - T_1)$", "$n C_v (T_2 - T_1)$", "$n C_p (T_2 - T_1)$"],
    0,
    "In an isochoric process, volume does not change ($dV = 0$), so expansion work $w = -\\int P dV = 0$.",
    "Easy"
  );
  add(
    "In a $P-V$ diagram, the net work done in a cyclic process is represented by:",
    ["The area enclosed by the cyclic loop", "The perimeter of the cycle", "The maximum pressure multiplied by volume", "Always zero"],
    0,
    "The integral $\\oint P dV$ geometrically equals the area enclosed by the closed curve on a $P-V$ diagram.",
    "Easy"
  );
  add(
    "If a cycle on a $P-V$ diagram runs CLOCKWISE, the net work done by the system is:",
    ["Positive (work is done by the system)", "Negative (work is done on the system)", "Zero", "Undefined"],
    0,
    "A clockwise cycle has expansion at higher pressure and compression at lower pressure, meaning positive net work is performed by the system.",
    "Easy"
  );
  add(
    "If a cycle on a $P-V$ diagram runs COUNTER-CLOCKWISE, the cycle represents:",
    ["A refrigerator or heat pump consuming work", "A heat engine producing net work", "An isolated non-working system", "A perpetual motion machine"],
    0,
    "A counter-clockwise cycle encloses negative net work ($w_{\\text{net}} > 0$ on system), representing a refrigeration cycle consuming mechanical work.",
    "Easy"
  );
  add(
    "Three moles of an ideal gas expand isothermally at $300\\text{ K}$ against a constant pressure of $1\\text{ bar}$ until volume doubles. The work done is: ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$)",
    ["$-2494.2\\text{ J}$", "$-7482.6\\text{ J}$", "$-1728.5\\text{ J}$", "$-5186.4\\text{ J}$"],
    0,
    "Initial volume $V_1 = nRT/P = 3 \\times 8.314 \\times 300 / 10^5\\text{ m}^3 = 0.074826\\text{ m}^3$. $\\Delta V = V_2 - V_1 = V_1 = 0.074826\\text{ m}^3$. Work $w = -P_{\\text{ext}} \\Delta V = -10^5 \\times 0.074826 = -7482.6\\text{ J}$.",
    "Medium"
  );
  add(
    "When a gas expands from volume $V_1$ to $V_2$, the work done by the system is greatest under which condition?",
    ["Reversible isobaric expansion at initial pressure $P_1$", "Reversible isothermal expansion", "Reversible adiabatic expansion", "Free expansion"],
    0,
    "In isobaric expansion at $P_1$, the pressure stays at its maximum value $P_1$ throughout the entire expansion, enclosing a rectangle of area $P_1(V_2 - V_1)$, which exceeds the area under isothermal and adiabatic curves.",
    "Hard"
  );
  add(
    "The dimension of mechanical work ($w = -\\int P dV$) is:",
    ["$[\\text{M} \\text{L}^2 \\text{T}^{-2}]$", "$[\\text{M} \\text{L}^{-1} \\text{T}^{-2}]$", "$[\\text{M} \\text{L} \\text{T}^{-1}]$", "$[\\text{M} \\text{L}^3 \\text{T}^{-2}]$"],
    0,
    "Pressure is $[\\text{M}\\text{L}^{-1}\\text{T}^{-2}]$ and volume is $[\\text{L}^3]$. Their product is $[\\text{M}\\text{L}^2\\text{T}^{-2}]$, which has the dimension of energy (Joules).",
    "Easy"
  );
  add(
    "If $1\\text{ mole}$ of an ideal gas at $27^\\circ\\text{C}$ expands reversibly and isothermally from $1\\text{ atm}$ to $0.1\\text{ atm}$, the work done is approximately:",
    ["$-5744\\text{ J}$", "$-2494\\text{ J}$", "$+5744\\text{ J}$", "$-11488\\text{ J}$"],
    0,
    "$T = 300\\text{ K}$. $w = -2.303 nRT \\log_{10}(P_1 / P_2) = -2.303 \\times 1 \\times 8.314 \\times 300 \\times \\log_{10}(10) = -5744.1\\text{ J}$.",
    "Easy"
  );
  add(
    "During an adiabatic expansion of an ideal gas, the quantity $P^{1-\\gamma} T^\\gamma$ is constant. For a monoatomic gas ($\\gamma = 5/3$), the exponent of $P$ is:",
    ["$-2/3$", "$2/3$", "$5/3$", "$-5/3$"],
    0,
    "$1 - \\gamma = 1 - 5/3 = -2/3$.",
    "Easy"
  );
  add(
    "An ideal gas at $P_1, V_1$ is expanded to $2V_1$ via (I) isothermal and (II) adiabatic paths. If $P_f^{(I)}$ and $P_f^{(II)}$ are the final pressures, then:",
    ["$P_f^{(I)} > P_f^{(II)}$", "$P_f^{(II)} > P_f^{(I)}$", "$P_f^{(I)} = P_f^{(II)}$", "Cannot be determined"],
    0,
    "$P_f^{(I)} = P_1 / 2$. $P_f^{(II)} = P_1 / 2^\\gamma$. Since $\\gamma > 1$, $2^\\gamma > 2$, so $P_f^{(II)} < P_f^{(I)}$.",
    "Easy"
  );
  add(
    "An ideal gas undergoes reversible compression from $V_1$ to $V_2$ ($V_2 < V_1$). The work required is:",
    ["Greater in adiabatic compression than in isothermal compression", "Greater in isothermal compression than in adiabatic compression", "Equal in both processes", "Zero in adiabatic compression"],
    0,
    "During adiabatic compression, the temperature rises, increasing pressure above the isothermal value for every volume. Thus, the area under the adiabatic compression curve is larger.",
    "Medium"
  );
  add(
    "Assertion (A): Work done in a reversible isothermal expansion of an ideal gas is greater than in an irreversible expansion between the same volumes.\nReason (R): In a reversible expansion, the external opposing pressure is kept at maximum possible value ($P_{\\text{ext}} = P_{\\text{int}} - dP$) at every stage.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "By maintaining $P_{\\text{ext}}$ virtually equal to internal pressure throughout, maximum possible area under the $P-V$ curve is obtained. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The adiabatic expansion curve is steeper than the isothermal expansion curve on a $P-V$ diagram.\nReason (R): For an adiabatic process, the slope $\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = \\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}$ where $\\gamma > 1$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since $\\gamma = C_p / C_v > 1$, the slope of the adiabatic curve is $\\gamma$ times steeper than the isothermal curve. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): When an ideal gas undergoes free expansion into vacuum, no cooling occurs.\nReason (R): In free expansion, $w = 0$; if adiabatic, $q = 0$, so $\\Delta U = 0$. Since internal energy of an ideal gas depends solely on temperature, $\\Delta T = 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because there is no opposing force ($P_{\\text{ext}} = 0$), $w = 0$. Since $q = 0$, $\\Delta U = 0 \\implies \\Delta T = 0$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The work done by a gas in an isochoric process is always zero.\nReason (R): Expansion work is given by $w = -\\int P_{\\text{ext}} dV$, and for an isochoric process, $dV = 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "No change in boundary volume means zero mechanical boundary work is performed ($dV = 0 \\implies w = 0$). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "An ideal gas undergoes expansion along a straight line path on a $P-V$ diagram from $(P_1 = 4\\text{ atm}, V_1 = 1\\text{ L})$ to $(P_2 = 1\\text{ atm}, V_2 = 4\\text{ L})$. The work done by the gas is: ($1\\text{ L}\\cdot\\text{atm} = 101.3\\text{ J}$)",
    ["$759.75\\text{ J}$", "$911.7\\text{ J}$", "$303.9\\text{ J}$", "$151.9\\text{ J}$"],
    0,
    "The area under the straight line is a trapezoid: $w_{\\text{by}} = \\frac{P_1 + P_2}{2} (V_2 - V_1) = \\frac{4 + 1}{2} \\times (4 - 1) = 2.5 \\times 3 = 7.5\\text{ L}\\cdot\\text{atm} = 7.5 \\times 101.3 = 759.75\\text{ J}$.",
    "Medium"
  );
  add(
    "An ideal gas expands from volume $V$ to $2V$ under three different conditions: (I) Reversible isothermal, (II) Reversible adiabatic, and (III) Irreversible isobaric at initial pressure $P$. The correct descending order of work done by the gas is:",
    ["$\\text{III} > \\text{I} > \\text{II}$", "$\\text{I} > \\text{II} > \\text{III}$", "$\\text{II} > \\text{I} > \\text{III}$", "$\\text{III} > \\text{II} > \\text{I}$"],
    0,
    "In isobaric expansion (III), pressure stays constant at maximum value $P$, so area is largest: $w = P V$. In isothermal expansion (I), pressure drops hyperbolically: $w = nRT \\ln 2 \\approx 0.693 PV$. In adiabatic expansion (II), pressure drops even faster due to cooling: $w < 0.693 PV$. Hence $\\text{III} > \\text{I} > \\text{II}$.",
    "Hard"
  );

  return q;
}

function getHeatCapacityQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Heat capacity (Cp, Cv) and relation Cp - Cv = R", text, opts, ans, exp, diff, type));

  add(
    "Mayer's relation connecting the molar heat capacities at constant pressure ($C_p$) and constant volume ($C_v$) for $1\\text{ mole}$ of an ideal gas is:",
    ["$C_p - C_v = R$", "$C_v - C_p = R$", "$C_p + C_v = R$", "$C_p / C_v = R$"],
    0,
    "For $1\\text{ mole}$ of an ideal gas, $H = U + PV = U + RT$. Differentiating with respect to $T$ gives $C_p - C_v = R$.",
    "Easy"
  );
  add(
    "The ratio of heat capacities $\\gamma = C_p / C_v$ for a monoatomic ideal gas (such as $\\text{He}, \\text{Ar}$) is:",
    ["$5/3 \\approx 1.67$", "$7/5 = 1.40$", "$4/3 \\approx 1.33$", "$9/7 \\approx 1.29$"],
    0,
    "A monoatomic gas has 3 translational degrees of freedom: $C_v = \\frac{3}{2}R, C_p = \\frac{5}{2}R \\implies \\gamma = \\frac{5/2}{3/2} = \\frac{5}{3} \\approx 1.67$.",
    "Easy"
  );
  add(
    "For a rigid diatomic gas (such as $\\text{O}_2, \\text{N}_2$) at room temperature, the values of $C_v$ and $C_p$ per mole are:",
    ["$C_v = \\frac{5}{2}R, C_p = \\frac{7}{2}R$", "$C_v = \\frac{3}{2}R, C_p = \\frac{5}{2}R$", "$C_v = 3R, C_p = 4R$", "$C_v = \\frac{7}{2}R, C_p = \\frac{9}{2}R$"],
    0,
    "A rigid diatomic molecule has 3 translational + 2 rotational degrees of freedom ($f = 5$). Thus $C_v = \\frac{5}{2}R$ and $C_p = C_v + R = \\frac{7}{2}R$.",
    "Easy"
  );
  add(
    "For a non-linear polyatomic gas (such as $\\text{H}_2\\text{O}, \\text{CH}_4$) without vibrational contributions, $\\gamma = C_p / C_v$ is:",
    ["$4/3 \\approx 1.33$", "$5/3 \\approx 1.67$", "$7/5 = 1.40$", "$9/7 \\approx 1.29$"],
    0,
    "A non-linear polyatomic molecule has 3 translational + 3 rotational degrees of freedom ($f = 6$). $C_v = 3R, C_p = 4R \\implies \\gamma = 4/3 \\approx 1.33$.",
    "Easy"
  );
  add(
    "Why is $C_p$ always greater than $C_v$ for an ideal gas?",
    ["At constant pressure, part of the heat absorbed is used to perform expansion work against external pressure", "At constant volume, the temperature increases slower", "Molecules move faster at constant volume", "The gas molecules dissociate at constant pressure"],
    0,
    "At constant volume ($C_v$), all heat goes into raising internal energy ($q_v = \\Delta U$). At constant pressure ($C_p$), heat must both raise internal energy AND do work of expansion against external pressure ($q_p = \\Delta U + P\\Delta V$).",
    "Easy"
  );
  add(
    "For $n$ moles of an ideal gas, the difference $(C_P - C_V)$ where $C_P$ and $C_V$ are total heat capacities is:",
    ["$nR$", "$R$", "$R / n$", "$n^2 R$"],
    0,
    "Total heat capacity is $C_P = n C_{p,m}$ and $C_V = n C_{v,m}$. Therefore $C_P - C_V = n(C_{p,m} - C_{v,m}) = nR$.",
    "Easy"
  );
  add(
    "If the heat capacity ratio is $\\gamma$, then $C_v$ in terms of $R$ and $\\gamma$ is given by:",
    ["$C_v = \\frac{R}{\\gamma - 1}$", "$C_v = \\frac{\\gamma R}{\\gamma - 1}$", "$C_v = \\frac{R}{\\gamma + 1}$", "$C_v = (\\gamma - 1)R$"],
    0,
    "$C_p - C_v = R \\implies \\gamma C_v - C_v = R \\implies C_v(\\gamma - 1) = R \\implies C_v = \\frac{R}{\\gamma - 1}$.",
    "Easy"
  );
  add(
    "In terms of $\\gamma$ and $R$, the molar heat capacity at constant pressure $C_p$ is:",
    ["$C_p = \\frac{\\gamma R}{\\gamma - 1}$", "$C_p = \\frac{R}{\\gamma - 1}$", "$C_p = \\frac{\\gamma R}{\\gamma + 1}$", "$C_p = (\\gamma + 1)R$"],
    0,
    "$C_p = \\gamma C_v = \\gamma \\left(\\frac{R}{\\gamma - 1}\\right) = \\frac{\\gamma R}{\\gamma - 1}$.",
    "Easy"
  );
  add(
    "For an ideal gas undergoing an adiabatic process, the molar heat capacity $C$ is:",
    ["$0$", "$\\infty$", "$C_v$", "$C_p$"],
    0,
    "In an adiabatic process, $q = 0$. Since molar heat capacity is $C = q / (n \\Delta T)$, $C = 0 / (n \\Delta T) = 0$.",
    "Easy"
  );
  add(
    "For an ideal gas undergoing an isothermal process, the molar heat capacity $C$ is:",
    ["$\\infty$", "$0$", "$R$", "$C_p - C_v$"],
    0,
    "In an isothermal process, $\\Delta T = 0$. Since heat is exchanged ($q \\neq 0$), $C = q / (n \\times 0) = \\infty$.",
    "Easy"
  );
  add(
    "If $C_p$ and $C_v$ are specific heat capacities (per gram) of a gas with molar mass $M$, the relation between them is:",
    ["$C_p - C_v = \\frac{R}{M}$", "$C_p - C_v = R$", "$C_p - C_v = M R$", "$C_p - C_v = \\frac{M}{R}$"],
    0,
    "Molar heat capacity $C_{p,m} = M C_p$ and $C_{v,m} = M C_v$. Since $C_{p,m} - C_{v,m} = R$, we have $M(C_p - C_v) = R \\implies C_p - C_v = \\frac{R}{M}$.",
    "Medium"
  );
  add(
    "For a gas mixture containing $1\\text{ mole}$ of He (monoatomic) and $1\\text{ mole}$ of $\\text{O}_2$ (diatomic), the effective molar heat capacity $C_{v,\\text{mix}}$ is:",
    ["$2R$", "$\\frac{3}{2}R$", "$\\frac{5}{2}R$", "$3R$"],
    0,
    "$C_{v,\\text{mix}} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{1 \\times (1.5R) + 1 \\times (2.5R)}{1 + 1} = \\frac{4R}{2} = 2R$.",
    "Medium"
  );
  add(
    "For the same gas mixture ($1\\text{ mol He} + 1\\text{ mol O}_2$), the value of $\\gamma_{\\text{mix}}$ is:",
    ["$1.50$", "$1.40$", "$1.67$", "$1.33$"],
    0,
    "$C_{p,\\text{mix}} = C_{v,\\text{mix}} + R = 2R + R = 3R$. Thus $\\gamma_{\\text{mix}} = \\frac{C_{p,\\text{mix}}}{C_{v,\\text{mix}}} = \\frac{3R}{2R} = 1.50$.",
    "Medium"
  );
  add(
    "A gas has $C_p / C_v = 1.40$. The gas is most likely:",
    ["Diatomic (like $\\text{N}_2$ or $\\text{CO}$)", "Monoatomic (like $\\text{Ar}$)", "Triatomic non-linear (like $\\text{SO}_2$)", "Tetraatomic (like $\\text{NH}_3$)"],
    0,
    "$\\gamma = 1.40 = 7/5$, which corresponds to a rigid diatomic molecule possessing 5 active degrees of freedom at ordinary temperatures.",
    "Easy"
  );
  add(
    "At very high temperatures, vibrational degrees of freedom become active in a diatomic molecule. Each vibrational mode contributes how much to $C_v$?",
    ["$R$ ($1/2 R$ kinetic $+ 1/2 R$ potential)", "$\\frac{1}{2}R$", "$\\frac{3}{2}R$", "$2R$"],
    0,
    "A vibrational mode has both kinetic energy and potential energy terms (harmonic oscillator), contributing $\\frac{1}{2}RT + \\frac{1}{2}RT = RT$ to internal energy, and hence $R$ to $C_v$.",
    "Medium"
  );
  add(
    "For a diatomic gas with active vibrational motion, $C_v$ and $C_p$ per mole become:",
    ["$C_v = \\frac{7}{2}R, C_p = \\frac{9}{2}R$", "$C_v = \\frac{5}{2}R, C_p = \\frac{7}{2}R$", "$C_v = 3R, C_p = 4R$", "$C_v = 4R, C_p = 5R$"],
    0,
    "$C_v = C_{v,\\text{trans}} + C_{v,\\text{rot}} + C_{v,\\text{vib}} = \\frac{3}{2}R + R + R = \\frac{7}{2}R$. Then $C_p = C_v + R = \\frac{9}{2}R$.",
    "Medium"
  );
  add(
    "For a polytropic process $P V^n = \\text{constant}$, the molar heat capacity of an ideal gas is given by:",
    ["$C = C_v + \\frac{R}{1 - n}$", "$C = C_p + \\frac{R}{1 - n}$", "$C = C_v - \\frac{R}{n}$", "$C = \\frac{R}{\\gamma - n}$"],
    0,
    "First Law: $dq = dU - dw = n C_v dT + P dV$. For $PV^n = C$, $P dV = \\frac{nR dT}{1 - n}$. Thus $C = \\frac{dq}{n dT} = C_v + \\frac{R}{1 - n}$.",
    "Hard"
  );
  add(
    "For an isobaric process ($n = 0$ in $PV^n = \\text{const}$), the polytropic molar heat capacity formula yields:",
    ["$C = C_v + R = C_p$", "$C = C_v$", "$C = 0$", "$C = \\infty$"],
    0,
    "Substituting $n = 0$ into $C = C_v + \\frac{R}{1 - n}$ gives $C = C_v + R = C_p$.",
    "Easy"
  );
  add(
    "For an isothermal process ($n = 1$ in $PV^n = \\text{const}$), the polytropic formula gives:",
    ["$C = \\infty$", "$C = 0$", "$C = C_v$", "$C = C_p$"],
    0,
    "Substituting $n = 1$ into $C = C_v + \\frac{R}{1 - 1} = C_v + \\frac{R}{0} = \\infty$.",
    "Easy"
  );
  add(
    "For an adiabatic process ($n = \\gamma$), the polytropic formula gives:",
    ["$C = C_v + \\frac{R}{1 - \\gamma} = 0$", "$C = C_p$", "$C = \\infty$", "$C = R$"],
    0,
    "Since $C_v = \\frac{R}{\\gamma - 1} = -\\frac{R}{1 - \\gamma}$, $C = C_v + \\frac{R}{1 - \\gamma} = C_v - C_v = 0$.",
    "Easy"
  );
  add(
    "The SI unit of molar heat capacity is:",
    ["$\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$", "$\\text{J}\\cdot\\text{K}^{-1}$", "$\\text{J}\\cdot\\text{g}^{-1}\\cdot\\text{K}^{-1}$", "$\\text{cal}\\cdot\\text{g}^{-1}$"],
    0,
    "Molar heat capacity is energy per mole per Kelvin: $\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$.",
    "Easy"
  );
  add(
    "For an ideal gas, the internal pressure $\\pi_T = \\left(\\frac{\\partial U}{\\partial V}\\right)_T$ is equal to:",
    ["Zero", "$P$", "$RT / V$", "$nRT$"],
    0,
    "Thermodynamic equation of state gives $\\left(\\frac{\\partial U}{\\partial V}\\right)_T = T\\left(\\frac{\\partial P}{\\partial T}\\right)_V - P$. For ideal gas $P = RT/V \\implies (\\partial P/\\partial T)_V = R/V$. Thus $T(R/V) - P = P - P = 0$.",
    "Medium"
  );
  add(
    "General thermodynamic relation for $(C_p - C_v)$ for any substance (solid, liquid, or gas) is:",
    ["$C_p - C_v = T \\left(\\frac{\\partial P}{\\partial T}\\right)_V \\left(\\frac{\\partial V}{\\partial T}\\right)_P$", "$C_p - C_v = R$", "$C_p - C_v = P \\left(\\frac{\\partial V}{\\partial T}\\right)_P$", "$C_p - C_v = T \\left(\\frac{\\partial V}{\\partial P}\\right)_T$"],
    0,
    "By thermodynamic differential identities, $C_p - C_v = \\left[P + \\left(\\frac{\\partial U}{\\partial V}\\right)_T\\right] \\left(\\frac{\\partial V}{\\partial T}\\right)_P = T \\left(\\frac{\\partial P}{\\partial T}\\right)_V \\left(\\frac{\\partial V}{\\partial T}\\right)_P$.",
    "Hard"
  );
  add(
    "For an incompressible substance (like ideal solids or liquids where volume does not change with temperature, $\\Delta V \\approx 0$):",
    ["$C_p \\approx C_v$", "$C_p \\gg C_v$", "$C_v = 0$", "$C_p - C_v = R$"],
    0,
    "Since solids and liquids have very small thermal expansion coefficients, negligible expansion work is done, so $C_p \\approx C_v$.",
    "Easy"
  );
  add(
    "At absolute zero ($T \\to 0\\text{ K}$), the heat capacity of any crystalline solid approaches:",
    ["Zero (according to Debye $T^3$ law)", "A constant value $3R$ (Dulong-Petit)", "Infinity", "$R$"],
    0,
    "According to Debye's $T^3$ law and quantum mechanics, lattice vibrations freeze out as $T \\to 0$, causing $C_v \\to 0$ as $T^3$.",
    "Medium"
  );
  add(
    "According to the Dulong-Petit law, the molar heat capacity of most solid elements at high temperature is approximately:",
    ["$3R \\approx 25\\text{ J/(mol}\\cdot\\text{K)}$", "$R$", "$\\frac{3}{2}R$", "$6R$"],
    0,
    "In a 3D solid lattice, each atom has 3 vibrational degrees of freedom (each with kinetic and potential energy), giving $C_v = 3 \\times R = 3R \\approx 24.9\\text{ J/(mol}\\cdot\\text{K)}$.",
    "Medium"
  );
  add(
    "How much heat is required to raise the temperature of $2\\text{ moles}$ of an ideal monoatomic gas from $27^\\circ\\text{C}$ to $127^\\circ\\text{C}$ at constant volume? ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$)",
    ["$2494.2\\text{ J}$", "$4157\\text{ J}$", "$1247.1\\text{ J}$", "$3325.6\\text{ J}$"],
    0,
    "$\\Delta T = 127 - 27 = 100\\text{ K}$. $q_v = n C_v \\Delta T = 2 \\times \\left(\\frac{3}{2} \\times 8.314\\right) \\times 100 = 3 \\times 8.314 \\times 100 = 2494.2\\text{ J}$.",
    "Easy"
  );
  add(
    "How much heat is required to raise the temperature of $2\\text{ moles}$ of an ideal monoatomic gas from $27^\\circ\\text{C}$ to $127^\\circ\\text{C}$ at constant pressure? ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$)",
    ["$4157\\text{ J}$", "$2494.2\\text{ J}$", "$5819.8\\text{ J}$", "$1662.8\\text{ J}$"],
    0,
    "$q_p = n C_p \\Delta T = 2 \\times \\left(\\frac{5}{2} \\times 8.314\\right) \\times 100 = 5 \\times 8.314 \\times 100 = 4157\\text{ J}$.",
    "Easy"
  );
  add(
    "Assertion (A): For an ideal gas, $C_p - C_v = R$.\nReason (R): At constant pressure, work of expansion ($P\\Delta V = R\\Delta T$ for 1 mole) is done in addition to increasing the internal energy.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Molar heat capacity difference $C_p - C_v$ represents the work done per degree rise in temperature during expansion against constant pressure: $P(\\Delta V / \\Delta T) = R$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The heat capacity of an ideal gas in an isothermal process is infinite.\nReason (R): In an isothermal process, $\\Delta T = 0$, so $C = q / \\Delta T = \\infty$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Heat is absorbed or evolved without any change in temperature, making effective heat capacity infinite. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "For a triatomic linear gas (like $\\text{CO}_2$ at moderate temperatures without vibration), the molar heat capacity at constant volume $C_v$ is:",
    ["$\\frac{5}{2}R$", "$\\frac{3}{2}R$", "$3R$", "$\\frac{7}{2}R$"],
    0,
    "A linear molecule has 3 translational and 2 rotational degrees of freedom ($f = 5$). Thus $C_v = \\frac{5}{2}R$ and $C_p = \\frac{7}{2}R$.",
    "Medium"
  );
  add(
    "For a non-linear triatomic gas (like $\\text{SO}_2$ or $\\text{H}_2\\text{O}$ vapor at moderate temperatures), the molar heat capacity at constant pressure $C_p$ is:",
    ["$4R$", "$3R$", "$\\frac{7}{2}R$", "$5R$"],
    0,
    "A non-linear molecule has 3 translational and 3 rotational degrees of freedom ($f = 6$). $C_v = 3R \\implies C_p = C_v + R = 3R + R = 4R$.",
    "Easy"
  );
  add(
    "An ideal monoatomic gas undergoes a process where pressure is directly proportional to volume ($P \\propto V$). What is its molar heat capacity for this process?",
    ["$2R$", "$\\frac{3}{2}R$", "$\\frac{5}{2}R$", "$3R$"],
    0,
    "$P V^{-1} = \\text{constant} \\implies n = -1$. Polytropic heat capacity: $C = C_v + \\frac{R}{1 - n} = \\frac{3}{2}R + \\frac{R}{1 - (-1)} = \\frac{3}{2}R + \\frac{1}{2}R = 2R$.",
    "Hard"
  );
  add(
    "An ideal monoatomic gas undergoes a process in which temperature is proportional to the square of its volume ($T \\propto V^2$). Its molar heat capacity is:",
    ["$2R$", "$R$", "$\\frac{5}{2}R$", "$\\frac{3}{2}R$"],
    0,
    "Using $T = PV/nR$, $T \\propto V^2 \\implies PV \\propto V^2 \\implies P \\propto V \\implies PV^{-1} = \\text{const}$. Thus $n = -1$, giving $C = C_v + R/2 = 1.5R + 0.5R = 2R$.",
    "Hard"
  );
  add(
    "An ideal gas undergoes a process where $PT = \\text{constant}$. Its molar heat capacity in terms of $C_v$ is:",
    ["$C_v + 2R$", "$C_v + R$", "$C_v - R$", "$C_v - 2R$"],
    0,
    "Using $T \\propto PV$, $P(PV) = \\text{const} \\implies P^2 V = \\text{const} \\implies P V^{1/2} = \\text{const} \\implies n = 1/2$. $C = C_v + \\frac{R}{1 - 1/2} = C_v + 2R$.",
    "Hard"
  );
  add(
    "For $1\\text{ mole}$ of an ideal gas, what is the change in internal energy when its temperature increases by $\\Delta T$ during an isobaric expansion?",
    ["$C_v \\Delta T$", "$C_p \\Delta T$", "$(C_p - C_v)\\Delta T$", "$R \\Delta T$"],
    0,
    "For an ideal gas, internal energy is strictly a function of temperature. Regardless of the process path (isobaric, isothermal, isochoric), $\\Delta U = n C_v \\Delta T$.",
    "Medium"
  );
  add(
    "During the isobaric heating of an ideal diatomic gas, what fraction of the supplied heat is converted into internal energy $(\\Delta U / q_p)$?",
    ["$5/7$", "$2/7$", "$3/5$", "$2/5$"],
    0,
    "$\\Delta U = n C_v \\Delta T$ and $q_p = n C_p \\Delta T$. The fraction is $\\frac{\\Delta U}{q_p} = \\frac{C_v}{C_p} = \\frac{5/2 R}{7/2 R} = \\frac{5}{7} \\approx 71.4\\%$.",
    "Medium"
  );
  add(
    "During the isobaric expansion of an ideal monoatomic gas, what percentage of the heat absorbed is converted into expansion work?",
    ["$40\\%$", "$60\\%$", "$28.6\\%$", "$50\\%$"],
    0,
    "Work $w_{\\text{by}} = P\\Delta V = nR\\Delta T$. Heat $q_p = n C_p \\Delta T = n(5/2 R)\\Delta T$. Fraction = $\\frac{nR}{5/2 nR} = \\frac{2}{5} = 40\\%$.",
    "Medium"
  );
  add(
    "During the isobaric expansion of an ideal diatomic gas, what percentage of the heat absorbed is converted into expansion work?",
    ["$28.6\\%$", "$40.0\\%$", "$71.4\\%$", "$20.0\\%$"],
    0,
    "Fraction = $\\frac{nR\\Delta T}{n C_p \\Delta T} = \\frac{R}{7/2 R} = \\frac{2}{7} \\approx 28.57\\%$.",
    "Medium"
  );
  add(
    "If $c_p$ and $c_v$ represent specific heats per gram, and $c_p - c_v = a$ for $\\text{H}_2$ gas and $b$ for $\\text{N}_2$ gas, the ratio $a / b$ is:",
    ["14", "1/14", "28", "1"],
    0,
    "$a = R / M_{\\text{H}_2} = R / 2$. $b = R / M_{\\text{N}_2} = R / 28$. Therefore $a / b = (R/2) / (R/28) = 28 / 2 = 14$.",
    "Medium"
  );
  add(
    "Two moles of Helium (monoatomic) are mixed with three moles of Hydrogen (diatomic). The effective $C_v$ of the mixture is:",
    ["$2.1R$", "$2.0R$", "$2.5R$", "$1.8R$"],
    0,
    "$C_{v,\\text{mix}} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{2(1.5R) + 3(2.5R)}{2 + 3} = \\frac{3R + 7.5R}{5} = \\frac{10.5R}{5} = 2.1R$.",
    "Medium"
  );
  add(
    "For an ideal monoatomic gas undergoing the process $PV^2 = \\text{constant}$, its molar heat capacity is:",
    ["$0.5R$", "$1.5R$", "$-0.5R$", "$2.5R$"],
    0,
    "Here $n = 2$. $C = C_v + \\frac{R}{1 - n} = \\frac{3}{2}R + \\frac{R}{1 - 2} = 1.5R - R = 0.5R$.",
    "Medium"
  );
  add(
    "When an ideal gas undergoes a polytropic process with molar heat capacity $C < 0$, supplying heat to the gas results in:",
    ["A decrease in temperature", "An increase in temperature", "No change in temperature", "Condensation of the gas"],
    0,
    "By definition $C = q / \\Delta T$. If $C < 0$ and heat is added ($q > 0$), then $\\Delta T < 0$. This occurs because the gas does more expansion work than the heat absorbed ($w_{\\text{by}} > q$), drawing energy from its own internal energy.",
    "Hard"
  );
  add(
    "If an ideal gas has $f$ degrees of freedom, its adiabatic index $\\gamma$ is given by:",
    ["$1 + \\frac{2}{f}$", "$1 + \\frac{f}{2}$", "$\\frac{f}{f + 2}$", "$1 - \\frac{2}{f}$"],
    0,
    "$C_v = \\frac{f}{2}R$ and $C_p = \\left(\\frac{f}{2} + 1\\right)R$. Therefore $\\gamma = \\frac{C_p}{C_v} = \\frac{f/2 + 1}{f/2} = 1 + \\frac{2}{f}$.",
    "Easy"
  );
  add(
    "If an ideal gas has 6 degrees of freedom, its value of $\\gamma$ is:",
    ["$1.33$ ($4/3$)", "$1.67$ ($5/3$)", "$1.40$ ($7/5$)", "$1.25$ ($5/4$)"],
    0,
    "$\\gamma = 1 + \\frac{2}{f} = 1 + \\frac{2}{6} = 1 + \\frac{1}{3} = \\frac{4}{3} \\approx 1.33$.",
    "Easy"
  );
  add(
    "Assertion (A): The ratio $C_p / C_v$ for a monoatomic gas is greater than that for a diatomic gas.\nReason (R): A monoatomic gas has fewer degrees of freedom ($f = 3$) than a diatomic gas ($f = 5$), and $\\gamma = 1 + 2/f$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "For monoatomic gas $\\gamma = 1 + 2/3 = 1.67$. For diatomic gas $\\gamma = 1 + 2/5 = 1.40$. Since $f$ is in the denominator, fewer degrees of freedom yield higher $\\gamma$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In an isobaric heating of an ideal gas, only a fraction of the supplied heat increases the internal energy.\nReason (R): At constant pressure, the volume increases upon heating, causing the system to perform expansion work on the surroundings.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because $q_p = \\Delta U + P\\Delta V$, part of the energy goes into $P\\Delta V$ work, so $\\Delta U < q_p$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getFirstLawQuestions,
  getWorkExpansionsQuestions,
  getHeatCapacityQuestions
};
