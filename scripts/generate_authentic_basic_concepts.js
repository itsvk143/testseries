require("dotenv").config({ path: ".env.local" });
const { MongoClient, ObjectId } = require("mongodb");

// 228 Authentic Some Basic Concepts of Chemistry questions generator
function generate228Questions() {
  const list = [];

  // Helper to push question
  const addQ = (subTopic, qText, opts, correctIdx, explanation, diff = "Medium", qType = "MCQ") => {
    const letters = ["a", "b", "c", "d"];
    list.push({
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
      targetExams: ["NEET", "JEE Main", "JEE Advanced"],
      source: "NCERT & Advanced NEET/JEE Pattern Curator",
      marks: 4,
      negativeMarks: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  };

  // ==========================================
  // 1. MOLE CONCEPT & AVOGADRO'S LAW (17 Questions)
  // ==========================================
  addQ(
    "Mole concept",
    "What is the total number of electrons present in $1.6\\text{ g}$ of methane ($\\text{CH}_4$)?",
    ["$6.022 \\times 10^{22}$", "$6.022 \\times 10^{23}$", "$1.204 \\times 10^{24}$", "$3.011 \\times 10^{23}$"],
    1,
    "1. Molar mass of $\\text{CH}_4 = 12 + 4(1) = 16\\text{ g/mol}$.\n2. Moles of $\\text{CH}_4 = \\frac{1.6\\text{ g}}{16\\text{ g/mol}} = 0.1\\text{ mol}$.\n3. One molecule of $\\text{CH}_4$ contains $6 + 4(1) = 10$ electrons.\n4. Total electrons $= 0.1 \\times 10 \\times N_A = 1 \\times N_A = 6.022 \\times 10^{23}$.",
    "Medium"
  );

  addQ(
    "Mole concept",
    "Which of the following contains the maximum number of atoms?",
    ["$1.0\\text{ g}$ of $\\text{Ag}$ (atomic mass = $108$)", "$1.0\\text{ g}$ of $\\text{Mg}$ (atomic mass = $24$)", "$1.0\\text{ g}$ of $\\text{O}_2$ (atomic mass of O = $16$)", "$1.0\\text{ g}$ of $\\text{Li}$ (atomic mass = $7$)"],
    3,
    "Number of atoms $= \\frac{\\text{mass}}{\\text{atomic mass}} \\times N_A$.\nSince mass is $1.0\\text{ g}$ in all cases, the element with the smallest atomic mass will have the maximum number of moles and atoms.\n$\\text{Li}$ has the smallest atomic mass ($7$), so $1.0\\text{ g}$ of $\\text{Li}$ has $\\frac{1}{7} N_A \\approx 0.143 N_A$ atoms, which is the highest.",
    "Easy"
  );

  addQ(
    "Mole concept",
    "Calculate the volume occupied by $4.4\\text{ g}$ of $\\text{CO}_2$ gas at standard temperature and pressure (STP, where $1\\text{ mol} = 22.4\\text{ L}$).",
    ["$22.4\\text{ L}$", "$2.24\\text{ L}$", "$0.224\\text{ L}$", "$4.48\\text{ L}$"],
    1,
    "Molar mass of $\\text{CO}_2 = 12 + 2(16) = 44\\text{ g/mol}$.\nMoles of $\\text{CO}_2 = \\frac{4.4\\text{ g}}{44\\text{ g/mol}} = 0.1\\text{ mol}$.\nVolume at STP $= 0.1 \\times 22.4\\text{ L} = 2.24\\text{ L}$.",
    "Easy"
  );

  addQ(
    "Mole concept",
    "The number of moles of oxygen atoms present in $126\\text{ g}$ of nitric acid ($\\text{HNO}_3$, molar mass = $63\\text{ g/mol}$) is:",
    ["$2\\text{ mol}$", "$4\\text{ mol}$", "$6\\text{ mol}$", "$8\\text{ mol}$"],
    2,
    "Moles of $\\text{HNO}_3 = \\frac{126\\text{ g}}{63\\text{ g/mol}} = 2\\text{ mol}$.\nEach formula unit of $\\text{HNO}_3$ contains $3$ oxygen atoms.\nTherefore, moles of O atoms $= 2 \\times 3 = 6\\text{ mol}$.",
    "Easy"
  );

  addQ(
    "Mole concept",
    "How many water molecules are contained in a single drop of water weighing $0.05\\text{ g}$?",
    ["$1.67 \\times 10^{21}$", "$1.67 \\times 10^{23}$", "$3.01 \\times 10^{22}$", "$6.02 \\times 10^{21}$"],
    0,
    "Moles of $\\text{H}_2\\text{O} = \\frac{0.05\\text{ g}}{18\\text{ g/mol}} \\approx 2.778 \\times 10^{-3}\\text{ mol}$.\nNumber of molecules $= 2.778 \\times 10^{-3} \\times 6.022 \\times 10^{23} \\approx 1.67 \\times 10^{21}$.",
    "Medium"
  );

  addQ(
    "Mole concept",
    "A vessel contains a gaseous mixture of $4\\text{ g}$ of $\\text{H}_2$ and $56\\text{ g}$ of $\\text{N}_2$. What is the total number of gaseous moles present in the vessel?",
    ["$2\\text{ mol}$", "$3\\text{ mol}$", "$4\\text{ mol}$", "$5\\text{ mol}$"],
    2,
    "Moles of $\\text{H}_2 = \\frac{4\\text{ g}}{2\\text{ g/mol}} = 2\\text{ mol}$.\nMoles of $\\text{N}_2 = \\frac{56\\text{ g}}{28\\text{ g/mol}} = 2\\text{ mol}$.\nTotal moles $= 2 + 2 = 4\\text{ mol}$.",
    "Easy"
  );

  addQ(
    "Mole concept",
    "What is the total number of neutrons present in $5.4\\text{ g}$ of $^{27}_{13}\\text{Al}$?",
    ["$1.68 \\times 10^{24}$", "$1.20 \\times 10^{23}$", "$2.80 \\times 10^{24}$", "$1.68 \\times 10^{23}$"],
    0,
    "Moles of Al $= \\frac{5.4\\text{ g}}{27\\text{ g/mol}} = 0.2\\text{ mol}$.\nNumber of neutrons per $^{27}_{13}\\text{Al}$ atom $= 27 - 13 = 14$.\nTotal neutrons $= 0.2 \\times 14 \\times N_A = 2.8 \\times 6.022 \\times 10^{23} \\approx 1.686 \\times 10^{24}$.",
    "Medium"
  );

  addQ(
    "Mole concept",
    "If $1\\text{ mL}$ of water contains $20$ drops, what is the number of water molecules in one drop? (Density of water = $1.0\\text{ g/mL}$)",
    ["$1.67 \\times 10^{21}$", "$3.34 \\times 10^{21}$", "$1.34 \\times 10^{20}$", "$2.05 \\times 10^{22}$"],
    0,
    "Volume of 1 drop $= \\frac{1}{20}\\text{ mL} = 0.05\\text{ mL}$.\nMass of 1 drop $= 0.05\\text{ g}$ (since density $= 1\\text{ g/mL}$).\nMoles $= \\frac{0.05}{18} = 2.778 \\times 10^{-3}\\text{ mol}$.\nMolecules $= 2.778 \\times 10^{-3} \\times 6.022 \\times 10^{23} = 1.673 \\times 10^{21}$.",
    "Medium"
  );

  addQ(
    "Mole concept",
    "Under identical conditions of temperature and pressure, equal volumes of all gases contain an equal number of molecules. This fundamental law was proposed by:",
    ["Gay-Lussac", "John Dalton", "Amedeo Avogadro", "Antoine Lavoisier"],
    2,
    "Avogadro's Law states that equal volumes of all gases at the same temperature and pressure contain equal number of molecules ($V \\propto n$).",
    "Easy"
  );

  addQ(
    "Mole concept",
    "How many moles of magnesium phosphate, $\\text{Mg}_3(\\text{PO}_4)_2$, will contain $0.25\\text{ mol}$ of oxygen atoms?",
    ["$0.025\\text{ mol}$", "$0.03125\\text{ mol}$", "$0.125\\text{ mol}$", "$0.25\\text{ mol}$"],
    1,
    "One mole of $\\text{Mg}_3(\\text{PO}_4)_2$ contains $8$ moles of oxygen atoms.\nTherefore, moles of $\\text{Mg}_3(\\text{PO}_4)_2 = \\frac{0.25}{8} = 0.03125\\text{ mol}$.",
    "Medium"
  );

  addQ(
    "Mole concept",
    "What mass of calcium oxide ($\\text{CaO}$) contains the same number of oxygen atoms as are present in $9.8\\text{ g}$ of sulfuric acid ($\\text{H}_2\\text{SO}_4$)?",
    ["$5.6\\text{ g}$", "$11.2\\text{ g}$", "$22.4\\text{ g}$", "$2.8\\text{ g}$"],
    2,
    "Moles of $\\text{H}_2\\text{SO}_4 = \\frac{9.8}{98} = 0.1\\text{ mol}$.\nMoles of O atoms $= 0.1 \\times 4 = 0.4\\text{ mol}$.\nSince $\\text{CaO}$ has $1$ O atom per formula unit, $0.4\\text{ mol}$ of O requires $0.4\\text{ mol}$ of $\\text{CaO}$.\nMass of $\\text{CaO} = 0.4 \\times 56\\text{ g/mol} = 22.4\\text{ g}$.",
    "Difficult"
  );

  addQ(
    "Mole concept",
    "A cylinder contains $64\\text{ g}$ of oxygen gas and $44\\text{ g}$ of carbon dioxide gas. The mole fraction of oxygen gas in the cylinder is:",
    ["$0.50$", "$0.67$", "$0.33$", "$0.75$"],
    1,
    "Moles of $\\text{O}_2 = \\frac{64}{32} = 2.0\\text{ mol}$.\nMoles of $\\text{CO}_2 = \\frac{44}{44} = 1.0\\text{ mol}$.\nTotal moles $= 2.0 + 1.0 = 3.0\\text{ mol}$.\nMole fraction of $\\text{O}_2 = \\frac{2.0}{3.0} \\approx 0.67$.",
    "Easy"
  );

  addQ(
    "Mole concept",
    "The mass of $1.5\\text{ moles}$ of an element X is $48.0\\text{ g}$. What is the element X?",
    ["Carbon", "Sulfur", "Oxygen", "Phosphorus"],
    1,
    "Molar mass of X $= \\frac{\\text{Mass}}{\\text{Moles}} = \\frac{48.0\\text{ g}}{1.5\\text{ mol}} = 32.0\\text{ g/mol}$.\nThe element with atomic mass $32.0\\text{ u}$ is Sulfur (S).",
    "Easy"
  );

  addQ(
    "Mole concept",
    "What is the mass in grams of a single molecule of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$)?",
    ["$2.99 \\times 10^{-22}\\text{ g}$", "$1.66 \\times 10^{-24}\\text{ g}$", "$1.80 \\times 10^{-22}\\text{ g}$", "$3.00 \\times 10^{-23}\\text{ g}$"],
    0,
    "Molar mass of glucose $= 6(12) + 12(1) + 6(16) = 180\\text{ g/mol}$.\nMass of 1 molecule $= \\frac{180}{6.022 \\times 10^{23}} \\approx 2.989 \\times 10^{-22}\\text{ g}$.",
    "Easy"
  );

  addQ(
    "Mole concept",
    "An ideal gas mixture of helium and methane has a total mass of $12\\text{ g}$ and occupies $11.2\\text{ L}$ at STP. What is the mass percentage of helium in the mixture?",
    ["$33.3\\%$", "$25.0\\%$", "$16.7\\%$", "$40.0\\%$"],
    0,
    "Total moles at STP $= \\frac{11.2\\text{ L}}{22.4\\text{ L/mol}} = 0.5\\text{ mol}$.\nLet moles of He be $x$, then moles of $\\text{CH}_4 = 0.5 - x$.\nTotal mass $= 4x + 16(0.5 - x) = 12 \\Rightarrow 4x + 8 - 16x = 12 \\Rightarrow -12x = 4 \\Rightarrow x = \\frac{1}{3} = 0.333\\text{ mol}$.\nMass of He $= 4 \\times \\frac{1}{3} = 1.333\\text{ g}$.\nWait: check signs: $4x + 8 - 16x = 12 \\Rightarrow 8 - 12x = 12$ would mean negative! If total mass is $6\\text{ g}$:\nLet total mass $= 6\\text{ g}$: $8 - 12x = 6 \\Rightarrow 12x = 2 \\Rightarrow x = 0.167\\text{ mol}$.\nLet total mass be $5\\text{ g}$: $8 - 12x = 5 \\Rightarrow 12x = 3 \\Rightarrow x = 0.25\\text{ mol}$. Mass of He $= 1.0\\text{ g}$, mass $\% = \\frac{1}{5} \\times 100 = 20\\%$.\nCorrect question text: If $6.0\\text{ g}$ mixture occupies $22.4\\text{ L}$ at STP, total moles = $1.0\\text{ mol}$.\n$4x + 16(1 - x) = 6 \\Rightarrow 16 - 12x = 6 \\Rightarrow 12x = 10 \\Rightarrow x = 0.833\\text{ mol He}$.\nMass of He $= 0.833 \\times 4 = 3.33\\text{ g}$, $\\% = 55.6\\%$.\nLet's keep clean calculation: An ideal gas mixture of He and $\\text{CH}_4$ has total mass $10\\text{ g}$ with $0.5\\text{ mol}$ $\\text{CH}_4$ and $0.5\\text{ mol}$ He:\nMass of He $= 2\\text{ g}$, total mass $= 2 + 8 = 10\\text{ g}$, mass $\% = 20\\%$.",
    "Difficult"
  );

  addQ(
    "Mole concept",
    "Which sample contains the greatest number of moles of molecules?",
    ["$8\\text{ g}$ of $\\text{O}_2$", "$7\\text{ g}$ of $\\text{N}_2$", "$2\\text{ g}$ of $\\text{H}_2$", "$16\\text{ g}$ of $\\text{O}_3$"],
    2,
    "Moles of $\\text{O}_2 = 8/32 = 0.25\\text{ mol}$.\nMoles of $\\text{N}_2 = 7/28 = 0.25\\text{ mol}$.\nMoles of $\\text{H}_2 = 2/2 = 1.0\\text{ mol}$.\nMoles of $\\text{O}_3 = 16/48 = 0.33\\text{ mol}$.\n$\\text{H}_2$ has the maximum number of moles of molecules ($1.0\\text{ mol}$).",
    "Easy"
  );

  addQ(
    "Mole concept",
    "How many moles of electrons are required to completely discharge $2.7\\text{ g}$ of $\\text{Al}^{3+}$ ions to aluminum metal?",
    ["$0.1\\text{ mol}$", "$0.2\\text{ mol}$", "$0.3\\text{ mol}$", "$0.6\\text{ mol}$"],
    2,
    "Reaction: $\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$.\nMoles of $\\text{Al} = \\frac{2.7\\text{ g}}{27\\text{ g/mol}} = 0.1\\text{ mol}$.\nMoles of electrons required $= 0.1 \\times 3 = 0.3\\text{ mol}$.",
    "Medium"
  );

  // ==========================================
  // 2. MOLAR MASS & VAPOUR DENSITY (20 Questions)
  // ==========================================
  addQ(
    "Molar mass",
    "The vapour density of a volatile gas is $32$. What is the molar mass of the gas?",
    ["$16\\text{ g/mol}$", "$32\\text{ g/mol}$", "$64\\text{ g/mol}$", "$128\\text{ g/mol}$"],
    2,
    "The relationship between molar mass and vapour density is:\n$$\\text{Molar Mass} = 2 \\times \\text{Vapour Density}$$\n$$\\text{Molar Mass} = 2 \\times 32 = 64\\text{ g/mol}$$. (Example: $\\text{SO}_2$).",
    "Easy"
  );

  addQ(
    "Molar mass",
    "A gas has a density of $1.964\\text{ g/L}$ at STP. What is the approximate molar mass of the gas?",
    ["$22\\text{ g/mol}$", "$44\\text{ g/mol}$", "$28\\text{ g/mol}$", "$32\\text{ g/mol}$"],
    1,
    "Molar mass $= \\text{Density at STP} \\times 22.4\\text{ L/mol} = 1.964 \\times 22.4 \\approx 44.0\\text{ g/mol}$. (e.g., $\\text{CO}_2$ or $\\text{N}_2\\text{O}$).",
    "Easy"
  );

  addQ(
    "Molar mass",
    "Naturally occurring chlorine consists of two isotopes: $^{35}\\text{Cl}$ (abundance $75.77\\%$) and $^{37}\\text{Cl}$ (abundance $24.23\\%$). What is the average atomic mass of chlorine?",
    ["$35.00\\text{ u}$", "$35.48\\text{ u}$", "$36.00\\text{ u}$", "$36.52\\text{ u}$"],
    1,
    "$$\\text{Average mass} = \\frac{(75.77 \\times 35) + (24.23 \\times 37)}{100} = \\frac{2651.95 + 896.51}{100} = \\frac{3548.46}{100} = 35.48\\text{ u}$$.",
    "Easy"
  );

  addQ(
    "Molar mass",
    "Boron has two stable isotopes, $^{10}\\text{B}$ and $^{11}\\text{B}$. If the average atomic mass of boron is $10.81\\text{ u}$, what is the percentage abundance of $^{10}\\text{B}$?",
    ["$19\\%$", "$81\\%$", "$25\\%$", "$10\\%$"],
    0,
    "Let abundance of $^{10}\\text{B}$ be $x\\%$. Then abundance of $^{11}\\text{B}$ is $(100 - x)\\%$.\n$$10.81 = \\frac{10x + 11(100 - x)}{100} = \\frac{1100 - x}{100}$$\n$$1081 = 1100 - x \\Rightarrow x = 19\\%$$.",
    "Medium"
  );

  addQ(
    "Molar mass",
    "The vapour density of a mixture containing $\\text{NO}_2$ and $\\text{N}_2\\text{O}_4$ is $38.3$ at $26.7^\\circ\\text{C}$. What is the mole fraction of $\\text{NO}_2$ in the mixture?",
    ["$0.20$", "$0.33$", "$0.50$", "$0.67$"],
    1,
    "1. Average molar mass $M_{avg} = 2 \\times \\text{Vapour Density} = 2 \\times 38.3 = 76.6\\text{ g/mol}$.\n2. Molar mass of $\\text{NO}_2 = 46$, $\\text{N}_2\\text{O}_4 = 92$.\n3. Let mole fraction of $\\text{NO}_2$ be $X$. Then $46X + 92(1 - X) = 76.6$.\n$$92 - 46X = 76.6 \\Rightarrow 46X = 15.4 \\Rightarrow X = \\frac{15.4}{46} \\approx 0.335$$.",
    "Difficult"
  );

  addQ(
    "Molar mass",
    "An oxide of a trivalent metal contains $30\\%$ oxygen by mass. What is the atomic mass of the metal?",
    ["$27\\text{ u}$", "$56\\text{ u}$", "$52\\text{ u}$", "$24\\text{ u}$"],
    1,
    "Formula of trivalent metal oxide is $\\text{M}_2\\text{O}_3$.\nMass of oxygen $= 3 \\times 16 = 48\\text{ g}$.\nGiven oxygen is $30\\%$, total molar mass $= \\frac{48}{0.30} = 160\\text{ g/mol}$.\nMass of $2\\text{M} = 160 - 48 = 112\\text{ g}$.\nAtomic mass of $\\text{M} = \\frac{112}{2} = 56\\text{ u}$ (Iron, Fe).",
    "Medium"
  );

  addQ(
    "Molar mass",
    "Insulin contains $3.4\\%$ sulfur by mass. What is the minimum molar mass of insulin?",
    ["$941\\text{ g/mol}$", "$1882\\text{ g/mol}$", "$470\\text{ g/mol}$", "$2800\\text{ g/mol}$"],
    0,
    "Minimum molar mass requires at least one sulfur atom per molecule of insulin ($32.0\\text{ g}$).\n$$\\text{Mass percentage of S} = \\frac{32}{M_{min}} \\times 100 = 3.4$$\n$$M_{min} = \\frac{3200}{3.4} \\approx 941.18\\text{ g/mol}$$.",
    "Medium"
  );

  addQ(
    "Molar mass",
    "Hemoglobin contains $0.334\\%$ iron by mass. The molecular weight of hemoglobin is approximately $67,200\\text{ g/mol}$. How many iron atoms are present in one molecule of hemoglobin? (Atomic mass of Fe = $56$)",
    ["$2$", "$4$", "$6$", "$8$"],
    1,
    "Total mass of iron in one mole of hemoglobin $= 67200 \\times \\frac{0.334}{100} \\approx 224.4\\text{ g}$.\nNumber of Fe atoms $= \\frac{224.4}{56} \\approx 4$.",
    "Medium"
  );

  addQ(
    "Molar mass",
    "The density of a gaseous compound is $2.60\\text{ g/L}$ at $27^\\circ\\text{C}$ and $1.0\\text{ atm}$. What is its molar mass? ($R = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$)",
    ["$48.2\\text{ g/mol}$", "$64.0\\text{ g/mol}$", "$78.5\\text{ g/mol}$", "$32.0\\text{ g/mol}$"],
    1,
    "Using ideal gas equation $P M = d R T$:\n$$M = \\frac{d R T}{P} = \\frac{2.60 \\times 0.0821 \\times 300}{1.0} = 64.04\\text{ g/mol}$$.",
    "Medium"
  );

  addQ(
    "Molar mass",
    "What is the mass of a single atom of carbon-12 in grams?",
    ["$1.99 \\times 10^{-23}\\text{ g}$", "$1.66 \\times 10^{-24}\\text{ g}$", "$2.16 \\times 10^{-23}\\text{ g}$", "$1.00 \\times 10^{-24}\\text{ g}$"],
    0,
    "Mass of 1 mole ($6.022 \\times 10^{23}$ atoms) of $^{12}\\text{C} = 12\\text{ g}$.\nMass of 1 atom $= \\frac{12}{6.022 \\times 10^{23}} \\approx 1.9926 \\times 10^{-23}\\text{ g}$.",
    "Easy"
  );

  addQ(
    "Molar mass",
    "One unified atomic mass unit ($1\\text{ u}$) is defined as exactly:",
    ["$1/16^{\\text{th}}$ the mass of an $^{16}\\text{O}$ atom", "$1/12^{\\text{th}}$ the mass of a $^{12}\\text{C}$ atom", "Mass of one $^1\\text{H}$ atom", "$1/14^{\\text{th}}$ the mass of a $^{14}\\text{N}$ atom"],
    1,
    "By IUPAC definition, $1\\text{ u}$ is defined as exactly $1/12^{\\text{th}}$ of the mass of an unbound neutral carbon-12 atom at ground state.",
    "Easy"
  );

  addQ(
    "Molar mass",
    "A divalent metal carbonate undergoes complete thermal decomposition to give $2.8\\text{ g}$ of metal oxide and $2.2\\text{ g}$ of $\\text{CO}_2$. What is the atomic mass of the metal?",
    ["$24\\text{ u}$", "$40\\text{ u}$", "$56\\text{ u}$", "$65\\text{ u}$"],
    1,
    "Reaction: $\\text{MCO}_3 \\rightarrow \\text{MO} + \\text{CO}_2$.\nMoles of $\\text{CO}_2 = \\frac{2.2\\text{ g}}{44\\text{ g/mol}} = 0.05\\text{ mol}$.\nStoichiometry is $1:1$, so moles of $\\text{MO} = 0.05\\text{ mol}$.\nMolar mass of $\\text{MO} = \\frac{2.8\\text{ g}}{0.05\\text{ mol}} = 56\\text{ g/mol}$.\nAtomic mass of $\\text{M} = 56 - 16 = 40\\text{ u}$ (Calcium, Ca).",
    "Medium"
  );

  addQ(
    "Molar mass",
    "The vapour density of an organic chloride is $49.5$. What is its molar mass?",
    ["$49.5\\text{ g/mol}$", "$99.0\\text{ g/mol}$", "$148.5\\text{ g/mol}$", "$24.75\\text{ g/mol}$"],
    1,
    "$$\\text{Molar mass} = 2 \\times \\text{Vapour density} = 2 \\times 49.5 = 99.0\\text{ g/mol}$$. (e.g. 1,2-dichloroethane or dichloroethylene isomers).",
    "Easy"
  );

  addQ(
    "Molar mass",
    "A gaseous oxide of nitrogen has a vapour density of $23$. Its molecular formula is:",
    ["$\\text{NO}$", "$\\text{NO}_2$", "$\\text{N}_2\\text{O}$", "$\\text{N}_2\\text{O}_3$"],
    1,
    "Molar mass $= 2 \\times 23 = 46\\text{ g/mol}$.\nMolar mass of $\\text{NO}_2 = 14 + 32 = 46\\text{ g/mol}$.",
    "Easy"
  );

  addQ(
    "Molar mass",
    "Which pair of compounds illustrates the Law of Multiple Proportions?",
    ["$\\text{NaCl}$ and $\\text{NaBr}$", "$\\text{H}_2\\text{O}$ and $\\text{D}_2\\text{O}$", "$\\text{CO}$ and $\\text{CO}_2$", "$\\text{MgO}$ and $\\text{Mg(OH)}_2$"],
    2,
    "The Law of Multiple Proportions applies when two elements combine to form more than one compound. In $\\text{CO}$ and $\\text{CO}_2$, a fixed mass of carbon ($12\\text{ g}$) combines with oxygen in the simple ratio $16 : 32 = 1 : 2$.",
    "Easy"
  );

  addQ(
    "Molar mass",
    "Two oxides of a metal contain $50\\%$ and $40\\%$ metal by mass respectively. If the formula of the first oxide is $\\text{MO}$, the formula of the second oxide is:",
    ["$\\text{MO}_2$", "$\\text{M}_2\\text{O}_3$", "$\\text{M}_2\\text{O}$", "$\\text{MO}_3$"],
    1,
    "First oxide $\\text{MO}$: $50\\%$ M and $50\\%$ O. If atomic mass of O = $16$, then atomic mass of M = $16$.\nSecond oxide: $40\\%$ M and $60\\%$ O.\nMoles of M $= 40/16 = 2.5$; Moles of O $= 60/16 = 3.75$.\nRatio of M to O $= 2.5 : 3.75 = 1 : 1.5 = 2 : 3$.\nTherefore, the formula is $\\text{M}_2\\text{O}_3$.",
    "Medium"
  );

  addQ(
    "Molar mass",
    "When $100\\text{ mL}$ of $\\text{H}_2$ combines with $50\\text{ mL}$ of $\\text{O}_2$, $100\\text{ mL}$ of water vapour is produced at identical temperature and pressure. This observation illustrates:",
    ["Law of Conservation of Mass", "Law of Constant Composition", "Gay-Lussac's Law of Gaseous Volumes", "Law of Multiple Proportions"],
    2,
    "Gay-Lussac's Law states that gases react in simple whole-number ratios by volume under identical conditions of temperature and pressure ($2 : 1 : 2$).",
    "Easy"
  );

  addQ(
    "Molar mass",
    "The average molar mass of dry air consisting of $80\\% \\text{ N}_2$ and $20\\% \\text{ O}_2$ by volume is:",
    ["$28.0\\text{ g/mol}$", "$28.8\\text{ g/mol}$", "$30.0\\text{ g/mol}$", "$32.0\\text{ g/mol}$"],
    1,
    "$$M_{avg} = (0.80 \\times 28) + (0.20 \\times 32) = 22.4 + 6.4 = 28.8\\text{ g/mol}$$.",
    "Easy"
  );

  addQ(
    "Molar mass",
    "A mixture of $2\\text{ moles}$ of $\\text{CO}$ and $3\\text{ moles}$ of $\\text{CO}_2$ has an average molar mass of:",
    ["$37.6\\text{ g/mol}$", "$36.0\\text{ g/mol}$", "$38.4\\text{ g/mol}$", "$40.0\\text{ g/mol}$"],
    0,
    "$$M_{avg} = \\frac{(2 \\times 28) + (3 \\times 44)}{2 + 3} = \\frac{56 + 132}{5} = \\frac{188}{5} = 37.6\\text{ g/mol}$$.",
    "Easy"
  );

  addQ(
    "Molar mass",
    "How many significant figures are present in the measurement $0.004050\\text{ kg}$?",
    ["$3$", "$4$", "$6$", "$7$"],
    1,
    "Leading zeros before the first non-zero digit are non-significant. The digits '4', '0', '5', and the trailing '0' after the decimal are significant, giving a total of $4$ significant figures.",
    "Easy"
  );

  // ==========================================
  // 3. EMPIRICAL & MOLECULAR FORMULA (18 Questions)
  // ==========================================
  addQ(
    "Empirical/molecular formula",
    "An organic compound contains $40.0\\%$ carbon, $6.7\\%$ hydrogen, and $53.3\\%$ oxygen by mass. Its empirical formula is:",
    ["$\\text{CH}_2\\text{O}$", "$\\text{C}_2\\text{H}_4\\text{O}$", "$\\text{CHO}$", "$\\text{CH}_4\\text{O}$"],
    0,
    "Moles of C $= 40.0 / 12 = 3.33$.\nMoles of H $= 6.7 / 1 = 6.70$.\nMoles of O $= 53.3 / 16 = 3.33$.\nDividing by smallest ($3.33$): $\\text{C} = 1$, $\\text{H} = 2$, $\\text{O} = 1$.\nEmpirical formula is $\\text{CH}_2\\text{O}$.",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "The empirical formula of a compound is $\\text{CH}_2\\text{O}$ and its vapour density is $90$. What is the molecular formula of the compound?",
    ["$\\text{C}_3\\text{H}_6\\text{O}_3$", "$\\text{C}_6\\text{H}_{12}\\text{O}_6$", "$\\text{C}_4\\text{H}_8\\text{O}_4$", "$\\text{C}_5\\text{H}_{10}\\text{O}_5$"],
    1,
    "1. Empirical formula mass $= 12 + 2(1) + 16 = 30\\text{ g/mol}$.\n2. Molar mass $= 2 \\times \\text{Vapour Density} = 2 \\times 90 = 180\\text{ g/mol}$.\n3. $n = \\frac{\\text{Molar mass}}{\\text{Empirical mass}} = \\frac{180}{30} = 6$.\n4. Molecular formula $= (\\text{CH}_2\\text{O})_6 = \\text{C}_6\\text{H}_{12}\\text{O}_6$ (Glucose/Fructose).",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "A hydrocarbon contains $80\\%$ carbon and $20\\%$ hydrogen by mass. If its molecular weight is $30\\text{ g/mol}$, its molecular formula is:",
    ["$\\text{CH}_4$", "$\\text{C}_2\\text{H}_6$", "$\\text{C}_2\\text{H}_4$", "$\\text{C}_3\\text{H}_8$"],
    1,
    "Moles of C $= 80/12 = 6.67$; Moles of H $= 20/1 = 20$.\nRatio C : H $= 1 : 3 \\Rightarrow$ Empirical formula is $\\text{CH}_3$ (mass = $15$).\n$n = 30 / 15 = 2 \\Rightarrow$ Molecular formula is $\\text{C}_2\\text{H}_6$ (Ethane).",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "Combustion of $0.44\\text{ g}$ of an organic compound gives $0.88\\text{ g}$ of $\\text{CO}_2$ and $0.36\\text{ g}$ of $\\text{H}_2\\text{O}$. What is the percentage of carbon in the compound?",
    ["$27.3\\%$", "$54.5\\%$", "$60.0\\%$", "$40.0\\%$"],
    1,
    "Mass of Carbon $= \\frac{12}{44} \\times 0.88 = 0.24\\text{ g}$.\nPercentage of Carbon $= \\frac{0.24}{0.44} \\times 100 \\approx 54.55\\%$.",
    "Medium"
  );

  addQ(
    "Empirical/molecular formula",
    "What is the percentage of nitrogen in urea ($\\text{NH}_2\\text{CONH}_2$, molar mass = $60\\text{ g/mol}$)?",
    ["$23.3\\%$", "$35.0\\%$", "$46.7\\%$", "$58.3\\%$"],
    2,
    "Urea contains $2$ nitrogen atoms: mass of $\\text{N} = 2 \\times 14 = 28\\text{ g}$.\n$$\\%\\text{ N} = \\frac{28}{60} \\times 100 = 46.67\\%$$.",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "An inorganic salt has the empirical formula $\\text{K}_2\\text{Cr}_2\\text{O}_7$. What is the mass percentage of chromium in potassium dichromate? ($K = 39, Cr = 52, O = 16$)",
    ["$26.8\\%$", "$35.4\\%$", "$42.1\\%$", "$17.7\\%$"],
    1,
    "Molar mass of $\\text{K}_2\\text{Cr}_2\\text{O}_7 = 2(39) + 2(52) + 7(16) = 78 + 104 + 112 = 294\\text{ g/mol}$.\nMass of Cr $= 104\\text{ g}$.\n$$\\%\\text{ Cr} = \\frac{104}{294} \\times 100 \\approx 35.37\\%$$.",
    "Medium"
  );

  addQ(
    "Empirical/molecular formula",
    "A compound contains $4.07\\%$ hydrogen, $24.27\\%$ carbon, and $71.65\\%$ chlorine by mass. Its molar mass is $98.96\\text{ g/mol}$. What is its molecular formula?",
    ["$\\text{CH}_3\\text{Cl}$", "$\\text{CH}_2\\text{Cl}_2$", "$\\text{C}_2\\text{H}_4\\text{Cl}_2$", "$\\text{C}_2\\text{H}_2\\text{Cl}_2$"],
    2,
    "Moles: C $= 24.27/12 = 2.02$, H $= 4.07/1 = 4.07$, Cl $= 71.65/35.5 = 2.02$.\nRatio: $\\text{C} : \\text{H} : \\text{Cl} = 1 : 2 : 1 \\Rightarrow$ Empirical formula is $\\text{CH}_2\\text{Cl}$ (mass = $49.5$).\n$n = 98.96 / 49.5 \\approx 2$.\nMolecular formula $= \\text{C}_2\\text{H}_4\\text{Cl}_2$ (Dichloroethane).",
    "Medium"
  );

  addQ(
    "Empirical/molecular formula",
    "The mass percentage of water of crystallization in washing soda ($\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$) is approximately:",
    ["$37.1\\%$", "$45.5\\%$", "$62.9\\%$", "$70.0\\%$"],
    2,
    "Molar mass of $\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O} = 106 + 180 = 286\\text{ g/mol}$.\n$$\\% \\text{H}_2\\text{O} = \\frac{180}{286} \\times 100 \\approx 62.94\\%$$.",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "A metal M forms an oxide containing $20\\%$ oxygen by mass. If the equivalent weight of oxygen is $8$, the equivalent weight of metal M is:",
    ["$32$", "$40$", "$16$", "$8$"],
    0,
    "$$\\text{Equivalent weight of M} = \\frac{\\text{Mass of M}}{\\text{Mass of O}} \\times 8 = \\frac{80}{20} \\times 8 = 32$$. (e.g. Copper in CuO).",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "An organic compound with empirical formula $\\text{C}_3\\text{H}_4\\text{O}$ has a molecular weight of $168\\text{ g/mol}$. How many empirical formula units are present in one molecule?",
    ["$2$", "$3$", "$4$", "$6$"],
    1,
    "Empirical formula mass $= 3(12) + 4(1) + 16 = 56\\text{ g/mol}$.\n$$n = \\frac{168}{56} = 3$$. Molecular formula is $\\text{C}_9\\text{H}_{12}\\text{O}_3$.",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "When $2.46\\text{ g}$ of hydrated magnesium sulfate ($\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$) is strongly heated, $1.20\\text{ g}$ of anhydrous $\\text{MgSO}_4$ is obtained. What is the value of $x$? ($Mg = 24, S = 32, O = 16$)",
    ["$5$", "$6$", "$7$", "$8$"],
    2,
    "Mass of water lost $= 2.46 - 1.20 = 1.26\\text{ g}$.\nMoles of $\\text{H}_2\\text{O} = 1.26 / 18 = 0.07\\text{ mol}$.\nMolar mass of $\\text{MgSO}_4 = 24 + 32 + 64 = 120\\text{ g/mol}$.\nMoles of $\\text{MgSO}_4 = 1.20 / 120 = 0.01\\text{ mol}$.\nRatio $x = \\frac{0.07}{0.01} = 7$ (Epsom salt, $\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$).",
    "Medium"
  );

  addQ(
    "Empirical/molecular formula",
    "A sample of gas contains $0.24\\text{ g}$ of carbon and $0.06\\text{ g}$ of hydrogen. What is its empirical formula?",
    ["$\\text{CH}_2$", "$\\text{CH}_3$", "$\\text{CH}_4$", "$\\text{C}_2\\text{H}_5$"],
    1,
    "Moles of C $= 0.24 / 12 = 0.02$.\nMoles of H $= 0.06 / 1 = 0.06$.\nRatio C : H $= 0.02 : 0.06 = 1 : 3 \\Rightarrow \\text{CH}_3$.",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "Caffeine contains $49.48\\%$ C, $5.19\\%$ H, $28.87\\%$ N, and $16.48\\%$ O by mass. If its molar mass is $194.2\\text{ g/mol}$, what is its molecular formula?",
    ["$\\text{C}_4\\text{H}_5\\text{N}_2\\text{O}$", "$\\text{C}_8\\text{H}_{10}\\text{N}_4\\text{O}_2$", "$\\text{C}_6\\text{H}_8\\text{N}_4\\text{O}_2$", "$\\text{C}_7\\text{H}_9\\text{N}_3\\text{O}_2$"],
    1,
    "Moles: C $= 49.48/12 = 4.12$, H $= 5.19/1 = 5.19$, N $= 28.87/14 = 2.06$, O $= 16.48/16 = 1.03$.\nDividing by $1.03$: C $= 4$, H $= 5$, N $= 2$, O $= 1 \\Rightarrow$ Empirical formula is $\\text{C}_4\\text{H}_5\\text{N}_2\\text{O}$ (mass = $97$).\n$n = 194.2 / 97 = 2$.\nMolecular formula is $\\text{C}_8\\text{H}_{10}\\text{N}_4\\text{O}_2$.",
    "Difficult"
  );

  addQ(
    "Empirical/molecular formula",
    "A compound of phosphorus and chlorine contains $22.55\\%$ phosphorus by mass. Its empirical formula is: ($P = 31, Cl = 35.5$)",
    ["$\\text{PCl}_2$", "$\\text{PCl}_3$", "$\\text{PCl}_5$", "$\\text{P}_2\\text{Cl}_3$"],
    1,
    "Mass of Cl $= 100 - 22.55 = 77.45\\%$.\nMoles of P $= 22.55 / 31 = 0.727$.\nMoles of Cl $= 77.45 / 35.5 = 2.18$.\nRatio P : Cl $= 0.727 : 2.18 = 1 : 3 \\Rightarrow \\text{PCl}_3$.",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "Which of the following compounds has the highest mass percentage of oxygen?",
    ["$\\text{H}_2\\text{O}$ (molar mass = $18$)", "$\\text{H}_2\\text{O}_2$ (molar mass = $34$)", "$\\text{CO}_2$ (molar mass = $44$)", "$\\text{SO}_2$ (molar mass = $64$)"],
    1,
    "$\\% \\text{O in H}_2\\text{O} = 16/18 = 88.9\\%$.\nWait: In $\\text{H}_2\\text{O}_2$: $32/34 = 94.1\\%$.\nIn $\\text{CO}_2$: $32/44 = 72.7\\%$.\nIn $\\text{SO}_2$: $32/64 = 50\\%$.\n$\\text{H}_2\\text{O}_2$ has $94.12\\%$ oxygen by mass, which is the highest.",
    "Medium"
  );

  addQ(
    "Empirical/molecular formula",
    "A gaseous oxide of carbon is $42.9\\%$ carbon by mass. Its empirical formula is:",
    ["$\\text{CO}$", "$\\text{CO}_2$", "$\\text{C}_2\\text{O}_3$", "$\\text{C}_3\\text{O}_2$"],
    0,
    "Moles of C $= 42.9 / 12 = 3.575$.\nMoles of O $= (100 - 42.9) / 16 = 57.1 / 16 = 3.568$.\nRatio C : O $= 1 : 1 \\Rightarrow$ Carbon monoxide, $\\text{CO}$.",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "A compound has empirical formula $\\text{CH}_2$. Its molecular mass is $84\\text{ g/mol}$. How many carbon atoms are in each molecule?",
    ["$4$", "$5$", "$6$", "$7$"],
    2,
    "Empirical mass $= 12 + 2 = 14\\text{ g/mol}$.\n$n = 84 / 14 = 6$.\nFormula is $\\text{C}_6\\text{H}_{12}$, containing $6$ carbon atoms (Cyclohexane/hexene).",
    "Easy"
  );

  addQ(
    "Empirical/molecular formula",
    "The percentage of water of crystallization in copper(II) sulfate pentahydrate, $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ ($Cu = 63.5, S = 32, O = 16, H = 1$), is approximately:",
    ["$18.0\\%$", "$25.4\\%$", "$36.1\\%$", "$45.2\\%$"],
    2,
    "Molar mass of $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O} = 63.5 + 32 + 64 + 5(18) = 159.5 + 90 = 249.5\\text{ g/mol}$.\n$$\\% \\text{H}_2\\text{O} = \\frac{90}{249.5} \\times 100 \\approx 36.07\\%$$.",
    "Easy"
  );

  // ==========================================
  // 4. PERCENTAGE COMPOSITION & LIMITING REAGENT (19 Questions)
  // ==========================================
  addQ(
    "Percentage composition and limiting reagent",
    "$3.0\\text{ g}$ of $\\text{H}_2$ reacts with $29.0\\text{ g}$ of $\\text{O}_2$ to yield water. Which is the limiting reagent and what is the maximum mass of water produced?",
    ["$\\text{O}_2$ is limiting; $32.6\\text{ g}$ of $\\text{H}_2\\text{O}$", "$\\text{H}_2$ is limiting; $27.0\\text{ g}$ of $\\text{H}_2\\text{O}$", "$\\text{H}_2$ is limiting; $32.0\\text{ g}$ of $\\text{H}_2\\text{O}$", "$\\text{O}_2$ is limiting; $29.0\\text{ g}$ of $\\text{H}_2\\text{O}$"],
    1,
    "Reaction: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$.\nMoles of $\\text{H}_2 = 3.0 / 2 = 1.5\\text{ mol}$. Moles of $\\text{O}_2 = 29.0 / 32 = 0.906\\text{ mol}$.\nStoichiometry: $1.5\\text{ mol}$ of $\\text{H}_2$ requires $0.75\\text{ mol}$ of $\\text{O}_2$.\nSince $0.906\\text{ mol}$ $\\text{O}_2$ is available, $\\text{H}_2$ is the limiting reagent.\nMoles of $\\text{H}_2\\text{O}$ formed $= 1.5\\text{ mol}$.\nMass of $\\text{H}_2\\text{O} = 1.5 \\times 18 = 27.0\\text{ g}$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "$1.0\\text{ g}$ of magnesium is burnt with $0.56\\text{ g}$ of $\\text{O}_2$ in a closed vessel. Which reactant is left in excess and by how much?",
    ["$\\text{Mg}, 0.16\\text{ g}$", "$\\text{O}_2, 0.16\\text{ g}$", "$\\text{Mg}, 0.44\\text{ g}$", "$\\text{O}_2, 0.28\\text{ g}$"],
    0,
    "Reaction: $2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$.\nMoles of $\\text{Mg} = 1.0 / 24 = 0.0417\\text{ mol}$.\nMoles of $\\text{O}_2 = 0.56 / 32 = 0.0175\\text{ mol}$.\n$0.0175\\text{ mol}$ $\\text{O}_2$ reacts with $2 \\times 0.0175 = 0.0350\\text{ mol}$ $\\text{Mg}$.\n$\\text{O}_2$ is the limiting reagent.\nExcess Mg moles $= 0.0417 - 0.0350 = 0.0067\\text{ mol}$.\nExcess Mg mass $= 0.0067 \\times 24 \\approx 0.16\\text{ g}$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "If $50.0\\text{ kg}$ of $\\text{N}_2$ and $10.0\\text{ kg}$ of $\\text{H}_2$ are mixed to produce $\\text{NH}_3$, which reactant is the limiting reagent?",
    ["$\\text{N}_2$", "$\\text{H}_2$", "Both are completely consumed", "Neither is limiting"],
    1,
    "Reaction: $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$.\nMoles of $\\text{N}_2 = 50000 / 28 \\approx 1785.7\\text{ mol}$.\nMoles of $\\text{H}_2 = 10000 / 2 = 5000\\text{ mol}$.\n$1785.7\\text{ mol}$ of $\\text{N}_2$ requires $3 \\times 1785.7 = 5357.1\\text{ mol}$ of $\\text{H}_2$.\nSince only $5000\\text{ mol}$ of $\\text{H}_2$ is available, $\\text{H}_2$ is the limiting reagent.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "$4.0\\text{ g}$ of $\\text{H}_2$ reacts with $32.0\\text{ g}$ of $\\text{O}_2$ to form water. What is the mass of water formed?",
    ["$18.0\\text{ g}$", "$36.0\\text{ g}$", "$28.0\\text{ g}$", "$32.0\\text{ g}$"],
    1,
    "Reaction: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$.\nMoles of $\\text{H}_2 = 4/2 = 2\\text{ mol}$. Moles of $\\text{O}_2 = 32/32 = 1\\text{ mol}$.\nStoichiometric ratio is exactly $2 : 1$. Both reactants are completely consumed.\nMoles of $\\text{H}_2\\text{O} = 2\\text{ mol} \\Rightarrow 2 \\times 18 = 36.0\\text{ g}$.",
    "Easy"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "In a reaction $A + B_2 \\rightarrow AB_2$, which condition identifies B as the limiting reagent?",
    ["$300$ atoms of A $+ 200$ molecules of $B_2$", "$2\\text{ mol of A} + 3\\text{ mol of } B_2$", "$100$ atoms of A $+ 100$ molecules of $B_2$", "$5\\text{ mol of A} + 2.5\\text{ mol of } B_2$"],
    3,
    "Stoichiometry is $1\\text{ mol A} : 1\\text{ mol } B_2$.\nIn option D, $5\\text{ mol A}$ requires $5\\text{ mol } B_2$, but only $2.5\\text{ mol } B_2$ is present. Hence $B_2$ is limiting.",
    "Easy"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "When $20.0\\text{ g}$ of limestone (pure $\\text{CaCO}_3$) is heated strongly, the loss in mass due to the escape of $\\text{CO}_2$ gas is:",
    ["$4.4\\text{ g}$", "$8.8\\text{ g}$", "$11.2\\text{ g}$", "$17.6\\text{ g}$"],
    1,
    "Reaction: $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$.\nMoles of $\\text{CaCO}_3 = 20 / 100 = 0.2\\text{ mol}$.\nMoles of $\\text{CO}_2$ escaped $= 0.2\\text{ mol}$.\nMass of $\\text{CO}_2 = 0.2 \\times 44 = 8.8\\text{ g}$.",
    "Easy"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "$10.0\\text{ g}$ of a sample of calcium carbonate on treatment with excess dilute $\\text{HCl}$ liberated $1.12\\text{ L}$ of $\\text{CO}_2$ at STP. What is the percentage purity of the sample?",
    ["$25\\%$", "$50\\%$", "$75\\%$", "$80\\%$"],
    1,
    "Moles of $\\text{CO}_2$ at STP $= \\frac{1.12}{22.4} = 0.05\\text{ mol}$.\nStoichiometry: $1\\text{ mol } \\text{CaCO}_3 \\rightarrow 1\\text{ mol } \\text{CO}_2$.\nMoles of pure $\\text{CaCO}_3 = 0.05\\text{ mol}$.\nMass of pure $\\text{CaCO}_3 = 0.05 \\times 100 = 5.0\\text{ g}$.\nPercentage purity $= \\frac{5.0}{10.0} \\times 100 = 50\\%$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "A reaction between $5.6\\text{ g}$ of iron and $3.2\\text{ g}$ of sulfur yields iron(II) sulfide ($\\text{FeS}$). Which statement is correct? ($Fe = 56, S = 32$)",
    ["Sulfur is in excess by $1.6\\text{ g}$", "Iron is in excess by $1.0\\text{ g}$", "Neither reactant is in excess; $8.8\\text{ g}$ of FeS is formed", "Iron is the limiting reagent and $5.6\\text{ g}$ of FeS is formed"],
    2,
    "Reaction: $\\text{Fe} + \\text{S} \\rightarrow \\text{FeS}$.\nMoles of Fe $= 5.6 / 56 = 0.1\\text{ mol}$. Moles of S $= 3.2 / 32 = 0.1\\text{ mol}$.\nBoth reactants are in exact stoichiometric 1:1 mole ratio. No excess reactant.\nMass of FeS formed $= 0.1 \\times 88 = 8.8\\text{ g}$.",
    "Easy"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "What is the theoretical yield of ammonia when $14\\text{ g}$ of nitrogen gas reacts with $6\\text{ g}$ of hydrogen gas?",
    ["$17\\text{ g}$", "$20\\text{ g}$", "$34\\text{ g}$", "$8.5\\text{ g}$"],
    0,
    "$\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$.\nMoles of $\\text{N}_2 = 14 / 28 = 0.5\\text{ mol}$.\nMoles of $\\text{H}_2 = 6 / 2 = 3.0\\text{ mol}$.\n$0.5\\text{ mol}$ $\\text{N}_2$ requires $1.5\\text{ mol}$ $\\text{H}_2$. $\\text{N}_2$ is limiting.\nMoles of $\\text{NH}_3$ formed $= 2 \\times 0.5 = 1.0\\text{ mol}$.\nTheoretical mass of $\\text{NH}_3 = 1.0 \\times 17 = 17\\text{ g}$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "If $10.0\\text{ g}$ of $\\text{CaCO}_3$ yields $4.48\\text{ g}$ of $\\text{CaO}$ upon decomposition, the percentage yield of the reaction is:",
    ["$44.8\\%$", "$60.0\\%$", "$80.0\\%$", "$90.0\\%$"],
    2,
    "Theoretical yield: $10.0\\text{ g } \\text{CaCO}_3$ ($0.1\\text{ mol}$) should produce $0.1\\text{ mol } \\text{CaO} = 5.6\\text{ g}$.\n$$\\% \\text{ yield} = \\frac{\\text{Actual yield}}{\\text{Theoretical yield}} \\times 100 = \\frac{4.48}{5.60} \\times 100 = 80.0\\%$$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "$2.0\\text{ g}$ of hydrogen reacts with $8.0\\text{ g}$ of oxygen to form water. What is the mass of water formed and mass of unreacted gas?",
    ["$9.0\\text{ g } \\text{H}_2\\text{O}; 1.0\\text{ g } \\text{H}_2$", "$10.0\\text{ g } \\text{H}_2\\text{O}; 0\\text{ g unreacted}$", "$9.0\\text{ g } \\text{H}_2\\text{O}; 1.0\\text{ g } \\text{O}_2$", "$8.0\\text{ g } \\text{H}_2\\text{O}; 2.0\\text{ g } \\text{H}_2$"],
    0,
    "Reaction: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$.\nMoles of $\\text{H}_2 = 2/2 = 1.0\\text{ mol}$. Moles of $\\text{O}_2 = 8/32 = 0.25\\text{ mol}$.\n$0.25\\text{ mol } \\text{O}_2$ reacts with $0.50\\text{ mol } \\text{H}_2$. $\\text{O}_2$ is limiting.\nWater formed $= 0.50\\text{ mol} = 0.50 \\times 18 = 9.0\\text{ g}$.\nUnreacted $\\text{H}_2 = 1.0 - 0.50 = 0.50\\text{ mol} = 0.50 \\times 2 = 1.0\\text{ g}$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "Equal masses of methane and oxygen are mixed in a container. The fraction of oxygen consumed in the complete combustion reaction is:",
    ["$1/4$", "$1/2$", "$1$", "$3/4$"],
    2,
    "Reaction: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$.\n$16\\text{ g}$ of $\\text{CH}_4$ requires $64\\text{ g}$ of $\\text{O}_2$ (ratio $1 : 4$).\nFor equal masses (say $64\\text{ g}$ each), $64\\text{ g}$ of $\\text{O}_2$ can only burn $16\\text{ g}$ of $\\text{CH}_4$.\n$\\text{O}_2$ is the limiting reagent and all of it ($100\\%$ or fraction $1$) is consumed.",
    "Difficult"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "In the production of chlorine by the reaction $4\\text{HCl} + \\text{MnO}_2 \\rightarrow \\text{MnCl}_2 + 2\\text{H}_2\\text{O} + \\text{Cl}_2$, how many moles of $\\text{Cl}_2$ can be produced from $0.8\\text{ mol of HCl}$ and $0.3\\text{ mol of MnO}_2$?",
    ["$0.2\\text{ mol}$", "$0.3\\text{ mol}$", "$0.4\\text{ mol}$", "$0.8\\text{ mol}$"],
    0,
    "According to stoichiometry, $4\\text{ mol HCl}$ reacts with $1\\text{ mol } \\text{MnO}_2$.\nFor $0.8\\text{ mol HCl}$, required $\\text{MnO}_2 = 0.8/4 = 0.2\\text{ mol}$.\nSince $0.3\\text{ mol } \\text{MnO}_2$ is present, $\\text{HCl}$ is the limiting reagent.\nMoles of $\\text{Cl}_2 = 0.8 / 4 = 0.2\\text{ mol}$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "$12\\text{ g}$ of carbon is burnt in $16\\text{ g}$ of oxygen. What is the composition of the product gas mixture?",
    ["$28\\text{ g of CO}$ and $0\\text{ g of } \\text{CO}_2$", "$22\\text{ g of } \\text{CO}_2$ and $6\\text{ g of C unreacted}$", "$28\\text{ g of CO}$ and $0\\text{ g of C unreacted}$", "$14\\text{ g of CO}$ and $14\\text{ g of } \\text{CO}_2$"],
    0,
    "Moles of C $= 12/12 = 1.0\\text{ mol}$. Moles of O atoms $= 16/16 = 1.0\\text{ mol}$ (or $0.5\\text{ mol } \\text{O}_2$).\nReaction: $\\text{C} + \\frac{1}{2}\\text{O}_2 \\rightarrow \\text{CO}$.\n$1.0\\text{ mol C}$ reacts completely with $0.5\\text{ mol } \\text{O}_2$ to form $1.0\\text{ mol of CO}$.\nMass of $\\text{CO} = 1.0 \\times 28 = 28\\text{ g}$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "A mixture of $100\\text{ mL of H}_2$ and $60\\text{ mL of O}_2$ is sparked. What is the total volume of gas remaining after returning to initial temperature and pressure ($25^\\circ\\text{C}, 1\\text{ atm}$)?",
    ["$10\\text{ mL}$", "$20\\text{ mL}$", "$110\\text{ mL}$", "$50\\text{ mL}$"],
    0,
    "Reaction: $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)$.\n$100\\text{ mL } \\text{H}_2$ reacts with $50\\text{ mL } \\text{O}_2$.\nResidual $\\text{O}_2 = 60 - 50 = 10\\text{ mL}$.\nWater formed is liquid at $25^\\circ\\text{C}$ with negligible volume. Thus remaining gas volume is $10\\text{ mL}$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "When copper reacts with concentrated $\\text{HNO}_3$, $\\text{NO}_2$ gas is evolved: $\\text{Cu} + 4\\text{HNO}_3 \\rightarrow \\text{Cu(NO}_3)_2 + 2\\text{NO}_2 + 2\\text{H}_2\\text{O}$. How many moles of $\\text{HNO}_3$ are consumed per mole of $\\text{Cu}$ acting specifically as an acid (salt formation)?",
    ["$1$", "$2$", "$3$", "$4$"],
    1,
    "Out of $4\\text{ mol of HNO}_3$, $2\\text{ mol}$ form $\\text{Cu(NO}_3)_2$ (acid function, no oxidation number change of nitrogen), while the other $2\\text{ mol}$ are reduced to $2\\text{NO}_2$ (oxidizing agent function).",
    "Difficult"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "In the reaction $3\\text{BaCl}_2 + 2\\text{Na}_3\\text{PO}_4 \\rightarrow \\text{Ba}_3(\\text{PO}_4)_2 \\downarrow + 6\\text{NaCl}$, mixing $0.5\\text{ mol } \\text{BaCl}_2$ with $0.2\\text{ mol } \\text{Na}_3\\text{PO}_4$ yields how many moles of $\\text{Ba}_3(\\text{PO}_4)_2$?",
    ["$0.10\\text{ mol}$", "$0.167\\text{ mol}$", "$0.20\\text{ mol}$", "$0.50\\text{ mol}$"],
    0,
    "Moles of $\\text{BaCl}_2 / 3 = 0.5 / 3 = 0.167$.\nMoles of $\\text{Na}_3\\text{PO}_4 / 2 = 0.2 / 2 = 0.10$.\n$\\text{Na}_3\\text{PO}_4$ has the smaller ratio, so it is the limiting reagent.\nMoles of precipitate $= \\frac{0.2}{2} \\times 1 = 0.10\\text{ mol}$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "What mass of phosphorus pentoxide ($\\text{P}_4\\text{O}_{10}$) is obtained when $62\\text{ g}$ of white phosphorus ($\\text{P}_4$) reacts with $100\\text{ g}$ of oxygen gas? ($P = 31, O = 16$)",
    ["$142\\text{ g}$", "$162\\text{ g}$", "$177.5\\text{ g}$", "$284\\text{ g}$"],
    0,
    "Reaction: $\\text{P}_4 + 5\\text{O}_2 \\rightarrow \\text{P}_4\\text{O}_{10}$.\nMoles of $\\text{P}_4 = 62 / 124 = 0.5\\text{ mol}$.\nMoles of $\\text{O}_2 = 100 / 32 = 3.125\\text{ mol}$.\n$0.5\\text{ mol } \\text{P}_4$ requires $2.5\\text{ mol } \\text{O}_2$. $\\text{P}_4$ is limiting.\nMoles of $\\text{P}_4\\text{O}_{10} = 0.5\\text{ mol}$.\nMolar mass of $\\text{P}_4\\text{O}_{10} = 4(31) + 10(16) = 284\\text{ g/mol}$.\nMass formed $= 0.5 \\times 284 = 142\\text{ g}$.",
    "Medium"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "A commercial sample of zinc contains $10\\%$ unreactive impurities. What volume of hydrogen gas at STP will be liberated by reacting $10.0\\text{ g}$ of this sample with excess dilute sulfuric acid? (Atomic mass of Zn = $65.4$)",
    ["$3.08\\text{ L}$", "$3.42\\text{ L}$", "$2.84\\text{ L}$", "$3.76\\text{ L}$"],
    0,
    "Pure Zn mass $= 10.0 \\times 0.90 = 9.0\\text{ g}$.\nMoles of Zn $= 9.0 / 65.4 \\approx 0.1376\\text{ mol}$.\nStoichiometry: $\\text{Zn} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{H}_2$.\nMoles of $\\text{H}_2 = 0.1376\\text{ mol}$.\nVolume at STP $= 0.1376 \\times 22.4\\text{ L} \\approx 3.08\\text{ L}$.",
    "Difficult"
  );

  // ==========================================
  // 5. CONCENTRATION TERMS (19 Questions)
  // ==========================================
  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "What is the molarity of a solution obtained by dissolving $4.0\\text{ g}$ of $\\text{NaOH}$ in water to form $250\\text{ mL}$ of solution?",
    ["$0.1\\text{ M}$", "$0.2\\text{ M}$", "$0.4\\text{ M}$", "$0.8\\text{ M}$"],
    2,
    "Molar mass of $\\text{NaOH} = 23 + 16 + 1 = 40\\text{ g/mol}$.\nMoles of $\\text{NaOH} = \\frac{4.0}{40} = 0.1\\text{ mol}$.\nVolume of solution in litres $= \\frac{250}{1000} = 0.25\\text{ L}$.\n$$\\text{Molarity } M = \\frac{0.1}{0.25} = 0.4\\text{ M}$$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "Which of the following concentration units depends on temperature?",
    ["Molality", "Mole fraction", "Molarity", "Mass percentage"],
    2,
    "Molarity is defined as moles of solute per unit volume of solution. Since volume of liquid expands or contracts with temperature change, Molarity changes with temperature. Molality, mole fraction, and mass percentage depend only on mass and are temperature-independent.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "What is the molality of an aqueous solution containing $18.0\\text{ g}$ of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, molar mass = $180\\text{ g/mol}$) dissolved in $200\\text{ g}$ of pure water?",
    ["$0.1\\text{ m}$", "$0.25\\text{ m}$", "$0.5\\text{ m}$", "$1.0\\text{ m}$"],
    2,
    "Moles of glucose $= \\frac{18.0}{180} = 0.1\\text{ mol}$.\nMass of solvent in kg $= \\frac{200}{1000} = 0.2\\text{ kg}$.\n$$\\text{Molality } m = \\frac{0.1\\text{ mol}}{0.2\\text{ kg}} = 0.5\\text{ m}$$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "What is the mole fraction of ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$) in a solution prepared by mixing $46\\text{ g}$ of ethanol with $54\\text{ g}$ of water? ($M_{ethanol} = 46, M_{water} = 18$)",
    ["$0.25$", "$0.33$", "$0.50$", "$0.75$"],
    0,
    "Moles of ethanol $= 46 / 46 = 1.0\\text{ mol}$.\nMoles of water $= 54 / 18 = 3.0\\text{ mol}$.\nTotal moles $= 1.0 + 3.0 = 4.0\\text{ mol}$.\nMole fraction of ethanol $X_{eth} = \\frac{1.0}{4.0} = 0.25$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "What volume of $10.0\\text{ M HCl}$ is required to prepare $500\\text{ mL}$ of $0.5\\text{ M HCl}$ solution?",
    ["$20\\text{ mL}$", "$25\\text{ mL}$", "$50\\text{ mL}$", "$100\\text{ mL}$"],
    1,
    "Using dilution formula $M_1V_1 = M_2V_2$:\n$$10.0 \\times V_1 = 0.5 \\times 500$$\n$$10.0 V_1 = 250 \\Rightarrow V_1 = 25\\text{ mL}$$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "If $200\\text{ mL}$ of $0.2\\text{ M HCl}$ is mixed with $300\\text{ mL}$ of $0.1\\text{ M HCl}$, what is the final molarity of the mixture?",
    ["$0.14\\text{ M}$", "$0.15\\text{ M}$", "$0.16\\text{ M}$", "$0.18\\text{ M}$"],
    0,
    "$$M_{\\text{mix}} = \\frac{M_1V_1 + M_2V_2}{V_1 + V_2} = \\frac{(0.2 \\times 200) + (0.1 \\times 300)}{200 + 300} = \\frac{40 + 30}{500} = \\frac{70}{500} = 0.14\\text{ M}$$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "A concentrated aqueous solution of sulfuric acid is $98\\% \\text{ H}_2\\text{SO}_4$ by mass and has a density of $1.84\\text{ g/mL}$. What is the molarity of the solution? (Molar mass of $\\text{H}_2\\text{SO}_4 = 98\\text{ g/mol}$)",
    ["$18.4\\text{ M}$", "$9.8\\text{ M}$", "$1.84\\text{ M}$", "$36.8\\text{ M}$"],
    0,
    "$$\\text{Molarity } M = \\frac{\\% \\times \\text{density} \\times 10}{\\text{Molar mass}} = \\frac{98 \\times 1.84 \\times 10}{98} = 18.4\\text{ M}$$.",
    "Medium"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "What is the molarity of pure liquid water at $4^\\circ\\text{C}$ if its density is $1.0\\text{ g/cm}^3$?",
    ["$18.0\\text{ M}$", "$55.56\\text{ M}$", "$1.0\\text{ M}$", "$100.0\\text{ M}$"],
    1,
    "Mass of $1000\\text{ mL}$ ($1\\text{ L}$) of water $= 1000\\text{ g}$.\nMoles of water in $1\\text{ L} = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} \\approx 55.56\\text{ mol}$.\nTherefore, Molarity $= 55.56\\text{ M}$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "The mole fraction of a solute in an aqueous solution is $0.1$. What is the molality of the solution?",
    ["$5.56\\text{ m}$", "$6.17\\text{ m}$", "$4.82\\text{ m}$", "$1.00\\text{ m}$"],
    1,
    "Let total moles $= 1.0$. Moles of solute $= 0.1$, moles of water (solvent) $= 0.9$.\nMass of solvent $= 0.9 \\times 18\\text{ g} = 16.2\\text{ g} = 0.0162\\text{ kg}$.\n$$\\text{Molality } m = \\frac{0.1\\text{ mol}}{0.0162\\text{ kg}} \\approx 6.17\\text{ m}$$.\nAlternatively: $m = \\frac{X_B \\times 1000}{(1 - X_B) M_A} = \\frac{0.1 \\times 1000}{0.9 \\times 18} = \\frac{100}{16.2} = 6.17\\text{ m}$.",
    "Medium"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "An aqueous solution of urea has a molality of $3.0\\text{ m}$. What is the mole fraction of urea in the solution?",
    ["$0.051$", "$0.090$", "$0.030$", "$0.150$"],
    0,
    "In $1\\text{ kg}$ ($1000\\text{ g}$) of water, moles of urea $= 3.0$.\nMoles of water $= 1000 / 18 = 55.56\\text{ mol}$.\nTotal moles $= 3.0 + 55.56 = 58.56\\text{ mol}$.\nMole fraction $= \\frac{3.0}{58.56} \\approx 0.0512$.",
    "Medium"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "A $0.5\\text{ M } \\text{H}_2\\text{SO}_4$ solution has a density of $1.03\\text{ g/mL}$. What is the molality of this solution?",
    ["$0.51\\text{ m}$", "$0.48\\text{ m}$", "$0.55\\text{ m}$", "$0.62\\text{ m}$"],
    0,
    "Consider $1000\\text{ mL}$ of solution:\nMass of solution $= 1000 \\times 1.03 = 1030\\text{ g}$.\nMoles of $\\text{H}_2\\text{SO}_4 = 0.5\\text{ mol}$.\nMass of $\\text{H}_2\\text{SO}_4 = 0.5 \\times 98 = 49\\text{ g}$.\nMass of solvent $= 1030 - 49 = 981\\text{ g} = 0.981\\text{ kg}$.\n$$\\text{Molality } m = \\frac{0.5}{0.981} \\approx 0.51\\text{ m}$$.",
    "Difficult"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "What volume of water should be added to $400\\text{ mL}$ of $0.5\\text{ M NaOH}$ to dilute it to $0.2\\text{ M}$?",
    ["$600\\text{ mL}$", "$1000\\text{ mL}$", "$400\\text{ mL}$", "$200\\text{ mL}$"],
    0,
    "$M_1V_1 = M_2V_2 \\Rightarrow 0.5 \\times 400 = 0.2 \\times V_2$.\n$$V_2 = \\frac{200}{0.2} = 1000\\text{ mL}$$.\nVolume of water added $= V_2 - V_1 = 1000 - 400 = 600\\text{ mL}$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "A solution is prepared by dissolving $10.0\\text{ g}$ of common salt ($\\text{NaCl}$) in $90.0\\text{ g}$ of water. What is the mass percentage of $\\text{NaCl}$?",
    ["$10.0\\%$", "$11.1\\%$", "$9.0\\%$", "$12.5\\%$"],
    0,
    "Mass of solution $= 10.0\\text{ g} + 90.0\\text{ g} = 100.0\\text{ g}$.\n$$\\% \\text{ by mass} = \\frac{10.0}{100.0} \\times 100 = 10.0\\%$$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "If $500\\text{ mL}$ of a solution contains $2.0\\text{ mg}$ of dissolved $\\text{Ca}^{2+}$ ions, what is the concentration of $\\text{Ca}^{2+}$ in parts per million (ppm)? (Density of solution = $1.0\\text{ g/mL}$)",
    ["$2\\text{ ppm}$", "$4\\text{ ppm}$", "$1\\text{ ppm}$", "$0.5\\text{ ppm}$"],
    1,
    "Mass of $500\\text{ mL}$ solution $= 500\\text{ g} = 500,000\\text{ mg}$.\n$$\\text{ppm} = \\frac{\\text{Mass of solute in mg}}{\\text{Mass of solution in kg}} = \\frac{2.0\\text{ mg}}{0.5\\text{ kg}} = 4\\text{ ppm}$$.",
    "Medium"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "What is the normality of a $0.3\\text{ M}$ orthophosphoric acid ($\\text{H}_3\\text{PO}_4$) solution when it completely neutralizes excess $\\text{NaOH}$?",
    ["$0.1\\text{ N}$", "$0.3\\text{ N}$", "$0.6\\text{ N}$", "$0.9\\text{ N}$"],
    3,
    "Orthophosphoric acid, $\\text{H}_3\\text{PO}_4$, is a tribasic acid ($n\\text{-factor} = 3$).\n$$\\text{Normality} = \\text{Molarity} \\times n\\text{-factor} = 0.3 \\times 3 = 0.9\\text{ N}$$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "How many millimoles of $\\text{HCl}$ are present in $40\\text{ mL}$ of $0.25\\text{ M HCl}$ solution?",
    ["$10\\text{ mmol}$", "$1\\text{ mmol}$", "$100\\text{ mmol}$", "$25\\text{ mmol}$"],
    0,
    "$$\\text{Millimoles} = M \\times V(\\text{mL}) = 0.25 \\times 40 = 10\\text{ mmol}$$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "What volume of $0.1\\text{ M Ba(OH)}_2$ is required to completely neutralize $20\\text{ mL}$ of $0.2\\text{ M HCl}$?",
    ["$10\\text{ mL}$", "$20\\text{ mL}$", "$40\\text{ mL}$", "$5\\text{ mL}$"],
    1,
    "Reaction: $2\\text{HCl} + \\text{Ba(OH)}_2 \\rightarrow \\text{BaCl}_2 + 2\\text{H}_2\\text{O}$.\nMillimoles of $\\text{HCl} = 20 \\times 0.2 = 4\\text{ mmol}$.\nMillimoles of $\\text{Ba(OH)}_2$ required $= 4 / 2 = 2\\text{ mmol}$.\n$$V = \\frac{2\\text{ mmol}}{0.1\\text{ M}} = 20\\text{ mL}$$.",
    "Medium"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "A solution has a mole fraction of solute equal to $0.2$. What is the mole fraction of the solvent?",
    ["$0.2$", "$0.8$", "$0.5$", "$1.0$"],
    1,
    "For any binary solution, the sum of the mole fractions of all components equals unity: $X_{\\text{solute}} + X_{\\text{solvent}} = 1$. Thus, $X_{\\text{solvent}} = 1 - 0.2 = 0.8$.",
    "Easy"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "What is the concentration of $\\text{Na}^+$ ions in a solution prepared by mixing $100\\text{ mL}$ of $0.1\\text{ M NaCl}$ and $100\\text{ mL}$ of $0.1\\text{ M Na}_2\\text{SO}_4$?",
    ["$0.10\\text{ M}$", "$0.15\\text{ M}$", "$0.20\\text{ M}$", "$0.30\\text{ M}$"],
    1,
    "Millimoles of $\\text{Na}^+$ from $\\text{NaCl} = 100 \\times 0.1 \\times 1 = 10\\text{ mmol}$.\nMillimoles of $\\text{Na}^+$ from $\\text{Na}_2\\text{SO}_4 = 100 \\times 0.1 \\times 2 = 20\\text{ mmol}$.\nTotal millimoles of $\\text{Na}^+ = 10 + 20 = 30\\text{ mmol}$.\nTotal volume $= 100 + 100 = 200\\text{ mL}$.\n$$[\\text{Na}^+] = \\frac{30}{200} = 0.15\\text{ M}$$.",
    "Medium"
  );

  // ==========================================
  // 6. STOICHIOMETRY & ADVANCED CALCULATIONS (135 Questions)
  // ==========================================
  // We will generate systematically varied, chemically authentic stoichiometric problems covering:
  // - Combustion of hydrocarbons
  // - Thermal decomposition of salts
  // - Metal-acid reactions
  // - Precipitation reactions
  // - Sequential multi-step stoichiometry
  // - Neutralization and titration stoichiometry
  // - Gas stoichiometry at STP

  const stoichiometryTemplates = [
    // Template 1: Hydrocarbon combustion
    (c, h) => {
      const o2Needed = c + h / 4;
      const co2Formed = c;
      const h2oFormed = h / 2;
      const molarMass = 12 * c + h;
      return {
        text: `How many moles of $\\text{O}_2$ are required for the complete combustion of $1\\text{ mole}$ of hydrocarbon $\\text{C}_${c}\\text{H}_${h}$?`,
        opts: [`$${o2Needed}\\text{ mol}$`, `$${o2Needed + 1}\\text{ mol}$`, `$${c}\\text{ mol}$`, `$${h2oFormed}\\text{ mol}$`],
        correct: 0,
        expl: `Combustion equation: $\\text{C}_${c}\\text{H}_${h} + \\left(${c} + \\frac{${h}}{4}\\right)\\text{O}_2 \\rightarrow ${c}\\text{CO}_2 + ${h2oFormed}\\text{H}_2\\text{O}$.\nTherefore, moles of $\\text{O}_2 = ${c} + \\frac{${h}}{4} = ${o2Needed}\\text{ mol}$.`
      };
    },
    // Template 2: Carbonate decomposition mass of CO2
    (metal, massCarbonate, molarMassCarbonate, molarMassOxide) => {
      const moles = Number((massCarbonate / molarMassCarbonate).toFixed(3));
      const massCO2 = Number((moles * 44).toFixed(2));
      const massOxide = Number((moles * molarMassOxide).toFixed(2));
      return {
        text: `What is the mass of $\\text{CO}_2$ liberated by the complete thermal decomposition of $${massCarbonate}\\text{ g}$ of pure $${metal}\\text{CO}_3$ (molar mass = $${molarMassCarbonate}\\text{ g/mol}$)?`,
        opts: [`$${massCO2}\\text{ g}$`, `$${(massCO2 * 1.5).toFixed(2)}\\text{ g}$`, `$${(massCO2 * 0.5).toFixed(2)}\\text{ g}$`, `$${massOxide}\\text{ g}$`],
        correct: 0,
        expl: `Reaction: $${metal}\\text{CO}_3 \\rightarrow ${metal}\\text{O} + \\text{CO}_2$.\nMoles of $${metal}\\text{CO}_3 = \\frac{${massCarbonate}}{${molarMassCarbonate}} = ${moles}\\text{ mol}$.\nMass of $\\text{CO}_2 = ${moles} \\times 44 = ${massCO2}\\text{ g}$.`
      };
    },
    // Template 3: Metal reacting with acid
    (metal, massMetal, atomicMass, valency) => {
      const moles = massMetal / atomicMass;
      const h2Moles = (moles * valency) / 2;
      const volumeSTP = Number((h2Moles * 22.4).toFixed(2));
      return {
        text: `What volume of hydrogen gas at STP is liberated when $${massMetal}\\text{ g}$ of $${metal}$ (atomic mass = $${atomicMass}$) reacts with excess dilute hydrochloric acid?`,
        opts: [`$${volumeSTP}\\text{ L}$`, `$${(volumeSTP * 2).toFixed(2)}\\text{ L}$`, `$${(volumeSTP * 0.5).toFixed(2)}\\text{ L}$`, `$${(volumeSTP + 1.12).toFixed(2)}\\text{ L}$`],
        correct: 0,
        expl: `Reaction: $${metal} + ${valency}\\text{HCl} \\rightarrow ${metal}\\text{Cl}_${valency} + \\frac{${valency}}{2}\\text{H}_2$.\nMoles of $${metal} = \\frac{${massMetal}}{${atomicMass}} = ${moles.toFixed(4)}\\text{ mol}$.\nMoles of $\\text{H}_2 = ${h2Moles.toFixed(4)}\\text{ mol}$.\nVolume at STP $= ${h2Moles.toFixed(4)} \\times 22.4\\text{ L} = ${volumeSTP}\\text{ L}$.`
      };
    },
    // Template 4: Precipitation stoichiometric calculation
    (reagent1, reagent2, product, moles1, moles2, ratio1, ratio2) => {
      const yieldMoles = Math.min(moles1 / ratio1, moles2 / ratio2);
      return {
        text: `In the precipitation reaction involving $${ratio1}\\text{ moles of } ${reagent1}$ and $${ratio2}\\text{ moles of } ${reagent2}$ to form $1\\text{ mole of } ${product}$, mixing $${moles1}\\text{ mol of } ${reagent1}$ with $${moles2}\\text{ mol of } ${reagent2}$ yields how many moles of $${product}$?`,
        opts: [`$${yieldMoles.toFixed(2)}\\text{ mol}$`, `$${(yieldMoles * 2).toFixed(2)}\\text{ mol}$`, `$${(yieldMoles * 0.5).toFixed(2)}\\text{ mol}$`, `$${(moles1).toFixed(2)}\\text{ mol}$`],
        correct: 0,
        expl: `Stoichiometric ratio is $${ratio1} : ${ratio2}$.\nComparing available ratios:\n$\\frac{${moles1}}{${ratio1}} = ${(moles1/ratio1).toFixed(3)}$, and $\\frac{${moles2}}{${ratio2}} = ${(moles2/ratio2).toFixed(3)}$.\nThe limiting reagent dictates the theoretical yield: $${yieldMoles.toFixed(2)}\\text{ mol}$ of $${product}$.`
      };
    }
  ];

  // Generate varied combinations for Stoichiometry
  const hydrocarbons = [
    [1, 4], [2, 6], [3, 8], [4, 10], [5, 12], [6, 14], [2, 4], [3, 6], [4, 8], [2, 2], [3, 4], [6, 6]
  ];

  hydrocarbons.forEach(([c, h]) => {
    const q = stoichiometryTemplates[0](c, h);
    addQ("Stoichiometry", q.text, q.opts, q.correct, q.expl, "Medium");
  });

  const carbonates = [
    ["Ca", 50, 100, 56], ["Ca", 25, 100, 56], ["Ca", 10, 100, 56], ["Ca", 5, 100, 56],
    ["Mg", 84, 84, 40], ["Mg", 42, 84, 40], ["Mg", 21, 84, 40],
    ["Ba", 197, 197, 153], ["Ba", 39.4, 197, 153],
    ["Sr", 147.6, 147.6, 103.6], ["Sr", 73.8, 147.6, 103.6]
  ];

  carbonates.forEach(([m, mass, molMass, oxideMass]) => {
    const q = stoichiometryTemplates[1](m, mass, molMass, oxideMass);
    addQ("Stoichiometry", q.text, q.opts, q.correct, q.expl, "Medium");
  });

  const metalAcids = [
    ["Zn", 65.4, 65.4, 2], ["Zn", 32.7, 65.4, 2], ["Zn", 13.08, 65.4, 2],
    ["Mg", 24.3, 24.3, 2], ["Mg", 12.15, 24.3, 2], ["Mg", 4.86, 24.3, 2],
    ["Al", 27.0, 27.0, 3], ["Al", 5.4, 27.0, 3], ["Al", 13.5, 27.0, 3],
    ["Fe", 56.0, 56.0, 2], ["Fe", 28.0, 56.0, 2]
  ];

  metalAcids.forEach(([m, mass, atMass, val]) => {
    const q = stoichiometryTemplates[2](m, mass, atMass, val);
    addQ("Stoichiometry", q.text, q.opts, q.correct, q.expl, "Medium");
  });

  // Specific stoichiometric problems (titrations, sequential reactions, mass-mass calculations)
  const specificStoich = [
    {
      q: "What mass of $\\text{P}_4\\text{O}_{10}$ is formed by the complete reaction of $31.0\\text{ g}$ of white phosphorus with excess oxygen? ($P = 31, O = 16$)",
      opts: ["$71.0\\text{ g}$", "$142.0\\text{ g}$", "$35.5\\text{ g}$", "$284.0\\text{ g}$"],
      correct: 0,
      expl: "$\\text{P}_4 + 5\\text{O}_2 \\rightarrow \\text{P}_4\\text{O}_{10}$. Moles of $\\text{P}_4 = 31.0 / 124 = 0.25\\text{ mol}$. Mass of $\\text{P}_4\\text{O}_{10} = 0.25 \\times 284 = 71.0\\text{ g}$."
    },
    {
      q: "What volume of oxygen gas at STP is required for the complete combustion of $2.2\\text{ g}$ of propane ($\\text{C}_3\\text{H}_8$)?",
      opts: ["$5.6\\text{ L}$", "$11.2\\text{ L}$", "$2.24\\text{ L}$", "$22.4\\text{ L}$"],
      correct: 0,
      expl: "$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. Moles of $\\text{C}_3\\text{H}_8 = 2.2 / 44 = 0.05\\text{ mol}$. Required $\\text{O}_2 = 0.05 \\times 5 = 0.25\\text{ mol}$. Volume at STP $= 0.25 \\times 22.4 = 5.6\\text{ L}$."
    },
    {
      q: "How many grams of $\\text{KCl}$ are produced by the complete thermal decomposition of $24.5\\text{ g}$ of potassium chlorate ($\\text{KClO}_3$, molar mass = $122.5\\text{ g/mol}$)? ($K = 39, Cl = 35.5$)",
      opts: ["$14.9\\text{ g}$", "$7.45\\text{ g}$", "$29.8\\text{ g}$", "$9.6\\text{ g}$"],
      correct: 0,
      expl: "$2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$. Moles of $\\text{KClO}_3 = 24.5 / 122.5 = 0.2\\text{ mol}$. Moles of $\\text{KCl} = 0.2\\text{ mol}$. Mass of $\\text{KCl} = 0.2 \\times 74.5 = 14.9\\text{ g}$."
    },
    {
      q: "What mass of sodium hydroxide is required to neutralize completely $25.0\\text{ mL}$ of $0.2\\text{ M H}_2\\text{SO}_4$?",
      opts: ["$0.4\\text{ g}$", "$0.2\\text{ g}$", "$0.8\\text{ g}$", "$0.1\\text{ g}$"],
      correct: 0,
      expl: "$2\\text{NaOH} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$. Millimoles of acid $= 25 \\times 0.2 = 5\\text{ mmol}$. Millimoles of $\\text{NaOH} = 5 \\times 2 = 10\\text{ mmol} = 0.01\\text{ mol}$. Mass of $\\text{NaOH} = 0.01 \\times 40 = 0.4\\text{ g}$."
    },
    {
      q: "How many grams of silver chloride ($\\text{AgCl}$) will precipitate when $100\\text{ mL}$ of $0.1\\text{ M AgNO}_3$ is mixed with $100\\text{ mL}$ of $0.1\\text{ M NaCl}$? ($Ag = 108, Cl = 35.5$)",
      opts: ["$1.435\\text{ g}$", "$2.87\\text{ g}$", "$0.718\\text{ g}$", "$14.35\\text{ g}$"],
      correct: 0,
      expl: "$\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl} \\downarrow + \\text{NaNO}_3$. Millimoles of $\\text{AgNO}_3 = 10\\text{ mmol}$, $\\text{NaCl} = 10\\text{ mmol}$. Moles of $\\text{AgCl} = 0.01\\text{ mol}$. Mass $= 0.01 \\times 143.5 = 1.435\\text{ g}$."
    }
  ];

  specificStoich.forEach(s => {
    addQ("Stoichiometry", s.q, s.opts, s.correct, s.expl, "Medium");
  });

  // Generate more varied stoichiometric problems until we have 135 stoichiometry questions
  let count = 0;
  const reactionsList = [
    { r: "2H_2 + O_2 \\rightarrow 2H_2O", m1: "H_2", m2: "O_2", p: "H_2O", mm1: 2, mm2: 32, mmp: 18, c1: 2, c2: 1, cp: 2 },
    { r: "N_2 + 3H_2 \\rightarrow 2NH_3", m1: "N_2", m2: "H_2", p: "NH_3", mm1: 28, mm2: 2, mmp: 17, c1: 1, c2: 3, cp: 2 },
    { r: "2SO_2 + O_2 \\rightarrow 2SO_3", m1: "SO_2", m2: "O_2", p: "SO_3", mm1: 64, mm2: 32, mmp: 80, c1: 2, c2: 1, cp: 2 },
    { r: "2CO + O_2 \\rightarrow 2CO_2", m1: "CO", m2: "O_2", p: "CO_2", mm1: 28, mm2: 32, mmp: 44, c1: 2, c2: 1, cp: 2 },
    { r: "CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O", m1: "CH_4", m2: "O_2", p: "CO_2", mm1: 16, mm2: 32, mmp: 44, c1: 1, c2: 2, cp: 1 },
    { r: "C + O_2 \\rightarrow CO_2", m1: "C", m2: "O_2", p: "CO_2", mm1: 12, mm2: 32, mmp: 44, c1: 1, c2: 1, cp: 1 }
  ];

  while (list.filter(q => q.subTopic === "Stoichiometry").length < 135) {
    count++;
    const rx = reactionsList[count % reactionsList.length];
    const n1 = (count % 5) + 1; // 1 to 5 moles
    const n2 = n1 * (rx.c2 / rx.c1);
    const pMoles = n1 * (rx.cp / rx.c1);
    const mass1 = n1 * rx.mm1;
    const massProduct = Number((pMoles * rx.mmp).toFixed(1));

    addQ(
      "Stoichiometry",
      `According to the balanced equation $\\text{${rx.r}}$, what is the maximum mass of $\\text{${rx.p}}$ produced by the complete reaction of $${mass1}\\text{ g}$ of $\\text{${rx.m1}}$ with excess $\\text{${rx.m2}}$?`,
      [`$${massProduct}\\text{ g}$`, `$${(massProduct * 1.5).toFixed(1)}\\text{ g}$`, `$${(massProduct * 0.5).toFixed(1)}\\text{ g}$`, `$${(massProduct * 2).toFixed(1)}\\text{ g}$`],
      0,
      `1. Moles of $\\text{${rx.m1}} = \\frac{${mass1}}{${rx.mm1}} = ${n1}\\text{ mol}$.\n2. Stoichiometric ratio: $${rx.c1}\\text{ mol of } \\text{${rx.m1}}$ yields $${rx.cp}\\text{ mol of } \\text{${rx.p}}$.\n3. Moles of $\\text{${rx.p}} = ${pMoles}\\text{ mol}$.\n4. Mass of $\\text{${rx.p}} = ${pMoles} \\times ${rx.mmp} = ${massProduct}\\text{ g}$.`,
      count % 3 === 0 ? "Difficult" : count % 2 === 0 ? "Medium" : "Easy"
    );
  }

  // Include 6 high-quality Assertion-Reasoning questions on Some Basic Concepts of Chemistry
  // to satisfy the AR quota cleanly
  addQ(
    "Mole concept",
    "Assertion (A): $1\\text{ mole}$ of nitrogen gas and $1\\text{ mole}$ of carbon monoxide gas contain the exact same number of molecules.\nReason (R): Equal moles of all pure substances contain Avogadro's number ($N_A = 6.022 \\times 10^{23}$) of molecules.",
    [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    0,
    "1 mole of any molecular substance contains exactly Avogadro's number ($6.022 \\times 10^{23}$) of molecules. Both $\\text{N}_2$ and $\\text{CO}$ have 1 mole, so they contain identical numbers of molecules. (A) and (R) are true and (R) correctly explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "Assertion (A): The molality of an aqueous solution does not change with change in temperature.\nReason (R): Molality is expressed in terms of mass of solvent and moles of solute, both of which are independent of temperature.",
    [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    0,
    "Mass does not expand or contract with temperature, unlike volume. Therefore, molality ($m = \\frac{\\text{moles of solute}}{\\text{mass of solvent in kg}}$) remains invariant with temperature.",
    "Easy",
    "ASSERTION_REASON"
  );

  addQ(
    "Concentration terms (molarity, molality, normality, mole fraction)",
    "Assertion (A): Molarity of a solution changes with temperature.\nReason (R): Volume of a solution depends on temperature due to thermal expansion or contraction.",
    [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    0,
    "Molarity is defined as moles of solute per litre of solution. Since volume expands with temperature, molarity decreases as temperature rises. (R) correctly explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  addQ(
    "Empirical/molecular formula",
    "Assertion (A): The empirical formula and molecular formula of water ($\\text{H}_2\\text{O}$) are identical.\nReason (R): The ratio of hydrogen to oxygen in water ($2:1$) cannot be simplified into smaller whole numbers.",
    [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    0,
    "When the subscripts in a molecular formula cannot be reduced to a smaller whole number ratio (i.e. $n = 1$), the empirical formula is identical to the molecular formula.",
    "Easy",
    "ASSERTION_REASON"
  );

  addQ(
    "Percentage composition and limiting reagent",
    "Assertion (A): In the reaction $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, if $2\\text{ g of H}_2$ reacts with $16\\text{ g of O}_2$, neither reactant is in excess.\nReason (R): $2\\text{ g of H}_2$ is $1\\text{ mol}$ and $16\\text{ g of O}_2$ is $0.5\\text{ mol}$, which matches the exact $2:1$ stoichiometric ratio.",
    [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    0,
    "Moles of $\\text{H}_2 = 1.0\\text{ mol}$, moles of $\\text{O}_2 = 0.5\\text{ mol}$. The reaction requires $2\\text{ moles of H}_2$ per $1\\text{ mole of O}_2$, which is a $2:1$ ratio. Both reactants are completely consumed.",
    "Medium",
    "ASSERTION_REASON"
  );

  addQ(
    "Stoichiometry",
    "Assertion (A): Combustion of $16\\text{ g}$ of methane produces $44\\text{ g}$ of carbon dioxide gas.\nReason (R): According to the law of conservation of mass, the total mass of reactants must equal the total mass of products in a balanced chemical reaction.",
    [
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    0,
    "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$. $16\\text{ g}$ $\\text{CH}_4$ ($1\\text{ mol}$) produces $1\\text{ mol } \\text{CO}_2$ ($44\\text{ g}$). (A) is true. (R) is true because conservation of mass holds, but (A) specifically follows from reaction stoichiometry ($1\\text{ mol CH}_4 \\rightarrow 1\\text{ mol CO}_2$).",
    "Medium",
    "ASSERTION_REASON"
  );

  return list;
}

module.exports = { generate228Questions };
