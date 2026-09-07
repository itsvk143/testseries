// Chemical Bonding and Molecular Structure - Part 3
// Subtopics:
// 6. Hybridization (47 questions)
// 7. Molecular orbital theory (47 questions)

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

function getHybridizationQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Hybridization", text, opts, ans, exp, diff, type));

  add(
    "Hybridization is defined as:",
    ["The intermixing of atomic orbitals of slightly different energies to produce a new set of equivalent orbitals of identical energy and shape", "The transfer of electrons from one atom to another", "The pairing of electron spins in identical orbitals", "The promotion of electrons to higher principal energy levels only"],
    0,
    "Pauling proposed hybridization as the blending of atomic orbitals belonging to the same atom to form directional hybrid orbitals of equivalent energy and shape."
  );
  add(
    "The percentage of s-character in sp, sp^2, and sp^3 hybrid orbitals is respectively:",
    ["50%, 33.3%, 25%", "25%, 33.3%, 50%", "50%, 25%, 33.3%", "33.3%, 50%, 25%"],
    0,
    "sp: 1/2 = 50% s; sp^2: 1/3 = 33.3% s; sp^3: 1/4 = 25% s."
  );
  add(
    "What is the hybridization and bond angle in methane (\\text{CH}_4)?",
    ["sp^3, 109.5^\\circ", "sp^2, 120^\\circ", "sp, 180^\\circ", "dsp^2, 90^\\circ"],
    0,
    "Carbon forms 4 \\sigma-bonds with hydrogen using four equivalent sp^3 hybrid orbitals directed towards the corners of a regular tetrahedron."
  );
  add(
    "In ethyne (\\text{HC}\\equiv\\text{CH}), the hybridization of each carbon atom is:",
    ["sp", "sp^2", "sp^3", "dsp^2"],
    0,
    "Each carbon forms two \\sigma-bonds (one to H, one to C) using sp hybrid orbitals, leaving two unhybridized 2p orbitals to form two mutually perpendicular \\pi-bonds."
  );
  add(
    "What are the hybridizations of the carbon atoms in allene (\\text{H}_2\\text{C}=\\text{C}=\\text{CH}_2) from left to right?",
    ["sp^2, sp, sp^2", "sp^2, sp^2, sp^2", "sp^3, sp, sp^3", "sp, sp^2, sp"],
    0,
    "The central carbon forms two \\sigma-bonds (sp), while the two terminal carbons form three \\sigma-bonds each (sp^2)."
  );
  add(
    "The total number of \\sigma and \\pi bonds in pent-1-en-4-yne (\\text{HC}\\equiv\\text{C}-\\text{CH}_2-\\text{CH}=\\text{CH}_2) is:",
    ["10 \\sigma, 3 \\pi", "9 \\sigma, 3 \\pi", "10 \\sigma, 2 \\pi", "8 \\sigma, 4 \\pi"],
    0,
    "Count bonds: Single bonds: 1 (C-C) + 1 (C-C) + 6 (C-H) = 8. Double bond: 1 \\sigma + 1 \\pi. Triple bond: 1 \\sigma + 2 \\pi. Total = 10 \\sigma and 3 \\pi bonds."
  );
  add(
    "In the solid state, \\text{PCl}_5 exists as an ionic solid composed of [\\text{PCl}_4]^+ and [\\text{PCl}_6]^-. The hybridizations of Phosphorus in the cation and anion are respectively:",
    ["sp^3 \\text{ and } sp^3d^2", "sp^3d \\text{ and } sp^3d", "sp^3 \\text{ and } dsp^2", "sp^2 \\text{ and } sp^3d^2"],
    0,
    "In [\\text{PCl}_4]^+, P has 4 \\sigma-bonds (sp^3 tetrahedral). In [\\text{PCl}_6]^-, P has 6 \\sigma-bonds (sp^3d^2 octahedral)."
  );
  add(
    "Solid \\text{PBr}_5 exists as [\\text{PBr}_4]^+ \\text{Br}^-. The hybridization of Phosphorus in the cation is:",
    ["sp^3", "sp^3d", "sp^3d^2", "dsp^2"],
    0,
    "Due to steric hindrance of large bromine atoms, [\\text{PBr}_6]^- cannot form; it crystallizes as [\\text{PBr}_4]^+ (sp^3) and \\text{Br}^-."
  );
  add(
    "Solid \\text{N}_2\\text{O}_5 exists as [\\text{NO}_2]^+ [\\text{NO}_3]^-. The hybridizations of Nitrogen in the nitronium cation and nitrate anion are respectively:",
    ["sp \\text{ and } sp^2", "sp^2 \\text{ and } sp^3", "sp \\text{ and } sp^3", "sp^2 \\text{ and } sp^2"],
    0,
    "Linear [\\text{NO}_2]^+ has steric number 2 (sp), and trigonal planar [\\text{NO}_3]^- has steric number 3 (sp^2)."
  );
  add(
    "Which d-orbital is involved in the trigonal bipyramidal sp^3d hybridization of \\text{PCl}_5?",
    ["d_{z^2}", "d_{x^2-y^2}", "d_{xy}", "d_{xz}"],
    0,
    "In sp^3d trigonal bipyramidal geometry, the axial hybrid orbitals along the z-axis are formed using the d_{z^2} orbital (giving two collinear spd hybrids) and equatorial orbitals are formed by s, p_x, p_y."
  );
  add(
    "Which d-orbitals are involved in the octahedral sp^3d^2 hybridization of \\text{SF}_6?",
    ["d_{x^2-y^2} \\text{ and } d_{z^2}", "d_{xy} \\text{ and } d_{yz}", "d_{xz} \\text{ and } d_{z^2}", "d_{xy} \\text{ and } d_{x^2-y^2}"],
    0,
    "The e_g set of d-orbitals (d_{x^2-y^2} and d_{z^2}) point directly along the Cartesian axes and are hybridized with s, p_x, p_y, p_z to form 6 octahedral hybrid orbitals."
  );
  add(
    "Which d-orbitals are involved in the pentagonal bipyramidal sp^3d^3 hybridization of \\text{IF}_7?",
    ["d_{xy}, d_{x^2-y^2}, \\text{ and } d_{z^2}", "d_{xy}, d_{yz}, \\text{ and } d_{xz}", "d_{z^2}, d_{xz}, \\text{ and } d_{yz}", "d_{x^2-y^2}, d_{yz}, \\text{ and } d_{xz}"],
    0,
    "The pentagonal equatorial plane uses d_{xy} and d_{x^2-y^2}, while the axial axis uses d_{z^2}."
  );
  add(
    "The d-orbital involved in square planar dsp^2 hybridization (such as in [\\text{Ni(CN)}_4]^{2-}) is:",
    ["d_{x^2-y^2}", "d_{z^2}", "d_{xy}", "d_{xz}"],
    0,
    "Square planar geometry lies in the xy-plane, utilizing the d_{x^2-y^2} orbital along with s, p_x, and p_y."
  );
  add(
    "What is the hybridization of the central atom in Xenon trioxide (\\text{XeO}_3)?",
    ["sp^3", "sp^2", "sp^3d", "sp^3d^2"],
    0,
    "Xenon in \\text{XeO}_3 has 3 \\sigma-bonds and 1 lone pair: Steric number = 3 + 1 = 4 \\implies sp^3 hybridization."
  );
  add(
    "The hybridization of Xenon in \\text{XeF}_4 is:",
    ["sp^3d^2", "sp^3d", "sp^3", "dsp^2"],
    0,
    "Xenon has 4 \\sigma-bonds and 2 lone pairs: Steric number = 6 \\implies sp^3d^2 hybridization (square planar shape)."
  );
  add(
    "The hybridization of Xenon in \\text{XeF}_2 is:",
    ["sp^3d", "sp^3", "sp^3d^2", "sp^2"],
    0,
    "Xenon has 2 \\sigma-bonds and 3 lone pairs: Steric number = 5 \\implies sp^3d hybridization (linear shape)."
  );
  add(
    "What is the hybridization of Chlorine in \\text{ClO}_4^-?",
    ["sp^3", "sp^2", "sp^3d", "sp^3d^2"],
    0,
    "Chlorine forms 4 \\sigma-bonds with 0 lone pairs: Steric number = 4 \\implies sp^3 hybridization."
  );
  add(
    "What is the state of hybridization of carbon in diamond, graphite, and fullerenes respectively?",
    ["sp^3, sp^2, sp^2", "sp^2, sp^3, sp^2", "sp^3, sp^3, sp^2", "sp^2, sp^2, sp^3"],
    0,
    "In diamond, each carbon is tetrahedral (sp^3); in graphite, each carbon forms 3 coplanar bonds (sp^2); in fullerenes (C60), carbons form curved sp^2 networks."
  );
  add(
    "Which of the following molecules has an sp hybridized central atom?",
    ["\\text{BeF}_2", "\\text{BF}_3", "\\text{CH}_4", "\\text{H}_2\\text{O}"],
    0,
    "\\text{BeF}_2 has 2 \\sigma-bonds and 0 lone pairs on Be: Steric number = 2 \\implies sp hybridized."
  );
  add(
    "What is the hybridization of Sulfur in \\text{SF}_4?",
    ["sp^3d", "sp^3", "sp^3d^2", "sp^2"],
    0,
    "Sulfur has 4 \\sigma-bonds and 1 lone pair: Steric number = 5 \\implies sp^3d hybridization."
  );
  add(
    "What is the hybridization of Iodine in \\text{IF}_5?",
    ["sp^3d^2", "sp^3d", "sp^3", "sp^3d^3"],
    0,
    "Iodine has 5 \\sigma-bonds and 1 lone pair: Steric number = 6 \\implies sp^3d^2 hybridization (square pyramidal)."
  );
  add(
    "The hybridization of the central atom in \\text{CO}_3^{2-} is:",
    ["sp^2", "sp^3", "sp", "dsp^2"],
    0,
    "Carbon forms 3 \\sigma-bonds with oxygen (and one delocalized \\pi-bond) with 0 lone pairs: Steric number = 3 \\implies sp^2."
  );
  add(
    "According to Bent's rule:",
    ["More electronegative substituents prefer hybrid orbitals with less s-character, while lone pairs and electropositive substituents prefer orbitals with more s-character", "More electronegative substituents prefer orbitals with more s-character", "All hybrid orbitals must have identical s-character", "Hybridization does not depend on substituent electronegativity"],
    0,
    "Atomic s-character concentrates in orbitals directed towards electropositive substituents, while p-character concentrates towards electronegative substituents."
  );
  add(
    "In \\text{PCl}_3\\text{F}_2, which positions do the two more electronegative Fluorine atoms occupy according to Bent's rule?",
    ["Axial positions", "Equatorial positions", "One axial and one equatorial", "Randomly distributed"],
    0,
    "Axial hybrid orbitals in sp^3d have more p-character (pd hybrid), so the more electronegative Fluorine atoms selectively occupy axial positions."
  );
  add(
    "What is the state of hybridization of Aluminum in gaseous \\text{AlCl}_3 and in the dimeric \\text{Al}_2\\text{Cl}_6 respectively?",
    ["sp^2 \\text{ and } sp^3", "sp^3 \\text{ and } sp^2", "sp^2 \\text{ and } sp^2", "sp^3 \\text{ and } sp^3"],
    0,
    "In monomeric \\text{AlCl}_3, Al forms 3 \\sigma-bonds (sp^2). In the dimer \\text{Al}_2\\text{Cl}_6, bridging chlorines provide a fourth bond, making Al sp^3 hybridized."
  );
  add(
    "What is the hybridization of Beryllium in solid polymeric (\\text{BeCl}_2)_n?",
    ["sp^3", "sp", "sp^2", "sp^3d"],
    0,
    "In solid polymeric \\text{BeCl}_2, each Beryllium is coordinated to four chlorine atoms via bridging coordinate bonds, adopting sp^3 tetrahedral geometry."
  );
  add(
    "How many \\sigma and \\pi bonds are present in benzene (\\text{C}_6\\text{H}_6)?",
    ["12 \\sigma, 3 \\pi", "6 \\sigma, 3 \\pi", "9 \\sigma, 3 \\pi", "12 \\sigma, 6 \\pi"],
    0,
    "Benzene has six C-C \\sigma-bonds, six C-H \\sigma-bonds (total 12 \\sigma), and three delocalized \\pi-bonds."
  );
  add(
    "In the molecule \\text{CH}_3-\text{CH}=\\text{CH}-\\text{C}\\equiv\\text{CH}, how many carbon atoms are sp^2 hybridized?",
    ["2", "1", "3", "4"],
    0,
    "Carbons C2 and C3 are involved in the double bond and are sp^2 hybridized; C1 is sp^3; C4 and C5 are sp hybridized."
  );
  add(
    "Which of the following molecules involves d_{z^2} orbital in its hybridization?",
    ["\\text{PCl}_5", "\\text{CH}_4", "\\text{BF}_3", "\\text{BeCl}_2"],
    0,
    "The trigonal bipyramidal sp^3d hybridization in \\text{PCl}_5 involves the d_{z^2} orbital for axial bonding."
  );
  add(
    "What is the hybridization of Boron in the adduct \\text{F}_3\\text{B}\\leftarrow\\text{NH}_3?",
    ["sp^3", "sp^2", "sp", "dsp^2"],
    0,
    "Before coordination, Boron in \\text{BF}_3 is sp^2. Upon accepting the lone pair from \\text{NH}_3, Boron forms 4 \\sigma-bonds and becomes sp^3 hybridized."
  );
  add(
    "What is the hybridization of Nitrogen in the adduct \\text{F}_3\\text{B}\\leftarrow\\text{NH}_3?",
    ["sp^3", "sp^2", "sp", "dsp^2"],
    0,
    "Nitrogen donates its lone pair into Boron's empty orbital, maintaining 4 single bonds and retaining sp^3 hybridization."
  );
  add(
    "Which of the following compounds has an sp^2 hybridized central atom?",
    ["\\text{SO}_3", "\\text{SO}_4^{2-}", "\\text{NH}_3", "\\text{CH}_4"],
    0,
    "Sulfur in \\text{SO}_3 forms 3 \\sigma-bonds and has 0 lone pairs: Steric number = 3 \\implies sp^2 hybridization (trigonal planar)."
  );
  add(
    "In which of the following species is the hybridization of the central atom sp^3d^2?",
    ["[\\text{SiF}_6]^{2-}", "[\\text{BF}_4]^-", "\\text{PCl}_5", "\\text{SF}_4"],
    0,
    "Silicon has 6 \\sigma-bonds with F: Steric number = 6 \\implies sp^3d^2 hybridization."
  );
  add(
    "What is the hybridization of the central atom in \\text{XeO}_2\\text{F}_2?",
    ["sp^3d", "sp^3", "sp^3d^2", "sp^2"],
    0,
    "Xenon forms 4 \\sigma-bonds (2 to O, 2 to F) and has 1 lone pair: Steric number = 5 \\implies sp^3d hybridization (see-saw shape)."
  );
  add(
    "The state of hybridization of Oxygen in \\text{H}_2\\text{O} is:",
    ["sp^3", "sp^2", "sp", "dsp^2"],
    0,
    "Oxygen forms 2 \\sigma-bonds and has 2 lone pairs: Steric number = 4 \\implies sp^3 hybridization."
  );
  add(
    "Which of the following species does NOT involve d-orbitals in hybridization?",
    ["\\text{NH}_4^+", "\\text{SF}_6", "\\text{PCl}_5", "\\text{XeF}_4"],
    0,
    "\\text{NH}_4^+ involves only 2s and 2p orbitals (sp^3)."
  );
  add(
    "The bond angle in a molecule decreases as the s-character of the hybrid orbital:",
    ["Decreases", "Increases", "Remains constant", "Reaches 50%"],
    0,
    "Bond angles follow s-character: sp (50% s, 180^\\circ) > sp^2 (33.3% s, 120^\\circ) > sp^3 (25% s, 109.5^\\circ). Decreased s-character means smaller bond angle."
  );
  add(
    "The hybridization of the central atom in \\text{ICl}_2^- is:",
    ["sp^3d", "sp^3", "sp^3d^2", "sp^2"],
    0,
    "Iodine has 2 \\sigma-bonds and 3 lone pairs: Steric number = 5 \\implies sp^3d."
  );
  add(
    "In the reaction \\text{BF}_3 + \\text{F}^- \\rightarrow \\text{BF}_4^-, the hybridization of Boron changes from:",
    ["sp^2 \\text{ to } sp^3", "sp^3 \\text{ to } sp^2", "sp \\text{ to } sp^2", "sp^3 \\text{ to } sp^3d"],
    0,
    "Trigonal planar \\text{BF}_3 (sp^2) gains a fluoride ion to become tetrahedral \\text{BF}_4^- (sp^3)."
  );
  add(
    "The number of 90^\\circ bond angles in an octahedral sp^3d^2 hybridized molecule (such as \\text{SF}_6) is:",
    ["12", "6", "8", "4"],
    0,
    "An octahedron has 12 adjacent 90^\\circ angles (4 in equatorial plane, 4 between axial top and equatorial, 4 between axial bottom and equatorial)."
  );
  add(
    "Assertion (A): Carbon in ethyne is more electronegative than carbon in ethene and ethane.\nReason (R): The percentage of s-character in the hybrid orbitals of carbon decreases in the order sp (50%) > sp^2 (33.3%) > sp^3 (25%).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Higher s-character concentrates valence electrons closer to the carbon nucleus, increasing electronegativity. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Solid \\text{PCl}_5 is an electrical conductor in polar solvents.\nReason (R): Solid \\text{PCl}_5 exists in the ionic form as [\\text{PCl}_4]^+ [\\text{PCl}_6]^-.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The presence of mobile [\\text{PCl}_4]^+ and [\\text{PCl}_6]^- ions allows electrical conduction. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): All carbon atoms in benzene are sp^2 hybridized.\nReason (R): Each carbon atom in benzene forms three \\sigma-bonds with 120^\\circ bond angles, leaving one unhybridized 2p-orbital to participate in delocalized \\pi-bonding.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Planar hexagonal geometry arises from sp^2 hybridization of all six carbons. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In \\text{PCl}_3\\text{F}_2, the two Fluorine atoms occupy the axial positions.\nReason (R): According to Bent's rule, more electronegative substituents prefer hybrid orbitals having greater p-character (the axial pd hybrids in sp^3d).",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Axial bonds in sp^3d consist of p_z-d_{z^2} character with 0% s-character, perfectly accommodating highly electronegative Fluorine. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The central carbon atom in allene (\\text{H}_2\\text{C}=\\text{C}=\\text{CH}_2) is sp hybridized.\nReason (R): The central carbon forms two \\sigma-bonds and two \\pi-bonds with two adjacent sp^2 hybridized carbon atoms.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Two \\sigma-bonds require steric number 2 (sp hybridization). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): When \\text{BF}_3 reacts with \\text{NH}_3, the bond angle at Boron decreases.\nReason (R): The hybridization of Boron changes from sp^2 (120^\\circ) in \\text{BF}_3 to sp^3 (~109.5^\\circ) in the adduct \\text{F}_3\\text{B}\\leftarrow\\text{NH}_3.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Conversion from trigonal planar to tetrahedral decreases the bond angle from 120^\\circ to ~109.5^\\circ. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Diamond is an electrical insulator while graphite is a good conductor of electricity.\nReason (R): In diamond, all four valence electrons of each carbon are localized in sp^3 \\sigma-bonds, whereas in graphite, each carbon has one unhybridized p-electron delocalized in a \\pi-system over the hexagonal sheets.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Delocalized electrons in graphite convey electrical current, while localized electrons in diamond cannot. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getMolecularOrbitalTheoryQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Molecular orbital theory", text, opts, ans, exp, diff, type));

  add(
    "According to Molecular Orbital Theory (MOT), atomic orbitals combine to form molecular orbitals through LCAO (Linear Combination of Atomic Orbitals) if they satisfy:",
    ["Comparable energy, proper symmetry about the internuclear axis, and maximum overlap", "Identical principal quantum numbers only", "Zero overlap", "Opposite spins only"],
    0,
    "The three conditions for LCAO are: comparable energy, identical or compatible symmetry about the molecular bond axis, and effective overlap."
  );
  add(
    "The constructive interference of two atomic orbital wavefunctions (\\psi_A + \\psi_B) results in:",
    ["A bonding molecular orbital with increased electron density between nuclei and lower energy", "An antibonding molecular orbital with a nodal plane", "A non-bonding orbital", "Nuclear fusion"],
    0,
    "Constructive overlap gives bonding MO: \\psi_{\\text{MO}} = \\psi_A + \\psi_B, enhancing electron density between the nuclei and lowering the ground-state potential energy."
  );
  add(
    "An antibonding molecular orbital is characterized by:",
    ["A nodal plane between the two nuclei and higher energy than the combining atomic orbitals", "High electron density between nuclei", "Lower energy than bonding orbital", "Zero kinetic energy"],
    0,
    "Destructive interference (\\psi_A - \\psi_B) creates a nodal plane where electron density is zero, destabilizing the system (higher energy)."
  );
  add(
    "For homonuclear diatomic molecules of elements with atomic number Z \\le 7 (such as \\text{B}_2, \\text{C}_2, \\text{N}_2), why is the energy of \\sigma_{2p_z} higher than that of \\pi_{2p_x} and \\pi_{2p_y}?",
    ["Significant s-p mixing raises the energy of \\sigma_{2p_z} and lowers the energy of \\sigma_{2s}", "p-orbitals are higher in energy than d-orbitals", "\\pi-bonds are always stronger than \\sigma-bonds", "Electrons repel each other in s-orbitals"],
    0,
    "Small energy gap between 2s and 2p orbitals in light elements causes mixing between \\sigma_{2s} and \\sigma_{2p_z}, pushing \\sigma_{2p_z} above the \\pi_{2p} level."
  );
  add(
    "The correct sequence of increasing energy of molecular orbitals for \\text{N}_2 (14 electrons) is:",
    ["\\sigma_{1s} < \\sigma^*_{1s} < \\sigma_{2s} < \\sigma^*_{2s} < (\\pi_{2p_x} = \\pi_{2p_y}) < \\sigma_{2p_z} < (\\pi^*_{2p_x} = \\pi^*_{2p_y}) < \\sigma^*_{2p_z}", "\\sigma_{1s} < \\sigma^*_{1s} < \\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p_z} < (\\pi_{2p_x} = \\pi_{2p_y}) < (\\pi^*_{2p_x} = \\pi^*_{2p_y}) < \\sigma^*_{2p_z}", "\\sigma_{1s} < \\sigma_{2s} < \\sigma^*_{1s} < \\sigma^*_{2s} < \\sigma_{2p_z}", "\\sigma_{1s} < \\sigma^*_{1s} < (\\pi_{2p_x} = \\pi_{2p_y}) < \\sigma_{2s}"],
    0,
    "For molecules with \\le 14 electrons, \\pi_{2p} orbitals are filled before \\sigma_{2p_z} due to s-p mixing."
  );
  add(
    "For oxygen (\\text{O}_2, 16 electrons), the molecular orbital energy ordering is:",
    ["\\sigma_{1s} < \\sigma^*_{1s} < \\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p_z} < (\\pi_{2p_x} = \\pi_{2p_y}) < (\\pi^*_{2p_x} = \\pi^*_{2p_y}) < \\sigma^*_{2p_z}", "\\sigma_{1s} < \\sigma^*_{1s} < \\sigma_{2s} < \\sigma^*_{2s} < (\\pi_{2p_x} = \\pi_{2p_y}) < \\sigma_{2p_z}", "\\sigma_{1s} < \\sigma_{2s} < \\pi_{2p} < \\sigma_{2p_z}", "\\sigma_{1s} < \\sigma^*_{1s} < \\pi^*_{2p} < \\pi_{2p}"],
    0,
    "For Z > 7 (O2, F2), the large 2s-2p energy gap prevents s-p mixing, so the normal ordering applies: \\sigma_{2p_z} lies below \\pi_{2p}."
  );
  add(
    "The formula for calculating bond order from molecular orbital electron occupancy is:",
    ["\\text{Bond order} = \\frac{N_b - N_a}{2}", "\\text{Bond order} = \\frac{N_b + N_a}{2}", "\\text{Bond order} = N_b - N_a", "\\text{Bond order} = \\frac{N_a - N_b}{2}"],
    0,
    "Bond order is half the difference between the number of bonding electrons (N_b) and antibonding electrons (N_a)."
  );
  add(
    "Why is the oxygen molecule (\\text{O}_2) paramagnetic in the ground state?",
    ["It has two unpaired electrons in degenerate antibonding \\pi^*_{2p_x} and \\pi^*_{2p_y} orbitals according to Hund's rule", "It has unpaired electrons in \\sigma_{2s}", "All electrons are paired", "Oxygen has an odd atomic number"],
    0,
    "Filling 16 electrons: ...(\\sigma_{2p_z})^2 (\\pi_{2p_x}^2 = \\pi_{2p_y}^2) (\\pi^*_{2p_x}^1 = \\pi^*_{2p_y}^1). By Hund's rule, two unpaired parallel spins occupy \\pi^* orbitals, causing paramagnetism."
  );
  add(
    "What is the bond order of the oxygen molecule (\\text{O}_2)?",
    ["2.0", "1.5", "2.5", "1.0"],
    0,
    "In \\text{O}_2, N_b = 10 (or 8 valence) and N_a = 6 (or 4 valence): \\text{Bond order} = \\frac{10 - 6}{2} = 2.0."
  );
  add(
    "What is the bond order and magnetic nature of the superoxide ion (\\text{O}_2^-)?",
    ["1.5, Paramagnetic", "2.0, Diamagnetic", "1.0, Diamagnetic", "2.5, Paramagnetic"],
    0,
    "\\text{O}_2^- has 17 electrons. The 17th electron enters one of the \\pi^* orbitals: (\\pi^*_{2p_x})^2 (\\pi^*_{2p_y})^1. Bond order = (10 - 7)/2 = 1.5 with 1 unpaired electron (paramagnetic)."
  );
  add(
    "What is the bond order and magnetic nature of the peroxide ion (\\text{O}_2^{2-})?",
    ["1.0, Diamagnetic", "1.5, Paramagnetic", "2.0, Paramagnetic", "0.5, Diamagnetic"],
    0,
    "\\text{O}_2^{2-} has 18 electrons: (\\pi^*_{2p_x})^2 (\\pi^*_{2p_y})^2. All electrons are paired (diamagnetic) and \\text{Bond order} = (10 - 8)/2 = 1.0."
  );
  add(
    "What is the bond order and magnetic nature of the dioxygenyl cation (\\text{O}_2^+)?",
    ["2.5, Paramagnetic", "2.0, Diamagnetic", "3.0, Diamagnetic", "1.5, Paramagnetic"],
    0,
    "Removing an antibonding electron leaves 15 electrons: (\\pi^*_{2p})^1. \\text{Bond order} = (10 - 5)/2 = 2.5 with 1 unpaired electron (paramagnetic)."
  );
  add(
    "The correct order of bond length for the dioxygen species \\text{O}_2^+, \\text{O}_2, \\text{O}_2^-, \\text{O}_2^{2-} is:",
    ["\\text{O}_2^{2-} > \\text{O}_2^- > \\text{O}_2 > \\text{O}_2^+", "\\text{O}_2^+ > \\text{O}_2 > \\text{O}_2^- > \\text{O}_2^{2-}", "\\text{O}_2 > \\text{O}_2^+ > \\text{O}_2^- > \\text{O}_2^{2-}", "\\text{O}_2^- > \\text{O}_2^{2-} > \\text{O}_2 > \\text{O}_2^+"],
    0,
    "Bond length is inversely proportional to bond order. Bond orders: \\text{O}_2^+ (2.5) > \\text{O}_2 (2.0) > \\text{O}_2^- (1.5) > \\text{O}_2^{2-} (1.0). Thus bond lengths: \\text{O}_2^{2-} (149 pm) > \\text{O}_2^- (128 pm) > \\text{O}_2 (121 pm) > \\text{O}_2^+ (112 pm)."
  );
  add(
    "According to MOT, both bonds in the \\text{C}_2 molecule are \\pi-bonds because:",
    ["The four valence electrons occupy degenerate \\pi_{2p_x} and \\pi_{2p_y} bonding molecular orbitals with no electrons in \\sigma_{2p_z}", "Carbon cannot form \\sigma-bonds", "The bond order is 1", "\\text{C}_2 has no 2s electrons"],
    0,
    "\\text{C}_2 (12 electrons): configuration is KK (\\sigma_{2s})^2 (\\sigma^*_{2s})^2 (\\pi_{2p_x})^2 (\\pi_{2p_y})^2. All four valence bonding electrons reside in \\pi-orbitals, making both bonds \\pi-bonds."
  );
  add(
    "What is the bond order and magnetic behavior of the \\text{B}_2 molecule (10 electrons)?",
    ["1.0, Paramagnetic with 2 unpaired electrons", "1.0, Diamagnetic", "2.0, Paramagnetic", "0.5, Paramagnetic"],
    0,
    "Configuration: KK (\\sigma_{2s})^2 (\\sigma^*_{2s})^2 (\\pi_{2p_x})^1 (\\pi_{2p_y})^1. Bond order = (4 - 2)/2 = 1.0. Two unpaired electrons in degenerate \\pi-orbitals impart paramagnetism."
  );
  add(
    "What is the bond order of the Nitrogen molecule (\\text{N}_2)?",
    ["3.0", "2.5", "2.0", "1.5"],
    0,
    "\\text{N}_2 (14 electrons): N_b = 10, N_a = 4. \\text{Bond order} = (10 - 4)/2 = 3.0 (one \\sigma and two \\pi bonds), with no unpaired electrons (diamagnetic)."
  );
  add(
    "When \\text{N}_2 is converted to \\text{N}_2^+, the electron is removed from which molecular orbital, and what happens to the bond order?",
    ["Removed from \\sigma_{2p_z} bonding orbital; bond order decreases from 3.0 to 2.5", "Removed from \\pi^*_{2p} antibonding orbital; bond order increases to 3.5", "Removed from \\sigma^*_{2s}; bond order increases to 3.5", "Bond order remains unchanged at 3.0"],
    0,
    "In \\text{N}_2, the HOMO is \\sigma_{2p_z}. Removing a bonding electron gives \\text{N}_2^+ with bond order (9 - 4)/2 = 2.5."
  );
  add(
    "When \\text{O}_2 is converted to \\text{O}_2^+, the electron is removed from which orbital, and what happens to the bond order?",
    ["Removed from an antibonding \\pi^*_{2p} orbital; bond order increases from 2.0 to 2.5", "Removed from \\sigma_{2p_z} bonding orbital; bond order decreases to 1.5", "Removed from \\sigma_{2s}; bond order remains 2.0", "Removed from \\pi_{2p}; bond order decreases to 1.5"],
    0,
    "In \\text{O}_2, the HOMO is the antibonding \\pi^*_{2p}. Removing an antibonding electron increases the bond order: (10 - 5)/2 = 2.5."
  );
  add(
    "Which of the following diatomic species CANNOT exist according to MOT?",
    ["\\text{He}_2", "\\text{H}_2^+", "\\text{He}_2^+", "\\text{H}_2"],
    0,
    "\\text{He}_2 has 4 electrons: (\\sigma_{1s})^2 (\\sigma^*_{1s})^2. N_b = 2, N_a = 2 \\implies \\text{Bond order} = 0. Molecules with zero bond order do not exist."
  );
  add(
    "Why does \\text{Be}_2 not exist as a stable diatomic molecule?",
    ["Its bond order is zero because (\\sigma_{1s})^2 (\\sigma^*_{1s})^2 (\\sigma_{2s})^2 (\\sigma^*_{2s})^2 has equal numbers of bonding and antibonding electrons", "Beryllium is a gas", "Beryllium cannot share electrons", "It has 3 unpaired electrons"],
    0,
    "\\text{Be}_2 (8 electrons): N_b = 4, N_a = 4 \\implies \\text{Bond order} = 0."
  );
  add(
    "What is the bond order of \\text{He}_2^+ ion (3 electrons)?",
    ["0.5", "1.0", "0", "1.5"],
    0,
    "\\text{He}_2^+: (\\sigma_{1s})^2 (\\sigma^*_{1s})^1. \\text{Bond order} = (2 - 1)/2 = 0.5."
  );
  add(
    "What is the bond order of \\text{H}_2^+ ion (1 electron)?",
    ["0.5", "1.0", "0", "1.5"],
    0,
    "\\text{H}_2^+: (\\sigma_{1s})^1. \\text{Bond order} = (1 - 0)/2 = 0.5."
  );
  add(
    "Which of the following species is diamagnetic?",
    ["\\text{N}_2", "\\text{O}_2", "\\text{B}_2", "\\text{NO}"],
    0,
    "\\text{N}_2 has 14 electrons with all orbitals completely filled and paired (diamagnetic)."
  );
  add(
    "Which of the following heteronuclear diatomic species has a bond order of 3.0 and is diamagnetic?",
    ["\\text{CO}", "\\text{NO}", "\\text{O}_2^-", "\\text{B}_2"],
    0,
    "\\text{CO} is isoelectronic with \\text{N}_2 (14 electrons), possessing a bond order of 3.0 and diamagnetic character."
  );
  add(
    "What is the bond order of Nitric oxide (\\text{NO}, 15 electrons)?",
    ["2.5", "3.0", "2.0", "1.5"],
    0,
    "\\text{NO} has 15 electrons: 10 bonding and 5 antibonding. \\text{Bond order} = (10 - 5)/2 = 2.5."
  );
  add(
    "What is the bond order and magnetic nature of the nitrosonium cation (\\text{NO}^+)?",
    ["3.0, Diamagnetic", "2.5, Paramagnetic", "2.0, Diamagnetic", "1.5, Paramagnetic"],
    0,
    "\\text{NO}^+ has 14 electrons (isoelectronic with \\text{N}_2): \\text{Bond order} = (10 - 4)/2 = 3.0 and all electrons paired (diamagnetic)."
  );
  add(
    "Which of the following pairs of species are isoelectronic and have the same bond order?",
    ["\\text{CN}^- \\text{ and } \\text{CO}", "\\text{O}_2 \\text{ and } \\text{N}_2", "\\text{NO} \\text{ and } \\text{CO}", "\\text{N}_2 \\text{ and } \\text{O}_2^-"],
    0,
    "Both \\text{CN}^- (6 + 7 + 1 = 14) and \\text{CO} (6 + 8 = 14) have 14 electrons and a bond order of 3.0."
  );
  add(
    "In the formation of a \\pi molecular orbital from two 2p atomic orbitals, the overlap occurs:",
    ["Laterally (sideways), perpendicular to the internuclear axis", "Head-on along the internuclear axis", "With s-orbitals only", "Between 1s and 2s"],
    0,
    "\\pi molecular orbitals result from sideways/lateral overlap of parallel p-orbitals oriented perpendicular to the bond axis."
  );
  add(
    "How many nodal planes are present in a \\pi^*_{2p} antibonding molecular orbital?",
    ["2", "1", "0", "3"],
    0,
    "\\pi^*_{2p} has two nodal planes: one containing the internuclear axis (inherent to \\pi overlap) and one perpendicular to the internuclear axis between the nuclei."
  );
  add(
    "Which of the following species has the highest bond dissociation energy?",
    ["\\text{N}_2", "\\text{O}_2", "\\text{F}_2", "\\text{C}_2"],
    0,
    "\\text{N}_2 has the highest bond order (3.0) and shortest bond length, resulting in an exceptionally high bond dissociation energy (945 kJ/mol)."
  );
  add(
    "The bond order of \\text{F}_2 molecule (18 electrons) is:",
    ["1.0", "2.0", "1.5", "0.5"],
    0,
    "\\text{F}_2 has 10 bonding and 8 antibonding electrons: \\text{Bond order} = (10 - 8)/2 = 1.0 (single bond, diamagnetic)."
  );
  add(
    "Which of the following molecules has fractional bond order?",
    ["\\text{O}_2^-", "\\text{N}_2", "\\text{O}_2", "\\text{C}_2"],
    0,
    "\\text{O}_2^- has a bond order of 1.5 (fractional), while the others have integer bond orders (3, 2, 2)."
  );
  add(
    "Which of the following sets of species is arranged in order of INCREASING bond order?",
    ["\\text{O}_2^{2-} < \\text{O}_2^- < \\text{O}_2 < \\text{O}_2^+", "\\text{O}_2^+ < \\text{O}_2 < \\text{O}_2^- < \\text{O}_2^{2-}", "\\text{O}_2^- < \\text{O}_2 < \\text{O}_2^{2-} < \\text{O}_2^+", "\\text{O}_2 < \\text{O}_2^- < \\text{O}_2^{2-} < \\text{O}_2^+"],
    0,
    "Bond orders: \\text{O}_2^{2-} (1.0) < \\text{O}_2^- (1.5) < \\text{O}_2 (2.0) < \\text{O}_2^+ (2.5)."
  );
  add(
    "Among \\text{H}_2, \\text{H}_2^+, \\text{He}_2^+, and \\text{He}_2, the order of stability is:",
    ["\\text{H}_2 > \\text{H}_2^+ \\approx \\text{He}_2^+ > \\text{He}_2", "\\text{He}_2 > \\text{He}_2^+ > \\text{H}_2^+ > \\text{H}_2", "\\text{H}_2^+ > \\text{H}_2 > \\text{He}_2^+ > \\text{He}_2", "\\text{H}_2 > \\text{He}_2 > \\text{H}_2^+ > \\text{He}_2^+"],
    0,
    "\\text{H}_2 (BO = 1) is most stable; \\text{H}_2^+ (BO = 0.5) is more stable than \\text{He}_2^+ (BO = 0.5) because \\text{He}_2^+ has an antibonding electron; \\text{He}_2 (BO = 0) is unstable and does not exist."
  );
  add(
    "In \\text{O}_2^-, the magnetic moment \\mu_s is given by \\sqrt{n(n+2)} BM. With 1 unpaired electron (n = 1), \\mu_s is:",
    ["1.73 BM", "2.83 BM", "0 BM", "3.87 BM"],
    0,
    "\\mu = \\sqrt{1(1+2)} = \\sqrt{3} \\approx 1.73 BM."
  );
  add(
    "In \\text{O}_2, with 2 unpaired electrons (n = 2), the spin-only magnetic moment is:",
    ["2.83 BM", "1.73 BM", "0 BM", "3.87 BM"],
    0,
    "\\mu = \\sqrt{2(2+2)} = \\sqrt{8} \\approx 2.83 BM."
  );
  add(
    "Which of the following diatomic molecules has ONLY \\pi-bonds and NO \\sigma-bond in its ground state?",
    ["\\text{C}_2", "\\text{N}_2", "\\text{O}_2", "\\text{B}_2"],
    0,
    "As deduced from MOT, both bonds in \\text{C}_2 are \\pi-bonds formed by the four electrons in (\\pi_{2p_x})^2 (\\pi_{2p_y})^2."
  );
  add(
    "A sigma (\\sigma) molecular orbital is symmetric with respect to:",
    ["Rotation about the internuclear axis", "Inversion through center of mass only", "Reflection across nodal plane only", "Rotation about an axis perpendicular to bond axis"],
    0,
    "By definition, a \\sigma molecular orbital exhibits complete cylindrical symmetry upon rotation around the internuclear bond axis."
  );
  add(
    "Which of the following molecular orbitals has a 'gerade' (g) symmetry in a homonuclear diatomic molecule?",
    ["\\sigma_{2p_z} \\text{ and } \\pi^*_{2p}", "\\sigma^*_{2s} \\text{ and } \\pi_{2p}", "\\sigma^*_{2p_z} \\text{ and } \\sigma_{2s}", "\\pi_{2p} \\text{ only}"],
    0,
    "Under inversion through the center of symmetry: \\sigma_g (bonding \\sigma) and \\pi^*_g (antibonding \\pi) retain their sign (gerade)."
  );
  add(
    "The bond order of the acetylide ion (\\text{C}_2^{2-}) is:",
    ["3.0", "2.5", "2.0", "1.5"],
    0,
    "\\text{C}_2^{2-} has 14 electrons (isoelectronic with \\text{N}_2): \\text{Bond order} = (10 - 4)/2 = 3.0."
  );
  add(
    "Assertion (A): Oxygen molecule (\\text{O}_2) is paramagnetic.\nReason (R): According to Molecular Orbital Theory, the two highest energy valence electrons occupy degenerate antibonding \\pi^*_{2p_x} and \\pi^*_{2p_y} orbitals with parallel spins.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Hund's rule dictates parallel spins in the degenerate \\pi^* MOs, creating paramagnetism. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{He}_2 molecule does not exist in nature.\nReason (R): The bond order of \\text{He}_2 is zero because the number of bonding electrons equals the number of antibonding electrons.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "\\text{Bond order} = (2 - 2)/2 = 0; without net bonding stabilization, no molecule forms. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{N}_2 has a higher bond dissociation energy than \\text{N}_2^+.\nReason (R): Ionization of \\text{N}_2 to \\text{N}_2^+ removes an electron from a bonding \\sigma_{2p_z} molecular orbital, decreasing the bond order from 3.0 to 2.5.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Removing a bonding electron weakens the bond and reduces bond order. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{O}_2^+ has a higher bond dissociation energy than \\text{O}_2.\nReason (R): Ionization of \\text{O}_2 to \\text{O}_2^+ removes an electron from an antibonding \\pi^*_{2p} orbital, increasing the bond order from 2.0 to 2.5.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Removing an antibonding electron stabilizes the bond and increases bond order. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Both bonds in the \\text{C}_2 molecule are \\pi-bonds.\nReason (R): The four valence electrons in \\text{C}_2 occupy the degenerate \\pi_{2p_x} and \\pi_{2p_y} bonding orbitals with zero electrons in \\sigma_{2p_z}.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Due to s-p mixing, \\pi_{2p} is lower than \\sigma_{2p_z}, so all bonding valence electrons are \\pi-electrons. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{B}_2 is paramagnetic while \\text{C}_2 is diamagnetic.\nReason (R): In \\text{B}_2, two electrons singly occupy the degenerate \\pi_{2p_x} and \\pi_{2p_y} orbitals, whereas in \\text{C}_2 these orbitals are completely filled with four paired electrons.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Unpaired electrons in \\text{B}_2 cause paramagnetism; fully paired shell in \\text{C}_2 causes diamagnetism. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\text{CO} molecule is isoelectronic with \\text{N}_2 and has a bond order of 3.0.\nReason (R): Both \\text{CO} and \\text{N}_2 have 14 electrons distributed as 10 bonding and 4 antibonding electrons in their molecular orbitals.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Same total valence electron count gives identical bond order (10 - 4)/2 = 3.0. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getHybridizationQuestions,
  getMolecularOrbitalTheoryQuestions
};
