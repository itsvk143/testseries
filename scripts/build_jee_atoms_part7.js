const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Nuclear fission and fusion";
const CHAPTER = "Atoms and Nuclei";
const SUBJECT = "Physics";
const CLASS = "Class 12";

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Assertion-Reason questions
const arQuestions = [
  {
    assertion: "Thermal (slow) neutrons are much more effective at inducing fission in $^{235}\\text{U}$ than fast neutrons.",
    reason: "Slow neutrons have a longer de Broglie wavelength and spend more time in the vicinity of the target nucleus, vastly increasing the capture cross-section.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The fission cross-section of $^{235}\\text{U}$ varies inversely with neutron speed (the $1/v$ law). Fast neutrons ($~2\\text{ MeV}$) tend to scatter inelastically rather than being absorbed, whereas thermal neutrons ($~0.025\\text{ eV}$) are captured with high probability."
  },
  {
    assertion: "Heavy water ($D_2O$) and graphite are widely used as moderators in nuclear fission reactors.",
    reason: "Good moderators must have light nuclei that extract substantial kinetic energy per collision without absorbing the neutrons.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Elastic collisions transfer the maximum fraction of kinetic energy when the colliding masses are comparable ($m_n \\approx m_D$). Moreover, deuterium and carbon have very low neutron absorption cross-sections, allowing neutrons to be slowed to thermal energies without being lost."
  },
  {
    assertion: "Cadmium and boron rods are used as control rods in a nuclear reactor.",
    reason: "Cadmium and boron have exceptionally large cross-sections for absorbing thermal neutrons.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By inserting or withdrawing cadmium or boron rods, the neutron population and the reproduction factor $k$ can be precisely regulated to keep the reactor critical ($k = 1$) or shut it down safely ($k < 1$)."
  },
  {
    assertion: "To sustain a controlled nuclear chain reaction in a power reactor, the neutron multiplication factor $k$ must be maintained at exactly $1$.",
    reason: "If $k > 1$, the chain reaction grows exponentially, causing power surges or meltdown, while if $k < 1$, the reaction gradually dies out.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The multiplication factor $k$ is the ratio of neutrons in generation $n+1$ to that in generation $n$. For steady power generation, $k = 1$ (critical state). If $k > 1$, the reactor is supercritical; if $k < 1$, it is subcritical."
  },
  {
    assertion: "Delayed neutrons play a vital role in the safe control of nuclear reactors.",
    reason: "Delayed neutrons are emitted seconds to minutes after fission by certain fission products, providing sufficient response time for mechanical control rod mechanisms.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Prompt neutrons are emitted in $\\approx 10^{-14}\\text{ s}$, which is too fast for mechanical regulation. A small fraction (~0.65%) of neutrons are delayed by precursor $\\beta$-decay, increasing the effective generation time to seconds and making reactor control feasible."
  },
  {
    assertion: "Thermonuclear fusion reactions require extremely high temperatures of the order of $10^7 - 10^8\\text{ K}$.",
    reason: "Positively charged nuclei must have sufficient thermal kinetic energy to overcome the repulsive electrostatic Coulomb barrier between them.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because both fusing nuclei carry positive electric charge, they experience strong Coulomb repulsion as they approach. Temperatures of $\\sim 10^7\\text{ K}$ impart average thermal energies of several $\\text{keV}$, enabling nuclei to approach close enough for quantum mechanical tunneling through the Coulomb barrier."
  },
  {
    assertion: "The energy liberated per nucleon in nuclear fusion is greater than that in nuclear fission.",
    reason: "The rise in the binding energy per nucleon curve from light nuclei ($A \\le 4$) to helium ($^4\\text{He}$) is much steeper than from uranium to intermediate-mass nuclei.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In D-T fusion, $17.6\\text{ MeV}$ is released for $5$ nucleons ($\approx 3.5\\text{ MeV/nucleon}$). In $^{235}\\text{U}$ fission, $\\approx 200\\text{ MeV}$ is released for $235$ nucleons ($\approx 0.85\\text{ MeV/nucleon}$). Thus fusion yields about $4$ times more energy per unit mass."
  },
  {
    assertion: "A hydrogen bomb operates on the principle of uncontrolled thermonuclear fusion.",
    reason: "A fission bomb (atomic bomb) is detonated first to create the extreme temperature and pressure necessary to initiate fusion in the hydrogen bomb core.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "To trigger fusion, temperatures of hundreds of millions of Kelvin are required. A primary fission explosion provides this extreme thermonuclear environment to ignite the secondary fusion fuel."
  },
  {
    assertion: "Ordinary water ($H_2O$) is a less efficient moderator than heavy water ($D_2O$) when using natural uranium fuel.",
    reason: "Ordinary hydrogen ($^1_1\\text{H}$) has a much higher capture cross-section for thermal neutrons via $p + n \\to ^2\\text{H} + \\gamma$ than deuterium.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Natural uranium contains only $0.72\\% ^{235}\\text{U}$. Light water absorbs too many neutrons via $^1\\text{H}(n, \\gamma)^2\\text{H}$ to sustain $k = 1$ with natural uranium, whereas heavy water absorbs almost no neutrons, allowing reactors (like CANDU) to use unenriched natural uranium."
  },
  {
    assertion: "Natural uranium cannot sustain a chain reaction in an unmoderated block.",
    reason: "Most of the natural uranium is $^{238}\\text{U}$ ($99.3\\%$), which captures fast fission neutrons through resonance absorption without undergoing fission.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$^{238}\\text{U}$ has strong resonance absorption peaks for intermediate-energy neutrons. Without a moderator to quickly slow neutrons below these resonance energies, neutrons are absorbed without causing fission, quenching the chain reaction."
  },
  {
    assertion: "The main source of energy radiated by the Sun and other stars is thermonuclear fusion of hydrogen into helium.",
    reason: "In the solar core, four protons fuse through the proton-proton chain cycle into a helium nucleus, two positrons, two neutrinos, and gamma photons, releasing $\\approx 26.7\\text{ MeV}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Under the core temperature of $\\approx 1.5\\times 10^7\\text{ K}$ and immense gravitational pressure, hydrogen is converted into helium via the proton-proton chain: $4p + 2e^- \\to ^4\\text{He} + 2\\nu_e + 26.7\\text{ MeV}$."
  },
  {
    assertion: "Nuclear fusion is inherently safer than nuclear fission regarding runaway accidents.",
    reason: "Thermonuclear fusion requires precise plasma temperature and density conditions; any disruption or vessel breach causes immediate plasma cooling and terminates the reaction instantly.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A fusion reactor contains only a few grams of fuel in the vacuum chamber at any instant. Unlike fission reactors with huge fuel loads, any failure instantly extinguishes the plasma without risk of meltdown."
  },
  {
    assertion: "The Lawson criterion defines the condition necessary for achieving net energy gain in controlled thermonuclear fusion.",
    reason: "The Lawson criterion requires that the product of plasma density $n$ and confinement time $\\tau$ exceed a threshold value determined by the operating temperature: $n\\tau \\ge f(T)$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For the fusion energy output to exceed the energy invested in heating and sustaining the plasma, the plasma must remain dense and contained long enough: for D-T fusion, $n\\tau \\ge 10^{20}\\text{ s/m}^3$ at $T \\approx 10^8\\text{ K}$."
  },
  {
    assertion: "Tokamak devices use strong magnetic fields to confine high-temperature plasma in a toroidal (doughnut-shaped) chamber.",
    reason: "Charged particles in a magnetic field experience a Lorentz force that forces them into helical trajectories along magnetic field lines, preventing them from touching the physical chamber walls.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "At fusion temperatures ($\sim 10^8\\text{ K}$), all matter is fully ionized into plasma. Physical walls would cool the plasma and melt; magnetic fields confine the charged ions and electrons along closed magnetic flux surfaces."
  },
  {
    assertion: "In a nuclear fission event, the majority of the released energy ($\approx 85\\%$) appears as kinetic energy of the fission fragments.",
    reason: "The electrostatic Coulomb repulsion pushes the two massive positively charged daughter fragments apart with tremendous mutual kinetic energy.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Immediately after scission, the two daughter nuclei each have $+40e$ to $+50e$ of charge and are separated by only $\\approx 10\\text{ fm}$. The massive Coulomb potential energy is converted into $\\approx 167\\text{ MeV}$ of fragment kinetic energy out of the total $200\\text{ MeV}$."
  },
  {
    assertion: "Fertile isotopes such as $^{238}\\text{U}$ and $^{232}\\text{Th}$ can be converted into fissile isotopes inside breeder reactors.",
    reason: "Neutron capture by $^{238}\\text{U}$ followed by two successive $\\beta^-$-decays produces fissile plutonium-239 ($^{239}\\text{Pu}$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$^{238}_{92}\\text{U} + n \\to ^{239}_{92}\\text{U} \\xrightarrow{\\beta^-} ^{239}_{93}\\text{Np} \\xrightarrow{\\beta^-} ^{239}_{94}\\text{Pu}$. Plutonium-239 is fissile and can sustain a fission chain reaction."
  },
  {
    assertion: "Neutrinos emitted during nuclear fusion in the Sun escape almost instantaneously into space without heating the solar plasma.",
    reason: "Neutrinos interact with matter only via the extremely weak force and have practically zero cross-section for interaction with the solar interior.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A neutrino has a mean free path in ordinary matter of several light-years. Thus, the neutrinos generated at the solar core stream directly out of the Sun at near the speed of light in about two seconds."
  },
  {
    assertion: "The D-T fusion reaction ($^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0n$) is currently favored for terrestrial fusion reactors over the D-D reaction.",
    reason: "The D-T reaction has a significantly higher fusion cross-section and ignites at a lower temperature ($~10^8\\text{ K}$) than D-D fusion.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "D-T fusion has the lowest Coulomb barrier and the largest reaction rate of any fusion reaction at temperatures achievable with current magnetic and inertial confinement technology."
  },
  {
    assertion: "Fission fragments are almost always radioactive and decay via $\\beta^-$-emission.",
    reason: "Fission fragments retain the high neutron-to-proton ratio ($N/Z \\sim 1.5$) of the parent heavy nucleus, leaving them neutron-rich compared to stable intermediate nuclei ($N/Z \\sim 1.2-1.3$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because heavy nuclei like $^{235}\\text{U}$ have a much higher proportion of neutrons than lighter nuclei, the fragments end up with a surplus of neutrons and undergo sequential $\\beta^-$-decays to reach stability."
  },
  {
    assertion: "Breeder reactors produce more fissile material than they consume.",
    reason: "Each fission in a fast breeder reactor releases on average about $2.9$ neutrons, allowing one neutron to sustain the chain reaction and more than one neutron to convert fertile nuclei into fissile fuel.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In a fast neutron spectrum, $^{239}\\text{Pu}$ fission releases an average of $\\eta > 2$ neutrons per absorbed neutron, leaving enough excess neutrons to convert $^{238}\\text{U}$ into more $^{239}\\text{Pu}$ than was destroyed."
  },
  {
    assertion: "The mass defect per fission of $^{235}\\text{U}$ is approximately $0.215\\text{ u}$.",
    reason: "Energy released per fission is $Q \\approx 200\\text{ MeV}$, and $\\Delta m = \\frac{200\\text{ MeV}}{931.5\\text{ MeV/u}} \\approx 0.215\\text{ u}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Dividing $200\\text{ MeV}$ by $931.5\\text{ MeV/u}$ gives $\\Delta m \\approx 0.2147 \\approx 0.215\\text{ u}$. Both statements are true and (R) correctly explains (A)."
  },
  {
    assertion: "Inertial confinement fusion utilizes intense laser beams to compress a tiny pellet of deuterium-tritium fuel.",
    reason: "Rapid surface ablation of the fuel capsule creates an inward rocket-like reaction force that implodes the core to extreme densities and thermonuclear temperatures.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "High-power lasers heat the outer layer of the target pellet, which blows off rapidly. By Newton's third law, this drives an inward spherical shockwave that compresses the core to hundreds of times liquid density for nanoseconds."
  },
  {
    assertion: "Heavy nuclei do not undergo spontaneous fusion under ordinary conditions.",
    reason: "The electrostatic Coulomb repulsion between large positive charges ($Z_1 Z_2 e^2$) creates an enormous barrier that completely prevents nuclei from coming within nuclear force range.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The Coulomb barrier scales as $Z_1 Z_2$. For heavy nuclei, this barrier is tens of $\\text{MeV}$, making fusion impossible under non-cataclysmic conditions."
  },
  {
    assertion: "A nuclear reactor cannot explode like an atomic bomb.",
    reason: "Power reactor fuel is enriched to only about $3-5\\% ^{235}\\text{U}$ (compared to $>90\\%$ in weapons), and the geometric layout prevents the prompt supercritical assembly required for a nuclear detonation.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Low enrichment and physical dispersal ensure that any overheating causes negative reactivity feedback (thermal expansion and Doppler broadening), which naturally slows the reaction rather than creating a nuclear explosion."
  },
  {
    assertion: "Liquid sodium is often used as a coolant in fast breeder reactors.",
    reason: "Liquid sodium has excellent thermal conductivity and a low neutron moderation capability, preventing the slowing down of fast neutrons essential for breeding.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In fast reactors, neutrons must remain fast ($E > 0.1\\text{ MeV}$). Water cannot be used because it moderates neutrons. Sodium is a heavy liquid metal that conducts heat superbly without slowing neutrons down."
  },
  {
    assertion: "Cold fusion (fusion at room temperature and atmospheric pressure in simple tabletop electrochemical cells) is an established commercial energy technology.",
    reason: "Electrolysis of heavy water using palladium electrodes reliably produces continuous net nuclear power.",
    correctAnswer: "(A) is false but (R) is true", // wait, let's make (A) false, (R) false -> among standard options, let's fix
    explanation: "Both statements are false. Cold fusion has never been reproducibly confirmed and violates established nuclear physics principles."
  }
];

// Fix AR 26 to standard options
arQuestions[25] = {
  assertion: "Nuclear fusion reactions are called thermonuclear reactions.",
  reason: "The kinetic energy required for the fusing nuclei to overcome electrostatic repulsion is provided by the thermal energy of the system at extremely high temperatures.",
  correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  explanation: "Because the nuclei acquire their required kinetic energy through Maxwellian thermal motion at temperatures of $\\sim 10^7 - 10^8\\text{ K}$, these processes are termed thermonuclear reactions."
};

// 7 Multiple Choice Questions
const mcqQuestions = [
  {
    question: "Complete fission of $1\\text{ kg}$ of $^{235}\\text{U}$ releases approximately how much energy? (Given that each fission event releases $200\\text{ MeV}$, and Avogadro's number is $6.02\\times 10^{23}\\text{ mol}^{-1}$):",
    options: [
      "$8.2\\times 10^{13}\\text{ J}$",
      "$2.0\\times 10^{11}\\text{ J}$",
      "$5.1\\times 10^{12}\\text{ J}$",
      "$1.6\\times 10^{14}\\text{ J}$"
    ],
    correctAnswer: "$8.2\\times 10^{13}\\text{ J}$",
    explanation: "Number of nuclei in $1\\text{ kg}$: $N = \\frac{1000}{235} \\times 6.02\\times 10^{23} \\approx 2.56\\times 10^{24}$.\\nEnergy released per fission: $200\\text{ MeV} = 200 \\times 1.6\\times 10^{-13}\\text{ J} = 3.2\\times 10^{-11}\\text{ J}$.\\nTotal energy: $E = 2.56\\times 10^{24} \\times 3.2\\times 10^{-11}\\text{ J} \\approx 8.2\\times 10^{13}\\text{ J}$."
  },
  {
    question: "In the D-T fusion reaction $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0n + Q$, if $Q = 17.6\\text{ MeV}$, the kinetic energy carried away by the emitted neutron is approximately:",
    options: [
      "$14.1\\text{ MeV}$",
      "$3.5\\text{ MeV}$",
      "$8.8\\text{ MeV}$",
      "$17.6\\text{ MeV}$"
    ],
    correctAnswer: "$14.1\\text{ MeV}$",
    explanation: "By conservation of momentum, kinetic energy divides inversely as the masses:\\n$K_n = \\frac{m_\\alpha}{m_\\alpha + m_n} Q = \\frac{4}{4 + 1} \\times 17.6 = \\frac{4}{5} \\times 17.6 = 14.08 \\approx 14.1\\text{ MeV}$."
  },
  {
    question: "In a nuclear reactor, the primary function of the moderator is to:",
    options: [
      "Slow down fast neutrons to thermal energies",
      "Absorb excess neutrons to stop the chain reaction",
      "Transfer heat from the core to the steam turbines",
      "Prevent gamma radiation leakage"
    ],
    correctAnswer: "Slow down fast neutrons to thermal energies",
    explanation: "Moderators (such as heavy water or graphite) collide elastically with fast fission neutrons, reducing their kinetic energy from $\\sim 2\\text{ MeV}$ to $\\sim 0.025\\text{ eV}$ so that they can efficiently induce further fissions in $^{235}\\text{U}$."
  },
  {
    question: "If a nuclear reactor generates $320\\text{ MW}$ of electrical power with an efficiency of $20\\%$, the number of fissions occurring per second is (assume $200\\text{ MeV}$ per fission):",
    options: [
      "$5\\times 10^{19}$",
      "$1\\times 10^{19}$",
      "$2.5\\times 10^{19}$",
      "$5\\times 10^{18}$"
    ],
    correctAnswer: "$5\\times 10^{19}$",
    explanation: "Total thermal power: $P_{\\text{th}} = \\frac{P_{\\text{elec}}}{\\eta} = \\frac{320\\text{ MW}}{0.20} = 1600\\text{ MW} = 1.6\\times 10^9\\text{ J/s}$.\\nEnergy per fission: $E_f = 200\\text{ MeV} = 200 \\times 1.6\\times 10^{-13}\\text{ J} = 3.2\\times 10^{-11}\\text{ J}$.\\nFissions per second: $\\frac{dN}{dt} = \\frac{1.6\\times 10^9}{3.2\\times 10^{-11}} = 5\\times 10^{19}\\text{ s}^{-1}$."
  },
  {
    question: "When $^{235}_{92}\\text{U}$ captures a thermal neutron, it splits into $^{144}_{56}\\text{Ba}$, $^{89}_{36}\\text{Kr}$, and $x$ neutrons. The value of $x$ is:",
    options: [
      "$3$",
      "$2$",
      "$1$",
      "$4$"
    ],
    correctAnswer: "$3$",
    explanation: "Conservation of mass number:\\n$235 + 1 = 144 + 89 + x \\implies 236 = 233 + x \\implies x = 3$."
  },
  {
    question: "Which of the following materials is NOT commonly used as a neutron moderator in nuclear reactors?",
    options: [
      "Boron",
      "Heavy water ($D_2O$)",
      "Graphite",
      "Beryllium oxide"
    ],
    correctAnswer: "Boron",
    explanation: "Boron has a very high neutron absorption cross-section and is used as a control rod (neutron absorber), NOT as a moderator."
  },
  {
    question: "The proton-proton cycle occurring in the Sun produces a net energy of $26.7\\text{ MeV}$. The primary reaction product is:",
    options: [
      "$^4_2\\text{He}$",
      "$^3_2\\text{He}$",
      "$^2_1\\text{H}$",
      "$^{12}_6\\text{C}$"
    ],
    correctAnswer: "$^4_2\\text{He}$",
    explanation: "The net reaction of the proton-proton chain is $4p + 2e^- \\to ^4_2\\text{He} + 2\\nu_e + 26.7\\text{ MeV}$. The primary product is a stable helium-4 nucleus."
  }
];

// 20 Numerical Questions
const numQuestions = [
  {
    question: "When a $^{235}\\text{U}$ nucleus undergoes fission, $200\\text{ MeV}$ of energy is released. The amount of mass converted into energy per fission is approximately $x \\times 10^{-28}\\text{ kg}$. Taking $200\\text{ MeV} = 3.2\\times 10^{-11}\\text{ J}$ and $c = 3\\times 10^8\\text{ m/s}$, $\\Delta m = \\frac{3.2\\times 10^{-11}}{9\\times 10^{16}} = 3.56\\times 10^{-28}\\text{ kg}$. The value of $x$ rounded to the nearest integer is ______ .",
    correctAnswer: "4",
    solution: "$\\Delta m = \\frac{3.2\\times 10^{-11}}{9\\times 10^{16}} = 3.56\\times 10^{-28}\\text{ kg} \\approx 4\\times 10^{-28}\\text{ kg} \\implies x = 4$."
  },
  {
    question: "In a fission of $^{235}\\text{U}$ with $200\\text{ MeV}$ released, the kinetic energy carried by the two main fission fragments is approximately ______ $\\text{MeV}$. (Round to nearest integer: $167\\text{ MeV} \\approx 167$)",
    correctAnswer: "167",
    solution: "Approximately $83.5\\%$ of the fission energy appears as kinetic energy of the fragments: $0.835 \\times 200 = 167\\text{ MeV}$."
  },
  {
    question: "In a D-T fusion reaction releasing $17.6\\text{ MeV}$, the kinetic energy of the alpha particle ($^4_2\\text{He}$) is $x\\text{ MeV}$. Given that the alpha particle carries $1/5$ of the total kinetic energy, the value of $x$ is approximately ______ $\\text{MeV}$. (Round to nearest integer: $17.6 / 5 = 3.52 \\approx 4$)",
    correctAnswer: "4",
    solution: "$K_\\alpha = \\frac{1}{5} \\times 17.6 = 3.52\\text{ MeV} \\approx 4\\text{ MeV}$."
  },
  {
    question: "A nuclear power plant produces $1000\\text{ MW}$ of thermal power. The number of fissions occurring per second is $x \\times 10^{19}$. Given each fission releases $200\\text{ MeV} = 3.2\\times 10^{-11}\\text{ J}$, $N = \\frac{10^9}{3.2\\times 10^{-11}} = 3.125\\times 10^{19}$. The value of $x$ to the nearest integer is ______ .",
    correctAnswer: "3",
    solution: "$\\frac{dN}{dt} = \\frac{10^9\\text{ J/s}}{3.2\\times 10^{-11}\\text{ J}} = 3.125\\times 10^{19}\\text{ s}^{-1} \\implies x = 3$."
  },
  {
    question: "In a nuclear reactor, the neutron multiplication factor is $k = 1.002$. The reactor is supercritical. The excess reactivity $\\Delta k = k - 1$ is $x \\times 10^{-3}$. The value of $x$ is ______ .",
    correctAnswer: "2",
    solution: "$\\Delta k = 1.002 - 1 = 0.002 = 2\\times 10^{-3} \\implies x = 2$."
  },
  {
    question: "In the fission reaction $^{235}_{92}\\text{U} + n \\to ^{140}_{54}\\text{Xe} + ^{94}_{38}\\text{Sr} + x\\, n$, the number of emitted neutrons $x$ is ______ .",
    correctAnswer: "2",
    solution: "Mass number conservation: $235 + 1 = 140 + 94 + x \\implies 236 = 234 + x \\implies x = 2$."
  },
  {
    question: "In the fusion of four protons into a helium-4 nucleus, $26.7\\text{ MeV}$ is released. The energy released per proton is approximately ______ $\\text{MeV}$. (Round to nearest integer: $26.7 / 4 = 6.675 \\approx 7$)",
    correctAnswer: "7",
    solution: "$E = \\frac{26.7}{4} = 6.675\\text{ MeV} \\approx 7\\text{ MeV}$."
  },
  {
    question: "A nuclear reactor consumes $2\\text{ kg}$ of $^{235}\\text{U}$ in $30\\text{ days}$. The power generated by the reactor in $\\text{MW}$ is approximately $x\\text{ MW}$. (Take energy per fission as $200\\text{ MeV}$, $1\\text{ kg}$ gives $8.2\\times 10^{13}\\text{ J}$, so $2\\text{ kg}$ gives $1.64\\times 10^{14}\\text{ J}$. Over $30\\text{ days} = 2.592\\times 10^6\\text{ s}$, $P = 1.64\\times 10^{14} / 2.592\\times 10^6 \\approx 63.3\\text{ MW}$). The value of $x$ to the nearest integer is ______ .",
    correctAnswer: "63",
    solution: "$P = \\frac{1.64\\times 10^{14}\\text{ J}}{2.592\\times 10^6\\text{ s}} = 6.327\\times 10^7\\text{ W} \\approx 63\\text{ MW}$."
  },
  {
    question: "In the fission reaction $^{235}_{92}\\text{U} + ^{1}_0n \\to ^{95}_{38}\\text{Sr} + Y + 3\\, ^{1}_0n$, the atomic number of the fragment $Y$ is ______ .",
    correctAnswer: "54",
    solution: "Conservation of atomic number: $92 + 0 = 38 + Z_Y + 0 \\implies Z_Y = 92 - 38 = 54$ (Xenon, $\\text{Xe}$)."
  },
  {
    question: "In the above reaction, the mass number of the fragment $Y$ is ______ .",
    correctAnswer: "138",
    solution: "Conservation of mass number: $235 + 1 = 95 + A_Y + 3 \\implies 236 = 98 + A_Y \\implies A_Y = 138$."
  },
  {
    question: "The energy released in the D-D reaction $^2_1\\text{H} + ^2_1\\text{H} \\to ^3_2\\text{He} + ^1_0n$ is $3.27\\text{ MeV}$. The energy released per nucleon in this reaction is approximately ______ $\\text{MeV/nucleon}$. (Round to nearest integer: $3.27 / 4 \\approx 0.82 \\approx 1$)",
    correctAnswer: "1",
    solution: "$E / A = \\frac{3.27}{4} = 0.8175\\text{ MeV/nucleon} \\approx 1\\text{ MeV/nucleon}$."
  },
  {
    question: "The temperature of plasma in a tokamak must reach $10^8\\text{ K}$ for D-T fusion. The average thermal kinetic energy $\\frac{3}{2} k_B T$ at this temperature is approximately $x\\text{ keV}$. (Take $k_B \\approx 8.62\\times 10^{-5}\\text{ eV/K}$; $1.5 \\times 8.62\\times 10^{-5} \\times 10^8 \\approx 12.93\\text{ keV} \\approx 13\\text{ keV}$). The value of $x$ to the nearest integer is ______ .",
    correctAnswer: "13",
    solution: "$E = 1.5 \\times (8.62\\times 10^{-5}\\text{ eV/K}) \\times 10^8\\text{ K} = 12930\\text{ eV} \\approx 13\\text{ keV}$."
  },
  {
    question: "In a critical nuclear reactor, the neutron multiplication factor $k$ is ______ .",
    correctAnswer: "1",
    solution: "For a critical reactor sustaining steady power, $k = 1$."
  },
  {
    question: "If the energy released per fission is $200\\text{ MeV}$, the number of fissions required to generate $1\\text{ Joule}$ of thermal energy is approximately $x \\times 10^{10}$. Taking $1\\text{ J} / (3.2\\times 10^{-11}\\text{ J}) = 3.125\\times 10^{10}$, the value of $x$ to the nearest integer is ______ .",
    correctAnswer: "3",
    solution: "$N = \\frac{1}{3.2\\times 10^{-11}} = 3.125\\times 10^{10} \\implies x = 3$."
  },
  {
    question: "In a breeder reactor, for every $100$ fissile nuclei consumed, $120$ new fissile nuclei are produced. The breeding ratio of the reactor is $x / 10$. The value of $x$ is ______ .",
    correctAnswer: "12",
    solution: "$\\text{Breeding ratio} = \\frac{120}{100} = 1.2 = \\frac{12}{10} \\implies x = 12$."
  },
  {
    question: "The percentage of $^{235}\\text{U}$ in natural uranium is approximately ______ $\\%$. (Round to nearest integer: $0.72\\% \\approx 1\\%$)",
    correctAnswer: "1",
    solution: "Natural uranium consists of $\\approx 99.28\\% ^{238}\\text{U}$ and $\\approx 0.72\\% ^{235}\\text{U} \\approx 1\\%$."
  },
  {
    question: "In the D-T fusion reaction $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + n + 17.6\\text{ MeV}$, the mass number of the heavier product nucleus is ______ .",
    correctAnswer: "4",
    solution: "The heavier product is $^4_2\\text{He}$, whose mass number is $4$."
  },
  {
    question: "A research reactor produces $2\\text{ MW}$ of thermal power. The number of fissions occurring per second is $x \\times 10^{16}$. (Take $2\\times 10^6 / (3.2\\times 10^{-11}) = 6.25\\times 10^{16}$). The value of $x$ to the nearest integer is ______ .",
    correctAnswer: "6",
    solution: "$N = \\frac{2\\times 10^6}{3.2\\times 10^{-11}} = 6.25\\times 10^{16} \\implies x = 6$."
  },
  {
    question: "If the fission of one nucleus of $^{235}\\text{U}$ produces on average $2.5$ neutrons, the number of neutrons produced after $3$ generations starting from $1$ neutron (assuming no losses, $k = 2.5$) is approximately ______ . (Take $2.5^3 = 15.625 \\approx 16$)",
    correctAnswer: "16",
    solution: "$N_3 = 2.5^3 = 15.625 \\approx 16$."
  },
  {
    question: "The mass defect in the D-T fusion reaction $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + n$ releasing $17.6\\text{ MeV}$ is $x \\times 10^{-2}\\text{ u}$. Taking $\\Delta m = 17.6 / 931.5 \\approx 0.0189\\text{ u} = 1.89\\times 10^{-2}\\text{ u} \\approx 2\\times 10^{-2}\\text{ u}$. The value of $x$ to the nearest integer is ______ .",
    correctAnswer: "2",
    solution: "$\\Delta m = \\frac{17.6}{931.5} = 0.0189\\text{ u} \\approx 0.02\\text{ u} = 2\\times 10^{-2}\\text{ u} \\implies x = 2$."
  }
];

// Assemble 53 questions
const allQuestions = [];

arQuestions.forEach((q, i) => {
  allQuestions.push({
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): ${q.assertion}\\nReason (R): ${q.reason}\\nIn the light of the above statements, choose the correct answer from the options given below:`,
    options: AR_OPTIONS,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    type: "ASSERTION_REASON",
    questionType: "ASSERTION_REASON",
    subject: SUBJECT,
    chapter: CHAPTER,
    subtopic: SUBTOPIC,
    subTopic: SUBTOPIC,
    class: CLASS,
    difficulty: i % 3 === 0 ? "Hard" : (i % 3 === 1 ? "Medium" : "Easy"),
    examType: "JEE Mains",
    marks: 4,
    negativeMarks: 1
  });
});

mcqQuestions.forEach((q, i) => {
  allQuestions.push({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    type: "MCQ",
    questionType: "MCQ",
    subject: SUBJECT,
    chapter: CHAPTER,
    subtopic: SUBTOPIC,
    subTopic: SUBTOPIC,
    class: CLASS,
    difficulty: i % 2 === 0 ? "Medium" : "Hard",
    examType: "JEE Mains",
    marks: 4,
    negativeMarks: 1
  });
});

numQuestions.forEach((q, i) => {
  allQuestions.push({
    question: q.question,
    correctAnswer: q.correctAnswer,
    solution: q.solution,
    explanation: q.solution,
    type: "NUMERICAL",
    questionType: "NUMERICAL",
    subject: SUBJECT,
    chapter: CHAPTER,
    subtopic: SUBTOPIC,
    subTopic: SUBTOPIC,
    class: CLASS,
    difficulty: i % 2 === 0 ? "Medium" : "Hard",
    examType: "JEE Mains",
    marks: 4,
    negativeMarks: 0
  });
});

console.log(`Part 7 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);

const outPath = path.join(__dirname, 'data_jee_atoms_part7.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
