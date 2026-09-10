const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Mass defect and nuclear force";
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
    assertion: "The density of nuclear matter is roughly constant for all nuclei, independent of their mass number $A$.",
    reason: "Both the nuclear mass and the nuclear volume are directly proportional to the mass number $A$, making their ratio independent of $A$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The nuclear radius is $R = R_0 A^{1/3}$, so volume is $V = \\frac{4}{3}\\pi R_0^3 A \\propto A$. Nuclear mass is $M \\approx A m_N$. Hence density $\\rho = M/V = \\frac{3 m_N}{4\\pi R_0^3} \\approx 2.3\\times 10^{17}\\text{ kg/m}^3$, which is completely independent of mass number $A$."
  },
  {
    assertion: "The mass of an atomic nucleus is always strictly less than the sum of the masses of its constituent individual protons and neutrons.",
    reason: "When nucleons bind together to form a stable nucleus, energy equal to the binding energy is released, resulting in an equivalent loss of mass (mass defect $\\Delta m = E_b / c^2$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By Einstein's mass-energy equivalence $E = mc^2$, the release of binding energy upon nucleus formation causes a corresponding mass defect $\\Delta m = [Z m_p + (A - Z) m_n] - M(A, Z) > 0$."
  },
  {
    assertion: "Nuclear forces exhibit the property of saturation.",
    reason: "A nucleon inside a nucleus interacts strongly only with a limited number of its nearest neighbors, rather than with all nucleons in the nucleus.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Due to their short range (~$1-2\\text{ fm}$), nuclear forces saturate: adding more nucleons increases volume proportionally without significantly increasing the binding energy per nucleon beyond $A \\approx 30$."
  },
  {
    assertion: "The nuclear force between two protons is essentially equal in strength to the nuclear force between two neutrons at the same separation.",
    reason: "Nuclear forces are charge-independent; they act identically between $p-p, n-n$, and $p-n$ pairs (apart from the purely electromagnetic Coulomb repulsion between protons).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Experiments show that the strong nuclear interaction does not distinguish between protons and neutrons (charge independence of nuclear forces). The only difference between $p-p$ and $n-n$ interactions is the additional Coulomb repulsion between protons."
  },
  {
    assertion: "Nuclear forces become strongly repulsive when the distance between two nucleons is less than about $0.5\\text{ fm}$.",
    reason: "The repulsive core at very short distances prevents the nucleons from collapsing into one another, maintaining a stable nuclear volume.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The inter-nucleon potential has a deep attractive well around $r \\approx 1\\text{ fm}$, but for separations $r < 0.5-0.8\\text{ fm}$, the potential energy rises steeply, providing a repulsive hard core that preserves the finite size of nucleons."
  },
  {
    assertion: "The nuclear force is a non-central force.",
    reason: "The force between two nucleons depends not only on the distance between their centers, but also on the relative orientation of their intrinsic spins.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A central force acts purely along the line joining the centers and depends only on radial distance. The nuclear force contains a strong tensor component that depends on the direction of spin vectors $\\vec{s}_1, \\vec{s}_2$, making it strictly non-central."
  },
  {
    assertion: "Heavy nuclei contain significantly more neutrons than protons ($N > Z$).",
    reason: "As the number of protons increases, the cumulative long-range Coulomb repulsion between all proton pairs grows as $Z(Z-1)$, requiring extra neutrons to provide additional short-range attractive nuclear force without adding electric charge.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "While nuclear forces are short-range and saturate with neighbors, Coulomb repulsion is long-range ($1/r^2$) and acts between all $Z(Z-1)/2$ pairs. To maintain stability against Coulomb disruption, heavy nuclei require an excess of neutrons ($N/Z \\approx 1.5$ for $^{238}\\text{U}$)."
  },
  {
    assertion: "The radius of the nucleus $^{64}\\text{Cu}$ is approximately $4.8\\text{ fm}$.",
    reason: "Using $R = R_0 A^{1/3}$ with $R_0 = 1.2\\text{ fm}$, for $A = 64$ we have $R = 1.2 \\times (64)^{1/3} = 1.2 \\times 4 = 4.8\\text{ fm}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$R = R_0 A^{1/3} = 1.2\\text{ fm} \\times 4 = 4.8\\text{ fm}$. Both statements are true and (R) provides the exact mathematical calculation."
  },
  {
    assertion: "The ratio of the radii of $^{27}\\text{Al}$ and $^{125}\\text{Te}$ nuclei is $3 : 5$.",
    reason: "The nuclear radius is directly proportional to the cube root of the mass number: $\\frac{R_1}{R_2} = \\left(\\frac{A_1}{A_2}\\right)^{1/3}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$\\frac{R_{\\text{Al}}}{R_{\\text{Te}}} = \\left(\\frac{27}{125}\\right)^{1/3} = \\frac{3}{5}$. Both statements are true and (R) correctly explains (A)."
  },
  {
    assertion: "An atomic mass unit ($1\\text{ u}$) is equivalent to approximately $931.5\\text{ MeV}$ of energy.",
    reason: "According to Einstein's relation $E = mc^2$, multiplying $1\\text{ u} = 1.6605\\times 10^{-27}\\text{ kg}$ by $c^2$ and converting to $\\text{MeV}$ yields $931.5\\text{ MeV}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$E = (1.6605\\times 10^{-27}\\text{ kg}) \\times (2.9979\\times 10^8\\text{ m/s})^2 = 1.4924\\times 10^{-10}\\text{ J}$. Dividing by $1.6022\\times 10^{-13}\\text{ J/MeV}$ gives $931.49 \\approx 931.5\\text{ MeV}$."
  },
  {
    assertion: "The strong nuclear force is mediated by the exchange of pi-mesons between nucleons.",
    reason: "Hideki Yukawa proposed that the short range of the nuclear force ($~10^{-15}\\text{ m}$) arises from the finite rest mass of the exchange quantum (meson).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Yukawa's meson theory predicted that virtual pi-mesons ($\ m_\\pi \\approx 140\\text{ MeV}/c^2$) are exchanged between nucleons. The range of the force is related to the meson Compton wavelength: $r \\approx \\frac{\\hbar}{m_\\pi c} \\approx 1.4\\text{ fm}$."
  },
  {
    assertion: "A stable nucleus cannot be formed exclusively of protons without neutrons (except ordinary hydrogen $^1_1\\text{H}$).",
    reason: "Without neutrons, the repulsive electrostatic Coulomb force between two or more protons exceeds the attractive nuclear force at all separations.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The diproton ($^2\\text{He}$) is unbound because the Coulomb repulsion combined with the Pauli exclusion principle (forcing antiparallel spins with weaker nuclear attraction) makes the system energetically unstable. Neutrons are essential to dilute Coulomb repulsion and provide additional binding."
  },
  {
    assertion: "A free neutron is unstable and undergoes $\\beta$-decay, whereas a neutron bound inside a stable nucleus is stable.",
    reason: "Inside a stable nucleus, decay of a neutron into a proton is energetically forbidden because the resulting nucleus would have a higher total mass-energy due to Coulomb repulsion and nuclear energy levels.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "A free neutron decays via $n \\to p + e^- + \\bar{\\nu}_e$ with a mean lifetime of about $880\\text{ s}$ because $m_n > m_p + m_e$. Inside a nucleus, the deep nuclear potential well raises the energy requirement, preventing spontaneous decay unless the parent nucleus is neutron-rich."
  },
  {
    assertion: "The nuclear density of $^{238}\\text{U}$ is virtually identical to that of $^{12}\\text{C}$.",
    reason: "The nuclear radius varies as $A^{1/3}$, so volume varies as $A$, canceling the $A$-dependence in density $\\rho = M/V$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For any nucleus, $\\rho = \\frac{A m_N}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3 m_N}{4\\pi R_0^3} \\approx 2.3\\times 10^{17}\\text{ kg/m}^3$. Since both carbon and uranium have the same nuclear matter density, both statements are true and (R) explains (A)."
  },
  {
    assertion: "Nuclides with the same mass number $A$ but different atomic numbers $Z$ are called isobars.",
    reason: "Isobars contain the same total number of nucleons ($A = Z + N$), but differing numbers of protons and neutrons.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "By definition, isobars have identical mass number $A$ (e.g., $^{14}_6\\text{C}$ and $^{14}_7\\text{N}$). They have different atomic numbers ($Z$) and chemical properties, but the same total nucleon count."
  },
  {
    assertion: "Nuclides having the same number of neutrons are called isotones.",
    reason: "For isotones, the difference between mass number and atomic number ($A - Z$) is constant.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Isotones are nuclides with identical neutron number $N = A - Z$ (for example, $^{14}_6\\text{C}$ and $^{16}_8\\text{O}$, both having $N = 8$). Both statements are true and (R) correctly explains (A)."
  },
  {
    assertion: "The strong nuclear force is the strongest of all four fundamental forces in nature.",
    reason: "At a distance of $1\\text{ fm}$, the strong nuclear force is approximately $100$ times stronger than the electromagnetic force and $10^{38}$ times stronger than gravity.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Relative strengths at $\\approx 1\\text{ fm}$ are: Strong $\\sim 1$, Electromagnetic $\\sim 10^{-2}$, Weak $\\sim 10^{-6}$, Gravitational $\\sim 10^{-38}$. Thus the strong force is the strongest interaction in nature."
  },
  {
    assertion: "Mass defect can be directly converted into energy according to $\\Delta E = \\Delta m \\cdot c^2$.",
    reason: "Mass and energy are mutually interconvertible manifestations of the same underlying entity, as formulated in the special theory of relativity.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Einstein's mass-energy equivalence $E = mc^2$ establishes that mass is a concentrated form of energy. When nucleons bind, the released energy corresponds to an observable decrease in total rest mass."
  },
  {
    assertion: "The nuclear force between two nucleons does not depend on whether the nucleons are in a singlet ($S = 0$) or triplet ($S = 1$) spin state.",
    reason: "Nuclear forces are spin-independent central forces.",
    correctAnswer: "(A) is false but (R) is true", // wait, let's fix so standard
    explanation: "Both (A) and (R) are false because nuclear forces are strongly spin-dependent (for example, the deuteron exists only in the triplet spin state $S = 1$, while the singlet state $S = 0$ is unbound)."
  },
  {
    assertion: "The deuteron ($^2_1\\text{H}$) is bound only in the triplet state ($S = 1$), where nucleon spins are parallel.",
    reason: "The nuclear force between a proton and a neutron is stronger when their spins are parallel ($S = 1$) than when they are antiparallel ($S = 0$).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Nuclear forces are spin-dependent. The triplet state potential is sufficiently deep to support a bound state (the deuteron with $BE = 2.22\\text{ MeV}$), whereas the singlet state is too shallow to form a bound system."
  },
  {
    assertion: "The volume of a $^{125}\\text{Te}$ nucleus is approximately $4.63$ times the volume of a $^{27}\\text{Al}$ nucleus.",
    reason: "Nuclear volume is directly proportional to mass number $A$, so $V_{\\text{Te}} / V_{\\text{Al}} = 125 / 27 \\approx 4.63$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because $V = \\frac{4}{3}\\pi R_0^3 A$, the volume ratio is simply the ratio of their mass numbers: $125/27 \\approx 4.63$. Both statements are true and (R) explains (A)."
  },
  {
    assertion: "The packing fraction of a nucleus is defined as $f = \\frac{M - A}{A}$, where $M$ is isotopic mass in $\\text{u}$ and $A$ is mass number.",
    reason: "A negative packing fraction indicates that the isotopic mass is less than the mass number, signifying a stable, bound nucleus.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Packing fraction measures the fractional mass discrepancy per nucleon: $f = (M - A)/A$. When $f < 0$, mass is lost in forming the nucleus, indicating stability. Both statements are true and (R) explains (A)."
  },
  {
    assertion: "If a nucleus with mass number $A = 216$ splits into two equal fragments, the radius of each fragment is $R / 2^{1/3}$.",
    reason: "Nuclear radius is given by $R = R_0 A^{1/3}$; for half the mass number $A' = A/2$, $R' = R_0 (A/2)^{1/3} = R / 2^{1/3}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$R' = R_0 (A/2)^{1/3} = R_0 A^{1/3} \\times 2^{-1/3} = R / 2^{1/3}$. Both statements are true and (R) correctly explains (A)."
  },
  {
    assertion: "The electrostatic potential energy of two protons separated by $1\\text{ fm}$ inside a nucleus is positive.",
    reason: "Two like charges repel each other, so work must be done against the electrostatic repulsive force to bring them together from infinity.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$U_c = \\frac{1}{4\\pi\\varepsilon_0}\\frac{e^2}{r} > 0$. Bringing two like positive charges together increases electrostatic potential energy, contributing a positive (destabilizing) term to the nuclear energy."
  },
  {
    assertion: "In mirror nuclei (isobars with $Z$ and $N$ interchanged, such as $^7_3\\text{Li}$ and $^7_4\\text{Be}$), the difference in binding energy is due almost entirely to the Coulomb repulsion between protons.",
    reason: "The strong nuclear forces are charge-symmetric and charge-independent, so the nuclear contribution to the binding energy is identical for mirror nuclei.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Mirror nuclei have identical nuclear structure under charge symmetry ($3p+4n$ vs $4p+3n$). The only energy difference arises from the extra proton in $^7_4\\text{Be}$ experiencing Coulomb repulsion with the other protons."
  },
  {
    assertion: "The ratio of the nuclear radius of $^{8}\\text{Be}$ to that of $^{64}\\text{Cu}$ is $1 : 2$.",
    reason: "Nuclear radius scales as $A^{1/3}$; since $8^{1/3} = 2$ and $64^{1/3} = 4$, the ratio is $2 / 4 = 1/2$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$R_1 / R_2 = (8/64)^{1/3} = (1/8)^{1/3} = 1/2$. Both statements are true and (R) correctly explains (A)."
  }
];

// Fix AR 19 to proper options
arQuestions[18] = {
  assertion: "Nuclear force between two nucleons is an exchange force.",
  reason: "The interaction between nucleons is mediated by the continuous exchange of virtual mesons, transferring momentum and energy.",
  correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  explanation: "According to Yukawa's field theory, the nuclear force arises from the creation and absorption of virtual pi-mesons between nucleons, making it an exchange interaction."
};

// 7 Multiple Choice Questions
const mcqQuestions = [
  {
    question: "The ratio of the nuclear radius of $^{27}\\text{Al}$ to that of $^{64}\\text{Cu}$ is:",
    options: [
      "$3 : 4$",
      "$4 : 3$",
      "$9 : 16$",
      "$27 : 64$"
    ],
    correctAnswer: "$3 : 4$",
    explanation: "Using the nuclear radius formula $R = R_0 A^{1/3}$:\\n$\\frac{R_{\\text{Al}}}{R_{\\text{Cu}}} = \\left(\\frac{27}{64}\\right)^{1/3} = \\frac{3}{4} = 3 : 4$."
  },
  {
    question: "The mass defect for the nucleus of $^{4}_2\\text{He}$ is $0.0303\\text{ u}$. The binding energy of the helium nucleus is approximately:",
    options: [
      "$28.2\\text{ MeV}$",
      "$7.06\\text{ MeV}$",
      "$14.1\\text{ MeV}$",
      "$56.4\\text{ MeV}$"
    ],
    correctAnswer: "$28.2\\text{ MeV}$",
    explanation: "Binding energy $BE = \\Delta m \\times 931.5\\text{ MeV} = 0.0303 \\times 931.5 \\approx 28.22\\text{ MeV}$."
  },
  {
    question: "If a nucleus of mass number $A = 216$ splits into two nuclei of mass numbers $A_1 = 64$ and $A_2 = 152$, the ratio of their radii $R_1 / R_2$ is approximately:",
    options: [
      "$\\left(\\frac{64}{152}\\right)^{1/3}$",
      "$\\frac{64}{152}$",
      "$\\left(\\frac{64}{152}\\right)^{2/3}$",
      "$\\left(\\frac{152}{64}\\right)^{1/3}$"
    ],
    correctAnswer: "$\\left(\\frac{64}{152}\\right)^{1/3}$",
    explanation: "Nuclear radius is given by $R = R_0 A^{1/3}$. Therefore, $\\frac{R_1}{R_2} = \\left(\\frac{A_1}{A_2}\\right)^{1/3} = \\left(\\frac{64}{152}\\right)^{1/3}$."
  },
  {
    question: "Which of the following pairs represents a pair of isotones?",
    options: [
      "$^{14}_6\\text{C}$ and $^{16}_8\\text{O}$",
      "$^{12}_6\\text{C}$ and $^{14}_6\\text{C}$",
      "$^{14}_6\\text{C}$ and $^{14}_7\\text{N}$",
      "$^3_1\\text{H}$ and $^3_2\\text{He}$"
    ],
    correctAnswer: "$^{14}_6\\text{C}$ and $^{16}_8\\text{O}$",
    explanation: "Isotones have the same number of neutrons ($N = A - Z$):\\n- For $^{14}_6\\text{C}$: $N = 14 - 6 = 8$.\\n- For $^{16}_8\\text{O}$: $N = 16 - 8 = 8$.\\nBoth have $8$ neutrons, so they are isotones."
  },
  {
    question: "The ratio of the density of a $^{56}\\text{Fe}$ nucleus to that of a $^{238}\\text{U}$ nucleus is:",
    options: [
      "$1 : 1$",
      "$56 : 238$",
      "$238 : 56$",
      "$(56/238)^{1/3}$"
    ],
    correctAnswer: "$1 : 1$",
    explanation: "Nuclear density $\\rho = \\frac{M}{V} = \\frac{A m_N}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3 m_N}{4\\pi R_0^3}$ is constant for all nuclei, independent of mass number $A$. Thus the ratio is $1 : 1$."
  },
  {
    question: "The nuclear force between two nucleons is repulsive when the separation between them is:",
    options: [
      "Less than $0.8\\text{ fm}$",
      "Between $1\\text{ fm}$ and $2\\text{ fm}$",
      "Between $2\\text{ fm}$ and $4\\text{ fm}$",
      "Greater than $4\\text{ fm}$"
    ],
    correctAnswer: "Less than $0.8\\text{ fm}$",
    explanation: "The potential energy curve of two nucleons shows a steep repulsive core for separations $r < 0.8\\text{ fm}$ (preventing the collapse of the nucleus). For $0.8\\text{ fm} < r < 2\\text{ fm}$ it is attractive, and beyond $r \\approx 2.5\\text{ fm}$ it drops rapidly to zero."
  },
  {
    question: "Two nuclei have mass numbers in the ratio $1 : 8$. The ratio of their nuclear surface areas is:",
    options: [
      "$1 : 4$",
      "$1 : 2$",
      "$1 : 8$",
      "$1 : 16$"
    ],
    correctAnswer: "$1 : 4$",
    explanation: "Surface area is $S = 4\\pi R^2 \\propto R^2 \\propto (A^{1/3})^2 = A^{2/3}$.\\n$\\frac{S_1}{S_2} = \\left(\\frac{A_1}{A_2}\\right)^{2/3} = \\left(\\frac{1}{8}\\right)^{2/3} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4} = 1 : 4$."
  }
];

// 20 Numerical Questions
const numQuestions = [
  {
    question: "The ratio of the radius of the nucleus $^{125}\\text{Te}$ to that of $^{27}\\text{Al}$ is $x / 3$. The value of $x$ is ______ .",
    correctAnswer: "5",
    solution: "$\\frac{R_{\\text{Te}}}{R_{\\text{Al}}} = \\left(\\frac{125}{27}\\right)^{1/3} = \\frac{5}{3} \\implies x = 5$."
  },
  {
    question: "The nuclear radius of $^{8}\\text{Be}$ is $R_1$ and that of $^{64}\\text{Cu}$ is $R_2$. The ratio $R_2 / R_1$ is ______ .",
    correctAnswer: "2",
    solution: "$\\frac{R_2}{R_1} = \\left(\\frac{64}{8}\\right)^{1/3} = 8^{1/3} = 2$."
  },
  {
    question: "If a nucleus of mass number $A = 216$ splits into two equal fragments of mass number $A' = 108$, the ratio of the radius of the initial nucleus to the radius of one of the fragments is $2^{1/x}$. The value of $x$ is ______ .",
    correctAnswer: "3",
    solution: "$\\frac{R}{R'} = \\left(\\frac{216}{108}\\right)^{1/3} = 2^{1/3} \\implies x = 3$."
  },
  {
    question: "The mass defect of a nucleus is $0.02\\text{ u}$. The binding energy of the nucleus is approximately ______ $\\text{MeV}$. (Take $1\\text{ u} = 931.5\\text{ MeV}$; round to nearest integer: $0.02 \\times 931.5 = 18.63 \\approx 19$)",
    correctAnswer: "19",
    solution: "$BE = 0.02 \\times 931.5 = 18.63\\text{ MeV} \\approx 19\\text{ MeV}$."
  },
  {
    question: "Two nuclei have mass numbers in the ratio $1 : 27$. The ratio of their nuclear surface areas is $1 / x$. The value of $x$ is ______ .",
    correctAnswer: "9",
    solution: "$\\frac{S_1}{S_2} = \\left(\\frac{1}{27}\\right)^{2/3} = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9} \\implies x = 9$."
  },
  {
    question: "The ratio of the nuclear volume of $^{216}\\text{Po}$ to that of $^{27}\\text{Al}$ is ______ .",
    correctAnswer: "8",
    solution: "$\\frac{V_{\\text{Po}}}{V_{\\text{Al}}} = \\frac{216}{27} = 8$."
  },
  {
    question: "The radius of a $^{64}\\text{Cu}$ nucleus is $4.8\\text{ fm}$. The radius of a $^{125}\\text{Te}$ nucleus is ______ $\\text{fm}$.",
    correctAnswer: "6",
    solution: "$\\frac{R_{\\text{Te}}}{R_{\\text{Cu}}} = \\left(\\frac{125}{64}\\right)^{1/3} = \\frac{5}{4}$.\\n$R_{\\text{Te}} = 4.8 \\times \\frac{5}{4} = 6.0\\text{ fm}$."
  },
  {
    question: "The ratio of the radius of a nucleus of mass number $A_1 = 1$ (proton) to that of a nucleus of mass number $A_2 = 1000$ is $1 / x$. The value of $x$ is ______ .",
    correctAnswer: "10",
    solution: "$\\frac{R_1}{R_2} = \\left(\\frac{1}{1000}\\right)^{1/3} = \\frac{1}{10} \\implies x = 10$."
  },
  {
    question: "A heavy nucleus with mass number $A = 512$ splits into two fragments with mass numbers $A_1 = 64$ and $A_2 = 448$. The ratio of the radius of the parent nucleus to the radius of the smaller fragment ($A_1 = 64$) is ______ .",
    correctAnswer: "2",
    solution: "$\\frac{R_{\\text{parent}}}{R_1} = \\left(\\frac{512}{64}\\right)^{1/3} = 8^{1/3} = 2$."
  },
  {
    question: "The energy equivalent of $1\\text{ gram}$ of matter is $x \\times 10^{13}\\text{ J}$. The value of $x$ is ______ . (Take $c = 3\\times 10^8\\text{ m/s}$)",
    correctAnswer: "9",
    solution: "$E = mc^2 = (10^{-3}\\text{ kg}) \\times (3\\times 10^8\\text{ m/s})^2 = 10^{-3} \\times 9\\times 10^{16} = 9\\times 10^{13}\\text{ J} \\implies x = 9$."
  },
  {
    question: "Two nuclei with mass numbers $A_1 = 8$ and $A_2 = 27$ have nuclear radii $R_1$ and $R_2$. The ratio of their nuclear volumes $V_2 / V_1$ is $27 / 8$. The ratio of their radii $R_2 / R_1$ is $3 / x$. The value of $x$ is ______ .",
    correctAnswer: "2",
    solution: "$\\frac{R_2}{R_1} = \\left(\\frac{27}{8}\\right)^{1/3} = \\frac{3}{2} \\implies x = 2$."
  },
  {
    question: "The mass of a neutron is $1.00866\\text{ u}$ and that of a proton is $1.00728\\text{ u}$. For a deuteron nucleus of mass $2.01355\\text{ u}$, the mass defect is approximately $0.0024\\text{ u}$. The binding energy of the deuteron is approximately ______ $\\text{MeV}$. (Round to nearest integer: $0.0024 \\times 931.5 \\approx 2.23 \\approx 2$)",
    correctAnswer: "2",
    solution: "$BE = \\Delta m \\times 931.5 = (1.00866 + 1.00728 - 2.01355) \\times 931.5 = 0.00239 \\times 931.5 = 2.226\\text{ MeV} \\approx 2\\text{ MeV}$."
  },
  {
    question: "The ratio of the surface area of a $^{64}\\text{Zn}$ nucleus to that of a $^{125}\\text{Te}$ nucleus is $\\left(\\frac{4}{5}\\right)^x$. The value of $x$ is ______ .",
    correctAnswer: "2",
    solution: "$\\frac{S_1}{S_2} = \\left(\\frac{64}{125}\\right)^{2/3} = \\left(\\frac{4}{5}\\right)^2 \\implies x = 2$."
  },
  {
    question: "A nucleus of mass number $A = 64$ has a nuclear radius of $4.8\\text{ fm}$. The constant $R_0$ in the empirical formula $R = R_0 A^{1/3}$ is $x\\text{ fm}$. The value of $10x$ is ______ .",
    correctAnswer: "12",
    solution: "$R_0 = \\frac{R}{A^{1/3}} = \\frac{4.8}{64^{1/3}} = \\frac{4.8}{4} = 1.2\\text{ fm} \\implies 10x = 12$."
  },
  {
    question: "The ratio of the nuclear density of $^{12}\\text{C}$ to that of $^{208}\\text{Pb}$ is ______ .",
    correctAnswer: "1",
    solution: "Nuclear density is constant for all nuclei: $\\rho_{\\text{C}} / \\rho_{\\text{Pb}} = 1$."
  },
  {
    question: "The mass defect of an alpha particle ($^4_2\\text{He}$) is $0.0303\\text{ u}$. The binding energy per nucleon of the alpha particle is ______ $\\text{MeV}$. (Round to nearest integer: $28.2 / 4 = 7.05 \\approx 7$)",
    correctAnswer: "7",
    solution: "Total $BE = 0.0303 \\times 931.5 = 28.22\\text{ MeV}$.\\nBinding energy per nucleon $BE / A = \\frac{28.22}{4} = 7.055\\text{ MeV} \\approx 7\\text{ MeV}$."
  },
  {
    question: "A nucleus with mass number $A = 27$ has radius $R_1$. A nucleus with mass number $A = 64$ has radius $R_2$. The ratio $(R_2 / R_1)^3$ is $64 / x$. The value of $x$ is ______ .",
    correctAnswer: "27",
    solution: "$\\left(\\frac{R_2}{R_1}\\right)^3 = \\frac{A_2}{A_1} = \\frac{64}{27} \\implies x = 27$."
  },
  {
    question: "The ratio of the nuclear radius of $^{1}\\text{H}$ to that of $^{8}\\text{He}$ is $1 / x$. The value of $x$ is ______ .",
    correctAnswer: "2",
    solution: "$\\frac{R_1}{R_2} = \\left(\\frac{1}{8}\\right)^{1/3} = \\frac{1}{2} \\implies x = 2$."
  },
  {
    question: "If the nuclear radius of a nucleus is $R = 3.6\\text{ fm}$ and $R_0 = 1.2\\text{ fm}$, the mass number $A$ of the nucleus is ______ .",
    correctAnswer: "27",
    solution: "$A^{1/3} = \\frac{R}{R_0} = \\frac{3.6}{1.2} = 3 \\implies A = 3^3 = 27$."
  },
  {
    question: "The energy released when a mass of $2\\text{ amu}$ is completely converted into energy is ______ $\\text{MeV}$. (Take $1\\text{ amu} = 931.5\\text{ MeV}$; round to nearest integer: $2 \\times 931.5 = 1863$)",
    correctAnswer: "1863",
    solution: "$E = 2 \\times 931.5 = 1863\\text{ MeV}$."
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

console.log(`Part 4 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);

const outPath = path.join(__dirname, 'data_jee_atoms_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
