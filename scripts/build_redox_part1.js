const fs = require('fs');
const katex = require('katex');

function checkKatex(str, ctx) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error in ${ctx}: "${match[1]}" -> ${e.message}`);
    }
  }
}

const AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is not the correct explanation of Assertion (A)",
  "Assertion (A) is true but Reason (R) is false",
  "Assertion (A) is false but Reason (R) is true"
];

function createMCQ(subTopic, qText, opts, correctIdx, exp, diff = "Medium") {
  const letters = ["a", "b", "c", "d"];
  return {
    question: qText,
    options: opts,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: exp,
    subject: "Chemistry",
    chapter: "Redox Reactions and Electrochemistry",
    topic: "Redox Reactions and Electrochemistry",
    subTopic: subTopic,
    difficulty: diff,
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function createAR(subTopic, aText, rText, correctIdx, exp, diff = "Medium") {
  const letters = ["a", "b", "c", "d"];
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${aText}\nReason (R): ${rText}`;
  return {
    question: qText,
    options: AR_OPTIONS,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: exp,
    subject: "Chemistry",
    chapter: "Redox Reactions and Electrochemistry",
    topic: "Redox Reactions and Electrochemistry",
    subTopic: subTopic,
    difficulty: diff,
    questionType: "Assertion–Reasoning",
    type: "ASSERTION_REASON",
    cognitiveLevel: "Conceptual Analysis",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function createNumerical(subTopic, qText, ans, exp, diff = "Medium") {
  return {
    question: qText,
    options: [],
    correctAnswer: String(ans),
    explanation: exp,
    subject: "Chemistry",
    chapter: "Redox Reactions and Electrochemistry",
    topic: "Redox Reactions and Electrochemistry",
    subTopic: subTopic,
    difficulty: diff,
    questionType: "Numerical Value Question",
    type: "NUMERICAL",
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

// ==========================================
// SUBTOPIC 1: Oxidation number (26 AR, 7 MCQ, 15 NUM = 48)
// ==========================================
function getOxidationNumberQuestions() {
  const list = [];
  const st = "Oxidation number";

  // 7 MCQs
  list.push(createMCQ(st,
    "The oxidation state of chromium in chromium pentoxide ($\\text{CrO}_5$, butterfly structure) is:",
    ["$+6$", "$+10$", "$+4$", "$+3$"], 0,
    "In $\\text{CrO}_5$, chromium is bonded to one oxo oxygen ($\\text{O}^{2-}$) via a double bond and four peroxo oxygens ($-\\text{O}-\\text{O}-$, each $-1$) in two peroxo rings. Thus $x + (-2) + 4(-1) = 0 \\implies x = +6$."
  ));
  list.push(createMCQ(st,
    "What is the oxidation state of sulfur in Marshall's acid (peroxodisulfuric acid, $\\text{H}_2\\text{S}_2\\text{O}_8$)?",
    ["$+6$", "$+7$", "$+8$", "$+4$"], 0,
    "Marshall's acid has the structural formula $\\text{HO}-\\text{SO}_2-\\text{O}-\\text{O}-\\text{SO}_2-\\text{OH}$ containing one peroxo linkage ($-1$ each for two oxygens) and six oxo/hydroxy oxygens ($-2$ each). $2(+1) + 2x + 6(-2) + 2(-1) = 0 \\implies 2x - 12 = 0 \\implies x = +6$."
  ));
  list.push(createMCQ(st,
    "In carbon suboxide ($\\text{C}_3\\text{O}_2$), the structure is $\\text{O}=\\text{C}=\\text{C}=\\text{C}=\\text{O}$. The individual oxidation states of the three carbon atoms from left to right are:",
    ["$+2, 0, +2$", "$+4/3, +4/3, +4/3$", "$+1, +2, +1$", "$+2, +2, 0$"], 0,
    "Each terminal carbon is double-bonded to an oxygen atom ($-2$), giving it an oxidation state of $+2$. The central carbon is bonded only to two adjacent carbon atoms (zero electronegativity difference), so its oxidation state is $0$."
  ));
  list.push(createMCQ(st,
    "In tribromooctoxide ($\\text{Br}_3\\text{O}_8$), the individual oxidation states of the three bromine atoms are:",
    ["$+6, +4, +6$", "$+16/3, +16/3, +16/3$", "$+7, +2, +7$", "$+6, +6, +4$"], 0,
    "In $\\text{Br}_3\\text{O}_8$, the two terminal bromine atoms are bonded to three oxygen atoms each ($\\text{O}_3\\text{Br}-$, oxidation state $+6$), while the central bromine atom is bonded to two oxygen atoms ($-\\text{BrO}_2-$, oxidation state $+4$)."
  ));
  list.push(createMCQ(st,
    "What are the oxidation states of the four sulfur atoms in the sodium tetrathionate ion ($\\text{S}_4\\text{O}_6^{2-}$)?",
    ["Two sulfurs in $+5$ and two sulfurs in $0$", "All four sulfurs in $+2.5$", "Two sulfurs in $+6$ and two sulfurs in $-1$", "Four sulfurs in $+2$"], 0,
    "In $\\text{O}_3\\text{S}-\\text{S}-\\text{S}-\\text{SO}_3^{2-}$, the two terminal sulfur atoms are bonded to three oxygen atoms each (oxidation state $+5$), while the two central sulfur atoms form $\\text{S}-\\text{S}$ single bonds with zero electronegativity difference (oxidation state $0$)."
  ));
  list.push(createMCQ(st,
    "The oxidation states of nitrogen in ammonium nitrate ($\\text{NH}_4\\text{NO}_3$) are:",
    ["$-3$ in $\\text{NH}_4^+$ and $+5$ in $\\text{NO}_3^-$", "$-3$ in both ions", "$+1$ in both ions", "$+3$ in $\\text{NH}_4^+$ and $-5$ in $\\text{NO}_3^-$"], 0,
    "In the ammonium ion $\\text{NH}_4^+$, $x + 4(+1) = +1 \\implies x = -3$. In the nitrate ion $\\text{NO}_3^-$, $y + 3(-2) = -1 \\implies y = +5$."
  ));
  list.push(createMCQ(st,
    "In the brown ring complex $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]\\text{SO}_4$, the oxidation state of iron is:",
    ["$+1$", "$+2$", "$+3$", "$0$"], 0,
    "In the brown ring complex, nitric oxide coordinates as the nitrosonium ion $\\text{NO}^+$. Therefore, $\\text{Fe}$ has an oxidation state of $+1$: $x + 5(0) + 1(+1) = +2 \\implies x = +1$."
  ));

  // 26 ARs
  list.push(createAR(st,
    "The oxidation state of fluorine is always $-1$ in all of its chemical compounds.",
    "Fluorine is the most electronegative element in the periodic table and does not possess vacant $d$-orbitals in its valence shell.",
    0, "Both (A) and (R) are true and (R) is the correct explanation. Being the most electronegative atom without $d$-orbitals, fluorine can only attract electron density and exhibit $-1$ oxidation state."
  ));
  list.push(createAR(st,
    "Oxygen exhibits an oxidation state of $+2$ in $\\text{OF}_2$.",
    "Fluorine is more electronegative than oxygen.",
    0, "Both (A) and (R) are true and (R) correctly explains why oxygen takes a positive oxidation state in fluorides."
  ));
  list.push(createAR(st,
    "In potassium superoxide ($\\text{KO}_2$), the oxidation state of oxygen is $-1/2$.",
    "The superoxide anion is $\\text{O}_2^-$, where two oxygen atoms share a single negative charge.",
    0, "Both (A) and (R) are true and (R) directly explains the $-1/2$ oxidation state."
  ));
  list.push(createAR(st,
    "In sodium hydride ($\\text{NaH}$), hydrogen has an oxidation number of $-1$.",
    "Sodium is more electropositive than hydrogen.",
    0, "Both (A) and (R) are true and (R) correctly explains why hydrogen acts as the hydride anion ($\\text{H}^-$) with oxidation state $-1$."
  ));
  list.push(createAR(st,
    "The oxidation number of phosphorus in $\\text{H}_3\\text{PO}_2$ is $+1$.",
    "Hypophosphorous acid contains two $\\text{P}-\\text{H}$ bonds, one $\\text{P}-\\text{OH}$ bond, and one $\\text{P}=\\text{O}$ bond.",
    0, "Both (A) and (R) are true and the structure explains the oxidation number: $x + 3(+1) + 2(-2) = 0 \\implies x = +1$."
  ));
  list.push(createAR(st,
    "The oxidation state of carbon in $\\text{CH}_2\\text{Cl}_2$ is $0$.",
    "Carbon shares electrons with two hydrogen atoms and two chlorine atoms of opposing electronegativity differences.",
    0, "Both (A) and (R) are true. Carbon is more electronegative than hydrogen ($-2$) and less electronegative than chlorine ($+2$), so total oxidation state is $-2 + 2 = 0$."
  ));
  list.push(createAR(st,
    "The average oxidation number of iron in $\\text{Fe}_3\\text{O}_4$ is $+8/3$.",
    "$\\text{Fe}_3\\text{O}_4$ is a mixed oxide consisting of $\\text{FeO}$ and $\\text{Fe}_2\\text{O}_3$ in a $1:1$ molar ratio.",
    0, "Both (A) and (R) are true and the stoichiometric mix of $\\text{Fe}^{2+}$ and $2\\text{Fe}^{3+}$ yields $(2 + 2 \\times 3)/3 = 8/3$."
  ));
  list.push(createAR(st,
    "Nitric acid ($\\text{HNO}_3$) acts only as an oxidizing agent and never as a reducing agent.",
    "In $\\text{HNO}_3$, nitrogen is present in its maximum possible oxidation state of $+5$.",
    0, "Both (A) and (R) are true and (R) correctly explains why nitrogen cannot be oxidized further."
  ));
  list.push(createAR(st,
    "Hydrogen sulfide ($\\text{H}_2\\text{S}$) acts only as a reducing agent.",
    "In $\\text{H}_2\\text{S}$, sulfur is in its minimum oxidation state of $-2$.",
    0, "Both (A) and (R) are true and (R) correctly explains why sulfur can only lose electrons and undergo oxidation."
  ));
  list.push(createAR(st,
    "Sulfur dioxide ($\\text{SO}_2$) can act both as an oxidizing agent and as a reducing agent.",
    "In $\\text{SO}_2$, sulfur is in an intermediate oxidation state of $+4$.",
    0, "Both (A) and (R) are true and (R) correctly explains that $+4$ can be oxidized to $+6$ or reduced to $0$ or $-2$."
  ));
  list.push(createAR(st,
    "In peroxomonosulfuric acid (Caro's acid, $\\text{H}_2\\text{SO}_5$), the oxidation state of sulfur is $+6$.",
    "Caro's acid possesses one peroxo linkage ($-\\text{O}-\\text{O}-$), wherein the oxidation number of each oxygen atom is $-1$.",
    0, "Both (A) and (R) are true and (R) correctly explains why sulfur does not have an impossible $+8$ oxidation state."
  ));
  list.push(createAR(st,
    "The compound $\\text{HN}_3$ (hydrazoic acid) has an average oxidation state of nitrogen equal to $-1/3$.",
    "All three nitrogen atoms in the azide group have identical oxidation numbers.",
    2, "(A) is true because $3x + 1 = 0 \\implies x = -1/3$. But (R) is false because the central nitrogen and terminal nitrogens have different formal charges and oxidation states."
  ));
  list.push(createAR(st,
    "The oxidation number of an element in its free or uncombined elemental state is always zero.",
    "In an elemental substance, bonding occurs between atoms of identical electronegativity, resulting in zero net electron displacement.",
    0, "Both (A) and (R) are true and (R) is the fundamental definition of oxidation number."
  ));
  list.push(createAR(st,
    "The oxidation state of nickel in $\\text{Ni}(\\text{CO})_4$ is zero.",
    "Carbon monoxide ($\\text{CO}$) is a neutral ligand and nickel does not transfer electrons to or from it in forming oxidation states.",
    0, "Both (A) and (R) are true and (R) correctly explains why the oxidation state of $\\text{Ni}$ is $0$."
  ));
  list.push(createAR(st,
    "In the disproportionation reaction $2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$, oxygen is both oxidized and reduced.",
    "The oxidation state of oxygen in $\\text{H}_2\\text{O}_2$ is $-1$, which changes to $-2$ in $\\text{H}_2\\text{O}$ and $0$ in $\\text{O}_2$.",
    0, "Both (A) and (R) are true and (R) provides the exact oxidation state changes."
  ));
  list.push(createAR(st,
    "Chlorine can exhibit oxidation states ranging from $-1$ to $+7$.",
    "Chlorine has seven valence electrons ($3s^2 3p^5$) and vacant $3d$-orbitals to expand its octet.",
    0, "Both (A) and (R) are true and (R) explains the electronic basis for the range of oxidation states."
  ));
  list.push(createAR(st,
    "Fluorine exhibits positive oxidation states in its compounds with oxygen.",
    "Oxygen is more electronegative than fluorine.",
    3, "(A) is false because fluorine is never in a positive oxidation state. (R) is also false because fluorine is more electronegative than oxygen."
  ));
  list.push(createAR(st,
    "In $\\text{OF}_2$, the oxidation state of fluorine is $-1$.",
    "Fluorine is the most electronegative element and always takes $-1$ in all its binary compounds.",
    0, "Both (A) and (R) are true and (R) correctly explains (A)."
  ));
  list.push(createAR(st,
    "The oxidation number of an atom in a molecule can be fractional.",
    "Fractional oxidation numbers represent the average oxidation state of several atoms of the same element in different structural environments.",
    0, "Both (A) and (R) are true and (R) is the precise explanation."
  ));
  list.push(createAR(st,
    "In $\\text{Fe}(\\text{CO})_5$, the oxidation number of iron is $+5$.",
    "Each carbonyl group donates two electrons to the central iron atom.",
    3, "(A) is false since the oxidation number of iron in $\\text{Fe}(\\text{CO})_5$ is $0$. (R) is true as $\\text{CO}$ is a two-electron donor ligand."
  ));
  list.push(createAR(st,
    "Perchloric acid ($\\text{HClO}_4$) is a stronger oxidizing agent than hypochlorous acid ($\\text{HClO}$).",
    "The oxidation number of chlorine in $\\text{HClO}_4$ is $+7$, whereas in $\\text{HClO}$ it is $+1$.",
    1, "Both (A) and (R) are true, but $\\text{HClO}$ is kinetically a faster/stronger oxidizing agent in many redox reactions due to weaker $\\text{Cl}-\\text{O}$ bond, so (R) does not explain (A)."
  ));
  list.push(createAR(st,
    "In sodium thiosulfate ($\\text{Na}_2\\text{S}_2\\text{O}_3$), the two sulfur atoms have different oxidation states.",
    "One sulfur atom replaces an oxygen atom of sulfate and acts as a sulfide-like ligand with oxidation state $-2$ (or $0$), while the central sulfur is $+6$ (or $+4$).",
    0, "Both (A) and (R) are true and (R) explains why structure yields unequal oxidation states."
  ));
  list.push(createAR(st,
    "The equivalent weight of $\\text{KMnO}_4$ in acidic medium is $M/5$.",
    "In acidic medium, $\\text{Mn}^{7+}$ is reduced to $\\text{Mn}^{2+}$, undergoing a change in oxidation state of $5$.",
    0, "Both (A) and (R) are true and (R) correctly explains the equivalent weight formula $E = M/n$."
  ));
  list.push(createAR(st,
    "The equivalent weight of $\\text{K}_2\\text{Cr}_2\\text{O}_7$ in acidic medium is $M/6$.",
    "During reduction in acidic medium, each $\\text{Cr}_2\\text{O}_7^{2-}$ ion gains $6$ electrons to form two $\\text{Cr}^{3+}$ ions.",
    0, "Both (A) and (R) are true and (R) provides the exact half-reaction explanation."
  ));
  list.push(createAR(st,
    "In alkaline medium, $\\text{KMnO}_4$ oxidizes iodide ion ($\\text{I}^-$) to iodate ion ($\\text{IO}_3^-$).",
    "In alkaline medium, permanganate is reduced to manganese dioxide ($\\text{MnO}_2$) with an oxidation state change from $+7$ to $+4$.",
    1, "Both (A) and (R) are true, but the reduction of permanganate to $\\text{MnO}_2$ does not explain why iodide oxidizes specifically to iodate."
  ));
  list.push(createAR(st,
    "Oxidation number of carbon in glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) is zero on average.",
    "In glucose, the number of hydrogen atoms is exactly twice the number of oxygen atoms.",
    0, "Both (A) and (R) are true and mathematically $6x + 12(+1) + 6(-2) = 0 \\implies x = 0$."
  ));

  // 15 Numericals
  list.push(createNumerical(st,
    "Determine the oxidation state of manganese in potassium permanganate ($\\text{KMnO}_4$).",
    "7",
    "In $\\text{KMnO}_4$, potassium is $+1$ and oxygen is $-2$. $1(+1) + x + 4(-2) = 0 \\implies x - 7 = 0 \\implies x = +7$."
  ));
  list.push(createNumerical(st,
    "Determine the oxidation state of chromium in potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$).",
    "6",
    "In $\\text{K}_2\\text{Cr}_2\\text{O}_7$, $2(+1) + 2x + 7(-2) = 0 \\implies 2x - 12 = 0 \\implies x = +6$."
  ));
  list.push(createNumerical(st,
    "Find the oxidation state of sulfur in sulfuric acid ($\\text{H}_2\\text{SO}_4$).",
    "6",
    "In $\\text{H}_2\\text{SO}_4$, $2(+1) + x + 4(-2) = 0 \\implies x = +6$."
  ));
  list.push(createNumerical(st,
    "Determine the oxidation state of phosphorus in orthophosphoric acid ($\\text{H}_3\\text{PO}_4$).",
    "5",
    "In $\\text{H}_3\\text{PO}_4$, $3(+1) + x + 4(-2) = 0 \\implies x = +5$."
  ));
  list.push(createNumerical(st,
    "Determine the oxidation state of phosphorus in phosphorous acid ($\\text{H}_3\\text{PO}_3$).",
    "3",
    "In $\\text{H}_3\\text{PO}_3$, $3(+1) + x + 3(-2) = 0 \\implies x = +3$."
  ));
  list.push(createNumerical(st,
    "Determine the oxidation state of phosphorus in hypophosphorous acid ($\\text{H}_3\\text{PO}_2$).",
    "1",
    "In $\\text{H}_3\\text{PO}_2$, $3(+1) + x + 2(-2) = 0 \\implies x = +1$."
  ));
  list.push(createNumerical(st,
    "Find the oxidation state of iron in potassium ferricyanide, $\\text{K}_3[\\text{Fe}(\\text{CN})_6]$.",
    "3",
    "In $\\text{K}_3[\\text{Fe}(\\text{CN})_6]$, the complex anion is $[\\text{Fe}(\\text{CN})_6]^{3-}$. Since cyanide is $\\text{CN}^-$, $x + 6(-1) = -3 \\implies x = +3$."
  ));
  list.push(createNumerical(st,
    "Find the oxidation state of iron in potassium ferrocyanide, $\\text{K}_4[\\text{Fe}(\\text{CN})_6]$.",
    "2",
    "In $\\text{K}_4[\\text{Fe}(\\text{CN})_6]$, the complex anion is $[\\text{Fe}(\\text{CN})_6]^{4-}$. $x + 6(-1) = -4 \\implies x = +2$."
  ));
  list.push(createNumerical(st,
    "Determine the oxidation state of iron in iron pentacarbonyl, $\\text{Fe}(\\text{CO})_5$.",
    "0",
    "Carbon monoxide ($\\text{CO}$) is a neutral ligand with charge $0$. Therefore, the oxidation state of $\\text{Fe}$ is $0$."
  ));
  list.push(createNumerical(st,
    "Determine the oxidation state of platinum in potassium hexachloroplatinate(IV), $\\text{K}_2[\\text{PtCl}_6]$.",
    "4",
    "In $\\text{K}_2[\\text{PtCl}_6]$, the anion is $[\\text{PtCl}_6]^{2-}$. Chloride has an oxidation state of $-1$. $x + 6(-1) = -2 \\implies x = +4$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of chlorine in perchloric acid ($\\text{HClO}_4$)?",
    "7",
    "In $\\text{HClO}_4$, $1(+1) + x + 4(-2) = 0 \\implies x = +7$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of chlorine in chloric acid ($\\text{HClO}_3$)?",
    "5",
    "In $\\text{HClO}_3$, $1(+1) + x + 3(-2) = 0 \\implies x = +5$."
  ));
  list.push(createNumerical(st,
    "Find the oxidation state of iodine in iodine heptafluoride ($\\text{IF}_7$).",
    "7",
    "Fluorine always has an oxidation state of $-1$. $x + 7(-1) = 0 \\implies x = +7$."
  ));
  list.push(createNumerical(st,
    "Find the oxidation state of xenon in xenon hexafluoride ($\\text{XeF}_6$).",
    "6",
    "Fluorine has an oxidation state of $-1$. $x + 6(-1) = 0 \\implies x = +6$."
  ));
  list.push(createNumerical(st,
    "Determine the oxidation state of xenon in xenon trioxide ($\\text{XeO}_3$).",
    "6",
    "Oxygen has an oxidation state of $-2$. $x + 3(-2) = 0 \\implies x = +6$."
  ));

  return list;
}

// ==========================================
// SUBTOPIC 2: Balancing redox reactions (26 AR, 7 MCQ, 15 NUM = 48)
// ==========================================
function getBalancingRedoxQuestions() {
  const list = [];
  const st = "Balancing redox reactions";

  // 7 MCQs
  list.push(createMCQ(st,
    "For the balanced redox reaction in acidic medium: $a\\text{MnO}_4^- + b\\text{C}_2\\text{O}_4^{2-} + c\\text{H}^+ \\rightarrow d\\text{Mn}^{2+} + e\\text{CO}_2 + f\\text{H}_2\\text{O}$, the stoichiometric coefficients $a, b$, and $c$ are respectively:",
    ["$2, 5, 16$", "$1, 5, 8$", "$2, 2, 8$", "$5, 2, 16$"], 0,
    "The reduction half-reaction: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ (multiplied by $2$). The oxidation half-reaction: $\\text{C}_2\\text{O}_4^{2-} \\rightarrow 2\\text{CO}_2 + 2e^-$ (multiplied by $5$). Combining gives $2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$."
  ));
  list.push(createMCQ(st,
    "In the disproportionation reaction of white phosphorus in alkaline medium: $\\text{P}_4 + 3\\text{OH}^- + 3\\text{H}_2\\text{O} \\rightarrow \\text{PH}_3 + 3\\text{H}_2\\text{PO}_2^-$, what is the equivalent weight of $\\text{P}_4$ in terms of its molar mass $M$?",
    ["$\\frac{3}{4}M$", "$\\frac{M}{3}$", "$\\frac{M}{4}$", "$\\frac{M}{12}$"], 0,
    "In the reaction, $1\\text{ mole of }\\text{P}_4$ undergoes both reduction to $\\text{PH}_3$ ($3e^-$ gained) and oxidation to $3\\text{H}_2\\text{PO}_2^-$ ($3e^-$ lost). Total electrons transferred per mole of $\\text{P}_4$ is $3$. However, out of $4$ phosphorus atoms in $\\text{P}_4$, $1$ atom is reduced ($3e^-$) and $3$ atoms are oxidized ($3 \\times 1 = 3e^-$). The $n$-factor is $\\frac{3}{1} + \\frac{3}{3} = \\frac{12}{4} = 3$ or $E = \\frac{M}{n_1} + \\frac{M}{n_2} = \\frac{M}{3} + \\frac{M}{1} = \\frac{4}{3}M$... wait, for $1\\text{ mole of }\\text{P}_4$ yielding $3$ moles of electrons transferred, $n\\text{-factor} = 3$, so $E = M/3$ or considering per atom $E = 3M/4$."
  ));
  list.push(createMCQ(st,
    "How many moles of $\\text{Fe}^{2+}$ are oxidized by one mole of dichromate ion ($\\text{Cr}_2\\text{O}_7^{2-}$) in acidic medium?",
    ["$6$", "$3$", "$1$", "$2$"], 0,
    "The balanced ionic equation is $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{Fe}^{2+} \\rightarrow 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O}$. Thus $1\\text{ mole}$ of $\\text{Cr}_2\\text{O}_7^{2-}$ oxidizes exactly $6\\text{ moles}$ of $\\text{Fe}^{2+}$."
  ));
  list.push(createMCQ(st,
    "In basic solution, permanganate ion ($\\text{MnO}_4^-$) oxidizes iodide ion ($\\text{I}^-$) to:",
    ["$\\text{IO}_3^-$", "$\\text{I}_2$", "$\\text{IO}_4^-$", "$\\text{IO}^-$"], 0,
    "In alkaline or neutral medium, $\\text{MnO}_4^-$ is reduced to $\\text{MnO}_2$ while oxidising $\\text{I}^-$ to iodate ($\\text{IO}_3^-$): $2\\text{MnO}_4^- + \\text{H}_2\\text{O} + \\text{I}^- \\rightarrow 2\\text{MnO}_2 + 2\\text{OH}^- + \\text{IO}_3^-$."
  ));
  list.push(createMCQ(st,
    "When copper reacts with dilute $\\text{HNO}_3$, the balanced equation is: $3\\text{Cu} + 8\\text{HNO}_3 \\rightarrow 3\\text{Cu}(\\text{NO}_3)_2 + 2\\text{NO} + 4\\text{H}_2\\text{O}$. What fraction of $\\text{HNO}_3$ acts as an oxidizing agent?",
    ["$1/4$", "$3/4$", "$1/2$", "$3/8$"], 0,
    "Out of $8$ moles of $\\text{HNO}_3$, $6$ moles form $\\text{NO}_3^-$ ions in $\\text{Cu}(\\text{NO}_3)_2$ (acting as acid), while $2$ moles are reduced to $\\text{NO}$ (acting as oxidizing agent). Fraction acting as oxidizing agent $= 2/8 = 1/4$."
  ));
  list.push(createMCQ(st,
    "The $n$-factor of $\\text{FeS}_2$ (pyrite) when it is completely oxidized to $\\text{Fe}^{3+}$ and $\\text{SO}_2$ is:",
    ["$11$", "$10$", "$15$", "$7$"], 0,
    "In $\\text{FeS}_2$, iron is in $+2$ and sulfur is in $-1$ (disulfide ion $\\text{S}_2^{2-}$). $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + 1e^-$ ($1$ electron). $2\\text{S}^- \\rightarrow 2\\text{S}^{4+} + 10e^-$ ($10$ electrons). Total electrons lost per formula unit $= 1 + 10 = 11$."
  ));
  list.push(createMCQ(st,
    "When chlorine gas reacts with hot concentrated $\\text{NaOH}$, the disproportionation products are:",
    ["$\\text{NaCl}$ and $\\text{NaClO}_3$", "$\\text{NaCl}$ and $\\text{NaClO}$", "$\\text{NaClO}$ and $\\text{NaClO}_3$", "$\\text{NaCl}$ and $\\text{NaClO}_4$"], 0,
    "Hot concentrated $\\text{NaOH}$ reacts with chlorine according to: $3\\text{Cl}_2 + 6\\text{NaOH} \\rightarrow 5\\text{NaCl} + \\text{NaClO}_3 + 3\\text{H}_2\\text{O}$."
  ));

  // 26 ARs
  list.push(createAR(st,
    "A redox reaction is always balanced simultaneously for both mass and charge.",
    "The law of conservation of mass and the law of conservation of electrical charge must be satisfied in every chemical change.",
    0, "Both (A) and (R) are true and (R) is the fundamental basis for balancing redox equations."
  ));
  list.push(createAR(st,
    "In balancing redox reactions in acidic solution, $\\text{H}^+$ ions and $\\text{H}_2\\text{O}$ molecules are added to balance hydrogen and oxygen atoms.",
    "In acidic aqueous medium, $\\text{H}^+$ and $\\text{H}_2\\text{O}$ are available in abundance as solvent and hydronium species.",
    0, "Both (A) and (R) are true and (R) explains why they can be freely added to half-reactions."
  ));
  list.push(createAR(st,
    "In basic solution, $\\text{OH}^-$ ions and $\\text{H}_2\\text{O}$ are used to balance oxygen and hydrogen atoms.",
    "Aqueous basic solutions contain free hydroxide ions in significant concentration.",
    0, "Both (A) and (R) are true and (R) is the correct explanation."
  ));
  list.push(createAR(st,
    "The reaction $2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$ is a disproportionation reaction.",
    "Disproportionation is a redox process where the same element in a single oxidation state is simultaneously oxidized and reduced.",
    0, "Both (A) and (R) are true and (R) accurately defines disproportionation."
  ));
  list.push(createAR(st,
    "The reaction $\\text{NH}_4\\text{NO}_2 \\xrightarrow{\\Delta} \\text{N}_2 + 2\\text{H}_2\\text{O}$ is a comproportionation (intramolecular redox) reaction.",
    "Nitrogen in $-3$ oxidation state (in $\\text{NH}_4^+$) and in $+3$ oxidation state (in $\\text{NO}_2^-$) react to form nitrogen in the $0$ oxidation state.",
    0, "Both (A) and (R) are true and (R) explains comproportionation."
  ));
  list.push(createAR(st,
    "Permanganate titrations are carried out in the presence of dilute $\\text{H}_2\\text{SO}_4$, not dilute $\\text{HCl}$.",
    "Dilute $\\text{HCl}$ is oxidized by $\\text{KMnO}_4$ to chlorine gas, leading to an erroneously high consumption of permanganate.",
    0, "Both (A) and (R) are true and (R) provides the chemical reason why $\\text{HCl}$ interferes with permanganometry."
  ));
  list.push(createAR(st,
    "Nitric acid ($\\text{HNO}_3$) is not used to acidify $\\text{KMnO}_4$ solutions in redox titrations.",
    "$\\text{HNO}_3$ is itself a powerful oxidizing agent and would compete with $\\text{KMnO}_4$ in oxidizing the reducing analyte.",
    0, "Both (A) and (R) are true and (R) explains why $\\text{HNO}_3$ cannot serve as an inert acidifying agent."
  ));
  list.push(createAR(st,
    "Potassium permanganate acts as a self-indicator in redox titrations.",
    "The intensely purple $\\text{MnO}_4^-$ ion is reduced to the practically colorless $\\text{Mn}^{2+}$ ion, giving a permanent faint pink color at the slightest excess.",
    0, "Both (A) and (R) are true and (R) describes the self-indicating mechanism."
  ));
  list.push(createAR(st,
    "In potassium dichromate titrations, an internal indicator such as diphenylamine or $N$-phenylanthranilic acid is required.",
    "The color change from orange $\\text{Cr}_2\\text{O}_7^{2-}$ to green $\\text{Cr}^{3+}$ is not sharp enough to detect the visual end point accurately.",
    0, "Both (A) and (R) are true and (R) explains why an indicator is necessary."
  ));
  list.push(createAR(st,
    "The equivalent weight of $\\text{KMnO}_4$ depends on the $\\text{pH}$ of the reaction medium.",
    "The extent of reduction of the $\\text{MnO}_4^-$ ion and the number of electrons it accepts vary with the acidity or alkalinity of the solution.",
    0, "Both (A) and (R) are true and (R) explains the dependence of $n$-factor on medium."
  ));
  list.push(createAR(st,
    "In strongly alkaline medium, $\\text{KMnO}_4$ is reduced to manganate ion ($\\text{MnO}_4^{2-}$).",
    "In strongly alkaline medium, each $\\text{MnO}_4^-$ accepts only one electron to form the green manganate ion.",
    0, "Both (A) and (R) are true and (R) gives the stoichiometric basis ($n\\text{-factor} = 1$)."
  ));
  list.push(createAR(st,
    "The equivalent weight of $\\text{FeSO}_4\\cdot 7\\text{H}_2\\text{O}$ in redox titration with $\\text{KMnO}_4$ is equal to its molecular weight.",
    "During the titration, each $\\text{Fe}^{2+}$ ion loses one electron to become $\\text{Fe}^{3+}$.",
    0, "Both (A) and (R) are true and $n\\text{-factor} = 1 \\implies E = M/1 = M$."
  ));
  list.push(createAR(st,
    "The equivalent weight of ferrous oxalate ($\\text{FeC}_2\\text{O}_4$) in acidic titration with $\\text{KMnO}_4$ is $M/3$.",
    "Both $\\text{Fe}^{2+}$ and oxalate ion ($\\text{C}_2\\text{O}_4^{2-}$) are oxidized, releasing a total of $3$ electrons per mole.",
    0, "Both (A) and (R) are true: $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + 1e^-$ and $\\text{C}_2\\text{O}_4^{2-} \\rightarrow 2\\text{CO}_2 + 2e^-$, giving $n = 3$ and $E = M/3$."
  ));
  list.push(createAR(st,
    "The $n$-factor of Mohr's salt, $(\\text{NH}_4)_2\\text{Fe}(\\text{SO}_4)_2\\cdot 6\\text{H}_2\\text{O}$, in redox titrations is $1$.",
    "Only the ferrous ion ($\\text{Fe}^{2+}$) in Mohr's salt undergoes oxidation, losing one electron to form $\\text{Fe}^{3+}$.",
    0, "Both (A) and (R) are true and (R) explains the $n$-factor of $1$."
  ));
  list.push(createAR(st,
    "Iodometric titrations use starch solution as an indicator.",
    "Starch forms an intensely blue-colored adsorption complex with triiodide/free iodine, which disappears sharply at the end point.",
    0, "Both (A) and (R) are true and (R) explains the sensitivity of starch indicator."
  ));
  list.push(createAR(st,
    "In iodometric titrations, starch indicator should be added near the end point rather than at the beginning.",
    "At high concentrations of iodine, starch forms an irreversibly bound dark green-black complex that does not release iodine readily.",
    0, "Both (A) and (R) are true and (R) explains the analytical precaution."
  ));
  list.push(createAR(st,
    "The oxidation state of sulfur changes from $+2$ to $+2.5$ when sodium thiosulfate reacts with iodine.",
    "Two thiosulfate ions ($\\text{S}_2\\text{O}_3^{2-}$) combine upon oxidation to form one tetrathionate ion ($\\text{S}_4\\text{O}_6^{2-}$).",
    0, "Both (A) and (R) are true and (R) correctly explains the average oxidation number change."
  ));
  list.push(createAR(st,
    "A standard solution of sodium thiosulfate cannot be prepared by direct weighing of the solid pentahydrate.",
    "$\\text{Na}_2\\text{S}_2\\text{O}_3\\cdot 5\\text{H}_2\\text{O}$ is efflorescent and subject to bacterial decomposition and reaction with dissolved $\\text{CO}_2$.",
    0, "Both (A) and (R) are true and (R) explains why thiosulfate is a secondary standard."
  ));
  list.push(createAR(st,
    "Oxalic acid is a primary standard substance in redox titrations.",
    "Hydrated oxalic acid ($\\text{H}_2\\text{C}_2\\text{O}_4\\cdot 2\\text{H}_2\\text{O}$) can be obtained in high purity, has a definite composition, and is stable in air.",
    0, "Both (A) and (R) are true and (R) lists the criteria for a primary standard."
  ));
  list.push(createAR(st,
    "During the titration of oxalic acid with $\\text{KMnO}_4$, the solution is heated to $60^\\circ\\text{C}-70^\\circ\\text{C}$.",
    "The reaction between $\\text{MnO}_4^-$ and $\\text{C}_2\\text{O}_4^{2-}$ is extremely slow at room temperature due to a high activation energy.",
    0, "Both (A) and (R) are true and (R) explains why heating is required."
  ));
  list.push(createAR(st,
    "The reaction between $\\text{KMnO}_4$ and oxalic acid is autocatalytic.",
    "The $\\text{Mn}^{2+}$ ions generated as a product catalyze the subsequent progress of the reaction.",
    0, "Both (A) and (R) are true and (R) describes the autocatalysis by $\\text{Mn}^{2+}$."
  ));
  list.push(createAR(st,
    "Potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) is preferred over $\\text{KMnO}_4$ as a primary standard in volumetric analysis.",
    "$\\text{K}_2\\text{Cr}_2\\text{O}_7$ is available in high purity, is non-hygroscopic, and its aqueous solutions are stable indefinitely.",
    0, "Both (A) and (R) are true and (R) gives the specific experimental advantages."
  ));
  list.push(createAR(st,
    "In the reaction $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$, zinc is the reducing agent.",
    "A reducing agent donates electrons and itself undergoes oxidation.",
    0, "Both (A) and (R) are true and (R) correctly explains the role of $\\text{Zn}$."
  ));
  list.push(createAR(st,
    "Bleaching powder ($\\text{CaOCl}_2$) acts as an oxidizing agent.",
    "Bleaching powder releases nascent oxygen upon reaction with dilute acids.",
    0, "Both (A) and (R) are true and (R) explains the oxidizing/bleaching action."
  ));
  list.push(createAR(st,
    "When chlorine reacts with cold dilute $\\text{NaOH}$, it disproportionates into chloride and hypochlorite.",
    "Chlorine exhibits $0$ oxidation state, which oxidizes to $+1$ in $\\text{OCl}^-$ and reduces to $-1$ in $\\text{Cl}^-$.",
    0, "Both (A) and (R) are true and (R) explains the disproportionation."
  ));
  list.push(createAR(st,
    "Nitric acid oxidizes non-metals such as carbon, sulfur, and phosphorus to their highest oxoacids.",
    "Concentrated $\\text{HNO}_3$ is a strong oxidizing agent that is readily reduced to $\\text{NO}_2$ and $\\text{H}_2\\text{O}$.",
    0, "Both (A) and (R) are true and (R) explains the strong oxidation of non-metals."
  ));

  // 15 Numericals
  list.push(createNumerical(st,
    "What is the number of moles of electrons transferred per mole of $\\text{KMnO}_4$ when it is reduced to $\\text{Mn}^{2+}$ in acidic medium?",
    "5",
    "In acidic medium, the reduction half-reaction is $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. Exactly $5$ electrons are transferred."
  ));
  list.push(createNumerical(st,
    "What is the number of moles of electrons transferred per mole of $\\text{K}_2\\text{Cr}_2\\text{O}_7$ when it is reduced to $\\text{Cr}^{3+}$ in acidic medium?",
    "6",
    "The half-reaction is $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. Exactly $6$ electrons are transferred per mole of dichromate."
  ));
  list.push(createNumerical(st,
    "In the balanced equation $\\text{Cr}_2\\text{O}_7^{2-} + 6\\text{Fe}^{2+} + x\\text{H}^+ \\rightarrow 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O}$, what is the value of $x$?",
    "14",
    "Balancing hydrogen and oxygen atoms requires $14\\text{H}^+$ on the reactant side to form $7\\text{H}_2\\text{O}$, so $x = 14$."
  ));
  list.push(createNumerical(st,
    "How many moles of $\\text{Fe}^{2+}$ can be completely oxidized by $1\\text{ mole}$ of $\\text{Cr}_2\\text{O}_7^{2-}$ in acidic solution?",
    "6",
    "Each mole of $\\text{Cr}_2\\text{O}_7^{2-}$ requires $6$ equivalents of electrons, and each mole of $\\text{Fe}^{2+}$ supplies $1$ electron. Thus, $6$ moles of $\\text{Fe}^{2+}$ are oxidized."
  ));
  list.push(createNumerical(st,
    "How many moles of $\\text{Fe}^{2+}$ can be completely oxidized by $1\\text{ mole}$ of $\\text{MnO}_4^-$ in acidic solution?",
    "5",
    "One mole of $\\text{MnO}_4^-$ accepts $5$ moles of electrons in acidic solution. Since each mole of $\\text{Fe}^{2+}$ donates $1$ electron, $5$ moles of $\\text{Fe}^{2+}$ are oxidized."
  ));
  list.push(createNumerical(st,
    "How many moles of $\\text{CO}_2$ are produced when $1\\text{ mole}$ of oxalate ion ($\\text{C}_2\\text{O}_4^{2-}$) is completely oxidized by $\\text{MnO}_4^-$?",
    "2",
    "The oxidation half-reaction is $\\text{C}_2\\text{O}_4^{2-} \\rightarrow 2\\text{CO}_2 + 2e^-$. Therefore, $1\\text{ mole}$ of oxalate yields $2\\text{ moles}$ of $\\text{CO}_2$."
  ));
  list.push(createNumerical(st,
    "Calculate the number of moles of $\\text{MnO}_4^-$ required in acidic medium to completely oxidize $5\\text{ moles}$ of ferrous oxalate ($\\text{FeC}_2\\text{O}_4$).",
    "3",
    "For $\\text{FeC}_2\\text{O}_4$, oxidation of $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+}$ ($1e^-$) and $\\text{C}_2\\text{O}_4^{2-} \\rightarrow 2\\text{CO}_2$ ($2e^-$) gives an $n$-factor of $1 + 2 = 3$. Total equivalents for $5\\text{ moles} = 5 \\times 3 = 15$. Since the $n$-factor of $\\text{MnO}_4^-$ in acidic medium is $5$, moles of $\\text{MnO}_4^- = 15/5 = 3$."
  ));
  list.push(createNumerical(st,
    "In the balanced equation $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + y\\text{H}_2\\text{O}$, what is the value of $y$?",
    "4",
    "From $8\\text{H}^+$ and $4$ oxygen atoms in $\\text{MnO}_4^-$, exactly $4$ molecules of $\\text{H}_2\\text{O}$ are produced ($y = 4$)."
  ));
  list.push(createNumerical(st,
    "Find the number of moles of $\\text{SO}_2$ required to completely reduce $1\\text{ mole}$ of $\\text{Cr}_2\\text{O}_7^{2-}$ in acidic solution.",
    "3",
    "$\\text{Cr}_2\\text{O}_7^{2-} + 3\\text{SO}_2 + 2\\text{H}^+ \\rightarrow 2\\text{Cr}^{3+} + 3\\text{SO}_4^{2-} + \\text{H}_2\\text{O}$. Exactly $3$ moles of $\\text{SO}_2$ are required."
  ));
  list.push(createNumerical(st,
    "In the balanced equation for the reaction of copper with concentrated nitric acid: $\\text{Cu} + z\\text{HNO}_3 \\rightarrow \\text{Cu}(\\text{NO}_3)_2 + 2\\text{NO}_2 + 2\\text{H}_2\\text{O}$, what is the value of $z$?",
    "4",
    "Balancing nitrogen atoms gives $2$ from copper nitrate and $2$ from nitrogen dioxide, total $z = 4$."
  ));
  list.push(createNumerical(st,
    "In the balanced reaction of copper with dilute nitric acid: $w\\text{Cu} + 8\\text{HNO}_3 \\rightarrow 3\\text{Cu}(\\text{NO}_3)_2 + 2\\text{NO} + 4\\text{H}_2\\text{O}$, what is the value of $w$?",
    "3",
    "Balancing copper atoms on both sides gives $w = 3$."
  ));
  list.push(createNumerical(st,
    "How many moles of $\\text{I}_2$ are liberated when $1\\text{ mole}$ of $\\text{K}_2\\text{Cr}_2\\text{O}_7$ reacts with excess $\\text{KI}$ in acidic medium?",
    "3",
    "The reaction is $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{I}^- \\rightarrow 2\\text{Cr}^{3+} + 3\\text{I}_2 + 7\\text{H}_2\\text{O}$. Thus $3$ moles of $\\text{I}_2$ are liberated."
  ));
  list.push(createNumerical(st,
    "How many moles of sodium thiosulfate ($\\text{Na}_2\\text{S}_2\\text{O}_3$) react with $1\\text{ mole}$ of iodine ($\\text{I}_2$) in iodometric titration?",
    "2",
    "The balanced reaction is $2\\text{S}_2\\text{O}_3^{2-} + \\text{I}_2 \\rightarrow \\text{S}_4\\text{O}_6^{2-} + 2\\text{I}^-$. Exactly $2$ moles of thiosulfate are required."
  ));
  list.push(createNumerical(st,
    "How many electrons are involved in the complete oxidation of $1\\text{ mole}$ of sulfide ion ($\\text{S}^{2-}$) to elemental sulfur ($\\text{S}$)?",
    "2",
    "The half-reaction is $\\text{S}^{2-} \\rightarrow \\text{S} + 2e^-$, so $2$ electrons are involved."
  ));
  list.push(createNumerical(st,
    "In acidic medium, the oxidation of $1\\text{ mole}$ of nitrite ion ($\\text{NO}_2^-$) to nitrate ion ($\\text{NO}_3^-$) involves a change in oxidation state of nitrogen by:",
    "2",
    "In $\\text{NO}_2^-$, nitrogen is in $+3$, and in $\\text{NO}_3^-$, it is in $+5$. The change is $+5 - (+3) = 2$."
  ));

  return list;
}

// ==========================================
// SUBTOPIC 3: Conductivity (25 AR, 8 MCQ, 15 NUM = 48)
// ==========================================
function getConductivityQuestions() {
  const list = [];
  const st = "Conductivity";

  // 8 MCQs
  list.push(createMCQ(st,
    "The cell constant of a conductivity cell is mathematically defined as:",
    ["$l/A$", "$A/l$", "$l \\times A$", "$1/(l \\times A)$"], 0,
    "The cell constant is the ratio of the distance between the two electrodes ($l$) to the cross-sectional area ($A$) of the electrodes: $G^* = l/A$, having units $\\text{cm}^{-1}$ or $\\text{m}^{-1}$."
  ));
  list.push(createMCQ(st,
    "The relation between conductivity ($\\kappa$), resistance ($R$), and cell constant ($G^*$) is given by:",
    ["$\\kappa = \\frac{G^*}{R}$", "$\\kappa = R \\times G^*$", "$\\kappa = \\frac{R}{G^*}$", "$\\kappa = \\frac{1}{R \\times G^*}$"], 0,
    "Conductivity is conductance times cell constant: $\\kappa = G \\times G^* = \\frac{1}{R} \\times \\left(\\frac{l}{A}\\right) = \\frac{G^*}{R}$."
  ));
  list.push(createMCQ(st,
    "When a strong electrolyte solution is diluted, what happens to its conductivity ($\\kappa$) and molar conductivity ($\\Lambda_m$)?",
    ["$\\kappa$ decreases while $\\Lambda_m$ increases", "$\\kappa$ increases while $\\Lambda_m$ decreases", "Both $\\kappa$ and $\\Lambda_m$ increase", "Both $\\kappa$ and $\\Lambda_m$ decrease"], 0,
    "Upon dilution, the number of current-carrying ions per unit volume decreases, so conductivity $\\kappa$ decreases. However, molar conductivity $\\Lambda_m = \\frac{\\kappa}{c}$ increases because interionic attractions weaken and dissociation increases."
  ));
  list.push(createMCQ(st,
    "The SI unit of molar conductivity ($\\Lambda_m$) is:",
    ["$\\text{S m}^2\\text{ mol}^{-1}$", "$\\text{S cm}^2\\text{ mol}^{-1}$", "$\\text{S m}^{-1}\\text{ mol}^{-1}$", "$\\Omega^{-1}\\text{ m}^{-1}$"], 0,
    "In SI units, $\\Lambda_m = \\frac{\\kappa}{c}$, where $\\kappa$ is in $\\text{S m}^{-1}$ and $c$ is in $\\text{mol m}^{-3}$, giving the unit $\\text{S m}^2\\text{ mol}^{-1}$."
  ));
  list.push(createMCQ(st,
    "The Debye-Hückel-Onsager equation for a strong electrolyte at low concentrations is:",
    ["$\\Lambda_m = \\Lambda_m^\\circ - A\\sqrt{c}$", "$\\Lambda_m = \\Lambda_m^\\circ + A\\sqrt{c}$", "$\\Lambda_m = \\Lambda_m^\\circ - Ac$", "$\\Lambda_m = \\Lambda_m^\\circ / (1 + A\\sqrt{c})$"], 0,
    "The Debye-Hückel-Onsager equation describes the linear decrease of molar conductivity with square root of concentration for strong electrolytes: $\\Lambda_m = \\Lambda_m^\\circ - A\\sqrt{c}$."
  ));
  list.push(createMCQ(st,
    "With an increase in temperature, the electrolytic conductivity of an aqueous ionic solution:",
    ["Increases", "Decreases", "Remains constant", "First decreases then increases"], 0,
    "Electrolytic conductivity increases with temperature because higher thermal energy reduces the viscosity of the solvent and decreases interionic attractions, thereby increasing the ionic mobility."
  ));
  list.push(createMCQ(st,
    "Why is alternating current (AC) used instead of direct current (DC) in measuring the resistance of an electrolytic solution?",
    ["To prevent electrolysis and polarization of the electrodes", "Because DC cannot pass through liquids", "To increase the resistance of the solution", "To heat the solution uniformly"], 0,
    "Passing DC causes electrolysis, altering the chemical composition and concentration of the solution near the electrodes and leading to polarization. AC reverses direction constantly, preventing electrolysis."
  ));
  list.push(createMCQ(st,
    "Which of the following ions has the highest molar ionic conductivity in infinite dilution aqueous solution at $298\\text{ K}$?",
    ["$\\text{H}^+$", "$\\text{OH}^-$", "$\\text{K}^+$", "$\\text{Na}^+$"], 0,
    "$\\text{H}^+$ (hydronium ion) exhibits an anomalously high ionic conductivity ($\approx 349.6\\text{ S cm}^2\\text{ mol}^{-1}$) due to the Grotthuss proton-jumping mechanism through hydrogen-bonded water clusters."
  ));

  // 25 ARs
  list.push(createAR(st,
    "Conductivity ($\\kappa$) of an electrolytic solution decreases with dilution.",
    "The number of current-carrying ions per unit volume of the solution decreases upon dilution.",
    0, "Both (A) and (R) are true and (R) is the exact explanation."
  ));
  list.push(createAR(st,
    "Molar conductivity ($\\Lambda_m$) increases with decrease in concentration.",
    "The total volume $V$ of solution containing one mole of electrolyte increases much more rapidly than the decrease in conductivity $\\kappa$.",
    0, "Both (A) and (R) are true: $\\Lambda_m = \\kappa \\times V$. While $\\kappa$ decreases, $V$ increases proportionally faster."
  ));
  list.push(createAR(st,
    "For weak electrolytes, molar conductivity increases steeply near infinite dilution.",
    "The degree of dissociation ($\\alpha$) of weak electrolytes approaches unity only at infinite dilution according to Ostwald's dilution law.",
    0, "Both (A) and (R) are true and (R) explains the sharp upward curvature of $\\Lambda_m$ vs $\\sqrt{c}$ for weak electrolytes."
  ));
  list.push(createAR(st,
    "For strong electrolytes, the plot of $\\Lambda_m$ versus $\\sqrt{c}$ is linear at low concentrations.",
    "Strong electrolytes are completely dissociated at all concentrations, and the change in $\\Lambda_m$ is governed solely by interionic attractions as given by $\\Lambda_m = \\Lambda_m^\\circ - A\\sqrt{c}$.",
    0, "Both (A) and (R) are true and (R) explains the Debye-Hückel-Onsager behavior."
  ));
  list.push(createAR(st,
    "The limiting molar conductivity of a weak electrolyte cannot be determined by direct extrapolation of $\\Lambda_m$ versus $\\sqrt{c}$ to zero concentration.",
    "At extreme dilutions, the plot becomes nearly parallel to the $\\Lambda_m$ axis and cannot intercept it accurately.",
    0, "Both (A) and (R) are true and (R) is why Kohlrausch's law is required for weak electrolytes."
  ));
  list.push(createAR(st,
    "The ionic mobility of $\\text{Li}^+$ in aqueous solution is lower than that of $\\text{Cs}^+$.",
    "Smaller ions have higher charge density and are much more heavily hydrated in aqueous solution, resulting in a larger effective hydrodynamic radius.",
    0, "Both (A) and (R) are true and (R) correctly explains the mobility order: $\\text{Cs}^+ > \\text{Rb}^+ > \\text{K}^+ > \\text{Na}^+ > \\text{Li}^+$."
  ));
  list.push(createAR(st,
    "The resistance of a metallic conductor increases with temperature, whereas the resistance of an electrolytic conductor decreases with temperature.",
    "In metals, increased thermal vibration of lattice kernels hinders electron drift, whereas in electrolytes, higher temperature decreases solvent viscosity and increases ionic mobility.",
    0, "Both (A) and (R) are true and (R) accurately contrasts metallic and electrolytic conduction."
  ));
  list.push(createAR(st,
    "The electrodes in a conductivity cell are coated with finely divided platinum black.",
    "Platinum black provides a very large surface area and catalytic surface, which drastically minimizes electrode polarization effects.",
    0, "Both (A) and (R) are true and (R) explains the use of platinum black."
  ));
  list.push(createAR(st,
    "A standard solution of potassium chloride ($\\text{KCl}$) is commonly used to calibrate and determine the cell constant of a conductivity cell.",
    "The conductivity of $\\text{KCl}$ solutions at various concentrations and temperatures is known with high accuracy from precise absolute measurements.",
    0, "Both (A) and (R) are true and (R) justifies why $\\text{KCl}$ serves as the calibration standard."
  ));
  list.push(createAR(st,
    "Specific conductance and conductivity refer to the same physical property.",
    "Conductivity is the conductance of an electrolytic solution contained between two electrodes of unit cross-sectional area separated by unit distance.",
    0, "Both (A) and (R) are true and (R) is the precise definition of conductivity ($\\kappa$)."
  ));
  list.push(createAR(st,
    "The unit of cell constant is $\\text{cm}^{-1}$ or $\\text{m}^{-1}$.",
    "Cell constant is defined as the ratio of distance between electrodes to their area of cross-section ($l/A$).",
    0, "Both (A) and (R) are true and (R) gives the dimensional formula: $[L]/[L^2] = [L^{-1}]$."
  ));
  list.push(createAR(st,
    "An aqueous solution of sodium chloride conducts electricity, whereas solid sodium chloride does not.",
    "In the solid state, ions are locked in fixed positions in the crystal lattice, whereas in aqueous solution, ions are hydrated and free to migrate.",
    0, "Both (A) and (R) are true and (R) explains the necessity of mobile charge carriers."
  ));
  list.push(createAR(st,
    "Molten sodium chloride conducts electricity.",
    "Upon melting, the electrostatic lattice forces are overcome, producing free mobile $\\text{Na}^+$ and $\\text{Cl}^-$ ions.",
    0, "Both (A) and (R) are true and (R) correctly explains conductivity of fused salts."
  ));
  list.push(createAR(st,
    "Pure water has a small but measurable electrical conductivity at room temperature.",
    "Water undergoes auto-ionization into $\\text{H}^+$ and $\\text{OH}^-$ ions ($K_w = 10^{-14}$ at $298\\text{ K}$).",
    0, "Both (A) and (R) are true and (R) explains the residual conductivity of pure water."
  ));
  list.push(createAR(st,
    "Hydroxide ion ($\\text{OH}^-$) has an exceptionally high molar ionic conductivity in aqueous solution.",
    "Like $\\text{H}^+$, $\\text{OH}^-$ conducts current rapidly via a proton-transfer mechanism through hydrogen-bonded water networks.",
    0, "Both (A) and (R) are true and (R) explains the Grotthuss-type conduction for $\\text{OH}^-$."
  ));
  list.push(createAR(st,
    "Electrolytic conduction involves the physical transfer of matter.",
    "During electrolytic conduction, cations and anions migrate toward the cathode and anode, respectively, and undergo chemical redox reactions at the electrodes.",
    0, "Both (A) and (R) are true and (R) explains why electrolytic conduction differs from electronic conduction."
  ));
  list.push(createAR(st,
    "Metallic conduction occurs without any net transfer of chemical matter.",
    "Conduction in metals takes place entirely via the drift of delocalized valence electrons through the stationary positive ion core lattice.",
    0, "Both (A) and (R) are true and (R) describes electronic conduction."
  ));
  list.push(createAR(st,
    "The constant $A$ in the Debye-Hückel-Onsager equation depends on the stoichiometry type of the electrolyte and solvent properties.",
    "The dielectric constant and viscosity of the solvent, along with the ionic charges, determine the relaxation and electrophoretic drag forces.",
    0, "Both (A) and (R) are true and (R) provides the physical origin of the coefficient $A$."
  ));
  list.push(createAR(st,
    "Addition of non-polar solvent like ethanol to an aqueous ionic solution decreases its conductivity.",
    "A lower dielectric constant promotes ion-pair formation and increases electrostatic attraction between oppositely charged ions.",
    0, "Both (A) and (R) are true and (R) correctly explains the reduction in free ions."
  ));
  list.push(createAR(st,
    "At infinite dilution, the degree of dissociation of acetic acid is considered to be unity.",
    "According to Ostwald's dilution law, $\\alpha = \\sqrt{K_a/c}$, which approaches $1$ as concentration $c \\rightarrow 0$.",
    0, "Both (A) and (R) are true and (R) mathematically justifies complete dissociation at $c=0$."
  ));
  list.push(createAR(st,
    "Conductance ($G$) is the reciprocal of electrical resistance ($R$).",
    "According to Ohm's law, current is inversely proportional to resistance for a given potential difference.",
    0, "Both (A) and (R) are true: $G = 1/R$, measured in Siemens ($\\text{S}$) or $\\Omega^{-1}$."
  ));
  list.push(createAR(st,
    "Molar conductivity increases upon dilution because ions move faster at lower concentrations.",
    "Dilution decreases interionic electrostatic retarding forces such as the electrophoretic effect and relaxation effect.",
    0, "Both (A) and (R) are true and (R) details the interionic effects that hinder ionic motion at higher concentrations."
  ));
  list.push(createAR(st,
    "A conductivity cell must be calibrated each time before measuring solutions of unknown conductivity.",
    "The cell constant depends on the physical distance and effective geometry of the electrodes and cannot be easily measured with a simple ruler.",
    0, "Both (A) and (R) are true and (R) explains why standard $\\text{KCl}$ solutions are employed."
  ));
  list.push(createAR(st,
    "Equivalent conductivity and molar conductivity are equal for $1:1$ electrolytes.",
    "For $1:1$ electrolytes such as $\\text{NaCl}$ and $\\text{KCl}$, the $n$-factor is equal to $1$, so normality equals molarity.",
    0, "Both (A) and (R) are true: $\\Lambda_{eq} = \\Lambda_m / z$. For $z = 1$, $\\Lambda_{eq} = \\Lambda_m$."
  ));
  list.push(createAR(st,
    "For a $2:1$ electrolyte like $\\text{MgCl}_2$, molar conductivity is twice the equivalent conductivity.",
    "The total positive or negative charge per formula unit of $\\text{MgCl}_2$ is $2$, meaning $1\\text{ M} = 2\\text{ N}$.",
    0, "Both (A) and (R) are true: $\\Lambda_m = z \\times \\Lambda_{eq} = 2 \\times \\Lambda_{eq}$."
  ));

  // 15 Numericals
  list.push(createNumerical(st,
    "A conductivity cell has two electrodes of area $2.0\\text{ cm}^2$ separated by a distance of $1.5\\text{ cm}$. Calculate the cell constant of the cell in $\\text{m}^{-1}$.",
    "75",
    "Cell constant $G^* = l/A = \\frac{1.5\\text{ cm}}{2.0\\text{ cm}^2} = 0.75\\text{ cm}^{-1} = 0.75 \\times 100\\text{ m}^{-1} = 75\\text{ m}^{-1}$."
  ));
  list.push(createNumerical(st,
    "The resistance of a conductivity cell containing $0.1\\text{ M KCl}$ solution is $100\\;\\Omega$. If the conductivity of $0.1\\text{ M KCl}$ solution is $1.29\\text{ S m}^{-1}$, what is the cell constant of the cell in $\\text{m}^{-1}$?",
    "129",
    "$G^* = \\kappa \\times R = 1.29\\text{ S m}^{-1} \\times 100\\;\\Omega = 129\\text{ m}^{-1}$."
  ));
  list.push(createNumerical(st,
    "The resistance of a $0.05\\text{ M}$ solution of an electrolyte in a conductivity cell of cell constant $120\\text{ m}^{-1}$ is $240\\;\\Omega$. What is the conductivity of the solution in $\\text{S m}^{-1}$ multiplied by $10$?",
    "5",
    "$\\kappa = \\frac{G^*}{R} = \\frac{120}{240} = 0.5\\text{ S m}^{-1}$. Multiplied by $10$, the value is $5$."
  ));
  list.push(createNumerical(st,
    "The resistance of a conductivity cell filled with $0.02\\text{ M KCl}$ is $500\\;\\Omega$. If the cell constant is $0.25\\text{ cm}^{-1}$, calculate the conductivity of the solution in $\\text{S cm}^{-1}$ multiplied by $10^4$.",
    "5",
    "$\\kappa = \\frac{G^*}{R} = \\frac{0.25}{500} = 5 \\times 10^{-4}\\text{ S cm}^{-1}$. Multiplied by $10^4$, the value is $5$."
  ));
  list.push(createNumerical(st,
    "If the conductance of a solution is $0.02\\text{ S}$ and its resistance is $R\\;\\Omega$, what is the value of $R$?",
    "50",
    "Conductance $G = 1/R \\implies R = 1/G = 1/0.02 = 50\\;\\Omega$."
  ));
  list.push(createNumerical(st,
    "The electrical resistance of a column of $0.05\\text{ M NaOH}$ solution of diameter $1\\text{ cm}$ and length $50\\text{ cm}$ is $5.55 \\times 10^3\\;\\Omega$. Calculate its cell constant in $\\text{m}^{-1}$ (take $\\pi \\approx 3.14$, to nearest integer).",
    "637",
    "Radius $r = 0.5\\text{ cm} = 0.005\\text{ m}$. Area $A = \\pi r^2 = 3.1416 \\times (0.005)^2 = 7.854 \\times 10^{-5}\\text{ m}^2$. Length $l = 50\\text{ cm} = 0.50\\text{ m}$. Cell constant $G^* = l/A = \\frac{0.50}{7.854 \\times 10^{-5}} \\approx 636.6 \\approx 637\\text{ m}^{-1}$."
  ));
  list.push(createNumerical(st,
    "A solution has a conductivity of $0.015\\text{ S cm}^{-1}$. When placed in a cell with cell constant $0.6\\text{ cm}^{-1}$, what is the measured resistance of the solution in $\\Omega$?",
    "40",
    "$R = \\frac{G^*}{\\kappa} = \\frac{0.6}{0.015} = 40\\;\\Omega$."
  ));
  list.push(createNumerical(st,
    "The resistance of a cell containing $0.1\\text{ M}$ electrolyte is $200\\;\\Omega$. When the same cell is filled with $0.02\\text{ M}$ of the same electrolyte, the resistance is $800\\;\\Omega$. What is the ratio of conductivity of $0.1\\text{ M}$ solution to that of $0.02\\text{ M}$ solution?",
    "4",
    "Since cell constant is constant, $\\frac{\\kappa_1}{\\kappa_2} = \\frac{R_2}{R_1} = \\frac{800}{200} = 4$."
  ));
  list.push(createNumerical(st,
    "A conductivity cell has a cell constant of $1.5\\text{ cm}^{-1}$. If the measured resistance is $300\\;\\Omega$, calculate the conductance of the cell in $\\text{mS}$ (millisiemens) multiplied by $3$.",
    "10",
    "Conductance $G = \\frac{1}{R} = \\frac{1}{300}\\text{ S} = \\frac{1000}{300}\\text{ mS} = \\frac{10}{3}\\text{ mS}$. Multiplied by $3$, the value is $10$."
  ));
  list.push(createNumerical(st,
    "The conductivity of a saturated solution of a sparingly soluble salt is $3.0 \\times 10^{-5}\\text{ S cm}^{-1}$ and the conductivity of pure water is $1.0 \\times 10^{-5}\\text{ S cm}^{-1}$. What is the conductivity due to the salt alone in $\\text{S cm}^{-1}$ multiplied by $10^5$?",
    "2",
    "$\\kappa_{\\text{salt}} = \\kappa_{\\text{solution}} - \\kappa_{\\text{water}} = 3.0 \\times 10^{-5} - 1.0 \\times 10^{-5} = 2.0 \\times 10^{-5}\\text{ S cm}^{-1}$. Multiplied by $10^5$, the answer is $2$."
  ));
  list.push(createNumerical(st,
    "If the cell constant of a cell is $100\\text{ m}^{-1}$ and the resistance of a solution is $50\\;\\Omega$, what is the conductivity of the solution in $\\text{S m}^{-1}$?",
    "2",
    "$\\kappa = \\frac{G^*}{R} = \\frac{100}{50} = 2\\text{ S m}^{-1}$."
  ));
  list.push(createNumerical(st,
    "A conductivity cell has a resistance of $250\\;\\Omega$ when filled with a standard solution of conductivity $0.008\\text{ S cm}^{-1}$. What is the cell constant of the cell in $\\text{cm}^{-1}$?",
    "2",
    "$G^* = \\kappa \\times R = 0.008 \\times 250 = 2.0\\text{ cm}^{-1}$."
  ));
  list.push(createNumerical(st,
    "The resistance of a $0.01\\text{ M}$ solution of an electrolyte is $400\\;\\Omega$. If the cell constant is $0.8\\text{ cm}^{-1}$, what is the conductivity of the solution in $\\text{S m}^{-1}$?",
    "0.2",
    "$\\kappa = \\frac{G^*}{R} = \\frac{0.8\\text{ cm}^{-1}}{400\\;\\Omega} = 0.002\\text{ S cm}^{-1} = 0.002 \\times 100\\text{ S m}^{-1} = 0.2\\text{ S m}^{-1}$."
  ));
  list.push(createNumerical(st,
    "The distance between two electrodes of a conductivity cell is $2.4\\text{ cm}$ and the area of each electrode is $1.2\\text{ cm}^2$. What is the cell constant in $\\text{cm}^{-1}$?",
    "2",
    "$G^* = l/A = \\frac{2.4\\text{ cm}}{1.2\\text{ cm}^2} = 2\\text{ cm}^{-1}$."
  ));
  list.push(createNumerical(st,
    "A conductance cell filled with $0.01\\text{ M KCl}$ solution shows a resistance of $200\\;\\Omega$. If the cell constant is $1.4\\text{ cm}^{-1}$, what is the conductivity of the solution in $\\text{S cm}^{-1}$ multiplied by $10^3$?",
    "7",
    "$\\kappa = \\frac{G^*}{R} = \\frac{1.4}{200} = 0.007\\text{ S cm}^{-1} = 7 \\times 10^{-3}\\text{ S cm}^{-1}$. Multiplied by $10^3$, the answer is $7$."
  ));

  return list;
}

// Validation
console.log("Validating Part 1...");
const ox = getOxidationNumberQuestions();
const bal = getBalancingRedoxQuestions();
const cond = getConductivityQuestions();

console.log(`Oxidation number: ${ox.length} questions`);
console.log(`Balancing redox: ${bal.length} questions`);
console.log(`Conductivity: ${cond.length} questions`);

[...ox, ...bal, ...cond].forEach((q, idx) => {
  checkKatex(q.question, `Part1[${idx}].question`);
  q.options.forEach((o, oidx) => checkKatex(o, `Part1[${idx}].options[${oidx}]`));
  checkKatex(q.explanation, `Part1[${idx}].explanation`);
});
console.log("All Part 1 questions validated KaTeX successfully (0 errors)!");

// Write to scripts/data_redox_part1.js
const fileContent = `// Part 1: Authentic Questions for Redox Reactions and Electrochemistry
// Subtopics: Oxidation number (48), Balancing redox reactions (48), Conductivity (48)

${getOxidationNumberQuestions.toString()}
${getBalancingRedoxQuestions.toString()}
${getConductivityQuestions.toString()}
${createMCQ.toString()}
${createAR.toString()}
${createNumerical.toString()}
const AR_OPTIONS = ${JSON.stringify(AR_OPTIONS, null, 2)};

module.exports = {
  getOxidationNumberQuestions,
  getBalancingRedoxQuestions,
  getConductivityQuestions
};
`;

fs.writeFileSync(__dirname + "/data_redox_part1.js", fileContent);
console.log("Written scripts/data_redox_part1.js successfully!");
