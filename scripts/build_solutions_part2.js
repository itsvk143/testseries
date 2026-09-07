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
// Subtopic: Henry's law and solubility of gases (48 Qs: 25 AR, 8 MCQ, 15 NUM)
// -------------------------------------------------------------
function buildHenrysLaw() {
  const st = "Henry's law and solubility of gases";
  const list = [];

  const arData = [
    {
      a: "Aquatic species are more comfortable and active in cold waters than in warm waters.",
      r: "The solubility of oxygen in water increases as the temperature decreases, because gas dissolution is an exothermic process.",
      ans: 0,
      exp: "Gas dissolution in water has $\\Delta H < 0$. According to Le Chatelier's principle, lowering temperature shifts equilibrium toward dissolution, providing higher dissolved oxygen levels."
    },
    {
      a: "Scuba divers use air diluted with helium ($11.7\\%\\text{ He}, 56.2\\%\\text{ N}_2, 32.1\\%\\text{ O}_2$) in their breathing tanks.",
      r: "Helium has very low solubility in blood and body fluids even under high hydrostatic pressure, preventing the formation of painful nitrogen bubbles ('the bends').",
      ans: 0,
      exp: "Under high pressure deep underwater, nitrogen dissolves extensively in blood. Rapid ascent causes nitrogen to bubble out, causing the dangerous medical condition known as 'the bends'. Helium dilutes nitrogen to prevent this."
    },
    {
      a: "To increase the solubility of $\\text{CO}_2$ in soft drinks and soda water, the bottle is sealed under high pressure.",
      r: "According to Henry's law, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid.",
      ans: 0,
      exp: "Henry's law states $p = K_H \\chi$. Higher pressure $p$ forces more $\\text{CO}_2$ into solution (higher mole fraction $\\chi$)."
    },
    {
      a: "The value of Henry's law constant ($K_H$) increases with increase in temperature for a given gas-solvent system.",
      r: "Higher $K_H$ value at a given pressure corresponds to lower solubility of the gas in the liquid.",
      ans: 1,
      exp: "Both (A) and (R) are true statements. Since $\\chi = p/K_H$, higher $K_H$ means lower solubility. $K_H$ increases with $T$ because gas dissolution is exothermic."
    },
    {
      a: "Gases like $\\text{HCl}$ and $\\text{NH}_3$ do not obey Henry's law strictly in water.",
      r: "Henry's law is valid only when the gas does not undergo chemical reaction, dissociation, or association with the solvent.",
      ans: 0,
      exp: "$\\text{HCl}$ ionizes completely in water ($\\text{H}_3\\text{O}^+ + \\text{Cl}^-$) and $\\text{NH}_3$ reacts chemically ($\\text{NH}_4^+ + \\text{OH}^-$), deviating from ideal physical gas dissolution assumed by Henry's law."
    },
    {
      a: "People living at high altitudes or mountain climbers often suffer from anoxia.",
      r: "At high altitudes, the partial pressure of oxygen in the atmosphere is much lower than at sea level, leading to low concentrations of oxygen in blood and tissues.",
      ans: 0,
      exp: "Low atmospheric pressure means lower $p_{\\text{O}_2}$, reducing dissolved oxygen in blood according to Henry's law and causing hypoxia/anoxia."
    },
    {
      a: "A gas with a higher Henry's law constant ($K_H$) has higher solubility in a liquid at a constant pressure.",
      r: "Henry's law is expressed as $p = K_H \\chi$, where $\\chi$ is the mole fraction of the gas in the liquid.",
      ans: 3,
      exp: "(A) is false; since $\\chi = p/K_H$, a higher $K_H$ value corresponds to a lower solubility $\\chi$. (R) is true."
    },
    {
      a: "Boiling water tastes flat and insipid.",
      r: "Heating drives out dissolved atmospheric gases (such as oxygen and carbon dioxide) from water because gas solubility decreases with rising temperature.",
      ans: 0,
      exp: "Dissolved air gives natural drinking water its fresh taste. Boiling expels these gases due to decreased solubility at high temperatures."
    },
    {
      a: "The dissolution of most gases in liquids is an exothermic process ($\\Delta H_{\\text{sol}} < 0$).",
      r: "Dissolution of a gas in a liquid resembles condensation, during which heat energy is released.",
      ans: 0,
      exp: "Gas molecules lose translational freedom and condense into the liquid phase, releasing energy ($\\Delta H < 0$ and $\\Delta S < 0$)."
    },
    {
      a: "Henry's law is a special case of Raoult's law.",
      r: "In a solution of a gas in a liquid, the partial vapour pressure of the volatile component is proportional to its mole fraction, with the proportionality constant being $K_H$ instead of $P^\\circ$.",
      ans: 0,
      exp: "Raoult's law gives $p = P^\\circ \\chi$ while Henry's law gives $p = K_H \\chi$. Both express proportionality to mole fraction, differing only in the proportionality constant."
    },
    {
      a: "When a soda bottle is opened, brisk effervescence is observed.",
      r: "Opening the bottle decreases the pressure above the liquid to atmospheric pressure, causing the solubility of $\\text{CO}_2$ to drop sharply and release excess gas as bubbles.",
      ans: 0,
      exp: "Rapid drop in headspace pressure from several atmospheres to $1\\text{ atm}$ dramatically reduces $\\text{CO}_2$ solubility, causing rapid bubbling."
    },
    {
      a: "Henry's law applies accurately to real gases under conditions of low pressure and moderate to high temperature.",
      r: "Real gases behave nearly ideally under conditions of low pressure and high temperature.",
      ans: 0,
      exp: "At low pressure and high temperature, intermolecular gas interactions are minimal, satisfying the ideal behavior required for Henry's law."
    },
    {
      a: "Between nitrogen ($\\text{N}_2$) and oxygen ($\\text{O}_2$), nitrogen has a higher Henry's law constant ($K_H$) in water at $293\\text{ K}$.",
      r: "Oxygen is more soluble in water than nitrogen at the same partial pressure.",
      ans: 0,
      exp: "$K_H(\\text{N}_2) \\approx 76.48\\text{ kbar}$ while $K_H(\\text{O}_2) \\approx 34.86\\text{ kbar}$. Higher $K_H$ reflects lower solubility of $\\text{N}_2$ compared to $\\text{O}_2$."
    },
    {
      a: "Dissolution of helium gas in liquid water has an unusually small endothermic enthalpy of solution at higher temperatures.",
      r: "Very small noble gas atoms can be accommodated in water cavities with minimal disruption of hydrogen bonding.",
      ans: 1,
      exp: "Both statements are correct facts, but cavity formation thermodynamics rather than mere geometry explains the slight positive enthalpy."
    },
    {
      a: "The slope of a plot of partial pressure of gas ($p$) versus its mole fraction in solution ($\\chi$) equals Henry's law constant ($K_H$).",
      r: "According to Henry's law, $p = K_H \\chi$, which represents a straight line passing through the origin with slope $K_H$.",
      ans: 0,
      exp: "A plot of $y = mx$ with $y = p$ and $x = \\chi$ yields slope $m = K_H$."
    },
    {
      a: "The solubility of carbon dioxide in water increases when the temperature of the water is raised.",
      r: "All dissolution processes in liquids are endothermic.",
      ans: 3,
      exp: "Both (A) and (R) are false. Gas dissolution is exothermic, so solubility decreases as temperature is raised."
    },
    {
      a: "In biological systems, the binding of oxygen to hemoglobin in lungs does not strictly follow simple Henry's law.",
      r: "Hemoglobin exhibits cooperative allosteric binding with oxygen, forming oxyhemoglobin through coordinate complexation rather than simple physical dissolution.",
      ans: 0,
      exp: "Oxygen chemically binds to $\\text{Fe}^{2+}$ heme centers cooperatively (sigmoidal binding curve) rather than simple linear Henry's law dissolution."
    },
    {
      a: "Henry's law constant has the same physical dimensions as pressure.",
      r: "In $p = K_H \\chi$, mole fraction $\\chi$ is dimensionless, so $K_H$ must have the dimensions of pressure ($p$).",
      ans: 0,
      exp: "Dimension of $K_H = [p]/[\\chi] = [p] = \\text{bar, atm, or Pa}$."
    },
    {
      a: "Hydrogen gas is less soluble in liquid water than carbon dioxide at room temperature.",
      r: "Carbon dioxide has higher polarizability and can interact with water through dipole-induced dipole interactions and chemical hydration.",
      ans: 0,
      exp: "Higher molecular mass, higher polarizability, and partial reaction to form carbonic acid make $\\text{CO}_2$ much more soluble than non-polar $\\text{H}_2$."
    },
    {
      a: "At a given pressure, the solubility of argon in water is lower at $30^\\circ\\text{C}$ than at $10^\\circ\\text{C}$.",
      r: "The Henry's law constant of argon increases with increasing temperature.",
      ans: 0,
      exp: "As temperature rises, $K_H$ increases, resulting in lower mole fraction solubility $\\chi = p/K_H$."
    },
    {
      a: "The solubility of a solid solute in a liquid always increases with pressure.",
      r: "Solids and liquids are highly incompressible, so pressure has practically no effect on the solubility of solids in liquids.",
      ans: 3,
      exp: "(A) is false because pressure has negligible effect on solid solubility in liquids. (R) is true."
    },
    {
      a: "If the partial pressure of a gas over a liquid is doubled at constant temperature, the mass of gas dissolved per unit volume of liquid is doubled.",
      r: "Henry's law states that the mass of a gas dissolved per unit volume of solvent is directly proportional to the pressure of the gas in equilibrium with the liquid.",
      ans: 0,
      exp: "$m \\propto p \\implies m_2/m_1 = p_2/p_1 = 2$."
    },
    {
      a: "Ammonia gas dissolves in water with extreme solubility.",
      r: "Ammonia readily forms extensive hydrogen bonds with water molecules and partially ionizes to form $\\text{NH}_4^+$ and $\\text{OH}^-$ ions.",
      ans: 0,
      exp: "Hydrogen bonding and chemical reaction with water enable enormous solubility of $\\text{NH}_3$ (~$700\\text{ volumes of gas per volume of water}$)."
    },
    {
      a: "During scuba diving, rapid decompression causes nitrogen gas to form bubbles in the bloodstream.",
      r: "The solubility of nitrogen in blood decreases dramatically as the ambient hydrostatic pressure drops during ascent.",
      ans: 0,
      exp: "Following Henry's law, a rapid decrease in external pressure reduces nitrogen solubility, nucleating gas bubbles in capillaries and joints (decompression sickness)."
    },
    {
      a: "Henry's law constant $K_H$ depends only on the temperature and is independent of the nature of the gas.",
      r: "Different gases have different intermolecular interaction forces with the solvent.",
      ans: 3,
      exp: "(A) is false because $K_H$ is characteristic of both the specific gas and solvent pair. (R) is true."
    }
  ];

  arData.forEach(d => list.push(createAR(st, d.a, d.r, d.ans, d.exp)));

  // 8 MCQs
  const mcqData = [
    {
      q: "According to Henry's law, the relationship between partial pressure of a gas ($p$) and its mole fraction in solution ($\\chi$) is given by:",
      opts: ["$p = K_H \\chi$", "$p = \\frac{K_H}{\\chi}$", "$\\chi = K_H p^2$", "$p = K_H + \\chi$"],
      ans: 0,
      exp: "Henry's law is mathematically formulated as $p = K_H \\chi$, where $K_H$ is Henry's law constant."
    },
    {
      q: "Which of the following statements about Henry's law constant ($K_H$) is correct?",
      opts: [
        "Higher $K_H$ at a given pressure indicates lower solubility of the gas",
        "Higher $K_H$ at a given pressure indicates higher solubility of the gas",
        "$K_H$ decreases continuously with increasing temperature",
        "$K_H$ is identical for all gases in a given solvent"
      ],
      ans: 0,
      exp: "Since $\\chi = p/K_H$, for a constant pressure $p$, a larger $K_H$ yields a smaller dissolved mole fraction $\\chi$."
    },
    {
      q: "Why are scuba divers' breathing tanks filled with air diluted with helium?",
      opts: [
        "To avoid the toxic effects of high nitrogen concentration and prevent 'the bends'",
        "To increase the density of the breathing mixture",
        "To increase the rate of oxygen absorption in blood",
        "Because helium reacts chemically with blood to release oxygen"
      ],
      ans: 0,
      exp: "Helium is less soluble in blood than nitrogen, minimizing nitrogen dissolution at high depths and preventing bubble formation upon ascent."
    },
    {
      q: "The value of Henry's law constant $K_H$ for gas $A$ is $100\\text{ kbar}$ and for gas $B$ is $50\\text{ kbar}$ in water at $298\\text{ K}$. At the same partial pressure, which gas is more soluble in water?",
      opts: ["Gas $B$", "Gas $A$", "Both have identical solubility", "Neither gas is soluble"],
      ans: 0,
      exp: "Solubility is inversely proportional to $K_H$ at constant pressure: $\\chi = p/K_H$. Since $K_H(B) < K_H(A)$, gas $B$ has higher solubility."
    },
    {
      q: "Why do soft drink manufacturers pack bottles under high carbon dioxide pressure?",
      opts: [
        "To increase the solubility of carbon dioxide in the beverage",
        "To prevent glass bottles from collapsing",
        "To keep the beverage warm",
        "To decrease the acidity of the beverage"
      ],
      ans: 0,
      exp: "By Henry's law ($p = K_H \\chi$), increasing the headspace $\\text{CO}_2$ pressure increases the concentration of dissolved $\\text{CO}_2$."
    },
    {
      q: "At high altitudes, people suffer from anoxia primarily because:",
      opts: [
        "Low atmospheric pressure reduces the partial pressure of oxygen, lowering its solubility in blood",
        "High atmospheric pressure forces excess nitrogen into blood",
        "Temperature is too low for oxygen to dissolve",
        "Carbon dioxide displaces oxygen completely from hemoglobin"
      ],
      ans: 0,
      exp: "Lower atmospheric pressure means lower $p_{\\text{O}_2}$, reducing dissolved oxygen in blood and causing hypoxia."
    },
    {
      q: "Which of the following gases does NOT obey Henry's law strictly when dissolved in water?",
      opts: ["$\\text{NH}_3$", "$\\text{N}_2$", "$\\text{O}_2$", "$\\text{He}$"],
      ans: 0,
      exp: "$\\text{NH}_3$ reacts chemically with water to form $\\text{NH}_4^+$ and $\\text{OH}^-$, violating Henry's law which requires no chemical reaction."
    },
    {
      q: "How does the solubility of a gas in a liquid change with an increase in temperature?",
      opts: ["Decreases", "Increases", "Remains unchanged", "First increases then decreases"],
      ans: 0,
      exp: "Gas dissolution is exothermic ($\\Delta H < 0$). By Le Chatelier's principle, raising temperature drives the gas out of solution, decreasing solubility."
    }
  ];

  mcqData.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  // 15 Numericals
  list.push(createNumerical(st,
    "The Henry's law constant for nitrogen gas in water at $293\\text{ K}$ is $76.48\\text{ kbar}$. If the partial pressure of nitrogen gas is $0.987\\text{ bar}$, calculate the mole fraction of nitrogen in water at $293\\text{ K}$ in units of $10^{-5}$ (rounded to two decimal places).",
    "1.29",
    "$\\chi = \\frac{p}{K_H} = \\frac{0.987\\text{ bar}}{76480\\text{ bar}} = 1.2905 \\times 10^{-5}$. In units of $10^{-5}$, the answer is $1.29$."
  ));
  list.push(createNumerical(st,
    "If nitrogen gas is bubbled through water at $293\\text{ K}$, how many millimoles of $\\text{N}_2$ gas would dissolve in $1\\text{ L}$ of water? (Partial pressure of $\\text{N}_2 = 0.987\\text{ bar}$, $K_H = 76.48\\text{ kbar}$, density of water $= 1\\text{ g mL}^{-1}$, rounded to two decimal places).",
    "0.72",
    "Moles of water in $1\\text{ L} = 1000/18 = 55.55\\text{ mol}$. $\\chi_{\\text{N}_2} = n_{\\text{N}_2}/55.55 = 1.29 \\times 10^{-5} \\implies n_{\\text{N}_2} = 1.29 \\times 10^{-5} \\times 55.55 = 7.166 \\times 10^{-4}\\text{ mol} = 0.72\\text{ mmol}$."
  ));
  list.push(createNumerical(st,
    "The Henry's law constant for oxygen in water at $293\\text{ K}$ is $34.86\\text{ kbar}$. If the partial pressure of oxygen is $0.20\\text{ bar}$, calculate the mole fraction of oxygen dissolved in water in units of $10^{-6}$ (rounded to two decimal places).",
    "5.74",
    "$\\chi = \\frac{0.20}{34860} = 5.737 \\times 10^{-6}$. In units of $10^{-6}$, the answer is $5.74$."
  ));
  list.push(createNumerical(st,
    "The solubility of a gas in water at $1\\text{ atm}$ pressure is $0.02\\text{ g L}^{-1}$. What will be its solubility in $\\text{g L}^{-1}$ at $4\\text{ atm}$ pressure at the same temperature?",
    "0.08",
    "By Henry's law, $S_1 / P_1 = S_2 / P_2 \\implies S_2 = 0.02 \\times (4/1) = 0.08\\text{ g L}^{-1}$."
  ));
  list.push(createNumerical(st,
    "Henry's law constant for $\\text{CO}_2$ in water is $1.67 \\times 10^8\\text{ Pa}$ at $298\\text{ K}$. Calculate the quantity of $\\text{CO}_2$ (in grams) in $500\\text{ mL}$ of soda water packed under $2.5\\text{ atm}$ ($2.5325 \\times 10^5\\text{ Pa}$) $\\text{CO}_2$ pressure. (Molar mass of $\\text{CO}_2 = 44\\text{ g mol}^{-1}$, rounded to two decimal places).",
    "1.85",
    "$\\chi = p/K_H = \\frac{2.5325 \\times 10^5}{1.67 \\times 10^8} = 1.516 \\times 10^{-3}$. In $500\\text{ mL}$ water, moles of water $= 500/18 = 27.78\\text{ mol}$. Moles of $\\text{CO}_2 = 1.516 \\times 10^{-3} \\times 27.78 = 0.0421\\text{ mol}$. Mass $= 0.0421 \\times 44 = 1.85\\text{ g}$."
  ));
  list.push(createNumerical(st,
    "If $0.004\\text{ g}$ of a gas dissolves in $100\\text{ mL}$ of water at $1\\text{ atm}$, what mass of the gas (in milligrams) will dissolve in $100\\text{ mL}$ of water at $5\\text{ atm}$ pressure?",
    "20",
    "Mass dissolved $\\propto P \\implies m_2 = 0.004 \\times 5 = 0.020\\text{ g} = 20\\text{ mg}$."
  ));
  list.push(createNumerical(st,
    "The Henry's law constant for dissolution of a gas in water is $5.0 \\times 10^4\\text{ bar}$. At what partial pressure of the gas (in bar) will its mole fraction in water be $2.0 \\times 10^{-5}$?",
    "1",
    "$p = K_H \\chi = (5.0 \\times 10^4\\text{ bar}) \\times (2.0 \\times 10^{-5}) = 1.0\\text{ bar}$."
  ));
  list.push(createNumerical(st,
    "What is the mole fraction of a gas dissolved in water if its partial pressure is $0.5\\text{ bar}$ and its Henry's law constant is $2.5 \\times 10^4\\text{ bar}$? Express your answer in units of $10^{-5}$.",
    "2",
    "$\\chi = p/K_H = 0.5 / (2.5 \\times 10^4) = 2.0 \\times 10^{-5}$. Thus, the answer is $2$."
  ));
  list.push(createNumerical(st,
    "The solubility of nitrogen gas in water at $25^\\circ\\text{C}$ and $1\\text{ bar}$ is $6.8 \\times 10^{-4}\\text{ mol L}^{-1}$. What is the Henry's law constant in $\\text{L bar mol}^{-1}$ (to the nearest integer)?",
    "1471",
    "$K_H = P/C = 1 / (6.8 \\times 10^{-4}) \\approx 1470.58 \\approx 1471\\text{ L bar mol}^{-1}$."
  ));
  list.push(createNumerical(st,
    "How many grams of oxygen are dissolved in $1000\\text{ g}$ of water at $20^\\circ\\text{C}$ if the partial pressure of oxygen is $0.2\\text{ atm}$ and its mole fraction solubility is $4.6 \\times 10^{-6}$? (Molar mass of $\\text{O}_2 = 32\\text{ g mol}^{-1}$, rounded to three decimal places).",
    "0.008",
    "Moles of water $= 1000/18 = 55.55\\text{ mol}$. Moles of $\\text{O}_2 = 4.6 \\times 10^{-6} \\times 55.55 = 2.555 \\times 10^{-4}\\text{ mol}$. Mass $= 2.555 \\times 10^{-4} \\times 32 = 0.00818\\text{ g} \\approx 0.008\\text{ g}$."
  ));
  list.push(createNumerical(st,
    "If Henry's law constant for argon in water is $40\\text{ kbar}$, what is the partial pressure of argon (in bar) required to dissolve argon to a mole fraction of $1.0 \\times 10^{-5}$?",
    "0.4",
    "$p = K_H \\chi = (40000\\text{ bar}) \\times (1.0 \\times 10^{-5}) = 0.4\\text{ bar}$."
  ));
  list.push(createNumerical(st,
    "At $20^\\circ\\text{C}$, the solubility of $\\text{H}_2\\text{S}$ gas in water is $0.195\\text{ m}$. Calculate Henry's law constant ($K_H$) in bar (to the nearest integer) assuming standard pressure $p = 0.987\\text{ bar}$.",
    "282",
    "In $0.195\\text{ m}$ solution, $n_{\\text{H}_2\\text{S}} = 0.195\\text{ mol}$, $n_{\\text{water}} = 1000/18 = 55.55\\text{ mol}$. $\\chi = \\frac{0.195}{0.195 + 55.55} = \\frac{0.195}{55.745} = 0.003498$. $K_H = p/\\chi = 0.987 / 0.003498 \\approx 282.16 \\approx 282\\text{ bar}$."
  ));
  list.push(createNumerical(st,
    "A certain soft drink is carbonated with $\\text{CO}_2$ at $3.0\\text{ atm}$. If the Henry's law constant is $30\\text{ L atm mol}^{-1}$, what is the concentration of dissolved $\\text{CO}_2$ in $\\text{mol L}^{-1}$?",
    "0.1",
    "$C = P/K_H = 3.0 / 30 = 0.1\\text{ mol L}^{-1}$."
  ));
  list.push(createNumerical(st,
    "What is the ratio of solubility of a gas at $10\\text{ atm}$ to that at $2\\text{ atm}$ in the same solvent at the same temperature?",
    "5",
    "Solubility is directly proportional to pressure: $S_2/S_1 = P_2/P_1 = 10/2 = 5$."
  ));
  list.push(createNumerical(st,
    "Calculate the mole fraction of methane in benzene at $298\\text{ K}$ under $760\\text{ mm Hg}$ if Henry's law constant is $4.27 \\times 10^5\\text{ mm Hg}$ (in units of $10^{-3}$, rounded to two decimal places).",
    "1.78",
    "$\\chi = p/K_H = 760 / (4.27 \\times 10^5) = 1.7798 \\times 10^{-3} \\approx 1.78 \\times 10^{-3}$. The answer is $1.78$."
  ));

  return list;
}

// -------------------------------------------------------------
// Subtopic: Vapour pressure of liquid solutions (5 Qs: 4 MCQ, 1 NUM)
// -------------------------------------------------------------
function buildVapourPressureLiquid() {
  const st = "Vapour pressure of liquid solutions";
  const list = [];

  const mcqs = [
    {
      q: "Vapour pressure of a pure liquid depends primarily on:",
      opts: ["Temperature and intermolecular forces", "Surface area of the liquid", "Volume of liquid taken", "Shape of the container"],
      ans: 0,
      exp: "Vapour pressure is an intensive equilibrium property determined strictly by the nature of the liquid (intermolecular attractive forces) and temperature."
    },
    {
      q: "When a non-volatile solute is dissolved in a volatile liquid solvent, the vapour pressure of the solution:",
      opts: ["Decreases", "Increases", "Remains unchanged", "Drops to absolute zero"],
      ans: 0,
      exp: "Non-volatile solute particles occupy a fraction of the liquid surface, reducing the surface area available for solvent molecules to escape into the vapor phase."
    },
    {
      q: "The normal boiling point of a liquid is the temperature at which its equilibrium vapour pressure equals:",
      opts: ["$1.013\\text{ bar}$ ($1\\text{ atm}$)", "$1.000\\text{ bar}$", "$0.500\\text{ bar}$", "$2.000\\text{ bar}$"],
      ans: 0,
      exp: "Normal boiling point is defined when the vapour pressure reaches exactly $1\\text{ standard atmosphere} = 1.01325\\text{ bar}$."
    },
    {
      q: "Which of the following liquids has the highest vapour pressure at $25^\\circ\\text{C}$?",
      opts: ["Diethyl ether", "Ethanol", "Water", "Glycerol"],
      ans: 0,
      exp: "Diethyl ether has weak dipole-dipole interactions and no hydrogen bonding, resulting in high volatility and the highest vapour pressure."
    }
  ];

  mcqs.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  list.push(createNumerical(st,
    "The vapour pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. When a non-volatile solute is added, the vapour pressure drops to $23.324\\text{ mm Hg}$. What is the relative lowering of vapour pressure ($\\\\frac{P^\\circ - P}{P^\\circ}$) rounded to two decimal places?",
    "0.02",
    "$\\frac{P^\\circ - P}{P^\\circ} = \\frac{23.8 - 23.324}{23.8} = \\frac{0.476}{23.8} = 0.02$."
  ));

  return list;
}

// -------------------------------------------------------------
// Subtopic: Raoult's law (48 Qs: 26 AR, 7 MCQ, 15 NUM)
// -------------------------------------------------------------
function buildRaoultsLaw() {
  const st = "Raoult's law";
  const list = [];

  const arData = [
    {
      a: "According to Raoult's law, for a solution of volatile liquids, the partial vapour pressure of each component is directly proportional to its mole fraction in the solution.",
      r: "At equilibrium, the rate of evaporation of a component is proportional to the number of its molecules exposed on the liquid surface.",
      ans: 0,
      exp: "Surface occupancy is proportional to mole fraction $\\chi_i$. Hence, rate of evaporation and partial vapour pressure obey $p_i = P_i^\\circ \\chi_i$."
    },
    {
      a: "For a binary solution containing a non-volatile solute, Raoult's law states that the relative lowering of vapour pressure is equal to the mole fraction of the solute.",
      r: "The non-volatile solute particles occupy surface sites, thereby reducing the escaping tendency of the solvent molecules into the vapour phase.",
      ans: 0,
      exp: "$P_{\\text{soln}} = P_A^\\circ \\chi_A = P_A^\\circ (1 - \\chi_B) \\implies \\frac{P_A^\\circ - P_{\\text{soln}}}{P_A^\\circ} = \\chi_B$."
    },
    {
      a: "In a binary liquid mixture obeying Raoult's law, the total vapour pressure is always intermediate between the vapour pressures of the two pure components.",
      r: "The total vapour pressure is given by $P_{\\text{total}} = P_A^\\circ + (P_B^\\circ - P_A^\\circ)\\chi_B$, which is a linear function of the mole fraction of component $B$.",
      ans: 0,
      exp: "Linear combination $P_{\\text{total}} = P_A^\\circ \\chi_A + P_B^\\circ \\chi_B$ with $\\chi_A + \\chi_B = 1$ ensures that $P_{\\text{total}}$ lies strictly between $P_A^\\circ$ and $P_B^\\circ$."
    },
    {
      a: "The vapour phase above an ideal binary solution is always richer in the more volatile component compared to the liquid phase.",
      r: "According to Dalton's law and Raoult's law, the mole fraction in the vapour phase is $y_A = \\frac{P_A^\\circ \\chi_A}{P_{\\text{total}}}$, so if $P_A^\\circ > P_B^\\circ$, then $y_A > \\chi_A$.",
      ans: 0,
      exp: "Konovalov's rule confirms that the vapour phase is richer in the component whose addition increases the total vapour pressure (the more volatile component)."
    },
    {
      a: "Raoult's law is applicable only to ideal solutions.",
      r: "In non-ideal solutions, solute-solvent intermolecular interactions differ significantly from solute-solute and solvent-solvent interactions.",
      ans: 0,
      exp: "Ideal behavior requires $A-B$ interactions to be identical to $A-A$ and $B-B$ interactions, which defines obedience to Raoult's law over the entire composition range."
    },
    {
      a: "Addition of a non-volatile solute to a solvent lowers the vapour pressure of the solvent.",
      r: "The presence of non-volatile solute molecules reduces the fraction of surface area occupied by solvent molecules.",
      ans: 0,
      exp: "Only solvent molecules on the surface can vaporize. Solute molecules reduce available surface sites, lowering the rate of vaporization."
    },
    {
      a: "Relative lowering of vapour pressure is a colligative property.",
      r: "Relative lowering of vapour pressure depends solely on the mole fraction (number of particles) of the solute and not on its chemical nature.",
      ans: 0,
      exp: "By definition, $\\frac{\\Delta P}{P^\\circ} = \\chi_2$, which depends on the number of solute particles, making it a colligative property."
    },
    {
      a: "A mixture of benzene and toluene strictly obeys Raoult's law over the entire concentration range.",
      r: "Benzene and toluene have nearly identical molecular structures, sizes, and intermolecular dispersion forces, forming an ideal solution.",
      ans: 0,
      exp: "Similar polarity and molecular structures mean $A-B$ interactions equal $A-A$ and $B-B$ interactions, fulfilling Raoult's law."
    },
    {
      a: "The vapour pressure of a solution containing $1\\text{ mole}$ of urea in $1000\\text{ g}$ of water is lower than that of pure water.",
      r: "Urea is a non-volatile solute that lowers the escaping tendency of water molecules from the solution surface.",
      ans: 0,
      exp: "Dissolution of non-volatile urea lowers water's vapour pressure according to Raoult's law."
    },
    {
      a: "A plot of $P_{\\text{total}}$ versus the mole fraction of component in the liquid phase ($\\chi_A$) for an ideal solution is a straight line.",
      r: "$P_{\\text{total}} = P_B^\\circ + (P_A^\\circ - P_B^\\circ)\\chi_A$, which represents a linear algebraic equation in $\\chi_A$.",
      ans: 0,
      exp: "Total pressure is a linear function of liquid mole fraction, connecting $P_B^\\circ$ at $\\chi_A = 0$ to $P_A^\\circ$ at $\\chi_A = 1$."
    },
    {
      a: "A plot of $1/P_{\\text{total}}$ versus the mole fraction of component $A$ in the vapour phase ($y_A$) is linear.",
      r: "Combining Raoult's law and Dalton's law gives $\\frac{1}{P_{\\text{total}}} = \\frac{y_A}{P_A^\\circ} + \\frac{y_B}{P_B^\\circ} = \\frac{1}{P_B^\\circ} + \\left(\\frac{1}{P_A^\\circ} - \\frac{1}{P_B^\\circ}\\right)y_A$.",
      ans: 0,
      exp: "This fundamental thermodynamic relation connects total pressure linearly to vapour composition in fractional distillation."
    },
    {
      a: "Distillation can completely separate the components of an ideal binary mixture.",
      r: "For an ideal solution, the vapour phase composition is always different from the liquid phase composition at all concentrations (no azeotrope formation).",
      ans: 0,
      exp: "Ideal mixtures do not form azeotropes, allowing complete separation into pure components via fractional distillation."
    },
    {
      a: "The vapour pressure of a solvent in a solution is always greater than the vapour pressure of the pure solvent.",
      r: "Solute molecules attract solvent molecules and push them into the vapour phase.",
      ans: 3,
      exp: "Both (A) and (R) are false. The vapour pressure of solvent in a solution containing a non-volatile solute is always lower than pure solvent."
    },
    {
      a: "An equimolar mixture of $n$-hexane and $n$-heptane behaves as an ideal solution.",
      r: "Both $n$-hexane and $n$-heptane are straight-chain non-polar alkanes with very similar London dispersion forces.",
      ans: 0,
      exp: "Near identical structures and intermolecular forces make $n$-hexane + $n$-heptane a classical ideal solution obeying Raoult's law."
    },
    {
      a: "Lowering of vapour pressure is dimensionless.",
      r: "Relative lowering of vapour pressure is the ratio of lowering of vapour pressure to pure solvent vapour pressure.",
      ans: 3,
      exp: "(A) is false; lowering of vapour pressure ($\Delta P = P^\circ - P$) has units of pressure (mmHg, bar, Pa). Relative lowering ($\Delta P/P^\circ$) is dimensionless. (R) is true."
    },
    {
      a: "Bromoethane and chloroethane form an ideal solution obeying Raoult's law.",
      r: "They have similar polarity, molecular sizes, and intermolecular dipole-dipole attractions.",
      ans: 0,
      exp: "Close chemical similarity ensures $\Delta H_{\text{mix}} = 0$ and $\Delta V_{\text{mix}} = 0$, forming an ideal solution."
    },
    {
      a: "For a very dilute solution containing a non-volatile solute, $\\frac{P^\\circ - P}{P^\\circ} \\approx \\frac{n_2}{n_1} = \\frac{w_2 M_1}{M_2 w_1}$.",
      r: "In dilute solutions, the number of moles of solute ($n_2$) is negligible compared to the moles of solvent ($n_1$) in the denominator ($n_1 + n_2 \\approx n_1$).",
      ans: 0,
      exp: "Approximating $\\chi_2 = \\frac{n_2}{n_1 + n_2} \\approx \\frac{n_2}{n_1}$ gives the standard molar mass determination formula."
    },
    {
      a: "The exact form of Raoult's law for non-volatile solutes without any dilution approximation is $\\frac{P^\\circ - P}{P} = \\frac{n_2}{n_1}$.",
      r: "Dividing $\\Delta P = P^\\circ - P = P^\\circ \\frac{n_2}{n_1+n_2}$ by $P = P^\\circ \\frac{n_1}{n_1+n_2}$ directly gives $\\frac{P^\\circ - P}{P} = \\frac{n_2}{n_1}$.",
      ans: 0,
      exp: "Using $P$ in the denominator instead of $P^\circ$ provides the mathematically exact relationship valid at any concentration."
    },
    {
      a: "The boiling point of a solution containing a non-volatile solute is higher than that of the pure solvent.",
      r: "Because the non-volatile solute lowers the vapour pressure, the solution must be heated to a higher temperature for its vapour pressure to reach atmospheric pressure.",
      ans: 0,
      exp: "Boiling occurs when vapour pressure equals atmospheric pressure. Lower vapour pressure necessitates a higher temperature to boil."
    },
    {
      a: "Vapour pressure of water decreases when salt ($\\text{NaCl}$) is dissolved in it.",
      r: "Hydrated sodium and chloride ions attract water dipoles strongly, reducing the escaping tendency of water molecules.",
      ans: 0,
      exp: "Ion-dipole attractions and surface site occupancy reduce the rate of evaporation, lowering the vapour pressure."
    },
    {
      a: "Ostwald and Walker method is used to measure the relative lowering of vapour pressure experimentally.",
      r: "Dry air is bubbled successively through the solution, solvent, and drying tubes containing anhydrous $\\text{CaCl}_2$, and mass losses are measured.",
      ans: 0,
      exp: "The Ostwald-Walker dynamic method measures mass loss of solution ($\propto P$) and solvent ($\propto P^\circ - P$) to compute relative lowering."
    },
    {
      a: "Raoult's law applies to non-ideal solutions with equal accuracy across all concentrations.",
      r: "Non-ideal solutions exhibit significant deviations from Raoult's law due to differences in intermolecular interactions.",
      ans: 3,
      exp: "(A) is false because non-ideal solutions deviate from Raoult's law. (R) is true."
    },
    {
      a: "At a given temperature, the vapour pressure of a $0.1\\text{ M}$ aqueous glucose solution is identical to that of a $0.1\\text{ M}$ aqueous urea solution.",
      r: "Both glucose and urea are non-volatile non-electrolytes that do not dissociate or associate in water, producing equal particle concentrations.",
      ans: 0,
      exp: "Equal molal/molar concentrations of non-electrolytes produce identical relative lowering of vapour pressure."
    },
    {
      a: "The vapour pressure of an aqueous solution containing $1\\text{ mol}$ of $\\text{NaCl}$ in $1\\text{ kg}$ of water is lower than that containing $1\\text{ mol}$ of glucose in $1\\text{ kg}$ of water.",
      r: "$\\text{NaCl}$ dissociates completely in water to yield two moles of ions per mole of solute, causing twice the lowering of vapour pressure.",
      ans: 0,
      exp: "Colligative properties depend on the total number of solute particles: $i = 2$ for $\\text{NaCl}$ vs $i = 1$ for glucose."
    },
    {
      a: "An azeotropic mixture boils at a constant temperature without any change in composition.",
      r: "Azeotropes are binary mixtures where the vapour phase composition is identical to the liquid phase composition ($y_i = \\chi_i$).",
      ans: 0,
      exp: "When $y_i = \\chi_i$, vaporization does not alter the relative ratio of components, resulting in constant-boiling azeotropes."
    },
    {
      a: "A solution of chloroform and acetone shows positive deviation from Raoult's law.",
      r: "Intermolecular hydrogen bonding between chloroform and acetone is weaker than the forces in the pure liquids.",
      ans: 3,
      exp: "Both (A) and (R) are false. Chloroform and acetone form strong intermolecular hydrogen bonds, showing negative deviation from Raoult's law."
    }
  ];

  arData.forEach(d => list.push(createAR(st, d.a, d.r, d.ans, d.exp)));

  // 7 MCQs
  const mcqData = [
    {
      q: "For a binary solution of two volatile liquids $A$ and $B$, the total vapour pressure is expressed by Raoult's law as:",
      opts: [
        "$P_{\\text{total}} = P_A^\\circ \\chi_A + P_B^\\circ \\chi_B$",
        "$P_{\\text{total}} = P_A^\\circ + P_B^\\circ$",
        "$P_{\\text{total}} = \\frac{P_A^\\circ \\chi_A}{P_B^\\circ \\chi_B}$",
        "$P_{\\text{total}} = P_A^\\circ \\chi_B + P_B^\\circ \\chi_A$"
      ],
      ans: 0,
      exp: "According to Raoult's law, total pressure is the sum of partial pressures: $P_{\\text{total}} = P_A + P_B = P_A^\\circ \\chi_A + P_B^\\circ \\chi_B$."
    },
    {
      q: "The mole fraction of component $A$ in the vapour phase ($y_A$) in equilibrium with an ideal liquid solution is given by:",
      opts: [
        "$y_A = \\frac{P_A^\\circ \\chi_A}{P_{\\text{total}}}$",
        "$y_A = \\frac{P_A^\\circ}{\\chi_A}$",
        "$y_A = \\chi_A P_{\\text{total}}$",
        "$y_A = \\frac{P_{\\text{total}}}{P_A^\\circ \\chi_A}$"
      ],
      ans: 0,
      exp: "By Dalton's law of partial pressures, $y_A = P_A / P_{\\text{total}} = \\frac{P_A^\\circ \\chi_A}{P_{\\text{total}}}$."
    },
    {
      q: "Which of the following pairs of liquids forms an ideal solution obeying Raoult's law?",
      opts: [
        "Benzene and toluene",
        "Ethanol and acetone",
        "Chloroform and acetone",
        "Phenol and aniline"
      ],
      ans: 0,
      exp: "Benzene and toluene have virtually identical molecular structures and intermolecular dispersion forces, forming an ideal solution."
    },
    {
      q: "The vapour pressure of pure liquids $A$ and $B$ are $400\\text{ mm Hg}$ and $600\\text{ mm Hg}$ respectively. If the mole fraction of $A$ in the liquid solution is $0.4$, the total vapour pressure of the solution is:",
      opts: ["$520\\text{ mm Hg}$", "$500\\text{ mm Hg}$", "$480\\text{ mm Hg}$", "$460\\text{ mm Hg}$"],
      ans: 0,
      exp: "$P_{\\text{total}} = (400 \\times 0.4) + (600 \\times 0.6) = 160 + 360 = 520\\text{ mm Hg}$."
    },
    {
      q: "In the above solution ($P_A^\\circ = 400\\text{ mm Hg}, P_B^\\circ = 600\\text{ mm Hg}, \\chi_A = 0.4$), what is the mole fraction of component $A$ in the vapour phase ($y_A$)?",
      opts: ["$0.308$", "$0.400$", "$0.692$", "$0.500$"],
      ans: 0,
      exp: "$P_A = 400 \\times 0.4 = 160\\text{ mm Hg}$. $P_{\\text{total}} = 520\\text{ mm Hg}$. $y_A = 160/520 = 0.3077 \\approx 0.308$."
    },
    {
      q: "According to Raoult's law, relative lowering of vapour pressure for a solution containing a non-volatile solute is equal to:",
      opts: [
        "Mole fraction of the solute",
        "Mole fraction of the solvent",
        "Molarity of the solution",
        "Mass fraction of the solvent"
      ],
      ans: 0,
      exp: "$\\frac{P^\\circ - P}{P^\\circ} = \\chi_{\\text{solute}}$."
    },
    {
      q: "If two liquids $A$ and $B$ form an ideal solution with $P_A^\\circ > P_B^\\circ$, then:",
      opts: [
        "The vapour phase is richer in $A$ than the liquid phase ($y_A > \\chi_A$)",
        "The vapour phase is richer in $B$ than the liquid phase",
        "Both phases have identical compositions",
        "Component $A$ does not vaporize"
      ],
      ans: 0,
      exp: "Since $A$ has higher pure vapour pressure, it is more volatile and concentrates preferentially in the vapour phase."
    }
  ];

  mcqData.forEach(m => list.push(createMCQ(st, m.q, m.opts, m.ans, m.exp)));

  // 15 Numericals
  list.push(createNumerical(st,
    "The vapour pressure of pure benzene at $300\\text{ K}$ is $100\\text{ mm Hg}$ and that of pure toluene is $40\\text{ mm Hg}$. What is the total vapour pressure (in $\\text{mm Hg}$) of an equimolar solution of benzene and toluene?",
    "70",
    "$\\chi_A = 0.5, \\chi_B = 0.5$. $P_{\\text{total}} = (100 \\times 0.5) + (40 \\times 0.5) = 50 + 20 = 70\\text{ mm Hg}$."
  ));
  list.push(createNumerical(st,
    "For the equimolar solution of benzene and toluene above ($P_{\\text{benzene}} = 50\\text{ mm Hg}, P_{\\text{total}} = 70\\text{ mm Hg}$), calculate the mole fraction of benzene in the vapour phase rounded to two decimal places.",
    "0.71",
    "$y_{\\text{benzene}} = 50/70 = 5/7 \\approx 0.714 \\approx 0.71$."
  ));
  list.push(createNumerical(st,
    "The vapour pressure of pure water at $20^\\circ\\text{C}$ is $17.5\\text{ mm Hg}$. What is the vapour pressure (in $\\text{mm Hg}$) of a solution containing $18\\text{ g}$ of glucose in $178.2\\text{ g}$ of water? (Molar mass of glucose $= 180\\text{ g mol}^{-1}$, water $= 18\\text{ g mol}^{-1}$, rounded to two decimal places).",
    "17.33",
    "Moles of glucose $= 18/180 = 0.1\\text{ mol}$. Moles of water $= 178.2/18 = 9.9\\text{ mol}$. Total moles $= 10.0\\text{ mol}$. $\\chi_{\\text{water}} = 9.9/10 = 0.99$. $P = 17.5 \\times 0.99 = 17.325 \\approx 17.33\\text{ mm Hg}$."
  ));
  list.push(createNumerical(st,
    "At $25^\\circ\\text{C}$, the vapour pressure of pure water is $23.8\\text{ torr}$. What is the lowering of vapour pressure (in torr) when $0.1\\text{ mole}$ of a non-volatile non-electrolyte solute is added to $9.9\\text{ moles}$ of water?",
    "0.238",
    "$\\chi_2 = 0.1 / (0.1 + 9.9) = 0.1 / 10 = 0.01$. $\\Delta P = P^\\circ \\chi_2 = 23.8 \\times 0.01 = 0.238\\text{ torr}$."
  ));
  list.push(createNumerical(st,
    "An ideal liquid mixture of $A$ and $B$ has $P_A^\\circ = 300\\text{ mm Hg}$ and $P_B^\\circ = 100\\text{ mm Hg}$. What is the mole fraction of $A$ in the liquid phase if the total vapour pressure is $200\\text{ mm Hg}$?",
    "0.5",
    "$P_{\\text{total}} = P_B^\\circ + (P_A^\\circ - P_B^\\circ)\\chi_A \\implies 200 = 100 + 200\\chi_A \\implies \\chi_A = 100/200 = 0.5$."
  ));
  list.push(createNumerical(st,
    "The vapour pressures of pure ethanol and pure methanol at $20^\\circ\\text{C}$ are $44\\text{ mm Hg}$ and $94\\text{ mm Hg}$ respectively. Calculate the total vapour pressure (in $\\text{mm Hg}$) of a solution containing $0.25$ mole fraction of methanol.",
    "56.5",
    "$\\chi_{\\text{methanol}} = 0.25 \\implies \\chi_{\\text{ethanol}} = 0.75$. $P_{\\text{total}} = (94 \\times 0.25) + (44 \\times 0.75) = 23.5 + 33 = 56.5\\text{ mm Hg}$."
  ));
  list.push(createNumerical(st,
    "In the ethanol-methanol solution above ($P_{\\text{total}} = 56.5\\text{ mm Hg}, P_{\\text{methanol}} = 23.5\\text{ mm Hg}$), what is the mole fraction of methanol in the vapour phase rounded to two decimal places?",
    "0.42",
    "$y_{\\text{methanol}} = 23.5 / 56.5 \\approx 0.4159 \\approx 0.42$."
  ));
  list.push(createNumerical(st,
    "A solution is prepared by dissolving $30\\text{ g}$ of a non-volatile solute in $90\\text{ g}$ of water. If the relative lowering of vapour pressure is $0.25$, what is the molar mass of the solute in $\\text{g mol}^{-1}$?",
    "18",
    "$\\frac{P^\\circ - P}{P^\\circ} = \\chi_2 = \\frac{n_2}{n_1 + n_2} = 0.25 \\implies \\frac{n_2}{n_1} = \\frac{0.25}{0.75} = \\frac{1}{3}$. Here $n_1 = 90/18 = 5\\text{ mol}$. So $n_2 = 5/3\\text{ mol}$. Molar mass $M_2 = 30 / (5/3) = 18\\text{ g mol}^{-1}$."
  ));
  list.push(createNumerical(st,
    "The vapour pressure of pure liquid $A$ is $0.80\\text{ bar}$. When a non-volatile solute $B$ is added, its vapour pressure becomes $0.60\\text{ bar}$. What is the mole fraction of solute $B$ in the solution?",
    "0.25",
    "$\\chi_B = \\frac{P_A^\\circ - P}{P_A^\\circ} = \\frac{0.80 - 0.60}{0.80} = \\frac{0.20}{0.80} = 0.25$."
  ));
  list.push(createNumerical(st,
    "Vapour pressure of water at $293\\text{ K}$ is $17.535\\text{ mm Hg}$. Calculate the relative lowering of vapour pressure if $10\\text{ g}$ of glucose ($M_w = 180\\text{ g mol}^{-1}$) is dissolved in $100\\text{ g}$ of water (rounded to three decimal places).",
    "0.010",
    "Moles of glucose $= 10/180 = 0.0556\\text{ mol}$. Moles of water $= 100/18 = 5.556\\text{ mol}$. $\\chi_2 = 0.0556 / (5.556 + 0.0556) = 0.0556 / 5.6116 \\approx 0.0099 \\approx 0.010$."
  ));
  list.push(createNumerical(st,
    "Vapour pressures of chloroform ($\\text{CHCl}_3$) and dichloromethane ($\\text{CH}_2\\text{Cl}_2$) at $298\\text{ K}$ are $200\\text{ mm Hg}$ and $415\\text{ mm Hg}$ respectively. If an equimolar solution of both is prepared, what is the total vapour pressure in $\\text{mm Hg}$?",
    "307.5",
    "$P_{\\text{total}} = (200 \\times 0.5) + (415 \\times 0.5) = 100 + 207.5 = 307.5\\text{ mm Hg}$."
  ));
  list.push(createNumerical(st,
    "In the equimolar chloroform-dichloromethane solution above ($P_{\\text{total}} = 307.5\\text{ mm Hg}, P_{\\text{CH}_2\\text{Cl}_2} = 207.5\\text{ mm Hg}$), what is the mole fraction of dichloromethane in the vapour phase rounded to two decimal places?",
    "0.67",
    "$y = 207.5 / 307.5 \\approx 0.6748 \\approx 0.67$."
  ));
  list.push(createNumerical(st,
    "How many moles of sucrose ($C_{12}H_{22}O_{11}$) must be added to $180\\text{ g}$ of water ($10\\text{ moles}$) to lower its vapour pressure by $10\\%$?",
    "1.11",
    "$\\frac{P^\\circ - P}{P^\\circ} = 0.10 = \\frac{n_2}{n_1 + n_2} \\implies n_2 = 0.10(10 + n_2) \\implies 0.9 n_2 = 1.0 \\implies n_2 = 1/0.9 \\approx 1.11\\text{ mol}$."
  ));
  list.push(createNumerical(st,
    "The vapour pressure of pure water is $24\\text{ mm Hg}$ at $25^\\circ\\text{C}$. What is the vapour pressure (in $\\text{mm Hg}$) of a solution containing $0.1\\text{ mole fraction}$ of a non-volatile solute?",
    "21.6",
    "$P = P^\\circ (1 - \\chi_2) = 24 \\times (1 - 0.1) = 24 \\times 0.9 = 21.6\\text{ mm Hg}$."
  ));
  list.push(createNumerical(st,
    "If the vapour pressure of a solution containing $1\\text{ mol}$ of non-volatile solute in $9\\text{ mol}$ of solvent is $45\\text{ torr}$, what is the vapour pressure of the pure solvent in $\\text{torr}$?",
    "50",
    "$P = P^\\circ \\chi_1 \\implies 45 = P^\\circ (9/10) = 0.9 P^\\circ \\implies P^\\circ = 45 / 0.9 = 50\\text{ torr}$."
  ));

  return list;
}

// Build and validate Part 2
console.log("Validating Part 2...");
const hl = buildHenrysLaw();
const vp = buildVapourPressureLiquid();
const rl = buildRaoultsLaw();

console.log(`Henry's law: ${hl.length} (Expected: 48)`);
console.log(`Vapour pressure of liquid solutions: ${vp.length} (Expected: 5)`);
console.log(`Raoult's law: ${rl.length} (Expected: 48)`);

const allPart2 = [...hl, ...vp, ...rl];
console.log(`Total Part 2 questions: ${allPart2.length} (Expected: 101)`);

allPart2.forEach((q, idx) => {
  checkKatex(q.question, `Part2[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part2[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part2[${idx}].explanation`);
});

console.log("All Part 2 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Solutions Part 2
module.exports = ${JSON.stringify(allPart2, null, 2)};
`;

fs.writeFileSync('scripts/data_solutions_part2.js', fileContent);
console.log("Written scripts/data_solutions_part2.js successfully!");
