import { insertBatchWithAudit } from './validate_and_insert_batch.mjs';

/**
 * PRODUCTION BATCH 6: P-Block Oxoacids, Lanthanoids, Amine Basicity, Protein Structures, Vectors, 3D Geometry, Angiosperm Fertilization & Animal Taxonomy
 * Multi-step, non-routine, very difficult MCQs for NEET & JEE Main.
 */
const batch6Questions = [
    // =========================================================================
    // 1. CHEMISTRY — INORGANIC (P-BLOCK & D-F BLOCK)
    // =========================================================================
    // --- 1.1 NEET (Chemistry - P-Block Elements: Oxoacids of phosphorus, sulfur, and halogens) ---
    {
        subject: 'Chemistry',
        chapter: 'P-Block Elements',
        subTopic: 'Oxoacids of phosphorus, sulfur, and halogens',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Among the oxoacids of phosphorus—hypophosphorous acid ($\\text{H}_3\\text{PO}_2$), orthophosphorous acid ($\\text{H}_3\\text{PO}_3$), and orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)—which one acts as the strongest reducing agent in aqueous solution (e.g., rapidly reducing aqueous $\\text{AgNO}_3$ to metallic silver), and what are its basicity and formal oxidation state of phosphorus?",
        options: [
            "$\\text{H}_3\\text{PO}_2$; basicity = 1, oxidation state = $+1$, with two direct $\\text{P-H}$ bonds providing strong reducing character",
            "$\\text{H}_3\\text{PO}_4$; basicity = 3, oxidation state = $+5$, with three ionizable $\\text{P-OH}$ groups providing strong reducing character",
            "$\\text{H}_3\\text{PO}_3$; basicity = 3, oxidation state = $+3$, with one direct $\\text{P-H}$ bond",
            "$\\text{H}_3\\text{PO}_2$; basicity = 3, oxidation state = $-1$, with zero $\\text{P-H}$ bonds"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The molecular structures of phosphorus oxoacids are characterized as follows:\n- **$\\text{H}_3\\text{PO}_2$ (Hypophosphorous / Phosphinic acid):** Contains one $\\text{P=O}$ bond, one ionizable $\\text{P-OH}$ bond, and two direct, non-ionizable $\\text{P-H}$ bonds. Since it has only one $\\text{P-OH}$ group, its basicity is 1 (monoprotic acid). The oxidation state of phosphorus is $+1$.\n- **$\\text{H}_3\\text{PO}_3$ (Orthophosphorous / Phosphonic acid):** Contains one $\\text{P=O}$ bond, two $\\text{P-OH}$ bonds, and one $\\text{P-H}$ bond. Basicity is 2 (diprotic), and phosphorus oxidation state is $+3$.\n- **$\\text{H}_3\\text{PO}_4$ (Orthophosphoric acid):** Contains one $\\text{P=O}$ bond and three $\\text{P-OH}$ bonds. Basicity is 3 (triprotic), and phosphorus oxidation state is $+5$.\n2. The reducing character of phosphorus oxoacids depends strictly on the presence of direct hydrogen-to-phosphorus ($\\text{P-H}$) bonds, which can act as hydride donors during redox reactions.\n3. Because $\\text{H}_3\\text{PO}_2$ contains two direct $\\text{P-H}$ bonds, it possesses the highest reducing potential (strongest reducing agent):\n$$4\\text{AgNO}_3 + 2\\text{H}_2\\text{O} + \\text{H}_3\\text{PO}_2 \\to 4\\text{Ag}(s) \\downarrow + \\text{H}_3\\text{PO}_4 + 4\\text{HNO}_3$$",
        originalityAudit: {
            problemStructure: "Structure-reactivity relationship between phosphorus coordination geometry and redox activity.",
            solutionMethodSignature: "Basicity determination from $\\text{P-OH}$ count and reducing strength from $\\text{P-H}$ bond count.",
            conceptCombination: "Oxoacid Lewis structures, basicity vs proton ionizability, oxidation states, reducing mechanism.",
            noveltyRationale: "Distinguishes between proton acidity ($\text{P-OH}$) and redox hydride delivery ($\text{P-H}$) in phosphorus chemistry."
        }
    },

    // --- 1.2 JEE Main (Chemistry - d and f- Block Elements: Lanthanoid contraction and consequences) ---
    {
        subject: 'Chemistry',
        chapter: 'd and f- Block Elements',
        subTopic: 'Lanthanoid contraction and consequences',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "The second and third transition series elements in Group 4, Zirconium ($\\text{Zr}$, $4d$, $Z = 40$) and Hafnium ($\\text{Hf}$, $5d$, $Z = 72$), exhibit virtually identical atomic radii ($160\\text{ pm}$ and $159\\text{ pm}$, respectively) and ionic radii ($\\text{Zr}^{4+} \\approx 79\\text{ pm}$, $\\text{Hf}^{4+} \\approx 78\\text{ pm}$). What is the physical origin of this anomaly, and which statement correctly identifies its geochemical and chemical consequence?",
        options: [
            "Ineffective shielding of the increasing nuclear charge by the diffuse $4f^{14}$ subshell; results in nearly identical ionic radii and extreme difficulty in separating $\\text{Zr}$ and $\\text{Hf}$ chemically",
            "Inert pair effect in the valence $6s$ orbital; results in lower standard reduction potentials for $5d$ elements relative to $4d$ elements",
            "Jahn-Teller tetragonal distortion of filled octahedral $d$-orbitals; results in abnormal radial expansion of the $4d$ series",
            "Relativistic mass expansion of $4d$ core electrons; results in anomalous chemical reactivity of Zirconium"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Moving down a group in the periodic table normally results in an increase in atomic radius due to the addition of an extra electron shell ($n = 4 \\to n = 5$).\n2. However, between $\\text{Zr}$ and $\\text{Hf}$, the 14 lanthanoid elements ($_{58}\\text{Ce}$ to $_{71}\\text{Lu}$) intervene, where the $4f$ subshell is sequentially filled with 14 electrons.\n3. The $4f$ orbitals have diffuse shapes and poor electron shielding efficiency. Consequently, the steady increase of $+32$ units of nuclear charge is very poorly shielded by the $4f^{14}$ electrons.\n4. This causes the effective nuclear charge ($Z_{eff}$) experienced by the outer $5d$ and $6s$ electrons to increase substantially, drawing the electron cloud inward (known as the **Lanthanoid Contraction**).\n5. This inward contraction almost exactly compensates for the expected shell expansion, causing $\\text{Zr}$ and $\\text{Hf}$ to have nearly identical radii and virtually indistinguishable chemical properties, making their separation from natural ores extraordinarily challenging.",
        originalityAudit: {
            problemStructure: "Electronic shielding deficiency in $4f$ orbitals coupled with group radius invariance consequences.",
            solutionMethodSignature: "Effective nuclear charge calculation and lanthanoid contraction consequence analysis.",
            conceptCombination: "Lanthanoid contraction, shielding efficiency of $f$-electrons, identical ionic radii pairs ($\text{Zr/Hf}$).",
            noveltyRationale: "Connects subshell quantum shielding geometries directly with macroscale separation chemistry."
        }
    },

    // =========================================================================
    // 2. CHEMISTRY — ORGANIC NITROGEN & BIOMOLECULES
    // =========================================================================
    // --- 2.1 JEE Main (Chemistry - Organic Compounds Containing Nitrogen: Basicity of amines) ---
    {
        subject: 'Chemistry',
        chapter: 'Organic Compounds Containing Nitrogen',
        subTopic: 'Basicity of amines (gas phase vs aqueous phase)',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "In the gas phase, the basicity of methyl-substituted aliphatic amines strictly follows the $+I$ inductive effect of alkyl groups: $(\\text{CH}_3)_3\\text{N} > (\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > \\text{NH}_3$. However, in aqueous solution, the basicity order shifts to: $(\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3$. Which thermodynamic factor primarily accounts for the anomalous decrease in basicity of trimethylamine in aqueous medium?",
        options: [
            "The conjugate cation $(\\text{CH}_3)_3\\text{NH}^+$ has only one hydrogen atom available for hydrogen bonding with water, resulting in markedly lower hydration enthalpy compared to $(\\text{CH}_3)_2\\text{NH}_2^+$ and $\\text{CH}_3\\text{NH}_3^+$",
            "Trimethylamine undergoes rapid unimolecular elimination into an imine in polar protic solvents",
            "The methyl groups in trimethylamine exert a strong $-I$ inductive effect when surrounded by a dielectric water shell",
            "The conjugate base of trimethylamine is stabilized by hyperconjugation with the surrounding hydronium ions"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The basicity of an amine in aqueous solution is determined by the stability of its conjugate ammonium cation ($R_n\\text{NH}_{4-n}^+$) in water.\n2. Three competing thermodynamic factors determine this stability:\n- **Inductive Effect ($+I$):** Methyl groups release electron density and disperse positive charge on nitrogen: $3^\\circ > 2^\\circ > 1^\\circ > \\text{NH}_3$.\n- **Hydration Enthalpy (Solvation):** The conjugate cation is stabilized through hydrogen bonding with water molecules. Greater number of $\\text{N-H}$ hydrogens enables greater hydrogen bonding:\n$$\\text{CH}_3\\text{NH}_3^+ \\text{ (3 H's)} > (\\text{CH}_3)_2\\text{NH}_2^+ \\text{ (2 H's)} > (\\text{CH}_3)_3\\text{NH}^+ \\text{ (1 H)}$$\nBecause $(\\text{CH}_3)_3\\text{NH}^+$ has only one hydrogen, its hydration stabilization is extremely weak.\n- **Steric Hindrance:** Three methyl groups sterically crowd the nitrogen atom, hindering the approach of solvating water dipoles.\n3. In dimethylamine ($(\\text{CH}_3)_2\\text{NH}$), the inductive stabilization and hydration enthalpy are optimally balanced, making it the strongest base. In trimethylamine, poor hydration heavily offsets the $+I$ effect, causing its basicity to fall below both the secondary and primary amines.",
        originalityAudit: {
            problemStructure: "Multi-factor thermodynamic competition (induction vs solvation vs steric hindrance) in amine basicity.",
            solutionMethodSignature: "Conjugate ammonium ion hydration energy balance and hydrogen bonding capacity.",
            conceptCombination: "Gas phase vs solution phase basicity, hydration enthalpy, steric crowding, inductive effect.",
            noveltyRationale: "Focuses on the exact microscopic thermodynamic cause (loss of hydration enthalpy) behind the anomalous $3^\circ$ basicity drop."
        }
    },

    // --- 2.2 NEET (Chemistry - Biomolecules: Primary, secondary, tertiary, and quaternary protein structures) ---
    {
        subject: 'Chemistry',
        chapter: 'Biomolecules',
        subTopic: 'Primary, secondary, tertiary, and quaternary protein structures',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following statements correctly identifies the non-covalent and covalent interactions stabilizing the secondary and tertiary structural levels of globular proteins, and describes the biochemical outcome of protein denaturation by heat or acid?",
        options: [
            "Secondary structure is stabilized predominantly by backbone hydrogen bonds ($-\\text{C=O}\\cdots\\text{H-N}-$), while tertiary structure is stabilized by diverse R-group interactions (disulfide bridges, salt bridges, hydrophobic forces); denaturation disrupts secondary, tertiary, and quaternary levels while leaving primary peptide bonds intact",
            "Secondary structure is stabilized by covalent disulfide linkages between adjacent proline residues; denaturation breaks all covalent peptide bonds releasing individual amino acids",
            "Both secondary and tertiary structures are held exclusively by high-energy phosphodiester bonds; denaturation leaves tertiary folding intact while destroying the primary sequence",
            "Quaternary structure is present in all monomeric functional proteins; denaturation selectively hydrolyzes the N-terminal amino acid"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Secondary Structure:** Refers to local regular conformations of the polypeptide chain ($\\alpha$-helix and $\\beta$-pleated sheet). It is stabilized by hydrogen bonds between the carbonyl oxygen ($-\\text{C=O}$) of one amino acid residue and the amide hydrogen ($-\\text{NH}-$) of another along the peptide backbone.\n2. **Tertiary Structure:** Represents the overall 3D folding of the polypeptide chain into a compact globular form. It is stabilized by interactions between the side-chain (R-group) residues:\n- Disulfide bonds ($-\\text{S-S}-$ covalent bonds between cysteine residues)\n- Ionic interactions (salt bridges between basic and acidic residues)\n- Hydrophobic interactions (clustering of non-polar residues in the interior)\n- Hydrogen bonds between polar R-groups\n- Van der Waals dispersion forces\n3. **Denaturation:** Exposure to physical agents (heat) or chemical agents (strong acids, bases, urea, heavy metals) disrupts the relatively weak non-covalent interactions (hydrogen bonds, ionic bonds, hydrophobic interactions) and quaternary/tertiary/secondary architecture, causing the protein to unfold and lose biological activity. However, the covalent peptide bonds ($-\\text{CO-NH}-$) forming the **primary structure** remain intact.",
        originalityAudit: {
            problemStructure: "Comprehensive conformational hierarchy and denaturation thermodynamics in protein biochemistry.",
            solutionMethodSignature: "Bond classification mapping across primary, secondary, and tertiary protein structural levels.",
            conceptCombination: "Peptide backbone hydrogen bonding, R-group tertiary interactions, covalent peptide bond resilience during denaturation.",
            noveltyRationale: "Tests exact chemical bond distinctions between backbone conformations and side-chain interactions."
        }
    },

    // =========================================================================
    // 3. MATHEMATICS — VECTORS & 3D GEOMETRY
    // =========================================================================
    // --- 3.1 JEE Main (Mathematics - Vectors: Scalar and vector products) ---
    {
        subject: 'Mathematics',
        chapter: 'Vectors',
        subTopic: 'Scalar and vector products',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Let $\\vec{a}, \\vec{b},$ and $\\vec{c}$ be three non-zero unit vectors such that $\\vec{b}$ and $\\vec{c}$ are non-collinear. If they satisfy the vector triple product relation:\n$$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = \\frac{\\vec{b} + \\vec{c}}{\\sqrt{2}}$$\nwhat are the angles $\\theta = \\angle(\\vec{a}, \\vec{b})$ and $\\phi = \\angle(\\vec{a}, \\vec{c})$, respectively?",
        options: [
            "$\\theta = \\frac{3\\pi}{4}$ and $\\phi = \\frac{\\pi}{4}$",
            "$\\theta = \\frac{\\pi}{4}$ and $\\phi = \\frac{3\\pi}{4}$",
            "$\\theta = \\frac{2\\pi}{3}$ and $\\phi = \\frac{\\pi}{3}$",
            "$\\theta = \\frac{\\pi}{2}$ and $\\phi = \\frac{\\pi}{4}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. By the vector triple product expansion identity:\n$$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$$\n2. Equating this to the given expression:\n$$(\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c} = \\frac{1}{\\sqrt{2}}\\vec{b} + \\frac{1}{\\sqrt{2}}\\vec{c}$$\n3. Since $\\vec{b}$ and $\\vec{c}$ are non-collinear unit vectors, they form a linearly independent basis in their plane. We can equate corresponding vector coefficients:\n$$\\vec{a} \\cdot \\vec{c} = \\frac{1}{\\sqrt{2}}$$\n$$-(\\vec{a} \\cdot \\vec{b}) = \\frac{1}{\\sqrt{2}} \\implies \\vec{a} \\cdot \\vec{b} = -\\frac{1}{\\sqrt{2}}$$\n4. Since $\\vec{a}, \\vec{b}, \\vec{c}$ are all unit vectors ($|\\vec{a}| = |\\vec{b}| = |\\vec{c}| = 1$):\n$$\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|} = -\\frac{1}{\\sqrt{2}} \\implies \\theta = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4} \\quad (135^\\circ)$$\n$$\\cos \\phi = \\frac{\\vec{a} \\cdot \\vec{c}}{|\\vec{a}||\\vec{c}|} = \\frac{1}{\\sqrt{2}} \\implies \\phi = \\frac{\\pi}{4} \\quad (45^\\circ)$$\nHence, $\\theta = \\frac{3\\pi}{4}$ and $\\phi = \\frac{\\pi}{4}$.",
        originalityAudit: {
            problemStructure: "Vector triple product decomposition and linear independence coefficient matching.",
            solutionMethodSignature: "BAC-CAB vector identity expansion and dot product angle derivation.",
            conceptCombination: "Vector triple product, linear independence of non-collinear vectors, scalar product angles.",
            noveltyRationale: "Demands vector basis decomposition to extract angular relationships between three vectors."
        }
    },

    // --- 3.2 JEE Main (Mathematics - 3D Geometry: Shortest distance between two skew lines) ---
    {
        subject: 'Mathematics',
        chapter: '3D Geometry',
        subTopic: 'Shortest distance between two skew lines',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "Find the shortest distance between the two non-intersecting skew lines in three-dimensional space:\n$$L_1: \\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$$\n$$L_2: \\frac{x - 2}{3} = \\frac{y - 4}{4} = \\frac{z - 5}{5}$$",
        options: [
            "$\\frac{1}{\\sqrt{6}}$",
            "$\\frac{1}{\\sqrt{3}}$",
            "$\\frac{2}{\\sqrt{6}}$",
            "$\\frac{1}{6}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. The line $L_1$ passes through point $A(1, 2, 3)$ with direction vector $\\vec{b}_1 = \\langle 2, 3, 4 \\rangle$.\n2. The line $L_2$ passes through point $B(2, 4, 5)$ with direction vector $\\vec{b}_2 = \\langle 3, 4, 5 \\rangle$.\n3. The vector connecting points $A$ and $B$ is:\n$$\\vec{AB} = \\vec{r}_2 - \\vec{r}_1 = \\langle 2 - 1, 4 - 2, 5 - 3 \\rangle = \\langle 1, 2, 2 \\rangle$$\n4. The vector perpendicular to both lines is given by the cross product $\\vec{b}_1 \\times \\vec{b}_2$:\n$$\\vec{b}_1 \\times \\vec{b}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & 3 & 4 \\\\ 3 & 4 & 5 \\end{vmatrix}$$\n$$\\vec{b}_1 \\times \\vec{b}_2 = \\hat{i}(15 - 16) - \\hat{j}(10 - 12) + \\hat{k}(8 - 9) = -\\hat{i} + 2\\hat{j} - \\hat{k} = \\langle -1, 2, -1 \\rangle$$\nMagnitude:\n$$|\\vec{b}_1 \\times \\vec{b}_2| = \\sqrt{(-1)^2 + 2^2 + (-1)^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6}$$\n5. The scalar triple product $(\\vec{r}_2 - \\vec{r}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)$ is:\n$$\\vec{AB} \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 1(-1) + 2(2) + 2(-1) = -1 + 4 - 2 = 1$$\n6. The shortest distance $d$ between the skew lines is:\n$$d = \\frac{|(\\vec{r}_2 - \\vec{r}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|} = \\frac{|1|}{\\sqrt{6}} = \\frac{1}{\\sqrt{6}}$$",
        originalityAudit: {
            problemStructure: "Analytical spatial vector projection for shortest distance between 3D skew lines.",
            solutionMethodSignature: "Cross product normal determination and scalar projection formula.",
            conceptCombination: "Parametric lines in 3D, cross product of direction vectors, scalar triple product, skew line distance.",
            noveltyRationale: "Evaluates spatial geometry mechanics with rigorous non-intersecting line distance derivation."
        }
    },

    // --- 3.3 JEE Main (Mathematics - Vectors: Collinearity and coplanarity of vectors) ---
    {
        subject: 'Mathematics',
        chapter: 'Vectors',
        subTopic: 'Collinearity and coplanarity of vectors',
        exam: 'JEE Main',
        difficulty: 'Difficult',
        question: "If the four points $A(3, 2, 1)$, $B(2, 1, 3)$, $C(1, 4, 2)$, and $D(k, 1, 4)$ in Cartesian three-dimensional space lie on the same plane (coplanar), what is the value of the parameter $k$?",
        options: [
            "$\\frac{6}{5}$",
            "$\\frac{5}{6}$",
            "$2$",
            "$-\\frac{6}{5}$"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. For four points $A, B, C, D$ to be coplanar, the three coterminous vectors $\\vec{AB}, \\vec{AC},$ and $\\vec{AD}$ originating from point $A$ must be coplanar.\n2. Finding the vector components:\n$$\\vec{AB} = B - A = \\langle 2 - 3, 1 - 2, 3 - 1 \\rangle = \\langle -1, -1, 2 \\rangle$$\n$$\\vec{AC} = C - A = \\langle 1 - 3, 4 - 2, 2 - 1 \\rangle = \\langle -2, 2, 1 \\rangle$$\n$$\\vec{AD} = D - A = \\langle k - 3, 1 - 2, 4 - 1 \\rangle = \\langle k - 3, -1, 3 \\rangle$$\n3. The condition for coplanarity is that their scalar triple product equals zero ($[\\vec{AB}, \\vec{AC}, \\vec{AD}] = 0$):\n$$\\begin{vmatrix} -1 & -1 & 2 \\\\ -2 & 2 & 1 \\\\ k - 3 & -1 & 3 \\end{vmatrix} = 0$$\n4. Expanding the determinant across the first row:\n$$-1 \\left[ (2)(3) - (1)(-1) \\right] - (-1) \\left[ (-2)(3) - (1)(k - 3) \\right] + 2 \\left[ (-2)(-1) - (2)(k - 3) \\right] = 0$$\n$$-1 [6 + 1] + 1 [-6 - k + 3] + 2 [2 - 2k + 6] = 0$$\n$$-7 + 1 [-k - 3] + 2 [8 - 2k] = 0$$\n$$-7 - k - 3 + 16 - 4k = 0$$\n$$(-7 - 3 + 16) + (-k - 4k) = 0$$\n$$6 - 5k = 0 \\implies 5k = 6 \\implies k = \\frac{6}{5}$$",
        originalityAudit: {
            problemStructure: "Four-point 3D coplanarity condition via scalar triple product determinant vanishing.",
            solutionMethodSignature: "Determinant expansion of displacement vectors for unknown parameter evaluation.",
            conceptCombination: "Position vectors, displacement vector formulation, scalar triple product, coplanarity determinant.",
            noveltyRationale: "Applies linear algebra determinant mechanics to three-dimensional coordinate geometry."
        }
    },

    // =========================================================================
    // 4. BOTANY & ZOOLOGY — PLANT REPRODUCTION & ANIMAL CLASSIFICATION
    // =========================================================================
    // --- 4.1 NEET (Botany - Reproduction in Plants: Double fertilization and triple fusion) ---
    {
        subject: 'Botany',
        chapter: 'Reproduction in Plants',
        subTopic: 'Double fertilization and triple fusion',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "In a typical monosporic 7-celled, 8-nucleate female gametophyte (embryo sac) of angiosperms, double fertilization is a defining diagnostic hallmark. Which of the following statements correctly identifies the exact cellular fusion events, the ploidy of the resulting products, and the fate of the remaining embryo sac cells?",
        options: [
            "Syngamy involves fusion of one haploid male gamete ($n$) with the egg cell ($n$) to form a diploid zygote ($2n$); triple fusion involves fusion of the second male gamete ($n$) with the diploid central cell (two polar nuclei, $2n$) to form the triploid primary endosperm nucleus ($3n$); synergids and antipodals degenerate post-fertilization",
            "Syngamy produces a triploid zygote ($3n$); triple fusion produces a tetraploid endosperm ($4n$); antipodal cells differentiate into the seed coat",
            "Both male gametes fuse simultaneously with the egg cell to form a polyploid embryo, while the central cell forms the diploid pericarp",
            "Triple fusion occurs between the vegetative tube nucleus and the two synergids to initiate embryo development"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. Double fertilization is unique to angiosperms, discovered by S.G. Nawaschin:\n- **Syngamy (True Fertilization):** One of the two haploid male gametes ($n$) delivered by the pollen tube fuses with the haploid egg nucleus ($n$) located at the micropylar end of the embryo sac. This produces the diploid zygote ($2n$), which subsequently develops into the embryo.\n- **Triple Fusion (Vegetative Fertilization):** The second haploid male gamete ($n$) migrates to the central cell and fuses with the two haploid polar nuclei ($n + n = 2n$) located within the large central cell. Because three haploid nuclei fuse together, this event is called triple fusion, and it forms the **Primary Endosperm Nucleus (PEN, $3n$)**. The central cell becomes the Primary Endosperm Cell (PEC), which develops into nutritive endosperm tissue.\n2. **Fate of Accessory Cells:** The two micropylar synergids (which guide pollen tube entry via the filiform apparatus) and the three chalazal antipodal cells degenerate shortly before or after fertilization.",
        originalityAudit: {
            problemStructure: "Comprehensive cytological mapping of double fertilization and post-fertilization cell fate in angiosperms.",
            solutionMethodSignature: "Ploidy level tracking and gametophyte cell differentiation timeline.",
            conceptCombination: "Syngamy ($2n$), triple fusion ($3n$), embryo sac organization, post-fertilization degeneration.",
            noveltyRationale: "Synthesizes ploidy calculations, nucleoplasmic fusion mechanisms, and embryological tissue fates."
        }
    },

    // --- 4.2 NEET (Zoology - Animal Kingdom: Non-chordates characteristics) ---
    {
        subject: 'Zoology',
        chapter: 'Animal Kingdom',
        subTopic: 'Non-chordates (Porifera to Hemichordata characteristics)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "A marine non-chordate organism displays the following diagnostic morphological and anatomical characteristics:\n(1) Larvae possess bilateral symmetry, while adults exhibit secondary pentaradial symmetry.\n(2) Presence of an enterocoelous true coelom and an endoskeleton composed of mesodermal calcareous ossicles.\n(3) Presence of a specialized water vascular system (ambulacral system) functioning in locomotion, food capture, and gas exchange.\n(4) Complete absence of an excretory system.\nWhich phylum does this animal represent, and what is its developmental pattern?",
        options: [
            "Phylum Echinodermata; exhibits indirect development with free-swimming ciliated bilaterally symmetrical larvae undergoing retrograde metamorphosis into radial adults",
            "Phylum Mollusca; exhibits direct development without any larval stage, characterized by a mantle cavity and radula",
            "Phylum Ctenophora; exhibits indirect development with cydippid larvae possessing 8 rows of external ciliated comb plates",
            "Phylum Hemichordata; exhibits direct development with an open circulatory system and a stomochord"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. All listed diagnostic features uniquely define **Phylum Echinodermata** (e.g., *Asterias* / starfish, *Echinus* / sea urchin, *Antedon* / sea lily):\n- **Secondary Pentaradial Symmetry:** Echinoderm larvae (e.g., bipinnaria, pluteus) are bilaterally symmetrical and free-swimming, but undergo radical metamorphosis into pentaradially symmetrical adult forms.\n- **Endoskeleton:** Unlike arthropods (chitinous exoskeleton), echinoderms possess a mesodermally derived endoskeleton made of calcareous ossicles and spines embedded in the dermis.\n- **Water Vascular System:** A unique hydraulic ambulacral system derived from the coelom; tube feet (podia) are operated by hydraulic pressure for locomotion, prey capture, and respiration.\n- **Excretory System:** Specialized excretory organs are absent; nitrogenous wastes (principally ammonia) diffuse directly through thin-walled papulae (dermal branchiae) and tube feet into surrounding seawater.\n2. Development is **indirect** with free-swimming, ciliated, bilaterally symmetrical larvae.",
        originalityAudit: {
            problemStructure: "Phylum identification from complete organ-system and embryological symmetry signature.",
            solutionMethodSignature: "Taxonomic characterization matching and developmental symmetry transition analysis.",
            conceptCombination: "Pentaradial vs bilateral symmetry, water vascular system, absence of excretory system, echinoderm metamorphosis.",
            noveltyRationale: "Integrates developmental symmetry inversion with unique anatomical coelomic adaptations."
        }
    },

    // --- 4.3 NEET (Zoology - Animal Kingdom: Chordata) ---
    {
        subject: 'Zoology',
        chapter: 'Animal Kingdom',
        subTopic: 'Chordata (Protochordata, Cyclostomata, Chondrichthyes, Osteichthyes)',
        exam: 'NEET',
        difficulty: 'Difficult',
        question: "Which of the following comparative anatomical statements correctly distinguishes cartilaginous fishes (Chondrichthyes) from bony fishes (Osteichthyes)?",
        options: [
            "Chondrichthyes possess placoid scales, a ventral mouth, exposed gill slits without an operculum, pelvic claspers in males, and lack an air bladder (requiring continuous swimming to avoid sinking); Osteichthyes possess cycloid/ctenoid scales, a terminal mouth, an operculum covering 4 pairs of gills, and an air bladder providing neutral buoyancy",
            "Chondrichthyes possess an air bladder for hydrostatic buoyancy, an operculum covering their gills, and fertilize externally; Osteichthyes possess claspers in males and internal fertilization",
            "Chondrichthyes have a 3-chambered heart with two atria and one ventricle; Osteichthyes have a 2-chambered venous heart",
            "Both Chondrichthyes and Osteichthyes are homeothermic (warm-blooded) vertebrates with bony endoskeletons and internal viviparous development"
        ],
        correctAnswer: 0,
        correctOption: 'a',
        explanation: "1. **Class Chondrichthyes (e.g., *Scoliodon* / dogfish, *Pristis* / sawfish, *Carcharodon* / great white shark):**\n- Endoskeleton is completely cartilaginous.\n- Mouth is located ventrally.\n- Notochord is persistent throughout life.\n- Gill slits are separate and exposed, lacking an operculum (gill cover) except in chimaeras.\n- Skin is covered with microscopic, backward-pointing tooth-like **placoid scales**.\n- **Air bladder is absent**; therefore, they must swim constantly to avoid sinking.\n- Heart is 2-chambered (one auricle and one ventricle, single venous circuit).\n- In males, pelvic fins bear copulatory organs called **claspers**; fertilization is internal, and many are viviparous.\n2. **Class Osteichthyes (e.g., *Labeo* / rohu, *Catla*, *Betta*, *Exocoetus* / flying fish):**\n- Endoskeleton is largely bony.\n- Mouth is usually terminal.\n- Four pairs of gills covered by a bony **operculum** on each side.\n- Skin is covered with **cycloid or ctenoid scales**.\n- **Air bladder (swim bladder) is present**, regulating buoyancy and enabling the fish to remain suspended without swimming.\n- Males lack claspers; fertilization is usually external, and most are oviparous.",
        originalityAudit: {
            problemStructure: "Comprehensive multi-character comparative matrix between Chondrichthyes and Osteichthyes.",
            solutionMethodSignature: "Anatomical trait matrix verification across integument, respiration, buoyancy, and reproduction.",
            conceptCombination: "Placoid vs cycloid scales, opercular presence, swim bladder buoyancy physics, male pelvic claspers.",
            noveltyRationale: "Demands comprehensive multi-system contrast (buoyancy, scales, gill anatomy, reproduction) without single-trait oversimplification."
        }
    }
];

async function runBatch6() {
    console.log(`=== RUNNING PRODUCTION BATCH 6 (${batch6Questions.length} QUESTIONS) ===\n`);
    const results = await insertBatchWithAudit(batch6Questions, 'PRODUCTION_BATCH_6');
    console.log('\nBatch 6 Execution Results:', JSON.stringify(results, null, 2));
}

runBatch6().catch(console.error);

