// Part 2: Authentic Questions for Redox Reactions and Electrochemistry
// Subtopics: Nernst equation (48), Faraday's laws of electrolysis (48), Batteries, fuel cells, and corrosion (48)

function getNernstEquationQuestions() {
  const list = [];
  const st = "Nernst equation";

  // 7 MCQs
  list.push(createMCQ(st,
    "For the cell reaction $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightleftharpoons \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$, which of the following operations will increase the cell electromotive force ($E_{\\text{cell}}$)?",
    ["Increasing the concentration of $\\text{Cu}^{2+}$ ions", "Increasing the concentration of $\\text{Zn}^{2+}$ ions", "Increasing the surface area of the zinc electrode", "Increasing the surface area of the copper electrode"], 0,
    "According to the Nernst equation: $E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{2}\\log\\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}$. Increasing $[\\text{Cu}^{2+}]$ decreases the value of the quotient $Q$, thereby increasing $E_{\\text{cell}}$. Electrode surface areas do not affect cell potential."
  ));
  list.push(createMCQ(st,
    "For a hydrogen electrode $\\text{Pt}(s) | \\text{H}_2(g, 1\\text{ bar}) | \\text{H}^+(aq)$, the reduction potential at $298\\text{ K}$ in a solution of $\\text{pH} = 3$ is:",
    ["$-0.177\\text{ V}$", "$+0.177\\text{ V}$", "$-0.0591\\text{ V}$", "$0.00\\text{ V}$"], 0,
    "The reduction half-reaction is $\\text{H}^+ + e^- \\rightarrow \\frac{1}{2}\\text{H}_2$. By the Nernst equation: $E = E^\\circ - 0.0591\\log\\frac{1}{[\\text{H}^+]} = 0 - 0.0591 \\times \\text{pH} = -0.0591 \\times 3 = -0.1773\\text{ V} \\approx -0.177\\text{ V}$."
  ));
  list.push(createMCQ(st,
    "For the concentration cell $\\text{Pt} | \\text{H}_2(1\\text{ bar}) | \\text{H}^+(c_1) || \\text{H}^+(c_2) | \\text{H}_2(1\\text{ bar}) | \\text{Pt}$, the cell potential is positive and spontaneous when:",
    ["$c_2 > c_1$", "$c_1 > c_2$", "$c_1 = c_2$", "Concentration of $\\text{H}^+$ does not affect emf"], 0,
    "In a concentration cell, oxidation occurs at the lower concentration ($c_1$) and reduction occurs at the higher concentration ($c_2$). $E_{\\text{cell}} = \\frac{0.0591}{1}\\log\\frac{c_2}{c_1}$. For $E_{\\text{cell}} > 0$, we must have $c_2 > c_1$."
  ));
  list.push(createMCQ(st,
    "The relationship between the standard electrode potential ($E^\\circ_{\\text{cell}}$) and the equilibrium constant ($K_c$) of a cell reaction at $298\\text{ K}$ is:",
    ["$E^\\circ_{\\text{cell}} = \\frac{0.0591}{n}\\log K_c$", "$E^\\circ_{\\text{cell}} = -\\frac{0.0591}{n}\\log K_c$", "$E^\\circ_{\\text{cell}} = \\frac{n}{0.0591}\\log K_c$", "$\\log K_c = \\frac{0.0591}{n}E^\\circ_{\\text{cell}}$"], 0,
    "At equilibrium, $E_{\\text{cell}} = 0$ and $Q = K_c$. Thus $0 = E^\\circ_{\\text{cell}} - \\frac{2.303 RT}{nF}\\log K_c \\implies E^\\circ_{\\text{cell}} = \\frac{0.0591}{n}\\log K_c$ at $298\\text{ K}$."
  ));
  list.push(createMCQ(st,
    "If the concentration of $\\text{Ag}^+$ in an $\\text{Ag}^+/\\text{Ag}$ half-cell is decreased from $1\\text{ M}$ to $0.1\\text{ M}$ at $298\\text{ K}$, its reduction potential will:",
    ["Decrease by $0.0591\\text{ V}$", "Increase by $0.0591\\text{ V}$", "Decrease by $0.0295\\text{ V}$", "Increase by $0.0295\\text{ V}$"], 0,
    "$E = E^\\circ - \\frac{0.0591}{1}\\log\\frac{1}{[\\text{Ag}^+]}$. For $[\\text{Ag}^+] = 0.1\\text{ M}$, $E = E^\\circ - 0.0591\\log(10) = E^\\circ - 0.0591\\text{ V}$, so the reduction potential decreases by $0.0591\\text{ V}$."
  ));
  list.push(createMCQ(st,
    "A graph of $E_{\\text{cell}}$ versus $\\log\\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}$ for the Daniell cell at $298\\text{ K}$ is a straight line with slope:",
    ["$-0.0295\\text{ V}$", "$+0.0295\\text{ V}$", "$-0.0591\\text{ V}$", "$+0.0591\\text{ V}$"], 0,
    "For Daniell cell, $n = 2$. $E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{2}\\log\\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}$. Comparing with $y = mx + c$, the slope is $m = -\\frac{0.0591}{2} = -0.02955\\text{ V} \\approx -0.0295\\text{ V}$."
  ));
  list.push(createMCQ(st,
    "The temperature coefficient of a cell potential is $\\left(\\frac{\\partial E}{\\partial T}\\right)_P$. The change in reaction entropy $\\Delta S$ is related to it by:",
    ["$\\Delta S = nF\\left(\\frac{\\partial E}{\\partial T}\\right)_P$", "$\\Delta S = -nF\\left(\\frac{\\partial E}{\\partial T}\\right)_P$", "$\\Delta S = \\frac{nF}{T}\\left(\\frac{\\partial E}{\\partial T}\\right)_P$", "$\\Delta S = \\frac{T}{nF}\\left(\\frac{\\partial E}{\\partial T}\\right)_P$"], 0,
    "From thermodynamics, $dG = VdP - SdT \\implies \\left(\\frac{\\partial G}{\\partial T}\\right)_P = -S$. Since $\\Delta G = -nFE$, differentiation gives $-\\Delta S = -nF\\left(\\frac{\\partial E}{\\partial T}\\right)_P \\implies \\Delta S = nF\\left(\\frac{\\partial E}{\\partial T}\\right)_P$."
  ));

  // 26 ARs
  list.push(createAR(st,
    "For a galvanic cell, $E_{\\text{cell}}$ becomes zero when the cell reaction reaches equilibrium.",
    "At equilibrium, the Gibbs free energy change $\\Delta G$ for the reaction is zero, and $\\Delta G = -nFE_{\\text{cell}}$.",
    0, "Both (A) and (R) are true and (R) correctly explains that $\\Delta G = 0 \\implies E_{\\text{cell}} = 0$."
  ));
  list.push(createAR(st,
    "A cell reaction is spontaneous in the forward direction when $E_{\\text{cell}} > 0$.",
    "Spontaneity requires $\\Delta G < 0$, and $\\Delta G$ is related to cell potential by $\\Delta G = -nFE_{\\text{cell}}$.",
    0, "Both (A) and (R) are true and (R) explains the thermodynamic condition for spontaneity."
  ));
  list.push(createAR(st,
    "Standard electrode potential $E^\\circ$ is an intensive property and does not depend on the stoichiometric coefficients of the reaction.",
    "Multiplying a balanced half-reaction by any integer factor multiplies both $\\Delta G^\\circ$ and the number of electrons transferred $n$ by the same factor, leaving the ratio $E^\\circ = -\\Delta G^\\circ / (nF)$ unchanged.",
    0, "Both (A) and (R) are true and (R) mathematically justifies why $E^\\circ$ is intensive."
  ));
  list.push(createAR(st,
    "The potential of a single electrode depends on the concentration of ions in the electrolytic solution.",
    "According to the Nernst equation, electrode potential varies linearly with the logarithm of the active ion concentration.",
    0, "Both (A) and (R) are true and (R) provides the Nernst relation $E = E^\\circ - \\frac{RT}{nF}\\ln Q$."
  ));
  list.push(createAR(st,
    "In a concentration cell, the standard cell potential $E^\\circ_{\\text{cell}}$ is always zero.",
    "Both the anode and cathode are made of identical electrodes immersed in solutions of the same electrolyte at different concentrations.",
    0, "Both (A) and (R) are true: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0$ because both electrodes are the same substance."
  ));
  list.push(createAR(st,
    "The electromotive force of a Daniell cell decreases as the cell discharges over time.",
    "During discharge, $[\\text{Zn}^{2+}]$ increases due to anode oxidation while $[\\text{Cu}^{2+}]$ decreases due to cathode reduction, increasing the reaction quotient $Q$.",
    0, "Both (A) and (R) are true and (R) explains why $E_{\\text{cell}}$ drops until equilibrium is reached."
  ));
  list.push(createAR(st,
    "For the cell reaction $2\\text{Fe}^{3+} + 2\\text{I}^- \\rightarrow 2\\text{Fe}^{2+} + \\text{I}_2$, $n$ is equal to $2$.",
    "Two moles of $\\text{Fe}^{3+}$ accept a total of two moles of electrons from two moles of iodide ions.",
    0, "Both (A) and (R) are true and (R) gives the stoichiometric number of electrons transferred."
  ));
  list.push(createAR(st,
    "The standard reduction potential of the standard hydrogen electrode is taken as $0.00\\text{ V}$ by convention at all temperatures.",
    "The standard hydrogen electrode is adopted as the universal reference electrode against which all other electrode potentials are assigned.",
    0, "Both (A) and (R) are true and (R) gives the reason for the IUPAC arbitrary zero assignment."
  ));
  list.push(createAR(st,
    "Copper displaces silver from silver nitrate solution, but silver cannot displace copper from copper sulfate solution.",
    "The standard reduction potential of $\\text{Ag}^+/\\text{Ag}$ ($+0.80\\text{ V}$) is more positive than that of $\\text{Cu}^{2+}/\\text{Cu}$ ($+0.34\\text{ V}$).",
    0, "Both (A) and (R) are true and (R) explains why $\\text{Ag}^+$ is a stronger oxidizing agent than $\\text{Cu}^{2+}$."
  ));
  list.push(createAR(st,
    "Zinc displaces hydrogen gas from dilute sulfuric acid, whereas copper does not.",
    "The standard reduction potential of $\\text{Zn}^{2+}/\\text{Zn}$ ($-0.76\\text{ V}$) is negative, while that of $\\text{Cu}^{2+}/\\text{Cu}$ ($+0.34\\text{ V}$) is positive relative to the standard hydrogen electrode.",
    0, "Both (A) and (R) are true and (R) explains displacement from dilute non-oxidizing acids."
  ));
  list.push(createAR(st,
    "Fluorine gas is the strongest oxidizing agent among all elements in the electrochemical series.",
    "Fluorine has the highest standard reduction potential ($E^\\circ_{\\text{F}_2/\\text{F}^-} = +2.87\\text{ V}$) due to its high electronegativity and low $\\text{F}-\\text{F}$ bond dissociation enthalpy.",
    0, "Both (A) and (R) are true and (R) provides the thermodynamic reasons for fluorine's oxidizing power."
  ));
  list.push(createAR(st,
    "Lithium has the highest negative standard reduction potential ($-3.05\\text{ V}$) among all metals, making it the strongest reducing agent in aqueous solution.",
    "Lithium has an extremely high hydration enthalpy of its tiny $\\text{Li}^+$ cation, which overcompensates for its high ionization enthalpy.",
    0, "Both (A) and (R) are true and (R) is the classic thermodynamic explanation in aqueous media."
  ));
  list.push(createAR(st,
    "A salt bridge is used to connect the two half-cells of a galvanic cell.",
    "The salt bridge maintains electrical neutrality in both half-cell solutions and minimizes the liquid junction potential.",
    0, "Both (A) and (R) are true and (R) describes the two essential functions of a salt bridge."
  ));
  list.push(createAR(st,
    "Potassium chloride ($\\text{KCl}$) is commonly used in a salt bridge.",
    "The ionic mobilities and transport numbers of $\\text{K}^+$ and $\\text{Cl}^-$ ions are nearly identical in aqueous medium.",
    0, "Both (A) and (R) are true and (R) explains why liquid junction potential is eliminated."
  ));
  list.push(createAR(st,
    "$\\text{KCl}$ cannot be used in a salt bridge for a half-cell containing silver, lead, or thallium ions.",
    "$\\text{Cl}^-$ ions diffuse into the half-cell and form insoluble precipitates of $\\text{AgCl}, \\text{PbCl}_2$, or $\\text{TlCl}$.",
    0, "Both (A) and (R) are true and (R) gives the precipitation interference."
  ));
  list.push(createAR(st,
    "The potential of a standard hydrogen electrode decreases when the $\\text{pH}$ of the solution is increased.",
    "As $\\text{pH}$ increases, $[\\text{H}^+]$ decreases, shifting the reduction equilibrium $2\\text{H}^+ + 2e^- \\rightleftharpoons \\text{H}_2$ to the left according to Le Chatelier's principle.",
    0, "Both (A) and (R) are true and (R) explains the Nernst relationship $E = -0.0591\\text{ pH}$."
  ));
  list.push(createAR(st,
    "The maximum electrical work obtainable from a galvanic cell is equal to the decrease in Gibbs free energy ($-\\Delta G$).",
    "Under reversible and constant temperature-pressure conditions, the non-expansion work delivered by a system equals $-\\Delta G$.",
    0, "Both (A) and (R) are true: $w_{\\text{elec, max}} = -\\Delta G = nFE_{\\text{cell}}$."
  ));
  list.push(createAR(st,
    "If an external opposing potential equal to $E_{\\text{cell}}$ is applied across a galvanic cell, no current flows.",
    "The external opposing potential completely balances the electromotive force of the cell, establishing an electrical equilibrium.",
    0, "Both (A) and (R) are true and (R) describes the Poggendorff compensation method."
  ));
  list.push(createAR(st,
    "When an external potential greater than $E_{\\text{cell}}$ is applied in the opposite direction, the galvanic cell functions as an electrolytic cell.",
    "The non-spontaneous reverse redox reaction is driven by the excess external electrical energy.",
    0, "Both (A) and (R) are true and (R) explains the transition from galvanic to electrolytic mode."
  ));
  list.push(createAR(st,
    "The Nernst equation is valid only at $298\\text{ K}$.",
    "The constant factor $0.0591$ in the Nernst equation is evaluated specifically using $T = 298.15\\text{ K}$.",
    3, "(A) is false because the Nernst equation $E = E^\\circ - \\frac{RT}{nF}\\ln Q$ is valid at any temperature. (R) is true because $2.303 RT/F = 0.0591\\text{ V}$ holds only at $298\\text{ K}$."
  ));
  list.push(createAR(st,
    "Addition of ammonia to the copper half-cell of a Daniell cell decreases its electrode potential.",
    "Ammonia forms a highly stable complex $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$ with $\\text{Cu}^{2+}$, drastically reducing the concentration of free $\\text{Cu}^{2+}$ ions.",
    0, "Both (A) and (R) are true and (R) explains the drop in reduction potential by Nernst equation."
  ));
  list.push(createAR(st,
    "A spontaneous redox reaction corresponds to an equilibrium constant $K_c > 1$.",
    "For a spontaneous reaction under standard conditions, $E^\\circ > 0$, which leads to $\\log K_c = \\frac{nE^\\circ}{0.0591} > 0$, implying $K_c > 1$.",
    0, "Both (A) and (R) are true and (R) proves the mathematical equivalence."
  ));
  list.push(createAR(st,
    "Electrons flow from anode to cathode through the external metallic wire in a galvanic cell.",
    "Oxidation occurs at the anode releasing electrons, making it negative relative to the cathode where reduction consumes electrons.",
    0, "Both (A) and (R) are true and (R) explains the polarity and external electron path."
  ));
  list.push(createAR(st,
    "In the IUPAC representation of a galvanic cell, the anode is written on the left and the cathode on the right.",
    "The conventional alphabetical acronym LOAN states that Left is Oxidation, Anode, Negative.",
    0, "Both (A) and (R) are true and (R) is the IUPAC cell convention mnemonic."
  ));
  list.push(createAR(st,
    "The standard reduction potential of an element can be measured directly by immersing it into its standard solution.",
    "A single electrode cannot undergo a redox reaction without being coupled to another half-cell to form a complete circuit.",
    3, "(A) is false because single electrode potentials cannot be measured in isolation. (R) is true."
  ));
  list.push(createAR(st,
    "The cell potential $E_{\\text{cell}}$ is an intensive property, while the Gibbs energy change $\\Delta G$ is an extensive property.",
    "Cell potential does not depend on the quantity of matter reacting, whereas Gibbs free energy is directly proportional to the amount of substance reacting.",
    0, "Both (A) and (R) are true and (R) defines intensive vs extensive thermodynamic properties."
  ));

  // 15 Numericals
  list.push(createNumerical(st,
    "For the cell $\\text{Zn} | \\text{Zn}^{2+}(1\\text{ M}) || \\text{Cu}^{2+}(1\\text{ M}) | \\text{Cu}$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, what is the value of $E^\\circ_{\\text{cell}}$ in Volts multiplied by $100$?",
    "110",
    "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0.34 - (-0.76) = 1.10\\text{ V}$. Multiplied by $100$, the answer is $110$."
  ));
  list.push(createNumerical(st,
    "How many electrons are transferred ($n$) in the overall cell reaction of the Daniell cell $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$?",
    "2",
    "Zinc loses $2$ electrons to form $\\text{Zn}^{2+}$, and copper ion gains $2$ electrons to form $\\text{Cu}$. Thus, $n = 2$."
  ));
  list.push(createNumerical(st,
    "Calculate the value of $\\log K_c$ at $298\\text{ K}$ for a cell reaction having $n = 1$ and $E^\\circ_{\\text{cell}} = 0.591\\text{ V}$ (using $2.303RT/F = 0.0591\\text{ V}$).",
    "10",
    "$\\log K_c = \\frac{n E^\\circ}{0.0591} = \\frac{1 \\times 0.591}{0.0591} = 10$."
  ));
  list.push(createNumerical(st,
    "Calculate the value of $\\log K_c$ at $298\\text{ K}$ for a cell reaction having $n = 2$ and $E^\\circ_{\\text{cell}} = 0.2955\\text{ V}$ (using $2.303RT/F = 0.0591\\text{ V}$).",
    "10",
    "$\\log K_c = \\frac{n E^\\circ}{0.0591} = \\frac{2 \\times 0.2955}{0.0591} = \\frac{0.591}{0.0591} = 10$."
  ));
  list.push(createNumerical(st,
    "What is the reduction potential of a hydrogen electrode at $298\\text{ K}$ in a solution with $\\text{pH} = 10$ in millivolts (magnitude, nearest integer)? Take $2.303RT/F = 0.0591\\text{ V}$.",
    "591",
    "$E = -0.0591 \\times \\text{pH} = -0.0591 \\times 10 = -0.591\\text{ V} = -591\\text{ mV}$. The magnitude is $591$."
  ));
  list.push(createNumerical(st,
    "For the cell reaction $2\\text{Ag}^+ + \\text{Cu} \\rightarrow 2\\text{Ag} + \\text{Cu}^{2+}$, how many moles of electrons are transferred per mole of copper oxidized?",
    "2",
    "One mole of copper loses $2$ moles of electrons to form $\\text{Cu}^{2+}$, so $n = 2$."
  ));
  list.push(createNumerical(st,
    "Calculate the magnitude of $\\Delta G^\\circ$ (in $\\text{kJ}$) for a galvanic cell having $n = 2$ and $E^\\circ_{\\text{cell}} = 1.10\\text{ V}$ using $F = 96500\\text{ C mol}^{-1}$ (to nearest integer).",
    "212",
    "$|\\Delta G^\\circ| = nFE^\\circ = 2 \\times 96500 \\times 1.10\\text{ J} = 212300\\text{ J} = 212.3\\text{ kJ} \\approx 212\\text{ kJ}$."
  ));
  list.push(createNumerical(st,
    "For a cell reaction with $n = 1$, if $E^\\circ_{\\text{cell}} = 1.182\\text{ V}$, calculate $\\log K_c$ at $298\\text{ K}$ (using $2.303RT/F = 0.0591\\text{ V}$).",
    "20",
    "$\\log K_c = \\frac{1 \\times 1.182}{0.0591} = 20$."
  ));
  list.push(createNumerical(st,
    "A concentration cell consists of two hydrogen electrodes at $298\\text{ K}$: $\\text{Pt} | \\text{H}_2(1\\text{ bar}) | \\text{H}^+(10^{-4}\\text{ M}) || \\text{H}^+(10^{-1}\\text{ M}) | \\text{H}_2(1\\text{ bar}) | \\text{Pt}$. What is the cell potential in millivolts (nearest integer)? Take $2.303RT/F = 0.0591\\text{ V}$.",
    "177",
    "$E_{\\text{cell}} = 0.0591\\log\\frac{c_2}{c_1} = 0.0591\\log\\left(\\frac{10^{-1}}{10^{-4}}\\right) = 0.0591 \\times 3 = 0.1773\\text{ V} \\approx 177\\text{ mV}$."
  ));
  list.push(createNumerical(st,
    "How many moles of electrons ($n$) are transferred in the redox reaction: $2\\text{Al} + 3\\text{Cu}^{2+} \\rightarrow 2\\text{Al}^{3+} + 3\\text{Cu}$?",
    "6",
    "Two aluminium atoms each lose $3$ electrons, giving a total of $2 \\times 3 = 6$ electrons transferred ($n = 6$)."
  ));
  list.push(createNumerical(st,
    "What is the reduction potential (in Volts) of the standard hydrogen electrode at any temperature?",
    "0",
    "By universal convention, the standard electrode potential of the standard hydrogen electrode is exactly $0.00\\text{ V}$."
  ));
  list.push(createNumerical(st,
    "For the half-cell reaction $\\text{Fe}^{3+} + e^- \\rightarrow \\text{Fe}^{2+}$, if $[\text{Fe}^{3+}] = 10[\\text{Fe}^{2+}]$, what is the change in reduction potential $(E - E^\\circ)$ in millivolts at $298\\text{ K}$? Take $2.303RT/F = 0.0591\\text{ V}$ (nearest integer).",
    "59",
    "$E = E^\\circ - 0.0591\\log\\frac{[\\text{Fe}^{2+}]}{[\\text{Fe}^{3+}]} = E^\\circ - 0.0591\\log(0.1) = E^\\circ + 0.0591\\text{ V}$. Thus $E - E^\\circ = +0.0591\\text{ V} \\approx 59\\text{ mV}$."
  ));
  list.push(createNumerical(st,
    "Calculate $\\Delta G^\\circ$ in $\\text{kJ}$ (magnitude to nearest integer) for a reaction with $n = 1$ and $E^\\circ_{\\text{cell}} = 1.00\\text{ V}$ using $F = 96500\\text{ C mol}^{-1}$.",
    "97",
    "$|\\Delta G^\\circ| = 1 \\times 96500 \\times 1.00\\text{ J} = 96.5\\text{ kJ} \\approx 97\\text{ kJ}$."
  ));
  list.push(createNumerical(st,
    "For a cell reaction with $n = 2$, if $E^\\circ_{\\text{cell}} = 0.591\\text{ V}$, calculate $\\log K_c$ at $298\\text{ K}$ (using $2.303RT/F = 0.0591\\text{ V}$).",
    "20",
    "$\\log K_c = \\frac{2 \\times 0.591}{0.0591} = 20$."
  ));
  list.push(createNumerical(st,
    "In a Daniel cell at $298\\text{ K}$, if $[\\text{Zn}^{2+}]/[\\text{Cu}^{2+}] = 100$, what is the decrease in cell potential from $E^\\circ_{\\text{cell}}$ in millivolts (nearest integer)? Take $2.303RT/F = 0.0591\\text{ V}$.",
    "59",
    "$\\Delta E = \\frac{0.0591}{2}\\log(100) = \\frac{0.0591}{2} \\times 2 = 0.0591\\text{ V} \\approx 59\\text{ mV}$."
  ));

  return list;
}
function getFaradayLawsQuestions() {
  const list = [];
  const st = "Faraday's laws of electrolysis";

  // 7 MCQs
  list.push(createMCQ(st,
    "According to Faraday's first law of electrolysis, the mass ($w$) of a substance liberated at an electrode is proportional to:",
    ["Quantity of electricity ($Q$)", "Square of quantity of electricity ($Q^2$)", "Absolute temperature ($T$)", "Resistance of the electrolyte ($R$)"], 0,
    "Faraday's first law states that $w = Z Q = Z I t$, where $w$ is the mass of substance deposited and $Q$ is the total electrical charge passed."
  ));
  list.push(createMCQ(st,
    "The electrochemical equivalent ($Z$) of a substance is related to its chemical equivalent weight ($E$) by:",
    ["$Z = \\frac{E}{F}$", "$Z = E \\times F$", "$Z = \\frac{F}{E}$", "$Z = \\frac{1}{E \\times F}$"], 0,
    "By definition, $1\\text{ Faraday}$ ($F = 96500\\text{ C}$) deposits one gram equivalent of any substance. Therefore, $Z = E/F$ in units of $\\text{g C}^{-1}$."
  ));
  list.push(createMCQ(st,
    "When the same quantity of electricity is passed through solutions of different electrolytes connected in series, the masses of substances deposited are proportional to their:",
    ["Equivalent weights", "Atomic numbers", "Densities", "Valencies"], 0,
    "This is Faraday's second law of electrolysis: $\\frac{w_1}{w_2} = \\frac{E_1}{E_2}$."
  ));
  list.push(createMCQ(st,
    "During the electrolysis of concentrated aqueous $\\text{NaCl}$ solution (brine) using inert platinum electrodes, the products obtained at the cathode and anode are:",
    ["$\\text{H}_2$ at cathode and $\\text{Cl}_2$ at anode", "$\\text{Na}$ at cathode and $\\text{Cl}_2$ at anode", "$\\text{H}_2$ at cathode and $\\text{O}_2$ at anode", "$\\text{Na}$ at cathode and $\\text{O}_2$ at anode"], 0,
    "At the cathode, $\\text{H}_2\\text{O}$ has a higher reduction potential than $\\text{Na}^+$, liberating $\\text{H}_2$ gas. At the anode, due to the high overpotential of oxygen, chloride oxidation is kinetically favored, producing $\\text{Cl}_2$ gas."
  ));
  list.push(createMCQ(st,
    "The volume of $\\text{O}_2$ gas liberated at STP when $1\\text{ Faraday}$ of charge is passed through acidified water is:",
    ["$5.6\\text{ L}$", "$11.2\\text{ L}$", "$22.4\\text{ L}$", "$44.8\\text{ L}$"], 0,
    "The half-reaction is $2\\text{H}_2\\text{O} \\rightarrow \\text{O}_2 + 4\\text{H}^+ + 4e^-$. Thus, $4\\text{ Faradays}$ liberate $1\\text{ mole of }\\text{O}_2$ ($22.4\\text{ L}$ at STP). Hence $1\\text{ Faraday}$ liberates $22.4 / 4 = 5.6\\text{ L}$ of $\\text{O}_2$."
  ));
  list.push(createMCQ(st,
    "During the electrolysis of aqueous $\\text{CuSO}_4$ solution using active copper electrodes:",
    ["Copper dissolves at the anode and deposits at the cathode", "$\\text{O}_2$ is liberated at the anode and copper deposits at the cathode", "$\\text{H}_2$ is liberated at the cathode and $\\text{O}_2$ at the anode", "Copper deposits at both electrodes"], 0,
    "With active copper electrodes, the oxidation of the copper anode ($\\text{Cu} \\rightarrow \\text{Cu}^{2+} + 2e^-$) requires less energy than water oxidation, so copper dissolves from the anode and deposits at the cathode (electrorefining)."
  ));
  list.push(createMCQ(st,
    "The charge associated with one mole of electrons is known as:",
    ["Faraday constant ($96500\\text{ C}$)", "Planck constant", "Rydberg constant", "Boltzmann constant"], 0,
    "$1\\text{ Faraday} = N_A \\times e = 6.022 \\times 10^{23} \\times 1.602 \\times 10^{-19}\\text{ C} \\approx 96485\\text{ C} \\approx 96500\\text{ C}$."
  ));

  // 26 ARs
  list.push(createAR(st,
    "One Faraday of electricity deposits exactly one gram equivalent of any substance.",
    "One Faraday is the total electrical charge carried by one mole of electrons, which reduces or oxidizes one equivalent of substance.",
    0, "Both (A) and (R) are true and (R) is the fundamental definition of the Faraday."
  ));
  list.push(createAR(st,
    "Electrolysis of molten $\\text{NaCl}$ produces sodium metal at the cathode, while electrolysis of aqueous $\\text{NaCl}$ produces hydrogen gas.",
    "In aqueous solution, the reduction potential of water ($-0.83\\text{ V}$ at neutral $\\text{pH}$) is much more positive than the reduction potential of $\\text{Na}^+$ ($-2.71\\text{ V}$).",
    0, "Both (A) and (R) are true and (R) explains why water is preferentially reduced over $\\text{Na}^+$."
  ));
  list.push(createAR(st,
    "During the electrolysis of concentrated $\\text{NaCl}$ solution, chlorine gas is evolved at the anode instead of oxygen.",
    "Due to the phenomenon of overpotential (overvoltage), the oxidation of water to oxygen is kinetically slower than the oxidation of chloride to chlorine.",
    0, "Both (A) and (R) are true and (R) gives the kinetic justification of overvoltage."
  ));
  list.push(createAR(st,
    "The passage of $96500\\text{ C}$ of charge through an aqueous $\\text{AgNO}_3$ solution deposits $108\\text{ g}$ of silver.",
    "The reduction half-reaction is $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$, requiring $1\\text{ mole of electrons}$ ($1\\text{ Faraday}$) per mole ($108\\text{ g}$) of silver.",
    0, "Both (A) and (R) are true and (R) is the exact stoichiometric half-reaction."
  ));
  list.push(createAR(st,
    "Passing the same quantity of electricity through solutions of $\\text{AgNO}_3$ and $\\text{CuSO}_4$ deposits more mass of silver than copper.",
    "The equivalent weight of silver ($108$) is greater than the equivalent weight of copper ($63.5/2 = 31.75$).",
    0, "Both (A) and (R) are true and (R) explains the mass difference by Faraday's second law."
  ));
  list.push(createAR(st,
    "In electrorefining of impure copper, the impure copper block is made the anode and pure copper sheet is made the cathode.",
    "Oxidation occurs at the anode where copper dissolves into solution, and reduction occurs at the cathode where pure copper deposits.",
    0, "Both (A) and (R) are true and (R) correctly explains electrorefining."
  ));
  list.push(createAR(st,
    "Electrochemical equivalent has units of $\\text{g C}^{-1}$ or $\\text{kg C}^{-1}$.",
    "Electrochemical equivalent is the mass deposited by the passage of one Coulomb of electrical charge: $Z = w/Q$.",
    0, "Both (A) and (R) are true and (R) is the exact physical definition."
  ));
  list.push(createAR(st,
    "In electroplating an iron spoon with silver, the spoon is made the cathode.",
    "Metal cations undergo reduction and deposit exclusively at the cathode during electrolysis.",
    0, "Both (A) and (R) are true and (R) explains the setup for electroplating."
  ));
  list.push(createAR(st,
    "Electrolysis of aqueous $\\text{CuSO}_4$ using platinum electrodes decreases the $\\text{pH}$ of the solution.",
    "Water is oxidized at the anode liberating oxygen and producing $\\text{H}^+$ ions ($2\\text{H}_2\\text{O} \\rightarrow \\text{O}_2 + 4\\text{H}^+ + 4e^-$).",
    0, "Both (A) and (R) are true and (R) explains why sulfuric acid accumulates, lowering $\\text{pH}$."
  ));
  list.push(createAR(st,
    "The amount of product liberated in electrolysis is independent of the temperature of the electrolyte.",
    "According to Faraday's laws, the mass deposited depends only on the quantity of electricity passed and the chemical equivalent weight of the substance.",
    0, "Both (A) and (R) are true and (R) accurately states Faraday's law parameters."
  ));
  list.push(createAR(st,
    "During electrolysis, the rate of electron transfer at the cathode is always equal to that at the anode.",
    "Electric current through a complete electrolytic circuit requires strict conservation of charge at both electrodes.",
    0, "Both (A) and (R) are true and (R) is the electrical continuity condition."
  ));
  list.push(createAR(st,
    "The Hall-Héroult process for extracting aluminium uses molten cryolite ($\\text{Na}_3\\text{AlF}_6$) mixed with $\\text{Al}_2\\text{O}_3$.",
    "Cryolite lowers the melting point of alumina from over $2000^\\circ\\text{C}$ to around $950^\\circ\\text{C}$ and enhances electrical conductivity.",
    0, "Both (A) and (R) are true and (R) describes the metallurgical function of cryolite."
  ));
  list.push(createAR(st,
    "During the extraction of aluminium by electrolysis of alumina, carbon anodes are periodically replaced.",
    "The oxygen liberated at the anode reacts with the graphite anode at high temperatures to form $\\text{CO}$ and $\\text{CO}_2$ gases.",
    0, "Both (A) and (R) are true and (R) explains anode consumption in Hall-Héroult process."
  ));
  list.push(createAR(st,
    "Faraday's laws of electrolysis apply to both molten electrolytes and aqueous electrolytic solutions.",
    "The relationship between electric charge and chemical change is governed fundamentally by the stoichiometry of electron transfer.",
    0, "Both (A) and (R) are true and (R) justifies the universal applicability of Faraday's laws."
  ));
  list.push(createAR(st,
    "Electrolysis of aqueous $\\text{Na}_2\\text{SO}_4$ produces hydrogen at the cathode and oxygen at the anode.",
    "Neither $\\text{Na}^+$ can be reduced nor $\\text{SO}_4^{2-}$ can be oxidized in the presence of water at inert electrodes.",
    0, "Both (A) and (R) are true and (R) explains why water electrolysis occurs exclusively."
  ));
  list.push(createAR(st,
    "In the electrolysis of aqueous $\\text{AgNO}_3$ using silver electrodes, the concentration of $\\text{Ag}^+$ in the solution remains constant.",
    "The rate of dissolution of silver at the anode equals the rate of deposition of silver at the cathode.",
    0, "Both (A) and (R) are true and (R) explains the steady-state concentration."
  ));
  list.push(createAR(st,
    "The current efficiency of an electrolytic process is often less than $100\\%$.",
    "Side reactions, heat dissipation, and secondary recombining of products can consume a portion of the electrical current.",
    0, "Both (A) and (R) are true and (R) explains why real electrolytic yield is below theoretical yield."
  ));
  list.push(createAR(st,
    "Two amperes of current flowing for $965\\text{ seconds}$ passes $1930\\text{ Coulombs}$ of charge.",
    "Electrical charge is the product of current in amperes and time in seconds: $Q = I \\times t$.",
    0, "Both (A) and (R) are true and (R) gives $Q = 2 \\times 965 = 1930\\text{ C}$."
  ));
  list.push(createAR(st,
    "The equivalent weight of aluminium in electrolysis is $9\\text{ g equiv}^{-1}$.",
    "Aluminium is trivalent ($\\text{Al}^{3+}$), so its equivalent weight is atomic mass divided by $3$ ($27/3 = 9$).",
    0, "Both (A) and (R) are true and (R) gives the calculation $E = M/z$."
  ));
  list.push(createAR(st,
    "The equivalent weight of oxygen in electrolysis is $8\\text{ g equiv}^{-1}$.",
    "Oxygen changes from oxidation state $-2$ to $0$, transferring $2$ electrons per oxygen atom (atomic mass $16/2 = 8$).",
    0, "Both (A) and (R) are true and (R) gives the calculation for equivalent weight of oxygen."
  ));
  list.push(createAR(st,
    "A Coulomb is the quantity of charge transported by a steady current of one ampere in one second.",
    "The SI definition of electrical charge is $Q = I \\times t$, where $1\\text{ C} = 1\\text{ A} \\cdot 1\\text{ s}$.",
    0, "Both (A) and (R) are true and (R) is the SI unit definition."
  ));
  list.push(createAR(st,
    "In electrolysis of aqueous $\\text{KBr}$, bromine is evolved at the anode.",
    "Bromide ions have a lower oxidation potential than water, allowing them to be oxidized to elemental bromine.",
    0, "Both (A) and (R) are true and (R) explains the anodic product."
  ));
  list.push(createAR(st,
    "Electrolysis of molten potassium hydride ($\\text{KH}$) yields hydrogen gas at the anode.",
    "In ionic hydrides, hydrogen exists as the hydride anion ($\\text{H}^-$) which migrates to the anode and loses electrons.",
    0, "Both (A) and (R) are true and (R) explains the unusual evolution of $\\text{H}_2$ at the anode: $2\\text{H}^- \\rightarrow \\text{H}_2 + 2e^-$."
  ));
  list.push(createAR(st,
    "Faraday's constant is the product of Avogadro's number and the elementary charge.",
    "Mathematically, $F = N_A \\times e = (6.022 \\times 10^{23}\\text{ mol}^{-1}) \\times (1.602 \\times 10^{-19}\\text{ C}) \\approx 96485\\text{ C mol}^{-1}$.",
    0, "Both (A) and (R) are true and (R) provides the physical constants calculation."
  ));
  list.push(createAR(st,
    "The ratio of masses of $\\text{H}_2$ and $\\text{O}_2$ liberated during the electrolysis of water is $1:8$.",
    "The equivalent weights of hydrogen and oxygen are $1$ and $8$, respectively.",
    0, "Both (A) and (R) are true and (R) proves $w_{\\text{H}_2}/w_{\\text{O}_2} = E_{\\text{H}}/E_{\\text{O}} = 1/8$."
  ));
  list.push(createAR(st,
    "The ratio of volumes of $\\text{H}_2$ and $\\text{O}_2$ gases liberated during the electrolysis of water at STP is $2:1$.",
    "Water decomposition follows the stoichiometry $2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$, producing twice as many moles of $\\text{H}_2$ as $\\text{O}_2$.",
    0, "Both (A) and (R) are true and (R) explains the $2:1$ volume ratio via Avogadro's hypothesis."
  ));

  // 15 Numericals
  list.push(createNumerical(st,
    "How many Faradays of electricity are required to deposit $1\\text{ mole}$ of aluminium from molten $\\text{Al}_2\\text{O}_3$?",
    "3",
    "The reduction half-reaction is $\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$. Exactly $3$ moles of electrons ($3\\text{ Faradays}$) are required per mole of $\\text{Al}$."
  ));
  list.push(createNumerical(st,
    "How many Faradays of electricity are required to deposit $1\\text{ mole}$ of copper from $\\text{CuSO}_4$ solution?",
    "2",
    "$\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$. Exactly $2$ Faradays are required."
  ));
  list.push(createNumerical(st,
    "How many Faradays of electricity are required to deposit $1\\text{ mole}$ of silver from $\\text{AgNO}_3$ solution?",
    "1",
    "$\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$. Exactly $1$ Faraday is required."
  ));
  list.push(createNumerical(st,
    "What mass in grams of aluminium (atomic mass $27\\text{ g mol}^{-1}$) is deposited by the passage of $1\\text{ Faraday}$ of charge?",
    "9",
    "Equivalent weight of $\\text{Al} = 27/3 = 9\\text{ g}$. One Faraday deposits exactly $1$ equivalent, which is $9\\text{ g}$."
  ));
  list.push(createNumerical(st,
    "What mass in grams of magnesium (atomic mass $24\\text{ g mol}^{-1}$) is deposited from molten $\\text{MgCl}_2$ by the passage of $2\\text{ Faradays}$ of charge?",
    "24",
    "$\\text{Mg}^{2+} + 2e^- \\rightarrow \\text{Mg}$. Two Faradays deposit exactly $1\\text{ mole of Mg}$, which has a mass of $24\\text{ g}$."
  ));
  list.push(createNumerical(st,
    "How many Faradays of electricity are required to completely oxidize $1\\text{ mole of }\\text{H}_2\\text{O}$ to $\\text{O}_2$?",
    "2",
    "The oxidation reaction is $2\\text{H}_2\\text{O} \\rightarrow \\text{O}_2 + 4\\text{H}^+ + 4e^-$. For $1\\text{ mole of }\\text{H}_2\\text{O}$, $2$ moles of electrons are lost, requiring $2\\text{ Faradays}$."
  ));
  list.push(createNumerical(st,
    "How many Faradays of electricity are required to oxidize $1\\text{ mole of }\\text{FeO}$ to $\\text{Fe}_2\\text{O}_3$?",
    "1",
    "The oxidation is $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + 1e^-$. One mole of electrons ($1\\text{ Faraday}$) is required."
  ));
  list.push(createNumerical(st,
    "How many Faradays of electricity are required to reduce $1\\text{ mole of }\\text{Cr}_2\\text{O}_7^{2-}$ to $\\text{Cr}^{3+}$ in acidic medium?",
    "6",
    "$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. Exactly $6\\text{ Faradays}$ are required."
  ));
  list.push(createNumerical(st,
    "How many Faradays of electricity are required to reduce $1\\text{ mole of }\\text{MnO}_4^-$ to $\\text{Mn}^{2+}$ in acidic medium?",
    "5",
    "$\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. Exactly $5\\text{ Faradays}$ are required."
  ));
  list.push(createNumerical(st,
    "Calculate the time in seconds required to deposit $1\\text{ mole}$ of silver (atomic mass $108\\text{ g mol}^{-1}$) using a constant current of $9.65\\text{ A}$ (take $F = 96500\\text{ C mol}^{-1}$).",
    "10000",
    "Charge needed $Q = 1 \\times 96500 = 96500\\text{ C}$. Time $t = Q / I = 96500 / 9.65 = 10000\\text{ seconds}$."
  ));
  list.push(createNumerical(st,
    "How many moles of silver are deposited when $96500\\text{ C}$ of charge is passed through an aqueous solution of silver nitrate?",
    "1",
    "One Faraday ($96500\\text{ C}$) deposits $1$ mole of $\\text{Ag}$ from $\\text{Ag}^+$."
  ));
  list.push(createNumerical(st,
    "How many Faradays of electricity are required to deposit $108\\text{ g}$ of silver (molar mass $108\\text{ g mol}^{-1}$) from an aqueous solution of $\\text{AgNO}_3$?",
    "1",
    "Moles of $\\text{Ag} = 108/108 = 1\\text{ mol}$. Since $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$, exactly $1\\text{ Faraday}$ is required."
  ));
  list.push(createNumerical(st,
    "How many Faradays of charge are needed to produce $0.5\\text{ mole of }\\text{Cu}$ from $\\text{Cu}^{2+}$ solution?",
    "1",
    "Charge $= 0.5\\text{ mol} \\times 2\\text{ F/mol} = 1\\text{ Faraday}$."
  ));
  list.push(createNumerical(st,
    "How many moles of electrons are present in $193000\\text{ Coulombs}$ of electrical charge (using $F = 96500\\text{ C mol}^{-1}$)?",
    "2",
    "Number of moles of electrons $= 193000 / 96500 = 2$."
  ));
  list.push(createNumerical(st,
    "How many grams of calcium (atomic mass $40\\text{ g mol}^{-1}$) are deposited from molten $\\text{CaCl}_2$ by the passage of $2\\text{ Faradays}$ of charge?",
    "40",
    "$\\text{Ca}^{2+} + 2e^- \\rightarrow \\text{Ca}$. Two Faradays deposit $1\\text{ mole of Ca}$, which has a mass of $40\\text{ g}$."
  ));

  return list;
}
function getBatteriesCorrosionQuestions() {
  const list = [];
  const st = "Batteries, fuel cells, and corrosion";

  // 8 MCQs
  list.push(createMCQ(st,
    "In a common dry cell (Leclanché cell), the anode and cathode materials are respectively:",
    ["Zinc container and graphite rod surrounded by $\\text{MnO}_2$", "Graphite rod and zinc container", "Lead container and $\\text{PbO}_2$", "Cadmium rod and nickel hydroxide"], 0,
    "In the dry cell, the zinc cylinder serves as the anode ($\\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e^-$), while a carbon (graphite) rod surrounded by powdered manganese dioxide and carbon acts as the cathode."
  ));
  list.push(createMCQ(st,
    "Why does a mercury cell give a steady and constant voltage ($1.35\\text{ V}$) throughout its operational life?",
    ["The overall cell reaction does not involve any ions in solution whose concentration can change", "It contains liquid mercury which maintains constant conductivity", "It has zero internal resistance", "It uses an alkali metal as anode"], 0,
    "The overall reaction in a mercury cell is $\\text{Zn}(\\text{Hg}) + \\text{HgO}(s) \\rightarrow \\text{ZnO}(s) + \\text{Hg}(l)$. Since no ions appear in the overall balanced equation, the reaction quotient $Q$ remains constant, keeping the cell potential constant."
  ));
  list.push(createMCQ(st,
    "During the discharging process of a lead storage battery, the chemical reaction occurring at the anode is:",
    ["$\\text{Pb}(s) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{PbSO}_4(s) + 2e^-$", "$\\text{PbO}_2(s) + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\rightarrow \\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}$", "$\\text{PbSO}_4(s) + 2e^- \\rightarrow \\text{Pb}(s) + \\text{SO}_4^{2-}$", "$\\text{Pb}^{2+} + 2e^- \\rightarrow \\text{Pb}(s)$"], 0,
    "At the spongy lead anode during discharge: $\\text{Pb}(s) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{PbSO}_4(s) + 2e^-$."
  ));
  list.push(createMCQ(st,
    "During the recharging of a lead storage battery:",
    ["$\\text{PbSO}_4$ on cathode is reduced to $\\text{Pb}$ and on anode is oxidized to $\\text{PbO}_2$", "$\\text{Pb}$ is oxidized to $\\text{PbSO}_4$", "$\\text{H}_2\\text{SO}_4$ is consumed", "Density of $\\text{H}_2\\text{SO}_4$ decreases"], 0,
    "Recharging reverses the discharge reactions: at the cathode $\\text{PbSO}_4(s) + 2e^- \\rightarrow \\text{Pb}(s) + \\text{SO}_4^{2-}$, and at the anode $\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O} \\rightarrow \\text{PbO}_2(s) + \\text{SO}_4^{2-} + 4\\text{H}^+ + 2e^-$."
  ));
  list.push(createMCQ(st,
    "In a hydrogen-oxygen fuel cell, the overall chemical reaction that produces electrical energy is:",
    ["$2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)$", "$\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow \\text{H}_2\\text{O}_2(l)$", "$\\text{H}_2(g) + 2\\text{OH}^- \\rightarrow 2\\text{H}_2\\text{O} + 2e^-$", "$\\text{O}_2(g) + 2\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-$"], 0,
    "The overall reaction in a $\\text{H}_2-\\text{O}_2$ fuel cell is the combustion of hydrogen to liquid water: $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)$, converting chemical energy directly into electrical energy."
  ));
  list.push(createMCQ(st,
    "The efficiency of a fuel cell is theoretically given by:",
    ["$\\frac{\\Delta G}{\\Delta H} \\times 100$", "$\\frac{\\Delta H}{\\Delta G} \\times 100$", "$\\frac{\\Delta G}{\\Delta S} \\times 100$", "$\\frac{\\Delta S}{\\Delta H} \\times 100$"], 0,
    "The thermodynamic efficiency of a fuel cell is the ratio of maximum electrical work ($-\\Delta G$) to the total heat of combustion ($-\\Delta H$): $\\eta = \\frac{\\Delta G}{\\Delta H} \\times 100\\%$."
  ));
  list.push(createMCQ(st,
    "Rusting of iron is chemically an electrochemical process. The chemical composition of rust is:",
    ["Hydrated ferric oxide ($\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$)", "Ferrous oxide ($\\text{FeO}$)", "Ferric carbonate ($\\text{Fe}_2(\\text{CO}_3)_3$)", "Ferrous hydroxide ($\\text{Fe}(\\text{OH})_2$)"], 0,
    "Rust is hydrated iron(III) oxide with the formula $\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$, formed by the aerial oxidation of $\\text{Fe}^{2+}$ ions in the presence of water."
  ));
  list.push(createMCQ(st,
    "Galvanization is the process of protecting iron from rusting by coating it with a thin layer of:",
    ["Zinc", "Tin", "Copper", "Nickel"], 0,
    "Iron is coated with zinc (galvanization). Because zinc has a lower reduction potential than iron ($-0.76\\text{ V}$ vs $-0.44\\text{ V}$), it oxidizes preferentially, acting as a sacrificial anode even if the coating is scratched."
  ));

  // 25 ARs
  list.push(createAR(st,
    "A primary battery cannot be recharged once it has discharged.",
    "In primary cells, the electrode redox reactions occur irreversibly and the active materials are permanently consumed.",
    0, "Both (A) and (R) are true and (R) defines a primary cell."
  ));
  list.push(createAR(st,
    "A secondary cell can be recharged and reused through multiple charge-discharge cycles.",
    "Passing an external electric current in the reverse direction converts the discharge products back into the original active electrode reactants.",
    0, "Both (A) and (R) are true and (R) describes the recharging mechanism."
  ));
  list.push(createAR(st,
    "The density of sulfuric acid in a lead storage battery decreases during discharging.",
    "Sulfuric acid is consumed in the electrode reactions at both the anode and cathode, producing insoluble $\\text{PbSO}_4$ and water.",
    0, "Both (A) and (R) are true: $2\\text{H}_2\\text{SO}_4$ is consumed, dropping acid density from $1.30\\text{ g/cm}^3$ to below $1.20\\text{ g/cm}^3$."
  ));
  list.push(createAR(st,
    "A nickel-cadmium (Ni-Cd) cell has a longer working life than a lead storage battery.",
    "A Ni-Cd cell does not produce any gaseous products during charge or discharge and its electrode materials remain physically more stable.",
    0, "Both (A) and (R) are true and (R) explains the extended cycle life of Ni-Cd cells."
  ));
  list.push(createAR(st,
    "Fuel cells are far more environmentally friendly and energy efficient than conventional thermal power plants.",
    "Fuel cells convert chemical energy of fuels directly into electrical energy without undergoing intermediate Carnot combustion cycles.",
    0, "Both (A) and (R) are true and (R) explains why efficiency exceeds $70\\%$ without greenhouse pollutants."
  ));
  list.push(createAR(st,
    "Rusting of iron takes place much more rapidly in saline (sea) water than in pure water.",
    "The dissolved salts provide mobile ions that greatly increase the electrical conductivity of the electrolyte film on the metal surface.",
    0, "Both (A) and (R) are true and (R) explains the enhanced rate of electrochemical corrosion."
  ));
  list.push(createAR(st,
    "Zinc protects iron from corrosion sacrificially, even when the protective zinc coating is scratched.",
    "Zinc has a more negative reduction potential ($E^\\circ = -0.76\\text{ V}$) than iron ($E^\\circ = -0.44\\text{ V}$), so zinc oxidizes preferentially.",
    0, "Both (A) and (R) are true and (R) explains cathodic protection by sacrificial zinc."
  ));
  list.push(createAR(st,
    "Tinned iron rusts very rapidly once the tin coating is scratched.",
    "Tin has a more positive standard reduction potential ($E^\\circ = -0.14\\text{ V}$) than iron ($E^\\circ = -0.44\\text{ V}$), making exposed iron the anode.",
    0, "Both (A) and (R) are true and (R) explains why tin accelerates corrosion once breached."
  ));
  list.push(createAR(st,
    "Underground iron pipelines are often connected to sacrificial blocks of magnesium.",
    "Magnesium is more electropositive than iron and acts as a sacrificial anode, preventing iron from undergoing oxidation.",
    0, "Both (A) and (R) are true and (R) describes cathodic protection of underground structures."
  ));
  list.push(createAR(st,
    "Rusting of iron requires both oxygen and moisture simultaneously.",
    "The electrochemical corrosion cell requires water as the electrolytic medium and dissolved oxygen as the cathodic electron acceptor.",
    0, "Both (A) and (R) are true and (R) details the two essential components of rusting."
  ));
  list.push(createAR(st,
    "Dry cells do not have an indefinitely long shelf life even when not in use.",
    "The acidic ammonium chloride electrolyte slowly corrodes the zinc container over time, causing leakage and degradation.",
    0, "Both (A) and (R) are true and (R) explains dry cell shelf life limitations."
  ));
  list.push(createAR(st,
    "In a dry cell, manganese dioxide ($\\text{MnO}_2$) acts as a depolarizer.",
    "$\\text{MnO}_2$ oxidizes hydrogen gas formed at the cathode to water, preventing the build-up of an insulating gas layer.",
    0, "Both (A) and (R) are true and (R) defines depolarization."
  ));
  list.push(createAR(st,
    "In Apollo space missions, hydrogen-oxygen fuel cells were used to provide both electrical power and drinking water.",
    "The only by-product of the $\\text{H}_2-\\text{O}_2$ fuel cell reaction is pure liquid water.",
    0, "Both (A) and (R) are true and (R) is the historical operational fact."
  ));
  list.push(createAR(st,
    "Corrosion of metals can be prevented by applying bisphenol or phosphate coatings.",
    "Such coatings form an impervious barrier layer that isolates the metal surface from atmospheric oxygen and moisture.",
    0, "Both (A) and (R) are true and (R) describes barrier protection."
  ));
  list.push(createAR(st,
    "Iron does not rust in dry air or in vacuum-degassed boiled water.",
    "Rusting requires the simultaneous presence of both oxygen and liquid water.",
    0, "Both (A) and (R) are true and (R) confirms the prerequisite conditions."
  ));
  list.push(createAR(st,
    "The potential of a single cell in a fully charged lead storage battery is approximately $2.0\\text{ V}$.",
    "Connecting six such lead-acid cells in series produces the standard $12\\text{ V}$ automobile battery.",
    0, "Both (A) and (R) are true and (R) explains the $12\\text{ V}$ automotive battery configuration."
  ));
  list.push(createAR(st,
    "Cathodic protection is an electrical method of preventing corrosion.",
    "In cathodic protection, the metal to be protected is made the cathode of an electrochemical cell by coupling it to a more active metal.",
    0, "Both (A) and (R) are true and (R) defines the cathodic protection mechanism."
  ));
  list.push(createAR(st,
    "Aluminum is more reactive than iron, yet it does not corrode readily in the atmosphere.",
    "Aluminum rapidly forms a tough, continuous, and non-porous protective oxide film of $\\text{Al}_2\\text{O}_3$ on its surface that passivates the metal.",
    0, "Both (A) and (R) are true and (R) explains the passivation of aluminum."
  ));
  list.push(createAR(st,
    "Stainless steel resists rusting in air and water.",
    "Stainless steel contains chromium which forms a passive, self-healing chromium oxide film on the alloy surface.",
    0, "Both (A) and (R) are true and (R) explains the corrosion resistance of stainless steel."
  ));
  list.push(createAR(st,
    "The presence of acidic gases like $\\text{CO}_2$ and $\\text{SO}_2$ in the atmosphere accelerates rusting of iron.",
    "Acidic gases dissolve in moisture films to produce $\\text{H}^+$ ions, which increase the rate of cathodic oxygen reduction: $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2\\text{O}$.",
    0, "Both (A) and (R) are true and (R) explains acid-catalyzed corrosion."
  ));
  list.push(createAR(st,
    "In a mercury cell, the electrolyte is a moist paste of $\\text{KOH}$ and $\\text{ZnO}$.",
    "$\\text{KOH}$ provides hydroxide ions for the half-cell reactions and ensures high ionic conductivity.",
    0, "Both (A) and (R) are true and (R) describes the electrolyte composition."
  ));
  list.push(createAR(st,
    "Recharging of a secondary battery is an electrolytic process.",
    "During recharging, electrical energy from an external DC source is consumed to drive the non-spontaneous chemical redox reactions.",
    0, "Both (A) and (R) are true and (R) defines the electrolytic nature of battery charging."
  ));
  list.push(createAR(st,
    "Overcharging a lead storage battery causes electrolysis of water into $\\text{H}_2$ and $\\text{O}_2$ gases.",
    "Once all $\\text{PbSO}_4$ is converted back to $\\text{Pb}$ and $\\text{PbO}_2$, the applied charging potential electrolyzes water.",
    0, "Both (A) and (R) are true and (R) describes the gassing phenomenon during battery overcharging."
  ));
  list.push(createAR(st,
    "Fuel cells can run continuously as long as fuel and oxidant are continuously supplied.",
    "Unlike galvanic batteries, fuel cells do not store reactants internally within the electrode plates.",
    0, "Both (A) and (R) are true and (R) explains continuous operation of fuel cells."
  ));
  list.push(createAR(st,
    "Rust is not a protective coating on iron.",
    "Rust is porous, brittle, and flakes off easily, exposing fresh iron underneath to continuous attack by oxygen and moisture.",
    0, "Both (A) and (R) are true and (R) explains why iron corrodes progressively until destroyed."
  ));

  // 15 Numericals
  list.push(createNumerical(st,
    "How many moles of $\\text{H}_2\\text{SO}_4$ are consumed per mole of $\\text{Pb}$ oxidized during the discharging of a lead storage battery?",
    "2",
    "The overall discharge reaction is $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$. Exactly $2$ moles of $\\text{H}_2\\text{SO}_4$ are consumed per mole of $\\text{Pb}$."
  ));
  list.push(createNumerical(st,
    "The cell potential of a mercury cell is $1.35\\text{ V}$. What is this potential in Volts multiplied by $100$?",
    "135",
    "$1.35 \\times 100 = 135$."
  ));
  list.push(createNumerical(st,
    "A standard automobile lead storage battery consists of $6$ individual cells connected in series, each having a nominal potential of $2.0\\text{ V}$. What is the total nominal voltage of the battery?",
    "12",
    "Total voltage $= 6 \\times 2.0\\text{ V} = 12\\text{ V}$."
  ));
  list.push(createNumerical(st,
    "What is the nominal cell potential (in Volts) of a single lead-acid accumulator cell?",
    "2",
    "Each cell of a lead-acid battery provides approximately $2\\text{ V}$."
  ));
  list.push(createNumerical(st,
    "The standard reversible potential of a hydrogen-oxygen fuel cell at $298\\text{ K}$ is $1.23\\text{ V}$. What is this value in Volts multiplied by $100$?",
    "123",
    "$1.23 \\times 100 = 123$."
  ));
  list.push(createNumerical(st,
    "How many moles of electrons are transferred per mole of $\\text{O}_2$ consumed in a hydrogen-oxygen fuel cell?",
    "4",
    "The cathodic reduction half-reaction is $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-$. Exactly $4$ moles of electrons are transferred per mole of $\\text{O}_2$."
  ));
  list.push(createNumerical(st,
    "How many moles of electrons are transferred per mole of $\\text{H}_2$ oxidized in a hydrogen-oxygen fuel cell?",
    "2",
    "Each mole of $\\text{H}_2$ loses $2$ electrons: $\\text{H}_2 + 2\\text{OH}^- \\rightarrow 2\\text{H}_2\\text{O} + 2e^-$, so $n = 2$."
  ));
  list.push(createNumerical(st,
    "How many Faradays of electrical charge are delivered when $1\\text{ mole of Pb}$ is converted to $\\text{PbSO}_4$ during discharging?",
    "2",
    "$\\text{Pb} + \\text{SO}_4^{2-} \\rightarrow \\text{PbSO}_4 + 2e^-$. Exactly $2$ Faradays are delivered."
  ));
  list.push(createNumerical(st,
    "How many moles of water are produced when $1\\text{ mole of Pb}$ is consumed in a lead storage battery?",
    "2",
    "From the overall reaction $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$, exactly $2$ moles of water are formed."
  ));
  list.push(createNumerical(st,
    "In the electrochemical rusting of iron, how many electrons are lost when one iron atom oxidizes to $\\text{Fe}^{2+}$ at the anodic site?",
    "2",
    "The anodic reaction is $\\text{Fe}(s) \\rightarrow \\text{Fe}^{2+}(aq) + 2e^-$. Exactly $2$ electrons are released."
  ));
  list.push(createNumerical(st,
    "In the cathodic reduction of oxygen during rusting: $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2\\text{O}$, how many electrons are accepted per molecule of $\\text{O}_2$?",
    "4",
    "Exactly $4$ electrons are accepted per molecule of oxygen."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of manganese in the cathode reduction product $\\text{MnO(OH)}$ in a dry cell?",
    "3",
    "In $\\text{MnO(OH)}$, $\\text{O}$ is $-2$ and $\\text{OH}$ is $-1$. $x + (-2) + (-1) = 0 \\implies x = +3$."
  ));
  list.push(createNumerical(st,
    "What is the oxidation state of manganese in manganese dioxide ($\\text{MnO}_2$) used in dry cells?",
    "4",
    "In $\\text{MnO}_2$, $x + 2(-2) = 0 \\implies x = +4$."
  ));
  list.push(createNumerical(st,
    "How many Faradays of electricity must pass to convert $2\\text{ moles of PbSO}_4$ back to $\\text{Pb}$ and $\\text{PbO}_2$ during recharging?",
    "2",
    "Recharging $2\\text{ moles of PbSO}_4$ involves a $2$-electron transfer: $2\\text{PbSO}_4 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4$, requiring $2\\text{ Faradays}$."
  ));
  list.push(createNumerical(st,
    "If the standard reduction potential of zinc is $-0.76\\text{ V}$, what is the magnitude of its standard oxidation potential in Volts multiplied by $100$?",
    "76",
    "$E^\\circ_{\\text{ox}} = -E^\\circ_{\\text{red}} = +0.76\\text{ V}$. Multiplied by $100$, the value is $76$."
  ));

  return list;
}
function createMCQ(subTopic, qText, opts, correctIdx, exp, diff = "Medium") {
  const letters = ["a", "b", "c", "d"];
  return {
    question: qText,
    options: opts,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: exp,
    subject: "Chemistry",
    chapter: "Redox Reactions and Electrochemistry",
    topic: "Redox Reactions and Electrochemistry",
    subTopic: subTopic,
    difficulty: diff,
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
function createAR(subTopic, aText, rText, correctIdx, exp, diff = "Medium") {
  const letters = ["a", "b", "c", "d"];
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${aText}\nReason (R): ${rText}`;
  return {
    question: qText,
    options: AR_OPTIONS,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: exp,
    subject: "Chemistry",
    chapter: "Redox Reactions and Electrochemistry",
    topic: "Redox Reactions and Electrochemistry",
    subTopic: subTopic,
    difficulty: diff,
    questionType: "Assertion–Reasoning",
    type: "ASSERTION_REASON",
    cognitiveLevel: "Conceptual Analysis",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
function createNumerical(subTopic, qText, ans, exp, diff = "Medium") {
  return {
    question: qText,
    options: [],
    correctAnswer: String(ans),
    explanation: exp,
    subject: "Chemistry",
    chapter: "Redox Reactions and Electrochemistry",
    topic: "Redox Reactions and Electrochemistry",
    subTopic: subTopic,
    difficulty: diff,
    questionType: "Numerical Value Question",
    type: "NUMERICAL",
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
const AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is not the correct explanation of Assertion (A)",
  "Assertion (A) is true but Reason (R) is false",
  "Assertion (A) is false but Reason (R) is true"
];

module.exports = {
  getNernstEquationQuestions,
  getFaradayLawsQuestions,
  getBatteriesCorrosionQuestions
};
