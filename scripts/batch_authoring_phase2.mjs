import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';
import fs from 'fs';

/**
 * PRODUCTION BATCH 2: Core Physics, Physical Chemistry, JEE Mathematics & NEET Cell/Plant Biology
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch2Questions = [
    // =========================================================================
    // 1. PHYSICS — WORK, ENERGY, AND POWER
    // =========================================================================
    // --- 1.1 NEET (Physics - Work, Energy, and Power: Work-energy theorem) ---
    {
        subject: 'Physics',
        chapter: 'Work, Energy, and Power',
        subTopic: 'Work-energy theorem',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A block of mass $m = 2\\text{ kg}$ is released from rest at the top of a rough spherical dome of radius $R = 2.5\\text{ m}$. As the block slides down the dome surface, friction dissipates $15\\text{ J}$ of thermal energy before the block loses contact with the dome. At what height $h$ above the center of the sphere does the block leave the surface (take $g = 10\\text{ m/s}^2$)?",
        options: [
            "$1.47\\text{ m}$",
            "$1.67\\text{ m}$",
            "$1.25\\text{ m}$",
            "$1.85\\text{ m}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "Let $\\theta$ be the angle from the top of the sphere when contact is lost. Height from center is $h = R\\cos\\theta$.\nAt the detachment point, normal force $N = 0$:\n$$mg\\cos\\theta - N = \\frac{mv^2}{R} \\implies mg\\cos\\theta = \\frac{mv^2}{R} \\implies v^2 = g R\\cos\\theta = gh$$\nBy the Work-Energy Theorem from the top (height $R$) to detachment (height $h$):\n$$W_{gravity} + W_{friction} = \\Delta K$$\n$$mg(R - h) - E_{diss} = \\frac{1}{2}mv^2 - 0$$\nSubstitute $v^2 = gh$:\n$$mgR - mgh - 15 = \\frac{1}{2}m(gh)$$\n$$mgR - 15 = \\frac{3}{2}mgh$$\n$$h = \\frac{mgR - 15}{\\frac{3}{2}mg} = \\frac{2(mgR - 15)}{3mg}$$\nGiven $m = 2\\text{ kg}, g = 10\\text{ m/s}^2, R = 2.5\\text{ m}$:\n$$mg = 20\\text{ N}, \\quad mgR = 20 \\times 2.5 = 50\\text{ J}$$\n$$h = \\frac{2(50 - 15)}{3 \\times 20} = \\frac{2(35)}{60} = \\frac{70}{60} = \\frac{7}{6} \\approx 1.17\\text{ m}$$\nWait, let's recalculate with exact clean numbers: if $E_{diss} = 5\\text{ J}$:\n$h = \\frac{2(50 - 5)}{60} = \\frac{90}{60} = 1.50\\text{ m}$! That gives an exact clean answer of $1.50\\text{ m}$!",
        originalityAudit: {
            problemStructure: "Radial normal detachment threshold coupled with non-conservative friction dissipation.",
            solutionMethodSignature: "Work-energy theorem with boundary normal force condition $N = 0$.",
            conceptCombination: "Circular detachment, work-energy theorem, friction work dissipation.",
            noveltyRationale: "Introduces non-zero thermal dissipation into the classic frictionless spherical dome detachment problem."
        }
    }
];

// Clean numbers for 1.1:
batch2Questions[0].question = "A particle of mass $m = 2\\text{ kg}$ is released from rest at the apex of a rough hemispherical surface of radius $R = 2.5\\text{ m}$. Due to friction, $5.0\\text{ J}$ of mechanical energy is dissipated as heat as it slides down before it flies off the surface. At what vertical height $h$ above the sphere center does the particle detach from the dome (take $g = 10\\text{ m/s}^2$)?";
batch2Questions[0].options = ["$1.50\\text{ m}$", "$1.67\\text{ m}$", "$1.25\\text{ m}$", "$1.75\\text{ m}$"];
batch2Questions[0].correctAnswer = 0;
batch2Questions[0].correctOption = 'a';
batch2Questions[0].explanation = "At detachment, normal force $N = 0$. Hence, radial centripetal condition gives:\n$$mg\\cos\\theta = \\frac{mv^2}{R} \\implies v^2 = gR\\cos\\theta = gh$$\nApplying the Work-Energy Theorem from apex ($h_0 = R$) to detachment ($h$):\n$$W_{gravity} + W_{friction} = \\Delta K$$\n$$mg(R - h) - W_{loss} = \\frac{1}{2}mv^2 = \\frac{1}{2}mgh$$\n$$mgR - W_{loss} = \\frac{3}{2}mgh \\implies h = \\frac{mgR - W_{loss}}{\\frac{3}{2}mg} = \\frac{2(mgR - W_{loss})}{3mg}$$\nSubstituting $m = 2\\text{ kg}, g = 10\\text{ m/s}^2, R = 2.5\\text{ m}, W_{loss} = 5.0\\text{ J}$:\n$$mgR = 20 \\times 2.5 = 50\\text{ J}$$\n$$h = \\frac{2(50 - 5)}{3(20)} = \\frac{90}{60} = 1.50\\text{ m}$$";

// --- 1.2 JEE Main (Physics - Work, Energy, and Power: Conservation of mechanical energy) ---
batch2Questions.push({
    subject: 'Physics',
    chapter: 'Work, Energy, and Power',
    subTopic: 'Conservation of mechanical energy',
    exam: 'JEE Main',
    difficulty: 'Difficult',
    question: "A small block of mass $m$ is attached to an ideal vertical spring of force constant $k$ and held at rest where the spring is unstretched. The block is suddenly released. While descending, what is the maximum speed $v_{max}$ attained by the block before it momentarily stops at its lowest position?",
    options: [
        "$g\\sqrt{\\frac{m}{k}}$",
        "$g\\sqrt{\\frac{2m}{k}}$",
        "$\\frac{g}{2}\\sqrt{\\frac{m}{k}}$",
        "$2g\\sqrt{\\frac{m}{k}}$"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "Maximum speed occurs where the net vertical force is zero (the equilibrium position):\n$$F_{net} = mg - kx_{eq} = 0 \\implies x_{eq} = \\frac{mg}{k}$$\nBy conservation of mechanical energy from initial release ($x = 0, v = 0$) to equilibrium position ($x = x_{eq}$):\n$$E_{initial} = 0$$\n$$E_{final} = -mg x_{eq} + \\frac{1}{2}k x_{eq}^2 + \\frac{1}{2}m v_{max}^2 = 0$$\n$$\\frac{1}{2}m v_{max}^2 = mg x_{eq} - \\frac{1}{2}k x_{eq}^2 = mg\\left(\\frac{mg}{k}\\right) - \\frac{1}{2}k\\left(\\frac{mg}{k}\\right)^2 = \\frac{m^2 g^2}{k} - \\frac{1}{2}\\frac{m^2 g^2}{k} = \\frac{m^2 g^2}{2k}$$\nMultiplying by 2 and dividing by $m$:\n$$v_{max}^2 = \\frac{m g^2}{k} \\implies v_{max} = g\\sqrt{\\frac{m}{k}}$$",
    originalityAudit: {
        problemStructure: "Phase-space kinetic maximum in conservative gravitational-elastic potential well.",
        solutionMethodSignature: "Zero net force equilibrium identification followed by energy balance formulation.",
        conceptCombination: "Spring-mass vertical oscillation, conservation of mechanical energy, equilibrium extremum.",
        noveltyRationale: "Targets velocity extremum at intermediate dynamic equilibrium rather than boundary turnaround points."
    }
});

// --- 1.3 JEE Main (Physics - Rotational Motion: Center of mass) ---
batch2Questions.push({
    subject: 'Physics',
    chapter: 'Rotational Motion',
    subTopic: 'Center of mass',
    exam: 'JEE Main',
    difficulty: 'Difficult',
    question: "A uniform thin wire of length $L$ and total mass $M$ is bent into the shape of a semicircle of radius $R = \\frac{L}{\\pi}$. What is the distance of the center of mass of this semicircular wire from its center of curvature?",
    options: [
        "$\\frac{2L}{\\pi^2}$",
        "$\\frac{L}{\\pi^2}$",
        "$\\frac{4L}{3\\pi^2}$",
        "$\\frac{2L}{\\pi}$"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "For a uniform semicircular wire of radius $R$, by integration along the arc $d\\theta$:\n$$y_{cm} = \\frac{\\int_{-\\pi/2}^{\\pi/2} (R\\cos\\theta) (\\lambda R\\,d\\theta)}{\\int \\lambda R\\,d\\theta} = \\frac{R^2 [\\sin\\theta]_{-\\pi/2}^{\\pi/2}}{\\pi R} = \\frac{2R}{\\pi}$$\nSince the wire has total length $L = \\pi R$, we have $R = \\frac{L}{\\pi}$.\nSubstituting $R$ in terms of $L$:\n$$y_{cm} = \\frac{2}{\\pi} \\left(\\frac{L}{\\pi}\\right) = \\frac{2L}{\\pi^2}$$",
    originalityAudit: {
        problemStructure: "Curvilinear wire integral center-of-mass expressed in terms of invariant arc length parameter.",
        solutionMethodSignature: "Trigonometric integration around continuous semicircular wire boundary.",
        conceptCombination: "Continuous mass distribution, center of mass integration, curvilinear geometry.",
        noveltyRationale: "Expresses location in terms of raw unbent wire length $L$ rather than conventional radius $R$."
    }
});

// --- 1.4 NEET (Physics - Rotational Motion: Torque) ---
batch2Questions.push({
    subject: 'Physics',
    chapter: 'Rotational Motion',
    subTopic: 'Torque',
    exam: 'NEET',
    difficulty: 'Difficult',
    question: "A uniform ladder of mass $M = 20\\text{ kg}$ and length $L = 5\\text{ m}$ leans against a smooth vertical wall at an angle of $53^\\circ$ with the horizontal ground. If the ground is rough, what is the minimum coefficient of static friction $\\mu_s$ required to prevent the ladder from slipping (take $\\cos 53^\\circ = 0.6, \\sin 53^\\circ = 0.8$)?",
    options: [
        "$\\frac{3}{8} = 0.375$",
        "$\\frac{1}{2} = 0.500$",
        "$\\frac{3}{4} = 0.750$",
        "$\\frac{1}{4} = 0.250$"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "Forces on ladder:\n1. Vertical normal force from floor: $N_f = Mg = 20(10) = 200\\text{ N}$\n2. Horizontal static friction from floor: $f_s$\n3. Normal force from smooth vertical wall: $N_w$ (horizontal, to the right on ladder)\nHorizontal equilibrium: $f_s = N_w$\nVertical equilibrium: $N_f = Mg$\nTorque equilibrium about the contact point on the ground:\n$$\\tau = N_w (L\\sin 53^\\circ) - Mg \\left(\\frac{L}{2}\\cos 53^\\circ\\right) = 0$$\n$$N_w (L \\times 0.8) = Mg \\left(\\frac{L}{2} \\times 0.6\\right)$$\n$$0.8 N_w = 0.3 Mg \\implies N_w = \\frac{0.3}{0.8} Mg = \\frac{3}{8} Mg$$\nSince $f_s = N_w = \\frac{3}{8} Mg$, and $f_s \\le \\mu_s N_f = \\mu_s Mg$:\n$$\\frac{3}{8} Mg \\le \\mu_s Mg \\implies \\mu_s \\ge \\frac{3}{8} = 0.375$$",
    originalityAudit: {
        problemStructure: "Bilateral contact statics with smooth wall and rough floor under non-symmetric angle inclination.",
        solutionMethodSignature: "Rotational equilibrium about floor contact combined with translational boundary friction.",
        conceptCombination: "Rotational equilibrium, static friction threshold, torque balance.",
        noveltyRationale: "Classic stability problem evaluated with 3-4-5 Pythagorean angle parameters for precise fraction determination."
    }
});

// =========================================================================
// 2. CHEMISTRY — EQUILIBRIUM & CHEMICAL THERMODYNAMICS
// =========================================================================

// --- 2.1 NEET (Chemistry - Equilibrium: Chemical equilibrium and equilibrium constant) ---
batch2Questions.push({
    subject: 'Chemistry',
    chapter: 'Equilibrium',
    subTopic: 'Chemical equilibrium and equilibrium constant',
    exam: 'NEET',
    difficulty: 'Difficult',
    question: "For the gas-phase reaction $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$, the degree of dissociation at total pressure $P$ is $\\alpha$. If $\\alpha \\ll 1$, which of the following expressions correctly relates $\\alpha$ to the equilibrium constant $K_p$ and total pressure $P$?",
    options: [
        "$\\alpha \\approx \\sqrt{\\frac{K_p}{P}}$",
        "$\\alpha \\approx \\frac{K_p}{P}$",
        "$\\alpha \\approx \\sqrt{\\frac{P}{K_p}}$",
        "$\\alpha \\approx \\frac{K_p}{\\sqrt{P}}$"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "Let initial moles of $PCl_5$ be $1$.\nAt equilibrium:\nMoles of $PCl_5 = 1 - \\alpha$\nMoles of $PCl_3 = \\alpha$\nMoles of $Cl_2 = \\alpha$\nTotal moles $= (1 - \\alpha) + \\alpha + \\alpha = 1 + \\alpha$\nPartial pressures:\n$$p_{PCl_5} = \\frac{1-\\alpha}{1+\\alpha}P, \\quad p_{PCl_3} = \\frac{\\alpha}{1+\\alpha}P, \\quad p_{Cl_2} = \\frac{\\alpha}{1+\\alpha}P$$\nEquilibrium constant $K_p$:\n$$K_p = \\frac{p_{PCl_3} p_{Cl_2}}{p_{PCl_5}} = \\frac{\\left(\\frac{\\alpha}{1+\\alpha}P\\right)^2}{\\frac{1-\\alpha}{1+\\alpha}P} = \\frac{\\alpha^2 P}{(1+\\alpha)(1-\\alpha)} = \\frac{\\alpha^2 P}{1 - \\alpha^2}$$\nWhen $\\alpha \\ll 1$, $1 - \\alpha^2 \\approx 1$:\n$$K_p \\approx \\alpha^2 P \\implies \\alpha^2 \\approx \\frac{K_p}{P} \\implies \\alpha \\approx \\sqrt{\\frac{K_p}{P}}$$",
    originalityAudit: {
        problemStructure: "Homogeneous gaseous dissociation equilibrium formulated in limiting small-dissociation asymptotic regime.",
        solutionMethodSignature: "Partial pressure substitution followed by algebraic binomial approximation $1 - \\alpha^2 \\approx 1$.",
        conceptCombination: "Dalton's partial pressures, equilibrium constant $K_p$, asymptotic approximation.",
        noveltyRationale: "Tests analytic dependency of dissociation fraction on pressure under valid thermodynamic approximation."
    }
});

// --- 2.2 JEE Main (Chemistry - Equilibrium: Ionic equilibrium and pH) ---
batch2Questions.push({
    subject: 'Chemistry',
    chapter: 'Equilibrium',
    subTopic: 'Ionic equilibrium and pH',
    exam: 'JEE Main',
    difficulty: 'Difficult',
    question: "The solubility product of a sparingly soluble salt $MX_2$ is $K_{sp} = 3.2 \\times 10^{-11}\\text{ mol}^3\\text{ L}^{-3}$ at $25^\\circ\\text{C}$. What is the molar solubility of $MX_2$ in a $0.10\\text{ M}$ solution of soluble salt $NaX$?",
    options: [
        "$3.2 \\times 10^{-9}\\text{ M}$",
        "$2.0 \\times 10^{-4}\\text{ M}$",
        "$1.8 \\times 10^{-5}\\text{ M}$",
        "$3.2 \\times 10^{-10}\\text{ M}$"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "Dissociation equilibrium of $MX_2$:\n$$MX_2(s) \\rightleftharpoons M^{2+}(aq) + 2X^-(aq)$$\nLet the molar solubility in the presence of $0.10\\text{ M } NaX$ be $s$.\nConcentrations at equilibrium:\n$$[M^{2+}] = s$$\n$$[X^-] = 2s + 0.10 \\approx 0.10\\text{ M} \\quad (\\text{since } s \\ll 0.10)$$\nSubstituting into the solubility product expression:\n$$K_{sp} = [M^{2+}][X^-]^2 = s(0.10)^2 = s(0.01) = 10^{-2} s$$\n$$3.2 \\times 10^{-11} = 10^{-2} s \\implies s = \\frac{3.2 \\times 10^{-11}}{10^{-2}} = 3.2 \\times 10^{-9}\\text{ M}$$\nChecking the assumption: $2s = 6.4 \\times 10^{-9} \\ll 0.10$, completely valid.",
    originalityAudit: {
        problemStructure: "Common ion effect suppression on asymmetric $AB_2$ salt stoichiometry.",
        solutionMethodSignature: "Quadratic common-ion approximation in heterogeneous solubility equilibrium.",
        conceptCombination: "Solubility product $K_{sp}$, common ion effect, asymmetric ionic stoichiometry.",
        noveltyRationale: "Highlights dramatic suppression of solubility from $2 \\times 10^{-4}\\text{ M}$ (pure water) down to $3.2 \\times 10^{-9}\\text{ M}$ in $0.1\\text{ M}$ common ion."
    }
});

// --- 2.3 JEE Main (Chemistry - Chemical Thermodynamics: Gibbs free energy (ΔG)) ---
batch2Questions.push({
    subject: 'Chemistry',
    chapter: 'Chemical Thermodynamics',
    subTopic: 'Gibbs free energy (ΔG)',
    exam: 'JEE Main',
    difficulty: 'Difficult',
    question: "For a certain chemical reaction, $\\Delta H^\circ = -40.0\\text{ kJ mol}^{-1}$ and $\\Delta S^\circ = -80.0\\text{ J K}^{-1}\\text{ mol}^{-1}$. Assuming $\\Delta H^\circ$ and $\\Delta S^\circ$ are temperature-independent, at what temperature range is this reaction thermodynamically spontaneous under standard conditions?",
    options: [
        "$T < 500\\text{ K}$",
        "$T > 500\\text{ K}$",
        "$T < 250\\text{ K}$",
        "Spontaneous at all temperatures"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "For spontaneity at constant temperature and pressure, $\\Delta G^\circ < 0$:\n$$\\Delta G^\circ = \\Delta H^\circ - T\\Delta S^\circ < 0$$\n$$\\Delta H^\circ < T\\Delta S^\circ$$\nGiven $\\Delta H^\circ = -40,000\\text{ J mol}^{-1}$ and $\\Delta S^\circ = -80.0\\text{ J K}^{-1}\\text{ mol}^{-1}$:\n$$-40000 < T(-80.0)$$\nDividing both sides by $-80.0$ (which reverses the inequality sign!):\n$$\\frac{-40000}{-80.0} > T \\implies 500\\text{ K} > T \\implies T < 500\\text{ K}$$\nThus, the reaction is enthalpy-driven and is spontaneous only at temperatures below $500\\text{ K}$.",
    originalityAudit: {
        problemStructure: "Inequality inversion in exothermic reaction with unfavorable negative entropy.",
        solutionMethodSignature: "Gibbs-Helmholtz spontaneity boundary evaluation with negative division inequality reversal.",
        conceptCombination: "Standard Gibbs energy, enthalpy-entropy compensation, thermal threshold of spontaneity.",
        noveltyRationale: "Tests proper handling of algebraic inequality direction when both thermodynamic parameters are negative."
    }
});

// =========================================================================
// 3. MATHEMATICS — JEE MAIN (Matrices & Determinants, Quadratic Equations)
// =========================================================================

// --- 3.1 JEE Main (Mathematics - Matrices & Determinants: Cramer's rule and system of linear equations) ---
batch2Questions.push({
    subject: 'Mathematics',
    chapter: 'Matrices & Determinants',
    subTopic: "Cramer's rule and system of linear equations",
    exam: 'JEE Main',
    difficulty: 'Difficult',
    question: "Consider the system of linear equations:\n$$\\begin{cases} x + y + z = 6 \\\\ x + 2y + 3z = 10 \\\\ x + 2y + \\lambda z = \\mu \\end{cases}$$\nThe system possesses infinitely many solutions if and only if:",
    options: [
        "$\\lambda = 3$ and $\\mu = 10$",
        "$\\lambda = 3$ and $\\mu \\neq 10$",
        "$\\lambda \\neq 3$ and $\\mu = 10$",
        "$\\lambda = 2$ and $\\mu = 8$"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "Subtract equation (2) from equation (3):\n$$(x + 2y + \\lambda z) - (x + 2y + 3z) = \\mu - 10$$\n$$(\\lambda - 3)z = \\mu - 10$$\nFor the system to have infinitely many solutions, the coefficient of $z$ and the right-hand side constant must simultaneously vanish:\n$$\\lambda - 3 = 0 \\implies \\lambda = 3$$\n$$\\mu - 10 = 0 \\implies \\mu = 10$$\nWhen $\\lambda = 3$ and $\\mu = 10$, the third equation becomes identical to the second equation ($x + 2y + 3z = 10$), resulting in two independent equations in three unknowns, which yields infinitely many solutions.",
    originalityAudit: {
        problemStructure: "Degeneracy rank analysis of $3 \\times 3$ linear system via row elimination.",
        solutionMethodSignature: "Row reduction revealing condition for linearly dependent augmented matrix.",
        conceptCombination: "System of linear equations, Cramer's rule, augmented matrix rank.",
        noveltyRationale: "Direct elimination demonstrates the underlying geometry of coincident planes without computing tedious $3 \\times 3$ determinants."
    }
});

// --- 3.2 JEE Main (Mathematics - Quadratic Equations: Nature of roots and discriminant) ---
batch2Questions.push({
    subject: 'Mathematics',
    chapter: 'Quadratic Equations',
    subTopic: 'Nature of roots and discriminant',
    exam: 'JEE Main',
    difficulty: 'Difficult',
    question: "If the roots of the quadratic equation $(a - b)x^2 + (b - c)x + (c - a) = 0$ are real and equal (where $a, b, c$ are distinct real numbers), then which of the following statements is necessarily true?",
    options: [
        "$a, b, c$ are in Arithmetic Progression (A.P.)",
        "$a, b, c$ are in Geometric Progression (G.P.)",
        "$a, b, c$ are in Harmonic Progression (H.P.)",
        "$a + b + c = 0$"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "Notice the sum of coefficients in $(a - b)x^2 + (b - c)x + (c - a) = 0$:\n$$(a - b) + (b - c) + (c - a) = 0$$\nWhenever the sum of coefficients is zero, $x = 1$ is always a root!\nSince the roots are equal, both roots must be equal to $1$ ($x_1 = x_2 = 1$).\nBy Vieta's formulas, the product of roots is:\n$$x_1 \\cdot x_2 = \\frac{c - a}{a - b}$$\n$$1 \\cdot 1 = \\frac{c - a}{a - b} \\implies a - b = c - a$$\n$$2a = b + c \\implies b + c = 2a$$\nWait, let's re-verify: $a - b = c - a \\implies 2a = b + c$. Thus $b, a, c$ are in A.P., meaning $2a = b + c$.\nIf the question is formulated as $(b - c)x^2 + (c - a)x + (a - b) = 0$, then product is $\\frac{a - b}{b - c} = 1 \\implies a - b = b - c \\implies 2b = a + c$, meaning $a, b, c$ are in A.P.! Let's format coefficients as $(b - c)x^2 + (c - a)x + (a - b) = 0$ so $a, b, c$ are in A.P. in standard alphabetical order!",
    originalityAudit: {
        problemStructure: "Cyclic coefficient polynomial root theorem combined with equal-root condition.",
        solutionMethodSignature: "Inspection of unit root $x = 1$ followed by Vieta product equality establishing progression.",
        conceptCombination: "Quadratic equations, Vieta's formulas, arithmetic progressions.",
        noveltyRationale: "Bypasses standard massive discriminant expansion $(b-c)^2 - 4(a-b)(c-a) = 0$ via coefficient symmetry."
    }
});
batch2Questions[8].question = "If the roots of the quadratic equation $(b - c)x^2 + (c - a)x + (a - b) = 0$ are real and equal (where $a, b, c$ are distinct real numbers), then which of the following statements is necessarily true?";
batch2Questions[8].options = [
    "$a, b, c$ are in Arithmetic Progression (A.P.)",
    "$a, b, c$ are in Geometric Progression (G.P.)",
    "$a, b, c$ are in Harmonic Progression (H.P.)",
    "$a + b + c = 0$"
];
batch2Questions[8].correctAnswer = 0;
batch2Questions[8].correctOption = 'a';
batch2Questions[8].explanation = "Notice the sum of coefficients:\n$$(b - c) + (c - a) + (a - b) = 0$$\nTherefore, $x = 1$ is an obvious root of the quadratic equation.\nSince the problem specifies that the roots are equal, both roots must be equal to $1$ ($x_1 = x_2 = 1$).\nBy Vieta's formula, the product of roots is:\n$$x_1 \\cdot x_2 = \\frac{a - b}{b - c}$$\n$$1 \\cdot 1 = \\frac{a - b}{b - c} \\implies b - c = a - b \\implies 2b = a + c$$\nThis is the defining condition for $a, b, c$ to be in Arithmetic Progression (A.P.).";

// =========================================================================
// 4. BIOLOGY — NEET (Cell Structure & Plant Physiology)
// =========================================================================

// --- 4.1 NEET (Biology - Cell Structure and Function: Cell membrane and transport) ---
batch2Questions.push({
    subject: 'Botany',
    chapter: 'Cell Structure and Function',
    subTopic: 'Cell membrane and transport',
    exam: 'NEET',
    difficulty: 'Difficult',
    question: "According to the Fluid Mosaic Model of Singer and Nicolson (1972), which of the following statements regarding the dynamic movement of lipid and protein components within the membrane bilayer is scientifically correct?",
    options: [
        "Lipids exhibit rapid lateral diffusion and flexional movement within their monolayer, but flip-flop transbilayer movement is extremely rare and energetically unfavorable without flippases",
        "Both proteins and lipids readily undergo spontaneous, rapid flip-flop transbilayer movement between inner and outer leaflets",
        "Proteins are completely anchored and exhibit zero lateral displacement within the viscous lipid bilayer",
        "Quasi-fluidity of the membrane is primarily conferred by saturated fatty acid chains forming rigid crystalline domains"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "In biological membranes, the hydrophobic interior creates a high thermodynamic barrier to translocating polar/charged headgroups across the hydrocarbon core. Consequently, unassisted flip-flop movement of phospholipids between leaflets occurs at negligible rates ($t_{1/2} \\sim$ days), requiring ATP-dependent translocases (flippases/floppases). In contrast, lateral diffusion within the plane of the leaflet is extremely rapid ($D \\sim 10^{-8}\\text{ cm}^2/\\text{s}$). Integral proteins diffuse laterally unless anchored to cytoskeletal networks, and fluidity is promoted by cis-unsaturated fatty acyl chains that prevent tight packing.",
    originalityAudit: {
        problemStructure: "Biophysical thermodynamic discrimination of 2D lateral vs 3D transbilayer membrane mobility.",
        solutionMethodSignature: "Hydrophobic core energy barrier analysis correlating molecular geometry with membrane fluidity.",
        conceptCombination: "Fluid mosaic model, lipid dynamics, membrane translocases.",
        noveltyRationale: "Tests physical understanding of directional diffusion restrictions in eukaryotic lipid bilayers."
    }
});

// --- 4.2 NEET (Biology - Plant Physiology: Light reaction and Calvin cycle) ---
batch2Questions.push({
    subject: 'Botany',
    chapter: 'Plant Physiology',
    subTopic: 'Light reaction and Calvin cycle',
    exam: 'NEET',
    difficulty: 'Difficult',
    question: "In the Calvin cycle ($C_3$ pathway), to synthesize one net molecule of hexose glucose ($C_6H_{12}O_6$), how many molecules of ATP and NADPH are consumed during the reduction and regeneration phases combined?",
    options: [
        "$18\\text{ ATP}$ and $12\\text{ NADPH}$",
        "$12\\text{ ATP}$ and $12\\text{ NADPH}$",
        "$30\\text{ ATP}$ and $12\\text{ NADPH}$",
        "$18\\text{ ATP}$ and $18\\text{ NADPH}$"
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: "For the fixation of one molecule of $CO_2$ in the $C_3$ pathway:\n- Reduction phase: $2\\text{ ATP}$ and $2\\text{ NADPH}$ per $CO_2$ fixed.\n- Regeneration phase of RuBP: $1\\text{ ATP}$ per $CO_2$ fixed.\nTotal energy cost per $CO_2$ molecule fixed $= 3\\text{ ATP}$ and $2\\text{ NADPH}$.\nSynthesis of one molecule of glucose requires the fixation of $6$ molecules of $CO_2$ (6 turns of the cycle):\n$$\\text{Total ATP required} = 6 \\times 3 = 18\\text{ ATP}$$\n$$\\text{Total NADPH required} = 6 \\times 2 = 12\\text{ NADPH}$$\n(Note: In $C_4$ plants, an additional $2\\text{ ATP}$ per $CO_2$ is needed to regenerate PEP, totaling $30\\text{ ATP}$ and $12\\text{ NADPH}$, which is option C).",
    originalityAudit: {
        problemStructure: "Stoichiometric energetic audit of photosynthetic carbon fixation cycle.",
        solutionMethodSignature: "Phase-wise biochemical bookkeeping per turn scaled to hexose synthesis.",
        conceptCombination: "Calvin-Benson cycle, phosphorylation stages, photophosphorylation stoichiometry.",
        noveltyRationale: "Differentiates exact reduction vs regeneration phase energetic inputs and contrasts $C_3$ vs $C_4$ costs."
    }
});

async function main() {
    console.log(`Starting execution of Production Batch 2: ${batch2Questions.length} questions...`);
    const results = await insertBatchWithAudit(batch2Questions, 'PRODUCTION_BATCH_2');
    
    fs.writeFileSync('scripts/production_batch_2_results.json', JSON.stringify(results, null, 2));
    console.log('\n✓ Saved batch 2 results to scripts/production_batch_2_results.json');
}

main().catch(err => {
    console.error('Batch 2 execution error:', err);
    process.exit(1);
});
