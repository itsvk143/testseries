const fs = require("fs");
const path = require("path");

const STANDARD_AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
  "Assertion (A) is true but Reason (R) is false.",
  "Assertion (A) is false but Reason (R) is true."
];

function ar(assertion, reason, correctAnswer, explanation) {
  return {
    type: "ASSERTION_REASON",
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${assertion}\nReason (R): ${reason}`,
    options: STANDARD_AR_OPTIONS,
    correctAnswer,
    explanation,
    subTopic: "Nature of C–X bond",
    chapter: "Organic Compounds Containing Halogens"
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Nature of C–X bond",
    chapter: "Organic Compounds Containing Halogens"
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Nature of C–X bond",
    chapter: "Organic Compounds Containing Halogens"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Chloromethane ($\\text{CH}_3\\text{Cl}$) has a higher dipole moment than fluoromethane ($\\text{CH}_3\\text{F}$).",
    "Although fluorine is more electronegative than chlorine, the $\\text{C}-\\text{Cl}$ bond distance is considerably greater than the $\\text{C}-\\text{F}$ bond distance, resulting in a larger product of charge and distance ($q \\times d$).",
    0,
    "Dipole moment is defined as $\\mu = q \\times d$. The $\\text{C}-\\text{Cl}$ bond length ($1.78\\text{ \\AA}$) is significantly larger than the $\\text{C}-\\text{F}$ bond length ($1.39\\text{ \\AA}$), making the dipole moment of $\\text{CH}_3\\text{Cl}$ ($1.860\\text{ D}$) higher than that of $\\text{CH}_3\\text{F}$ ($1.847\\text{ D}$)."
  ),
  ar(
    "The $\\text{C}-\\text{Cl}$ bond in chlorobenzene is shorter and stronger than the $\\text{C}-\\text{Cl}$ bond in cyclohexyl chloride.",
    "In chlorobenzene, the lone pair on chlorine participates in resonance with the benzene ring, conferring partial double bond character to the $\\text{C}-\\text{Cl}$ bond.",
    0,
    "Resonance delocalization of chlorine's lone pair into the aromatic $\\pi$-electron cloud gives the $\\text{C}-\\text{Cl}$ bond partial double bond character ($1.69\\text{ \\AA}$ in chlorobenzene versus $1.77\\text{ \\AA}$ in cyclohexyl chloride), making it shorter and stronger."
  ),
  ar(
    "Haloalkanes, despite being polar molecules, are practically insoluble or only slightly soluble in water.",
    "The energy released during the formation of new dipole-dipole attractions between haloalkane and water molecules is less than the energy required to break hydrogen bonds between water molecules.",
    0,
    "For dissolution to occur, the solute-solvent attractive forces must overcome the strong intermolecular hydrogen bonds between water molecules. Haloalkanes cannot form hydrogen bonds with water, so dissolution is energetically unfavorable."
  ),
  ar(
    "The boiling point of alkyl halides follows the order: $\\text{R}-\\text{I} > \\text{R}-\\text{Br} > \\text{R}-\\text{Cl} > \\text{R}-\\text{F}$ for a given alkyl group $\\text{R}$.",
    "With increase in size and mass of the halogen atom, the magnitude of London dispersion forces increases substantially.",
    0,
    "As atomic size and number of electrons increase from $\\text{F}$ to $\\text{I}$, polarizability increases, leading to stronger intermolecular van der Waals forces and progressively higher boiling points."
  ),
  ar(
    "Among isomeric haloalkanes, 1-chlorobutane has a higher boiling point than 2-chloro-2-methylpropane (tert-butyl chloride).",
    "Branching makes the molecule more spherical, decreasing the surface area of contact and weakening intermolecular van der Waals forces.",
    0,
    "Linear 1-chlorobutane has a larger surface area than spherical tert-butyl chloride. Greater surface area enhances intermolecular van der Waals attractions, leading to a higher boiling point ($78.4^\\circ\\text{C}$ vs $50.7^\\circ\\text{C}$)."
  ),
  ar(
    "The dipole moment of vinyl chloride ($\\text{CH}_2=\\text{CH}-\\text{Cl}$) is lower than that of ethyl chloride ($\\text{CH}_3\\text{CH}_2\\text{Cl}$).",
    "In vinyl chloride, the chlorine atom is attached to an $sp^2$ hybridized carbon which is more electronegative than the $sp^3$ carbon in ethyl chloride, opposing the bond dipole.",
    0,
    "An $sp^2$ carbon has $33.3\\%$ s-character, making it more electronegative and electron-withdrawing towards the ring/chain. This $sp^2$ hybridization combined with the $+M$ electron donation of chlorine reduces the overall dipole moment ($1.44\\text{ D}$ vs $2.05\\text{ D}$)."
  ),
  ar(
    "The $\\text{C}-\\text{F}$ bond is the strongest among all carbon-halogen bonds.",
    "Fluorine is the most electronegative element, and the $2p-2p$ orbital overlap between carbon and fluorine is exceptionally effective due to small atomic radii.",
    0,
    "The carbon-fluorine bond has a very high bond dissociation energy ($\\approx 452\\text{ kJ mol}^{-1}$) because of effective $2p-2p$ orbital overlap and high ionic resonance energy."
  ),
  ar(
    "The dipole moment of chlorobenzene is significantly lower than that of cyclohexyl chloride.",
    "Chlorine atom in chlorobenzene exhibits a strong $-I$ effect that completely nullifies its resonance effect.",
    2,
    "Assertion is true, but Reason is false. In chlorobenzene, the dipole moment is lower ($1.57\\text{ D}$ vs $1.86\\text{ D}$) because the $+M$ resonance donation directs electron density towards the ring, opposing the $-I$ effect, and the carbon is $sp^2$ hybridized."
  ),
  ar(
    "Alkyl iodides darken upon prolonged standing or exposure to sunlight.",
    "The carbon-iodine bond has low bond dissociation energy and photolytically decomposes to release free iodine ($I_2$).",
    0,
    "Due to large size difference and poor overlap of carbon $2p$ and iodine $5p$ orbitals, the $\\text{C}-\\text{I}$ bond is weak ($234\\text{ kJ mol}^{-1}$). Light facilitates homolytic cleavage, liberating $\\text{I}_2$ which imparts a brown/purple color."
  ),
  ar(
    "The dipole moment of trans-1,2-dichloroethene is zero, while that of cis-1,2-dichloroethene is non-zero.",
    "In the trans isomer, the two identical $\\text{C}-\\text{Cl}$ bond dipoles point in directly opposite directions and cancel out completely.",
    0,
    "Trans-1,2-dichloroethene possesses an inversion center of symmetry, causing the bond dipole vectors to cancel vectorially ($\\mu = 0\\text{ D}$), whereas in the cis isomer the dipoles reinforce ($\\mu = 1.9\\text{ D}$)."
  ),
  ar(
    "Carbon tetrachloride ($\\text{CCl}_4$) possesses four polar $\\text{C}-\\text{Cl}$ bonds, yet its net molecular dipole moment is zero.",
    "Due to the symmetrical regular tetrahedral geometry of $\\text{CCl}_4$, the vector sum of the four equal bond dipoles is zero.",
    0,
    "In a regular tetrahedron ($T_d$ symmetry), the four identical $\\text{C}-\\text{Cl}$ dipole vectors cancel one another completely, resulting in $\\mu_{net} = 0$."
  ),
  ar(
    "The bond dissociation energy of the carbon-halogen bond decreases in the order: $\\text{C}-\\text{F} > \\text{C}-\\text{Cl} > \\text{C}-\\text{Br} > \\text{C}-\\text{I}$.",
    "As the size of the halogen atom increases down Group 17, the valence p-orbital becomes more diffuse, resulting in less effective orbital overlap with carbon's $2p$ orbital.",
    0,
    "Down the group, the halogen atomic radius increases from $\\text{F}$ to $\\text{I}$. The overlap between carbon's compact $2p$ orbital and the larger, diffuse $3p, 4p, 5p$ orbitals of heavier halogens becomes progressively poorer, decreasing bond strength."
  ),
  ar(
    "Alkyl fluorides have lower boiling points than the corresponding alkanes of comparable molecular weight.",
    "Fluorine has very low polarizability, resulting in extremely weak London dispersion forces.",
    0,
    "Because fluorine holds its electrons very tightly, the electron cloud is difficult to distort (low polarizability). Consequently, London dispersion forces in fluorocarbons are exceptionally weak."
  ),
  ar(
    "The density of alkyl halides decreases as the molecular mass of the halogen increases.",
    "Molar mass of halogens increases from fluorine to iodine.",
    3,
    "Assertion is false, Reason is true. The density of alkyl halides actually increases in the order $\\text{R}-\\text{Cl} < \\text{R}-\\text{Br} < \\text{R}-\\text{I}$ because the increase in mass of the halogen atom is far greater than the increase in molecular volume."
  ),
  ar(
    "Chloroform ($\\text{CHCl}_3$) has a lower dipole moment than dichloromethane ($\\text{CH}_2\\text{Cl}_2$).",
    "In chloroform, the vector resultant of three $\\text{C}-\\text{Cl}$ bond dipoles is partially opposed by the fourth $\\text{C}-\\text{H}$ bond dipole vector, whereas in dichloromethane the two $\\text{C}-\\text{Cl}$ dipoles add constructively.",
    0,
    "The experimental dipole moment of $\\text{CH}_2\\text{Cl}_2$ is $1.60\\text{ D}$, while for $\\text{CHCl}_3$ it is $1.04\\text{ D}$. In $\\text{CHCl}_3$, the three opposing $\\text{C}-\\text{Cl}$ dipoles cancel out more of each other's components."
  ),
  ar(
    "The carbon atom of a $\\text{C}-\\text{X}$ bond in an alkyl halide acts as an electrophilic center.",
    "Halogens are more electronegative than carbon and withdraw $\\sigma$-electron density, imparting a partial positive charge ($\\delta+$) on the carbon.",
    0,
    "Because halogens are more electronegative than carbon, the $\\text{C}-\\text{X}$ bond is polarized as $\\text{C}^{\\delta+} - \\text{X}^{\\delta-}$. This partial positive charge renders the carbon susceptible to attack by nucleophiles."
  ),
  ar(
    "The bond length of $\\text{C}-\\text{X}$ bond in haloarenes is longer than that in haloalkanes.",
    "Carbon atom attached to halogen in haloarenes is $sp^2$ hybridized, which has greater s-character and holds bonded electrons closer.",
    3,
    "Assertion is false, but Reason is true. Because the carbon is $sp^2$ hybridized (shorter bond radius) and resonance confers partial double bond character, the $\\text{C}-\\text{X}$ bond in haloarenes is actually shorter ($1.69\\text{ \\AA}$) than in haloalkanes ($1.77\\text{ \\AA}$)."
  ),
  ar(
    "Alkyl halides have higher boiling points than the parent alkanes having the same number of carbon atoms.",
    "Alkyl halides possess both dipole-dipole interactions and greater van der Waals forces due to larger halogen mass and higher polarity.",
    0,
    "Introduction of a halogen atom increases both polarity (inducing dipole-dipole attractions) and polarizability (inducing stronger London dispersion forces), leading to higher boiling points than the corresponding alkanes."
  ),
  ar(
    "p-Dichlorobenzene has a higher melting point than o-dichlorobenzene and m-dichlorobenzene.",
    "Due to its symmetrical para structure, p-dichlorobenzene packs more tightly into the crystal lattice.",
    0,
    "The symmetrical para-isomer fits into the crystal lattice much better than the less symmetrical ortho and meta isomers, resulting in stronger intermolecular lattice forces and a significantly higher melting point ($53.5^\\circ\\text{C}$ vs $-17^\\circ\\text{C}$ and $-24^\\circ\\text{C}$)."
  ),
  ar(
    "The $\\text{C}-\\text{Cl}$ bond in vinyl chloride cannot be easily cleaved by aqueous $\\text{KOH}$.",
    "Resonance delocalization between the lone pair on chlorine and the adjacent $\\text{C}=\\text{C}$ double bond gives the $\\text{C}-\\text{Cl}$ bond partial double bond character.",
    0,
    "Due to resonance, $\\text{CH}_2=\\text{CH}-\\ddot{\\text{Cl}}: \\leftrightarrow \\bar{\\text{C}}\\text{H}_2-\\text{CH}=\\overset{+}{\\text{Cl}}:$, the $\\text{C}-\\text{Cl}$ bond is significantly strengthened and unreactive towards nucleophilic substitution under normal conditions."
  ),
  ar(
    "The dipole moment of para-bromotoluene is directed from the methyl group towards the bromine atom.",
    "The methyl group is electron-donating ($+I$ and hyperconjugation) while the bromine atom is electron-withdrawing ($-I$).",
    0,
    "Both the electron-releasing tendency of $-\\text{CH}_3$ and the electron-withdrawing $-I$ effect of $-\\text{Br}$ act in the same direction along the molecular axis, reinforcing each other."
  ),
  ar(
    "Allyl chloride ($\\text{CH}_2=\\text{CH}-\\text{CH}_2\\text{Cl}$) is much more reactive towards nucleophilic substitution than vinyl chloride ($\\text{CH}_2=\\text{CH}-\\text{Cl}$).",
    "In allyl chloride, the $\\text{C}-\\text{Cl}$ bond has no resonance stabilization with the double bond, and ionization gives a resonance-stabilized allylic carbocation.",
    0,
    "In allyl chloride, the chlorine is attached to an $sp^3$ carbon, so there is no double bond character in the ground state. Heterolysis yields the resonance-stabilized allyl cation $[\\text{CH}_2=\\text{CH}-\\text{CH}_2^+ \\leftrightarrow \\text{CH}_2^+-\\text{CH}=\\text{CH}_2]$."
  ),
  ar(
    "Benzyl chloride ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl}$) undergoes substitution faster than chlorobenzene ($\\text{C}_6\\text{H}_5\\text{Cl}$).",
    "The chlorine in benzyl chloride is attached to an $sp^3$ hybridized benzylic carbon rather than an $sp^2$ aromatic ring carbon.",
    0,
    "In benzyl chloride, the $\\text{C}-\\text{Cl}$ bond is a pure single bond without partial double bond character, and the benzylic carbocation intermediate formed upon leaving group departure is resonance-stabilized by the benzene ring."
  ),
  ar(
    "Alkyl halides undergo heterolytic fission of the $\\text{C}-\\text{X}$ bond to yield a carbocation and a halide ion.",
    "Halogens have a lower electronegativity than carbon, allowing them to depart with a positive charge.",
    2,
    "Assertion is true, but Reason is false. Halogens are more electronegative than carbon, so upon heterolytic cleavage, they depart with the bonding pair of electrons as halide anions ($\\text{X}^-$), leaving behind a carbocation."
  ),
  ar(
    "The boiling point of n-butyl chloride is higher than that of isobutyl chloride.",
    "Linear n-butyl chloride has more surface contact area than branched isobutyl chloride, maximizing van der Waals attractions.",
    0,
    "Branching decreases the molecular surface area, leading to weaker intermolecular London dispersion forces and consequently lower boiling points."
  ),
  ar(
    "Polyhaloalkanes like dichloromethane, chloroform, and carbon tetrachloride are all heavier than water.",
    "Denser halogen atoms and increased molecular mass per unit volume make polyhalogenated alkanes significantly denser than water.",
    0,
    "The densities of $\\text{CH}_2\\text{Cl}_2$ ($1.33\\text{ g cm}^{-3}$), $\\text{CHCl}_3$ ($1.49\\text{ g cm}^{-3}$), and $\\text{CCl}_4$ ($1.59\\text{ g cm}^{-3}$) are all greater than that of water ($1.00\\text{ g cm}^{-3}$)."
  ),

  // 8 MCQs
  mcq(
    "Which of the following represents the correct decreasing order of dipole moments for methyl halides?",
    [
      "$\\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{F} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{I}$",
      "$\\text{CH}_3\\text{F} > \\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{I}$",
      "$\\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{F} > \\text{CH}_3\\text{I}$",
      "$\\text{CH}_3\\text{F} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{I}$"
    ],
    0,
    "Due to the balance of charge and bond length ($\\mu = q \\times d$), the dipole moments are: $\\text{CH}_3\\text{Cl}$ ($1.860\\text{ D}$) > $\\text{CH}_3\\text{F}$ ($1.847\\text{ D}$) > $\\text{CH}_3\\text{Br}$ ($1.830\\text{ D}$) > $\\text{CH}_3\\text{I}$ ($1.636\\text{ D}$)."
  ),
  mcq(
    "What is the hybridization of the carbon atom bonded to chlorine in chlorobenzene and vinyl chloride, respectively?",
    [
      "$sp^2, sp^2$",
      "$sp^2, sp^3$",
      "$sp^3, sp^2$",
      "$sp^3, sp^3$"
    ],
    0,
    "In both chlorobenzene (aromatic ring) and vinyl chloride ($\\text{CH}_2=\\text{CH}-\\text{Cl}$), the carbon attached to chlorine is bonded to three atoms with one $\\pi$-bond, making it $sp^2$ hybridized."
  ),
  mcq(
    "The carbon-halogen bond length is maximum in which of the following compounds?",
    [
      "$\\text{CH}_3-\\text{I}$",
      "$\\text{CH}_3-\\text{Br}$",
      "$\\text{CH}_3-\\text{Cl}$",
      "$\\text{CH}_3-\\text{F}$"
    ],
    0,
    "Bond length increases with the covalent radius of the halogen atom: $\\text{C}-\\text{F}$ ($139\\text{ pm}$) < $\\text{C}-\\text{Cl}$ ($178\\text{ pm}$) < $\\text{C}-\\text{Br}$ ($193\\text{ pm}$) < $\\text{C}-\\text{I}$ ($214\\text{ pm}$)."
  ),
  mcq(
    "Which of the following compounds has a net dipole moment equal to zero?",
    [
      "Carbon tetrachloride ($\\text{CCl}_4$)",
      "Chloroform ($\\text{CHCl}_3$)",
      "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)",
      "Chloromethane ($\\text{CH}_3\\text{Cl}$)"
    ],
    0,
    "$\\text{CCl}_4$ has a symmetrical regular tetrahedral geometry. The four identical $\\text{C}-\\text{Cl}$ bond dipole vectors cancel vectorially, giving $\\mu = 0\\text{ D}$."
  ),
  mcq(
    "Which isomer of dichlorobenzene has the highest melting point?",
    [
      "1,4-Dichlorobenzene (p-dichlorobenzene)",
      "1,2-Dichlorobenzene (o-dichlorobenzene)",
      "1,3-Dichlorobenzene (m-dichlorobenzene)",
      "All three isomers have identical melting points"
    ],
    0,
    "1,4-Dichlorobenzene (para-isomer) has a symmetrical structure which fits closely into the crystal lattice, leading to stronger intermolecular forces and a significantly higher melting point ($326\\text{ K}$ vs $256\\text{ K}$ and $249\\text{ K}$)."
  ),
  mcq(
    "Which among the following halogen compounds is lighter than water (density $< 1.0\\text{ g cm}^{-3}$ at $20^\\circ\\text{C}$)?",
    [
      "1-Chloropropane",
      "Bromobenzene",
      "Dichloromethane",
      "Iodobenzene"
    ],
    0,
    "Monochloroalkanes like 1-chloropropane (density $\\approx 0.89\\text{ g cm}^{-3}$) are lighter than water. In contrast, alkyl bromides, iodides, and polychloro derivatives are all denser than water."
  ),
  mcq(
    "The $\\text{C}-\\text{Cl}$ bond enthalpy is highest in which of the following molecules?",
    [
      "$\\text{CH}_3\\text{Cl}$",
      "$\\text{CH}_3\\text{CH}_2\\text{Cl}$",
      "$(\\text{CH}_3)_2\\text{CHCl}$",
      "$(\\text{CH}_3)_3\\text{CCl}$"
    ],
    0,
    "Bond dissociation enthalpy of the $\\text{C}-\\text{Cl}$ bond decreases from methyl to primary, secondary, and tertiary alkyl halides ($351\\text{ kJ mol}^{-1}$ for methyl chloride down to $328\\text{ kJ mol}^{-1}$ for tert-butyl chloride) due to steric crowding and stabilization of the resulting carbocation/radical."
  ),
  mcq(
    "What causes the low reactivity of the $\\text{C}-\\text{Cl}$ bond in chlorobenzene compared to an alkyl chloride?",
    [
      "Partial double bond character due to resonance and $sp^2$ hybridization of carbon",
      "High polarizability of the aromatic ring",
      "Steric hindrance caused by ortho-hydrogens",
      "Presence of hyperconjugation in the benzene ring"
    ],
    0,
    "In chlorobenzene, the $\\text{C}-\\text{Cl}$ bond has partial double bond character due to resonance with the $\\pi$-system, and the carbon is $sp^2$ hybridized with greater s-character, holding electrons more tightly and resisting heterolytic cleavage."
  ),

  // 13 Numerical Questions
  num(
    "How many lone pairs of electrons are present on the halogen atom in a molecule of chloromethane ($\\text{CH}_3\\text{Cl}$)?",
    3,
    "Chlorine belongs to Group 17 and has 7 valence electrons. One electron is shared in the $\\text{C}-\\text{Cl}$ single bond, leaving 6 non-bonding valence electrons, which form exactly 3 lone pairs."
  ),
  num(
    "In carbon tetrachloride ($\\text{CCl}_4$), how many total lone pairs of electrons are present across all four chlorine atoms?",
    12,
    "Each chlorine atom possesses 3 unshared lone pairs. For 4 chlorine atoms, total lone pairs = $4 \\times 3 = 12$."
  ),
  num(
    "How many carbon atoms in 1-chloro-4-methylbenzene are $sp^2$ hybridized?",
    6,
    "The six carbon atoms comprising the aromatic benzene ring are all $sp^2$ hybridized. The methyl carbon is $sp^3$ hybridized. Thus, exactly 6 carbons are $sp^2$ hybridized."
  ),
  num(
    "How many isomeric dichlorobenzenes ($\\text{C}_6\\text{H}_4\\text{Cl}_2$) exist?",
    3,
    "Three positional isomers exist: 1,2-dichlorobenzene (ortho), 1,3-dichlorobenzene (meta), and 1,4-dichlorobenzene (para)."
  ),
  num(
    "How many of the following compounds have a permanent net dipole moment equal to zero: $\\text{CCl}_4$, $\\text{CH}_2\\text{Cl}_2$, trans-1,2-dichloroethene, cis-1,2-dichloroethene, p-dichlorobenzene, m-dichlorobenzene?",
    3,
    "The 3 compounds with zero dipole moment are: $\\text{CCl}_4$ (tetrahedral symmetry), trans-1,2-dichloroethene (centrosymmetric), and p-dichlorobenzene (para cancellation). $\\text{CH}_2\\text{Cl}_2$, cis-1,2-dichloroethene, and m-dichlorobenzene have $\\mu > 0$."
  ),
  num(
    "What is the total number of $\\sigma$-bonds in a molecule of chlorobenzene ($\\text{C}_6\\text{H}_5\\text{Cl}$)?",
    12,
    "Chlorobenzene has 6 $\\text{C}-\\text{C}$ $\\sigma$-bonds in the ring, 5 $\\text{C}-\\text{H}$ $\\sigma$-bonds, and 1 $\\text{C}-\\text{Cl}$ $\\sigma$-bond. Total = $6 + 5 + 1 = 12$ $\\sigma$-bonds."
  ),
  num(
    "How many $\\pi$-electrons are present in the aromatic ring of chlorobenzene ($\\text{C}_6\\text{H}_5\\text{Cl}$)?",
    6,
    "The benzene ring contains 3 conjugated double bonds contributing a Hückel aromatic sextet of $6$ $\\pi$-electrons."
  ),
  num(
    "What is the percentage s-character in the hybrid orbital of the carbon atom bonded to chlorine in vinyl chloride?",
    33,
    "The carbon in vinyl chloride ($\\text{CH}_2=\\text{CH}-\\text{Cl}$) is $sp^2$ hybridized. Percentage s-character = $\\frac{1}{1 + 2} \\times 100\\% = 33.3\\% \\approx 33\\%$."
  ),
  num(
    "What is the total number of electrons shared between the carbon and chlorine atom in the single covalent $\\text{C}-\\text{Cl}$ bond of chloromethane?",
    2,
    "A single covalent bond involves the sharing of exactly one pair of electrons, which equals 2 electrons."
  ),
  num(
    "How many different monochloro derivatives are structurally possible for 2-methylbutane?",
    4,
    "2-methylbutane has 4 non-equivalent sets of hydrogen atoms: C1 gives 1-chloro-2-methylbutane, C2 gives 2-chloro-2-methylbutane, C3 gives 2-chloro-3-methylbutane, and C4 gives 1-chloro-3-methylbutane. Total = 4."
  ),
  num(
    "How many chlorine atoms in a molecule of 1,1,2,2-tetrachloroethane are bonded to $sp^3$ hybridized carbon atoms?",
    4,
    "In 1,1,2,2-tetrachloroethane ($\\text{CHCl}_2-\\text{CHCl}_2$), both carbon atoms are saturated ($sp^3$ hybridized), so all 4 chlorine atoms are attached to $sp^3$ carbons."
  ),
  num(
    "In hexachlorobenzene ($\\text{C}_6\\text{Cl}_6$), what is the total number of lone pairs of electrons in the entire molecule?",
    18,
    "Hexachlorobenzene has 6 chlorine atoms. Each chlorine has 3 lone pairs. Total lone pairs = $6 \\times 3 = 18$."
  ),
  num(
    "What is the degree of unsaturation (double bond equivalent) of chlorobenzene ($\\text{C}_6\\text{H}_5\\text{Cl}$)?",
    4,
    "$\\text{DBE} = C + 1 - \\frac{H + X - N}{2} = 6 + 1 - \\frac{5 + 1 - 0}{2} = 7 - 3 = 4$ (one benzene ring + three double bonds)."
  )
];

console.log(`Part 1 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_halogens_part1.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_halogens_part1.js");
