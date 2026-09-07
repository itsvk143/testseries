// Classification of Elements and Periodicity in Properties - Part 1
// Subtopics:
// 1. Modern periodic law and periodic table blocks (s, p, d, f) (47 questions)
// 2. Atomic radius (47 questions)
// 3. Ionization enthalpy (47 questions)

function createQ(subTopic, question, options, correctIndex, explanation, difficulty = "Medium", questionType = "MCQ") {
  return {
    question,
    options,
    correctAnswer: options[correctIndex],
    correctOption: correctIndex,
    explanation,
    subject: "Chemistry",
    chapter: "Classification of Elements and Periodicity in Properties",
    subTopic,
    difficulty,
    questionType,
    type: questionType === "ASSERTION_REASON" ? "assertion-reason" : "multiple-choice",
    source: "JEE Main & NEET Chapter Bank",
    targetExams: ["JEE Main", "NEET"]
  };
}

function getModernPeriodicLawQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Modern periodic law and periodic table blocks (s, p, d, f)", text, opts, ans, exp, diff, type));

  add(
    "Henry Moseley established that the fundamental property of an element is its atomic number ($Z$) rather than atomic mass through X-ray spectra, using the relation:",
    ["$\\sqrt{\\nu} = a(Z - b)$", "$\\nu^2 = a(Z - b)$", "$\\nu = a(Z - b)^2$", "$\\sqrt{\\nu} = a(A - b)$"],
    0,
    "Moseley's law relates the frequency $\\nu$ of characteristic X-rays ($K_\\alpha$) to atomic number: $\\sqrt{\\nu} = a(Z - b)$, where $a$ and $b$ are constants.",
    "Easy"
  );
  add(
    "The Modern Periodic Law states that the physical and chemical properties of elements are periodic functions of their:",
    ["Atomic numbers ($Z$)", "Atomic masses ($A$)", "Neutron numbers ($N$)", "Mass-to-charge ratios"],
    0,
    "The modern periodic law states that properties of elements are periodic functions of their atomic numbers (nuclear charge / electron configuration).",
    "Easy"
  );
  add(
    "According to IUPAC nomenclature, what is the systematic name and symbol for the element with atomic number $Z = 114$?",
    ["Flerovium, Uuq (Ununquadium)", "Ununbium, Uub", "Ununtrium, Uut", "Ununpentium, Uup"],
    0,
    "For $Z = 114$: 1 = un, 1 = un, 4 = quad $\\implies$ Ununquadium (symbol: Uuq), officially named Flerovium (Fl).",
    "Easy"
  );
  add(
    "What is the IUPAC systematic name and symbol for the element with atomic number $Z = 120$?",
    ["Unbinilium (Ubn)", "Unbiunium (Ubu)", "Unnilbium (Unb)", "Biunnilium (Bun)"],
    0,
    "For 120: 1 = un, 2 = bi, 0 = nil $\\implies$ Unbinilium, symbol Ubn.",
    "Easy"
  );
  add(
    "The maximum number of elements that can be accommodated in the $n$-th period of the periodic table is given by:",
    ["$2n^2$ for the shell, but corresponds to filling $s, p, d, f$ orbitals available in that period", "$2n^2$ strictly", "$n^2$", "$2(2l + 1)$"],
    0,
    "The number of elements in period $n$ corresponds to the number of electrons filling the orbitals whose energies lie in that period sequence.",
    "Medium"
  );
  add(
    "How many elements are present in the 4th period of the modern periodic table?",
    ["18", "8", "32", "10"],
    0,
    "The 4th period fills $4s$ (2), $3d$ (10), and $4p$ (6) subshells, accommodating $2 + 10 + 6 = 18$ elements (from K, $Z=19$ to Kr, $Z=36$).",
    "Easy"
  );
  add(
    "How many elements are present in the 6th period of the modern periodic table?",
    ["32", "18", "8", "64"],
    0,
    "The 6th period fills $6s$ (2), $4f$ (14), $5d$ (10), and $6p$ (6) subshells, giving $2 + 14 + 10 + 6 = 32$ elements (from Cs, $Z=55$ to Rn, $Z=86$).",
    "Easy"
  );
  add(
    "An element has the electronic configuration $[\\text{Ar}] 3d^5 4s^1$. Its period, group, and block in the periodic table are:",
    ["Period 4, Group 6, $d$-block", "Period 3, Group 5, $d$-block", "Period 4, Group 1, $s$-block", "Period 4, Group 5, $d$-block"],
    0,
    "Highest principal quantum number $n = 4 \\implies$ Period 4. Last electron enters $d$-subshell $\\implies d$-block. Group number = $(n-1)d + ns = 5 + 1 = 6$ (Chromium).",
    "Easy"
  );
  add(
    "An element has atomic number $Z = 35$. To which group and period does it belong?",
    ["Period 4, Group 17", "Period 3, Group 17", "Period 4, Group 7", "Period 5, Group 15"],
    0,
    "$Z = 35$ is Bromine ($[\\text{Ar}] 3d^{10} 4s^2 4p^5$). $n = 4 \\implies$ Period 4. For $p$-block, Group = $12 + np = 12 + 5 = 17$.",
    "Easy"
  );
  add(
    "An element with $Z = 56$ belongs to which block and group?",
    ["$s$-block, Group 2", "$p$-block, Group 14", "$d$-block, Group 6", "$f$-block, Group 3"],
    0,
    "$Z = 56$ is Barium ($[\\text{Xe}] 6s^2$). Outermost electrons are in $6s^2$, so it is in $s$-block, Group 2 (alkaline earth metal).",
    "Easy"
  );
  add(
    "The general outer electronic configuration of the $d$-block transition elements is:",
    ["$(n - 1)d^{1 - 10} ns^{1 - 2}$", "$(n - 1)d^{1 - 10} ns^2$", "$nd^{1 - 10} ns^{1 - 2}$", "$(n - 2)d^{1 - 10} ns^2$"],
    0,
    "Transition elements have electrons filling the penultimate $(n-1)d$ subshell with outermost $ns^{1-2}$: $(n-1)d^{1-10} ns^{1-2}$.",
    "Easy"
  );
  add(
    "The general outer electronic configuration of $f$-block elements (inner transition elements) is:",
    ["$(n - 2)f^{1 - 14} (n - 1)d^{0 - 1} ns^2$", "$(n - 2)f^{1 - 14} (n - 1)d^{1 - 2} ns^2$", "$(n - 1)f^{1 - 14} nd^1 ns^2$", "$nf^{1 - 14} ns^2$"],
    0,
    "Inner transition elements fill the anti-penultimate $(n-2)f$ subshell: $(n-2)f^{1-14} (n-1)d^{0-1} ns^2$.",
    "Easy"
  );
  add(
    "The elements with atomic numbers $Z = 58$ (Cerium) to $Z = 71$ (Lutetium) are called:",
    ["Lanthanoids ($4f$-series)", "Actinoids ($5f$-series)", "Transition metals", "Alkaline earth metals"],
    0,
    "The 14 elements from Ce ($Z=58$) to Lu ($Z=71$) correspond to progressive filling of the $4f$ subshell, termed Lanthanoids.",
    "Easy"
  );
  add(
    "The elements with atomic numbers $Z = 90$ (Thorium) to $Z = 103$ (Lawrencium) are called:",
    ["Actinoids ($5f$-series)", "Lanthanoids ($4f$-series)", "Platinum metals", "Coinage metals"],
    0,
    "The 14 elements from Th ($Z=90$) to Lr ($Z=103$) involve filling of the $5f$ subshell and are termed Actinoids.",
    "Easy"
  );
  add(
    "All elements of the actinoid series are:",
    ["Radioactive", "Non-metals", "Gases at room temperature", "Diamagnetic"],
    0,
    "All actinoid elements are radioactive, and elements beyond uranium ($Z > 92$) are synthetic transuranium elements.",
    "Easy"
  );
  add(
    "Which of the following pairs of elements are known as 'transuranium elements'?",
    ["Neptunium ($Z = 93$) and Plutonium ($Z = 94$)", "Uranium ($Z = 92$) and Thorium ($Z = 90$)", "Radium ($Z = 88$) and Polonium ($Z = 84$)", "Cerium ($Z = 58$) and Europium ($Z = 63$)"],
    0,
    "Elements having atomic number $Z > 92$ (beyond Uranium) are man-made synthetic elements called transuranium elements.",
    "Easy"
  );
  add(
    "Which group of the periodic table contains elements in all three states of matter (solid, liquid, gas) at room temperature?",
    ["Group 17 (Halogens)", "Group 1 (Alkali metals)", "Group 18 (Noble gases)", "Group 14 (Carbon family)"],
    0,
    "In Group 17: $\\text{F}_2$ and $\\text{Cl}_2$ are gases, $\\text{Br}_2$ is a liquid, and $\\text{I}_2$ and $\\text{At}$ are solids at room temperature.",
    "Medium"
  );
  add(
    "The coinage metals belong to which group of the modern periodic table?",
    ["Group 11 (Cu, Ag, Au)", "Group 12 (Zn, Cd, Hg)", "Group 1 (Li, Na, K)", "Group 10 (Ni, Pd, Pt)"],
    0,
    "Copper (Cu), Silver (Ag), and Gold (Au) belong to Group 11 and have historically been used for minting coins.",
    "Easy"
  );
  add(
    "Which of the following elements is NOT classified as a transition element according to the IUPAC definition?",
    ["Zinc ($\\text{Zn}$)", "Copper ($\\text{Cu}$)", "Iron ($\\text{Fe}$)", "Chromium ($\\text{Cr}$)",],
    0,
    "IUPAC defines a transition element as having an incompletely filled $d$-subshell in its neutral atom or common oxidation states. Group 12 elements (Zn, Cd, Hg) have full $d^{10}$ in elemental and $+2$ ionic states.",
    "Medium"
  );
  add(
    "To which block does the element with electron configuration $[\\text{Rn}] 5f^{14} 6d^1 7s^2$ belong?",
    ["$f$-block", "$d$-block", "$s$-block", "$p$-block"],
    0,
    "This is Lawrencium ($Z = 103$). Because it completes the $5f$ series, it is historically and chemically classified as the terminal member of the $f$-block (actinoids).",
    "Medium"
  );
  add(
    "An element with electronic configuration $1s^2 2s^2 2p^6 3s^2 3p^6 3d^{10} 4s^2 4p^3$ has how many valence electrons?",
    ["5", "3", "15", "2"],
    0,
    "Valence electrons occupy the outermost shell ($n = 4$): $4s^2 4p^3 \\implies 2 + 3 = 5$ valence electrons (Arsenic, Group 15).",
    "Easy"
  );
  add(
    "The element 'Eka-aluminium' predicted by Mendeleev was later discovered and named:",
    ["Gallium", "Germanium", "Scandium", "Indium"],
    0,
    "Mendeleev predicted Eka-aluminium (later discovered as Gallium by de Boisbaudran) and Eka-silicon (Germanium by Winkler).",
    "Easy"
  );
  add(
    "The element 'Eka-silicon' predicted by Mendeleev was later identified as:",
    ["Germanium", "Gallium", "Technetium", "Titanium"],
    0,
    "Eka-silicon was later isolated and named Germanium (Ge, $Z = 32$).",
    "Easy"
  );
  add(
    "Mendeleev's periodic table had several anomalies. Which pair of elements represented an inverted atomic weight anomaly?",
    ["Argon ($39.9\\text{ u}$) placed before Potassium ($39.1\\text{ u}$)", "Sodium before Magnesium", "Carbon before Nitrogen", "Fluorine before Chlorine"],
    0,
    "Argon ($Z=18$, mass $39.9$) was placed before Potassium ($Z=19$, mass $39.1$) to preserve chemical periodicity, violating Mendeleev's strict atomic weight ordering.",
    "Easy"
  );
  add(
    "Another pair showing inverted atomic mass order in Mendeleev's table is:",
    ["Cobalt ($58.9\\text{ u}$) placed before Nickel ($58.7\\text{ u}$)", "Iron before Cobalt", "Zinc before Copper", "Lithium before Beryllium"],
    0,
    "Cobalt ($Z=27$, mass $58.93$) precedes Nickel ($Z=28$, mass $58.69$). Modern periodic law based on $Z$ resolves this naturally.",
    "Easy"
  );
  add(
    "Which element has the highest atomic number among all elements officially approved by IUPAC in the 7th period?",
    ["Oganesson ($Z = 118$)", "Tennessine ($Z = 117$)", "Livermorium ($Z = 116$)", "Moscovium ($Z = 115$)"],
    0,
    "Oganesson (Og, $Z = 118$, noble gas) completes the 7th period with configuration $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^6$.",
    "Easy"
  );
  add(
    "In the modern periodic table, the group number of a $p$-block element is given by:",
    ["$12 + \\text{number of } p\\text{-electrons}$ (or $10 + \\text{valence electrons}$)", "$2 + p\\text{-electrons}$", "Number of $p\\text{-electrons}$ only", "$18 - p\\text{-electrons}$"],
    0,
    "For $p$-block: $\\text{Group} = 10 + \\text{valence electrons} = 12 + np\\text{ electrons}$ (e.g. $p^1 \\implies 13$, $p^6 \\implies 18$).",
    "Easy"
  );
  add(
    "An atom has atomic number $Z = 105$ (Dubnium). What is its group number?",
    ["Group 5", "Group 6", "Group 4", "Group 7"],
    0,
    "$Z = 105$ has configuration $[\\text{Rn}] 5f^{14} 6d^3 7s^2$. Group number for $d$-block is $(n-1)d + ns = 3 + 2 = 5$.",
    "Medium"
  );
  add(
    "The total number of periods and groups in the modern long form of periodic table are:",
    ["7 periods and 18 groups", "8 periods and 16 groups", "7 periods and 8 groups", "6 periods and 18 groups"],
    0,
    "The modern periodic table consists of 7 horizontal rows (periods) and 18 vertical columns (groups).",
    "Easy"
  );
  add(
    "The bridge elements in Mendeleev's periodic table belong to which period?",
    ["Period 2", "Period 1", "Period 3", "Period 4"],
    0,
    "Period 2 elements (Li, Be, B, C, N, O, F) were termed bridge elements by Mendeleev because they show diagonal resemblances to Period 3 elements.",
    "Medium"
  );
  add(
    "The representative (or main group) elements comprise:",
    ["$s$-block and $p$-block elements", "$d$-block elements only", "$f$-block elements only", "$d$-block and $f$-block elements"],
    0,
    "The representative elements (main group) are those in the $s$-block (Groups 1 and 2) and $p$-block (Groups 13 to 18).",
    "Easy"
  );
  add(
    "Why are Group 12 elements (Zn, Cd, Hg) often called 'non-typical transition elements'?",
    ["They have completely filled $(n-1)d^{10}$ subshell in both ground state and common oxidation states", "They are non-metals", "They do not form coordination complexes", "They are highly radioactive"],
    0,
    "Because their $d$-subshell is fully filled ($d^{10}$) in both neutral atoms and $\\text{M}^{2+}$ cations, they do not exhibit typical transition properties (variable valency, paramagnetic ions, d-d spectra).",
    "Easy"
  );
  add(
    "Which element in the periodic table has the electronic configuration $[\\text{Ar}] 3d^{10} 4s^1$?",
    ["Copper ($\\text{Cu}, Z = 29$)", "Zinc ($\\text{Zn}, Z = 30$)", "Chromium ($\\text{Cr}, Z = 24$)", "Nickel ($\\text{Ni}, Z = 28$)"],
    0,
    "Copper has configuration $[\\text{Ar}] 3d^{10} 4s^1$, an anomaly that stabilizes the fully filled $3d^{10}$ subshell.",
    "Easy"
  );
  add(
    "Which period of the periodic table contains only non-metallic and gaseous elements?",
    ["Period 1 (H and He)", "Period 2", "Period 3", "Period 7"],
    0,
    "Period 1 contains only two elements: Hydrogen and Helium, both of which are non-metallic gases.",
    "Easy"
  );
  add(
    "An element with atomic number $Z = 80$ (Mercury) belongs to which block?",
    ["$d$-block", "$s$-block", "$p$-block", "$f$-block"],
    0,
    "Mercury ($[\\text{Xe}] 4f^{14} 5d^{10} 6s^2$) is the terminal member of the $5d$ transition series in Group 12, belonging to the $d$-block.",
    "Easy"
  );
  add(
    "An element with $Z = 31$ (Gallium) belongs to which block and group?",
    ["$p$-block, Group 13", "$s$-block, Group 1", "$d$-block, Group 3", "$p$-block, Group 15"],
    0,
    "Gallium has configuration $[\\text{Ar}] 3d^{10} 4s^2 4p^1$. Last electron is in $4p$, so $p$-block. Group $= 12 + 1 = 13$.",
    "Easy"
  );
  add(
    "The chalcogens belong to which group of the periodic table?",
    ["Group 16 (O, S, Se, Te, Po)", "Group 15", "Group 17", "Group 14"],
    0,
    "Group 16 elements are called chalcogens (meaning 'ore-forming' elements).",
    "Easy"
  );
  add(
    "The pnictogens belong to which group of the periodic table?",
    ["Group 15 (N, P, As, Sb, Bi)", "Group 16", "Group 14", "Group 13"],
    0,
    "Group 15 elements are called pnictogens (meaning 'choking or suffocating' elements).",
    "Easy"
  );
  add(
    "Which of the following sets of atomic numbers corresponds to alkaline earth metals?",
    ["$4, 12, 20, 38, 56$", "$3, 11, 19, 37, 55$", "$5, 13, 31, 49, 81$", "$9, 17, 35, 53, 85$"],
    0,
    "Group 2 elements: Be ($Z=4$), Mg ($12$), Ca ($20$), Sr ($38$), Ba ($56$), Ra ($88$).",
    "Easy"
  );
  add(
    "Which of the following atomic numbers corresponds to a noble gas?",
    ["$2, 10, 18, 36, 54, 86, 118$", "$1, 3, 11, 19, 37, 55$", "$4, 12, 20, 38, 56$", "$7, 15, 33, 51, 83$"],
    0,
    "Group 18 noble gases: He (2), Ne (10), Ar (18), Kr (36), Xe (54), Rn (86), Og (118).",
    "Easy"
  );
  add(
    "An element has outer configuration $5f^7 6d^1 7s^2$. Its atomic number is:",
    ["$96$ (Curium)", "$64$ (Gadolinium)", "$94$ (Plutonium)", "$98$ (Californium)"],
    0,
    "With Rn core ($86$) $+ 7 (5f) + 1 (6d) + 2 (7s) = 86 + 10 = 96$, which is Curium (Cm).",
    "Medium"
  );
  add(
    "Assertion (A): Moseley's work demonstrated that atomic number, not atomic weight, is the fundamental property determining chemical periodicity.\nReason (R): The frequency of characteristic $K_\\alpha$ X-rays emitted by elements satisfies $\\sqrt{\\nu} = a(Z - b)$, which is directly linear with atomic number $Z$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Moseley's plots of $\\sqrt{\\nu}$ against $Z$ produced perfect regular straight lines, providing direct experimental justification for atomic number. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Group 12 elements (Zn, Cd, Hg) are not regarded as true transition elements.\nReason (R): They have completely filled $d$-orbitals in their elemental state as well as in their common oxidation states.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "IUPAC defines transition elements by incomplete $d$-subshells. Zn, Cd, Hg have $d^{10}$ in both neutral and $+2$ states. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Mendeleev placed Argon before Potassium in his periodic table.\nReason (R): Potassium is chemically an alkali metal matching Sodium, whereas Argon is an unreactive noble gas.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Mendeleev prioritized chemical periodicity over strict mass order. Modern atomic number ordering naturally places Ar ($Z=18$) before K ($Z=19$). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The 6th period contains 32 elements.\nReason (R): In the 6th period, electrons fill the $6s, 4f, 5d,$ and $6p$ subshells.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Total capacities: $2 (6s) + 14 (4f) + 10 (5d) + 6 (6p) = 32$. Both are true and (R) is the correct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Halogens belong to Group 17 of the modern periodic table.\nReason (R): Their valence shell electronic configuration is $ns^2 np^5$, having seven valence electrons.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "For $p$-block elements, Group $= 10 + \\text{valence electrons} = 10 + 7 = 17$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): All actinoid elements are radioactive.\nReason (R): Their large nuclei have unfavorable neutron-to-proton ratios and high Coulomb repulsion, leading to spontaneous nuclear decay.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "All elements with $Z \\ge 84$ have unstable nuclei. The actinoids ($Z = 90-103$) are uniformly radioactive. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getAtomicRadiusQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Atomic radius", text, opts, ans, exp, diff, type));

  add(
    "Across a period from left to right in the modern periodic table, atomic radii generally:",
    ["Decrease due to increase in effective nuclear charge ($Z_{\\text{eff}}$)", "Increase due to addition of extra electron shells", "Remain constant", "First increase and then decrease"],
    0,
    "Across a period, electrons enter the same principal energy shell while nuclear charge $Z$ increases, pulling electron clouds closer and decreasing atomic radius.",
    "Easy"
  );
  add(
    "Down a group from top to bottom, atomic radii increase primarily because:",
    ["A new principal electron shell is added at each successive period", "Effective nuclear charge increases substantially", "Nuclear mass decreases", "Electrons become relativistic"],
    0,
    "The addition of successive electron shells increases the distance between the outermost electrons and nucleus, dominating over increasing nuclear charge.",
    "Easy"
  );
  add(
    "Comparing covalent, metallic, and van der Waals radii for the same element (e.g. noble gas or non-metal), the correct order of magnitudes is:",
    ["$r_{\\text{vdw}} > r_{\\text{metallic}} > r_{\\text{covalent}}$", "$r_{\\text{covalent}} > r_{\\text{metallic}} > r_{\\text{vdw}}$", "$r_{\\text{metallic}} > r_{\\text{vdw}} > r_{\\text{covalent}}$", "$r_{\\text{vdw}} > r_{\\text{covalent}} > r_{\\text{metallic}}$"],
    0,
    "van der Waals forces are weak non-bonding attractions between separated molecules (largest distance). Metallic bonds involve overlapping valence orbitals. Covalent bonds involve orbital interpenetration and sharing (shortest distance).",
    "Easy"
  );
  add(
    "Why do noble gases (Group 18) have unexpectedly large atomic radii compared to the preceding halogens in the same period?",
    ["Noble gas radii are measured as van der Waals radii, whereas halogen radii are measured as covalent radii", "Noble gases have extra electron shells", "Noble gases have smaller nuclear charge", "Noble gas atoms repel each other electrostatically"],
    0,
    "Because noble gases do not form covalent bonds under standard conditions, their radii are reported as non-bonded van der Waals radii, which are inherently much larger than covalent radii.",
    "Easy"
  );
  add(
    "How does the ionic radius of a cation compare to the atomic radius of its parent neutral atom?",
    ["The cation is always smaller ($r_{\\text{cation}} < r_{\\text{atom}}$)", "The cation is always larger ($r_{\\text{cation}} > r_{\\text{atom}}$)", "Both are identical", "Depends on the temperature"],
    0,
    "Loss of electrons decreases electron-electron repulsion and often sheds the outermost shell, increasing $Z_{\\text{eff}}$ and drawing remaining electrons closer: $r_{\\text{cation}} < r_{\\text{atom}}$.",
    "Easy"
  );
  add(
    "How does the ionic radius of an anion compare to the atomic radius of its parent neutral atom?",
    ["The anion is always larger ($r_{\\text{anion}} > r_{\\text{atom}}$)", "The anion is always smaller ($r_{\\text{anion}} < r_{\\text{atom}}$)", "Both are identical", "Depends on ionic charge only"],
    0,
    "Adding electrons increases inter-electronic repulsion without changing nuclear charge, expanding the electron cloud: $r_{\\text{anion}} > r_{\\text{atom}}$.",
    "Easy"
  );
  add(
    "Which of the following represents the correct decreasing order of ionic radii for the isoelectronic series $\\text{N}^{3-}, \\text{O}^{2-}, \\text{F}^-, \\text{Na}^+, \\text{Mg}^{2+}, \\text{Al}^{3+}$?",
    ["$\\text{N}^{3-} > \\text{O}^{2-} > \\text{F}^- > \\text{Na}^+ > \\text{Mg}^{2+} > \\text{Al}^{3+}$", "$\\text{Al}^{3+} > \\text{Mg}^{2+} > \\text{Na}^+ > \\text{F}^- > \\text{O}^{2-} > \\text{N}^{3-}$", "$\\text{Na}^+ > \\text{Mg}^{2+} > \\text{Al}^{3+} > \\text{F}^- > \\text{O}^{2-} > \\text{N}^{3-}$", "$\\text{F}^- > \\text{O}^{2-} > \\text{N}^{3-} > \\text{Al}^{3+} > \\text{Mg}^{2+} > \\text{Na}^+$"],
    0,
    "All these ions have 10 electrons. As nuclear charge $Z$ increases from 7 (N) to 13 (Al), the electrons are pulled tighter towards the nucleus, so size decreases continuously.",
    "Easy"
  );
  add(
    "Which of the following ions has the SMALLEST radius?",
    ["$\\text{Al}^{3+}$", "$\\text{Mg}^{2+}$", "$\\text{Na}^+$", "$\\text{F}^-$"],
    0,
    "In the isoelectronic series (10 electrons), $\\text{Al}^{3+}$ has the highest nuclear charge ($Z = 13$), giving it the smallest ionic radius.",
    "Easy"
  );
  add(
    "Which of the following species has the LARGEST radius?",
    ["$\\text{N}^{3-}$", "$\\text{O}^{2-}$", "$\\text{F}^-$", "$\\text{Na}^+$"],
    0,
    "Among 10-electron isoelectronic species, $\\text{N}^{3-}$ has the smallest nuclear charge ($Z = 7$), so its electron cloud experiences the weakest inward pull, making it the largest.",
    "Easy"
  );
  add(
    "Which of the following pairs of transition elements have virtually IDENTICAL atomic radii due to lanthanoid contraction?",
    ["$\\text{Zr}$ and $\\text{Hf}$", "$\\text{Fe}$ and $\\text{Co}$", "$\\text{Ti}$ and $\\text{Zr}$", "$\\text{Sc}$ and $\\text{Y}$"],
    0,
    "Zirconium ($\\text{Zr}, 4d, r = 160\\text{ pm}$) and Hafnium ($\\text{Hf}, 5d, r = 159\\text{ pm}$) have nearly identical radii because the intervening $4f^{14}$ electrons shield poorly (lanthanoid contraction).",
    "Easy"
  );
  add(
    "Lanthanoid contraction is caused by:",
    ["Poor shielding effect of diffuse $4f$ electrons", "Relativistic mass increase of core electrons", "Complete filling of $d$-orbitals", "Expansion of the $6s$ orbital"],
    0,
    "The 14 electrons in the $4f$ subshell have diffuse shapes and poor screening ability, allowing nuclear charge to increase by $+14$ without proportional shielding, drawing outer $5d$ and $6s$ orbitals inward.",
    "Medium"
  );
  add(
    "Which of the following pairs also have nearly identical covalent radii due to lanthanoid contraction?",
    ["$\\text{Nb}$ and $\\text{Ta}$", "$\\text{V}$ and $\\text{Nb}$", "$\\text{Cr}$ and $\\text{Mo}$", "$\\text{Mn}$ and $\\text{Tc}$"],
    0,
    "Niobium (Nb, $4d$) and Tantalum (Ta, $5d$) in Group 5 have nearly identical atomic radii ($146\\text{ pm}$) due to lanthanoid contraction.",
    "Easy"
  );
  add(
    "Arrange the following atoms in order of INCREASING atomic radius: $\\text{F, Cl, Br, I}$:",
    ["$\\text{F} < \\text{Cl} < \\text{Br} < \\text{I}$", "$\\text{I} < \\text{Br} < \\text{Cl} < \\text{F}$", "$\\text{Cl} < \\text{F} < \\text{Br} < \\text{I}$", "$\\text{F} < \\text{Br} < \\text{Cl} < \\text{I}$"],
    0,
    "Down Group 17, new shells are added ($n = 2 \\to 5$), steadily increasing atomic radius: $\\text{F} (72\\text{ pm}) < \\text{Cl} (99\\text{ pm}) < \\text{Br} (114\\text{ pm}) < \\text{I} (133\\text{ pm})$.",
    "Easy"
  );
  add(
    "Arrange the following elements in order of DECREASING atomic radius: $\\text{Na, Mg, Al, Si}$:",
    ["$\\text{Na} > \\text{Mg} > \\text{Al} > \\text{Si}$", "$\\text{Si} > \\text{Al} > \\text{Mg} > \\text{Na}$", "$\\text{Al} > \\text{Si} > \\text{Mg} > \\text{Na}$", "$\\text{Na} > \\text{Al} > \\text{Mg} > \\text{Si}$"],
    0,
    "Across Period 3, effective nuclear charge increases, shrinking the atomic radius: $\\text{Na} (186\\text{ pm}) > \\text{Mg} (160\\text{ pm}) > \\text{Al} (143\\text{ pm}) > \\text{Si} (118\\text{ pm})$.",
    "Easy"
  );
  add(
    "Which of the following species has the smallest radius: $\\text{Fe}, \\text{Fe}^{2+}, \\text{Fe}^{3+}$?",
    ["$\\text{Fe}^{3+}$", "$\\text{Fe}^{2+}$", "$\\text{Fe}$", "All are identical"],
    0,
    "Removing more electrons increases $Z / e$ ratio ($26/23 > 26/24 > 26/26$), so $\\text{Fe}^{3+} (64.5\\text{ pm}) < \\text{Fe}^{2+} (78\\text{ pm}) < \\text{Fe} (126\\text{ pm})$.",
    "Easy"
  );
  add(
    "Which of the following species has the largest radius: $\\text{I}^-, \\text{I}, \\text{I}^+$?",
    ["$\\text{I}^-$", "$\\text{I}$", "$\\text{I}^+$", "All have identical radius"],
    0,
    "An anion is larger than the neutral atom, which in turn is larger than the cation: $r(\\text{I}^-) > r(\\text{I}) > r(\\text{I}^+)$.",
    "Easy"
  );
  add(
    "Across the $3d$ transition series from $\\text{Sc}$ to $\\text{Zn}$, atomic radius:",
    ["Decreases from Sc to Cr, remains nearly constant from Mn to Ni, and increases slightly at Cu and Zn", "Decreases steadily throughout", "Increases steadily throughout", "Remains completely constant"],
    0,
    "Increasing nuclear charge decreases size initially; screening by added $3d$ electrons balances nuclear pull (constant size); then $d-d$ electron repulsion causes slight expansion at $d^{10}$ ($\text{Zn}$).",
    "Medium"
  );
  add(
    "The radius of which of the following elements is smaller than that of Gallium ($\\text{Ga}$)?",
    ["Aluminium ($\\text{Al}$)", "Indium ($\\text{In}$)", "Thallium ($\\text{Tl}$)", "Potassium ($\\text{K}$)"],
    0,
    "Interestingly, $\\text{Ga} (135\\text{ pm})$ is slightly SMALLER than $\\text{Al} (143\\text{ pm})$ due to transition metal contraction (poor screening by the preceding $10$ electrons of $3d$ series, $d$-block contraction).",
    "Hard"
  );
  add(
    "The anomalous smaller or nearly equal atomic radius of Gallium compared to Aluminium is known as:",
    ["$d$-block contraction (or transition metal contraction)", "Lanthanoid contraction", "Actinoid contraction", "Inert pair effect"],
    0,
    "The poor shielding of the ten $3d$ electrons in Gallium allows higher $Z_{\\text{eff}}$, shrinking its radius below that of Aluminium.",
    "Medium"
  );
  add(
    "Effective nuclear charge $Z_{\\text{eff}}$ experienced by an electron is given by Slater's formula:",
    ["$Z_{\\text{eff}} = Z - \\sigma$", "$Z_{\\text{eff}} = Z + \\sigma$", "$Z_{\\text{eff}} = Z / \\sigma$", "$Z_{\\text{eff}} = \\sigma - Z$"],
    0,
    "$Z_{\\text{eff}} = Z - \\sigma$, where $Z$ is the actual atomic number and $\\sigma$ is the screening (shielding) constant.",
    "Easy"
  );
  add(
    "Which subshell electrons offer the POOREST shielding to outer electrons?",
    ["$f$-electrons", "$d$-electrons", "$p$-electrons", "$s$-electrons"],
    0,
    "Due to their diffused shapes and spatial distribution, shielding ability follows the sequence: $s > p > d > f$. Thus $f$-electrons offer the poorest shielding.",
    "Easy"
  );
  add(
    "Which subshell electrons offer the MOST EFFECTIVE shielding to outer valence electrons?",
    ["$s$-electrons", "$p$-electrons", "$d$-electrons", "$f$-electrons"],
    0,
    "Spherically symmetric $s$-electrons penetrate closest to the nucleus, providing the most effective screening.",
    "Easy"
  );
  add(
    "Comparing the ionic radii of $\\text{Li}^+$ and $\\text{Mg}^{2+}$, their values are similar ($76\\text{ pm}$ and $72\\text{ pm}$). This similarity is an example of:",
    ["Diagonal relationship", "Lanthanoid contraction", "Inert pair effect", "Isomorphism"],
    0,
    "Lithium and Magnesium exhibit diagonal relationship because their ionic radii and charge-to-radius ratios (ionic potential $\\phi$) are very similar.",
    "Easy"
  );
  add(
    "Among the following, which atom has the SMALLEST covalent radius in the entire periodic table (excluding helium)?",
    ["Fluorine ($\\text{F}$)", "Hydrogen ($\\text{H}$)", "Oxygen ($\\text{O}$)", "Boron ($\\text{B}$)"],
    0,
    "Hydrogen has only a single $1s$ electron shell and has a covalent radius of approximately $37\\text{ pm}$, the smallest among all elements.",
    "Easy"
  );
  add(
    "Among elements of the second period (Li to F), which element has the smallest atomic radius?",
    ["Fluorine ($\\text{F}$)", "Lithium ($\\text{Li}$)", "Carbon ($\\text{C}$)", "Neon ($\\text{Ne}$ if reported as vdW)"],
    0,
    "Excluding Neon (which is reported as van der Waals radius), atomic/covalent radius decreases monotonically from $\\text{Li} (152\\text{ pm})$ to $\\text{F} (72\\text{ pm})$.",
    "Easy"
  );
  add(
    "Among elements of the second period, which element has the LARGEST atomic radius?",
    ["Lithium ($\\text{Li}$)", "Fluorine ($\\text{F}$)", "Beryllium ($\\text{Be}$)", "Boron ($\\text{B}$)"],
    0,
    "Lithium ($152\\text{ pm}$) is at the far left of Period 2 with the lowest $Z_{\\text{eff}}$, giving it the largest covalent radius in Period 2.",
    "Easy"
  );
  add(
    "The ratio of the radius of a cation to the radius of an anion ($r_+ / r_-$) is known in crystal chemistry as the:",
    ["Radius ratio", "Screening ratio", "Coordination ratio", "Lattice ratio"],
    0,
    "The radius ratio ($r_+ / r_-$) determines the stable coordination number and geometric packing in ionic crystal lattices.",
    "Easy"
  );
  add(
    "Which of the following orders of ionic radii is correct?",
    ["$\\text{O}^{2-} > \\text{F}^- > \\text{Na}^+$", "$\\text{F}^- > \\text{O}^{2-} > \\text{Na}^+$", "$\\text{Na}^+ > \\text{F}^- > \\text{O}^{2-}$", "$\\text{Na}^+ > \\text{O}^{2-} > \\text{F}^-$"],
    0,
    "$\\text{O}^{2-} (140\\text{ pm}) > \\text{F}^- (133\\text{ pm}) > \\text{Na}^+ (102\\text{ pm})$.",
    "Easy"
  );
  add(
    "Which of the following orders of atomic radii is INCORRECT?",
    ["$\\text{Al} < \\text{Ga}$", "$\\text{Li} < \\text{Na} < \\text{K}$", "$\\text{F} < \\text{O} < \\text{N}$", "$\\text{Si} < \\text{Al} < \\text{Mg}$"],
    0,
    "$\\text{Ga}$ ($135\\text{ pm}$) is slightly smaller than $\\text{Al}$ ($143\\text{ pm}$) due to $d$-block contraction, so $\\text{Al} < \\text{Ga}$ is incorrect.",
    "Medium"
  );
  add(
    "Assertion (A): The atomic radius of Fluorine is smaller than that of Oxygen.\nReason (R): Across Period 2 from Oxygen to Fluorine, the nuclear charge increases by 1 while the added electron enters the same shell, increasing $Z_{\\text{eff}}$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Higher effective nuclear charge in Fluorine contracts the electron cloud compared to Oxygen. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The radius of $\\text{Cl}^-$ is larger than that of $\\text{Cl}$ atom.\nReason (R): Adding an extra electron to form $\\text{Cl}^-$ increases electron-electron repulsions and decreases effective nuclear charge per electron.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Anion expansion results from increased Coulombic repulsion among valence electrons. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Zirconium and Hafnium have nearly identical chemical properties.\nReason (R): Due to lanthanoid contraction, the atomic and ionic radii of $\\text{Zr}$ and $\\text{Hf}$ are almost the same.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Nearly identical size leads to similar lattice energies, hydration energies, and bond lengths, making chemical separation extremely difficult. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In the isoelectronic series $\\text{N}^{3-}, \\text{O}^{2-}, \\text{F}^-, \\text{Na}^+, \\text{Mg}^{2+}, \\text{Al}^{3+}$, the size decreases continuously.\nReason (R): The number of electrons remains constant (10), while the nuclear charge $Z$ increases from 7 to 13.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "A higher positive nuclear charge pulls the 10 electrons inward more strongly. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The atomic radius of Gallium is slightly smaller than that of Aluminium.\nReason (R): Gallium is preceded by ten $3d$ transition elements, which screen the nuclear charge poorly.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Poor shielding of $3d$ electrons results in higher $Z_{\\text{eff}}$ in Ga, contracting its radius. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): van der Waals radius of an element is always greater than its covalent radius.\nReason (R): van der Waals radius measures half the distance between non-bonded atoms of adjacent molecules, where no orbital overlap occurs.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Covalent bonds involve orbital overlapping, whereas van der Waals forces are weak non-bonding attractions. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "For an isoelectronic series, the ratio of nuclear charge to number of electrons ($Z / e$):",
    ["Increases as the ionic radius decreases", "Decreases as the ionic radius decreases", "Remains constant", "Has no relation to ionic radius"],
    0,
    "Higher $Z/e$ means greater attractive pull per electron, shrinking the electron cloud and decreasing ionic radius.",
    "Easy"
  );
  add(
    "The covalent radius of hydrogen is $37\\text{ pm}$ and that of chlorine is $99\\text{ pm}$. According to the Schomaker-Stevenson formula, the bond length of $\\text{H-Cl}$ is:",
    ["$127.9\\text{ pm}$", "$136.0\\text{ pm}$", "$145.2\\text{ pm}$", "$99.0\\text{ pm}$"],
    0,
    "$d = r_{\\text{H}} + r_{\\text{Cl}} - 0.09 |\\chi_{\\text{Cl}} - \\chi_{\\text{H}}| = 37 + 99 - 0.09|3.0 - 2.1| = 136 - 0.09(0.9) = 136 - 0.081 \\approx 128\\text{ pm}$.",
    "Hard"
  );
  add(
    "Which of the following elements has the largest metallic radius?",
    ["Caesium ($\\text{Cs}$)", "Lithium ($\\text{Li}$)", "Sodium ($\\text{Na}$)", "Potassium ($\\text{K}$)"],
    0,
    "Atomic radius increases down Group 1: $\\text{Cs} (265\\text{ pm})$ has the largest radius among non-radioactive alkali metals.",
    "Easy"
  );
  add(
    "Which alkali metal cation has the highest degree of hydration in aqueous solution?",
    ["$\\text{Li}^+$", "$\\text{Na}^+$", "$\\text{K}^+$", "$\\text{Cs}^+$"],
    0,
    "Due to its extremely small ionic radius ($76\\text{ pm}$), $\\text{Li}^+$ has the highest charge density, attracting water dipoles most strongly to form the largest hydrated radius: $r_{\\text{hyd}}(\\text{Li}^+) > r_{\\text{hyd}}(\\text{Cs}^+)$.",
    "Medium"
  );
  add(
    "In aqueous solution, the correct order of ionic mobility for alkali metal ions is:",
    ["$\\text{Cs}^+ > \\text{Rb}^+ > \\text{K}^+ > \\text{Na}^+ > \\text{Li}^+$", "$\\text{Li}^+ > \\text{Na}^+ > \\text{K}^+ > \\text{Rb}^+ > \\text{Cs}^+$", "$\\text{Na}^+ > \\text{K}^+ > \\text{Rb}^+ > \\text{Cs}^+ > \\text{Li}^+$", "$\\text{Cs}^+ = \\text{Rb}^+ = \\text{K}^+$"],
    0,
    "Because $\\text{Li}^+$ is most heavily hydrated, its hydrated radius is largest, offering maximum viscous resistance. Thus $\\text{Cs}^+$ has the smallest hydrated radius and moves fastest.",
    "Medium"
  );
  add(
    "What is the atomic radius trend of actinoids compared to lanthanoids?",
    ["Actinoid contraction is greater than lanthanoid contraction because $5f$ electrons shield even more poorly than $4f$ electrons", "Actinoid contraction is smaller", "Actinoids do not contract", "Identical"],
    0,
    "$5f$ orbitals are more extended and diffuse than $4f$ orbitals, resulting in even poorer shielding and greater actinoid contraction per element.",
    "Hard"
  );
  add(
    "The radius of which of the following tripositive lanthanoid ions is the smallest?",
    ["$\\text{Lu}^{3+}$ ($Z = 71$)", "$\\text{La}^{3+}$ ($Z = 57$)", "$\\text{Ce}^{3+}$ ($Z = 58$)", "$\\text{Eu}^{3+}$ ($Z = 63$)"],
    0,
    "Due to lanthanoid contraction, the ionic radius of $\\text{Ln}^{3+}$ steadily decreases from $\\text{La}^{3+} (103\\text{ pm})$ to $\\text{Lu}^{3+} (86.1\\text{ pm})$.",
    "Easy"
  );
  add(
    "Which of the following represents the correct sequence of ionic sizes for chalcogen dianions?",
    ["$\\text{O}^{2-} < \\text{S}^{2-} < \\text{Se}^{2-} < \\text{Te}^{2-}$", "$\\text{Te}^{2-} < \\text{Se}^{2-} < \\text{S}^{2-} < \\text{O}^{2-}$", "$\\text{S}^{2-} < \\text{O}^{2-} < \\text{Se}^{2-} < \\text{Te}^{2-}$", "$\\text{O}^{2-} < \\text{Se}^{2-} < \\text{S}^{2-} < \\text{Te}^{2-}$"],
    0,
    "Down Group 16, additional electron shells are added, expanding ionic radius: $\\text{O}^{2-} (140\\text{ pm}) < \\text{S}^{2-} (184\\text{ pm}) < \\text{Se}^{2-} (198\\text{ pm}) < \\text{Te}^{2-} (221\\text{ pm})$.",
    "Easy"
  );
  add(
    "The ionic radius of $\\text{H}^-$ is approximately:",
    ["$140\\text{ pm}$ (comparable to $\\text{F}^-$ or $\\text{O}^{2-}$)", "$37\\text{ pm}$", "$10\\text{ pm}$", "$200\\text{ pm}$"],
    0,
    "In $\\text{H}^-$, 1 proton holds 2 electrons ($Z/e = 0.5$). The massive inter-electronic repulsion expands the cloud to $\\approx 140\\text{ pm}$, surprisingly comparable to $\\text{F}^-$.",
    "Hard"
  );
  add(
    "Which of the following correctly describes the ionic radius of $\\text{H}^+$?",
    ["It has an extremely small radius ($\\sim 1.5 \\times 10^{-3}\\text{ pm}$) and cannot exist free in solution", "It is larger than $\\text{H}^-$", "It is identical to $\\text{Li}^+$", "It has a radius of $53\\text{ pm}$"],
    0,
    "$\\text{H}^+$ is a bare proton with radius $\\sim 1.5 \\times 10^{-15}\\text{ m} = 1.5 \\times 10^{-3}\\text{ pm}$, so it has immense charge density and always binds to solvent (forming $\\text{H}_3\\text{O}^+$).",
    "Medium"
  );
  add(
    "Assertion (A): Hydrated radius of $\\text{Li}^+$ is larger than hydrated radius of $\\text{Cs}^+$.\nReason (R): Smaller anhydrous cations have higher charge density and attract more water molecules in their hydration shell.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because anhydrous $\\text{Li}^+$ is so tiny, its surface charge density is huge, binding multiple layers of water molecules. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Covalent radius of diamond is $77\\text{ pm}$.\nReason (R): In diamond, each carbon atom forms four single covalent $\\text{C-C}$ bonds of length $154\\text{ pm}$, and $r = d / 2$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Covalent radius is half of the single bond length between identical atoms: $154 / 2 = 77\\text{ pm}$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getIonizationEnthalpyQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Ionization enthalpy", text, opts, ans, exp, diff, type));

  add(
    "Ionization enthalpy is defined as the energy required to remove an electron from:",
    ["An isolated gaseous atom in its ground state", "A solid metal lattice at standard temperature", "A gaseous molecule in an excited state", "A liquid solution at boiling point"],
    0,
    "Standard ionization enthalpy is strictly defined for an isolated neutral gaseous atom in its electronic ground state: $\\text{M(g)} \\rightarrow \\text{M}^+\\text{(g)} + e^-$.",
    "Easy"
  );
  add(
    "For any given atom, the order of successive ionization enthalpies is always:",
    ["$\\text{IE}_1 < \\text{IE}_2 < \\text{IE}_3 < \\text{IE}_4$", "$\\text{IE}_1 > \\text{IE}_2 > \\text{IE}_3$", "$\\text{IE}_1 = \\text{IE}_2 = \\text{IE}_3$", "$\\text{IE}_2 < \\text{IE}_1 < \\text{IE}_3$"],
    0,
    "Each electron removed leaves a more positively charged ion ($Z / e$ increases), which pulls the remaining electrons more tightly, requiring progressively more energy.",
    "Easy"
  );
  add(
    "Why is the first ionization enthalpy of Beryllium ($\\text{Be}, 1s^2 2s^2$) GREATER than that of Boron ($\\text{B}, 1s^2 2s^2 2p^1$)?",
    ["The $2s$ electrons of Be are more penetrating and have a stable completely filled subshell compared to the $2p$ electron of B", "Be has higher nuclear charge than B", "B has larger atomic radius than Be", "Be is a metal and B is a metalloid"],
    0,
    "In Be, an electron is removed from a stable, penetrating $2s$ subshell. In B, the electron is removed from the higher-energy, less penetrating, and more shielded $2p$ subshell.",
    "Easy"
  );
  add(
    "Why is the first ionization enthalpy of Nitrogen ($\\text{N}, 2s^2 2p^3$) GREATER than that of Oxygen ($\\text{O}, 2s^2 2p^4$)?",
    ["Nitrogen has an extra-stable half-filled $2p^3$ subshell, whereas Oxygen has paired $2p_x^2$ electrons experiencing inter-electronic repulsion", "Oxygen has lower electronegativity", "Nitrogen is a diatomic gas", "Oxygen has lower nuclear charge"],
    0,
    "Nitrogen possesses three unpaired electrons in degenerate $2p$ orbitals (half-filled stability). In Oxygen, one $2p$ orbital contains two electrons whose mutual repulsion eases removal.",
    "Easy"
  );
  add(
    "A large jump between the second and third ionization enthalpies ($\\text{IE}_2 \\ll \\text{IE}_3$) indicates that the element belongs to:",
    ["Group 2 (Alkaline earth metals, e.g. Mg)", "Group 1 (Alkali metals)", "Group 13 (Boron family)", "Group 14 (Carbon family)"],
    0,
    "A massive jump after $\\text{IE}_2$ means the first two electrons were in the valence shell, and the 3rd electron must be removed from a stable inner noble gas core ($ns^2$).",
    "Easy"
  );
  add(
    "An element has $\\text{IE}_1 = 496\\text{ kJ/mol}$ and $\\text{IE}_2 = 4562\\text{ kJ/mol}$. The element is most likely:",
    ["Sodium ($\\text{Na}$)", "Magnesium ($\\text{Mg}$)", "Aluminium ($\\text{Al}$)", "Silicon ($\\text{Si}$)"],
    0,
    "The enormous jump from $\\text{IE}_1$ to $\\text{IE}_2$ ($\sim 9\\times$ increase) confirms 1 valence electron, characteristic of Group 1 alkali metals like Na.",
    "Easy"
  );
  add(
    "Which element in the entire periodic table has the HIGHEST first ionization enthalpy?",
    ["Helium ($\\text{He}$)", "Fluorine ($\\text{F}$)", "Neon ($\\text{Ne}$)", "Hydrogen ($\\text{H}$)"],
    0,
    "Helium has an extremely compact $1s^2$ shell, maximum effective nuclear charge for $n=1$, and no inner shielding, giving it the highest $\\text{IE}_1$ ($2372\\text{ kJ/mol}$).",
    "Easy"
  );
  add(
    "Which non-radioactive element in the periodic table has the LOWEST first ionization enthalpy?",
    ["Caesium ($\\text{Cs}$)", "Francium ($\\text{Fr}$)", "Lithium ($\\text{Li}$)", "Potassium ($\\text{K}$)"],
    0,
    "Caesium has a huge atomic radius and its single $6s^1$ valence electron is heavily shielded by 54 inner electrons, making its $\\text{IE}_1$ the lowest among stable elements ($376\\text{ kJ/mol}$).",
    "Easy"
  );
  add(
    "Down a group in the periodic table, ionization enthalpy generally:",
    ["Decreases due to increasing atomic radius and shielding effect", "Increases due to increasing nuclear charge", "Remains constant", "First decreases then increases"],
    0,
    "As atomic size increases down a group, the outermost electron is farther from the nucleus and screened by more inner shells, reducing the electrostatic attraction.",
    "Easy"
  );
  add(
    "The correct increasing order of first ionization enthalpy for Period 2 elements is:",
    ["$\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$", "$\\text{Li} < \\text{Be} < \\text{B} < \\text{C} < \\text{N} < \\text{O} < \\text{F} < \\text{Ne}$", "$\\text{B} < \\text{Li} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$", "$\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{N} < \\text{O} < \\text{F} < \\text{Ne}$"],
    0,
    "General trend increases across the period, with the two well-known inversions: $\\text{B} < \\text{Be}$ (full $2s$) and $\\text{O} < \\text{N}$ (half-filled $2p$).",
    "Easy"
  );
  add(
    "The correct increasing order of first ionization enthalpy for Period 3 elements is:",
    ["$\\text{Na} < \\text{Al} < \\text{Mg} < \\text{Si} < \\text{S} < \\text{P} < \\text{Cl} < \\text{Ar}$", "$\\text{Na} < \\text{Mg} < \\text{Al} < \\text{Si} < \\text{P} < \\text{S} < \\text{Cl} < \\text{Ar}$", "$\\text{Al} < \\text{Na} < \\text{Mg} < \\text{Si} < \\text{S} < \\text{P} < \\text{Cl} < \\text{Ar}$", "$\\text{Na} < \\text{Al} < \\text{Mg} < \\text{Si} < \\text{P} < \\text{S} < \\text{Cl} < \\text{Ar}$"],
    0,
    "Identical to Period 2: $\\text{Al} < \\text{Mg}$ (due to $3s^2$ stability) and $\\text{S} < \\text{P}$ (due to $3p^3$ half-filled stability).",
    "Easy"
  );
  add(
    "Among the following elements, which has the HIGHEST third ionization enthalpy ($\\text{IE}_3$)?",
    ["Magnesium ($\\text{Mg}$)", "Aluminium ($\\text{Al}$)", "Silicon ($\\text{Si}$)", "Sodium ($\\text{Na}$)"],
    0,
    "For $\\text{Mg}$ ($1s^2 2s^2 2p^6 3s^2$), $\\text{IE}_1$ and $\\text{IE}_2$ remove the two $3s$ electrons. The third electron must be extracted from the noble gas core $\\text{Mg}^{2+} ([\\text{Ne}])$, requiring immense energy.",
    "Medium"
  );
  add(
    "The first ionization enthalpy of the $5d$ transition elements is higher than that of $3d$ and $4d$ elements (e.g. $\\text{Au} > \\text{Ag}$) because of:",
    ["Lanthanoid contraction and high effective nuclear charge", "Larger atomic radius", "Smaller nuclear charge", "Lower shielding by $s$-electrons"],
    0,
    "Intervening $4f^{14}$ electrons provide poor shielding, causing $Z_{\\text{eff}}$ to increase sharply in the $5d$ series, holding $6s$ electrons much more tightly.",
    "Medium"
  );
  add(
    "Why does Thallium (Tl, Group 13) have a first ionization enthalpy HIGHER than Indium (In)?",
    ["Lanthanoid contraction and relativistic stabilization of the $6s$ orbital", "Tl has smaller atomic mass", "In has full $f$-orbitals", "Tl is non-metallic"],
    0,
    "Due to lanthanoid contraction ($4f^{14}$), the $6s^2$ electrons of Tl experience a much higher effective nuclear charge than the $5s^2$ electrons of In.",
    "Medium"
  );
  add(
    "The reluctance of the valence $ns^2$ electrons to participate in bonding in heavier $p$-block elements (like Tl, Pb, Bi) is termed the:",
    ["Inert pair effect", "Shielding effect", "Mesomeric effect", "Zeeman effect"],
    0,
    "The inert pair effect describes the increasing stability of lower oxidation states ($+1$ for Tl, $+2$ for Pb, $+3$ for Bi) down the groups due to high ionization energy of the $ns^2$ pair.",
    "Easy"
  );
  add(
    "Which of the following oxidation states is the MOST stable for Lead (Pb)?",
    ["$+2$", "$+4$", "$+3$", "$+1$"],
    0,
    "Due to the inert pair effect, the $+2$ oxidation state of Lead is much more stable than $+4$ (making $\\text{PbO}_2$ a powerful oxidizing agent).",
    "Easy"
  );
  add(
    "Which of the following oxidation states is the MOST stable for Thallium (Tl)?",
    ["$+1$", "$+3$", "$+2$", "$+4$"],
    0,
    "Because of the inert pair effect, $\\text{Tl}^+$ is thermodynamically much more stable than $\\text{Tl}^{3+}$ ($\\text{Tl}^{3+}$ acts as a strong oxidant).",
    "Easy"
  );
  add(
    "For which of the following elements is $\\text{IE}_2$ unexpectedly high?",
    ["Copper ($\\text{Cu}$) and Chromium ($\\text{Cr}$)", "Zinc ($\\text{Zn}$)", "Magnesium ($\\text{Mg}$)", "Calcium ($\\text{Ca}$)"],
    0,
    "Cu has configuration $[\\text{Ar}] 3d^{10} 4s^1$ and Cr has $[\\text{Ar}] 3d^5 4s^1$. Removing the second electron disrupts the exceptionally stable full $3d^{10}$ or half-filled $3d^5$ subshell, requiring very high $\\text{IE}_2$.",
    "Medium"
  );
  add(
    "How many ionization enthalpies are defined for a neutral Carbon atom ($Z = 6$)?",
    ["6", "4", "2", "12"],
    0,
    "Since carbon has 6 electrons, it can undergo 6 successive ionizations until a bare carbon nucleus ($\text{C}^{6+}$) is produced.",
    "Easy"
  );
  add(
    "The energy required to convert $1\\text{ mole}$ of gaseous $\\text{Mg}$ atoms to $\\text{Mg}^{2+}$ ions is:",
    ["$\\text{IE}_1 + \\text{IE}_2$", "$\\text{IE}_2$ only", "$\\text{IE}_1 \\times \\text{IE}_2$", "$\\text{IE}_2 - \\text{IE}_1$"],
    0,
    "Two sequential ionizations must occur: $\\text{Mg(g)} \\xrightarrow{\\text{IE}_1} \\text{Mg}^+\\text{(g)} \\xrightarrow{\\text{IE}_2} \\text{Mg}^{2+}\\text{(g)}$. Total energy $= \\text{IE}_1 + \\text{IE}_2$.",
    "Easy"
  );
  add(
    "Which of the following factors does NOT directly increase ionization enthalpy?",
    ["Increase in atomic radius", "Increase in nuclear charge", "Removal from a penetrating $s$-orbital compared to $p$", "Presence of half-filled or fully-filled subshells"],
    0,
    "An increase in atomic radius places the electron farther from the nucleus, weakening Coulombic attraction and DECREASING ionization enthalpy.",
    "Easy"
  );
  add(
    "The second ionization enthalpy of Alkali metals is extremely high because:",
    ["The second electron must be removed from a stable noble gas closed-shell configuration", "Alkali metals have high atomic mass", "Alkali metal ions are volatile", "The atomic radius increases after losing one electron"],
    0,
    "After losing one valence electron, the mono-cation has an octet configuration (e.g. $\\text{Na}^+$ is $[\\text{Ne}]$), so $\\text{IE}_2$ requires breaking into a closed shell.",
    "Easy"
  );
  add(
    "Which element has the lowest first ionization enthalpy in Period 3?",
    ["Sodium ($\\text{Na}$)", "Magnesium ($\\text{Mg}$)", "Aluminium ($\\text{Al}$)", "Chlorine ($\\text{Cl}$)"],
    0,
    "Sodium has the largest atomic radius and lowest nuclear charge in Period 3, making its $3s^1$ electron easiest to remove ($496\\text{ kJ/mol}$).",
    "Easy"
  );
  add(
    "Which of the following has the highest ionization energy?",
    ["$\\text{Ne}$", "$\\text{Ar}$", "$\\text{Kr}$", "$\\text{Xe}$"],
    0,
    "Among noble gases, ionization energy decreases down the group. Neon is the smallest after Helium and has the highest $\\text{IE}_1$ among these ($2080\\text{ kJ/mol}$).",
    "Easy"
  );
  add(
    "Which electronic configuration corresponds to the atom with the LOWEST first ionization enthalpy?",
    ["$1s^2 2s^2 2p^6 3s^1$", "$1s^2 2s^2 2p^6$", "$1s^2 2s^2 2p^3$", "$1s^2 2s^2 2p^5$"],
    0,
    "$1s^2 2s^2 2p^6 3s^1$ is Sodium, where the single $3s$ electron is well-shielded by the inner neon core and easily lost.",
    "Easy"
  );
  add(
    "Which electronic configuration corresponds to the atom with the HIGHEST first ionization enthalpy?",
    ["$1s^2 2s^2 2p^6$", "$1s^2 2s^2 2p^3$", "$1s^2 2s^2 2p^4$", "$1s^2 2s^2 2p^1$"],
    0,
    "$1s^2 2s^2 2p^6$ is Neon, which has a completely filled octet with maximum effective nuclear charge in Period 2.",
    "Easy"
  );
  add(
    "First ionization enthalpies of four consecutive elements are $738, 578, 786,$ and $1012\\text{ kJ/mol}$. These elements correspond respectively to:",
    ["$\\text{Mg, Al, Si, P}$", "$\\text{Na, Mg, Al, Si}$", "$\\text{Al, Si, P, S}$", "$\\text{Be, B, C, N}$"],
    0,
    "The drop from $738$ to $578\\text{ kJ/mol}$ is the characteristic dip from $\\text{Mg} (3s^2)$ to $\\text{Al} (3p^1)$, followed by steady increases for $\\text{Si}$ and $\\text{P}$.",
    "Medium"
  );
  add(
    "The first and second ionization enthalpies of a metal are $520$ and $7300\\text{ kJ/mol}$. When this metal burns in oxygen, its most stable oxide will have the formula:",
    ["$\\text{M}_2\\text{O}$", "$\\text{MO}$", "$\\text{MO}_2$", "$\\text{M}_2\\text{O}_3$"],
    0,
    "The enormous jump after $\\text{IE}_1$ shows the metal forms exclusively $\\text{M}^+$ cations (Group 1 alkali metal like Li), giving the oxide $\\text{M}_2\\text{O}$.",
    "Medium"
  );
  add(
    "If $\\text{IE}_1, \\text{IE}_2, \\text{IE}_3$ of an element are $590, 1145,$ and $4912\\text{ kJ/mol}$, the metal belongs to which group?",
    ["Group 2", "Group 1", "Group 13", "Group 14"],
    0,
    "The jump occurs after the 2nd ionization energy ($1145 \\to 4912$), indicating 2 valence electrons (Group 2 alkaline earth metal like Calcium).",
    "Easy"
  );
  add(
    "Assertion (A): The first ionization enthalpy of Nitrogen is greater than that of Oxygen.\nReason (R): Nitrogen has a stable half-filled $2p^3$ electronic configuration, while Oxygen has $2p^4$ with paired electrons in one orbital.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Half-filled subshell exchange stability in N and pairing repulsion in O explain this classic anomaly. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The first ionization enthalpy of Boron is less than that of Beryllium.\nReason (R): In Boron, the electron is removed from a $2p$ orbital which is higher in energy and less penetrating than the $2s$ orbital of Beryllium.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The $2s$ electrons penetrate closer to the nucleus and have full-subshell stability. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Second ionization enthalpy of Sodium is much higher than that of Magnesium.\nReason (R): In $\\text{Na}^+$, the second electron is removed from a stable $2p^6$ noble gas core, whereas in $\\text{Mg}^+$ it is removed from a $3s^1$ orbital.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Removing an electron from a closed octet ($2p^6$) requires massive energy. In $\\text{Mg}^+$, the valence $3s^1$ electron is readily lost. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The ionization enthalpies of $5d$ elements are higher than those of the corresponding $4d$ elements.\nReason (R): The filling of $4f$ orbitals before $5d$ leads to lanthanoid contraction, causing outer electrons to be held more tightly.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Poor shielding by $4f$ electrons increases $Z_{\\text{eff}}$ in $5d$ elements, increasing $\\text{IE}$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): $\\text{Pb}^{4+}$ compounds are strong oxidizing agents.\nReason (R): Due to the inert pair effect, $\\text{Pb}^{2+}$ is much more stable than $\\text{Pb}^{4+}$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Because $\\text{Pb}^{2+}$ is thermodynamically favored, $\\text{Pb}^{4+}$ readily accepts two electrons to reduce to $\\text{Pb}^{2+}$, acting as a strong oxidant. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Successive ionization enthalpies of an element always satisfy $\\text{IE}_1 < \\text{IE}_2 < \\text{IE}_3$.\nReason (R): With each successive removal of an electron, the positive charge on the ion increases, increasing the effective nuclear pull per electron.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "As electrons are removed, electron-electron repulsions decrease and $Z/e$ ratio rises, increasing ionization energy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  add(
    "The first ionization enthalpy ($\\Delta_i H_1$) values of third-period elements $\\text{Na}, \\text{Mg}$ and $\\text{Si}$ are respectively $496, 737$ and $786\\text{ kJ mol}^{-1}$. The first ionization enthalpy of $\\text{Al}$ is predicted to be closest to:",
    ["$577\\text{ kJ mol}^{-1}$", "$450\\text{ kJ mol}^{-1}$", "$850\\text{ kJ mol}^{-1}$", "$920\\text{ kJ mol}^{-1}$"],
    0,
    "In $\\text{Al}$, the valence electron is in $3p^1$, which is higher in energy and shielded by inner $3s^2$ electrons compared to $\\text{Mg}$ ($3s^2$). Thus, $\\text{IE}_1(\\text{Al}) = 577\\text{ kJ mol}^{-1}$, lying between $\\text{Na}$ and $\\text{Mg}$."
  );
  add(
    "Which electronic configuration of an element is associated with the highest difference between the 2nd and 3rd ionization enthalpies?",
    ["$1s^2 2s^2 2p^6 3s^2$", "$1s^2 2s^2 2p^6 3s^1$", "$1s^2 2s^2 2p^6 3s^2 3p^1$", "$1s^2 2s^2 2p^6 3s^2 3p^2$"],
    0,
    "For $1s^2 2s^2 2p^6 3s^2$ (Group 2 alkaline earth metal), the first two electrons are removed from $3s$. The third electron must be removed from the stable closed octet $2p^6$, requiring immense energy and causing a huge $\\text{IE}_3 - \\text{IE}_2$ gap."
  );
  add(
    "The set of elements representing the correct order of first ionization enthalpy is:",
    ["$\\text{K} < \\text{Ca} < \\text{S} < \\text{Ar}$", "$\\text{Ar} < \\text{S} < \\text{Ca} < \\text{K}$", "$\\text{Ca} < \\text{K} < \\text{S} < \\text{Ar}$", "$\\text{K} < \\text{S} < \\text{Ca} < \\text{Ar}$"],
    0,
    "Ionization enthalpy generally increases across a period and is highest for noble gases. $\\text{K}$ (Group 1) has the lowest, followed by $\\text{Ca}$ (Group 2), $\\text{S}$ (Group 16), and $\\text{Ar}$ (Group 18 noble gas) is highest."
  );
  add(
    "Among the elements $\\text{B}, \\text{Al}, \\text{C}$ and $\\text{Si}$, the correct order of first ionization enthalpy is:",
    ["$\\text{Al} < \\text{Si} < \\text{B} < \\text{C}$", "$\\text{B} < \\text{Al} < \\text{Si} < \\text{C}$", "$\\text{Al} < \\text{B} < \\text{Si} < \\text{C}$", "$\\text{Si} < \\text{Al} < \\text{B} < \\text{C}$"],
    0,
    "Experimental $\\text{IE}_1$ values: $\\text{Al} (577\\text{ kJ/mol}) < \\text{Si} (786\\text{ kJ/mol}) < \\text{B} (801\\text{ kJ/mol}) < \\text{C} (1086\\text{ kJ/mol})$. Down the group IE decreases, across the period IE increases."
  );
  add(
    "The first four ionization energy values of an element $M$ are $500, 4560, 6910$ and $9540\\text{ kJ mol}^{-1}$. The formula of its stable chloride is:",
    ["$\\text{MCl}$", "$\\text{MCl}_2$", "$\\text{MCl}_3$", "$\\text{MCl}_4$"],
    0,
    "The huge jump occurs between $\\text{IE}_1$ ($500$) and $\\text{IE}_2$ ($4560\\text{ kJ/mol}$), indicating that the element has only one valence electron (Group 1 alkali metal). Hence it forms $\\text{MCl}$."
  );
  add(
    "The first five ionization energies of an element are $800, 2427, 3658, 25024$ and $32824\\text{ kJ mol}^{-1}$. The element belongs to Group:",
    ["13", "14", "2", "15"],
    0,
    "The sharp jump occurs between $\\text{IE}_3$ ($3658$) and $\\text{IE}_4$ ($25024\\text{ kJ/mol}$), indicating 3 valence electrons. Thus, the element belongs to Group 13 (like Boron or Aluminum)."
  );
  add(
    "Why is the second ionization enthalpy of Chromium ($Z = 24$) significantly higher than that of Manganese ($Z = 25$)?",
    [
      "In $\\text{Cr}^+$, the 2nd electron is removed from stable half-filled $3d^5$, whereas in $\\text{Mn}^+$ it is removed from $4s^1$ leaving stable $3d^5$",
      "$\\text{Cr}$ has a higher atomic number than $\\text{Mn}$",
      "$\\text{Mn}^+$ has higher exchange energy than $\\text{Cr}^+$",
      "The effective nuclear charge of $\\text{Cr}$ is higher than that of $\\text{Mn}$"
    ],
    0,
    "$\\text{Cr}^+: [\\text{Ar}] 3d^5 4s^0 \\implies$ removing 2nd electron disrupts half-filled $3d^5$. $\\text{Mn}^+: [\\text{Ar}] 3d^5 4s^1 \\implies$ removing 2nd electron leaves extra-stable half-filled $3d^5$."
  );
  add(
    "Which of the following alkali metals has the lowest first ionization enthalpy?",
    ["$\\text{Cs}$", "$\\text{Rb}$", "$\\text{K}$", "$\\text{Na}$"],
    0,
    "Down the group from $\\text{Na}$ to $\\text{Cs}$, atomic size increases and shielding increases, causing outer electrons to be held less tightly. $\\text{Cs}$ has the lowest ionization enthalpy among stable elements."
  );
  add(
    "The ionization enthalpy of hydrogen atom in ground state is $13.6\\text{ eV}$. The ionization enthalpy of ground state $\\text{He}^+$ ion is:",
    ["$54.4\\text{ eV}$", "$27.2\\text{ eV}$", "$13.6\\text{ eV}$", "$122.4\\text{ eV}$"],
    0,
    "For hydrogenic species, $\\text{IE} = 13.6 \\times Z^2\\text{ eV}$. For $\\text{He}^+$, $Z = 2$, so $\\text{IE} = 13.6 \\times 4 = 54.4\\text{ eV}$."
  );
  add(
    "The electronic configuration of four elements are given below. Which one will have the highest value of $\\text{IE}_3$?",
    [
      "$1s^2 2s^2 2p^6 3s^2$",
      "$1s^2 2s^2 2p^6 3s^2 3p^1$",
      "$1s^2 2s^2 2p^6 3s^2 3p^2$",
      "$1s^2 2s^2 2p^6 3s^2 3p^3$"
    ],
    0,
    "In $1s^2 2s^2 2p^6 3s^2$ (Mg), the third ionization involves breaking the very stable $2p^6$ closed shell octet of $\\text{Mg}^{2+}$, giving it the highest $\\text{IE}_3$ among the group."
  );
  add(
    "Which of the following arrangements represents the correct decreasing order of first ionization enthalpy for the elements $\\text{O}, \\text{S}, \\text{F}$ and $\\text{Cl}$?",
    [
      "$\\text{F} > \\text{O} > \\text{Cl} > \\text{S}$",
      "$\\text{F} > \\text{Cl} > \\text{O} > \\text{S}$",
      "$\\text{O} > \\text{F} > \\text{Cl} > \\text{S}$",
      "$\\text{F} > \\text{O} > \\text{S} > \\text{Cl}$"
    ],
    0,
    "Values in kJ/mol: $\\text{F} (1681) > \\text{O} (1314) > \\text{Cl} (1251) > \\text{S} (1000)$. Halogens have higher IE than chalcogens in the same period, and 2nd period elements have higher IE than 3rd period counterparts."
  );
  add(
    "Assertion (A): Noble gases possess exceptionally high first ionization enthalpies.\nReason (R): Noble gases possess completely filled valence shell configurations ($ns^2 np^6$) conferring maximum thermodynamic and electronic stability.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Noble gases have stable octets ($ns^2 np^6$) and high nuclear charge for their period. Both (A) and (R) are true and (R) correctly explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getModernPeriodicLawQuestions,
  getAtomicRadiusQuestions,
  getIonizationEnthalpyQuestions
};
