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
    chapter: "Co-ordination Compounds",
    topic: "Co-ordination Compounds",
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
    chapter: "Co-ordination Compounds",
    topic: "Co-ordination Compounds",
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
    chapter: "Co-ordination Compounds",
    topic: "Co-ordination Compounds",
    subTopic: st,
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    cognitiveLevel: "APPLICATION"
  };
}

// -------------------------------------------------------------
// Subtopic 2: IUPAC nomenclature
// Needed: 83 Qs (26 AR, 44 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart2() {
  const st = "IUPAC nomenclature";
  const list = [];

  const arData = [
    {
      a: "The IUPAC name of $\\text{K}_4[\\text{Fe(CN)}_6]$ is potassium hexacyanidoferrate(II).",
      r: "In an anionic coordination entity, the name of the central metal ends with the suffix '-ate' and the Latin name 'ferrate' is used for iron.",
      idx: 0,
      exp: "Since the complex entity is an anion $[\\text{Fe(CN)}_6]^{4-}$, the Latin stem for iron is used with the suffix '-ate' (ferrate), and the oxidation state of iron is $+2$."
    },
    {
      a: "The IUPAC name of $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$ is pentaamminechloridocobalt(III) chloride.",
      r: "Ligands are named in alphabetical order regardless of their charge, and neutral ligand $\\text{NH}_3$ is named as 'ammine'.",
      idx: 0,
      exp: "In $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$, 'ammine' precedes 'chlorido' alphabetically. The complex is cationic, so cobalt retains its elemental name, followed by oxidation state (III)."
    },
    {
      a: "In the IUPAC nomenclature of $[\\text{Co}(\\text{en})_3]\\text{Cl}_3$, the prefix 'tris' is used instead of 'tri'.",
      r: "The ligand name 'ethane-1,2-diamine' already contains a numerical prefix, so multiplying prefixes 'bis', 'tris', etc., are used.",
      idx: 0,
      exp: "When the name of a ligand already contains a numerical prefix (like 'di' in ethane-1,2-diamine), the prefix 'tris' is placed before the ligand name in parentheses."
    },
    {
      a: "The IUPAC name of $[\\text{Ni(CO)}_4]$ is tetracarbonylnickel(0).",
      r: "Carbon monoxide is a neutral ligand named 'carbonyl', and the oxidation state of nickel is zero.",
      idx: 0,
      exp: "The complex is neutral, so nickel retains its elemental name, the oxidation state is indicated as $(0)$, and the four $\\text{CO}$ ligands are named tetracarbonyl."
    },
    {
      a: "The IUPAC name of $\\text{K}_3[\\text{Al(C}_2\\text{O}_4)_3]$ is potassium trioxalatoaluminate(III).",
      r: "The oxalate ion ($\\text{C}_2\\text{O}_4^{2-}$) is an anionic bidentate ligand named 'oxalato', and the complex is anionic.",
      idx: 0,
      exp: "The complex entity is an anion $[\\text{Al(C}_2\\text{O}_4)_3]^{3-}$, so the suffix '-ate' is appended to aluminium (aluminate), and the oxidation state is $+3$."
    },
    {
      a: "The IUPAC name of $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}(\\text{NO}_2)]$ is diamminechloridonitrito-$\\kappa N$-platinum(II).",
      r: "Ambidentate ligands like $\\text{NO}_2^-$ use $\\kappa$-notation or specific names to specify the coordinating atom.",
      idx: 0,
      exp: "When the $\\text{NO}_2^-$ group coordinates through nitrogen, it is designated as nitrito-$\\kappa N$ (or nitro), and ligands are listed alphabetically: diammine, chlorido, nitrito-$\\kappa N$."
    },
    {
      a: "The IUPAC name of $[\\text{Ag}(\\text{NH}_3)_2][\\text{Ag(CN)}_2]$ is diamminesilver(I) dicyanidoargentate(I).",
      r: "In coordination compounds containing both complex cation and complex anion, the cation is named first with the standard metal name, while the anion uses the Latin name with the '-ate' suffix.",
      idx: 0,
      exp: "The cation $[\\text{Ag}(\\text{NH}_3)_2]^+$ is named diamminesilver(I) and the anion $[\\text{Ag(CN)}_2]^-$ is named dicyanidoargentate(I). Both silver atoms are in the $+1$ oxidation state."
    },
    {
      a: "In the IUPAC nomenclature of $[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]^+$ , 'aqua' is listed before 'chlorido'.",
      r: "In naming coordination entities, ligands are listed in alphabetical order of their IUPAC names.",
      idx: 0,
      exp: "Alphabetically, 'aqua' (starting with 'a') precedes 'chlorido' (starting with 'c'). Both statements are true and Reason explains Assertion."
    },
    {
      a: "The oxidation state of the central metal in a coordination entity is always designated by an Arabic numeral in parentheses.",
      r: "IUPAC rules specify that Arabic numerals eliminate confusion regarding Roman numerals in print.",
      idx: 3,
      exp: "Assertion is false because IUPAC rules mandate Roman numerals in parentheses, such as (I), (II), (III), (0), to indicate oxidation states."
    },
    {
      a: "The IUPAC name of $[\\text{Co}(\\text{NH}_3)_4(\\text{H}_2\\text{O})\\text{Cl}]\\text{Cl}_2$ is tetraammineaquachloridocobalt(III) chloride.",
      r: "The alphabetical order of the ligands is ammine, then aqua, then chlorido.",
      idx: 0,
      exp: "'ammine' (a-m-m) comes before 'aqua' (a-q-u), which comes before 'chlorido' (c). The oxidation state is $+3$, so the name is tetraammineaquachloridocobalt(III) chloride."
    },
    {
      a: "The IUPAC name of $\\text{Na}_2[\\text{Fe(CN)}_5(\\text{NO})]$ is sodium pentacyanidonitrosylferrate(III) or sodium pentacyanidonitrosylferrate(II).",
      r: "Sodium nitroprusside can be formulated with $\\text{NO}^+$ (nitrosonium) where iron is $+2$, or as $\\text{Fe}^{3+}$ with neutral $\\text{NO}$.",
      idx: 1,
      exp: "Both statements are true. Modern spectroscopic and magnetic evidence confirms $\\text{Fe}^{2+}$ with $\\text{NO}^+$ (sodium pentacyanidonitrosylferrate(II)), though historically it was named as ferrate(III). Reason is a chemical explanation of the duality rather than standard IUPAC justification."
    },
    {
      a: "The formula of potassium tetrahydroxidozincate(II) is $\\text{K}_2[\\text{Zn(OH)}_4]$.",
      r: "Zinc has an oxidation state of $+2$ and is coordinated to four hydroxide ions, giving a complex entity charge of $-2$, balanced by two potassium ions.",
      idx: 0,
      exp: "$\\text{Zn}^{2+} + 4\\text{OH}^- = [\\text{Zn(OH)}_4]^{2-}$. Two $\\text{K}^+$ cations balance the $-2$ charge, giving $\\text{K}_2[\\text{Zn(OH)}_4]$."
    },
    {
      a: "The IUPAC name of $[\\text{Fe(H}_2\\text{O})_5(\\text{NO})]\\text{SO}_4$ (brown ring complex) is pentaaquanitrosyliron(I) sulfate.",
      r: "Magnetic and spectroscopic studies show that iron is in the $+1$ oxidation state and $\\text{NO}$ is coordinated as the nitrosonium ion ($\\text{NO}^+$).",
      idx: 0,
      exp: "In the brown ring complex, charge transfer from $\\text{NO}$ to $\\text{Fe}^{2+}$ yields $\\text{Fe}^+$ ($d^7$, $S = 3/2$) and $\\text{NO}^+$, giving iron an oxidation state of $+1$."
    },
    {
      a: "Anionic ligands ending with '-ide' are given the suffix '-ido' in recent IUPAC conventions.",
      r: "IUPAC modernized inorganic nomenclature so that chloride becomes chlorido, cyanide becomes cyanido, and hydride becomes hydrido.",
      idx: 0,
      exp: "Under IUPAC 2005 recommendations, anion names ending in '-ide' change to '-ido' (e.g. chlorido, cyanido, bromido)."
    },
    {
      a: "The prefix 'ammine' for ammonia is spelled with a double 'm'.",
      r: "The double 'm' spelling distinguishes coordinated ammonia ligands from organic amines which are spelled with a single 'm'.",
      idx: 0,
      exp: "In coordination chemistry, $\\text{NH}_3$ as a ligand is strictly written as 'ammine' to avoid confusion with organic 'amine' derivatives."
    },
    {
      a: "The IUPAC name of $[\\text{Pt}(\\text{py})_4][\\text{PtCl}_4]$ is tetrapyridineplatinum(II) tetrachloridoplatinate(II).",
      r: "Both complex cation and complex anion contain platinum in the $+2$ oxidation state.",
      idx: 1,
      exp: "Both statements are correct. The cation is named tetrapyridineplatinum(II) and the anion is tetrachloridoplatinate(II). Reason explains the oxidation states but not the full nomenclature construction."
    },
    {
      a: "In writing the formula of a coordination entity, the central atom is listed first.",
      r: "IUPAC formula rules state that the central metal symbol is written first, followed by ligands in alphabetical order based on their chemical symbols.",
      idx: 0,
      exp: "According to IUPAC recommendations, within the square brackets $[\\dots]$, the metal symbol is placed first followed by ligands alphabetically by their chemical symbols."
    },
    {
      a: "The IUPAC name of $[\\text{Cr}(\\text{NH}_3)_3(\\text{H}_2\\text{O})_3]\\text{Cl}_3$ is triamminetriaquachromium(III) chloride.",
      r: "'ammine' precedes 'aqua' in alphabetical order.",
      idx: 0,
      exp: "Comparing letter-by-letter: a-m-m comes before a-q-u, so triammine is written before triaqua. Chromium is in $+3$ oxidation state."
    },
    {
      a: "The compound $[\\text{Cu}(\\text{NH}_3)_4]\\text{SO}_4$ is named tetraamminecopper(II) sulfate.",
      r: "Copper is the central metal in a cationic complex entity and has an oxidation state of $+2$.",
      idx: 0,
      exp: "Since $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$ is a cation, the normal English name 'copper' is used rather than 'cuprate', followed by oxidation state (II)."
    },
    {
      a: "The IUPAC name of $[\\text{NiCl}_4]^{2-}$ is tetrachloridonickelate(II).",
      r: "The complex is an anion, so the name of the metal must end in the suffix '-ate'.",
      idx: 0,
      exp: "For anionic coordination complexes, the metal name takes the '-ate' ending, resulting in tetrachloridonickelate(II)."
    },
    {
      a: "The IUPAC name of $\\text{Li}[\\text{AlH}_4]$ is lithium tetrahydridoaluminate(III).",
      r: "Hydride is an anionic ligand named 'hydrido', and aluminium is in the $+3$ oxidation state in the anionic complex.",
      idx: 0,
      exp: "In $\\text{Li}[\\text{AlH}_4]$, the complex anion $[\\text{AlH}_4]^-$ has aluminium in $+3$ oxidation state with four hydrido ligands, giving lithium tetrahydridoaluminate(III)."
    },
    {
      a: "The IUPAC name of $\\text{NaBH}_4$ is sodium tetrahydridoborate(III).",
      r: "Boron has an oxidation state of $+3$ in the $[\\text{BH}_4]^-$ anion.",
      idx: 0,
      exp: "In $[\\text{BH}_4]^-$, hydrogen is $-1$, so boron is $+3$. The IUPAC name is sodium tetrahydridoborate(III)."
    },
    {
      a: "The bridging ligand in a polynuclear coordination entity is designated by the Greek letter $\\mu-$.",
      r: "The prefix $\\mu-$ is placed before the name of the bridging group to indicate that it connects two central metal atoms.",
      idx: 0,
      exp: "By IUPAC convention, bridging ligands that link two or more metal centers are designated with the prefix $\\mu-$."
    },
    {
      a: "The IUPAC name of $[\\text{Co}(\\text{NH}_3)_5(\\text{CO}_3)]\\text{Cl}$ is pentaamminecarbonatocobalt(III) chloride.",
      r: "The carbonate ion $\\text{CO}_3^{2-}$ acts as a monodentate ligand named 'carbonato' in this complex.",
      idx: 0,
      exp: "Carbonate acts as a monodentate ligand here, cobalt has oxidation state $+3$, and ligands are ordered alphabetically (ammine before carbonato)."
    },
    {
      a: "In the complex $[\\text{Pt}(\\text{NH}_3)\\text{BrCl}(\\text{py})]$, the ligands are named in the order: ammine, bromido, chlorido, pyridine.",
      r: "IUPAC rules require ligands to be listed in alphabetical order of their names.",
      idx: 0,
      exp: "Alphabetical sequence: 'ammine' (a), 'bromido' (b), 'chlorido' (c), 'pyridine' (p). Both statements are true and Reason explains Assertion."
    },
    {
      a: "The name potassium hexachloridoplatinate(IV) corresponds to the formula $\\text{K}_2[\\text{PtCl}_6]$.",
      r: "In $[\\text{PtCl}_6]^{2-}$, platinum is in the $+4$ oxidation state, requiring two potassium cations for electrical neutrality.",
      idx: 0,
      exp: "Platinum(+4) with six chlorido(-1) ligands gives a complex charge of $+4 - 6 = -2$, balanced by $2\\text{K}^+$, giving $\\text{K}_2[\\text{PtCl}_6]$."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 44 MCQs on IUPAC nomenclature
  const mcqData = [
    {
      q: "What is the correct IUPAC name of $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$?",
      opts: [
        "Hexaamminecobalt(III) chloride",
        "Hexaamminecobalt(II) chloride",
        "Hexaamminecobaltic chloride",
        "Cobalt(III) hexaammine chloride"
      ],
      c: 0,
      exp: "Six neutral ammine ligands, cobalt in $+3$ oxidation state, followed by outer chloride counter ions: hexaamminecobalt(III) chloride."
    },
    {
      q: "What is the correct IUPAC name of $\\text{K}_3[\\text{Fe(CN)}_6]$?",
      opts: [
        "Potassium hexacyanidoferrate(III)",
        "Potassium hexacyanoiron(III)",
        "Potassium hexacyanidoferrate(II)",
        "Tripotassium hexacyanoferrate(III)"
      ],
      c: 0,
      exp: "Cation is potassium; complex anion has six cyanido ligands and iron in $+3$ oxidation state (ferrate(III)): potassium hexacyanidoferrate(III)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$?",
      opts: [
        "Diamminedichloridoplatinum(II)",
        "Dichloridodiammineplatinum(II)",
        "Diamminechloroplatinum(IV)",
        "Platinum(II) diamminedichloride"
      ],
      c: 0,
      exp: "Ligands are listed alphabetically: 'ammine' before 'chlorido'. Platinum is in $+2$ oxidation state: diamminedichloridoplatinum(II)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Ni(CO)}_4]$?",
      opts: [
        "Tetracarbonylnickel(0)",
        "Tetracarbonylnickelate(0)",
        "Tetracarbonylnickel(II)",
        "Carbonylnickel(0)"
      ],
      c: 0,
      exp: "CO is neutral, nickel is in $0$ oxidation state, complex is neutral: tetracarbonylnickel(0)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Cr}(\\text{en})_3]\\text{Cl}_3$?",
      opts: [
        "Tris(ethane-1,2-diamine)chromium(III) chloride",
        "Triethylenediaminechromium(III) chloride",
        "Tris(ethylenediamine)chromate(III) chloride",
        "Tris(ethane-1,2-diamine)chromic chloride"
      ],
      c: 0,
      exp: "The ligand name ethane-1,2-diamine contains 'di', so 'tris' is used in parentheses. Chromium is $+3$: tris(ethane-1,2-diamine)chromium(III) chloride."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}(\\text{NO}_2)]\\text{Cl}$?",
      opts: [
        "Tetraamminechloridonitrito-$\\kappa N$-cobalt(III) chloride",
        "Tetraamminechloridonitrocobalt(II) chloride",
        "Chloridonitritotetraamminecobalt(III) chloride",
        "Tetraamminechloronitrocobaltate(III) chloride"
      ],
      c: 0,
      exp: "Alphabetical listing: ammine (a), chlorido (c), nitrito-$\\kappa N$ (n). Cobalt oxidation state is $+3$."
    },
    {
      q: "What is the correct IUPAC name of $\\text{K}_2[\\text{PdCl}_4]$?",
      opts: [
        "Potassium tetrachloridopalladate(II)",
        "Potassium tetrachloridopalladium(II)",
        "Dipotassium tetrachloropalladate(II)",
        "Potassium tetrachloropalladate(IV)"
      ],
      c: 0,
      exp: "In the anion $[\\text{PdCl}_4]^{2-}$, palladium is in $+2$ oxidation state with suffix '-ate': potassium tetrachloridopalladate(II)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Co}(\\text{NH}_3)_5(\\text{CO}_3)]\\text{Cl}$?",
      opts: [
        "Pentaamminecarbonatocobalt(III) chloride",
        "Pentaamminecarbonatocobalt(II) chloride",
        "Carbonatopentaamminecobalt(III) chloride",
        "Pentaamminecarbonatocobaltate(III) chloride"
      ],
      c: 0,
      exp: "Alphabetically: ammine before carbonato. Cobalt is in $+3$ state: pentaamminecarbonatocobalt(III) chloride."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Fe(H}_2\\text{O})_4(\\text{C}_2\\text{O}_4)]\\text{SO}_4$?",
      opts: [
        "Tetraaquaoxalatoliron(III) sulfate",
        "Tetraaquaoxalatoiron(II) sulfate",
        "Tetraaquaoxalatoferrate(III) sulfate",
        "Oxalatotetraaquairon(III) sulfate"
      ],
      c: 0,
      exp: "Oxidation state: $x + 4(0) + (-2) + (-2) = 0 \\implies x = +3$. Ligands: aqua before oxalato. Name: tetraaquaoxalatoliron(III) sulfate."
    },
    {
      q: "What is the correct IUPAC name of $\\text{Na}_3[\\text{Co(NO}_2)_6]$?",
      opts: [
        "Sodium hexanitrito-$\\kappa N$-cobaltate(III)",
        "Sodium hexanitrocobalt(III)",
        "Sodium hexanitrocobaltate(II)",
        "Trisodium hexanitrocobaltate(III)"
      ],
      c: 0,
      exp: "Cation is sodium; six nitrito-$\\kappa N$ ligands on anionic cobaltate(III): sodium hexanitrito-$\\kappa N$-cobaltate(III)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Pt}(\\text{NH}_3)_4][\\text{PtCl}_4]$?",
      opts: [
        "Tetraammineplatinum(II) tetrachloridoplatinate(II)",
        "Tetraammineplatinum(IV) tetrachloridoplatinate(II)",
        "Tetrachloridoplatinum(II) tetraammineplatinate(II)",
        "Tetraammineplatinate(II) tetrachloridoplatinum(II)"
      ],
      c: 0,
      exp: "Cation $[\\text{Pt}(\\text{NH}_3)_4]^{2+}$ is tetraammineplatinum(II), anion $[\\text{PtCl}_4]^{2-}$ is tetrachloridoplatinate(II)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Cr}(\\text{NH}_3)_3(\\text{H}_2\\text{O})_3]\\text{Cl}_3$?",
      opts: [
        "Triamminetriaquachromium(III) chloride",
        "Triaquatriamminechromium(III) chloride",
        "Triamminetriaquachromate(III) chloride",
        "Triamminetriaquachromium(II) chloride"
      ],
      c: 0,
      exp: "Ligands: 'ammine' precedes 'aqua' alphabetically. Chromium is in $+3$ state: triamminetriaquachromium(III) chloride."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Co}(\\text{en})_2\\text{Cl}(\\text{ONO})]\\text{Cl}$?",
      opts: [
        "Chloridonitrito-$\\kappa O$-bis(ethane-1,2-diamine)cobalt(III) chloride",
        "Bis(ethane-1,2-diamine)chloridonitrocobalt(III) chloride",
        "Chloridonitrito-$\\kappa N$-bis(ethane-1,2-diamine)cobalt(III) chloride",
        "Chloridonitritobis(ethane-1,2-diamine)cobaltate(III) chloride"
      ],
      c: 0,
      exp: "'chlorido' (c), 'nitrito-$\\kappa O$' (n), 'bis(ethane-1,2-diamine)' (e). Alphabetical order: chloridonitrito-$\\kappa O$-bis(ethane-1,2-diamine)cobalt(III) chloride."
    },
    {
      q: "What is the correct IUPAC name of $\\text{K}[\\text{PtCl}_3(\\text{C}_2\\text{H}_4)]$ (Zeise's salt)?",
      opts: [
        "Potassium trichlorido($\\eta^2$-ethene)platinate(II)",
        "Potassium trichloroethyleneplatinum(II)",
        "Potassium ethylene trichloroplatinate(IV)",
        "Potassium trichloridoetheneplatinum(II)"
      ],
      c: 0,
      exp: "Zeise's salt contains an ethylene molecule $\\pi$-coordinated to $\\text{Pt}^{2+}$: potassium trichlorido($\\eta^2$-ethene)platinate(II)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Fe}(\\text{CO})_5]$?",
      opts: [
        "Pentacarbonyliron(0)",
        "Pentacarbonylferrate(0)",
        "Pentacarbonyliron(II)",
        "Carbonyliron(0)"
      ],
      c: 0,
      exp: "Neutral complex with 5 carbonyl ligands and iron in oxidation state 0: pentacarbonyliron(0)."
    },
    {
      q: "What is the correct IUPAC name of $\\text{K}_2[\\text{Zn(OH)}_4]$?",
      opts: [
        "Potassium tetrahydroxidozincate(II)",
        "Potassium tetrahydroxidozinc(II)",
        "Potassium tetrahydroxozincate(IV)",
        "Dipotassium tetrahydroxyzincate(II)"
      ],
      c: 0,
      exp: "In the complex anion $[\\text{Zn(OH)}_4]^{2-}$, zinc is in $+2$ state: potassium tetrahydroxidozincate(II)."
    },
    {
      q: "What is the chemical formula of hexaamminecobalt(III) sulfate?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_6]_2(\\text{SO}_4)_3$",
        "$[\\text{Co}(\\text{NH}_3)_6](\\text{SO}_4)_3$",
        "$[\\text{Co}(\\text{NH}_3)_6]\\text{SO}_4$",
        "$[\\text{Co}(\\text{NH}_3)_6]_3(\\text{SO}_4)_2$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_6]^{3+}$ has charge $+3$ and $\\text{SO}_4^{2-}$ has charge $-2$. Charge balancing yields $[\\text{Co}(\\text{NH}_3)_6]_2(\\text{SO}_4)_3$."
    },
    {
      q: "What is the chemical formula of potassium trioxalatochromate(III)?",
      opts: [
        "$\\text{K}_3[\\text{Cr(C}_2\\text{O}_4)_3]$",
        "$\\text{K}_2[\\text{Cr(C}_2\\text{O}_4)_3]$",
        "$\\text{K}[\\text{Cr(C}_2\\text{O}_4)_3]$",
        "$\\text{K}_3[\\text{Cr(C}_2\\text{O}_4)_2]$"
      ],
      c: 0,
      exp: "Chromium is $+3$, each oxalate is $-2$ ($3 \\times -2 = -6$), giving $[\\text{Cr(C}_2\\text{O}_4)_3]^{3-}$, balanced by $3\\text{K}^+$: $\\text{K}_3[\\text{Cr(C}_2\\text{O}_4)_3]$."
    },
    {
      q: "What is the chemical formula of tetraaquadichloridochromium(III) chloride?",
      opts: [
        "$[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl}$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_3]$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_4]\\text{Cl}_3$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_2\\text{Cl}_4]\\text{Cl}$"
      ],
      c: 0,
      exp: "Chromium(+3) with four aqua and two chlorido leaves $+1$ charge: $[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl}$."
    },
    {
      q: "What is the correct IUPAC name of $\\text{Hg}[\\text{Co(SCN)}_4]$?",
      opts: [
        "Mercury(II) tetrathiocyanato-$\\kappa S$-cobaltate(II)",
        "Mercury(I) tetrathiocyanatocobaltate(II)",
        "Mercury tetrathiocyanatocobalt(II)",
        "Mercury tetrathiocyanatocobaltate(III)"
      ],
      c: 0,
      exp: "Mercury is $+2$ as counter cation, cobalt is $+2$ in $[\\text{Co(SCN)}_4]^{2-}$: mercury(II) tetrathiocyanato-$\\kappa S$-cobaltate(II)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Cr}(\\text{NH}_3)_4\\text{Cl}_2]^+$?",
      opts: [
        "Tetraamminedichloridochromium(III) ion",
        "Dichloridotetraamminechromium(III) ion",
        "Tetraamminedichlorochromate(III) ion",
        "Tetraamminedichloridochromium(II) ion"
      ],
      c: 0,
      exp: "Alphabetical listing gives tetraammine before dichlorido, and chromium retains its name with oxidation state $+3$: tetraamminedichloridochromium(III) ion."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Fe(CN)}_6]^{3-}$?",
      opts: [
        "Hexacyanidoferrate(III) ion",
        "Hexacyanoiron(III) ion",
        "Hexacyanidoferrate(II) ion",
        "Hexacyanoferrate(IV) ion"
      ],
      c: 0,
      exp: "In $[\\text{Fe(CN)}_6]^{3-}$, iron is in $+3$ state, and as an anion it takes the name ferrate: hexacyanidoferrate(III) ion."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Fe(CN)}_6]^{4-}$?",
      opts: [
        "Hexacyanidoferrate(II) ion",
        "Hexacyanoiron(II) ion",
        "Hexacyanidoferrate(III) ion",
        "Hexacyanoferrate(I) ion"
      ],
      c: 0,
      exp: "In $[\\text{Fe(CN)}_6]^{4-}$, iron is in $+2$ state with suffix '-ate': hexacyanidoferrate(II) ion."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{CuCl}_4]^{2-}$?",
      opts: [
        "Tetrachloridocuprate(II) ion",
        "Tetrachlorocopper(II) ion",
        "Tetrachlorocuprate(I) ion",
        "Tetrachlorocuprate(IV) ion"
      ],
      c: 0,
      exp: "The complex is an anion, so the Latin root cuprum with '-ate' is used: tetrachloridocuprate(II) ion."
    },
    {
      q: "What is the correct IUPAC name of $\\text{K}[\\text{Au(OH)}_4]$?",
      opts: [
        "Potassium tetrahydroxidoaurate(III)",
        "Potassium tetrahydroxogold(III)",
        "Potassium tetrahydroxidoaurate(I)",
        "Potassium tetrahydroxogold(I)"
      ],
      c: 0,
      exp: "In the complex anion, gold uses its Latin stem 'aurate'. Oxidation state is $+3$: potassium tetrahydroxidoaurate(III)."
    },
    {
      q: "What is the correct IUPAC name of $\\text{K}[\\text{Ag(CN)}_2]$?",
      opts: [
        "Potassium dicyanidoargentate(I)",
        "Potassium dicyanosilver(I)",
        "Potassium dicyanidoargentate(II)",
        "Potassium cyanidoargentate(I)"
      ],
      c: 0,
      exp: "Silver in an anionic complex is named argentate. Oxidation state is $+1$: potassium dicyanidoargentate(I)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}(\\text{NH}_2\\text{CH}_3)]\\text{Cl}$?",
      opts: [
        "Diamminechlorido(methanamine)platinum(II) chloride",
        "Diamminechloromethylamineplatinum(II) chloride",
        "Chloridodiammine(methanamine)platinum(II) chloride",
        "Diamminechlorido(methanamine)platinate(II) chloride"
      ],
      c: 0,
      exp: "Alphabetical order: ammine, then chlorido, then methanamine. Platinum is in $+2$ oxidation state."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Co}(\\text{NH}_3)_5(\\text{SO}_4)]\\text{Br}$?",
      opts: [
        "Pentaamminesulfatocobalt(III) bromide",
        "Pentaamminesulfatocobalt(II) bromide",
        "Sulfatopentaamminecobalt(III) bromide",
        "Pentaamminesulfatocobaltate(III) bromide"
      ],
      c: 0,
      exp: "Ligands: ammine before sulfato. Cobalt is in $+3$ state: pentaamminesulfatocobalt(III) bromide."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$?",
      opts: [
        "Pentaamminebromidocobalt(III) sulfate",
        "Pentaamminebromocobalt(II) sulfate",
        "Bromidopentaamminecobalt(III) sulfate",
        "Pentaamminebromocobaltate(III) sulfate"
      ],
      c: 0,
      exp: "Ammine before bromido. Complex cation has cobalt in $+3$ oxidation state: pentaamminebromidocobalt(III) sulfate."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Ni}(\\text{dmg})_2]$ (nickel dimethylglyoximate)?",
      opts: [
        "Bis(dimethylglyoximato)nickel(II)",
        "Bis(dimethylglyoxime)nickel(II)",
        "Bis(dimethylglyoximato)nickelate(II)",
        "Dimethylglyoximatonickel(II)"
      ],
      c: 0,
      exp: "Dimethylglyoximate is an anionic mono-deprotonated ligand, so 'dimethylglyoximato' is used with prefix 'bis': bis(dimethylglyoximato)nickel(II)."
    },
    {
      q: "What is the oxidation state and coordination number of the central metal in $[\\text{Fe(EDTA)}]^-$?",
      opts: [
        "Oxidation state $= +3$, Coordination number $= 6$",
        "Oxidation state $= +2$, Coordination number $= 6$",
        "Oxidation state $= +3$, Coordination number $= 4$",
        "Oxidation state $= +2$, Coordination number $= 4$"
      ],
      c: 0,
      exp: "$\\text{EDTA}^{4-}$ is a hexadentate ligand (coordination number = 6). Charge of complex is $-1$: $x + (-4) = -1 \\implies x = +3$."
    },
    {
      q: "What is the correct IUPAC name of $\\text{Na}_2[\\text{Fe(EDTA)}]$?",
      opts: [
        "Sodium ethylenediaminetetraacetatoferrate(II)",
        "Sodium ethylenediaminetetraacetatoiron(II)",
        "Sodium ethylenediaminetetraacetatoferrate(III)",
        "Sodium ethylenediaminetetraacetateiron(II)"
      ],
      c: 0,
      exp: "In $\\text{Na}_2[\\text{Fe(EDTA)}]$, iron is in the $+2$ oxidation state ($2(+1) + x + (-4) = 0 \\implies x = +2$): sodium ethylenediaminetetraacetatoferrate(II)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Co}(\\text{NH}_3)_3(\\text{NO}_2)_3]$?",
      opts: [
        "Triamminetrinitrito-$\\kappa N$-cobalt(III)",
        "Triamminetrinitrocobaltate(III)",
        "Trinitritotriamminecobalt(III)",
        "Triamminetrinitrocobalt(II)"
      ],
      c: 0,
      exp: "Neutral complex: triammine (a) before trinitrito-$\\kappa N$ (n). Cobalt oxidation state is $+3$."
    },
    {
      q: "What is the correct IUPAC name of $\\text{K}_3[\\text{Cr(CN)}_6]$?",
      opts: [
        "Potassium hexacyanidochromate(III)",
        "Potassium hexacyanochromium(III)",
        "Potassium hexacyanochromate(II)",
        "Tripotassium hexacyanidochromate(III)"
      ],
      c: 0,
      exp: "Complex anion has chromium in $+3$ state: potassium hexacyanidochromate(III)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Ru}(\\text{NH}_3)_5(\\text{N}_2)]\\text{Cl}_2$?",
      opts: [
        "Pentaamminedinitrogenruthenium(II) chloride",
        "Pentaamminenitrogenruthenium(II) chloride",
        "Pentaamminedinitrogenruthenate(II) chloride",
        "Pentaamminedinitrogenruthenium(III) chloride"
      ],
      c: 0,
      exp: "Dinitrogen ($\\\\text{N}_2$) is named as 'dinitrogen'. Ruthenium is $+2$: pentaamminedinitrogenruthenium(II) chloride."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Mn}(\\text{H}_2\\text{O})_6]^{2+}$?",
      opts: [
        "Hexaaquamanganese(II) ion",
        "Hexaaquamanganate(II) ion",
        "Hexahydratemanganese(II) ion",
        "Hexaaquamanganese(III) ion"
      ],
      c: 0,
      exp: "The complex is cationic with manganese in $+2$ state and six water ligands: hexaaquamanganese(II) ion."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Co}(\\text{NH}_3)_5(\\text{NCS})]\\text{Cl}_2$?",
      opts: [
        "Pentaamminethiocyanato-$\\kappa N$-cobalt(III) chloride",
        "Pentaamminethiocyanato-$\\kappa S$-cobalt(III) chloride",
        "Pentaammineisothiocyanatocobaltate(III) chloride",
        "Pentaammineisothiocyanatocobalt(II) chloride"
      ],
      c: 0,
      exp: "When $-\\text{NCS}$ coordinates through nitrogen, it is designated as thiocyanato-$\\kappa N$: pentaamminethiocyanato-$\\kappa N$-cobalt(III) chloride."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Co}(\\text{NH}_3)_5(\\text{SCN})]\\text{Cl}_2$?",
      opts: [
        "Pentaamminethiocyanato-$\\kappa S$-cobalt(III) chloride",
        "Pentaamminethiocyanato-$\\kappa N$-cobalt(III) chloride",
        "Pentaamminethiocyanatocobaltate(III) chloride",
        "Pentaamminethiocyanatocobalt(II) chloride"
      ],
      c: 0,
      exp: "When bonded through sulfur, it is named thiocyanato-$\\kappa S$: pentaamminethiocyanato-$\\kappa S$-cobalt(III) chloride."
    },
    {
      q: "What is the correct IUPAC name of $\\text{K}_2[\\text{Ni(CN)}_4]$?",
      opts: [
        "Potassium tetracyanidonickelate(II)",
        "Potassium tetracyanonickel(II)",
        "Potassium tetracyanidonickelate(0)",
        "Dipotassium tetracyanonickelate(II)"
      ],
      c: 0,
      exp: "In the complex anion $[\\text{Ni(CN)}_4]^{2-}$, nickel is in $+2$ state: potassium tetracyanidonickelate(II)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Ti(H}_2\\text{O})_6]^{3+}$?",
      opts: [
        "Hexaaquatitanium(III) ion",
        "Hexaaquatitanate(III) ion",
        "Hexahydratetitanium(III) ion",
        "Hexaaquatitanium(II) ion"
      ],
      c: 0,
      exp: "Cationic complex with six aqua ligands and titanium in $+3$ state: hexaaquatitanium(III) ion."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Pt}(\\text{NH}_3)_4\\text{Cl}_2][\\text{PtCl}_4]$?",
      opts: [
        "Tetraamminedichloridoplatinum(IV) tetrachloridoplatinate(II)",
        "Tetraamminedichloridoplatinum(II) tetrachloridoplatinate(IV)",
        "Tetraamminedichloridoplatinate(IV) tetrachloridoplatinum(II)",
        "Dichloridotetraammineplatinum(IV) tetrachloridoplatinate(II)"
      ],
      c: 0,
      exp: "Cation is $[\\text{Pt}(\\text{NH}_3)_4\\text{Cl}_2]^{2+}$ with $\\text{Pt}^{4+}$, anion is $[\\text{PtCl}_4]^{2-}$ with $\\text{Pt}^{2+}$: tetraamminedichloridoplatinum(IV) tetrachloridoplatinate(II)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Fe(H}_2\\text{O})_6]\\text{SO}_4$?",
      opts: [
        "Hexaaquairon(II) sulfate",
        "Hexaaquairon(III) sulfate",
        "Hexaaquaferrate(II) sulfate",
        "Hexahydrateiron(II) sulfate"
      ],
      c: 0,
      exp: "Iron is in $+2$ state in the cationic complex: hexaaquairon(II) sulfate."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{Cr}(\\text{CO})_6]$?",
      opts: [
        "Hexacarbonylchromium(0)",
        "Hexacarbonylchromate(0)",
        "Hexacarbonylchromium(III)",
        "Hexacarbonylchromium(VI)"
      ],
      c: 0,
      exp: "Neutral complex with six carbonyl ligands and chromium in 0 oxidation state: hexacarbonylchromium(0)."
    },
    {
      q: "What is the correct IUPAC name of $[\\text{V(H}_2\\text{O})_6]^{2+}$?",
      opts: [
        "Hexaaquavanadium(II) ion",
        "Hexaaquavanadate(II) ion",
        "Hexahydratevanadium(II) ion",
        "Hexaaquavanadium(III) ion"
      ],
      c: 0,
      exp: "Cationic entity with six aqua ligands and vanadium in $+2$ state: hexaaquavanadium(II) ion."
    }
  ];

  mcqData.slice(0, 44).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "What is the oxidation state of iron in potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$?",
    "2",
    "$4(+1) + x + 6(-1) = 0 \\implies x = +2$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of iron in potassium ferricyanide $\\text{K}_3[\\text{Fe(CN)}_6]$?",
    "3",
    "$3(+1) + x + 6(-1) = 0 \\implies x = +3$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of nickel in nickel tetracarbonyl $[\\text{Ni(CO)}_4]$?",
    "0",
    "Carbon monoxide is a neutral ligand, so the oxidation state of nickel is $0$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of cobalt in $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$?",
    "3",
    "$x + 5(0) + (-1) + 2(-1) = 0 \\implies x = +3$."
  ));
  list.push(createNumerical(st,
    "What is the coordination number of aluminium in $\\text{K}_3[\\text{Al(C}_2\\text{O}_4)_3]$?",
    "6",
    "Oxalate is a bidentate ligand, so $3$ oxalate ligands provide $3 \\times 2 = 6$ donor bonds."
  ));
  list.push(createNumerical(st,
    "What is the coordination number of cobalt in $[\\text{Co}(\\text{en})_3]\\text{Cl}_3$?",
    "6",
    "Ethylenediamine is bidentate, so $3$ en ligands give a coordination number of $3 \\times 2 = 6$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of chromium in $\\text{K}_3[\\text{Cr(C}_2\\text{O}_4)_3]$?",
    "3",
    "$3(+1) + x + 3(-2) = 0 \\implies x = +3$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of platinum in $\\text{K}_2[\\text{PtCl}_6]$?",
    "4",
    "$2(+1) + x + 6(-1) = 0 \\implies x = +4$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of platinum in $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$?",
    "2",
    "$x + 2(0) + 2(-1) = 0 \\implies x = +2$."
  ));
  list.push(createNumerical(st,
    "What is the coordination number of iron in $[\\text{Fe(EDTA)}]^-$?",
    "6",
    "$\\text{EDTA}^{4-}$ is a hexadentate ligand coordinating through two nitrogens and four carboxylate oxygens, giving a coordination number of $6$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of iron in $[\\text{Fe(EDTA)}]^-$?",
    "3",
    "$x + (-4) = -1 \\implies x = +3$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of silver in $[\\text{Ag}(\\text{NH}_3)_2]^+$?",
    "1",
    "$x + 2(0) = +1 \\implies x = +1$."
  ));
  list.push(createNumerical(st,
    "What is the denticity of the oxalate ion ($\\text{C}_2\\text{O}_4^{2-}$)?",
    "2",
    "The oxalate ion has two donor oxygen atoms, making it a bidentate (didentate) ligand."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 2...");
const allPart2 = buildPart2();
console.log(`Total Part 2 questions: ${allPart2.length} (Expected: 83)`);

allPart2.forEach((q, idx) => {
  checkKatex(q.question, `Part2[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part2[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part2[${idx}].explanation`);
});

console.log("All Part 2 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Coordination Compounds Part 2
module.exports = ${JSON.stringify(allPart2, null, 2)};
`;

fs.writeFileSync('scripts/data_coord_part2.js', fileContent);
console.log("Written scripts/data_coord_part2.js successfully!");
