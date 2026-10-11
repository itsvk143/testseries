import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 4: Modern Physics, Coordination Chemistry, Hydrocarbons, Circles, Conics, Ecology & Human Physiology
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch4Questions = [
    // =========================================================================
    // 1. PHYSICS — MODERN PHYSICS (DUAL NATURE & ATOMS/NUCLEI)
    // =========================================================================
    // --- 1.1 NEET (Physics - Dual Nature of Matter and Radiation: Photoelectric effect) ---
    {
        subject: 'Physics',
        chapter: 'Dual Nature of Matter and Radiation',
        subTopic: 'Photoelectric effect',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "When monochromatic light of wavelength $\\lambda_1 = 400\\text{ nm}$ illuminates a photosensitive metallic photocathode, the stopping potential is measured to be $0.90\\text{ V}$. When the incident radiation is replaced by monochromatic light of wavelength $\\lambda_2 = 248\\text{ nm}$ with twice the intensity of the first source, which of the following correctly gives the new stopping potential $V_s$ and the effect on the saturation photocurrent $I_{sat}$? (Take $hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
        options: [
            "$V_s = 2.80\\text{ V}$, and the saturation photocurrent doubles",
            "$V_s = 5.60\\text{ V}$, and the saturation photocurrent doubles",
            "$V_s = 2.80\\text{ V}$, and the saturation photocurrent remains unchanged",
            "$V_s = 1.90\\text{ V}$, and the saturation photocurrent quadruples"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. From Einstein's photoelectric equation, the maximum kinetic energy of photoelectrons is:\n$$e V_s = E_{photon} - \\Phi = \\frac{hc}{\\lambda} - \\Phi$$\nFor the first wavelength $\\lambda_1 = 400\\text{ nm}$:\n$$E_1 = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{400\\text{ nm}} = 3.10\\text{ eV}$$\nGiven stopping potential $V_1 = 0.90\\text{ V}$, so maximum kinetic energy is $0.90\\text{ eV}$.\nThe work function $\\Phi$ of the metal surface is:\n$$\\Phi = E_1 - e V_1 = 3.10\\text{ eV} - 0.90\\text{ eV} = 2.20\\text{ eV}$$\n2. For the second wavelength $\\lambda_2 = 248\\text{ nm}$:\n$$E_2 = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{248\\text{ nm}} = 5.00\\text{ eV}$$\nThe new stopping potential $V_s$ is:\n$$e V_s = E_2 - \\Phi = 5.00\\text{ eV} - 2.20\\text{ eV} = 2.80\\text{ eV} \\implies V_s = 2.80\\text{ V}$$\n3. The stopping potential depends solely on the frequency/wavelength of the incident light and the cathode work function, independent of intensity.\n4. However, saturation photocurrent $I_{sat}$ is directly proportional to the incident photon flux (intensity). Since the intensity is doubled at fixed beam geometry, the rate of incident photons doubles, thereby doubling the saturation photocurrent.",
        originalityAudit: {
            problemStructure: "Dual-wavelength work function inversion coupled with intensity-dependent photocurrent flux.",
            solutionMethodSignature: "Einstein's photoelectric equation with work function deduction and photon flux proportionality.",
            conceptCombination: "Work function calculation, stopping potential invariance to intensity, saturation current flux scaling.",
            noveltyRationale: "Concurrently evaluates independent dependencies of stopping potential on frequency and photocurrent on intensity."
        }
    },

    // --- 1.2 JEE Main (Physics - Atoms and Nuclei: Hydrogen spectrum and Rydberg formula) ---
    {
        subject: 'Physics',
        chapter: 'Atoms and Nuclei',
        subTopic: 'Hydrogen spectrum and Rydberg formula',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A gas of hydrogen-like ions of atomic number $Z$ is excited such that all possible de-excitation transitions to lower states occur. The maximum photon energy observed in the emission spectrum is $51.00\\text{ eV}$. Furthermore, the transition between the first excited state ($n = 2$) and the ground state ($n = 1$) emits a photon of energy $40.80\\text{ eV}$. What are the atomic number $Z$ of the ion and the principal quantum number $n$ of the highest excited state? (Ground state energy of hydrogen is $-13.60\\text{ eV}$)",
        options: [
            "$Z = 2, \\, n = 4$",
            "$Z = 3, \\, n = 3$",
            "$Z = 2, \\, n = 5$",
            "$Z = 1, \\, n = 4$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For a hydrogen-like ion of atomic number $Z$, the energy of state $k$ is:\n$$E_k = -13.60 \\frac{Z^2}{k^2} \\text{ eV}$$\nThe energy emitted in the transition from $n = 2$ to $n = 1$ is:\n$$\\Delta E_{2 \\to 1} = 13.60 Z^2 \\left( \\frac{1}{1^2} - \\frac{1}{2^2} \\right) = 13.60 Z^2 \\left( \\frac{3}{4} \\right) = 10.20 Z^2 \\text{ eV}$$\nGiven $\\Delta E_{2 \\to 1} = 40.80\\text{ eV}$:\n$$10.20 Z^2 = 40.80 \\implies Z^2 = 4 \\implies Z = 2 \\quad (\\text{He}^+ \\text{ ion})$$\n2. The maximum photon energy emitted corresponds to the transition from the highest occupied excited state $n$ directly to the ground state $n = 1$:\n$$\\Delta E_{max} = 13.60 Z^2 \\left( 1 - \\frac{1}{n^2} \\right) = 13.60 (4) \\left( 1 - \\frac{1}{n^2} \\right) = 54.40 \\left( 1 - \\frac{1}{n^2} \\right) \\text{ eV}$$\nGiven $\\Delta E_{max} = 51.00\\text{ eV}$:\n$$54.40 \\left( 1 - \\frac{1}{n^2} \\right) = 51.00$$\n$$1 - \\frac{1}{n^2} = \\frac{51.00}{54.40} = \\frac{510}{544} = \\frac{15}{16}$$\n$$\\frac{1}{n^2} = 1 - \\frac{15}{16} = \\frac{1}{16} \\implies n = 4$$\nThus, $Z = 2$ and $n = 4$.",
        originalityAudit: {
            problemStructure: "Inverse spectral identification of atomic number and quantum state from Lyman boundary and maximum energy.",
            solutionMethodSignature: "Simultaneous Bohr Rydberg energy level transition equations.",
            conceptCombination: "Hydrogen-like ion energy scaling ($Z^2$), Lyman transitions, maximum spectral line emission.",
            noveltyRationale: "Requires deducing both unknown nuclear charge $Z$ and principal quantum number $n$ from multi-line spectral observations."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY — COORDINATION COMPOUNDS & HYDROCARBONS
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Co-ordination Compounds: Crystal field theory (CFT) and orbital splitting) ---
    {
        subject: 'Chemistry',
        chapter: 'Co-ordination Compounds',
        subTopic: 'Crystal field theory (CFT) and orbital splitting',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Consider the octahedral complexes $[\\text{CoF}_6]^{3-}$ and $[\\text{Co(CN)}_6]^{3-}$. Which of the following statements correctly provides the spin-only magnetic moment ($\\mu_s$) of $[\\text{CoF}_6]^{3-}$ and the Crystal Field Stabilization Energy (CFSE) of $[\\text{Co(CN)}_6]^{3-}$, where $P$ represents pairing energy and $\\Delta_o$ is octahedral splitting?",
        options: [
            "$\\mu_s = 4.90\\text{ BM}$ and $\\text{CFSE} = -2.4\\Delta_o + 2P$",
            "$\\mu_s = 0\\text{ BM}$ and $\\text{CFSE} = -0.4\\Delta_o$",
            "$\\mu_s = 4.90\\text{ BM}$ and $\\text{CFSE} = -2.4\\Delta_o$",
            "$\\mu_s = 2.83\\text{ BM}$ and $\\text{CFSE} = -1.8\\Delta_o + P$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For both complexes, Cobalt ($Z = 27$, $[\\text{Ar}]3d^7 4s^2$) is in the $+3$ oxidation state, giving a $3d^6$ configuration.\n2. In $[\\text{CoF}_6]^{3-}$, fluoride ($F^-$) is a weak field ligand ($\\Delta_o < P$). Therefore, it forms a high-spin complex:\n- Orbital occupancy: $t_{2g}^4 \\, e_g^2$\n- Number of unpaired electrons $n = 4$\n- Spin-only magnetic moment:\n$$\\mu_s = \\sqrt{n(n+2)} = \\sqrt{4(6)} = \\sqrt{24} \\approx 4.90\\text{ BM}$$\n3. In $[\\text{Co(CN)}_6]^{3-}$, cyanide ($CN^-$) is a strong field ligand ($\\Delta_o > P$). Therefore, it forms a low-spin complex:\n- Orbital occupancy: $t_{2g}^6 \\, e_g^0$\n- All 6 electrons are paired in $t_{2g}$ orbitals (diamagnetic, $n = 0$).\n- Energy calculation:\n$$\\text{CFSE} = [6(-0.4) + 0(+0.6)]\\Delta_o + 2P = -2.4\\Delta_o + 2P$$\n(Note: In the free ion ground state $d^6$, Hund's rule gives 1 paired electron pair; low-spin $d^6$ has 3 paired pairs, so there are $3 - 1 = 2$ extra pairs forced against pairing energy, contributing $+2P$).",
        originalityAudit: {
            problemStructure: "Dual CFT electronic configuration with weak vs strong field ligand comparison.",
            solutionMethodSignature: "Octahedral $d^6$ orbital occupancy, magnetic moment calculation, and pairing energy term deduction.",
            conceptCombination: "Spectrochemical series, high-spin vs low-spin $d^6$, spin-only magnetic moment, CFSE pairing correction.",
            noveltyRationale: "Rigorous inclusion of net pairing energy terms ($+2P$) in low-spin CFSE calculation."
        }
    },

    // --- 2.2 NEET (Chemistry - Co-ordination Compounds: Isomerism) ---
    {
        subject: 'Chemistry',
        chapter: 'Co-ordination Compounds',
        subTopic: 'Isomerism',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "For the octahedral coordination complex $[\\text{Co(en)}_2\\text{Cl}_2]\\text{Cl}$ (where $\\text{en} = \\text{ethane-1,2-diamine}$), what is the total number of stereoisomers (geometrical plus optical), and what are their respective optical activities?",
        options: [
            "Total 3 stereoisomers; the trans-isomer is optically inactive, while the cis-isomer exists as a pair of optically active enantiomers ($d$ and $l$)",
            "Total 2 stereoisomers; both cis and trans isomers are optically active",
            "Total 4 stereoisomers; both cis and trans isomers exhibit optical activity",
            "Total 2 stereoisomers; both cis and trans isomers are optically inactive"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The complex cation $[\\text{Co(en)}_2\\text{Cl}_2]^+$ has the general formula $[M(AA)_2a_2]^+$, where $AA$ is a symmetrical bidentate chelating ligand.\n2. It forms two geometrical isomers:\n- trans-$[\\text{Co(en)}_2\\text{Cl}_2]^+$: The two chloride ligands occupy opposite coordination positions ($180^\\circ$ apart). This geometry possesses a plane of symmetry ($\\sigma$) and an inversion center ($i$). Due to this improper symmetry axis, the trans-isomer is achiral and optically inactive.\n- cis-$[\\text{Co(en)}_2\\text{Cl}_2]^+$: The two chloride ligands occupy adjacent positions ($90^\\circ$ apart). This isomer has $C_2$ rotational symmetry but lacks any plane or center of inversion. Consequently, it is chiral and exists as a pair of non-superimposable mirror image enantiomers (dextrorotatory $d$ and laevorotatory $l$).\n3. Therefore, the total number of stereoisomers is $1 \\text{ (trans)} + 2 \\text{ (d-cis and l-cis)} = 3$.",
        originalityAudit: {
            problemStructure: "Stereoisomeric classification of bis-chelated octahedral metal complexes.",
            solutionMethodSignature: "Symmetry element analysis (plane of symmetry vs chiral $C_2$ axis) and enantiomer counting.",
            conceptCombination: "Geometrical isomerism, optical activity, chelation stereochemistry, enantiomeric pairs.",
            noveltyRationale: "Forces geometric symmetry inspection to distinguish achiral trans-forms from chiral cis-enantiomers."
        }
    },

    // --- 2.3 NEET (Chemistry - Hydrocarbons: Ozonolysis and oxidation of alkenes) ---
    {
        subject: 'Chemistry',
        chapter: 'Hydrocarbons',
        subTopic: 'Ozonolysis and oxidation of alkenes',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A hydrocarbon alkene $A$ having molecular formula $\\text{C}_8\\text{H}_{14}$ undergoes reductive ozonolysis with $\\text{O}_3 / \\text{Zn}-\\text{H}_2\\text{O}$ to yield exclusively a single acyclic dialdehyde $B$ ($\\text{C}_8\\text{H}_{14}\\text{O}_2$). When alkene $A$ is vigorously oxidized with hot alkaline $\\text{KMnO}_4$ followed by acidification, it yields a single dicarboxylic acid $C$ (suberic acid, $\\text{C}_8\\text{H}_{14}\\text{O}_4$). What is the identity of alkene $A$?",
        options: [
            "Cyclooctene",
            "1,2-Dimethylcyclohexene",
            "Oct-4-ene",
            "1-Methylcycloheptene"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The molecular formula of $A$ is $\\text{C}_8\\text{H}_{14}$.\nDegree of unsaturation (Double Bond Equivalent, DBE):\n$$\\text{DBE} = C + 1 - \\frac{H}{2} = 8 + 1 - \\frac{14}{2} = 9 - 7 = 2$$\n2. Since reductive ozonolysis yields a single molecule containing all 8 carbon atoms (an acyclic dialdehyde), the double bond must be part of a cyclic ring (one double bond + one ring = DBE of 2).\n3. Cleavage of the double bond opens the ring into an unbranched linear dicarbonyl:\n- Reductive ozonolysis of cyclooctene:\n$$\\text{Cyclooctene} \\xrightarrow{\\text{O}_3, \\text{Zn}/\\text{H}_2\\text{O}} \\text{OHC}-(CH_2)_6-\\text{CHO} \\quad (\\text{octane-1,8-dial})$$\n4. Vigorous oxidation with hot alkaline $\\text{KMnO}_4$ oxidizes both terminal aldehyde functions to carboxylic acids:\n$$\\text{OHC}-(CH_2)_6-\\text{CHO} \\xrightarrow{\\text{KMnO}_4, \\text{H}^+} \\text{HOOC}-(CH_2)_6-\\text{COOH} \\quad (\\text{octane-1,8-dioic acid / suberic acid})$$\n5. Other options:\n- 1,2-Dimethylcyclohexene would yield a diketone (octane-2,7-dione), not a dialdehyde.\n- Oct-4-ene would cleave into two molecules of butanal ($\\text{C}_4\\text{H}_8\\text{O}$).\n- 1-Methylcycloheptene would yield a keto-aldehyde.",
        originalityAudit: {
            problemStructure: "Structure elucidation from DBE calculation, single-molecule ozonolytic ring opening, and oxidation products.",
            solutionMethodSignature: "Ring-cleavage retrosynthesis with oxidation terminal selectivity.",
            conceptCombination: "Degree of unsaturation, reductive ozonolysis of cycloalkenes, $\\text{KMnO}_4$ dicarboxylic oxidation.",
            noveltyRationale: "Uses dialdehyde vs diketone diagnostic criteria to distinguish cycloalkene isomers."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS — CIRCLES & CONIC SECTIONS
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Circles: Chord of contact) ---
    {
        subject: 'Mathematics',
        chapter: 'Circles',
        subTopic: 'Chord of contact',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "From an arbitrary point $P(h, k)$ lying on the line $x + 2y = 10$, a pair of tangents is drawn to the circle $x^2 + y^2 = 16$. The chord of contact of these tangents always passes through a fixed point $Q$. What are the coordinates of the point $Q$?",
        options: [
            "$\\left(\\frac{8}{5}, \\frac{16}{5}\\right)$",
            "$\\left(\\frac{16}{5}, \\frac{8}{5}\\right)$",
            "$\\left(\\frac{4}{5}, \\frac{8}{5}\\right)$",
            "$(2, 4)$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Let $P(h, k)$ be any point on the given straight line $x + 2y = 10$. Thus:\n$$h + 2k = 10 \\implies h = 10 - 2k$$\n2. The equation of the circle is $x^2 + y^2 = 16$. The chord of contact of tangents drawn from $P(h, k)$ to the circle is given by $T = 0$:\n$$h x + k y = 16$$\n3. Substitute $h = 10 - 2k$ into the equation of the chord of contact:\n$$(10 - 2k)x + ky = 16$$\n$$10x - 2kx + ky - 16 = 0$$\n4. Rearrange the equation as a linear combination in parameter $k$ ($L_1 + k L_2 = 0$):\n$$(10x - 16) + k(y - 2x) = 0$$\n5. This represents a family of straight lines passing through the intersection point of lines $L_1 = 0$ and $L_2 = 0$ for all real values of $k$:\n$$10x - 16 = 0 \\implies x = \\frac{16}{10} = \\frac{8}{5}$$\n$$y - 2x = 0 \\implies y = 2x = 2\\left(\\frac{8}{5}\\right) = \\frac{16}{5}$$\nHence, the fixed point through which the chord of contact always passes is $Q\\left(\\frac{8}{5}, \\frac{16}{5}\\right)$.",
        originalityAudit: {
            problemStructure: "Locus family of lines $L_1 + \\lambda L_2 = 0$ applied to polar chord of contact on a circle.",
            solutionMethodSignature: "Parametric substitution into $T = 0$ followed by concurrency condition.",
            conceptCombination: "Chord of contact, parametric line constraints, concurrency of line families.",
            noveltyRationale: "Unifies pole-polar chord theory with pencil of lines geometry to determine invariant concurrent points."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Conic Sections: Focal properties and eccentricity of conics) ---
    {
        subject: 'Mathematics',
        chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
        subTopic: 'Focal properties and eccentricity of conics',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "An ellipse $E: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$) and a hyperbola $H: \\frac{x^2}{c^2} - \\frac{y^2}{d^2} = 1$ are confocal, sharing common foci at $(\\pm 2, 0)$. The eccentricity of the ellipse is $e_1 = \\frac{1}{2}$, and the eccentricity of the hyperbola is $e_2 = 2$. If $P(x_1, y_1)$ is their point of intersection in the first quadrant, what is the value of $x_1^2$ and the angle of intersection between the two curves at $P$?",
        options: [
            "$x_1^2 = 4$, and the angle of intersection is $90^\\circ$",
            "$x_1^2 = 5$, and the angle of intersection is $60^\\circ$",
            "$x_1^2 = 3$, and the angle of intersection is $45^\\circ$",
            "$x_1^2 = 8$, and the angle of intersection is $0^\\circ$ (tangent)"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For confocal conics sharing common foci, an established fundamental property of confocal ellipses and hyperbolas is that they intersect orthogonally at every point of intersection; hence, the angle of intersection is $90^\\circ$.\n2. For the ellipse $E$:\nFocal distance $a e_1 = 2$. Given $e_1 = \\frac{1}{2}$:\n$$a\\left(\\frac{1}{2}\\right) = 2 \\implies a = 4 \\implies a^2 = 16$$\n$$b^2 = a^2(1 - e_1^2) = 16\\left(1 - \\frac{1}{4}\\right) = 16\\left(\\frac{3}{4}\\right) = 12$$\nEquation of the ellipse: $\\frac{x^2}{16} + \\frac{y^2}{12} = 1$.\n3. For the hyperbola $H$:\nFocal distance $c e_2 = 2$. Given $e_2 = 2$:\n$$c(2) = 2 \\implies c = 1 \\implies c^2 = 1$$\n$$d^2 = c^2(e_2^2 - 1) = 1(4 - 1) = 3$$\nEquation of the hyperbola: $\\frac{x^2}{1} - \\frac{y^2}{3} = 1 \\implies y^2 = 3(x^2 - 1)$.\n4. Substituting $y^2 = 3(x^2 - 1)$ into the ellipse equation:\n$$\\frac{x^2}{16} + \\frac{3(x^2 - 1)}{12} = 1 \\implies \\frac{x^2}{16} + \\frac{x^2 - 1}{4} = 1$$\nMultiply through by 16:\n$$x^2 + 4(x^2 - 1) = 16$$\n$$5x^2 - 4 = 16 \\implies 5x^2 = 20 \\implies x_1^2 = 4$$\nThus, $x_1^2 = 4$ and the angle of intersection is $90^\\circ$.",
        originalityAudit: {
            problemStructure: "Orthogonal trajectory intersection of confocal central conics.",
            solutionMethodSignature: "Confocal focal parameter equivalence and simultaneous quadratic system solution.",
            conceptCombination: "Confocal conics, eccentricity relations, orthogonal intersection theorem, coordinate solution.",
            noveltyRationale: "Pairs algebraic intersection solving with the classic optical focal orthogonality theorem."
        }
    },

    // =========================================================================
    // 4. BOTANY & ZOOLOGY — ECOLOGY & HUMAN PHYSIOLOGY
    // =========================================================================
    // --- 4.1 NEET (Botany - Ecology and Environment: Population interactions) ---
    {
        subject: 'Botany',
        chapter: 'Ecology and Environment',
        subTopic: 'Population interactions (mutualism, competition, predation, parasitism)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "When two closely related ciliate species, *Paramecium aurelia* and *Paramecium caudatum*, are cultured together in a fixed volume of culture medium with a constant limiting bacterial food supply, *P. aurelia* outcompetes and completely eliminates *P. caudatum*. Which ecological principle does this experiment demonstrate, and through what mechanism can two competing species with similar requirements stably coexist in natural communities according to modern ecological theory?",
        options: [
            "Gause's Competitive Exclusion Principle; coexistence occurs via resource partitioning (niche differentiation)",
            "Allen's Rule; coexistence occurs through physiological adaptations to abiotic temperature stress",
            "Competitive Release; coexistence occurs when carrying capacity exceeds biotic potential",
            "Verhulst-Pearl Logistic Principle; coexistence occurs when the intrinsic rate of increase ($r$) drops to zero"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Gause's Competitive Exclusion Principle states that two species competing for the exact same limiting resource cannot coexist indefinitely in the same ecological niche if other ecological factors remain constant; the competitively superior species will eventually eliminate the other.\n2. In his classic laboratory experiments with *Paramecium aurelia* and *Paramecium caudatum*, Gause confirmed that complete competitive exclusion occurs when species share an identical fundamental niche.\n3. Modern ecological studies (e.g., MacArthur's five species of American warblers feeding on the same spruce tree) demonstrated that competing species can achieve stable coexistence by evolving **resource partitioning** (niche differentiation)—dividing resources by feeding at different times, occupying different structural zones, or adopting distinct foraging behaviors.",
        originalityAudit: {
            problemStructure: "Experimental ecology validation of Gause's principle coupled with modern coexistence mechanisms.",
            solutionMethodSignature: "Interspecific competition outcome analysis and niche differentiation resolution.",
            conceptCombination: "Competitive exclusion, fundamental vs realized niche, resource partitioning, MacArthur warbler model.",
            noveltyRationale: "Contrasts laboratory competitive exclusion with natural resource partitioning mechanisms."
        }
    },

    // --- 4.2 NEET (Zoology - Human Physiology: Nephron structure and counter-current mechanism) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Nephron structure and counter-current mechanism',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In the mammalian kidney, the maintenance of a steep hyperosmolar gradient in the medullary interstitium (from $300\\text{ mOsmol/L}$ in the cortex to $1200\\text{ mOsmol/L}$ in the inner medulla) is essential for producing concentrated hypertonic urine. Which of the following statements correctly identifies the distinct functional roles of Henle's loop and the vasa recta in this counter-current system?",
        options: [
            "Henle's loop acts as a counter-current multiplier to generate the medullary osmotic gradient, whereas the vasa recta acts as a counter-current exchanger to maintain and preserve the gradient without washing out medullary solutes",
            "The vasa recta actively pumps $\\text{NaCl}$ into the interstitium to generate the gradient, while Henle's loop acts purely as a passive conduit for urea reabsorption",
            "Both Henle's loop and the vasa recta utilize active primary ATP-driven pumps to secrete water into the collecting ducts",
            "The descending limb of Henle actively transports electrolytes while remaining completely impermeable to water"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The mammalian renal counter-current system comprises two distinct functional components:\n- **Counter-current Multiplier (Loop of Henle):** The descending limb of Henle is permeable to water but impermeable to electrolytes; water leaves by osmosis, concentrating the tubular fluid. The ascending limb (especially the thick segment) is impermeable to water but actively transports $\\text{NaCl}$ into the medullary interstitium. The counter-directional flow and active solute pumping multiply the single effect into a longitudinal gradient from $300\\text{ mOsmol/L}$ to $1200\\text{ mOsmol/L}$.\n- **Counter-current Exchanger (Vasa Recta):** The hairpin loops of the vasa recta are freely permeable to water and solutes. As blood descends into the medulla, solutes diffuse in and water diffuses out; as blood ascends back toward the cortex, solutes diffuse out and water re-enters. This passive exchange preserves the gradient and prevents the hyperosmotic medullary solute washout that would otherwise occur with straight capillary flow.",
        originalityAudit: {
            problemStructure: "Comparative physiological mechanics of counter-current multiplier vs exchanger.",
            solutionMethodSignature: "Differential limb permeability tracking and capillary counter-current exchange physics.",
            conceptCombination: "Counter-current multiplier, counter-current exchanger, medullary interstitial gradient, selective nephron permeability.",
            noveltyRationale: "Demands precise conceptual differentiation between gradient generation (multiplier) and gradient preservation (exchanger)."
        }
    },

    // --- 4.3 NEET (Zoology - Human Physiology: Cardiac cycle, ECG, and blood grouping) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Cardiac cycle, ECG, and blood grouping (ABO and Rh)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "During clinical electrocardiogram (ECG) analysis of an adult patient, an abnormally widened and prolonged QRS complex ($> 0.14\\text{ s}$; normal $< 0.10\\text{ s}$) is recorded. What physiological electrical event does the QRS complex represent, and which mechanical event of the cardiac cycle coincides with the first heart sound ($S_1$, 'lub')?",
        options: [
            "Ventricular depolarization; closure of the atrioventricular (mitral and tricuspid) valves at the onset of ventricular systole",
            "Atrial depolarization; closure of the semilunar (aortic and pulmonary) valves at the onset of ventricular diastole",
            "Ventricular repolarization; rapid passive ventricular filling during atrial diastole",
            "Atrioventricular nodal conduction delay; active contraction of the atria pushing blood into ventricles"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. In a standard ECG waveform:\n- **P wave:** Depolarization of the atria.\n- **QRS complex:** Rapid depolarization of both ventricles via the bundle of His and Purkinje system. A widened QRS complex indicates aberrant or delayed ventricular conduction.\n- **T wave:** Repolarization of the ventricles.\n2. During the mechanical cardiac cycle:\n- At the onset of ventricular systole, intraventricular pressure rises sharply above atrial pressure, causing immediate and forceful closure of the atrioventricular (AV) valves (bicuspid/mitral and tricuspid valves). This sudden closure causes vibrations in the ventricular walls and surrounding blood, producing the **first heart sound ($S_1$, 'lub')**.\n- The closure of the semilunar (aortic and pulmonary) valves occurs at the beginning of ventricular diastole and produces the second heart sound ($S_2$, 'dub').",
        originalityAudit: {
            problemStructure: "Correlation of electrical ECG waveforms with valvular mechanical heart sound timings.",
            solutionMethodSignature: "Electrophysiological wave interpretation and valvular hemodynamic event mapping.",
            conceptCombination: "QRS complex depolarization, conduction delay, AV valve closure dynamics, first heart sound ($S_1$).",
            noveltyRationale: "Synthesizes bioelectric conduction timeline with mechanical valve acoustics."
        }
    }
];

async function runBatch4() {
    console.log(`=== RUNNING PRODUCTION BATCH 4 (${batch4Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch4Questions, 'PRODUCTION_BATCH_4');
    console.log('\nBatch 4 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch4().catch(console.error);
