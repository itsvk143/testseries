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
    chapter: "P-Block Elements",
    topic: "P-Block Elements",
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
    chapter: "P-Block Elements",
    topic: "P-Block Elements",
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
    chapter: "P-Block Elements",
    topic: "P-Block Elements",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    cognitiveLevel: "APPLICATION"
  };
}

// -------------------------------------------------------------
// Subtopic 4: Oxoacids of phosphorus, sulfur, and halogens
// Needed: 117 Qs (26 AR, 78 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart4() {
  const st = "Oxoacids of phosphorus, sulfur, and halogens";
  const list = [];

  const arData = [
    {
      a: "$\\text{H}_3\\text{PO}_2$ behaves as a monobasic acid in aqueous solution.",
      r: "$\\text{H}_3\\text{PO}_2$ contains only one ionizable ion formed from a single $\\text{P}-\\text{OH}$ group, while the two hydrogens are directly bonded to phosphorus.",
      idx: 0,
      exp: "In $\\text{H}_3\\text{PO}_2$, only the hydrogen attached to oxygen in the $\\text{P}-\\text{OH}$ bond is ionizable as a proton ($H^+$). The two hydrogen atoms bonded directly to phosphorus ($\\\\text{P}-\\text{H}$) are non-ionizable."
    },
    {
      a: "$\\text{H}_3\\text{PO}_3$ is a diprotic (dibasic) acid and a good reducing agent.",
      r: "$\\text{H}_3\\text{PO}_3$ possesses two $\\text{P}-\\text{OH}$ bonds and one directly linked $\\text{P}-\\text{H}$ bond.",
      idx: 0,
      exp: "The two $\\text{P}-\\text{OH}$ groups provide two ionizable protons (dibasic), while the single $\\text{P}-\\text{H}$ bond imparts reducing character to $\\text{H}_3\\text{PO}_3$. Both statements are true and Reason explains Assertion."
    },
    {
      a: "$\\text{H}_3\\text{PO}_4$ is a tribasic acid with no reducing properties.",
      r: "All three hydrogen atoms in $\\text{H}_3\\text{PO}_4$ are present as $\\text{P}-\\text{OH}$ groups and there are no $\\text{P}-\\text{H}$ bonds.",
      idx: 0,
      exp: "$\\text{H}_3\\text{PO}_4$ contains three $\\text{P}-\\text{OH}$ groups (tribasic) and phosphorus is in its highest oxidation state ($+5$), so it lacks reducing $\\text{P}-\\text{H}$ bonds."
    },
    {
      a: "On heating, orthophosphorous acid ($\\text{H}_3\\text{PO}_3$) disproportionates into orthophosphoric acid and phosphine.",
      r: "In $\\text{H}_3\\text{PO}_3$, phosphorus has an intermediate oxidation state of $+3$, which simultaneously oxidizes to $+5$ in $\\text{H}_3\\text{PO}_4$ and reduces to $-3$ in $\\text{PH}_3$.",
      idx: 0,
      exp: "$4\\text{H}_3\\text{PO}_3 \\xrightarrow{\\Delta} 3\\text{H}_3\\text{PO}_4 + \\text{PH}_3$. Phosphorus disproportionates from $+3$ to $+5$ and $-3$."
    },
    {
      a: "The oxidation state of sulfur in Caro's acid ($\\text{H}_2\\text{SO}_5$) is $+6$, not $+8$.",
      r: "Caro's acid contains one peroxo linkage ($-\\text{O}-\\text{O}-$) in which each oxygen has an oxidation number of $-1$.",
      idx: 0,
      exp: "The structure is $\\text{HO}-\\text{SO}_2-\\text{O}-\\text{O}-\\text{H}$. Accounting for the peroxo bridge where two oxygen atoms are in the $-1$ state, sulfur has an oxidation state of $+6$."
    },
    {
      a: "The oxidation state of sulfur in Marshall's acid ($\\text{H}_2\\text{S}_2\\text{O}_8$) is $+6$.",
      r: "Marshall's acid has a peroxo bridge ($-\\text{O}-\\text{O}-$) linking two $-\\text{SO}_3\\text{H}$ groups.",
      idx: 0,
      exp: "In $\\text{H}_2\\text{S}_2\\text{O}_8$, the structure is $\\text{HO}_3\\text{S}-\\text{O}-\\text{O}-\\text{SO}_3\\text{H}$. The peroxo bond contains two oxygen atoms with oxidation number $-1$, giving each sulfur an oxidation state of $+6$."
    },
    {
      a: "Acidic strength of chlorine oxoacids increases in the order $\\text{HOCl} < \\text{HClO}_2 < \\text{HClO}_3 < \\text{HClO}_4$.",
      r: "As the number of terminal oxygen atoms increases, the negative charge in the conjugate base is delocalized over more oxygen atoms by resonance, increasing its stability.",
      idx: 0,
      exp: "The perchlorate anion $\\text{ClO}_4^-$ has four equivalent resonance structures with the negative charge spread over four oxygens, making it exceptionally stable, and hence $\\text{HClO}_4$ is the strongest acid."
    },
    {
      a: "The oxidizing power of chlorine oxoacids decreases in the order $\\text{HOCl} > \\text{HClO}_2 > \\text{HClO}_3 > \\text{HClO}_4$.",
      r: "The $\\text{Cl}-\\text{O}$ bond strength decreases with decreasing number of oxygen atoms attached to chlorine.",
      idx: 0,
      exp: "$\\text{HOCl}$ is kinetically the least stable and has the weakest $\\text{Cl}-\\text{O}$ bond, easily releasing nascent oxygen $[\\text{O}]$ to act as a powerful oxidizing agent. $\\text{HClO}_4$ is kinetically much more stable."
    },
    {
      a: "Fluorine forms only one oxoacid, namely hypofluorous acid ($\\text{HOF}$).",
      r: "Due to small size and highest electronegativity among all elements, fluorine cannot act as a central atom with higher oxidation states and lacks $d$-orbitals.",
      idx: 0,
      exp: "Fluorine cannot exhibit positive oxidation states or expand its octet to form higher oxoacids like $\\text{HFO}_2, \\text{HFO}_3$, or $\\text{HFO}_4$. It forms only $\\text{HOF}$."
    },
    {
      a: "In hypofluorous acid ($\\text{HOF}$), the oxidation state of fluorine is $-1$.",
      r: "Fluorine is more electronegative than oxygen, so the shared electron pair between oxygen and fluorine is shifted toward fluorine.",
      idx: 0,
      exp: "Because $\\text{F}$ is more electronegative than $\\text{O}$, in $\\text{H}-\\text{O}-\\text{F}$, $\\text{H}$ is $+1$, $\\text{O}$ is $0$, and $\\text{F}$ is $-1$. Both statements are true and Reason explains Assertion."
    },
    {
      a: "Sulfuric acid is called the 'King of Chemicals'.",
      r: "The industrial consumption of sulfuric acid is widely used as a benchmark for measuring the industrial prosperity of a nation.",
      idx: 0,
      exp: "Sulfuric acid is indispensable in manufacturing fertilizers, detergents, dyes, explosives, and petrochemicals. The extent of its consumption reflects a nation's industrial output."
    },
    {
      a: "Concentrated $\\text{H}_2\\text{SO}_4$ cannot be prepared by directly dissolving $\\text{SO}_3$ in water.",
      r: "Direct dissolution of $\\text{SO}_3$ in water is violently exothermic and creates a dense, uncontrollable mist of sulfuric acid droplets that does not condense easily.",
      idx: 0,
      exp: "In the Contact process, $\\text{SO}_3$ is absorbed in concentrated $\\text{H}_2\\text{SO}_4$ to form oleum ($\\text{H}_2\\text{S}_2\\text{O}_7$), which is subsequently diluted with water to get acid of the desired concentration."
    },
    {
      a: "Concentrated sulfuric acid acts as a powerful dehydrating agent.",
      r: "Sulfuric acid has a strong affinity for water and removes water molecules chemically from carbohydrates, charring them to carbon.",
      idx: 0,
      exp: "$\\text{C}_{12}\\text{H}_{22}\\text{O}_{11} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4} 12\\text{C} + 11\\text{H}_2\\text{O}$. Conc. $\\text{H}_2\\text{SO}_4$ abstracts water, leaving black spongy carbon."
    },
    {
      a: "$\\text{H}_4\\text{P}_2\\text{O}_7$ (pyrophosphoric acid) is a tetrabasic acid.",
      r: "The pyrophosphoric acid molecule has four $\\text{P}-\\text{OH}$ groups and one $\\text{P}-\\text{O}-\\text{P}$ bridging linkage.",
      idx: 0,
      exp: "Each phosphorus in $\\text{H}_4\\text{P}_2\\text{O}_7$ has two $-\\text{OH}$ groups, one $=\\text{O}$, and they are connected via a bridging oxygen ($\\text{P}-\\text{O}-\\text{P}$), providing four replaceable protons."
    },
    {
      a: "In cyclotrimetaphosphoric acid ($(\\text{HPO}_3)_3$), there are three $\\text{P}-\\text{O}-\\text{P}$ linkages.",
      r: "Cyclotrimetaphosphoric acid forms a six-membered cyclic ring of alternating phosphorus and oxygen atoms.",
      idx: 0,
      exp: "The cyclic trimer $(\\text{HPO}_3)_3$ contains a planar/puckered alternating $(-\\text{P}-\\text{O}-)_3$ six-membered ring containing three $\\text{P}-\\text{O}-\\text{P}$ bridging bonds."
    },
    {
      a: "Hypophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_6$) contains a direct $\\text{P}-\\text{P}$ bond.",
      r: "In $\\text{H}_4\\text{P}_2\\text{O}_6$, the oxidation state of phosphorus is $+4$.",
      idx: 1,
      exp: "Both statements are true. $\\text{H}_4\\text{P}_2\\text{O}_6$ has the structure $(\\text{HO})_2\\text{P}(=\\text{O})-\\text{P}(=\\text{O})(\\text{OH})_2$ with a $\\text{P}-\\text{P}$ bond, giving phosphorus an oxidation state of $+4$. However, the $+4$ oxidation state is the result of the structure, not the cause of the $\\text{P}-\\text{P}$ bond formation."
    },
    {
      a: "Concentrated $\\text{HNO}_3$ turns yellow or brownish-yellow on prolonged standing in sunlight.",
      r: "Nitric acid slowly undergoes photochemical decomposition to yield nitrogen dioxide ($\\text{NO}_2$), which dissolves in the acid imparting a yellow colour.",
      idx: 0,
      exp: "$4\\text{HNO}_3 \\xrightarrow{h\\nu} 4\\text{NO}_2 + 2\\text{H}_2\\text{O} + \\text{O}_2$. The dissolved reddish-brown $\\text{NO}_2$ gives the acid its yellow color."
    },
    {
      a: "Metals like iron, chromium, and aluminium become passive when dipped in concentrated $\\text{HNO}_3$.",
      r: "Concentrated nitric acid forms an impervious, microscopically thin protective layer of metal oxide on the metal surface.",
      idx: 0,
      exp: "Due to the strong oxidizing nature of concentrated $\\text{HNO}_3$, an unreactive oxide film forms on the surface of $\\text{Fe}, \\text{Cr}, \\text{Al}$, rendering them chemically passive."
    },
    {
      a: "Perchloric acid ($\\text{HClO}_4$) is a stronger acid than perbromic acid ($\\text{HBrO}_4$) and periodic acid ($\\text{HIO}_4$).",
      r: "Chlorine is more electronegative than bromine and iodine, pulling electron density away from the $\\text{O}-\\text{H}$ bond most effectively.",
      idx: 0,
      exp: "The higher electronegativity of chlorine increases the polarity of the $\\text{O}-\\text{H}$ bond and enhances the stability of the conjugate base, making $\\text{HClO}_4$ the strongest acid among them."
    },
    {
      a: "Periodic acid commonly exists as paraperiodic acid ($\\text{H}_5\\text{IO}_6$).",
      r: "Because of its large size, iodine can accommodate six oxygen atoms around itself using vacant $5d$ orbitals, expanding its coordination number.",
      idx: 0,
      exp: "Iodine is large enough to achieve octahedral coordination with oxygen, forming $\\text{H}_5\\text{IO}_6$ (ortho/paraperiodic acid), whereas smaller halogens like $\\text{Cl}$ cannot exceed tetrahedral coordination."
    },
    {
      a: "The second dissociation constant ($K_{a2}$) of sulfuric acid is much smaller than its first dissociation constant ($K_{a1}$).",
      r: "It is electrostatically more difficult to remove a positively charged proton from a negatively charged $\\text{HSO}_4^-$ anion than from a neutral $\\text{H}_2\\text{SO}_4$ molecule.",
      idx: 0,
      exp: "$K_{a1} > 10$ while $K_{a2} \\approx 1.2 \\times 10^{-2}$. Removing a proton from an already negative ion requires overcoming strong electrostatic attraction."
    },
    {
      a: "Dithionic acid ($\\text{H}_2\\text{S}_2\\text{O}_6$) contains an $\\text{S}-\\text{S}$ covalent bond.",
      r: "The oxidation state of each sulfur atom in dithionic acid is $+5$.",
      idx: 1,
      exp: "Both statements are true. Dithionic acid has the structure $\\text{HO}_3\\text{S}-\\text{SO}_3\\text{H}$ with an $\\text{S}-\\text{S}$ single bond, giving each sulfur an oxidation state of $+5$. Reason is a property, not the explanation of why the $\\text{S}-\\text{S}$ bond exists."
    },
    {
      a: "Thiosulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_3$) readily decomposes in acidic aqueous solution to precipitate sulfur.",
      r: "Thiosulfate ion ($\\\\text{S}_2\\text{O}_3^{2-}$) undergoes disproportionation in the presence of mineral acids to form sulfur dioxide and colloidal sulfur.",
      idx: 0,
      exp: "$\\text{Na}_2\\text{S}_2\\text{O}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{SO}_2 + \\text{S} \\downarrow + \\text{H}_2\\text{O}$. Sulfur disproportionates from an average state of $+2$ to $+4$ (in $\\text{SO}_2$) and $0$ (in $\\text{S}$)."
    },
    {
      a: "$\\text{H}_3\\text{PO}_2$ precipitates metallic silver from aqueous $\\text{AgNO}_3$ solution.",
      r: "$\\text{H}_3\\text{PO}_2$ is a strong reducing agent due to the presence of two $\\text{P}-\\text{H}$ bonds.",
      idx: 0,
      exp: "$4\\text{AgNO}_3 + 2\\text{H}_2\\text{O} + \\text{H}_3\\text{PO}_2 \\rightarrow 4\\text{Ag} \\downarrow + 4\\text{HNO}_3 + \\text{H}_3\\text{PO}_4$. $\\text{H}_3\\text{PO}_2$ reduces $\\text{Ag}^+$ to silver."
    },
    {
      a: "Pyrosulfuric acid (oleum, $\\text{H}_2\\text{S}_2\\text{O}_7$) contains no peroxo linkages.",
      r: "In pyrosulfuric acid, two sulfur atoms are joined by an ether-like oxygen bridge ($\\text{S}-\\text{O}-\\text{S}$).",
      idx: 0,
      exp: "Oleum has the structure $\\text{HO}-\\text{SO}_2-\\text{O}-\\text{SO}_2-\\text{OH}$, featuring an $\\text{S}-\\text{O}-\\text{S}$ linkage and no peroxo ($-\\text{O}-\\text{O}-$) bond."
    },
    {
      a: "Chlorous acid ($\\text{HClO}_2$) is a weaker acid than chloric acid ($\\text{HClO}_3$).",
      r: "The oxidation state of chlorine in $\\text{HClO}_2$ is $+3$, while in $\\text{HClO}_3$ it is $+5$, creating greater positive charge on chlorine to pull electron density from oxygen.",
      idx: 0,
      exp: "Higher oxidation state of the central atom increases its effective electronegativity, polarizing the $\\text{O}-\\text{H}$ bond and facilitating proton release. Both are true and Reason explains Assertion."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 78 MCQs covering oxoacids of P, S, and halogens
  const mcqData = [
    {
      q: "What is the basicity of hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)?",
      opts: ["1 (monobasic)", "2 (dibasic)", "3 (tribasic)", "4 (tetrabasic)"],
      c: 0,
      exp: "$\\text{H}_3\\text{PO}_2$ has only one ionizable $-\\text{OH}$ group attached to phosphorus, making it a monobasic acid."
    },
    {
      q: "What is the basicity of orthophosphorous acid ($\\text{H}_3\\text{PO}_3$)?",
      opts: ["2 (dibasic)", "1 (monobasic)", "3 (tribasic)", "4 (tetrabasic)"],
      c: 0,
      exp: "$\\text{H}_3\\text{PO}_3$ contains two ionizable $-\\text{OH}$ groups and one non-ionizable $\\text{P}-\\text{H}$ bond, making it a dibasic acid."
    },
    {
      q: "What is the basicity of pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)?",
      opts: ["4 (tetrabasic)", "2 (dibasic)", "3 (tribasic)", "1 (monobasic)"],
      c: 0,
      exp: "Pyrophosphoric acid contains four ionizable $-\\text{OH}$ groups, making it a tetrabasic acid."
    },
    {
      q: "How many $\\text{P}-\\text{H}$ bonds are present in orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)?",
      opts: ["0", "1", "2", "3"],
      c: 0,
      exp: "In $\\text{H}_3\\text{PO}_4$, all three hydrogens are bonded to oxygen atoms ($3$ $\\text{P}-\\text{OH}$ bonds), so there are zero $\\text{P}-\\text{H}$ bonds."
    },
    {
      q: "How many $\\text{P}-\\text{H}$ bonds are present in hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)?",
      opts: ["2", "1", "0", "3"],
      c: 0,
      exp: "$\\text{H}_3\\text{PO}_2$ has one $\\text{P}=\\text{O}$ double bond, one $\\text{P}-\\text{OH}$ bond, and two $\\text{P}-\\text{H}$ bonds."
    },
    {
      q: "How many $\\text{P}-\\text{H}$ bonds are present in orthophosphorous acid ($\\text{H}_3\\text{PO}_3$)?",
      opts: ["1", "2", "0", "3"],
      c: 0,
      exp: "$\\text{H}_3\\text{PO}_3$ contains one $\\text{P}=\\text{O}$ bond, two $\\text{P}-\\text{OH}$ bonds, and one $\\text{P}-\\text{H}$ bond."
    },
    {
      q: "What is the oxidation state of phosphorus in hypophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_6$)?",
      opts: ["$+4$", "$+3$", "$+5$", "$+2$"],
      c: 0,
      exp: "$\\text{H}_4\\text{P}_2\\text{O}_6$ has a symmetric structure $(\\text{HO})_2\\text{P}(=\\text{O})-\\text{P}(=\\text{O})(\\text{OH})_2$. Due to the homonuclear $\\text{P}-\\text{P}$ bond, the oxidation state of phosphorus is $+4$."
    },
    {
      q: "Which oxoacid of phosphorus contains a direct $\\text{P}-\\text{P}$ single bond?",
      opts: [
        "Hypophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_6$)",
        "Pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)",
        "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)",
        "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)"
      ],
      c: 0,
      exp: "Hypophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_6$) contains a direct $\\text{P}-\\text{P}$ covalent bond between the two phosphorus atoms."
    },
    {
      q: "How many $\\text{P}-\\text{O}-\\text{P}$ bridging bonds are present in pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)?",
      opts: ["1", "2", "3", "0"],
      c: 0,
      exp: "Pyrophosphoric acid is formed by condensing two $\\text{H}_3\\text{PO}_4$ molecules with elimination of one $\\text{H}_2\\text{O}$, creating one $\\text{P}-\\text{O}-\\text{P}$ bridge."
    },
    {
      q: "How many $\\text{P}-\\text{O}-\\text{P}$ bonds are present in a molecule of cyclotrimetaphosphoric acid ($(\\text{HPO}_3)_3$)?",
      opts: ["3", "2", "1", "4"],
      c: 0,
      exp: "Cyclotrimetaphosphoric acid is a cyclic trimer consisting of three $\\text{P}$ atoms connected by three alternating bridging oxygen atoms, forming three $\\text{P}-\\text{O}-\\text{P}$ linkages."
    },
    {
      q: "Which oxoacid of sulfur is commonly known as Caro's acid?",
      opts: [
        "Peroxomonosulfuric acid ($\\text{H}_2\\text{SO}_5$)",
        "Peroxodisulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_8$)",
        "Pyrosulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_7$)",
        "Dithionic acid ($\\text{H}_2\\text{S}_2\\text{O}_6$)"
      ],
      c: 0,
      exp: "Peroxomonosulfuric acid ($\\text{H}_2\\text{SO}_5$) is known as Caro's acid."
    },
    {
      q: "Which oxoacid of sulfur is commonly known as Marshall's acid?",
      opts: [
        "Peroxodisulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_8$)",
        "Peroxomonosulfuric acid ($\\text{H}_2\\text{SO}_5$)",
        "Pyrosulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_7$)",
        "Thiosulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_3$)"
      ],
      c: 0,
      exp: "Peroxodisulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_8$) is commonly called Marshall's acid."
    },
    {
      q: "What is the oxidation state of sulfur in Caro's acid ($\\text{H}_2\\text{SO}_5$)?",
      opts: ["$+6$", "$+8$", "$+4$", "$+5$"],
      c: 0,
      exp: "Caro's acid contains one peroxo group ($-\\text{O}-\\text{O}-$). Its structure is $\\text{HO}-\\text{SO}_2-\\text{O}-\\text{O}-\\text{H}$. The sulfur oxidation state is $+6$."
    },
    {
      q: "What is the oxidation state of sulfur in Marshall's acid ($\\text{H}_2\\text{S}_2\\text{O}_8$)?",
      opts: ["$+6$", "$+7$", "$+8$", "$+5$"],
      c: 0,
      exp: "Marshall's acid has a peroxo linkage ($\\\\text{HO}_3\\text{S}-\\text{O}-\\text{O}-\\text{SO}_3\\text{H}$) with two peroxo oxygens ($-1$). Each sulfur atom has an oxidation state of $+6$."
    },
    {
      q: "How many peroxo ($-\\text{O}-\\text{O}-$) linkages are present in Marshall's acid ($\\text{H}_2\\text{S}_2\\text{O}_8$)?",
      opts: ["1", "2", "3", "0"],
      c: 0,
      exp: "There is exactly one peroxo bond connecting the two $-\\text{SO}_3\\text{H}$ moieties in Marshall's acid."
    },
    {
      q: "What is the chemical formula of oleum (fuming sulfuric acid)?",
      opts: [
        "$\\text{H}_2\\text{S}_2\\text{O}_7$",
        "$\\text{H}_2\\text{S}_2\\text{O}_8$",
        "$\\text{H}_2\\text{SO}_5$",
        "$\\text{H}_2\\text{S}_2\\text{O}_6$"
      ],
      c: 0,
      exp: "Oleum (pyrosulfuric acid) has the chemical formula $\\text{H}_2\\text{S}_2\\text{O}_7$, formed by dissolving $\\text{SO}_3$ gas in concentrated $\\text{H}_2\\text{SO}_4$."
    },
    {
      q: "What type of linkage connects the two sulfur atoms in pyrosulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_7$)?",
      opts: [
        "$\\text{S}-\\text{O}-\\text{S}$ ether-like bridge",
        "$\\text{S}-\\text{O}-\\text{O}-\\text{S}$ peroxo bridge",
        "Direct $\\text{S}-\\text{S}$ covalent bond",
        "Hydrogen bond"
      ],
      c: 0,
      exp: "In $\\text{H}_2\\text{S}_2\\text{O}_7$, two tetrahedral sulfur atoms are joined by an oxygen bridge, forming an $\\text{S}-\\text{O}-\\text{S}$ linkage."
    },
    {
      q: "Which oxoacid of sulfur contains a direct $\\text{S}-\\text{S}$ covalent bond?",
      opts: [
        "Dithionic acid ($\\text{H}_2\\text{S}_2\\text{O}_6$)",
        "Pyrosulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_7$)",
        "Marshall's acid ($\\text{H}_2\\text{S}_2\\text{O}_8$)",
        "Sulfuric acid ($\\text{H}_2\\text{SO}_4$)"
      ],
      c: 0,
      exp: "Dithionic acid has the structure $\\text{HO}_3\\text{S}-\\text{SO}_3\\text{H}$ containing a direct $\\text{S}-\\text{S}$ single bond."
    },
    {
      q: "What is the oxidation state of sulfur in dithionic acid ($\\text{H}_2\\text{S}_2\\text{O}_6$)?",
      opts: ["$+5$", "$+6$", "$+4$", "$+3$"],
      c: 0,
      exp: "In $\\text{H}_2\\text{S}_2\\text{O}_6$, with the symmetric $\\text{S}-\\text{S}$ bond, each sulfur atom has an oxidation state of $+5$."
    },
    {
      q: "Which of the following is the only oxoacid formed by fluorine?",
      opts: ["$\\text{HOF}$", "$\\text{HFO}_2$", "$\\text{HFO}_3$", "$\\text{HFO}_4$"],
      c: 0,
      exp: "Due to high electronegativity and lack of $d$-orbitals, fluorine forms only one oxoacid: hypofluorous acid ($\\text{HOF}$)."
    },
    {
      q: "In hypofluorous acid ($\\text{HOF}$), what are the oxidation states of $\\text{H}$, $\\text{O}$, and $\\text{F}$ respectively?",
      opts: [
        "$+1, 0, -1$",
        "$+1, -2, +1$",
        "$+1, -1, 0$",
        "$-1, +2, -1$"
      ],
      c: 0,
      exp: "Since fluorine is more electronegative than oxygen, and oxygen is more electronegative than hydrogen, the formal oxidation states in $\\text{H}-\\text{O}-\\text{F}$ are $\\text{H} = +1$, $\\text{O} = 0$, and $\\text{F} = -1$."
    },
    {
      q: "Which of the following oxoacids of chlorine is the strongest acid?",
      opts: ["$\\text{HClO}_4$", "$\\text{HClO}_3$", "$\\text{HClO}_2$", "$\\text{HOCl}$"],
      c: 0,
      exp: "$\\text{HClO}_4$ (perchloric acid) is the strongest acid among all chlorine oxoacids because its conjugate base $\\text{ClO}_4^-$ has four equivalent resonance structures with extensively delocalized charge."
    },
    {
      q: "What is the correct order of acidic strength for the oxoacids of chlorine?",
      opts: [
        "$\\text{HOCl} < \\text{HClO}_2 < \\text{HClO}_3 < \\text{HClO}_4$",
        "$\\text{HClO}_4 < \\text{HClO}_3 < \\text{HClO}_2 < \\text{HOCl}$",
        "$\\text{HClO}_2 < \\text{HOCl} < \\text{HClO}_3 < \\text{HClO}_4$",
        "$\\text{HClO}_3 < \\text{HClO}_4 < \\text{HClO}_2 < \\text{HOCl}$"
      ],
      c: 0,
      exp: "Acidic strength increases with increasing oxidation state of chlorine: $\\text{HOCl} (+1) < \\text{HClO}_2 (+3) < \\text{HClO}_3 (+5) < \\text{HClO}_4 (+7)$."
    },
    {
      q: "What is the correct order of oxidizing power for the oxoacids of chlorine?",
      opts: [
        "$\\text{HOCl} > \\text{HClO}_2 > \\text{HClO}_3 > \\text{HClO}_4$",
        "$\\text{HClO}_4 > \\text{HClO}_3 > \\text{HClO}_2 > \\text{HOCl}$",
        "$\\text{HClO}_2 > \\text{HOCl} > \\text{HClO}_3 > \\text{HClO}_4$",
        "$\\text{HOCl} > \\text{HClO}_4 > \\text{HClO}_3 > \\text{HClO}_2$"
      ],
      c: 0,
      exp: "Hypochlorous acid ($\\text{HOCl}$) is thermodynamically and kinetically the least stable, releasing oxygen most readily. Hence, oxidizing power decreases as stability increases from $\\text{HOCl}$ to $\\text{HClO}_4$."
    },
    {
      q: "What is the molecular geometry and hybridization of chlorine in the perchlorate ion ($\\text{ClO}_4^-$)?",
      opts: [
        "Tetrahedral, $sp^3$",
        "Square planar, $dsp^2$",
        "Pyramidal, $sp^3$",
        "Trigonal bipyramidal, $sp^3d$"
      ],
      c: 0,
      exp: "$\\text{ClO}_4^-$ has $4$ bonding domains and $0$ lone pairs on chlorine ($sp^3$ hybridization), resulting in a regular tetrahedral shape."
    },
    {
      q: "What is the molecular geometry and hybridization of chlorine in the chlorate ion ($\\text{ClO}_3^-$)?",
      opts: [
        "Trigonal pyramidal, $sp^3$",
        "Trigonal planar, $sp^2$",
        "T-shaped, $sp^3d$",
        "Tetrahedral, $sp^3$"
      ],
      c: 0,
      exp: "$\\text{ClO}_3^-$ has $3$ bond pairs and $1$ lone pair on chlorine ($sp^3$ hybridization), resulting in a trigonal pyramidal shape."
    },
    {
      q: "What is the molecular geometry and hybridization of chlorine in the chlorite ion ($\\text{ClO}_2^-$)?",
      opts: [
        "Bent (angular), $sp^3$",
        "Linear, $sp$",
        "Trigonal planar, $sp^2$",
        "T-shaped, $sp^3d$"
      ],
      c: 0,
      exp: "$\\text{ClO}_2^-$ has $2$ bond pairs and $2$ lone pairs on chlorine ($sp^3$ hybridization), resulting in a bent (angular) shape with a bond angle of about $111^\\circ$."
    },
    {
      q: "What is the geometry of the hypochlorite ion ($\\text{ClO}^-$)?",
      opts: ["Linear", "Bent", "Pyramidal", "Tetrahedral"],
      c: 0,
      exp: "Any diatomic species like $\\text{ClO}^-$ is necessarily linear."
    },
    {
      q: "Which of the following oxoacids of phosphorus is formed by the reaction of red phosphorus with alkali?",
      opts: [
        "Hypophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_6$)",
        "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)",
        "Orthophosphorous acid ($\\text{H}_3\\text{PO}_3$)",
        "Pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)"
      ],
      c: 0,
      exp: "Controlled alkaline oxidation of red phosphorus yields salts of hypophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_6$)."
    },
    {
      q: "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$) on heating to $523\\text{ K}$ yields:",
      opts: [
        "Pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)",
        "Metaphosphoric acid ($\\text{HPO}_3$)",
        "Phosphorus pentoxide ($\\text{P}_4\\text{O}_{10}$)",
        "Phosphine ($\\text{PH}_3$)"
      ],
      c: 0,
      exp: "$2\\text{H}_3\\text{PO}_4 \\xrightarrow{523\\text{ K}} \\text{H}_4\\text{P}_2\\text{O}_7 + \\text{H}_2\\text{O}$. Heating at $523\\text{ K}$ condenses orthophosphoric acid into pyrophosphoric acid."
    },
    {
      q: "On heating pyrophosphoric acid strongly at $873\\text{ K}$, the product obtained is:",
      opts: [
        "Metaphosphoric acid ($\\text{HPO}_3$)",
        "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)",
        "Phosphine ($\\text{PH}_3$)",
        "Phosphorous acid ($\\text{H}_3\\text{PO}_3$)"
      ],
      c: 0,
      exp: "$\\text{H}_4\\text{P}_2\\text{O}_7 \\xrightarrow{873\\text{ K}} 2\\text{HPO}_3 + \\text{H}_2\\text{O}$. Strong heating produces metaphosphoric acid."
    },
    {
      q: "Which of the following oxoacids of phosphorus exists as a polymer with alternating $-\\text{P}-\\text{O}-\\text{P}-$ linkages?",
      opts: [
        "Polymetaphosphoric acid ($(\\text{HPO}_3)_n$)",
        "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)",
        "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)",
        "Hypophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_6$)"
      ],
      c: 0,
      exp: "Polymetaphosphoric acid consists of long polymeric chains of $[\\text{HPO}_3]_n$ linked by bridging oxygen atoms."
    },
    {
      q: "Sodium hexametaphosphate, commonly known as 'Calgon', has the molecular formula:",
      opts: [
        "$\\text{Na}_6\\text{P}_6\\text{O}_{18}$",
        "$\\text{Na}_3\\text{P}_3\\text{O}_9$",
        "$\\text{Na}_4\\text{P}_2\\text{O}_7$",
        "$\\text{Na}_2\\text{HPO}_4$"
      ],
      c: 0,
      exp: "Calgon is sodium hexametaphosphate, $\\text{Na}_6\\text{P}_6\\text{O}_{18}$ or $\\text{Na}_2[\\text{Na}_4(\\text{PO}_3)_6]$, used for softening hard water by sequestering $\\text{Ca}^{2+}$ and $\\text{Mg}^{2+}$ ions."
    },
    {
      q: "How does Calgon soften hard water?",
      opts: [
        "It forms soluble complex ions with $\\text{Ca}^{2+}$ and $\\text{Mg}^{2+}$, preventing them from precipitating soap",
        "It precipitates calcium as insoluble calcium oxide",
        "It oxidizes magnesium to magnesium hydroxide",
        "It neutralizes hardness by boiling"
      ],
      c: 0,
      exp: "$\\text{Na}_2[\\text{Na}_4(\\text{PO}_3)_6] + 2\\text{Ca}^{2+} \\rightarrow \\text{Na}_2[\\text{Ca}_2(\\text{PO}_3)_6] + 4\\text{Na}^+$. The complex anion keeps calcium and magnesium in solution."
    },
    {
      q: "Which oxoacid of phosphorus is prepared by the alkaline hydrolysis of $\\text{PCl}_3$?",
      opts: [
        "Orthophosphorous acid ($\\text{H}_3\\text{PO}_3$)",
        "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)",
        "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)",
        "Pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)"
      ],
      c: 0,
      exp: "$\\text{PCl}_3 + 3\\text{H}_2\\text{O} \\rightarrow \\text{H}_3\\text{PO}_3 + 3\\text{HCl}$. Hydrolysis of phosphorus trichloride yields orthophosphorous acid."
    },
    {
      q: "Which oxoacid of phosphorus is formed by the hydrolysis of phosphorus pentoxide ($\\text{P}_4\\text{O}_{10}$) with water?",
      opts: [
        "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)",
        "Orthophosphorous acid ($\\text{H}_3\\text{PO}_3$)",
        "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)",
        "Hypophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_6$)"
      ],
      c: 0,
      exp: "$\\text{P}_4\\text{O}_{10} + 6\\text{H}_2\\text{O} \\rightarrow 4\\text{H}_3\\text{PO}_4$. Hydrolysis of $\\text{P}_4\\text{O}_{10}$ yields orthophosphoric acid."
    },
    {
      q: "What is the product of the hydrolysis of phosphorus trioxide ($\\text{P}_4\\text{O}_6$) with cold water?",
      opts: [
        "Orthophosphorous acid ($\\text{H}_3\\text{PO}_3$)",
        "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)",
        "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)",
        "Phosphine ($\\text{PH}_3$)"
      ],
      c: 0,
      exp: "$\\text{P}_4\\text{O}_6 + 6\\text{H}_2\\text{O} \\rightarrow 4\\text{H}_3\\text{PO}_3$. Cold water hydrolysis of $\\text{P}_4\\text{O}_6$ gives orthophosphorous acid."
    },
    {
      q: "Which of the following salts of orthophosphoric acid is amphoteric in aqueous solution?",
      opts: [
        "$\\text{Na}_2\\text{HPO}_4$ and $\\text{NaH}_2\\text{PO}_4$",
        "$\\text{Na}_3\\text{PO}_4$",
        "$\\text{NaCl}$",
        "$\\text{Na}_3\\text{PO}_3$"
      ],
      c: 0,
      exp: "Hydrogen phosphate anions $\\text{H}_2\\text{PO}_4^-$ and $\\text{HPO}_4^{2-}$ can both donate a proton (act as acid) or accept a proton (act as base), behaving amphoterically."
    },
    {
      q: "In which of the following oxoacids of sulfur do two sulfur atoms have DIFFERENT oxidation states?",
      opts: [
        "Thiosulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_3$)",
        "Dithionic acid ($\\text{H}_2\\text{S}_2\\text{O}_6$)",
        "Pyrosulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_7$)",
        "Marshall's acid ($\\text{H}_2\\text{S}_2\\text{O}_8$)"
      ],
      c: 0,
      exp: "In $\\text{H}_2\\text{S}_2\\text{O}_3$, the central sulfur atom bonded to oxygens has an oxidation state of $+6$ (or $+5$), while the terminal sulfur has an oxidation state of $-2$ (nominal average $+2$)."
    },
    {
      q: "Which of the following oxoacids of sulfur has the lowest oxidation state of sulfur?",
      opts: [
        "Sulfoxylic acid ($\\text{H}_2\\text{SO}_2$)",
        "Sulfurous acid ($\\text{H}_2\\text{SO}_3$)",
        "Sulfuric acid ($\\text{H}_2\\text{SO}_4$)",
        "Dithionic acid ($\\text{H}_2\\text{S}_2\\text{O}_6$)"
      ],
      c: 0,
      exp: "In sulfoxylic acid ($\\text{H}_2\\text{SO}_2$), sulfur is in the $+2$ oxidation state, which is lower than $+4$ in $\\text{H}_2\\text{SO}_3$ or $+6$ in $\\text{H}_2\\text{SO}_4$."
    },
    {
      q: "Which of the following compounds is used as an antichlor to remove excess chlorine from bleached fabrics?",
      opts: [
        "Sodium thiosulfate ($\\text{Na}_2\\text{S}_2\\text{O}_3$)",
        "Sodium sulfate ($\\text{Na}_2\\text{SO}_4$)",
        "Sodium chloride ($\\text{NaCl}$)",
        "Sodium nitrate ($\\text{NaNO}_3$)"
      ],
      c: 0,
      exp: "Sodium thiosulfate ('hypo') reduces excess chlorine to chloride: $\\text{Na}_2\\text{S}_2\\text{O}_3 + 4\\text{Cl}_2 + 5\\text{H}_2\\text{O} \\rightarrow 2\\text{NaHSO}_4 + 8\\text{HCl}$."
    },
    {
      q: "In photography, sodium thiosulfate ('hypo') is used as a fixing agent because:",
      opts: [
        "It dissolves unreacted silver halides by forming a soluble complex $[\\text{Ag}(\\text{S}_2\\text{O}_3)_2]^{3-}$",
        "It reduces silver bromide to metallic silver",
        "It oxidizes developer solution",
        "It hardens the gelatin layer"
      ],
      c: 0,
      exp: "$\\text{AgBr} + 2\\text{Na}_2\\text{S}_2\\text{O}_3 \\rightarrow \\text{Na}_3[\\text{Ag}(\\text{S}_2\\text{O}_3)_2] + \\text{NaBr}$. Hypo dissolves unexposed $\\text{AgBr}$ as a soluble dithiosulfatoargentate(I) complex."
    },
    {
      q: "When sodium thiosulfate solution is titrated against iodine in iodometric titrations, the oxidation product of thiosulfate is:",
      opts: [
        "Sodium tetrathionate ($\\text{Na}_2\\text{S}_4\\text{O}_6$)",
        "Sodium sulfate ($\\text{Na}_2\\text{SO}_4$)",
        "Sodium sulfite ($\\text{Na}_2\\text{SO}_3$)",
        "Sulfur dioxide ($\\text{SO}_2$)"
      ],
      c: 0,
      exp: "$2\\text{Na}_2\\text{S}_2\\text{O}_3 + \\text{I}_2 \\rightarrow \\text{Na}_2\\text{S}_4\\text{O}_6 + 2\\text{NaI}$. Thiosulfate is oxidized to tetrathionate."
    },
    {
      q: "What is the average oxidation state of sulfur in the tetrathionate ion ($\\text{S}_4\\text{O}_6^{2-}$)?",
      opts: ["$+2.5$", "$+2$", "$+3$", "$+5$"],
      c: 0,
      exp: "In $\\text{S}_4\\text{O}_6^{2-}$, $4x + 6(-2) = -2 \\implies 4x = 10 \\implies x = +2.5$."
    },
    {
      q: "In the tetrathionate ion ($\\text{S}_4\\text{O}_6^{2-}$), what are the individual oxidation states of the four sulfur atoms?",
      opts: [
        "Two sulfurs at $+5$ and two sulfurs at $0$",
        "All four sulfurs at $+2.5$",
        "Two sulfurs at $+4$ and two at $+1$",
        "Two sulfurs at $+6$ and two at $-1$"
      ],
      c: 0,
      exp: "The structure is $^-\\text{O}_3\\text{S}-\\text{S}-\\text{S}-\\text{SO}_3^-$. The two central bridging sulfur atoms have an oxidation state of $0$, while the two terminal sulfur atoms have an oxidation state of $+5$."
    },
    {
      q: "How many bridging sulfur-sulfur bonds ($-\\text{S}-\\text{S}-$) are present in the tetrathionate ion ($\\text{S}_4\\text{O}_6^{2-}$)?",
      opts: ["3", "2", "1", "0"],
      c: 0,
      exp: "The four sulfur atoms form a linear chain $\\text{S}-\\text{S}-\\text{S}-\\text{S}$ with three $\\text{S}-\\text{S}$ bonds."
    },
    {
      q: "Which oxoacid of halogen has the highest oxidizing potential?",
      opts: ["$\\text{HOF}$", "$\\text{HOCl}$", "$\\text{HOBr}$", "$\\text{HOI}$"],
      c: 0,
      exp: "$\\text{HOF}$ (hypofluorous acid) is an extremely powerful oxidizing agent because of the presence of the exceptionally electronegative fluorine atom bonded to oxygen."
    },
    {
      q: "How is perbromic acid ($\\text{HBrO}_4$) synthesized in the laboratory?",
      opts: [
        "By oxidizing bromate ($\\text{BrO}_3^-$) with elemental fluorine in alkaline solution",
        "By heating $\\text{HBr}$ with concentrated $\\text{HNO}_3$",
        "By treating $\\text{Br}_2$ with hot concentrated $\\text{H}_2\\text{SO}_4$",
        "By hydrolysis of $\\text{BrF}_3$"
      ],
      c: 0,
      exp: "Perbromate was long thought impossible to synthesize until it was prepared by oxidizing $\\text{BrO}_3^-$ using fluorine gas in alkaline solution: $\\text{BrO}_3^- + \\text{F}_2 + 2\\text{OH}^- \\rightarrow \\text{BrO}_4^- + 2\\text{F}^- + \\text{H}_2\\text{O}$."
    },
    {
      q: "What is the formula of paraperiodic acid?",
      opts: ["$\\text{H}_5\\text{IO}_6$", "$\\text{HIO}_4$", "$\\text{H}_3\\text{IO}_5$", "$\\text{HIO}_3$"],
      c: 0,
      exp: "Paraperiodic acid (orthoperiodic acid) has the molecular formula $\\text{H}_5\\text{IO}_6$, containing an octahedral $\\text{IO}_6$ coordination group."
    },
    {
      q: "What is the basicity of paraperiodic acid ($\\text{H}_5\\text{IO}_6$)?",
      opts: ["5", "1", "3", "7"],
      c: 0,
      exp: "$\\text{H}_5\\text{IO}_6$ contains five ionizable $-\\text{OH}$ groups, making it a pentabasic acid."
    },
    {
      q: "In paraperiodic acid ($\\text{H}_5\\text{IO}_6$), what is the oxidation state of iodine?",
      opts: ["$+7$", "$+5$", "$+6$", "$+3$"],
      c: 0,
      exp: "In $\\text{H}_5\\text{IO}_6$, $5(+1) + x + 6(-2) = 0 \\implies x - 7 = 0 \\implies x = +7$."
    },
    {
      q: "Which reagent is widely used to cleave vicinal 1,2-diols into aldehydes or ketones?",
      opts: [
        "Periodic acid ($\\text{HIO}_4$ / $\\text{H}_5\\text{IO}_6$)",
        "Hypochlorous acid ($\\text{HOCl}$)",
        "Sulfuric acid ($\\text{H}_2\\text{SO}_4$)",
        "Phosphoric acid ($\\text{H}_3\\text{PO}_4$)"
      ],
      c: 0,
      exp: "Malaprade reaction: Periodic acid specifically oxidizes and cleaves vicinal glycols into carbonyl compounds via a cyclic periodate ester intermediate."
    },
    {
      q: "Which of the following compounds gives a yellow precipitate of ammonium phosphomolybdate when heated with ammonium molybdate and concentrated $\\text{HNO}_3$?",
      opts: [
        "Phosphate ions ($\\text{PO}_4^{3-}$)",
        "Sulfate ions ($\\text{SO}_4^{2-}$)",
        "Chloride ions ($\\text{Cl}^-$)",
        "Nitrate ions ($\\text{NO}_3^-$)"
      ],
      c: 0,
      exp: "Phosphate ions react with ammonium molybdate in presence of conc. $\\text{HNO}_3$ to give a canary yellow precipitate of $(\\text{NH}_4)_3[\\text{P(Mo}_{12}\\text{O}_{40})]$."
    },
    {
      q: "What is the formula of the yellow precipitate obtained in the ammonium phosphomolybdate test for phosphates?",
      opts: [
        "$(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$",
        "$(\\text{NH}_4)_2[\\text{PMo}_{12}\\text{O}_{40}]$",
        "$(\\text{NH}_4)_3\\text{PO}_4$",
        "$\\text{MoPO}_4$"
      ],
      c: 0,
      exp: "The canary yellow precipitate is ammonium phosphomolybdate, $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}] \\cdot x\\text{H}_2\\text{O}$."
    },
    {
      q: "Which oxoacid of phosphorus is obtained when red phosphorus is heated with water under pressure?",
      opts: [
        "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)",
        "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)",
        "Phosphine ($\\text{PH}_3$)",
        "Pyrophosphorous acid ($\\text{H}_4\\text{P}_2\\text{O}_5$)"
      ],
      c: 0,
      exp: "Red phosphorus oxidizes to orthophosphoric acid ($\\text{H}_3\\text{PO}_4$) and liberates hydrogen when heated with water under pressure in the presence of catalyst."
    },
    {
      q: "In pyrophosphorous acid ($\\text{H}_4\\text{P}_2\\text{O}_5$), what is the oxidation state of each phosphorus atom?",
      opts: ["$+3$", "$+4$", "$+5$", "$+2$"],
      c: 0,
      exp: "$\\text{H}_4\\text{P}_2\\text{O}_5$ has two phosphorus atoms in the $+3$ oxidation state connected by a $\\text{P}-\\text{O}-\\text{P}$ linkage."
    },
    {
      q: "How many $\\text{P}-\\text{H}$ bonds are present in pyrophosphorous acid ($\\text{H}_4\\text{P}_2\\text{O}_5$)?",
      opts: ["2", "1", "0", "4"],
      c: 0,
      exp: "$\\text{H}_4\\text{P}_2\\text{O}_5$ has the structure $(\\text{HO})(\\text{H})\\text{P}(=\\text{O})-\\text{O}-\\text{P}(=\\text{O})(\\text{H})(\\text{OH})$, containing two $\\text{P}-\\text{H}$ bonds."
    },
    {
      q: "What is the basicity of pyrophosphorous acid ($\\text{H}_4\\text{P}_2\\text{O}_5$)?",
      opts: ["2 (dibasic)", "4 (tetrabasic)", "1 (monobasic)", "3 (tribasic)"],
      c: 0,
      exp: "$\\text{H}_4\\text{P}_2\\text{O}_5$ contains two ionizable $-\\text{OH}$ groups and two non-ionizable $\\text{P}-\\text{H}$ bonds, making it dibasic."
    },
    {
      q: "Which oxoacid of phosphorus is formed when phosphorus trichloride is warmed with phosphorous acid?",
      opts: [
        "Pyrophosphorous acid ($\\text{H}_4\\text{P}_2\\text{O}_5$)",
        "Pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)",
        "Hypophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_6$)",
        "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)"
      ],
      c: 0,
      exp: "$\\text{PCl}_3 + 5\\text{H}_3\\text{PO}_3 \\rightarrow 3\\text{H}_4\\text{P}_2\\text{O}_5 + 3\\text{HCl}$."
    },
    {
      q: "What is the action of concentrated $\\text{H}_2\\text{SO}_4$ on formic acid ($\\text{HCOOH}$)?",
      opts: [
        "Dehydration to produce pure carbon monoxide ($\\text{CO}$)",
        "Oxidation to carbon dioxide ($\\text{CO}_2$)",
        "Reduction to methanol",
        "No reaction"
      ],
      c: 0,
      exp: "$\\text{HCOOH} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4} \\text{CO} + \\text{H}_2\\text{O}$. Conc. $\\text{H}_2\\text{SO}_4$ acts as a dehydrating agent to liberate pure carbon monoxide."
    },
    {
      q: "What is the action of concentrated $\\text{H}_2\\text{SO}_4$ on oxalic acid ($(\\text{COOH})_2$)?",
      opts: [
        "Dehydration to produce an equimolar mixture of $\\text{CO}$ and $\\text{CO}_2$",
        "Oxidation to produce pure $\\text{CO}_2$",
        "Reduction to glycol",
        "Formation of sulfur dioxide"
      ],
      c: 0,
      exp: "$(\\text{COOH})_2 \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4} \\text{CO} + \\text{CO}_2 + \\text{H}_2\\text{O}$. Conc. $\\text{H}_2\\text{SO}_4$ dehydrates oxalic acid into an equimolar mix of $\\text{CO}$ and $\\text{CO}_2$."
    },
    {
      q: "What happens when concentrated $\\text{H}_2\\text{SO}_4$ is added to potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$ and warmed?",
      opts: [
        "Carbon monoxide ($\\text{CO}$) gas is evolved",
        "Cyanogen gas ($(\\text{CN})_2$) is evolved",
        "Sulfur dioxide gas is evolved",
        "Hydrogen cyanide ($\\text{HCN}$) only is evolved"
      ],
      c: 0,
      exp: "$\\text{K}_4[\\text{Fe(CN)}_6] + 6\\text{H}_2\\text{SO}_4 + 6\\text{H}_2\\text{O} \\rightarrow 2\\text{K}_2\\text{SO}_4 + \\text{FeSO}_4 + 3(\\text{NH}_4)_2\\text{SO}_4 + 6\\text{CO}$. Pure $\\text{CO}$ is liberated."
    },
    {
      q: "Which oxoacid of chlorine is an explosive, yellow oily liquid at room temperature?",
      opts: ["$\\text{HClO}_4$", "$\\text{HOCl}$", "$\\text{HClO}_2$", "$\\text{HClO}_3$"],
      c: 0,
      exp: "Anhydrous perchloric acid ($\\text{HClO}_4$) is a colorless/pale yellow oily liquid that explodes violently upon contact with organic materials or on heating."
    },
    {
      q: "Which of the following compounds is the anhydride of perchloric acid ($\\text{HClO}_4$)?",
      opts: ["$\\text{Cl}_2\\text{O}_7$", "$\\text{Cl}_2\\text{O}$", "$\\text{ClO}_2$", "$\\text{Cl}_2\\text{O}_6$"],
      c: 0,
      exp: "Dichlorine heptoxide ($\\text{Cl}_2\\text{O}_7$) is the anhydride of $\\text{HClO}_4$: $2\\text{HClO}_4 \\xrightarrow{-\\text{H}_2\\text{O}} \\text{Cl}_2\\text{O}_7$."
    },
    {
      q: "Which of the following is the anhydride of hypochlorous acid ($\\text{HOCl}$)?",
      opts: ["$\\text{Cl}_2\\text{O}$", "$\\text{ClO}_2$", "$\\text{Cl}_2\\text{O}_6$", "$\\text{Cl}_2\\text{O}_7$"],
      c: 0,
      exp: "Dichlorine monoxide ($\\text{Cl}_2\\text{O}$) is the acid anhydride of $\\text{HOCl}$: $2\\text{HOCl} \\rightarrow \\text{Cl}_2\\text{O} + \\text{H}_2\\text{O}$."
    },
    {
      q: "What is the anhydride of nitrous acid ($\\text{HNO}_2$)?",
      opts: ["$\\text{N}_2\\text{O}_3$", "$\\text{N}_2\\text{O}_5$", "$\\text{NO}$", "$\\text{NO}_2$"],
      c: 0,
      exp: "Dinitrogen trioxide ($\\text{N}_2\\text{O}_3$) is the anhydride of nitrous acid: $\\text{N}_2\\text{O}_3 + \\text{H}_2\\text{O} \\rightarrow 2\\text{HNO}_2$."
    },
    {
      q: "What is the anhydride of nitric acid ($\\text{HNO}_3$)?",
      opts: ["$\\text{N}_2\\text{O}_5$", "$\\text{N}_2\\text{O}_3$", "$\\text{NO}_2$", "$\\text{N}_2\\text{O}_4$"],
      c: 0,
      exp: "Dinitrogen pentoxide ($\\text{N}_2\\text{O}_5$) is the anhydride of nitric acid: $\\text{N}_2\\text{O}_5 + \\text{H}_2\\text{O} \\rightarrow 2\\text{HNO}_3$."
    },
    {
      q: "In the crystalline solid state, dinitrogen pentoxide ($\\text{N}_2\\text{O}_5$) exists as:",
      opts: [
        "An ionic solid $[\\text{NO}_2]^+[\\text{NO}_3]^-$",
        "A covalent dimer $\\text{N}_4\\text{O}_{10}$",
        "Discrete covalent $\\text{N}_2\\text{O}_5$ molecules",
        "An ionic solid $[\\text{NO}]^+[\\text{NO}_3]^-$"
      ],
      c: 0,
      exp: "Solid $\\text{N}_2\\text{O}_5$ is nitronium nitrate, an ionic solid consisting of linear nitronium cations $[\\text{NO}_2]^+$ and planar nitrate anions $[\\text{NO}_3]^-$."
    },
    {
      q: "In the crystalline solid state, $\\text{PBr}_5$ exists as:",
      opts: [
        "$[\\text{PBr}_4]^+ \\text{Br}^-$",
        "$[\\text{PBr}_4]^+[\\text{PBr}_6]^-$",
        "Covalent trigonal bipyramidal molecules",
        "Polymeric $[\\text{PBr}_3]_n$"
      ],
      c: 0,
      exp: "Because bromine is too large to fit six atoms around phosphorus in $[\\text{PBr}_6]^-$, solid $\\text{PBr}_5$ exists as tetrahedral $[\\text{PBr}_4]^+$ and discrete bromide $\\text{Br}^-$ ions."
    },
    {
      q: "What is the shape of the nitronium ion ($[\\text{NO}_2]^+$)?",
      opts: ["Linear, $sp$", "Bent, $sp^2$", "Trigonal planar, $sp^2$", "Tetrahedral, $sp^3$"],
      c: 0,
      exp: "$[\\text{NO}_2]^+$ is isoelectronic with $\\text{CO}_2$ (16 valence electrons), having $sp$ hybridization and a linear geometry ($180^\\circ$)."
    },
    {
      q: "Which of the following compounds has the highest number of $\\text{P}-\\text{OH}$ bonds per phosphorus atom?",
      opts: [
        "$\\text{H}_3\\text{PO}_4$",
        "$\\text{H}_3\\text{PO}_3$",
        "$\\text{H}_3\\text{PO}_2$",
        "$\\text{H}_4\\text{P}_2\\text{O}_7$"
      ],
      c: 0,
      exp: "$\\text{H}_3\\text{PO}_4$ has $3$ $\\text{P}-\\text{OH}$ bonds per phosphorus atom. $\\text{H}_3\\text{PO}_3$ has $2$, $\\text{H}_3\\text{PO}_2$ has $1$, and $\\text{H}_4\\text{P}_2\\text{O}_7$ has $4/2 = 2$."
    },
    {
      q: "Which oxoacid of phosphorus is obtained when white phosphorus is boiled with barium hydroxide solution, followed by treatment with dilute $\\text{H}_2\\text{SO}_4$?",
      opts: [
        "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)",
        "Orthophosphorous acid ($\\text{H}_3\\text{PO}_3$)",
        "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)",
        "Pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)"
      ],
      c: 0,
      exp: "$2\\text{P}_4 + 3\\text{Ba(OH)}_2 + 6\\text{H}_2\\text{O} \\rightarrow 3\\text{Ba(H}_2\\text{PO}_2)_2 + 2\\text{PH}_3$. Treatment with $\\text{H}_2\\text{SO}_4$ precipitates $\\text{BaSO}_4$ leaving pure $\\text{H}_3\\text{PO}_2$."
    },
    {
      q: "The structural formula of hypophosphorous acid is:",
      opts: [
        "$\\text{H}_2\\text{PO(OH)}$",
        "$\\text{HPO(OH)}_2$",
        "$\\text{PO(OH)}_3$",
        "$\\text{P(OH)}_3$"
      ],
      c: 0,
      exp: "Hypophosphorous acid has one $-\\text{OH}$ group, two $-\\text{H}$ groups, and one $=\\text{O}$ attached to $\\text{P}$, represented as $\\text{H}_2\\text{PO(OH)}$."
    },
    {
      q: "The structural formula of orthophosphorous acid is:",
      opts: [
        "$\\text{HPO(OH)}_2$",
        "$\\text{H}_2\\text{PO(OH)}$",
        "$\\text{PO(OH)}_3$",
        "$\\text{P(OH)}_3$"
      ],
      c: 0,
      exp: "Orthophosphorous acid has two $-\\text{OH}$ groups, one $-\\text{H}$ group, and one $=\\text{O}$ attached to $\\text{P}$, represented as $\\text{HPO(OH)}_2$."
    },
    {
      q: "Which of the following oxoacids of sulfur is formed when sulfur dioxide dissolves in water?",
      opts: [
        "Sulfurous acid ($\\text{H}_2\\text{SO}_3$)",
        "Sulfuric acid ($\\text{H}_2\\text{SO}_4$)",
        "Dithionic acid ($\\text{H}_2\\text{S}_2\\text{O}_6$)",
        "Pyrosulfuric acid ($\\text{H}_2\\text{S}_2\\text{O}_7$)"
      ],
      c: 0,
      exp: "$\\text{SO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{SO}_3$. Sulfur dioxide is the anhydride of sulfurous acid."
    },
    {
      q: "Which of the following oxoacids of sulfur is formed when sulfur trioxide dissolves in water?",
      opts: [
        "Sulfuric acid ($\\text{H}_2\\text{SO}_4$)",
        "Sulfurous acid ($\\text{H}_2\\text{SO}_3$)",
        "Caro's acid ($\\text{H}_2\\text{SO}_5$)",
        "Marshall's acid ($\\text{H}_2\\text{S}_2\\text{O}_8$)"
      ],
      c: 0,
      exp: "$\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4$. Sulfur trioxide is the anhydride of sulfuric acid."
    },
    {
      q: "Which of the following compounds is an example of an oxoacid of halogen with oxidation state $+3$?",
      opts: ["$\\text{HClO}_2$", "$\\text{HOCl}$", "$\\text{HClO}_3$", "$\\text{HClO}_4$"],
      c: 0,
      exp: "In chlorous acid ($\\text{HClO}_2$), chlorine is in the $+3$ oxidation state: $1 + x + 2(-2) = 0 \\implies x = +3$."
    },
    {
      q: "Which of the following oxoacids of halogen has oxidation state $+5$?",
      opts: ["$\\text{HClO}_3$", "$\\text{HOCl}$", "$\\text{HClO}_2$", "$\\text{HClO}_4$"],
      c: 0,
      exp: "In chloric acid ($\\text{HClO}_3$), chlorine is in the $+5$ oxidation state: $1 + x + 3(-2) = 0 \\implies x = +5$."
    }
  ];

  mcqData.slice(0, 78).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "What is the basicity of orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)?",
    "3",
    "$\\text{H}_3\\text{PO}_4$ contains three ionizable $-\\text{OH}$ groups, making it tribasic."
  ));
  list.push(createNumerical(st,
    "What is the basicity of orthophosphorous acid ($\\text{H}_3\\text{PO}_3$)?",
    "2",
    "$\\text{H}_3\\text{PO}_3$ has two ionizable $-\\text{OH}$ groups, making it dibasic."
  ));
  list.push(createNumerical(st,
    "What is the basicity of hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)?",
    "1",
    "$\\text{H}_3\\text{PO}_2$ has one ionizable $-\\text{OH}$ group, making it monobasic."
  ));
  list.push(createNumerical(st,
    "What is the basicity of pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)?",
    "4",
    "Pyrophosphoric acid has four ionizable $-\\text{OH}$ groups, making it tetrabasic."
  ));
  list.push(createNumerical(st,
    "How many $\\text{P}-\\text{H}$ bonds are present in a molecule of hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)?",
    "2",
    "$\\text{H}_3\\text{PO}_2$ contains $2$ non-ionizable $\\text{P}-\\text{H}$ bonds."
  ));
  list.push(createNumerical(st,
    "How many $\\text{P}-\\text{H}$ bonds are present in a molecule of orthophosphorous acid ($\\text{H}_3\\text{PO}_3$)?",
    "1",
    "$\\text{H}_3\\text{PO}_3$ contains $1$ $\\text{P}-\\text{H}$ bond."
  ));
  list.push(createNumerical(st,
    "How many $\\text{P}-\\text{H}$ bonds are present in a molecule of orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)?",
    "0",
    "$\\text{H}_3\\text{PO}_4$ has zero $\\text{P}-\\text{H}$ bonds."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of sulfur in Caro's acid ($\\text{H}_2\\text{SO}_5$)?",
    "6",
    "Caro's acid contains one peroxo linkage, so sulfur has an oxidation state of $+6$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of sulfur in Marshall's acid ($\\text{H}_2\\text{S}_2\\text{O}_8$)?",
    "6",
    "Marshall's acid has a peroxo bridge ($-\\text{O}-\\text{O}-$), giving each sulfur an oxidation state of $+6$."
  ));
  list.push(createNumerical(st,
    "How many peroxo ($-\\text{O}-\\text{O}-$) linkages are present in a molecule of Marshall's acid ($\\text{H}_2\\text{S}_2\\text{O}_8$)?",
    "1",
    "There is exactly $1$ peroxo bond linking the two $-\\text{SO}_3\\text{H}$ groups."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of chlorine in perchloric acid ($\\text{HClO}_4$)?",
    "7",
    "In $\\text{HClO}_4$, chlorine has an oxidation state of $+7$."
  ));
  list.push(createNumerical(st,
    "How many $\\text{P}-\\text{O}-\\text{P}$ linkages are present in cyclotrimetaphosphoric acid ($(\\text{HPO}_3)_3$)?",
    "3",
    "The cyclic trimer $(\\text{HPO}_3)_3$ contains $3$ $\\text{P}-\\text{O}-\\text{P}$ bridging bonds."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of fluorine in hypofluorous acid ($\\text{HOF}$)? (Write the magnitude, i.e., $1$ for $-1$)",
    "1",
    "In $\\text{HOF}$, fluorine has an oxidation state of $-1$, which has magnitude $1$."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 4...");
const allPart4 = buildPart4();
console.log(`Total Part 4 questions: ${allPart4.length} (Expected: 117)`);

allPart4.forEach((q, idx) => {
  checkKatex(q.question, `Part4[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part4[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part4[${idx}].explanation`);
});

console.log("All Part 4 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for P-Block Part 4
module.exports = ${JSON.stringify(allPart4, null, 2)};
`;

fs.writeFileSync('scripts/data_pblock_part4.js', fileContent);
console.log("Written scripts/data_pblock_part4.js successfully!");
