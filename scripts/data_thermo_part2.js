// Chemical Thermodynamics - Part 2
// Subtopics:
// 1. Enthalpy (ΔH) (47 questions)
// 2. Hess's law of constant heat summation (47 questions)
// 3. Entropy (ΔS) (47 questions)

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

function getEnthalpyQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Enthalpy (ΔH)", text, opts, ans, exp, diff, type));

  add(
    "Enthalpy ($H$) is defined mathematically as:",
    ["$H = U + PV$", "$H = U - PV$", "$H = U + TS$", "$H = G + TS$"],
    0,
    "By definition, enthalpy $H$ is the sum of internal energy $U$ and pressure-volume product: $H = U + PV$.",
    "Easy"
  );
  add(
    "For an ideal gas reaction, the relationship between enthalpy change ($\\Delta H$) and internal energy change ($\\Delta U$) at constant temperature is:",
    ["$\\Delta H = \\Delta U + \\Delta n_g RT$", "$\\Delta H = \\Delta U - \\Delta n_g RT$", "$\\Delta U = \\Delta H + \\Delta n_g RT$", "$\\Delta H = \\Delta U + P\\Delta V + V\\Delta P$"],
    0,
    "Since $H = U + PV$ and for ideal gases $PV = n_g RT$, at constant temperature $\\Delta(PV) = \\Delta n_g RT$, giving $\\Delta H = \\Delta U + \\Delta n_g RT$.",
    "Easy"
  );
  add(
    "For which of the following gaseous reactions is $\\Delta H = \\Delta U$?",
    ["$\\text{H}_2\\text{(g)} + \\text{I}_2\\text{(g)} \\rightarrow 2\\text{HI(g)}$", "$2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{SO}_3\\text{(g)}$", "$\\text{PCl}_5\\text{(g)} \\rightarrow \\text{PCl}_3\\text{(g)} + \\text{Cl}_2\\text{(g)}$", "$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$"],
    0,
    "$\\Delta n_g = n_g(\\text{products}) - n_g(\\text{reactants}) = 2 - (1 + 1) = 0$. When $\\Delta n_g = 0$, $\\Delta H = \\Delta U$.",
    "Easy"
  );
  add(
    "For the combustion of benzene: $\\text{C}_6\\text{H}_6\\text{(l)} + \\frac{15}{2}\\text{O}_2\\text{(g)} \\rightarrow 6\\text{CO}_2\\text{(g)} + 3\\text{H}_2\\text{O(l)}$ at $298\\text{ K}$, $\\Delta n_g$ is:",
    ["$-1.5$", "$+1.5$", "$-2.5$", "$0$"],
    0,
    "Only gaseous species are counted. Products: $6\\text{ mol CO}_2\\text{(g)}$. Reactants: $7.5\\text{ mol O}_2\\text{(g)}$. Benzene and water are liquids. $\\Delta n_g = 6 - 7.5 = -1.5$.",
    "Easy"
  );
  add(
    "For the reaction $\\text{PCl}_5\\text{(g)} \\rightarrow \\text{PCl}_3\\text{(g)} + \\text{Cl}_2\\text{(g)}$ at $298\\text{ K}$:",
    ["$\\Delta H > \\Delta U$", "$\\Delta H < \\Delta U$", "$\\Delta H = \\Delta U$", "$\\Delta H = 0$"],
    0,
    "$\\Delta n_g = (1 + 1) - 1 = +1 > 0$. Since $\\Delta H = \\Delta U + \\Delta n_g RT$ and $\\Delta n_g > 0$, $\\Delta H > \\Delta U$.",
    "Easy"
  );
  add(
    "For the synthesis of ammonia $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$ at $298\\text{ K}$:",
    ["$\\Delta H < \\Delta U$", "$\\Delta H > \\Delta U$", "$\\Delta H = \\Delta U$", "$\\Delta U = 0$"],
    0,
    "$\\Delta n_g = 2 - (1 + 3) = -2 < 0$. Therefore $\\Delta H = \\Delta U - 2RT \\implies \\Delta H < \\Delta U$.",
    "Easy"
  );
  add(
    "The standard state of an element or substance in chemical thermodynamics is defined at:",
    ["$1\\text{ bar}$ pressure and a specified temperature (usually $298.15\\text{ K}$)", "$1\\text{ atm}$ pressure and $0^\\circ\\text{C}$", "$10\\text{ bar}$ pressure and $273\\text{ K}$", "Any arbitrary temperature and pressure"],
    0,
    "By IUPAC convention, the standard state of a substance is its pure, most stable form at $1\\text{ bar}$ pressure at the specified temperature (conventionally $298.15\\text{ K}$).",
    "Easy"
  );
  add(
    "The standard enthalpy of formation ($\\Delta_f H^\\circ$) is arbitrarily taken as ZERO for which of the following substances?",
    ["$\\text{C(graphite)}$", "$\\text{C(diamond)}$", "$\\text{CO}_2\\text{(g)}$", "$\\text{H}_2\\text{O(l)}$"],
    0,
    "By thermodynamic convention, $\\Delta_f H^\\circ = 0$ for pure chemical elements in their most stable allotropic reference state at $298\\text{ K}$ and $1\\text{ bar}$ (graphite for carbon, rhombic sulfur, white phosphorus).",
    "Easy"
  );
  add(
    "For which of the following elements in the given state is $\\Delta_f H^\\circ \\neq 0$ at $298\\text{ K}$ and $1\\text{ bar}$?",
    ["$\\text{Br}_2\\text{(g)}$", "$\\text{Br}_2\\text{(l)}$", "$\\text{I}_2\\text{(s)}$", "$\\text{Cl}_2\\text{(g)}$"],
    0,
    "The standard state of bromine at $298\\text{ K}$ is liquid ($\\text{Br}_2\\text{(l)}$), for which $\\Delta_f H^\\circ = 0$. For gaseous bromine $\\text{Br}_2\\text{(g)}$, $\\Delta_f H^\\circ > 0$ (equal to enthalpy of vaporization).",
    "Medium"
  );
  add(
    "Which allotrope of sulfur is taken as the standard state with $\\Delta_f H^\\circ = 0$?",
    ["Rhombic sulfur ($\\alpha$-sulfur)", "Monoclinic sulfur ($\\beta$-sulfur)", "Plastic sulfur", "Colloidal sulfur"],
    0,
    "Rhombic sulfur is the thermodynamically most stable allotrope of sulfur at $298\\text{ K}$ and $1\\text{ bar}$, so its $\\Delta_f H^\\circ$ is defined as zero.",
    "Easy"
  );
  add(
    "Which allotrope of phosphorus is chosen as the standard state reference with $\\Delta_f H^\\circ = 0$?",
    ["White phosphorus ($P_4$)", "Red phosphorus", "Black phosphorus", "Violet phosphorus"],
    0,
    "By IUPAC convention, although black phosphorus is slightly more stable, white phosphorus is defined as the standard reference state with $\\Delta_f H^\\circ = 0$ due to reproducibility.",
    "Medium"
  );
  add(
    "The standard enthalpy of combustion ($\\Delta_c H^\\circ$) of any fuel or organic compound is always:",
    ["Negative (exothermic)", "Positive (endothermic)", "Zero", "Can be positive or negative"],
    0,
    "Combustion is an oxidation reaction that liberates heat, so the enthalpy of combustion is always negative ($\\Delta_c H^\\circ < 0$).",
    "Easy"
  );
  add(
    "The heat of neutralization of a strong acid (like $\\text{HCl}$) by a strong base (like $\\text{NaOH}$) in dilute aqueous solution is constant and equals:",
    ["$-57.1\\text{ kJ/mol}$ ($-13.7\\text{ kcal/mol}$)", "$-114.2\\text{ kJ/mol}$", "$-28.5\\text{ kJ/mol}$", "$+57.1\\text{ kJ/mol}$"],
    0,
    "Neutralization of strong acids and strong bases always represents the same net ionic reaction: $\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$ with $\\Delta H = -57.1\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "When a weak acid (such as $\\text{CH}_3\\text{COOH}$) is neutralized by a strong base ($\\text{NaOH}$), the magnitude of heat released is less than $57.1\\text{ kJ/mol}$ because:",
    ["Part of the heat is consumed in the complete dissociation of the weak acid", "Weak acid releases more heat", "Sodium acetate absorbs heat", "Water does not form"],
    0,
    "Weak acids are incompletely ionized in solution. Some heat is consumed as enthalpy of dissociation/ionization to break covalent $\\text{O-H}$ bonds.",
    "Easy"
  );
  add(
    "If the heat of neutralization of $\\text{HCN}$ by $\\text{NaOH}$ is $-12.1\\text{ kJ/mol}$, what is the enthalpy of ionization of $\\text{HCN}$?",
    ["$+45.0\\text{ kJ/mol}$", "$-45.0\\text{ kJ/mol}$", "$+69.2\\text{ kJ/mol}$", "$-69.2\\text{ kJ/mol}$"],
    0,
    "$\\Delta H_{\\text{neut}} = \\Delta H_{\\text{ion}} + (-57.1\\text{ kJ/mol}) \\implies -12.1 = \\Delta H_{\\text{ion}} - 57.1 \\implies \\Delta H_{\\text{ion}} = 57.1 - 12.1 = +45.0\\text{ kJ/mol}$.",
    "Medium"
  );
  add(
    "The relationship between enthalpy of sublimation, enthalpy of fusion, and enthalpy of vaporization of a pure substance at the same temperature is:",
    ["$\\Delta_{\\text{sub}} H = \\Delta_{\\text{fus}} H + \\Delta_{\\text{vap}} H$", "$\\Delta_{\\text{sub}} H = \\Delta_{\\text{fus}} H - \\Delta_{\\text{vap}} H$", "$\\Delta_{\\text{vap}} H = \\Delta_{\\text{sub}} H + \\Delta_{\\text{fus}} H$", "$\\Delta_{\\text{fus}} H = \\Delta_{\\text{sub}} H \\times \\Delta_{\\text{vap}} H$"],
    0,
    "By Hess's law, subliming a solid to gas directly is energetically identical to melting the solid to liquid and then vaporizing the liquid: $\\Delta_{\\text{sub}} H = \\Delta_{\\text{fus}} H + \\Delta_{\\text{vap}} H$.",
    "Easy"
  );
  add(
    "The enthalpy of atomization $\\Delta_a H^\\circ$ of methane ($\\text{CH}_4\\text{(g)} \\rightarrow \\text{C(g)} + 4\\text{H(g)}$) is $1660\\text{ kJ/mol}$. What is the mean $\\text{C-H}$ bond enthalpy?",
    ["$415\\text{ kJ/mol}$", "$830\\text{ kJ/mol}$", "$1660\\text{ kJ/mol}$", "$207.5\\text{ kJ/mol}$"],
    0,
    "Methane contains four identical $\\text{C-H}$ bonds. Mean $\\text{C-H}$ bond enthalpy = $\\frac{\\Delta_a H^\\circ}{4} = \\frac{1660}{4} = 415\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "Kirchhoff's equation relates the variation of enthalpy of a reaction with temperature to:",
    ["$\\Delta C_p$ (difference in heat capacities between products and reactants)", "$\\Delta C_v$", "$\\Delta S$", "$\\Delta V$"],
    0,
    "Kirchhoff's equation states $\\left(\\frac{\\partial \\Delta H}{\\partial T}\\right)_P = \\Delta C_p$, so $\\Delta H_{T_2} - \\Delta H_{T_1} = \\int_{T_1}^{T_2} \\Delta C_p dT$.",
    "Easy"
  );
  add(
    "For a reaction $\\text{A} \\rightarrow \\text{B}$, if $\\Delta C_p = 0$, then as temperature increases:",
    ["$\\Delta H$ remains constant", "$\\Delta H$ increases linearly", "$\\Delta H$ decreases", "$\\Delta H$ becomes zero"],
    0,
    "Since $\\frac{d(\\Delta H)}{dT} = \\Delta C_p = 0$, the enthalpy of reaction is independent of temperature.",
    "Easy"
  );
  add(
    "The reaction $\\text{N}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{NO(g)}$ is an exception to most combustion reactions because it is:",
    ["Endothermic ($\\Delta H > 0$)", "Exothermic ($\\Delta H < 0$)", "Spontaneous at room temperature", "Explosive at room temperature"],
    0,
    "The triple bond in $\\text{N}_2$ ($945\\text{ kJ/mol}$) requires more energy to break than is released in forming two $\\text{NO}$ molecules, making the synthesis of $\\text{NO}$ endothermic ($\\Delta H = +180\\text{ kJ/mol}$).",
    "Medium"
  );
  add(
    "For the combustion of $1\\text{ mole}$ of methane: $\\text{CH}_4\\text{(g)} + 2\\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} + 2\\text{H}_2\\text{O(l)}$ at $298\\text{ K}$, what is $\\Delta n_g$?",
    ["$-2$", "$0$", "$+1$", "$-1$"],
    0,
    "Products: $1\\text{ mol CO}_2\\text{(g)}$ (water is liquid). Reactants: $1\\text{ mol CH}_4\\text{(g)} + 2\\text{ mol O}_2\\text{(g)} = 3\\text{ mol}$. $\\Delta n_g = 1 - 3 = -2$.",
    "Easy"
  );
  add(
    "If $\\Delta H = -890\\text{ kJ/mol}$ for the combustion of methane at $298\\text{ K}$, what is $\\Delta U$? ($R = 8.314 \\times 10^{-3}\\text{ kJ/(mol}\\cdot\\text{K)}$)",
    ["$-885\\text{ kJ/mol}$", "$-895\\text{ kJ/mol}$", "$-890\\text{ kJ/mol}$", "$-880\\text{ kJ/mol}$"],
    0,
    "$\\Delta H = \\Delta U + \\Delta n_g RT \\implies \\Delta U = \\Delta H - \\Delta n_g RT = -890 - (-2 \\times 8.314 \\times 10^{-3} \\times 298) = -890 + 4.95 = -885.05\\text{ kJ/mol}$.",
    "Medium"
  );
  add(
    "Which of the following processes is ENDOTHERMIC ($\\Delta H > 0$)?",
    ["Sublimation of dry ice ($\\text{CO}_2\\text{(s)}$)", "Condensation of steam", "Combustion of propane", "Freezing of liquid water"],
    0,
    "Sublimation requires overcoming intermolecular lattice forces by absorbing energy, so it is endothermic. Condensation, combustion, and freezing are all exothermic.",
    "Easy"
  );
  add(
    "The enthalpy of solution $\\Delta_{\\text{sol}} H^\\circ$ of an ionic solid $\\text{AB(s)}$ in water is related to lattice enthalpy and hydration enthalpy by:",
    ["$\\Delta_{\\text{sol}} H^\\circ = \\Delta_{\\text{lattice}} H^\\circ + \\Delta_{\\text{hyd}} H^\\circ$", "$\\Delta_{\\text{sol}} H^\\circ = \\Delta_{\\text{lattice}} H^\\circ - \\Delta_{\\text{hyd}} H^\\circ$", "$\\Delta_{\\text{sol}} H^\\circ = \\Delta_{\\text{hyd}} H^\\circ - \\Delta_{\\text{lattice}} H^\\circ$", "$\\Delta_{\\text{sol}} H^\\circ = \\Delta_{\\text{lattice}} H^\\circ \\times \\Delta_{\\text{hyd}} H^\\circ$"],
    0,
    "Dissolution involves breaking the ionic lattice (endothermic $\\Delta_{\\text{lattice}} H > 0$) followed by solvation/hydration of ions (exothermic $\\Delta_{\\text{hyd}} H < 0$). Thus $\\Delta_{\\text{sol}} H^\\circ = \\Delta_{\\text{lattice}} H^\\circ + \\Delta_{\\text{hyd}} H^\\circ$.",
    "Medium"
  );
  add(
    "An ionic salt dissolves endothermically in water ($\\Delta_{\\text{sol}} H > 0$). This means:",
    ["Lattice energy exceeds the magnitude of hydration energy ($|\\Delta_{\\text{lattice}} H| > |\\Delta_{\\text{hyd}} H|$)", "Hydration energy exceeds lattice energy", "The solution becomes hot", "Lattice energy is zero"],
    0,
    "Since hydration is exothermic and lattice dissociation is endothermic, positive $\\Delta_{\\text{sol}} H$ indicates lattice enthalpy outweighs hydration enthalpy.",
    "Easy"
  );
  add(
    "Standard enthalpy of formation of $\\text{CO}_2\\text{(g)}$ is equal to:",
    ["Standard enthalpy of combustion of graphite", "Standard enthalpy of combustion of diamond", "Standard enthalpy of combustion of $\\text{CO(g)}$", "Zero"],
    0,
    "Formation of $\\text{CO}_2\\text{(g)}$ from elements is $\\text{C(graphite)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)}$, which is simultaneously the combustion reaction of 1 mole of graphite.",
    "Easy"
  );
  add(
    "Standard enthalpy of formation of $\\text{H}_2\\text{O(l)}$ is equal to:",
    ["Standard enthalpy of combustion of hydrogen gas $\\text{H}_2\\text{(g)}$", "Standard enthalpy of combustion of methane", "Standard enthalpy of vaporization of water", "Standard enthalpy of neutralization"],
    0,
    "The formation reaction $\\text{H}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{H}_2\\text{O(l)}$ is precisely the combustion of 1 mole of $\\text{H}_2\\text{(g)}$.",
    "Easy"
  );
  add(
    "For the vaporization of water: $\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{O(g)}$ at $100^\\circ\\text{C}$, the signs of $\\Delta H$ and $\\Delta S$ are:",
    ["$\\Delta H > 0, \\Delta S > 0$", "$\\Delta H < 0, \\Delta S < 0$", "$\\Delta H > 0, \\Delta S < 0$", "$\\Delta H < 0, \\Delta S > 0$"],
    0,
    "Vaporization absorbs heat to overcome hydrogen bonds ($\\Delta H > 0$) and produces a disordered gas from liquid ($\\Delta S > 0$).",
    "Easy"
  );
  add(
    "For the condensation of water vapor to liquid water, the signs of $\\Delta H$ and $\\Delta S$ are:",
    ["$\\Delta H < 0, \\Delta S < 0$", "$\\Delta H > 0, \\Delta S > 0$", "$\\Delta H < 0, \\Delta S > 0$", "$\\Delta H > 0, \\Delta S < 0$"],
    0,
    "Condensation releases heat (exothermic, $\\Delta H < 0$) and decreases entropy as gas transforms into liquid ($\\Delta S < 0$).",
    "Easy"
  );
  add(
    "At constant pressure, if a reaction produces an increase in volume ($\\Delta V > 0$), how does $\\Delta H$ compare to $\\Delta U$?",
    ["$\\Delta H > \\Delta U$", "$\\Delta H < \\Delta U$", "$\\Delta H = \\Delta U$", "Cannot be determined"],
    0,
    "$\\Delta H = \\Delta U + P\\Delta V$. Since $P > 0$ and $\\Delta V > 0$, $P\\Delta V > 0$, hence $\\Delta H > \\Delta U$.",
    "Easy"
  );
  add(
    "For an endothermic reaction at constant pressure, heat absorbed $q_p$ is:",
    ["Positive ($q_p > 0$)", "Negative ($q_p < 0$)", "Zero", "Equal to $-w$"],
    0,
    "In endothermic processes, the system absorbs heat from the surroundings, so $q_p = \\Delta H > 0$.",
    "Easy"
  );
  add(
    "The standard molar enthalpy of formation of which species is defined as ZERO in aqueous solution?",
    ["$\\text{H}^+\\text{(aq)}$", "$\\text{OH}^-\\text{(aq)}$", "$\\text{Na}^+\\text{(aq)}$", "$\\text{Cl}^-\\text{(aq)}$"],
    0,
    "By international thermodynamic convention, the aqueous hydrogen ion at unit activity has $\\Delta_f H^\\circ[\\text{H}^+\\text{(aq)}] = 0$ at all temperatures.",
    "Easy"
  );
  add(
    "The heat capacity difference for a reaction is $\\Delta C_p = 20\\text{ J/K}$. If $\\Delta H_{300} = -100\\text{ kJ}$, what is $\\Delta H_{400}$?",
    ["$-98\\text{ kJ}$", "$-102\\text{ kJ}$", "$-120\\text{ kJ}$", "$-80\\text{ kJ}$"],
    0,
    "$\\Delta H_{400} = \\Delta H_{300} + \\Delta C_p (400 - 300) = -100\\text{ kJ} + 20\\text{ J/K} \\times 100\\text{ K} = -100\\text{ kJ} + 2\\text{ kJ} = -98\\text{ kJ}$.",
    "Medium"
  );
  add(
    "For which reaction is $\\Delta H < \\Delta U$ at room temperature?",
    ["$2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{H}_2\\text{O(l)}$", "$\\text{CaCO}_3\\text{(s)} \\rightarrow \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$", "$\\text{N}_2\\text{O}_4\\text{(g)} \\rightarrow 2\\text{NO}_2\\text{(g)}$", "$\\text{C(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)}$"],
    0,
    "$\\Delta n_g = 0 - (2 + 1) = -3$. Since $\\Delta n_g < 0$, $\\Delta H = \\Delta U - 3RT < \\Delta U$.",
    "Easy"
  );
  add(
    "The value of $\\Delta H - \\Delta U$ for the combustion of glucose $\\text{C}_6\\text{H}_{12}\\text{O}_6\\text{(s)} + 6\\text{O}_2\\text{(g)} \\rightarrow 6\\text{CO}_2\\text{(g)} + 6\\text{H}_2\\text{O(l)}$ at $298\\text{ K}$ is:",
    ["Zero", "$+6RT$", "$-6RT$", "$+RT$"],
    0,
    "$\\Delta n_g = 6\\text{ (from CO}_2) - 6\\text{ (from O}_2) = 0$. Hence $\\Delta H - \\Delta U = \\Delta n_g RT = 0$.",
    "Easy"
  );
  add(
    "Bond dissociation enthalpy is ALWAYS:",
    ["Positive (endothermic)", "Negative (exothermic)", "Zero", "Dependent on the solvent"],
    0,
    "Breaking a chemical bond always requires the input of energy against attractive electrostatic forces, so bond dissociation enthalpy is strictly positive.",
    "Easy"
  );
  add(
    "When bonds are formed during a chemical reaction, energy is:",
    ["Released (exothermic)", "Absorbed (endothermic)", "Conserved without change", "Converted to mass"],
    0,
    "Bond formation stabilizes the electrons in lower potential energy molecular orbitals, releasing energy to the surroundings.",
    "Easy"
  );
  add(
    "The lattice enthalpy of an ionic crystal is defined as the enthalpy change when:",
    ["One mole of ionic solid is dissociated into its gaseous ions", "One mole of solid is dissolved in liquid water", "One mole of gaseous atoms is formed", "One mole of solid melts"],
    0,
    "Lattice enthalpy is the energy required to completely separate 1 mole of solid ionic compound into constituent gaseous ions: $\\text{M}_a\\text{X}_b\\text{(s)} \\rightarrow a\\text{M}^{n+}\\text{(g)} + b\\text{X}^{m-}\\text{(g)}$.",
    "Easy"
  );
  add(
    "For the reaction $\\text{H}_2\\text{(g)} \\rightarrow 2\\text{H(g)}$, the enthalpy change $\\Delta H$ corresponds to:",
    ["Bond dissociation enthalpy of $\\text{H-H}$ and enthalpy of atomization of $\\text{H}_2$", "Enthalpy of formation of $\\text{H}_2$", "Enthalpy of ionization of $\\text{H}$", "Lattice enthalpy of hydrogen"],
    0,
    "Breaking 1 mole of gaseous $\\text{H}_2$ molecules into isolated gaseous atoms defines both the bond dissociation enthalpy and the enthalpy of atomization of hydrogen gas.",
    "Easy"
  );
  add(
    "Which of the following is NOT an intensive property?",
    ["Enthalpy of reaction $\\Delta H$", "Temperature", "Pressure", "Boiling point"],
    0,
    "Total enthalpy of reaction $\\Delta H$ depends on the amount (number of moles) of reactants reacting, so it is extensive.",
    "Easy"
  );
  add(
    "The heat capacity of a reaction mixture in a calorimeter is $10\\text{ kJ/K}$. When $0.1\\text{ mol}$ of fuel burns, the temperature rises by $2\\text{ K}$. The heat of combustion per mole is:",
    ["$-200\\text{ kJ/mol}$", "$+200\\text{ kJ/mol}$", "$-20\\text{ kJ/mol}$", "$+20\\text{ kJ/mol}$"],
    0,
    "Heat absorbed by calorimeter $q_{\\text{cal}} = C \\Delta T = 10\\text{ kJ/K} \\times 2\\text{ K} = 20\\text{ kJ}$. Thus heat released by reaction is $-20\\text{ kJ}$. Per mole = $-20 / 0.1 = -200\\text{ kJ/mol}$.",
    "Medium"
  );
  add(
    "For a liquid-vapor equilibrium $\\text{A(l)} \\rightleftharpoons \\text{A(g)}$ at boiling point $T_b$, what is the relation between $\\Delta_{\\text{vap}} H$ and $\\Delta_{\\text{vap}} U$?",
    ["$\\Delta_{\\text{vap}} H = \\Delta_{\\text{vap}} U + RT_b$", "$\\Delta_{\\text{vap}} H = \\Delta_{\\text{vap}} U$", "$\\Delta_{\\text{vap}} H = \\Delta_{\\text{vap}} U - RT_b$", "$\\Delta_{\\text{vap}} U = \\Delta_{\\text{vap}} H + RT_b$"],
    0,
    "For 1 mole of liquid vaporizing, $\\Delta n_g = 1 - 0 = 1$. Thus $\\Delta H = \\Delta U + \\Delta n_g RT_b = \\Delta U + RT_b$.",
    "Easy"
  );
  add(
    "Assertion (A): For the combustion of liquid benzene at $298\\text{ K}$, $\\Delta H < \\Delta U$.\nReason (R): In the reaction $\\text{C}_6\\text{H}_6\\text{(l)} + 7.5\\text{O}_2\\text{(g)} \\rightarrow 6\\text{CO}_2\\text{(g)} + 3\\text{H}_2\\text{O(l)}$, $\\Delta n_g = -1.5$, so $\\Delta H = \\Delta U - 1.5RT$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since $\\Delta n_g = -1.5 < 0$, $\\Delta H = \\Delta U + \\Delta n_g RT < \\Delta U$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The standard enthalpy of formation of diamond is non-zero at $298\\text{ K}$.\nReason (R): Graphite is the thermodynamically most stable allotrope of carbon at $298\\text{ K}$ and $1\\text{ bar}$, so its $\\Delta_f H^\\circ$ is assigned as zero.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Graphite is defined as the standard state reference, with $\\Delta_f H^\\circ[\\text{C(graphite)}] = 0$, while diamond has $\\Delta_f H^\\circ = +1.9\\text{ kJ/mol}$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Heat of neutralization of any strong acid with any strong base in dilute solution is approximately constant ($-57.1\\text{ kJ/mol}$).\nReason (R): Strong acids and bases are completely dissociated in water, and the net reaction is always $\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The spectator ions play no thermodynamic role; only water formation occurs. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Enthalpy change $\\Delta H$ of an endothermic reaction increases with rise in temperature if $\\Delta C_p > 0$.\nReason (R): According to Kirchhoff's law, $\\frac{d(\\Delta H)}{dT} = \\Delta C_p$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "When $\\Delta C_p > 0$, the derivative is positive, meaning $\\Delta H$ increases as temperature increases. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In a bomb calorimeter, the measured heat of combustion is $\\Delta U$, not $\\Delta H$.\nReason (R): A bomb calorimeter operates at constant volume, where no expansion work is done ($w = 0$), so $q_v = \\Delta U$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because the bomb has rigid walls ($dV = 0$), $w = 0$ and $q_v = \\Delta U$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getHessLawQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Hess's law of constant heat summation", text, opts, ans, exp, diff, type));

  add(
    "Hess's Law of Constant Heat Summation is a direct consequence of:",
    ["The First Law of Thermodynamics and the fact that enthalpy is a state function", "The Second Law of Thermodynamics", "Le Chatelier's Principle", "The Third Law of Thermodynamics"],
    0,
    "Because enthalpy $H$ is a state function, the net change $\\Delta H$ between two states is independent of whether the conversion occurs in one step or several steps.",
    "Easy"
  );
  add(
    "According to Hess's law, the standard enthalpy of reaction $\\Delta_r H^\\circ$ can be calculated from standard enthalpies of formation as:",
    ["$\\sum \\nu_p \\Delta_f H^\\circ(\\text{products}) - \\sum \\nu_r \\Delta_f H^\\circ(\\text{reactants})$", "$\\sum \\nu_r \\Delta_f H^\\circ(\\text{reactants}) - \\sum \\nu_p \\Delta_f H^\\circ(\\text{products})$", "$\\sum \\Delta_f H^\\circ(\\text{products}) + \\sum \\Delta_f H^\\circ(\\text{reactants})$", "$\\Delta_f H^\\circ(\\text{products}) \\times \\Delta_f H^\\circ(\\text{reactants})$"],
    0,
    "$\\Delta_r H^\\circ = \\sum \\nu_p \\Delta_f H^\\circ(\\text{products}) - \\sum \\nu_r \\Delta_f H^\\circ(\\text{reactants})$.",
    "Easy"
  );
  add(
    "When using standard enthalpies of combustion, $\\Delta_r H^\\circ$ is calculated as:",
    ["$\\sum \\nu_r \\Delta_c H^\\circ(\\text{reactants}) - \\sum \\nu_p \\Delta_c H^\\circ(\\text{products})$", "$\\sum \\nu_p \\Delta_c H^\\circ(\\text{products}) - \\sum \\nu_r \\Delta_c H^\\circ(\\text{reactants})$", "$\\sum \\Delta_c H^\\circ(\\text{products}) + \\sum \\Delta_c H^\\circ(\\text{reactants})$", "Zero always"],
    0,
    "Because combusting reactants produces combustion products, which can also be formed by combusting reaction products: $\\Delta_r H^\\circ = \\sum \\Delta_c H^\\circ(\\text{reactants}) - \\sum \\Delta_c H^\\circ(\\text{products})$.",
    "Medium"
  );
  add(
    "When calculating $\\Delta_r H^\\circ$ from bond dissociation enthalpies (BDE) of all gaseous species, the formula is:",
    ["$\\sum \\text{BDE}(\\text{reactants}) - \\sum \\text{BDE}(\\text{products})$", "$\\sum \\text{BDE}(\\text{products}) - \\sum \\text{BDE}(\\text{reactants})$", "$\\sum \\text{BDE}(\\text{reactants}) + \\sum \\text{BDE}(\\text{products})$", "$\\frac{\\sum \\text{BDE}(\\text{products})}{\\sum \\text{BDE}(\\text{reactants})}$"],
    0,
    "Bonds broken in reactants absorb energy ($+\\sum \\text{BDE}_{\\text{reactants}}$) and bonds formed in products release energy ($-\\sum \\text{BDE}_{\\text{products}}$).",
    "Easy"
  );
  add(
    "Given: $\\text{C(graphite)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)}, \\Delta H = -393.5\\text{ kJ}$, and $\\text{CO(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)}, \\Delta H = -283.0\\text{ kJ}$. What is $\\Delta_f H^\\circ$ of $\\text{CO(g)}$?",
    ["$-110.5\\text{ kJ/mol}$", "$+110.5\\text{ kJ/mol}$", "$-676.5\\text{ kJ/mol}$", "$+676.5\\text{ kJ/mol}$"],
    0,
    "Target reaction: $\\text{C(graphite)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{CO(g)}$. Equation 1 minus Equation 2 gives: $\\Delta H = -393.5 - (-283.0) = -110.5\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "Given: (1) $\\text{S(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{SO}_2\\text{(g)}, \\Delta H = -296.8\\text{ kJ}$ and (2) $\\text{S(s)} + 1.5\\text{O}_2\\text{(g)} \\rightarrow \\text{SO}_3\\text{(g)}, \\Delta H = -395.7\\text{ kJ}$. What is $\\Delta H$ for $\\text{SO}_2\\text{(g)} + 0.5\\text{O}_2\\text{(g)} \\rightarrow \\text{SO}_3\\text{(g)}$?",
    ["$-98.9\\text{ kJ}$", "$+98.9\\text{ kJ}$", "$-692.5\\text{ kJ}$", "$+692.5\\text{ kJ}$"],
    0,
    "Subtracting reaction (1) from reaction (2): $\\Delta H = -395.7 - (-296.8) = -98.9\\text{ kJ}$.",
    "Easy"
  );
  add(
    "The Born-Haber cycle applies Hess's law to determine which thermodynamic property of an ionic crystal?",
    ["Lattice energy", "Solvation enthalpy", "Electronegativity", "Dipole moment"],
    0,
    "The Born-Haber cycle uses sublimation enthalpy, ionization enthalpy, dissociation enthalpy, and electron affinity in a closed cycle to calculate lattice enthalpy.",
    "Easy"
  );
  add(
    "In the Born-Haber cycle for $\\text{NaCl(s)}$, which step is EXOTHERMIC?",
    ["Electron affinity of chlorine: $\\text{Cl(g)} + e^- \\rightarrow \\text{Cl}^-\\text{(g)}$", "Sublimation of sodium: $\\text{Na(s)} \\rightarrow \\text{Na(g)}$", "Ionization of sodium: $\\text{Na(g)} \\rightarrow \\text{Na}^+\\text{(g)} + e^-$", "Dissociation of chlorine: $\\frac{1}{2}\\text{Cl}_2\\text{(g)} \\rightarrow \\text{Cl(g)}$"],
    0,
    "Electron gain enthalpy of chlorine is negative ($-349\\text{ kJ/mol}$), meaning energy is released (exothermic). The other three processes require energy input.",
    "Medium"
  );
  add(
    "Given the thermochemical equation: $2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{H}_2\\text{O(l)}, \\Delta H = -571.6\\text{ kJ}$. What is the standard enthalpy of formation $\\Delta_f H^\\circ$ of $\\text{H}_2\\text{O(l)}$?",
    ["$-285.8\\text{ kJ/mol}$", "$-571.6\\text{ kJ/mol}$", "$+285.8\\text{ kJ/mol}$", "$+571.6\\text{ kJ/mol}$"],
    0,
    "The given reaction forms 2 moles of water. Formation enthalpy is defined for 1 mole: $\\Delta_f H^\\circ = -571.6 / 2 = -285.8\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "If a reaction is reversed, the sign of its enthalpy change $\\Delta H$:",
    ["Reverses (multiplied by $-1$)", "Remains unchanged", "Becomes zero", "Becomes squared"],
    0,
    "If $\\text{A} \\rightarrow \\text{B}$ has $\\Delta H$, then $\\text{B} \\rightarrow \\text{A}$ has $-\\Delta H$ by the principle of microscopic reversibility and conservation of energy.",
    "Easy"
  );
  add(
    "If all stoichiometric coefficients in a thermochemical equation are multiplied by a factor $n$, the enthalpy change $\\Delta H$ is:",
    ["Multiplied by $n$", "Divided by $n$", "Raised to the power $n$", "Unchanged"],
    0,
    "Enthalpy is an extensive property; doubling the moles of reactants doubles the total heat released or absorbed.",
    "Easy"
  );
  add(
    "The resonance energy of benzene can be calculated using Hess's law as:",
    ["$\\Delta H_{\\text{combustion}}(\\text{calculated from bond energies}) - \\Delta H_{\\text{combustion}}(\\text{experimental})$", "$\\Delta H_{\\text{fusion}} + \\Delta H_{\\text{vap}}$", "Bond enthalpy of $\\text{C=C}$ bond", "Ionization energy of benzene"],
    0,
    "Resonance energy is the difference between the theoretical enthalpy calculated for Kekulé cyclohexatriene and the experimentally observed enthalpy of benzene (approximately $150\\text{ kJ/mol}$).",
    "Medium"
  );
  add(
    "Given bond energies: $\\text{H-H} = 436\\text{ kJ/mol}$, $\\text{Cl-Cl} = 242\\text{ kJ/mol}$, and $\\text{H-Cl} = 431\\text{ kJ/mol}$. What is $\\Delta_r H^\\circ$ for $\\text{H}_2\\text{(g)} + \\text{Cl}_2\\text{(g)} \\rightarrow 2\\text{HCl(g)}$?",
    ["$-184\\text{ kJ}$", "$+184\\text{ kJ}$", "$-92\\text{ kJ}$", "$+92\\text{ kJ}$"],
    0,
    "$\\Delta H = \\sum \\text{BE}_{\\text{reactants}} - \\sum \\text{BE}_{\\text{products}} = (436 + 242) - 2(431) = 678 - 862 = -184\\text{ kJ}$.",
    "Easy"
  );
  add(
    "From the above data, what is the standard enthalpy of formation $\\Delta_f H^\\circ$ of $\\text{HCl(g)}$?",
    ["$-92\\text{ kJ/mol}$", "$-184\\text{ kJ/mol}$", "$+92\\text{ kJ/mol}$", "$+184\\text{ kJ/mol}$"],
    0,
    "The reaction forms 2 moles of $\\text{HCl}$. Therefore $\\Delta_f H^\\circ[\\text{HCl}] = -184 / 2 = -92\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "Given: $\\Delta H$ for $\\text{A} \\rightarrow \\text{B}$ is $+50\\text{ kJ}$ and for $\\text{B} \\rightarrow \\text{C}$ is $-80\\text{ kJ}$. What is $\\Delta H$ for $\\text{A} \\rightarrow \\text{C}$?",
    ["$-30\\text{ kJ}$", "$+130\\text{ kJ}$", "$-130\\text{ kJ}$", "$+30\\text{ kJ}$"],
    0,
    "Adding the two reactions: $\\Delta H = 50 + (-80) = -30\\text{ kJ}$.",
    "Easy"
  );
  add(
    "Given: $\\text{C(s)} + 2\\text{H}_2\\text{(g)} \\rightarrow \\text{CH}_4\\text{(g)}, \\Delta H = -74.8\\text{ kJ}$. The standard enthalpy of formation of methane is:",
    ["$-74.8\\text{ kJ/mol}$", "$+74.8\\text{ kJ/mol}$", "$-37.4\\text{ kJ/mol}$", "$-149.6\\text{ kJ/mol}$"],
    0,
    "This reaction represents the synthesis of 1 mole of methane from its elements in their standard states, so $\\Delta_f H^\\circ = -74.8\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "Given the enthalpies of combustion of $\\text{C(graphite)}$, $\\text{H}_2\\text{(g)}$, and $\\text{CH}_4\\text{(g)}$ are $-393.5, -285.8,$ and $-890.3\\text{ kJ/mol}$ respectively. What is $\\Delta_f H^\\circ$ of $\\text{CH}_4\\text{(g)}$?",
    ["$-74.8\\text{ kJ/mol}$", "$+74.8\\text{ kJ/mol}$", "$-211.0\\text{ kJ/mol}$", "$+211.0\\text{ kJ/mol}$"],
    0,
    "$\\Delta_f H^\\circ[\\text{CH}_4] = \\Delta_c H[\\text{C}] + 2\\Delta_c H[\\text{H}_2] - \\Delta_c H[\\text{CH}_4] = -393.5 + 2(-285.8) - (-890.3) = -393.5 - 571.6 + 890.3 = -74.8\\text{ kJ/mol}$.",
    "Medium"
  );
  add(
    "Which of the following equations correctly illustrates the Born-Haber cycle for the formation of $\\text{NaCl(s)}$?",
    ["$\\Delta_f H^\\circ = \\Delta_{\\text{sub}} H[\\text{Na}] + \\text{IE}[\\text{Na}] + \\frac{1}{2}\\text{BDE}[\\text{Cl}_2] + \\Delta_{\\text{eg}} H[\\text{Cl}] + U_{\\text{lattice}}$", "$\\Delta_f H^\\circ = \\Delta_{\\text{sub}} H + \\text{IE} - \\text{EA} - U_{\\text{lattice}}$", "$\\Delta_f H^\\circ = U_{\\text{lattice}} - \\text{IE}$", "$\\Delta_f H^\\circ = \\Delta_{\\text{sub}} H + \\text{EA}$"],
    0,
    "All energetic steps (sublimation, ionization, dissociation, electron affinity, and lattice aggregation) sum algebraically to $\\Delta_f H^\\circ$.",
    "Medium"
  );
  add(
    "Given: $\\text{N}_2\\text{(g)} + 2\\text{O}_2\\text{(g)} \\rightarrow 2\\text{NO}_2\\text{(g)}, \\Delta H = 66.4\\text{ kJ}$ and $2\\text{NO(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{NO}_2\\text{(g)}, \\Delta H = -114.1\\text{ kJ}$. What is $\\Delta H$ for $\\text{N}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{NO(g)}$?",
    ["$+180.5\\text{ kJ}$", "$-180.5\\text{ kJ}$", "$+47.7\\text{ kJ}$", "$-47.7\\text{ kJ}$"],
    0,
    "Target: Reaction 1 minus Reaction 2: $\\Delta H = 66.4 - (-114.1) = +180.5\\text{ kJ}$.",
    "Medium"
  );
  add(
    "Given: $\\Delta H_{\\text{combustion}}$ of $\\text{C(graphite)} = -393.5\\text{ kJ/mol}$ and $\\text{C(diamond)} = -395.4\\text{ kJ/mol}$. What is $\\Delta H$ for $\\text{C(graphite)} \\rightarrow \\text{C(diamond)}$?",
    ["$+1.9\\text{ kJ/mol}$", "$-1.9\\text{ kJ/mol}$", "$+788.9\\text{ kJ/mol}$", "$-788.9\\text{ kJ/mol}$"],
    0,
    "$\\Delta H = \\Delta_c H[\\text{graphite}] - \\Delta_c H[\\text{diamond}] = -393.5 - (-395.4) = +1.9\\text{ kJ/mol}$ (endothermic).",
    "Easy"
  );
  add(
    "Why can the enthalpy of formation of $\\text{CO(g)}$ not be measured directly in a calorimeter?",
    ["Combustion of carbon always forms a mixture of $\\text{CO}$ and $\\text{CO}_2$", "Carbon does not react with oxygen", "$\\text{CO}$ is unstable at room temperature", "The reaction is too slow to measure"],
    0,
    "It is impossible to stop the oxidation of carbon strictly at $\\text{CO}$; some $\\text{CO}_2$ always forms. Hence, Hess's law is essential to calculate $\\Delta_f H^\\circ[\\text{CO}]$ indirectly.",
    "Easy"
  );
  add(
    "Hess's law can be used to calculate all of the following EXCEPT:",
    ["The rate of a chemical reaction", "Lattice energies of ionic compounds", "Enthalpies of formation of unstable intermediates", "Enthalpies of transformation of allotropes"],
    0,
    "Hess's law is purely thermodynamic and gives no kinetic information regarding how fast a reaction occurs (reaction rate).",
    "Easy"
  );
  add(
    "Given: $\\text{Fe}_2\\text{O}_3\\text{(s)} + 3\\text{CO(g)} \\rightarrow 2\\text{Fe(s)} + 3\\text{CO}_2\\text{(g)}, \\Delta H = -24.8\\text{ kJ}$ and $3\\text{Fe}_2\\text{O}_3\\text{(s)} + \\text{CO(g)} \\rightarrow 2\\text{Fe}_3\\text{O}_4\\text{(s)} + \\text{CO}_2\\text{(g)}, \\Delta H = -47.2\\text{ kJ}$. Hess's law allows determination of $\\Delta H$ for intermediate iron oxide reductions.",
    ["True", "False", "Only at absolute zero", "Only for gaseous reactions"],
    0,
    "Hess's law applies to any thermochemical reactions regardless of physical states.",
    "Easy"
  );
  add(
    "The bond energy of an $\\text{O=O}$ double bond in $\\text{O}_2\\text{(g)}$ is $498\\text{ kJ/mol}$. What is the enthalpy of atomization of oxygen gas?",
    ["$498\\text{ kJ/mol of }\\text{O}_2$", "$249\\text{ kJ/mol of }\\text{O}_2$", "$996\\text{ kJ/mol of }\\text{O}_2$", "$0\\text{ kJ/mol}$"],
    0,
    "$\\text{O}_2\\text{(g)} \\rightarrow 2\\text{O(g)}$ requires breaking 1 mole of $\\text{O=O}$ bonds, so $\\Delta_a H^\circ = 498\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "Given: $\\text{H}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{H}_2\\text{O(l)}, \\Delta H = -285.8\\text{ kJ}$ and $\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{O(g)}, \\Delta H = +44.0\\text{ kJ}$. What is $\\Delta_f H^\\circ$ of $\\text{H}_2\\text{O(g)}$?",
    ["$-241.8\\text{ kJ/mol}$", "$-329.8\\text{ kJ/mol}$", "$+241.8\\text{ kJ/mol}$", "$+329.8\\text{ kJ/mol}$"],
    0,
    "Adding both equations: $\\Delta_f H^\\circ[\\text{H}_2\\text{O(g)}] = -285.8 + 44.0 = -241.8\\text{ kJ/mol}$.",
    "Easy"
  );
  add(
    "If $\\Delta H_1, \\Delta H_2, \\Delta H_3$ are the enthalpy changes for $\\text{A} \\rightarrow \\text{B}, \\text{B} \\rightarrow \\text{C},$ and $\\text{C} \\rightarrow \\text{A}$ respectively, what is $\\Delta H_1 + \\Delta H_2 + \\Delta H_3$?",
    ["$0$", "$1$", "$\\Delta H_1$", "$\\infty$"],
    0,
    "The sum forms a complete cycle returning to starting state $\\text{A}$. Since enthalpy is a state function, $\\oint dH = 0$.",
    "Easy"
  );
  add(
    "The enthalpy of combustion of benzoic acid is used as a primary standard for calibrating:",
    ["Bomb calorimeters", "Thermometers", "pH meters", "Manometers"],
    0,
    "Benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$) is easily purified, non-hygroscopic, burns cleanly, and has an accurately known $\\Delta_c H^\\circ = -3227\\text{ kJ/mol}$, making it the universal standard for bomb calorimeter calibration.",
    "Easy"
  );
  add(
    "Given that bond energies of $\\text{C-H}, \\text{C-C},$ and $\\text{C=C}$ are $414, 347,$ and $611\\text{ kJ/mol}$ respectively, and $\\text{H-H} = 436\\text{ kJ/mol}$. What is $\\Delta H$ for hydrogenation of ethene: $\\text{CH}_2\\text{=CH}_2\\text{(g)} + \\text{H}_2\\text{(g)} \\rightarrow \\text{CH}_3\\text{-CH}_3\\text{(g)}$?",
    ["$-126\\text{ kJ/mol}$", "$+126\\text{ kJ/mol}$", "$-250\\text{ kJ/mol}$", "$+250\\text{ kJ/mol}$"],
    0,
    "Bonds broken: $1\\text{ C=C } (611) + 1\\text{ H-H } (436) = 1047\\text{ kJ}$. Bonds formed: $1\\text{ C-C } (347) + 2\\text{ C-H } (2 \\times 414 = 828) = 1175\\text{ kJ}$. $\\Delta H = 1047 - 1175 = -128 \\approx -126\\text{ kJ/mol}$ (exothermic).",
    "Medium"
  );
  add(
    "Given that lattice energy of $\\text{NaCl}$ is $788\\text{ kJ/mol}$ and hydration energy of $\\text{Na}^+$ and $\\text{Cl}^-$ are $-406\\text{ kJ/mol}$ and $-378\\text{ kJ/mol}$ respectively. What is the enthalpy of solution of $\\text{NaCl}$ in water?",
    ["$+4\\text{ kJ/mol}$", "$-4\\text{ kJ/mol}$", "$+784\\text{ kJ/mol}$", "$-784\\text{ kJ/mol}$"],
    0,
    "$\\Delta_{\\text{sol}} H = \\Delta_{\\text{lattice}} H + \\Delta_{\\text{hyd}} H = 788 + [(-406) + (-378)] = 788 - 784 = +4\\text{ kJ/mol}$ (slightly endothermic).",
    "Medium"
  );
  add(
    "Which of the following state changes releases the LARGEST amount of energy per gram of substance?",
    ["$\\text{H}_2\\text{O(g)} \\rightarrow \\text{H}_2\\text{O(l)}$", "$\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{O(s)}$", "Combustion of $1\\text{ g}$ of glucose", "Combustion of $1\\text{ g}$ of hydrogen gas"],
    0,
    "Hydrogen gas has the highest calorific value of any chemical fuel ($\\approx 142\\text{ kJ/g}$), releasing by far the most energy per gram.",
    "Easy"
  );
  add(
    "Given: $\\text{C(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)}, \\Delta H = -394\\text{ kJ}$. How much heat is evolved when $6\\text{ g}$ of carbon is completely burned?",
    ["$197\\text{ kJ}$", "$394\\text{ kJ}$", "$788\\text{ kJ}$", "$98.5\\text{ kJ}$"],
    0,
    "Molar mass of carbon is $12\\text{ g/mol}$. $6\\text{ g} = 6/12 = 0.5\\text{ mol}$. Heat evolved = $0.5 \\times 394 = 197\\text{ kJ}$.",
    "Easy"
  );
  add(
    "If the heat of formation of $\\text{NO}_2\\text{(g)}$ is $33.2\\text{ kJ/mol}$, what is $\\Delta H$ for the dimerization: $2\\text{NO}_2\\text{(g)} \\rightarrow \\text{N}_2\\text{O}_4\\text{(g)}$ if $\\Delta_f H^\\circ[\\text{N}_2\\text{O}_4] = 9.16\\text{ kJ/mol}$?",
    ["$-57.24\\text{ kJ}$", "$+57.24\\text{ kJ}$", "$-24.04\\text{ kJ}$", "$+24.04\\text{ kJ}$"],
    0,
    "$\\Delta_r H^\\circ = \\Delta_f H^\\circ[\\text{N}_2\\text{O}_4] - 2\\Delta_f H^\\circ[\\text{NO}_2] = 9.16 - 2(33.2) = 9.16 - 66.4 = -57.24\\text{ kJ}$.",
    "Medium"
  );
  add(
    "The enthalpy of a reaction depends on all of the following EXCEPT:",
    ["The path or mechanism taken from reactants to products", "The physical states of reactants and products", "The allotropic form of elements involved", "The temperature and pressure of the system"],
    0,
    "According to Hess's law, enthalpy change depends exclusively on initial and final states, completely independent of path or mechanism.",
    "Easy"
  );
  add(
    "Standard heat of formation of water is $-286\\text{ kJ/mol}$. How much heat is released when $180\\text{ g}$ of water is formed?",
    ["$2860\\text{ kJ}$", "$286\\text{ kJ}$", "$1430\\text{ kJ}$", "$5720\\text{ kJ}$"],
    0,
    "Molar mass of water is $18\\text{ g/mol}$. $180\\text{ g} = 10\\text{ mol}$. Heat released = $10 \\times 286 = 2860\\text{ kJ}$.",
    "Easy"
  );
  add(
    "Given: $\\text{A} + \\text{B} \\rightarrow \\text{C}, \\Delta H = x$ and $\\text{C} + \\text{D} \\rightarrow \\text{E}, \\Delta H = y$. What is $\\Delta H$ for $\\text{E} \\rightarrow \\text{A} + \\text{B} + \\text{D}$?",
    ["$-(x + y)$", "$x + y$", "$x - y$", "$y - x$"],
    0,
    "Adding the two reactions gives $\\text{A} + \\text{B} + \\text{D} \\rightarrow \\text{E}$ with $\\Delta H = x + y$. Reversing this reaction gives $\\Delta H = -(x + y)$.",
    "Easy"
  );
  add(
    "For which reaction is the enthalpy of reaction equal to the bond enthalpy of $\\text{O-H}$ bond?",
    ["$\\frac{1}{2}\\text{H}_2\\text{O(g)} \\rightarrow \\text{H(g)} + \\frac{1}{2}\\text{O(g)}$", "$\\text{H}_2\\text{O(g)} \\rightarrow 2\\text{H(g)} + \\text{O(g)}$", "$\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)}$", "$\\text{H}_2\\text{O(g)} \\rightarrow \\text{OH(g)} + \\text{H(g)}$"],
    0,
    "Mean bond enthalpy of $\\text{O-H}$ is defined as half of the atomization enthalpy of gaseous water: $\\frac{1}{2}\\text{H}_2\\text{O(g)} \\rightarrow \\text{H(g)} + \\frac{1}{2}\\text{O(g)}$.",
    "Medium"
  );
  add(
    "The electron gain enthalpy of fluorine is less negative than that of chlorine due to:",
    ["Strong inter-electronic repulsions in the compact $2p$ subshell of fluorine", "Lower electronegativity of fluorine", "Higher ionization energy of fluorine", "Smaller nuclear charge in chlorine"],
    0,
    "Adding an electron to the small, crowded $2p$ orbital of fluorine encounters significant electron-electron repulsion, making its $\\Delta_{\\text{eg}} H$ ($-328\\text{ kJ/mol}$) less negative than chlorine's ($-349\\text{ kJ/mol}$).",
    "Medium"
  );
  add(
    "In the thermochemical determination of lattice energy of $\\text{MgO(s)}$, which value makes the largest positive (endothermic) contribution?",
    ["Second ionization energy of magnesium plus second electron gain enthalpy of oxygen", "Sublimation of magnesium", "First ionization energy of magnesium", "Dissociation of oxygen gas"],
    0,
    "Removing the second electron from $\\text{Mg}^+$ ($\text{IE}_2 = 1451\\text{ kJ/mol}$) and adding a second electron against repulsion to form $\\text{O}^{2-}$ ($\Delta_{\\text{eg}} H_2 = +780\\text{ kJ/mol}$) require immense energy, offset by huge lattice enthalpy ($-3791\\text{ kJ/mol}$).",
    "Hard"
  );
  add(
    "Given: $\\text{C(graphite)} \\rightarrow \\text{C(g)}, \\Delta H = 717\\text{ kJ/mol}$ and $\\text{H}_2\\text{(g)} \\rightarrow 2\\text{H(g)}, \\Delta H = 436\\text{ kJ/mol}$. For methane, $\\Delta_f H^\circ = -75\\text{ kJ/mol}$. What is the mean $\\text{C-H}$ bond energy?",
    ["$416\\text{ kJ/mol}$", "$380\\text{ kJ/mol}$", "$450\\text{ kJ/mol}$", "$340\\text{ kJ/mol}$"],
    0,
    "Atomization of $\\text{CH}_4$: $\\Delta_a H = \\Delta_a H[\\text{C}] + 2\\text{BDE}[\\text{H}_2] - \\Delta_f H[\\text{CH}_4] = 717 + 2(436) - (-75) = 717 + 872 + 75 = 1664\\text{ kJ/mol}$. Mean $\\text{C-H}$ bond energy = $1664 / 4 = 416\\text{ kJ/mol}$.",
    "Medium"
  );
  add(
    "Assertion (A): Enthalpy of reaction remains identical whether a reaction occurs in a single step or across ten steps.\nReason (R): Enthalpy is a state function and the First Law of Thermodynamics guarantees path independence.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Hess's law follows from enthalpy being a state function. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The standard enthalpy of formation of $\\text{CO(g)}$ is determined indirectly using Hess's law rather than direct combustion.\nReason (R): Combustion of carbon in limited oxygen always yields a mixture of $\\text{CO}$ and $\\text{CO}_2$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because the incomplete combustion cannot be isolated to yield pure $\\text{CO}$, Hess's law is applied. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): For the calculation of $\\Delta_r H^\\circ$ from bond energies, all reactants and products must be in the gaseous phase.\nReason (R): Bond energy is defined as the energy required to break one mole of bonds in isolated gaseous molecules.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Intermolecular forces in liquids and solids complicate bond energy calculations unless enthalpies of vaporization/sublimation are included. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The heat evolved in a closed cyclic series of reactions is zero.\nReason (R): The net change in any state function over a complete cyclic path is zero.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since $\\Delta H_{\\text{cycle}} = 0$, the sum of enthalpy changes along all steps is zero. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Benzene has an observed enthalpy of combustion that is less exothermic than the calculated value for cyclohexatriene.\nReason (R): Benzene is stabilized by resonance energy of approximately $150\\text{ kJ/mol}$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Resonance stabilization lowers the ground-state energy of benzene, so it releases less energy on combustion. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The standard enthalpy of formation of liquid water is $-285.8\\text{ kJ/mol}$, which is more negative than that of steam ($-241.8\\text{ kJ/mol}$).\nReason (R): Condensation of steam to liquid water is an exothermic process releasing the latent heat of vaporization.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "$\\Delta_f H^\\circ[\\text{H}_2\\text{O(l)}] = \\Delta_f H^\\circ[\\text{H}_2\\text{O(g)}] - \\Delta_{\\text{vap}} H = -241.8 - 44.0 = -285.8\\text{ kJ/mol}$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In a Born-Haber cycle, the lattice energy of $\\text{MgO}$ is roughly four times that of $\\text{NaCl}$.\nReason (R): Lattice energy is proportional to the product of charges $(|z_+ z_-|)$, which is 4 for $\\text{Mg}^{2+}\\text{O}^{2-}$ and 1 for $\\text{Na}^+\\text{Cl}^-$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "By Coulomb's law, lattice energy $\\propto \\frac{|z_1 z_2|}{r_0}$. With both ions divalent, the numerator is $(2)(2)=4$ instead of $(1)(1)=1$. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given that: (1) $\\text{C(s)} + 2\\text{H}_2\\text{(g)} \\rightarrow \\text{CH}_4\\text{(g)}, \\Delta H = -74.8\\text{ kJ}$, (2) $\\text{C(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)}, \\Delta H = -393.5\\text{ kJ}$, and (3) $\\text{H}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{H}_2\\text{O(l)}, \\Delta H = -285.8\\text{ kJ}$. What is the heat of combustion of methane?",
    ["$-890.3\\text{ kJ/mol}$", "$+890.3\\text{ kJ/mol}$", "$-604.5\\text{ kJ/mol}$", "$-965.1\\text{ kJ/mol}$"],
    0,
    "$\\text{CH}_4\\text{(g)} + 2\\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} + 2\\text{H}_2\\text{O(l)}$. $\\Delta_c H = \\Delta H_2 + 2\\Delta H_3 - \\Delta H_1 = -393.5 + 2(-285.8) - (-74.8) = -393.5 - 571.6 + 74.8 = -890.3\\text{ kJ/mol}$.",
    "Medium"
  );

  return q;
}

function getEntropyQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Entropy (ΔS)", text, opts, ans, exp, diff, type));

  add(
    "Thermodynamically, the change in entropy $dS$ for a system undergoing a reversible process at temperature $T$ is defined as:",
    ["$dS = \\frac{dq_{\\text{rev}}}{T}$", "$dS = \\frac{dq_{\\text{irrev}}}{T}$", "$dS = T dq_{\\text{rev}}$", "$dS = \\frac{dw_{\\text{rev}}}{T}$"],
    0,
    "By Clausius's definition, $dS = \\frac{dq_{\\text{rev}}}{T}$. Entropy is a state function defined via reversible heat transfer.",
    "Easy"
  );
  add(
    "The SI unit of entropy is:",
    ["$\\text{J}\\cdot\\text{K}^{-1}$ (or $\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$ for molar entropy)", "$\\text{J}\\cdot\\text{K}$", "$\\text{J}\\cdot\\text{s}^{-1}$", "$\\text{cal}\\cdot\\text{g}^{-1}$"],
    0,
    "Entropy is heat divided by absolute temperature, so its unit is Joules per Kelvin ($\\text{J/K}$).",
    "Easy"
  );
  add(
    "According to the Second Law of Thermodynamics, for any spontaneous (irreversible) process occurring in an isolated system:",
    ["$\\Delta S_{\\text{isolated}} > 0$", "$\\Delta S_{\\text{isolated}} < 0$", "$\\Delta S_{\\text{isolated}} = 0$", "$\\Delta S_{\\text{isolated}} = -\\Delta H / T$"],
    0,
    "The entropy of an isolated system always increases during a spontaneous change and reaches a maximum at equilibrium: $\\Delta S_{\\text{isolated}} \\ge 0$.",
    "Easy"
  );
  add(
    "For a reversible process, the total change in entropy of the universe (system + surroundings) is:",
    ["$\\Delta S_{\\text{univ}} = 0$", "$\\Delta S_{\\text{univ}} > 0$", "$\\Delta S_{\\text{univ}} < 0$", "$\\Delta S_{\\text{univ}} = \\infty$"],
    0,
    "In a reversible process, $dq_{\\text{sys}} = -dq_{\\text{surr}}$ at identical temperature, so $\\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} = 0$.",
    "Easy"
  );
  add(
    "For any irreversible spontaneous process, the total entropy change of the universe satisfies:",
    ["$\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$", "$\\Delta S_{\\text{univ}} = 0$", "$\\Delta S_{\\text{univ}} < 0$", "$\\Delta S_{\\text{sys}} > 0$ always"],
    0,
    "All natural spontaneous processes are irreversible and generate entropy, so $\\Delta S_{\\text{total}} > 0$.",
    "Easy"
  );
  add(
    "Which of the following physical changes results in a DECREASE in entropy ($\\Delta S < 0$)?",
    ["Freezing of liquid water into ice", "Melting of ice into water", "Vaporization of liquid acetone", "Sublimation of solid iodine"],
    0,
    "Ice has a structured crystal lattice with far less molecular disorder than liquid water, so freezing decreases entropy ($\\Delta S < 0$).",
    "Easy"
  );
  add(
    "In which of the following chemical reactions does entropy INCREASE ($\\Delta S > 0$)?",
    ["$\\text{CaCO}_3\\text{(s)} \\rightarrow \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$", "$2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{SO}_3\\text{(g)}$", "$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$", "$\\text{H}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{H}_2\\text{O(l)}$"],
    0,
    "A solid reactant decomposes to produce a gas ($\\text{CO}_2$), greatly increasing gaseous moles and randomness: $\\Delta S > 0$.",
    "Easy"
  );
  add(
    "The entropy of $1\\text{ mole}$ of an ideal gas expanding isothermally from $V_1$ to $V_2$ is given by:",
    ["$\\Delta S = R \\ln(V_2 / V_1)$", "$\\Delta S = R \\ln(V_1 / V_2)$", "$\\Delta S = C_v \\ln(V_2 / V_1)$", "$\\Delta S = 0$"],
    0,
    "For isothermal expansion of an ideal gas, $q_{\\text{rev}} = nRT \\ln(V_2/V_1)$. Thus $\\Delta S = q_{\\text{rev}} / T = nR \\ln(V_2/V_1)$. For 1 mole, $\\Delta S = R \\ln(V_2/V_1)$.",
    "Easy"
  );
  add(
    "The general expression for entropy change of $n$ moles of an ideal gas with variables $T$ and $V$ is:",
    ["$\\Delta S = n C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + n R \\ln\\left(\\frac{V_2}{V_1}\\right)$", "$\\Delta S = n C_p \\ln\\left(\\frac{T_2}{T_1}\\right) + n R \\ln\\left(\\frac{V_2}{V_1}\\right)$", "$\\Delta S = n C_v \\ln\\left(\\frac{T_1}{T_2}\\right) + n R \\ln\\left(\\frac{V_1}{V_2}\\right)$", "$\\Delta S = n R \\ln\\left(\\frac{T_2}{T_1}\\right)$"],
    0,
    "$dS = \\frac{dU - dw}{T} = \\frac{n C_v dT + P dV}{T} = n C_v \\frac{dT}{T} + n R \\frac{dV}{V}$. Integrating gives $\\Delta S = n C_v \\ln(T_2/T_1) + n R \\ln(V_2/V_1)$.",
    "Medium"
  );
  add(
    "The entropy change of an ideal gas expressed in terms of variables $T$ and $P$ is:",
    ["$\\Delta S = n C_p \\ln\\left(\\frac{T_2}{T_1}\\right) - n R \\ln\\left(\\frac{P_2}{P_1}\\right)$", "$\\Delta S = n C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + n R \\ln\\left(\\frac{P_2}{P_1}\\right)$", "$\\Delta S = n C_p \\ln\\left(\\frac{T_2}{T_1}\\right) + n R \\ln\\left(\\frac{P_2}{P_1}\\right)$", "$\\Delta S = n R \\ln\\left(\\frac{P_1}{P_2}\\right)$"],
    0,
    "Substituting $V = nRT/P$ into the $T-V$ relation gives $\\Delta S = n C_p \\ln(T_2/T_1) - n R \\ln(P_2/P_1)$.",
    "Medium"
  );
  add(
    "For an isobaric heating of $n$ moles of an ideal gas from $T_1$ to $T_2$, $\\Delta S$ is:",
    ["$n C_p \\ln(T_2 / T_1)$", "$n C_v \\ln(T_2 / T_1)$", "$n R \\ln(T_2 / T_1)$", "Zero"],
    0,
    "At constant pressure ($P_1 = P_2$), the pressure term vanishes: $\\Delta S = \\int \\frac{dq_p}{T} = \\int_{T_1}^{T_2} \\frac{n C_p dT}{T} = n C_p \\ln(T_2/T_1)$.",
    "Easy"
  );
  add(
    "For an isochoric heating of $n$ moles of an ideal gas from $T_1$ to $T_2$, $\\Delta S$ is:",
    ["$n C_v \\ln(T_2 / T_1)$", "$n C_p \\ln(T_2 / T_1)$", "$n R \\ln(T_2 / T_1)$", "Zero"],
    0,
    "At constant volume ($V_1 = V_2$), $dq_v = n C_v dT$. Integrating $dS = dq_v/T$ gives $\\Delta S = n C_v \\ln(T_2/T_1)$.",
    "Easy"
  );
  add(
    "For a reversible adiabatic process, the entropy change of the system is:",
    ["Zero", "Positive", "Negative", "Infinite"],
    0,
    "In a reversible adiabatic process, $dq_{\\text{rev}} = 0$, so $dS = dq_{\\text{rev}} / T = 0$. Such processes are isentropic.",
    "Easy"
  );
  add(
    "During an IRREVERSIBLE adiabatic expansion of an ideal gas, the entropy of the system:",
    ["Increases ($\\Delta S > 0$)", "Remains zero", "Decreases", "Cannot be defined"],
    0,
    "For irreversible adiabatic expansion against $P_{\\text{ext}}$, $T_2 > T_{2,\\text{rev}}$. Evaluating $\\Delta S$ along a reversible path connecting initial and final states gives $\\Delta S > 0$.",
    "Hard"
  );
  add(
    "The Third Law of Thermodynamics states that:",
    ["The entropy of a perfectly crystalline substance approaches zero at absolute zero ($0\\text{ K}$)", "Energy cannot be created or destroyed", "Entropy of the universe always increases", "Absolute zero temperature can be attained in finite steps"],
    0,
    "According to the Nernst heat theorem / Planck's formulation: $\\lim_{T \\to 0} S = 0$ for a perfectly ordered crystalline substance.",
    "Easy"
  );
  add(
    "Which of the following substances possesses RESIDUAL ENTROPY at $0\\text{ K}$ due to molecular orientational disorder?",
    ["$\\text{CO}$ and $\\text{N}_2\\text{O}$", "Pure ice at $100\\text{ K}$", "Graphite at $298\\text{ K}$", "Liquid helium"],
    0,
    "Molecules like $\\text{CO}$ (carbon monoxide) and $\\text{N}_2\\text{O}$ have small dipole moments and freeze into random head-to-tail orientations ($\dots\\text{CO}\dots\\text{OC}\dots$), retaining residual entropy ($S_0 = R \\ln 2 \\approx 5.8\\text{ J/(mol}\\cdot\\text{K)}$) at $0\\text{ K}$.",
    "Medium"
  );
  add(
    "Trouton's Rule states that for most unassociated liquids, the standard entropy of vaporization $\\Delta_{\\text{vap}} S^\\circ$ is approximately:",
    ["$85 - 88\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$", "$10.5\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$", "$25\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$", "$200\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$"],
    0,
    "Trouton's rule observes that for typical non-polar liquids, vaporizing 1 mole creates roughly the same increase in translational disorder: $\\Delta_{\\text{vap}} S = \\frac{\\Delta_{\\text{vap}} H}{T_b} \\approx 88\\text{ J/(mol}\\cdot\\text{K)}$.",
    "Medium"
  );
  add(
    "Why does water show an exceptionally large entropy of vaporization ($\\Delta_{\\text{vap}} S \\approx 109\\text{ J/(mol}\\cdot\\text{K)}$), violating Trouton's rule?",
    ["Liquid water is highly ordered due to extensive hydrogen bonding", "Water vapor has lower entropy than normal gases", "Water decomposes at boiling point", "Water is non-polar"],
    0,
    "Liquid water has strong hydrogen-bonded structure (lower liquid entropy than typical liquids). Vaporization breaks these bonds, resulting in a much larger entropy increase than predicted by Trouton's rule.",
    "Medium"
  );
  add(
    "What is the entropy change when $1\\text{ mole}$ of ice melts into liquid water at $0^\\circ\\text{C}$ ($273\\text{ K}$) if $\\Delta_{\\text{fus}} H = 6.0\\text{ kJ/mol}$?",
    ["$+22.0\\text{ J/(mol}\\cdot\\text{K)}$", "$-22.0\\text{ J/(mol}\\cdot\\text{K)}$", "$+60.0\\text{ J/(mol}\\cdot\\text{K)}$", "$0\\text{ J/(mol}\\cdot\\text{K)}$"],
    0,
    "$\\Delta_{\\text{fus}} S = \\frac{\\Delta_{\\text{fus}} H}{T_f} = \\frac{6000\\text{ J/mol}}{273.15\\text{ K}} \\approx +21.97\\text{ J/(mol}\\cdot\\text{K)}$.",
    "Easy"
  );
  add(
    "What is the entropy of vaporization of liquid water at $100^\\circ\\text{C}$ ($373\\text{ K}$) if $\\Delta_{\\text{vap}} H = 40.7\\text{ kJ/mol}$?",
    ["$+109.1\\text{ J/(mol}\\cdot\\text{K)}$", "$+40.7\\text{ J/(mol}\\cdot\\text{K)}$", "$-109.1\\text{ J/(mol}\\cdot\\text{K)}$", "$+88.0\\text{ J/(mol}\\cdot\\text{K)}$"],
    0,
    "$\\Delta_{\\text{vap}} S = \\frac{\\Delta_{\\text{vap}} H}{T_b} = \\frac{40700\\text{ J/mol}}{373\\text{ K}} \\approx +109.1\\text{ J/(mol}\\cdot\\text{K)}$.",
    "Easy"
  );
  add(
    "When an egg is hard-boiled, its protein albumin denatures. The change in entropy $\\Delta S$ of the protein is:",
    ["Positive ($\\Delta S > 0$)", "Negative ($\\Delta S < 0$)", "Zero", "Cannot be determined"],
    0,
    "Denaturation unfolds the compact, highly ordered native globular protein into a randomized polypeptide chain, increasing entropy ($\\Delta S > 0$).",
    "Medium"
  );
  add(
    "When a rubber band is stretched, the entropy of the polymer chains:",
    ["Decreases", "Increases", "Remains unchanged", "Becomes zero"],
    0,
    "Stretching uncoils the randomized, kinked polymer chains and aligns them in parallel order, decreasing entropy ($\\Delta S < 0$). Releasing it is an entropy-driven recoil.",
    "Medium"
  );
  add(
    "When two ideal gases are mixed at constant temperature and pressure, the entropy of mixing $\\Delta_{\\text{mix}} S$ is:",
    ["Always positive", "Always negative", "Zero", "Depends on the gases"],
    0,
    "For ideal gases, $\\Delta_{\\text{mix}} S = -n R \\sum x_i \\ln x_i$. Since mole fractions $x_i < 1$, $\\ln x_i < 0$, making $\\Delta_{\\text{mix}} S > 0$ always (increased disorder).",
    "Easy"
  );
  add(
    "Boltzmann's formula relating entropy $S$ to thermodynamic probability (microstates) $W$ is:",
    ["$S = k_B \\ln W$", "$S = k_B W$", "$S = \\frac{k_B}{\\ln W}$", "$S = k_B T \\ln W$"],
    0,
    "Ludwig Boltzmann established the statistical definition of entropy: $S = k_B \\ln W$, where $k_B$ is the Boltzmann constant and $W$ is the number of accessible microstates.",
    "Easy"
  );
  add(
    "For a system with a single microstate ($W = 1$) such as a perfect crystal at $0\\text{ K}$, Boltzmann's formula gives:",
    ["$S = k_B \\ln 1 = 0$", "$S = k_B$", "$S = \\infty$", "$S = -1$"],
    0,
    "When $W = 1$, $S = k_B \\ln(1) = 0$, giving statistical proof of the Third Law of Thermodynamics.",
    "Easy"
  );
  add(
    "Calculate the entropy change when $1\\text{ mole}$ of an ideal gas expands from $10\\text{ L}$ to $100\\text{ L}$ isothermally: ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$)",
    ["$+19.14\\text{ J/K}$", "$-19.14\\text{ J/K}$", "$+8.314\\text{ J/K}$", "$+2.303\\text{ J/K}$"],
    0,
    "$\\Delta S = n R \\ln(V_2/V_1) = 2.303 \\times 1 \\times 8.314 \\times \\log_{10}(10) = 2.303 \\times 8.314 = +19.147\\text{ J/K}$.",
    "Easy"
  );
  add(
    "If the temperature of an iron rod is raised from $300\\text{ K}$ to $400\\text{ K}$ at constant pressure, the entropy:",
    ["Increases", "Decreases", "Remains constant", "First decreases then increases"],
    0,
    "$\\Delta S = \\int_{300}^{400} \\frac{C_p dT}{T} = C_p \\ln(400/300) > 0$. Increasing temperature increases thermal vibrations and disorder.",
    "Easy"
  );
  add(
    "Which of the following physical states of water has the HIGHEST absolute molar entropy at $298\\text{ K}$ and $1\\text{ bar}$?",
    ["Water vapor (gas)", "Liquid water", "Ice (solid)", "All have identical entropy"],
    0,
    "Gaseous water molecules have complete translational and rotational freedom, so $S^\\circ[\\text{H}_2\\text{O(g)}] = 188.8\\text{ J/(mol}\\cdot\\text{K)} > S^\\circ[\\text{H}_2\\text{O(l)}] = 69.9\\text{ J/(mol}\\cdot\\text{K)}$.",
    "Easy"
  );
  add(
    "For the dissolution of ammonium nitrate in water ($\\text{NH}_4\\text{NO}_3\\text{(s)} \\rightarrow \\text{NH}_4^+\\text{(aq)} + \\text{NO}_3^-\\text{(aq)}$), the process is endothermic yet spontaneous at room temperature because:",
    ["The entropy change $\\Delta S$ is large and positive, compensating for $\\Delta H > 0$", "$\\Delta H$ becomes negative on dilution", "Water freezes during the process", "The system absorbs work"],
    0,
    "Dissolving the rigid crystal lattice into free hydrated ions increases entropy substantially, making $T\\Delta S > \\Delta H$ and hence $\\Delta G = \\Delta H - T\\Delta S < 0$.",
    "Medium"
  );
  add(
    "For the precipitation reaction $\\text{Ag}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} \\rightarrow \\text{AgCl(s)}$, the sign of $\\Delta S$ is:",
    ["Negative", "Positive", "Zero", "Undefined"],
    0,
    "Freely moving hydrated ions combine into a rigid, ordered crystal lattice, decreasing the disorder of the system: $\\Delta S < 0$.",
    "Easy"
  );
  add(
    "In a Carnot cycle operating between $T_H$ and $T_C$, the net change in entropy of the working substance per cycle is:",
    ["Zero", "Positive", "Negative", "$\\frac{q_H - q_C}{T_H}$"],
    0,
    "Because the Carnot cycle is completely reversible and returns the working substance to its initial state, $\\oint dS = 0$.",
    "Easy"
  );
  add(
    "Clausius's inequality states that for any thermodynamic cycle:",
    ["$\\oint \\frac{dq}{T} \\le 0$", "$\\oint \\frac{dq}{T} \\ge 0$", "$\\oint \\frac{dq}{T} = 0$ always", "$\\oint dq = 0$"],
    0,
    "For reversible cycles $\\oint \\frac{dq_{\\text{rev}}}{T} = 0$, and for irreversible cycles $\\oint \\frac{dq}{T} < 0$. Combined: $\\oint \\frac{dq}{T} \\le 0$.",
    "Medium"
  );
  add(
    "If heat $q$ is transferred reversibly from a reservoir at $T_1$ to a reservoir at $T_2$ ($T_1 > T_2$), the total entropy change is:",
    ["$\\Delta S = q \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) > 0$", "$\\Delta S = 0$", "$\\Delta S = q (T_1 - T_2) < 0$", "$\\Delta S = -\\frac{q}{T_1}$"],
    0,
    "$\\Delta S = \\Delta S_1 + \\Delta S_2 = -\\frac{q}{T_1} + \\frac{q}{T_2} = q\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$. Since $T_1 > T_2$, $\\frac{1}{T_2} > \\frac{1}{T_1}$, so $\\Delta S > 0$ (Second Law).",
    "Medium"
  );
  add(
    "Under what condition can a process with $\\Delta S_{\\text{sys}} < 0$ be spontaneous?",
    ["When $\\Delta S_{\\text{surr}} > 0$ and $|\\Delta S_{\\text{surr}}| > |\\Delta S_{\\text{sys}}|$, so that $\\Delta S_{\\text{total}} > 0$", "Never, a system must always increase its entropy to be spontaneous", "Only at $0\\text{ K}$", "Only in an isolated system"],
    0,
    "Spontaneity requires $\\Delta S_{\\text{total}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$. If the system is exothermic ($q < 0$), heat enters surroundings increasing $\\Delta S_{\\text{surr}} = -q/T > 0$, making $\\Delta S_{\\text{total}} > 0$.",
    "Medium"
  );
  add(
    "The absolute molar entropy of graphite vs diamond at $298\\text{ K}$ compares as:",
    ["$S^\\circ[\\text{graphite}] > S^\\circ[\\text{diamond}]$", "$S^\\circ[\\text{diamond}] > S^\\circ[\\text{graphite}]$", "$S^\\circ[\\text{graphite}] = S^\\circ[\\text{diamond}]$", "$S^\\circ[\\text{diamond}] = 0$"],
    0,
    "Diamond has an extremely rigid 3D tetrahedral network with high vibrational frequencies, while graphite has layered 2D sheets held by weak van der Waals forces, giving graphite greater thermal disorder and higher entropy.",
    "Medium"
  );
  add(
    "Assertion (A): The entropy of an isolated system always increases in a spontaneous process.\nReason (R): For an isolated system, no heat exchange occurs with the surroundings ($dq = 0$), so $\\Delta S_{\\text{surr}} = 0$ and $\\Delta S_{\\text{total}} = \\Delta S_{\\text{sys}} > 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "By the Second Law, $\\Delta S_{\\text{total}} > 0$. For an isolated system $\\Delta S_{\\text{surr}} = 0$, so $\\Delta S_{\\text{isolated}} > 0$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Boiling of an egg causes an increase in entropy of the system.\nReason (R): During denaturation of protein, the coiled native structure unfolds into a more randomized conformation.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Denaturation disrupts the secondary and tertiary structures, destroying the ordered packing and increasing entropy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The entropy of a perfectly crystalline solid at absolute zero is zero.\nReason (R): At absolute zero, all thermal motion ceases and the substance exists in a single unique quantum microstate ($W = 1$).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "By Boltzmann's relation $S = k_B \\ln W = k_B \\ln 1 = 0$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Water does not obey Trouton's rule.\nReason (R): In liquid water, extensive intermolecular hydrogen bonding produces an unusually ordered liquid structure.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because liquid water has low initial entropy due to hydrogen bonding, boiling causes a larger entropy change ($\sim 109\\text{ J/(mol}\\cdot\\text{K)}$) than the typical $88\\text{ J/(mol}\\cdot\\text{K)}$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The entropy of mixing of two ideal gases is always positive.\nReason (R): When two gases mix, each gas expands into the volume of the other, increasing the number of accessible microstates.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Diffusion of molecules increases positional disorder and available volume, leading to $\\Delta_{\\text{mix}} S > 0$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): For a reversible adiabatic process, $\\Delta S = 0$.\nReason (R): In a reversible adiabatic process, $dq_{\\text{rev}} = 0$, so $dS = dq_{\\text{rev}} / T = 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Reversible adiabatic processes are isentropic. Both are true and (R) is the correct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): At room temperature, the entropy of graphite is higher than that of diamond.\nReason (R): Diamond has a tight 3-D covalent network, whereas graphite has a 2-D layered structure held by weak van der Waals forces.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The weaker interlayer forces in graphite allow greater low-frequency vibrational disorder. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "When $1\\text{ mole}$ of an ideal gas is heated from $300\\text{ K}$ to $600\\text{ K}$ at constant volume ($C_v = 1.5R$), the entropy change is: ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$)",
    ["$+8.65\\text{ J/K}$", "$+17.3\\text{ J/K}$", "$-8.65\\text{ J/K}$", "$+4.32\\text{ J/K}$"],
    0,
    "$\\Delta S = n C_v \\ln(T_2/T_1) = 1 \\times 1.5 \\times 8.314 \\times \\ln(2) = 12.471 \\times 0.69315 \\approx +8.644\\text{ J/K}$.",
    "Medium"
  );
  add(
    "Which of the following processes has a negative entropy change ($\\Delta S < 0$)?",
    ["$2\\text{H(g)} \\rightarrow \\text{H}_2\\text{(g)}$", "$\\text{H}_2\\text{O(s)} \\rightarrow \\text{H}_2\\text{O(l)}$", "$\\text{I}_2\\text{(s)} \\rightarrow \\text{I}_2\\text{(g)}$", "$\\text{NaCl(s)} \\rightarrow \\text{Na}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$"],
    0,
    "Combining two isolated gaseous atoms into a single diatomic molecule reduces translational and positional randomness ($2\\text{ moles of gas} \\rightarrow 1\\text{ mole of gas}$), decreasing entropy.",
    "Easy"
  );
  add(
    "For an isothermal reversible compression of an ideal gas, the entropy change of the surroundings $\\Delta S_{\\text{surr}}$ is:",
    ["Positive ($\\Delta S_{\\text{surr}} > 0$)", "Negative ($\\Delta S_{\\text{surr}} < 0$)", "Zero", "Infinite"],
    0,
    "In compression, work is done on the gas and heat is evolved to the surroundings ($q_{\\text{sys}} < 0$). Thus heat absorbed by surroundings is $q_{\\text{surr}} = -q_{\\text{sys}} > 0$, so $\\Delta S_{\\text{surr}} = q_{\\text{surr}} / T > 0$.",
    "Medium"
  );
  add(
    "Calculate the entropy of vaporization of a liquid which boils at $127^\\circ\\text{C}$ if its enthalpy of vaporization is $40\\text{ kJ/mol}$.",
    ["$+100\\text{ J/(mol}\\cdot\\text{K)}$", "$+315\\text{ J/(mol}\\cdot\\text{K)}$", "$+400\\text{ J/(mol}\\cdot\\text{K)}$", "$+10\\text{ J/(mol}\\cdot\\text{K)}$"],
    0,
    "$T_b = 127 + 273 = 400\\text{ K}$. $\\Delta_{\\text{vap}} S = \\frac{\\Delta_{\\text{vap}} H}{T_b} = \\frac{40000\\text{ J/mol}}{400\\text{ K}} = +100\\text{ J/(mol}\\cdot\\text{K)}$.",
    "Easy"
  );
  add(
    "Assertion (A): Formation of rust ($\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$) from iron, oxygen, and water is a spontaneous reaction despite $\\Delta S_{\\text{sys}} < 0$.\nReason (R): Rusting is an exothermic reaction, and the heat released to the surroundings increases $\\Delta S_{\\text{surr}}$ by an amount greater than the decrease in $\\Delta S_{\\text{sys}}$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since $\\Delta S_{\\text{total}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$, an exothermic reaction with $\\Delta S_{\\text{surr}} = -\\Delta H / T > 0$ can overcome negative system entropy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getEnthalpyQuestions,
  getHessLawQuestions,
  getEntropyQuestions
};
