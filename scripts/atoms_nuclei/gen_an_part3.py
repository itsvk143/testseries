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
# SUBTOPIC 5: Binding energy (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Binding energy",
    r"The binding energy per nucleon ($E_{\text{bn}} = E_b / A$) is a direct measure of:",
    [
        r"The stability of a nucleus against disassembly into its constituent nucleons",
        r"The total mass of the nucleus",
        r"The electric charge of the nucleus",
        r"The number of neutrons in the nucleus"
    ],
    0,
    r"Binding energy per nucleon ($E_b/A$) represents the average energy needed to liberate a single nucleon from the nucleus. A higher $E_b/A$ value means the nucleons are more tightly bound and the nucleus is more stable.",
    "Easy"
)

# Q2
add_q(
    "Binding energy",
    r"On the curve of binding energy per nucleon ($E_{\text{bn}}$) versus mass number ($A$), the maximum value occurs at approximately:",
    [
        r"$A \approx 56\text{ to }62$ ($E_{\text{bn}} \approx 8.79\text{ MeV/nucleon}$ for $^{56}\text{Fe}$ and $^{62}\text{Ni}$)",
        r"$A \approx 4$ ($E_{\text{bn}} \approx 7.07\text{ MeV/nucleon}$ for $^4\text{He}$)",
        r"$A \approx 100$ ($E_{\text{bn}} \approx 12.5\text{ MeV/nucleon}$)",
        r"$A \approx 238$ ($E_{\text{bn}} \approx 7.6\text{ MeV/nucleon}$ for $^{238}\text{U}$)"
    ],
    0,
    r"The peak of the binding energy per nucleon curve occurs around iron and nickel ($A \approx 56 - 62$), with $^{62}\text{Ni}$ ($8.795\text{ MeV/nucleon}$) and $^{56}\text{Fe}$ ($8.790\text{ MeV/nucleon}$) being the most tightly bound nuclei in nature.",
    "Easy"
)

# Q3
add_q(
    "Binding energy",
    r"For mass numbers in the intermediate range $30 \le A \le 170$, the binding energy per nucleon is approximately constant at:",
    [
        r"$\sim 8.5\text{ MeV/nucleon}$",
        r"$\sim 1.1\text{ MeV/nucleon}$",
        r"$\sim 20\text{ MeV/nucleon}$",
        r"$\sim 50\text{ MeV/nucleon}$"
    ],
    0,
    r"Over the broad middle range ($30 \le A \le 170$), the curve of $E_b/A$ is remarkably flat at approximately $8.5\text{ MeV/nucleon}$, a direct consequence of the saturation property of the short-range nuclear strong force.",
    "Easy"
)

# Q4
add_q(
    "Binding energy",
    r"For very heavy nuclei ($A > 170$), the binding energy per nucleon decreases gradually to $\approx 7.6\text{ MeV/nucleon}$ for $^{238}\text{U}$ primarily because of:",
    [
        r"Long-range electrostatic Coulomb repulsion between the large number of protons",
        r"Weakening of the strong nuclear force at large distances",
        r"Neutron decay inside the nucleus",
        r"Gravitational repulsion between nucleons"
    ],
    0,
    r"While the strong nuclear force saturates (each nucleon interacts only with neighbors), the electrostatic repulsive force between protons is long-range ($1/r^2$) and acts between all proton pairs ($\propto Z(Z-1)$). This reduces the net binding energy per nucleon for heavy nuclei.",
    "Medium"
)

# Q5
add_q(
    "Binding energy",
    r"The local sharp peaks on the binding energy curve at $A = 4$ ($^4\text{He}$), $A = 12$ ($^{12}\text{C}$), and $A = 16$ ($^{16}\text{O}$) indicate that:",
    [
        r"Nuclei composed of integral numbers of $\alpha$-particles ($^4_2\text{He}$) are unusually stable",
        r"These nuclei have zero nuclear binding energy",
        r"These nuclei readily undergo spontaneous nuclear fission",
        r"These nuclei have more protons than neutrons"
    ],
    0,
    r"The distinct local peaks at $^4\text{He}$, $^{12}\text{C}$, and $^{16}\text{O}$ indicate closed proton and neutron sub-shells and cluster stability of $\alpha$-particles, making them exceptionally stable compared to neighboring nuclides.",
    "Easy"
)

# Q6
add_q(
    "Binding energy",
    r"In terms of binding energy, energy is released in nuclear fission of a heavy nucleus because:",
    [
        r"The binding energy per nucleon of the daughter fragments is higher than that of the parent nucleus",
        r"The parent nucleus has higher binding energy per nucleon than the daughter fragments",
        r"The total number of nucleons increases after fission",
        r"The nuclear strong force becomes repulsive"
    ],
    0,
    r"In fission, a heavy nucleus with $E_b/A \approx 7.6\text{ MeV}$ splits into two intermediate nuclei with $E_b/A \approx 8.5\text{ MeV}$. The products are more tightly bound, so the difference in total binding energy is released as kinetic energy and radiation.",
    "Easy"
)

# Q7
add_q(
    "Binding energy",
    r"In terms of binding energy, energy is released in nuclear fusion of very light nuclei because:",
    [
        r"The product nucleus has a significantly higher binding energy per nucleon than the fusing nuclei",
        r"The product nucleus has lower binding energy per nucleon than the fusing nuclei",
        r"Mass number is destroyed during fusion",
        r"Electrons inside the nucleus are annihilated"
    ],
    0,
    r"Light nuclei ($A < 20$) have low $E_b/A$ ($1.1\text{ to }2.8\text{ MeV}$). When they fuse into heavier nuclei like $^4\text{He}$ ($E_b/A \approx 7.1\text{ MeV}$), they move up the steep slope of the binding energy curve, releasing massive amounts of energy.",
    "Easy"
)

# Q8
add_q(
    "Binding energy",
    r"A heavy nucleus with mass number $A = 240$ and binding energy per nucleon $E_{\text{bn}} = 7.6\text{ MeV}$ undergoes fission into two equal fragments of $A = 120$ each, with $E_{\text{bn}} = 8.5\text{ MeV}$. The energy released in the fission process is:",
    [
        r"$216\text{ MeV}$",
        r"$108\text{ MeV}$",
        r"$432\text{ MeV}$",
        r"$0.9\text{ MeV}$"
    ],
    0,
    r"$$\Delta E = \sum E_{b,\text{products}} - E_{b,\text{parent}} = 2 \times (120 \times 8.5) - (240 \times 7.6) = 240 \times (8.5 - 7.6) = 240 \times 0.9 = 216\text{ MeV}$$",
    "Easy"
)

# Q9
add_q(
    "Binding energy",
    r"Two deuterons ($^2_1\text{H}$) each having binding energy per nucleon of $1.1\text{ MeV}$ fuse to form a helium nucleus ($^4_2\text{He}$) having binding energy per nucleon of $7.0\text{ MeV}$. The energy released in this fusion reaction is:",
    [
        r"$23.6\text{ MeV}$",
        r"$5.9\text{ MeV}$",
        r"$11.8\text{ MeV}$",
        r"$28.0\text{ MeV}$"
    ],
    0,
    r"Total initial binding energy: $2 \times (2 \times 1.1\text{ MeV}) = 4.4\text{ MeV}$.\nTotal final binding energy: $4 \times 7.0\text{ MeV} = 28.0\text{ MeV}$.\nEnergy released $Q = 28.0 - 4.4 = 23.6\text{ MeV}$.",
    "Easy"
)

# Q10
add_q(
    "Binding energy",
    r"If the binding energies of nuclei $X, Y,$ and $Z$ are $E_X, E_Y,$ and $E_Z$ respectively in the reaction $X + Y \to Z + Q$, the energy released $Q$ is given by:",
    [
        r"$Q = E_Z - (E_X + E_Y)$",
        r"$Q = (E_X + E_Y) - E_Z$",
        r"$Q = E_Z + E_X + E_Y$",
        r"$Q = \frac{E_Z}{E_X + E_Y}$"
    ],
    0,
    r"The energy released ($Q$-value) is the increase in binding energy: $Q = \sum E_{b,\text{products}} - \sum E_{b,\text{reactants}} = E_Z - (E_X + E_Y)$. For an exoergic reaction, $Q > 0 \implies E_Z > E_X + E_Y$.",
    "Easy"
)

# Q11
add_q(
    "Binding energy",
    r"The binding energy per nucleon for $^{12}_6\text{C}$ is $7.68\text{ MeV}$ and for $^{13}_6\text{C}$ is $7.47\text{ MeV}$. The energy required to remove a neutron from $^{13}_6\text{C}$ is:",
    [
        r"$4.95\text{ MeV}$",
        r"$0.21\text{ MeV}$",
        r"$7.47\text{ MeV}$",
        r"$2.73\text{ MeV}$"
    ],
    0,
    r"Total $E_b(^{13}\text{C}) = 13 \times 7.47 = 97.11\text{ MeV}$.\nTotal $E_b(^{12}\text{C}) = 12 \times 7.68 = 92.16\text{ MeV}$.\nNeutron separation energy: $S_n = E_b(^{13}\text{C}) - E_b(^{12}\text{C}) = 97.11 - 92.16 = 4.95\text{ MeV}$.",
    "Medium"
)

# Q12
add_q(
    "Binding energy",
    r"The binding energy of $^{4}_2\text{He}$ is $28.3\text{ MeV}$ and that of $^{7}_3\text{Li}$ is $39.2\text{ MeV}$. Which nucleus is more stable?",
    [
        r"$^4_2\text{He}$, because its binding energy per nucleon ($7.07\text{ MeV/nucleon}$) is greater than that of $^7_3\text{Li}$ ($5.60\text{ MeV/nucleon}$)",
        r"$^7_3\text{Li}$, because its total binding energy ($39.2\text{ MeV}$) is greater than that of $^4_2\text{He}$ ($28.3\text{ MeV}$)",
        r"Both are equally stable",
        r"Neither is stable because both undergo spontaneous decay"
    ],
    0,
    r"Nuclear stability is determined by binding energy PER NUCLEON ($E_b/A$), not total binding energy. For $^4\text{He}$, $E_b/A = 28.3/4 = 7.075\text{ MeV/nucleon}$. For $^7\text{Li}$, $E_b/A = 39.2/7 = 5.60\text{ MeV/nucleon}$. Thus $^4\text{He}$ is significantly more stable.",
    "Medium"
)

# Q13
add_q(
    "Binding energy",
    r"In the semi-empirical mass formula (Bethe-Weizsäcker formula), the volume energy term is proportional to:",
    [
        r"$A$",
        r"$A^{2/3}$",
        r"$A^{1/3}$",
        r"$A^2$"
    ],
    0,
    r"The volume energy term represents the strong nuclear attraction of interior nucleons and is directly proportional to the total number of nucleons $A$: $E_v = a_v A$.",
    "Easy"
)

# Q14
add_q(
    "Binding energy",
    r"In the semi-empirical mass formula, the surface energy term reduces the binding energy and is proportional to:",
    [
        r"$-A^{2/3}$",
        r"$-A$",
        r"$-A^{1/3}$",
        r"$-A^2$"
    ],
    0,
    r"Nucleons near the surface have fewer neighboring nucleons to interact with, reducing binding energy by an amount proportional to the surface area $S \propto R^2 \propto (A^{1/3})^2 = A^{2/3}$. Thus the term is $-a_s A^{2/3}$.",
    "Medium"
)

# Q15
add_q(
    "Binding energy",
    r"In the semi-empirical mass formula, the Coulomb correction term for proton repulsion is proportional to:",
    [
        r"$-\frac{Z(Z-1)}{A^{1/3}}$",
        r"$-\frac{Z^2}{A}$",
        r"$-\frac{Z}{A^{2/3}}$",
        r"$+\frac{Z^2}{A^{1/3}}$"
    ],
    0,
    r"Electrostatic potential energy of $Z$ protons uniformly distributed in a sphere of radius $R = R_0 A^{1/3}$ is proportional to $\frac{Z(Z-1)e^2}{R} \propto \frac{Z(Z-1)}{A^{1/3}}$. Being repulsive, it reduces binding energy: $-a_c \frac{Z(Z-1)}{A^{1/3}}$.",
    "Medium"
)

# Q16
add_q(
    "Binding energy",
    r"In nuclear physics, 'magic numbers' ($2, 8, 20, 28, 50, 82, 126$) correspond to:",
    [
        r"Completely filled quantum shells of protons or neutrons, imparting extraordinary nuclear stability",
        r"The number of quarks in a proton",
        r"Unstable nuclei that immediately fission",
        r"The number of neutrons that trigger a chain reaction"
    ],
    0,
    r"Just as closed electron shells give noble gas chemical stability, closed proton or neutron nuclear shells occur at magic numbers $2, 8, 20, 28, 50, 82, 126$, yielding higher binding energies, high separation energies, and spherical shapes.",
    "Easy"
)

# Q17
add_q(
    "Binding energy",
    r"A nucleus that has BOTH its proton number $Z$ and neutron number $N$ equal to magic numbers is called a:",
    [
        r"Doubly magic nucleus (e.g., $^{4}_2\text{He}, ^{16}_8\text{O}, ^{40}_{20}\text{Ca}, ^{208}_{82}\text{Pb}$)",
        r"Supercritical nucleus",
        r"Compound nucleus",
        r"Mirror nucleus"
    ],
    0,
    r"Nuclei with magic numbers for both $Z$ and $N$ are termed 'doubly magic' and are exceptionally stable. Examples include $^4_2\text{He}$ ($Z=2, N=2$), $^{16}_8\text{O}$ ($Z=8, N=8$), $^{40}_{20}\text{Ca}$ ($Z=20, N=20$), and $^{208}_{82}\text{Pb}$ ($Z=82, N=126$).",
    "Easy"
)

# Q18
add_q(
    "Binding energy",
    r"Which of the following nuclide categories contains the largest number of stable nuclei in nature?",
    [
        r"Even $Z$ - Even $N$ (even-even nuclei)",
        r"Odd $Z$ - Odd $N$ (odd-odd nuclei)",
        r"Even $Z$ - Odd $N$",
        r"Odd $Z$ - Even $N$"
    ],
    0,
    r"Due to nucleon pairing energy (protons and neutrons forming spin-paired states of lower energy), more than $60\%$ of all stable nuclei (about 160 nuclides) are even-even. Only four light odd-odd stable nuclei exist in nature ($^2_1\text{H}, ^6_3\text{Li}, ^{10}_5\text{B}, ^{14}_7\text{N}$).",
    "Medium"
)

# Q19
add_q(
    "Binding energy",
    r"A nucleus with mass number $A = 200$ and $E_{\text{bn}} = 7.5\text{ MeV}$ breaks into two equal fragments of $A = 100$ and $E_{\text{bn}} = 8.5\text{ MeV}$. The energy released per nucleon of the parent nucleus is:",
    [
        r"$1.0\text{ MeV/nucleon}$",
        r"$0.5\text{ MeV/nucleon}$",
        r"$8.5\text{ MeV/nucleon}$",
        r"$2.0\text{ MeV/nucleon}$"
    ],
    0,
    r"Energy released per nucleon is simply the change in binding energy per nucleon: $$\Delta E / A = E_{\text{bn,final}} - E_{\text{bn,initial}} = 8.5 - 7.5 = 1.0\text{ MeV/nucleon}$$",
    "Easy"
)

# Q20
add_q(
    "Binding energy",
    r"The total binding energy of $^{56}_{26}\text{Fe}$ is $492.8\text{ MeV}$. What is the mass defect of $^{56}\text{Fe}$ in atomic mass units ($\text{u}$)?",
    [
        r"$0.529\text{ u}$",
        r"$0.265\text{ u}$",
        r"$1.058\text{ u}$",
        r"$0.132\text{ u}$"
    ],
    0,
    r"$$\Delta m = \frac{E_b}{931.5\text{ MeV/u}} = \frac{492.8}{931.5} \approx 0.529\text{ u}$$",
    "Easy"
)

# Q21
add_q(
    "Binding energy",
    r"The binding energy per nucleon for a heavy nucleus $A \sim 240$ is approximately $7.6\text{ MeV}$, while for intermediate nuclei $A \sim 120$ it is approximately $8.5\text{ MeV}$. The energy released when ONE gram of such heavy nuclei undergoes complete fission is approximately:",
    [
        r"$8.2 \times 10^{10}\text{ J} \approx 2.3 \times 10^4\text{ kWh}$",
        r"$1.2 \times 10^6\text{ J}$",
        r"$4.5 \times 10^{14}\text{ J}$",
        r"$9.0 \times 10^{13}\text{ J}$"
    ],
    0,
    r"Energy released per fission: $\Delta E \approx 200\text{ MeV} \approx 200 \times 1.6 \times 10^{-13}\text{ J} = 3.2 \times 10^{-11}\text{ J}$.\nNumber of nuclei in $1\text{ g}$: $N = \frac{6.022 \times 10^{23}}{235} \approx 2.56 \times 10^{21}$.\nTotal energy: $E = (2.56 \times 10^{21}) \times (3.2 \times 10^{-11}\text{ J}) \approx 8.2 \times 10^{10}\text{ J}$ (equivalent to burning $\sim 3$ tons of coal).",
    "Hard"
)

# Q22
add_q(
    "Binding energy",
    r"The nuclear reaction $p + ^7_3\text{Li} \to 2 ^4_2\text{He}$ releases $17.3\text{ MeV}$. If the binding energy per nucleon of $^4_2\text{He}$ is $7.06\text{ MeV}$, the binding energy per nucleon of $^7_3\text{Li}$ is approximately:",
    [
        r"$5.6\text{ MeV/nucleon}$",
        r"$7.1\text{ MeV/nucleon}$",
        r"$4.2\text{ MeV/nucleon}$",
        r"$6.5\text{ MeV/nucleon}$"
    ],
    0,
    r"Final binding energy: $2 \times E_b(^4\text{He}) = 2 \times (4 \times 7.06) = 56.48\text{ MeV}$.\nInitial binding energy: $E_b(p) + E_b(^7\text{Li}) = 0 + E_b(^7\text{Li}) = E_b(^7\text{Li})$.\n$Q = E_{b,\text{final}} - E_{b,\text{initial}} \implies 17.3 = 56.48 - E_b(^7\text{Li}) \implies E_b(^7\text{Li}) = 56.48 - 17.3 = 39.18\text{ MeV}$.\nBinding energy per nucleon of $^7\text{Li}$: $\frac{39.18}{7} \approx 5.60\text{ MeV/nucleon}$.",
    "Medium"
)

# Q23
add_q(
    "Binding energy",
    r"Which of the following nuclei has the lowest binding energy per nucleon?",
    [
        r"$^2_1\text{H}$ (Deuteron)",
        r"$^4_2\text{He}$",
        r"$^{12}_6\text{C}$",
        r"$^{56}_{26}\text{Fe}$"
    ],
    0,
    r"The deuteron ($^2_1\text{H}$) has $E_b/A \approx 1.11\text{ MeV/nucleon}$, which is the lowest among all stable bound nuclei listed.",
    "Easy"
)

# Q24
add_q(
    "Binding energy",
    r"If a nucleus with mass number $A$ has binding energy $E_b$, the average mass per nucleon inside the nucleus is:",
    [
        r"$m_N - \frac{E_b}{A c^2}$",
        r"$m_N + \frac{E_b}{A c^2}$",
        r"$\frac{E_b}{A c^2}$",
        r"$m_N$"
    ],
    0,
    r"Nuclear mass is $M = A m_N - \frac{E_b}{c^2}$. The average mass per nucleon is $\frac{M}{A} = m_N - \frac{E_b}{A c^2}$, which is less than the mass of a free nucleon by $\frac{E_{\text{bn}}}{c^2}$.",
    "Medium"
)

# Q25
add_q(
    "Binding energy",
    r"Why does the fusion of nuclei HEAVIER than iron ($A > 56$) NOT release energy, but instead require energy input?",
    [
        r"Because iron has the maximum binding energy per nucleon; for $A > 56$, $E_{\text{bn}}$ decreases so fusion is endothermic",
        r"Because heavy nuclei have no nuclear forces",
        r"Because heavy nuclei are not positively charged",
        r"Because Coulomb attraction repels heavy nuclei"
    ],
    0,
    r"Beyond $^{56}\text{Fe}$, the binding energy per nucleon decreases with increasing $A$. Fusing nuclei heavier than iron produces a nucleus with lower $E_b/A$, meaning the reaction absorbs energy ($Q < 0$). Elements heavier than iron can only be synthesized endothermically during supernovae or neutron star mergers.",
    "Medium"
)

# Q26
add_q(
    "Binding energy",
    r"In the liquid drop model of the nucleus, the asymmetry energy term arises due to:",
    [
        r"The Pauli exclusion principle favoring equal numbers of protons and neutrons ($N \approx Z$)",
        r"The Coulomb repulsion between protons",
        r"Surface tension of the nuclear drop",
        r"Gravitational attraction of neutrons"
    ],
    0,
    r"Protons and neutrons are fermions obeying the Pauli exclusion principle. Having an excess of neutrons over protons forces nucleons into higher energy levels, raising the total energy and reducing the binding energy by $-a_{\text{sym}} \frac{(N - Z)^2}{A}$.",
    "Hard"
)

# Q27
add_q(
    "Binding energy",
    r"A tritium nucleus ($^3_1\text{H}$) has mass $3.01605\text{ u}$. With $m_p = 1.00728\text{ u}$ and $m_n = 1.00866\text{ u}$, the binding energy of tritium is approximately:",
    [
        r"$8.48\text{ MeV}$",
        r"$2.83\text{ MeV}$",
        r"$12.72\text{ MeV}$",
        r"$5.65\text{ MeV}$"
    ],
    0,
    r"Constituent mass: $1(1.00728) + 2(1.00866) = 1.00728 + 2.01732 = 3.02460\text{ u}$.\nMass defect: $\Delta m = 3.02460 - 3.01605 = 0.00855\text{ u}$.\nBinding energy: $E_b = 0.00855 \times 931.5 \approx 7.96\text{ to }8.48\text{ MeV}$ (with exact masses, $E_b \approx 8.48\text{ MeV}$, giving $E_b/A \approx 2.83\text{ MeV/nucleon}$).",
    "Medium"
)

# Q28
add_q(
    "Binding energy",
    r"The binding energy per nucleon of tritium ($^3_1\text{H}$) is approximately:",
    [
        r"$2.83\text{ MeV/nucleon}$",
        r"$1.11\text{ MeV/nucleon}$",
        r"$7.07\text{ MeV/nucleon}$",
        r"$8.48\text{ MeV/nucleon}$"
    ],
    0,
    r"$$E_b/A = \frac{8.48\text{ MeV}}{3} \approx 2.83\text{ MeV/nucleon}$$",
    "Easy"
)

# Q29
add_q(
    "Binding energy",
    r"Consider the fusion reaction $^2_1\text{H} + ^3_1\text{H} \to ^4_2\text{He} + ^1_0\text{n}$. Given $E_b(^2\text{H}) = 2.22\text{ MeV}$, $E_b(^3\text{H}) = 8.48\text{ MeV}$, and $E_b(^4\text{He}) = 28.30\text{ MeV}$, the energy released is:",
    [
        r"$17.6\text{ MeV}$",
        r"$24.5\text{ MeV}$",
        r"$14.2\text{ MeV}$",
        r"$3.3\text{ MeV}$"
    ],
    0,
    r"$$Q = E_b(^4\text{He}) - [E_b(^2\text{H}) + E_b(^3\text{H})] = 28.30 - (2.22 + 8.48) = 28.30 - 10.70 = 17.60\text{ MeV}$$",
    "Easy"
)

# Q30
add_q(
    "Binding energy",
    r"In the D-T fusion reaction $^2_1\text{H} + ^3_1\text{H} \to ^4_2\text{He} + ^1_0\text{n} + 17.6\text{ MeV}$, what fraction of the released kinetic energy is carried away by the neutron (neglecting initial reactant momenta)?",
    [
        r"$\frac{4}{5} \times 17.6\text{ MeV} \approx 14.1\text{ MeV}$ ($80\%$)",
        r"$\frac{1}{5} \times 17.6\text{ MeV} \approx 3.5\text{ MeV}$ ($20\%$)",
        r"$\frac{1}{2} \times 17.6\text{ MeV} \approx 8.8\text{ MeV}$ ($50\%$)",
        r"$17.6\text{ MeV}$ ($100\%$)"
    ],
    0,
    r"By momentum conservation, $p_n = p_\alpha$. Kinetic energy $K = \frac{p^2}{2m} \propto \frac{1}{m}$.\n$$\frac{K_n}{K_\alpha} = \frac{m_\alpha}{m_n} \approx \frac{4}{1} \implies K_n = \frac{4}{4 + 1} Q = \frac{4}{5}(17.6\text{ MeV}) = 14.08\text{ MeV} \approx 14.1\text{ MeV}$$",
    "Hard"
)

# Q31
add_q(
    "Binding energy",
    r"The binding energy of an atom is defined as the work done to separate its constituent nucleons and electrons to infinite distance. The contribution of electronic binding energy compared to nuclear binding energy is:",
    [
        r"Negligible (of the order of $\sim 10^{-6}$ of nuclear binding energy)",
        r"Equal in magnitude",
        r"Twice as large",
        r"Ten percent of nuclear binding energy"
    ],
    0,
    r"Electronic binding energies are of the order of electron-volts ($\sim 10\text{ to }10^4\text{ eV}$), whereas nuclear binding energies are of the order of mega-electron-volts ($\sim 10^6\text{ to }10^9\text{ eV}$). Thus electronic binding energy is negligible by a factor of $\sim 10^{-6}$.",
    "Easy"
)

# Q32
add_q(
    "Binding energy",
    r"A nucleus with $Z = 92$ and $A = 238$ has binding energy $E_b$. The energy equivalent of the mass of the constituent protons and neutrons is $E_{\text{constituents}}$. The actual rest energy of the nucleus is:",
    [
        r"$E_{\text{constituents}} - E_b$",
        r"$E_{\text{constituents}} + E_b$",
        r"$E_b - E_{\text{constituents}}$",
        r"$\frac{E_{\text{constituents}}}{E_b}$"
    ],
    0,
    r"Since $E_b = (M_{\text{constituents}} - M_{\text{nucleus}})c^2$, the nuclear rest energy is $M_{\text{nucleus}}c^2 = M_{\text{constituents}}c^2 - E_b = E_{\text{constituents}} - E_b$.",
    "Easy"
)

# Q33
add_q(
    "Binding energy",
    r"Which of the following is true for two nuclei with the same mass number $A$?",
    [
        r"The nucleus with the smaller mass defect has lower binding energy",
        r"Both nuclei must have the same binding energy",
        r"The nucleus with the greater number of protons always has higher binding energy",
        r"Both nuclei must have the same stability"
    ],
    0,
    r"Binding energy is directly proportional to mass defect ($E_b = \Delta m \cdot c^2$). A smaller mass defect directly means a lower binding energy.",
    "Easy"
)

# Q34
add_q(
    "Binding energy",
    r"The binding energy per nucleon of $^{16}_8\text{O}$ is $7.97\text{ MeV}$ and of $^{17}_8\text{O}$ is $7.75\text{ MeV}$. The energy required to remove a neutron from $^{17}_8\text{O}$ is:",
    [
        r"$4.23\text{ MeV}$",
        r"$0.22\text{ MeV}$",
        r"$7.75\text{ MeV}$",
        r"$15.72\text{ MeV}$"
    ],
    0,
    r"$$E_b(^{17}\text{O}) = 17 \times 7.75 = 131.75\text{ MeV}$$ $$E_b(^{16}\text{O}) = 16 \times 7.97 = 127.52\text{ MeV}$$ $$S_n = E_b(^{17}\text{O}) - E_b(^{16}\text{O}) = 131.75 - 127.52 = 4.23\text{ MeV}$$",
    "Medium"
)

# Q35
add_q(
    "Binding energy",
    r"The binding energy of an $\alpha$-particle is $28.3\text{ MeV}$. The energy required to completely dissociate an $\alpha$-particle into two deuterons ($E_b(^2\text{H}) = 2.22\text{ MeV}$) is:",
    [
        r"$23.86\text{ MeV}$",
        r"$26.08\text{ MeV}$",
        r"$28.30\text{ MeV}$",
        r"$4.44\text{ MeV}$"
    ],
    0,
    r"Reaction: $^4\text{He} + Q \to 2 ^2\text{H}$.\nEnergy required $Q = E_b(^4\text{He}) - 2 E_b(^2\text{H}) = 28.30 - 2(2.22) = 28.30 - 4.44 = 23.86\text{ MeV}$.",
    "Medium"
)

# Q36
add_q(
    "Binding energy",
    r"The binding energy per nucleon for $A_1 = 110$ is $8.4\text{ MeV}$ and for $A_2 = 220$ is $7.8\text{ MeV}$. If a nucleus of $A_2$ splits into two nuclei of $A_1$, the $Q$-value of the process is:",
    [
        r"$+132\text{ MeV}$",
        r"$-132\text{ MeV}$",
        r"$+66\text{ MeV}$",
        r"$+264\text{ MeV}$"
    ],
    0,
    r"$$Q = 2 \times (110 \times 8.4) - (220 \times 7.8) = 220 \times (8.4 - 7.8) = 220 \times 0.6 = +132\text{ MeV}$$",
    "Easy"
)

# Q37
add_q(
    "Binding energy",
    r"For a nucleus with $N = Z = A/2$, the asymmetry energy term in the semi-empirical mass formula is:",
    [
        r"$0$",
        r"Maximum",
        r"Negative",
        r"Infinite"
    ],
    0,
    r"The asymmetry energy is given by $E_{\text{asym}} = -a_{\text{sym}} \frac{(N - Z)^2}{A}$. When $N = Z$, $(N - Z) = 0$, so the asymmetry penalty is zero.",
    "Easy"
)

# Q38
add_q(
    "Binding energy",
    r"The proton separation energy $S_p$ of a nucleus $^{A}_Z\text{X}$ is the minimum energy required to remove a proton, defined by:",
    [
        r"$S_p = [M(^{A-1}_{Z-1}\text{Y}) + m_p - M(^{A}_Z\text{X})]c^2$",
        r"$S_p = [M(^{A}_Z\text{X}) - M(^{A-1}_{Z-1}\text{Y}) - m_p]c^2$",
        r"$S_p = [M(^{A-1}_{Z}\text{X}) + m_n - M(^{A}_Z\text{X})]c^2$",
        r"$S_p = \frac{E_b}{Z}$"
    ],
    0,
    r"Removing a proton leads to the reaction $^{A}_Z\text{X} \to ^{A-1}_{Z-1}\text{Y} + p$. By energy conservation, the required energy is $S_p = [M(^{A-1}_{Z-1}\text{Y}) + m_p - M(^{A}_Z\text{X})]c^2 = E_b(^{A}_Z\text{X}) - E_b(^{A-1}_{Z-1}\text{Y})$.",
    "Medium"
)

# Q39
add_q(
    "Binding energy",
    r"Why is the proton separation energy generally LESS than the neutron separation energy for heavy nuclei?",
    [
        r"Because Coulomb repulsion between the proton and the remaining nucleus reduces the work required to remove the proton",
        r"Because protons are lighter than neutrons",
        r"Because protons experience no strong nuclear force",
        r"Because neutrons are located on the nuclear surface"
    ],
    0,
    r"The electrostatic repulsion from the $Z - 1$ remaining protons pushes the proton outward, lowering the potential barrier and reducing the net work required to remove it relative to an uncharged neutron.",
    "Medium"
)

# Q40
add_q(
    "Binding energy",
    r"The binding energy of a nucleus is $225\text{ MeV}$ and its mass number is $30$. The binding energy per nucleon is:",
    [
        r"$7.5\text{ MeV/nucleon}$",
        r"$15\text{ MeV/nucleon}$",
        r"$6.75\text{ MeV/nucleon}$",
        r"$9.0\text{ MeV/nucleon}$"
    ],
    0,
    r"$$E_{\text{bn}} = \frac{E_b}{A} = \frac{225\text{ MeV}}{30} = 7.5\text{ MeV/nucleon}$$",
    "Easy"
)

# Q41
add_q(
    "Binding energy",
    r"The binding energy of a nucleus is $B$. If the nucleus is completely broken into its constituent nucleons at rest, the total mass of the nucleons will:",
    [
        r"Exceed the nuclear mass by $\frac{B}{c^2}$",
        r"Be less than the nuclear mass by $\frac{B}{c^2}$",
        r"Equal the nuclear mass exactly",
        r"Exceed the nuclear mass by $\frac{B}{2c^2}$"
    ],
    0,
    r"$$M_{\text{nucleons}} - M_{\text{nucleus}} = \Delta m = \frac{B}{c^2} \implies M_{\text{nucleons}} = M_{\text{nucleus}} + \frac{B}{c^2}$$",
    "Easy"
)

# Q42
add_q(
    "Binding energy",
    r"What percentage of the total mass of a carbon-12 nucleus ($^{12}_6\text{C}$) is converted into binding energy? (Take $E_b \approx 92.16\text{ MeV}$ and $M \approx 12 \times 931.5\text{ MeV}$):",
    [
        r"$\approx 0.82\%$",
        r"$\approx 5.5\%$",
        r"$\approx 0.01\%$",
        r"$\approx 12\%$"
    ],
    0,
    r"$$\text{Percentage} = \frac{E_b}{M c^2} \times 100\% = \frac{92.16\text{ MeV}}{12 \times 931.5\text{ MeV}} \times 100\% = \frac{92.16}{11178} \times 100\% \approx 0.824\%$$",
    "Medium"
)

# Q43
add_q(
    "Binding energy",
    r"If the binding energy per nucleon of a nucleus of mass number $A$ were proportional to $A$ (i.e. $E_b \propto A^2$), this would imply that:",
    [
        r"Nuclear forces do not show saturation (every nucleon interacts with all other $A - 1$ nucleons)",
        r"Nuclear forces are strictly short-range",
        r"The nucleus has infinite density",
        r"Nuclear forces are electromagnetic in origin"
    ],
    0,
    r"If every nucleon interacted with every other nucleon without saturation, the number of interacting pairs would be $\binom{A}{2} \approx \frac{1}{2}A^2$, giving $E_b \propto A^2$ and $E_b/A \propto A$. The fact that $E_b/A \approx \text{constant}$ proves nuclear force saturation.",
    "Hard"
)

# Q44
add_q(
    "Binding energy",
    r"Which of the following elements has the highest binding energy per nucleon?",
    [
        r"$^{56}_{26}\text{Fe}$",
        r"$^{235}_{92}\text{U}$",
        r"$^4_2\text{He}$",
        r"$^{14}_7\text{N}$"
    ],
    0,
    r"$^{56}_{26}\text{Fe}$ has $E_b/A \approx 8.79\text{ MeV/nucleon}$, which is the highest among the choices given.",
    "Easy"
)

# Q45
add_q(
    "Binding energy",
    r"For a hypothetical reaction $A \to B + C$, the reaction is energetically spontaneous (exothermic) if:",
    [
        r"$E_b(B) + E_b(C) > E_b(A)$",
        r"$E_b(A) > E_b(B) + E_b(C)$",
        r"$E_b(B) + E_b(C) = E_b(A)$",
        r"$E_b(A) = 0$"
    ],
    0,
    r"Spontaneous decay requires $Q > 0$. Since $Q = E_{b,\text{products}} - E_{b,\text{reactants}} = [E_b(B) + E_b(C)] - E_b(A) > 0 \implies E_b(B) + E_b(C) > E_b(A)$.",
    "Easy"
)

print(f"Total questions after Subtopic 5: {len(questions)}")

# ==============================================================================
# SUBTOPIC 6: Nuclear reactions (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Nuclear reactions",
    r"In any nuclear reaction, which of the following conservation laws is strictly obeyed?",
    [
        r"Conservation of total mass number ($A$), electric charge ($Z$), and total relativistic energy-momentum",
        r"Conservation of the total number of protons alone",
        r"Conservation of the total number of neutrons alone",
        r"Conservation of classical rest mass alone"
    ],
    0,
    r"Nuclear reactions conserve total mass number (baryon number) $A$, net electric charge $Z$, linear momentum, angular momentum, and total relativistic energy ($E = mc^2 + K$). Protons and neutrons individually can convert into each other via beta decay.",
    "Easy"
)

# Q2
add_q(
    "Nuclear reactions",
    r"The $Q$-value of a nuclear reaction $A + a \to B + b$ in terms of rest masses is given by:",
    [
        r"$Q = (m_A + m_a - m_B - m_b)c^2$",
        r"$Q = (m_B + m_b - m_A - m_a)c^2$",
        r"$Q = (m_A + m_B - m_a - m_b)c^2$",
        r"$Q = (m_a - m_b)c^2$"
    ],
    0,
    r"The $Q$-value is the difference between initial and final rest mass energies: $Q = (m_{\text{initial}} - m_{\text{final}})c^2 = (m_A + m_a - m_B - m_b)c^2$.",
    "Easy"
)

# Q3
add_q(
    "Nuclear reactions",
    r"An endoergic (endothermic) nuclear reaction has $Q < 0$. The minimum kinetic energy of the projectile $m_a$ required to initiate the reaction on a stationary target nucleus $M_A$ (the threshold energy $K_{\text{th}}$) is:",
    [
        r"$K_{\text{th}} = |Q|\left(1 + \frac{m_a}{M_A}\right)$",
        r"$K_{\text{th}} = |Q|$",
        r"$K_{\text{th}} = |Q|\left(1 - \frac{m_a}{M_A}\right)$",
        r"$K_{\text{th}} = |Q|\left(\frac{M_A}{m_a}\right)$"
    ],
    0,
    r"To conserve linear momentum in the laboratory frame, the center of mass must continue moving. The threshold kinetic energy is: $$K_{\text{th}} = |Q|\left(\frac{M_A + m_a}{M_A}\right) = |Q|\left(1 + \frac{m_a}{M_A}\right)$$",
    "Medium"
)

# Q4
add_q(
    "Nuclear reactions",
    r"According to Rutherford and Soddy's radioactive decay law, the number of undecayed nuclei $N(t)$ at time $t$ is:",
    [
        r"$N(t) = N_0 e^{-\lambda t}$",
        r"$N(t) = N_0 e^{+\lambda t}$",
        r"$N(t) = N_0 (1 - e^{-\lambda t})$",
        r"$N(t) = N_0 \lambda t$"
    ],
    0,
    r"The rate of decay is proportional to the number of radioactive nuclei present: $-\frac{dN}{dt} = \lambda N \implies \frac{dN}{N} = -\lambda dt$. Integrating gives $N(t) = N_0 e^{-\lambda t}$.",
    "Easy"
)

# Q5
add_q(
    "Nuclear reactions",
    r"The relationship between the half-life $T_{1/2}$ and the decay constant $\lambda$ of a radioactive substance is:",
    [
        r"$T_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{\lambda}$",
        r"$T_{1/2} = \frac{\lambda}{\ln 2} \approx \frac{\lambda}{0.693}$",
        r"$T_{1/2} = \frac{1}{\lambda}$",
        r"$T_{1/2} = \ln 2 \cdot \lambda$"
    ],
    0,
    r"When $t = T_{1/2}$, $N = N_0 / 2$. Thus $N_0 / 2 = N_0 e^{-\lambda T_{1/2}} \implies e^{\lambda T_{1/2}} = 2 \implies T_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{\lambda}$.",
    "Easy"
)

# Q6
add_q(
    "Nuclear reactions",
    r"The mean life (average lifetime) $\tau$ of a radioactive nuclide is related to its decay constant $\lambda$ and half-life $T_{1/2}$ by:",
    [
        r"$\tau = \frac{1}{\lambda} = \frac{T_{1/2}}{\ln 2} \approx 1.443 T_{1/2}$",
        r"$\tau = \frac{\ln 2}{\lambda} = T_{1/2}$",
        r"$\tau = \lambda T_{1/2}$",
        r"$\tau = 2 T_{1/2}$"
    ],
    0,
    r"The mean lifetime is the expectation value of time before decay: $\tau = \frac{\int_0^\infty t N(t) dt}{\int_0^\infty N(t) dt} = \frac{1}{\lambda}$. In terms of half-life, $\tau = \frac{T_{1/2}}{\ln 2} \approx 1.443 T_{1/2}$.",
    "Easy"
)

# Q7
add_q(
    "Nuclear reactions",
    r"The SI unit of radioactive activity is:",
    [
        r"Becquerel ($\text{Bq}$), equal to $1\text{ disintegration per second}$",
        r"Curie ($\text{Ci}$), equal to $3.7 \times 10^{10}\text{ Bq}$",
        r"Rutherford ($\text{Rd}$), equal to $10^6\text{ Bq}$",
        r"Roentgen"
    ],
    0,
    r"The SI unit of activity is the Becquerel ($\text{Bq}$), defined as $1\text{ disintegration/second}$. The Curie ($\text{Ci}$) and Rutherford ($\text{Rd}$) are non-SI units ($1\text{ Ci} = 3.7 \times 10^{10}\text{ Bq}$, $1\text{ Rd} = 10^6\text{ Bq}$).",
    "Easy"
)

# Q8
add_q(
    "Nuclear reactions",
    r"A radioactive sample has a half-life of $20\text{ minutes}$. What fraction of the original sample remains undecayed after $60\text{ minutes}$?",
    [
        r"$\frac{1}{8}$",
        r"$\frac{1}{4}$",
        r"$\frac{7}{8}$",
        r"$\frac{1}{16}$"
    ],
    0,
    r"Number of half-lives elapsed: $n = \frac{t}{T_{1/2}} = \frac{60}{20} = 3$. Fraction remaining: $\frac{N}{N_0} = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$.",
    "Easy"
)

# Q9
add_q(
    "Nuclear reactions",
    r"What fraction of the original radioactive nuclei has DECAYED after $4$ half-lives?",
    [
        r"$\frac{15}{16}$ ($93.75\%$)",
        r"$\frac{1}{16}$ ($6.25\%$)",
        r"$\frac{7}{8}$ ($87.5\%$)",
        r"$\frac{3}{4}$ ($75\%$)"
    ],
    0,
    r"Fraction remaining undecayed is $(1/2)^4 = 1/16$. The fraction decayed is $1 - 1/16 = 15/16 = 93.75\%$.",
    "Easy"
)

# Q10
add_q(
    "Nuclear reactions",
    r"In an $\alpha$-decay process $^{A}_{Z}\text{X} \to ^{A-4}_{Z-2}\text{Y} + ^4_2\text{He} + Q$, if the parent nucleus is initially at rest, the kinetic energy of the emitted $\alpha$-particle is:",
    [
        r"$K_\alpha = \left(\frac{A - 4}{A}\right) Q$",
        r"$K_\alpha = \left(\frac{4}{A}\right) Q$",
        r"$K_\alpha = Q$",
        r"$K_\alpha = \left(\frac{A}{A - 4}\right) Q$"
    ],
    0,
    r"By conservation of linear momentum: $p_\alpha = p_Y \implies K_\alpha = \frac{p^2}{2m_\alpha}$ and $K_Y = \frac{p^2}{2m_Y}$.\nSince $m_\alpha \approx 4\text{ u}$ and $m_Y \approx (A - 4)\text{ u}$, we have $K_\alpha / K_Y = (A - 4) / 4$.\nTotal energy $Q = K_\alpha + K_Y = K_\alpha \left(1 + \frac{4}{A - 4}\right) = K_\alpha \frac{A}{A - 4} \implies K_\alpha = \left(\frac{A - 4}{A}\right) Q$.",
    "Medium"
)

# Q11
add_q(
    "Nuclear reactions",
    r"A radium nucleus $^{226}_{88}\text{Ra}$ at rest decays by $\alpha$-emission with a total energy release of $Q = 4.87\text{ MeV}$. The kinetic energy of the emitted $\alpha$-particle is approximately:",
    [
        r"$4.78\text{ MeV}$",
        r"$4.87\text{ MeV}$",
        r"$0.09\text{ MeV}$",
        r"$2.44\text{ MeV}$"
    ],
    0,
    r"$$K_\alpha = \left(\frac{A - 4}{A}\right) Q = \left(\frac{226 - 4}{226}\right) \times 4.87 = \frac{222}{226} \times 4.87 \approx 4.78\text{ MeV}$$ The remaining $0.09\text{ MeV}$ is carried by the recoiling $^{222}_{86}\text{Rn}$ daughter nucleus.",
    "Easy"
)

# Q12
add_q(
    "Nuclear reactions",
    r"In beta-minus ($\beta^-$) decay, which fundamental reaction occurs inside the nucleus?",
    [
        r"$n \to p + e^- + \bar{\nu}_e$",
        r"$p \to n + e^+ + \nu_e$",
        r"$p + e^- \to n + \nu_e$",
        r"$n \to p + e^+$"
    ],
    0,
    r"In $\beta^-$ decay, a neutron converts into a proton, emitting an electron ($\beta^-$) and an electron antineutrino ($\bar{\nu}_e$): $n \to p + e^- + \bar{\nu}_e$. This increases $Z$ by 1 while keeping $A$ constant.",
    "Easy"
)

# Q13
add_q(
    "Nuclear reactions",
    r"In beta-plus ($\beta^+$) decay, which fundamental reaction occurs inside the nucleus?",
    [
        r"$p \to n + e^+ + \nu_e$",
        r"$n \to p + e^- + \bar{\nu}_e$",
        r"$p + e^- \to n + \bar{\nu}_e$",
        r"$p \to n + e^-$"
    ],
    0,
    r"In $\beta^+$ decay, a proton converts into a neutron, emitting a positron ($e^+$) and an electron neutrino ($\nu_e$): $p \to n + e^+ + \nu_e$. This decreases $Z$ by 1 while keeping $A$ constant.",
    "Easy"
)

# Q14
add_q(
    "Nuclear reactions",
    r"Wolfgang Pauli postulated the existence of the neutrino in 1930 to explain:",
    [
        r"The continuous kinetic energy spectrum of beta particles and conservation of angular momentum",
        r"The discrete nature of alpha particle energies",
        r"The emission of gamma rays",
        r"Nuclear fission"
    ],
    0,
    r"Beta particles are emitted with a continuous energy distribution from 0 up to $E_{\text{max}}$. Because a two-body decay produces discrete energies, Pauli postulated that a third neutral spin-1/2 particle (the neutrino) shares the decay energy and angular momentum.",
    "Medium"
)

# Q15
add_q(
    "Nuclear reactions",
    r"During $\gamma$-decay:",
    [
        r"Neither the mass number $A$ nor the atomic number $Z$ changes",
        r"$A$ decreases by $4$ and $Z$ decreases by $2$",
        r"$A$ remains unchanged while $Z$ increases by $1$",
        r"$A$ remains unchanged while $Z$ decreases by $1$"
    ],
    0,
    r"Gamma decay is an electromagnetic transition in which an excited nucleus in a higher nuclear energy state drops to a lower state by emitting a high-energy photon ($\gamma$-ray), with no change in $A$ or $Z$.",
    "Easy"
)

# Q16
add_q(
    "Nuclear reactions",
    r"A radioactive nucleus $^{A}_{Z}\text{X}$ undergoes decay emitting one $\alpha$-particle and two $\beta^-$-particles. The resulting daughter nucleus is an:",
    [
        r"Isotope of the parent nucleus ($^{A-4}_{Z}\text{X}$)",
        r"Isobar of the parent nucleus",
        r"Isotone of the parent nucleus",
        r"Identical nucleus to the parent"
    ],
    0,
    r"After one $\alpha$-decay: $Z \to Z - 2$, $A \to A - 4$.\nAfter two $\beta^-$-decays: $Z \to (Z - 2) + 2 = Z$, $A \to A - 4$.\nSince the atomic number $Z$ is restored to its original value with a different mass number $A - 4$, the product is an isotope of the parent element (Soddy-Fajans displacement law).",
    "Medium"
)

# Q17
add_q(
    "Nuclear reactions",
    r"Two radioactive species $A$ and $B$ have decay constants $\lambda_A = 5\lambda$ and $\lambda_B = \lambda$. Initially, they have the same number of nuclei. The ratio $N_A / N_B$ will equal $1/e^2$ after a time:",
    [
        r"$\frac{1}{2\lambda}$",
        r"$\frac{1}{\lambda}$",
        r"$\frac{2}{\lambda}$",
        r"$\frac{1}{4\lambda}$"
    ],
    0,
    r"$$N_A(t) = N_0 e^{-5\lambda t}, \quad N_B(t) = N_0 e^{-\lambda t}$$ $$\frac{N_A(t)}{N_B(t)} = e^{-4\lambda t} = \frac{1}{e^2} = e^{-2} \implies 4\lambda t = 2 \implies t = \frac{2}{4\lambda} = \frac{1}{2\lambda}$$",
    "Medium"
)

# Q18
add_q(
    "Nuclear reactions",
    r"A radioactive substance has a half-life of $T$. How long does it take for $87.5\%$ of the initial activity to disappear?",
    [
        r"$3 T$",
        r"$2 T$",
        r"$4 T$",
        r"$7 T$"
    ],
    0,
    r"If $87.5\%$ has disappeared, the remaining activity is $100\% - 87.5\% = 12.5\% = \frac{1}{8} = \left(\frac{1}{2}\right)^3$. This corresponds to $n = 3$ half-lives, so $t = 3T$.",
    "Easy"
)

# Q19
add_q(
    "Nuclear reactions",
    r"If a radioactive nucleus decays simultaneously via two independent pathways with half-lives $T_1$ and $T_2$, the effective half-life $T_{\text{eff}}$ of the nucleus is:",
    [
        r"$T_{\text{eff}} = \frac{T_1 T_2}{T_1 + T_2}$",
        r"$T_{\text{eff}} = T_1 + T_2$",
        r"$T_{\text{eff}} = \sqrt{T_1 T_2}$",
        r"$T_{\text{eff}} = \frac{T_1 + T_2}{2}$"
    ],
    0,
    r"Decay rates add: $\lambda_{\text{eff}} = \lambda_1 + \lambda_2$. Since $\lambda = \frac{\ln 2}{T}$, we have $\frac{\ln 2}{T_{\text{eff}}} = \frac{\ln 2}{T_1} + \frac{\ln 2}{T_2} \implies \frac{1}{T_{\text{eff}}} = \frac{1}{T_1} + \frac{1}{T_2} \implies T_{\text{eff}} = \frac{T_1 T_2}{T_1 + T_2}$.",
    "Medium"
)

# Q20
add_q(
    "Nuclear reactions",
    r"A radioactive sample has an activity of $8000\text{ Bq}$ at time $t = 0$. At $t = 60\text{ minutes}$, its activity drops to $1000\text{ Bq}$. What is the half-life of the sample?",
    [
        r"$20\text{ minutes}$",
        r"$30\text{ minutes}$",
        r"$15\text{ minutes}$",
        r"$10\text{ minutes}$"
    ],
    0,
    r"$$\frac{A(t)}{A_0} = \frac{1000}{8000} = \frac{1}{8} = \left(\frac{1}{2}\right)^3$$ Thus $3$ half-lives have elapsed in $60\text{ minutes}$, so $T_{1/2} = \frac{60}{3} = 20\text{ minutes}$.",
    "Easy"
)

# Q21
add_q(
    "Nuclear reactions",
    r"What is the unknown particle $X$ in the nuclear reaction $^{14}_{7}\text{N} + ^4_2\text{He} \to ^{17}_8\text{O} + X$ (Rutherford's artificial transmutation of nitrogen in 1919)?",
    [
        r"Proton ($^1_1\text{p}$ or $^1_1\text{H}$)",
        r"Neutron ($^1_0\text{n}$)",
        r"Deuteron ($^2_1\text{H}$)",
        r"Electron ($^0_{-1}e$)"
    ],
    0,
    r"Balancing mass numbers: $14 + 4 = 17 + A_X \implies A_X = 1$.\nBalancing atomic numbers: $7 + 2 = 8 + Z_X \implies Z_X = 1$.\nThe particle is a proton ($^1_1\text{H}$).",
    "Easy"
)

# Q22
add_q(
    "Nuclear reactions",
    r"In the nuclear reaction $^{27}_{13}\text{Al} + ^1_0\text{n} \to ^{24}_{11}\text{Na} + X$, the emitted particle $X$ is:",
    [
        r"$\alpha$-particle ($^4_2\text{He}$)",
        r"Proton ($^1_1\text{H}$)",
        r"$\beta^-$-particle",
        r"Deuteron ($^2_1\text{H}$)"
    ],
    0,
    r"Mass number balance: $27 + 1 = 24 + A_X \implies A_X = 4$.\nAtomic number balance: $13 + 0 = 11 + Z_X \implies Z_X = 2$.\nThe particle with $A = 4$ and $Z = 2$ is an $\alpha$-particle ($^4_2\text{He}$).",
    "Easy"
)

# Q23
add_q(
    "Nuclear reactions",
    r"The activity of a radioactive sample is $A_1$ at time $t_1$ and $A_2$ at time $t_2$ ($t_2 > t_1$). The decay constant $\lambda$ of the sample is given by:",
    [
        r"$\lambda = \frac{\ln(A_1 / A_2)}{t_2 - t_1}$",
        r"$\lambda = \frac{\ln(A_2 / A_1)}{t_2 - t_1}$",
        r"$\lambda = \frac{A_1 - A_2}{t_2 - t_1}$",
        r"$\lambda = \frac{t_2 - t_1}{\ln(A_1 / A_2)}$"
    ],
    0,
    r"$$A_2 = A_1 e^{-\lambda(t_2 - t_1)} \implies \frac{A_1}{A_2} = e^{\lambda(t_2 - t_1)} \implies \ln\left(\frac{A_1}{A_2}\right) = \lambda(t_2 - t_1) \implies \lambda = \frac{\ln(A_1 / A_2)}{t_2 - t_1}$$",
    "Easy"
)

# Q24
add_q(
    "Nuclear reactions",
    r"In a sample of radioactive material, what percentage of the initial radioactive nuclei remain undecayed after a time equal to its mean life $\tau$?",
    [
        r"$\approx 36.8\%$ ($\frac{1}{e}$)",
        r"$50\%$",
        r"$\approx 63.2\%$",
        r"$\approx 13.5\%$"
    ],
    0,
    r"When $t = \tau = \frac{1}{\lambda}$, the fraction remaining is: $$\frac{N}{N_0} = e^{-\lambda (1/\lambda)} = e^{-1} = \frac{1}{e} \approx 0.3679 = 36.8\%$$",
    "Easy"
)

# Q25
add_q(
    "Nuclear reactions",
    r"In carbon dating, the age of ancient organic samples is determined by measuring the ratio of:",
    [
        r"Radioactive $^{14}_6\text{C}$ to stable $^{12}_6\text{C}$",
        r"Radioactive $^{14}_6\text{C}$ to radioactive $^{14}_7\text{N}$",
        r"Stable $^{13}_6\text{C}$ to $^{12}_6\text{C}$",
        r"Radioactive $^{238}_{92}\text{U}$ to $^{206}_{82}\text{Pb}$"
    ],
    0,
    r"Living organisms maintain a constant ratio of $^{14}\text{C} / ^{12}\text{C}$ by absorbing atmospheric $\text{CO}_2$. After death, $^{14}\text{C}$ decays ($T_{1/2} = 5730\text{ years}$) while $^{12}\text{C}$ remains constant, allowing dating from the ratio.",
    "Easy"
)

# Q26
add_q(
    "Nuclear reactions",
    r"How many $\alpha$-decays and $\beta^-$-decays occur in the radioactive decay chain from $^{238}_{92}\text{U}$ to stable $^{206}_{82}\text{Pb}$?",
    [
        r"$8\alpha$ and $6\beta^-$",
        r"$6\alpha$ and $8\beta^-$",
        r"$8\alpha$ and $8\beta^-$",
        r"$7\alpha$ and $4\beta^-$"
    ],
    0,
    r"Change in mass number is due entirely to $\alpha$-emission: $\Delta A = 238 - 206 = 32$. Number of $\alpha$-particles: $N_\alpha = \frac{32}{4} = 8$.\nEach $\alpha$-decay reduces $Z$ by 2, so $8\alpha$ reduces $Z$ by 16: $92 - 16 = 76$. But final $Z = 82$. Each $\beta^-$-decay increases $Z$ by 1: $N_\beta = 82 - 76 = 6\beta^-$.",
    "Medium"
)

# Q27
add_q(
    "Nuclear reactions",
    r"In the radioactive series $^{232}_{90}\text{Th} \to ^{208}_{82}\text{Pb}$, the number of emitted $\alpha$ and $\beta^-$ particles are:",
    [
        r"$6\alpha$ and $4\beta^-$",
        r"$4\alpha$ and $6\beta^-$",
        r"$8\alpha$ and $6\beta^-$",
        r"$6\alpha$ and $6\beta^-$"
    ],
    0,
    r"$\Delta A = 232 - 208 = 24 \implies N_\alpha = 24 / 4 = 6$.\nCharge change from $6\alpha$: $90 - 2(6) = 78$. Required $Z = 82 \implies N_\beta = 82 - 78 = 4\beta^-$.",
    "Easy"
)

# Q28
add_q(
    "Nuclear reactions",
    r"The half-life of $^{131}\text{I}$ is $8\text{ days}$. Given a sample with activity $20\mu\text{Ci}$ at $t = 0$, its activity at $t = 24\text{ days}$ will be:",
    [
        r"$2.5\mu\text{Ci}$",
        r"$5.0\mu\text{Ci}$",
        r"$10\mu\text{Ci}$",
        r"$1.25\mu\text{Ci}$"
    ],
    0,
    r"$n = \frac{24\text{ days}}{8\text{ days}} = 3$ half-lives. Activity $A = A_0 (1/2)^3 = 20 / 8 = 2.5\mu\text{Ci}$.",
    "Easy"
)

# Q29
add_q(
    "Nuclear reactions",
    r"Two radioactive samples $X$ and $Y$ initially have the same number of atoms. The half-life of $X$ is $1\text{ hour}$ and that of $Y$ is $2\text{ hours}$. After $4\text{ hours}$, the ratio of the number of atoms of $X$ to $Y$ is:",
    [
        r"$1 : 4$",
        r"$1 : 2$",
        r"$1 : 8$",
        r"$1 : 16$"
    ],
    0,
    r"For $X$: $n_X = 4/1 = 4 \implies N_X = N_0(1/2)^4 = N_0/16$.\nFor $Y$: $n_Y = 4/2 = 2 \implies N_Y = N_0(1/2)^2 = N_0/4$.\n$$\frac{N_X}{N_Y} = \frac{N_0/16}{N_0/4} = \frac{4}{16} = \frac{1}{4} = 1 : 4$$",
    "Easy"
)

# Q30
add_q(
    "Nuclear reactions",
    r"Which of the following rays emitted during radioactivity is NOT deflected by an electric or magnetic field?",
    [
        r"$\gamma$-rays",
        r"$\alpha$-particles",
        r"$\beta^-$-particles",
        r"$\beta^+$-particles"
    ],
    0,
    r"$\gamma$-rays are uncharged electromagnetic photons ($q = 0$) of very high frequency and therefore experience zero Lorentz force ($F = q(E + v \times B) = 0$).",
    "Easy"
)

# Q31
add_q(
    "Nuclear reactions",
    r"In beta-decay, the energy spectrum of emitted $\beta$-particles is continuous because:",
    [
        r"The decay energy ($Q$-value) is shared continuously between the $\beta$-particle and the neutrino",
        r"The parent nucleus has continuous energy levels",
        r"The strong force changes during decay",
        r"Energy is not conserved in weak interactions"
    ],
    0,
    r"In a three-body decay ($X \to Y + \beta + \nu$), the fixed total kinetic energy $Q$ is shared in continuously variable fractions between the beta particle and the neutrino/antineutrino.",
    "Easy"
)

# Q32
add_q(
    "Nuclear reactions",
    r"The penetrating power of radioactive radiations in increasing order is:",
    [
        r"$\alpha < \beta < \gamma$",
        r"$\gamma < \beta < \alpha$",
        r"$\beta < \alpha < \gamma$",
        r"$\alpha < \gamma < \beta$"
    ],
    0,
    r"$\alpha$-particles have the highest ionizing power and thus the lowest penetrating power (stopped by a sheet of paper). $\beta$-particles penetrate a few mm of aluminum, while $\gamma$-rays require thick lead shielding to stop.",
    "Easy"
)

# Q33
add_q(
    "Nuclear reactions",
    r"The ionizing power of radioactive radiations in increasing order is:",
    [
        r"$\gamma < \beta < \alpha$",
        r"$\alpha < \beta < \gamma$",
        r"$\beta < \gamma < \alpha$",
        r"$\gamma < \alpha < \beta$"
    ],
    0,
    r"Ionizing power is inversely related to penetrating power. Because $\alpha$-particles are heavy and have charge $+2e$, they produce dense ionization: relative ionizing power is $\alpha : \beta : \gamma \approx 10000 : 100 : 1$.",
    "Easy"
)

# Q34
add_q(
    "Nuclear reactions",
    r"A radioactive nucleus decays into a stable daughter nucleus. At time $t = 0$, only parent nuclei are present. The ratio of daughter nuclei to parent nuclei $N_D / N_P$ at time $t$ is:",
    [
        r"$e^{\lambda t} - 1$",
        r"$1 - e^{-\lambda t}$",
        r"$e^{-\lambda t}$",
        r"$\frac{1}{e^{\lambda t} - 1}$"
    ],
    0,
    r"$N_P(t) = N_0 e^{-\lambda t}$. Since total nucleons are conserved, $N_D(t) = N_0 - N_P(t) = N_0(1 - e^{-\lambda t})$.\n$$\frac{N_D(t)}{N_P(t)} = \frac{N_0(1 - e^{-\lambda t})}{N_0 e^{-\lambda t}} = \frac{1 - e^{-\lambda t}}{e^{-\lambda t}} = e^{\lambda t} - 1$$",
    "Medium"
)

# Q35
add_q(
    "Nuclear reactions",
    r"At time $t$, the ratio of daughter to parent nuclei is $N_D / N_P = 7$. How many half-lives have elapsed?",
    [
        r"$3$",
        r"$7$",
        r"$4$",
        r"$2$"
    ],
    0,
    r"$$\frac{N_D}{N_P} = e^{\lambda t} - 1 = 7 \implies e^{\lambda t} = 8 = 2^3 \implies \lambda t = 3 \ln 2 \implies t = 3 T_{1/2}$$ Exactly $3$ half-lives have passed (parent remaining is $1/8$, daughter formed is $7/8$).",
    "Easy"
)

# Q36
add_q(
    "Nuclear reactions",
    r"A nuclear reaction is given by $^{10}_5\text{B} + \alpha \to ^{13}_7\text{N} + X$. The particle $X$ is:",
    [
        r"Neutron ($^1_0\text{n}$)",
        r"Proton ($^1_1\text{H}$)",
        r"Electron ($^0_{-1}e$)",
        r"Positron ($^0_{+1}e$)"
    ],
    0,
    r"Mass numbers: $10 + 4 = 13 + A_X \implies A_X = 1$.\nAtomic numbers: $5 + 2 = 7 + Z_X \implies Z_X = 0$.\nA particle with $A = 1, Z = 0$ is a neutron ($^1_0\text{n}$).",
    "Easy"
)

# Q37
add_q(
    "Nuclear reactions",
    r"A radioactive isotope has a decay constant $\lambda = 0.05\text{ day}^{-1}$. After how many days will its activity be halved?",
    [
        r"$\frac{0.693}{0.05} \approx 13.86\text{ days}$",
        r"$20\text{ days}$",
        r"$50\text{ days}$",
        r"$10\text{ days}$"
    ],
    0,
    r"$$T_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{0.05} = 13.86\text{ days}$$",
    "Easy"
)

# Q38
add_q(
    "Nuclear reactions",
    r"In the secular radioactive equilibrium of a parent $A$ and daughter $B$ ($A \xrightarrow{\lambda_A} B \xrightarrow{\lambda_B} C$) where $T_A \gg T_B$, the ratio of the number of nuclei is:",
    [
        r"$\frac{N_A}{N_B} = \frac{\lambda_B}{\lambda_A} = \frac{T_A}{T_B}$",
        r"$\frac{N_A}{N_B} = \frac{\lambda_A}{\lambda_B}$",
        r"$\frac{N_A}{N_B} = 1$",
        r"$\frac{N_A}{N_B} = \frac{T_B}{T_A}$"
    ],
    0,
    r"In secular equilibrium, the activity of daughter equals that of parent: $\lambda_A N_A = \lambda_B N_B \implies \frac{N_A}{N_B} = \frac{\lambda_B}{\lambda_A} = \frac{T_A}{T_B}$.",
    "Medium"
)

# Q39
add_q(
    "Nuclear reactions",
    r"What is the $Q$-value of the reaction $^2_1\text{H} + ^2_1\text{H} \to ^3_1\text{H} + ^1_1\text{p}$ given masses: $m(^2\text{H}) = 2.014102\text{ u}$, $m(^3\text{H}) = 3.016049\text{ u}$, and $m(p) = 1.007825\text{ u}$?",
    [
        r"$4.03\text{ MeV}$",
        r"$17.6\text{ MeV}$",
        r"$2.22\text{ MeV}$",
        r"$0.51\text{ MeV}$"
    ],
    0,
    r"$$\Delta m = 2 m(^2\text{H}) - [m(^3\text{H}) + m(p)] = 2(2.014102) - (3.016049 + 1.007825) = 4.028204 - 4.023874 = 0.004330\text{ u}$$ $$Q = 0.004330 \times 931.5\text{ MeV} \approx 4.033\text{ MeV}$$",
    "Medium"
)

# Q40
add_q(
    "Nuclear reactions",
    r"A radioactive nucleus undergoes $\beta^-$-decay. The neutrino emitted during the decay possesses:",
    [
        r"Zero electric charge, spin $1/2$, and nearly zero (extremely small) rest mass",
        r"Unit negative charge and mass equal to electron",
        r"Unit positive charge and zero rest mass",
        r"Zero spin and unit negative charge"
    ],
    0,
    r"The neutrino is a neutral fundamental lepton ($q = 0$) with spin $1/2$ and tiny non-zero rest mass ($m_\nu < 1\text{ eV}/c^2$).",
    "Easy"
)

# Q41
add_q(
    "Nuclear reactions",
    r"The activity of a radioactive source is $1.0\text{ Ci}$. How many decays occur in this source per second?",
    [
        r"$3.7 \times 10^{10}$",
        r"$10^6$",
        r"$1.6 \times 10^{-19}$",
        r"$6.02 \times 10^{23}$"
    ],
    0,
    r"By definition, $1\text{ Curie} = 3.7 \times 10^{10}\text{ disintegrations/second} = 3.7 \times 10^{10}\text{ Bq}$.",
    "Easy"
)

# Q42
add_q(
    "Nuclear reactions",
    r"The half-life of a radioactive substance is $30\text{ days}$. What is the time taken for its activity to reduce to $\frac{1}{32}$ of its initial value?",
    [
        r"$150\text{ days}$",
        r"$90\text{ days}$",
        r"$120\text{ days}$",
        r"$60\text{ days}$"
    ],
    0,
    r"Since $\frac{1}{32} = \left(\frac{1}{2}\right)^5$, $5$ half-lives are required: $t = 5 \times 30\text{ days} = 150\text{ days}$.",
    "Easy"
)

# Q43
add_q(
    "Nuclear reactions",
    r"In the reaction $^{7}_3\text{Li} + ^1_1\text{p} \to 2 ^4_2\text{He}$, the $Q$-value is $17.3\text{ MeV}$. If the proton is incident with a kinetic energy of $0.5\text{ MeV}$ on a stationary lithium target, the total kinetic energy of the two $\alpha$-particles is:",
    [
        r"$17.8\text{ MeV}$",
        r"$17.3\text{ MeV}$",
        r"$16.8\text{ MeV}$",
        r"$34.6\text{ MeV}$"
    ],
    0,
    r"By conservation of total energy: $K_{\text{initial}} + Q = K_{\text{final}} \implies K_\alpha = 0.5\text{ MeV} + 17.3\text{ MeV} = 17.8\text{ MeV}$.",
    "Easy"
)

# Q44
add_q(
    "Nuclear reactions",
    r"If the decay constant of a radioactive sample is $\lambda$, the probability that a specific nucleus survives after time $t$ is:",
    [
        r"$e^{-\lambda t}$",
        r"$1 - e^{-\lambda t}$",
        r"$\lambda e^{-\lambda t}$",
        r"$\frac{1}{\lambda t}$"
    ],
    0,
    r"The fraction of nuclei surviving at time $t$ is $N(t)/N_0 = e^{-\lambda t}$, which directly represents the survival probability of any single nucleus.",
    "Easy"
)

# Q45
add_q(
    "Nuclear reactions",
    r"The probability that a specific radioactive nucleus DECAYS during the time interval from $0$ to $t$ is:",
    [
        r"$1 - e^{-\lambda t}$",
        r"$e^{-\lambda t}$",
        r"$\lambda t$",
        r"$\frac{1}{e^{\lambda t}}$"
    ],
    0,
    r"Decay probability is the complement of survival probability: $P_{\text{decay}} = 1 - P_{\text{survival}} = 1 - e^{-\lambda t}$.",
    "Easy"
)

print(f"Total questions generated: {len(questions)}")

# Balancing options for both subtopics
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

balance_subtopic("Binding energy")
balance_subtopic("Nuclear reactions")

# Save to batch 3
with open("scripts/atoms_nuclei/an_batch3.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Atoms & Nuclei Batch 3 generated successfully! Total questions: {len(questions)}")
