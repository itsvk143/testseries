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
// Subtopic 1: Werner's theory
// Needed: 83 Qs (26 AR, 44 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart1() {
  const st = "Werner's theory";
  const list = [];

  const arData = [
    {
      a: "According to Werner's theory, the primary valency of a central metal atom or ion is ionizable.",
      r: "Primary valency corresponds to the oxidation state of the metal ion and is satisfied exclusively by negative ions.",
      idx: 0,
      exp: "In Werner's coordination theory, primary valencies are non-directional and ionizable, satisfied by anions to balance the oxidation state of the central metal."
    },
    {
      a: "The secondary valency in coordination compounds is directional and determines the stereochemistry of the complex.",
      r: "Secondary valencies are projected in fixed directions in three-dimensional space around the central metal ion.",
      idx: 0,
      exp: "Secondary valencies correspond to coordinate bonds pointing toward fixed spatial positions, resulting in defined coordination polyhedra like octahedral or tetrahedral geometries."
    },
    {
      a: "When excess $\\text{AgNO}_3$ solution is added to $1\\text{ mol}$ of $\\text{CoCl}_3 \\cdot 6\\text{NH}_3$, exactly $3\\text{ mol}$ of $\\text{AgCl}$ are precipitated.",
      r: "All three chloride ions are present outside the coordination sphere as ionizable counter ions in $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$.",
      idx: 0,
      exp: "The complex formula is $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$. It ionizes in aqueous solution to give $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ and $3\\text{Cl}^-$ ions, which precipitate as $3\\text{AgCl}$."
    },
    {
      a: "When $1\\text{ mol}$ of $\\text{CoCl}_3 \\cdot 5\\text{NH}_3$ is treated with excess silver nitrate, only $2\\text{ mol}$ of $\\text{AgCl}$ precipitate.",
      r: "One of the three chloride ions is inside the coordination sphere satisfying both primary and secondary valencies, and is therefore non-ionizable.",
      idx: 0,
      exp: "The Werner formulation is $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$. Only the two chloride ions outside the brackets can ionize to precipitate as $\\text{AgCl}$."
    },
    {
      a: "$\\text{CoCl}_3 \\cdot 3\\text{NH}_3$ does not give a precipitate of $\\text{AgCl}$ when treated with aqueous $\\text{AgNO}_3$ at room temperature.",
      r: "In $[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$, all three chloride ions are coordinated directly to the cobalt ion inside the coordination sphere and cannot ionize.",
      idx: 0,
      exp: "All three chloride ions satisfy secondary valencies alongside primary valency inside the coordination sphere, making $[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$ a non-electrolyte."
    },
    {
      a: "Mohr's salt $\\text{FeSO}_4 \\cdot (\\text{NH}_4)_2\\text{SO}_4 \\cdot 6\\text{H}_2\\text{O}$ gives positive qualitative tests for $\\text{Fe}^{2+}, \\text{NH}_4^+$, and $\\text{SO}_4^{2-}$ ions in aqueous solution.",
      r: "Mohr's salt is a double salt which completely dissociates into its constituent simple ions when dissolved in water.",
      idx: 0,
      exp: "Double salts exist only in crystalline state and dissociate completely into individual hydrated ions in solution, giving independent tests for each ion."
    },
    {
      a: "Potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$ does not give a positive test for $\\text{Fe}^{2+}$ or $\\text{CN}^-$ ions in aqueous solution.",
      r: "In coordination compounds, the complex entity $[\\text{Fe(CN)}_6]^{4-}$ remains intact as a single species in aqueous solution.",
      idx: 0,
      exp: "Unlike double salts, coordination complexes retain their identity in solution; the coordinate bonds inside the brackets do not ionize."
    },
    {
      a: "The molar conductivity of an aqueous solution of $\\text{PtCl}_4 \\cdot 6\\text{NH}_3$ is significantly higher than that of $\\text{PtCl}_4 \\cdot 2\\text{NH}_3$.",
      r: "$[\\text{Pt}(\\text{NH}_3)_6]\\text{Cl}_4$ produces five ions per formula unit, whereas $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_4]$ is a non-electrolyte that produces zero ions.",
      idx: 0,
      exp: "Molar conductivity depends on the number of charge carriers. $[\\text{Pt}(\\text{NH}_3)_6]\\text{Cl}_4 \\rightarrow [\\text{Pt}(\\text{NH}_3)_6]^{4+} + 4\\text{Cl}^-$ produces 5 ions, while $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_4]$ does not ionize."
    },
    {
      a: "Secondary valencies of a metal ion in a coordination complex are satisfied only by neutral molecules.",
      r: "Neutral molecules like $\\text{NH}_3$ and $\\text{H}_2\\text{O}$ possess lone pairs to coordinate with metal ions.",
      idx: 3,
      exp: "Assertion is false because secondary valencies can be satisfied by neutral molecules (e.g. $\\text{NH}_3, \\text{H}_2\\text{O}$) as well as negative ions (e.g. $\\text{Cl}^-, \\text{CN}^-$). Reason is true."
    },
    {
      a: "An anion coordinated inside the coordination sphere can simultaneously satisfy both primary and secondary valencies.",
      r: "Such an anion contributes to satisfying the positive charge (oxidation state) of the metal while also occupying a coordination position.",
      idx: 0,
      exp: "In $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$, the coordinated $\\text{Cl}^-$ balances one positive charge of $\\text{Co}^{3+}$ (primary) and contributes 1 to the coordination number 6 (secondary)."
    },
    {
      a: "Alfred Werner was awarded the Nobel Prize in Chemistry in 1913.",
      r: "Werner was the first to propose correct stereochemical formulations and concepts of primary and secondary valency in inorganic coordination compounds.",
      idx: 0,
      exp: "Werner was awarded the Nobel Prize for his groundbreaking work on the linkage of atoms in inorganic complexes, opening new fields of structural chemistry."
    },
    {
      a: "Potash alum $\\text{K}_2\\text{SO}_4 \\cdot \\text{Al}_2(\\text{SO}_4)_3 \\cdot 24\\text{H}_2\\text{O}$ is classified as a double salt rather than a coordination complex.",
      r: "Aqueous solutions of potash alum give characteristic chemical tests for $\\text{K}^+, \\text{Al}^{3+}$, and $\\text{SO}_4^{2-}$ ions.",
      idx: 0,
      exp: "Potash alum dissociates completely into simple hydrated ions in water, which is the defining property of a double salt."
    },
    {
      a: "Carnallite ($\\text{KCl} \\cdot \\text{MgCl}_2 \\cdot 6\\text{H}_2\\text{O}$) behaves as a double salt in water.",
      r: "Carnallite in water completely dissociates into $\\text{K}^+, \\text{Mg}^{2+}$, and $\\text{Cl}^-$ ions.",
      idx: 0,
      exp: "Carnallite is a classic double salt that gives the reactions of $\\text{K}^+, \\text{Mg}^{2+}$, and $\\text{Cl}^-$ ions upon dissolution."
    },
    {
      a: "The depression in freezing point for a $0.01\\text{ M}$ solution of $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$ is approximately four times that of a $0.01\\text{ M}$ glucose solution.",
      r: "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$ dissociates into four ions in dilute aqueous solution, giving a van 't Hoff factor of $i \\approx 4$.",
      idx: 0,
      exp: "Colligative properties depend on the concentration of solute particles: $\\Delta T_f = i K_f m$. For $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$, $i = 4$, while for non-electrolyte glucose, $i = 1$."
    },
    {
      a: "Werner correctly deduced that six-coordinate complexes have an octahedral spatial arrangement rather than planar hexagonal or trigonal prismatic.",
      r: "Hexa-coordinated complexes of the type $[\\text{MA}_4\\text{B}_2]$ exist as two geometrical isomers (cis and trans), which is consistent only with an octahedral geometry.",
      idx: 0,
      exp: "A planar hexagonal geometry for $[\\text{MA}_4\\text{B}_2]$ would predict three isomers (1,2-, 1,3-, and 1,4-), whereas only two isomers are experimentally observed, proving an octahedral framework."
    },
    {
      a: "Werner's theory could not explain why only certain elements form coordination compounds.",
      r: "Werner's theory did not incorporate electronic structure, wave mechanics, or modern orbital theories of bonding.",
      idx: 0,
      exp: "Werner's classical coordination theory was purely empirical and phenomenological; it could not explain the electronic origin of bonding, magnetic properties, or optical spectra."
    },
    {
      a: "In the complex $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$, the primary valency of cobalt is 3.",
      r: "Cobalt is in the $+3$ oxidation state, which requires three negative charges to neutralize.",
      idx: 0,
      exp: "Primary valency equals the oxidation state of the central metal ion. In $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$, the oxidation state of cobalt is $+3$."
    },
    {
      a: "In the complex $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$, the secondary valency of cobalt is 6.",
      r: "Cobalt is directly bonded to four neutral ammonia molecules and two chloride ions inside the coordination sphere.",
      idx: 0,
      exp: "Secondary valency is the coordination number of the central metal ion, which is $4 + 2 = 6$ in this octahedral complex."
    },
    {
      a: "An aqueous solution of $[\\text{Cr}(\\text{H}_2\\text{O})_6]\\text{Cl}_3$ gives a violet colour and precipitates 3 moles of $\\text{AgCl}$ with excess $\\text{AgNO}_3$.",
      r: "All six water molecules are coordinated to $\\text{Cr}^{3+}$ and all three chloride ions are ionizable outside the coordination sphere.",
      idx: 0,
      exp: "Hexaaquachromium(III) chloride $[\\text{Cr}(\\text{H}_2\\text{O})_6]\\text{Cl}_3$ is violet, and all three chlorides are in the outer ionizable sphere."
    },
    {
      a: "The green form of chromium chloride $[\\text{Cr}(\\text{H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$ precipitates only 2 moles of $\\text{AgCl}$ per mole of complex.",
      r: "One chloride ion is coordinated directly to chromium inside the coordination sphere, while one water molecule is held as water of hydration.",
      idx: 0,
      exp: "Only the two outer-sphere chloride ions can be precipitated as $\\text{AgCl}$ by aqueous silver nitrate at room temperature."
    },
    {
      a: "The complex $[\\text{Pt}(\\text{NH}_3)_4]\\text{Cl}_2$ acts as a $1:2$ electrolyte in aqueous solution.",
      r: "It dissociates to produce one $[\\text{Pt}(\\text{NH}_3)_4]^{2+}$ cation and two $\\text{Cl}^-$ anions.",
      idx: 0,
      exp: "Dissociation yields a dipositive complex cation and two chloride anions, representing a $1:2$ electrolyte."
    },
    {
      a: "Secondary valency is non-ionizable and non-directional.",
      r: "Secondary valencies are satisfied only by neutral molecules having dipole moments.",
      idx: 3,
      exp: "Assertion is false because secondary valencies are strictly directional in space (giving geometry). Reason is also false because secondary valencies can be satisfied by negative ions as well as neutral molecules."
    },
    {
      a: "In Werner's representations, primary valencies are represented by dashed lines and secondary valencies by solid lines.",
      r: "Bonds satisfying both primary and secondary valencies are represented by combined solid and dashed lines.",
      idx: 1,
      exp: "Both statements are correct conventions introduced by Alfred Werner. Reason describes the notation for dual valency, but does not explain why dashed lines are used for primary valencies."
    },
    {
      a: "Werner deduced that 4-coordinate platinum(II) complexes like $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$ have a square planar geometry rather than tetrahedral.",
      r: "$[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$ exists as two geometrical isomers (cis and trans), whereas a tetrahedral geometry allows only one isomer for an $\\text{MA}_2\\text{B}_2$ system.",
      idx: 0,
      exp: "For a tetrahedral $\\text{MA}_2\\text{B}_2$ complex, all four positions are mutually adjacent, so no cis/trans isomerism is possible. The isolation of two distinct isomers proved square planar geometry."
    },
    {
      a: "Addition of barium chloride to an aqueous solution of $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ immediately yields a white precipitate of $\\text{BaSO}_4$.",
      r: "The sulfate ion resides outside the coordination sphere as an ionizable counter ion.",
      idx: 0,
      exp: "The sulfate ion is uncoordinated and free in solution, so it reacts with $\\text{Ba}^{2+}$ to give an insoluble white precipitate of $\\text{BaSO}_4$."
    },
    {
      a: "Addition of silver nitrate to $[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$ gives a pale yellow precipitate of $\\text{AgBr}$.",
      r: "The bromide ion is outside the coordination sphere as an ionizable anion.",
      idx: 0,
      exp: "Free $\\text{Br}^-$ ions precipitate as pale yellow $\\text{AgBr}$ upon addition of $\\text{AgNO}_3$. Both statements are true and Reason explains Assertion."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 44 MCQs on Werner's Theory
  const mcqData = [
    {
      q: "According to Werner's coordination theory, primary valency corresponds to the:",
      opts: [
        "Oxidation state of the central metal atom/ion",
        "Coordination number of the metal",
        "Magnetic moment of the complex",
        "Geometry of the complex"
      ],
      c: 0,
      exp: "Werner defined primary valency as the ionizable valency that satisfies the oxidation state of the metal ion."
    },
    {
      q: "In Werner's coordination theory, the secondary valency represents the:",
      opts: [
        "Coordination number of the central metal atom/ion",
        "Oxidation state of the central metal atom/ion",
        "Number of unpaired electrons",
        "Total charge on the complex"
      ],
      c: 0,
      exp: "Secondary valency is non-ionizable and represents the number of ligand donor atoms coordinated to the metal ion, i.e., its coordination number."
    },
    {
      q: "Which of the following statements regarding secondary valency is INCORRECT?",
      opts: [
        "It is non-directional in space",
        "It determines the stereochemistry and geometry of the complex",
        "It is non-ionizable in aqueous solution",
        "It can be satisfied by both neutral molecules and anions"
      ],
      c: 0,
      exp: "Secondary valency is strictly directional in space, determining geometries such as octahedral, tetrahedral, or square planar. Thus (A) is incorrect."
    },
    {
      q: "One mole of a cobalt complex $\\text{CoCl}_3 \\cdot 5\\text{NH}_3$ reacts with excess $\\text{AgNO}_3$ to yield $2\\text{ mol}$ of $\\text{AgCl}$. What is the structural formula of the complex according to Werner?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$",
        "$[\\text{Co}(\\text{NH}_3)_5]\\text{Cl}_3$",
        "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl} \\cdot \\text{NH}_3$",
        "$[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3] \\cdot 2\\text{NH}_3$"
      ],
      c: 0,
      exp: "Since $2\\text{ mol}$ of $\\text{AgCl}$ precipitate per mole of complex, two chloride ions must be in the outer ionization sphere: $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$."
    },
    {
      q: "How many moles of ions are produced in aqueous solution per mole of $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$?",
      opts: ["4", "3", "2", "1"],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3 \\rightarrow [\\text{Co}(\\text{NH}_3)_6]^{3+} + 3\\text{Cl}^-$, producing a total of $1 + 3 = 4$ moles of ions."
    },
    {
      q: "Which of the following cobalt(III) ammine complexes is a non-electrolyte in aqueous solution?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$",
        "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$",
        "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$"
      ],
      c: 0,
      exp: "In $[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$, all three chloride ions are coordinate ligands inside the coordination sphere, so it does not ionize in water."
    },
    {
      q: "What is the correct order of electrical conductance for equimolar aqueous solutions of the following cobalt complexes?\nI: $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$\nII: $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$\nIII: $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$\nIV: $[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$",
      opts: [
        "$\\text{I} > \\text{II} > \\text{III} > \\text{IV}$",
        "$\\text{IV} > \\text{III} > \\text{II} > \\text{I}$",
        "$\\text{I} = \\text{II} = \\text{III} = \\text{IV}$",
        "$\\text{II} > \\text{I} > \\text{III} > \\text{IV}$"
      ],
      c: 0,
      exp: "Conductance depends directly on the number of ions formed: $\\text{I}$ gives 4 ions, $\\text{II}$ gives 3 ions, $\\text{III}$ gives 2 ions, and $\\text{IV}$ gives 0 ions."
    },
    {
      q: "A coordination compound of formula $\\text{PtCl}_4 \\cdot 2\\text{KCl}$ does not give a precipitate with $\\text{AgNO}_3$ solution. Its formulation according to Werner is:",
      opts: [
        "$\\text{K}_2[\\text{PtCl}_6]$",
        "$[\\text{Pt}(\\text{KCl})_2\\text{Cl}_4]$",
        "$\\text{K}_2[\\text{PtCl}_4]\\text{Cl}_2$",
        "$[\\text{PtCl}_6]\\text{K}_2$"
      ],
      c: 0,
      exp: "Since no $\\text{AgCl}$ precipitate is formed, all chloride ions must be inside the complex anion: $\\text{K}_2[\\text{PtCl}_6] \\rightarrow 2\\text{K}^+ + [\\text{PtCl}_6]^{2-}$."
    },
    {
      q: "How many moles of $\\text{AgCl}$ will be precipitated when excess $\\text{AgNO}_3$ is added to $0.1\\text{ mol}$ of $[\\text{Cr}(\\text{H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2$?",
      opts: ["$0.2\\text{ mol}$", "$0.1\\text{ mol}$", "$0.3\\text{ mol}$", "$0.0\\text{ mol}$"],
      c: 0,
      exp: "Each mole of $[\\text{Cr}(\\text{H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2$ produces $2\\text{ mol}$ of free $\\text{Cl}^-$. Thus, $0.1\\text{ mol}$ gives $0.2\\text{ mol}$ of $\\text{AgCl}$."
    },
    {
      q: "Which of the following is an example of a double salt?",
      opts: [
        "Mohr's salt $\\text{FeSO}_4 \\cdot (\\text{NH}_4)_2\\text{SO}_4 \\cdot 6\\text{H}_2\\text{O}$",
        "Potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$",
        "Potassium ferricyanide $\\text{K}_3[\\text{Fe(CN)}_6]$",
        "Tetraamminecopper(II) sulfate $[\\text{Cu}(\\text{NH}_3)_4]\\text{SO}_4$"
      ],
      c: 0,
      exp: "Mohr's salt is a double salt that dissociates completely into $\\text{Fe}^{2+}, \\text{NH}_4^+$, and $\\text{SO}_4^{2-}$ in water."
    },
    {
      q: "Which of the following statements distinguishes a double salt from a coordination compound?",
      opts: [
        "Double salts lose their identity in aqueous solution, while coordination complexes retain their identity",
        "Double salts are always gaseous, whereas complexes are solids",
        "Coordination complexes contain only covalent bonds",
        "Double salts do not contain ionic bonds"
      ],
      c: 0,
      exp: "A double salt completely dissociates into simple constituent ions in aqueous solution, losing its identity, whereas a complex retain its coordination sphere."
    },
    {
      q: "In the complex $[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Cl}$, what are the primary and secondary valencies of cobalt respectively?",
      opts: ["3 and 6", "2 and 6", "3 and 5", "2 and 5"],
      c: 0,
      exp: "Cobalt is in the $+3$ oxidation state (primary valency = 3) and is coordinated to $5\\text{NH}_3 + 1\\text{SO}_4^{2-}$ (secondary valency = 6)."
    },
    {
      q: "A $0.001\\text{ molal}$ aqueous solution of which of the following compounds will exhibit the highest depression in freezing point?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$",
        "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$",
        "$[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$ dissociates into 4 ions ($i = 4$), producing the greatest number of particles and thus the maximum freezing point depression."
    },
    {
      q: "When a coordination compound $\\text{CrCl}_3 \\cdot 6\\text{H}_2\\text{O}$ was treated with excess $\\text{AgNO}_3$, $1/3$ of the total chlorine was precipitated as $\\text{AgCl}$. What is the formula of the complex?",
      opts: [
        "$[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl} \\cdot 2\\text{H}_2\\text{O}$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_6]\\text{Cl}_3$",
        "$[\\text{Cr}(\\text{H}_2\\text{O})_3\\text{Cl}_3] \\cdot 3\\text{H}_2\\text{O}$"
      ],
      c: 0,
      exp: "Since $1/3$ of the total chlorine precipitates, exactly 1 out of the 3 chlorines is in the outer sphere: $[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl} \\cdot 2\\text{H}_2\\text{O}$."
    },
    {
      q: "In the complex $[\\text{Co}(\\text{en})_2\\text{Cl}_2]\\text{Cl}$, how many chloride ions satisfy BOTH primary and secondary valency?",
      opts: ["2", "1", "3", "0"],
      c: 0,
      exp: "The two coordinated $\\text{Cl}^-$ ions inside the brackets satisfy secondary valency (coordination number) and also neutralize the charge of $\\text{Co}^{3+}$ (primary valency)."
    },
    {
      q: "In the complex $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$, how many chloride ions satisfy ONLY primary valency?",
      opts: ["2", "1", "3", "0"],
      c: 0,
      exp: "The two chloride ions outside the coordination brackets act solely as ionizable counter anions to satisfy primary valency."
    },
    {
      q: "Which of the following complexes will produce a precipitate of barium sulfate when mixed with aqueous $\\text{BaCl}_2$?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$",
        "$[\\text{Pt}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Br}_2$"
      ],
      c: 0,
      exp: "Only $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ has an uncoordinated $\\text{SO}_4^{2-}$ counter ion in the outer sphere that can react with $\\text{Ba}^{2+}$ to precipitate $\\text{BaSO}_4$."
    },
    {
      q: "How many total ions are produced per formula unit when $\\text{K}_3[\\text{Fe(CN)}_6]$ dissolves in water?",
      opts: ["4", "3", "2", "6"],
      c: 0,
      exp: "$\\text{K}_3[\\text{Fe(CN)}_6] \\rightarrow 3\\text{K}^+ + [\\text{Fe(CN)}_6]^{3-}$, producing 4 ions in total."
    },
    {
      q: "How many total ions are produced per formula unit when $\\text{K}_2[\\text{PtCl}_6]$ dissolves in water?",
      opts: ["3", "2", "4", "6"],
      c: 0,
      exp: "$\\text{K}_2[\\text{PtCl}_6] \\rightarrow 2\\text{K}^+ + [\\text{PtCl}_6]^{2-}$, producing 3 ions in total."
    },
    {
      q: "A coordination compound has the formula $\\text{CoCl}_3 \\cdot 4\\text{NH}_3$. It exists in two geometrically isomeric forms, violet and green. What are the names of these isomers?",
      opts: [
        "cis and trans isomers",
        "fac and mer isomers",
        "linkage isomers",
        "coordination isomers"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$ is an $\\text{MA}_4\\text{B}_2$ octahedral complex. The cis-isomer is violet and the trans-isomer is green."
    },
    {
      q: "Which observation led Werner to conclude that secondary valencies have directional properties in space?",
      opts: [
        "The existence of geometrical and optical isomers in coordination complexes",
        "The electrical conductivity of aqueous solutions",
        "The colour changes during titrations",
        "The precipitation of metal carbonates"
      ],
      c: 0,
      exp: "The existence of stereo-isomers (geometrical and optical) requires bonds to be fixed in specific directional geometries in three-dimensional space."
    },
    {
      q: "What is the primary valency of iron in potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$?",
      opts: ["2", "4", "6", "3"],
      c: 0,
      exp: "In $\\text{K}_4[\\text{Fe(CN)}_6]$, iron has an oxidation state of $+2$, so its primary valency is 2."
    },
    {
      q: "What is the secondary valency of iron in potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$?",
      opts: ["6", "4", "2", "3"],
      c: 0,
      exp: "Iron is bonded to six cyanide ligands, so its coordination number (secondary valency) is 6."
    },
    {
      q: "What is the primary valency of iron in potassium ferricyanide $\\text{K}_3[\\text{Fe(CN)}_6]$?",
      opts: ["3", "2", "6", "4"],
      c: 0,
      exp: "In $\\text{K}_3[\\text{Fe(CN)}_6]$, iron has an oxidation state of $+3$, so its primary valency is 3."
    },
    {
      q: "What is the secondary valency of platinum in $[\\text{Pt}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}_2$?",
      opts: ["6", "4", "2", "8"],
      c: 0,
      exp: "Platinum is surrounded by four $\\text{NH}_3$ and two $\\text{Cl}^-$ ligands inside the coordination sphere, giving a coordination number of 6."
    },
    {
      q: "What is the primary valency of nickel in $[\\text{Ni(CO)}_4]$?",
      opts: ["0", "4", "2", "1"],
      c: 0,
      exp: "Carbon monoxide is a neutral ligand, and the oxidation state of nickel in $[\\text{Ni(CO)}_4]$ is $0$, so its primary valency is 0."
    },
    {
      q: "What is the secondary valency of nickel in $[\\text{Ni(CO)}_4]$?",
      opts: ["4", "0", "2", "6"],
      c: 0,
      exp: "Nickel coordinates with four carbonyl ligands, so its secondary valency (coordination number) is 4."
    },
    {
      q: "Which of the following compounds gives a precipitate with $\\text{AgNO}_3$ but does NOT conduct electricity like a $1:3$ electrolyte?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$",
        "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$",
        "$\\text{AlCl}_3$",
        "$\\text{FeCl}_3$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$ is a $1:2$ electrolyte that precipitates $2\\text{ mol}$ of $\\text{AgCl}$, not a $1:3$ electrolyte."
    },
    {
      q: "According to Werner, the species present inside the square brackets $[\\dots]$ is termed the:",
      opts: [
        "Coordination sphere",
        "Ionization sphere",
        "Primary valence zone",
        "Counter ion zone"
      ],
      c: 0,
      exp: "The central atom and its directly coordinated ligands enclosed within square brackets form the coordination sphere."
    },
    {
      q: "The species present outside the square brackets in a coordination compound is called the:",
      opts: [
        "Ionization sphere (counter ions)",
        "Coordination sphere",
        "Chelate ring",
        "Secondary valence sphere"
      ],
      c: 0,
      exp: "The ionizable portion outside the brackets constitutes the ionization sphere containing counter ions."
    },
    {
      q: "A solution containing $2.675\\text{ g}$ of $\\text{CoCl}_3 \\cdot 6\\text{NH}_3$ (molar mass $= 267.5\\text{ g/mol}$) is passed through a cation exchanger. The number of moles of chloride ions obtained in the filtrate is:",
      opts: ["$0.03\\text{ mol}$", "$0.01\\text{ mol}$", "$0.02\\text{ mol}$", "$0.00\\text{ mol}$"],
      c: 0,
      exp: "Number of moles of complex $= 2.675 / 267.5 = 0.01\\text{ mol}$. Each formula unit has $3\\text{Cl}^-$ counter ions, yielding $0.01 \\times 3 = 0.03\\text{ mol}$ of chloride in the filtrate."
    },
    {
      q: "Which of the following compounds has the lowest molar conductivity in $0.1\\text{ M}$ aqueous solution?",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$",
        "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$",
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$",
        "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$ is a neutral, non-conducting non-electrolyte."
    },
    {
      q: "When $0.1\\text{ mol}$ of $\\text{CoCl}_3 \\cdot 5\\text{NH}_3$ is treated with excess $\\text{AgNO}_3$, how many grams of $\\text{AgCl}$ (molar mass $= 143.5\\text{ g/mol}$) will be precipitated?",
      opts: ["$28.7\\text{ g}$", "$14.35\\text{ g}$", "$43.05\\text{ g}$", "$0.0\\text{ g}$"],
      c: 0,
      exp: "Molar precipitation $= 0.1 \\times 2 = 0.2\\text{ mol}$ of $\\text{AgCl}$. Mass $= 0.2 \\times 143.5 = 28.7\\text{ g}$."
    },
    {
      q: "Which of the following ions is NOT present when Mohr's salt dissolves in water?",
      opts: ["$[\\text{Fe(SO}_4)_2]^{2-}$", "$\\text{Fe}^{2+}$", "$\\text{NH}_4^+$", "$\\text{SO}_4^{2-}$"],
      c: 0,
      exp: "Mohr's salt is a double salt and dissociates completely into $\\text{Fe}^{2+}, \\text{NH}_4^+$, and $\\text{SO}_4^{2-}$ ions. No complex anion is formed."
    },
    {
      q: "The complex $[\\text{Pt}(\\text{NH}_3)_6]\\text{Cl}_4$ behaves as what type of electrolyte in aqueous solution?",
      opts: ["$1:4$ electrolyte", "$1:2$ electrolyte", "$1:3$ electrolyte", "$1:1$ electrolyte"],
      c: 0,
      exp: "$[\\text{Pt}(\\text{NH}_3)_6]\\text{Cl}_4 \\rightarrow [\\text{Pt}(\\text{NH}_3)_6]^{4+} + 4\\text{Cl}^-$, which is a $1:4$ electrolyte."
    },
    {
      q: "Which of the following compounds has a coordination number of 4 and oxidation state of $+2$?",
      opts: [
        "$[\\text{Pt}(\\text{NH}_3)_4]\\text{Cl}_2$",
        "$[\\text{Pt}(\\text{NH}_3)_6]\\text{Cl}_4$",
        "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$",
        "$[\\text{Ni(CO)}_4]$"
      ],
      c: 0,
      exp: "In $[\\text{Pt}(\\text{NH}_3)_4]\\text{Cl}_2$, platinum has coordination number 4 (secondary valency) and oxidation state $+2$ (primary valency)."
    },
    {
      q: "If an aqueous solution of a coordination complex has a van 't Hoff factor $i = 3$ at infinite dilution, the complex could be:",
      opts: [
        "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$",
        "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$",
        "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$",
        "$[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2 \\rightarrow [\\text{Co}(\\text{NH}_3)_5\\text{Cl}]^{2+} + 2\\text{Cl}^-$, producing 3 ions ($i = 3$)."
    },
    {
      q: "In which of the following complexes does the central metal atom satisfy its secondary valency using ONLY bidentate ligands?",
      opts: [
        "$[\\text{Co}(\\text{en})_3]\\text{Cl}_3$",
        "$[\\text{Co}(\\text{en})_2\\text{Cl}_2]\\text{Cl}$",
        "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$",
        "$[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$"
      ],
      c: 0,
      exp: "In $[\\text{Co}(\\text{en})_3]\\text{Cl}_3$, all six coordination sites are occupied by three bidentate ethylenediamine (en) ligands."
    },
    {
      q: "A complex of platinum has empirical formula $\\text{PtCl}_2 \\cdot 2\\text{NH}_3$. Cryoscopic measurements show that it is a non-electrolyte. What is its coordination number?",
      opts: ["4", "2", "6", "0"],
      c: 0,
      exp: "As a non-electrolyte, both $\\text{NH}_3$ and both $\\text{Cl}^-$ are coordinated inside the brackets: $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$. Coordination number is $2 + 2 = 4$."
    },
    {
      q: "In Werner's original experiments, the coordination polyhedron for a complex with secondary valency 6 was identified as:",
      opts: [
        "Regular octahedron",
        "Planar hexagon",
        "Trigonal prism",
        "Tetrahedron"
      ],
      c: 0,
      exp: "Werner demonstrated that six ligands are arranged octahedrally around the central metal atom."
    },
    {
      q: "Which test can be used to distinguish between $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ and $[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$?",
      opts: [
        "Reaction with $\\text{BaCl}_2$ and $\\text{AgNO}_3$",
        "Measuring boiling point only",
        "Flame test",
        "Smell of the solution"
      ],
      c: 0,
      exp: "$[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ gives a white precipitate with $\\text{BaCl}_2$, while $[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$ gives a pale yellow precipitate with $\\text{AgNO}_3$."
    },
    {
      q: "Which property was Werner UNABLE to explain with his theory?",
      opts: [
        "The magnetic and optical absorption properties of coordination compounds",
        "The number of precipitate moles with $\\text{AgNO}_3$",
        "The electrical conductivity of aqueous solutions",
        "The existence of cis and trans isomers"
      ],
      c: 0,
      exp: "Werner's classical model could not explain the origin of colours (electronic transitions) or magnetic moments of complexes."
    },
    {
      q: "What is the primary valency of chromium in $[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl}$?",
      opts: ["3", "2", "1", "6"],
      c: 0,
      exp: "Chromium is in the $+3$ oxidation state: $x + 4(0) + 2(-1) + (-1) = 0 \\implies x = +3$."
    },
    {
      q: "What is the secondary valency of chromium in $[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl}$?",
      opts: ["6", "4", "2", "3"],
      c: 0,
      exp: "Chromium is directly bonded to $4\\text{H}_2\\text{O} + 2\\text{Cl}^-$, giving a secondary valency (coordination number) of 6."
    }
  ];

  mcqData.slice(0, 44).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "How many moles of $\\text{AgCl}$ are precipitated when $1\\text{ mol}$ of $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$ reacts with excess $\\text{AgNO}_3$?",
    "3",
    "All three chloride ions are outside the coordination sphere as counter ions, producing $3\\text{ mol}$ of $\\text{AgCl}$."
  ));
  list.push(createNumerical(st,
    "How many moles of $\\text{AgCl}$ are precipitated when $1\\text{ mol}$ of $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$ reacts with excess $\\text{AgNO}_3$?",
    "2",
    "Only the two ionizable chloride ions in the outer sphere precipitate as $\\text{AgCl}$."
  ));
  list.push(createNumerical(st,
    "How many moles of $\\text{AgCl}$ are precipitated when $1\\text{ mol}$ of $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$ reacts with excess $\\text{AgNO}_3$?",
    "1",
    "Only one chloride ion is outside the coordination sphere, yielding $1\\text{ mol}$ of $\\text{AgCl}$."
  ));
  list.push(createNumerical(st,
    "How many moles of $\\text{AgCl}$ are precipitated when $1\\text{ mol}$ of $[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$ reacts with excess $\\text{AgNO}_3$ at room temperature?",
    "0",
    "All three chlorides are coordinated inside the sphere and do not ionize, yielding $0\\text{ mol}$ of $\\text{AgCl}$."
  ));
  list.push(createNumerical(st,
    "What is the secondary valency of cobalt in $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$?",
    "6",
    "Cobalt is coordinated to six ammonia ligands, so its secondary valency is $6$."
  ));
  list.push(createNumerical(st,
    "What is the primary valency of cobalt in $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$?",
    "3",
    "Cobalt has an oxidation state of $+3$, so its primary valency is $3$."
  ));
  list.push(createNumerical(st,
    "What is the total number of ions produced per formula unit of $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$ in aqueous solution?",
    "4",
    "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3 \\rightarrow [\\text{Co}(\\text{NH}_3)_6]^{3+} + 3\\text{Cl}^-$, producing $4$ ions."
  ));
  list.push(createNumerical(st,
    "What is the total number of ions produced per formula unit of $[\\text{Pt}(\\text{NH}_3)_6]\\text{Cl}_4$ in aqueous solution?",
    "5",
    "$[\\text{Pt}(\\text{NH}_3)_6]\\text{Cl}_4 \\rightarrow [\\text{Pt}(\\text{NH}_3)_6]^{4+} + 4\\text{Cl}^-$, producing $5$ ions."
  ));
  list.push(createNumerical(st,
    "What is the total number of ions produced per formula unit of potassium ferrocyanide $\\text{K}_4[\\text{Fe(CN)}_6]$ in aqueous solution?",
    "5",
    "$\\text{K}_4[\\text{Fe(CN)}_6] \\rightarrow 4\\text{K}^+ + [\\text{Fe(CN)}_6]^{4-}$, producing $5$ ions."
  ));
  list.push(createNumerical(st,
    "What is the secondary valency of platinum in $\\text{K}_2[\\text{PtCl}_6]$?",
    "6",
    "Platinum is coordinated to six chloride ligands, giving a coordination number of $6$."
  ));
  list.push(createNumerical(st,
    "What is the primary valency of platinum in $\\text{K}_2[\\text{PtCl}_6]$?",
    "4",
    "In $\\text{K}_2[\\text{PtCl}_6]$, platinum has an oxidation state of $+4$, so its primary valency is $4$."
  ));
  list.push(createNumerical(st,
    "How many chloride ions satisfy both primary and secondary valencies in $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$?",
    "2",
    "The two coordinated chloride ions inside the coordination sphere satisfy both primary (charge) and secondary (coordination) valencies."
  ));
  list.push(createNumerical(st,
    "How many chloride ions satisfy only the primary valency in $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$?",
    "1",
    "Only the single outer-sphere chloride ion satisfies solely the primary valency."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 1...");
const allPart1 = buildPart1();
console.log(`Total Part 1 questions: ${allPart1.length} (Expected: 83)`);

allPart1.forEach((q, idx) => {
  checkKatex(q.question, `Part1[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part1[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part1[${idx}].explanation`);
});

console.log("All Part 1 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for Coordination Compounds Part 1
module.exports = ${JSON.stringify(allPart1, null, 2)};
`;

fs.writeFileSync('scripts/data_coord_part1.js', fileContent);
console.log("Written scripts/data_coord_part1.js successfully!");
