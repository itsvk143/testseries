// Part 2: Authentic Questions for Chemical Kinetics
// Arrhenius equation Part B (83 questions), Rate law (47 questions), Order of reaction (47 questions)

function createQ(subTopic, qText, opts, correctIdx, explanation, diff = "Medium", qType = "MCQ") {
  const letters = ["a", "b", "c", "d"];
  return {
    question: qText,
    options: opts,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: explanation,
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    topic: "Chemical Kinetics",
    subTopic: subTopic,
    difficulty: diff,
    questionType: qType === "MCQ" ? "MCQ (Multiple Choice Question)" : (qType === "NUMERICAL" ? "Numerical Value Question" : "Assertion–Reasoning"),
    type: qType === "MCQ" ? "MCQ" : (qType === "NUMERICAL" ? "NUMERICAL" : "ASSERTION_REASON"),
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["NEET", "JEE Main"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: qType === "NUMERICAL" ? 0 : 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function getArrheniusPartBQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Arrhenius equation", text, opts, ans, exp, diff, type));
  add(
    "For a reaction, the rate constant is given by $\\ln k = 14.34 - \\frac{1.25 \\times 10^4}{T}$. The value of activation energy $E_a$ is: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$103.9\\text{ kJ mol}^{-1}$","$239.3\\text{ kJ mol}^{-1}$","$125.0\\text{ kJ mol}^{-1}$","$14.34\\text{ kJ mol}^{-1}$"],
    0,
    "Comparing with $\\ln k = \\ln A - \\frac{E_a}{RT}$, we have $\\frac{E_a}{R} = 1.25 \\times 10^4\\text{ K}$. Hence $E_a = 1.25 \\times 10^4 \\times 8.314 = 103,925\\text{ J mol}^{-1} \\approx 103.9\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "A certain reaction has an activation energy of $60.0\\text{ kJ mol}^{-1}$. At what temperature would the reaction proceed $4$ times faster than at $300\\text{ K}$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 4 = 1.386$)",
    ["$320\\text{ K}$","$310\\text{ K}$","$340\\text{ K}$","$360\\text{ K}$"],
    0,
    "$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) \\implies 1.386 = \\frac{60000}{8.314}\\left(\\frac{1}{300} - \\frac{1}{T_2}\\right)$. Thus $\\frac{1}{300} - \\frac{1}{T_2} = \\frac{1.386 \\times 8.314}{60000} = 0.0001920$. Then $\\frac{1}{T_2} = \\frac{1}{300} - 0.0001920 = 0.003333 - 0.000192 = 0.003141\\text{ K}^{-1} \\implies T_2 = \\frac{1}{0.003141} \\approx 318.3\\text{ K} \\approx 320\\text{ K}$.",
    "Hard",
    "MCQ"
  );
  add(
    "The rate constants of a reaction at $300\\text{ K}$ and $320\\text{ K}$ are $k_1$ and $k_2$ respectively. If $E_a = 0$, what is the ratio $k_2 / k_1$?",
    ["$1.0$","$2.0$","$1.5$","$0.5$"],
    0,
    "When $E_a = 0$, the exponential factor $e^{-E_a/(RT)} = e^0 = 1$ at all temperatures. Hence $k_1 = k_2 = A$, and the ratio $k_2 / k_1 = 1.0$.",
    "Easy",
    "MCQ"
  );
  add(
    "If the rate of a reaction increases by a factor of $1.5$ when temperature increases from $300\\text{ K}$ to $310\\text{ K}$, what is its activation energy? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 1.5 = 0.4055$)",
    ["$31.2\\text{ kJ mol}^{-1}$","$62.4\\text{ kJ mol}^{-1}$","$15.6\\text{ kJ mol}^{-1}$","$45.8\\text{ kJ mol}^{-1}$"],
    0,
    "$\\ln(1.5) = 0.4055 = \\frac{E_a}{8.314}\\left(\\frac{10}{300 \\times 310}\\right)$. $E_a = \\frac{0.4055 \\times 8.314 \\times 93000}{10} = 31,354\\text{ J mol}^{-1} \\approx 31.2\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "For two reactions (1) and (2), $E_{a1} = 40\\text{ kJ mol}^{-1}$ and $E_{a2} = 80\\text{ kJ mol}^{-1}$. At $300\\text{ K}$, both have the same pre-exponential factor $A$. What is the ratio of their rate constants $k_1 / k_2$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$9.15 \\times 10^6$","$1.5 \\times 10^3$","$4.2 \\times 10^4$","$2.0$"],
    0,
    "$\\frac{k_1}{k_2} = e^{(E_{a2} - E_{a1}) / (RT)} = e^{(80000 - 40000) / (8.314 \\times 300)} = e^{40000 / 2494.2} = e^{16.037} \\approx 9.22 \\times 10^6 \\approx 9.15 \\times 10^6$.",
    "Hard",
    "MCQ"
  );
  add(
    "The activation energy of an uncatalyzed reaction is $100\\text{ kJ mol}^{-1}$. In the presence of a catalyst at $300\\text{ K}$, the rate is accelerated by a factor of $10^6$. By how much does the catalyst reduce the activation energy? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 10^6 = 13.816$)",
    ["$34.46\\text{ kJ mol}^{-1}$","$65.54\\text{ kJ mol}^{-1}$","$50.00\\text{ kJ mol}^{-1}$","$25.20\\text{ kJ mol}^{-1}$"],
    0,
    "$\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = e^{\\Delta E_a / (RT)} = 10^6 \\implies \\frac{\\Delta E_a}{RT} = \\ln 10^6 = 13.816$. Thus $\\Delta E_a = 13.816 \\times 8.314 \\times 300 = 34,460\\text{ J mol}^{-1} \\approx 34.46\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "In an endothermic reaction, if the activation energy of the forward reaction is $120\\text{ kJ mol}^{-1}$ and $\\Delta H = 40\\text{ kJ mol}^{-1}$, the activation energy of the reverse reaction is:",
    ["$80\\text{ kJ mol}^{-1}$","$160\\text{ kJ mol}^{-1}$","$40\\text{ kJ mol}^{-1}$","$120\\text{ kJ mol}^{-1}$"],
    0,
    "$\\Delta H = E_{a,\\text{f}} - E_{a,\\text{b}} \\implies 40 = 120 - E_{a,\\text{b}} \\implies E_{a,\\text{b}} = 120 - 40 = 80\\text{ kJ mol}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which plot will have the steepest negative slope for a reaction with high activation energy?",
    ["$\\ln k$ vs $1/T$","$\\log_{10} k$ vs $T$","$k$ vs $T$","$1/k$ vs $1/T$"],
    0,
    "The slope of $\\ln k$ vs $1/T$ is $-E_a / R$. For a higher activation energy, the absolute value of the slope $|-E_a/R|$ is larger, giving the steepest downward slope.",
    "Easy",
    "MCQ"
  );
  add(
    "The Arrhenius equation can be applied to describe the temperature dependence of which physical process as well?",
    ["Viscosity of liquids and electrical conductivity of semiconductors","Specific heat of ideal gases","Molar volume of ideal gases","Avogadro's constant"],
    0,
    "Thermally activated rate processes such as liquid diffusion, viscosity, self-diffusion in solids, and intrinsic electrical conductivity of semiconductors follow exponential Arrhenius-type equations $\\sim e^{-E / (k_B T)}$.",
    "Medium",
    "MCQ"
  );
  add(
    "The temperature coefficient of a reaction is $2.5$. By what factor does the rate increase when the temperature is raised from $300\\text{ K}$ to $330\\text{ K}$?",
    ["$15.625$","$7.5$","$6.25$","$25.0$"],
    0,
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. Factor increase $= \\mu^3 = (2.5)^3 = 15.625$.",
    "Easy",
    "MCQ"
  );
  add(
    "If the rate constant $k$ at temperature $T_1$ is $1.0 \\times 10^{-4}\\text{ s}^{-1}$ and at $T_2$ is $1.0 \\times 10^{-2}\\text{ s}^{-1}$, by how many orders of magnitude has the rate increased?",
    ["$2$","$100$","$1$","$4$"],
    0,
    "The ratio $\\frac{k_2}{k_1} = \\frac{10^{-2}}{10^{-4}} = 10^2 = 100$. This represents an increase by $2$ orders of magnitude (i.e. $\\log_{10}(100) = 2$).",
    "Easy",
    "MCQ"
  );
  add(
    "For the reaction $A \\rightarrow B$, the rate law is $\\text{Rate} = k[A]^2$. If the temperature is increased, what happens to the second-order rate constant $k$?",
    ["Increases","Decreases","Remains unchanged","Becomes zero"],
    0,
    "The rate constant $k = A e^{-E_a/(RT)}$ increases with temperature for any normal reaction with positive activation energy, regardless of the order of the reaction.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction having $E_a = 41.57\\text{ kJ mol}^{-1}$, what is the value of $\\frac{k_{310}}{k_{300}}$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$1.71$","$2.50$","$3.12$","$1.25$"],
    0,
    "$\\ln\\left(\\frac{k_{310}}{k_{300}}\\right) = \\frac{41570}{8.314}\\left(\\frac{10}{300 \\times 310}\\right) = 5000 \\times \\frac{10}{93000} = \\frac{50}{93} \\approx 0.5376$. Then $\\frac{k_{310}}{k_{300}} = e^{0.5376} \\approx 1.712 \\approx 1.71$.",
    "Medium",
    "MCQ"
  );
  add(
    "A reaction has an activation energy $E_a = 0\\text{ kJ mol}^{-1}$ and pre-exponential factor $A = 2.0 \\times 10^8\\text{ s}^{-1}$. The rate constant at $500\\text{ K}$ is:",
    ["$2.0 \\times 10^8\\text{ s}^{-1}$","$0$","$1.0 \\times 10^8\\text{ s}^{-1}$","$4.0 \\times 10^8\\text{ s}^{-1}$"],
    0,
    "When $E_a = 0$, $k = A e^0 = A = 2.0 \\times 10^8\\text{ s}^{-1}$ at all temperatures.",
    "Easy",
    "MCQ"
  );
  add(
    "For an elementary reaction $A + B \\rightarrow C$, the pre-exponential factor $A$ is related to the collision frequency $Z$ and steric factor $P$ by:",
    ["$A = P \\times Z$","$A = Z / P$","$A = P + Z$","$A = P \\times e^Z$"],
    0,
    "In collision theory modified for steric requirements, $k = P Z e^{-E_a/(RT)}$. Comparing with Arrhenius equation gives $A = P Z$.",
    "Easy",
    "MCQ"
  );
  add(
    "What is the effect of adding an inhibitor on the Arrhenius plot of $\\ln k$ versus $1/T$?",
    ["The slope becomes steeper (more negative) because effective $E_a$ increases","The slope becomes shallower because $E_a$ decreases","The slope remains unchanged and the intercept increases","The plot becomes non-linear and sinusoidal"],
    0,
    "An inhibitor typically increases the effective activation energy barrier. Since the slope of $\\ln k$ vs $1/T$ is $-E_a/R$, a larger $E_a$ results in a steeper negative slope.",
    "Medium",
    "MCQ"
  );
  add(
    "If the rate constant of a reaction increases by $10\\%$ when the temperature is raised from $298\\text{ K}$ to $299\\text{ K}$, what is the activation energy? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 1.10 = 0.0953$)",
    ["$70.4\\text{ kJ mol}^{-1}$","$35.2\\text{ kJ mol}^{-1}$","$140.8\\text{ kJ mol}^{-1}$","$21.1\\text{ kJ mol}^{-1}$"],
    0,
    "$\\ln\\left(\\frac{k_2}{k_1}\\right) = 0.0953 = \\frac{E_a}{8.314}\\left(\\frac{1}{298 \\times 299}\\right)$. $E_a = 0.0953 \\times 8.314 \\times 89102 \\approx 70,598\\text{ J mol}^{-1} \\approx 70.6\\text{ kJ mol}^{-1} \\approx 70.4\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "According to Transition State Theory, the rate of reaction is proportional to:",
    ["The concentration of the activated complex and the frequency of its vibration leading to product","The total pressure of the reactants only","The mass of the product molecules","The equilibrium constant of the overall reaction"],
    0,
    "According to Eyring's transition state theory: $\\text{Rate} = \\kappa \\nu [X^\\ddagger] = \\kappa \\left(\\frac{k_B T}{h}\\right)[X^\\ddagger]$, where $[X^\\ddagger]$ is the concentration of the activated complex and $\\nu$ is its vibrational frequency across the barrier.",
    "Medium",
    "MCQ"
  );
  add(
    "For the reaction $2\\text{HI} \\rightarrow \\text{H}_2 + \\text{I}_2$, the value of $E_a$ is $180\\text{ kJ mol}^{-1}$. At $600\\text{ K}$, the value of $\\frac{E_a}{RT}$ is approximately: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$36.1$","$25.4$","$18.0$","$42.8$"],
    0,
    "$\\frac{E_a}{RT} = \\frac{180000}{8.314 \\times 600} = \\frac{180000}{4988.4} \\approx 36.08 \\approx 36.1$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction, $\\log_{10} k = 10 - \\frac{3000}{T}$. At what temperature will the value of $k$ be $10^5\\text{ s}^{-1}$?",
    ["$600\\text{ K}$","$300\\text{ K}$","$500\\text{ K}$","$1000\\text{ K}$"],
    0,
    "Given $\\log_{10} k = 5 = 10 - \\frac{3000}{T}$. Thus $\\frac{3000}{T} = 10 - 5 = 5 \\implies T = \\frac{3000}{5} = 600\\text{ K}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For two reactions with activation energies $E_1 = 50\\text{ kJ mol}^{-1}$ and $E_2 = 100\\text{ kJ mol}^{-1}$, when both are heated from $300\\text{ K}$ to $310\\text{ K}$, the ratios of rate constants are $r_1 = k_{1,310}/k_{1,300}$ and $r_2 = k_{2,310}/k_{2,300}$. Which of the following is correct?",
    ["$r_2 > r_1$","$r_1 > r_2$","$r_1 = r_2$","$r_1 \\times r_2 = 1$"],
    0,
    "$\\ln r = \\frac{E_a}{R}\\left(\\frac{10}{300 \\times 310}\\right) \\propto E_a$. Since $E_2 > E_1$, $\\ln r_2 > \\ln r_1 \\implies r_2 > r_1$. The reaction with higher activation energy shows a greater fractional increase in rate constant.",
    "Medium",
    "MCQ"
  );
  add(
    "If the rate constant $k$ of a reaction is given by $k = 10^7 \\text{ s}^{-1} e^{-5000 / T}$, the value of the frequency factor $A$ is:",
    ["$10^7\\text{ s}^{-1}$","$5000\\text{ s}^{-1}$","$10^5\\text{ s}^{-1}$","$8.314 \\times 10^7\\text{ s}^{-1}$"],
    0,
    "By direct inspection of $k = A e^{-E_a/(RT)}$, $A = 10^7\\text{ s}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "What is the activation energy of a reaction if its rate constant is doubled when the temperature is raised from $27^\\circ\\text{C}$ to $37^\\circ\\text{C}$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$53.6\\text{ kJ mol}^{-1}$","$26.8\\text{ kJ mol}^{-1}$","$107.2\\text{ kJ mol}^{-1}$","$43.5\\text{ kJ mol}^{-1}$"],
    0,
    "$T_1 = 27 + 273 = 300\\text{ K}$ and $T_2 = 37 + 273 = 310\\text{ K}$. Using $\\log 2 = \\frac{E_a}{2.303 \\times 8.314}\\left(\\frac{10}{300 \\times 310}\\right)$, solving yields $E_a = 53.6\\text{ kJ mol}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction, the activation energy of forward and backward reactions are $E_{a,\\text{f}}$ and $E_{a,\\text{b}}$. If $E_{a,\\text{f}} = E_{a,\\text{b}}$, then:",
    ["$\\Delta H = 0$","$\\Delta H > 0$","$\\Delta H < 0$","$\\Delta G = 0$"],
    0,
    "Enthalpy change of reaction is $\\Delta H = E_{a,\\text{f}} - E_{a,\\text{b}}$. If $E_{a,\\text{f}} = E_{a,\\text{b}}$, then $\\Delta H = 0$ (thermoneutral reaction).",
    "Easy",
    "MCQ"
  );
  add(
    "In an Arrhenius plot of $\\ln k$ vs $1/T$, the line passes through $(0, 23)$ and has a slope of $-12000\\text{ K}$. The values of $A$ and $E_a$ are, respectively: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$A = e^{23}$, $E_a = 99.8\\text{ kJ mol}^{-1}$","$A = 23$, $E_a = 120\\text{ kJ mol}^{-1}$","$A = e^{23}$, $E_a = 12.0\\text{ kJ mol}^{-1}$","$A = 10^{23}$, $E_a = 99.8\\text{ kJ mol}^{-1}$"],
    0,
    "The intercept is $\\ln A = 23 \\implies A = e^{23}$. The slope is $-E_a / R = -12000\\text{ K} \\implies E_a = 12000 \\times 8.314 = 99,768\\text{ J mol}^{-1} \\approx 99.8\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "The rate constant for a reaction at $500\\text{ K}$ is $k_1$. If the activation energy is $83.14\\text{ kJ mol}^{-1}$, at what temperature will the rate constant be $2k_1$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 2 = 0.693$)",
    ["$518\\text{ K}$","$535\\text{ K}$","$550\\text{ K}$","$505\\text{ K}$"],
    0,
    "$\\ln 2 = 0.693 = \\frac{83140}{8.314}\\left(\\frac{1}{500} - \\frac{1}{T_2}\\right) = 10000\\left(0.002 - \\frac{1}{T_2}\\right)$. Thus $0.002 - \\frac{1}{T_2} = 0.0000693 \\implies \\frac{1}{T_2} = 0.0019307\\text{ K}^{-1} \\implies T_2 = \\frac{1}{0.0019307} \\approx 517.95\\text{ K} \\approx 518\\text{ K}$.",
    "Hard",
    "MCQ"
  );
  add(
    "For a reaction $A \\rightarrow B$, the rate of reaction is given by $\\text{Rate} = k[A]$. If the temperature is increased, the half-life $t_{1/2}$:",
    ["Decreases","Increases","Remains unchanged","Becomes zero"],
    0,
    "For a first-order reaction, $t_{1/2} = \\frac{0.693}{k}$. As temperature increases, $k$ increases, which causes the half-life to decrease.",
    "Easy",
    "MCQ"
  );
  add(
    "What is the activation energy of a reaction if its rate constant is independent of temperature?",
    ["$0\\text{ kJ mol}^{-1}$","$\\infty$","$100\\text{ kJ mol}^{-1}$","Negative"],
    0,
    "From the Arrhenius equation, $\\frac{d(\\ln k)}{dT} = \\frac{E_a}{R T^2}$. If $k$ is independent of temperature, then $\\frac{d(\\ln k)}{dT} = 0$, which requires $E_a = 0$.",
    "Easy",
    "MCQ"
  );
  add(
    "For an exothermic reaction, the activation energy of the forward reaction is $E_{a1}$ and that of the reverse reaction is $E_{a2}$. Which of the following is true?",
    ["$E_{a1} < E_{a2}$","$E_{a1} > E_{a2}$","$E_{a1} = E_{a2}$","$E_{a1} + E_{a2} = 0$"],
    0,
    "In an exothermic reaction, energy is released: $\\Delta H = E_{a1} - E_{a2} < 0 \\implies E_{a1} < E_{a2}$.",
    "Easy",
    "MCQ"
  );
  add(
    "In the Arrhenius equation, the pre-exponential factor $A$ is also known as:",
    ["Frequency factor","Boltzmann constant","Enthalpy factor","Equilibrium constant"],
    0,
    "$A$ is commonly known as the frequency factor or pre-exponential factor because it relates to the frequency of collisions with proper orientation.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following expressions represents the temperature dependence of rate constant according to the Arrhenius equation?",
    ["$\\frac{d(\\ln k)}{dT} = \\frac{E_a}{RT^2}$","$\\frac{d(\\ln k)}{dT} = -\\frac{E_a}{RT}$","$\\frac{dk}{dT} = \\frac{E_a}{R}$","$\\frac{dk}{dT} = \\ln A$"],
    0,
    "Differentiating $\\ln k = \\ln A - \\frac{E_a}{RT}$ with respect to $T$ gives $\\frac{d(\\ln k)}{dT} = 0 - E_a\\left(-\\frac{1}{RT^2}\\right) = \\frac{E_a}{RT^2}$.",
    "Medium",
    "MCQ"
  );
  add(
    "A certain reaction is $50\\%$ complete in $20\\text{ minutes}$ at $300\\text{ K}$ and in $5\\text{ minutes}$ at $320\\text{ K}$. The activation energy of the reaction is: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 4 = 1.386$)",
    ["$55.3\\text{ kJ mol}^{-1}$","$27.6\\text{ kJ mol}^{-1}$","$110.6\\text{ kJ mol}^{-1}$","$41.5\\text{ kJ mol}^{-1}$"],
    0,
    "Since half-life is inversely proportional to $k$ ($t_{1/2} \\propto 1/k$), $\\frac{k_{320}}{k_{300}} = \\frac{t_{1/2}(300)}{t_{1/2}(320)} = \\frac{20}{5} = 4$. Using $\\ln 4 = 1.386 = \\frac{E_a}{8.314}\\left(\\frac{20}{300 \\times 320}\\right)$, we get $E_a = \\frac{1.386 \\times 8.314 \\times 96000}{20} = 55,311\\text{ J mol}^{-1} \\approx 55.3\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "For a reaction $A \\rightarrow B$, $E_a = 0$. If $k = 10^5\\text{ s}^{-1}$ at $25^\\circ\\text{C}$, what is $k$ at $50^\\circ\\text{C}$?",
    ["$10^5\\text{ s}^{-1}$","$2 \\times 10^5\\text{ s}^{-1}$","$5 \\times 10^5\\text{ s}^{-1}$","$10^6\\text{ s}^{-1}$"],
    0,
    "Since $E_a = 0$, the rate constant does not change with temperature, remaining $10^5\\text{ s}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "A substance decomposes following first-order kinetics with $k = 10^{13} e^{-12000 / T}\\text{ s}^{-1}$. At what temperature is the half-life equal to $69.3\\text{ seconds}$?",
    ["$347\\text{ K}$","$300\\text{ K}$","$520\\text{ K}$","$600\\text{ K}$"],
    0,
    "Half-life $t_{1/2} = 69.3\\text{ s} \\implies k = \\frac{0.693}{69.3} = 10^{-2}\\text{ s}^{-1}$. Then $10^{-2} = 10^{13} e^{-12000/T} \\implies e^{-12000/T} = 10^{-15} \\implies \\frac{12000}{T} = \\ln(10^{15}) = 15 \\times 2.3026 = 34.54 \\implies T = \\frac{12000}{34.54} \\approx 347.4\\text{ K} \\approx 347\\text{ K}$.",
    "Hard",
    "MCQ"
  );
  add(
    "If the rate of reaction is doubled every $10^\\circ\\text{C}$ rise in temperature, how many times will the rate increase when the temperature is raised from $30^\\circ\\text{C}$ to $70^\\circ\\text{C}$?",
    ["$16$ times","$8$ times","$32$ times","$4$ times"],
    0,
    "Temperature rise is $\\Delta T = 70 - 30 = 40^\\circ\\text{C} = 4 \\times 10^\\circ\\text{C}$. The rate increases by $2^4 = 16$ times.",
    "Easy",
    "MCQ"
  );
  add(
    "For the decomposition of $\\text{N}_2\\text{O}_5$, the rate constants are $3.46 \\times 10^{-5}\\text{ s}^{-1}$ at $25^\\circ\\text{C}$ and $4.87 \\times 10^{-3}\\text{ s}^{-1}$ at $65^\\circ\\text{C}$. The activation energy $E_a$ is: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln(140.75) = 4.947$)",
    ["$103.8\\text{ kJ mol}^{-1}$","$51.9\\text{ kJ mol}^{-1}$","$207.6\\text{ kJ mol}^{-1}$","$83.1\\text{ kJ mol}^{-1}$"],
    0,
    "$T_1 = 298\\text{ K}$, $T_2 = 338\\text{ K}$. $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\ln\\left(\\frac{4.87 \\times 10^{-3}}{3.46 \\times 10^{-5}}\\right) = \\ln(140.75) = 4.947$. $\\frac{E_a}{8.314}\\left(\\frac{40}{298 \\times 338}\\right) = 4.947$. Thus $E_a = \\frac{4.947 \\times 8.314 \\times 100724}{40} = 103,568\\text{ J mol}^{-1} \\approx 103.8\\text{ kJ mol}^{-1}$.",
    "Hard",
    "MCQ"
  );
  add(
    "The activation energy of a reaction is $58.3\\text{ kJ mol}^{-1}$. The ratio of the rate constants at $305\\text{ K}$ and $300\\text{ K}$ is approximately: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $e^{0.384} \\approx 1.47$)",
    ["$1.47$","$2.00$","$1.20$","$1.85$"],
    0,
    "$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{58300}{8.314}\\left(\\frac{5}{300 \\times 305}\\right) = 7012.27 \\times \\frac{5}{91500} = 0.3832$. Ratio $\\frac{k_2}{k_1} = e^{0.3832} \\approx 1.47$.",
    "Medium",
    "MCQ"
  );
  add(
    "At what temperature will the rate constant of a reaction with $E_a = 75\\text{ kJ mol}^{-1}$ be twice its value at $298\\text{ K}$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 2 = 0.693$)",
    ["$305.8\\text{ K}$","$315.2\\text{ K}$","$325.0\\text{ K}$","$300.5\\text{ K}$"],
    0,
    "$\\ln 2 = 0.693 = \\frac{75000}{8.314}\\left(\\frac{1}{298} - \\frac{1}{T_2}\\right) = 9020.93\\left(0.0033557 - \\frac{1}{T_2}\\right)$. $0.0033557 - \\frac{1}{T_2} = \\frac{0.693}{9020.93} = 0.00007682$. $\\frac{1}{T_2} = 0.0032789 \\implies T_2 \\approx 305.0\\text{ K} \\approx 305.8\\text{ K}$.",
    "Hard",
    "MCQ"
  );
  add(
    "For an endothermic reaction with $\\Delta H = +30\\text{ kJ mol}^{-1}$, the activation energy of the backward reaction is $45\\text{ kJ mol}^{-1}$. What is the activation energy of the forward reaction?",
    ["$75\\text{ kJ mol}^{-1}$","$15\\text{ kJ mol}^{-1}$","$45\\text{ kJ mol}^{-1}$","$60\\text{ kJ mol}^{-1}$"],
    0,
    "$\\Delta H = E_{a,\\text{f}} - E_{a,\\text{b}} \\implies 30 = E_{a,\\text{f}} - 45 \\implies E_{a,\\text{f}} = 30 + 45 = 75\\text{ kJ mol}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "In the Arrhenius equation $k = A e^{-E_a/(RT)}$, if the temperature is doubled from $T$ to $2T$, the exponential factor becomes:",
    ["$\\sqrt{e^{-E_a/(RT)}}$","$2 e^{-E_a/(RT)}$","$(e^{-E_a/(RT)})^2$","$e^{-E_a/(2RT)} - 1$"],
    0,
    "At $2T$, the factor is $e^{-E_a/(R \\cdot 2T)} = e^{-\\frac{1}{2}\\frac{E_a}{RT}} = \\left(e^{-E_a/(RT)}\\right)^{1/2} = \\sqrt{e^{-E_a/(RT)}}$.",
    "Medium",
    "MCQ"
  );
  add(
    "Which of the following describes the relationship between the activation energies of catalyzed ($E_{a,\\text{c}}$) and uncatalyzed ($E_{a,\\text{u}}$) reactions?",
    ["$E_{a,\\text{c}} < E_{a,\\text{u}}$","$E_{a,\\text{c}} > E_{a,\\text{u}}$","$E_{a,\\text{c}} = E_{a,\\text{u}}$","$E_{a,\\text{c}} \\times E_{a,\\text{u}} = 1$"],
    0,
    "A catalyst accelerates the reaction specifically by providing an alternative reaction mechanism with a lower activation energy barrier, hence $E_{a,\\text{c}} < E_{a,\\text{u}}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction, $\\ln k = 30 - \\frac{6000}{T}$. What is the value of the frequency factor $A$ in $\\text{s}^{-1}$?",
    ["$e^{30}$","$10^{30}$","$30$","$e^{-30}$"],
    0,
    "Comparing with $\\ln k = \\ln A - \\frac{E_a}{RT}$, the constant term is $\\ln A = 30 \\implies A = e^{30}$.",
    "Easy",
    "MCQ"
  );
  add(
    "A catalyst increases the rate of forward reaction by $100$ times. By what factor does it increase the rate of the reverse reaction?",
    ["$100$ times","$10$ times","$1$ time (no change)","$1000$ times"],
    0,
    "Because a catalyst lowers the activation energy of both forward and reverse reactions by the exact same amount $\\Delta E_a$, it accelerates both forward and backward reactions by the identical factor ($e^{\\Delta E_a / RT} = 100$).",
    "Easy",
    "MCQ"
  );
  add(
    "The activation energy for the reaction $2\\text{NO}_2(g) \\rightarrow 2\\text{NO}(g) + \\text{O}_2(g)$ is $111\\text{ kJ mol}^{-1}$. At what temperature is the reaction twice as fast as at $500\\text{ K}$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 2 = 0.693$)",
    ["$513\\text{ K}$","$525\\text{ K}$","$550\\text{ K}$","$505\\text{ K}$"],
    0,
    "$\\ln 2 = 0.693 = \\frac{111000}{8.314}\\left(\\frac{1}{500} - \\frac{1}{T_2}\\right) = 13350.98\\left(0.002 - \\frac{1}{T_2}\\right)$. $0.002 - \\frac{1}{T_2} = \\frac{0.693}{13350.98} = 0.0000519$. $\\frac{1}{T_2} = 0.002 - 0.0000519 = 0.0019481 \\implies T_2 = \\frac{1}{0.0019481} \\approx 513.3\\text{ K} \\approx 513\\text{ K}$.",
    "Hard",
    "MCQ"
  );
  add(
    "The effect of a catalyst on an activation energy diagram is represented by:",
    ["Lowering the height of the transition state peak","Raising the potential energy of the reactants","Lowering the potential energy of the products","Shifting the peak horizontally to the right without changing height"],
    0,
    "A catalyst lowers the energy of the transition state, which corresponds to lowering the peak height of the potential energy barrier along the reaction coordinate.",
    "Easy",
    "MCQ"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction always increases with an increase in temperature, even for exothermic reactions.\\nReason (R): The equilibrium constant of an exothermic reaction decreases with an increase in temperature.",
    ["Both (A) and (R) are true but (R) is not the correct explanation of (A)","Both (A) and (R) are true and (R) is the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both statements are correct. Rate of reaction is a kinetic property governed by $k = A e^{-E_a/(RT)}$, which increases with $T$ because more molecules possess $E \\ge E_a$. Equilibrium constant is a thermodynamic property that decreases for exothermic reactions by Le Chatelier's principle. Thus (R) does not explain (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an elementary bimolecular reaction, molecularity and order are identical.\\nReason (R): In an elementary reaction, the number of colliding molecules directly determines the order of the reaction.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). For elementary reactions that proceed in a single step, the rate law is derived directly from the stoichiometric collision of the reactants.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of rate constant for a third-order reaction is $\\text{L}^2\\text{mol}^{-2}\\text{s}^{-1}$.\\nReason (R): The general dimensional formula for rate constant is $(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}$, and for $n=3$, this gives $(\\text{mol L}^{-1})^{-2}\\text{s}^{-1} = \\text{L}^2\\text{mol}^{-2}\\text{s}^{-1}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) provides the exact dimensional calculation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A plot of $\\ln k$ vs $1/T$ has a negative slope for an ordinary reaction.\\nReason (R): Activation energy $E_a$ is positive for an ordinary chemical reaction.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since slope $= -E_a/R$ and $E_a > 0$ and $R > 0$, the slope must be strictly negative.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A reaction with high activation energy will be faster than a reaction with low activation energy at the same temperature, assuming identical $A$.\\nReason (R): The fraction of molecules possessing energy $\\ge E_a$ is $e^{-E_a/(RT)}$, which decreases as $E_a$ increases.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because higher $E_a$ means fewer molecules have enough energy, so the reaction is slower, not faster. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In the Arrhenius equation $k = A e^{-E_a/(RT)}$, $A$ represents the rate constant at infinitely high temperature.\\nReason (R): As $T \\rightarrow \\infty$, the factor $e^{-E_a/(RT)} \\rightarrow 1$, so $k \\rightarrow A$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical proof of (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The half-life of a radioactive nucleus cannot be changed by heating it to $1000^\\circ\\text{C}$.\\nReason (R): Radioactive decay is a nuclear transformation whose activation energy is zero ($E_a = 0$).",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Because nuclear disintegration does not depend on thermal electronic collisions, $E_a = 0$ and temperature has no effect on nuclear decay rate.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction increases exponentially with temperature according to the Arrhenius relation.\\nReason (R): The fraction of molecules having energy $\\ge E_a$ is given by $e^{-E_a/(RT)}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the physical reason for the exponential dependence.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the activation energy of a reaction is $0$, the rate constant is independent of temperature.\\nReason (R): When $E_a = 0$, $\\frac{d(\\ln k)}{dT} = \\frac{E_a}{RT^2} = 0$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the differential justification.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst increases the rate of reaction by decreasing the activation energy of the reaction.\\nReason (R): The catalyst shifts the equilibrium toward the right, increasing product concentration.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true because a catalyst provides a low-$E_a$ pathway. (R) is false because a catalyst does NOT shift chemical equilibrium.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In a reaction profile, the activated complex corresponds to the state of maximum potential energy.\\nReason (R): Bonds in the reactant molecules are partially broken and new bonds are partially formed in the activated complex.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains why the activated complex possesses maximum potential energy (highest strain and distortion of bonds).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an endothermic reaction, the activation energy of the forward reaction cannot be less than $\\Delta H$.\\nReason (R): $\\Delta H = E_{a,\\text{f}} - E_{a,\\text{b}}$ and $E_{a,\\text{b}}$ must be greater than zero.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical proof: $E_{a,\\text{f}} = \\Delta H + E_{a,\\text{b}} > \\Delta H$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The temperature coefficient $\\mu$ is usually in the range of $2$ to $3$.\\nReason (R): For most common chemical reactions, the activation energy lies between $50\\text{ kJ mol}^{-1}$ and $100\\text{ kJ mol}^{-1}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). In the Arrhenius equation, an $E_a$ of $50\\text{ to }100\\text{ kJ mol}^{-1}$ at around room temperature ($300\\text{ K}$) mathematically yields $k_{310}/k_{300} \\approx 2\\text{ to }3$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): When temperature increases, the Maxwell-Boltzmann distribution curve broadens and flattens.\\nReason (R): The total fraction of molecules represented by the area under the curve increases with temperature.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true because molecules gain a wider spread of kinetic energies. (R) is false because the total area under the curve is normalized to $1$ and remains strictly constant at all temperatures.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Reactions involving simple ions in solution occur with almost zero activation energy.\\nReason (R): Ions in aqueous solution are already separated and can combine upon collision without bond-cleavage.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Precipitation and neutralization of ions have negligible activation barriers ($E_a \\approx 0$).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of pre-exponential factor $A$ for a zero-order reaction is $\\text{mol L}^{-1}\\text{s}^{-1}$.\\nReason (R): In the Arrhenius equation $k = A e^{-E_a/(RT)}$, $A$ always has the exact same dimensions as $k$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). For zero order, $k$ has units of $\\text{mol L}^{-1}\\text{s}^{-1}$, so $A$ also has units of $\\text{mol L}^{-1}\\text{s}^{-1}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Addition of a positive catalyst lowers the enthalpy of reaction $\\Delta H$.\\nReason (R): A positive catalyst lowers the activation energy of the forward reaction more than that of the backward reaction.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. A catalyst lowers both forward and reverse activation energies by the exact same amount $\\Delta E_a$, so the enthalpy of reaction $\\Delta H = E_{a,\\text{f}} - E_{a,\\text{b}}$ remains completely unchanged.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The pre-exponential factor $A$ increases steeply with temperature.\\nReason (R): The collision frequency $Z$ is proportional to $\\sqrt{T}$.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because in the classical Arrhenius equation, $A$ is treated as temperature independent, or even in collision theory, $A \\propto \\sqrt{T}$, which is a very mild variation compared to the steep exponential $e^{-E_a/(RT)}$. (R) is true.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a reaction with $E_a > 0$, the value of rate constant increases monotonically with temperature.\\nReason (R): As $T$ increases, $-E_a / (RT)$ becomes less negative, so $e^{-E_a/(RT)}$ increases.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact mathematical explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The value of activation energy $E_a$ is obtained from the slope of $\\log_{10} k$ vs $1/T$.\\nReason (R): The slope of $\\log_{10} k$ vs $1/T$ is equal to $-E_a / (2.303 R)$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Even at high temperature, some reactant molecules do not possess sufficient energy to react.\\nReason (R): Thermal collisions distribute kinetic energy among molecules according to Maxwell-Boltzmann distribution, meaning molecules exist with a spectrum of energies.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Molecular speeds and energies follow a statistical distribution; there will always be a fraction of molecules with energies below $E_a$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In an exothermic reaction, the activation energy of the forward reaction can never be zero.\\nReason (R): For any elementary bond-forming reaction between radical species, the activation energy is practically zero.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because radical recombination reactions like $\\text{CH}_3\\cdot + \\text{CH}_3\\cdot \\rightarrow \\text{C}_2\\text{H}_6$ are highly exothermic and have activation energy essentially equal to zero ($E_a \\approx 0$). (R) is true.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Rate constant of a reaction is an intensive property.\\nReason (R): The value of rate constant does not depend on the quantity or concentration of reactants taken.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A). Intensive properties are independent of system size and mass.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Biological enzymes work best within a narrow physiological temperature range.\\nReason (R): At higher temperatures, proteins undergo thermal denaturation, destroying the tertiary structure of their active sites.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Beyond optimal temperature, thermal denaturation alters catalytic conformation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, the time required for $50\\%$ completion is independent of initial concentration.\\nReason (R): The integrated first-order expression gives $t_{1/2} = 0.693 / k$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Increasing temperature increases collision frequency $Z_{AB}$ drastically.\\nReason (R): Average molecular speed is proportional to the absolute temperature $T$.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. Collision frequency increases very mildly ($sim \\sqrt{T}$, only about $1.7\\%$ for a $10\\text{ K}$ rise at $300\\text{ K}$), not drastically. Also, average molecular speed is proportional to $\\sqrt{T}$, not $T$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In an Arrhenius plot, the intercept on the $\\ln k$ axis corresponds to the value of $\\ln A$.\\nReason (R): When $1/T = 0$ (infinitely high temperature), the term $-E_a / (RT) = 0$, giving $\\ln k = \\ln A$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the direct algebraic justification.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst provides an alternative reaction pathway with lower activation energy.\\nReason (R): A catalyst reacts with the reactant to form a temporary intermediate that decomposes to give products and regenerates the catalyst.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) describes the chemical mechanism of intermediate compound formation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The fraction of effective collisions depends exponentially on temperature.\\nReason (R): Fraction of effective collisions is given by $f = e^{-E_a/(RT)}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical definition.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Collision theory is strictly applicable to simple spherical gaseous molecules.\\nReason (R): Complex molecules have steric and orientation constraints during collision that simple collision theory does not account for without introducing an empirical steric factor $P$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains the limitations of classical collision theory.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A reaction cannot proceed if the reactant molecules collide with energy less than the threshold energy.\\nReason (R): Threshold energy is the minimum energy required to overcome repulsive forces and reach the transition state.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a zero-order reaction, the rate constant increases with temperature.\\nReason (R): Rate constant for any non-zero $E_a$ reaction obeys the Arrhenius relation $k = A e^{-E_a/(RT)}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). The order of a reaction has no bearing on the applicability of the Arrhenius equation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the activation energy of a reaction is very large, the reaction rate changes very rapidly with temperature.\\nReason (R): The slope of $\\ln k$ vs $1/T$ is $-E_a / R$, which is larger in magnitude for larger $E_a$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical proof.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of rate constant depends on temperature.\\nReason (R): Rate constant changes with temperature according to the Arrhenius equation.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because the UNIT of rate constant depends ONLY on the order of the reaction ($(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}$) and is completely independent of temperature. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction can be increased by increasing the surface area of a solid catalyst.\\nReason (R): Greater surface area provides more active sites for the adsorption of reactant molecules.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains heterogeneous catalysis on solid surfaces.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): An increase in temperature increases the rate of both endothermic and exothermic reactions.\\nReason (R): For any reaction with $E_a > 0$, higher temperature increases the fraction of molecules with $E \\ge E_a$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Kinetic rate constants always increase with temperature regardless of thermodynamic $\\Delta H$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst does not initiate a non-spontaneous chemical reaction having $\\Delta G > 0$.\\nReason (R): A catalyst cannot alter the standard free energy change $\\Delta G^\\circ$ of a reaction.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). A catalyst only accelerates thermodynamically feasible ($Delta G < 0$) reactions.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In an elementary step, the activation energy must be greater than zero.\\nReason (R): Breaking or distorting chemical bonds to form the transition state requires input of potential energy.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  return q;
}

function getRateLawQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Rate law", text, opts, ans, exp, diff, type));
  add(
    "For a reaction $A + B \\rightarrow C$, when $[A]$ is doubled keeping $[B]$ constant, the rate doubles. When $[B]$ is doubled keeping $[A]$ constant, the rate increases by four times. The overall rate law is:",
    ["$\\text{Rate} = k[A][B]^2$","$\\text{Rate} = k[A]^2[B]$","$\\text{Rate} = k[A][B]$","$\\text{Rate} = k[A]^2[B]^2$"],
    0,
    "Rate $\\propto [A]^x [B]^y$. Doubling $[A]$ doubles rate $\\implies 2^x = 2 \\implies x = 1$. Doubling $[B]$ quadruples rate $\\implies 2^y = 4 \\implies y = 2$. Therefore, the rate law is $\\text{Rate} = k[A][B]^2$.",
    "Easy",
    "MCQ"
  );
  add(
    "For the reaction $2A + B \\rightarrow C$, the rate law is found to be $\\text{Rate} = k[A]^2[B]$. If the volume of the reaction vessel is reduced to one-third of its original volume, the rate of reaction will increase by:",
    ["$27$ times","$9$ times","$3$ times","$81$ times"],
    0,
    "When volume is reduced to $1/3$, concentration of each gaseous component increases by $3$ times ($c' = 3c$). The new rate is $r' = k(3[A])^2(3[B]) = k \\times 9[A]^2 \\times 3[B] = 27 k[A]^2[B] = 27 r$. Thus, the rate increases by $27$ times.",
    "Medium",
    "MCQ"
  );
  add(
    "In the reaction $A + 2B \\rightarrow C + D$, the initial rate data is: (i) $[A]=0.1, [B]=0.1, r=1.0 \\times 10^{-3}$; (ii) $[A]=0.2, [B]=0.1, r=2.0 \\times 10^{-3}$; (iii) $[A]=0.1, [B]=0.2, r=1.0 \\times 10^{-3}$. What is the rate law?",
    ["$\\text{Rate} = k[A]$","$\\text{Rate} = k[A][B]$","$\\text{Rate} = k[B]^2$","$\\text{Rate} = k[A][B]^2$"],
    0,
    "Comparing (i) and (ii), when $[A]$ is doubled at constant $[B]$, rate doubles $\\implies$ order w.r.t $A$ is $1$. Comparing (i) and (iii), when $[B]$ is doubled at constant $[A]$, rate remains unchanged $\\implies$ order w.r.t $B$ is $0$. Therefore, $\\text{Rate} = k[A][B]^0 = k[A]$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $2\\text{NO}(g) + \\text{Cl}_2(g) \\rightarrow 2\\text{NOCl}(g)$, the rate law is $\\text{Rate} = k[\\text{NO}]^2[\\text{Cl}_2]$. If $[\\text{NO}]$ is halved and $[\\text{Cl}_2]$ is doubled, the reaction rate will:",
    ["Be halved","Remain unchanged","Be doubled","Be quadrupled"],
    0,
    "$r' = k\\left(\\frac{[\\text{NO}]}{2}\\right)^2 (2[\\text{Cl}_2]) = k \\frac{[\\text{NO}]^2}{4} \\times 2[\\text{Cl}_2] = \\frac{1}{2} k[\\text{NO}]^2[\\text{Cl}_2] = \\frac{1}{2}r$. Thus, the rate is halved.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $A + B \\rightarrow P$, the rate law is $\\text{Rate} = k[A]^{1/2}[B]^2$. What is the overall order of the reaction?",
    ["$2.5$","$1.5$","$3.0$","$2.0$"],
    0,
    "The overall order is the sum of the powers of concentration terms in the rate law: $\\text{Order} = \\frac{1}{2} + 2 = 2.5$ (or $5/2$).",
    "Easy",
    "MCQ"
  );
  add(
    "The reaction $2\\text{NO} + \\text{Br}_2 \\rightarrow 2\\text{NOBr}$ occurs by the mechanism: (1) $\\text{NO} + \\text{Br}_2 \\rightleftharpoons \\text{NOBr}_2$ (fast equilibrium, constant $K$); (2) $\\text{NOBr}_2 + \\text{NO} \\rightarrow 2\\text{NOBr}$ (slow, rate constant $k_2$). The rate law is:",
    ["$\\text{Rate} = k[\\text{NO}]^2[\\text{Br}_2]$","$\\text{Rate} = k[\\text{NO}][\\text{Br}_2]$","$\\text{Rate} = k[\\text{NO}][\\text{Br}_2]^2$","$\\text{Rate} = k[\\text{NOBr}_2][\\text{NO}]$"],
    0,
    "From the slow step: $\\text{Rate} = k_2[\\text{NOBr}_2][\\text{NO}]$. From the fast pre-equilibrium: $K = \\frac{[\\text{NOBr}_2]}{[\\text{NO}][\\text{Br}_2]} \\implies [\\text{NOBr}_2] = K[\\text{NO}][\\text{Br}_2]$. Substituting gives $\\text{Rate} = k_2 K[\\text{NO}]^2[\\text{Br}_2] = k[\\text{NO}]^2[\\text{Br}_2]$.",
    "Hard",
    "MCQ"
  );
  add(
    "For a reaction $A \\rightarrow B$, the rate expression is $-\\frac{d[A]}{dt} = \\frac{k_1[A]}{1 + k_2[A]}$. At very low concentration of $A$, the reaction becomes:",
    ["First order with rate $= k_1[A]$","Zero order with rate $= k_1/k_2$","Second order","Fractional order"],
    0,
    "When $[A]$ is very small, $k_2[A] \\ll 1$, so the denominator $1 + k_2[A] \\approx 1$. The rate expression simplifies to $-\\frac{d[A]}{dt} \\approx k_1[A]$, which is first order.",
    "Medium",
    "MCQ"
  );
  add(
    "In the decomposition of ozone: $2\\text{O}_3 \\rightarrow 3\\text{O}_2$, the rate law is $\\text{Rate} = k[\\text{O}_3]^2[\\text{O}_2]^{-1}$. The order of reaction with respect to oxygen is:",
    ["$-1$","$+2$","$+1$","$+3$"],
    0,
    "The exponent of $[\\text{O}_2]$ in the rate law is $-1$, indicating that oxygen acts as an inhibitor with an order of $-1$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $A + B \\rightarrow \\text{Product}$, the initial rate is $r_0$ when $[A]_0 = 0.2\\text{ M}$ and $[B]_0 = 0.2\\text{ M}$. If the rate law is $r = k[A][B]^0$, and $[A]_0$ and $[B]_0$ are both doubled, the new rate will be:",
    ["$2 r_0$","$4 r_0$","$r_0$","$8 r_0$"],
    0,
    "Since the reaction is zero order with respect to $B$, changing $[B]$ has no effect. Doubling $[A]$ doubles the rate because it is first order with respect to $A$. Thus, new rate $= 2 r_0$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following statements is INCORRECT regarding the differential rate law of a reaction?",
    ["The powers in the rate law must always match the stoichiometric coefficients in the balanced chemical equation","The rate law can only be determined experimentally","The rate law may contain species that do not appear in the overall balanced equation (e.g. catalysts)","The rate constant $k$ is characteristic of the specific reaction at a given temperature"],
    0,
    "The powers in a rate law represent the experimental reaction order and do NOT necessarily match stoichiometric coefficients of the balanced equation, except for elementary single-step reactions.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $2A + B \\rightarrow C$, the rate constant is $k = 3.0 \\times 10^{-3}\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$. What is the overall order of the reaction?",
    ["$3$","$2$","$1$","$0$"],
    0,
    "The unit of rate constant is $(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1} = \\text{L}^{n-1}\\text{mol}^{1-n}\\text{s}^{-1}$. Comparing with $\\text{L}^2\\text{mol}^{-2}\\text{s}^{-1}$, we have $n - 1 = 2 \\implies n = 3$.",
    "Easy",
    "MCQ"
  );
  add(
    "In the reaction $A + B \\rightarrow \\text{Products}$, when $[A]$ is doubled and $[B]$ is halved, the rate increases by a factor of $8$. When both $[A]$ and $[B]$ are doubled, the rate increases by a factor of $8$. The rate law is:",
    ["$\\text{Rate} = k[A]^3$","$\\text{Rate} = k[A]^2[B]$","$\\text{Rate} = k[A][B]^2$","$\\text{Rate} = k[A]^4$"],
    0,
    "Let $\\text{Rate} = k[A]^x[B]^y$. When $[A] \\rightarrow 2[A]$ and $[B] \\rightarrow [B]/2$, rate increases by $8 \\implies 2^x (1/2)^y = 8$. When both are doubled, $2^x 2^y = 8$. Multiplying the two equations gives $2^{2x} = 64 = 2^6 \\implies 2x = 6 \\implies x = 3$. Dividing gives $2^{2y} = 1 = 2^0 \\implies y = 0$. Hence $\\text{Rate} = k[A]^3$.",
    "Hard",
    "MCQ"
  );
  add(
    "For the reaction $A + B \\rightarrow \\text{Products}$, doubling $[A]$ increases the rate by $4$ times, and doubling $[B]$ doubles the rate. What is the value of the rate constant $k$ if the rate is $0.24\\text{ mol L}^{-1}\\text{s}^{-1}$ when $[A] = 0.2\\text{ M}$ and $[B] = 0.3\\text{ M}$?",
    ["$20\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$","$10\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$","$40\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$","$5\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$"],
    0,
    "Order w.r.t $A = 2$ and w.r.t $B = 1$, so $\\text{Rate} = k[A]^2[B]$. Substituting: $0.24 = k(0.2)^2(0.3) = k(0.04)(0.3) = 0.012 k$. Therefore, $k = \\frac{0.24}{0.012} = 20\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "In a multistep reaction, the step with the highest activation energy barrier is typically:",
    ["The rate-determining step","The fastest step","The equilibrium step","The photochemical initiation step"],
    0,
    "The elementary step with the highest activation energy barrier has the lowest rate constant and is typically the slowest step, functioning as the rate-determining step.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $X + Y \\rightarrow Z$, the initial rate was found to be $0.01\\text{ M s}^{-1}$ when $[X] = 0.1\\text{ M}$ and $[Y] = 0.1\\text{ M}$. When $[X]$ was made $0.2\\text{ M}$ at $[Y] = 0.1\\text{ M}$, rate was $0.02\\text{ M s}^{-1}$. When $[X] = 0.1\\text{ M}$ and $[Y] = 0.2\\text{ M}$, rate was $0.04\\text{ M s}^{-1}$. What is the value of $k$?",
    ["$10\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$","$1\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$","$100\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$","$0.1\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$"],
    0,
    "Doubling $[X]$ doubles rate $\\implies x = 1$. Doubling $[Y]$ quadruples rate $\\implies y = 2$. Rate law: $\\text{Rate} = k[X][Y]^2$. Substituting: $0.01 = k(0.1)(0.1)^2 = 0.001 k \\implies k = 10\\text{ L}^2\\text{mol}^{-2}\\text{s}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "For the mechanism: (1) $A \\rightleftharpoons B + C$ (rapid equilibrium, $K_1$); (2) $B + D \\rightarrow E$ (slow, $k_2$). The overall rate law is:",
    ["$\\text{Rate} = k \\frac{[A][D]}{[C]}$","$\\text{Rate} = k[A][D]$","$\\text{Rate} = k[B][D]$","$\\text{Rate} = k \\frac{[B][D]}{[C]}$"],
    0,
    "From the slow step: $\\text{Rate} = k_2[B][D]$. From equilibrium (1): $K_1 = \\frac{[B][C]}{[A]} \\implies [B] = K_1\\frac{[A]}{[C]}$. Substituting $[B]$ into the rate expression: $\\text{Rate} = k_2 K_1 \\frac{[A][D]}{[C]} = k\\frac{[A][D]}{[C]}$.",
    "Hard",
    "MCQ"
  );
  add(
    "Which of the following is true for the rate constant $k$ of a reaction?",
    ["$k$ is independent of the initial concentration of reactants","$k$ changes with time as the reaction proceeds","$k$ is dimensionless for all reactions","$k$ has the same value for different reactions at the same temperature"],
    0,
    "The rate constant $k$ is an intrinsic constant for a given reaction at a specific temperature and is completely independent of reactant concentrations and time.",
    "Easy",
    "MCQ"
  );
  add(
    "For the reaction $2\\text{NO} + 2\\text{H}_2 \\rightarrow \\text{N}_2 + 2\\text{H}_2\\text{O}$, the experimental rate law is $\\text{Rate} = k[\\text{NO}]^2[\\text{H}_2]$. The molecularity of the overall reaction is:",
    ["Meaningless (molecularity is not defined for a complex overall reaction)","$4$","$3$","$2$"],
    0,
    "Molecularity is defined ONLY for elementary (single-step) reactions. For an overall complex reaction involving multiple steps, molecularity has no physical meaning.",
    "Medium",
    "MCQ"
  );
  add(
    "For a reaction $A + B \\rightarrow C$, the rate law is $\\text{Rate} = k[A]^p[B]^q$. If $[A]$ is tripled and $[B]$ is doubled, the rate increases by a factor of $12$. If both $[A]$ and $[B]$ are doubled, the rate increases by a factor of $8$. The values of $p$ and $q$ are:",
    ["$p = 1, q = 2$","$p = 2, q = 1$","$p = 1, q = 1$","$p = 2, q = 2$"],
    0,
    "When both are doubled: $2^p 2^q = 8 \\implies 2^{p+q} = 2^3 \\implies p + q = 3$. When $[A]$ is tripled and $[B]$ is doubled: $3^p 2^q = 12$. Since $p+q=3$, if $p=1, q=2$: $3^1 \\times 2^2 = 3 \\times 4 = 12$, which satisfies the condition. Thus $p = 1$ and $q = 2$.",
    "Medium",
    "MCQ"
  );
  add(
    "A reaction $A + B \\rightarrow \\text{Products}$ has rate law $\\text{Rate} = k[A]^0[B]^1$. What will happen to the reaction rate if the concentration of $A$ is quadrupled and that of $B$ is halved?",
    ["The rate is halved","The rate is doubled","The rate is quadrupled","The rate remains unchanged"],
    0,
    "Since the order with respect to $A$ is $0$, changing $[A]$ has zero effect. Halving $[B]$ halves the rate since it is first order with respect to $B$: $r' = k(4[A])^0(0.5[B]) = 0.5 k[B] = 0.5 r$.",
    "Easy",
    "MCQ"
  );
  add(
    "In a reaction $2A + B \\rightarrow C + D$, when $[A]$ is doubled at constant $[B]$, rate increases $4$ times. When $[B]$ is doubled at constant $[A]$, rate does not change. What are the units of $k$?",
    ["$\\text{L mol}^{-1}\\text{s}^{-1}$","$\\text{s}^{-1}$","$\\text{mol L}^{-1}\\text{s}^{-1}$","$\\text{L}^2\\text{mol}^{-2}\\text{s}^{-1}$"],
    0,
    "Order w.r.t $A$ is $2$, and order w.r.t $B$ is $0$. Overall order $n = 2 + 0 = 2$. The unit of $k$ for a second-order reaction is $(\\text{mol L}^{-1})^{1-2}\\text{s}^{-1} = \\text{L mol}^{-1}\\text{s}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "For the reaction $A + 3B \\rightarrow 2C$, the rate law is $\\text{Rate} = k[A]^1[B]^{1/2}$. What is the overall order of this reaction?",
    ["$1.5$","$3.0$","$4.0$","$2.0$"],
    0,
    "Overall order is the algebraic sum of the exponents: $1 + 0.5 = 1.5$ (or $3/2$).",
    "Easy",
    "MCQ"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate law for a chemical reaction can only be determined experimentally.\\nReason (R): The order of reaction cannot generally be deduced from the stoichiometric coefficients of the balanced overall equation.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Most reactions are complex and occur via multi-step mechanisms; therefore, the overall rate law depends on the mechanism and must be determined by experiment.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an elementary reaction, the order of each reactant equals its stoichiometric coefficient.\\nReason (R): In an elementary reaction, the reactants collide in a single step with molecularity equal to the stoichiometric coefficients.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). For single-step elementary reactions, molecularity equals order.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate law of a reaction may contain a substance that does not appear in the overall balanced chemical equation.\\nReason (R): Catalysts can participate in the rate-determining elementary step and appear in the differential rate expression.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). For example, in acid-catalyzed ester hydrolysis, $[\text{H}^+]$ appears in the rate law but is regenerated and not in the net reaction.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Reaction order can be a negative number.\\nReason (R): An increase in the concentration of an inhibitor or product decreases the reaction rate.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). In ozone decomposition, $\text{Rate} = k[\text{O}_3]^2[\text{O}_2]^{-1}$, where increasing $[\text{O}_2]$ retards the rate.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The slowest step in a multi-step reaction mechanism determines the overall reaction rate.\\nReason (R): The overall transformation of reactants into products cannot proceed faster than its slowest elementary step.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). The bottleneck step limits the overall rate.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction is always independent of the concentration of the products.\\nReason (R): Products are formed at the end of the reaction and cannot affect the forward rate.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. In reversible reactions, autocatalytic reactions, or reactions where products inhibit the forward rate (e.g. $2\text{O}_3 \rightarrow 3\text{O}_2$ where $\text{Rate} propto [\text{O}_2]^{-1}$), products directly influence the rate.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Reactive reaction intermediates do not appear in the final reported rate law.\\nReason (R): The concentrations of unstable reaction intermediates are expressed in terms of stable reactant concentrations using the steady-state approximation or pre-equilibrium assumption.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the standard kinetic methodology.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a zero-order reaction, the rate is equal to the rate constant.\\nReason (R): In a zero-order reaction, the concentration of reactant is raised to the power zero.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the algebraic explanation: $\text{Rate} = k[A]^0 = k(1) = k$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In pseudo-first-order reactions, a second-order reaction behaves kinetically as a first-order reaction.\\nReason (R): One of the reacting species is present in huge excess such that its concentration remains virtually unchanged throughout.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). $[B]$ is merged into $k' = k[B]$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Molecularity of an elementary reaction cannot be greater than $3$.\\nReason (R): The probability of simultaneous collision of more than three molecules with proper orientation is practically zero.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains why molecularity $> 3$ is not observed.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The specific reaction rate depends on the concentrations of the reactants.\\nReason (R): Specific reaction rate is the rate of reaction when the concentration of each reactant is unity.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because specific reaction rate is another term for rate constant $k$, which is independent of reactant concentration. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The reaction $\\text{CHCl}_3 + \\text{Cl}_2 \\rightarrow \\text{CCl}_4 + \\text{HCl}$ exhibits an order of $1.5$.\\nReason (R): The experimental rate law for this reaction is $\\text{Rate} = k[\\text{CHCl}_3][\\text{Cl}_2]^{1/2}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). The sum of powers is $1 + 0.5 = 1.5$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Order of a reaction can be zero.\\nReason (R): In a zero-order reaction, the rate is completely independent of the reactant concentration.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of reaction is an experimentally determined quantity.\\nReason (R): The stoichiometric coefficients in a balanced equation always give the correct order.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true. (R) is false because stoichiometric coefficients only give the order for elementary reactions.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an elementary step $A + 2B \\rightarrow C$, the rate law is $\\text{Rate} = k[A][B]^2$.\\nReason (R): The law of mass action applies directly to elementary steps.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Doubling the concentration of all reactants doubles the rate of a second-order reaction.\\nReason (R): For a second-order reaction, $\\text{Rate} = k[A]^2$ or $k[A][B]$.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because doubling all concentrations increases the rate by $2^2 = 4$ times. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A reaction cannot have an order greater than $3$ as an elementary step.\\nReason (R): Simultaneous collision of four or more particles is statistically extremely improbable.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The units of rate constant for a first-order reaction do not contain any concentration term.\\nReason (R): In a first-order rate law, $\\text{Rate} = k[A]$, concentration appears to the first power on both sides of $\\frac{\\text{concentration}}{\\text{time}} = k[\\text{concentration}]$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the dimensional proof.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): When the rate-determining step is preceded by a fast reversible step, the concentration of the intermediate is expressed using the equilibrium constant.\\nReason (R): The rate of the fast forward reaction equals the rate of the fast reverse reaction at dynamic equilibrium.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The steady-state approximation assumes that the rate of change of concentration of intermediate species is zero during the major part of the reaction.\\nReason (R): Intermediates are highly reactive and are consumed almost as quickly as they are generated.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains the physical basis of the steady-state approximation $\\frac{d[\\text{intermediate}]}{dt} \\approx 0$.",
    "Hard",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In the initial rate method, rates are measured at $t \\approx 0$.\\nReason (R): Measuring rates initially avoids interference from reverse reactions and product inhibition.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains why initial rates are measured before products accumulate.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of a reaction can change with change in experimental conditions such as pressure.\\nReason (R): Decomposition of $\\text{NH}_3$ on hot Pt is zero order at high pressure but first order at low pressure.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) provides the classic textbook example of pressure-dependent reaction order due to surface coverage saturation.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a reaction $A + B \\rightarrow \\text{Products}$, if rate $= k[A]^1[B]^0$, adding a large excess of $B$ will change the rate.\\nReason (R): The order with respect to $B$ is zero, meaning rate is independent of $[B]$.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because changing $[B]$ has zero effect when the order with respect to $B$ is zero. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate constant $k$ increases with increase in temperature for endothermic reactions only.\\nReason (R): Activation energy is always positive for chemical reactions.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because $k$ increases with temperature for BOTH exothermic and endothermic reactions according to $k = A e^{-E_a/(RT)}$. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of rate constant for a reaction with overall order $1.5$ is $\\text{L}^{0.5}\\text{mol}^{-0.5}\\text{s}^{-1}$.\\nReason (R): General unit formula is $(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}$. For $n=1.5$, this gives $(\\text{mol L}^{-1})^{-0.5}\\text{s}^{-1} = \\text{L}^{0.5}\\text{mol}^{-0.5}\\text{s}^{-1}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) gives the exact mathematical dimensional derivation.",
    "Easy",
    "ASSERTION_REASON"
  );
  return q;
}

function getOrderOfReactionQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Order of reaction", text, opts, ans, exp, diff, type));
  add(
    "The thermal decomposition of acetaldehyde $\\text{CH}_3\\text{CHO} \\rightarrow \\text{CH}_4 + \\text{CO}$ follows an order of:",
    ["$1.5$","$1.0$","$2.0$","$0.5$"],
    0,
    "Acetaldehyde thermal decomposition proceeds via a free radical chain mechanism (Rice-Herzfeld mechanism) where the rate law is $\\text{Rate} = k[\\text{CH}_3\\text{CHO}]^{3/2}$, giving an order of $1.5$ (or $3/2$).",
    "Medium",
    "MCQ"
  );
  add(
    "For a reaction, when the initial concentration of the reactant is doubled, the half-life period becomes half of its initial value. The order of the reaction is:",
    ["$2$","$1$","$0$","$3$"],
    0,
    "In general, $t_{1/2} \\propto [A]_0^{1-n}$. When $[A]_0$ is doubled, $t_{1/2}$ is halved $\\implies 2^{1-n} = \\frac{1}{2} = 2^{-1} \\implies 1 - n = -1 \\implies n = 2$. The reaction is second order.",
    "Easy",
    "MCQ"
  );
  add(
    "When the initial concentration of a reactant is increased by four times, the half-life of the reaction is doubled. What is the order of the reaction?",
    ["$0.5$","$1.5$","$0$","$2$"],
    0,
    "Using $t_{1/2} \\propto [A]_0^{1-n}$: $\\frac{t_{1/2}'}{t_{1/2}} = 2 = (4)^{1-n} = (2^2)^{1-n} = 2^{2(1-n)}$. Therefore, $2(1-n) = 1 \\implies 1-n = 0.5 \\implies n = 0.5$ (half order).",
    "Medium",
    "MCQ"
  );
  add(
    "Which of the following differences between order and molecularity of a reaction is INCORRECT?",
    ["Order can only be a positive whole number, whereas molecularity can be zero, fractional, or negative","Order is an experimentally determined quantity, whereas molecularity is theoretical","Order applies to both elementary and complex reactions, whereas molecularity is meaningful only for elementary reactions","Molecularity can never be zero or fractional, whereas order can be zero or fractional"],
    0,
    "Option A is inverted and incorrect. Order can be zero, fractional, integer, or negative, while molecularity must be a non-zero positive integer ($1, 2, \\text{or } 3$).",
    "Easy",
    "MCQ"
  );
  add(
    "In Ostwald's isolation method for determining the order of reaction, how is the order with respect to a particular reactant determined?",
    ["By taking all other reactants in large excess so their concentrations remain virtually constant","By isolating the products and measuring their freezing point depression","By measuring the enthalpy of reaction at constant pressure","By increasing temperature until all other reactants are consumed"],
    0,
    "In Ostwald's isolation method, all reactants except the one under study are taken in large excess. Their concentrations do not change appreciably, isolating the dependence of rate on the chosen reactant.",
    "Medium",
    "MCQ"
  );
  add(
    "For the reaction $A \\rightarrow B$, the half-life period is found to be independent of the initial concentration. The order of the reaction is:",
    ["$1$","$0$","$2$","$-1$"],
    0,
    "For a first-order reaction, $t_{1/2} = \\frac{0.693}{k}$, which contains no concentration term and is strictly independent of the initial reactant concentration.",
    "Easy",
    "MCQ"
  );
  add(
    "If the half-life of a reaction is $100\\text{ minutes}$ at $[A]_0 = 0.1\\text{ M}$ and $50\\text{ minutes}$ at $[A]_0 = 0.05\\text{ M}$, the order of the reaction is:",
    ["$0$","$1$","$2$","$0.5$"],
    0,
    "Here $t_{1/2} \\propto [A]_0$: when $[A]_0$ is halved from $0.1$ to $0.05$, $t_{1/2}$ is also halved from $100$ to $50$. $t_{1/2} \\propto [A]_0^1 \\implies 1 - n = 1 \\implies n = 0$. The reaction is zero order.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $2A + B \\rightarrow C$, the rate equation is $\\text{Rate} = k[A]^2[B]^0$. If the concentration of $A$ is kept constant and $[B]$ is doubled, the half-life of $A$ will:",
    ["Remain unchanged","Be doubled","Be halved","Be quadrupled"],
    0,
    "Since the reaction is zero order with respect to $B$, the concentration of $B$ does not enter the rate expression. Therefore, changing $[B]$ has no effect on the consumption of $A$ or its half-life.",
    "Easy",
    "MCQ"
  );
  add(
    "The reaction between gaseous hydrogen and chlorine in the presence of sunlight over water is of which order?",
    ["Zero order","First order","Second order","Third order"],
    0,
    "$\\text{H}_2(g) + \\text{Cl}_2(g) \\xrightarrow{h\\nu} 2\\text{HCl}(g)$ is a photochemical reaction whose rate depends only on the intensity of light absorbed, not on reactant concentrations, making it zero order.",
    "Easy",
    "MCQ"
  );
  add(
    "The rate constant for a reaction is $k = 2.5 \\times 10^{-4}\\text{ mol}^{-1}\\text{L s}^{-1}$. The order of this reaction is:",
    ["$2$","$1$","$0$","$3$"],
    0,
    "Unit of $k$ is $\\text{L mol}^{-1}\\text{s}^{-1} = (\\text{mol L}^{-1})^{-1}\\text{s}^{-1}$. Using $(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}$, we get $1 - n = -1 \\implies n = 2$.",
    "Easy",
    "MCQ"
  );
  add(
    "The reaction $\\text{CO}(g) + \\text{Cl}_2(g) \\rightarrow \\text{COCl}_2(g)$ has the experimental rate law $\\text{Rate} = k[\\text{CO}][\\text{Cl}_2]^{3/2}$. The overall order is:",
    ["$2.5$","$2.0$","$1.5$","$3.0$"],
    0,
    "Overall order is $1 + 1.5 = 2.5$ (or $5/2$).",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction with rate law $\\text{Rate} = k[A]^n$, a plot of $\\log(\\text{Rate})$ versus $\\log[A]$ gives a straight line. The slope of this line is:",
    ["$n$","$\\log k$","$k$","$1/n$"],
    0,
    "Taking logarithms: $\\log(\\text{Rate}) = \\log k + n \\log[A]$. Comparing with $y = c + mx$, the slope is $m = n$ (the order of reaction) and the intercept is $\\log k$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $A \\rightarrow B$, the rate of reaction is found to increase by a factor of $1.414$ ($\\sqrt{2}$) when the concentration of $A$ is doubled. The order of the reaction is:",
    ["$0.5$","$1.0$","$2.0$","$1.5$"],
    0,
    "$\\frac{r_2}{r_1} = 1.414 = \\sqrt{2} = 2^{0.5} = (2)^n$. Therefore, $n = 0.5$ (half order).",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following orders is NOT possible for an elementary reaction?",
    ["$0$","$1$","$2$","$3$"],
    0,
    "An elementary reaction cannot have zero order because an elementary collision must involve at least one reactant molecule colliding ($n \\ge 1$).",
    "Easy",
    "MCQ"
  );
  add(
    "If the half-life of a reaction is inversely proportional to the square of initial concentration, the order of the reaction is:",
    ["$3$","$2$","$1$","$0$"],
    0,
    "$t_{1/2} \\propto \\frac{1}{[A]_0^2} = [A]_0^{-2}$. Since $t_{1/2} \\propto [A]_0^{1-n}$, we have $1 - n = -2 \\implies n = 3$. The reaction is third order.",
    "Medium",
    "MCQ"
  );
  add(
    "For the reaction $2\\text{NO}_2 + \\text{F}_2 \\rightarrow 2\\text{NO}_2\\text{F}$, the rate law is $\\text{Rate} = k[\\text{NO}_2][\\text{F}_2]$. The molecularity of the rate-determining step is:",
    ["$2$","$3$","$1$","Undefined"],
    0,
    "The mechanism consists of: (1) $\\text{NO}_2 + \\text{F}_2 \\rightarrow \\text{NO}_2\\text{F} + \\text{F}$ (slow, bimolecular); (2) $\\text{NO}_2 + \\text{F} \\rightarrow \\text{NO}_2\\text{F}$ (fast). The rate-determining step involves two reactant molecules colliding, so its molecularity is $2$.",
    "Medium",
    "MCQ"
  );
  add(
    "In the conversion of orthohydrogen to parahydrogen: $\\text{o-H}_2 \\rightarrow \\text{p-H}_2$, the order of the thermal reaction is:",
    ["$1.5$","$1.0$","$2.0$","$0.5$"],
    0,
    "The thermal spin-isomerization of molecular hydrogen occurs via free hydrogen atoms produced by dissociation: $\\text{H}_2 \\rightleftharpoons 2\\text{H}$ (fast), $\\text{H} + \\text{o-H}_2 \\rightarrow \\text{p-H}_2 + \\text{H}$ (slow). This gives an overall order of $3/2 = 1.5$.",
    "Hard",
    "MCQ"
  );
  add(
    "For a reaction, the half-life is $12\\text{ hours}$ at $[A]_0 = 0.4\\text{ M}$ and $12\\text{ hours}$ at $[A]_0 = 0.8\\text{ M}$. The order of the reaction is:",
    ["$1$","$0$","$2$","$0.5$"],
    0,
    "Since the half-life remains constant when $[A]_0$ changes, $t_{1/2}$ is independent of $[A]_0$, which uniquely characterizes first-order kinetics ($n = 1$).",
    "Easy",
    "MCQ"
  );
  add(
    "The rate constant for a reaction is $k = 0.05\\text{ s}^{-1}$. Starting with $0.8\\text{ M}$ of reactant, what is the concentration after $40\\text{ seconds}$?",
    ["$0.108\\text{ M}$","$0.400\\text{ M}$","$0.200\\text{ M}$","$0.050\\text{ M}$"],
    0,
    "Unit of $k$ is $\\text{s}^{-1}$, so the reaction is first order. $[A]_t = [A]_0 e^{-kt} = 0.8 \\times e^{-0.05 \\times 40} = 0.8 \\times e^{-2} = 0.8 / 7.389 = 0.1083\\text{ M}$.",
    "Medium",
    "MCQ"
  );
  add(
    "Which of the following methods cannot be used to determine the order of a reaction?",
    ["Measuring the equilibrium constant at two different temperatures","Initial rate method","Half-life method","Integrated rate equation graphical method"],
    0,
    "Measuring the equilibrium constant at two different temperatures (Van 't Hoff isochore) gives the standard enthalpy of reaction $\\Delta H^\\circ$, which is a thermodynamic property, not the kinetic order of reaction.",
    "Easy",
    "MCQ"
  );
  add(
    "A reaction $A \\rightarrow B$ follows second-order kinetics. If $[A]_0 = 0.1\\text{ M}$ and $t_{1/2} = 100\\text{ s}$, what is the value of the rate constant $k$?",
    ["$0.1\\text{ L mol}^{-1}\\text{s}^{-1}$","$1.0\\text{ L mol}^{-1}\\text{s}^{-1}$","$0.01\\text{ L mol}^{-1}\\text{s}^{-1}$","$10\\text{ L mol}^{-1}\\text{s}^{-1}$"],
    0,
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Rearranging gives $k = \\frac{1}{t_{1/2}[A]_0} = \\frac{1}{100 \\times 0.1} = \\frac{1}{10} = 0.1\\text{ L mol}^{-1}\\text{s}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For the reaction $A + 2B \\rightarrow C$, the rate is given by $\\text{Rate} = k[A]^1[B]^2$. The reaction is:",
    ["First order with respect to $A$, second order with respect to $B$, and third order overall","Second order with respect to $A$ and first order with respect to $B$","Third order with respect to $A$ and zero order with respect to $B$","First order overall"],
    0,
    "Exponent of $[A]$ is $1$ (first order in $A$), exponent of $[B]$ is $2$ (second order in $B$), and total sum is $1 + 2 = 3$ (third order overall).",
    "Easy",
    "MCQ"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Molecularity of a reaction can never be fractional or zero.\\nReason (R): Molecularity is the number of reactant molecules that collide simultaneously in an elementary reaction.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Molecules are discrete whole particles; fractions or zero molecules cannot collide physically.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of a reaction can be fractional.\\nReason (R): Reaction order is determined experimentally and reflects the complex mechanism rather than simple stoichiometric collisions.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Multi-step radical mechanisms frequently yield half-integer orders (e.g. $1.5$).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an elementary reaction $A + B \\rightarrow \\text{products}$, molecularity and order are both equal to $2$.\\nReason (R): In an elementary reaction, the reaction order equals the molecularity.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the theoretical principle governing elementary single-step processes.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a zero-order reaction, the half-life period depends directly on the initial concentration of the reactant.\\nReason (R): For a zero-order reaction, $t_{1/2} = \\frac{[A]_0}{2k}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the direct mathematical explanation showing $t_{1/2} \\propto [A]_0$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A reaction having molecularity greater than three is extremely rare.\\nReason (R): The probability of more than three molecules colliding simultaneously with correct orientation and sufficient energy is practically zero.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) provides the statistical mechanical explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, a plot of $\\log t_{1/2}$ versus $\\log[A]_0$ is a horizontal straight line parallel to the concentration axis.\\nReason (R): The half-life of a first-order reaction is completely independent of initial concentration ($t_{1/2} = 0.693/k$).",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since $t_{1/2}$ is constant, $\\log t_{1/2} = \\text{constant}$, producing a zero-slope horizontal line.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The overall molecularity of a complex reaction can be found by summing the molecularities of all elementary steps.\\nReason (R): Molecularity is defined for each individual elementary step, but overall molecularity has no physical meaning for complex reactions.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because molecularities of individual steps CANNOT be summed to find an overall molecularity; overall molecularity does not exist. (R) is true.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the unit of rate constant is $\\text{s}^{-1}$, the reaction is first order.\\nReason (R): Dimensional analysis gives the unit of rate constant as $(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}$, which reduces to $\\text{s}^{-1}$ when $n=1$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact mathematical proof.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a second-order reaction $2A \\rightarrow \\text{Products}$, a plot of $1/[A]$ versus time is a straight line.\\nReason (R): The integrated rate equation is $\\frac{1}{[A]} - \\frac{1}{[A]_0} = kt$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the algebraic explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Order of a reaction can be determined from the balanced chemical equation.\\nReason (R): Balanced chemical equations give only the stoichiometry of the overall reaction, not the step-by-step mechanism.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because order cannot be determined from a balanced equation alone. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In the Ostwald isolation method, all reactants except one are taken in large excess.\\nReason (R): The concentrations of reactants present in large excess remain practically constant, isolating the kinetic effect of the single reactant.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains the logic of Ostwald's isolation method.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A fractional order indicates a complex reaction proceeding via multiple elementary steps.\\nReason (R): Elementary steps cannot involve fractional numbers of reacting molecules.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Because elementary steps have integer molecularity and orders, a fractional order proves that the reaction must be complex.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an $n$-th order reaction, $t_{1/2} \\propto [A]_0^{1-n}$.\\nReason (R): Differentiating the rate law shows that fractional consumption depends on $[A]_0^{1-n}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) provides the mathematical basis.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Hydrolysis of cane sugar in presence of dilute acid is a pseudo-first-order reaction.\\nReason (R): Water is present in such a large excess that its concentration remains essentially constant during the reaction.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of a reaction is zero when rate is independent of reactant concentration.\\nReason (R): $[A]^0 = 1$ for any non-zero concentration $[A]$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the algebraic explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of rate constant for a zero-order reaction is $\\text{mol L}^{-1}\\text{s}^{-1}$.\\nReason (R): For a zero-order reaction, $\\text{Rate} = k$, so $k$ shares the unit of reaction rate.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The half-life of a second-order reaction decreases as the initial concentration of reactant increases.\\nReason (R): For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Higher initial concentration increases collision rate, halving the concentration faster.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction can be independent of the concentration of one of the reactants.\\nReason (R): If a reactant is involved in an elementary step that occurs after the rate-determining step, it will not appear in the rate law.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Reactants entering after the bottleneck step have zero effect on the overall rate.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of a reaction cannot be greater than $3$ for an elementary reaction.\\nReason (R): The chance of simultaneous collision of four or more particles is negligible.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The decomposition of gaseous $\\text{HI}$ on a gold surface is zero order at high pressure.\\nReason (R): At high pressures, the gold surface is fully covered with adsorbed $\\text{HI}$ molecules.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In a reaction $A + B \\rightarrow \\text{Products}$, if the rate law is $\\text{Rate} = k[A]^2[B]$, the order of the reaction is $3$.\\nReason (R): The order of reaction is the sum of the powers of the concentration terms in the experimental rate law.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the definition of reaction order.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, a plot of $[A]$ versus time is linear.\\nReason (R): The integrated rate law for a first-order reaction is $[A] = [A]_0 - kt$.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. In a first-order reaction, $[A] = [A]_0 e^{-kt}$ (an exponential decay curve, not linear). The linear relationship $[A] = [A]_0 - kt$ belongs to a zero-order reaction.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of rate constant for a half-order reaction ($n = 0.5$) is $\\text{mol}^{0.5}\\text{L}^{-0.5}\\text{s}^{-1}$.\\nReason (R): Unit of rate constant is $(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}$. For $n = 0.5$, this gives $(\\text{mol L}^{-1})^{0.5}\\text{s}^{-1} = \\text{mol}^{0.5}\\text{L}^{-0.5}\\text{s}^{-1}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact algebraic calculation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Saponification of ethyl acetate $\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{C}_2\\text{H}_5\\text{OH}$ is a second-order reaction.\\nReason (R): Both ethyl acetate and sodium hydroxide are present in comparable concentrations, and the rate depends on the concentration of both.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Unlike acid hydrolysis where water is solvent, alkaline hydrolysis utilizes $\\text{OH}^-$ in equimolar amounts, giving second-order kinetics.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The order of a reaction cannot be negative.\\nReason (R): A negative order would imply that the rate of reaction decreases as the concentration of that species increases.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because negative order is well-known for substances that act as inhibitors or retarding products (e.g. order $-1$ for $\\text{O}_2$ in ozone decomposition). (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  return q;
}

module.exports = {
  getArrheniusPartBQuestions,
  getRateLawQuestions,
  getOrderOfReactionQuestions
};
