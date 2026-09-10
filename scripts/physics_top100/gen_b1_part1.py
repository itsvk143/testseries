import json
import os

os.makedirs("scripts/physics_top100", exist_ok=True)

batch1_p1 = []

# ==========================================
# CHAPTER 1: Physics and Measurement (5 topics x 5 = 25 Qs)
# ==========================================
ch = "Physics and Measurement"

# Topic 1: Units and dimensions
top = "Units and dimensions"
q_list = [
    {
        "question": r"In a new system of units, the unit of mass is $\alpha\text{ kg}$, the unit of length is $\beta\text{ m}$, and the unit of time is $\gamma\text{ s}$. The value of a calorie ($1\text{ cal} = 4.2\text{ J}$) in this new system of units is:",
        "options": [
            r"$4.2 \, \alpha^{-1} \beta^{-2} \gamma^2$",
            r"$4.2 \, \alpha \beta^2 \gamma^{-2}$",
            r"$4.2 \, \alpha^{-1} \beta^2 \gamma^{-2}$",
            r"$4.2 \, \alpha \beta^{-2} \gamma^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Energy has dimensions $[M L^2 T^{-2}]$. Using $n_1 u_1 = n_2 u_2$, we have $n_2 = n_1 \left[\frac{M_1}{M_2}\right]^1 \left[\frac{L_1}{L_2}\right]^2 \left[\frac{T_1}{T_2}\right]^{-2} = 4.2 \left[\frac{1\text{ kg}}{\alpha\text{ kg}}\right] \left[\frac{1\text{ m}}{\beta\text{ m}}\right]^2 \left[\frac{1\text{ s}}{\gamma\text{ s}}\right]^{-2} = 4.2 \, \alpha^{-1} \beta^{-2} \gamma^2$."
    },
    {
        "question": r"If speed of light $c$, Planck's constant $h$, and gravitational constant $G$ are chosen as fundamental quantities, then the dimensional formula for length is:",
        "options": [
            r"$h^{1/2} G^{1/2} c^{-3/2}$",
            r"$h^{1/2} G^{-1/2} c^{-3/2}$",
            r"$h^{-1/2} G^{1/2} c^{3/2}$",
            r"$h^{1/2} G^{1/2} c^{3/2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $L \propto c^x h^y G^z$. Dimensions: $[c] = [L T^{-1}]$, $[h] = [M L^2 T^{-1}]$, $[G] = [M^{-1} L^3 T^{-2}]$. Equating powers: for $M$: $y - z = 0 \implies y = z$; for $T$: $-x - y - 2z = 0 \implies x = -3y$; for $L$: $x + 2y + 3z = 1 \implies -3y + 2y + 3y = 1 \implies 2y = 1 \implies y = 1/2, z = 1/2, x = -3/2$. Thus $[L] = h^{1/2} G^{1/2} c^{-3/2}$ (Planck length)."
    },
    {
        "question": r"The density of a material in CGS system is $8\text{ g/cm}^3$. In a system of units in which unit of length is $5\text{ cm}$ and unit of mass is $20\text{ g}$, the density of the material will be:",
        "options": [
            r"$50\text{ units}$",
            r"$20\text{ units}$",
            r"$40\text{ units}$",
            r"$100\text{ units}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Dimensions of density are $[M L^{-3}]$. Using $n_2 = n_1 \left[\frac{M_1}{M_2}\right] \left[\frac{L_1}{L_2}\right]^{-3} = 8 \left[\frac{1\text{ g}}{20\text{ g}}\right]^1 \left[\frac{1\text{ cm}}{5\text{ cm}}\right]^{-3} = 8 \times \frac{1}{20} \times 125 = \frac{1000}{20} = 50\text{ units}$."
    },
    {
        "question": r"If the capacitance $C$, inductance $L$, and resistance $R$ of an electrical circuit are given, the quantity with the dimensions of time is:",
        "options": [
            r"$R C$ and $\frac{L}{R}$",
            r"$\frac{R}{L}$ and $\frac{1}{R C}$",
            r"$\sqrt{L C}$ only",
            r"$\frac{C}{R}$ and $L R$"
        ],
        "correctAnswer": 0,
        "explanation": r"In transient circuits, the capacitive time constant is $\tau_C = RC$ and the inductive time constant is $\tau_L = L/R$. Both have the dimensions of time $[T]$."
    },
    {
        "question": r"The electric permittivity of free space $\varepsilon_0$ and permeability of free space $\mu_0$ combine such that the dimensions of $\sqrt{\frac{\mu_0}{\varepsilon_0}}$ are identical to:",
        "options": [
            r"Electrical resistance",
            r"Magnetic flux",
            r"Capacitance",
            r"Electric potential"
        ],
        "correctAnswer": 0,
        "explanation": r"The characteristic impedance of free space is $Z_0 = \sqrt{\frac{\mu_0}{\varepsilon_0}} \approx 377\,\Omega$. Since it is an impedance, its dimensional formula is that of electrical resistance $[M L^2 T^{-3} A^{-2}]$."
    }
]
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Error analysis
top = "Error analysis"
q_list = [
    {
        "question": r"The period of oscillation of a simple pendulum is $T = 2\pi\sqrt{\frac{L}{g}}$. Measured value of $L$ is $20.0\text{ cm}$ known to $1\text{ mm}$ accuracy and time for 100 oscillations of the pendulum is found to be $90\text{ s}$ using a wrist watch of $1\text{ s}$ resolution. The percentage error in determination of $g$ is closest to:",
        "options": [
            r"$2.72\%$",
            r"$3.25\%$",
            r"$1.85\%$",
            r"$4.10\%$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $g = \frac{4\pi^2 L}{T^2} = \frac{4\pi^2 L}{(t/n)^2} = \frac{4\pi^2 n^2 L}{t^2}$. The relative error is $\frac{\Delta g}{g} = \frac{\Delta L}{L} + 2\frac{\Delta t}{t} = \frac{0.1\text{ cm}}{20.0\text{ cm}} + 2\left(\frac{1\text{ s}}{90\text{ s}}\right) = \frac{1}{200} + \frac{2}{90} = 0.005 + 0.0222 = 0.0272$. Thus the percentage error is $0.0272 \times 100\% \approx 2.72\%$."
    },
    {
        "question": r"A physical quantity $P$ is given by $P = \frac{A^3 B^{1/2}}{C^{-4} D^{3/2}}$. The percentage errors in the measurement of $A, B, C, D$ are $1\%, 2\%, 3\%, 4\%$ respectively. The maximum percentage error in $P$ is:",
        "options": [
            r"$22\%$",
            r"$16\%$",
            r"$14\%$",
            r"$20\%$"
        ],
        "correctAnswer": 0,
        "explanation": r"Writing $P = A^3 B^{1/2} C^4 D^{-3/2}$, the maximum fractional error is $\frac{\Delta P}{P} = 3\frac{\Delta A}{A} + \frac{1}{2}\frac{\Delta B}{B} + 4\frac{\Delta C}{C} + \frac{3}{2}\frac{\Delta D}{D} = 3(1\%) + \frac{1}{2}(2\%) + 4(3\%) + \frac{3}{2}(4\%) = 3\% + 1\% + 12\% + 6\% = 22\%$."
    },
    {
        "question": r"Two resistors of resistances $R_1 = (100 \pm 3)\,\Omega$ and $R_2 = (200 \pm 4)\,\Omega$ are connected in parallel. The percentage error in the equivalent resistance is:",
        "options": [
            r"$1.83\%$",
            r"$3.5\%$",
            r"$2.33\%$",
            r"$4.17\%$"
        ],
        "correctAnswer": 0,
        "explanation": r"Equivalent resistance $R_p = \frac{R_1 R_2}{R_1 + R_2} = \frac{20000}{300} = \frac{200}{3}\,\Omega \approx 66.67\,\Omega$. Differentiating $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} \implies \frac{\Delta R_p}{R_p^2} = \frac{\Delta R_1}{R_1^2} + \frac{\Delta R_2}{R_2^2} \implies \Delta R_p = R_p^2 \left[\frac{\Delta R_1}{R_1^2} + \frac{\Delta R_2}{R_2^2}\right] = \left(\frac{200}{3}\right)^2 \left[\frac{3}{10000} + \frac{4}{40000}\right] = \frac{40000}{9} \left[\frac{3}{10000} + \frac{1}{10000}\right] = \frac{40000}{9} \times \frac{4}{10000} = \frac{16}{9} \approx 1.78\,\Omega$. Percentage error is $\frac{\Delta R_p}{R_p} \times 100\% = \frac{16/9}{200/3} \times 100\% = \frac{16}{9} \times \frac{3}{200} \times 100\% = \frac{16}{6} \% = \frac{8}{3}\% \approx 2.67\%$? Wait! Let's check $\Delta R_p / R_p = R_p(\Delta R_1/R_1^2 + \Delta R_2/R_2^2) = \frac{200}{3}\left[\frac{3}{100^2} + \frac{4}{200^2}\right] = \frac{200}{3}\left[3 \times 10^{-4} + 1 \times 10^{-4}\right] = \frac{200}{3} \times 4 \times 10^{-4} = \frac{8}{3} \times 10^{-2}$. Multiply by 100 gives $8/3\% \approx 2.67\%$! Let's fix the options."
    },
    {
        "question": r"The resistance of a wire is $R = \frac{V}{I}$, where $V = (100 \pm 5)\text{ V}$ and $I = (10 \pm 0.2)\text{ A}$. The percentage error in $R$ is:",
        "options": [
            r"$7\%$",
            r"$5\%$",
            r"$2\%$",
            r"$3\%$"
        ],
        "correctAnswer": 0,
        "explanation": r"Percentage error in $R$ is $\frac{\Delta R}{R} \times 100\% = \left(\frac{\Delta V}{V} + \frac{\Delta I}{I}\right) \times 100\% = \left(\frac{5}{100} + \frac{0.2}{10}\right) \times 100\% = (5\% + 2\%) = 7\%$."
    },
    {
        "question": r"In an experiment to determine the density of a cube, the percentage error in the measurement of mass is $1.5\%$ and in the measurement of length is $1\%$. The percentage error in the measurement of density is:",
        "options": [
            r"$4.5\%$",
            r"$2.5\%$",
            r"$3.5\%$",
            r"$5.0\%$"
        ],
        "correctAnswer": 0,
        "explanation": r"Density is $\rho = \frac{m}{V} = \frac{m}{L^3}$. The maximum relative error is $\frac{\Delta\rho}{\rho} = \frac{\Delta m}{m} + 3\frac{\Delta L}{L} = 1.5\% + 3(1\%) = 1.5\% + 3\% = 4.5\%$."
    }
]
q_list[2]["options"] = [
    r"$\frac{8}{3}\% \approx 2.67\%$",
    r"$1.83\%$",
    r"$3.50\%$",
    r"$4.17\%$"
]
q_list[2]["correctAnswer"] = 0
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Significant figures
top = "Significant figures"
q_list = [
    {
        "question": r"The mass of a box measured by a grocer's balance is $2.300\text{ kg}$. Two gold pieces of masses $20.15\text{ g}$ and $20.17\text{ g}$ are added to the box. The total mass of the box and the difference in the masses of the pieces to correct significant figures are:",
        "options": [
            r"$2.340\text{ kg}$ and $0.02\text{ g}$",
            r"$2.34\text{ kg}$ and $0.02\text{ g}$",
            r"$2.34032\text{ kg}$ and $0.020\text{ g}$",
            r"$2.340\text{ kg}$ and $0.020\text{ g}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Total mass $= 2.300\text{ kg} + 0.02015\text{ kg} + 0.02017\text{ kg} = 2.34032\text{ kg}$. Since $2.300\text{ kg}$ has least decimal places (3 decimal places), the sum is rounded to $2.340\text{ kg}$. The difference between the gold pieces is $20.17\text{ g} - 20.15\text{ g} = 0.02\text{ g}$ (2 decimal places)."
    },
    {
        "question": r"The value of $\frac{3.8 \times 0.125}{0.0053}$ reported to the correct number of significant figures is:",
        "options": [
            r"$90$",
            r"$89.6$",
            r"$89.62$",
            r"$90.0$"
        ],
        "correctAnswer": 0,
        "explanation": r"$3.8$ has 2 significant figures, $0.125$ has 3, and $0.0053$ has 2 significant figures. The calculated value is $\frac{0.475}{0.0053} \approx 89.6226$. Since the least number of significant figures in the operation is 2, the result must be rounded to 2 significant figures, which is $90$."
    },
    {
        "question": r"The number of significant figures in the numbers $0.002030$, $2.030 \times 10^4$, and $2030$ (measured with unit meter) are respectively:",
        "options": [
            r"$4, 4, 4$",
            r"$4, 4, 3$",
            r"$3, 4, 3$",
            r"$6, 4, 4$"
        ],
        "correctAnswer": 0,
        "explanation": r"In $0.002030$, leading zeros are not significant, trailing zero after decimal is significant $\implies 4$. In $2.030 \times 10^4$, all digits in the mantissa are significant $\implies 4$. In $2030\text{ m}$, since it is a physical measurement, the trailing zero is significant $\implies 4$."
    },
    {
        "question": r"A thin wire has length $L = 5.424\text{ cm}$ and radius $r = 0.024\text{ cm}$. The volume of the wire to the correct significant figures is:",
        "options": [
            r"$0.0098\text{ cm}^3$",
            r"$0.00981\text{ cm}^3$",
            r"$0.009812\text{ cm}^3$",
            r"$0.01\text{ cm}^3$"
        ],
        "correctAnswer": 0,
        "explanation": r"Volume $V = \pi r^2 L = \pi (0.024)^2 (5.424) \approx 3.14159 \times 0.000576 \times 5.424 \approx 0.009815\text{ cm}^3$. Since $r = 0.024$ has 2 significant figures, the volume must be rounded to 2 significant figures, giving $0.0098\text{ cm}^3$."
    },
    {
        "question": r"Rounding off the numbers $4.735$ and $4.745$ to three significant figures gives:",
        "options": [
            r"$4.74$ and $4.74$",
            r"$4.73$ and $4.75$",
            r"$4.74$ and $4.75$",
            r"$4.73$ and $4.74$"
        ],
        "correctAnswer": 0,
        "explanation": r"By rounding rules: if the digit to be dropped is 5 followed by zeros, the preceding digit is increased by 1 if it is odd, and left unchanged if it is even. In $4.735$, $3$ is odd $\implies 4.74$. In $4.745$, $4$ is even $\implies 4.74$."
    }
]
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Dimensional analysis and applications
top = "Dimensional analysis and applications"
q_list = [
    {
        "question": r"The velocity of water waves $v$ depends on their wavelength $\lambda$, the density of water $\rho$, and the acceleration due to gravity $g$. By dimensional analysis, the relation between these quantities is:",
        "options": [
            r"$v^2 \propto \lambda g$",
            r"$v^2 \propto \frac{g}{\lambda}$",
            r"$v^2 \propto \rho \lambda g$",
            r"$v^2 \propto \frac{\lambda g}{\rho}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $v = k \lambda^a \rho^b g^c$. Dimensions: $[L T^{-1}] = [L]^a [M L^{-3}]^b [L T^{-2}]^c = [M^b L^{a - 3b + c} T^{-2c}]$. Equating exponents: $b = 0$; $-2c = -1 \implies c = 1/2$; $a - 3(0) + 1/2 = 1 \implies a = 1/2$. Thus $v = k \sqrt{\lambda g} \implies v^2 \propto \lambda g$."
    },
    {
        "question": r"In the relation $P = \frac{\alpha}{\beta} e^{-\frac{\alpha z}{k_B T}}$, where $P$ is pressure, $z$ is distance, $k_B$ is Boltzmann's constant, and $T$ is temperature, the dimensional formula of $\beta$ is:",
        "options": [
            r"$[M^0 L^2 T^0]$",
            r"$[M L^2 T^{-2}]$",
            r"$[M L^{-1} T^{-2}]$",
            r"$[M^0 L^3 T^0]$"
        ],
        "correctAnswer": 0,
        "explanation": r"The exponent must be dimensionless: $\left[\frac{\alpha z}{k_B T}\right] = 1$. Since $[k_B T] = [M L^2 T^{-2}]$ (thermal energy), $[\alpha] = \frac{[k_B T]}{[z]} = \frac{M L^2 T^{-2}}{L} = [M L T^{-2}]$. Since $P = \frac{\alpha}{\beta}$, we have $[\beta] = \frac{[\alpha]}{[P]} = \frac{M L T^{-2}}{M L^{-1} T^{-2}} = [L^2] = [M^0 L^2 T^0]$."
    },
    {
        "question": r"The viscous force on a sphere of radius $r$ moving with velocity $v$ in a fluid of viscosity $\eta$ is $F = 6\pi \eta^a r^b v^c$. Using dimensional analysis, the values of $a, b, c$ are:",
        "options": [
            r"$1, 1, 1$",
            r"$1, 2, 1$",
            r"$2, 1, 1$",
            r"$1, 1, 2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Dimensions: $[F] = [M L T^{-2}]$, $[\eta] = [M L^{-1} T^{-1}]$, $[r] = [L]$, $[v] = [L T^{-1}]$. So $[M L T^{-2}] = [M^a L^{-a + b + c} T^{-a - c}]$. Equating exponents: $a = 1$; $-a - c = -2 \implies c = 1$; $-1 + b + 1 = 1 \implies b = 1$. Thus $a = 1, b = 1, c = 1$ (Stokes' Law)."
    },
    {
        "question": r"If the energy $E$, velocity $V$, and time $T$ are taken as fundamental units, the dimensional formula of surface tension is:",
        "options": [
            r"$[E V^{-2} T^{-2}]$",
            r"$[E V^2 T^{-2}]$",
            r"$[E V^{-1} T^{-2}]$",
            r"$[E^2 V^{-2} T^{-1}]$"
        ],
        "correctAnswer": 0,
        "explanation": r"Surface tension $S$ has dimensions $[M T^{-2}]$. Let $S \propto E^a V^b T^c = [M L^2 T^{-2}]^a [L T^{-1}]^b [T]^c = [M^a L^{2a+b} T^{-2a-b+c}]$. Equating powers: $a = 1$; $2a + b = 0 \implies b = -2$; $-2(1) - (-2) + c = -2 \implies c = -2$. Thus $[S] = [E V^{-2} T^{-2}]$."
    },
    {
        "question": r"A physical quantity $X$ is defined as $X = \frac{I F v^2}{W L^3}$, where $I$ is moment of inertia, $F$ is force, $v$ is velocity, $W$ is work, and $L$ is length. The dimension of $X$ is identical to:",
        "options": [
            r"Energy density",
            r"Pressure",
            r"Surface tension",
            r"Coefficient of viscosity"
        ],
        "correctAnswer": 0,
        "explanation": r"Substitute dimensions: $[I] = [M L^2]$, $[F] = [M L T^{-2}]$, $[v^2] = [L^2 T^{-2}]$, $[W] = [M L^2 T^{-2}]$, $[L^3] = [L^3]$. $[X] = \frac{(M L^2)(M L T^{-2})(L^2 T^{-2})}{(M L^2 T^{-2})(L^3)} = \frac{M^2 L^5 T^{-4}}{M L^5 T^{-2}} = [M L^{-1} T^{-2}]$? Wait! Numerator: $M^2 L^{2+1+2} T^{-2-2} = M^2 L^5 T^{-4}$. Denominator: $M L^5 T^{-2}$. So $[X] = [M L^0 T^{-2}] = [M T^{-2}]$, which is Surface Tension! Let's re-read: if $[X] = [M T^{-2}]$, that's Surface tension!"
    }
]
q_list[4]["options"] = [
    r"Surface tension",
    r"Energy density",
    r"Pressure",
    r"Viscosity"
]
q_list[4]["correctAnswer"] = 0
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Least count and precision
top = "Least count and precision"
q_list = [
    {
        "question": r"A vernier calliper has $1\text{ mm}$ marks on the main scale. It has $20$ equal divisions on the vernier scale which match with $16$ main scale divisions. For this calliper, the least count is:",
        "options": [
            r"$0.2\text{ mm}$",
            r"$0.05\text{ mm}$",
            r"$0.1\text{ mm}$",
            r"$0.02\text{ mm}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Least count is $1\text{ MSD} - 1\text{ VSD}$. Given $20\text{ VSD} = 16\text{ MSD} \implies 1\text{ VSD} = \frac{16}{20}\text{ MSD} = \frac{4}{5}\text{ MSD}$. Therefore, $\text{LC} = 1\text{ MSD} - \frac{4}{5}\text{ MSD} = \frac{1}{5}\text{ MSD} = \frac{1}{5}(1\text{ mm}) = 0.2\text{ mm}$."
    },
    {
        "question": r"A screw gauge has a pitch of $0.5\text{ mm}$ and $50$ divisions on its circular scale. When measuring the diameter of a wire, the main scale reads $1.5\text{ mm}$ and the 35th division of circular scale coincides with the reference line. If the zero error is $-0.03\text{ mm}$, the true diameter of the wire is:",
        "options": [
            r"$1.88\text{ mm}$",
            r"$1.82\text{ mm}$",
            r"$1.85\text{ mm}$",
            r"$1.91\text{ mm}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Least count is $\text{LC} = \frac{\text{Pitch}}{\text{No. of divisions}} = \frac{0.5\text{ mm}}{50} = 0.01\text{ mm}$. Observed reading $= \text{MSR} + \text{CSR} \times \text{LC} = 1.5\text{ mm} + 35 \times 0.01\text{ mm} = 1.85\text{ mm}$. True reading $= \text{Observed reading} - (\text{Zero Error}) = 1.85 - (-0.03) = 1.88\text{ mm}$."
    },
    {
        "question": r"In a travelling microscope, $1\text{ cm}$ on the main scale is divided into $20$ equal divisions and $50$ vernier scale divisions coincide with $49$ main scale divisions. The least count of the microscope is:",
        "options": [
            r"$0.001\text{ cm}$",
            r"$0.002\text{ cm}$",
            r"$0.005\text{ cm}$",
            r"$0.01\text{ cm}$"
        ],
        "correctAnswer": 0,
        "explanation": r"$1\text{ MSD} = \frac{1\text{ cm}}{20} = 0.05\text{ cm}$. Since $50\text{ VSD} = 49\text{ MSD} \implies 1\text{ VSD} = \frac{49}{50}\text{ MSD}$. Least count $= 1\text{ MSD} - 1\text{ VSD} = \frac{1}{50}\text{ MSD} = \frac{0.05\text{ cm}}{50} = 0.001\text{ cm}$."
    },
    {
        "question": r"A spectrometer has $60$ divisions on its vernier scale which coincide with $59$ divisions of the main scale. If the main scale is divided into degrees and each degree is divided into $3$ parts, the least count of the spectrometer is:",
        "options": [
            r"$20''$",
            r"$1'$",
            r"$30''$",
            r"$10''$"
        ],
        "correctAnswer": 0,
        "explanation": r"$1\text{ MSD} = \frac{1^\circ}{3} = 20' = 1200''$. Since $60\text{ VSD} = 59\text{ MSD}$, the least count is $\text{LC} = \frac{1\text{ MSD}}{60} = \frac{1200''}{60} = 20''$."
    },
    {
        "question": r"Which of the following measuring instruments has the highest precision?",
        "options": [
            r"An optical instrument that can measure within a fraction of a wavelength of light ($\sim 10^{-7}\text{ m}$)",
            r"A screw gauge having pitch $1\text{ mm}$ and $100$ divisions on circular scale",
            r"A vernier calliper with 20 divisions on vernier scale coinciding with 19 main scale divisions of $1\text{ mm}$",
            r"A spherometer having pitch $0.5\text{ mm}$ and $50$ divisions on circular scale"
        ],
        "correctAnswer": 0,
        "explanation": r"Precision is directly determined by the least count (smallest measurable quantity). The least counts are: vernier calliper $\sim 0.05\text{ mm} = 5 \times 10^{-5}\text{ m}$; screw gauge $\sim 0.01\text{ mm} = 10^{-5}\text{ m}$; optical instrument $\sim \lambda \sim 10^{-7}\text{ m}$. The optical instrument has the smallest least count, hence the highest precision."
    }
]
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# ==========================================
# CHAPTER 2: Kinematics (6 topics x 5 = 30 Qs)
# ==========================================
ch = "Kinematics"

# Topic 1: Motion in a straight line/plane
top = "Motion in a straight line/plane"
q_list = [
    {
        "question": r"A particle moves along the x-axis with acceleration $a = -k v^2$, where $k$ is a positive constant and $v$ is its velocity. If the initial velocity is $v_0$ at $x = 0$, the velocity of the particle after travelling a distance $x$ is:",
        "options": [
            r"$v_0 e^{-kx}$",
            r"$v_0 e^{kx}$",
            r"$\frac{v_0}{1 + k x v_0}$",
            r"$v_0 - k x$"
        ],
        "correctAnswer": 0,
        "explanation": r"We know acceleration can be written as $a = v\frac{dv}{dx}$. Given $v\frac{dv}{dx} = -k v^2 \implies \frac{dv}{v} = -k dx$. Integrating: $\int_{v_0}^v \frac{dv}{v} = -k \int_0^x dx \implies \ln\left(\frac{v}{v_0}\right) = -kx \implies v = v_0 e^{-kx}$."
    },
    {
        "question": r"The position vector of a particle moving in the xy-plane is given by $\vec{r}(t) = (a\cos\omega t)\hat{i} + (b\sin\omega t)\hat{j}$. The trajectory of the particle and its acceleration vector $\vec{a}$ satisfy:",
        "options": [
            r"Trajectory is an ellipse and $\vec{a} = -\omega^2 \vec{r}$",
            r"Trajectory is a circle and $\vec{a} = -\omega^2 \vec{r}$",
            r"Trajectory is an ellipse and $\vec{a} = \omega^2 \vec{r}$",
            r"Trajectory is a parabola and $\vec{a} \perp \vec{r}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Here $x = a\cos\omega t \implies \frac{x}{a} = \cos\omega t$, and $y = b\sin\omega t \implies \frac{y}{b} = \sin\omega t$. Squaring and adding: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, which is an ellipse. Differentiating twice: $\vec{v} = -a\omega\sin\omega t\,\hat{i} + b\omega\cos\omega t\,\hat{j}$, and $\vec{a} = -a\omega^2\cos\omega t\,\hat{i} - b\omega^2\sin\omega t\,\hat{j} = -\omega^2 \vec{r}$."
    },
    {
        "question": r"A particle moves in a straight line such that its displacement $x$ at time $t$ satisfies $t = \alpha x^2 + \beta x$, where $\alpha$ and $\beta$ are constants. The acceleration of the particle in terms of velocity $v$ is:",
        "options": [
            r"$-2\alpha v^3$",
            r"$2\alpha v^3$",
            r"$-2\beta v^2$",
            r"$-2\alpha v^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating $t = \alpha x^2 + \beta x$ with respect to $t$: $1 = (2\alpha x + \beta)\frac{dx}{dt} = (2\alpha x + \beta)v \implies v = (2\alpha x + \beta)^{-1}$. Differentiating again: $a = \frac{dv}{dt} = -(2\alpha x + \beta)^{-2} \cdot 2\alpha \frac{dx}{dt} = -v^2 \cdot 2\alpha v = -2\alpha v^3$."
    },
    {
        "question": r"A body starts from rest from the origin with an acceleration $\vec{a} = (2t)\hat{i} + (3t^2)\hat{j}\text{ m/s}^2$. The distance of the particle from the origin at $t = 2\text{ s}$ is:",
        "options": [
            r"$\sqrt{\frac{160}{9}}\text{ m} \approx 4.22\text{ m}$",
            r"$4\text{ m}$",
            r"$\frac{16}{3}\text{ m}$",
            r"$6\text{ m}$"
        ],
        "correctAnswer": 0,
        "explanation": r"$\vec{v}(t) = \int \vec{a} dt = t^2 \hat{i} + t^3 \hat{j}$. The position vector is $\vec{r}(t) = \int \vec{v} dt = \frac{t^3}{3}\hat{i} + \frac{t^4}{4}\hat{j}$. At $t = 2\text{ s}$: $\vec{r}(2) = \frac{8}{3}\hat{i} + \frac{16}{4}\hat{j} = \frac{8}{3}\hat{i} + 4\hat{j}$. The distance is $|\vec{r}(2)| = \sqrt{\left(\frac{8}{3}\right)^2 + 4^2} = \sqrt{\frac{64}{9} + 16} = \sqrt{\frac{208}{9}} = \frac{4\sqrt{13}}{3}\text{ m}$."
    },
    {
        "question": r"The velocity-displacement graph of a particle moving in a straight line is a circle centered at $(x_0, 0)$ with radius $R$. The acceleration of the particle when $x = x_0$ is:",
        "options": [
            r"$0$",
            r"$R$",
            r"$-R$",
            r"$R^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The circle equation is $(x - x_0)^2 + v^2 = R^2$. Differentiating with respect to $x$: $2(x - x_0) + 2v\frac{dv}{dx} = 0 \implies v\frac{dv}{dx} = -(x - x_0)$. Since acceleration is $a = v\frac{dv}{dx}$, we have $a = -(x - x_0)$. At $x = x_0$, $a = -(x_0 - x_0) = 0$."
    }
]
q_list[3]["options"] = [
    r"$\frac{4\sqrt{13}}{3}\text{ m}$",
    r"$\frac{8}{3}\text{ m}$",
    r"$4\text{ m}$",
    r"$5\text{ m}$"
]
q_list[3]["correctAnswer"] = 0
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Projectile motion
top = "Projectile motion"
q_list = [
    {
        "question": r"A projectile is fired with velocity $u$ at an angle $\theta$ with the horizontal. The radius of curvature of its trajectory at the highest point is:",
        "options": [
            r"$\frac{u^2 \cos^2\theta}{g}$",
            r"$\frac{u^2 \sin^2\theta}{g}$",
            r"$\frac{u^2}{g}$",
            r"$\frac{u^2 \cos\theta}{g}$"
        ],
        "correctAnswer": 0,
        "explanation": r"At the highest point, velocity is purely horizontal: $v = u\cos\theta$. The normal acceleration is purely vertical: $a_n = g$. By definition of radius of curvature, $R = \frac{v^2}{a_n} = \frac{(u\cos\theta)^2}{g} = \frac{u^2 \cos^2\theta}{g}$."
    },
    {
        "question": r"A ball is projected from a point on the ground with speed $u$ at an angle $\theta$. It clears two vertical poles of equal height $h$ separated by a horizontal distance $d$. If the total time of flight is $T$, then $h$ is given by:",
        "options": [
            r"$\frac{g}{8}(T^2 - t_d^2)$, where $t_d = \frac{d}{u\cos\theta}$",
            r"$\frac{g}{4}(T^2 - t_d^2)$",
            r"$\frac{g T^2}{8}$",
            r"$\frac{u^2 \sin^2\theta}{2g} - \frac{gd^2}{8 u^2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $t_1$ and $t_2$ be the times when the projectile is at height $h$. Then $t_1 + t_2 = T$ and $t_1 t_2 = \frac{2h}{g}$. The time interval between the two poles is $t_2 - t_1 = \frac{d}{u\cos\theta} = t_d$. Using $(t_2 - t_1)^2 = (t_1 + t_2)^2 - 4t_1 t_2 \implies t_d^2 = T^2 - 4\left(\frac{2h}{g}\right) = T^2 - \frac{8h}{g} \implies \frac{8h}{g} = T^2 - t_d^2 \implies h = \frac{g}{8}(T^2 - t_d^2)$."
    },
    {
        "question": r"A projectile has a range $R$ and maximum height $H$. If the angle of projection is increased such that the range becomes $R/2$ without changing initial speed, then the new maximum height is:",
        "options": [
            r"$H + \frac{\sqrt{3}}{4}R$ (or determined by new angle)",
            r"$H\left(1 + \frac{\sqrt{3}}{2}\right)$",
            r"$\frac{u^2}{2g}\sin^2\theta'$",
            r"Cannot be determined"
        ],
        "correctAnswer": 2,
        "explanation": r"Range is $R = \frac{u^2 \sin 2\theta}{g}$ and $H = \frac{u^2 \sin^2\theta}{2g}$. For new range $R' = R/2$, $\sin 2\theta' = \frac{1}{2}\sin 2\theta$. The new maximum height is $H' = \frac{u^2 \sin^2\theta'}{2g}$."
    },
    {
        "question": r"The speed of a projectile at its maximum height is $\frac{\sqrt{3}}{2}$ times its initial speed $u$. The horizontal range of the projectile is:",
        "options": [
            r"$\frac{\sqrt{3} u^2}{2g}$",
            r"$\frac{u^2}{2g}$",
            r"$\frac{\sqrt{3} u^2}{g}$",
            r"$\frac{u^2}{g}$"
        ],
        "correctAnswer": 0,
        "explanation": r"At maximum height, speed is $u\cos\theta = \frac{\sqrt{3}}{2}u \implies \cos\theta = \frac{\sqrt{3}}{2} \implies \theta = 30^\circ$. The horizontal range is $R = \frac{u^2 \sin(2 \times 30^\circ)}{g} = \frac{u^2 \sin 60^\circ}{g} = \frac{\sqrt{3} u^2}{2g}$."
    },
    {
        "question": r"A particle is projected from an inclined plane of inclination $\beta$ with speed $u$ at an angle $\alpha$ with the incline. The range up the incline is maximum when $\alpha$ is:",
        "options": [
            r"$\frac{\pi}{4} - \frac{\beta}{2}$",
            r"$\frac{\pi}{4} + \frac{\beta}{2}$",
            r"$\frac{\pi}{4}$",
            r"$\frac{\pi}{2} - \beta$"
        ],
        "correctAnswer": 0,
        "explanation": r"The range on an inclined plane of angle $\beta$ is $R = \frac{u^2}{g\cos^2\beta}[\sin(2\alpha + \beta) - \sin\beta]$. This is maximized when $\sin(2\alpha + \beta) = 1 \implies 2\alpha + \beta = \frac{\pi}{2} \implies \alpha = \frac{\pi}{4} - \frac{\beta}{2}$."
    }
]
q_list[2] = {
    "question": r"If $R$ is the horizontal range and $H$ is the maximum height of a projectile, then the ratio $\frac{R^2}{8H} + 2H$ equals:",
    "options": [
        r"$\frac{u^2}{g}$",
        r"$\frac{2u^2}{g}$",
        r"$\frac{u^2}{2g}$",
        r"$\frac{4u^2}{g}$"
    ],
    "correctAnswer": 0,
    "explanation": r"Using $R = \frac{2u^2 \sin\theta\cos\theta}{g}$ and $H = \frac{u^2 \sin^2\theta}{2g}$: then $\frac{R^2}{8H} = \frac{4u^4 \sin^2\theta\cos^2\theta / g^2}{8(u^2 \sin^2\theta / 2g)} = \frac{u^2 \cos^2\theta}{g}$. And $2H = \frac{u^2 \sin^2\theta}{g}$. Adding them: $\frac{u^2 \cos^2\theta}{g} + \frac{u^2 \sin^2\theta}{g} = \frac{u^2}{g}(\cos^2\theta + \sin^2\theta) = \frac{u^2}{g}$."
}
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Relative velocity
top = "Relative velocity"
q_list = [
    {
        "question": r"Rain is falling vertically with a speed of $30\text{ m/s}$. A woman rides a bicycle with a speed of $10\text{ m/s}$ in the north to south direction. The direction in which she should hold her umbrella to protect herself from rain is:",
        "options": [
            r"$\tan^{-1}\left(\frac{1}{3}\right)$ south of vertical",
            r"$\tan^{-1}\left(\frac{1}{3}\right)$ north of vertical",
            r"$\tan^{-1}(3)$ south of vertical",
            r"$\tan^{-1}(3)$ north of vertical"
        ],
        "correctAnswer": 0,
        "explanation": r"$\vec{v}_R = -30\hat{j}$, $\vec{v}_W = -10\hat{k}$ (towards south). Relative velocity of rain with respect to woman is $\vec{v}_{RW} = \vec{v}_R - \vec{v}_W = -30\hat{j} - (-10\hat{k}) = -30\hat{j} + 10\hat{k}$. The rain appears to come from south towards north, so she should tilt her umbrella towards the south at an angle $\theta = \tan^{-1}\left(\frac{10}{30}\right) = \tan^{-1}\left(\frac{1}{3}\right)$ with the vertical."
    },
    {
        "question": r"A river of width $D$ flows with speed $u$. A swimmer can swim with speed $v$ ($v > u$) relative to water. The minimum time to cross the river and the time to cross the river along the shortest path are respectively:",
        "options": [
            r"$\frac{D}{v}$ and $\frac{D}{\sqrt{v^2 - u^2}}$",
            r"$\frac{D}{\sqrt{v^2 - u^2}}$ and $\frac{D}{v}$",
            r"$\frac{D}{v+u}$ and $\frac{D}{v-u}$",
            r"$\frac{D}{v}$ and $\frac{D}{v - u}$"
        ],
        "correctAnswer": 0,
        "explanation": r"For minimum time, the swimmer swims directly perpendicular to the bank, so $t_{\min} = \frac{D}{v}$. For the shortest path (straight across), the resultant velocity is perpendicular to the bank with magnitude $\sqrt{v^2 - u^2}$, so $t_{\text{shortest}} = \frac{D}{\sqrt{v^2 - u^2}}$."
    },
    {
        "question": r"Two cars $A$ and $B$ are moving on perpendicular roads towards the intersection with speeds $v_1 = 30\text{ km/h}$ and $v_2 = 40\text{ km/h}$. At $t = 0$, their distances from the intersection are $x_1 = 4\text{ km}$ and $x_2 = 3\text{ km}$. The shortest distance between them is:",
        "options": [
            r"$0\text{ km}$ (they collide)",
            r"$1\text{ km}$",
            r"$2\text{ km}$",
            r"$0.5\text{ km}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Time taken by car A to reach intersection is $t_A = \frac{x_1}{v_1} = \frac{4}{30} = \frac{2}{15}\text{ hr} = 8\text{ min}$. Time taken by car B to reach intersection is $t_B = \frac{x_2}{v_2} = \frac{3}{40}\text{ hr} = 4.5\text{ min}$. Since $t_A \neq t_B$, they don't collide! Let distance squared be $S^2(t) = (4 - 30t)^2 + (3 - 40t)^2 = 16 - 240t + 900t^2 + 9 - 240t + 1600t^2 = 2500t^2 - 480t + 25$. Differentiating: $5000t - 480 = 0 \implies t = \frac{480}{5000} = \frac{24}{250} = \frac{12}{125}\text{ hr}$. Minimum $S^2 = 25 - \frac{(480)^2}{4(2500)} = 25 - \frac{230400}{10000} = 25 - 23.04 = 1.96\text{ km}^2$. Thus the shortest distance is $\sqrt{1.96} = 1.4\text{ km}$."
    },
    {
        "question": r"A ship is steaming due east at $12\text{ km/h}$. A second ship $B$, $10\text{ km}$ north of $A$, steams due south at $16\text{ km/h}$. The shortest distance between them is:",
        "options": [
            r"$6\text{ km}$",
            r"$8\text{ km}$",
            r"$5\text{ km}$",
            r"$4\text{ km}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Take $A$ as origin moving at $\vec{v}_A = 12\hat{i}$. Ship $B$ starts at $(0, 10)$ with velocity $\vec{v}_B = -16\hat{j}$. Relative velocity of $B$ with respect to $A$ is $\vec{v}_{BA} = -16\hat{j} - 12\hat{i} = -12\hat{i} - 16\hat{j}$. The magnitude is $|\vec{v}_{BA}| = \sqrt{12^2 + 16^2} = 20\text{ km/h}$. The angle of $\vec{v}_{BA}$ with negative x-axis is $\theta$ where $\sin\theta = \frac{12}{20} = \frac{3}{5}$ and $\cos\theta = \frac{16}{20} = \frac{4}{5}$. The shortest distance from $A$ to the line of relative motion is $d_{\min} = 10\sin\alpha = 10\left(\frac{12}{20}\right) = 6\text{ km}$."
    },
    {
        "question": r"An aeroplane flies from point $A$ to point $B$ and back in a straight line. If wind of speed $u$ blows perpendicular to $AB$ and the plane flies with speed $v$ relative to air, the total time for the round trip of distance $2L$ is:",
        "options": [
            r"$\frac{2L}{\sqrt{v^2 - u^2}}$",
            r"$\frac{2L}{v}$",
            r"$\frac{2Lv}{v^2 - u^2}$",
            r"$\frac{2L}{v - u}$"
        ],
        "correctAnswer": 0,
        "explanation": r"To fly along the line $AB$ with crosswind $u$, the plane must steer into the wind so that the resultant velocity is along $AB$: $v_{\text{res}} = \sqrt{v^2 - u^2}$. Both on the forward trip and the return trip, the speed along $AB$ is $\sqrt{v^2 - u^2}$. Thus the total time is $t = \frac{L}{\sqrt{v^2 - u^2}} + \frac{L}{\sqrt{v^2 - u^2}} = \frac{2L}{\sqrt{v^2 - u^2}}$."
    }
]
q_list[2] = {
    "question": r"A man can swim with a speed of $4\text{ km/h}$ in still water. He crosses a river of width $1\text{ km}$ that flows at $3\text{ km/h}$. If he reaches the opposite bank directly opposite to his starting point, the time he takes is:",
    "options": [
        r"$\frac{1}{\sqrt{7}}\text{ hr}$",
        r"$\frac{1}{5}\text{ hr}$",
        r"$\frac{1}{4}\text{ hr}$",
        r"$\frac{1}{3}\text{ hr}$"
    ],
    "correctAnswer": 0,
    "explanation": r"To reach directly opposite, the resultant velocity must be perpendicular to the river flow: $v_{\text{res}} = \sqrt{v_s^2 - v_r^2} = \sqrt{4^2 - 3^2} = \sqrt{16 - 9} = \sqrt{7}\text{ km/h}$. The time taken is $t = \frac{d}{v_{\text{res}}} = \frac{1}{\sqrt{7}}\text{ hr}$."
}
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Uniform circular motion
top = "Uniform circular motion"
q_list = [
    {
        "question": r"In uniform circular motion of radius $R$ with constant speed $v$, the magnitude of the average acceleration over a half-revolution is:",
        "options": [
            r"$\frac{2v^2}{\pi R}$",
            r"$\frac{v^2}{R}$",
            r"$\frac{v^2}{\pi R}$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"In half a revolution, the velocity vector reverses direction: $\Delta\vec{v} = \vec{v}_f - \vec{v}_i = v - (-v) = 2v$. The time taken for half a revolution is $\Delta t = \frac{\pi R}{v}$. The magnitude of average acceleration is $a_{\text{avg}} = \frac{|\Delta\vec{v}|}{\Delta t} = \frac{2v}{\pi R / v} = \frac{2v^2}{\pi R}$."
    },
    {
        "question": r"A particle moves in a circle of radius $5\text{ cm}$ with constant speed and time period $0.2\pi\text{ s}$. The acceleration of the particle is:",
        "options": [
            r"$5\text{ m/s}^2$",
            r"$25\text{ m/s}^2$",
            r"$0.5\text{ m/s}^2$",
            r"$10\text{ m/s}^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Angular velocity is $\omega = \frac{2\pi}{T} = \frac{2\pi}{0.2\pi} = 10\text{ rad/s}$. Radius is $R = 5\text{ cm} = 0.05\text{ m}$. The centripetal acceleration is $a_c = \omega^2 R = (10)^2 \times 0.05 = 100 \times 0.05 = 5\text{ m/s}^2$."
    },
    {
        "question": r"A particle moves along a circular path of radius $R$ with speed $v = \alpha\sqrt{s}$, where $\alpha$ is a constant and $s$ is the distance covered. The total acceleration of the particle after covering distance $s$ is:",
        "options": [
            r"$\frac{\alpha^2}{2}\sqrt{1 + \frac{4s^2}{R^2}}$",
            r"$\frac{\alpha^2 s}{R}$",
            r"$\frac{\alpha^2}{2}$",
            r"$\alpha^2 \sqrt{1 + \frac{s^2}{R^2}}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Tangential acceleration is $a_t = v\frac{dv}{ds} = (\alpha\sqrt{s})\left(\frac{\alpha}{2\sqrt{s}}\right) = \frac{\alpha^2}{2}$. Centripetal acceleration is $a_c = \frac{v^2}{R} = \frac{\alpha^2 s}{R}$. Total acceleration is $a = \sqrt{a_t^2 + a_c^2} = \sqrt{\left(\frac{\alpha^2}{2}\right)^2 + \left(\frac{\alpha^2 s}{R}\right)^2} = \frac{\alpha^2}{2}\sqrt{1 + \frac{4s^2}{R^2}}$."
    },
    {
        "question": r"For a particle executing uniform circular motion, which of the following remains constant?",
        "options": [
            r"Kinetic energy",
            r"Linear momentum",
            r"Acceleration",
            r"Velocity"
        ],
        "correctAnswer": 0,
        "explanation": r"In uniform circular motion, the speed $v$ is constant, so kinetic energy $\frac{1}{2}mv^2$ is constant. Velocity, acceleration, and linear momentum continuously change their directions, so they are not constant."
    },
    {
        "question": r"A simple pendulum of length $L$ oscillates in a vertical circle. If the bob has speed $v$ when the string makes an angle $\theta$ with the vertical, the total acceleration of the bob is:",
        "options": [
            r"$\sqrt{\left(\frac{v^2}{L}\right)^2 + (g\sin\theta)^2}$",
            r"$\frac{v^2}{L} + g\sin\theta$",
            r"$\frac{v^2}{L} - g\cos\theta$",
            r"$\sqrt{\left(\frac{v^2}{L}\right)^2 + (g\cos\theta)^2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The radial (centripetal) acceleration is $a_r = \frac{v^2}{L}$ towards the pivot. The tangential acceleration is $a_t = g\sin\theta$ along the tangent. Since they are perpendicular, the net acceleration is $a = \sqrt{a_r^2 + a_t^2} = \sqrt{\left(\frac{v^2}{L}\right)^2 + (g\sin\theta)^2}$."
    }
]
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Uniformly accelerated motion and equations
top = "Uniformly accelerated motion and equations"
q_list = [
    {
        "question": r"A bullet fired into a fixed target loses half of its velocity after penetrating $3\text{ cm}$. How much further will it penetrate before coming to rest, assuming constant resistance?",
        "options": [
            r"$1\text{ cm}$",
            r"$1.5\text{ cm}$",
            r"$2\text{ cm}$",
            r"$0.75\text{ cm}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using $v^2 = u^2 - 2as$: after $3\text{ cm}$, $(u/2)^2 = u^2 - 2a(3) \implies \frac{u^2}{4} = u^2 - 6a \implies 6a = \frac{3u^2}{4} \implies a = \frac{u^2}{8}$. For coming to rest from $u/2$: $0^2 = (u/2)^2 - 2as' \implies \frac{u^2}{4} = 2\left(\frac{u^2}{8}\right)s' = \frac{u^2}{4}s' \implies s' = 1\text{ cm}$."
    },
    {
        "question": r"A body travels $200\text{ cm}$ in the first $2\text{ s}$ and $220\text{ cm}$ in the next $4\text{ s}$ with constant acceleration. The velocity at the end of the 7th second from the start is:",
        "options": [
            r"$10\text{ cm/s}$",
            r"$15\text{ cm/s}$",
            r"$20\text{ cm/s}$",
            r"$5\text{ cm/s}$"
        ],
        "correctAnswer": 0,
        "explanation": r"First 2 s: $s_1 = 200 = u(2) + \frac{1}{2}a(2)^2 = 2u + 2a \implies u + a = 100$. In total $6\text{ s}$, total distance is $200 + 220 = 420\text{ cm}$: $s_2 = 420 = u(6) + \frac{1}{2}a(6)^2 = 6u + 18a \implies u + 3a = 70$. Subtracting: $2a = -30 \implies a = -15\text{ cm/s}^2$. Then $u = 100 - (-15) = 115\text{ cm/s}$. Velocity at $t = 7\text{ s}$ is $v = u + at = 115 + (-15)(7) = 115 - 105 = 10\text{ cm/s}$."
    },
    {
        "question": r"A ball dropped from the top of a tower covers a distance $h$ in the last second of its journey. If the total height of the tower is $H$, then $H$ is:",
        "options": [
            r"$\frac{(h + g/2)^2}{2g}$",
            r"$\frac{(h - g/2)^2}{2g}$",
            r"$\frac{h^2}{2g}$",
            r"$\frac{h^2}{g}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Distance in $n\text{th}$ second is $s_n = u + \frac{g}{2}(2n - 1) = \frac{g}{2}(2n - 1) = h \implies 2n - 1 = \frac{2h}{g} \implies n = \frac{h}{g} + \frac{1}{2} = \frac{h + g/2}{g}$. Total height is $H = \frac{1}{2}g n^2 = \frac{1}{2}g \left(\frac{h + g/2}{g}\right)^2 = \frac{(h + g/2)^2}{2g}$."
    },
    {
        "question": r"A car accelerates from rest at a constant rate $\alpha$ for some time, after which it decelerates at a constant rate $\beta$ to come to rest. If the total time elapsed is $T$, then the maximum velocity attained by the car is:",
        "options": [
            r"$\frac{\alpha\beta}{\alpha + \beta} T$",
            r"$\frac{\alpha + \beta}{\alpha\beta} T$",
            r"$\frac{\alpha\beta}{2(\alpha + \beta)} T$",
            r"$\sqrt{\alpha\beta} T$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $t_1$ be acceleration time and $t_2$ be deceleration time. $v_{\max} = \alpha t_1 = \beta t_2$. So $t_1 = v_{\max}/\alpha$ and $t_2 = v_{\max}/\beta$. Total time $T = t_1 + t_2 = v_{\max}\left(\frac{1}{\alpha} + \frac{1}{\beta}\right) = v_{\max}\left(\frac{\alpha + \beta}{\alpha\beta}\right) \implies v_{\max} = \frac{\alpha\beta}{\alpha + \beta} T$."
    },
    {
        "question": r"The distances traversed by a particle moving with constant acceleration in successive equal intervals of time $\tau$ are in the ratio:",
        "options": [
            r"$1 : 3 : 5 : 7 : \cdots$ (if starting from rest)",
            r"$1 : 2 : 3 : 4 : \cdots$",
            r"$1 : 4 : 9 : 16 : \cdots$",
            r"$1 : 1 : 1 : 1 : \cdots$"
        ],
        "correctAnswer": 0,
        "explanation": r"Galileo's odd-number rule states that for a body starting from rest and moving with uniform acceleration, the distances traversed in successive equal intervals of time are in the ratio of odd numbers: $1 : 3 : 5 : 7 : \cdots$."
    }
]
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

# Topic 6: Graphical analysis of motion (x-t, v-t graphs)
top = "Graphical analysis of motion (x-t, v-t graphs)"
q_list = [
    {
        "question": r"The velocity-time graph of a linear motion is a triangle with base $T$ along the time axis and height $v_0$. The average velocity of the particle during time $T$ is:",
        "options": [
            r"$\frac{v_0}{2}$",
            r"$v_0$",
            r"$\frac{v_0}{3}$",
            r"$\frac{2v_0}{3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Total displacement is the area under the v-t graph: $S = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} T v_0$. Average velocity is $v_{\text{avg}} = \frac{S}{T} = \frac{\frac{1}{2}Tv_0}{T} = \frac{v_0}{2}$."
    },
    {
        "question": r"An acceleration-time ($a-t$) graph consists of a straight line connecting $(0, a_0)$ to $(t_0, 0)$. If the initial velocity at $t = 0$ is zero, the velocity at $t = t_0$ is:",
        "options": [
            r"$\frac{1}{2} a_0 t_0$",
            r"$a_0 t_0$",
            r"$\frac{1}{3} a_0 t_0$",
            r"$2 a_0 t_0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Change in velocity is the area under the $a-t$ graph: $\Delta v = v(t_0) - v(0) = \text{Area of triangle} = \frac{1}{2} a_0 t_0$. Since $v(0) = 0$, $v(t_0) = \frac{1}{2} a_0 t_0$."
    },
    {
        "question": r"The slope of the tangent to the displacement-time graph at any instant gives the:",
        "options": [
            r"Instantaneous velocity",
            r"Instantaneous acceleration",
            r"Average speed",
            r"Jerk"
        ],
        "correctAnswer": 0,
        "explanation": r"By definition of derivative, $\frac{dx}{dt}$ is the slope of the tangent to the displacement-time graph, which represents the instantaneous velocity."
    },
    {
        "question": r"A particle moves such that its $v-x$ graph is a straight line passing through $(0, v_0)$ and $(x_0, 0)$. The $a-x$ graph of this motion is:",
        "options": [
            r"A straight line with positive slope and negative intercept",
            r"A parabola opening upwards",
            r"A hyperbola",
            r"A straight line with negative slope"
        ],
        "correctAnswer": 0,
        "explanation": r"Equation of line in $v-x$ graph: $v = -\frac{v_0}{x_0}x + v_0$. Acceleration is $a = v\frac{dv}{dx} = \left(-\frac{v_0}{x_0}x + v_0\right)\left(-\frac{v_0}{x_0}\right) = \frac{v_0^2}{x_0^2}x - \frac{v_0^2}{x_0}$. This is of the form $a = mx - c$ with $m = \frac{v_0^2}{x_0^2} > 0$ and intercept $-\frac{v_0^2}{x_0} < 0$, which is a straight line with positive slope and negative intercept."
    },
    {
        "question": r"If the area under a force-displacement graph between $x_1$ and $x_2$ is $W$, then $W$ represents:",
        "options": [
            r"The change in kinetic energy of the particle",
            r"The momentum of the particle",
            r"The impulse delivered",
            r"The power delivered"
        ],
        "correctAnswer": 0,
        "explanation": r"The area under the $F-x$ curve is $\int_{x_1}^{x_2} F dx = W$, which is the work done by the force. By the Work-Energy Theorem, this equals the change in kinetic energy of the particle: $W = \Delta K$."
    }
]
for q in q_list:
    batch1_p1.append({"chapter": ch, "subtopic": top, **q})

normalized = []
for item in batch1_p1:
    normalized.append({
        "chapter": item["chapter"],
        "subtopic": item["subtopic"],
        "subTopic": item["subtopic"],
        "topic": item["chapter"],
        "subject": "Physics",
        "examType": "JEE Mains",
        "exam": "JEE Main",
        "type": "MCQ",
        "questionType": "MCQ (Multiple Choice Question)",
        "difficulty": "Difficult",
        "targetAudience": "Top 100 Students",
        "source": "JEE Mains Top 100 Analysis",
        "marks": 4,
        "negativeMarks": 1,
        "question": item["question"],
        "options": item["options"],
        "correctAnswer": item["correctAnswer"],
        "correctOption": item["correctAnswer"],
        "explanation": item["explanation"],
        "solution": item["explanation"]
    })

with open("scripts/physics_top100/phys_b1_p1.json", "w") as f:
    json.dump(normalized, f, indent=2)

print(f"Generated {len(normalized)} questions for Physics Batch 1 Part 1.")
