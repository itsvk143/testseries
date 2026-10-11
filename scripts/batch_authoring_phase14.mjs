import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 14: Young's Modulus Fractional Error Analysis, Parabolic Contact Impulse Integration,
 * Combustion Empirical Formula & Mole Stoichiometry, Radial & Angular Wavefunction Nodes Matrix,
 * Diophantine Equivalence Class on N x N, Complex Modulus Triangle Inequality Extremum,
 * Pteridophyte Heterospory & Seed Habit Precursors, Mitochondrial ETS Cytochrome c Localization,
 * Enterocoelous Deuterostome Radial Transformation (Asterias), and Pulmonary Gas Exchange Hamburger Shift.
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch14Questions = [
    // =========================================================================
    // 1. PHYSICS
    // =========================================================================
    // --- 1.1 JEE Main (Physics - Physics and Measurement: Error analysis) ---
    {
        subject: 'Physics',
        chapter: 'Physics and Measurement',
        subTopic: 'Error analysis',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "In an experimental determination of the Young's modulus $Y$ of a wire using the formula $Y = \\frac{4 M g L}{\\pi D^2 \\Delta L}$, the measured parameters are:\n- Suspended mass: $M = (2.000 \\pm 0.002)\\text{ kg}$\n- Natural length of wire: $L = (2.000 \\pm 0.001)\\text{ m}$\n- Diameter of wire: $D = (0.400 \\pm 0.002)\\text{ mm}$\n- Measured elongation: $\\Delta L = (1.25 \\pm 0.01)\\text{ mm}$\n(The acceleration due to gravity $g$ is taken as an exact constant). What is the maximum permissible percentage error in the calculated value of $Y$, and which experimental parameter contributes the largest fractional error to this uncertainty?",
        options: [
            "$1.95\\%$, with the diameter $D$ contributing the largest fractional error ($1.00\\%$)",
            "$1.45\\%$, with the elongation $\\Delta L$ contributing the largest fractional error ($0.80\\%$)",
            "$2.35\\%$, with the diameter $D$ contributing the largest fractional error ($1.40\\%$)",
            "$1.95\\%$, with the elongation $\\Delta L$ contributing the largest fractional error ($1.00\\%$)"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The formula for Young's modulus is $Y = \\frac{4 M g L}{\\pi D^2 \\Delta L}$.\nTaking the natural logarithm and differentiating to find the maximum relative fractional error:\n$$\\frac{\\Delta Y}{Y} = \\frac{\\Delta M}{M} + \\frac{\\Delta L}{L} + 2\\left(\\frac{\\Delta D}{D}\\right) + \\frac{\\Delta(\\Delta L)}{\\Delta L}$$\n2. Evaluating the individual fractional and percentage errors:\n- Mass ($M$):\n$$\\frac{\\Delta M}{M} = \\frac{0.002}{2.000} = 0.0010 = 0.10\\%$$\n- Length ($L$):\n$$\\frac{\\Delta L}{L} = \\frac{0.001}{2.000} = 0.0005 = 0.05\\%$$\n- Diameter ($D$):\n$$2\\left(\\frac{\\Delta D}{D}\\right) = 2 \\times \\left(\\frac{0.002\\text{ mm}}{0.400\\text{ mm}}\\right) = 2 \\times 0.0050 = 0.0100 = 1.00\\%$$\n- Elongation ($\\Delta L$):\n$$\\frac{\\Delta(\\Delta L)}{\\Delta L} = \\frac{0.01\\text{ mm}}{1.25\\text{ mm}} = 0.0080 = 0.80\\%$$\n3. Total maximum permissible percentage error:\n$$\\frac{\\Delta Y}{Y} \\times 100\\% = 0.10\\% + 0.05\\% + 1.00\\% + 0.80\\% = 1.95\\%$$\n4. Comparison of individual fractional contributions:\n- $2\\frac{\\Delta D}{D} = 1.00\\%$\n- $\\frac{\\Delta(\\Delta L)}{\\Delta L} = 0.80\\%$\n- $\\frac{\\Delta M}{M} = 0.10\\%$\n- $\\frac{\\Delta L}{L} = 0.05\\%$\nHence, the diameter $D$ is the largest contributor to the overall measurement uncertainty due to its inverse-square exponent.",
        originalityAudit: {
            problemStructure: "Multi-variable logarithmic error propagation across experimental mechanics measurements with instrumental least counts.",
            solutionMethodSignature: "Power-rule fractional error summation and individual parameter sensitivity ranking.",
            conceptCombination: "Error analysis, Young's modulus, least count propagation, fractional powers, measurement uncertainty.",
            noveltyRationale: "Distinguishes between raw parameter fractional error and weighted error contribution amplified by power exponents."
        }
    },

    // --- 1.2 NEET (Physics - Laws of Motion: Impulse) ---
    {
        subject: 'Physics',
        chapter: 'Laws of Motion',
        subTopic: 'Impulse',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A rubber ball of mass $m = 0.20\\text{ kg}$ travelling horizontally at $u = 25.0\\text{ m/s}$ in the positive $x$-direction strikes a rigid vertical wall and rebounds along the negative $x$-direction. The contact duration is $\\tau = 20\\text{ ms} = 0.020\\text{ s}$, during which the magnitude of the normal force exerted by the wall on the ball follows the parabolic profile:\n$$F(t) = 4 F_{\\max} \\left( \\frac{t}{\\tau} - \\frac{t^2}{\\tau^2} \\right) \\quad (0 \\le t \\le \\tau)$$\nwith peak force $F_{\\max} = 600\\text{ N}$. What is the magnitude of the total impulse $J$ delivered to the ball, the rebound speed $v$, and the time-averaged force $F_{\\text{avg}}$ exerted by the wall?",
        options: [
            "$J = 8.0\\text{ N}\\cdot\\text{s},\\ v = 15.0\\text{ m/s},\\ F_{\\text{avg}} = 400\\text{ N}$",
            "$J = 6.0\\text{ N}\\cdot\\text{s},\\ v = 10.0\\text{ m/s},\\ F_{\\text{avg}} = 300\\text{ N}$",
            "$J = 8.0\\text{ N}\\cdot\\text{s},\\ v = 20.0\\text{ m/s},\\ F_{\\text{avg}} = 400\\text{ N}$",
            "$J = 10.0\\text{ N}\\cdot\\text{s},\\ v = 25.0\\text{ m/s},\\ F_{\\text{avg}} = 500\\text{ N}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The total impulse $J$ delivered by the wall is the integral of the contact force over the impact duration:\n$$J = \\int_0^\\tau F(t)\\, dt = 4 F_{\\max} \\int_0^\\tau \\left( \\frac{t}{\\tau} - \\frac{t^2}{\\tau^2} \\right) dt$$\nEvaluating the integral:\n$$\\int_0^\\tau \\left( \\frac{t}{\\tau} - \\frac{t^2}{\\tau^2} \\right) dt = \\left[ \\frac{t^2}{2\\tau} - \\frac{t^3}{3\\tau^2} \\right]_0^\\tau = \\left( \\frac{\\tau}{2} - \\frac{\\tau}{3} \\right) = \\frac{\\tau}{6}$$\n$$J = 4 F_{\\max} \\left( \\frac{\\tau}{6} \\right) = \\frac{2}{3} F_{\\max} \\tau = \\frac{2}{3} (600\\text{ N})(0.020\\text{ s}) = 400 \\times 0.020 = 8.0\\text{ N}\\cdot\\text{s}$$\n2. By the Impulse-Momentum Theorem (taking the positive direction as the incident direction $+x$):\n$$\\Delta p = p_f - p_i = -J$$\n$$m(-v) - m(+u) = -J \\implies -m(v + u) = -J \\implies m(v + u) = J$$\n$$(0.20\\text{ kg})(v + 25.0\\text{ m/s}) = 8.0\\text{ N}\\cdot\\text{s}$$\n$$v + 25.0 = \\frac{8.0}{0.20} = 40.0 \\implies v = 40.0 - 25.0 = 15.0\\text{ m/s}$$\n3. The time-averaged force exerted by the wall during collision is:\n$$F_{\\text{avg}} = \\frac{J}{\\tau} = \\frac{8.0\\text{ N}\\cdot\\text{s}}{0.020\\text{ s}} = 400\\text{ N}$$",
        originalityAudit: {
            problemStructure: "Parabolic collision impulse integration coupled with vectorial impulse-momentum momentum change.",
            solutionMethodSignature: "Definite integration of time-dependent contact force and 1D momentum conservation.",
            conceptCombination: "Impulse, momentum, average force, collision dynamics, definite integration.",
            noveltyRationale: "Replaces idealized constant-force approximations with a realistic parabolic contact trajectory to solve for rebound kinematics."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Some Basic Concepts in Chemistry: Mole concept) ---
    {
        subject: 'Chemistry',
        chapter: 'Some Basic Concepts in Chemistry',
        subTopic: 'Mole concept',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A $1.80\\text{ g}$ sample of a pure organic compound containing carbon, hydrogen, and oxygen is completely combusted in dry excess oxygen. The combustion products are absorbed quantitatively: anhydrous $\\text{CaCl}_2$ gains $1.08\\text{ g}$ of mass, and concentrated $\\text{KOH}$ solution gains $2.64\\text{ g}$ of mass. In a separate determination, $0.100\\text{ mol}$ of the compound weighs $18.0\\text{ g}$.\nWhat is the molecular formula of the compound, the total number of oxygen atoms contained in a $9.00\\text{ g}$ sample of this substance, and the volume of dry $\\text{O}_2$ gas required at STP ($273.15\\text{ K}, 1\\text{ atm}$, molar volume $= 22.4\\text{ L/mol}$) for complete combustion of $9.00\\text{ g}$ of this compound?",
        options: [
            "Molecular formula: $\\text{C}_6\\text{H}_{12}\\text{O}_6$; Oxygen atoms in $9.00\\text{ g}$: $1.81 \\times 10^{23}$; Volume of $\\text{O}_2$ at STP: $6.72\\text{ L}$",
            "Molecular formula: $\\text{C}_3\\text{H}_6\\text{O}_3$; Oxygen atoms in $9.00\\text{ g}$: $0.90 \\times 10^{23}$; Volume of $\\text{O}_2$ at STP: $3.36\\text{ L}$",
            "Molecular formula: $\\text{C}_6\\text{H}_{12}\\text{O}_6$; Oxygen atoms in $9.00\\text{ g}$: $3.61 \\times 10^{23}$; Volume of $\\text{O}_2$ at STP: $13.44\\text{ L}$",
            "Molecular formula: $\\text{C}_5\\text{H}_{10}\\text{O}_5$; Oxygen atoms in $9.00\\text{ g}$: $1.51 \\times 10^{23}$; Volume of $\\text{O}_2$ at STP: $5.60\\text{ L}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Molar Mass determination:\n$$M_{\\text{compound}} = \\frac{18.0\\text{ g}}{0.100\\text{ mol}} = 180\\text{ g/mol}$$\n2. Empirical formula from combustion of $1.80\\text{ g}$:\n- Mass of $\\text{C}$ from $2.64\\text{ g } \\text{CO}_2$ ($M = 44\\text{ g/mol}$):\n$$n_{\\text{C}} = n_{\\text{CO}_2} = \\frac{2.64}{44} = 0.060\\text{ mol} \\implies m_{\\text{C}} = 0.060 \\times 12 = 0.72\\text{ g}$$\n- Mass of $\\text{H}$ from $1.08\\text{ g } \\text{H}_2\\text{O}$ ($M = 18\\text{ g/mol}$):\n$$n_{\\text{H}} = 2 \\times n_{\\text{H}_2\\text{O}} = 2 \\times \\frac{1.08}{18} = 0.120\\text{ mol} \\implies m_{\\text{H}} = 0.120 \\times 1.0 = 0.12\\text{ g}$$\n- Mass of $\\text{O}$ by difference:\n$$m_{\\text{O}} = 1.80 - (0.72 + 0.12) = 1.80 - 0.84 = 0.96\\text{ g}$$\n$$n_{\\text{O}} = \\frac{0.96}{16} = 0.060\\text{ mol}$$\n- Atomic ratio: $\\text{C} : \\text{H} : \\text{O} = 0.060 : 0.120 : 0.060 = 1 : 2 : 1$.\nEmpirical formula is $\\text{CH}_2\\text{O}$ (formula mass $= 30\\text{ g/mol}$).\nSince Molar Mass $= 180\\text{ g/mol}$, $n = 180 / 30 = 6$, giving the molecular formula $\\text{C}_6\\text{H}_{12}\\text{O}_6$.\n3. Moles in $9.00\\text{ g}$ sample of $\\text{C}_6\\text{H}_{12}\\text{O}_6$:\n$$n_{\\text{sample}} = \\frac{9.00\\text{ g}}{180\\text{ g/mol}} = 0.050\\text{ mol}$$\n- Moles of oxygen atoms $= 6 \\times 0.050 = 0.30\\text{ mol}$.\n$$\\text{Number of O atoms} = 0.30 \\times 6.022 \\times 10^{23} = 1.807 \\times 10^{23} \\approx 1.81 \\times 10^{23}$$\n4. Combustion stoichiometry:\n$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{ O}_2 \\to 6\\text{ CO}_2 + 6\\text{ H}_2\\text{O}$$\n$$n_{\\text{O}_2} = 6 \\times n_{\\text{sample}} = 6 \\times 0.050 = 0.30\\text{ mol}$$\n$$\\text{Volume of } \\text{O}_2\\text{ at STP} = 0.30\\text{ mol} \\times 22.4\\text{ L/mol} = 6.72\\text{ L}$$",
        originalityAudit: {
            problemStructure: "Multi-stage quantitative analysis integrating gravimetric absorption combustion, empirical/molecular deduction, and gas stoichiometry.",
            solutionMethodSignature: "Elemental mass conservation, empirical formula multiplier, Avogadro particle count, and STP gas molar volume.",
            conceptCombination: "Mole concept, combustion analysis, empirical and molecular formula, Avogadro constant, stoichiometry.",
            noveltyRationale: "Unifies gravimetric Liebig tube analysis with STP gaseous reactant consumption and subatomic particle counts."
        }
    },

    // --- 2.2 NEET (Chemistry - Atomic Structure: Quantum mechanical model) ---
    {
        subject: 'Chemistry',
        chapter: 'Atomic Structure',
        subTopic: 'Quantum mechanical model',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Consider the quantum mechanical model of the hydrogen atom, atomic orbital wave functions $\\psi(r, \\theta, \\phi)$, and radial probability distributions:\nI. The atomic orbitals $2s$, $3p_x$, $4d_{xy}$, and $5f_{xyz}$ all possess exactly ONE radial spherical node.\nII. For the $d_{z^2}$ orbital, the two angular nodes are conical nodal surfaces, unlike the other four $d$-orbitals which have two mutually perpendicular planar nodal surfaces.\nIII. The radial wave function amplitude $\\psi(r)$ at the nucleus ($r = 0$) is non-zero only for $s$-orbitals ($l = 0$), whereas for all orbitals with $l \\ge 1$, $\\psi(0) = 0$.\nIV. The radial probability density function $4\\pi r^2 R^2(r)$ vanishes at $r = 0$ for all atomic orbitals without exception, including $s$-orbitals.\nWhich of the above statements (I–IV) are CORRECT?",
        options: [
            "All four statements (I, II, III, and IV) are correct",
            "Only I, II, and III are correct",
            "Only II and IV are correct",
            "Only I and III are correct"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Statement I is CORRECT: The number of radial spherical nodes is given by $N_r = n - l - 1$.\n- For $2s$: $n = 2, l = 0 \\implies N_r = 2 - 0 - 1 = 1$.\n- For $3p_x$: $n = 3, l = 1 \\implies N_r = 3 - 1 - 1 = 1$.\n- For $4d_{xy}$: $n = 4, l = 2 \\implies N_r = 4 - 2 - 1 = 1$.\n- For $5f_{xyz}$: $n = 5, l = 3 \\implies N_r = 5 - 3 - 1 = 1$.\nAll four orbitals have $n - l = 2$ and thus have exactly 1 radial node.\n2. Statement II is CORRECT: For $d_{z^2}$, the angular factor is proportional to $(3\\cos^2\\theta - 1)$. Setting this to zero gives $\\cos\\theta = \\pm 1/\\sqrt{3} \\approx \\pm 0.577$ (angles $\\theta \\approx 54.7^\\circ$ and $125.3^\\circ$), defining two conical nodal surfaces. In contrast, $d_{xy}, d_{yz}, d_{zx}$, and $d_{x^2-y^2}$ possess pairs of planar nodal surfaces.\n3. Statement III is CORRECT: As $r \\to 0$, the radial wave function behaves as $R_{nl}(r) \\propto r^l$. When $l = 0$ ($s$-orbitals), $r^0 = 1$, yielding a finite non-zero value at the nucleus. For $l \\ge 1$, $r^l \\to 0$ as $r \\to 0$, meaning electrons in $p, d, f$ orbitals have zero probability density at the exact nuclear origin.\n4. Statement IV is CORRECT: The total radial probability of finding the electron in a spherical shell of thickness $dr$ at distance $r$ is $P(r)dr = 4\\pi r^2 R_{nl}^2(r) dr$. Because of the geometric volume element factor $r^2$, $4\\pi r^2 R^2(r) = 0$ at $r = 0$ for every atomic orbital, including $1s$ and $2s$.\nThus, all four statements (I, II, III, and IV) are strictly correct.",
        originalityAudit: {
            problemStructure: "Comprehensive evaluation of Schrödinger wave mechanics: radial nodes, angular nodal topologies, and nuclear boundary behaviors.",
            solutionMethodSignature: "Analytical node formula derivation ($n-l-1$), spherical harmonic zero analysis, and radial distribution integration limits.",
            conceptCombination: "Quantum mechanical model, radial nodes, angular nodes, $d_{z^2}$ conical surfaces, nuclear probability density.",
            noveltyRationale: "Confronts subtle distinction between wavefunction amplitude $\\psi(0) \\ne 0$ for $s$-orbitals and radial distribution $P(0) = 0$ due to the $r^2$ metric factor."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Sets, Relations, and Functions: Types of relations) ---
    {
        subject: 'Mathematics',
        chapter: 'Sets, Relations, and Functions',
        subTopic: 'Types of relations (reflexive, symmetric, transitive, equivalence)',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Let $\\mathbb{N}$ denote the set of positive integers. A relation $R$ is defined on the Cartesian product $\\mathbb{N} \\times \\mathbb{N}$ by:\n$$(a, b) R (c, d) \\iff ad(b + c) = bc(a + d)$$\nWhich of the following statements is TRUE regarding the mathematical properties of $R$ and the equivalence class $[(2, 3)]$?",
        options: [
            "$R$ is an equivalence relation, and the equivalence class $[(2, 3)]$ contains exactly $4$ elements.",
            "$R$ is reflexive and symmetric but not transitive, so no equivalence class exists.",
            "$R$ is an equivalence relation, and the equivalence class $[(2, 3)]$ contains infinitely many elements.",
            "$R$ is symmetric and transitive but not reflexive on $\\mathbb{N} \\times \\mathbb{N}$."
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Simplifying the relation condition:\n$$ad(b + c) = bc(a + d)$$\nDividing both sides by the non-zero product $abcd$ ($a, b, c, d \\in \\mathbb{N}$):\n$$\\frac{ad(b + c)}{abcd} = \\frac{bc(a + d)}{abcd} \\implies \\frac{b + c}{bc} = \\frac{a + d}{ad}$$\n$$\\frac{1}{c} + \\frac{1}{b} = \\frac{1}{d} + \\frac{1}{a} \\implies \\frac{1}{a} - \\frac{1}{b} = \\frac{1}{c} - \\frac{1}{d}$$\n2. Equivalence relation verification:\nDefine a function $f: \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{Q}$ by $f(x, y) = \\frac{1}{x} - \\frac{1}{y}$.\nThen $(a, b) R (c, d) \\iff f(a, b) = f(c, d)$.\n- Reflexivity: $f(a, b) = f(a, b) \\implies (a, b) R (a, b)$ for all $(a, b)$.\n- Symmetry: $f(a, b) = f(c, d) \\iff f(c, d) = f(a, b)$.\n- Transitivity: $f(a, b) = f(c, d)$ and $f(c, d) = f(e, g) \\implies f(a, b) = f(e, g)$.\nHence, $R$ is an equivalence relation.\n3. Equivalence class $[(2, 3)]$:\nFor $(a, b) = (2, 3)$, we have $f(2, 3) = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.\nWe seek all pairs $(x, y) \\in \\mathbb{N} \\times \\mathbb{N}$ satisfying:\n$$\\frac{1}{x} - \\frac{1}{y} = \\frac{1}{6} \\implies \\frac{1}{x} = \\frac{1}{6} + \\frac{1}{y} > \\frac{1}{6}$$\nSince $x, y \\in \\mathbb{N}$ and $\\frac{1}{x} > \\frac{1}{6}$, we must have $1 \\le x < 6$, so $x \\in \\{1, 2, 3, 4, 5\\}$.\nTesting each integer value of $x$:\n- $x = 1: \\frac{1}{y} = 1 - \\frac{1}{6} = \\frac{5}{6} \\implies y = \\frac{6}{5} \\notin \\mathbb{N}$.\n- $x = 2: \\frac{1}{y} = \\frac{1}{2} - \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3} \\implies y = 3 \\in \\mathbb{N} \\implies (2, 3)$.\n- $x = 3: \\frac{1}{y} = \\frac{1}{3} - \\frac{1}{6} = \\frac{1}{6} \\implies y = 6 \\in \\mathbb{N} \\implies (3, 6)$.\n- $x = 4: \\frac{1}{y} = \\frac{1}{4} - \\frac{1}{6} = \\frac{1}{12} \\implies y = 12 \\in \\mathbb{N} \\implies (4, 12)$.\n- $x = 5: \\frac{1}{y} = \\frac{1}{5} - \\frac{1}{6} = \\frac{1}{30} \\implies y = 30 \\in \\mathbb{N} \\implies (5, 30)$.\nThus, $[(2, 3)] = \\{(2, 3), (3, 6), (4, 12), (5, 30)\\}$, containing exactly $4$ ordered pairs.",
        originalityAudit: {
            problemStructure: "Equivalence relation proof through reciprocal transformation coupled with Diophantine equivalence class enumeration.",
            solutionMethodSignature: "Algebraic canonicalization to $f(x, y)$ invariant and unit fraction Diophantine bound analysis.",
            conceptCombination: "Relations and functions, equivalence relations, equivalence classes, unit fractions, Diophantine equations.",
            noveltyRationale: "Transforms a non-linear product relation into a level-set equation of reciprocals to find finite integer solutions."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Complex Numbers: Triangle inequality) ---
    {
        subject: 'Mathematics',
        chapter: 'Complex Numbers',
        subTopic: 'Triangle inequality',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Let $z \\in \\mathbb{C}$ be a complex number that satisfies the equation\n$$\\left| z - \\frac{4}{z} \\right| = 2$$\nIf $M$ and $m$ denote the maximum and minimum possible values of the modulus $|z|$, respectively, then the value of $M^2 + m^2$ is equal to:",
        options: [
            "$12$",
            "$10$",
            "$8$",
            "$16$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Let $r = |z| > 0$. By the reverse triangle inequality for any two complex numbers $z_1, z_2$:\n$$||z_1| - |z_2|| \\le |z_1 - z_2|$$\nApplying this with $z_1 = z$ and $z_2 = \\frac{4}{z}$:\n$$\\left| |z| - \\left|\\frac{4}{z}\\right| \\right| \\le \\left| z - \\frac{4}{z} \\right| = 2$$\nSince $|4/z| = \\frac{4}{|z|} = \\frac{4}{r}$:\n$$\\left| r - \\frac{4}{r} \\right| \\le 2$$\n2. Expanding the absolute value inequality:\n$$-2 \\le r - \\frac{4}{r} \\le 2$$\nMultiplying through by $r > 0$ yields two simultaneous quadratic inequalities:\n- Upper bound: $r^2 - \\frac{4}{r} \\cdot r \\le 2r \\implies r^2 - 2r - 4 \\le 0$\nRoots of $r^2 - 2r - 4 = 0$ are $r = \\frac{2 \\pm \\sqrt{4 - 4(1)(-4)}}{2} = \\frac{2 \\pm 2\\sqrt{5}}{2} = 1 \\pm \\sqrt{5}$.\nSince $r > 0$, we have $r \\le \\sqrt{5} + 1$.\n- Lower bound: $r^2 - 4 \\ge -2r \\implies r^2 + 2r - 4 \\ge 0$\nRoots of $r^2 + 2r - 4 = 0$ are $r = \\frac{-2 \\pm \\sqrt{4 - 4(1)(-4)}}{2} = -1 \\pm \\sqrt{5}$.\nSince $r > 0$, we have $r \\ge \\sqrt{5} - 1$.\n3. Therefore, the modulus $|z|$ is strictly bounded by:\n$$\\sqrt{5} - 1 \\le |z| \\le \\sqrt{5} + 1$$\nHence, $M = \\sqrt{5} + 1$ and $m = \\sqrt{5} - 1$.\n4. Evaluating $M^2 + m^2$:\n$$M^2 + m^2 = (\\sqrt{5} + 1)^2 + (\\sqrt{5} - 1)^2 = (5 + 2\\sqrt{5} + 1) + (5 - 2\\sqrt{5} + 1) = 6 + 6 = 12$$",
        originalityAudit: {
            problemStructure: "Extremal complex modulus bounds derived via reverse triangle inequality on rational complex difference.",
            solutionMethodSignature: "Reverse triangle inequality modulus envelope and quadratic polynomial root bounds.",
            conceptCombination: "Complex numbers, modulus properties, reverse triangle inequality, quadratic inequalities.",
            noveltyRationale: "Applies two-sided triangle inequality to isolate sharp algebraic extremes and their symmetric quadratic sum."
        }
    },

    // =========================================================================
    // 4. BOTANY
    // =========================================================================
    // --- 4.1 NEET (Botany - Diversity in Living World: Pteridophytes) ---
    {
        subject: 'Botany',
        chapter: 'Diversity in Living World',
        subTopic: 'Pteridophytes',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Consider the following statements regarding Pteridophytes (*Selaginella*, *Salvinia*, *Equisetum*, and *Dryopteris*):\nI. Genera like *Selaginella* and *Salvinia* are heterosporous, producing two kinds of spores; retention of the female gametophyte on the parent sporophyte for variable periods is considered an important precursor event in seed habit evolution.\nII. In homosporous ferns like *Dryopteris*, the gametophyte (prothallus) is an inconspicuous, small, multicellular, free-living, mostly photosynthetic thalloid structure requiring cool, damp, and shaded microhabitats.\nIII. The obligate requirement of water for flagellated male gametes (antherozoids) to swim to the archegonia severely restricts the ecological range and geographic distribution of pteridophytes.\nIV. In *Equisetum* (horsetails), the stems possess distinct nodes and internodes with silica incrustations in epidermal cell walls, and sporangia are borne on peltate sporangiophores aggregated into compact strobili (cones).\nV. Vascular tissues in all pteridophytes contain true xylem vessels with perforated end walls and phloem companion cells, identical to angiosperms.\nHow many of the above statements (I–V) are CORRECT?",
        options: [
            "Exactly four (I, II, III, and IV)",
            "All five (I, II, III, IV, and V)",
            "Exactly three (I, II, and III)",
            "Exactly two (I and II)"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Statement I is CORRECT: In heterosporous pteridophytes like *Selaginella* and *Salvinia*, megaspores germinate into female gametophytes that are retained on the parent sporophyte. The zygote develops into a young embryo within the female gametophyte, which is recognized as an evolutionary precursor to the seed habit.\n2. Statement II is CORRECT: In homosporous ferns like *Dryopteris*, meiosis produces identical spores that germinate into a heart-shaped, multicellular, free-living, monoecious gametophyte called a prothallus, which lacks true vascular tissue and requires moist environments.\n3. Statement III is CORRECT: Zooidogamy (motile flagellated antherozoids swimming through an external water film to reach the neck of the archegonium) makes water mandatory for fertilization, limiting pteridophytes to damp, shady habitats.\n4. Statement IV is CORRECT: *Equisetum* stems have prominent ridges and furrows with silica deposition in the epidermis (providing a rough abrasive texture), hollow internodes, and terminal strobili bearing peltate sporangiophores.\n5. Statement V is INCORRECT: Pteridophytes are vascular cryptogams whose xylem consists predominantly of tracheids (true xylem vessels are absent, except in rare exceptions like certain *Selaginella* species), and their phloem contains sieve cells but lacks companion cells (having albuminous cells instead).\nHence, exactly four statements (I, II, III, IV) are correct.",
        originalityAudit: {
            problemStructure: "Multi-statement comparative morphology and evolutionary anatomy across homosporous and heterosporous pteridophytes.",
            solutionMethodSignature: "Anatomical vascular histology and reproductive biology verification against phylogenetic milestones.",
            conceptCombination: "Pteridophytes, heterospory, seed habit precursors, prothallus, Equisetum strobili, vascular cryptogam histology.",
            noveltyRationale: "Tests critical distinction between primitive tracheary/sieve elements in cryptogams versus specialized angiosperm vessels/companion cells."
        }
    },

    // --- 4.2 NEET (Botany - Plant Physiology: Respiration) ---
    {
        subject: 'Botany',
        chapter: 'Plant Physiology',
        subTopic: 'Respiration',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Regarding mitochondrial electron transport, oxidative phosphorylation, and cellular respiration in plants, which of the following statements is INCORRECT?",
        options: [
            "Complex II (succinate dehydrogenase) is the only citric acid cycle enzyme embedded directly within the inner mitochondrial membrane, and its electron transfer does not pump protons across into the intermembrane space.",
            "Cytochrome $c$ is a mobile peripheral membrane protein attached to the inner surface of the outer mitochondrial membrane facing the intermembrane space, transferring electrons between Complex I and Complex III.",
            "Complex IV (cytochrome $c$ oxidase) contains two heme centers (cytochromes $a$ and $a_3$) and two copper centers, catalyzing the final transfer of electrons to molecular oxygen to form water.",
            "During the complete aerobic oxidation of tripalmitin (a triglyceride fatty acid), more oxygen molecules are consumed than carbon dioxide evolved, resulting in a Respiratory Quotient (RQ) of approximately $0.7$."
        ],
        correctAnswer: 1,
        correctOption: 'b',
        explanation: "1. Statement A is correct: Succinate dehydrogenase is embedded in the inner mitochondrial membrane facing the matrix; it oxidizes succinate to fumarate while reducing FAD to $\\text{FADH}_2$. Electrons pass through Fe-S clusters to ubiquinone without pumping protons across the membrane.\n2. Statement B is INCORRECT: Cytochrome $c$ is a small, water-soluble, heme-containing protein located on the OUTER surface of the INNER mitochondrial membrane (NOT the outer membrane), and it acts as an electron shuttle between Complex III (cytochrome $bc_1$ complex) and Complex IV (cytochrome $c$ oxidase), NOT between Complex I and Complex III (ubiquinone shuttles electrons from Complexes I and II to Complex III).\n3. Statement C is correct: Complex IV contains cytochromes $a$ and $a_3$ and copper centers $\\text{Cu}_A$ and $\\text{Cu}_B$, which coordinate the 4-electron reduction of $\\text{O}_2$ to $2\\text{ H}_2\\text{O}$ while pumping $2\\text{ H}^+$ per electron pair.\n4. Statement D is correct: The oxidation of tripalmitin is represented by:\n$$2\\text{ C}_{51}\\text{H}_{98}\\text{O}_6 + 145\\text{ O}_2 \\to 102\\text{ CO}_2 + 98\\text{ H}_2\\text{O}$$\n$$\\text{RQ} = \\frac{\\text{Volume of } \\text{CO}_2\\text{ evolved}}{\\text{Volume of } \\text{O}_2\\text{ consumed}} = \\frac{102}{145} \\approx 0.70$$",
        originalityAudit: {
            problemStructure: "Mitochondrial membrane topology, electron shuttle localization, and stoichiometric respiratory quotient evaluation.",
            solutionMethodSignature: "Topological localization of respiratory chain complexes and lipid catabolism stoichiometry.",
            conceptCombination: "Cellular respiration, electron transport system, Cytochrome c, Complex II, Complex IV, Respiratory Quotient.",
            noveltyRationale: "Pinpoints exact topological localization of Cytochrome $c$ on the outer surface of the inner membrane versus mistaken outer-membrane attributions."
        }
    },

    // =========================================================================
    // 5. ZOOLOGY
    // =========================================================================
    // --- 5.1 NEET (Zoology - Animal Kingdom: Basis of animal classification) ---
    {
        subject: 'Zoology',
        chapter: 'Animal Kingdom',
        subTopic: 'Basis of animal classification (levels of organization, symmetry, germ layers, coelom)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "An animal species demonstrates the following developmental, anatomical, and embryological characteristics:\n1. Triploblastic organization with organ-system level of body construction.\n2. Enterocoelous true coelom, where the body cavity originates as outpouchings of the embryonic archenteron.\n3. Deuterostome embryogenesis, in which the embryonic blastopore develops into the anus and the mouth forms secondarily.\n4. Free-swimming larval stage exhibiting bilateral symmetry, which transforms into secondary pentamerous radial symmetry in the adult.\nWhich of the following organisms exhibits this exact constellation of features?",
        options: [
            "*Asterias* (Sea star)",
            "*Ascaris lumbricoides* (Roundworm)",
            "*Pila globosa* (Apple snail)",
            "*Hirudinaria granulosa* (Cattle leech)"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. *Asterias* (Phylum Echinodermata) exhibits:\n- Triploblastic organization with organ-system level of construction.\n- Enterocoely: The coelom forms by outpocketing of the embryonic gut (archenteron).\n- Deuterostome lineage: The blastopore becomes the anus, with radial and indeterminate cleavage.\n- Symmetry transition: Echinoderm larvae (such as bipinnaria or brachiolaria) are strictly bilaterally symmetrical, but undergo radical metamorphosis into adults possessing secondary pentamerous radial symmetry.\n2. Contrasting the other options:\n- *Ascaris lumbricoides* (Phylum Aschelminthes): Triploblastic and bilaterally symmetrical, but PSEUDOCOELOMATE and protostome.\n- *Pila globosa* (Phylum Mollusca): Triploblastic, SCHIZOCOELOMATE, and protostome with bilateral symmetry modified by torsion.\n- *Hirudinaria granulosa* (Phylum Annelida): Triploblastic, metameric SCHIZOCOELOMATE, and protostome with persistent bilateral symmetry.\nHence, *Asterias* is the only matching organism.",
        originalityAudit: {
            problemStructure: "Four-point developmental and anatomical screening across animal phyla distinguishing coelomogenesis and blastopore fates.",
            solutionMethodSignature: "Embryological lineage analysis (deuterostome vs protostome, enterocoely vs schizocoely) and ontogenetic symmetry shift.",
            conceptCombination: "Basis of classification, enterocoely, deuterostomes, bilateral larva vs pentamerous adult, Echinodermata.",
            noveltyRationale: "Demands comprehensive synthesis of coelom ontogeny, blastopore fate, and secondary symmetry metamorphosis in Asteroidea."
        }
    },

    // --- 5.2 NEET (Zoology - Human Physiology: Breathing & Exchange of Gases) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Breathing & Exchange of Gases',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Consider the physiological mechanisms of respiratory gas transport, carbon dioxide dynamics, and pulmonary capacities in humans:\nI. Approximately $70\\%$ of carbon dioxide is transported in plasma as bicarbonate ions ($\\text{HCO}_3^-$), catalyzed inside erythrocytes by high concentrations of the zinc-containing enzyme carbonic anhydrase.\nII. To maintain electrochemical neutrality when $\\text{HCO}_3^-$ diffuses out of erythrocytes into systemic venous plasma, chloride ions ($\\text{Cl}^-$) diffuse from plasma into erythrocytes, a phenomenon known as the chloride shift (Hamburger phenomenon).\nIII. Oxyhemoglobin ($\\text{HbO}_2$) is a weaker acid than deoxyhemoglobin, causing hemoglobin to bind more protons and release carbon dioxide at systemic tissue capillaries.\nIV. Approximately $20\\text{--}25\\%$ of carbon dioxide is transported bound to free amino groups of hemoglobin globin chains as carbamino-hemoglobin ($\\text{Hb}\\cdot\\text{CO}_2$), and approximately $7\\%$ remains physically dissolved in plasma.\nV. Vital Capacity (VC) is the maximum volume of air a person can exhale after a maximal inspiration, represented as $\\text{VC} = \\text{ERV} + \\text{TV} + \\text{IRV}$, and excludes the Residual Volume (RV).\nHow many of the above statements (I–V) are CORRECT?",
        options: [
            "Exactly four (I, II, IV, and V)",
            "All five (I, II, III, IV, and V)",
            "Exactly three (I, II, and IV)",
            "Exactly two (I and II)"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Statement I is CORRECT: About $70\\%$ of $\\text{CO}_2$ is transported as $\\text{HCO}_3^-$. Carbonic anhydrase (a zinc metalloenzyme present in very high concentration in RBCs and minute quantities in plasma) accelerates $\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$.\n2. Statement II is CORRECT: As $\\text{HCO}_3^-$ ions accumulate inside RBCs at systemic tissues, they diffuse down their concentration gradient into plasma via the AE1/Band 3 anion exchanger. In exchange, $\\text{Cl}^-$ enters the erythrocyte to maintain electroneutrality (Chloride shift / Hamburger phenomenon).\n3. Statement III is INCORRECT: Oxyhemoglobin is a STRONGER acid than deoxyhemoglobin (Haldane effect). At pulmonary capillaries, oxygenation of hemoglobin causes it to release protons ($\\text{H}^+$). These protons combine with incoming $\\text{HCO}_3^-$ to form $\\text{H}_2\\text{CO}_3$, which rapidly dissociates into $\\text{H}_2\\text{O}$ and $\\text{CO}_2$ for alveolar exhalation. At systemic tissues, deoxyhemoglobin is a weaker acid, enabling it to buffer $\\text{H}^+$ and promote $\\text{CO}_2$ loading.\n4. Statement IV is CORRECT: About $20\\text{--}25\\%$ of $\\text{CO}_2$ binds directly to globin amino terminals to form carbamino-hemoglobin, and $\\sim 7\\%$ dissolves in plasma.\n5. Statement V is CORRECT: Vital Capacity (VC) is the maximum volume of air exhaled after maximal inspiratory effort: $\\text{VC} = \\text{IRV} + \\text{TV} + \\text{ERV} \\approx 3500\\text{--}4500\\text{ mL}$. It does not include the Residual Volume (RV $\\approx 1100\\text{--}1200\\text{ mL}$).\nTherefore, exactly four statements (I, II, IV, V) are correct.",
        originalityAudit: {
            problemStructure: "Comprehensive evaluation of acid-base respiratory biochemistry, Hamburger shift, Haldane acid dissociation, and spirometric capacities.",
            solutionMethodSignature: "Physicochemical analysis of erythrocyte anion exchange and hemoglobin allosteric proton affinity.",
            conceptCombination: "Breathing and exchange of gases, chloride shift, carbonic anhydrase, Haldane effect, carbamino-hemoglobin, vital capacity.",
            noveltyRationale: "Exposes common misconception regarding hemoglobin acid strength: oxyhemoglobin is a stronger acid that sheds protons to release CO2 in the lungs."
        }
    }
];

async function runBatch14() {
    console.log('=== RUNNING PRODUCTION BATCH 14 (10 QUESTIONS) ===\n');
    const result = await insertBatchWithAudit(batch14Questions, 'PRODUCTION_BATCH_14');
    console.log('\nBatch 14 Execution Results:', JSON.stringify(result, null, 2));
}

runBatch14().catch(err => {
    console.error('Batch 14 Execution Error:', err);
    process.exit(1);
});
