import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';
import fs from 'fs';

/**
 * PRODUCTION BATCH 3: Electrostatics, Current Electricity, Reaction Mechanisms, Carbonyls, Definite Integrals, Maxima-Minima, Molecular Genetics & Biotech
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch3Questions = [
    // =========================================================================
    // 1. PHYSICS — ELECTROSTATICS
    // =========================================================================
    // --- 1.1 NEET (Physics - Electrostatics: Electric field/flux) ---
    {
        subject: 'Physics',
        chapter: 'Electrostatics',
        subTopic: 'Electric field/flux',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A non-conducting solid sphere of radius $R$ possesses a spherically symmetric, non-uniform volume charge density given by $\\rho(r) = \\rho_0 \\left(1 - \\frac{r}{R}\\right)$ for $0 \\le r \\le R$, where $\\rho_0$ is a positive constant and $r$ is the radial distance from the center. What is the ratio of the electric field magnitude at $r = \\frac{R}{2}$ to the electric field magnitude at the surface $r = R$?",
        options: [
            "$\\frac{5}{4}$",
            "$\\frac{4}{5}$",
            "$\\frac{3}{8}$",
            "$\\frac{1}{2}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "By Gauss's Law, the electric field at radial distance $r$ inside the sphere is given by:\n$$E(r) = \\frac{q_{enc}(r)}{4\\pi \\varepsilon_0 r^2}$$\nCalculating the enclosed charge $q_{enc}(r)$:\n$$q_{enc}(r) = \\int_0^r \\rho(r') 4\\pi r'^2 dr' = 4\\pi \\rho_0 \\int_0^r \\left(r'^2 - \\frac{r'^3}{R}\\right) dr' = 4\\pi \\rho_0 \\left[ \\frac{r^3}{3} - \\frac{r^4}{4R} \\right]$$\nThus, the field as a function of $r$ is:\n$$E(r) = \\frac{\\rho_0}{\\varepsilon_0} \\left[ \\frac{r}{3} - \\frac{r^2}{4R} \\right]$$\nEvaluating at $r = \\frac{R}{2}$:\n$$E\\left(\\frac{R}{2}\\right) = \\frac{\\rho_0}{\\varepsilon_0} \\left[ \\frac{R}{6} - \\frac{R}{16} \\right] = \\frac{\\rho_0 R}{\\varepsilon_0} \\left( \\frac{8 - 3}{48} \\right) = \\frac{5\\rho_0 R}{48\\varepsilon_0}$$\nEvaluating at the surface $r = R$:\n$$E(R) = \\frac{\\rho_0}{\\varepsilon_0} \\left[ \\frac{R}{3} - \\frac{R}{4} \\right] = \\frac{\\rho_0 R}{12\\varepsilon_0} = \\frac{4\\rho_0 R}{48\\varepsilon_0}$$\nTaking the ratio:\n$$\\frac{E(R/2)}{E(R)} = \\frac{\\frac{5\\rho_0 R}{48\\varepsilon_0}}{\\frac{4\\rho_0 R}{48\\varepsilon_0}} = \\frac{5}{4}$$",
        originalityAudit: {
            problemStructure: "Radial Gauss's law integral with linear radially decreasing charge density.",
            solutionMethodSignature: "Differential spherical shell integration for $q_{enc}(r)$ and radial field ratio.",
            conceptCombination: "Non-uniform volume charge density, spherical Gauss's law, electrostatic field ratio.",
            noveltyRationale: "Tests non-uniform charge integration and demonstrates that electric field peaks strictly inside the sphere rather than on the surface."
        }
    },

    // --- 1.2 JEE Main (Physics - Electrostatics: Combination of capacitors and energy stored) ---
    {
        subject: 'Physics',
        chapter: 'Electrostatics',
        subTopic: 'Combination of capacitors and energy stored',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A parallel-plate capacitor of capacitance $C_0$ and plate separation $d$ is charged to a potential difference $V_0$ by an external battery, and then disconnected from the source. Two slabs of dielectric constants $K_1 = 2$ and $K_2 = 4$, each of thickness $\\frac{d}{2}$ and cross-sectional area equal to the plate area, are inserted slowly into the gap so that they completely fill the capacitor in series. What is the work done by the external agent during this process?",
        options: [
            "$-\\frac{5}{16} C_0 V_0^2$",
            "$-\\frac{3}{8} C_0 V_0^2$",
            "$+\\frac{5}{16} C_0 V_0^2$",
            "$-\\frac{1}{4} C_0 V_0^2$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "Since the battery is disconnected before inserting the slabs, the free charge $Q$ on the plates is conserved:\n$$Q = C_0 V_0$$\nThe initial electrostatic potential energy is:\n$$U_i = \\frac{Q^2}{2C_0} = \\frac{1}{2} C_0 V_0^2$$\nWhen the two dielectric slabs of thickness $d/2$ are inserted, they form two capacitors in series:\n$$C_1 = \\frac{K_1 \\varepsilon_0 A}{d/2} = \\frac{2 \\varepsilon_0 A}{d/2} = 4C_0$$\n$$C_2 = \\frac{K_2 \\varepsilon_0 A}{d/2} = \\frac{4 \\varepsilon_0 A}{d/2} = 8C_0$$\nThe equivalent capacitance $C_f$ is:\n$$\\frac{1}{C_f} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{4C_0} + \\frac{1}{8C_0} = \\frac{3}{8C_0} \\implies C_f = \\frac{8}{3} C_0$$\nThe final electrostatic potential energy is:\n$$U_f = \\frac{Q^2}{2C_f} = \\frac{Q^2}{2 \\left(\\frac{8}{3} C_0\\right)} = \\frac{3}{8} \\left( \\frac{Q^2}{2C_0} \\right) = \\frac{3}{8} U_i = \\frac{3}{16} C_0 V_0^2$$\nBecause the process is performed slowly without change in kinetic energy, the work done by the external agent equals the change in electrostatic energy:\n$$W_{ext} = \\Delta U = U_f - U_i = \\frac{3}{16} C_0 V_0^2 - \\frac{1}{2} C_0 V_0^2 = -\\frac{5}{16} C_0 V_0^2$$",
        originalityAudit: {
            problemStructure: "Charge-conserved two-slab series dielectric insertion with mechanical work calculation.",
            solutionMethodSignature: "Series capacitance equivalent under charge conservation and work-energy theorem.",
            conceptCombination: "Capacitance with composite dielectrics, charge conservation, external agent work.",
            noveltyRationale: "Contrasts constant charge vs constant voltage behavior while integrating multi-layer asymmetric dielectrics."
        }
    },

    // =========================================================================
    // 2. PHYSICS — CURRENT ELECTRICITY
    // =========================================================================
    // --- 2.1 NEET (Physics - Current Electricity: Wheatstone bridge) ---
    {
        subject: 'Physics',
        chapter: 'Current Electricity',
        subTopic: 'Wheatstone bridge',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In a bridge circuit, four resistors are arranged in arms $AB, BC, AD,$ and $CD$ as $R_{AB} = 100\\,\\Omega$, $R_{BC} = 100\\,\\Omega$, $R_{AD} = 100\\,\\Omega$, and $R_{CD} = 150\\,\\Omega$. A galvanometer of internal resistance $R_G = 40\\,\\Omega$ is connected across terminals $B$ and $D$. An ideal battery of electromotive force $E = 6.0\\text{ V}$ is connected across terminals $A$ and $C$. What is the electric current flowing through the galvanometer?",
        options: [
            "$4.0\\text{ mA}$",
            "$2.5\\text{ mA}$",
            "$6.0\\text{ mA}$",
            "$1.2\\text{ mA}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "We determine the current through branch $BD$ using Thévenin's theorem across terminals $B$ and $D$.\n1. Open-circuit voltage $V_{Th} = V_B - V_D$ (with galvanometer disconnected):\nBranch $ABC$ acts as a voltage divider:\n$$V_B = E \\cdot \\frac{R_{BC}}{R_{AB} + R_{BC}} = 6.0 \\cdot \\frac{100}{100 + 100} = 3.0\\text{ V}$$\nBranch $ADC$ acts as a voltage divider:\n$$V_D = E \\cdot \\frac{R_{CD}}{R_{AD} + R_{CD}} = 6.0 \\cdot \\frac{150}{100 + 150} = 6.0 \\cdot \\frac{3}{5} = 3.6\\text{ V}$$\nTherefore, the open-circuit potential difference is:\n$$V_{Th} = |V_B - V_D| = 3.6 - 3.0 = 0.6\\text{ V}$$\n2. Thévenin equivalent resistance $R_{Th}$ across $B$ and $D$ with ideal battery $E$ replaced by a short circuit:\n$$R_{Th} = (R_{AB} \\parallel R_{BC}) + (R_{AD} \\parallel R_{CD})$$\n$$(100 \\parallel 100) = 50\\,\\Omega$$\n$$(100 \\parallel 150) = \\frac{100 \\times 150}{100 + 150} = \\frac{15000}{250} = 60\\,\\Omega$$\n$$R_{Th} = 50 + 60 = 110\\,\\Omega$$\n3. Galvanometer current $I_G$ with galvanometer resistance $R_G = 40\\,\\Omega$:\n$$I_G = \\frac{V_{Th}}{R_{Th} + R_G} = \\frac{0.6\\text{ V}}{110\\,\\Omega + 40\\,\\Omega} = \\frac{0.6}{150\\,\\Omega} = 0.004\\text{ A} = 4.0\\text{ mA}$$",
        originalityAudit: {
            problemStructure: "Unbalanced Wheatstone bridge analysis with galvanometer current using Thévenin equivalent.",
            solutionMethodSignature: "Thévenin equivalent voltage divider and loop resistance formulation.",
            conceptCombination: "Unbalanced Wheatstone bridge, Thévenin theorem, galvanometer deflection current.",
            noveltyRationale: "Bypasses tedious 3-variable Kirchhoff loop equations by applying clean Thévenin network analysis."
        }
    },

    // =========================================================================
    // 3. CHEMISTRY — ORGANIC REACTION MECHANISM & CARBONYLS
    // =========================================================================
    // --- 3.1 JEE Main (Chemistry - Organic Reaction Mechanism: Nucleophilic substitution (SN1, SN2, SNi)) ---
    {
        subject: 'Chemistry',
        chapter: 'Organic Reaction Mechanism',
        subTopic: 'Nucleophilic substitution (SN1, SN2, SNi)',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Treatment of enantiomerically pure $(2R,3S)\\text{-3-bromo-2-butanol}$ with dilute aqueous $\\text{NaOH}$ undergoes base-promoted intramolecular cyclization to form an oxirane (epoxide) derivative. Which of the following statements correctly identifies the stereochemical configuration and optical property of the principal epoxide product?",
        options: [
            "$(2R,3R)\\text{-2,3-dimethyloxirane}$, which is chiral and optically active",
            "$(2R,3S)\\text{-2,3-dimethyloxirane}$, which is an achiral meso compound",
            "A racemic mixture of $(2R,3R)$ and $(2S,3S)$ enantiomers",
            "$(2S,3S)\\text{-2,3-dimethyloxirane}$, which is chiral and optically active"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Under dilute basic conditions, hydroxide deprotonates the hydroxyl group to generate the alkoxide ion at $\\text{C-2}$:\n$$\\text{ROH} + \\text{OH}^- \\rightleftharpoons \\text{RO}^- + \\text{H}_2\\text{O}$$\n2. The alkoxide ion at $\\text{C-2}$ acts as an internal nucleophile and performs an intramolecular nucleophilic substitution (intramolecular $\\text{S}_\\text{N}2$ mechanism) by attacking $\\text{C-3}$ from the backside of the $\\text{C-Br}$ bond ($180^\\circ$ anti-periplanar conformation).\n3. In this reaction, no bond at $\\text{C-2}$ is broken, so the stereochemical configuration at $\\text{C-2}$ is strictly retained as $(R)$.\n4. At $\\text{C-3}$, the backside displacement of bromide causes a complete Walden inversion of configuration from $(S)$ to $(R)$.\n5. Therefore, the resulting epoxide is $(2R,3R)\\text{-2,3-dimethyloxirane}$ (the trans-epoxide). Because both stereocenters have the $(R)$ configuration, the molecule lacks a plane or center of symmetry, making it chiral and optically active.",
        originalityAudit: {
            problemStructure: "Intramolecular Williamson ether cyclization with two adjacent chiral centers.",
            solutionMethodSignature: "Anti-periplanar intramolecular $\\text{S}_\\text{N}2$ conformation with Walden inversion tracking.",
            conceptCombination: "Intramolecular substitution, stereochemical retention vs inversion, oxirane chirality.",
            noveltyRationale: "Tests 3D stereochemical conformation and rigorous $(R/S)$ assignment during internal ring closure."
        }
    },

    // --- 3.2 NEET (Chemistry - Organic Compounds Containing Oxygen: Nucleophilic addition reactions of carbonyls (aldol, Cannizzaro)) ---
    {
        subject: 'Chemistry',
        chapter: 'Organic Compounds Containing Oxygen',
        subTopic: 'Nucleophilic addition reactions of carbonyls (aldol, Cannizzaro)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "When an equimolar mixture of 2,2-dimethylpropanal (pivalaldehyde, $(\\text{CH}_3)_3\\text{C-CHO}$) and formaldehyde ($\\text{HCHO}$) is treated with excess concentrated aqueous $\\text{NaOH}$ (crossed Cannizzaro reaction), which set of products is predominantly formed, and what is the mechanistic reason?",
        options: [
            "$\\text{HCOONa} + (\\text{CH}_3)_3\\text{C-CH}_2\\text{OH}$; because $\\text{OH}^-$ attacks $\\text{HCHO}$ faster and hydride ion is transferred from the formate adduct to pivalaldehyde",
            "$(\\text{CH}_3)_3\\text{C-COONa} + \\text{CH}_3\\text{OH}$; because pivalaldehyde is more reactive toward nucleophilic attack than formaldehyde",
            "An equimolar four-component mixture of $\\text{HCOONa}$, $\\text{CH}_3\\text{OH}$, $(\\text{CH}_3)_3\\text{C-COONa}$, and $(\\text{CH}_3)_3\\text{C-CH}_2\\text{OH}$",
            "A mixed aldol condensation adduct with subsequent dehydration to form an $\\alpha,\\beta$-unsaturated aldehyde"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Neither pivalaldehyde nor formaldehyde contains any $\\alpha$-hydrogen atoms; therefore, neither can form an enolate or undergo aldol condensation.\n2. In a crossed Cannizzaro reaction between formaldehyde and another non-enolizable aldehyde, formaldehyde is significantly more electrophilic and completely unhindered sterically compared to the bulky tert-butyl substituted pivalaldehyde.\n3. Hydroxide ion preferentially and rapidly attacks the carbonyl carbon of formaldehyde to produce the tetrahedral monoanion $\\text{H}_2\\text{C(OH)O}^-$.\n4. In the rate-determining step, a hydride ion ($\\text{H}^-$) is transferred from this formaldehyde monoanion/dianion to the carbonyl carbon of pivalaldehyde.\n5. As a consequence, formaldehyde is oxidized to sodium formate ($\\text{HCOONa}$), and pivalaldehyde is reduced to neopentyl alcohol ($(\\text{CH}_3)_3\\text{C-CH}_2\\text{OH}$).",
        originalityAudit: {
            problemStructure: "Crossed Cannizzaro selectivity between sterically hindered vs unhindered non-enolizable aldehydes.",
            solutionMethodSignature: "Steric and electronic carbonyl reactivity hierarchy with rate-determining hydride transfer.",
            conceptCombination: "Crossed Cannizzaro reaction, nucleophilic addition kinetics, hydride donor-acceptor selectivity.",
            noveltyRationale: "Tests fundamental mechanistic causality (rate-determining step) rather than superficial product memorization."
        }
    },

    // =========================================================================
    // 4. MATHEMATICS — INTEGRALS & APPLICATION OF DERIVATIVES
    // =========================================================================
    // --- 4.1 JEE Main (Mathematics - Integrals: Definite integrals) ---
    {
        subject: 'Mathematics',
        chapter: 'Integrals',
        subTopic: 'Definite integrals',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Evaluate the definite integral:\n$$I = \\int_0^{\\pi/2} \\frac{x}{\\sin x + \\cos x} \\, dx$$",
        options: [
            "$\\frac{\\pi}{2\\sqrt{2}} \\ln(\\sqrt{2} + 1)$",
            "$\\frac{\\pi}{4\\sqrt{2}} \\ln(\\sqrt{2} + 1)$",
            "$\\frac{\\pi}{\\sqrt{2}} \\ln(\\sqrt{2} - 1)$",
            "$\\frac{\\pi}{2} \\ln(2)$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "Applying the definite integral property $\\int_0^a f(x) \\, dx = \\int_0^a f(a - x) \\, dx$:\n$$I = \\int_0^{\\pi/2} \\frac{\\frac{\\pi}{2} - x}{\\sin(\\pi/2 - x) + \\cos(\\pi/2 - x)} \\, dx = \\int_0^{\\pi/2} \\frac{\\frac{\\pi}{2} - x}{\\cos x + \\sin x} \\, dx$$\nAdding the two integral representations:\n$$2I = \\int_0^{\\pi/2} \\frac{x + (\\pi/2 - x)}{\\sin x + \\cos x} \\, dx = \\frac{\\pi}{2} \\int_0^{\\pi/2} \\frac{dx}{\\sin x + \\cos x}$$\n$$I = \\frac{\\pi}{4} \\int_0^{\\pi/2} \\frac{dx}{\\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}\\cos x + \\frac{1}{\\sqrt{2}}\\sin x\\right)} = \\frac{\\pi}{4\\sqrt{2}} \\int_0^{\\pi/2} \\sec\\left(x - \\frac{\\pi}{4}\\right) dx$$\nSubstitute $u = x - \\frac{\\pi}{4}$, so $dx = du$. Limits change from $-\\frac{\\pi}{4}$ to $\\frac{\\pi}{4}$:\n$$I = \\frac{\\pi}{4\\sqrt{2}} \\left[ \\ln\\left| \\sec u + \\tan u \\right| \\right]_{-\\pi/4}^{\\pi/4}$$\nEvaluating the upper and lower limits:\n$$\\ln|\\sqrt{2} + 1| - \\ln|\\sqrt{2} - 1| = \\ln\\left(\\frac{\\sqrt{2} + 1}{\\sqrt{2} - 1}\\right) = \\ln\\left( (\\sqrt{2} + 1)^2 \\right) = 2\\ln(\\sqrt{2} + 1)$$\nTherefore:\n$$I = \\frac{\\pi}{4\\sqrt{2}} \\cdot 2\\ln(\\sqrt{2} + 1) = \\frac{\\pi}{2\\sqrt{2}} \\ln(\\sqrt{2} + 1)$$",
        originalityAudit: {
            problemStructure: "King's property symmetrization followed by trigonometric harmonic reduction.",
            solutionMethodSignature: "Linear combination of symmetric limits and secant antiderivative integration.",
            conceptCombination: "Definite integral symmetry, trigonometric linear transformation, logarithmic evaluation.",
            noveltyRationale: "Eliminates algebraic numerator $x$ through symmetry and resolves trigonometric harmonic form."
        }
    },

    // --- 4.2 JEE Main (Mathematics - Integrals: Leibniz rule (differentiation under integral sign)) ---
    {
        subject: 'Mathematics',
        chapter: 'Integrals',
        subTopic: 'Leibniz rule (differentiation under integral sign)',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Let $f: (0, \\infty) \\to \\mathbb{R}$ be a continuous function satisfying the integral identity:\n$$\\int_0^{x^2} t \\, f(\\sqrt{t}) \\, dt = \\frac{4}{7} x^7 - \\frac{2}{5} x^5$$\nfor all $x > 0$. What is the value of $f(2)$?",
        options: [
            "$14$",
            "$18$",
            "$12$",
            "$10$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "Differentiate both sides of the identity with respect to $x$ using the Leibniz Rule for differentiation under the integral sign:\n$$\\frac{d}{dx} \\left[ \\int_0^{x^2} t \\, f(\\sqrt{t}) \\, dt \\right] = \\frac{d}{dx} \\left[ \\frac{4}{7} x^7 - \\frac{2}{5} x^5 \\right]$$\nApplying Leibniz's theorem to the left-hand side:\n$$\\left( (x^2) \\cdot f(\\sqrt{x^2}) \\right) \\cdot \\frac{d}{dx}(x^2) - 0 = (x^2 \\cdot f(x)) \\cdot (2x) = 2x^3 f(x)$$\nDifferentiating the right-hand side:\n$$\\frac{4}{7} \\cdot (7 x^6) - \\frac{2}{5} \\cdot (5 x^4) = 4x^6 - 2x^4$$\nEquating both sides:\n$$2x^3 f(x) = 4x^6 - 2x^4$$\nSince $x > 0$, divide both sides by $2x^3$:\n$$f(x) = \\frac{4x^6 - 2x^4}{2x^3} = 2x^3 - x$$\nEvaluating $f(x)$ at $x = 2$:\n$$f(2) = 2(2^3) - 2 = 2(8) - 2 = 16 - 2 = 14$$",
        originalityAudit: {
            problemStructure: "Integral equation inversion using variable-limit Leibniz rule differentiation.",
            solutionMethodSignature: "Leibniz differentiation with chain rule boundary evaluation.",
            conceptCombination: "Fundamental theorem of calculus, Leibniz rule, functional evaluation.",
            noveltyRationale: "Applies variable upper limit chain rule with composite integrand arguments."
        }
    },

    // --- 4.3 JEE Main (Mathematics - Application of Derivatives: Maxima and minima) ---
    {
        subject: 'Mathematics',
        chapter: 'Application of Derivatives',
        subTopic: 'Maxima and minima',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A right circular cone of maximum volume is inscribed in a fixed sphere of radius $R$. What is the ratio of the volume of this largest cone to the volume of the sphere?",
        options: [
            "$\\frac{8}{27}$",
            "$\\frac{4}{9}$",
            "$\\frac{16}{81}$",
            "$\\frac{1}{3}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "Let the cone have base radius $r$ and height $h$, where $0 < h < 2R$.\nLet the center of the sphere be $O$. The distance from the center $O$ to the circular base of the cone is $|h - R|$.\nBy the Pythagorean theorem in the cross-sectional circle:\n$$r^2 + (h - R)^2 = R^2 \\implies r^2 = R^2 - (h - R)^2 = 2Rh - h^2$$\nThe volume of the cone as a function of height $h$ is:\n$$V(h) = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (2Rh - h^2) h = \\frac{1}{3} \\pi (2Rh^2 - h^3)$$\nTo find the maximum, set the first derivative $\\frac{dV}{dh} = 0$:\n$$\\frac{dV}{dh} = \\frac{1}{3} \\pi (4Rh - 3h^2) = 0$$\nSince $h > 0$, we have:\n$$4Rh - 3h^2 = 0 \\implies h = \\frac{4}{3} R$$\nChecking the second derivative:\n$$\\frac{d^2V}{dh^2} = \\frac{1}{3} \\pi (4R - 6h)$$\nAt $h = \\frac{4}{3}R$, $\\frac{d^2V}{dh^2} = \\frac{1}{3} \\pi (4R - 8R) = -\\frac{4\\pi R}{3} < 0$, confirming a local maximum.\nSubstitute $h = \\frac{4}{3} R$ to find $r^2$ and $V_{cone}$:\n$$r^2 = 2R\\left(\\frac{4}{3}R\\right) - \\left(\\frac{4}{3}R\\right)^2 = \\frac{8}{3}R^2 - \\frac{16}{9}R^2 = \\frac{8}{9}R^2$$\n$$V_{cone} = \\frac{1}{3} \\pi \\left(\\frac{8}{9} R^2\\right) \\left(\\frac{4}{3} R\\right) = \\frac{32}{81} \\pi R^3$$\nThe volume of the sphere is $V_{sphere} = \\frac{4}{3} \\pi R^3$.\nTaking the ratio:\n$$\\frac{V_{cone}}{V_{sphere}} = \\frac{\\frac{32}{81} \\pi R^3}{\\frac{4}{3} \\pi R^3} = \\frac{32}{81} \\times \\frac{3}{4} = \\frac{8}{27}$$",
        originalityAudit: {
            problemStructure: "Constrained geometric optimization of inscribed solid inside a spherical boundary.",
            solutionMethodSignature: "Single-variable polynomial extrema differentiation and volumetric ratio derivation.",
            conceptCombination: "Geometric constraint modeling, first and second derivative tests, ratio scaling.",
            noveltyRationale: "Rigorous analytical optimization demonstrating the scale-invariant $8/27$ volumetric packing threshold."
        }
    },

    // =========================================================================
    // 5. BOTANY & ZOOLOGY — MOLECULAR GENETICS & RECOMBINANT BIOTECHNOLOGY
    // =========================================================================
    // --- 5.1 NEET (Botany - Genetics and Evolution: Molecular Basis of Inheritance) ---
    {
        subject: 'Botany',
        chapter: 'Genetics and Evolution',
        subTopic: 'Molecular Basis of Inheritance',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In an in vitro cell-free translation system, a synthetic mRNA transcript with the repeating ribonucleotide sequence $5'-\\text{AUG UUU AUG UUU AUG UUU}\\dots-3'$ is translated. If a single guanine nucleotide insertion occurs immediately between position 6 and position 7 from the $5'$ end, what will be the resulting change in the amino acid sequence of the synthesized peptide?",
        options: [
            "The first two amino acids (Met-Phe) remain normal, followed by a reading frameshift yielding a continuous homopolymer of Valine residues if the resulting template becomes G-rich",
            "The first two amino acids (Met-Phe) are unaffected, followed by a $+1$ frameshift producing an altered polypeptide with altered downstream amino acid identity until a termination signal is reached",
            "The mutation creates an immediate nonsense stop codon at codon 3, terminating translation after just two amino acids",
            "Wobble pairing tolerates the inserted nucleotide, producing the original wild-type repeating Met-Phe dipeptide unaltered"
        ],
        correctAnswer: 1,
        correctOption: 'b',
        explanation: "1. The original reading frame groups codons in triplets starting from the $5'$ end:\n- Codon 1: $\\text{AUG} \\to \\text{Methionine (Met)}$\n- Codon 2: $\\text{UUU} \\to \\text{Phenylalanine (Phe)}$\n- Codon 3: $\\text{AUG} \\to \\text{Methionine (Met)}$\n- Codon 4: $\\text{UUU} \\to \\text{Phenylalanine (Phe)}$\n2. When an insertion occurs between positions 6 and 7, codons 1 and 2 (positions 1-6) are completely intact and synthesize the wild-type dipeptide $\\text{Met-Phe}$.\n3. Starting from position 7, the $+1$ base addition shifts the non-overlapping triplet reading frame (frameshift mutation).\n4. The new triplets formed after the insertion are read from the altered sequence ($5'-\\dots\\text{G-A-U}\\dots$), completely modifying the identity of all downstream encoded amino acids.\n5. Unlike single base substitutions, single-nucleotide indels outside multiples of 3 cannot be corrected by wobble pairing and irrevocably alter downstream translation until a reading-frame-dependent stop codon is encountered.",
        originalityAudit: {
            problemStructure: "Frameshift mutation impact on repetitive synthetic mRNA template translation.",
            solutionMethodSignature: "Triplet reading frame shift analysis and non-overlapping code deduction.",
            conceptCombination: "Genetic code triplets, non-overlapping nature, insertion frameshift consequences.",
            noveltyRationale: "Tests exact positional impact of indels on triplet codon reading frames in molecular biology."
        }
    },

    // --- 5.2 NEET (Zoology - Biotechnology and Its Applications: Recombinant DNA technology) ---
    {
        subject: 'Zoology',
        chapter: 'Biotechnology and Its Applications',
        subTopic: 'Recombinant DNA technology',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "During molecular cloning into plasmid vector $\\text{pBR322}$, a foreign gene of interest is ligated into the unique $\\text{BamHI}$ recognition site located inside the tetracycline resistance gene ($\\text{tet}^R$). Following transformation into competent $\\text{E. coli}$ cells, transformants are plated on selective media. Which growth phenotype on replica plates conclusively identifies the recombinant transformant colonies?",
        options: [
            "Growth on ampicillin-containing medium, but failure to grow on tetracycline-containing medium",
            "Growth on tetracycline-containing medium, but failure to grow on ampicillin-containing medium",
            "Growth on both ampicillin-containing and tetracycline-containing media",
            "Failure to grow on either ampicillin or tetracycline media"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Plasmid vector $\\text{pBR322}$ contains two selectable antibiotic resistance marker genes: ampicillin resistance ($\\text{amp}^R$) and tetracycline resistance ($\\text{tet}^R$).\n2. The restriction endonuclease $\\text{BamHI}$ has its unique cleavage recognition site situated within the coding region of the $\\text{tet}^R$ gene.\n3. Insertion of foreign DNA at the $\\text{BamHI}$ site disrupts the open reading frame of the $\\text{tet}^R$ gene, leading to insertional inactivation (loss of tetracycline resistance).\n4. Because the $\\text{amp}^R$ gene remains intact and fully functional, recombinant plasmid transformants are resistant to ampicillin but sensitive to tetracycline ($\\text{amp}^R \\text{tet}^S$).\n5. When plated on ampicillin agar plates, all transformants form colonies. When replica-plated onto tetracycline agar plates, recombinant colonies fail to grow, whereas non-recombinant colonies (intact $\\text{tet}^R$) grow normally.",
        originalityAudit: {
            problemStructure: "Selectable marker replica plating following insertional inactivation in plasmid vector pBR322.",
            solutionMethodSignature: "Insertional inactivation phenotypic differential deduction.",
            conceptCombination: "Cloning vectors, insertional inactivation, selectable markers, replica plating.",
            noveltyRationale: "Clarifies dual selectable marker screening logic in recombinant DNA technology."
        }
    }
];

async function runBatch3() {
    console.log(`=== RUNNING PRODUCTION BATCH 3 (${batch3Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch3Questions, 'PRODUCTION_BATCH_3');
    console.log('\nBatch 3 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch3().catch(console.error);
