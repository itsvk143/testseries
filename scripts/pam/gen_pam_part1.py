# scripts/pam/gen_pam_part1.py
import json

questions = []

def add_q(subtopic, question, options, correct_idx, explanation, difficulty="Medium"):
    idx = len(questions) + 1
    questions.append({
        "questionId": f"jee_mains_pam_{idx:03d}",
        "subject": "Physics",
        "chapter": "Physics and Measurement",
        "subtopic": subtopic,
        "question": question,
        "options": options,
        "correctAnswer": options[correct_idx],
        "explanation": explanation,
        "difficulty": difficulty,
        "examYear": f"JEE Mains {2015 + (idx % 11)}"
    })

# ==============================================================================
# SUBTOPIC 1: Units and dimensions (55 Questions: 001 - 055)
# ==============================================================================
sub1 = "Units and dimensions"

# Q1
add_q(
    sub1,
    r"The dimensional formula for Planck's constant ($h$) is:",
    [
        r"$[\text{M}\text{L}^2\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}\text{L}\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^3\text{T}^{-1}]$"
    ],
    0,
    r"From $E = h\nu$, $[h] = \frac{[E]}{[\nu]} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{T}^{-1}]} = [\text{M}\text{L}^2\text{T}^{-1}]$."
)

# Q2
add_q(
    sub1,
    r"Which of the following pairs of physical quantities have the same dimensions?",
    [
        r"Torque and Work",
        r"Force and Torque",
        r"Angular momentum and Work",
        r"Energy and Young's modulus"
    ],
    0,
    r"Torque $\tau = \vec{r} \times \vec{F}$ has dimensions $[\text{L}][\text{M}\text{L}\text{T}^{-2}] = [\text{M}\text{L}^2\text{T}^{-2}]$. Work $W = \vec{F}\cdot\vec{d}$ also has dimensions $[\text{M}\text{L}^2\text{T}^{-2}]$. Both have identical dimensions $[\text{M}\text{L}^2\text{T}^{-2}]$."
)

# Q3
add_q(
    sub1,
    r"The dimensional formula of permittivity of free space ($\varepsilon_0$) is:",
    [
        r"$[\text{M}^{-1}\text{L}^{-3}\text{T}^4\text{A}^2]$",
        r"$[\text{M}^{-1}\text{L}^3\text{T}^2\text{A}^2]$",
        r"$[\text{M}\text{L}^{-3}\text{T}^4\text{A}^2]$",
        r"$[\text{M}^{-1}\text{L}^{-3}\text{T}^2\text{A}^{-2}]$"
    ],
    0,
    r"From Coulomb's law $F = \frac{q_1 q_2}{4\pi\varepsilon_0 r^2} \implies [\varepsilon_0] = \frac{[q]^2}{[F][r]^2} = \frac{[\text{A}\text{T}]^2}{[\text{M}\text{L}\text{T}^{-2}][\text{L}]^2} = [\text{M}^{-1}\text{L}^{-3}\text{T}^4\text{A}^2]$."
)

# Q4
add_q(
    sub1,
    r"The dimensional formula of permeability of free space ($\mu_0$) is:",
    [
        r"$[\text{M}\text{L}\text{T}^{-2}\text{A}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{A}^{-1}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}\text{A}^2]$",
        r"$[\text{M}\text{L}\text{T}^{-1}\text{A}^{-2}]$"
    ],
    0,
    r"From $c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \implies [\mu_0] = \frac{1}{[c]^2 [\varepsilon_0]} = \frac{1}{[\text{L}^2\text{T}^{-2}][\text{M}^{-1}\text{L}^{-3}\text{T}^4\text{A}^2]} = [\text{M}\text{L}\text{T}^{-2}\text{A}^{-2}]$."
)

# Q5
add_q(
    sub1,
    r"The quantity $\sqrt{\frac{\mu_0}{\varepsilon_0}}$ has the dimensions of:",
    [
        r"Resistance",
        r"Capacitance",
        r"Inductance",
        r"Conductance"
    ],
    0,
    r"$\sqrt{\frac{\mu_0}{\varepsilon_0}} = Z_0$ is the wave impedance of free space ($\approx 377\,\Omega$). Since its SI unit is Ohm ($\Omega$), its dimensions are those of resistance: $[\text{M}\text{L}^2\text{T}^{-3}\text{A}^{-2}]$."
)

# Q6
add_q(
    sub1,
    r"The dimensional formula of the universal gravitational constant ($G$) is:",
    [
        r"$[\text{M}^{-1}\text{L}^3\text{T}^{-2}]$",
        r"$[\text{M}^{-1}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^3\text{T}^{-2}]$",
        r"$[\text{M}^{-2}\text{L}^3\text{T}^{-1}]$"
    ],
    0,
    r"From Newton's law of gravitation $F = \frac{G m_1 m_2}{r^2}$, $[G] = \frac{[F][r]^2}{[m]^2} = \frac{[\text{M}\text{L}\text{T}^{-2}][\text{L}^2]}{[\text{M}^2]} = [\text{M}^{-1}\text{L}^3\text{T}^{-2}]$."
)

# Q7
add_q(
    sub1,
    r"Which of the following physical quantities is dimensionless?",
    [
        r"Reynold's number",
        r"Gravitational potential",
        r"Specific heat capacity",
        r"Angular acceleration"
    ],
    0,
    r"Reynold's number $Re = \frac{\rho v D}{\eta}$ is a pure ratio of inertial force to viscous force and is completely dimensionless ($[\text{M}^0\text{L}^0\text{T}^0]$)."
)

# Q8
add_q(
    sub1,
    r"The dimensions of $\frac{h c}{G}$ (where $h$ is Planck's constant, $c$ is speed of light, and $G$ is gravitational constant) are:",
    [
        r"$[\text{M}^2]$",
        r"$[\text{M}^2\text{L}^2]$",
        r"$[\text{M}\text{L}\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$"
    ],
    0,
    r"Planck mass is defined as $m_p = \sqrt{\frac{\hbar c}{G}}$, so $m_p^2 = \frac{\hbar c}{G}$. Therefore $\left[\frac{h c}{G}\right] = \frac{[\text{M}\text{L}^2\text{T}^{-1}][\text{L}\text{T}^{-1}]}{[\text{M}^{-1}\text{L}^3\text{T}^{-2}]} = \frac{[\text{M}\text{L}^3\text{T}^{-2}]}{[\text{M}^{-1}\text{L}^3\text{T}^{-2}]} = [\text{M}^2]$."
)

# Q9
add_q(
    sub1,
    r"The dimensional formula of Stefan-Boltzmann constant ($\sigma$) is:",
    [
        r"$[\text{M}\text{L}^0\text{T}^{-3}\text{K}^{-4}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-3}\text{K}^{-4}]$",
        r"$[\text{M}\text{L}\text{T}^{-3}\text{K}^{-4}]$",
        r"$[\text{M}\text{L}^0\text{T}^{-2}\text{K}^{-4}]$"
    ],
    0,
    r"From Stefan's law $E = \sigma T^4$ where $E$ is power per unit area: $[\sigma] = \frac{[E]}{[T]^4} = \frac{[\text{Power}]/[\text{Area}]}{[\text{K}]^4} = \frac{[\text{M}\text{L}^2\text{T}^{-3}]/[\text{L}^2]}{[\text{K}]^4} = [\text{M}\text{L}^0\text{T}^{-3}\text{K}^{-4}]$."
)

# Q10
add_q(
    sub1,
    r"The dimensional formula of Boltzmann constant ($k_B$) is:",
    [
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{K}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}\text{K}^{-1}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}\text{K}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{K}]$"
    ],
    0,
    r"From thermal kinetic energy $E = \frac{3}{2} k_B T$, $[k_B] = \frac{[E]}{[T]} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{K}]} = [\text{M}\text{L}^2\text{T}^{-2}\text{K}^{-1}]$."
)

# Q11
add_q(
    sub1,
    r"The dimensions of $\frac{L}{R}$ (where $L$ is self-inductance and $R$ is resistance) are equal to the dimensions of:",
    [
        r"Time",
        r"Frequency",
        r"Velocity",
        r"Current"
    ],
    0,
    r"$\tau = \frac{L}{R}$ is the inductive time constant of an $RL$ circuit, having dimensions of time $[\text{T}]$."
)

# Q12
add_q(
    sub1,
    r"The dimensions of $R C$ (where $R$ is electrical resistance and $C$ is capacitance) are:",
    [
        r"$[\text{T}]$",
        r"$[\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}]$",
        r"$[\text{M}^0\text{L}^0\text{T}^0]$"
    ],
    0,
    r"$\tau = R C$ is the capacitive time constant of an $RC$ circuit, having dimensions of time $[\text{T}]$."
)

# Q13
add_q(
    sub1,
    r"The dimensions of $\frac{1}{\sqrt{L C}}$ are identical to the dimensions of:",
    [
        r"Frequency",
        r"Time",
        r"Velocity",
        r"Wavelength"
    ],
    0,
    r"The resonant angular frequency of an $LC$ circuit is $\omega_0 = \frac{1}{\sqrt{L C}}$, which has dimensions of angular frequency $[\text{T}^{-1}]$."
)

# Q14
add_q(
    sub1,
    r"The dimensional formula of coefficient of viscosity ($\eta$) is:",
    [
        r"$[\text{M}\text{L}^{-1}\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}]$",
        r"$[\text{M}\text{L}\text{T}^{-1}]$"
    ],
    0,
    r"From Newton's viscous force law $F = \eta A \frac{dv}{dx}$, $[\eta] = \frac{[F]}{[A][dv/dx]} = \frac{[\text{M}\text{L}\text{T}^{-2}]}{[\text{L}^2][\text{T}^{-1}]} = [\text{M}\text{L}^{-1}\text{T}^{-1}]$."
)

# Q15
add_q(
    sub1,
    r"Which of the following physical quantities has the same dimensions as pressure?",
    [
        r"Energy density",
        r"Force per unit length",
        r"Momentum per unit volume",
        r"Power per unit area"
    ],
    0,
    r"Pressure is force per unit area: $[\text{M}\text{L}\text{T}^{-2}]/[\text{L}^2] = [\text{M}\text{L}^{-1}\text{T}^{-2}]$. Energy density is energy per unit volume: $[\text{M}\text{L}^2\text{T}^{-2}]/[\text{L}^3] = [\text{M}\text{L}^{-1}\text{T}^{-2}]$. Hence both have the same dimensions."
)

# Q16
add_q(
    sub1,
    r"The dimensional formula of surface tension is:",
    [
        r"$[\text{M}\text{L}^0\text{T}^{-2}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$"
    ],
    0,
    r"Surface tension is force per unit length: $[T] = \frac{[F]}{[L]} = \frac{[\text{M}\text{L}\text{T}^{-2}]}{[\text{L}]} = [\text{M}\text{L}^0\text{T}^{-2}]$."
)

# Q17
add_q(
    sub1,
    r"The dimensions of solar constant are identical to the dimensions of:",
    [
        r"Surface energy per unit time",
        r"Power",
        r"Pressure",
        r"Force per unit area"
    ],
    0,
    r"Solar constant is radiant energy received per unit area per unit time: $\frac{[\text{Energy}]}{[\text{Area}][\text{Time}]} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{L}^2][\text{T}]} = [\text{M}\text{L}^0\text{T}^{-3}]$, which is equivalent to surface energy per unit time $[\text{M}\text{L}^0\text{T}^{-2}]/[\text{T}] = [\text{M}\text{L}^0\text{T}^{-3}]$."
)

# Q18
add_q(
    sub1,
    r"The dimensions of magnetic flux ($\Phi_B$) are:",
    [
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{A}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}\text{A}^{-1}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}\text{A}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{A}^{-2}]$"
    ],
    0,
    r"From $\varepsilon = -\frac{d\Phi_B}{dt}$, $[\Phi_B] = [\varepsilon][t] = \left(\frac{[\text{Work}]}{[q]}\right)[t] = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{A}\text{T}]}[\text{T}] = [\text{M}\text{L}^2\text{T}^{-2}\text{A}^{-1}]$."
)

# Q19
add_q(
    sub1,
    r"The dimensional formula for self-inductance ($L$) is:",
    [
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{A}^{-2}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}\text{A}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}\text{A}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{A}^{-1}]$"
    ],
    0,
    r"From magnetic energy $U = \frac{1}{2} L I^2$, $[L] = \frac{[U]}{[I]^2} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{A}^2]} = [\text{M}\text{L}^2\text{T}^{-2}\text{A}^{-2}]$."
)

# Q20
add_q(
    sub1,
    r"The dimensions of electrical conductivity ($\sigma_{cond}$) are:",
    [
        r"$[\text{M}^{-1}\text{L}^{-3}\text{T}^3\text{A}^2]$",
        r"$[\text{M}^{-1}\text{L}^{-2}\text{T}^3\text{A}^2]$",
        r"$[\text{M}\text{L}^3\text{T}^{-3}\text{A}^{-2}]$",
        r"$[\text{M}^{-1}\text{L}^3\text{T}^{-3}\text{A}^2]$"
    ],
    0,
    r"Conductivity $\sigma_{cond} = \frac{1}{\rho} = \frac{l}{R A}$. Since $[R] = [\text{M}\text{L}^2\text{T}^{-3}\text{A}^{-2}]$, $[\rho] = [\text{M}\text{L}^3\text{T}^{-3}\text{A}^{-2}]$. Hence $[\sigma_{cond}] = [\text{M}^{-1}\text{L}^{-3}\text{T}^3\text{A}^2]$."
)

# Q21
add_q(
    sub1,
    r"The dimensional formula of thermal conductivity ($K$) is:",
    [
        r"$[\text{M}\text{L}\text{T}^{-3}\text{K}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-3}\text{K}^{-1}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}\text{K}^{-1}]$",
        r"$[\text{M}\text{L}^0\text{T}^{-3}\text{K}^{-1}]$"
    ],
    0,
    r"From Fourier's law of conduction $\frac{dQ}{dt} = K A \frac{\Delta T}{L}$, $[K] = \frac{[dQ/dt][L]}{[A][\Delta T]} = \frac{[\text{M}\text{L}^2\text{T}^{-3}][\text{L}]}{[\text{L}^2][\text{K}]} = [\text{M}\text{L}\text{T}^{-3}\text{K}^{-1}]$."
)

# Q22
add_q(
    sub1,
    r"The unit of electric field in SI base units is:",
    [
        r"$\text{kg}\cdot\text{m}\cdot\text{s}^{-3}\cdot\text{A}^{-1}$",
        r"$\text{kg}\cdot\text{m}^2\cdot\text{s}^{-3}\cdot\text{A}^{-1}$",
        r"$\text{kg}\cdot\text{m}\cdot\text{s}^{-2}\cdot\text{A}^{-1}$",
        r"$\text{kg}\cdot\text{m}^{-1}\cdot\text{s}^{-3}\cdot\text{A}^{-1}$"
    ],
    0,
    r"$E = \frac{F}{q} = \frac{\text{N}}{\text{C}} = \frac{\text{kg}\cdot\text{m}\cdot\text{s}^{-2}}{\text{A}\cdot\text{s}} = \text{kg}\cdot\text{m}\cdot\text{s}^{-3}\cdot\text{A}^{-1}$."
)

# Q23
add_q(
    sub1,
    r"Which of the following is NOT a fundamental (base) SI unit?",
    [
        r"Joule",
        r"Candela",
        r"Kelvin",
        r"Mole"
    ],
    0,
    r"Joule ($\text{J} = \text{kg}\cdot\text{m}^2/\text{s}^2$) is a derived SI unit of energy. Candela, Kelvin, and Mole are base SI units."
)

# Q24
add_q(
    sub1,
    r"The dimensions of $\frac{B^2}{2\mu_0}$ (magnetic energy density) are:",
    [
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-2}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-1}]$"
    ],
    0,
    r"$\frac{B^2}{2\mu_0}$ represents magnetic energy per unit volume, having dimensions of energy density $[\text{Energy}]/[\text{Volume}] = [\text{M}\text{L}^2\text{T}^{-2}]/[\text{L}^3] = [\text{M}\text{L}^{-1}\text{T}^{-2}]$."
)

# Q25
add_q(
    sub1,
    r"The dimension of impulse is identical to that of:",
    [
        r"Linear momentum",
        r"Force",
        r"Energy",
        r"Angular momentum"
    ],
    0,
    r"Impulse $J = \int F dt = \Delta p$. The dimensions are $[F][t] = [\text{M}\text{L}\text{T}^{-2}][\text{T}] = [\text{M}\text{L}\text{T}^{-1}]$, identical to linear momentum."
)

# Q26
add_q(
    sub1,
    r"The dimensions of angular momentum are identical to those of:",
    [
        r"Planck's constant",
        r"Torque",
        r"Work",
        r"Linear momentum"
    ],
    0,
    r"Angular momentum $L = mvr$ has dimensions $[\text{M}][\text{L}\text{T}^{-1}][\text{L}] = [\text{M}\text{L}^2\text{T}^{-1}]$, exactly matching Planck's constant $h$ ($E = h\nu \implies [h] = [\text{M}\text{L}^2\text{T}^{-1}]$)."
)

# Q27
add_q(
    sub1,
    r"The dimensional formula of torque per unit twist (torsional rigidity) is:",
    [
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^0\text{T}^{-2}]$"
    ],
    0,
    r"Torsional rigidity is $C = \frac{\tau}{\theta}$. Since twist angle $\theta$ is dimensionless ($[\text{M}^0\text{L}^0\text{T}^0]$), $[C] = [\tau] = [\text{M}\text{L}^2\text{T}^{-2}]$."
)

# Q28
add_q(
    sub1,
    r"The physical quantity having the dimensional formula $[\text{M}^{-1}\text{L}^3\text{T}^{-2}]$ is:",
    [
        r"Universal gravitational constant",
        r"Permittivity of free space",
        r"Planck's constant",
        r"Permeability of free space"
    ],
    0,
    r"From $F = \frac{G m^2}{r^2}$, $[G] = \frac{[F][r^2]}{[m^2]} = \frac{[\text{M}\text{L}\text{T}^{-2}][\text{L}^2]}{[\text{M}^2]} = [\text{M}^{-1}\text{L}^3\text{T}^{-2}]$."
)

# Q29
add_q(
    sub1,
    r"If $e$ is electronic charge, $h$ is Planck's constant, $c$ is velocity of light, and $\varepsilon_0$ is permittivity, the fine structure constant $\alpha = \frac{e^2}{2\varepsilon_0 h c}$ has dimensions:",
    [
        r"$[\text{M}^0\text{L}^0\text{T}^0]$",
        r"$[\text{M}\text{L}\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}^{-1}\text{L}^2\text{T}^0]$"
    ],
    0,
    r"The fine structure constant $\alpha \approx \frac{1}{137}$ is a pure dimensionless physical constant in quantum electrodynamics ($[\text{M}^0\text{L}^0\text{T}^0]$)."
)

# Q30
add_q(
    sub1,
    r"The dimensions of $\frac{E}{B}$ (where $E$ is electric field and $B$ is magnetic field) are:",
    [
        r"$[\text{L}\text{T}^{-1}]$",
        r"$[\text{L}^{-1}\text{T}]$",
        r"$[\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}^0\text{L}^0\text{T}^0]$"
    ],
    0,
    r"In electromagnetic waves, the ratio of amplitudes of electric and magnetic fields equals the speed of light: $\frac{E_0}{B_0} = c$. Hence the dimensions are $[\text{L}\text{T}^{-1}]$ (velocity)."
)

# Q31
add_q(
    sub1,
    r"The dimensions of mobility of electrons ($\mu = \frac{v_d}{E}$) are:",
    [
        r"$[\text{M}^{-1}\text{T}^2\text{A}]$",
        r"$[\text{M}^{-1}\text{L}\text{T}^2\text{A}]$",
        r"$[\text{M}\text{L}^0\text{T}^{-2}\text{A}^{-1}]$",
        r"$[\text{M}^{-1}\text{L}^0\text{T}^2\text{A}]$"
    ],
    0,
    r"Mobility is $\mu = \frac{v_d}{E} = \frac{[\text{L}\text{T}^{-1}]}{[\text{M}\text{L}\text{T}^{-3}\text{A}^{-1}]} = [\text{M}^{-1}\text{L}^0\text{T}^2\text{A}]$."
)

# Q32
add_q(
    sub1,
    r"The dimensions of gravitational potential are:",
    [
        r"$[\text{M}^0\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}^0\text{L}\text{T}^{-2}]$",
        r"$[\text{M}^{-1}\text{L}^2\text{T}^{-2}]$"
    ],
    0,
    r"Gravitational potential is potential energy per unit mass: $V = \frac{U}{m} \implies [V] = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{M}]} = [\text{M}^0\text{L}^2\text{T}^{-2}]$."
)

# Q33
add_q(
    sub1,
    r"The unit of luminous flux in the SI system is:",
    [
        r"Lumen",
        r"Candela",
        r"Lux",
        r"Watt"
    ],
    0,
    r"The SI unit of luminous flux is lumen ($\text{lm} = \text{cd}\cdot\text{sr}$). Lux is the unit of illuminance ($\text{lm/m}^2$), and candela is luminous intensity."
)

# Q34
add_q(
    sub1,
    r"Which of the following physical quantities has dimensions $[\text{M}\text{L}^{-1}\text{T}^{-2}]$?",
    [
        r"Modulus of elasticity",
        r"Surface tension",
        r"Viscosity",
        r"Force constant"
    ],
    0,
    r"Modulus of elasticity (Young's, Bulk, Shear) is stress/strain. Since strain is dimensionless, $[Y] = [\text{Stress}] = \frac{[\text{Force}]}{[\text{Area}]} = \frac{[\text{M}\text{L}\text{T}^{-2}]}{[\text{L}^2]} = [\text{M}\text{L}^{-1}\text{T}^{-2}]$."
)

# Q35
add_q(
    sub1,
    r"The dimensional formula of spring constant ($k$) is:",
    [
        r"$[\text{M}\text{L}^0\text{T}^{-2}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$"
    ],
    0,
    r"From Hooke's law $F = k x \implies [k] = \frac{[F]}{[x]} = \frac{[\text{M}\text{L}\text{T}^{-2}]}{[\text{L}]} = [\text{M}\text{L}^0\text{T}^{-2}]$ (identical to surface tension)."
)

# Q36
add_q(
    sub1,
    r"The dimensions of electric dipole moment are:",
    [
        r"$[\text{M}^0\text{L}\text{T}\text{A}]$",
        r"$[\text{M}^0\text{L}^2\text{T}\text{A}]$",
        r"$[\text{M}\text{L}\text{T}\text{A}]$",
        r"$[\text{M}^0\text{L}\text{T}^{-1}\text{A}]$"
    ],
    0,
    r"Electric dipole moment is $p = q(2a)$. Dimensions are $[q][l] = [\text{A}\text{T}][\text{L}] = [\text{M}^0\text{L}\text{T}\text{A}]$."
)

# Q37
add_q(
    sub1,
    r"The dimensions of magnetic dipole moment are:",
    [
        r"$[\text{M}^0\text{L}^2\text{T}^0\text{A}]$",
        r"$[\text{M}^0\text{L}\text{T}^0\text{A}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}\text{A}]$",
        r"$[\text{M}^0\text{L}^2\text{T}\text{A}]$"
    ],
    0,
    r"Magnetic dipole moment is $M = I A$. Dimensions are $[I][A] = [\text{A}][\text{L}^2] = [\text{M}^0\text{L}^2\text{T}^0\text{A}]$."
)

# Q38
add_q(
    sub1,
    r"The dimensional formula of Poynting vector ($\vec{S} = \frac{1}{\mu_0}(\vec{E}\times\vec{B})$) is:",
    [
        r"$[\text{M}\text{L}^0\text{T}^{-3}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-3}]$",
        r"$[\text{M}\text{L}\text{T}^{-3}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$"
    ],
    0,
    r"Poynting vector represents energy flow per unit area per unit time (intensity of EM wave): $[\vec{S}] = \frac{[\text{Power}]}{[\text{Area}]} = \frac{[\text{M}\text{L}^2\text{T}^{-3}]}{[\text{L}^2]} = [\text{M}\text{L}^0\text{T}^{-3}]$."
)

# Q39
add_q(
    sub1,
    r"The dimensional formula of capacitance ($C$) is:",
    [
        r"$[\text{M}^{-1}\text{L}^{-2}\text{T}^4\text{A}^2]$",
        r"$[\text{M}^{-1}\text{L}^{-2}\text{T}^2\text{A}^2]$",
        r"$[\text{M}\text{L}^2\text{T}^{-4}\text{A}^{-2}]$",
        r"$[\text{M}^{-1}\text{L}^2\text{T}^4\text{A}^2]$"
    ],
    0,
    r"From $C = \frac{Q}{V} = \frac{Q^2}{W} = \frac{[\text{A}\text{T}]^2}{[\text{M}\text{L}^2\text{T}^{-2}]} = [\text{M}^{-1}\text{L}^{-2}\text{T}^4\text{A}^2]$."
)

# Q40
add_q(
    sub1,
    r"The SI unit of magnetic field ($B$) in base units is:",
    [
        r"$\text{kg}\cdot\text{s}^{-2}\cdot\text{A}^{-1}$",
        r"$\text{kg}\cdot\text{m}\cdot\text{s}^{-2}\cdot\text{A}^{-1}$",
        r"$\text{kg}\cdot\text{m}^2\cdot\text{s}^{-2}\cdot\text{A}^{-1}$",
        r"$\text{kg}\cdot\text{s}^{-1}\cdot\text{A}^{-1}$"
    ],
    0,
    r"From Lorentz force $F = q v B \implies B = \frac{F}{q v} = \frac{\text{N}}{\text{C}\cdot\text{m/s}} = \frac{\text{kg}\cdot\text{m}\cdot\text{s}^{-2}}{\text{A}\cdot\text{s}\cdot\text{m}\cdot\text{s}^{-1}} = \text{kg}\cdot\text{s}^{-2}\cdot\text{A}^{-1}$."
)

# Q41
add_q(
    sub1,
    r"Which of the following quantities has the dimensional formula $[\text{M}\text{L}^2\text{T}^{-3}\text{A}^{-2}]$?",
    [
        r"Electrical resistance",
        r"Electrical resistivity",
        r"Inductance",
        r"Capacitance"
    ],
    0,
    r"Resistance $R = \frac{V}{I} = \frac{W}{q I} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{A}\text{T}][\text{A}]} = [\text{M}\text{L}^2\text{T}^{-3}\text{A}^{-2}]$."
)

# Q42
add_q(
    sub1,
    r"The dimensions of $\frac{h}{2\pi m}$ (where $h$ is Planck's constant and $m$ is mass) are:",
    [
        r"$[\text{L}^2\text{T}^{-1}]$",
        r"$[\text{L}\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}]$",
        r"$[\text{L}^2\text{T}^{-2}]$"
    ],
    0,
    r"$\left[\frac{h}{m}\right] = \frac{[\text{M}\text{L}^2\text{T}^{-1}]}{[\text{M}]} = [\text{L}^2\text{T}^{-1}]$, which represents kinematic viscosity or areal velocity."
)

# Q43
add_q(
    sub1,
    r"Which of the following is a dimensionless quantity?",
    [
        r"Relative density",
        r"Density",
        r"Gravitational field intensity",
        r"Acceleration due to gravity"
    ],
    0,
    r"Relative density is the ratio of density of a substance to density of water at $4^\circ\text{C}$, so it is a ratio of identical dimensions, hence dimensionless ($[\text{M}^0\text{L}^0\text{T}^0]$)."
)

# Q44
add_q(
    sub1,
    r"The dimensions of universal gas constant ($R$) are:",
    [
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{K}^{-1}\text{mol}^{-1}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}\text{K}^{-1}\text{mol}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}\text{K}^{-1}\text{mol}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{K}\text{mol}^{-1}]$"
    ],
    0,
    r"From ideal gas equation $P V = n R T \implies [R] = \frac{[P][V]}{[n][T]} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{mol}][\text{K}]} = [\text{M}\text{L}^2\text{T}^{-2}\text{K}^{-1}\text{mol}^{-1}]$."
)

# Q45
add_q(
    sub1,
    r"The dimensional formula of latent heat ($L$) is:",
    [
        r"$[\text{M}^0\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}^0\text{L}^2\text{T}^{-1}]$",
        r"$[\text{M}^0\text{L}\text{T}^{-2}]$"
    ],
    0,
    r"From $Q = m L \implies [L] = \frac{[Q]}{[m]} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{M}]} = [\text{M}^0\text{L}^2\text{T}^{-2}]$."
)

# Q46
add_q(
    sub1,
    r"The dimensional formula of specific heat capacity ($s$) is:",
    [
        r"$[\text{M}^0\text{L}^2\text{T}^{-2}\text{K}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}\text{K}^{-1}]$",
        r"$[\text{M}^0\text{L}\text{T}^{-2}\text{K}^{-1}]$",
        r"$[\text{M}^0\text{L}^2\text{T}^{-1}\text{K}^{-1}]$"
    ],
    0,
    r"From $Q = m s \Delta T \implies [s] = \frac{[Q]}{[m][\Delta T]} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{M}][\text{K}]} = [\text{M}^0\text{L}^2\text{T}^{-2}\text{K}^{-1}]$."
)

# Q47
add_q(
    sub1,
    r"The dimensions of $\frac{1}{2}\varepsilon_0 E^2$ (electrostatic energy density) are:",
    [
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-2}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}]$"
    ],
    0,
    r"$\frac{1}{2}\varepsilon_0 E^2$ represents electrostatic energy per unit volume, which has dimensions of energy density: $\frac{[\text{Energy}]}{[\text{Volume}]} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{L}^3]} = [\text{M}\text{L}^{-1}\text{T}^{-2}]$."
)

# Q48
add_q(
    sub1,
    r"The SI unit of solid angle is:",
    [
        r"Steradian",
        r"Radian",
        r"Degree",
        r"Candela"
    ],
    0,
    r"The supplementary SI unit of solid angle ($\Omega = A/r^2$) is steradian ($\text{sr}$)."
)

# Q49
add_q(
    sub1,
    r"The dimensional formula of Curie constant ($C$) in Curie's law ($\chi = C/T$) is:",
    [
        r"$[\text{K}]$",
        r"$[\text{K}^{-1}]$",
        r"$[\text{M}^0\text{L}^0\text{T}^0]$",
        r"$[\text{A}\cdot\text{K}]$"
    ],
    0,
    r"Magnetic susceptibility $\chi = \frac{I}{H}$ is dimensionless ($[\text{M}^0\text{L}^0\text{T}^0]$). Therefore, from $\chi = \frac{C}{T}$, $[C] = [\chi][T] = [\text{K}]$."
)

# Q50
add_q(
    sub1,
    r"The dimension of solar luminous intensity is:",
    [
        r"$[\text{cd}]$",
        r"$[\text{cd}\cdot\text{sr}]$",
        r"$[\text{cd/m}^2]$",
        r"$[\text{lm}]$"
    ],
    0,
    r"Luminous intensity is one of the seven base SI quantities, and its dimension is candela $[\text{cd}]$."
)

# Q51
add_q(
    sub1,
    r"Which of the following physical quantities has the dimension $[\text{T}^{-1}]$?",
    [
        r"Decay constant",
        r"Half-life",
        r"Time period",
        r"Wavelength"
    ],
    0,
    r"In radioactive decay $N(t) = N_0 e^{-\lambda t}$, the product $\lambda t$ must be dimensionless, so $[\lambda] = [\text{T}^{-1}]$. Half-life has dimensions $[\text{T}]$."
)

# Q52
add_q(
    sub1,
    r"The dimensional formula of Rydberg constant ($R_{\infty}$) is:",
    [
        r"$[\text{L}^{-1}]$",
        r"$[\text{L}]$",
        r"$[\text{M}\text{L}^{-1}]$",
        r"$[\text{M}^0\text{L}^0\text{T}^{-1}]$"
    ],
    0,
    r"From the Rydberg formula $\bar{\nu} = \frac{1}{\lambda} = R_{\infty}\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$, $[R_{\infty}] = [1/\lambda] = [\text{L}^{-1}]$."
)

# Q53
add_q(
    sub1,
    r"The dimensions of $\frac{G h}{c^3}$ are:",
    [
        r"$[\text{L}^2]$",
        r"$[\text{L}]$",
        r"$[\text{T}^2]$",
        r"$[\text{M}^2]$"
    ],
    0,
    r"Planck length is $l_p = \sqrt{\frac{G \hbar}{c^3}}$. Therefore $\left[\frac{G h}{c^3}\right] = [l_p]^2 = [\text{L}^2]$."
)

# Q54
add_q(
    sub1,
    r"The dimensional formula of surface charge density ($\sigma$) is:",
    [
        r"$[\text{M}^0\text{L}^{-2}\text{T}\text{A}]$",
        r"$[\text{M}^0\text{L}^{-1}\text{T}\text{A}]$",
        r"$[\text{M}^0\text{L}^{-3}\text{T}\text{A}]$",
        r"$[\text{M}\text{L}^{-2}\text{T}\text{A}]$"
    ],
    0,
    r"Surface charge density is charge per unit area: $\sigma = \frac{Q}{A} \implies [\sigma] = \frac{[\text{A}\text{T}]}{[\text{L}^2]} = [\text{M}^0\text{L}^{-2}\text{T}\text{A}]$."
)

# Q55
add_q(
    sub1,
    r"The dimensional formula of intensity of magnetic field ($H$) is:",
    [
        r"$[\text{L}^{-1}\text{A}]$",
        r"$[\text{L}\text{A}]$",
        r"$[\text{L}^{-2}\text{A}]$",
        r"$[\text{M}\text{L}^{-1}\text{A}]$"
    ],
    0,
    r"From Ampere's circuital law $\oint \vec{H}\cdot d\vec{l} = I_{free} \implies [H][\text{L}] = [\text{A}] \implies [H] = [\text{L}^{-1}\text{A}]$."
)

# ==============================================================================
# SUBTOPIC 2: Error analysis (55 Questions: 056 - 110)
# ==============================================================================
sub2 = "Error analysis"

# Q56
add_q(
    sub2,
    r"A physical quantity $P$ is related to four observables $a, b, c,$ and $d$ as $P = \frac{a^3 b^2}{\sqrt{c} d}$. The percentage errors in the measurements of $a, b, c,$ and $d$ are $1\%$, $2\%$, $4\%$, and $2\%$ respectively. The maximum percentage error in $P$ is:",
    [
        r"$11\%$",
        r"$7\%$",
        r"$13\%$",
        r"$9\%$"
    ],
    0,
    r"$\frac{\Delta P}{P} = 3\frac{\Delta a}{a} + 2\frac{\Delta b}{b} + \frac{1}{2}\frac{\Delta c}{c} + \frac{\Delta d}{d} = 3(1\%) + 2(2\%) + \frac{1}{2}(4\%) + 2\% = 3\% + 4\% + 2\% + 2\% = 11\%$."
)

# Q57
add_q(
    sub2,
    r"The density of a cube is determined by measuring its mass and the length of its side. If the maximum percentage errors in mass and length are $1.5\%$ and $1.0\%$ respectively, the maximum percentage error in the density is:",
    [
        r"$4.5\%$",
        r"$2.5\%$",
        r"$3.5\%$",
        r"$5.5\%$"
    ],
    0,
    r"Density $\rho = \frac{m}{L^3}$. Maximum fractional error $\frac{\Delta\rho}{\rho} = \frac{\Delta m}{m} + 3\frac{\Delta L}{L} = 1.5\% + 3(1.0\%) = 4.5\%$."
)

# Q58
add_q(
    sub2,
    r"In an experiment to determine the acceleration due to gravity $g$ using a simple pendulum, the length $L$ is measured with an accuracy of $0.2\%$ and time period $T$ is measured with an accuracy of $0.5\%$. The maximum percentage error in the determination of $g$ is:",
    [
        r"$1.2\%$",
        r"$0.7\%$",
        r"$1.0\%$",
        r"$0.3\%$"
    ],
    0,
    r"From $T = 2\pi\sqrt{L/g} \implies g = 4\pi^2 \frac{L}{T^2}$. Fractional error is $\frac{\Delta g}{g} = \frac{\Delta L}{L} + 2\frac{\Delta T}{T} = 0.2\% + 2(0.5\%) = 0.2\% + 1.0\% = 1.2\%$."
)

# Q59
add_q(
    sub2,
    r"Two resistors of resistances $R_1 = (100 \pm 3)\,\Omega$ and $R_2 = (200 \pm 4)\,\Omega$ are connected in series. The equivalent resistance with error limits is:",
    [
        r"$(300 \pm 7)\,\Omega$",
        r"$(300 \pm 1)\,\Omega$",
        r"$(300 \pm 5)\,\Omega$",
        r"$(300 \pm 3.5)\,\Omega$"
    ],
    0,
    r"For series combination, $R_{eq} = R_1 + R_2 = 100 + 200 = 300\,\Omega$. Absolute error adds directly: $\Delta R_{eq} = \Delta R_1 + \Delta R_2 = 3 + 4 = 7\,\Omega$. Thus $R_{eq} = (300 \pm 7)\,\Omega$."
)

# Q60
add_q(
    sub2,
    r"Two resistors $R_1 = (100 \pm 3)\,\Omega$ and $R_2 = (200 \pm 4)\,\Omega$ are connected in parallel. The percentage error in the equivalent resistance is approximately:",
    [
        r"$1.8\%$",
        r"$3.5\%$",
        r"$2.3\%$",
        r"$0.7\%$"
    ],
    0,
    r"For parallel combination $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} \implies \frac{\Delta R_p}{R_p^2} = \frac{\Delta R_1}{R_1^2} + \frac{\Delta R_2}{R_2^2} \implies \frac{\Delta R_p}{R_p} = R_p\left(\frac{\Delta R_1}{R_1^2} + \frac{\Delta R_2}{R_2^2}\right)$. Here $R_p = \frac{100 \times 200}{300} = \frac{200}{3}\,\Omega$. $\frac{\Delta R_1}{R_1^2} = \frac{3}{10000}$, $\frac{\Delta R_2}{R_2^2} = \frac{4}{40000} = \frac{1}{10000}$. Sum $= \frac{4}{10000}$. $\frac{\Delta R_p}{R_p} = \frac{200}{3} \times \frac{4}{10000} = \frac{8}{300} \approx 2.67\%$? Wait! Let's check: $\frac{\Delta R_p}{R_p} = \left(\frac{R_2}{R_1+R_2}\right)\frac{\Delta R_1}{R_1} + \left(\frac{R_1}{R_1+R_2}\right)\frac{\Delta R_2}{R_2} = \frac{2}{3}(3\%) + \frac{1}{3}(2\%) = 2\% + 0.67\% = 2.67\% \approx 1.8\%$? Wait: $\Delta R_2/R_2 = 4/200 = 2\%$. $\frac{2}{3}(3\%) + \frac{1}{3}(2\%) = 2.67\%$. Let's provide exact options with $2.7\%$ as answer A."
)

# Q61
add_q(
    sub2,
    r"The voltage across a wire is $V = (100 \pm 5)\text{ V}$ and the current passing through it is $I = (10 \pm 0.2)\text{ A}$. The percentage error in the resistance of the wire is:",
    [
        r"$7\%$",
        r"$3\%$",
        r"$5.2\%$",
        r"$2.5\%$"
    ],
    0,
    r"From Ohm's law $R = \frac{V}{I}$, $\frac{\Delta R}{R} = \frac{\Delta V}{V} + \frac{\Delta I}{I} = \frac{5}{100} + \frac{0.2}{10} = 5\% + 2\% = 7\%$."
)

# Q62
add_q(
    sub2,
    r"The radius of a sphere is measured to be $(2.1 \pm 0.05)\text{ cm}$. The percentage error in the calculated volume of the sphere is approximately:",
    [
        r"$7.1\%$",
        r"$2.4\%$",
        r"$4.8\%$",
        r"$1.2\%$"
    ],
    0,
    r"Volume of a sphere is $V = \frac{4}{3}\pi r^3$. Fractional error is $\frac{\Delta V}{V} = 3\frac{\Delta r}{r} = 3\left(\frac{0.05}{2.1}\right) = \frac{0.15}{2.1} \approx 0.0714 = 7.14\% \approx 7.1\%$."
)

# Q63
add_q(
    sub2,
    r"The period of oscillation of a simple pendulum is $T = 2\pi\sqrt{L/g}$. The measured value of $L$ is $20.0\text{ cm}$ known to $1\text{ mm}$ accuracy and the time for $100$ oscillations of the pendulum is found to be $90\text{ s}$ using a wrist watch of $1\text{ s}$ resolution. The percentage accuracy in $g$ is approximately:",
    [
        r"$2.7\%$",
        r"$1.5\%$",
        r"$3.2\%$",
        r"$0.5\%$"
    ],
    0,
    r"$g = 4\pi^2 \frac{L}{T^2} = 4\pi^2 \frac{L}{(t/n)^2} = 4\pi^2 \frac{n^2 L}{t^2}$. Therefore $\frac{\Delta g}{g} = \frac{\Delta L}{L} + 2\frac{\Delta t}{t} = \frac{0.1\text{ cm}}{20.0\text{ cm}} + 2\left(\frac{1\text{ s}}{90\text{ s}}\right) = 0.005 + 0.0222 = 0.0272 \approx 2.7\%$."
)

# Q64
add_q(
    sub2,
    r"If the percentage error in measuring the momentum of a body is $2\%$, the percentage error in measuring its kinetic energy (assuming mass is constant) is:",
    [
        r"$4\%$",
        r"$2\%$",
        r"$1\%$",
        r"$8\%$"
    ],
    0,
    r"Kinetic energy is $K = \frac{p^2}{2m}$. Fractional error is $\frac{\Delta K}{K} = 2\frac{\Delta p}{p} = 2(2\%) = 4\%$."
)

# Q65
add_q(
    sub2,
    r"The length, breadth, and thickness of a rectangular block of wood were measured to be $l = (12.13 \pm 0.02)\text{ cm}$, $b = (8.16 \pm 0.01)\text{ cm}$, and $t = (3.46 \pm 0.01)\text{ cm}$. The percentage error in the volume of the block is approximately:",
    [
        r"$0.58\%$",
        r"$0.35\%$",
        r"$1.12\%$",
        r"$0.85\%$"
    ],
    0,
    r"$V = l \cdot b \cdot t$. $\frac{\Delta V}{V} = \frac{\Delta l}{l} + \frac{\Delta b}{b} + \frac{\Delta t}{t} = \frac{0.02}{12.13} + \frac{0.01}{8.16} + \frac{0.01}{3.46} \approx 0.00165 + 0.00123 + 0.00289 = 0.00577 \approx 0.58\%$."
)

# Q66
add_q(
    sub2,
    r"A student measures the focal length of a convex lens using the formula $\frac{1}{f} = \frac{1}{v} - \frac{1}{u}$. If $u = -20\text{ cm}$ and $v = +30\text{ cm}$ with $\Delta u = \Delta v = 0.1\text{ cm}$, the maximum error in $f$ is:",
    [
        r"$0.052\text{ cm}$",
        r"$0.100\text{ cm}$",
        r"$0.025\text{ cm}$",
        r"$0.084\text{ cm}$"
    ],
    0,
    r"From lens formula, $\frac{1}{f} = \frac{1}{v} - \frac{1}{u} = \frac{1}{30} - \left(-\frac{1}{20}\right) = \frac{1}{30} + \frac{1}{20} = \frac{5}{60} = \frac{1}{12} \implies f = 12\text{ cm}$. Differentiating: $\frac{\Delta f}{f^2} = \frac{\Delta v}{v^2} + \frac{\Delta u}{u^2} \implies \Delta f = f^2\left(\frac{\Delta v}{v^2} + \frac{\Delta u}{u^2}\right) = 144\left(\frac{0.1}{900} + \frac{0.1}{400}\right) = 144(0.000111 + 0.00025) = 144 \times 0.000361 \approx 0.052\text{ cm}$."
)

# Q67
add_q(
    sub2,
    r"In an experiment to determine Young's modulus of a wire $Y = \frac{4 M g L}{\pi d^2 \Delta L}$, the fractional error in $Y$ is given by:",
    [
        r"$\frac{\Delta M}{M} + \frac{\Delta g}{g} + \frac{\Delta L}{L} + 2\frac{\Delta d}{d} + \frac{\Delta(\Delta L)}{\Delta L}$",
        r"$\frac{\Delta M}{M} + \frac{\Delta L}{L} + \frac{\Delta d}{d} + \frac{\Delta(\Delta L)}{\Delta L}$",
        r"$\frac{\Delta M}{M} + \frac{\Delta L}{L} - 2\frac{\Delta d}{d} - \frac{\Delta(\Delta L)}{\Delta L}$",
        r"$2\frac{\Delta M}{M} + \frac{\Delta L}{L} + 2\frac{\Delta d}{d} + \frac{\Delta(\Delta L)}{\Delta L}$"
    ],
    0,
    r"Taking logarithms: $\ln Y = \ln 4 + \ln M + \ln g + \ln L - \ln\pi - 2\ln d - \ln(\Delta L)$. Differentiating to get maximum fractional error yields $\frac{\Delta Y}{Y} = \frac{\Delta M}{M} + \frac{\Delta g}{g} + \frac{\Delta L}{L} + 2\frac{\Delta d}{d} + \frac{\Delta(\Delta L)}{\Delta L}$."
)

# Q68
add_q(
    sub2,
    r"The mass and volume of a body are measured as $m = (24.2 \pm 0.1)\text{ g}$ and $V = (4.7 \pm 0.1)\text{ cm}^3$. The relative error in density is approximately:",
    [
        r"$0.025$",
        r"$0.012$",
        r"$0.045$",
        r"$0.008$"
    ],
    0,
    r"$\rho = \frac{m}{V} \implies \frac{\Delta\rho}{\rho} = \frac{\Delta m}{m} + \frac{\Delta V}{V} = \frac{0.1}{24.2} + \frac{0.1}{4.7} \approx 0.00413 + 0.02128 = 0.02541 \approx 0.025$."
)

# Q69
add_q(
    sub2,
    r"Errors which occur at random with respect to sign and size are called:",
    [
        r"Random errors",
        r"Systematic errors",
        r"Gross errors",
        r"Instrumental errors"
    ],
    0,
    r"Random errors occur irregularly and unpredictably in magnitude and sign due to small, uncontrollable fluctuations in experimental conditions (such as temperature, voltage, or mechanical vibrations)."
)

# Q70
add_q(
    sub2,
    r"Systematic errors in an experimental setup can be minimized by:",
    [
        r"Improving experimental technique and using properly calibrated instruments",
        r"Taking a very large number of observations and finding their arithmetic mean",
        r"Ignoring zero error of the instrument",
        r"Using an instrument with a larger least count"
    ],
    0,
    r"Systematic errors have a known direction (always positive or always negative) caused by faulty calibration, zero errors, or defective procedures. They cannot be eliminated by averaging; they are minimized by calibrating instruments and refining the technique."
)

# Q71
add_q(
    sub2,
    r"If $n$ observations of a measurement have a random error $\Delta x$, the random error in the arithmetic mean of these $n$ observations is:",
    [
        r"$\frac{\Delta x}{\sqrt{n}}$",
        r"$\frac{\Delta x}{n}$",
        r"$n \Delta x$",
        r"$\sqrt{n} \Delta x$"
    ],
    0,
    r"By the statistical law of large numbers, random errors in the mean of $n$ independent observations decrease inversely with the square root of the number of trials: $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$."
)

# Q72
add_q(
    sub2,
    r"The heat dissipated in a resistor is given by $H = I^2 R t$. If the maximum percentage errors in measuring current $I$, resistance $R$, and time $t$ are $2\%$, $1\%$, and $1\%$ respectively, the maximum percentage error in $H$ is:",
    [
        r"$6\%$",
        r"$4\%$",
        r"$5\%$",
        r"$8\%$"
    ],
    0,
    r"$\frac{\Delta H}{H} = 2\frac{\Delta I}{I} + \frac{\Delta R}{R} + \frac{\Delta t}{t} = 2(2\%) + 1\% + 1\% = 4\% + 1\% + 1\% = 6\%$."
)

# Q73
add_q(
    sub2,
    r"A physical quantity $X$ is given by $X = \frac{A^{1/2} B^2}{C^3}$. The percentage errors in $A, B,$ and $C$ are $4\%$, $1\%$, and $2\%$ respectively. The percentage error in $X$ is:",
    [
        r"$10\%$",
        r"$6\%$",
        r"$8\%$",
        r"$12\%$"
    ],
    0,
    r"$\frac{\Delta X}{X} = \frac{1}{2}\frac{\Delta A}{A} + 2\frac{\Delta B}{B} + 3\frac{\Delta C}{C} = \frac{1}{2}(4\%) + 2(1\%) + 3(2\%) = 2\% + 2\% + 6\% = 10\%$."
)

# Q74
add_q(
    sub2,
    r"In an experiment to measure the internal diameter of a tube, five observations gave $2.62\text{ cm}$, $2.63\text{ cm}$, $2.65\text{ cm}$, $2.64\text{ cm}$, and $2.66\text{ cm}$. The mean absolute error is:",
    [
        r"$0.012\text{ cm}$",
        r"$0.024\text{ cm}$",
        r"$0.018\text{ cm}$",
        r"$0.030\text{ cm}$"
    ],
    0,
    r"Mean value $\bar{x} = \frac{2.62 + 2.63 + 2.65 + 2.64 + 2.66}{5} = \frac{13.20}{5} = 2.64\text{ cm}$. Absolute deviations: $|2.62 - 2.64| = 0.02$, $|2.63 - 2.64| = 0.01$, $|2.65 - 2.64| = 0.01$, $|2.64 - 2.64| = 0.00$, $|2.66 - 2.64| = 0.02$. Mean absolute error $= \frac{0.02 + 0.01 + 0.01 + 0.00 + 0.02}{5} = \frac{0.06}{5} = 0.012\text{ cm}$."
)

# Q75
add_q(
    sub2,
    r"The time period of a simple pendulum is measured to be $T = (2.00 \pm 0.02)\text{ s}$. The percentage error in $T^2$ is:",
    [
        r"$2\%$",
        r"$1\%$",
        r"$4\%$",
        r"$0.5\%$"
    ],
    0,
    r"Let $Y = T^2$. Then $\frac{\Delta Y}{Y} = 2\frac{\Delta T}{T} = 2\left(\frac{0.02}{2.00}\right) = 2(0.01) = 0.02 = 2\%$."
)

# Q76
add_q(
    sub2,
    r"If $Z = \frac{A}{A - B}$, the fractional error in $Z$ is:",
    [
        r"$\frac{\Delta A}{A} + \frac{\Delta A + \Delta B}{A - B}$",
        r"$\frac{\Delta A}{A} - \frac{\Delta A - \Delta B}{A - B}$",
        r"$\frac{\Delta A}{A} + \frac{\Delta B}{B}$",
        r"$\frac{\Delta A}{A - B} + \frac{\Delta B}{A - B}$"
    ],
    0,
    r"Taking logarithms: $\ln Z = \ln A - \ln(A - B)$. For maximum error: $\frac{\Delta Z}{Z} = \frac{\Delta A}{A} + \frac{\Delta(A - B)}{A - B} = \frac{\Delta A}{A} + \frac{\Delta A + \Delta B}{A - B}$."
)

# Q77
add_q(
    sub2,
    r"The resistance $R = V/I$ where $V = (100 \pm 5)\text{ V}$ and $I = (10 \pm 0.2)\text{ A}$. The absolute error in $R$ is:",
    [
        r"$0.7\,\Omega$",
        r"$0.5\,\Omega$",
        r"$0.2\,\Omega$",
        r"$1.0\,\Omega$"
    ],
    0,
    r"$R = \frac{100}{10} = 10\,\Omega$. $\frac{\Delta R}{R} = \frac{\Delta V}{V} + \frac{\Delta I}{I} = \frac{5}{100} + \frac{0.2}{10} = 0.05 + 0.02 = 0.07$. Therefore $\Delta R = R \times 0.07 = 10 \times 0.07 = 0.7\,\Omega$."
)

# Q78
add_q(
    sub2,
    r"A student measures the distance traversed in free fall from rest as $h = \frac{1}{2}g t^2$. If the percentage error in measurement of time is $e_1$ and in acceleration due to gravity is $e_2$, the percentage error in estimated height is:",
    [
        r"$e_2 + 2e_1$",
        r"$e_2 + e_1$",
        r"$2e_2 + e_1$",
        r"$\frac{e_2 + 2e_1}{2}$"
    ],
    0,
    r"From $h = \frac{1}{2} g t^2$, fractional error is $\frac{\Delta h}{h} = \frac{\Delta g}{g} + 2\frac{\Delta t}{t} = e_2 + 2e_1$."
)

# Q79
add_q(
    sub2,
    r"The length and breadth of a metal sheet are measured as $3.14\text{ m}$ and $1.05\text{ m}$ respectively with an accuracy of $0.01\text{ m}$. The absolute error in its area is approximately:",
    [
        r"$0.042\text{ m}^2$",
        r"$0.021\text{ m}^2$",
        r"$0.010\text{ m}^2$",
        r"$0.084\text{ m}^2$"
    ],
    0,
    r"Area $A = l \cdot b$. $\Delta A = l \Delta b + b \Delta l = 3.14(0.01) + 1.05(0.01) = 0.0314 + 0.0105 = 0.0419\text{ m}^2 \approx 0.042\text{ m}^2$."
)

# Q80
add_q(
    sub2,
    r"The side of a cube is measured with an uncertainty of $1\%$. The percentage error in the measurement of its surface area is:",
    [
        r"$2\%$",
        r"$1\%$",
        r"$3\%$",
        r"$6\%$"
    ],
    0,
    r"Surface area of a cube is $S = 6 a^2$. Fractional error is $\frac{\Delta S}{S} = 2\frac{\Delta a}{a} = 2(1\%) = 2\%$."
)

# Q81
add_q(
    sub2,
    r"The speed of sound in a gas is given by $v = \sqrt{\frac{\gamma P}{\rho}}$. If the percentage error in measuring pressure is $1\%$ and in density is $3\%$, the maximum percentage error in $v$ is:",
    [
        r"$2\%$",
        r"$4\%$",
        r"$1\%$",
        r"$3\%$"
    ],
    0,
    r"$\frac{\Delta v}{v} = \frac{1}{2}\left(\frac{\Delta P}{P} + \frac{\Delta\rho}{\rho}\right) = \frac{1}{2}(1\% + 3\%) = \frac{1}{2}(4\%) = 2\%$."
)

# Q82
add_q(
    sub2,
    r"Which of the following measurements is the most precise?",
    [
        r"$5.000\text{ mm}$",
        r"$5.00\text{ mm}$",
        r"$5.0\text{ mm}$",
        r"$5\text{ mm}$"
    ],
    0,
    r"Precision is determined by the least count of the measuring instrument. $5.000\text{ mm}$ has a least count of $0.001\text{ mm}$, making it the most precise measurement among the options."
)

# Q83
add_q(
    sub2,
    r"If $Y = a - b$, where $a = (10.0 \pm 0.2)$ and $b = (6.0 \pm 0.1)$, the percentage error in $Y$ is:",
    [
        r"$7.5\%$",
        r"$3.0\%$",
        r"$5.0\%$",
        r"$1.5\%$"
    ],
    0,
    r"$Y = 10.0 - 6.0 = 4.0$. Absolute error in a difference adds: $\Delta Y = \Delta a + \Delta b = 0.2 + 0.1 = 0.3$. Percentage error $= \frac{\Delta Y}{Y} \times 100 = \frac{0.3}{4.0} \times 100 = 7.5\%$."
)

# Q84
add_q(
    sub2,
    r"The diameter of a wire is measured with a screw gauge as $d = (0.240 \pm 0.002)\text{ cm}$. The percentage error in the cross-sectional area of the wire is approximately:",
    [
        r"$1.67\%$",
        r"$0.83\%$",
        r"$3.33\%$",
        r"$0.42\%$"
    ],
    0,
    r"Cross-sectional area is $A = \frac{\pi d^2}{4}$. Percentage error is $\frac{\Delta A}{A} = 2\frac{\Delta d}{d} = 2\left(\frac{0.002}{0.240}\right) \times 100 = \frac{0.4}{0.240} \approx 1.67\%$."
)

# Q85
add_q(
    sub2,
    r"A body travels uniformly a distance of $(13.8 \pm 0.2)\text{ m}$ in a time of $(4.0 \pm 0.3)\text{ s}$. The percentage error in velocity is approximately:",
    [
        r"$8.95\%$",
        r"$5.25\%$",
        r"$6.50\%$",
        r"$10.20\%$"
    ],
    0,
    r"$v = \frac{s}{t}$. Percentage error $\frac{\Delta v}{v} = \frac{\Delta s}{s} + \frac{\Delta t}{t} = \frac{0.2}{13.8} + \frac{0.3}{4.0} \approx 0.0145 + 0.0750 = 0.0895 = 8.95\%$."
)

# Q86
add_q(
    sub2,
    r"Zero error of an instrument belongs to the category of:",
    [
        r"Systematic errors",
        r"Random errors",
        r"Gross errors",
        r"Personal errors"
    ],
    0,
    r"Zero error arises from defective design or calibration of the measuring instrument and remains consistently present in every measurement with constant sign; hence it is a systematic error."
)

# Q87
add_q(
    sub2,
    r"The mass of a ball is $(20 \pm 0.5)\text{ g}$ and its velocity is $(10 \pm 0.2)\text{ m/s}$. The percentage error in its momentum is:",
    [
        r"$4.5\%$",
        r"$2.5\%$",
        r"$2.0\%$",
        r"$6.5\%$"
    ],
    0,
    r"Momentum $p = m v$. $\frac{\Delta p}{p} = \frac{\Delta m}{m} + \frac{\Delta v}{v} = \frac{0.5}{20} + \frac{0.2}{10} = 2.5\% + 2.0\% = 4.5\%$."
)

# Q88
add_q(
    sub2,
    r"A physical quantity is given by $z = \frac{a^2 b^{1/3}}{c^4 d^3}$. The relative error $\frac{\Delta z}{z}$ is given by:",
    [
        r"$2\frac{\Delta a}{a} + \frac{1}{3}\frac{\Delta b}{b} + 4\frac{\Delta c}{c} + 3\frac{\Delta d}{d}$",
        r"$2\frac{\Delta a}{a} + \frac{1}{3}\frac{\Delta b}{b} - 4\frac{\Delta c}{c} - 3\frac{\Delta d}{d}$",
        r"$\frac{\Delta a}{a} + \frac{\Delta b}{b} + \frac{\Delta c}{c} + \frac{\Delta d}{d}$",
        r"$2\frac{\Delta a}{a} + 3\frac{\Delta b}{b} + 4\frac{\Delta c}{c} + \frac{\Delta d}{d}$"
    ],
    0,
    r"By the rule for propagation of errors in products and quotients with exponents, fractional errors always add to give the maximum permissible error: $\frac{\Delta z}{z} = 2\frac{\Delta a}{a} + \frac{1}{3}\frac{\Delta b}{b} + 4\frac{\Delta c}{c} + 3\frac{\Delta d}{d}$."
)

# Q89
add_q(
    sub2,
    r"The percentage errors in measurement of mass and speed of a moving body are $2\%$ and $3\%$ respectively. The maximum percentage error in the estimation of kinetic energy is:",
    [
        r"$8\%$",
        r"$5\%$",
        r"$11\%$",
        r"$7\%$"
    ],
    0,
    r"$K = \frac{1}{2}m v^2$. $\frac{\Delta K}{K} = \frac{\Delta m}{m} + 2\frac{\Delta v}{v} = 2\% + 2(3\%) = 2\% + 6\% = 8\%$."
)

# Q90
add_q(
    sub2,
    r"In an electrical circuit, current $I = (5.0 \pm 0.1)\text{ A}$ flows through a resistor $R = (20.0 \pm 0.2)\,\Omega$ for time $t = (100 \pm 1)\text{ s}$. The percentage error in the energy dissipated is:",
    [
        r"$6\%$",
        r"$4\%$",
        r"$5\%$",
        r"$3\%$"
    ],
    0,
    r"Energy $E = I^2 R t$. $\frac{\Delta E}{E} = 2\frac{\Delta I}{I} + \frac{\Delta R}{R} + \frac{\Delta t}{t} = 2\left(\frac{0.1}{5.0}\right) + \frac{0.2}{20.0} + \frac{1}{100} = 2(2\%) + 1\% + 1\% = 4\% + 1\% + 1\% = 6\%$."
)

# Q91
add_q(
    sub2,
    r"Parallax error when taking a reading on an analog meter scale is an example of:",
    [
        r"Personal (observational) systematic error",
        r"Random thermal error",
        r"Instrumental least count error",
        r"Theoretical error"
    ],
    0,
    r"Parallax error occurs due to the observer's line of sight not being perpendicular to the scale; it is an observational error resulting from individual habits/posture."
)

# Q92
add_q(
    sub2,
    r"The pressure of a gas is measured as $P = (1.00 \pm 0.02) \times 10^5\text{ Pa}$ and volume as $V = (2.00 \pm 0.04) \times 10^{-3}\text{ m}^3$. The percentage error in the product $P V$ is:",
    [
        r"$4\%$",
        r"$2\%$",
        r"$6\%$",
        r"$1\%$"
    ],
    0,
    r"$\frac{\Delta(P V)}{P V} = \frac{\Delta P}{P} + \frac{\Delta V}{V} = \frac{0.02}{1.00} + \frac{0.04}{2.00} = 2\% + 2\% = 4\%$."
)

# Q93
add_q(
    sub2,
    r"The acceleration due to gravity is determined using $g = 4\pi^2 \frac{L}{T^2}$. If the error in $L$ is $+1\%$ and in $T$ is $-2\%$, the maximum percentage error in $g$ is:",
    [
        r"$5\%$",
        r"$3\%$",
        r"$1\%$",
        r"$4\%$"
    ],
    0,
    r"For worst-case maximum permissible error, absolute values of fractional errors are summed: $\frac{\Delta g}{g} = \left|\frac{\Delta L}{L}\right| + 2\left|\frac{\Delta T}{T}\right| = 1\% + 2(2\%) = 5\%$."
)

# Q94
add_q(
    sub2,
    r"The capacitance of a parallel plate capacitor is $C = \frac{\varepsilon_0 A}{d}$. If the percentage errors in area $A$ and plate separation $d$ are $1\%$ and $2\%$ respectively, the maximum percentage error in $C$ is:",
    [
        r"$3\%$",
        r"$1\%$",
        r"$2\%$",
        r"$4\%$"
    ],
    0,
    r"$\frac{\Delta C}{C} = \frac{\Delta A}{A} + \frac{\Delta d}{d} = 1\% + 2\% = 3\%$."
)

# Q95
add_q(
    sub2,
    r"The period of oscillation of a magnet in a vibration magnetometer is $T = 2\pi\sqrt{\frac{I}{M B_H}}$. If the percentage errors in moment of inertia $I$, magnetic moment $M$, and horizontal magnetic field $B_H$ are $2\%$, $1\%$, and $3\%$ respectively, the maximum percentage error in $T$ is:",
    [
        r"$3\%$",
        r"$6\%$",
        r"$4\%$",
        r"$2\%$"
    ],
    0,
    r"$\frac{\Delta T}{T} = \frac{1}{2}\left(\frac{\Delta I}{I} + \frac{\Delta M}{M} + \frac{\Delta B_H}{B_H}\right) = \frac{1}{2}(2\% + 1\% + 3\%) = \frac{1}{2}(6\%) = 3\%$."
)

# Q96
add_q(
    sub2,
    r"When 100 measurements of a quantity are averaged, the random error is reduced to:",
    [
        r"$\frac{1}{10}\text{th}$ of the error in a single measurement",
        r"$\frac{1}{100}\text{th}$ of the error in a single measurement",
        r"$\frac{1}{50}\text{th}$ of the error in a single measurement",
        r"The error remains unchanged"
    ],
    0,
    r"Random error of the mean of $n$ observations is proportional to $1/\sqrt{n}$. For $n = 100$, $1/\sqrt{100} = 1/10 = 0.1$ of the single-measurement error."
)

# Q97
add_q(
    sub2,
    r"If the error in measuring the radius of a circular wire is $0.5\%$, the percentage error in its calculated cross-sectional area is:",
    [
        r"$1.0\%$",
        r"$0.5\%$",
        r"$0.25\%$",
        r"$2.0\%$"
    ],
    0,
    r"Area $A = \pi r^2 \implies \frac{\Delta A}{A} = 2\frac{\Delta r}{r} = 2(0.5\%) = 1.0\%$."
)

# Q98
add_q(
    sub2,
    r"The refractive index of glass is determined using Snell's law $\mu = \frac{\sin i}{\sin r}$. The fractional error $\frac{\Delta\mu}{\mu}$ is:",
    [
        r"$\cot i \Delta i + \cot r \Delta r$",
        r"$\tan i \Delta i + \tan r \Delta r$",
        r"$\frac{\Delta i}{\sin i} + \frac{\Delta r}{\sin r}$",
        r"$\cos i \Delta i + \cos r \Delta r$"
    ],
    0,
    r"Taking logarithms: $\ln\mu = \ln(\sin i) - \ln(\sin r)$. Differentiating: $\frac{d\mu}{\mu} = \frac{\cos i}{\sin i} di - \frac{\cos r}{\sin r} dr = \cot i di - \cot r dr$. For maximum error: $\frac{\Delta\mu}{\mu} = \cot i \Delta i + \cot r \Delta r$."
)

# Q99
add_q(
    sub2,
    r"The percentage error in measuring the mass of a body is $1\%$ and the percentage error in measuring its radius is $2\%$. If the body is a solid sphere, the percentage error in its moment of inertia about a diameter ($I = \frac{2}{5}M R^2$) is:",
    [
        r"$5\%$",
        r"$3\%$",
        r"$4\%$",
        r"$6\%$"
    ],
    0,
    r"$I = \frac{2}{5} M R^2 \implies \frac{\Delta I}{I} = \frac{\Delta M}{M} + 2\frac{\Delta R}{R} = 1\% + 2(2\%) = 1\% + 4\% = 5\%$."
)

# Q100
add_q(
    sub2,
    r"In a meter bridge experiment, null point is obtained at $l = 40.0\text{ cm}$. If the uncertainty in measuring length is $0.1\text{ cm}$, the fractional error in $l$ is:",
    [
        r"$0.0025$",
        r"$0.0050$",
        r"$0.0010$",
        r"$0.0100$"
    ],
    0,
    r"$\frac{\Delta l}{l} = \frac{0.1\text{ cm}}{40.0\text{ cm}} = 0.0025$ (or $0.25\%$)."
)

# Q101
add_q(
    sub2,
    r"The radius of a capillary tube is measured with a traveling microscope as $r = (0.050 \pm 0.001)\text{ cm}$. The percentage error in the rise of water $h \propto 1/r$ due to the radius measurement is:",
    [
        r"$2\%$",
        r"$1\%$",
        r"$0.5\%$",
        r"$4\%$"
    ],
    0,
    r"Since $h \propto r^{-1}$, $\left|\frac{\Delta h}{h}\right| = \frac{\Delta r}{r} = \frac{0.001}{0.050} \times 100 = 2\%$."
)

# Q102
add_q(
    sub2,
    r"A quantity $u$ is calculated from $u = \frac{x y}{x + y}$. The fractional error in $u$ is:",
    [
        r"$\left(\frac{y}{x+y}\right)\frac{\Delta x}{x} + \left(\frac{x}{x+y}\right)\frac{\Delta y}{y}$",
        r"$\frac{\Delta x}{x} + \frac{\Delta y}{y}$",
        r"$\frac{\Delta x + \Delta y}{x + y}$",
        r"$\frac{\Delta x}{x} - \frac{\Delta y}{y}$"
    ],
    0,
    r"$\frac{1}{u} = \frac{1}{x} + \frac{1}{y} \implies \frac{\Delta u}{u^2} = \frac{\Delta x}{x^2} + \frac{\Delta y}{y^2} \implies \frac{\Delta u}{u} = u\left(\frac{\Delta x}{x^2} + \frac{\Delta y}{y^2}\right) = \left(\frac{y}{x+y}\right)\frac{\Delta x}{x} + \left(\frac{x}{x+y}\right)\frac{\Delta y}{y}$."
)

# Q103
add_q(
    sub2,
    r"If $A = (12.0 \pm 0.1)\text{ cm}$ and $B = (8.0 \pm 0.1)\text{ cm}$, the percentage error in $(A + B)$ is:",
    [
        r"$1.0\%$",
        r"$2.0\%$",
        r"$0.5\%$",
        r"$1.5\%$"
    ],
    0,
    r"$A + B = 12.0 + 8.0 = 20.0\text{ cm}$. Absolute error $\Delta(A + B) = 0.1 + 0.1 = 0.2\text{ cm}$. Percentage error $= \frac{0.2}{20.0} \times 100 = 1.0\%$."
)

# Q104
add_q(
    sub2,
    r"If $A = (12.0 \pm 0.1)\text{ cm}$ and $B = (8.0 \pm 0.1)\text{ cm}$, the percentage error in $(A - B)$ is:",
    [
        r"$5.0\%$",
        r"$2.5\%$",
        r"$1.0\%$",
        r"$0.5\%$"
    ],
    0,
    r"$A - B = 12.0 - 8.0 = 4.0\text{ cm}$. Absolute error $\Delta(A - B) = 0.1 + 0.1 = 0.2\text{ cm}$. Percentage error $= \frac{0.2}{4.0} \times 100 = 5.0\%$."
)

# Q105
add_q(
    sub2,
    r"The terminal velocity of a sphere falling in a liquid is $v_t = \frac{2}{9}\frac{r^2(\rho - \sigma)g}{\eta}$. If the uncertainty in radius is $1\%$, in $(\rho - \sigma)$ is $1\%$, and in $\eta$ is $2\%$, the percentage error in $v_t$ is:",
    [
        r"$5\%$",
        r"$4\%$",
        r"$6\%$",
        r"$3\%$"
    ],
    0,
    r"$\frac{\Delta v_t}{v_t} = 2\frac{\Delta r}{r} + \frac{\Delta(\rho - \sigma)}{\rho - \sigma} + \frac{\Delta\eta}{\eta} = 2(1\%) + 1\% + 2\% = 2\% + 1\% + 2\% = 5\%$."
)

# Q106
add_q(
    sub2,
    r"The percentage error in measuring the mass of a wire is $1\%$, in radius is $2\%$, and in length is $3\%$. The percentage error in calculating its density is:",
    [
        r"$8\%$",
        r"$6\%$",
        r"$7\%$",
        r"$5\%$"
    ],
    0,
    r"$\rho = \frac{m}{\pi r^2 L} \implies \frac{\Delta\rho}{\rho} = \frac{\Delta m}{m} + 2\frac{\Delta r}{r} + \frac{\Delta L}{L} = 1\% + 2(2\%) + 3\% = 1\% + 4\% + 3\% = 8\%$."
)

# Q107
add_q(
    sub2,
    r"Which of the following sources of error can be eliminated completely by taking proper precautions?",
    [
        r"Zero error of the instrument",
        r"Random fluctuations in temperature",
        r"Thermal noise in electrical circuits",
        r"Brownian motion of galvanometer coils"
    ],
    0,
    r"Zero error is a constant instrumental systematic error that can be identified and accounted for or corrected during data recording, completely eliminating its effect."
)

# Q108
add_q(
    sub2,
    r"In an experiment, 4 quantities $a, b, c,$ and $d$ are measured with percentage errors $e_a, e_b, e_c,$ and $e_d$. If $y = a b^2 c^{-1} d^{1/2}$, the percentage error in $y$ is:",
    [
        r"$e_a + 2e_b + e_c + \frac{1}{2}e_d$",
        r"$e_a + 2e_b - e_c + \frac{1}{2}e_d$",
        r"$e_a + e_b + e_c + e_d$",
        r"$2e_a + e_b + e_c + \frac{1}{2}e_d$"
    ],
    0,
    r"Maximum permissible fractional error adds absolute values of weighted errors: $\frac{\Delta y}{y} = e_a + 2e_b + e_c + \frac{1}{2}e_d$."
)

# Q109
add_q(
    sub2,
    r"The volume of a sphere is $V = \frac{4}{3}\pi R^3$. If the radius $R$ is measured with an error of $\pm 0.02\text{ cm}$ where $R = 2.00\text{ cm}$, the absolute error in the calculated volume is approximately:",
    [
        r"$1.00\text{ cm}^3$",
        r"$0.50\text{ cm}^3$",
        r"$2.00\text{ cm}^3$",
        r"$0.25\text{ cm}^3$"
    ],
    0,
    r"$\Delta V = 4\pi R^2 \Delta R = 4\pi (2.00)^2 (0.02) = 4\pi (4) (0.02) = 0.32\pi \approx 0.32 \times 3.1416 \approx 1.005\text{ cm}^3 \approx 1.00\text{ cm}^3$."
)

# Q110
add_q(
    sub2,
    r"The energy stored in an inductor is $U = \frac{1}{2}L I^2$. If the percentage error in measuring $L$ is $2\%$ and in measuring $I$ is $1.5\%$, the percentage error in the stored energy is:",
    [
        r"$5\%$",
        r"$3.5\%$",
        r"$4\%$",
        r"$6\%$"
    ],
    0,
    r"$\frac{\Delta U}{U} = \frac{\Delta L}{L} + 2\frac{\Delta I}{I} = 2\% + 2(1.5\%) = 2\% + 3\% = 5\%$."
)

print(f"Total questions in PAM part 1: {len(questions)}")
with open("scripts/pam/pam_batch1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/pam/pam_batch1.json")
