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
# SUBTOPIC 3: Hydrogen spectrum and Rydberg formula (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The energy of an electron in the $n$-th stationary orbit of a hydrogen atom is given by:",
    [
        r"$E_n = -\frac{13.6}{n^2}\text{ eV}$",
        r"$E_n = -\frac{13.6}{n}\text{ eV}$",
        r"$E_n = +\frac{13.6}{n^2}\text{ eV}$",
        r"$E_n = -\frac{13.6 \times n^2}{1}\text{ eV}$"
    ],
    0,
    r"From Bohr's formula, the total energy of an electron in the $n$-th orbit of hydrogen is $E_n = -\frac{m e^4}{8\varepsilon_0^2 h^2 n^2} = -\frac{13.6}{n^2}\text{ eV}$.",
    "Easy"
)

# Q2
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The ionization energy of a hydrogen atom in its ground state is:",
    [
        r"$13.6\text{ eV}$",
        r"$3.4\text{ eV}$",
        r"$1.51\text{ eV}$",
        r"$0\text{ eV}$"
    ],
    0,
    r"The ionization energy is the minimum energy required to liberate the electron from ground state ($n = 1$) to infinity ($n = \infty$): $E_{\text{ion}} = E_\infty - E_1 = 0 - (-13.6\text{ eV}) = +13.6\text{ eV}$.",
    "Easy"
)

# Q3
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The first excitation energy of a hydrogen atom is:",
    [
        r"$10.2\text{ eV}$",
        r"$3.4\text{ eV}$",
        r"$13.6\text{ eV}$",
        r"$1.51\text{ eV}$"
    ],
    0,
    r"The first excitation energy is the energy required to excite an electron from ground state ($n = 1$) to the first excited state ($n = 2$): $\Delta E = E_2 - E_1 = -3.4\text{ eV} - (-13.6\text{ eV}) = +10.2\text{ eV}$.",
    "Easy"
)

# Q4
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The Rydberg formula for the wavelength $\lambda$ of spectral lines emitted by a hydrogen-like atom of atomic number $Z$ is:",
    [
        r"$\frac{1}{\lambda} = R Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$",
        r"$\frac{1}{\lambda} = \frac{R}{Z^2} \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$",
        r"$\frac{1}{\lambda} = R Z \left(\frac{1}{n_1} - \frac{1}{n_2}\right)$",
        r"$\lambda = R Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$"
    ],
    0,
    r"The Rydberg formula is $\frac{1}{\lambda} = R Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$, where $R \approx 1.097 \times 10^7\text{ m}^{-1}$ is the Rydberg constant.",
    "Easy"
)

# Q5
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"Which spectral series of the hydrogen atom lies entirely in the ultraviolet region of the electromagnetic spectrum?",
    [
        r"Lyman series",
        r"Balmer series",
        r"Paschen series",
        r"Pfund series"
    ],
    0,
    r"The Lyman series corresponds to transitions ending at $n_1 = 1$. The photons emitted have energies between $10.2\text{ eV}$ and $13.6\text{ eV}$ (wavelengths $912\text{ \AA} \le \lambda \le 1216\text{ \AA}$), which lie strictly in the ultraviolet region.",
    "Easy"
)

# Q6
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"Which spectral series of the hydrogen atom falls primarily in the visible region?",
    [
        r"Balmer series",
        r"Lyman series",
        r"Paschen series",
        r"Brackett series"
    ],
    0,
    r"The Balmer series ($n_1 = 2, n_2 = 3, 4, 5, \dots$) produces spectral lines with wavelengths ranging from $3646\text{ \AA}$ to $6563\text{ \AA}$, falling squarely in the visible (and near UV) region.",
    "Easy"
)

# Q7
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The longest wavelength (first line) of the Lyman series in hydrogen is:",
    [
        r"$\frac{4}{3R} \approx 1216\text{ \AA}$",
        r"$\frac{1}{R} \approx 912\text{ \AA}$",
        r"$\frac{3}{4R} \approx 684\text{ \AA}$",
        r"$\frac{36}{5R} \approx 6563\text{ \AA}$"
    ],
    0,
    r"For the first line of the Lyman series, $n_1 = 1$ and $n_2 = 2$: $$\frac{1}{\lambda} = R\left(1 - \frac{1}{4}\right) = \frac{3}{4}R \implies \lambda = \frac{4}{3R} \approx \frac{4}{3 \times 1.097 \times 10^7} \approx 1.216 \times 10^{-7}\text{ m} = 1216\text{ \AA}$$",
    "Easy"
)

# Q8
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The shortest wavelength (series limit) of the Lyman series in hydrogen is:",
    [
        r"$\frac{1}{R} \approx 912\text{ \AA}$",
        r"$\frac{4}{3R} \approx 1216\text{ \AA}$",
        r"$\frac{4}{R} \approx 3646\text{ \AA}$",
        r"$\frac{2}{R} \approx 1824\text{ \AA}$"
    ],
    0,
    r"The series limit corresponds to $n_2 = \infty$: $$\frac{1}{\lambda_{\text{limit}}} = R\left(1 - \frac{1}{\infty}\right) = R \implies \lambda_{\text{limit}} = \frac{1}{R} \approx 912\text{ \AA}$$",
    "Easy"
)

# Q9
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The ratio of the longest wavelength to the shortest wavelength in the Lyman series of hydrogen is:",
    [
        r"$\frac{4}{3}$",
        r"$\frac{3}{4}$",
        r"$\frac{9}{5}$",
        r"$2$"
    ],
    0,
    r"$$\frac{\lambda_{\text{max}}}{\lambda_{\text{min}}} = \frac{4/(3R)}{1/R} = \frac{4}{3}$$",
    "Easy"
)

# Q10
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The wavelength of the $H_\alpha$ line of the Balmer series in hydrogen ($n = 3 \to n = 2$) is:",
    [
        r"$\frac{36}{5R} \approx 6563\text{ \AA}$",
        r"$\frac{16}{3R} \approx 4861\text{ \AA}$",
        r"$\frac{4}{R} \approx 3646\text{ \AA}$",
        r"$\frac{5}{36R}$"
    ],
    0,
    r"For $H_\alpha$: $n_1 = 2, n_2 = 3$: $$\frac{1}{\lambda} = R\left(\frac{1}{4} - \frac{1}{9}\right) = R\frac{5}{36} \implies \lambda = \frac{36}{5R} \approx 6563\text{ \AA}$$",
    "Easy"
)

# Q11
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The series limit (shortest wavelength) of the Balmer series in hydrogen is:",
    [
        r"$\frac{4}{R} \approx 3646\text{ \AA}$",
        r"$\frac{36}{5R} \approx 6563\text{ \AA}$",
        r"$\frac{1}{R} \approx 912\text{ \AA}$",
        r"$\frac{9}{R} \approx 8200\text{ \AA}$"
    ],
    0,
    r"For the Balmer series limit: $n_1 = 2, n_2 = \infty$: $$\frac{1}{\lambda} = R\left(\frac{1}{4} - 0\right) = \frac{R}{4} \implies \lambda = \frac{4}{R} \approx 3646\text{ \AA}$$",
    "Easy"
)

# Q12
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The ratio of the longest wavelength to the shortest wavelength of the Balmer series of hydrogen is:",
    [
        r"$\frac{9}{5}$",
        r"$\frac{5}{9}$",
        r"$\frac{4}{3}$",
        r"$\frac{16}{7}$"
    ],
    0,
    r"$$\frac{\lambda_{\text{max}}}{\lambda_{\text{min}}} = \frac{36/(5R)}{4/R} = \frac{36}{5 \times 4} = \frac{9}{5}$$",
    "Easy"
)

# Q13
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"If an electron in a hydrogen atom transitions from the $n = 5$ state to the ground state ($n = 1$), the maximum number of spectral lines that can be observed is:",
    [
        r"$10$",
        r"$5$",
        r"$15$",
        r"$4$"
    ],
    0,
    r"The total number of spectral lines possible in a sample is: $$N = \frac{n(n - 1)}{2} = \frac{5(4)}{2} = 10$$",
    "Easy"
)

# Q14
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"An electron in a single isolated hydrogen atom is in the $n = 4$ state. The maximum number of photons it can emit before reaching the ground state is:",
    [
        r"$3$",
        r"$6$",
        r"$4$",
        r"$1$"
    ],
    0,
    r"In a single isolated atom, the electron can cascade down at most one level at a time: $4 \to 3 \to 2 \to 1$, which emits at most $n - 1 = 4 - 1 = 3$ photons. (In a gas sample with many atoms, all $\frac{4 \times 3}{2} = 6$ lines can appear).",
    "Medium"
)

# Q15
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The ionization energy of a $\text{He}^+$ ion ($Z = 2$) in its ground state is:",
    [
        r"$54.4\text{ eV}$",
        r"$13.6\text{ eV}$",
        r"$27.2\text{ eV}$",
        r"$122.4\text{ eV}$"
    ],
    0,
    r"$E_{\text{ion}} = 13.6 \times Z^2 = 13.6 \times 2^2 = 13.6 \times 4 = 54.4\text{ eV}$.",
    "Easy"
)

# Q16
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The energy of the second excited state ($n = 3$) of $\text{Li}^{2+}$ ion ($Z = 3$) is:",
    [
        r"$-13.6\text{ eV}$",
        r"$-54.4\text{ eV}$",
        r"$-1.51\text{ eV}$",
        r"$-3.4\text{ eV}$"
    ],
    0,
    r"Second excited state corresponds to principal quantum number $n = 3$. For $\text{Li}^{2+}$ ($Z = 3$): $$E_3 = -13.6 \frac{Z^2}{n^2} = -13.6 \frac{3^2}{3^2} = -13.6\text{ eV}$$",
    "Medium"
)

# Q17
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"Which transition in a $\text{He}^+$ ion ($Z = 2$) yields a spectral line with the EXACT same wavelength as the first line of the Balmer series of hydrogen ($n = 3 \to 2$)?",
    [
        r"$n = 6 \to n = 4$",
        r"$n = 4 \to n = 2$",
        r"$n = 3 \to n = 2$",
        r"$n = 8 \to n = 4$"
    ],
    0,
    r"For hydrogen ($Z=1$): $\frac{1}{\lambda} = R\left(\frac{1}{2^2} - \frac{1}{3^2}\right)$. For $\text{He}^+$ ($Z=2$): $\frac{1}{\lambda} = R(2^2)\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right) = R\left(\frac{1}{(n_1/2)^2} - \frac{1}{(n_2/2)^2}\right)$. Equating gives $n_1/2 = 2 \implies n_1 = 4$, and $n_2/2 = 3 \implies n_2 = 6$. Hence the transition is $n = 6 \to n = 4$.",
    "Hard"
)

# Q18
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The wavelength of the first line of the Lyman series in a hydrogen-like atom is $\lambda_0$. The wavelength of the first line of the Lyman series in a $\text{He}^+$ ion is:",
    [
        r"$\frac{\lambda_0}{4}$",
        r"$\frac{\lambda_0}{2}$",
        r"$4\lambda_0$",
        r"$2\lambda_0$"
    ],
    0,
    r"Since $\frac{1}{\lambda} \propto Z^2 \implies \lambda \propto \frac{1}{Z^2}$. For $\text{He}^+$ ($Z = 2$), $\lambda = \frac{\lambda_0}{2^2} = \frac{\lambda_0}{4}$.",
    "Easy"
)

# Q19
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"When a hydrogen atom emits a photon of energy $\Delta E$, the recoil speed $v_{\text{recoil}}$ of the atom of mass $M$ is:",
    [
        r"$\frac{\Delta E}{M c}$",
        r"$\frac{\Delta E}{c}$",
        r"$\sqrt{\frac{2\Delta E}{M}}$",
        r"$\frac{(\Delta E)^2}{2 M c^2}$"
    ],
    0,
    r"By conservation of linear momentum: $p_{\text{atom}} = p_{\text{photon}} = \frac{h\nu}{c} = \frac{\Delta E}{c}$. Recoil velocity is $v_{\text{recoil}} = \frac{p}{M} = \frac{\Delta E}{M c}$.",
    "Medium"
)

# Q20
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The kinetic energy of recoil of a hydrogen atom (mass $M$) when an electron jumps from $n = 2$ to $n = 1$ is:",
    [
        r"$\frac{(10.2\text{ eV})^2}{2 M c^2}$",
        r"$\frac{10.2\text{ eV}}{2}$",
        r"$\frac{10.2\text{ eV}}{M c}$",
        r"$10.2\text{ eV}$"
    ],
    0,
    r"Recoil kinetic energy is $K_{\text{recoil}} = \frac{p^2}{2M} = \frac{(\Delta E / c)^2}{2M} = \frac{(\Delta E)^2}{2 M c^2}$. For $n = 2 \to 1$, $\Delta E = 10.2\text{ eV}$.",
    "Medium"
)

# Q21
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The potential energy of an electron in the ground state of a hydrogen atom is:",
    [
        r"$-27.2\text{ eV}$",
        r"$-13.6\text{ eV}$",
        r"$+13.6\text{ eV}$",
        r"$+27.2\text{ eV}$"
    ],
    0,
    r"By the virial theorem, total energy $E = -13.6\text{ eV}$, kinetic energy $K = -E = +13.6\text{ eV}$, and potential energy $U = 2E = 2(-13.6\text{ eV}) = -27.2\text{ eV}$.",
    "Easy"
)

# Q22
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"If the zero of potential energy is chosen at the first Bohr orbit instead of at infinity, the kinetic energy of the electron in the first Bohr orbit will be:",
    [
        r"$+13.6\text{ eV}$",
        r"$0\text{ eV}$",
        r"$-13.6\text{ eV}$",
        r"$+27.2\text{ eV}$"
    ],
    0,
    r"Kinetic energy depends purely on speed ($K = \frac{1}{2}m v^2$) and is completely independent of the choice of reference point for potential energy. It remains $+13.6\text{ eV}$.",
    "Medium"
)

# Q23
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The ratio of the wavelength of the series limit of the Lyman series to that of the Paschen series in hydrogen is:",
    [
        r"$1 : 9$",
        r"$1 : 4$",
        r"$1 : 16$",
        r"$9 : 1$"
    ],
    0,
    r"Lyman series limit: $\frac{1}{\lambda_L} = R(1/1^2 - 0) = R \implies \lambda_L = 1/R$.\nPaschen series limit: $\frac{1}{\lambda_P} = R(1/3^2 - 0) = R/9 \implies \lambda_P = 9/R$.\n$$\frac{\lambda_L}{\lambda_P} = \frac{1/R}{9/R} = \frac{1}{9} = 1 : 9$$",
    "Easy"
)

# Q24
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"In the emission spectrum of hydrogen, the wavenumber $\bar{\nu} = \frac{1}{\lambda}$ of the first line of the Balmer series is $\bar{\nu}_1$. The wavenumber of the series limit of the Balmer series is:",
    [
        r"$\frac{9}{5}\bar{\nu}_1$",
        r"$\frac{5}{9}\bar{\nu}_1$",
        r"$\frac{36}{5}\bar{\nu}_1$",
        r"$\frac{4}{5}\bar{\nu}_1$"
    ],
    0,
    r"$\bar{\nu}_1 = \frac{5}{36}R$. The series limit has wavenumber $\bar{\nu}_{\text{limit}} = \frac{R}{4} = \frac{9}{36}R$. Thus $\frac{\bar{\nu}_{\text{limit}}}{\bar{\nu}_1} = \frac{9/36}{5/36} = \frac{9}{5} \implies \bar{\nu}_{\text{limit}} = \frac{9}{5}\bar{\nu}_1$.",
    "Medium"
)

# Q25
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"A hydrogen atom absorbs a photon of energy $12.75\text{ eV}$. To which state is the electron excited from the ground state?",
    [
        r"$n = 4$",
        r"$n = 3$",
        r"$n = 2$",
        r"$n = 5$"
    ],
    0,
    r"$E_n - E_1 = 12.75\text{ eV} \implies E_n = -13.6 + 12.75 = -0.85\text{ eV}$. Since $E_n = -\frac{13.6}{n^2}$, we have $n^2 = \frac{13.6}{0.85} = 16 \implies n = 4$.",
    "Easy"
)

# Q26
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"When electrons in hydrogen atoms transition from $n = 4$ down to all lower states, how many of the emitted spectral lines lie in the visible region?",
    [
        r"$2$",
        r"$1$",
        r"$3$",
        r"$6$"
    ],
    0,
    r"Visible lines belong to the Balmer series ($n_f = 2$). Transitions ending at $n = 2$ from higher states are $4 \to 2$ and $3 \to 2$ (2 lines: $H_\beta$ and $H_\alpha$).",
    "Medium"
)

# Q27
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"How many lines belong to the ultraviolet region when an electron transitions from $n = 4$ to the ground state in a sample of hydrogen atoms?",
    [
        r"$3$",
        r"$2$",
        r"$1$",
        r"$6$"
    ],
    0,
    r"Ultraviolet lines correspond to the Lyman series ($n_f = 1$). From $n = 4$, transitions to $n = 1$ are $4 \to 1$, $3 \to 1$, and $2 \to 1$ (3 lines).",
    "Medium"
)

# Q28
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The wavelength of the photon emitted in the transition $n = 4 \to n = 3$ in hydrogen belongs to the:",
    [
        r"Paschen series (Infrared region)",
        r"Balmer series (Visible region)",
        r"Lyman series (Ultraviolet region)",
        r"Brackett series (Infrared region)"
    ],
    0,
    r"Since the transition terminates at $n_1 = 3$, it is the first line of the Paschen series, which lies in the infrared region.",
    "Easy"
)

# Q29
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"What is the minimum energy required to excite a hydrogen atom from its ground state so that it can emit the $H_\alpha$ line of the Balmer series?",
    [
        r"$12.09\text{ eV}$",
        r"$10.2\text{ eV}$",
        r"$1.89\text{ eV}$",
        r"$13.6\text{ eV}$"
    ],
    0,
    r"The $H_\alpha$ line is emitted in transition $n = 3 \to n = 2$. To emit this line, the atom must be excited at least to $n = 3$. The required excitation energy from ground state ($n = 1$) is: $\Delta E = E_3 - E_1 = -1.51 - (-13.6) = 12.09\text{ eV}$.",
    "Medium"
)

# Q30
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The ratio of the maximum wavelength in the Lyman series to the maximum wavelength in the Paschen series of hydrogen is:",
    [
        r"$\frac{7}{108}$",
        r"$\frac{5}{36}$",
        r"$\frac{3}{16}$",
        r"$\frac{1}{9}$"
    ],
    0,
    r"Lyman max: $\lambda_{L,\text{max}} = \frac{4}{3R}$.\nPaschen max: $\frac{1}{\lambda} = R(1/9 - 1/16) = R \frac{7}{144} \implies \lambda_{P,\text{max}} = \frac{144}{7R}$.\n$$\frac{\lambda_{L,\text{max}}}{\lambda_{P,\text{max}}} = \frac{4/(3R)}{144/(7R)} = \frac{4 \times 7}{3 \times 144} = \frac{28}{432} = \frac{7}{108}$$",
    "Hard"
)

# Q31
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The difference in angular momentum between the initial and final states for the emission of the $H_\beta$ line of the Balmer series is:",
    [
        r"$\frac{h}{\pi}$",
        r"$\frac{h}{2\pi}$",
        r"$\frac{3h}{2\pi}$",
        r"$\frac{2h}{\pi}$"
    ],
    0,
    r"The $H_\beta$ line corresponds to transition from $n = 4$ to $n = 2$. Change in angular momentum is: $$\Delta L = (4 - 2)\hbar = 2\hbar = 2\frac{h}{2\pi} = \frac{h}{\pi}$$",
    "Easy"
)

# Q32
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"A monochromatic radiation of wavelength $\lambda$ excites hydrogen atoms in their ground state to the $n = 3$ level. The value of $\lambda$ is approximately:",
    [
        r"$1026\text{ \AA}$",
        r"$1216\text{ \AA}$",
        r"$912\text{ \AA}$",
        r"$6563\text{ \AA}$"
    ],
    0,
    r"$$\Delta E = E_3 - E_1 = 12.09\text{ eV} \implies \lambda = \frac{12400\text{ eV}\cdot\text{\AA}}{12.09\text{ eV}} \approx 1026\text{ \AA}$$",
    "Medium"
)

# Q33
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"In terms of fundamental constants, the Rydberg constant $R$ is given by:",
    [
        r"$R = \frac{m e^4}{8\varepsilon_0^2 c h^3}$",
        r"$R = \frac{m e^4}{4\varepsilon_0^2 c h^2}$",
        r"$R = \frac{m e^2}{8\varepsilon_0^2 c h^3}$",
        r"$R = \frac{m^2 e^4}{8\varepsilon_0 c h^3}$"
    ],
    0,
    r"Equating $h\nu = \Delta E$: $\frac{1}{\lambda} = \frac{\Delta E}{h c} = \frac{m e^4}{8\varepsilon_0^2 c h^3}\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$, which defines $R = \frac{m e^4}{8\varepsilon_0^2 c h^3}$.",
    "Easy"
)

# Q34
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"If the mass of the electron is doubled, the Rydberg constant $R$ will:",
    [
        r"Be doubled",
        r"Be halved",
        r"Remain unchanged",
        r"Be quadrupled"
    ],
    0,
    r"Since $R \propto m$ (electron mass), doubling the mass of the electron doubles the Rydberg constant.",
    "Easy"
)

# Q35
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The ratio of the ionization energy of hydrogen to that of deuterium ($^2_1\text{H}$) accounting for finite nuclear mass ($m_p \approx 1836 m_e, M_D \approx 3670 m_e$) is:",
    [
        r"Slightly less than $1$ (deuterium has slightly higher ionization energy)",
        r"Exactly $1$",
        r"$1 : 2$",
        r"$2 : 1$"
    ],
    0,
    r"The reduced mass $\mu = \frac{m_e M}{m_e + M} = m_e \left(1 - \frac{m_e}{M}\right)$. Since $M_D > M_p$, $\mu_D > \mu_H$. Because $E_{\text{ion}} \propto \mu$, deuterium has a slightly higher ionization energy (by about $0.027\%$).",
    "Medium"
)

# Q36
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The transition in $\text{Li}^{2+}$ ($Z = 3$) that produces the same wavelength as the transition $n = 2 \to 1$ in hydrogen ($Z = 1$) is:",
    [
        r"$n = 6 \to 3$",
        r"$n = 3 \to 1$",
        r"$n = 4 \to 2$",
        r"$n = 9 \to 3$"
    ],
    0,
    r"For $\text{Li}^{2+}$ ($Z = 3$): $Z^2\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right) = \left(\frac{1}{(n_1/3)^2} - \frac{1}{(n_2/3)^2}\right)$. For this to equal $\frac{1}{1^2} - \frac{1}{2^2}$, we need $n_1/3 = 1 \implies n_1 = 3$, and $n_2/3 = 2 \implies n_2 = 6$. So the transition is $n = 6 \to 3$.",
    "Hard"
)

# Q37
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"Which series of hydrogen spectrum has a line of wavelength $\lambda = 121.6\text{ nm}$?",
    [
        r"Lyman series",
        r"Balmer series",
        r"Paschen series",
        r"Brackett series"
    ],
    0,
    r"$121.6\text{ nm} = 1216\text{ \AA}$, which is the first line of the Lyman series ($n = 2 \to 1$).",
    "Easy"
)

# Q38
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The energy required to remove an electron from the $n = 2$ state of a hydrogen atom is:",
    [
        r"$3.4\text{ eV}$",
        r"$13.6\text{ eV}$",
        r"$10.2\text{ eV}$",
        r"$1.51\text{ eV}$"
    ],
    0,
    r"Energy of $n = 2$ is $E_2 = -3.4\text{ eV}$. The binding energy in this state is $|E_2| = 3.4\text{ eV}$, so $3.4\text{ eV}$ is required to liberate the electron to $n = \infty$.",
    "Easy"
)

# Q39
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The ratio of the energy of a photon emitted in the $n = 2 \to 1$ transition of hydrogen to that in the $n = 3 \to 2$ transition is:",
    [
        r"$\frac{27}{5}$",
        r"$\frac{5}{27}$",
        r"$\frac{4}{3}$",
        r"$\frac{9}{4}$"
    ],
    0,
    r"$$\Delta E(2 \to 1) = 13.6\left(1 - \frac{1}{4}\right) = 13.6 \times \frac{3}{4} = 10.2\text{ eV}$$ $$\Delta E(3 \to 2) = 13.6\left(\frac{1}{4} - \frac{1}{9}\right) = 13.6 \times \frac{5}{36} = 1.89\text{ eV}$$ Ratio: $\frac{3/4}{5/36} = \frac{3 \times 36}{4 \times 5} = \frac{27}{5}$.",
    "Medium"
)

# Q40
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"When a hydrogen atom in its ground state is bombarded by electrons of energy $12.5\text{ eV}$, the maximum number of spectral lines that can be emitted is:",
    [
        r"$3$",
        r"$6$",
        r"$1$",
        r"$4$"
    ],
    0,
    r"Excitation energies: $E_2 - E_1 = 10.2\text{ eV}$, $E_3 - E_1 = 12.09\text{ eV}$, $E_4 - E_1 = 12.75\text{ eV}$. With $12.5\text{ eV}$, electrons can only excite the atom up to $n = 3$ (since $12.5 > 12.09$ but $< 12.75$). From $n = 3$, the number of emitted spectral lines is $\frac{3 \times 2}{2} = 3$ (transitions $3 \to 2, 3 \to 1, 2 \to 1$).",
    "Hard"
)

# Q41
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The wavelength of light emitted when an electron jumps from $n = 3$ to $n = 2$ in hydrogen is $\lambda$. What is the wavelength of light emitted in the transition from $n = 4$ to $n = 2$?",
    [
        r"$\frac{20}{27}\lambda$",
        r"$\frac{27}{20}\lambda$",
        r"$\frac{3}{4}\lambda$",
        r"$\frac{9}{16}\lambda$"
    ],
    0,
    r"$\frac{1}{\lambda} = R(1/4 - 1/9) = \frac{5R}{36} \implies \lambda = \frac{36}{5R}$.\n$\frac{1}{\lambda'} = R(1/4 - 1/16) = \frac{3R}{16} \implies \lambda' = \frac{16}{3R}$.\n$$\frac{\lambda'}{\lambda} = \frac{16/(3R)}{36/(5R)} = \frac{16 \times 5}{3 \times 36} = \frac{80}{108} = \frac{20}{27} \implies \lambda' = \frac{20}{27}\lambda$$",
    "Medium"
)

# Q42
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The Lyman series limit of hydrogen has wavelength $\lambda_L$. The Brackett series limit of hydrogen has wavelength:",
    [
        r"$16 \lambda_L$",
        r"$4 \lambda_L$",
        r"$8 \lambda_L$",
        r"$64 \lambda_L$"
    ],
    0,
    r"Lyman limit ($n_1 = 1$): $\lambda_L = 1/R$.\nBrackett limit ($n_1 = 4$): $\lambda_B = 4^2/R = 16/R = 16\lambda_L$.",
    "Easy"
)

# Q43
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"A hydrogen atom at rest in the ground state is excited by absorbing a photon. It subsequently decays to $n = 1$ emitting two photons: one of wavelength $1282\text{ nm}$ ($n = 5 \to 3$) and another. What is the wavelength of the second photon?",
    [
        r"$102.6\text{ nm}$",
        r"$121.6\text{ nm}$",
        r"$97.2\text{ nm}$",
        r"$656.3\text{ nm}$"
    ],
    0,
    r"The electron jumped from $n = 5$ to $n = 3$. To return to the ground state ($n = 1$), it must make a transition from $n = 3 \to 1$ (the $L_\beta$ line). $\Delta E = 12.09\text{ eV} \implies \lambda = \frac{1240\text{ eV}\cdot\text{nm}}{12.09\text{ eV}} \approx 102.6\text{ nm}$.",
    "Hard"
)

# Q44
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"The frequency of the photon emitted in the transition from $n = 2$ to $n = 1$ in a hydrogen atom is $\nu_0$. What is the frequency of the photon emitted in the transition from $n = 3$ to $n = 1$?",
    [
        r"$\frac{32}{27}\nu_0$",
        r"$\frac{27}{32}\nu_0$",
        r"$\frac{4}{3}\nu_0$",
        r"$\frac{8}{9}\nu_0$"
    ],
    0,
    r"$\nu(2 \to 1) \propto 1 - 1/4 = 3/4 = \frac{27}{36}$.\n$\nu(3 \to 1) \propto 1 - 1/9 = 8/9 = \frac{32}{36}$.\n$$\frac{\nu(3 \to 1)}{\nu(2 \to 1)} = \frac{8/9}{3/4} = \frac{32}{27} \implies \nu(3 \to 1) = \frac{32}{27}\nu_0$$",
    "Medium"
)

# Q45
add_q(
    "Hydrogen spectrum and Rydberg formula",
    r"Which of the following transitions in a hydrogen atom emits radiation of maximum frequency?",
    [
        r"$n = 2 \to n = 1$",
        r"$n = 6 \to n = 2$",
        r"$n = 4 \to n = 3$",
        r"$n = 5 \to n = 4$"
    ],
    0,
    r"Transition $n = 2 \to 1$ has energy $\Delta E = 10.2\text{ eV}$.\nFor $n = 6 \to 2$, $\Delta E = 3.4 - 0.38 = 3.02\text{ eV}$.\nFor $n = 4 \to 3$, $\Delta E = 1.51 - 0.85 = 0.66\text{ eV}$.\n$n = 2 \to 1$ emits the highest energy photon and therefore has the maximum frequency.",
    "Easy"
)

print(f"Total questions after Subtopic 3: {len(questions)}")

# ==============================================================================
# SUBTOPIC 4: Mass defect and nuclear force (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Mass defect and nuclear force",
    r"The radius $R$ of a nucleus with mass number $A$ is given by $R = R_0 A^{1/3}$, where $R_0$ is approximately:",
    [
        r"$1.2\text{ fm} = 1.2 \times 10^{-15}\text{ m}$",
        r"$1.2\text{ pm} = 1.2 \times 10^{-12}\text{ m}$",
        r"$1.2\text{ \AA} = 1.2 \times 10^{-10}\text{ m}$",
        r"$1.2\text{ nm} = 1.2 \times 10^{-9}\text{ m}$"
    ],
    0,
    r"Experimental electron scattering and $\alpha$-scattering measurements show that the nuclear radius follows $R = R_0 A^{1/3}$, with $R_0 \approx 1.2\text{ fm}$ (where $1\text{ fm} = 10^{-15}\text{ m}$).",
    "Easy"
)

# Q2
add_q(
    "Mass defect and nuclear force",
    r"The ratio of the radii of two nuclei with mass numbers $A_1 = 27$ and $A_2 = 64$ is:",
    [
        r"$3 : 4$",
        r"$9 : 16$",
        r"$27 : 64$",
        r"$\sqrt{3} : 2$"
    ],
    0,
    r"$$\frac{R_1}{R_2} = \left(\frac{A_1}{A_2}\right)^{1/3} = \left(\frac{27}{64}\right)^{1/3} = \frac{3}{4} = 3 : 4$$",
    "Easy"
)

# Q3
add_q(
    "Mass defect and nuclear force",
    r"The density of nuclear matter is approximately:",
    [
        r"$2.3 \times 10^{17}\text{ kg/m}^3$",
        r"$2.3 \times 10^{14}\text{ kg/m}^3$",
        r"$2.3 \times 10^3\text{ kg/m}^3$",
        r"$2.3 \times 10^{20}\text{ kg/m}^3$"
    ],
    0,
    r"$$\rho = \frac{M}{V} = \frac{A \cdot m_N}{\frac{4}{3}\pi R_0^3 A} = \frac{3 m_N}{4\pi R_0^3} \approx \frac{3(1.66 \times 10^{-27})}{4\pi (1.2 \times 10^{-15})^3} \approx 2.3 \times 10^{17}\text{ kg/m}^3$$",
    "Easy"
)

# Q4
add_q(
    "Mass defect and nuclear force",
    r"The ratio of the nuclear density of $^{56}_{26}\text{Fe}$ to that of $^{238}_{92}\text{U}$ is:",
    [
        r"$1 : 1$",
        r"$56 : 238$",
        r"$238 : 56$",
        r"$(56/238)^{1/3}$"
    ],
    0,
    r"Nuclear mass is proportional to $A$ and nuclear volume is proportional to $R^3 \propto A$. Thus nuclear density $\rho = M/V$ is independent of the mass number $A$, so the ratio is strictly $1 : 1$.",
    "Easy"
)

# Q5
add_q(
    "Mass defect and nuclear force",
    r"The mass defect $\Delta m$ of a nucleus $^{A}_{Z}\text{X}$ having nuclear mass $M$ is given by:",
    [
        r"$\Delta m = [Z m_p + (A - Z) m_n] - M$",
        r"$\Delta m = M - [Z m_p + (A - Z) m_n]$",
        r"$\Delta m = [Z m_p + A m_n] - M$",
        r"$\Delta m = [A m_p + Z m_n] - M$"
    ],
    0,
    r"The mass defect is the difference between the total mass of individual constituent nucleons and the actual mass of the bound nucleus: $\Delta m = [Z m_p + (A - Z) m_n] - M$.",
    "Easy"
)

# Q6
add_q(
    "Mass defect and nuclear force",
    r"The energy equivalent of one atomic mass unit ($1\text{ u}$) is approximately:",
    [
        r"$931.5\text{ MeV}$",
        r"$93.15\text{ MeV}$",
        r"$0.511\text{ MeV}$",
        r"$13.6\text{ eV}$"
    ],
    0,
    r"Using $E = m c^2$: $E = (1.6605 \times 10^{-27}\text{ kg}) \times (2.998 \times 10^8\text{ m/s})^2 \approx 1.492 \times 10^{-10}\text{ J} \approx 931.5\text{ MeV}$.",
    "Easy"
)

# Q7
add_q(
    "Mass defect and nuclear force",
    r"Which of the following is NOT a fundamental property of the nuclear force?",
    [
        r"It is an inverse-square force obeying $F \propto 1/r^2$",
        r"It is strongly attractive at distances of $\sim 1\text{ to }2\text{ fm}$",
        r"It exhibits charge independence ($F_{pp} \approx F_{nn} \approx F_{pn}$)",
        r"It possesses a short-range repulsive core at $r < 0.5\text{ fm}$"
    ],
    0,
    r"The nuclear force is NOT an inverse-square force; it decreases exponentially with distance and drops essentially to zero beyond $\sim 2\text{ to }3\text{ fm}$.",
    "Easy"
)

# Q8
add_q(
    "Mass defect and nuclear force",
    r"The saturation property of nuclear forces means that:",
    [
        r"A nucleon interacts only with its immediate neighboring nucleons",
        r"A nucleus can contain an infinite number of nucleons",
        r"Nuclear force increases indefinitely with mass number $A$",
        r"Nuclear density varies linearly with the number of protons"
    ],
    0,
    r"Because of the extremely short range of nuclear forces, each nucleon interacts only with its immediate neighbors rather than with all other nucleons in the nucleus. This is why the binding energy per nucleon $E_b/A$ remains nearly constant over a broad range of mass numbers.",
    "Medium"
)

# Q9
add_q(
    "Mass defect and nuclear force",
    r"At distances $r < 0.5\text{ fm}$, the nuclear force between two nucleons becomes:",
    [
        r"Strongly repulsive",
        r"Infinite attractive",
        r"Zero",
        r"Purely electromagnetic"
    ],
    0,
    r"At separations below $\sim 0.5\text{ to }0.7\text{ fm}$, the nuclear force has a 'hard core' that turns strongly repulsive, preventing the nucleus from collapsing into a point.",
    "Easy"
)

# Q10
add_q(
    "Mass defect and nuclear force",
    r"The charge independence of nuclear forces was demonstrated by showing that:",
    [
        r"The strong nuclear interaction between $p-p$, $n-n$, and $p-n$ is identical (after subtracting Coulomb repulsion between protons)",
        r"Protons have zero charge inside the nucleus",
        r"Neutrons repel protons at large distances",
        r"Electrons inside the nucleus feel no force"
    ],
    0,
    r"Scattering experiments and energy levels of mirror nuclei prove that nuclear strong force does not depend on the electric charge of the nucleons: $F_{pp} = F_{nn} = F_{pn}$.",
    "Easy"
)

# Q11
add_q(
    "Mass defect and nuclear force",
    r"According to Hideki Yukawa's meson theory, the nuclear force between nucleons arises from the exchange of virtual:",
    [
        r"$\pi$-mesons (pions)",
        r"Photons",
        r"Gluons",
        r"Electrons and positrons"
    ],
    0,
    r"In 1935, Yukawa proposed that nucleons interact by exchanging virtual $\pi$-mesons ($\pi^+, \pi^-, \pi^0$), where the range of the force is related to the meson mass by $R \approx \frac{\hbar}{m_\pi c}$.",
    "Easy"
)

# Q12
add_q(
    "Mass defect and nuclear force",
    r"Nuclei that have the same mass number $A$ but different atomic numbers $Z$ are called:",
    [
        r"Isobars",
        r"Isotopes",
        r"Isotones",
        r"Isomers"
    ],
    0,
    r"Isobars have the same mass number $A$ (e.g., $^{14}_6\text{C}$ and $^{14}_7\text{N}$, $^{40}_{18}\text{Ar}$ and $^{40}_{20}\text{Ca}$) but different atomic numbers $Z$.",
    "Easy"
)

# Q13
add_q(
    "Mass defect and nuclear force",
    r"Nuclei that have the same number of neutrons $N = A - Z$ are called:",
    [
        r"Isotones",
        r"Isotopes",
        r"Isobars",
        r"Mirror nuclei"
    ],
    0,
    r"Isotones are nuclides with identical neutron number $N$, such as $^{14}_6\text{C}$ ($N = 8$) and $^{16}_8\text{O}$ ($N = 8$).",
    "Easy"
)

# Q14
add_q(
    "Mass defect and nuclear force",
    r"A pair of nuclei in which the number of protons in one equals the number of neutrons in the other (and vice versa) are called:",
    [
        r"Mirror nuclei",
        r"Isotopes",
        r"Isotones",
        r"Nuclear isomers"
    ],
    0,
    r"Mirror nuclei have $Z_1 = N_2$ and $N_1 = Z_2$, such as $^7_3\text{Li}$ ($Z=3, N=4$) and $^7_4\text{Be}$ ($Z=4, N=3$).",
    "Easy"
)

# Q15
add_q(
    "Mass defect and nuclear force",
    r"The ratio of the volume of a $^{125}_{52}\text{Te}$ nucleus to that of a $^{8}_{2}\text{He}$ nucleus is:",
    [
        r"$\frac{125}{8}$",
        r"$\frac{5}{2}$",
        r"$\frac{25}{4}$",
        r"$1$"
    ],
    0,
    r"Volume $V = \frac{4}{3}\pi R^3 = \frac{4}{3}\pi R_0^3 A \propto A$. Thus $\frac{V(\text{Te})}{V(\text{He})} = \frac{125}{8}$.",
    "Easy"
)

# Q16
add_q(
    "Mass defect and nuclear force",
    r"If the radius of an $^{27}_{13}\text{Al}$ nucleus is $3.6\text{ fm}$, the radius of a $^{125}_{52}\text{Te}$ nucleus is approximately:",
    [
        r"$6.0\text{ fm}$",
        r"$4.5\text{ fm}$",
        r"$7.2\text{ fm}$",
        r"$5.0\text{ fm}$"
    ],
    0,
    r"$$R_{\text{Te}} = R_{\text{Al}}\left(\frac{A_{\text{Te}}}{A_{\text{Al}}}\right)^{1/3} = 3.6 \times \left(\frac{125}{27}\right)^{1/3} = 3.6 \times \frac{5}{3} = 1.2 \times 5 = 6.0\text{ fm}$$",
    "Medium"
)

# Q17
add_q(
    "Mass defect and nuclear force",
    r"The discovery of the neutron by James Chadwick in 1932 was accomplished by bombarding beryllium with:",
    [
        r"$\alpha$-particles",
        r"$\beta$-particles",
        r"Protons",
        r"$\gamma$-rays"
    ],
    0,
    r"Chadwick discovered the neutron by bombarding a beryllium target with $\alpha$-particles from a polonium source: $$^9_4\text{Be} + ^4_2\text{He} \to ^{12}_6\text{C} + ^1_0\text{n}$$",
    "Easy"
)

# Q18
add_q(
    "Mass defect and nuclear force",
    r"A free neutron is unstable and undergoes $\beta^-$-decay into a proton, an electron, and an antineutrino ($n \to p + e^- + \bar{\nu}_e$) with a mean lifetime of approximately:",
    [
        r"$880\text{ s} \approx 14.7\text{ minutes}$",
        r"$10^{-6}\text{ s}$",
        r"$1\text{ day}$",
        r"Infinite (it never decays)"
    ],
    0,
    r"Free neutrons are unstable against weak interaction $\beta$-decay with a half-life of $\approx 10.2\text{ minutes}$ (mean lifetime $\tau \approx 880\text{ seconds}$). However, bound neutrons inside stable nuclei do not decay.",
    "Medium"
)

# Q19
add_q(
    "Mass defect and nuclear force",
    r"Which of the following forces has the shortest range?",
    [
        r"Strong nuclear force",
        r"Electrostatic force",
        r"Gravitational force",
        r"Magnetic force"
    ],
    0,
    r"The strong nuclear force operates only over distances of $\sim 10^{-15}\text{ m}$ (short range), whereas electromagnetic and gravitational forces have infinite range ($1/r^2$).",
    "Easy"
)

# Q20
add_q(
    "Mass defect and nuclear force",
    r"The spin-dependence of the nuclear force is clearly evidenced by the fact that:",
    [
        r"The deuteron ($^2_1\text{H}$) exists only in the spin-triplet ($S = 1$) state and has no bound singlet ($S = 0$) state",
        r"Two protons cannot repel each other",
        r"Neutrons have zero spin",
        r"Protons and neutrons have different electric charges"
    ],
    0,
    r"The nuclear force is stronger when nucleon spins are parallel ($S = 1$) than when anti-parallel ($S = 0$). Consequently, the deuteron has a bound ground state with $S = 1$, but no bound state with $S = 0$.",
    "Hard"
)

# Q21
add_q(
    "Mass defect and nuclear force",
    r"The non-central (tensor) nature of the nuclear force is confirmed experimentally by:",
    [
        r"The non-zero electric quadrupole moment of the deuteron",
        r"The spherical shape of all nuclei",
        r"The zero magnetic moment of the neutron",
        r"The absence of isotopes in hydrogen"
    ],
    0,
    r"A purely central force produces an spherically symmetric $s$-wave ground state with zero electric quadrupole moment. The measured small positive quadrupole moment of the deuteron demonstrates an admixture of $d$-wave ($\sim 4\%$) resulting from a non-central tensor force.",
    "Hard"
)

# Q22
add_q(
    "Mass defect and nuclear force",
    r"The mass of a deuteron nucleus ($^2_1\text{H}$) is $2.01355\text{ u}$. If $m_p = 1.00728\text{ u}$ and $m_n = 1.00866\text{ u}$, the mass defect of the deuteron is:",
    [
        r"$0.00239\text{ u}$",
        r"$0.00138\text{ u}$",
        r"$0.00312\text{ u}$",
        r"$0.00055\text{ u}$"
    ],
    0,
    r"$$\Delta m = (m_p + m_n) - M_d = (1.00728 + 1.00866) - 2.01355 = 2.01594 - 2.01355 = 0.00239\text{ u}$$",
    "Medium"
)

# Q23
add_q(
    "Mass defect and nuclear force",
    r"For the deuteron with mass defect $\Delta m = 0.00239\text{ u}$, its binding energy is approximately:",
    [
        r"$2.23\text{ MeV}$",
        r"$1.11\text{ MeV}$",
        r"$4.46\text{ MeV}$",
        r"$7.6\text{ MeV}$"
    ],
    0,
    r"$$E_b = \Delta m \times 931.5\text{ MeV} = 0.00239 \times 931.5 \approx 2.226\text{ MeV} \approx 2.23\text{ MeV}$$",
    "Easy"
)

# Q24
add_q(
    "Mass defect and nuclear force",
    r"The binding energy per nucleon of the deuteron ($^2_1\text{H}$) is approximately:",
    [
        r"$1.11\text{ MeV/nucleon}$",
        r"$2.23\text{ MeV/nucleon}$",
        r"$7.07\text{ MeV/nucleon}$",
        r"$8.79\text{ MeV/nucleon}$"
    ],
    0,
    r"$$\frac{E_b}{A} = \frac{2.226\text{ MeV}}{2} \approx 1.11\text{ MeV/nucleon}$$",
    "Easy"
)

# Q25
add_q(
    "Mass defect and nuclear force",
    r"The ratio of the radius of a nucleus of mass number $1$ to that of a nucleus of mass number $8$ is:",
    [
        r"$1 : 2$",
        r"$1 : 8$",
        r"$1 : 4$",
        r"$1 : \sqrt{2}$"
    ],
    0,
    r"$$\frac{R_1}{R_2} = \left(\frac{1}{8}\right)^{1/3} = \frac{1}{2} = 1 : 2$$",
    "Easy"
)

# Q26
add_q(
    "Mass defect and nuclear force",
    r"A nucleus of mass number $A$ splits into two nuclei having mass numbers in the ratio $1 : 2$. The ratio of the radii of the two daughter nuclei is:",
    [
        r"$1 : 2^{1/3}$",
        r"$1 : 2$",
        r"$1 : 4$",
        r"$1 : 2^{2/3}$"
    ],
    0,
    r"$$\frac{R_1}{R_2} = \left(\frac{A_1}{A_2}\right)^{1/3} = \left(\frac{1}{2}\right)^{1/3} = 1 : 2^{1/3}$$",
    "Easy"
)

# Q27
add_q(
    "Mass defect and nuclear force",
    r"The nuclear radius of $^{64}_{30}\text{Zn}$ is $4.8\text{ fm}$. What is the value of $R_0$ used in the formula $R = R_0 A^{1/3}$?",
    [
        r"$1.2\text{ fm}$",
        r"$1.4\text{ fm}$",
        r"$1.0\text{ fm}$",
        r"$1.6\text{ fm}$"
    ],
    0,
    r"$$R_0 = \frac{R}{A^{1/3}} = \frac{4.8}{64^{1/3}} = \frac{4.8}{4} = 1.2\text{ fm}$$",
    "Easy"
)

# Q28
add_q(
    "Mass defect and nuclear force",
    r"Why does the mass of an atomic nucleus always measure LESS than the sum of the masses of its constituent protons and neutrons?",
    [
        r"Because mass is converted into binding energy when nucleons coalesce to form the bound nucleus",
        r"Because electrons neutralize some of the proton mass",
        r"Because neutrons lose mass through neutrino emission",
        r"Because of gravitational attraction between nucleons"
    ],
    0,
    r"According to Einstein's mass-energy equivalence ($E = \Delta m c^2$), the binding energy released when individual nucleons bind together appears as a deficit in the total resting mass of the nucleus.",
    "Easy"
)

# Q29
add_q(
    "Mass defect and nuclear force",
    r"In a stable nucleus, the ratio of neutrons to protons ($N/Z$):",
    [
        r"Is approximately $1$ for light nuclei and increases up to $\sim 1.5$ for heavy nuclei",
        r"Is always exactly $1$ for all stable nuclei",
        r"Decreases from $1$ to $0.5$ as mass number increases",
        r"Is completely random and independent of $A$"
    ],
    0,
    r"For light nuclei ($A \le 40$), $N \approx Z$ ($N/Z \approx 1$). For heavier nuclei, Coulomb repulsion among protons increases as $Z^2$, requiring an excess of neutrons ($N/Z \approx 1.5$ for $^{238}\text{U}$) to provide additional attractive strong nuclear force for stability.",
    "Medium"
)

# Q30
add_q(
    "Mass defect and nuclear force",
    r"If a nucleus of radius $R$ absorbs a neutron without changing its spherical symmetry, the fractional increase in its radius $\Delta R / R$ (for $A \gg 1$) is approximately:",
    [
        r"$\frac{1}{3A}$",
        r"$\frac{1}{A}$",
        r"$\frac{3}{A}$",
        r"$\frac{1}{2A}$"
    ],
    0,
    r"$$R = R_0 A^{1/3} \implies \ln R = \ln R_0 + \frac{1}{3}\ln A$$ Differentiating: $\frac{\Delta R}{R} \approx \frac{1}{3}\frac{\Delta A}{A}$. With $\Delta A = 1$, we get $\frac{\Delta R}{R} \approx \frac{1}{3A}$.",
    "Medium"
)

# Q31
add_q(
    "Mass defect and nuclear force",
    r"The nuclear force between two protons $F_{pp}$, two neutrons $F_{nn}$, and a proton and a neutron $F_{pn}$ at the same separation $r = 1.5\text{ fm}$ satisfy:",
    [
        r"$F_{nn} \approx F_{pn} > F_{pp}$ (due to Coulomb repulsion between protons)",
        r"$F_{pp} > F_{nn} > F_{pn}$",
        r"$F_{pp} = F_{nn} = F_{pn}$ completely with zero electrostatic effect",
        r"$F_{pn} \gg F_{pp} \approx F_{nn}$"
    ],
    0,
    r"The nuclear strong forces are identical ($F_{\text{strong}, pp} = F_{\text{strong}, nn} = F_{\text{strong}, pn}$). However, between two protons, electrostatic Coulomb repulsion slightly opposes the strong attraction, making the net attraction $F_{pp}$ slightly less than $F_{nn}$ and $F_{pn}$.",
    "Hard"
)

# Q32
add_q(
    "Mass defect and nuclear force",
    r"An $\alpha$-particle ($^4_2\text{He}$) has atomic mass $4.0015\text{ u}$. If $m_p = 1.00728\text{ u}$ and $m_n = 1.00866\text{ u}$, the mass defect of the $\alpha$-particle is:",
    [
        r"$0.03038\text{ u}$",
        r"$0.01519\text{ u}$",
        r"$0.06076\text{ u}$",
        r"$0.00759\text{ u}$"
    ],
    0,
    r"$$\Delta m = 2 m_p + 2 m_n - M_\alpha = 2(1.00728) + 2(1.00866) - 4.0015 = 2.01456 + 2.01732 - 4.0015 = 4.03188 - 4.0015 = 0.03038\text{ u}$$",
    "Medium"
)

# Q33
add_q(
    "Mass defect and nuclear force",
    r"Using $\Delta m = 0.03038\text{ u}$ for the $\alpha$-particle, its total binding energy and binding energy per nucleon are approximately:",
    [
        r"$28.3\text{ MeV}$ and $7.07\text{ MeV/nucleon}$",
        r"$14.1\text{ MeV}$ and $3.54\text{ MeV/nucleon}$",
        r"$56.6\text{ MeV}$ and $14.1\text{ MeV/nucleon}$",
        r"$7.07\text{ MeV}$ and $1.77\text{ MeV/nucleon}$"
    ],
    0,
    r"$$E_b = 0.03038 \times 931.5\text{ MeV} \approx 28.3\text{ MeV}$$ Binding energy per nucleon: $$\frac{E_b}{A} = \frac{28.3}{4} \approx 7.07\text{ MeV/nucleon}$$ This high binding energy explains why the $\alpha$-particle is exceptionally stable.",
    "Easy"
)

# Q34
add_q(
    "Mass defect and nuclear force",
    r"The nuclear potential energy $V(r)$ of two nucleons as a function of separation $r$ has its minimum value at approximately:",
    [
        r"$r \approx 0.8\text{ fm}$",
        r"$r \approx 0.1\text{ fm}$",
        r"$r \approx 2.5\text{ fm}$",
        r"$r \approx 5.0\text{ fm}$"
    ],
    0,
    r"The potential well of nucleon-nucleon interaction reaches its deepest minimum at $r_0 \approx 0.8\text{ fm}$ (where the attractive and repulsive forces balance), beyond which it is attractive and rapidly decays.",
    "Medium"
)

# Q35
add_q(
    "Mass defect and nuclear force",
    r"Which of the following particles is stable in a free state?",
    [
        r"Proton",
        r"Neutron",
        r"Pion",
        r"Muon"
    ],
    0,
    r"The free proton is stable (its lifetime is experimentally known to exceed $10^{34}\text{ years}$). In contrast, free neutrons decay with a lifetime of $\sim 880\text{ s}$, and pions/muons decay in microseconds or nanoseconds.",
    "Easy"
)

# Q36
add_q(
    "Mass defect and nuclear force",
    r"The radius of a $^{12}_6\text{C}$ nucleus is $R$. What is the radius of a $^{96}_{42}\text{Mo}$ nucleus in terms of $R$?",
    [
        r"$2R$",
        r"$4R$",
        r"$8R$",
        r"$\sqrt{8}R$"
    ],
    0,
    r"$$\frac{R_{\text{Mo}}}{R_{\text{C}}} = \left(\frac{96}{12}\right)^{1/3} = 8^{1/3} = 2 \implies R_{\text{Mo}} = 2R$$",
    "Easy"
)

# Q37
add_q(
    "Mass defect and nuclear force",
    r"The packing fraction $f$ of a nucleus of mass $M$ (in $\text{u}$) and mass number $A$ is defined as:",
    [
        r"$f = \frac{M - A}{A}$",
        r"$f = \frac{A - M}{M}$",
        r"$f = \frac{M}{A}$",
        r"$f = \frac{A}{M}$"
    ],
    0,
    r"Packing fraction is defined as $f = \frac{M - A}{A}$, where $M$ is the actual isotopic mass in atomic mass units and $A$ is the mass number.",
    "Easy"
)

# Q38
add_q(
    "Mass defect and nuclear force",
    r"A negative packing fraction indicates that the nucleus is:",
    [
        r"Stable (mass is less than mass number due to binding energy)",
        r"Unstable and radioactive",
        r"Non-existent in nature",
        r"Positively charged only"
    ],
    0,
    r"A negative packing fraction ($M < A$) means that mass has been converted into binding energy, indicating that the nucleus is stable.",
    "Easy"
)

# Q39
add_q(
    "Mass defect and nuclear force",
    r"The ratio of the electric force to the gravitational force between two protons inside a nucleus is of the order of:",
    [
        r"$10^{36}$",
        r"$10^{20}$",
        r"$10^2$",
        r"$10^{42}$"
    ],
    0,
    r"$$\frac{F_e}{F_g} = \frac{e^2 / (4\pi\varepsilon_0 r^2)}{G m_p^2 / r^2} = \frac{9 \times 10^9 \times (1.6 \times 10^{-19})^2}{6.67 \times 10^{-11} \times (1.67 \times 10^{-27})^2} \approx 1.24 \times 10^{36}$$",
    "Medium"
)

# Q40
add_q(
    "Mass defect and nuclear force",
    r"The ratio of the strong nuclear force to the electrostatic force between two protons at a separation of $1\text{ fm}$ is of the order of:",
    [
        r"$10^2$",
        r"$10^6$",
        r"$10^{-2}$",
        r"$10^{10}$"
    ],
    0,
    r"At nuclear separations ($\sim 1\text{ fm}$), the strong nuclear force is roughly $100$ times stronger than the electrostatic repulsive force.",
    "Easy"
)

# Q41
add_q(
    "Mass defect and nuclear force",
    r"The rest mass energy of an electron ($m_e \approx 9.1 \times 10^{-31}\text{ kg}$) is approximately:",
    [
        r"$0.511\text{ MeV}$",
        r"$1.022\text{ MeV}$",
        r"$931.5\text{ MeV}$",
        r"$13.6\text{ eV}$"
    ],
    0,
    r"$$E_0 = m_e c^2 = (9.109 \times 10^{-31}\text{ kg}) \times (3 \times 10^8\text{ m/s})^2 \approx 8.198 \times 10^{-14}\text{ J} \approx 0.511\text{ MeV}$$",
    "Easy"
)

# Q42
add_q(
    "Mass defect and nuclear force",
    r"The rest mass energy of a proton ($m_p \approx 1.6726 \times 10^{-27}\text{ kg}$) is approximately:",
    [
        r"$938.3\text{ MeV}$",
        r"$939.6\text{ MeV}$",
        r"$931.5\text{ MeV}$",
        r"$0.511\text{ MeV}$"
    ],
    0,
    r"Rest mass of proton: $m_p c^2 = 1.007276\text{ u} \times 931.5\text{ MeV/u} \approx 938.3\text{ MeV}$. (The neutron has $m_n c^2 \approx 939.6\text{ MeV}$).",
    "Easy"
)

# Q43
add_q(
    "Mass defect and nuclear force",
    r"Two nuclei have mass numbers in the ratio $1 : 3$. The ratio of their nuclear densities is:",
    [
        r"$1 : 1$",
        r"$1 : 3$",
        r"$1 : 27$",
        r"$1 : 3^{1/3}$"
    ],
    0,
    r"Since nuclear density $\rho \propto \frac{A}{R^3} \propto \frac{A}{(A^{1/3})^3} = \text{constant}$, nuclear density is identical for all nuclei. The ratio is $1 : 1$.",
    "Easy"
)

# Q44
add_q(
    "Mass defect and nuclear force",
    r"Which of the following statements about nuclear forces is INCORRECT?",
    [
        r"They obey the inverse square law like gravitational and Coulomb forces",
        r"They are short-range forces",
        r"They show the property of saturation",
        r"They are charge-independent"
    ],
    0,
    r"Nuclear forces do NOT obey the inverse square law; their magnitude falls off exponentially with distance.",
    "Easy"
)

# Q45
add_q(
    "Mass defect and nuclear force",
    r"The mass of an iron nucleus $^{56}_{26}\text{Fe}$ is $55.9349\text{ u}$. With $m_p = 1.00783\text{ u}$ and $m_n = 1.00867\text{ u}$, the binding energy per nucleon of $^{56}\text{Fe}$ is approximately:",
    [
        r"$8.79\text{ MeV/nucleon}$",
        r"$7.6\text{ MeV/nucleon}$",
        r"$1.1\text{ MeV/nucleon}$",
        r"$9.8\text{ MeV/nucleon}$"
    ],
    0,
    r"Constituent mass: $26(1.00783) + 30(1.00867) = 26.20358 + 30.26010 = 56.46368\text{ u}$.\nMass defect: $\Delta m = 56.46368 - 55.9349 = 0.52878\text{ u}$.\nTotal binding energy: $E_b = 0.52878 \times 931.5 \approx 492.56\text{ MeV}$.\n$E_b/A = \frac{492.56}{56} \approx 8.79\text{ MeV/nucleon}$, which represents the peak of the nuclear stability curve.",
    "Medium"
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

balance_subtopic("Hydrogen spectrum and Rydberg formula")
balance_subtopic("Mass defect and nuclear force")

# Save to batch 2
with open("scripts/atoms_nuclei/an_batch2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Atoms & Nuclei Batch 2 generated successfully! Total questions: {len(questions)}")
