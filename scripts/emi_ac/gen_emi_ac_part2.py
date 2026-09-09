import json
import os

# Subtopics:
# 3. Self and mutual inductance (45 MCQs)
# 4. Transformers and AC generator (45 MCQs)

questions = []

def make_q(subtopic, text, options, correct_idx, explanation, difficulty="Medium"):
    return {
        "question": text,
        "options": options,
        "correctAnswer": correct_idx,
        "explanation": explanation,
        "difficulty": difficulty,
        "chapter": "Electromagnetic Induction and Alternating Currents",
        "subTopic": subtopic,
        "marks": 4,
        "negativeMarks": 1,
        "type": "MCQ"
    }

# ==========================================
# 3. Self and mutual inductance (45 MCQs)
# ==========================================

inductance_data = [
    (
        "The self-inductance $L$ of a long solenoid of length $l$, area of cross-section $A$, and total number of turns $N$ in vacuum is given by:",
        ["$\\frac{\\mu_0 N^2 A}{l}$", "$\\frac{\\mu_0 N A}{l}$", "$\\frac{\\mu_0 N^2 A}{l^2}$", "$\\mu_0 N^2 A l$"],
        0,
        "Magnetic field inside a solenoid is $B = \\mu_0 n I = \\mu_0 \\frac{N}{l} I$. Total magnetic flux is $\\Phi = N B A = N \\left(\\mu_0 \\frac{N}{l} I\\right) A = \\frac{\\mu_0 N^2 A}{l} I$. Since $\\Phi = L I$, the self-inductance is $L = \\frac{\\mu_0 N^2 A}{l}$."
    ),
    (
        "If the number of turns per unit length in a long solenoid is doubled while its length and cross-sectional area remain unchanged, its self-inductance becomes:",
        ["4 times", "2 times", "Half", "16 times"],
        0,
        "Self-inductance of a solenoid is $L = \\mu_0 n^2 A l$, where $n$ is turns per unit length. Since $L \\propto n^2$, doubling $n$ increases $L$ by a factor of $2^2 = 4$."
    ),
    (
        "An average induced EMF of $200\\text{ V}$ is produced in an inductor when the current in it changes from $5\\text{ A}$ to $0\\text{ A}$ at a uniform rate in $0.1\\text{ s}$. The self-inductance of the inductor is:",
        ["$4.0\\text{ H}$", "$2.0\\text{ H}$", "$0.4\\text{ H}$", "$40\\text{ H}$"],
        0,
        "Induced back EMF is $|\\mathcal{E}| = L \\left|\\frac{dI}{dt}\\right|$. Here $|\\Delta I| = 5\\text{ A}$, $\\Delta t = 0.1\\text{ s}$. Thus $200 = L \\times \\frac{5}{0.1} = 50 L \\implies L = \\frac{200}{50} = 4.0\\text{ H}$."
    ),
    (
        "The magnetic energy stored in an inductor of inductance $2\\text{ H}$ carrying a steady current of $4\\text{ A}$ is:",
        ["$16\\text{ J}$", "$8\\text{ J}$", "$32\\text{ J}$", "$4\\text{ J}$"],
        0,
        "Magnetic energy stored in an inductor is $U = \\frac{1}{2} L I^2 = \\frac{1}{2} \\times 2 \\times (4)^2 = 16\\text{ J}$."
    ),
    (
        "Two coils of self-inductances $L_1 = 4\\text{ mH}$ and $L_2 = 9\\text{ mH}$ are placed close together such that the magnetic flux of one completely links the other (perfect coupling, $k = 1$). Their mutual inductance is:",
        ["$6\\text{ mH}$", "$13\\text{ mH}$", "$36\\text{ mH}$", "$2.5\\text{ mH}$"],
        0,
        "Mutual inductance is related to self-inductances by $M = k \\sqrt{L_1 L_2}$. For perfect coupling $k = 1$, so $M = \\sqrt{4 \\times 9} = \\sqrt{36} = 6\\text{ mH}$."
    ),
    (
        "The coupling coefficient $k$ between two magnetically coupled coils of inductances $L_1$ and $L_2$ with mutual inductance $M$ always satisfies:",
        ["$0 \\le k \\le 1$", "$k > 1$", "$-1 \\le k \\le 0$", "$k = 2$"],
        0,
        "The coupling coefficient $k = \\frac{M}{\\sqrt{L_1 L_2}}$ represents the fraction of magnetic flux linked between the two coils. Since the linked flux cannot exceed the total produced flux, $0 \\le k \\le 1$."
    ),
    (
        "Two inductors of inductances $L_1$ and $L_2$ are connected in series such that their magnetic fluxes aid each other with mutual inductance $M$. The equivalent inductance of the combination is:",
        ["$L_1 + L_2 + 2M$", "$L_1 + L_2 - 2M$", "$L_1 + L_2 + M$", "$\\frac{L_1 L_2 - M^2}{L_1 + L_2}$"],
        0,
        "When two coupled inductors are connected in series aiding, each carries current $i$ and the total flux is $\\Phi = (L_1 i + M i) + (L_2 i + M i) = (L_1 + L_2 + 2M) i$. Thus $L_{\\text{eq}} = L_1 + L_2 + 2M$."
    ),
    (
        "When the same two inductors are connected in series opposing (fluxes cancel each other), the equivalent inductance is:",
        ["$L_1 + L_2 - 2M$", "$L_1 + L_2 + 2M$", "$L_1 + L_2 - M$", "$L_1 - L_2$"],
        0,
        "In series opposing, the mutual flux opposes the self flux in each coil: $\\Phi = (L_1 i - M i) + (L_2 i - M i) = (L_1 + L_2 - 2M) i$. Thus $L_{\\text{eq}} = L_1 + L_2 - 2M$."
    ),
    (
        "A solenoid of length $50\\text{ cm}$ and radius $2\\text{ cm}$ has 500 turns. If a soft iron core of relative permeability $\\mu_r = 1000$ is inserted inside it, its self-inductance increases by a factor of:",
        ["1000", "500", "2000", "100"],
        0,
        "The self-inductance of a solenoid filled with magnetic material of relative permeability $\\mu_r$ is $L = \\mu_r L_0$. Therefore, inserting the soft iron core increases the self-inductance by a factor of $\\mu_r = 1000$."
    ),
    (
        "The SI unit of magnetic energy density in a region of magnetic field $B$ in vacuum is $\\text{J/m}^3$. Its expression in terms of $B$ and $\\mu_0$ is:",
        ["$\\frac{B^2}{2\\mu_0}$", "$\\frac{B^2}{\\mu_0}$", "$\\frac{1}{2}\\mu_0 B^2$", "$\\frac{B}{2\\mu_0}$"],
        0,
        "The magnetic energy stored per unit volume (energy density) in a magnetic field $B$ in vacuum is $u_B = \\frac{B^2}{2\\mu_0}$, analogous to the electric energy density $u_E = \\frac{1}{2}\\varepsilon_0 E^2$."
    ),
    (
        "In an $RL$ circuit connected across a DC battery of voltage $V$, the time constant $\\tau$ is defined as:",
        ["$L / R$", "$R / L$", "$L R$", "$1 / (L R)$"],
        0,
        "The differential equation for growth of current is $V - L \\frac{dI}{dt} = I R \\implies I(t) = \\frac{V}{R}\\left(1 - e^{-t/(L/R)}\\right)$. The inductive time constant is $\\tau_L = \\frac{L}{R}$."
    ),
    (
        "In an $RL$ circuit, the current grows to $63.2\\%$ of its maximum steady-state value in a time equal to:",
        ["$L / R$", "$0.693 L / R$", "$2 L / R$", "$R / L$"],
        0,
        "Current equation is $I(t) = I_0(1 - e^{-t/\\tau})$. At $t = \\tau = L/R$, $I = I_0(1 - e^{-1}) = I_0(1 - 0.368) = 0.632 I_0$, which is $63.2\\%$ of the maximum current."
    ),
    (
        "In a decaying $RL$ circuit, the time taken for the current to reduce to half of its initial value is:",
        ["$\\frac{L}{R} \\ln 2$", "$\\frac{L}{R}$", "$\\frac{R}{L} \\ln 2$", "$\\frac{2L}{R}$"],
        0,
        "Current decay is given by $I(t) = I_0 e^{-t/\\tau}$. When $I = I_0 / 2$, $e^{-t/\\tau} = 1/2 \\implies t = \\tau \\ln 2 = \\frac{L}{R} \\ln 2 \\approx 0.693 \\frac{L}{R}$."
    ),
    (
        "Immediately after closing the switch ($t = 0^+$) in a circuit containing a resistor $R$, an uncharged inductor $L$, and a battery $V$, the inductor behaves as:",
        ["An open circuit (infinite resistance, current is zero)", "A short circuit (zero resistance)", "A constant voltage source of $V/2$", "A capacitor"],
        0,
        "Since the current through an inductor cannot change instantaneously due to self-induced opposing back EMF ($I(0^+) = I(0^-) = 0$), the inductor behaves as an open circuit at $t = 0^+$."
    ),
    (
        "A long time after the switch is closed ($t \\to \\infty$, steady state) in an ideal $RL$ circuit, the inductor behaves as:",
        ["A short circuit (ideal connecting wire of zero resistance)", "An open circuit", "A resistor of resistance $R$", "A source of constant EMF"],
        0,
        "At steady state, $\\frac{dI}{dt} = 0$, so the back EMF induced in the ideal inductor is $\\mathcal{E} = -L \\frac{dI}{dt} = 0$. Hence, it acts as a simple conducting wire with zero resistance."
    ),
    (
        "Self-inductance of a coil is also known as electrical inertia because:",
        ["It opposes any change in the electric current flowing through it", "It prevents the flow of DC current completely", "It stores kinetic energy of electrons", "It depends on the mass of the coil wire"],
        0,
        "Just as mass (inertia) in mechanics opposes any change in state of motion (velocity), self-inductance opposes any increase or decrease in current through the coil by inducing a back EMF (Faraday-Lenz law)."
    ),
    (
        "A small circular coil of radius $r$ and turns $N_1$ is placed coaxially at the center of a much larger circular coil of radius $R$ ($R \\gg r$) and turns $N_2$. The mutual inductance of the pair of coils is:",
        ["$\\frac{\\mu_0 \\pi N_1 N_2 r^2}{2R}$", "$\\frac{\\mu_0 N_1 N_2 r^2}{2R}$", "$\\frac{\\mu_0 \\pi N_1 N_2 R^2}{2r}$", "$\\frac{\\mu_0 \\pi N_1 N_2 r}{2R^2}$"],
        0,
        "Magnetic field at the center of the outer coil carrying current $I$ is $B = \\frac{\\mu_0 N_2 I}{2R}$. Since $r \\ll R$, this field is uniform across the small inner coil. Flux through the inner coil is $\\Phi_1 = N_1 B A_1 = N_1 \\left(\\frac{\\mu_0 N_2 I}{2R}\\right) (\\pi r^2) = \\frac{\\mu_0 \\pi N_1 N_2 r^2}{2R} I$. Thus $M = \\frac{\\Phi_1}{I} = \\frac{\\mu_0 \\pi N_1 N_2 r^2}{2R}$."
    ),
    (
        "Two coaxial solenoids are made such that solenoid 1 has radius $r_1$, length $l$, and turns $N_1$, while solenoid 2 has radius $r_2$ ($r_2 > r_1$), length $l$, and turns $N_2$. The mutual inductance is:",
        ["$\\frac{\\mu_0 N_1 N_2 \\pi r_1^2}{l}$", "$\\frac{\\mu_0 N_1 N_2 \\pi r_2^2}{l}$", "$\\frac{\\mu_0 N_1 N_2 \\pi (r_1 + r_2)^2}{2l}$", "$\\frac{\\mu_0 N_1 N_2 \\pi (r_2^2 - r_1^2)}{l}$"],
        0,
        "When current $I_1$ flows in the inner solenoid, magnetic field $B_1 = \\mu_0 \\frac{N_1}{l} I_1$ is confined within area $\\pi r_1^2$. The flux linked with the outer solenoid is $\\Phi_2 = N_2 B_1 (\\pi r_1^2) = \\frac{\\mu_0 N_1 N_2 \\pi r_1^2}{l} I_1$. Hence $M = \\frac{\\mu_0 N_1 N_2 \\pi r_1^2}{l}$."
    ),
    (
        "The reciprocity theorem in mutual induction states that:",
        ["$M_{12} = M_{21}$ always holds for any two linear passive coils", "$M_{12} > M_{21}$ if coil 1 has more turns", "$M_{12} < M_{21}$ if coil 2 has larger area", "$M_{12} M_{21} = 0$"],
        0,
        "The Neumann mutual inductance formula shows that the mutual inductance between two circuits is symmetric: $M_{12} = M_{21} = M$, regardless of differences in their sizes, geometries, or number of turns."
    ),
    (
        "Two coils are wound on the same iron rod so that the flux generated by one also passes through the other. If the self-inductance of each coil is $L_0$, and the coupling is perfect ($k = 1$), the mutual inductance between them is:",
        ["$L_0$", "$2 L_0$", "$L_0 / 2$", "$4 L_0$"],
        0,
        "$M = k \\sqrt{L_1 L_2} = 1 \\times \\sqrt{L_0 \\times L_0} = L_0$."
    ),
    (
        "An inductor of inductance $L = 50\\text{ mH}$ is connected in series with a resistor $R = 10\\text{ }\\Omega$ to a $20\\text{ V}$ battery. The rate of increase of current at $t = 0$ is:",
        ["$400\\text{ A/s}$", "$200\\text{ A/s}$", "$20\\text{ A/s}$", "$2\\text{ A/s}$"],
        0,
        "At $t = 0$, $I = 0$, so the entire battery voltage appears across the inductor: $V = L \\frac{dI}{dt} \\implies \\frac{dI}{dt} = \\frac{V}{L} = \\frac{20}{50 \\times 10^{-3}} = \\frac{20000}{50} = 400\\text{ A/s}$."
    ),
    (
        "A current of $2\\text{ A}$ in an inductor produces a magnetic flux of $10\\text{ Wb}$ through its turns. The energy stored in the inductor is:",
        ["$10\\text{ J}$", "$20\\text{ J}$", "$5\\text{ J}$", "$40\\text{ J}$"],
        0,
        "Energy stored in an inductor is $U = \\frac{1}{2} L I^2 = \\frac{1}{2} (L I) I = \\frac{1}{2} \\Phi I$. Given $\\Phi = 10\\text{ Wb}$ and $I = 2\\text{ A}$, $U = \\frac{1}{2} \\times 10 \\times 2 = 10\\text{ J}$."
    ),
    (
        "Two inductors of $3\\text{ H}$ and $6\\text{ H}$ are connected in parallel with no mutual coupling ($M = 0$). The equivalent inductance is:",
        ["$2\\text{ H}$", "$9\\text{ H}$", "$4.5\\text{ H}$", "$18\\text{ H}$"],
        0,
        "For uncoupled inductors in parallel, $\\frac{1}{L_{\\text{eq}}} = \\frac{1}{L_1} + \\frac{1}{L_2} = \\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2} \\implies L_{\\text{eq}} = 2\\text{ H}$."
    ),
    (
        "If the self-inductance of a coil is doubled and the current flowing through it is halved, the energy stored in the coil will:",
        ["Be halved", "Double", "Remain unchanged", "Be quartered"],
        0,
        "Energy $U = \\frac{1}{2} L I^2$. If $L' = 2L$ and $I' = I/2$, then $U' = \\frac{1}{2} (2L) (I/2)^2 = \\frac{1}{2} \\times 2L \\times \\frac{I^2}{4} = \\frac{1}{2} U$. So stored energy is halved."
    ),
    (
        "A coil of wire of resistance $20\\text{ }\\Omega$ and inductance $5\\text{ H}$ is connected to a $100\\text{ V}$ battery. The energy stored in the magnetic field when the current reaches its steady-state value is:",
        ["$62.5\\text{ J}$", "$125\\text{ J}$", "$250\\text{ J}$", "$31.25\\text{ J}$"],
        0,
        "Steady-state current is $I_0 = \\frac{V}{R} = \\frac{100}{20} = 5\\text{ A}$. Energy stored is $U = \\frac{1}{2} L I_0^2 = \\frac{1}{2} \\times 5 \\times (5)^2 = \\frac{125}{2} = 62.5\\text{ J}$."
    ),
    (
        "The mutual inductance between two circular coplanar concentric coils of radii $R_1$ and $R_2$ ($R_1 \\ll R_2$) is $M$. If the radius of the outer coil is doubled, the mutual inductance will:",
        ["Be halved", "Double", "Remain unchanged", "Be quartered"],
        0,
        "The mutual inductance is $M = \\frac{\\mu_0 \\pi R_1^2}{2 R_2}$. Since $M \\propto \\frac{1}{R_2}$, doubling the radius of the outer coil halves the mutual inductance."
    ),
    (
        "What is the dimensions of self-inductance $L$?",
        ["$[\\text{M L}^2 \\text{T}^{-2} \\text{A}^{-2}]$", "$[\\text{M L}^2 \\text{T}^{-1} \\text{A}^{-2}]$", "$[\\text{M L} \\text{T}^{-2} \\text{A}^{-1}]$", "$[\\text{M L}^2 \\text{T}^{-2} \\text{A}^{-1}]$"],
        0,
        "Energy $U = \\frac{1}{2} L I^2 \\implies [L] = \\frac{[U]}{[I^2]} = \\frac{\\text{M L}^2 \\text{T}^{-2}}{\\text{A}^2} = [\\text{M L}^2 \\text{T}^{-2} \\text{A}^{-2}]$."
    ),
    (
        "A circuit consists of a coil with inductance $L$ and resistance $R$. When disconnected from a power supply, the rate of dissipation of energy at the instant current is $i$ is:",
        ["$i^2 R$", "$\\frac{1}{2} L i^2$", "$L i \\frac{di}{dt}$", "$i R$"],
        0,
        "Energy is stored in the magnetic field ($U = \\frac{1}{2} L i^2$). When disconnected, this magnetic energy is dissipated across the resistance as Joule heat at the instantaneous rate $P = i^2 R$ (by energy conservation, $-\\frac{dU}{dt} = -L i \\frac{di}{dt} = i(L \\frac{-di}{dt}) = i(iR) = i^2 R$)."
    ),
    (
        "Two coils have mutual inductance $M = 0.05\\text{ H}$. The current in the primary coil changes according to $I = I_0 \\sin(\\omega t)$, where $I_0 = 10\\text{ A}$ and $\\omega = 100\\pi\\text{ rad/s}$. The maximum induced EMF in the secondary coil is:",
        ["$50\\pi\\text{ V}$", "$25\\pi\\text{ V}$", "$100\\pi\\text{ V}$", "$5\\pi\\text{ V}$"],
        0,
        "Induced EMF in secondary coil is $\\mathcal{E}_2 = -M \\frac{dI}{dt} = -M I_0 \\omega \\cos(\\omega t)$. The peak value is $\\mathcal{E}_{2,\\text{max}} = M I_0 \\omega = 0.05 \\times 10 \\times 100\\pi = 50\\pi\\text{ V} \\approx 157.1\\text{ V}$."
    ),
    (
        "When current in a coil changes from $+2\\text{ A}$ to $-2\\text{ A}$ in $0.05\\text{ s}$, an EMF of $8\\text{ V}$ is induced in it. The self-inductance of the coil is:",
        ["$0.1\\text{ H}$", "$0.2\\text{ H}$", "$0.05\\text{ H}$", "$0.4\\text{ H}$"],
        0,
        "$\\Delta I = -2 - 2 = -4\\text{ A}$. Induced EMF is $\\mathcal{E} = -L \\frac{\\Delta I}{\\Delta t} \\implies 8 = -L \\frac{-4}{0.05} = 80 L \\implies L = \\frac{8}{80} = 0.1\\text{ H}$."
    ),
    (
        "A toroid of mean radius $r$, cross-sectional area $A$, and total number of turns $N$ has self-inductance:",
        ["$\\frac{\\mu_0 N^2 A}{2\\pi r}$", "$\\frac{\\mu_0 N A}{2\\pi r}$", "$\\frac{\\mu_0 N^2 A}{\\pi r^2}$", "$\\frac{2\\pi \\mu_0 N^2 A}{r}$"],
        0,
        "Inside a toroid, magnetic field is $B = \\frac{\\mu_0 N I}{2\\pi r}$. Total flux linked is $\\Phi = N B A = \\frac{\\mu_0 N^2 A}{2\\pi r} I$. Since $\\Phi = L I$, self-inductance is $L = \\frac{\\mu_0 N^2 A}{2\\pi r}$."
    ),
    (
        "Two inductors each of inductance $L$ are connected in series aiding ($k = 1$). The equivalent inductance of the combination is:",
        ["$4L$", "$2L$", "$L$", "$L/2$"],
        0,
        "For perfect coupling ($k = 1$), $M = \\sqrt{L \\times L} = L$. When connected in series aiding, $L_{\\text{eq}} = L_1 + L_2 + 2M = L + L + 2L = 4L$."
    ),
    (
        "When the same two inductors ($L_1 = L_2 = L$, $k = 1$) are connected in series opposing, the equivalent inductance is:",
        ["Zero", "$L$", "$2L$", "$4L$"],
        0,
        "In series opposing, $L_{\\text{eq}} = L_1 + L_2 - 2M = L + L - 2L = 0$."
    ),
    (
        "A long wire is bent into a circular loop of radius $R$. Its self-inductance is $L$. If the same wire is bent into a double loop (two concentric turns of radius $R/2$), its self-inductance becomes:",
        ["$2L$", "$4L$", "$L/2$", "$L$"],
        0,
        "For a circular loop, $L \\propto N^2 r$. With $N' = 2$ and $r' = R/2$, $L' \\propto (2)^2 (R/2) = 4 \\times (R/2) = 2 R$. Therefore, $L' = 2L$."
    ),
    (
        "An inductor stores $1\\text{ J}$ of magnetic energy when a current of $2\\text{ A}$ is passed through it. To double the stored energy to $2\\text{ J}$, the current must be increased to:",
        ["$2\\sqrt{2}\\text{ A}$", "$4\\text{ A}$", "$1\\text{ A}$", "$2\\text{ A}$"],
        0,
        "Energy $U \\propto I^2$. For $U' = 2U$, we must have $I' = \\sqrt{2} I = 2\\sqrt{2}\\text{ A}$."
    ),
    (
        "The ratio of magnetic energy density to electric energy density in an electromagnetic wave propagating in vacuum is:",
        ["$1 : 1$", "$1 : 2$", "$2 : 1$", "$c : 1$"],
        0,
        "In an electromagnetic wave in vacuum, $u_B = \\frac{B^2}{2\\mu_0}$ and $u_E = \\frac{1}{2}\\varepsilon_0 E^2$. Since $E = c B$ and $c^2 = \\frac{1}{\\mu_0 \\varepsilon_0}$, $u_E = \\frac{1}{2}\\varepsilon_0 (c^2 B^2) = \\frac{1}{2}\\varepsilon_0 \\left(\\frac{1}{\\mu_0 \\varepsilon_0}\\right) B^2 = \\frac{B^2}{2\\mu_0} = u_B$. The ratio is strictly $1 : 1$."
    ),
    (
        "Two coils $A$ and $B$ have 200 and 400 turns respectively. When current of $2\\text{ A}$ flows in $A$, a flux of $10^{-4}\\text{ Wb}$ links each turn of coil $B$. The mutual inductance of the coils is:",
        ["$0.02\\text{ H}$", "$0.04\\text{ H}$", "$0.01\\text{ H}$", "$0.005\\text{ H}$"],
        0,
        "Total flux linked with coil $B$ is $\\Phi_B = N_B \\phi = 400 \\times 10^{-4} = 0.04\\text{ Wb}$. Mutual inductance $M = \\frac{\\Phi_B}{I_A} = \\frac{0.04\\text{ Wb}}{2\\text{ A}} = 0.02\\text{ H}$."
    ),
    (
        "Which of the following circuits will exhibit the highest rate of current decay when disconnected from the supply?",
        ["$R = 100\\text{ }\\Omega, L = 1\\text{ mH}$", "$R = 10\\text{ }\\Omega, L = 1\\text{ H}$", "$R = 1\\text{ }\\Omega, L = 10\\text{ H}$", "$R = 50\\text{ }\\Omega, L = 0.5\\text{ H}$"],
        0,
        "The decay rate is inversely proportional to time constant $\\tau = L/R$. Faster decay corresponds to smallest $\\tau$. For (A), $\\tau = \\frac{10^{-3}}{100} = 10^{-5}\\text{ s}$, which is by far the smallest time constant."
    ),
    (
        "The self-inductance of a coil depends on:",
        ["Its geometry and the magnetic permeability of the core medium", "Only the current flowing through it", "The voltage of the source connected", "The resistance of the wire only"],
        0,
        "Self-inductance is an intrinsic property of a coil determined purely by its geometry (number of turns, cross-sectional area, length/shape) and the magnetic permeability $\\mu$ of the medium inside it."
    ),
    (
        "In non-inductive windings (used in standard resistance boxes), coils of wire are wound:",
        ["Doubled back on themselves so that currents in adjacent wires flow in opposite directions", "Around a thick soft iron core", "In a single straight loop without coiling", "On an aluminium frame"],
        0,
        "By doubling the insulated resistance wire back on itself before winding it into a coil, the currents in adjacent strands flow in exactly opposite directions. The magnetic fields generated cancel each other out, making the self-inductance virtually zero."
    ),
    (
        "An alternating current passing through an inductor of inductance $L$ has frequency $f$. Its inductive reactance is:",
        ["$2\\pi f L$", "$\\frac{1}{2\\pi f L}$", "$2\\pi \\sqrt{f L}$", "$\\frac{2\\pi f}{L}$"],
        0,
        "Inductive reactance is defined as $X_L = \\omega L = 2\\pi f L$."
    ),
    (
        "A current in an inductor increases linearly from $0$ to $I_0$ in time $T$. The average power delivered to the inductor during this interval is:",
        ["$\\frac{L I_0^2}{2 T}$", "$\\frac{L I_0^2}{T}$", "$\\frac{L I_0^2}{4 T}$", "Zero"],
        0,
        "Current is $I(t) = \\frac{I_0}{T} t$. The induced EMF is $\\mathcal{E} = L \\frac{dI}{dt} = L \\frac{I_0}{T}$ (constant). Instantaneous power is $P(t) = \\mathcal{E} I(t) = \\left(L \\frac{I_0}{T}\\right) \\left(\\frac{I_0}{T} t\\right) = \\frac{L I_0^2}{T^2} t$. Average power over time $T$ is $P_{\\text{avg}} = \\frac{1}{T} \\int_0^T P(t) dt = \\frac{L I_0^2}{T^3} \\left[\\frac{t^2}{2}\\right]_0^T = \\frac{L I_0^2}{2 T}$ (which also equals total stored energy $\\frac{1}{2} L I_0^2$ divided by time $T$)."
    ),
    (
        "A $10\\text{ H}$ inductor carries a steady current of $2\\text{ A}$. How can its stored energy be dissipated most rapidly?",
        ["By connecting it across a large resistor $R$", "By connecting it across a small resistor $R$", "By short-circuiting its terminals with zero resistance", "By cooling it to absolute zero"],
        0,
        "The time constant for discharge is $\\tau = L/R$. A larger resistance $R$ gives a smaller time constant $\\tau$, meaning current and magnetic energy decay to zero much more rapidly."
    ),
    (
        "A conducting loop of self-inductance $L$ and resistance $R$ carries induced current $i$. The energy equation for the loop in an external magnetic field is:",
        ["$-\\frac{d\\Phi_{\\text{ext}}}{dt} - L \\frac{di}{dt} = i R$", "$-\\frac{d\\Phi_{\\text{ext}}}{dt} + L \\frac{di}{dt} = i R$", "$L \\frac{di}{dt} = i R$", "$\\Phi_{\\text{ext}} = L i$"],
        0,
        "By Kirchhoff's voltage law around the closed loop: total EMF = IR drop. Total EMF is the sum of externally induced EMF ($-\\frac{d\\Phi_{\\text{ext}}}{dt}$) and self-induced back EMF ($-L \\frac{di}{dt}$), yielding $-\\frac{d\\Phi_{\\text{ext}}}{dt} - L \\frac{di}{dt} = i R$."
    ),
    (
        "When an iron core is inserted into an operating $RL$ circuit carrying alternating current, the brightness of an incandescent lamp in series will:",
        ["Decrease", "Increase", "Remain unchanged", "First increase then decrease"],
        0,
        "Inserting an iron core increases the self-inductance $L$, which increases the inductive reactance $X_L = \\omega L$. The circuit impedance $Z = \\sqrt{R^2 + X_L^2}$ increases, thereby reducing the RMS current $I_{\\text{rms}} = V/Z$ and dimming the lamp."
    )
]

for i, item in enumerate(inductance_data):
    target_idx = i % 4
    orig_opts = list(item[1])
    orig_correct = item[2]
    correct_text = orig_opts[orig_correct]
    other_opts = [opt for j, opt in enumerate(orig_opts) if j != orig_correct]
    
    new_opts = []
    other_ptr = 0
    for pos in range(4):
        if pos == target_idx:
            new_opts.append(correct_text)
        else:
            new_opts.append(other_opts[other_ptr])
            other_ptr += 1
    
    questions.append(make_q("Self and mutual inductance", item[0], new_opts, target_idx, item[3]))

# ==========================================
# 4. Transformers and AC generator (45 MCQs)
# ==========================================

transformer_data = [
    (
        "An ideal transformer has 100 turns in the primary coil and 500 turns in the secondary coil. If an AC voltage of $220\\text{ V}$ is applied to the primary, the secondary voltage is:",
        ["$1100\\text{ V}$", "$44\\text{ V}$", "$2200\\text{ V}$", "$550\\text{ V}$"],
        0,
        "For a transformer, $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$. Therefore, $V_s = V_p \\left(\\frac{N_s}{N_p}\\right) = 220 \\times \\left(\\frac{500}{100}\\right) = 220 \\times 5 = 1100\\text{ V}$."
    ),
    (
        "In an ideal step-up transformer, which of the following quantities is smaller in the secondary than in the primary?",
        ["Current", "Voltage", "Power", "Frequency"],
        0,
        "In a step-up transformer, $V_s > V_p$. For an ideal transformer, power is conserved ($P_s = P_p \\implies V_s I_s = V_p I_p$). Therefore, the current in the secondary is smaller than in the primary ($I_s < I_p$)."
    ),
    (
        "A transformer works on the principle of:",
        ["Mutual induction", "Self induction", "Electrostatic induction", "Lorentz force"],
        0,
        "A transformer operates on the principle of mutual induction: an alternating current in the primary winding creates a time-varying magnetic flux that induces an electromotive force in the secondary winding."
    ),
    (
        "A step-down transformer transforms $2200\\text{ V}$ into $220\\text{ V}$. If the primary coil has 5000 turns and efficiency is $90\\%$, the number of turns in the secondary coil is:",
        ["500", "50", "555", "450"],
        0,
        "The turns ratio depends strictly on the voltages: $\\frac{N_s}{N_p} = \\frac{V_s}{V_p} \\implies N_s = N_p \\frac{V_s}{V_p} = 5000 \\times \\frac{220}{2200} = 500$ turns."
    ),
    (
        "In the previous question, if the secondary delivers a current of $10\\text{ A}$ to a resistive load, the current drawn by the primary is:",
        ["$1.11\\text{ A}$", "$1.0\\text{ A}$", "$0.9\\text{ A}$", "$0.55\\text{ A}$"],
        0,
        "Output power is $P_{\\text{out}} = V_s I_s = 220 \\times 10 = 2200\\text{ W}$. Efficiency $\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} = 0.90 \\implies P_{\\text{in}} = \\frac{2200}{0.90} \\approx 2444.4\\text{ W}$. Primary current is $I_p = \\frac{P_{\\text{in}}}{V_p} = \\frac{2444.4}{2200} \\approx 1.11\\text{ A}$."
    ),
    (
        "Can a transformer be used to step up a direct current (DC) voltage from a battery?",
        ["No, because DC produces a steady magnetic flux so no EMF is induced in the secondary", "Yes, because the magnetic field is very strong", "Yes, by increasing the turns in the secondary coil", "Yes, provided the primary resistance is zero"],
        0,
        "A transformer requires a time-varying magnetic flux ($\\frac{d\\Phi}{dt} \\ne 0$) to induce voltage in the secondary coil. A DC current produces a constant magnetic flux ($\\frac{d\\Phi}{dt} = 0$), so no secondary voltage is induced."
    ),
    (
        "An AC generator consists of a coil of 100 turns and cross-sectional area $0.5\\text{ m}^2$, rotating at a constant frequency of $50\\text{ Hz}$ in a uniform magnetic field of $0.2\\text{ T}$. The peak value of the induced EMF is:",
        ["$3142\\text{ V}$", "$1571\\text{ V}$", "$314.2\\text{ V}$", "$6284\\text{ V}$"],
        0,
        "Peak EMF is $\\mathcal{E}_0 = N B A \\omega = N B A (2\\pi f) = 100 \\times 0.2 \\times 0.5 \\times (2\\pi \\times 50) = 10 \\times 100\\pi = 1000\\pi \\approx 3141.6\\text{ V} \\approx 3142\\text{ V}$."
    ),
    (
        "In an AC generator, the plane of the armature coil is perpendicular to the magnetic field. At this instant:",
        ["Magnetic flux linked is maximum and induced EMF is zero", "Magnetic flux linked is zero and induced EMF is maximum", "Both magnetic flux and induced EMF are maximum", "Both magnetic flux and induced EMF are zero"],
        0,
        "When the plane of the coil is perpendicular to the magnetic field ($\\theta = 0^\\circ$), the flux is maximum: $\\Phi = N B A \\cos 0^\\circ = N B A$. However, the rate of change of flux is zero: $\\frac{d\\Phi}{dt} = -N B A \\omega \\sin 0^\\circ = 0$, so the induced EMF is zero."
    ),
    (
        "In an AC generator, when the plane of the coil is parallel to the magnetic field:",
        ["Magnetic flux is zero and induced EMF is maximum", "Magnetic flux is maximum and induced EMF is zero", "Both magnetic flux and induced EMF are zero", "Both magnetic flux and induced EMF are maximum"],
        0,
        "When the coil plane is parallel to the field ($\\theta = 90^\\circ$), no field lines pass through the area ($\\Phi = 0$). The edges of the coil cut flux lines perpendicularly, so $\\frac{d\\Phi}{dt}$ and the induced EMF reach their maximum values ($\\mathcal{E} = \\mathcal{E}_0$)."
    ),
    (
        "In a real transformer, hysteresis loss is minimized by using a core material made of:",
        ["Soft iron or silicon steel having a narrow hysteresis loop", "Hard steel having high retentivity", "Copper sheets", "Aluminium alloy"],
        0,
        "Hysteresis loss per cycle of magnetization is proportional to the area of the $B-H$ hysteresis loop. Soft iron and silicon steel alloys have very narrow hysteresis loops with low coercivity, minimizing magnetic dissipation."
    ),
    (
        "The humming sound in a working transformer is caused by:",
        ["Magnetostriction (periodic mechanical deformation of the core in an AC magnetic field)", "Air resistance against alternating current", "Loose primary winding wires rubbing together", "Sparking at the terminals"],
        0,
        "When ferromagnetic materials are magnetized in an alternating field, they undergo microscopic dimensional changes (magnetostriction). This produces periodic mechanical vibrations at twice the AC supply frequency, heard as a continuous hum."
    ),
    (
        "Electrical power is transmitted over long distances at very high voltages primarily to:",
        ["Minimize $I^2 R$ transmission power losses in the cables", "Increase the current carried by the transmission lines", "Protect the transmission lines from lightning strikes", "Reduce the frequency of the AC current"],
        0,
        "Since transmitted power is $P = V I$, transmitting at high voltage $V$ allows the same power to be conveyed with a much smaller current $I = P/V$. The power dissipated in the transmission cables is $P_{\\text{loss}} = I^2 R = \\frac{P^2 R}{V^2}$, which decreases inversely with the square of voltage."
    ),
    (
        "A step-down transformer has an efficiency of $80\\%$. It converts $240\\text{ V}$ into $24\\text{ V}$ to power a $24\\text{ V}, 48\\text{ W}$ device. The current in the primary winding is:",
        ["$0.25\\text{ A}$", "$0.20\\text{ A}$", "$0.30\\text{ A}$", "$0.50\\text{ A}$"],
        0,
        "Output power is $P_{\\text{out}} = 48\\text{ W}$. Input power is $P_{\\text{in}} = \\frac{P_{\\text{out}}}{\\eta} = \\frac{48}{0.80} = 60\\text{ W}$. Since $P_{\\text{in}} = V_p I_p$, primary current is $I_p = \\frac{P_{\\text{in}}}{V_p} = \\frac{60}{240} = 0.25\\text{ A}$."
    ),
    (
        "In an AC generator, if the speed of rotation of the armature is doubled, the peak EMF $\\mathcal{E}_0$ and the frequency $f$ of the output will:",
        ["Both double", "$\\mathcal{E}_0$ doubles while frequency remains unchanged", "Frequency doubles while $\\mathcal{E}_0$ remains unchanged", "Both quadruple"],
        0,
        "Peak EMF is $\\mathcal{E}_0 = N A B \\omega$ and frequency is $f = \\frac{\\omega}{2\\pi}$. Doubling the rotational speed doubles $\\omega$, which directly doubles both the peak EMF and the frequency."
    ),
    (
        "The primary of a transformer has 400 turns while the secondary has 2000 turns. If the input power is $10\\text{ kW}$ at $2000\\text{ V}$, the secondary voltage in an ideal transformer is:",
        ["$10000\\text{ V}$", "$400\\text{ V}$", "$20000\\text{ V}$", "$5000\\text{ V}$"],
        0,
        "$V_s = V_p \\left(\\frac{N_s}{N_p}\\right) = 2000 \\times \\left(\\frac{2000}{400}\\right) = 2000 \\times 5 = 10000\\text{ V}$."
    ),
    (
        "The components that collect current from the rotating coil in an AC generator are:",
        ["Slip rings and carbon brushes", "Split-ring commutators and brushes", "Permanent magnets", "Soft iron core"],
        0,
        "In an AC generator, two continuous conductive slip rings rotate with the coil, and stationary spring-loaded carbon brushes press against them to collect the alternating current without twisting the wires."
    ),
    (
        "A DC generator differs from an AC generator mainly in having a:",
        ["Split-ring commutator instead of slip rings", "Slip rings instead of a commutator", "Stronger permanent magnet", "Non-laminated armature core"],
        0,
        "A DC generator uses a split-ring commutator that reverses the connection to the external circuit every half-cycle, rectifying the alternating induced EMF into a pulsating unidirectional direct current."
    ),
    (
        "In an ideal transformer, the phase difference between the primary voltage $V_p$ and the back EMF induced in the primary coil $e_p$ is:",
        ["$180^\\circ$", "$0^\\circ$", "$90^\\circ$", "$270^\\circ$"],
        0,
        "By Lenz's law, the self-induced back EMF in the primary coil directly opposes the applied primary voltage at every instant, so they are $180^\\circ$ out of phase ($e_p = -V_p$)."
    ),
    (
        "The core of a transformer is laminated to:",
        ["Reduce eddy current power loss", "Prevent rust and corrosion", "Increase the magnetic flux leakage", "Decrease the weight of the transformer"],
        0,
        "Laminating the core into thin varnished iron sheets restricts the circulation paths of eddy currents, significantly reducing the eddy current power loss ($P_{\\text{eddy}} \\propto t^2$, where $t$ is lamination thickness)."
    ),
    (
        "A transformer with turns ratio $\\frac{N_s}{N_p} = 5$ has a load resistance $R_L = 1000\\text{ }\\Omega$ connected to its secondary. The reflected (equivalent) resistance seen by the primary source is:",
        ["$40\\text{ }\\Omega$", "$200\\text{ }\\Omega$", "$5000\\text{ }\\Omega$", "$25000\\text{ }\\Omega$"],
        0,
        "The reflected impedance to the primary is $R_p = R_L \\left(\\frac{N_p}{N_s}\\right)^2 = 1000 \\times \\left(\\frac{1}{5}\\right)^2 = \\frac{1000}{25} = 40\\text{ }\\Omega$."
    ),
    (
        "Flux leakage loss in a transformer is reduced by:",
        ["Winding the secondary coil directly over the primary coil coaxially", "Increasing the air gap between the coils", "Using aluminium wire for windings", "Using a solid unlaminated iron core"],
        0,
        "Winding the secondary coil directly over the primary coil on the same core leg ensures that nearly all magnetic flux lines generated by the primary pass through the secondary, minimizing flux leakage."
    ),
    (
        "The output voltage of an AC generator is given by $V = 170 \\sin(120\\pi t)\\text{ V}$. The frequency of the output voltage is:",
        ["$60\\text{ Hz}$", "$120\\text{ Hz}$", "$50\\text{ Hz}$", "$170\\text{ Hz}$"],
        0,
        "The angular frequency is $\\omega = 120\\pi\\text{ rad/s}$. Frequency $f = \\frac{\\omega}{2\\pi} = \\frac{120\\pi}{2\\pi} = 60\\text{ Hz}$."
    ),
    (
        "A transformer converts $220\\text{ V}$ into $11\\text{ V}$. If the primary current is $5\\text{ A}$ and the secondary current is $90\\text{ A}$, the efficiency of the transformer is:",
        ["$90\\%$", "$80\\%$", "$85\\%$", "$95\\%$"],
        0,
        "Input power $P_{\\text{in}} = V_p I_p = 220 \\times 5 = 1100\\text{ W}$. Output power $P_{\\text{out}} = V_s I_s = 11 \\times 90 = 990\\text{ W}$. Efficiency $\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{990}{1100} \\times 100\\% = 90\\%$."
    ),
    (
        "An AC generator has a 10-pole rotor rotating at $600\\text{ rpm}$. The frequency of the generated alternating voltage is:",
        ["$50\\text{ Hz}$", "$60\\text{ Hz}$", "$100\\text{ Hz}$", "$25\\text{ Hz}$"],
        0,
        "Frequency is related to poles $P$ and rotational speed $N$ (in rpm) by $f = \\frac{P \\times N}{120} = \\frac{10 \\times 600}{120} = 50\\text{ Hz}$."
    ),
    (
        "In an ideal transformer, the transformation ratio is $k = 0.2$. If the input voltage is $200\\text{ V}$, the output voltage is:",
        ["$40\\text{ V}$", "$1000\\text{ V}$", "$20\\text{ V}$", "$200\\text{ V}$"],
        0,
        "Output voltage is $V_s = k V_p = 0.2 \\times 200 = 40\\text{ V}$."
    ),
    (
        "A step-up transformer has a turns ratio of $1 : 20$. If a resistance of $100\\text{ }\\Omega$ is connected across the secondary, the equivalent resistance connected across the primary is:",
        ["$0.25\\text{ }\\Omega$", "$5\\text{ }\\Omega$", "$2000\\text{ }\\Omega$", "$40000\\text{ }\\Omega$"],
        0,
        "$R_p = R_s \\left(\\frac{N_p}{N_s}\\right)^2 = 100 \\times \\left(\\frac{1}{20}\\right)^2 = \\frac{100}{400} = 0.25\\text{ }\\Omega$."
    ),
    (
        "Which of the following losses does NOT occur in an electrical transformer?",
        ["Mechanical friction loss", "Copper loss", "Eddy current loss", "Hysteresis loss"],
        0,
        "Because a transformer is a completely static device with no moving parts, it suffers no mechanical friction or windage losses. This contributes to its extremely high operating efficiency ($>95\\%$)."
    ),
    (
        "In a step-down transformer, the primary winding has 1000 turns and secondary winding has 200 turns. If the input power is $1200\\text{ W}$ at $240\\text{ V}$ with $100\\% efficiency$, the secondary voltage and current are:",
        ["$48\\text{ V}, 25\\text{ A}$", "$48\\text{ V}, 5\\text{ A}$", "$1200\\text{ V}, 1\\text{ A}$", "$24\\text{ V}, 50\\text{ A}$"],
        0,
        "Secondary voltage $V_s = V_p \\left(\\frac{N_s}{N_p}\\right) = 240 \\times \\frac{200}{1000} = 48\\text{ V}$. Since efficiency is $100\\%$, $P_s = P_p = 1200\\text{ W}$. Thus $I_s = \\frac{P_s}{V_s} = \\frac{1200}{48} = 25\\text{ A}$."
    ),
    (
        "The induced EMF in an AC generator is maximum when the angle between the area vector of the coil and the magnetic field vector is:",
        ["$90^\\circ$", "$0^\\circ$", "$180^\\circ$", "$45^\\circ$"],
        0,
        "Induced EMF is $\\mathcal{E} = N B A \\omega \\sin\\theta$, where $\\theta = \\omega t$ is the angle between the magnetic field and the area vector. $\\mathcal{E}$ is maximum when $\\sin\\theta = 1$, which corresponds to $\\theta = 90^\\circ$ (when the plane of the coil is parallel to the field)."
    ),
    (
        "A transformer has an output of $100\\text{ W}$ at $20\\text{ V}$. If the primary voltage is $250\\text{ V}$ and the efficiency is $80\\%$, the primary current is:",
        ["$0.5\\text{ A}$", "$0.4\\text{ A}$", "$0.8\\text{ A}$", "$1.0\\text{ A}$"],
        0,
        "Input power $P_{\\text{in}} = \\frac{P_{\\text{out}}}{\\eta} = \\frac{100}{0.80} = 125\\text{ W}$. Primary current $I_p = \\frac{P_{\\text{in}}}{V_p} = \\frac{125}{250} = 0.5\\text{ A}$."
    ),
    (
        "If a transformer primary is connected to a $12\\text{ V}$ DC battery, the secondary voltage will be:",
        ["Zero (except momentarily when connecting or disconnecting)", "$12\\text{ V}$", "Indefinitely high", "Double the primary voltage"],
        0,
        "A DC source produces a constant magnetic field, so once steady current is reached, $\\frac{d\\Phi}{dt} = 0$, resulting in zero induced EMF in the secondary."
    ),
    (
        "The copper loss in a transformer is due to:",
        ["Joule heating ($I^2 R$) in the primary and secondary copper windings", "Circulating currents in the iron core", "Periodic reversal of magnetic domains", "Vibration of the core laminations"],
        0,
        "Copper loss refers to the electrical power converted into heat due to the ohmic resistance ($I_p^2 R_p + I_s^2 R_s$) of the copper wire used in the primary and secondary windings."
    ),
    (
        "In an AC generator, doubling both the magnetic field $B$ and the rotational frequency $\\omega$ increases the maximum induced EMF by a factor of:",
        ["$4$", "$2$", "$8$", "$16$"],
        0,
        "Since $\\mathcal{E}_0 = N B A \\omega$, if both $B$ and $\\omega$ are doubled, $\\mathcal{E}_0' = N (2B) A (2\\omega) = 4 \\mathcal{E}_0$."
    ),
    (
        "The efficiency of a transformer is maximum when:",
        ["Copper loss equals iron (core) loss", "Copper loss is zero", "Iron loss is zero", "The power factor is zero"],
        0,
        "In electrical machines, maximum efficiency occurs at the load current where the variable loss (copper loss $I^2 R$) equals the constant loss (iron/core loss)."
    ),
    (
        "A 200-turn coil of area $0.05\\text{ m}^2$ rotates at $1800\\text{ rpm}$ in a magnetic field of $0.1\\text{ T}$. The peak voltage produced is:",
        ["$188.5\\text{ V}$", "$94.2\\text{ V}$", "$377\\text{ V}$", "$60\\text{ V}$"],
        0,
        "Rotational frequency is $f = \\frac{1800}{60} = 30\\text{ rev/s}$, so $\\omega = 2\\pi \\times 30 = 60\\pi\\text{ rad/s}$. Peak EMF is $\\mathcal{E}_0 = N B A \\omega = 200 \\times 0.1 \\times 0.05 \\times 60\\pi = 1 \\times 60\\pi \\approx 188.5\\text{ V}$."
    ),
    (
        "An autotransformer differs from a two-winding transformer in that it:",
        ["Has a single continuous winding serving as both primary and secondary", "Operates on direct current", "Has zero efficiency", "Has two completely separate cores"],
        0,
        "An autotransformer uses a single tapped winding on a laminated iron core where part of the winding is common to both primary and secondary circuits."
    ),
    (
        "The primary coil of an ideal transformer has 200 turns and secondary has 800 turns. If the primary is connected to a $100\\text{ V}, 50\\text{ Hz}$ supply, the frequency of the secondary voltage is:",
        ["$50\\text{ Hz}$", "$200\\text{ Hz}$", "$12.5\\text{ Hz}$", "$100\\text{ Hz}$"],
        0,
        "A transformer changes voltage and current levels by electromagnetic induction, but the frequency of the alternating voltage is identical in both primary and secondary circuits ($50\\text{ Hz}$)."
    ),
    (
        "A step-up transformer converts $110\\text{ V}$ to $220\\text{ V}$. If the secondary current is $2\\text{ A}$, the primary current in an ideal transformer is:",
        ["$4\\text{ A}$", "$1\\text{ A}$", "$2\\text{ A}$", "$8\\text{ A}$"],
        0,
        "For an ideal transformer, $V_p I_p = V_s I_s \\implies I_p = I_s \\frac{V_s}{V_p} = 2 \\times \\frac{220}{110} = 4\\text{ A}$."
    ),
    (
        "The magnetic flux linked with a single turn of a transformer secondary varies as $\\phi = \\phi_0 \\sin(\\omega t)$. If the secondary has $N_s$ turns, the induced EMF is:",
        ["$-N_s \\omega \\phi_0 \\cos(\\omega t)$", "$N_s \\phi_0 \\sin(\\omega t)$", "$-N_s \\phi_0 \\cos(\\omega t)$", "$N_s \\omega^2 \\phi_0 \\sin(\\omega t)$"],
        0,
        "Total flux is $\\Phi_s = N_s \\phi = N_s \\phi_0 \\sin(\\omega t)$. The induced EMF is $\\mathcal{E}_s = -\\frac{d\\Phi_s}{dt} = -N_s \\omega \\phi_0 \\cos(\\omega t)$."
    ),
    (
        "An open-circuit test on a transformer is primarily conducted to determine:",
        ["Iron (core) loss", "Copper loss in secondary winding", "Leakage reactance", "Winding resistance"],
        0,
        "In an open-circuit test, rated voltage is applied to one winding with the other left open. Because the no-load current is very small, copper loss is negligible, so the wattmeter measures almost entirely the core (iron) loss."
    ),
    (
        "A short-circuit test on a transformer is primarily conducted to determine:",
        ["Full-load copper loss", "Hysteresis loss in the core", "Eddy current loss in the core", "Magnetizing current"],
        0,
        "In a short-circuit test, rated full-load current is circulated through the windings under very low applied voltage. Because the flux is small, core loss is negligible, so the measured power equals the full-load copper loss."
    ),
    (
        "In an AC dynamo, the graph of induced EMF versus time is a:",
        ["Sine curve", "Straight line", "Parabola", "Hyperbola"],
        0,
        "Because the flux varies cosinusoidally $\\Phi = N B A \\cos(\\omega t)$, the induced EMF is sinusoidal: $\\mathcal{E} = N B A \\omega \\sin(\\omega t)$."
    ),
    (
        "A step-down transformer connected to a $220\\text{ V}$ mains line is used to run a $11\\text{ V}, 44\\text{ W}$ lamp. If the efficiency is $100\\%$, the current drawn from the mains is:",
        ["$0.2\\text{ A}$", "$0.4\\text{ A}$", "$2.0\\text{ A}$", "$4.0\\text{ A}$"],
        0,
        "Power is $P = 44\\text{ W}$. Current from mains is $I_p = \\frac{P}{V_p} = \\frac{44\\text{ W}}{220\\text{ V}} = 0.2\\text{ A}$."
    ),
    (
        "Which of the following is NOT an essential component of an AC generator?",
        ["Commutator", "Armature", "Slip rings", "Magnetic field poles"],
        0,
        "A commutator is used in DC generators to convert AC into DC. An AC generator uses slip rings, not a commutator."
    ),
    (
        "If the number of turns in both the primary and secondary coils of an ideal transformer is doubled, the transformation ratio $\\frac{V_s}{V_p}$ will:",
        ["Remain unchanged", "Double", "Quadruple", "Be halved"],
        0,
        "The transformation ratio is $k = \\frac{N_s}{N_p}$. If both $N_s$ and $N_p$ are multiplied by 2, their ratio $\\frac{2 N_s}{2 N_p} = \\frac{N_s}{N_p}$ remains unchanged."
    )
]

for i, item in enumerate(transformer_data):
    target_idx = i % 4
    orig_opts = list(item[1])
    orig_correct = item[2]
    correct_text = orig_opts[orig_correct]
    other_opts = [opt for j, opt in enumerate(orig_opts) if j != orig_correct]
    
    new_opts = []
    other_ptr = 0
    for pos in range(4):
        if pos == target_idx:
            new_opts.append(correct_text)
        else:
            new_opts.append(other_opts[other_ptr])
            other_ptr += 1
    
    questions.append(make_q("Transformers and AC generator", item[0], new_opts, target_idx, item[3]))

output_path = os.path.join(os.path.dirname(__file__), "emi_ac_batch2.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} MCQs for batch 2 saved to {output_path}")
