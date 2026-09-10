import json

questions = []

def add_q(ch, sub, q_text, opts, ans_idx, exp_text):
    questions.append({
        "chapter": ch,
        "subtopic": sub,
        "subTopic": sub,
        "topic": ch,
        "subject": "Physics",
        "examType": "JEE Mains",
        "exam": "JEE Main",
        "type": "MCQ",
        "questionType": "MCQ (Multiple Choice Question)",
        "difficulty": "Difficult",
        "targetAudience": "Top 100 Students",
        "source": "JEE Mains Top 100 Analysis",
        "marks": 4,
        "negativeMarks": 1,
        "question": q_text,
        "options": opts,
        "correctAnswer": ans_idx,
        "correctOption": ans_idx,
        "explanation": exp_text,
        "solution": exp_text
    })

# ==========================================
# CHAPTER 19: Electronic Devices (6 subtopics * 5 = 30 questions)
# ==========================================

# Subtopic 1: Energy bands
add_q(
    "Electronic Devices", "Energy bands",
    "At absolute zero temperature ($T = 0\\text{ K}$), an intrinsic semiconductor behaves as an ideal electrical insulator because:",
    [
        "The valence band is completely full and the conduction band is completely empty, with no thermal energy to bridge the band gap $E_g$",
        "The band gap $E_g$ expands to infinity",
        "Electrons freeze in the conduction band",
        "Electron mobility drops to zero"
    ],
    0,
    "At $T = 0\\text{ K}$, thermal energy $k_B T = 0$. By Fermi-Dirac statistics, all available quantum energy states below the Fermi level (in the valence band) are fully occupied, and all states in the conduction band are completely vacant. Since there are no free charge carriers in the conduction band to carry current under an electric field, the material is a perfect insulator."
)

add_q(
    "Electronic Devices", "Energy bands",
    "In a metal (conductor), the high electrical conductivity is primarily due to:",
    [
        "Overlapping valence and conduction bands, or a partially filled conduction band with zero band gap ($E_g = 0$)",
        "A very large band gap allowing rapid tunneling",
        "All electrons having identical velocities",
        "Only hole conduction"
    ],
    0,
    "In metals, either the conduction band is partially filled with electrons (like monovalent alkali metals) or the valence band and conduction band overlap continuously in energy ($E_g = 0$), allowing electrons to gain infinitesimal kinetic energy from an external electric field and conduct current freely."
)

add_q(
    "Electronic Devices", "Energy bands",
    "Carbon (diamond), Silicon, and Germanium all belong to Group 14 with four valence electrons. Their band gaps satisfy:",
    [
        "$E_g(\\text{C}) > E_g(\\text{Si}) > E_g(\\text{Ge})$",
        "$E_g(\\text{Ge}) > E_g(\\text{Si}) > E_g(\\text{C})$",
        "$E_g(\\text{Si}) > E_g(\\text{Ge}) > E_g(\\text{C})$",
        "$E_g(\\text{C}) = E_g(\\text{Si}) = E_g(\\text{Ge})$"
    ],
    0,
    "As we descend Group 14, atomic size increases, interatomic bond length increases, and valence electrons are less tightly bound to the nucleus. Consequently, the forbidden energy band gap decreases monotonically: Carbon (diamond) has $E_g \\approx 5.4\\text{ eV}$ (insulator), Silicon has $E_g \\approx 1.1\\text{ eV}$ (semiconductor), and Germanium has $E_g \\approx 0.67\\text{ eV}$ (semiconductor)."
)

add_q(
    "Electronic Devices", "Energy bands",
    "In an intrinsic semiconductor, the Fermi energy level $E_F$ lies:",
    [
        "Almost exactly midway in the forbidden band gap between the top of the valence band and bottom of the conduction band",
        "Directly inside the conduction band",
        "At the bottom of the valence band",
        "At the top of the conduction band"
    ],
    0,
    "In an intrinsic semiconductor, electron concentration equals hole concentration ($n = p = n_i$). From Fermi-Dirac statistics, the Fermi level is given by $E_F = \\frac{E_c + E_v}{2} + \\frac{3}{4} k_B T \\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$. At moderate temperatures, it lies virtually in the exact middle of the band gap."
)

add_q(
    "Electronic Devices", "Energy bands",
    "When an n-type semiconductor is heavily doped with donor impurities, the Fermi energy level $E_F$ shifts:",
    [
        "Upward towards the conduction band edge $E_c$",
        "Downward towards the valence band edge $E_v$",
        "Stays at the center of the forbidden gap",
        "Drops below the valence band"
    ],
    0,
    "Donor impurities introduce discrete energy levels $E_d$ just below the conduction band edge ($E_c - E_d \\approx 0.01-0.05\\text{ eV}$). As donor concentration $N_d$ increases, the large population of electrons in the conduction band shifts the chemical potential (Fermi level $E_F$) upward towards the conduction band edge $E_c$."
)

# Subtopic 2: Intrinsic/extrinsic semiconductors
add_q(
    "Electronic Devices", "Intrinsic/extrinsic semiconductors",
    "According to the law of mass action in semiconductors in thermal equilibrium, the product of electron concentration $n$ and hole concentration $p$ is:",
    [
        "$n \\cdot p = n_i^2$, independent of doping levels",
        "$n \\cdot p = n_i$",
        "$n + p = n_i^2$",
        "$n / p = n_i^2$"
    ],
    0,
    "The law of mass action states that under thermal equilibrium conditions, the product of free electron concentration $n$ and hole concentration $p$ is constant and equals the square of the intrinsic carrier concentration: $n \\cdot p = n_i^2(T)$, valid for both intrinsic and extrinsic (n-type and p-type) semiconductors at a given temperature."
)

add_q(
    "Electronic Devices", "Intrinsic/extrinsic semiconductors",
    "Silicon is doped with $10^{17}\\text{ atoms/cm}^3$ of phosphorus (a donor). If the intrinsic carrier concentration is $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ at $300\\text{ K}$, what is the hole concentration in this n-type silicon?",
    [
        "$2.25 \\times 10^3\\text{ cm}^{-3}$",
        "$1.5 \\times 10^3\\text{ cm}^{-3}$",
        "$2.25 \\times 10^7\\text{ cm}^{-3}$",
        "$1.0 \\times 10^7\\text{ cm}^{-3}$"
    ],
    0,
    "Since donor doping $N_d \\gg n_i$, electron concentration is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$. By the law of mass action: $p = \\frac{n_i^2}{n} = \\frac{(1.5 \\times 10^{10})^2}{10^{17}} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^3\\text{ cm}^{-3}$."
)

add_q(
    "Electronic Devices", "Intrinsic/extrinsic semiconductors",
    "An extrinsic p-type semiconductor as a whole carries what net electric charge?",
    [
        "Strictly zero (it is electrically neutral)",
        "Positive charge equal to the number of holes",
        "Negative charge equal to ionized acceptors",
        "Positive charge from ionized donors"
    ],
    0,
    "An extrinsic p-type semiconductor is created by doping pure silicon with neutral trivalent atoms (like boron or indium). Although mobile holes are positive, each hole leaves behind a negatively charged immobile ionized acceptor core ($B^-$). Total positive charges (holes + donor ions) exactly balance total negative charges (electrons + acceptor ions), maintaining overall macroscopic electrical neutrality."
)

add_q(
    "Electronic Devices", "Intrinsic/extrinsic semiconductors",
    "Why is the mobility of electrons $\\mu_e$ in silicon significantly higher than the mobility of holes $\\mu_h$?",
    [
        "Electrons move freely in the conduction band, whereas hole transport involves the stepwise movement of bound valence electrons between covalent bonds",
        "Holes have infinite effective mass",
        "Electrons experience no scattering",
        "Holes have greater electric charge"
    ],
    0,
    "Conduction band electrons are completely free delocalized wave packets experiencing a smaller effective mass $m_e^*$. Hole transport in the valence band occurs through the sequential hopping of bound electrons into neighboring covalent bonds with a heavier effective mass $m_h^*$, making $\\mu_e > \\mu_h$ (typically $\\mu_e \\approx 1350\\text{ cm}^2/\\text{V}\\cdot\\text{s}$ vs $\\mu_h \\approx 480\\text{ cm}^2/\\text{V}\\cdot\\text{s}$ in silicon)."
)

add_q(
    "Electronic Devices", "Intrinsic/extrinsic semiconductors",
    "Total electrical conductivity $\\sigma$ of an extrinsic semiconductor containing electron concentration $n$ and hole concentration $p$ is given by:",
    [
        "$\\sigma = e (n \\mu_e + p \\mu_h)$",
        "$\\sigma = e (n \\mu_e - p \\mu_h)$",
        "$\\sigma = e n_i (\\mu_e + \\mu_h)$",
        "$\\sigma = \\frac{e (n + p)}{\\mu_e + \\mu_h}$"
    ],
    0,
    "Under an applied electric field, electrons and holes drift in opposite directions, but because their charges have opposite signs, both contribute to current in the same direction. Total current density is $J = J_e + J_h = (n e v_{d,e}) + (p e v_{d,h}) = e(n \\mu_e + p \\mu_h)E$. Thus $\\sigma = e(n \\mu_e + p \\mu_h)$."
)

# Subtopic 3: Diodes
add_q(
    "Electronic Devices", "Diodes",
    "In an unbiased p-n junction in equilibrium, the depletion region contains:",
    [
        "Only immobile ionized donor and acceptor impurity ions, completely stripped of mobile charge carriers",
        "Equal concentrations of mobile electrons and holes",
        "Free electrons on the p-side and free holes on the n-side",
        "Neutral dopant atoms only"
    ],
    0,
    "Due to concentration gradients across the metallurgical junction, electrons diffuse from n to p and holes diffuse from p to n, recombining near the junction. This leaves behind uncovered, immobile positive donor ions ($N_d^+$) on the n-side and immobile negative acceptor ions ($N_a^-$) on the p-side, forming a space-charge depletion region devoid of mobile carriers."
)

add_q(
    "Electronic Devices", "Diodes",
    "What happens to the width of the depletion layer and the barrier potential of a p-n junction under forward bias and reverse bias?",
    [
        "Forward bias: depletion width and barrier potential both decrease; Reverse bias: both increase",
        "Forward bias: depletion width increases; Reverse bias: depletion width decreases",
        "Both remain unchanged",
        "Depletion width decreases under reverse bias"
    ],
    0,
    "Under forward bias, the applied voltage opposes the built-in barrier potential ($V_{net} = V_{bi} - V_f$), reducing the electric field and narrowing the depletion region. Under reverse bias, the applied voltage aids the built-in potential ($V_{net} = V_{bi} + V_r$), pulling carriers away from the junction and widening the depletion layer."
)

add_q(
    "Electronic Devices", "Diodes",
    "The built-in contact potential $V_{bi}$ of an abrupt p-n junction with doping densities $N_a$ and $N_d$ at temperature $T$ is given by:",
    [
        "$V_{bi} = \\frac{k_B T}{e} \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$",
        "$V_{bi} = \\frac{k_B T}{e} \\ln\\left(\\frac{n_i^2}{N_a N_d}\\right)$",
        "$V_{bi} = \\frac{e}{k_B T} \\frac{N_a N_d}{n_i^2}$",
        "$V_{bi} = \\frac{k_B T}{e} \\frac{N_a + N_d}{n_i}$"
    ],
    0,
    "Equating the diffusion current and drift current in thermal equilibrium yields the built-in contact potential: $V_{bi} = V_T \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right) = \\frac{k_B T}{e} \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$ (typically $0.7\\text{ V}$ for Si and $0.3\\text{ V}$ for Ge)."
)

add_q(
    "Electronic Devices", "Diodes",
    "The reverse saturation current $I_s$ in a standard p-n junction diode is primarily governed by:",
    [
        "Thermally generated minority carriers diffusing into the depletion layer",
        "Majority carrier diffusion across the barrier",
        "The external applied reverse voltage",
        "Recombination in the contact wires"
    ],
    0,
    "In reverse bias, the barrier height is increased, suppressing majority carrier diffusion to zero. The tiny reverse current $I_s$ is produced by thermally generated minority carriers (electrons in the p-region and holes in the n-region) that wander to the edge of the depletion region and are swept across by the strong electric field. It depends strongly on temperature ($I_s \\propto T^3 e^{-E_g / k_B T}$), doubling roughly every $10^\\circ\\text{C}$."
)

add_q(
    "Electronic Devices", "Diodes",
    "The dynamic (AC) resistance $r_d$ of a forward-biased p-n junction carrying current $I$ at room temperature ($V_T = 26\\text{ mV}$) is:",
    [
        "$r_d = \\frac{V_T}{I} = \\frac{26\\text{ mV}}{I}$",
        "$r_d = \\frac{V}{I}$",
        "$r_d = \\frac{I}{V_T}$",
        "$r_d = V_T \\cdot I$"
    ],
    0,
    "From the Shockley diode equation $I \\approx I_s e^{V / V_T}$: differentiating gives $\\frac{dI}{dV} = \\frac{I_s}{V_T} e^{V/V_T} = \\frac{I}{V_T}$. The dynamic AC resistance is the reciprocal: $r_d = \\frac{dV}{dI} = \\frac{V_T}{I} = \\frac{26\\text{ mV}}{I}$."
)

# Subtopic 4: Logic gates
add_q(
    "Electronic Devices", "Logic gates",
    "Which logic gate combination is known as a 'Universal Gate' because any Boolean logic function can be constructed exclusively from it?",
    [
        "NAND gate and NOR gate",
        "AND gate and OR gate",
        "XOR gate and XNOR gate",
        "NOT gate only"
    ],
    0,
    "NAND and NOR gates are universal gates because their repeated combinations can synthesize all three basic Boolean operations: NOT (inversion), AND (conjunction), and OR (disjunction), as well as complex arithmetic logic circuits."
)

add_q(
    "Electronic Devices", "Logic gates",
    "According to De Morgan's first and second theorems in Boolean algebra:",
    [
        "$\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$ and $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$",
        "$\\overline{A + B} = \\bar{A} + \\bar{B}$ and $\\overline{A \\cdot B} = \\bar{A} \\cdot \\bar{B}$",
        "$\\overline{A + B} = A \\cdot B$",
        "$\\overline{A \\cdot B} = A + B$"
    ],
    0,
    "De Morgan's laws state: (1) The complement of a logical sum equals the product of the complements: $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$; (2) The complement of a logical product equals the sum of the complements: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$."
)

add_q(
    "Electronic Devices", "Logic gates",
    "What is the output $Y$ of the Boolean expression $Y = (A + B) \\cdot (\\bar{A} + B)$?",
    [
        "$B$",
        "$A$",
        "$A B$",
        "$\\bar{A} + B$"
    ],
    0,
    "Distributing the terms: $Y = A \\bar{A} + A B + B \\bar{A} + B B$. Since $A \\bar{A} = 0$ and $B B = B$: $Y = 0 + A B + \\bar{A} B + B = B(A + \\bar{A} + 1) = B(1) = B$."
)

add_q(
    "Electronic Devices", "Logic gates",
    "The output of an exclusive-OR (XOR) gate is logic HIGH ($1$) if and only if:",
    [
        "The two inputs are different ($A \\neq B$)",
        "Both inputs are logic $1$",
        "Both inputs are logic $0$",
        "At least one input is logic $1$"
    ],
    0,
    "An XOR gate implements the function $Y = A \\oplus B = A \\bar{B} + \\bar{A} B$. Its output is $1$ when exactly one of the inputs is $1$ (i.e. inputs are unequal), and $0$ when both inputs are identical ($0,0$ or $1,1$)."
)

add_q(
    "Electronic Devices", "Logic gates",
    "In digital electronics, a Half Adder circuit consists of:",
    [
        "One XOR gate for Sum ($S = A \\oplus B$) and one AND gate for Carry ($C = A \\cdot B$)",
        "Two OR gates and one NOT gate",
        "One NAND gate and one NOR gate",
        "Two AND gates"
    ],
    0,
    "A half adder performs binary addition of two single bits $A$ and $B$. The sum bit follows XOR truth table: $S = A \\oplus B = A \\bar{B} + \\bar{A} B$. The carry bit is $1$ only when both bits are $1$, following the AND gate: $C = A \\cdot B$."
)

# Subtopic 5: p-n junction diode applications (rectifiers, Zener diode)
add_q(
    "Electronic Devices", "p-n junction diode applications (rectifiers, Zener diode)",
    "A Zener diode is specifically designed to operate in which operating region and is used as which circuit element?",
    [
        "Reverse breakdown region as a voltage regulator",
        "Forward conduction region as an amplifier",
        "Depletion region as a variable capacitor",
        "Cutoff region as an oscillator"
    ],
    0,
    "A Zener diode is heavily doped with sharp junction profile, producing a narrow depletion layer ($< 1\\,\\mu\\text{m}$). When reverse-biased beyond its breakdown voltage $V_Z$, it maintains an almost strictly constant terminal voltage across wide variations of reverse current, making it ideal for voltage regulation."
)

add_q(
    "Electronic Devices", "p-n junction diode applications (rectifiers, Zener diode)",
    "What is the ripple factor $r$ of a full-wave center-tapped or bridge rectifier without a filter capacitor?",
    [
        "$0.482$",
        "$1.21$",
        "$0.812$",
        "$0.10$"
    ],
    0,
    "The ripple factor is defined as $r = \\frac{I_{ac, rms}}{I_{dc}} = \\sqrt{\\left(\\frac{I_{rms}}{I_{dc}}\\right)^2 - 1}$. For a full-wave rectifier: $I_{rms} = I_0 / \\sqrt{2}$ and $I_{dc} = 2 I_0 / \\pi$. Thus $r = \\sqrt{\\left(\\frac{\\pi}{2\\sqrt{2}}\\right)^2 - 1} = \\sqrt{\\frac{\\pi^2}{8} - 1} = \\sqrt{1.2337 - 1} = \\sqrt{0.2337} \\approx 0.482$."
)

add_q(
    "Electronic Devices", "p-n junction diode applications (rectifiers, Zener diode)",
    "What is the maximum theoretical rectification efficiency $\\eta_{\\max}$ of a full-wave rectifier?",
    [
        "$81.2\\%$",
        "$40.6\\%$",
        "$100\\%$",
        "$50\\%$"
    ],
    0,
    "Rectification efficiency is $\\eta = \\frac{P_{dc}}{P_{ac}} = \\frac{I_{dc}^2 R_L}{I_{rms}^2 (r_f + R_L)}$. For $R_L \\gg r_f$: $\\eta = \\frac{(2 I_0 / \\pi)^2}{(I_0 / \\sqrt{2})^2} = \\frac{8}{\\pi^2} \\approx 0.812 = 81.2\\%$. (For a half-wave rectifier, it is $40.6\\%$)."
)

add_q(
    "Electronic Devices", "p-n junction diode applications (rectifiers, Zener diode)",
    "Zener breakdown differs physically from Avalanche breakdown in that Zener breakdown:",
    [
        "Occurs in heavily doped diodes with narrow depletion regions where strong electric fields pull electrons directly from covalent bonds by quantum tunneling (negative temp. coefficient)",
        "Occurs in lightly doped diodes through cumulative impact ionization by fast carriers",
        "Occurs only under forward bias",
        "Causes permanent thermal destruction immediately"
    ],
    0,
    "Zener breakdown occurs in heavily doped junctions ($V_Z < 6\\text{ V}$) due to high electric fields ($\\mathcal{E} > 10^6\\text{ V/m}$) ripping valence electrons directly into the conduction band via internal quantum mechanical field emission (Zener tunneling), which has a negative temperature coefficient. Avalanche breakdown ($V_Z > 6\\text{ V}$) occurs in lightly doped junctions via impact ionization by thermally accelerated carriers and has a positive temperature coefficient."
)

add_q(
    "Electronic Devices", "p-n junction diode applications (rectifiers, Zener diode)",
    "If the input AC frequency to a full-wave bridge rectifier is $50\\text{ Hz}$, what is the fundamental frequency of the output ripple?",
    [
        "$100\\text{ Hz}$",
        "$50\\text{ Hz}$",
        "$25\\text{ Hz}$",
        "$200\\text{ Hz}$"
    ],
    0,
    "In a full-wave rectifier, both the positive and negative half-cycles of the AC input are inverted into positive output pulses. Therefore, during one input period $T$, two identical pulses appear at the output, doubling the ripple frequency: $f_{out} = 2 f_{in} = 2 \\times 50\\text{ Hz} = 100\\text{ Hz}$."
)

# Subtopic 6: Solar cell, photodiode, and LED
add_q(
    "Electronic Devices", "Solar cell, photodiode, and LED",
    "A photodiode is operated under reverse bias rather than forward bias because:",
    [
        "The fractional change in minority carrier current under illumination is vastly easier to detect than in majority carrier current",
        "The photodiode burns out in forward bias",
        "Photoelectric effect occurs only under reverse bias",
        "Reverse bias increases light emission"
    ],
    0,
    "Under illumination, electron-hole pairs $\\Delta n = \\Delta p$ are generated. In an n-type semiconductor, initial majority carrier density $n_n \\gg \\Delta n$, so fractional change $\\frac{\\Delta n}{n_n} \\ll 1$. But for minority holes, $p_n \\ll \\Delta p$, so fractional change $\\frac{\\Delta p}{p_n} \\gg 1$. Since reverse current is entirely minority-carrier driven, reverse current changes by orders of magnitude upon illumination, providing maximum sensitivity."
)

add_q(
    "Electronic Devices", "Solar cell, photodiode, and LED",
    "A Light Emitting Diode (LED) emits photons under forward bias due to:",
    [
        "Spontaneous radiative recombination of injected excess electrons and holes near the junction",
        "Thermal black body emission from Joule heating",
        "Stimulated emission inside a resonant optical cavity",
        "Avalanche multiplication"
    ],
    0,
    "Under forward bias, electrons are injected into the p-region and holes into the n-region. These injected excess minority carriers spontaneously recombine with majority carriers across the band gap, releasing transition energy as photons of wavelength $\\lambda \\approx \\frac{h c}{E_g}$."
)

add_q(
    "Electronic Devices", "Solar cell, photodiode, and LED",
    "Why are direct band gap semiconductors (like GaAs and GaN) used for LEDs rather than indirect band gap semiconductors (like Si and Ge)?",
    [
        "In direct band gap semiconductors, the conduction band minimum and valence band maximum align at the same crystal momentum $k = 0$, allowing direct radiative recombination without requiring phonons",
        "Direct band gap semiconductors have zero electrical resistance",
        "Silicon and Germanium have no band gaps",
        "Direct band gap semiconductors can only emit white light"
    ],
    0,
    "In direct band gap semiconductors (GaAs), transition of an electron across the band gap conserves momentum directly ($\\Delta k = 0$), yielding high radiative recombination efficiency ($\\sim 10-50\\%$). In indirect band gap materials (Si, Ge), conduction minimum and valence maximum occur at different $k$, requiring simultaneous emission/absorption of a lattice phonon to conserve momentum, which makes non-radiative heat dissipation dominate."
)

add_q(
    "Electronic Devices", "Solar cell, photodiode, and LED",
    "The $I-V$ characteristic of a solar cell lies predominantly in which quadrant of the coordinate system?",
    [
        "Fourth quadrant ($V > 0, I < 0$)",
        "First quadrant ($V > 0, I > 0$)",
        "Second quadrant ($V < 0, I > 0$)",
        "Third quadrant ($V < 0, I < 0$)"
    ],
    0,
    "A solar cell does not consume electrical power; it delivers electrical power to an external load. By standard passive sign convention, power delivered is $P = V I < 0$. With positive photovoltage $V > 0$, the photocurrent flows in the negative direction, so the operational characteristic lies in the fourth quadrant between short-circuit current $I_{sc}$ on the negative $y$-axis and open-circuit voltage $V_{oc}$ on the positive $x$-axis."
)

add_q(
    "Electronic Devices", "Solar cell, photodiode, and LED",
    "For efficient solar light absorption, the ideal semiconductor band gap $E_g$ for a single-junction photovoltaic solar cell (Shockley-Queisser limit) is approximately:",
    [
        "$1.1-1.5\\text{ eV}$",
        "$0.2-0.5\\text{ eV}$",
        "$3.0-4.0\\text{ eV}$",
        "$5.0-6.0\\text{ eV}$"
    ],
    0,
    "Solar spectrum irradiance at Earth's surface peaks around photon energies of $1.1-1.5\\text{ eV}$. Silicon ($E_g = 1.12\\text{ eV}$) and GaAs ($E_g = 1.43\\text{ eV}$) match this optimal range, balancing high photon absorption with minimal thermalization loss to achieve theoretical peak efficiency $\\approx 33\\%$."
)

# ==========================================
# CHAPTER 20: Experimental Skills (6 subtopics * 5 = 30 questions)
# ==========================================

# Subtopic 1: Vernier calipers
add_q(
    "Experimental Skills", "Vernier calipers",
    "A Vernier caliper has 1 main scale division (MSD) equal to $1\\text{ mm}$. If 20 vernier scale divisions (VSD) coincide with 19 main scale divisions, what is the least count (LC) of the instrument?",
    [
        "$0.05\\text{ mm}$",
        "$0.01\\text{ mm}$",
        "$0.10\\text{ mm}$",
        "$0.02\\text{ mm}$"
    ],
    0,
    "Given $20\\text{ VSD} = 19\\text{ MSD} \\implies 1\\text{ VSD} = \\frac{19}{20}\\text{ MSD} = \\frac{19}{20} \\times 1\\text{ mm} = 0.95\\text{ mm}$. The least count is $LC = 1\\text{ MSD} - 1\\text{ VSD} = 1\\text{ mm} - 0.95\\text{ mm} = 0.05\\text{ mm}$."
)

add_q(
    "Experimental Skills", "Vernier calipers",
    "When the jaws of a Vernier caliper are in contact, the zero of the Vernier scale lies to the right of the zero of the main scale, and the 6th vernier division coincides with a main scale division. If $LC = 0.01\\text{ cm}$, what is the zero error and the zero correction?",
    [
        "$\\text{Zero error} = +0.06\\text{ cm}, \\text{Zero correction} = -0.06\\text{ cm}$",
        "$\\text{Zero error} = -0.06\\text{ cm}, \\text{Zero correction} = +0.06\\text{ cm}$",
        "$\\text{Zero error} = +0.06\\text{ cm}, \\text{Zero correction} = +0.06\\text{ cm}$",
        "$\\text{Zero error} = 0, \\text{Zero correction} = 0$"
    ],
    0,
    "When the vernier zero lies to the right of main scale zero, the error is positive: $\\text{Zero error} = + (n \\times LC) = + (6 \\times 0.01\\text{ cm}) = +0.06\\text{ cm}$. The true reading is $\\text{Observed reading} - \\text{Zero error}$, so $\\text{Zero correction} = -0.06\\text{ cm}$."
)

add_q(
    "Experimental Skills", "Vernier calipers",
    "In a Vernier caliper, $n$ divisions of vernier scale coincide with $(n - 1)$ divisions of main scale. If $1\\text{ MSD} = a\\text{ units}$, the least count is:",
    [
        "$\\frac{a}{n}$",
        "$\\frac{a}{n - 1}$",
        "$\\frac{n a}{n - 1}$",
        "$\\frac{a}{2 n}$"
    ],
    0,
    "Least count is $LC = 1\\text{ MSD} - 1\\text{ VSD} = a - \\left(\\frac{n - 1}{n}\\right) a = a \\left(1 - \\frac{n - 1}{n}\\right) = \\frac{a}{n}$."
)

add_q(
    "Experimental Skills", "Vernier calipers",
    "While measuring the diameter of a sphere, main scale reading is $3.2\\text{ cm}$ and 4th vernier division coincides with a main scale mark. If $LC = 0.01\\text{ cm}$ and zero error is $-0.03\\text{ cm}$, what is the true diameter?",
    [
        "$3.27\\text{ cm}$",
        "$3.21\\text{ cm}$",
        "$3.24\\text{ cm}$",
        "$3.17\\text{ cm}$"
    ],
    0,
    "Observed reading $= MSR + (VSR \\times LC) = 3.2\\text{ cm} + (4 \\times 0.01\\text{ cm}) = 3.24\\text{ cm}$. True diameter $= \\text{Observed reading} - \\text{Zero error} = 3.24\\text{ cm} - (-0.03\\text{ cm}) = 3.24 + 0.03 = 3.27\\text{ cm}$."
)

add_q(
    "Experimental Skills", "Vernier calipers",
    "The internal jaws of a Vernier caliper are used specifically for measuring:",
    [
        "Internal diameters of hollow cylinders and pipes",
        "External diameters of spheres",
        "Depth of narrow holes",
        "Mass of small specimens"
    ],
    0,
    "A standard Vernier caliper features: (1) Lower external jaws for outside dimensions/thickness; (2) Upper internal jaws for internal diameters of tubes/holes; (3) A slender sliding tail depth probe for measuring cavity depths."
)

# Subtopic 2: Screw gauge
add_q(
    "Experimental Skills", "Screw gauge",
    "A screw gauge has a pitch of $0.5\\text{ mm}$ and its circular scale has 50 divisions. What is its least count?",
    [
        "$0.01\\text{ mm}$",
        "$0.001\\text{ mm}$",
        "$0.05\\text{ mm}$",
        "$0.02\\text{ mm}$"
    ],
    0,
    "Least count of a screw gauge is defined as $LC = \\frac{\\text{Pitch}}{\\text{Total circular scale divisions}} = \\frac{0.5\\text{ mm}}{50} = 0.01\\text{ mm} = 10\\,\\mu\\text{m}$."
)

add_q(
    "Experimental Skills", "Screw gauge",
    "Backlash error in a micrometer screw gauge is caused by:",
    [
        "Mechanical wear and tear or play between the screw threads and the internal nut",
        "Thermal expansion of the metal frame",
        "Non-uniform graduation on the thimble",
        "Incorrect zero alignment"
    ],
    0,
    "Backlash error arises due to loose fitting or worn threads between the screw and nut. When the direction of rotation is reversed, the screw rotates through a small angle without translating forward. It is eliminated by turning the screw in one continuous direction during measurement."
)

add_q(
    "Experimental Skills", "Screw gauge",
    "When the studs of a screw gauge are in contact, the zero mark of the circular scale lies 3 divisions below the reference line of the main sleeve. If $LC = 0.001\\text{ cm}$, the zero error is:",
    [
        "$+0.003\\text{ cm}$",
        "$-0.003\\text{ cm}$",
        "$+0.030\\text{ cm}$",
        "$-0.030\\text{ cm}$"
    ],
    0,
    "When the zero mark of the circular scale has already rotated past (lies below) the reference line, the screw has closed further than true zero, indicating a positive zero error: $\\text{Zero error} = + (3 \\times 0.001\\text{ cm}) = +0.003\\text{ cm}$."
)

add_q(
    "Experimental Skills", "Screw gauge",
    "The ratchet head mechanism at the end of a micrometer screw gauge is designed to:",
    [
        "Ensure uniform contact pressure between the spindle and anvil and prevent overtightening",
        "Lock the spindle in place during reading",
        "Increase the magnification of measurement",
        "Calibrate the zero error"
    ],
    0,
    "The spring-loaded ratchet slips with a distinctive clicking sound once a preset standardized contact pressure is achieved, ensuring reproducible clamping force and preventing distortion of the specimen or stripping of the precision threads."
)

add_q(
    "Experimental Skills", "Screw gauge",
    "The pitch of a screw gauge is $1\\text{ mm}$ and there are 100 divisions on the circular scale. While measuring the thickness of a glass plate, the main scale reads $2\\text{ mm}$ and circular scale reads 45. What is the measured thickness?",
    [
        "$2.45\\text{ mm}$",
        "$2.045\\text{ mm}$",
        "$2.90\\text{ mm}$",
        "$2.55\\text{ mm}$"
    ],
    0,
    "$LC = \\frac{1\\text{ mm}}{100} = 0.01\\text{ mm}$. Thickness $= MSR + (CSR \\times LC) = 2\\text{ mm} + (45 \\times 0.01\\text{ mm}) = 2 + 0.45 = 2.45\\text{ mm}$."
)

# Subtopic 3: Simple pendulum
add_q(
    "Experimental Skills", "Simple pendulum",
    "In a simple pendulum experiment to determine acceleration due to gravity $g$, length $L = 100.0\\text{ cm}$ is measured with accuracy $\\Delta L = 0.1\\text{ cm}$, and time for 20 oscillations is measured as $t = 40.0\\text{ s}$ using a stopwatch of resolution $0.1\\text{ s}$. What is the percentage error in $g$?",
    [
        "$0.6\\%$",
        "$0.3\\%$",
        "$1.0\\%$",
        "$0.8\\%$"
    ],
    0,
    "From $T = 2\\pi \\sqrt{L/g} \\implies g = \\frac{4\\pi^2 L}{T^2} = \\frac{4\\pi^2 L}{(t/n)^2} = \\frac{4\\pi^2 n^2 L}{t^2}$. The relative error is $\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2 \\frac{\\Delta t}{t} = \\frac{0.1}{100.0} + 2 \\left(\\frac{0.1}{40.0}\\right) = 0.001 + 2(0.0025) = 0.001 + 0.005 = 0.006 = 0.6\\%$."
)

add_q(
    "Experimental Skills", "Simple pendulum",
    "The graph plotted between the length $L$ of a simple pendulum on the $x$-axis and the square of its time period $T^2$ on the $y$-axis is:",
    [
        "A straight line passing through the origin with slope $\\frac{4\\pi^2}{g}$",
        "A parabola opening upward",
        "A hyperbola",
        "An exponential curve"
    ],
    0,
    "From $T^2 = \\left(\\frac{4\\pi^2}{g}\\right) L$: comparing with $y = m x$ gives a straight line passing through the origin $(0,0)$ whose slope is $m = \\frac{4\\pi^2}{g}$, allowing experimental determination of $g = \\frac{4\\pi^2}{\\text{slope}}$."
)

add_q(
    "Experimental Skills", "Simple pendulum",
    "In the simple pendulum formula $T = 2\\pi \\sqrt{L/g}$, what is the exact operational definition of the effective length $L$?",
    [
        "Distance from the point of suspension to the center of gravity of the bob ($L = l_{string} + r_{bob}$)",
        "Length of the thread only",
        "Distance from point of suspension to the bottom tip of the bob",
        "Diameter of the bob"
    ],
    0,
    "The effective pendulum length $L$ is the distance from the point of suspension to the center of gravity of the bob. It is experimentally obtained by measuring the length of the suspension thread $l$ and adding the radius of the spherical bob: $L = l + r$."
)

add_q(
    "Experimental Skills", "Simple pendulum",
    "Why must the angular amplitude of oscillation of a simple pendulum be kept very small ($\\theta < 4-5^\\circ$) in laboratory measurements?",
    [
        "So that $\\sin\\theta \\approx \\theta$ holds accurately, ensuring strictly simple harmonic motion",
        "To prevent air drag completely",
        "To avoid breaking the suspension thread",
        "To keep the string completely rigid"
    ],
    0,
    "The restoring torque is $\\tau = -m g L \\sin\\theta$. Pure SHM requires linear restoring force ($\tau \\propto -\\theta$). Using Taylor expansion $\\sin\\theta = \\theta - \\frac{\\theta^3}{6} + \\dots$, the approximation $\\sin\\theta \\approx \\theta$ holds to within $0.1\\%$ error only for small angles $\\theta \\le 4-5^\\circ$."
)

add_q(
    "Experimental Skills", "Simple pendulum",
    "Why is measuring the time for 50 or 100 oscillations preferred over measuring a single oscillation with a stopwatch?",
    [
        "It drastically reduces the relative percentage error due to human reaction time",
        "It increases the frequency of oscillation",
        "It eliminates damping completely",
        "It changes the time period"
    ],
    0,
    "Human reaction time error in starting and stopping a manual stopwatch is approximately $\\pm 0.2\\text{ s}$. If measuring one oscillation ($T \\approx 2\\text{ s}$), relative error is $\\frac{0.2}{2} = 10\\%$. Over $50$ oscillations ($t \\approx 100\\text{ s}$), relative error drops to $\\frac{0.2}{100} = 0.2\\%$."
)

# Subtopic 4: Meter bridge
add_q(
    "Experimental Skills", "Meter bridge",
    "In a meter bridge experiment, why should the jockey be tapped gently along the wire rather than slid continuously?",
    [
        "Sliding scrapes the wire, causing non-uniform cross-sectional area and localized heating",
        "Tapping increases the sensitivity of the galvanometer",
        "Sliding damages the battery permanently",
        "Tapping creates thermoelectric currents"
    ],
    0,
    "Sliding the knife-edge jockey scrapes metal from the wire, introducing localized variations in cross-sectional area $A$. Since resistance per unit length is $\\frac{\\rho}{A}$, this destroys wire uniformity and invalidates the linear balance relation $\\frac{R}{S} = \\frac{l}{100 - l}$."
)

add_q(
    "Experimental Skills", "Meter bridge",
    "Why are the thick connecting strips on a meter bridge board made of copper?",
    [
        "Copper has exceptionally low electrical resistivity, minimizing extraneous resistance at the terminal gaps",
        "Copper is a magnetic material",
        "Copper prevents oxidation completely",
        "Copper acts as a dielectric insulator"
    ],
    0,
    "The bridge theory assumes that resistance is concentrated entirely in the four arms ($P, Q, R, S$). Thick copper strips have large cross-sectional area and very low resistivity, ensuring near-zero strip resistance and minimizing end errors."
)

add_q(
    "Experimental Skills", "Meter bridge",
    "To eliminate contact resistance and end errors in high-precision laboratory resistance measurements, one should use:",
    [
        "Carey Foster's bridge",
        "Simple Wheatstone bridge",
        "Potentiometer only",
        "High-voltage voltmeter"
    ],
    0,
    "Carey Foster's bridge incorporates equal ratio arms and determines unknown resistances by interchanging the positions of known and unknown resistors, completely canceling out the end resistance contributions $(\\alpha, \\beta)$ of the meter wire."
)

add_q(
    "Experimental Skills", "Meter bridge",
    "A high resistance connected in series with a galvanometer during initial adjustments of a meter bridge serves to:",
    [
        "Protect the galvanometer from excessive currents and mechanical damage during coarse searching",
        "Increase the sensitivity at the balance point",
        "Stabilize the battery voltage",
        "Eliminate thermoelectric EMF"
    ],
    0,
    "When the bridge is far from balance, large off-balance currents can burn the sensitive galvanometer coil or bend its needle. A protective high resistor is placed in series and shunted/short-circuited only when approaching the fine null point."
)

add_q(
    "Experimental Skills", "Meter bridge",
    "The material used for the meter bridge wire is typically Manganin or Constantan because:",
    [
        "They possess high resistivity and an extremely low temperature coefficient of resistance",
        "They are superconductors at room temperature",
        "They have zero resistivity",
        "They are transparent to electric fields"
    ],
    0,
    "Manganin (Cu-Mn-Ni) and Constantan (Cu-Ni) alloys have substantial resistivity (giving measurable resistance $\\sim 2-5\\,\\Omega$ for $1\\text{ m}$) and nearly zero temperature coefficient of resistance ($\\alpha \\approx 10^{-5}\\text{ K}^{-1}$), ensuring resistance remains constant despite Joule heating during measurements."
)

# Subtopic 5: Focal length of concave mirror and convex lens
add_q(
    "Experimental Skills", "Focal length of concave mirror and convex lens",
    "In the $u-v$ method using an optical bench, the graph of $\\frac{1}{v}$ versus $\\frac{1}{u}$ for a convex lens is:",
    [
        "A straight line with negative slope ($-1$) and equal intercepts on both axes equal to $\\frac{1}{f}$",
        "A parabola opening to the right",
        "A rectangular hyperbola",
        "A circle centered at origin"
    ],
    0,
    "The lens formula is $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$. For real objects, $u$ is negative, so $\\frac{1}{v} = -\\frac{1}{|u|} + \\frac{1}{f}$. Plotting $y = 1/v$ against $x = 1/|u|$ yields a straight line with slope $-1$ and both $x$- and $y$-intercepts equal to $\\frac{1}{f}$."
)

add_q(
    "Experimental Skills", "Focal length of concave mirror and convex lens",
    "What is parallax in an optical bench experiment, and how is it removed?",
    [
        "Apparent relative shift between two objects when the observer's eye is moved sideways; removed when the tips of the object needle and inverted image needle coincide without relative shift",
        "Optical aberration caused by thick lenses",
        "Chromatic dispersion of white light",
        "Refraction error through air"
    ],
    0,
    "Parallax is the apparent relative displacement between two objects at different depths when the viewing position is shifted laterally. No-parallax occurs when the tip of the image needle coincides exactly in 3D space with the real inverted image formed by the lens, moving together as the observer's eye moves."
)

add_q(
    "Experimental Skills", "Focal length of concave mirror and convex lens",
    "Index error (or bench error) in an optical bench measurement occurs because:",
    [
        "The physical distance between the needle tip and optical center does not match the difference between their index mark positions on the bench scale",
        "The focal length varies with distance",
        "The light rays bend gravitationally",
        "The lens holder expands thermally"
    ],
    0,
    "Index error arises because the index mark on the upright base may not align with the actual vertical axis passing through the optical center of the lens or needle tip. It is measured and corrected by placing a knitting needle of known physical length between the lens surface and needle tip."
)

add_q(
    "Experimental Skills", "Focal length of concave mirror and convex lens",
    "For a concave mirror, when a graph is plotted between object distance $u$ and image distance $v$, the line $u = v$ intersects the curve at a point whose coordinates are:",
    [
        "$(2f, 2f)$",
        "$(f, f)$",
        "$(4f, 4f)$",
        "$(f/2, f/2)$"
    ],
    0,
    "When an object is placed at the center of curvature ($u = 2f$), the real inverted image is also formed at the center of curvature ($v = 2f$). The intersection of the rectangular hyperbola $u-v$ curve with the line $u = v$ corresponds to $(2f, 2f)$, from which $f = u/2$."
)

add_q(
    "Experimental Skills", "Focal length of concave mirror and convex lens",
    "The focal length of a concave lens cannot be determined directly by forming a real image on a screen because a concave lens produces only virtual images for real objects. How is its focal length measured experimentally?",
    [
        "By combining it in contact with a more powerful convex lens so that the combination produces a real image",
        "By using a plane mirror only",
        "By measuring the thickness of the lens center",
        "By submerging it in oil"
    ],
    0,
    "An auxiliary convex lens of shorter focal length $f_1$ ($P_1 > |P_2|$) is combined with the concave lens. The convergent combination forms a sharp real image on the screen. The focal length of the combination $F$ is measured, and the unknown focal length is calculated from $\\frac{1}{f_2} = \\frac{1}{F} - \\frac{1}{f_1}$."
)

# Subtopic 6: Resistance of wire using Ohm's law
add_q(
    "Experimental Skills", "Resistance of wire using Ohm's law",
    "In an experiment to verify Ohm's law, an ammeter and a voltmeter are connected in the circuit. Ideal ammeters and ideal voltmeters should have:",
    [
        "Zero internal resistance for ammeter, infinite internal resistance for voltmeter",
        "Infinite resistance for ammeter, zero resistance for voltmeter",
        "Equal finite resistances",
        "Both zero internal resistances"
    ],
    0,
    "An ammeter is connected in series; to avoid altering the circuit current, its internal resistance must be zero ($R_A = 0$). A voltmeter is connected in parallel; to draw zero current from the circuit, its internal resistance must be infinite ($R_V = \\infty$)."
)

add_q(
    "Experimental Skills", "Resistance of wire using Ohm's law",
    "When plotting the $V-I$ graph for an ohmic metallic conductor, the slope of the $V$ versus $I$ straight line gives:",
    [
        "Electrical resistance $R$",
        "Electrical conductance $G$",
        "Resistivity $\\rho$",
        "Power dissipated $P$"
    ],
    0,
    "By Ohm's law $V = I R$, plotting potential difference $V$ on the vertical $y$-axis against current $I$ on the horizontal $x$-axis yields a straight line through the origin whose slope is $m = \\frac{\\Delta V}{\\Delta I} = R$."
)

add_q(
    "Experimental Skills", "Resistance of wire using Ohm's law",
    "If the current through a resistance wire is allowed to flow continuously for a long time during an Ohm's law experiment, the $V-I$ graph will:",
    [
        "Curve upward away from the current axis due to Joule heating increasing the wire's resistance",
        "Curve downward toward the current axis",
        "Remain perfectly linear",
        "Drop to zero abruptly"
    ],
    0,
    "Continuous current flow produces Joule heating ($H = I^2 R t$). For metals, resistance increases with temperature (positive $\\alpha$). As current $I$ increases, temperature rises, increasing $R$, so voltage $V = I R$ increases faster than linearly, causing the $V-I$ curve to bend upward."
)

add_q(
    "Experimental Skills", "Resistance of wire using Ohm's law",
    "In measuring the resistance of a wire of length $L$ and diameter $D$, the formula for resistivity is $\\rho = \\frac{\\pi D^2 R}{4 L}$. The maximum percentage error in resistivity $\\rho$ is:",
    [
        "$\\frac{\\Delta \\rho}{\\rho} = 2\\frac{\\Delta D}{D} + \\frac{\\Delta R}{R} + \\frac{\\Delta L}{L}$",
        "$\\frac{\\Delta \\rho}{\\rho} = \\frac{\\Delta D}{D} + \\frac{\\Delta R}{R} + \\frac{\\Delta L}{L}$",
        "$\\frac{\\Delta \\rho}{\\rho} = 2\\frac{\\Delta D}{D} + 2\\frac{\\Delta R}{R} + \\frac{\\Delta L}{L}$",
        "$\\frac{\\Delta \\rho}{\\rho} = \\frac{\\Delta D^2}{D^2} + \\frac{\\Delta R}{R}$"
    ],
    0,
    "Differentiating $\\rho = \\frac{\\pi D^2 R}{4 L}$ logarithmically: $\\ln\\rho = \\ln(\\pi/4) + 2\\ln D + \\ln R - \\ln L$. The maximum fractional error is $\\frac{\\Delta \\rho}{\\rho} = 2\\frac{\\Delta D}{D} + \\frac{\\Delta R}{R} + \\frac{\\Delta L}{L}$. Diameter contributes with twice the weight because it appears squared."
)

add_q(
    "Experimental Skills", "Resistance of wire using Ohm's law",
    "Why is a rheostat connected in series in the Ohm's law verification circuit?",
    [
        "To systematically vary the circuit current and potential difference across the test wire",
        "To measure the power consumption",
        "To rectify the DC current",
        "To eliminate temperature variations"
    ],
    0,
    "A rheostat functions as a variable potential divider or current limiter, allowing the experimenter to smoothly change the circuit current and obtain a series of independent $(V, I)$ data points across the test resistor."
)

with open("scripts/physics_top100/phys_b4_p2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Physics Batch 4 Part 2.")
