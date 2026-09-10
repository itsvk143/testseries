import json

questions = []

def add_q(subtopic, question, options, correct_idx, explanation, difficulty="Medium"):
    questions.append({
        "question": question,
        "options": options,
        "correctAnswer": correct_idx,
        "explanation": explanation,
        "difficulty": difficulty,
        "subtopic": subtopic
    })

# ==============================================================================
# SUBTOPIC 7: Nuclear fission and fusion (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Nuclear fission and fusion",
    r"The average energy released in the fission of a single $^{235}_{92}\text{U}$ nucleus by a thermal neutron is approximately:",
    [
        r"$200\text{ MeV}$",
        r"$20\text{ MeV}$",
        r"$1000\text{ MeV}$",
        r"$2\text{ MeV}$"
    ],
    0,
    r"The fission of a $^{235}\text{U}$ nucleus releases approximately $200\text{ MeV}$ of energy, predominantly in the form of kinetic energy of the fission fragments ($\approx 168\text{ MeV}$).",
    "Easy"
)

# Q2
add_q(
    "Nuclear fission and fusion",
    r"The average number of prompt neutrons released per fission of a $^{235}_{92}\text{U}$ nucleus is approximately:",
    [
        r"$2.5$",
        r"$1.0$",
        r"$4.0$",
        r"$6.0$"
    ],
    0,
    r"On average, about $2.47 \approx 2.5$ neutrons are released per fission of $^{235}\text{U}$, making a self-sustaining nuclear chain reaction possible.",
    "Easy"
)

# Q3
add_q(
    "Nuclear fission and fusion",
    r"In a nuclear reactor, the reproduction factor (multiplication factor) $k$ is defined as the ratio of:",
    [
        r"The number of neutrons in a generation to the number of neutrons in the preceding generation",
        r"The energy produced to the energy supplied",
        r"The number of fission fragments to the number of incident neutrons",
        r"The number of protons to the number of neutrons"
    ],
    0,
    r"The multiplication factor $k = \frac{\text{neutrons in current generation}}{\text{neutrons in preceding generation}}$. The reactor is subcritical for $k < 1$, critical for $k = 1$, and supercritical for $k > 1$.",
    "Easy"
)

# Q4
add_q(
    "Nuclear fission and fusion",
    r"For a nuclear reactor to operate at a steady power output, the value of the multiplication factor $k$ must be:",
    [
        r"$k = 1.000$ (Critical state)",
        r"$k > 1$ (Supercritical state)",
        r"$k < 1$ (Subcritical state)",
        r"$k = 0$"
    ],
    0,
    r"A steady, constant-power chain reaction requires $k = 1$, so the neutron population remains strictly constant over successive generations.",
    "Easy"
)

# Q5
add_q(
    "Nuclear fission and fusion",
    r"The primary purpose of a moderator in a nuclear fission reactor is to:",
    [
        r"Slow down fast neutrons ($\sim 2\text{ MeV}$) to thermal energies ($\approx 0.025\text{ eV}$) through elastic collisions",
        r"Absorb excess neutrons to halt the reaction",
        r"Shield against lethal $\gamma$-radiation",
        r"Cool the reactor core directly"
    ],
    0,
    r"Fission neutrons are born with high kinetic energy ($\sim 2\text{ MeV}$). Because the fission cross section of $^{235}\text{U}$ is hundreds of times higher for thermal neutrons ($\approx 0.025\text{ eV}$), a moderator slows them down via elastic collisions with light nuclei.",
    "Easy"
)

# Q6
add_q(
    "Nuclear fission and fusion",
    r"Which of the following substances is commonly used as a moderator in a nuclear reactor?",
    [
        r"Heavy water ($\text{D}_2\text{O}$) and graphite",
        r"Cadmium and boron",
        r"Liquid sodium and lead",
        r"Uranium-238"
    ],
    0,
    r"Good moderators must have low mass number (to maximize energy transfer per collision) and very low neutron absorption cross section. Heavy water ($\text{D}_2\text{O}$) and high-purity graphite are standard moderators.",
    "Easy"
)

# Q7
add_q(
    "Nuclear fission and fusion",
    r"Control rods in a nuclear reactor are made of materials that:",
    [
        r"Have very high neutron absorption cross-sections, such as Cadmium ($\text{Cd}$) or Boron ($\text{B}$)",
        r"Slow down neutrons without absorbing them",
        r"Emit extra neutrons to accelerate the chain reaction",
        r"Are fissile under thermal neutrons"
    ],
    0,
    r"Control rods regulate the multiplication factor $k$ by absorbing excess neutrons without undergoing fission. Materials like Cadmium ($\text{Cd}$) and Boron ($\text{B}$) have very high capture cross sections for thermal neutrons.",
    "Easy"
)

# Q8
add_q(
    "Nuclear fission and fusion",
    r"A thermal neutron is a neutron that:",
    [
        r"Is in thermal equilibrium with its surroundings, having kinetic energy of $\approx 0.025\text{ eV}$ at room temperature",
        r"Has kinetic energy greater than $1\text{ MeV}$",
        r"Carries a positive electric charge",
        r"Has zero velocity"
    ],
    0,
    r"A thermal neutron has slowed down until its kinetic energy equals the thermal kinetic energy $E = \frac{3}{2}k_B T \approx 0.025\text{ eV}$ at $T = 300\text{ K}$, with a speed of $\approx 2200\text{ m/s}$.",
    "Easy"
)

# Q9
add_q(
    "Nuclear fission and fusion",
    r"Which of the following isotopes is fertile (non-fissile by thermal neutrons but converted into fissile material by neutron capture)?",
    [
        r"$^{238}_{92}\text{U}$ and $^{232}_{90}\text{Th}$",
        r"$^{235}_{92}\text{U}$ and $^{239}_{94}\text{Pu}$",
        r"$^{233}_{92}\text{U}$ and $^{235}_{92}\text{U}$",
        r"$^4_2\text{He}$"
    ],
    0,
    r"$^{238}\text{U}$ and $^{232}\text{Th}$ cannot sustain a chain reaction with thermal neutrons, but upon capturing a neutron, they transmute into fissile fuels ($^{238}\text{U} \to ^{239}\text{Pu}$ and $^{232}\text{Th} \to ^{233}\text{U}$). Hence they are fertile materials.",
    "Medium"
)

# Q10
add_q(
    "Nuclear fission and fusion",
    r"The fast breeder reactor operates using:",
    [
        r"Fast (unmoderated) neutrons and liquid sodium coolant to breed more $^{239}\text{Pu}$ from $^{238}\text{U}$ than it consumes",
        r"Thermal neutrons with heavy water moderator",
        r"Only coal as fuel",
        r"Subcritical fusion reactions"
    ],
    0,
    r"Fast breeder reactors have no moderator; fast neutrons are captured by a $^{238}\text{U}$ blanket to breed fissile $^{239}\text{Pu}$ with a breeding ratio $>1$. Liquid sodium is used as the coolant due to its excellent thermal conductivity and low neutron moderation.",
    "Medium"
)

# Q11
add_q(
    "Nuclear fission and fusion",
    r"Why is the control of nuclear fission reactors practically possible despite the prompt neutron generation time being only $\sim 10^{-4}\text{ s}$?",
    [
        r"A small fraction ($\sim 0.65\%$) of neutrons are delayed neutrons emitted seconds to minutes after fission by daughter precursors",
        r"Nuclear reactions can be instantly stopped by electric fields",
        r"Moderators absorb all neutrons when heated",
        r"The speed of light slows down inside the reactor"
    ],
    0,
    r"About $0.65\%$ of fission neutrons are 'delayed neutrons' emitted following the $\beta$-decay of certain fission fragments (precursors like $^{87}\text{Br}$). This extends the effective neutron generation time to several seconds, providing ample time for mechanical control rods to adjust.",
    "Hard"
)

# Q12
add_q(
    "Nuclear fission and fusion",
    r"The energy released per unit mass in nuclear fusion is significantly greater than that in nuclear fission because:",
    [
        r"The energy released per nucleon in fusion ($\sim 6.7\text{ MeV/nucleon}$) is much larger than in fission ($\sim 0.85\text{ MeV/nucleon}$)",
        r"Fusion destroys all nucleons completely",
        r"Fission releases energy only as neutrinos",
        r"Light nuclei have greater mass than heavy nuclei"
    ],
    0,
    r"In fusion ($4p \to ^4\text{He}$), $\approx 26.7\text{ MeV}$ is released across 4 nucleons ($\approx 6.7\text{ MeV/nucleon}$). In fission ($^{235}\text{U}$), $\approx 200\text{ MeV}$ is released across 236 nucleons ($\approx 0.85\text{ MeV/nucleon}$). Fusion yields nearly $8$ times more energy per gram of fuel.",
    "Medium"
)

# Q13
add_q(
    "Nuclear fission and fusion",
    r"The primary nuclear reaction sequence powering the Sun and low-mass main-sequence stars is the:",
    [
        r"Proton-proton ($p-p$) chain cycle",
        r"Carbon-Nitrogen-Oxygen (CNO) cycle",
        r"Uranium fission chain",
        r"Triple-alpha process only"
    ],
    0,
    r"In the Sun ($T_{\text{core}} \approx 1.5 \times 10^7\text{ K}$), the proton-proton chain dominates, converting four hydrogen protons into one helium-4 nucleus with a net release of $26.7\text{ MeV}$.",
    "Easy"
)

# Q14
add_q(
    "Nuclear fission and fusion",
    r"The net result of the proton-proton cycle in the Sun is represented by:",
    [
        r"$4 ^1_1\text{H} + 2 e^- \to ^4_2\text{He} + 2\nu_e + 6\gamma + 26.7\text{ MeV}$",
        r"$2 ^1_1\text{H} \to ^4_2\text{He} + 2e^+ + 17.6\text{ MeV}$",
        r"$4 ^1_1\text{H} \to ^4_2\text{He} + 4\beta^- + 200\text{ MeV}$",
        r"$^2_1\text{H} + ^3_1\text{H} \to ^4_2\text{He} + 26.7\text{ MeV}$"
    ],
    0,
    r"The complete $p-p$ chain fuses four protons into a helium nucleus: $$4 ^1_1\text{H} + 2 e^- \to ^4_2\text{He} + 2\nu_e + 6\gamma + 26.7\text{ MeV}$$ The solar neutrino spectrum observed on Earth confirms this reaction.",
    "Medium"
)

# Q15
add_q(
    "Nuclear fission and fusion",
    r"Thermonuclear fusion reactions require extremely high temperatures of the order of $10^7\text{ to }10^8\text{ K}$ because:",
    [
        r"Nuclei require high thermal kinetic energy to overcome the electrostatic Coulomb repulsion barrier between positively charged nuclei",
        r"High temperature is needed to break nucleons into quarks",
        r"Electrons must be absorbed into protons",
        r"Nuclear forces become attractive only above $10^7\text{ K}$"
    ],
    0,
    r"Protons must approach to within nuclear distance ($\sim 1\text{ fm}$) for the attractive strong force to take over. The Coulomb repulsion barrier is $V_C \approx 400\text{ keV}$, requiring thermal velocities corresponding to temperatures of $10^7 - 10^8\text{ K}$ (assisted by quantum mechanical tunneling).",
    "Easy"
)

# Q16
add_q(
    "Nuclear fission and fusion",
    r"The fusion reaction between deuterium and tritium ($D-T$ fusion) is: $$^2_1\text{H} + ^3_1\text{H} \to ^4_2\text{He} + ^1_0\text{n} + Q$$ The value of $Q$ for this reaction is approximately:",
    [
        r"$17.6\text{ MeV}$",
        r"$200\text{ MeV}$",
        r"$3.27\text{ MeV}$",
        r"$4.03\text{ MeV}$"
    ],
    0,
    r"The D-T reaction has $Q = 17.6\text{ MeV}$. Because it has the lowest Coulomb barrier and highest cross section at accessible temperatures ($\sim 10\text{ keV}$), it is the primary reaction pursued in fusion reactors like ITER.",
    "Easy"
)

# Q17
add_q(
    "Nuclear fission and fusion",
    r"The Lawson criterion for achieving net energy gain in a magnetic confinement fusion reactor states that the product of plasma density $n$ and energy confinement time $\tau_E$ must satisfy:",
    [
        r"$n \tau_E \ge 10^{14}\text{ s}\cdot\text{cm}^{-3}$ (for D-T fusion)",
        r"$n \tau_E \le 10^{10}\text{ s}\cdot\text{cm}^{-3}$",
        r"$n / \tau_E \ge 10^{14}\text{ cm}^{-3}/\text{s}$",
        r"$n \tau_E \ge 10^8\text{ s}\cdot\text{cm}^{-3}$"
    ],
    0,
    r"The Lawson criterion sets the threshold where thermonuclear energy production exceeds conduction and radiation losses: for D-T plasma at $T \approx 10\text{ keV}$, the triple product requires $n \tau_E \ge 10^{14}\text{ s}\cdot\text{cm}^{-3}$.",
    "Hard"
)

# Q18
add_q(
    "Nuclear fission and fusion",
    r"A nuclear reactor produces electrical power of $200\text{ MW}$ with an efficiency of $20\%$. Assuming $200\text{ MeV}$ is released per fission of $^{235}\text{U}$, how many fissions occur per second?",
    [
        r"$3.125 \times 10^{19}\text{ fissions/s}$",
        r"$6.25 \times 10^{18}\text{ fissions/s}$",
        r"$1.56 \times 10^{20}\text{ fissions/s}$",
        r"$3.125 \times 10^{18}\text{ fissions/s}$"
    ],
    0,
    r"Total thermal power: $P_{\text{thermal}} = \frac{P_{\text{electric}}}{\eta} = \frac{200\text{ MW}}{0.20} = 1000\text{ MW} = 10^9\text{ J/s}$.\nEnergy per fission: $E_f = 200 \times 1.6 \times 10^{-13}\text{ J} = 3.2 \times 10^{-11}\text{ J}$.\nFission rate: $\frac{dN}{dt} = \frac{10^9\text{ J/s}}{3.2 \times 10^{-11}\text{ J/fission}} = 3.125 \times 10^{19}\text{ fissions/s}$.",
    "Medium"
)

# Q19
add_q(
    "Nuclear fission and fusion",
    r"For the reactor generating $1000\text{ MW}$ thermal power ($3.125 \times 10^{19}\text{ fissions/s}$), the mass of $^{235}\text{U}$ consumed per day is approximately:",
    [
        r"$1.05\text{ kg}$",
        r"$10.5\text{ kg}$",
        r"$0.105\text{ kg}$",
        r"$25.2\text{ kg}$"
    ],
    0,
    r"Fissions per day: $N_{\text{day}} = (3.125 \times 10^{19}) \times (86400) \approx 2.70 \times 10^{24}\text{ fissions}$.\nMass consumed: $m = \frac{2.70 \times 10^{24}}{6.022 \times 10^{23}}\text{ mol} \times 235\text{ g/mol} = 4.48 \times 235\text{ g} \approx 1053\text{ g} \approx 1.05\text{ kg/day}$.",
    "Medium"
)

# Q20
add_q(
    "Nuclear fission and fusion",
    r"The Sun radiates energy at a rate of approximately $3.8 \times 10^{26}\text{ W}$. The rate at which the mass of the Sun decreases due to fusion is approximately:",
    [
        r"$4.2 \times 10^9\text{ kg/s}$ (about $4.2\text{ million tons per second}$)",
        r"$1.3 \times 10^{18}\text{ kg/s}$",
        r"$4.2 \times 10^6\text{ kg/s}$",
        r"$3.8 \times 10^{10}\text{ kg/s}$"
    ],
    0,
    r"$$\frac{dm}{dt} = \frac{P}{c^2} = \frac{3.8 \times 10^{26}\text{ J/s}}{(3 \times 10^8\text{ m/s})^2} = \frac{3.8 \times 10^{26}}{9 \times 10^{16}} \approx 4.22 \times 10^9\text{ kg/s}$$",
    "Easy"
)

# Q21
add_q(
    "Nuclear fission and fusion",
    r"Which device confines high-temperature plasma in a doughnut-shaped (toroidal) magnetic field for controlled nuclear fusion?",
    [
        r"Tokamak",
        r"Cyclotron",
        r"Synchrotron",
        r"Betatron"
    ],
    0,
    r"A Tokamak uses helical magnetic fields (combining toroidal and poloidal components) to confine high-temperature plasma in a torus without letting it touch the reactor walls.",
    "Easy"
)

# Q22
add_q(
    "Nuclear fission and fusion",
    r"In the fission reaction $^{235}_{92}\text{U} + ^1_0\text{n} \to ^{144}_{56}\text{Ba} + ^{89}_{36}\text{Kr} + x ^1_0\text{n}$, the value of $x$ is:",
    [
        r"$3$",
        r"$2$",
        r"$1$",
        r"$4$"
    ],
    0,
    r"Mass number balance: $235 + 1 = 144 + 89 + x \implies 236 = 233 + x \implies x = 3$ neutrons.",
    "Easy"
)

# Q23
add_q(
    "Nuclear fission and fusion",
    r"In the fission reaction $^{235}_{92}\text{U} + ^1_0\text{n} \to ^{98}_{42}\text{Mo} + ^{136}_{54}\text{Xe} + x ^1_0\text{n} + 4 e^-$, the number of emitted neutrons $x$ is:",
    [
        r"$2$",
        r"$3$",
        r"$1$",
        r"$4$"
    ],
    0,
    r"Mass numbers: $235 + 1 = 98 + 136 + x \implies 236 = 234 + x \implies x = 2$ neutrons.",
    "Easy"
)

# Q24
add_q(
    "Nuclear fission and fusion",
    r"The mass equivalent of the energy released when $1\text{ kg}$ of $^{235}\text{U}$ undergoes complete fission is approximately:",
    [
        r"$0.9\text{ g}$",
        r"$100\text{ g}$",
        r"$10\text{ g}$",
        r"$0.01\text{ g}$"
    ],
    0,
    r"Fractional mass lost in fission is $\frac{\Delta m}{m} \approx \frac{200\text{ MeV}}{235 \times 931.5\text{ MeV}} \approx \frac{200}{218900} \approx 0.00091 = 0.091\%$. For $1\text{ kg}$ of $^{235}\text{U}$, $\Delta m \approx 0.00091 \times 1000\text{ g} \approx 0.91\text{ g}$.",
    "Medium"
)

# Q25
add_q(
    "Nuclear fission and fusion",
    r"A hydrogen bomb (thermonuclear bomb) is based on the principle of:",
    [
        r"Uncontrolled nuclear fusion initiated by a fission bomb trigger",
        r"Controlled nuclear fission",
        r"Uncontrolled nuclear fission alone",
        r"Spontaneous radioactive $\alpha$-decay"
    ],
    0,
    r"A hydrogen bomb uses a primary fission atomic bomb to produce the extreme temperatures ($\sim 10^8\text{ K}$) and pressures required to trigger uncontrolled thermonuclear fusion of deuterium and tritium.",
    "Easy"
)

# Q26
add_q(
    "Nuclear fission and fusion",
    r"An atomic bomb (Hiroshima-type) is based on the principle of:",
    [
        r"Uncontrolled nuclear fission chain reaction in a supercritical mass of fissile material",
        r"Controlled nuclear fusion",
        r"Thermonuclear fusion",
        r"Subcritical radioactive decay"
    ],
    0,
    r"An atomic bomb relies on assembling a supercritical mass ($k > 1$) of fissile material ($^{235}\text{U}$ or $^{239}\text{Pu}$) rapidly, leading to an uncontrolled chain reaction releasing massive energy within microseconds.",
    "Easy"
)

# Q27
add_q(
    "Nuclear fission and fusion",
    r"Why can ordinary water ($H_2O$) NOT be used as a moderator with natural (unenriched) uranium in a nuclear reactor?",
    [
        r"Light hydrogen ($^1\text{H}$) has a relatively high neutron absorption cross-section ($p + n \to d + \gamma$), reducing $k$ below $1$",
        r"Water evaporates immediately at room temperature",
        r"Water accelerates neutrons instead of slowing them down",
        r"Water absorbs $\alpha$-particles and prevents fission"
    ],
    0,
    r"Protons in $H_2O$ absorb thermal neutrons via $^1\text{H}(n, \gamma)^2\text{H}$. In natural uranium (only $0.7\% \text{ }^{235}\text{U}$), this absorption drops $k < 1$. Heavy water ($D_2O$) has deuterium, which has an extremely low neutron absorption cross section, enabling chain reactions with natural uranium.",
    "Hard"
)

# Q28
add_q(
    "Nuclear fission and fusion",
    r"In the nuclear fusion of four protons into a helium nucleus, what is the fractional mass defect $(\Delta m / m_{\text{reactants}})$?",
    [
        r"$\approx 0.7\%$",
        r"$\approx 0.09\%$",
        r"$\approx 5\%$",
        r"$\approx 0.01\%$"
    ],
    0,
    r"Energy released is $26.7\text{ MeV}$. Total reactant mass: $4 \times 938.3\text{ MeV} \approx 3753\text{ MeV}$. Fractional mass loss is $\frac{26.7}{3753} \approx 0.0071 = 0.71\%$.",
    "Medium"
)

# Q29
add_q(
    "Nuclear fission and fusion",
    r"The fusion reaction $^2_1\text{H} + ^2_1\text{H} \to ^3_2\text{He} + ^1_0\text{n}$ has a $Q$-value of $3.27\text{ MeV}$. If two deuterons collide with negligible initial kinetic energy, the kinetic energy of the emitted neutron is approximately:",
    [
        r"$2.45\text{ MeV}$",
        r"$0.82\text{ MeV}$",
        r"$3.27\text{ MeV}$",
        r"$1.64\text{ MeV}$"
    ],
    0,
    r"By momentum conservation: $p_n = p_{\text{He}}$.\n$$K_n = \left(\frac{m_{\text{He}}}{m_n + m_{\text{He}}}\right) Q = \left(\frac{3}{1 + 3}\right) \times 3.27\text{ MeV} = \frac{3}{4} \times 3.27 \approx 2.45\text{ MeV}$$",
    "Medium"
)

# Q30
add_q(
    "Nuclear fission and fusion",
    r"Which of the following is the most significant advantage of nuclear fusion over nuclear fission as an energy source?",
    [
        r"Abundant fuel supply (deuterium in seawater), no greenhouse emissions, and no long-lived radioactive nuclear waste",
        r"Fusion occurs spontaneously at room temperature without input energy",
        r"Fusion does not require any plasma confinement",
        r"Fusion reactors are simpler and cheaper to build than coal power plants"
    ],
    0,
    r"Fusion fuel (deuterium from oceans and tritium bred from lithium) is virtually inexhaustible, produces no high-level long-lived radioactive waste like actinide fission products, and cannot undergo catastrophic runaway meltdowns.",
    "Easy"
)

# Q31
add_q(
    "Nuclear fission and fusion",
    r"The critical size of a nuclear reactor core is the minimum volume such that:",
    [
        r"Neutron production by fission balances neutron leakage through the core surface and absorption",
        r"The core fits inside a cooling tower",
        r"All fuel melts completely",
        r"Zero neutrons are absorbed by control rods"
    ],
    0,
    r"Neutrons are produced throughout the volume ($\propto R^3$) but leak out through the surface ($\propto R^2$). The ratio of surface leakage to volume production decreases as $1/R$. Above the critical size, production exceeds leakage plus absorption, allowing $k \ge 1$.",
    "Medium"
)

# Q32
add_q(
    "Nuclear fission and fusion",
    r"The temperature at the center of the Sun is $T \approx 1.5 \times 10^7\text{ K}$. At this temperature, the average thermal kinetic energy $\frac{3}{2}k_B T$ of a proton is approximately:",
    [
        r"$1.9\text{ keV}$",
        r"$400\text{ keV}$",
        r"$10\text{ eV}$",
        r"$1.2\text{ MeV}$"
    ],
    0,
    r"$$E = \frac{3}{2}k_B T = 1.5 \times (1.38 \times 10^{-23}\text{ J/K}) \times (1.5 \times 10^7\text{ K}) = 3.1 \times 10^{-16}\text{ J} = \frac{3.1 \times 10^{-16}}{1.6 \times 10^{-19}}\text{ eV} \approx 1.94\text{ keV}$$ Even though this is far below the classical Coulomb barrier ($\sim 400\text{ keV}$), quantum tunneling enables fusion.",
    "Hard"
)

# Q33
add_q(
    "Nuclear fission and fusion",
    r"Quantum mechanical tunneling is essential for solar fusion because:",
    [
        r"Protons with kinetic energy of $\sim 2\text{ keV}$ can tunnel through the $\sim 400\text{ keV}$ Coulomb repulsive barrier",
        r"Protons have zero mass inside the Sun",
        r"Electrons shield the nuclear charge completely",
        r"The speed of protons exceeds the speed of light"
    ],
    0,
    r"According to quantum mechanics, wave-particle duality gives protons a finite probability of tunneling through the classically forbidden Coulomb potential barrier even when their thermal energy ($\sim 2\text{ keV}$) is far below the peak ($\sim 400\text{ keV}$).",
    "Medium"
)

# Q34
add_q(
    "Nuclear fission and fusion",
    r"In the fission of $^{235}\text{U}$, the two daughter fragments formed are typically:",
    [
        r"Unequal in mass, with mass numbers clustered around $A \approx 95$ and $A \approx 140$ (asymmetric fission)",
        r"Exactly equal in mass ($A = 118$ each)",
        r"Very light nuclei with $A < 20$",
        r"Always alpha particles"
    ],
    0,
    r"Thermal neutron fission of $^{235}\text{U}$ is asymmetric with high probability, producing a double-humped yield curve peaked near light mass $A \approx 95$ (e.g. Kr, Mo, Sr) and heavy mass $A \approx 140$ (e.g. Ba, Xe, Cs). Symmetric fission into two equal fragments is rare.",
    "Medium"
)

# Q35
add_q(
    "Nuclear fission and fusion",
    r"Why are fission fragments invariably radioactive, undergoing multiple subsequent $\beta^-$-decays?",
    [
        r"Heavy nuclei have an $N/Z$ ratio of $\sim 1.5$, while stable intermediate nuclei require $N/Z \approx 1.2 - 1.3$, leaving fragments neutron-rich",
        r"Fission fragments have too many protons",
        r"They absorb electrons from surrounding air",
        r"Fission fragments have zero binding energy"
    ],
    0,
    r"Parent $^{235}\text{U}$ has $N/Z = 143/92 \approx 1.55$. Stable nuclei with $A \sim 95 - 140$ require $N/Z \approx 1.25 - 1.35$. Consequently, the fragments have an excess of neutrons and undergo successive $\beta^-$ decays ($n \to p + e^- + \bar{\nu}_e$) to achieve stability.",
    "Medium"
)

# Q36
add_q(
    "Nuclear fission and fusion",
    r"A fusion reactor is designed to generate $100\text{ MW}$ of power using the D-T reaction ($Q = 17.6\text{ MeV}$). How many D-T fusion reactions occur per second?",
    [
        r"$3.55 \times 10^{19}\text{ reactions/s}$",
        r"$1.78 \times 10^{18}\text{ reactions/s}$",
        r"$7.10 \times 10^{20}\text{ reactions/s}$",
        r"$3.55 \times 10^{17}\text{ reactions/s}$"
    ],
    0,
    r"Energy per reaction: $E = 17.6 \times 1.6 \times 10^{-13}\text{ J} = 2.816 \times 10^{-12}\text{ J}$.\nReaction rate: $\frac{dN}{dt} = \frac{100 \times 10^6\text{ W}}{2.816 \times 10^{-12}\text{ J}} \approx 3.55 \times 10^{19}\text{ reactions/s}$.",
    "Medium"
)

# Q37
add_q(
    "Nuclear fission and fusion",
    r"For the $100\text{ MW}$ fusion reactor ($3.55 \times 10^{19}\text{ reactions/s}$), what is the total mass of deuterium consumed in ONE day?",
    [
        r"$\approx 10.2\text{ g}$",
        r"$\approx 1.05\text{ kg}$",
        r"$\approx 102\text{ g}$",
        r"$\approx 1.02\text{ g}$"
    ],
    0,
    r"Number of reactions per day: $N = 3.55 \times 10^{19} \times 86400 \approx 3.068 \times 10^{24}$.\nEach reaction consumes one deuteron ($m \approx 2\text{ g/mol}$).\nMoles consumed: $\frac{3.068 \times 10^{24}}{6.022 \times 10^{23}} \approx 5.094\text{ mol}$.\nMass of deuterium: $m = 5.094 \times 2\text{ g} \approx 10.19\text{ g} \approx 10.2\text{ g/day}$. (Tremendous energy from just 10 grams of fuel!).",
    "Hard"
)

# Q38
add_q(
    "Nuclear fission and fusion",
    r"In stellar nucleosynthesis, stars more massive than the Sun ($M > 1.3 M_\odot$) fuse hydrogen into helium primarily via the:",
    [
        r"Carbon-Nitrogen-Oxygen (CNO) catalytic cycle",
        r"Proton-proton chain",
        r"Uranium decay chain",
        r"Photo-disintegration process"
    ],
    0,
    r"At higher core temperatures ($T > 1.7 \times 10^7\text{ K}$), the CNO cycle—where carbon, nitrogen, and oxygen nuclei act as nuclear catalysts to fuse four protons into helium—has a steeper temperature dependence ($T^{16}$ vs $T^4$) and dominates over the $p-p$ chain.",
    "Medium"
)

# Q39
add_q(
    "Nuclear fission and fusion",
    r"The fuel consumed in a typical pressurized water nuclear reactor (PWR) consists of uranium enriched to approximately what percentage of $^{235}\text{U}$?",
    [
        r"$3\%\text{ to }5\%$",
        r"$0.7\%$ (natural uranium)",
        r"$90\%$ (weapons-grade)",
        r"$50\%$"
    ],
    0,
    r"Commercial nuclear power plants typically use low-enriched uranium (LEU) containing $3 - 5\%$ of fissile $^{235}\text{U}$ (compared to $0.7\%$ in natural uranium), which allows ordinary water to be used as both coolant and moderator.",
    "Easy"
)

# Q40
add_q(
    "Nuclear fission and fusion",
    r"Which of the following describes the 'loss-of-coolant accident' (LOCA) in a nuclear fission reactor?",
    [
        r"A rupture in the cooling system leading to overheating of the fuel rods due to radioactive decay heat of fission products",
        r"An instant nuclear explosion like a nuclear bomb",
        r"A sudden disappearance of neutrons from the core",
        r"The control rods getting stuck outside the core"
    ],
    0,
    r"Even after control rods shut down fission, radioactive fission products continue emitting decay heat ($\sim 7\%$ of full power initially). If coolant is lost, this decay heat can melt fuel cladding and core structures (meltdown).",
    "Medium"
)

# Q41
add_q(
    "Nuclear fission and fusion",
    r"In inertial confinement fusion (such as the National Ignition Facility), thermonuclear conditions are achieved by:",
    [
        r"Focusing high-energy laser pulses onto a tiny deuterium-tritium pellet to rapidly compress and heat it",
        r"Trapping plasma inside a toroidal magnetic field",
        r"Passing electric current through a liquid metal",
        r"Heating uranium rods with microwaves"
    ],
    0,
    r"Inertial confinement fusion uses high-power laser beams or ion beams focused symmetrically onto a millimeter-sized fuel capsule, causing an ablation-driven spherical implosion that compresses the fuel to extreme densities and temperatures before it can expand.",
    "Easy"
)

# Q42
add_q(
    "Nuclear fission and fusion",
    r"The energy released per fission of $^{235}\text{U}$ is $200\text{ MeV}$. What is the energy released per gram of $^{235}\text{U}$ undergoing complete fission?",
    [
        r"$8.2 \times 10^{10}\text{ J/g}$",
        r"$2.0 \times 10^8\text{ J/g}$",
        r"$1.6 \times 10^{-13}\text{ J/g}$",
        r"$4.5 \times 10^6\text{ J/g}$"
    ],
    0,
    r"Number of atoms in $1\text{ g}$: $N = \frac{6.022 \times 10^{23}}{235} \approx 2.56 \times 10^{21}\text{ atoms}$.\nEnergy: $E = (2.56 \times 10^{21}) \times (200 \times 1.6 \times 10^{-13}\text{ J}) = 8.2 \times 10^{10}\text{ J/g}$.",
    "Medium"
)

# Q43
add_q(
    "Nuclear fission and fusion",
    r"What percentage of the total energy released in fission is carried away as kinetic energy of the two major fission fragments?",
    [
        r"$\approx 80 - 85\%$ ($\approx 168\text{ MeV}$ of the $200\text{ MeV}$)",
        r"$\approx 50\%$",
        r"$\approx 20\%$",
        r"$\approx 99.9\%$"
    ],
    0,
    r"Due to strong mutual Coulomb repulsion right at the moment of separation, the two positively charged fission fragments fly apart with enormous kinetic energy, accounting for about $168\text{ MeV}$ ($\sim 84\%$) of the total $200\text{ MeV}$.",
    "Medium"
)

# Q44
add_q(
    "Nuclear fission and fusion",
    r"Complete the fusion reaction: $^2_1\text{H} + ^2_1\text{H} \to X + ^1_1\text{p} + 4.03\text{ MeV}$. The product $X$ is:",
    [
        r"Triton ($^3_1\text{H}$)",
        r"Helium-3 ($^3_2\text{He}$)",
        r"$\alpha$-particle ($^4_2\text{He}$)",
        r"Neutron ($^1_0\text{n}$)"
    ],
    0,
    r"Mass number balance: $2 + 2 = A_X + 1 \implies A_X = 3$.\nAtomic number balance: $1 + 1 = Z_X + 1 \implies Z_X = 1$.\nThe nuclide with $A = 3$ and $Z = 1$ is tritium ($^3_1\text{H}$).",
    "Easy"
)

# Q45
add_q(
    "Nuclear fission and fusion",
    r"Which of the following correctly pairs the nuclear process with its primary role in the universe?",
    [
        r"Nuclear fusion: nucleosynthesis of elements up to iron in stars; Nuclear fission: natural decay of heavy radioactive actinides",
        r"Nuclear fission: energy generation in main-sequence stars; Nuclear fusion: nuclear weapon decay",
        r"Nuclear fusion: spontaneous splitting of uranium; Nuclear fission: formation of helium in the Sun",
        r"Both fission and fusion are completely artificial processes absent in nature"
    ],
    0,
    r"Nuclear fusion is the cosmic engine powering stars and synthesizing elements up to iron, while nuclear fission and radioactive decay govern the natural transmutation of heavy super-iron actinides synthesized during supernovae and neutron star mergers.",
    "Easy"
)

print(f"Total questions generated: {len(questions)}")

# Balancing options for Subtopic 7
def balance_subtopic(subtopic_name):
    sub_qs = [q for q in questions if q["subtopic"] == subtopic_name]
    assert len(sub_qs) == 45, f"Expected 45 questions for {subtopic_name}, got {len(sub_qs)}"
    
    # Target counts: A:12, B:11, C:11, D:11
    targets = [0]*12 + [1]*11 + [2]*11 + [3]*11
    
    for i, target in enumerate(targets):
        q = sub_qs[i]
        orig_corr = q["correctAnswer"]
        if orig_corr != target:
            correct_option_text = q["options"][orig_corr]
            target_option_text = q["options"][target]
            q["options"][target] = correct_option_text
            q["options"][orig_corr] = target_option_text
            q["correctAnswer"] = target

balance_subtopic("Nuclear fission and fusion")

# Save to batch 4
with open("scripts/atoms_nuclei/an_batch4.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Atoms & Nuclei Batch 4 generated successfully! Total questions: {len(questions)}")
