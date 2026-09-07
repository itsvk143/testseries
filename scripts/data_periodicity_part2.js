// Classification of Elements and Periodicity in Properties - Part 2
// Subtopics:
// 4. Electron gain enthalpy (47 questions)
// 5. Electronegativity (47 questions)
// 6. Trends in periodic properties (47 questions)

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

function getElectronGainEnthalpyQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Electron gain enthalpy", text, opts, ans, exp, diff, type));

  add(
    "The electron gain enthalpy (\\Delta_{eg} H) of an element is defined as the enthalpy change when:",
    ["An isolated gaseous atom accepts an electron to form a monovalent anion", "A mole of gaseous cations gains an electron", "A solid metal atom gains an electron", "A molecule in gas phase dissociates upon electron capture"],
    0,
    "\\Delta_{eg} H is the enthalpy change accompanying the process: X(g) + e^- \\rightarrow X^-(g)."
  );
  add(
    "Which of the following elements has the most negative (highest magnitude of exothermic) electron gain enthalpy?",
    ["\\text{Cl}", "\\text{F}", "\\text{Br}", "\\text{I}"],
    0,
    "Chlorine has the highest negative electron gain enthalpy (-349 kJ/mol) among all elements, even higher than Fluorine (-328 kJ/mol)."
  );
  add(
    "Fluorine has a less negative electron gain enthalpy than Chlorine because:",
    ["In Fluorine, the incoming electron enters a compact 2p orbital experiencing strong interelectronic repulsions", "Fluorine has a lower electronegativity than Chlorine", "Fluorine has empty d-orbitals that repel electrons", "The effective nuclear charge of Fluorine is lower than Chlorine"],
    0,
    "The small compact size of 2p orbitals in F causes significant electron-electron repulsion with the incoming electron, making its \\Delta_{eg} H less negative than that of Cl (3p orbital)."
  );
  add(
    "The correct order of electron gain enthalpy with negative sign (exothermicity) for Group 16 elements (chalcogens) is:",
    ["\\text{S} > \\text{Se} > \\text{Te} > \\text{Po} > \\text{O}", "\\text{O} > \\text{S} > \\text{Se} > \\text{Te}", "\\text{S} > \\text{O} > \\text{Se} > \\text{Te}", "\\text{Te} > \\text{Se} > \\text{S} > \\text{O}"],
    0,
    "Like Fluorine, Oxygen has a compact 2p shell with high interelectronic repulsion. Hence Oxygen has the least negative \\Delta_{eg} H in Group 16: S (-200 kJ/mol) > Se (-195) > Te (-190) > Po (-174) > O (-141)."
  );
  add(
    "The second electron gain enthalpy of oxygen, corresponding to \\text{O}^-(g) + e^- \\rightarrow \\text{O}^{2-}(g), is:",
    ["Always positive (endothermic) due to electrostatic repulsion between the anion and the incoming electron", "Always negative (exothermic) because \\text{O}^{2-} attains a stable noble gas configuration", "Zero because noble gas configuration is achieved", "Negative at low temperatures and positive at high temperatures"],
    0,
    "The addition of an electron to an already negatively charged ion (\\text{O}^-) experiences strong electrostatic repulsion, requiring energy input. Thus \\Delta_{eg} H_2 is always positive (+780 kJ/mol for oxygen)."
  );
  add(
    "Which of the following elements has a positive (endothermic) electron gain enthalpy?",
    ["\\text{Ne}", "\\text{F}", "\\text{Cl}", "\\text{S}"],
    0,
    "Noble gases have completely filled stable octets (ns^2 np^6). Adding an extra electron requires placing it into the next higher principal energy level (quantum shell), which requires energy (\\Delta_{eg} H > 0)."
  );
  add(
    "Which group of elements generally exhibits positive or nearly zero electron gain enthalpies due to fully filled subshells?",
    ["Group 2 (Alkaline earth metals) and Group 18 (Noble gases)", "Group 1 (Alkali metals)", "Group 16 (Chalcogens)", "Group 17 (Halogens)"],
    0,
    "Group 2 elements have completely filled s-subshells (ns^2) and Group 18 have fully filled shells (ns^2 np^6), resulting in unstable anion formation and positive/near zero \\Delta_{eg} H."
  );
  add(
    "Nitrogen has an almost zero or slightly positive electron gain enthalpy because:",
    ["It has an extra-stable half-filled 2p^3 subshell", "It has high electronegativity", "It forms triple bonds", "It has small atomic radius"],
    0,
    "The half-filled configuration (1s^2 2s^2 2p^3) has extra exchange energy stability, resisting the addition of an electron into a paired orbital."
  );
  add(
    "The relationship between electron affinity (EA) and electron gain enthalpy (\\Delta_{eg} H) at temperature T is:",
    ["\\Delta_{eg} H = -\\text{EA} - \\frac{5}{2}RT", "\\Delta_{eg} H = +\\text{EA} + \\frac{5}{2}RT", "\\Delta_{eg} H = -\\text{EA} + RT", "\\Delta_{eg} H = \\text{EA}"],
    0,
    "Thermodynamically, \\Delta_{eg} H = -\\text{EA} - \\frac{5}{2}RT. At 0 K, \\Delta_{eg} H = -\\text{EA}."
  );
  add(
    "Which of the following processes is exothermic?",
    ["\\text{O}(g) + e^- \\rightarrow \\text{O}^-(g)", "\\text{O}^-(g) + e^- \\rightarrow \\text{O}^{2-}(g)", "\\text{S}^-(g) + e^- \\rightarrow \\text{S}^{2-}(g)", "\\text{N}(g) + e^- \\rightarrow \\text{N}^-(g) \\text{ (nearly thermoneutral/endothermic)}"],
    0,
    "First electron gain enthalpy of Oxygen is exothermic (-141 kJ/mol), whereas second electron gain enthalpies and nitrogen anion formation are endothermic."
  );
  add(
    "Which of the following arrangements represents the correct order of increasing electron gain enthalpy (with negative sign, i.e., becoming more exothermic)?",
    ["\\text{N} < \\text{C} < \\text{O} < \\text{F}", "\\text{F} < \\text{O} < \\text{C} < \\text{N}", "\\text{C} < \\text{N} < \\text{O} < \\text{F}", "\\text{N} < \\text{O} < \\text{C} < \\text{F}"],
    0,
    "Across period 2: N (approx 0 kJ/mol, stable half-filled 2p^3) < C (-122 kJ/mol) < O (-141 kJ/mol) < F (-328 kJ/mol)."
  );
  add(
    "The formation of the oxide ion \\text{O}^{2-}(g) from oxygen atom requires an initial exothermic step followed by an endothermic step:\n\\text{O}(g) + e^- \\rightarrow \\text{O}^-(g); \\Delta H_1 = -141\\text{ kJ mol}^{-1}\\n\\text{O}^-(g) + e^- \\rightarrow \\text{O}^{2-}(g); \\Delta H_2 = +780\\text{ kJ mol}^{-1}\\nWhy are ionic oxides containing \\text{O}^{2-} (such as \\text{MgO}) remarkably stable?",
    ["High lattice enthalpy of the crystal lattice compensates for the endothermic formation of \\text{O}^{2-}", "Oxygen atom has very low ionization energy", "\\text{O}^{2-} is larger than \\text{O}^-", "Oxygen has vacant d-orbitals"],
    0,
    "Although the overall formation of \\text{O}^{2-}(g) is net endothermic (+639 kJ/mol), the divalent charge produces enormous crystal lattice enthalpy with cations, making solid ionic oxides energetically favorable."
  );
  add(
    "Which of the following halogens has the lowest negative electron gain enthalpy?",
    ["\\text{I}", "\\text{Br}", "\\text{F}", "\\text{Cl}"],
    0,
    "Values of \\Delta_{eg} H: Cl (-349) < F (-328) < Br (-325) < I (-295 kJ/mol). Iodine has the least negative value due to large atomic radius and weak nuclear attraction."
  );
  add(
    "Among alkali metals, which element has the most negative electron gain enthalpy?",
    ["\\text{Li}", "\\text{Na}", "\\text{K}", "\\text{Cs}"],
    0,
    "Alkali metals have ns^1 valence configurations. Adding an electron completes an ns^2 shell. Li has the smallest size and highest effective nuclear charge, having \\Delta_{eg} H = -60 kJ/mol (most negative in Group 1)."
  );
  add(
    "Why does Beryllium have a positive electron gain enthalpy whereas Lithium has a negative electron gain enthalpy?",
    ["Beryllium has a completely filled 2s^2 subshell, so the extra electron must enter the higher-energy 2p subshell", "Beryllium has lower nuclear charge than Lithium", "Lithium is a metal while Beryllium is a non-metal", "Beryllium has smaller atomic radius than Lithium"],
    0,
    "In Li (2s^1), the added electron pairs in the 2s orbital (\\Delta_{eg} H = -60 kJ/mol). In Be (2s^2), the extra electron enters the higher-energy 2p subshell, making the process endothermic."
  );
  add(
    "Which of the following elements has the most negative electron gain enthalpy in Period 3?",
    ["\\text{Cl}", "\\text{S}", "\\text{P}", "\\text{Si}"],
    0,
    "Across period 3, effective nuclear charge increases and halogens have one electron short of octet. Chlorine has \\Delta_{eg} H = -349 kJ/mol, the highest negative value in Period 3 and the whole periodic table."
  );
  add(
    "Why is the electron gain enthalpy of Phosphorus (-74 kJ/mol) less negative than that of Silicon (-134 kJ/mol)?",
    ["Phosphorus has a stable half-filled 3p^3 configuration", "Silicon has smaller atomic radius than Phosphorus", "Phosphorus has lower nuclear charge than Silicon", "Phosphorus has vacant d orbitals"],
    0,
    "Phosphorus has a half-filled 3p^3 subshell with high exchange energy and stability, which resists addition of an electron more than Silicon (3p^2)."
  );
  add(
    "Which of the following gaseous ions has the highest electron affinity (i.e. releases the most energy upon gaining an electron)?",
    ["\\text{Na}^+", "\\text{Mg}^{2+}", "\\text{Al}^{3+}", "\\text{K}^+"],
    0,
    "\\text{Al}^{3+} has the highest positive charge density and highest effective nuclear pull, so capturing an electron to become \\text{Al}^{2+} releases the maximum energy (equal to the third ionization energy of Al)."
  );
  add(
    "For the process \\text{Cl}^-(g) \\rightarrow \\text{Cl}(g) + e^-, the enthalpy change is equal to:",
    ["The ionization enthalpy of \\text{Cl}^- ion and positive in sign", "The electron gain enthalpy of \\text{Cl} and negative in sign", "Zero", "Twice the electron affinity of \\text{Cl}"],
    0,
    "The reverse of electron gain (\\text{Cl} + e^- \\rightarrow \\text{Cl}^-) is the ionization of \\text{Cl}^- (\\text{Cl}^- \\rightarrow \\text{Cl} + e^-), which is equal to +349 kJ/mol."
  );
  add(
    "The correct order of negative electron gain enthalpy for the Group 14 elements is:",
    ["\\text{C} > \\text{Si} > \\text{Ge} > \\text{Sn} > \\text{Pb}", "\\text{Si} > \\text{C} > \\text{Ge} > \\text{Sn} > \\text{Pb}", "\\text{Pb} > \\text{Sn} > \\text{Ge} > \\text{Si} > \\text{C}", "\\text{C} > \\text{Ge} > \\text{Si} > \\text{Sn} > \\text{Pb}"],
    1,
    "Values: Si (-134 kJ/mol) > C (-122 kJ/mol) > Ge (-119) > Sn (-107) > Pb (-35). Si is more negative than C due to interelectronic repulsions in the small 2p orbital of Carbon."
  );
  add(
    "Which of the following pairs of elements have positive electron gain enthalpies?",
    ["\\text{Be and He}", "\\text{Li and B}", "\\text{C and N}", "\\text{O and F}"],
    0,
    "Both Beryllium (2s^2) and Helium (1s^2) have fully filled subshells with no tendency to accept an electron, thus having positive \\Delta_{eg} H."
  );
  add(
    "Which of the following is true regarding the electron gain enthalpy of noble gases?",
    ["It has large positive values because the added electron must enter the next higher shell", "It is zero because they are non-reactive", "It is large negative because they are non-metals", "It is negative for lighter noble gases and positive for heavier ones"],
    0,
    "Noble gas atoms have complete valence shells; an added electron must occupy the next higher principal quantum shell (e.g., 3s for Ne), resulting in large positive \\Delta_{eg} H."
  );
  add(
    "An element with high negative electron gain enthalpy and high ionization enthalpy most likely belongs to:",
    ["Halogens (Group 17)", "Alkali metals (Group 1)", "Alkaline earth metals (Group 2)", "Noble gases (Group 18)"],
    0,
    "Halogens have very high ionization energies and the highest negative electron gain enthalpies because they require only one electron to attain noble gas configuration."
  );
  add(
    "In the reaction \\text{X}(g) + e^- \\rightarrow \\text{X}^-(g), if \\Delta H = -328\\text{ kJ mol}^{-1}, element \\text{X} is:",
    ["\\text{F}", "\\text{Cl}", "\\text{Br}", "\\text{I}"],
    0,
    "The electron gain enthalpy of Fluorine is -328 kJ/mol (Chlorine is -349 kJ/mol, Bromine is -325 kJ/mol)."
  );
  add(
    "Which of the following factors does NOT favor a more negative electron gain enthalpy?",
    ["Large atomic radius", "High effective nuclear charge", "Small atomic size", "Absence of interelectronic repulsions in valence shell"],
    0,
    "A large atomic radius places the incoming electron farther from the nucleus, weakening electrostatic attraction and making \\Delta_{eg} H less negative."
  );
  add(
    "The correct sequence of electron gain enthalpy (most negative to least negative) for halogens is:",
    ["\\text{Cl} > \\text{F} > \\text{Br} > \\text{I}", "\\text{F} > \\text{Cl} > \\text{Br} > \\text{I}", "\\text{Cl} > \\text{Br} > \\text{F} > \\text{I}", "\\text{I} > \\text{Br} > \\text{Cl} > \\text{F}"],
    0,
    "Due to 2p repulsions in F, Cl (-349 kJ/mol) > F (-328 kJ/mol) > Br (-325 kJ/mol) > I (-295 kJ/mol)."
  );
  add(
    "Which of the following has an electron gain enthalpy closest to zero?",
    ["\\text{He}", "\\text{Cl}", "\\text{F}", "\\text{O}"],
    0,
    "Helium is a noble gas with completely filled 1s^2 duplet, yielding positive/near-zero electron gain enthalpy (+48 kJ/mol)."
  );
  add(
    "Adding an electron to a neutral gaseous atom is an exothermic process for most elements, except:",
    ["Group 2, Group 18, and Nitrogen", "Group 1 and Group 17", "Group 13 and Group 14", "Transition metals"],
    0,
    "Filled s-subshells (Group 2), filled octets (Group 18), and half-filled p-subshells (Nitrogen) have unfavorable electron capture energetics."
  );
  add(
    "Why does Neon have a more positive electron gain enthalpy (+116 kJ/mol) than Helium (+48 kJ/mol)?",
    ["Adding an electron to Neon requires opening the 3s shell under greater interelectronic screening from 8 valence electrons", "Neon has smaller nuclear charge than Helium", "Helium is an alkali metal", "Neon forms anions readily"],
    0,
    "In Neon, the 10-electron core strongly repels the 11th electron being forced into the 3s subshell."
  );
  add(
    "The electron gain enthalpy of Sulfur is -200 kJ/mol, while that of Oxygen is -141 kJ/mol. This unexpected difference arises because:",
    ["Oxygen has a much smaller atomic size, resulting in high electron density and interelectronic repulsion in the 2p subshell", "Sulfur is a metal", "Oxygen has higher ionization energy", "Sulfur has no empty d orbitals"],
    0,
    "In Oxygen, the added electron enters the small 2p subshell, facing severe repulsions from the other 4 electrons, reducing the exothermicity compared to Sulfur's larger 3p subshell."
  );
  add(
    "What is the value of \\Delta_{eg} H for \\text{H}(g) + e^- \\rightarrow \\text{H}^-(g)?",
    ["-73 kJ/mol (exothermic)", "+73 kJ/mol (endothermic)", "0 kJ/mol", "-349 kJ/mol"],
    0,
    "A hydrogen atom accepts an electron to achieve the stable helium configuration (1s^2), releasing 73 kJ/mol of energy."
  );
  add(
    "Which element among the following has the highest tendency to form an anion in gaseous state?",
    ["\\text{Cl}", "\\text{Na}", "\\text{Mg}", "\\text{Al}"],
    0,
    "Chlorine has the highest exothermic electron gain enthalpy (-349 kJ/mol), making anion formation in the gas phase most favorable."
  );
  add(
    "The electron affinity of an element A is 3.5 eV. The energy released when 1 mole of gaseous A atoms are converted into \\text{A}^- ions is: (1 eV = 96.485 kJ/mol)",
    ["337.7 kJ", "192.5 kJ", "96.5 kJ", "48.2 kJ"],
    0,
    "Energy released = 3.5 \\times 96.485 = 337.7 kJ/mol."
  );
  add(
    "Which of the following processes requires energy absorption (\\Delta H > 0)?",
    ["\\text{S}^-(g) + e^- \\rightarrow \\text{S}^{2-}(g)", "\\text{Cl}(g) + e^- \\rightarrow \\text{Cl}^-(g)", "\\text{Br}(g) + e^- \\rightarrow \\text{Br}^-(g)", "\\text{F}(g) + e^- \\rightarrow \\text{F}^-(g)"],
    0,
    "The second electron gain enthalpy is always endothermic due to inter-electronic repulsions with the negatively charged monovalent ion."
  );
  add(
    "Which of the following statements about electron gain enthalpy is FALSE?",
    ["Second electron gain enthalpy of oxygen is exothermic because octet is completed", "Chlorine has more negative electron gain enthalpy than fluorine", "Noble gases have positive electron gain enthalpies", "Electron gain enthalpy generally becomes more negative across a period"],
    0,
    "Statement 1 is FALSE: The second electron gain enthalpy is strictly endothermic (+780 kJ/mol) due to severe anion-electron electrostatic repulsion."
  );
  add(
    "In which of the following pairs is the magnitude of the negative electron gain enthalpy of the first element greater than the second?",
    ["\\text{Cl, F}", "\\text{O, S}", "\\text{F, Cl}", "\\text{N, P}"],
    0,
    "|\\Delta_{eg} H| for Cl is 349 kJ/mol, which is greater than that of F (328 kJ/mol)."
  );
  add(
    "The electron affinities of \\text{B, C, N, O} follow the order:",
    ["\\text{N} < \\text{B} < \\text{C} < \\text{O}", "\\text{B} < \\text{N} < \\text{C} < \\text{O}", "\\text{N} < \\text{C} < \\text{B} < \\text{O}", "\\text{O} < \\text{C} < \\text{B} < \\text{N}"],
    0,
    "N has half-filled 2p^3 (EA approx 0). For B (2p^1), adding an electron gives 2p^2 (EA = 27 kJ/mol). C (2p^2) gives half-filled 2p^3 (EA = 122 kJ/mol). O gives 2p^5 (EA = 141 kJ/mol). Order: N < B < C < O."
  );
  add(
    "Which among the following configurations has the least tendency to gain an electron?",
    ["[\\text{Ne}] 3s^2 3p^6", "[\\text{Ne}] 3s^2 3p^5", "[\\text{Ne}] 3s^2 3p^4", "[\\text{Ne}] 3s^2 3p^1"],
    0,
    "[\\text{Ne}] 3s^2 3p^6 is Argon, a noble gas with a filled shell that strongly resists electron gain."
  );
  add(
    "The electron gain enthalpy of an atom depends upon:",
    ["Atomic size, effective nuclear charge, and electronic configuration", "Only atomic size", "Only nuclear charge", "Only mass number"],
    0,
    "All three parameters (size, Z_eff, and subshell stability like half-filled or full-filled configurations) determine electron gain enthalpy."
  );
  add(
    "Which element has the lowest (least negative or most positive) electron gain enthalpy in the second period?",
    ["\\text{Ne}", "\\text{Li}", "\\text{Be}", "\\text{B}"],
    0,
    "Neon has the highest positive \\Delta_{eg} H (+116 kJ/mol) due to its stable octet configuration."
  );
  add(
    "Assertion (A): The electron gain enthalpy of Chlorine is more negative than that of Fluorine.\nReason (R): Due to the small size of the Fluorine atom, there are strong interelectronic repulsions in the relatively compact 2p subshell.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Both (A) and (R) are true, and the compact 2p subshell of fluorine causing interelectronic repulsions correctly explains why Chlorine's 3p electron gain is more exothermic.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The second electron gain enthalpy of Oxygen is positive (+780 kJ/mol).\nReason (R): The incoming electron experiences strong electrostatic repulsion from the negatively charged \\text{O}^- ion.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Overcoming the coulombic repulsion between the negatively charged ion and the incoming electron requires energy input. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Noble gases have large positive values of electron gain enthalpy.\nReason (R): In noble gas atoms, all orbitals are completely filled and the added electron has to enter the next higher quantum energy level.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Entering a new shell far from the nucleus without effective attraction makes electron gain endothermic. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Nitrogen has a positive (or nearly zero) electron gain enthalpy.\nReason (R): Nitrogen possesses an extra-stable half-filled 2p^3 electronic configuration.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The half-filled 2p^3 subshell resists electron capture due to loss of exchange energy and spin pairing repulsion. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Alkaline earth metals (Be, Mg, Ca) have positive or near-zero electron gain enthalpies.\nReason (R): Their valence s-orbitals are completely filled (ns^2), and the incoming electron must enter an empty p-orbital of higher energy.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Promoting an electron into a higher subshell requires energy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Electron gain enthalpy of Sulfur is more negative than that of Oxygen.\nReason (R): Oxygen atom has higher electronegativity than Sulfur.",
    ["Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "Both (A) and (R) are true, and (R) is the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Both statements are independently true (S is -200 kJ/mol vs O -141 kJ/mol; O electronegativity is 3.5 vs S 2.5), but the correct explanation is the small size and high electron density in Oxygen's 2p orbital, not electronegativity.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Halogens have the highest negative electron gain enthalpies in their respective periods.\nReason (R): Halogens have ns^2 np^5 configurations and require just one electron to attain the stable octet of noble gases.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Halogens have the highest Z_eff in their periods and acquire a noble gas octet upon gaining an electron, releasing maximum energy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getElectronegativityQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Electronegativity", text, opts, ans, exp, diff, type));

  add(
    "Electronegativity is defined as:",
    ["The qualitative tendency of an atom in a molecule to attract shared pair of electrons towards itself", "The energy released when an isolated atom in gas phase accepts an electron", "The energy required to remove an electron from a gaseous atom", "The distance between the nucleus and the shared pair of electrons"],
    0,
    "Electronegativity (unlike electron gain enthalpy) is not a measurable thermodynamic property of an isolated atom, but a tendency of a bonded atom in a molecule to attract bonding electrons."
  );
  add(
    "Who developed the electronegativity scale based on bond dissociation energies of homonuclear and heteronuclear diatomic molecules?",
    ["Linus Pauling", "Robert Mulliken", "Alfred-Rochow", "Niels Bohr"],
    0,
    "Linus Pauling developed the scale using bond energies: |\\chi_A - \\chi_B| = 0.208 \\sqrt{\\Delta}, where \\Delta = E_{AB} - \\sqrt{E_{AA} \\cdot E_{BB}} in kcal/mol."
  );
  add(
    "The most electronegative element in the periodic table is assigned a Pauling electronegativity value of:",
    ["4.0 for Fluorine", "3.5 for Oxygen", "3.0 for Nitrogen", "4.0 for Chlorine"],
    0,
    "Fluorine is assigned the highest value of 4.0 on the Pauling scale."
  );
  add(
    "On the Mulliken scale, electronegativity (\\chi_M) is calculated as:",
    ["\\chi_M = \\frac{\\text{IE} + \\text{EA}}{2}", "\\chi_M = \\text{IE} - \\text{EA}", "\\chi_M = \\frac{\\text{IE} \\times \\text{EA}}{2}", "\\chi_M = \\sqrt{\\text{IE} \\cdot \\text{EA}}"],
    0,
    "Mulliken defined electronegativity as the arithmetic average of ionization energy (IE) and electron affinity (EA)."
  );
  add(
    "The approximate empirical relationship between the Pauling electronegativity (\\chi_P) and Mulliken electronegativity (\\chi_M in eV) is:",
    ["\\chi_P \\approx \\frac{\\chi_M}{2.8}", "\\chi_P \\approx 2.8 \\chi_M", "\\chi_P \\approx \\frac{\\chi_M}{5.6}", "\\chi_P \\approx \\chi_M + 0.744"],
    0,
    "\\chi_P \\approx \\frac{\\text{IE (eV)} + \\text{EA (eV)}}{5.6} = \\frac{\\chi_M}{2.8}."
  );
  add(
    "According to the Allred-Rochow scale, electronegativity is related to effective nuclear charge (Z_{eff}) and covalent radius (r in \\text{\\AA}) by:",
    ["\\chi = 0.359 \\frac{Z_{\\text{eff}}}{r^2} + 0.744", "\\chi = \\frac{Z_{\\text{eff}}}{r} + 0.208", "\\chi = 0.208 \\frac{Z_{\\text{eff}}^2}{r} + 1.0", "\\chi = \\sqrt{\\frac{Z_{\\text{eff}}}{r^2}}"],
    0,
    "Allred-Rochow defined electronegativity as the electrostatic force exerted by the nucleus on the valence electrons: F \\propto Z_{\\text{eff}}/r^2, giving \\chi = 0.359(Z_{\\text{eff}}/r^2) + 0.744."
  );
  add(
    "Which of the following orders of electronegativity on the Pauling scale is correct?",
    ["\\text{F} > \\text{O} > \\text{N} \\approx \\text{Cl} > \\text{Br} > \\text{C} > \\text{H}", "\\text{F} > \\text{Cl} > \\text{O} > \\text{N} > \\text{C} > \\text{H}", "\\text{O} > \\text{F} > \\text{N} > \\text{Cl} > \\text{H}", "\\text{F} > \\text{O} > \\text{Cl} > \\text{Br} > \\text{N} > \\text{H}"],
    0,
    "Values: F (4.0) > O (3.5) > N (3.04) \\approx Cl (3.16) > Br (2.8) > C (2.5) > H (2.1)."
  );
  add(
    "How does the electronegativity of a carbon atom change with hybridization of its orbitals?",
    ["sp (50% s) > sp^2 (33.3% s) > sp^3 (25% s)", "sp^3 > sp^2 > sp", "sp^2 > sp > sp^3", "Electronegativity is independent of hybridization"],
    0,
    "Electrons in s-orbitals are closer to the nucleus than in p-orbitals. Higher s-character brings valence electrons closer, increasing electronegativity: sp (3.29) > sp^2 (2.75) > sp^3 (2.5)."
  );
  add(
    "Which of the following compounds exhibits the highest carbon-hydrogen bond acidity due to hybridization-induced electronegativity?",
    ["\\text{HC}\\equiv\\text{CH} \\text{ (ethyne)}", "\\text{H}_2\\text{C}=\\text{CH}_2 \\text{ (ethene)}", "\\text{H}_3\\text{C}-\\text{CH}_3 \\text{ (ethane)}", "\\text{CH}_4 \\text{ (methane)}"],
    0,
    "The sp hybridized carbon in ethyne has 50% s-character, conferring highest electronegativity and making the attached terminal hydrogen acidic."
  );
  add(
    "How does electronegativity depend on the oxidation state of an element?",
    ["Electronegativity increases as the oxidation state becomes more positive", "Electronegativity decreases as the oxidation state becomes more positive", "Electronegativity is strictly independent of oxidation state", "Electronegativity is highest in zero oxidation state"],
    0,
    "Higher positive oxidation state means greater loss of electrons, higher Z/e ratio, and stronger pull on shared electrons (e.g., \\text{Fe}^{3+} is more electronegative than \\text{Fe}^{2+})."
  );
  add(
    "Which of the following species has the highest electronegativity?",
    ["\\text{Mn}^{7+}", "\\text{Mn}^{4+}", "\\text{Mn}^{2+}", "\\text{Mn}^{0}"],
    0,
    "With increasing positive oxidation state, the effective nuclear charge on valence electrons increases dramatically. Thus \\text{Mn}^{7+} has the highest electronegativity."
  );
  add(
    "The percentage of ionic character in a covalent bond A-B can be estimated using the Hannay-Smith equation:",
    ["%\\text{ ionic} = 16|\\chi_A - \\chi_B| + 3.5(\\chi_A - \\chi_B)^2", "%\\text{ ionic} = 50|\\chi_A - \\chi_B|", "%\\text{ ionic} = 18|\\chi_A - \\chi_B| + 1.5(\\chi_A - \\chi_B)^2", "%\\text{ ionic} = 100|\\chi_A - \\chi_B|/4"],
    0,
    "The Hannay-Smith equation gives: % ionic character = 16|\\chi_A - \\chi_B| + 3.5(\\chi_A - \\chi_B)^2."
  );
  add(
    "If the electronegativity difference between two bonded atoms is 1.7 on the Pauling scale, the bond is generally considered to have approximately:",
    ["50% ionic character and 50% covalent character", "100% ionic character", "10% ionic character", "75% covalent character"],
    0,
    "According to Pauling, a difference of \\Delta\\chi = 1.7 corresponds to approximately 50% ionic character."
  );
  add(
    "Which of the following bonds has the highest percentage of ionic character?",
    ["\\text{Cs}-\\text{F}", "\\text{Na}-\\text{Cl}", "\\text{H}-\\text{F}", "\\text{C}-\\text{F}"],
    0,
    "Cs has the lowest electronegativity (0.7) and F has the highest (4.0). \\Delta\\chi = 3.3, resulting in over 92% ionic character."
  );
  add(
    "Which of the following elements has an electronegativity almost identical to that of Aluminum (diagonal relationship)?",
    ["Beryllium (Be)", "Lithium (Li)", "Boron (B)", "Magnesium (Mg)"],
    0,
    "Beryllium and Aluminum exhibit a diagonal relationship due to nearly identical charge-to-size ratios (ionic potential) and electronegativities (Be = 1.5, Al = 1.5)."
  );
  add(
    "Lithium exhibits diagonal similarity with Magnesium because:",
    ["Both have similar electronegativities (Li = 1.0, Mg = 1.2) and similar ionic radii", "Both belong to Group 1", "Both have the same electronic configuration", "Both have identical atomic numbers"],
    0,
    "Diagonal neighbors in the periodic table share similar polarizing power (charge/radius) and similar electronegativities."
  );
  add(
    "Which pair of elements has virtually identical electronegativity values of 2.1 on the Pauling scale?",
    ["\\text{H and P}", "\\text{C and H}", "\\text{N and Cl}", "\\text{O and F}"],
    0,
    "Hydrogen (\\chi = 2.1) and Phosphorus (\\chi = 2.1) have nearly identical electronegativities on the Pauling scale, explaining why \\text{PH}_3 is virtually non-polar."
  );
  add(
    "Why does Nitrogen have almost the same electronegativity as Chlorine (approx 3.0), yet Nitrogen forms strong hydrogen bonds while Chlorine does not?",
    ["Nitrogen has a much smaller atomic radius (2nd period) with higher localized electron density than Chlorine (3rd period)", "Chlorine is more metallic than Nitrogen", "Nitrogen is a gas while Chlorine is a solid", "Chlorine does not possess lone pairs"],
    0,
    "Hydrogen bonding requires both high electronegativity and small atomic size. Nitrogen (atomic radius ~70 pm) has concentrated charge density, whereas Chlorine (~99 pm) has diffuse electron density."
  );
  add(
    "Across a period from left to right, electronegativity:",
    ["Increases due to increase in effective nuclear charge and decrease in atomic size", "Decreases due to increase in atomic mass", "Remains constant", "First increases then sharply decreases at group 14"],
    0,
    "As effective nuclear charge increases and atomic radius contracts across a period, the pull on bonding electrons increases steadily."
  );
  add(
    "Down a group in the periodic table, electronegativity:",
    ["Decreases due to addition of extra shells and increased shielding effect", "Increases due to increase in atomic number", "Remains constant", "Fluctuates irregularly"],
    0,
    "Increasing number of inner electron shells increases shielding and increases the distance between the nucleus and bonding electrons, reducing electronegativity."
  );
  add(
    "Which of the following alkali metals is the least electronegative?",
    ["\\text{Cs}", "\\text{Rb}", "\\text{K}", "\\text{Na}"],
    0,
    "Cesium has \\chi = 0.79, the lowest among stable alkali metals."
  );
  add(
    "Which element has the highest electronegativity in Group 15 (Pnictogens)?",
    ["\\text{N}", "\\text{P}", "\\text{As}", "\\text{Bi}"],
    0,
    "Nitrogen is at the top of Group 15 with \\chi = 3.04."
  );
  add(
    "A fundamental difference between electron gain enthalpy and electronegativity is that:",
    ["Electron gain enthalpy is an absolute, measurable thermodynamic quantity of an isolated gaseous atom, whereas electronegativity is a relative property of an atom in a molecule", "Electronegativity is measured in kJ/mol while electron gain enthalpy is dimensionless", "Electron gain enthalpy is always positive while electronegativity is negative", "Electronegativity applies only to noble gases"],
    0,
    "\\Delta_{eg} H has units (kJ/mol or eV) and pertains to isolated gaseous atoms, whereas electronegativity is dimensionless and applies to bonded atoms."
  );
  add(
    "Which property of an element determines whether its oxide is acidic or basic?",
    ["The electronegativity of the element: high electronegativity leads to acidic oxides, low leads to basic oxides", "Only its melting point", "Only the density", "The magnetic moment of the nucleus"],
    0,
    "Elements with low electronegativities (metals) easily donate electron density to form basic ionic oxides (e.g. \\text{Na}_2\\text{O}), while high electronegativity elements (non-metals) form covalent acidic oxides (e.g. \\text{SO}_3)."
  );
  add(
    "The electronegativity values of four elements W, X, Y, and Z are 3.8, 1.0, 2.8, and 1.3 respectively. Which pair will form the most ionic compound?",
    ["X and W", "W and Y", "X and Z", "Y and Z"],
    0,
    "Maximum difference in electronegativity gives maximum ionic character: \\Delta\\chi = 3.8 - 1.0 = 2.8 (between W and X)."
  );
  add(
    "Which of the following bonds has the lowest polarity (dipole moment)?",
    ["\\text{C}-\\text{H}", "\\text{O}-\\text{H}", "\\text{N}-\\text{H}", "\\text{F}-\\text{H}"],
    0,
    "The electronegativity difference for C (2.5) and H (2.1) is only 0.4, making C-H bonds virtually non-polar compared to N-H (0.9), O-H (1.4), and F-H (1.9)."
  );
  add(
    "When moving from Silicon to Chlorine in the 3rd period, the electronegativity values on the Pauling scale change from:",
    ["1.8 to 3.0", "3.0 to 1.8", "0.9 to 1.5", "2.5 to 2.5"],
    0,
    "Si has \\chi = 1.9, P = 2.19, S = 2.58, Cl = 3.16."
  );
  add(
    "Which of the following species has the highest electronegativity?",
    ["\\text{CH}_3^+", "\\text{CH}_3^-", "\\text{CH}_3^\\bullet", "\\text{CH}_4"],
    0,
    "The positively charged carbocation carbon (\\text{CH}_3^+) has an empty orbital, severe electron deficiency, and highest attraction for electrons."
  );
  add(
    "The bond polarity and dipole moment of halogen halides decreases in the order:",
    ["\\text{H-F} > \\text{H-Cl} > \\text{H-Br} > \\text{H-I}", "\\text{H-I} > \\text{H-Br} > \\text{H-Cl} > \\text{H-F}", "\\text{H-Cl} > \\text{H-F} > \\text{H-Br} > \\text{H-I}", "\\text{H-F} > \\text{H-I} > \\text{H-Cl} > \\text{H-Br}"],
    0,
    "As electronegativity difference \\Delta\\chi decreases from H-F (1.9) down to H-I (0.4), the dipole moment decreases progressively: HF (1.78 D) > HCl (1.07 D) > HBr (0.79 D) > HI (0.38 D)."
  );
  add(
    "In the Pauling formula |\\chi_A - \\chi_B| = 0.208\\sqrt{\\Delta}, the quantity \\Delta is known as:",
    ["Ionic-resonance energy", "Lattice energy", "Electron affinity", "Solvation enthalpy"],
    0,
    "\\Delta represents the extra ionic resonance stabilization energy of the polar bond A-B above the purely covalent bond energy."
  );
  add(
    "Which element has an electronegativity value of approximately 2.5 on the Pauling scale?",
    ["\\text{Carbon (C)}", "\\text{Fluorine (F)}", "\\text{Oxygen (O)}", "\\text{Lithium (Li)}"],
    0,
    "Carbon has a Pauling electronegativity of 2.5 (Sulfur and Iodine are also close to 2.5)."
  );
  add(
    "The order of electronegativity of halogens is:",
    ["\\text{F} > \\text{Cl} > \\text{Br} > \\text{I}", "\\text{Cl} > \\text{F} > \\text{Br} > \\text{I}", "\\text{F} > \\text{Br} > \\text{Cl} > \\text{I}", "\\text{I} > \\text{Br} > \\text{Cl} > \\text{F}"],
    0,
    "Halogen electronegativities strictly decrease down the group: F (4.0) > Cl (3.16) > Br (2.85) > I (2.66)."
  );
  add(
    "Which element among the following has the lowest electronegativity?",
    ["\\text{Francium (Fr) / Cesium (Cs)}", "\\text{Fluorine (F)}", "\\text{Helium (He)}", "\\text{Oxygen (O)}"],
    0,
    "Alkali metals at the bottom left of the periodic table have the lowest electronegativity (approx 0.7)."
  );
  add(
    "Which of the following compounds has the most covalent character according to Fajan's rules and electronegativity considerations?",
    ["\\text{LiI}", "\\text{LiF}", "\\text{NaF}", "\\text{KF}"],
    0,
    "Small cation (\\text{Li}^+) and large polarizable anion (\\text{I}^-) with close electronegativities confer maximum covalent character."
  );
  add(
    "An atom with small size, high ionization energy, and high electron gain enthalpy will invariably possess:",
    ["High electronegativity", "Low electronegativity", "Metallic character", "Strong reducing properties"],
    0,
    "Small size and strong attraction for valence electrons mean both high IE, high EA, and high electronegativity."
  );
  add(
    "On the Pauling scale, the electronegativity of Oxygen is:",
    ["3.5", "4.0", "3.0", "2.5"],
    0,
    "Oxygen is the second most electronegative element in the periodic table with \\chi = 3.5."
  );
  add(
    "Which of the following sets of elements is arranged in order of increasing electronegativity?",
    ["\\text{Si} < \\text{P} < \\text{S} < \\text{Cl}", "\\text{Cl} < \\text{S} < \\text{P} < \\text{Si}", "\\text{P} < \\text{Si} < \\text{S} < \\text{Cl}", "\\text{Si} < \\text{S} < \\text{P} < \\text{Cl}"],
    0,
    "Across Period 3: Si (1.9) < P (2.19) < S (2.58) < Cl (3.16)."
  );
  add(
    "Which factor causes the electronegativity of \\text{Tl} (1.62) to be slightly higher than that of \\text{In} (1.57)?",
    ["Lanthanoid contraction and poor shielding by 4f electrons in Thallium", "Inert gas filling", "Smaller atomic number of Thallium", "Large atomic radius of Thallium"],
    0,
    "The 14 intervening 4f electrons in Thallium provide poor screening, leading to increased effective nuclear charge."
  );
  add(
    "The dipole moment of \\text{NF}_3 is much smaller than that of \\text{NH}_3 because:",
    ["In \\text{NF}_3, the highly electronegative Fluorine atoms pull electron density opposite to the lone pair dipole, partially canceling it", "Nitrogen is more electronegative in \\text{NF}_3", "\\text{NH}_3 is planar while \\text{NF}_3$ is pyramidal", "\\text{NF}_3 has no lone pair"],
    0,
    "In \\text{NH}_3, the orbital dipole of the lone pair and three N-H bond dipoles reinforce each other. In \\text{NF}_3, F is more electronegative than N, so the N-F dipoles oppose the lone pair dipole."
  );
  add(
    "Which of the following relationships correctly gives the partial charge \\delta on bonded atom A?",
    ["\\delta \\propto (\\chi_B - \\chi_A)", "\\delta \\propto (\\chi_A + \\chi_B)", "\\delta = 0", "\\delta = 1"],
    0,
    "The unequal sharing of the electron pair creates partial charges proportional to the electronegativity difference."
  );
  add(
    "Assertion (A): Fluorine is the most electronegative element in the periodic table.\nReason (R): Fluorine has the smallest atomic size and highest effective nuclear charge among elements with valence p-orbitals in period 2.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Small size and high effective nuclear charge maximize Fluorine's attraction for shared bonding electron pairs. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Carbon in ethyne is more electronegative than carbon in ethene.\nReason (R): The hybrid orbital in ethyne is sp (50% s-character), which is closer to the nucleus than the sp^2 hybrid orbital in ethene (33.3% s-character).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Higher s-character concentrates valence electron density closer to the positive nucleus, elevating electronegativity. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Nitrogen and Chlorine have nearly the same electronegativity (~3.0 on Pauling scale).\nReason (R): Both atoms have the same atomic radius and the same effective nuclear charge.",
    ["(A) is true, but (R) is false", "Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is false, but (R) is true"],
    0,
    "(A) is true: both have \\chi \\approx 3.0. But (R) is false: Nitrogen has atomic radius 70 pm and is in period 2, while Chlorine has atomic radius 99 pm and is in period 3 with different Z_eff.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{SnCl}_4 is more covalent than \\text{SnCl}_2.\nReason (R): Higher oxidation state of metal ion (+4 vs +2) leads to greater polarizing power and higher electronegativity of the central atom.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "According to Fajan's rules, higher positive charge produces high polarizing power, pulling electron cloud from chloride and increasing covalency. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Electronegativity is not a constant property of an element.\nReason (R): The electronegativity of an atom varies depending on its hybridization state, oxidation state, and the nature of substituents bonded to it.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Electronegativity is an environmental and bonding-state-dependent quantity. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Cesium has the lowest ionization enthalpy and the lowest electronegativity among stable alkali metals.\nReason (R): Cesium has the largest atomic size and maximum shielding of valence electrons by inner shells in its group.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Large size and massive shielding weaken nuclear pull on outer electrons, minimizing both IE and electronegativity. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The bond between Hydrogen and Iodine has very low polarity.\nReason (R): The electronegativities of Hydrogen (2.1) and Iodine (2.5) are very close to each other.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The small electronegativity difference (\\Delta\\chi = 0.4) results in predominantly covalent bonding with small dipole moment. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getTrendsInPeriodicPropertiesQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Trends in periodic properties", text, opts, ans, exp, diff, type));

  add(
    "Across a period from left to right, the nature of oxides changes from:",
    ["Basic \\rightarrow Amphoteric \\rightarrow Acidic", "Acidic \\rightarrow Amphoteric \\rightarrow Basic", "Neutral \\rightarrow Basic \\rightarrow Acidic", "Amphoteric \\rightarrow Acidic \\rightarrow Basic"],
    0,
    "For example, in Period 3: \\text{Na}_2\\text{O} (strongly basic), \\text{MgO} (basic), \\text{Al}_2\\text{O}_3 (amphoteric), \\text{SiO}_2 (weakly acidic), \\text{P}_4\\text{O}_{10} (acidic), \\text{SO}_3 (strongly acidic), \\text{Cl}_2\\text{O}_7 (very strongly acidic)."
  );
  add(
    "Which of the following is an amphoteric oxide?",
    ["\\text{Al}_2\\text{O}_3", "\\text{Na}_2\\text{O}", "\\text{SO}_3", "\\text{CO}"],
    0,
    "\\text{Al}_2\\text{O}_3 reacts with both acids (giving \\text{Al}^{3+}) and bases (giving aluminate \\text{[Al(OH)}_4]^-), making it amphoteric."
  );
  add(
    "Which of the following sets contains ONLY neutral oxides?",
    ["\\text{CO, NO, N}_2\\text{O}", "\\text{CO}_2\\text{, SO}_2\\text{, NO}_2", "\\text{Na}_2\\text{O, CaO, BaO}", "\\text{Al}_2\\text{O}_3\\text{, ZnO, PbO}"],
    0,
    "\\text{CO}, \\text{NO}, and \\text{N}_2\\text{O} are neutral oxides that show neither acidic nor basic behavior with water, acids, or bases."
  );
  add(
    "Which of the following oxides is most acidic in nature?",
    ["\\text{Cl}_2\\text{O}_7", "\\text{SO}_3", "\\text{P}_4\\text{O}_{10}", "\\text{SiO}_2"],
    0,
    "Acidic character of oxides increases across a period with increasing electronegativity and oxidation state. In \\text{Cl}_2\\text{O}_7, Chlorine is in its highest oxidation state (+7), making it the most acidic oxide."
  );
  add(
    "Which of the following hydroxides is amphoteric?",
    ["\\text{Be(OH)}_2", "\\text{Mg(OH)}_2", "\\text{Ca(OH)}_2", "\\text{Ba(OH)}_2"],
    0,
    "Unlike the basic hydroxides of other alkaline earth metals, \\text{Be(OH)}_2 is amphoteric, dissolving in both acids and excess alkali."
  );
  add(
    "The correct order of acidic strength of oxyacids of chlorine is:",
    ["\\text{HClO}_4 > \\text{HClO}_3 > \\text{HClO}_2 > \\text{HClO}", "\\text{HClO} > \\text{HClO}_2 > \\text{HClO}_3 > \\text{HClO}_4", "\\text{HClO}_3 > \\text{HClO}_4 > \\text{HClO}_2 > \\text{HClO}", "\\text{HClO}_4 > \\text{HClO}_2 > \\text{HClO}_3 > \\text{HClO}"],
    0,
    "With increasing oxidation state of Chlorine (+7 in \\text{HClO}_4 to +1 in \\text{HClO}), the conjugate base anion has more resonance stabilization and the Cl-O bond becomes more electron-withdrawing, weakening the O-H bond."
  );
  add(
    "The acidic strength of the hydrogen halides increases in the order:",
    ["\\text{HF} < \\text{HCl} < \\text{HBr} < \\text{HI}", "\\text{HI} < \\text{HBr} < \\text{HCl} < \\text{HF}", "\\text{HCl} < \\text{HF} < \\text{HBr} < \\text{HI}", "\\text{HF} < \\text{HI} < \\text{HCl} < \\text{HBr}"],
    0,
    "Down Group 17, the H-X bond length increases and H-X bond dissociation energy decreases sharply (\\text{HF} = 565, \\text{HI} = 295 kJ/mol), making HI the strongest acid."
  );
  add(
    "The thermal stability of Group 16 hydrides decreases in the order:",
    ["\\text{H}_2\\text{O} > \\text{H}_2\\text{S} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te}", "\\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S} > \\text{H}_2\\text{O}", "\\text{H}_2\\text{S} > \\text{H}_2\\text{O} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te}", "\\text{H}_2\\text{O} > \\text{H}_2\\text{Te} > \\text{H}_2\\text{S} > \\text{H}_2\\text{Se}"],
    0,
    "As the central atom increases in size down the group, overlap of the orbital with H 1s weakens, decreasing E-H bond dissociation energy and thermal stability."
  );
  add(
    "The reducing power of Group 15 hydrides increases in the order:",
    ["\\text{NH}_3 < \\text{PH}_3 < \\text{AsH}_3 < \\text{SbH}_3 < \\text{BiH}_3", "\\text{BiH}_3 < \\text{SbH}_3 < \\text{AsH}_3 < \\text{PH}_3 < \\text{NH}_3", "\\text{NH}_3 < \\text{AsH}_3 < \\text{PH}_3 < \\text{SbH}_3", "\\text{PH}_3 < \\text{NH}_3 < \\text{SbH}_3 < \\text{BiH}_3"],
    0,
    "Because the E-H bond strength decreases down the group, the ease of releasing hydrogen increases. \\text{BiH}_3 is the strongest reducing agent and \\text{NH}_3 is a mild reducing agent."
  );
  add(
    "The basic strength of Group 15 hydrides decreases down the group in the order:",
    ["\\text{NH}_3 > \\text{PH}_3 > \\text{AsH}_3 > \\text{SbH}_3 > \\text{BiH}_3", "\\text{BiH}_3 > \\text{SbH}_3 > \\text{AsH}_3 > \\text{PH}_3 > \\text{NH}_3", "\\text{PH}_3 > \\text{NH}_3 > \\text{AsH}_3 > \\text{SbH}_3", "\\text{NH}_3 > \\text{AsH}_3 > \\text{PH}_3 > \\text{SbH}_3"],
    0,
    "In \\text{NH}_3, the lone pair occupies a compact 2p-dominated sp^3 orbital with high electron density. As central atom size increases down the group, the lone pair becomes diffuse over a large volume, diminishing Lewis basicity."
  );
  add(
    "The maximum oxidation state exhibited by an element towards oxygen is generally equal to:",
    ["Its group number (for groups 1-7) or (group number - 10) for p-block elements", "Always +8", "Always equal to the number of paired electrons", "Its principal quantum number"],
    0,
    "For example, Group 14 (C, Si) shows +4, Group 15 (P) shows +5 in \\text{P}_4\\text{O}_{10}, Group 16 (S) shows +6 in \\text{SO}_3, and Group 17 (Cl) shows +7 in \\text{Cl}_2\\text{O}_7."
  );
  add(
    "The maximum covalency of second period elements (such as Boron, Carbon, Nitrogen, Oxygen) is strictly limited to 4 because:",
    ["They have only four valence orbitals (one 2s and three 2p) and no vacant d-orbitals", "They have small nuclear charge", "They have 8 valence electrons", "Their ionization energy is low"],
    0,
    "Second period elements lack vacant d-orbitals in their valence shell (n = 2), restricting expansion of octet. Thus Nitrogen forms \\text{NCl}_3 but cannot form \\text{NCl}_5."
  );
  add(
    "Why does Phosphorus form \\text{PCl}_5 while Nitrogen cannot form \\text{NCl}_5?",
    ["Phosphorus has vacant 3d-orbitals available to expand its coordination number and octet, whereas Nitrogen has no d-orbitals in the n = 2 shell", "Phosphorus is less electronegative than Nitrogen", "Nitrogen is a gas while Phosphorus is a solid", "Nitrogen cannot bond with Chlorine"],
    0,
    "Expansion of valence shell beyond an octet requires energetically accessible d-orbitals, which exist in Phosphorus (3d) but not in Nitrogen."
  );
  add(
    "Which of the following elements exhibits an inert pair effect prominently?",
    ["\\text{Pb}", "\\text{C}", "\\text{Si}", "\\text{Ge}"],
    0,
    "In heavy p-block elements (like Pb, Bi, Tl), the valence s-electrons (6s^2) are held tightly by the nucleus due to poor shielding by intervening 4f and 5d electrons, resisting participation in bonding."
  );
  add(
    "Due to the inert pair effect, the most stable oxidation state of Thallium (Tl) and Lead (Pb) are respectively:",
    ["+1 and +2", "+3 and +4", "+1 and +4", "+3 and +2"],
    0,
    "The lower oxidation state (group valence minus 2) becomes progressively more stable down the group: Tl forms stable +1 (rather than +3) and Pb forms stable +2 (rather than +4)."
  );
  add(
    "Which of the following compounds is the strongest oxidizing agent?",
    ["\\text{PbO}_2", "\\text{SnO}_2", "\\text{GeO}_2", "\\text{SiO}_2"],
    0,
    "Due to the inert pair effect, \\text{Pb}^{2+} is much more stable than \\text{Pb}^{4+}. Hence \\text{PbO}_2 readily gains 2 electrons to reduce to \\text{Pb}^{2+}, acting as a powerful oxidizing agent."
  );
  add(
    "In contrast to \\text{Pb}^{4+}, \\text{Sn}^{2+} compounds act as strong:",
    ["Reducing agents", "Oxidizing agents", "Lewis bases only", "Neutral salts"],
    0,
    "For Tin, the +4 state is more stable than +2. Thus \\text{Sn}^{2+} readily loses two electrons to oxidize to \\text{Sn}^{4+}, functioning as a reducing agent."
  );
  add(
    "Which of the following oxides is basic?",
    ["\\text{BaO}", "\\text{SO}_2", "\\text{SiO}_2", "\\text{N}_2\\text{O}_5"],
    0,
    "Barium is an electropositive alkaline earth metal; \\text{BaO} dissolves in water to form the strong base \\text{Ba(OH)}_2."
  );
  add(
    "Which of the following pairs contains an amphoteric oxide and an acidic oxide respectively?",
    ["\\text{ZnO and SO}_3", "\\text{Na}_2\\text{O and CO}", "\\text{CaO and SiO}_2", "\\text{Al}_2\\text{O}_3\\text{ and MgO}"],
    0,
    "\\text{ZnO} is amphoteric (reacts with both acids and bases) and \\text{SO}_3 is acidic."
  );
  add(
    "The metallic character of elements in the periodic table:",
    ["Decreases across a period from left to right and increases down a group", "Increases across a period and decreases down a group", "Increases both across a period and down a group", "Decreases both across a period and down a group"],
    0,
    "Electropositive/metallic nature is favored by lower ionization energy and larger atomic radius, which increases down a group and decreases across a period."
  );
  add(
    "Which of the following elements has the greatest metallic character?",
    ["\\text{Cs}", "\\text{Na}", "\\text{Mg}", "\\text{Be}"],
    0,
    "Cesium has the lowest ionization enthalpy and largest atomic size, readily losing its valence electron to display maximum metallic character."
  );
  add(
    "Which of the following elements has the strongest non-metallic character?",
    ["\\text{F}", "\\text{O}", "\\text{N}", "\\text{Cl}"],
    0,
    "Fluorine has the highest electronegativity, small atomic radius, and strong electron affinity, representing maximum non-metallic character."
  );
  add(
    "The diagonal relationship between Lithium and Magnesium is manifested in which of the following properties?",
    ["Both form nitrides (\\text{Li}_3\\text{N} and \\text{Mg}_3\\text{N}_2) by direct combination with nitrogen", "Both form superoxides", "Both carbonates are thermally stable and do not decompose on heating", "Both form water-soluble carbonates"],
    0,
    "Unlike other alkali metals, Lithium directly combines with atmospheric nitrogen to form \\text{Li}_3\\text{N}, just as Magnesium forms \\text{Mg}_3\\text{N}_2."
  );
  add(
    "Which of the following hydroxides is insoluble in water and decomposes upon heating into its oxide, resembling Magnesium hydroxide?",
    ["\\text{LiOH}", "\\text{NaOH}", "\\text{KOH}", "\\text{CsOH}"],
    0,
    "\\text{LiOH} decomposes on heating to \\text{Li}_2\\text{O} and \\text{H}_2\\text{O}, showing diagonal resemblance to \\text{Mg(OH)}_2, whereas other alkali metal hydroxides sublime/melt without decomposition."
  );
  add(
    "Which of the following halogens is the strongest oxidizing agent in aqueous solution?",
    ["\\text{F}_2", "\\text{Cl}_2", "\\text{Br}_2", "\\text{I}_2"],
    0,
    "Standard reduction potential \\text{E}^\\circ for \\text{F}_2/\\text{F}^- is +2.87 V (highest in chemistry), driven by low bond dissociation enthalpy of \\text{F}_2 and immense hydration enthalpy of \\text{F}^-."
  );
  add(
    "The oxidizing ability of halogens decreases in the order:",
    ["\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2", "\\text{I}_2 > \\text{Br}_2 > \\text{Cl}_2 > \\text{F}_2", "\\text{Cl}_2 > \\text{F}_2 > \\text{Br}_2 > \\text{I}_2", "\\text{Br}_2 > \\text{Cl}_2 > \\text{F}_2 > \\text{I}_2"],
    0,
    "\\text{F}_2 (+2.87 V) > \\text{Cl}_2 (+1.36 V) > \\text{Br}_2 (+1.09 V) > \\text{I}_2 (+0.54 V)."
  );
  add(
    "Why does Lithium have the most negative standard electrode potential (E^\\circ = -3.04 V) among all alkali metals?",
    ["Its exceptionally high hydration enthalpy due to very small ionic radius of \\text{Li}^+ overcompensates for its high ionization enthalpy", "It has the lowest ionization enthalpy", "It has the highest sublimation enthalpy", "It forms covalent bonds readily"],
    0,
    "\\Delta H_{\\text{hydration}} \\propto 1/r. \\text{Li}^+ has immense hydration enthalpy (-544 kJ/mol), making \\text{Li}(s) \\rightarrow \\text{Li}^+(aq) + e^- thermodynamically most favorable."
  );
  add(
    "The boiling points of hydrides of Group 16 elements follow the order:",
    ["\\text{H}_2\\text{O} > \\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S}", "\\text{H}_2\\text{O} > \\text{H}_2\\text{S} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te}", "\\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S} > \\text{H}_2\\text{O}", "\\text{H}_2\\text{S} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te} > \\text{H}_2\\text{O}"],
    0,
    "\\text{H}_2\\text{O} has an abnormally high boiling point (373 K) due to extensive intermolecular hydrogen bonding. For the remaining hydrides, van der Waals forces increase with molar mass: \\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S}."
  );
  add(
    "The correct order of boiling points for Group 15 hydrides is:",
    ["\\text{BiH}_3 > \\text{SbH}_3 > \\text{NH}_3 > \\text{AsH}_3 > \\text{PH}_3", "\\text{NH}_3 > \\text{PH}_3 > \\text{AsH}_3 > \\text{SbH}_3 > \\text{BiH}_3", "\\text{BiH}_3 > \\text{NH}_3 > \\text{SbH}_3 > \\text{AsH}_3 > \\text{PH}_3", "\\text{PH}_3 < \\text{AsH}_3 < \\text{NH}_3 < \\text{SbH}_3 < \\text{BiH}_3"],
    0,
    "\\text{NH}_3 has intermolecular H-bonding, raising its boiling point above \\text{PH}_3 and \\text{AsH}_3. However, massive van der Waals dispersion forces make \\text{BiH}_3 and \\text{SbH}_3 boil at even higher temperatures: \\text{BiH}_3 > \\text{SbH}_3 > \\text{NH}_3 > \\text{AsH}_3 > \\text{PH}_3."
  );
  add(
    "Which of the following compounds exhibits p\\pi - p\\pi multiple bonding readily?",
    ["\\text{CO}_2", "\\text{SiO}_2", "\\text{GeO}_2", "\\text{SnO}_2"],
    0,
    "Second period elements (C, N, O) have small atomic size and good lateral orbital overlap to form stable p\\pi - p\\pi multiple bonds (as in O=C=O). Heavier congeners (like Si) form giant network 3D single-bonded solids."
  );
  add(
    "Why is \\text{N}_2 a gas composed of diatomic molecules while Phosphorus exists as \\text{P}_4 solid?",
    ["Nitrogen forms strong p\\pi - p\\pi multiple bonds (N\\equiv N) due to small atomic size, whereas Phosphorus forms single P-P bonds due to poor 3p-3p lateral overlap", "Nitrogen has higher atomic mass than Phosphorus", "Phosphorus has no valence electrons", "Nitrogen is more metallic than Phosphorus"],
    0,
    "The small 2p orbitals of Nitrogen overlap sideways efficiently to form a stable triple bond, while diffuse 3p orbitals in Phosphorus cannot form strong \\pi-bonds, favoring single P-P bonds in a tetrahedral \\text{P}_4 unit."
  );
  add(
    "Which of the following elements has the highest catenation ability?",
    ["Carbon", "Silicon", "Germanium", "Tin"],
    0,
    "Carbon has high C-C bond dissociation energy (348 kJ/mol) and small size, enabling extensive chains, branched structures, and rings."
  );
  add(
    "The acidic character of oxides of nitrogen increases in the order:",
    ["\\text{N}_2\\text{O} < \\text{NO} < \\text{N}_2\\text{O}_3 < \\text{NO}_2 < \\text{N}_2\\text{O}_5", "\\text{N}_2\\text{O}_5 < \\text{NO}_2 < \\text{N}_2\\text{O}_3 < \\text{NO} < \\text{N}_2\\text{O}", "\\text{NO} < \\text{N}_2\\text{O} < \\text{NO}_2 < \\text{N}_2\\text{O}_3 < \\text{N}_2\\text{O}_5", "\\text{N}_2\\text{O}_3 < \\text{NO}_2 < \\text{N}_2\\text{O}_5 < \\text{NO} < \\text{N}_2\\text{O}"],
    0,
    "\\text{N}_2\\text{O} (+1) and \\text{NO} (+2) are neutral. For higher oxides, acidic nature increases with oxidation state: \\text{N}_2\\text{O}_3 (+3) < \\text{NO}_2 (+4) < \\text{N}_2\\text{O}_5 (+5)."
  );
  add(
    "Which of the following compounds has the highest thermal stability?",
    ["\\text{HF}", "\\text{HCl}", "\\text{HBr}", "\\text{HI}"],
    0,
    "HF has the shortest bond length and highest bond dissociation energy (565 kJ/mol), making it the most thermally stable hydrogen halide."
  );
  add(
    "The stability of the +6 oxidation state decreases while the stability of the +4 oxidation state increases down Group 16 in the order:",
    ["\\text{S} > \\text{Se} > \\text{Te} > \\text{Po}", "\\text{Po} > \\text{Te} > \\text{Se} > \\text{S}", "\\text{Se} > \\text{S} > \\text{Te} > \\text{Po}", "\\text{Te} > \\text{Po} > \\text{Se} > \\text{S}"],
    0,
    "Due to the inert pair effect, the stability of the highest oxidation state (+6) decreases and that of the +4 state increases down the group."
  );
  add(
    "Which of the following oxides is purely basic?",
    ["\\text{CrO}", "\\text{Cr}_2\\text{O}_3", "\\text{CrO}_3", "\\text{Al}_2\\text{O}_3"],
    0,
    "In lower oxidation state (+2), \\text{CrO} is basic. \\text{Cr}_2\\text{O}_3 (+3) is amphoteric, and \\text{CrO}_3 (+6) is strongly acidic."
  );
  add(
    "Transition metal oxides in their highest oxidation states (e.g., \\text{Mn}_2\\text{O}_7, \\text{CrO}_3) are:",
    ["Acidic and covalent", "Basic and ionic", "Amphoteric and ionic", "Neutral and gaseous"],
    0,
    "In high oxidation states, high polarizing power draws valence electrons into covalent bonds, and these oxides dissolve in water to form strong acids (e.g. \\text{HMnO}_4, \\text{H}_2\\text{CrO}_4)."
  );
  add(
    "Which of the following elements does NOT show variable oxidation states in its compounds?",
    ["\\text{Scandium (Sc)}", "\\text{Titanium (Ti)}", "\\text{Vanadium (V)}", "\\text{Manganese (Mn)}"],
    0,
    "Scandium ($Z = 21, [\\text{Ar}] 3d^1 4s^2$) loses all three valence electrons to attain the stable argon core, showing only the +3 oxidation state."
  );
  add(
    "The hydration enthalpy of alkaline earth metal cations decreases down the group as:",
    ["\\text{Be}^{2+} > \\text{Mg}^{2+} > \\text{Ca}^{2+} > \\text{Sr}^{2+} > \\text{Ba}^{2+}", "\\text{Ba}^{2+} > \\text{Sr}^{2+} > \\text{Ca}^{2+} > \\text{Mg}^{2+} > \\text{Be}^{2+}", "\\text{Mg}^{2+} > \\text{Be}^{2+} > \\text{Ca}^{2+} > \\text{Ba}^{2+}", "\\text{Ca}^{2+} > \\text{Mg}^{2+} > \\text{Be}^{2+} > \\text{Ba}^{2+}"],
    0,
    "Hydration enthalpy is inversely proportional to ionic radius: \\Delta H_{\\text{hyd}} \\propto z/r. \\text{Be}^{2+} has the smallest radius and highest hydration enthalpy."
  );
  add(
    "Which element forms an oxide that reacts with both hydrochloric acid and sodium hydroxide aqueous solution?",
    ["Zinc (Zn)", "Magnesium (Mg)", "Calcium (Ca)", "Carbon (C)"],
    0,
    "Zinc forms ZnO, which is amphoteric: \\text{ZnO} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2\\text{O} and \\text{ZnO} + 2\\text{NaOH} + \\text{H}_2\\text{O} \\rightarrow \\text{Na}_2\\text{[Zn(OH)}_4]."
  );
  add(
    "Assertion (A): \\text{Al}_2\\text{O}_3 is an amphoteric oxide.\nReason (R): It reacts with both acidic reagents (like \\text{HCl}) and basic reagents (like aqueous \\text{NaOH}) to form respective salts.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "An amphoteric oxide exhibits dual chemical reactivity with both strong acids and strong bases. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{HI} is a stronger acid than \\text{HF} in aqueous solution.\nReason (R): The H-I bond dissociation energy is significantly lower than that of the H-F bond due to larger size of the Iodine atom.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Lower bond dissociation enthalpy facilitates rapid proton release in water. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Second period elements display anomalous chemical properties compared to heavier congeners in their respective groups.\nReason (R): Second period elements have exceptionally small size, high electronegativity, high charge/radius ratio, and lack vacant d-orbitals.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "These four factors define the anomalous behavior of head elements (Li, Be, B, C, N, O, F). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{PbO}_2 is a powerful oxidizing agent.\nReason (R): Due to the inert pair effect, the +2 oxidation state of Lead is thermodynamically much more stable than the +4 state.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Lead in +4 state readily accepts two electrons to become \\text{Pb}^{2+}. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Carbon dioxide (\\text{CO}_2) is a gas while Silicon dioxide (\\text{SiO}_2) is a high-melting three-dimensional network solid.\nReason (R): Carbon readily forms stable p\\pi - p\\pi multiple bonds with oxygen, whereas Silicon cannot form strong \\pi-bonds and instead forms a network of Si-O single bonds.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Efficient lateral 2p-2p overlap allows carbon to form discrete linear O=C=O molecules, whereas Si forms a covalent lattice. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{Li} is the strongest reducing agent in aqueous solution among alkali metals.\nReason (R): Lithium has the highest sublimation energy among alkali metals.",
    ["(A) is true, but (R) is false", "Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is false, but (R) is true"],
    0,
    "(A) is true: \\text{E}^\\circ = -3.04 V. (R) is true that Li has high sublimation energy, but this opposes oxidation; it is the immense hydration enthalpy of \\text{Li}^+ that drives the reduction potential to be so negative. Thus (R) is not the correct explanation, or rather (A) is true, (R) is true but (R) is NOT the explanation.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The acidic strength of oxyacids of chlorine follows the order \\text{HClO} < \\text{HClO}_2 < \\text{HClO}_3 < \\text{HClO}_4.\nReason (R): With the increase in the number of oxygen atoms attached to chlorine, the negative charge in the conjugate base is increasingly dispersed over more oxygen atoms through resonance.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The perchlorate ion \\text{ClO}_4^- has 4 equivalent resonance structures dispersing the negative charge extensively, stabilizing the conjugate base and making \\text{HClO}_4 the strongest acid. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getElectronGainEnthalpyQuestions,
  getElectronegativityQuestions,
  getTrendsInPeriodicPropertiesQuestions
};
