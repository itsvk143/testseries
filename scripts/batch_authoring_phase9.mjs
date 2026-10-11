import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 9: Satellite Orbital Mechanics, Gravity Altitudes, MO Theory O2 Ions, VSEPR Geometries, Inverse Trig Equations, Statistics Variance, Ecological Pyramids & Cycles, Hormone Transduction & Oxygen Dissociation
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch9Questions = [
    // =========================================================================
    // 1. PHYSICS — GRAVITATION
    // =========================================================================
    // --- 1.1 JEE Main (Physics - Gravitation: Orbital velocity and satellite motion) ---
    {
        subject: 'Physics',
        chapter: 'Gravitation',
        subTopic: 'Orbital velocity and satellite motion',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A satellite of mass $m$ is initially revolving in a circular orbit of radius $r_1 = 2R$ around a spherical planet of mass $M$ and radius $R$. An onboard propulsion maneuver shifts the satellite into a higher circular orbit of radius $r_2 = 4R$. What is the minimum work $\\Delta E$ performed by the rocket engines during this orbital transition, and how does the orbital kinetic energy change? (Express in terms of $g$, the surface gravitational acceleration of the planet)",
        options: [
            "$\\Delta E = +\\frac{1}{8} mg R$, and the kinetic energy decreases by $\\frac{1}{8} mg R$",
            "$\\Delta E = +\\frac{1}{4} mg R$, and the kinetic energy increases by $\\frac{1}{4} mg R$",
            "$\\Delta E = +\\frac{3}{8} mg R$, and the potential energy remains unchanged",
            "$\\Delta E = +\\frac{1}{2} mg R$, and the kinetic energy decreases by $\\frac{1}{4} mg R$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For a satellite of mass $m$ in a stable circular orbit of radius $r$ around a planet of mass $M$:\n- Orbital velocity: $v_{orb} = \\sqrt{\\frac{GM}{r}}$\n- Kinetic energy: $K(r) = \\frac{1}{2} m v_{orb}^2 = \\frac{GMm}{2r}$\n- Potential energy: $U(r) = -\\frac{GMm}{r}$\n- Total mechanical energy: $E(r) = K(r) + U(r) = -\\frac{GMm}{2r}$\n2. Using $g = \\frac{GM}{R^2} \\implies GM = g R^2$:\n- In orbit 1 ($r_1 = 2R$):\n$$E_1 = -\\frac{g R^2 m}{2(2R)} = -\\frac{1}{4} mg R, \\quad K_1 = \\frac{1}{4} mg R$$\n- In orbit 2 ($r_2 = 4R$):\n$$E_2 = -\\frac{g R^2 m}{2(4R)} = -\\frac{1}{8} mg R, \\quad K_2 = \\frac{1}{8} mg R$$\n3. The work performed by the rocket engines equals the change in total mechanical energy:\n$$\\Delta E = E_2 - E_1 = -\\frac{1}{8} mg R - \\left(-\\frac{1}{4} mg R\\right) = +\\frac{1}{8} mg R$$\n4. The change in kinetic energy is:\n$$\\Delta K = K_2 - K_1 = \\frac{1}{8} mg R - \\frac{1}{4} mg R = -\\frac{1}{8} mg R$$\nThus, the thrusters perform work $\\Delta E = +\\frac{1}{8} mg R$, while the satellite slows down so that its kinetic energy decreases by $\\frac{1}{8} mg R$.",
        originalityAudit: {
            problemStructure: "Circular orbital transfer energetics with gravitational potential-kinetic partitioning.",
            solutionMethodSignature: "Mechanical energy state comparison and virial theorem kinetic energy tracking.",
            conceptCombination: "Orbital velocity, total mechanical energy, virial theorem in gravitation, rocket thruster work.",
            noveltyRationale: "Counteracts the misconception that higher orbits require greater kinetic energy by proving kinetic deceleration."
        }
    },

    // --- 1.2 NEET (Physics - Gravitation: Acceleration due to gravity) ---
    {
        subject: 'Physics',
        chapter: 'Gravitation',
        subTopic: 'Acceleration due to gravity (variation with height, depth, latitude)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "At what radial height $h$ above the Earth's surface does the acceleration due to gravity reduce to $25\\%$ of its value at the surface, and at what radial depth $d$ below the Earth's surface does it attain this exact same reduced value? (Radius of Earth $= R$)",
        options: [
            "$h = R$ and $d = \\frac{3}{4} R$",
            "$h = 2R$ and $d = \\frac{1}{2} R$",
            "$h = \\frac{R}{2}$ and $d = \\frac{3}{4} R$",
            "$h = R$ and $d = \\frac{1}{4} R$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Variation of $g$ with height $h$ above Earth's surface:**\n$$g(h) = g_0 \\left( \\frac{R}{R + h} \\right)^2$$\nGiven $g(h) = 0.25 \\, g_0 = \\frac{g_0}{4}$:\n$$\\left( \\frac{R}{R + h} \\right)^2 = \\frac{1}{4} \\implies \\frac{R}{R + h} = \\frac{1}{2} \\implies R + h = 2R \\implies h = R$$\n2. **Variation of $g$ with depth $d$ below Earth's surface:**\n$$g(d) = g_0 \\left( 1 - \\frac{d}{R} \\right)$$\nGiven $g(d) = 0.25 \\, g_0 = \\frac{g_0}{4}$:\n$$1 - \\frac{d}{R} = \\frac{1}{4} \\implies \\frac{d}{R} = 1 - \\frac{1}{4} = \\frac{3}{4} \\implies d = \\frac{3}{4} R = 0.75 R$$\nTherefore, $h = R$ and $d = \\frac{3}{4} R$.",
        originalityAudit: {
            problemStructure: "Dual radial coordinate determination for equivalent gravitational acceleration reduction.",
            solutionMethodSignature: "Inverse-square height law vs linear interior depth law comparison.",
            conceptCombination: "Gravitational acceleration with altitude, interior linear shell theorem with depth.",
            noveltyRationale: "Contrasts the non-linear external inverse-square power law against the linear interior Gauss-Newton depth law."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY — CHEMICAL BONDING & MOLECULAR GEOMETRY
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Chemical Bonding: Molecular orbital theory) ---
    {
        subject: 'Chemistry',
        chapter: 'Chemical Bonding and Molecular Structure',
        subTopic: 'Molecular orbital theory',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Applying Molecular Orbital Theory to the homonuclear diatomic oxygen species $\\text{O}_2^{2-}, \\text{O}_2^-, \\text{O}_2,$ and $\\text{O}_2^+$, which of the following statements correctly provides their bond orders, their relative bond lengths, and their magnetic character?",
        options: [
            "Bond Orders: $\\text{O}_2^{2-} (1.0) < \\text{O}_2^- (1.5) < \\text{O}_2 (2.0) < \\text{O}_2^+ (2.5)$; Bond Lengths: $\\text{O}_2^+ < \\text{O}_2 < \\text{O}_2^- < \\text{O}_2^{2-}$; only $\\text{O}_2^{2-}$ is diamagnetic while the other three species are paramagnetic",
            "Bond Orders: $\\text{O}_2^+ (1.5) < \\text{O}_2 (2.0) < \\text{O}_2^- (2.5) < \\text{O}_2^{2-} (3.0)$; Bond Lengths: $\\text{O}_2^{2-} < \\text{O}_2^- < \\text{O}_2 < \\text{O}_2^+$; all species are diamagnetic",
            "Bond Orders: $\\text{O}_2^{2-} (2.0) = \\text{O}_2^- (2.0) = \\text{O}_2 (2.0) = \\text{O}_2^+ (2.0)$; all species have identical bond lengths",
            "Bond Orders: $\\text{O}_2 (2.0) < \\text{O}_2^+ (2.0) < \\text{O}_2^{2-} (1.5) < \\text{O}_2^- (1.0)$; only $\\text{O}_2$ is paramagnetic"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For $O_2$ and its ions ($Z = 8$, valence electrons $\\ge 14$), the molecular orbital configuration follows:\n$$\\sigma_{1s}^2 \\, \\sigma^*_{1s}^2 \\, \\sigma_{2s}^2 \\, \\sigma^*_{2s}^2 \\, \\sigma_{2p_z}^2 \\, (\\pi_{2p_x}^2 = \\pi_{2p_y}^2) \\, (\\pi^*_{2p_x} = \\pi^*_{2p_y}) \\, \\sigma^*_{2p_z}$$\n2. Evaluating each species:\n- **$\\text{O}_2^+$ (15 electrons):** Antibonding configuration $(\\pi^*_{2p})^1$. Bonding $= 10$, Antibonding $= 5$. $\\text{Bond Order} = \\frac{10 - 5}{2} = 2.5$. Unpaired electrons $= 1$ (paramagnetic).\n- **$\\text{O}_2$ (16 electrons):** $(\\pi^*_{2p_x})^1 (\\pi^*_{2p_y})^1$. Bonding $= 10$, Antibonding $= 6$. $\\text{Bond Order} = \\frac{10 - 6}{2} = 2.0$. Unpaired electrons $= 2$ (paramagnetic).\n- **$\\text{O}_2^-$ (superoxide, 17 electrons):** $(\\pi^*_{2p_x})^2 (\\pi^*_{2p_y})^1$. Bonding $= 10$, Antibonding $= 7$. $\\text{Bond Order} = \\frac{10 - 7}{2} = 1.5$. Unpaired electrons $= 1$ (paramagnetic).\n- **$\\text{O}_2^{2-}$ (peroxide, 18 electrons):** $(\\pi^*_{2p_x})^2 (\\pi^*_{2p_y})^2$. Bonding $= 10$, Antibonding $= 8$. $\\text{Bond Order} = \\frac{10 - 8}{2} = 1.0$. Unpaired electrons $= 0$ (diamagnetic).\n3. Since bond length is inversely proportional to bond order:\n$$\\text{Bond Order: } \\text{O}_2^{2-} (1.0) < \\text{O}_2^- (1.5) < \\text{O}_2 (2.0) < \\text{O}_2^+ (2.5)$$\n$$\\text{Bond Length: } \\text{O}_2^+ < \\text{O}_2 < \\text{O}_2^- < \\text{O}_2^{2-}$$",
        originalityAudit: {
            problemStructure: "Comprehensive MOT orbital occupancy, bond order hierarchy, and magnetic character deduction.",
            solutionMethodSignature: "Frontier molecular orbital electron counting and bond length inverse proportionality.",
            conceptCombination: "Molecular Orbital Theory, bond order, bond length, paramagnetism vs diamagnetism, oxygen ion series.",
            noveltyRationale: "Exhaustively maps electron addition to antibonding orbitals across all 4 oxygen redox states."
        }
    },

    // --- 2.2 NEET (Chemistry - Chemical Bonding: VSEPR theory) ---
    {
        subject: 'Chemistry',
        chapter: 'Chemical Bonding and Molecular Structure',
        subTopic: 'VSEPR theory',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "According to Valence Shell Electron Pair Repulsion (VSEPR) theory, which of the following correctly describes the steric number, hybridization of the central atom, number of lone pairs, and precise molecular geometries of sulfur tetrafluoride ($\\text{SF}_4$), chlorine trifluoride ($\\text{ClF}_3$), and xenon difluoride ($\\text{XeF}_2$)?",
        options: [
            "$\\text{SF}_4$: See-saw geometry (1 lone pair); $\\text{ClF}_3$: T-shaped geometry (2 lone pairs); $\\text{XeF}_2$: Linear geometry (3 lone pairs); all three central atoms exhibit $sp^3d$ hybridization with lone pairs occupying equatorial positions",
            "$\\text{SF}_4$: Square planar (2 lone pairs); $\\text{ClF}_3$: Trigonal planar (0 lone pairs); $\\text{XeF}_2$: Bent (2 lone pairs)",
            "$\\text{SF}_4$: Tetrahedral (0 lone pairs); $\\text{ClF}_3$: Trigonal pyramidal (1 lone pair); $\\text{XeF}_2$: Linear (0 lone pairs)",
            "$\\text{SF}_4$: Octahedral (0 lone pairs); $\\text{ClF}_3$: T-shaped (1 lone pair); $\\text{XeF}_2$: Tetrahedral (2 lone pairs)"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. In all three molecules, the central atom has a steric number of 5 (trigonal bipyramidal electron geometry, $sp^3d$ hybridization). In trigonal bipyramidal coordination, lone pairs preferentially occupy **equatorial positions** to minimize strong $90^\\circ$ lone pair-bonding pair repulsions:\n- **$\\text{SF}_4$:** Sulfur has 6 valence electrons $+ 4$ bonding electrons from fluorines $= 10$ valence electrons $= 5$ electron pairs. Steric number $= 5$ (4 bond pairs $+ 1$ lone pair). With 1 equatorial lone pair, the molecular geometry is **See-saw** (distorted tetrahedron).\n- **$\\text{ClF}_3$:** Chlorine has 7 valence electrons $+ 3$ bonding electrons from fluorines $= 10$ valence electrons $= 5$ electron pairs. Steric number $= 5$ (3 bond pairs $+ 2$ lone pairs). With 2 equatorial lone pairs, the molecular geometry is **T-shaped**.\n- **$\\text{XeF}_2$:** Xenon has 8 valence electrons $+ 2$ bonding electrons from fluorines $= 10$ valence electrons $= 5$ electron pairs. Steric number $= 5$ (2 axial bond pairs $+ 3$ equatorial lone pairs). The three equatorial lone pairs cancel each other symmetrically at $120^\\circ$, leaving a strictly **Linear** molecular geometry ($180^\\circ$).",
        originalityAudit: {
            problemStructure: "Equatorial lone-pair stereochemical preference in $sp^3d$ trigonal bipyramidal geometries.",
            solutionMethodSignature: "Steric number electron counting and VSEPR molecular shape deduction.",
            conceptCombination: "VSEPR theory, steric number 5, $sp^3d$ hybridization, see-saw, T-shaped, linear geometry.",
            noveltyRationale: "Unifies the entire series of $sp^3d$ lone-pair progressions (1, 2, and 3 lone pairs) under identical equatorial minimization rules."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS — INVERSE TRIGONOMETRIC FUNCTIONS & STATISTICS
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Inverse Trig: Equations involving inverse trig functions) ---
    {
        subject: 'Mathematics',
        chapter: 'Inverse Trigonometric Functions',
        subTopic: 'Equations involving inverse trig functions',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Solve the equation for all real values of $x$:\n$$\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\frac{\\pi}{4}$$\nWhich of the following gives the complete and strictly valid real solution set?",
        options: [
            "$x = \\frac{1}{6}$ only",
            "$x = -1$ and $x = \\frac{1}{6}$",
            "$x = \\frac{1}{3}$ only",
            "$x = 1$ only"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Applying the addition formula $\\tan^{-1} A + \\tan^{-1} B = \\tan^{-1}\\left( \\frac{A + B}{1 - AB} \\right)$, which is valid provided $AB < 1$:\n$$\\tan^{-1}\\left( \\frac{2x + 3x}{1 - (2x)(3x)} \\right) = \\frac{\\pi}{4}$$\n$$\\frac{5x}{1 - 6x^2} = \\tan\\left(\\frac{\\pi}{4}\\right) = 1$$\n2. Rearranging into a quadratic equation:\n$$5x = 1 - 6x^2 \\implies 6x^2 + 5x - 1 = 0$$\nFactoring the quadratic:\n$$6x^2 + 6x - x - 1 = 0 \\implies 6x(x + 1) - 1(x + 1) = 0 \\implies (6x - 1)(x + 1) = 0$$\nThis gives two algebraic roots: $x = \\frac{1}{6}$ and $x = -1$.\n3. **Domain and Principal Value Verification:**\n- If $x = -1$:\n$$\\tan^{-1}(2(-1)) + \\tan^{-1}(3(-1)) = \\tan^{-1}(-2) + \\tan^{-1}(-3) < 0$$\nSince the sum of two negative angles is strictly negative, it cannot equal the positive value $+\\frac{\\pi}{4}$. Hence, $x = -1$ is an extraneous algebraic root.\n- If $x = \\frac{1}{6}$:\n$$AB = (2x)(3x) = 6x^2 = 6\\left(\\frac{1}{36}\\right) = \\frac{1}{6} < 1$$\n$$\\tan^{-1}\\left(\\frac{1}{3}\\right) + \\tan^{-1}\\left(\\frac{1}{2}\\right) = \\tan^{-1}\\left(\\frac{1/3 + 1/2}{1 - 1/6}\\right) = \\tan^{-1}\\left(\\frac{5/6}{5/6}\\right) = \\tan^{-1}(1) = \\frac{\\pi}{4}$$\nTherefore, the only valid real solution is $x = \\frac{1}{6}$.",
        originalityAudit: {
            problemStructure: "Inverse trigonometric algebraic transformation with essential extraneous root filtering.",
            solutionMethodSignature: "Tangential addition identity with principal range branch condition testing.",
            conceptCombination: "Inverse tangent addition formula, quadratic roots, domain restriction, extraneous root elimination.",
            noveltyRationale: "Tests critical vigilance regarding branch boundaries ($AB < 1$) where negative root $x = -1$ must be rejected."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Statistics: Variance) ---
    {
        subject: 'Mathematics',
        chapter: 'Statistics',
        subTopic: 'Variance',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "For a sample of $n = 10$ statistical observations, the arithmetic mean is $\\bar{x} = 20$ and the variance is $\\sigma^2 = 25$. If one observation of value $20$ is removed from the dataset, and two new observations of values $15$ and $25$ are subsequently added, what are the new arithmetic mean ($\\bar{x}'$) and the new variance ($(\\sigma')^2$) of the resulting 11 observations?",
        options: [
            "$\\bar{x}' = 20$ and $(\\sigma')^2 = \\frac{300}{11}$",
            "$\\bar{x}' = 22$ and $(\\sigma')^2 = 25$",
            "$\\bar{x}' = 20$ and $(\\sigma')^2 = 25$",
            "$\\bar{x}' = 19$ and $(\\sigma')^2 = \\frac{250}{11}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For the original dataset of $n = 10$ observations:\n$$\\sum_{i=1}^{10} x_i = n \\bar{x} = 10 \\times 20 = 200$$\nFrom the variance formula $\\sigma^2 = \\frac{\\sum x_i^2}{n} - (\\bar{x})^2$:\n$$25 = \\frac{\\sum x_i^2}{10} - (20)^2 = \\frac{\\sum x_i^2}{10} - 400 \\implies \\frac{\\sum x_i^2}{10} = 425 \\implies \\sum_{i=1}^{10} x_i^2 = 4250$$\n2. The modified dataset has $n' = 10 - 1 + 2 = 11$ observations.\n- New sum of observations:\n$$\\sum x_i' = 200 - 20 + 15 + 25 = 220$$\n- New arithmetic mean:\n$$\\bar{x}' = \\frac{\\sum x_i'}{n'} = \\frac{220}{11} = 20$$\n3. New sum of squares of observations:\n$$\\sum (x_i')^2 = 4250 - (20)^2 + (15)^2 + (25)^2 = 4250 - 400 + 225 + 625 = 3850 + 850 = 4700$$\n4. New variance $(\\sigma')^2$:\n$$(\\sigma')^2 = \\frac{\\sum (x_i')^2}{n'} - (\\bar{x}')^2 = \\frac{4700}{11} - (20)^2 = \\frac{4700}{11} - 400 = \\frac{4700 - 4400}{11} = \\frac{300}{11} \\approx 27.27$$",
        originalityAudit: {
            problemStructure: "Dynamic sample modification impact on statistical moments of order 1 and 2.",
            solutionMethodSignature: "Correction of $\\sum x_i$ and $\\sum x_i^2$ followed by variance recalculation.",
            conceptCombination: "Mean, variance formula, sum of squares correction, sample size adjustment.",
            noveltyRationale: "Demands accurate algebraic tracking of second moments under simultaneous observation deletion and addition."
        }
    },

    // =========================================================================
    // 4. BOTANY & ZOOLOGY — ECOLOGY & ENDOCRINE/RESPIRATORY PHYSIOLOGY
    // =========================================================================
    // --- 4.1 NEET (Botany - Ecology: Ecological pyramids) ---
    {
        subject: 'Botany',
        chapter: 'Ecology and Environment',
        subTopic: 'Ecological pyramids',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Among the three types of ecological pyramids (numbers, biomass, energy), which one is universally upright in all natural ecosystems without any exception, and in which specific biome is the ecological pyramid of biomass typically inverted?",
        options: [
            "The pyramid of energy is universally upright; the pyramid of biomass is inverted in aquatic (ocean/lake) ecosystems because the standing crop biomass of microscopic phytoplankton is much smaller than that of zooplankton and predatory fishes",
            "The pyramid of biomass is universally upright; the pyramid of numbers is inverted in temperate grassland biomes",
            "The pyramid of numbers is universally upright; the pyramid of energy is inverted in parasitic forest food webs",
            "All three pyramids are universally upright across all terrestrial and aquatic biomes"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Pyramid of Energy:** Always strictly **upright**, and can never be inverted in any ecosystem. This is a direct consequence of the Second Law of Thermodynamics and Lindeman's 10% trophic efficiency rule: as energy flows from lower to higher trophic levels, approximately $90\\%$ of energy is dissipated as metabolic heat and respiration at each transfer step, meaning the energy available at a higher trophic level is always strictly less than at the preceding level.\n2. **Pyramid of Biomass in Aquatic Ecosystems:** Typically **inverted** (spindle-shaped or upside-down). The standing crop biomass of primary producers (microscopic phytoplankton) at any single moment is small because they are minuscule, but their turnover rate and reproductive velocity are extremely high. In contrast, primary consumers (zooplankton) and secondary/tertiary consumers (large fishes and whales) have much larger individual biomass and significantly longer lifespans, resulting in a standing biomass that far exceeds that of the phytoplankton base.",
        originalityAudit: {
            problemStructure: "Thermodynamic irreversibility of energy pyramids vs standing crop turnover kinetics in aquatic biomass.",
            solutionMethodSignature: "Second law of thermodynamics application and standing crop biomass inversion analysis.",
            conceptCombination: "Pyramid of energy, 10% law, inverted pyramid of biomass in seas, phytoplankton turnover rates.",
            noveltyRationale: "Contrasts thermodynamic directional energy flow against dynamic standing crop biomass turnover rates."
        }
    },

    // --- 4.2 NEET (Botany - Ecology: Ecological succession and nutrient cycling) ---
    {
        subject: 'Botany',
        chapter: 'Ecology and Environment',
        subTopic: 'Ecological succession and nutrient cycling (carbon and phosphorus)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Comparing the global biogeochemical carbon and phosphorus cycles, what is the primary natural reservoir pool for each nutrient, and how do they fundamentally differ regarding atmospheric gaseous exchange?",
        options: [
            "The primary carbon reservoir is oceanic and atmospheric (a gaseous cycle with major respiratory and photosynthetic flux); the primary phosphorus reservoir is lithospheric rock containing phosphate minerals (a sedimentary cycle with negligible atmospheric gaseous input or output)",
            "Both carbon and phosphorus are purely atmospheric gaseous cycles with substantial rainfall deposition",
            "Phosphorus is predominantly stored in the atmosphere as phosphine gas, while carbon is stored exclusively in granite rocks",
            "The carbon cycle has no atmospheric phase, whereas the phosphorus cycle undergoes continuous microbial volatilization into the stratosphere"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Carbon Cycle (Gaseous Biogeochemical Cycle):**\n- Major reservoir: Oceans hold approximately $71\\%$ of total global dissolved carbon, while the atmosphere contains about $1\\%$ of carbon (as $\\text{CO}_2$).\n- Exchange mechanism: Involves massive bidirectional gaseous exchange through photosynthesis (carbon fixation) and respiration/combustion returning $\\text{CO}_2$ back to the atmosphere.\n2. **Phosphorus Cycle (Sedimentary Biogeochemical Cycle):**\n- Major reservoir: Lithospheric rocks, which contain phosphorus in the form of insoluble phosphate minerals ($PO_4^{3-}$).\n- Influx mechanism: Weathering of rocks releases minuscule amounts of dissolved phosphates into soil and water, which are absorbed by plant roots.\n- Fundamental differences: (a) Atmospheric inputs of phosphorus through rainfall or dust are negligible compared to carbon inputs; (b) There is virtually no respiratory or gaseous release of phosphorus into the atmosphere (no gaseous phase under biological conditions).",
        originalityAudit: {
            problemStructure: "Comparative biogeochemistry contrasting gaseous (carbon) vs sedimentary (phosphorus) cycles.",
            solutionMethodSignature: "Reservoir localization and atmospheric flux presence/absence verification.",
            conceptCombination: "Carbon cycle, phosphorus cycle, gaseous vs sedimentary cycle, rock weathering, ocean reservoir.",
            noveltyRationale: "Demands comprehensive contrast between ocean/atmospheric gaseous reservoirs and lithospheric sedimentary storage."
        }
    },

    // --- 4.3 NEET (Zoology - Human Physiology: Endocrine glands and hormones action) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Endocrine glands and hormones action',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following statements correctly differentiates the cellular mechanisms of action, receptor localization, and signal transduction pathways between hydrophilic peptide/protein hormones (e.g., FSH, Epinephrine, Insulin) and lipophilic steroid hormones (e.g., Estrogen, Cortisol, Progesterone)?",
        options: [
            "Peptide hormones bind to extracellular membrane-bound receptors and trigger second-messenger cascades ($\\text{cAMP}, \\text{IP}_3, \\text{Ca}^{2+}$) that modulate metabolic enzymes; steroid hormones cross the lipid bilayer to bind intracellular receptors, forming complexes that directly regulate nuclear gene transcription",
            "Steroid hormones bind exclusively to membrane surface receptors, while peptide hormones freely diffuse across the plasma membrane to bind nuclear DNA",
            "Both peptide and steroid hormones utilize identical cytoplasmic receptors and bypass the generation of intracellular second messengers",
            "Steroid hormones are rapidly hydrolyzed by cell surface adenylate cyclase, while peptide hormones intercalate directly into the chromosomal DNA helix"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Water-Soluble Peptide / Protein / Amine Hormones (e.g., FSH, LH, Glucagon, Insulin, Epinephrine):**\n- Cannot diffuse across the hydrophobic lipid bilayer of target cell plasma membranes.\n- Bind to specific **extracellular membrane-bound receptors** located on the cell surface.\n- Hormone-receptor binding activates G-proteins and effector enzymes (such as adenylate cyclase or phospholipase C), generating intracellular **second messengers** (cyclic AMP [$\\text{cAMP}$], inositol trisphosphate [$\\text{IP}_3$], diacylglycerol [$\\text{DAG}$], $\\text{Ca}^{2+}$).\n- These second messengers initiate phosphorylation cascades that regulate cytoplasmic enzymes and biochemical metabolism.\n2. **Lipid-Soluble Steroid and Thyroid Hormones (e.g., Estrogen, Progesterone, Testosterone, Cortisol, Thyroxine):**\n- Being lipophilic, they readily diffuse directly across the phospholipid bilayer of the target cell.\n- Bind to **intracellular receptors** (mostly nuclear receptors or cytoplasmic receptors that translocate to the nucleus).\n- The hormone-receptor complex binds to specific hormone-response elements (HRE) on the **chromosomal DNA/genome**, directly modulating gene transcription, mRNA synthesis, and subsequent protein expression.",
        originalityAudit: {
            problemStructure: "Molecular endocrinology dichotomy between cell-surface second-messenger and nuclear genomic transduction.",
            solutionMethodSignature: "Hydrophilicity vs lipophilicity membrane permeability matching and receptor site localization.",
            conceptCombination: "Membrane-bound receptors, second messengers ($\text{cAMP}, \text{IP}_3$), intracellular steroid receptors, genomic transcription.",
            noveltyRationale: "Integrates membrane biophysics with intracellular signal transduction cascades."
        }
    },

    // --- 4.4 NEET (Zoology - Human Physiology: Mechanism of breathing and gas transport) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Mechanism of breathing and gas transport (O2-Hb dissociation curve)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "The oxygen-hemoglobin dissociation curve is characteristically sigmoid. Which set of microenvironmental physiological factors in metabolically active skeletal muscle tissues induces a rightward shift of the curve (the Bohr effect), facilitating oxygen delivery to tissues?",
        options: [
            "High $p\\text{CO}_2$, low pH (increased $\\text{H}^+$ concentration), elevated temperature, and increased 2,3-bisphosphoglycerate (2,3-BPG)",
            "Low $p\\text{CO}_2$, high pH (alkalosis), decreased temperature, and reduced 2,3-bisphosphoglycerate",
            "High $p\\text{O}_2$, low $p\\text{CO}_2$, and hypothermic tissue conditions",
            "High fetal hemoglobin ($\\text{HbF}$) saturation and low lactic acid levels"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The sigmoid shape of the oxygen-hemoglobin dissociation curve reflects the cooperative binding of $\\text{O}_2$ to the four heme subunits of hemoglobin.\n2. A **shift of the curve to the right** means that at any given partial pressure of oxygen ($p\\text{O}_2$), hemoglobin has a **lower affinity for oxygen**, promoting oxygen release and unloading into surrounding tissues.\n3. In actively respiring tissues (such as exercising skeletal muscle), intense metabolism produces acidic metabolites, carbon dioxide, and heat:\n- **High $p\\text{CO}_2$ (hypercapnia):** $\\text{CO}_2$ combines with water to form carbonic acid and binds to amino terminals of hemoglobin as carbamino compounds, stabilizing the deoxygenated (Tense, T) state.\n- **Low pH / High $[\\text{H}^+]$ (acidosis):** Protons bind to specific histidine residues on hemoglobin, promoting $\\text{O}_2$ release (the **Bohr Effect**).\n- **High temperature:** Weakens the oxygen-heme bond, enhancing $\\text{O}_2$ dissociation.\n- **High 2,3-bisphosphoglycerate (2,3-BPG):** Binds to the central cavity of the hemoglobin tetramer, stabilizing the deoxygenated conformation.\n4. Conversely, in pulmonary alveoli, opposite conditions (low $p\\text{CO}_2$, high pH, lower temperature) shift the curve to the **left**, promoting oxygen loading.",
        originalityAudit: {
            problemStructure: "Allosteric modulation factors of hemoglobin oxygen affinity via the Bohr effect.",
            solutionMethodSignature: "Physiological tissue microenvironment mapping to hemoglobin allosteric rightward shift.",
            conceptCombination: "Oxygen-hemoglobin dissociation curve, Bohr effect, $p\text{CO}_2$, acidosis, temperature, 2,3-BPG.",
            noveltyRationale: "Demands comprehensive four-factor allosteric condition verification for physiological oxygen unloading."
        }
    }
];

async function runBatch9() {
    console.log(`=== RUNNING PRODUCTION BATCH 9 (${batch9Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch9Questions, 'PRODUCTION_BATCH_9');
    console.log('\nBatch 9 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch9().catch(console.error);
