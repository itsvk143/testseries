import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 10: Standing Waves, Torricelli Efflux, Mercury Droplet Energy, Limiting Reagents, Concentration Terms, Area Under Curves, Gymnosperm Ovules, RAAS Excretion & Muscle Contraction
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch10Questions = [
    // =========================================================================
    // 1. PHYSICS — OSCILLATIONS, WAVES & FLUID PROPERTIES
    // =========================================================================
    // --- 1.1 JEE Main (Physics - Oscillations: Standing waves in organ pipes) ---
    {
        subject: 'Physics',
        chapter: 'Oscillations and Waves',
        subTopic: 'Standing waves in strings and organ pipes',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A pipe closed at one end of length $L_1$ and an open organ pipe of length $L_2$ are simultaneously sounded in air. The closed pipe vibrates in its 3rd harmonic (first overtone), while the open pipe vibrates in its 2nd harmonic (first overtone). Together, they produce a beat frequency of $4.0\\text{ Hz}$, with the closed pipe producing the higher frequency. If the fundamental frequency of the closed pipe is $100\\text{ Hz}$ and the speed of sound in air is $v = 340\\text{ m/s}$, what are the lengths $L_1$ and $L_2$?",
        options: [
            "$L_1 = 85.0\\text{ cm}$ and $L_2 = \\frac{85}{74}\\text{ m} \\approx 114.9\\text{ cm}$",
            "$L_1 = 42.5\\text{ cm}$ and $L_2 = 100.0\\text{ cm}$",
            "$L_1 = 85.0\\text{ cm}$ and $L_2 = 85.0\\text{ cm}$",
            "$L_1 = 170.0\\text{ cm}$ and $L_2 = 230.0\\text{ cm}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For a pipe closed at one end of length $L_1$:\n- The fundamental frequency is:\n$$f_{0,closed} = \\frac{v}{4L_1} = 100\\text{ Hz} \\implies L_1 = \\frac{v}{400} = \\frac{340\\text{ m/s}}{400} = 0.85\\text{ m} = 85.0\\text{ cm}$$\n- A closed pipe produces only odd harmonics ($1, 3, 5, \\dots$). Its 3rd harmonic (first overtone) frequency $f_1$ is:\n$$f_1 = 3 \\cdot f_{0,closed} = 3(100\\text{ Hz}) = 300\\text{ Hz}$$\n2. For an open organ pipe of length $L_2$:\n- Harmonics occur at integer multiples ($1, 2, 3, \\dots$) with frequency $f_n = \\frac{n v}{2L_2}$.\n- Its 2nd harmonic (first overtone, $n = 2$) is:\n$$f_2 = \\frac{2v}{2L_2} = \\frac{v}{L_2}$$\n3. Given that the beat frequency is $\\Delta f = f_1 - f_2 = 4.0\\text{ Hz}$:\n$$300 - f_2 = 4.0 \\implies f_2 = 296\\text{ Hz}$$\n4. Solving for length $L_2$:\n$$f_2 = \\frac{v}{L_2} = 296\\text{ Hz} \\implies L_2 = \\frac{v}{296} = \\frac{340}{296} = \\frac{85}{74}\\text{ m} \\approx 1.1486\\text{ m} \\approx 114.9\\text{ cm}$$",
        originalityAudit: {
            problemStructure: "Dual boundary organ pipe harmonic resonance coupled with beat frequency acoustic calibration.",
            solutionMethodSignature: "Harmonic mode mapping for open vs closed boundary conditions and beat frequency difference equation.",
            conceptCombination: "Organ pipe harmonics (odd vs all), fundamental frequency, beat frequency, acoustic length relation.",
            noveltyRationale: "Demands acoustic frequency matching across different boundary condition harmonic series."
        }
    },

    // --- 1.2 NEET (Physics - Properties of Solids and Liquids: Fluid mechanics) ---
    {
        subject: 'Physics',
        chapter: 'Properties of Solids and Liquids',
        subTopic: 'Fluid mechanics (Pascal\'s law, Bernoulli\'s principle, viscosity)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A wide, open cylindrical water storage reservoir has a small circular drainage orifice of diameter $d = 2.0\\text{ cm}$ drilled in its vertical side wall at depth $h = 5.0\\text{ m}$ below the free surface of water. Taking $g = 10\\text{ m/s}^2$, what is the speed of efflux of water discharging through the orifice, and what is the volume rate of flow ($Q$) in liters per second ($\\text{L/s}$)?",
        options: [
            "Efflux speed $v = 10\\text{ m/s}$, and volume flow rate $Q = \\pi\\text{ L/s} \\approx 3.14\\text{ L/s}$",
            "Efflux speed $v = 5.0\\text{ m/s}$, and volume flow rate $Q = 1.57\\text{ L/s}$",
            "Efflux speed $v = 10\\text{ m/s}$, and volume flow rate $Q = 6.28\\text{ L/s}$",
            "Efflux speed $v = 14.1\\text{ m/s}$, and volume flow rate $Q = 4.44\\text{ L/s}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. By Torricelli's Law of efflux (derived from Bernoulli's principle for a large tank where surface velocity is negligible):\n$$v = \\sqrt{2gh}$$\nGiven $h = 5.0\\text{ m}$ and $g = 10\\text{ m/s}^2$:\n$$v = \\sqrt{2(10)(5.0)} = \\sqrt{100} = 10\\text{ m/s}$$\n2. The cross-sectional area of the circular orifice of diameter $d = 2.0\\text{ cm} = 0.020\\text{ m}$ (radius $r = 0.010\\text{ m}$):\n$$A = \\pi r^2 = \\pi (0.010\\text{ m})^2 = \\pi \\times 10^{-4}\\text{ m}^2$$\n3. The volume rate of flow $Q$ is given by the equation of continuity:\n$$Q = A v = (\\pi \\times 10^{-4}\\text{ m}^2) \\times (10\\text{ m/s}) = \\pi \\times 10^{-3}\\text{ m}^3\\text{/s}$$\n4. Since $1\\text{ m}^3 = 1000\\text{ L}$:\n$$Q = (\\pi \\times 10^{-3}) \\times 10^3\\text{ L/s} = \\pi\\text{ L/s} \\approx 3.14\\text{ L/s}$$",
        originalityAudit: {
            problemStructure: "Hydrodynamic efflux velocity and cross-sectional volume discharge rate integration.",
            solutionMethodSignature: "Torricelli efflux formula and volumetric continuity flux calculation.",
            conceptCombination: "Bernoulli's theorem, Torricelli's law of efflux, equation of continuity, volumetric flow conversion.",
            noveltyRationale: "Tests complete translation from kinematic efflux velocity to metric volumetric flow rate."
        }
    },

    // --- 1.3 JEE Main (Physics - Properties of Solids and Liquids: Surface tension) ---
    {
        subject: 'Physics',
        chapter: 'Properties of Solids and Liquids',
        subTopic: 'Surface tension, surface energy, and capillarity',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A large spherical liquid drop of mercury of radius $R$ is pulverized isothermally into $n = 1000$ identical smaller spherical droplets of radius $r$. If the surface tension of mercury is $T$, what is the radius $r$ of each small droplet, and what is the mechanical work done against surface tension to effect this division?",
        options: [
            "$r = 0.1 R$, and work done $W = 36\\pi R^2 T$",
            "$r = 0.01 R$, and work done $W = 396\\pi R^2 T$",
            "$r = 0.1 R$, and work done $W = 40\\pi R^2 T$",
            "$r = 0.001 R$, and work done $W = 9\\pi R^2 T$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Since the liquid is incompressible, total volume is conserved:\n$$V_i = V_f \\implies \\frac{4}{3} \\pi R^3 = n \\left( \\frac{4}{3} \\pi r^3 \\right) \\implies R^3 = n r^3$$\nFor $n = 1000$:\n$$r = \\frac{R}{n^{1/3}} = \\frac{R}{(1000)^{1/3}} = \\frac{R}{10} = 0.1 R$$\n2. The initial surface area of the single large drop is:\n$$A_i = 4\\pi R^2$$\n3. The total surface area of the 1000 droplets is:\n$$A_f = n(4\\pi r^2) = 1000 \\left[ 4\\pi \\left(\\frac{R}{10}\\right)^2 \\right] = 1000 \\left( 4\\pi \\frac{R^2}{100} \\right) = 10(4\\pi R^2) = 40\\pi R^2$$\n4. The change in surface area is:\n$$\\Delta A = A_f - A_i = 40\\pi R^2 - 4\\pi R^2 = 36\\pi R^2$$\n5. The work done against surface tension equals the increase in surface energy:\n$$W = T \\Delta A = 36\\pi R^2 T$$",
        originalityAudit: {
            problemStructure: "Volumetric scaling of droplet division with surface area expansion thermodynamics.",
            solutionMethodSignature: "Volume conservation cubic-root scaling and surface energy increment calculation.",
            conceptCombination: "Surface tension, surface energy, isothermal droplet division, volume conservation.",
            noveltyRationale: "Clarifies non-linear scaling of surface area during droplet dispersion under constant volume."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY — STOICHIOMETRY & CONCENTRATIONS
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Basic Concepts: Limiting reagent) ---
    {
        subject: 'Chemistry',
        chapter: 'Some Basic Concepts in Chemistry',
        subTopic: 'Percentage composition and limiting reagent',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A closed reaction vessel contains a gaseous mixture of $10.0\\text{ g}$ of hydrogen gas ($\\text{H}_2$) and $64.0\\text{ g}$ of oxygen gas ($\\text{O}_2$). An electric spark initiates combustion according to $2\\text{H}_2(g) + \\text{O}_2(g) \\to 2\\text{H}_2\\text{O}(l)$. Which substance is the limiting reagent, what is the maximum mass of liquid water produced, and what mass of the excess reactant remains unreacted?",
        options: [
            "$\\text{O}_2$ is the limiting reagent; $72.0\\text{ g of H}_2\\text{O}$ is formed, and $2.0\\text{ g of H}_2$ remains unreacted",
            "$\\text{H}_2$ is the limiting reagent; $90.0\\text{ g of H}_2\\text{O}$ is formed, and $16.0\\text{ g of O}_2$ remains unreacted",
            "Both reactants are present in exact stoichiometric proportions; $74.0\\text{ g of H}_2\\text{O}$ is formed with no residue",
            "$\\text{O}_2$ is the limiting reagent; $36.0\\text{ g of H}_2\\text{O}$ is formed, and $6.0\\text{ g of H}_2$ remains unreacted"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Calculate initial moles of reactants:\n- Moles of $\\text{H}_2 = \\frac{10.0\\text{ g}}{2.016\\text{ g/mol}} \\approx 5.0\\text{ mol}$\n- Moles of $\\text{O}_2 = \\frac{64.0\\text{ g}}{32.0\\text{ g/mol}} = 2.0\\text{ mol}$\n2. From the stoichiometric equation $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$:\n- $1\\text{ mole of O}_2$ requires $2\\text{ moles of H}_2$.\n- Thus, $2.0\\text{ moles of O}_2$ requires $2 \\times 2.0 = 4.0\\text{ moles of H}_2$.\n3. Since $5.0\\text{ moles of H}_2$ are available ($5.0 > 4.0$):\n- **$\\text{O}_2$ is the limiting reagent**.\n- $\\text{H}_2$ is in excess.\n4. Moles of water produced:\n$$\\text{Moles of H}_2\\text{O} = 2 \\times (\\text{moles of O}_2) = 2 \\times 2.0 = 4.0\\text{ mol}$$\n$$\\text{Mass of H}_2\\text{O} = 4.0\\text{ mol} \\times 18.015\\text{ g/mol} = 72.0\\text{ g}$$\n5. Moles of excess $\\text{H}_2$ unreacted:\n$$\\text{Excess H}_2 = 5.0 - 4.0 = 1.0\\text{ mol} = 1.0\\text{ mol} \\times 2.0\\text{ g/mol} = 2.0\\text{ g}$$\n(Verifying mass conservation: $72.0\\text{ g (water)} + 2.0\\text{ g (unreacted H}_2) = 74.0\\text{ g} = 10.0\\text{ g} + 64.0\\text{ g}$).",
        originalityAudit: {
            problemStructure: "Bimolecular stoichiometric limiting reactant identification with unreacted mass conservation tracking.",
            solutionMethodSignature: "Molar ratio analysis and stoichiometric balance verification.",
            conceptCombination: "Stoichiometry, limiting reagent, product yield, mass conservation.",
            noveltyRationale: "Demands concurrent computation of limiting reactant, theoretical water mass, and exact excess mass."
        }
    },

    // --- 2.2 NEET (Chemistry - Basic Concepts: Concentration terms) ---
    {
        subject: 'Chemistry',
        chapter: 'Some Basic Concepts in Chemistry',
        subTopic: 'Concentration terms (molarity, molality, normality, mole fraction)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A bottle of concentrated laboratory sulfuric acid ($\\text{H}_2\\text{SO}_4$, molar mass $98.0\\text{ g/mol}$) is labeled as $98.0\\%$ by mass ($\\%\\text{ w/w}$) and has a solution density of $d = 1.84\\text{ g/mL}$. What are the molarity ($M$) and molality ($m$) of this sulfuric acid solution?",
        options: [
            "$\\text{Molarity} = 18.4\\text{ M}$, and $\\text{Molality} = 500\\text{ m}$",
            "$\\text{Molarity} = 18.4\\text{ M}$, and $\\text{Molality} = 18.4\\text{ m}$",
            "$\\text{Molarity} = 9.8\\text{ M}$, and $\\text{Molality} = 250\\text{ m}$",
            "$\\text{Molarity} = 36.8\\text{ M}$, and $\\text{Molality} = 100\\text{ m}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Consider a basis of $100.0\\text{ g}$ of the solution:\n- Mass of $\\text{H}_2\\text{SO}_4$ solute $= 98.0\\text{ g}$\n- Moles of solute $n = \\frac{98.0\\text{ g}}{98.0\\text{ g/mol}} = 1.0\\text{ mol}$\n- Mass of solvent ($\\text{H}_2\\text{O}$) $= 100.0\\text{ g} - 98.0\\text{ g} = 2.0\\text{ g} = 0.0020\\text{ kg}$\n2. Volume of $100.0\\text{ g}$ of solution:\n$$V = \\frac{\\text{Mass}}{\\text{Density}} = \\frac{100.0\\text{ g}}{1.84\\text{ g/mL}} = 54.348\\text{ mL} = 0.05435\\text{ L}$$\n3. **Molarity ($M$):**\n$$M = \\frac{\\text{Moles of solute}}{\\text{Volume of solution (L)}} = \\frac{1.0\\text{ mol}}{0.05435\\text{ L}} = 18.4\\text{ mol/L} = 18.4\\text{ M}$$\n(Alternatively: $M = \\frac{10 \\times (\\%\\text{w/w}) \\times d}{\\text{Molar mass}} = \\frac{10 \\times 98.0 \\times 1.84}{98.0} = 18.4\\text{ M}$)\n4. **Molality ($m$):**\n$$m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}} = \\frac{1.0\\text{ mol}}{0.0020\\text{ kg}} = 500\\text{ mol/kg} = 500\\text{ m}$$",
        originalityAudit: {
            problemStructure: "Concentration term conversion from percentage by mass and solution density.",
            solutionMethodSignature: "Basis-of-mass solvent isolation and volumetric density conversion.",
            conceptCombination: "Molarity, molality, density, mass percentage ($\\%\\text{w/w}$).",
            noveltyRationale: "Illustrates the massive divergence between molarity ($18.4\\text{ M}$) and molality ($500\\text{ m}$) in ultra-concentrated solutions."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS — AREA UNDER CURVES
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Areas: Area between two curves) ---
    {
        subject: 'Mathematics',
        chapter: 'Areas',
        subTopic: 'Area between two curves',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Find the area of the two-dimensional region completely enclosed between the parabola $y^2 = 4x$ and the straight line $y = 2x - 4$.",
        options: [
            "$9\\text{ sq units}$",
            "$\\frac{27}{2}\\text{ sq units}$",
            "$\\frac{16}{3}\\text{ sq units}$",
            "$8\\text{ sq units}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Find the intersection points of the parabola $y^2 = 4x$ and the line $y = 2x - 4$:\nFrom the line equation, express $x$ in terms of $y$:\n$$x = \\frac{y + 4}{2}$$\nSubstitute into the parabola equation:\n$$y^2 = 4 \\left( \\frac{y + 4}{2} \\right) = 2(y + 4) = 2y + 8$$\n$$y^2 - 2y - 8 = 0 \\implies (y - 4)(y + 2) = 0$$\nThus, the limits of integration in $y$ are from $y = -2$ to $y = 4$.\n2. For $y \\in [-2, 4]$, the line lies to the right of the parabola ($x_{line} \\ge x_{parabola}$):\n$$x_{line} = \\frac{y + 4}{2}, \\quad x_{parabola} = \\frac{y^2}{4}$$\n3. Integrate with respect to $y$:\n$$A = \\int_{-2}^4 \\left( x_{line} - x_{parabola} \\right) dy = \\int_{-2}^4 \\left( \\frac{y + 4}{2} - \\frac{y^2}{4} \\right) dy$$\n$$A = \\left[ \\frac{y^2}{4} + 2y - \\frac{y^3}{12} \\right]_{-2}^4$$\n4. Evaluating at the upper limit $y = 4$:\n$$\\frac{16}{4} + 2(4) - \\frac{64}{12} = 4 + 8 - \\frac{16}{3} = 12 - \\frac{16}{3} = \\frac{20}{3}$$\n5. Evaluating at the lower limit $y = -2$:\n$$\\frac{4}{4} + 2(-2) - \\frac{-8}{12} = 1 - 4 + \\frac{2}{3} = -3 + \\frac{2}{3} = -\\frac{7}{3}$$\n6. Total enclosed area:\n$$A = \\frac{20}{3} - \\left( -\\frac{7}{3} \\right) = \\frac{27}{3} = 9\\text{ sq units}$$",
        originalityAudit: {
            problemStructure: "Integration of parabolic arc bounded by secant line using horizontal slices.",
            solutionMethodSignature: "Single-integral formulation along $y$-axis to avoid piecewise $x$-segmentation.",
            conceptCombination: "Parabola and line intersection, definite integration along ordinate, area between curves.",
            noveltyRationale: "Bypasses cumbersome two-piece vertical strip integration by integrating along horizontal strips."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Areas: Area bounded by parabolas, circles, and lines) ---
    {
        subject: 'Mathematics',
        chapter: 'Areas',
        subTopic: 'Area bounded by parabolas, circles, and lines',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Find the area of the smaller region in the first quadrant bounded by the circle $x^2 + y^2 = 8$, the parabola $y^2 = 2x$, and the positive $x$-axis.",
        options: [
            "$\\pi + \\frac{2}{3}$",
            "$2\\pi - \\frac{4}{3}$",
            "$\\pi - \\frac{2}{3}$",
            "$\\frac{\\pi}{2} + \\frac{4}{3}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Find the intersection point of the circle $x^2 + y^2 = 8$ and the parabola $y^2 = 2x$ in the first quadrant ($x \\ge 0, y \\ge 0$):\n$$x^2 + 2x = 8 \\implies x^2 + 2x - 8 = 0 \\implies (x + 4)(x - 2) = 0$$\nSince $x \\ge 0$, we have $x = 2$. At $x = 2$, $y = \\sqrt{2(2)} = 2$.\nIntersection point is $(2, 2)$.\n2. The boundary curves are:\n- From $x = 0$ to $x = 2$, the upper boundary is the parabola $y = \\sqrt{2x}$.\n- From $x = 2$ to $x = \\sqrt{8} = 2\\sqrt{2}$ (the $x$-intercept of the circle), the upper boundary is the circle $y = \\sqrt{8 - x^2}$.\n3. The total area is the sum of two definite integrals:\n$$A = \\int_0^2 \\sqrt{2x} \\, dx + \\int_2^{\\sqrt{8}} \\sqrt{8 - x^2} \\, dx$$\n- Evaluating the first integral:\n$$\\int_0^2 \\sqrt{2} x^{1/2} \\, dx = \\sqrt{2} \\left[ \\frac{2}{3} x^{3/2} \\right]_0^2 = \\frac{2\\sqrt{2}}{3} (2\\sqrt{2}) = \\frac{8}{3}$$\n- Evaluating the second integral:\n$$\\int_2^{\\sqrt{8}} \\sqrt{8 - x^2} \\, dx = \\left[ \\frac{x}{2}\\sqrt{8 - x^2} + \\frac{8}{2} \\sin^{-1}\\left(\\frac{x}{\\sqrt{8}}\\right) \\right]_2^{\\sqrt{8}}$$\n$$\\text{At } x = \\sqrt{8}: \\quad 0 + 4\\sin^{-1}(1) = 4\\left(\\frac{\\pi}{2}\\right) = 2\\pi$$\n$$\\text{At } x = 2: \\quad \\frac{2}{2}\\sqrt{8 - 4} + 4\\sin^{-1}\\left(\\frac{2}{2\\sqrt{2}}\\right) = 2 + 4\\left(\\frac{\\pi}{4}\\right) = 2 + \\pi$$\n$$\\text{Second integral value} = 2\\pi - (2 + \\pi) = \\pi - 2$$\n4. Total Area:\n$$A = \\frac{8}{3} + (\\pi - 2) = \\pi + \\left( \\frac{8}{3} - 2 \\right) = \\pi + \\frac{2}{3}$$",
        originalityAudit: {
            problemStructure: "Composite area integration splitting between algebraic parabola and circular trigonometric arc.",
            solutionMethodSignature: "Piecewise partition at intersection ordinate and circular segment antiderivative.",
            conceptCombination: "Parabola-circle intersection, piecewise definite integration, circular standard integral form.",
            noveltyRationale: "Demands exact evaluation of circular arc trigonometric antiderivative combined with parabolic quadrature."
        }
    },

    // =========================================================================
    // 4. BOTANY & ZOOLOGY — GYMNOSPERMS, EXCRETION & LOCOMOTION
    // =========================================================================
    // --- 4.1 NEET (Botany - Diversity in Living World: Gymnosperms) ---
    {
        subject: 'Botany',
        chapter: 'Diversity in Living World',
        subTopic: 'Gymnosperms',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following combinations of reproductive, anatomical, and embryological characteristics is uniquely diagnostic of Gymnosperms (e.g., *Pinus* and *Cycas*)?",
        options: [
            "Naked ovules not enclosed within an ovary wall, haploid endosperm formed before fertilization, xylem composed predominantly of tracheids without true vessels (except in Gnetales), and phloem lacking companion cells",
            "Ovules completely enclosed within an ovary, triploid endosperm formed following double fertilization, and presence of companion cells in phloem",
            "Production of flagellated naked seeds that disperse through water currents, and flowers with tripetalous perianths",
            "Dominant gametophytic plant body with free-living photosynthetic archegonia enclosed in a sporocarp"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Naked Ovules:** The ovules in gymnosperms are not enclosed by any ovary wall and remain exposed both before and after fertilization. Consequently, seeds develop naked (not enclosed in fruits).\n2. **Haploid Endosperm:** In gymnosperms, double fertilization and triple fusion do not occur. The endosperm represents the **female gametophyte tissue**, which develops **before fertilization**; hence, its ploidy is strictly **haploid ($n$)**, unlike the triploid ($3n$) endosperm of angiosperms.\n3. **Vascular Anatomy:**\n- Xylem consists predominantly of **tracheids**; true vessels are absent (except in the advanced order Gnetales: *Gnetum*, *Ephedra*, *Welwitschia*).\n- Phloem contains **sieve cells and albuminous cells (Strasburger cells)**, lacking true sieve tubes and companion cells.",
        originalityAudit: {
            problemStructure: "Diagnostic botanical characterization matrix of Gymnospermae.",
            solutionMethodSignature: "Comparative anatomy, embryology, and vascular histology verification.",
            conceptCombination: "Naked ovules, haploid pre-fertilization endosperm, tracheid xylem, albuminous phloem cells.",
            noveltyRationale: "Tests simultaneously on ovule morphology, pre-fertilization ploidy, and vascular histology."
        }
    },

    // --- 4.2 NEET (Zoology - Human Physiology: Excretory Products & Elimination) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Excretory Products & Elimination',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "When glomerular filtration rate (GFR) or mean arterial blood pressure falls, which specialized renal cells initiate the corrective endocrine response, what enzymatic cascade restores filtration pressure, and which hormone counteracts this system when atrial blood pressure rises?",
        options: [
            "Juxtaglomerular (JG) cells secrete renin, converting angiotensinogen to angiotensin I and II, which triggers aldosterone secretion to reabsorb $\\text{Na}^+$ and water; Atrial Natriuretic Peptide (ANP) causes vasodilation and natriuresis to inhibit the RAAS pathway",
            "Podocytes secrete aldosterone directly into the collecting ducts; ANP stimulates the macula densa to elevate peripheral resistance",
            "Macula densa cells secrete angiotensinogen directly into the afferent arteriole; ANP stimulates vasopressin release",
            "Parietal epithelial cells of Bowman's capsule secrete antidiuretic hormone (ADH); ANP causes systemic vasoconstriction"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Renin-Angiotensin-Aldosterone System (RAAS):**\n- A fall in glomerular blood flow, glomerular blood pressure, or GFR activates the **Juxtaglomerular (JG) cells** in the juxtaglomerular apparatus to release the proteolytic enzyme **Renin** into the bloodstream.\n- Renin converts circulating **Angiotensinogen** (synthesized by the liver) into Angiotensin I, which is converted to **Angiotensin II** by Angiotensin Converting Enzyme (ACE) in pulmonary capillaries.\n- Angiotensin II is a powerful vasoconstrictor that elevates glomerular blood pressure. Simultaneously, it stimulates the adrenal cortex to release **Aldosterone**.\n- Aldosterone promotes active reabsorption of $\\text{Na}^+$ and water from the distal convoluted tubule (DCT) and collecting duct, expanding blood volume and restoring GFR.\n2. **Antagonistic Feedback via ANP:**\n- When venous return increases atrial blood pressure, the atrial walls of the heart secrete **Atrial Natriuretic Peptide (ANP)**.\n- ANP causes vasodilation of blood vessels and stimulates natriuresis (urinary excretion of $\\text{Na}^+$), thereby **inhibiting renin release and counteracting the RAAS mechanism** to reduce blood pressure.",
        originalityAudit: {
            problemStructure: "Endocrine feedback loop mechanisms of renal hemodynamics (RAAS vs ANP antagonism).",
            solutionMethodSignature: "Hormonal cascade identification and antagonistic feedback pathway analysis.",
            conceptCombination: "Juxtaglomerular cells, renin, angiotensin II, aldosterone, ANP antagonism, GFR regulation.",
            noveltyRationale: "Demands complete causal understanding of the opposing homeostatic checks between RAAS and ANP."
        }
    },

    // --- 4.3 NEET (Zoology - Human Physiology: Locomotion & Movement) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Locomotion & Movement',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "According to the Sliding Filament Theory of skeletal muscle contraction, what is the precise molecular role of calcium ions ($\\text{Ca}^{2+}$) released from the sarcoplasmic reticulum, what constitutes the mechanical power stroke, and what chemical event triggers detachment of the cross-bridge?",
        options: [
            "$\\text{Ca}^{2+}$ binds to troponin C, shifting tropomyosin away to expose myosin-binding sites on actin; the power stroke releases ADP and $\\text{P}_i$, pulling the actin filament toward the M-line; binding of a new ATP molecule to the myosin head causes cross-bridge detachment",
            "$\\text{Ca}^{2+}$ binds directly to myosin heads to catalyze actin polymerization; detachment occurs upon release of lactic acid from the sarcolemma",
            "$\\text{Ca}^{2+}$ hydrolyzes ATP to ADP directly in the synaptic cleft; detachment occurs when calcium is actively pumped into the T-tubules",
            "$\\text{Ca}^{2+}$ degrades the Z-disc to allow sarcomere lengthening; cross-bridge detachment occurs upon binding of acetylcholinesterase"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Role of $\\text{Ca}^{2+}$:** In resting muscle, the myosin-binding active sites on actin filaments are masked by the fibrous protein **tropomyosin**. When a nerve impulse arrives, depolarization spreads via T-tubules, releasing $\\text{Ca}^{2+}$ from the cisternae of the sarcoplasmic reticulum into the sarcoplasm. $\\text{Ca}^{2+}$ binds to the **troponin C** subunit of the troponin complex, inducing a conformational shift that pulls tropomyosin away, unmasking the active sites on actin.\n2. **Cross-Bridge Formation and Power Stroke:** The energized myosin head (bearing $\\text{ADP} + \\text{P}_i$) binds to the exposed actin site to form a cross-bridge. The myosin head then tilts (the **power stroke**), releasing $\\text{ADP}$ and $\\text{P}_i$ and pulling the actin filament inward toward the center of the A-band (M-line), causing sarcomere shortening.\n3. **Detachment:** A **new ATP molecule binds to the myosin head**, breaking the actin-myosin cross-bridge bond and detaching the head. Hydrolysis of this ATP by myosin ATPase re-cocks the head into its high-energy state for the next cycle.",
        originalityAudit: {
            problemStructure: "Biochemical and mechanical cycle of actomyosin cross-bridge cycling.",
            solutionMethodSignature: "Regulatory protein conformational tracking, power stroke stroke dynamics, and ATP detachment mechanics.",
            conceptCombination: "Troponin C-calcium binding, tropomyosin unmasking, power stroke, ATP-mediated cross-bridge detachment.",
            noveltyRationale: "Integrates calcium allosteric regulation with ATP-dependent detachment mechanics."
        }
    }
];

async function runBatch10() {
    console.log(`=== RUNNING PRODUCTION BATCH 10 (${batch10Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch10Questions, 'PRODUCTION_BATCH_10');
    console.log('\nBatch 10 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch10().catch(console.error);
