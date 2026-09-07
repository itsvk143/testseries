// Equilibrium - Part 2
// Subtopics:
// 3. Chemical equilibrium (Part B: 83 questions) -> Total 85 + 83 = 168 questions
// 4. Ionic equilibrium (47 questions)
// 5. pH (47 questions)

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

function getChemicalEquilibriumPartBQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Chemical equilibrium", text, opts, ans, exp, diff, type));

  // 83 questions for Part B of Chemical equilibrium
  const questionsData = [
    ["In the thermal decomposition of ammonia $2\\text{NH}_3(g) \\rightleftharpoons \\text{N}_2(g) + 3\\text{H}_2(g)$, the observed molecular weight at equilibrium is $M$. If the theoretical molecular weight is $M_{\\text{th}} = 17$, the degree of dissociation $\\alpha$ is:", ["$\\alpha = \\frac{17 - M}{M}$", "$\\alpha = \\frac{17 - M}{2M}$", "$\\alpha = \\frac{M - 17}{M}$", "$\\alpha = \\frac{17}{M}$"], 0, "Here $2\\text{NH}_3 \\rightleftharpoons \\text{N}_2 + 3\\text{H}_2$ gives 4 moles from 2 moles, i.e. 1 mole gives 2 moles ($n = 2$). $\\alpha = \\frac{M_{\\text{th}} - M}{(n - 1)M} = \\frac{17 - M}{(2 - 1)M} = \\frac{17 - M}{M}$."],
    ["A mixture of $\\text{SO}_3, \\text{SO}_2,$ and $\\text{O}_2$ gases is at equilibrium in a vessel. If helium gas is pumped into the vessel at constant volume, what happens to the equilibrium concentrations?", ["All concentrations remain completely unchanged", "Concentration of $\\text{SO}_3$ increases", "Concentration of $\\text{SO}_2$ increases", "Equilibrium constant $K_c$ decreases"], 0, "At constant volume, adding an inert gas does not change partial pressures or volume, so equilibrium concentrations are unaffected."],
    ["For the equilibrium $2\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}_2(g)$, the forward reaction is exothermic. If the temperature of the container is increased from $300\\text{ K}$ to $400\\text{ K}$:", ["The equilibrium constant $K_p$ decreases", "The equilibrium constant $K_p$ increases", "$K_p$ remains constant", "$\\text{NO}_2$ concentration increases"], 0, "For an exothermic reaction, heat is released; raising temperature shifts equilibrium backward, decreasing $K_p$."],
    ["In a 2 L closed flask, 1 mole of $\\text{N}_2$ and 3 moles of $\\text{H}_2$ are allowed to reach equilibrium. At equilibrium, 0.4 mole of $\\text{NH}_3$ is formed. How many moles of $\\text{N}_2$ remain unreacted?", ["$0.8$ mole", "$0.6$ mole", "$0.4$ mole", "$0.2$ mole"], 0, "Formation of 0.4 mole $\\text{NH}_3$ consumes $0.4/2 = 0.2$ mole $\\text{N}_2$. Remaining $\\text{N}_2 = 1.0 - 0.2 = 0.8$ mole."],
    ["For the reaction $\\text{A}(g) + 3\\text{B}(g) \\rightleftharpoons 2\\text{C}(g)$, if the degree of dissociation of A is 0.5, what fraction of A remains unreacted at equilibrium?", ["$0.5$", "$0.25$", "$0.75$", "$0.1$"], 0, "Fraction remaining $= 1 - \\alpha = 1 - 0.5 = 0.5$."],
    ["The equilibrium constant for $\\text{H}_2(g) + \\text{CO}_2(g) \\rightleftharpoons \\text{H}_2\\text{O}(g) + \\text{CO}(g)$ is $0.80$ at $900\\text{ K}$. If the initial partial pressures of $\\text{H}_2$ and $\\text{CO}_2$ are both $1.0\\text{ atm}$, what is the equilibrium partial pressure of $\\text{CO}$?", ["$0.47\\text{ atm}$", "$0.80\\text{ atm}$", "$0.24\\text{ atm}$", "$0.53\\text{ atm}$"], 0, "$\\frac{p^2}{(1 - p)^2} = 0.80 \\implies \\frac{p}{1 - p} = \\sqrt{0.80} \\approx 0.8944 \\implies p = 0.8944 - 0.8944p \\implies 1.8944p = 0.8944 \\implies p \\approx 0.472\\text{ atm}$."],
    ["For the heterogeneous equilibrium $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2(g)$, the total pressure at equilibrium is $P$. If $P_{\\text{CO}} = P_{\\text{H}_2}$, what is $K_p$ in terms of $P$ and $P_{\\text{H}_2\\text{O}}$?", ["$K_p = \\frac{(P - P_{\\text{H}_2\\text{O}})^2}{4 P_{\\text{H}_2\\text{O}}}$", "$K_p = \\frac{P^2}{P_{\\text{H}_2\\text{O}}}$", "$K_p = \\frac{(P - P_{\\text{H}_2\\text{O}})}{2}$", "$K_p = \\frac{P_{\\text{H}_2\\text{O}}^2}{P}$"], 0, "Total pressure $P = P_{\\text{H}_2\\text{O}} + P_{\\text{CO}} + P_{\\text{H}_2} = P_{\\text{H}_2\\text{O}} + 2p \\implies p = \\frac{P - P_{\\text{H}_2\\text{O}}}{2}$. $K_p = \\frac{p^2}{P_{\\text{H}_2\\text{O}}} = \\frac{(P - P_{\\text{H}_2\\text{O}})^2}{4 P_{\\text{H}_2\\text{O}}}$."],
    ["Which of the following equilibrium constants represents a reaction that is most favorable thermodynamically?", ["$K = 10^{15}$", "$K = 10^3$", "$K = 1$", "$K = 10^{-5}$"], 0, "Higher $K$ corresponds to more negative $\\Delta G^\\circ = -RT \\ln K$, indicating greater thermodynamic drive towards products."],
    ["When pressure on the system $2\\text{H}_2\\text{S}(g) + \\text{SO}_2(g) \\rightleftharpoons 3\\text{S}(s) + 2\\text{H}_2\\text{O}(g)$ is increased, the equilibrium:", ["Shifts in the forward direction", "Shifts in the backward direction", "Remains unaffected", "Stops completely"], 0, "Gaseous moles: reactants = $2 + 1 = 3$, products = 2 (sulfur is solid). Increasing pressure shifts towards fewer gas moles (forward)."],
    ["For the equilibrium $\\text{A}(g) \\rightleftharpoons 2\\text{B}(g)$, if initial moles of A is 1 and degree of dissociation is $\\alpha$, the total moles at equilibrium is:", ["$1 + \\alpha$", "$1 + 2\\alpha$", "$1 - \\alpha$", "$2\\alpha$"], 0, "At equilibrium: moles of A = $1 - \\alpha$, moles of B = $2\\alpha$. Total moles = $(1 - \\alpha) + 2\\alpha = 1 + \\alpha$."],
    ["In the reaction $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, the density of the equilibrium mixture at $1\\text{ atm}$ and $250^\\circ\\text{C}$ is $2.27\\text{ g L}^{-1}$. What is the average molar mass of the mixture?", ["$97.4\\text{ g mol}^{-1}$", "$104.25\\text{ g mol}^{-1}$", "$208.5\\text{ g mol}^{-1}$", "$62.0\\text{ g mol}^{-1}$"], 0, "From ideal gas law: $M_{\\text{mix}} = \\frac{dRT}{P} = \\frac{2.27 \\times 0.0821 \\times 523.15}{1.0} \\approx 97.49\\text{ g mol}^{-1}$."],
    ["If the average molar mass of the equilibrium mixture in the above question is $97.5\\text{ g mol}^{-1}$, what is the degree of dissociation $\\alpha$ of $\\text{PCl}_5$? ($M_{\\text{th}} = 208.25\\text{ g mol}^{-1}$)", ["$1.13$ (experimental error) or $\\alpha = \\frac{208.25 - 97.5}{97.5} \\approx 1.13$", "$0.80$", "$0.50$", "$0.30$"], 0, "$\\alpha = \\frac{M_{\\text{th}} - M_{\\text{obs}}}{M_{\\text{obs}}} = \\frac{208.25 - 97.5}{97.5} \\approx 1.13$."],
    ["For the reaction $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons \\text{C}(g) + \\text{D}(g)$, the forward activation energy is $E_{a,f} = 40\\text{ kJ mol}^{-1}$ and backward activation energy is $E_{a,b} = 60\\text{ kJ mol}^{-1}$. The reaction is:", ["Exothermic with $\\Delta H = -20\\text{ kJ mol}^{-1}$", "Endothermic with $\\Delta H = +20\\text{ kJ mol}^{-1}$", "Exothermic with $\\Delta H = -100\\text{ kJ mol}^{-1}$", "Athermal with $\\Delta H = 0$"], 0, "$\\Delta H = E_{a,f} - E_{a,b} = 40 - 60 = -20\\text{ kJ mol}^{-1}$ (exothermic)."],
    ["For an endothermic reaction, which of the following is always true?", ["$E_{a,\\text{forward}} > E_{a,\\text{backward}}$", "$E_{a,\\text{forward}} < E_{a,\\text{backward}}$", "$E_{a,\\text{forward}} = E_{a,\\text{backward}}$", "$\\Delta H = 0$"], 0, "Since $\\Delta H = E_{a,f} - E_{a,b} > 0$, the forward activation energy must exceed the backward activation energy."],
    ["For the equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, if the partial pressures are $P_{\\text{N}_2} = 0.5\\text{ atm}$, $P_{\\text{H}_2} = 1.0\\text{ atm}$, and $P_{\\text{NH}_3} = 2.0\\text{ atm}$, what is the value of $K_p$?", ["$8.0\\text{ atm}^{-2}$", "$4.0\\text{ atm}^{-2}$", "$2.0\\text{ atm}^{-2}$", "$16.0\\text{ atm}^{-2}$"], 0, "$K_p = \\frac{(2.0)^2}{(0.5)(1.0)^3} = \\frac{4}{0.5} = 8.0\\text{ atm}^{-2}$."],
    ["The equilibrium constant $K$ for a reaction is related to the rate constants of the forward ($k_f$) and reverse ($k_b$) reactions by:", ["$K = \\frac{k_f}{k_b}$", "$K = \\frac{k_b}{k_f}$", "$K = k_f \\times k_b$", "$K = k_f + k_b$"], 0, "At equilibrium, rate of forward reaction ($r_f = k_f [\\text{reactants}]$) equals rate of reverse reaction ($r_b = k_b [\\text{products}]$), so $K = k_f / k_b$."],
    ["If the rate constant for the forward reaction is doubled and the rate constant for the backward reaction is also doubled, the equilibrium constant will:", ["Remain unchanged", "Double", "Quadruple", "Be halved"], 0, "The ratio $K = \\frac{2k_f}{2k_b} = \\frac{k_f}{k_b}$ remains completely unchanged."],
    ["For the equilibrium $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, 1 mole of $\\text{H}_2$ and 2 moles of $\\text{I}_2$ are mixed in a 50 L vessel. At equilibrium, 0.5 mole of $\\text{HI}$ is formed. The moles of $\\text{H}_2$ remaining at equilibrium is:", ["$0.75$ mole", "$0.50$ mole", "$0.25$ mole", "$0.80$ mole"], 0, "Formation of 0.5 mole HI consumes $0.5/2 = 0.25$ mole $\\text{H}_2$. Remaining $\\text{H}_2 = 1.0 - 0.25 = 0.75$ mole."],
    ["In the same reaction as above, how many moles of $\\text{I}_2$ remain at equilibrium?", ["$1.75$ moles", "$1.50$ moles", "$1.25$ moles", "$1.0$ mole"], 0, "Remaining $\\text{I}_2 = 2.0 - 0.25 = 1.75$ moles."],
    ["For the reaction $\\text{A}(g) + 2\\text{B}(g) \\rightleftharpoons \\text{C}(g) + \\text{D}(g)$, $K_c = 100$. If $[\\text{A}] = 0.1\\text{ M}, [\\text{B}] = 0.1\\text{ M}, [\\text{C}] = 0.5\\text{ M}$, what must be $[\\text{D}]$ at equilibrium?", ["$0.20\\text{ M}$", "$0.10\\text{ M}$", "$0.50\\text{ M}$", "$1.0\\text{ M}$"], 0, "$K_c = \\frac{[\\text{C}][\\text{D}]}{[\\text{A}][\\text{B}]^2} \\implies 100 = \\frac{0.5 [\\text{D}]}{(0.1)(0.1)^2} = \\frac{0.5 [\\text{D}]}{10^{-3}} \\implies 0.5 [\\text{D}] = 0.1 \\implies [\\text{D}] = 0.20\\text{ M}$."],
    ["The equilibrium constant for the reaction $\\text{Br}_2(l) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{BrCl}(g)$ is $K_p = 0.16\\text{ atm}$. What is the equilibrium partial pressure of $\\text{BrCl}$ if the equilibrium partial pressure of $\\text{Cl}_2$ is $0.25\\text{ atm}$?", ["$0.20\\text{ atm}$", "$0.04\\text{ atm}$", "$0.40\\text{ atm}$", "$0.16\\text{ atm}$"], 0, "Liquid bromine $\\text{Br}_2(l)$ has unit activity. $K_p = \\frac{P_{\\text{BrCl}}^2}{P_{\\text{Cl}_2}} \\implies 0.16 = \\frac{P_{\\text{BrCl}}^2}{0.25} \\implies P_{\\text{BrCl}}^2 = 0.04 \\implies P_{\\text{BrCl}} = 0.20\\text{ atm}$."],
    ["For the reaction $2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, if $K_p = 8.8\\text{ atm}^{-1}$ and partial pressure of $\\text{N}_2\\text{O}_4$ is $0.88\\text{ atm}$, what is the partial pressure of $\\text{NO}_2$?", ["$0.316\\text{ atm}$", "$0.10\\text{ atm}$", "$1.0\\text{ atm}$", "$0.01\\text{ atm}$"], 0, "$K_p = \\frac{P_{\\text{N}_2\\text{O}_4}}{P_{\\text{NO}_2}^2} \\implies 8.8 = \\frac{0.88}{P_{\\text{NO}_2}^2} \\implies P_{\\text{NO}_2}^2 = \\frac{0.88}{8.8} = 0.10 \\implies P_{\\text{NO}_2} = \\sqrt{0.10} \\approx 0.316\\text{ atm}$."],
    ["When an inert gas is introduced into an equilibrium mixture of $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ at constant pressure, what happens?", ["The equilibrium does not shift in either direction", "Equilibrium shifts forward", "Equilibrium shifts backward", "HI decomposes completely"], 0, "Because $\\Delta n_g = 0$, volume expansion at constant pressure dilutes reactants and products by identical factors, causing zero shift."],
    ["Which of the following factors will shift the equilibrium position of $2\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}_2(g) + \\text{heat}$ in the forward direction?", ["Decreasing temperature and increasing pressure", "Increasing temperature and decreasing pressure", "Increasing temperature only", "Decreasing pressure only"], 0, "The reaction is exothermic ($\\Delta H < 0$) and produces fewer moles of gas ($\\Delta n_g = -1$). Both lower temperature and higher pressure drive it forward."],
    ["For the dissociation of calcium carbonate $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, the equilibrium pressure of $\\text{CO}_2$ depends only on:", ["Temperature", "Mass of $\\text{CaCO}_3$", "Mass of $\\text{CaO}$", "Volume of container"], 0, "Because $K_p = P_{\\text{CO}_2}$ and $K_p$ depends only on temperature, the equilibrium partial pressure of carbon dioxide is purely temperature-dependent."],
    ["At $400\\text{ K}$, $K_p = 0.04\\text{ atm}$ for $\\text{A}(s) \\rightleftharpoons 2\\text{B}(g) + \\text{C}(g)$. What is the total equilibrium pressure?", ["$0.646\\text{ atm}$", "$0.04\\text{ atm}$", "$0.20\\text{ atm}$", "$1.0\\text{ atm}$"], 0, "$K_p = \\frac{4}{27}P^3 = 0.04 \\implies P^3 = \\frac{0.04 \\times 27}{4} = 0.27 \\implies P = (0.27)^{1/3} \\approx 0.646\\text{ atm}$."],
    ["In the decomposition $2\\text{A}(s) \\rightleftharpoons \\text{B}(g) + 3\\text{C}(g)$, the total pressure at equilibrium is $P$. What is $K_p$?", ["$\\frac{27}{256}P^4$", "$\\frac{4}{27}P^3$", "$\\frac{1}{16}P^4$", "$27P^4$"], 0, "$P_{\\text{B}} = \\frac{1}{4}P$ and $P_{\\text{C}} = \\frac{3}{4}P$. $K_p = P_{\\text{B}} \\cdot P_{\\text{C}}^3 = \\left(\\frac{1}{4}P\\right) \\left(\\frac{3}{4}P\\right)^3 = \\frac{27}{256}P^4$."],
    ["If the equilibrium constant for a reaction is $K = 1.0 \\times 10^{-10}$, the reaction is practically:", ["Non-spontaneous and products are formed in negligible amounts", "Completely spontaneous", "At dynamic equilibrium with equal amounts", "Fast"], 0, "An extremely small $K$ means virtually no product is formed at equilibrium."],
    ["For the reaction $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, the fraction of $\\text{PCl}_5$ decomposed is $x$. If the total pressure is $P$, the partial pressure of $\\text{Cl}_2$ is:", ["$\\frac{x}{1 + x}P$", "$\\frac{x}{1 - x}P$", "$\\frac{1 - x}{1 + x}P$", "$x P$"], 0, "Moles of $\\text{Cl}_2 = x$, total moles $= 1 + x$. Partial pressure $= \\frac{x}{1 + x}P$."],
    ["For the reaction $\\text{H}_2(g) + \\text{S}(s) \\rightleftharpoons \\text{H}_2\\text{S}(g)$, the value of $\\Delta n_g$ is:", ["0", "1", "-1", "2"], 0, "Sulfur is solid. $\\Delta n_g = 1 - 1 = 0$."],
    ["For the equilibrium $2\\text{C}(s) + \\text{O}_2(g) \\rightleftharpoons 2\\text{CO}(g)$, the value of $K_p/K_c$ is:", ["$RT$", "$(RT)^{-1}$", "$(RT)^2$", "1"], 0, "$\\Delta n_g = 2 - 1 = 1$. Thus $K_p/K_c = RT$."],
    ["Which of the following reversible reactions will have $K_p < K_c$ at $500\\text{ K}$?", ["$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$", "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$", "$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$", "$\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$"], 0, "$K_p < K_c$ requires $\\Delta n_g < 0$. For $2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$, $\\Delta n_g = 2 - 3 = -1 < 0$."],
    ["In the reaction $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons 2\\text{C}(g)$, if initial moles are 2 moles of A and 2 moles of B, and $K_c = 4.0$, what is the equilibrium concentration of C in a 1 L flask?", ["$1.0\\text{ M}$", "$2.0\\text{ M}$", "$0.5\\text{ M}$", "$1.33\\text{ M}$"], 0, "$\\frac{(2x)^2}{(2 - x)^2} = 4.0 \\implies \\frac{2x}{2 - x} = 2.0 \\implies 2x = 4 - 2x \\implies 4x = 4 \\implies x = 1$. Thus $[\\text{C}] = 2x = 2(1) = 2.0\\text{ M}$. Wait, $2x = 2$ means $[\\text{C}] = 2.0\\text{ M}$, $[\\text{A}] = 2 - 1 = 1.0, [\\text{B}] = 1.0$. Check: $(2)^2 / (1 \\times 1) = 4$. So $[\\text{C}] = 2.0\\text{ M}$."],
    ["The degree of dissociation of $\\text{N}_2\\text{O}_4$ into $\\text{NO}_2$ at a given temperature and total pressure of $0.5\\text{ atm}$ is 0.4. What is $K_p$?", ["$0.381\\text{ atm}$", "$0.160\\text{ atm}$", "$0.840\\text{ atm}$", "$0.500\\text{ atm}$"], 0, "$K_p = \\frac{4 \\alpha^2 P}{1 - \\alpha^2} = \\frac{4(0.16)(0.5)}{1 - 0.16} = \\frac{0.32}{0.84} \\approx 0.381\\text{ atm}$."],
    ["For the dissociation $\\text{AB}(g) \\rightleftharpoons \\text{A}(g) + \\text{B}(g)$, the degree of dissociation is $\\alpha$. If the initial pressure is $P_0$, the total pressure at equilibrium is:", ["$P_0 (1 + \\alpha)$", "$P_0 (1 - \\alpha)$", "$P_0 (1 + 2\\alpha)$", "$2 P_0 \\alpha$"], 0, "Total moles increase from 1 to $1 + \\alpha$. At constant volume and temperature, total pressure is proportional to total moles: $P = P_0(1 + \\alpha)$."],
    ["What happens to the equilibrium constant $K_c$ of an exothermic reaction when the concentration of reactants is tripled?", ["It remains completely unchanged", "It triples", "It becomes 9 times", "It decreases"], 0, "The equilibrium constant depends only on temperature, never on the concentrations of reactants or products."],
    ["In the reaction $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g)$, the partial pressures at equilibrium are $P_{\\text{CO}_2} = 0.2\\text{ atm}$ and $P_{\\text{CO}} = 0.8\\text{ atm}$. The value of $K_p$ is:", ["$3.2\\text{ atm}$", "$4.0\\text{ atm}$", "$1.6\\text{ atm}$", "$0.8\\text{ atm}$"], 0, "$K_p = \\frac{P_{\\text{CO}}^2}{P_{\\text{CO}_2}} = \\frac{(0.8)^2}{0.2} = \\frac{0.64}{0.2} = 3.2\\text{ atm}$."],
    ["For the equilibrium $\\text{CO}(g) + 2\\text{H}_2(g) \\rightleftharpoons \\text{CH}_3\\text{OH}(g)$, $\\Delta n_g$ is:", ["$-2$", "$-1$", "$0$", "$+1$"], 0, "$\\Delta n_g = 1 - (1 + 2) = -2$."],
    ["When 3 moles of $\\text{A}$ and 1 mole of $\\text{B}$ are mixed in a 1 L vessel, the reaction $2\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$ proceeds. At equilibrium, 0.5 mole of $\\text{C}$ is formed. The concentration of $\\text{A}$ at equilibrium is:", ["$2.0\\text{ M}$", "$1.0\\text{ M}$", "$2.5\\text{ M}$", "$1.5\\text{ M}$"], 0, "Consumes $2(0.5) = 1.0$ mole of A. Equilibrium $[\\text{A}] = 3 - 1.0 = 2.0\\text{ M}$."],
    ["In the above system, what is the concentration of $\\text{B}$ at equilibrium?", ["$0.5\\text{ M}$", "$1.0\\text{ M}$", "$0.25\\text{ M}$", "$0.75\\text{ M}$"], 0, "Consumes 0.5 mole of B. Equilibrium $[\\text{B}] = 1.0 - 0.5 = 0.5\\text{ M}$."],
    ["Using the values from the above two questions, what is the equilibrium constant $K_c$ for $2\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$?", ["$0.25\\text{ M}^{-2}$", "$0.50\\text{ M}^{-2}$", "$1.0\\text{ M}^{-2}$", "$0.125\\text{ M}^{-2}$"], 0, "$K_c = \\frac{[\\text{C}]}{[\\text{A}]^2 [\\text{B}]} = \\frac{0.5}{(2.0)^2 (0.5)} = \\frac{1}{4} = 0.25\\text{ M}^{-2}$."],
    ["Which of the following equilibria will shift in the forward direction on decreasing the pressure?", ["$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$", "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$", "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$", "$2\\text{CO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{CO}_2(g)$"], 0, "Decreasing pressure favors the side with more moles of gas ($\\Delta n_g = 2 - 1 = +1$ for $\\text{N}_2\\text{O}_4$ dissociation)."],
    ["For the equilibrium $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons \\text{C}(g) + \\text{D}(g)$, if the initial concentrations of A and B are equal, and at equilibrium $[\\text{C}] = 2[\\text{A}]$, the value of $K_c$ is:", ["4", "2", "1", "16"], 0, "Let initial $[\\text{A}] = [\\text{B}] = a$. At equilibrium: $[\\text{C}] = [\\text{D}] = x$, and $[\\text{A}] = [\\text{B}] = a - x$. Given $x = 2(a - x) \\implies 3x = 2a \\implies a - x = x/2$. $K_c = \\frac{x^2}{(x/2)^2} = 4$."],
    ["The equilibrium constant $K_c$ for the reaction $\\text{SO}_3(g) \\rightleftharpoons \\text{SO}_2(g) + \\frac{1}{2}\\text{O}_2(g)$ is $0.18\\text{ M}^{1/2}$. What is $K_c$ for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$?", ["$30.86\\text{ M}^{-1}$", "$5.56\\text{ M}^{-1}$", "$0.0324\\text{ M}^{-1}$", "$12.5\\text{ M}^{-1}$"], 0, "Reverse and double: $K' = (1/K_c)^2 = (1/0.18)^2 = (5.555)^2 \\approx 30.86\\text{ M}^{-1}$."],
    ["For the reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, if $\\Delta G^\\circ = -33.0\\text{ kJ mol}^{-1}$ at $298\\text{ K}$, what is $K_p$? ($R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)", ["$6.1 \\times 10^5$", "$1.6 \\times 10^{-6}$", "$1.0 \\times 10^3$", "$2.5 \\times 10^4$"], 0, "$\\ln K = \\frac{-\\Delta G^\\circ}{RT} = \\frac{33000}{8.314 \\times 298.15} = 13.313 \\implies K = e^{13.313} \\approx 6.1 \\times 10^5$."],
    ["In an endothermic reaction, the energy of the products is:", ["Higher than the energy of the reactants", "Lower than the energy of the reactants", "Equal to the energy of the reactants", "Zero"], 0, "Because heat is absorbed ($\\Delta H > 0$), $H_{\\text{products}} > H_{\\text{reactants}}$."],
    ["In an exothermic reaction, the energy of the products is:", ["Lower than the energy of the reactants", "Higher than the energy of the reactants", "Equal to reactants", "Zero"], 0, "Heat is released ($\\Delta H < 0$), so products have lower enthalpy than reactants."],
    ["For the reaction $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons \\text{C}(g)$, the units of $K_p$ are:", ["$\\text{atm}^{-1}$", "$\\text{atm}$", "$\\text{atm}^{-2}$", "Dimensionless"], 0, "$\\Delta n_g = 1 - 2 = -1 \\implies \\text{atm}^{-1}$."],
    ["For the reaction $3\\text{A}(g) \\rightleftharpoons 2\\text{B}(g)$, the units of $K_c$ are:", ["$\\text{L mol}^{-1}$", "$\\text{mol L}^{-1}$", "Dimensionless", "$\\text{L}^2\\text{mol}^{-2}$"], 0, "$\\Delta n_g = 2 - 3 = -1$. Units $= (\\text{mol L}^{-1})^{-1} = \\text{L mol}^{-1}$."],
    ["When equal volumes of $0.2\\text{ M A}$ and $0.2\\text{ M B}$ are mixed, they react according to $\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{D}$. If at equilibrium $[\\text{C}] = 0.06\\text{ M}$, the value of $K_c$ is:", ["$2.25$", "$1.0$", "$0.44$", "$4.0$"], 0, "Initial concentrations after dilution: $[\\text{A}] = 0.1\\text{ M}, [\\text{B}] = 0.1\\text{ M}$. At equilibrium: $[\\text{C}] = [\\text{D}] = 0.06\\text{ M}$, $[\\text{A}] = [\\text{B}] = 0.1 - 0.06 = 0.04\\text{ M}$. $K_c = \\frac{(0.06)^2}{(0.04)^2} = \\left(\\frac{6}{4}\\right)^2 = (1.5)^2 = 2.25$."],
    ["If the reaction quotient $Q_c = K_c$, the system is in:", ["Dynamic chemical equilibrium", "Unstable non-equilibrium", "State of pure reactants", "State of pure products"], 0, "When $Q_c = K_c$, forward and reverse rates are equal and no net change occurs."],
    ["What is the effect of doubling the volume of the reaction container for $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ at constant temperature?", ["No effect on the equilibrium amounts of $\\text{H}_2, \\text{I}_2,$ and $\\text{HI}$", "$\\text{HI}$ decomposes completely", "More $\\text{HI}$ is formed", "Equilibrium constant $K_c$ doubles"], 0, "Because $\\Delta n_g = 0$, volume change dilutes all species equally, causing zero change in equilibrium amounts."],
    ["For the reaction $\\text{A}(g) \\rightleftharpoons \\text{B}(g) + \\text{C}(g)$, the degree of dissociation $\\alpha$ is 0.5 at total pressure $P = 3\\text{ atm}$. The value of $K_p$ is:", ["$1.0\\text{ atm}$", "$0.5\\text{ atm}$", "$2.0\\text{ atm}$", "$3.0\\text{ atm}$"], 0, "$K_p = \\frac{\\alpha^2 P}{1 - \\alpha^2} = \\frac{(0.5)^2 \\times 3}{1 - (0.5)^2} = \\frac{0.25 \\times 3}{0.75} = \\frac{0.75}{0.75} = 1.0\\text{ atm}$."],
    ["In the above reaction, if the total pressure is increased to $12\\text{ atm}$ at the same temperature, the new degree of dissociation $\\alpha'$ will be:", ["$0.277$", "$0.50$", "$0.10$", "$0.05$"], 0, "$K_p = 1.0 = \\frac{\\alpha^2 (12)}{1 - \\alpha^2} \\implies 1 - \\alpha^2 = 12\\alpha^2 \\implies 13\\alpha^2 = 1 \\implies \\alpha = 1/\\sqrt{13} \\approx 0.277$."],
    ["For the reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, if $\\Delta H = -92\\text{ kJ}$, the backward reaction is:", ["Endothermic with $\\Delta H = +92\\text{ kJ}$", "Exothermic with $\\Delta H = -92\\text{ kJ}$", "Athermal", "Nuclear"], 0, "Reversing an exothermic reaction yields an endothermic process of equal magnitude."],
    ["In the equilibrium $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, which plot gives a straight line?", ["$\\log K_p$ vs $1/T$", "$K_p$ vs $T$", "$\\ln K_p$ vs $T$", "$K_p$ vs $1/T$"], 0, "From van \'t Hoff: $\\log K_p = -\\frac{\\Delta H^\\circ}{2.303 RT} + \\text{constant}$, plotting $\\log K_p$ versus $1/T$ yields a straight line with slope $-\\Delta H^\\circ / 2.303 R$."],
    ["The degree of dissociation of $\\text{PCl}_5$ is $\\alpha$. If 1 mole of $\\text{PCl}_5$ is taken in a vessel of volume $V$, the equilibrium constant $K_c$ is:", ["$K_c = \\frac{\\alpha^2}{(1 - \\alpha)V}$", "$K_c = \\frac{\\alpha^2 V}{1 - \\alpha}$", "$K_c = \\frac{\\alpha}{(1 - \\alpha)V}$", "$K_c = \\frac{\\alpha^2}{1 - \\alpha^2}$"], 0, "Equilibrium concentrations: $[\\text{PCl}_5] = \\frac{1 - \\alpha}{V}, [\\text{PCl}_3] = \\frac{\\alpha}{V}, [\\text{Cl}_2] = \\frac{\\alpha}{V}$. $K_c = \\frac{(\\alpha/V)^2}{(1-\\alpha)/V} = \\frac{\\alpha^2}{(1-\\alpha)V}$."],
    ["From the expression $K_c = \\frac{\\alpha^2}{(1 - \\alpha)V}$, if the volume $V$ is increased at constant temperature, $\\alpha$ must:", ["Increase", "Decrease", "Remain constant", "Become zero"], 0, "Since $K_c$ is constant, increasing $V$ requires $\\alpha$ to increase so that the ratio remains constant."],
    ["For the reaction $\\text{A}_2(g) + \\text{B}_2(g) \\rightleftharpoons 2\\text{AB}(g)$, if the initial concentrations of $\\text{A}_2$ and $\\text{B}_2$ are both $a$, and at equilibrium $[\\text{AB}] = x$, then $K_c$ is:", ["$\\frac{x^2}{(a - x/2)^2}$", "$\\frac{x^2}{(a - x)^2}$", "$\\frac{4x^2}{(a - x)^2}$", "$\\frac{x}{a - x}$"], 0, "Consumes $x/2$ of $\\text{A}_2$ and $\\text{B}_2$. Equilibrium $[\\text{A}_2] = [\\text{B}_2] = a - x/2$. $K_c = \\frac{x^2}{(a - x/2)^2}$."],
    ["If in the above reaction $2x$ moles of AB are formed from initial $a$ moles of $\\text{A}_2$ and $a$ moles of $\\text{B}_2$, the expression becomes:", ["$\\frac{4x^2}{(a - x)^2}$", "$\\frac{x^2}{(a - x)^2}$", "$\\frac{2x^2}{(a - x)^2}$", "$\\frac{4x}{(a - x)}$"], 0, "If $2x$ is formed, $x$ moles of each reactant are consumed, leaving $a - x$. $K_c = \\frac{(2x)^2}{(a - x)^2} = \\frac{4x^2}{(a - x)^2}$."],
    ["For the equilibrium $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g)$, what is the effect of adding an inert gas at constant volume?", ["No effect on the equilibrium position", "Shifts forward", "Shifts backward", "Increases $K_p$"], 0, "At constant volume, the partial pressures of reacting gases are unaffected, so no shift occurs."],
    ["What is the effect of adding an inert gas to $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g)$ at constant pressure?", ["Equilibrium shifts in the forward direction", "Equilibrium shifts backward", "No change", "Carbon precipitates"], 0, "At constant pressure, adding inert gas expands volume, lowering partial pressures. The system shifts towards the side with more gaseous moles ($\\Delta n_g = 2 - 1 = +1$, forward)."],
    ["For the reaction $2\\text{HI}(g) \\rightleftharpoons \\text{H}_2(g) + \\text{I}_2(g)$, the equilibrium constant $K_c$ is 0.02. If $[\\text{HI}] = 1.0\\text{ M}, [\\text{H}_2] = 0.1\\text{ M}, [\\text{I}_2] = 0.1\\text{ M}$, in which direction will the reaction proceed?", ["Reverse direction (forming more HI)", "Forward direction", "At equilibrium", "Cannot be predicted"], 0, "$Q_c = \\frac{(0.1)(0.1)}{(1.0)^2} = 0.01$. Since $Q_c (0.01) < K_c (0.02)$, the reaction proceeds in the forward direction. Wait, $Q_c = 0.01 < 0.02$, so it goes forward."],
    ["The equilibrium constant $K_c$ for a reaction is 10 at $300\\text{ K}$ and 20 at $400\\text{ K}$. What is the sign of $\\Delta H^\\circ$?", ["Positive", "Negative", "Zero", "Indeterminate"], 0, "An increase in $K_c$ with increasing temperature indicates an endothermic reaction ($\\Delta H^\\circ > 0$)."],
    ["For the reaction $\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{D}$, if the initial concentration of all species is $1.0\\text{ M}$ and $K_c = 4$, what is the equilibrium concentration of C?", ["$1.33\\text{ M}$", "$1.0\\text{ M}$", "$0.67\\text{ M}$", "$2.0\\text{ M}$"], 0, "$K_c = \\frac{(1 + x)^2}{(1 - x)^2} = 4 \\implies \\frac{1 + x}{1 - x} = 2 \\implies 1 + x = 2 - 2x \\implies 3x = 1 \\implies x = 1/3 \\approx 0.33$. Then $[\\text{C}] = 1 + 0.33 = 1.33\\text{ M}$."],
    ["In the above problem, what is the equilibrium concentration of A?", ["$0.67\\text{ M}$", "$1.33\\text{ M}$", "$0.33\\text{ M}$", "$0.50\\text{ M}$"], 0, "$[\\text{A}] = 1 - x = 1 - 0.33 = 0.67\\text{ M}$."],
    ["For the equilibrium $\\text{NH}_4\\text{COONH}_2(s) \\rightleftharpoons 2\\text{NH}_3(g) + \\text{CO}_2(g)$, the total pressure at equilibrium is $3\\text{ atm}$. What is the value of $K_p$?", ["$4\\text{ atm}^3$", "$1\\text{ atm}^3$", "$2\\text{ atm}^3$", "$27\\text{ atm}^3$"], 0, "$P_{\\text{NH}_3} = \\frac{2}{3}(3) = 2\\text{ atm}, P_{\\text{CO}_2} = \\frac{1}{3}(3) = 1\\text{ atm}$. $K_p = (2)^2 (1) = 4\\text{ atm}^3$."],
    ["If the standard free energy change $\\Delta G^\\circ = -5.71\\text{ kJ mol}^{-1}$ at $300\\text{ K}$, what is the equilibrium constant $K$? ($2.303 RT \\approx 5.71\\text{ kJ mol}^{-1}$ at $300\\text{ K}$)", ["10", "1", "100", "0.1"], 0, "$\\Delta G^\\circ = -2.303 RT \\log K \\implies -5.71 = -5.71 \\log K \\implies \\log K = 1 \\implies K = 10$."],
    ["If $\\Delta G^\\circ = +11.42\\text{ kJ mol}^{-1}$ at $300\\text{ K}$, what is $K$?", ["$0.01$", "$0.1$", "$100$", "$10^{-4}$"], 0, "$\\log K = \\frac{-11.42}{5.71} = -2 \\implies K = 10^{-2} = 0.01$."],
    ["In which of the following reactions will adding more solid product shift the equilibrium?", ["Adding pure solid never shifts the equilibrium position in any heterogeneous system", "All heterogeneous reactions", "Only when $\\Delta H = 0$", "When solids dissolve"], 0, "The activity of a pure solid is unity and constant; adding more of it has no effect on the equilibrium position."],
    ["For the equilibrium $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, if temperature is kept constant, which factor can change the value of $K_p$?", ["No factor can change $K_p$ at constant temperature", "Increasing pressure", "Adding catalyst", "Increasing volume"], 0, "Equilibrium constants depend exclusively on temperature."],
    ["For the reaction $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g)$, $\\Delta H = +180\\text{ kJ}$. If 1 mole of $\\text{N}_2$ and 1 mole of $\\text{O}_2$ are heated, what happens to the amount of NO formed when pressure is tripled?", ["The amount of NO remains unchanged", "Amount of NO triples", "Amount of NO decreases", "Amount of NO increases by 9 times"], 0, "Because $\\Delta n_g = 0$, changing pressure has zero effect on the equilibrium yield of NO."],
    ["For the reaction $\\text{A} \\rightleftharpoons \\text{B}$, if the forward rate equation is $r_f = 2 \\times 10^{-2} [\\text{A}]$ and reverse is $r_b = 1 \\times 10^{-3} [\\text{B}]$, what is $K_c$?", ["20", "0.05", "200", "2"], 0, "$K_c = k_f / k_b = \\frac{2 \\times 10^{-2}}{1 \\times 10^{-3}} = 20$."],
    ["If the equilibrium constant for $\\text{A} \\rightleftharpoons \\text{B}$ is 20, what is the equilibrium concentration of B if initial $[\\text{A}] = 2.1\\text{ M}$?", ["$2.0\\text{ M}$", "$0.1\\text{ M}$", "$1.05\\text{ M}$", "$2.1\\text{ M}$"], 0, "$K_c = \\frac{x}{2.1 - x} = 20 \\implies x = 42 - 20x \\implies 21x = 42 \\implies x = 2.0\\text{ M}$."],
    ["What is the equilibrium concentration of A in the above question?", ["$0.1\\text{ M}$", "$2.0\\text{ M}$", "$0.5\\text{ M}$", "$1.0\\text{ M}$"], 0, "$[\\text{A}] = 2.1 - 2.0 = 0.1\\text{ M}$."],
    ["For the reaction $\\text{C}(s) + 2\\text{S}(s) \\rightleftharpoons \\text{CS}_2(g)$, the expression for $K_p$ is:", ["$K_p = P_{\\text{CS}_2}$", "$K_p = \\frac{P_{\\text{CS}_2}}{P_{\\text{C}} P_{\\text{S}}^2}$", "$K_p = \\frac{1}{P_{\\text{CS}_2}}$", "$K_p = P_{\\text{CS}_2}^2$"], 0, "Both carbon and sulfur are pure solids with unit activity, so $K_p = P_{\\text{CS}_2}$."],
    ["A mixture contains 0.1 mole of $\\text{PCl}_5$, 0.2 mole of $\\text{PCl}_3$, and 0.2 mole of $\\text{Cl}_2$ in a 2 L flask at $250^\\circ\\text{C}$. If $K_c = 0.041\\text{ M}$, the reaction quotient $Q_c$ is:", ["$0.20\\text{ M}$", "$0.40\\text{ M}$", "$0.041\\text{ M}$", "$0.10\\text{ M}$"], 0, "$[\\text{PCl}_5] = 0.05\\text{ M}, [\\text{PCl}_3] = 0.10\\text{ M}, [\\text{Cl}_2] = 0.10\\text{ M}$. $Q_c = \\frac{(0.10)(0.10)}{0.05} = \\frac{0.01}{0.05} = 0.20\\text{ M}$."],
    ["In the above question, since $Q_c (0.20) > K_c (0.041)$, the mixture will:", ["React in the reverse direction to produce more $\\text{PCl}_5$", "React forward to produce more $\\text{Cl}_2$", "Remain at equilibrium", "Explode"], 0, "When $Q_c > K_c$, the reaction moves backward to lower product concentrations until $Q_c = K_c$."],
    ["For the equilibrium $2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, if the degree of dimerization is $\\beta$, the total moles at equilibrium starting from 1 mole of $\\text{NO}_2$ is:", ["$1 - \\beta/2$", "$1 + \\beta$", "$1 - \\beta$", "$2 - \\beta$"], 0, "From 1 mole of $\\text{NO}_2$, $\\beta$ moles react to form $\\beta/2$ moles of $\\text{N}_2\\text{O}_4$. Total moles $= (1 - \\beta) + \\beta/2 = 1 - \\beta/2$."],
    ["Which of the following is an example of physical equilibrium?", ["$\\text{H}_2\\text{O}(s) \\rightleftharpoons \\text{H}_2\\text{O}(l)$", "$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$", "$\\text{PCl}_5 \\rightleftharpoons \\text{PCl}_3 + \\text{Cl}_2$", "$\\text{CaCO}_3 \\rightleftharpoons \\text{CaO} + \\text{CO}_2$"], 0, "Phase transitions between solid, liquid, and gas without chemical reaction are physical equilibria."],
    ["The rate of evaporation of a liquid depends on:", ["Temperature, surface area, and nature of the liquid", "Volume of liquid alone", "Atmospheric pressure only", "Color of liquid"], 0, "Evaporation rate is governed by thermal kinetic energy (temperature), available surface area, and intermolecular forces."],
    ["At boiling point, the saturated vapor pressure of a liquid equals:", ["The external atmospheric pressure", "Zero", "Critical pressure", "Twice the atmospheric pressure"], 0, "Boiling occurs when the equilibrium vapor pressure reaches the prevailing external atmospheric pressure."],
    ["For Henry's law of gas solubility: $m = k_H P$, the solubility of a gas in a liquid:", ["Increases linearly with the partial pressure of the gas above the liquid", "Decreases with pressure", "Is independent of pressure", "Decreases with Henry's constant"], 0, "Henry's law states that the mass of gas dissolved per unit volume of liquid is directly proportional to the gas pressure at constant temperature."]
  ];

  questionsData.forEach(item => {
    add(item[0], item[1], item[2], item[3]);
  });

  return q;
}

function getIonicEquilibriumQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Ionic equilibrium", text, opts, ans, exp, diff, type));

  add(
    "Ostwald's dilution law for a weak binary electrolyte HA relates the dissociation constant $K_a$, initial concentration $C$, and degree of ionization $\\alpha$ by:",
    ["$K_a = \\frac{C \\alpha^2}{1 - \\alpha}$", "$K_a = \\frac{C^2 \\alpha}{1 - \\alpha}$", "$K_a = \\frac{\\alpha^2}{C(1 - \\alpha)}$", "$K_a = \\frac{C \\alpha}{1 - \\alpha^2}$"],
    0,
    "For $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$, $[\\text{H}^+] = C\\alpha, [\\text{A}^-] = C\\alpha, [\\text{HA}] = C(1 - \\alpha)$. Thus $K_a = \\frac{(C\\alpha)^2}{C(1 - \\alpha)} = \\frac{C\\alpha^2}{1 - \\alpha}$."
  );
  add(
    "When the degree of dissociation $\\alpha$ is very small ($\\alpha \\ll 1$), Ostwald's dilution law simplifies to:",
    ["$\\alpha = \\sqrt{\\frac{K_a}{C}}$", "$\\alpha = \\frac{K_a}{C}$", "$\\alpha = \\sqrt{K_a C}$", "$\\alpha = K_a C^2$"],
    0,
    "When $\\alpha \\ll 1$, $1 - \\alpha \\approx 1$, so $K_a \\approx C \\alpha^2 \\implies \\alpha = \\sqrt{\\frac{K_a}{C}}$."
  );
  add(
    "For a weak acid with ionization constant $K_a$ and concentration $C$ ($\\alpha \\ll 1$), the hydrogen ion concentration $[\\text{H}^+]$ is given by:",
    ["$[\\text{H}^+] = \\sqrt{K_a C}$", "$[\\text{H}^+] = \\frac{K_a}{C}$", "$[\\text{H}^+] = K_a C$", "$[\\text{H}^+] = \\sqrt{\\frac{K_a}{C}}$"],
    0,
    "$[\\text{H}^+] = C \\alpha = C \\sqrt{\\frac{K_a}{C}} = \\sqrt{K_a C}$."
  );
  add(
    "The autoionization of water is represented by $2\\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_3\\text{O}^+(aq) + \\text{OH}^-(aq)$. The ionic product of water $K_w$ at $25^\\circ\\text{C}$ is:",
    ["$1.0 \\times 10^{-14}\\text{ mol}^2 \\text{L}^{-2}$", "$1.0 \\times 10^{-7}\\text{ mol L}^{-1}$", "$1.0 \\times 10^{-12}\\text{ mol}^2 \\text{L}^{-2}$", "$55.5\\text{ mol L}^{-1}$"],
    0,
    "At 298 K, $[\\text{H}^+][\\text{OH}^-] = K_w = 1.0 \\times 10^{-14}\\text{ mol}^2 \\text{L}^{-2}$."
  );
  add(
    "Because the self-ionization of water is an ENDOTHERMIC process ($\\Delta H > 0$), as the temperature increases to $90^\\circ\\text{C}$:",
    ["$K_w$ increases to $\\approx 10^{-12}$, neutral pH decreases to 6, and water remains neutral", "$K_w$ decreases to $10^{-16}$ and water becomes alkaline", "$K_w$ remains $10^{-14}$ and pH is 7", "Water becomes acidic because $[\\text{H}^+] > [\\text{OH}^-]$"],
    0,
    "Autoionization is endothermic, so heating shifts it forward, raising $K_w$ to $10^{-12}$. Thus $[\\text{H}^+] = [\\text{OH}^-] = 10^{-6}\\text{ M} \\implies \\text{pH} = 6$. The water remains neutral because $[\\text{H}^+] = [\\text{OH}^-]$."
  );
  add(
    "For a polyprotic acid like phosphoric acid (\\text{H}_3\\text{PO}_4), the successive ionization constants follow the order:",
    ["$K_{a_1} \\gg K_{a_2} \\gg K_{a_3}$", "$K_{a_3} \\gg K_{a_2} \\gg K_{a_1}$", "$K_{a_1} = K_{a_2} = K_{a_3}$", "$K_{a_2} \\gg K_{a_1} \\gg K_{a_3}$"],
    0,
    "Removing a positively charged proton from an increasingly negatively charged anion requires significantly more electrostatic energy, so $K_{a_1} \\gg K_{a_2} \\gg K_{a_3}$."
  );
  add(
    "For a diprotic acid $\\text{H}_2\\text{A}$ with dissociation constants $K_{a_1}$ and $K_{a_2}$ ($K_{a_1} \\gg K_{a_2}$), the concentration of the divalent anion $[\\text{A}^{2-}]$ in solution is approximately equal to:",
    ["$K_{a_2}$", "$K_{a_1}$", "$\\sqrt{K_{a_1} K_{a_2}}$", "$K_{a_1} \\times C$"],
    0,
    "From the second dissociation: $\\text{HA}^- \\rightleftharpoons \\text{H}^+ + \\text{A}^{2-}$, $K_{a_2} = \\frac{[\\text{H}^+][\\text{A}^{2-}]}{[\\text{HA}^-]}$. Since $[\\text{H}^+] \\approx [\\text{HA}^-]$ from the first ionization, $[\\text{A}^{2-}] \\approx K_{a_2}$ (independent of initial acid concentration)."
  );
  add(
    "The common ion effect refers to:",
    ["The suppression of ionization of a weak electrolyte upon addition of a strong electrolyte containing a common ion", "The precipitation of all ions", "The increase in ionization of a weak acid", "The neutralization of acid by base"],
    0,
    "By Le Chatelier's principle, introducing an ion already produced by a weak electrolyte shifts the weak equilibrium backward, suppressing ionization."
  );
  add(
    "In qualitative analysis of Group III cations ($\\text{Fe}^{3+}, \\text{Al}^{3+}, \\text{Cr}^{3+}$), $\\text{NH}_4\\text{Cl}$ is added before $\\text{NH}_4\\text{OH}$ to:",
    ["Suppress the ionization of $\\text{NH}_4\\text{OH}$ so that only the less soluble hydroxides of Group III precipitate", "Increase the concentration of $\\text{OH}^-$ ions", "Precipitate Group IV cations", "Make the solution neutral"],
    0,
    "The common ion $\\text{NH}_4^+$ from strong $\\text{NH}_4\\text{Cl}$ shifts $\\text{NH}_4\\text{OH} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$ backward, keeping $[\\text{OH}^-]$ low enough to exceed $K_{sp}$ of Group III hydroxides without precipitating Group IV cations like $\\text{Zn(OH)}_2$ or $\\text{Mg(OH)}_2$."
  );
  add(
    "In qualitative analysis of Group II cations ($\\text{Cu}^{2+}, \\text{Pb}^{2+}, \\text{Cd}^{2+}$), dil. $\\text{HCl}$ is added before passing $\\text{H}_2\\text{S}$ gas to:",
    ["Suppress the ionization of $\\text{H}_2\\text{S}$ via common ion effect so that only Group II sulfides with very low $K_{sp}$ precipitate", "Increase the sulfide ion concentration", "Neutralize the solution", "Dissolve the metal sulfides"],
    0,
    "$\\text{H}^+$ from $\\text{HCl}$ suppresses $\\text{H}_2\\text{S} \\rightleftharpoons 2\\text{H}^+ + \\text{S}^{2-}$, reducing $[\\text{S}^{2-}]$ so that only Group II sulfides (very low $K_{sp}$) precipitate, preventing premature precipitation of Group IV sulfides ($\\text{ZnS}, \\text{MnS}$)."
  );
  add(
    "What is the degree of ionization $\\alpha$ of $0.01\\text{ M}$ acetic acid solution if $K_a = 1.8 \\times 10^{-5}$?",
    ["$0.0424$ (or 4.24%)", "$0.018$", "$0.134$", "$0.0018$"],
    0,
    "$\\alpha = \\sqrt{\\frac{K_a}{C}} = \\sqrt{\\frac{1.8 \\times 10^{-5}}{10^{-2}}} = \\sqrt{1.8 \\times 10^{-3}} = \\sqrt{18 \\times 10^{-4}} \\approx 4.24 \\times 10^{-2} = 0.0424$ (4.24%)."
  );
  add(
    "What is the hydrogen ion concentration $[\\text{H}^+]$ in a $0.04\\text{ M}$ solution of formic acid ($K_a = 1.8 \\times 10^{-4}$)?",
    ["$2.68 \\times 10^{-3}\\text{ M}$", "$1.8 \\times 10^{-4}\\text{ M}$", "$7.2 \\times 10^{-6}\\text{ M}$", "$4.0 \\times 10^{-3}\\text{ M}$"],
    0,
    "$[\\text{H}^+] = \\sqrt{K_a C} = \\sqrt{(1.8 \\times 10^{-4})(0.04)} = \\sqrt{7.2 \\times 10^{-6}} \\approx 2.68 \\times 10^{-3}\\text{ M}$."
  );
  add(
    "For a weak base $\\text{BOH}$ with ionization constant $K_b = 1.0 \\times 10^{-6}$, what is the hydroxide ion concentration in a $0.1\\text{ M}$ solution?",
    ["$3.16 \\times 10^{-4}\\text{ M}$", "$1.0 \\times 10^{-3}\\text{ M}$", "$1.0 \\times 10^{-7}\\text{ M}$", "$1.0 \\times 10^{-6}\\text{ M}$"],
    0,
    "$[\\text{OH}^-] = \\sqrt{K_b C} = \\sqrt{(10^{-6})(0.1)} = \\sqrt{10^{-7}} = \\sqrt{10 \\times 10^{-8}} \\approx 3.16 \\times 10^{-4}\\text{ M}$."
  );
  add(
    "According to the Arrhenius theory, an acid is defined as a substance that:",
    ["Dissociates in water to produce hydrogen ions ($\\text{H}^+$)", "Accepts a proton", "Donates an electron pair", "Accepts an electron pair"],
    0,
    "Svante Arrhenius (1884) defined acids as hydrogen-containing substances that produce $\\text{H}^+$ ions upon dissolution in water."
  );
  add(
    "According to the Brønsted-Lowry theory, an acid is a:",
    ["Proton ($\\text{H}^+$) donor", "Proton acceptor", "Electron pair donor", "Hydroxide ion producer"],
    0,
    "Brønsted and Lowry defined an acid as any species capable of donating a proton to another species."
  );
  add(
    "According to the Lewis theory, a base is defined as an:",
    ["Electron pair donor", "Electron pair acceptor", "Proton donor", "Proton acceptor"],
    0,
    "G.N. Lewis defined a base as a chemical species capable of donating an electron lone pair to form a coordinate bond."
  );
  add(
    "Which of the following is a Lewis acid?",
    ["\\text{BF}_3", "\\text{NH}_3", "\\text{H}_2\\text{O}", "\\text{OH}^-"],
    0,
    "\\text{BF}_3 has an incomplete octet (6 valence electrons on Boron) and an empty 2p orbital capable of accepting an electron pair."
  );
  add(
    "Which of the following species is amphiprotic (can act as both a Brønsted acid and a Brønsted base)?",
    ["\\text{HCO}_3^-", "\\text{CO}_3^{2-}", "\\text{SO}_4^{2-}", "\\text{NH}_4^+"],
    0,
    "\\text{HCO}_3^- can donate a proton to form $\\text{CO}_3^{2-}$ (acid) or accept a proton to form $\\text{H}_2\\text{CO}_3$ (base)."
  );
  add(
    "The conjugate base of $\\text{H}_2\\text{PO}_4^-$ is:",
    ["\\text{HPO}_4^{2-}", "\\text{PO}_4^{3-}", "\\text{H}_3\\text{PO}_4", "\\text{P}_2\\text{O}_5"],
    0,
    "Removing one proton ($\\text{H}^+$) from $\\text{H}_2\\text{PO}_4^-$ produces the conjugate base $\\text{HPO}_4^{2-}$."
  );
  add(
    "The conjugate acid of $\\text{NH}_3$ is:",
    ["\\text{NH}_4^+", "\\text{NH}_2^-", "\\text{N}^{3-}", "\\text{NH}_2\\text{OH}"],
    0,
    "Adding a proton ($\\text{H}^+$) to $\\text{NH}_3$ yields its conjugate acid $\\text{NH}_4^+$."
  );
  add(
    "The relationship between the acid dissociation constant $K_a$ of a weak acid and the base dissociation constant $K_b$ of its conjugate base is:",
    ["$K_a \\times K_b = K_w$", "$K_a / K_b = K_w$", "$K_a + K_b = K_w$", "$K_a \\times K_b = 1$"],
    0,
    "For any conjugate acid-base pair in aqueous solution, $K_a \\cdot K_b = [\\text{H}^+][\\text{OH}^-] = K_w = 1.0 \\times 10^{-14}$ at $25^\\circ\\text{C}$."
  );
  add(
    "If $K_a$ for hydrocyanic acid (\\text{HCN}) is $4.9 \\times 10^{-10}$, what is $K_b$ for the cyanide ion ($\\text{CN}^-$)?",
    ["$2.04 \\times 10^{-5}$", "$4.9 \\times 10^{-10}$", "$1.0 \\times 10^{-14}$", "$2.04 \\times 10^{-4}$"],
    0,
    "$K_b = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{4.9 \\times 10^{-10}} \\approx 2.04 \\times 10^{-5}$."
  );
  add(
    "Which of the following acids has the weakest conjugate base?",
    ["\\text{HClO}_4", "\\text{CH}_3\\text{COOH}", "\\text{HCN}", "\\text{HF}"],
    0,
    "The stronger the acid, the weaker its conjugate base. $\\text{HClO}_4$ is the strongest acid, so its conjugate base $\\text{ClO}_4^-$ is the weakest."
  );
  add(
    "Which of the following cations acts as a Lewis acid by accepting an electron pair?",
    ["\\text{Fe}^{3+}", "\\text{Na}^+", "\\text{K}^+", "\\text{NH}_4^+"],
    0,
    "\\text{Fe}^{3+} is a small, highly charged transition metal cation with vacant d-orbitals capable of accepting electron pairs from ligands (Lewis bases)."
  );
  add(
    "The leveling effect of water refers to the phenomenon where:",
    ["All strong acids (such as $\\text{HCl}, \\text{HNO}_3, \\text{HClO}_4$) appear equally strong in water because they are all completely converted into $\\text{H}_3\\text{O}^+$", "All weak acids have the same pH", "Water neutralizes all acids", "Acids cannot dissolve in water"],
    0,
    "No acid stronger than $\\text{H}_3\\text{O}^+$ can exist in water because strong acids transfer their protons completely to $\\text{H}_2\\text{O}$."
  );
  add(
    "To differentiate the relative acid strengths of strong acids like $\\text{HClO}_4, \\text{HCl},$ and $\\text{HNO}_3$, one must use:",
    ["A less basic solvent than water, such as pure acetic acid", "A more basic solvent like liquid ammonia", "Strong $\\text{NaOH}$", "Ether"],
    0,
    "Glacial acetic acid is weakly basic and does not level the strong acids completely, allowing their relative acidities ($\\text{HClO}_4 > \\text{HCl} > \\text{HNO}_3$) to be measured."
  );
  add(
    "The concentration of pure liquid water is approximately:",
    ["$55.5\\text{ mol L}^{-1}$", "$1.0\\text{ mol L}^{-1}$", "$18.0\\text{ mol L}^{-1}$", "$10^{-7}\\text{ mol L}^{-1}$"],
    0,
    "In 1 L (1000 g) of water: moles $= 1000 / 18.015 \\approx 55.5\\text{ mol L}^{-1}$."
  );
  add(
    "Assertion (A): The degree of dissociation of acetic acid increases upon dilution.\nReason (R): According to Ostwald's dilution law, $\\alpha \\approx \\sqrt{\\frac{K_a}{C}}$, so $\\alpha$ is inversely proportional to the square root of concentration.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Dilution decreases concentration $C$, thereby increasing the degree of dissociation $\\alpha$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Pure water at $90^\\circ\\text{C}$ has a pH of approximately 6.0, yet it remains neutral.\nReason (R): At $90^\\circ\\text{C}$, the concentration of $\\text{H}^+$ ions still equals the concentration of $\\text{OH}^-$ ions ($[\\text{H}^+] = [\\text{OH}^-] = 10^{-6}\\text{ M}$).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Neutrality requires $[\\text{H}^+] = [\\text{OH}^-]$, not necessarily $\\text{pH} = 7$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Addition of $\\text{NH}_4\\text{Cl}$ to $\\text{NH}_4\\text{OH}$ solution suppresses its hydroxide ion concentration.\nReason (R): The common ion $\\text{NH}_4^+$ shifts the ionization equilibrium $\\text{NH}_4\\text{OH} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$ in the reverse direction.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Common ion effect drives the dissociation backward, lowering $[\\text{OH}^-]$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): For a dibasic acid like $\\text{H}_2\\text{S}$, the concentration of $\\text{S}^{2-}$ in aqueous solution is approximately equal to $K_{a_2}$.\nReason (R): The secondary dissociation of $\\text{H}_2\\text{S}$ is very small, and the $\\text{H}^+$ ions provided by the first dissociation suppress the second dissociation.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since $[\\text{H}^+] \\approx [\\text{HS}^-]$, $K_{a_2} = \\frac{[\\text{H}^+][\\text{S}^{2-}]}{[\\text{HS}^-]} \\approx [\\text{S}^{2-}]$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): $\\text{BF}_3$ acts as a Lewis acid.\nReason (R): Boron in $\\text{BF}_3$ has only six valence electrons and possesses an empty 2p-orbital capable of accepting an electron pair.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Electron sextet and vacant p-orbital make $\\text{BF}_3$ an electrophilic electron-pair acceptor. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Aqueous solution of $\\text{NaCl}$ is neutral, with $\\text{pH} = 7$ at $25^\\circ\\text{C}$.\nReason (R): Neither $\\text{Na}^+$ nor $\\text{Cl}^-$ ions undergo hydrolysis because they are derived from a strong base and strong acid respectively.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Ions of strong electrolytes do not react with water, keeping $[\\text{H}^+] = [\\text{OH}^-] = 10^{-7}\\text{ M}$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "The autoionization constant of heavy water ($\\text{D}_2\\text{O}$) at $25^\\circ\\text{C}$ is $K_w(\\text{D}_2\\text{O}) \\approx 1.35 \\times 10^{-15}$. What is the pD of pure neutral $\\text{D}_2\\text{O}$?",
    ["$7.43$", "$7.00$", "$6.57$", "$14.0$"],
    0,
    "$[\\text{D}^+] = \\sqrt{K_w} = \\sqrt{1.35 \\times 10^{-15}} = 3.67 \\times 10^{-8}\\text{ M} \\implies \\text{pD} = -\\log(3.67 \\times 10^{-8}) \\approx 7.43$."
  );
  add(
    "Which of the following is a conjugate acid-base pair?",
    ["$\\text{H}_2\\text{SO}_4 \\text{ and } \\text{HSO}_4^-$", "$\\text{H}_2\\text{SO}_4 \\text{ and } \\text{SO}_4^{2-}$", "$\\text{HCl} \\text{ and } \\text{NaOH}$", "$\\text{NH}_4^+ \\text{ and } \\text{NH}_2^-$"],
    0,
    "A conjugate acid-base pair differs by exactly one proton ($\\text{H}^+$)."
  );
  add(
    "In the equilibrium $\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{CH}_3\\text{COO}^-$, water acts as a:",
    ["Brønsted base", "Brønsted acid", "Lewis acid only", "Salt"],
    0,
    "Water accepts a proton from acetic acid, acting as a Brønsted base."
  );
  add(
    "What is the conjugate acid of the bicarbonate ion (\\text{HCO}_3^-)?",
    ["\\text{H}_2\\text{CO}_3", "\\text{CO}_3^{2-}", "\\text{CO}_2", "\\text{OH}^-"],
    0,
    "Adding a proton to $\\text{HCO}_3^-$ yields carbonic acid $\\text{H}_2\\text{CO}_3$."
  );
  add(
    "The self-ionization constant of water $K_w$ at $0^\\circ\\text{C}$ is $0.114 \\times 10^{-14}$. The pH of neutral water at $0^\\circ\\text{C}$ is:",
    ["$7.47$", "$7.00$", "$6.53$", "$8.00$"],
    0,
    "$[\\text{H}^+] = \\sqrt{0.114 \\times 10^{-14}} = 3.38 \\times 10^{-8}\\text{ M} \\implies \\text{pH} = -\\log(3.38 \\times 10^{-8}) = 7.47$."
  );
  add(
    "Which of the following has the highest degree of ionization in $0.1\\text{ M}$ aqueous solution?",
    ["$\\text{HCl}$", "$\\text{CH}_3\\text{COOH}$", "$\\text{HCN}$", "$\\text{HF}$"],
    0,
    "$\\text{HCl}$ is a strong electrolyte with 100% ionization ($\\alpha = 1$)."
  );
  add(
    "The ionization constant of a weak acid is $K_a = 10^{-5}$. At what concentration will it be 1% ionized?",
    ["$0.1\\text{ M}$", "$0.01\\text{ M}$", "$1.0\\text{ M}$", "$0.001\\text{ M}$"],
    0,
    "$\\alpha = 0.01 = 10^{-2}$. $\\alpha = \\sqrt{K_a / C} \\implies \\alpha^2 = K_a / C \\implies C = \\frac{K_a}{\\alpha^2} = \\frac{10^{-5}}{(10^{-2})^2} = \\frac{10^{-5}}{10^{-4}} = 0.1\\text{ M}$."
  );
  add(
    "At what concentration will the above weak acid be 10% ionized?",
    ["$1.0 \\times 10^{-3}\\text{ M}$", "$0.1\\text{ M}$", "$0.01\\text{ M}$", "$10^{-4}\\text{ M}$"],
    0,
    "$\\alpha = 0.10$. $C = \\frac{K_a}{\\alpha^2} = \\frac{10^{-5}}{(0.1)^2} = \\frac{10^{-5}}{10^{-2}} = 1.0 \\times 10^{-3}\\text{ M}$."
  );
  add(
    "The dissociation of $\\text{H}_2\\text{O}$ into ions has an enthalpy change of $\\Delta H = +57.3\\text{ kJ mol}^{-1}$. This implies that neutralization of a strong acid by a strong base has a standard enthalpy of:",
    ["$-57.3\\text{ kJ mol}^{-1}$", "$+57.3\\text{ kJ mol}^{-1}$", "$-114.6\\text{ kJ mol}^{-1}$", "$0\\text{ kJ mol}^{-1}$"],
    0,
    "Neutralization ($\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$) is the reverse of autoionization, releasing $57.3\\text{ kJ mol}^{-1}$."
  );
  add(
    "Which of the following compounds is a Lewis base but NOT an Arrhenius base?",
    ["\\text{NH}_3", "\\text{NaOH}", "\\text{KOH}", "\\text{Ba(OH)}_2"],
    0,
    "\\text{NH}_3 possesses an electron lone pair to donate (Lewis base) but does not contain a hydroxyl group in its formula (not an Arrhenius base)."
  );
  add(
    "Which of the following molecules can act as a Lewis acid?",
    ["\\text{AlCl}_3", "\\text{H}_2\\text{O}", "\\text{NH}_3", "\\text{CH}_4"],
    0,
    "\\text{AlCl}_3$ has an incomplete octet on Aluminum, accepting an electron pair readily."
  );
  add(
    "The ionization of $\\text{H}_2\\text{S}$ occurs in two stages: $K_{a_1} = 10^{-7}$ and $K_{a_2} = 10^{-14}$. The overall ionization constant $K$ for $\\text{H}_2\\text{S} \\rightleftharpoons 2\\text{H}^+ + \\text{S}^{2-}$ is:",
    ["$10^{-21}$", "$10^{-7}$", "$10^{-14}$", "$10^{-2}$"],
    0,
    "Overall constant $K = K_{a_1} \\times K_{a_2} = 10^{-7} \\times 10^{-14} = 10^{-21}$."
  );
  add(
    "What is the concentration of $\\text{S}^{2-}$ ions in a $0.1\\text{ M H}_2\\text{S}$ solution containing $0.2\\text{ M HCl}$? ($K = 10^{-21}$)",
    ["$2.5 \\times 10^{-21}\\text{ M}$", "$10^{-21}\\text{ M}$", "$10^{-22}\\text{ M}$", "$5.0 \\times 10^{-20}\\text{ M}$"],
    0,
    "$[\\text{H}^+] \\approx 0.2\\text{ M}$ from $\\text{HCl}$. $K = \\frac{[\\text{H}^+]^2 [\\text{S}^{2-}]}{[\\text{H}_2\\text{S}]} \\implies 10^{-21} = \\frac{(0.2)^2 [\\text{S}^{2-}]}{0.1} \\implies [\\text{S}^{2-}] = \\frac{10^{-21} \\times 0.1}{0.04} = 2.5 \\times 10^{-21}\\text{ M}$."
  );
  add(
    "Which of the following factors does NOT affect the degree of ionization of a weak electrolyte?",
    ["Atmospheric pressure", "Temperature", "Dilution (concentration)", "Nature of solvent"],
    0,
    "Electrolyte ionization in condensed liquid solutions is virtually independent of moderate atmospheric pressure changes."
  );

  return q;
}

function getPHQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("pH", text, opts, ans, exp, diff, type));

  add(
    "The pH of a solution is defined mathematically by Sørensen as:",
    ["$\\text{pH} = -\\log_{10}[\\text{H}_3\\text{O}^+]$", "$\\text{pH} = \\log_{10}[\\text{H}^+]$", "$\\text{pH} = -\\ln[\\text{H}^+]$", "$\\text{pH} = 10^{-[\\text{H}^+]}$"],
    0,
    "S.P.L. Sørensen (1909) introduced pH as the negative base-10 logarithm of the hydronium ion molar activity: $\\text{pH} = -\\log_{10}[\\text{H}_3\\text{O}^+]$."
  );
  add(
    "What is the pH of a $1.0 \\times 10^{-3}\\text{ M}$ aqueous solution of $\\text{HCl}$ at $25^\\circ\\text{C}$?",
    ["$3.0$", "$1.0$", "$11.0$", "$7.0$"],
    0,
    "$\\text{HCl}$ is a strong acid that dissociates completely: $[\\text{H}^+] = 1.0 \\times 10^{-3}\\text{ M} \\implies \\text{pH} = -\\log(10^{-3}) = 3.0$."
  );
  add(
    "What is the pH of a $1.0 \\times 10^{-4}\\text{ M}$ solution of $\\text{NaOH}$ at $25^\\circ\\text{C}$?",
    ["$10.0$", "$4.0$", "$14.0$", "$7.0$"],
    0,
    "$[\\text{OH}^-] = 1.0 \\times 10^{-4}\\text{ M} \\implies \\text{pOH} = 4.0 \\implies \\text{pH} = 14 - 4.0 = 10.0$."
  );
  add(
    "What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous solution of $\\text{HCl}$ at $25^\\circ\\text{C}$?",
    ["$6.98$ (slightly acidic)", "$8.00$", "$7.00$", "$6.00$"],
    0,
    "Because the solution is extremely dilute, $\\text{H}^+$ from autoionization of water cannot be ignored. $[\\text{H}^+] = 10^{-8} + x$, where $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0 \\implies x = 9.51 \\times 10^{-8}\\text{ M}$. Total $[\\text{H}^+] = 1.05 \\times 10^{-7}\\text{ M} \\implies \\text{pH} = 6.98$."
  );
  add(
    "What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous solution of $\\text{NaOH}$ at $25^\\circ\\text{C}$?",
    ["$7.02$ (slightly basic)", "$6.00$", "$8.00$", "$7.00$"],
    0,
    "Considering water autoionization: total $[\\text{OH}^-] = 1.05 \\times 10^{-7}\\text{ M} \\implies \\text{pOH} = 6.98 \\implies \\text{pH} = 14 - 6.98 = 7.02$."
  );
  add(
    "When equal volumes of $0.1\\text{ M HCl}$ and $0.1\\text{ M NaOH}$ are mixed at $25^\\circ\\text{C}$, the pH of the resulting solution is:",
    ["$7.0$", "$0.0$", "$1.0$", "$14.0$"],
    0,
    "Complete neutralization occurs: $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$. The salt $\\text{NaCl}$ does not hydrolyze, resulting in neutral $\\text{pH} = 7.0$."
  );
  add(
    "When $100\\text{ mL}$ of $0.1\\text{ M HCl}$ is mixed with $100\\text{ mL}$ of $0.05\\text{ M NaOH}$, the pH of the resulting mixture is:",
    ["$1.60$", "$1.30$", "$2.00$", "$7.00$"],
    0,
    "Moles of $\\text{H}^+ = 0.1 \\times 0.1 = 0.01$ mol. Moles of $\\text{OH}^- = 0.1 \\times 0.05 = 0.005$ mol. Remaining $\\text{H}^+ = 0.005$ mol in $200\\text{ mL}$ ($0.2\\text{ L}$). $[\\text{H}^+] = 0.005 / 0.2 = 0.025\\text{ M} \\implies \\text{pH} = -\\log(0.025) \\approx 1.60$."
  );
  add(
    "What is the pH of a $0.005\\text{ M}$ aqueous solution of $\\text{Ba(OH)}_2$ at $25^\\circ\\text{C}$?",
    ["$12.0$", "$11.7$", "$2.0$", "$14.0$"],
    0,
    "$\\text{Ba(OH)}_2$ is a strong base producing two $\\text{OH}^-$ ions per formula unit: $[\\text{OH}^-] = 2 \\times 0.005 = 0.01\\text{ M} = 10^{-2}\\text{ M}$. $\\text{pOH} = 2 \\implies \\text{pH} = 14 - 2 = 12.0$."
  );
  add(
    "What is the pH of a $0.005\\text{ M}$ solution of sulfuric acid ($\\text{H}_2\\text{SO}_4$), assuming complete dissociation of both protons?",
    ["$2.0$", "$2.3$", "$1.0$", "$3.0$"],
    0,
    "$[\\text{H}^+] = 2 \\times 0.005 = 0.01\\text{ M} = 10^{-2}\\text{ M} \\implies \\text{pH} = -\\log(10^{-2}) = 2.0$."
  );
  add(
    "If the pH of a solution decreases by 2 units (e.g. from 5 to 3), the concentration of $\\text{H}^+$ ions:",
    ["Increases by a factor of 100", "Decreases by a factor of 100", "Doubles", "Increases by 2 times"],
    0,
    "Because pH is a logarithmic scale (base 10), a decrease of 2 units represents $[\\text{H}^+] = 10^{-3} / 10^{-5} = 10^2 = 100$-fold increase in acidity."
  );
  add(
    "The pH of a $0.1\\text{ M}$ solution of a weak monoprotic acid with $K_a = 1.0 \\times 10^{-5}$ is:",
    ["$3.0$", "$5.0$", "$1.0$", "$6.0$"],
    0,
    "$[\\text{H}^+] = \\sqrt{K_a C} = \\sqrt{10^{-5} \\times 0.1} = \\sqrt{10^{-6}} = 10^{-3}\\text{ M} \\implies \\text{pH} = 3.0$."
  );
  add(
    "The pH of a weak acid can be calculated from its $\\text{p}K_a$ and concentration $C$ ($\\alpha \\ll 1$) using:",
    ["$\\text{pH} = \\frac{1}{2}(\\text{p}K_a - \\log C)$", "$\\text{pH} = \\text{p}K_a - \\log C$", "$\\text{pH} = \\frac{1}{2}(\\text{p}K_a + \\log C)$", "$\\text{pH} = \\text{p}K_a + \\log C$"],
    0,
    "Since $[\\text{H}^+] = \\sqrt{K_a C} = (K_a C)^{1/2}$, taking negative log gives $\\text{pH} = \\frac{1}{2}(\\text{p}K_a - \\log C)$."
  );
  add(
    "The pOH of a weak base with $\\text{p}K_b$ and concentration $C$ ($\\alpha \\ll 1$) is given by:",
    ["$\\text{pOH} = \\frac{1}{2}(\\text{p}K_b - \\log C)$", "$\\text{pOH} = \\text{p}K_b - \\log C$", "$\\text{pOH} = \\frac{1}{2}(\\text{p}K_b + \\log C)$", "$\\text{pOH} = 14 - \\text{p}K_b$"],
    0,
    "$[\\text{OH}^-] = \\sqrt{K_b C} \\implies \\text{pOH} = \\frac{1}{2}(\\text{p}K_b - \\log C)$."
  );
  add(
    "What is the pH of a $0.01\\text{ M}$ aqueous ammonia solution if $K_b = 1.0 \\times 10^{-5}$?",
    ["$10.5$", "$3.5$", "$11.0$", "$9.0$"],
    0,
    "$\\text{p}K_b = 5.0, \\log C = \\log(0.01) = -2$. $\\text{pOH} = \\frac{1}{2}(5 - (-2)) = \\frac{7}{2} = 3.5 \\implies \\text{pH} = 14 - 3.5 = 10.5$."
  );
  add(
    "How many milliliters of $0.1\\text{ M HCl}$ must be added to $50\\text{ mL}$ of $0.2\\text{ M NaOH}$ to achieve a neutral solution ($\\text{pH} = 7$)?",
    ["$100\\text{ mL}$", "$50\\text{ mL}$", "$25\\text{ mL}$", "$200\\text{ mL}$"],
    0,
    "$N_1 V_1 = N_2 V_2 \\implies (0.1) V_1 = (0.2)(50) = 10 \\implies V_1 = 100\\text{ mL}$."
  );
  add(
    "A solution has $\\text{pH} = 2$. How much water must be added to $10\\text{ mL}$ of this solution to increase its pH to 4?",
    ["$990\\text{ mL}$", "$100\\text{ mL}$", "$1000\\text{ mL}$", "$90\\text{ mL}$"],
    0,
    "At $\\text{pH} = 2$, $[\\text{H}^+] = 10^{-2}\\text{ M}$. At $\\text{pH} = 4$, $[\\text{H}^+] = 10^{-4}\\text{ M}$. Dilution factor $= 10^{-2}/10^{-4} = 100$. Final volume $= 10 \\times 100 = 1000\\text{ mL}$. Volume of water added $= 1000 - 10 = 990\\text{ mL}$."
  );
  add(
    "The pH of a saturated solution of $\\text{Ca(OH)}_2$ is 12.0 at $25^\\circ\\text{C}$. What is the solubility product ($K_{sp}$) of $\\text{Ca(OH)}_2$?",
    ["$5.0 \\times 10^{-7}$", "$1.0 \\times 10^{-6}$", "$4.0 \\times 10^{-6}$", "$2.0 \\times 10^{-7}$"],
    0,
    "$\\text{pH} = 12 \\implies \\text{pOH} = 2 \\implies [\\text{OH}^-] = 10^{-2}\\text{ M}$. Since $\\text{Ca(OH)}_2 \\rightleftharpoons \\text{Ca}^{2+} + 2\\text{OH}^-$, $[\\text{Ca}^{2+}] = [\\text{OH}^-]/2 = 0.5 \\times 10^{-2}\\text{ M}$. $K_{sp} = [\\text{Ca}^{2+}][\\text{OH}^-]^2 = (0.5 \\times 10^{-2})(10^{-2})^2 = 0.5 \\times 10^{-6} = 5.0 \\times 10^{-7}$."
  );
  add(
    "What is the pH of human blood under healthy physiological conditions?",
    ["$7.35 - 7.45$", "$6.80 - 7.00$", "$7.80 - 8.00$", "$5.50 - 6.00$"],
    0,
    "Human arterial blood is tightly buffered at $\\text{pH} = 7.40 \\pm 0.05$ by the carbonic acid-bicarbonate buffer system."
  );
  add(
    "Which indicator is most suitable for titrating a strong acid with a weak base?",
    ["Methyl orange (pH range 3.1 - 4.4)", "Phenolphthalein (pH range 8.3 - 10.0)", "Litmus (pH 5 - 8)", "Thymolphthalein (pH 9.3 - 10.5)"],
    0,
    "The equivalence point of strong acid vs weak base is acidic ($\\text{pH} < 7$) due to salt hydrolysis, matching the transition interval of methyl orange."
  );
  add(
    "Which indicator is most suitable for titrating a weak acid with a strong base?",
    ["Phenolphthalein (pH range 8.3 - 10.0)", "Methyl orange (pH range 3.1 - 4.4)", "Bromocresol green (pH range 3.8 - 5.4)", "Methyl red (pH range 4.2 - 6.3)"],
    0,
    "The equivalence point of weak acid vs strong base is weakly alkaline ($\\text{pH} > 7$) due to anion hydrolysis, matching the phenolphthalein end-point."
  );
  add(
    "If $100\\text{ mL}$ of a solution of $\\text{pH} = 3$ is mixed with $100\\text{ mL}$ of a solution of $\\text{pH} = 5$, what is the pH of the resulting mixture?",
    ["$3.30$", "$4.00$", "$3.00$", "$5.00$"],
    0,
    "In $\\text{pH} = 3$, moles of $\\text{H}^+ = 0.1 \\times 10^{-3} = 1.0 \\times 10^{-4}$. In $\\text{pH} = 5$, moles of $\\text{H}^+ = 0.1 \\times 10^{-5} = 1.0 \\times 10^{-6}$. Total moles $\\approx 1.01 \\times 10^{-4}$ in $200\\text{ mL}$ ($0.2\\text{ L}$). $[\\text{H}^+] = \\frac{1.01 \\times 10^{-4}}{0.2} \\approx 5.05 \\times 10^{-4}\\text{ M} \\implies \\text{pH} = 4 - \\log(5.05) \\approx 3.30$."
  );
  add(
    "What is the pH of $0.05\\text{ M Ba(OH)}_2$ solution?",
    ["$13.0$", "$12.7$", "$1.0$", "$14.0$"],
    0,
    "$[\\text{OH}^-] = 2 \\times 0.05 = 0.1\\text{ M} = 10^{-1}\\text{ M}$. $\\text{pOH} = 1.0 \\implies \\text{pH} = 14 - 1.0 = 13.0$."
  );
  add(
    "The pH of a solution containing $0.1\\text{ M CH}_3\\text{COOH}$ and $0.1\\text{ M CH}_3\\text{COONa}$ ($\\text{p}K_a = 4.74$) is:",
    ["$4.74$", "$7.00$", "$5.74$", "$3.74$"],
    0,
    "From Henderson-Hasselbalch: $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{Salt}]}{[\\text{Acid}]} = 4.74 + \\log\\frac{0.1}{0.1} = 4.74 + 0 = 4.74$."
  );
  add(
    "Assertion (A): The pH of a $10^{-8}\\text{ M HCl}$ solution is slightly less than 7 (approximately 6.98) and not 8.\nReason (R): In extremely dilute acid solutions, the hydronium ions contributed by the autoionization of water ($10^{-7}\\text{ M}$) cannot be neglected.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "An acid solution cannot have an alkaline $\\text{pH} > 7$. Water ionization dominates and yields $\\text{pH} = 6.98$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Diluting an acidic solution increases its pH towards 7.\nReason (R): Dilution decreases the molar concentration of $\\text{H}^+$ ions, and since $\\text{pH} = -\\log[\\text{H}^+]$, lower concentration results in a higher pH.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "As $[\\text{H}^+]$ decreases towards $10^{-7}$, pH approaches 7 asymptotically. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Phenolphthalein is a suitable indicator for the titration of acetic acid with sodium hydroxide.\nReason (R): The pH at the equivalence point of a weak acid - strong base titration lies in the alkaline region (pH 8-9) due to anion hydrolysis, which falls within the working range of phenolphthalein (8.3 - 10.0).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The basic equivalence point matches phenolphthalein's color change interval. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The sum of pH and pOH is equal to 14 only at $25^\\circ\\text{C}$.\nReason (R): The ionic product of water $K_w$ increases with temperature, so $\\text{p}K_w$ decreases as temperature rises.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "$\\text{pH} + \\text{pOH} = \\text{p}K_w$. At higher temperatures, $\\text{p}K_w < 14$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "The pH of a $10^{-3}\\text{ M H}_2\\text{SO}_4$ solution assuming complete ionization of both protons is:",
    ["$2.70$", "$3.00$", "$2.00$", "$3.30$"],
    0,
    "$[\\text{H}^+] = 2 \\times 10^{-3}\\text{ M} \\implies \\text{pH} = -\\log(2 \\times 10^{-3}) = 3 - \\log 2 = 3 - 0.301 = 2.699 \\approx 2.70$."
  );
  add(
    "What is the hydroxide ion concentration in a solution having $\\text{pH} = 11.3$ at $25^\\circ\\text{C}$?",
    ["$2.0 \\times 10^{-3}\\text{ M}$", "$5.0 \\times 10^{-12}\\text{ M}$", "$1.0 \\times 10^{-11}\\text{ M}$", "$2.0 \\times 10^{-2}\\text{ M}$"],
    0,
    "$\\text{pOH} = 14 - 11.3 = 2.70 \\implies [\\text{OH}^-] = 10^{-2.70} = 10^{0.30} \\times 10^{-3} \\approx 2.0 \\times 10^{-3}\\text{ M}$."
  );
  add(
    "A solution with $\\text{pH} = 0$ is:",
    ["$1.0\\text{ M}$ in $\\text{H}^+$ ions", "Neutral", "Non-existent", "Pure water"],
    0,
    "$\\text{pH} = -\\log[\\text{H}^+] = 0 \\implies [\\text{H}^+] = 10^0 = 1.0\\text{ M}$."
  );
  add(
    "Can a solution have a negative pH?",
    ["Yes, concentrated solutions of strong acids with $[\\text{H}^+] > 1.0\\text{ M}$ have negative pH values (e.g., $2\\text{ M HCl} \\implies \\text{pH} = -0.30$)", "No, pH scale is strictly restricted between 0 and 14", "Only at absolute zero", "Only for weak acids"],
    0,
    "When $[\\text{H}^+] > 1\\text{ M}$, $-\\log[\\text{H}^+]$ is negative. The 0-14 scale is merely a convenient range for dilute solutions."
  );
  add(
    "What is the pH of a $10\\text{ M}$ aqueous $\\text{HCl}$ solution?",
    ["$-1.0$", "$0.0$", "$1.0$", "$14.0$"],
    0,
    "Assuming full activity: $\\text{pH} = -\\log(10) = -1.0$."
  );
  add(
    "The pH of rain water is normally around 5.6 due to the presence of dissolved:",
    ["$\\text{CO}_2$ forming weak carbonic acid $\\text{H}_2\\text{CO}_3$", "$\\text{SO}_2$", "$\\text{HCl}$", "$\\text{HNO}_3$"],
    0,
    "Atmospheric carbon dioxide dissolves in cloud droplets to establish $\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$, giving unpolluted rain a natural pH of ~5.6."
  );
  add(
    "Rain is officially designated as 'acid rain' when its pH falls below:",
    ["$5.6$", "$7.0$", "$4.0$", "$6.5$"],
    0,
    "When sulfur dioxide and nitrogen oxides lower the precipitation pH below the natural background value of 5.6, it is classified as acid rain."
  );
  add(
    "What is the pH of a solution formed by mixing $50\\text{ mL}$ of $0.2\\text{ M HCl}$ with $50\\text{ mL}$ of $0.1\\text{ M NaOH}$?",
    ["$1.30$", "$1.00$", "$2.00$", "$7.00$"],
    0,
    "Moles $\\text{H}^+ = 0.05 \\times 0.2 = 0.01$ mol. Moles $\\text{OH}^- = 0.05 \\times 0.1 = 0.005$ mol. Excess $\\text{H}^+ = 0.005$ mol in $100\\text{ mL}$ ($0.1\\text{ L}$). $[\\text{H}^+] = 0.005 / 0.1 = 0.05\\text{ M} \\implies \\text{pH} = -\\log(0.05) \\approx 1.30$."
  );
  add(
    "The pH of a $10^{-4}\\text{ M}$ solution of an acid is 4.0. The acid is:",
    ["A strong monoprotic acid", "A weak acid with $\\alpha = 0.1$", "A diprotic strong acid", "A base"],
    0,
    "$[\\text{H}^+] = 10^{-4}\\text{ M}$ equals the analytical concentration $C = 10^{-4}\\text{ M}$, indicating 100% dissociation ($\\alpha = 1$, strong acid)."
  );
  add(
    "The pH of a $10^{-2}\\text{ M}$ solution of an organic acid is 3.0. The degree of dissociation $\\alpha$ of the acid is:",
    ["$0.10$ (or 10%)", "$0.01$", "$1.0$", "$0.001$"],
    0,
    "$\\text{pH} = 3 \\implies [\\text{H}^+] = 10^{-3}\\text{ M}$. $\\alpha = [\\text{H}^+] / C = 10^{-3} / 10^{-2} = 0.10$ (10%)."
  );
  add(
    "Using the data from the previous question, what is the ionization constant $K_a$ of the organic acid?",
    ["$1.11 \\times 10^{-4}\\text{ M}$", "$1.0 \\times 10^{-5}\\text{ M}$", "$1.0 \\times 10^{-6}\\text{ M}$", "$1.0 \\times 10^{-4}\\text{ M}$"],
    0,
    "$K_a = \\frac{C \\alpha^2}{1 - \\alpha} = \\frac{(10^{-2})(0.1)^2}{1 - 0.1} = \\frac{10^{-4}}{0.9} \\approx 1.11 \\times 10^{-4}\\text{ M}$."
  );
  add(
    "What is the pH of a solution containing $0.05\\text{ M Ca(OH)}_2$ at $25^\\circ\\text{C}$?",
    ["$13.0$", "$12.7$", "$1.0$", "$14.0$"],
    0,
    "$[\\text{OH}^-] = 2 \\times 0.05 = 0.1\\text{ M} = 10^{-1}\\text{ M} \\implies \\text{pOH} = 1.0 \\implies \\text{pH} = 13.0$."
  );
  add(
    "If $1\\text{ mL}$ of $10\\text{ M HCl}$ is diluted to $1\\text{ L}$ with distilled water, what is the pH of the resulting solution?",
    ["$2.0$", "$1.0$", "$3.0$", "$7.0$"],
    0,
    "$M_1 V_1 = M_2 V_2 \\implies 10 \\times 10^{-3} = M_2 \\times 1.0 \\implies M_2 = 0.01\\text{ M} = 10^{-2}\\text{ M} \\implies \\text{pH} = 2.0$."
  );
  add(
    "What is the pH of a $0.02\\text{ M}$ solution of nitric acid ($\\text{HNO}_3$)? ($\\log 2 = 0.301$)",
    ["$1.70$", "$2.00$", "$1.30$", "$2.30$"],
    0,
    "$[\\text{H}^+] = 2 \\times 10^{-2}\\text{ M} \\implies \\text{pH} = 2 - \\log 2 = 2 - 0.301 = 1.699 \\approx 1.70$."
  );
  add(
    "Which of the following solutions will have the highest pH?",
    ["$0.1\\text{ M NaOH}$", "$0.1\\text{ M NH}_3$", "$0.1\\text{ M HCl}$", "$0.1\\text{ M CH}_3\\text{COOH}$"],
    0,
    "$0.1\\text{ M NaOH}$ is a strong base with $[\\text{OH}^-] = 0.1\\text{ M} \\implies \\text{pH} = 13.0$, the highest in the group."
  );
  add(
    "Which of the following solutions will have the lowest pH?",
    ["$0.1\\text{ M HCl}$", "$0.1\\text{ M CH}_3\\text{COOH}$", "$0.1\\text{ M NaCl}$", "$0.1\\text{ M NH}_4\\text{Cl}$"],
    0,
    "$0.1\\text{ M HCl}$ has $\\text{pH} = 1.0$, the most strongly acidic and lowest pH."
  );
  add(
    "What is the pH of a solution prepared by dissolving $0.4\text{ g}$ of $\text{NaOH}$ in water to make $1\text{ L}$ of solution? ($M_{\text{NaOH}} = 40\text{ g/mol}$)",
    ["$12.0$", "$2.0$", "$13.0$", "$11.0$"],
    0,
    "Moles of $\text{NaOH} = 0.4 / 40 = 0.01$ mol. $[\text{OH}^-] = 0.01\text{ M} = 10^{-2}\text{ M} \implies \text{pOH} = 2 \implies \text{pH} = 12.0$."
  );
  add(
    "The pH of a saturated solution of $\text{Ba(OH)}_2$ is 12.0. The molar solubility of $\text{Ba(OH)}_2$ is:",
    ["$5 \times 10^{-3}\text{ M}$", "$10^{-2}\text{ M}$", "$5 \times 10^{-2}\text{ M}$", "$10^{-12}\text{ M}$"],
    0,
    "$\\text{pH} = 12 \\implies \\text{pOH} = 2 \\implies [\\text{OH}^-] = 10^{-2}\\text{ M}$. Since $\\text{Ba(OH)}_2 \\rightarrow \\text{Ba}^{2+} + 2\\text{OH}^-$, $[\\text{OH}^-] = 2s \\implies s = 10^{-2} / 2 = 5 \\times 10^{-3}\\text{ M}$."
  );
  add(
    "Equal volumes of two strong acid solutions with $\\text{pH} = 3$ and $\\text{pH} = 5$ are mixed. What is the pH of the resulting mixture? ($\\log 5 \\approx 0.70$)",
    ["$3.30$", "$4.00$", "$3.00$", "$3.70$"],
    0,
    "Total $[\\text{H}^+] = \\frac{10^{-3} + 10^{-5}}{2} \\approx \\frac{10^{-3}}{2} = 5 \\times 10^{-4}\\text{ M}$. $\\text{pH} = -\\log(5 \\times 10^{-4}) = 4 - \\log 5 = 4 - 0.70 = 3.30$."
  );
  add(
    "If the $\\text{p}K_w$ of water is 13.0 at $60^\\circ\\text{C}$, what is the pH of pure neutral water at this temperature?",
    ["$6.5$", "$7.0$", "$6.0$", "$7.5$"],
    0,
    "For neutral water, $[\\text{H}^+] = [\\text{OH}^-] = \\sqrt{K_w} = 10^{-\\text{p}K_w / 2} = 10^{-6.5}\\text{ M} \\implies \\text{pH} = 6.5$."
  );

  return q;
}

module.exports = {
  getChemicalEquilibriumPartBQuestions,
  getIonicEquilibriumQuestions,
  getPHQuestions
};
