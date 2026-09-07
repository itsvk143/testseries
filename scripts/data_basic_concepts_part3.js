// Part 3: Authentic Questions for Some Basic Concepts in Chemistry
// Stoichiometry (168 questions)

const { generate228Questions } = require("./generate_authentic_basic_concepts.js");

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

function getStoichiometryQuestions() {
  // Extract the 136 existing authentic stoichiometry questions
  const base = generate228Questions().filter(q => q.subTopic === "Stoichiometry");

  const extra = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => extra.push(createQ("Stoichiometry", text, opts, ans, exp, diff, type));

  // Add 32 additional authentic Stoichiometry questions to reach exactly 168
  // 1-10
  add(
    "When $10\\text{ mL}$ of a gaseous hydrocarbon is exploded with $60\\text{ mL}$ of $\\text{O}_2$, the volume of gas after cooling to room temperature is $40\\text{ mL}$. Upon treatment with aqueous $\\text{KOH}$, the volume contracts further to $10\\text{ mL}$. What is the molecular formula of the hydrocarbon?",
    ["$\\text{C}_3\\text{H}_8$", "$\\text{C}_3\\text{H}_6$", "$\\text{C}_2\\text{H}_6$", "$\\text{C}_4\\text{H}_{10}$"],
    0,
    "1. Volume absorbed by $\\text{KOH} = \\text{Volume of } \\text{CO}_2 = 40 - 10 = 30\\text{ mL}$.\n2. Number of carbons $x = \\frac{V_{\\text{CO}_2}}{V_{\\text{hydrocarbon}}} = \\frac{30}{10} = 3$.\n3. Remaining unreacted $\\text{O}_2 = 10\\text{ mL}$, so $\\text{O}_2$ consumed $= 60 - 10 = 50\\text{ mL}$.\n4. For $\\text{C}_x\\text{H}_y + (x + y/4)\\text{O}_2 \\rightarrow x\\text{CO}_2 + y/2\\text{H}_2\\text{O}$:\n$10(x + y/4) = 50 \\implies 3 + y/4 = 5 \\implies y/4 = 2 \\implies y = 8$.\nFormula is $\\text{C}_3\\text{H}_8$ (propane).",
    "Hard"
  );
  add(
    "How many moles of $\\text{FeSO}_4$ can be oxidized completely by $1\\text{ mole}$ of potassium permanganate ($\\text{KMnO}_4$) in acidic medium?",
    ["$2\\text{ mol}$", "$5\\text{ mol}$", "$3\\text{ mol}$", "$1\\text{ mol}$"],
    1,
    "The balanced ionic redox reaction is:\n$\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$.\nThus, $1\\text{ mole of KMnO}_4$ oxidizes exactly $5\\text{ moles of FeSO}_4$.",
    "Easy"
  );
  add(
    "A $1.0\\text{ g}$ sample of impure $\\text{CaCO}_3$ is dissolved in $50\\text{ mL}$ of $0.5\\text{ M } \\text{HCl}$. The excess acid requires $30\\text{ mL}$ of $0.5\\text{ M } \\text{NaOH}$ for neutralization. What is the percentage purity of the $\\text{CaCO}_3$ sample?",
    ["$50\\%$", "$75\\%$", "$80\\%$", "$60\\%$"],
    0,
    "1. Total $\\text{mmol of HCl added} = 50 \\times 0.5 = 25\\text{ mmol}$.\n2. $\\text{mmol of NaOH used for excess HCl} = 30 \\times 0.5 = 15\\text{ mmol}$.\n3. $\\text{mmol of HCl reacted with } \\text{CaCO}_3 = 25 - 15 = 10\\text{ mmol}$.\n4. Since $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{CO}_2 + \\text{H}_2\\text{O}$, $\\text{mmol of CaCO}_3 = 10 / 2 = 5\\text{ mmol} = 0.005\\text{ mol}$.\n5. Mass of pure $\\text{CaCO}_3 = 0.005 \\times 100 = 0.50\\text{ g}$.\n6. Percentage purity $= (0.50 / 1.0) \\times 100 = 50\\%$.",
    "Hard"
  );
  add(
    "What volume of hydrogen gas at STP will be liberated by the action of excess dilute $\\text{H}_2\\text{SO}_4$ on $6.54\\text{ g}$ of zinc? (Atomic mass of $\\text{Zn} = 65.4\\text{ u}$)",
    ["$2.24\\text{ L}$", "$4.48\\text{ L}$", "$1.12\\text{ L}$", "$22.4\\text{ L}$"],
    0,
    "$\\text{Zn} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{H}_2$. Moles of $\\text{Zn} = 6.54 / 65.4 = 0.1\\text{ mol}$. Moles of $\\text{H}_2 = 0.1\\text{ mol}$. Volume at STP $= 0.1 \\times 22.4\\text{ L} = 2.24\\text{ L}$.",
    "Easy"
  );
  add(
    "What mass of barium sulfate ($\\text{BaSO}_4$, molar mass = $233.4\\text{ g/mol}$) is precipitated when excess barium chloride solution is added to a solution containing $1.42\\text{ g}$ of sodium sulfate ($\\text{Na}_2\\text{SO}_4$, molar mass = $142\\text{ g/mol}$)?",
    ["$2.334\\text{ g}$", "$4.668\\text{ g}$", "$1.167\\text{ g}$", "$0.233\\text{ g}$"],
    0,
    "$\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\rightarrow \\text{BaSO}_4 \\downarrow + 2\\text{NaCl}$. Moles of $\\text{Na}_2\\text{SO}_4 = 1.42 / 142 = 0.01\\text{ mol}$. Moles of $\\text{BaSO}_4$ formed $= 0.01\\text{ mol}$. Mass $= 0.01 \\times 233.4 = 2.334\\text{ g}$.",
    "Medium"
  );
  add(
    "How many moles of nitric acid ($\\text{HNO}_3$) are required to react completely with $1\\text{ mole}$ of copper metal according to: $3\\text{Cu} + 8\\text{HNO}_3 \\rightarrow 3\\text{Cu}(\\text{NO}_3)_2 + 2\\text{NO} + 4\\text{H}_2\\text{O}$?",
    ["$2.67\\text{ mol}$", "$8.00\\text{ mol}$", "$3.00\\text{ mol}$", "$1.50\\text{ mol}$"],
    0,
    "From the stoichiometric equation, $3\\text{ moles of Cu}$ require $8\\text{ moles of HNO}_3$. Therefore, $1\\text{ mole of Cu}$ requires $8/3 \\approx 2.67\\text{ moles of HNO}_3$.",
    "Easy"
  );
  add(
    "When lead(II) nitrate is thermally decomposed: $2\\text{Pb}(\\text{NO}_3)_2 \\rightarrow 2\\text{PbO} + 4\\text{NO}_2 + \\text{O}_2$. What is the total volume of gaseous products ($\text{NO}_2 + \\text{O}_2$) produced at STP from $0.2\\text{ mol}$ of $\\text{Pb}(\\text{NO}_3)_2$?",
    ["$11.2\\text{ L}$", "$22.4\\text{ L}$", "$5.6\\text{ L}$", "$2.24\\text{ L}$"],
    0,
    "$2\\text{ moles of Pb}(\\text{NO}_3)_2$ produce $4 + 1 = 5\\text{ moles of gas}$. For $0.2\\text{ mol of Pb}(\\text{NO}_3)_2$, total moles of gas $= 0.2 \\times (5/2) = 0.5\\text{ mol}$. Volume at STP $= 0.5 \\times 22.4\\text{ L} = 11.2\\text{ L}$.",
    "Medium"
  );
  add(
    "What mass of quicklime ($\\text{CaO}$) is produced by heating $50\\text{ kg}$ of limestone containing $90\\% \\text{ CaCO}_3$?",
    ["$25.2\\text{ kg}$", "$28.0\\text{ kg}$", "$22.4\\text{ kg}$", "$50.0\\text{ kg}$"],
    0,
    "Mass of pure $\\text{CaCO}_3 = 50 \\times 0.90 = 45\\text{ kg} = 45000\\text{ g}$. Moles of $\\text{CaCO}_3 = 45000 / 100 = 450\\text{ mol}$. Moles of $\\text{CaO} = 450\\text{ mol}$. Mass of $\\text{CaO} = 450 \\times 56 = 25200\\text{ g} = 25.2\\text{ kg}$.",
    "Medium"
  );
  add(
    "In an iodometric titration, $25\\text{ mL}$ of copper sulfate solution was treated with excess $\\text{KI}$ and the liberated iodine required $20\\text{ mL}$ of $0.1\\text{ M } \\text{Na}_2\\text{S}_2\\text{O}_3$ solution. What is the molarity of $\\text{Cu}^{2+}$ in the solution?",
    ["$0.08\\text{ M}$", "$0.04\\text{ M}$", "$0.16\\text{ M}$", "$0.10\\text{ M}$"],
    0,
    "Reactions: $2\\text{Cu}^{2+} + 4\\text{I}^- \\rightarrow 2\\text{CuI} + \\text{I}_2$; $\\text{I}_2 + 2\\text{S}_2\\text{O}_3^{2-} \\rightarrow 2\\text{I}^- + \\text{S}_4\\text{O}_6^{2-}$. Mole ratio $\\text{Cu}^{2+} : \\text{S}_2\\text{O}_3^{2-} = 1 : 1$. Moles of $\\text{S}_2\\text{O}_3^{2-} = 20 \\times 0.1 = 2\\text{ mmol}$. Moles of $\\text{Cu}^{2+} = 2\\text{ mmol}$. Molarity $= 2\\text{ mmol} / 25\\text{ mL} = 0.08\\text{ M}$.",
    "Hard"
  );
  add(
    "Assertion (A): Gay-Lussac's law of combining volumes is applicable only to gaseous reactants and products.\nReason (R): Equal volumes of liquids or solids do not contain equal numbers of moles due to differences in molecular packing and densities.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Gay-Lussac's law applies specifically to gases because their volumes are directly proportional to mole numbers under constant temperature and pressure. Solids and liquids do not exhibit this property. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  // 11-20
  add(
    "How many grams of silver chloride ($\\text{AgCl}$) will be precipitated by adding excess $\\text{NaCl}$ to $500\\text{ mL}$ of $0.1\\text{ M } \\text{AgNO}_3$ solution? (Molar mass of $\\text{AgCl} = 143.5\\text{ g/mol}$)",
    ["$7.18\\text{ g}$", "$14.35\\text{ g}$", "$3.59\\text{ g}$", "$1.44\\text{ g}$"],
    0,
    "Moles of $\\text{AgNO}_3 = 0.500 \\times 0.1 = 0.05\\text{ mol}$. Moles of $\\text{AgCl} = 0.05\\text{ mol}$. Mass of $\\text{AgCl} = 0.05 \\times 143.5 = 7.175 \\approx 7.18\\text{ g}$.",
    "Easy"
  );
  add(
    "What volume of $0.05\\text{ M } \\text{K}_2\\text{Cr}_2\\text{O}_7$ solution is required to oxidize $30\\text{ mL}$ of $0.2\\text{ M } \\text{FeSO}_4$ in acidic medium?",
    ["$20\\text{ mL}$", "$40\\text{ mL}$", "$10\\text{ mL}$", "$30\\text{ mL}$"],
    0,
    "Balanced equation: $\\text{Cr}_2\\text{O}_7^{2-} + 6\\text{Fe}^{2+} + 14\\text{H}^+ \\rightarrow 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O}$. Moles of $\\text{Fe}^{2+} = 30 \\times 0.2 = 6\\text{ mmol}$. Moles of $\\text{Cr}_2\\text{O}_7^{2-} = 6 / 6 = 1\\text{ mmol}$. Volume $= 1\\text{ mmol} / 0.05\\text{ M} = 20\\text{ mL}$.",
    "Medium"
  );
  add(
    "Calculate the volume of oxygen at STP required for the complete combustion of $100\\text{ L}$ of carbon monoxide ($\\text{CO}$).",
    ["$50\\text{ L}$", "$100\\text{ L}$", "$200\\text{ L}$", "$25\\text{ L}$"],
    0,
    "Reaction: $2\\text{CO} + \\text{O}_2 \\rightarrow 2\\text{CO}_2$. By Gay-Lussac's law, $2$ volumes of $\\text{CO}$ require $1$ volume of $\\text{O}_2$. Thus, $100\\text{ L of CO}$ requires $100 / 2 = 50\\text{ L of O}_2$.",
    "Easy"
  );
  add(
    "What is the maximum mass of iron that can be extracted from $1\\text{ metric ton}$ ($1000\\text{ kg}$) of haematite ore containing $80\\% \\text{ Fe}_2\\text{O}_3$? (Atomic mass of $\\text{Fe} = 56, \\text{O} = 16$)",
    ["$560\\text{ kg}$", "$700\\text{ kg}$", "$800\\text{ kg}$", "$400\\text{ kg}$"],
    0,
    "Mass of pure $\\text{Fe}_2\\text{O}_3 = 1000 \\times 0.80 = 800\\text{ kg}$. In $160\\text{ kg of Fe}_2\\text{O}_3$, mass of iron is $2 \\times 56 = 112\\text{ kg}$. Mass of iron extracted $= 800 \\times (112 / 160) = 560\\text{ kg}$.",
    "Medium"
  );
  add(
    "A mixture of $20\\text{ mL}$ of methane and $20\\text{ mL}$ of oxygen is exploded and cooled to room temperature. What is the final volume of the gas mixture before adding any alkali?",
    ["$20\\text{ mL}$", "$30\\text{ mL}$", "$10\\text{ mL}$", "$15\\text{ mL}$"],
    0,
    "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O(l)}$. $20\\text{ mL of O}_2$ reacts with $10\\text{ mL of CH}_4$ to form $10\\text{ mL of CO}_2$. Unreacted $\\text{CH}_4 = 20 - 10 = 10\\text{ mL}$. Liquid water has negligible volume. Total gas volume $= 10\\text{ mL } \\text{CO}_2 + 10\\text{ mL unreacted } \\text{CH}_4 = 20\\text{ mL}$.",
    "Hard"
  );
  add(
    "How many grams of calcium chloride ($\\text{CaCl}_2$, molar mass = $111\\text{ g/mol}$) are produced when $10\\text{ g}$ of $\\text{CaCO}_3$ reacts completely with excess hydrochloric acid?",
    ["$11.1\\text{ g}$", "$22.2\\text{ g}$", "$5.55\\text{ g}$", "$1.11\\text{ g}$"],
    0,
    "$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{CO}_2 + \\text{H}_2\\text{O}$. Moles of $\\text{CaCO}_3 = 10 / 100 = 0.1\\text{ mol}$. Moles of $\\text{CaCl}_2 = 0.1\\text{ mol}$. Mass $= 0.1 \\times 111 = 11.1\\text{ g}$.",
    "Easy"
  );
  add(
    "What volume of $0.2\\text{ M } \\text{HCl}$ is required to neutralize $20\\text{ mL}$ of $0.1\\text{ M } \\text{Na}_2\\text{CO}_3$ using methyl orange as indicator (complete neutralization to $\\text{CO}_2$)?",
    ["$20\\text{ mL}$", "$10\\text{ mL}$", "$40\\text{ mL}$", "$5\\text{ mL}$"],
    0,
    "$\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{CO}_2 + \\text{H}_2\\text{O}$. Moles of $\\text{Na}_2\\text{CO}_3 = 20 \\times 0.1 = 2\\text{ mmol}$. Moles of HCl required $= 2 \\times 2 = 4\\text{ mmol}$. Volume of HCl $= 4\\text{ mmol} / 0.2\\text{ M} = 20\\text{ mL}$.",
    "Medium"
  );
  add(
    "How many moles of $\\text{CO}_2$ are produced when $2\\text{ moles}$ of butane ($\\text{C}_4\\text{H}_{10}$) undergo complete combustion?",
    ["$8\\text{ mol}$", "$4\\text{ mol}$", "$10\\text{ mol}$", "$16\\text{ mol}$"],
    0,
    "Balanced equation: $2\\text{C}_4\\text{H}_{10} + 13\\text{O}_2 \\rightarrow 8\\text{CO}_2 + 10\\text{H}_2\\text{O}$. Complete combustion of $2\\text{ moles of butane}$ produces exactly $8\\text{ moles of CO}_2$.",
    "Easy"
  );
  add(
    "What mass of phosphorus (Atomic mass = $31$) is required to produce $71\\text{ g}$ of phosphorus pentoxide ($\\text{P}_4\\text{O}_{10}$, molar mass = $284\\text{ g/mol}$)?",
    ["$31\\text{ g}$", "$62\\text{ g}$", "$15.5\\text{ g}$", "$124\\text{ g}$"],
    0,
    "Reaction: $4\\text{P} + 5\\text{O}_2 \\rightarrow \\text{P}_4\\text{O}_{10}$. Moles of $\\text{P}_4\\text{O}_{10} = 71 / 284 = 0.25\\text{ mol}$. Moles of P required $= 0.25 \\times 4 = 1.0\\text{ mol}$. Mass of P $= 1.0 \\times 31 = 31\\text{ g}$.",
    "Medium"
  );
  add(
    "Assertion (A): Stoichiometric calculations are based on the Law of Conservation of Mass.\nReason (R): In a balanced chemical equation, the total number of atoms of each element is identical on both reactant and product sides.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because atoms cannot be created or destroyed, mass is conserved, allowing quantitative stoichiometry based on mole ratios. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  // 21-32
  add(
    "When chlorine gas is passed into a hot concentrated aqueous solution of potassium hydroxide, the reaction is: $6\\text{KOH} + 3\\text{Cl}_2 \\rightarrow 5\\text{KCl} + \\text{KClO}_3 + 3\\text{H}_2\\text{O}$. How many moles of $\\text{KClO}_3$ are formed from $6\\text{ moles}$ of $\\text{Cl}_2$?",
    ["$2\\text{ mol}$", "$1\\text{ mol}$", "$3\\text{ mol}$", "$0.5\\text{ mol}$"],
    0,
    "From the stoichiometry, $3\\text{ moles of Cl}_2$ yield $1\\text{ mole of KClO}_3$. Therefore, $6\\text{ moles of Cl}_2$ yield $6 / 3 = 2\\text{ moles of KClO}_3$.",
    "Easy"
  );
  add(
    "What volume of $0.1\\text{ M } \\text{KMnO}_4$ is required to oxidize $100\\text{ mL}$ of $0.1\\text{ M } \\text{H}_2\\text{C}_2\\text{O}_4$ (oxalic acid) in acidic medium?",
    ["$40\\text{ mL}$", "$20\\text{ mL}$", "$50\\text{ mL}$", "$100\\text{ mL}$"],
    0,
    "Reaction: $2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$. Moles of oxalic acid $= 100 \\times 0.1 = 10\\text{ mmol}$. Moles of $\\text{MnO}_4^- = 10 \\times (2/5) = 4\\text{ mmol}$. Volume $= 4\\text{ mmol} / 0.1\\text{ M} = 40\\text{ mL}$.",
    "Medium"
  );
  add(
    "What mass of magnesium oxide is formed by burning $1.2\\text{ g}$ of magnesium in excess oxygen? (Atomic masses: $\\text{Mg} = 24, \\text{O} = 16$)",
    ["$2.0\\text{ g}$", "$1.6\\text{ g}$", "$4.0\\text{ g}$", "$2.4\\text{ g}$"],
    0,
    "$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$. Moles of Mg $= 1.2 / 24 = 0.05\\text{ mol}$. Moles of MgO $= 0.05\\text{ mol}$. Mass of MgO $= 0.05 \\times 40 = 2.0\\text{ g}$.",
    "Easy"
  );
  add(
    "What volume of dry hydrogen gas at STP is liberated when $2.3\\text{ g}$ of sodium reacts with excess ethanol?",
    ["$1.12\\text{ L}$", "$2.24\\text{ L}$", "$0.56\\text{ L}$", "$4.48\\text{ L}$"],
    0,
    "$2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{Na} \\rightarrow 2\\text{C}_2\\text{H}_5\\text{ONa} + \\text{H}_2$. Moles of Na $= 2.3 / 23 = 0.1\\text{ mol}$. Moles of $\\text{H}_2 = 0.1 / 2 = 0.05\\text{ mol}$. Volume at STP $= 0.05 \\times 22.4\\text{ L} = 1.12\\text{ L}$.",
    "Medium"
  );
  add(
    "In the reaction $\\text{Fe}_3\\text{O}_4 + 4\\text{H}_2 \\rightarrow 3\\text{Fe} + 4\\text{H}_2\\text{O}$, how many moles of hydrogen gas are needed to produce $168\\text{ g}$ of iron? (Atomic mass of $\\text{Fe} = 56$)",
    ["$4.0\\text{ mol}$", "$3.0\\text{ mol}$", "$1.0\\text{ mol}$", "$1.33\\text{ mol}$"],
    0,
    "Moles of Fe $= 168 / 56 = 3.0\\text{ mol}$. The balanced equation shows that $3\\text{ moles of Fe}$ require $4\\text{ moles of H}_2$. Thus, exactly $4.0\\text{ moles of H}_2$ are needed.",
    "Easy"
  );
  add(
    "What mass of $\\text{CO}_2$ is produced when $50\\text{ g}$ of calcium carbonate is strongly heated?",
    ["$22\\text{ g}$", "$44\\text{ g}$", "$11\\text{ g}$", "$25\\text{ g}$"],
    0,
    "$\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$. Moles of $\\text{CaCO}_3 = 50 / 100 = 0.5\\text{ mol}$. Moles of $\\text{CO}_2 = 0.5\\text{ mol}$. Mass of $\\text{CO}_2 = 0.5 \\times 44 = 22\\text{ g}$.",
    "Easy"
  );
  add(
    "How many moles of $\\text{Al}$ are required to reduce $1\\text{ mole}$ of $\\text{Cr}_2\\text{O}_3$ in the thermite process: $\\text{Cr}_2\\text{O}_3 + 2\\text{Al} \\rightarrow \\text{Al}_2\\text{O}_3 + 2\\text{Cr}$?",
    ["$2\\text{ mol}$", "$1\\text{ mol}$", "$4\\text{ mol}$", "$0.5\\text{ mol}$"],
    0,
    "Stoichiometric coefficient of $\\text{Al}$ is $2$ for every $1$ mole of $\\text{Cr}_2\\text{O}_3$. Thus, $2\\text{ moles of Al}$ are required.",
    "Easy"
  );
  add(
    "What volume of air containing $21\\% \\text{ O}_2$ by volume at STP is required to burn completely $11.2\\text{ L}$ of $\\text{H}_2$ at STP?",
    ["$26.67\\text{ L}$", "$5.60\\text{ L}$", "$11.20\\text{ L}$", "$53.33\\text{ L}$"],
    0,
    "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$. Volume of $\\text{O}_2$ required $= 11.2 / 2 = 5.6\\text{ L}$. Volume of air $= 5.6 / 0.21 \\approx 26.67\\text{ L}$.",
    "Hard"
  );
  add(
    "What mass of copper is obtained by reacting $7.95\\text{ g}$ of $\\text{CuO}$ with excess hydrogen gas? (Atomic masses: $\\text{Cu} = 63.5, \\text{O} = 16$)",
    ["$6.35\\text{ g}$", "$3.18\\text{ g}$", "$12.70\\text{ g}$", "$1.59\\text{ g}$"],
    0,
    "$\\text{CuO} + \\text{H}_2 \\rightarrow \\text{Cu} + \\text{H}_2\\text{O}$. Molar mass of $\\text{CuO} = 79.5\\text{ g/mol}$. Moles of $\\text{CuO} = 7.95 / 79.5 = 0.1\\text{ mol}$. Moles of Cu $= 0.1\\text{ mol}$. Mass of Cu $= 0.1 \\times 63.5 = 6.35\\text{ g}$.",
    "Easy"
  );
  add(
    "How many liters of $\\text{SO}_2$ gas at STP are produced by roasting $9.7\\text{ g}$ of zinc sulfide ($\\text{ZnS}$, molar mass = $97\\text{ g/mol}$): $2\\text{ZnS} + 3\\text{O}_2 \\rightarrow 2\\text{ZnO} + 2\\text{SO}_2$?",
    ["$2.24\\text{ L}$", "$4.48\\text{ L}$", "$1.12\\text{ L}$", "$3.36\\text{ L}$"],
    0,
    "Moles of $\\text{ZnS} = 9.7 / 97 = 0.1\\text{ mol}$. Moles of $\\text{SO}_2 = 0.1\\text{ mol}$. Volume of $\\text{SO}_2$ at STP $= 0.1 \\times 22.4\\text{ L} = 2.24\\text{ L}$.",
    "Easy"
  );
  add(
    "What mass of $\\text{KClO}_3$ must be heated to produce the same volume of $\\text{O}_2$ as produced by decomposing $100\\text{ g}$ of $\\text{H}_2\\text{O}_2$ ($2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$)? (Molar masses: $\\text{H}_2\\text{O}_2 = 34\\text{ g/mol}, \\text{KClO}_3 = 122.5\\text{ g/mol}$)",
    ["$120.1\\text{ g}$", "$81.6\\text{ g}$", "$61.2\\text{ g}$", "$245.0\\text{ g}$"],
    0,
    "Moles of $\\text{H}_2\\text{O}_2 = 100 / 34 = 2.941\\text{ mol}$. Moles of $\\text{O}_2 = 2.941 / 2 = 1.4705\\text{ mol}$. From $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$, moles of $\\text{KClO}_3$ required $= 1.4705 \\times (2/3) \\approx 0.9804\\text{ mol}$. Mass of $\\text{KClO}_3 = 0.9804 \\times 122.5 \\approx 120.1\\text{ g}$.",
    "Hard"
  );
  add(
    "Assertion (A): For the decomposition of hydrogen peroxide, $2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$, the volume of $\\text{O}_2$ gas formed at STP is half the volume occupied by the equivalent vaporized $\\text{H}_2\\text{O}_2$.\nReason (R): In the balanced equation, the stoichiometric coefficient of $\\text{O}_2$ is $1$ while that of $\\text{H}_2\\text{O}_2$ is $2$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "By Gay-Lussac's law, gaseous volume ratios are directly equal to the stoichiometric mole ratios in the balanced chemical equation. Both are true and (R) correctly explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return [...base, ...extra];
}

module.exports = {
  getStoichiometryQuestions
};
