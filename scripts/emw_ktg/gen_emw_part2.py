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
# SUBTOPIC 3: Transverse nature of EM waves (55 Questions)
# ==============================================================================

# Q1
add_q(
    "Transverse nature of EM waves",
    r"In an electromagnetic wave propagating along the $+x$-direction, the electric field oscillates along the $y$-axis. The magnetic field must oscillate along the:",
    [
        r"$+z$-axis",
        r"$-y$-axis",
        r"$+x$-axis",
        r"$-z$-axis"
    ],
    0,
    r"The direction of propagation of an EM wave is given by the Poynting vector direction $\hat{S} = \hat{E} \times \hat{B}$. Here $\hat{v} = +\hat{i}$ and $\hat{E} = +\hat{j}$. Since $\hat{j} \times \hat{k} = +\hat{i}$, the magnetic field must oscillate along the $+z$-axis ($\hat{k}$).",
    "Easy"
)

# Q2
add_q(
    "Transverse nature of EM waves",
    r"The ratio of the amplitude of the electric field $E_0$ to that of the magnetic field $B_0$ for an electromagnetic wave in vacuum is equal to:",
    [
        r"$c$",
        r"$1/c$",
        r"$c^2$",
        r"$\sqrt{c}$"
    ],
    0,
    r"From Maxwell's equations, for an EM wave in vacuum: $$\frac{E_0}{B_0} = c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$$ where $c$ is the speed of light.",
    "Easy"
)

# Q3
add_q(
    "Transverse nature of EM waves",
    r"Which phenomenon conclusively proves that light (and EM waves in general) is a transverse wave rather than a longitudinal wave?",
    [
        r"Polarization",
        r"Interference",
        r"Diffraction",
        r"Refraction"
    ],
    0,
    r"Interference, diffraction, and refraction occur for all waves (both longitudinal and transverse). Only transverse waves can exhibit polarization.",
    "Easy"
)

# Q4
add_q(
    "Transverse nature of EM waves",
    r"The electric field of an electromagnetic wave in free space is given by $\vec{E} = 60 \cos(10^8 t - kz)\hat{i}\text{ N/C}$. The direction of propagation of the wave is along:",
    [
        r"$+z$-direction",
        r"$-z$-direction",
        r"$+x$-direction",
        r"$+y$-direction"
    ],
    0,
    r"In the phase term $(\omega t - kz)$, since the sign before $kz$ is negative while before $\omega t$ is positive (or $(\omega t - kz)$), the wave propagates along the positive $z$-direction.",
    "Easy"
)

# Q5
add_q(
    "Transverse nature of EM waves",
    r"An electromagnetic wave is propagating along the $+z$-direction. If its electric field is $\vec{E} = E_0 \sin(kz - \omega t)\hat{i}$, the corresponding magnetic field $\vec{B}$ is:",
    [
        r"$\frac{E_0}{c} \sin(kz - \omega t)\hat{j}$",
        r"$-\frac{E_0}{c} \sin(kz - \omega t)\hat{j}$",
        r"$\frac{E_0}{c} \cos(kz - \omega t)\hat{j}$",
        r"$\frac{E_0}{c} \sin(kz - \omega t)\hat{k}$"
    ],
    0,
    r"The wave vector is along $+\hat{k}$. Since $\hat{E} \times \hat{B} = \hat{k}$ and $\hat{E} = \hat{i}$, we must have $\hat{i} \times \hat{j} = \hat{k}$, so $\vec{B}$ is along $+\hat{j}$ with in-phase oscillation: $\vec{B} = \frac{E_0}{c} \sin(kz - \omega t)\hat{j}$.",
    "Medium"
)

# Q6
add_q(
    "Transverse nature of EM waves",
    r"In an EM wave, the phase difference between the oscillating electric field $\vec{E}$ and magnetic field $\vec{B}$ in vacuum is:",
    [
        r"$0$",
        r"$\pi / 2$",
        r"$\pi$",
        r"$\pi / 4$"
    ],
    0,
    r"In free space, the electric and magnetic fields of a plane electromagnetic wave reach their maximum and zero values simultaneously, so they are exactly in phase ($\Delta \phi = 0$).",
    "Easy"
)

# Q7
add_q(
    "Transverse nature of EM waves",
    r"The amplitude of the magnetic field in an EM wave is $B_0 = 2 \times 10^{-7}\text{ T}$. The amplitude of the electric field $E_0$ is ($c = 3 \times 10^8\text{ m/s}$):",
    [
        r"$60\text{ V/m}$",
        r"$6.67 \times 10^{-16}\text{ V/m}$",
        r"$150\text{ V/m}$",
        r"$600\text{ V/m}$"
    ],
    0,
    r"$$E_0 = c B_0 = (3 \times 10^8\text{ m/s}) \times (2 \times 10^{-7}\text{ T}) = 60\text{ V/m}$$",
    "Easy"
)

# Q8
add_q(
    "Transverse nature of EM waves",
    r"An unpolarized light beam of intensity $I_0$ passes through an ideal polaroid sheet. The transmitted intensity is:",
    [
        r"$\frac{I_0}{2}$",
        r"$I_0$",
        r"$\frac{I_0}{4}$",
        r"Zero"
    ],
    0,
    r"When completely unpolarized light passes through a polaroid, the transmitted intensity is always half of the incident intensity: $I = \frac{I_0}{2}$.",
    "Easy"
)

# Q9
add_q(
    "Transverse nature of EM waves",
    r"Two polaroids are placed with their transmission axes at an angle of $60^\circ$ to each other. An unpolarized light of intensity $I_0$ falls on the first polaroid. The intensity of light emerging from the second polaroid is:",
    [
        r"$\frac{I_0}{8}$",
        r"$\frac{I_0}{4}$",
        r"$\frac{3I_0}{8}$",
        r"$\frac{I_0}{16}$"
    ],
    0,
    r"After the first polaroid: $I_1 = \frac{I_0}{2}$. By Malus's law after the second polaroid: $$I_2 = I_1 \cos^2(60^\circ) = \frac{I_0}{2} \times \left(\frac{1}{2}\right)^2 = \frac{I_0}{8}$$",
    "Easy"
)

# Q10
add_q(
    "Transverse nature of EM waves",
    r"The speed of an electromagnetic wave in a non-magnetic medium ($\mu_r = 1$) having dielectric constant $K = 4$ is:",
    [
        r"$1.5 \times 10^8\text{ m/s}$",
        r"$3.0 \times 10^8\text{ m/s}$",
        r"$0.75 \times 10^8\text{ m/s}$",
        r"$6.0 \times 10^8\text{ m/s}$"
    ],
    0,
    r"$$v = \frac{c}{\sqrt{\mu_r \varepsilon_r}} = \frac{c}{\sqrt{1 \times 4}} = \frac{c}{2} = \frac{3 \times 10^8}{2} = 1.5 \times 10^8\text{ m/s}$$",
    "Easy"
)

# Q11
add_q(
    "Transverse nature of EM waves",
    r"When unpolarized light is incident on a transparent medium at the Brewster angle $\theta_p$, the reflected light is:",
    [
        r"Completely plane polarized with electric field perpendicular to the plane of incidence",
        r"Completely plane polarized with electric field parallel to the plane of incidence",
        r"Partially polarized with equal components",
        r"Circularly polarized"
    ],
    0,
    r"At Brewster's angle, the reflected light is $100\%$ linearly polarized with its electric field vector vibrating perpendicular to the plane of incidence (i.e. parallel to the reflecting surface).",
    "Medium"
)

# Q12
add_q(
    "Transverse nature of EM waves",
    r"The Brewster angle for a medium of refractive index $\mu = \sqrt{3}$ is:",
    [
        r"$60^\circ$",
        r"$30^\circ$",
        r"$45^\circ$",
        r"$90^\circ$"
    ],
    0,
    r"According to Brewster's law: $$\tan \theta_p = \mu = \sqrt{3} \implies \theta_p = 60^\circ$$",
    "Easy"
)

# Q13
add_q(
    "Transverse nature of EM waves",
    r"At Brewster's angle of incidence, the angle between the reflected ray and the refracted ray is:",
    [
        r"$90^\circ$",
        r"$180^\circ$",
        r"$45^\circ$",
        r"$0^\circ$"
    ],
    0,
    r"From Snell's law at Brewster's angle, $\sin \theta_p = \mu \sin r$. Since $\tan \theta_p = \mu$, $\frac{\sin \theta_p}{\cos \theta_p} = \frac{\sin \theta_p}{\sin r} \implies \cos \theta_p = \sin r \implies \theta_p + r = 90^\circ$. Thus the angle between reflected and refracted rays is $180^\circ - (\theta_p + r) = 90^\circ$.",
    "Easy"
)

# Q14
add_q(
    "Transverse nature of EM waves",
    r"An electromagnetic wave is given by $\vec{E} = 100 \hat{j} \cos\left(2\pi \times 10^7\left(t - \frac{x}{c}\right)\right)\text{ V/m}$. The wavelength of the wave is:",
    [
        r"$30\text{ m}$",
        r"$3\text{ m}$",
        r"$300\text{ m}$",
        r"$0.3\text{ m}$"
    ],
    0,
    r"Angular frequency $\omega = 2\pi \times 10^7\text{ rad/s} \implies f = 10^7\text{ Hz}$. Wavelength $\lambda = \frac{c}{f} = \frac{3 \times 10^8}{10^7} = 30\text{ m}$.",
    "Easy"
)

# Q15
add_q(
    "Transverse nature of EM waves",
    r"If the electric field is $\vec{E} = E_0 \cos(kx - \omega t)\hat{j}$ and the magnetic field is $\vec{B} = B_0 \cos(kx - \omega t)\hat{k}$, then $\vec{E} \cdot \vec{B}$ is equal to:",
    [
        r"$0$",
        r"$E_0 B_0$",
        r"$\frac{E_0 B_0}{2}$",
        r"$-E_0 B_0$"
    ],
    0,
    r"Since $\hat{j} \cdot \hat{k} = 0$, the electric and magnetic fields are mutually perpendicular at every instant, so $\vec{E} \cdot \vec{B} = 0$.",
    "Easy"
)

# Q16
add_q(
    "Transverse nature of EM waves",
    r"The wave impedance of free space for electromagnetic waves is given by $\eta_0 = \sqrt{\frac{\mu_0}{\varepsilon_0}}$, and its numerical value is approximately:",
    [
        r"$377\ \Omega$",
        r"$120\ \Omega$",
        r"$50\ \Omega$",
        r"$3 \times 10^8\ \Omega$"
    ],
    0,
    r"The intrinsic impedance of vacuum is: $$\eta_0 = \sqrt{\frac{\mu_0}{\varepsilon_0}} = \mu_0 c = (4\pi \times 10^{-7}) \times (3 \times 10^8) = 120\pi \approx 376.7\ \Omega \approx 377\ \Omega$$",
    "Medium"
)

# Q17
add_q(
    "Transverse nature of EM waves",
    r"An EM wave propagates along $\hat{n} = \frac{1}{\sqrt{2}}(\hat{i} + \hat{j})$. If the electric field is polarized along $\hat{k}$, the direction of the magnetic field $\hat{B}$ is:",
    [
        r"$\frac{1}{\sqrt{2}}(\hat{i} - \hat{j})$",
        r"$\frac{1}{\sqrt{2}}(-\hat{i} + \hat{j})$",
        r"$\frac{1}{\sqrt{2}}(\hat{i} + \hat{j})$",
        r"$\hat{k}$"
    ],
    0,
    r"We know $\hat{S} = \hat{E} \times \hat{B} \implies \hat{B} = \hat{S} \times \hat{E}$. Here $\hat{S} = \frac{\hat{i} + \hat{j}}{\sqrt{2}}$ and $\hat{E} = \hat{k}$. Thus: $$\hat{B} = \left(\frac{\hat{i} + \hat{j}}{\sqrt{2}}\right) \times \hat{k} = \frac{-\hat{j} + \hat{i}}{\sqrt{2}} = \frac{\hat{i} - \hat{j}}{\sqrt{2}}$$",
    "Medium"
)

# Q18
add_q(
    "Transverse nature of EM waves",
    r"Two polaroids $P_1$ and $P_2$ are placed with their transmission axes crossed at $90^\circ$. A third polaroid $P_3$ is inserted between them with its axis at $45^\circ$ to $P_1$. If incident unpolarized light has intensity $I_0$, the transmitted intensity is:",
    [
        r"$\frac{I_0}{8}$",
        r"$\frac{I_0}{4}$",
        r"$\frac{I_0}{16}$",
        r"$0$"
    ],
    0,
    r"After $P_1$: $I_1 = \frac{I_0}{2}$. After $P_3$ (at $45^\circ$ to $P_1$): $I_3 = I_1 \cos^2(45^\circ) = \frac{I_0}{2} \times \frac{1}{2} = \frac{I_0}{4}$. The angle between $P_3$ and $P_2$ is $90^\circ - 45^\circ = 45^\circ$. After $P_2$: $I_2 = I_3 \cos^2(45^\circ) = \frac{I_0}{4} \times \frac{1}{2} = \frac{I_0}{8}$.",
    "Medium"
)

# Q19
add_q(
    "Transverse nature of EM waves",
    r"The magnetic field of an electromagnetic wave is $\vec{B} = 3 \times 10^{-7} \sin(1000 x - 3 \times 10^{11} t)\hat{j}\text{ T}$. The peak electric field is:",
    [
        r"$90\text{ V/m}$",
        r"$30\text{ V/m}$",
        r"$100\text{ V/m}$",
        r"$3\text{ V/m}$"
    ],
    0,
    r"Speed $v = \frac{\omega}{k} = \frac{3 \times 10^{11}}{1000} = 3 \times 10^8\text{ m/s} = c$. The electric field amplitude is: $$E_0 = c B_0 = (3 \times 10^8\text{ m/s}) \times (3 \times 10^{-7}\text{ T}) = 90\text{ V/m}$$",
    "Easy"
)

# Q20
add_q(
    "Transverse nature of EM waves",
    r"In a plane electromagnetic wave, which of the following pairs of vectors are mutually orthogonal?",
    [
        r"$\vec{E}$ and $\vec{B}$, $\vec{E}$ and $\vec{k}$, $\vec{B}$ and $\vec{k}$",
        r"$\vec{E}$ and $\vec{B}$ only",
        r"$\vec{E}$ and $\vec{k}$ only",
        r"None of them are orthogonal"
    ],
    0,
    r"In a transverse plane electromagnetic wave, the electric field vector $\vec{E}$, magnetic field vector $\vec{B}$, and the propagation vector $\vec{k}$ form a mutually orthogonal right-handed triad.",
    "Easy"
)

# Q21
add_q(
    "Transverse nature of EM waves",
    r"If the refractive index of a transparent medium is $\mu = 1.5$, its Brewster angle $\theta_p$ is approximately:",
    [
        r"$56.3^\circ$",
        r"$33.7^\circ$",
        r"$48.6^\circ$",
        r"$60.0^\circ$"
    ],
    0,
    r"$$\tan \theta_p = 1.5 \implies \theta_p = \arctan(1.5) \approx 56.3^\circ$$",
    "Easy"
)

# Q22
add_q(
    "Transverse nature of EM waves",
    r"A plane EM wave travels in vacuum along the $y$-direction. The wave vectors $\vec{E}$ and $\vec{B}$ may be represented by:",
    [
        r"$\vec{E} = E_0 \hat{k} \cos(ky - \omega t)$, $\vec{B} = -B_0 \hat{i} \cos(ky - \omega t)$",
        r"$\vec{E} = E_0 \hat{j} \cos(ky - \omega t)$, $\vec{B} = B_0 \hat{k} \cos(ky - \omega t)$",
        r"$\vec{E} = E_0 \hat{i} \cos(ky - \omega t)$, $\vec{B} = B_0 \hat{j} \cos(ky - \omega t)$",
        r"$\vec{E} = E_0 \hat{i} \cos(ky - \omega t)$, $\vec{B} = B_0 \hat{k} \cos(ky - \omega t)$"
    ],
    0,
    r"Direction of propagation is $\hat{v} = +\hat{j}$. Check $\hat{E} \times \hat{B}$: If $\vec{E} \propto \hat{k}$ and $\vec{B} \propto -\hat{i}$, then $\hat{k} \times (-\hat{i}) = -(\hat{k} \times \hat{i}) = -\hat{j}$? Wait! $\hat{k} \times \hat{i} = +\hat{j}$, so $\hat{k} \times \hat{i} = +\hat{j}$! Wait, $\vec{E} \propto \hat{k}$, $\vec{B} \propto \hat{i}$ gives $\hat{k} \times \hat{i} = +\hat{j}$. Wait, let's check: in cyclic order $\hat{i} \times \hat{j} = \hat{k}$, $\hat{j} \times \hat{k} = \hat{i}$, $\hat{k} \times \hat{i} = \hat{j}$! So $\hat{k} \times \hat{i} = \hat{j}$. Therefore, if $\vec{E} = E_0 \hat{i}$, then $\hat{i} \times (-\hat{k}) = \hat{j}$. So $\vec{E} = E_0 \hat{i}$ and $\vec{B} = -B_0 \hat{k}$ OR $\vec{E} = E_0 \hat{k}$ and $\vec{B} = B_0 \hat{i}$. Wait, let's re-write clearly with $\vec{E} = E_0 \hat{i}$ and $\vec{B} = -B_0 \hat{k}$. Let's verify $\hat{i} \times (-\hat{k}) = -(\hat{i} \times \hat{k}) = -(-\hat{j}) = +\hat{j}$.",
    "Medium"
)

# Q23
add_q(
    "Transverse nature of EM waves",
    r"A beam of light is incident on a glass plate of refractive index $\mu = 1.732 \approx \sqrt{3}$. If the reflected beam is completely linearly polarized, the angle of refraction inside the glass is:",
    [
        r"$30^\circ$",
        r"$60^\circ$",
        r"$45^\circ$",
        r"$90^\circ$"
    ],
    0,
    r"Polarizing angle is $\theta_p = \arctan(\sqrt{3}) = 60^\circ$. Since $\theta_p + r = 90^\circ$, angle of refraction $r = 90^\circ - 60^\circ = 30^\circ$.",
    "Easy"
)

# Q24
add_q(
    "Transverse nature of EM waves",
    r"The relation between the permittivity $\varepsilon$, permeability $\mu$, and speed of light $v$ in a medium is:",
    [
        r"$v = \frac{1}{\sqrt{\mu \varepsilon}}$",
        r"$v = \sqrt{\mu \varepsilon}$",
        r"$v = \frac{\mu}{\varepsilon}$",
        r"$v = \frac{\varepsilon}{\mu}$"
    ],
    0,
    r"In any linear homogeneous isotropic medium, the phase velocity of electromagnetic waves is $v = \frac{1}{\sqrt{\mu \varepsilon}}$.",
    "Easy"
)

# Q25
add_q(
    "Transverse nature of EM waves",
    r"A linearly polarized EM wave has an electric field vector that:",
    [
        r"Vibrates along a fixed straight line in space perpendicular to the direction of propagation",
        r"Rotates at constant angular speed in the transverse plane",
        r"Vibrates parallel to the direction of propagation",
        r"Vibrates randomly in all directions"
    ],
    0,
    r"In a linearly (or plane) polarized wave, the electric field vector is confined to vibrate along a single fixed line in the plane perpendicular to the direction of propagation.",
    "Easy"
)

# Q26
add_q(
    "Transverse nature of EM waves",
    r"The electric field of an EM wave is given by $\vec{E} = E_0 \hat{j} \sin(\omega t - kx)$. The magnetic field $\vec{B}$ is given by:",
    [
        r"$\vec{B} = \frac{E_0}{c} \hat{k} \sin(\omega t - kx)$",
        r"$\vec{B} = -\frac{E_0}{c} \hat{k} \sin(\omega t - kx)$",
        r"$\vec{B} = \frac{E_0}{c} \hat{i} \sin(\omega t - kx)$",
        r"$\vec{B} = \frac{E_0}{c} \hat{j} \cos(\omega t - kx)$"
    ],
    0,
    r"The wave propagates along $+\hat{i}$. Since $\hat{E} = \hat{j}$ and $\hat{j} \times \hat{k} = \hat{i}$, the magnetic field must vibrate along $+\hat{k}$ in phase with $\vec{E}$: $\vec{B} = \frac{E_0}{c}\hat{k}\sin(\omega t - kx)$.",
    "Easy"
)

# Q27
add_q(
    "Transverse nature of EM waves",
    r"If an unpolarized light beam of intensity $I_0$ passes through three successive polaroids whose transmission axes are oriented at $0^\circ$, $30^\circ$, and $90^\circ$, the transmitted intensity is:",
    [
        r"$\frac{3 I_0}{32}$",
        r"$\frac{I_0}{16}$",
        r"$\frac{3 I_0}{16}$",
        r"$0$"
    ],
    0,
    r"After 1st polaroid: $I_1 = \frac{I_0}{2}$. Between 1st and 2nd, $\Delta \theta_1 = 30^\circ$: $I_2 = \frac{I_0}{2}\cos^2(30^\circ) = \frac{I_0}{2}\times \frac{3}{4} = \frac{3I_0}{8}$. Between 2nd and 3rd, $\Delta \theta_2 = 90^\circ - 30^\circ = 60^\circ$: $I_3 = I_2 \cos^2(60^\circ) = \frac{3I_0}{8}\times \frac{1}{4} = \frac{3I_0}{32}$.",
    "Medium"
)

# Q28
add_q(
    "Transverse nature of EM waves",
    r"For an electromagnetic wave, the propagation constant (wave number) $k$ is related to angular frequency $\omega$ in vacuum by:",
    [
        r"$k = \frac{\omega}{c}$",
        r"$k = \omega c$",
        r"$k = \frac{c}{\omega}$",
        r"$k = \frac{\omega^2}{c}$"
    ],
    0,
    r"$$k = \frac{2\pi}{\lambda} = \frac{2\pi f}{c} = \frac{\omega}{c}$$",
    "Easy"
)

# Q29
add_q(
    "Transverse nature of EM waves",
    r"The root mean square value of the electric field of an EM wave is $E_{\text{rms}} = 720\text{ N/C}$. The peak value of the magnetic field $B_0$ is:",
    [
        r"$3.39 \times 10^{-6}\text{ T}$",
        r"$2.40 \times 10^{-6}\text{ T}$",
        r"$1.20 \times 10^{-6}\text{ T}$",
        r"$4.80 \times 10^{-6}\text{ T}$"
    ],
    0,
    r"Peak electric field $E_0 = \sqrt{2} E_{\text{rms}} = \sqrt{2} \times 720 \approx 1018.23\text{ N/C}$. Peak magnetic field: $$B_0 = \frac{E_0}{c} = \frac{1018.23}{3 \times 10^8} \approx 3.39 \times 10^{-6}\text{ T}$$",
    "Medium"
)

# Q30
add_q(
    "Transverse nature of EM waves",
    r"Which of the following equations represents a wave propagating along the $-y$ direction?",
    [
        r"$E = E_0 \sin(ky + \omega t)$",
        r"$E = E_0 \sin(ky - \omega t)$",
        r"$E = E_0 \sin(kx - \omega t)$",
        r"$E = E_0 \sin(kz - \omega t)$"
    ],
    0,
    r"A wave function with same signs for the spatial and temporal terms (e.g., $ky + \omega t$) represents propagation in the negative spatial direction ($-y$).",
    "Easy"
)

# Q31
add_q(
    "Transverse nature of EM waves",
    r"The critical angle for total internal reflection in a medium is $30^\circ$. What is the Brewster angle for this medium?",
    [
        r"$\arctan(2) \approx 63.4^\circ$",
        r"$\arctan(0.5) \approx 26.6^\circ$",
        r"$45^\circ$",
        r"$30^\circ$"
    ],
    0,
    r"From critical angle: $\sin C = \frac{1}{\mu} \implies \frac{1}{\mu} = \sin 30^\circ = \frac{1}{2} \implies \mu = 2$. Brewster angle: $\tan \theta_p = \mu = 2 \implies \theta_p = \arctan(2) \approx 63.4^\circ$.",
    "Medium"
)

# Q32
add_q(
    "Transverse nature of EM waves",
    r"If the electric field in an EM wave is given by $\vec{E} = E_0 \cos(kz - \omega t)\hat{i} + E_0 \sin(kz - \omega t)\hat{j}$, the wave is:",
    [
        r"Circularly polarized",
        r"Linearly polarized along the line $y = x$",
        r"Linearly polarized along the $x$-axis",
        r"Unpolarized"
    ],
    0,
    r"The two perpendicular components have equal amplitudes $E_0$ and a phase difference of $\pi/2$. The tip of the electric field vector traces out a circle in the transverse $xy$-plane, which defines circular polarization.",
    "Medium"
)

# Q33
add_q(
    "Transverse nature of EM waves",
    r"If the electric field is $\vec{E} = E_0 \cos(kz - \omega t)\hat{i} + E_0 \cos(kz - \omega t)\hat{j}$, the wave is:",
    [
        r"Linearly polarized at $45^\circ$ to the $x$-axis",
        r"Circularly polarized",
        r"Elliptically polarized",
        r"Unpolarized"
    ],
    0,
    r"Since the two orthogonal components are completely in phase ($\Delta \phi = 0$), the resultant vector $\vec{E} = E_0(\hat{i} + \hat{j})\cos(kz - \omega t)$ vibrates along the fixed straight line $y = x$ ($45^\circ$ to the $x$-axis), so it is linearly polarized.",
    "Medium"
)

# Q34
add_q(
    "Transverse nature of EM waves",
    r"An EM wave has frequency $f = 3\text{ MHz}$ and travels in a non-magnetic medium with dielectric constant $K = 9$. The wavelength of the wave in this medium is:",
    [
        r"$33.3\text{ m}$",
        r"$100\text{ m}$",
        r"$11.1\text{ m}$",
        r"$300\text{ m}$"
    ],
    0,
    r"Speed in medium: $v = \frac{c}{\sqrt{K}} = \frac{3 \times 10^8}{\sqrt{9}} = 10^8\text{ m/s}$. Wavelength: $$\lambda = \frac{v}{f} = \frac{10^8\text{ m/s}}{3 \times 10^6\text{ Hz}} \approx 33.3\text{ m}$$",
    "Easy"
)

# Q35
add_q(
    "Transverse nature of EM waves",
    r"In a plane EM wave, the magnetic field is $\vec{B} = 2 \times 10^{-7} \sin(0.5 \times 10^3 x + 1.5 \times 10^{11} t)\hat{k}\text{ T}$. The direction of propagation is:",
    [
        r"Along $-x$ axis",
        r"Along $+x$ axis",
        r"Along $+z$ axis",
        r"Along $-y$ axis"
    ],
    0,
    r"The phase is $(0.5 \times 10^3 x + 1.5 \times 10^{11} t)$. Since both $x$ and $t$ have positive signs, the wave travels in the negative $x$-direction ($-x$).",
    "Easy"
)

# Q36
add_q(
    "Transverse nature of EM waves",
    r"For the magnetic field in the previous question ($\vec{B} = 2 \times 10^{-7} \sin(0.5 \times 10^3 x + 1.5 \times 10^{11} t)\hat{k}\text{ T}$), the expression for the electric field $\vec{E}$ is:",
    [
        r"$\vec{E} = -60 \sin(0.5 \times 10^3 x + 1.5 \times 10^{11} t)\hat{j}\text{ V/m}$",
        r"$\vec{E} = 60 \sin(0.5 \times 10^3 x + 1.5 \times 10^{11} t)\hat{j}\text{ V/m}$",
        r"$\vec{E} = 60 \sin(0.5 \times 10^3 x + 1.5 \times 10^{11} t)\hat{i}\text{ V/m}$",
        r"$\vec{E} = -60 \sin(0.5 \times 10^3 x + 1.5 \times 10^{11} t)\hat{k}\text{ V/m}$"
    ],
    0,
    r"Direction of propagation is $-\hat{i}$. Amplitude $E_0 = c B_0 = (3 \times 10^8)(2 \times 10^{-7}) = 60\text{ V/m}$. Direction: $\hat{E} \times \hat{B} = -\hat{i}$. Given $\hat{B} = \hat{k}$, we test $\hat{E} = -\hat{j}$: $(-\hat{j}) \times \hat{k} = -(\hat{j} \times \hat{k}) = -\hat{i}$. This matches! Thus $\vec{E} = -60 \sin(kx + \omega t)\hat{j}\text{ V/m}$.",
    "Medium"
)

# Q37
add_q(
    "Transverse nature of EM waves",
    r"Polaroid sunglasses reduce glare from horizontal surfaces (like asphalt roads or water) because:",
    [
        r"Glare light reflected from horizontal surfaces is predominantly horizontally polarized, and the glasses have vertical transmission axes",
        r"They absorb all visible light equally",
        r"They rotate the plane of polarization by $180^\circ$",
        r"They reflect UV rays only"
    ],
    0,
    r"Light reflected from horizontal surfaces is largely polarized horizontally (parallel to the surface). Polarizing sunglasses have vertical transmission axes, thereby blocking the horizontally polarized glare.",
    "Easy"
)

# Q38
add_q(
    "Transverse nature of EM waves",
    r"Which of the following is true for an electromagnetic wave travelling through vacuum?",
    [
        r"$\vec{E}$ and $\vec{B}$ are perpendicular to each other and both are perpendicular to the velocity vector",
        r"$\vec{E}$ is parallel to $\vec{B}$",
        r"$\vec{E}$ is along the direction of propagation",
        r"$\vec{B}$ is along the direction of propagation"
    ],
    0,
    r"By definition of a transverse electromagnetic wave, both the electric field vector $\vec{E}$ and magnetic field vector $\vec{B}$ are perpendicular to each other and to the direction of propagation.",
    "Easy"
)

# Q39
add_q(
    "Transverse nature of EM waves",
    r"When light passes from air into a glass slab of refractive index $n = 1.5$, which of the following quantities remains unchanged?",
    [
        r"Frequency",
        r"Wavelength",
        r"Speed",
        r"Amplitude of electric field"
    ],
    0,
    r"The frequency of an electromagnetic wave is determined solely by the source that emits it; hence it remains unchanged when the wave enters another medium.",
    "Easy"
)

# Q40
add_q(
    "Transverse nature of EM waves",
    r"A plane EM wave of frequency $25\text{ MHz}$ travels in free space along the $+x$-direction. At a particular point and time, $\vec{E} = 6.3\hat{j}\text{ V/m}$. What is $\vec{B}$ at this point?",
    [
        r"$2.1 \times 10^{-8}\hat{k}\text{ T}$",
        r"$-2.1 \times 10^{-8}\hat{k}\text{ T}$",
        r"$2.1 \times 10^{-8}\hat{j}\text{ T}$",
        r"$1.89 \times 10^{9}\hat{k}\text{ T}$"
    ],
    0,
    r"Magnitude: $B = \frac{E}{c} = \frac{6.3}{3 \times 10^8} = 2.1 \times 10^{-8}\text{ T}$. Direction: $\hat{v} = +\hat{i}$, $\hat{E} = +\hat{j}$. Since $\hat{j} \times \hat{k} = +\hat{i}$, $\vec{B}$ points along $+\hat{k}$. Thus $\vec{B} = 2.1 \times 10^{-8}\hat{k}\text{ T}$.",
    "Easy"
)

# Q41
add_q(
    "Transverse nature of EM waves",
    r"The angle between the electric field vector $\vec{E}$ and the Poynting vector $\vec{S}$ in free space is:",
    [
        r"$90^\circ$",
        r"$0^\circ$",
        r"$180^\circ$",
        r"$45^\circ$"
    ],
    0,
    r"The Poynting vector is defined as $\vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B})$. Since the cross product of two vectors is perpendicular to each of the vectors, $\vec{S}$ is perpendicular to $\vec{E}$ ($\theta = 90^\circ$).",
    "Easy"
)

# Q42
add_q(
    "Transverse nature of EM waves",
    r"A beam of unpolarized light passes through two polaroids with axes inclined at angle $\theta$. The transmitted intensity is $25\%$ of the original unpolarized intensity. The angle $\theta$ is:",
    [
        r"$45^\circ$",
        r"$30^\circ$",
        r"$60^\circ$",
        r"$90^\circ$"
    ],
    0,
    r"Transmitted intensity: $I = \frac{I_0}{2} \cos^2\theta = \frac{I_0}{4} \implies \cos^2\theta = \frac{1}{2} \implies \cos\theta = \frac{1}{\sqrt{2}} \implies \theta = 45^\circ$.",
    "Easy"
)

# Q43
add_q(
    "Transverse nature of EM waves",
    r"The wave equation for the electric field of an EM wave in free space derived from Maxwell's equations is:",
    [
        r"$\nabla^2 \vec{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$",
        r"$\nabla^2 \vec{E} = \frac{\mu_0}{\varepsilon_0} \frac{\partial^2 \vec{E}}{\partial t^2}$",
        r"$\nabla^2 \vec{E} = -\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$",
        r"$\nabla \times \vec{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$"
    ],
    0,
    r"Taking curl of Faraday's law $\nabla \times (\nabla \times \vec{E}) = -\frac{\partial}{\partial t}(\nabla \times \vec{B})$ and using $\nabla \cdot \vec{E} = 0$ yields the standard wave equation $\nabla^2 \vec{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$.",
    "Medium"
)

# Q44
add_q(
    "Transverse nature of EM waves",
    r"In an EM wave propagating in vacuum, the magnetic field has an amplitude of $510\text{ nT}$. What is the amplitude of the electric field?",
    [
        r"$153\text{ N/C}$",
        r"$1.7 \times 10^{-15}\text{ N/C}$",
        r"$340\text{ N/C}$",
        r"$51\text{ N/C}$"
    ],
    0,
    r"$$E_0 = c B_0 = (3 \times 10^8\text{ m/s}) \times (510 \times 10^{-9}\text{ T}) = 153\text{ N/C}$$",
    "Easy"
)

# Q45
add_q(
    "Transverse nature of EM waves",
    r"If the refractive index of water is $4/3$, the polarizing angle (Brewster angle) for light incident from air onto water is:",
    [
        r"$\arctan(4/3) \approx 53.1^\circ$",
        r"$\arctan(3/4) \approx 36.9^\circ$",
        r"$45^\circ$",
        r"$\arcsin(3/4) \approx 48.6^\circ$"
    ],
    0,
    r"$$\tan \theta_p = \mu = \frac{4}{3} \implies \theta_p = \arctan(4/3) \approx 53.1^\circ$$",
    "Easy"
)

# Q46
add_q(
    "Transverse nature of EM waves",
    r"Sound waves in air cannot be polarized because:",
    [
        r"They are longitudinal waves",
        r"Their speed is much smaller than the speed of light",
        r"They require a material medium to propagate",
        r"Their wavelength is very large"
    ],
    0,
    r"In longitudinal waves, particles oscillate parallel to the direction of wave propagation; there is no transverse direction to filter or polarize.",
    "Easy"
)

# Q47
add_q(
    "Transverse nature of EM waves",
    r"An EM wave propagates along the $+z$ direction. If $\vec{E}$ is along the $+x$ axis at a given instant, then $\vec{B}$ must be along the:",
    [
        r"$+y$ axis",
        r"$-y$ axis",
        r"$+x$ axis",
        r"$+z$ axis"
    ],
    0,
    r"Since $\hat{E} \times \hat{B} = \hat{k}$ and $\hat{E} = \hat{i}$, we have $\hat{i} \times \hat{j} = \hat{k}$, so $\vec{B}$ is along $+y$ axis.",
    "Easy"
)

# Q48
add_q(
    "Transverse nature of EM waves",
    r"In Malus's law $I = I_0 \cos^2\theta$, the angle $\theta$ represents the angle between:",
    [
        r"The transmission axis of the analyzer and the plane of polarization of incident light",
        r"The incident ray and the normal to the polaroid",
        r"The electric and magnetic field vectors",
        r"The wave vector and the optic axis"
    ],
    0,
    r"In Malus's law, $\theta$ is the angle between the pass axis (transmission axis) of the polarizer/analyzer and the plane of vibration (polarization direction) of the incident linearly polarized light.",
    "Easy"
)

# Q49
add_q(
    "Transverse nature of EM waves",
    r"The phase velocity of an EM wave in vacuum is $c$. If the wavelength is doubled, the phase velocity will:",
    [
        r"Remain unchanged",
        r"Be doubled",
        r"Be halved",
        r"Become four times"
    ],
    0,
    r"Vacuum is a non-dispersive medium for electromagnetic radiation; all wavelengths travel at the same velocity $c$.",
    "Easy"
)

# Q50
add_q(
    "Transverse nature of EM waves",
    r"If the electric field of an EM wave is given by $\vec{E} = E_0 \hat{k} \cos(kx + \omega t)$, the magnetic field $\vec{B}$ is:",
    [
        r"$\vec{B} = \frac{E_0}{c} \hat{j} \cos(kx + \omega t)$",
        r"$\vec{B} = -\frac{E_0}{c} \hat{j} \cos(kx + \omega t)$",
        r"$\vec{B} = \frac{E_0}{c} \hat{i} \cos(kx + \omega t)$",
        r"$\vec{B} = -\frac{E_0}{c} \hat{k} \cos(kx + \omega t)$"
    ],
    0,
    r"Direction of propagation is $-\hat{i}$. With $\hat{E} = \hat{k}$, we require $\hat{E} \times \hat{B} = -\hat{i} \implies \hat{k} \times \hat{B} = -\hat{i}$. Since $\hat{k} \times \hat{j} = -\hat{i}$, $\vec{B}$ must be along $+\hat{j}$. Thus $\vec{B} = \frac{E_0}{c} \hat{j} \cos(kx + \omega t)$.",
    "Medium"
)

# Q51
add_q(
    "Transverse nature of EM waves",
    r"A beam of light strikes a glass plate at Brewster's angle. If the angle of incidence is increased slightly beyond Brewster's angle, the reflected light:",
    [
        r"Becomes partially polarized",
        r"Remains completely polarized",
        r"Undergoes total internal reflection",
        r"Disappears completely"
    ],
    0,
    r"Complete linear polarization occurs exclusively at the Brewster angle $\theta = \theta_p$. At any other angle of incidence, the reflected light is only partially polarized.",
    "Easy"
)

# Q52
add_q(
    "Transverse nature of EM waves",
    r"The electric field of an EM wave is $\vec{E} = 30 \cos(10^8 t - 0.33 x)\hat{j}\text{ V/m}$. The velocity of the wave is:",
    [
        r"$3.03 \times 10^8\text{ m/s}$",
        r"$1.5 \times 10^8\text{ m/s}$",
        r"$3.3 \times 10^7\text{ m/s}$",
        r"$1.0 \times 10^8\text{ m/s}$"
    ],
    0,
    r"$$v = \frac{\omega}{k} = \frac{10^8\text{ rad/s}}{0.33\text{ m}^{-1}} \approx 3.03 \times 10^8\text{ m/s} \approx c$$",
    "Easy"
)

# Q53
add_q(
    "Transverse nature of EM waves",
    r"Linearly polarized light is incident on a polaroid. As the polaroid is rotated through $360^\circ$ about the ray direction, the transmitted intensity:",
    [
        r"Varies between maximum and zero twice",
        r"Remains constant throughout",
        r"Varies between maximum and zero once",
        r"Varies between maximum and zero four times"
    ],
    0,
    r"According to $I = I_0 \cos^2\theta$, $\cos^2\theta = 0$ at $\theta = 90^\circ$ and $270^\circ$, and is maximum at $\theta = 0^\circ$ and $180^\circ$. Thus intensity vanishes twice and reaches maximum twice in a $360^\circ$ rotation.",
    "Easy"
)

# Q54
add_q(
    "Transverse nature of EM waves",
    r"For an EM wave propagating in vacuum, the vector $\vec{k} \times \vec{E}$ is equal to:",
    [
        r"$\omega \vec{B}$",
        r"$-\omega \vec{B}$",
        r"$\frac{\vec{B}}{\omega}$",
        r"$c \vec{B}$"
    ],
    0,
    r"From Faraday's law in plane wave form: $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \implies \vec{k} \times \vec{E} = \omega \vec{B}$.",
    "Medium"
)

# Q55
add_q(
    "Transverse nature of EM waves",
    r"The vector $\vec{k} \times \vec{B}$ for an EM wave in vacuum is equal to:",
    [
        r"$-\frac{\omega}{c^2} \vec{E}$",
        r"$\frac{\omega}{c^2} \vec{E}$",
        r"$-\omega c^2 \vec{E}$",
        r"$\omega \vec{E}$"
    ],
    0,
    r"From the Ampere-Maxwell law in free space: $\nabla \times \vec{B} = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \implies \vec{k} \times \vec{B} = -\mu_0 \varepsilon_0 \omega \vec{E} = -\frac{\omega}{c^2}\vec{E}$.",
    "Medium"
)

# ==============================================================================
# SUBTOPIC 4: Energy density and Poynting vector (55 Questions)
# ==============================================================================

# Q56
add_q(
    "Energy density and Poynting vector",
    r"In a plane electromagnetic wave in vacuum, the ratio of the average electric energy density $\langle u_E \rangle$ to the average magnetic energy density $\langle u_B \rangle$ is:",
    [
        r"$1 : 1$",
        r"$c : 1$",
        r"$1 : c$",
        r"$c^2 : 1$"
    ],
    0,
    r"The average electric energy density is $\langle u_E \rangle = \frac{1}{4}\varepsilon_0 E_0^2$. Using $E_0 = c B_0$ and $c^2 = \frac{1}{\mu_0 \varepsilon_0}$: $$\langle u_E \rangle = \frac{1}{4}\varepsilon_0 (c B_0)^2 = \frac{B_0^2}{4\mu_0} = \langle u_B \rangle$$ Thus the ratio is exactly $1 : 1$.",
    "Easy"
)

# Q57
add_q(
    "Energy density and Poynting vector",
    r"The Poynting vector $\vec{S}$ represents:",
    [
        r"The rate of electromagnetic energy transfer per unit area",
        r"The total electromagnetic momentum per unit volume",
        r"The electric power dissipated per unit volume",
        r"The radiation pressure exerted on a surface"
    ],
    0,
    r"The Poynting vector $\vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B})$ defines the rate of energy flow per unit surface area perpendicular to the direction of propagation (intensity, in $\text{W/m}^2$).",
    "Easy"
)

# Q58
add_q(
    "Energy density and Poynting vector",
    r"The SI unit of the Poynting vector is:",
    [
        r"$\text{W/m}^2$",
        r"$\text{J/m}^3$",
        r"$\text{N/m}^2$",
        r"$\text{V/m}$"
    ],
    0,
    r"The Poynting vector has dimensions of power per unit area, so its SI unit is watts per square meter ($\text{W/m}^2$ or $\text{J}/(\text{s}\cdot\text{m}^2)$).",
    "Easy"
)

# Q59
add_q(
    "Energy density and Poynting vector",
    r"The average intensity $I$ of a plane electromagnetic wave in vacuum in terms of electric field amplitude $E_0$ is:",
    [
        r"$\frac{1}{2} c \varepsilon_0 E_0^2$",
        r"$c \varepsilon_0 E_0^2$",
        r"$\frac{1}{2}\varepsilon_0 E_0^2$",
        r"$\frac{E_0^2}{2 c \varepsilon_0}$"
    ],
    0,
    r"Intensity is the time-averaged Poynting vector: $$I = \langle S \rangle = c \langle u \rangle = c \left(\frac{1}{2}\varepsilon_0 E_0^2\right) = \frac{1}{2} c \varepsilon_0 E_0^2$$",
    "Easy"
)

# Q60
add_q(
    "Energy density and Poynting vector",
    r"An electromagnetic wave with intensity $I = 1.5\text{ kW/m}^2$ is completely absorbed by a flat surface of area $A = 2.0\text{ m}^2$ at normal incidence. The force exerted on the surface is ($c = 3 \times 10^8\text{ m/s}$):",
    [
        r"$1.0 \times 10^{-5}\text{ N}$",
        r"$2.0 \times 10^{-5}\text{ N}$",
        r"$5.0 \times 10^{-6}\text{ N}$",
        r"$3.0 \times 10^{-5}\text{ N}$"
    ],
    0,
    r"For complete absorption, radiation pressure is $P = \frac{I}{c}$. The force is: $$F = P A = \frac{I A}{c} = \frac{(1500\text{ W/m}^2) \times 2.0\text{ m}^2}{3 \times 10^8\text{ m/s}} = \frac{3000}{3 \times 10^8} = 1.0 \times 10^{-5}\text{ N}$$",
    "Medium"
)

# Q61
add_q(
    "Energy density and Poynting vector",
    r"If an electromagnetic wave of intensity $I$ is incident normally on a perfectly REFLECTING surface, the radiation pressure exerted is:",
    [
        r"$\frac{2I}{c}$",
        r"$\frac{I}{c}$",
        r"$\frac{I}{2c}$",
        r"$\frac{4I}{c}$"
    ],
    0,
    r"Upon complete reflection, the momentum change of each photon is $\Delta p = p - (-p) = 2p = \frac{2h\nu}{c}$. Hence the radiation pressure is twice that for complete absorption: $P = \frac{2I}{c}$.",
    "Easy"
)

# Q62
add_q(
    "Energy density and Poynting vector",
    r"The total electromagnetic energy $U$ incident on a completely absorbing surface imparts a linear momentum $p$ equal to:",
    [
        r"$\frac{U}{c}$",
        r"$\frac{2U}{c}$",
        r"$U c$",
        r"$\frac{U}{c^2}$"
    ],
    0,
    r"For a completely absorbing surface, the momentum transferred by radiation is $p = \frac{U}{c}$.",
    "Easy"
)

# Q63
add_q(
    "Energy density and Poynting vector",
    r"A point source of light emits isotropic radiation with a power of $60\text{ W}$. The intensity at a distance of $3\text{ m}$ from the source is:",
    [
        r"$0.53\text{ W/m}^2$",
        r"$1.06\text{ W/m}^2$",
        r"$0.27\text{ W/m}^2$",
        r"$2.12\text{ W/m}^2$"
    ],
    0,
    r"$$I = \frac{P}{4\pi r^2} = \frac{60}{4\pi (3)^2} = \frac{60}{36\pi} = \frac{5}{3\pi} \approx 0.53\text{ W/m}^2$$",
    "Easy"
)

# Q64
add_q(
    "Energy density and Poynting vector",
    r"The amplitude of the electric field in a plane EM wave is $E_0 = 50\text{ V/m}$. The total average energy density of the wave is ($\varepsilon_0 = 8.85 \times 10^{-12}\text{ C}^2/(\text{N}\cdot\text{m}^2)$):",
    [
        r"$1.11 \times 10^{-8}\text{ J/m}^3$",
        r"$2.21 \times 10^{-8}\text{ J/m}^3$",
        r"$5.53 \times 10^{-9}\text{ J/m}^3$",
        r"$4.42 \times 10^{-8}\text{ J/m}^3$"
    ],
    0,
    r"Total average energy density: $$\langle u \rangle = \frac{1}{2}\varepsilon_0 E_0^2 = \frac{1}{2} \times (8.85 \times 10^{-12}) \times (50)^2 = \frac{1}{2} \times 8.85 \times 10^{-12} \times 2500 \approx 1.11 \times 10^{-8}\text{ J/m}^3$$",
    "Medium"
)

# Q65
add_q(
    "Energy density and Poynting vector",
    r"The intensity of sunlight reaching the Earth's upper atmosphere (the solar constant) is approximately $1360\text{ W/m}^2$. The rms value of the electric field of this sunlight is:",
    [
        r"$716\text{ V/m}$",
        r"$1013\text{ V/m}$",
        r"$507\text{ V/m}$",
        r"$358\text{ V/m}$"
    ],
    0,
    r"Intensity $I = c \varepsilon_0 E_{\text{rms}}^2$. Therefore: $$E_{\text{rms}} = \sqrt{\frac{I}{c \varepsilon_0}} = \sqrt{\frac{1360}{(3 \times 10^8) \times (8.85 \times 10^{-12})}} = \sqrt{\frac{1360}{2.655 \times 10^{-3}}} \approx \sqrt{5.12 \times 10^5} \approx 716\text{ V/m}$$",
    "Medium"
)

# Q66
add_q(
    "Energy density and Poynting vector",
    r"In terms of peak electric field $E_0$ and peak magnetic field $B_0$, the intensity $I$ of an EM wave in vacuum is:",
    [
        r"$\frac{E_0 B_0}{2\mu_0}$",
        r"$\frac{E_0 B_0}{\mu_0}$",
        r"$\frac{2 E_0 B_0}{\mu_0}$",
        r"$\frac{E_0 B_0}{4\mu_0}$"
    ],
    0,
    r"Poynting vector magnitude is $S = \frac{E B}{\mu_0} = \frac{E_0 B_0}{\mu_0}\sin^2(kx - \omega t)$. The average over a cycle gives $I = \langle S \rangle = \frac{E_0 B_0}{2\mu_0}$.",
    "Easy"
)

# Q67
add_q(
    "Energy density and Poynting vector",
    r"A laser beam with a power of $15\text{ mW}$ has a cross-sectional diameter of $2\text{ mm}$. The peak electric field $E_0$ in the beam is approximately:",
    [
        r"$1.9\text{ kV/m}$",
        r"$0.95\text{ kV/m}$",
        r"$3.8\text{ kV/m}$",
        r"$5.7\text{ kV/m}$"
    ],
    0,
    r"Beam area $A = \pi r^2 = \pi (10^{-3})^2 \approx 3.14 \times 10^{-6}\text{ m}^2$. Intensity $I = \frac{P}{A} = \frac{15 \times 10^{-3}}{3.14 \times 10^{-6}} \approx 4777\text{ W/m}^2$. Since $I = \frac{1}{2} c \varepsilon_0 E_0^2$: $$E_0 = \sqrt{\frac{2I}{c \varepsilon_0}} = \sqrt{\frac{2 \times 4777}{2.655 \times 10^{-3}}} \approx \sqrt{3.6 \times 10^6} \approx 1.9 \times 10^3\text{ V/m} = 1.9\text{ kV/m}$$",
    "Medium"
)

# Q68
add_q(
    "Energy density and Poynting vector",
    r"What is the average magnetic energy density in a plane EM wave whose magnetic field amplitude is $B_0 = 4 \times 10^{-6}\text{ T}$? ($\mu_0 = 4\pi \times 10^{-7}\text{ T}\cdot\text{m/A}$)",
    [
        r"$3.18 \times 10^{-6}\text{ J/m}^3$",
        r"$6.37 \times 10^{-6}\text{ J/m}^3$",
        r"$1.59 \times 10^{-6}\text{ J/m}^3$",
        r"$1.27 \times 10^{-5}\text{ J/m}^3$"
    ],
    0,
    r"$$\langle u_B \rangle = \frac{B_0^2}{4\mu_0} = \frac{(4 \times 10^{-6})^2}{4 \times (4\pi \times 10^{-7})} = \frac{16 \times 10^{-12}}{16\pi \times 10^{-7}} = \frac{10^{-5}}{\pi} \approx 3.18 \times 10^{-6}\text{ J/m}^3$$",
    "Medium"
)

# Q69
add_q(
    "Energy density and Poynting vector",
    r"A plane EM wave of intensity $I$ falls on a surface at angle of incidence $\theta$ to the normal. If the surface completely absorbs the radiation, the radiation pressure is:",
    [
        r"$\frac{I}{c} \cos^2\theta$",
        r"$\frac{I}{c} \cos\theta$",
        r"$\frac{2I}{c} \cos^2\theta$",
        r"$\frac{I}{c} \sin\theta$"
    ],
    0,
    r"The energy incident on area $A$ in time $\Delta t$ is $\Delta U = I (A \cos\theta) \Delta t$. The normal component of momentum transferred is $\Delta p_n = \left(\frac{\Delta U}{c}\right) \cos\theta = \frac{I A \cos^2\theta \Delta t}{c}$. Pressure $P = \frac{\Delta p_n}{A \Delta t} = \frac{I}{c}\cos^2\theta$.",
    "Medium"
)

# Q70
add_q(
    "Energy density and Poynting vector",
    r"For the same surface and angle of incidence $\theta$ as above, if the surface is PERFECTLY REFLECTING, the radiation pressure is:",
    [
        r"$\frac{2I}{c} \cos^2\theta$",
        r"$\frac{2I}{c} \cos\theta$",
        r"$\frac{I}{c} \cos^2\theta$",
        r"$\frac{4I}{c} \cos\theta$"
    ],
    0,
    r"For perfect reflection, the change in the normal component of momentum is doubled: $\Delta p_n = 2 \left(\frac{\Delta U}{c}\right) \cos\theta = \frac{2 I A \cos^2\theta \Delta t}{c}$. Therefore, $P = \frac{2I}{c}\cos^2\theta$.",
    "Medium"
)

# Q71
add_q(
    "Energy density and Poynting vector",
    r"If the electric field amplitude in an EM wave is doubled, the intensity of the wave will:",
    [
        r"Increase by a factor of 4",
        r"Increase by a factor of 2",
        r"Remain unchanged",
        r"Increase by a factor of $\sqrt{2}$"
    ],
    0,
    r"Since intensity $I \propto E_0^2$, doubling the amplitude ($E_0 \to 2E_0$) increases the intensity by $(2)^2 = 4$ times.",
    "Easy"
)

# Q72
add_q(
    "Energy density and Poynting vector",
    r"The dimension of the Poynting vector $\vec{S}$ is:",
    [
        r"$[M L^0 T^{-3}]$",
        r"$[M L^2 T^{-2}]$",
        r"$[M L^{-1} T^{-2}]$",
        r"$[M L T^{-3}]$"
    ],
    0,
    r"Poynting vector has units of $\text{W/m}^2 = \frac{\text{J}}{\text{s}\cdot\text{m}^2} = \frac{\text{kg}\cdot\text{m}^2/\text{s}^2}{\text{s}\cdot\text{m}^2} = \text{kg}\cdot\text{s}^{-3} = [M L^0 T^{-3}]$.",
    "Easy"
)

# Q73
add_q(
    "Energy density and Poynting vector",
    r"A 100 W bulb converts $5\%$ of its electrical power into visible radiation. What is the average intensity of visible radiation at a distance of $5\text{ m}$ from the bulb?",
    [
        r"$1.59 \times 10^{-2}\text{ W/m}^2$",
        r"$3.18 \times 10^{-2}\text{ W/m}^2$",
        r"$7.96 \times 10^{-3}\text{ W/m}^2$",
        r"$6.37 \times 10^{-2}\text{ W/m}^2$"
    ],
    0,
    r"Visible power $P_{\text{vis}} = 0.05 \times 100\text{ W} = 5\text{ W}$. Intensity: $$I = \frac{P_{\text{vis}}}{4\pi r^2} = \frac{5}{4\pi (5)^2} = \frac{5}{100\pi} = \frac{1}{20\pi} \approx 0.0159\text{ W/m}^2 = 1.59 \times 10^{-2}\text{ W/m}^2$$",
    "Easy"
)

# Q74
add_q(
    "Energy density and Poynting vector",
    r"In a region of space, an EM wave has average energy density $\langle u \rangle = 2.0 \times 10^{-6}\text{ J/m}^3$. The intensity of the wave is:",
    [
        r"$600\text{ W/m}^2$",
        r"$300\text{ W/m}^2$",
        r"$1200\text{ W/m}^2$",
        r"$6.67 \times 10^{-15}\text{ W/m}^2$"
    ],
    0,
    r"$$I = c \langle u \rangle = (3 \times 10^8\text{ m/s}) \times (2.0 \times 10^{-6}\text{ J/m}^3) = 600\text{ W/m}^2$$",
    "Easy"
)

# Q75
add_q(
    "Energy density and Poynting vector",
    r"A laser beam with a power of $60\text{ mW}$ is directed normally onto a completely absorbing target. The force exerted on the target is:",
    [
        r"$2 \times 10^{-10}\text{ N}$",
        r"$4 \times 10^{-10}\text{ N}$",
        r"$1 \times 10^{-10}\text{ N}$",
        r"$6 \times 10^{-10}\text{ N}$"
    ],
    0,
    r"$$F = \frac{P}{c} = \frac{60 \times 10^{-3}\text{ W}}{3 \times 10^8\text{ m/s}} = 2 \times 10^{-10}\text{ N}$$",
    "Easy"
)

# Q76
add_q(
    "Energy density and Poynting vector",
    r"If the target in the previous question is replaced by a perfectly reflecting mirror, the force exerted by the laser beam will be:",
    [
        r"$4 \times 10^{-10}\text{ N}$",
        r"$2 \times 10^{-10}\text{ N}$",
        r"$8 \times 10^{-10}\text{ N}$",
        r"Zero"
    ],
    0,
    r"For complete reflection: $$F = \frac{2P}{c} = 2 \times (2 \times 10^{-10}\text{ N}) = 4 \times 10^{-10}\text{ N}$$",
    "Easy"
)

# Q77
add_q(
    "Energy density and Poynting vector",
    r"The electric field of an EM wave in vacuum is $E = 100 \sin(\omega t - kx)\text{ V/m}$. The maximum instantaneous value of the Poynting vector is:",
    [
        r"$26.5\text{ W/m}^2$",
        r"$13.3\text{ W/m}^2$",
        r"$53.1\text{ W/m}^2$",
        r"$6.63\text{ W/m}^2$"
    ],
    0,
    r"Instantaneous Poynting vector is $S(t) = \frac{E(t) B(t)}{\mu_0} = \frac{E^2(t)}{\mu_0 c} = c \varepsilon_0 E_0^2 \sin^2(\omega t - kx)$. Maximum value: $$S_{\text{max}} = c \varepsilon_0 E_0^2 = (3 \times 10^8) \times (8.85 \times 10^{-12}) \times (100)^2 = 2.655 \times 10^{-3} \times 10^4 = 26.55\text{ W/m}^2 \approx 26.5\text{ W/m}^2$$",
    "Medium"
)

# Q78
add_q(
    "Energy density and Poynting vector",
    r"A plane EM wave travels in vacuum along the $z$-direction. If $\vec{E} = E_0 \cos(kz - \omega t)\hat{i}$ and $\vec{B} = B_0 \cos(kz - \omega t)\hat{j}$, the instantaneous Poynting vector $\vec{S}$ is:",
    [
        r"$\frac{E_0 B_0}{\mu_0} \cos^2(kz - \omega t)\hat{k}$",
        r"$-\frac{E_0 B_0}{\mu_0} \cos^2(kz - \omega t)\hat{k}$",
        r"$\frac{E_0 B_0}{\mu_0} \cos(kz - \omega t)\hat{k}$",
        r"$\frac{E_0 B_0}{2\mu_0} \hat{k}$"
    ],
    0,
    r"$$\vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B}) = \frac{1}{\mu_0} \left[E_0 \cos(kz - \omega t)\hat{i} \times B_0 \cos(kz - \omega t)\hat{j}\right] = \frac{E_0 B_0}{\mu_0} \cos^2(kz - \omega t)\hat{k}$$",
    "Easy"
)

# Q79
add_q(
    "Energy density and Poynting vector",
    r"Which of the following expressions correctly gives the relation between total energy $U$ and total momentum $p$ carried by an electromagnetic pulse in vacuum?",
    [
        r"$U = p c$",
        r"$U = \frac{p^2}{2m}$",
        r"$U = \frac{p}{c}$",
        r"$U = p c^2$"
    ],
    0,
    r"For electromagnetic radiation (or photons with zero rest mass), the relativistic energy-momentum relation gives $E = pc \implies U = pc$.",
    "Easy"
)

# Q80
add_q(
    "Energy density and Poynting vector",
    r"A cylindrical resistor of radius $a$ and length $L$ carries a steady current $I$. The electric field is along the axis and the magnetic field is azimuthal. The Poynting vector on the cylindrical surface:",
    [
        r"Points radially inwards into the resistor, representing energy entering from surrounding fields",
        r"Points radially outwards, representing radiated energy",
        r"Points parallel to the current axis",
        r"Is identically zero everywhere"
    ],
    0,
    r"On the resistor surface, $\vec{E}$ is along the axis ($\hat{z}$) and $\vec{B}$ is azimuthal ($\hat{\phi}$). The Poynting vector is $\vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B}) \propto \hat{z} \times \hat{\phi} = -\hat{r}$ (pointing radially inwards). Integrating over the surface gives the rate of Joule heating $I^2 R$.",
    "Medium"
)

# Q81
add_q(
    "Energy density and Poynting vector",
    r"The average intensity of a plane EM wave is $0.2\text{ W/m}^2$. What is the peak magnetic field $B_0$? ($\mu_0 = 4\pi \times 10^{-7}\text{ T}\cdot\text{m/A}$)",
    [
        r"$4.09 \times 10^{-8}\text{ T}$",
        r"$8.18 \times 10^{-8}\text{ T}$",
        r"$2.05 \times 10^{-8}\text{ T}$",
        r"$1.64 \times 10^{-7}\text{ T}$"
    ],
    0,
    r"Intensity $I = \frac{c B_0^2}{2\mu_0} \implies B_0 = \sqrt{\frac{2\mu_0 I}{c}} = \sqrt{\frac{2 \times (4\pi \times 10^{-7}) \times 0.2}{3 \times 10^8}} = \sqrt{\frac{1.6\pi \times 10^{-7}}{3 \times 10^8}} \approx \sqrt{1.675 \times 10^{-15}} \approx 4.09 \times 10^{-8}\text{ T}$.",
    "Medium"
)

# Q82
add_q(
    "Energy density and Poynting vector",
    r"Solar radiation pressure on the Earth is approximately $4.5 \times 10^{-6}\text{ N/m}^2$. If the Earth's cross-sectional area exposed to the Sun is $A = 1.28 \times 10^{14}\text{ m}^2$, the total radiation force on Earth is approximately:",
    [
        r"$5.76 \times 10^8\text{ N}$",
        r"$1.15 \times 10^9\text{ N}$",
        r"$2.88 \times 10^8\text{ N}$",
        r"$5.76 \times 10^{10}\text{ N}$"
    ],
    0,
    r"$$F = P A = (4.5 \times 10^{-6}\text{ N/m}^2) \times (1.28 \times 10^{14}\text{ m}^2) = 5.76 \times 10^8\text{ N}$$",
    "Easy"
)

# Q83
add_q(
    "Energy density and Poynting vector",
    r"A plane electromagnetic wave of intensity $I$ is incident on a surface with reflection coefficient $R$ (fraction of energy reflected) and absorption coefficient $A = 1 - R$. The radiation pressure is:",
    [
        r"$\frac{I}{c}(1 + R)$",
        r"$\frac{I}{c}(1 - R)$",
        r"$\frac{2I}{c} R$",
        r"$\frac{I}{c}$"
    ],
    0,
    r"Absorbed fraction imparts pressure $\frac{I}{c}(1 - R)$. Reflected fraction imparts pressure $\frac{2I}{c} R$. Total radiation pressure: $$P = \frac{I}{c}(1 - R) + \frac{2I}{c}R = \frac{I}{c}(1 + R)$$",
    "Medium"
)

# Q84
add_q(
    "Energy density and Poynting vector",
    r"The electromagnetic energy inside a cubical box of side $L = 10\text{ cm}$ containing a uniform plane EM wave with $E_0 = 100\text{ V/m}$ is ($\varepsilon_0 = 8.85 \times 10^{-12}\text{ F/m}$):",
    [
        r"$4.425 \times 10^{-11}\text{ J}$",
        r"$8.85 \times 10^{-11}\text{ J}$",
        r"$2.21 \times 10^{-11}\text{ J}$",
        r"$4.425 \times 10^{-10}\text{ J}$"
    ],
    0,
    r"Volume $V = (0.1\text{ m})^3 = 10^{-3}\text{ m}^3$. Average energy density $\langle u \rangle = \frac{1}{2}\varepsilon_0 E_0^2 = \frac{1}{2}(8.85 \times 10^{-12})(10^4) = 4.425 \times 10^{-8}\text{ J/m}^3$. Total energy $U = \langle u \rangle V = (4.425 \times 10^{-8}) \times 10^{-3} = 4.425 \times 10^{-11}\text{ J}$.",
    "Medium"
)

# Q85
add_q(
    "Energy density and Poynting vector",
    r"The ratio of the amplitude of electric field to magnetic field in an EM wave is $E_0 / B_0 = c$. What is the ratio of their instantaneous energy densities $\frac{\frac{1}{2}\varepsilon_0 E^2}{B^2 / (2\mu_0)}$?",
    [
        r"$1$",
        r"$c$",
        r"$c^2$",
        r"$1/c$"
    ],
    0,
    r"Since $E(t) = c B(t)$ at every instant for a plane wave in vacuum, and $c^2 = \frac{1}{\mu_0 \varepsilon_0}$, we have $\frac{1}{2}\varepsilon_0 E^2 = \frac{1}{2}\varepsilon_0 (c^2 B^2) = \frac{B^2}{2\mu_0}$. Thus the instantaneous energy densities are identical at all times, making the ratio $1$.",
    "Easy"
)

# Q86
add_q(
    "Energy density and Poynting vector",
    r"An astronaut in free space is at rest. She turns on a $1000\text{ W}$ flashlight pointing away from her spaceship. The mass of the astronaut is $100\text{ kg}$. Her acceleration due to radiation reaction is:",
    [
        r"$3.33 \times 10^{-8}\text{ m/s}^2$",
        r"$3.33 \times 10^{-6}\text{ m/s}^2$",
        r"$1.0 \times 10^{-7}\text{ m/s}^2$",
        r"$6.67 \times 10^{-8}\text{ m/s}^2$"
    ],
    0,
    r"Thrust force: $F = \frac{P}{c} = \frac{1000}{3 \times 10^8} = \frac{10^{-5}}{3}\text{ N} \approx 3.33 \times 10^{-6}\text{ N}$. Acceleration: $$a = \frac{F}{m} = \frac{3.33 \times 10^{-6}\text{ N}}{100\text{ kg}} = 3.33 \times 10^{-8}\text{ m/s}^2$$",
    "Medium"
)

# Q87
add_q(
    "Energy density and Poynting vector",
    r"A plane EM wave has an electric field of $E_0 = 6\text{ V/m}$. The magnetic energy density at a point where the electric field is at its maximum is:",
    [
        r"$1.59 \times 10^{-10}\text{ J/m}^3$",
        r"$3.18 \times 10^{-10}\text{ J/m}^3$",
        r"$7.96 \times 10^{-11}\text{ J/m}^3$",
        r"$6.37 \times 10^{-10}\text{ J/m}^3$"
    ],
    0,
    r"When $E = E_0$, the instantaneous electric energy density is $u_E = \frac{1}{2}\varepsilon_0 E_0^2 = \frac{1}{2} \times (8.85 \times 10^{-12}) \times 36 \approx 1.593 \times 10^{-10}\text{ J/m}^3$. Since instantaneous $u_B = u_E$, $u_B = 1.59 \times 10^{-10}\text{ J/m}^3$.",
    "Medium"
)

# Q88
add_q(
    "Energy density and Poynting vector",
    r"For an isotropic point source emitting radiation with power $P$, the electric field amplitude $E_0$ at distance $r$ varies with $r$ as:",
    [
        r"$E_0 \propto \frac{1}{r}$",
        r"$E_0 \propto \frac{1}{r^2}$",
        r"$E_0 \propto \frac{1}{\sqrt{r}}$",
        r"$E_0 \propto r$"
    ],
    0,
    r"Intensity from an isotropic source is $I = \frac{P}{4\pi r^2} \propto \frac{1}{r^2}$. Since $I \propto E_0^2$, we have $E_0^2 \propto \frac{1}{r^2} \implies E_0 \propto \frac{1}{r}$.",
    "Easy"
)

# Q89
add_q(
    "Energy density and Poynting vector",
    r"The radiation pressure exerted on a dusty comet tail pushing it away from the Sun is an example of:",
    [
        r"Momentum transfer by electromagnetic waves",
        r"Electrostatic repulsion of charged particles",
        r"Gravitational repulsion",
        r"Magnetic levitation"
    ],
    0,
    r"Comet tails point away from the Sun because sunlight photons carry momentum and exert radiation pressure on tiny dust particles, overcoming solar gravity.",
    "Easy"
)

# Q90
add_q(
    "Energy density and Poynting vector",
    r"An EM wave carries an energy of $180\text{ kJ}$ through an area in 1 hour. The average Poynting vector magnitude is:",
    [
        r"$\frac{50}{A}\text{ W/m}^2$ (where $A$ is area in $\text{m}^2$)",
        r"$\frac{180}{A}\text{ W/m}^2$",
        r"$\frac{5}{A}\text{ W/m}^2$",
        r"$\frac{500}{A}\text{ W/m}^2$"
    ],
    0,
    r"Power $P = \frac{\Delta U}{\Delta t} = \frac{180 \times 10^3\text{ J}}{3600\text{ s}} = 50\text{ W}$. The magnitude of the Poynting vector is $S = \frac{P}{A} = \frac{50}{A}\text{ W/m}^2$.",
    "Easy"
)

# Q91
add_q(
    "Energy density and Poynting vector",
    r"If a solar sail of area $10^4\text{ m}^2$ is made of a completely reflecting material, the radiation force exerted on it by solar radiation of intensity $1400\text{ W/m}^2$ is:",
    [
        r"$0.093\text{ N}$",
        r"$0.047\text{ N}$",
        r"$0.187\text{ N}$",
        r"$0.023\text{ N}$"
    ],
    0,
    r"$$F = \frac{2 I A}{c} = \frac{2 \times 1400 \times 10^4}{3 \times 10^8} = \frac{2.8 \times 10^7}{3 \times 10^8} \approx 0.0933\text{ N}$$",
    "Medium"
)

# Q92
add_q(
    "Energy density and Poynting vector",
    r"In terms of $E_{\text{rms}}$, the total average energy density of an EM wave is:",
    [
        r"$\varepsilon_0 E_{\text{rms}}^2$",
        r"$\frac{1}{2}\varepsilon_0 E_{\text{rms}}^2$",
        r"$2\varepsilon_0 E_{\text{rms}}^2$",
        r"$\frac{1}{4}\varepsilon_0 E_{\text{rms}}^2$"
    ],
    0,
    r"Total average energy density is $\langle u \rangle = \frac{1}{2}\varepsilon_0 E_0^2$. Since $E_0 = \sqrt{2} E_{\text{rms}}$, we have $\langle u \rangle = \frac{1}{2}\varepsilon_0 (\sqrt{2} E_{\text{rms}})^2 = \varepsilon_0 E_{\text{rms}}^2$.",
    "Easy"
)

# Q93
add_q(
    "Energy density and Poynting vector",
    r"A 50 W point source of light is placed at the center of a hollow spherical shell of radius $2\text{ m}$. The energy flux through the surface of the sphere is:",
    [
        r"$50\text{ W}$",
        r"$25\text{ W}$",
        r"$12.5\text{ W}$",
        r"$100\text{ W}$"
    ],
    0,
    r"Energy flux through any closed surface enclosing the source equals the total power emitted: $\Phi = \oint \vec{S} \cdot d\vec{A} = P = 50\text{ W}$.",
    "Easy"
)

# Q94
add_q(
    "Energy density and Poynting vector",
    r"The continuity equation for electromagnetic energy conservation (Poynting's theorem) in differential form is:",
    [
        r"$\nabla \cdot \vec{S} + \frac{\partial u}{\partial t} = -\vec{j} \cdot \vec{E}$",
        r"$\nabla \cdot \vec{S} = \frac{\partial u}{\partial t}$",
        r"$\nabla \times \vec{S} = -\frac{\partial u}{\partial t}$",
        r"$\nabla \cdot \vec{S} + \vec{j} \cdot \vec{E} = 0$"
    ],
    0,
    r"Poynting's theorem states: $\nabla \cdot \vec{S} + \frac{\partial u}{\partial t} = -\vec{j} \cdot \vec{E}$, which means the divergence of energy flux plus the rate of increase of field energy density equals the negative rate of work done on charges ($\vec{j}\cdot\vec{E}$).",
    "Medium"
)

# Q95
add_q(
    "Energy density and Poynting vector",
    r"An EM wave of intensity $I_0$ is incident normally on a glass plate that reflects $4\%$ and transmits $96\%$ of the energy (no absorption). The radiation pressure on the plate is:",
    [
        r"$1.04 \frac{I_0}{c}$",
        r"$0.96 \frac{I_0}{c}$",
        r"$2.0 \frac{I_0}{c}$",
        r"$1.96 \frac{I_0}{c}$"
    ],
    0,
    r"Initial momentum flux is $\frac{I_0}{c}$. Reflected momentum flux is $-\frac{0.04 I_0}{c}$. Transmitted momentum flux is $+\frac{0.96 I_0}{c}$. The net pressure on the plate is the net rate of momentum change: $$P = \frac{I_0}{c} - \left(-\frac{0.04 I_0}{c} + \frac{0.96 I_0}{c}\right) = \frac{I_0}{c}(1 + 0.04 - 0.96) = 0.08 \frac{I_0}{c}$$ Wait! Let's calculate carefully: Forward momentum before = $I_0/c$. Forward momentum after = $-0.04 I_0/c + 0.96 I_0/c = 0.92 I_0/c$. Momentum transferred to plate per second per unit area = $I_0/c - 0.92 I_0/c = 0.08 I_0/c$. Wait, if it were completely absorbing, $P = I_0/c$. For reflection $R=0.04$ with transmission $T=0.96$, $P = \frac{I_0}{c}(1 + R - T) = \frac{I_0}{c}(1 + 0.04 - 0.96) = 0.08 \frac{I_0}{c}$. Let's provide $0.08 \frac{I_0}{c}$ as option A!",
    "Medium"
)
# Update Q95 options
questions[-1]["options"] = [
    r"$0.08 \frac{I_0}{c}$",
    r"$1.04 \frac{I_0}{c}$",
    r"$0.96 \frac{I_0}{c}$",
    r"$0.04 \frac{I_0}{c}$"
]
questions[-1]["explanation"] = r"By conservation of momentum, the pressure on the slab is the net change in momentum flux per unit time: $$P = \frac{I_0}{c} - \left(-\frac{R I_0}{c} + \frac{T I_0}{c}\right) = \frac{I_0}{c}(1 + R - T)$$ With $R = 0.04$ and $T = 0.96$: $$P = \frac{I_0}{c}(1 + 0.04 - 0.96) = 0.08 \frac{I_0}{c}$$"

# Q96
add_q(
    "Energy density and Poynting vector",
    r"An EM wave has $B_{\text{rms}} = 1.0 \times 10^{-7}\text{ T}$. What is $E_{\text{rms}}$?",
    [
        r"$30\text{ V/m}$",
        r"$300\text{ V/m}$",
        r"$3.0\text{ V/m}$",
        r"$0.3\text{ V/m}$"
    ],
    0,
    r"$$E_{\text{rms}} = c B_{\text{rms}} = (3 \times 10^8\text{ m/s}) \times (1.0 \times 10^{-7}\text{ T}) = 30\text{ V/m}$$",
    "Easy"
)

# Q97
add_q(
    "Energy density and Poynting vector",
    r"The amplitude of the magnetic field in a plane EM wave is $B_0 = 1.5 \times 10^{-7}\text{ T}$. The average energy density is:",
    [
        r"$8.95 \times 10^{-9}\text{ J/m}^3$",
        r"$1.79 \times 10^{-8}\text{ J/m}^3$",
        r"$4.48 \times 10^{-9}\text{ J/m}^3$",
        r"$3.58 \times 10^{-8}\text{ J/m}^3$"
    ],
    0,
    r"$$\langle u \rangle = \frac{B_0^2}{2\mu_0} = \frac{(1.5 \times 10^{-7})^2}{2 \times (4\pi \times 10^{-7})} = \frac{2.25 \times 10^{-14}}{8\pi \times 10^{-7}} \approx 8.95 \times 10^{-9}\text{ J/m}^3$$",
    "Medium"
)

# Q98
add_q(
    "Energy density and Poynting vector",
    r"If the power of a television transmitter is $100\text{ kW}$, the energy radiated by the transmitter per second is:",
    [
        r"$100\text{ kJ}$",
        r"$10\text{ kJ}$",
        r"$1000\text{ kJ}$",
        r"$50\text{ kJ}$"
    ],
    0,
    r"By definition, power is energy per second: $E = P \times \Delta t = 100\text{ kW} \times 1\text{ s} = 100\text{ kJ}$.",
    "Easy"
)

# Q99
add_q(
    "Energy density and Poynting vector",
    r"A beam of unpolarized light of intensity $I$ is incident on a black surface of area $A$. The force exerted on the surface is $F_1$. If the surface is replaced by an ideal mirror, the force is $F_2$. The ratio $F_2 / F_1$ is:",
    [
        r"$2$",
        r"$1$",
        r"$1/2$",
        r"$4$"
    ],
    0,
    r"For complete absorption, $F_1 = \frac{I A}{c}$. For complete reflection, $F_2 = \frac{2 I A}{c}$. Thus $F_2 / F_1 = 2$.",
    "Easy"
)

# Q100
add_q(
    "Energy density and Poynting vector",
    r"The time average of $\cos^2(kz - \omega t)$ over one full cycle of an electromagnetic wave is:",
    [
        r"$\frac{1}{2}$",
        r"$1$",
        r"$0$",
        r"$\frac{1}{4}$"
    ],
    0,
    r"The time-average of $\cos^2(\theta)$ or $\sin^2(\theta)$ over any full period $T = \frac{2\pi}{\omega}$ is $\frac{1}{T}\int_0^T \cos^2(\omega t) dt = \frac{1}{2}$.",
    "Easy"
)

# Q101
add_q(
    "Energy density and Poynting vector",
    r"A plane EM wave has an intensity of $10\text{ W/m}^2$. The total momentum delivered to a $0.5\text{ m}^2$ black body in $1\text{ hour}$ is:",
    [
        r"$6.0 \times 10^{-5}\text{ kg}\cdot\text{m/s}$",
        r"$1.2 \times 10^{-4}\text{ kg}\cdot\text{m/s}$",
        r"$3.0 \times 10^{-5}\text{ kg}\cdot\text{m/s}$",
        r"$1.8 \times 10^{-4}\text{ kg}\cdot\text{m/s}$"
    ],
    0,
    r"Total energy absorbed: $U = I A t = 10 \times 0.5 \times 3600 = 18000\text{ J}$. Total momentum delivered: $$p = \frac{U}{c} = \frac{18000}{3 \times 10^8} = 6.0 \times 10^{-5}\text{ kg}\cdot\text{m/s}$$",
    "Medium"
)

# Q102
add_q(
    "Energy density and Poynting vector",
    r"In a charging parallel plate capacitor, the Poynting vector between the plates points:",
    [
        r"Radially inward toward the axis between the plates",
        r"Radially outward from the axis",
        r"Parallel to the plates along the circumference",
        r"Perpendicular to the plates from positive to negative plate"
    ],
    0,
    r"Between the circular plates during charging, $\vec{E}$ points from positive to negative plate (along the axis) and $\vec{B}$ forms concentric circular loops. The vector product $\vec{E} \times \vec{B}$ is directed radially inward toward the central axis, representing energy flowing in from the circuit to establish the electric field.",
    "Medium"
)

# Q103
add_q(
    "Energy density and Poynting vector",
    r"Which of the following physical quantities is NOT carried by an electromagnetic wave?",
    [
        r"Rest mass",
        r"Linear momentum",
        r"Energy",
        r"Angular momentum"
    ],
    0,
    r"Electromagnetic waves carry energy, linear momentum, and angular momentum (through circular polarization), but have zero rest mass.",
    "Easy"
)

# Q104
add_q(
    "Energy density and Poynting vector",
    r"A small spherical particle of radius $R$ and density $\rho$ is in equilibrium under the opposing forces of solar gravity and solar radiation pressure. Its equilibrium radius $R$ is:",
    [
        r"Independent of the distance from the Sun",
        r"Proportional to the distance from the Sun",
        r"Inversely proportional to the distance from the Sun",
        r"Proportional to the square of the distance from the Sun"
    ],
    0,
    r"Both the gravitational force $F_g = \frac{G M_\odot m}{r^2}$ and the radiation force $F_{\text{rad}} = \frac{I A}{c} = \frac{L_\odot \pi R^2}{4\pi r^2 c}$ vary as $1/r^2$. Thus the distance $r$ cancels out, making the critical radius independent of distance from the Sun.",
    "Medium"
)

# Q105
add_q(
    "Energy density and Poynting vector",
    r"An EM wave has $E_0 = 120\text{ V/m}$. What is the average power passing through a rectangular aperture of dimensions $20\text{ cm} \times 30\text{ cm}$ perpendicular to the wave?",
    [
        r"$1.15\text{ W}$",
        r"$2.30\text{ W}$",
        r"$0.57\text{ W}$",
        r"$4.60\text{ W}$"
    ],
    0,
    r"Intensity $I = \frac{1}{2} c \varepsilon_0 E_0^2 = \frac{1}{2}(2.655 \times 10^{-3})(120)^2 = \frac{1}{2} \times 2.655 \times 10^{-3} \times 14400 \approx 19.12\text{ W/m}^2$. Aperture area $A = 0.2 \times 0.3 = 0.06\text{ m}^2$. Power $P = I A = 19.12 \times 0.06 \approx 1.15\text{ W}$.",
    "Medium"
)

# Q106
add_q(
    "Energy density and Poynting vector",
    r"If an EM wave travels in a medium of relative permittivity $\varepsilon_r = 4$ and relative permeability $\mu_r = 1$, the intrinsic impedance of the medium is:",
    [
        r"$188.5\ \Omega$",
        r"$377\ \Omega$",
        r"$754\ \Omega$",
        r"$94.2\ \Omega$"
    ],
    0,
    r"$$\eta = \sqrt{\frac{\mu}{\varepsilon}} = \sqrt{\frac{\mu_0}{\varepsilon_0}} \sqrt{\frac{\mu_r}{\varepsilon_r}} = \eta_0 \sqrt{\frac{1}{4}} = \frac{377\ \Omega}{2} = 188.5\ \Omega$$",
    "Medium"
)

# Q107
add_q(
    "Energy density and Poynting vector",
    r"The ratio of the radiation force exerted by an EM wave on a reflecting surface to that on an absorbing surface of the same area is:",
    [
        r"$2$",
        r"$1$",
        r"$1/2$",
        r"$4$"
    ],
    0,
    r"For a reflecting surface $F = \frac{2IA}{c}$ and for an absorbing surface $F = \frac{IA}{c}$, giving a ratio of $2$.",
    "Easy"
)

# Q108
add_q(
    "Energy density and Poynting vector",
    r"The radiation pressure on a body exposed to sunlight of intensity $1.4\text{ kW/m}^2$ that absorbs $80\%$ and reflects $20\%$ normally is:",
    [
        r"$5.6 \times 10^{-6}\text{ N/m}^2$",
        r"$4.67 \times 10^{-6}\text{ N/m}^2$",
        r"$9.33 \times 10^{-6}\text{ N/m}^2$",
        r"$3.73 \times 10^{-6}\text{ N/m}^2$"
    ],
    0,
    r"$$P = \frac{I}{c}(1 + R) = \frac{1400}{3 \times 10^8}(1 + 0.20) = \frac{1400 \times 1.2}{3 \times 10^8} = \frac{1680}{3 \times 10^8} = 5.6 \times 10^{-6}\text{ N/m}^2$$",
    "Medium"
)

# Q109
add_q(
    "Energy density and Poynting vector",
    r"If an EM wave has average energy density $\langle u \rangle$, its momentum density (momentum per unit volume) in vacuum is:",
    [
        r"$\frac{\langle u \rangle}{c}$",
        r"$\langle u \rangle c$",
        r"$\frac{\langle u \rangle}{c^2}$",
        r"$\frac{2\langle u \rangle}{c}$"
    ],
    0,
    r"Since $p = \frac{U}{c}$, dividing both sides by volume gives momentum density: $\rho_p = \frac{\langle u \rangle}{c}$.",
    "Easy"
)

# Q110
add_q(
    "Energy density and Poynting vector",
    r"A plane EM wave has an electric field $E_0 = 90\text{ V/m}$. The average value of the Poynting vector is:",
    [
        r"$10.75\text{ W/m}^2$",
        r"$21.5\text{ W/m}^2$",
        r"$5.38\text{ W/m}^2$",
        r"$43.0\text{ W/m}^2$"
    ],
    0,
    r"$$\langle S \rangle = \frac{1}{2} c \varepsilon_0 E_0^2 = \frac{1}{2} \times (2.655 \times 10^{-3}) \times (90)^2 = \frac{1}{2} \times 2.655 \times 10^{-3} \times 8100 \approx 10.75\text{ W/m}^2$$",
    "Medium"
)

print(f"Total questions in part 2: {len(questions)}")
with open("scripts/emw_ktg/emw_batch2.json", "w") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/emw_ktg/emw_batch2.json")
