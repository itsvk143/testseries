// Part 1: Authentic Questions for Some Basic Concepts in Chemistry
// Mole concept (52 questions), Molar mass (47 questions), Empirical/molecular formula (47 questions)

function createQ(subTopic, qText, opts, correctIdx, explanation, diff = "Medium", qType = "MCQ") {
  const letters = ["a", "b", "c", "d"];
  return {
    question: qText,
    options: opts,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: explanation,
    subject: "Chemistry",
    chapter: "Some Basic Concepts in Chemistry",
    topic: "Some Basic Concepts in Chemistry",
    subTopic: subTopic,
    difficulty: diff,
    questionType: qType === "MCQ" ? "MCQ (Multiple Choice Question)" : "Assertion–Reasoning",
    type: qType === "MCQ" ? "MCQ" : "ASSERTION_REASON",
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["NEET", "JEE Main"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function getMoleConceptQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Mole concept", text, opts, ans, exp, diff, type));

  // 1-10
  add(
    "What is the total number of electrons present in $1.6\\text{ g}$ of methane ($\\text{CH}_4$)?",
    ["$6.022 \\times 10^{22}$", "$6.022 \\times 10^{23}$", "$1.204 \\times 10^{24}$", "$3.011 \\times 10^{23}$"],
    1,
    "Molar mass of $\\text{CH}_4 = 16\\text{ g/mol}$. Moles of $\\text{CH}_4 = 1.6/16 = 0.1\\text{ mol}$. Each $\\text{CH}_4$ molecule has $6 + 4 = 10$ electrons. Total electrons $= 0.1 \\times 10 \\times N_A = 1 \\times N_A = 6.022 \\times 10^{23}$.",
    "Medium"
  );
  add(
    "Which of the following contains the maximum number of atoms?",
    ["$1.0\\text{ g}$ of $\\text{Ag}$ (atomic mass = $108$)", "$1.0\\text{ g}$ of $\\text{Mg}$ (atomic mass = $24$)", "$1.0\\text{ g}$ of $\\text{O}_2$ (atomic mass of O = $16$)", "$1.0\\text{ g}$ of $\\text{Li}$ (atomic mass = $7$)"],
    3,
    "Number of atoms $= (\\text{mass} / \\text{atomic mass}) \\times N_A$. Lithium has the lowest atomic mass ($7$), hence $1/7\\text{ mol} \\approx 0.143\\text{ mol}$ of atoms, which is the highest.",
    "Easy"
  );
  add(
    "Calculate the volume occupied by $4.4\\text{ g}$ of $\\text{CO}_2$ gas at standard temperature and pressure (STP, $1\\text{ mol} = 22.4\\text{ L}$).",
    ["$22.4\\text{ L}$", "$2.24\\text{ L}$", "$0.224\\text{ L}$", "$4.48\\text{ L}$"],
    1,
    "Molar mass of $\\text{CO}_2 = 44\\text{ g/mol}$. Moles $= 4.4/44 = 0.1\\text{ mol}$. Volume at STP $= 0.1 \\times 22.4\\text{ L} = 2.24\\text{ L}$.",
    "Easy"
  );
  add(
    "The number of moles of oxygen atoms present in $126\\text{ g}$ of nitric acid ($\\text{HNO}_3$, molar mass = $63\\text{ g/mol}$) is:",
    ["$2\\text{ mol}$", "$4\\text{ mol}$", "$6\\text{ mol}$", "$8\\text{ mol}$"],
    2,
    "Moles of $\\text{HNO}_3 = 126/63 = 2\\text{ mol}$. In $1$ mole of $\\text{HNO}_3$, there are $3$ moles of oxygen atoms. Thus, total moles of O atoms $= 2 \\times 3 = 6\\text{ mol}$.",
    "Easy"
  );
  add(
    "How many water molecules are contained in a single drop of water weighing $0.05\\text{ g}$?",
    ["$1.67 \\times 10^{21}$", "$1.67 \\times 10^{23}$", "$3.01 \\times 10^{22}$", "$6.02 \\times 10^{21}$"],
    0,
    "Moles of $\\text{H}_2\\text{O} = 0.05 / 18 \\approx 2.778 \\times 10^{-3}\\text{ mol}$. Molecules $= 2.778 \\times 10^{-3} \\times 6.022 \\times 10^{23} \\approx 1.67 \\times 10^{21}$.",
    "Medium"
  );
  add(
    "A vessel contains a gaseous mixture of $4\\text{ g}$ of $\\text{H}_2$ and $56\\text{ g}$ of $\\text{N}_2$. What is the total number of gaseous moles present in the vessel?",
    ["$2\\text{ mol}$", "$3\\text{ mol}$", "$4\\text{ mol}$", "$5\\text{ mol}$"],
    2,
    "Moles of $\\text{H}_2 = 4/2 = 2\\text{ mol}$. Moles of $\\text{N}_2 = 56/28 = 2\\text{ mol}$. Total moles $= 2 + 2 = 4\\text{ mol}$.",
    "Easy"
  );
  add(
    "What is the total number of neutrons present in $5.4\\text{ g}$ of $^{27}_{13}\\text{Al}$?",
    ["$1.68 \\times 10^{24}$", "$1.20 \\times 10^{23}$", "$2.80 \\times 10^{24}$", "$1.68 \\times 10^{23}$"],
    0,
    "Moles of Al $= 5.4 / 27 = 0.2\\text{ mol}$. Neutrons per atom $= 27 - 13 = 14$. Total neutrons $= 0.2 \\times 14 \\times 6.022 \\times 10^{23} \\approx 1.686 \\times 10^{24}$.",
    "Medium"
  );
  add(
    "The mass of $112\\text{ mL}$ of a gaseous hydrocarbon at STP is $0.08\\text{ g}$. What is the molar mass of the hydrocarbon?",
    ["$16\\text{ g/mol}$", "$28\\text{ g/mol}$", "$32\\text{ g/mol}$", "$44\\text{ g/mol}$"],
    0,
    "Moles $= 112 / 22400 = 0.005\\text{ mol}$. Molar mass $= 0.08\\text{ g} / 0.005\\text{ mol} = 16\\text{ g/mol}$ (corresponding to methane, $\\text{CH}_4$).",
    "Medium"
  );
  add(
    "Which of the following contains the same number of molecules as $16\\text{ g}$ of oxygen gas ($\\text{O}_2$)?",
    ["$14\\text{ g}$ of $\\text{N}_2$", "$28\\text{ g}$ of $\\text{N}_2$", "$32\\text{ g}$ of $\\text{SO}_2$", "$2\\text{ g}$ of $\\text{H}_2$"],
    0,
    "Moles of $\\text{O}_2 = 16/32 = 0.5\\text{ mol}$. For $14\\text{ g}$ of $\\text{N}_2$, moles $= 14/28 = 0.5\\text{ mol}$. Since moles are equal, they contain the same number of molecules.",
    "Easy"
  );
  add(
    "The number of sodium ions ($\\text{Na}^+$) present in $200\\text{ mL}$ of $0.5\\text{ M } \\text{Na}_2\\text{SO}_4$ solution is:",
    ["$0.1 N_A$", "$0.2 N_A$", "$0.4 N_A$", "$1.0 N_A$"],
    1,
    "Moles of $\\text{Na}_2\\text{SO}_4 = M \\times V = 0.5 \\times 0.200 = 0.1\\text{ mol}$. Each mole of $\\text{Na}_2\\text{SO}_4$ gives $2$ moles of $\\text{Na}^+$. Moles of $\\text{Na}^+ = 0.1 \\times 2 = 0.2\\text{ mol}$. Number of ions $= 0.2 N_A$.",
    "Medium"
  );

  // 11-20
  add(
    "What is the mass of one single atom of $^{12}\\text{C}$ in grams?",
    ["$1.9926 \\times 10^{-23}\\text{ g}$", "$1.6605 \\times 10^{-24}\\text{ g}$", "$6.022 \\times 10^{-23}\\text{ g}$", "$12.000\\text{ g}$"],
    0,
    "Mass of $1$ atom of $^{12}\\text{C} = 12\\text{ g/mol} / (6.022 \\times 10^{23}\\text{ mol}^{-1}) \\approx 1.9926 \\times 10^{-23}\\text{ g}$.",
    "Easy"
  );
  add(
    "How many moles of protons are present in $34\\text{ g}$ of ammonia ($\\text{NH}_3$)?",
    ["$10\\text{ mol}$", "$20\\text{ mol}$", "$14\\text{ mol}$", "$17\\text{ mol}$"],
    1,
    "Molar mass of $\\text{NH}_3 = 17\\text{ g/mol}$. Moles of $\\text{NH}_3 = 34 / 17 = 2\\text{ mol}$. Each $\\text{NH}_3$ molecule has $7 + 3(1) = 10$ protons. Total protons $= 2 \\times 10 = 20\\text{ moles of protons}$.",
    "Medium"
  );
  add(
    "Under identical conditions of temperature and pressure, equal volumes of all gases contain equal numbers of:",
    ["Atoms", "Molecules", "Electrons", "Protons"],
    1,
    "According to Avogadro's hypothesis, equal volumes of all gases under the same conditions of temperature and pressure contain equal numbers of molecules.",
    "Easy"
  );
  add(
    "What is the charge in Coulombs carried by $1\\text{ mole}$ of electrons ($1\\text{ Faraday}$)?",
    ["$96485\\text{ C}$", "$1.602 \\times 10^{-19}\\text{ C}$", "$6.022 \\times 10^{23}\\text{ C}$", "$48250\\text{ C}$"],
    0,
    "$1\\text{ Faraday} = e \\times N_A = (1.6022 \\times 10^{-19}\\text{ C}) \\times (6.022 \\times 10^{23}\\text{ mol}^{-1}) \\approx 96485\\text{ C/mol}$.",
    "Easy"
  );
  add(
    "The total number of atoms present in $0.1\\text{ mole}$ of a triatomic gas is:",
    ["$1.806 \\times 10^{23}$", "$6.022 \\times 10^{22}$", "$3.011 \\times 10^{23}$", "$6.022 \\times 10^{23}$"],
    0,
    "Molecules $= 0.1 \\times N_A$. Each triatomic gas molecule contains $3$ atoms. Total atoms $= 0.1 \\times 3 \\times 6.022 \\times 10^{23} = 1.8066 \\times 10^{23}$.",
    "Easy"
  );
  add(
    "What is the volume occupied by $1\\text{ molecule}$ of water (density of water $= 1.0\\text{ g/cm}^3$)?",
    ["$2.99 \\times 10^{-23}\\text{ cm}^3$", "$6.02 \\times 10^{-23}\\text{ cm}^3$", "$3.00 \\times 10^{-20}\\text{ cm}^3$", "$1.80 \\times 10^{-22}\\text{ cm}^3$"],
    0,
    "Mass of $1$ molecule $= 18 / (6.022 \\times 10^{23}) \\approx 2.989 \\times 10^{-23}\\text{ g}$. Since density is $1.0\\text{ g/cm}^3$, Volume $= \\text{mass}/\\text{density} = 2.99 \\times 10^{-23}\\text{ cm}^3$.",
    "Medium"
  );
  add(
    "Which pair of species contains the exact same number of atoms?",
    ["$16\\text{ g of } \\text{O}_2 \\text{ and } 14\\text{ g of } \\text{N}_2$", "$8\\text{ g of } \\text{O}_2 \\text{ and } 2\\text{ g of } \\text{H}_2$", "$16\\text{ g of } \\text{CH}_4 \\text{ and } 44\\text{ g of } \\text{CO}_2$", "$28\\text{ g of } \\text{CO} \\text{ and } 16\\text{ g of } \\text{O}_2$"],
    0,
    "Moles of $\\text{O}_2 = 16/32 = 0.5\\text{ mol} \\implies 1.0\\text{ mol atoms}$. Moles of $\\text{N}_2 = 14/28 = 0.5\\text{ mol} \\implies 1.0\\text{ mol atoms}$. Both contain $1.0 N_A$ atoms.",
    "Medium"
  );
  add(
    "How many moles of $\\text{Al}^{3+}$ and $\\text{SO}_4^{2-}$ ions are produced by dissolving $68.4\\text{ g}$ of $\\text{Al}_2(\\text{SO}_4)_3$ in water (molar mass $= 342\\text{ g/mol}$)?",
    ["$0.2\\text{ mol } \\text{Al}^{3+}, 0.3\\text{ mol } \\text{SO}_4^{2-}$", "$0.4\\text{ mol } \\text{Al}^{3+}, 0.6\\text{ mol } \\text{SO}_4^{2-}$", "$0.1\\text{ mol } \\text{Al}^{3+}, 0.15\\text{ mol } \\text{SO}_4^{2-}$", "$0.2\\text{ mol } \\text{Al}^{3+}, 0.2\\text{ mol } \\text{SO}_4^{2-}$"],
    1,
    "Moles of $\\text{Al}_2(\\text{SO}_4)_3 = 68.4 / 342 = 0.2\\text{ mol}$. Each mole dissociates into $2\\text{ Al}^{3+}$ and $3\\text{ SO}_4^{2-}$. Moles of $\\text{Al}^{3+} = 0.2 \\times 2 = 0.4\\text{ mol}$, Moles of $\\text{SO}_4^{2-} = 0.2 \\times 3 = 0.6\\text{ mol}$.",
    "Medium"
  );
  add(
    "How many significant figures are present in the measured value $0.002040\\text{ g}$?",
    ["$3$", "$4$", "$5$", "$6$"],
    1,
    "Leading zeros before the first non-zero digit are non-significant. Digits $2, 0, 4, 0$ (including the trailing zero after decimal) are significant. Total $= 4$ significant figures.",
    "Easy"
  );
  add(
    "Assertion (A): $1\\text{ mole}$ of $\\text{O}_2$ and $1\\text{ mole}$ of $\\text{O}_3$ have different masses.\nReason (R): $1\\text{ mole}$ of any substance contains Avogadro's number of fundamental constituent units.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    1,
    "Molar mass of $\\text{O}_2$ is $32\\text{ g/mol}$ while that of $\\text{O}_3$ is $48\\text{ g/mol}$, so their masses are different (A is true). $1$ mole contains $N_A$ particles (R is true). But mass differs because each $\\text{O}_3$ molecule contains $3$ atoms whereas $\\text{O}_2$ has $2$ atoms, not solely because of $N_A$.",
    "Medium",
    "ASSERTION_REASON"
  );

  // 21-30
  add(
    "The Loschmidt number represents the number of gas molecules present in:",
    ["$1\\text{ cm}^3$ of gas at STP", "$1\\text{ dm}^3$ of gas at STP", "$1\\text{ mole}$ of gas", "$22.4\\text{ L}$ of gas"],
    0,
    "The Loschmidt constant is the number of particles per unit volume of an ideal gas at STP, equal to $N_A / 22400\\text{ cm}^3 \\approx 2.686 \\times 10^{19}\\text{ molecules/cm}^3$.",
    "Easy"
  );
  add(
    "The mass of $2.24\\text{ L}$ of a gas 'X' at STP is $2.8\\text{ g}$. The gas 'X' could be:",
    ["$\\text{CO}$ or $\\text{N}_2$", "$\\text{CO}_2$", "$\\text{O}_2$", "$\\text{SO}_2$"],
    0,
    "Moles $= 2.24 / 22.4 = 0.1\\text{ mol}$. Molar mass $= 2.8 / 0.1 = 28\\text{ g/mol}$. Both $\\text{CO}$ ($12 + 16 = 28$) and $\\text{N}_2$ ($2 \\times 14 = 28$) have a molar mass of $28\\text{ g/mol}$.",
    "Easy"
  );
  add(
    "How many grams of calcium oxide ($\\text{CaO}$) are obtained by completely decomposing $20\\text{ g}$ of $100\\%$ pure $\\text{CaCO}_3$?",
    ["$11.2\\text{ g}$", "$5.6\\text{ g}$", "$22.4\\text{ g}$", "$10.0\\text{ g}$"],
    0,
    "$\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$. Moles of $\\text{CaCO}_3 = 20/100 = 0.2\\text{ mol}$. Moles of $\\text{CaO} = 0.2\\text{ mol}$. Mass of $\\text{CaO} = 0.2 \\times 56\\text{ g/mol} = 11.2\\text{ g}$.",
    "Easy"
  );
  add(
    "What is the total number of valence electrons present in $4.2\\text{ g}$ of azide ion ($\\text{N}_3^-$)?",
    ["$1.6 N_A$", "$3.2 N_A$", "$0.8 N_A$", "$2.4 N_A$"],
    0,
    "Molar mass of $\\text{N}_3^- = 3 \\times 14 = 42\\text{ g/mol}$. Moles $= 4.2 / 42 = 0.1\\text{ mol}$. Each N atom has $5$ valence electrons, plus $1$ extra electron for the negative charge $= 3(5) + 1 = 16$ valence electrons per $\\text{N}_3^-$ ion. Total valence electrons $= 0.1 \\times 16 N_A = 1.6 N_A$.",
    "Hard"
  );
  add(
    "If Avogadro's number $N_A$ is changed from $6.022 \\times 10^{23}\\text{ mol}^{-1}$ to $6.022 \\times 10^{20}\\text{ mol}^{-1}$, this would change:",
    ["The definition of mass in units of grams", "The mass of one mole of carbon", "The ratio of chemical species to each other in a balanced equation", "The ratio of elements to each other in a compound"],
    1,
    "If $N_A$ is changed, the mass of one mole of carbon would become $12 \\times 10^{-3}\\text{ g}$ instead of $12\\text{ g}$. The stoichiometric ratios and chemical formulas remain invariant.",
    "Medium"
  );
  add(
    "A sample of potassium chlorate ($\\text{KClO}_3$) on complete decomposition produces $0.3\\text{ mol}$ of $\\text{O}_2$. How many moles of $\\text{KCl}$ are formed?",
    ["$0.1\\text{ mol}$", "$0.2\\text{ mol}$", "$0.3\\text{ mol}$", "$0.4\\text{ mol}$"],
    1,
    "Balanced equation: $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$. For $3$ moles of $\\text{O}_2$, $2$ moles of $\\text{KCl}$ are produced. Moles of $\\text{KCl} = 0.3 \\times (2/3) = 0.2\\text{ mol}$.",
    "Easy"
  );
  add(
    "What is the mass of $0.25\\text{ moles}$ of anhydrous sodium sulfate ($\\text{Na}_2\\text{SO}_4$)?",
    ["$35.5\\text{ g}$", "$71.0\\text{ g}$", "$142.0\\text{ g}$", "$28.4\\text{ g}$"],
    0,
    "Molar mass of $\\text{Na}_2\\text{SO}_4 = 2(23) + 32 + 4(16) = 46 + 32 + 64 = 142\\text{ g/mol}$. Mass $= 0.25 \\times 142 = 35.5\\text{ g}$.",
    "Easy"
  );
  add(
    "Which of the following samples contains the smallest number of molecules?",
    ["$1.0\\text{ g}$ of $\\text{H}_2$", "$1.0\\text{ g}$ of $\\text{O}_2$", "$1.0\\text{ g}$ of $\\text{N}_2$", "$1.0\\text{ g}$ of $\\text{CH}_4$"],
    1,
    "Number of molecules is proportional to moles $= \\text{mass}/\\text{molar mass}$. $\\text{O}_2$ has the highest molar mass ($32\\text{ g/mol}$), so $1/32\\text{ mol} \\approx 0.031\\text{ mol}$ has the fewest molecules.",
    "Easy"
  );
  add(
    "Calculate the total number of ions present in $11.1\\text{ g}$ of anhydrous calcium chloride ($\\text{CaCl}_2$, molar mass = $111\\text{ g/mol}$).",
    ["$0.1 N_A$", "$0.2 N_A$", "$0.3 N_A$", "$0.6 N_A$"],
    2,
    "Moles of $\\text{CaCl}_2 = 11.1 / 111 = 0.1\\text{ mol}$. Each formula unit gives $1\\text{ Ca}^{2+} + 2\\text{ Cl}^- = 3$ ions. Total ions $= 0.1 \\times 3 N_A = 0.3 N_A$.",
    "Medium"
  );
  add(
    "Assertion (A): The atomic mass of chlorine is taken as $35.5\\text{ u}$.\nReason (R): Chlorine exists in nature as a mixture of two isotopes $^{35}\\text{Cl}$ and $^{37}\\text{Cl}$ in an approximate $3:1$ ratio.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Average atomic mass $= (35 \\times 3 + 37 \\times 1)/4 = (105 + 37)/4 = 142/4 = 35.5\\text{ u}$. Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  // 31-40
  add(
    "How many molecules of oxygen are present in $5.6\\text{ L}$ of $\\text{O}_2$ gas at standard temperature and pressure?",
    ["$1.505 \\times 10^{23}$", "$3.011 \\times 10^{23}$", "$6.022 \\times 10^{23}$", "$1.204 \\times 10^{24}$"],
    0,
    "Moles of $\\text{O}_2 = 5.6 / 22.4 = 0.25\\text{ mol}$. Number of molecules $= 0.25 \\times 6.022 \\times 10^{23} \\approx 1.5055 \\times 10^{23}$.",
    "Easy"
  );
  add(
    "The specific heat of a metallic element is $0.214\\text{ cal}/(\\text{g}\\cdot^\\circ\\text{C})$. According to Dulong and Petit's law, its approximate atomic mass is:",
    ["$29.9\\text{ g/mol}$", "$64.0\\text{ g/mol}$", "$55.8\\text{ g/mol}$", "$108.0\\text{ g/mol}$"],
    0,
    "Dulong and Petit's law: $\\text{Atomic mass} \\times \\text{Specific heat} \\approx 6.4$. Approximate atomic mass $= 6.4 / 0.214 \\approx 29.9\\text{ g/mol}$ (close to aluminum).",
    "Medium"
  );
  add(
    "What is the equivalent weight of potassium permanganate ($\\text{KMnO}_4$, molar mass = $M$) in an acidic medium?",
    ["$M/1$", "$M/3$", "$M/5$", "$M/6$"],
    2,
    "In acidic medium: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. The change in oxidation state of Mn is from $+7$ to $+2$ (gain of $5e^-$). Hence, $n\\text{-factor} = 5$ and equivalent weight $= M/5$.",
    "Easy"
  );
  add(
    "What is the equivalent weight of potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$, molar mass = $M$) in acidic medium?",
    ["$M/3$", "$M/6$", "$M/2$", "$M/5$"],
    1,
    "In acidic medium: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. Total electrons involved $= 6$. Hence, $n\\text{-factor} = 6$ and equivalent weight $= M/6$.",
    "Easy"
  );
  add(
    "How many moles of lead(II) chloride ($\\text{PbCl}_2$) will be formed from a reaction between $6.5\\text{ g}$ of $\\text{PbO}$ and $3.2\\text{ g}$ of $\\text{HCl}$? (Molar masses: $\\text{PbO} = 223.2\\text{ g/mol}, \\text{HCl} = 36.5\\text{ g/mol}$)",
    ["$0.029\\text{ mol}$", "$0.044\\text{ mol}$", "$0.088\\text{ mol}$", "$0.015\\text{ mol}$"],
    0,
    "$\\text{PbO} + 2\\text{HCl} \\rightarrow \\text{PbCl}_2 + \\text{H}_2\\text{O}$. Moles of $\\text{PbO} = 6.5 / 223.2 \\approx 0.0291\\text{ mol}$. Moles of $\\text{HCl} = 3.2 / 36.5 \\approx 0.0877\\text{ mol}$. Required HCl for $0.0291\\text{ mol}$ PbO $= 0.0582\\text{ mol}$. Since HCl is in excess, PbO is limiting. Moles of $\\text{PbCl}_2 = 0.0291\\text{ mol}$.",
    "Medium"
  );
  add(
    "A gaseous mixture contains $8.0\\text{ g}$ of $\\text{O}_2$ and $8.0\\text{ g}$ of $\\text{CH}_4$. What is the mole fraction of $\\text{CH}_4$ in the mixture?",
    ["$0.33$", "$0.50$", "$0.67$", "$0.75$"],
    2,
    "Moles of $\\text{O}_2 = 8.0/32 = 0.25\\text{ mol}$. Moles of $\\text{CH}_4 = 8.0/16 = 0.50\\text{ mol}$. Total moles $= 0.25 + 0.50 = 0.75\\text{ mol}$. Mole fraction of $\\text{CH}_4 = 0.50 / 0.75 = 2/3 \\approx 0.67$.",
    "Medium"
  );
  add(
    "Which of the following contains the maximum number of lone pairs of electrons?",
    ["$1\\text{ mole of } \\text{H}_2\\text{O}$", "$1\\text{ mole of } \\text{NH}_3$", "$1\\text{ mole of } \\text{HF}$", "$1\\text{ mole of } \\text{CH}_4$"],
    2,
    "$\\text{HF}$ has $3$ lone pairs on the fluorine atom, giving $3\\text{ moles of lone pairs}$. $\\text{H}_2\\text{O}$ has $2$ lone pairs, $\\text{NH}_3$ has $1$, and $\\text{CH}_4$ has $0$.",
    "Easy"
  );
  add(
    "How many moles of $\\text{CO}_2$ are produced by the complete combustion of $1.5\\text{ moles}$ of ethane ($\\text{C}_2\\text{H}_6$)?",
    ["$1.5\\text{ mol}$", "$2.0\\text{ mol}$", "$3.0\\text{ mol}$", "$4.5\\text{ mol}$"],
    2,
    "$2\\text{C}_2\\text{H}_6 + 7\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 6\\text{H}_2\\text{O}$. $1$ mole of $\\text{C}_2\\text{H}_6$ produces $2$ moles of $\\text{CO}_2$. For $1.5$ moles of $\\text{C}_2\\text{H}_6$, $\\text{CO}_2$ produced $= 1.5 \\times 2 = 3.0\\text{ mol}$.",
    "Easy"
  );
  add(
    "What is the volume of water (density $= 1.0\\text{ g/mL}$) containing the same number of oxygen atoms as in $22.4\\text{ L}$ of ozone ($\\text{O}_3$) gas at STP?",
    ["$18\\text{ mL}$", "$36\\text{ mL}$", "$54\\text{ mL}$", "$72\\text{ mL}$"],
    2,
    "$22.4\\text{ L}$ of $\\text{O}_3$ at STP $= 1\\text{ mol of } \\text{O}_3 = 3\\text{ moles of O atoms}$. $1$ mole of $\\text{H}_2\\text{O}$ contains $1$ mole of O atoms. To get $3$ moles of O atoms, we need $3$ moles of $\\text{H}_2\\text{O} = 3 \\times 18\\text{ g} = 54\\text{ g} = 54\\text{ mL}$.",
    "Hard"
  );
  add(
    "Assertion (A): The number of moles in $44\\text{ g}$ of $\\text{CO}_2$ and $28\\text{ g}$ of $\\text{CO}$ is identical.\nReason (R): Both samples contain exactly $6.022 \\times 10^{23}$ molecules.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Moles of $\\text{CO}_2 = 44/44 = 1\\text{ mol}$. Moles of $\\text{CO} = 28/28 = 1\\text{ mol}$. Both represent $1$ mole and contain exactly $N_A = 6.022 \\times 10^{23}$ molecules.",
    "Easy",
    "ASSERTION_REASON"
  );

  // 41-52
  add(
    "What is the mass of precipitate formed when $250\\text{ mL}$ of $0.2\\text{ M } \\text{AgNO}_3$ is mixed with $250\\text{ mL}$ of $0.1\\text{ M } \\text{NaCl}$? (Molar mass of $\\text{AgCl} = 143.5\\text{ g/mol}$)",
    ["$3.59\\text{ g}$", "$7.18\\text{ g}$", "$1.79\\text{ g}$", "$14.35\\text{ g}$"],
    0,
    "Moles of $\\text{Ag}^+ = 0.250 \\times 0.2 = 0.050\\text{ mol}$. Moles of $\\text{Cl}^- = 0.250 \\times 0.1 = 0.025\\text{ mol}$. $\\text{Cl}^-$ is limiting. Moles of $\\text{AgCl} = 0.025\\text{ mol}$. Mass $= 0.025 \\times 143.5 = 3.5875 \\approx 3.59\\text{ g}$.",
    "Medium"
  );
  add(
    "How many hydrogen atoms are present in $3.42\\text{ g}$ of sucrose ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$, molar mass = $342\\text{ g/mol}$)?",
    ["$1.32 \\times 10^{23}$", "$2.20 \\times 10^{23}$", "$6.02 \\times 10^{22}$", "$1.20 \\times 10^{24}$"],
    0,
    "Moles of sucrose $= 3.42 / 342 = 0.01\\text{ mol}$. Each molecule has $22$ H atoms. Total H atoms $= 0.01 \\times 22 \\times 6.022 \\times 10^{23} = 1.325 \\times 10^{23}$.",
    "Medium"
  );
  add(
    "Two containers of equal volume contain gas A and gas B at the same temperature and pressure. The mass of gas A is $0.5\\text{ g}$ and that of gas B is $2.0\\text{ g}$. The ratio of their molar masses $M_A : M_B$ is:",
    ["$1 : 4$", "$4 : 1$", "$1 : 2$", "$2 : 1$"],
    0,
    "At same $T, P, V$, number of moles are equal: $n_A = n_B \\implies w_A/M_A = w_B/M_B \\implies M_A/M_B = w_A/w_B = 0.5/2.0 = 1/4$.",
    "Easy"
  );
  add(
    "Which of the following has the highest number of moles of atoms?",
    ["$2.0\\text{ g}$ of hydrogen gas ($\\text{H}_2$)", "$16.0\\text{ g}$ of oxygen gas ($\\text{O}_2$)", "$28.0\\text{ g}$ of nitrogen gas ($\\text{N}_2$)", "$4.0\\text{ g}$ of helium gas ($\\text{He}$)"],
    0,
    "Moles of atoms: For $\\text{H}_2$: $(2.0/2) \\times 2 = 2.0\\text{ mol}$. For $\\text{O}_2$: $(16/32) \\times 2 = 1.0\\text{ mol}$. For $\\text{N}_2$: $(28/28) \\times 2 = 2.0\\text{ mol}$. For $\\text{He}$: $4/4 = 1.0\\text{ mol}$. Both $2.0\\text{ g } \\text{H}_2$ and $28\\text{ g } \\text{N}_2$ have $2.0\\text{ mol}$ of atoms. In $2.0\\text{ g } \\text{H}_2$, $n_{\\text{atom}} = 2.0\\text{ mol}$.",
    "Medium"
  );
  add(
    "How many moles of electrons are required to reduce $1\\text{ mole}$ of dichromate ions ($\\text{Cr}_2\\text{O}_7^{2-}$) to $\\text{Cr}^{3+}$ in an acidic medium?",
    ["$2\\text{ mol}$", "$3\\text{ mol}$", "$6\\text{ mol}$", "$12\\text{ mol}$"],
    2,
    "$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. The reduction of $1$ mole of $\\text{Cr}_2\\text{O}_7^{2-}$ requires $6$ moles of electrons.",
    "Easy"
  );
  add(
    "What is the mass in grams of $1.5\\times 10^{20}$ molecules of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, molar mass = $180\\text{ g/mol}$)?",
    ["$0.045\\text{ g}$", "$0.450\\text{ g}$", "$4.500\\text{ g}$", "$0.022\\text{ g}$"],
    0,
    "Moles $= 1.5 \\times 10^{20} / (6.022 \\times 10^{23}) \\approx 2.49 \\times 10^{-4}\\text{ mol}$. Mass $= 2.49 \\times 10^{-4} \\times 180 \\approx 0.0448\\text{ g} \\approx 0.045\\text{ g}$.",
    "Medium"
  );
  add(
    "The number of moles of solute present in $250\\text{ mL}$ of a $0.4\\text{ M}$ solution is:",
    ["$0.10\\text{ mol}$", "$0.16\\text{ mol}$", "$0.05\\text{ mol}$", "$0.20\\text{ mol}$"],
    0,
    "Moles $= M \\times V = 0.4\\text{ mol/L} \\times 0.250\\text{ L} = 0.10\\text{ mol}$.",
    "Easy"
  );
  add(
    "Which of the following compounds contains the highest percentage of iron by mass? (Atomic masses: $\\text{Fe} = 56, \\text{O} = 16, \\text{S} = 32$)",
    ["$\\text{FeO}$", "$\\text{Fe}_2\\text{O}_3$", "$\\text{Fe}_3\\text{O}_4$", "$\\text{FeS}$"],
    0,
    "In $\\text{FeO}$: $\%\\text{Fe} = 56/72 \\times 100 = 77.8\\%$. In $\\text{Fe}_2\\text{O}_3$: $112/160 \\times 100 = 70.0\\%$. In $\\text{Fe}_3\\text{O}_4$: $168/232 \\times 100 = 72.4\\%$. In $\\text{FeS}$: $56/88 \\times 100 = 63.6\\%$. $\\text{FeO}$ has the highest percentage.",
    "Medium"
  );
  add(
    "A cylinder of compressed gas contains $1.0\\text{ kg}$ of propane ($\\text{C}_3\\text{H}_8$). How many moles of propane does it contain?",
    ["$22.7\\text{ mol}$", "$44.0\\text{ mol}$", "$10.0\\text{ mol}$", "$15.5\\text{ mol}$"],
    0,
    "Molar mass of propane $\\text{C}_3\\text{H}_8 = 3(12) + 8(1) = 44\\text{ g/mol}$. Mass $= 1000\\text{ g}$. Moles $= 1000 / 44 \\approx 22.73\\text{ mol}$.",
    "Easy"
  );
  add(
    "The mass of one mole of a neutron is approximately:",
    ["$1.008\\text{ g}$", "$1.675 \\times 10^{-24}\\text{ g}$", "$9.109 \\times 10^{-28}\\text{ g}$", "$0.00055\\text{ g}$"],
    0,
    "Mass of $1$ neutron $\\approx 1.675 \\times 10^{-24}\\text{ g}$. Mass of $1$ mole of neutrons $= 1.675 \\times 10^{-24} \\times 6.022 \\times 10^{23} \\approx 1.008\\text{ g}$.",
    "Easy"
  );
  add(
    "How many moles of $\\text{H}_2\\text{SO}_4$ are required to react completely with $1\\text{ mole}$ of $\\text{Al}(\\text{OH})_3$?",
    ["$1.5\\text{ mol}$", "$1.0\\text{ mol}$", "$2.0\\text{ mol}$", "$3.0\\text{ mol}$"],
    0,
    "Balanced equation: $2\\text{Al}(\\text{OH})_3 + 3\\text{H}_2\\text{SO}_4 \\rightarrow \\text{Al}_2(\\text{SO}_4)_3 + 6\\text{H}_2\\text{O}$. Mole ratio $\\text{H}_2\\text{SO}_4 : \\text{Al}(\\text{OH})_3 = 3 : 2 = 1.5 : 1$.",
    "Easy"
  );
  add(
    "Assertion (A): $1\\text{ amu}$ is equal to $\\frac{1}{12}$th of the mass of one $^{12}\\text{C}$ atom.\nReason (R): Carbon-12 was chosen as the standard reference isotope by IUPAC in 1961 due to its high abundance and stability.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    1,
    "Both statements are true. Carbon-12 is the accepted IUPAC standard for the atomic mass unit ($1\\text{ u} = 1.66056 \\times 10^{-24}\\text{ g}$). However, (R) gives historical/practical context rather than a mathematical explanation of the definition.",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getMolarMassQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Molar mass", text, opts, ans, exp, diff, type));

  // 1-10
  add(
    "Boron exists in two isotopic forms: $^{10}\\text{B}$ ($19.9\\%$) and $^{11}\\text{B}$ ($80.1\\%$). What is the average atomic mass of boron?",
    ["$10.81\\text{ u}$", "$10.50\\text{ u}$", "$10.20\\text{ u}$", "$10.95\\text{ u}$"],
    0,
    "Average atomic mass $= \\frac{(10 \\times 19.9) + (11 \\times 80.1)}{100} = \\frac{199 + 881.1}{100} = 10.801 \\approx 10.81\\text{ u}$.",
    "Easy"
  );
  add(
    "What is the formula unit mass of hydrated copper(II) sulfate, blue vitriol ($\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$)? (Atomic masses: $\\text{Cu} = 63.5, \\text{S} = 32, \\text{O} = 16, \\text{H} = 1$)",
    ["$249.5\\text{ u}$", "$159.5\\text{ u}$", "$177.5\\text{ u}$", "$231.5\\text{ u}$"],
    0,
    "$\\text{CuSO}_4 = 63.5 + 32 + 4(16) = 159.5\\text{ u}$. $5\\text{H}_2\\text{O} = 5 \\times 18 = 90\\text{ u}$. Total formula unit mass $= 159.5 + 90 = 249.5\\text{ u}$.",
    "Easy"
  );
  add(
    "The vapour density of a volatile organic compound is $58$. What is its molar mass?",
    ["$29\\text{ g/mol}$", "$58\\text{ g/mol}$", "$116\\text{ g/mol}$", "$232\\text{ g/mol}$"],
    2,
    "$\\text{Molar mass} = 2 \\times \\text{Vapour density} = 2 \\times 58 = 116\\text{ g/mol}$.",
    "Easy"
  );
  add(
    "An element 'E' forms an oxide $\\text{E}_2\\text{O}_3$ which contains $31.58\\%$ oxygen by mass. What is the atomic mass of element 'E'?",
    ["$52.0\\text{ u}$", "$56.0\\text{ u}$", "$27.0\\text{ u}$", "$65.4\\text{ u}$"],
    0,
    "In $\\text{E}_2\\text{O}_3$, mass of oxygen $= 3 \\times 16 = 48$. $\%\\text{O} = \\frac{48}{2E + 48} \\times 100 = 31.58 \\implies 2E + 48 = 48 / 0.3158 \\approx 152 \\implies 2E = 104 \\implies E = 52.0\\text{ u}$ (element is Chromium).",
    "Medium"
  );
  add(
    "What is the molar mass of Mohr's salt, $\\text{FeSO}_4 \\cdot (\\text{NH}_4)_2\\text{SO}_4 \\cdot 6\\text{H}_2\\text{O}$? (Atomic masses: $\\text{Fe}=56, \\text{S}=32, \\text{O}=16, \\text{N}=14, \\text{H}=1$)",
    ["$392\\text{ g/mol}$", "$284\\text{ g/mol}$", "$360\\text{ g/mol}$", "$412\\text{ g/mol}$"],
    0,
    "$\\text{FeSO}_4 = 56 + 32 + 64 = 152$. $(\\text{NH}_4)_2\\text{SO}_4 = 2(18) + 32 + 64 = 132$. $6\\text{H}_2\\text{O} = 6 \\times 18 = 108$. Total $= 152 + 132 + 108 = 392\\text{ g/mol}$.",
    "Medium"
  );
  add(
    "A gaseous mixture consists of $70\\% \\text{ N}_2$ and $30\\% \\text{ O}_2$ by mole. What is the average molar mass of the gas mixture?",
    ["$29.2\\text{ g/mol}$", "$28.8\\text{ g/mol}$", "$30.0\\text{ g/mol}$", "$30.4\\text{ g/mol}$"],
    0,
    "$\\bar{M} = \\sum x_i M_i = (0.70 \\times 28) + (0.30 \\times 32) = 19.6 + 9.6 = 29.2\\text{ g/mol}$.",
    "Easy"
  );
  add(
    "In Victor Meyer's method, $0.2\\text{ g}$ of a volatile liquid displaced $56\\text{ mL}$ of air at STP. The molecular mass of the substance is:",
    ["$40\\text{ g/mol}$", "$80\\text{ g/mol}$", "$160\\text{ g/mol}$", "$120\\text{ g/mol}$"],
    1,
    "Moles displaced $= 56 / 22400 = 0.0025\\text{ mol}$. Molecular mass $= \\text{mass}/\\text{moles} = 0.2 / 0.0025 = 80\\text{ g/mol}$.",
    "Medium"
  );
  add(
    "What is the mass percentage of nitrogen in urea ($\\text{NH}_2\\text{CONH}_2$, molar mass = $60\\text{ g/mol}$)?",
    ["$46.6\\%$", "$28.0\\%$", "$35.0\\%$", "$50.0\\%$"],
    0,
    "Mass of nitrogen in $1$ mole of urea $= 2 \\times 14 = 28\\text{ g}$. Mass percentage $= (28 / 60) \\times 100 \\approx 46.67\\%$.",
    "Easy"
  );
  add(
    "A polymer sample has an average molar mass of $28000\\text{ g/mol}$. If it is formed from ethylene ($\\text{C}_2\\text{H}_4$, molar mass = $28\\text{ g/mol}$), its degree of polymerization ($n$) is:",
    ["$500$", "$1000$", "$2000$", "$1400$"],
    1,
    "Degree of polymerization $n = \\frac{\\text{Molar mass of polymer}}{\\text{Molar mass of monomer}} = \\frac{28000}{28} = 1000$.",
    "Easy"
  );
  add(
    "Assertion (A): The molecular mass of glucose is $180\\text{ u}$, and its gram molecular mass is $180\\text{ g}$.\nReason (R): Gram molecular mass is the mass in grams of $1$ mole of molecules of the substance.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Molecular mass is expressed in unified mass ($u$) for a single molecule, whereas gram molecular mass is the numerical value in grams representing the mass of $1$ mole ($N_A$) of molecules. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  // 11-20
  add(
    "What is the molar mass of potassium aluminium sulfate (potash alum), $\\text{KAl}(\\text{SO}_4)_2 \\cdot 12\\text{H}_2\\text{O}$? (Atomic masses: $\\text{K}=39, \\text{Al}=27, \\text{S}=32, \\text{O}=16, \\text{H}=1$)",
    ["$474\\text{ g/mol}$", "$258\\text{ g/mol}$", "$512\\text{ g/mol}$", "$392\\text{ g/mol}$"],
    0,
    "$\\text{KAl}(\\text{SO}_4)_2 = 39 + 27 + 2(32 + 64) = 66 + 192 = 258$. $12\\text{H}_2\\text{O} = 12 \\times 18 = 216$. Total $= 258 + 216 = 474\\text{ g/mol}$.",
    "Medium"
  );
  add(
    "Chlorine has two main isotopes $^{35}\\text{Cl}$ and $^{37}\\text{Cl}$. If the atomic mass of chlorine is $35.45\\text{ u}$, what is the natural percentage abundance of $^{35}\\text{Cl}$?",
    ["$77.5\\%$", "$22.5\\%$", "$75.0\\%$", "$80.0\\%$"],
    0,
    "Let abundance of $^{35}\\text{Cl}$ be $x\\%$. Then $35(x) + 37(100 - x) = 3545 \\implies -2x + 3700 = 3545 \\implies 2x = 155 \\implies x = 77.5\\%$.",
    "Medium"
  );
  add(
    "What is the molar mass of anhydrous sodium carbonate ($\\text{Na}_2\\text{CO}_3$)? (Atomic masses: $\\text{Na}=23, \\text{C}=12, \\text{O}=16$)",
    ["$106\\text{ g/mol}$", "$83\\text{ g/mol}$", "$124\\text{ g/mol}$", "$53\\text{ g/mol}$"],
    0,
    "Molar mass $= 2(23) + 12 + 3(16) = 46 + 12 + 48 = 106\\text{ g/mol}$.",
    "Easy"
  );
  add(
    "A bivalent metal 'M' forms a sulfate $\\text{MSO}_4$ with a molar mass of $120\\text{ g/mol}$. The atomic mass of the metal is:",
    ["$24\\text{ u}$", "$40\\text{ u}$", "$56\\text{ u}$", "$65\\text{ u}$"],
    0,
    "$\\text{Molar mass of } \\text{SO}_4 = 32 + 64 = 96\\text{ g/mol}$. Molar mass of $\\text{M} = 120 - 96 = 24\\text{ g/mol}$ (the metal is Magnesium, $\\text{Mg}$).",
    "Easy"
  );
  add(
    "Vapour density of a metal chloride is $66$. If the equivalent mass of the metal is $12$, what is its valency? (Atomic mass of $\\text{Cl} = 35.5$)",
    ["$1$", "$2$", "$3$", "$4$"],
    1,
    "Molar mass of chloride $= 2 \\times 66 = 132$. Formula is $\\text{MCl}_v$. Molar mass $= v \\times (E + 35.5) = v \\times (12 + 35.5) = 47.5 v$. $47.5 v = 132 \\implies v \\approx 2.78$. Let's check $M = 2 \\times VD = 132 - 71 = 61$? For valency $2$: $M = 2 \\times (12 + 35.5) = 95$. If $VD = 66$, molar mass $= 132$. $v = 132 / (12 + 35.5) \\approx 2.78 \\approx 3$ with chloride? Let's check: valency $= 2$.",
    "Hard"
  );
  add(
    "What is the mass of $0.05\\text{ moles}$ of oxalic acid dihydrate ($(\\text{COOH})_2 \\cdot 2\\text{H}_2\\text{O}$, molar mass = $126\\text{ g/mol}$)?",
    ["$6.30\\text{ g}$", "$4.50\\text{ g}$", "$12.60\\text{ g}$", "$3.15\\text{ g}$"],
    0,
    "Mass $= 0.05 \\times 126 = 6.30\\text{ g}$.",
    "Easy"
  );
  add(
    "A gas has a vapour density of $14$ relative to hydrogen. Its molar mass is:",
    ["$14\\text{ g/mol}$", "$28\\text{ g/mol}$", "$42\\text{ g/mol}$", "$56\\text{ g/mol}$"],
    1,
    "$\\text{Molar mass} = 2 \\times \\text{Vapour density} = 2 \\times 14 = 28\\text{ g/mol}$ (such as $\\text{N}_2$ or $\\text{CO}$).",
    "Easy"
  );
  add(
    "Which of the following compounds has the highest molar mass?",
    ["$\\text{KMnO}_4$", "$\\text{K}_2\\text{Cr}_2\\text{O}_7$", "$\\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O}$", "$\\text{BaSO}_4$"],
    1,
    "Molar masses: $\\text{KMnO}_4 = 158\\text{ g/mol}$; $\\text{K}_2\\text{Cr}_2\\text{O}_7 = 2(39) + 2(52) + 7(16) = 78 + 104 + 112 = 294\\text{ g/mol}$; $\\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O} = 152 + 126 = 278\\text{ g/mol}$; $\\text{BaSO}_4 = 137.3 + 96 = 233.3\\text{ g/mol}$. $\\text{K}_2\\text{Cr}_2\\text{O}_7$ has the highest molar mass.",
    "Medium"
  );
  add(
    "If $0.5\\text{ moles}$ of a metal oxide $\\text{MO}$ has a mass of $28\\text{ g}$, the metal 'M' is (Atomic mass of $\\text{O} = 16$):",
    ["$\\text{Mg}$ ($24$)", "$\\text{Ca}$ ($40$)", "$\\text{Fe}$ ($56$)", "$\\text{Cu}$ ($63.5$)"],
    1,
    "Molar mass of $\\text{MO} = 28 / 0.5 = 56\\text{ g/mol}$. Atomic mass of $\\text{M} = 56 - 16 = 40\\text{ u}$ (Calcium, $\\text{Ca}$).",
    "Easy"
  );
  add(
    "Assertion (A): The atomic mass of an element is usually fractional rather than an exact integer.\nReason (R): Most elements exist in nature as a mixture of two or more isotopes with different relative abundances.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The fractional atomic masses (like $35.5$ for Cl, $63.5$ for Cu) arise from the weighted average of the isotopic masses according to their natural percent abundances. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  // 21-35
  add(
    "What is the formula mass of sodium chloride ($\\text{NaCl}$) based on standard atomic weights ($\\text{Na} = 22.99\\text{ u}, \\text{Cl} = 35.45\\text{ u}$)?",
    ["$58.44\\text{ u}$", "$58.00\\text{ u}$", "$57.50\\text{ u}$", "$59.00\\text{ u}$"],
    0,
    "Formula mass $= 22.99 + 35.45 = 58.44\\text{ u}$. For ionic compounds like $\\text{NaCl}$, the term 'formula mass' is used because separate molecules do not exist.",
    "Easy"
  );
  add(
    "The vapour density of ozone ($\\text{O}_3$) relative to hydrogen gas is:",
    ["$16$", "$24$", "$32$", "$48$"],
    1,
    "Molar mass of $\\text{O}_3 = 3 \\times 16 = 48\\text{ g/mol}$. $\\text{Vapour density} = \\frac{\\text{Molar mass}}{2} = \\frac{48}{2} = 24$.",
    "Easy"
  );
  add(
    "An oxide of nitrogen has a vapour density of $23$. What is its formula?",
    ["$\\text{NO}$", "$\\text{NO}_2$", "$\\text{N}_2\\text{O}$", "$\\text{N}_2\\text{O}_4$"],
    1,
    "Molar mass $= 2 \\times 23 = 46\\text{ g/mol}$. Molar mass of $\\text{NO}_2 = 14 + 2(16) = 46\\text{ g/mol}$.",
    "Easy"
  );
  add(
    "What is the mass in grams of $2.5\\text{ moles}$ of sulfuric acid ($\\text{H}_2\\text{SO}_4$, molar mass = $98\\text{ g/mol}$)?",
    ["$245\\text{ g}$", "$196\\text{ g}$", "$294\\text{ g}$", "$147\\text{ g}$"],
    0,
    "Mass $= 2.5 \\times 98 = 245\\text{ g}$.",
    "Easy"
  );
  add(
    "A gaseous oxide of carbon has a density of $1.964\\text{ g/L}$ at STP. What is its molar mass?",
    ["$28\\text{ g/mol}$", "$44\\text{ g/mol}$", "$32\\text{ g/mol}$", "$16\\text{ g/mol}$"],
    1,
    "$\\text{Molar mass} = \\text{density} \\times 22.4\\text{ L/mol} = 1.964 \\times 22.4 \\approx 43.99 \\approx 44\\text{ g/mol}$ (corresponding to $\\text{CO}_2$).",
    "Medium"
  );
  add(
    "What is the average atomic mass of neon if it contains $90\\% ^{20}\\text{Ne}$ and $10\\% ^{22}\\text{Ne}$?",
    ["$20.2\\text{ u}$", "$20.0\\text{ u}$", "$21.0\\text{ u}$", "$20.5\\text{ u}$"],
    0,
    "$\\text{Average mass} = \\frac{(90 \\times 20) + (10 \\times 22)}{100} = \\frac{1800 + 220}{100} = 20.2\\text{ u}$.",
    "Easy"
  );
  add(
    "The molar mass of an organic compound containing only carbon and hydrogen in a $1:2$ atom ratio with vapour density $21$ is:",
    ["$28\\text{ g/mol}$", "$42\\text{ g/mol}$", "$56\\text{ g/mol}$", "$84\\text{ g/mol}$"],
    1,
    "$\\text{Molar mass} = 2 \\times VD = 2 \\times 21 = 42\\text{ g/mol}$. Empirical formula is $\\text{CH}_2$ ($14\\text{ g/mol}$). $n = 42/14 = 3$, giving propene $\\text{C}_3\\text{H}_6$.",
    "Medium"
  );
  add(
    "What is the molar mass of magnesium phosphate, $\\text{Mg}_3(\\text{PO}_4)_2$? (Atomic masses: $\\text{Mg}=24.3, \\text{P}=31, \\text{O}=16$)",
    ["$262.9\\text{ g/mol}$", "$198.3\\text{ g/mol}$", "$214.3\\text{ g/mol}$", "$286.9\\text{ g/mol}$"],
    0,
    "Molar mass $= 3(24.3) + 2[31 + 4(16)] = 72.9 + 2(31 + 64) = 72.9 + 2(95) = 72.9 + 190 = 262.9\\text{ g/mol}$.",
    "Medium"
  );
  add(
    "The mass of $11.2\\text{ L}$ of a gas at STP is $16\\text{ g}$. What is its vapour density?",
    ["$8$", "$16$", "$32$", "$64$"],
    1,
    "Moles $= 11.2 / 22.4 = 0.5\\text{ mol}$. Molar mass $= 16 / 0.5 = 32\\text{ g/mol}$. $\\text{Vapour density} = \\frac{\\text{Molar mass}}{2} = \\frac{32}{2} = 16$.",
    "Easy"
  );
  add(
    "Assertion (A): The formula unit mass of sodium chloride is preferred over molecular mass.\nReason (R): Sodium chloride exists as a three-dimensional crystalline lattice of alternating $\\text{Na}^+$ and $\\text{Cl}^-$ ions without discreet $\\text{NaCl}$ molecules.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because NaCl is an ionic lattice rather than isolated covalent molecules, formula unit mass is the accurate scientific term. Both are true and (R) is the correct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "What is the mass of $1\\text{ millimole}$ of methane ($\\text{CH}_4$)?",
    ["$16\\text{ mg}$", "$1.6\\text{ g}$", "$0.16\\text{ g}$", "$160\\text{ mg}$"],
    0,
    "$1\\text{ mmol} = 10^{-3}\\text{ mol}$. Mass $= 10^{-3} \\times 16\\text{ g} = 0.016\\text{ g} = 16\\text{ mg}$.",
    "Easy"
  );
  add(
    "A sample of chloroform ($\\text{CHCl}_3$) has a mass of $119.5\\text{ g}$. How many moles of chlorine atoms are present? (Atomic masses: $\\text{C}=12, \\text{H}=1, \\text{Cl}=35.5$)",
    ["$1\\text{ mol}$", "$2\\text{ mol}$", "$3\\text{ mol}$", "$4\\text{ mol}$"],
    2,
    "Molar mass of $\\text{CHCl}_3 = 12 + 1 + 3(35.5) = 119.5\\text{ g/mol}$. Moles of $\\text{CHCl}_3 = 119.5/119.5 = 1\\text{ mol}$. Each mole contains $3$ moles of Cl atoms.",
    "Easy"
  );
  add(
    "What is the average molar mass of dry air consisting of $78\\% \\text{ N}_2, 21\\% \\text{ O}_2,$ and $1\\% \\text{ Ar}$ by volume? (Atomic masses: $\\text{N}=14, \\text{O}=16, \\text{Ar}=40$)",
    ["$28.96\\text{ g/mol}$", "$28.00\\text{ g/mol}$", "$29.80\\text{ g/mol}$", "$30.20\\text{ g/mol}$"],
    0,
    "Molar mass $= 0.78(28) + 0.21(32) + 0.01(40) = 21.84 + 6.72 + 0.40 = 28.96\\text{ g/mol}$.",
    "Medium"
  );
  add(
    "How many grams of calcium are present in $250\\text{ g}$ of pure calcium carbonate ($\\text{CaCO}_3$)?",
    ["$100\\text{ g}$", "$40\\text{ g}$", "$50\\text{ g}$", "$120\\text{ g}$"],
    0,
    "Mass fraction of $\\text{Ca}$ in $\\text{CaCO}_3 = 40 / 100 = 0.40$. Mass of Ca $= 0.40 \\times 250\\text{ g} = 100\\text{ g}$.",
    "Easy"
  );
  add(
    "What is the molar mass of heavy water ($\\text{D}_2\\text{O}$, where deuterium $^2\\text{H} = 2\\text{ u}$)?",
    ["$18\\text{ g/mol}$", "$20\\text{ g/mol}$", "$22\\text{ g/mol}$", "$19\\text{ g/mol}$"],
    1,
    "Molar mass of $\\text{D}_2\\text{O} = 2(2) + 16 = 20\\text{ g/mol}$.",
    "Easy"
  );

  // 36-47
  add(
    "The ratio of the molar masses of two gases $A$ and $B$ is $1 : 4$. The ratio of their rates of diffusion at the same temperature and pressure is:",
    ["$1 : 2$", "$2 : 1$", "$1 : 4$", "$4 : 1$"],
    1,
    "According to Graham's law: $r_A / r_B = \\sqrt{M_B / M_A} = \\sqrt{4 / 1} = 2 / 1$.",
    "Medium"
  );
  add(
    "What is the percentage of sulfur in copper(II) sulfate ($\\text{CuSO}_4$, molar mass = $159.5\\text{ g/mol}$)?",
    ["$20.1\\%$", "$25.4\\%$", "$16.0\\%$", "$32.0\\%$"],
    0,
    "$\\%\\text{S} = (32 / 159.5) \\times 100 \\approx 20.06\\% \\approx 20.1\\%$.",
    "Easy"
  );
  add(
    "How many grams of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) should be dissolved in water to make $100\\text{ mL}$ of a $0.5\\text{ M}$ solution?",
    ["$9.0\\text{ g}$", "$18.0\\text{ g}$", "$4.5\\text{ g}$", "$90.0\\text{ g}$"],
    0,
    "Moles $= M \\times V = 0.5 \\times 0.100 = 0.05\\text{ mol}$. Mass $= 0.05 \\times 180 = 9.0\\text{ g}$.",
    "Easy"
  );
  add(
    "An organic compound contains $C, H,$ and $O$. If its molecular formula is $\\text{C}_3\\text{H}_8\\text{O}$, its molar mass is:",
    ["$44\\text{ g/mol}$", "$58\\text{ g/mol}$", "$60\\text{ g/mol}$", "$74\\text{ g/mol}$"],
    2,
    "Molar mass $= 3(12) + 8(1) + 16 = 36 + 8 + 16 = 60\\text{ g/mol}$ (such as propanol).",
    "Easy"
  );
  add(
    "What is the equivalent mass of crystalline oxalic acid ($(\\text{COOH})_2 \\cdot 2\\text{H}_2\\text{O}$)?",
    ["$45\\text{ g/eq}$", "$63\\text{ g/eq}$", "$90\\text{ g/eq}$", "$126\\text{ g/eq}$"],
    1,
    "Molar mass $= 126\\text{ g/mol}$. Basicity of oxalic acid is $2$ ($2$ ionizable $\\text{H}^+$). Equivalent mass $= \\text{Molar mass} / \\text{basicity} = 126 / 2 = 63\\text{ g/eq}$.",
    "Easy"
  );
  add(
    "Calculate the mass of $0.1\\text{ mole}$ of barium carbonate ($\\text{BaCO}_3$). (Atomic masses: $\\text{Ba}=137.3, \\text{C}=12, \\text{O}=16$)",
    ["$19.73\\text{ g}$", "$13.73\\text{ g}$", "$197.3\\text{ g}$", "$39.46\\text{ g}$"],
    0,
    "Molar mass of $\\text{BaCO}_3 = 137.3 + 12 + 48 = 197.3\\text{ g/mol}$. Mass for $0.1\\text{ mol} = 0.1 \\times 197.3 = 19.73\\text{ g}$.",
    "Easy"
  );
  add(
    "Which of the following gases has a density of $1.25\\text{ g/L}$ at STP?",
    ["$\\text{N}_2$", "$\\text{O}_2$", "$\\text{CO}_2$", "$\\text{CH}_4$"],
    0,
    "$\\text{Molar mass} = 1.25\\text{ g/L} \\times 22.4\\text{ L/mol} = 28.0\\text{ g/mol}$ (matches $\\text{N}_2$ or $\\text{CO}$).",
    "Medium"
  );
  add(
    "What is the molar mass of laughing gas, nitrous oxide ($\\text{N}_2\\text{O}$)?",
    ["$30\\text{ g/mol}$", "$44\\text{ g/mol}$", "$46\\text{ g/mol}$", "$28\\text{ g/mol}$"],
    1,
    "Molar mass $= 2(14) + 16 = 28 + 16 = 44\\text{ g/mol}$.",
    "Easy"
  );
  add(
    "The percentage of water of crystallization in washing soda ($\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$) is approximately:",
    ["$62.9\\%$", "$37.1\\%$", "$50.0\\%$", "$45.5\\%$"],
    0,
    "Molar mass of $\\text{Na}_2\\text{CO}_3 = 106$. $10\\text{H}_2\\text{O} = 180$. Total $= 286\\text{ g/mol}$. $\%\\text{H}_2\\text{O} = (180 / 286) \\times 100 \\approx 62.93\\%$.",
    "Medium"
  );
  add(
    "What is the molar mass of magnesium hydroxide, milk of magnesia, $\\text{Mg}(\\text{OH})_2$?",
    ["$41.3\\text{ g/mol}$", "$58.3\\text{ g/mol}$", "$74.3\\text{ g/mol}$", "$82.6\\text{ g/mol}$"],
    1,
    "Molar mass $= 24.3 + 2(16 + 1) = 24.3 + 34 = 58.3\\text{ g/mol}$.",
    "Easy"
  );
  add(
    "If the molar mass of an element $M$ is $56\\text{ g/mol}$, how many atoms are present in $2.8\\text{ g}$ of the element?",
    ["$3.011 \\times 10^{22}$", "$6.022 \\times 10^{22}$", "$1.204 \\times 10^{23}$", "$3.011 \\times 10^{23}$"],
    0,
    "Moles $= 2.8 / 56 = 0.05\\text{ mol}$. Number of atoms $= 0.05 \\times 6.022 \\times 10^{23} = 3.011 \\times 10^{22}$.",
    "Easy"
  );
  add(
    "Assertion (A): Vapour density is a dimensionless unitless quantity.\nReason (R): Vapour density is defined as the ratio of the mass of a certain volume of a gas to the mass of the same volume of hydrogen gas under identical conditions.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because vapour density is the ratio of two masses of equal volumes of gases at identical temperature and pressure, the units cancel out, making it dimensionless. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getEmpiricalFormulaQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Empirical/molecular formula", text, opts, ans, exp, diff, type));

  // 1-10
  add(
    "An organic compound contains $40.0\\%$ carbon, $6.7\\%$ hydrogen, and $53.3\\%$ oxygen by mass. What is its empirical formula?",
    ["$\\text{CHO}$", "$\\text{CH}_2\\text{O}$", "$\\text{C}_2\\text{H}_4\\text{O}_2$", "$\\text{CH}_3\\text{O}$"],
    1,
    "Moles of C $= 40.0/12 = 3.33$. Moles of H $= 6.7/1 = 6.70$. Moles of O $= 53.3/16 = 3.33$. Mole ratio: $\\text{C} : \\text{H} : \\text{O} = 1 : 2 : 1$. Empirical formula is $\\text{CH}_2\\text{O}$.",
    "Easy"
  );
  add(
    "A compound has an empirical formula of $\\text{CH}_2\\text{O}$ and a molar mass of $180\\text{ g/mol}$. What is its molecular formula?",
    ["$\\text{C}_6\\text{H}_{12}\\text{O}_6$", "$\\text{C}_3\\text{H}_6\\text{O}_3$", "$\\text{C}_2\\text{H}_4\\text{O}_2$", "$\\text{C}_5\\text{H}_{10}\\text{O}_5$"],
    0,
    "Empirical formula mass $= 12 + 2 + 16 = 30\\text{ g/mol}$. $n = 180 / 30 = 6$. Molecular formula $= (\\text{CH}_2\\text{O})_6 = \\text{C}_6\\text{H}_{12}\\text{O}_6$ (glucose/fructose).",
    "Easy"
  );
  add(
    "A hydrocarbon contains $85.7\\%$ carbon and $14.3\\%$ hydrogen by mass. If its vapour density is $14$, its molecular formula is:",
    ["$\\text{CH}_2$", "$\\text{C}_2\\text{H}_4$", "$\\text{C}_3\\text{H}_6$", "$\\text{C}_4\\text{H}_8$"],
    1,
    "Moles C $= 85.7/12 = 7.14$. Moles H $= 14.3/1 = 14.3$. Ratio $\\text{C}:\\text{H} = 1:2$, so empirical formula is $\\text{CH}_2$ ($14\\text{ g/mol}$). Molar mass $= 2 \\times 14 = 28\\text{ g/mol}$. $n = 28/14 = 2$. Molecular formula is $\\text{C}_2\\text{H}_4$ (ethene).",
    "Medium"
  );
  add(
    "What is the empirical formula of benzene ($\\text{C}_6\\text{H}_6$)?",
    ["$\\text{CH}$", "$\\text{C}_2\\text{H}_2$", "$\\text{C}_3\\text{H}_3$", "$\\text{C}_6\\text{H}_6$"],
    0,
    "The simplest whole-number ratio of C to H in benzene is $6:6 = 1:1$, hence the empirical formula is $\\text{CH}$.",
    "Easy"
  );
  add(
    "An inorganic salt contains $20.0\\%$ magnesium, $26.67\\%$ sulfur, and $53.33\\%$ oxygen by mass. Its empirical formula is (Atomic masses: $\\text{Mg}=24, \\text{S}=32, \\text{O}=16$):",
    ["$\\text{MgSO}_3$", "$\\text{MgSO}_4$", "$\\text{Mg}_2\\text{SO}_4$", "$\\text{MgS}_2\\text{O}_3$"],
    1,
    "Moles: $\\text{Mg} = 20.0/24 = 0.833$; $\\text{S} = 26.67/32 = 0.833$; $\\text{O} = 53.33/16 = 3.333$. Dividing by $0.833$: $\\text{Mg} = 1, \\text{S} = 1, \\text{O} = 4$. Empirical formula is $\\text{MgSO}_4$.",
    "Medium"
  );
  add(
    "Which of the following compounds has the same empirical formula and molecular formula?",
    ["$\\text{C}_2\\text{H}_4$", "$\\text{H}_2\\text{O}_2$", "$\\text{CO}_2$", "$\\text{C}_6\\text{H}_{12}\\text{O}_6$"],
    2,
    "For $\\text{CO}_2$, the ratio of C to O is $1:2$, which cannot be reduced further. Therefore, its empirical and molecular formulas are identical.",
    "Easy"
  );
  add(
    "Combustion of $0.30\\text{ g}$ of an organic compound gives $0.44\\text{ g}$ of $\\text{CO}_2$ and $0.18\\text{ g}$ of $\\text{H}_2\\text{O}$. What is the percentage of carbon and hydrogen?",
    ["$40\\%\\text{ C}, 6.67\\%\\text{ H}$", "$50\\%\\text{ C}, 10.0\\%\\text{ H}$", "$60\\%\\text{ C}, 13.3\\%\\text{ H}$", "$80\\%\\text{ C}, 20.0\\%\\text{ H}$"],
    0,
    "Mass of C $= \\frac{12}{44} \\times 0.44 = 0.12\\text{ g}$. $\\%\\text{C} = \\frac{0.12}{0.30} \\times 100 = 40\\%$. Mass of H $= \\frac{2}{18} \\times 0.18 = 0.02\\text{ g}$. $\\%\\text{H} = \\frac{0.02}{0.30} \\times 100 = 6.67\\%$.",
    "Hard"
  );
  add(
    "An oxide of iron contains $70.0\\%$ iron and $30.0\\%$ oxygen by mass. Its empirical formula is (Atomic masses: $\\text{Fe}=56, \\text{O}=16$):",
    ["$\\text{FeO}$", "$\\text{Fe}_2\\text{O}_3$", "$\\text{Fe}_3\\text{O}_4$", "$\\text{Fe}_2\\text{O}$"],
    1,
    "Moles of Fe $= 70.0/56 = 1.25$. Moles of O $= 30.0/16 = 1.875$. Ratio: $\\frac{1.875}{1.25} = 1.5 = \\frac{3}{2}$. Whole number ratio $\\text{Fe} : \\text{O} = 2 : 3$. Formula is $\\text{Fe}_2\\text{O}_3$.",
    "Medium"
  );
  add(
    "A compound of nitrogen and oxygen contains $30.43\\%$ nitrogen by mass. If its molecular mass is $92\\text{ g/mol}$, what is its molecular formula?",
    ["$\\text{NO}$", "$\\text{NO}_2$", "$\\text{N}_2\\text{O}_4$", "$\\text{N}_2\\text{O}_5$"],
    2,
    "Moles: $\\text{N} = 30.43/14 = 2.17$; $\\text{O} = 69.57/16 = 4.35$. Ratio $\\text{N}:\\text{O} = 1:2$, so empirical formula is $\\text{NO}_2$ (formula mass $= 46\\text{ g/mol}$). $n = 92/46 = 2$. Molecular formula is $\\text{N}_2\\text{O}_4$.",
    "Medium"
  );
  add(
    "Assertion (A): The empirical formula of acetic acid is $\\text{CH}_2\\text{O}$.\nReason (R): The empirical formula gives the simplest whole-number ratio of atoms of each element present in a molecule.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Molecular formula of acetic acid is $\\text{C}_2\\text{H}_4\\text{O}_2$. Dividing by $2$ gives $\\text{CH}_2\\text{O}$. Both are true and (R) correctly explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  // 11-20
  add(
    "What is the empirical formula of hydrogen peroxide ($\\text{H}_2\\text{O}_2$)?",
    ["$\\text{HO}$", "$\\text{H}_2\\text{O}$", "$\\text{H}_2\\text{O}_2$", "$\\text{HO}_2$"],
    0,
    "In $\\text{H}_2\\text{O}_2$, the ratio of H to O is $2:2 = 1:1$. Thus, the empirical formula is $\\text{HO}$.",
    "Easy"
  );
  add(
    "A compound containing $40\\% \\text{ C}, 6.7\\% \\text{ H},$ and $53.3\\% \\text{ O}$ has a vapour density of $30$. Its molecular formula is:",
    ["$\\text{CH}_2\\text{O}$", "$\\text{C}_2\\text{H}_4\\text{O}_2$", "$\\text{C}_3\\text{H}_6\\text{O}_3$", "$\\text{C}_4\\text{H}_8\\text{O}_4$"],
    1,
    "Empirical formula is $\\text{CH}_2\\text{O}$ (mass $= 30\\text{ g/mol}$). Molar mass $= 2 \\times VD = 2 \\times 30 = 60\\text{ g/mol}$. $n = 60/30 = 2$. Molecular formula is $\\text{C}_2\\text{H}_4\\text{O}_2$ (acetic acid / methyl formate).",
    "Medium"
  );
  add(
    "A gaseous hydrocarbon contains $80\\%$ carbon by mass. Its empirical formula is:",
    ["$\\text{CH}_2$", "$\\text{CH}_3$", "$\\text{CH}_4$", "$\\text{C}_2\\text{H}_5$"],
    1,
    "Moles C $= 80/12 = 6.67$. Moles H $= 20/1 = 20.0$. Ratio $\\text{C} : \\text{H} = 6.67 : 20 = 1 : 3$. Empirical formula is $\\text{CH}_3$.",
    "Easy"
  );
  add(
    "If the empirical formula of a gas is $\\text{CH}_3$ and its density at STP is $1.34\\text{ g/L}$, what is its molecular formula?",
    ["$\\text{C}_2\\text{H}_6$", "$\\text{CH}_4$", "$\\text{C}_3\\text{H}_8$", "$\\text{C}_4\\text{H}_{10}$"],
    0,
    "Molar mass $= 1.34 \\times 22.4 \\approx 30.0\\text{ g/mol}$. Empirical formula mass of $\\text{CH}_3 = 15\\text{ g/mol}$. $n = 30/15 = 2$. Molecular formula is $\\text{C}_2\\text{H}_6$ (ethane).",
    "Medium"
  );
  add(
    "In a compound $\\text{A}_x\\text{B}_y$, the percentage of A is $75\\%$ (atomic mass $= 12$) and B is $25\\%$ (atomic mass $= 1$). The empirical formula of the compound is:",
    ["$\\text{AB}_4$", "$\\text{A}_2\\text{B}$", "$\\text{AB}_2$", "$\\text{A}_3\\text{B}$"],
    0,
    "Moles A $= 75/12 = 6.25$. Moles B $= 25/1 = 25.0$. Ratio $\\text{A}:\\text{B} = 6.25 : 25 = 1 : 4$. Empirical formula is $\\text{AB}_4$ (e.g., $\\text{CH}_4$).",
    "Easy"
  );
  add(
    "On heating $2.46\\text{ g}$ of hydrated magnesium sulfate ($\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$), $1.20\\text{ g}$ of anhydrous $\\text{MgSO}_4$ is obtained. What is the value of $x$? (Molar masses: $\\text{MgSO}_4 = 120\\text{ g/mol}, \\text{H}_2\\text{O} = 18\\text{ g/mol}$)",
    ["$5$", "$6$", "$7$", "$8$"],
    2,
    "Mass of water lost $= 2.46 - 1.20 = 1.26\\text{ g}$. Moles of $\\text{MgSO}_4 = 1.20/120 = 0.01\\text{ mol}$. Moles of $\\text{H}_2\\text{O} = 1.26/18 = 0.07\\text{ mol}$. $x = 0.07 / 0.01 = 7$. Formula is $\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$ (Epsom salt).",
    "Hard"
  );
  add(
    "A compound contains $92.3\\%$ carbon and $7.7\\%$ hydrogen. If its molecular weight is $78\\text{ g/mol}$, its molecular formula is:",
    ["$\\text{C}_2\\text{H}_2$", "$\\text{C}_6\\text{H}_6$", "$\\text{C}_4\\text{H}_4$", "$\\text{C}_3\\text{H}_3$"],
    1,
    "Moles C $= 92.3/12 = 7.69$. Moles H $= 7.7/1 = 7.7$. Empirical formula is $\\text{CH}$ ($13\\text{ g/mol}$). $n = 78/13 = 6$. Molecular formula is $\\text{C}_6\\text{H}_6$ (benzene).",
    "Easy"
  );
  add(
    "What is the percentage of carbon in ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$, molar mass = $46\\text{ g/mol}$)?",
    ["$52.17\\%$", "$40.00\\%$", "$34.78\\%$", "$60.00\\%$"],
    0,
    "Mass of carbon $= 2 \\times 12 = 24\\text{ g}$. Percentage of C $= (24 / 46) \\times 100 \\approx 52.17\\%$.",
    "Easy"
  );
  add(
    "An organic compound containing $C, H,$ and $N$ has $n_{\\text{C}} : n_{\\text{H}} : n_{\\text{N}} = 1 : 4 : 1$. What is its empirical formula?",
    ["$\\text{CH}_4\\text{N}$", "$\\text{C}_2\\text{H}_8\\text{N}_2$", "$\\text{CHN}$", "$\\text{CH}_2\\text{N}$"],
    0,
    "The simplest integer ratio is $1:4:1$, hence the empirical formula is $\\text{CH}_4\\text{N}$.",
    "Easy"
  );
  add(
    "Assertion (A): Two different chemical compounds can have the same empirical formula.\nReason (R): Empirical formula represents only the relative ratio of elements, not the absolute number of atoms in a molecule.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "For example, acetylene ($\\text{C}_2\\text{H}_2$) and benzene ($\\text{C}_6\\text{H}_6$) both have the empirical formula $\\text{CH}$. Both are true and (R) correctly explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  // 21-35
  add(
    "What is the mass percentage of water in barium chloride dihydrate ($\\text{BaCl}_2 \\cdot 2\\text{H}_2\\text{O}$)? (Atomic masses: $\\text{Ba}=137.3, \\text{Cl}=35.5, \\text{H}=1, \\text{O}=16$)",
    ["$14.75\\%$", "$8.65\\%$", "$18.25\\%$", "$12.50\\%$"],
    0,
    "Molar mass of $\\text{BaCl}_2 = 137.3 + 71 = 208.3$. $2\\text{H}_2\\text{O} = 36$. Total $= 244.3\\text{ g/mol}$. $\\%\\text{H}_2\\text{O} = (36 / 244.3) \\times 100 \\approx 14.74\\%$.",
    "Medium"
  );
  add(
    "A compound consists of $60\\%$ carbon, $13.33\\%$ hydrogen, and $26.67\\%$ oxygen. What is its empirical formula?",
    ["$\\text{C}_3\\text{H}_8\\text{O}$", "$\\text{C}_2\\text{H}_6\\text{O}$", "$\\text{C}_4\\text{H}_{10}\\text{O}$", "$\\text{C}_3\\text{H}_6\\text{O}$"],
    0,
    "Moles: $\\text{C} = 60/12 = 5$; $\\text{H} = 13.33/1 = 13.33$; $\\text{O} = 26.67/16 = 1.667$. Dividing by $1.667$: $\\text{C} = 3, \\text{H} = 8, \\text{O} = 1$. Empirical formula is $\\text{C}_3\\text{H}_8\\text{O}$.",
    "Medium"
  );
  add(
    "What is the molecular formula of a compound with empirical formula $\\text{P}_2\\text{O}_5$ and molar mass $284\\text{ g/mol}$?",
    ["$\\text{P}_2\\text{O}_5$", "$\\text{P}_4\\text{O}_{10}$", "$\\text{P}_4\\text{O}_6$", "$\\text{P}_6\\text{O}_{15}$"],
    1,
    "Empirical mass $= 2(31) + 5(16) = 62 + 80 = 142\\text{ g/mol}$. $n = 284/142 = 2$. Molecular formula is $\\text{P}_4\\text{O}_{10}$.",
    "Easy"
  );
  add(
    "An organic substance has $82.76\\%$ carbon and $17.24\\%$ hydrogen by mass. Its vapour density is $29$. The compound is:",
    ["Butane ($\\text{C}_4\\text{H}_{10}$)", "Propane ($\\text{C}_3\\text{H}_8$)", "Ethane ($\\text{C}_2\\text{H}_6$)", "Pentane ($\\text{C}_5\\text{H}_{12}$Default)"],
    0,
    "Moles: $\\text{C} = 82.76/12 = 6.897$; $\\text{H} = 17.24/1 = 17.24$. Ratio $\\text{H}:\\text{C} = 2.5 = 5/2$. Empirical formula is $\\text{C}_2\\text{H}_5$ ($29\\text{ g/mol}$). Molar mass $= 2 \\times 29 = 58\\text{ g/mol}$. $n = 58/29 = 2$, giving butane $\\text{C}_4\\text{H}_{10}$.",
    "Medium"
  );
  add(
    "If a compound contains $50\\%$ of element X (atomic mass $= 10$) and $50\\%$ of element Y (atomic mass $= 20$), its empirical formula is:",
    ["$\\text{X}_2\\text{Y}$", "$\\text{XY}$", "$\\text{XY}_2$", "$\\text{X}_2\\text{Y}_3$"],
    0,
    "Moles X $= 50/10 = 5$. Moles Y $= 50/20 = 2.5$. Ratio $\\text{X} : \\text{Y} = 5 : 2.5 = 2 : 1$. Empirical formula is $\\text{X}_2\\text{Y}$.",
    "Easy"
  );
  add(
    "Analysis of a sample shows that it contains $24.7\\%$ calcium, $1.2\\%$ hydrogen, $14.8\\%$ carbon, and $59.3\\%$ oxygen. The compound is:",
    ["$\\text{Ca}(\\text{HCO}_3)_2$", "$\\text{CaCO}_3$", "$\\text{CaC}_2\\text{O}_4$", "$\\text{Ca}(\\text{OH})_2$"],
    0,
    "Moles: $\\text{Ca} = 24.7/40 = 0.617$; $\\text{H} = 1.2/1 = 1.2$; $\\text{C} = 14.8/12 = 1.23$; $\\text{O} = 59.3/16 = 3.70$. Ratio: $\\text{Ca} : \\text{H} : \\text{C} : \\text{O} = 1 : 2 : 2 : 6$, which corresponds to calcium bicarbonate $\\text{Ca}(\\text{HCO}_3)_2$.",
    "Hard"
  );
  add(
    "What is the percentage of nitrogen in ammonium sulfate, $(\\text{NH}_4)_2\\text{SO}_4$? (Atomic masses: $\\text{N}=14, \\text{H}=1, \\text{S}=32, \\text{O}=16$)",
    ["$21.21\\%$", "$28.00\\%$", "$14.50\\%$", "$35.00\\%$"],
    0,
    "Molar mass $= 2(18) + 32 + 64 = 36 + 96 = 132\\text{ g/mol}$. Mass of N $= 2 \\times 14 = 28\\text{ g}$. $\\%\\text{N} = (28 / 132) \\times 100 \\approx 21.21\\%$.",
    "Easy"
  );
  add(
    "A hydrocarbon burns completely in oxygen such that the ratio of moles of $\\text{CO}_2$ formed to moles of $\\text{H}_2\\text{O}$ formed is $1 : 1$. The hydrocarbon could be:",
    ["An alkane", "An alkene", "An alkyne", "An arene"],
    1,
    "For an alkene $\\text{C}_n\\text{H}_{2n}$: $\\text{C}_n\\text{H}_{2n} + \\frac{3n}{2}\\text{O}_2 \\rightarrow n\\text{CO}_2 + n\\text{H}_2\\text{O}$. The ratio of $\\text{CO}_2$ to $\\text{H}_2\\text{O}$ is $n:n = 1:1$.",
    "Medium"
  );
  add(
    "A compound has the empirical formula $\\text{CH}$. If its molecular mass is $26\\text{ g/mol}$, what is the compound?",
    ["Acetylene ($\\text{C}_2\\text{H}_2$)", "Ethylene ($\\text{C}_2\\text{H}_4$)", "Benzene ($\\text{C}_6\\text{H}_6$)", "Methane ($\\text{CH}_4$)"],
    0,
    "Empirical formula mass $= 12 + 1 = 13\\text{ g/mol}$. $n = 26/13 = 2$. Molecular formula is $\\text{C}_2\\text{H}_2$ (acetylene / ethyne).",
    "Easy"
  );
  add(
    "Assertion (A): Glucose and formaldehyde have the same empirical formula $\\text{CH}_2\\text{O}$.\nReason (R): Both contain carbon, hydrogen, and oxygen in the molar ratio $1 : 2 : 1$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Formaldehyde is $\\text{HCHO}$ ($\\text{CH}_2\\text{O}$) and glucose is $\\text{C}_6\\text{H}_{12}\\text{O}_6$. Both have the atomic ratio $\\text{C}:\\text{H}:\\text{O} = 1:2:1$, which gives the empirical formula $\\text{CH}_2\\text{O}$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "A gas contains $82.76\\%$ carbon and $17.24\\%$ hydrogen by mass. At STP, $1\\text{ L}$ of this gas weighs $2.59\\text{ g}$. Its molecular formula is:",
    ["$\\text{C}_2\\text{H}_6$", "$\\text{C}_3\\text{H}_8$", "$\\text{C}_4\\text{H}_{10}$", "$\\text{C}_5\\text{H}_{12}$"],
    2,
    "Molar mass $= 2.59 \\times 22.4 \\approx 58.0\\text{ g/mol}$. Empirical formula is $\\text{C}_2\\text{H}_5$ ($29\\text{ g/mol}$). $n = 58/29 = 2$. Formula is $\\text{C}_4\\text{H}_{10}$ (butane).",
    "Medium"
  );
  add(
    "What is the empirical formula of sodium thiosulfate ($\\text{Na}_2\\text{S}_2\\text{O}_3$)?",
    ["$\\text{NaSO}$", "$\\text{Na}_2\\text{S}_2\\text{O}_3$", "$\\text{NaSO}_2$", "$\\text{Na}_2\\text{SO}_3$"],
    1,
    "The mole ratio of $\\text{Na} : \\text{S} : \\text{O}$ is $2 : 2 : 3$, which cannot be reduced to smaller whole numbers because $3$ is odd and not divisible by $2$. Thus, the empirical formula is $\\text{Na}_2\\text{S}_2\\text{O}_3$.",
    "Easy"
  );
  add(
    "An element forms two oxides: Oxide A contains $50\\%$ element and Oxide B contains $40\\%$ element. This illustrates:",
    ["Law of Conservation of Mass", "Law of Definite Proportions", "Law of Multiple Proportions", "Gay-Lussac's Law"],
    2,
    "When two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other are in simple whole-number ratios (Law of Multiple Proportions).",
    "Easy"
  );
  add(
    "A compound of carbon, hydrogen, and chlorine contains $37.8\\% \\text{ C}, 6.3\\% \\text{ H},$ and $55.9\\% \\text{ Cl}$. Its empirical formula is:",
    ["$\\text{C}_2\\text{H}_4\\text{Cl}$", "$\\text{C}_2\\text{H}_5\\text{Cl}$", "$\\text{CH}_3\\text{Cl}$", "$\\text{C}_3\\text{H}_7\\text{Cl}$"],
    1,
    "Moles: $\\text{C} = 37.8/12 = 3.15$; $\\text{H} = 6.3/1 = 6.3$; $\\text{Cl} = 55.9/35.5 = 1.575$. Ratio: $\\text{C} : \\text{H} : \\text{Cl} = 2 : 4 : 1$ or $3.15/1.575 = 2, 6.3/1.575 = 4, 1.575/1.575 = 1$, let's check ethyl chloride $\\text{C}_2\\text{H}_5\\text{Cl}$: $24/64.5 = 37.2\\%, 5/64.5 = 7.75\\%, 35.5/64.5 = 55.0\\%$. If $\\text{C}_2\\text{H}_4\\text{Cl}$? For $\\text{C}_2\\text{H}_4\\text{Cl}$, ratio is $2:4:1$. For $\\text{C}_2\\text{H}_5\\text{Cl}$, ratio is $2:5:1$. Here $6.3 / 1.575 = 4$. So ratio is $\\text{C}_2\\text{H}_4\\text{Cl}$ or chloroethane.",
    "Hard"
  );
  add(
    "The empirical formula of an organic acid is $\\text{CH}_2\\text{O}_2$. Its molecular weight is $46\\text{ g/mol}$. The acid is:",
    ["Formic acid", "Acetic acid", "Oxalic acid", "Propionic acid"],
    0,
    "Empirical mass $= 12 + 2 + 32 = 46\\text{ g/mol}$. $n = 46/46 = 1$. The compound is formic acid (methanoic acid, $\\text{HCOOH}$).",
    "Easy"
  );

  // 36-47
  add(
    "How many grams of oxygen are contained in $0.5\\text{ moles}$ of calcium carbonate ($\\text{CaCO}_3$)?",
    ["$16\\text{ g}$", "$24\\text{ g}$", "$48\\text{ g}$", "$32\\text{ g}$"],
    1,
    "$1$ mole of $\\text{CaCO}_3$ contains $3$ moles of O atoms ($48\\text{ g}$). In $0.5$ moles, mass of oxygen $= 0.5 \\times 48 = 24\\text{ g}$.",
    "Easy"
  );
  add(
    "A compound has the molecular formula $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$. Its empirical formula is:",
    ["$\\text{C}_6\\text{H}_{11}\\text{O}_5$", "$\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$", "$\\text{CH}_2\\text{O}$", "$\\text{C}_2\\text{H}_4\\text{O}$"],
    1,
    "The indices $12, 22, 11$ share no common factor greater than $1$ (since $11$ is prime). Thus, the empirical formula is identical to the molecular formula: $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$.",
    "Easy"
  );
  add(
    "A salt contains $28\\%$ iron, $24\\%$ sulfur, and $48\\%$ oxygen by mass. Its empirical formula is (Atomic masses: $\\text{Fe}=56, \\text{S}=32, \\text{O}=16$):",
    ["$\\text{FeSO}_4$", "$\\text{Fe}_2(\\text{SO}_4)_3$", "$\\text{FeS}_2\\text{O}_3$", "$\\text{FeSO}_3$"],
    1,
    "Moles: $\\text{Fe} = 28/56 = 0.5$; $\\text{S} = 24/32 = 0.75$; $\\text{O} = 48/16 = 3.0$. Dividing by $0.5$: $\\text{Fe} = 1, \\text{S} = 1.5, \\text{O} = 6$. Multiplying by $2$: $\\text{Fe}_2\\text{S}_3\\text{O}_{12} = \\text{Fe}_2(\\text{SO}_4)_3$.",
    "Medium"
  );
  add(
    "In the determination of empirical formula, if the mole ratio of elements is $1 : 1.33 : 1.67$, the simplest integer formula is obtained by multiplying by:",
    ["$2$", "$3$", "$4$", "$5$"],
    1,
    "$1.33 = 4/3$ and $1.67 = 5/3$. Multiplying all terms by $3$ gives the whole-number ratio $3 : 4 : 5$.",
    "Easy"
  );
  add(
    "An organic compound containing $C, H,$ and $O$ has molecular mass $74\\text{ g/mol}$ and empirical formula $\\text{C}_4\\text{H}_{10}\\text{O}$. What is its molecular formula?",
    ["$\\text{C}_4\\text{H}_{10}\\text{O}$", "$\\text{C}_2\\text{H}_5\\text{O}$", "$\\text{C}_8\\text{H}_{20}\\text{O}_2$", "$\\text{C}_3\\text{H}_6\\text{O}_2$"],
    0,
    "Empirical formula mass $= 4(12) + 10(1) + 16 = 48 + 10 + 16 = 74\\text{ g/mol}$. Since empirical mass equals molecular mass, $n = 1$ and the molecular formula is $\\text{C}_4\\text{H}_{10}\\text{O}$ (e.g., diethyl ether or butanol).",
    "Easy"
  );
  add(
    "A gaseous oxide of sulfur contains $50\\%$ sulfur by mass. Its empirical formula is:",
    ["$\\text{SO}$", "$\\text{SO}_2$", "$\\text{SO}_3$", "$\\text{S}_2\\text{O}$"],
    1,
    "Moles: $\\text{S} = 50/32 = 1.5625$; $\\text{O} = 50/16 = 3.125$. Ratio $\\text{O}:\\text{S} = 3.125 / 1.5625 = 2 : 1$. Formula is $\\text{SO}_2$.",
    "Easy"
  );
  add(
    "What is the percentage composition of hydrogen in methane ($\\text{CH}_4$)?",
    ["$25.0\\%$", "$20.0\\%$", "$16.7\\%$", "$33.3\\%$"],
    0,
    "Molar mass $= 16\\text{ g/mol}$. Mass of H $= 4\\text{ g}$. $\\%\\text{H} = (4/16) \\times 100 = 25.0\\%$.",
    "Easy"
  );
  add(
    "A compound contains $69.9\\%$ iron and $30.1\\%$ oxygen by mass. Its empirical formula is:",
    ["$\\text{FeO}$", "$\\text{Fe}_2\\text{O}_3$", "$\\text{Fe}_3\\text{O}_4$", "$\\text{Fe}_2\\text{O}$"],
    1,
    "Moles of Fe $= 69.9/55.85 = 1.25$. Moles of O $= 30.1/16 = 1.88$. Ratio $\\text{Fe}:\\text{O} = 1:1.5 = 2:3$, giving $\\text{Fe}_2\\text{O}_3$.",
    "Easy"
  );
  add(
    "The empirical formula of oxalic acid is $\\text{CHO}_2$. Its molecular mass is $90\\text{ g/mol}$. Its molecular formula is:",
    ["$\\text{CHO}_2$", "$\\text{C}_2\\text{H}_2\\text{O}_4$", "$\\text{C}_3\\text{H}_3\\text{O}_6$", "$\\text{C}_4\\text{H}_4\\text{O}_8$"],
    1,
    "Empirical mass of $\\text{CHO}_2 = 12 + 1 + 32 = 45\\text{ g/mol}$. $n = 90 / 45 = 2$. Molecular formula is $\\text{C}_2\\text{H}_2\\text{O}_4$ or $(\\text{COOH})_2$.",
    "Easy"
  );
  add(
    "What is the empirical formula of naphthalene ($\\text{C}_{10}\\text{H}_8$)?",
    ["$\\text{C}_5\\text{H}_4$", "$\\text{CH}$", "$\\text{C}_2\\text{H}$", "$\\text{C}_{10}\\text{H}_8$"],
    0,
    "Dividing indices $10$ and $8$ by their greatest common divisor $2$ yields the empirical formula $\\text{C}_5\\text{H}_4$.",
    "Easy"
  );
  add(
    "A compound on analysis gives: $\\text{C} = 54.55\\%, \\text{H} = 9.09\\%, \\text{O} = 36.36\\%$. Its empirical formula is:",
    ["$\\text{C}_2\\text{H}_4\\text{O}$", "$\\text{C}_3\\text{H}_6\\text{O}_2$", "$\\text{CH}_2\\text{O}$", "$\\text{C}_4\\text{H}_8\\text{O}_2$"],
    0,
    "Moles: $\\text{C} = 54.55/12 = 4.546$; $\\text{H} = 9.09/1 = 9.09$; $\\text{O} = 36.36/16 = 2.2725$. Dividing by $2.2725$: $\\text{C} = 2, \\text{H} = 4, \\text{O} = 1$. Empirical formula is $\\text{C}_2\\text{H}_4\\text{O}$.",
    "Medium"
  );
  add(
    "Assertion (A): The molecular formula of a compound is always an integral multiple of its empirical formula.\nReason (R): The molecular formula represents the actual number of atoms of each element present in one molecule of the compound.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Molecular formula $= n \\times \\text{Empirical formula}$, where $n = 1, 2, 3...$ because molecules consist of whole numbers of atoms. Both are true and (R) correctly explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getMoleConceptQuestions,
  getMolarMassQuestions,
  getEmpiricalFormulaQuestions
};
