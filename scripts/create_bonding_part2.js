// Generator for scripts/data_bonding_part2.js
const fs = require("fs");
const path = require("path");

function buildPart2() {
  const content = `// Chemical Bonding and Molecular Structure - Part 2
// Subtopics:
// 3. Polarity (47 questions)
// 4. Dipole moment and hydrogen bonding (47 questions)
// 5. VSEPR theory (47 questions)

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

function getPolarityQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Polarity", text, opts, ans, exp, diff, type));

  add(
    "A covalent bond between two identical atoms (such as \\\\text{H}_2 or \\\\text{Cl}_2) is strictly non-polar because:",
    ["The shared electron pair is attracted equally by the two identical nuclei", "The electronegativity difference is greater than 2.0", "Electrons are transferred completely", "The molecule is an ionic solid"],
    0,
    "With zero electronegativity difference (\\\\Delta\\\\chi = 0), the bonding electron pair is positioned symmetrically between identical nuclei."
  );
  add(
    "Which of the following molecules has polar bonds but a ZERO net dipole moment?",
    ["\\\\text{CO}_2", "\\\\text{SO}_2", "\\\\text{H}_2\\\\text{O}", "\\\\text{NH}_3"],
    0,
    "In linear \\\\text{CO}_2 (O=C=O), the two equal and oppositely directed C=O bond dipoles cancel out completely (\\\\mu = 0)."
  );
  add(
    "Which of the following molecules possesses a permanent dipole moment (\\\\mu \\\\ne 0)?",
    ["\\\\text{SO}_2", "\\\\text{CO}_2", "\\\\text{BF}_3", "\\\\text{CCl}_4"],
    0,
    "\\\\text{SO}_2 is bent (angular) due to a lone pair on sulfur, so its two S-O bond dipoles do not cancel, yielding a net dipole moment of 1.63 D."
  );
  add(
    "Why is the dipole moment of \\\\text{NH}_3 (1.47 D) significantly greater than that of \\\\text{NF}_3 (0.24 D)?",
    ["In \\\\text{NH}_3, the orbital dipole of the lone pair reinforces the N-H bond dipoles, whereas in \\\\text{NF}_3 the N-F bond dipoles oppose the lone pair dipole", "Fluorine is less electronegative than Hydrogen", "\\\\text{NH}_3 is planar while \\\\text{NF}_3 is tetrahedral", "\\\\text{NF}_3 has no lone pair"],
    0,
    "In \\\\text{NH}_3, Nitrogen is more electronegative than Hydrogen, so bond dipoles point towards N, in the same direction as the lone pair dipole. In \\\\text{NF}_3, Fluorine is more electronegative than Nitrogen, pulling bond dipoles away from N and opposing the lone pair dipole."
  );
  add(
    "The dipole moments of methyl halides follow the unexpected order:",
    ["\\\\text{CH}_3\\\\text{Cl} > \\\\text{CH}_3\\\\text{F} > \\\\text{CH}_3\\\\text{Br} > \\\\text{CH}_3\\\\text{I}", "\\\\text{CH}_3\\\\text{F} > \\\\text{CH}_3\\\\text{Cl} > \\\\text{CH}_3\\\\text{Br} > \\\\text{CH}_3\\\\text{I}", "\\\\text{CH}_3\\\\text{Cl} > \\\\text{CH}_3\\\\text{Br} > \\\\text{CH}_3\\\\text{F} > \\\\text{CH}_3\\\\text{I}", "\\\\text{CH}_3\\\\text{I} > \\\\text{CH}_3\\\\text{Br} > \\\\text{CH}_3\\\\text{Cl} > \\\\text{CH}_3\\\\text{F}"],
    0,
    "Although Fluorine is more electronegative than Chlorine, dipole moment \\\\mu = q \\\\times d. The significantly longer C-Cl bond length (d) overcompensates for the slightly smaller charge separation, making \\\\text{CH}_3\\\\text{Cl} (1.86 D) higher than \\\\text{CH}_3\\\\text{F} (1.82 D)."
  );
  add(
    "Which of the following isomers of 1,2-dichloroethene has a zero dipole moment?",
    ["trans-1,2-dichloroethene", "cis-1,2-dichloroethene", "Both have identical non-zero dipole moments", "Both have zero dipole moments"],
    0,
    "In the trans isomer, the two polar C-Cl bonds and two C-H bonds point in exactly opposite directions across the double bond, canceling completely (\\\\mu = 0)."
  );
  add(
    "Among the isomeric dichlorobenzenes, the order of dipole moments is:",
    ["ortho-dichlorobenzene > meta-dichlorobenzene > para-dichlorobenzene = 0", "para-dichlorobenzene > meta-dichlorobenzene > ortho-dichlorobenzene", "meta-dichlorobenzene > ortho-dichlorobenzene > para-dichlorobenzene", "ortho = meta = para"],
    0,
    "Using \\\\mu_{\\\\text{net}} = \\\\sqrt{\\\\mu_1^2 + \\\\mu_2^2 + 2\\\\mu_1 \\\\mu_2 \\\\cos\\\\theta}: for ortho (\\\\theta = 60^\\\\circ), \\\\mu = \\\\sqrt{3}\\\\mu_0; meta (\\\\theta = 120^\\\\circ), \\\\mu = \\\\mu_0; para (\\\\theta = 180^\\\\circ), \\\\mu = 0."
  );
  add(
    "Which of the following planar molecules has a net dipole moment equal to ZERO?",
    ["\\\\text{BF}_3", "\\\\text{ClF}_3", "\\\\text{BrF}_3", "\\\\text{H}_2\\\\text{O}"],
    0,
    "\\\\text{BF}_3 is trigonal planar with three equal B-F dipoles oriented at 120^\\\\circ to each other; their vector sum is zero."
  );
  add(
    "The net dipole moment of Carbon tetrachloride (\\\\text{CCl}_4) is zero because:",
    ["The four polar C-Cl bonds are arranged symmetrically towards the corners of a regular tetrahedron", "C-Cl bonds are purely ionic", "Chlorine has zero electronegativity", "Carbon has lone pairs"],
    0,
    "In a regular tetrahedral geometry, the vector sum of four identical bond dipoles is zero."
  );
  add(
    "Which of the following tetrahedral molecules is polar (\\\\mu \\\\ne 0)?",
    ["\\\\text{CHCl}_3", "\\\\text{CCl}_4", "\\\\text{CH}_4", "\\\\text{CF}_4"],
    0,
    "In chloroform (\\\\text{CHCl}_3), the C-H bond dipole does not cancel the three C-Cl bond dipoles, resulting in a net dipole moment of 1.04 D."
  );
  add(
    "If the observed dipole moment of \\\\text{HCl} is 1.03 D and the calculated dipole moment for 100% ionic character is 6.12 D, the percent ionic character of \\\\text{HCl} is:",
    ["16.8%", "33.2%", "50.0%", "83.2%"],
    0,
    "% ionic character = \\\\frac{\\\\mu_{\\\\text{obs}}}{\\\\mu_{\\\\text{calc}}} \\\\times 100 = \\\\frac{1.03}{6.12} \\\\times 100 \\\\approx 16.8%."
  );
  add(
    "Which of the following molecules has the highest dipole moment?",
    ["\\\\text{H}_2\\\\text{O}", "\\\\text{H}_2\\\\text{S}", "\\\\text{H}_2\\\\text{Se}", "\\\\text{H}_2\\\\text{Te}"],
    0,
    "Oxygen has the highest electronegativity and smallest bond length, producing the largest bond dipole and net dipole moment (1.85 D for \\\\text{H}_2\\\\text{O})."
  );
  add(
    "The dipole moment of \\\\text{BeF}_2 in gas phase is zero because:",
    ["It is a symmetrical linear molecule with bond angle 180^\\\\circ", "Beryllium has high electronegativity", "The Be-F bond is non-polar", "It is tetrahedral"],
    0,
    "The two equal Be-F bond dipoles point in opposite directions along a straight line (180^\\\\circ) and cancel out."
  );
  add(
    "Which of the following pentafluorides has a net dipole moment of ZERO?",
    ["\\\\text{PCl}_5 \\\\text{ (gas)}", "\\\\text{BrF}_5", "\\\\text{IF}_5", "\\\\text{SF}_4"],
    0,
    "\\\\text{PCl}_5 is trigonal bipyramidal: the three equatorial P-Cl bonds at 120^\\\\circ cancel each other, and the two axial P-Cl bonds at 180^\\\\circ cancel each other."
  );
  add(
    "Which of the following xenon compounds has a dipole moment equal to ZERO?",
    ["\\\\text{XeF}_4", "\\\\text{XeOF}_4", "\\\\text{XeO}_3", "\\\\text{XeF}_6"],
    0,
    "\\\\text{XeF}_4 has a square planar geometry with two lone pairs trans to each other, so all bond dipoles and lone pair dipoles cancel completely (\\\\mu = 0)."
  );
  add(
    "The ozone molecule (\\\\text{O}_3) has a non-zero dipole moment (0.53 D) because:",
    ["It has a bent (angular) structure with a lone pair on the central oxygen", "Oxygen atoms have different isotopes", "It is linear", "It has no formal charge"],
    0,
    "The bent geometry prevents cancellation of the resonance bond dipoles."
  );
  add(
    "Which of the following molecules has the highest polarity?",
    ["\\\\text{HF}", "\\\\text{HCl}", "\\\\text{HBr}", "\\\\text{HI}"],
    0,
    "\\\\Delta\\\\chi between H and F is 1.9 (highest among hydrogen halides), giving \\\\text{HF} the largest dipole moment (1.82 D)."
  );
  add(
    "Which of the following compounds has a dipole moment of zero?",
    ["para-xylene (1,4-dimethylbenzene)", "ortho-xylene", "meta-xylene", "toluene"],
    0,
    "In para-xylene, the two methyl groups are positioned at 180^\\\\circ on opposite ends of the benzene ring, canceling each other's group dipoles."
  );
  add(
    "The unit 1 Debye (1 D) in SI units of electric dipole moment is equal to:",
    ["3.33564 \\\\times 10^{-30}\\\\text{ C m}", "1.602 \\\\times 10^{-19}\\\\text{ C m}", "9.109 \\\\times 10^{-31}\\\\text{ C m}", "1.0 \\\\times 10^{-18}\\\\text{ C m}"],
    0,
    "1 D = 10^{-18} esu cm = 3.33564 \\\\times 10^{-30} C m."
  );
  add(
    "Which of the following is a non-polar molecule possessing polar bonds?",
    ["\\\\text{SF}_6", "\\\\text{H}_2\\\\text{O}", "\\\\text{NH}_3", "\\\\text{CHCl}_3"],
    0,
    "In octahedral \\\\text{SF}_6, each S-F bond is strongly polar, but the octahedral symmetry cancels all dipoles in opposing pairs."
  );
  add(
    "Which of the following molecules has a non-zero dipole moment?",
    ["\\\\text{ClF}_3", "\\\\text{XeF}_2", "\\\\text{CO}_2", "\\\\text{BeCl}_2"],
    0,
    "\\\\text{ClF}_3 is T-shaped (asymmetric) with 2 equatorial lone pairs, leaving an uncancelled dipole moment (0.56 D)."
  );
  add(
    "The dipole moment of \\\\text{XeF}_2 is zero because:",
    ["It is a linear molecule with three equatorial lone pairs arranged symmetrically at 120^\\\\circ and two axial Xe-F bonds at 180^\\\\circ", "It is tetrahedral", "It is bent", "Xe-F bonds are non-polar"],
    0,
    "The two axial bond dipoles cancel each other, and the three equatorial lone pairs cancel symmetrically at 120^\\\\circ."
  );
  add(
    "Which of the following pairs of molecules both have ZERO dipole moment?",
    ["\\\\text{CO}_2\\\\text{ and CCl}_4", "\\\\text{H}_2\\\\text{O and NH}_3", "\\\\text{SO}_2\\\\text{ and CH}_4", "\\\\text{CHCl}_3\\\\text{ and BF}_3"],
    0,
    "Both linear \\\\text{CO}_2 and tetrahedral \\\\text{CCl}_4 are centrosymmetric with \\\\mu = 0."
  );
  add(
    "Which of the following compounds has the smallest dipole moment?",
    ["\\\\text{NF}_3", "\\\\text{NH}_3", "\\\\text{H}_2\\\\text{O}", "\\\\text{HF}"],
    0,
    "\\\\text{NF}_3 has \\\\mu = 0.24 D, much smaller than \\\\text{NH}_3 (1.47 D), \\\\text{H}_2\\\\text{O} (1.85 D), and \\\\text{HF} (1.82 D)."
  );
  add(
    "Which of the following statements explains why trans-but-2-ene has zero dipole moment while cis-but-2-ene is polar?",
    ["In trans-but-2-ene, the two methyl-to-sp^2 carbon bond dipoles are collinear and opposite in direction", "trans-but-2-ene is an alkyne", "cis-but-2-ene has ionic bonding", "trans-but-2-ene has no pi bond"],
    0,
    "The two -\\\\text{CH}_3 group dipoles cancel in the trans isomer, but reinforce each other in the cis isomer."
  );
  add(
    "The dipole moment of \\\\text{SnCl}_2 is non-zero because:",
    ["It has a bent V-shaped geometry with a lone pair on Sn", "It is linear", "It is an ionic lattice", "Sn-Cl bonds are non-polar"],
    0,
    "VSEPR theory gives \\\\text{SnCl}_2 a bent geometry (1 lone pair, 2 bond pairs), making it polar."
  );
  add(
    "Which of the following molecules has a dipole moment due to an unsymmetrical arrangement of identical bonds?",
    ["\\\\text{SF}_4", "\\\\text{SF}_6", "\\\\text{CH}_4", "\\\\text{CO}_2"],
    0,
    "\\\\text{SF}_4 has a see-saw geometry with 1 equatorial lone pair, preventing dipole cancellation."
  );
  add(
    "The bond dipoles in boron trifluoride (\\\\text{BF}_3) cancel out because the bond angles are:",
    ["120^\\\\circ in a trigonal planar geometry", "109.5^\\\\circ in a tetrahedral geometry", "180^\\\\circ in a linear geometry", "90^\\\\circ in a T-shape"],
    0,
    "Three equal vectors at 120^\\\\circ in a single plane have a resultant of zero."
  );
  add(
    "Which of the following halobenzenes has the highest dipole moment?",
    ["Fluorobenzene", "Chlorobenzene", "Bromobenzene", "Iodobenzene"],
    0,
    "Fluorine is the most electronegative halogen and gives the highest charge separation with the phenyl ring, resulting in the highest dipole moment (1.60 D)."
  );
  add(
    "In which of the following molecules does the dipole moment point from the central atom towards the terminal atoms?",
    ["\\\\text{BF}_3", "\\\\text{NH}_3", "\\\\text{PCl}_3", "\\\\text{H}_2\\\\text{O}"],
    2,
    "In \\\\text{PCl}_3, Chlorine is more electronegative than Phosphorus (3.16 vs 2.19), so bond dipoles point away from the central atom toward Cl."
  );
  add(
    "In \\\\text{NH}_3, the individual bond dipoles point:",
    ["Towards the central Nitrogen atom", "Towards the Hydrogen atoms", "Away from both atoms", "Perpendicular to the bonds"],
    0,
    "Nitrogen (\\\\chi = 3.04) is more electronegative than Hydrogen (\\\\chi = 2.1), so bond dipoles point toward Nitrogen."
  );
  add(
    "Which of the following compounds has zero dipole moment despite having polar bonds and lone pairs?",
    ["\\\\text{XeF}_2", "\\\\text{SO}_2", "\\\\text{O}_3", "\\\\text{NH}_3"],
    0,
    "In \\\\text{XeF}_2, the three equatorial lone pairs are arranged symmetrically at 120^\\\\circ and the two axial F atoms at 180^\\\\circ, so all dipoles cancel."
  );
  add(
    "What is the dipole moment of hydroquinone (1,4-dihydroxybenzene) in its planar anti-conformation?",
    ["Non-zero because the O-H bonds are bent at ~105^\\\\circ", "Strictly zero in all conformations", "Zero only at absolute zero", "Infinite"],
    0,
    "Because the C-O-H group is bent (not collinear with the ring), the O-H dipoles do not lie on the axis, giving hydroquinone a non-zero dipole moment (1.4 D) in solution."
  );
  add(
    "Which of the following pairs represents molecules that are both polar?",
    ["\\\\text{H}_2\\\\text{O and SO}_2", "\\\\text{CO}_2\\\\text{ and BF}_3", "\\\\text{CH}_4\\\\text{ and CCl}_4", "\\\\text{BeF}_2\\\\text{ and XeF}_4"],
    0,
    "Both \\\\text{H}_2\\\\text{O} (bent, 1.85 D) and \\\\text{SO}_2 (bent, 1.63 D) have bent structures and non-zero dipole moments."
  );
  add(
    "Which property increases as the polarity of a molecule increases?",
    ["Boiling point and solubility in polar solvents", "Volatility", "Vapor pressure", "Non-polar solubility"],
    0,
    "Greater polarity strengthens dipole-dipole attractions, elevating boiling points and enhancing solubility in polar media."
  );
  add(
    "Which of the following molecules has a see-saw geometry and a non-zero dipole moment?",
    ["\\\\text{SF}_4", "\\\\text{XeF}_4", "\\\\text{CCl}_4", "\\\\text{BF}_3"],
    0,
    "\\\\text{SF}_4 has 4 bond pairs and 1 lone pair (steric number 5, see-saw shape), resulting in an uncancelled dipole moment of 0.63 D."
  );
  add(
    "In which of the following molecules are the bond dipoles opposed to the lone pair dipole?",
    ["\\\\text{NF}_3", "\\\\text{NH}_3", "\\\\text{H}_2\\\\text{O}", "\\\\text{PCl}_3"],
    0,
    "In \\\\text{NF}_3, the electronegative F atoms pull bonding electrons away from N, opposing the orbital dipole of the lone pair."
  );
  add(
    "Which of the following molecules is linear and non-polar?",
    ["\\\\text{HCN}", "\\\\text{CS}_2", "\\\\text{SO}_2", "\\\\text{NO}_2"],
    1,
    "\\\\text{CS}_2 (S=C=S) is linear with two identical C=S dipoles canceling each other out (\\\\mu = 0). (HCN is linear but polar)."
  );
  add(
    "The percent ionic character of a bond between atoms with electronegativity difference \\\\Delta\\\\chi = 1.9 according to Pauling's curve is approximately:",
    ["55%", "10%", "90%", "25%"],
    0,
    "At \\\\Delta\\\\chi = 1.7, ionic character is 50%; at \\\\Delta\\\\chi = 1.9, it rises to approximately 55%."
  );
  add(
    "Which of the following molecules has a dipole moment of zero?",
    ["trans-1,4-dichlorocyclohexane (chair conformation)", "cis-1,4-dichlorocyclohexane", "1,1-dichlorocyclohexane", "chlorocyclohexane"],
    0,
    "In trans-1,4-dichlorocyclohexane (diaxial or diequatorial), the two C-Cl bond dipoles point in directly opposite directions and cancel."
  );
  add(
    "Assertion (A): The dipole moment of \\\\text{CO}_2 is zero, while that of \\\\text{SO}_2 is 1.63 D.\\nReason (R): \\\\text{CO}_2 is a linear molecule with zero lone pairs on carbon, whereas \\\\text{SO}_2 has a bent V-shaped structure due to a lone pair on sulfur.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Linear symmetry cancels dipoles in \\\\text{CO}_2; bent geometry prevents cancellation in \\\\text{SO}_2. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\\\text{NH}_3 has a much larger dipole moment than \\\\text{NF}_3.\\nReason (R): In \\\\text{NH}_3, the lone pair dipole and N-H bond dipoles reinforce each other, whereas in \\\\text{NF}_3 the N-F bond dipoles oppose the lone pair dipole.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Vector addition of orbital dipole and bond dipoles correctly explains the dramatic difference (1.47 D vs 0.24 D). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\\\text{CH}_3\\\\text{Cl} has a higher dipole moment than \\\\text{CH}_3\\\\text{F}.\\nReason (R): Dipole moment is the product of charge separation and bond distance (\\\\mu = q \\\\times d); the significantly larger C-Cl bond length overcompensates for the smaller charge difference.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "\\\\mu_{\\\\text{CH}_3\\\\text{Cl}} (1.86 D) > \\\\mu_{\\\\text{CH}_3\\\\text{F}} (1.82 D). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Carbon tetrachloride (\\\\text{CCl}_4) is non-polar.\\nReason (R): The four polar C-Cl bonds are directed symmetrically towards the vertices of a regular tetrahedron, causing their vector sum to be zero.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Tetrahedral symmetry causes complete vector cancellation. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): trans-1,2-dichloroethene has zero dipole moment, whereas cis-1,2-dichloroethene has a non-zero dipole moment.\\nReason (R): In the trans isomer, the two C-Cl bond dipoles are antiparallel and cancel out completely.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Antiparallel vectors of equal magnitude sum to zero. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\\\text{BF}_3 is non-polar while \\\\text{NF}_3 is polar.\\nReason (R): \\\\text{BF}_3 has a symmetrical trigonal planar geometry with zero lone pairs, whereas \\\\text{NF}_3 has a trigonal pyramidal geometry with one lone pair.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Trigonal planar cancels dipoles (\\\\mu = 0); trigonal pyramidal leaves uncancelled resultant. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\\\text{XeF}_4 is a non-polar molecule.\\nReason (R): \\\\text{XeF}_4 has a square planar geometry where the four Xe-F bond dipoles and the two trans lone pairs cancel each other symmetrically.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Square planar symmetry cancels all dipoles (\\\\mu = 0). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getDipoleMomentAndHydrogenBondingQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Dipole moment and hydrogen bonding", text, opts, ans, exp, diff, type));

  add(
    "Hydrogen bonding is formed when a hydrogen atom is covalently attached to an atom that is:",
    ["Highly electronegative with small atomic radius (such as F, O, or N)", "Highly electropositive with large atomic radius", "A transition metal", "A noble gas"],
    0,
    "Hydrogen bond formation requires high electronegativity and compact size (small atomic radius) so that intense partial positive charge is created on hydrogen."
  );
  add(
    "Which of the following compounds exhibits INTRAMOLECULAR hydrogen bonding?",
    ["ortho-nitrophenol", "para-nitrophenol", "meta-nitrophenol", "phenol"],
    0,
    "In ortho-nitrophenol, the -OH and -\\\\text{NO}_2 groups are adjacent, allowing a stable 6-membered intramolecular H-bonded chelate ring."
  );
  add(
    "Why is ortho-nitrophenol steam-volatile and lower-boiling than para-nitrophenol?",
    ["Intramolecular hydrogen bonding in ortho-nitrophenol prevents intermolecular association, while para-nitrophenol forms extensive intermolecular hydrogen bonds", "ortho-nitrophenol is ionic", "para-nitrophenol has lower molecular weight", "ortho-nitrophenol has no hydrogen bonding"],
    0,
    "Intramolecular H-bonding causes ortho-nitrophenol to exist as discrete monomeric molecules with lower boiling point and steam volatility. Intermolecular H-bonding in the para isomer causes strong molecular association."
  );
  add(
    "Which of the following hydrogen bonds is the strongest?",
    ["\\\\text{F}-\\\\text{H}\\\\cdots\\\\text{F}", "\\\\text{O}-\\\\text{H}\\\\cdots\\\\text{O}", "\\\\text{N}-\\\\text{H}\\\\cdots\\\\text{N}", "\\\\text{O}-\\\\text{H}\\\\cdots\\\\text{N}"],
    0,
    "Fluorine is the most electronegative element with the smallest atomic radius, making \\\\text{F}-\\\\text{H}\\\\cdots\\\\text{F} the strongest hydrogen bond (~40-160 kJ/mol)."
  );
  add(
    "Why does water (\\\\text{H}_2\\\\text{O}) have a much higher boiling point than hydrogen fluoride (\\\\text{HF}), even though \\\\text{F}-\\\\text{H}\\\\cdots\\\\text{F} is stronger than \\\\text{O}-\\\\text{H}\\\\cdots\\\\text{O}?",
    ["Each water molecule can form an average of four hydrogen bonds creating a 3D network, whereas \\\\text{HF} can form only two hydrogen bonds per molecule", "\\\\text{HF} is an ionic compound", "Water has higher molecular mass", "Oxygen is more electronegative than Fluorine"],
    0,
    "In \\\\text{H}_2\\\\text{O}, there are 2 H atoms and 2 lone pairs, forming a tetrahedral 4-coordinate 3D network. \\\\text{HF} has only 1 H atom, forming only linear 1D chains (2 H-bonds per molecule)."
  );
  add(
    "Why does ice float on water and have a lower density than liquid water at 0 ^\\\\circ\\\\text{C}?",
    ["Ice possesses a tetrahedral cage-like open crystal structure held by hydrogen bonds with large vacant interstitial spaces", "Ice contains trapped air bubbles", "Ice is non-polar", "Ice contracts upon melting"],
    0,
    "In ice, each water molecule is tetrahedrally hydrogen-bonded to four others, creating an open cage-like framework. Upon melting, the framework collapses, increasing density."
  );
  add(
    "At what temperature does liquid water achieve its maximum density?",
    ["4 ^\\\\circ\\\\text{C} (277 K)", "0 ^\\\\circ\\\\text{C} (273 K)", "100 ^\\\\circ\\\\text{C} (373 K)", "-4 ^\\\\circ\\\\text{C} (269 K)"],
    0,
    "Between 0 ^\\\\circ\\\\text{C} and 4 ^\\\\circ\\\\text{C}, the collapse of the open cage ice structure predominates over thermal expansion, reaching maximum density at 4 ^\\\\circ\\\\text{C} (0.99997 g/cm^3)."
  );
  add(
    "Why does Chlorine (electronegativity 3.16) NOT form effective hydrogen bonds, unlike Nitrogen (electronegativity 3.04)?",
    ["Chlorine has a significantly larger atomic radius (99 pm vs 70 pm), resulting in a diffuse, low-density electron cloud", "Chlorine is a halogen", "Chlorine is less electronegative than Nitrogen", "Chlorine does not possess lone pairs"],
    0,
    "Small size is a critical prerequisite for hydrogen bonding. The larger size of Chlorine disperses its negative charge over a larger volume, weakening electrostatic attraction with hydrogen."
  );
  add(
    "Which of the following compounds exists as a dimer in benzene due to intermolecular hydrogen bonding?",
    ["Acetic acid (\\\\text{CH}_3\\\\text{COOH})", "Methanol (\\\\text{CH}_3\\\\text{OH})", "Acetone (\\\\text{CH}_3\\\\text{COCH}_3)", "Benzene itself"],
    0,
    "In non-polar solvents like benzene, two acetic acid molecules associate into a cyclic 8-membered dimer via two intermolecular hydrogen bonds."
  );
  add(
    "Which of the following species exists due to symmetrical hydrogen bonding?",
    ["\\\\text{HF}_2^- \\\\text{ in } \\\\text{KHF}_2", "\\\\text{HCl}_2^-", "\\\\text{HBr}_2^-", "\\\\text{HI}_2^-"],
    0,
    "The bifluoride ion \\\\text{[F-H-F]}^- has an extremely strong symmetrical hydrogen bond (bond enthalpy ~160 kJ/mol), while larger halides cannot form stable \\\\text{HX}_2^- ions."
  );
  add(
    "Which of the following molecules shows intramolecular hydrogen bonding?",
    ["Salicylaldehyde", "p-hydroxybenzaldehyde", "m-hydroxybenzaldehyde", "Benzaldehyde"],
    0,
    "In salicylaldehyde (2-hydroxybenzaldehyde), the phenolic -OH forms a 6-membered hydrogen-bonded ring with the adjacent carbonyl oxygen."
  );
  add(
    "The unusually high viscosity of glycerol (propane-1,2,3-triol) compared to ethanol is primarily due to:",
    ["Extensive intermolecular hydrogen bonding involving three hydroxyl groups per molecule", "High molecular mass", "Ionic bonding", "Covalent cross-linking"],
    0,
    "Three -OH groups allow each glycerol molecule to form an extensive 3D network of hydrogen bonds, creating immense resistance to flow (viscosity)."
  );
  add(
    "Which of the following sets of hydrides is arranged in order of INCREASING boiling point?",
    ["\\\\text{H}_2\\\\text{S} < \\\\text{H}_2\\\\text{Se} < \\\\text{H}_2\\\\text{Te} < \\\\text{H}_2\\\\text{O}", "\\\\text{H}_2\\\\text{O} < \\\\text{H}_2\\\\text{S} < \\\\text{H}_2\\\\text{Se} < \\\\text{H}_2\\\\text{Te}", "\\\\text{H}_2\\\\text{S} < \\\\text{H}_2\\\\text{O} < \\\\text{H}_2\\\\text{Se} < \\\\text{H}_2\\\\text{Te}", "\\\\text{H}_2\\\\text{Te} < \\\\text{H}_2\\\\text{Se} < \\\\text{H}_2\\\\text{S} < \\\\text{H}_2\\\\text{O}"],
    0,
    "\\\\text{H}_2\\\\text{S} has the lowest b.p. (-60 ^\\\\circ\\\\text{C}). Boiling point increases down the group with molar mass (\\\\text{H}_2\\\\text{Se} < \\\\text{H}_2\\\\text{Te}), but \\\\text{H}_2\\\\text{O} (100 ^\\\\circ\\\\text{C}) is highest due to extensive hydrogen bonding."
  );
  add(
    "Which of the following molecules CANNOT form hydrogen bonds with water?",
    ["\\\\text{CH}_4", "\\\\text{CH}_3\\\\text{OH}", "\\\\text{NH}_3", "\\\\text{CH}_3\\\\text{OCH}_3"],
    0,
    "Methane (\\\\text{CH}_4) has non-polar C-H bonds and no lone pairs or electronegative atoms, making it unable to form hydrogen bonds with water."
  );
  add(
    "Why does diethyl ether (\\\\text{C}_2\\\\text{H}_5\\\\text{OC}_2\\\\text{H}_5) have a much lower boiling point (35 ^\\\\circ\\\\text{C}) than butan-1-ol (118 ^\\\\circ\\\\text{C}) despite having the same molecular formula (\\\\text{C}_4\\\\text{H}_{10}\\\\text{O})?",
    ["Butan-1-ol has intermolecular hydrogen bonding, whereas diethyl ether cannot form intermolecular hydrogen bonds with itself", "Diethyl ether is non-polar", "Butan-1-ol is an alkene", "Diethyl ether has higher molecular mass"],
    0,
    "In diethyl ether, there is no H attached directly to oxygen, precluding intermolecular H-bonding among ether molecules."
  );
  add(
    "Hydrogen bonding in DNA double helix occurs between:",
    ["Complementary nitrogenous bases (A=T via 2 H-bonds, G\\\\equiv C via 3 H-bonds)", "Phosphate groups and sugars", "Adjacent deoxyribose units", "Deoxyribose and purine bases"],
    0,
    "Specific hydrogen bonds hold the two strands together: Adenine pairs with Thymine via two H-bonds, and Guanine pairs with Cytosine via three H-bonds."
  );
  add(
    "The boiling point of \\\\text{HF} (293 K) is higher than that of \\\\text{HCl} (189 K) because:",
    ["\\\\text{HF} undergoes intermolecular hydrogen bonding forming zig-zag polymeric chains", "\\\\text{HF} has higher molecular mass than \\\\text{HCl}", "\\\\text{HCl} has ionic bonding", "\\\\text{HF} is an atomic liquid"],
    0,
    "Strong hydrogen bonding associates \\\\text{HF} into (\\\\text{HF})_n chains in liquid phase, raising its boiling point significantly."
  );
  add(
    "What is the maximum number of hydrogen bonds a single water molecule can form in ice?",
    ["4", "2", "3", "6"],
    0,
    "A water molecule donates 2 hydrogen bonds (via its 2 H atoms) and accepts 2 hydrogen bonds (via its 2 lone pairs), making a total of 4 hydrogen bonds."
  );
  add(
    "Which of the following organic compounds has the highest solubility in water?",
    ["\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH} \\\\text{ (ethanol)}", "\\\\text{CH}_3\\\\text{CH}_2\\\\text{Cl}", "\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH}_3", "\\\\text{CCl}_4"],
    0,
    "Ethanol forms strong intermolecular hydrogen bonds with water molecules, making it miscible in all proportions."
  );
  add(
    "In which of the following compounds is hydrogen bonding absent in the pure liquid state?",
    ["\\\\text{PH}_3", "\\\\text{NH}_3", "\\\\text{H}_2\\\\text{O}", "\\\\text{HF}"],
    0,
    "Phosphorus is not sufficiently electronegative (\\\\chi = 2.19) and has large size, so pure liquid \\\\text{PH}_3 has no hydrogen bonding."
  );
  add(
    "The secondary structure of proteins (\\\\alpha-helix and \\\\beta-pleated sheets) is stabilized by:",
    ["Hydrogen bonding between C=O and N-H groups of peptide bonds", "Disulfide linkages alone", "Ionic bonds", "Van der Waals dispersion forces only"],
    0,
    "Periodic hydrogen bonding between the amide -NH and carbonyl -C=O of peptide backbone stabilizes protein secondary structures."
  );
  add(
    "Which of the following hydroxybenzoic acids is the weakest acid due to intramolecular hydrogen bonding in its conjugate base?",
    ["Salicylic acid is stronger, but intramolecular H-bonding stabilizes its conjugate base (salicylate ion)", "Benzoic acid", "p-hydroxybenzoic acid", "m-hydroxybenzoic acid"],
    0,
    "In the salicylate ion, intramolecular H-bonding between the phenolic -OH and carboxylate -COO^- stabilizes the conjugate base, making salicylic acid exceptionally strong."
  );
  add(
    "Which of the following compounds has the lowest boiling point?",
    ["\\\\text{H}_2\\\\text{S}", "\\\\text{H}_2\\\\text{O}", "\\\\text{H}_2\\\\text{Se}", "\\\\text{H}_2\\\\text{Te}"],
    0,
    "\\\\text{H}_2\\\\text{S} lacks hydrogen bonding and has small molecular weight, boiling at -60 ^\\\\circ\\\\text{C}."
  );
  add(
    "The strength of a typical hydrogen bond ranges between:",
    ["10 to 40 kJ/mol", "200 to 400 kJ/mol", "0.1 to 1 kJ/mol", "1000 to 2000 kJ/mol"],
    0,
    "Typical hydrogen bonds have bond energies of 10 to 40 kJ/mol, much weaker than covalent bonds (200-500 kJ/mol) but stronger than London dispersion forces."
  );
  add(
    "Which of the following alcohols is most soluble in water?",
    ["Methanol", "n-Butanol", "n-Hexanol", "n-Octanol"],
    0,
    "Methanol has the smallest non-polar hydrophobic hydrocarbon chain, allowing maximum favorable hydrogen bonding with water."
  );
  add(
    "Why does liquid \\\\text{NH}_3 have a higher boiling point than \\\\text{PH}_3?",
    ["Intermolecular hydrogen bonding is present in \\\\text{NH}_3 but absent in \\\\text{PH}_3", "\\\\text{PH}_3 is an ionic compound", "\\\\text{NH}_3 has a higher molecular weight", "\\\\text{PH}_3 has no lone pairs"],
    0,
    "Nitrogen's high electronegativity and small size permit hydrogen bonding in \\\\text{NH}_3 (-33 ^\\\\circ\\\\text{C}), whereas \\\\text{PH}_3 boils at -87.7 ^\\\\circ\\\\text{C}."
  );
  add(
    "Which of the following statements about hydrogen bonding is FALSE?",
    ["Hydrogen bonding is stronger than covalent bonding", "Hydrogen bonding is directional", "Hydrogen bonding affects physical properties like boiling point and viscosity", "Hydrogen bonding can be intermolecular or intramolecular"],
    0,
    "Statement 1 is FALSE: Covalent bonds (~400 kJ/mol) are roughly 10 to 40 times stronger than hydrogen bonds (~10 to 40 kJ/mol)."
  );
  add(
    "In gas phase, hydrogen fluoride exists primarily as:",
    ["A mixture of monomeric \\\\text{HF} and cyclic hexamer (\\\\text{HF})_6 held by hydrogen bonds", "Discrete \\\\text{H}^+ and \\\\text{F}^- ions", "Diatomic \\\\text{F}_2 and \\\\text{H}_2 molecules", "Square planar tetramer"],
    0,
    "Gaseous \\\\text{HF} polymerizes into cyclic (\\\\text{HF})_6 rings through strong F-H...F hydrogen bonds."
  );
  add(
    "The density of water decreases when temperature decreases from 4 ^\\\\circ\\\\text{C} to 0 ^\\\\circ\\\\text{C} because:",
    ["The hydrogen-bonded open cage structure expands as water freezes", "Water evaporates rapidly", "Hydrogen bonds break completely", "Ice molecules contract"],
    0,
    "The formation of the rigid, open hexagonal ice lattice with hollow spaces causes water to expand upon cooling below 4 ^\\\\circ\\\\text{C}."
  );
  add(
    "Which of the following pairs shows intramolecular hydrogen bonding?",
    ["o-nitrophenol and salicylaldehyde", "p-nitrophenol and phenol", "m-nitrophenol and benzoic acid", "methanol and ethanol"],
    0,
    "Both ortho-substituted aromatics (o-nitrophenol and salicylaldehyde) form stable intramolecular H-bonded rings."
  );
  add(
    "Which of the following compounds has the highest boiling point?",
    ["\\\\text{CH}_3\\\\text{COOH}", "\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}", "\\\\text{CH}_3\\\\text{OCH}_3", "\\\\text{CH}_3\\\\text{CH}_2\\\\text{Cl}"],
    0,
    "Acetic acid forms strong hydrogen-bonded dimers with extensive intermolecular attraction, boiling at 118 ^\\\\circ\\\\text{C}."
  );
  add(
    "Which atom can act as a hydrogen bond donor?",
    ["A hydrogen atom covalently bonded to an electronegative atom like F, O, or N", "A hydrogen atom bonded to Carbon in methane", "A hydrogen atom in an alkali metal hydride (\\\\text{NaH})", "Any hydrogen atom in an alkane"],
    0,
    "Only hydrogen atoms bonded to F, O, or N possess sufficient positive charge density to act as H-bond donors."
  );
  add(
    "Which of the following statements explains why chloral hydrate (\\\\text{CCl}_3\\\\text{CH(OH)}_2) is stable despite having two -OH groups on the same carbon?",
    ["Intramolecular hydrogen bonding between the -OH hydrogens and chlorine atoms stabilizes the gem-diol", "Chloral hydrate is an ionic crystal", "Chlorine is an electron donor", "Two -OH groups always form stable bonds"],
    0,
    "Intramolecular five-membered hydrogen bonds (O-H...Cl) stabilize the gem-diol structure of chloral hydrate."
  );
  add(
    "The melting point of ice is 0 ^\\\\circ\\\\text{C}. If hydrogen bonding were absent, water would have been predicted to boil at approximately:",
    ["-80 ^\\\\circ\\\\text{C} to -100 ^\\\\circ\\\\text{C} (a gas at room temperature)", "0 ^\\\\circ\\\\text{C}", "+50 ^\\\\circ\\\\text{C}", "+200 ^\\\\circ\\\\text{C}"],
    0,
    "Extrapolating the boiling points of \\\\text{H}_2\\\\text{Te}, \\\\text{H}_2\\\\text{Se}, and \\\\text{H}_2\\\\text{S} indicates that without H-bonding, water would boil below -80 ^\\\\circ\\\\text{C}."
  );
  add(
    "Which of the following hydrides has the highest boiling point?",
    ["\\\\text{SbH}_3", "\\\\text{AsH}_3", "\\\\text{PH}_3", "\\\\text{NH}_3"],
    0,
    "\\\\text{SbH}_3 (256 K) and \\\\text{BiH}_3 (290 K) have higher boiling points than \\\\text{NH}_3 (240 K) due to immense van der Waals dispersion forces from heavy molecular mass."
  );
  add(
    "Which of the following molecules forms a linear hydrogen bond?",
    ["\\\\text{H-F}\\\\cdots\\\\text{H-F}", "\\\\text{H}_2\\\\text{S}\\\\cdots\\\\text{H}_2\\\\text{S}", "\\\\text{CH}_4\\\\cdots\\\\text{CH}_4", "\\\\text{SiH}_4\\\\cdots\\\\text{SiH}_4"],
    0,
    "The X-H...Y bond angle in strong hydrogen bonding is approximately 180^\\\\circ (linear)."
  );
  add(
    "The solubility of noble gases in water is enhanced by:",
    ["Dipole-induced dipole interactions with polar water molecules", "Hydrogen bonding", "Ionic bond formation", "Covalent bond formation"],
    0,
    "The dipole of water induces a temporary dipole in the polarizable electron cloud of the noble gas atom."
  );
  add(
    "Why is \\\\text{H}_2\\\\text{O} a liquid at room temperature while \\\\text{H}_2\\\\text{S} is a toxic gas?",
    ["Water molecules are strongly associated through intermolecular hydrogen bonds", "Water has higher molar mass than \\\\text{H}_2\\\\text{S}", "\\\\text{H}_2\\\\text{S} is an ionic compound", "Oxygen is less electronegative than Sulfur"],
    0,
    "Extensive intermolecular hydrogen bonding keeps water liquid up to 100 ^\\\\circ\\\\text{C}, while \\\\text{H}_2\\\\text{S} lacks H-bonding."
  );
  add(
    "Assertion (A): Water has maximum density at 4 ^\\\\circ\\\\text{C}.\\nReason (R): As ice melts from 0 ^\\\\circ\\\\text{C} to 4 ^\\\\circ\\\\text{C}, the open hydrogen-bonded cage framework collapses, packing water molecules more closely.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The structural collapse of the cage lattice increases density until thermal expansion takes over above 4 ^\\\\circ\\\\text{C}. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): ortho-nitrophenol has a lower boiling point than para-nitrophenol.\\nReason (R): ortho-nitrophenol exhibits intramolecular hydrogen bonding, whereas para-nitrophenol exhibits intermolecular hydrogen bonding.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Intramolecular H-bonding prevents association between different molecules, lowering boiling point. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\\\text{KHF}_2 exists as a solid salt, but \\\\text{KHCl}_2 does not exist.\\nReason (R): Fluorine forms very strong symmetrical hydrogen bonds in the [F-H-F]^- ion, while Chlorine is too large to form stable [Cl-H-Cl]^- ions.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "High bond energy of [F-H-F]^- stabilizes the salt. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Boiling point of \\\\text{HF} is lower than that of \\\\text{H}_2\\\\text{O}.\\nReason (R): Although each F-H...F bond is stronger than O-H...O, water can form four hydrogen bonds per molecule compared to only two for \\\\text{HF}.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Higher number of H-bonds per molecule in water creates a 3D network with higher total energy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Acetic acid has an apparent molecular weight of ~120 in benzene solution.\\nReason (R): Acetic acid molecules dimerize in non-polar solvents through two intermolecular hydrogen bonds.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Dimerization doubles the formula weight (2 \\\\times 60 = 120). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Glycerol is highly viscous and has a high boiling point (290 ^\\\\circ\\\\text{C}).\\nReason (R): Glycerol has three hydroxyl groups per molecule, leading to extensive three-dimensional intermolecular hydrogen bonding.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Extensive H-bonding causes high molecular cohesion and viscosity. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Ice is less dense than liquid water at 0 ^\\\\circ\\\\text{C}.\\nReason (R): The hydrogen-bonded crystal lattice of ice contains open hollow tetrahedral cages, creating vacant interstitial volume.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The open framework structure lowers density by ~9% compared to liquid water. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getVSEPRTheoryQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("VSEPR theory", text, opts, ans, exp, diff, type));

  add(
    "According to VSEPR theory, the magnitude of repulsive interactions between valence electron pairs follows the order:",
    ["Lone pair - Lone pair > Lone pair - Bond pair > Bond pair - Bond pair", "Bond pair - Bond pair > Lone pair - Bond pair > Lone pair - Lone pair", "Lone pair - Bond pair > Lone pair - Lone pair > Bond pair - Bond pair", "Lone pair - Lone pair = Bond pair - Bond pair"],
    0,
    "Lone pairs are localized on the central atom alone and occupy larger spatial volume, exerting greater repulsive force: lp-lp > lp-bp > bp-bp."
  );
  add(
    "What is the shape and bond angle of \\\\text{BeCl}_2 in the gaseous state according to VSEPR theory?",
    ["Linear, 180^\\\\circ", "Bent, 120^\\\\circ", "Tetrahedral, 109.5^\\\\circ", "Trigonal planar, 120^\\\\circ"],
    0,
    "Gaseous \\\\text{BeCl}_2 has 2 bond pairs and 0 lone pairs on Beryllium (steric number 2), forming a linear geometry with 180^\\\\circ bond angle."
  );
  add(
    "The molecular shape of \\\\text{BF}_3 is:",
    ["Trigonal planar", "Trigonal pyramidal", "T-shaped", "Tetrahedral"],
    0,
    "Boron in \\\\text{BF}_3 has 3 bond pairs and 0 lone pairs (steric number 3), adopting a symmetrical trigonal planar shape with 120^\\\\circ bond angles."
  );
  add(
    "What is the molecular geometry of sulfur dioxide (\\\\text{SO}_2) according to VSEPR theory?",
    ["Bent (V-shaped)", "Linear", "Trigonal planar", "T-shaped"],
    0,
    "Sulfur has 2 \\\\sigma-bonds and 1 lone pair (steric number 3). The lone pair repels the bonding pairs, bending the bond angle to ~119.5^\\\\circ."
  );
  add(
    "The molecular geometry of ammonia (\\\\text{NH}_3) is:",
    ["Trigonal pyramidal", "Tetrahedral", "Trigonal planar", "T-shaped"],
    0,
    "Nitrogen has 3 bond pairs and 1 lone pair (steric number 4). The electron-pair geometry is tetrahedral, but the molecular shape is trigonal pyramidal."
  );
  add(
    "Why is the H-N-H bond angle in ammonia (107^\\\\circ) smaller than the ideal tetrahedral angle (109.5^\\\\circ)?",
    ["The lone pair - bond pair repulsion is greater than bond pair - bond pair repulsion, compressing the N-H bonds", "Nitrogen is sp^2 hybridized", "Hydrogen atoms attract each other", "Nitrogen has no lone pairs"],
    0,
    "The lone pair occupies more angular volume and repels the bonding pairs, compressing the bond angle from 109.5^\\\\circ down to 107^\\\\circ."
  );
  add(
    "The H-O-H bond angle in water (\\\\text{H}_2\\\\text{O}) is 104.5^\\\\circ because:",
    ["Two lone pairs on Oxygen exert strong lp-lp and lp-bp repulsions that compress the bond angle", "Water is sp hybridized", "Water has zero dipole moment", "Oxygen is larger than Nitrogen"],
    0,
    "Two lone pairs on oxygen cause severe mutual repulsion (lp-lp) and push the two O-H bond pairs together, reducing the angle to 104.5^\\\\circ."
  );
  add(
    "The molecular shape of phosphorus pentachloride (\\\\text{PCl}_5) in the gas phase is:",
    ["Trigonal bipyramidal", "Square pyramidal", "Pentagonal planar", "Octahedral"],
    0,
    "Phosphorus has 5 bond pairs and 0 lone pairs (steric number 5), yielding a trigonal bipyramidal geometry."
  );
  add(
    "In the trigonal bipyramidal \\\\text{PCl}_5 molecule, why are the axial P-Cl bonds longer and weaker (240 pm) than the equatorial P-Cl bonds (202 pm)?",
    ["Axial bond pairs experience three 90^\\\\circ repulsions from equatorial pairs, whereas equatorial bond pairs experience only two 90^\\\\circ repulsions", "Equatorial bonds are ionic", "Axial chlorines are different isotopes", "Axial bonds are formed by p-p overlap only"],
    0,
    "Axial bonds suffer greater electrostatic repulsion (three 90^\\\\circ interactions) compared to equatorial bonds (two 90^\\\\circ interactions), causing axial bonds to lengthen and weaken."
  );
  add(
    "What is the shape of sulfur tetrafluoride (\\\\text{SF}_4) according to VSEPR theory?",
    ["See-saw", "Square planar", "Tetrahedral", "Trigonal bipyramidal"],
    0,
    "Sulfur has 4 bond pairs and 1 lone pair (steric number 5). The lone pair occupies an equatorial position to minimize 90^\\\\circ repulsions, producing a see-saw molecular shape."
  );
  add(
    "In \\\\text{SF}_4, why does the lone pair occupy an equatorial position rather than an axial position?",
    ["An equatorial lone pair experiences only two 90^\\\\circ repulsions, whereas an axial lone pair would experience three 90^\\\\circ repulsions", "Axial positions have higher energy", "Equatorial bonds are longer", "To make the molecule square planar"],
    0,
    "Minimizing 90^\\\\circ lone pair repulsions is the governing rule in steric number 5: equatorial position has only two 90^\\\\circ interactions, which is energetically favored."
  );
  add(
    "The molecular geometry of chlorine trifluoride (\\\\text{ClF}_3) is:",
    ["T-shaped", "Trigonal planar", "Trigonal pyramidal", "See-saw"],
    0,
    "Chlorine has 3 bond pairs and 2 lone pairs (steric number 5). Both lone pairs occupy equatorial positions, producing a T-shaped molecule with bond angle ~87.5^\\\\circ."
  );
  add(
    "The geometry of the triiodide ion (\\\\text{I}_3^-) according to VSEPR theory is:",
    ["Linear", "Bent", "Trigonal planar", "T-shaped"],
    0,
    "The central Iodine has 2 bond pairs and 3 lone pairs (steric number 5). All three lone pairs occupy equatorial positions (120^\\\\circ apart), leaving the two axial I-I bonds in a linear arrangement (180^\\\\circ)."
  );
  add(
    "What is the shape of Xenon difluoride (\\\\text{XeF}_2)?",
    ["Linear", "Bent", "V-shaped", "T-shaped"],
    0,
    "\\\\text{XeF}_2 has 2 bond pairs and 3 lone pairs on Xenon (steric number 5). The 3 lone pairs reside in equatorial positions, resulting in a linear molecular shape."
  );
  add(
    "The shape of sulfur hexafluoride (\\\\text{SF}_6) is:",
    ["Octahedral", "Trigonal bipyramidal", "Square planar", "Pentagonal bipyramidal"],
    0,
    "Sulfur has 6 bond pairs and 0 lone pairs (steric number 6), yielding a regular octahedral geometry with 90^\\\\circ bond angles."
  );
  add(
    "The shape of bromine pentafluoride (\\\\text{BrF}_5) is:",
    ["Square pyramidal", "Trigonal bipyramidal", "Pentagonal planar", "See-saw"],
    0,
    "Bromine has 5 bond pairs and 1 lone pair (steric number 6). The molecular geometry is square pyramidal."
  );
  add(
    "What is the molecular geometry of Xenon tetrafluoride (\\\\text{XeF}_4)?",
    ["Square planar", "Tetrahedral", "See-saw", "Square pyramidal"],
    0,
    "Xenon has 4 bond pairs and 2 lone pairs (steric number 6). The two lone pairs occupy trans axial positions to minimize repulsion, yielding a square planar geometry."
  );
  add(
    "The shape of iodine heptafluoride (\\\\text{IF}_7) is:",
    ["Pentagonal bipyramidal", "Octahedral", "Capped octahedral", "Trigonal bipyramidal"],
    0,
    "Iodine has 7 bond pairs and 0 lone pairs (steric number 7), producing a pentagonal bipyramidal geometry with 72^\\\\circ and 90^\\\\circ bond angles."
  );
  add(
    "What is the geometry of Xenon hexafluoride (\\\\text{XeF}_6) in the gas phase?",
    ["Distorted octahedral (capped octahedral)", "Regular octahedral", "Pentagonal planar", "Square pyramidal"],
    0,
    "\\\\text{XeF}_6 has 6 bond pairs and 1 stereochemically active lone pair (steric number 7), resulting in a distorted octahedral geometry."
  );
  add(
    "Which of the following species has a see-saw molecular shape?",
    ["\\\\text{TeCl}_4", "\\\\text{CH}_4", "\\\\text{XeF}_4", "\\\\text{SiF}_4"],
    0,
    "\\\\text{TeCl}_4 has 4 bond pairs and 1 lone pair on Tellurium (steric number 5), giving a see-saw molecular geometry identical to \\\\text{SF}_4."
  );
  add(
    "Which of the following pairs of species are isostructural (have the same molecular geometry)?",
    ["\\\\text{XeF}_2\\\\text{ and I}_3^-", "\\\\text{CO}_2\\\\text{ and SO}_2", "\\\\text{BF}_3\\\\text{ and NH}_3", "\\\\text{CH}_4\\\\text{ and SF}_4"],
    0,
    "Both \\\\text{XeF}_2 and \\\\text{I}_3^- have steric number 5 with 2 bond pairs and 3 equatorial lone pairs, making both strictly linear."
  );
  add(
    "The molecular shape of the hydronium ion (\\\\text{H}_3\\\\text{O}^+) is:",
    ["Trigonal pyramidal", "Trigonal planar", "Tetrahedral", "T-shaped"],
    0,
    "Oxygen has 3 bond pairs and 1 lone pair (steric number 4), giving a trigonal pyramidal shape analogous to ammonia."
  );
  add(
    "Which of the following ions has a square planar shape?",
    ["\\\\text{ICl}_4^-", "\\\\text{NH}_4^+", "\\\\text{BF}_4^-", "\\\\text{SO}_4^{2-}"],
    0,
    "In \\\\text{ICl}_4^-, Iodine has 4 bond pairs and 2 lone pairs (steric number 6), adopting a square planar geometry."
  );
  add(
    "The bond angles in \\\\text{ClF}_3 are slightly less than 90^\\\\circ (approximately 87.5^\\\\circ) because:",
    ["The two equatorial lone pairs exert strong repulsions that bend the axial F-Cl bonds away from the equatorial plane", "Chlorine is larger than Fluorine", "Fluorine atoms attract each other", "The molecule is planar"],
    0,
    "Strong lp-bp repulsions from the two equatorial lone pairs compress the axial F-Cl-F bond angle from 180^\\\\circ to 175^\\\\circ (making F-Cl-F angle ~87.5^\\\\circ)."
  );
  add(
    "Which of the following species is NOT linear?",
    ["\\\\text{NO}_2", "\\\\text{CO}_2", "\\\\text{BeCl}_2", "\\\\text{XeF}_2"],
    0,
    "\\\\text{NO}_2 is bent with a bond angle of 134^\\\\circ due to an unpaired electron on Nitrogen."
  );
  add(
    "The shape of Xenon trioxide (\\\\text{XeO}_3) is:",
    ["Trigonal pyramidal", "Trigonal planar", "T-shaped", "Tetrahedral"],
    0,
    "Xenon in \\\\text{XeO}_3 has 3 \\\\sigma-bonds and 1 lone pair (steric number 4), resulting in a trigonal pyramidal shape with bond angles ~103^\\\\circ."
  );
  add(
    "Which of the following species has a tetrahedral molecular geometry?",
    ["\\\\text{NH}_4^+", "\\\\text{XeF}_4", "\\\\text{SF}_4", "\\\\text{ICl}_4^-"],
    0,
    "\\\\text{NH}_4^+ has 4 bond pairs and 0 lone pairs on Nitrogen, forming a regular tetrahedron with 109.5^\\\\circ angles."
  );
  add(
    "The shape of \\\\text{BrF}_3 is:",
    ["T-shaped", "Trigonal planar", "Trigonal pyramidal", "Linear"],
    0,
    "Steric number 5 with 3 bond pairs and 2 equatorial lone pairs gives a T-shaped geometry."
  );
  add(
    "Which of the following molecules has a square pyramidal geometry?",
    ["\\\\text{XeOF}_4", "\\\\text{XeF}_4", "\\\\text{XeO}_3", "\\\\text{XeF}_2"],
    0,
    "Xenon in \\\\text{XeOF}_4 has 5 \\\\sigma-bonds (4 to F, 1 to O) and 1 lone pair (steric number 6), giving a square pyramidal shape."
  );
  add(
    "The bond angle in \\\\text{H}_2\\\\text{S} is 92^\\\\circ, much smaller than in \\\\text{H}_2\\\\text{O} (104.5^\\\\circ). According to Bent's and Drago's rules, this is because:",
    ["In \\\\text{H}_2\\\\text{S}, bonding involves almost pure 3p orbitals with negligible hybridization (Drago's rule)", "Sulfur is sp hybridized", "Hydrogen atoms repel each other more in \\\\text{H}_2\\\\text{S}", "Sulfur is more electronegative than Oxygen"],
    0,
    "In hydrides of heavier elements (Group 15 and 16, period 3 and below), hybridization does not occur significantly; bonding occurs via nearly pure p-orbitals at ~90^\\\\circ."
  );
  add(
    "Which of the following species has the smallest bond angle?",
    ["\\\\text{H}_2\\\\text{Te}", "\\\\text{H}_2\\\\text{Se}", "\\\\text{H}_2\\\\text{S}", "\\\\text{H}_2\\\\text{O}"],
    0,
    "Bond angles in Group 16 hydrides decrease down the group: \\\\text{H}_2\\\\text{O} (104.5^\\\\circ) > \\\\text{H}_2\\\\text{S} (92.1^\\\\circ) > \\\\text{H}_2\\\\text{Se} (91^\\\\circ) > \\\\text{H}_2\\\\text{Te} (90^\\\\circ)."
  );
  add(
    "In the VSEPR model, multiple bonds (double or triple bonds):",
    ["Are treated as a single super-pair of electrons that exerts greater repulsion than a single bond pair", "Are treated as independent single bonds", "Exert less repulsion than single bonds", "Do not affect molecular shape"],
    0,
    "Multiple bonds contain higher electron density, acting as a single electron-dense group that repels neighboring electron pairs more strongly than a single bond."
  );
  add(
    "What is the shape of the chlorate ion (\\\\text{ClO}_3^-)?",
    ["Trigonal pyramidal", "Trigonal planar", "Tetrahedral", "T-shaped"],
    0,
    "Chlorine in \\\\text{ClO}_3^- has 3 \\\\sigma-bonds and 1 lone pair (steric number 4), adopting a trigonal pyramidal shape."
  );
  add(
    "The molecular shape of \\\\text{SnCl}_2 in gas phase is:",
    ["Bent", "Linear", "Tetrahedral", "Trigonal planar"],
    0,
    "Tin has 2 bond pairs and 1 lone pair (steric number 3), producing a bent V-shaped geometry."
  );
  add(
    "Which of the following molecules has exactly ONE lone pair on the central atom?",
    ["\\\\text{SF}_4", "\\\\text{XeF}_4", "\\\\text{XeF}_2", "\\\\text{SF}_6"],
    0,
    "\\\\text{SF}_4 has 4 bond pairs and 1 lone pair on sulfur."
  );
  add(
    "What is the molecular geometry of \\\\text{ICl}_2^-?",
    ["Linear", "Bent", "T-shaped", "Trigonal planar"],
    0,
    "Iodine has 2 bond pairs and 3 equatorial lone pairs (steric number 5), yielding a linear geometry."
  );
  add(
    "The shape of \\\\text{CO}_3^{2-} ion is:",
    ["Trigonal planar", "Trigonal pyramidal", "Tetrahedral", "T-shaped"],
    0,
    "Carbon has 3 \\\\sigma-bonds and 0 lone pairs (steric number 3), giving a symmetrical trigonal planar shape."
  );
  add(
    "Which of the following species has a bond angle closest to 120^\\\\circ?",
    ["\\\\text{NO}_3^-", "\\\\text{NH}_3", "\\\\text{H}_2\\\\text{O}", "\\\\text{CH}_4"],
    0,
    "\\\\text{NO}_3^- is trigonal planar with 0 lone pairs on Nitrogen, having bond angles of exactly 120^\\\\circ."
  );
  add(
    "The molecular shape of \\\\text{PF}_3 is:",
    ["Trigonal pyramidal", "Trigonal planar", "T-shaped", "Tetrahedral"],
    0,
    "Phosphorus in \\\\text{PF}_3 has 3 bond pairs and 1 lone pair (steric number 4), resulting in a trigonal pyramidal shape."
  );
  add(
    "Which of the following molecules has a bond angle of 180^\\\\circ?",
    ["\\\\text{HCN}", "\\\\text{H}_2\\\\text{O}", "\\\\text{SO}_2", "\\\\text{NH}_3"],
    0,
    "H-C\\\\equiv N is linear with 2 electron groups on carbon, giving a bond angle of 180^\\\\circ."
  );
  add(
    "Assertion (A): In \\\\text{PCl}_5, the axial P-Cl bonds are longer than equatorial P-Cl bonds.\\nReason (R): Axial bond pairs experience greater electrostatic repulsion from equatorial bond pairs (three 90^\\\\circ angles) than equatorial bond pairs experience from each other.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Axial bonds suffer greater crowding, weakening and lengthening them. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\\\text{XeF}_4 has a square planar shape.\\nReason (R): In \\\\text{XeF}_4, the two lone pairs on Xenon occupy trans axial positions to minimize lone pair - lone pair repulsions.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Placing lone pairs at 180^\\\\circ minimizes repulsive strain, leaving four equatorial F atoms in a square plane. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The bond angle in \\\\text{NH}_3 (107^\\\\circ) is greater than that in \\\\text{H}_2\\\\text{O} (104.5^\\\\circ).\\nReason (R): Oxygen in \\\\text{H}_2\\\\text{O} has two lone pairs which exert greater repulsive force than the single lone pair on Nitrogen in \\\\text{NH}_3.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Two lone pairs compress bonding angles more severely than one lone pair. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In \\\\text{SF}_4, the lone pair occupies an equatorial position rather than an axial position.\\nReason (R): An equatorial lone pair experiences only two 90^\\\\circ repulsions, whereas an axial lone pair would experience three 90^\\\\circ repulsions.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Minimizing 90^\\\\circ interactions dictates lone pair placement in steric number 5. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\\\text{I}_3^- ion is linear.\\nReason (R): In \\\\text{I}_3^-, the central Iodine atom has two bond pairs and three lone pairs, which occupy the equatorial plane at 120^\\\\circ angles.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Equatorial lone pairs leave the two axial I-I bonds in a collinear 180^\\\\circ orientation. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The bond angle in \\\\text{H}_2\\\\text{S} (92^\\\\circ) is significantly smaller than in \\\\text{H}_2\\\\text{O} (104.5^\\\\circ).\\nReason (R): According to Drago's rule, bonding in \\\\text{H}_2\\\\text{S} involves nearly unhybridized 3p orbitals of Sulfur oriented mutually at 90^\\\\circ.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Negligible s-p hybridization in heavier hydrides leaves bonds nearly pure p-type. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): \\\\text{ClF}_3 is a T-shaped molecule.\\nReason (R): The two lone pairs on Chlorine occupy equatorial positions of a trigonal bipyramid, while three Fluorine atoms occupy one equatorial and two axial positions.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "VSEPR rules minimize lone pair repulsions, resulting in a T-shape. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getPolarityQuestions,
  getDipoleMomentAndHydrogenBondingQuestions,
  getVSEPRTheoryQuestions
};
`;

  fs.writeFileSync(path.join(__dirname, "data_bonding_part2.js"), content, "utf8");
  console.log("Successfully wrote scripts/data_bonding_part2.js");
}

buildPart2();
