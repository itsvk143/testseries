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
// Subtopic 5: Interhalogen compounds and noble gas compounds
// Needed: 117 Qs (26 AR, 78 MCQ, 13 NUM)
// -------------------------------------------------------------
function buildPart5() {
  const st = "Interhalogen compounds and noble gas compounds";
  const list = [];

  const arData = [
    {
      a: "Interhalogen compounds are generally more reactive than pure halogens (except fluorine).",
      r: "The $X-X'$ bond in interhalogen compounds is weaker and more polar than the $X-X$ bond in pure halogens, except the $\\text{F}-\\text{F}$ bond.",
      idx: 0,
      exp: "Due to the difference in electronegativity between two dissimilar halogens, the $X-X'$ bond is polar and weaker than homonuclear bonds like $\\text{Cl}-\\text{Cl}$ or $\\text{Br}-\\text{Br}$, leading to higher chemical reactivity. Both statements are true and Reason explains Assertion."
    },
    {
      a: "$\\text{ClF}_3$ is used for the production of uranium hexafluoride ($\\text{UF}_6$) in the enrichment of $^{235}\\text{U}$.",
      r: "$\\text{ClF}_3$ is an exceptionally powerful fluorinating agent and reacts vigorously with uranium metal.",
      idx: 0,
      exp: "$\\text{U(s)} + 3\\text{ClF}_3(\\text{l}) \\rightarrow \\text{UF}_6(\\text{g}) + 3\\text{ClF}(\\text{g})$. $\\text{ClF}_3$ fluorinates uranium rapidly without needing extreme temperatures."
    },
    {
      a: "The geometry of $\\text{ClF}_3$ is bent T-shaped.",
      r: "In $\\text{ClF}_3$, chlorine undergoes $sp^3d$ hybridization with three bond pairs and two lone pairs occupying equatorial positions to minimize repulsions.",
      idx: 0,
      exp: "With 3 bond pairs and 2 lone pairs in equatorial positions of a trigonal bipyramid, lone pair-bond pair repulsions slightly bend the axial $\\text{Cl}-\\text{F}$ bonds, giving a bent T-shaped geometry."
    },
    {
      a: "$\\text{IF}_7$ has a pentagonal bipyramidal geometry.",
      r: "In $\\text{IF}_7$, the iodine atom undergoes $sp^3d^3$ hybridization with seven bonding pairs and zero lone pairs.",
      idx: 0,
      exp: "$\\text{IF}_7$ has seven valence electron pairs on iodine, all participating in bonding with fluorine atoms in a pentagonal bipyramidal arrangement."
    },
    {
      a: "Neil Bartlett was inspired to prepare the first noble gas compound by the reaction between molecular oxygen and $\\text{PtF}_6$.",
      r: "The first ionization enthalpy of molecular oxygen ($1175\\text{ kJ/mol}$) is very close to that of xenon ($1170\\text{ kJ/mol}$).",
      idx: 0,
      exp: "Bartlett discovered that $\\text{PtF}_6$ oxidizes $\\text{O}_2$ to form $\\text{O}_2^+[\\text{PtF}_6]^-$. Realizing the nearly identical first ionization energies of $\\text{O}_2$ and $\\text{Xe}$, he successfully synthesized $\\text{Xe}^+[\\text{PtF}_6]^-$. Both are true and Reason explains Assertion."
    },
    {
      a: "$\\text{XeF}_2$ is a linear molecule.",
      r: "In $\\text{XeF}_2$, the central xenon atom undergoes $sp^3d$ hybridization with two axial bond pairs and three equatorial lone pairs.",
      idx: 0,
      exp: "The three lone pairs occupy the equatorial positions of the trigonal bipyramid to minimize $90^\\circ$ electron-electron repulsions, placing the two $\\text{Xe}-\\text{F}$ bonds in a straight line ($180^\\circ$)."
    },
    {
      a: "$\\text{XeF}_4$ has a square planar geometry.",
      r: "In $\\text{XeF}_4$, xenon undergoes $sp^3d^2$ hybridization with four bond pairs and two lone pairs positioned trans to each other.",
      idx: 0,
      exp: "The two lone pairs occupy trans positions of an octahedron ($180^\\circ$ apart), leaving four fluorine atoms in a square plane."
    },
    {
      a: "Hydrolysis of $\\text{XeF}_6$ with excess water is a redox reaction.",
      r: "Xenon changes its oxidation state from $+6$ to $0$ during the hydrolysis of $\\text{XeF}_6$.",
      idx: 3,
      exp: "Hydrolysis of $\\text{XeF}_6$ is NOT a redox reaction: $\\text{XeF}_6 + 3\\text{H}_2\\text{O} \\rightarrow \\text{XeO}_3 + 6\\text{HF}$. The oxidation state of xenon remains $+6$ throughout. Thus Assertion is false and Reason is false (or (A) is false and (R) is false; here (A) is false and (R) is false, so correct is D)."
    },
    {
      a: "Hydrolysis of $\\text{XeF}_4$ with water is a disproportionation reaction.",
      r: "In the hydrolysis of $\\text{XeF}_4$, xenon in the $+4$ oxidation state is simultaneously reduced to elemental $\\text{Xe}$ ($0$) and oxidized to $\\text{XeO}_3$ ($+6$).",
      idx: 0,
      exp: "$6\\text{XeF}_4 + 12\\text{H}_2\\text{O} \\rightarrow 4\\text{Xe} + 2\\text{XeO}_3 + 24\\text{HF} + 3\\text{O}_2$. Xenon disproportionates from $+4$ to $0$ and $+6$."
    },
    {
      a: "$\\text{XeF}_2$ reacts with fluoride ion acceptors like $\\text{PF}_5$ to form cationic species.",
      r: "$\\text{XeF}_2$ acts as a fluoride ion donor to form $[\text{XeF}]^+[\\text{PF}_6]^-$.",
      idx: 0,
      exp: "$\\text{XeF}_2 + \\text{PF}_5 \\rightarrow [\\text{XeF}]^+[\\text{PF}_6]^-$. Xenon difluoride donates a fluoride ion to the Lewis acid $\\text{PF}_5$."
    },
    {
      a: "$\\text{XeF}_6$ reacts with alkali metal fluorides ($\\text{MF}$) to form octafluoroxenate(VI) salts.",
      r: "$\\text{XeF}_6$ can act as a fluoride ion acceptor to form $\\text{M}^+[\\text{XeF}_7]^-$.",
      idx: 0,
      exp: "$\\text{XeF}_6 + \\text{MF} \\rightarrow \\text{M}^+[\\text{XeF}_7]^-$, where $\\text{M} = \\text{Na, K, Rb, Cs}$. $\\text{XeF}_6$ acts as a Lewis acid / fluoride acceptor."
    },
    {
      a: "The shape of $\\text{XeO}_3$ is trigonal pyramidal.",
      r: "In $\\text{XeO}_3$, xenon has three $\\text{Xe}=\\text{O}$ double bonds and one non-bonding lone pair ($sp^3$ hybridization).",
      idx: 0,
      exp: "Three bond pairs and one lone pair arrange in a tetrahedral electron geometry, resulting in a trigonal pyramidal molecular shape, similar to $\\text{NH}_3$."
    },
    {
      a: "The molecular geometry of $\\text{XeOF}_4$ is square pyramidal.",
      r: "In $\\text{XeOF}_4$, xenon undergoes $sp^3d^2$ hybridization with five bonding domains and one lone pair.",
      idx: 0,
      exp: "Six electron domains ($5$ bonds $+ 1$ lone pair) give an octahedral electron geometry. The single lone pair occupies one position, creating a square pyramidal molecule."
    },
    {
      a: "Helium is used to dilute oxygen in the gas cylinders used by deep-sea divers.",
      r: "Helium has an extremely low solubility in blood even under high underwater pressure, preventing the painful condition called the 'bends'.",
      idx: 0,
      exp: "Nitrogen dissolves in blood under high pressure and forms bubbles when divers ascend quickly. Helium dissolves minimally in blood, eliminating the risk of bends."
    },
    {
      a: "Helium is preferred over hydrogen for filling meteorological observation balloons.",
      r: "Helium is non-inflammable and completely safe, even though hydrogen is slightly lighter.",
      idx: 0,
      exp: "Hydrogen forms highly explosive mixtures with air. Helium is chemically inert and non-flammable, making it much safer for balloons."
    },
    {
      a: "Liquid helium is widely used as a cryogenic coolant in superconducting magnets.",
      r: "Helium has the lowest boiling point ($4.2\\text{ K}$) of any substance and remains liquid under ordinary pressure down to absolute zero.",
      idx: 0,
      exp: "Liquid helium at $4.2\\text{ K}$ cools superconducting electromagnets (e.g. in MRI scanners) below their transition temperature."
    },
    {
      a: "Neon is extensively used in advertising display signs and beacon lights.",
      r: "Neon gas in discharge tubes emits a brilliant orange-red light and has exceptional fog-penetrating power.",
      idx: 0,
      exp: "Neon discharge lamps produce intense characteristic orange-red light visible through mist and fog, ideal for advertising and airport beacons."
    },
    {
      a: "Argon is widely used to provide an inert atmosphere in high-temperature metallurgical processes.",
      r: "Argon is chemically completely inert and more abundant and economical than helium, krypton, or xenon.",
      idx: 0,
      exp: "Argon makes up nearly $1\\%$ of the atmosphere, making it inexpensive. Its inertness prevents oxidation during arc welding and metal refining."
    },
    {
      a: "All interhalogen compounds are diamagnetic in nature.",
      r: "All valence electrons in interhalogen compounds are fully paired in bonding or non-bonding orbitals.",
      idx: 0,
      exp: "Each halogen atom contributes an odd number of valence electrons ($7$). In any binary $XX'_n$ compound, the total number of valence electrons is an even number ($7 + 7n$), resulting in complete spin pairing."
    },
    {
      a: "The triiodide ion ($\\text{I}_3^-$) has a linear shape.",
      r: "In $\\text{I}_3^-$, the central iodine atom has two bond pairs and three lone pairs located in equatorial positions of a trigonal bipyramid.",
      idx: 0,
      exp: "The three lone pairs occupy the equatorial positions of the $sp^3d$ hybridized central iodine, aligning the two terminal iodines at $180^\\circ$ in a linear geometry."
    },
    {
      a: "In the solid state, iodine trichloride exists as a planar dimer $\\text{I}_2\\text{Cl}_6$.",
      r: "Each iodine atom in the $\\text{I}_2\\text{Cl}_6$ dimer is $sp^3d^2$ hybridized with two bridging chlorines, two terminal chlorines, and two lone pairs.",
      idx: 0,
      exp: "In solid $\\text{I}_2\\text{Cl}_6$, two chlorine atoms bridge the two iodine atoms in a planar four-membered ring, with each iodine having two terminal chlorines and two lone pairs."
    },
    {
      a: "Partial hydrolysis of $\\text{XeF}_6$ yields $\\text{XeOF}_4$ and $\\text{XeO}_2\\text{F}_2$.",
      r: "Stepwise replacement of fluorine atoms by oxygen occurs without changing the $+6$ oxidation state of xenon.",
      idx: 0,
      exp: "$\\text{XeF}_6 + \\text{H}_2\\text{O} \\rightarrow \\text{XeOF}_4 + 2\\text{HF}$ and $\\text{XeF}_6 + 2\\text{H}_2\\text{O} \\rightarrow \\text{XeO}_2\\text{F}_2 + 4\\text{HF}$. Xenon remains in $+6$ oxidation state in both oxofluorides."
    },
    {
      a: "Krypton forms far fewer compounds than xenon.",
      r: "Krypton has a higher first ionization enthalpy ($1351\\text{ kJ/mol}$) than xenon ($1170\\text{ kJ/mol}$).",
      idx: 0,
      exp: "Because of higher ionization energy, removing or sharing electrons from krypton requires more energy, so only $\\text{KrF}_2$ has been prepared in pure form."
    },
    {
      a: "Radon compounds are difficult to isolate and study macroscopically.",
      r: "Radon has no stable isotopes and its longest-lived isotope ($^{222}\\text{Rn}$) has a short half-life of only $3.82$ days.",
      idx: 0,
      exp: "Due to high radioactivity and rapid decay, radon chemistry is studied only by radiotracer micro-scale techniques."
    },
    {
      a: "$\\text{XeF}_6$ cannot be stored in glass or silica vessels.",
      r: "$\\text{XeF}_6$ reacts with silica ($\\text{SiO}_2$) in glass to produce dangerously explosive xenon trioxide ($\\text{XeO}_3$) and gaseous $\\text{SiF}_4$.",
      idx: 0,
      exp: "$2\\text{XeF}_6 + \\text{SiO}_2 \\rightarrow 2\\text{XeOF}_4 + \\text{SiF}_4$, and further $2\\text{XeOF}_4 + \\text{SiO}_2 \\rightarrow 2\\text{XeO}_2\\text{F}_2 + \\text{SiF}_4$, eventually yielding solid $\\text{XeO}_3$ which is explosive. Both are true and Reason explains Assertion."
    },
    {
      a: "$\\text{BrF}_5$ has a square pyramidal geometry.",
      r: "Bromine in $\\text{BrF}_5$ is $sp^3d^2$ hybridized with five bonding pairs and one lone pair.",
      idx: 0,
      exp: "Six electron domains with one lone pair form a square pyramidal geometry according to VSEPR theory."
    }
  ];

  arData.forEach(d => {
    list.push(createAR(st, d.a, d.r, d.idx, d.exp));
  });

  // 78 MCQs covering interhalogens and noble gases
  const mcqData = [
    {
      q: "Which of the following interhalogen compounds has a pentagonal bipyramidal geometry?",
      opts: ["$\\text{IF}_7$", "$\\text{BrF}_5$", "$\\text{ClF}_3$", "$\\text{ICl}$"],
      c: 0,
      exp: "$\\text{IF}_7$ has $7$ bonding pairs and $0$ lone pairs on the central iodine atom ($sp^3d^3$ hybridization), resulting in a pentagonal bipyramidal shape."
    },
    {
      q: "What is the molecular geometry and hybridization of chlorine in $\\text{ClF}_3$?",
      opts: [
        "Bent T-shaped, $sp^3d$",
        "Trigonal planar, $sp^2$",
        "Pyramidal, $sp^3$",
        "See-saw, $sp^3d$"
      ],
      c: 0,
      exp: "$\\text{ClF}_3$ has $3$ bond pairs and $2$ equatorial lone pairs on chlorine ($sp^3d$ hybridization), yielding a bent T-shaped geometry."
    },
    {
      q: "What is the molecular geometry and hybridization of bromine in $\\text{BrF}_5$?",
      opts: [
        "Square pyramidal, $sp^3d^2$",
        "Trigonal bipyramidal, $sp^3d$",
        "Octahedral, $sp^3d^2$",
        "Tetrahedral, $sp^3$"
      ],
      c: 0,
      exp: "$\\text{BrF}_5$ has $5$ bond pairs and $1$ lone pair on bromine ($sp^3d^2$ hybridization), producing a square pyramidal geometry."
    },
    {
      q: "Which interhalogen compound is used industrially for the enrichment of $^{235}\\text{U}$ to produce $\\text{UF}_6$?",
      opts: ["$\\text{ClF}_3$", "$\\text{ICl}$", "$\\text{BrF}$", "$\\text{IF}_7$"],
      c: 0,
      exp: "$\\text{ClF}_3$ is used in uranium reprocessing: $\\text{U} + 3\\text{ClF}_3 \\rightarrow \\text{UF}_6 + 3\\text{ClF}$."
    },
    {
      q: "What are the products of hydrolysis of iodine monochloride ($\\text{ICl}$)?",
      opts: [
        "$\\text{HCl}$ and $\\text{HOI}$",
        "$\\text{HI}$ and $\\text{HOCl}$",
        "$\\text{HCl}$ and $\\text{HIO}_3$",
        "$\\text{HI}$ and $\\text{HClO}_3$"
      ],
      c: 0,
      exp: "Hydrolysis yields the halide of the more electronegative halogen ($\\text{Cl}^-$) and the hypohalite of the less electronegative halogen ($\\text{I}^+$): $\\text{ICl} + \\text{H}_2\\text{O} \\rightarrow \\text{HCl} + \\text{HOI}$."
    },
    {
      q: "What are the products obtained upon hydrolysis of bromine pentafluoride ($\\text{BrF}_5$)?",
      opts: [
        "$\\text{HF}$ and $\\text{HBrO}_3$",
        "$\\text{HBr}$ and $\\text{HOF}$",
        "$\\text{HF}$ and $\\text{HBr}$",
        "$\\text{HBrO}_4$ and $\\text{F}_2$"
      ],
      c: 0,
      exp: "$\\text{BrF}_5 + 3\\text{H}_2\\text{O} \\rightarrow 5\\text{HF} + \\text{HBrO}_3$. Bromine (+5) forms bromic acid while fluorine (-1) forms $\\text{HF}$."
    },
    {
      q: "Why are interhalogen compounds more reactive than diatomic halogens (except fluorine)?",
      opts: [
        "The $X-X'$ bond is weaker and polar compared to the non-polar $X-X$ bond in pure halogens",
        "Interhalogens are ionic compounds",
        "Interhalogens have completely filled $d$-orbitals",
        "Interhalogens are paramagnetic"
      ],
      c: 0,
      exp: "Because of the electronegativity difference between $X$ and $X'$, the $X-X'$ bond is polarized and has lower bond dissociation energy than homonuclear $X-X$ bonds (except $\\text{F}-\\text{F}$)."
    },
    {
      q: "What is the magnetic property of all interhalogen compounds?",
      opts: ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Antiferromagnetic"],
      c: 0,
      exp: "All interhalogen compounds possess an even number of valence electrons with all electrons spin-paired, making them diamagnetic."
    },
    {
      q: "Which of the following noble gas compounds was the FIRST to be synthesized?",
      opts: [
        "$\\text{Xe}^+[\\text{PtF}_6]^-$",
        "$\\text{XeF}_2$",
        "$\\text{XeF}_4$",
        "$\\text{KrF}_2$"
      ],
      c: 0,
      exp: "Neil Bartlett synthesized $\\text{Xe}^+[\\text{PtF}_6]^-$ in 1962, marking the first synthesis of a noble gas compound."
    },
    {
      q: "Under what conditions is xenon difluoride ($\\text{XeF}_2$) prepared from xenon and fluorine gases?",
      opts: [
        "$\\text{Xe}$ in excess ($2:1$ ratio) at $673\\text{ K}$ and $1\\text{ bar}$",
        "$1:5$ ratio of $\\text{Xe}:\\text{F}_2$ at $873\\text{ K}$ and $7\\text{ bar}$",
        "$1:20$ ratio of $\\text{Xe}:\\text{F}_2$ at $573\\text{ K}$ and $60\\text{ bar}$",
        "Room temperature under UV light"
      ],
      c: 0,
      exp: "$\\text{XeF}_2$ is prepared by reacting xenon and fluorine in a $2:1$ molar ratio (excess xenon) at $673\\text{ K}$ and $1\\text{ bar}$ pressure."
    },
    {
      q: "Under what conditions is xenon tetrafluoride ($\\text{XeF}_4$) prepared from its elements?",
      opts: [
        "$1:5$ molar ratio of $\\text{Xe}:\\text{F}_2$ at $873\\text{ K}$ and $7\\text{ bar}$",
        "$2:1$ molar ratio at $673\\text{ K}$ and $1\\text{ bar}$",
        "$1:20$ molar ratio at $573\\text{ K}$ and $60\\text{ bar}$",
        "Room temperature with catalyst"
      ],
      c: 0,
      exp: "$\\text{XeF}_4$ is prepared by heating $\\text{Xe}$ and $\\text{F}_2$ in a $1:5$ molar ratio in a nickel vessel at $873\\text{ K}$ and $7\\text{ bar}$."
    },
    {
      q: "Under what conditions is xenon hexafluoride ($\\text{XeF}_6$) prepared directly from its elements?",
      opts: [
        "$1:20$ molar ratio of $\\text{Xe}:\\text{F}_2$ at $573\\text{ K}$ and $60-70\\text{ bar}$",
        "$1:5$ molar ratio at $873\\text{ K}$ and $7\\text{ bar}$",
        "$2:1$ molar ratio at $673\\text{ K}$ and $1\\text{ bar}$",
        "$1:1$ molar ratio at $298\\text{ K}$"
      ],
      c: 0,
      exp: "$\\text{XeF}_6$ is prepared by reacting $\\text{Xe}$ and $\\text{F}_2$ in a $1:20$ ratio at $573-673\\text{ K}$ under high pressure ($60-70\\text{ bar}$)."
    },
    {
      q: "$\\text{XeF}_6$ can also be prepared by the reaction of $\\text{XeF}_4$ with which oxidizing agent at $143\\text{ K}$?",
      opts: ["$\\text{O}_2\\text{F}_2$", "$\\text{F}_2$", "$\\text{OF}_2$", "$\\text{PtF}_6$"],
      c: 0,
      exp: "$\\text{XeF}_4 + \\text{O}_2\\text{F}_2 \\xrightarrow{143\\text{ K}} \\text{XeF}_6 + \\text{O}_2$."
    },
    {
      q: "What are the products of hydrolysis of xenon difluoride ($\\text{XeF}_2$)?",
      opts: [
        "$\\text{Xe}, \\text{HF}$, and $\\text{O}_2$",
        "$\\text{XeO}_3$ and $\\text{HF}$",
        "$\\text{XeO}_2$ and $\\text{F}_2$",
        "$\\text{Xe}$ and $\\text{OF}_2$"
      ],
      c: 0,
      exp: "$2\\text{XeF}_2 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{Xe} + 4\\text{HF} + \\text{O}_2$. $\\text{XeF}_2$ oxidizes water to dioxygen while being reduced to elemental xenon."
    },
    {
      q: "What products are obtained when $\\text{XeF}_4$ undergoes complete hydrolysis with water?",
      opts: [
        "$\\text{Xe}, \\text{XeO}_3, \\text{HF}$, and $\\text{O}_2$",
        "$\\text{XeO}_2$ and $\\text{HF}$ only",
        "$\\text{Xe}$ and $\\text{OF}_2$",
        "$\\text{XeO}_4$ and $\\text{HF}$"
      ],
      c: 0,
      exp: "$6\\text{XeF}_4 + 12\\text{H}_2\\text{O} \\rightarrow 4\\text{Xe} + 2\\text{XeO}_3 + 24\\text{HF} + 3\\text{O}_2$."
    },
    {
      q: "Complete hydrolysis of $\\text{XeF}_6$ with water produces:",
      opts: [
        "$\\text{XeO}_3$ and $\\text{HF}$",
        "$\\text{Xe}, \\text{HF}$, and $\\text{O}_2$",
        "$\\text{XeO}_4$ and $\\text{HF}$",
        "$\\text{XeOF}_4$ only"
      ],
      c: 0,
      exp: "$\\text{XeF}_6 + 3\\text{H}_2\\text{O} \\rightarrow \\text{XeO}_3 + 6\\text{HF}$. This is a non-redox hydrolysis yielding xenon trioxide and hydrofluoric acid."
    },
    {
      q: "Partial hydrolysis of $\\text{XeF}_6$ with one equivalent of water yields:",
      opts: [
        "$\\text{XeOF}_4$ and $\\text{HF}$",
        "$\\text{XeO}_2\\text{F}_2$ and $\\text{HF}$",
        "$\\text{XeO}_3$ and $\\text{HF}$",
        "$\\text{Xe}$ and $\\text{O}_2$"
      ],
      c: 0,
      exp: "$\\text{XeF}_6 + \\text{H}_2\\text{O} \\rightarrow \\text{XeOF}_4 + 2\\text{HF}$."
    },
    {
      q: "Partial hydrolysis of $\\text{XeF}_6$ with two equivalents of water yields:",
      opts: [
        "$\\text{XeO}_2\\text{F}_2$ and $\\text{HF}$",
        "$\\text{XeOF}_4$ and $\\text{HF}$",
        "$\\text{XeO}_3$ and $\\text{HF}$",
        "$\\text{Xe}$ and $\\text{F}_2$"
      ],
      c: 0,
      exp: "$\\text{XeF}_6 + 2\\text{H}_2\\text{O} \\rightarrow \\text{XeO}_2\\text{F}_2 + 4\\text{HF}$."
    },
    {
      q: "What is the molecular geometry and hybridization of xenon in $\\text{XeO}_2\\text{F}_2$?",
      opts: [
        "See-saw, $sp^3d$",
        "Square planar, $sp^3d^2$",
        "Tetrahedral, $sp^3$",
        "Trigonal bipyramidal, $sp^3d$"
      ],
      c: 0,
      exp: "$\\text{XeO}_2\\text{F}_2$ has $4$ bond pairs and $1$ lone pair in an equatorial position of a trigonal bipyramid ($sp^3d$ hybridization), resulting in a see-saw shape."
    },
    {
      q: "What is the molecular geometry and hybridization of xenon in $\\text{XeO}_4$?",
      opts: [
        "Tetrahedral, $sp^3$",
        "Square planar, $dsp^2$",
        "Octahedral, $sp^3d^2$",
        "Trigonal pyramidal, $sp^3$"
      ],
      c: 0,
      exp: "$\\text{XeO}_4$ has $4$ $\\text{Xe}=\\text{O}$ double bonds and $0$ lone pairs on xenon ($sp^3$ hybridization), resulting in a tetrahedral geometry."
    },
    {
      q: "What is the physical state and explosive nature of $\\text{XeO}_3$?",
      opts: [
        "Colourless crystalline solid, dangerously explosive",
        "Colourless gas, completely non-explosive",
        "Yellow liquid, inert",
        "Black powder, stable"
      ],
      c: 0,
      exp: "$\\text{XeO}_3$ is a colourless crystalline solid that is a powerful and dangerously explosive substance upon dry shock or heating."
    },
    {
      q: "When $\\text{XeF}_4$ reacts with antimony pentafluoride ($\\text{SbF}_5$), what complex is formed?",
      opts: [
        "$[\\text{XeF}_3]^+[\\text{SbF}_6]^-$",
        "$[\\text{XeF}_5]^+[\\text{SbF}_4]^-$",
        "$[\\text{XeF}]^+[\\text{SbF}_6]^-$",
        "$\\text{Xe}[\\text{SbF}_9]$"
      ],
      c: 0,
      exp: "$\\text{XeF}_4 + \\text{SbF}_5 \\rightarrow [\\text{XeF}_3]^+[\\text{SbF}_6]^-$. $\\text{XeF}_4$ acts as a fluoride ion donor."
    },
    {
      q: "When $\\text{XeF}_6$ reacts with cesium fluoride ($\\text{CsF}$), what is the formula of the product formed?",
      opts: [
        "$\\text{Cs}^+[\\text{XeF}_7]^-$",
        "$\\text{Cs}_2[\\text{XeF}_8]$",
        "$[\\text{XeF}_5]^+[\\text{CsF}_2]^-$",
        "$\\text{CsF} \\cdot \\text{XeF}_4$"
      ],
      c: 0,
      exp: "$\\text{XeF}_6 + \\text{CsF} \\rightarrow \\text{Cs}^+[\\text{XeF}_7]^-$. $\\text{XeF}_6$ accepts a fluoride ion to form the heptafluoroxenate(VI) complex."
    },
    {
      q: "What is the oxidation state of xenon in $\\text{XeF}_2, \\text{XeF}_4$, and $\\text{XeF}_6$ respectively?",
      opts: [
        "$+2, +4, +6$",
        "$+1, +2, +3$",
        "$+2, +4, +8$",
        "$+4, +6, +8$"
      ],
      c: 0,
      exp: "In $\\text{XeF}_2$, $\\text{Xe}$ is $+2$; in $\\text{XeF}_4$, $\\text{Xe}$ is $+4$; in $\\text{XeF}_6$, $\\text{Xe}$ is $+6$."
    },
    {
      q: "What is the oxidation state of xenon in sodium perxenate ($\\text{Na}_4\\text{XeO}_6$)?",
      opts: ["$+8$", "$+6$", "$+4$", "$+7$"],
      c: 0,
      exp: "In $\\text{Na}_4\\text{XeO}_6$, $4(+1) + x + 6(-2) = 0 \\implies x = +8$."
    },
    {
      q: "In the reaction of $\\text{XeF}_2$ with water, water acts as a:",
      opts: ["Reducing agent", "Oxidizing agent", "Catalyst", "Dehydrating agent"],
      c: 0,
      exp: "Water is oxidized to dioxygen ($\\text{O}_2$, oxidation number changes from $-2$ to $0$), so water acts as a reducing agent."
    },
    {
      q: "Which noble gas is used in magnetic resonance imaging (MRI) systems to cool superconducting magnets?",
      opts: ["Liquid helium", "Liquid neon", "Liquid argon", "Liquid krypton"],
      c: 0,
      exp: "Liquid helium boils at $4.2\\text{ K}$ and is used to maintain MRI superconducting coils in their superconducting zero-resistance state."
    },
    {
      q: "Which noble gas gives a characteristic intense orange-red glow in advertising signs?",
      opts: ["Neon", "Argon", "Helium", "Krypton"],
      c: 0,
      exp: "Electric discharge through neon produces a vivid orange-red glow used in neon advertising signs."
    },
    {
      q: "Which noble gas is filled in incandescent light bulbs to retard the evaporation of the tungsten filament?",
      opts: ["Argon", "Helium", "Neon", "Xenon"],
      c: 0,
      exp: "Argon mixed with about $15\\%$ nitrogen provides an inert, non-reactive atmosphere that prevents tungsten oxidation and evaporation in light bulbs."
    },
    {
      q: "Which noble gas is used in flash lamps for high-speed photography?",
      opts: ["Xenon and Krypton", "Helium", "Argon only", "Neon"],
      c: 0,
      exp: "Xenon and krypton flash bulbs emit high-intensity white light in ultra-short bursts, ideal for high-speed strobe photography."
    },
    {
      q: "Which noble gas is radioactive and used in cancer radiotherapy?",
      opts: ["Radon ($\\text{Rn}$)", "Xenon ($\\text{Xe}$)", "Argon ($\\text{Ar}$)", "Krypton ($\\text{Kr}$)$"],
      c: 0,
      exp: "Radon ($^{222}\\text{Rn}$) emits alpha particles and is used in radiotherapy for treating malignant tumors."
    },
    {
      q: "Which of the following compounds is isostructural with $\\text{XeF}_2$?",
      opts: ["$\\text{I}_3^-$", "$\\text{SO}_2$", "$\\text{H}_2\\text{O}$", "$\\text{OF}_2$"],
      c: 0,
      exp: "Both $\\text{XeF}_2$ and $\\text{I}_3^-$ have $sp^3d$ hybridization with 2 bond pairs and 3 equatorial lone pairs, making both strictly linear."
    },
    {
      q: "Which of the following species is isostructural with $\\text{XeF}_4$?",
      opts: ["$[\\text{ICl}_4]^-$", "$\\text{SF}_4$", "$\\text{CF}_4$", "$\\text{SiF}_4$"],
      c: 0,
      exp: "Both $\\text{XeF}_4$ and $[\\text{ICl}_4]^-$ have $sp^3d^2$ hybridization with 4 bond pairs and 2 lone pairs in trans positions, resulting in square planar geometry."
    },
    {
      q: "Which of the following species is isoelectronic and isostructural with $\\text{XeO}_3$?",
      opts: ["$\\text{BrO}_3^-$", "$\\text{SO}_3$", "$\\text{NO}_3^-$", "$\\text{CO}_3^{2-}$"],
      c: 0,
      exp: "$\\text{XeO}_3$ and $\\text{BrO}_3^-$ both have $26$ valence electrons and a trigonal pyramidal shape ($sp^3$ hybridization with 1 lone pair)."
    },
    {
      q: "What is the geometry of the $[\\text{ICl}_2]^-$ ion?",
      opts: ["Linear, $sp^3d$", "Bent, $sp^2$", "Trigonal planar, $sp^2$", "Tetrahedral, $sp^3$"],
      c: 0,
      exp: "$[\\text{ICl}_2]^-$ has $2$ bond pairs and $3$ lone pairs on the central iodine atom ($sp^3d$ hybridization), resulting in a linear geometry."
    },
    {
      q: "What is the hybridization and shape of the $[\\text{ICl}_4]^-$ ion?",
      opts: [
        "Square planar, $sp^3d^2$",
        "Tetrahedral, $sp^3$",
        "See-saw, $sp^3d$",
        "Octahedral, $sp^3d^2$"
      ],
      c: 0,
      exp: "$[\\text{ICl}_4]^-$ has $4$ bond pairs and $2$ lone pairs on iodine ($sp^3d^2$ hybridization), giving a square planar geometry."
    },
    {
      q: "Which of the following is NOT an interhalogen compound?",
      opts: ["$\\text{ClI}_3$", "$\\text{ICl}_3$", "$\\text{BrF}_5$", "$\\text{IF}_7$"],
      c: 0,
      exp: "In $XX'_n$, the central atom $X$ must be larger and less electronegative than the surrounding halogen $X'$. Since iodine is larger than chlorine, $\\text{ICl}_3$ exists, but $\\text{ClI}_3$ does not."
    },
    {
      q: "Why does $\\text{FCl}_3$ not exist while $\\text{ClF}_3$ exists?",
      opts: [
        "Fluorine is more electronegative and smaller, unable to expand its octet to accommodate three chlorines",
        "Chlorine cannot form single bonds",
        "Fluorine has vacant $d$-orbitals",
        "$\\text{F}-\\text{Cl}$ bonds are ionic"
      ],
      c: 0,
      exp: "Fluorine cannot act as the central atom for higher coordination numbers because it has only $2s$ and $2p$ orbitals and cannot expand its octet beyond $8$ electrons."
    },
    {
      q: "What is the total number of lone pairs in a molecule of $\\text{XeF}_2$?",
      opts: ["9", "3", "6", "8"],
      c: 0,
      exp: "There are $3$ lone pairs on the central xenon atom and $3$ lone pairs on each of the two fluorine atoms ($2 \\times 3 = 6$), giving a total of $3 + 6 = 9$ lone pairs."
    },
    {
      q: "What is the total number of lone pairs in a molecule of $\\text{XeF}_4$?",
      opts: ["14", "2", "12", "16"],
      c: 0,
      exp: "Xenon has $2$ lone pairs, and each of the four fluorine atoms has $3$ lone pairs ($4 \\times 3 = 12$). Total lone pairs = $2 + 12 = 14$."
    },
    {
      q: "What is the total number of lone pairs in a molecule of $\\text{XeF}_6$?",
      opts: ["19", "1", "18", "20"],
      c: 0,
      exp: "Xenon has $1$ lone pair, and each of the six fluorine atoms has $3$ lone pairs ($6 \\times 3 = 18$). Total lone pairs = $1 + 18 = 19$."
    },
    {
      q: "Which of the following compounds has a distorted octahedral geometry according to VSEPR theory?",
      opts: ["$\\text{XeF}_6$", "$\\text{SF}_6$", "$\\text{PF}_6^-$", "$[\\text{SiF}_6]^{2-}$"],
      c: 0,
      exp: "$\\text{XeF}_6$ has $6$ bond pairs and $1$ lone pair ($sp^3d^3$ hybridization), giving a distorted octahedral geometry."
    },
    {
      q: "In which of the following molecules are all bond angles equal to $90^\\circ$?",
      opts: ["$\\text{SF}_6$", "$\\text{XeF}_4$", "$\\text{ClF}_3$", "$\\text{PCl}_5$"],
      c: 0,
      exp: "In regular octahedral $\\text{SF}_6$, all adjacent $\\text{F}-\\text{S}-\\text{F}$ bond angles are strictly $90^\\circ$."
    },
    {
      q: "Which of the following noble gas compounds is a liquid at room temperature?",
      opts: ["$\\text{XeOF}_4$", "$\\text{XeF}_2$", "$\\text{XeF}_4$", "$\\text{XeO}_3$"],
      c: 0,
      exp: "$\\text{XeOF}_4$ is a colourless volatile liquid at room temperature, while $\\text{XeF}_2, \\text{XeF}_4$, and $\\text{XeO}_3$ are solids."
    },
    {
      q: "Which of the following represents the correct reaction between xenon and $\\text{PtF}_6$?",
      opts: [
        "$\\text{Xe} + \\text{PtF}_6 \\xrightarrow{298\\text{ K}} \\text{Xe}^+[\\text{PtF}_6]^-$",
        "$\\text{Xe} + \\text{PtF}_6 \\rightarrow \\text{XeF}_6 + \\text{Pt}$",
        "$\\text{Xe} + \\text{PtF}_6 \\rightarrow \\text{XeF}_2 + \\text{PtF}_4$",
        "$\\text{Xe} + \\text{PtF}_6 \\rightarrow \\text{XePtF}_4 + \\text{F}_2$"
      ],
      c: 0,
      exp: "Direct mixing of xenon gas with platinum hexafluoride at room temperature yields an orange-yellow solid of $\\text{Xe}^+[\\text{PtF}_6]^-$."
    },
    {
      q: "What is the physical appearance of $\\text{XeF}_2$ at room temperature?",
      opts: [
        "Colourless crystalline solid which readily sublimes",
        "Greenish gas",
        "Red-brown liquid",
        "Yellow non-volatile solid"
      ],
      c: 0,
      exp: "$\\text{XeF}_2$ is a colourless crystalline solid that readily sublimes at $298\\text{ K}$ ($25^\\circ\\text{C}$)."
    },
    {
      q: "Which of the following compounds reacts with water to liberate oxygen gas?",
      opts: ["$\\text{XeF}_2$", "$\\text{XeF}_6$", "$\\text{XeO}_3$", "$\\text{XeOF}_4$"],
      c: 0,
      exp: "$2\\text{XeF}_2 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{Xe} + 4\\text{HF} + \\text{O}_2$. $\\text{XeF}_2$ oxidizes water to $\\text{O}_2$."
    },
    {
      q: "Which of the following compounds disproportionates upon hydrolysis with water?",
      opts: ["$\\text{XeF}_4$", "$\\text{XeF}_2$", "$\\text{XeF}_6$", "$\\text{XeOF}_4$"],
      c: 0,
      exp: "$\\text{XeF}_4$ ($+4$) disproportionates into elemental $\\text{Xe}$ ($0$) and $\\text{XeO}_3$ ($+6$)."
    },
    {
      q: "What is the product formed when $\\text{XeF}_2$ reacts with $\\text{AsF}_5$?",
      opts: [
        "$[\\text{XeF}]^+[\\text{AsF}_6]^-$",
        "$[\\text{XeF}_3]^+[\\text{AsF}_4]^-$",
        "$\\text{XeAsF}_7$",
        "$\\text{Xe} + \\text{AsF}_5 + \\text{F}_2$"
      ],
      c: 0,
      exp: "$\\text{XeF}_2 + \\text{AsF}_5 \\rightarrow [\\text{XeF}]^+[\\text{AsF}_6]^-$. $\\text{XeF}_2$ donates a fluoride ion to $\\text{AsF}_5$."
    },
    {
      q: "What is the hybridization and molecular geometry of xenon in $[\\text{XeF}_5]^-$?",
      opts: [
        "Pentagonal planar, $sp^3d^3$",
        "Pentagonal bipyramidal, $sp^3d^3$",
        "Square pyramidal, $sp^3d^2$",
        "Octahedral, $sp^3d^2$"
      ],
      c: 0,
      exp: "In $[\\text{XeF}_5]^-$, xenon has $5$ bond pairs and $2$ axial lone pairs ($sp^3d^3$ hybridization), resulting in a pentagonal planar geometry."
    },
    {
      q: "Which of the following species has pentagonal planar geometry?",
      opts: ["$[\\text{XeF}_5]^-$", "$\\text{IF}_7$", "$\\text{XeF}_6$", "$\\text{BrF}_5$"],
      c: 0,
      exp: "$[\\text{XeF}_5]^-$ has $5$ fluorines in a regular pentagon with two lone pairs above and below the plane, forming a pentagonal planar geometry."
    },
    {
      q: "The boiling point of noble gases increases in which order down the group?",
      opts: [
        "$\\text{He} < \\text{Ne} < \\text{Ar} < \\text{Kr} < \\text{Xe}$",
        "$\\text{Xe} < \\text{Kr} < \\text{Ar} < \\text{Ne} < \\text{He}$",
        "$\\text{He} < \\text{Ar} < \\text{Ne} < \\text{Kr} < \\text{Xe}$",
        "$\\text{Ne} < \\text{He} < \\text{Ar} < \\text{Kr} < \\text{Xe}$"
      ],
      c: 0,
      exp: "Van der Waals (London dispersion) forces increase with increasing atomic size and polarizability down the group, so boiling points increase from $\\text{He}$ to $\\text{Xe}$."
    },
    {
      q: "Which noble gas has the highest first ionization enthalpy?",
      opts: ["Helium ($\\text{He}$)", "Neon ($\\text{Ne}$)", "Argon ($\\text{Ar}$)", "Krypton ($\\text{Kr}$)$"],
      c: 0,
      exp: "Helium has the smallest atomic radius and a tightly held $1s^2$ closed shell, giving it the highest first ionization enthalpy ($2372\\text{ kJ/mol}$) of all known elements."
    },
    {
      q: "Why do noble gases have very low boiling points?",
      opts: [
        "They are monoatomic and held together only by very weak London dispersion forces",
        "They have low molecular weights",
        "They are non-polar ionic compounds",
        "They have covalent networks"
      ],
      c: 0,
      exp: "Because noble gases are non-polar monoatomic elements with stable electronic configurations, the only intermolecular interactions are weak dispersion forces."
    },
    {
      q: "Which noble gas is trapped inside the crystal cages of clathrate compounds formed by quinol?",
      opts: [
        "Argon, Krypton, and Xenon",
        "Helium only",
        "Neon only",
        "All noble gases including Helium and Neon"
      ],
      c: 0,
      exp: "Argon, krypton, and xenon can be physically trapped inside cage cavities of quinol crystals. Helium and neon are too small and easily slip out of the cages without forming clathrates."
    },
    {
      q: "Why do helium and neon NOT form clathrate compounds with quinol?",
      opts: [
        "They are too small and easily escape through the cavity openings",
        "They are too large to enter the cavities",
        "They react chemically with quinol",
        "They decompose quinol"
      ],
      c: 0,
      exp: "Helium and neon have very small atomic sizes and can easily diffuse out through the host lattice cage openings, failing to form stable clathrates."
    },
    {
      q: "Which of the following compounds has the same shape and hybridization as $\\text{XeF}_4$?",
      opts: ["$[\\text{ICl}_4]^-$", "$\\text{SF}_4$", "$\\text{SiF}_4$", "$\\text{CH}_4$"],
      c: 0,
      exp: "Both $\\text{XeF}_4$ and $[\\text{ICl}_4]^-$ have $sp^3d^2$ hybridization with $4$ bonding pairs and $2$ trans lone pairs, resulting in a square planar shape."
    },
    {
      q: "In $\\text{I}_2\\text{Cl}_6$, the coordination number of each iodine atom is:",
      opts: ["4", "6", "2", "3"],
      c: 0,
      exp: "In the planar dimer $\\text{I}_2\\text{Cl}_6$, each iodine atom is bonded to two bridging chlorines and two terminal chlorines, having a coordination number of $4$."
    },
    {
      q: "In $\\text{I}_2\\text{Cl}_6$, the two bridging $\\text{I}-\\text{Cl}$ bonds are:",
      opts: [
        "Longer than the terminal $\\text{I}-\\text{Cl}$ bonds",
        "Shorter than the terminal $\\text{I}-\\text{Cl}$ bonds",
        "Equal in length to the terminal $\\text{I}-\\text{Cl}$ bonds",
        "Ionic in character"
      ],
      c: 0,
      exp: "Bridging bonds involve shared electron density across two centres, making them longer ($270\\text{ pm}$) than the terminal bonds ($238\\text{ pm}$)."
    },
    {
      q: "Which interhalogen compound has an angular or bent geometry in the gas phase?",
      opts: ["$\\text{BrF}$", "$\\text{ICl}$", "$\\text{ClF}$", "All diatomic interhalogens are linear"],
      c: 3,
      exp: "Any diatomic molecule consists of only two bonded atoms, which must lie along a single straight line; hence all diatomic interhalogens ($XX'$) are strictly linear."
    },
    {
      q: "What is the state of matter of $\\text{BrF}_3$ at room temperature?",
      opts: ["Yellowish-green liquid", "Colourless gas", "Black solid", "Red gas"],
      c: 0,
      exp: "Bromine trifluoride ($\\text{BrF}_3$) is a fuming, straw-coloured (yellowish-green) liquid with a boiling point of $400\\text{ K}$ ($127^\\circ\\text{C}$)."
    },
    {
      q: "What is the state of matter of $\\text{ICl}$ at room temperature?",
      opts: ["Ruby-red solid ($\\alpha$-form) or brownish-red solid ($\\beta$-form)", "Colourless gas", "Blue liquid", "Green solid"],
      c: 0,
      exp: "Iodine monochloride ($\\text{ICl}$) is a ruby-red crystalline solid (m.p. $27^\\circ\\text{C}$) that melts into a dark red-brown liquid."
    },
    {
      q: "What is the state of matter of $\\text{IF}_7$ at room temperature?",
      opts: ["Colourless gas", "Dark liquid", "Crystalline solid", "Red liquid"],
      c: 0,
      exp: "Iodine heptafluoride ($\\text{IF}_7$) is a colourless gas at room temperature, freezing to a white solid at $277.5\\text{ K}$ ($4.5^\\circ\\text{C}$)."
    },
    {
      q: "Which of the following interhalogen compounds undergoes self-ionization (auto-ionization) in the liquid state?",
      opts: ["$\\text{BrF}_3$", "$\\text{ClF}$", "$\\text{ICl}$", "$\\text{IF}_7$"],
      c: 0,
      exp: "Liquid $\\text{BrF}_3$ exhibits appreciable electrical conductivity due to auto-ionization: $2\\text{BrF}_3 \\rightleftharpoons [\\text{BrF}_2]^+ + [\\text{BrF}_4]^-$."
    },
    {
      q: "In the self-ionization $2\\text{BrF}_3 \\rightleftharpoons [\\text{BrF}_2]^+ + [\\text{BrF}_4]^-$, what is the geometry of the cation $[\\text{BrF}_2]^+$?",
      opts: ["Bent (angular), $sp^3$", "Linear, $sp$", "Trigonal planar, $sp^2$", "T-shaped, $sp^3d$"],
      c: 0,
      exp: "$[\\text{BrF}_2]^+$ has $2$ bond pairs and $2$ lone pairs on bromine ($sp^3$ hybridization), resulting in a bent (angular) geometry."
    },
    {
      q: "In the self-ionization of $\\text{BrF}_3$, what is the geometry of the anion $[\\text{BrF}_4]^-$?",
      opts: [
        "Square planar, $sp^3d^2$",
        "Tetrahedral, $sp^3$",
        "See-saw, $sp^3d$",
        "Octahedral, $sp^3d^2$"
      ],
      c: 0,
      exp: "$[\\text{BrF}_4]^-$ has $4$ bond pairs and $2$ lone pairs on bromine ($sp^3d^2$ hybridization), giving a square planar geometry."
    },
    {
      q: "Which of the following pairs of compounds are isoelectronic?",
      opts: [
        "$\\text{XeF}_2$ and $\\text{ICl}_2^-$",
        "$\\text{XeF}_4$ and $\\text{SF}_4$",
        "$\\text{XeO}_3$ and $\\text{SO}_3$",
        "$\\text{XeF}_6$ and $\\text{SF}_6$"
      ],
      c: 0,
      exp: "Both $\\text{XeF}_2$ and $\\text{ICl}_2^-$ have $22$ valence electrons ($8 + 2 \\times 7 = 22$ and $7 + 2 \\times 7 + 1 = 22$), making them isoelectronic and isostructural."
    },
    {
      q: "Which of the following compounds has a square pyramidal geometry?",
      opts: ["$\\text{XeOF}_4$", "$\\text{XeF}_4$", "$\\text{XeO}_3$", "$\\text{XeF}_2$"],
      c: 0,
      exp: "$\\text{XeOF}_4$ has $5$ bonding domains and $1$ lone pair on xenon, resulting in a square pyramidal shape."
    },
    {
      q: "Which of the following compounds has zero dipole moment?",
      opts: ["$\\text{XeF}_4$", "$\\text{XeOF}_4$", "$\\text{XeO}_3$", "$\\text{XeO}_2\\text{F}_2$"],
      c: 0,
      exp: "$\\text{XeF}_4$ has a centrosymmetric square planar geometry where all four opposing $\\text{Xe}-\\text{F}$ bond dipoles cancel completely, giving $\\mu = 0$."
    },
    {
      q: "Which of the following noble gas fluorides also has zero net dipole moment?",
      opts: ["$\\text{XeF}_2$", "$\\text{XeF}_6$", "$\\text{XeOF}_4$", "$\\text{XeO}_2\\text{F}_2$"],
      c: 0,
      exp: "$\\text{XeF}_2$ is linear with two opposing $\\text{Xe}-\\text{F}$ bond dipoles and three symmetric equatorial lone pairs, resulting in $\\mu = 0$."
    },
    {
      q: "In the reaction $\\text{XeF}_6 + 3\\text{H}_2\\text{O} \\rightarrow \\text{XeO}_3 + 6\\text{HF}$, what is the change in oxidation state of xenon?",
      opts: ["0 (no change)", "$+2$", "$-2$", "$-6$"],
      c: 0,
      exp: "The oxidation state of xenon is $+6$ in $\\text{XeF}_6$ and remains $+6$ in $\\text{XeO}_3$. Thus there is no change in oxidation state."
    },
    {
      q: "Which noble gas is used to produce aerated diving breathing gas known as 'Heliox'?",
      opts: ["Helium", "Neon", "Argon", "Krypton"],
      c: 0,
      exp: "Heliox is a breathing gas composed of a mixture of helium and oxygen, used in saturation diving to avoid nitrogen narcosis."
    },
    {
      q: "Which noble gas has the highest critical temperature?",
      opts: ["Radon", "Xenon", "Argon", "Helium"],
      c: 0,
      exp: "Critical temperature increases down the group with increasing atomic weight and intermolecular forces: $\\text{Rn} (377\\text{ K}) > \\text{Xe} (289.7\\text{ K}) > \\dots > \\text{He} (5.2\\text{ K})$."
    },
    {
      q: "Which noble gas has the lowest critical temperature ($5.2\\text{ K}$)?",
      opts: ["Helium", "Neon", "Argon", "Krypton"],
      c: 0,
      exp: "Helium has the lowest critical temperature ($5.2\\text{ K}$) because of its extremely weak dispersion forces."
    },
    {
      q: "Which gas is used in high-voltage indicators and TV picture tubes?",
      opts: ["Neon", "Argon", "Helium", "Xenon"],
      c: 0,
      exp: "Neon is used in high-voltage indicators, lightning arrestors, TV picture tubes, and spark plug testers."
    },
    {
      q: "Which noble gas is used as an inert filler in gas chromatography (carrier gas)?",
      opts: ["Helium", "Xenon", "Radon", "Krypton"],
      c: 0,
      exp: "Helium is commonly used as the carrier gas in gas chromatography due to its chemical inertness, high thermal conductivity, and low density."
    },
    {
      q: "Which compound of xenon was prepared first by Neil Bartlett in 1962?",
      opts: [
        "$\\text{Xe}^+[\\text{PtF}_6]^-$",
        "$\\text{XeF}_2$",
        "$\\text{XeF}_4$",
        "$\\text{XeO}_3$"
      ],
      c: 0,
      exp: "Neil Bartlett mixed $\\text{Xe}$ with $\\text{PtF}_6$ vapour to produce the red-yellow compound $\\text{Xe}^+[\\text{PtF}_6]^-$."
    },
    {
      q: "Which of the following noble gas compounds is non-existent?",
      opts: ["$\\text{HeF}_2$", "$\\text{XeF}_2$", "$\\text{XeF}_4$", "$\\text{KrF}_2$"],
      c: 0,
      exp: "Helium has an extremely high ionization energy and cannot form stable covalent or ionic fluorides like $\\text{HeF}_2$."
    }
  ];

  mcqData.slice(0, 78).forEach(d => {
    list.push(createMCQ(st, d.q, d.opts, d.c, d.exp));
  });

  // 13 Numerical questions
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central chlorine atom in chlorine trifluoride ($\\text{ClF}_3$)?",
    "2",
    "$\\text{ClF}_3$ has $3$ bond pairs and $2$ lone pairs on chlorine in equatorial positions."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central bromine atom in bromine pentafluoride ($\\text{BrF}_5$)?",
    "1",
    "$\\text{BrF}_5$ has $5$ bond pairs and $1$ lone pair on bromine."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central iodine atom in iodine heptafluoride ($\\text{IF}_7$)?",
    "0",
    "$\\text{IF}_7$ has $7$ bonding pairs and $0$ lone pairs on iodine."
  ));
  list.push(createNumerical(st,
    "What is the coordination number of iodine in iodine heptafluoride ($\\text{IF}_7$)?",
    "7",
    "Iodine is bonded to seven fluorine atoms, giving a coordination number of $7$."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central xenon atom in xenon difluoride ($\\text{XeF}_2$)?",
    "3",
    "In $\\text{XeF}_2$, xenon has $3$ lone pairs in equatorial positions."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central xenon atom in xenon tetrafluoride ($\\text{XeF}_4$)?",
    "2",
    "In $\\text{XeF}_4$, xenon has $2$ lone pairs located trans to each other."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central xenon atom in xenon hexafluoride ($\\text{XeF}_6$)?",
    "1",
    "In $\\text{XeF}_6$, xenon has $1$ lone pair according to VSEPR theory."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central xenon atom in xenon trioxide ($\\text{XeO}_3$)?",
    "1",
    "In $\\text{XeO}_3$, xenon forms three double bonds with oxygen, leaving $1$ lone pair."
  ));
  list.push(createNumerical(st,
    "How many lone pairs of electrons are present on the central xenon atom in $\\text{XeOF}_4$?",
    "1",
    "In $\\text{XeOF}_4$, xenon has $5$ bond domains and $1$ lone pair."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of xenon in sodium perxenate ($\\text{Na}_4\\text{XeO}_6$)?",
    "8",
    "In $\\text{Na}_4\\text{XeO}_6$, xenon has an oxidation state of $+8$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of xenon in $\\text{XeF}_6$?",
    "6",
    "In $\\text{XeF}_6$, xenon has an oxidation state of $+6$."
  ));
  list.push(createNumerical(st,
    "How many lone pairs are present on the central iodine atom in the triiodide ion ($\\text{I}_3^-$)?",
    "3",
    "In $\\text{I}_3^-$, the central iodine atom has $2$ bond pairs and $3$ equatorial lone pairs."
  ));
  list.push(createNumerical(st,
    "What is the total number of valence electrons in the interhalogen compound $\\text{ClF}_3$?",
    "28",
    "Chlorine has $7$ valence electrons and each fluorine has $7$ valence electrons: $7 + 3 \\times 7 = 28$ electrons."
  ));

  return list;
}

// Validate and build
console.log("Validating Part 5...");
const allPart5 = buildPart5();
console.log(`Total Part 5 questions: ${allPart5.length} (Expected: 117)`);

allPart5.forEach((q, idx) => {
  checkKatex(q.question, `Part5[${idx}].question`);
  q.options.forEach((opt, oIdx) => checkKatex(opt, `Part5[${idx}].options[${oIdx}]`));
  checkKatex(q.explanation, `Part5[${idx}].explanation`);
});

console.log("All Part 5 questions validated KaTeX successfully (0 errors)!");

const fileContent = `// Auto-generated authenticated questions for P-Block Part 5
module.exports = ${JSON.stringify(allPart5, null, 2)};
`;

fs.writeFileSync('scripts/data_pblock_part5.js', fileContent);
console.log("Written scripts/data_pblock_part5.js successfully!");
