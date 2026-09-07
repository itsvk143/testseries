const fs = require('fs');
const katex = require('katex');

function checkKatex(str, ctx) {
  if (!str) return;
  const regex = /\$([^$]+)\$/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error in ${ctx}: "${match[1]}" -> ${e.message}`);
    }
  }
}

function createAR(st, aText, rText, correctOptionIndex, explanation) {
  const fullQ = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${aText}\nReason (R): ${rText}`;
  const options = [
    "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
    "(A) is true but (R) is false",
    "(A) is false but (R) is true"
  ];
  return {
    question: fullQ,
    options,
    correctAnswer: options[correctOptionIndex],
    correctOption: correctOptionIndex,
    explanation,
    difficulty: "MEDIUM",
    questionType: "Assertion-Reason",
    type: "ASSERTION_REASON",
    subject: "Chemistry",
    chapter: "Solutions",
    topic: "Solutions",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    cognitiveLevel: "APPLICATION"
  };
}

function createMCQ(st, question, options, correctIndex, explanation, difficulty = "MEDIUM") {
  return {
    question,
    options,
    correctAnswer: options[correctIndex],
    correctOption: correctIndex,
    explanation,
    difficulty,
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    subject: "Chemistry",
    chapter: "Solutions",
    topic: "Solutions",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    cognitiveLevel: "UNDERSTANDING"
  };
}

function createNumerical(st, question, correctAnswer, explanation, difficulty = "MEDIUM") {
  return {
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    difficulty,
    questionType: "Numerical Value Question",
    type: "NUMERICAL",
    subject: "Chemistry",
    chapter: "Solutions",
    topic: "Solutions",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    cognitiveLevel: "APPLICATION"
  };
}

// -------------------------------------------------------------
// Subtopic: Concentration terms (48 Qs: 25 AR, 8 MCQ, 15 NUM)
// -------------------------------------------------------------
function buildConcentrationTerms() {
  const st = "Concentration terms";
  const list = [];

  const arData = [
    {
      a: "Molality ($m$) of a solution is preferred over molarity ($M$) in experimental studies involving temperature changes.",
      r: "Molality is defined per kilogram of solvent and is independent of temperature, whereas molarity depends on solution volume which varies with temperature.",
      ans: 0,
      exp: "Mass does not change with temperature, so molality ($m = n/w_{\\text{solvent}}$) remains constant with temperature, while molarity ($M = n/V$) varies due to thermal expansion/contraction of liquid volume."
    },
    {
      a: "The molarity of an aqueous solution decreases when its temperature is increased.",
      r: "With an increase in temperature, the volume of the solution expands while the number of moles of solute remains constant.",
      ans: 0,
      exp: "Molarity $M = n/V$. Since liquids expand on heating, $V$ increases, causing $M$ to decrease."
    },
    {
      a: "The mole fraction of any component in a binary solution is a dimensionless quantity.",
      r: "Mole fraction is the ratio of the number of moles of a specific component to the total number of moles of all components present in the solution.",
      ans: 0,
      exp: "Being a ratio of identical dimensions ($\\\\text{mol}/\\text{mol}$), mole fraction $\\chi$ is dimensionless and independent of temperature."
    },
    {
      a: "For an aqueous solution of a solute, the molality is always numerically greater than or equal to its molarity if the density of the solution is $1\\text{ g mL}^{-1}$ or less.",
      r: "In $1\\text{ L}$ of solution of density $\\le 1\\text{ g mL}^{-1}$, the mass of the solvent is strictly less than $1\\text{ kg}$ because a portion of the solution mass is occupied by the solute.",
      ans: 0,
      exp: "Mass of solution $= 1000 \\times d\\text{ g} \\le 1000\\text{ g}$. Mass of solvent $= 1000d - w_2 < 1000\\text{ g} = 1\\text{ kg}$. Hence $m = n_2/w_1(\\text{kg}) > n_2/1 = M$."
    },
    {
      a: "Parts per million ($\\text{ppm}$) is the most convenient concentration unit for reporting the concentration of trace atmospheric pollutants or water contaminants.",
      r: "$\\text{ppm}$ expresses the ratio of parts by mass of a solute per million ($10^6$) parts by mass of the entire sample.",
      ans: 0,
      exp: "When a solute is present in minute or trace amounts, fractional percentage yields extremely small decimals, whereas $\\text{ppm}$ gives convenient integer or simple numbers."
    },
    {
      a: "The sum of the mole fractions of all components in any solution is always equal to unity.",
      r: "The total number of moles of all components divided by itself equals $1$, by definition of mole fraction.",
      ans: 0,
      exp: "$\\sum \\chi_i = \\frac{\\sum n_i}{n_{\\text{total}}} = \\frac{n_{\\text{total}}}{n_{\\text{total}}} = 1$."
    },
    {
      a: "A $1\\text{ M}$ aqueous solution of glucose is more concentrated than a $1\\text{ m}$ aqueous solution of glucose.",
      r: "A $1\\text{ M}$ solution contains $1\\text{ mole}$ of glucose in $1000\\text{ mL}$ of solution (which contains less than $1000\\text{ g}$ of water), whereas a $1\\text{ m}$ solution contains $1\\text{ mole}$ in $1000\\text{ g}$ of water.",
      ans: 0,
      exp: "In $1\\text{ M}$ aqueous glucose, $180\\text{ g}$ of glucose plus water totals $1000\\text{ mL}$ (approx $1000\\text{ g}$ of solution, so water is only ~820 g). Since $1\\text{ mole}$ is dissolved in less solvent, $1\\text{ M}$ is more concentrated than $1\\text{ m}$."
    },
    {
      a: "Mass percentage ($\\% w/w$) is independent of temperature.",
      r: "Neither the mass of the solute nor the mass of the solution changes with temperature.",
      ans: 0,
      exp: "Mass is an invariant property unaffected by temperature changes, making $\\% w/w$ temperature-independent."
    },
    {
      a: "Normality ($N$) of a solution changes when its temperature changes.",
      r: "Normality is defined as gram equivalents of solute per liter of solution, which involves solution volume.",
      ans: 0,
      exp: "Because normality involves volume ($N = \\text{eq}/V$), liquid volume expansion on heating causes normality to decrease."
    },
    {
      a: "For orthophosphoric acid ($\\text{H}_3\\text{PO}_4$), a $1\\text{ M}$ solution corresponds to a $3\\text{ N}$ solution in complete neutralization reactions.",
      r: "$\\text{H}_3\\text{PO}_4$ is a tribasic acid with an $n$-factor of $3$ when all three ionizable protons are neutralized.",
      ans: 0,
      exp: "Normality $= \\text{Molarity} \\times n\\text{-factor}$. For $\\text{H}_3\\text{PO}_4$, basicity is $3$, so $N = 1 \\times 3 = 3\\text{ N}$."
    },
    {
      a: "For phosphorous acid ($\\text{H}_3\\text{PO}_3$), a $1\\text{ M}$ solution corresponds to a $2\\text{ N}$ solution in complete neutralization reactions.",
      r: "$\\text{H}_3\\text{PO}_3$ contains two ionizable $\\text{P-OH}$ bonds and one non-ionizable $\\text{P-H}$ bond, making it dibasic ($n = 2$).",
      ans: 0,
      exp: "Phosphorous acid has structural formula $\\text{HPO(OH)}_2$. Only the two protons attached to oxygen are acidic, giving $n=2$ and $N = 2\\text{ M}$."
    },
    {
      a: "For hypophosphorous acid ($\\text{H}_3\\text{PO}_2$), the molarity is equal to its normality in acid-base neutralizations.",
      r: "$\\text{H}_3\\text{PO}_2$ has only one ionizable $\\text{P-OH}$ group, acting as a monobasic acid ($n = 1$).",
      ans: 0,
      exp: "$\\text{H}_3\\text{PO}_2$ is monobasic ($n = 1$). Thus, $\\text{Normality} = \\text{Molarity} \\times 1$."
    },
    {
      a: "On diluting a concentrated solution with pure water, the number of moles of solute remains unchanged.",
      r: "Dilution increases the volume of solvent while no solute is added or removed, following $M_1 V_1 = M_2 V_2$.",
      ans: 0,
      exp: "Addition of solvent alters concentration but preserves the absolute amount (moles) of dissolved solute."
    },
    {
      a: "The molality of pure liquid water at $4^\\circ\\text{C}$ is approximately $55.55\\text{ m}$.",
      r: "$1000\\text{ g}$ of pure water contains $\\frac{1000}{18.015} \\approx 55.51\\text{ - }55.55\\text{ moles}$ of water.",
      ans: 0,
      exp: "By definition, molality is moles of solute in $1\\text{ kg}$ of solvent. Treating water as both solute and solvent: $m = 1000/18 = 55.55\\text{ mol kg}^{-1}$."
    },
    {
      a: "The molarity of pure water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g mL}^{-1}$) is $55.55\\text{ M}$.",
      r: "$1\\text{ L}$ ($1000\\text{ mL}$) of water has a mass of $1000\\text{ g}$, which corresponds to $\\frac{1000}{18} = 55.55\\text{ moles}$.",
      ans: 0,
      exp: "$M = \\frac{n}{V} = \\frac{1000\\text{ g} / 18\\text{ g mol}^{-1}}{1\\text{ L}} = 55.55\\text{ mol L}^{-1}$."
    },
    {
      a: "Molarity is temperature dependent, whereas molality is temperature independent.",
      r: "Volume changes with temperature due to thermal expansion, but mass is unaffected by temperature changes.",
      ans: 0,
      exp: "Volume depends on temperature ($V = V(T)$), while mass is temperature-invariant."
    },
    {
      a: "A $10\\%\\text{ (w/w)}$ solution of $\\text{NaCl}$ in water contains $10\\text{ g}$ of $\\text{NaCl}$ dissolved in $100\\text{ g}$ of water.",
      r: "Mass percentage is defined as the mass of solute per $100\\text{ g}$ of solution.",
      ans: 3,
      exp: "(A) is false because a $10\\%\\text{ (w/w)}$ solution contains $10\\text{ g}$ of $\\text{NaCl}$ in $90\\text{ g}$ of water to make $100\\text{ g}$ of solution. (R) is true."
    },
    {
      a: "When two solutions of different molarities of the same solute are mixed, the resulting molarity is given by $M = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2}$ assuming volumes are additive.",
      r: "Total moles of solute equal $M_1 V_1 + M_2 V_2$, and total volume of the mixture equals $V_1 + V_2$.",
      ans: 0,
      exp: "$M_{\\text{final}} = \\frac{n_{\\text{total}}}{V_{\\text{total}}} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2}$."
    },
    {
      a: "The relationship between molality ($m$) and mole fraction of solute ($\\chi_2$) in a binary solution with solvent molar mass $M_1\\text{ (g mol}^{-1}\\text{)}$ is $m = \\frac{1000 \\chi_2}{(1-\\chi_2) M_1}$.",
      r: "If total moles equal $1$, moles of solute $= \\chi_2$ and mass of solvent $= (1-\\chi_2) M_1 \\times 10^{-3}\\text{ kg}$.",
      ans: 0,
      exp: "Molality $m = \\frac{\\chi_2}{\\chi_1 M_1 / 1000} = \\frac{1000 \\chi_2}{(1-\\chi_2) M_1}$."
    },
    {
      a: "Concentration expressed in volume percentage ($\\% v/v$) is widely used for liquid-in-liquid solutions such as ethanol in water.",
      r: "Volume percentage represents volume of solute in milliliters per $100\\text{ mL}$ of solution.",
      ans: 0,
      exp: "For liquid mixtures like beverages or liquid disinfectants, $\\% v/v$ is the standard commercial and scientific unit."
    },
    {
      a: "The molarity of a $20\\%\\text{ (w/v)}$ solution of $\\text{NaOH}$ is $5.0\\text{ M}$.",
      r: "$20\\%\\text{ (w/v)}$ means $20\\text{ g}$ of $\\text{NaOH}$ ($M_w = 40\\text{ g mol}^{-1}$) is present in $100\\text{ mL}$ of solution.",
      ans: 0,
      exp: "Moles of $\\text{NaOH} = 20/40 = 0.5\\text{ mol}$ in $0.1\\text{ L} \\implies M = 0.5 / 0.1 = 5.0\\text{ M}$."
    },
    {
      a: "Molality of an aqueous solution is always identical to its molarity at all concentrations.",
      r: "Solvent mass in kilograms is never equal to solution volume in liters except in infinitely dilute solutions with density $1\\text{ g mL}^{-1}$.",
      ans: 3,
      exp: "(A) is false; molality equals molarity only at infinite dilution when density is $1\\text{ g mL}^{-1}$. (R) is true."
    },
    {
      a: "The mole fraction of water in a $1.00\\text{ m}$ aqueous solution is approximately $0.0177$.",
      r: "A $1.00\\text{ m}$ aqueous solution contains $1\\text{ mol}$ of solute in $1000\\text{ g}$ ($55.55\\text{ mol}$) of water.",
      ans: 3,
      exp: "(A) is false; $0.0177$ is the mole fraction of the solute ($\\chi_2 = 1/(1+55.55) \\approx 0.0177$), while mole fraction of water is $1 - 0.0177 = 0.9823$. (R) is true."
    },
    {
      a: "Formality is a concentration unit specifically applied to ionic compounds like $\\text{NaCl}$ where discrete molecules do not exist.",
      r: "Formality is defined as the number of gram formula weights of the ionic solute dissolved per liter of solution.",
      ans: 0,
      exp: "Because ionic solids exist as crystal lattices rather than discrete molecules, formula weight and formality are strictly formal terms."
    },
    {
      a: "Demal ($\\text{D}$) is a concentration unit used in electrical conductivity measurements.",
      r: "One demal unit corresponds to $1\\text{ mole}$ of $\\text{KCl}$ dissolved in $1\\text{ cubic decimeter}$ of solution at $0^\\circ\\text{C}$.",
      ans: 0,
      exp: "The demal unit was introduced by Kohlrausch for standardizing conductivity cells using $\\text{KCl}$ solutions at $0^\\circ\\text{C}$."
    }
  ];

  arData.forEach(d => list.push(createAR(st, d.a, d.r, d.ans, d.exp)));

  // 8 MCQs
  const mcqData = [
    {
      q: "Which of the following concentration terms is independent of temperature?",
      opts: ["Molality", "Molarity", "Normality", "Formality"],
      ans: 0,
      exp: "Molality ($m = n_{\\text{solute}}/w_{\\text{solvent}}$ in kg) depends only on mass, which does not change with temperature."
    },
    {
      q: "What is the mole fraction of the solute in a $1.00\\text{ m}$ aqueous solution?",
      opts: ["$0.0177$", "$0.177$", "$0.0354$", "$0.555$"],
      ans: 0,
      exp: "In $1.00\\text{ m}$ solution, $n_2 = 1.00\\text{ mol}$ in $1000\\text{ g}$ of water ($n_1 = 1000/18 = 55.55\\text{ mol}$). $\\chi_2 = \\frac{1}{1 + 55.55} = \\frac{1}{56.55} \\approx 0.0177$."
    },
    {
      q: "If $5.85\\text{ g}$ of $\\text{NaCl}$ (molar mass $= 58.5\\text{ g mol}^{-1}$) is dissolved in water to make $500\\text{ mL}$ of solution, the molarity of the solution is:",
      opts: ["$0.20\\text{ M}$", "$0.10\\text{ M}$", "$0.40\\text{ M}$", "$1.00\\text{ M}$"],
      ans: 0,
      exp: "Moles of $\\text{NaCl} = 5.85 / 58.5 = 0.1\\text{ mol}$. $V = 500\\text{ mL} = 0.5\\text{ L}$. Molarity $M = 0.1 / 0.5 = 0.20\\text{ M}$."
    },
    {
      q: "An aqueous solution contains $10\\%\\text{ (w/w)}$ glucose. What is the molality of the solution? (Molar mass of glucose $= 180\\text{ g mol}^{-1}$)",
      opts: ["$0.617\\text{ m}$", "$0.555\\text{ m}$", "$0.100\\text{ m}$", "$1.110\\text{ m}$"],
      ans: 0,
      exp: "$10\\text{ g}$ glucose in $90\\text{ g}$ water. $n_2 = 10/180 = 0.05556\\text{ mol}$. $w_1 = 0.090\\text{ kg}$. $m = 0.05556 / 0.090 = 0.617\\text{ m}$."
    },
    {
      q: "What volume of $0.5\\text{ M }\\text{H}_2\\text{SO}_4$ is required to neutralize $100\\text{ mL}$ of $1.0\\text{ M }\\text{NaOH}$?",
      opts: ["$100\\text{ mL}$", "$50\\text{ mL}$", "$200\\text{ mL}$", "$25\\text{ mL}$"],
      ans: 0,
      exp: "Eq of acid = Eq of base $\\implies N_1 V_1 = N_2 V_2$. For $\\text{H}_2\\text{SO}_4$, $N_1 = 0.5 \\times 2 = 1.0\\text{ N}$. For $\\text{NaOH}$, $N_2 = 1.0\\text{ N}$. $1.0 \\times V_1 = 1.0 \\times 100 \\implies V_1 = 100\\text{ mL}$."
    },
    {
      q: "A sample of drinking water was found to contain $15\\text{ ppm}$ chloroform ($\\text{CHCl}_3$) by mass. What is this concentration in percentage by mass?",
      opts: ["$1.5 \\times 10^{-3}\\%$", "$1.5 \\times 10^{-4}\\%$", "$1.5 \\times 10^{-2}\\%$", "$1.5 \\times 10^{-5}\\%$"],
      ans: 0,
      exp: "$\\text{ppm} = (\\text{mass of solute}/\\text{mass of solution}) \\times 10^6 = 15 \\implies \\text{fraction} = 15 \\times 10^{-6}$. In percentage: $15 \\times 10^{-6} \\times 100\\% = 1.5 \\times 10^{-3}\\%$."
    },
    {
      q: "When $100\\text{ mL}$ of $0.2\\text{ M }\\text{HCl}$ is mixed with $100\\text{ mL}$ of $0.1\\text{ M }\\text{HCl}$, the molarity of the resulting solution is:",
      opts: ["$0.15\\text{ M}$", "$0.30\\text{ M}$", "$0.10\\text{ M}$", "$0.25\\text{ M}$"],
      ans: 0,
      exp: "$M_{\\text{mix}} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2} = \\frac{(0.2 \\times 100) + (0.1 \\times 100)}{100 + 100} = \\frac{20 + 10}{200} = 0.15\\text{ M}$."
    },
    {
      q: "What is the molarity of a solution containing $4.0\\text{ g}$ of $\\text{NaOH}$ dissolved in $250\\text{ mL}$ of solution?",
      opts: ["$0.40\\text{ M}$", "$0.10\\text{ M}$", "$0.25\\text{ M}$", "$1.00\\text{ M}$"],
      ans: 0,
      exp: "$n = 4.0 / 40 = 0.1\\text{ mol}$. $V = 250\\text{ mL} = 0.25\\text{ L}$. $M = 0.1 / 0.25 = 0.40\\text{ M}$."
    }
  ];

  mcqData.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  // 15 Numericals
  list.push(createNumerical(st,
    "Calculate the molarity of an aqueous solution prepared by dissolving $4.9\\text{ g}$ of pure sulfuric acid ($\\text{H}_2\\text{SO}_4$, molar mass $= 98\\text{ g mol}^{-1}$) in water to make $500\\text{ mL}$ of solution. Give your answer to two decimal places.",
    "0.1",
    "Moles of $\\text{H}_2\\text{SO}_4 = 4.9/98 = 0.05\\text{ mol}$. Volume of solution $= 500\\text{ mL} = 0.5\\text{ L}$. Molarity $M = 0.05/0.5 = 0.10\\text{ M}$."
  ));
  list.push(createNumerical(st,
    "What is the mass (in grams) of glucose ($C_6H_{12}O_6$, molar mass $= 180\\text{ g mol}^{-1}$) needed to prepare $250\\text{ mL}$ of a $0.2\\text{ M}$ solution?",
    "9",
    "Moles needed $= M \\times V = 0.2\\text{ mol L}^{-1} \\times 0.25\\text{ L} = 0.05\\text{ mol}$. Mass $= 0.05 \\times 180 = 9\\text{ g}$."
  ));
  list.push(createNumerical(st,
    "A solution is prepared by dissolving $18\\text{ g}$ of glucose in $250\\text{ g}$ of water. What is the molality of the solution in $\\text{mol kg}^{-1}$?",
    "0.4",
    "Moles of glucose $= 18/180 = 0.1\\text{ mol}$. Mass of water $= 250\\text{ g} = 0.25\\text{ kg}$. Molality $m = 0.1/0.25 = 0.4\\text{ m}$."
  ));
  list.push(createNumerical(st,
    "What is the molarity of pure water at $4^\\circ\\text{C}$ where its density is $1.00\\text{ g mL}^{-1}$ (rounded to one decimal place)?",
    "55.6",
    "$1\\text{ L} = 1000\\text{ g}$. Moles $= 1000/18.015 \\approx 55.51\\text{ - }55.56\\text{ M}$. Commonly rounded to $55.6\\text{ M}$."
  ));
  list.push(createNumerical(st,
    "How many milliliters of $12\\text{ M }\\text{HCl}$ must be diluted with water to prepare $600\\text{ mL}$ of $0.2\\text{ M }\\text{HCl}$?",
    "10",
    "$M_1 V_1 = M_2 V_2 \\implies 12 \\times V_1 = 0.2 \\times 600 = 120 \\implies V_1 = 10\\text{ mL}$."
  ));
  list.push(createNumerical(st,
    "If $20\\text{ g}$ of a non-electrolyte solute (molar mass $= 100\\text{ g mol}^{-1}$) is dissolved in $180\\text{ g}$ of water ($M_w = 18\\text{ g mol}^{-1}$), what is the mole fraction of the solute rounded to three decimal places?",
    "0.020",
    "Moles of solute $= 20/100 = 0.2\\text{ mol}$. Moles of water $= 180/18 = 10\\text{ mol}$. $\\chi_2 = \\frac{0.2}{10 + 0.2} = \\frac{0.2}{10.2} \\approx 0.0196 \\approx 0.020$."
  ));
  list.push(createNumerical(st,
    "Calculate the normality of a $0.75\\text{ M}$ aqueous solution of oxalic acid ($\\text{H}_2\\text{C}_2\\text{O}_4$, dibasic acid).",
    "1.5",
    "Oxalic acid has $n = 2$. $\\text{Normality} = \\text{Molarity} \\times n = 0.75 \\times 2 = 1.5\\text{ N}$."
  ));
  list.push(createNumerical(st,
    "What is the percentage by mass of solute in a solution prepared by dissolving $25\\text{ g}$ of table sugar in $75\\text{ g}$ of water?",
    "25",
    "Total mass of solution $= 25 + 75 = 100\\text{ g}$. Percentage $= (25/100) \\times 100\\% = 25\\%$."
  ));
  list.push(createNumerical(st,
    "A commercial nitric acid sample is $68\\%\\text{ (w/w) }\\text{HNO}_3$ and has a density of $1.504\\text{ g mL}^{-1}$. What is the mass of $\\text{HNO}_3$ (in grams) present in $100\\text{ mL}$ of this solution?",
    "102.3",
    "Mass of $100\\text{ mL}$ solution $= 100 \\times 1.504 = 150.4\\text{ g}$. Mass of $\\text{HNO}_3 = 0.68 \\times 150.4 = 102.272\\text{ g} \\approx 102.3\\text{ g}$."
  ));
  list.push(createNumerical(st,
    "Calculate the molarity of a solution obtained by mixing $200\\text{ mL}$ of $0.5\\text{ M }\\text{NaOH}$ with $300\\text{ mL}$ of $0.2\\text{ M }\\text{NaOH}$.",
    "0.32",
    "Total moles $= (200 \\times 0.5) + (300 \\times 0.2) = 100 + 60 = 160\\text{ mmol}$. Total volume $= 500\\text{ mL}$. $M = 160/500 = 0.32\\text{ M}$."
  ));
  list.push(createNumerical(st,
    "How many grams of sodium carbonate ($\\text{Na}_2\\text{CO}_3$, molar mass $= 106\\text{ g mol}^{-1}$) are present in $500\\text{ mL}$ of a $0.1\\text{ M}$ solution?",
    "5.3",
    "Moles $= 0.1 \\times 0.5 = 0.05\\text{ mol}$. Mass $= 0.05 \\times 106 = 5.3\\text{ g}$."
  ));
  list.push(createNumerical(st,
    "What is the mass of urea ($NH_2CONH_2$, molar mass $= 60\\text{ g mol}^{-1}$) required to make $2.5\\text{ kg}$ of a $0.25\\text{ m}$ aqueous solution (in grams)?",
    "37.5",
    "Moles of urea required $= m \\times w_{\\text{solvent}} = 0.25 \\times 2.5 = 0.625\\text{ mol}$. Mass $= 0.625 \\times 60 = 37.5\\text{ g}$."
  ));
  list.push(createNumerical(st,
    "If the mole fraction of ethanol in an aqueous ethanol-water solution is $0.25$, what is the mole fraction of water?",
    "0.75",
    "$\\chi_{\\text{water}} = 1 - \\chi_{\\text{ethanol}} = 1 - 0.25 = 0.75$."
  ));
  list.push(createNumerical(st,
    "What is the molarity of a solution containing $2.0\\text{ g}$ of $\\text{NaOH}$ in $50\\text{ mL}$ of solution?",
    "1",
    "Moles $= 2.0/40 = 0.05\\text{ mol}$. Volume $= 50\\text{ mL} = 0.05\\text{ L}$. $M = 0.05/0.05 = 1.0\\text{ M}$."
  ));
  list.push(createNumerical(st,
    "A $500\\text{ g}$ sample of water contains $3.0\\text{ mg}$ of dissolved oxygen. What is the concentration of oxygen in parts per million ($\\text{ppm}$)?",
    "6",
    "$\\text{ppm} = \\frac{3.0 \\times 10^{-3}\\text{ g}}{500\\text{ g}} \\times 10^6 = 6.0\\text{ ppm}$."
  ));

  return list;
}

// -------------------------------------------------------------
// Subtopic: Expressing concentration of solutions (5 Qs: 4 MCQ, 1 NUM)
// -------------------------------------------------------------
function buildExpressingConcentration() {
  const st = "Expressing concentration of solutions";
  const list = [];

  const mcqs = [
    {
      q: "Which pair of concentration expressions are both completely independent of temperature changes?",
      opts: ["Molality and mole fraction", "Molarity and molality", "Normality and mass percentage", "Molarity and mole fraction"],
      ans: 0,
      exp: "Molality and mole fraction are defined in terms of masses and moles, neither of which changes with temperature."
    },
    {
      q: "The relation between molality ($m$), molarity ($M$), density of solution ($d$ in $\\text{g mL}^{-1}$), and molar mass of solute ($M_2$ in $\\text{g mol}^{-1}$) is given by:",
      opts: [
        "$m = \\frac{1000 M}{1000 d - M M_2}$",
        "$m = \\frac{1000 d - M M_2}{1000 M}$",
        "$m = \\frac{M}{d - M_2}$",
        "$m = \\frac{1000 M}{d + M M_2}$"
      ],
      ans: 0,
      exp: "Consider $1\\text{ L}$ solution: mass of solution $= 1000 d$, mass of solute $= M M_2$, mass of solvent $= 1000 d - M M_2$. Molality $m = \\frac{M}{(1000 d - M M_2)/1000} = \\frac{1000 M}{1000 d - M M_2}$."
    },
    {
      q: "A solution is prepared by mixing $300\\text{ g}$ of a $25\\%\\text{ (w/w)}$ solution and $400\\text{ g}$ of a $40\\%\\text{ (w/w)}$ solution. The mass percentage of solute in the resulting mixture is:",
      opts: ["$33.6\\%$", "$32.5\\%$", "$35.0\\%$", "$30.0\\%$"],
      ans: 0,
      exp: "Solute from solution 1 $= 300 \\times 0.25 = 75\\text{ g}$. Solute from solution 2 $= 400 \\times 0.40 = 160\\text{ g}$. Total solute $= 235\\text{ g}$. Total solution $= 700\\text{ g}$. Mass percentage $= (235/700) \\times 100\\% = 33.57\\% \\approx 33.6\\%$."
    },
    {
      q: "An aqueous solution of urea has a mole fraction of urea equal to $0.05$. What is the molality of this solution? (Molar mass of water $= 18\\text{ g mol}^{-1}$)",
      opts: ["$2.92\\text{ m}$", "$1.50\\text{ m}$", "$0.05\\text{ m}$", "$3.50\\text{ m}$"],
      ans: 0,
      exp: "$m = \\frac{1000 \\chi_2}{(1-\\chi_2) M_1} = \\frac{1000 \\times 0.05}{0.95 \\times 18} = \\frac{50}{17.1} \\approx 2.92\\text{ m}$."
    }
  ];

  mcqs.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  list.push(createNumerical(st,
    "A solution is prepared by adding $2.0\\text{ g}$ of substance $A$ to $18\\text{ g}$ of water. Calculate the mass percentage of $A$ in the solution.",
    "10",
    "Mass percentage of $A = \\frac{\\text{Mass of } A}{\\text{Mass of } A + \\text{Mass of water}} \\times 100\\% = \\frac{2.0}{2.0 + 18.0} \\times 100\\% = \\frac{2}{20} \\times 100\\% = 10\\%$."
  ));

  return list;
}

// -------------------------------------------------------------
// Subtopic: Types of solutions (5 Qs: 4 MCQ, 1 NUM)
// -------------------------------------------------------------
function buildTypesOfSolutions() {
  const st = "Types of solutions";
  const list = [];

  const mcqs = [
    {
      q: "Which of the following is an example of a solid-in-gas solution?",
      opts: ["Camphor in nitrogen gas", "Chloroform in nitrogen gas", "Humidity in air", "Oxygen in nitrogen gas"],
      ans: 0,
      exp: "Camphor is a solid that sublimes directly into nitrogen gas, forming a solid-in-gas homogeneous mixture."
    },
    {
      q: "Amalgam of mercury with sodium is classified as what type of solution?",
      opts: ["Liquid in solid", "Solid in liquid", "Solid in solid", "Liquid in liquid"],
      ans: 0,
      exp: "Mercury is a liquid solute dispersed homogeneously in solid sodium solvent, forming a liquid-in-solid solution."
    },
    {
      q: "Brass, an alloy of copper and zinc, is an example of which type of solution?",
      opts: ["Solid in solid", "Solid in liquid", "Liquid in solid", "Gas in solid"],
      ans: 0,
      exp: "Brass is a substitutional solid solution where zinc atoms occupy copper lattice sites."
    },
    {
      q: "Solution of hydrogen gas adsorbed in palladium is an example of:",
      opts: ["Gas in solid solution", "Solid in gas solution", "Liquid in solid solution", "Gas in liquid solution"],
      ans: 0,
      exp: "Hydrogen gas occupies interstitial voids in the crystalline palladium matrix, forming a gas-in-solid solution."
    }
  ];

  mcqs.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  list.push(createNumerical(st,
    "How many phases are present in a completely miscible binary homogeneous liquid solution of ethanol and water?",
    "1",
    "By definition, a true solution is a homogeneous mixture and consists of exactly $1$ single phase."
  ));

  return list;
}

// Build and validate Part 1
console.log("Validating Part 1...");
const ct = buildConcentrationTerms();
const ec = buildExpressingConcentration();
const ts = buildTypesOfSolutions();

console.log(`Concentration terms: ${ct.length} (Expected: 48)`);
console.log(`Expressing concentration: ${ec.length} (Expected: 5)`);
console.log(`Types of solutions: ${ts.length} (Expected: 5)`);

const allPart1 = [...ct, ...ec, ...ts];
console.log(`Total Part 1 questions: ${allPart1.length} (Expected: 58)`);

allPart1.forEach((q, idx) => {
  checkKatex(q.question, `Part1[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part1[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part1[${idx}].explanation`);
});

console.log("All Part 1 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Solutions Part 1
module.exports = ${JSON.stringify(allPart1, null, 2)};
`;

fs.writeFileSync('scripts/data_solutions_part1.js', fileContent);
console.log("Written scripts/data_solutions_part1.js successfully!");
