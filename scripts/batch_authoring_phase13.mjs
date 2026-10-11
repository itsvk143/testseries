import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 13: Planck Base Units Dimensional Analysis, Inclined Plane Newton's Laws with Friction,
 * Bohr Model Hydrogen-like Ion Li2+, Bent's Rule & Hybridization Geometries,
 * Quadratic Inequality Location of Roots, Insertion of AM and GM Number of Means,
 * C4 Photosynthetic Energetics & Anatomy, Bryophyte Tissue Ploidy Matrix,
 * Addison's Disease HPA Feedback & MC1R Hyperpigmentation, and Tetrapoda Comparative Vertebrate Anatomy.
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch13Questions = [
    // =========================================================================
    // 1. PHYSICS
    // =========================================================================
    // --- 1.1 JEE Main (Physics - Physics and Measurement: Units and dimensions) ---
    {
        subject: 'Physics',
        chapter: 'Physics and Measurement',
        subTopic: 'Units and dimensions',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "If the speed of light in vacuum $c$, Newton's gravitational constant $G$, and Planck's reduced constant $\\hbar$ are chosen as the fundamental base dimensions, the dimensional formula for surface tension $S$ is given by:",
        options: [
            "$[c^{11/2} G^{-3/2} \\hbar^{-1/2}]$",
            "$[c^{9/2} G^{-3/2} \\hbar^{-1/2}]$",
            "$[c^{7/2} G^{-1/2} \\hbar^{-3/2}]$",
            "$[c^{11/2} G^{-1/2} \\hbar^{-3/2}]$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The base dimensions of surface tension $S$ (force per unit length) in the standard SI system are:\n$$[S] = \\frac{[\\text{Force}]}{[\\text{Length}]} = \\frac{[M L T^{-2}]}{[L]} = [M^1 L^0 T^{-2}]$$\n2. The base dimensions of the given fundamental constants are:\n$$[c] = [L T^{-1}]$$\n$$[G] = [M^{-1} L^3 T^{-2}]$$\n$$[\\hbar] = [M L^2 T^{-1}]$$\n3. Assume $S \\propto c^x G^y \\hbar^z$. In terms of base dimensions:\n$$[M^1 L^0 T^{-2}] = [L T^{-1}]^x [M^{-1} L^3 T^{-2}]^y [M L^2 T^{-1}]^z = M^{-y + z} L^{x + 3y + 2z} T^{-x - 2y - z}$$\n4. Equating exponents of $M$, $L$, and $T$:\n- For Mass ($M$):\n$$-y + z = 1 \\implies z = 1 + y$$\n- For Length ($L$):\n$$x + 3y + 2z = 0 \\implies x + 3y + 2(1 + y) = 0 \\implies x + 5y + 2 = 0 \\implies x = -5y - 2$$\n- For Time ($T$):\n$$-x - 2y - z = -2 \\implies x + 2y + z = 2$$\n5. Substituting expressions for $x$ and $z$ into the time equation:\n$$(-5y - 2) + 2y + (1 + y) = 2$$\n$$-2y - 1 = 2 \\implies -2y = 3 \\implies y = -\\frac{3}{2}$$\n6. Finding $z$ and $x$:\n$$z = 1 + \\left(-\\frac{3}{2}\\right) = -\\frac{1}{2}$$\n$$x = -5\\left(-\\frac{3}{2}\\right) - 2 = \\frac{15}{2} - 2 = \\frac{11}{2}$$\n7. Therefore:\n$$[S] = [c^{11/2} G^{-3/2} \\hbar^{-1/2}]$$",
        originalityAudit: {
            problemStructure: "Dimensional analysis using Planck unit basis to derive surface tension exponents.",
            solutionMethodSignature: "Three-variable linear system equating fundamental physical constant dimensions.",
            conceptCombination: "Units and dimensions, Planck base units, surface tension, Newton's gravitational constant.",
            noveltyRationale: "Requires fractional exponent derivation for surface tension in natural Planck units."
        }
    },

    // --- 1.2 NEET (Physics - Laws of Motion: Newton's laws) ---
    {
        subject: 'Physics',
        chapter: 'Laws of Motion',
        subTopic: 'Newton\'s laws',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A block of mass $m_1 = 5.0\\text{ kg}$ rests on a rough inclined plane of angle $\\theta = 37^\\circ$ (take $\\sin 37^\\circ = 0.60, \\cos 37^\\circ = 0.80$). The coefficients of static and kinetic friction between block $m_1$ and the incline are $\\mu_s = 0.50$ and $\\mu_k = 0.40$, respectively. Block $m_1$ is connected by a light inextensible string passing over a frictionless massless pulley at the top of the incline to a hanging block of mass $m_2 = 10.0\\text{ kg}$. Taking $g = 10\\text{ m/s}^2$, what are the acceleration $a$ of the system and the tension $T$ in the string?",
        options: [
            "$a = 3.6\\text{ m/s}^2,\\ T = 64.0\\text{ N}$",
            "$a = 4.0\\text{ m/s}^2,\\ T = 60.0\\text{ N}$",
            "$a = 3.2\\text{ m/s}^2,\\ T = 68.0\\text{ N}$",
            "$a = 2.8\\text{ m/s}^2,\\ T = 72.0\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For block $m_1$ on the incline:\n- Normal force: $N = m_1 g \\cos 37^\\circ = (5.0)(10)(0.80) = 40.0\\text{ N}$\n- Gravitational pull down the incline: $m_1 g \\sin 37^\\circ = (5.0)(10)(0.60) = 30.0\\text{ N}$\n- Maximum static friction: $f_{s,\\max} = \\mu_s N = (0.50)(40.0) = 20.0\\text{ N}$\n- Kinetic friction: $f_k = \\mu_k N = (0.40)(40.0) = 16.0\\text{ N}$\n2. For hanging block $m_2$:\n- Downward gravitational force: $m_2 g = (10.0)(10) = 100.0\\text{ N}$\n3. Testing tendency of motion:\n- Net driving force without friction: $m_2 g - m_1 g \\sin 37^\\circ = 100.0 - 30.0 = 70.0\\text{ N}$\n- Since $70.0\\text{ N} > f_{s,\\max} = 20.0\\text{ N}$, the system accelerates with $m_1$ moving UP the incline and friction acting DOWN the incline.\n4. Equations of motion:\n- For $m_1$: $T - m_1 g \\sin 37^\\circ - f_k = m_1 a \\implies T - 30.0 - 16.0 = 5.0 a \\implies T - 46.0 = 5.0 a$\n- For $m_2$: $m_2 g - T = m_2 a \\implies 100.0 - T = 10.0 a$\n5. Summing the two equations:\n$$(100.0 - 46.0) = (5.0 + 10.0) a \\implies 54.0 = 15.0 a \\implies a = \\frac{54.0}{15.0} = 3.6\\text{ m/s}^2$$\n6. Solving for tension $T$:\n$$T = 100.0 - 10.0(3.6) = 100.0 - 36.0 = 64.0\\text{ N}$$",
        originalityAudit: {
            problemStructure: "Modified inclined plane Atwood system requiring static vs kinetic threshold check.",
            solutionMethodSignature: "Normal force derivation, static threshold test, and two-body coupled equations of motion.",
            conceptCombination: "Newton's laws of motion, static friction, kinetic friction, inclined plane mechanics, tension.",
            noveltyRationale: "Demands explicit verification that net driving force overcomes maximum static friction before applying dynamic equations."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Atomic Structure: Bohr's model) ---
    {
        subject: 'Chemistry',
        chapter: 'Atomic Structure',
        subTopic: 'Bohr\'s model',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "In a hydrogen-like ion, the kinetic energy of the electron in the second Bohr orbit ($n = 2$) is determined to be $30.6\\text{ eV}$. Taking the ground-state ionization energy of hydrogen as $13.6\\text{ eV}$ and the Bohr radius as $a_0$, what is the atomic number $Z$ of the ion, the energy $\\Delta E$ of the photon emitted during the transition from the third excited state ($n = 4$) to the first excited state ($n = 2$), and the orbital radius $r_3$ of the third orbit?",
        options: [
            "$Z = 3$, $\\Delta E = 22.95\\text{ eV}$, and $r_3 = 3a_0$",
            "$Z = 3$, $\\Delta E = 30.60\\text{ eV}$, and $r_3 = 9a_0$",
            "$Z = 2$, $\\Delta E = 10.20\\text{ eV}$, and $r_3 = 4.5a_0$",
            "$Z = 4$, $\\Delta E = 40.80\\text{ eV}$, and $r_3 = 2.25a_0$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. In Bohr's model for a hydrogen-like ion of atomic number $Z$, the kinetic energy $K_n$ of the electron in the $n$-th stationary orbit is:\n$$K_n = -E_n = \\frac{13.6 Z^2}{n^2}\\text{ eV}$$\nGiven $K_2 = 30.6\\text{ eV}$ for $n = 2$:\n$$\\frac{13.6 Z^2}{2^2} = 30.6 \\implies \\frac{13.6 Z^2}{4} = 30.6 \\implies 13.6 Z^2 = 122.4 \\implies Z^2 = 9 \\implies Z = 3$$\n(The ion is $\\text{Li}^{2+}$).\n2. For transition from third excited state ($n_i = 4$) to first excited state ($n_f = 2$):\n$$\\Delta E = 13.6 Z^2 \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right) = 13.6 (3^2) \\left( \\frac{1}{2^2} - \\frac{1}{4^2} \\right) = 13.6 (9) \\left( \\frac{1}{4} - \\frac{1}{16} \\right)$$\n$$\\Delta E = 122.4 \\left( \\frac{3}{16} \\right) = 7.65 \\times 3 = 22.95\\text{ eV}$$\n3. The radius of the $n$-th orbit is given by:\n$$r_n = \\frac{n^2 a_0}{Z}$$\nFor the third orbit ($n = 3$):\n$$r_3 = \\frac{3^2 a_0}{3} = \\frac{9 a_0}{3} = 3a_0$$",
        originalityAudit: {
            problemStructure: "Identification of atomic species via orbital kinetic energy coupled with transition energy and radius scaling.",
            solutionMethodSignature: "Bohr energy quantization, excited state index mapping, and orbital radius formula.",
            conceptCombination: "Bohr's model, kinetic energy of orbital electron, hydrogen-like ions, Rydberg formula, orbital radius.",
            noveltyRationale: "Integrates kinetic energy measurement to deduce atomic number $Z$ before calculating multi-step spectral transition."
        }
    },

    // --- 2.2 NEET (Chemistry - Chemical Bonding and Molecular Structure: Hybridization) ---
    {
        subject: 'Chemistry',
        chapter: 'Chemical Bonding and Molecular Structure',
        subTopic: 'Hybridization',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Consider the molecules and polyatomic ions $\\text{PCl}_3\\text{F}_2$, $\\text{SF}_4$, $\\text{XeF}_4$, and $\\text{I}_3^-$. According to VSEPR theory, Bent's rule, and hybridization concepts, which of the following statements is INCORRECT?",
        options: [
            "In $\\text{PCl}_3\\text{F}_2$, the two more electronegative $\\text{F}$ atoms occupy axial positions derived from $p_z-d_{z^2}$ hybrids having zero $s$-character, yielding a nonpolar geometry ($\\mu = 0$).",
            "In $\\text{SF}_4$, the single lone pair occupies an equatorial position of the $sp^3d$ trigonal bipyramidal framework to maximize $s$-character and minimize repulsion, resulting in a see-saw geometry.",
            "In $\\text{I}_3^-$, the central iodine atom is $sp^3d$ hybridized with its three lone pairs positioned at the axial sites, producing a bent molecular geometry with a bond angle of $\\sim 104.5^\\circ$.",
            "In $\\text{XeF}_4$, the central xenon atom undergoes $sp^3d^2$ hybridization with its two lone pairs occupying mutually trans axial positions, yielding an ideal square planar geometry."
        ],
        correctAnswer: 2,
        correctOption: 'c',
        explanation: "1. In $\\text{PCl}_3\\text{F}_2$ ($sp^3d$ hybridization, trigonal bipyramidal): By Bent's rule, more electronegative substituents prefer hybrid orbitals with less $s$-character. The axial orbitals ($p_z-d_{z^2}$) have $0\\%\\ s$-character, while equatorial orbitals ($sp^2$) have $33.3\\%\\ s$-character. Hence, the two $\\text{F}$ atoms occupy axial positions and three $\\text{Cl}$ atoms occupy equatorial positions, cancelling all bond dipoles ($\\mu = 0$). Statement A is correct.\n2. In $\\text{SF}_4$ ($sp^3d$ hybridization, 4 bond pairs + 1 lone pair): Lone pairs have high electron density and prefer equatorial positions with higher $s$-character ($sp^2$) to experience fewer $90^\\circ$ repulsions (only two $90^\\circ$ lone pair-bond pair repulsions), resulting in a see-saw geometry. Statement B is correct.\n3. In $\\text{I}_3^-$ ($sp^3d$ hybridization, 2 bond pairs + 3 lone pairs): All three lone pairs occupy equatorial positions ($120^\\circ$ apart) to minimize mutual repulsions. The two terminal iodine atoms occupy axial positions ($180^\\circ$ apart), resulting in a strictly LINEAR geometry ($180^\\circ$ bond angle), NOT a bent geometry. Therefore, Statement C is INCORRECT.\n4. In $\\text{XeF}_4$ ($sp^3d^2$ hybridization, 4 bond pairs + 2 lone pairs): The two lone pairs occupy opposite axial positions ($180^\\circ$ apart) to minimize lone pair-lone pair repulsion, resulting in a square planar geometry. Statement D is correct.",
        originalityAudit: {
            problemStructure: "Evaluation of molecular geometries, $s$-character distribution, and lone-pair stereochemistry across hypervalent compounds.",
            solutionMethodSignature: "Bent's rule and VSEPR spatial energy minimization across $sp^3d$ and $sp^3d^2$ systems.",
            conceptCombination: "Hybridization, Bent's rule, VSEPR theory, hypervalent halogen chemistry, axial vs equatorial sites.",
            noveltyRationale: "Specifically tests equatorial placement of three lone pairs in triiodide ion producing linear rather than bent geometry."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Quadratic Equations: Quadratic inequalities) ---
    {
        subject: 'Mathematics',
        chapter: 'Quadratic Equations',
        subTopic: 'Quadratic inequalities',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "The set of all real values of the parameter $a$ for which both roots of the quadratic equation\n$$x^2 - 2(a - 1)x + (2a + 1) = 0$$\nare real and strictly greater than $2$ is:",
        options: [
            "$\\left[4, \\frac{9}{2}\\right)$",
            "$(3, 4]$",
            "$\\left(4, \\frac{9}{2}\\right]$",
            "$(-\\infty, 0] \\cup \\left[4, \\frac{9}{2}\\right)$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "Let $f(x) = x^2 - 2(a - 1)x + (2a + 1)$. For both roots to be real and strictly greater than $k = 2$, three simultaneous conditions must be satisfied:\n1. Non-negative Discriminant ($\\Delta \\ge 0$):\n$$\\Delta = [-2(a - 1)]^2 - 4(1)(2a + 1) = 4(a^2 - 2a + 1) - 4(2a + 1) = 4(a^2 - 4a) \\ge 0$$\n$$a(a - 4) \\ge 0 \\implies a \\in (-\\infty, 0] \\cup [4, \\infty)$$\n2. Vertex Abscissa strictly greater than $2$ ($-\\frac{b}{2A} > 2$):\n$$-\\frac{-2(a - 1)}{2(1)} = a - 1 > 2 \\implies a > 3$$\nIntersecting with Condition 1:\n$$a \\in [4, \\infty)$$\n3. Function value at $k = 2$ must be strictly positive ($A \\cdot f(2) > 0$):\n$$f(2) = 2^2 - 2(a - 1)(2) + (2a + 1) = 4 - 4(a - 1) + 2a + 1 = 4 - 4a + 4 + 2a + 1 = 9 - 2a > 0$$\n$$9 - 2a > 0 \\implies 2a < 9 \\implies a < \\frac{9}{2}$$\n4. Taking the intersection of all three conditions:\n$$a \\in [4, \\infty) \\cap \\left(-\\infty, \\frac{9}{2}\\right) = \\left[4, \\frac{9}{2}\\right)$$\n(Note: At $a = 4$, $f(x) = (x - 3)^2 = 0 \\implies$ both roots are $3 > 2$. At $a = 9/2$, $f(x) = (x - 2)(x - 5) = 0 \\implies$ one root is exactly $2$, which is excluded).",
        originalityAudit: {
            problemStructure: "Location of roots with parametric quadratic inequalities and vertex boundary constraints.",
            solutionMethodSignature: "Simultaneous intersection of discriminant condition, vertex abscissa inequality, and boundary point evaluation.",
            conceptCombination: "Quadratic equations, location of roots, discriminant inequalities, interval analysis.",
            noveltyRationale: "Carefully checks inclusion of closed discriminant boundary $a=4$ while strictly excluding open boundary $a=9/2$."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Sequences & Series: Insertion of AM and GM) ---
    {
        subject: 'Mathematics',
        chapter: 'Sequences & Series',
        subTopic: 'Insertion of AM and GM',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Two positive real numbers $a$ and $b$ ($a > b$) have a single arithmetic mean $A$ and a single geometric mean $G$ such that their ratio is $A : G = 5 : 4$.\nIf $m$ arithmetic means $A_1, A_2, \\ldots, A_m$ are inserted between $a$ and $b$ such that the ratio of the first inserted mean to the last inserted mean is\n$$\\frac{A_1}{A_m} = \\frac{7}{3}$$\nthen the number of inserted arithmetic means $m$ is equal to:",
        options: [
            "$5$",
            "$7$",
            "$9$",
            "$6$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. From the relation between the single AM and GM:\n$$A = \\frac{a + b}{2}, \\quad G = \\sqrt{ab}$$\n$$\\frac{A}{G} = \\frac{a + b}{2\\sqrt{ab}} = \\frac{5}{4} \\implies \\frac{a + b}{\\sqrt{ab}} = \\frac{5}{2}$$\nDividing by $\\sqrt{ab}$:\n$$\\sqrt{\\frac{a}{b}} + \\sqrt{\\frac{b}{a}} = \\frac{5}{2}$$\nLet $t = \\sqrt{\\frac{a}{b}} > 1$ (since $a > b$). Then $t + \\frac{1}{t} = \\frac{5}{2} \\implies 2t^2 - 5t + 2 = 0 \\implies (2t - 1)(t - 2) = 0$.\nSince $t > 1$, we obtain $t = 2 \\implies \\frac{a}{b} = 4 \\implies a = 4b$.\n2. Now, $m$ arithmetic means $A_1, A_2, \\ldots, A_m$ are inserted between $a$ and $b$.\nThe terms $a, A_1, A_2, \\ldots, A_m, b$ form an AP of $(m + 2)$ terms.\nThe common difference $d$ is:\n$$d = \\frac{b - a}{m + 1} = \\frac{b - 4b}{m + 1} = \\frac{-3b}{m + 1}$$\n3. The first and last inserted arithmetic means are:\n$$A_1 = a + d = 4b + \\left(\\frac{-3b}{m + 1}\\right) = b\\left(4 - \\frac{3}{m + 1}\\right) = b\\left(\\frac{4m + 4 - 3}{m + 1}\\right) = b\\left(\\frac{4m + 1}{m + 1}\\right)$$\n$$A_m = b - d = b - \\left(\\frac{-3b}{m + 1}\\right) = b\\left(1 + \\frac{3}{m + 1}\\right) = b\\left(\\frac{m + 4}{m + 1}\\right)$$\n4. Using the given ratio $\\frac{A_1}{A_m} = \\frac{7}{3}$:\n$$\\frac{\\frac{4m + 1}{m + 1}}{\\frac{m + 4}{m + 1}} = \\frac{4m + 1}{m + 4} = \\frac{7}{3}$$\nCross-multiplying:\n$$3(4m + 1) = 7(m + 4) \\implies 12m + 3 = 7m + 28 \\implies 5m = 25 \\implies m = 5$$",
        originalityAudit: {
            problemStructure: "Coupled AM/GM ratio determination of baseline variable proportion followed by AP inserted means common difference equation.",
            solutionMethodSignature: "Quadratic substitution for ratio of numbers and $(m+1)$-partition AP algebra.",
            conceptCombination: "Arithmetic mean, geometric mean, inserted means, arithmetic progressions, common difference.",
            noveltyRationale: "Combines single mean proportioning with first-to-last inserted mean ratio to isolate integer number of means."
        }
    },

    // =========================================================================
    // 4. BOTANY
    // =========================================================================
    // --- 4.1 NEET (Botany - Plant Physiology: Photosynthesis) ---
    {
        subject: 'Botany',
        chapter: 'Plant Physiology',
        subTopic: 'Photosynthesis',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Consider the following statements regarding the $C_4$ dicarboxylic acid photosynthetic pathway in plants like maize and sugarcane:\nI. The primary $\\text{CO}_2$ acceptor is phosphoenolpyruvate (PEP), present in the mesophyll cell cytoplasm, catalyzed by PEP carboxylase which completely lacks oxygenase activity.\nII. Decarboxylation of 4-carbon organic acids (malate or aspartate) occurs in bundle sheath cells, concentrating $\\text{CO}_2$ around RuBisCO to suppress its oxygenase activity.\nIII. The regeneration of PEP from pyruvate in mesophyll chloroplasts requires pyruvate-phosphate dikinase (PPDK), consuming the energetic equivalent of 2 ATP molecules per $\\text{CO}_2$ molecule fixed.\nIV. Synthesis of one mole of hexose (glucose) via the $C_4$ pathway requires a net expenditure of $30\\text{ ATP}$ and $12\\text{ NADPH}$, compared to $18\\text{ ATP}$ and $12\\text{ NADPH}$ in the $C_3$ Calvin cycle.\nV. Bundle sheath cells possess large chloroplasts with well-developed grana and high Photosystem II (PS II) activity to ensure rapid oxygen evolution.\nHow many of the above statements (I–V) are CORRECT?",
        options: [
            "Exactly four (I, II, III, and IV)",
            "All five (I, II, III, IV, and V)",
            "Exactly three (I, II, and IV)",
            "Exactly two (I and II)"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Statement I is CORRECT: In $C_4$ plants, PEP carboxylase in the mesophyll cytosol fixes $\\text{HCO}_3^-$ to PEP ($3\\text{C}$) to form oxaloacetate ($4\\text{C}$). PEP carboxylase has no affinity for $\\text{O}_2$.\n2. Statement II is CORRECT: Decarboxylation in bundle sheath cells releases $\\text{CO}_2$, creating an exceptionally high local concentration of $\\text{CO}_2$ that outcompetes $\\text{O}_2$ for the active site of RuBisCO, virtually eliminating photorespiration.\n3. Statement III is CORRECT: Pyruvate-phosphate dikinase (PPDK) converts pyruvate + ATP + Pi into PEP + AMP + PPi. The hydrolysis of PPi and conversion of AMP to ATP costs 2 high-energy phosphoanhydride bonds (equivalent to 2 ATP) per $\\text{CO}_2$ fixed.\n4. Statement IV is CORRECT: For fixing $6\\text{ CO}_2$ molecules to form 1 glucose: The $C_3$ cycle costs $18\\text{ ATP} + 12\\text{ NADPH}$. The additional PEP regeneration requires $6 \\times 2 = 12\\text{ ATP}$. Thus, total energy consumed is $18 + 12 = 30\\text{ ATP}$ and $12\\text{ NADPH}$.\n5. Statement V is INCORRECT: Chloroplasts of bundle sheath cells are agranal (lack grana) and are deficient in Photosystem II (PS II) precisely to PREVENT oxygen evolution. Avoiding local $\\text{O}_2$ generation prevents competitive inhibition of RuBisCO by oxygen.\nHence, exactly four statements (I, II, III, IV) are correct.",
        originalityAudit: {
            problemStructure: "Multi-statement biochemical and anatomical evaluation of C4 photosynthesis energetic stoichiometry.",
            solutionMethodSignature: "Evaluation of enzymatic kinetics, ATP expenditure tallying, and Kranz anatomical dimorphism.",
            conceptCombination: "C4 pathway, PEP carboxylase, PPDK energetics, RuBisCO oxygenase suppression, agranal chloroplasts.",
            noveltyRationale: "Requires discernment of agranal bundle sheath anatomy specifically evolved to avoid PS II-mediated oxygen generation."
        }
    },

    // --- 4.2 NEET (Botany - Diversity in Living World: Bryophytes) ---
    {
        subject: 'Botany',
        chapter: 'Diversity in Living World',
        subTopic: 'Bryophytes',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In the life cycle of bryophytes (*Funaria hygrometrica* and *Marchantia polymorpha*), alternation of generations involves distinct haploid ($n$) and diploid ($2n$) morphological structures. Which of the following sets correctly designates the chromosome ploidy level ($n$ vs $2n$) of the specified structures?",
        options: [
            "Calyptra ($n$), Columella ($2n$), Protonema ($n$), Elaters ($2n$), Peristome teeth ($2n$)",
            "Calyptra ($2n$), Columella ($2n$), Protonema ($n$), Elaters ($n$), Peristome teeth ($2n$)",
            "Calyptra ($n$), Columella ($n$), Protonema ($n$), Elaters ($2n$), Peristome teeth ($n$)",
            "Calyptra ($2n$), Columella ($2n$), Protonema ($2n$), Elaters ($n$), Peristome teeth ($n$)"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Calyptra: In mosses (*Funaria*), the calyptra is the protective cap covering the young capsule; it is derived directly from the wall of the archegonial venter (female gametophytic tissue) and is therefore HAPLOID ($n$).\n2. Columella: The central sterile, supportive column of cells inside the capsule derived from the endothecium/amphithecium (sporophytic generation) and is therefore DIPLOID ($2n$).\n3. Protonema: The juvenile, filamentous green photosynthetic stage produced directly by the mitotic germination of a haploid meio-spore, representing the gametophytic phase, and is therefore HAPLOID ($n$).\n4. Elaters: In *Marchantia*, elaters are diploid, sterile, hygroscopic spindle-shaped cells with spiral band thickenings produced from sporogenous tissue of the capsule, functioning in spore dispersal; they are DIPLOID ($2n$).\n5. Peristome teeth: In *Funaria*, the 32 peristome teeth arranged in two rings (arthrodontous) are cellular wall thickenings derived from the amphithecium of the capsule wall (sporophytic generation) and are therefore DIPLOID ($2n$).\nThus, the correct sequence is: Calyptra ($n$), Columella ($2n$), Protonema ($n$), Elaters ($2n$), Peristome teeth ($2n$).",
        originalityAudit: {
            problemStructure: "Comprehensive ploidy assignment across gametophytic and sporophytic tissues of mosses and liverworts.",
            solutionMethodSignature: "Embryological and ontogenetic tracing of archegonial, capsular, and spore tissues.",
            conceptCombination: "Bryophytes, Funaria, Marchantia, calyptra, columella, protonema, elaters, peristome teeth, ploidy levels.",
            noveltyRationale: "Tests crucial NCERT distinction that calyptra is gametophytic ($n$) despite physically capping the sporophytic capsule ($2n$)."
        }
    },

    // =========================================================================
    // 5. ZOOLOGY
    // =========================================================================
    // --- 5.1 NEET (Zoology - Human Physiology: Chemical Coordination & Integration) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Chemical Coordination & Integration',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A 38-year-old patient presents with chronic weakness, weight loss, marked hypotension, hypoglycemia, hyperkalemia, and pronounced bronze hyperpigmentation of the skin folds and buccal mucosa. Laboratory tests reveal extremely low serum cortisol and aldosterone levels, alongside markedly elevated plasma adrenocorticotropic hormone (ACTH) concentrations. Which disorder is present, what is the biochemical basis of the hyperpigmentation, and how would serum cortisol respond to an exogenous ACTH stimulation test?",
        options: [
            "Addison's disease (primary adrenocortical insufficiency); overproduction of pro-opiomelanocortin (POMC) and ACTH acting as agonists on melanocortin-1 receptors (MC1R); serum cortisol fails to increase significantly following exogenous ACTH administration.",
            "Cushing's disease (pituitary basophilic adenoma); excess cortisol stimulates local melanogenesis; serum cortisol rises more than twofold following exogenous ACTH administration.",
            "Secondary adrenocortical insufficiency (pituitary corticotroph failure); lack of aldosterone feedback on dermal melanocytes; serum cortisol doubles following exogenous ACTH administration.",
            "Conn's syndrome (primary hyperaldosteronism); aldosterone-induced renin suppression stimulates epidermal melanophores; serum cortisol remains unchanged following exogenous ACTH administration."
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Diagnosis: Primary adrenocortical insufficiency (Addison's disease) is characterized by autoimmune destruction or hypofunction of all three zones of the adrenal cortex. Loss of cortisol causes hypoglycemia, weakness, and hypotension; loss of aldosterone causes hyponatremia and hyperkalemia.\n2. Mechanism of hyperpigmentation: Cortisol normally exerts negative feedback on the hypothalamus (CRH) and anterior pituitary corticotrophs. In its absence, synthesis of the precursor polypeptide pro-opiomelanocortin (POMC) is drastically upregulated. POMC is cleaved into ACTH and $\\alpha$-melanocyte-stimulating hormone ($\\alpha$-MSH). Furthermore, ACTH itself shares peptide sequence homology with $\\alpha$-MSH and binds directly to melanocortin-1 receptors (MC1R) on epidermal melanocytes, stimulating melanin synthesis and causing diffuse bronze hyperpigmentation.\n3. ACTH stimulation test: Because the adrenal cortex itself is damaged or atrophied, exogenous synthetic ACTH (cosyntropin) administration produces no significant rise in serum cortisol. In contrast, in secondary adrenal insufficiency (pituitary ACTH deficiency), the adrenal cortex remains functionally intact and responds to ACTH stimulation.",
        originalityAudit: {
            problemStructure: "Clinical endocrine pathophysiological profile linking negative feedback loss, POMC processing, and diagnostic provocation test.",
            solutionMethodSignature: "Endocrine axis feedback analysis, molecular receptor agonism (MC1R), and functional stimulation test differentiation.",
            conceptCombination: "Addison's disease, ACTH, cortisol, aldosterone, POMC, MC1R melanogenesis, negative feedback loops.",
            noveltyRationale: "Unpacks molecular basis of hyperpigmentation via POMC/MC1R axis coupled with cosyntropin diagnostic test response."
        }
    },

    // --- 5.2 NEET (Zoology - Animal Kingdom: Tetrapoda) ---
    {
        subject: 'Zoology',
        chapter: 'Animal Kingdom',
        subTopic: 'Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Regarding the comparative morphology, cardiovascular anatomy, and skeletal organization of the four extant classes of Tetrapoda, which of the following statements is ACCURATE?",
        options: [
            "Amphibians possess a dicondylic skull and a 3-chambered heart with sinus venosus; non-crocodilian reptiles possess a monocondylic skull and an incompletely divided 3-chambered heart; birds possess a monocondylic skull, 4-chambered heart with right systemic arch, and unidirectional air-sac pulmonary ventilation; mammals possess a dicondylic skull, 4-chambered heart with persistent left systemic arch, and enucleated biconcave erythrocytes.",
            "Amphibians possess a monocondylic skull and 4-chambered heart with sinus venosus; reptiles possess a dicondylic skull and cutaneous respiration; birds possess a dicondylic skull with left systemic arch; mammals possess a monocondylic skull and nucleated biconcave erythrocytes.",
            "Amphibians possess an acodylic skull and 2-chambered heart; reptiles possess a dicondylic skull with complete 4-chambered heart; birds possess a dicondylic skull with sinus venosus; mammals possess a monocondylic skull with right systemic arch.",
            "Amphibians possess a dicondylic skull and 4-chambered heart; reptiles possess a monocondylic skull with nucleated biconcave erythrocytes; birds possess a dicondylic skull with 3-chambered heart; mammals possess a dicondylic skull with right systemic arch."
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Amphibia: Possess a DICONDYLIC skull (two occipital condyles articulating with the atlas vertebra), a 3-chambered heart (2 atria, 1 ventricle) with accessory chambers (sinus venosus and conus arteriosus), and nucleated, oval, biconvex RBCs.\n2. Non-crocodilian Reptilia: Possess a MONOCONDYLIC skull (single occipital condyle), a 3-chambered heart with an incomplete interventricular septum (except crocodiles which have 4 chambers), and nucleated RBCs.\n3. Aves: Possess a MONOCONDYLIC skull, a completely divided 4-chambered heart with a persistent RIGHT systemic aortic arch (left arch is absent), nucleated biconvex RBCs, and continuous unidirectional air-sac pulmonary airflow.\n4. Mammalia: Possess a DICONDYLIC skull, a completely divided 4-chambered heart with a persistent LEFT systemic aortic arch (right arch is absent), and enucleated (non-nucleated), circular, biconcave erythrocytes (with camel and llama being oval exceptions).\nAll four comparative anatomical descriptions in Option A are rigorously correct.",
        originalityAudit: {
            problemStructure: "Four-way comparative vertebrate diagnostic matrix integrating cranial, circulatory, aortic arch, and hematological traits.",
            solutionMethodSignature: "Systematic anatomical character comparison across Amphibia, Reptilia, Aves, and Mammalia.",
            conceptCombination: "Tetrapoda, condylic skull architecture, heart chambering, aortic arch orientation, erythrocyte cytology, avian air sacs.",
            noveltyRationale: "Demands comprehensive knowledge of vertebrate evolutionary milestones (cranial condyles, systemic aortic arches, and erythrocyte enucleation)."
        }
    }
];

async function runBatch13() {
    console.log('=== RUNNING PRODUCTION BATCH 13 (10 QUESTIONS) ===\n');
    const result = await insertBatchWithAudit(batch13Questions, 'PRODUCTION_BATCH_13');
    console.log('\nBatch 13 Execution Results:', JSON.stringify(result, null, 2));
}

runBatch13().catch(err => {
    console.error('Batch 13 Execution Error:', err);
    process.exit(1);
});
