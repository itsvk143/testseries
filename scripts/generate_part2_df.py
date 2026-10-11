import json

questions = []

def add_q(q, opts, ans_idx, exp, subtopic):
    letters = ['a', 'b', 'c', 'd']
    questions.append({
        "question": q,
        "options": opts,
        "correctAnswer": ans_idx,
        "correctOption": letters[ans_idx],
        "explanation": exp,
        "subTopic": subtopic
    })

# 1. Potassium dichromate acidification & oxidation
add_q(
    "In the reaction of acidified potassium dichromate with hydrogen sulfide, what is the oxidation state change of sulfur and the stoichiometric ratio of $Cr_2O_7^{2-}$ to $H_2S$?",
    [
        "Sulfur changes from $-2$ to $0$; ratio is $1 : 3$",
        "Sulfur changes from $-2$ to $+4$; ratio is $1 : 1$",
        "Sulfur changes from $-2$ to $+6$; ratio is $1 : 4$",
        "Sulfur changes from $0$ to $+2$; ratio is $2 : 3$"
    ],
    0,
    "The balanced redox reaction in acidic medium is: $Cr_2O_7^{2-} + 3H_2S + 8H^+ \\rightarrow 2Cr^{3+} + 3S + 7H_2O$. Here, sulfur is oxidized from $-2$ in $H_2S$ to $0$ in elemental sulfur (precipitate), while chromium is reduced from $+6$ to $+3$. The molar ratio of $Cr_2O_7^{2-}$ to $H_2S$ is exactly $1 : 3$.",
    "Potassium Dichromate Reactions"
)

# 2. Potassium permanganate in alkaline medium
add_q(
    "When $KMnO_4$ acts as an oxidizing agent in faintly alkaline or neutral solution, it oxidizes iodide ($I^-$) to which species, and what is the change in oxidation state of manganese?",
    [
        "$I_2$; $Mn$ changes from $+7$ to $+2$",
        "$IO_3^-$; $Mn$ changes from $+7$ to $+4$",
        "$IO_4^-$; $Mn$ changes from $+7$ to $+6$",
        "$I_2$; $Mn$ changes from $+7$ to $+4$"
    ],
    1,
    "In neutral or faintly alkaline solution, permanganate oxidizes iodide to iodate: $2MnO_4^- + H_2O + I^- \\rightarrow 2MnO_2 + 2OH^- + IO_3^-$. Manganese is reduced from $+7$ in $MnO_4^-$ to $+4$ in $MnO_2$ (brown precipitate). In contrast, in strongly acidic medium, $I^-$ is oxidized to $I_2$ while $Mn$ is reduced to $Mn^{2+}$.",
    "Potassium Permanganate Reactions"
)

# 3. Disproportionation of manganate ion
add_q(
    "The green manganate ion ($MnO_4^{2-}$) is stable only in strongly alkaline solutions. In neutral or acidic solutions, it rapidly disproportionates. What are the products of this disproportionation?",
    [
        "$MnO_4^-$ and $MnO_2$",
        "$MnO_4^-$ and $Mn^{2+}$",
        "$MnO_2$ and $Mn_2O_7$",
        "$MnO$ and $MnO_4^-$"
    ],
    0,
    "In neutral or acidic medium, the green manganate ion disproportionates according to: $3MnO_4^{2-} + 4H^+ \\rightarrow 2MnO_4^- + MnO_2 + 2H_2O$. Here, $Mn(+6)$ disproportionates into $Mn(+7)$ in purple $MnO_4^-$ and $Mn(+4)$ in brown/black $MnO_2$.",
    "Manganate and Permanganate"
)

# 4. Standard reduction potential E°(M2+/M) anomalies
add_q(
    "The standard reduction potential $E^\\circ(M^{2+}/M)$ for copper is positive ($+0.34\\text{ V}$), unlike the other $3d$ transition elements. What is the fundamental thermodynamic reason for this anomaly?",
    [
        "Copper has a very low hydration enthalpy of $Cu^{2+}$ that cannot compensate for the sum of high enthalpy of sublimation and high ionization enthalpies $(\\Delta_{i}H_1 + \\Delta_{i}H_2)$",
        "Copper has exceptionally high second electron gain enthalpy",
        "The enthalpy of sublimation of copper is negative",
        "The lattice enthalpy of metallic copper is the lowest among $3d$ series"
    ],
    0,
    "The reduction potential $E^\\circ(M^{2+}/M)$ is governed by three thermodynamic steps: $\\Delta_{sub}H$, $(\\Delta_{i}H_1 + \\Delta_{i}H_2)$, and $\\Delta_{hyd}H$. Copper has a relatively high enthalpy of atomization and exceptionally high sum of first two ionization enthalpies (due to removing an electron from stable $3d^{10}$). The large negative hydration enthalpy of $Cu^{2+}$ is insufficient to balance this high energy input, resulting in a positive $\\Delta G^\\circ$ for $Cu_{(s)} \\rightarrow Cu^{2+}_{(aq)} + 2e^-$, hence $E^\\circ(Cu^{2+}/Cu) = +0.34\\text{ V}$.",
    "Standard Electrode Potentials"
)

# 5. E°(M3+/M2+) anomaly of Manganese
add_q(
    "Why is the standard electrode potential $E^\\circ(Mn^{3+}/Mn^{2+}) = +1.57\\text{ V}$ significantly more positive than that of $E^\\circ(Fe^{3+}/Fe^{2+}) = +0.77\\text{ V}$ and $E^\\circ(Cr^{3+}/Cr^{2+}) = -0.41\\text{ V}$?",
    [
        "$Mn^{2+}$ has a stable half-filled $d^5$ configuration, giving it very high third ionization enthalpy and making $Mn^{3+}$ a powerful oxidizing agent",
        "$Mn^{3+}$ has a stable half-filled $t_{2g}^3$ configuration in aqueous medium",
        "$Mn^{2+}$ has the lowest hydration enthalpy among divalent $3d$ cations",
        "$Mn^{3+}$ is resistant to reduction because of high crystal field stabilization energy"
    ],
    0,
    "$Mn^{2+}$ has the stable half-filled $3d^5$ configuration. Removing a third electron to form $Mn^{3+}$ ($3d^4$) requires extraordinarily high third ionization enthalpy. Consequently, $Mn^{3+}$ has a very strong thermodynamic tendency to gain an electron to revert to stable $d^5$ $Mn^{2+}$, making $E^\\circ(Mn^{3+}/Mn^{2+})$ very positive ($+1.57\\text{ V}$). Conversely, for Chromium, $Cr^{3+}$ has the stable half-filled $t_{2g}^3$ configuration, making $Cr^{2+}$ a strong reducing agent ($E^\\circ = -0.41\\text{ V}$).",
    "Standard Electrode Potentials"
)

# 6. Interstitial compounds properties
add_q(
    "Which of the following statements is INCORRECT regarding interstitial compounds formed by transition metals with small non-metals like $H, C, N$?",
    [
        "They have higher melting points than the corresponding pure transition metals",
        "They are extremely hard, with some borides approaching the hardness of diamond",
        "They completely lose their metallic conductivity and become electrical insulators",
        "They are chemically inert and retain metallic luster"
    ],
    2,
    "Interstitial compounds retain metallic electrical and thermal conductivity because the metallic lattice and conduction electrons remain intact despite small non-metal atoms occupying interstitial voids. Statement (c) is incorrect (and hence the correct answer). Statements (a), (b), and (d) are all true characteristic properties of interstitial compounds.",
    "Interstitial Compounds"
)

# 7. Chromyl chloride test
add_q(
    "In the chromyl chloride test for chloride ions, deep red vapors of $CrO_2Cl_2$ are passed into aqueous $NaOH$ solution to form a yellow solution of $Na_2CrO_4$, which on acidification with acetic acid and treatment with lead acetate yields a yellow precipitate of:",
    [
        "$PbCrO_4$",
        "$PbCl_2$",
        "$Pb(CH_3COO)_2$",
        "$Cr(OH)_3$"
    ],
    0,
    "The chromyl chloride test involves heating solid chloride with $K_2Cr_2O_7$ and concentrated $H_2SO_4$ to evolve reddish-brown vapors of chromyl chloride ($CrO_2Cl_2$). Absorption in $NaOH$ forms sodium chromate ($Na_2CrO_4$): $CrO_2Cl_2 + 4OH^- \\rightarrow CrO_4^{2-} + 2Cl^- + 2H_2O$. Acidification with acetic acid followed by addition of lead acetate gives a bright yellow precipitate of lead chromate ($PbCrO_4$): $CrO_4^{2-} + Pb^{2+} \\rightarrow PbCrO_4\\downarrow$.",
    "Chromyl Chloride Test"
)

# 8. Spin-only magnetic moment calculation
add_q(
    "Calculate the spin-only magnetic moment of aqueous $[Fe(H_2O)_6]^{2+}$ and $[CoF_6]^{3-}$ in Bohr Magnetons (BM):",
    [
        "$4.90\\text{ BM}$ and $4.90\\text{ BM}$",
        "$5.92\\text{ BM}$ and $3.87\\text{ BM}$",
        "$4.90\\text{ BM}$ and $0\\text{ BM}$",
        "$2.83\\text{ BM}$ and $4.90\\text{ BM}$"
    ],
    0,
    "In $[Fe(H_2O)_6]^{2+}$, $Fe^{2+}$ has $3d^6$ configuration. Water is a weak field ligand, so $t_{2g}^4 e_g^2$, giving $n = 4$ unpaired electrons. $\\mu = \\sqrt{4(4+2)} = \\sqrt{24} \\approx 4.90\\text{ BM}$. In $[CoF_6]^{3-}$, $Co^{3+}$ has $3d^6$ configuration. Fluoride is a weak field ligand, forming a high-spin complex with $n = 4$ unpaired electrons ($t_{2g}^4 e_g^2$). Thus $\\mu = \\sqrt{24} \\approx 4.90\\text{ BM}$. Both have spin-only moments of $4.90\\text{ BM}$.",
    "Magnetic Properties"
)

# 9. Potassium permanganate acidic oxidation of oxalate
add_q(
    "How many moles of electrons are transferred when $1\\text{ mole}$ of $KMnO_4$ oxidizes sodium oxalate ($Na_2C_2O_4$) in acidic medium, and what is the stoichiometric ratio of $MnO_4^-$ to $C_2O_4^{2-}$?",
    [
        "$5$ moles of electrons transferred per mole of $MnO_4^-$; ratio is $2 : 5$",
        "$3$ moles of electrons transferred per mole of $MnO_4^-$; ratio is $1 : 1$",
        "$6$ moles of electrons transferred per mole of $MnO_4^-$; ratio is $1 : 3$",
        "$5$ moles of electrons transferred per mole of $MnO_4^-$; ratio is $5 : 2$"
    ],
    0,
    "In acidic medium, the reduction half-reaction is $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$ (transferring $5$ moles of electrons per mole of $MnO_4^-$). The oxidation half-reaction is $C_2O_4^{2-} \\rightarrow 2CO_2 + 2e^-$ ($2$ electrons per oxalate). Balancing electron transfer gives: $2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \\rightarrow 2Mn^{2+} + 10CO_2 + 8H_2O$. Thus, the stoichiometric ratio of $MnO_4^-$ to $C_2O_4^{2-}$ is $2 : 5$.",
    "Potassium Permanganate Titrations"
)

# 10. Catalytic property of transition metals
add_q(
    "Transition metals and their compounds exhibit high catalytic activity primarily due to which of the following combined features?",
    [
        "Ability to adopt multiple oxidation states, form variable coordination complexes, and provide large surface areas with unpaired d-electrons",
        "High electronegativity and strong ionic lattice stability",
        "Low atomic volume and absence of vacant d-orbitals",
        "Diamagnetic nature and fixed oxidation numbers"
    ],
    0,
    "The catalytic activity of transition metals arises from: (1) their ability to show variable oxidation states and form unstable reaction intermediates with reactants, thereby lowering activation energy, (2) the presence of vacant $(n-1)d$ orbitals that facilitate temporary coordinate bond formation with reactant molecules, and (3) offering high surface area for heterogeneous adsorption.",
    "Catalytic Properties"
)

# 11. Acidified K2Cr2O7 reaction with ferrous ammonium sulfate
add_q(
    "In a redox titration, $25.0\\text{ mL}$ of $0.020\\text{ M } K_2Cr_2O_7$ solution completely oxidizes $Fe^{2+}$ in an acidic solution. The volume of $0.10\\text{ M } Fe^{2+}$ solution consumed is:",
    [
        "$30.0\\text{ mL}$",
        "$25.0\\text{ mL}$",
        "$15.0\\text{ mL}$",
        "$5.0\\text{ mL}$"
    ],
    0,
    "The balanced equation is: $Cr_2O_7^{2-} + 6Fe^{2+} + 14H^+ \\rightarrow 2Cr^{3+} + 6Fe^{3+} + 7H_2O$. Moles of $Cr_2O_7^{2-} = 0.020\\text{ M} \\times 0.025\\text{ L} = 5.0 \\times 10^{-4}\\text{ mol}$. Moles of $Fe^{2+}$ required $= 6 \\times (5.0 \\times 10^{-4}) = 3.0 \\times 10^{-3}\\text{ mol}$. Volume of $0.10\\text{ M } Fe^{2+} = \\frac{3.0 \\times 10^{-3}\\text{ mol}}{0.10\\text{ M}} = 0.030\\text{ L} = 30.0\\text{ mL}$.",
    "Potassium Dichromate Titrations"
)

# 12. Actinoid contraction vs Lanthanoid contraction
add_q(
    "Actinoid contraction is significantly greater from element to element than lanthanoid contraction. What is the fundamental cause of this effect?",
    [
        "$5f$ orbitals have poorer shielding effect than $4f$ orbitals due to their greater spatial extension and diffuse nature",
        "$5f$ electrons have higher penetration power than $4f$ electrons",
        "Actinoids have lower effective nuclear charges than lanthanoids",
        "Actinoid $+3$ cations undergo extensive hydrolysis compared to lanthanoids"
    ],
    0,
    "The $5f$ orbitals extend further in space from the nucleus and are more diffuse than $4f$ orbitals. As a result, $5f$ electrons provide even poorer shielding of the nuclear charge from one electron to the next. The effective nuclear charge increases more rapidly across the actinoid series, resulting in a contraction greater than the lanthanoid contraction.",
    "Actinoid Contraction"
)

# 13. Oxidation states of Actinoids vs Lanthanoids
add_q(
    "Why do actinoids exhibit a much greater variety of oxidation states (e.g., up to $+7$ in $Np$ and $Pu$) compared to lanthanoids, which predominantly exhibit $+3$?",
    [
        "The energy gap between $5f, 6d,$ and $7s$ subshells is comparable, allowing participation of electrons from all three levels",
        "Actinoids have completely filled $5f$ orbitals in their ground state",
        "Lanthanoids have lower ionization enthalpies than actinoids",
        "The metallic bonding in actinoids is entirely ionic"
    ],
    0,
    "In actinoids, the energy levels of $5f, 6d,$ and $7s$ orbitals are very close to each other (comparable energies). Consequently, electrons from all these subshells can readily participate in chemical bonding. In lanthanoids, the energy gap between $4f$ and $5d$ is relatively large, and $4f$ orbitals are buried deep inside the atom (core-like), restricting bonding predominantly to the $+3$ state.",
    "Actinoid Oxidation States"
)

# 14. Formation of Potassium Permanganate from Pyrolusite ore
add_q(
    "In the industrial preparation of $KMnO_4$, pyrolusite ore ($MnO_2$) is fused with $KOH$ in the presence of an oxidizing agent ($KNO_3$ or air) to form compound $X$, which is electrolytically oxidized to $KMnO_4$. Compound $X$ is:",
    [
        "Potassium manganate ($K_2MnO_4$), dark green in color",
        "Potassium permanganate ($KMnO_4$), purple in color",
        "Manganese heptoxide ($Mn_2O_7$), dark green oil",
        "Potassium hypomanganate ($K_3MnO_4$), blue in color"
    ],
    0,
    "Pyrolusite ($MnO_2$) fuses with $KOH$ and air/$KNO_3$ to yield dark green potassium manganate ($K_2MnO_4$): $2MnO_2 + 4KOH + O_2 \\rightarrow 2K_2MnO_4 + 2H_2O$. In the second step, alkaline $K_2MnO_4$ solution is oxidized electrolytically at the anode: $MnO_4^{2-} \\rightarrow MnO_4^- + e^-$, producing purple potassium permanganate ($KMnO_4$).",
    "Preparation of KMnO4"
)

# 15. Electronic configuration of Gadolinium and Lutetium
add_q(
    "The electronic configurations of Gadolinium ($Z = 64$) and Lutetium ($Z = 71$) in their ground state are, respectively:",
    [
        "$[Xe] 4f^7 5d^1 6s^2$ and $[Xe] 4f^{14} 5d^1 6s^2$",
        "$[Xe] 4f^8 6s^2$ and $[Xe] 4f^{14} 6s^2 6p^1$",
        "$[Xe] 4f^7 6s^2 6p^1$ and $[Xe] 4f^{13} 5d^2 6s^2$",
        "$[Xe] 4f^8 5d^0 6s^2$ and $[Xe] 4f^{14} 5d^0 6s^2$"
    ],
    0,
    "Gadolinium ($Z = 64$) has $[Xe] 4f^7 5d^1 6s^2$ because a half-filled $4f^7$ subshell has extra exchange energy stabilization. Lutetium ($Z = 71$) has $[Xe] 4f^{14} 5d^1 6s^2$ because the $4f$ subshell is completely filled ($4f^{14}$), and the extra electron enters the $5d$ orbital. Both have one electron in the $5d$ orbital.",
    "Lanthanide Configurations"
)

# 16. Oxidation states of Chromium and Manganese in oxoanions
add_q(
    "In the oxoanions $Cr_2O_7^{2-}$ and $MnO_4^-$, the bonds between the transition metal and oxygen have significant covalent character. This covalent nature is primarily attributed to:",
    [
        "High oxidation states of $Cr(+6)$ and $Mn(+7)$ having high charge-to-radius ratio and strong polarizing power",
        "Complete transfer of $d$-electrons to oxygen to form rigid ionic lattices",
        "Low electronegativity difference between metal and oxygen",
        "Hydrogen bonding between adjacent oxoanions"
    ],
    0,
    "According to Fajan's rules, very high positive oxidation states ($+6$ in $Cr_2O_7^{2-}$ and $+7$ in $MnO_4^-$) impart tremendous charge density and polarizing power to the metal center. This strongly polarizes the electron clouds of the oxide ($O^{2-}$) ligands, giving substantial covalent character ($d\\pi-p\\pi$ bonding) to the metal-oxygen bonds.",
    "Oxoanions of Transition Metals"
)

# 17. Cr2O7 2- structure and bond lengths
add_q(
    "In the dichromate ion ($Cr_2O_7^{2-}$), which of the following structural descriptions is completely correct?",
    [
        "It consists of two tetrahedra sharing one oxygen corner; the six terminal $Cr-O$ bonds ($163\\text{ pm}$) are equivalent and shorter than the bridging $Cr-O-Cr$ bonds ($179\\text{ pm}$)",
        "All eight $Cr-O$ bonds are identical in length due to symmetrical resonance",
        "The $Cr-O-Cr$ bond angle is strictly linear ($180^\\circ$)",
        "The bridging oxygen has an oxidation state of $-1$ while terminal oxygens are $-2$"
    ],
    0,
    "In $Cr_2O_7^{2-}$, two $CrO_4$ tetrahedra share a common bridging oxygen atom with a $Cr-O-Cr$ bond angle of $126^\\circ$. The six terminal $Cr-O$ bonds have partial double bond character due to resonance and measure $163\\text{ pm}$. The bridging $Cr-O$ bonds are single bonds and measure $179\\text{ pm}$.",
    "Dichromate Structure"
)

# 18. KMnO4 reaction with acidified Mohr's salt
add_q(
    "Mohr's salt, $(NH_4)_2Fe(SO_4)_2\\cdot 6H_2O$, is preferred over $FeSO_4\\cdot 7H_2O$ as a primary standard in permanganometry because:",
    [
        "Mohr's salt is not readily oxidized by atmospheric oxygen due to stability imparted by ammonium ions",
        "Mohr's salt contains both $Fe^{2+}$ and $Fe^{3+}$ in equal amounts",
        "Mohr's salt has a very low molar mass, reducing weighing errors",
        "Mohr's salt requires no acid for the titration"
    ],
    0,
    "Ferrous sulfate heptahydrate ($FeSO_4\\cdot 7H_2O$) is efflorescent and easily aerial oxidized to basic ferric sulfate. Mohr's salt is a stable double salt that does not undergo aerial oxidation readily, maintains its stoichiometric hydration ($6H_2O$), and has a high molar mass ($392.14\\text{ g/mol}$), making it an ideal primary standard.",
    "Permanganometry Standards"
)

# 19. Enthalpy of atomization across 3d series
add_q(
    "Across the $3d$ series, vanadium has a very high enthalpy of atomization ($515\\text{ kJ/mol}$), whereas zinc has the lowest enthalpy of atomization ($126\\text{ kJ/mol}$). This sharp difference occurs because:",
    [
        "Vanadium has 5 valence electrons ($3d^3 4s^2$) participating in strong metallic bonding, while zinc has fully paired electrons ($3d^{10} 4s^2$) with no unpaired d-electrons",
        "Zinc has a much smaller atomic radius than vanadium",
        "Vanadium forms covalent interstitial network lattices in the pure metallic state",
        "Zinc undergoes sublimation at absolute zero"
    ],
    0,
    "The strength of metallic bonding in transition metals depends on the number of unpaired valence electrons that can participate in delocalized interatomic bonding. Vanadium has $3d^3 4s^2$ (maximal contribution of unpaired d-electrons), creating very strong metallic bonds. Zinc has $3d^{10} 4s^2$ with completely paired electrons, leading to weak metallic bonding and the lowest enthalpy of atomization.",
    "Enthalpy of Atomization"
)

# 20. Paramagnetic behavior of Cr2+ vs Fe2+
add_q(
    "Consider the complex ions $[Cr(H_2O)_6]^{2+}$ and $[Fe(H_2O)_6]^{2+}$. Their spin-only magnetic moments are, respectively:",
    [
        "$4.90\\text{ BM}$ and $4.90\\text{ BM}$",
        "$3.87\\text{ BM}$ and $4.90\\text{ BM}$",
        "$4.90\\text{ BM}$ and $5.92\\text{ BM}$",
        "$2.83\\text{ BM}$ and $4.90\\text{ BM}$"
    ],
    0,
    "For $Cr^{2+}$ ($3d^4$) with weak field ligand $H_2O$: configuration is $t_{2g}^3 e_g^1$, having $n = 4$ unpaired electrons. $\\mu = \\sqrt{4(4+2)} = \\sqrt{24} \\approx 4.90\\text{ BM}$. For $Fe^{2+}$ ($3d^6$) with weak field $H_2O$: configuration is $t_{2g}^4 e_g^2$, having $n = 4$ unpaired electrons. $\\mu = \\sqrt{4(4+2)} = \\sqrt{24} \\approx 4.90\\text{ BM}$. Both ions possess $4$ unpaired electrons and the same spin-only moment of $4.90\\text{ BM}$.",
    "Magnetic Properties"
)

# Add brown ring & Thorium explicitly
add_q(
    "In the brown ring test for nitrate ions, the brown ring complex $[Fe(H_2O)_5(NO)]SO_4$ is formed. What is the oxidation state of iron and the magnetic moment of this complex?",
    [
        "Iron is in $+1$ oxidation state; $\\mu = 3.87\\text{ BM}$ ($n=3$)",
        "Iron is in $+2$ oxidation state; $\\mu = 4.90\\text{ BM}$ ($n=4$)",
        "Iron is in $+3$ oxidation state; $\\mu = 5.92\\text{ BM}$ ($n=5$)",
        "Iron is in $0$ oxidation state; diamagnetic"
    ],
    0,
    "In the brown ring complex $[Fe(H_2O)_5(NO)]^{2+}$, nitric oxide binds as the nitrosonium cation ($NO^+$). Transfer of one electron from $NO$ to $Fe^{2+}$ reduces iron to $Fe^+$ ($3d^7$). With three unpaired electrons ($n = 3$), the spin-only magnetic moment is $\\mu = \\sqrt{3(3+2)} = \\sqrt{15} \\approx 3.87\\text{ BM}$. Hence iron is in the $+1$ oxidation state.",
    "Brown Ring Complex"
)

add_q(
    "Thorium ($Th$, $Z = 90$) is an early actinoid. What is its ground state electronic configuration, and why does it differ from the general actinoid trend?",
    [
        "$[Rn] 6d^2 7s^2$; because the $5f$ subshell is higher in energy than $6d$ for Thorium",
        "$[Rn] 5f^2 7s^2$; normal Aufbau filling",
        "$[Rn] 5f^1 6d^1 7s^2$; half-filling stabilization",
        "$[Rn] 5f^4 7s^0$; completely paired f-electrons"
    ],
    0,
    "For the earliest actinoids, the $5f$ and $6d$ orbitals are very close in energy, but for Thorium ($Z = 90$), the $6d$ orbital is slightly lower in energy than $5f$. Consequently, Thorium has the electronic configuration $[Rn] 6d^2 7s^2$ with no electrons in the $5f$ orbital.",
    "Actinoid Configurations"
)

subtopics = [
    ("Lanthanide Electronic Configurations", "Which lanthanide element exhibits a stable +4 oxidation state due to attaining a noble gas configuration ($[Xe]$)?", 
     ["$Ce$ ($Z=58$)", "$Eu$ ($Z=63$)", "$Yb$ ($Z=70$)", "$Lu$ ($Z=71$)"], 0,
     "Cerium ($Ce$, $Z = 58$) has configuration $[Xe] 4f^1 5d^1 6s^2$. By losing 4 electrons to form $Ce^{4+}$, it attains the highly stable noble gas electronic configuration of xenon ($[Xe]$). Hence $Ce^{4+}$ is readily formed and acts as a strong oxidizing agent reverting to $Ce^{3+}$."),
    ("Lanthanide +2 Oxidation State", "Which of the following lanthanide ions is a powerful reducing agent because it readily oxidizes to the stable +3 state?", 
     ["$Eu^{2+}$", "$Ce^{4+}$", "$Tb^{4+}$", "$Lu^{3+}$"], 0,
     "$Eu^{2+}$ has the stable half-filled $[Xe] 4f^7$ configuration. However, the most stable oxidation state of all lanthanides is $+3$. Therefore, $Eu^{2+}$ readily loses an electron to become $Eu^{3+}$, acting as a strong reducing agent ($E^\\circ(Eu^{3+}/Eu^{2+}) = -0.35\\text{ V}$)."),
    ("Terbium Oxidation State", "Terbium ($Tb$, $Z = 65$) shows an exceptional $+4$ oxidation state. What is the electronic configuration of $Tb^{4+}$?", 
     ["$[Xe] 4f^7$", "$[Xe] 4f^8$", "$[Xe] 4f^6$", "$[Xe] 4f^7 5d^1$"], 0,
     "Terbium ($Z = 65$) has neutral configuration $[Xe] 4f^9 6s^2$. In the $+4$ oxidation state, it loses two $6s$ electrons and two $4f$ electrons, leaving $[Xe] 4f^7$. The half-filled $4f^7$ configuration imparts stability to the $+4$ state in $TbO_2$."),
    ("Ytterbium Oxidation State", "Ytterbium ($Yb$, $Z = 70$) shows a stable $+2$ oxidation state in compounds like $YbSO_4$ because $Yb^{2+}$ has:", 
     ["Completely filled $4f^{14}$ configuration", "Half-filled $4f^7$ configuration", "Empty $4f^0$ configuration", "Partially filled $4f^{13} 5d^1$ configuration"], 0,
     "$Yb$ ($Z = 70$) has ground state $[Xe] 4f^{14} 6s^2$. Losing two $6s$ electrons gives $Yb^{2+}$ with the completely filled, extra-stable $[Xe] 4f^{14}$ configuration."),
    ("d-Block Density Trends", "Which transition metal in the $5d$ series has the highest density?", 
     ["Osmium ($Os$) / Iridium ($Ir$)", "Iron ($Fe$)", "Titanium ($Ti$)", "Chromium ($Cr$)"], 0,
     "Due to lanthanide contraction, the volume of $5d$ elements decreases while atomic mass increases significantly. As a result, Osmium ($22.57\\text{ g/cm}^3$) and Iridium ($22.61\\text{ g/cm}^3$) possess the highest densities among all elements in the periodic table."),
    ("Transition Metal Melting Points", "The melting points of transition metals rise to a maximum at $d^5$ (Chromium, Molybdenum, Tungsten) and then decrease. What explains the anomalously low melting point of Manganese ($1246^\\circ\\text{C}$)?", 
     ["Manganese has a stable $3d^5$ shell where electrons are tightly bound, resulting in weaker metallic bonding due to a complex crystal structure with non-equivalent sites", "Manganese is a liquid at room temperature", "Manganese has completely vacant d-orbitals", "Manganese forms interstitial diatomic molecules"], 0,
     "Although Manganese has 5 unpaired $d$-electrons, they are held tightly in the half-filled $3d^5$ subshell with lower participation in delocalized metallic bonding. Additionally, Mn has an unusually complex cubic crystal structure ($\\\\alpha$-Mn) with distorted interatomic distances, causing a sharp dip in melting point compared to Cr."),
    ("Tungsten Applications", "Tungsten ($W$) has the highest melting point ($3422^\\circ\\text{C}$) among all metals primarily because:", 
     ["It has very strong covalent metallic bonding involving maximal overlap of diffuse $5d$ and $6s$ orbitals", "It forms an ionic crystal lattice", "It has an empty valence shell", "It is protected by an oxide film at all temperatures"], 0,
     "In $5d$ metals, the $5d$ orbitals are more spatially extended than $3d$ and $4f$ orbitals, allowing much greater interatomic orbital overlap and extremely strong metallic covalent bonds. In Tungsten ($5d^4 6s^2$), six valence electrons participate in bonding, giving it the highest melting point of any metal."),
    ("Oxidation State of Osmium and Ruthenium", "The highest oxidation state exhibited by any transition elements is $+8$, found in:", 
     ["$OsO_4$ and $RuO_4$", "$KMnO_4$", "$K_2Cr_2O_7$", "$Fe_2O_3$"], 0,
     "Osmium and Ruthenium (Group 8) can utilize all 8 valence electrons ($s$ and $d$) to form stable tetrahedral oxides $OsO_4$ and $RuO_4$, in which the metal exhibits an oxidation state of $+8$."),
    ("Color of Transition Metal Complexes", "The purple color of $KMnO_4$ and intense orange color of $K_2Cr_2O_7$ are NOT due to $d-d$ transitions because $Mn^{7+}$ and $Cr^{6+}$ have $d^0$ configurations. The origin of their intense color is:", 
     ["Ligand-to-Metal Charge Transfer (LMCT)", "Metal-to-Ligand Charge Transfer (MLCT)", "$d-d$ orbital splitting", "Inter-electron repulsion in $s$-orbitals"], 0,
     "In $MnO_4^-$ and $Cr_2O_7^{2-}$, the metal centers have empty $d$ orbitals ($d^0$). The intense absorption in the visible spectrum arises from Ligand-to-Metal Charge Transfer (LMCT), where an electron is momentarily transferred from the filled $2p$ orbitals of oxygen ligands to the empty $d$ orbitals of the highly polarizing metal cation."),
    ("Zinc Cadmium Mercury Classification", "Zinc, Cadmium, and Mercury are often not regarded as true transition metals by IUPAC definition because:", 
     ["They have completely filled $d$-orbitals ($d^{10}$) in both their ground elemental state and their common oxidation states", "They do not conduct electricity", "They form only anionic complexes", "Their compounds are intensely colored"], 0,
     "By IUPAC definition, a transition element is an element whose atom has a partially filled $d$ subshell, or which can give rise to cations with an incomplete $d$ subshell. $Zn, Cd,$ and $Hg$ have $d^{10}$ configurations in their ground state and in their common $+2$ oxidation states ($Zn^{2+}: 3d^{10}$, $Cd^{2+}: 4d^{10}$, $Hg^{2+}: 5d^{10}$)."),
    ("Cr2+ Reducing Power", "$Cr^{2+}$ is a stronger reducing agent than $Fe^{2+}$ in aqueous solution because:", 
     ["$Cr^{3+}$ has a stable half-filled $t_{2g}^3$ configuration in octahedral field", "$Cr^{2+}$ has an empty $d$ subshell", "$Fe^{3+}$ is an alkali metal ion", "$Cr^{3+}$ has $d^5$ configuration"], 0,
     "In aqueous medium (octahedral aqua complex $[Cr(H_2O)_6]^{3+}$), crystal field splitting divides the $d$ orbitals into $t_{2g}$ and $e_g$. $Cr^{3+}$ ($3d^3$) has the configuration $t_{2g}^3$, which is half-filled and possesses extra crystal field stabilization energy. Thus $Cr^{2+}$ easily oxidizes to $Cr^{3+}$ ($E^\\circ = -0.41\\text{ V}$), acting as a powerful reducing agent."),
    ("Scandium Oxidation States", "Why does Scandium ($Z=21$) exhibit only $+3$ oxidation state in its stable compounds, unlike other transition metals?", 
     ["Losing all three valence electrons ($3d^1 4s^2$) yields the stable noble gas configuration of Argon ($[Ar]$)", "Scandium has completely filled d-orbitals", "Scandium has exceptionally high first ionization enthalpy", "Scandium cannot form coordinate bonds"], 0,
     "Scandium has ground state $[Ar] 3d^1 4s^2$. The sum of its first three ionization enthalpies is compensated by the large lattice or hydration enthalpy of $Sc^{3+}$, which attains the stable inert gas configuration of Argon ($[Ar]$). There are no remaining $d$ electrons for higher oxidation states, and $+1$ or $+2$ are unstable with respect to disproportionation."),
    ("Cuprous ion disproportionation", "Why is $Cu^+$ unstable in aqueous solution and readily disproportionates into $Cu^{2+}$ and $Cu$?", 
     ["The much higher hydration enthalpy of $Cu^{2+}$ more than compensates for the second ionization enthalpy of copper", "The first ionization enthalpy of copper is negative", "$Cu^{2+}$ has $3d^{10}$ configuration", "$Cu^+$ reacts with water to form hydrogen gas"], 0,
     "Although $Cu^+$ has a stable $3d^{10}$ configuration, in aqueous solution the reaction $2Cu^+ \\rightarrow Cu^{2+} + Cu$ is thermodynamically favored because the hydration enthalpy of divalent $Cu^{2+}$ ($-2121\\text{ kJ/mol}$) is much more exothermic than that of univalent $Cu^+$ ($-593\\text{ kJ/mol}$), easily overcoming the second ionization energy of copper."),
    ("Chromium and Copper Configurations", "The exceptional electronic configurations of Chromium ($[Ar] 3d^5 4s^1$) and Copper ($[Ar] 3d^{10} 4s^1$) are due to:", 
     ["Extra exchange energy and symmetrical electron distribution of half-filled and fully-filled $d$-orbitals", "Lower nuclear charge of Cr and Cu", "Inability of 4s orbitals to hold two electrons", "Pauli exclusion principle violation in transition metals"], 0,
     "Half-filled ($d^5$) and completely filled ($d^{10}$) subshells possess maximum exchange energy (stabilization arising from exchange of parallel spins among degenerate orbitals) and symmetrical charge distribution, making $[Ar] 3d^5 4s^1$ and $[Ar] 3d^{10} 4s^1$ lower in energy than $[Ar] 3d^4 4s^2$ and $[Ar] 3d^9 4s^2$."),
    ("Iron(III) vs Iron(II) Stability", "In acidic aqueous solution, $Fe^{3+}$ is more stable than $Fe^{2+}$ with respect to further oxidation because:", 
     ["$Fe^{3+}$ has a stable half-filled $3d^5$ configuration with high fourth ionization enthalpy", "$Fe^{3+}$ is diamagnetic", "$Fe^{2+}$ has half-filled $t_{2g}^3$ orbitals", "$Fe^{3+}$ cannot form octahedral complexes"], 0,
     "$Fe^{3+}$ has the stable half-filled $3d^5$ configuration. Further removal of an electron requires breaking into this half-filled symmetric shell, requiring very high fourth ionization energy ($5400\\text{ kJ/mol}$). Hence $Fe^{3+}$ resists further oxidation and is chemically stable."),
    ("Permanganate Titration with HCl", "Why can hydrochloric acid ($HCl$) NOT be used to acidify potassium permanganate in permanganometric titrations?", 
     ["$KMnO_4$ oxidizes $HCl$ to chlorine gas ($Cl_2$), consuming the titrant and giving erroneous results", "$HCl$ precipitates manganese as $MnCl_2$", "$HCl$ reduces $KMnO_4$ to $MnO_2$", "$HCl$ is a weaker acid than $H_2SO_4$"], 0,
     "$KMnO_4$ is a very strong oxidizing agent ($E^\\circ = +1.51\\text{ V}$) and oxidizes chloride ions ($Cl^-$) in $HCl$ ($E^\\circ(Cl_2/Cl^-) = +1.36\\text{ V}$) to toxic chlorine gas ($Cl_2$). Part of the $KMnO_4$ is consumed in oxidizing $HCl$, making accurate titration impossible. Hence dilute $H_2SO_4$ is strictly used."),
    ("Permanganate Titration with HNO3", "Why is nitric acid ($HNO_3$) NOT used to acidify potassium permanganate titrations?", 
     ["$HNO_3$ is itself a strong oxidizing agent and would compete in oxidizing the reducing agent", "$HNO_3$ reduces $KMnO_4$ to $Mn$", "$HNO_3$ precipitates potassium nitrate", "$HNO_3$ decomposes into nitrogen gas immediately"], 0,
     "Nitric acid ($HNO_3$) is a potent oxidizing agent. It would oxidize the analyte (e.g., $Fe^{2+}$ or oxalate) independently of $KMnO_4$, leading to an inaccurate, falsely low titre value. Therefore, only dilute sulfuric acid ($H_2SO_4$) is suitable."),
    ("Green to Orange Dichromate Equilibrium", "When aqueous $NaOH$ is added to an orange solution of potassium dichromate, the color changes to yellow. What species is responsible for this change, and what reaction occurs?", 
     ["Chromate ion ($CrO_4^{2-}$); $Cr_2O_7^{2-} + 2OH^- \\rightleftharpoons 2CrO_4^{2-} + H_2O$", "Chromium trioxide ($CrO_3$); $Cr_2O_7^{2-} \\rightarrow CrO_3 + O_2$", "Chromium(III) hydroxide ($Cr(OH)_3$); $Cr^{6+} + 3OH^- \\rightarrow Cr(OH)_3$", "Potassium chromite ($KCrO_2$); reduction of $Cr(VI)$ to $Cr(III)$"], 0,
     "In aqueous solution, dichromate ($Cr_2O_7^{2-}$, orange) and chromate ($CrO_4^{2-}$, yellow) exist in a pH-dependent equilibrium: $Cr_2O_7^{2-} + 2OH^- \\rightleftharpoons 2CrO_4^{2-} + H_2O$. Adding alkali shifts the equilibrium to yellow chromate ion ($CrO_4^{2-}$). Acidification shifts it back to orange dichromate ($2CrO_4^{2-} + 2H^+ \\rightleftharpoons Cr_2O_7^{2-} + H_2O$)."),
    ("Chromium(VI) Peroxide Complex", "When acidified potassium dichromate is shaken with hydrogen peroxide in the presence of ether, a deep blue color is formed in the ether layer due to the formation of:", 
     ["Chromium pentoxide ($CrO_5$ / $CrO(O_2)_2$)", "Chromyl chloride ($CrO_2Cl_2$)", "Chromium dioxide ($CrO_2$)", "Dichromic acid ($H_2Cr_2O_7$)"], 0,
     "In acidic solution, dichromate reacts with $H_2O_2$ to form chromium pentoxide (oxodiperoxochromium(VI), $CrO_5$): $Cr_2O_7^{2-} + 4H_2O_2 + 2H^+ \\rightarrow 2CrO_5 + 5H_2O$. $CrO_5$ has a butterfly structure with two peroxo linkages and is stabilized in organic solvents like ether, imparting a characteristic deep blue color."),
    ("Oxidation state of Cr in CrO5", "In the butterfly-structured chromium pentoxide ($CrO_5$), what is the oxidation state of chromium?", 
     ["$+6$", "$+10$", "$+4$", "$+5$"], 0,
     "$CrO_5$ contains one oxo-oxygen ($O^{2-}$) and four peroxo-oxygens (two peroxo groups, each oxygen being in $-1$ oxidation state). The formula can be written as $[Cr(=O)(O_2)_2]$. Let oxidation state of Cr be $x$: $x + (-2) + 4(-1) = 0 \\implies x - 6 = 0 \\implies x = +6$."),
    ("Mischmetal Composition", "Mischmetal is a well-known alloy used in lighter flints. What is its typical composition?", 
     ["About $95\\%$ lanthanoids (mainly Ce $\\sim 50\\%$, La $\\sim 40\\%$) and $5\\%$ iron, with traces of S, C, Ca, and Al", "$90\\%$ copper and $10\\%$ tin", "$80\\%$ nickel and $20\\%$ chromium", "$50\\%$ actinoids and $50\\%$ lead"], 0,
     "Mischmetal consists of approximately $95\\%$ lanthanoid metals (typically $\\sim 50\\%$ cerium, $\\sim 40\\%$ lanthanum and neodymium) and $\\sim 5\\%$ iron, along with traces of sulfur, carbon, calcium, and aluminum. It is pyrophoric and used in ignition devices, tracer bullets, and cigarette lighter flints."),
    ("Lanthanoid Magnetic Susceptibility", "Which trivalent lanthanoid ion is diamagnetic due to having an empty $4f$ subshell ($4f^0$)?", 
     ["$La^{3+}$ ($Z=57$)", "$Ce^{3+}$ ($Z=58$)", "$Gd^{3+}$ ($Z=64$)", "$Lu^{3+}$ ($Z=71$)"], 0,
     "Lanthanum ($Z = 57$) has electronic configuration $[Xe] 5d^1 6s^2$. Upon forming $La^{3+}$, it loses both $6s$ and the $5d$ electron, giving $[Xe] 4f^0$. With no unpaired electrons, $La^{3+}$ is completely diamagnetic. (Likewise, $Lu^{3+}$ is diamagnetic due to filled $4f^{14}$)."),
    ("Maximum Magnetic Moment in Lanthanoids", "Which trivalent lanthanide ion has the maximum number of unpaired electrons ($n = 7$) and hence the highest spin-only magnetic moment ($\\\\approx 7.94\\text{ BM}$)?", 
     ["$Gd^{3+}$ ($Z=64$)", "$Eu^{3+}$ ($Z=63$)", "$Tb^{3+}$ ($Z=65$)", "$Dy^{3+}$ ($Z=66$)"], 0,
     "$Gd$ ($Z = 64$) has configuration $[Xe] 4f^7 5d^1 6s^2$. In $Gd^{3+}$, the configuration is $[Xe] 4f^7$ with 7 unpaired electrons in the $4f$ subshell. Its spin-only magnetic moment is $\\mu = \\sqrt{7(7+2)} = \\sqrt{63} \\approx 7.94\\text{ BM}$."),
    ("Alloy Formation Criteria", "Transition metals readily form solid-solution alloys with one another because:", 
     ["Their atomic radii are very similar, differing by less than $15\\%$ (Hume-Rothery rule), allowing easy mutual substitution in crystal lattices", "They all have identical electronegativities", "They form liquid solutions at room temperature", "They have identical boiling points"], 0,
     "According to the Hume-Rothery rules, solid solution alloys form readily when the atomic radii of the solute and solvent atoms differ by less than $15\\%$. Because transition metals have nearly identical atomic radii (due to d-electron shielding and lanthanide contraction), atoms of one transition metal can readily replace atoms of another in the metallic lattice to form homogeneous alloys like brass, bronze, and stainless steel."),
    ("Interstitial Hydrides Properties", "Interstitial hydrides of transition metals (e.g., $VH_{0.56}, TiH_{1.7}$) are non-stoichiometric. What happens to the crystal lattice upon hydrogen absorption?", 
     ["The host metal lattice expands slightly while maintaining metallic structure and electrical conductivity", "The metal lattice completely collapses into an amorphous powder", "The metal forms discrete covalent $M-H$ molecular gases", "The metal becomes transparent and electrically insulating"], 0,
     "Transition metals absorb hydrogen atoms into octahedral or tetrahedral interstitial voids of their metallic lattice. The lattice expands slightly without altering the metallic bonding network. These interstitial hydrides are non-stoichiometric ($MH_x$) and retain metallic electrical conductivity and lustrous appearance."),
    ("Oxidation of Oxalate by Permanganate Kinetics", "In the reaction between $KMnO_4$ and oxalic acid in acidic medium, the reaction is initially slow but accelerates rapidly as it progresses. This phenomenon is an example of:", 
     ["Autocatalysis, catalyzed by generated $Mn^{2+}$ ions", "Enzyme catalysis", "Negative catalysis by $CO_2$", "Heterogeneous surface catalysis by glass walls"], 0,
     "The reaction between $MnO_4^-$ and $C_2O_4^{2-}$ is an autocatalytic reaction. Initially, the rate is slow at room temperature because of high activation energy. As the reaction proceeds, $Mn^{2+}$ ions are produced in solution, which act as a catalyst (autocatalyst) to drastically increase the reaction rate."),
    ("Ti4+ vs Ti3+ Color", "$[Ti(H_2O)_6]^{3+}$ is violet in color, whereas aqueous solutions of $Ti^{4+}$ salts (like $TiCl_4$ in water) are completely colorless. What explains this difference?", 
     ["$Ti^{3+}$ has $3d^1$ configuration capable of $d-d$ transition ($t_{2g}^1 \\rightarrow e_g^1$), whereas $Ti^{4+}$ is $3d^0$ with no $d$-electrons", "$Ti^{4+}$ forms a colloid that scatters light", "$Ti^{3+}$ undergoes charge transfer while $Ti^{4+}$ does not", "$Ti^{4+}$ absorbs light in the infrared region exclusively"], 0,
     "$Ti^{3+}$ has one electron in $3d$ ($3d^1$). In octahedral field $[Ti(H_2O)_6]^{3+}$, absorption of green-yellow light ($~500\\text{ nm}$) promotes this electron from $t_{2g}$ to $e_g$ ($d-d$ transition), transmitting violet light. In contrast, $Ti^{4+}$ has $3d^0$ configuration with no $d$-electrons, so $d-d$ transitions cannot occur, rendering $Ti^{4+}$ completely colorless."),
    ("Variable Oxidation States Range", "In the $3d$ series, which element exhibits the greatest number of different oxidation states in its compounds?", 
     ["Manganese ($+2$ to $+7$)", "Chromium ($+2$ to $+6$)", "Iron ($+2$ to $+6$)", "Vanadium ($+2$ to $+5$)"], 0,
     "Manganese ($3d^5 4s^2$) has 7 valence electrons and exhibits the widest range of oxidation states among $3d$ metals: $+2, +3, +4, +5, +6,$ and $+7$, because all five $3d$ electrons and both $4s$ electrons can participate in chemical bonding."),
    ("Magnetic Behavior of Zinc Cations", "Why are all compounds of $Zn^{2+}$ diamagnetic and colorless in aqueous solution?", 
     ["$Zn^{2+}$ has completely filled $3d^{10}$ subshell, leaving no unpaired electrons and no empty $d$-orbitals for $d-d$ transitions", "$Zn^{2+}$ has $3d^8$ configuration with paired spins", "$Zn^{2+}$ absorbs visible light completely", "$Zn^{2+}$ undergoes spontaneous reduction to zinc metal"], 0,
     "$Zn$ ($Z = 30$) has ground state $[Ar] 3d^{10} 4s^2$. On forming $Zn^{2+}$, it loses its two $4s$ electrons, leaving the completely filled $[Ar] 3d^{10}$ subshell. Because all $d$ electrons are paired ($n = 0$), the ion is diamagnetic. Furthermore, without partially filled $d$-orbitals, $d-d$ transitions cannot occur, so its compounds are colorless."),
    ("Standard Potential of Cobalt(III)", "$E^\\circ(Co^{3+}/Co^{2+}) = +1.97\\text{ V}$ in aqueous medium is exceptionally high, which means that aqueous $Co^{3+}$:", 
     ["Is an extremely powerful oxidizing agent capable of oxidizing water to oxygen gas", "Is a powerful reducing agent", "Is stable in aqueous solutions indefinitely", "Disproportionates spontaneously into cobalt metal and $Co^{2+}$"], 0,
     "Because $E^\\circ(Co^{3+}/Co^{2+}) = +1.97\\text{ V}$ is greater than $E^\\circ(O_2/H_2O) = +1.23\\text{ V}$, aqueous $Co^{3+}$ thermodynamically oxidizes water: $4Co^{3+} + 2H_2O \\rightarrow 4Co^{2+} + O_2 + 4H^+$. Thus simple $Co^{3+}$ salts cannot exist in aqueous solution unless stabilized by strong field ligands like $NH_3$ or $CN^-$."),
    ("Color of Cobalt Complexes", "Anhydrous $CoCl_2$ is blue, but when dissolved in water it forms a pink solution. This color transformation occurs because:", 
     ["Tetrahedral $[CoCl_4]^{2-}$ (blue, no inversion center, intense absorption) converts to octahedral $[Co(H_2O)_6]^{2+}$ (pink, centrosymmetric, Laporte-forbidden weak absorption)", "Cobalt is oxidized from $+2$ to $+3$", "Cobalt is reduced to elemental cobalt", "Water decomposes into hydrogen and oxygen"], 0,
     "In anhydrous state or concentrated $HCl$, cobalt forms the tetrahedral complex $[CoCl_4]^{2-}$, which lacks an inversion center (Laporte partially allowed, intense blue color). On dilution with water, it converts to octahedral $[Co(H_2O)_6]^{2-}$, which possesses an inversion center, making $d-d$ transitions Laporte-forbidden and resulting in a pale pink color."),
    ("Color of Ferric Salts", "Aqueous ferric salts ($Fe^{3+}$) typically appear yellow or brown rather than pale violet. This yellow-brown color is primarily due to:", 
     ["Hydrolysis of $[Fe(H_2O)_6]^{3+}$ to form hydroxo species $[Fe(H_2O)_5(OH)]^{2+}$ and polynuclear oxo-bridged complexes displaying LMCT absorption", "Precipitation of metallic iron", "Emission of visible light by radioactive decay", "Complete loss of water molecules from the coordination sphere"], 0,
     "The hexaaqua ion $[Fe(H_2O)_6]^{3+}$ is pale violet because high-spin $d^5$ transitions are spin-forbidden. However, $[Fe(H_2O)_6]^{3+}$ is strongly acidic and hydrolyzes in water: $[Fe(H_2O)_6]^{3+} + H_2O \\rightleftharpoons [Fe(H_2O)_5(OH)]^{2+} + H_3O^+$. The hydroxo complex has a strong Ligand-to-Metal Charge Transfer band that tails into the visible spectrum, producing the characteristic yellow-brown color."),
    ("CuSO4 Heating Reaction", "When blue vitriol ($CuSO_4\\cdot 5H_2O$) is heated progressively, which temperature/water loss step corresponds to the loss of the uniquely hydrogen-bonded fifth water molecule?", 
     ["At around $250^\\circ\\text{C}$ to form anhydrous white $CuSO_4$", "At $100^\\circ\\text{C}$ to form $CuSO_4\\cdot 4H_2O$", "At $110^\\circ\\text{C}$ to form $CuSO_4\\cdot 3H_2O$", "At $50^\\circ\\text{C}$ to form $CuSO_4\\cdot H_2O$"], 0,
     "In $CuSO_4\\cdot 5H_2O$, four water molecules are coordinated directly to $Cu^{2+}$ in a square planar arrangement ($[Cu(H_2O)_4]^{2+}$), while the fifth water molecule is hydrogen-bonded between coordinated water molecules and sulfate ions. Heating to $\\sim 100^\\circ\\text{C}$ removes two waters, at $110^\\circ\\text{C}$ two more are lost, and only at $\\sim 250^\\circ\\text{C}$ is the fifth, hydrogen-bonded water driven off to yield white anhydrous $CuSO_4$."),
    ("Anhydrous CuCl2 vs Hydrated CuCl2", "Anhydrous $CuCl_2$ is dark brown, but on addition of water it forms a bright green to blue solution. The blue color in dilute solution is due to:", 
     ["$[Cu(H_2O)_6]^{2+}$", "$[CuCl_4]^{2-}$", "$Cu_2O$", "$[Cu(OH)_4]^{2-}$"], 0,
     "In concentrated solution, green $[CuCl_4]^{2-}$ or mixed chloro-aqua complexes predominate. Upon significant dilution with water, chloride ligands are displaced by water molecules to form the hexaaquacopper(II) ion $[Cu(H_2O)_6]^{2+}$, which imparts a characteristic bright blue color."),
    ("Reaction of K2Cr2O7 with Potassium Iodide", "When acidified potassium dichromate is treated with excess potassium iodide ($KI$), what is the liberated product and the color change of the solution?", 
     ["Iodine ($I_2$) is liberated and the solution turns deep brown; $Cr_2O_7^{2-} + 6I^- + 14H^+ \\rightarrow 2Cr^{3+} + 3I_2 + 7H_2O$", "Oxygen gas is liberated and solution turns colorless", "Potassium periodate precipitates as white solid", "Chromium iodide precipitates as green solid"], 0,
     "Acidified $K_2Cr_2O_7$ oxidizes iodide ($I^-$) to elemental iodine ($I_2$): $Cr_2O_7^{2-} + 6I^- + 14H^+ \\rightarrow 2Cr^{3+} + 3I_2 + 7H_2O$. The liberated iodine dissolves in excess iodide to form $I_3^-$, turning the solution deep brown."),
    ("Reaction of KMnO4 with SO2", "When sulfur dioxide gas ($SO_2$) is bubbled through an acidified solution of potassium permanganate:", 
     ["The purple color is discharged due to reduction of $MnO_4^-$ to colorless $Mn^{2+}$, while $SO_2$ is oxidized to $SO_4^{2-}$", "A yellow precipitate of elemental sulfur is immediately formed", "The solution turns deep green due to formation of $MnO_4^{2-}$", "A brown precipitate of $MnO_2$ is formed"], 0,
     "Acidified $KMnO_4$ oxidizes sulfur dioxide to sulfate: $2MnO_4^- + 5SO_2 + 2H_2O \\rightarrow 2Mn^{2+} + 5SO_4^{2-} + 4H^+$. The purple permanganate ion is reduced to virtually colorless $Mn^{2+}$, thereby discharging the purple color. This reaction serves as a standard test for $SO_2$ gas."),
    ("Reaction of KMnO4 with Nitrite", "When acidified $KMnO_4$ reacts with potassium nitrite ($KNO_2$), nitrite is oxidized to:", 
     ["Nitrate ion ($NO_3^-$); $2MnO_4^- + 5NO_2^- + 6H^+ \\rightarrow 2Mn^{2+} + 5NO_3^- + 3H_2O$", "Nitric oxide ($NO$)", "Nitrous oxide ($N_2O$)", "Ammonia ($NH_3$)"], 0,
     "Acidified permanganate oxidizes nitrite ($NO_2^-$) to nitrate ($NO_3^-$): $2MnO_4^- + 5NO_2^- + 6H^+ \\rightarrow 2Mn^{2+} + 5NO_3^- + 3H_2O$. Nitrogen changes its oxidation state from $+3$ in nitrite to $+5$ in nitrate."),
    ("Reaction of Acidified K2Cr2O7 with SO2", "When $SO_2$ gas is passed into an acidified solution of $K_2Cr_2O_7$, the orange color turns green due to:", 
     ["Reduction of $Cr_2O_7^{2-}$ to $Cr_2(SO_4)_3$ ($Cr^{3+}$, green)", "Formation of elemental sulfur", "Formation of chromyl chloride", "Precipitation of chromium trioxide"], 0,
     "Sulfur dioxide reduces acidified potassium dichromate to green chromium(III) sulfate: $K_2Cr_2O_7 + 3SO_2 + H_2SO_4 \\rightarrow K_2SO_4 + Cr_2(SO_4)_3 + H_2O$. The formation of green $Cr^{3+}$ ions confirms the presence of sulfur dioxide."),
    ("Amphoteric nature of Transition Oxides", "Among the oxides of chromium, $CrO$, $Cr_2O_3$, and $CrO_3$, their acid-base character is correctly ordered as:", 
     ["$CrO$ is basic, $Cr_2O_3$ is amphoteric, and $CrO_3$ is acidic", "$CrO$ is acidic, $Cr_2O_3$ is basic, and $CrO_3$ is neutral", "$CrO$ is amphoteric, $Cr_2O_3$ is acidic, and $CrO_3$ is basic", "All three oxides are strictly acidic"], 0,
     "As the oxidation state of a transition metal increases, the ionic character decreases and covalent character increases. In low oxidation state $+2$, $CrO$ is ionic and basic. In intermediate oxidation state $+3$, $Cr_2O_3$ is amphoteric (dissolving in both acids and alkalis). In high oxidation state $+6$, $CrO_3$ is covalent and strongly acidic (dissolving in water to give chromic acid $H_2CrO_4$)."),
    ("Manganese Oxides Acidity Trend", "Which of the following manganese oxides is strongly acidic and forms an oily liquid at room temperature?", 
     ["$Mn_2O_7$", "$MnO$", "$Mn_2O_3$", "$MnO_2$"], 0,
     "In $Mn_2O_7$, manganese is in its maximum oxidation state $+7$. It is a covalent, green oily liquid that dissolves in water to form permanganic acid ($HMnO_4$). In contrast, $MnO$ ($+2$) is basic, $Mn_2O_3$ ($+3$) is basic/weakly amphoteric, and $MnO_2$ ($+4$) is amphoteric."),
    ("Magnetic Behavior of Actinoids", "Magnetic properties of actinoid ions are more complex than those of lanthanoid ions because:", 
     ["$5f$ electrons participate more in chemical bonding and experience stronger crystal field effects from surrounding ligands than $4f$ electrons", "$5f$ electrons have no spin magnetic moment", "Actinoids are all diamagnetic", "Actinoids do not have unpaired electrons"], 0,
     "Unlike the deeply buried $4f$ orbitals in lanthanoids, $5f$ orbitals in actinoids extend into the coordination sphere. Consequently, $5f$ electrons interact strongly with the ligand environment and crystal field, quenching orbital angular momentum to varying degrees and producing complex magnetic susceptibilities.")
]

for sub, q, opts, ans, exp in subtopics:
    add_q(q, opts, ans, exp, sub)

print("Generated total part2 questions:", len(questions))

with open("scripts/replacement_data_part2_df.js", "w") as f:
    f.write("module.exports = " + json.dumps(questions, indent=2) + ";\n")
