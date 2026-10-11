import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 5: Wave & Ray Optics, Halogens, Electrochemistry, Differential Equations, Probability, Cellular Respiration & Evolution
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch5Questions = [
    // =========================================================================
    // 1. PHYSICS — OPTICS (WAVE & RAY OPTICS)
    // =========================================================================
    // --- 1.1 NEET (Physics - Optics: Young's double-slit experiment) ---
    {
        subject: 'Physics',
        chapter: 'Optics',
        subTopic: "Young's double-slit experiment",
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In a Young's double-slit experiment conducted in air, a thin glass sheet of refractive index $\\mu = 1.5$ and thickness $t$ is placed in the path of one of the interfering beams. This shifts the central bright fringe to the original position of the 5th bright fringe ($y_5$). If the entire experimental setup is subsequently immersed in water of refractive index $\\mu_w = \\frac{4}{3}$, what will be the new fringe shift expressed in terms of the new fringe width $\\beta'$ in water?",
        options: [
            "$\\frac{5}{3} \\beta'$",
            "$\\frac{5}{4} \\beta'$",
            "$\\frac{10}{3} \\beta'$",
            "$\\frac{5}{2} \\beta'$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. In air, introducing a plate of thickness $t$ and refractive index $\\mu$ introduces an optical path difference:\n$$\\Delta x = (\\mu - 1)t$$\nThe fringe shift in air is:\n$$\\Delta y = \\frac{D}{d} \\Delta x = \\frac{D}{d} (\\mu - 1)t$$\nGiven this shift equals 5 times the fringe width in air ($\\beta = \\frac{\\lambda D}{d}$):\n$$\\Delta y = 5\\beta = 5\\frac{\\lambda D}{d} \\implies (\\mu - 1)t = 5\\lambda$$\nWith $\\mu = 1.5$:\n$$(1.5 - 1)t = 5\\lambda \\implies 0.5 t = 5\\lambda \\implies t = 10\\lambda$$\n2. When submerged in water of refractive index $\\mu_w = \\frac{4}{3}$, the relative path difference introduced by the sheet compared to the displaced water is:\n$$\\Delta x' = \\left( \\frac{\\mu}{\\mu_w} - 1 \\right) t = \\left( \\frac{1.5}{4/3} - 1 \\right) t = \\left( \\frac{9}{8} - 1 \\right) t = \\frac{1}{8} t$$\nSubstituting $t = 10\\lambda$:\n$$\\Delta x' = \\frac{1}{8}(10\\lambda) = \\frac{5}{4}\\lambda$$\n3. In water, the wavelength becomes $\\lambda' = \\frac{\\lambda}{\\mu_w} = \\frac{\\lambda}{4/3} = \\frac{3}{4}\\lambda \\implies \\lambda = \\frac{4}{3}\\lambda'$.\nTherefore, the optical path difference in terms of the new wavelength $\\lambda'$ is:\n$$\\Delta x' = \\frac{5}{4} \\left( \\frac{4}{3}\\lambda' \\right) = \\frac{5}{3}\\lambda'$$\nThe new fringe width in water is $\\beta' = \\frac{\\lambda' D}{d}$.\nThe new shift is:\n$$\\Delta y' = \\frac{D}{d} \\Delta x' = \\frac{D}{d} \\left(\\frac{5}{3}\\lambda'\\right) = \\frac{5}{3} \\beta'$$",
        originalityAudit: {
            problemStructure: "YDSE central fringe shift under medium replacement with relative refractive index compensation.",
            solutionMethodSignature: "Relative optical path difference in dielectric medium and wavelength rescaling.",
            conceptCombination: "Thin-film optical path delay, liquid immersion YDSE, fringe shift ratio.",
            noveltyRationale: "Couples medium-dependent wavelength contraction with relative refractive index $(\\mu_g/\\mu_w - 1)$ path difference."
        }
    },

    // --- 1.2 JEE Main (Physics - Optics: Total internal reflection and prisms) ---
    {
        subject: 'Physics',
        chapter: 'Optics',
        subTopic: 'Total internal reflection and prisms',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A monochromatic ray of light is incident on the first face of an equilateral glass prism of apex angle $A = 60^\\circ$ and refractive index $\\mu = \\sqrt{2}$. What is the minimum angle of incidence $i_{min}$ on the first face such that the refracted ray does not suffer total internal reflection at the second face and emerges into air?",
        options: [
            "$\\sin^{-1}\\left(\\frac{\\sqrt{3}-1}{2}\\right)$",
            "$\\sin^{-1}\\left(\\frac{\\sqrt{3}+1}{2\\sqrt{2}}\\right)$",
            "$30^\\circ$",
            "$45^\\circ$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. At the second face of the prism, the ray emerges grazing the surface when the angle of incidence at the second face equals the critical angle $\\theta_c$:\n$$\\sin \\theta_c = \\frac{1}{\\mu} = \\frac{1}{\\sqrt{2}} \\implies \\theta_c = 45^\\circ$$\nFor emergence to occur, we must have $r_2 \\le \\theta_c = 45^\\circ$.\n2. For any prism of apex angle $A$:\n$$r_1 + r_2 = A = 60^\\circ \\implies r_1 = 60^\\circ - r_2$$\nTo ensure $r_2 \\le 45^\\circ$, $r_1$ must satisfy:\n$$r_1 \\ge 60^\\circ - 45^\\circ = 15^\\circ$$\n3. Applying Snell's Law at the first face ($1 \\cdot \\sin i = \\mu \\sin r_1$):\n$$\\sin i_{min} = \\mu \\sin(15^\\circ) = \\sqrt{2} \\sin(15^\\circ)$$\nUsing the trigonometric identity $\\sin(15^\\circ) = \\sin(45^\\circ - 30^\\circ) = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$:\n$$\\sin i_{min} = \\sqrt{2} \\left( \\frac{\\sqrt{6} - \\sqrt{2}}{4} \\right) = \\frac{\\sqrt{12} - 2}{4} = \\frac{2\\sqrt{3} - 2}{4} = \\frac{\\sqrt{3} - 1}{2}$$\nTherefore, the minimum incident angle for emergence is:\n$$i_{min} = \\sin^{-1}\\left( \\frac{\\sqrt{3} - 1}{2} \\right)$$",
        originalityAudit: {
            problemStructure: "Critical incidence threshold for prism emergence using boundary Snell relations.",
            solutionMethodSignature: "Critical angle condition at second boundary mapped to first face via prism apex relation.",
            conceptCombination: "Total internal reflection, critical angle, prism geometry ($r_1 + r_2 = A$), exact trigonometric reduction.",
            noveltyRationale: "Requires finding the analytical minimum entry angle preventing internal reflection confinement."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY — ELECTROCHEMISTRY & HALOALKANES
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Redox Reactions and Electrochemistry: Nernst equation) ---
    {
        subject: 'Chemistry',
        chapter: 'Redox Reactions and Electrochemistry',
        subTopic: 'Nernst equation',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Consider the electrochemical cell at $298\\text{ K}$:\n$$\\text{Pt}(s) \\mid \\text{H}_2(g, 1\\text{ bar}) \\mid \\text{HA}(0.10\\text{ M}) \\parallel \\text{Ag}^+(0.010\\text{ M}) \\mid \\text{Ag}(s)$$\nwhere $\\text{HA}$ is a weak monoprotic acid with acid dissociation constant $K_a = 1.0 \\times 10^{-5}$. Given the standard reduction potentials $E^\\circ_{\\text{Ag}^+/\\text{Ag}} = +0.80\\text{ V}$ and $E^\\circ_{\\text{H}^+/\\text{H}_2} = 0.00\\text{ V}$, what is the electromotive force ($E_{cell}$) of this cell? (Take $\\frac{2.303 RT}{F} = 0.059\\text{ V}$ at $298\\text{ K}$)",
        options: [
            "$+0.859\\text{ V}$",
            "$+0.741\\text{ V}$",
            "$+0.800\\text{ V}$",
            "$+0.918\\text{ V}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. In the anode compartment, weak acid $\\text{HA}$ dissociates:\n$$\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$$\nSince $\\frac{K_a}{C} = \\frac{10^{-5}}{0.1} = 10^{-4} \\ll 1$, we use the approximation:\n$$[\\text{H}^+] = \\sqrt{K_a C} = \\sqrt{(1.0 \\times 10^{-5})(0.10)} = \\sqrt{1.0 \\times 10^{-6}} = 1.0 \\times 10^{-3}\\text{ M}$$\n2. The cell half-reactions are:\n- Anode: $\\frac{1}{2} \\text{H}_2(g) \\to \\text{H}^+(aq) + e^-$\n- Cathode: $\\text{Ag}^+(aq) + e^- \\to \\text{Ag}(s)$\nOverall cell reaction ($n = 1$):\n$$\\text{Ag}^+(aq) + \\frac{1}{2}\\text{H}_2(g) \\rightleftharpoons \\text{Ag}(s) + \\text{H}^+(aq)$$\n3. Standard cell potential:\n$$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = +0.80\\text{ V} - 0.00\\text{ V} = +0.80\\text{ V}$$\n4. The reaction quotient $Q$ is:\n$$Q = \\frac{[\\text{H}^+]}{[\\text{Ag}^+] \\cdot P_{\\text{H}_2}^{1/2}} = \\frac{1.0 \\times 10^{-3}}{(1.0 \\times 10^{-2}) \\cdot (1)^{1/2}} = 1.0 \\times 10^{-1}$$\n5. Applying the Nernst equation at $298\\text{ K}$:\n$$E_{cell} = E^\\circ_{cell} - \\frac{0.059}{n} \\log Q = +0.80 - \\frac{0.059}{1} \\log(10^{-1})$$\n$$E_{cell} = +0.80 - 0.059(-1) = +0.80 + 0.059 = +0.859\\text{ V}$$",
        originalityAudit: {
            problemStructure: "Integration of weak acid ionic equilibrium with galvanic Nernst cell potential.",
            solutionMethodSignature: "Ostwald dilution hydrogen ion concentration calculation and single-electron Nernst equation.",
            conceptCombination: "Weak acid dissociation ($K_a$), hydrogen electrode potential, silver reduction, Nernst cell equation.",
            noveltyRationale: "Couples chemical equilibrium dissociation thermodynamics directly into electrochemical potential."
        }
    },

    // --- 2.2 NEET (Chemistry - Redox Reactions and Electrochemistry: Faraday's laws of electrolysis) ---
    {
        subject: 'Chemistry',
        chapter: 'Redox Reactions and Electrochemistry',
        subTopic: "Faraday's laws of electrolysis",
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A steady electric current of $I = 4.825\\text{ A}$ is passed through an aqueous solution of copper(II) sulfate ($\\text{CuSO}_4$) using inert platinum electrodes for exactly $40.0\\text{ minutes}$. What mass of copper is deposited at the cathode, and what volume of oxygen gas ($\\text{O}_2$) is simultaneously liberated at the anode at STP? (Atomic mass of $\\text{Cu} = 63.5\\text{ g/mol}$, $1\\text{ F} = 96,500\\text{ C/mol}$, molar volume of gas at STP $= 22.4\\text{ L/mol}$)",
        options: [
            "$3.81\\text{ g of Cu}$ and $672\\text{ mL of O}_2$",
            "$7.62\\text{ g of Cu}$ and $1344\\text{ mL of O}_2$",
            "$3.81\\text{ g of Cu}$ and $1344\\text{ mL of O}_2$",
            "$1.90\\text{ g of Cu}$ and $336\\text{ mL of O}_2$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Total charge passed through the electrolyte:\n$$t = 40.0 \\times 60 = 2400\\text{ s}$$\n$$Q = I \\times t = 4.825\\text{ A} \\times 2400\\text{ s} = 11,580\\text{ C}$$\nNumber of Faradays passed:\n$$n_F = \\frac{Q}{F} = \\frac{11,580\\text{ C}}{96,500\\text{ C/mol}} = 0.12\\text{ mol of electrons}$$\n2. At the cathode (reduction):\n$$\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}(s)$$\nMoles of copper deposited:\n$$n_{\\text{Cu}} = \\frac{n_F}{2} = \\frac{0.12}{2} = 0.060\\text{ mol}$$\n$$\\text{Mass of Cu} = 0.060\\text{ mol} \\times 63.5\\text{ g/mol} = 3.81\\text{ g}$$\n3. At the anode (water oxidation):\n$$2\\text{H}_2\\text{O}(l) \\to \\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^-$$\nMoles of $\\text{O}_2$ produced:\n$$n_{\\text{O}_2} = \\frac{n_F}{4} = \\frac{0.12}{4} = 0.030\\text{ mol}$$\nVolume of $\\text{O}_2$ at STP:\n$$V_{\\text{O}_2} = 0.030\\text{ mol} \\times 22.4\\text{ L/mol} = 0.672\\text{ L} = 672\\text{ mL}$$",
        originalityAudit: {
            problemStructure: "Dual-electrode stoichiometric electrolysis yield under steady current.",
            solutionMethodSignature: "Faraday charge stoichiometry for 2-electron reduction and 4-electron oxidation.",
            conceptCombination: "Faraday's laws, cathodic metal deposition, anodic water electrolysis, STP gas volume.",
            noveltyRationale: "Demands concurrent cathodic metal mass and anodic stoichiometric gas volume evaluation."
        }
    },

    // --- 2.3 NEET (Chemistry - Organic Compounds Containing Halogens: SN1 and SN2 reaction mechanisms) ---
    {
        subject: 'Chemistry',
        chapter: 'Organic Compounds Containing Halogens',
        subTopic: 'SN1 and SN2 reaction mechanisms and stereochemistry',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "When enantiomerically pure $(S)\\text{-2-bromopentane}$ is subjected separately to two distinct substitution reactions:\n- Condition 1: Heated in aqueous acetone (hydrolysis).\n- Condition 2: Treated with sodium hydrosulfide ($\\text{NaSH}$) in anhydrous dimethyl sulfoxide ($\\text{DMSO}$).\nWhich of the following correctly describes the stereochemical outcomes and optical properties of the products obtained in Condition 1 and Condition 2, respectively?",
        options: [
            "Condition 1 yields an optically inactive racemic mixture via an $\\text{S}_\\text{N}1$ pathway; Condition 2 yields optically active $(R)\\text{-pentane-2-thiol}$ with complete Walden inversion via an $\\text{S}_\\text{N}2$ pathway",
            "Condition 1 yields optically active $(R)\\text{-pentan-2-ol}$ with complete retention; Condition 2 yields a racemic mixture via an $\\text{S}_\\text{N}1$ pathway",
            "Both conditions proceed via carbocation intermediates to produce completely racemic mixtures",
            "Both conditions proceed with complete retention of the $(S)$ absolute configuration"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Condition 1 (Aqueous Acetone):**\n- Water in aqueous acetone is a weak nucleophile and polar protic solvent mixture that favors ionization.\n- Heterolytic cleavage of the $\\text{C-Br}$ bond generates a planar, achiral $sp^2$-hybridized secondary carbocation intermediate.\n- Nucleophilic attack by $\\text{H}_2\\text{O}$ occurs with equal probability from both the top and bottom faces of the planar carbocation, yielding an equimolar mixture of $(R)\\text{-pentan-2-ol}$ and $(S)\\text{-pentan-2-ol}$ (a racemic modification that is optically inactive due to external compensation).\n2. **Condition 2 ($\\text{NaSH}$ in $\\text{DMSO}$):**\n- Hydrosulfide ion ($\\text{SH}^-$) is a powerful, strongly nucleophilic anion, and $\\text{DMSO}$ is a polar aprotic solvent that does not solvate anions, maximizing nucleophilicity.\n- The reaction proceeds via a concerted, bimolecular $\\text{S}_\\text{N}2$ mechanism involving backside attack.\n- This forces a $100\\%$ stereochemical inversion of configuration (Walden inversion). The starting $(S)$ substrate inverts cleanly to $(R)\\text{-pentane-2-thiol}$, which is enantiomerically pure and optically active.",
        originalityAudit: {
            problemStructure: "Stereochemical divergence of identical chiral substrate under protic vs aprotic nucleophilic substitution.",
            solutionMethodSignature: "Mechanistic dichotomy analysis (planar carbocation vs concerted backside displacement).",
            conceptCombination: "$\\text{S}_\\text{N}1$ racemization, $\\text{S}_\\text{N}2$ Walden inversion, polar aprotic solvent effects, optical activity.",
            noveltyRationale: "Contrasts carbocation planar symmetry with backside displacement inversion on the exact same secondary haloalkane."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS — DIFFERENTIAL EQUATIONS & PROBABILITY
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Differential Equations: Linear differential equations) ---
    {
        subject: 'Mathematics',
        chapter: 'Differential Equations',
        subTopic: 'Linear differential equations',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Let $y = y(x)$ be the solution of the linear differential equation:\n$$\\frac{dy}{dx} + y \\cot x = 2x \\csc x \\quad \\left(0 < x < \\pi\\right)$$\nsatisfying the initial condition $y\\left(\\frac{\\pi}{2}\\right) = 0$. What is the value of $y\\left(\\frac{\\pi}{6}\\right)$?",
        options: [
            "$-\\frac{4\\pi^2}{9}$",
            "$-\\frac{2\\pi^2}{9}$",
            "$\\frac{4\\pi^2}{9}$",
            "$-\\frac{\\pi^2}{3}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The given equation is in standard first-order linear form $\\frac{dy}{dx} + P(x)y = Q(x)$, with:\n$$P(x) = \\cot x, \\quad Q(x) = 2x \\csc x$$\n2. The integrating factor $I(x)$ is:\n$$I(x) = e^{\\int \\cot x \\, dx} = e^{\\ln|\\sin x|} = \\sin x \\quad (\\text{since } \\sin x > 0 \\text{ for } 0 < x < \\pi)$$\n3. Multiplying through by $\\sin x$:\n$$\\frac{d}{dx}[y \\sin x] = (2x \\csc x)(\\sin x) = 2x$$\n4. Integrating both sides with respect to $x$:\n$$y \\sin x = \\int 2x \\, dx = x^2 + C$$\n5. Applying the initial condition $y\\left(\\frac{\\pi}{2}\\right) = 0$:\n$$0 \\cdot \\sin\\left(\\frac{\\pi}{2}\\right) = \\left(\\frac{\\pi}{2}\\right)^2 + C \\implies 0 = \\frac{\\pi^2}{4} + C \\implies C = -\\frac{\\pi^2}{4}$$\nThus, the particular solution is:\n$$y(x) = \\frac{x^2 - \\frac{\\pi^2}{4}}{\\sin x}$$\n6. Evaluating at $x = \\frac{\\pi}{6}$:\n$$x^2 = \\left(\\frac{\\pi}{6}\\right)^2 = \\frac{\\pi^2}{36}$$\n$$x^2 - \\frac{\\pi^2}{4} = \\frac{\\pi^2}{36} - \\frac{9\\pi^2}{36} = -\\frac{8\\pi^2}{36} = -\\frac{2\\pi^2}{9}$$\n$$\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$$\n$$y\\left(\\frac{\\pi}{6}\\right) = \\frac{-\\frac{2\\pi^2}{9}}{\\frac{1}{2}} = -\\frac{4\\pi^2}{9}$$",
        originalityAudit: {
            problemStructure: "First-order linear ODE with trigonometric integrating factor and non-zero boundary evaluation.",
            solutionMethodSignature: "Integrating factor method with boundary condition evaluation.",
            conceptCombination: "Linear differential equations, integrating factor, particular solution, trigonometric evaluation.",
            noveltyRationale: "Integrates trigonometric cancellation into the closed-form boundary problem."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Differential Equations: Homogeneous equations) ---
    {
        subject: 'Mathematics',
        chapter: 'Differential Equations',
        subTopic: 'Homogeneous equations',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "What geometrical family of curves is represented by the general solution of the homogeneous differential equation:\n$$(x^2 - y^2) \\, dx + 2xy \\, dy = 0 \\quad (x \\ne 0) ?$$",
        options: [
            "A family of circles passing through the origin with centers on the $x$-axis ($x^2 + y^2 = Cx$)",
            "A family of coaxial parabolas with common vertex at the origin",
            "A family of rectangular hyperbolas with coordinate axes as asymptotes",
            "A family of circles passing through the origin with centers on the $y$-axis"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Rewrite the differential equation in derivative form:\n$$2xy \\, dy = (y^2 - x^2) \\, dx \\implies \\frac{dy}{dx} = \\frac{y^2 - x^2}{2xy}$$\n2. Substitute the homogeneous variable $y = vx$, so $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = \\frac{v^2 x^2 - x^2}{2vx^2} = \\frac{v^2 - 1}{2v}$$\n$$x\\frac{dv}{dx} = \\frac{v^2 - 1}{2v} - v = \\frac{v^2 - 1 - 2v^2}{2v} = -\\frac{v^2 + 1}{2v}$$\n3. Separating the variables:\n$$\\frac{2v}{v^2 + 1} \\, dv = -\\frac{dx}{x}$$\n4. Integrating both sides:\n$$\\ln(v^2 + 1) = -\\ln|x| + \\ln C = \\ln\\left(\\frac{C}{|x|}\\right)$$\n$$v^2 + 1 = \\frac{C}{x}$$\n5. Substituting back $v = \\frac{y}{x}$:\n$$\\frac{y^2}{x^2} + 1 = \\frac{C}{x} \\implies \\frac{x^2 + y^2}{x^2} = \\frac{C}{x} \\implies x^2 + y^2 = Cx$$\n6. In standard conic form:\n$$\\left(x - \\frac{C}{2}\\right)^2 + y^2 = \\left(\\frac{C}{2}\\right)^2$$\nThis represents a family of circles with center at $\\left(\\frac{C}{2}, 0\\right)$ and radius $\\frac{|C|}{2}$, all passing through the origin $(0, 0)$.",
        originalityAudit: {
            problemStructure: "Homogeneous ODE integration leading to geometric locus classification.",
            solutionMethodSignature: "Homogeneous substitution $y = vx$ with separable logarithmic integration.",
            conceptCombination: "Homogeneous differential equations, separation of variables, coordinate geometry of circles.",
            noveltyRationale: "Bridges algebraic differential equation solution to analytical geometry interpretation."
        }
    },

    // --- 3.3 JEE Main (Mathematics - Probability: Bayes' theorem) ---
    {
        subject: 'Mathematics',
        chapter: 'Probability',
        subTopic: "Bayes' theorem",
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Three identical urns $U_1, U_2,$ and $U_3$ contain colored balls as follows:\n- $U_1$: 3 red balls and 2 white balls\n- $U_2$: 2 red balls and 4 white balls\n- $U_3$: 4 red balls and 1 white ball\nAn urn is chosen at random with equal probability, and two balls are drawn from it at random without replacement. If both drawn balls turn out to be red, what is the posterior probability that they were drawn from Urn $U_1$?",
        options: [
            "$\\frac{9}{29}$",
            "$\\frac{18}{29}$",
            "$\\frac{2}{29}$",
            "$\\frac{3}{10}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Let $E_1, E_2, E_3$ be the events of choosing urns $U_1, U_2, U_3$, respectively. Since each urn is equally likely:\n$$P(E_1) = P(E_2) = P(E_3) = \\frac{1}{3}$$\n2. Let $A$ be the event of drawing 2 red balls without replacement.\n- From $U_1$ (total 5 balls, 3 red):\n$$P(A \\mid E_1) = \\frac{\\binom{3}{2}}{\\binom{5}{2}} = \\frac{3}{10}$$\n- From $U_2$ (total 6 balls, 2 red):\n$$P(A \\mid E_2) = \\frac{\\binom{2}{2}}{\\binom{6}{2}} = \\frac{1}{15}$$\n- From $U_3$ (total 5 balls, 4 red):\n$$P(A \\mid E_3) = \\frac{\\binom{4}{2}}{\\binom{5}{2}} = \\frac{6}{10} = \\frac{3}{5}$$\n3. By the Law of Total Probability, the total probability $P(A)$ is:\n$$P(A) = P(E_1)P(A \\mid E_1) + P(E_2)P(A \\mid E_2) + P(E_3)P(A \\mid E_3)$$\n$$P(A) = \\frac{1}{3} \\left[ \\frac{3}{10} + \\frac{1}{15} + \\frac{6}{10} \\right] = \\frac{1}{3} \\left[ \\frac{9}{10} + \\frac{1}{15} \\right] = \\frac{1}{3} \\left[ \\frac{27 + 2}{30} \\right] = \\frac{1}{3} \\cdot \\frac{29}{30} = \\frac{29}{90}$$\n4. By Bayes' Theorem, the posterior probability $P(E_1 \\mid A)$ is:\n$$P(E_1 \\mid A) = \\frac{P(E_1)P(A \\mid E_1)}{P(A)} = \\frac{\\frac{1}{3} \\cdot \\frac{3}{10}}{\\frac{29}{90}} = \\frac{\\frac{1}{10}}{\\frac{29}{90}} = \\frac{9}{29}$$",
        originalityAudit: {
            problemStructure: "Multi-urn hypergeometric conditional sampling with Bayes' theorem posterior updating.",
            solutionMethodSignature: "Hypergeometric combination formulation and total probability normalisation.",
            conceptCombination: "Bayes' theorem, hypergeometric distribution without replacement, total probability theorem.",
            noveltyRationale: "Avoids replacement simplifications to demand exact fractional hypergeometric arithmetic."
        }
    },

    // =========================================================================
    // 4. BOTANY & ZOOLOGY — RESPIRATION & EVOLUTION
    // =========================================================================
    // --- 4.1 NEET (Botany - Plant Physiology: Glycolysis, Krebs cycle, and oxidative phosphorylation) ---
    {
        subject: 'Botany',
        chapter: 'Plant Physiology',
        subTopic: 'Glycolysis, Krebs cycle, and oxidative phosphorylation',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "During complete aerobic respiration of one molecule of glucose, which of the following correctly accounts for the difference in total ATP yield between eukaryotic cells utilizing the glycerol phosphate shuttle versus the malate-aspartate shuttle, and identifies the correct mitochondrial complexes where electrons from $\\text{NADH}$ and $\\text{FADH}_2$ enter the electron transport chain (ETC)?",
        options: [
            "36 ATP (glycerol phosphate shuttle) vs 38 ATP (malate-aspartate shuttle); $\\text{NADH}$ electrons enter at Complex I while $\\text{FADH}_2$ electrons enter at Complex II",
            "30 ATP vs 32 ATP; both $\\text{NADH}$ and $\\text{FADH}_2$ electrons donate directly to Complex IV (cytochrome c oxidase)",
            "38 ATP in all tissues; electrons from both coenzymes enter exclusively at Complex III",
            "32 ATP in all tissues; cytosolic $\\text{NADH}$ diffuses directly across inner mitochondrial membrane to Complex V"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Glycolytic $\\text{NADH}$ is synthesized in the cytosol and cannot directly traverse the impermeable inner mitochondrial membrane. It transfers reducing equivalents into the mitochondrial matrix via two shuttle systems:\n- **Glycerol-3-phosphate shuttle (skeletal muscle and brain):** Electrons are transferred to mitochondrial $\\text{FAD}$ inside the inner membrane, producing $\\text{FADH}_2$ (yielding 2 ATP per electron pair, giving a net yield of 36 ATP per glucose).\n- **Malate-aspartate shuttle (heart, liver, and kidney):** Electrons are transferred to mitochondrial $\\text{NAD}^+$, regenerating matrix $\\text{NADH}$ (yielding 3 ATP per electron pair, giving a net yield of 38 ATP per glucose).\n2. In the mitochondrial Electron Transport Chain (ETC):\n- Matrix $\\text{NADH}$ donates its high-energy electrons to **Complex I** ($\\text{NADH}$ dehydrogenase / ubiquinone oxidoreductase), which pumps 4 protons.\n- Succinate-derived $\\text{FADH}_2$ donates electrons to **Complex II** (succinate dehydrogenase), transferring electrons directly to ubiquinone (coenzyme Q) without proton pumping across the inner membrane.",
        originalityAudit: {
            problemStructure: "Mitochondrial shuttle energetics coupled with ETC complex entry discrimination.",
            solutionMethodSignature: "Cytosolic shuttle pathway stoichiometry and inner mitochondrial complex mapping.",
            conceptCombination: "Glycerol phosphate shuttle, malate-aspartate shuttle, Complex I vs Complex II, ATP balance sheet.",
            noveltyRationale: "Resolves tissue-specific ATP yield variations with biochemical ETC electron entry sites."
        }
    },

    // --- 4.2 NEET (Zoology - Evolution: Modern synthetic theory and Hardy-Weinberg equilibrium) ---
    {
        subject: 'Zoology',
        chapter: 'Evolution',
        subTopic: 'Modern synthetic theory and Hardy-Weinberg equilibrium',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In a large, randomly mating human population in Hardy-Weinberg equilibrium, an autosomal recessive metabolic disorder has an incidence of 1 in 2,500 live births ($q^2 = \\frac{1}{2500}$). What is the percentage frequency of healthy heterozygous carrier individuals in this population?",
        options: [
            "$3.92\\%$ (approximately 1 in 26 individuals)",
            "$1.96\\%$ (approximately 1 in 51 individuals)",
            "$0.04\\%$ (approximately 1 in 2,500 individuals)",
            "$7.84\\%$ (approximately 1 in 13 individuals)"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. In Hardy-Weinberg equilibrium for an autosomal gene with two alleles ($A$ and $a$):\n$$p + q = 1$$\n$$p^2 + 2pq + q^2 = 1$$\nwhere:\n- $p^2$ is the frequency of homozygous dominant individuals ($AA$)\n- $2pq$ is the frequency of heterozygous carriers ($Aa$)\n- $q^2$ is the frequency of homozygous recessive affected individuals ($aa$)\n2. Given the disease frequency:\n$$q^2 = \\frac{1}{2500} = 0.0004$$\n$$q = \\sqrt{\\frac{1}{2500}} = \\frac{1}{50} = 0.02$$\n3. The frequency of the dominant allele $p$ is:\n$$p = 1 - q = 1 - 0.02 = 0.98$$\n4. The frequency of heterozygous carriers is given by $2pq$:\n$$2pq = 2(0.98)(0.02) = 2(0.0196) = 0.0392$$\nExpressed as a percentage:\n$$2pq = 0.0392 \\times 100\\% = 3.92\\%$$\nIn fraction terms: $\\frac{1}{0.0392} \\approx 25.5$, meaning approximately 1 in 26 individuals is a carrier.",
        originalityAudit: {
            problemStructure: "Hardy-Weinberg carrier frequency calculation from low-incidence autosomal recessive phenotype.",
            solutionMethodSignature: "Square-root allele frequency derivation and binomial carrier term computation.",
            conceptCombination: "Hardy-Weinberg equilibrium, carrier frequency ($2pq$), recessive disease incidence.",
            noveltyRationale: "Contrasts rare phenotype frequency ($0.04\\%$) with high carrier prevalence ($3.92\\%$) in population genetics."
        }
    }
];

async function runBatch5() {
    console.log(`=== RUNNING PRODUCTION BATCH 5 (${batch5Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch5Questions, 'PRODUCTION_BATCH_5');
    console.log('\nBatch 5 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch5().catch(console.error);
