const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Nuclear reactions";
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
    assertion: "In an $\\alpha$-decay of a stationary parent nucleus $^{A}_{Z}X \\to ^{A-4}_{Z-2}Y + ^{4}_2\\text{He}$, the kinetic energy of the emitted $\\alpha$-particle is $K_\\alpha = \\frac{A - 4}{A} Q$.",
    reason: "By conservation of linear momentum, the $\\alpha$-particle and daughter nucleus have equal and opposite momenta, so kinetic energy is inversely proportional to mass.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because $p_\\alpha = p_Y$, kinetic energy is $K = p^2 / (2m)$. Thus $K_\\alpha / K_Y = M_Y / m_\\alpha = (A - 4) / 4$. Since $K_\\alpha + K_Y = Q$, solving gives $K_\\alpha = \\frac{A - 4}{A} Q$."
  },
  {
    assertion: "The kinetic energy spectrum of electrons emitted in $\\beta^-$-decay is continuous up to an end-point energy $E_{\\max}$.",
    reason: "In $\\beta^-$-decay, three particles are produced in the final state (daughter nucleus, electron, and antineutrino), which share the available decay energy continuously.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because the decay is a three-body process ($X \\to Y + e^- + \\bar{\\nu}_e$), conservation of energy and momentum allows the electron and antineutrino to share the disintegration energy in any proportion from $0$ up to $E_{\\max} \\approx Q$."
  },
  {
    assertion: "Pauli hypothesized the existence of the neutrino to explain the conservation of energy, momentum, and angular momentum in $\\beta$-decay.",
    reason: "The continuous $\\beta$-spectrum and spin conservation could not be reconciled with a two-body decay hypothesis.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "If only the daughter nucleus and electron were produced, the electron would have a discrete kinetic energy. Moreover, nuclear spin changes would violate angular momentum conservation without an additional spin-$1/2$, neutral particle (the neutrino)."
  },
  {
    assertion: "For an endoergic nuclear reaction ($Q < 0$), the threshold kinetic energy of the incident projectile is strictly greater than $|Q|$.",
    reason: "A portion of the incident kinetic energy must be retained as kinetic energy of the center of mass to conserve linear momentum.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In an endoergic reaction initiated on a stationary target of mass $M$, the threshold kinetic energy is $K_{\\text{th}} = |Q| \\left(1 + \\frac{m}{M}\\right) > |Q|$ because the products must carry non-zero center-of-mass kinetic energy to satisfy momentum conservation."
  },
  {
    assertion: "Radioactive decay follows first-order kinetics where the rate of disintegration is directly proportional to the number of radioactive nuclei present.",
    reason: "Radioactive decay is a spontaneous, purely statistical nuclear phenomenon governed by quantum mechanical transition probabilities.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because each unstable nucleus has a constant probability $\\lambda$ of decaying per unit time, $-\\frac{dN}{dt} = \\lambda N$. This leads to the exponential decay law $N(t) = N_0 e^{-\\lambda t}$."
  },
  {
    assertion: "The half-life of a radioactive substance is independent of the initial quantity of the substance.",
    reason: "Half-life depends only on the decay constant $\\lambda$ of the radionuclide: $T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For any first-order exponential process, the time required for half the nuclei to decay is $T_{1/2} = 0.693/\\lambda$, which is an intrinsic characteristic of the isotope, independent of temperature, pressure, or initial sample mass."
  },
  {
    assertion: "The activity of a radioactive sample decreases exponentially with time.",
    reason: "Activity is defined as $A(t) = \\lambda N(t)$, and the number of radioactive nuclei decreases as $N(t) = N_0 e^{-\\lambda t}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Since $A(t) = -\\frac{dN}{dt} = \\lambda N(t)$, substituting $N(t) = N_0 e^{-\\lambda t}$ yields $A(t) = A_0 e^{-\\lambda t}$, showing that activity diminishes exponentially at the same rate as the population."
  },
  {
    assertion: "The mean life $\\tau$ of a radioactive substance is greater than its half-life $T_{1/2}$.",
    reason: "The relation between mean life and half-life is $\\tau = \\frac{1}{\\lambda} = \\frac{T_{1/2}}{\\ln 2} \\approx 1.443\\, T_{1/2}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Mean life $\\tau = 1/\\lambda$, while half-life is $T_{1/2} = \\ln(2) / \\lambda \\approx 0.693 / \\lambda$. Therefore, $\\tau = T_{1/2} / 0.693 \\approx 1.443 T_{1/2} > T_{1/2}$."
  },
  {
    assertion: "During $\\gamma$-decay, neither the mass number $A$ nor the atomic number $Z$ of the nucleus changes.",
    reason: "$\\gamma$-decay is an electromagnetic transition in which an excited nucleus drops to a lower nuclear energy state by emitting a high-energy photon.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Like an excited atom emitting an optical photon, an excited nucleus $^{A}_{Z}X^* \\to ^{A}_{Z}X + \\gamma$ emits a $\\gamma$-ray photon without changing its proton or neutron count ($A$ and $Z$ remain unchanged)."
  },
  {
    assertion: "In $\\beta^+$-decay (positron emission), the atomic number of the daughter nucleus decreases by $1$ while its mass number remains unchanged.",
    reason: "Inside the nucleus, a proton converts into a neutron, a positron, and a neutrino ($p \\to n + e^+ + \\nu_e$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The transformation is $^{A}_{Z}X \\to ^{A}_{Z-1}Y + e^+ + \\nu_e$. One proton is converted into a neutron, decreasing $Z$ by $1$ while keeping total nucleon count $A$ constant."
  },
  {
    assertion: "In electron capture, an orbital electron is captured by the nucleus, converting a proton into a neutron with emission of a neutrino.",
    reason: "Electron capture occurs via the weak interaction process $p + e^- \\to n + \\nu_e$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In proton-rich heavy nuclei where $\\beta^+$-decay may be energetically unfeasible ($Q < 2m_e c^2$), an inner-shell ($K$-shell) electron is captured: $p + e^- \\to n + \\nu_e$, followed by characteristic X-ray emission as outer electrons fill the vacancy."
  },
  {
    assertion: "The $Q$-value of a nuclear reaction is positive for an exothermic reaction and negative for an endothermic reaction.",
    reason: "The $Q$-value is defined as the difference between the rest mass energies of the reactants and the products: $Q = (M_{\\text{reactants}} - M_{\\text{products}}) c^2$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "When mass decreases during a reaction ($M_{\\text{react}} > M_{\\text{prod}}$), $Q > 0$, and the lost mass is converted into kinetic energy of the products (exothermic). If mass increases, $Q < 0$ (endothermic)."
  },
  {
    assertion: "After two half-lives, $75\\%$ of the radioactive nuclei in a given sample have decayed.",
    reason: "After $n$ half-lives, the fraction of surviving nuclei is $(1/2)^n$, so for $n = 2$, the remaining fraction is $(1/2)^2 = 1/4$, meaning $1 - 1/4 = 3/4 = 75\\%$ have disintegrated.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Fraction remaining is $N/N_0 = (1/2)^2 = 0.25 = 25\\%$. Therefore, the fraction that has decayed is $100\\% - 25\\% = 75\\%$."
  },
  {
    assertion: "The SI unit of radioactive activity is the Becquerel ($\\text{Bq}$).",
    reason: "One Becquerel is defined as the activity of a radioactive source undergoing exactly one disintegration per second ($1\\text{ Bq} = 1\\text{ decay/s}$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The official SI unit of activity is the Becquerel ($\\text{Bq}$), representing $1\\text{ nuclear transformation per second}$. The traditional unit is the Curie ($1\\text{ Ci} = 3.7\\times 10^{10}\\text{ Bq}$)."
  },
  {
    assertion: "Radioactive dating using Carbon-14 is suitable for determining the age of ancient organic samples up to about $50000$ years.",
    reason: "The half-life of Carbon-14 is approximately $5730\\text{ years}$, so after $\\approx 10$ half-lives ($~57000\\text{ years}$), the remaining $^{14}\\text{C}$ activity becomes too small to detect accurately.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$T_{1/2}(^{14}\\text{C}) = 5730\\text{ years}$. After 10 half-lives ($57300\\text{ years}$), the activity drops to $(1/2)^{10} \\approx 1/1024$ of its original level, setting the practical detection limit for radiocarbon dating."
  },
  {
    assertion: "Linear momentum is conserved in all nuclear reactions.",
    reason: "In the absence of external forces, the total linear momentum of an isolated colliding or disintegrating nuclear system is strictly conserved.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Nuclear reactions occur due to internal forces between the interacting particles. By Newton's third law and Noether's theorem, total momentum is conserved in all nuclear events."
  },
  {
    assertion: "In a nuclear decay chain where a long-lived parent isotope produces a short-lived daughter isotope, secular equilibrium is reached.",
    reason: "At secular equilibrium, the rate of decay of the daughter isotope equals the rate of decay of the parent isotope ($A_{\\text{parent}} = A_{\\text{daughter}}$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "When $T_{1/2}(\\text{parent}) \\gg T_{1/2}(\\text{daughter})$ (i.e. $\\lambda_1 \\ll \\lambda_2$), the daughter population reaches a steady state where production rate $\\lambda_1 N_1$ equals decay rate $\\lambda_2 N_2$, establishing equal activities."
  },
  {
    assertion: "The decay constant $\\lambda$ of a radioactive isotope cannot be altered by heating, cooling, or chemical combination.",
    reason: "Radioactive decay is a purely nuclear process, and the energy changes involved in nuclear transformations ($\\sim \\text{MeV}$) are orders of magnitude greater than atomic or thermal energies ($\\sim \\text{eV}$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Nuclear binding and decay dynamics occur deep inside the nucleus under the strong force. Outer chemical bonds and thermal vibrations involves energy scales millions of times too small to influence the nuclear potential barrier."
  },
  {
    assertion: "When a nucleus emits an $\\alpha$-particle followed by two $\\beta^-$-particles, the final daughter nucleus is an isotope of the original parent nucleus.",
    reason: "An $\\alpha$-emission decreases $Z$ by $2$, while each $\\beta^-$-emission increases $Z$ by $1$, restoring the original atomic number $Z$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Initial: $^{A}_{Z}X$. After $\\alpha$: $^{A-4}_{Z-2}Y$. After two $\\beta^-$: $^{A-4}_{(Z-2)+2}X = ^{A-4}_{Z}X$. Because the final atomic number is $Z$, it is an isotope of the original element."
  },
  {
    assertion: "$\\alpha$-particles have a discrete line energy spectrum, whereas $\\beta$-particles have a continuous energy spectrum.",
    reason: "$\\alpha$-decay is a two-body decay where energy and momentum conservation uniquely fix the kinetic energy of both products, whereas $\\beta$-decay is a three-body process.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In a two-body decay ($X \\to Y + \\alpha$), momentum conservation $p_\\alpha = p_Y$ uniquely determines $K_\\alpha = \\frac{M_Y}{M_Y + m_\\alpha} Q$. In three-body $\\beta$-decay ($X \\to Y + e + \\nu$), the energy is shared continuously between three bodies."
  },
  {
    assertion: "A nucleus undergoing $\\beta^-$-decay has an excess of neutrons relative to the line of nuclear stability.",
    reason: "In $\\beta^-$-decay, an excess neutron transforms into a proton, lowering the $N/Z$ ratio towards the stability valley.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Neutron-rich isotopes lie above the stability line ($N/Z$ too large). Converting a neutron to a proton via $n \\to p + e^- + \\bar{\\nu}_e$ decreases $N$ and increases $Z$, moving the nuclide closer to the line of stability."
  },
  {
    assertion: "The half-life of a radioactive sample is $10\\text{ days}$. After $30\\text{ days}$, the fraction of undecayed nuclei is $1/8$.",
    reason: "The number of half-lives elapsed is $n = t / T_{1/2} = 30 / 10 = 3$, and the remaining fraction is $(1/2)^3 = 1/8$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$N/N_0 = (1/2)^n = (1/2)^3 = 1/8$. Both statements are true and (R) correctly explains (A)."
  },
  {
    assertion: "The ionizing power of $\\alpha$-particles is much greater than that of $\\beta$-particles and $\\gamma$-rays.",
    reason: "$\\alpha$-particles have a larger charge ($+2e$), greater mass, and move at slower speeds, leading to intense Coulomb interactions with atomic electrons along their track.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Relative ionizing power is roughly $\\alpha : \\beta : \\gamma \\approx 10000 : 100 : 1$. The large charge and slow speed of $\\alpha$-particles cause dense ionization along a short path."
  },
  {
    assertion: "$\\gamma$-rays have the greatest penetrating power among nuclear radiations.",
    reason: "Being uncharged photons, $\\gamma$-rays do not experience Coulomb deflection and interact with matter only via photoelectric absorption, Compton scattering, and pair production.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Relative penetrating powers are roughly $\\alpha : \\beta : \\gamma \\approx 1 : 100 : 10000$. Because $\\gamma$-rays carry no electric charge, they travel through several centimeters of lead before absorption."
  },
  {
    assertion: "The $Q$-value for $\\beta^+$-decay of a neutral parent atom $^{A}_{Z}X$ into neutral daughter $^{A}_{Z-1}Y$ is $[M(X) - M(Y) - 2m_e] c^2$.",
    reason: "In addition to the emitted positron ($m_e$), the daughter atom has one fewer orbital electron, so two electron masses are lost in the atomic mass accounting.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Nuclear masses are $m_N(X) = M(X) - Z m_e$ and $m_N(Y) = M(Y) - (Z-1)m_e$. The nuclear mass difference is $[m_N(X) - m_N(Y) - m_e] = [M(X) - M(Y) - 2m_e]$, creating an energy threshold of $2m_e c^2 \\approx 1.022\\text{ MeV}$ for $\\beta^+$-decay."
  },
  {
    assertion: "A radioactive nucleus can emit both an $\\alpha$-particle and a $\\beta$-particle simultaneously in a single disintegration.",
    reason: "Radioactive disintegrations occur via independent quantum channels, so a nucleus decays by either $\\alpha$ or $\\beta$ emission, never both at once.",
    correctAnswer: "(A) is false but (R) is true",
    explanation: "A single nucleus can only decay via one specific mode at any given instant (either $\\alpha$ or $\\beta$). A sample may show branching decay (some nuclei emit $\\alpha$, others emit $\\beta$), but no individual nucleus emits both simultaneously."
  }
];

// 7 Multiple Choice Questions
const mcqQuestions = [
  {
    question: "A stationary nucleus $^{210}_{84}\\text{Po}$ decays by emitting an $\\alpha$-particle according to $^{210}_{84}\\text{Po} \\to ^{206}_{82}\\text{Pb} + ^{4}_2\\text{He}$. If the total disintegration energy is $Q = 5.40\\text{ MeV}$, the kinetic energy of the emitted $\\alpha$-particle is:",
    options: [
      "$5.30\\text{ MeV}$",
      "$5.40\\text{ MeV}$",
      "$5.10\\text{ MeV}$",
      "$2.70\\text{ MeV}$"
    ],
    correctAnswer: "$5.30\\text{ MeV}$",
    explanation: "By conservation of momentum: $K_\\alpha = \\frac{A - 4}{A} Q = \\frac{210 - 4}{210} \\times 5.40 = \\frac{206}{210} \\times 5.40 \\approx 5.30\\text{ MeV}$."
  },
  {
    question: "The half-life of a radioactive isotope is $20\\text{ minutes}$. In what time will the activity of the sample fall to $\\frac{1}{16}$ of its initial value?",
    options: [
      "$80\\text{ minutes}$",
      "$60\\text{ minutes}$",
      "$40\\text{ minutes}$",
      "$100\\text{ minutes}$"
    ],
    correctAnswer: "$80\\text{ minutes}$",
    explanation: "$\\frac{A}{A_0} = \\left(\\frac{1}{2}\\right)^n \\implies \\frac{1}{16} = \\left(\\frac{1}{2}\\right)^4 \\implies n = 4\\text{ half-lives}$.\\nTotal time $t = n \\times T_{1/2} = 4 \\times 20 = 80\\text{ minutes}$."
  },
  {
    question: "The endoergic reaction $^{14}_7\\text{N}(\\alpha, p)^{17}_8\\text{O}$ has a $Q$-value of $-1.20\\text{ MeV}$. The threshold kinetic energy of the incident $\\alpha$-particle (mass $4\\text{ u}$) on a stationary $^{14}\\text{N}$ target (mass $14\\text{ u}$) is:",
    options: [
      "$1.54\\text{ MeV}$",
      "$1.20\\text{ MeV}$",
      "$2.40\\text{ MeV}$",
      "$1.80\\text{ MeV}$"
    ],
    correctAnswer: "$1.54\\text{ MeV}$",
    explanation: "Threshold kinetic energy is given by:\\n$K_{\\text{th}} = |Q|\\left(1 + \\frac{m_\\alpha}{M_N}\\right) = 1.20\\left(1 + \\frac{4}{14}\\right) = 1.20 \\times \\frac{18}{14} = 1.20 \\times \\frac{9}{7} \\approx 1.543\\text{ MeV}$."
  },
  {
    question: "A radioactive nucleus $^{238}_{92}\\text{U}$ undergoes a series of decays emitting $8$ $\\alpha$-particles and $6$ $\\beta^-$-particles. The resulting stable nucleus has atomic number $Z$ and mass number $A$ equal to:",
    options: [
      "$Z = 82, A = 206$",
      "$Z = 84, A = 206$",
      "$Z = 82, A = 210$",
      "$Z = 80, A = 208$"
    ],
    correctAnswer: "$Z = 82, A = 206$",
    explanation: "Mass number change: $A' = 238 - 8(4) = 238 - 32 = 206$.\\nAtomic number change: $Z' = 92 - 8(2) + 6(1) = 92 - 16 + 6 = 82$.\\nThe final nucleus is $^{206}_{82}\\text{Pb}$."
  },
  {
    question: "A sample contains two radioactive substances $X$ and $Y$ with half-lives of $1\\text{ hour}$ and $2\\text{ hours}$ respectively. Initially, both have the same number of active nuclei. The ratio of the activity of $X$ to that of $Y$ after $4\\text{ hours}$ is:",
    options: [
      "$1 : 2$",
      "$1 : 4$",
      "$2 : 1$",
      "$1 : 1$"
    ],
    correctAnswer: "$1 : 2$",
    explanation: "Initial numbers: $N_{X0} = N_{Y0} = N_0$.\\nDecay constants: $\\lambda_X = \\frac{\\ln 2}{1}$, $\\lambda_Y = \\frac{\\ln 2}{2}$, so $\\lambda_X / \\lambda_Y = 2$.\\nAfter $t = 4\\text{ h}$:\\n$N_X = N_0 (1/2)^4 = N_0 / 16$.\\n$N_Y = N_0 (1/2)^2 = N_0 / 4$.\\nRatio of activities:\\n$\\frac{A_X}{A_Y} = \\frac{\\lambda_X N_X}{\\lambda_Y N_Y} = \\frac{2 \\times (N_0/16)}{1 \\times (N_0/4)} = \\frac{2/16}{1/4} = \\frac{1/8}{1/4} = \\frac{4}{8} = \\frac{1}{2} = 1 : 2$."
  },
  {
    question: "Which of the following conservation laws is NOT strictly obeyed in a nuclear reaction?",
    options: [
      "Conservation of rest mass",
      "Conservation of total energy",
      "Conservation of electric charge",
      "Conservation of linear momentum"
    ],
    correctAnswer: "Conservation of rest mass",
    explanation: "Rest mass is NOT conserved independently in nuclear reactions; mass is converted into energy (or vice-versa) via $\\Delta E = \\Delta m \\cdot c^2$. Total energy (including rest mass energy), charge, and linear momentum are always strictly conserved."
  },
  {
    question: "The activity of a radioactive sample drops from $800\\text{ Bq}$ to $100\\text{ Bq}$ in $6\\text{ hours}$. The half-life of the radioactive substance is:",
    options: [
      "$2\\text{ hours}$",
      "$3\\text{ hours}$",
      "$1.5\\text{ hours}$",
      "$4\\text{ hours}$"
    ],
    correctAnswer: "$2\\text{ hours}$",
    explanation: "$\\frac{A}{A_0} = \\frac{100}{800} = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3 \\implies n = 3\\text{ half-lives}$.\\n$T_{1/2} = \\frac{t}{n} = \\frac{6\\text{ hours}}{3} = 2\\text{ hours}$."
  }
];

// 20 Numerical Questions
const numQuestions = [
  {
    question: "A stationary nucleus $^{210}_{84}\\text{Po}$ emits an $\\alpha$-particle with total $Q$-value of $5.40\\text{ MeV}$. The kinetic energy of the daughter $^{206}\\text{Pb}$ nucleus is $x\\text{ keV}$. Taking $K_Y = \\frac{4}{210} \\times 5.40\\text{ MeV} \\approx 0.103\\text{ MeV} = 103\\text{ keV}$, the value of $x$ to the nearest integer is ______ .",
    correctAnswer: "103",
    solution: "$K_Y = \\frac{4}{210} \\times 5400\\text{ keV} = \\frac{21600}{210} \\approx 102.86 \\approx 103\\text{ keV}$."
  },
  {
    question: "The half-life of a radioactive substance is $15\\text{ days}$. The time taken for $7/8$ of the original substance to disintegrate is ______ $\\text{days}$.",
    correctAnswer: "45",
    solution: "Remaining fraction is $1 - 7/8 = 1/8 = (1/2)^3 \\implies 3\\text{ half-lives}$.\\n$t = 3 \\times 15 = 45\\text{ days}$."
  },
  {
    question: "A radioactive nucleus undergoes decay such that after $60\\text{ days}$, its activity falls to $1/16$ of its initial value. The half-life of the nucleus is ______ $\\text{days}$.",
    correctAnswer: "15",
    solution: "$1/16 = (1/2)^4 \\implies 4\\text{ half-lives} = 60\\text{ days} \\implies T_{1/2} = 60/4 = 15\\text{ days}$."
  },
  {
    question: "In the decay chain $^{232}_{90}\\text{Th} \\to ^{208}_{82}\\text{Pb}$, the number of $\\alpha$-particles emitted is $N_\\alpha$. The value of $N_\\alpha$ is ______ .",
    correctAnswer: "6",
    solution: "$\\Delta A = 232 - 208 = 24$. Each $\\alpha$-particle reduces $A$ by $4$, so $N_\\alpha = 24 / 4 = 6$."
  },
  {
    question: "In the above decay chain $^{232}_{90}\\text{Th} \\to ^{208}_{82}\\text{Pb}$, the number of $\\beta^-$-particles emitted is $N_\\beta$. The value of $N_\\beta$ is ______ .",
    correctAnswer: "4",
    solution: "With $6$ $\\alpha$-particles, $Z$ decreases by $6 \\times 2 = 12$. Expected $Z = 90 - 12 = 78$. Final $Z = 82$, so $N_\\beta = 82 - 78 = 4$."
  },
  {
    question: "A radioactive isotope has a decay constant $\\lambda = 0.0693\\text{ day}^{-1}$. The half-life of the isotope is ______ $\\text{days}$.",
    correctAnswer: "10",
    solution: "$T_{1/2} = \\frac{0.693}{\\lambda} = \\frac{0.693}{0.0693} = 10\\text{ days}$."
  },
  {
    question: "The mean life of a radioactive isotope is $144\\text{ hours}$. The half-life of the isotope is approximately ______ $\\text{hours}$. (Take $\\ln 2 \\approx 0.693$; $144 \\times 0.693 = 99.79 \\approx 100$)",
    correctAnswer: "100",
    solution: "$T_{1/2} = \\tau \\ln 2 = 144 \\times 0.693 = 99.79\\text{ hours} \\approx 100\\text{ hours}$."
  },
  {
    question: "A nuclear reaction is represented by $^{9}_4\\text{Be} + ^{4}_2\\text{He} \\to ^{12}_6\\text{C} + X$. The mass number of particle $X$ is ______ .",
    correctAnswer: "1",
    solution: "By conservation of mass number: $9 + 4 = 12 + A_X \\implies A_X = 13 - 12 = 1$ (neutron, $^{1}_0n$)."
  },
  {
    question: "In the reaction $^{7}_3\\text{Li} + p \\to 2\\, ^{4}_2\\text{He}$, the atomic number of the product nucleus is ______ .",
    correctAnswer: "2",
    solution: "The product is helium-4 ($^4_2\\text{He}$), which has atomic number $Z = 2$."
  },
  {
    question: "The activity of a radioactive sample drops to $1/32$ of its initial value in $25\\text{ hours}$. The half-life of the sample is ______ $\\text{hours}$.",
    correctAnswer: "5",
    solution: "$1/32 = (1/2)^5 \\implies 5\\text{ half-lives} = 25\\text{ hours} \\implies T_{1/2} = 25/5 = 5\\text{ hours}$."
  },
  {
    question: "The threshold kinetic energy for an endoergic reaction with $|Q| = 3.0\\text{ MeV}$ initiated by a proton ($m = 1\\text{ u}$) on a stationary target ($M = 3\\text{ u}$) is ______ $\\text{MeV}$.",
    correctAnswer: "4",
    solution: "$K_{\\text{th}} = |Q|\\left(1 + \\frac{m}{M}\\right) = 3.0 \\times \\left(1 + \\frac{1}{3}\\right) = 3.0 \\times \\frac{4}{3} = 4.0\\text{ MeV}$."
  },
  {
    question: "After $4$ half-lives, the percentage of radioactive nuclei that have decayed is ______ $\\%$. (Round to nearest integer: $100 - 100/16 = 100 - 6.25 = 93.75 \\approx 94$)",
    correctAnswer: "94",
    solution: "Decayed fraction is $1 - (1/2)^4 = 1 - 1/16 = 15/16 = 93.75\\% \\approx 94\\%$."
  },
  {
    question: "A sample has an initial activity of $1600\\text{ Bq}$. After $3$ half-lives, its activity is ______ $\\text{Bq}$.",
    correctAnswer: "200",
    solution: "$A = \\frac{A_0}{2^3} = \\frac{1600}{8} = 200\\text{ Bq}$."
  },
  {
    question: "In an $\\alpha$-decay of $^{238}_{92}\\text{U}$ with $Q = 4.28\\text{ MeV}$, the kinetic energy of the emitted $\\alpha$-particle is approximately ______ $\\text{MeV}$. (Round to nearest integer: $\\frac{234}{238} \\times 4.28 \\approx 4.21 \\approx 4$)",
    correctAnswer: "4",
    solution: "$K_\\alpha = \\frac{234}{238} \\times 4.28 = 4.208\\text{ MeV} \\approx 4\\text{ MeV}$."
  },
  {
    question: "The number of half-lives required for a radioactive sample to reduce to less than $1\\%$ of its original activity is ______ . (Note: $2^6 = 64$, $2^7 = 128 > 100$)",
    correctAnswer: "7",
    solution: "$(1/2)^7 = 1/128 \\approx 0.0078 = 0.78\\% < 1\\%$. Thus $7$ half-lives are required."
  },
  {
    question: "A radioactive material has a half-life of $8\\text{ years}$. The fraction remaining after $24\\text{ years}$ is $1/x$. The value of $x$ is ______ .",
    correctAnswer: "8",
    solution: "$n = 24 / 8 = 3 \\implies (1/2)^3 = 1/8 \\implies x = 8$."
  },
  {
    question: "A nucleus $^{A}_{Z}X$ emits one $\\alpha$-particle and one $\\beta^-$-particle. The mass number of the resulting daughter nucleus decreases by ______ units.",
    correctAnswer: "4",
    solution: "$\\alpha$-emission reduces $A$ by $4$, and $\\beta^-$-emission does not change $A$. Hence $A$ decreases by $4$."
  },
  {
    question: "The decay constant of a radioactive substance is $\\lambda = 0.1\\text{ s}^{-1}$. Its mean life is ______ $\\text{seconds}$.",
    correctAnswer: "10",
    solution: "$\\tau = \\frac{1}{\\lambda} = \\frac{1}{0.1} = 10\\text{ seconds}$."
  },
  {
    question: "If $1\\text{ g}$ of a radioactive sample has activity $A_1$, the activity of $3\\text{ g}$ of the same sample at the same time is $x A_1$. The value of $x$ is ______ .",
    correctAnswer: "3",
    solution: "Activity is proportional to the number of radioactive atoms $N$: $A = \\lambda N$. Triple the mass means triple the atoms, so $x = 3$."
  },
  {
    question: "In the nuclear reaction $^{10}_5\\text{B} + ^{1}_0n \\to ^{7}_3\\text{Li} + X$, particle $X$ is an alpha particle ($^4_2\\text{He}$). The atomic number of particle $X$ is ______ .",
    correctAnswer: "2",
    solution: "$Z_X = 5 + 0 - 3 = 2$ (helium nucleus, $\\alpha$-particle)."
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

console.log(`Part 6 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);

const outPath = path.join(__dirname, 'data_jee_atoms_part6.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
