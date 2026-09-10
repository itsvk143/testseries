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
# SUBTOPIC 1: Atomic models (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Atomic models",
    r"In the Geiger-Marsden $\alpha$-particle scattering experiment, what fraction of the incident $\alpha$-particles were deflected by more than $90^\circ$?",
    [
        r"About $1$ in $8000$",
        r"About $1$ in $100$",
        r"About $1$ in $10^6$",
        r"About $1$ in $10$"
    ],
    0,
    r"In Rutherford's alpha-scattering experiment (performed by Geiger and Marsden), only about $1$ in $8000$ (or roughly $0.014\%$) of the incident $\alpha$-particles were deflected by angles greater than $90^\circ$, leading to the discovery of the tiny, dense atomic nucleus.",
    "Easy"
)

# Q2
add_q(
    "Atomic models",
    r"According to Rutherford's scattering formula, the number of $\alpha$-particles $N(\theta)$ scattered at an angle $\theta$ per unit area is proportional to:",
    [
        r"$\frac{1}{\sin^4(\theta/2)}$",
        r"$\frac{1}{\sin^2(\theta/2)}$",
        r"$\frac{1}{\cos^4(\theta/2)}$",
        r"$\frac{1}{\sin(\theta/2)}$"
    ],
    0,
    r"Rutherford's scattering law states: $$N(\theta) \propto \frac{Z^2 e^4}{(E_k)^2 \sin^4(\theta/2)}$$ Hence, $N(\theta) \propto \frac{1}{\sin^4(\theta/2)}$.",
    "Easy"
)

# Q3
add_q(
    "Atomic models",
    r"In an $\alpha$-particle scattering experiment, the number of particles scattered at an angle of $60^\circ$ is $N_0$. The number of $\alpha$-particles scattered at an angle of $90^\circ$ is:",
    [
        r"$\frac{N_0}{4}$",
        r"$\frac{N_0}{2}$",
        r"$4 N_0$",
        r"$\frac{N_0}{8}$"
    ],
    0,
    r"Since $N(\theta) \propto \frac{1}{\sin^4(\theta/2)}$: $$\frac{N(90^\circ)}{N(60^\circ)} = \frac{\sin^4(30^\circ)}{\sin^4(45^\circ)} = \frac{(1/2)^4}{(1/\sqrt{2})^4} = \frac{1/16}{1/4} = \frac{1}{4}$$ Hence $N(90^\circ) = \frac{N_0}{4}$.",
    "Medium"
)

# Q4
add_q(
    "Atomic models",
    r"The distance of closest approach $r_0$ of an $\alpha$-particle of mass $m$ and velocity $v$ approaching a target nucleus of atomic number $Z$ head-on is:",
    [
        r"$\frac{2 Z e^2}{4\pi\varepsilon_0 \cdot \frac{1}{2}mv^2}$",
        r"$\frac{Z e^2}{4\pi\varepsilon_0 \cdot \frac{1}{2}mv^2}$",
        r"$\frac{4 Z e^2}{4\pi\varepsilon_0 \cdot mv^2}$",
        r"$\frac{Z e^2}{2\pi\varepsilon_0 \cdot mv}$"
    ],
    0,
    r"At the distance of closest approach, initial kinetic energy converts entirely into electrostatic potential energy: $$\frac{1}{2}mv^2 = \frac{1}{4\pi\varepsilon_0}\frac{(2e)(Ze)}{r_0} \implies r_0 = \frac{1}{4\pi\varepsilon_0}\frac{2 Z e^2}{E_k}$$",
    "Easy"
)

# Q5
add_q(
    "Atomic models",
    r"An $\alpha$-particle of kinetic energy $K$ is bombarded against a gold nucleus ($Z = 79$). If its kinetic energy is doubled, the distance of closest approach becomes:",
    [
        r"Half of its initial value",
        r"Twice its initial value",
        r"Four times its initial value",
        r"One-fourth of its initial value"
    ],
    0,
    r"Distance of closest approach is $r_0 = \frac{2Ze^2}{4\pi\varepsilon_0 K} \propto \frac{1}{K}$. If $K$ is doubled, $r_0$ is halved.",
    "Easy"
)

# Q6
add_q(
    "Atomic models",
    r"The impact parameter $b$ in Rutherford scattering is related to the scattering angle $\theta$ and kinetic energy $K$ by:",
    [
        r"$b = \frac{Z e^2 \cot(\theta/2)}{4\pi\varepsilon_0 K}$",
        r"$b = \frac{Z e^2 \tan(\theta/2)}{4\pi\varepsilon_0 K}$",
        r"$b = \frac{2 Z e^2 \sin(\theta/2)}{4\pi\varepsilon_0 K}$",
        r"$b = \frac{Z e^2 \cos(\theta/2)}{4\pi\varepsilon_0 K^2}$"
    ],
    0,
    r"The relation between impact parameter $b$ and scattering angle $\theta$ is: $$b = \frac{1}{4\pi\varepsilon_0}\frac{Z e^2 \cot(\theta/2)}{K}$$",
    "Medium"
)

# Q7
add_q(
    "Atomic models",
    r"For an $\alpha$-particle with impact parameter $b = 0$, the scattering angle $\theta$ is:",
    [
        r"$180^\circ$",
        r"$0^\circ$",
        r"$90^\circ$",
        r"$45^\circ$"
    ],
    0,
    r"When $b = 0$ (head-on collision), $\cot(\theta/2) = 0 \implies \theta/2 = 90^\circ \implies \theta = 180^\circ$. The particle retraces its path.",
    "Easy"
)

# Q8
add_q(
    "Atomic models",
    r"For very large impact parameter ($b \to \infty$), the deflection of the $\alpha$-particle is:",
    [
        r"Nearly $0^\circ$ (almost undeflected)",
        r"$180^\circ$",
        r"$90^\circ$",
        r"$45^\circ$"
    ],
    0,
    r"As $b \to \infty$, the $\alpha$-particle passes far from the nucleus experiencing negligible electrostatic repulsive force, so the scattering angle $\theta \to 0^\circ$.",
    "Easy"
)

# Q9
add_q(
    "Atomic models",
    r"The major failure of Rutherford's nuclear model of the atom was its inability to explain:",
    [
        r"The stability of the atom and the discrete line spectrum of hydrogen",
        r"The existence of the positive nucleus",
        r"The large angle scattering of $\alpha$-particles",
        r"The mass distribution in the atom"
    ],
    0,
    r"According to classical electrodynamics, an accelerating electron revolving around the nucleus must radiate energy continuously and spiral into the nucleus within $\sim 10^{-10}\text{ s}$, and emit a continuous spectrum. Rutherford's model could not explain atomic stability or discrete line spectra.",
    "Easy"
)

# Q10
add_q(
    "Atomic models",
    r"In Thomson's plum pudding model of the atom:",
    [
        r"Positive charge is uniformly distributed throughout a sphere with electrons embedded in it",
        r"Positive charge is concentrated at a tiny central core with electrons orbiting around it",
        r"Electrons and protons are concentrated in the center with neutrons surrounding them",
        r"The atom is mostly empty space with no net charge anywhere"
    ],
    0,
    r"J.J. Thomson proposed that an atom is a solid sphere of positive charge of radius $\sim 10^{-10}\text{ m}$ in which electrons are embedded like plums in a pudding.",
    "Easy"
)

# Q11
add_q(
    "Atomic models",
    r"An $\alpha$-particle of energy $5\text{ MeV}$ is scattered through $180^\circ$ by a fixed target nucleus of atomic number $Z = 50$. The distance of closest approach is approximately (take $\frac{1}{4\pi\varepsilon_0} = 9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$, $e = 1.6 \times 10^{-19}\text{ C}$):",
    [
        r"$2.88 \times 10^{-14}\text{ m}$",
        r"$1.44 \times 10^{-14}\text{ m}$",
        r"$5.76 \times 10^{-14}\text{ m}$",
        r"$7.2 \times 10^{-15}\text{ m}$"
    ],
    0,
    r"$$r_0 = \frac{1}{4\pi\varepsilon_0}\frac{2Ze^2}{K} = \frac{(9 \times 10^9) \times 2 \times 50 \times (1.6 \times 10^{-19})^2}{5 \times 10^6 \times 1.6 \times 10^{-19}} = \frac{9 \times 10^{11} \times 1.6 \times 10^{-19}}{5 \times 10^6} = 2.88 \times 10^{-14}\text{ m}$$",
    "Medium"
)

# Q12
add_q(
    "Atomic models",
    r"The order of magnitude of the radius of an atomic nucleus compared to the radius of an atom is approximately:",
    [
        r"$10^{-15}\text{ m}$ compared to $10^{-10}\text{ m}$ (ratio of $10^{-5}$)",
        r"$10^{-10}\text{ m}$ compared to $10^{-15}\text{ m}$ (ratio of $10^5$)",
        r"$10^{-12}\text{ m}$ compared to $10^{-10}\text{ m}$ (ratio of $10^{-2}$)",
        r"$10^{-18}\text{ m}$ compared to $10^{-10}\text{ m}$ (ratio of $10^{-8}$)"
    ],
    0,
    r"The atomic radius is of the order of $10^{-10}\text{ m}$ ($1\text{ \AA}$), whereas the nuclear radius is of the order of $10^{-15}\text{ m}$ ($1\text{ to }10\text{ fm}$), giving a ratio of $\sim 10^{-5}$.",
    "Easy"
)

# Q13
add_q(
    "Atomic models",
    r"If an $\alpha$-particle and a proton are accelerated through the same potential difference $V$ and approach a gold nucleus head-on, the ratio of their distances of closest approach $r_{0,\alpha} / r_{0,p}$ is:",
    [
        r"$1 : 1$",
        r"$2 : 1$",
        r"$1 : 2$",
        r"$4 : 1$"
    ],
    0,
    r"Kinetic energy gained: $K = q V$. Distance of closest approach: $r_0 = \frac{1}{4\pi\varepsilon_0}\frac{q (Ze)}{K} = \frac{1}{4\pi\varepsilon_0}\frac{q (Ze)}{q V} = \frac{Ze}{4\pi\varepsilon_0 V}$.\nNotice that the charge of the projectile $q$ cancels out! Thus $r_0$ depends only on the accelerating voltage $V$ and target $Z$. Hence $r_{0,\alpha} / r_{0,p} = 1 : 1$.",
    "Hard"
)

# Q14
add_q(
    "Atomic models",
    r"If an $\alpha$-particle and a proton have the SAME initial kinetic energy, the ratio of their distances of closest approach to a given nucleus $r_{0,\alpha} / r_{0,p}$ is:",
    [
        r"$2 : 1$",
        r"$1 : 1$",
        r"$1 : 2$",
        r"$4 : 1$"
    ],
    0,
    r"$r_0 = \frac{1}{4\pi\varepsilon_0}\frac{q (Ze)}{K} \propto q$. Since $q_\alpha = 2e$ and $q_p = e$, $\frac{r_{0,\alpha}}{r_{0,p}} = \frac{2e}{e} = 2 : 1$.",
    "Medium"
)

# Q15
add_q(
    "Atomic models",
    r"In Rutherford's scattering experiment, what provided the necessary central force for the deflection of $\alpha$-particles?",
    [
        r"Electrostatic Coulomb repulsion between the positive nucleus and the $\alpha$-particle",
        r"Nuclear attraction between nucleons",
        r"Gravitational attraction between masses",
        r"Magnetic Lorentz force due to nuclear spin"
    ],
    0,
    r"The trajectory of an $\alpha$-particle is determined purely by the central electrostatic repulsive Coulomb force $F = \frac{1}{4\pi\varepsilon_0}\frac{(2e)(Ze)}{r^2}$ between the positively charged nucleus and the $\alpha$-particle.",
    "Easy"
)

# Q16
add_q(
    "Atomic models",
    r"The trajectory of an $\alpha$-particle in the Coulomb field of a heavy nucleus is:",
    [
        r"A hyperbola with the nucleus at the exterior focus",
        r"An ellipse with the nucleus at one focus",
        r"A parabola with the nucleus at the focus",
        r"A circle around the nucleus"
    ],
    0,
    r"Under an inverse-square repulsive central force with total energy $E > 0$, the orbit is open and forms a hyperbola with the center of force (the nucleus) at the exterior focus.",
    "Medium"
)

# Q17
add_q(
    "Atomic models",
    r"In the Rutherford scattering experiment, if the thickness of the gold foil is doubled (while remaining sufficiently thin to avoid multiple scattering), the number of scattered particles at a given angle will:",
    [
        r"Be doubled",
        r"Remain unchanged",
        r"Be halved",
        r"Increase fourfold"
    ],
    0,
    r"The number of target nuclei per unit area is $n \cdot t$, where $t$ is foil thickness. The scattering probability is directly proportional to the number of target nuclei: $N(\theta) \propto t$. Doubling $t$ doubles $N(\theta)$.",
    "Medium"
)

# Q18
add_q(
    "Atomic models",
    r"An $\alpha$-particle is scattered through an angle $\theta = 120^\circ$. What is the ratio of particles scattered at $120^\circ$ to those scattered at $60^\circ$?",
    [
        r"$\frac{1}{9}$",
        r"$\frac{1}{3}$",
        r"$\frac{1}{27}$",
        r"$9$"
    ],
    0,
    r"$\frac{N(120^\circ)}{N(60^\circ)} = \frac{\sin^4(30^\circ)}{\sin^4(60^\circ)} = \frac{(1/2)^4}{(\sqrt{3}/2)^4} = \frac{1/16}{9/16} = \frac{1}{9}$.",
    "Medium"
)

# Q19
add_q(
    "Atomic models",
    r"Why was gold foil chosen by Rutherford, Geiger, and Marsden for the $\alpha$-particle scattering experiment?",
    [
        r"Gold is extremely malleable (can be made as thin as $\sim 10^{-7}\text{ m}$) and has high $Z$ ($Z = 79$)",
        r"Gold is the only metal that does not absorb $\alpha$-particles",
        r"Gold atoms have zero nuclear charge",
        r"Gold reflects $\alpha$-particles like light reflects from a mirror"
    ],
    0,
    r"Gold can be hammered into extremely thin foils ($\sim 2.1 \times 10^{-7}\text{ m}$ or $\sim 400$ atoms thick) so that an $\alpha$-particle undergoes only a single collision, and its large atomic number ($Z = 79$) produces strong Coulomb repulsion.",
    "Easy"
)

# Q20
add_q(
    "Atomic models",
    r"In Thomson's model of the atom, an electron oscillates about its equilibrium position. According to classical physics, the frequency of emitted radiation would be:",
    [
        r"Equal to the frequency of oscillation of the electron",
        r"Twice the frequency of oscillation",
        r"Independent of the frequency of oscillation",
        r"Zero because Thomson's atom cannot radiate"
    ],
    0,
    r"In Thomson's model, electrons embedded in the positive fluid oscillate with simple harmonic motion. Classical electrodynamics predicts that an oscillating charge radiates EM waves at its mechanical oscillation frequency.",
    "Easy"
)

# Q21
add_q(
    "Atomic models",
    r"Which of the following observations in the $\alpha$-particle scattering experiment proved that the atom is mostly empty space?",
    [
        r"Most of the $\alpha$-particles passed through the foil undeflected or with very small deflections",
        r"Some $\alpha$-particles were deflected by more than $90^\circ$",
        r"A few $\alpha$-particles retraced their path",
        r"All $\alpha$-particles were absorbed by the foil"
    ],
    0,
    r"Since more than $99\%$ of the $\alpha$-particles passed straight through the foil without significant deflection, Rutherford concluded that most of the volume of the atom is empty space.",
    "Easy"
)

# Q22
add_q(
    "Atomic models",
    r"The scintillation detector used by Geiger and Marsden to observe scattered $\alpha$-particles consisted of a microscope and a screen coated with:",
    [
        r"Zinc sulfide ($\text{ZnS}$)",
        r"Sodium chloride ($\text{NaCl}$)",
        r"Barium sulfate ($\text{BaSO}_4$)",
        r"Lead oxide ($\text{PbO}$)"
    ],
    0,
    r"A zinc sulfide ($\text{ZnS}$) phosphorescent screen was used. When an $\alpha$-particle strikes the $\text{ZnS}$ screen, it produces a tiny flash of light (scintillation) visible under a microscope.",
    "Easy"
)

# Q23
add_q(
    "Atomic models",
    r"An $\alpha$-particle has twice the charge and four times the mass of a proton. If both have the same momentum $p$, the ratio of their distance of closest approach to a nucleus $r_{0,\alpha} / r_{0,p}$ is:",
    [
        r"$8 : 1$",
        r"$2 : 1$",
        r"$4 : 1$",
        r"$1 : 2$"
    ],
    0,
    r"Kinetic energy in terms of momentum: $K = \frac{p^2}{2m}$.\n$r_0 = \frac{2Ze \cdot q}{4\pi\varepsilon_0 K} = \frac{2Ze \cdot q}{4\pi\varepsilon_0 (p^2/2m)} \propto q \cdot m$.\nFor $\alpha$: $q_\alpha = 2e, m_\alpha = 4m_p \implies q_\alpha m_\alpha = 8 (e m_p)$.\nFor proton: $q_p = e, m_p = m_p \implies q_p m_p = 1 (e m_p)$.\nTherefore, $\frac{r_{0,\alpha}}{r_{0,p}} = \frac{8}{1} = 8 : 1$.",
    "Hard"
)

# Q24
add_q(
    "Atomic models",
    r"The distance of closest approach gives an upper limit to:",
    [
        r"The size (radius) of the target nucleus",
        r"The radius of the atom",
        r"The de Broglie wavelength of the electron",
        r"The speed of light inside the nucleus"
    ],
    0,
    r"Since the $\alpha$-particle turns around before actually touching or penetrating the nuclear surface (governed purely by Coulomb repulsion), the distance of closest approach $r_0 \sim 10^{-14}\text{ m}$ provides an upper bound on the nuclear size.",
    "Easy"
)

# Q25
add_q(
    "Atomic models",
    r"If the kinetic energy of an incident $\alpha$-particle in head-on collision is $K = 7.7\text{ MeV}$, the distance of closest approach to a gold nucleus ($Z = 79$) is approximately:",
    [
        r"$3.0 \times 10^{-14}\text{ m}$",
        r"$3.0 \times 10^{-10}\text{ m}$",
        r"$3.0 \times 10^{-12}\text{ m}$",
        r"$3.0 \times 10^{-15}\text{ m}$"
    ],
    0,
    r"$$r_0 = \frac{(9 \times 10^9) \times 2 \times 79 \times (1.6 \times 10^{-19})^2}{7.7 \times 10^6 \times 1.6 \times 10^{-19}} \approx 2.95 \times 10^{-14}\text{ m} \approx 3.0 \times 10^{-14}\text{ m} = 30\text{ fm}$$",
    "Medium"
)

# Q26
add_q(
    "Atomic models",
    r"The differential scattering cross section $\frac{d\sigma}{d\Omega}$ in Rutherford scattering depends on the kinetic energy $E$ of the projectile as:",
    [
        r"$\frac{d\sigma}{d\Omega} \propto \frac{1}{E^2}$",
        r"$\frac{d\sigma}{d\Omega} \propto \frac{1}{E}$",
        r"$\frac{d\sigma}{d\Omega} \propto E^2$",
        r"$\frac{d\sigma}{d\Omega} \propto \sqrt{E}$"
    ],
    0,
    r"From Rutherford's scattering formula: $\frac{d\sigma}{d\Omega} = \left(\frac{Z_1 Z_2 e^2}{4\pi\varepsilon_0 \cdot 4E}\right)^2 \frac{1}{\sin^4(\theta/2)} \propto \frac{1}{E^2}$.",
    "Medium"
)

# Q27
add_q(
    "Atomic models",
    r"When an $\alpha$-particle undergoes Rutherford scattering at an angle $\theta$, the angle of scattering $\theta$ decreases when the impact parameter $b$:",
    [
        r"Increases",
        r"Decreases",
        r"Remains zero",
        r"Is equal to the de Broglie wavelength"
    ],
    0,
    r"Since $b = \frac{Z e^2}{4\pi\varepsilon_0 K}\cot(\theta/2)$, as $b$ increases, $\cot(\theta/2)$ increases, which means $\theta/2$ decreases and therefore $\theta$ decreases.",
    "Easy"
)

# Q28
add_q(
    "Atomic models",
    r"In an $\alpha$-particle scattering experiment, if a target foil of silver ($Z = 47$) is substituted for a gold foil ($Z = 79$) of the same number of atoms per unit area, the distance of closest approach for the same kinetic energy will:",
    [
        r"Decrease in the ratio $\frac{47}{79}$",
        r"Increase in the ratio $\frac{79}{47}$",
        r"Remain unchanged",
        r"Decrease in the ratio $\sqrt{\frac{47}{79}}$"
    ],
    0,
    r"$r_0 \propto Z$. Therefore, substituting silver for gold reduces $r_0$ by a factor of $\frac{Z_{\text{Ag}}}{Z_{\text{Au}}} = \frac{47}{79}$.",
    "Easy"
)

# Q29
add_q(
    "Atomic models",
    r"In Rutherford's atomic model, the electrostatic force of attraction between the revolving electron and the nucleus provides:",
    [
        r"The necessary centripetal force $\frac{m v^2}{r}$",
        r"A centrifugal force pulling the electron away",
        r"A nuclear strong force",
        r"Gravitational acceleration"
    ],
    0,
    r"Rutherford assumed that electrons revolve in planetary circular orbits where the Coulomb attraction provides the centripetal force: $\frac{1}{4\pi\varepsilon_0}\frac{Z e^2}{r^2} = \frac{m v^2}{r}$.",
    "Easy"
)

# Q30
add_q(
    "Atomic models",
    r"The classical lifetime of an electron in a hydrogen atom calculated using Larmor's radiation formula (which caused the downfall of Rutherford's model) is of the order of:",
    [
        r"$10^{-10}\text{ to }10^{-11}\text{ s}$",
        r"$10^{-3}\text{ s}$",
        r"$1\text{ s}$",
        r"$10^8\text{ s}$"
    ],
    0,
    r"Classical electrodynamics predicts that an accelerated electron radiating power $P = \frac{e^2 a^2}{6\pi\varepsilon_0 c^3}$ would spiral into the proton in approximately $\tau \approx 1.5 \times 10^{-11}\text{ s}$.",
    "Medium"
)

# Q31
add_q(
    "Atomic models",
    r"In the $\alpha$-scattering experiment, what percentage of the total mass of the atom is concentrated in the nucleus?",
    [
        r"More than $99.9\%$",
        r"About $50\%$",
        r"About $75\%$",
        r"Less than $10\%$"
    ],
    0,
    r"Because electrons are extremely light ($m_e \approx \frac{1}{1836} m_p$), virtually all the mass ($>99.95\%$) of an atom resides in the compact nucleus.",
    "Easy"
)

# Q32
add_q(
    "Atomic models",
    r"In an $\alpha$-scattering experiment, $100$ particles per minute are deflected at an angle of $90^\circ$. How many particles per minute will be deflected at an angle of $60^\circ$?",
    [
        r"$400$",
        r"$200$",
        r"$25$",
        r"$800$"
    ],
    0,
    r"$\frac{N(60^\circ)}{N(90^\circ)} = \frac{\sin^4(45^\circ)}{\sin^4(30^\circ)} = \frac{(1/\sqrt{2})^4}{(1/2)^4} = \frac{1/4}{1/16} = 4$. Thus $N(60^\circ) = 4 \times 100 = 400\text{ particles/min}$.",
    "Medium"
)

# Q33
add_q(
    "Atomic models",
    r"What happens to the scattering angle $\theta$ in Rutherford scattering when the charge on the target nucleus increases?",
    [
        r"The scattering angle increases for a given impact parameter",
        r"The scattering angle decreases for a given impact parameter",
        r"The scattering angle remains unchanged",
        r"Scattering ceases completely"
    ],
    0,
    r"Since $\cot(\theta/2) = \frac{4\pi\varepsilon_0 K b}{Z e^2}$, increasing $Z$ decreases $\cot(\theta/2)$, which increases $\theta/2$ and thus increases the scattering angle $\theta$.",
    "Medium"
)

# Q34
add_q(
    "Atomic models",
    r"In Rutherford scattering, which physical quantities of the $\alpha$-particle are conserved throughout its hyperbolic trajectory?",
    [
        r"Total energy and angular momentum about the target nucleus",
        r"Linear momentum and kinetic energy",
        r"Linear momentum and angular momentum",
        r"Only potential energy"
    ],
    0,
    r"Because the Coulomb electrostatic force is conservative and strictly central (torque $\vec{\tau} = \vec{r} \times \vec{F} = 0$), both the total mechanical energy $E$ and the angular momentum $\vec{L}$ about the nucleus are strictly conserved.",
    "Medium"
)

# Q35
add_q(
    "Atomic models",
    r"An $\alpha$-particle with velocity $v$ approaches a nucleus head-on to a distance of closest approach $r_0$. If its initial velocity is $2v$, the new distance of closest approach is:",
    [
        r"$\frac{r_0}{4}$",
        r"$\frac{r_0}{2}$",
        r"$2r_0$",
        r"$4r_0$"
    ],
    0,
    r"Since $r_0 \propto \frac{1}{K} = \frac{1}{\frac{1}{2}mv^2} \propto \frac{1}{v^2}$, doubling the velocity reduces $r_0$ by a factor of $2^2 = 4$. Thus $r_0' = r_0/4$.",
    "Easy"
)

# Q36
add_q(
    "Atomic models",
    r"Why can an $\alpha$-particle scattering experiment NOT be performed using a hydrogen target gas to discover the nucleus?",
    [
        r"A hydrogen nucleus (proton) has mass smaller than an $\alpha$-particle and would recoil forward with high speed, invalidating the fixed-target assumption",
        r"Hydrogen gas has no nuclear charge",
        r"Hydrogen atoms absorb all $\alpha$-particles completely",
        r"Hydrogen is completely transparent to $\alpha$-particles with zero electrostatic force"
    ],
    0,
    r"The mass of an $\alpha$-particle ($m_\alpha \approx 4\text{ u}$) is four times that of a proton ($m_p \approx 1\text{ u}$). An $\alpha$-particle hitting a light proton knocks it forward and cannot be deflected at large angles or back-scattered.",
    "Medium"
)

# Q37
add_q(
    "Atomic models",
    r"The volume of an atom is approximately how many times larger than the volume of its nucleus?",
    [
        r"$10^{15}\text{ times}$",
        r"$10^5\text{ times}$",
        r"$10^{10}\text{ times}$",
        r"$10^3\text{ times}$"
    ],
    0,
    r"$\frac{V_{\text{atom}}}{V_{\text{nucleus}}} = \left(\frac{R_{\text{atom}}}{R_{\text{nucleus}}}\right)^3 \approx \left(\frac{10^{-10}\text{ m}}{10^{-15}\text{ m}}\right)^3 = (10^5)^3 = 10^{15}\text{ times}$.",
    "Easy"
)

# Q38
add_q(
    "Atomic models",
    r"The source of $\alpha$-particles used in the historical Geiger-Marsden experiment was:",
    [
        r"Bismuth-214 ($^{214}_{83}\text{Bi}$) inside a lead collimator",
        r"Uranium-235 ($^{235}_{92}\text{U}$)",
        r"Carbon-14 ($^{14}_6\text{C}$)",
        r"Cobalt-60 ($^{60}_{27}\text{Co}$)"
    ],
    0,
    r"Geiger and Marsden used radioactive $^{214}_{83}\text{Bi}$ (radium C) placed inside a lead cavity with a narrow aperture to produce a collimated beam of $5.5\text{ MeV}$ $\alpha$-particles.",
    "Easy"
)

# Q39
add_q(
    "Atomic models",
    r"In head-on elastic collision of an $\alpha$-particle of mass $m_1$ with a stationary nucleus of mass $m_2$ ($m_1 \ll m_2$), the fractional energy lost by the $\alpha$-particle to the recoiling nucleus is approximately:",
    [
        r"$\frac{4m_1}{m_2}$",
        r"$\frac{2m_1}{m_2}$",
        r"$\frac{m_1}{m_2}$",
        r"$\frac{m_1^2}{m_2^2}$"
    ],
    0,
    r"For head-on collision, $\frac{\Delta K}{K_1} = \frac{4 m_1 m_2}{(m_1 + m_2)^2}$. For $m_1 \ll m_2$, $(m_1 + m_2) \approx m_2$, so $\frac{\Delta K}{K_1} \approx \frac{4 m_1}{m_2}$.",
    "Hard"
)

# Q40
add_q(
    "Atomic models",
    r"Which of the following is true regarding Thomson's atomic model?",
    [
        r"It correctly accounted for the electrical neutrality of an atom but failed to explain the discrete hydrogen spectrum",
        r"It predicted the existence of neutrons",
        r"It predicted that $\alpha$-particles would bounce directly backwards",
        r"It accounted for the quantization of electronic angular momentum"
    ],
    0,
    r"Thomson's model successfully accounted for the overall electrical neutrality of an atom and the presence of electrons, but could neither explain the discrete spectral lines nor large-angle $\alpha$-scattering.",
    "Easy"
)

# Q41
add_q(
    "Atomic models",
    r"In Rutherford's scattering formula, the ratio of the number of particles scattered at $\theta_1 = 180^\circ$ to those scattered at $\theta_2 = 90^\circ$ is:",
    [
        r"$\frac{1}{4}$",
        r"$\frac{1}{2}$",
        r"$4$",
        r"$\frac{1}{16}$"
    ],
    0,
    r"$\frac{N(180^\circ)}{N(90^\circ)} = \frac{\sin^4(45^\circ)}{\sin^4(90^\circ)} = \frac{(1/\sqrt{2})^4}{(1)^4} = \frac{1}{4}$.",
    "Easy"
)

# Q42
add_q(
    "Atomic models",
    r"A beam of $\alpha$-particles of kinetic energy $K$ strikes a thin gold foil. If the detector angle is fixed at $\theta = 60^\circ$ and the kinetic energy of the beam is increased to $2K$, the number of particles detected per unit time will change by a factor of:",
    [
        r"$\frac{1}{4}$",
        r"$\frac{1}{2}$",
        r"$2$",
        r"$4$"
    ],
    0,
    r"By Rutherford's formula, $N(\theta) \propto \frac{1}{K^2}$. When $K$ is doubled, the number of scattered particles decreases by a factor of $2^2 = 4$, becoming $\frac{1}{4}$ of the original value.",
    "Medium"
)

# Q43
add_q(
    "Atomic models",
    r"The angle of scattering $\theta$ for an impact parameter equal to the distance of closest approach ($b = r_0$) is:",
    [
        r"$90^\circ$",
        r"$60^\circ$",
        r"$45^\circ$",
        r"$120^\circ$"
    ],
    0,
    r"Recall $r_0 = \frac{2Ze^2}{4\pi\varepsilon_0 K}$ and $b = \frac{Ze^2}{4\pi\varepsilon_0 K}\cot(\theta/2) = \frac{r_0}{2}\cot(\theta/2)$. If $b = r_0$, then $r_0 = \frac{r_0}{2}\cot(\theta/2) \implies \cot(\theta/2) = 2 \implies \tan(\theta/2) = 0.5 \implies \theta \approx 53^\circ$. If $b = r_0/2$, then $\cot(\theta/2) = 1 \implies \theta = 90^\circ$.",
    "Hard"
)

# Q44
add_q(
    "Atomic models",
    r"For an impact parameter $b = \frac{r_0}{2}$ (where $r_0$ is the distance of closest approach in head-on collision), the scattering angle $\theta$ is:",
    [
        r"$90^\circ$",
        r"$180^\circ$",
        r"$60^\circ$",
        r"$45^\circ$"
    ],
    0,
    r"Since $b = \frac{r_0}{2}\cot(\theta/2)$, setting $b = r_0/2$ gives $\cot(\theta/2) = 1 \implies \theta/2 = 45^\circ \implies \theta = 90^\circ$.",
    "Medium"
)

# Q45
add_q(
    "Atomic models",
    r"Which of the following statements is INCORRECT regarding Rutherford's atomic model?",
    [
        r"The electrons in Rutherford's model are static and distributed uniformly inside the positive nucleus",
        r"The nucleus contains nearly all the mass of the atom",
        r"The atom as a whole is electrically neutral",
        r"Electrons orbit the nucleus under Coulomb attraction"
    ],
    0,
    r"In Rutherford's model, electrons are NOT static inside the nucleus; they revolve around the nucleus in circular orbits like planets around the Sun.",
    "Easy"
)

print(f"Total questions after Subtopic 1: {len(questions)}")

# ==============================================================================
# SUBTOPIC 2: Rutherford's scattering and Bohr's quantization (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"According to Bohr's quantization postulate, the orbital angular momentum $L$ of an electron revolving in the $n$-th stationary orbit of a hydrogen-like atom is:",
    [
        r"$L = \frac{n h}{2\pi}$",
        r"$L = \frac{h}{2\pi n}$",
        r"$L = \frac{n^2 h}{2\pi}$",
        r"$L = \frac{2\pi n}{h}$"
    ],
    0,
    r"Bohr's second postulate states that the orbital angular momentum of an electron is an integral multiple of $\hbar = \frac{h}{2\pi}$: $$L = m v r = n \frac{h}{2\pi} = n\hbar \quad (n = 1, 2, 3, \dots)$$",
    "Easy"
)

# Q2
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The radius $r_n$ of the $n$-th orbit of a hydrogen-like atom of atomic number $Z$ is proportional to:",
    [
        r"$\frac{n^2}{Z}$",
        r"$\frac{n}{Z}$",
        r"$\frac{n^2}{Z^2}$",
        r"$\frac{Z}{n^2}$"
    ],
    0,
    r"From Bohr's model, $r_n = \frac{\varepsilon_0 h^2 n^2}{\pi m Z e^2} = a_0 \frac{n^2}{Z}$, where $a_0 \approx 0.529\text{ \AA}$. Thus $r_n \propto \frac{n^2}{Z}$.",
    "Easy"
)

# Q3
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The speed $v_n$ of an electron in the $n$-th Bohr orbit of a hydrogen-like atom of atomic number $Z$ is proportional to:",
    [
        r"$\frac{Z}{n}$",
        r"$\frac{n}{Z}$",
        r"$\frac{Z^2}{n}$",
        r"$\frac{Z}{n^2}$"
    ],
    0,
    r"From $m v r = \frac{nh}{2\pi}$ and $r \propto \frac{n^2}{Z}$: $$v_n = \frac{Z e^2}{2\varepsilon_0 n h} \propto \frac{Z}{n}$$",
    "Easy"
)

# Q4
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The orbital frequency $f_n$ of an electron in the $n$-th Bohr orbit varies with principal quantum number $n$ and atomic number $Z$ as:",
    [
        r"$f_n \propto \frac{Z^2}{n^3}$",
        r"$f_n \propto \frac{Z}{n^2}$",
        r"$f_n \propto \frac{Z^2}{n^2}$",
        r"$f_n \propto \frac{n^3}{Z^2}$"
    ],
    0,
    r"Frequency $f_n = \frac{v_n}{2\pi r_n} \propto \frac{Z/n}{n^2/Z} = \frac{Z^2}{n^3}$.",
    "Medium"
)

# Q5
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The time period $T_n$ of revolution of an electron in the $n$-th Bohr orbit of a hydrogen atom is proportional to:",
    [
        r"$n^3$",
        r"$n^2$",
        r"$n$",
        r"$n^{3/2}$"
    ],
    0,
    r"$T_n = \frac{1}{f_n} = \frac{2\pi r_n}{v_n} \propto \frac{n^2}{1/n} = n^3$.",
    "Easy"
)

# Q6
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The electric current $I$ associated with the orbital motion of an electron in the $n$-th Bohr orbit of a hydrogen atom is proportional to:",
    [
        r"$\frac{1}{n^3}$",
        r"$\frac{1}{n^2}$",
        r"$\frac{1}{n}$",
        r"$n^3$"
    ],
    0,
    r"Current $I = \frac{e}{T_n} = e f_n \propto \frac{1}{n^3}$.",
    "Medium"
)

# Q7
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The magnetic field $B$ produced at the center of the nucleus by the revolving electron in the $n$-th Bohr orbit of a hydrogen atom varies with $n$ as:",
    [
        r"$B \propto \frac{1}{n^5}$",
        r"$B \propto \frac{1}{n^3}$",
        r"$B \propto \frac{1}{n^4}$",
        r"$B \propto \frac{1}{n^2}$"
    ],
    0,
    r"Magnetic field at the center of a circular loop: $$B = \frac{\mu_0 I}{2 r_n} \propto \frac{I}{r_n} \propto \frac{1/n^3}{n^2} = \frac{1}{n^5}$$",
    "Medium"
)

# Q8
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The magnetic dipole moment $M$ associated with the orbital motion of an electron in the $n$-th Bohr orbit is proportional to:",
    [
        r"$n$",
        r"$n^2$",
        r"$\frac{1}{n}$",
        r"$n^3$"
    ],
    0,
    r"Magnetic moment $M = I A = (e f_n)(\pi r_n^2) \propto \left(\frac{1}{n^3}\right)(n^2)^2 = \frac{n^4}{n^3} = n$. Alternatively, $M = \frac{e}{2m} L = \frac{e}{2m}\left(n\frac{h}{2\pi}\right) \propto n$.",
    "Medium"
)

# Q9
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The Bohr magneton $\mu_B$ is defined as the magnetic dipole moment of an electron in the first Bohr orbit of hydrogen, given by:",
    [
        r"$\mu_B = \frac{e\hbar}{2m} = \frac{e h}{4\pi m}$",
        r"$\mu_B = \frac{e\hbar}{m} = \frac{e h}{2\pi m}$",
        r"$\mu_B = \frac{e\hbar}{4m}$",
        r"$\mu_B = \frac{2e\hbar}{m}$"
    ],
    0,
    r"For $n = 1$, $M = \frac{e}{2m}L = \frac{e}{2m}\hbar = \frac{e h}{4\pi m} \approx 9.274 \times 10^{-24}\text{ A}\cdot\text{m}^2$ (or $\text{J/T}$).",
    "Easy"
)

# Q10
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The radius of the first orbit of hydrogen is $a_0 = 0.53\text{ \AA}$. The radius of the second orbit of $\text{Li}^{2+}$ ion ($Z = 3$) is:",
    [
        r"$\frac{4}{3} a_0 \approx 0.71\text{ \AA}$",
        r"$\frac{2}{3} a_0 \approx 0.35\text{ \AA}$",
        r"$\frac{3}{4} a_0 \approx 0.40\text{ \AA}$",
        r"$4 a_0 \approx 2.12\text{ \AA}$"
    ],
    0,
    r"$r_n = a_0 \frac{n^2}{Z}$. For $\text{Li}^{2+}$, $Z = 3$ and $n = 2$: $$r_2 = a_0 \frac{2^2}{3} = \frac{4}{3}a_0 \approx \frac{4}{3}(0.53) \approx 0.71\text{ \AA}$$",
    "Medium"
)

# Q11
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The ratio of the speed of an electron in the ground state of hydrogen to the speed of light in vacuum ($c$) is called the fine structure constant $\alpha$, equal to:",
    [
        r"$\alpha = \frac{e^2}{2\varepsilon_0 h c} \approx \frac{1}{137}$",
        r"$\alpha = \frac{e^2}{4\pi\varepsilon_0 h c} \approx \frac{1}{1370}$",
        r"$\alpha = \frac{e^2}{\varepsilon_0 h c} \approx \frac{1}{68.5}$",
        r"$\alpha = \frac{h c}{e^2} \approx 137$"
    ],
    0,
    r"In the ground state ($n=1, Z=1$): $v_1 = \frac{e^2}{2\varepsilon_0 h}$. The ratio $\frac{v_1}{c} = \frac{e^2}{2\varepsilon_0 h c} = \alpha \approx \frac{1}{137}$.",
    "Easy"
)

# Q12
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"If the orbital radius of an electron in a hydrogen atom is quadrupled ($r' = 4r$), its orbital speed becomes:",
    [
        r"Half of its initial speed",
        r"One-fourth of its initial speed",
        r"Twice its initial speed",
        r"Four times its initial speed"
    ],
    0,
    r"Since $v = \sqrt{\frac{e^2}{4\pi\varepsilon_0 m r}} \propto \frac{1}{\sqrt{r}}$, if $r$ is quadrupled, $v' = \frac{v}{\sqrt{4}} = \frac{v}{2}$.",
    "Easy"
)

# Q13
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"According to de Broglie's hypothesis, Bohr's quantization condition $m v r = \frac{n h}{2\pi}$ corresponds to:",
    [
        r"The circumference of the $n$-th orbit containing an integral number of electron de Broglie wavelengths ($2\pi r = n \lambda$)",
        r"The circumference containing a half-integral number of wavelengths ($2\pi r = (n + 1/2)\lambda$)",
        r"The diameter containing an integral number of wavelengths",
        r"Zero wave propagation along the orbit"
    ],
    0,
    r"De Broglie stated that an electron orbit is stationary if a standing wave is formed: $2\pi r = n \lambda = n \left(\frac{h}{p}\right) \implies p r = n \frac{h}{2\pi} \implies m v r = \frac{n h}{2\pi}$.",
    "Easy"
)

# Q14
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The de Broglie wavelength of an electron in the $n$-th orbit of hydrogen is related to the radius $r_n$ by:",
    [
        r"$\lambda_n = \frac{2\pi r_n}{n}$",
        r"$\lambda_n = 2\pi n r_n$",
        r"$\lambda_n = \frac{\pi r_n}{n}$",
        r"$\lambda_n = \frac{n}{2\pi r_n}$"
    ],
    0,
    r"From standing wave condition: $2\pi r_n = n \lambda_n \implies \lambda_n = \frac{2\pi r_n}{n}$.",
    "Easy"
)

# Q15
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The de Broglie wavelength of an electron in the second Bohr orbit of hydrogen is (take $a_0 = 0.529\text{ \AA}$):",
    [
        r"$4\pi a_0 \approx 6.65\text{ \AA}$",
        r"$2\pi a_0 \approx 3.32\text{ \AA}$",
        r"$\pi a_0 \approx 1.66\text{ \AA}$",
        r"$8\pi a_0 \approx 13.3\text{ \AA}$"
    ],
    0,
    r"For $n = 2$, $r_2 = a_0 (2^2) = 4a_0$. The de Broglie condition gives $2\pi r_2 = 2 \lambda \implies \lambda = \pi r_2 = \pi (4a_0) = 4\pi a_0 \approx 4 \times 3.1416 \times 0.529 \approx 6.65\text{ \AA}$.",
    "Medium"
)

# Q16
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"How many de Broglie wavelengths fit into the circumference of the 4th Bohr orbit of hydrogen?",
    [
        r"$4$",
        r"$2$",
        r"$8$",
        r"$16$"
    ],
    0,
    r"By the standing wave condition, $2\pi r_n = n \lambda$. For $n = 4$, exactly $4$ full de Broglie wavelengths fit along the orbital circumference.",
    "Easy"
)

# Q17
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"Bohr's correspondence principle states that at very large quantum numbers ($n \to \infty$):",
    [
        r"The frequency of emitted radiation in transitions between adjacent levels approaches the classical orbital frequency of the electron",
        r"Quantum mechanics ceases to be valid completely",
        r"Energy levels become continuous and negative energy states disappear",
        r"The angular momentum of the electron vanishes"
    ],
    0,
    r"Bohr's correspondence principle states that quantum predictions must merge smoothly into classical electrodynamic predictions in the limit of large quantum numbers ($n \gg 1$), where radiation frequency $\nu_{\text{transition}} = \Delta E / h \approx f_{\text{classical}}$.",
    "Medium"
)

# Q18
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"In a hydrogen-like atom, an electron transitions from $n$ to $(n-1)$ where $n \gg 1$. The frequency of emitted photon $\nu$ is proportional to:",
    [
        r"$\frac{Z^2}{n^3}$",
        r"$\frac{Z}{n^2}$",
        r"$\frac{Z^2}{n^2}$",
        r"$\frac{Z^2}{n^4}$"
    ],
    0,
    r"$$\Delta E = E_n - E_{n-1} = 13.6 Z^2 \left(\frac{1}{(n-1)^2} - \frac{1}{n^2}\right) = 13.6 Z^2 \frac{2n - 1}{n^2(n-1)^2} \approx 13.6 Z^2 \frac{2n}{n^4} = \frac{2(13.6)Z^2}{n^3}$$ Thus $\nu = \frac{\Delta E}{h} \propto \frac{Z^2}{n^3}$, which exactly matches the classical revolution frequency $f \propto \frac{Z^2}{n^3}$.",
    "Hard"
)

# Q19
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"Which of the following hydrogen-like ions has the smallest first Bohr orbit radius?",
    [
        r"$\text{Be}^{3+}$",
        r"$\text{Li}^{2+}$",
        r"$\text{He}^+$",
        r"$\text{H}$"
    ],
    0,
    r"$r_1 = \frac{a_0}{Z}$. Since $\text{Be}^{3+}$ has the largest atomic number ($Z = 4$), it has the smallest radius: $r_1 = a_0 / 4$.",
    "Easy"
)

# Q20
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The centripetal acceleration $a_c$ of an electron in the $n$-th orbit of hydrogen varies with $n$ as:",
    [
        r"$a_c \propto \frac{1}{n^4}$",
        r"$a_c \propto \frac{1}{n^2}$",
        r"$a_c \propto \frac{1}{n^3}$",
        r"$a_c \propto n^4$"
    ],
    0,
    r"$$a_c = \frac{v^2}{r} \propto \frac{(1/n)^2}{n^2} = \frac{1}{n^4}$$",
    "Medium"
)

# Q21
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"If the mass of the electron were doubled while keeping its charge constant, the radius of the first Bohr orbit would:",
    [
        r"Be halved",
        r"Be doubled",
        r"Remain unchanged",
        r"Be quadrupled"
    ],
    0,
    r"$r_1 = \frac{\varepsilon_0 h^2}{\pi m e^2} \propto \frac{1}{m}$. Doubling electron mass halves the orbital radius.",
    "Easy"
)

# Q22
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"A muonic atom consists of a muon (mass $m_\mu \approx 207 m_e$, charge $-e$) bound to a proton. The radius of the first Bohr orbit of a muonic atom is:",
    [
        r"$\frac{a_0}{207} \approx 2.56 \times 10^{-13}\text{ m}$",
        r"$207 a_0$",
        r"$\frac{a_0}{\sqrt{207}}$",
        r"$a_0$"
    ],
    0,
    r"Since $r_1 \propto \frac{1}{m}$, for a muon: $r_{1,\mu} = \frac{m_e}{m_\mu} a_0 = \frac{0.529 \times 10^{-10}\text{ m}}{207} \approx 2.56 \times 10^{-13}\text{ m}$.",
    "Medium"
)

# Q23
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The ratio of the angular momentum of an electron in the second excited state to that in the first excited state of a hydrogen atom is:",
    [
        r"$3 : 2$",
        r"$2 : 1$",
        r"$9 : 4$",
        r"$3 : 1$"
    ],
    0,
    r"First excited state corresponds to $n = 2$, so $L_1 = 2\hbar$.\nSecond excited state corresponds to $n = 3$, so $L_2 = 3\hbar$.\nRatio $L_2 / L_1 = 3 / 2 = 3 : 2$.",
    "Easy"
)

# Q24
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"In Bohr's theory of the hydrogen atom, what is the change in angular momentum of the electron when it jumps from an orbit of radius $4a_0$ to an orbit of radius $9a_0$?",
    [
        r"$\frac{h}{2\pi}$",
        r"$\frac{h}{\pi}$",
        r"$\frac{2h}{\pi}$",
        r"$\frac{5h}{2\pi}$"
    ],
    0,
    r"Since $r_n = a_0 n^2$: $r_a = 4a_0 \implies n_a = 2$, and $r_b = 9a_0 \implies n_b = 3$.\nChange in angular momentum: $\Delta L = L_3 - L_2 = 3\hbar - 2\hbar = \hbar = \frac{h}{2\pi}$.",
    "Easy"
)

# Q25
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The ratio of the area enclosed by the electron's orbit in the $n = 2$ state to that in the $n = 1$ state of a hydrogen atom is:",
    [
        r"$16 : 1$",
        r"$4 : 1$",
        r"$8 : 1$",
        r"$2 : 1$"
    ],
    0,
    r"Area of circular orbit: $A_n = \pi r_n^2 \propto (r_n)^2 \propto (n^2)^2 = n^4$.\n$$\frac{A_2}{A_1} = \left(\frac{2}{1}\right)^4 = 16 : 1$$",
    "Medium"
)

# Q26
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"According to Bohr's model, which of the following physical quantities of an electron is NOT quantized?",
    [
        r"The force acting on the electron",
        r"Orbital angular momentum",
        r"Total energy",
        r"Orbital radius"
    ],
    0,
    r"Although angular momentum ($n\hbar$), orbital radius ($r_n$), and energy ($E_n$) take discrete values, in quantum mechanics, classical force is an operator / concept that varies continuously with distance and is not directly assigned a quantum number.",
    "Easy"
)

# Q27
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The velocity of an electron in the first Bohr orbit of hydrogen is $v_1 \approx 2.18 \times 10^6\text{ m/s}$. The velocity of an electron in the third orbit of $\text{He}^+$ ion ($Z = 2$) is:",
    [
        r"$\frac{2}{3} v_1$",
        r"$\frac{3}{2} v_1$",
        r"$\frac{4}{9} v_1$",
        r"$v_1$"
    ],
    0,
    r"$v_n = v_1 \frac{Z}{n}$. For $\text{He}^+$ ($Z = 2$) in $n = 3$: $v = v_1 \frac{2}{3} = \frac{2}{3} v_1$.",
    "Easy"
)

# Q28
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"What is the ratio of the frequency of revolution of an electron in the $n = 1$ orbit to that in the $n = 2$ orbit of a hydrogen atom?",
    [
        r"$8 : 1$",
        r"$4 : 1$",
        r"$2 : 1$",
        r"$16 : 1$"
    ],
    0,
    r"Frequency $f_n \propto \frac{1}{n^3}$. Thus $\frac{f_1}{f_2} = \left(\frac{2}{1}\right)^3 = 8 : 1$.",
    "Easy"
)

# Q29
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The gyromagnetic ratio (ratio of magnetic moment to angular momentum) of an electron revolving in a Bohr orbit is:",
    [
        r"$\frac{e}{2m}$",
        r"$\frac{e}{m}$",
        r"$\frac{2e}{m}$",
        r"$\frac{e}{4m}$"
    ],
    0,
    r"Magnetic moment $M = I A = \left(\frac{e v}{2\pi r}\right)(\pi r^2) = \frac{e v r}{2} = \frac{e}{2m}(m v r) = \frac{e}{2m} L$. Thus the gyromagnetic ratio $\frac{M}{L} = \frac{e}{2m}$, which is independent of orbit and principal quantum number.",
    "Medium"
)

# Q30
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"In a hypothetical atom, the potential energy is given by $U(r) = \frac{1}{2} k r^2$. Assuming Bohr's quantization of angular momentum $m v r = n\hbar$, the orbital radius $r_n$ varies with $n$ as:",
    [
        r"$r_n \propto \sqrt{n}$",
        r"$r_n \propto n$",
        r"$r_n \propto n^2$",
        r"$r_n \propto n^{-1/2}$"
    ],
    0,
    r"Force $F = -\frac{dU}{dr} = -k r$. Centripetal condition: $\frac{m v^2}{r} = k r \implies m v^2 = k r^2 \implies v = r \sqrt{\frac{k}{m}}$.\nFrom Bohr's condition: $m v r = n\hbar \implies m \left(r\sqrt{\frac{k}{m}}\right) r = n\hbar \implies r^2 \sqrt{k m} = n\hbar \implies r_n \propto \sqrt{n}$.",
    "Hard"
)

# Q31
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"For the hypothetical atom with $U(r) = \frac{1}{2} k r^2$ and $r_n \propto \sqrt{n}$, the energy levels $E_n$ are proportional to:",
    [
        r"$n$",
        r"$n^2$",
        r"$\sqrt{n}$",
        r"$\frac{1}{n}$"
    ],
    0,
    r"Kinetic energy: $K = \frac{1}{2} m v^2 = \frac{1}{2} k r^2$. Potential energy: $U = \frac{1}{2} k r^2$.\nTotal energy: $E = K + U = k r^2 \propto r^2 \propto (\sqrt{n})^2 = n$. The energy levels are equispaced: $E_n \propto n$.",
    "Hard"
)

# Q32
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"If the potential energy between electron and proton is given by $U(r) = -\frac{k}{r^3}$, what is the dependence of orbital radius $r_n$ on $n$ using Bohr's quantization?",
    [
        r"Stable circular orbits are not possible",
        r"$r_n \propto n$",
        r"$r_n \propto n^2$",
        r"$r_n \propto \sqrt{n}$"
    ],
    0,
    r"Force $F = -\frac{dU}{dr} = -\frac{3k}{r^4}$. For an inverse power force $F \propto 1/r^n$, stable circular orbits only exist if the force exponent is strictly less than 3 ($n < 3$). For $F \propto 1/r^4$, effective potential has no minimum, so stable circular orbits cannot exist.",
    "Hard"
)

# Q33
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"Consider a logarithmic potential $V(r) = V_0 \ln(r/r_0)$. Using Bohr's quantization condition, how does the orbital speed $v_n$ depend on $n$?",
    [
        r"$v_n$ is independent of $n$",
        r"$v_n \propto \frac{1}{n}$",
        r"$v_n \propto n$",
        r"$v_n \propto \sqrt{n}$"
    ],
    0,
    r"Force $F = -\frac{dV}{dr} = -\frac{V_0}{r}$. Centripetal force: $\frac{m v^2}{r} = \frac{V_0}{r} \implies v^2 = \frac{V_0}{m} \implies v = \sqrt{\frac{V_0}{m}} = \text{constant}$. Thus $v_n$ is completely independent of $n$.",
    "Hard"
)

# Q34
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"For the logarithmic potential $V(r) = V_0 \ln(r/r_0)$, the orbital radius $r_n$ varies with $n$ as:",
    [
        r"$r_n \propto n$",
        r"$r_n \propto n^2$",
        r"$r_n \propto \sqrt{n}$",
        r"$r_n \propto \frac{1}{n}$"
    ],
    0,
    r"Since $v = \text{constant}$, from $m v r_n = n\hbar \implies r_n = \frac{n\hbar}{m v} \propto n$.",
    "Hard"
)

# Q35
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The ratio of the magnetic field at the center of the first orbit of hydrogen to that of $\text{He}^+$ ion ($Z = 2$) in its first orbit is:",
    [
        r"$1 : 8$",
        r"$1 : 4$",
        r"$1 : 2$",
        r"$1 : 16$"
    ],
    0,
    r"Magnetic field at nucleus: $B \propto \frac{Z^3}{n^5}$. For ground state $n = 1$: $B \propto Z^3$. For $\text{H}$ ($Z = 1$) vs $\text{He}^+$ ($Z = 2$): $\frac{B_{\text{H}}}{B_{\text{He}^+}} = \left(\frac{1}{2}\right)^3 = \frac{1}{8} = 1 : 8$.",
    "Medium"
)

# Q36
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"In terms of Rydberg constant $R$ and velocity of light $c$, the frequency of revolution of an electron in the ground state of hydrogen is:",
    [
        r"$2 R c$",
        r"$R c$",
        r"$4 R c$",
        r"$\frac{R c}{2}$"
    ],
    0,
    r"Ground state energy is $E_1 = -R h c$. We know $K_1 = -E_1 = R h c = \frac{1}{2} m v_1^2$. Also $L_1 = m v_1 r_1 = \hbar = \frac{h}{2\pi}$. Orbital frequency is $f_1 = \frac{v_1}{2\pi r_1} = \frac{m v_1^2}{2\pi (m v_1 r_1)} = \frac{2 K_1}{2\pi (h / 2\pi)} = \frac{2 R h c}{h} = 2 R c$.",
    "Hard"
)

# Q37
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The ratio of the radius of the $n = 3$ orbit of hydrogen to the radius of the $n = 2$ orbit of $\text{He}^+$ is:",
    [
        r"$9 : 2$",
        r"$3 : 2$",
        r"$9 : 4$",
        r"$4 : 9$"
    ],
    0,
    r"$r \propto \frac{n^2}{Z}$. For $\text{H}$ ($n=3, Z=1$): $r_{\text{H}} \propto \frac{3^2}{1} = 9$. For $\text{He}^+$ ($n=2, Z=2$): $r_{\text{He}^+} \propto \frac{2^2}{2} = 2$. Ratio is $\frac{9}{2} = 9 : 2$.",
    "Easy"
)

# Q38
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"If the electron in a hydrogen atom is replaced by a positronium particle (an electron and a positron orbiting their common center of mass), the reduced mass of the system is:",
    [
        r"$\frac{m_e}{2}$",
        r"$m_e$",
        r"$2 m_e$",
        r"$\frac{m_e}{4}$"
    ],
    0,
    r"The reduced mass of two particles of equal mass $m_e$ is $\mu = \frac{m_e \cdot m_e}{m_e + m_e} = \frac{m_e}{2}$.",
    "Medium"
)

# Q39
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"Because the reduced mass of positronium is $\mu = m_e / 2$, the ground-state radius of positronium is:",
    [
        r"$2 a_0 \approx 1.06\text{ \AA}$",
        r"$\frac{a_0}{2} \approx 0.265\text{ \AA}$",
        r"$a_0 \approx 0.529\text{ \AA}$",
        r"$4 a_0 \approx 2.12\text{ \AA}$"
    ],
    0,
    r"$r \propto \frac{1}{\mu}$. Since $\mu = m_e/2$, the distance between electron and positron is $r_1 = 2 a_0 \approx 1.06\text{ \AA}$.",
    "Medium"
)

# Q40
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"Which of the following transitions in hydrogen involves the greatest change in orbital angular momentum?",
    [
        r"$n = 5 \to n = 1$",
        r"$n = 4 \to n = 2$",
        r"$n = 3 \to n = 1$",
        r"$n = 5 \to n = 3$"
    ],
    0,
    r"$\Delta L = (n_i - n_f)\hbar$. For $n = 5 \to n = 1$, $\Delta L = (5 - 1)\hbar = 4\hbar$, which is the largest among all choices.",
    "Easy"
)

# Q41
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The de Broglie wavelength of an electron in the first Bohr orbit of a hydrogen atom is:",
    [
        r"$2\pi a_0 \approx 3.32\text{ \AA}$",
        r"$\pi a_0 \approx 1.66\text{ \AA}$",
        r"$a_0 \approx 0.53\text{ \AA}$",
        r"$4\pi a_0 \approx 6.65\text{ \AA}$"
    ],
    0,
    r"For $n = 1$: $2\pi r_1 = 1 \lambda \implies \lambda = 2\pi a_0 = 2 \times 3.1416 \times 0.529\text{ \AA} \approx 3.32\text{ \AA}$.",
    "Easy"
)

# Q42
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"In a hydrogen atom, if the angular momentum of an electron in a given orbit is $J$, its kinetic energy $K$ in that orbit of radius $r$ is:",
    [
        r"$\frac{J^2}{2 m r^2}$",
        r"$\frac{J^2}{m r^2}$",
        r"$\frac{J}{2 m r}$",
        r"$\frac{2 J^2}{m r^2}$"
    ],
    0,
    r"Since angular momentum $J = m v r \implies v = \frac{J}{m r}$, kinetic energy is $K = \frac{1}{2}m v^2 = \frac{1}{2}m \left(\frac{J}{m r}\right)^2 = \frac{J^2}{2 m r^2}$.",
    "Easy"
)

# Q43
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"The ratio of the speed of an electron in the second Bohr orbit of hydrogen to its speed in the third Bohr orbit of $\text{Li}^{2+}$ is:",
    [
        r"$1 : 2$",
        r"$2 : 1$",
        r"$1 : 1$",
        r"$3 : 2$"
    ],
    0,
    r"$v \propto \frac{Z}{n}$. For $\text{H}$ ($n = 2, Z = 1$): $v_{\text{H}} \propto \frac{1}{2}$. For $\text{Li}^{2+}$ ($n = 3, Z = 3$): $v_{\text{Li}} \propto \frac{3}{3} = 1$. Ratio $\frac{v_{\text{H}}}{v_{\text{Li}}} = \frac{1/2}{1} = \frac{1}{2} = 1 : 2$.",
    "Easy"
)

# Q44
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"If an electron revolves in a circle of radius $r$ with constant speed $v$, the ratio of its magnetic dipole moment to its angular momentum is independent of:",
    [
        r"Both the radius $r$ and speed $v$",
        r"Only the radius $r$",
        r"Only the speed $v$",
        r"Neither radius nor speed"
    ],
    0,
    r"$$\frac{M}{L} = \frac{I A}{m v r} = \frac{(e v / 2\pi r)(\pi r^2)}{m v r} = \frac{\frac{1}{2} e v r}{m v r} = \frac{e}{2m}$$ This depends only on the fundamental constants $e$ and $m$, completely independent of both $r$ and $v$.",
    "Easy"
)

# Q45
add_q(
    "Rutherford's scattering and Bohr's quantization",
    r"In the Bohr model, the ratio of the potential energy $U$ to the kinetic energy $K$ of the electron in any orbit is:",
    [
        r"$-2$",
        r"$-\frac{1}{2}$",
        r"$-1$",
        r"$+2$"
    ],
    0,
    r"By the virial theorem for a $1/r$ electrostatic potential, $U = -\frac{1}{4\pi\varepsilon_0}\frac{Z e^2}{r}$ and $K = \frac{1}{2}\left(\frac{1}{4\pi\varepsilon_0}\frac{Z e^2}{r}\right) = -\frac{1}{2}U$. Therefore $\frac{U}{K} = -2$.",
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

balance_subtopic("Atomic models")
balance_subtopic("Rutherford's scattering and Bohr's quantization")

# Save to batch 1
with open("scripts/atoms_nuclei/an_batch1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Atoms & Nuclei Batch 1 generated successfully! Total questions: {len(questions)}")
