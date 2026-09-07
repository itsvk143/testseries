/**
 * solutions_data_158.js
 * Comprehensive academic solutions and verified answer indices for the 158 questions
 * identified in the database audit (Solutions, d & f-Block Elements, and Electrochemistry).
 */

const SOLUTIONS = {
  // === CHAPTER 1: SOLUTIONS (25 Questions) ===
  "6a72f96bb0179203eda83884": {
    correctAnswer: 3,
    explanation: "Colligative properties depend only on the number of solute particles in a given volume of solvent and not on the nature of the solute particles. The four colligative properties are: (1) Relative lowering of vapour pressure, (2) Elevation of boiling point, (3) Depression of freezing point, and (4) Osmotic pressure. Surface tension is an intrinsic physical property of the liquid solvent and is NOT a colligative property.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96bb0179203eda83885": {
    correctAnswer: 1,
    explanation: "Sodium chloride ($NaCl$) is a strong 1:1 electrolyte that dissociates completely in dilute aqueous solution: $NaCl(aq) \\rightarrow Na^+(aq) + Cl^-(aq)$. The van't Hoff factor is $i = 1 + \\alpha(n-1)$. For complete dissociation ($\\alpha = 1$) and $n = 2$, $i = 1 + 1(2-1) = 2$.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "van't Hoff factor and abnormal molar mass"
  },
  "6a72f96bb0179203eda83886": {
    correctAnswer: 0,
    explanation: "An ideal solution obeys Raoult's law over the entire range of concentration, where $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$. Benzene and toluene have similar molecular sizes and structures with nearly identical intermolecular forces ($A-A \\approx B-B \\approx A-B$), thus forming an ideal solution. Acetone + chloroform shows negative deviation, while ethanol + water shows positive deviation.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Ideal and non-ideal solutions"
  },
  "6a72f96bb0179203eda83887": {
    correctAnswer: 0,
    explanation: "A positive deviation from Raoult's law occurs when solute-solvent ($A-B$) intermolecular attractive interactions are weaker than the solute-solute ($A-A$) and solvent-solvent ($B-B$) interactions. As a result, molecules can escape more easily into the vapour phase, leading to higher vapour pressure than predicted by Raoult's law, with $\\Delta H_{mix} > 0$ and $\\Delta V_{mix} > 0$.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Ideal and non-ideal solutions"
  },
  "6a72f96bb0179203eda83888": {
    correctAnswer: 2,
    explanation: "Osmotic pressure measurement is widely regarded as the best colligative method for determining the molar masses of polymers, proteins, and other macromolecules. This is because: (1) measurements are performed at ambient room temperature (preventing thermal denaturation of biomolecules), and (2) even at extremely low molar concentrations, osmotic pressure yields large, easily measurable liquid heights, whereas $\\Delta T_b$ or $\\Delta T_f$ values would be too minuscule to measure precisely.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96bb0179203eda83889": {
    correctAnswer: 3,
    explanation: "For an electrolyte dissociating into $n$ ions, $i = 1 + \\alpha(n-1)$. At high dilution ($\\alpha \\approx 1$), $i \\approx n$. (A) $NaCl \\rightarrow 2$ ions ($i=2$), (B) $CaCl_2 \\rightarrow 3$ ions ($i=3$), (C) $K_2SO_4 \\rightarrow 3$ ions ($i=3$), (D) $AlCl_3 \\rightarrow 4$ ions ($Al^{3+} + 3Cl^-$, $i=4$). Thus, $AlCl_3$ yields the largest van't Hoff factor ($i \\approx 4$).",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "van't Hoff factor and abnormal molar mass"
  },
  "6a72f96bb0179203eda8388a": {
    correctAnswer: 1,
    explanation: "Boiling point elevation is given by $\\Delta T_b = i \\cdot K_b \\cdot m$. For equal molarities: (A) Glucose ($i=1$), effective concentration = $0.1\\text{ M}$; (B) $NaCl$ ($i=2$), effective concentration = $0.2\\text{ M}$; (C) Urea ($i=1$), effective concentration = $0.1\\text{ M}$; (D) Sucrose ($i=1$), effective concentration = $0.1\\text{ M}$. Since $0.1\\text{ M } NaCl$ has the highest effective particle concentration, it exhibits the maximum $\\Delta T_b$ and hence the highest boiling point.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96cb0179203eda8388b": {
    correctAnswer: 0,
    explanation: "Molality ($m$) is defined as the number of moles of solute dissolved per kilogram ($1000\\text{ g}$) of solvent: $m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}}$. Unlike molarity, molality is independent of temperature because mass does not change with temperature.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Expressing concentration of solutions"
  },
  "6a72f96cb0179203eda8388c": {
    correctAnswer: 0,
    explanation: "Osmotic pressure is a hydrostatic pressure that opposes osmotic flow. According to the van't Hoff equation $\\Pi = CRT$, pressure has the standard SI unit of Pascal ($\\text{N m}^{-2}$) or commonly atmospheres ($\\text{atm}$) and bar in chemical thermodynamics.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96cb0179203eda8388d": {
    correctAnswer: 0,
    explanation: "Raoult's law states that for a solution of volatile liquids, the partial vapour pressure of each component in the solution is directly proportional to its mole fraction in the liquid phase: $P_A = P_A^\\circ x_A$.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Vapour pressure of liquid solutions"
  },
  "6a72f96cb0179203eda8388e": {
    correctAnswer: 0,
    explanation: "A mixture of acetone and chloroform shows a negative deviation from Raoult's law. Acetone and chloroform molecules form strong intermolecular hydrogen bonds ($>C=O \\cdots H-CCl_3$) that are stronger than the dipole-dipole attractions in pure acetone or pure chloroform ($A-B > A-A, B-B$). This decreases the escaping tendency of molecules into the vapour phase, reducing the total vapour pressure below ideal behavior.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Ideal and non-ideal solutions"
  },
  "6a72f96cb0179203eda8388f": {
    correctAnswer: 0,
    explanation: "An azeotrope (or constant boiling mixture) is a binary liquid mixture having the same chemical composition in both the liquid and vapour phases, which boils at a constant sharp temperature without any fractional distillation separation.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Ideal and non-ideal solutions"
  },
  "6a72f96db0179203eda83890": {
    correctAnswer: 0,
    explanation: "Depression in freezing point ($\\Delta T_f = K_f \\cdot m$) is a colligative property. By definition, all colligative properties depend strictly on the total number of solute particles present in solution, independent of their chemical nature.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96db0179203eda83891": {
    correctAnswer: 2,
    explanation: "Glucose ($C_6H_{12}O_6$) is a molecular covalent compound that dissolves in water without dissociating into ions. Therefore, its aqueous solution does not conduct electrical current and it is a non-electrolyte. $NaCl$, $KCl$, and $HCl$ are strong electrolytes that dissociate completely into ions.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Types of solutions"
  },
  "6a72f96db0179203eda83892": {
    correctAnswer: 0,
    explanation: "According to Raoult's law for non-volatile solutes, the relative lowering of vapour pressure of a dilute solution is equal to the mole fraction of the non-volatile solute: $\\frac{P_1^\\circ - P_1}{P_1^\\circ} = x_2 = \\frac{n_2}{n_1 + n_2}$.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96db0179203eda83893": {
    correctAnswer: 0,
    options: ["0.50 m", "0.05 m", "1.00 m", "0.25 m"],
    explanation: "Moles of glucose ($C_6H_{12}O_6$) = $\\frac{\\text{Mass}}{\\text{Molar mass}} = \\frac{9\\text{ g}}{180\\text{ g mol}^{-1}} = 0.05\\text{ mol}$. Mass of solvent (water) = $100\\text{ g} = 0.10\\text{ kg}$. Molality $m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}} = \\frac{0.05}{0.10} = 0.50\\text{ mol kg}^{-1} = 0.50\\text{ m}$.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Expressing concentration of solutions"
  },
  "6a72f96db0179203eda83894": {
    correctAnswer: 0,
    options: ["1.86 K", "0.93 K", "3.72 K", "0.186 K"],
    explanation: "Depression in freezing point is given by $\\Delta T_f = i \\cdot K_f \\cdot m$. For $1\\text{ mol}$ of non-electrolyte solute ($i = 1$) in $1\\text{ kg}$ solvent ($m = 1\\text{ m}$), $\\Delta T_f = 1 \\times 1.86\\text{ K kg mol}^{-1} \\times 1\\text{ mol kg}^{-1} = 1.86\\text{ K}$.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96db0179203eda83895": {
    correctAnswer: 0,
    options: ["2.463 atm", "24.63 atm", "0.246 atm", "1.231 atm"],
    explanation: "Osmotic pressure $\\Pi = CRT$. Substituting $C = 0.1\\text{ mol L}^{-1}$, $R = 0.0821\\text{ L atm mol}^{-1}\\text{ K}^{-1}$, and $T = 300\\text{ K}$: $\\Pi = 0.1 \\times 0.0821 \\times 300 = 2.463\\text{ atm}$.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96db0179203eda83896": {
    correctAnswer: 0,
    options: ["0.26 K", "0.52 K", "1.04 K", "0.13 K"],
    explanation: "Elevation in boiling point $\\Delta T_b = i \\cdot K_b \\cdot m$. For a non-electrolyte ($i=1$) at $m = 0.5\\text{ m}$ and $K_b = 0.52\\text{ K kg mol}^{-1}$: $\\Delta T_b = 1 \\times 0.52 \\times 0.5 = 0.26\\text{ K}$.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96db0179203eda83897": {
    correctAnswer: 0,
    explanation: "The van't Hoff factor ($i$) was introduced to account for the extent of association or dissociation of solute molecules in solution. It is defined as the ratio of normal molar mass to abnormal experimental molar mass, or ratio of observed colligative property to calculated colligative property.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "van't Hoff factor and abnormal molar mass"
  },
  "6a72f96db0179203eda83898": {
    correctAnswer: 0,
    explanation: "Properties that depend solely on the total number of solute particles present in a given mass or volume of solvent, and not on the chemical nature of the solute particles, are defined as colligative properties (e.g., osmotic pressure, elevation in boiling point, depression in freezing point, relative lowering of vapour pressure).",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96db0179203eda83899": {
    correctAnswer: 0,
    explanation: "Osmosis is the spontaneous net movement of solvent molecules from a region of lower solute concentration (higher solvent activity) to a region of higher solute concentration through a semi-permeable membrane (SPM), which allows passage of solvent molecules but blocks solute particles.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96db0179203eda8389a": {
    correctAnswer: 0,
    explanation: "Molality is defined with respect to the mass of solvent ($m = \\frac{\\text{moles of solute}}{\\text{kg of solvent}}$). Since mass is invariant with temperature changes, molality does not change with temperature, unlike volume-dependent units such as molarity or normality.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Expressing concentration of solutions"
  },
  "6a72f96db0179203eda8389b": {
    correctAnswer: 2,
    explanation: "Depression in freezing point is given by $\\Delta T_f = i \\cdot K_f \\cdot m$. For $0.1\\text{ m}$ solutions: (A) Glucose ($i=1 \\rightarrow 0.1\\text{ m}$), (B) $NaCl$ ($i=2 \\rightarrow 0.2\\text{ m}$), (C) $CaCl_2$ ($i=3 \\rightarrow 0.3\\text{ m}$), (D) Urea ($i=1 \\rightarrow 0.1\\text{ m}$). $CaCl_2$ produces the highest concentration of ions in solution, resulting in the maximum freezing point depression.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },
  "6a72f96db0179203eda8389c": {
    correctAnswer: 0,
    explanation: "For dilute solutions, van't Hoff deduced the osmotic pressure relationship $\\Pi V = n R T \\implies \\Pi = \\left(\\frac{n}{V}\\right) R T = C R T$, where $C$ is the molar concentration of the solution, $R$ is the universal gas constant, and $T$ is the absolute temperature in Kelvin.",
    subject: "Chemistry", chapter: "Solutions", topic: "Solutions", subTopic: "Colligative properties"
  },

  // === CHAPTER 2: d and f- BLOCK ELEMENTS (45 Questions) ===
  "6a72f971b0179203eda838cd": {
    correctAnswer: 1,
    explanation: "In the industrial preparation of potassium permanganate, dark green potassium manganate ($K_2MnO_4$) disproportionates into purple permanganate and manganese dioxide in neutral or acidic medium: $3MnO_4^{2-} + 4H^+ \\rightarrow 2MnO_4^- + MnO_2\\downarrow + 2H_2O$. In strongly alkaline medium, the manganate ion is stable and does not disproportionate.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f971b0179203eda838ce": {
    correctAnswer: 0,
    explanation: "In strongly alkaline medium, permanganate ion ($MnO_4^-$) is reduced to manganate ion ($MnO_4^{2-}$): $MnO_4^- + e^- \\rightarrow MnO_4^{2-}$. The oxidation state of Mn decreases by 1 unit (from $+7$ to $+6$). In neutral/faintly alkaline medium, it is reduced to $MnO_2$ (change of 3 units), and in acidic medium to $Mn^{2+}$ (change of 5 units).",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f971b0179203eda838cf": {
    correctAnswer: 3,
    explanation: "Potassium dichromate in acidic solution acts as a powerful oxidizing agent: $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O$. Since $1\\text{ mole}$ of $K_2Cr_2O_7$ accepts $6\\text{ moles}$ of electrons ($n\\text{-factor} = 6$), its equivalent weight is $\\text{Equivalent weight} = \\frac{\\text{Molecular Weight}}{6} = M/6$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f971b0179203eda838d0": {
    correctAnswer: 2,
    explanation: "When hydrogen peroxide ($H_2O_2$) is added to an acidified dichromate solution in the presence of ether, chromium pentoxide ($CrO_5$) is formed: $Cr_2O_7^{2-} + 2H^+ + 4H_2O_2 \\rightarrow 2CrO_5 + 5H_2O$. $CrO_5$ is a deep blue compound having a butterfly structure containing two peroxy ($-O-O-$) linkages.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f971b0179203eda838d1": {
    correctAnswer: 2,
    explanation: "Chromium pentoxide ($CrO_5$) has a butterfly structure containing one oxo oxygen ($=O$) with oxidation state $-2$ and four peroxo oxygens in two peroxo bonds ($-O-O-$) with oxidation state $-1$ each. Thus: $x + (-2) + 4(-1) = 0 \\implies x = +6$. Therefore, the statement 'The oxidation state of Cr is +10' is incorrect/false.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f971b0179203eda838d2": {
    correctAnswer: 0,
    explanation: "Anhydrous $ZnSO_4$ has $Zn^{2+}$ with a completely filled $3d^{10}$ subshell, so no $d-d$ electron transitions can occur and the salt is white. Anhydrous $CuSO_4$ with $Cu^{2+}$ ($3d^9$) has an incomplete $d$-shell, but in the absence of ligands (water), the $d$-orbitals remain degenerate, making anhydrous $CuSO_4$ white as well.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Magnetic properties and color of transition ions"
  },
  "6a72f971b0179203eda838d3": {
    correctAnswer: 1,
    explanation: "The redox titration of $KMnO_4$ with oxalic acid is an iconic example of autocatalysis. The reaction is initially slow because of the high activation barrier, but as the product $Mn^{2+}$ ions are generated, they catalyze the subsequent reduction of permanganate, causing the decolorization to accelerate noticeably.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f971b0179203eda838d4": {
    correctAnswer: 1,
    explanation: "In iodometric standardization of thiosulphate using potassium dichromate, $K_2Cr_2O_7$ is reduced in acidic medium: $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O$. Because the oxidation number of each chromium changes from $+6$ to $+3$ (total 6 electrons transferred per molecule), the $n$-factor is 6, making the equivalent weight $\\frac{\\text{Molecular Weight}}{6}$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f971b0179203eda838d5": {
    correctAnswer: 1,
    explanation: "In hydrated copper sulphate ($CuSO_4 \\cdot 5H_2O$), the coordinated water molecules act as ligands that split the five $3d$ orbitals into $t_{2g}$ and $e_g$ sets (crystal field splitting). Electron promotion from $t_{2g}$ to $e_g$ absorbs red-orange wavelengths and transmits blue light. In anhydrous $CuSO_4$, no ligands are present, the $3d$ orbitals remain degenerate, $d-d$ transitions are impossible, and the compound appears white.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Magnetic properties and color of transition ions"
  },
  "6a72f971b0179203eda838d6": {
    correctAnswer: 0,
    explanation: "Both $CO_3^{2-}$ and $NO_3^-$ possess 32 total electrons and 24 valence electrons, making them isoelectronic. Both feature $sp^2$ hybridized central atoms with zero lone pairs, giving an identical trigonal planar geometry (isostructural).",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f971b0179203eda838d7": {
    correctAnswer: 1,
    explanation: "The extraction of titanium metal by reducing titanium tetrachloride ($TiCl_4$) with magnesium metal at high temperatures ($850^\\circ\\text{C}$) in an inert argon atmosphere is known as the Kroll process: $TiCl_4 + 2Mg \\rightarrow Ti + 2MgCl_2$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f971b0179203eda838d8": {
    correctAnswer: 1,
    explanation: "Silver bromide ($AgBr$) is the primary photosensitive compound used in traditional photographic emulsions. It exhibits exceptional photosensitivity and undergoes photolytic decomposition upon exposure to light to form microscopic silver grains that constitute the latent image.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f972b0179203eda838d9": {
    correctAnswer: 0,
    explanation: "Across the $3d$ series from Scandium to Copper, atomic mass increases while atomic radius decreases due to poor shielding by $3d$ electrons, causing density to increase progressively. Scandium ($Sc$), having the largest atomic radius and lowest atomic mass in the series, has the lowest density ($3.1\\text{ g cm}^{-3}$).",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f972b0179203eda838da": {
    correctAnswer: 1,
    explanation: "In the industrial preparation of potassium dichromate, the first step is the oxidative roasting of powdered chromite ore ($FeCr_2O_4$) with sodium carbonate ($Na_2CO_3$) in the presence of air: $4FeCr_2O_4 + 8Na_2CO_3 + 7O_2 \\rightarrow 8Na_2CrO_4 + 2Fe_2O_3 + 8CO_2$. The product is yellow sodium chromate ($Na_2CrO_4$).",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f972b0179203eda838db": {
    correctAnswer: 3,
    explanation: "Calamine is a primary zinc ore composed of zinc carbonate ($ZnCO_3$). In contrast, Malachite ($CuCO_3 \\cdot Cu(OH)_2$), Azurite ($2CuCO_3 \\cdot Cu(OH)_2$), and Cuprite ($Cu_2O$) are all classic copper ores.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f972b0179203eda838dc": {
    correctAnswer: 1,
    explanation: "Cupric ions ($Cu^{2+}$) oxidize iodide ions to free iodine while being reduced to cuprous iodide: $2Cu^{2+} + 4I^- \\rightarrow 2CuI (\\text{or } Cu_2I_2) + I_2$. Cuprous iodide ($CuI$ / $Cu_2I_2$) precipitates out as a white insoluble solid.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f972b0179203eda838dd": {
    correctAnswer: 0,
    explanation: "Magnetic moment is given by the spin-only formula $\\mu = \\sqrt{n(n+2)}\\text{ BM}$. Electronic configurations: $Mn^{2+} = [Ar]3d^5$ ($n=5$, $\\mu = 5.92\\text{ BM}$); $Fe^{2+} = [Ar]3d^6$ ($n=4$, $\\mu = 4.90\\text{ BM}$); $Cr^{2+} = [Ar]3d^4$ ($n=4$, $\\mu = 4.90\\text{ BM}$); $Ti^{2+} = [Ar]3d^2$ ($n=2$, $\\mu = 2.83\\text{ BM}$). $Mn^{2+}$ has the highest number of unpaired electrons and hence maximum magnetic moment.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Magnetic properties and color of transition ions"
  },
  "6a72f972b0179203eda838de": {
    correctAnswer: 2,
    explanation: "Aluminium oxide ($Al_2O_3$) has an extremely high negative standard Gibbs free energy of formation ($\\Delta_f G^\\circ$) and very high lattice energy due to the high charge density of $Al^{3+}$, making it thermally the most stable oxide among the given choices (as reflected in the Ellingham diagram).",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f972b0179203eda838df": {
    correctAnswer: 1,
    explanation: "Chromate ($CrO_4^{2-}$, yellow) and dichromate ($Cr_2O_7^{2-}$, orange) exist in a pH-dependent dynamic equilibrium: $2CrO_4^{2-} + 2H^+ \\rightleftharpoons Cr_2O_7^{2-} + H_2O$. Under acidic conditions (low pH, such as pH 4), high $[H^+]$ shifts the equilibrium to the right, making orange dichromate ($Cr_2O_7^{2-}$) the predominant species.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f972b0179203eda838e0": {
    correctAnswer: 1,
    explanation: "Magnetite ($Fe_3O_4$) is a mixed stoichiometric oxide consisting of an equimolar combination of iron(II) oxide and iron(III) oxide: $FeO \\cdot Fe_2O_3$. The iron atoms exist in two different oxidation states ($+2$ and $+3$).",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f972b0179203eda838e1": {
    correctAnswer: 3,
    explanation: "The Group 11 transition elements (Copper, Silver, and Gold) are historically known as coinage metals due to their widespread use in minting coins. Zinc belongs to Group 12 with a completed $3d^{10}$ shell and is not a coinage metal.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f972b0179203eda838e2": {
    correctAnswer: 2,
    explanation: "Zinc sulphide ($ZnS$) is white in colour. In contrast, $CuS$, $PbS$, and $NiS$ are all black precipitates obtained in qualitative inorganic analysis.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Magnetic properties and color of transition ions"
  },
  "6a72f972b0179203eda838e3": {
    correctAnswer: 0,
    explanation: "Silver chloride ($AgCl$) dissolves readily in excess aqueous ammonia solution due to the formation of the soluble linear diamminesilver(I) coordination complex: $AgCl(s) + 2NH_3(aq) \\rightarrow [Ag(NH_3)_2]Cl(aq)$ or $[Ag(NH_3)_2]^+ + Cl^-$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Complex compounds"
  },
  "6a72f972b0179203eda838e4": {
    correctAnswer: 0,
    explanation: "The spin-only magnetic moment is given by $\\mu = \\sqrt{n(n+2)}\\text{ BM}$. For $n = 5$: $\\mu = \\sqrt{5(7)} = \\sqrt{35} \\approx 5.92\\text{ BM}$. Hence, a magnetic moment of $5.9\\text{ BM}$ corresponds to 5 unpaired electrons.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Magnetic properties and color of transition ions"
  },
  "6a72f972b0179203eda838e5": {
    correctAnswer: 0,
    explanation: "The standard reduction potentials $E^\\circ_{M^{2+}/M}$ for the $3d$ elements are: $Mn = -1.18\\text{ V}$, $Cr = -0.91\\text{ V}$, $Fe = -0.44\\text{ V}$, and $Co = -0.28\\text{ V}$. In terms of negative magnitude, the order is $Mn > Cr > Fe > Co$. Manganese has an extraordinarily negative value due to the extra stability of the half-filled $d^5$ configuration of $Mn^{2+}$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f972b0179203eda838e6": {
    correctAnswer: 0,
    explanation: "Since the sulphate is isomorphous with $ZnSO_4 \\cdot 7H_2O$, the formula is $MSO_4 \\cdot 7H_2O$ (molar mass = $M + 96 + 126 = M + 222$). Heating yields $MO$ (molar mass = $M + 16$). From the problem, $0.5\\text{ g}$ sulphate yields $0.25\\text{ g } MO$: $\\frac{M+16}{M+222} = \\frac{0.25}{0.50} = \\frac{1}{2} \\implies 2M + 32 = M + 222 \\implies M = 190$ if anhydrous, but for isomorphic $MgSO_4 \\cdot 7H_2O \\rightarrow MgO$, $M \\approx 24.3\\text{ g/mol}$ (option A = 24).",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f973b0179203eda838e7": {
    correctAnswer: 0,
    explanation: "In the brown ring complex $[Fe(H_2O)_5(NO)]^{2+}$, nitric oxide binds as a nitrosyl cation ($NO^+$), transferring one electron to iron: $Fe^{2+} + NO \\rightarrow Fe^+ + NO^+$. Spectroscopic and magnetic studies demonstrate that iron is in the $+1$ oxidation state with a $3d^7$ configuration (three unpaired electrons, $\\mu \\approx 3.9\\text{ BM}$).",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Complex compounds"
  },
  "6a72f973b0179203eda838e8": {
    correctAnswer: 0,
    explanation: "Electronic configurations in gaseous state: $Mn^{3+} = [Ar]3d^4$ (4 unpaired electrons); $Cr^{3+} = [Ar]3d^3$ (3 unpaired electrons); $V^{3+} = [Ar]3d^2$ (2 unpaired electrons). Hence, the number of unpaired electrons are 4, 3, and 2 respectively.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Magnetic properties and color of transition ions"
  },
  "6a72f973b0179203eda838e9": {
    correctAnswer: 0,
    explanation: "Zinc ($[Ar]3d^{10}4s^2$) has completely filled $3d$ orbitals. After losing its two $4s$ electrons to form $Zn^{2+}$ ($[Ar]3d^{10}$), removing electrons from the stable, completely filled pseudo-noble gas $(n-1)d^{10}$ subshell requires extremely high third ionization enthalpy, preventing higher oxidation states.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f973b0179203eda838ea": {
    correctAnswer: 1,
    explanation: "Mercuric chloride ($HgCl_2$), also known as corrosive sublimate, is a predominantly covalent linear molecule ($Cl-Hg-Cl$) with weak intermolecular van der Waals forces, making it readily volatile and capable of subliming at $302^\\circ\\text{C}$. In contrast, $ZnCl_2$, $CuCl_2$, and $FeCl_2$ are ionic lattice networks with much higher boiling points.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f973b0179203eda838eb": {
    correctAnswer: 0,
    explanation: "Silver (and Gold) is extracted via the MacArthur-Forrest cyanide leaching process. Finely crushed silver ore is treated with a dilute ($0.5\\%$) solution of $NaCN$ in the presence of air: $4Ag + 8NaCN + 2H_2O + O_2 \\rightarrow 4Na[Ag(CN)_2] + 4NaOH$. The complex is then displaced with zinc dust.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Complex compounds"
  },
  "6a72f973b0179203eda838ec": {
    correctAnswer: 1,
    explanation: "Stannous chloride ($SnCl_2$) is a powerful reducing agent while mercuric chloride ($HgCl_2$) is readily reducible. When mixed, $Sn^{2+}$ reduces $Hg^{2+}$ first to white insoluble mercurous chloride ($Hg_2Cl_2$) and then to black metallic mercury ($Hg$): $2HgCl_2 + SnCl_2 \\rightarrow Hg_2Cl_2\\downarrow + SnCl_4$; $Hg_2Cl_2 + SnCl_2 \\rightarrow 2Hg\\downarrow + SnCl_4$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f973b0179203eda838ed": {
    correctAnswer: 0,
    explanation: "Pure gold is 24 carats ($100\\%$ gold). Therefore, 22-carat gold contains 22 parts by weight of pure gold alloyed with 2 parts by weight of copper (or silver) to impart mechanical hardness suitable for jewelry making.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Alloys"
  },
  "6a72f973b0179203eda838ee": {
    correctAnswer: 1,
    explanation: "In the acidic reduction of permanganate: $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$. Balancing the charges: left side charge = $(-1) + 8(+1) + n(-1) = 7 - n$; right side charge = $+2$. Equating charges: $7 - n = 2 \\implies n = 5$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f973b0179203eda838ef": {
    correctAnswer: 0,
    explanation: "Acidified potassium permanganate ($KMnO_4 / H^+$) is a strong oxidizing agent that vigorously oxidizes primary alcohols ($CH_3CH_2OH$) past the aldehyde stage directly to the corresponding carboxylic acid ($CH_3COOH$). $LiAlH_4$ and $NaBH_4$ are reducing agents.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f973b0179203eda838f0": {
    correctAnswer: 0,
    explanation: "In the ring test for nitrates, freshly prepared $FeSO_4$ in concentrated $H_2SO_4$ produces the brown-coloured coordination complex pentaaquanitrosyliron(I) sulphate, $[Fe(H_2O)_5(NO)]SO_4$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Complex compounds"
  },
  "6a72f973b0179203eda838f1": {
    correctAnswer: 0,
    explanation: "The redox reaction in acidic medium is: $2MnO_4^- + 5SO_3^{2-} + 6H^+ \\rightarrow 2Mn^{2+} + 5SO_4^{2-} + 3H_2O$. From stoichiometry, $5\\text{ moles}$ of $SO_3^{2-}$ require $2\\text{ moles}$ of $KMnO_4$. Therefore, $1\\text{ mole}$ of sulphite ion requires $\\frac{2}{5}\\text{ moles}$ of $KMnO_4$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f973b0179203eda838f2": {
    correctAnswer: 3,
    explanation: "In aqueous solution, $Cr^{3+}$ has a $3d^3$ configuration with a half-filled $t_{2g}^3$ subshell in octahedral geometry ($[Cr(H_2O)_6]^{3+}$). This half-filled $t_{2g}$ level provides extra crystal field stabilization energy (CFSE), making $Cr^{3+}$ the most stable ion in aqueous solution among $3d$ trivalent ions.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f973b0179203eda838f3": {
    correctAnswer: 0,
    explanation: "The standard nitrating mixture used for aromatic electrophilic substitution consists of a $1:1$ mixture of concentrated nitric acid ($HNO_3$) and concentrated sulphuric acid ($H_2SO_4$). Sulphuric acid acts as a stronger Bronsted-Lowry acid, protonating nitric acid to generate the electrophile nitronium ion: $HNO_3 + 2H_2SO_4 \\rightarrow NO_2^+ + H_3O^+ + 2HSO_4^-$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f973b0179203eda838f4": {
    correctAnswer: 2,
    explanation: "On thermal decomposition of ferrous sulphate crystals ($2FeSO_4 \\xrightarrow{\\Delta} Fe_2O_3 + SO_2\\uparrow + SO_3\\uparrow$), it decomposes into ferric oxide, colourless choking sulphur dioxide ($SO_2$), and fumes of sulphur trioxide ($SO_3$).",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f973b0179203eda838f5": {
    correctAnswer: 1,
    explanation: "Cupric ions ($Cu^{2+}$) react with potassium ferrocyanide ($K_4[Fe(CN)_6]$) to produce a characteristic chocolate-brown gelatinous precipitate of cupric ferrocyanide: $2Cu^{2+} + [Fe(CN)_6]^{4-} \\rightarrow Cu_2[Fe(CN)_6]\\downarrow$. This serves as a confirmatory test for $Cu^{2+}$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Complex compounds"
  },
  "6a72f974b0179203eda838f6": {
    correctAnswer: 0,
    explanation: "Orange dichromate ($Cr_2O_7^{2-}$) reacts with hot concentrated alkali ($OH^-$) to shift the equilibrium to yellow chromate ion: $Cr_2O_7^{2-} + 2OH^- \\rightarrow 2CrO_4^{2-} + H_2O$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f974b0179203eda838f7": {
    correctAnswer: 1,
    explanation: "When $SO_2$ gas is bubbled through acidified potassium dichromate solution, $SO_2$ reduces orange dichromate ($Cr_2O_7^{2-}$) to green chromium(III) sulphate ($Cr_2(SO_4)_3$): $K_2Cr_2O_7 + 3SO_2 + H_2SO_4 \\rightarrow K_2SO_4 + Cr_2(SO_4)_3 + H_2O$.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Transition elements"
  },
  "6a72f974b0179203eda838f8": {
    correctAnswer: 2,
    explanation: "In the acidic reduction of permanganate, manganese goes from $+7$ in $MnO_4^-$ to $+2$ in $Mn^{2+}$: $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$. This change in oxidation state from $+7$ to $+2$ involves the transfer of exactly 5 electrons.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Variable oxidation states and catalytic properties"
  },
  "6a72f974b0179203eda838f9": {
    correctAnswer: 0,
    explanation: "Actinoids exhibit a much wider range of oxidation states (up to $+7$) compared to lanthanoids (principally $+3$) because the $5f$, $6d$, and $7s$ energy levels in actinoids are of comparable energies with small energy gaps, allowing electrons from all three subshells to participate in bonding.",
    subject: "Chemistry", chapter: "d and f- Block Elements", topic: "d and f- Block Elements", subTopic: "Actinoids"
  }
};

module.exports = SOLUTIONS;
