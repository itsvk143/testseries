import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 7: AC Circuits, Mutual Inductance, Arrhenius Kinetics, GOC Carbocations, Sequences & Series, Binomial Theorem, Whittaker Classification, Viroids & Prions, HIV Immunopathology & Sewage Biogas
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch7Questions = [
    // =========================================================================
    // 1. PHYSICS — ELECTROMAGNETIC INDUCTION & ALTERNATING CURRENT
    // =========================================================================
    // --- 1.1 JEE Main (Physics - EMI and AC: AC circuits) ---
    {
        subject: 'Physics',
        chapter: 'Electromagnetic Induction and Alternating Currents',
        subTopic: 'AC circuits',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A series $LCR$ circuit consists of an inductor $L = 0.10\\text{ H}$, a capacitor $C = 10\\ \\mu\\text{F}$, and a resistor $R = 20\\ \\Omega$ connected across an alternating voltage supply given by $V(t) = 200\\sqrt{2} \\sin(\\omega t)\\text{ V}$. Which of the following correctly gives the quality factor ($Q$) of the circuit, the resonant angular frequency ($\\omega_0$), and the lower half-power angular frequency ($\\omega_1$)?",
        options: [
            "$Q = 5.0, \\, \\omega_0 = 1000\\text{ rad/s}, \\, \\omega_1 = 900\\text{ rad/s}$",
            "$Q = 10.0, \\, \\omega_0 = 1000\\text{ rad/s}, \\, \\omega_1 = 950\\text{ rad/s}$",
            "$Q = 5.0, \\, \\omega_0 = 500\\text{ rad/s}, \\, \\omega_1 = 400\\text{ rad/s}$",
            "$Q = 2.5, \\, \\omega_0 = 1000\\text{ rad/s}, \\, \\omega_1 = 800\\text{ rad/s}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The resonant angular frequency $\\omega_0$ of a series $LCR$ circuit is:\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{0.10\\text{ H} \\times 10 \\times 10^{-6}\\text{ F}}} = \\frac{1}{\\sqrt{10^{-6}}} = 1000\\text{ rad/s}$$\n2. The Quality factor ($Q$) is a measure of sharpness of resonance:\n$$Q = \\frac{\\omega_0 L}{R} = \\frac{1000\\text{ rad/s} \\times 0.10\\text{ H}}{20\\ \\Omega} = \\frac{100}{20} = 5.0$$\nAlternatively, using $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{1}{20}\\sqrt{\\frac{0.10}{10^{-5}}} = \\frac{1}{20}\\sqrt{10^4} = \\frac{100}{20} = 5.0$.\n3. The bandwidth $\\Delta \\omega$ between the two half-power frequencies (where power dissipated drops to half of maximum) is:\n$$\\Delta \\omega = \\frac{\\omega_0}{Q} = \\frac{R}{L} = \\frac{20}{0.10} = 200\\text{ rad/s}$$\n4. Since resonance is approximately symmetric around $\\omega_0$ for high $Q$ ($Q \\ge 5$):\n$$\\omega_1 = \\omega_0 - \\frac{\\Delta \\omega}{2} = 1000 - \\frac{200}{2} = 900\\text{ rad/s}$$\n$$\\omega_2 = \\omega_0 + \\frac{\\Delta \\omega}{2} = 1000 + \\frac{200}{2} = 1100\\text{ rad/s}$$\nHence, $Q = 5.0, \\omega_0 = 1000\\text{ rad/s}$, and $\\omega_1 = 900\\text{ rad/s}$.",
        originalityAudit: {
            problemStructure: "Complete resonance and half-power frequency parameter deduction in series AC circuits.",
            solutionMethodSignature: "Quality factor, bandwidth, and half-power boundary calculations from $L, C, R$ components.",
            conceptCombination: "Series resonance, Quality factor ($Q$), half-power bandwidth, angular frequency spectrum.",
            noveltyRationale: "Demands comprehensive evaluation of electrical resonance sharpness parameters rather than single-formula substitution."
        }
    },

    // --- 1.2 NEET (Physics - EMI and AC: Self and mutual inductance) ---
    {
        subject: 'Physics',
        chapter: 'Electromagnetic Induction and Alternating Currents',
        subTopic: 'Self and mutual inductance',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A long primary solenoid of length $l = 50\\text{ cm}$ and radius $r_1 = 2.0\\text{ cm}$ has $N_1 = 1000\\text{ turns}$. A small, coaxial secondary coil of $N_2 = 200\\text{ turns}$ and radius $r_2 = 1.0\\text{ cm}$ is wound closely around the center of the primary solenoid. What is the mutual inductance $M$ of this solenoid-coil pair, and what is the magnitude of the electromotive force ($\\mathcal{E}$) induced in the secondary coil if the primary current drops uniformly from $5.0\\text{ A}$ to $0\\text{ A}$ in $\\Delta t = 20\\text{ ms}$? (Take $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
        options: [
            "$M = 1.6\\pi^2 \\times 10^{-4}\\text{ H} \\approx 0.158\\text{ mH}$, and $\\mathcal{E} \\approx 39.5\\text{ mV}$",
            "$M = 0.63\\text{ mH}$, and $\\mathcal{E} \\approx 158\\text{ mV}$",
            "$M = 1.58\\text{ mH}$, and $\\mathcal{E} \\approx 79.0\\text{ mV}$",
            "$M = 0.040\\text{ mH}$, and $\\mathcal{E} \\approx 10.0\\text{ mV}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The magnetic field inside a long primary solenoid carrying current $I_1$ is uniform and directed along its axis:\n$$B_1 = \\mu_0 \\left(\\frac{N_1}{l}\\right) I_1$$\n2. Since the secondary coil has a smaller radius ($r_2 = 1.0\\text{ cm} < r_1 = 2.0\\text{ cm}$), the magnetic flux passes through the cross-sectional area of the secondary coil $A_2 = \\pi r_2^2$:\n$$\\Phi_{21} = B_1 A_2 = \\mu_0 \\left(\\frac{N_1}{l}\\right) I_1 (\\pi r_2^2)$$\n3. Total magnetic flux linkage $\\lambda_2$ through all $N_2$ turns of the secondary coil:\n$$\\lambda_2 = N_2 \\Phi_{21} = \\frac{\\mu_0 N_1 N_2 \\pi r_2^2}{l} I_1$$\nTherefore, the mutual inductance $M = \\frac{\\lambda_2}{I_1}$ is:\n$$M = \\frac{\\mu_0 N_1 N_2 \\pi r_2^2}{l}$$\nSubstituting given values ($l = 0.50\\text{ m}, r_2 = 0.010\\text{ m} \\implies r_2^2 = 10^{-4}\\text{ m}^2$):\n$$M = \\frac{(4\\pi \\times 10^{-7})(1000)(200)(\\pi \\times 10^{-4})}{0.50} = \\frac{8\\pi^2 \\times 10^{-6}}{0.50} = 1.6\\pi^2 \\times 10^{-4}\\text{ H}$$\nUsing $\\pi^2 \\approx 9.87$:\n$$M \\approx 1.6 \\times 9.87 \\times 10^{-4}\\text{ H} \\approx 1.58 \\times 10^{-4}\\text{ H} = 0.158\\text{ mH}$$\n4. By Faraday's Law, the induced EMF magnitude in the secondary coil is:\n$$\\mathcal{E} = M \\left|\\frac{\\Delta I_1}{\\Delta t}\\right| = (1.58 \\times 10^{-4}\\text{ H}) \\times \\frac{5.0\\text{ A}}{0.020\\text{ s}} = (1.58 \\times 10^{-4}) \\times 250\\text{ A/s} = 0.0395\\text{ V} = 39.5\\text{ mV}$$",
        originalityAudit: {
            problemStructure: "Coaxial two-solenoid mutual inductance with cross-sectional area boundary restriction and induced EMF.",
            solutionMethodSignature: "Internal magnetic flux integration using secondary area $A_2$ and Faraday induction rate.",
            conceptCombination: "Mutual inductance, flux linkage in nested coils, Faraday's law of induction.",
            noveltyRationale: "Tests area selection ($A_2$ vs $A_1$) in non-identical nested solenoids coupled with time-varying induction rate."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY — CHEMICAL KINETICS & GOC
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Chemical Kinetics: Arrhenius equation) ---
    {
        subject: 'Chemistry',
        chapter: 'Chemical Kinetics',
        subTopic: 'Arrhenius equation',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "The rate constant of a chemical reaction triples ($k_{320} = 3.0 \\, k_{300}$) when the absolute temperature is increased from $300\\text{ K}$ to $320\\text{ K}$. What is the activation energy ($E_a$) of the reaction? (Take universal gas constant $R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 3 = 1.0986$)",
        options: [
            "$43.8\\text{ kJ/mol}$",
            "$28.5\\text{ kJ/mol}$",
            "$65.2\\text{ kJ/mol}$",
            "$87.8\\text{ kJ/mol}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The temperature dependence of rate constant is described by the two-temperature Arrhenius equation:\n$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right) = \\frac{E_a}{R} \\left( \\frac{T_2 - T_1}{T_1 T_2} \\right)$$\n2. Given:\n- $T_1 = 300\\text{ K}$\n- $T_2 = 320\\text{ K}$\n- $\\frac{k_2}{k_1} = 3.0$\n- $T_2 - T_1 = 20\\text{ K}$\n- $T_1 T_2 = 300 \\times 320 = 96,000\\text{ K}^2$\n3. Substituting into the Arrhenius relation:\n$$\\ln(3.0) = \\frac{E_a}{8.314} \\left( \\frac{20}{96,000} \\right) = \\frac{E_a}{8.314} \\left( \\frac{1}{4,800} \\right)$$\n$$1.0986 = \\frac{E_a}{8.314 \\times 4,800} = \\frac{E_a}{39,907.2}$$\n4. Solving for activation energy $E_a$:\n$$E_a = 1.0986 \\times 39,907.2\\text{ J/mol} = 43,842\\text{ J/mol} \\approx 43.8\\text{ kJ/mol}$$",
        originalityAudit: {
            problemStructure: "Arrhenius thermal rate constant ratio inversion for activation energy calculation.",
            solutionMethodSignature: "Two-point logarithmic Arrhenius equation derivation.",
            conceptCombination: "Arrhenius equation, temperature coefficient, activation energy thermodynamics.",
            noveltyRationale: "Demands accurate numerical computation of activation barriers without common approximation shortcuts."
        }
    },

    // --- 2.2 JEE Main (Chemistry - Some Basic Principles of Organic Chemistry: Carbocations stability) ---
    {
        subject: 'Chemistry',
        chapter: 'Some Basic Principles of Organic Chemistry',
        subTopic: 'Carbocations, carbanions, and free radicals stability',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Which of the following correctly arranges the given carbocations in order of decreasing thermodynamic stability, and provides the correct structural justification?\n(I) Cycloheptatrienyl (tropylium) cation ($\\text{C}_7\\text{H}_7^+$)\n(II) Triphenylmethyl carbocation ($(\\text{C}_6\\text{H}_5)_3\\text{C}^+$)\n(III) Benzyl carbocation ($\\text{C}_6\\text{H}_5\\text{CH}_2^+$)\n(IV) Allyl carbocation ($\\text{CH}_2=\\text{CH}-\\text{CH}_2^+$)",
        options: [
            "$\\text{I} > \\text{II} > \\text{III} > \\text{IV}$; because the tropylium cation is a planar, completely conjugated Hückel aromatic system possessing $6\\pi$ electrons with extraordinary resonance stabilization",
            "$\\text{II} > \\text{I} > \\text{III} > \\text{IV}$; because three independent phenyl rings contribute more resonance contributors than an isolated seven-membered ring",
            "$\\text{III} > \\text{II} > \\text{I} > \\text{IV}$; because steric strain destabilizes triphenylmethyl and tropylium systems",
            "$\\text{IV} > \\text{III} > \\text{II} > \\text{I}$; because acyclic carbocations have less angular torsional strain than cyclic carbocations"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Tropylium Cation (I):** The cycloheptatrienyl cation is a cyclic, planar, fully conjugated ring system with $(4n + 2) = 6\\pi$ electrons ($n = 1$). According to Hückel's Rule, it is **aromatic**. The positive charge is completely and symmetrically delocalized over all seven equivalent carbon atoms, imparting exceptional thermodynamic stability (such that tropylium bromide exists as a stable, water-soluble ionic salt).\n2. **Triphenylmethyl Cation (II):** The central carbocation is stabilized by extensive resonance across three phenyl rings (generating 9 benzenoid resonance structures with delocalized positive charge at ortho and para positions). However, it is non-planar (propeller-like conformation due to steric clash of ortho hydrogens), which slightly diminishes optimal $\\pi$-orbital overlap compared to a truly aromatic system.\n3. **Benzyl Cation (III):** The positive charge is delocalized into a single phenyl ring (4 resonance contributors).\n4. **Allyl Cation (IV):** Delocalized across only two equivalent terminal carbons through a single $\\pi$ bond (2 resonance contributors).\nTherefore, the stability order is strictly: $\\text{I (Tropylium)} > \\text{II (Triphenylmethyl)} > \\text{III (Benzyl)} > \\text{IV (Allyl)}$.",
        originalityAudit: {
            problemStructure: "Theoretical hierarchy of carbocation stability contrasting Hückel aromaticity with extended multi-aryl resonance.",
            solutionMethodSignature: "Aromatic stabilization energy analysis vs steric dihedral non-coplanarity in triphenylmethyl.",
            conceptCombination: "Aromaticity (Hückel $4n+2$), steric propeller hindrance, benzylic resonance, allylic resonance.",
            noveltyRationale: "Contrasts perfect cyclic aromatic resonance stabilization against sterically hindered multi-ring aryl delocalization."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS — SEQUENCES & SERIES & BINOMIAL THEOREM
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Sequences & Series: Geometric Progression) ---
    {
        subject: 'Mathematics',
        chapter: 'Sequences & Series',
        subTopic: 'Geometric Progression',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "The sum of the terms of an infinite geometric progression is $S = 8$, and the sum of the squares of its terms is $S_2 = \\frac{64}{3}$. What are the first term $a$ and the common ratio $r$ of this geometric progression?",
        options: [
            "$a = 4$ and $r = \\frac{1}{2}$",
            "$a = 6$ and $r = \\frac{1}{4}$",
            "$a = 2$ and $r = \\frac{3}{4}$",
            "$a = 4$ and $r = -\\frac{1}{2}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For an infinite geometric progression with first term $a$ and common ratio $r$ ($|r| < 1$):\n$$S = \\frac{a}{1 - r} = 8 \\implies a = 8(1 - r)$$\n2. The sequence formed by squaring each term is $a^2, a^2 r^2, a^2 r^4, \\dots$, which is also an infinite geometric progression with first term $a^2$ and common ratio $r^2$ ($|r^2| < 1$):\n$$S_2 = \\frac{a^2}{1 - r^2} = \\frac{64}{3}$$\n3. Factoring $1 - r^2 = (1 - r)(1 + r)$:\n$$S_2 = \\left(\\frac{a}{1 - r}\\right) \\left(\\frac{a}{1 + r}\\right) = S \\cdot \\left(\\frac{a}{1 + r}\\right)$$\n$$\\frac{64}{3} = 8 \\cdot \\left(\\frac{a}{1 + r}\\right) \\implies \\frac{a}{1 + r} = \\frac{8}{3}$$\n4. Dividing the two equations:\n$$\\frac{\\frac{a}{1 - r}}{\\frac{a}{1 + r}} = \\frac{8}{8/3} \\implies \\frac{1 + r}{1 - r} = 3$$\n$$1 + r = 3(1 - r) = 3 - 3r \\implies 4r = 2 \\implies r = \\frac{1}{2}$$\n5. Solving for $a$:\n$$a = 8(1 - r) = 8\\left(1 - \\frac{1}{2}\\right) = 8\\left(\\frac{1}{2}\\right) = 4$$\nThus, $a = 4$ and $r = \\frac{1}{2}$.",
        originalityAudit: {
            problemStructure: "Simultaneous infinite geometric series with power-sum transformed ratio.",
            solutionMethodSignature: "Algebraic algebraic factoring of $(1 - r^2)$ to relate linear sum to squared sum.",
            conceptCombination: "Infinite geometric series convergence, sum of squares of GP, linear fractional equations.",
            noveltyRationale: "Bypasses high-degree polynomial expansions by decomposing $S_2$ into $S \\cdot \\frac{a}{1+r}$."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Binomial Theorem: Sum of binomial coefficients and series) ---
    {
        subject: 'Mathematics',
        chapter: 'Binomial Theorem',
        subTopic: 'Sum of binomial coefficients and series',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "For any positive integer $n \\ge 2$, evaluate the sum of the series:\n$$S = \\sum_{r=1}^n r^2 \\binom{n}{r}$$",
        options: [
            "$n(n + 1) 2^{n-2}$",
            "$n(n - 1) 2^{n-2}$",
            "$n^2 2^{n-1}$",
            "$(n^2 + 1) 2^{n-2}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. We rewrite the quadratic coefficient $r^2$ into factorial combinations:\n$$r^2 = r(r - 1) + r$$\nTherefore, the summation splits into:\n$$S = \\sum_{r=1}^n r^2 \\binom{n}{r} = \\sum_{r=2}^n r(r - 1) \\binom{n}{r} + \\sum_{r=1}^n r \\binom{n}{r}$$\n2. Using standard binomial coefficient identities:\n$$r \\binom{n}{r} = n \\binom{n - 1}{r - 1}$$\n$$r(r - 1) \\binom{n}{r} = n(n - 1) \\binom{n - 2}{r - 2}$$\n3. Evaluating the second sum:\n$$\\sum_{r=1}^n r \\binom{n}{r} = n \\sum_{r=1}^n \\binom{n - 1}{r - 1} = n \\cdot 2^{n - 1}$$\n4. Evaluating the first sum:\n$$\\sum_{r=2}^n r(r - 1) \\binom{n}{r} = n(n - 1) \\sum_{r=2}^n \\binom{n - 2}{r - 2} = n(n - 1) \\cdot 2^{n - 2}$$\n5. Summing the two expressions together:\n$$S = n(n - 1) 2^{n - 2} + n \\cdot 2^{n - 1}$$\nFactor out $n \\cdot 2^{n - 2}$:\n$$S = n \\cdot 2^{n - 2} \\left[ (n - 1) + 2 \\right] = n(n + 1) 2^{n - 2}$$",
        originalityAudit: {
            problemStructure: "Higher-order moment sum of binomial distribution weights.",
            solutionMethodSignature: "Falling factorial decomposition $r^2 = r(r-1) + r$ and binomial shift identities.",
            conceptCombination: "Binomial coefficient identities, falling factorial algebra, series summation.",
            noveltyRationale: "Applies algebraic factorial splitting to evaluate second moment combinatorial expansions without calculus differentiation."
        }
    },

    // =========================================================================
    // 4. BOTANY & ZOOLOGY — TAXONOMY, VIROLOGY & HUMAN WELFARE
    // =========================================================================
    // --- 4.1 NEET (Botany - Diversity in Living World: Five kingdom classification system) ---
    {
        subject: 'Botany',
        chapter: 'Diversity in Living World',
        subTopic: 'Five kingdom classification system',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In R.H. Whittaker's (1969) phylogenetic Five Kingdom Classification system, which set of fundamental criteria was comprehensively employed to classify living organisms, and what was the principal nutritional and cytological justification for separating Fungi into an independent kingdom distinct from Plantae?",
        options: [
            "Cell structure complexity, body organization, mode of nutrition, reproduction, and phylogenetic relationships; Fungi were separated because they are absorptive heterotrophs with chitinous cell walls, unlike photosynthetic autotrophic plants with cellulosic cell walls",
            "Mode of locomotion, habitat preference, respiratory quotient, and mitochondrial cristae morphology; Fungi were separated because they possess flagellated gametes in all life cycle stages",
            "Gram-staining reaction, ribosomal RNA sedimentation coefficients (70S vs 80S), and nuclear membrane fluidity; Fungi were separated because they are prokaryotic coenocytes",
            "Presence of vascular bundles, secondary growth, and seed habit; Fungi were separated because they lack double fertilization"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. In 1969, R.H. Whittaker proposed the Five Kingdom Classification: **Monera, Protista, Fungi, Plantae, and Animalia**.\n2. The five core criteria established by Whittaker are:\n- **Complexity of cell structure:** Prokaryotic (Monera) vs Eukaryotic (all other four kingdoms).\n- **Complexity of body organization:** Unicellular (Protista) vs Multicellular / tissue / organ systems (Fungi, Plantae, Animalia).\n- **Mode of nutrition:** Photosynthetic autotrophs (Plantae) vs Absorptive heterotrophs / osmotrophs (Fungi) vs Ingestive heterotrophs / holozoic (Animalia).\n- **Reproduction:** Vegetative, asexual, and sexual modes.\n- **Phylogenetic relationships:** Evolutionary lineages tracing progression from prokaryotes to higher multicellular eukaryotes.\n3. In earlier two-kingdom systems, Fungi were lumped together with green plants simply because both have non-motile bodies and cell walls. Whittaker separated Fungi because their cell wall is made of **chitin and fungal cellulose** (not plant cellulose), they completely lack chlorophyll, and their nutrition is exclusively **absorptive heterotrophy (saprophytic or parasitic)**.",
        originalityAudit: {
            problemStructure: "Comprehensive epistemological criteria of Whittaker's 5-kingdom classification system.",
            solutionMethodSignature: "Taxonomic characterization criteria matching and nutritional separation analysis.",
            conceptCombination: "Five kingdom criteria, absorptive heterotrophy, chitinous cell walls, phylogenetic classification.",
            noveltyRationale: "Tests complete five-criterion framework and the biochemical basis of fungal-plant divergence."
        }
    },

    // --- 4.2 NEET (Botany - Diversity in Living World: Viruses, viroids, prions, and lichens) ---
    {
        subject: 'Botany',
        chapter: 'Diversity in Living World',
        subTopic: 'Viruses, viroids, prions, and lichens',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following comparative biochemical statements accurately differentiates Viroids, Prions, and Viruses regarding their structural composition, genetic material, and associated pathological disorders?",
        options: [
            "Viroids consist exclusively of free, low-molecular-weight circular single-stranded RNA devoid of any protein capsid; Prions consist solely of abnormally folded infectious protein particles devoid of nucleic acids; Viruses contain a nucleic acid genome (either DNA or RNA, never both) enclosed within a protective protein capsid",
            "Viroids are infectious particles containing double-stranded DNA enclosed by a lipid envelope; Prions consist of circular transfer RNA; Viruses contain both DNA and RNA simultaneously within a nucleoid",
            "Both viroids and prions possess double-stranded RNA encapsulated in a thick chitinous shell resistant to autoclaving",
            "Prions cause potato spindle tuber disease through RNA interference, while viroids cause bovine spongiform encephalopathy (BSE) through misfolded amyloid fibrils"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Viroids (discovered by T.O. Diener in 1971):**\n- Infectious agents smaller than viruses.\n- Consist solely of naked, free **single-stranded circular RNA of low molecular weight**.\n- Completely **lack a protein coat (capsid)**.\n- Cause potato spindle tuber disease (PSTD).\n2. **Prions (discovered by Stanley Prusiner):**\n- Infectious agents composed entirely of an **abnormally folded protein ($\text{PrP}^{Sc}$)**.\n- Contain **no nucleic acids** (neither DNA nor RNA).\n- Remarkably resistant to heat, proteases, and ionizing radiation.\n- Cause transmissible spongiform encephalopathies: Bovine Spongiform Encephalopathy (BSE / mad cow disease) in cattle and Creutzfeldt-Jakob Disease (CJD) in humans.\n3. **Viruses:**\n- Acellular nucleoprotein entities.\n- Consist of a genetic material—**either DNA or RNA (never both simultaneously)**—enclosed within a protective protein coat (**capsid**) made of repeating capsomere subunits.",
        originalityAudit: {
            problemStructure: "Tripartite biochemical matrix comparing sub-viral acellular pathogens.",
            solutionMethodSignature: "Nucleic acid and protein capsid presence-absence matrix deduction.",
            conceptCombination: "Viroid free RNA structure, prion infectious protein folding, viral capsid-nucleic architecture, pathology.",
            noveltyRationale: "Synthesizes molecular composition, absence of reciprocal biomolecules, and precise veterinary/human pathology."
        }
    },

    // --- 4.3 NEET (Zoology - Biology and Human Welfare: Innate and acquired immunity, vaccination, and AIDS) ---
    {
        subject: 'Zoology',
        chapter: 'Biology and Human Welfare',
        subTopic: 'Innate and acquired immunity, vaccination, and AIDS',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "During the pathogenesis of Acquired Immuno-Deficiency Syndrome (AIDS) caused by Human Immunodeficiency Virus (HIV), which specific host immune cell population is progressively infected and depleted, what enzymatic actions are executed by viral reverse transcriptase and integrase, and at what diagnostic cell count threshold is clinical AIDS formally defined?",
        options: [
            "CD4+ T-helper lymphocytes ($\text{T}_H$); reverse transcriptase copies viral single-stranded RNA into complementary double-stranded DNA, which is integrated into the host cell chromosome by integrase; clinical AIDS is diagnosed when CD4+ T-cell count falls below $200\\text{ cells/}\\mu\\text{L}$",
            "CD8+ cytotoxic T lymphocytes; viral protease synthesizes messenger RNA directly into the mitochondrial matrix; AIDS is diagnosed when CD8+ count exceeds $2000\\text{ cells/}\\mu\\text{L}$",
            "Mature erythrocytes; reverse transcriptase hydrolyzes hemoglobin into amino acids; AIDS is diagnosed when hemoglobin drops below $5\\text{ g/dL}$",
            "Plasma B lymphocytes; integrase synthesizes IgM pentamers; clinical AIDS is diagnosed when circulating memory B cells disappear"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Target Cells:** HIV targets cells bearing CD4 surface receptors, primarily **CD4+ T-helper lymphocytes ($\text{T}_H$)** and macrophages (which act as an HIV factory/reservoir).\n2. **Viral Enzymes and Lifecycle:**\n- Upon entry, the viral single-stranded RNA is transcribed into complementary double-stranded viral DNA by viral **reverse transcriptase** (RNA-dependent DNA polymerase).\n- The viral DNA enters the nucleus and is covalently incorporated into the host cell's chromosomal DNA by viral **integrase**.\n- The integrated provirus directs the host cell to transcribe viral RNA and translate viral polyproteins, which are cleaved by **viral protease** to assemble progeny virions.\n3. **Immunopathology and Diagnosis:** Progeny virions released into the bloodstream infect and lyse other helper T lymphocytes. Progressive destruction of CD4+ T-cells impairs both cell-mediated and humoral immunity.\n- Normal CD4+ T-cell count ranges between $500\\text{ and }1500\\text{ cells/}\\mu\\text{L}$.\n- When the CD4+ count drops below **$200\\text{ cells/}\\mu\\text{L}$**, the patient suffers severe immunosuppression and succumbs to bouts of opportunistic infections (*Mycobacterium*, *Pneumocystis jirovecii*, Toxoplasma, fungal infections), marking full-blown clinical AIDS.",
        originalityAudit: {
            problemStructure: "Comprehensive retroviral lifecycle mechanics coupled with diagnostic immunocytological thresholds.",
            solutionMethodSignature: "Cellular tropism identification, viral enzyme mechanics, and CD4+ diagnostic cutoff.",
            conceptCombination: "HIV tropism (CD4+ T-helper), reverse transcriptase and integrase function, opportunistic infection etiology, CD4 count $< 200/\\mu\\text{L}$.",
            noveltyRationale: "Unifies molecular retroviral enzyme cascade with clinical immunological diagnostic criteria."
        }
    },

    // --- 4.4 NEET (Zoology - Biology and Human Welfare: Microbes in sewage treatment, biogas) ---
    {
        subject: 'Zoology',
        chapter: 'Biology and Human Welfare',
        subTopic: 'Microbes in sewage treatment, biogas production, and biocontrol',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In secondary (biological) sewage treatment of municipal wastewater, what biological structures constitute the 'flocs' formed in large aeration tanks, how do they reduce Biochemical Oxygen Demand (BOD), and what gaseous mixture is produced during the subsequent digestion of settled activated sludge in anaerobic sludge digesters?",
        options: [
            "Flocs are mesh-like associations of aerobic bacteria intertwined with fungal filaments that oxidize dissolved organic matter, drastically reducing BOD; anaerobic methanogens in sludge digesters produce biogas composed predominantly of methane ($\\text{CH}_4$), carbon dioxide ($\\text{CO}_2$), and hydrogen sulfide ($\\text{H}_2\\text{S}$)",
            "Flocs are dense colonies of anaerobic cyanobacteria that fix atmospheric nitrogen to increase dissolved oxygen; sludge digesters produce pure hydrogen and oxygen",
            "Flocs are synthetic polymer precipitates that bind inorganic phosphates; sludge digesters utilize obligate aerobic yeasts to produce ethanol and ozone",
            "Flocs are predatory protozoan swarms that exclusively engulf viral particles; anaerobic digesters produce pure carbon monoxide"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Aeration Tanks and Flocs:**\n- In the secondary treatment stage, primary effluent is continuously passed into large aeration tanks where air is pumped in and mechanically agitated.\n- This allows vigorous growth of useful aerobic microbes into **flocs**—masses of **aerobic bacteria associated with fungal filaments** to form mesh-like structures.\n- While growing, these aerobic microbes consume the major part of the organic matter in the effluent, significantly reducing the **Biochemical Oxygen Demand (BOD)** of the wastewater (BOD refers to the amount of oxygen required by bacteria to oxidize all organic matter in 1 liter of water; lower BOD indicates cleaner water).\n2. **Settling and Anaerobic Digestion:**\n- Once BOD is substantially reduced, the effluent is passed into a settling tank where the bacterial flocs sediment as **activated sludge**.\n- A small part of this activated sludge is recycled back to the aeration tank as inoculum, while the bulk is pumped into large **anaerobic sludge digesters**.\n- In the digesters, anaerobic bacteria (including methanogens like *Methanobacterium*) digest the aerobic bacteria and fungi in the sludge.\n- During this anaerobic digestion, bacteria produce a combustible mixture of gases known as **biogas**, comprising predominantly **methane ($\\text{CH}_4$, $50-70\%$)**, **carbon dioxide ($\\text{CO}_2$, $30-40\%$)**, and trace amounts of **hydrogen sulfide ($\\text{H}_2\\text{S}$)** and $\\text{H}_2$.",
        originalityAudit: {
            problemStructure: "Complete microbiological and biochemical timeline of secondary sewage treatment.",
            solutionMethodSignature: "BOD reduction mechanics by aerobic flocs and anaerobic methanogenesis biogas stoichiometry.",
            conceptCombination: "Aerobic flocs (bacteria + fungi), BOD definition, activated sludge sedimentation, anaerobic methanogenesis biogas.",
            noveltyRationale: "Integrates aerobic oxidation biochemistry with anaerobic methanogenic fermentation energetics."
        }
    }
];

async function runBatch7() {
    console.log(`=== RUNNING PRODUCTION BATCH 7 (${batch7Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch7Questions, 'PRODUCTION_BATCH_7');
    console.log('\nBatch 7 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch7().catch(console.error);
