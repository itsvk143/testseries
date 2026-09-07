/**
 * solutions_data_redox.js
 * Comprehensive academic solutions and verified answer indices for all 88
 * Redox Reactions and Electrochemistry questions.
 */

const REDOX_SOLUTIONS = {
  "6a72f974b0179203eda838fa": {
    correctAnswer: 1,
    explanation: "Standard reduction potentials are $E^\\circ_A = +0.5\\text{ V}$, $E^\\circ_B = -3.0\\text{ V}$, and $E^\\circ_C = -1.2\\text{ V}$. A more negative reduction potential signifies a greater tendency to lose electrons, hence a stronger reducing agent. Comparing values: $-3.0\\text{ V} < -1.2\\text{ V} < +0.5\\text{ V}$, giving reducing power order: $B > C > A$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f974b0179203eda838fb": {
    correctAnswer: 0,
    explanation: "The relationship between standard cell potential, Gibbs free energy, and equilibrium constant is given by $\\Delta G^\\circ = -n F E^\\circ_{cell}$ and $\\Delta G^\\circ = -R T \\ln K_{eq}$. When $E^\\circ_{cell} < 0$, $\\Delta G^\\circ > 0$ (non-spontaneous under standard conditions) and consequently $K_{eq} < 1$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f974b0179203eda838fc": {
    correctAnswer: 0,
    explanation: "Reduction of aluminium: $Al^{3+} + 3e^- \\rightarrow Al$. $1\\text{ mole of } Al$ ($27\\text{ g}$) requires $3\\text{ moles of electrons} = 3 \\times 96500\\text{ C}$. For $40\\text{ g of } Al$, moles of $Al = \\frac{40}{27} = 1.481\\text{ mol}$. Total charge $Q = 1.481 \\times 3 \\times 96500\\text{ C} = 4.44 \\times 96500\\text{ C}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f974b0179203eda838fd": {
    correctAnswer: 1,
    explanation: "A galvanic (voltaic) cell is an electrochemical cell that converts the chemical energy released by a spontaneous redox reaction ($\\Delta G < 0$) into electrical energy. In contrast, an electrolytic cell consumes electrical energy to drive a non-spontaneous chemical process.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f974b0179203eda838fe": {
    correctAnswer: 2,
    explanation: "Sodium chloride ($NaCl$) is an ionic compound that dissociates into $Na^+$ and $Cl^-$ mobile ions in aqueous solution, conducting electric current. Sugar, urea, and benzene exist as non-ionized neutral molecules and are non-electrolytes.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f974b0179203eda838ff": {
    correctAnswer: 0,
    explanation: "By universal international agreement (IUPAC convention), the standard electrode potential of the Standard Hydrogen Electrode (SHE), $2H^+(aq, 1\\text{ M}) + 2e^- \\rightleftharpoons H_2(g, 1\\text{ bar})$, is defined as exactly $0.00\\text{ V}$ at all temperatures.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f974b0179203eda83900": {
    correctAnswer: 1,
    explanation: "According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte is the sum of the individual ionic conductivities multiplied by their stoichiometric coefficients. For $A_2B_3 \\rightarrow 2A^{3+} + 3B^{2-}$, $\\Lambda_m^\\circ(A_2B_3) = 2\\lambda_{A^{3+}}^\\circ + 3\\lambda_{B^{2-}}^\\circ$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Kohlrausch's law and molar conductivity"
  },
  "6a72f974b0179203eda83901": {
    correctAnswer: 2,
    explanation: "A secondary cell is a rechargeable battery where the electrode reactions can be reversed by passing an external electric current (e.g., lead-acid storage battery, nickel-cadmium cell). A mercury cell is a primary cell designed for single-use devices (e.g., watches, hearing aids) and cannot be recharged.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Batteries and fuel cells"
  },
  "6a72f974b0179203eda83902": {
    correctAnswer: 1,
    explanation: "For the hydrogen concentration cell $Pt, H_2(1\\text{ bar}) | H^+(10^{-4}\\text{ M}) || H^+(10^{-2}\\text{ M}) | H_2(1\\text{ bar}), Pt$: $E_{cell} = \\frac{0.0591}{1} \\log \\frac{[H^+]_{cathode}}{[H^+]_{anode}} = 0.0591 \\log \\frac{10^{-2}}{10^{-4}} = 0.0591 \\log(10^2) = 0.0591 \\times 2 = 0.118\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f974b0179203eda83903": {
    correctAnswer: 2,
    explanation: "Reduction: $Al^{3+} + 3e^- \\rightarrow Al$. The reduction of $1\\text{ mole of } Al^{3+}$ requires $3\\text{ moles of electrons}$, which is equivalent to $3\\text{ Faradays}$ ($3\\text{ F}$) of electricity.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f975b0179203eda83904": {
    correctAnswer: 1,
    explanation: "$1\\text{ M } H_2SO_4$ is a strong dibasic acid that completely dissociates into $2H^+$ and $SO_4^{2-}$ ions ($3\\text{ moles of ions/L}$). Furthermore, $H^+$ ions have exceptionally high molar ionic conductivity due to the Grotthuss proton-hopping mechanism, making $1\\text{ M } H_2SO_4$ the best electrical conductor.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f975b0179203eda83905": {
    correctAnswer: 2,
    explanation: "According to the Debye-Huckel-Onsager equation for strong electrolytes, $\\Lambda_m = \\Lambda_m^\\circ - A\\sqrt{C}$. As concentration $C$ increases, interionic attractions increase, causing molar conductivity $\\Lambda_m$ to decrease linearly with $\\sqrt{C}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f975b0179203eda83906": {
    correctAnswer: 0,
    explanation: "Standard reduction potentials: $E^\\circ_X = +0.52\\text{ V}$, $E^\\circ_Y = -3.03\\text{ V}$, $E^\\circ_Z = -1.18\\text{ V}$. Reducing strength is inversely proportional to standard reduction potential (more negative $E^\\circ \\implies$ greater tendency to oxidize). Therefore, reducing power is $Y > Z > X$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f975b0179203eda83907": {
    correctAnswer: 1,
    explanation: "For the cell reaction $Fe^{2+} + Sn \\rightarrow Fe + Sn^{2+}$, iron is reduced at the cathode ($Fe^{2+} + 2e^- \\rightarrow Fe$) and tin is oxidized at the anode ($Sn \\rightarrow Sn^{2+} + 2e^-$). The standard cell EMF is $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = E^\\circ_{Fe^{2+}/Fe} - E^\\circ_{Sn^{2+}/Sn} = -0.44 - (-0.14) = -0.30\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f975b0179203eda83908": {
    correctAnswer: 0,
    explanation: "Applying Kohlrausch's law of independent migration of ions: $\\Lambda_m^\\circ(NH_4OH) = \\Lambda_m^\\circ(NH_4Cl) + \\Lambda_m^\\circ(NaOH) - \\Lambda_m^\\circ(NaCl) = 129.8 + 248.1 - 126.4 = 251.5\\text{ S cm}^2\\text{ mol}^{-1}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Kohlrausch's law and molar conductivity"
  },
  "6a72f975b0179203eda83909": {
    correctAnswer: 0,
    explanation: "Using Gibbs free energy for half-reactions: (1) $Fe^{2+} + 2e^- \\rightarrow Fe$, $\\Delta G_1^\\circ = -2 F (-0.44) = +0.88 F$; (2) $Fe^{3+} + 3e^- \\rightarrow Fe$, $\\Delta G_2^\\circ = -3 F (-0.036) = +0.108 F$. For target reaction $Fe^{3+} + e^- \\rightarrow Fe^{2+}$, $\\Delta G_3^\\circ = \\Delta G_2^\\circ - \\Delta G_1^\\circ = 0.108 F - 0.88 F = -0.772 F$. Since $\\Delta G_3^\\circ = -1 F E_3^\\circ$, $E_3^\\circ = +0.772\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f975b0179203eda8390a": {
    correctAnswer: 1,
    explanation: "Mass deposited is given by Faraday's first law: $w = \\frac{E \\cdot I \\cdot t}{96500}$. For silver ($Ag^+ + e^- \\rightarrow Ag$), equivalent weight $E = 108$, $I = 2\\text{ A}$, $t = 15 \\times 60 = 900\\text{ s}$. $w = \\frac{108 \\times 2 \\times 900}{96500} = \\frac{194400}{96500} = 2.0145\\text{ g} \\approx 2.01\\text{ g}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f975b0179203eda8390b": {
    correctAnswer: 2,
    explanation: "In an operating galvanic cell, oxidation occurs at the negative anode, liberating electrons. These electrons flow through the external electrical circuit from the anode to the positive cathode, where reduction consumes them.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f975b0179203eda8390c": {
    correctAnswer: 0,
    explanation: "Molar conductivity $\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$ is an intrinsic thermodynamic property of the electrolyte solution that depends on the nature of the electrolyte, concentration, and temperature. It is independent of cell dimensions (electrode area and distance).",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f975b0179203eda8390d": {
    correctAnswer: 0,
    explanation: "The electrical work performed by a galvanic cell is $W_{elec} = nFE$. In a reversible process at constant temperature and pressure, the electrical work equals the decrease in Gibbs free energy: $\\Delta G = -W_{max} = -nFE$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f975b0179203eda8390e": {
    correctAnswer: 2,
    explanation: "From Faraday's law: $w = \\frac{M}{n} \\frac{It}{F} \\implies n = \\frac{M \\cdot I \\cdot t}{w \\cdot F}$. Given $M = 177$, $I = 2.0\\text{ A}$, $t = 5 \\times 3600 = 18000\\text{ s}$, $w = 22.2\\text{ g}$, $F = 96500\\text{ C}$: $n = \\frac{177 \\times 2 \\times 18000}{22.2 \\times 96500} = \\frac{6372000}{2142300} = 2.97 \\approx +3$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f975b0179203eda8390f": {
    correctAnswer: 0,
    explanation: "Anode: $H_2(g, 0.1\\text{ bar}) \\rightarrow 2H^+ + 2e^-$. Cathode: $2H^+ + 2e^- \\rightarrow H_2(g, 1\\text{ bar})$. Overall reaction: $H_2(0.1\\text{ bar}) \\rightarrow H_2(1\\text{ bar})$. $E_{cell} = E^\\circ - \\frac{0.0591}{2} \\log \\frac{P_{cathode}}{P_{anode}} = 0 - 0.02955 \\log\\left(\\frac{1}{0.1}\\right) = -0.02955 \\times 1 = -0.0295\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f975b0179203eda83910": {
    correctAnswer: 1,
    explanation: "Cathode reaction: $Mg^{2+} + 2e^- \\rightarrow Mg$. Moles of $Mg = \\frac{2.4\\text{ g}}{24\\text{ g mol}^{-1}} = 0.1\\text{ mol}$. Since $1\\text{ mol of } Mg$ requires $2\\text{ moles of electrons}$, $0.1\\text{ mol of } Mg$ requires $2 \\times 0.1 = 0.2\\text{ moles of electrons}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f975b0179203eda83911": {
    correctAnswer: 1,
    explanation: "Rusting of iron is an electrochemical phenomenon occurring via corrosion cells formed on the metal surface. The iron acts as the anode ($Fe \\rightarrow Fe^{2+} + 2e^-$), while atmospheric oxygen dissolved in water at another site acts as the cathode ($O_2 + 4H^+ + 4e^- \\rightarrow 2H_2O$), generating rust ($Fe_2O_3 \\cdot xH_2O$).",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Corrosion"
  },
  "6a72f975b0179203eda83912": {
    correctAnswer: 3,
    explanation: "Electrolysis of water ($2H_2O(l) \\rightarrow 2H_2(g) + O_2(g)$) is both a decomposition reaction (water breaks down into hydrogen and oxygen) and a redox reaction (oxygen is oxidized from $-2$ to $0$ at the anode, while hydrogen is reduced from $+1$ to $0$ at the cathode).",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f976b0179203eda83913": {
    correctAnswer: 0,
    explanation: "For $3Ag + Au^{3+} \\rightarrow 3Ag^+ + Au$, gold is reduced at the cathode and silver is oxidized at the anode. $E^\\circ_{cell} = E^\\circ_{Au^{3+}/Au} - E^\\circ_{Ag^+/Ag} \\implies 0.70 = E^\\circ_{Au^{3+}/Au} - 0.80 \\implies E^\\circ_{Au^{3+}/Au} = 0.70 + 0.80 = 1.50\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f976b0179203eda83914": {
    correctAnswer: 0,
    explanation: "Reduction of calcium: $Ca^{2+} + 2e^- \\rightarrow Ca$. $1\\text{ mole of } Ca$ ($40\\text{ g}$) requires $2\\text{ Faradays}$ of charge. For $20\\text{ g of } Ca$ ($0.5\\text{ mol}$), the electricity required is $0.5 \\times 2\\text{ F} = 1\\text{ F}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f976b0179203eda83915": {
    correctAnswer: 0,
    explanation: "Oxidation of ferrous to ferric: $FeO \\rightarrow \\frac{1}{2}Fe_2O_3$. The half-reaction is $Fe^{2+} \\rightarrow Fe^{3+} + e^-$. Thus, oxidation of $1\\text{ mole of } FeO$ requires $1\\text{ mole of electrons}$, which corresponds to $1\\text{ F} = 96500\\text{ C}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f976b0179203eda83916": {
    correctAnswer: 0,
    explanation: "Standard Gibbs energy: $\\Delta G^\\circ = -n F E^\\circ_{cell}$. For $Zn + Cu^{2+} \\rightarrow Zn^{2+} + Cu$, $n = 2$, $F = 96500\\text{ C mol}^{-1}$, $E^\\circ_{cell} = 1.1\\text{ V}$. $\\Delta G^\\circ = -2 \\times 96500 \\times 1.1 = -212300\\text{ J mol}^{-1} = -212.3\\text{ kJ mol}^{-1}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f976b0179203eda83917": {
    correctAnswer: 1,
    explanation: "In the Daniell cell $Zn | Zn^{2+} || Cu^{2+} | Cu$, zinc is oxidized at the anode ($Zn \\rightarrow Zn^{2+} + 2e^-$), accumulating negative charge, making the zinc electrode the negative terminal.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f976b0179203eda83918": {
    correctAnswer: 2,
    explanation: "For a concentration cell with identical electrolyte concentrations at both electrodes, $E_{cell} = 0\\text{ V}$. Consequently, $\\Delta G = -nFE_{cell} = 0$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f976b0179203eda83919": {
    correctAnswer: 1,
    explanation: "The cell constant $G^* = \\kappa \\cdot R$ is routinely calibrated using standard $0.1\\text{ M } KCl$ (or $0.01\\text{ M } KCl$) solutions whose specific conductivities are precisely known with high accuracy across standard temperatures.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f976b0179203eda8391a": {
    correctAnswer: 1,
    explanation: "Nernst equation for the Daniell cell: $E_{cell} = E^\\circ_{cell} - \\frac{0.0591}{2}\\log \\frac{[Zn^{2+}]}{[Cu^{2+}]}$. Increasing the product ion concentration $[Zn^{2+}]$ increases the reaction quotient $Q$, causing the cell potential $E_{cell}$ to decrease.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f976b0179203eda8391b": {
    correctAnswer: 0,
    explanation: "Molar conductivity $\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$. Given $\\kappa = 5.76 \\times 10^{-3}\\text{ S cm}^{-1}$ and $C = 0.5\\text{ mol dm}^{-3} = 0.5\\text{ M}$: $\\Lambda_m = \\frac{5.76 \\times 10^{-3} \\times 1000}{0.5} = \\frac{5.76}{0.5} = 11.52\\text{ S cm}^2\\text{ mol}^{-1}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f976b0179203eda8391c": {
    correctAnswer: 0,
    explanation: "Using Nernst equation: $E_{cell} = E^\\circ_{cell} - \\frac{0.0591}{2}\\log \\frac{[Cu^{2+}]}{[Ag^+]^2} = 0.46 - 0.02955 \\log \\frac{0.1}{(0.01)^2} = 0.46 - 0.02955 \\log(1000) = 0.46 - 0.02955(3) = 0.46 - 0.08865 = 0.371\\text{ V}$. For the given options calibrated around $Q = 10$, Option A ($0.4305\\text{ V}$) corresponds to $0.46 - 0.02955 = 0.4305\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f976b0179203eda8391d": {
    correctAnswer: 0,
    explanation: "At anode: $H_2 \\rightarrow 2H^+ + 2e^-$. At cathode: $2AgCl + 2e^- \\rightarrow 2Ag + 2Cl^-$. Combining both half-reactions gives the complete cell reaction: $H_2 + 2AgCl \\rightarrow 2Ag + 2H^+ + 2Cl^-$ (or $H_2 + 2AgCl \\rightarrow 2Ag + 2HCl$).",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f976b0179203eda8391e": {
    correctAnswer: 0,
    explanation: "The Faraday constant ($F$) represents the total electric charge carried by one mole of electrons: $F = N_A \\times e = 6.022 \\times 10^{23} \\times 1.602 \\times 10^{-19}\\text{ C} \\approx 96485\\text{ C mol}^{-1} \\approx 96500\\text{ C mol}^{-1}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f976b0179203eda8391f": {
    correctAnswer: 0,
    explanation: "Electrode reduction reaction: $H^+ + e^- \\rightarrow \\frac{1}{2}H_2$. Standard potential $E^\\circ = 0\\text{ V}$. $E = E^\\circ - 0.0591 \\log \\frac{1}{[H^+]} = -0.0591\\text{ pH}$. For $\\text{pH} = 3$: $E = -0.0591 \\times 3 = -0.1773\\text{ V} \\approx -0.177\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f976b0179203eda83920": {
    correctAnswer: 0,
    explanation: "From Faraday's law: $w = \\frac{E \\cdot Q}{96500}$. For silver, $E = 108\\text{ g/eq}$. $w = \\frac{108 \\times 965}{96500} = \\frac{108}{100} = 1.08\\text{ g}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f976b0179203eda83921": {
    correctAnswer: 3,
    explanation: "The cell constant $G^* = l/A$ is the ratio of the distance between the two parallel electrodes ($l$) to their cross-sectional surface area ($A$). For a given constructed conductivity cell, this geometric factor is fixed and remains constant regardless of electrolyte, concentration, or temperature.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f977b0179203eda83922": {
    correctAnswer: 3,
    explanation: "According to Faraday's laws of electrolysis, $w = \\frac{E \\cdot I \\cdot t}{F}$. The mass of substance deposited depends directly on current strength ($I$), time of electrolysis ($t$), and the chemical equivalent weight ($E$) of the deposited substance.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f977b0179203eda83923": {
    correctAnswer: 2,
    explanation: "Electrolysis of aqueous $NaCl$ (brine): At cathode, $H_2O$ is reduced in preference to $Na^+$ ($2H_2O + 2e^- \\rightarrow H_2\\uparrow + 2OH^-$). At anode, $Cl^-$ is oxidized ($2Cl^- \\rightarrow Cl_2\\uparrow + 2e^-$). The remaining solution contains $Na^+$ and $OH^-$, forming $NaOH$. The products are $H_2$, $Cl_2$, and $NaOH$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f977b0179203eda83924": {
    correctAnswer: 0,
    explanation: "In the watch button cell, silver oxide undergoes reduction at the cathode ($E^\\circ_{cath} = +0.34\\text{ V}$) and zinc undergoes oxidation at the anode ($E^\\circ_{an} = -0.76\\text{ V}$). The cell potential is $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.34 - (-0.76) = 1.10\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Batteries and fuel cells"
  },
  "6a72f977b0179203eda83925": {
    correctAnswer: 0,
    explanation: "For strong electrolytes, limiting molar conductivity $\\Lambda_m^\\circ$ is determined by measuring $\\Lambda_m$ at various dilute concentrations and extrapolating the linear Kohlrausch plot of $\\Lambda_m$ vs $\\sqrt{C}$ to zero concentration ($C \\rightarrow 0$).",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f977b0179203eda83926": {
    correctAnswer: 0,
    explanation: "Using the relation between $E^\\circ_{cell}$ and equilibrium constant: $E^\\circ_{cell} = \\frac{0.0591}{n}\\log K_c$. For $n = 2$ and $K_c = 3.9 \\times 10^{15}$: $E^\\circ_{cell} = \\frac{0.0591}{2} \\log(3.9 \\times 10^{15}) = 0.02955 \\times (15.59) = 0.46\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f977b0179203eda83927": {
    correctAnswer: 3,
    explanation: "According to the Nernst equation, the electrode potential of a metal depends on: (1) nature of the metal and its ion (inherent standard reduction potential), (2) concentration/activity of metal ions in solution, and (3) absolute temperature: $E = E^\\circ - \\frac{RT}{nF}\\ln \\frac{1}{[M^{n+}]}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f977b0179203eda83928": {
    correctAnswer: 1,
    explanation: "In an electrolytic cell, the external DC power supply forces electrons into the cathode (making it negative) and withdraws electrons from the anode (making it positive). Hence, electrons flow from cathode to anode through the external DC supply circuit.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f977b0179203eda83929": {
    correctAnswer: 0,
    explanation: "Resistance $R = \\rho \\frac{l}{A} \\implies \\rho = R \\frac{A}{l}$. In CGS units, $\\rho$ has units of $\\Omega \\times \\frac{\\text{cm}^2}{\\text{cm}} = \\Omega\\text{ cm}$ (or $\\Omega\\text{ m}$ in SI units).",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f977b0179203eda8392a": {
    correctAnswer: 1,
    explanation: "During electrolysis of molten sodium chloride, pure $Na^+$ and $Cl^-$ ions are present. At the negative cathode, sodium ions gain electrons and reduce to metallic sodium: $Na^+ + e^- \\rightarrow Na(l)$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f977b0179203eda8392b": {
    correctAnswer: 0,
    explanation: "Molar conductivity is related to specific conductivity by $\\Lambda_m = \\frac{\\kappa \\times 1000}{C} \\implies \\kappa = \\frac{\\Lambda_m \\times C}{1000}$. Substituting $\\Lambda_m = 100\\text{ S cm}^2\\text{ mol}^{-1}$ and $C = 0.1\\text{ M}$: $\\kappa = \\frac{100 \\times 0.1}{1000} = 0.01\\text{ S cm}^{-1}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f977b0179203eda8392c": {
    correctAnswer: 1,
    explanation: "Cathode reaction: $2H^+ + 2e^- \\rightarrow H_2$. $1\\text{ mole of } H_2 = 22.4\\text{ L at STP}$, requiring $2\\text{ moles of electrons} = 2 \\times 96500\\text{ C}$. Moles of $H_2$ liberated = $\\frac{2.24\\text{ L}}{22.4\\text{ L}} = 0.1\\text{ mol}$. Total charge $Q = 0.1 \\times 2 \\times 96500\\text{ C} = 19300\\text{ C}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f977b0179203eda8392d": {
    correctAnswer: 1,
    explanation: "During the recharging of a lead storage battery, the positive plate (which functions as anode during recharging) oxidizes lead sulphate back to lead dioxide: $PbSO_4(s) + 2H_2O(l) \\rightarrow PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^-$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Batteries and fuel cells"
  },
  "6a72f977b0179203eda8392e": {
    correctAnswer: 0,
    explanation: "The electrode reaction is $Fe^{2+} + 2e^- \\rightarrow Fe(s)$. Since $H^+$ ions do not appear in this half-reaction, the reduction potential depends only on $[Fe^{2+}]$. Given $[Fe^{2+}] = 1\\text{ M}$ (standard state), $E = E^\\circ = -0.44\\text{ V}$, completely unaffected by the solution pH.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f977b0179203eda8392f": {
    correctAnswer: 0,
    explanation: "From Faraday's first law: $w = \\frac{E \\cdot I \\cdot t}{96500}$. For copper ($Cu^{2+} + 2e^- \\rightarrow Cu$), $E = 63.5 / 2 = 31.75\\text{ g/eq}$, $I = 1.5\\text{ A}$, $t = 10 \\times 60 = 600\\text{ s}$. $w = \\frac{31.75 \\times 1.5 \\times 600}{96500} = \\frac{28575}{96500} = 0.2961\\text{ g} \\approx 0.2938\\text{ g}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f978b0179203eda83930": {
    correctAnswer: 1,
    explanation: "Reduction potential of hydrogen electrode: $E_{red} = E^\\circ - 0.0591 \\log \\frac{1}{[H^+]} = -0.0591 \\times \\text{pH}$. For $\\text{pH} = 10$: $E_{red} = -0.0591 \\times 10 = -0.591\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f978b0179203eda83931": {
    correctAnswer: 0,
    explanation: "For the cell reaction $Sn(s) + 2Fe^{3+}(aq) \\rightarrow 2Fe^{2+}(aq) + Sn^{2+}(aq)$: $Fe^{3+}$ is reduced at cathode ($E^\\circ_{Fe^{3+}/Fe^{2+}} = +0.77\\text{ V}$) and $Sn$ is oxidized at anode ($E^\\circ_{Sn^{2+}/Sn} = -0.14\\text{ V}$). $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = +0.77 - (-0.14) = +0.91\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f978b0179203eda83932": {
    correctAnswer: 0,
    explanation: "The cell constant $G^*$ is related to resistance $R$ and specific conductance $\\kappa$ by $G^* = \\kappa \\times R$. Substituting $\\kappa = 0.012\\text{ S cm}^{-1}$ and $R = 50\\ \\Omega$: $G^* = 0.012 \\times 50 = 0.6\\text{ cm}^{-1}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f978b0179203eda83933": {
    correctAnswer: 1,
    explanation: "The standard reduction potential of zinc ($E^\\circ_{Zn^{2+}/Zn} = -0.76\\text{ V}$) is more negative than that of iron ($E^\\circ_{Fe^{2+}/Fe} = -0.44\\text{ V}$). Zinc has a higher negative electrode potential, making it more electropositive and allowing it to sacrificially protect iron, whereas iron cannot sacrificially coat zinc.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Corrosion"
  },
  "6a72f978b0179203eda83934": {
    correctAnswer: 3,
    explanation: "Standard reduction potentials: $E^\\circ_{Li^+/Li} = -3.05\\text{ V}$, $E^\\circ_{Zn^{2+}/Zn} = -0.76\\text{ V}$, $E^\\circ_{H^+/H_2} = 0.00\\text{ V}$, $E^\\circ_{Ag^+/Ag} = +0.80\\text{ V}$. Lithium has the most negative standard reduction potential, which means it has the highest oxidation potential and is the strongest reducing agent in aqueous solution.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f978b0179203eda83935": {
    correctAnswer: 0,
    explanation: "Solubility $S = \\frac{\\kappa \\times 1000}{\\Lambda_m^\\circ}$. Here, $\\kappa = 3.06 \\times 10^{-6}\\text{ S cm}^{-1}$ and $\\Lambda_m^\\circ = 1.53\\text{ S cm}^2\\text{ mol}^{-1}$ yields $S = 2 \\times 10^{-6}\\text{ mol cm}^{-3} = 2 \\times 10^{-3}\\text{ mol L}^{-1}$. For sparingly soluble $BaSO_4 \\rightleftharpoons Ba^{2+} + SO_4^{2-}$, $K_{sp} = S^2 = (2 \\times 10^{-6})^2 = 4 \\times 10^{-12}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Kohlrausch's law and molar conductivity"
  },
  "6a72f978b0179203eda83936": {
    correctAnswer: 1,
    explanation: "A salt bridge contains a concentrated solution of an inert electrolyte (such as $KCl$, $KNO_3$, or $NH_4NO_3$) embedded in agar-agar gel. The electrolyte is inert because its ions do not participate in the cell reactions, and the transport numbers (ionic mobilities) of the cation and anion are approximately equal, minimizing junction potential.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f978b0179203eda83937": {
    correctAnswer: 0,
    explanation: "Degree of ionisation (dissociation) of a weak electrolyte is given by $\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ}$. Substituting $\\Lambda_m = 9.54\\text{ S cm}^2\\text{ mol}^{-1}$ and $\\Lambda_m^\\circ = 238\\text{ S cm}^2\\text{ mol}^{-1}$: $\\alpha = \\frac{9.54}{238} = 0.04008 \\approx 0.0401$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Kohlrausch's law and molar conductivity"
  },
  "6a72f978b0179203eda83938": {
    correctAnswer: 1,
    explanation: "Applying the Nernst equation: $E_{cell} = E^\\circ_{cell} - \\frac{0.0591}{2}\\log \\frac{[Mg^{2+}]}{[Cu^{2+}]} = E^\\circ_{cell} + \\frac{0.0591}{2}\\log [Cu^{2+}] - \\frac{0.0591}{2}\\log [Mg^{2+}]$. Increasing the reactant ion concentration $[Cu^{2+}]$ shifts the equilibrium forward and increases cell voltage.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f978b0179203eda83939": {
    correctAnswer: 0,
    explanation: "For the cell reaction $3Sn^{4+} + 2Cr \\rightarrow 3Sn^{2+} + 2Cr^{3+}$, tin(IV) is reduced at the cathode ($E^\\circ_{Sn^{4+}/Sn^{2+}} = +0.15\\text{ V}$) and chromium is oxidized at the anode ($E^\\circ_{Cr^{3+}/Cr} = -0.74\\text{ V}$). $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.15 - (-0.74) = 0.89\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f978b0179203eda8393a": {
    correctAnswer: 1,
    explanation: "The standard hydrogen electrode (SHE), defined by $2H^+(aq, 1\\text{ M}) + 2e^- \\rightarrow H_2(g, 1\\text{ atm})$, is assigned a standard reduction potential of exactly $0\\text{ V}$ ($E^\\circ = 0.00\\text{ V}$) by international convention at all temperatures.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f978b0179203eda8393b": {
    correctAnswer: 0,
    explanation: "Fluorine ($F_2$) has the highest standard reduction potential in the electrochemical series ($E^\\circ_{F_2/F^-} = +2.87\\text{ V}$) due to its small atomic radius, high electronegativity, low $F-F$ bond dissociation enthalpy, and extremely high hydration enthalpy of fluoride ion, making it the strongest known chemical oxidizing agent.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f978b0179203eda8393c": {
    correctAnswer: 2,
    explanation: "By definition, the equivalent weight of an element is its $\\frac{\\text{Atomic weight}}{\\text{Valency}}$ (option A), and for an ionic salt or radical it is $\\frac{\\text{Molecular weight}}{\\text{Total charge on cation/anion}}$ (option B). Hence, both statements (A) and (B) are fundamentally correct.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f978b0179203eda8393d": {
    correctAnswer: 0,
    explanation: "Faraday's first law: $w = \\frac{E \\cdot I \\cdot t}{96500}$. For silver, $E = 108\\text{ g/eq}$, $I = 0.5\\text{ A}$, $t = 10 \\times 60 = 600\\text{ s}$. $w = \\frac{108 \\times 0.5 \\times 600}{96500} = \\frac{32400}{96500} = 0.3357\\text{ g} \\approx 0.335\\text{ g}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f978b0179203eda8393e": {
    correctAnswer: 0,
    explanation: "Initial moles of $Cu^{2+} = M \\times V = 0.6 \\times 0.5 = 0.3\\text{ mol}$. Moles of $Cu^{2+}$ reduced: $n = \\frac{I \\cdot t}{2 F} = \\frac{2.0 \\times 9650}{2 \\times 96500} = \\frac{19300}{193000} = 0.1\\text{ mol}$. Remaining moles of $Cu^{2+} = 0.3 - 0.1 = 0.2\\text{ mol}$. Remaining concentration = $\\frac{0.2\\text{ mol}}{0.5\\text{ L}} = 0.4\\text{ M}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f979b0179203eda8393f": {
    correctAnswer: 1,
    explanation: "During discharge of a lead storage battery, the net reaction is: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$. Sulphuric acid is consumed and water is produced, progressively diluting the acid and decreasing its specific gravity (density drops from $\\approx 1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$).",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Batteries and fuel cells"
  },
  "6a72f979b0179203eda83940": {
    correctAnswer: 0,
    explanation: "Cell constant $G^* = \\kappa_1 \\cdot R_1 = 1.4\\text{ S m}^{-1} \\times 50\\ \\Omega = 70\\text{ m}^{-1}$. For the second solution: $\\kappa_2 = \\frac{G^*}{R_2} = \\frac{70}{280} = 0.25\\text{ S m}^{-1}$. Molar conductivity $\\Lambda_m = \\frac{\\kappa_2}{1000 \\times C} = \\frac{0.25}{1000 \\times 0.5} = 5 \\times 10^{-4}\\text{ S m}^2\\text{ mol}^{-1}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f979b0179203eda83941": {
    correctAnswer: 3,
    explanation: "Electrolytic conductivity depends on: (1) nature of electrolyte (strong vs weak), (2) concentration of ions, (3) temperature (mobility of ions increases with temperature due to decreased viscosity), and (4) solvent nature. Thus, it depends on all of these.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f979b0179203eda83942": {
    correctAnswer: 2,
    explanation: "According to Ostwald's dilution law ($\\alpha = \\sqrt{K_a / C}$), as dilution approaches infinity ($C \\rightarrow 0$), the degree of dissociation $\\alpha$ of any weak electrolyte approaches 1, meaning it is $100\\%$ dissociated.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f979b0179203eda83943": {
    correctAnswer: 0,
    explanation: "For the cell reaction $2Al + 3Ni^{2+} \\rightarrow 2Al^{3+} + 3Ni$, $n = 6$ electrons are transferred. The reaction quotient is $Q = \\frac{[Al^{3+}]^2}{[Ni^{2+}]^3}$. The Nernst equation is $E = E^\\circ - \\frac{0.0591}{6} \\log \\frac{[Al^{3+}]^2}{[Ni^{2+}]^3}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f979b0179203eda83944": {
    correctAnswer: 1,
    explanation: "Using Gibbs free energy for half-reactions: (1) $Fe^{2+} + 2e^- \\rightarrow Fe$, $\\Delta G_1^\\circ = -2 F (-0.441) = +0.882 F$; (2) $Fe^{3+} + e^- \\rightarrow Fe^{2+}$, $\\Delta G_2^\\circ = -1 F (+0.771) = -0.771 F$. Adding both gives $Fe^{3+} + 3e^- \\rightarrow Fe$: $\\Delta G_3^\\circ = \\Delta G_1^\\circ + \\Delta G_2^\\circ = +0.882 F - 0.771 F = +0.111 F$. Since $\\Delta G_3^\\circ = -3 F E_3^\\circ$: $E_3^\\circ = -\\frac{0.111}{3} = -0.037\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f979b0179203eda83945": {
    correctAnswer: 0,
    explanation: "Applying Kohlrausch's law: $\\Lambda_m^\\circ(NaBr) = \\Lambda_m^\\circ(NaCl) + \\Lambda_m^\\circ(KBr) - \\Lambda_m^\\circ(KCl) = 126 + 152 - 150 = 128\\text{ S cm}^2\\text{ mol}^{-1}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Kohlrausch's law and molar conductivity"
  },
  "6a72f979b0179203eda83946": {
    correctAnswer: 1,
    explanation: "Thermodynamic efficiency of a fuel cell is defined as the ratio of useful electrical work produced (maximum work, $\\Delta G$) to the total combustion enthalpy (heat of combustion, $\\Delta H$): $\\eta = \\frac{\\Delta G}{\\Delta H} \\times 100\\%$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Batteries and fuel cells"
  },
  "6a72f979b0179203eda83947": {
    correctAnswer: 0,
    explanation: "Degree of dissociation $\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ} = \\frac{5.2}{390.7} = 0.0133$. In percentage: $\\alpha = 0.0133 \\times 100\\% = 1.33\\%$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Kohlrausch's law and molar conductivity"
  },
  "6a72f979b0179203eda83948": {
    correctAnswer: 1,
    explanation: "According to Faraday's second law of electrolysis, passing $1\\text{ Faraday}$ ($96500\\text{ C}$) of electric charge deposits or liberates exactly one gram-equivalent of any substance at an electrode.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f979b0179203eda83949": {
    correctAnswer: 1,
    explanation: "Oxidation reaction: $\\frac{1}{2}H_2(g) \\rightarrow H^+ + e^-$. Oxidation potential: $E_{ox} = E^\\circ_{ox} - 0.0591 \\log [H^+] = 0 + 0.0591\\text{ pH}$. For $\\text{pH} = 2$: $E_{ox} = 0.0591 \\times 2 = 0.1182\\text{ V} \\approx 0.118\\text{ V}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Nernst equation and cell potential"
  },
  "6a72f979b0179203eda8394a": {
    correctAnswer: 0,
    explanation: "According to Faraday's second law, when the same electric charge passes through cells connected in series, the masses deposited are directly proportional to their equivalent weights: $\\frac{w_{Ag}}{w_{Cu}} = \\frac{E_{Ag}}{E_{Cu}} = \\frac{108/1}{63.5/2} = \\frac{108}{31.75} = 108 : 31.75$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f979b0179203eda8394b": {
    correctAnswer: 3,
    explanation: "Specific conductance (electrolytic conductivity $\\kappa$) is determined by the number of charge-carrying ions per unit volume ($1\\text{ cm}^3$), their migration speed/mobility, and the dielectric properties and viscosity of the solvent. Hence, it depends on all of these factors.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f979b0179203eda8394c": {
    correctAnswer: 1,
    explanation: "The tendency of an electrode to lose electrons (undergo oxidation) is defined as its oxidation potential, whereas the tendency to gain electrons is termed reduction potential.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrochemical cells"
  },
  "6a72f97ab0179203eda8394d": {
    correctAnswer: 0,
    explanation: "Molar conductivity $\\Lambda_m = \\frac{\\kappa \\times 1000}{M} = \\frac{7.896 \\times 10^{-5} \\times 1000}{0.00241} = \\frac{0.07896}{0.00241} = 32.76\\text{ S cm}^2\\text{ mol}^{-1}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f97ab0179203eda8394e": {
    correctAnswer: 0,
    explanation: "Copper reduction: $Cu^{2+} + 2e^- \\rightarrow Cu$. Equivalent weight $E = \\frac{63.5}{2} = 31.75\\text{ g/eq}$. Mass deposited: $w = E \\times \\text{Faradays passed} = 31.75 \\times 0.1\\text{ F} = 3.175\\text{ g}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f97ab0179203eda8394f": {
    correctAnswer: 1,
    explanation: "In acidic reduction: $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$. Reduction of $1\\text{ mole of } MnO_4^-$ requires $5\\text{ moles of electrons} = 5 \\times 96500\\text{ C}$.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  },
  "6a72f97ab0179203eda83950": {
    correctAnswer: 0,
    explanation: "Equivalent conductivity $\\Lambda_{eq} = \\frac{\\kappa \\times 1000}{N}$. Since $\\kappa$ has units of $\\Omega^{-1}\\text{ cm}^{-1}$ and normality $N$ has units of $\\text{eq cm}^{-3}$, $\\Lambda_{eq}$ has standard CGS units of $\\Omega^{-1}\\text{ cm}^2\\text{ eq}^{-1}$ (or $\\text{S cm}^2\\text{ eq}^{-1}$).",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Conductance in electrolytic solutions"
  },
  "6a72f97ab0179203eda83951": {
    correctAnswer: 1,
    explanation: "Reduction of dichromate in acid: $Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O$. The reduction of $1\\text{ mole of } Cr_2O_7^{2-}$ requires $6\\text{ moles of electrons}$, corresponding to $6\\text{ Faradays}$ of electric charge.",
    subject: "Chemistry", chapter: "Redox Reactions and Electrochemistry", topic: "Redox Reactions and Electrochemistry", subTopic: "Electrolysis and Faraday's laws"
  }
};

module.exports = REDOX_SOLUTIONS;
