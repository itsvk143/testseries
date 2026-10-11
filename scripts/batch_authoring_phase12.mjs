import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 12: Displacement Current, Stefan-Boltzmann Radiation, Salt Analysis Phosphomolybdate, Kjeldahl Nitrogen, ln(1+tan x) Integral, Fractional Part Integral, In-situ vs Ex-situ, Species-Area Humboldt, Cardiac Autonomic Control & Erythroblastosis Fetalis
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch12Questions = [
    // =========================================================================
    // 1. PHYSICS — ELECTROMAGNETIC WAVES & RADIATION
    // =========================================================================
    // --- 1.1 JEE Main (Physics - EM Waves: Displacement current) ---
    {
        subject: 'Physics',
        chapter: 'Electromagnetic Waves',
        subTopic: 'Displacement current',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A parallel-plate capacitor with circular plates of radius $R = 10.0\\text{ cm}$ and plate separation $d = 2.0\\text{ mm}$ is being charged by a steady external conduction current $I = 2.0\\text{ A}$. What is the rate of change of electric flux $\\frac{d\\Phi_E}{dt}$ through the space between the plates, and what is the magnitude of the induced magnetic field $B(r)$ at a radial distance $r = 5.0\\text{ cm}$ from the central axis of symmetry between the plates? (Take $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
        options: [
            "$\\frac{d\\Phi_E}{dt} = \\frac{2.0}{\\varepsilon_0}\\text{ V}\\cdot\\text{m/s}$, and $B(r) = 2.0\\ \\mu\\text{T}$",
            "$\\frac{d\\Phi_E}{dt} = 2.0\\text{ V}\\cdot\\text{m/s}$, and $B(r) = 4.0\\ \\mu\\text{T}$",
            "$\\frac{d\\Phi_E}{dt} = \\frac{1.0}{\\varepsilon_0}\\text{ V}\\cdot\\text{m/s}$, and $B(r) = 1.0\\ \\mu\\text{T}$",
            "$\\frac{d\\Phi_E}{dt} = \\frac{4.0}{\\varepsilon_0}\\text{ V}\\cdot\\text{m/s}$, and $B(r) = 8.0\\ \\mu\\text{T}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Inside the charging capacitor, by the Ampère-Maxwell Law, the total displacement current $I_d$ equals the external conduction current $I_c$:\n$$I_d = I_c = 2.0\\text{ A}$$\nSince $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$, the rate of change of electric flux through the entire plate area is:\n$$\\frac{d\\Phi_E}{dt} = \\frac{I_d}{\\varepsilon_0} = \\frac{2.0}{\\varepsilon_0}\\text{ V}\\cdot\\text{m/s}$$\n2. The displacement current is distributed uniformly across the cross-sectional area of the plates $A = \\pi R^2$. The displacement current enclosed by a coaxial circular path of radius $r = 5.0\\text{ cm} < R = 10.0\\text{ cm}$ is:\n$$I_{d,enc} = I_d \\cdot \\left( \\frac{\\pi r^2}{\\pi R^2} \\right) = I_d \\left(\\frac{r}{R}\\right)^2 = (2.0\\text{ A}) \\left(\\frac{5.0}{10.0}\\right)^2 = (2.0) \\left(\\frac{1}{4}\\right) = 0.50\\text{ A}$$\n3. Applying Ampère's circuital law along the circle of radius $r$:\n$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{d,enc} \\implies B(r)(2\\pi r) = \\mu_0 I_{d,enc}$$\n$$B(r) = \\frac{\\mu_0 I_{d,enc}}{2\\pi r} = \\frac{(4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A})(0.50\\text{ A})}{2\\pi (0.050\\text{ m})} = \\frac{2 \\times 10^{-7} \\times 0.50}{0.050} = 2.0 \\times 10^{-6}\\text{ T} = 2.0\\ \\mu\\text{T}$$",
        originalityAudit: {
            problemStructure: "Ampère-Maxwell displacement flux coupling with interior coaxial induced magnetic field derivation.",
            solutionMethodSignature: "Displacement current density flux ratio and circuital loop line integral.",
            conceptCombination: "Displacement current, electric flux rate of change, Ampère-Maxwell law, induced magnetic field.",
            noveltyRationale: "Demands exact application of spatial displacement current area fraction ($r^2/R^2$) to evaluate induced field."
        }
    },

    // --- 1.2 NEET (Physics - Properties of Solids and Liquids: Stefan's law) ---
    {
        subject: 'Physics',
        chapter: 'Properties of Solids and Liquids',
        subTopic: 'Stefan\'s law of radiation',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A spherical ideal black body of radius $R_1 = 12\\text{ cm}$ maintained at absolute temperature $T_1 = 500\\text{ K}$ radiates total thermal power $P_1 = 450\\text{ W}$. A second spherical ideal black body has radius $R_2 = 6.0\\text{ cm}$ and is maintained at absolute temperature $T_2 = 1000\\text{ K}$. What is the total radiant power $P_2$ emitted by the second black body into an evacuated enclosure at absolute zero?",
        options: [
            "$1800\\text{ W}$",
            "$900\\text{ W}$",
            "$3600\\text{ W}$",
            "$225\\text{ W}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. According to the Stefan-Boltzmann law, the total radiant power $P$ emitted by a spherical blackbody of radius $R$ at temperature $T$ is:\n$$P = \\sigma A T^4 = \\sigma (4\\pi R^2) T^4 = 4\\pi \\sigma R^2 T^4$$\n2. Taking the ratio of power radiated by the two blackbodies:\n$$\\frac{P_2}{P_1} = \\left( \\frac{R_2}{R_1} \\right)^2 \\left( \\frac{T_2}{T_1} \\right)^4$$\n3. Given:\n- $\\frac{R_2}{R_1} = \\frac{6.0\\text{ cm}}{12\\text{ cm}} = \\frac{1}{2}$\n- $\\frac{T_2}{T_1} = \\frac{1000\\text{ K}}{500\\text{ K}} = 2$\n4. Substituting these ratios:\n$$\\frac{P_2}{P_1} = \\left( \\frac{1}{2} \\right)^2 (2)^4 = \\left( \\frac{1}{4} \\right) \\times 16 = 4$$\n5. Therefore:\n$$P_2 = 4 P_1 = 4 \\times 450\\text{ W} = 1800\\text{ W} = 1.80\\text{ kW}$$",
        originalityAudit: {
            problemStructure: "Stefan-Boltzmann fourth-power temperature and quadratic geometric surface area scaling.",
            solutionMethodSignature: "Power ratio algebraic formulation combining radius halving with temperature doubling.",
            conceptCombination: "Stefan's law of radiation, blackbody emission, surface area geometry, temperature dependence.",
            noveltyRationale: "Demonstrates competing scaling exponents: $R^2$ area halving vs $T^4$ temperature doubling."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY — PRACTICAL CHEMISTRY & QUANTITATIVE ANALYSIS
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Practical Chemistry: Salt analysis) ---
    {
        subject: 'Chemistry',
        chapter: 'Principles Related to Practical Chemistry',
        subTopic: 'Salt analysis (cation and anion systematic detection)',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A water-soluble crystalline inorganic salt $X$ exhibits the following analytical reactions:\n(1) Its acidified aqueous solution, when treated with excess concentrated $\\text{HNO}_3$ and heated with ammonium molybdate solution, yields a characteristic canary-yellow precipitate.\n(2) Its aqueous solution forms a dark brown precipitate (iodide of Millon's base) when treated with alkaline Nessler's reagent.\n(3) When tested with concentrated $\\text{H}_2\\text{SO}_4$ and freshly prepared $\\text{FeSO}_4$ solution, no brown ring is formed.\nWhat are the cation and anion present in salt $X$, and what is the chemical formula of the canary-yellow precipitate?",
        options: [
            "Cation: $\\text{NH}_4^+$; Anion: $\\text{PO}_4^{3-}$; Canary-yellow precipitate: Ammonium phosphomolybdate, $(\\text{NH}_4)_3[\\text{P}(\\text{Mo}_3\\text{O}_{10})_4]$ or $(\\text{NH}_4)_3\\text{PO}_4 \\cdot 12\\text{MoO}_3$",
            "Cation: $\\text{Fe}^{3+}$; Anion: $\\text{SO}_4^{2-}$; Canary-yellow precipitate: Ferric molybdate",
            "Cation: $\\text{K}^+$; Anion: $\\text{NO}_3^-$; Canary-yellow precipitate: Potassium hexanitritocobaltate(III)",
            "Cation: $\\text{Al}^{3+}$; Anion: $\\text{Cl}^-$; Canary-yellow precipitate: Aluminium chloromolybdate"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Anion Identification (Test 1):**\nWhen an orthophosphate ($\\text{PO}_4^{3-}$) is heated with concentrated nitric acid and ammonium molybdate, a heavy canary-yellow crystalline precipitate of **ammonium phosphomolybdate** separates:\n$$\\text{HPO}_4^{2-} + 12(\\text{NH}_4)_2\\text{MoO}_4 + 23\\text{H}^+ \\to (\\text{NH}_4)_3[\\text{P}(\\text{Mo}_3\\text{O}_{10})_4] \\downarrow + 21\\text{NH}_4^+ + 12\\text{H}_2\\text{O}$$\nThis confirms the presence of the phosphate anion ($\\text{PO}_4^{3-}$).\n2. **Cation Identification (Test 2):**\nWhen ammonium ion ($\\text{NH}_4^+$) is treated with alkaline Nessler's reagent (potassium tetraiodomercurate(II), $\\text{K}_2[\\text{HgI}_4] + \\text{KOH}$), it forms a characteristic brown precipitate of the **iodide of Millon's base**:\n$$2\\text{K}_2[\\text{HgI}_4] + \\text{NH}_3 + 3\\text{KOH} \\to \\text{H}_2\\text{N}-\\text{Hg}-\\text{O}-\\text{Hg}-\\text{I} \\downarrow + 7\\text{KI} + 2\\text{H}_2\\text{O}$$\nThis confirms the presence of the ammonium cation ($\\text{NH}_4^+$).\n3. Test 3 rules out the nitrate anion (absence of brown ring $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$). Therefore, salt $X$ is **ammonium phosphate, $(\\text{NH}_4)_3\\text{PO}_4$**.",
        originalityAudit: {
            problemStructure: "Multi-reagent inorganic qualitative analysis synthesis with coordination precipitate formulation.",
            solutionMethodSignature: "Qualitative reaction signature matching for group zero cation and acid radical anion.",
            conceptCombination: "Ammonium phosphomolybdate test, Nessler's reagent Millon base reaction, salt analysis.",
            noveltyRationale: "Unifies complex analytical coordination chemistry reactions (phosphomolybdate and Millon's base) for definitive identification."
        }
    },

    // --- 2.2 NEET (Chemistry - Purification: Quantitative analysis) ---
    {
        subject: 'Chemistry',
        chapter: 'Purification and Characterisation of Organic Compounds',
        subTopic: 'Quantitative analysis',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In a Kjeldahl nitrogen estimation experiment, $0.50\\text{ g}$ of an organic compound is digested with concentrated $\\text{H}_2\\text{SO}_4$. The evolved ammonia gas is completely absorbed in $50.0\\text{ mL}$ of $0.10\\text{ M } \\text{H}_2\\text{SO}_4$. The excess unreacted acid requires $30.0\\text{ mL}$ of $0.10\\text{ M } \\text{NaOH}$ for complete neutralization. What is the mass percentage of nitrogen in the organic compound?",
        options: [
            "$19.6\\%$",
            "$9.8\\%$",
            "$28.0\\%$",
            "$39.2\\%$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Calculate the initial amount of sulfuric acid taken:\n$$\\text{Molarity of } \\text{H}_2\\text{SO}_4 = 0.10\\text{ M} \\implies \\text{Normality} = 0.10 \\times 2 = 0.20\\text{ N}$$\n$$\\text{Milli-equivalents of acid taken} = V \\times N = 50.0\\text{ mL} \\times 0.20\\text{ N} = 10.0\\text{ meq}$$\n2. Calculate the milli-equivalents of acid neutralized by standard $\\text{NaOH}$ (excess acid):\n$$\\text{Milli-equivalents of } \\text{NaOH} = V \\times N = 30.0\\text{ mL} \\times 0.10\\text{ N} = 3.0\\text{ meq}$$\n3. Milli-equivalents of sulfuric acid consumed by ammonia gas ($\\text{NH}_3$):\n$$\\text{meq of } \\text{NH}_3 = \\text{meq of acid taken} - \\text{meq of acid left} = 10.0 - 3.0 = 7.0\\text{ meq}$$\n4. Since $1\\text{ meq of NH}_3$ contains $1\\text{ millimole of N} = 14.0\\text{ mg of N} = 0.014\\text{ g of N}$:\n$$\\text{Mass of nitrogen} = 7.0 \\times 0.014\\text{ g} = 0.098\\text{ g}$$\n5. Percentage of nitrogen in the organic compound ($w = 0.50\\text{ g}$):\n$$\\% \\text{ N} = \\frac{\\text{Mass of nitrogen}}{\\text{Mass of compound}} \\times 100\\% = \\frac{0.098\\text{ g}}{0.50\\text{ g}} \\times 100\\% = 19.6\\%$$",
        originalityAudit: {
            problemStructure: "Back-titration Kjeldahl nitrogen quantification with dibasic acid normality conversion.",
            solutionMethodSignature: "Equivalent neutralization stoichiometry and mass fraction percentage derivation.",
            conceptCombination: "Kjeldahl's method, back-titration, normality vs molarity of $\text{H}_2\text{SO}_4$, nitrogen percentage.",
            noveltyRationale: "Prevents common dibasic normality errors ($N = 2M$) in back-titration analysis of organic nitrogen."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS — DEFINITE INTEGRALS & PROPERTIES
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Integrals: Trigonometric integrals) ---
    {
        subject: 'Mathematics',
        chapter: 'Integrals',
        subTopic: 'Trigonometric and irrational integrals',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Evaluate the definite integral:\n$$I = \\int_0^{\\pi/4} \\ln(1 + \\tan x) \\, dx$$",
        options: [
            "$\\frac{\\pi}{8} \\ln 2$",
            "$\\frac{\\pi}{4} \\ln 2$",
            "$\\frac{\\pi}{16} \\ln 2$",
            "$\\frac{\\pi}{2} \\ln 2$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Applying the property of definite integrals $\\int_0^a f(x) \\, dx = \\int_0^a f(a - x) \\, dx$ with $a = \\frac{\\pi}{4}$:\n$$I = \\int_0^{\\pi/4} \\ln\\left[ 1 + \\tan\\left( \\frac{\\pi}{4} - x \\right) \\right] dx$$\n2. Using the tangent subtraction formula $\\tan\\left(\\frac{\\pi}{4} - x\\right) = \\frac{1 - \\tan x}{1 + \\tan x}$:\n$$1 + \\tan\\left(\\frac{\\pi}{4} - x\\right) = 1 + \\frac{1 - \\tan x}{1 + \\tan x} = \\frac{1 + \\tan x + 1 - \\tan x}{1 + \\tan x} = \\frac{2}{1 + \\tan x}$$\n3. Substituting back into the integral:\n$$I = \\int_0^{\\pi/4} \\ln\\left( \\frac{2}{1 + \\tan x} \\right) dx = \\int_0^{\\pi/4} \\left[ \\ln 2 - \\ln(1 + \\tan x) \\right] dx$$\n$$I = \\ln 2 \\int_0^{\\pi/4} dx - \\int_0^{\\pi/4} \\ln(1 + \\tan x) \\, dx$$\n4. Recognizing the original integral on the right-hand side:\n$$I = \\ln 2 \\left( \\frac{\\pi}{4} - 0 \\right) - I = \\frac{\\pi}{4} \\ln 2 - I$$\n$$2I = \\frac{\\pi}{4} \\ln 2 \\implies I = \\frac{\\pi}{8} \\ln 2$$",
        originalityAudit: {
            problemStructure: "Definite logarithmic-trigonometric symmetry integral reduction via King's property.",
            solutionMethodSignature: "Compound angle tangent transformation and logarithmic quotient splitting.",
            conceptCombination: "King's property, tangent subtraction formula, logarithmic integration, definite integral symmetry.",
            noveltyRationale: "Unfolds logarithmic argument cancellation to yield an elegant closed-form fractional factor."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Integrals: Properties of definite integrals) ---
    {
        subject: 'Mathematics',
        chapter: 'Integrals',
        subTopic: 'Properties of definite integrals',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Evaluate the definite integral of the fractional part function $\\{x\\} = x - \\lfloor x \\rfloor$:\n$$I = \\int_0^{10} \\{x\\} \\, dx$$",
        options: [
            "$5$",
            "$10$",
            "$2.5$",
            "$0$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The fractional part function $\\{x\\}$ is periodic with a fundamental period of $T = 1$:\n$$\\{x + 1\\} = \\{x\\} \\quad \\forall x \\in \\mathbb{R}$$\n2. By the periodic property of definite integrals, for any function with period $T$:\n$$\\int_0^{nT} f(x) \\, dx = n \\int_0^T f(x) \\, dx \\quad (n \\in \\mathbb{Z}^+)$$\nHere $n = 10$ and $T = 1$:\n$$I = \\int_0^{10} \\{x\\} \\, dx = 10 \\int_0^1 \\{x\\} \\, dx$$\n3. On the fundamental interval $x \\in [0, 1)$, $\\lfloor x \\rfloor = 0$, so $\\{x\\} = x - 0 = x$.\n4. Evaluating the single-period integral:\n$$\\int_0^1 x \\, dx = \\left[ \\frac{x^2}{2} \\right]_0^1 = \\frac{1}{2}$$\n5. Multiplying by the number of periods:\n$$I = 10 \\times \\left( \\frac{1}{2} \\right) = 5$$",
        originalityAudit: {
            problemStructure: "Periodic piecewise fractional part function integral reduction.",
            solutionMethodSignature: "Fundamental period extraction and piecewise linear antiderivative evaluation.",
            conceptCombination: "Fractional part function, periodicity of definite integrals, floor function.",
            noveltyRationale: "Utilizes periodic integral theorem to reduce multi-period discontinuous sawtooth waves to single-period quadrature."
        }
    },

    // =========================================================================
    // 4. BOTANY & ZOOLOGY — BIODIVERSITY & CARDIOVASCULAR PHYSIOLOGY
    // =========================================================================
    // --- 4.1 NEET (Botany - Ecology: In-situ and ex-situ conservation) ---
    {
        subject: 'Botany',
        chapter: 'Ecology and Environment',
        subTopic: 'In-situ and ex-situ conservation methods',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following correctly classifies biodiversity conservation approaches into in-situ (on-site) and ex-situ (off-site) strategies?",
        options: [
            "In-situ: National Parks, Biosphere Reserves, Sacred Groves, Wildlife Sanctuaries; Ex-situ: Botanical Gardens, Zoological Parks, Cryopreservation of gametes, Seed Banks",
            "In-situ: Botanical Gardens and Zoological Parks; Ex-situ: Sacred Groves and Biosphere Reserves",
            "In-situ: Cryopreservation and Seed Banks; Ex-situ: National Parks and Wildlife Sanctuaries",
            "In-situ: Wildlife Safari Parks and Tissue Culture; Ex-situ: Sacred Groves and National Parks"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **In-situ Conservation (On-site Conservation):**\n- Protecting endangered species within their natural ecosystems and habitats so that evolutionary processes continue unhindered.\n- Examples: **National Parks**, **Wildlife Sanctuaries**, **Biosphere Reserves**, and culturally protected **Sacred Groves** (e.g., Khasi and Jaintia Hills in Meghalaya, Aravalli Hills in Rajasthan, Western Ghats).\n2. **Ex-situ Conservation (Off-site Conservation):**\n- Taking threatened animals and plants out of their natural habitat and placing them in specialized protective settings with human care.\n- Examples: **Zoological Parks**, **Botanical Gardens**, **Wildlife Safari Parks**, **Cryopreservation** of viable gametes in liquid nitrogen ($-196^\\circ\\text{C}$), in vitro **tissue culture**, and long-term storage in **Seed Banks**.",
        originalityAudit: {
            problemStructure: "Complete taxonomic and ecological categorization matrix of biodiversity conservation modalities.",
            solutionMethodSignature: "Habitat continuity vs anthropogenic isolation criterion matching.",
            conceptCombination: "In-situ conservation, ex-situ conservation, sacred groves, cryopreservation, seed banks.",
            noveltyRationale: "Demands comprehensive assignment across both traditional geographical preserves and advanced cryo-biotechnologies."
        }
    },

    // --- 4.2 NEET (Botany - Ecology: Species-Area Relationship) ---
    {
        subject: 'Botany',
        chapter: 'Ecology and Environment',
        subTopic: 'Biodiversity & Conservation',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Alexander von Humboldt observed that species richness increases with explored area, but only up to a limit. On a logarithmic scale, what is the mathematical equation describing this relationship, and what biological insight is revealed by comparing the regression slope ($Z$) of small local regions ($Z = 0.1 - 0.2$) with that of vast continental landmasses ($Z = 0.6 - 1.2$)?",
        options: [
            "$\\log S = \\log C + Z \\log A$; the slope $Z$ is markedly steeper ($0.6 - 1.2$) across entire continents because vast geographic scales incorporate diverse ecological biomes and separate evolutionary lineages",
            "$\\log S = Z \\log C - \\log A$; the slope $Z$ decreases to zero across continents because large areas suffer intense inter-specific competition",
            "$S = Z A^C$; the slope $Z$ is a dimensionless universal constant that never exceeds $0.2$ regardless of scale",
            "$\\log S = \\log A + \\log C$; the slope is always $1.0$, indicating a strictly linear increase in species with area"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Alexander von Humboldt established that within a region, species richness increases with increasing explored area up to a limit, forming a rectangular hyperbola described by:\n$$S = C A^Z$$\nwhere $S$ is species richness, $A$ is area, $C$ is the $y$-intercept, and $Z$ is the regression coefficient (slope of the line).\n2. On a logarithmic scale, this relationship linearizes into:\n$$\\log S = \\log C + Z \\log A$$\n3. **Biological Meaning of the Slope ($Z$):**\n- For small local regions (e.g., plants in Britain, birds in California, molluscs in New York State), the slope of the line is remarkably similar regardless of the taxonomic group, with $Z$ values lying between **$0.1 \\text{ and } 0.2$**.\n- However, when analyzing the species-area relationship across enormous geographical areas such as entire continents (e.g., frugivorous birds and mammals in tropical forests of different continents), the regression slope is much steeper, with $Z$ values ranging between **$0.6 \\text{ and } 1.2$**, reflecting greater habitat diversity and distinct regional evolutionary histories.",
        originalityAudit: {
            problemStructure: "Ecological biogeography power law derivation and spatial regression slope scaling interpretation.",
            solutionMethodSignature: "Logarithmic linearization and continental vs local biome slope comparison.",
            conceptCombination: "Humboldt's species-area relationship, $\\log S = \\log C + Z \\log A$, regression slope ($Z$), continental scale.",
            noveltyRationale: "Tests both the exact logarithmic formula and the biological meaning of steep continental $Z$ slopes ($0.6-1.2$)."
        }
    },

    // --- 4.3 NEET (Zoology - Human Physiology: Body Fluids & Circulation) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Body Fluids & Circulation',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Regarding autonomic neural control of cardiac activity and clinical circulatory pathologies, which of the following statements is physiologically accurate?",
        options: [
            "Sympathetic neural signals (via noradrenaline) accelerate heart rate and increase cardiac output, whereas parasympathetic signals (via acetylcholine) decrease heart rate; Angina pectoris is acute ischemic chest pain caused by inadequate oxygen delivery to the myocardium, while heart failure is the inability of the heart to pump sufficient blood to meet the metabolic demands of the body",
            "Sympathetic stimulation decreases heart rate, while parasympathetic nerves stimulate ventricular contractility; Angina pectoris represents irreversible myocardial cell necrosis",
            "Parasympathetic vagus stimulation increases heart rate; Heart failure means the sinoatrial node stops firing action potentials",
            "Both sympathetic and parasympathetic divisions stimulate the SA node simultaneously; Angina pectoris is caused exclusively by low blood platelets"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Autonomic Regulation of the Heart:**\n- The cardiovascular center in the **medulla oblongata** modulates heart activity via the autonomic nervous system:\n- **Sympathetic nerves:** Release noradrenaline (norepinephrine), which binds to $\\beta_1$-adrenergic receptors on the SA node and ventricular myocardium. This increases the rate of action potential generation at the SA node, enhances ventricular contractile force, and consequently **increases heart rate and cardiac output**.\n- **Parasympathetic nerves (Vagus nerve, CN X):** Release acetylcholine, which binds to muscarinic receptors on the SA node. This hyperpolarizes nodal cells, decreasing the rate of heartbeat and speed of conduction, thereby **decreasing cardiac output**.\n2. **Cardiovascular Pathologies:**\n- **Angina Pectoris:** A symptom of acute retrosternal chest pain occurring when insufficient oxygen reaches the heart muscle (transient myocardial ischemia, typically caused by coronary artery atherosclerosis).\n- **Heart Failure (Congestive Heart Failure):** A chronic clinical syndrome in which the heart **cannot pump blood effectively enough to meet the metabolic requirements of the body** (distinct from cardiac arrest where the heart stops beating, and myocardial infarction where heart muscle tissue undergoes ischemic necrosis).",
        originalityAudit: {
            problemStructure: "Medullary autonomic innervation contrasted with diagnostic criteria of myocardial ischemia vs pump failure.",
            solutionMethodSignature: "Neurotransmitter action matching and clinical pathology distinction.",
            conceptCombination: "Sympathetic vs parasympathetic cardiac control, noradrenaline, acetylcholine, Angina pectoris, heart failure.",
            noveltyRationale: "Demands precise differentiation between transient angina ischemia and congestive heart failure pump deficiency."
        }
    },

    // --- 4.4 NEET (Zoology - Human Physiology: Blood grouping) ---
    {
        subject: 'Zoology',
        chapter: 'Human Physiology',
        subTopic: 'Cardiac cycle, ECG, and blood grouping (ABO and Rh)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In maternal-fetal Rh incompatibility leading to Erythroblastosis Fetalis (Hemolytic Disease of the Newborn), which parental Rh phenotypes are required, why is the first pregnancy typically unaffected, and what immunopathological mechanism severely threatens subsequent pregnancies?",
        options: [
            "Requires an $\\text{Rh}^-$ mother carrying an $\\text{Rh}^+$ fetus; the first pregnancy is unaffected because placental barriers prevent maternal contact with fetal Rh antigens until delivery; at parturition, fetal blood enters maternal circulation, sensitizing the mother to produce anti-Rh IgG antibodies, which cross the placenta in subsequent $\\text{Rh}^+$ pregnancies and destroy fetal red blood cells",
            "Requires an $\\text{Rh}^+$ mother carrying an $\\text{Rh}^-$ fetus; maternal anti-Rh IgM antibodies enter the fetal circulation during the first month of gestation",
            "Requires both parents to be $\\text{Rh}^-$, with fetal erythroblasts mutating spontaneously into $\\text{Rh}^+$ cells",
            "Occurs only when the mother is blood group O and the fetus is blood group AB, independent of Rh antigens"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Parental Phenotypes:** Erythroblastosis fetalis occurs exclusively when an **$\\text{Rh}^-$ woman carries an $\\text{Rh}^+$ fetus** (the fetal Rh antigen being inherited from an $\\text{Rh}^+$ father).\n2. **First Pregnancy:** Fetal and maternal circulations are separated by the placental barrier during gestation. The mother is not exposed to the $\\text{Rh}^+$ antigen during the first pregnancy, so the first child is born normal without hemolysis.\n3. **Maternal Sensitization:** During delivery (parturition), mechanical detachment of the placenta allows microscopic amounts of fetal $\\text{Rh}^+$ blood to mix with the maternal circulation. The mother's immune system recognizes the foreign Rh antigen and develops memory B-cells that synthesize **anti-Rh antibodies**.\n4. **Subsequent Pregnancies:** If the mother conceives another $\\text{Rh}^+$ fetus, maternal **anti-Rh antibodies (of the IgG isotype, which cross the placenta)** diffuse into the fetal blood. These antibodies bind to fetal $\\text{Rh}^+$ erythrocytes, inducing severe immune hemolysis. This leads to life-threatening hemolytic anemia, kernicterus (bilirubin neurotoxicity), jaundice, and fetal death (Erythroblastosis fetalis).\n- Prevention: Administering prophylactic anti-Rh antibodies (anti-D immunoglobulin / RhoGAM) to the $\\text{Rh}^-$ mother immediately following the delivery of the first $\\text{Rh}^+$ child.",
        originalityAudit: {
            problemStructure: "Maternal-fetal alloimmunization timeline and immunoglobulin isotype transplacental mechanics.",
            solutionMethodSignature: "Placental barrier separation, intrapartum sensitization, and IgG-mediated transplacental hemolysis tracking.",
            conceptCombination: "Rh incompatibility, erythroblastosis fetalis, IgG transplacental passage, intrapartum maternal sensitization.",
            noveltyRationale: "Explains why the first pregnancy escapes hemolysis while IgG transplacental diffusion destroys erythrocytes in subsequent gestations."
        }
    }
];

async function runBatch12() {
    console.log(`=== RUNNING PRODUCTION BATCH 12 (${batch12Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch12Questions, 'PRODUCTION_BATCH_12');
    console.log('\nBatch 12 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch12().catch(console.error);
