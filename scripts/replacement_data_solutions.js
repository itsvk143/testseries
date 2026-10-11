module.exports = [
  {
    "question": "A binary solution of chloroform and acetone shows negative deviation from Raoult's law. Which of the following thermodynamic relations is correct for this mixture?",
    "options": [
      "$\\Delta V_{mix} < 0$, $\\Delta H_{mix} < 0$, and $P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$",
      "$\\Delta V_{mix} > 0$, $\\Delta H_{mix} > 0$, and $P_{total} > P_A^\\circ x_A + P_B^\\circ x_B$",
      "$\\Delta V_{mix} = 0$, $\\Delta H_{mix} < 0$, and $\\Delta S_{mix} < 0$",
      "$\\Delta V_{mix} < 0$, $\\Delta H_{mix} > 0$, and $\\Delta G_{mix} > 0$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In a mixture of chloroform ($CHCl_3$) and acetone ($CH_3COCH_3$), strong intermolecular hydrogen bonding forms between the hydrogen of chloroform and the carbonyl oxygen of acetone ($Cl_3C-H\\cdots O=C(CH_3)_2$). Because $A-B$ attractive interactions are stronger than $A-A$ and $B-B$ interactions, the vapor pressure is lower than predicted by Raoult's law ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$). Consequently, dissolution is exothermic ($\\Delta H_{mix} < 0$), volume contracts upon mixing ($\\Delta V_{mix} < 0$), and spontaneous mixing has $\\Delta G_{mix} < 0, \\Delta S_{mix} > 0$.",
    "subTopic": "Non-Ideal Solutions"
  },
  {
    "question": "A solution showing large negative deviation from Raoult's law forms which type of azeotrope at a specific composition?",
    "options": [
      "Maximum boiling azeotrope, boiling at a temperature higher than either component",
      "Minimum boiling azeotrope, boiling at a temperature lower than either component",
      "Ideal azeotrope, having identical boiling point to the pure solvent",
      "Zeotropic mixture, which cannot have an invariant boiling point"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Solutions that exhibit large negative deviations from Raoult's law have vapor pressures significantly lower than expected. At a specific composition, the vapor pressure reaches a minimum, meaning the boiling point reaches a maximum. Such mixtures are called maximum boiling azeotropes (e.g., $68\\%$ nitric acid and $32\\%$ water by mass, boiling at $393.5\\text{ K}$, higher than pure water $373.15\\text{ K}$ and pure $HNO_3$ $359\\text{ K}$).",
    "subTopic": "Azeotropes"
  },
  {
    "question": "Ethanol and water on fractional distillation yield an azeotropic mixture containing approximately $95.4\\%$ ethanol by mass. This azeotrope is classified as:",
    "options": [
      "Minimum boiling azeotrope, because the solution shows positive deviation from Raoult's law",
      "Maximum boiling azeotrope, because the solution shows negative deviation from Raoult's law",
      "Ideal mixture, because both components are polar",
      "Non-azeotropic solution that can be separated by further simple distillation"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Ethanol and water exhibit large positive deviation from Raoult's law because ethanol-water interactions are weaker than the extensive hydrogen bonding in pure ethanol and pure water. The vapor pressure reaches a maximum at $95.4\\%$ ethanol, resulting in a minimum boiling azeotrope boiling at $351.15\\text{ K}$ (lower than pure ethanol $351.5\\text{ K}$ and water $373.15\\text{ K}$). Fractional distillation cannot concentrate ethanol beyond this azeotropic composition.",
    "subTopic": "Azeotropes"
  },
  {
    "question": "Benzoic acid ($C_6H_5COOH$) completely dimerizes in benzene solution. What is the theoretical van't Hoff factor ($i$) for this solution?",
    "options": [
      "$0.5$",
      "$1.0$",
      "$2.0$",
      "$0.25$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "In benzene, benzoic acid molecules undergo intermolecular hydrogen bonding to form cyclic dimers: $2C_6H_5COOH \\rightleftharpoons (C_6H_5COOH)_2$. For complete association (degree of association $\\alpha = 1$) into dimers ($n = 2$), the van't Hoff factor is: $i = 1 - \\alpha\\left(1 - \\frac{1}{n}\\right) = 1 - 1\\left(1 - \\frac{1}{2}\\right) = 0.5$.",
    "subTopic": "Van't Hoff Factor"
  },
  {
    "question": "A $0.10\\text{ m}$ aqueous solution of a monobasic weak acid $HA$ freezes at $-0.2046^\\circ\\text{C}$. Given $K_f(\\text{H}_2\\text{O}) = 1.86\\text{ K kg mol}^{-1}$, calculate the degree of dissociation ($\\alpha$) of the acid:",
    "options": [
      "$0.10$ ($10\\%$)",
      "$0.05$ ($5\\%$)",
      "$0.20$ ($20\\%$)",
      "$0.15$ ($15\\%$)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Observed depression in freezing point $\\Delta T_f = 0 - (-0.2046) = 0.2046\\text{ K}$.\\nUsing $\\Delta T_f = i \\cdot K_f \\cdot m$:\\n$0.2046 = i \\times 1.86 \\times 0.10 \\implies i = \\frac{0.2046}{0.186} = 1.10$.\\nFor monobasic acid $HA \\rightleftharpoons H^+ + A^-$, $n = 2$.\\n$\\alpha = \\frac{i - 1}{n - 1} = \\frac{1.10 - 1}{2 - 1} = 0.10 = 10\\%$.",
    "subTopic": "Colligative Properties"
  },
  {
    "question": "Calculate the osmotic pressure in atmospheres exerted by an aqueous solution containing $18.0\\text{ g}$ of glucose ($C_6H_{12}O_6$) and $6.0\\text{ g}$ of urea ($NH_2CONH_2$) in $1.0\\text{ L}$ of solution at $300\\text{ K}$. ($R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$)",
    "options": [
      "$4.93\\text{ atm}$",
      "$2.46\\text{ atm}$",
      "$7.39\\text{ atm}$",
      "$1.23\\text{ atm}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Molar mass of glucose $= 180\\text{ g/mol}$, moles of glucose $= \\frac{18.0}{180} = 0.10\\text{ mol}$.\\nMolar mass of urea $= 60\\text{ g/mol}$, moles of urea $= \\frac{6.0}{60} = 0.10\\text{ mol}$.\\nBoth are non-electrolytes ($i = 1$).\\nTotal moles of solute $= 0.10 + 0.10 = 0.20\\text{ mol}$.\\nMolarity $C = \\frac{0.20\\text{ mol}}{1.0\\text{ L}} = 0.20\\text{ M}$.\\nOsmotic pressure $\\Pi = CRT = 0.20 \\times 0.0821 \\times 300 = 4.926 \\approx 4.93\\text{ atm}$.",
    "subTopic": "Osmotic Pressure"
  },
  {
    "question": "Assuming complete dissociation, which of the following aqueous solutions will exhibit the HIGHEST boiling point?",
    "options": [
      "$0.10\\text{ m } Al_2(SO_4)_3$",
      "$0.15\\text{ m } BaCl_2$",
      "$0.20\\text{ m } NaCl$",
      "$0.35\\text{ m } \\text{Glucose}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Boiling point elevation $\\Delta T_b = i \\cdot K_b \\cdot m$. Highest boiling point corresponds to the highest effective molality $i \\cdot m$:\\n(a) For $0.10\\text{ m } Al_2(SO_4)_3$: $i = 5$, $i \\cdot m = 5 \\times 0.10 = 0.50\\text{ m}$.\\n(b) For $0.15\\text{ m } BaCl_2$: $i = 3$, $i \\cdot m = 3 \\times 0.15 = 0.45\\text{ m}$.\\n(c) For $0.20\\text{ m } NaCl$: $i = 2$, $i \\cdot m = 2 \\times 0.20 = 0.40\\text{ m}$.\\n(d) For $0.35\\text{ m } \\text{Glucose}$: $i = 1$, $i \\cdot m = 1 \\times 0.35 = 0.35\\text{ m}$.\\nSince $0.50 > 0.45 > 0.40 > 0.35$, $0.10\\text{ m } Al_2(SO_4)_3$ has the highest boiling point.",
    "subTopic": "Boiling Point Elevation"
  },
  {
    "question": "According to Henry's law, the solubility of a gas in a liquid is governed by $p = K_H \\cdot x$. Which statement regarding Henry's law constant ($K_H$) is correct?",
    "options": [
      "Higher the value of $K_H$ at a given pressure, lower is the solubility of the gas in the liquid; $K_H$ increases with increasing temperature",
      "Higher the value of $K_H$, higher is the solubility of the gas; $K_H$ decreases with increasing temperature",
      "$K_H$ is a universal constant independent of both temperature and nature of gas",
      "$K_H$ increases with increasing pressure at constant temperature"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "From Henry's law: $x = \\frac{p}{K_H}$, where $x$ is mole fraction (solubility) in solution. At constant partial pressure $p$, a larger $K_H$ results in a smaller solubility $x$. Dissolution of gas in liquid is an exothermic process ($\\Delta H_{sol} < 0$), so by Le Chatelier's principle, increasing temperature decreases gas solubility, which means $K_H$ increases with temperature. Thus, aquatic species are more comfortable in cold water than warm water.",
    "subTopic": "Henry's Law"
  },
  {
    "question": "The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. What is the vapor pressure of a solution containing $30.0\\text{ g}$ of urea ($M_w = 60\\text{ g/mol}$) dissolved in $900\\text{ g}$ of water at the same temperature?",
    "options": [
      "$23.56\\text{ mm Hg}$",
      "$22.80\\text{ mm Hg}$",
      "$24.04\\text{ mm Hg}$",
      "$21.42\\text{ mm Hg}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Moles of urea $n_2 = \\frac{30.0}{60} = 0.50\\text{ mol}$.\\nMoles of water $n_1 = \\frac{900}{18} = 50.0\\text{ mol}$.\\nMole fraction of solvent $x_1 = \\frac{50.0}{50.0 + 0.50} = \\frac{50.0}{50.5} = 0.9901$.\\nBy Raoult's law: $P = P^\\circ \\cdot x_1 = 23.8 \\times 0.9901 = 23.564 \\approx 23.56\\text{ mm Hg}$.\\nAlternatively, $\\frac{P^\\circ - P}{P^\\circ} = x_2 = \\frac{0.50}{50.5} = 0.00990 \\implies P^\\circ - P = 0.2356\\text{ mm Hg} \\implies P = 23.56\\text{ mm Hg}$.",
    "subTopic": "Relative Lowering of Vapor Pressure"
  },
  {
    "question": "In the desalination of seawater by reverse osmosis, which phenomenon occurs when a pressure greater than osmotic pressure is applied to the seawater side across a semipermeable membrane?",
    "options": [
      "Pure water flows from the seawater solution through the semipermeable membrane into pure water",
      "Salt ions migrate into pure water to establish Donnan equilibrium",
      "The semipermeable membrane dissolves due to high pressure",
      "Water vaporizes directly without crossing the membrane"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "When a pressure higher than the osmotic pressure of seawater (typically $> 30\\text{ atm}$) is applied to the concentrated saline solution, the natural direction of osmosis is reversed. Pure water molecules are forced out of the seawater across the cellulose acetate semipermeable membrane into the pure water reservoir, leaving dissolved salts behind.",
    "subTopic": "Reverse Osmosis"
  },
  {
    "question": "If the van't Hoff factor ($i$) of a solute in solution is observed to be $0.54$, the experimentally determined colligative molar mass of the solute compared to its normal formula mass will be:",
    "options": [
      "Higher than the normal formula mass, because $M_{exp} = \\frac{M_{normal}}{i}$",
      "Lower than the normal formula mass, because $M_{exp} = i \\cdot M_{normal}$",
      "Equal to the normal formula mass, because mass is conserved",
      "Zero, because precipitation has occurred"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Colligative properties are inversely proportional to molar mass: $\\text{Property} \\propto \\frac{i}{M}$. Consequently, the experimentally determined molar mass is given by $M_{exp} = \\frac{M_{normal}}{i}$. For $i = 0.54$ ($i < 1$, indicating association such as dimerization), $M_{exp} = \\frac{M_{normal}}{0.54} \\approx 1.85 \\times M_{normal}$, which is significantly higher than the normal formula mass.",
    "subTopic": "Abnormal Molar Mass"
  },
  {
    "question": "Which of the following pairs of liquids forms a nearly ideal binary solution over the entire range of concentrations?",
    "options": [
      "$n$-Hexane and $n$-Heptane",
      "Ethanol and Acetone",
      "Chloroform and Acetone",
      "Phenol and Aniline"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "An ideal solution obeys Raoult's law over the entire concentration range with $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$. This occurs when the components have similar molecular sizes and structures, meaning intermolecular forces between $A-B$ molecules are virtually identical to those between $A-A$ and $B-B$. $n$-Hexane and $n$-Heptane have very similar structures and London dispersion forces, forming an almost ideal solution. In contrast, (b) shows positive deviation, while (c) and (d) show negative deviation.",
    "subTopic": "Ideal Solutions"
  },
  {
    "question": "The molal depression constant ($K_f$) of a solvent depends strictly on:",
    "options": [
      "The nature of the solvent only, governed by $K_f = \\frac{R M T_f^2}{1000 \\Delta_{fus}H}$",
      "The nature and concentration of the solute",
      "The volume and surface area of the solution container",
      "The atmospheric pressure exclusively"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The cryoscopic constant $K_f$ is an intrinsic characteristic property of the solvent, given thermodynamically by $K_f = \\frac{R \\cdot M_1 \\cdot T_f^2}{1000 \\cdot \\Delta_{fus}H}$, where $M_1$ is molar mass of solvent, $T_f$ is freezing point of pure solvent, and $\\Delta_{fus}H$ is enthalpy of fusion of the solvent. It is completely independent of the solute identity or concentration.",
    "subTopic": "Cryoscopic Constant"
  },
  {
    "question": "A $0.010\\text{ m}$ aqueous solution of a coordination compound with empirical formula $CoCl_3\\cdot 5NH_3$ freezes at $-0.0558^\\circ\\text{C}$. Given $K_f(\\text{H}_2\\text{O}) = 1.86\\text{ K kg mol}^{-1}$, the structural coordination formula of the complex is:",
    "options": [
      "$[Co(NH_3)_5Cl]Cl_2$",
      "$[Co(NH_3)_4Cl_2]Cl\\cdot NH_3$",
      "$[Co(NH_3)_3Cl_3]\\cdot 2NH_3$",
      "$[Co(NH_3)_5]Cl_3$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "$\\Delta T_f = 0 - (-0.0558) = 0.0558\\text{ K}$.\\nUsing $\\Delta T_f = i \\cdot K_f \\cdot m$:\\n$0.0558 = i \\times 1.86 \\times 0.010 \\implies i = \\frac{0.0558}{0.0186} = 3.0$.\\nA van't Hoff factor $i = 3$ indicates that each molecule of the complex dissociates into $3$ ions in aqueous solution: $1$ complex cation and $2$ chloride counter-ions: $[Co(NH_3)_5Cl]Cl_2 \\rightarrow [Co(NH_3)_5Cl]^{2+} + 2Cl^-$.",
    "subTopic": "Coordination Colligative Properties"
  },
  {
    "question": "A liquid mixture of benzene ($A$) and toluene ($B$) is ideal. At $300\\text{ K}$, $P_A^\\circ = 100\\text{ mm Hg}$ and $P_B^\\circ = 40\\text{ mm Hg}$. If the liquid phase has an equimolar composition ($x_A = x_B = 0.50$), what is the mole fraction of benzene in the vapor phase ($y_A$) at equilibrium?",
    "options": [
      "$0.714$",
      "$0.500$",
      "$0.286$",
      "$0.600$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Partial vapor pressures in equilibrium with the liquid phase:\\n$P_A = P_A^\\circ \\cdot x_A = 100 \\times 0.50 = 50\\text{ mm Hg}$.\\n$P_B = P_B^\\circ \\cdot x_B = 40 \\times 0.50 = 20\\text{ mm Hg}$.\\nTotal pressure $P_{total} = P_A + P_B = 50 + 20 = 70\\text{ mm Hg}$.\\nMole fraction of benzene in vapor phase $y_A = \\frac{P_A}{P_{total}} = \\frac{50}{70} = \\frac{5}{7} \\approx 0.714$. The vapor phase is significantly enriched in the more volatile component (benzene).",
    "subTopic": "Vapor-Liquid Equilibrium"
  },
  {
    "question": "Which of the following concentration units changes with temperature, and why?",
    "options": [
      "Molarity, because volume of the solution expands or contracts with temperature",
      "Molality, because mass of solvent changes with temperature",
      "Mole fraction, because the number of moles depends on temperature",
      "Mass percentage, because density change alters the mass of solute"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Molarity ($M$) is defined as moles of solute per liter of solution. Because volume is temperature-dependent (liquids expand on heating and contract on cooling), molarity changes with temperature. In contrast, molality ($m$), mole fraction ($x$), and mass percentage ($w/w$) are based on mass, which is temperature-independent.",
    "subTopic": "Concentration Terms"
  },
  {
    "question": "Assuming the density of pure water is $1.00\\text{ g/mL}$, the molality of pure water is:",
    "options": [
      "$55.55\\text{ m}$",
      "$1.00\\text{ m}$",
      "$18.00\\text{ m}$",
      "$100.0\\text{ m}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Molality is moles of solute per $1\\text{ kg}$ of solvent. In $1000\\text{ g}$ ($1\\text{ kg}$) of pure water, the number of moles of $H_2O$ is: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} \\approx 55.55\\text{ mol}$. Therefore, the molality (and molarity at $\\rho = 1\\text{ g/mL}$) of pure water is $55.55\\text{ mol/kg} = 55.55\\text{ m}$.",
    "subTopic": "Concentration Terms"
  },
  {
    "question": "A binary mixture of ethanol and cyclohexane shows positive deviation from Raoult's law. What is the molecular explanation for this behavior?",
    "options": [
      "Cyclohexane molecules enter between ethanol molecules and break their hydrogen-bonded network, making escape into vapor easier ($A-B < A-A, B-B$)",
      "Cyclohexane forms strong coordinate covalent bonds with ethanol",
      "Ethanol molecules induce permanent dipoles in cyclohexane",
      "The mixture undergoes a spontaneous polymerization reaction"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Pure ethanol has an extensive intermolecular hydrogen-bonded network. When non-polar cyclohexane is added, its molecules fit between ethanol molecules, disrupting and breaking the hydrogen bonds. Because the new ethanol-cyclohexane interactions are much weaker than ethanol-ethanol hydrogen bonds ($A-B < A-A$), the escaping tendency of both components increases, resulting in higher vapor pressure ($P > P_{ideal}$), endothermic mixing ($\\Delta H_{mix} > 0$), and volume expansion ($\\Delta V_{mix} > 0$).",
    "subTopic": "Positive Deviation from Raoult's Law"
  },
  {
    "question": "A $5.0\\%\\text{ (w/v)}$ solution of an unknown non-electrolyte solute $X$ is isotonic with a $1.71\\%\\text{ (w/v)}$ solution of cane sugar ($C_{12}H_{22}O_{11}, M_w = 342\\text{ g/mol}$) at the same temperature. What is the molar mass of $X$?",
    "options": [
      "$1000\\text{ g/mol}$",
      "$500\\text{ g/mol}$",
      "$171\\text{ g/mol}$",
      "$342\\text{ g/mol}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Isotonic solutions have equal osmotic pressure at the same temperature: $\\Pi_1 = \\Pi_2 \\implies C_1 = C_2$.\\n$C_1 = \\frac{w_1 / M_1}{V_1} = \\frac{5.0\\text{ g} / M_X}{0.100\\text{ L}} = \\frac{50}{M_X}\\text{ M}$.\\n$C_2 = \\frac{w_2 / M_2}{V_2} = \\frac{1.71\\text{ g} / 342}{0.100\\text{ L}} = \\frac{0.0050}{0.100} = 0.050\\text{ M}$.\\nEquating molarities: $\\frac{50}{M_X} = 0.050 \\implies M_X = \\frac{50}{0.050} = 1000\\text{ g/mol}$.",
    "subTopic": "Isotonic Solutions"
  },
  {
    "question": "For the formation of an ideal binary liquid solution from pure components at constant temperature and pressure, which of the following combinations of thermodynamic properties is correct?",
    "options": [
      "$\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $\\Delta S_{mix} > 0$, $\\Delta G_{mix} < 0$",
      "$\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $\\Delta S_{mix} = 0$, $\\Delta G_{mix} = 0$",
      "$\\Delta H_{mix} > 0$, $\\Delta V_{mix} > 0$, $\\Delta S_{mix} > 0$, $\\Delta G_{mix} < 0$",
      "$\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$, $\\Delta S_{mix} < 0$, $\\Delta G_{mix} < 0$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For an ideal solution, intermolecular forces between $A-A, B-B,$ and $A-B$ are identical. Thus, no heat is absorbed or evolved ($\\Delta H_{mix} = 0$), and no volume change occurs ($\\Delta V_{mix} = 0$). However, mixing increases randomness/disorder, so the entropy of mixing is strictly positive: $\\Delta S_{mix} = -R(n_A \\ln x_A + n_B \\ln x_B) > 0$. Consequently, $\\Delta G_{mix} = \\Delta H_{mix} - T\\Delta S_{mix} = -T\\Delta S_{mix} < 0$, making mixing spontaneous.",
    "subTopic": "Thermodynamics of Solutions"
  },
  {
    "question": "Potassium ferrocyanide, $K_4[Fe(CN)_6]$, has a degree of dissociation $\\alpha = 0.75$ in a dilute aqueous solution. What is its van't Hoff factor ($i$)?",
    "options": [
      "$4.00$",
      "$3.25$",
      "$4.75$",
      "$5.00$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Potassium ferrocyanide dissociates as: $K_4[Fe(CN)_6] \\rightleftharpoons 4K^+ + [Fe(CN)_6]^{4-}$. The total number of ions produced per formula unit is $n = 4 + 1 = 5$.\\nThe relation between $i$ and $\\alpha$ is: $i = 1 + (n - 1)\\alpha$.\\nSubstituting $n = 5$ and $\\alpha = 0.75$:\\n$i = 1 + (5 - 1)(0.75) = 1 + 4(0.75) = 1 + 3.00 = 4.00$.",
    "subTopic": "Van't Hoff Factor"
  },
  {
    "question": "What mass of ethylene glycol ($C_2H_6O_2, M_w = 62.0\\text{ g/mol}$) must be added to $4.00\\text{ kg}$ of water to prevent freezing down to $-9.30^\\circ\\text{C}$? ($K_f(\\text{H}_2\\text{O}) = 1.86\\text{ K kg mol}^{-1}$)",
    "options": [
      "$1240\\text{ g}$",
      "$620\\text{ g}$",
      "$310\\text{ g}$",
      "$2480\\text{ g}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Required depression in freezing point $\\Delta T_f = 9.30\\text{ K}$.\\nEthylene glycol is a non-electrolyte ($i = 1$).\\n$\\Delta T_f = K_f \\cdot m \\implies 9.30 = 1.86 \\times m \\implies m = \\frac{9.30}{1.86} = 5.00\\text{ mol/kg}$.\\nMoles of ethylene glycol required for $4.00\\text{ kg}$ of water $= 5.00\\text{ mol/kg} \\times 4.00\\text{ kg} = 20.0\\text{ mol}$.\\nMass of ethylene glycol $= 20.0\\text{ mol} \\times 62.0\\text{ g/mol} = 1240\\text{ g}$.",
    "subTopic": "Colligative Calculations"
  },
  {
    "question": "Why is osmotic pressure measurement preferred over freezing point depression and boiling point elevation for determining the molar masses of polymers, proteins, and biomolecules?",
    "options": [
      "Biomolecules have very high molar masses, so their molal concentration is extremely small; osmotic pressure yields measurable values at room temperature without denaturation",
      "Biomolecules are completely insoluble in cold water",
      "Freezing point depression cannot be measured for organic solutes",
      "Boiling water improves the stability of proteins"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Macromolecules have very large molar masses ($10^4$ to $10^6\\text{ g/mol}$). A reasonable mass concentration (e.g., $1\\text{ g/L}$) yields an extremely low molarity ($~10^{-4}\\text{ M}$), producing negligible freezing point depression ($\\\\Delta T_f \\sim 10^{-4}\\text{ K}$) or boiling point elevation. In contrast, osmotic pressure at room temperature ($298\\text{ K}$) is $\\Pi = CRT \\sim 10^{-4} \\times 0.0821 \\times 298 \\approx 2.4\\times 10^{-3}\\text{ atm} \\approx 25\\text{ mm of water}$, which is easily and accurately measurable. Furthermore, proteins denature at elevated temperatures.",
    "subTopic": "Osmotic Pressure Advantages"
  },
  {
    "question": "When a solute $A$ undergoes association to form an $n$-mer according to $nA \\rightleftharpoons A_n$ with degree of association $\\alpha$, the relationship between van't Hoff factor $i$ and $\\alpha$ is:",
    "options": [
      "$\\alpha = \\frac{1 - i}{1 - 1/n}$",
      "$\\alpha = \\frac{i - 1}{n - 1}$",
      "$\\alpha = \\frac{i - 1}{1 - n}$",
      "$\\alpha = \\frac{1 - i}{n - 1}$"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Let initial moles of $A$ be $1$. At equilibrium: moles of unassociated $A = 1 - \\alpha$; moles of $A_n = \\frac{\\alpha}{n}$.\\nTotal particles at equilibrium $= (1 - \\alpha) + \\frac{\\alpha}{n} = 1 - \\alpha\\left(1 - \\frac{1}{n}\\right)$.\\nBy definition, $i = \\frac{\\text{total particles}}{\\text{initial particles}} = 1 - \\alpha\\left(1 - \\frac{1}{n}\\right)$.\\nRearranging: $\\alpha\\left(1 - \\frac{1}{n}\\right) = 1 - i \\implies \\alpha = \\frac{1 - i}{1 - 1/n}$.",
    "subTopic": "Association of Solute"
  },
  {
    "question": "To avoid the painful and dangerous condition known as 'the bends' (decompression sickness), deep-sea scuba divers use breathing gas tanks filled with air diluted with:",
    "options": [
      "Helium ($11.7\\% He, 56.2\\% N_2, 32.1\\% O_2$), because helium has very low solubility in blood",
      "Pure carbon dioxide, because it readily dissolves in plasma",
      "Pure oxygen at high pressure, to eliminate all inert gases",
      "Hydrogen gas, because of its low molecular weight"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "At high underwater depth and pressure, nitrogen from compressed air dissolves extensively in blood according to Henry's law. When the diver ascends rapidly, external pressure decreases and dissolved nitrogen bubbles out of the blood vessels, blocking capillaries and causing the painful condition called 'the bends'. To prevent this, breathing air is diluted with helium, which has an extremely low solubility in blood even at high pressure.",
    "subTopic": "Henry's Law Applications"
  }
];
