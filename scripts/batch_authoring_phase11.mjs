import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 11: Adiabatic Cycle, Gas Molecular Speeds, Osmotic Pressure of Polymers, Non-Ideal Azeotropes, Limit of (sin x / x)^(1/x^2), Piecewise Continuity, Menstrual LH Surge, ART ZIFT/IUT, Cell Cycle G1/S Checkpoint & Meiotic Prophase I
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch11Questions = [
    // =========================================================================
    // 1. PHYSICS — THERMODYNAMICS & KINETIC THEORY
    // =========================================================================
    // --- 1.1 JEE Main (Physics - Thermodynamics: Isothermal and adiabatic processes) ---
    {
        subject: 'Physics',
        chapter: 'Thermodynamics',
        subTopic: 'Isothermal and adiabatic processes',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "One mole of an ideal monoatomic gas ($\\gamma = \\frac{5}{3}$) expands isothermally at temperature $T_0$ from volume $V_0$ to $2V_0$ ($A \\to B$). From state $B$, it expands adiabatically to state $C$ ($V_C$) such that its final temperature drops to $T_C = \\frac{T_0}{2^{2/3}}$. What are the final volume $V_C$ and the work done $W_{B \\to C}$ by the gas during the adiabatic expansion?",
        options: [
            "$V_C = 4V_0$ and $W_{B \\to C} = \\frac{3}{2} R T_0 \\left(1 - 2^{-2/3}\\right)$",
            "$V_C = 8V_0$ and $W_{B \\to C} = 3 R T_0$",
            "$V_C = 2\\sqrt{2}V_0$ and $W_{B \\to C} = \\frac{1}{2} R T_0$",
            "$V_C = 4V_0$ and $W_{B \\to C} = R T_0 \\ln 2$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For the reversible adiabatic process $B \\to C$:\n$$T_B V_B^{\\gamma - 1} = T_C V_C^{\\gamma - 1}$$\nGiven $T_B = T_0$, $V_B = 2V_0$, and $\\gamma = \\frac{5}{3} \\implies \\gamma - 1 = \\frac{2}{3}$:\n$$T_0 (2V_0)^{2/3} = T_C V_C^{2/3}$$\n2. Substitute $T_C = \\frac{T_0}{2^{2/3}}$:\n$$T_0 (2V_0)^{2/3} = \\frac{T_0}{2^{2/3}} V_C^{2/3} \\implies 2^{2/3} (2V_0)^{2/3} = V_C^{2/3}$$\n$$(4V_0)^{2/3} = V_C^{2/3} \\implies V_C = 4V_0$$\n3. The work done during an adiabatic process for $n = 1$ mole of gas is:\n$$W_{B \\to C} = \\frac{R(T_B - T_C)}{\\gamma - 1} = \\frac{R\\left(T_0 - \\frac{T_0}{2^{2/3}}\\right)}{2/3} = \\frac{3}{2} R T_0 \\left( 1 - 2^{-2/3} \\right)$$",
        originalityAudit: {
            problemStructure: "Sequential isothermal-adiabatic multi-stage expansion with fractional power temperature ratio.",
            solutionMethodSignature: "Adiabatic state relation $T V^{\\gamma-1} = \\text{const}$ and internal energy work equivalence.",
            conceptCombination: "Isothermal state transformation, adiabatic expansion, monoatomic heat capacity, thermodynamic work.",
            noveltyRationale: "Demands exact fractional exponent manipulations linking intermediate state volumes with adiabatic work."
        }
    },

    // --- 1.2 NEET (Physics - Kinetic Theory: Mean free path and molecular speeds) ---
    {
        subject: 'Physics',
        chapter: 'Kinetic Theory of Gases',
        subTopic: 'Mean free path and molecular speeds (rms, average, most probable)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "For an ideal gas at temperature $T$, what is the exact ratio of the most probable speed ($v_{mp}$), average speed ($v_{avg}$), and root-mean-square speed ($v_{rms}$)? Furthermore, if the absolute temperature of the gas is doubled while its container volume is compressed to half its initial volume, how do $v_{rms}$ and the mean free path $\\lambda$ change?",
        options: [
            "$v_{mp} : v_{avg} : v_{rms} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3}$; $v_{rms}$ increases by a factor of $\\sqrt{2}$, while the mean free path $\\lambda$ is halved",
            "$v_{mp} : v_{avg} : v_{rms} = 1 : 1 : 1$; $v_{rms}$ quadruples, while the mean free path remains unchanged",
            "$v_{mp} : v_{avg} : v_{rms} = \\sqrt{3} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{2}$; $v_{rms}$ doubles, while the mean free path doubles",
            "$v_{mp} : v_{avg} : v_{rms} = \\sqrt{2} : \\sqrt{3} : \\sqrt{8}$; $v_{rms}$ increases by $\\sqrt{2}$, while the mean free path quadruples"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The characteristic Maxwellian molecular speeds for an ideal gas of molar mass $M$ are:\n- Most probable speed: $v_{mp} = \\sqrt{\\frac{2RT}{M}}$\n- Average speed: $v_{avg} = \\sqrt{\\frac{8RT}{\\pi M}}$\n- Root-mean-square speed: $v_{rms} = \\sqrt{\\frac{3RT}{M}}$\nTaking their ratio:\n$$v_{mp} : v_{avg} : v_{rms} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1 : 1.128 : 1.225$$\n2. When absolute temperature is doubled ($T' = 2T$):\n$$v_{rms} \\propto \\sqrt{T} \\implies v_{rms}' = \\sqrt{2} v_{rms}$$\n3. The mean free path of gas molecules of effective diameter $d$ is given by:\n$$\\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2} = \\frac{V}{\\sqrt{2}\\pi N d^2}$$\nwhere $n = \\frac{N}{V}$ is the number density of molecules.\nNotice that $\\lambda$ depends strictly on the number density (volume $V$ per fixed number of molecules $N$), independent of temperature. When the volume is halved ($V' = \\frac{V}{2}$), the number density doubles ($n' = 2n$), which reduces the mean free path to half its initial value ($\\lambda' = \\frac{\\lambda}{2}$).",
        originalityAudit: {
            problemStructure: "Maxwell-Boltzmann statistical speed ratio combined with density-dependent mean free path scaling.",
            solutionMethodSignature: "Analytical speed formula comparison and kinetic mean free path density dependence analysis.",
            conceptCombination: "Maxwell-Boltzmann distribution, molecular speed ratios, temperature scaling, mean free path.",
            noveltyRationale: "Clarifies that mean free path is strictly volume/density dependent and unaffected by temperature changes at constant volume."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY — SOLUTIONS
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Solutions: Osmotic pressure and reverse osmosis) ---
    {
        subject: 'Chemistry',
        chapter: 'Solutions',
        subTopic: 'Osmotic pressure and reverse osmosis',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "A solution prepared by dissolving $6.0\\text{ g}$ of a non-volatile, non-electrolyte synthetic polymer in $100.0\\text{ mL}$ of water at $300\\text{ K}$ develops an osmotic pressure of $\\Pi = 1.23\\text{ atm}$. What is the molar mass ($M$) of the polymer, and why is osmotic pressure measurement universally preferred over freezing point depression or boiling point elevation for determining the molar masses of high polymers and biomolecules? (Take $R = 0.0821\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$)",
        options: [
            "$M \\approx 1200\\text{ g/mol}$; preferred because osmotic pressure yields large, easily measurable magnitudes at ambient room temperature without causing thermal denaturation of sensitive macromolecules, whereas $\\Delta T_b$ and $\\Delta T_f$ are negligibly small",
            "$M \\approx 2400\\text{ g/mol}$; preferred because boiling point elevation cannot be measured in aqueous solutions",
            "$M \\approx 600\\text{ g/mol}$; preferred because macromolecules undergo complete association during freezing point determinations",
            "$M \\approx 120\\text{ g/mol}$; preferred because the van 't Hoff factor is always zero for polymers"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. From the van 't Hoff equation for osmotic pressure of dilute solutions:\n$$\\Pi = C R T = \\frac{n}{V} R T = \\left( \\frac{w}{M V} \\right) R T$$\nGiven: $w = 6.0\\text{ g}, V = 100.0\\text{ mL} = 0.100\\text{ L}, T = 300\\text{ K}, \\Pi = 1.23\\text{ atm}$:\n$$1.23 = \\frac{6.0}{M \\times 0.100} \\times (0.0821 \\times 300) = \\frac{60.0}{M} \\times 24.63 = \\frac{1477.8}{M}$$\n$$M = \\frac{1477.8}{1.23} \\approx 1201.5\\text{ g/mol} \\approx 1200\\text{ g/mol}$$\n2. **Why Osmotic Pressure is Preferred for Macromolecules:**\n- Macromolecules and biomolecules have very high molar masses, so even moderately concentrated solutions by mass have very low molarity ($< 10^{-3}\\text{ M}$).\n- Colligative properties like $\\Delta T_b$ and $\\Delta T_f$ produce extremely small changes (often $< 0.001^\\circ\\text{C}$), which are virtually undetectable with standard laboratory thermometers.\n- In contrast, osmotic pressure for the same dilute solution generates a substantial, easily measurable hydrostatic pressure ($\\approx 1.23\\text{ atm} \\approx 12.7\\text{ meters}$ of water column).\n- Furthermore, osmotic pressure is measured at room temperature, preventing the thermal denaturation or structural degradation that biomolecules suffer at boiling temperatures.",
        originalityAudit: {
            problemStructure: "Macromolecular molar mass calculation coupled with experimental methodology justification.",
            solutionMethodSignature: "Van 't Hoff osmotic equation inversion and colligative sensitivity comparison.",
            conceptCombination: "Osmotic pressure, high molar mass determination, thermal denaturation, colligative sensitivity limits.",
            noveltyRationale: "Couples quantitative molar mass calculation with the physical rationale for selecting osmotic over ebullioscopic methods."
        }
    },

    // --- 2.2 NEET (Chemistry - Solutions: Ideal/non-ideal solutions) ---
    {
        subject: 'Chemistry',
        chapter: 'Solutions',
        subTopic: 'Ideal/non-ideal solutions',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Consider two binary liquid mixtures:\n- System 1: Ethanol + Acetone\n- System 2: Acetone + Chloroform\nWhich of the following statements correctly identifies their deviations from Raoult's law and the thermodynamic signs of enthalpy and volume of mixing ($\\Delta H_{mix}$ and $\\Delta V_{mix}$)?",
        options: [
            "System 1 displays positive deviation ($\\Delta H_{mix} > 0, \\Delta V_{mix} > 0$) because acetone disrupts ethanol intermolecular hydrogen bonds; System 2 displays negative deviation ($\\Delta H_{mix} < 0, \\Delta V_{mix} < 0$) because new intermolecular hydrogen bonds form between acetone and chloroform",
            "Both systems display ideal behavior with $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$",
            "System 1 displays negative deviation ($\\Delta H_{mix} < 0$), while System 2 displays positive deviation ($\\Delta H_{mix} > 0$)",
            "Both systems display negative deviations and form maximum boiling azeotropes"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **System 1 (Ethanol + Acetone):**\n- Pure ethanol molecules are held together by strong intermolecular hydrogen bonds.\n- When acetone is added, acetone molecules get between ethanol molecules and break existing intermolecular hydrogen bonds.\n- The new solute-solvent ($A-B$) interactions are significantly weaker than the original solvent-solvent ($A-A$) hydrogen bonds.\n- This facilitates vapor escape, leading to higher vapor pressure (**positive deviation from Raoult's law**).\n- Thermodynamic parameters: $\\Delta H_{mix} > 0$ (endothermic, bond breaking absorbs heat), $\\Delta V_{mix} > 0$ (volume expands), forms a minimum boiling azeotrope.\n2. **System 2 (Acetone + Chloroform):**\n- In the pure liquids, interactions are weak dipole-dipole forces.\n- Upon mixing, chloroform's acidic hydrogen forms a strong **intermolecular hydrogen bond** with the basic carbonyl oxygen of acetone:\n$$\\text{Cl}_3\\text{C}-\\text{H} \\cdots :\\text{O}=\\text{C}(\\text{CH}_3)_2$$\n- The new $A-B$ interactions are stronger than $A-A$ and $B-B$ interactions.\n- This reduces the tendency of molecules to escape into the vapor phase (**negative deviation from Raoult's law**).\n- Thermodynamic parameters: $\\Delta H_{mix} < 0$ (exothermic), $\\Delta V_{mix} < 0$ (volume contracts), forms a maximum boiling azeotrope.",
        originalityAudit: {
            problemStructure: "Comparative intermolecular force analysis in non-ideal solutions with thermodynamic sign verification.",
            solutionMethodSignature: "Hydrogen-bond disruption vs formation comparison and Raoult deviation classification.",
            conceptCombination: "Raoult's law deviations, hydrogen bonding disruption vs formation, $\\Delta H_{mix}, \\Delta V_{mix}$, azeotropes.",
            noveltyRationale: "Demands mechanistic contrast between H-bond disruption (positive deviation) and new H-bond formation (negative deviation)."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS — LIMITS, CONTINUITY & DIFFERENTIABILITY
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Limits: Standard limits) ---
    {
        subject: 'Mathematics',
        chapter: 'Limits, Continuity & Differentiability',
        subTopic: 'Standard limits and evaluation of indeterminate forms',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Evaluate the indeterminate limit:\n$$L = \\lim_{x \\to 0} \\left( \\frac{\\sin x}{x} \\right)^{\\frac{1}{x^2}}$$",
        options: [
            "$e^{-1/6}$",
            "$e^{-1/3}$",
            "$e^{-1/2}$",
            "$1$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. As $x \\to 0$, $\\frac{\\sin x}{x} \\to 1$ and $\\frac{1}{x^2} \\to \\infty$. This is an indeterminate form of the type $1^\\infty$.\n2. Using the standard formula for $1^\\infty$ limits ($L = e^K$, where $K = \\lim g(x)[f(x) - 1]$):\n$$K = \\lim_{x \\to 0} \\frac{1}{x^2} \\left( \\frac{\\sin x}{x} - 1 \\right) = \\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}$$\n3. Applying the Maclaurin series expansion for $\\sin x$:\n$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = x - \\frac{x^3}{6} + O(x^5)$$\n$$\\sin x - x = -\\frac{x^3}{6} + O(x^5)$$\n4. Substituting this expansion into the limit expression for $K$:\n$$K = \\lim_{x \\to 0} \\frac{-\\frac{x^3}{6} + O(x^5)}{x^3} = -\\frac{1}{6}$$\n5. Therefore, the value of the limit is:\n$$L = e^K = e^{-1/6} = \\frac{1}{e^{1/6}}$$",
        originalityAudit: {
            problemStructure: "$1^\\infty$ exponential limit reduction requiring third-order Taylor series resolution.",
            solutionMethodSignature: "Logarithmic exponential transformation and Maclaurin expansion of sine.",
            conceptCombination: "$1^\\infty$ indeterminate form, Taylor series expansion, exponential limit evaluation.",
            noveltyRationale: "Bypasses triple L'Hospital differentiation through precise Maclaurin polynomial truncation."
        }
    },

    // --- 3.2 JEE Main (Mathematics - Limits: Continuity at a point) ---
    {
        subject: 'Mathematics',
        chapter: 'Limits, Continuity & Differentiability',
        subTopic: 'Continuity of functions at a point and in an interval',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Let the function $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by:\n$$f(x) = \\begin{cases} \\frac{1 - \\cos(4x)}{x^2}, & x < 0 \\\\ a, & x = 0 \\\\ \\frac{\\sqrt{x}}{\\sqrt{16 + \\sqrt{x}} - 4}, & x > 0 \\end{cases}$$\nIf $f(x)$ is continuous at $x = 0$, what is the value of the real constant $a$?",
        options: [
            "$8$",
            "$4$",
            "$16$",
            "$2$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For $f(x)$ to be continuous at $x = 0$, we must have:\n$$\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^+} f(x) = f(0) = a$$\n2. **Left-Hand Limit (LHL):**\n$$\\lim_{x \\to 0^-} \\frac{1 - \\cos(4x)}{x^2} = \\lim_{x \\to 0^-} \\frac{2\\sin^2(2x)}{x^2} = 2 \\lim_{x \\to 0^-} \\left( \\frac{\\sin(2x)}{2x} \\right)^2 \\times 4 = 2(1)^2 \\times 4 = 8$$\n3. **Right-Hand Limit (RHL):**\n$$\\lim_{x \\to 0^+} \\frac{\\sqrt{x}}{\\sqrt{16 + \\sqrt{x}} - 4}$$\nRationalize the denominator by multiplying numerator and denominator by $(\\sqrt{16 + \\sqrt{x}} + 4)$:\n$$\\lim_{x \\to 0^+} \\frac{\\sqrt{x} \\left(\\sqrt{16 + \\sqrt{x}} + 4\\right)}{(16 + \\sqrt{x}) - 16} = \\lim_{x \\to 0^+} \\frac{\\sqrt{x} \\left(\\sqrt{16 + \\sqrt{x}} + 4\\right)}{\\sqrt{x}}$$\nSince $x > 0$, cancel $\\sqrt{x}$:\n$$= \\lim_{x \\to 0^+} \\left( \\sqrt{16 + \\sqrt{x}} + 4 \\right) = \\sqrt{16 + 0} + 4 = 4 + 4 = 8$$\n4. Since $\\text{LHL} = \\text{RHL} = 8$, for continuity at $x = 0$ we require:\n$$f(0) = a = 8$$",
        originalityAudit: {
            problemStructure: "Piecewise continuity constraint combining half-angle trigonometric limits with radical rationalization.",
            solutionMethodSignature: "Trigonometric half-angle identity and radical conjugation limit evaluation.",
            conceptCombination: "Piecewise function continuity, trigonometric limit evaluation, rationalization of surds.",
            noveltyRationale: "Integrates distinct algebraic and trigonometric limit evaluation methods into a unified continuity boundary."
        }
    },

    // =========================================================================
    // 4. BOTANY & ZOOLOGY — REPRODUCTIVE CYCLES & CELL DIVISION
    // =========================================================================
    // --- 4.1 NEET (Zoology - Reproduction: Menstrual cycle phases) ---
    {
        subject: 'Zoology',
        chapter: 'Reproduction',
        subTopic: 'Menstrual cycle phases',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "During the human ovarian cycle, what endocrine event triggers ovulation on approximately day 14, what structure forms from the collapsed Graafian follicle immediately following ovulation, and what hormonal change initiates menstrual bleeding if fertilization does not occur?",
        options: [
            "A surge in Luteinizing Hormone (LH surge) triggers ovulation; the collapsed follicle transforms into the corpus luteum which secretes progesterone; in the absence of fertilization, the corpus luteum degenerates, causing a steep decline in progesterone that triggers endometrial sloughing",
            "A sudden spike in FSH triggers ovulation; the follicle transforms into the corpus albicans which secretes large amounts of estrogen",
            "A progesterone surge triggers ovulation; the follicle transforms into the placenta which secretes hCG",
            "An oxytocin surge triggers ovulation; the follicle converts into the zona pellucida which secretes relaxin"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Ovulatory Phase (Day 14):** Both LH and FSH attain peak levels around mid-cycle. Rapid secretion of LH leading to its maximum concentration (the **LH surge**) induces the rupture of the mature Graafian follicle and releases the secondary oocyte into the peritoneal cavity (**ovulation**).\n2. **Luteal (Secretory) Phase (Days 15–28):** Following ovulation, the remaining granulosa and theca cells of the ruptured follicle are vascularized and transformed into a yellow endocrine gland called the **Corpus Luteum**.\n3. The corpus luteum secretes large quantities of **Progesterone**, which maintains and vascularizes the uterine endometrium, preparing it for blastocyst implantation.\n4. **Menstruation:** If fertilization does not occur, the corpus luteum degenerates into a fibrous white scar (**Corpus Albicans**). Consequently, progesterone and estrogen levels drop precipitously. Withdrawal of progesterone causes arterial spasm in the endometrial spiral arteries, shedding the functional layer of the endometrium and triggering menstrual bleeding.",
        originalityAudit: {
            problemStructure: "Complete ovarian-uterine endocrine loop tracking from mid-cycle LH surge to luteal progesterone withdrawal.",
            solutionMethodSignature: "Pituitary-gonadotropin hormonal sequence mapping and endometrial tissue response analysis.",
            conceptCombination: "LH surge, corpus luteum, progesterone withdrawal, Graafian follicle rupture, menstruation etiology.",
            noveltyRationale: "Unifies the pituitary LH peak trigger with luteal steroidogenesis and the exact biochemical cause of menstruation."
        }
    },

    // --- 4.2 NEET (Zoology - Reproduction: Contraception and ART) ---
    {
        subject: 'Zoology',
        chapter: 'Reproduction',
        subTopic: 'Contraception methods and Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In Assisted Reproductive Technology (ART) programs under In Vitro Fertilization (IVF), which of the following correctly defines the embryological criteria distinguishing ZIFT (Zygote Intra-Fallopian Transfer) from IUT (Intra-Uterine Transfer), and explains the clinical indication for GIFT (Gamete Intra-Fallopian Transfer)?",
        options: [
            "ZIFT transfers a zygote or early embryo up to 8 blastomeres into the fallopian tube, while IUT transfers an embryo with more than 8 blastomeres into the uterus; GIFT transfers collected ova and sperm into the fallopian tube of a female who cannot ovulate but provides a normal environment for in vivo fertilization",
            "ZIFT transfers a blastocyst into the uterus, while IUT transfers unfertilized oocytes into the abdominal cavity",
            "Both ZIFT and IUT transfer embryos exclusively into the peritoneal cavity of a surrogate host",
            "GIFT is an in vitro fertilization procedure where sperm is microinjected directly into the cytoplasm of an unfertilized ovum"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. In the 'Test-Tube Baby' programme (In Vitro Fertilization followed by Embryo Transfer, IVF-ET):\n- **ZIFT (Zygote Intra-Fallopian Transfer):** The zygote or very early embryo formed in vitro (**up to 8 blastomeres**) is transferred into the **fallopian tube**.\n- **IUT (Intra-Uterine Transfer):** Embryos with **more than 8 blastomeres** (e.g., morula or blastocyst stage) are transferred directly into the **uterus** to complete implantation and gestation.\n2. **GIFT (Gamete Intra-Fallopian Transfer):**\n- Does not involve in vitro fertilization.\n- It is used for females who cannot produce their own ova (anovulatory) but whose fallopian tubes and uterus provide a suitable physiological environment for fertilization and embryonic development.\n- Unfertilized ova from a donor along with sperm from the husband are transferred directly into the fallopian tube, where **in vivo fertilization** takes place naturally.",
        originalityAudit: {
            problemStructure: "Blastomeric stage-specific embryo transfer criteria and in vitro vs in vivo ART discrimination.",
            solutionMethodSignature: "Cell cleavage count cutoff (8-cell threshold) and fertilization site verification.",
            conceptCombination: "IVF-ET, ZIFT ($< 8$ cells, fallopian tube), IUT ($> 8$ cells, uterus), GIFT (in vivo fertilization).",
            noveltyRationale: "Demands strict recall of the exact 8-blastomere morphological boundary separating tubal from uterine transfer."
        }
    },

    // --- 4.3 NEET (Botany - Cell Structure and Function: Cell cycle regulation and checkpoints) ---
    {
        subject: 'Botany',
        chapter: 'Cell Structure and Function',
        subTopic: 'Cell cycle regulation and checkpoints',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "During the eukaryotic mitotic cell cycle, at which specific transition checkpoint does the cell make an irreversible commitment to DNA replication and division, and if a diploid cell contains a DNA content of $2C$ with $2n = 16$ chromosomes during $G_1$ phase, what will be its DNA content and chromosome number at $G_2$ phase?",
        options: [
            "The $G_1/S$ checkpoint commits the cell irreversibly; at $G_2$ phase, DNA content doubles to $4C$, while the chromosome number remains unchanged at $2n = 16$",
            "The $M$ checkpoint commits the cell; at $G_2$ phase, both DNA content and chromosome number double to $4C$ and $4n = 32$",
            "The $G_2/M$ checkpoint commits the cell; at $G_2$ phase, DNA content remains $2C$, while chromosome number doubles to $32$",
            "The restriction point occurs in anaphase; at $G_2$ phase, chromosomes separate into individual monads with $1C$ DNA"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Cell Cycle Checkpoints:**\n- The **$G_1/S$ checkpoint (Restriction point / START)** is the major decision point in the eukaryotic cell cycle. Once the cell passes this checkpoint, it commits irreversibly to synthesizing DNA and undergoing division.\n2. **$S$ Phase (Synthesis Phase) Dynamics:**\n- DNA replication occurs during the $S$ phase. The amount of DNA per cell doubles from **$2C \\to 4C$**.\n- However, there is **no change in chromosome number**. Each chromosome duplicates to form two sister chromatids held together at the shared centromere. The chromosome count remains **$2n = 16$**.\n3. Therefore, as the cell enters $G_2$ phase, it contains **$4C$ DNA content** and **$2n = 16$ chromosomes**.",
        originalityAudit: {
            problemStructure: "Cell cycle checkpoint irreversibility paired with chromatid-centromere ploidy vs DNA content tracking.",
            solutionMethodSignature: "Restriction point identification and chromosome vs chromatid arithmetic verification.",
            conceptCombination: "$G_1/S$ restriction point, $S$ phase DNA doubling, chromosome number invariance, $G_2$ ploidy.",
            noveltyRationale: "Eliminates confusion between doubling of DNA mass ($2C \\to 4C$) and invariance of chromosome number ($2n$)."
        }
    },

    // --- 4.4 NEET (Botany - Cell Structure and Function: Meiosis) ---
    {
        subject: 'Botany',
        chapter: 'Cell Structure and Function',
        subTopic: 'Meiosis',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following correctly pairs the sequential sub-stages of Prophase I of Meiosis with their diagnostic cytological and biochemical events?",
        options: [
            "Zygotene — Synapsis and synaptonemal complex formation; Pachytene — Crossing over mediated by the enzyme recombinase; Diplotene — Dissolution of synaptonemal complex and appearance of X-shaped chiasmata; Diakinesis — Terminalisation of chiasmata",
            "Leptotene — Recombination nodules appear; Diplotene — Synapsis of homologous chromosomes; Pachytene — Terminalisation of chiasmata",
            "Zygotene — Nuclear envelope breakdown; Diakinesis — Crossing over between sister chromatids",
            "Pachytene — Dissolution of synaptonemal complex; Diplotene — Recombinase activation; Zygotene — Separation of sister centromeres"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Prophase I of Meiosis is divided into 5 distinct sequential stages:\n- **Leptotene:** Chromosomes become gradually visible under the light microscope as compaction continues.\n- **Zygotene:** Homologous chromosomes begin pairing together (a process called **synapsis**), accompanied by the formation of a complex tripartite nucleoprotein structure called the **synaptonemal complex**. The paired chromosomes are called bivalents (or tetrads).\n- **Pachytene:** Bivalents become clearly visible as four-stranded tetrads. **Crossing over** (exchange of genetic material between non-sister chromatids of homologous chromosomes) occurs at recombination nodules, catalyzed by the enzyme **recombinase**.\n- **Diplotene:** Marked by the **dissolution of the synaptonemal complex** and the tendency of homologous chromosomes to separate from each other except at the sites of crossovers. These X-shaped points of attachment are called **chiasmata**.\n- **Diakinesis:** Final stage of prophase I, marked by the **terminalisation of chiasmata**, complete chromosome condensation, nucleolar disappearance, and breakdown of the nuclear envelope.",
        originalityAudit: {
            problemStructure: "Complete five-stage cytological and enzymatic mapping of Meiotic Prophase I.",
            solutionMethodSignature: "Sequential morphological and enzymatic event matching across prophase I substages.",
            conceptCombination: "Synapsis, synaptonemal complex, recombinase, crossing over, chiasmata, terminalisation.",
            noveltyRationale: "Demands comprehensive sequential matching of all 4 key substages without mixing morphological and enzymatic markers."
        }
    }
];

async function runBatch11() {
    console.log(`=== RUNNING PRODUCTION BATCH 11 (${batch11Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch11Questions, 'PRODUCTION_BATCH_11');
    console.log('\nBatch 11 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch11().catch(console.error);
