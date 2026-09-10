// Subtopic 4: Energy bands (53 Questions: 7 MCQ, 20 NUMERICAL, 26 ASSERTION_REASON)
module.exports = [
  // --- MCQs (7 questions) ---
  {
    type: "MCQ",
    subtopic: "Energy bands",
    question: "At absolute zero temperature ($0\\text{ K}$), an intrinsic semiconductor behaves as:",
    options: ["A perfect conductor", "A perfect insulator", "A superconductor", "A variable resistor"],
    correctAnswer: 1,
    explanation: "At $0\\text{ K}$, all electrons reside in the completely filled valence band and no thermal energy is available to cross the forbidden energy gap ($E_g$) into the conduction band. Hence, the conduction band is completely empty, making it a perfect insulator.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Energy bands",
    question: "For diamond, silicon, and germanium, the forbidden energy gaps are $E_{g1}, E_{g2},$ and $E_{g3}$ respectively. The correct relation among them is:",
    options: ["$E_{g1} > E_{g2} > E_{g3}$", "$E_{g3} > E_{g2} > E_{g1}$", "$E_{g2} > E_{g1} > E_{g3}$", "$E_{g1} = E_{g2} = E_{g3}$"],
    correctAnswer: 0,
    explanation: "The band gaps at room temperature are: Diamond ($E_{g1} \\approx 5.4\\text{ eV}$), Silicon ($E_{g2} \\approx 1.1\\text{ eV}$), and Germanium ($E_{g3} \\approx 0.7\\text{ eV}$). Thus, $E_{g1} > E_{g2} > E_{g3}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Energy bands",
    question: "The energy band gap of a semiconductor decreases with increasing temperature primarily because:",
    options: [
      "Thermal expansion increases interatomic spacing, weakening the periodic lattice potential",
      "Carrier concentration decreases with temperature",
      "The effective mass of electrons becomes infinite",
      "Valence electrons lose their kinetic energy"
    ],
    correctAnswer: 0,
    explanation: "As temperature increases, thermal expansion increases the lattice constant and electron-phonon interactions increase, leading to a dilation of the crystal lattice that narrows the forbidden energy gap.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Energy bands",
    question: "In an n-type semiconductor at room temperature, the donor energy level ($E_d$) is located:",
    options: [
      "Just below the bottom of the conduction band",
      "Just above the top of the valence band",
      "Exactly in the middle of the forbidden gap",
      "Inside the valence band"
    ],
    correctAnswer: 0,
    explanation: "In an n-type semiconductor, donor impurities create localized energy states ($E_d$) just a few hundredths of an electron volt (e.g., $0.05\\text{ eV}$ in Si, $0.01\\text{ eV}$ in Ge) below the bottom of the conduction band ($E_c$).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Energy bands",
    question: "In a p-type semiconductor, the acceptor energy level ($E_a$) is located:",
    options: [
      "Just above the top of the valence band",
      "Just below the bottom of the conduction band",
      "In the middle of the conduction band",
      "Inside the conduction band"
    ],
    correctAnswer: 0,
    explanation: "Acceptor impurity atoms create localized discrete energy levels ($E_a$) located slightly above the top of the valence band ($E_v$), allowing valence electrons to easily jump into them at room temperature.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Energy bands",
    question: "Carbon, Silicon, and Germanium all belong to Group 14 of the periodic table. Yet Carbon (diamond) is an insulator because:",
    options: [
      "Its atoms are too small to form crystal lattices",
      "Its forbidden energy gap is very large (about $5.4\\text{ eV}$)",
      "It has no valence electrons",
      "Its conductivity increases negatively with temperature"
    ],
    correctAnswer: 1,
    explanation: "Carbon in diamond form has an energy band gap of about $5.4\\text{ eV}$. At room temperature, the thermal energy $k_B T \\approx 0.026\\text{ eV}$ is far too small to excite electrons across this large gap, making it an insulator.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Energy bands",
    question: "In a good electrical conductor (metal), the conduction band and valence band:",
    options: ["Overlap each other or the conduction band is partially filled", "Are separated by a gap greater than $6\\text{ eV}$", "Are separated by a gap of $1\\text{ eV}$", "Are completely empty at $0\\text{ K}$"],
    correctAnswer: 0,
    explanation: "In metals, either the valence band overlaps with the conduction band ($E_g = 0$), or the conduction band is partially filled even at $0\\text{ K}$, allowing free movement of electrons under an electric field.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },

  // --- NUMERICAL Questions (20 questions) ---
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "The energy gap of a semiconductor is $E_g = 1.24\\text{ eV}$. Find the maximum threshold wavelength of incident light in nanometers capable of creating an electron-hole pair across the band gap (use $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 1000,
    explanation: "$$\\lambda_{max} = \\frac{hc}{E_g} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{1.24\\text{ eV}} = 1000\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "A semiconductor has a band gap of $E_g = 2.48\\text{ eV}$. Find the minimum frequency of light in units of $10^{14}\\text{ Hz}$ that can cause excitation across the band gap (take $h = 4.136\\times 10^{-15}\\text{ eV}\\cdot\\text{s}$ or use $E = h\\nu$ with $hc/\\lambda = 2.48\\text{ eV}$ giving $\\nu = 6\\times 10^{14}\\text{ Hz}$).",
    options: [],
    correctAnswer: 6,
    explanation: "$$\\nu_{min} = \\frac{E_g}{h} = \\frac{2.48\\text{ eV}}{4.136\\times 10^{-15}\\text{ eV}\\cdot\\text{s}} = 6.0\\times 10^{14}\\text{ Hz}.$$\nThus, the answer is $6$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "If an incident photon of wavelength $620\\text{ nm}$ has just enough energy to excite an electron from the valence band to the conduction band in a semiconductor, find the band gap energy in electron-volts (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 2,
    explanation: "$$E_g = \\frac{hc}{\\lambda} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{620\\text{ nm}} = 2\\text{ eV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "The energy gap of germanium at room temperature is approximately $0.7\\text{ eV}$. Find the energy in joules corresponding to $10^{20}$ times this band gap (using $1\\text{ eV} = 1.6\\times 10^{-19}\\text{ J}$, enter the integer value in joules, where $0.7 \\times 1.6 \\times 10 = 11.2$, or directly evaluate $0.7\\text{ eV}$ in $10^{-20}\\text{ J}$). Find the value of $E_g$ in units of $10^{-20}\\text{ J}$ (to nearest integer: $0.7 \\times 16 = 11.2 \\approx 11$).",
    options: [],
    correctAnswer: 11,
    explanation: "$$E_g = 0.7\\text{ eV} = 0.7 \\times 1.6\\times 10^{-19}\\text{ J} = 1.12\\times 10^{-19}\\text{ J} = 11.2\\times 10^{-20}\\text{ J} \\approx 11\\times 10^{-20}\\text{ J}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "A semiconductor material has a band gap of $E_g = 3.1\\text{ eV}$. Find the cut-off wavelength in nanometers for optical absorption in this material (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 400,
    explanation: "$$\\lambda = \\frac{hc}{E_g} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{3.1\\text{ eV}} = 400\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "In an intrinsic semiconductor, the band gap is $1.2\\text{ eV}$. At $0\\text{ K}$, the Fermi level lies exactly in the middle of the band gap. Find the energy difference (in meV) between the bottom of the conduction band and the Fermi level.",
    options: [],
    correctAnswer: 600,
    explanation: "$$\\Delta E = E_c - E_F = \\frac{E_g}{2} = \\frac{1.2\\text{ eV}}{2} = 0.6\\text{ eV} = 600\\text{ meV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "An LED emits light of wavelength $\\lambda = 620\\text{ nm}$. Assuming that the emitted photon energy equals the band gap $E_g$, find $E_g$ in electron-volts (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 2,
    explanation: "$$E_g = \\frac{hc}{\\lambda} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{620\\text{ nm}} = 2\\text{ eV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "For a silicon crystal, the donor ionization energy of phosphorus is $0.045\\text{ eV}$. If the thermal energy at room temperature ($300\\text{ K}$) is $k_B T \\approx 0.026\\text{ eV}$, find the ratio of donor level depth below $E_c$ ($45\\text{ meV}$) to donor level depth in Ge ($10\\text{ meV}$) as integer $45/10 = 4.5$? Let the question ask: Find the donor binding energy in germanium (in meV), which is $10\\text{ meV}$.",
    options: [],
    correctAnswer: 10,
    explanation: "In germanium, the donor ionization energy is typically about $0.01\\text{ eV} = 10\\text{ meV}$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "The band gap of Gallium Arsenide (GaAs) is $1.42\\text{ eV}$. Calculate the threshold wavelength in nanometers (rounded to nearest integer) above which GaAs becomes transparent to radiation (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$, $1240 / 1.42 \\approx 873\\text{ nm}$).",
    options: [],
    correctAnswer: 873,
    explanation: "$$\\lambda = \\frac{hc}{E_g} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{1.42\\text{ eV}} \\approx 873.2\\text{ nm} \\approx 873\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "A material has an energy gap of $E_g = 4.0\\text{ eV}$. Find the wavelength of photon in nanometers required to excite an electron across the gap (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 310,
    explanation: "$$\\lambda = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{4.0\\text{ eV}} = 310\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "A semiconductor has a band gap of $E_g = 1.55\\text{ eV}$. Find the threshold wavelength in nanometers (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 800,
    explanation: "$$\\lambda = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{1.55\\text{ eV}} = 800\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "The band gap of silicon is $1.1\\text{ eV}$. Calculate the threshold wavelength in nanometers (rounded to nearest integer, take $hc = 1240\\text{ eV}\\cdot\\text{nm}$, $1240 / 1.1 = 1127.27 \\approx 1127\\text{ nm}$).",
    options: [],
    correctAnswer: 1127,
    explanation: "$$\\lambda_{max} = \\frac{1240}{1.1} \\approx 1127.27\\text{ nm} \\approx 1127\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "In an insulator, the energy gap is $E_g = 6.2\\text{ eV}$. Find the maximum wavelength of light in nanometers that can excite an electron across this band gap (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 200,
    explanation: "$$\\lambda = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{6.2\\text{ eV}} = 200\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "An intrinsic semiconductor with band gap $E_g = 0.8\\text{ eV}$ has its Fermi level at the center of the band gap at $0\\text{ K}$. If $E_v = 0\\text{ eV}$ is taken as reference, find the energy of the Fermi level in meV.",
    options: [],
    correctAnswer: 400,
    explanation: "$$E_F = \\frac{E_g}{2} = \\frac{0.8\\text{ eV}}{2} = 0.4\\text{ eV} = 400\\text{ meV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "Light of wavelength $496\\text{ nm}$ is incident on a semiconductor and just causes photoconductivity. Find the band gap of the semiconductor in electron-volts (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$, $1240 / 496 = 2.5\\text{ eV}$; enter $2.5 \\times 10 = 25$? Let question ask: for wavelength $620\\text{ nm}$, find $E_g$ which is an integer $2\\text{ eV}$). Let wavelength be $413.3\\text{ nm}$ giving $3\\text{ eV}$, or $310\\text{ nm}$ giving $4\\text{ eV}$. For $\\lambda = 248\\text{ nm}$, find $E_g$ in eV.",
    options: [],
    correctAnswer: 5,
    explanation: "$$E_g = \\frac{hc}{\\lambda} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{248\\text{ nm}} = 5\\text{ eV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "In an n-type silicon sample, the donor level is $0.05\\text{ eV}$ below the conduction band. Find this energy in millielectron-volts (meV).",
    options: [],
    correctAnswer: 50,
    explanation: "$$\\Delta E = 0.05\\text{ eV} = 50\\text{ meV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "A photodetector made of a semiconductor with band gap $E_g = 1.0\\text{ eV}$ is used to detect optical signals. Find the maximum wavelength of the signal in nanometers that can be detected (take $hc = 1240\\text{ eV}\\cdot\\text{nm}$).",
    options: [],
    correctAnswer: 1240,
    explanation: "$$\\lambda = \\frac{hc}{E_g} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{1.0\\text{ eV}} = 1240\\text{ nm}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "At room temperature, the thermal energy of electrons is $k_B T = 26\\text{ meV}$. Find the band gap of a semiconductor (in meV) if its band gap is exactly $50$ times the thermal energy at room temperature.",
    options: [],
    correctAnswer: 1300,
    explanation: "$$E_g = 50 \\times 26\\text{ meV} = 1300\\text{ meV} = 1.3\\text{ eV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "For diamond, the band gap is $5.4\\text{ eV}$. If the cut-off wavelength is $\\lambda$ in angstroms ($\\text{\\AA}$), using $hc = 12420\\text{ eV}\\cdot\\text{\\AA}$, find $\\lambda$ rounded to the nearest integer ($12420 / 5.4 = 2300\\text{ \\AA}$).",
    options: [],
    correctAnswer: 2300,
    explanation: "$$\\lambda = \\frac{12420\\text{ eV}\\cdot\\text{\\AA}}{5.4\\text{ eV}} = 2300\\text{ \\AA}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Energy bands",
    question: "The energy gap of germanium at $0\\text{ K}$ is $0.78\\text{ eV}$ and at $300\\text{ K}$ is $0.72\\text{ eV}$. Find the decrease in the energy gap in meV as the temperature increases from $0\\text{ K}$ to $300\\text{ K}$.",
    options: [],
    correctAnswer: 60,
    explanation: "$$\\Delta E_g = 0.78\\text{ eV} - 0.72\\text{ eV} = 0.06\\text{ eV} = 60\\text{ meV}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },

  // --- ASSERTION_REASON Questions (26 questions) ---
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): At absolute zero temperature, an intrinsic semiconductor has zero electrical conductivity.\nReason (R): At $0\\text{ K}$, the valence band is completely filled and the conduction band is completely empty, with no thermal energy available to bridge the forbidden energy gap.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Without free electrons in the conduction band or empty states (holes) in the valence band, no electrical conduction is possible at $0\\text{ K}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Diamond is an electrical insulator, whereas graphite is a good electrical conductor.\nReason (R): In diamond, all four valence electrons of each carbon atom form strong $sp^3$ covalent bonds resulting in a large band gap ($5.4\\text{ eV}$), while graphite has $sp^2$ hybridization with delocalized $\\pi$-electrons.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The bonding structure directly dictates the energy band structure: localized $sp^3$ bonds create a wide band gap, whereas delocalized $\\pi$ bonds in graphite create overlapping bands with free mobile carriers. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The electrical conductivity of a semiconductor increases with increasing temperature.\nReason (R): As temperature rises, more covalent bonds break, generating a greater number of free electrons in the conduction band and holes in the valence band.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Carrier concentration increases exponentially with temperature according to $n_i \\propto T^{3/2} e^{-E_g / 2k_B T}$, heavily dominating over any reduction in carrier mobility. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In an n-type semiconductor, the Fermi energy level lies close to the conduction band at room temperature.\nReason (R): The donor impurity level provides a high density of electrons just below the conduction band, increasing the probability of finding electrons near $E_c$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since the Fermi level represents the chemical potential for electrons, an abundance of donor electrons raises $E_F$ towards $E_c$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a p-type semiconductor, the Fermi energy level lies close to the valence band at low temperatures.\nReason (R): The presence of acceptor levels near the valence band creates a large concentration of empty states (holes) in the valence band.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Acceptor ionization removes electrons from the valence band, depressing the Fermi level downwards towards the valence band edge $E_v$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): At very high temperatures, an extrinsic semiconductor behaves like an intrinsic semiconductor.\nReason (R): At high temperatures, thermally generated electron-hole pairs far outnumber the carrier concentration contributed by the dopant impurity atoms.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Dopant concentration $N_D$ is fixed, whereas $n_i$ grows exponentially with temperature. When $n_i \\gg N_D$, intrinsic conduction dominates. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Energy bands are formed in solids due to the interaction of discrete atomic orbitals in a crystal lattice.\nReason (R): According to the Pauli exclusion principle, when $N$ identical atoms come together to form a solid, each atomic energy level splits into $N$ closely spaced discrete sub-levels.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "When interatomic distance decreases, wavefunctions overlap. Pauli exclusion prohibits identical quantum numbers, forcing each atomic level to split into $N$ closely spaced states forming a continuous band. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The forbidden energy gap of silicon ($1.1\\text{ eV}$) is larger than that of germanium ($0.7\\text{ eV}$).\nReason (R): Silicon atoms are smaller than germanium atoms, leading to shorter covalent bond lengths and stronger binding of valence electrons to the nucleus.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Silicon valence electrons occupy $n=3$ shells while germanium valence electrons occupy $n=4$ shells. Stronger Coulomb binding in Si requires more energy to break bonds, yielding a larger band gap. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In metals, the temperature coefficient of electrical resistance is positive.\nReason (R): In metals, the number of free conduction electrons remains virtually constant with temperature, but thermal lattice vibrations increase electron scattering, reducing relaxation time.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "In metals, $\\rho = \\frac{m}{n e^2 \\tau}$. Since $n$ is saturated, the reduction in relaxation time $\\tau$ due to phonon scattering increases resistivity with temperature. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Semiconductors have a negative temperature coefficient of resistance.\nReason (R): With increasing temperature, the exponential increase in carrier concentration $n_i$ far outweighs the slight decrease in carrier mobility.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\sigma = e(n\\mu_e + p\\mu_h)$, the exponential growth of $n$ and $p$ drastically increases conductivity, meaning resistance decreases with temperature ($dR/dT < 0$). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): No electron can possess an energy state lying inside the forbidden energy gap of an ideal intrinsic crystal.\nReason (R): In an ideal periodic lattice, the solutions to the Schrödinger wave equation yield purely imaginary wave vectors (evanescent waves) inside the band gap.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Bloch's theorem and the Kronig-Penney model prove that wave vectors $k$ are imaginary inside the gap, so no propagating stationary electron wave states can exist. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The effective mass of an electron near the top of the valence band is negative.\nReason (R): The curvature of the energy-momentum dispersion relation $\\frac{d^2 E}{dk^2}$ is negative near the maximum of the valence band.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Effective mass is defined as $m^* = \\hbar^2 / \\left(\\frac{d^2 E}{dk^2}\\right)$. Near band maxima, the curve is concave downward ($\\frac{d^2 E}{dk^2} < 0$), resulting in a negative effective mass, which physically corresponds to a positively charged hole. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Direct band gap semiconductors are preferred over indirect band gap semiconductors for manufacturing LEDs and laser diodes.\nReason (R): In direct band gap semiconductors, the conduction band minimum and valence band maximum occur at the same crystal momentum ($k=0$), enabling radiative recombination without phonon assistance.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Direct recombination conserves momentum via pure photon emission. In indirect semiconductors like Si and Ge, momentum conservation requires emitting/absorbing a phonon, severely reducing optical efficiency. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Silicon is an indirect band gap semiconductor.\nReason (R): In silicon, the bottom of the conduction band does not align with the top of the valence band in $k$-space.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By definition, an indirect band gap semiconductor has its conduction band minimum shifted away from $k = 0$, requiring lattice phonons for electron transition. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Gallium Arsenide (GaAs) is an example of a direct band gap semiconductor.\nReason (R): In GaAs, electron transitions from the conduction band to the valence band occur with significant photon emission efficiency.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 1,
    explanation: "Both statements are true. High photon emission is a consequence of having a direct band gap, while the direct band gap itself is defined by momentum alignment in the E-k diagram. Hence both are true but (R) is a consequence rather than the fundamental cause.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In an intrinsic semiconductor, the Fermi level lies at the exact geometric midpoint of the forbidden energy gap if electron and hole effective masses are equal.\nReason (R): The Fermi level equation is $E_F = \\frac{E_c + E_v}{2} + \\frac{3}{4} k_B T \\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "When $m_h^* = m_e^*$, the logarithmic term $\\ln(1) = 0$, so $E_F = \\frac{E_c + E_v}{2}$, exactly at the mid-gap. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Metals have very high electrical conductivity.\nReason (R): In metals, the valence band overlaps with the conduction band, providing an enormous density of unoccupied states immediately accessible to valence electrons.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because $E_g = 0$, even an infinitesimal electric field imparts momentum to electrons without needing thermal activation across a forbidden gap. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Glass is transparent to visible light, while silicon appears metallic and opaque to visible light.\nReason (R): The energy gap of glass is greater than the photon energy of visible light, whereas the band gap of silicon ($1.1\\text{ eV}$) is smaller than visible photon energies ($1.8 - 3.1\\text{ eV}$).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Visible photons pass through glass without absorption because $h\\nu < E_g$, while in silicon, visible photons have $h\\nu > E_g$ and are strongly absorbed to create electron-hole pairs. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A completely filled energy band does not contribute to electrical conduction.\nReason (R): In a completely filled band, every electron moving with velocity $+v$ is paired with another electron moving with velocity $-v$, so the net current is zero even when an electric field is applied.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Without available empty states within the band, electrons cannot be accelerated into higher momentum states by an external field. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The donor energy level in an n-type semiconductor lies within the forbidden energy gap.\nReason (R): The fifth valence electron of a pentavalent donor atom is weakly bound to the impurity ion and requires only a small amount of ionization energy to enter the conduction band.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because the fifth electron is shielded by the high dielectric constant of the semiconductor and has a small effective mass, its binding energy is just $0.01 - 0.05\\text{ eV}$, situating $E_d$ barely below $E_c$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The Fermi-Dirac distribution function gives the probability of occupation of an energy state $E$ by a fermion at temperature $T$.\nReason (R): Electrons obey the Pauli exclusion principle and are described by Fermi-Dirac statistics: $f(E) = \\frac{1}{1 + e^{(E - E_F)/k_B T}}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Because electrons are indistinguishable spin-1/2 fermions subject to Pauli exclusion, their thermodynamic occupation follows Fermi-Dirac statistics. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): At $T = 0\\text{ K}$, the probability of an electron occupying an energy state above the Fermi energy $E_F$ is zero.\nReason (R): For $E > E_F$ at $T = 0\\text{ K}$, the exponent $\\frac{E - E_F}{k_B T} \\to +\\infty$, making $f(E) = \\frac{1}{1 + e^{+\\infty}} = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "At absolute zero, electrons occupy all available lowest energy states up to $E_F$, leaving all states above $E_F$ completely unoccupied ($f=0$). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Photons with energy less than the band gap $E_g$ pass through a semiconductor without significant absorption.\nReason (R): An electron cannot be excited to an energy state within the forbidden energy gap, so energy conservation forbids absorption of sub-bandgap photons in an ideal crystal.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Without permissible energy states inside the gap, photons cannot impart their energy to valence electrons, making the crystal transparent to sub-bandgap wavelengths. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The width of an energy band in a crystal depends on the interatomic spacing.\nReason (R): As the interatomic spacing decreases, the overlap between electron wavefunctions of neighboring atoms increases, leading to wider energy band splitting.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Greater orbital overlap creates stronger perturbation of atomic states, broadening the split sub-levels into wider bands. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A hole behaves physically as a positive charge carrier with positive effective mass.\nReason (R): The absence of a negatively charged electron in an otherwise filled valence band leaves an uncompensated positive nuclear charge.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "When an electron leaves a neutral covalent bond, the localized region has a net positive charge $+e$ and moves in the direction of an applied electric field, behaving as a quasiparticle with positive effective mass. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Energy bands",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The Fermi level in an intrinsic semiconductor has an occupation probability of exactly $0.5$ at any non-zero temperature.\nReason (R): Substituting $E = E_F$ into the Fermi-Dirac distribution yields $f(E_F) = \\frac{1}{1 + e^0} = \\frac{1}{1 + 1} = \\frac{1}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By definition, the Fermi energy is the energy state where the probability of occupation is exactly $1/2$ at any finite temperature $T > 0\\text{ K}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  }
];
