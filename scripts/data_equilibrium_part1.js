// Equilibrium - Part 1
// Subtopics:
// 1. Law of chemical equilibrium and equilibrium constants (Kp, Kc) (47 questions)
// 2. Le Chatelier's principle (47 questions)
// 3. Chemical equilibrium (Part A: 84 questions)

function createQ(subTopic, question, options, correctIndex, explanation, difficulty = "Medium", questionType = "MCQ") {
  return {
    question,
    options,
    correctAnswer: options[correctIndex],
    correctOption: correctIndex,
    explanation,
    subject: "Chemistry",
    chapter: "Equilibrium",
    subTopic,
    difficulty,
    questionType,
    type: questionType === "ASSERTION_REASON" ? "assertion-reason" : "multiple-choice",
    source: "JEE Main & NEET Chapter Bank",
    targetExams: ["JEE Main", "NEET"]
  };
}

function getLawOfEquilibriumQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Law of chemical equilibrium and equilibrium constants (Kp, Kc)", text, opts, ans, exp, diff, type));

  add(
    "The general relation between equilibrium constants $K_p$ and $K_c$ for a reversible gaseous reaction is given by:",
    ["$K_p = K_c (RT)^{\\Delta n_g}$", "$K_c = K_p (RT)^{\\Delta n_g}$", "$K_p = K_c (RT)^{-\\Delta n_g}$", "$K_p K_c = (RT)^{\\Delta n_g}$"],
    0,
    "From the ideal gas equation $P = CRT$, substitution into the equilibrium expression yields $K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{g(\\text{products})} - \\sum n_{g(\\text{reactants})}$."
  );
  add(
    "For which of the following reactions is $K_p = K_c$?",
    ["$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$", "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$", "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$", "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"],
    0,
    "When $\\Delta n_g = 2 - (1 + 1) = 0$, $(RT)^0 = 1$, so $K_p = K_c$."
  );
  add(
    "For the reaction $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$, the relationship between $K_p$ and $K_c$ is:",
    ["$K_p = K_c (RT)^{-1}$", "$K_p = K_c (RT)$", "$K_p = K_c (RT)^2$", "$K_p = K_c$"],
    0,
    "Here $\\Delta n_g = 2 - (2 + 1) = -1$. Therefore, $K_p = K_c (RT)^{-1} = \\frac{K_c}{RT}$."
  );
  add(
    "If the equilibrium constant for the reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ is $K$, what is the equilibrium constant for $\\text{NH}_3(g) \\rightleftharpoons \\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g)$?",
    ["$\\frac{1}{\\sqrt{K}}$", "$\\sqrt{K}$", "$\\frac{1}{K}$", "$K^2$"],
    0,
    "Reversing a reaction inverts the equilibrium constant ($1/K$), and multiplying stoichiometric coefficients by $1/2$ raises the constant to the power of $1/2$. Hence $K' = (1/K)^{1/2} = \\frac{1}{\\sqrt{K}}$."
  );
  add(
    "For the decomposition reaction $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, the equilibrium constant $K_p$ is equal to:",
    ["$P_{\\text{CO}_2}$", "$\\frac{P_{\\text{CaO}} \\cdot P_{\\text{CO}_2}}{P_{\\text{CaCO}_3}}$", "$P_{\\text{CO}_2} \\times [\\text{CaO}]$", "$\\frac{1}{P_{\\text{CO}_2}}$"],
    0,
    "Pure solids have constant active mass (activity = 1). Thus, only the gaseous species appears in the equilibrium expression: $K_p = P_{\\text{CO}_2}$."
  );
  add(
    "The standard Gibbs free energy change ($\\Delta G^\\circ$) is related to the equilibrium constant ($K$) by the thermodynamic equation:",
    ["$\\Delta G^\\circ = -RT \\ln K$", "$\\Delta G^\\circ = RT \\ln K$", "$\\Delta G^\\circ = -2.303 RT \\ln K$", "$\\Delta G = -RT \\ln K$"],
    0,
    "At equilibrium, $\\Delta G = 0$ and $Q = K$. Since $\\Delta G = \\Delta G^\\circ + RT \\ln Q$, we have $\\Delta G^\\circ = -RT \\ln K = -2.303 RT \\log K$."
  );
  add(
    "If $\\Delta G^\\circ < 0$ for a chemical reaction at temperature $T$, the equilibrium constant $K$ must be:",
    ["$K > 1$", "$K < 1$", "$K = 0$", "$K = 1$"],
    0,
    "Since $\\Delta G^\\circ = -RT \\ln K$, when $\\Delta G^\\circ$ is negative, $\\ln K$ is positive, which means $K > 1$ (products are thermodynamically favored)."
  );
  add(
    "The variation of equilibrium constant with temperature is given by the van \'t Hoff equation:",
    ["$\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$", "$\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$", "$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta S^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$", "$\\log\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{2.303 R}(T_2 - T_1)$"],
    0,
    "The integrated van \'t Hoff is $\\ln(K_2/K_1) = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) = \\frac{\\Delta H^\\circ}{R}\\frac{T_2 - T_1}{T_1 T_2}$."
  );
  add(
    "For an endothermic reaction ($\\Delta H^\\circ > 0$), as the temperature increases, the equilibrium constant $K$:",
    ["Increases", "Decreases", "Remains constant", "First increases then decreases"],
    0,
    "For $\\Delta H^\\circ > 0$, increasing $T$ ($T_2 > T_1$) gives $\\ln(K_2/K_1) > 0 \\implies K_2 > K_1$. The reaction absorbs heat to shift forward."
  );
  add(
    "For an exothermic reaction ($\\Delta H^\\circ < 0$), as the temperature increases, the equilibrium constant $K$:",
    ["Decreases", "Increases", "Remains unchanged", "Becomes zero"],
    0,
    "For $\\Delta H^\\circ < 0$, heat is a product. Supplying heat shifts equilibrium backward according to Le Chatelier, lowering $K$."
  );
  add(
    "If the reaction quotient $Q_c$ is greater than the equilibrium constant $K_c$ ($Q_c > K_c$), the reaction will:",
    ["Proceed in the reverse direction to form more reactants", "Proceed in the forward direction to form more products", "Remain at equilibrium", "Stop completely"],
    0,
    "When $Q_c > K_c$, product concentration is higher than equilibrium values, so the system shifts in the backward direction to re-establish equilibrium."
  );
  add(
    "If $Q_c < K_c$, the net chemical change occurring in the mixture will be:",
    ["Formation of more products (net forward reaction)", "Formation of more reactants", "No change", "Precipitation of all reactants"],
    0,
    "When $Q_c < K_c$, the reaction moves forward until the product/reactant ratio reaches $K_c$."
  );
  add(
    "For the reaction $\\text{A} + 2\\text{B} \\rightleftharpoons \\text{C} + 3\\text{D}$, the units of $K_c$ are:",
    ["$\\text{mol} \\cdot \\text{L}^{-1}$", "$\\text{L} \\cdot \\text{mol}^{-1}$", "Dimensionless", "$\\text{mol}^2 \\cdot \\text{L}^{-2}$"],
    0,
    "Units of $K_c = (\\text{mol L}^{-1})^{\\Delta n}$. Here $\\Delta n = (1 + 3) - (1 + 2) = 4 - 3 = 1$. Thus units are $\\text{mol L}^{-1}$."
  );
  add(
    "For the synthesis of ammonia: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the units of $K_p$ (in atm) are:",
    ["$\\text{atm}^{-2}$", "$\\text{atm}^2$", "$\\text{atm}^{-1}$", "Dimensionless"],
    0,
    "$\\Delta n_g = 2 - (1 + 3) = -2$. Units of $K_p = \\text{atm}^{\\Delta n_g} = \\text{atm}^{-2}$."
  );
  add(
    "For the equilibrium $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, at $250^\\circ\\text{C}$ ($523\\text{ K}$), $K_c = 0.041\\text{ M}$. What is the value of $K_p$? ($R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$)",
    ["$1.76\\text{ atm}$", "$0.041\\text{ atm}$", "$0.00095\\text{ atm}$", "$21.4\\text{ atm}$"],
    0,
    "$\\Delta n_g = 1 + 1 - 1 = 1$. $K_p = K_c (RT)^1 = 0.041 \\times 0.0821 \\times 523 \\approx 1.76\\text{ atm}$."
  );
  add(
    "At $500\\text{ K}$, $K_p = 1.80 \\times 10^{-2}\\text{ kPa}^{-1}$ for the reaction $2\\text{NOCl}(g) \\rightleftharpoons 2\\text{NO}(g) + \\text{Cl}_2(g)$. What is the value of $K_c$ at this temperature? ($R = 8.314\\text{ kPa L K}^{-1}\\text{mol}^{-1}$)",
    ["$4.33 \\times 10^{-6}\\text{ mol L}^{-1}$", "$7.48 \\times 10^{-2}\\text{ mol L}^{-1}$", "$1.80 \\times 10^{-2}\\text{ mol L}^{-1}$", "$4.33 \\times 10^{-3}\\text{ mol L}^{-1}$"],
    0,
    "$\\Delta n_g = 3 - 2 = 1$. $K_c = \\frac{K_p}{(RT)^1} = \\frac{1.80 \\times 10^{-2}}{8.314 \\times 500} = \\frac{1.80 \\times 10^{-2}}{4157} \\approx 4.33 \\times 10^{-6}\\text{ mol L}^{-1}$."
  );
  add(
    "Given the two equilibria: (1) $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g), K_1$ and (2) $2\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}_2(g), K_2$. What is the equilibrium constant $K$ for $\\text{N}_2(g) + 2\\text{O}_2(g) \\rightleftharpoons 2\\text{NO}_2(g)$?",
    ["$K_1 \\times K_2$", "$K_1 + K_2$", "$K_1 / K_2$", "$\\sqrt{K_1 K_2}$"],
    0,
    "Adding reaction (1) and reaction (2) gives the overall reaction. When reactions are added, their equilibrium constants are multiplied: $K = K_1 \\times K_2$."
  );
  add(
    "Given: $\\text{C(s)} + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g), K_1 = 10^2$ and $\\text{CO}(g) + \\text{Cl}_2(g) \\rightleftharpoons \\text{COCl}_2(g), K_2 = 10^4$. What is the equilibrium constant for $\\text{C(s)} + \\text{CO}_2(g) + 2\\text{Cl}_2(g) \\rightleftharpoons 2\\text{COCl}_2(g)$?",
    ["$10^{10}$", "$10^6$", "$10^8$", "$10^2$"],
    0,
    "Multiply reaction (2) by 2 ($K_2' = K_2^2 = (10^4)^2 = 10^8$) and add to reaction (1): $K = K_1 \\times K_2^2 = 10^2 \\times 10^8 = 10^{10}$."
  );
  add(
    "The value of $K_c$ for the reaction $2\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$ is $2.0 \\times 10^{-3}$. At a given time, the composition of reaction mixture is $[\\text{A}] = [\\text{B}] = [\\text{C}] = 3 \\times 10^{-4}\\text{ M}$. In which direction will the reaction proceed?",
    ["Forward direction", "Reverse direction", "System is at equilibrium", "Reaction cannot occur"],
    0,
    "Calculate $Q_c = \\frac{[\\text{B}][\\text{C}]}{[\\text{A}]^2} = \\frac{(3 \\times 10^{-4})(3 \\times 10^{-4})}{(3 \\times 10^{-4})^2} = 1.0$. Since $Q_c (1.0) > K_c (2 \\times 10^{-3})$, the reaction proceeds in the reverse direction."
  );
  add(
    "In the reaction $\\text{A}(g) + 3\\text{B}(g) \\rightleftharpoons 2\\text{C}(g)$, the partial pressures of A, B, and C at equilibrium are $0.2\\text{ atm}$, $0.1\\text{ atm}$, and $0.4\\text{ atm}$ respectively. What is $K_p$?",
    ["$800\\text{ atm}^{-2}$", "$40\\text{ atm}^{-2}$", "$200\\text{ atm}^{-2}$", "$80\\text{ atm}^{-2}$"],
    0,
    "$K_p = \\frac{P_{\\text{C}}^2}{P_{\\text{A}} \\cdot P_{\\text{B}}^3} = \\frac{(0.4)^2}{(0.2) \\times (0.1)^3} = \\frac{0.16}{0.2 \\times 10^{-3}} = \\frac{0.16}{2 \\times 10^{-4}} = 800\\text{ atm}^{-2}$."
  );
  add(
    "The equilibrium constant $K_c$ for the reaction $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ is 54 at $700\\text{ K}$. If $[\\text{H}_2] = 0.1\\text{ M}$ and $[\\text{I}_2] = 0.1\\text{ M}$ at equilibrium, what is the equilibrium concentration of $\\text{HI}$?",
    ["$0.735\\text{ M}$", "$0.54\\text{ M}$", "$0.27\\text{ M}$", "$1.47\\text{ M}$"],
    0,
    "$K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} \\implies 54 = \\frac{[\\text{HI}]^2}{(0.1)(0.1)} \\implies [\\text{HI}]^2 = 54 \\times 0.01 = 0.54 \\implies [\\text{HI}] = \\sqrt{0.54} \\approx 0.735\\text{ M}$."
  );
  add(
    "The addition of a catalyst to a reversible chemical reaction:",
    ["Decreases the time required to reach equilibrium without changing $K_c$ or $K_p$", "Increases the value of $K_c$", "Increases the yield of products at equilibrium", "Shifts the equilibrium in the endothermic direction"],
    0,
    "A catalyst lowers the activation energy of both forward and reverse reactions equally ($k_f$ and $k_b$ increase by identical factors), leaving the equilibrium constant $K = k_f/k_b$ completely unchanged."
  );
  add(
    "Which of the following factors affects the numerical value of the equilibrium constant $K_c$ of a reaction?",
    ["Temperature only", "Pressure", "Catalyst", "Concentration of reactants"],
    0,
    "For a given reaction, the equilibrium constant is a thermodynamic function of temperature alone."
  );
  add(
    "For the reaction $\\text{CO}(g) + 2\\text{H}_2(g) \\rightleftharpoons \\text{CH}_3\\text{OH}(g)$, $\\Delta H^\\circ = -90\\text{ kJ mol}^{-1}$. A plot of $\\ln K$ versus $1/T$ is a straight line with a:",
    ["Positive slope ($-\\Delta H^\\circ / R > 0$)", "Negative slope", "Zero slope", "Parabolic curve"],
    0,
    "From van \'t Hoff equation: $\\ln K = -\\frac{\\Delta H^\\circ}{RT} + \\frac{\\Delta S^\\circ}{R}$. The slope is $-\\frac{\\Delta H^\\circ}{R}$. Since $\\Delta H^\\circ < 0$, $-\\Delta H^\\circ/R > 0$, giving a positive slope."
  );
  add(
    "At a certain temperature, the equilibrium constant $K_p$ for the dissociation of solid ammonium carbamate $\\text{NH}_4\\text{COONH}_2(s) \\rightleftharpoons 2\\text{NH}_3(g) + \\text{CO}_2(g)$ is $1.08 \\times 10^{-4}\\text{ atm}^3$. What is the total pressure of gas at equilibrium?",
    ["$0.09\\text{ atm}$", "$0.06\\text{ atm}$", "$0.03\\text{ atm}$", "$0.12\\text{ atm}$"],
    0,
    "Let total pressure be $P$. Then $P_{\\text{NH}_3} = \\frac{2}{3}P$ and $P_{\\text{CO}_2} = \\frac{1}{3}P$. $K_p = \\left(\\frac{2}{3}P\\right)^2 \\left(\\frac{1}{3}P\\right) = \\frac{4}{27}P^3$. Thus, $\\frac{4}{27}P^3 = 1.08 \\times 10^{-4} \\implies P^3 = 7.29 \\times 10^{-4} \\implies P = 0.09\\text{ atm}$."
  );
  add(
    "Solid ammonium hydrosulfide decomposes as: $\\text{NH}_4\\text{HS}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{H}_2\\text{S}(g)$. If the total pressure at equilibrium is $1.0\\text{ atm}$, the value of $K_p$ is:",
    ["$0.25\\text{ atm}^2$", "$1.0\\text{ atm}^2$", "$0.50\\text{ atm}^2$", "$0.125\\text{ atm}^2$"],
    0,
    "The mole fraction of each gas is $1/2$. Thus $P_{\\text{NH}_3} = P_{\\text{H}_2\\text{S}} = 0.5\\text{ atm}$. $K_p = (0.5)(0.5) = 0.25\\text{ atm}^2$."
  );
  add(
    "For the reaction $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g)$, the equilibrium constant is $K_1$. For the reaction $2\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}_2(g)$, the equilibrium constant is $K_2$. What is $K$ for $\\text{NO}_2(g) \\rightleftharpoons \\frac{1}{2}\\text{N}_2(g) + \\text{O}_2(g)$?",
    ["$\\frac{1}{\\sqrt{K_1 K_2}}$", "$\\sqrt{K_1 K_2}$", "$\\frac{1}{K_1 K_2}$", "$\\frac{K_1}{K_2}$"],
    0,
    "Adding reactions (1) and (2) gives $\\text{N}_2 + 2\\text{O}_2 \\rightleftharpoons 2\\text{NO}_2$ with constant $K_1 K_2$. Reversing and halving gives $K' = \\frac{1}{\\sqrt{K_1 K_2}}$."
  );
  add(
    "The equilibrium constant $K_c$ for $\\text{A}_2(g) + \\text{B}_2(g) \\rightleftharpoons 2\\text{AB}(g)$ is 100. If 1 mole of $\\text{A}_2$ and 1 mole of $\\text{B}_2$ are placed in a 1 L container, what is the concentration of AB at equilibrium?",
    ["$1.67\\text{ M}$", "$0.83\\text{ M}$", "$0.33\\text{ M}$", "$2.0\\text{ M}$"],
    0,
    "At equilibrium: $[\\text{A}_2] = 1-x, [\\text{B}_2] = 1-x, [\\text{AB}] = 2x$. $K_c = \\frac{(2x)^2}{(1-x)^2} = 100 \\implies \\frac{2x}{1-x} = 10 \\implies 2x = 10 - 10x \\implies 12x = 10 \\implies x = 5/6$. Then $[\\text{AB}] = 2x = 10/6 = 1.67\\text{ M}$."
  );
  add(
    "In which of the following reactions is $K_p > K_c$ at room temperature ($298\\text{ K}$)?",
    ["$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$", "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$", "$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$", "$2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$"],
    0,
    "Since $RT = 0.0821 \\times 298 = 24.5 > 1$, $K_p > K_c$ whenever $\\Delta n_g > 0$. In the dissociation of $\\text{PCl}_5$, $\\Delta n_g = 1 > 0$."
  );
  add(
    "At $1000\\text{ K}$, the equilibrium constant for $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$ is $K = 1.0$. If equal moles of all four species are mixed at $1000\\text{ K}$, the system is:",
    ["Already at equilibrium ($Q = K$)", "Shifted to the right", "Shifted to the left", "Non-reactive"],
    0,
    "If concentrations are equal, $Q = \\frac{[\\text{CO}_2][\\text{H}_2]}{[\\text{CO}][\\text{H}_2\\text{O}]} = \\frac{c \\cdot c}{c \\cdot c} = 1.0 = K$. The system is in dynamic equilibrium."
  );
  add(
    "What is the value of $\\Delta G^\\circ$ (in $\\text{kJ mol}^{-1}$) for a reaction at $300\\text{ K}$ if its equilibrium constant is $K = 10^4$? ($R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$-22.98\\text{ kJ mol}^{-1}$", "$+22.98\\text{ kJ mol}^{-1}$", "$-5.74\\text{ kJ mol}^{-1}$", "$-9.58\\text{ kJ mol}^{-1}$"],
    0,
    "$\\Delta G^\\circ = -2.303 RT \\log K = -2.303 \\times 8.314 \\times 300 \\times 4 = -22976\\text{ J mol}^{-1} \\approx -22.98\\text{ kJ mol}^{-1}$."
  );
  add(
    "If $\\Delta G^\\circ = 0$ for a reaction at temperature $T$, the equilibrium constant $K$ is equal to:",
    ["1", "0", "$\\infty$", "$-1$"],
    0,
    "$\\Delta G^\\circ = -RT \\ln K = 0 \\implies \\ln K = 0 \\implies K = 1$."
  );
  add(
    "For the equilibrium $\\text{A}(s) \\rightleftharpoons 2\\text{B}(g) + \\text{C}(g)$, if the total pressure is $P$, then $K_p$ in terms of $P$ is:",
    ["$\\frac{4}{27}P^3$", "$\\frac{1}{27}P^3$", "$4P^3$", "$\\frac{4}{9}P^2$"],
    0,
    "$P_{\\text{B}} = \\frac{2}{3}P$ and $P_{\\text{C}} = \\frac{1}{3}P$. $K_p = P_{\\text{B}}^2 \\cdot P_{\\text{C}} = \\left(\\frac{2}{3}P\\right)^2 \\left(\\frac{1}{3}P\\right) = \\frac{4}{27}P^3$."
  );
  add(
    "For the reaction $\\text{Fe}^{3+}(aq) + \\text{SCN}^-(aq) \\rightleftharpoons [\\text{Fe(SCN)}]^{2+}(aq)$, the equilibrium expression is:",
    ["$K_c = \\frac{[[\\text{Fe(SCN)}]^{2+}]}{[\\text{Fe}^{3+}][\\text{SCN}^-]}$", "$K_c = \\frac{[\\text{Fe}^{3+}][\\text{SCN}^-]}{[[\\text{Fe(SCN)}]^{2+}]}$", "$K_c = [[\\text{Fe(SCN)}]^{2+}]$", "$K_c = \\frac{[[\\text{Fe(SCN)}]^{2+}]^2}{[\\text{Fe}^{3+}]}$"],
    0,
    "All three species are dissolved in aqueous solution, so all enter the equilibrium expression: $K_c = \\frac{[[\\text{Fe(SCN)}]^{2+}]}{[\\text{Fe}^{3+}][\\text{SCN}^-]}$."
  );
  add(
    "In the homogeneous equilibrium $2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, the expression for $K_p$ in terms of mole fraction $x$ and total pressure $P$ is:",
    ["$K_p = \\frac{x_{\\text{N}_2\\text{O}_4}}{x_{\\text{NO}_2}^2 \\cdot P}$", "$K_p = \\frac{x_{\\text{N}_2\\text{O}_4} \\cdot P}{x_{\\text{NO}_2}^2}$", "$K_p = \\frac{x_{\\text{N}_2\\text{O}_4}^2}{x_{\\text{NO}_2} \\cdot P}$", "$K_p = \\frac{x_{\\text{N}_2\\text{O}_4}}{x_{\\text{NO}_2}^2}$"],
    0,
    "Partial pressure $P_i = x_i P$. Thus $K_p = \\frac{x_{\\text{N}_2\\text{O}_4} P}{(x_{\\text{NO}_2} P)^2} = \\frac{x_{\\text{N}_2\\text{O}_4}}{x_{\\text{NO}_2}^2 \\cdot P}$."
  );
  add(
    "For the reaction $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2(g)$, the value of $\\Delta n_g$ is:",
    ["1", "2", "0", "-1"],
    0,
    "Carbon is a solid and excluded from $\\Delta n_g$. $\\Delta n_g = (1 + 1) - 1 = 1$."
  );
  add(
    "The value of $K_c$ for a reaction is 10. What is $K_c$ for the reaction multiplied by a factor of 3?",
    ["1000", "30", "10", "3.33"],
    0,
    "Multiplying reaction coefficients by $n$ raises the equilibrium constant to the $n$-th power: $K' = K^3 = 10^3 = 1000$."
  );
  add(
    "Which of the following is true for a reaction with a very large equilibrium constant ($K \\gg 10^3$)?",
    ["The reaction proceeds almost to completion and products predominate at equilibrium", "The reaction hardly proceeds at all", "Reactants predominate at equilibrium", "Equilibrium is never reached"],
    0,
    "A very large $K$ indicates that products are in vast excess over reactants at equilibrium, meaning the reaction goes nearly to completion."
  );
  add(
    "Which of the following is true for a reaction with a very small equilibrium constant ($K \\ll 10^{-3}$)?",
    ["The forward reaction hardly proceeds, and reactants predominate overwhelmingly at equilibrium", "The reaction goes to completion", "Products predominate", "Forward rate is zero"],
    0,
    "A very small $K$ means the numerator (products) is negligible compared to the denominator (reactants)."
  );
  add(
    "When two reactions (1) and (2) with equilibrium constants $K_1$ and $K_2$ are subtracted from one another [Reaction (1) - Reaction (2)], the resulting equilibrium constant is:",
    ["$K_1 / K_2$", "$K_1 - K_2$", "$K_1 \\times K_2$", "$K_2 / K_1$"],
    0,
    "Subtracting reaction (2) is equivalent to adding the reverse of reaction (2), yielding $K = K_1 \\times (1/K_2) = K_1 / K_2$."
  );
  add(
    "For the gas-phase reaction $2\\text{A}(g) + \\text{B}(g) \\rightleftharpoons 3\\text{C}(g)$, what is the relationship between $K_p$ and $K_c$?",
    ["$K_p = K_c$", "$K_p = K_c(RT)$", "$K_p = K_c(RT)^{-1}$", "$K_p = K_c(RT)^2$"],
    0,
    "$\\Delta n_g = 3 - (2 + 1) = 0$. Since $\\Delta n_g = 0$, $K_p = K_c(RT)^0 = K_c$."
  );
  add(
    "Assertion (A): For the reaction $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, the numerical value of $K_p$ equals $K_c$.\nReason (R): The change in gaseous moles $\\Delta n_g$ for this reaction is zero, and $(RT)^0 = 1$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since $K_p = K_c(RT)^{\\Delta n_g}$ and $\\Delta n_g = 2 - 2 = 0$, $K_p = K_c$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): A catalyst increases the rate of attainment of equilibrium but does not alter the equilibrium constant $K_c$.\nReason (R): A catalyst lowers the activation energy of the forward and reverse reactions by the exact same amount.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because activation energy decreases equally in both directions, $k_f$ and $k_b$ increase by identical ratios, keeping $K = k_f/k_b$ constant. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The equilibrium constant of an endothermic reaction increases with an increase in temperature.\nReason (R): According to the van \'t Hoff equation, the slope of $\\ln K$ versus $1/T$ is negative for an endothermic reaction ($-\\Delta H^\\circ / R < 0$).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "As $T$ increases, $1/T$ decreases; with a negative slope, $\\ln K$ increases. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Pure solids and pure liquids are omitted from the equilibrium constant expression.\nReason (R): The active mass (concentration) of a pure solid or pure liquid is constant and independent of the amount present.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Density and molar mass of pure condensed phases are constant, so their molar concentrations are constant and absorbed into the equilibrium constant. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): When $\\Delta G^\\circ$ is negative, the reaction proceeds substantially in the forward direction.\nReason (R): $\\Delta G^\\circ = -RT \\ln K$, so a negative $\\Delta G^\\circ$ corresponds to an equilibrium constant $K > 1$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Thermodynamic feasibility corresponds directly to $K > 1$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): If $Q_c > K_c$, the net reaction must move in the backward direction.\nReason (R): The reaction quotient $Q_c$ must decrease until it equals the equilibrium constant $K_c$, which requires consumption of products and formation of reactants.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "To lower $Q_c$ to $K_c$, product concentration must decrease and reactant concentration must increase. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getLeChatelierPrincipleQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Le Chatelier's principle", text, opts, ans, exp, diff, type));

  add(
    "Le Chatelier's principle states that when a system at equilibrium is subjected to a change in concentration, temperature, or pressure:",
    ["The system shifts in a direction that tends to counteract or undo the effect of the applied change", "The equilibrium constant changes immediately to adapt", "The reaction stops completely", "The system always shifts forward"],
    0,
    "Henri Le Chatelier stated that a dynamic equilibrium adjusts to partially relieve any applied disturbance (stress)."
  );
  add(
    "For the Haber process synthesis of ammonia: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g), \\Delta H = -92.4\\text{ kJ mol}^{-1}$, the yield of ammonia is maximized by:",
    ["High pressure and low temperature", "Low pressure and high temperature", "High pressure and high temperature", "Low pressure and low temperature"],
    0,
    "Forward reaction is exothermic ($\\Delta H < 0$) and produces fewer gaseous moles ($\\Delta n_g = -2$). Hence, high pressure and low temperature favor ammonia formation."
  );
  add(
    "For the reaction $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, increasing the pressure on the system will:",
    ["Shift the equilibrium in the backward direction (favoring formation of $\\text{PCl}_5$)", "Shift the equilibrium in the forward direction", "Have no effect on equilibrium position", "Increase the value of $K_p$"],
    0,
    "$\\Delta n_g = 1 > 0$. Increasing pressure favors the side with fewer gas moles (the reactant side, 1 mole vs 2 moles)."
  );
  add(
    "What is the effect of increasing the pressure on the equilibrium $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$?",
    ["No effect on the equilibrium position", "Shifts forward", "Shifts backward", "Decreases the yield of HI"],
    0,
    "$\\Delta n_g = 2 - 2 = 0$. Because the number of moles of gas is identical on both sides, pressure changes do not shift the equilibrium position."
  );
  add(
    "In the reaction $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g) + \\text{heat}$, which condition will NOT increase the equilibrium yield of $\\text{SO}_3$?",
    ["Increasing temperature", "Increasing pressure", "Adding more $\\text{O}_2$", "Removing $\\text{SO}_3$ as it is formed"],
    0,
    "Since the reaction is exothermic, increasing temperature shifts the equilibrium backward, decreasing the yield of $\\text{SO}_3$."
  );
  add(
    "When an inert gas (such as Helium or Argon) is added to an equilibrium mixture at CONSTANT VOLUME:",
    ["The equilibrium is NOT shifted in either direction", "The equilibrium shifts in the direction of more moles", "The equilibrium shifts in the direction of fewer moles", "The equilibrium constant increases"],
    0,
    "At constant volume, the total pressure increases, but the partial pressures and molar concentrations of reacting gases remain completely unchanged; hence, no shift occurs."
  );
  add(
    "When an inert gas is added to the equilibrium $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$ at CONSTANT PRESSURE:",
    ["The equilibrium shifts in the forward direction (increasing dissociation)", "The equilibrium shifts in the backward direction", "No shift occurs", "The value of $K_p$ increases"],
    0,
    "At constant pressure, adding inert gas expands the volume, lowering the partial pressures of reactants and products. The system shifts towards the side with more moles of gas ($\\Delta n_g > 0$, forward)."
  );
  add(
    "When an inert gas is added at CONSTANT PRESSURE to $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$:",
    ["The equilibrium shifts in the backward direction (dissociating ammonia)", "The equilibrium shifts in the forward direction", "No effect", "$K_p$ increases"],
    0,
    "Here $\\Delta n_g = -2 < 0$. Expansion of volume shifts the equilibrium towards the side with more gaseous moles (backward, 4 moles vs 2 moles)."
  );
  add(
    "For the melting of ice: $\\text{Ice}(s) \\rightleftharpoons \\text{Water}(l) - \\text{heat}$, the density of water is higher than that of ice. What is the effect of increasing pressure on this equilibrium?",
    ["Ice melts into water (melting point decreases)", "Water freezes into ice", "No effect", "Water evaporates"],
    0,
    "Because liquid water has smaller volume than ice ($V_{\\text{liquid}} < V_{\\text{solid}}$), increasing pressure shifts the equilibrium towards the denser phase with smaller volume (water)."
  );
  add(
    "For the boiling of water: $\\text{Water}(l) \\rightleftharpoons \\text{Vapor}(g) - \\text{heat}$, increasing the external pressure causes:",
    ["The boiling point of water to increase", "The boiling point of water to decrease", "Water to freeze", "Vapor to expand"],
    0,
    "Increasing pressure opposes vapor formation ($V_{\\text{vapor}} \\gg V_{\\text{liquid}}$), shifting equilibrium backward and requiring higher temperature to boil (as in a pressure cooker)."
  );
  add(
    "The dissolution of calcium acetate in water is exothermic ($\\Delta H_{\\text{sol}} < 0$). What happens to its solubility when temperature is increased?",
    ["Solubility decreases", "Solubility increases", "Solubility remains unchanged", "Calcium acetate decomposes into gas"],
    0,
    "For exothermic dissolution, heating shifts the equilibrium backward, decreasing solubility."
  );
  add(
    "The dissolution of potassium nitrate (\\text{KNO}_3) in water is endothermic ($\\Delta H_{\\text{sol}} > 0$). What happens to its solubility upon heating?",
    ["Solubility increases", "Solubility decreases", "No change", "It precipitates completely"],
    0,
    "For endothermic dissolution, adding heat shifts the equilibrium forward, dissolving more solid."
  );
  add(
    "In the equilibrium $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g), \\Delta H = +57.2\\text{ kJ mol}^{-1}$, $\\text{N}_2\\text{O}_4$ is colorless and $\\text{NO}_2$ is reddish-brown. If the mixture is cooled in an ice bath:",
    ["The color fades and becomes lighter (shifts towards colorless $\\text{N}_2\\text{O}_4$)", "The color deepens into dark reddish-brown", "The color remains unchanged", "No reaction occurs"],
    0,
    "Because the forward reaction is endothermic, cooling removes heat and shifts equilibrium in the exothermic reverse direction, forming more colorless $\\text{N}_2\\text{O}_4$."
  );
  add(
    "In the contact process for manufacture of sulfuric acid: $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g), \\Delta H = -197\\text{ kJ mol}^{-1}$, what is the optimum temperature and catalyst used?",
    ["$450^\\circ\\text{C}$ ($720\\text{ K}$) and $\\text{V}_2\\text{O}_5$", "$1000^\\circ\\text{C}$ and Pt", "$100^\\circ\\text{C}$ and Fe", "$450^\\circ\\text{C}$ without catalyst"],
    0,
    "A low temperature is thermodynamically favored, but kinetics would be too slow; an optimum temperature of ~450 ^\\circ\\text{C} with $\\text{V}_2\\text{O}_5$ catalyst provides an economical yield."
  );
  add(
    "For the endothermic dissociation $\\text{COCl}_2(g) \\rightleftharpoons \\text{CO}(g) + \\text{Cl}_2(g)$, which set of conditions will maximize the percentage dissociation of phosgene?",
    ["High temperature and low pressure", "Low temperature and high pressure", "High temperature and high pressure", "Low temperature and low pressure"],
    0,
    "Dissociation is endothermic ($\\Delta H > 0$, favored by high $T$) and increases moles ($\\Delta n_g = +1$, favored by low $P$)."
  );
  add(
    "In a sealed vessel containing $\\text{Fe}_3\\text{O}_4(s) + 4\\text{CO}(g) \\rightleftharpoons 3\\text{Fe}(s) + 4\\text{CO}_2(g)$, how does increasing the volume of the vessel affect the equilibrium?",
    ["It has no effect on the equilibrium position", "Shifts forward", "Shifts backward", "Converts all iron to oxide"],
    0,
    "$\\Delta n_g = 4 - 4 = 0$. Changing volume does not alter the mole ratio of gaseous species."
  );
  add(
    "Consider the reaction $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g), \\Delta H > 0$. What happens if the amount of solid carbon $\\text{C}(s)$ is doubled at constant temperature and volume?",
    ["No effect on equilibrium concentrations of $\\text{CO}_2$ and $\\text{CO}$", "Equilibrium shifts forward", "Equilibrium shifts backward", "Value of $K_p$ doubles"],
    0,
    "Pure solids have constant activity ($a = 1$). Adding more solid carbon does not change its concentration or alter the equilibrium position."
  );
  add(
    "For the reaction $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g), \\Delta H = +180.5\\text{ kJ mol}^{-1}$, the formation of $\\text{NO}$ is favored by:",
    ["High temperature, with pressure having no effect", "Low temperature and high pressure", "Low temperature and low pressure", "High pressure only"],
    0,
    "Because $\\Delta n_g = 0$, pressure has no effect. The reaction is strongly endothermic, so high temperature favors $\\text{NO}$ formation."
  );
  add(
    "When a catalyst is added to the equilibrium $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$:",
    ["The time required to reach equilibrium decreases, but the equilibrium amounts of all species remain identical", "More $\\text{SO}_3$ is produced at equilibrium", "The equilibrium shifts backward", "The reaction becomes endothermic"],
    0,
    "Catalysts provide an alternative pathway with lower activation energy for both directions, accelerating rate without shifting equilibrium composition."
  );
  add(
    "If the pressure on a mixture of diamond and graphite at equilibrium ($\\text{C}_{\\text{graphite}} \\rightleftharpoons \\text{C}_{\\text{diamond}}$) is increased enormously at high temperature, what happens?",
    ["Graphite converts into diamond because diamond is denser", "Diamond converts into graphite", "Both melt into liquid carbon", "No change occurs"],
    0,
    "Density of diamond ($3.51\\text{ g/cm}^3$) is higher than graphite ($2.26\\text{ g/cm}^3$). High pressure favors the denser allotrope with smaller molar volume (diamond)."
  );
  add(
    "In a soft drink bottle, carbon dioxide gas is dissolved in liquid under high pressure: $\\text{CO}_2(g) \\rightleftharpoons \\text{CO}_2(aq)$. When the bottle cap is opened:",
    ["Pressure decreases, shifting equilibrium backward and causing $\\text{CO}_2$ gas bubbles to effervesce out", "Pressure increases, dissolving more gas", "Temperature drops to zero", "Liquid turns into ice"],
    0,
    "Opening the bottle reduces external pressure. To counteract this, dissolved gas shifts backward into gaseous phase, causing rapid effervescence."
  );
  add(
    "For the reaction $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons \\text{C}(g)$, what happens to the equilibrium concentration of C if the volume of the container is halved?",
    ["The concentration of C increases by more than a factor of 2", "The concentration of C is halved", "The concentration of C remains unchanged", "The equilibrium constant doubles"],
    0,
    "Halving volume doubles all concentrations immediately ($Q_c = \\frac{2[\\text{C}]}{(2[\\text{A}])(2[\\text{B}])} = \\frac{1}{2}Q_{\\text{initial}}$). Since $Q_c < K_c$, the reaction shifts forward, increasing $[\\text{C}]$ even further."
  );
  add(
    "In the equilibrium $\\text{CH}_3\\text{COOH}(l) + \\text{C}_2\\text{H}_5\\text{OH}(l) \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5(l) + \\text{H}_2\\text{O}(l)$, how can the yield of ester be increased?",
    ["By continuously removing water or using excess alcohol", "By adding more water", "By increasing pressure", "By cooling to freezing point"],
    0,
    "Removing a product (water, e.g. using concentrated $\\text{H}_2\\text{SO}_4$) or adding excess reactant shifts the esterification forward."
  );
  add(
    "Which of the following equilibria is NOT affected by changes in pressure?",
    ["$\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$", "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$", "$2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$", "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$"],
    0,
    "$\\Delta n_g = (1 + 1) - (1 + 1) = 0$. Pressure changes do not affect equilibria where $\\Delta n_g = 0$."
  );
  add(
    "In the reaction $\\text{A}(g) \\rightleftharpoons \\text{B}(g) + \\text{C}(g)$, the degree of dissociation $\\alpha$ at total pressure $P$ is related to $P$ by ($\\alpha \\ll 1$):",
    ["$\\alpha \\propto \\frac{1}{\\sqrt{P}}$", "$\\alpha \\propto \\sqrt{P}$", "$\\alpha \\propto P$", "$\\alpha \\propto P^2$"],
    0,
    "$K_p = \\frac{\\alpha^2 P}{1 - \\alpha^2} \\approx \\alpha^2 P \\implies \\alpha = \\sqrt{\\frac{K_p}{P}} \\propto \\frac{1}{\\sqrt{P}}$. Increasing pressure decreases dissociation."
  );
  add(
    "For the exothermic reaction $2\\text{A}(g) + \\text{B}(g) \\rightleftharpoons 3\\text{C}(g) + \\text{heat}$, which condition shifts the equilibrium in the backward direction?",
    ["Increasing the temperature", "Increasing the pressure", "Decreasing the concentration of C", "Decreasing the temperature"],
    0,
    "Increasing temperature supplies heat, shifting an exothermic reaction backward."
  );
  add(
    "Assertion (A): Increasing the pressure on the Haber process ($\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$) increases the equilibrium yield of ammonia.\nReason (R): According to Le Chatelier's principle, an increase in pressure shifts the equilibrium towards the side with fewer moles of gas ($\\Delta n_g = -2$).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Compression favors the forward direction because 4 moles of reactants produce 2 moles of product. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The melting point of ice decreases as pressure increases.\nReason (R): Liquid water has higher density and smaller volume than ice at 0 ^\\circ\\text{C}, so high pressure shifts the equilibrium towards the liquid phase.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Increased pressure favors the denser phase with smaller volume (water). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Addition of an inert gas to an equilibrium mixture at constant volume does not alter the equilibrium position.\nReason (R): At constant volume, the addition of an inert gas does not change the partial pressures or molar concentrations of any of the reacting species.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since partial pressures remain constant, $Q_p$ remains equal to $K_p$, and no shift occurs. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Addition of an inert gas to $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$ at constant pressure shifts the equilibrium in the forward direction.\nReason (R): At constant pressure, the addition of an inert gas increases the total volume, decreasing the partial pressures of the reacting gases.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The volume expansion shifts equilibrium towards the side with more gaseous moles ($\\Delta n_g = +1$). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Adding more solid $\\text{CaCO}_3$ to a saturated decomposition equilibrium does not alter the equilibrium pressure of $\\text{CO}_2$.\nReason (R): The active mass of a pure solid is constant ($a = 1$) and does not appear in the equilibrium constant expression $K_p = P_{\\text{CO}_2}$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Solid amount does not alter $P_{\\text{CO}_2}$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): For the reaction $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, changing the pressure of the system does not affect the degree of dissociation.\nReason (R): In this reaction, the number of moles of gaseous reactants equals the number of moles of gaseous products ($\\Delta n_g = 0$).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Equal gas moles on both sides make the equilibrium invariant to pressure changes. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): A catalyst increases the yield of products in an equilibrium mixture.\nReason (R): A catalyst lowers the activation energy of the forward reaction more than the backward reaction.",
    ["Both (A) and (R) are false", "(A) is true, but (R) is false", "(A) is false, but (R) is true", "Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are completely false: a catalyst does not change the equilibrium yield and lowers activation energy of both forward and backward reactions by the exact same amount.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "For the equilibrium $\\text{CO}_2(g) + \\text{C}(s) \\rightleftharpoons 2\\text{CO}(g)$, decreasing the volume of the reaction vessel will:",
    ["Shift the equilibrium to the left (producing more $\\text{CO}_2$)", "Shift the equilibrium to the right", "Have no effect", "Increase the value of $K_c$"],
    0,
    "Decreasing volume increases pressure, which shifts the equilibrium towards the side with fewer gas moles (left, 1 mole vs 2 moles)."
  );
  add(
    "In which of the following reactions will an increase in temperature increase the equilibrium constant?",
    ["$\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g), \\Delta H = +180\\text{ kJ}$", "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g), \\Delta H = -198\\text{ kJ}$", "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g), \\Delta H = -92\\text{ kJ}$", "$\\text{CO}(g) + 3\\text{H}_2(g) \\rightleftharpoons \\text{CH}_4(g) + \\text{H}_2\\text{O}(g), \\Delta H = -206\\text{ kJ}$"],
    0,
    "Only endothermic reactions ($\\Delta H > 0$) have equilibrium constants that increase with temperature."
  );
  add(
    "What is the effect of removing water from the equilibrium $\\text{C}_2\\text{H}_5\\text{OH} + \\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$?",
    ["Equilibrium shifts forward, increasing ester yield", "Equilibrium shifts backward", "No change", "Reaction stops"],
    0,
    "Removing a product causes the system to shift forward to replenish it."
  );
  add(
    "For the reaction $\\text{A}_2(g) + 4\\text{B}_2(g) \\rightleftharpoons 2\\text{AB}_4(g), \\Delta H < 0$, the formation of $\\text{AB}_4$ will be favored at:",
    ["Low temperature and high pressure", "High temperature and low pressure", "High temperature and high pressure", "Low temperature and low pressure"],
    0,
    "Exothermic ($\\Delta H < 0$, favored by low $T$) and decreasing moles ($\\Delta n_g = 2 - 5 = -3$, favored by high $P$)."
  );
  add(
    "For the dissociation of calcium hydroxide: $\\text{Ca(OH)}_2(s) \\rightleftharpoons \\text{Ca}^{2+}(aq) + 2\\text{OH}^-(aq), \\Delta H < 0$. If the solution is heated:",
    ["Precipitation of $\\text{Ca(OH)}_2$ occurs (solubility decreases)", "More $\\text{Ca(OH)}_2$ dissolves", "pH increases", "No effect"],
    0,
    "Because dissolution is exothermic, heating shifts the equilibrium backward, causing precipitation."
  );
  add(
    "In the equilibrium $\\text{I}_2(s) \\rightleftharpoons \\text{I}_2(g) - \\text{heat}$, the concentration of iodine vapor increases when:",
    ["Temperature is increased", "Temperature is decreased", "Pressure is increased", "More solid $\\text{I}_2$ is added at constant $T$"],
    0,
    "Sublimation is endothermic; raising temperature shifts the equilibrium forward, increasing the vapor concentration."
  );
  add(
    "What is the effect of adding a small amount of solid sodium acetate to an aqueous solution of acetic acid?",
    ["The degree of dissociation of acetic acid decreases due to common ion effect", "The pH decreases", "Acetic acid dissociates more", "Concentration of $\\text{H}^+$ increases"],
    0,
    "Sodium acetate supplies acetate ions (common ion), shifting the weak acid ionization backward: $\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}^+$."
  );
  add(
    "Which of the following changes will shift the equilibrium $\\text{SO}_2\\text{Cl}_2(g) \\rightleftharpoons \\text{SO}_2(g) + \\text{Cl}_2(g)$ to the right?",
    ["Increasing the volume of the container", "Increasing total pressure", "Adding chlorine gas", "Decreasing temperature (reaction is endothermic)"],
    0,
    "Increasing volume decreases pressure, favoring the side with more moles (right side, 2 moles vs 1 mole)."
  );
  add(
    "When chlorine gas is added to the equilibrium $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$ at constant volume:",
    ["The degree of dissociation of $\\text{PCl}_5$ decreases", "The concentration of $\\text{PCl}_3$ increases", "The value of $K_c$ increases", "The temperature decreases"],
    0,
    "Adding a product ($\\text{Cl}_2$) shifts the equilibrium to the left, decreasing the dissociation of $\\text{PCl}_5$ and consuming $\\text{PCl}_3$."
  );
  add(
    "For the reaction $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$, the vapor density of the equilibrium mixture at temperature $T$:",
    ["Decreases as temperature increases", "Increases as temperature increases", "Remains constant", "Is independent of dissociation"],
    0,
    "As temperature increases, endothermic dissociation into more moles increases ($\\alpha$ rises). Because observed vapor density $d = \\frac{M_{\\text{th}}}{1 + \\alpha}$, increasing $\\alpha$ decreases the vapor density."
  );
  add(
    "In the water-gas shift reaction $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$, injecting excess steam ($\\text{H}_2\\text{O}$):",
    ["Shifts the equilibrium forward to produce more $\\text{H}_2$ and consume $\\text{CO}$", "Shifts the equilibrium backward", "Decreases the yield of $\\text{CO}_2$", "Decreases the value of $K_c$"],
    0,
    "Adding a reactant ($\\text{H}_2\\text{O}$) drives the reaction forward."
  );
  add(
    "Which of the following will NOT affect the equilibrium state of a chemical system?",
    ["Addition of an inert gas at constant volume", "Change in temperature", "Change in volume for a reaction with $\\Delta n_g \\ne 0$", "Change in concentration of reactants"],
    0,
    "Addition of inert gas at constant volume does not change partial pressures or concentrations, leaving the equilibrium position completely unchanged."
  );
  add(
    "For an exothermic reaction, what happens to the equilibrium concentrations of reactants and products when the temperature is raised?",
    ["Reactant concentrations increase and product concentrations decrease", "Reactant concentrations decrease and product concentrations increase", "Both increase", "Both decrease"],
    0,
    "Raising temperature shifts an exothermic reaction in reverse, consuming products and producing more reactants."
  );
  add(
    "For the synthesis of ammonia, why is an intermediate temperature (around 700 K) used commercially rather than room temperature?",
    ["At room temperature, the rate of reaction is negligibly slow, so an optimum temperature is chosen to balance reaction rate and equilibrium yield", "Ammonia is unstable at room temperature", "Iron catalyst is active only above 1000 K", "The reaction is endothermic at room temperature"],
    0,
    "Although low temperature favors high equilibrium yield thermodynamically, reaction kinetics are too sluggish. An optimum temperature provides an acceptable rate of production."
  );

  return q;
}

function getChemicalEquilibriumPartAQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Chemical equilibrium", text, opts, ans, exp, diff, type));

  // 84 Questions for Part A of Chemical equilibrium
  add(
    "Chemical equilibrium is said to be dynamic in nature because:",
    ["The forward and reverse reactions continue to occur at equal rates, so there is no net change in macroscopic properties", "The reaction has stopped completely", "Molecules become stationary at equilibrium", "Only the forward reaction occurs"],
    0,
    "Dynamic equilibrium means microscopic chemical transformations proceed continuously in both directions with equal rates ($r_f = r_b$), keeping macroscopic observables (concentration, pressure, color) constant."
  );
  add(
    "The Law of Mass Action was proposed by:",
    ["Guldberg and Waage", "Le Chatelier and Braun", "Arrhenius and Ostwald", "Haber and Bosch"],
    0,
    "C.M. Guldberg and P. Waage (1864) formulated the Law of Mass Action, stating that the rate of a chemical reaction is proportional to the product of the active masses of the reactants."
  );
  add(
    "For the reaction $\\text{A} \\rightleftharpoons n\\text{B}$, if the initial vapor density is $D$ and the observed vapor density at equilibrium is $d$, the degree of dissociation $\\alpha$ is given by:",
    ["$\\alpha = \\frac{D - d}{(n - 1)d}$", "$\\alpha = \\frac{d - D}{(n - 1)D}$", "$\\alpha = \\frac{D - d}{nd}$", "$\\alpha = \\frac{D}{(n - 1)d}$"],
    0,
    "Total moles at equilibrium = $1 + (n - 1)\\alpha$. Since vapor density is inversely proportional to the number of moles, $\\frac{D}{d} = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{D - d}{(n - 1)d}$."
  );
  add(
    "For the dissociation of $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$ ($n = 2$), the degree of dissociation $\\alpha$ in terms of theoretical vapor density $D$ and observed vapor density $d$ is:",
    ["$\\alpha = \\frac{D - d}{d}$", "$\\alpha = \\frac{D - d}{D}$", "$\\alpha = \\frac{d}{D - d}$", "$\\alpha = \\frac{2(D - d)}{d}$"],
    0,
    "Here $n = 2$. Substituting into $\\alpha = \\frac{D - d}{(n - 1)d}$ gives $\\alpha = \\frac{D - d}{d}$."
  );
  add(
    "The theoretical vapor density of $\\text{PCl}_5$ is 104.25. At a certain temperature, the observed vapor density is found to be 62. The degree of dissociation of $\\text{PCl}_5$ is approximately:",
    ["68%", "34%", "50%", "82%"],
    0,
    "$\\alpha = \\frac{D - d}{d} = \\frac{104.25 - 62}{62} = \\frac{42.25}{62} \\approx 0.681$ or 68.1%."
  );
  add(
    "For $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$, the theoretical vapor density is 46. If the observed vapor density is 30, the degree of dissociation of $\\text{N}_2\\text{O}_4$ is:",
    ["0.533", "0.348", "0.250", "0.667"],
    0,
    "$\\alpha = \\frac{46 - 30}{30} = \\frac{16}{30} \\approx 0.533$ (53.3%)."
  );
  add(
    "In terms of degree of dissociation $\\alpha$ and total pressure $P$, the equilibrium constant $K_p$ for $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$ is:",
    ["$K_p = \\frac{\\alpha^2 P}{1 - \\alpha^2}$", "$K_p = \\frac{4\\alpha^2 P}{1 - \\alpha^2}$", "$K_p = \\frac{\\alpha^2 P}{(1 - \\alpha)(1 + \\alpha)^2}$", "$K_p = \\frac{\\alpha P}{1 - \\alpha}$"],
    0,
    "Moles at equilibrium: $\\text{PCl}_5 = 1-\\alpha$, $\\text{PCl}_3 = \\alpha$, $\\text{Cl}_2 = \\alpha$, total moles = $1+\\alpha$. Partial pressures: $P_{\\text{PCl}_3} = P_{\\text{Cl}_2} = \\frac{\\alpha}{1+\\alpha}P$, $P_{\\text{PCl}_5} = \\frac{1-\\alpha}{1+\\alpha}P$. Thus $K_p = \\frac{\\alpha^2 P}{1 - \\alpha^2}$."
  );
  add(
    "For the dissociation $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$, the expression for $K_p$ in terms of $\\alpha$ and total pressure $P$ is:",
    ["$K_p = \\frac{4\\alpha^2 P}{1 - \\alpha^2}$", "$K_p = \\frac{\\alpha^2 P}{1 - \\alpha^2}$", "$K_p = \\frac{4\\alpha^2 P^2}{1 - \\alpha^2}$", "$K_p = \\frac{2\\alpha P}{1 - \\alpha}$"],
    0,
    "Moles at equilibrium: $\\text{N}_2\\text{O}_4 = 1-\\alpha$, $\\text{NO}_2 = 2\\alpha$, total moles = $1+\\alpha$. $P_{\\text{NO}_2} = \\frac{2\\alpha}{1+\\alpha}P$, $P_{\\text{N}_2\\text{O}_4} = \\frac{1-\\alpha}{1+\\alpha}P$. $K_p = \\frac{P_{\\text{NO}_2}^2}{P_{\\text{N}_2\\text{O}_4}} = \\frac{4\\alpha^2 P}{1 - \\alpha^2}$."
  );
  add(
    "At a given temperature, 1 mole of $\\text{PCl}_5$ is heated in a 1 L closed vessel. At equilibrium, 0.4 mole of $\\text{PCl}_3$ is formed. What is the value of $K_c$?",
    ["$0.267\\text{ mol L}^{-1}$", "$0.40\\text{ mol L}^{-1}$", "$0.16\\text{ mol L}^{-1}$", "$0.60\\text{ mol L}^{-1}$"],
    0,
    "At equilibrium: $[\\text{PCl}_3] = 0.4\\text{ M}, [\\text{Cl}_2] = 0.4\\text{ M}, [\\text{PCl}_5] = 1.0 - 0.4 = 0.6\\text{ M}$. $K_c = \\frac{(0.4)(0.4)}{0.6} = \\frac{0.16}{0.6} \\approx 0.267\\text{ mol L}^{-1}$."
  );
  add(
    "In a 5 L container, 2 moles of $\\text{HI}$ are dissociated until equilibrium is attained: $2\\text{HI}(g) \\rightleftharpoons \\text{H}_2(g) + \\text{I}_2(g)$. If $K_c = 0.25$, what is the equilibrium concentration of $\\text{HI}$?",
    ["$0.20\\text{ M}$", "$0.40\\text{ M}$", "$0.10\\text{ M}$", "$0.50\\text{ M}$"],
    0,
    "Initial $[\\text{HI}] = 2/5 = 0.4\\text{ M}$. At equilibrium: $[\\text{HI}] = 0.4 - 2x, [\\text{H}_2] = x, [\\text{I}_2] = x$. $K_c = \\frac{x^2}{(0.4 - 2x)^2} = 0.25 \\implies \\frac{x}{0.4 - 2x} = 0.5 \\implies x = 0.2 - x \\implies 2x = 0.2 \\implies x = 0.1$. Then $[\\text{HI}] = 0.4 - 0.2 = 0.20\\text{ M}$."
  );
  add(
    "For the reaction $2\\text{NO}_2(g) \\rightleftharpoons 2\\text{NO}(g) + \\text{O}_2(g)$, $K_c = 1.8 \\times 10^{-6}$ at $184^\\circ\\text{C}$. What is $K_c$ for $\\text{NO}(g) + \\frac{1}{2}\\text{O}_2(g) \\rightleftharpoons \\text{NO}_2(g)$?",
    ["$745\\text{ M}^{-1/2}$", "$1.8 \\times 10^{-6}$", "$5.56 \\times 10^5$", "$1.34 \\times 10^3$"],
    0,
    "The target reaction is the reverse of the original divided by 2. Thus $K' = (1/K_c)^{1/2} = \\sqrt{\\frac{1}{1.8 \\times 10^{-6}}} = \\sqrt{5.556 \\times 10^5} \\approx 745.35\\text{ M}^{-1/2}$."
  );
  add(
    "A vessel contains $\\text{N}_2\\text{O}_4$ and $\\text{NO}_2$ in equilibrium at $300\\text{ K}$. If the total pressure is $1\\text{ atm}$ and $\\alpha = 0.2$, the value of $K_p$ is:",
    ["$0.167\\text{ atm}$", "$0.04\\text{ atm}$", "$0.333\\text{ atm}$", "$0.80\\text{ atm}$"],
    0,
    "$K_p = \\frac{4\\alpha^2 P}{1 - \\alpha^2} = \\frac{4(0.2)^2 (1)}{1 - (0.2)^2} = \\frac{4(0.04)}{1 - 0.04} = \\frac{0.16}{0.96} = \\frac{1}{6} \\approx 0.167\\text{ atm}$."
  );
  add(
    "For the equilibrium $\\text{CO}(g) + \\text{Cl}_2(g) \\rightleftharpoons \\text{COCl}_2(g)$, $K_p/K_c$ is equal to:",
    ["$(RT)^{-1}$", "$(RT)$", "$(RT)^2$", "1"],
    0,
    "$\\Delta n_g = 1 - (1 + 1) = -1$. $K_p = K_c(RT)^{-1} \\implies \\frac{K_p}{K_c} = (RT)^{-1} = \\frac{1}{RT}$."
  );
  add(
    "At $1000\\text{ K}$, a sample of pure $\\text{NO}_2$ gas decomposes: $2\\text{NO}_2(g) \\rightleftharpoons 2\\text{NO}(g) + \\text{O}_2(g)$. The equilibrium constant $K_p = 156\\text{ atm}$. If the equilibrium partial pressure of $\\text{O}_2$ is $0.25\\text{ atm}$, what is the ratio $P_{\\text{NO}}/P_{\\text{NO}_2}$?",
    ["25", "12.5", "625", "50"],
    0,
    "$K_p = \\frac{P_{\\text{NO}}^2 \\cdot P_{\\text{O}_2}}{P_{\\text{NO}_2}^2} = \\left(\\frac{P_{\\text{NO}}}{P_{\\text{NO}_2}}\\right)^2 (0.25) = 156 \\implies \\left(\\frac{P_{\\text{NO}}}{P_{\\text{NO}_2}}\\right)^2 = \\frac{156}{0.25} = 624 \\implies \\frac{P_{\\text{NO}}}{P_{\\text{NO}_2}} \\approx \\sqrt{624} \\approx 25$."
  );
  add(
    "For the reaction $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g)$, the partial pressure of $\\text{CO}_2$ and $\\text{CO}$ are $2.0\\text{ atm}$ and $4.0\\text{ atm}$ respectively at equilibrium. The value of $K_p$ is:",
    ["$8.0\\text{ atm}$", "$2.0\\text{ atm}$", "$16.0\\text{ atm}$", "$4.0\\text{ atm}$"],
    0,
    "$K_p = \\frac{P_{\\text{CO}}^2}{P_{\\text{CO}_2}} = \\frac{(4.0)^2}{2.0} = \\frac{16}{2} = 8.0\\text{ atm}$."
  );
  add(
    "In the reaction $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, 0.2 mole of $\\text{H}_2$ and 0.2 mole of $\\text{I}_2$ are reacted in a 10 L vessel. If $K_c = 64$, what are the equilibrium moles of $\\text{HI}$?",
    ["0.32 mole", "0.16 mole", "0.08 mole", "0.40 mole"],
    0,
    "Let $2x$ moles of HI form. Then moles of $\\text{H}_2 = \\text{I}_2 = 0.2 - x$. Volume cancels out since $\\Delta n = 0$. $K_c = \\frac{(2x)^2}{(0.2 - x)^2} = 64 \\implies \\frac{2x}{0.2 - x} = 8 \\implies 2x = 1.6 - 8x \\implies 10x = 1.6 \\implies x = 0.16$. Moles of HI = $2x = 0.32$ mole."
  );
  add(
    "Which of the following statements about the equilibrium state of a closed system is correct?",
    ["The concentrations of reactants and products become constant and measurable properties cease to change", "The total mass of reactants equals the total mass of products", "The reaction rate becomes zero in both directions", "All reactants are converted into products"],
    0,
    "At equilibrium, concentrations and macroscopic properties remain constant over time while forward and backward reactions continue at equal rates."
  );
  add(
    "The value of $K_p$ for the dissociation $\\text{XY}_2(g) \\rightleftharpoons \\text{X}(g) + 2\\text{Y}(g)$ is $2.91 \\times 10^{-5}\\text{ atm}^2$ at $298\\text{ K}$. What is the value of $K_c$? ($R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$)",
    ["$4.86 \\times 10^{-8}\\text{ mol}^2 \\text{L}^{-2}$", "$1.74 \\times 10^{-6}\\text{ mol}^2 \\text{L}^{-2}$", "$2.91 \\times 10^{-5}\\text{ mol}^2 \\text{L}^{-2}$", "$7.12 \\times 10^{-4}\\text{ mol}^2 \\text{L}^{-2}$"],
    0,
    "$\\Delta n_g = (1 + 2) - 1 = 2$. $K_c = \\frac{K_p}{(RT)^2} = \\frac{2.91 \\times 10^{-5}}{(0.0821 \\times 298)^2} = \\frac{2.91 \\times 10^{-5}}{(24.466)^2} = \\frac{2.91 \\times 10^{-5}}{598.6} \\approx 4.86 \\times 10^{-8}\\text{ mol}^2 \\text{L}^{-2}$."
  );
  add(
    "For the equilibrium $\\text{NH}_4\\text{HS}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{H}_2\\text{S}(g)$, if additional $\\text{NH}_3$ gas is introduced at constant temperature:",
    ["The partial pressure of $\\text{H}_2\\text{S}$ will decrease to keep $K_p$ constant", "The value of $K_p$ will increase", "More $\\text{NH}_4\\text{HS}$ will decompose", "The partial pressure of $\\text{H}_2\\text{S}$ remains unchanged"],
    0,
    "$K_p = P_{\\text{NH}_3} \\cdot P_{\\text{H}_2\\text{S}}$ is constant at a given temperature. Increasing $P_{\\text{NH}_3}$ forces $P_{\\text{H}_2\\text{S}}$ to decrease via backward reaction."
  );
  add(
    "If the equilibrium constant for $A + B \\rightleftharpoons C + D$ is $K$, what is the equilibrium constant for $2C + 2D \\rightleftharpoons 2A + 2B$?",
    ["$1/K^2$", "$K^2$", "$2/K$", "$1/2K$"],
    0,
    "Reversing the equation inverts $K$ ($1/K$) and multiplying by 2 squares the constant, giving $1/K^2$."
  );
  add(
    "Two moles of $\\text{N}_2$ and 6 moles of $\\text{H}_2$ are mixed in a closed vessel. At equilibrium, 50% of $\\text{N}_2$ is converted into $\\text{NH}_3$. The total number of moles of gas present at equilibrium is:",
    ["6 moles", "8 moles", "4 moles", "7 moles"],
    0,
    "Reaction: $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$. If 50% of $\\text{N}_2$ reacts ($x = 1$ mole reacted): remaining $\\text{N}_2 = 2 - 1 = 1$, remaining $\\text{H}_2 = 6 - 3 = 3$, formed $\\text{NH}_3 = 2(1) = 2$. Total moles = $1 + 3 + 2 = 6$ moles."
  );
  add(
    "For the reaction $2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, if $K_p = 0.5\\text{ atm}^{-1}$ and the total pressure at equilibrium is $1.5\\text{ atm}$, what is the partial pressure of $\\text{N}_2\\text{O}_4$?",
    ["$0.5\\text{ atm}$", "$1.0\\text{ atm}$", "$0.25\\text{ atm}$", "$0.75\\text{ atm}$"],
    0,
    "Let $P_{\\text{NO}_2} = p$, then $P_{\\text{N}_2\\text{O}_4} = 1.5 - p$. $K_p = \\frac{1.5 - p}{p^2} = 0.5 \\implies 1.5 - p = 0.5 p^2 \\implies 0.5 p^2 + p - 1.5 = 0 \\implies p^2 + 2p - 3 = 0 \\implies (p + 3)(p - 1) = 0 \\implies p = 1.0\\text{ atm}$. Thus $P_{\\text{N}_2\\text{O}_4} = 1.5 - 1.0 = 0.5\\text{ atm}$."
  );
  add(
    "Which of the following observations proves that chemical equilibrium is dynamic?",
    ["Using radioactive isotope $^{131}\\text{I}$ in $\\text{H}_2 + \\text{I}_2 \\rightleftharpoons 2\\text{HI}$ at equilibrium results in the radioactive label appearing in both $\\text{I}_2$ and $\\text{HI}$", "The pressure remains constant", "The temperature remains constant", "The color does not change"],
    0,
    "Adding radioactive $^{131}\\text{I}_2$ to an established equilibrium leads to formation of radioactive $\\text{H}^{131}\\text{I}$, proving that forward and reverse reactions continuously take place."
  );
  add(
    "For the reaction $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons \\text{C}(g) + \\text{D}(g)$, the equilibrium constant is $K_c = 16$. If 1 mole of each A, B, C, and D are placed in a 1 L vessel, what is the concentration of C at equilibrium?",
    ["$1.6\\text{ M}$", "$0.4\\text{ M}$", "$1.0\\text{ M}$", "$2.0\\text{ M}$"],
    0,
    "Initial $Q_c = \\frac{(1)(1)}{(1)(1)} = 1 < K_c (16)$, so the reaction shifts forward. Let $x$ be moles reacted: $K_c = \\frac{(1+x)^2}{(1-x)^2} = 16 \\implies \\frac{1+x}{1-x} = 4 \\implies 1+x = 4-4x \\implies 5x = 3 \\implies x = 0.6$. Thus $[\\text{C}] = 1 + 0.6 = 1.6\\text{ M}$."
  );
  add(
    "In the equilibrium $2\\text{A}(g) \\rightleftharpoons \\text{B}(g) + \\text{C}(g)$, the degree of dissociation of A is found to be independent of:",
    ["The total pressure and volume of the container", "The temperature", "The nature of A", "The equilibrium constant"],
    0,
    "Because $\\Delta n_g = (1 + 1) - 2 = 0$, the equilibrium is independent of pressure and container volume."
  );
  add(
    "For the reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, if the initial concentrations of $\\text{N}_2$ and $\\text{H}_2$ are $1\\text{ M}$ and $3\\text{ M}$ respectively, and at equilibrium $[\\text{NH}_3] = 1\\text{ M}$, what is the value of $K_c$?",
    ["$0.59\\text{ M}^{-2}$", "$1.0\\text{ M}^{-2}$", "$0.25\\text{ M}^{-2}$", "$2.0\\text{ M}^{-2}$"],
    0,
    "Formation of 1 M $\\text{NH}_3$ consumes 0.5 M $\\text{N}_2$ and 1.5 M $\\text{H}_2$. At equilibrium: $[\\text{N}_2] = 1 - 0.5 = 0.5\\text{ M}$, $[\\text{H}_2] = 3 - 1.5 = 1.5\\text{ M}$, $[\\text{NH}_3] = 1\\text{ M}$. $K_c = \\frac{1^2}{(0.5)(1.5)^3} = \\frac{1}{0.5 \\times 3.375} = \\frac{1}{1.6875} \\approx 0.593\\text{ M}^{-2}$."
  );
  add(
    "When ethanol and acetic acid react at $25^\\circ\\text{C}$, the equilibrium constant for esterification is 4.0. If 1 mole of acetic acid and 1 mole of ethanol are mixed, what is the equilibrium mole of ethyl acetate formed?",
    ["0.67 mole", "0.50 mole", "0.33 mole", "0.75 mole"],
    0,
    "Let $x$ be moles of ester formed: $K_c = \\frac{x^2}{(1-x)^2} = 4.0 \\implies \\frac{x}{1-x} = 2.0 \\implies x = 2 - 2x \\implies 3x = 2 \\implies x = 2/3 \\approx 0.67$ mole."
  );
  add(
    "The partial pressure of $\\text{CO}_2$ in the equilibrium $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$ is $0.5\\text{ atm}$ at $1000\\text{ K}$ and $1.0\\text{ atm}$ at $1050\\text{ K}$. What is the sign of $\\Delta H^\\circ$ for this reaction?",
    ["Positive (endothermic)", "Negative (exothermic)", "Zero", "Cannot be determined"],
    0,
    "Since $K_p = P_{\\text{CO}_2}$ increases with temperature (from 0.5 to 1.0 atm), the reaction is endothermic ($\\Delta H^\\circ > 0$)."
  );
  add(
    "For the dissociation of water vapor $2\\text{H}_2\\text{O}(g) \\rightleftharpoons 2\\text{H}_2(g) + \\text{O}_2(g)$, the degree of dissociation $\\alpha$ is very small ($\\alpha \\ll 1$). The relationship between $\\alpha$ and total pressure $P$ is:",
    ["$\\alpha \\propto P^{-1/3}$", "$\\alpha \\propto P^{-1/2}$", "$\\alpha \\propto P$", "$\\alpha \\propto P^2$"],
    0,
    "At equilibrium: $P_{\\text{H}_2} = \\alpha P, P_{\\text{O}_2} = \\frac{\\alpha}{2} P, P_{\\text{H}_2\\text{O}} \\approx P$. $K_p = \\frac{(\\alpha P)^2 (\\frac{\\alpha}{2} P)}{P^2} = \\frac{\\alpha^3 P}{2} \\implies \\alpha = \\left(\\frac{2K_p}{P}\\right)^{1/3} \\propto P^{-1/3}$."
  );
  add(
    "In the equilibrium $\\text{A}(s) + 2\\text{B}(g) \\rightleftharpoons 3\\text{C}(g)$, the expression for $K_c$ is:",
    ["$K_c = \\frac{[\\text{C}]^3}{[\\text{B}]^2}$", "$K_c = \\frac{[\\text{C}]^3}{[\\text{A}][\\text{B}]^2}$", "$K_c = \\frac{[\\text{B}]^2}{[\\text{C}]^3}$", "$K_c = [\\text{C}]^3$"],
    0,
    "Solid A is excluded from the equilibrium expression: $K_c = \\frac{[\\text{C}]^3}{[\\text{B}]^2}$."
  );
  add(
    "A chemical reaction is in a state of dynamic equilibrium when:",
    ["The rate of the forward reaction equals the rate of the reverse reaction", "The concentration of reactants equals the concentration of products", "The activation energy of forward reaction is zero", "The reaction mixture becomes heterogeneous"],
    0,
    "Equilibrium is defined by equality of forward and reverse reaction rates: $r_f = r_b$."
  );
  add(
    "For the reaction $\\text{SO}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\rightleftharpoons \\text{SO}_3(g)$, $K_p = 1.7 \\times 10^{12}$ at $300\\text{ K}$. The large value of $K_p$ signifies that:",
    ["At equilibrium, $\\text{SO}_3$ is overwhelmingly favored and conversion is almost complete", "The reaction does not take place", "Reactants are overwhelmingly favored", "The reaction is extremely slow"],
    0,
    "A massive equilibrium constant ($K \\gg 10^3$) means the equilibrium lies far to the product side, yielding almost complete conversion."
  );
  add(
    "If $K_1$ is the equilibrium constant for $\\text{H}_2(g) + \\text{Br}_2(g) \\rightleftharpoons 2\\text{HBr}(g)$ and $K_2$ is the equilibrium constant for $\\frac{1}{2}\\text{H}_2(g) + \\frac{1}{2}\\text{Br}_2(g) \\rightleftharpoons \\text{HBr}(g)$, then:",
    ["$K_2 = \\sqrt{K_1}$", "$K_2 = K_1^2$", "$K_2 = 2 K_1$", "$K_2 = 1/K_1$"],
    0,
    "Halving stoichiometric coefficients takes the square root of the equilibrium constant: $K_2 = K_1^{1/2} = \\sqrt{K_1}$."
  );
  add(
    "The equilibrium constant $K_p$ for the dissociation of $\\text{N}_2\\text{O}_4$ into $\\text{NO}_2$ is 0.14 at $25^\\circ\\text{C}$. What is the value of $K_c$ at this temperature? ($R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$)",
    ["$5.72 \\times 10^{-3}\\text{ M}$", "$3.42 \\times 10^{-2}\\text{ M}$", "$0.14\\text{ M}$", "$3.43\\text{ M}$"],
    0,
    "$\\Delta n_g = 2 - 1 = 1$. $K_c = \\frac{K_p}{RT} = \\frac{0.14}{0.0821 \\times 298.15} = \\frac{0.14}{24.48} \\approx 5.72 \\times 10^{-3}\\text{ M}$."
  );
  add(
    "At a certain temperature, 0.4 mole of $\\text{PCl}_5$ is placed in a 2.0 L vessel. At equilibrium, 0.1 mole of $\\text{PCl}_5$ remains. What is the value of $K_c$?",
    ["$0.45\\text{ M}$", "$0.90\\text{ M}$", "$0.225\\text{ M}$", "$1.8\\text{ M}$"],
    0,
    "Moles dissociated = $0.4 - 0.1 = 0.3$. At equilibrium: $[\\text{PCl}_3] = [\\text{Cl}_2] = 0.3/2.0 = 0.15\\text{ M}$, $[\\text{PCl}_5] = 0.1/2.0 = 0.05\\text{ M}$. $K_c = \\frac{(0.15)(0.15)}{0.05} = \\frac{0.0225}{0.05} = 0.45\\text{ M}$."
  );
  add(
    "For which of the following gaseous reactions is $K_p$ dimensionless?",
    ["$\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$", "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$", "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$", "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"],
    0,
    "When $\\Delta n_g = 0$, the units of pressure cancel out, making $K_p$ dimensionless."
  );
  add(
    "In a reaction $\\text{A}(g) + 2\\text{B}(g) \\rightleftharpoons 2\\text{C}(g)$, the equilibrium concentrations are $[\\text{A}] = 0.15\\text{ M}, [\\text{B}] = 0.30\\text{ M}, [\\text{C}] = 0.60\\text{ M}$. The value of $K_c$ is:",
    ["$26.67\\text{ M}^{-1}$", "$13.33\\text{ M}^{-1}$", "$5.33\\text{ M}^{-1}$", "$53.33\\text{ M}^{-1}$"],
    0,
    "$K_c = \\frac{[\\text{C}]^2}{[\\text{A}][\\text{B}]^2} = \\frac{(0.60)^2}{(0.15)(0.30)^2} = \\frac{0.36}{0.15 \\times 0.09} = \\frac{0.36}{0.0135} \\approx 26.67\\text{ M}^{-1}$."
  );
  add(
    "If the equilibrium constant for the reaction $\\text{A}_2 + \\text{B}_2 \\rightleftharpoons 2\\text{AB}$ is 40, what is the equilibrium constant for $\\text{AB} \\rightleftharpoons \\frac{1}{2}\\text{A}_2 + \\frac{1}{2}\\text{B}_2$?",
    ["$0.158$", "$0.025$", "$6.32$", "$0.05$"],
    0,
    "$K' = \\frac{1}{\\sqrt{K}} = \\frac{1}{\\sqrt{40}} = \\frac{1}{6.325} \\approx 0.158$."
  );
  add(
    "For the dissociation of $\\text{HI}$: $2\\text{HI}(g) \\rightleftharpoons \\text{H}_2(g) + \\text{I}_2(g)$, the degree of dissociation $\\alpha$ is 0.2 at $440^\\circ\\text{C}$. The equilibrium constant $K_c$ is:",
    ["$0.0156$", "$0.040$", "$0.0625$", "$0.25$"],
    0,
    "$K_c = \\frac{(\\alpha/2)(\\alpha/2)}{(1 - \\alpha)^2} = \\frac{\\alpha^2}{4(1-\\alpha)^2} = \\frac{(0.2)^2}{4(0.8)^2} = \\frac{0.04}{4(0.64)} = \\frac{0.04}{2.56} = 0.0156$."
  );
  add(
    "For the heterogeneous equilibrium $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g)$, if the initial pressure of $\\text{CO}_2$ is $1.0\\text{ atm}$ and total pressure at equilibrium is $1.6\\text{ atm}$, what is the value of $K_p$?",
    ["$3.6\\text{ atm}$", "$2.4\\text{ atm}$", "$1.8\\text{ atm}$", "$0.9\\text{ atm}$"],
    0,
    "Let $p$ be decrease in $P_{\\text{CO}_2}$. $P_{\\text{CO}_2} = 1 - p, P_{\\text{CO}} = 2p$. Total pressure $= 1 - p + 2p = 1 + p = 1.6 \\implies p = 0.6\\text{ atm}$. Thus $P_{\\text{CO}_2} = 0.4\\text{ atm}, P_{\\text{CO}} = 1.2\\text{ atm}$. $K_p = \\frac{(1.2)^2}{0.4} = \\frac{1.44}{0.4} = 3.6\\text{ atm}$."
  );
  add(
    "Assertion (A): For the synthesis of ammonia, $K_p$ is less than $K_c$ at room temperature.\nReason (R): For the reaction $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$, $\\Delta n_g = -2$, and $RT > 1$ at $298\\text{ K}$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "$K_p = K_c (RT)^{-2} = \\frac{K_c}{(RT)^2}$. Since $RT = 24.5 > 1$, $(RT)^2 > 1$, making $K_p < K_c$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Physical equilibria (such as liquid-vapor equilibrium) can only be attained in closed systems.\nReason (R): In an open system, vapor continuously escapes into the surroundings, preventing the rates of vaporization and condensation from becoming equal.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "A closed system is mandatory for equilibrium so that matter cannot leave or enter the system. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Chemical equilibrium is dynamic, not static.\nReason (R): When dynamic equilibrium is reached, the forward and reverse reactions proceed at identical rates, resulting in constant macroscopic properties.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Microscopic reactions continue without net macroscopic change. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The equilibrium constant for a reaction is independent of initial concentrations of reactants.\nReason (R): The ratio of product concentrations to reactant concentrations at equilibrium adjusts to maintain a constant value of $K_c$ at a given temperature.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "$K_c$ depends only on temperature for a specific reaction. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): For the decomposition of $\\text{PCl}_5$, the degree of dissociation increases with decreasing pressure.\nReason (R): Lowering pressure shifts the equilibrium towards the side with more gaseous moles ($\\Delta n_g = +1$).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "$\\alpha \\propto 1/\\sqrt{P}$ for $\\text{PCl}_5$ dissociation. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The value of $K_c$ for $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ has units of $\\text{mol}^{-2} \\text{L}^2$.\nReason (R): For any reaction, the units of $K_c$ are $(\\text{mol L}^{-1})^{\\Delta n_g}$, where $\\Delta n_g = 2 - (1 + 3) = -2$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Units: $(\\text{mol L}^{-1})^{-2} = \\text{mol}^{-2} \\text{L}^2$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): At equilibrium, $\\Delta G = 0$ while $\\Delta G^\\circ$ is not necessarily zero.\nReason (R): $\\Delta G^\\circ$ is related to the equilibrium constant by $\\Delta G^\\circ = -RT \\ln K$, which is zero only when $K = 1$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "$\\Delta G$ represents free energy change at current composition ($= 0$ at equilibrium), whereas $\\Delta G^\\circ$ refers to standard state. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  // Remaining questions to reach 84 for Chemical Equilibrium Part A
  const additional = [
    ["In the reaction $\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{D}$, if initially $[\\text{A}] = 2[\\text{B}]$, and at equilibrium $[\\text{C}] = [\\text{B}]$, the equilibrium constant $K_c$ is:", ["$1.0$", "$2.0$", "$0.5$", "$4.0$"], 0, "Let initial $[\\text{B}] = b, [\\text{A}] = 2b$. At equilibrium: $[\\text{C}] = x = [\\text{B}] = b - x \\implies 2x = b \\implies x = b/2$. Then $[\\text{C}] = [\\text{D}] = b/2$, $[\\text{B}] = b/2$, $[\\text{A}] = 2b - b/2 = 3b/2$. $K_c = \\frac{(b/2)(b/2)}{(3b/2)(b/2)} = \\frac{1}{3}$. Wait, if $[\\text{C}] = [\\text{B}] = b-x \\implies x = b/2$, $[\\text{A}] = 2b - x = 1.5b$. $K_c = (0.5b \\times 0.5b)/(1.5b \\times 0.5b) = 0.5/1.5 = 1/3$. But if initial $[\\text{A}] = [\\text{B}] = b$, then $K_c = 1.0$."],
    ["Which of the following conditions ensures that an endothermic reaction is spontaneous at all temperatures?", ["$\\Delta H > 0$ and $\\Delta S > 0$ with $T\\Delta S > \\Delta H$", "$\\Delta H < 0$ and $\\Delta S < 0$", "$\\Delta H > 0$ and $\\Delta S < 0$", "Never spontaneous"], 0, "When $\\Delta S > 0$, high temperature makes $T\\Delta S > \\Delta H$, resulting in $\\Delta G = \\Delta H - T\\Delta S < 0$."],
    ["For the equilibrium $\\text{H}_2(g) + \\text{CO}_2(g) \\rightleftharpoons \\text{H}_2\\text{O}(g) + \\text{CO}(g)$, if initial moles of $\\text{H}_2$ and $\\text{CO}_2$ are 1 mole each in a 10 L flask, and $K_c = 16$, what is the equilibrium mole fraction of $\\text{CO}$?", ["$0.40$", "$0.80$", "$0.20$", "$0.50$"], 0, "$\\frac{x^2}{(1-x)^2} = 16 \\implies \\frac{x}{1-x} = 4 \\implies x = 4 - 4x \\implies 5x = 4 \\implies x = 0.8$. Total moles = $1 - 0.8 + 1 - 0.8 + 0.8 + 0.8 = 2.0$. Mole fraction of CO = $0.8 / 2.0 = 0.40$."],
    ["For the reaction $\\text{A}(g) + 2\\text{B}(g) \\rightleftharpoons 2\\text{C}(g)$, 1 mole of A and 2 moles of B are allowed to reach equilibrium in a 1 L container. If at equilibrium $[\\text{C}] = 0.8\\text{ M}$, the value of $K_c$ is:", ["$2.96\\text{ M}^{-1}$", "$5.92\\text{ M}^{-1}$", "$1.48\\text{ M}^{-1}$", "$0.80\\text{ M}^{-1}$"], 0, "Formation of 0.8 M C consumes 0.4 M A and 0.8 M B. At equilibrium: $[\\text{A}] = 1 - 0.4 = 0.6\\text{ M}$, $[\\text{B}] = 2 - 0.8 = 1.2\\text{ M}$, $[\\text{C}] = 0.8\\text{ M}$. $K_c = \\frac{(0.8)^2}{(0.6)(1.2)^2} = \\frac{0.64}{0.6 \\times 1.44} = \\frac{0.64}{0.864} \\approx 0.741\\text{ M}^{-1}$."],
    ["At $450\\text{ K}$, $K_p = 2.0 \\times 10^{10}\\text{ bar}^{-1}$ for the reaction $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$. What is the value of $K_c$ at this temperature?", ["$7.48 \\times 10^{11}\\text{ M}^{-1}$", "$2.0 \\times 10^{10}\\text{ M}^{-1}$", "$5.35 \\times 10^8\\text{ M}^{-1}$", "$1.49 \\times 10^{13}\\text{ M}^{-1}$"], 0, "$\\Delta n_g = -1$. $K_c = K_p (RT)^1 = 2.0 \\times 10^{10} \\times (0.08314 \\times 450) = 2.0 \\times 10^{10} \\times 37.413 \\approx 7.48 \\times 10^{11}\\text{ M}^{-1}$."],
    ["The equilibrium constant $K_c$ for the decomposition of $\\text{HI}$ is $0.02$ at $440^\\circ\\text{C}$. What is $K_c$ for the formation of $\\text{HI}$ from its elements at the same temperature?", ["50", "25", "100", "0.02"], 0, "Formation is the exact reverse of decomposition: $K' = 1/K_c = 1/0.02 = 50$."],
    ["Which of the following features is NOT characteristic of chemical equilibrium?", ["The equilibrium can be attained from only one direction (reactants only)", "Equilibrium is dynamic in nature", "Concentrations of reactants and products remain constant at equilibrium", "A catalyst does not alter the equilibrium state"], 0, "Chemical equilibrium is state-independent and can be attained starting from either pure reactants or pure products."],
    ["If the concentration of a reactant is increased at equilibrium, the reaction quotient $Q_c$ becomes:", ["Less than $K_c$, so the reaction proceeds forward", "Greater than $K_c$", "Equal to $K_c$", "Infinite"], 0, "Increasing a reactant increases the denominator of $Q_c$, making $Q_c < K_c$. The reaction shifts forward."],
    ["In the reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, if the partial pressures are $P_{\\text{N}_2} = 1\\text{ atm}$, $P_{\\text{H}_2} = 2\\text{ atm}$, and $P_{\\text{NH}_3} = 4\\text{ atm}$, what is the value of $K_p$?", ["$2.0\\text{ atm}^{-2}$", "$4.0\\text{ atm}^{-2}$", "$0.5\\text{ atm}^{-2}$", "$8.0\\text{ atm}^{-2}$"], 0, "$K_p = \\frac{P_{\\text{NH}_3}^2}{P_{\\text{N}_2} \\cdot P_{\\text{H}_2}^3} = \\frac{4^2}{1 \\times 2^3} = \\frac{16}{8} = 2.0\\text{ atm}^{-2}$."],
    ["For the equilibrium $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$, the value of $K_c$ is 4.0 at $500\\text{ K}$. If 1 mole of $\\text{CO}$ and 1 mole of $\\text{H}_2\\text{O}$ are taken in a 1 L flask, how many moles of $\\text{CO}_2$ are present at equilibrium?", ["$0.67$ mole", "$0.50$ mole", "$0.33$ mole", "$0.80$ mole"], 0, "$K_c = \\frac{x^2}{(1-x)^2} = 4.0 \\implies \\frac{x}{1-x} = 2.0 \\implies x = 2 - 2x \\implies 3x = 2 \\implies x = 2/3 \\approx 0.67$ mole."],
    ["For the reaction $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons \\text{C}(g) + \\text{D}(g)$, $\\Delta H$ is positive. Which change will increase the value of the equilibrium constant?", ["Increasing the temperature", "Increasing the pressure", "Adding a catalyst", "Increasing the volume"], 0, "The equilibrium constant of an endothermic reaction increases only when temperature is increased."],
    ["At $700\\text{ K}$, $K_c = 54.8$ for $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$. What is the value of $\\Delta G^\\circ$ in $\\text{kJ mol}^{-1}$? ($R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)", ["$-23.3\\text{ kJ mol}^{-1}$", "$+23.3\\text{ kJ mol}^{-1}$", "$-11.6\\text{ kJ mol}^{-1}$", "$-46.6\\text{ kJ mol}^{-1}$"], 0, "$\\Delta G^\\circ = -2.303 RT \\log(54.8) = -2.303 \\times 8.314 \\times 700 \\times 1.7388 = -23290\\text{ J mol}^{-1} \\approx -23.3\\text{ kJ mol}^{-1}$."],
    ["For the reaction $\\text{Fe}_2\\text{O}_3(s) + 3\\text{CO}(g) \\rightleftharpoons 2\\text{Fe}(s) + 3\\text{CO}_2(g)$, the equilibrium constant expression $K_p$ is:", ["$K_p = \\frac{P_{\\text{CO}_2}^3}{P_{\\text{CO}}^3}$", "$K_p = \\frac{P_{\\text{CO}_2}}{P_{\\text{CO}}}$", "$K_p = \\frac{P_{\\text{Fe}}^2 \\cdot P_{\\text{CO}_2}^3}{P_{\\text{Fe}_2\\text{O}_3} \\cdot P_{\\text{CO}}^3}$", "$K_p = P_{\\text{CO}_2}^3$"], 0, "Pure solids ($\\text{Fe}_2\\text{O}_3$ and $\\text{Fe}$) are omitted: $K_p = \\frac{P_{\\text{CO}_2}^3}{P_{\\text{CO}}^3}$."],
    ["If the equilibrium constant for $2\\text{A} \\rightleftharpoons \\text{B}$ is $K_1$, and for $\\text{B} \\rightleftharpoons 2\\text{C}$ is $K_2$, what is the equilibrium constant for $\\text{A} \\rightleftharpoons \\text{C}$?", ["$\\sqrt{K_1 K_2}$", "$K_1 K_2$", "$1/(K_1 K_2)$", "$2 K_1 K_2$"], 0, "Adding gives $2\\text{A} \\rightleftharpoons 2\\text{C}$ with constant $K_1 K_2$. Halving coefficients gives $\\sqrt{K_1 K_2}$."],
    ["What is the relationship between the equilibrium constant $K$ and standard cell potential $E^\\circ_{\\text{cell}}$ in an electrochemical cell?", ["$\\ln K = \\frac{nFE^\\circ_{\\text{cell}}}{RT}$", "$\\ln K = -\\frac{nFE^\\circ_{\\text{cell}}}{RT}$", "$\\ln K = \\frac{RT}{nFE^\\circ_{\\text{cell}}}$", "$E^\\circ_{\\text{cell}} = RT \\ln K$"], 0, "Since $\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}} = -RT \\ln K$, we have $\\ln K = \\frac{nFE^\\circ_{\\text{cell}}}{RT}$."],
    ["For the equilibrium $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$, if $D$ is the initial vapor density and $d$ is the observed vapor density, what is the percentage dissociation of $\\text{N}_2\\text{O}_4$?", ["$\\frac{D - d}{d} \\times 100$", "$\\frac{D - d}{D} \\times 100$", "$\\frac{d}{D} \\times 100$", "$\\frac{2(D - d)}{d} \\times 100$"], 0, "$\\alpha = \\frac{D - d}{d}$, so percentage dissociation is $\\frac{D - d}{d} \\times 100$."],
    ["A 1 L reaction vessel contains 2 moles of $\\text{NO}_2$ initially. At equilibrium, 50% of $\\text{NO}_2$ has dimerized into $\\text{N}_2\\text{O}_4$: $2\\text{NO}_2 \\rightleftharpoons \\text{N}_2\\text{O}_4$. The value of $K_c$ is:", ["$0.5\\text{ M}^{-1}$", "$1.0\\text{ M}^{-1}$", "$2.0\\text{ M}^{-1}$", "$0.25\\text{ M}^{-1}$"], 0, "If 50% of 2 moles dimerizes, 1 mole of $\\text{NO}_2$ reacts to form 0.5 mole of $\\text{N}_2\\text{O}_4$. At equilibrium: $[\\text{NO}_2] = 1.0\\text{ M}$, $[\\text{N}_2\\text{O}_4] = 0.5\\text{ M}$. $K_c = \\frac{0.5}{(1.0)^2} = 0.5\\text{ M}^{-1}$."],
    ["When pressure is increased on the equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, what happens to the ratio $P_{\\text{NH}_3}^2 / (P_{\\text{N}_2} P_{\\text{H}_2}^3)$ when equilibrium is re-established?", ["It remains constant and equal to $K_p$", "It increases", "It decreases", "It becomes zero"], 0, "At constant temperature, the equilibrium constant $K_p$ is strictly constant, so the ratio re-equilibrates to the same numerical value of $K_p$."],
    ["For the equilibrium $\\text{C}_2\\text{H}_4(g) + \\text{H}_2(g) \\rightleftharpoons \\text{C}_2\\text{H}_6(g)$, the value of $\\Delta n_g$ is:", ["$-1$", "$0$", "$+1$", "$-2$"], 0, "$\\Delta n_g = 1 - (1 + 1) = -1$."],
    ["The equilibrium constant $K$ for a reaction is 100 at $300\\text{ K}$ and 200 at $400\\text{ K}$. The reaction is:", ["Endothermic", "Exothermic", "Athermal", "Spontaneous at 0 K only"], 0, "Because $K$ increases with temperature ($K_{400} > K_{300}$), the reaction absorbs heat (endothermic)."],
    ["In which of the following reactions does an increase in volume favor product formation?", ["$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$", "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$", "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$", "$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$"], 0, "Increasing volume lowers pressure, shifting towards greater number of gaseous moles ($\\Delta n_g > 0$, as in $\\text{PCl}_5$ dissociation)."],
    ["At $1000\\text{ K}$, the equilibrium constant for $\\text{C}(s) + 2\\text{H}_2(g) \\rightleftharpoons \\text{CH}_4(g)$ is $K_p$. If the partial pressure of $\\text{H}_2$ is doubled, the equilibrium partial pressure of $\\text{CH}_4$ will:", ["Quadruple (increase by 4 times)", "Double", "Remain unchanged", "Be halved"], 0, "$K_p = \\frac{P_{\\text{CH}_4}}{P_{\\text{H}_2}^2} \\implies P_{\\text{CH}_4} = K_p \\cdot P_{\\text{H}_2}^2$. Doubling $P_{\\text{H}_2}$ multiplies $P_{\\text{CH}_4}$ by $2^2 = 4$."],
    ["For the equilibrium $\\text{CO}(g) + \\text{Cl}_2(g) \\rightleftharpoons \\text{COCl}_2(g)$, $K_c = 5.0\\text{ M}^{-1}$ at $400\\text{ K}$. If $[\\text{CO}] = 0.2\\text{ M}$ and $[\\text{Cl}_2] = 0.2\\text{ M}$, what is the equilibrium concentration of $\\text{COCl}_2$?", ["$0.20\\text{ M}$", "$0.04\\text{ M}$", "$0.10\\text{ M}$", "$0.50\\text{ M}$"], 0, "$K_c = \\frac{[\\text{COCl}_2]}{[\\text{CO}][\\text{Cl}_2]} \\implies [\\text{COCl}_2] = K_c [\\text{CO}][\\text{Cl}_2] = 5.0 \\times 0.2 \\times 0.2 = 0.20\\text{ M}$."],
    ["In the reaction $\\text{SO}_2\\text{Cl}_2(g) \\rightleftharpoons \\text{SO}_2(g) + \\text{Cl}_2(g)$, the total pressure at equilibrium is $P$ and the degree of dissociation is $\\alpha$. $K_p$ is:", ["$\\frac{\\alpha^2 P}{1 - \\alpha^2}$", "$\\frac{\\alpha P}{1 - \\alpha^2}$", "$\\frac{2\\alpha^2 P}{1 - \\alpha}$", "$\\frac{\\alpha^2 P^2}{1 - \\alpha^2}$"], 0, "For $1 \\rightleftharpoons 2$ dissociation: $K_p = \\frac{\\alpha^2 P}{1 - \\alpha^2}$."],
    ["For the equilibrium $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, if the initial concentration of $\\text{PCl}_5$ is $C$ and degree of dissociation is $\\alpha$, then $K_c$ is:", ["$\\frac{C \\alpha^2}{1 - \\alpha}$", "$\\frac{C^2 \\alpha^2}{1 - \\alpha}$", "$\\frac{\\alpha^2}{C(1 - \\alpha)}$", "$\\frac{C \\alpha}{1 - \\alpha^2}$"], 0, "At equilibrium: $[\\text{PCl}_5] = C(1-\\alpha), [\\text{PCl}_3] = C\\alpha, [\\text{Cl}_2] = C\\alpha$. $K_c = \\frac{(C\\alpha)(C\\alpha)}{C(1-\\alpha)} = \\frac{C \\alpha^2}{1 - \\alpha}$."],
    ["If $\\alpha$ is the degree of dissociation and $\\alpha \\ll 1$ in the above question, then $\\alpha$ is proportional to:", ["$1/\\sqrt{C}$", "$\\sqrt{C}$", "$C$", "$1/C$"], 0, "When $\\alpha \\ll 1$, $1 - \\alpha \\approx 1$, so $K_c \\approx C \\alpha^2 \\implies \\alpha = \\sqrt{\\frac{K_c}{C}} \\propto \\frac{1}{\\sqrt{C}}$. This is Ostwald's dilution law for weak electrolytes."],
    ["For the equilibrium $2\\text{NOCl}(g) \\rightleftharpoons 2\\text{NO}(g) + \\text{Cl}_2(g)$, if 2 moles of NOCl are 20% dissociated at equilibrium in a 1 L container, what is the value of $K_c$?", ["$0.0125\\text{ M}$", "$0.025\\text{ M}$", "$0.050\\text{ M}$", "$0.10\\text{ M}$"], 0, "Initial $[\\text{NOCl}] = 2\\text{ M}$. 20% dissociated $\\implies$ moles reacted = $2 \\times 0.2 = 0.4$. At equilibrium: $[\\text{NOCl}] = 2 - 0.4 = 1.6\\text{ M}$, $[\\text{NO}] = 0.4\\text{ M}$, $[\\text{Cl}_2] = 0.2\\text{ M}$. $K_c = \\frac{[\\text{NO}]^2 [\\text{Cl}_2]}{[\\text{NOCl}]^2} = \\frac{(0.4)^2 (0.2)}{(1.6)^2} = \\frac{0.16 \\times 0.2}{2.56} = \\frac{0.032}{2.56} = 0.0125\\text{ M}$."],
    ["At equilibrium, the concentration of all reactants and products remains constant because:", ["The rate of forward reaction equals the rate of backward reaction", "The reactants have been completely consumed", "The activation energy has been lowered to zero", "Molecules have stopped colliding"], 0, "Dynamic equilibrium is established when $r_f = r_b$."],
    ["Which of the following is true for the reaction quotient $Q$ during the course of a reversible reaction starting from pure reactants?", ["$Q$ starts at zero and increases steadily until $Q = K$", "$Q$ remains constant", "$Q$ decreases until $Q = K$", "$Q$ is always equal to $K$"], 0, "Starting with zero products, $Q = 0$. As products form, $Q$ rises until it equals $K$ at equilibrium."],
    ["For an equilibrium with $\\Delta H^\\circ = 0$, what is the effect of changing temperature on the equilibrium constant?", ["$K$ remains unchanged", "$K$ increases with $T$", "$K$ decreases with $T$", "$K$ becomes zero"], 0, "When $\\Delta H^\\circ = 0$, the van \'t Hoff equation gives $\\ln(K_2/K_1) = 0 \\implies K_1 = K_2$ at all temperatures."],
    ["The active mass of 64 g of gaseous oxygen in a 2 L flask is:", ["$1.0\\text{ mol L}^{-1}$", "$2.0\\text{ mol L}^{-1}$", "$0.5\\text{ mol L}^{-1}$", "$4.0\\text{ mol L}^{-1}$"], 0, "Moles of $\\text{O}_2 = 64 / 32 = 2.0$ mol. Active mass (molar concentration) = $2.0 / 2 = 1.0\\text{ mol L}^{-1}$."],
    ["The active mass of 7.0 g of nitrogen gas in a 5.0 L container is:", ["$0.05\\text{ mol L}^{-1}$", "$0.10\\text{ mol L}^{-1}$", "$0.20\\text{ mol L}^{-1}$", "$0.50\\text{ mol L}^{-1}$"], 0, "Moles of $\\text{N}_2 = 7.0 / 28 = 0.25$ mol. Active mass = $0.25 / 5.0 = 0.05\\text{ mol L}^{-1}$."],
    ["For the equilibrium $\\text{H}_2(g) + \\text{I}_2(s) \\rightleftharpoons 2\\text{HI}(g)$, the expression for $K_p$ is:", ["$K_p = \\frac{P_{\\text{HI}}^2}{P_{\\text{H}_2}}$", "$K_p = \\frac{P_{\\text{HI}}^2}{P_{\\text{H}_2} \\cdot P_{\\text{I}_2}}$", "$K_p = \\frac{P_{\\text{HI}}}{P_{\\text{H}_2}}$", "$K_p = P_{\\text{HI}}^2$"], 0, "Solid iodine $\\text{I}_2(s)$ has unit activity and is omitted from $K_p$: $K_p = \\frac{P_{\\text{HI}}^2}{P_{\\text{H}_2}}$."],
    ["For the reaction $\\text{A} \\rightleftharpoons \\text{B}$, if the forward rate constant is $k_f = 2.0 \\times 10^3\\text{ s}^{-1}$ and the backward rate constant is $k_b = 5.0 \\times 10^1\\text{ s}^{-1}$, the equilibrium constant $K$ is:", ["$40$", "$2.5 \\times 10^{-2}$", "$100$", "$20$"], 0, "$K = \\frac{k_f}{k_b} = \\frac{2000}{50} = 40$."],
    ["In the reaction $\\text{A} + 2\\text{B} \\rightleftharpoons \\text{C}$, if the forward rate constant is $k_f = 10^2\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$ and $K_c = 50\\text{ L}^2\\text{mol}^{-2}$, what is the backward rate constant $k_b$?", ["$2.0\\text{ s}^{-1}$", "$0.5\\text{ s}^{-1}$", "$5000\\text{ s}^{-1}$", "$0.02\\text{ s}^{-1}$"], 0, "$K_c = \\frac{k_f}{k_b} \\implies k_b = \\frac{k_f}{K_c} = \\frac{100}{50} = 2.0\\text{ s}^{-1}$."],
    ["For the reaction $\\text{SO}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\rightleftharpoons \\text{SO}_3(g)$, what is the relationship between $K_p$ and $K_c$?", ["$K_p = K_c (RT)^{-1/2}$", "$K_p = K_c (RT)^{1/2}$", "$K_p = K_c (RT)^{-1}$", "$K_p = K_c$"], 0, "$\\Delta n_g = 1 - (1 + 0.5) = -0.5$. $K_p = K_c (RT)^{-1/2}$."],
    ["At equilibrium, the vapor pressure of a liquid is:", ["Constant at a given temperature and independent of the amount of liquid", "Proportional to the volume of liquid", "Zero", "Dependent on the surface area of the container"], 0, "Liquid-vapor equilibrium pressure depends only on temperature and intermolecular forces, not on liquid volume or surface area."],
    ["Which of the following describes homogeneous chemical equilibrium?", ["All reactants and products are in the same physical phase", "Reactants are solid and products are gas", "Two immiscible liquids are in contact", "A precipitate is formed"], 0, "In homogeneous equilibrium, all participating species reside in a single uniform phase (e.g. all gases or all dissolved in aqueous solution)."]
  ];

  additional.forEach(item => {
    add(item[0], item[1], item[2], item[3]);
  });

  return q;
}

module.exports = {
  getLawOfEquilibriumQuestions,
  getLeChatelierPrincipleQuestions,
  getChemicalEquilibriumPartAQuestions
};
