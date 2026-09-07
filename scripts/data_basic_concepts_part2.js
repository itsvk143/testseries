// Part 2: Authentic Questions for Some Basic Concepts in Chemistry
// Concentration terms (47 questions), Percentage composition and limiting reagent (47 questions)

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

function getConcentrationTermsQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Concentration terms (molarity, molality, normality, mole fraction)", text, opts, ans, exp, diff, type));

  // 1-10
  add(
    "What is the molarity of a solution obtained by dissolving $4.0\\text{ g}$ of $\\text{NaOH}$ in water to make $250\\text{ mL}$ of solution?",
    ["$0.1\\text{ M}$", "$0.2\\text{ M}$", "$0.4\\text{ M}$", "$0.8\\text{ M}$"],
    2,
    "Molar mass of $\\text{NaOH} = 40\\text{ g/mol}$. Moles of $\\text{NaOH} = 4.0 / 40 = 0.1\\text{ mol}$. Volume $= 0.250\\text{ L}$. Molarity $= 0.1 / 0.250 = 0.4\\text{ M}$.",
    "Easy"
  );
  add(
    "Which of the following concentration terms is independent of temperature changes?",
    ["Molarity", "Normality", "Molality", "Formality"],
    2,
    "Molality ($m$) is defined as moles of solute per kilogram of solvent. Since both mass and moles do not expand or contract with temperature, molality is temperature-independent.",
    "Easy"
  );
  add(
    "Calculate the molality of a solution containing $18\\text{ g}$ of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, molar mass = $180\\text{ g/mol}$) in $500\\text{ g}$ of water.",
    ["$0.1\\text{ m}$", "$0.2\\text{ m}$", "$0.5\\text{ m}$", "$1.0\\text{ m}$"],
    1,
    "Moles of glucose $= 18 / 180 = 0.1\\text{ mol}$. Mass of solvent $= 500\\text{ g} = 0.5\\text{ kg}$. Molality $= 0.1 / 0.5 = 0.2\\text{ m}$.",
    "Easy"
  );
  add(
    "What is the normality of a $0.3\\text{ M}$ aqueous solution of orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)?",
    ["$0.1\\text{ N}$", "$0.3\\text{ N}$", "$0.6\\text{ N}$", "$0.9\\text{ N}$"],
    3,
    "$\\text{H}_3\\text{PO}_4$ is a tribasic acid ($n\\text{-factor} = 3$). Normality $= \\text{Molarity} \\times n\\text{-factor} = 0.3 \\times 3 = 0.9\\text{ N}$.",
    "Easy"
  );
  add(
    "What is the mole fraction of ethanol in a solution prepared by mixing $46\\text{ g}$ of ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$) with $54\\text{ g}$ of water ($\\text{H}_2\\text{O}$)?",
    ["$0.20$", "$0.25$", "$0.33$", "$0.50$"],
    1,
    "Moles of ethanol $= 46 / 46 = 1.0\\text{ mol}$. Moles of water $= 54 / 18 = 3.0\\text{ mol}$. Total moles $= 1.0 + 3.0 = 4.0\\text{ mol}$. Mole fraction of ethanol $= 1.0 / 4.0 = 0.25$.",
    "Easy"
  );
  add(
    "If $250\\text{ mL}$ of $0.5\\text{ M } \\text{HCl}$ is mixed with $750\\text{ mL}$ of $0.1\\text{ M } \\text{HCl}$, what is the final molarity of the mixed solution?",
    ["$0.20\\text{ M}$", "$0.30\\text{ M}$", "$0.15\\text{ M}$", "$0.25\\text{ M}$"],
    0,
    "$M_{\\text{final}} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2} = \\frac{(0.5 \\times 250) + (0.1 \\times 750)}{250 + 750} = \\frac{125 + 75}{1000} = \\frac{200}{1000} = 0.20\\text{ M}$.",
    "Medium"
  );
  add(
    "Commercial concentrated nitric acid ($\\text{HNO}_3$, molar mass = $63\\text{ g/mol}$) is $68\\%$ by mass and has a density of $1.504\\text{ g/mL}$. What is its molarity?",
    ["$16.24\\text{ M}$", "$14.40\\text{ M}$", "$15.10\\text{ M}$", "$18.00\\text{ M}$"],
    0,
    "$M = \\frac{\\% \\times d \\times 10}{M_w} = \\frac{68 \\times 1.504 \\times 10}{63} = \\frac{1022.72}{63} \\approx 16.23\\text{ M}$.",
    "Medium"
  );
  add(
    "A solution contains $10\\text{ ppm}$ of chloroform in drinking water. What is the mass percentage of chloroform in this water?",
    ["$10^{-2}\\%$", "$10^{-3}\\%$", "$10^{-4}\\%$", "$10^{-5}\\%$"],
    1,
    "$10\\text{ ppm} = 10\\text{ g solute in } 10^6\\text{ g solution}$. Mass percentage $= \\frac{10}{10^6} \\times 100 = 10^{-3}\\% = 0.001\\%$.",
    "Easy"
  );
  add(
    "What volume of water must be added to $200\\text{ mL}$ of $0.5\\text{ M } \\text{NaOH}$ solution to dilute it to $0.1\\text{ M}$?",
    ["$600\\text{ mL}$", "$800\\text{ mL}$", "$1000\\text{ mL}$", "$400\\text{ mL}$"],
    1,
    "$M_1 V_1 = M_2 V_2 \\implies 0.5 \\times 200 = 0.1 \\times V_2 \\implies V_2 = 1000\\text{ mL}$. Volume of water added $= V_2 - V_1 = 1000 - 200 = 800\\text{ mL}$.",
    "Medium"
  );
  add(
    "Assertion (A): The molality of a $1\\text{ M}$ aqueous solution of glucose is greater than $1\\text{ m}$ if the density of the solution is $1.0\\text{ g/mL}$.\nReason (R): In a $1\\text{ M}$ solution, $1\\text{ L}$ of solution contains $1\\text{ mole}$ of solute, so the mass of solvent is less than $1000\\text{ g}$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Mass of $1\\text{ L}$ solution $= 1000\\text{ g}$. Mass of $1\\text{ mol}$ glucose $= 180\\text{ g}$. Mass of solvent $= 1000 - 180 = 820\\text{ g} = 0.82\\text{ kg}$. Molality $= 1 / 0.82 \\approx 1.22\\text{ m} > 1\\text{ m}$. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );

  // 11-20
  add(
    "What is the normality of a $0.2\\text{ M}$ solution of phosphorous acid ($\\text{H}_3\\text{PO}_3$)?",
    ["$0.2\\text{ N}$", "$0.4\\text{ N}$", "$0.6\\text{ N}$", "$0.1\\text{ N}$"],
    1,
    "$\\text{H}_3\\text{PO}_3$ is a dibasic acid because it contains two ionizable $\\text{P-OH}$ protons and one non-ionizable $\\text{P-H}$ bond ($n\\text{-factor} = 2$). Normality $= 0.2 \\times 2 = 0.4\\text{ N}$.",
    "Medium"
  );
  add(
    "How many grams of concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$, $98\\%$ by mass) are required to prepare $500\\text{ mL}$ of $0.1\\text{ M } \\text{H}_2\\text{SO}_4$ solution?",
    ["$4.9\\text{ g}$", "$5.0\\text{ g}$", "$9.8\\text{ g}$", "$2.45\\text{ g}$"],
    1,
    "Moles needed $= 0.1 \\times 0.500 = 0.05\\text{ mol}$. Mass of pure $\\text{H}_2\\text{SO}_4 = 0.05 \\times 98 = 4.9\\text{ g}$. Mass of $98\\%$ acid needed $= 4.9 / 0.98 = 5.0\\text{ g}$.",
    "Medium"
  );
  add(
    "In an aqueous solution, the mole fraction of solute is $0.1$. What is the molality of this solution? (Molar mass of water $= 18\\text{ g/mol}$)",
    ["$5.55\\text{ m}$", "$6.17\\text{ m}$", "$4.95\\text{ m}$", "$1.11\\text{ m}$"],
    1,
    "$m = \\frac{x_B \\times 1000}{(1 - x_B) \\times M_A} = \\frac{0.1 \\times 1000}{0.9 \\times 18} = \\frac{100}{16.2} \\approx 6.17\\text{ m}$.",
    "Hard"
  );
  add(
    "What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.0\\text{ g/cm}^3$)?",
    ["$18.0\\text{ M}$", "$55.55\\text{ M}$", "$1.0\\text{ M}$", "$100.0\\text{ M}$"],
    1,
    "$1\\text{ L}$ of water weighs $1000\\text{ g}$. Moles in $1\\text{ L} = 1000 / 18 = 55.55\\text{ mol}$. Hence, molarity $= 55.55\\text{ M}$.",
    "Easy"
  );
  add(
    "What volume of $0.1\\text{ M } \\text{Ba}(\\text{OH})_2$ is required to neutralize $50\\text{ mL}$ of $0.2\\text{ M } \\text{HCl}$?",
    ["$25\\text{ mL}$", "$50\\text{ mL}$", "$100\\text{ mL}$", "$12.5\\text{ mL}$"],
    1,
    "$\\text{Ba}(\\text{OH})_2$ has $n\\text{-factor} = 2$, so Normality $= 0.1 \\times 2 = 0.2\\text{ N}$. HCl has $n\\text{-factor} = 1$, so Normality $= 0.2\\text{ N}$. Using $N_1 V_1 = N_2 V_2$: $0.2 \\times V_1 = 0.2 \\times 50 \\implies V_1 = 50\\text{ mL}$.",
    "Medium"
  );
  add(
    "What is the mole fraction of solute in a $1.0\\text{ molal}$ aqueous solution?",
    ["$0.0177$", "$0.0344$", "$0.0555$", "$0.1000$"],
    0,
    "Moles of solute $= 1.0\\text{ mol}$. Moles of water in $1\\text{ kg} = 1000 / 18 = 55.55\\text{ mol}$. Mole fraction of solute $= \\frac{1.0}{1.0 + 55.55} = \\frac{1.0}{56.55} \\approx 0.0177$.",
    "Medium"
  );
  add(
    "An aqueous solution of urea is $10\\%$ by mass. What is the mass of water in which $10\\text{ g}$ of urea is dissolved?",
    ["$100\\text{ g}$", "$90\\text{ g}$", "$80\\text{ g}$", "$110\\text{ g}$"],
    1,
    "In a $10\\%$ by mass solution, $10\\text{ g}$ of solute is dissolved in $100 - 10 = 90\\text{ g}$ of solvent (water).",
    "Easy"
  );
  add(
    "What is the molarity of a $10\\%\\text{ (w/v)}$ aqueous solution of $\\text{NaOH}$?",
    ["$1.0\\text{ M}$", "$2.5\\text{ M}$", "$4.0\\text{ M}$", "$0.25\\text{ M}$"],
    1,
    "$10\\%\\text{ (w/v)}$ means $10\\text{ g}$ of $\\text{NaOH}$ in $100\\text{ mL}$ of solution. In $1000\\text{ mL}$, mass of $\\text{NaOH} = 100\\text{ g}$. Moles $= 100 / 40 = 2.5\\text{ mol/L} = 2.5\\text{ M}$.",
    "Easy"
  );
  add(
    "Equal volumes of $0.1\\text{ M } \\text{HCl}$ and $0.1\\text{ M } \\text{H}_2\\text{SO}_4$ are mixed. The concentration of $\\text{H}^+$ ions in the resulting mixture is:",
    ["$0.10\\text{ M}$", "$0.15\\text{ M}$", "$0.20\\text{ M}$", "$0.30\\text{ M}$"],
    1,
    "Let volume of each be $V$. Moles of $\\text{H}^+$ from HCl $= 0.1 V$. Moles of $\\text{H}^+$ from $\\text{H}_2\\text{SO}_4 = 2 \\times 0.1 V = 0.2 V$. Total moles of $\\text{H}^+ = 0.3 V$. Total volume $= 2 V$. $[\\text{H}^+] = 0.3 V / 2 V = 0.15\\text{ M}$.",
    "Medium"
  );
  add(
    "Assertion (A): The normality of $1\\text{ M } \\text{H}_3\\text{PO}_2$ solution is $1\\text{ N}$.\nReason (R): Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) is a monobasic acid having only one replaceable hydrogen atom directly bonded to oxygen.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "$\\text{H}_3\\text{PO}_2$ has two P-H bonds and only one P-OH bond, making its basicity ($n\\text{-factor}$) equal to $1$. Therefore, Normality $= 1 \\times 1 = 1\\text{ N}$. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );

  // 21-35
  add(
    "What is the molality of an aqueous solution containing $5.85\\text{ g}$ of $\\text{NaCl}$ in $200\\text{ g}$ of water? (Molar mass of $\\text{NaCl} = 58.5\\text{ g/mol}$)",
    ["$0.25\\text{ m}$", "$0.50\\text{ m}$", "$1.00\\text{ m}$", "$0.10\\text{ m}$"],
    1,
    "Moles of $\\text{NaCl} = 5.85 / 58.5 = 0.1\\text{ mol}$. Solvent mass $= 200\\text{ g} = 0.2\\text{ kg}$. Molality $= 0.1 / 0.2 = 0.50\\text{ m}$.",
    "Easy"
  );
  add(
    "What is the normality of a $1\\text{ M } \\text{H}_2\\text{SO}_4$ solution?",
    ["$0.5\\text{ N}$", "$1.0\\text{ N}$", "$2.0\\text{ N}$", "$4.0\\text{ N}$"],
    2,
    "Normality $= \\text{Molarity} \\times \\text{basicity} = 1 \\times 2 = 2.0\\text{ N}$.",
    "Easy"
  );
  add(
    "A sample of hard water contains $200\\text{ ppm}$ of $\\text{CaCO}_3$. How many grams of $\\text{CaCO}_3$ are present in $5\\text{ L}$ of this water? (Density of water $= 1.0\\text{ g/mL}$)",
    ["$0.5\\text{ g}$", "$1.0\\text{ g}$", "$2.0\\text{ g}$", "$0.1\\text{ g}$"],
    1,
    "Mass of $5\\text{ L}$ of water $= 5000\\text{ g}$. Mass of $\\text{CaCO}_3 = \\frac{200 \\times 5000}{10^6} = \\frac{10^6}{10^6} = 1.0\\text{ g}$.",
    "Medium"
  );
  add(
    "If the mole fraction of glucose in an aqueous solution is $0.05$, the mole fraction of water is:",
    ["$0.95$", "$0.90$", "$0.50$", "$0.05$"],
    0,
    "Sum of mole fractions in a binary mixture $= x_A + x_B = 1 \\implies x_{\\text{water}} = 1 - 0.05 = 0.95$.",
    "Easy"
  );
  add(
    "What volume of $2\\text{ M } \\text{HCl}$ is required to prepare $500\\text{ mL}$ of $0.5\\text{ M } \\text{HCl}$?",
    ["$100\\text{ mL}$", "$125\\text{ mL}$", "$250\\text{ mL}$", "$150\\text{ mL}$"],
    1,
    "$M_1 V_1 = M_2 V_2 \\implies 2 \\times V_1 = 0.5 \\times 500 = 250 \\implies V_1 = 125\\text{ mL}$.",
    "Easy"
  );
  add(
    "What is the mass of anhydrous $\\text{Na}_2\\text{CO}_3$ required to prepare $250\\text{ mL}$ of a $0.1\\text{ M}$ solution? (Molar mass = $106\\text{ g/mol}$)",
    ["$2.65\\text{ g}$", "$5.30\\text{ g}$", "$1.06\\text{ g}$", "$10.60\\text{ g}$"],
    0,
    "Moles needed $= 0.1 \\times 0.250 = 0.025\\text{ mol}$. Mass $= 0.025 \\times 106 = 2.65\\text{ g}$.",
    "Easy"
  );
  add(
    "When $100\\text{ mL}$ of $0.2\\text{ M } \\text{H}_2\\text{SO}_4$ is added to $100\\text{ mL}$ of $0.2\\text{ M } \\text{NaOH}$, the nature of the resulting solution is:",
    ["Acidic", "Basic", "Neutral", "Amphoteric"],
    0,
    "Milliequivalents of acid $= 100 \\times 0.2 \\times 2 = 40\\text{ meq}$. Milliequivalents of base $= 100 \\times 0.2 \\times 1 = 20\\text{ meq}$. Since acid is in excess ($20\\text{ meq}$ unneutralized), the solution is acidic.",
    "Medium"
  );
  add(
    "What is the mole fraction of glycerin ($\\text{C}_3\\text{H}_8\\text{O}_3$, molar mass = $92\\text{ g/mol}$) in a solution made by dissolving $46\\text{ g}$ of glycerin in $90\\text{ g}$ of water?",
    ["$0.091$", "$0.100$", "$0.050$", "$0.200$"],
    0,
    "Moles of glycerin $= 46 / 92 = 0.5\\text{ mol}$. Moles of water $= 90 / 18 = 5.0\\text{ mol}$. Total moles $= 5.5\\text{ mol}$. Mole fraction $= 0.5 / 5.5 = 1/11 \\approx 0.091$.",
    "Medium"
  );
  add(
    "Which concentration unit has the dimension of $\\text{mol}\\cdot\\text{kg}^{-1}$?",
    ["Molarity", "Molality", "Mole fraction", "Normality"],
    1,
    "Molality is expressed in moles of solute per kilogram of solvent ($\\text{mol/kg}$).",
    "Easy"
  );
  add(
    "Assertion (A): Molarity changes with change in temperature, while molality remains constant.\nReason (R): Volume of a solution is temperature-dependent, but mass of the solvent is temperature-independent.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Molarity depends on the volume of solution ($V$), which expands or contracts with temperature changes. Molality depends on the mass of solvent, which is conserved. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "What is the molarity of a solution containing $10\\text{ g}$ of calcium chloride ($\\text{CaCl}_2$, molar mass = $111\\text{ g/mol}$) in $500\\text{ mL}$ of solution?",
    ["$0.18\\text{ M}$", "$0.09\\text{ M}$", "$0.36\\text{ M}$", "$0.54\\text{ M}$"],
    0,
    "Moles $= 10 / 111 \\approx 0.0901\\text{ mol}$. Molarity $= 0.0901 / 0.500 \\approx 0.18\\text{ M}$.",
    "Easy"
  );
  add(
    "How many milliequivalents of solute are present in $50\\text{ mL}$ of $0.1\\text{ N } \\text{KMnO}_4$ solution?",
    ["$5\\text{ meq}$", "$0.5\\text{ meq}$", "$50\\text{ meq}$", "$10\\text{ meq}$"],
    0,
    "$\\text{Milliequivalents} = N \\times V(\\text{in mL}) = 0.1 \\times 50 = 5\\text{ meq}$.",
    "Easy"
  );
  add(
    "The density of a $3\\text{ M}$ aqueous solution of $\\text{NaCl}$ is $1.25\\text{ g/mL}$. The molality of the solution is approximately (Molar mass of $\\text{NaCl} = 58.5\\text{ g/mol}$):",
    ["$2.79\\text{ m}$", "$2.40\\text{ m}$", "$3.25\\text{ m}$", "$3.00\\text{ m}$"],
    0,
    "Mass of $1\\text{ L}$ solution $= 1000 \\times 1.25 = 1250\\text{ g}$. Mass of $3\\text{ mol } \\text{NaCl} = 3 \\times 58.5 = 175.5\\text{ g}$. Mass of solvent $= 1250 - 175.5 = 1074.5\\text{ g} = 1.0745\\text{ kg}$. Molality $= 3 / 1.0745 \\approx 2.79\\text{ m}$.",
    "Hard"
  );
  add(
    "To neutralize completely $20\\text{ mL}$ of $0.1\\text{ M } \\text{H}_2\\text{SO}_4$, what volume of $0.1\\text{ M } \\text{NaOH}$ is required?",
    ["$10\\text{ mL}$", "$20\\text{ mL}$", "$40\\text{ mL}$", "$80\\text{ mL}$"],
    2,
    "$\\text{H}_2\\text{SO}_4$ has $n\\text{-factor} = 2$, so its normality is $0.2\\text{ N}$. $\\text{NaOH}$ has $n\\text{-factor} = 1$, so normality is $0.1\\text{ N}$. $N_1 V_1 = N_2 V_2 \\implies 0.2 \\times 20 = 0.1 \\times V_2 \\implies V_2 = 40\\text{ mL}$.",
    "Medium"
  );
  add(
    "A solution is prepared by adding $2\\text{ g}$ of substance A to $18\\text{ g}$ of water. What is the mass percent of the solute?",
    ["$10\\%$", "$11.1\\%$", "$9.1\\%$", "$8.5\\%$"],
    0,
    "Mass percent $= \\frac{\\text{mass of A}}{\\text{total mass}} \\times 100 = \\frac{2}{2 + 18} \\times 100 = \\frac{2}{20} \\times 100 = 10\\%$.",
    "Easy"
  );

  // 36-47
  add(
    "What is the concentration of nitrate ions ($\\text{NO}_3^-$) in a solution made by mixing $100\\text{ mL}$ of $0.1\\text{ M } \\text{AgNO}_3$ and $100\\text{ mL}$ of $0.1\\text{ M } \\text{Ca}(\\text{NO}_3)_2$?",
    ["$0.10\\text{ M}$", "$0.15\\text{ M}$", "$0.20\\text{ M}$", "$0.30\\text{ M}$"],
    1,
    "Moles of $\\text{NO}_3^-$ from $\\text{AgNO}_3 = 0.100 \\times 0.1 = 0.010\\text{ mol}$. Moles of $\\text{NO}_3^-$ from $\\text{Ca}(\\text{NO}_3)_2 = 0.100 \\times 0.1 \\times 2 = 0.020\\text{ mol}$. Total moles $= 0.030\\text{ mol}$. Total volume $= 200\\text{ mL} = 0.200\\text{ L}$. $[\\text{NO}_3^-] = 0.030 / 0.200 = 0.15\\text{ M}$.",
    "Hard"
  );
  add(
    "What is the molarity of a solution formed by mixing $300\\text{ mL}$ of $0.3\\text{ M } \\text{HCl}$ with $200\\text{ mL}$ of $0.2\\text{ M } \\text{HCl}$?",
    ["$0.26\\text{ M}$", "$0.25\\text{ M}$", "$0.28\\text{ M}$", "$0.50\\text{ M}$"],
    0,
    "$M_{\\text{final}} = \\frac{(300 \\times 0.3) + (200 \\times 0.2)}{500} = \\frac{90 + 40}{500} = \\frac{130}{500} = 0.26\\text{ M}$.",
    "Easy"
  );
  add(
    "A gas cylinder contains $5\\text{ moles}$ of oxygen and $15\\text{ moles}$ of nitrogen. What is the mole fraction of oxygen?",
    ["$0.20$", "$0.25$", "$0.33$", "$0.75$"],
    1,
    "Total moles $= 5 + 15 = 20\\text{ mol}$. Mole fraction of oxygen $= 5 / 20 = 0.25$.",
    "Easy"
  );
  add(
    "How many moles of $\\text{HCl}$ are present in $50\\text{ mL}$ of a $12\\text{ M}$ concentrated hydrochloric acid solution?",
    ["$0.60\\text{ mol}$", "$0.24\\text{ mol}$", "$0.12\\text{ mol}$", "$0.50\\text{ mol}$"],
    0,
    "Moles $= 12\\text{ mol/L} \\times 0.050\\text{ L} = 0.60\\text{ mol}$.",
    "Easy"
  );
  add(
    "A solution is $0.5\\text{ M}$ with respect to $\\text{H}_2\\text{SO}_4$. What is its concentration in $\\text{g/L}$?",
    ["$49\\text{ g/L}$", "$98\\text{ g/L}$", "$24.5\\text{ g/L}$", "$196\\text{ g/L}$"],
    0,
    "$\\text{Strength (g/L)} = \\text{Molarity} \\times \\text{Molar mass} = 0.5 \\times 98 = 49\\text{ g/L}$.",
    "Easy"
  );
  add(
    "Calculate the mole fraction of solvent in a $0.2\\text{ molal}$ aqueous solution.",
    ["$0.996$", "$0.004$", "$0.980$", "$0.950$"],
    0,
    "Moles of solute $= 0.2$. Moles of water $= 1000/18 = 55.55$. Total moles $= 55.75$. Mole fraction of solvent $= 55.55 / 55.75 \\approx 0.9964$.",
    "Medium"
  );
  add(
    "What is the formality of a solution containing $5.85\\text{ g}$ of $\\text{NaCl}$ in $1\\text{ L}$ of water? (Formula weight of $\\text{NaCl} = 58.5\\text{ g/mol}$)",
    ["$0.1\\text{ F}$", "$0.2\\text{ F}$", "$0.05\\text{ F}$", "$1.0\\text{ F}$"],
    0,
    "Formality $= \\frac{\\text{mass}/\\text{formula weight}}{V(\\text{in L})} = \\frac{5.85 / 58.5}{1} = 0.1\\text{ F}$.",
    "Easy"
  );
  add(
    "Which of the following expressions relates molarity ($M$) and molality ($m$) correctly? ($d = \\text{density in g/mL}, M_2 = \\text{molar mass of solute}$)",
    ["$m = \\frac{1000 M}{1000 d - M M_2}$", "$m = \\frac{1000 M}{1000 d + M M_2}$", "$m = \\frac{M}{d - M M_2}$", "$m = \\frac{1000 d}{M M_2}$"],
    0,
    "The standard interconversion formula is $m = \\frac{1000 M}{1000 d - M M_2}$, accounting for the mass of solvent in $1\\text{ L}$ of solution.",
    "Hard"
  );
  add(
    "If $100\\text{ mL}$ of $0.5\\text{ M } \\text{HCl}$ is mixed with $100\\text{ mL}$ of $0.5\\text{ M } \\text{NaOH}$, what will be the pH of the resulting solution at $25^\\circ\\text{C}$?",
    ["$7$", "$1$", "$14$", "$0$"],
    0,
    "Both acid and base are completely neutralized ($50\\text{ mmol}$ each). The resultant salt is $\\text{NaCl}$, a neutral salt of strong acid and strong base, having a pH of $7$ at $25^\\circ\\text{C}$.",
    "Easy"
  );
  add(
    "What is the percentage by volume of a solution made by mixing $50\\text{ mL}$ of methanol in $150\\text{ mL}$ of water (assuming volumes are additive)?",
    ["$25\\%$", "$33.3\\%$", "$20\\%$", "$50\\%$"],
    0,
    "$\\% (v/v) = \\frac{\\text{volume of solute}}{\\text{total volume}} \\times 100 = \\frac{50}{50 + 150} \\times 100 = \\frac{50}{200} \\times 100 = 25\\%$.",
    "Easy"
  );
  add(
    "What is the molarity of $\\text{SO}_4^{2-}$ ions in a $0.15\\text{ M}$ aqueous solution of $\\text{Al}_2(\\text{SO}_4)_3$?",
    ["$0.15\\text{ M}$", "$0.30\\text{ M}$", "$0.45\\text{ M}$", "$0.60\\text{ M}$"],
    2,
    "Each mole of $\\text{Al}_2(\\text{SO}_4)_3$ releases $3$ moles of $\\text{SO}_4^{2-}$ ions upon complete dissociation. $[\\text{SO}_4^{2-}] = 0.15 \\times 3 = 0.45\\text{ M}$.",
    "Easy"
  );
  add(
    "Assertion (A): One molal aqueous solution is always more concentrated than one molar aqueous solution of the same solute at room temperature.\nReason (R): In a one molal solution, one mole of solute is dissolved in $1000\\text{ g}$ of water, whereas in a one molar solution, the volume of solution is $1000\\text{ mL}$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "In $1\\text{ M}$ solution, total volume is $1000\\text{ mL}$, so the volume of water is less than $1000\\text{ mL}$ (mass of water $< 1000\\text{ g}$). Therefore, $1\\text{ M}$ has less than $1\\text{ kg}$ of water for $1\\text{ mol}$ solute, making $1\\text{ M} > 1\\text{ m}$ (or for density $= 1$, $1\\text{ m}$ has $1\\text{ mol}$ in $1\\text{ kg}$ solvent). Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );

  return q;
}

function getPercentageCompositionQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Percentage composition and limiting reagent", text, opts, ans, exp, diff, type));

  // 1-10
  add(
    "In the reaction $2\\text{Al} + 3\\text{Cl}_2 \\rightarrow 2\\text{AlCl}_3$, if $2.0\\text{ moles}$ of $\\text{Al}$ react with $2.0\\text{ moles}$ of $\\text{Cl}_2$, which is the limiting reagent?",
    ["$\\text{Al}$", "$\\text{Cl}_2$", "$\\text{AlCl}_3$", "Neither reactant is limiting"],
    1,
    "According to stoichiometry, $2\\text{ moles of Al}$ require $3\\text{ moles of Cl}_2$. Since only $2\\text{ moles of Cl}_2$ are available, chlorine ($\\text{Cl}_2$) is the limiting reagent.",
    "Easy"
  );
  add(
    "What is the maximum amount of $\\text{AlCl}_3$ in moles that can be formed from $2.0\\text{ moles}$ of $\\text{Al}$ and $2.0\\text{ moles}$ of $\\text{Cl}_2$?",
    ["$1.33\\text{ mol}$", "$2.00\\text{ mol}$", "$0.67\\text{ mol}$", "$3.00\\text{ mol}$"],
    0,
    "$\\text{Cl}_2$ is limiting. $3\\text{ moles of Cl}_2$ produce $2\\text{ moles of AlCl}_3$. Therefore, $2.0\\text{ moles of Cl}_2$ produce $2.0 \\times (2/3) = 1.33\\text{ moles of AlCl}_3$.",
    "Medium"
  );
  add(
    "When $10\\text{ g}$ of hydrogen react with $64\\text{ g}$ of oxygen to form water ($2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$), which reactant is in excess and by how much?",
    ["$\\text{H}_2$ by $2\\text{ g}$", "$\\text{H}_2$ by $6\\text{ g}$", "$\\text{O}_2$ by $16\\text{ g}$", "$\\text{O}_2$ by $32\\text{ g}$"],
    0,
    "Moles of $\\text{H}_2 = 10 / 2 = 5\\text{ mol}$. Moles of $\\text{O}_2 = 64 / 32 = 2\\text{ mol}$. $2\\text{ moles of O}_2$ require $4\\text{ moles of H}_2$. Oxygen is limiting. Excess $\\text{H}_2 = 5 - 4 = 1\\text{ mol} = 2\\text{ g}$.",
    "Medium"
  );
  add(
    "What is the percentage composition of oxygen in pure water ($\\text{H}_2\\text{O}$)? (Atomic masses: $\\text{H} = 1.008\\text{ u}, \\text{O} = 16.00\\text{ u}$)",
    ["$88.79\\%$", "$80.00\\%$", "$75.50\\%$", "$92.15\\%$"],
    0,
    "Molar mass of $\\text{H}_2\\text{O} = 2(1.008) + 16.00 = 18.016\\text{ g/mol}$. $\\%\\text{O} = (16.00 / 18.016) \\times 100 \\approx 88.79\\%$.",
    "Easy"
  );
  add(
    "If $20.0\\text{ g}$ of $\\text{CaCO}_3$ is treated with $20.0\\text{ g}$ of $\\text{HCl}$, what volume of $\\text{CO}_2$ is evolved at STP? (Molar masses: $\\text{CaCO}_3 = 100\\text{ g/mol}, \\text{HCl} = 36.5\\text{ g/mol}$)",
    ["$4.48\\text{ L}$", "$2.24\\text{ L}$", "$6.14\\text{ L}$", "$8.96\\text{ L}$"],
    0,
    "$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{CO}_2 + \\text{H}_2\\text{O}$. Moles of $\\text{CaCO}_3 = 20/100 = 0.20\\text{ mol}$. Moles of $\\text{HCl} = 20/36.5 \\approx 0.55\\text{ mol}$. Required HCl for $0.20\\text{ mol } \\text{CaCO}_3 = 0.40\\text{ mol}$. $\\text{CaCO}_3$ is limiting. Moles of $\\text{CO}_2 = 0.20\\text{ mol}$. Volume $= 0.20 \\times 22.4\\text{ L} = 4.48\\text{ L}$.",
    "Medium"
  );
  add(
    "In the Haber process: $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$, $28\\text{ g}$ of $\\text{N}_2$ reacts with $9\\text{ g}$ of $\\text{H}_2$. What mass of $\\text{NH}_3$ is theoretically produced?",
    ["$34\\text{ g}$", "$17\\text{ g}$", "$25\\text{ g}$", "$51\\text{ g}$"],
    0,
    "Moles of $\\text{N}_2 = 28/28 = 1.0\\text{ mol}$. Moles of $\\text{H}_2 = 9/2 = 4.5\\text{ mol}$. $1.0\\text{ mol } \\text{N}_2$ requires $3.0\\text{ mol } \\text{H}_2$. $\\text{N}_2$ is limiting. $1\\text{ mol of N}_2$ produces $2\\text{ moles of NH}_3 = 2 \\times 17\\text{ g} = 34\\text{ g}$.",
    "Medium"
  );
  add(
    "A reaction between $1.0\\text{ g}$ of magnesium and $0.5\\text{ g}$ of oxygen gas is carried out in a closed vessel. Which reactant is left unreacted and how much?",
    ["$0.25\\text{ g}$ of $\\text{Mg}$", "$0.50\\text{ g}$ of $\\text{Mg}$", "$0.20\\text{ g}$ of $\\text{O}_2$", "$0.10\\text{ g}$ of $\\text{O}_2$"],
    0,
    "$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$. $48\\text{ g}$ of Mg requires $32\\text{ g}$ of $\\text{O}_2$. For $0.5\\text{ g}$ of $\\text{O}_2$, required Mg $= 0.5 \\times (48/32) = 0.75\\text{ g}$. Since $1.0\\text{ g}$ of Mg was provided, Mg is in excess. Excess Mg $= 1.0 - 0.75 = 0.25\\text{ g}$.",
    "Hard"
  );
  add(
    "What is the percentage of calcium in pure calcium carbonate ($\\text{CaCO}_3$)?",
    ["$40\\%$", "$48\\%$", "$12\\%$", "$20\\%$"],
    0,
    "Molar mass of $\\text{CaCO}_3 = 100\\text{ g/mol}$. Mass of Ca $= 40\\text{ g}$. $\\%\\text{Ca} = (40 / 100) \\times 100 = 40\\%$.",
    "Easy"
  );
  add(
    "In a reaction, $5\\text{ moles}$ of $A$ and $8\\text{ moles}$ of $B$ react according to $3A + 2B \\rightarrow C$. The limiting reagent is:",
    ["A", "B", "C", "Both react completely"],
    0,
    "Mole/coefficient ratio: For A: $5 / 3 \\approx 1.67$. For B: $8 / 2 = 4.0$. Since $1.67 < 4.0$, reactant A has the smaller ratio and is the limiting reagent.",
    "Easy"
  );
  add(
    "Assertion (A): Limiting reagent is the reactant that is completely consumed first in a chemical reaction.\nReason (R): The amount of products formed is strictly determined and limited by the limiting reagent.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The limiting reagent runs out first, stopping further product formation, and therefore determines the maximum theoretical yield. Both are true and (R) correctly explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  // 11-20
  add(
    "What is the percentage of nitrogen in ammonium nitrate ($\\text{NH}_4\\text{NO}_3$, molar mass = $80\\text{ g/mol}$)?",
    ["$35\\%$", "$28\\%$", "$17.5\\%$", "$42\\%$"],
    0,
    "$\\text{NH}_4\\text{NO}_3$ contains $2$ nitrogen atoms. Mass of N $= 2 \\times 14 = 28\\text{ g}$. $\\%\\text{N} = (28 / 80) \\times 100 = 35\\%$.",
    "Easy"
  );
  add(
    "If $56\\text{ g}$ of $\\text{CO}$ reacts with $32\\text{ g}$ of $\\text{O}_2$ according to $2\\text{CO} + \\text{O}_2 \\rightarrow 2\\text{CO}_2$, what is the mass of $\\text{CO}_2$ formed?",
    ["$88\\text{ g}$", "$44\\text{ g}$", "$66\\text{ g}$", "$56\\text{ g}$"],
    0,
    "Moles of $\\text{CO} = 56 / 28 = 2\\text{ mol}$. Moles of $\\text{O}_2 = 32 / 32 = 1\\text{ mol}$. This matches the stoichiometric ratio $2:1$ exactly. Moles of $\\text{CO}_2$ formed $= 2\\text{ mol}$. Mass $= 2 \\times 44 = 88\\text{ g}$.",
    "Easy"
  );
  add(
    "A mixture of $2\\text{ moles}$ of $\\text{H}_2$ and $2\\text{ moles}$ of $\\text{O}_2$ is ignited. What mass of water is formed?",
    ["$36\\text{ g}$", "$72\\text{ g}$", "$18\\text{ g}$", "$54\\text{ g}$"],
    0,
    "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$. $2\\text{ moles of H}_2$ require $1\\text{ mole of O}_2$. $\\text{H}_2$ is limiting. Moles of $\\text{H}_2\\text{O}$ formed $= 2\\text{ mol}$. Mass $= 2 \\times 18 = 36\\text{ g}$.",
    "Easy"
  );
  add(
    "What is the percentage purity of a sample of $\\text{CaCO}_3$ if $10\\text{ g}$ of the sample produces $1.68\\text{ L}$ of $\\text{CO}_2$ at STP upon complete heating?",
    ["$75\\%$", "$80\\%$", "$85\\%$", "$70\\%$"],
    0,
    "Moles of $\\text{CO}_2 = 1.68 / 22.4 = 0.075\\text{ mol}$. Moles of pure $\\text{CaCO}_3 = 0.075\\text{ mol}$. Mass of pure $\\text{CaCO}_3 = 0.075 \\times 100 = 7.5\\text{ g}$. $\\%\\text{ purity} = (7.5 / 10) \\times 100 = 75\\%$.",
    "Hard"
  );
  add(
    "Equal masses of $\\text{SO}_2$ and $\\text{O}_2$ are reacted to form $\\text{SO}_3$ according to $2\\text{SO}_2 + \\text{O}_2 \\rightarrow 2\\text{SO}_3$. The limiting reagent is:",
    ["$\\text{SO}_2$", "$\\text{O}_2$", "$\\text{SO}_3$", "Both react completely"],
    0,
    "Let mass be $m$ grams. Moles of $\\text{SO}_2 = m / 64$. Moles of $\\text{O}_2 = m / 32$. For stoichiometric completion, moles of $\\text{SO}_2$ must be twice the moles of $\\text{O}_2$. Here, moles of $\\text{SO}_2$ are half the moles of $\\text{O}_2$. Hence, $\\text{SO}_2$ is the limiting reagent.",
    "Medium"
  );
  add(
    "What is the percentage of chlorine in bleaching powder ($\\text{CaOCl}_2$, molar mass = $127\\text{ g/mol}$)?",
    ["$55.9\\%$", "$45.0\\%$", "$28.0\\%$", "$35.5\\%$"],
    0,
    "Mass of chlorine in $\\text{CaOCl}_2 = 2 \\times 35.5 = 71\\text{ g}$. $\\%\\text{Cl} = (71 / 127) \\times 100 \\approx 55.9\\%$.",
    "Easy"
  );
  add(
    "When $4\\text{ g}$ of $\\text{H}_2$ reacts with $32\\text{ g}$ of $\\text{O}_2$ to form water, the percentage yield is $80\\%$. What mass of water is actually collected?",
    ["$28.8\\text{ g}$", "$36.0\\text{ g}$", "$18.0\\text{ g}$", "$14.4\\text{ g}$"],
    0,
    "Moles: $\\text{H}_2 = 4/2 = 2\\text{ mol}$; $\\text{O}_2 = 32/32 = 1\\text{ mol}$. Theoretical yield of $\\text{H}_2\\text{O} = 2\\text{ mol} = 36\\text{ g}$. Actual yield at $80\\% = 36 \\times 0.80 = 28.8\\text{ g}$.",
    "Medium"
  );
  add(
    "How many grams of urea ($\\text{NH}_2\\text{CONH}_2$) must be used to supply $14\\text{ g}$ of nitrogen?",
    ["$30\\text{ g}$", "$60\\text{ g}$", "$45\\text{ g}$", "$15\\text{ g}$"],
    0,
    "Molar mass of urea is $60\\text{ g/mol}$, which contains $28\\text{ g}$ of nitrogen. To provide $14\\text{ g}$ of nitrogen (half as much), we need $60 / 2 = 30\\text{ g}$ of urea.",
    "Easy"
  );
  add(
    "In the reaction: $P_4 + 5\\text{O}_2 \\rightarrow P_4\\text{O}_{10}$, $1.24\\text{ g}$ of phosphorus is reacted with $1.60\\text{ g}$ of oxygen. Which is the limiting reagent? (Atomic masses: $P = 31, O = 16$)",
    ["$P_4$", "$\\text{O}_2$", "$P_4\\text{O}_{10}$", "Neither"],
    1,
    "Molar mass of $P_4 = 124\\text{ g/mol}$. Moles of $P_4 = 1.24/124 = 0.01\\text{ mol}$. Moles of $\\text{O}_2 = 1.60/32 = 0.05\\text{ mol}$. Stoichiometric requirement for $0.01\\text{ mol } P_4$ is $5 \\times 0.01 = 0.05\\text{ mol } \\text{O}_2$. Both reactants are present in exact stoichiometric proportions.",
    "Medium"
  );
  add(
    "Assertion (A): In any chemical reaction, the reactant with the lowest initial mass is always the limiting reagent.\nReason (R): Limiting reagent is governed by the stoichiometry and molar ratios of the balanced reaction, not just the initial masses in grams.",
    ["(A) is false, but (R) is true", "Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false"],
    0,
    "A reactant may have a smaller mass but a much lower molar mass, giving more moles. The limiting reagent depends on the mole-to-coefficient ratio ($n_i / \\nu_i$), not grams. (A) is false, (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );

  // 21-35
  add(
    "What is the percentage composition of carbon in sodium bicarbonate ($\\text{NaHCO}_3$, molar mass = $84\\text{ g/mol}$)?",
    ["$14.29\\%$", "$27.38\\%$", "$57.14\\%$", "$1.19\\%$"],
    0,
    "Mass of C in $1\\text{ mol } \\text{NaHCO}_3 = 12\\text{ g}$. $\\%\\text{C} = (12 / 84) \\times 100 \\approx 14.285\\% \\approx 14.29\\%$.",
    "Easy"
  );
  add(
    "If $3.0\\text{ moles}$ of hydrogen and $2.0\\text{ moles}$ of oxygen are sparked together, how many moles of water and unreacted gas remain?",
    ["$3.0\\text{ mol } \\text{H}_2\\text{O}, 0.5\\text{ mol } \\text{O}_2$", "$2.0\\text{ mol } \\text{H}_2\\text{O}, 1.0\\text{ mol } \\text{H}_2$", "$4.0\\text{ mol } \\text{H}_2\\text{O}, 0\\text{ mol unreacted}$", "$3.0\\text{ mol } \\text{H}_2\\text{O}, 1.0\\text{ mol } \\text{O}_2$"],
    0,
    "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$. $3\\text{ mol of H}_2$ requires $1.5\\text{ mol of O}_2$. $\\text{H}_2$ is limiting. $\\text{H}_2\\text{O}$ formed $= 3.0\\text{ mol}$. Unreacted $\\text{O}_2 = 2.0 - 1.5 = 0.5\\text{ mol}$.",
    "Medium"
  );
  add(
    "What is the mass percent of water of crystallization in Epsom salt ($\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$)? (Molar mass = $246.4\\text{ g/mol}$)",
    ["$51.2\\%$", "$48.8\\%$", "$36.5\\%$", "$60.0\\%$"],
    0,
    "Mass of $7\\text{H}_2\\text{O} = 7 \\times 18 = 126\\text{ g}$. $\\%\\text{H}_2\\text{O} = (126 / 246.4) \\times 100 \\approx 51.14\\%$.",
    "Easy"
  );
  add(
    "In the reaction $\\text{A} + 2\\text{B} \\rightarrow \\text{AB}_2$, $5\\text{ moles of A}$ and $8\\text{ moles of B}$ are reacted. How many moles of $\\text{AB}_2$ are formed?",
    ["$4\\text{ mol}$", "$5\\text{ mol}$", "$8\\text{ mol}$", "$2.5\\text{ mol}$"],
    0,
    "$8\\text{ moles of B}$ require $4\\text{ moles of A}$. B is the limiting reagent and determines the yield: $8 / 2 = 4\\text{ moles of AB}_2$.",
    "Easy"
  );
  add(
    "A commercial fertilizer contains diammonium phosphate, $(\\text{NH}_4)_2\\text{HPO}_4$ (molar mass = $132\\text{ g/mol}$). What is the percentage of phosphorus in this fertilizer?",
    ["$23.48\\%$", "$18.20\\%$", "$31.00\\%$", "$28.50\\%$"],
    0,
    "Mass of P $= 31\\text{ g}$. $\\%\\text{P} = (31 / 132) \\times 100 \\approx 23.48\\%$.",
    "Easy"
  );
  add(
    "When $12\\text{ g}$ of carbon reacts with $16\\text{ g}$ of oxygen, carbon monoxide is formed: $2\\text{C} + \\text{O}_2 \\rightarrow 2\\text{CO}$. What is the mass of $\\text{CO}$ produced?",
    ["$28\\text{ g}$", "$14\\text{ g}$", "$44\\text{ g}$", "$56\\text{ g}$"],
    0,
    "Moles of C $= 12/12 = 1.0\\text{ mol}$. Moles of $\\text{O}_2 = 16/32 = 0.5\\text{ mol}$. By stoichiometry, $1.0\\text{ mol C}$ reacts with $0.5\\text{ mol O}_2$ to give $1.0\\text{ mol CO} = 28\\text{ g}$.",
    "Easy"
  );
  add(
    "What is the percentage of nitrogen in potassium nitrate ($\\text{KNO}_3$, molar mass = $101.1\\text{ g/mol}$)?",
    ["$13.85\\%$", "$28.00\\%$", "$38.67\\%$", "$17.50\\%$"],
    0,
    "$\\%\\text{N} = (14.0 / 101.1) \\times 100 \\approx 13.85\\%$.",
    "Easy"
  );
  add(
    "A mixture of $100\\text{ g}$ of $\\text{Fe}$ and $100\\text{ g}$ of $\\text{S}$ is heated to form $\\text{FeS}$ ($\\text{Fe} + \\text{S} \\rightarrow \\text{FeS}$). What mass of $\\text{FeS}$ is formed? (Atomic masses: $\\text{Fe}=56, \\text{S}=32$)",
    ["$157.1\\text{ g}$", "$200.0\\text{ g}$", "$88.0\\text{ g}$", "$120.5\\text{ g}$"],
    0,
    "Moles: $\\text{Fe} = 100/56 \\approx 1.786\\text{ mol}$; $\\text{S} = 100/32 = 3.125\\text{ mol}$. $\\text{Fe}$ is limiting. Moles of $\\text{FeS} = 1.786\\text{ mol}$. Mass of $\\text{FeS} = 1.786 \\times 88 \\approx 157.14\\text{ g}$.",
    "Medium"
  );
  add(
    "What is the mass percentage of oxygen in glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$)?",
    ["$53.33\\%$", "$40.00\\%$", "$6.67\\%$", "$48.00\\%$"],
    0,
    "Mass of O in glucose $= 6 \\times 16 = 96\\text{ g}$. Total molar mass $= 180\\text{ g/mol}$. $\\%\\text{O} = (96 / 180) \\times 100 = 53.33\\%$.",
    "Easy"
  );
  add(
    "Assertion (A): For the reaction $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, if $2\\text{ g of H}_2$ and $16\\text{ g of O}_2$ are taken, neither reactant remains in excess.\nReason (R): $2\\text{ g of H}_2$ is $1\\text{ mole}$ and $16\\text{ g of O}_2$ is $0.5\\text{ mole}$, which exactly corresponds to the $2:1$ stoichiometric molar ratio.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Moles of $\\text{H}_2 = 1.0\\text{ mol}$ and moles of $\\text{O}_2 = 0.5\\text{ mol}$. The ratio is $1.0 : 0.5 = 2 : 1$, exactly matching the balanced equation. Neither reactant is in excess. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "What is the theoretical yield of $\\text{CO}_2$ produced by burning $32\\text{ g}$ of methane in excess oxygen?",
    ["$88\\text{ g}$", "$44\\text{ g}$", "$64\\text{ g}$", "$132\\text{ g}$"],
    0,
    "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$. Moles of $\\text{CH}_4 = 32 / 16 = 2\\text{ mol}$. $2\\text{ moles of CH}_4$ produce $2\\text{ moles of CO}_2 = 2 \\times 44 = 88\\text{ g}$.",
    "Easy"
  );
  add(
    "What is the percentage of sulfur in Mohr's salt, $\\text{FeSO}_4 \\cdot (\\text{NH}_4)_2\\text{SO}_4 \\cdot 6\\text{H}_2\\text{O}$ (molar mass = $392\\text{ g/mol}$)?",
    ["$16.33\\%$", "$8.16\\%$", "$24.50\\%$", "$12.25\\%$"],
    0,
    "Mohr's salt has $2$ sulfate groups ($2$ sulfur atoms). Mass of S $= 2 \\times 32 = 64\\text{ g}$. $\\%\\text{S} = (64 / 392) \\times 100 \\approx 16.33\\%$.",
    "Medium"
  );
  add(
    "When $2.16\\text{ g}$ of silver is reacted with sulfur, $2.48\\text{ g}$ of silver sulfide ($\\text{Ag}_2\\text{S}$) is obtained. What is the mass of sulfur combined? (Atomic masses: $\\text{Ag}=108, \\text{S}=32$)",
    ["$0.32\\text{ g}$", "$0.64\\text{ g}$", "$0.16\\text{ g}$", "$0.48\\text{ g}$"],
    0,
    "By conservation of mass, mass of sulfur $= 2.48 - 2.16 = 0.32\\text{ g}$.",
    "Easy"
  );
  add(
    "In the production of iron in a blast furnace: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$. What mass of $\\text{CO}$ is required to completely reduce $160\\text{ g}$ of $\\text{Fe}_2\\text{O}_3$?",
    ["$84\\text{ g}$", "$28\\text{ g}$", "$56\\text{ g}$", "$112\\text{ g}$"],
    0,
    "Molar mass of $\\text{Fe}_2\\text{O}_3 = 160\\text{ g/mol} = 1\\text{ mol}$. Reduction of $1\\text{ mol } \\text{Fe}_2\\text{O}_3$ requires $3\\text{ moles of CO} = 3 \\times 28 = 84\\text{ g}$.",
    "Easy"
  );
  add(
    "What is the mass percentage of nitrogen in glycine ($\\text{H}_2\\text{NCH}_2\\text{COOH}$, molar mass = $75\\text{ g/mol}$)?",
    ["$18.67\\%$", "$28.00\\%$", "$14.00\\%$", "$21.33\\%$"],
    0,
    "Mass of N $= 14\\text{ g}$. $\\%\\text{N} = (14 / 75) \\times 100 \\approx 18.67\\%$.",
    "Easy"
  );

  // 36-47
  add(
    "In the reaction $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$, if $12.25\\text{ g}$ of $\\text{KClO}_3$ (molar mass = $122.5\\text{ g/mol}$) is heated, what volume of $\\text{O}_2$ is produced at STP?",
    ["$3.36\\text{ L}$", "$2.24\\text{ L}$", "$1.12\\text{ L}$", "$4.48\\text{ L}$"],
    0,
    "Moles of $\\text{KClO}_3 = 12.25 / 122.5 = 0.1\\text{ mol}$. Moles of $\\text{O}_2 = 0.1 \\times (3/2) = 0.15\\text{ mol}$. Volume at STP $= 0.15 \\times 22.4 = 3.36\\text{ L}$.",
    "Medium"
  );
  add(
    "What is the percentage of carbon in sucrose ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$, molar mass = $342\\text{ g/mol}$)?",
    ["$42.1\\%$", "$36.8\\%$", "$45.5\\%$", "$50.0\\%$"],
    0,
    "Mass of carbon $= 12 \\times 12 = 144\\text{ g}$. $\\%\\text{C} = (144 / 342) \\times 100 \\approx 42.11\\%$.",
    "Easy"
  );
  add(
    "If $5\\text{ g}$ of $\\text{H}_2$ reacts with $32\\text{ g}$ of $\\text{O}_2$, which reactant is limiting and what is the maximum mass of $\\text{H}_2\\text{O}$ that can be formed?",
    ["$\\text{O}_2$ is limiting, $36\\text{ g } \\text{H}_2\\text{O}$", "$\\text{H}_2$ is limiting, $45\\text{ g } \\text{H}_2\\text{O}$", "$\\text{O}_2$ is limiting, $18\\text{ g } \\text{H}_2\\text{O}$", "Neither is limiting, $37\\text{ g } \\text{H}_2\\text{O}$"],
    0,
    "Moles of $\\text{H}_2 = 5/2 = 2.5\\text{ mol}$. Moles of $\\text{O}_2 = 32/32 = 1.0\\text{ mol}$. Required $\\text{H}_2 = 2.0\\text{ mol}$. $\\text{O}_2$ is limiting. Moles of $\\text{H}_2\\text{O} = 2 \\times 1.0 = 2.0\\text{ mol} = 36\\text{ g}$.",
    "Medium"
  );
  add(
    "What is the percentage of water in crystalline copper sulfate pentahydrate ($\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$, molar mass = $249.5\\text{ g/mol}$)?",
    ["$36.07\\%$", "$25.40\\%$", "$42.50\\%$", "$18.00\\%$"],
    0,
    "Mass of $5\\text{H}_2\\text{O} = 5 \\times 18 = 90\\text{ g}$. $\\%\\text{water} = (90 / 249.5) \\times 100 \\approx 36.07\\%$.",
    "Easy"
  );
  add(
    "A reaction vessel contains $4.0\\text{ moles of } \\text{NH}_3$ and $5.0\\text{ moles of } \\text{O}_2$ for the reaction $4\\text{NH}_3 + 5\\text{O}_2 \\rightarrow 4\\text{NO} + 6\\text{H}_2\\text{O}$. How many moles of $\\text{NO}$ will be produced?",
    ["$4.0\\text{ mol}$", "$5.0\\text{ mol}$", "$3.2\\text{ mol}$", "$4.8\\text{ mol}$"],
    0,
    "The mole ratio of $\\text{NH}_3 : \\text{O}_2$ provided is $4.0 : 5.0$, which exactly matches the stoichiometric requirement of the balanced reaction. Thus, exactly $4.0\\text{ moles}$ of $\\text{NO}$ will be formed.",
    "Easy"
  );
  add(
    "What is the percentage of nitrogen in potassium cyanide ($\\text{KCN}$, molar mass = $65.1\\text{ g/mol}$)?",
    ["$21.5\\%$", "$14.0\\%$", "$28.5\\%$", "$33.3\\%$"],
    0,
    "$\\%\\text{N} = (14.0 / 65.1) \\times 100 \\approx 21.50\\%$.",
    "Easy"
  );
  add(
    "If $10.0\\text{ g}$ of carbon is burned with $16.0\\text{ g}$ of oxygen to form $\\text{CO}_2$, what is the mass of $\\text{CO}_2$ formed?",
    ["$22.0\\text{ g}$", "$44.0\\text{ g}$", "$14.0\\text{ g}$", "$26.0\\text{ g}$"],
    0,
    "$\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$. Moles of C $= 10/12 = 0.833\\text{ mol}$. Moles of $\\text{O}_2 = 16/32 = 0.500\\text{ mol}$. $\\text{O}_2$ is limiting. Moles of $\\text{CO}_2 = 0.500\\text{ mol}$. Mass $= 0.500 \\times 44 = 22.0\\text{ g}$.",
    "Medium"
  );
  add(
    "What is the percentage by mass of chromium in potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$, molar mass = $294.2\\text{ g/mol}$)? (Atomic mass of $\\text{Cr} = 52.0$)",
    ["$35.35\\%$", "$26.50\\%$", "$17.68\\%$", "$42.10\\%$"],
    0,
    "Mass of Cr $= 2 \\times 52 = 104\\text{ g}$. $\\%\\text{Cr} = (104 / 294.2) \\times 100 \\approx 35.35\\%$.",
    "Easy"
  );
  add(
    "When $6.0\\text{ g}$ of carbon reacts with $32.0\\text{ g}$ of sulfur to form carbon disulfide ($\\text{C} + 2\\text{S} \\rightarrow \\text{CS}_2$), how many grams of $\\text{CS}_2$ can be formed? (Atomic mass of $\\text{S} = 32$)",
    ["$38.0\\text{ g}$", "$76.0\\text{ g}$", "$19.0\\text{ g}$", "$44.0\\text{ g}$"],
    0,
    "Moles of C $= 6/12 = 0.5\\text{ mol}$. Moles of S $= 32/32 = 1.0\\text{ mol}$. By stoichiometry, $0.5\\text{ mol C}$ reacts with $1.0\\text{ mol S}$ ($1:2$ ratio) to form $0.5\\text{ mol CS}_2$. Molar mass of $\\text{CS}_2 = 12 + 64 = 76\\text{ g/mol}$. Mass $= 0.5 \\times 76 = 38.0\\text{ g}$.",
    "Medium"
  );
  add(
    "What is the percentage of sodium in caustic soda ($\\text{NaOH}$, molar mass = $40\\text{ g/mol}$)?",
    ["$57.5\\%$", "$50.0\\%$", "$40.0\\%$", "$62.5\\%$"],
    0,
    "$\\%\\text{Na} = (23 / 40) \\times 100 = 57.5\\%$.",
    "Easy"
  );
  add(
    "A mixture containing $10\\text{ g}$ of $\\text{H}_2$ and $10\\text{ g}$ of $\\text{O}_2$ is ignited. What mass of water is formed?",
    ["$11.25\\text{ g}$", "$22.50\\text{ g}$", "$18.00\\text{ g}$", "$10.00\\text{ g}$"],
    0,
    "Moles: $\\text{H}_2 = 5.0\\text{ mol}$; $\\text{O}_2 = 10/32 = 0.3125\\text{ mol}$. $\\text{O}_2$ is limiting. Moles of $\\text{H}_2\\text{O} = 2 \\times 0.3125 = 0.625\\text{ mol}$. Mass of $\\text{H}_2\\text{O} = 0.625 \\times 18 = 11.25\\text{ g}$.",
    "Medium"
  );
  add(
    "Assertion (A): Percentage composition of an element in a compound is independent of the amount or mass of the compound taken.\nReason (R): According to the Law of Definite Proportions, a given chemical compound always contains its component elements in a fixed ratio by mass.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Proust's Law of Definite Proportions dictates that a pure compound always has identical mass percentages regardless of sample source or size. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getConcentrationTermsQuestions,
  getPercentageCompositionQuestions
};
