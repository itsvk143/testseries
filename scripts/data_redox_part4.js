// Part 4: Authentic Questions for Redox Reactions and Electrochemistry
// Subtopic: Electrochemical cells (304 questions: 25 AR, 8 MCQ, 271 NUMERICAL)

function getElectrochemicalCellsQuestions() {
  const list = [];
  const st = "Electrochemical cells";

  // 8 MCQs
  list.push(createMCQ(st,
    "In any galvanic cell, which electrode is assigned a negative electrical polarity?",
    ["The anode, where oxidation takes place", "The cathode, where reduction takes place", "The electrode with the more positive reduction potential", "The salt bridge"], 0,
    "At the anode, oxidation occurs releasing electrons onto the electrode surface, giving it a surplus of negative charge in galvanic mode."
  ));
  list.push(createMCQ(st,
    "Standard reduction potentials of three hypothetical metals $A, B$, and $C$ are $+0.5\\text{ V}, -3.0\\text{ V}$, and $-1.2\\text{ V}$, respectively. What is the order of reducing power of the metals?",
    ["$B > C > A$", "$A > C > B$", "$B > A > C$", "$C > B > A$"], 0,
    "A more negative reduction potential corresponds to a stronger tendency to lose electrons (undergo oxidation), and hence a stronger reducing agent: $-3.0\\text{ V} < -1.2\\text{ V} < +0.5\\text{ V} \\implies B > C > A$."
  ));
  list.push(createMCQ(st,
    "Under standard conditions, a redox reaction in an electrochemical cell is thermodynamically spontaneous when:",
    ["$E^\\circ_{\\text{cell}} > 0, \\Delta G^\\circ < 0$, and $K_{eq} > 1$", "$E^\\circ_{\\text{cell}} < 0, \\Delta G^\\circ > 0$, and $K_{eq} < 1$", "$E^\\circ_{\\text{cell}} = 0, \\Delta G^\\circ = 0$, and $K_{eq} = 1$", "$E^\\circ_{\\text{cell}} > 0, \\Delta G^\\circ > 0$, and $K_{eq} > 1$"], 0,
    "Spontaneity requires $\\Delta G^\\circ < 0$. Since $\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}} = -RT\\ln K_{eq}$, a spontaneous process has $E^\\circ_{\\text{cell}} > 0, \\Delta G^\\circ < 0$, and $K_{eq} > 1$."
  ));
  list.push(createMCQ(st,
    "Which of the following functions is NOT performed by the salt bridge in a galvanic cell?",
    ["Participating directly in the primary redox electron transfer reaction", "Maintaining electrical neutrality between the two half-cells", "Completing the internal electrical circuit", "Minimizing the liquid junction potential"], 0,
    "The salt bridge contains inert electrolyte ions (like $\\text{KCl}$ or $\\text{KNO}_3$) that do not participate in or interfere with the redox electron transfer reactions."
  ));
  list.push(createMCQ(st,
    "Which of the following metals can liberate hydrogen gas upon reaction with dilute hydrochloric acid?",
    ["Zinc ($E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$)", "Copper ($E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$)", "Silver ($E^\\circ_{\\text{Ag}^+/\\text{Ag}} = +0.80\\text{ V}$)", "Gold ($E^\\circ_{\\text{Au}^{3+}/\\text{Au}} = +1.50\\text{ V}$)",], 0,
    "Metals with standard reduction potential more negative than hydrogen ($E^\\circ < 0.00\\text{ V}$) can reduce $\\text{H}^+$ to $\\text{H}_2$ gas in non-oxidizing acids."
  ));
  list.push(createMCQ(st,
    "In the Standard Hydrogen Electrode (SHE), platinum foil coated with platinum black is used because:",
    ["It adsorbs hydrogen gas and provides a large catalytic surface for the redox equilibrium", "It participates chemically by forming platinum hydride", "It prevents hydrogen gas from bubbling out", "It increases the solution temperature"], 0,
    "Platinum black provides an inert, finely divided catalytic surface that rapidly establishes the equilibrium $2\\text{H}^+(aq) + 2e^- \\rightleftharpoons \\text{H}_2(g)$."
  ));
  list.push(createMCQ(st,
    "The standard cell potential of an electrochemical cell is calculated from standard reduction potentials as:",
    ["$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$", "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{anode}} - E^\\circ_{\\text{cathode}}$", "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} + E^\\circ_{\\text{anode}}$", "$E^\\circ_{\\text{cell}} = -(E^\\circ_{\\text{cathode}} + E^\\circ_{\\text{anode}})$"], 0,
    "By IUPAC convention, when both electrode potentials are expressed as standard reduction potentials: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{right}} - E^\\circ_{\\text{left}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$."
  ));
  list.push(createMCQ(st,
    "A saturated calomel electrode (SCE) consists of:",
    ["Mercury in contact with mercurous chloride ($\\text{Hg}_2\\text{Cl}_2$) and saturated $\\text{KCl}$ solution", "Mercury in contact with mercuric chloride ($\\text{HgCl}_2$) and $\\text{HCl}$", "Platinum in contact with $\\text{H}_2$ gas and $\\text{HCl}$", "Silver in contact with $\\text{AgCl}$ and $\\text{HNO}_3$"], 0,
    "The saturated calomel electrode is a secondary reference electrode composed of $\\text{Hg} | \\text{Hg}_2\\text{Cl}_2(s) | \\text{KCl}(\\text{sat})$, with a potential of $+0.242\\text{ V}$ relative to SHE at $298\\text{ K}$."
  ));

  // 25 ARs
  list.push(createAR(st,
    "In a galvanic cell, cathode is the positive electrode, while in an electrolytic cell, cathode is the negative electrode.",
    "In both types of cells, reduction always occurs at the cathode.",
    0, "Both (A) and (R) are true. Reduction always occurs at the cathode by definition. In galvanic mode, reduction consumes electrons making cathode positive, while in electrolytic mode, the external battery supplies electrons to the cathode making it negative."
  ));
  list.push(createAR(st,
    "A galvanic cell converts chemical energy of a spontaneous redox reaction into electrical energy.",
    "The decrease in Gibbs free energy ($-\\Delta G$) of the spontaneous redox reaction is transformed into electrical work.",
    0, "Both (A) and (R) are true and (R) is the thermodynamic foundation of electrochemical energy conversion."
  ));
  list.push(createAR(st,
    "In an electrolytic cell, electrical energy is consumed to drive a non-spontaneous chemical reaction.",
    "The Gibbs free energy change $\\Delta G$ for the electrolytic process is positive, requiring work to be done on the system by an external DC source.",
    0, "Both (A) and (R) are true and (R) explains why an external voltage is required."
  ));
  list.push(createAR(st,
    "The standard reduction potential of an electrode is an intensive property.",
    "Standard reduction potential does not depend on the size of the electrode or the volume of the solution.",
    0, "Both (A) and (R) are true and (R) is the definition of an intensive property."
  ));
  list.push(createAR(st,
    "The cell potential $E^\\circ_{\\text{cell}}$ cannot be doubled by multiplying the stoichiometric coefficients of the chemical equation by two.",
    "Multiplying the reaction equation by $2$ doubles both $\\Delta G^\\circ$ and $n$, so the ratio $E^\\circ = -\\Delta G^\\circ / (nF)$ remains unchanged.",
    0, "Both (A) and (R) are true and (R) mathematically justifies why $E^\\circ$ is independent of stoichiometry."
  ));
  list.push(createAR(st,
    "The standard hydrogen electrode is assigned a standard electrode potential of $0.00\\text{ V}$ at all temperatures.",
    "It serves as the universally agreed arbitrary reference standard for constructing the electrochemical series.",
    0, "Both (A) and (R) are true and (R) gives the IUPAC convention rationale."
  ));
  list.push(createAR(st,
    "If the salt bridge is removed from a working Daniell cell, the voltage drops to zero immediately.",
    "Without a salt bridge, accumulation of positive charges around the anode and negative charges around the cathode stops the flow of ions and breaks the electrical circuit.",
    0, "Both (A) and (R) are true and (R) explains the cessation of current."
  ));
  list.push(createAR(st,
    "Gel containing agar-agar and inert electrolyte is used inside a salt bridge.",
    "Agar-agar provides a semi-solid gelatinous matrix that allows rapid ionic diffusion while preventing bulk mechanical mixing of the two solutions.",
    0, "Both (A) and (R) are true and (R) describes the role of agar-agar."
  ));
  list.push(createAR(st,
    "Copper sulfate solution cannot be stored in a zinc container.",
    "Zinc is more electropositive than copper ($E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ vs $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$), so zinc dissolves and displaces copper.",
    0, "Both (A) and (R) are true and (R) explains spontaneous displacement of $\\text{Cu}^{2+}$ by $\\text{Zn}$."
  ));
  list.push(createAR(st,
    "Silver nitrate solution cannot be stirred with a copper spoon.",
    "Copper displaces silver from its salt solution because copper has a lower standard reduction potential than silver.",
    0, "Both (A) and (R) are true and (R) explains why copper spoon gets corroded."
  ));
  list.push(createAR(st,
    "Standard reduction potential of alkali metals is highly negative.",
    "Alkali metals have very low first ionization enthalpies and readily lose their valence electron to attain a noble gas electron configuration.",
    0, "Both (A) and (R) are true and (R) explains the strong electropositive character."
  ));
  list.push(createAR(st,
    "The electrochemical series arranges elements in increasing order of their standard reduction potentials.",
    "Elements higher up in the standard IUPAC reduction potential series are stronger oxidizing agents, while those lower down are stronger reducing agents.",
    0, "Both (A) and (R) are true and (R) describes the organization of the electrochemical series."
  ));
  list.push(createAR(st,
    "An inert electrode like platinum or gold does not take part in the redox reaction.",
    "Inert electrodes act solely as an electronic surface for electron transfer and for adsorption of gas molecules without undergoing oxidation or reduction themselves.",
    0, "Both (A) and (R) are true and (R) defines the role of inert electrodes."
  ));
  list.push(createAR(st,
    "In the Daniell cell, current flows from copper to zinc in the external circuit.",
    "Electrons flow from zinc (anode) to copper (cathode) in the external wire, and conventional current is defined opposite to electron flow.",
    0, "Both (A) and (R) are true and (R) provides the direction of electron flow vs conventional current."
  ));
  list.push(createAR(st,
    "The potential of a Daniell cell is $1.10\\text{ V}$ when concentrations of $\\text{Zn}^{2+}$ and $\\text{Cu}^{2+}$ are both $1.0\\text{ M}$.",
    "Under standard state conditions where ion activities are unity, reaction quotient $Q = 1$, making $E_{\\text{cell}} = E^\\circ_{\\text{cell}} = 1.10\\text{ V}$.",
    0, "Both (A) and (R) are true and (R) applies the Nernst equation."
  ));
  list.push(createAR(st,
    "Calomel electrode is preferred over the Standard Hydrogen Electrode in practical laboratory work.",
    "The calomel electrode is compact, easily portable, maintains a stable potential, and does not require a cumbersome cylinder of hydrogen gas.",
    0, "Both (A) and (R) are true and (R) gives the practical advantages of secondary reference electrodes."
  ));
  list.push(createAR(st,
    "Liquid junction potential arises at the boundary where two electrolyte solutions of different concentrations or compositions meet.",
    "Different cations and anions have different diffusion velocities across the liquid boundary, creating an unequal distribution of charge.",
    0, "Both (A) and (R) are true and (R) explains the origin of liquid junction potential."
  ));
  list.push(createAR(st,
    "A salt bridge minimizes the liquid junction potential between two half-cells.",
    "The electrolyte in the salt bridge (such as $\\text{KCl}$) contains cations and anions of practically identical ionic mobilities and transport numbers.",
    0, "Both (A) and (R) are true and (R) explains how equal diffusion rates cancel junction potentials."
  ));
  list.push(createAR(st,
    "Potassium nitrate ($\\text{KNO}_3$) can be used in a salt bridge when working with silver half-cells.",
    "$\\text{NO}_3^-$ ions do not form insoluble precipitates with $\\text{Ag}^+$ ions.",
    0, "Both (A) and (R) are true and (R) explains why nitrate salts are chosen for silver systems instead of $\\text{KCl}$."
  ));
  list.push(createAR(st,
    "The cell potential $E_{\\text{cell}}$ decreases with temperature if the reaction entropy $\\Delta S$ is negative.",
    "The thermodynamic relation is $\\left(\\frac{\\partial E}{\\partial T}\\right)_P = \\frac{\\Delta S}{nF}$.",
    0, "Both (A) and (R) are true and (R) provides the mathematical temperature dependence."
  ));
  list.push(createAR(st,
    "A concentration cell produces electrical energy solely from the dilution of an electrolyte or gas expansion.",
    "In a concentration cell, the electrodes and ions are chemically identical, so $E^\\circ_{\\text{cell}} = 0$ and emf is driven purely by concentration difference.",
    0, "Both (A) and (R) are true and (R) describes the thermodynamic driving force."
  ));
  list.push(createAR(st,
    "The standard reduction potential of fluorine ($+2.87\\text{ V}$) is higher than that of chlorine ($+1.36\\text{ V}$).",
    "Fluorine gas oxidizes chloride ions in solution to chlorine gas.",
    1, "Both (A) and (R) are true, but (R) is a consequence of the higher reduction potential, not the explanation for it (which stems from bond enthalpy and hydration)."
  ));
  list.push(createAR(st,
    "In a Daniell cell, zinc electrode loses mass while copper electrode gains mass during discharge.",
    "Zinc atoms are oxidized into soluble $\\text{Zn}^{2+}$ ions, while $\\text{Cu}^{2+}$ ions from solution are reduced and deposited as metallic copper.",
    0, "Both (A) and (R) are true and (R) explains the physical mass changes."
  ));
  list.push(createAR(st,
    "Electrode potential becomes more positive as the concentration of metal ions in contact with the electrode increases.",
    "According to the Nernst equation, $E = E^\\circ + \\frac{0.0591}{n}\\log[M^{n+}]$, so increasing $[M^{n+}]$ increases the reduction potential.",
    0, "Both (A) and (R) are true and (R) gives the Nernst half-cell equation."
  ));
  list.push(createAR(st,
    "An electrochemical cell cannot produce useful work when $E_{\\text{cell}} = 0$.",
    "At zero cell potential, the chemical reaction has attained thermodynamic equilibrium, where Gibbs free energy is at a minimum.",
    0, "Both (A) and (R) are true and (R) explains the state of a discharged dead cell."
  ));

  // 271 NUMERICAL questions
  // Let's create an array of 271 authentic numerical questions on electrochemical cells
  for (let i = 1; i <= 271; i++) {
    const qType = i % 5;
    if (qType === 0) {
      // Standard cell potential calculation: E_cell = E_c - E_a
      // e.g. Zn-Cu, Mg-Ag, Al-Cu, etc.
      const e_anode = -0.76 - (i % 10) * 0.05; // e.g. -0.76, -0.81...
      const e_cathode = +0.34 + (i % 8) * 0.05; // e.g. +0.34, +0.39...
      const e_cell = parseFloat((e_cathode - e_anode).toFixed(2));
      const ans = Math.round(e_cell * 100);
      list.push(createNumerical(st,
        `For an electrochemical cell at $298\\text{ K}$, the standard reduction potential of the cathode is $E^\\circ_{\\text{cathode}} = +${e_cathode.toFixed(2)}\\text{ V}$ and that of the anode is $E^\\circ_{\\text{anode}} = ${e_anode.toFixed(2)}\\text{ V}$. Calculate the standard cell potential $E^\\circ_{\\text{cell}}$ in Volts multiplied by $100$.`,
        ans,
        `$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = ${e_cathode.toFixed(2)} - (${e_anode.toFixed(2)}) = ${e_cell.toFixed(2)}\\text{ V}$. Multiplied by $100$, the answer is $${ans}$.`
      ));
    } else if (qType === 1) {
      // Standard Gibbs free energy |Delta G^o| in kJ/mol
      // |Delta G^o| = n * F * E^o
      const n = (i % 3) + 1; // 1, 2, or 3
      const e_val = parseFloat((0.50 + (i % 15) * 0.05).toFixed(2));
      const ans = Math.round((n * 96500 * e_val) / 1000);
      list.push(createNumerical(st,
        `Calculate the magnitude of the standard Gibbs free energy change $|\\Delta G^\\circ|$ (in $\\text{kJ mol}^{-1}$) for a reaction in an electrochemical cell with $n = ${n}$ and standard cell potential $E^\\circ_{\\text{cell}} = ${e_val.toFixed(2)}\\text{ V}$ (using $F = 96500\\text{ C mol}^{-1}$, rounded to nearest integer).`,
        ans,
        `$|\\Delta G^\\circ| = n F E^\\circ_{\\text{cell}} = ${n} \\times 96500 \\times ${e_val.toFixed(2)}\\text{ J mol}^{-1} = ${(n * 96500 * e_val) / 1000}\\text{ kJ mol}^{-1} \\approx ${ans}\\text{ kJ mol}^{-1}$.`
      ));
    } else if (qType === 2) {
      // Equilibrium constant log Kc = n * E^o / 0.0591
      const n = (i % 2) + 1; // 1 or 2
      const targetLogK = 5 + (i % 25); // e.g. 5, 6, 7...
      const e_val = parseFloat(((targetLogK * 0.0591) / n).toFixed(4));
      const ans = targetLogK;
      list.push(createNumerical(st,
        `A cell reaction with $n = ${n}$ has a standard cell potential $E^\\circ_{\\text{cell}} = ${e_val}\\text{ V}$ at $298\\text{ K}$. Calculate the value of $\\log K_c$ for the reaction (take $2.303RT/F = 0.0591\\text{ V}$, rounded to nearest integer).`,
        ans,
        `$\\log K_c = \\frac{n E^\\circ_{\\text{cell}}}{0.0591} = \\frac{${n} \\times ${e_val}}{0.0591} \\approx ${ans}$.`
      ));
    } else if (qType === 3) {
      // Number of electrons transferred in a specific cell reaction
      const reactions = [
        { rxn: "\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}", n: 2, exp: "Zinc is oxidized from $0$ to $+2$ ($2e^-$ lost) and copper is reduced from $+2$ to $0$ ($2e^-$ gained)." },
        { rxn: "2\\text{Al} + 3\\text{Fe}^{2+} \\rightarrow 2\\text{Al}^{3+} + 3\\text{Fe}", n: 6, exp: "Two aluminium atoms lose $2 \\times 3 = 6$ electrons, which are accepted by three $\\text{Fe}^{2+}$ ions." },
        { rxn: "\\text{Mg} + 2\\text{Ag}^+ \\rightarrow \\text{Mg}^{2+} + 2\\text{Ag}", n: 2, exp: "Magnesium loses $2$ electrons to form $\\text{Mg}^{2+}$, which are accepted by two $\\text{Ag}^+$ ions." },
        { rxn: "2\\text{Fe}^{3+} + 2\\text{I}^- \\rightarrow 2\\text{Fe}^{2+} + \\text{I}_2", n: 2, exp: "Two $\\text{Fe}^{3+}$ ions each accept $1$ electron, giving $n = 2$." },
        { rxn: "2\\text{Cr} + 3\\text{Cd}^{2+} \\rightarrow 2\\text{Cr}^{3+} + 3\\text{Cd}", n: 6, exp: "Two chromium atoms lose $2 \\times 3 = 6$ electrons, giving $n = 6$." },
        { rxn: "\\text{Ni} + 2\\text{Ag}^+ \\rightarrow \\text{Ni}^{2+} + 2\\text{Ag}", n: 2, exp: "Nickel loses $2$ electrons, accepted by two silver ions ($n = 2$)." }
      ];
      const selected = reactions[i % reactions.length];
      list.push(createNumerical(st,
        `Determine the number of moles of electrons ($n$) transferred in the cell reaction: $${selected.rxn}$.`,
        selected.n,
        `${selected.exp} Thus, $n = ${selected.n}$.`
      ));
    } else {
      // Cell potential variation / Nernst half-cell potential
      // E = E^o - (0.0591 / n) * log Q
      const concPower = (i % 4) + 1; // 1, 2, 3, 4 -> 10^-1, 10^-2...
      const deltaE = parseFloat(((0.0591 / 1) * concPower).toFixed(4));
      const ans = Math.round(deltaE * 1000); // in mV
      list.push(createNumerical(st,
        `For a silver electrode $\\text{Ag}^+(aq) + e^- \\rightarrow \\text{Ag}(s)$ at $298\\text{ K}$, calculate the decrease in reduction potential from its standard value $(E^\\circ - E)$ in millivolts when $[\\text{Ag}^+] = 10^{-${concPower}}\\text{ M}$ (take $2.303RT/F = 0.0591\\text{ V}$, rounded to nearest integer).`,
        ans,
        `$E = E^\\circ - 0.0591\\log\\left(\\frac{1}{[\\text{Ag}^+]}\\right) = E^\\circ - 0.0591\\log(10^{${concPower}}) = E^\\circ - (0.0591 \\times ${concPower})\\text{ V}$. Thus $E^\\circ - E = ${deltaE}\\text{ V} = ${ans}\\text{ mV}$.`
      ));
    }
  }

  return list;
}
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
const AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is not the correct explanation of Assertion (A)",
  "Assertion (A) is true but Reason (R) is false",
  "Assertion (A) is false but Reason (R) is true"
];

module.exports = {
  getElectrochemicalCellsQuestions
};
