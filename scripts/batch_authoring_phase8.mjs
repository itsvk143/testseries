import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 8: Biot-Savart Ring, Galvanometer Conversion, Quantum Numbers, Electron Gain Enthalpy, Derangements, Angular Bisectors, Plant Phylogeny, Algal Chemotaxonomy, Animal Tissues & Cockroach Dimorphism
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch8Questions = [
    // =========================================================================
    // 1. PHYSICS — MAGNETISM
    // =========================================================================
    // --- 1.1 JEE Main (Physics - Magnetic Effects: Biot-Savart law and applications) ---
    {
        subject: 'Physics',
        chapter: 'Magnetic Effects of Current and Magnetism',
        subTopic: 'Biot-Savart law and applications',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A non-conducting thin circular ring of radius $R$ carries a total positive charge $Q$ distributed uniformly along its circumference. The ring lies in the $xy$-plane centered at the origin and rotates with a constant angular speed $\\omega$ about its central axis ($z$-axis). What is the ratio of the magnetic field magnitude at an axial point at distance $z = \\sqrt{3}R$ from the center to the magnetic field magnitude at the center ($z = 0$)?",
        options: [
            "$\\frac{1}{8}$",
            "$\\frac{1}{4}$",
            "$\\frac{1}{2\\sqrt{3}}$",
            "$\\frac{3}{8}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The rotating charged ring constitutes an effective circular electric current $I$:\n$$I = \\frac{Q}{T} = \\frac{Q}{2\\pi / \\omega} = \\frac{Q\\omega}{2\\pi}$$\n2. By the Biot-Savart Law, the magnetic field along the axis of a circular current loop at distance $z$ from its center is:\n$$B(z) = \\frac{\\mu_0 I R^2}{2(R^2 + z^2)^{3/2}} = \\frac{\\mu_0 \\left(\\frac{Q\\omega}{2\\pi}\\right) R^2}{2(R^2 + z^2)^{3/2}} = \\frac{\\mu_0 Q\\omega R^2}{4\\pi (R^2 + z^2)^{3/2}}$$\n3. At the center of the ring ($z = 0$):\n$$B(0) = \\frac{\\mu_0 Q\\omega R^2}{4\\pi R^3} = \\frac{\\mu_0 Q\\omega}{4\\pi R}$$\n4. At the axial position $z = \\sqrt{3}R$:\n$$R^2 + z^2 = R^2 + (\\sqrt{3}R)^2 = R^2 + 3R^2 = 4R^2$$\n$$(R^2 + z^2)^{3/2} = (4R^2)^{3/2} = (2R)^3 = 8R^3$$\n$$B(\\sqrt{3}R) = \\frac{\\mu_0 Q\\omega R^2}{4\\pi (8R^3)} = \\frac{1}{8} \\left( \\frac{\\mu_0 Q\\omega}{4\\pi R} \\right) = \\frac{1}{8} B(0)$$\nTaking the ratio:\n$$\\frac{B(\\sqrt{3}R)}{B(0)} = \\frac{1}{8}$$",
        originalityAudit: {
            problemStructure: "Rotating continuous charge distribution mapping to Biot-Savart axial magnetic field profile.",
            solutionMethodSignature: "Equivalent current calculation and axial loop Biot-Savart distance scaling.",
            conceptCombination: "Rotational electric current, Biot-Savart law, axial magnetic field, geometric power-law decay.",
            noveltyRationale: "Unifies rotational electrostatics with the axial $(R^2 + z^2)^{3/2}$ magnetic field profile."
        }
    },

    // --- 1.2 NEET (Physics - Magnetic Effects: Moving coil galvanometer) ---
    {
        subject: 'Physics',
        chapter: 'Magnetic Effects of Current and Magnetism',
        subTopic: 'Moving coil galvanometer and conversion to ammeter/voltmeter',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A moving coil galvanometer has an internal coil resistance of $G = 50\\,\\Omega$ and requires a current of $I_g = 2.0\\text{ mA}$ for full-scale deflection. To convert this instrument into: (I) an ammeter of range $0 - 5.0\\text{ A}$, and (II) a voltmeter of range $0 - 100\\text{ V}$, what resistances must be connected to the galvanometer, and in what configurations?",
        options: [
            "A shunt resistance $S \\approx 0.020\\,\\Omega$ connected in parallel for the ammeter, and a series resistance $R_s = 49,950\\,\\Omega$ for the voltmeter",
            "A resistance of $2.0\\,\\Omega$ in series for the ammeter, and $50,050\\,\\Omega$ in parallel for the voltmeter",
            "A shunt resistance of $0.050\\,\\Omega$ in parallel for the ammeter, and $50,000\\,\\Omega$ in series for the voltmeter",
            "A shunt resistance of $0.010\\,\\Omega$ in parallel for the ammeter, and $25,000\\,\\Omega$ in series for the voltmeter"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Conversion into Ammeter (range $I = 5.0\\text{ A}$):**\nA low resistance (shunt $S$) is connected in parallel with the galvanometer coil. The voltage drop across the shunt equals the voltage drop across the galvanometer:\n$$I_g G = (I - I_g)S \\implies S = \\frac{I_g G}{I - I_g}$$\n$$S = \\frac{(2.0 \\times 10^{-3}\\text{ A})(50\\,\\Omega)}{5.0\\text{ A} - 0.002\\text{ A}} = \\frac{0.10\\text{ V}}{4.998\\text{ A}} \\approx 0.020008\\,\\Omega \\approx 0.020\\,\\Omega$$\n2. **Conversion into Voltmeter (range $V = 100\\text{ V}$):**\nA high resistance $R_s$ is connected in series with the galvanometer coil:\n$$V = I_g(G + R_s) \\implies G + R_s = \\frac{V}{I_g}$$\n$$R_s = \\frac{V}{I_g} - G = \\frac{100\\text{ V}}{2.0 \\times 10^{-3}\\text{ A}} - 50\\,\\Omega = 50,000\\,\\Omega - 50\\,\\Omega = 49,950\\,\\Omega$$\nThus, $S \\approx 0.020\\,\\Omega$ in parallel and $R_s = 49,950\\,\\Omega$ in series.",
        originalityAudit: {
            problemStructure: "Dual conversion of moving coil galvanometer into high-range ammeter and voltmeter.",
            solutionMethodSignature: "Parallel shunt current divider and series multiplier potential divider formulation.",
            conceptCombination: "Galvanometer sensitivity, shunt resistance, multiplier series resistance, full-scale deflection.",
            noveltyRationale: "Demands simultaneous calculation and exact network topology contrast for ammeter vs voltmeter conversions."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY — ATOMIC STRUCTURE & PERIODIC TRENDS
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Atomic Structure: Quantum numbers) ---
    {
        subject: 'Chemistry',
        chapter: 'Atomic Structure',
        subTopic: 'Quantum numbers',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "In the quantum mechanical model of the hydrogen atom, an electron occupies a subshell characterized by principal quantum number $n = 4$ and orbital angular momentum $L = \\sqrt{6} \\hbar$ (where $\\hbar = \\frac{h}{2\\pi}$). What are the total number of orbitals permitted in the $n = 4$ principal shell, and how many radial nodes and angular nodes does this specific orbital possess?",
        options: [
            "Total 16 orbitals in the shell; 1 radial node and 2 angular nodes in this subshell",
            "Total 16 orbitals in the shell; 2 radial nodes and 1 angular node in this subshell",
            "Total 8 orbitals in the shell; 0 radial nodes and 3 angular nodes in this subshell",
            "Total 32 orbitals in the shell; 1 radial node and 1 angular node in this subshell"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The total number of orbitals permitted in any principal quantum shell $n$ is given by:\n$$\\text{Total orbitals} = n^2 = 4^2 = 16$$\n(Permitting a maximum of $2n^2 = 2(16) = 32$ electrons).\n2. The orbital angular momentum of an electron is quantized according to:\n$$L = \\sqrt{l(l + 1)} \\hbar$$\nGiven $L = \\sqrt{6} \\hbar$:\n$$\\sqrt{l(l + 1)} = \\sqrt{6} \\implies l(l + 1) = 6 \\implies l^2 + l - 6 = 0 \\implies l = 2$$\nAn azimuthal quantum number $l = 2$ corresponds to a **$d$-subshell**; hence, this is a **$4d$ orbital** ($n = 4, l = 2$).\n3. Nodal structure of atomic orbitals:\n- **Angular nodes:** Equal to the azimuthal quantum number $l$. Therefore:\n$$\\text{Angular nodes} = l = 2$$\n- **Radial nodes:** Given by the formula $(n - l - 1)$. Therefore:\n$$\\text{Radial nodes} = 4 - 2 - 1 = 1$$\n- **Total nodes:** $\\text{Total} = (n - 1) = 4 - 1 = 3$ (composed of 1 radial node and 2 angular nodes).",
        originalityAudit: {
            problemStructure: "Orbital angular momentum inversion coupled with radial and angular nodal surface decomposition.",
            solutionMethodSignature: "Eigenvalue equation for orbital angular momentum and nodal polynomial degree calculation.",
            conceptCombination: "Quantum numbers ($n, l$), orbital angular momentum quantization, radial nodes, angular nodes.",
            noveltyRationale: "Bridges quantum mechanical angular momentum operators with spatial nodal surface topology."
        }
    },

    // --- 2.2 NEET (Chemistry - Classification: Electron gain enthalpy) ---
    {
        subject: 'Chemistry',
        chapter: 'Classification of Elements and Periodicity in Properties',
        subTopic: 'Electron gain enthalpy',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following correctly arranges the elements of Group 17 (halogens) and Group 16 (chalcogens) in order of increasingly negative electron gain enthalpy (magnitude of $\\Delta_{eg}H^\\circ$), and explains why fluorine and oxygen have less negative values than chlorine and sulfur, respectively?",
        options: [
            "Group 17: $\\text{Cl} > \\text{F} > \\text{Br} > \\text{I}$; Group 16: $\\text{S} > \\text{Se} > \\text{Te} > \\text{O}$; because the exceptionally compact $2p$ subshell in $\\text{F}$ and $\\text{O}$ leads to intense inter-electronic repulsion that opposes electron addition",
            "Group 17: $\\text{F} > \\text{Cl} > \\text{Br} > \\text{I}$; Group 16: $\\text{O} > \\text{S} > \\text{Se} > \\text{Te}$; because Pauling electronegativity strictly correlates with electron affinity across all periods",
            "Group 17: $\\text{I} > \\text{Br} > \\text{Cl} > \\text{F}$; Group 16: $\\text{Te} > \\text{Se} > \\text{S} > \\text{O}$; because heavier elements have larger polarizable electron clouds",
            "Group 17: $\\text{F} = \\text{Cl} > \\text{Br} > \\text{I}$; Group 16: $\\text{O} = \\text{S} > \\text{Se} > \\text{Te}$; because effective nuclear charge is identical within the same group"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Down a group, as atomic size increases, nuclear attraction on an incoming electron decreases, so electron gain enthalpy generally becomes less negative.\n2. However, an anomaly occurs between Period 2 and Period 3:\n- Fluorine ($-328\\text{ kJ/mol}$) is less negative than chlorine ($-349\\text{ kJ/mol}$).\n- Oxygen ($-141\\text{ kJ/mol}$) is less negative than sulfur ($-200\\text{ kJ/mol}$).\n3. **Mechanistic Explanation:** In fluorine and oxygen, the valence electrons occupy the extremely compact, small $2p$ subshell ($n = 2$). The resulting electron density is extremely high. Adding an incoming electron causes strong electron-electron repulsion among the existing electrons, which destabilizes the resulting anion.\n4. In chlorine and sulfur, the incoming electron enters the much larger, more diffuse $3p$ subshell ($n = 3$), where inter-electronic repulsions are significantly weaker.\n5. In Group 16, oxygen's inter-electronic repulsion is so pronounced that it possesses the least negative electron gain enthalpy in the entire group:\n$$\\text{Group 16: } \\text{S} > \\text{Se} > \\text{Te} > \\text{Po} > \\text{O}$$\n$$\\text{Group 17: } \\text{Cl} > \\text{F} > \\text{Br} > \\text{I}$$",
        originalityAudit: {
            problemStructure: "Dual group electron gain enthalpy inversion due to orbital spatial confinement.",
            solutionMethodSignature: "Inter-electronic repulsion energetics vs nuclear attraction balance in $2p$ vs $3p$ subshells.",
            conceptCombination: "Electron gain enthalpy, Period 2 vs Period 3 anomaly, spatial electron density, halogen/chalcogen trends.",
            noveltyRationale: "Demands understanding of electron-electron repulsion in small $2p$ orbitals rather than electronegativity trends."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS — PERMUTATIONS & STRAIGHT LINES
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Permutations: Derangements) ---
    {
        subject: 'Mathematics',
        chapter: 'Permutations & Combinations',
        subTopic: 'Derangements and grid/distribution problems',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Five distinct letters addressed to 5 distinct recipients are inserted randomly into 5 corresponding addressed envelopes (one letter per envelope). What is the total number of derangements ($D_5$) such that no letter is placed into its correct envelope, and what is the probability that exactly two letters are placed into their correctly addressed envelopes?",
        options: [
            "$D_5 = 44$, and $P(\\text{exactly 2 correct}) = \\frac{1}{6}$",
            "$D_5 = 60$, and $P(\\text{exactly 2 correct}) = \\frac{1}{4}$",
            "$D_5 = 44$, and $P(\\text{exactly 2 correct}) = \\frac{1}{12}$",
            "$D_5 = 52$, and $P(\\text{exactly 2 correct}) = \\frac{1}{5}$",
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The number of derangements $D_n$ of $n$ distinct objects is given by:\n$$D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!} = n! \\left[ \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!} - \\dots + \\frac{(-1)^n}{n!} \\right]$$\nFor $n = 5$:\n$$D_5 = 5! \\left[ \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24} - \\frac{1}{120} \\right] = 120 \\left( \\frac{60 - 20 + 5 - 1}{120} \\right) = 44$$\n2. To find the number of ways exactly 2 letters are placed in their correct envelopes:\n- Number of ways to choose which 2 letters are placed in the correct envelopes:\n$$\\binom{5}{2} = \\frac{5 \\times 4}{2} = 10$$\n- The remaining 3 letters must be completely deranged so that none of them is in its correct envelope:\n$$D_3 = 3! \\left[ \\frac{1}{2} - \\frac{1}{6} \\right] = 6 \\left( \\frac{3 - 1}{6} \\right) = 2$$\n- Total favorable outcomes:\n$$N(\\text{exactly 2}) = \\binom{5}{2} \\times D_3 = 10 \\times 2 = 20$$\n3. The total number of unrestricted ways to place 5 letters into 5 envelopes is $5! = 120$.\nTherefore, the probability is:\n$$P(\\text{exactly 2 correct}) = \\frac{20}{120} = \\frac{1}{6}$$",
        originalityAudit: {
            problemStructure: "Complete derangement count and partial fixed-point combinatorial probability.",
            solutionMethodSignature: "Inclusion-exclusion principle derangement formula and binomial fixed-point product.",
            conceptCombination: "Derangement theorem ($D_n$), partial matching fixed points, classical probability.",
            noveltyRationale: "Pairs full derangement calculation ($D_5$) with exact partial derangement probability ($k = 2$)."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Straight Lines: Family of lines and angular bisectors) ---
    {
        subject: 'Mathematics',
        chapter: 'Straight Lines',
        subTopic: 'Family of lines and angular bisectors',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Find the Cartesian equation of the acute angle bisector of the two intersecting straight lines:\n$$L_1: 3x - 4y + 7 = 0$$\n$$L_2: 12x + 5y - 2 = 0$$",
        options: [
            "$11x - 3y + 9 = 0$",
            "$21x + 77y - 101 = 0$",
            "$7x - 9y + 3 = 0$",
            "$3x + 11y - 9 = 0$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. First, make the constant terms in both line equations strictly positive:\n$$L_1: 3x - 4y + 7 = 0 \\quad (c_1 = 7 > 0) \\implies a_1 = 3, b_1 = -4$$\n$$L_2: -12x - 5y + 2 = 0 \\quad (c_2 = 2 > 0) \\implies a_2 = -12, b_2 = -5$$\n2. Evaluate the sign of $(a_1 a_2 + b_1 b_2)$:\n$$a_1 a_2 + b_1 b_2 = (3)(-12) + (-4)(-5) = -36 + 20 = -16 < 0$$\n3. When $a_1 a_2 + b_1 b_2 < 0$, the **acute angle bisector** is given by the equation with the **positive sign ($+$)**:\n$$\\frac{a_1 x + b_1 y + c_1}{\\sqrt{a_1^2 + b_1^2}} = +\\frac{a_2 x + b_2 y + c_2}{\\sqrt{a_2^2 + b_2^2}}$$\n$$\\frac{3x - 4y + 7}{\\sqrt{3^2 + (-4)^2}} = \\frac{-12x - 5y + 2}{\\sqrt{(-12)^2 + (-5)^2}}$$\n$$\\frac{3x - 4y + 7}{5} = \\frac{-12x - 5y + 2}{13}$$\n4. Cross-multiplying:\n$$13(3x - 4y + 7) = 5(-12x - 5y + 2)$$\n$$39x - 52y + 91 = -60x - 25y + 10$$\n$$39x + 60x - 52y + 25y + 91 - 10 = 0$$\n$$99x - 27y + 81 = 0$$\nDividing through by 9:\n$$11x - 3y + 9 = 0$$\nThus, the equation of the acute angle bisector is $11x - 3y + 9 = 0$.",
        originalityAudit: {
            problemStructure: "Acute vs obtuse angle bisector identification via sign criteria of $a_1 a_2 + b_1 b_2$.",
            solutionMethodSignature: "Constant term normalization and algebraic radical reduction.",
            conceptCombination: "Angular bisectors of straight lines, acute vs obtuse discrimination, normal form equations.",
            noveltyRationale: "Tests constant term normalization step necessary to prevent acute/obtuse bisector inversion."
        }
    },

    // =========================================================================
    // 4. BOTANY & ZOOLOGY — PLANT KINGDOM & ANIMAL TISSUES/MORPHOLOGY
    // =========================================================================
    // --- 4.1 NEET (Botany - Diversity in Living World: Plant Kingdom) ---
    {
        subject: 'Botany',
        chapter: 'Diversity in Living World',
        subTopic: 'Plant Kingdom',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Comparing the evolutionary alternation of generations across major plant divisions:\n(I) In which group is the dominant, independent, free-living photosynthetic phase a haploid gametophyte, with the diploid sporophyte remaining physically attached and nutritionally dependent on it?\n(II) In which group are both the diploid sporophyte and haploid gametophyte (prothallus) completely independent, photosynthetic, and free-living?\n(III) In which group is the sporophyte dominant and vascular, while the gametophyte is microscopic, non-free-living, and completely retained within the sporangia on the parent plant?",
        options: [
            "(I) Bryophytes, (II) Pteridophytes, (III) Gymnosperms",
            "(I) Pteridophytes, (II) Bryophytes, (III) Gymnosperms",
            "(I) Gymnosperms, (II) Pteridophytes, (III) Bryophytes",
            "(I) Bryophytes, (II) Gymnosperms, (III) Pteridophytes"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Bryophytes (Liverworts and Mosses):** The life cycle is haplodiplontic, but the **haploid gametophyte** is the dominant, long-lived, independent, and photosynthetic plant body. The diploid sporophyte is differentiated into foot, seta, and capsule; it is physically attached to and nutritionally dependent (parasitic) upon the gametophyte.\n2. **Pteridophytes (Ferns and Horsetails):** The life cycle is also haplodiplontic, but the dominant phase is the **diploid sporophyte** with true roots, stems, and leaves. The haploid gametophyte is a small, inconspicuous, multicellular, free-living, photosynthetic thalloid structure called the **prothallus**, which is completely independent of the sporophyte.\n3. **Gymnosperms (and Angiosperms):** The life cycle is diplontic. The dominant phase is the large, branched, photosynthetic **diploid sporophyte**. Gametophytes do not have an independent, free-living existence; the male (pollen grain) and female (embryo sac within ovule) gametophytes are reduced to a few cells and remain completely enclosed within sporangia on the parent sporophyte.",
        originalityAudit: {
            problemStructure: "Comparative evolutionary reduction of gametophytic generation across embryophyte divisions.",
            solutionMethodSignature: "Alternation of generations lifecycle mapping across Bryophyta, Pteridophyta, and Gymnospermae.",
            conceptCombination: "Haplodiplontic vs diplontic cycles, prothallus independence, parasitic sporophyte, endosporic gametophytes.",
            noveltyRationale: "Requires comprehensive comparative synthesis of alternation of generations across three plant divisions."
        }
    },

    // --- 4.2 NEET (Botany - Diversity in Living World: Algae) ---
    {
        subject: 'Botany',
        chapter: 'Diversity in Living World',
        subTopic: 'Algae',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following correctly pairs the classes of algae (Phaeophyceae and Rhodophyceae) with their diagnostic photosynthetic pigments, principal stored food reserves, and chemical composition of their cell walls?",
        options: [
            "Phaeophyceae: Chlorophyll $a, c$ and fucoxanthin, storing laminarin/mannitol with cellulose and algin in cell walls; Rhodophyceae: Chlorophyll $a, d$ and r-phycoerythrin, storing floridean starch with cellulose, pectin, and polysulfate esters",
            "Rhodophyceae: Chlorophyll $b$ and fucoxanthin, storing true starch with peptidoglycan in cell walls; Phaeophyceae: Chlorophyll $a, d$ storing paramylon",
            "Phaeophyceae: Chlorophyll $a, b$ and phycocyanin, storing glycogen with chitinous cell walls; Rhodophyceae: Chlorophyll $c$ storing laminarin",
            "Both Phaeophyceae and Rhodophyceae contain identical fucoxanthin pigments and store floridean starch in the cytoplasm"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Class Phaeophyceae (Brown Algae; e.g., *Ectocarpus*, *Dictyota*, *Laminaria*, *Sargassum*, *Fucus*):**\n- **Pigments:** Chlorophyll $a, c$, carotenoids, and high amounts of the xanthophyll pigment **fucoxanthin** (giving the characteristic olive green to brown color).\n- **Stored Food:** Complex carbohydrates stored as **laminarin or mannitol** (alcohol).\n- **Cell Wall:** Cellulosic inner wall covered on the outside by a gelatinous coating of **algin** (phycocolloid).\n2. **Class Rhodophyceae (Red Algae; e.g., *Polysiphonia*, *Porphyra*, *Gracilaria*, *Gelidium*):**\n- **Pigments:** Chlorophyll $a, d$, and a predominant red water-soluble phycobilin pigment **r-phycoerythrin**.\n- **Stored Food:** **Floridean starch**, which has a branched chemical structure very similar to amylopectin and glycogen.\n- **Cell Wall:** Composed of cellulose, pectin, and hydrocolloidal **polysulfate esters** (source of commercial agar and carrageenan).",
        originalityAudit: {
            problemStructure: "Chemotaxonomic diagnostic matrix comparing Phaeophyceae and Rhodophyceae.",
            solutionMethodSignature: "Pigment, storage reserve, and cell wall phycocolloid tripartite verification.",
            conceptCombination: "Fucoxanthin vs r-phycoerythrin, laminarin/mannitol vs floridean starch, algin vs polysulfate esters.",
            noveltyRationale: "Tests complete chemotaxonomic profile across pigments, carbohydrates, and wall phycocolloids simultaneously."
        }
    },

    // --- 4.3 NEET (Zoology - Structural Organisation: Animal tissues) ---
    {
        subject: 'Zoology',
        chapter: 'Structural Organisation in Animals and Plants',
        subTopic: 'Epithelial, connective, muscular, and neural tissues in animals',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following correctly pairs the specialized animal epithelial or connective tissue type with its precise anatomical location and primary physiological function?",
        options: [
            "Ciliated columnar epithelium — Inner luminal lining of fallopian tubes (oviducts) and bronchioles; functions to unidirectionally propel ova and mucus via coordinated ciliary beating",
            "Dense regular connective tissue — Subcutaneous layer beneath the dermis; functions primarily as an energy storage insulator and shock absorber",
            "Simple squamous epithelium — Lining of proximal convoluted tubules (PCT) of nephrons; functions in active tubular reabsorption with dense microvillar brush borders",
            "Hyaline cartilage — Haversian systems of compact bone; functions in calcium-phosphorus endocrine regulation"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Ciliated Epithelium:** Consists of columnar or cuboidal cells bearing fine motile cilia on their free surfaces. Located on the inner luminal surfaces of hollow organs like **fallopian tubes (oviducts)** and **bronchioles**. Its function is to move particles or mucus in a specific direction over the epithelial surface.\n2. **Incorrect options:**\n- Subcutaneous tissue beneath the skin is **adipose tissue** (loose connective tissue) and areolar tissue, not dense regular connective tissue (which forms tendons and ligaments with parallel collagen fibers).\n- The lining of the proximal convoluted tubule (PCT) of the nephron is composed of **simple cuboidal epithelium with a brush border of microvilli**, not simple squamous epithelium (which forms the thin filtration membrane of Bowman's capsule and alveolar walls).\n- Haversian systems are characteristic of **compact bone**, not hyaline cartilage.",
        originalityAudit: {
            problemStructure: "Precise histological tissue classification mapped to anatomical localization and functional mechanism.",
            solutionMethodSignature: "Tissue histology match and diagnostic distractor elimination.",
            conceptCombination: "Ciliated epithelium, microvillar brush border, dense regular connective tissue, nephron histology.",
            noveltyRationale: "Demands precise histology-organ matching to prevent conflation of ciliated and brush-border epithelia."
        }
    },

    // --- 4.4 NEET (Zoology - Structural Organisation: Cockroach anatomy) ---
    {
        subject: 'Zoology',
        chapter: 'Structural Organisation in Animals and Plants',
        subTopic: 'Cockroach anatomy and morphology',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In the morphology and reproductive anatomy of the American cockroach (*Periplaneta americana*), which of the following statements correctly identifies the sexually dimorphic appendages and the accessory reproductive structures?",
        options: [
            "Anal styles are unjointed structures present exclusively on the 9th sternum of males; anal cerci are jointed structures present on the 10th segment in both sexes; the mushroom gland serves as an accessory reproductive gland in males",
            "Anal cerci are unjointed structures present exclusively in females on the 8th segment; anal styles are present on the 10th segment in both sexes",
            "Both anal styles and anal cerci are found only in females and function in oviposition capsule sealing",
            "Anal styles are thoracic appendages used for flight stabilization, while anal cerci are gustatory mouthparts"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Sexual Dimorphism in Cockroaches:**\n- **Anal styles (Caudal styles):** A pair of short, thread-like, unjointed sensory structures present on the **9th sternum of males only**; they are completely absent in females. This is a primary external morphological character used to distinguish male cockroaches from females.\n- **Anal cerci:** A pair of long, 15-segmented, jointed sensory structures attached to the **10th tergum in both males and females**; they are sensitive to vibrations and air currents.\n2. **Internal Reproductive Organs:**\n- **Mushroom gland (Utricular gland):** Located in the 6th to 7th abdominal segments of males, functioning as an accessory reproductive gland.\n- **Collaterial glands:** Present in females, secreting the proteinaceous material that forms the hardened protective capsule (**ootheca**) containing 16 eggs (in two rows of 8).",
        originalityAudit: {
            problemStructure: "Morphological sexual dimorphism and abdominal segment mapping in Periplaneta americana.",
            solutionMethodSignature: "Segmental appendages (9th sternum vs 10th tergum) and reproductive gland identification.",
            conceptCombination: "Anal styles vs anal cerci, sexual dimorphism, mushroom gland, segmental anatomy of cockroach.",
            noveltyRationale: "Distinguishes sexually dimorphic unjointed anal styles from non-dimorphic jointed anal cerci."
        }
    }
];

async function runBatch8() {
    console.log(`=== RUNNING PRODUCTION BATCH 8 (${batch8Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch8Questions, 'PRODUCTION_BATCH_8');
    console.log('\nBatch 8 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch8().catch(console.error);
