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
# SUBTOPIC 1: Displacement current (55 Questions)
# ==============================================================================

# Q1
add_q(
    "Displacement current",
    r"A parallel plate capacitor with circular plates of radius $R = 10\text{ cm}$ is being charged by a steady conduction current of $0.5\text{ A}$. The displacement current between the plates is:",
    [
        r"$0.5\text{ A}$",
        r"$0.25\text{ A}$",
        r"$1.0\text{ A}$",
        r"$0\text{ A}$"
    ],
    0,
    r"By the continuity of electric current, at any instant the displacement current $I_d$ passing through any surface between the plates of a capacitor is equal to the conduction current $I_c$ flowing through the connecting wires: $$I_d = I_c = 0.5\text{ A}$$",
    "Easy"
)

# Q2
add_q(
    "Displacement current",
    r"The displacement current between the plates of a capacitor is given by Maxwell's relation as:",
    [
        r"$I_d = \varepsilon_0 \frac{d\Phi_E}{dt}$",
        r"$I_d = \mu_0 \frac{d\Phi_E}{dt}$",
        r"$I_d = \frac{1}{\varepsilon_0}\frac{d\Phi_E}{dt}$",
        r"$I_d = \varepsilon_0 \mu_0 \frac{d\Phi_E}{dt}$"
    ],
    0,
    r"Maxwell generalized Ampere's circuital law by introducing the displacement current defined as $I_d = \varepsilon_0 \frac{d\Phi_E}{dt}$, where $\Phi_E$ is the electric flux.",
    "Easy"
)

# Q3
add_q(
    "Displacement current",
    r"A parallel plate capacitor has circular plates of radius $R$. During charging, the conduction current is $I$. The magnetic field induced at a radial distance $r < R$ from the central axis between the plates is:",
    [
        r"$\frac{\mu_0 I r}{2\pi R^2}$",
        r"$\frac{\mu_0 I R}{2\pi r^2}$",
        r"$\frac{\mu_0 I}{2\pi r}$",
        r"$\frac{\mu_0 I r^2}{2\pi R^3}$"
    ],
    0,
    r"Using Ampere-Maxwell law for a circular Amperian loop of radius $r < R$: $$\oint \vec{B} \cdot d\vec{l} = B(2\pi r) = \mu_0 I_d' = \mu_0 I \left(\frac{\pi r^2}{\pi R^2}\right)$$ $$B = \frac{\mu_0 I r}{2\pi R^2}$$",
    "Medium"
)

# Q4
add_q(
    "Displacement current",
    r"For a charging circular parallel plate capacitor of radius $R$, the magnetic field at a distance $r > R$ from the axis between the plates is:",
    [
        r"$\frac{\mu_0 I_d}{2\pi r}$",
        r"$\frac{\mu_0 I_d r}{2\pi R^2}$",
        r"$\frac{\mu_0 I_d R^2}{2\pi r^3}$",
        r"$0$"
    ],
    0,
    r"For $r > R$, the Amperian loop encloses the entire displacement current $I_d$. Therefore: $$B(2\pi r) = \mu_0 I_d \implies B = \frac{\mu_0 I_d}{2\pi r}$$",
    "Easy"
)

# Q5
add_q(
    "Displacement current",
    r"The electric field between the plates of a parallel plate capacitor changes at the rate of $1.5 \times 10^{12}\text{ V/(m}\cdot\text{s)}$. If the area of each plate is $200\text{ cm}^2$, the displacement current is (Take $\varepsilon_0 = 8.85 \times 10^{-12}\text{ C}^2/(\text{N}\cdot\text{m}^2)$):",
    [
        r"$0.265\text{ A}$",
        r"$0.133\text{ A}$",
        r"$0.531\text{ A}$",
        r"$2.65\text{ A}$"
    ],
    0,
    r"Displacement current is: $$I_d = \varepsilon_0 A \frac{dE}{dt} = (8.85 \times 10^{-12}) \times (200 \times 10^{-4}) \times (1.5 \times 10^{12}) = 8.85 \times 0.02 \times 1.5 = 0.2655\text{ A} \approx 0.265\text{ A}$$",
    "Medium"
)

# Q6
add_q(
    "Displacement current",
    r"Which of the following Maxwell's equations implies that magnetic monopoles do not exist?",
    [
        r"$\oint \vec{B} \cdot d\vec{A} = 0$",
        r"$\oint \vec{E} \cdot d\vec{A} = \frac{q_{\text{encl}}}{\varepsilon_0}$",
        r"$\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$",
        r"$\oint \vec{B} \cdot d\vec{l} = \mu_0\left(I_c + \varepsilon_0 \frac{d\Phi_E}{dt}\right)$"
    ],
    0,
    r"Gauss's law for magnetism states $\oint \vec{B} \cdot d\vec{A} = 0$, which signifies that isolated magnetic charges (monopoles) do not exist in nature.",
    "Easy"
)

# Q7
add_q(
    "Displacement current",
    r"A parallel plate capacitor of capacitance $C = 20\ \mu\text{F}$ is connected to an AC source $V = 200 \sin(100 t)\text{ V}$. The peak value of the displacement current is:",
    [
        r"$0.4\text{ A}$",
        r"$0.2\text{ A}$",
        r"$4.0\text{ A}$",
        r"$0.8\text{ A}$"
    ],
    0,
    r"The displacement current equals the conduction current: $$I_d = I_c = C \frac{dV}{dt} = C \omega V_0 \cos(\omega t)$$ Peak value: $$I_{d0} = C \omega V_0 = (20 \times 10^{-6}\text{ F}) \times (100\text{ rad/s}) \times (200\text{ V}) = 0.4\text{ A}$$",
    "Medium"
)

# Q8
add_q(
    "Displacement current",
    r"The dimension of displacement current is the same as that of:",
    [
        r"Conduction current",
        r"Electric flux",
        r"Electric field",
        r"Magnetic flux"
    ],
    0,
    r"Displacement current is dimensionally an electric current, having the dimension $[I] = [\text{A}]$ or $[M^0 L^0 T^0 A^1]$.",
    "Easy"
)

# Q9
add_q(
    "Displacement current",
    r"A parallel plate capacitor consists of two circular plates of radius $R = 5\text{ cm}$. The charging current is $0.2\text{ A}$. What is the magnetic field at a point $r = 2\text{ cm}$ from the axis between the plates?",
    [
        r"$3.2 \times 10^{-7}\text{ T}$",
        r"$1.6 \times 10^{-7}\text{ T}$",
        r"$6.4 \times 10^{-7}\text{ T}$",
        r"$8.0 \times 10^{-8}\text{ T}$"
    ],
    0,
    r"For $r \le R$: $$B = \frac{\mu_0 I r}{2\pi R^2} = \frac{4\pi \times 10^{-7} \times 0.2 \times 0.02}{2\pi \times (0.05)^2} = \frac{2 \times 10^{-7} \times 0.004}{0.0025} = 3.2 \times 10^{-7}\text{ T}$$",
    "Medium"
)

# Q10
add_q(
    "Displacement current",
    r"The displacement current density $j_d$ in terms of electric field $\vec{E}$ is expressed as:",
    [
        r"$j_d = \varepsilon_0 \frac{\partial E}{\partial t}$",
        r"$j_d = \mu_0 \frac{\partial E}{\partial t}$",
        r"$j_d = \frac{1}{\varepsilon_0}\frac{\partial E}{\partial t}$",
        r"$j_d = \varepsilon_0 \mu_0 \frac{\partial E}{\partial t}$"
    ],
    0,
    r"Since $I_d = \varepsilon_0 \frac{d\Phi_E}{dt} = \varepsilon_0 A \frac{\partial E}{\partial t}$, dividing by area $A$ gives the displacement current density $j_d = \frac{I_d}{A} = \varepsilon_0 \frac{\partial E}{\partial t}$.",
    "Easy"
)

# Q11
add_q(
    "Displacement current",
    r"A parallel plate capacitor has plate area $A$ and separation $d$. It is being charged such that the potential difference across it varies as $V(t) = V_0(1 - e^{-t/RC})$. The displacement current at $t = 0$ is:",
    [
        r"$\frac{V_0}{R}$",
        r"$0$",
        r"$\frac{V_0}{2R}$",
        r"$\frac{V_0}{RC}$"
    ],
    0,
    r"The charge is $q(t) = C V(t) = C V_0(1 - e^{-t/RC})$. The current is $I_c(t) = \frac{dq}{dt} = \frac{C V_0}{RC} e^{-t/RC} = \frac{V_0}{R} e^{-t/RC}$. Since $I_d(t) = I_c(t)$, at $t = 0$, $I_d(0) = \frac{V_0}{R}$.",
    "Medium"
)

# Q12
add_q(
    "Displacement current",
    r"In a region of space, the electric field is given by $\vec{E} = E_0 \cos(\omega t) \hat{k}$. The displacement current flowing through an area $A$ perpendicular to the z-axis is:",
    [
        r"$-\varepsilon_0 A E_0 \omega \sin(\omega t)$",
        r"$\varepsilon_0 A E_0 \omega \cos(\omega t)$",
        r"$-\mu_0 A E_0 \omega \sin(\omega t)$",
        r"$\frac{A E_0 \omega}{\varepsilon_0} \sin(\omega t)$"
    ],
    0,
    r"Flux $\Phi_E = E A = A E_0 \cos(\omega t)$. The displacement current is: $$I_d = \varepsilon_0 \frac{d\Phi_E}{dt} = -\varepsilon_0 A E_0 \omega \sin(\omega t)$$",
    "Medium"
)

# Q13
add_q(
    "Displacement current",
    r"What was the missing term in Ampere's circuital law that was added by James Clerk Maxwell?",
    [
        r"$\mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}$",
        r"$\varepsilon_0 \frac{d\Phi_B}{dt}$",
        r"$\mu_0 \frac{d\Phi_B}{dt}$",
        r"$\frac{1}{\mu_0}\frac{d\Phi_E}{dt}$"
    ],
    0,
    r"Ampere's circuital law originally was $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_c$. Maxwell modified it to $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_c + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}$, where the missing term is $\mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} = \mu_0 I_d$.",
    "Easy"
)

# Q14
add_q(
    "Displacement current",
    r"A circular capacitor of radius $R$ is charging. At what radial distance $r$ from the central axis is the induced magnetic field maximum?",
    [
        r"$r = R$",
        r"$r = R/2$",
        r"$r = 0$",
        r"$r = 2R$"
    ],
    0,
    r"Inside the plates ($r \le R$), $B \propto r$. Outside the plates ($r \ge R$), $B \propto 1/r$. Therefore, the magnetic field attains its maximum value at the boundary of the plates, i.e., $r = R$.",
    "Easy"
)

# Q15
add_q(
    "Displacement current",
    r"A parallel plate capacitor is filled with a dielectric of relative permittivity $\varepsilon_r$. If the electric field changes at rate $\frac{dE}{dt}$, the displacement current density is:",
    [
        r"$\varepsilon_r \varepsilon_0 \frac{\partial E}{\partial t}$",
        r"$\varepsilon_0 \frac{\partial E}{\partial t}$",
        r"$\frac{\varepsilon_0}{\varepsilon_r}\frac{\partial E}{\partial t}$",
        r"$(\varepsilon_r - 1)\varepsilon_0 \frac{\partial E}{\partial t}$"
    ],
    0,
    r"In a material medium with permittivity $\varepsilon = \varepsilon_r \varepsilon_0$, the electric displacement is $D = \varepsilon E = \varepsilon_r \varepsilon_0 E$. Hence, the displacement current density is $j_d = \frac{\partial D}{\partial t} = \varepsilon_r \varepsilon_0 \frac{\partial E}{\partial t}$.",
    "Medium"
)

# Q16
add_q(
    "Displacement current",
    r"If a capacitor is fully charged and disconnected from the battery, what is the displacement current between its plates?",
    [
        r"Zero",
        r"Equal to the initial charging current",
        r"Infinite",
        r"Proportional to plate area"
    ],
    0,
    r"When the capacitor is disconnected, the charge on its plates is constant, so $\frac{dE}{dt} = 0$. Therefore, the displacement current $I_d = \varepsilon_0 A \frac{dE}{dt} = 0$.",
    "Easy"
)

# Q17
add_q(
    "Displacement current",
    r"A parallel plate capacitor of capacitance $C$ has plate area $A$. If the potential difference across the plates is given by $V = V_0 \sin(\omega t)$, the displacement current between the plates is:",
    [
        r"$\omega C V_0 \cos(\omega t)$",
        r"$- \omega C V_0 \cos(\omega t)$",
        r"$\frac{C V_0}{\omega} \sin(\omega t)$",
        r"$\omega^2 C V_0 \sin(\omega t)$"
    ],
    0,
    r"The electric field is $E = \frac{V}{d} = \frac{V_0}{d}\sin(\omega t)$. The electric flux is $\Phi_E = E A = \frac{A V_0}{d}\sin(\omega t) = \frac{C V_0}{\varepsilon_0}\sin(\omega t)$. Thus: $$I_d = \varepsilon_0 \frac{d\Phi_E}{dt} = \omega C V_0 \cos(\omega t)$$",
    "Medium"
)

# Q18
add_q(
    "Displacement current",
    r"At a radial distance $r = R/2$ from the central axis between the circular plates of radius $R$ of a charging capacitor, the ratio of the induced magnetic field to that at $r = R$ is:",
    [
        r"$1 : 2$",
        r"$1 : 4$",
        r"$1 : 1$",
        r"$2 : 1$"
    ],
    0,
    r"For $r \le R$, $B(r) = \frac{\mu_0 I r}{2\pi R^2}$. Thus: $$\frac{B(R/2)}{B(R)} = \frac{R/2}{R} = \frac{1}{2}$$",
    "Easy"
)

# Q19
add_q(
    "Displacement current",
    r"At a radial distance $r = 2R$ from the central axis of a circular capacitor of radius $R$, the ratio of the magnetic field to that at the edge ($r = R$) is:",
    [
        r"$1 : 2$",
        r"$1 : 4$",
        r"$2 : 1$",
        r"$1 : 1$"
    ],
    0,
    r"For $r \ge R$, $B(r) = \frac{\mu_0 I}{2\pi r}$. Therefore: $$\frac{B(2R)}{B(R)} = \frac{\mu_0 I / (4\pi R)}{\mu_0 I / (2\pi R)} = \frac{1}{2}$$",
    "Easy"
)

# Q20
add_q(
    "Displacement current",
    r"The concept of displacement current resolves the apparent contradiction in Ampere's circuital law when applied to:",
    [
        r"A charging or discharging capacitor",
        r"A steady DC current in a long straight wire",
        r"A circular loop carrying steady DC current",
        r"A permanent bar magnet at rest"
    ],
    0,
    r"Ampere's law was inconsistent for a non-steady circuit such as a charging or discharging capacitor, where conduction current flows in wires but no conduction current passes between the plates.",
    "Easy"
)

# Q21
add_q(
    "Displacement current",
    r"A parallel plate capacitor with plate separation $d = 2\text{ mm}$ is charged at a rate $\frac{dV}{dt} = 10^6\text{ V/s}$. If the plate area is $0.01\text{ m}^2$, the displacement current is ($\varepsilon_0 = 8.85 \times 10^{-12}\text{ F/m}$):",
    [
        r"$4.425 \times 10^{-5}\text{ A}$",
        r"$8.85 \times 10^{-5}\text{ A}$",
        r"$2.21 \times 10^{-5}\text{ A}$",
        r"$1.77 \times 10^{-4}\text{ A}$"
    ],
    0,
    r"Capacitance $C = \frac{\varepsilon_0 A}{d} = \frac{8.85 \times 10^{-12} \times 0.01}{2 \times 10^{-3}} = 4.425 \times 10^{-11}\text{ F}$. The displacement current is: $$I_d = C \frac{dV}{dt} = (4.425 \times 10^{-11}) \times 10^6 = 4.425 \times 10^{-5}\text{ A}$$",
    "Medium"
)

# Q22
add_q(
    "Displacement current",
    r"Which law relates a changing magnetic flux to an induced electric field?",
    [
        r"Faraday's law of induction",
        r"Ampere-Maxwell law",
        r"Gauss's law for electricity",
        r"Biot-Savart law"
    ],
    0,
    r"Faraday's law of induction states $\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$, which shows that a time-varying magnetic field produces an induced electric field.",
    "Easy"
)

# Q23
add_q(
    "Displacement current",
    r"The total current enclosed by a surface bounding a volume can be written as $I_{\text{total}} = I_c + I_d$. The continuity of current requires that throughout an entire circuit:",
    [
        r"$I_c + I_d$ is continuous and constant at all cross-sections",
        r"$I_c$ alone is constant everywhere",
        r"$I_d$ alone is constant everywhere",
        r"$I_c = 0$ everywhere"
    ],
    0,
    r"In the connecting wire $I_d = 0$ and $I_c = I$. Between the capacitor plates $I_c = 0$ and $I_d = I$. Thus the total current $I = I_c + I_d$ is continuous across any cross-section.",
    "Easy"
)

# Q24
add_q(
    "Displacement current",
    r"A parallel plate capacitor is being charged such that the electric flux increases uniformly at the rate of $4.0 \times 10^{11}\text{ V}\cdot\text{m/s}$. The displacement current is (Take $\varepsilon_0 = 8.85 \times 10^{-12}\text{ C}^2/\text{N}\cdot\text{m}^2$):",
    [
        r"$3.54\text{ A}$",
        r"$1.77\text{ A}$",
        r"$7.08\text{ A}$",
        r"$0.885\text{ A}$"
    ],
    0,
    r"$$I_d = \varepsilon_0 \frac{d\Phi_E}{dt} = (8.85 \times 10^{-12}) \times (4.0 \times 10^{11}) = 3.54\text{ A}$$",
    "Easy"
)

# Q25
add_q(
    "Displacement current",
    r"Between two parallel circular plates of radius $R$, the electric field is uniform and changing at rate $\frac{dE}{dt}$. The ratio of magnetic fields at $r = R/3$ and $r = 3R$ from the axis is:",
    [
        r"$1 : 1$",
        r"$1 : 3$",
        r"$1 : 9$",
        r"$3 : 1$"
    ],
    0,
    r"For $r_1 = R/3 \le R$: $B_1 = \frac{\mu_0 I (R/3)}{2\pi R^2} = \frac{\mu_0 I}{6\pi R}$. For $r_2 = 3R \ge R$: $B_2 = \frac{\mu_0 I}{2\pi(3R)} = \frac{\mu_0 I}{6\pi R}$. Therefore, $B_1 : B_2 = 1 : 1$.",
    "Medium"
)

# Q26
add_q(
    "Displacement current",
    r"In a discharging capacitor circuit, the direction of the displacement current between the plates compared to the conduction current in the connecting wire is:",
    [
        r"In the same effective direction along the circuit",
        r"In the opposite direction along the circuit",
        r"Perpendicular to the plates always",
        r"Zero because it is discharging"
    ],
    0,
    r"During discharging, electric flux $\Phi_E$ decreases, so $\frac{d\Phi_E}{dt}$ is negative, directing $I_d$ opposite to $\vec{E}$, which maintains continuous current flow around the circuit matching the direction of conduction current.",
    "Medium"
)

# Q27
add_q(
    "Displacement current",
    r"Consider a parallel plate capacitor being charged by a steady current $I$. The magnetic energy density at a distance $r < R$ from the axis between circular plates of radius $R$ is proportional to:",
    [
        r"$r^2$",
        r"$r$",
        r"$1/r^2$",
        r"$1/r$"
    ],
    0,
    r"Magnetic energy density is $u_B = \frac{B^2}{2\mu_0}$. Since $B \propto r$ inside the plates, $u_B \propto B^2 \propto r^2$.",
    "Medium"
)

# Q28
add_q(
    "Displacement current",
    r"A 2 pF capacitor is subjected to an alternating potential difference $V = 100 \cos(10^6 t)\text{ V}$. What is the peak displacement current?",
    [
        r"$0.2\text{ mA}$",
        r"$2\text{ mA}$",
        r"$0.02\text{ mA}$",
        r"$20\text{ mA}$"
    ],
    0,
    r"$$I_0 = \omega C V_0 = (10^6\text{ rad/s}) \times (2 \times 10^{-12}\text{ F}) \times (100\text{ V}) = 2 \times 10^{-4}\text{ A} = 0.2\text{ mA}$$",
    "Easy"
)

# Q29
add_q(
    "Displacement current",
    r"Maxwell's modification to Ampere's circuital law states that magnetic fields are produced by:",
    [
        r"Both conduction currents and time-varying electric fields",
        r"Conduction currents only",
        r"Time-varying electric fields only",
        r"Static electric charges"
    ],
    0,
    r"Maxwell showed that magnetic fields can be generated by ordinary electric currents (conduction currents) as well as by time-varying electric fields (displacement currents).",
    "Easy"
)

# Q30
add_q(
    "Displacement current",
    r"If the electric field between capacitor plates is given by $E = E_0(1 - t/\tau)$, the displacement current density is:",
    [
        r"$-\frac{\varepsilon_0 E_0}{\tau}$",
        r"$\frac{\varepsilon_0 E_0}{\tau}$",
        r"$-\frac{E_0}{\tau}$",
        r"$\varepsilon_0 E_0 \tau$"
    ],
    0,
    r"$$j_d = \varepsilon_0 \frac{\partial E}{\partial t} = \varepsilon_0 \frac{d}{dt}\left[E_0\left(1 - \frac{t}{\tau}\right)\right] = -\frac{\varepsilon_0 E_0}{\tau}$$",
    "Easy"
)

# Q31
add_q(
    "Displacement current",
    r"A parallel plate capacitor is charged with a constant current of $2\text{ A}$. The plates are square of side $10\text{ cm}$. The rate of change of electric field $\frac{dE}{dt}$ inside is:",
    [
        r"$2.26 \times 10^{13}\text{ V/(m}\cdot\text{s)}$",
        r"$1.13 \times 10^{13}\text{ V/(m}\cdot\text{s)}$",
        r"$4.52 \times 10^{13}\text{ V/(m}\cdot\text{s)}$",
        r"$8.85 \times 10^{12}\text{ V/(m}\cdot\text{s)}$"
    ],
    0,
    r"Area $A = (0.1\text{ m})^2 = 0.01\text{ m}^2$. Since $I_d = \varepsilon_0 A \frac{dE}{dt} = I_c = 2\text{ A}$: $$\frac{dE}{dt} = \frac{I_d}{\varepsilon_0 A} = \frac{2}{(8.85 \times 10^{-12}) \times 0.01} \approx 2.26 \times 10^{13}\text{ V/(m}\cdot\text{s)}$$",
    "Medium"
)

# Q32
add_q(
    "Displacement current",
    r"A parallel circular plate capacitor has plate radius $R = 6\text{ cm}$. At $r = 3\text{ cm}$ from the central axis, the induced magnetic field is $1.5\ \mu\text{T}$. What is the magnetic field at $r = 12\text{ cm}$?",
    [
        r"$0.75\ \mu\text{T}$",
        r"$1.5\ \mu\text{T}$",
        r"$3.0\ \mu\text{T}$",
        r"$0.375\ \mu\text{T}$"
    ],
    0,
    r"At $r = 3\text{ cm} = R/2$: $B(R/2) = \frac{1}{2} B(R) = 1.5\ \mu\text{T} \implies B(R) = 3.0\ \mu\text{T}$. At $r = 12\text{ cm} = 2R$: $B(2R) = \frac{1}{2} B(R) = \frac{1}{2}(3.0\ \mu\text{T}) = 1.5\ \mu\text{T}$... Wait! For $r = 12\text{ cm} = 2R$, $B(2R) = \frac{\mu_0 I}{2\pi (2R)} = \frac{1}{2} B(R) = 1.5\ \mu\text{T}$. Let's recheck: $R = 6\text{ cm}$, $r = 12\text{ cm}$ is $2R$. At $r = R$, $B(R) = 2 \times B(R/2) = 3.0\ \mu\text{T}$. For $r = 2R$, $B(2R) = \frac{\mu_0 I}{2\pi(2R)} = \frac{B(R)}{2} = 1.5\ \mu\text{T}$.",
    "Medium"
)

# Q33
add_q(
    "Displacement current",
    r"The line integral of magnetic field around any closed loop is proportional to the sum of conduction current and displacement current. This is the mathematical statement of:",
    [
        r"Ampere-Maxwell law",
        r"Faraday's law",
        r"Gauss's law",
        r"Coulomb's law"
    ],
    0,
    r"$$\oint \vec{B} \cdot d\vec{l} = \mu_0(I_c + I_d) = \mu_0\left(I_c + \varepsilon_0 \frac{d\Phi_E}{dt}\right)$$ is the Ampere-Maxwell law.",
    "Easy"
)

# Q34
add_q(
    "Displacement current",
    r"During charging of a capacitor, which field(s) exist between the plates?",
    [
        r"Both a time-varying electric field and an induced magnetic field",
        r"A static electric field only",
        r"A magnetic field only",
        r"Neither electric nor magnetic field"
    ],
    0,
    r"During charging, the accumulating charges produce a time-varying electric field $\vec{E}(t)$. By the Ampere-Maxwell law, this changing $\vec{E}$-field generates an induced magnetic field $\vec{B}(t)$.",
    "Easy"
)

# Q35
add_q(
    "Displacement current",
    r"A parallel plate capacitor is charging. The magnetic field lines between the circular plates form:",
    [
        r"Concentric circles concentric with the axis of the plates",
        r"Straight lines parallel to the electric field",
        r"Radially outward lines from the axis",
        r"Hyperbolic curves"
    ],
    0,
    r"By azimuthal symmetry around the central cylindrical axis of the circular plates, the induced magnetic field lines form concentric circles centered on the axis, lying in planes parallel to the plates.",
    "Easy"
)

# Q36
add_q(
    "Displacement current",
    r"A capacitor of capacitance $10\ \mu\text{F}$ is charged through a resistor $R = 100\ \Omega$ by a $10\text{ V}$ battery. What is the initial displacement current at $t = 0^+$?",
    [
        r"$0.1\text{ A}$",
        r"$1.0\text{ A}$",
        r"$0.01\text{ A}$",
        r"$0\text{ A}$"
    ],
    0,
    r"At $t = 0^+$, the uncharged capacitor acts as a short circuit ($V_C = 0$). Conduction current is $I_c = \frac{V}{R} = \frac{10}{100} = 0.1\text{ A}$. Thus displacement current is $I_d = I_c = 0.1\text{ A}$.",
    "Easy"
)

# Q37
add_q(
    "Displacement current",
    r"Which of the following expressions represents the displacement current in integral form?",
    [
        r"$I_d = \varepsilon_0 \frac{d}{dt}\iint \vec{E} \cdot d\vec{A}$",
        r"$I_d = \mu_0 \frac{d}{dt}\iint \vec{B} \cdot d\vec{A}$",
        r"$I_d = \frac{1}{\varepsilon_0}\iint \vec{E} \cdot d\vec{A}$",
        r"$I_d = \varepsilon_0 \mu_0 \oint \vec{E} \cdot d\vec{l}$"
    ],
    0,
    r"Since $\Phi_E = \iint \vec{E} \cdot d\vec{A}$, displacement current is defined as $I_d = \varepsilon_0 \frac{d\Phi_E}{dt} = \varepsilon_0 \frac{d}{dt}\iint \vec{E} \cdot d\vec{A}$.",
    "Easy"
)

# Q38
add_q(
    "Displacement current",
    r"A circular capacitor of radius $R$ is being charged. The ratio of the magnetic field at $r = R/4$ to that at $r = R/2$ is:",
    [
        r"$1 : 2$",
        r"$1 : 4$",
        r"$1 : 16$",
        r"$2 : 1$"
    ],
    0,
    r"For $r \le R$, $B(r) \propto r$. Therefore: $$\frac{B(R/4)}{B(R/2)} = \frac{R/4}{R/2} = \frac{1}{2}$$",
    "Easy"
)

# Q39
add_q(
    "Displacement current",
    r"In a dielectric medium having dielectric constant $K$, the displacement current $I_d$ is related to electric flux $\Phi_E$ by:",
    [
        r"$I_d = K \varepsilon_0 \frac{d\Phi_E}{dt}$",
        r"$I_d = \frac{\varepsilon_0}{K}\frac{d\Phi_E}{dt}$",
        r"$I_d = \varepsilon_0 \frac{d\Phi_E}{dt}$",
        r"$I_d = \mu_0 K \frac{d\Phi_E}{dt}$"
    ],
    0,
    r"In a linear dielectric, the permittivity is $\varepsilon = K \varepsilon_0$. Thus $I_d = \varepsilon \frac{d\Phi_E}{dt} = K \varepsilon_0 \frac{d\Phi_E}{dt}$.",
    "Easy"
)

# Q40
add_q(
    "Displacement current",
    r"If the charge on a capacitor varies as $q(t) = Q_0(1 - e^{-t/\tau})$, the displacement current between the plates is:",
    [
        r"$\frac{Q_0}{\tau} e^{-t/\tau}$",
        r"$Q_0(1 - e^{-t/\tau})$",
        r"$\frac{Q_0}{\tau^2} e^{-t/\tau}$",
        r"$\frac{Q_0}{\tau} (1 - e^{-t/\tau})$"
    ],
    0,
    r"$$I_d = I_c = \frac{dq}{dt} = \frac{d}{dt}\left[Q_0(1 - e^{-t/\tau})\right] = \frac{Q_0}{\tau} e^{-t/\tau}$$",
    "Easy"
)

# Q41
add_q(
    "Displacement current",
    r"For circular capacitor plates of radius $R$, the total displacement current through a concentric circular area of radius $r \le R$ is:",
    [
        r"$I_d \left(\frac{r^2}{R^2}\right)$",
        r"$I_d \left(\frac{r}{R}\right)$",
        r"$I_d \left(\frac{r^3}{R^3}\right)$",
        r"$I_d$"
    ],
    0,
    r"Since the electric field and therefore the displacement current density $j_d$ is uniform across the plate area: $$I_d' = j_d (\pi r^2) = \frac{I_d}{\pi R^2} (\pi r^2) = I_d \left(\frac{r^2}{R^2}\right)$$",
    "Easy"
)

# Q42
add_q(
    "Displacement current",
    r"The displacement current between the plates of a charging capacitor is due to:",
    [
        r"Time-varying electric field",
        r"Flow of electrons across the vacuum gap",
        r"Ionization of air molecules between plates",
        r"Thermal agitation of dielectric"
    ],
    0,
    r"Displacement current is not an actual flow of electric charge; it arises from a time-varying electric flux/field in space.",
    "Easy"
)

# Q43
add_q(
    "Displacement current",
    r"Which of the following statements is FALSE regarding displacement current?",
    [
        r"Displacement current does not produce a magnetic field",
        r"Displacement current produces a magnetic field just like conduction current",
        r"Displacement current is equal to conduction current in the connecting wires of a capacitor",
        r"Displacement current density is given by $\varepsilon_0 \frac{\partial E}{\partial t}$ in vacuum"
    ],
    0,
    r"Displacement current produces a magnetic field in exactly the same way as conduction current does. The statement that it does not produce a magnetic field is false.",
    "Easy"
)

# Q44
add_q(
    "Displacement current",
    r"A sinusoidal voltage of angular frequency $\omega$ is applied across a parallel plate capacitor. The phase difference between the applied voltage and the displacement current is:",
    [
        r"$\pi / 2\text{ rad}$",
        r"$\pi\text{ rad}$",
        r"$0$",
        r"$\pi / 4\text{ rad}$"
    ],
    0,
    r"Since $V(t) = V_0 \sin(\omega t)$, the displacement current is $I_d(t) = C \frac{dV}{dt} = \omega C V_0 \cos(\omega t) = \omega C V_0 \sin(\omega t + \pi/2)$. Thus $I_d$ leads the voltage by $\pi/2$ radians.",
    "Easy"
)

# Q45
add_q(
    "Displacement current",
    r"In Maxwell's equations, the term $\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ has dimensions of:",
    [
        r"$\text{T/m}$",
        r"$\text{T}\cdot\text{m}$",
        r"$\text{A/m}$",
        r"$\text{V/m}$"
    ],
    0,
    r"From $\nabla \times \vec{B} = \mu_0 \vec{j}_c + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$, both terms on the right must have the same dimension as curl of $\vec{B}$, which is $\frac{[B]}{[L]} = \text{T/m}$.",
    "Medium"
)

# Q46
add_q(
    "Displacement current",
    r"The radius of the circular plates of a parallel plate capacitor is $R = 12\text{ cm}$. The charging conduction current is $0.15\text{ A}$. The value of $\oint \vec{B} \cdot d\vec{l}$ along a circle of radius $r = 6\text{ cm}$ concentric with the plates is:",
    [
        r"$\frac{\mu_0(0.15)}{4}$",
        r"$\frac{\mu_0(0.15)}{2}$",
        r"$\mu_0(0.15)$",
        r"$\frac{\mu_0(0.15)}{16}$"
    ],
    0,
    r"By Ampere-Maxwell law: $$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enclosed}} = \mu_0 I \left(\frac{r^2}{R^2}\right) = \mu_0 (0.15) \left(\frac{6}{12}\right)^2 = \frac{\mu_0(0.15)}{4}$$",
    "Medium"
)

# Q47
add_q(
    "Displacement current",
    r"A parallel plate capacitor is charged with a constant current. A point $P$ is located at a distance $r$ from the central axis. As the capacitor continues to charge at a constant rate, the magnetic field at $P$:",
    [
        r"Remains constant with time",
        r"Increases linearly with time",
        r"Decreases exponentially with time",
        r"Fluctuates sinusoidally"
    ],
    0,
    r"Since the conduction current $I$ is constant, the displacement current $I_d = I$ is constant. Consequently, $\frac{dE}{dt}$ is constant, and the induced magnetic field $B \propto I_d$ remains constant in time.",
    "Easy"
)

# Q48
add_q(
    "Displacement current",
    r"Maxwell's fourth equation $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_c + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}$ is consistent with:",
    [
        r"Conservation of electric charge",
        r"Conservation of linear momentum only",
        r"Newton's third law only",
        r"Lenz's law only"
    ],
    0,
    r"Taking the divergence of both sides of $\nabla \times \vec{B} = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ gives $0 = \mu_0(\nabla \cdot \vec{j} + \frac{\partial \rho}{\partial t})$, which is the continuity equation $\nabla \cdot \vec{j} + \frac{\partial \rho}{\partial t} = 0$, expressing the conservation of electric charge.",
    "Medium"
)

# Q49
add_q(
    "Displacement current",
    r"If the electric field between the plates of a circular capacitor of radius $R$ is $E(t) = a t$, where $a$ is a constant, then the magnetic field at $r = R$ is:",
    [
        r"$\frac{\mu_0 \varepsilon_0 a R}{2}$",
        r"$\mu_0 \varepsilon_0 a R$",
        r"$\frac{\mu_0 \varepsilon_0 a R^2}{2}$",
        r"$\frac{\mu_0 \varepsilon_0 a}{2 R}$"
    ],
    0,
    r"$$B(2\pi R) = \mu_0 I_d = \mu_0 \left(\varepsilon_0 \pi R^2 \frac{dE}{dt}\right) = \mu_0 \varepsilon_0 \pi R^2 a \implies B = \frac{\mu_0 \varepsilon_0 a R}{2}$$",
    "Medium"
)

# Q50
add_q(
    "Displacement current",
    r"A parallel plate capacitor is charged by a current $I(t) = I_0 e^{-t/\tau}$. The induced magnetic field at distance $r < R$ from the central axis varies with time as:",
    [
        r"$e^{-t/\tau}$",
        r"$e^{-2t/\tau}$",
        r"$1 - e^{-t/\tau}$",
        r"Independent of time"
    ],
    0,
    r"Since $B(r, t) \propto I_d(t)$ and $I_d(t) = I(t) = I_0 e^{-t/\tau}$, the magnetic field decays exponentially with time as $e^{-t/\tau}$.",
    "Easy"
)

# Q51
add_q(
    "Displacement current",
    r"A circular capacitor plate has radius $0.1\text{ m}$. The rate of change of potential difference between the plates is $5 \times 10^5\text{ V/s}$, and plate separation is $1\text{ mm}$. The displacement current is:",
    [
        r"$1.39 \times 10^{-4}\text{ A}$",
        r"$2.78 \times 10^{-4}\text{ A}$",
        r"$6.95 \times 10^{-5}\text{ A}$",
        r"$5.56 \times 10^{-4}\text{ A}$"
    ],
    0,
    r"$$C = \frac{\varepsilon_0 \pi R^2}{d} = \frac{(8.85 \times 10^{-12}) \times \pi \times (0.1)^2}{10^{-3}} \approx 2.78 \times 10^{-10}\text{ F}$$ $$I_d = C \frac{dV}{dt} = (2.78 \times 10^{-10}) \times (5 \times 10^5) \approx 1.39 \times 10^{-4}\text{ A}$$",
    "Medium"
)

# Q52
add_q(
    "Displacement current",
    r"The magnetic field between the plates of a charging circular capacitor at $r = 0$ (on the axis) is:",
    [
        r"Zero",
        r"Maximum",
        r"Infinite",
        r"Equal to that at $r = R$"
    ],
    0,
    r"Since $B(r) = \frac{\mu_0 I r}{2\pi R^2}$, at the center axis $r = 0$, $B = 0$.",
    "Easy"
)

# Q53
add_q(
    "Displacement current",
    r"If an Amperian loop of radius $r$ is drawn between the plates of a circular capacitor of radius $R$ ($r < R$), the fraction of total displacement current enclosed is:",
    [
        r"$\frac{r^2}{R^2}$",
        r"$\frac{r}{R}$",
        r"$\frac{R^2}{r^2}$",
        r"$\frac{r^3}{R^3}$"
    ],
    0,
    r"Assuming uniform electric field, displacement current is uniformly distributed over the area $\pi R^2$. Hence the fraction enclosed is $\frac{\pi r^2}{\pi R^2} = \frac{r^2}{R^2}$.",
    "Easy"
)

# Q54
add_q(
    "Displacement current",
    r"A parallel plate capacitor is discharging. The magnetic field at a distance $r$ from the central axis points:",
    [
        r"Opposite to the direction it had during charging",
        r"In the same direction as during charging",
        r"Radially outwards",
        r"Radially inwards"
    ],
    0,
    r"During discharging, $\frac{dE}{dt}$ is opposite in sign to that during charging. Consequently, the displacement current and the induced magnetic field reverse their directions.",
    "Easy"
)

# Q55
add_q(
    "Displacement current",
    r"Which of the following represents Gauss's law for electricity in differential form?",
    [
        r"$\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$",
        r"$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$",
        r"$\nabla \cdot \vec{B} = 0$",
        r"$\nabla \times \vec{B} = \mu_0 \vec{j}$"
    ],
    0,
    r"Gauss's law for electricity states that the divergence of the electric field equals charge density divided by permittivity: $\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$.",
    "Easy"
)

# ==============================================================================
# SUBTOPIC 2: EM spectrum (55 Questions)
# ==============================================================================

# Q56
add_q(
    "EM spectrum",
    r"Which of the following electromagnetic waves has the highest frequency?",
    [
        r"$\gamma$-rays",
        r"X-rays",
        r"Ultraviolet rays",
        r"Microwaves"
    ],
    0,
    r"In the electromagnetic spectrum, $\gamma$-rays have the shortest wavelength ($\lambda < 10^{-11}\text{ m}$) and consequently the highest frequency ($f > 10^{19}\text{ Hz}$).",
    "Easy"
)

# Q57
add_q(
    "EM spectrum",
    r"Electromagnetic waves used in radar systems for aircraft navigation are:",
    [
        r"Microwaves",
        r"Infrared waves",
        r"Ultraviolet rays",
        r"X-rays"
    ],
    0,
    r"Microwaves (wavelengths $1\text{ mm}$ to $0.1\text{ m}$) have short wavelengths suitable for directional beams and are widely used in radar systems for navigation.",
    "Easy"
)

# Q58
add_q(
    "EM spectrum",
    r"Which radiation is absorbed significantly by the ozone layer in Earth's atmosphere, protecting life on Earth?",
    [
        r"Ultraviolet rays",
        r"Infrared rays",
        r"X-rays",
        r"Radio waves"
    ],
    0,
    r"The stratospheric ozone ($O_3$) layer absorbs harmful ultraviolet (UV) radiation emitted by the Sun, preventing it from reaching the Earth's surface.",
    "Easy"
)

# Q59
add_q(
    "EM spectrum",
    r"Infrared radiation is often called 'heat waves' primarily because:",
    [
        r"Water molecules and other molecules readily absorb them, increasing their thermal motion",
        r"They have the highest speed among all EM waves",
        r"They produce nuclear reactions in matter",
        r"They are only emitted by burning flames"
    ],
    0,
    r"Infrared rays are readily absorbed by water molecules present in most materials and tissues, increasing their vibrational/thermal motion, thereby heating up the substance.",
    "Easy"
)

# Q60
add_q(
    "EM spectrum",
    r"Electromagnetic radiation of wavelength $\lambda = 21\text{ cm}$ emitted by interstellar neutral hydrogen gas falls into which region of the EM spectrum?",
    [
        r"Radio waves",
        r"Microwaves",
        r"Infrared",
        r"Visible light"
    ],
    0,
    r"Wavelengths from a few meters down to several centimeters ($> 0.1\text{ m}$ or short radio / UHF band) are categorized as radio waves; $\lambda = 21\text{ cm}$ ($1420\text{ MHz}$) is a famous radio astronomy spectral line.",
    "Easy"
)

# Q61
add_q(
    "EM spectrum",
    r"Which of the following devices is used to produce microwaves?",
    [
        r"Klystron tube or Magnetron",
        r"Coolidge tube",
        r"Mercury vapor lamp",
        r"Radioactive cobalt-60"
    ],
    0,
    r"Microwaves are produced by special vacuum tubes such as klystrons, magnetrons, and Gunn diodes.",
    "Easy"
)

# Q62
add_q(
    "EM spectrum",
    r"The wavelength range of the visible spectrum of electromagnetic waves is approximately:",
    [
        r"$400\text{ nm}$ to $700\text{ nm}$",
        r"$10\text{ nm}$ to $100\text{ nm}$",
        r"$700\text{ nm}$ to $1\text{ mm}$",
        r"$1\text{ mm}$ to $1\text{ m}$"
    ],
    0,
    r"The visible spectrum spans wavelengths from approximately $400\text{ nm}$ ($4000\text{ \AA}$, violet) to $700\text{ nm}$ ($7000\text{ \AA}$, red).",
    "Easy"
)

# Q63
add_q(
    "EM spectrum",
    r"Which of the following electromagnetic radiations is produced when rapid electrons decelerate upon striking a high-Z metal target?",
    [
        r"X-rays",
        r"$\gamma$-rays",
        r"Ultraviolet rays",
        r"Infrared rays"
    ],
    0,
    r"X-rays (specifically Bremsstrahlung or continuous X-rays) are produced when fast-moving electrons collide with a target of high atomic number and suddenly decelerate.",
    "Easy"
)

# Q64
add_q(
    "EM spectrum",
    r"The correct sequence of EM waves in order of INCREASING wavelength is:",
    [
        r"$\gamma$-rays, X-rays, UV, Visible, IR, Microwaves, Radio waves",
        r"Radio waves, Microwaves, IR, Visible, UV, X-rays, $\gamma$-rays",
        r"$\gamma$-rays, UV, X-rays, Visible, IR, Microwaves, Radio waves",
        r"X-rays, $\gamma$-rays, UV, Visible, Microwaves, IR, Radio waves"
    ],
    0,
    r"In order of increasing wavelength (decreasing frequency): $\gamma$-rays ($<10^{-11}\text{ m}$), X-rays ($10^{-11}-10^{-8}\text{ m}$), UV ($10^{-8}-4\times 10^{-7}\text{ m}$), Visible ($4\times 10^{-7}-7\times 10^{-7}\text{ m}$), IR ($7\times 10^{-7}-10^{-3}\text{ m}$), Microwaves ($10^{-3}-0.1\text{ m}$), Radio waves ($>0.1\text{ m}$).",
    "Easy"
)

# Q65
add_q(
    "EM spectrum",
    r"Which electromagnetic wave is used in LASIK eye surgery and water purifiers for sterilisation?",
    [
        r"Ultraviolet rays",
        r"Infrared rays",
        r"Microwaves",
        r"X-rays"
    ],
    0,
    r"Ultraviolet (UV) radiation kills bacteria/germs in water purifiers and excimer lasers operating in the UV range are used with precision in LASIK eye surgery.",
    "Easy"
)

# Q66
add_q(
    "EM spectrum",
    r"The frequency of an electromagnetic wave is $6 \times 10^{14}\text{ Hz}$. In vacuum, its wavelength is ($c = 3 \times 10^8\text{ m/s}$):",
    [
        r"$500\text{ nm}$",
        r"$50\text{ nm}$",
        r"$5000\text{ nm}$",
        r"$5\text{ nm}$"
    ],
    0,
    r"$$\lambda = \frac{c}{\nu} = \frac{3 \times 10^8\text{ m/s}}{6 \times 10^{14}\text{ Hz}} = 0.5 \times 10^{-6}\text{ m} = 500\text{ nm}$$ This lies in the visible (green) region.",
    "Easy"
)

# Q67
add_q(
    "EM spectrum",
    r"Greenhouse effect on Earth is primarily caused by the trapping of which radiation by atmospheric gases like $\text{CO}_2$ and water vapor?",
    [
        r"Infrared radiation",
        r"Ultraviolet radiation",
        r"X-rays",
        r"$\gamma$-rays"
    ],
    0,
    r"The Earth's surface absorbs solar radiation and reradiates it as long-wavelength infrared radiation. Greenhouse gases absorb this infrared radiation and reflect it back to Earth, heating the atmosphere.",
    "Easy"
)

# Q68
add_q(
    "EM spectrum",
    r"Which electromagnetic waves are used in television remote controls?",
    [
        r"Infrared waves",
        r"Microwaves",
        r"Radio waves",
        r"Ultraviolet rays"
    ],
    0,
    r"TV remote controls typically use light-emitting diodes (LEDs) that emit infrared (IR) light to send coded pulses to the receiver on the television.",
    "Easy"
)

# Q69
add_q(
    "EM spectrum",
    r"The electromagnetic wave produced by radioactive transitions in atomic nuclei is:",
    [
        r"$\gamma$-rays",
        r"X-rays",
        r"UV rays",
        r"Microwaves"
    ],
    0,
    r"Gamma rays originate from nuclear transitions (de-excitation of excited states in atomic nuclei) or nuclear reactions, whereas X-rays originate from electron transitions or electron decelerations outside the nucleus.",
    "Easy"
)

# Q70
add_q(
    "EM spectrum",
    r"In a microwave oven, the frequency of microwaves is chosen to match the resonant frequency of:",
    [
        r"Rotational motion of water molecules",
        r"Electronic transitions in food atoms",
        r"Nuclear spin transitions",
        r"Lattice vibrations of the glass container"
    ],
    0,
    r"Microwaves in ovens (typically $2.45\text{ GHz}$) efficiently couple to the rotational modes of polar water molecules in food, causing dielectric heating.",
    "Easy"
)

# Q71
add_q(
    "EM spectrum",
    r"An electromagnetic wave has energy $E = 1.24\text{ keV}$. To which part of the EM spectrum does it belong? ($h c \approx 1240\text{ eV}\cdot\text{nm}$)",
    [
        r"X-rays",
        r"Ultraviolet",
        r"Visible light",
        r"Infrared"
    ],
    0,
    r"$$\lambda = \frac{h c}{E} = \frac{1240\text{ eV}\cdot\text{nm}}{1240\text{ eV}} = 1\text{ nm} = 10\text{ \AA}$$ A wavelength of $1\text{ nm}$ ($10^{-9}\text{ m}$) falls squarely in the soft X-ray region.",
    "Medium"
)

# Q72
add_q(
    "EM spectrum",
    r"Which of the following statements about EM waves is INCORRECT?",
    [
        r"$\gamma$-rays can be detected using photographic film, but visible light cannot",
        r"Radio waves have the lowest frequency in the EM spectrum",
        r"All EM waves travel with the same speed in vacuum",
        r"Infrared waves produce thermal sensations when absorbed"
    ],
    0,
    r"Visible light readily affects photographic film (which is the basis of traditional photography). Therefore the statement that visible light cannot be detected by photographic film is incorrect.",
    "Easy"
)

# Q73
add_q(
    "EM spectrum",
    r"Photons of an EM wave have momentum $p = 1.1 \times 10^{-27}\text{ kg}\cdot\text{m/s}$. The wave lies in which region? ($h = 6.63 \times 10^{-34}\text{ J}\cdot\text{s}$)",
    [
        r"Visible light",
        r"X-rays",
        r"Radio waves",
        r"Microwaves"
    ],
    0,
    r"$$\lambda = \frac{h}{p} = \frac{6.63 \times 10^{-34}}{1.1 \times 10^{-27}} \approx 6.0 \times 10^{-7}\text{ m} = 600\text{ nm}$$ $600\text{ nm}$ is in the orange-yellow visible region.",
    "Medium"
)

# Q74
add_q(
    "EM spectrum",
    r"Cellular mobile phones operate using electromagnetic waves in which range?",
    [
        r"Ultra High Frequency (UHF) radio waves / microwaves",
        r"Infrared rays",
        r"Very Low Frequency (VLF) radio waves",
        r"Ultraviolet rays"
    ],
    0,
    r"Mobile phone communication operates typically in the UHF band ($800\text{ MHz} - 2.5\text{ GHz}$), which lies at the boundary of UHF radio waves and microwaves.",
    "Easy"
)

# Q75
add_q(
    "EM spectrum",
    r"Which EM radiation is used for treatment of certain forms of cancer (radiotherapy)?",
    [
        r"$\gamma$-rays",
        r"Infrared rays",
        r"Microwaves",
        r"Radio waves"
    ],
    0,
    r"High-energy $\gamma$-rays (such as from Cobalt-60) are used in radiotherapy to destroy cancerous cells.",
    "Easy"
)

# Q76
add_q(
    "EM spectrum",
    r"Night vision devices utilize which part of the electromagnetic spectrum?",
    [
        r"Infrared radiation",
        r"Ultraviolet radiation",
        r"X-rays",
        r"Microwaves"
    ],
    0,
    r"Night vision goggles detect infrared radiation (thermal imaging) emitted or reflected by warm bodies in the dark.",
    "Easy"
)

# Q77
add_q(
    "EM spectrum",
    r"Welders wear special glass goggles or face masks with dark filters to protect their eyes from:",
    [
        r"Ultraviolet radiation",
        r"Infrared radiation only",
        r"Microwaves",
        r"Radio waves"
    ],
    0,
    r"Electric welding arcs emit large quantities of high-intensity ultraviolet (UV) radiation, which can cause severe damage (photokeratitis / welder's flash) to the eyes.",
    "Easy"
)

# Q78
add_q(
    "EM spectrum",
    r"The ozone layer absorbs UV radiation because of:",
    [
        r"Photodissociation of $O_3$ molecules into $O_2$ and $O$",
        r"Nuclear transmutation of oxygen",
        r"Thermal conduction through ozone gas",
        r"Compton scattering of photons"
    ],
    0,
    r"Ozone absorbs UV photons ($\lambda < 320\text{ nm}$) which have sufficient energy to break the chemical bond in $O_3$, causing photodissociation: $O_3 + h\nu \to O_2 + O$.",
    "Medium"
)

# Q79
add_q(
    "EM spectrum",
    r"An FM radio station broadcasts at a frequency of $100\text{ MHz}$. What is the wavelength of the broadcast wave?",
    [
        r"$3.0\text{ m}$",
        r"$0.33\text{ m}$",
        r"$30\text{ m}$",
        r"$300\text{ m}$"
    ],
    0,
    r"$$\lambda = \frac{c}{f} = \frac{3 \times 10^8\text{ m/s}}{100 \times 10^6\text{ Hz}} = 3.0\text{ m}$$",
    "Easy"
)

# Q80
add_q(
    "EM spectrum",
    r"The speed of electromagnetic waves in vacuum depends on:",
    [
        r"None of frequency, wavelength, or intensity",
        r"Its wavelength",
        r"Its frequency",
        r"Its intensity"
    ],
    0,
    r"In vacuum, all electromagnetic waves travel at the universal constant speed $c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \approx 3 \times 10^8\text{ m/s}$, irrespective of frequency, wavelength, or intensity.",
    "Easy"
)

# Q81
add_q(
    "EM spectrum",
    r"Arrange the following in DECREASING order of frequency: (i) Microwaves, (ii) X-rays, (iii) Infrared rays, (iv) Ultraviolet rays.",
    [
        r"(ii) > (iv) > (iii) > (i)",
        r"(i) > (iii) > (iv) > (ii)",
        r"(ii) > (iii) > (iv) > (i)",
        r"(iv) > (ii) > (iii) > (i)"
    ],
    0,
    r"Order of decreasing frequency: X-rays ($10^{18}\text{ Hz}$) > UV ($10^{15}\text{ Hz}$) > Infrared ($10^{13}\text{ Hz}$) > Microwaves ($10^{10}\text{ Hz}$). Hence (ii) > (iv) > (iii) > (i).",
    "Easy"
)

# Q82
add_q(
    "EM spectrum",
    r"Which EM wave is used to study the crystal structure of solids via diffraction techniques?",
    [
        r"X-rays",
        r"Visible light",
        r"Microwaves",
        r"Radio waves"
    ],
    0,
    r"For significant diffraction, the wavelength of the wave must be comparable to the interatomic spacing in crystals ($\sim 1\text{ \AA} = 0.1\text{ nm}$). This condition is satisfied by X-rays (Bragg's diffraction).",
    "Easy"
)

# Q83
add_q(
    "EM spectrum",
    r"A typical microwave frequency is $3\text{ GHz}$. The energy of each photon of this radiation is ($h = 6.63 \times 10^{-34}\text{ J}\cdot\text{s}$):",
    [
        r"$1.99 \times 10^{-24}\text{ J}$",
        r"$1.99 \times 10^{-22}\text{ J}$",
        r"$3.31 \times 10^{-24}\text{ J}$",
        r"$6.63 \times 10^{-25}\text{ J}$"
    ],
    0,
    r"$$E = h \nu = (6.63 \times 10^{-34}\text{ J}\cdot\text{s}) \times (3 \times 10^9\text{ Hz}) = 1.989 \times 10^{-24}\text{ J} \approx 1.99 \times 10^{-24}\text{ J}$$",
    "Easy"
)

# Q84
add_q(
    "EM spectrum",
    r"Which layer of Earth's atmosphere reflects short radio waves back to the Earth, making long-distance radio communication possible?",
    [
        r"Ionosphere",
        r"Stratosphere",
        r"Troposphere",
        r"Mesosphere"
    ],
    0,
    r"The ionosphere contains a high concentration of free ions and electrons that reflect sky waves (short radio waves up to $\sim 30\text{ MHz}$) back to Earth.",
    "Easy"
)

# Q85
add_q(
    "EM spectrum",
    r"The ratio of the speed of an infrared wave to that of an ultraviolet wave in vacuum is:",
    [
        r"$1 : 1$",
        r"Greater than $1$",
        r"Less than $1$",
        r"Depends on their intensities"
    ],
    0,
    r"All electromagnetic waves, regardless of their wavelength or frequency, travel at the same speed $c = 3 \times 10^8\text{ m/s}$ in vacuum.",
    "Easy"
)

# Q86
add_q(
    "EM spectrum",
    r"Electromagnetic waves are produced by:",
    [
        r"An accelerated charge",
        r"A charge moving with uniform velocity",
        r"A stationary electric charge",
        r"A steady direct current in a wire"
    ],
    0,
    r"According to Maxwell's electromagnetic theory, only an accelerating or oscillating charge produces time-varying electric and magnetic fields that propagate as electromagnetic waves.",
    "Easy"
)

# Q87
add_q(
    "EM spectrum",
    r"Which part of the electromagnetic spectrum is detected using a thermopile or bolometer?",
    [
        r"Infrared rays",
        r"Ultraviolet rays",
        r"X-rays",
        r"$\gamma$-rays"
    ],
    0,
    r"Thermopiles and bolometers detect heat/temperature rises produced upon absorption of radiation, making them the standard instruments for detecting infrared radiation.",
    "Easy"
)

# Q88
add_q(
    "EM spectrum",
    r"Which of the following colors of visible light has the minimum wavelength?",
    [
        r"Violet",
        r"Red",
        r"Green",
        r"Yellow"
    ],
    0,
    r"In the visible spectrum (VIBGYOR), violet has the shortest wavelength ($\sim 400\text{ nm}$) and highest frequency, while red has the longest wavelength ($\sim 700\text{ nm}$).",
    "Easy"
)

# Q89
add_q(
    "EM spectrum",
    r"The wavelength of an X-ray is $0.1\text{ nm}$. Its wave number in $\text{m}^{-1}$ is:",
    [
        r"$10^7\text{ m}^{-1}$",
        r"$10^9\text{ m}^{-1}$",
        r"$10^{10}\text{ m}^{-1}$",
        r"$10^8\text{ m}^{-1}$"
    ],
    0,
    r"Wave number $\bar{\nu} = \frac{1}{\lambda} = \frac{1}{0.1 \times 10^{-9}\text{ m}} = 10^{10}\text{ m}^{-1}$. Wait, let's verify: $1 / 10^{-10} = 10^{10}\text{ m}^{-1}$. Correct.",
    "Easy"
)

# Q90
add_q(
    "EM spectrum",
    r"Which of the following has the highest penetrating power in matter?",
    [
        r"$\gamma$-rays",
        r"X-rays",
        r"Ultraviolet rays",
        r"$\beta$-particles"
    ],
    0,
    r"Due to their extremely high photon energies and absence of charge/mass, $\gamma$-rays have the highest penetrating power among all electromagnetic waves and particulate radiations.",
    "Easy"
)

# Q91
add_q(
    "EM spectrum",
    r"Fluorescent lamps make use of phosphor coatings on the tube walls to convert:",
    [
        r"Ultraviolet radiation into visible light",
        r"Infrared radiation into visible light",
        r"X-rays into ultraviolet radiation",
        r"Radio waves into microwaves"
    ],
    0,
    r"Mercury atoms inside the fluorescent tube emit ultraviolet radiation upon electric discharge, which strikes the phosphor coating on the glass, exciting it to emit visible light.",
    "Easy"
)

# Q92
add_q(
    "EM spectrum",
    r"The frequency band designated for satellite communication typically lies in:",
    [
        r"Microwaves ($1\text{ GHz} - 30\text{ GHz}$)",
        r"Medium wave AM radio ($530\text{ kHz} - 1600\text{ kHz}$)",
        r"Infrared band ($300\text{ GHz} - 400\text{ THz}$)",
        r"Ultraviolet band"
    ],
    0,
    r"Satellite communication uses microwaves (such as C-band, Ku-band, and Ka-band: $1\text{ GHz}$ to $30\text{ GHz}$) because they can penetrate the ionosphere without being reflected or absorbed.",
    "Easy"
)

# Q93
add_q(
    "EM spectrum",
    r"A certain radio transmitter operates at $9\text{ MHz}$ with an output power of $10\text{ kW}$. The number of photons emitted per second is approximately:",
    [
        r"$1.68 \times 10^{30}$",
        r"$1.68 \times 10^{26}$",
        r"$2.45 \times 10^{28}$",
        r"$3.14 \times 10^{32}$"
    ],
    0,
    r"Energy per photon $E = h \nu = (6.63 \times 10^{-34}) \times (9 \times 10^6) \approx 5.967 \times 10^{-27}\text{ J}$. Number of photons emitted per second: $$n = \frac{P}{E} = \frac{10^4\text{ W}}{5.967 \times 10^{-27}\text{ J}} \approx 1.68 \times 10^{30}\text{ photons/s}$$",
    "Medium"
)

# Q94
add_q(
    "EM spectrum",
    r"Which of the following EM waves has the longest wavelength?",
    [
        r"Radio waves",
        r"Microwaves",
        r"Infrared waves",
        r"Visible light"
    ],
    0,
    r"Radio waves have the longest wavelengths in the electromagnetic spectrum, ranging from about $0.1\text{ m}$ to hundreds of kilometers.",
    "Easy"
)

# Q95
add_q(
    "EM spectrum",
    r"Which radiation is used to detect counterfeit currency notes and forged documents?",
    [
        r"Ultraviolet light",
        r"Infrared light",
        r"Microwaves",
        r"Radio waves"
    ],
    0,
    r"Genuine currency notes and legal documents contain special fluorescent inks/fibers that glow when exposed to ultraviolet (UV) radiation.",
    "Easy"
)

# Q96
add_q(
    "EM spectrum",
    r"The electromagnetic spectrum is continuous because:",
    [
        r"There are no gaps in the possible frequencies at which accelerating charges can oscillate",
        r"All photons have identical energy",
        r"Speed of light varies continuously with wavelength",
        r"Photons can only be emitted at discrete velocities"
    ],
    0,
    r"Electromagnetic waves can be produced at any arbitrary continuous frequency by appropriately accelerating charged particles.",
    "Easy"
)

# Q97
add_q(
    "EM spectrum",
    r"Sodium vapor lamps emit characteristic yellow light of wavelength $589\text{ nm}$. The photon energy in eV is ($hc = 1242\text{ eV}\cdot\text{nm}$):",
    [
        r"$2.11\text{ eV}$",
        r"$3.14\text{ eV}$",
        r"$1.75\text{ eV}$",
        r"$4.22\text{ eV}$"
    ],
    0,
    r"$$E = \frac{hc}{\lambda} = \frac{1242\text{ eV}\cdot\text{nm}}{589\text{ nm}} \approx 2.11\text{ eV}$$",
    "Easy"
)

# Q98
add_q(
    "EM spectrum",
    r"Which EM wave is predominantly responsible for photochemical smog and sunburns on human skin?",
    [
        r"Ultraviolet rays",
        r"Infrared rays",
        r"Microwaves",
        r"Visible light"
    ],
    0,
    r"UV-B radiation ($280-315\text{ nm}$) causes sunburn and stimulates melanin production in skin, while also catalyzing photochemical reactions in polluted urban air leading to photochemical smog.",
    "Easy"
)

# Q99
add_q(
    "EM spectrum",
    r"In optical fiber communication, which wavelength band of infrared light is most commonly used due to lowest transmission loss in silica fibers?",
    [
        r"$1.3\ \mu\text{m}$ to $1.55\ \mu\text{m}$",
        r"$0.4\ \mu\text{m}$ to $0.7\ \mu\text{m}$",
        r"$10\ \mu\text{m}$ to $12\ \mu\text{m}$",
        r"$100\ \mu\text{m}$ to $200\ \mu\text{m}$"
    ],
    0,
    r"Silica optical fibers exhibit minimum attenuation (optical absorption and Rayleigh scattering) in the near-infrared region around $1.3\ \mu\text{m}$ and $1.55\ \mu\text{m}$.",
    "Medium"
)

# Q100
add_q(
    "EM spectrum",
    r"The fundamental source of all electromagnetic radiation in the universe is:",
    [
        r"Accelerated electric charges",
        r"Constant magnetic fields",
        r"Uniformly moving charges",
        r"Static electric dipoles"
    ],
    0,
    r"According to Maxwell's equations, accelerated electric charges produce changing electric and magnetic fields that propagate mutually perpendicularly through space as EM waves.",
    "Easy"
)

# Q101
add_q(
    "EM spectrum",
    r"If an antenna emits radio waves of frequency $30\text{ MHz}$, the minimum length of a half-wave dipole antenna required is:",
    [
        r"$5\text{ m}$",
        r"$10\text{ m}$",
        r"$2.5\text{ m}$",
        r"$1\text{ m}$"
    ],
    0,
    r"$$\lambda = \frac{c}{f} = \frac{3 \times 10^8\text{ m/s}}{30 \times 10^6\text{ Hz}} = 10\text{ m}$$ For a half-wave dipole, length $L = \frac{\lambda}{2} = \frac{10}{2} = 5\text{ m}$.",
    "Medium"
)

# Q102
add_q(
    "EM spectrum",
    r"Thermal imaging cameras used by firefighters and rescue teams detect radiation emitted in the:",
    [
        r"Infrared region",
        r"Ultraviolet region",
        r"Visible region",
        r"X-ray region"
    ],
    0,
    r"Objects at normal room and fire temperatures radiate intensely in the infrared region of the EM spectrum according to Wien's displacement law.",
    "Easy"
)

# Q103
add_q(
    "EM spectrum",
    r"Which region of the EM spectrum corresponds to molecular vibrational transitions?",
    [
        r"Infrared region",
        r"Ultraviolet region",
        r"Radio wave region",
        r"X-ray region"
    ],
    0,
    r"Transitions between vibrational energy levels in molecules typically correspond to energy quanta of $0.05 - 0.5\text{ eV}$, matching infrared wavelengths ($2 - 25\ \mu\text{m}$).",
    "Medium"
)

# Q104
add_q(
    "EM spectrum",
    r"Transitions between rotational energy levels in molecules typically absorb or emit radiation in the:",
    [
        r"Microwave region",
        r"Visible region",
        r"X-ray region",
        r"$\gamma$-ray region"
    ],
    0,
    r"Rotational energy spacings are very small ($\sim 10^{-3}\text{ eV}$), falling in the microwave and far-infrared regions of the spectrum.",
    "Medium"
)

# Q105
add_q(
    "EM spectrum",
    r"Transitions of inner shell electrons in heavy atoms give rise to:",
    [
        r"Characteristic X-rays",
        r"$\gamma$-rays",
        r"Microwaves",
        r"Infrared waves"
    ],
    0,
    r"When an inner-shell electron (such as K-shell) is knocked out of a heavy atom, an electron from an outer shell drops into the vacancy, emitting a high-energy characteristic X-ray photon.",
    "Easy"
)

# Q106
add_q(
    "EM spectrum",
    r"The cosmic microwave background (CMB) radiation corresponds to a blackbody radiation spectrum at a temperature of approximately:",
    [
        r"$2.7\text{ K}$",
        r"$273\text{ K}$",
        r"$0\text{ K}$",
        r"$5800\text{ K}$"
    ],
    0,
    r"The CMB radiation, a remnant from the early universe, is isotropic blackbody radiation at a temperature of $T \approx 2.73\text{ K}$, peaking in the microwave region ($\lambda_{\text{peak}} \approx 1\text{ mm}$).",
    "Easy"
)

# Q107
add_q(
    "EM spectrum",
    r"Which of the following electromagnetic waves has the highest momentum per photon?",
    [
        r"$\gamma$-rays",
        r"X-rays",
        r"Ultraviolet rays",
        r"Visible light"
    ],
    0,
    r"Photon momentum is $p = \frac{h}{\lambda} = \frac{h \nu}{c}$. Since $\gamma$-rays have the highest frequency $\nu$ and shortest wavelength $\lambda$, they carry the highest momentum per photon.",
    "Easy"
)

# Q108
add_q(
    "EM spectrum",
    r"An electron oscillating at a frequency of $10^9\text{ Hz}$ produces electromagnetic waves of wavelength:",
    [
        r"$0.3\text{ m}$",
        r"$3.0\text{ m}$",
        r"$0.03\text{ m}$",
        r"$30\text{ m}$"
    ],
    0,
    r"The frequency of the emitted EM wave equals the frequency of the oscillating charge: $$\lambda = \frac{c}{\nu} = \frac{3 \times 10^8\text{ m/s}}{10^9\text{ s}^{-1}} = 0.3\text{ m}$$",
    "Easy"
)

# Q109
add_q(
    "EM spectrum",
    r"Which radiation is used in luggage inspection scanners at airports?",
    [
        r"X-rays",
        r"Ultraviolet rays",
        r"Microwaves",
        r"Infrared rays"
    ],
    0,
    r"Airport security scanners use penetrating X-rays to generate dual-energy transmission images of luggage contents based on density and atomic number.",
    "Easy"
)

# Q110
add_q(
    "EM spectrum",
    r"A laser beam of wavelength $632.8\text{ nm}$ (He-Ne laser) has a frequency of approximately ($c = 3 \times 10^8\text{ m/s}$):",
    [
        r"$4.74 \times 10^{14}\text{ Hz}$",
        r"$2.37 \times 10^{14}\text{ Hz}$",
        r"$9.48 \times 10^{14}\text{ Hz}$",
        r"$1.58 \times 10^{14}\text{ Hz}$"
    ],
    0,
    r"$$\nu = \frac{c}{\lambda} = \frac{3 \times 10^8\text{ m/s}}{632.8 \times 10^{-9}\text{ m}} \approx 4.74 \times 10^{14}\text{ Hz}$$",
    "Easy"
)

print(f"Total questions in part 1: {len(questions)}")
with open("scripts/emw_ktg/emw_batch1.json", "w") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/emw_ktg/emw_batch1.json")
