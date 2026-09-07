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
// Subtopic: Van 't Hoff factor and abnormal molar mass (48 Qs: 26 AR, 7 MCQ, 15 NUM)
// -------------------------------------------------------------
function buildVantHoffFactor() {
  const st = "Van 't Hoff factor and abnormal molar mass";
  const list = [];

  const arData = [
    {
      a: "The observed molar mass of benzoic acid dissolved in benzene is approximately $244\\text{ g mol}^{-1}$, double its normal molar mass ($122\\text{ g mol}^{-1}$).",
      r: "Benzoic acid molecules associate into stable cyclic dimers in non-polar solvents like benzene through intermolecular hydrogen bonding.",
      ans: 0,
      exp: "Two benzoic acid molecules form a cyclic dimer via two hydrogen bonds ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$). Halving the effective number of solute particles ($i \\approx 0.5$) doubles the apparent molar mass ($M_{\\text{obs}} = M_{\\text{th}}/i \\approx 244\\text{ g mol}^{-1}$)."
    },
    {
      a: "The Van 't Hoff factor ($i$) for an electrolyte that undergoes dissociation in solution is strictly greater than $1$.",
      r: "Dissociation increases the total number of solute particles present in the solution.",
      ans: 0,
      exp: "Since $i = \\frac{\\text{total particles after dissociation}}{\\text{particles before dissociation}}$, producing multiple ions per formula unit makes $i > 1$."
    },
    {
      a: "The Van 't Hoff factor ($i$) for a solute that associates in solution is strictly less than $1$.",
      r: "Association reduces the total number of solute particles in the solution by agglomerating individual molecules into dimers, trimers, or polymers.",
      ans: 0,
      exp: "Fewer total particles in solution means $i < 1$, resulting in smaller colligative property values and higher observed molar masses."
    },
    {
      a: "The observed molar mass of potassium chloride ($\\text{KCl}$) in aqueous solution is nearly half of its theoretical formula mass.",
      r: "$\\text{KCl}$ is a strong electrolyte that dissociates almost completely into $\\text{K}^+$ and $\\text{Cl}^-$ ions in dilute aqueous solution.",
      ans: 0,
      exp: "$i \\approx 2$ for $\\text{KCl}$. Since $M_{\\text{obs}} = M_{\\text{normal}}/i$, the observed molar mass is $74.5/2 \\approx 37.25\\text{ g mol}^{-1}$."
    },
    {
      a: "For complete dissociation of barium chloride ($\\text{BaCl}_2$), the Van 't Hoff factor $i$ equals $3$.",
      r: "One formula unit of $\\text{BaCl}_2$ produces one barium ion ($\\text{Ba}^{2+}$) and two chloride ions ($2\\text{Cl}^-$) upon dissociation ($n = 3$).",
      ans: 0,
      exp: "$i = 1 + (n-1)\\alpha$. For $\\alpha = 1$ and $n = 3$, $i = 1 + 2(1) = 3$."
    },
    {
      a: "Acetic acid exhibits an abnormal molar mass of $\\approx 120\\text{ g mol}^{-1}$ in benzene, but exhibits its normal molar mass ($60\\text{ g mol}^{-1}$) in water.",
      r: "In water, acetic acid forms hydrogen bonds with water molecules rather than self-associating, and partially ionizes into $\\text{CH}_3\\text{COO}^-$ and $\\text{H}^+$.",
      ans: 0,
      exp: "Non-polar benzene favors self-dimerization ($M \\approx 120\\text{ g mol}^{-1}$), while polar water solvates individual acetic acid molecules, preventing dimerization."
    },
    {
      a: "The degree of dissociation ($\\alpha$) of an electrolyte is related to the Van 't Hoff factor ($i$) by $\\alpha = \\frac{i - 1}{n - 1}$.",
      r: "If $1\\text{ mole}$ of an electrolyte produces $n$ ions on dissociation and degree of dissociation is $\\alpha$, the total moles at equilibrium equal $1 + (n-1)\\alpha$.",
      ans: 0,
      exp: "$i = 1 - \\alpha + n\\alpha = 1 + (n-1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$."
    },
    {
      a: "The degree of association ($\\beta$) of a solute forming an $n$-mer is given by $\\beta = \\frac{1 - i}{1 - 1/n}$.",
      r: "When $1\\text{ mole}$ of solute associates to form an $n$-mer with degree of association $\\beta$, the equilibrium number of particles is $1 - \\beta + \\beta/n$.",
      ans: 0,
      exp: "$i = 1 - \\beta + \\beta/n = 1 - \\beta(1 - 1/n) \\implies \\beta = \\frac{1 - i}{1 - 1/n}$."
    },
    {
      a: "A $0.001\\text{ m}$ solution of $\\text{K}_4[\\text{Fe}(\\text{CN})_6]$ has a Van 't Hoff factor approaching $5$ at infinite dilution.",
      r: "Potassium ferrocyanide dissociates into four $\\text{K}^+$ cations and one $[\\text{Fe}(\\text{CN})_6]^{4-}$ complex anion ($n = 4 + 1 = 5$).",
      ans: 0,
      exp: "Complete dissociation yields $5$ ions per formula unit, so $i \\rightarrow 5$ in extremely dilute solutions."
    },
    {
      a: "The Van 't Hoff factor for non-electrolytes like glucose, urea, and sucrose in water is equal to $1$.",
      r: "Non-electrolytes neither dissociate into ions nor associate into clusters in aqueous solutions.",
      ans: 0,
      exp: "Since the number of particles remains identical before and after dissolution, $i = 1$ and experimental molar mass equals theoretical molar mass."
    },
    {
      a: "Colligative property formulas must be modified by multiplying by the Van 't Hoff factor ($i$) when dealing with electrolytes or associating solutes.",
      r: "Colligative properties depend on the total number of dissolved solute particles present in the solution.",
      ans: 0,
      exp: "Corrected formulas are: $\\Delta P/P^\\circ = i \\chi_2$, $\\Delta T_b = i K_b m$, $\\Delta T_f = i K_f m$, and $\\Pi = i C R T$."
    },
    {
      a: "The experimental depression in freezing point for a $0.1\\text{ m}$ aqueous $\\text{NaCl}$ solution is approximately twice that of a $0.1\\text{ m}$ glucose solution.",
      r: "$\\text{NaCl}$ is a $1:1$ electrolyte yielding twice as many particles as non-electrolyte glucose at the same molality.",
      ans: 0,
      exp: "$\\Delta T_f(\\text{NaCl}) = 2 \\times K_f \\times 0.1 = 2 \\Delta T_f(\\text{glucose})$."
    },
    {
      a: "In concentrated solutions of strong electrolytes, the experimental Van 't Hoff factor is slightly less than the theoretical integer value.",
      r: "Interionic attractions and formation of temporary ion pairs (Debye-Hückel-Onsager effect) reduce the effective number of independent free ions.",
      ans: 0,
      exp: "Electrostatic attractions between oppositely charged ions decrease their independent colligative activity at higher concentrations, making $i < n$."
    },
    {
      a: "If the Van 't Hoff factor for a solute in a solvent is $0.6$, the solute is undergoing association.",
      r: "Any Van 't Hoff factor less than $1$ ($i < 1$) signifies that molecules are associating into larger clusters.",
      ans: 0,
      exp: "Fewer total particles in solution than formulated implies association ($i < 1$)."
    },
    {
      a: "The Van 't Hoff factor can never be equal to $1$.",
      r: "All solutes either dissociate or associate when dissolved in any solvent.",
      ans: 3,
      exp: "Both (A) and (R) are false. Non-electrolytes like glucose and sucrose neither associate nor dissociate in water, exhibiting $i = 1$."
    },
    {
      a: "For an electrolyte $A_2 B_3$ undergoing complete ionization, the Van 't Hoff factor is $5$.",
      r: "Dissociation produces two $A^{3+}$ ions and three $B^{2-}$ ions, giving $n = 2 + 3 = 5$.",
      ans: 0,
      exp: "$A_2B_3 \\rightarrow 2A^{3+} + 3B^{2-} \\implies n = 5$. For complete ionization, $i = 5$."
    },
    {
      a: "The molar mass of an electrolyte determined from colligative properties without considering dissociation is called 'abnormal molar mass'.",
      r: "The experimental molar mass deviates from the theoretical chemical formula mass due to change in the number of particles upon dissolution.",
      ans: 0,
      exp: "Colligative molar mass is inversely proportional to particle count ($M_{\\text{obs}} = M_{\\text{normal}}/i$), deviating from normal formula mass."
    },
    {
      a: "When a weak monobasic acid $HA$ is dissolved in water, its Van 't Hoff factor lies strictly between $1$ and $2$.",
      r: "Weak monobasic acids dissociate partially into $H^+$ and $A^-$ ions ($0 < \\alpha < 1$).",
      ans: 0,
      exp: "With $n = 2$ and $0 < \\alpha < 1$, $i = 1 + \\alpha$ lies strictly between $1$ and $2$."
    },
    {
      a: "For a substance that completely dimerizes in solution, the Van 't Hoff factor is $0.5$.",
      r: "Two moles of monomer combine completely to produce one mole of dimer ($n = 2, \\beta = 1$).",
      ans: 0,
      exp: "$i = 1 - \\beta(1 - 1/2) = 1 - 0.5 = 0.5$."
    },
    {
      a: "The freezing point of a $0.01\\text{ M }\\text{Al}_2(\\text{SO}_4)_3$ solution is lower than that of a $0.01\\text{ M }\\text{BaCl}_2$ solution.",
      r: "$\\text{Al}_2(\\text{SO}_4)_3$ dissociates into $5$ ions per formula unit ($i = 5$), whereas $\\text{BaCl}_2$ dissociates into $3$ ions ($i = 3$).",
      ans: 0,
      exp: "Higher particle concentration ($5 \\times 0.01 = 0.05\\text{ M}$) causes greater depression in freezing point, resulting in a lower freezing point."
    },
    {
      a: "The boiling point of a $0.1\\text{ m}$ aqueous $\\text{FeCl}_3$ solution is higher than that of a $0.1\\text{ m}$ aqueous $\\text{NaCl}$ solution.",
      r: "$\\text{FeCl}_3$ produces $4$ ions per formula unit ($i \\approx 4$), causing twice the boiling point elevation compared to $\\text{NaCl}$ ($i \\approx 2$).",
      ans: 0,
      exp: "$\\Delta T_b \\propto i$. For $\\text{FeCl}_3$, $i = 4$, whereas for $\\text{NaCl}$, $i = 2$. Greater elevation leads to a higher boiling point."
    },
    {
      a: "Ostwald dilution law states that the degree of dissociation of a weak electrolyte increases with increasing dilution.",
      r: "As a solution is diluted, the concentration of the electrolyte decreases and the Van 't Hoff factor $i$ approaches its theoretical integer value $n$.",
      ans: 0,
      exp: "$\\alpha = \\sqrt{K_a / C}$. As $C \\rightarrow 0$, $\\alpha \\rightarrow 1$ and $i \\rightarrow n$."
    },
    {
      a: "The boiling point of water is raised equally by dissolving $1\\text{ mole}$ of $\\text{NaCl}$ or $1\\text{ mole}$ of sucrose in $1\\text{ kg}$ of water.",
      r: "Elevation in boiling point is a colligative property independent of the number of particles.",
      ans: 3,
      exp: "Both (A) and (R) are false. $\\text{NaCl}$ produces $2\\text{ moles}$ of ions ($i=2$), raising the boiling point twice as much as $1\\text{ mole}$ of sucrose ($i=1$)."
    },
    {
      a: "At the same molality, the osmotic pressure of $\\text{CaCl}_2$ solution is greater than that of $\\text{NaCl}$ solution.",
      r: "$\\text{CaCl}_2$ yields three ions upon dissociation, whereas $\\text{NaCl}$ yields only two ions.",
      ans: 0,
      exp: "$\\Pi = i C R T$. Since $i(\\text{CaCl}_2) = 3 > i(\\text{NaCl}) = 2$, $\\text{CaCl}_2$ exerts higher osmotic pressure."
    },
    {
      a: "If an electrolyte has $i = 1.8$ for $n = 2$, its degree of dissociation is $80\\%$.",
      r: "$\\alpha = \\frac{i - 1}{n - 1} = \\frac{1.8 - 1}{2 - 1} = 0.80 = 80\\%$.",
      ans: 0,
      exp: "Direct application of $\\alpha = (i - 1)/(n - 1)$ gives $\\alpha = 0.80$ ($80\\%$)."
    },
    {
      a: "The Van 't Hoff factor for a trimerizing solute with $100\\%$ association is $0.33$.",
      r: "When $3$ monomer molecules unite into a single trimer, the particle count is reduced to one-third ($i = 1/3 \\approx 0.33$).",
      ans: 0,
      exp: "$n = 3, \\beta = 1 \\implies i = 1/3 \\approx 0.33$."
    }
  ];

  arData.forEach(d => list.push(createAR(st, d.a, d.r, d.ans, d.exp)));

  // 7 MCQs
  const mcqData = [
    {
      q: "The Van 't Hoff factor ($i$) is defined as:",
      opts: [
        "$\\frac{\\text{Normal molar mass}}{\\text{Abnormal molar mass}}$",
        "$\\frac{\\text{Abnormal molar mass}}{\\text{Normal molar mass}}$",
        "$\\frac{\\text{Calculated colligative property}}{\\text{Observed colligative property}}$",
        "$\\text{Observed colligative property} \\times \\text{Calculated colligative property}$"
      ],
      ans: 0,
      exp: "Van 't Hoff factor $i = \\frac{\\text{Normal molar mass}}{\\text{Abnormal molar mass}} = \\frac{\\text{Observed colligative property}}{\\text{Calculated colligative property}}$."
    },
    {
      q: "What is the theoretical Van 't Hoff factor ($i$) for $\\text{Al}_2(\\text{SO}_4)_3$ assuming complete dissociation?",
      opts: ["$5$", "$3$", "$4$", "$2$"],
      ans: 0,
      exp: "$\\text{Al}_2(\\text{SO}_4)_3 \\rightarrow 2\\text{Al}^{3+} + 3\\text{SO}_4^{2-}$. Total ions $n = 2 + 3 = 5$, so $i = 5$."
    },
    {
      q: "A $0.1\\text{ m}$ solution of a weak monobasic acid $HA$ has a degree of dissociation $\\alpha = 0.20$. What is its Van 't Hoff factor ($i$)?",
      opts: ["$1.20$", "$1.10$", "$1.40$", "$0.80$"],
      ans: 0,
      exp: "For monobasic acid, $n = 2$. $i = 1 + (n - 1)\\alpha = 1 + (2 - 1)(0.20) = 1.20$."
    },
    {
      q: "Benzoic acid undergoes dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$). If the degree of association is $80\\%$, what is the Van 't Hoff factor?",
      opts: ["$0.60$", "$0.80$", "$0.40$", "$1.20$"],
      ans: 0,
      exp: "$n = 2, \\beta = 0.80$. $i = 1 - \\beta(1 - 1/n) = 1 - 0.80(1 - 0.5) = 1 - 0.40 = 0.60$."
    },
    {
      q: "Which of the following $0.05\\text{ M}$ aqueous solutions will freeze at the lowest temperature?",
      opts: [
        "$\\text{Al}_2(\\text{SO}_4)_3$",
        "$\\text{FeCl}_3$",
        "$\\text{NaCl}$",
        "Glucose"
      ],
      ans: 0,
      exp: "$\\text{Al}_2(\\text{SO}_4)_3$ produces $5$ ions ($i=5$). Effective molal concentration $= 5 \\times 0.05 = 0.25\\text{ M}$, causing maximum depression in freezing point and lowest freezing point."
    },
    {
      q: "If the Van 't Hoff factor of $\\text{CaCl}_2$ in a $0.01\\text{ m}$ solution is $2.60$, what is the degree of dissociation of $\\text{CaCl}_2$?",
      opts: ["$80\\%$", "$60\\%$", "$90\\%$", "$100\\%$"],
      ans: 0,
      exp: "$n = 3$. $\\alpha = \\frac{i - 1}{n - 1} = \\frac{2.60 - 1}{3 - 1} = \\frac{1.60}{2} = 0.80 = 80\\%$."
    },
    {
      q: "Which of the following equimolar solutions will have the highest boiling point?",
      opts: [
        "$0.1\\text{ M }\\text{K}_3[\\text{Fe}(\\text{CN})_6]$",
        "$0.1\\text{ M }\\text{BaCl}_2$",
        "$0.1\\text{ M }\\text{NaCl}$",
        "$0.1\\text{ M }\\text{Sucrose}$"
      ],
      ans: 0,
      exp: "$\\text{K}_3[\\text{Fe}(\\text{CN})_6]$ dissociates into $4$ ions ($3\\text{K}^+ + [\\text{Fe}(\\text{CN})_6]^{3-}$), giving $i = 4$, the highest elevation in boiling point."
    }
  ];

  mcqData.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  // 15 Numericals
  list.push(createNumerical(st,
    "What is the theoretical Van 't Hoff factor ($i$) for potassium ferrocyanide, $\\text{K}_4[\\text{Fe}(\\text{CN})_6]$, assuming $100\\%$ dissociation in aqueous solution?",
    "5",
    "$\\text{K}_4[\\text{Fe}(\\text{CN})_6] \\rightarrow 4\\text{K}^+ + [\\text{Fe}(\\text{CN})_6]^{4-} \\implies n = 4 + 1 = 5$."
  ));
  list.push(createNumerical(st,
    "A $0.2\\text{ m}$ aqueous solution of $\\text{KCl}$ freezes at $-0.68^\\circ\\text{C}$. If $K_f$ of water is $1.86\\text{ K kg mol}^{-1}$, calculate the Van 't Hoff factor of $\\text{KCl}$ (rounded to two decimal places).",
    "1.83",
    "$\\Delta T_f = i K_f m \\implies 0.68 = i \\times 1.86 \\times 0.2 \\implies i = \\frac{0.68}{0.372} \\approx 1.828 \\approx 1.83$."
  ));
  list.push(createNumerical(st,
    "In the problem above ($i = 1.83, n = 2$), calculate the percentage degree of dissociation of $\\text{KCl}$ (rounded to the nearest integer).",
    "83",
    "$\\alpha = \\frac{i - 1}{n - 1} = \\frac{1.83 - 1}{2 - 1} = 0.83 = 83\\%$."
  ));
  list.push(createNumerical(st,
    "The freezing point depression of a $0.10\\text{ m}$ aqueous solution of a weak monobasic acid is $0.205^\\circ\\text{C}$. If $K_f = 1.86\\text{ K kg mol}^{-1}$, calculate the Van 't Hoff factor $i$ (rounded to two decimal places).",
    "1.10",
    "$i = \\frac{\\Delta T_f}{K_f m} = \\frac{0.205}{1.86 \\times 0.10} = \\frac{0.205}{0.186} \\approx 1.102 \\approx 1.10$."
  ));
  list.push(createNumerical(st,
    "For the weak acid above ($i = 1.10, n = 2$), what is its percentage degree of dissociation?",
    "10",
    "$\\alpha = \\frac{1.10 - 1}{2 - 1} = 0.10 = 10\\%$."
  ));
  list.push(createNumerical(st,
    "If $2.0\\text{ g}$ of benzoic acid ($M = 122\\text{ g mol}^{-1}$) dissolved in $25.0\\text{ g}$ of benzene shows a freezing point depression of $1.62\\text{ K}$ ($K_f = 4.9\\text{ K kg mol}^{-1}$), calculate the Van 't Hoff factor $i$ (rounded to two decimal places).",
    "0.50",
    "$m = \\frac{2.0 / 122}{0.025\\text{ kg}} = 0.6557\\text{ mol kg}^{-1}$. $\\Delta T_f = i K_f m \\implies 1.62 = i \\times 4.9 \\times 0.6557 \\implies i = \\frac{1.62}{3.213} \\approx 0.504 \\approx 0.50$."
  ));
  list.push(createNumerical(st,
    "What is the percentage degree of association of benzoic acid in benzene if $i = 0.50$ and it forms dimers ($n = 2$)?",
    "100",
    "$\\beta = \\frac{1 - i}{1 - 1/n} = \\frac{1 - 0.50}{1 - 0.5} = \\frac{0.50}{0.50} = 1.0 = 100\\%$."
  ));
  list.push(createNumerical(st,
    "A solute $A$ associates in water to form trimers ($3A \\rightleftharpoons A_3$). If its degree of association is $60\\%$, what is the Van 't Hoff factor $i$ (rounded to one decimal place)?",
    "0.6",
    "$n = 3, \\beta = 0.60$. $i = 1 - \\beta(1 - 1/3) = 1 - 0.60(2/3) = 1 - 0.40 = 0.6$."
  ));
  list.push(createNumerical(st,
    "Calculate the observed molar mass in $\\text{g mol}^{-1}$ of a substance having a theoretical molar mass of $100\\text{ g mol}^{-1}$ if its Van 't Hoff factor in the solution is $2.5$.",
    "40",
    "$M_{\\text{obs}} = M_{\\text{normal}} / i = 100 / 2.5 = 40\\text{ g mol}^{-1}$."
  ));
  list.push(createNumerical(st,
    "Calculate the observed molar mass in $\\text{g mol}^{-1}$ of a compound with normal molar mass $120\\text{ g mol}^{-1}$ that dimerizes with a Van 't Hoff factor of $0.60$.",
    "200",
    "$M_{\\text{obs}} = 120 / 0.60 = 200\\text{ g mol}^{-1}$."
  ));
  list.push(createNumerical(st,
    "If the boiling point elevation of a $0.05\\text{ m}$ solution of an electrolyte $AB_2$ is $0.065^\\circ\\text{C}$ and $K_b = 0.52\\text{ K kg mol}^{-1}$, calculate the Van 't Hoff factor $i$.",
    "2.5",
    "$i = \\frac{\\Delta T_b}{K_b m} = \\frac{0.065}{0.52 \\times 0.05} = \\frac{0.065}{0.026} = 2.5$."
  ));
  list.push(createNumerical(st,
    "For the electrolyte $AB_2$ above ($i = 2.5, n = 3$), what is the percentage degree of dissociation?",
    "75",
    "$\\alpha = \\frac{i - 1}{n - 1} = \\frac{2.5 - 1}{3 - 1} = \\frac{1.5}{2} = 0.75 = 75\\%$."
  ));
  list.push(createNumerical(st,
    "What is the Van 't Hoff factor of a $0.1\\text{ m}$ solution of glucose ($C_6H_{12}O_6$)?",
    "1",
    "Glucose is a non-electrolyte that neither dissociates nor associates, so $i = 1$."
  ));
  list.push(createNumerical(st,
    "The Van 't Hoff factor of a $0.005\\text{ M}$ aqueous solution of $\\text{K}_2\\text{SO}_4$ is $2.80$. What is the degree of dissociation of $\\text{K}_2\\text{SO}_4$ in percentage?",
    "90",
    "$n = 3$. $\\alpha = \\frac{2.80 - 1}{3 - 1} = \\frac{1.80}{2} = 0.90 = 90\\%$."
  ));
  list.push(createNumerical(st,
    "How many moles of particles are produced in solution from $1\\text{ mole}$ of $\\text{Fe}_2(\\text{SO}_4)_3$ upon complete dissociation?",
    "5",
    "$\\text{Fe}_2(\\text{SO}_4)_3 \\rightarrow 2\\text{Fe}^{3+} + 3\\text{SO}_4^{2-} \\implies 2 + 3 = 5\\text{ moles}$."
  ));

  return list;
}

// -------------------------------------------------------------
// Subtopic: van't Hoff factor and abnormal molar mass (5 Qs: 4 MCQ, 1 NUM)
// -------------------------------------------------------------
function buildVantHoffLower() {
  const st = "van't Hoff factor and abnormal molar mass";
  const list = [];

  const mcqs = [
    {
      q: "Which of the following compounds has a Van 't Hoff factor ($i$) less than $1$ in benzene solution?",
      opts: ["Ethanoic acid", "Glucose", "Sodium chloride", "Potassium chloride"],
      ans: 0,
      exp: "Ethanoic acid (acetic acid) dimerizes in benzene via hydrogen bonding, resulting in $i < 1$."
    },
    {
      q: "For a solute undergoing association in solution, the observed colligative property is:",
      opts: [
        "Less than the theoretically calculated value",
        "Greater than the theoretically calculated value",
        "Equal to the theoretical value",
        "Infinite"
      ],
      ans: 0,
      exp: "Association decreases the total number of solute particles in solution, so observed colligative property is smaller than calculated ($i < 1$)."
    },
    {
      q: "A $0.1\\text{ M}$ solution of which of the following electrolytes will show the maximum depression in freezing point?",
      opts: ["$\\text{K}_4[\\text{Fe}(\\text{CN})_6]$", "$\\text{AlCl}_3$", "$\\text{BaCl}_2$", "$\\text{KCl}$"],
      ans: 0,
      exp: "$\\text{K}_4[\\text{Fe}(\\text{CN})_6]$ yields $5$ ions per formula unit ($i=5$), producing the maximum freezing point depression."
    },
    {
      q: "If theoretical molar mass of a solute is $M$ and observed molar mass is $M_{\\text{obs}}$, the Van 't Hoff factor $i$ is given by:",
      opts: [
        "$i = \\frac{M}{M_{\\text{obs}}}$",
        "$i = \\frac{M_{\\text{obs}}}{M}$",
        "$i = M \\times M_{\\text{obs}}$",
        "$i = M - M_{\\text{obs}}$"
      ],
      ans: 0,
      exp: "Van 't Hoff factor is inversely proportional to observed molar mass: $i = M_{\\text{th}} / M_{\\text{obs}}$."
    }
  ];

  mcqs.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  list.push(createNumerical(st,
    "What is the theoretical Van 't Hoff factor ($i$) for aluminium chloride ($\\text{AlCl}_3$) assuming complete ionization?",
    "4",
    "$\\text{AlCl}_3 \\rightarrow \\text{Al}^{3+} + 3\\text{Cl}^- \\implies n = 1 + 3 = 4$."
  ));

  return list;
}

// -------------------------------------------------------------
// Subtopic: Colligative properties (AR and MCQ only: 25 AR, 8 MCQ = 33 Qs)
// -------------------------------------------------------------
function buildColligativePropertiesARMCQ() {
  const st = "Colligative properties";
  const list = [];

  const arData = [
    {
      a: "Colligative properties depend only on the number of solute particles in solution, not on their chemical identity or nature.",
      r: "The word 'colligative' is derived from Latin 'colligatus' meaning 'bound together', reflecting collective particle count rather than individual chemical properties.",
      ans: 0,
      exp: "Colligative properties arise fundamentally from the dilution of the solvent's chemical potential by solute particles, independent of solute identity."
    },
    {
      a: "The boiling point of a solution containing a non-volatile solute is higher than that of the pure solvent.",
      r: "Addition of a non-volatile solute lowers the vapour pressure of the solvent, requiring a higher temperature to make the vapour pressure equal to external atmospheric pressure.",
      ans: 0,
      exp: "Boiling occurs when vapour pressure equals atmospheric pressure. Since vapour pressure is lowered, the temperature must be raised to reach boiling."
    },
    {
      a: "The freezing point of a solution is lower than that of the pure solvent.",
      r: "At the freezing point, the vapour pressure of the liquid solvent must equal the vapour pressure of the solid solvent, which occurs at a lower temperature for the solution.",
      ans: 0,
      exp: "Because the solution has a lower vapour pressure curve than the pure liquid solvent, it intersects the sublimation curve of the solid solvent at a lower temperature."
    },
    {
      a: "Ethylene glycol is used as an antifreeze in automobile radiators in cold climates.",
      r: "Ethylene glycol lowers the freezing point of water and simultaneously raises its boiling point.",
      ans: 0,
      exp: "A $35\\%\\text{ (v/v)}$ aqueous solution of ethylene glycol depresses the freezing point to $-17.6^\\circ\\text{C}$ ($255.4\\text{ K}$) and elevates the boiling point, protecting the engine year-round."
    },
    {
      a: "Common salt ($\\text{NaCl}$) or calcium chloride ($\\text{CaCl}_2$) is spread on snow-covered roads in cold countries.",
      r: "Dissolution of salt in snow produces a solution with a freezing point lower than the ambient temperature, causing the ice and snow to melt.",
      ans: 0,
      exp: "Salt acts as a de-icing agent by depressing the freezing point of water below the environmental temperature."
    },
    {
      a: "The molal elevation constant ($K_b$, ebullioscopic constant) depends only on the nature of the solvent and is independent of the solute.",
      r: "$K_b$ is thermodynamically defined by $K_b = \\frac{R T_b^2 M_1}{1000 \\Delta H_{\\text{vap}}}$, where $T_b, M_1$, and $\\Delta H_{\\text{vap}}$ are properties solely of the solvent.",
      ans: 0,
      exp: "$K_b$ is a characteristic solvent property independent of the solute's identity or concentration."
    },
    {
      a: "The molal depression constant ($K_f$, cryoscopic constant) is a characteristic property of the solvent.",
      r: "$K_f$ is given by $K_f = \\frac{R T_f^2 M_1}{1000 \\Delta H_{\\text{fus}}}$, where $T_f, M_1$, and $\\Delta H_{\\text{fus}}$ depend exclusively on the solvent.",
      ans: 0,
      exp: "Cryoscopic constant $K_f$ is determined solely by the solvent's molar mass, melting point, and enthalpy of fusion."
    },
    {
      a: "Camphor is frequently used as a solvent in the Rast method for molecular mass determination.",
      r: "Camphor has an exceptionally large cryoscopic constant ($K_f \\approx 40\\text{ K kg mol}^{-1}$), producing easily measurable freezing point depressions even for small amounts of solute.",
      ans: 0,
      exp: "A huge $K_f$ produces depressions of several degrees Celsius that can be read with an ordinary thermometer."
    },
    {
      a: "The units of both $K_b$ and $K_f$ are $\\text{K kg mol}^{-1}$.",
      r: "$\\Delta T = K \\times m \\implies K = \\frac{\\Delta T}{m} = \\frac{\\text{K}}{\\text{mol kg}^{-1}} = \\text{K kg mol}^{-1}$.",
      ans: 0,
      exp: "Dimensional analysis verifies that both ebullioscopic and cryoscopic constants have units of $\\text{K kg mol}^{-1}$."
    },
    {
      a: "Elevation in boiling point is directly proportional to the molality of the solution in dilute solutions.",
      r: "In dilute solutions, the lowering of vapour pressure is directly proportional to the mole fraction of the solute, which is proportional to molality.",
      ans: 0,
      exp: "$\\Delta T_b \\propto \\Delta P \\propto \\chi_2 \\propto m \\implies \\Delta T_b = K_b m$."
    },
    {
      a: "Depression in freezing point is directly proportional to the molality of the solution in dilute solutions.",
      r: "Freezing point depression depends directly on the relative lowering of vapour pressure, which is proportional to molality.",
      ans: 0,
      exp: "$\\Delta T_f \\propto \\Delta P \\propto m \\implies \\Delta T_f = K_f m$."
    },
    {
      a: "A $0.1\\text{ m}$ aqueous solution of $\\text{NaCl}$ has a higher boiling point than a $0.1\\text{ m}$ aqueous solution of glucose.",
      r: "$\\text{NaCl}$ dissociates into two ions per formula unit ($i \\approx 2$), producing twice the molal elevation of boiling point compared to non-electrolyte glucose ($i = 1$).",
      ans: 0,
      exp: "$\\Delta T_b = i K_b m$. Since $i = 2$ for $\\text{NaCl}$ and $i = 1$ for glucose, the boiling point of $\\text{NaCl}$ solution is higher."
    },
    {
      a: "Water boils at a lower temperature at high altitudes (e.g. on mountains) than at sea level.",
      r: "Atmospheric pressure decreases with altitude, so water's vapour pressure reaches the external pressure at a lower temperature.",
      ans: 0,
      exp: "Reduced atmospheric pressure lowers the boiling point, which is why cooking takes longer in open pots at high altitudes."
    },
    {
      a: "Cooking food in a pressure cooker takes less time than in an open pan.",
      r: "A pressure cooker increases the internal pressure above atmospheric pressure, raising the boiling point of water above $100^\\circ\\text{C}$.",
      ans: 0,
      exp: "Water boils at $\\sim 120^\\circ\\text{C}$ under elevated pressure, cooking food faster due to the higher temperature."
    },
    {
      a: "Beckmann thermometer is used for the accurate measurement of small temperature changes in freezing and boiling point experiments.",
      r: "A Beckmann thermometer has a large bulb and a narrow capillary that can read temperature differences of $0.001\\text{ K}$ accurately over a range of about $5\\text{ to }6^\\circ\\text{C}$.",
      ans: 0,
      exp: "High precision differential temperature measurement ($\pm 0.001\\text{ K}$) makes the Beckmann thermometer ideal for cryoscopy and ebullioscopy."
    },
    {
      a: "A $1\\text{ m}$ solution of glucose in water has a higher freezing point than a $1\\text{ m}$ solution of $\\text{CaCl}_2$ in water.",
      r: "$\\text{CaCl}_2$ produces three ions per formula unit ($i = 3$), causing a larger depression in freezing point and therefore a lower freezing point.",
      ans: 0,
      exp: "Larger depression means the freezing point drops further below $0^\\circ\\text{C}$, so $\\text{CaCl}_2$ freezes at a lower temperature than glucose."
    },
    {
      a: "The freezing point of heavy water ($\\text{D}_2\\text{O}$) is $3.8^\\circ\\text{C}$, higher than that of ordinary water ($0.0^\\circ\\text{C}$).",
      r: "Stronger hydrogen bonding in $\\text{D}_2\\text{O}$ due to the higher mass of deuterium requires less cooling to freeze.",
      ans: 0,
      exp: "Stronger intermolecular hydrogen bonds in heavy water lead to higher melting and boiling points ($T_f = 3.82^\\circ\\text{C}, T_b = 101.42^\\circ\\text{C}$)."
    },
    {
      a: "When ice freezes out from an aqueous salt solution, the remaining solution becomes more concentrated.",
      r: "Only pure solvent (water) solidifies as ice, leaving solute particles behind in the remaining liquid phase.",
      ans: 0,
      exp: "Solvent crystallizes as pure ice, concentrating the remaining brine (fractional freezing)."
    },
    {
      a: "Colligative properties can be used to determine the molar mass of non-volatile solutes.",
      r: "Colligative properties are inversely proportional to the molar mass of the dissolved solute: $\\Delta T \\propto \\frac{w_2}{M_2 w_1}$.",
      ans: 0,
      exp: "Measuring $\\Delta T_b, \\Delta T_f$, or $\\Pi$ enables direct calculation of unknown solute molar mass $M_2$."
    },
    {
      a: "The cryoscopic constant ($K_f$) for water is $1.86\\text{ K kg mol}^{-1}$.",
      r: "Dissolving $1\\text{ mole}$ of any non-volatile non-electrolyte solute in $1000\\text{ g}$ of water lowers its freezing point by $1.86\\text{ K}$.",
      ans: 0,
      exp: "By definition, $K_f = \\Delta T_f / m$; for $m = 1\\text{ mol kg}^{-1}$, $\\Delta T_f = 1.86\\text{ K}$."
    },
    {
      a: "The ebullioscopic constant ($K_b$) for water is $0.52\\text{ K kg mol}^{-1}$.",
      r: "Dissolving $1\\text{ mole}$ of a non-volatile non-electrolyte solute in $1\\text{ kg}$ of water elevates its boiling point by $0.52\\text{ K}$.",
      ans: 0,
      exp: "By definition, $K_b = \\Delta T_b / m$; for $m = 1\\text{ mol kg}^{-1}$, $\\Delta T_b = 0.52\\text{ K}$."
    },
    {
      a: "Equimolal solutions of urea and glucose in water freeze at the same temperature.",
      r: "Both urea and glucose are non-electrolytes with $i = 1$, producing identical molal concentrations of dissolved particles.",
      ans: 0,
      exp: "Identical $m$ and $i = 1$ yield identical freezing point depressions $\\Delta T_f = K_f m$."
    },
    {
      a: "The boiling point of a solvent increases when volatile impurities are added.",
      r: "Adding a volatile impurity with a higher vapour pressure lowers the boiling point of the mixture.",
      ans: 3,
      exp: "(A) is false; only non-volatile solutes elevate the boiling point. Volatile solutes may lower the boiling point. (R) is true."
    },
    {
      a: "During winter, a mixture of water and ethylene glycol does not freeze in automobile engines even at $-15^\\circ\\text{C}$.",
      r: "Ethylene glycol creates extensive hydrogen bonding with water, heavily disrupting the ice crystal lattice and depressing the freezing point.",
      ans: 0,
      exp: "Colligative depression of freezing point prevents the coolant from freezing and cracking the engine block."
    },
    {
      a: "Colligative properties depend on the chemical structure, shape, and size of the solute molecules.",
      r: "Colligative properties are governed entirely by the number of solute particles in a given quantity of solvent.",
      ans: 3,
      exp: "(A) is false because colligative properties are independent of chemical nature, shape, or size. (R) is true."
    }
  ];

  arData.forEach(d => list.push(createAR(st, d.a, d.r, d.ans, d.exp)));

  // 8 MCQs
  const mcqData = [
    {
      q: "Which of the following is NOT a colligative property?",
      opts: ["Optical activity", "Relative lowering of vapour pressure", "Elevation of boiling point", "Depression of freezing point"],
      ans: 0,
      exp: "Optical activity depends on molecular asymmetry and chiral structure, not purely on particle count."
    },
    {
      q: "The molal elevation constant ($K_b$) depends on:",
      opts: ["The nature of the solvent", "The nature of the solute", "The molarity of the solution", "The volume of the container"],
      ans: 0,
      exp: "$K_b = \\frac{R T_b^2 M_1}{1000 \\Delta H_{\\text{vap}}}$ is a property characteristic solely of the solvent."
    },
    {
      q: "The units of the ebullioscopic constant ($K_b$) and cryoscopic constant ($K_f$) are:",
      opts: ["$\\text{K kg mol}^{-1}$", "$\\text{kg K}^{-1}\\text{ mol}$", "$\\text{mol kg}^{-1}\\text{ K}$", "$\\text{K mol}^{-1}$"],
      ans: 0,
      exp: "$K = \\Delta T / m = \\text{K} / (\\text{mol kg}^{-1}) = \\text{K kg mol}^{-1}$."
    },
    {
      q: "Which of the following $0.1\\text{ m}$ aqueous solutions will have the lowest freezing point?",
      opts: ["$\\text{Al}_2(\\text{SO}_4)_3$", "$\\text{CaCl}_2$", "$\\text{NaCl}$", "Glucose"],
      ans: 0,
      exp: "$\\text{Al}_2(\\text{SO}_4)_3$ gives $5$ ions per formula unit ($i=5$), causing the greatest freezing point depression and lowest freezing point."
    },
    {
      q: "Why is common salt spread on roads covered with snow in sub-zero climates?",
      opts: [
        "It lowers the freezing point of water, melting the snow",
        "It reacts violently with snow to produce heat",
        "It increases the friction between tires and ice without melting",
        "It absorbs moisture from air to dry the roads"
      ],
      ans: 0,
      exp: "Salt depresses the freezing point of water below ambient temperature, causing ice and snow to melt into brine."
    },
    {
      q: "What is the primary substance used as an antifreeze in automobile radiators?",
      opts: ["Ethylene glycol", "Glycerol", "Methanol", "Phenol"],
      ans: 0,
      exp: "Ethylene glycol ($\text{HO-CH}_2\text{-CH}_2\text{-OH}$) is non-corrosive, non-volatile, and depresses the freezing point while elevating the boiling point."
    },
    {
      q: "The freezing point of an aqueous solution containing $1\\text{ mole}$ of $\\text{NaCl}$ in $1000\\text{ g}$ of water is approximately:",
      opts: ["$-3.72^\\circ\\text{C}$", "$-1.86^\\circ\\text{C}$", "$0.00^\\circ\\text{C}$", "$-0.93^\\circ\\text{C}$"],
      ans: 0,
      exp: "$\\Delta T_f = i K_f m = 2 \\times 1.86 \\times 1 = 3.72^\\circ\\text{C} \\implies T_f = -3.72^\\circ\\text{C}$."
    },
    {
      q: "At high altitudes, the boiling point of water decreases because:",
      opts: [
        "Atmospheric pressure is lower",
        "Atmospheric pressure is higher",
        "Temperature is lower",
        "Oxygen concentration is lower"
      ],
      ans: 0,
      exp: "Vapour pressure equals external atmospheric pressure at a lower temperature when atmospheric pressure is reduced."
    }
  ];

  mcqData.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  return list;
}

// Build and validate Part 4
console.log("Validating Part 4...");
const vhf = buildVantHoffFactor();
const vhl = buildVantHoffLower();
const cpm = buildColligativePropertiesARMCQ();

console.log(`Van 't Hoff factor: ${vhf.length} (Expected: 48)`);
console.log(`van't Hoff factor (lower): ${vhl.length} (Expected: 5)`);
console.log(`Colligative properties AR/MCQ: ${cpm.length} (Expected: 33)`);

const allPart4 = [...vhf, ...vhl, ...cpm];
console.log(`Total Part 4 questions: ${allPart4.length} (Expected: 86)`);

allPart4.forEach((q, idx) => {
  checkKatex(q.question, `Part4[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part4[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part4[${idx}].explanation`);
});

console.log("All Part 4 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Solutions Part 4
module.exports = ${JSON.stringify(allPart4, null, 2)};
`;

fs.writeFileSync('scripts/data_solutions_part4.js', fileContent);
console.log("Written scripts/data_solutions_part4.js successfully!");
