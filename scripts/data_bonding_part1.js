// Chemical Bonding and Molecular Structure - Part 1
// Subtopics:
// 1. Ionic and covalent bonds (47 questions)
// 2. Resonance and formal charge (47 questions)

function createQ(subTopic, question, options, correctIndex, explanation, difficulty = "Medium", questionType = "MCQ") {
  return {
    question,
    options,
    correctAnswer: options[correctIndex],
    correctOption: correctIndex,
    explanation,
    subject: "Chemistry",
    chapter: "Chemical Bonding and Molecular Structure",
    subTopic,
    difficulty,
    questionType,
    type: questionType === "ASSERTION_REASON" ? "assertion-reason" : "multiple-choice",
    source: "JEE Main & NEET Chapter Bank",
    targetExams: ["JEE Main", "NEET"]
  };
}

function getIonicAndCovalentBondsQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Ionic and covalent bonds", text, opts, ans, exp, diff, type));

  add(
    "Which of the following compounds is an example of an incomplete octet (electron deficient molecule)?",
    ["\\text{BCl}_3", "\\text{CH}_4", "\\text{NH}_3", "\\text{H}_2\\text{O}"],
    0,
    "In \\text{BCl}_3, the central Boron atom is surrounded by only 6 valence electrons (3 shared pairs), forming an incomplete octet."
  );
  add(
    "Which of the following species possesses an expanded octet (hypervalent molecule)?",
    ["\\text{SF}_6", "\\text{CH}_4", "\\text{NH}_3", "\\text{BeCl}_2"],
    0,
    "In \\text{SF}_6, Sulfur is surrounded by 6 bonding pairs (12 valence electrons), expanding its octet using available 3d orbitals."
  );
  add(
    "Which of the following molecules is an odd-electron molecule that does NOT obey the octet rule?",
    ["\\text{NO}", "\\text{CO}_2", "\\text{SO}_2", "\\text{H}_2\\text{O}"],
    0,
    "Nitric oxide (\\text{NO}) has a total of 11 valence electrons (5 from N + 6 from O), containing an unpaired odd electron and violating the octet rule."
  );
  add(
    "Which combination of properties favors the formation of an ionic bond between two atoms A and B?",
    ["Low ionization enthalpy of A, high negative electron gain enthalpy of B, and high lattice enthalpy", "High ionization enthalpy of A and low electron gain enthalpy of B", "Low ionization enthalpy of A and low lattice enthalpy", "High ionization enthalpy of A and high electronegativity of A"],
    0,
    "An ionic bond forms most readily when the metal easily loses an electron (low IE), the non-metal easily gains an electron (large negative \\Delta_{eg} H), and the crystal lattice releases high electrostatic lattice energy."
  );
  add(
    "In the Born-Haber cycle for the formation of \\text{NaCl}(s), the enthalpy of formation (\\Delta H_f^\\circ) is related to lattice enthalpy (U) by:",
    ["\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + \\frac{1}{2}\\Delta H_{\\text{diss}} + \\text{IE} + \\Delta_{eg}H - U", "\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} - \\text{IE} + U", "\\Delta H_f^\\circ = U - \\text{IE} - \\Delta_{eg}H", "\\Delta H_f^\\circ = \\Delta H_{\\text{diss}} + U"],
    0,
    "Born-Haber cycle: \\Delta H_f^\\circ = \\Delta H_{\\text{sub}}(\\text{Na}) + \\text{IE}(\\text{Na}) + \\frac{1}{2}\\Delta H_{\\text{diss}}(\\text{Cl}_2) + \\Delta_{eg}H(\\text{Cl}) - U_L."
  );
  add(
    "Which of the following ionic compounds has the highest lattice enthalpy?",
    ["\\text{MgO}", "\\text{NaCl}", "\\text{NaF}", "\\text{CaO}"],
    0,
    "Lattice enthalpy is proportional to \\frac{|z^+ z^-|}{r_0}. \\text{MgO} has divalent ions (\\text{Mg}^{2+}, \\text{O}^{2-}) with product of charges = 4, and small ionic radii, giving it the highest lattice energy (~3900 kJ/mol)."
  );
  add(
    "According to Fajan's rules, covalent character in an ionic bond is favored by:",
    ["Small cation, large anion, and high charges on both ions", "Large cation, small anion, and low charges", "Large cation and low charge", "Small anion and large cation"],
    0,
    "High polarizing power of a small, highly charged cation combined with high polarizability of a large anion distorts the electron cloud towards the cation, increasing covalent character."
  );
  add(
    "Why is \\text{AgCl} significantly more covalent and less soluble in water than \\text{NaCl}?",
    ["\\text{Ag}^+ has a pseudo-noble gas configuration ([\\text{Kr}] 4d^{10}) which has higher polarizing power than \\text{Na}^+ ([\\text{Ne}])", "\\text{Ag}^+ has a smaller radius than \\text{Na}^+", "\\text{NaCl} has higher lattice enthalpy than \\text{AgCl}", "\\text{AgCl} is a gas at room temperature"],
    0,
    "Cations with pseudo-noble gas electron configuration (18 electrons in outer shell: ns^2 np^6 nd^{10}) have poor shielding by d-electrons, resulting in higher effective nuclear charge and much stronger polarizing power than noble gas cations."
  );
  add(
    "Which of the following halides has the highest covalent character?",
    ["\\text{AlI}_3", "\\text{AlF}_3", "\\text{AlCl}_3", "\\text{AlBr}_3"],
    0,
    "For a given cation (\\text{Al}^{3+}), the larger the anion, the more easily its electron cloud is polarized. \\text{I}^- is the largest halide ion, so \\text{AlI}_3 has the highest covalent character."
  );
  add(
    "Which of the following pairs of chlorides shows the correct comparison of melting points based on Fajan's rules?",
    ["\\text{SnCl}_2 > \\text{SnCl}_4", "\\text{SnCl}_4 > \\text{SnCl}_2", "\\text{PbCl}_4 > \\text{PbCl}_2", "\\text{FeCl}_3 > \\text{FeCl}_2"],
    0,
    "\\text{Sn}^{4+} has higher charge and greater polarizing power than \\text{Sn}^{2+}. Hence \\text{SnCl}_4$ is predominantly covalent and a liquid (b.p. 114 ^\\circ\\text{C}), whereas \\text{SnCl}_2$ is ionic with a much higher melting point (247 ^\\circ\\text{C})."
  );
  add(
    "A coordinate (dative) covalent bond is formed when:",
    ["Both electrons of the shared pair are contributed by one of the bonding atoms", "Each atom contributes one electron to the shared pair", "Electrons are completely transferred from metal to non-metal", "Electrons are delocalized over the entire crystal lattice"],
    0,
    "In a coordinate bond (e.g. \\text{H}_3\\text{N} \\rightarrow \\text{BF}_3$), the donor atom provides both electrons of the bonding pair to an electron-deficient acceptor atom."
  );
  add(
    "Which of the following species contains both covalent and coordinate bonds?",
    ["\\text{NH}_4^+", "\\text{CH}_4", "\\text{NaCl}", "\\text{H}_2\\text{O}"],
    0,
    "In \\text{NH}_4^+, three N-H bonds are conventional polar covalent bonds and the fourth is a coordinate covalent bond formed by donation of nitrogen's lone pair to \\text{H}^+."
  );
  add(
    "Which of the following compounds contains ionic, covalent, and coordinate bonds simultaneously?",
    ["\\text{NH}_4\\text{Cl}", "\\text{NaCl}", "\\text{CH}_4", "\\text{HCl}"],
    0,
    "In \\text{NH}_4\\text{Cl}: ionic bond between \\text{NH}_4^+ and \\text{Cl}^-; covalent and coordinate bonds inside the \\text{NH}_4^+ cation."
  );
  add(
    "Which of the following compounds contains an expanded octet in its central atom?",
    ["\\text{PCl}_5", "\\text{CCl}_4", "\\text{SiF}_4", "\\text{BF}_3"],
    0,
    "In \\text{PCl}_5, Phosphorus is bonded to 5 chlorine atoms, accommodating 10 valence electrons in its valence shell."
  );
  add(
    "The bond dissociation enthalpy of a diatomic molecule A-B is a measure of:",
    ["The energy required to break one mole of A-B bonds in the gaseous state into isolated gaseous atoms", "The energy released when A-B is dissolved in water", "The lattice enthalpy of the solid", "The ionization energy of atom A"],
    0,
    "Bond dissociation enthalpy is defined as the enthalpy change needed to break 1 mole of a particular chemical bond in gas phase: AB(g) \\rightarrow A(g) + B(g)."
  );
  add(
    "The relationship between bond order, bond length, and bond strength is:",
    ["Higher bond order \\implies shorter bond length and greater bond strength", "Higher bond order \\implies longer bond length and greater bond strength", "Higher bond order \\implies shorter bond length and lower bond strength", "Bond order is independent of bond length"],
    0,
    "As bond order increases (single \\rightarrow double \\rightarrow triple), more electron density pulls nuclei closer together, shortening bond length and increasing bond dissociation enthalpy."
  );
  add(
    "Which of the following carbon-carbon bonds has the shortest bond length?",
    ["\\text{C}\\equiv\\text{C} \\text{ in ethyne}", "\\text{C}=\\text{C} \\text{ in ethene}", "\\text{C}-\\text{C} \\text{ in ethane}", "\\text{C}-\\text{C} \\text{ in benzene}"],
    0,
    "Bond lengths: \\text{C}\\equiv\\text{C} (120 pm) < \\text{C}=\\text{C} in benzene (139 pm) < \\text{C}=\\text{C} (134 pm) < \\text{C}-\\text{C} (154 pm). Ethyne has the shortest bond length."
  );
  add(
    "The lattice enthalpy of an ionic crystal \\text{M}^+\\text{X}^- depends upon:",
    ["The product of ionic charges and the sum of ionic radii", "Only the atomic mass of M", "Only the electron affinity of X", "The boiling point of the solvent"],
    0,
    "According to Kapustinskii and Born-Lande equations, lattice energy U \\propto \\frac{z^+ z^-}{r_c + r_a}."
  );
  add(
    "Which of the following compounds has the lowest melting point due to polarization and covalent character?",
    ["\\text{LiI}", "\\text{LiF}", "\\text{LiCl}", "\\text{LiBr}"],
    0,
    "Due to the small size of \\text{Li}^+ and large polarizability of \\text{I}^-, \\text{LiI} has the highest covalent character and lowest lattice energy among lithium halides, yielding the lowest melting point (449 ^\\circ\\text{C})."
  );
  add(
    "Which of the following alkaline earth metal fluorides has the highest lattice enthalpy?",
    ["\\text{BeF}_2", "\\text{MgF}_2", "\\text{CaF}_2", "\\text{BaF}_2"],
    0,
    "\\text{Be}^{2+} has the smallest ionic radius, minimizing the interionic separation r_0 and maximizing lattice enthalpy."
  );
  add(
    "Which of the following statements regarding covalent bond formation is correct according to Lewis theory?",
    ["Atoms combine by sharing electron pairs to achieve stable noble gas configurations", "Atoms always transfer electrons completely", "Covalent bonds only form between identical atoms", "Covalent bonds are non-directional"],
    0,
    "Lewis formulated that covalent bonds result from sharing of electron pairs so that each participating atom attains an outer octet."
  );
  add(
    "Which of the following species does NOT obey the Lewis octet rule?",
    ["\\text{BF}_3", "\\text{CH}_4", "\\text{NH}_3", "\\text{CF}_4"],
    0,
    "In \\text{BF}_3, Boron has only 6 valence electrons around it, making it an electron-deficient Lewis acid."
  );
  add(
    "Why is \\text{CuCl} less soluble in water and more covalent than \\text{NaCl}?",
    ["\\text{Cu}^+ has an 18-electron outer shell ([\\text{Ar}] 3d^{10}) with higher polarizing power than \\text{Na}^+ (8 electrons)", "\\text{Cu}^+ is larger than \\text{Na}^+", "\\text{NaCl} has covalent bonding", "\\text{CuCl} is an explosive"],
    0,
    "Transition metal ions with pseudo-noble gas configurations (ns^2 np^6 nd^{10}) have ineffective shielding by d-orbitals, producing high polarizing power and high covalency."
  );
  add(
    "Which of the following oxides shows the highest degree of covalent character?",
    ["\\text{Mn}_2\\text{O}_7", "\\text{MnO}", "\\text{Mn}_2\\text{O}_3", "\\text{MnO}_2"],
    0,
    "In \\text{Mn}_2\\text{O}_7, Manganese is in the +7 oxidation state. High positive charge density polarizes oxide electron clouds intensely, making \\text{Mn}_2\\text{O}_7 a covalent green oil."
  );
  add(
    "The bond angles in \\text{CH}_4, \\text{NH}_3, and \\text{H}_2\\text{O} are respectively:",
    ["109.5^\\circ, 107^\\circ, 104.5^\\circ", "109.5^\\circ, 109.5^\\circ, 109.5^\\circ", "120^\\circ, 107^\\circ, 104.5^\\circ", "180^\\circ, 120^\\circ, 109.5^\\circ"],
    0,
    "Due to increasing lone pair-bond pair repulsion (0 lp in \\text{CH}_4, 1 lp in \\text{NH}_3, 2 lp in \\text{H}_2\\text{O}), the bond angles compress: 109.5^\\circ > 107^\\circ > 104.5^\\circ."
  );
  add(
    "Which of the following species contains a coordinate covalent bond?",
    ["\\text{H}_3\\text{O}^+", "\\text{H}_2\\text{O}", "\\text{OH}^-", "\\text{O}_2"],
    0,
    "The hydronium ion \\text{H}_3\\text{O}^+ forms when \\text{H}_2\\text{O} donates an oxygen lone pair into the empty 1s orbital of \\text{H}^+."
  );
  add(
    "In the formation of \\text{CO}, the bonding between C and O consists of:",
    ["Two covalent bonds and one coordinate bond donated from Oxygen to Carbon", "Three purely ionic bonds", "One single covalent bond", "Two ionic bonds and one covalent bond"],
    0,
    "In Carbon monoxide, C and O share two electrons each, and Oxygen donates a lone pair to the vacant orbital of Carbon: :C \\leftleftarrows:O: (triple bond with formal charges C^- and O^+)."
  );
  add(
    "Which factor primarily determines the stability of an ionic compound in solid state?",
    ["Lattice enthalpy", "Electron gain enthalpy alone", "Ionization enthalpy alone", "Hydration enthalpy alone"],
    0,
    "The massive exothermic release of lattice enthalpy upon crystallization provides the primary thermodynamic driving force stabilizing ionic solids."
  );
  add(
    "Which of the following compounds has the highest percentage of ionic character?",
    ["\\text{KF}", "\\text{KCl}", "\\text{KBr}", "\\text{KI}"],
    0,
    "Fluorine is the most electronegative halogen and smallest anion with least polarizability, giving \\text{KF} the highest ionic character."
  );
  add(
    "The solubility of ionic compounds in polar solvents like water depends on the competition between:",
    ["Lattice enthalpy and hydration enthalpy", "Ionization enthalpy and electron affinity", "Bond length and bond angle", "Sublimation energy and melting point"],
    0,
    "An ionic solid dissolves spontaneously if the hydration enthalpy released upon solvation is greater than or comparable to the lattice enthalpy holding the crystal together."
  );
  add(
    "Which of the following pairs of elements forms an ionic bond?",
    ["\\text{Ca and Cl}", "\\text{C and O}", "\\text{N and H}", "\\text{S and Cl}"],
    0,
    "Calcium is an electropositive alkaline earth metal and Chlorine is an electronegative halogen; their large electronegativity difference forms ionic \\text{CaCl}_2."
  );
  add(
    "Which of the following molecules has a bond order of 3?",
    ["\\text{N}_2", "\\text{O}_2", "\\text{F}_2", "\\text{Cl}_2"],
    0,
    "\\text{N}_2 has a triple bond (:N\\equiv N:) with a bond order of 3 and extremely high bond dissociation enthalpy (945 kJ/mol)."
  );
  add(
    "Which of the following molecules is stable despite containing an odd electron?",
    ["\\text{NO}_2", "\\text{CO}_2", "\\text{CH}_4", "\\text{N}_2\\text{O}"],
    0,
    "\\text{NO}_2 has 17 valence electrons (odd electron molecule) and is paramagnetic in the gas phase, dimerizing to \\text{N}_2\\text{O}_4 at lower temperatures."
  );
  add(
    "Which of the following compounds violates the octet rule by having fewer than eight electrons around the central atom?",
    ["\\text{BeCl}_2 \\text{ (vapor)}", "\\text{CCl}_4", "\\text{SiCl}_4", "\\text{NCl}_3"],
    0,
    "Gaseous \\text{BeCl}_2 is a linear molecule with only 4 valence electrons around Beryllium."
  );
  add(
    "The covalent bond length between two atoms A and B in a heteronuclear molecule is given by the Schomaker-Stevenson formula:",
    ["r_{AB} = r_A + r_B - 0.09|\\chi_A - \\chi_B|", "r_{AB} = r_A + r_B + 0.09|\\chi_A - \\chi_B|", "r_{AB} = \\frac{r_A + r_B}{2}", "r_{AB} = \\sqrt{r_A r_B}"],
    0,
    "The Schomaker-Stevenson equation corrects for bond shortening due to electronegativity difference: r_{AB} = r_A + r_B - 0.09|\\chi_A - \\chi_B| (in \\text{\\AA})."
  );
  add(
    "Which of the following halides is insoluble in water due to high lattice enthalpy and high covalent character?",
    ["\\text{AgI}", "\\text{AgF}", "\\text{NaCl}", "\\text{KCl}"],
    0,
    "\\text{AgI} has intense polarization of the large \\text{I}^- by \\text{Ag}^+ (pseudo-noble gas core), conferring high covalency and extreme insolubility ($K_{sp} \\approx 10^{-16}$)."
  );
  add(
    "In which of the following compounds is the metal-chlorine bond most ionic?",
    ["\\text{KCl}", "\\text{MgCl}_2", "\\text{AlCl}_3", "\\text{SiCl}_4"],
    0,
    "Across period 3, cation charge increases and radius decreases from \\text{K}^+ to \\text{Si}^{4+}, increasing polarizing power. \\text{KCl} has the lowest charge and largest radius, hence most ionic."
  );
  add(
    "Which of the following compounds exhibits directional bonding?",
    ["\\text{CH}_4", "\\text{NaCl}", "\\text{CaO}", "\\text{KBr}"],
    0,
    "Covalent bonds arise from orbital overlap along specific directions in space, making molecules like \\text{CH}_4 directional, whereas ionic bonds are non-directional electrostatic attractions."
  );
  add(
    "What type of bond is formed when the electronegativity difference between two combining atoms is greater than 2.0?",
    ["Predominantly ionic bond", "Purely non-polar covalent bond", "Metallic bond", "Coordinate covalent bond only"],
    0,
    "When \\Delta\\chi > 1.7 to 2.0, the ionic character exceeds 50%, resulting in a predominantly ionic bond."
  );
  add(
    "Which of the following molecules has the highest bond dissociation energy?",
    ["\\text{CO}", "\\text{N}_2", "\\text{O}_2", "\\text{F}_2"],
    0,
    "\\text{CO} has a bond dissociation energy of ~1072 kJ/mol (bond order 3 with coordinate contribution), slightly higher than \\text{N}_2 (945 kJ/mol)."
  );
  add(
    "Assertion (A): \\text{NaCl} has a higher melting point than \\text{AlCl}_3.\nReason (R): \\text{Al}^{3+} has a higher charge and smaller radius than \\text{Na}^+, causing greater polarization of chloride ions according to Fajan's rules.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "High polarizing power of \\text{Al}^{3+} imparts high covalent character to \\text{AlCl}_3 (sublimes at 180 ^\\circ\\text{C}), while \\text{NaCl} is ionic (m.p. 801 ^\\circ\\text{C}). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{SF}_6 molecule exists and is chemically inert, but \\text{OF}_6 does not exist.\nReason (R): Sulfur has vacant 3d-orbitals available to expand its octet to 12 valence electrons, whereas Oxygen lacks d-orbitals in its valence shell (n = 2).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Second period elements cannot expand their octet due to absence of d-orbitals. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{AgCl} is white and insoluble in water, while \\text{AgF} is soluble in water.\nReason (R): The fluoride ion is small and less polarizable than the chloride ion, conferring higher ionic character and higher hydration energy to \\text{AgF}.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "\\text{F}^- resists polarization, making \\text{AgF} primarily ionic and soluble, whereas \\text{Cl}^- is polarized by \\text{Ag}^+, making \\text{AgCl} covalent and insoluble. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The lattice enthalpy of \\text{CaO} is higher than that of \\text{NaCl}.\nReason (R): The product of ionic charges in \\text{CaO} (|(+2)(-2)| = 4) is four times that in \\text{NaCl} (|(+1)(-1)| = 1).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Lattice enthalpy is directly proportional to the product of ionic charges: U \\propto |z^+ z^-|. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{SnCl}_4 is a volatile liquid at room temperature while \\text{SnCl}_2 is a high-melting solid.\nReason (R): According to Fajan's rules, cations in higher oxidation states possess greater polarizing power, inducing greater covalent character.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "\\text{Sn}^{4+} polarizes chloride ions heavily to form covalent molecules with weak intermolecular forces, while \\text{SnCl}_2 is ionic. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{BF}_3 acts as a Lewis acid.\nReason (R): Boron in \\text{BF}_3 has an incomplete octet with only six valence electrons and possesses an empty 2p-orbital capable of accepting an electron pair.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Electron deficiency and empty p-orbital make \\text{BF}_3 an electron-pair acceptor (Lewis acid). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Covalent bonds are directional while ionic bonds are non-directional.\nReason (R): Covalent bonds are formed by overlapping of specific atomic orbitals having directional orientations in space, whereas ionic bonds are electrostatic forces operating uniformly in all directions.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Orbital overlap requires specific orientation, giving molecules definite geometries. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getResonanceAndFormalChargeQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Resonance and formal charge", text, opts, ans, exp, diff, type));

  add(
    "The formal charge on an atom in a Lewis structure is calculated using the formula:",
    ["\\text{FC} = V - L - \\frac{1}{2}S", "\\text{FC} = V - L - S", "\\text{FC} = V - \\frac{1}{2}L - S", "\\text{FC} = L + \\frac{1}{2}S - V"],
    0,
    "Formal charge = (valence electrons in free atom) - (total non-bonding lone pair electrons) - 0.5(total bonding/shared electrons)."
  );
  add(
    "In the ozone molecule (\\text{O}_3), what are the formal charges on the central oxygen, the double-bonded oxygen, and the single-bonded oxygen atom respectively?",
    ["+1, 0, -1", "0, +1, -1", "+1, -1, 0", "0, 0, 0"],
    0,
    "Central O: 6 - 2 - 3 = +1; Double-bonded O: 6 - 4 - 2 = 0; Single-bonded O: 6 - 6 - 1 = -1."
  );
  add(
    "What is the formal charge on the carbon atom in the carbonate ion (\\text{CO}_3^{2-})?",
    ["0", "+1", "-1", "+2"],
    0,
    "In \\text{CO}_3^{2-}, Carbon has 4 valence electrons, 0 lone pair electrons, and 4 bonds (8 shared electrons): \\text{FC} = 4 - 0 - 4 = 0."
  );
  add(
    "What is the formal charge on each single-bonded oxygen atom in the carbonate ion (\\text{CO}_3^{2-})?",
    ["-1", "0", "-2", "+1"],
    0,
    "Each single-bonded oxygen has 3 lone pairs (6 electrons) and 1 shared pair: \\text{FC} = 6 - 6 - 1 = -1."
  );
  add(
    "In the nitrate ion (\\text{NO}_3^-), the formal charges on Nitrogen, double-bonded Oxygen, and each single-bonded Oxygen are respectively:",
    ["+1, 0, -1", "0, 0, -1", "+2, -1, -1", "+1, -1, 0"],
    0,
    "Nitrogen: 5 - 0 - 4 = +1; Double-bonded Oxygen: 6 - 4 - 2 = 0; Each single-bonded Oxygen: 6 - 6 - 1 = -1. Net charge = +1 + 0 + (-1) + (-1) = -1."
  );
  add(
    "In the nitrite ion (\\text{NO}_2^-), the formal charge on the Nitrogen atom is:",
    ["0", "+1", "-1", "+2"],
    0,
    "Nitrogen in \\text{NO}_2^- has 1 lone pair (2 electrons) and 3 bonds (one double, one single): \\text{FC} = 5 - 2 - 3 = 0."
  );
  add(
    "What is the bond order of the carbon-oxygen bonds in the carbonate ion (\\text{CO}_3^{2-}) due to resonance?",
    ["1.33", "1.50", "1.00", "2.00"],
    0,
    "Resonance delocalizes 4 pairs of bonding electrons equally across 3 C-O bonds: \\text{Bond order} = \\frac{4}{3} \\approx 1.33."
  );
  add(
    "Due to resonance, all three nitrogen-oxygen bonds in \\text{NO}_3^- are equivalent with a bond order of:",
    ["1.33", "1.50", "1.00", "1.67"],
    0,
    "Four shared electron pairs (one double bond + two single bonds) are delocalized equally over 3 N-O bonds: \\text{Bond order} = \\frac{4}{3} = 1.33."
  );
  add(
    "The chlorine-oxygen bond order in the perchlorate ion (\\text{ClO}_4^-) is:",
    ["1.75", "1.50", "1.25", "2.00"],
    0,
    "In \\text{ClO}_4^-, there are 7 bonding pairs (three Cl=O double bonds and one Cl-O single bond) distributed equally across 4 Cl-O bonds: \\text{Bond order} = \\frac{7}{4} = 1.75."
  );
  add(
    "What is the sulfur-oxygen bond order in the sulfate ion (\\text{SO}_4^{2-}) considering the Lewis resonance hybrid with minimized formal charges?",
    ["1.50", "1.25", "1.75", "1.33"],
    0,
    "The structure with two S=O double bonds and two S-O single bonds minimizes formal charge (giving S = 0), distributing 6 bonding pairs over 4 bonds: \\text{Bond order} = \\frac{6}{4} = 1.50."
  );
  add(
    "The phosphorus-oxygen bond order in the phosphate ion (\\text{PO}_4^{3-}) is:",
    ["1.25", "1.50", "1.33", "1.00"],
    0,
    "With one P=O double bond and three P-O single bonds, 5 shared pairs are delocalized over 4 bonds: \\text{Bond order} = \\frac{5}{4} = 1.25."
  );
  add(
    "Which of the following statements about resonance is FALSE?",
    ["The resonance hybrid has higher energy than any of the contributing canonical structures", "The contributing canonical structures must have identical atomic nuclei positions", "The contributing structures must have the same number of unpaired electrons", "Resonance stabilizes the molecule"],
    0,
    "Statement 1 is FALSE: The resonance hybrid is always more stable (lower in energy) than any individual canonical structure."
  );
  add(
    "Resonance energy is defined as:",
    ["The difference between the energy of the actual resonance hybrid and that of the most stable contributing canonical structure", "The energy required to break all bonds in a molecule", "The energy released during nuclear fusion", "The energy of the least stable canonical structure"],
    0,
    "Resonance energy = E(most stable canonical structure) - E(resonance hybrid). Greater resonance energy signifies greater stability."
  );
  add(
    "In benzene, the carbon-carbon bond length is 139 pm, which is intermediate between a C-C single bond (154 pm) and a C=C double bond (134 pm). This equivalence is due to:",
    ["Resonance delocalization of \\pi-electrons over all six carbon atoms", "Inductive effect", "Hyperconjugation", "Electromeric effect"],
    0,
    "Delocalization of the 6 \\pi-electrons over the hexagonal ring confers an identical intermediate bond order of 1.5 and equal bond length (139 pm) to all six C-C bonds."
  );
  add(
    "Which of the following resonance structures contributes MOST to the stability of the hybrid?",
    ["A structure in which all atoms have complete octets and minimal formal charges", "A structure with high formal separation of opposite charges", "A structure with positive charge on an electronegative atom", "A structure with incomplete octets"],
    0,
    "Major resonance contributors feature complete valence octets on all atoms, maximum number of covalent bonds, and minimal or no charge separation."
  );
  add(
    "What is the formal charge on the central Nitrogen atom in the azide ion (\\text{N}_3^-: [\\text{N}=\\text{N}=\\text{N}]^-)?",
    ["+1", "0", "-1", "-2"],
    0,
    "In [:N=N=N:]^-, the central Nitrogen atom participates in two double bonds (4 shared pairs, 0 lone pairs): \\text{FC} = 5 - 0 - 4 = +1."
  );
  add(
    "In the azide ion (\\text{N}_3^-) structure [:N=N=N:]^-, what is the formal charge on each terminal Nitrogen atom?",
    ["-1", "+1", "0", "-2"],
    0,
    "Each terminal N has 2 lone pairs (4 electrons) and 2 bonds (4 bonding electrons): \\text{FC} = 5 - 4 - 2 = -1. Net charge = (-1) + (+1) + (-1) = -1."
  );
  add(
    "What is the formal charge on the Carbon atom in Carbon monoxide (:C\\equiv O:)?",
    ["-1", "+1", "0", "+2"],
    0,
    "In :C\\equiv O:, Carbon has 1 lone pair (2 electrons) and 3 shared pairs (6 bonding electrons): \\text{FC} = 4 - 2 - 3 = -1."
  );
  add(
    "What is the formal charge on the Oxygen atom in Carbon monoxide (:C\\equiv O:)?",
    ["+1", "-1", "0", "+2"],
    0,
    "In :C\\equiv O:, Oxygen has 1 lone pair (2 electrons) and 3 shared pairs (6 bonding electrons): \\text{FC} = 6 - 2 - 3 = +1."
  );
  add(
    "Which of the following canonical structures of cyanate ion [OCN]^- is the most stable contributor?",
    ["[\\text{O}=\\text{C}=\\text{N}]^- \\text{ with } \\text{FC}(O)=0, \\text{FC}(C)=0, \\text{FC}(N)=-1", "[:\\text{O}-\\text{C}\\equiv\\text{N}:]^- \\text{ with } \\text{FC}(O)=-1, \\text{FC}(C)=0, \\text{FC}(N)=0", "[:\\text{O}\\equiv\\text{C}-\\text{N}:]^- \\text{ with } \\text{FC}(O)=+1", "All contribute equally"],
    1,
    "[:\\text{O}-\\text{C}\\equiv\\text{N}:]^- places the negative formal charge on Oxygen, which is more electronegative than Nitrogen, making it the most significant canonical contributor."
  );
  add(
    "Why are the two carbon-oxygen bonds in the formate ion (\\text{HCOO}^-) equal in length (127 pm)?",
    ["Resonance delocalizes the negative charge equally across both oxygen atoms", "Hydrogen bonding", "Tautomerism", "Formic acid is a strong acid"],
    0,
    "In the formate ion, resonance between two equivalent canonical structures gives both C-O bonds identical bond order of 1.5 and equal length."
  );
  add(
    "In \\text{SO}_2, the two sulfur-oxygen bond lengths are identical (143 pm), which is shorter than a S-O single bond (148 pm). This is explained by:",
    ["Resonance between two equivalent canonical structures with S=O bond order of 1.5", "S-O bond is purely ionic", "Sulfur is sp hybridized", "Oxygen is larger than Sulfur"],
    0,
    "Resonance between O=S-O^- and ^-O-S=O gives an average bond order of 1.5, equalizing bond lengths."
  );
  add(
    "What is the formal charge on the Nitrogen atom in the ammonium ion (\\text{NH}_4^+)?",
    ["+1", "0", "-1", "+4"],
    0,
    "In \\text{NH}_4^+, Nitrogen has 0 lone pairs and 4 single bonds (8 bonding electrons): \\text{FC} = 5 - 0 - 4 = +1."
  );
  add(
    "What is the formal charge on the Oxygen atom in the hydronium ion (\\text{H}_3\\text{O}^+)?",
    ["+1", "0", "-1", "+2"],
    0,
    "In \\text{H}_3\\text{O}^+, Oxygen has 1 lone pair (2 electrons) and 3 bonds (6 bonding electrons): \\text{FC} = 6 - 2 - 3 = +1."
  );
  add(
    "Which of the following rules is VIOLATED in invalid resonance contributors?",
    ["The position of nuclei changes", "The number of unpaired electrons remains the same", "All octets are complete", "Formal charges are minimized"],
    0,
    "In resonance, the positions of atomic nuclei must remain strictly invariant; only valence electrons are redistributed."
  );
  add(
    "The formal charge on Chlorine in the perchlorate ion (\\text{ClO}_4^-) structure with three Cl=O double bonds and one Cl-O single bond is:",
    ["0", "+1", "+3", "+7"],
    0,
    "Chlorine has 7 valence electrons, 0 lone pairs, and 7 bonds (14 shared electrons): \\text{FC} = 7 - 0 - 7 = 0."
  );
  add(
    "What is the formal charge on Xenon in the \\text{XeF}_4 molecule?",
    ["0", "+2", "+4", "-1"],
    0,
    "Xenon (8 valence electrons) has 2 lone pairs (4 electrons) and 4 bonds to F (8 bonding electrons): \\text{FC} = 8 - 4 - 4 = 0."
  );
  add(
    "In the thiocyanate ion [SCN]^-, which atom bears the negative formal charge in the structure S=C=N^-?",
    ["Nitrogen", "Sulfur", "Carbon", "Both Sulfur and Nitrogen equally"],
    0,
    "In S=C=N^-, Nitrogen: 5 - 4 - 2 = -1; Carbon: 4 - 0 - 4 = 0; Sulfur: 6 - 4 - 2 = 0. The negative formal charge is on Nitrogen."
  );
  add(
    "Why does the carbonate ion (\\text{CO}_3^{2-}) not possess any localized C=O double bond?",
    ["Delocalization of \\pi-electrons over the entire planar planar \\text{CO}_3 unit equalizes all three C-O bonds", "Carbon cannot form double bonds with oxygen", "Oxygen atoms repel each other into a pyramid", "Carbon has no vacant orbitals"],
    0,
    "Continuous resonance across all three oxygens spreads the \\pi-bond character uniformly, so each bond has 1.33 bond order."
  );
  add(
    "Which of the following is true regarding formal charge versus actual oxidation state?",
    ["Formal charge ignores electronegativity differences and assumes equal electron sharing in bonds", "Formal charge assumes total transfer of electrons to more electronegative atoms", "Formal charge and oxidation state are always identical", "Oxidation state assumes purely covalent bonding"],
    0,
    "Formal charge treats all covalent bonds as 100% covalent (equal sharing), whereas oxidation state treats bonds as 100% ionic (assigning shared electrons to the more electronegative atom)."
  );
  add(
    "The resonance stabilization of carboxylic acids is lower than that of carboxylate anions because:",
    ["In carboxylate anion, the two canonical structures are equivalent, whereas in carboxylic acid resonance involves charge separation", "Carboxylic acid is an alkane", "Carboxylate anion has no resonance", "Carboxylic acid has higher molecular mass"],
    0,
    "Equivalent resonance structures in \\text{RCOO}^- distribute negative charge equally with zero charge separation, providing much greater resonance stabilization."
  );
  add(
    "The formal charge on the Boron atom in the borohydride ion (\\text{BH}_4^-) is:",
    ["-1", "0", "+1", "+3"],
    0,
    "Boron (3 valence electrons) has 0 lone pairs and 4 bonds: \\text{FC} = 3 - 0 - 4 = -1."
  );
  add(
    "The formal charge on the Aluminum atom in the tetrachloroaluminate ion (\\text{AlCl}_4^-) is:",
    ["-1", "0", "+3", "+1"],
    0,
    "Aluminum (3 valence electrons) has 0 lone pairs and 4 bonds: \\text{FC} = 3 - 0 - 4 = -1."
  );
  add(
    "Which of the following resonance structures has the lowest stability?",
    ["A structure with adjacent like formal charges (+ on + or - on -)", "A structure with complete octets", "A structure with zero formal charges", "A structure with negative charge on electronegative oxygen"],
    0,
    "Placing like formal charges on adjacent atoms creates immense electrostatic repulsion, making the structure highly unstable."
  );
  add(
    "In the molecule \\text{HNO}_3, the formal charge on the central nitrogen atom is:",
    ["+1", "0", "-1", "+5"],
    0,
    "Nitrogen forms 4 bonds (one double bond to O, one single bond to OH, and one coordinate/single bond to O) with 0 lone pairs: \\text{FC} = 5 - 0 - 4 = +1."
  );
  add(
    "What is the average C-C bond order in benzene?",
    ["1.5", "1.33", "1.0", "2.0"],
    0,
    "Benzene has 9 shared electron pairs (six \\sigma-bonds and three delocalized \\pi-bonds) over six C-C bonds: \\text{Bond order} = \\frac{9}{6} = 1.5."
  );
  add(
    "In the fulminate ion ([:C\\equiv N-O:]^-), what is the formal charge on the Carbon atom?",
    ["-1", "0", "+1", "-2"],
    0,
    "In [:C\\equiv N-O:]^-, Carbon has 1 lone pair (2 electrons) and 3 bonds (6 bonding electrons): \\text{FC} = 4 - 2 - 3 = -1."
  );
  add(
    "Which factor makes the cyanate ion ([O-C\\equiv N]^-) far more stable and less explosive than the isomeric fulminate ion ([:C\\equiv N-O:]^-)?",
    ["Cyanate places the negative formal charge on electronegative oxygen or nitrogen, while fulminate places negative formal charge on carbon and positive formal charge on nitrogen", "Cyanate has lower molecular weight", "Fulminate has no resonance", "Cyanate is a gas"],
    0,
    "Fulminate has an unfavorable formal charge distribution (+1 on N, -1 on C, -1 on O), making it thermally unstable and prone to explosive detonation."
  );
  add(
    "The formal charge on the central atom in Xenon trioxide (\\text{XeO}_3) with three Xe=O double bonds and one lone pair is:",
    ["0", "+1", "+3", "+6"],
    0,
    "Xenon (8 valence electrons) has 1 lone pair (2 electrons) and 6 bonds (12 bonding electrons): \\text{FC} = 8 - 2 - 6 = 0."
  );
  add(
    "What is the formal charge on Phosphorus in \\text{PCl}_5?",
    ["0", "+5", "-1", "+1"],
    0,
    "Phosphorus (5 valence electrons) has 0 lone pairs and 5 single bonds (10 bonding electrons): \\text{FC} = 5 - 0 - 5 = 0."
  );
  add(
    "Assertion (A): All three carbon-oxygen bond lengths in the carbonate ion (\\text{CO}_3^{2-}) are identical (128 pm).\nReason (R): The carbonate ion exists as a resonance hybrid of three equivalent canonical structures with a uniform bond order of 1.33.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Resonance delocalizes the \\pi-bond and negative charges equally across all three oxygen atoms. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The resonance hybrid of benzene is more stable than any single Kekulé structure.\nReason (R): Delocalization of \\pi-electrons over the entire planar ring lowers the potential energy of the molecule by approximately 150 kJ/mol (resonance energy).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Electron delocalization stabilizes the system and lowers the ground-state energy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In the ozone molecule (\\text{O}_3), the central oxygen atom has a formal charge of +1.\nReason (R): The central oxygen atom participates in three covalent bonds (one double bond and one single coordinate bond) and retains one lone pair.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "\\text{FC} = 6 - 2 - 3 = +1. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The formate ion (\\text{HCOO}^-) is more resonance stabilized than formic acid (\\text{HCOOH}).\nReason (R): The resonance structures of the formate ion are identical with equal energy and zero charge separation, whereas in formic acid resonance involves separation of positive and negative charges.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Equivalent canonical forms without charge separation confer maximum resonance stabilization. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The formal charge on an atom in a molecule does not indicate the real charge distribution.\nReason (R): Formal charge calculation assumes pure covalent bonding with equal electron sharing, ignoring electronegativity differences between bonded atoms.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Formal charges are bookkeeping electron counts that neglect polar character. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): A Lewis structure with the lowest formal charges on all atoms represents the most stable electronic arrangement.\nReason (R): Electronic arrangements with minimal formal charges minimize electrostatic strain and potential energy within the molecule.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Minimizing charge separation yields lowest electrostatic potential energy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The bond order of each sulfur-oxygen bond in the sulfate ion (\\text{SO}_4^{2-}) is 1.5.\nReason (R): Six bonding electron pairs are delocalized uniformly over four equivalent S-O bonds in the resonance hybrid.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "\\text{Bond order} = 6/4 = 1.5. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getIonicAndCovalentBondsQuestions,
  getResonanceAndFormalChargeQuestions
};
