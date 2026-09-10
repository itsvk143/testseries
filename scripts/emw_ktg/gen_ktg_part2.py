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
# SUBTOPIC 3: Degrees of freedom (55 Questions)
# ==============================================================================

# Q1
add_q(
    "Degrees of freedom",
    r"The number of degrees of freedom of a monoatomic gas molecule (such as Argon or Helium) is:",
    [
        r"$3$",
        r"$5$",
        r"$6$",
        r"$7$"
    ],
    0,
    r"A monoatomic gas molecule can be treated as a point mass with 3 independent translational coordinates ($x, y, z$). Its moment of inertia is negligibly small, so it has 0 rotational degrees of freedom. Total $f = 3$.",
    "Easy"
)

# Q2
add_q(
    "Degrees of freedom",
    r"At room temperature, a rigid diatomic gas molecule (such as $\text{O}_2$ or $\text{N}_2$) has how many degrees of freedom?",
    [
        r"$5$",
        r"$3$",
        r"$6$",
        r"$7$"
    ],
    0,
    r"A rigid diatomic molecule has 3 translational degrees of freedom and 2 rotational degrees of freedom (rotation about the two axes perpendicular to the internuclear axis). Total $f = 3 + 2 = 5$.",
    "Easy"
)

# Q3
add_q(
    "Degrees of freedom",
    r"At high temperatures, a diatomic molecule possesses an additional vibrational mode. The total number of degrees of freedom becomes:",
    [
        r"$7$",
        r"$5$",
        r"$6$",
        r"$8$"
    ],
    0,
    r"At high temperatures, the vibrational mode is activated. A vibrational mode contributes 2 degrees of freedom (one kinetic energy term and one potential energy term). Thus $f = 3\text{ (trans)} + 2\text{ (rot)} + 2\text{ (vib)} = 7$.",
    "Easy"
)

# Q4
add_q(
    "Degrees of freedom",
    r"A non-linear triatomic gas molecule (such as water vapor $\text{H}_2\text{O}$) treating bonds as rigid has how many degrees of freedom?",
    [
        r"$6$",
        r"$5$",
        r"$7$",
        r"$3$"
    ],
    0,
    r"A rigid non-linear molecule has 3 translational degrees of freedom and 3 rotational degrees of freedom about three mutually perpendicular principal axes. Total $f = 3 + 3 = 6$.",
    "Easy"
)

# Q5
add_q(
    "Degrees of freedom",
    r"A linear triatomic gas molecule (such as carbon dioxide $\text{CO}_2$) at moderate temperatures (with rigid bonds) has how many degrees of freedom?",
    [
        r"$5$",
        r"$6$",
        r"$7$",
        r"$3$"
    ],
    0,
    r"For any linear molecule, the moment of inertia about the molecular axis is negligible, giving only 2 rotational degrees of freedom. Combined with 3 translational degrees of freedom, $f = 3 + 2 = 5$.",
    "Medium"
)

# Q6
add_q(
    "Degrees of freedom",
    r"The general formula for the number of degrees of freedom $f$ of a system containing $N$ particles and $k$ independent relations (constraints) between them is:",
    [
        r"$f = 3N - k$",
        r"$f = 3N + k$",
        r"$f = 2N - k$",
        r"$f = N - 3k$"
    ],
    0,
    r"Each particle has 3 spatial coordinates in 3D space ($3N$ total coordinates). Each independent geometric constraint reduces the degrees of freedom by 1, yielding $f = 3N - k$.",
    "Easy"
)

# Q7
add_q(
    "Degrees of freedom",
    r"For a rigid diatomic molecule with two atoms ($N = 2$) held at a fixed bond length ($k = 1$), the formula $f = 3N - k$ yields:",
    [
        r"$f = 3(2) - 1 = 5$",
        r"$f = 3(2) - 0 = 6$",
        r"$f = 3(2) - 2 = 4$",
        r"$f = 3(2) + 1 = 7$"
    ],
    0,
    r"$$f = 3N - k = 3(2) - 1 = 5$$ consisting of 3 translational and 2 rotational degrees of freedom.",
    "Easy"
)

# Q8
add_q(
    "Degrees of freedom",
    r"For a rigid non-linear triatomic molecule ($N = 3$) with 3 fixed bond lengths forming a triangle ($k = 3$), the number of degrees of freedom is:",
    [
        r"$f = 3(3) - 3 = 6$",
        r"$f = 3(3) - 2 = 7$",
        r"$f = 3(3) - 1 = 8$",
        r"$f = 3(3) - 4 = 5$"
    ],
    0,
    r"$$f = 3N - k = 3(3) - 3 = 6$$ (3 translational + 3 rotational).",
    "Easy"
)

# Q9
add_q(
    "Degrees of freedom",
    r"At very low temperatures (near a few kelvins), hydrogen gas ($\text{H}_2$) behaves like a monoatomic gas because:",
    [
        r"Rotational and vibrational degrees of freedom freeze out due to quantum mechanical energy spacing",
        r"The molecule breaks apart into atomic hydrogen",
        r"Intermolecular attractive forces become infinite",
        r"Translational motion stops completely"
    ],
    0,
    r"The energy level spacing for rotation ($\Delta E_{\text{rot}} \sim \hbar^2 / 2I$) is larger than thermal energy $k_B T$ at very low temperatures ($T < 70\text{ K}$). Hence rotational modes cannot be thermally excited, leaving only 3 translational degrees of freedom.",
    "Medium"
)

# Q10
add_q(
    "Degrees of freedom",
    r"Each vibrational degree of freedom in a molecule contributes how many quadratic energy terms to the total energy?",
    [
        r"$2$ (kinetic and potential)",
        r"$1$ (kinetic only)",
        r"$1$ (potential only)",
        r"$3$"
    ],
    0,
    r"A harmonic vibrational mode possesses both kinetic energy ($\frac{1}{2}m \dot{x}^2$) and potential energy ($\frac{1}{2}k x^2$), thus contributing 2 quadratic terms (or $2 \times \frac{1}{2}k_B T = k_B T$) to the molecular energy.",
    "Easy"
)

# Q11
add_q(
    "Degrees of freedom",
    r"How many translational degrees of freedom does a polyatomic gas molecule (e.g., methane $\text{CH}_4$) possess?",
    [
        r"$3$",
        r"$6$",
        r"$4$",
        r"$1$"
    ],
    0,
    r"Regardless of size or structure, any free particle or molecule moving in three-dimensional space has precisely 3 translational degrees of freedom corresponding to motion along the $x, y,$ and $z$ directions.",
    "Easy"
)

# Q12
add_q(
    "Degrees of freedom",
    r"How many rotational degrees of freedom does a spherical top molecule (like methane $\text{CH}_4$) have?",
    [
        r"$3$",
        r"$2$",
        r"$1$",
        r"$0$"
    ],
    0,
    r"A non-linear 3D polyatomic molecule has 3 non-zero principal moments of inertia ($I_x, I_y, I_z > 0$), giving 3 rotational degrees of freedom.",
    "Easy"
)

# Q13
add_q(
    "Degrees of freedom",
    r"For an atom in a solid crystal undergoing simple harmonic oscillation in three dimensions, the number of vibrational degrees of freedom is:",
    [
        r"$6$",
        r"$3$",
        r"$1$",
        r"$2$"
    ],
    0,
    r"The atom can oscillate along three independent spatial directions ($x, y, z$). Each direction has 1 kinetic and 1 potential energy term (2 degrees of freedom), giving a total of $3 \times 2 = 6$ degrees of freedom.",
    "Medium"
)

# Q14
add_q(
    "Degrees of freedom",
    r"Which of the following molecules has 5 degrees of freedom at ordinary room temperature?",
    [
        r"$\text{N}_2$",
        r"$\text{He}$",
        r"$\text{H}_2\text{O}$",
        r"$\text{CH}_4$"
    ],
    0,
    r"$\text{N}_2$ is a rigid diatomic molecule at room temperature, having $3\text{ translational} + 2\text{ rotational} = 5$ degrees of freedom.",
    "Easy"
)

# Q15
add_q(
    "Degrees of freedom",
    r"Which of the following gases has 3 degrees of freedom at room temperature?",
    [
        r"Neon ($\text{Ne}$)",
        r"Oxygen ($\text{O}_2$)",
        r"Carbon monoxide ($\text{CO}$)",
        r"Ammonia ($\text{NH}_3$)"
    ],
    0,
    r"Neon is a monoatomic gas; its atoms possess only 3 translational degrees of freedom.",
    "Easy"
)

# Q16
add_q(
    "Degrees of freedom",
    r"A linear polyatomic molecule consisting of $N$ atoms has how many vibrational normal modes?",
    [
        r"$3N - 5$",
        r"$3N - 6$",
        r"$3N - 3$",
        r"$3N$"
    ],
    0,
    r"Total degrees of freedom for $N$ atoms is $3N$. A linear molecule has 3 translational and 2 rotational degrees of freedom. The number of vibrational normal modes is $3N - 3 - 2 = 3N - 5$.",
    "Medium"
)

# Q17
add_q(
    "Degrees of freedom",
    r"A non-linear polyatomic molecule consisting of $N$ atoms has how many vibrational normal modes?",
    [
        r"$3N - 6$",
        r"$3N - 5$",
        r"$3N - 3$",
        r"$3N$"
    ],
    0,
    r"Total coordinates are $3N$. A non-linear molecule has 3 translational and 3 rotational degrees of freedom. The remaining vibrational modes are $3N - 3 - 3 = 3N - 6$.",
    "Medium"
)

# Q18
add_q(
    "Degrees of freedom",
    r"How many vibrational normal modes does a non-linear water molecule ($\text{H}_2\text{O}$, $N = 3$) possess?",
    [
        r"$3$",
        r"$4$",
        r"$1$",
        r"$2$"
    ],
    0,
    r"Using the formula for non-linear molecules: $3N - 6 = 3(3) - 6 = 9 - 6 = 3$ vibrational modes (symmetric stretch, asymmetric stretch, bending).",
    "Medium"
)

# Q19
add_q(
    "Degrees of freedom",
    r"How many vibrational normal modes does a linear carbon dioxide molecule ($\text{CO}_2$, $N = 3$) possess?",
    [
        r"$4$",
        r"$3$",
        r"$2$",
        r"$1$"
    ],
    0,
    r"Using the formula for linear molecules: $3N - 5 = 3(3) - 5 = 9 - 5 = 4$ vibrational modes (symmetric stretch, asymmetric stretch, and two degenerate bending modes).",
    "Medium"
)

# Q20
add_q(
    "Degrees of freedom",
    r"If a gas molecule is constrained to move exclusively on a two-dimensional flat plane, its translational degrees of freedom are:",
    [
        r"$2$",
        r"$3$",
        r"$1$",
        r"$0$"
    ],
    0,
    r"In two dimensions, motion is restricted to two coordinates ($x$ and $y$), so the molecule has 2 translational degrees of freedom.",
    "Easy"
)

# Q21
add_q(
    "Degrees of freedom",
    r"A bead sliding frictionlessly along a fixed straight wire has how many degrees of freedom?",
    [
        r"$1$",
        r"$2$",
        r"$3$",
        r"$0$"
    ],
    0,
    r"Motion is constrained to 1 dimension along the line of the wire, requiring only 1 coordinate to specify its position ($f = 1$).",
    "Easy"
)

# Q22
add_q(
    "Degrees of freedom",
    r"Why does a monoatomic gas have zero rotational degrees of freedom?",
    [
        r"Its moment of inertia about any axis passing through its center is negligible compared to molecular dimensions",
        r"Its atoms are rigidly bound to the container",
        r"Its angular velocity is prohibited by Newton's laws",
        r"Electrostatic repulsion cancels rotation"
    ],
    0,
    r"An atom's mass is concentrated within the tiny nucleus (radius $\sim 10^{-15}\text{ m}$). Its moment of inertia $I \sim m r^2$ is extremely tiny, making the quantum rotational energy spacing $\Delta E = \frac{\hbar^2}{2I}$ enormous; hence rotational modes cannot be excited at ordinary temperatures.",
    "Medium"
)

# Q23
add_q(
    "Degrees of freedom",
    r"At $1000\text{ K}$, a diatomic gas like iodine ($\text{I}_2$) with 1 active vibrational mode has total degrees of freedom:",
    [
        r"$7$",
        r"$5$",
        r"$6$",
        r"$8$"
    ],
    0,
    r"Total degrees of freedom = $3\text{ (translational)} + 2\text{ (rotational)} + 2\text{ (vibrational)} = 7$.",
    "Easy"
)

# Q24
add_q(
    "Degrees of freedom",
    r"The ratio of the translational degrees of freedom to the rotational degrees of freedom for a rigid diatomic molecule is:",
    [
        r"$3 : 2$",
        r"$2 : 3$",
        r"$1 : 1$",
        r"$3 : 1$"
    ],
    0,
    r"A rigid diatomic molecule has 3 translational degrees of freedom and 2 rotational degrees of freedom, giving a ratio of $3 : 2$.",
    "Easy"
)

# Q25
add_q(
    "Degrees of freedom",
    r"For a rigid non-linear triatomic molecule, the ratio of translational to rotational degrees of freedom is:",
    [
        r"$1 : 1$",
        r"$3 : 2$",
        r"$2 : 3$",
        r"$3 : 1$"
    ],
    0,
    r"It has 3 translational and 3 rotational degrees of freedom, so the ratio is $3 : 3 = 1 : 1$.",
    "Easy"
)

# Q26
add_q(
    "Degrees of freedom",
    r"A rigid body consisting of 4 point masses located at the vertices of a regular tetrahedron connected by 6 rigid rods has how many degrees of freedom?",
    [
        r"$6$",
        r"$12$",
        r"$8$",
        r"$10$"
    ],
    0,
    r"Any completely rigid 3D body has exactly 6 degrees of freedom (3 translational coordinates of the center of mass and 3 rotational Euler angles). Using $f = 3N - k = 3(4) - 6 = 12 - 6 = 6$.",
    "Medium"
)

# Q27
add_q(
    "Degrees of freedom",
    r"A mixture contains 1 mole of helium ($f_1 = 3$) and 2 moles of oxygen ($f_2 = 5$, rigid). The effective average degrees of freedom per molecule in the mixture is:",
    [
        r"$\frac{13}{3} \approx 4.33$",
        r"$4$",
        r"$4.5$",
        r"$3.67$"
    ],
    0,
    r"$$f_{\text{avg}} = \frac{n_1 f_1 + n_2 f_2}{n_1 + n_2} = \frac{(1 \times 3) + (2 \times 5)}{1 + 2} = \frac{3 + 10}{3} = \frac{13}{3} \approx 4.33$$",
    "Medium"
)

# Q28
add_q(
    "Degrees of freedom",
    r"For a gas with $f$ degrees of freedom, the ratio of specific heats $\gamma$ is related to $f$ by:",
    [
        r"$\gamma = 1 + \frac{2}{f}$",
        r"$\gamma = 1 + \frac{f}{2}$",
        r"$\gamma = \frac{f}{f + 2}$",
        r"$\gamma = 1 - \frac{2}{f}$"
    ],
    0,
    r"Since $C_v = \frac{f}{2}R$ and $C_p = C_v + R = \left(\frac{f}{2} + 1\right)R$, the ratio of specific heats is: $$\gamma = \frac{C_p}{C_v} = \frac{\frac{f}{2} + 1}{\frac{f}{2}} = 1 + \frac{2}{f}$$",
    "Easy"
)

# Q29
add_q(
    "Degrees of freedom",
    r"If a gas has $\gamma = 1.40$, the number of active degrees of freedom of its molecules is:",
    [
        r"$5$",
        r"$3$",
        r"$6$",
        r"$7$"
    ],
    0,
    r"$$\gamma = 1 + \frac{2}{f} \implies 1.40 = 1 + \frac{2}{f} \implies \frac{2}{f} = 0.40 \implies f = \frac{2}{0.4} = 5$$ This corresponds to a rigid diatomic gas.",
    "Easy"
)

# Q30
add_q(
    "Degrees of freedom",
    r"If a gas has $\gamma = 1.67 \approx 5/3$, its molecules possess:",
    [
        r"$3$ degrees of freedom (monoatomic)",
        r"$5$ degrees of freedom (diatomic)",
        r"$6$ degrees of freedom (polyatomic)",
        r"$7$ degrees of freedom"
    ],
    0,
    r"$$1 + \frac{2}{f} = \frac{5}{3} \implies \frac{2}{f} = \frac{2}{3} \implies f = 3$$ Hence the gas is monoatomic.",
    "Easy"
)

# Q31
add_q(
    "Degrees of freedom",
    r"If a gas has $\gamma = 1.33 \approx 4/3$, the number of active degrees of freedom is:",
    [
        r"$6$",
        r"$5$",
        r"$3$",
        r"$7$"
    ],
    0,
    r"$$1 + \frac{2}{f} = \frac{4}{3} \implies \frac{2}{f} = \frac{1}{3} \implies f = 6$$ This corresponds to a non-linear polyatomic gas without vibration.",
    "Easy"
)

# Q32
add_q(
    "Degrees of freedom",
    r"For a diatomic gas molecule with 1 active vibrational mode ($f = 7$), the ratio of specific heats $\gamma$ is:",
    [
        r"$\frac{9}{7} \approx 1.286$",
        r"$\frac{7}{5} = 1.40$",
        r"$\frac{5}{3} \approx 1.667$",
        r"$\frac{4}{3} \approx 1.333$"
    ],
    0,
    r"$$\gamma = 1 + \frac{2}{f} = 1 + \frac{2}{7} = \frac{9}{7} \approx 1.286$$",
    "Easy"
)

# Q33
add_q(
    "Degrees of freedom",
    r"In a certain temperature range, oxygen gas ($\text{O}_2$) exhibits $C_v = \frac{5}{2}R$. This indicates that:",
    [
        r"Only translational and rotational modes are active; vibrational modes are frozen out",
        r"Translational modes are frozen out",
        r"All vibrational modes are active",
        r"The molecules have dissociated into atoms"
    ],
    0,
    r"$C_v = \frac{f}{2}R = \frac{5}{2}R \implies f = 5$, which corresponds to 3 translational + 2 rotational degrees of freedom, showing vibrational modes are dormant.",
    "Easy"
)

# Q34
add_q(
    "Degrees of freedom",
    r"A molecule of chlorine ($\text{Cl}_2$) at very high temperature exhibits $C_v = \frac{7}{2}R$. How many vibrational degrees of freedom are contributing to its heat capacity?",
    [
        r"$2$",
        r"$1$",
        r"$3$",
        r"$4$"
    ],
    0,
    r"Total $f = 7$. Subtracting 3 translational and 2 rotational gives $7 - 5 = 2$ vibrational degrees of freedom (corresponding to 1 vibrational normal mode with kinetic and potential parts).",
    "Medium"
)

# Q35
add_q(
    "Degrees of freedom",
    r"For a rigid linear triatomic molecule (e.g. $\text{CS}_2$), the degrees of freedom are:",
    [
        r"$3$ translational and $2$ rotational",
        r"$3$ translational and $3$ rotational",
        r"$2$ translational and $3$ rotational",
        r"$3$ translational and $1$ rotational"
    ],
    0,
    r"Any linear rigid molecule has 3 translational degrees of freedom and 2 rotational degrees of freedom (rotation about the symmetry axis has negligible moment of inertia).",
    "Easy"
)

# Q36
add_q(
    "Degrees of freedom",
    r"The number of independent coordinates needed to describe the orientation of a rigid body in space is:",
    [
        r"$3$ (Euler angles)",
        r"$2$",
        r"$1$",
        r"$4$"
    ],
    0,
    r"Three independent angles (commonly Euler angles: precession, nutation, intrinsic rotation) are necessary and sufficient to describe the spatial orientation of a rigid body.",
    "Easy"
)

# Q37
add_q(
    "Degrees of freedom",
    r"If a molecule has $N$ atoms, its maximum total number of degrees of freedom (including all translational, rotational, and vibrational modes) is:",
    [
        r"$3N$",
        r"$3N - 6$",
        r"$3N - 5$",
        r"$2N$"
    ],
    0,
    r"Each atom requires 3 spatial coordinates to locate in 3D space, so a collection of $N$ atoms has a total of $3N$ coordinates/degrees of freedom.",
    "Easy"
)

# Q38
add_q(
    "Degrees of freedom",
    r"The benzene molecule ($\text{C}_6\text{H}_6$) consists of 12 atoms and is non-linear. The total number of vibrational normal modes is:",
    [
        r"$30$",
        r"$36$",
        r"$31$",
        r"$24$"
    ],
    0,
    r"For non-linear molecules: number of vibrational normal modes is $3N - 6 = 3(12) - 6 = 36 - 6 = 30$.",
    "Medium"
)

# Q39
add_q(
    "Degrees of freedom",
    r"For acetylene ($\text{C}_2\text{H}_2$), which is a linear 4-atom molecule, the total number of vibrational normal modes is:",
    [
        r"$7$",
        r"$6$",
        r"$8$",
        r"$5$"
    ],
    0,
    r"For linear molecules: $3N - 5 = 3(4) - 5 = 12 - 5 = 7$ vibrational normal modes.",
    "Medium"
)

# Q40
add_q(
    "Degrees of freedom",
    r"An ideal monoatomic gas is confined in a very thin tube of cross-section comparable to atomic dimensions so it can only move along the length of the tube. Its degrees of freedom are:",
    [
        r"$1$",
        r"$2$",
        r"$3$",
        r"$0$"
    ],
    0,
    r"Under 1D confinement, motion along the perpendicular directions is quantum mechanically frozen out into the ground state, leaving only 1 translational degree of freedom.",
    "Medium"
)

# Q41
add_q(
    "Degrees of freedom",
    r"For a gas molecule with $f$ degrees of freedom, the internal energy of $n$ moles at temperature $T$ is:",
    [
        r"$U = \frac{f}{2} n R T$",
        r"$U = f n R T$",
        r"$U = \frac{f - 1}{2} n R T$",
        r"$U = \frac{f + 2}{2} n R T$"
    ],
    0,
    r"Each degree of freedom contributes $\frac{1}{2}k_B T$ per molecule, so for $n$ moles the internal energy is $U = n N_A \times \left(f \times \frac{1}{2}k_B T\right) = \frac{f}{2} n R T$.",
    "Easy"
)

# Q42
add_q(
    "Degrees of freedom",
    r"As the temperature of a diatomic gas is gradually raised from $10\text{ K}$ to $2000\text{ K}$, the value of $\gamma$:",
    [
        r"Decreases in steps from $\frac{5}{3}$ to $\frac{7}{5}$ to $\frac{9}{7}$",
        r"Increases continuously",
        r"Remains constant at $\frac{7}{5}$",
        r"Decreases continuously without plateaus"
    ],
    0,
    r"At very low $T$, only translational modes are active ($f=3 \implies \gamma = 5/3$). At room $T$, rotational modes activate ($f=5 \implies \gamma = 7/5$). At high $T$, vibrational modes activate ($f=7 \implies \gamma = 9/7$). Thus $\gamma$ decreases stepwise.",
    "Medium"
)

# Q43
add_q(
    "Degrees of freedom",
    r"The number of degrees of freedom of a particle moving on the spherical surface of a sphere of radius $R$ is:",
    [
        r"$2$",
        r"$3$",
        r"$1$",
        r"$0$"
    ],
    0,
    r"Position on a 2D spherical surface is completely specified by two angular coordinates $(\theta, \phi)$ because the radial distance $r = R$ is fixed (constraint $k = 1$). Hence $f = 3(1) - 1 = 2$.",
    "Easy"
)

# Q44
add_q(
    "Degrees of freedom",
    r"A dumbbell consists of two equal masses joined by a light spring along the axis. If it is free to rotate and vibrate in 3D space, its total degrees of freedom are:",
    [
        r"$7$",
        r"$5$",
        r"$6$",
        r"$8$"
    ],
    0,
    r"It has 3 translational, 2 rotational, and 2 vibrational (1 kinetic + 1 potential) degrees of freedom. Total $f = 3 + 2 + 2 = 7$.",
    "Easy"
)

# Q45
add_q(
    "Degrees of freedom",
    r"For an ideal gas whose adiabatic exponent is $\gamma = 1.25 = 5/4$, the degrees of freedom of its molecules are:",
    [
        r"$8$",
        r"$6$",
        r"$10$",
        r"$4$"
    ],
    0,
    r"$$\gamma = 1 + \frac{2}{f} \implies \frac{5}{4} = 1 + \frac{2}{f} \implies \frac{2}{f} = \frac{1}{4} \implies f = 8$$",
    "Easy"
)

# Q46
add_q(
    "Degrees of freedom",
    r"A gas of triatomic molecules with triangular structure (non-linear) has 3 rigid bonds. The degrees of freedom are:",
    [
        r"$6$",
        r"$5$",
        r"$7$",
        r"$9$"
    ],
    0,
    r"For $N = 3$ atoms and $k = 3$ constraints: $f = 3(3) - 3 = 6$.",
    "Easy"
)

# Q47
add_q(
    "Degrees of freedom",
    r"If a gas has $f = 4$ degrees of freedom, the molar heat capacity at constant volume $C_v$ is:",
    [
        r"$2R$",
        r"$\frac{3}{2}R$",
        r"$\frac{5}{2}R$",
        r"$3R$"
    ],
    0,
    r"$$C_v = \frac{f}{2}R = \frac{4}{2}R = 2R$$",
    "Easy"
)

# Q48
add_q(
    "Degrees of freedom",
    r"For a gas mixture consisting of equal moles of a monoatomic gas ($f_1 = 3$) and a diatomic gas ($f_2 = 5$), the adiabatic exponent $\gamma_{\text{mix}}$ is:",
    [
        r"$\frac{3}{2} = 1.50$",
        r"$\frac{7}{5} = 1.40$",
        r"$\frac{5}{3} \approx 1.67$",
        r"$\frac{4}{3} \approx 1.33$"
    ],
    0,
    r"Average degrees of freedom: $f_{\text{avg}} = \frac{3 + 5}{2} = 4$. The adiabatic index is: $$\gamma_{\text{mix}} = 1 + \frac{2}{f_{\text{avg}}} = 1 + \frac{2}{4} = 1 + 0.5 = 1.5 = \frac{3}{2}$$",
    "Medium"
)

# Q49
add_q(
    "Degrees of freedom",
    r"The kinetic energy of rotation of a diatomic molecule with angular velocity $\omega_1, \omega_2$ about two perpendicular axes is:",
    [
        r"$\frac{1}{2}I_1 \omega_1^2 + \frac{1}{2}I_2 \omega_2^2$",
        r"$\frac{1}{2}I \omega^2$",
        r"$I_1 \omega_1 + I_2 \omega_2$",
        r"$\frac{1}{2}(I_1 + I_2)(\omega_1 + \omega_2)^2$"
    ],
    0,
    r"The rotational kinetic energy is the sum of two independent quadratic terms corresponding to rotation about the two principal axes perpendicular to the bond: $E_{\text{rot}} = \frac{1}{2}I_1 \omega_1^2 + \frac{1}{2}I_2 \omega_2^2$.",
    "Easy"
)

# Q50
add_q(
    "Degrees of freedom",
    r"How many translational degrees of freedom does an $\alpha$-particle have when moving in free space?",
    [
        r"$3$",
        r"$2$",
        r"$1$",
        r"$0$"
    ],
    0,
    r"An $\alpha$-particle is a helium nucleus ($\text{He}^{2+}$), which is a single particle with 3 translational degrees of freedom.",
    "Easy"
)

# Q51
add_q(
    "Degrees of freedom",
    r"If a molecule has 3 translational, 2 rotational, and 2 vibrational degrees of freedom, the ratio $C_p / C_v$ is:",
    [
        r"$9/7$",
        r"$7/5$",
        r"$5/3$",
        r"$4/3$"
    ],
    0,
    r"Total degrees of freedom $f = 3 + 2 + 2 = 7$. Hence: $$\frac{C_p}{C_v} = 1 + \frac{2}{f} = 1 + \frac{2}{7} = \frac{9}{7}$$",
    "Easy"
)

# Q52
add_q(
    "Degrees of freedom",
    r"A gas of rigid diatomic molecules is at temperature $T$. The average energy associated with its rotational motion per molecule is:",
    [
        r"$k_B T$",
        r"$\frac{1}{2}k_B T$",
        r"$\frac{3}{2}k_B T$",
        r"$\frac{5}{2}k_B T$"
    ],
    0,
    r"A rigid diatomic molecule has 2 rotational degrees of freedom. By the equipartition theorem, each degree of freedom contributes $\frac{1}{2}k_B T$, so rotational energy is $2 \times \frac{1}{2}k_B T = k_B T$.",
    "Easy"
)

# Q53
add_q(
    "Degrees of freedom",
    r"Which of the following physical variables corresponds to a degree of freedom contributing to heat capacity?",
    [
        r"Any coordinate or velocity component that appears quadratically in the Hamiltonian (energy function)",
        r"Any linear momentum component only",
        r"Any spatial coordinate only",
        r"Any quantum spin state"
    ],
    0,
    r"By the equipartition theorem, any independent coordinate or momentum variable that enters quadratically into the Hamiltonian contributes $\frac{1}{2}k_B T$ to the average energy and $\frac{1}{2}R$ to the molar heat capacity.",
    "Medium"
)

# Q54
add_q(
    "Degrees of freedom",
    r"For a rigid linear molecule consisting of $N = 4$ atoms, the total number of degrees of freedom is:",
    [
        r"$5$",
        r"$6$",
        r"$12$",
        r"$7$"
    ],
    0,
    r"If the entire molecule is completely rigid and linear, it has 3 translational degrees of freedom and 2 rotational degrees of freedom. Total $f = 3 + 2 = 5$.",
    "Easy"
)

# Q55
add_q(
    "Degrees of freedom",
    r"A polyatomic gas with $f$ degrees of freedom expands adiabatically such that $T V^{\alpha} = \text{const}$. The value of $\alpha$ is:",
    [
        r"$\frac{2}{f}$",
        r"$\frac{f}{2}$",
        r"$1 + \frac{2}{f}$",
        r"$\frac{1}{f}$"
    ],
    0,
    r"In an adiabatic process for an ideal gas, $T V^{\gamma - 1} = \text{const}$. Since $\gamma = 1 + \frac{2}{f}$, we have $\gamma - 1 = \frac{2}{f}$. Thus $\alpha = \frac{2}{f}$.",
    "Medium"
)

# ==============================================================================
# SUBTOPIC 4: Law of equipartition of energy (55 Questions)
# ==============================================================================

# Q56
add_q(
    "Law of equipartition of energy",
    r"According to the law of equipartition of energy, the average kinetic energy associated with each degree of freedom of an ideal gas molecule at absolute temperature $T$ is:",
    [
        r"$\frac{1}{2} k_B T$",
        r"$k_B T$",
        r"$\frac{3}{2} k_B T$",
        r"$\frac{1}{4} k_B T$"
    ],
    0,
    r"The classical law of equipartition of energy states that for any dynamical system in thermal equilibrium at temperature $T$, the average energy associated with each quadratic degree of freedom is $\frac{1}{2}k_B T$.",
    "Easy"
)

# Q57
add_q(
    "Law of equipartition of energy",
    r"The molar heat capacity at constant volume $C_v$ of a monoatomic ideal gas is:",
    [
        r"$\frac{3}{2} R$",
        r"$\frac{5}{2} R$",
        r"$\frac{1}{2} R$",
        r"$3 R$"
    ],
    0,
    r"For a monoatomic gas ($f = 3$), the internal energy per mole is $U = \frac{3}{2}RT$. Thus $C_v = \frac{dU}{dT} = \frac{3}{2}R$.",
    "Easy"
)

# Q58
add_q(
    "Law of equipartition of energy",
    r"The molar heat capacity at constant pressure $C_p$ of a monoatomic ideal gas is:",
    [
        r"$\frac{5}{2} R$",
        r"$\frac{3}{2} R$",
        r"$\frac{7}{2} R$",
        r"$2 R$"
    ],
    0,
    r"By Mayer's relation $C_p = C_v + R = \frac{3}{2}R + R = \frac{5}{2}R$.",
    "Easy"
)

# Q59
add_q(
    "Law of equipartition of energy",
    r"The value of $\gamma = C_p / C_v$ for a monoatomic ideal gas is:",
    [
        r"$\frac{5}{3} \approx 1.67$",
        r"$\frac{7}{5} = 1.40$",
        r"$\frac{4}{3} \approx 1.33$",
        r"$\frac{9}{7} \approx 1.29$"
    ],
    0,
    r"$$\gamma = \frac{C_p}{C_v} = \frac{\frac{5}{2}R}{\frac{3}{2}R} = \frac{5}{3} \approx 1.67$$",
    "Easy"
)

# Q60
add_q(
    "Law of equipartition of energy",
    r"For a rigid diatomic gas at room temperature, the molar heat capacity at constant volume $C_v$ is:",
    [
        r"$\frac{5}{2} R$",
        r"$\frac{3}{2} R$",
        r"$\frac{7}{2} R$",
        r"$3 R$"
    ],
    0,
    r"For a rigid diatomic gas ($f = 5$), $U = \frac{5}{2}RT$, so $C_v = \frac{dU}{dT} = \frac{5}{2}R$.",
    "Easy"
)

# Q61
add_q(
    "Law of equipartition of energy",
    r"The value of $C_p$ for a rigid diatomic gas at room temperature is:",
    [
        r"$\frac{7}{2} R$",
        r"$\frac{5}{2} R$",
        r"$\frac{9}{2} R$",
        r"$4 R$"
    ],
    0,
    r"$$C_p = C_v + R = \frac{5}{2}R + R = \frac{7}{2}R$$",
    "Easy"
)

# Q62
add_q(
    "Law of equipartition of energy",
    r"The ratio of specific heats $\gamma = C_p / C_v$ for a rigid diatomic gas is:",
    [
        r"$\frac{7}{5} = 1.40$",
        r"$\frac{5}{3} \approx 1.67$",
        r"$\frac{4}{3} \approx 1.33$",
        r"$\frac{9}{7} \approx 1.29$"
    ],
    0,
    r"$$\gamma = \frac{7/2 R}{5/2 R} = \frac{7}{5} = 1.40$$",
    "Easy"
)

# Q63
add_q(
    "Law of equipartition of energy",
    r"If vibrational modes are also active in a diatomic gas, its molar heat capacity at constant volume $C_v$ is:",
    [
        r"$\frac{7}{2} R$",
        r"$\frac{5}{2} R$",
        r"$\frac{9}{2} R$",
        r"$3 R$"
    ],
    0,
    r"With 1 vibrational mode ($f = 7$), $U = \frac{7}{2}RT$, hence $C_v = \frac{7}{2}R$.",
    "Easy"
)

# Q64
add_q(
    "Law of equipartition of energy",
    r"For a diatomic gas with active vibrational modes, the molar heat capacity at constant pressure $C_p$ is:",
    [
        r"$\frac{9}{2} R$",
        r"$\frac{7}{2} R$",
        r"$\frac{5}{2} R$",
        r"$5 R$"
    ],
    0,
    r"$$C_p = C_v + R = \frac{7}{2}R + R = \frac{9}{2}R$$",
    "Easy"
)

# Q65
add_q(
    "Law of equipartition of energy",
    r"For a non-linear triatomic gas (rigid bonds, no vibration), $C_v$ and $C_p$ are respectively:",
    [
        r"$3R$ and $4R$",
        r"$\frac{5}{2}R$ and $\frac{7}{2}R$",
        r"$\frac{3}{2}R$ and $\frac{5}{2}R$",
        r"$4R$ and $5R$"
    ],
    0,
    r"For non-linear polyatomic gas ($f = 6$), $C_v = \frac{6}{2}R = 3R$, and $C_p = C_v + R = 3R + R = 4R$.",
    "Easy"
)

# Q66
add_q(
    "Law of equipartition of energy",
    r"The ratio of specific heats $\gamma$ for a rigid non-linear triatomic gas is:",
    [
        r"$\frac{4}{3} \approx 1.33$",
        r"$\frac{5}{3} \approx 1.67$",
        r"$\frac{7}{5} = 1.40$",
        r"$\frac{9}{7} \approx 1.29$"
    ],
    0,
    r"$$\gamma = \frac{C_p}{C_v} = \frac{4R}{3R} = \frac{4}{3} \approx 1.33$$",
    "Easy"
)

# Q67
add_q(
    "Law of equipartition of energy",
    r"Dulong and Petit's law states that the molar heat capacity of most elemental solids at room temperature is approximately:",
    [
        r"$3R \approx 25\text{ J}/(\text{mol}\cdot\text{K})$",
        r"$\frac{3}{2}R \approx 12.5\text{ J}/(\text{mol}\cdot\text{K})$",
        r"$\frac{5}{2}R \approx 20.8\text{ J}/(\text{mol}\cdot\text{K})$",
        r"$6R \approx 50\text{ J}/(\text{mol}\cdot\text{K})$"
    ],
    0,
    r"In a solid lattice, each atom can oscillate in 3 dimensions with 6 quadratic energy terms (3 kinetic + 3 potential). The total energy per mole is $U = 6 \times \left(\frac{1}{2}RT\right) = 3RT$. Hence $C = \frac{dU}{dT} = 3R \approx 24.9\text{ J}/(\text{mol}\cdot\text{K})$.",
    "Medium"
)

# Q68
add_q(
    "Law of equipartition of energy",
    r"A mixture contains 1 mole of helium and 1 mole of hydrogen ($\text{H}_2$, rigid). The molar heat capacity at constant volume of the mixture $C_{v,\text{mix}}$ is:",
    [
        r"$2R$",
        r"$\frac{3}{2}R$",
        r"$\frac{5}{2}R$",
        r"$\frac{7}{4}R$"
    ],
    0,
    r"$$C_{v,\text{mix}} = \frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \frac{1 \times \frac{3}{2}R + 1 \times \frac{5}{2}R}{1 + 1} = \frac{4R}{2} = 2R$$",
    "Easy"
)

# Q69
add_q(
    "Law of equipartition of energy",
    r"For the mixture in the previous question (1 mole $\text{He}$ + 1 mole rigid $\text{H}_2$), the adiabatic index $\gamma_{\text{mix}}$ is:",
    [
        r"$\frac{3}{2} = 1.50$",
        r"$\frac{7}{5} = 1.40$",
        r"$\frac{5}{3} \approx 1.67$",
        r"$\frac{4}{3} \approx 1.33$"
    ],
    0,
    r"$$C_{p,\text{mix}} = C_{v,\text{mix}} + R = 2R + R = 3R$$ $$\gamma_{\text{mix}} = \frac{C_{p,\text{mix}}}{C_{v,\text{mix}}} = \frac{3R}{2R} = 1.5 = \frac{3}{2}$$",
    "Easy"
)

# Q70
add_q(
    "Law of equipartition of energy",
    r"One mole of a monoatomic gas is mixed with 3 moles of a diatomic gas (rigid). What is $C_{v,\text{mix}}$ for the mixture?",
    [
        r"$\frac{9}{4} R = 2.25 R$",
        r"$2 R$",
        r"$\frac{5}{2} R$",
        r"$\frac{7}{4} R$"
    ],
    0,
    r"$$C_{v,\text{mix}} = \frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \frac{1 \times \left(\frac{3}{2}R\right) + 3 \times \left(\frac{5}{2}R\right)}{1 + 3} = \frac{\frac{3}{2}R + \frac{15}{2}R}{4} = \frac{9R}{4} = 2.25 R$$",
    "Medium"
)

# Q71
add_q(
    "Law of equipartition of energy",
    r"For the mixture in the previous question (1 mole monoatomic + 3 moles diatomic), the value of $\gamma_{\text{mix}}$ is:",
    [
        r"$\frac{13}{9} \approx 1.444$",
        r"$\frac{7}{5} = 1.40$",
        r"$\frac{3}{2} = 1.50$",
        r"$\frac{11}{9} \approx 1.222$"
    ],
    0,
    r"$$C_{p,\text{mix}} = C_{v,\text{mix}} + R = \frac{9}{4}R + R = \frac{13}{4}R$$ $$\gamma_{\text{mix}} = \frac{C_{p,\text{mix}}}{C_{v,\text{mix}}} = \frac{13/4 R}{9/4 R} = \frac{13}{9} \approx 1.444$$",
    "Medium"
)

# Q72
add_q(
    "Law of equipartition of energy",
    r"The internal energy of $2\text{ moles}$ of an ideal monoatomic gas at temperature $300\text{ K}$ is ($R = 8.314\text{ J}/(\text{mol}\cdot\text{K})$):",
    [
        r"$7482.6\text{ J}$",
        r"$3741.3\text{ J}$",
        r"$12471\text{ J}$",
        r"$4988.4\text{ J}$"
    ],
    0,
    r"$$U = \frac{3}{2} n R T = \frac{3}{2} \times 2 \times 8.314 \times 300 = 3 \times 8.314 \times 300 = 7482.6\text{ J}$$",
    "Easy"
)

# Q73
add_q(
    "Law of equipartition of energy",
    r"The internal energy of $1\text{ mole}$ of a rigid diatomic gas at $300\text{ K}$ is:",
    [
        r"$6235.5\text{ J}$",
        r"$3741.3\text{ J}$",
        r"$8729.7\text{ J}$",
        r"$7482.6\text{ J}$"
    ],
    0,
    r"$$U = \frac{5}{2} n R T = \frac{5}{2} \times 1 \times 8.314 \times 300 = 5 \times 8.314 \times 150 = 6235.5\text{ J}$$",
    "Easy"
)

# Q74
add_q(
    "Law of equipartition of energy",
    r"Mayer's formula relating molar heat capacities $C_p$ and $C_v$ of an ideal gas is:",
    [
        r"$C_p - C_v = R$",
        r"$C_v - C_p = R$",
        r"$\frac{C_p}{C_v} = R$",
        r"$C_p + C_v = R$"
    ],
    0,
    r"Robert Mayer derived that the difference between the molar heat capacity at constant pressure and at constant volume is equal to the universal gas constant: $C_p - C_v = R$.",
    "Easy"
)

# Q75
add_q(
    "Law of equipartition of energy",
    r"In terms of specific heats per gram (i.e. $c_p$ and $c_v$), Mayer's relation is written as:",
    [
        r"$c_p - c_v = \frac{R}{M}$",
        r"$c_p - c_v = R$",
        r"$c_p - c_v = M R$",
        r"$c_p - c_v = \frac{M}{R}$"
    ],
    0,
    r"Since molar heat capacity is related to specific heat per gram by $C_p = M c_p$ and $C_v = M c_v$, dividing Mayer's relation by molar mass $M$ gives $c_p - c_v = \frac{R}{M}$.",
    "Easy"
)

# Q76
add_q(
    "Law of equipartition of energy",
    r"For hydrogen gas ($M = 2\text{ g/mol}$) and oxygen gas ($M = 32\text{ g/mol}$), let $c_p - c_v = a$ for $\text{H}_2$ and $c_p - c_v = b$ for $\text{O}_2$. The relation between $a$ and $b$ is:",
    [
        r"$a = 16 b$",
        r"$b = 16 a$",
        r"$a = b$",
        r"$a = 4 b$"
    ],
    0,
    r"$$a = \frac{R}{M_{\text{H}_2}} = \frac{R}{2}, \quad b = \frac{R}{M_{\text{O}_2}} = \frac{R}{32} \implies \frac{a}{b} = \frac{32}{2} = 16 \implies a = 16b$$",
    "Medium"
)

# Q77
add_q(
    "Law of equipartition of energy",
    r"Heat energy is supplied to 1 mole of an ideal monoatomic gas at constant pressure. The fraction of heat that is converted into work done by the gas is:",
    [
        r"$\frac{2}{5}$",
        r"$\frac{3}{5}$",
        r"$\frac{1}{2}$",
        r"$\frac{2}{7}$"
    ],
    0,
    r"Heat supplied at constant pressure: $\Delta Q = n C_p \Delta T = \frac{5}{2} R \Delta T$. Work done: $\Delta W = P \Delta V = R \Delta T$. Fraction converted to work: $$\frac{\Delta W}{\Delta Q} = \frac{R \Delta T}{\frac{5}{2} R \Delta T} = \frac{2}{5} = 40\%$$",
    "Medium"
)

# Q78
add_q(
    "Law of equipartition of energy",
    r"For the same monoatomic gas, the fraction of heat supplied at constant pressure that goes into increasing internal energy is:",
    [
        r"$\frac{3}{5}$",
        r"$\frac{2}{5}$",
        r"$\frac{1}{5}$",
        r"$\frac{4}{5}$"
    ],
    0,
    r"$$\frac{\Delta U}{\Delta Q} = \frac{n C_v \Delta T}{n C_p \Delta T} = \frac{C_v}{C_p} = \frac{1}{\gamma} = \frac{1}{5/3} = \frac{3}{5} = 60\%$$",
    "Medium"
)

# Q79
add_q(
    "Law of equipartition of energy",
    r"Heat energy is supplied to 1 mole of a rigid diatomic gas at constant pressure. The fraction of heat converted into work done is:",
    [
        r"$\frac{2}{7}$",
        r"$\frac{5}{7}$",
        r"$\frac{2}{5}$",
        r"$\frac{1}{7}$"
    ],
    0,
    r"$$\frac{\Delta W}{\Delta Q} = 1 - \frac{1}{\gamma} = 1 - \frac{5}{7} = \frac{2}{7} \approx 28.6\%$$",
    "Medium"
)

# Q80
add_q(
    "Law of equipartition of energy",
    r"The molar heat capacity of water in the solid state (ice) according to classical Dulong-Petit law is predicted to be (treating each molecule as 3 atoms):",
    [
        r"$9R$",
        r"$3R$",
        r"$6R$",
        r"$\frac{3}{2}R$"
    ],
    0,
    r"A water molecule $\text{H}_2\text{O}$ has 3 atoms. Each atom has 6 vibrational degrees of freedom in the crystal lattice. Total internal energy per mole of $\text{H}_2\text{O}$ is $U = 3 \times (3RT) = 9RT$. Thus $C = 9R \approx 74.8\text{ J}/(\text{mol}\cdot\text{K})$.",
    "Medium"
)

# Q81
add_q(
    "Law of equipartition of energy",
    r"Two moles of helium gas undergo a process where temperature increases by $50\text{ K}$. What is the change in internal energy $\Delta U$?",
    [
        r"$1247.1\text{ J}$",
        r"$623.55\text{ J}$",
        r"$2078.5\text{ J}$",
        r"$2494.2\text{ J}$"
    ],
    0,
    r"$$\Delta U = n C_v \Delta T = 2 \times \left(\frac{3}{2} \times 8.314\right) \times 50 = 3 \times 8.314 \times 50 = 1247.1\text{ J}$$",
    "Easy"
)

# Q82
add_q(
    "Law of equipartition of energy",
    r"A cylinder contains $N$ molecules of a diatomic gas. If the temperature is $T$, the total translational kinetic energy of the gas is:",
    [
        r"$\frac{3}{2} N k_B T$",
        r"$\frac{5}{2} N k_B T$",
        r"$N k_B T$",
        r"$\frac{1}{2} N k_B T$"
    ],
    0,
    r"Regardless of whether the gas is monoatomic or diatomic, translational motion is in 3 dimensions only, so translational kinetic energy is always $\frac{3}{2} N k_B T$.",
    "Easy"
)

# Q83
add_q(
    "Law of equipartition of energy",
    r"The total rotational kinetic energy of $N$ molecules of a rigid diatomic gas at temperature $T$ is:",
    [
        r"$N k_B T$",
        r"$\frac{1}{2} N k_B T$",
        r"$\frac{3}{2} N k_B T$",
        r"$\frac{5}{2} N k_B T$"
    ],
    0,
    r"A rigid diatomic molecule has 2 rotational degrees of freedom, each having average energy $\frac{1}{2}k_B T$. Total rotational energy = $N \times \left(2 \times \frac{1}{2}k_B T\right) = N k_B T$.",
    "Easy"
)

# Q84
add_q(
    "Law of equipartition of energy",
    r"The ratio of rotational kinetic energy to translational kinetic energy for a rigid diatomic gas is:",
    [
        r"$2 : 3$",
        r"$3 : 2$",
        r"$1 : 1$",
        r"$5 : 3$"
    ],
    0,
    r"Rotational energy is $k_B T$, translational energy is $\frac{3}{2}k_B T$. Ratio: $$\frac{E_{\text{rot}}}{E_{\text{tr}}} = \frac{k_B T}{\frac{3}{2}k_B T} = \frac{2}{3}$$",
    "Easy"
)

# Q85
add_q(
    "Law of equipartition of energy",
    r"For a non-linear triatomic gas (rigid), the ratio of rotational kinetic energy to translational kinetic energy is:",
    [
        r"$1 : 1$",
        r"$2 : 3$",
        r"$3 : 2$",
        r"$1 : 2$"
    ],
    0,
    r"It has 3 rotational and 3 translational degrees of freedom. Hence rotational energy is $\frac{3}{2}k_B T$ and translational energy is $\frac{3}{2}k_B T$, giving a ratio of $1 : 1$.",
    "Easy"
)

# Q86
add_q(
    "Law of equipartition of energy",
    r"If $n_1$ moles of a gas with adiabatic index $\gamma_1$ are mixed with $n_2$ moles of a gas with adiabatic index $\gamma_2$, the adiabatic index $\gamma_{\text{mix}}$ of the mixture is given by:",
    [
        r"$\frac{n_1 + n_2}{\gamma_{\text{mix}} - 1} = \frac{n_1}{\gamma_1 - 1} + \frac{n_2}{\gamma_2 - 1}$",
        r"$\gamma_{\text{mix}} = \frac{n_1 \gamma_1 + n_2 \gamma_2}{n_1 + n_2}$",
        r"$\frac{1}{\gamma_{\text{mix}}} = \frac{n_1}{\gamma_1} + \frac{n_2}{\gamma_2}$",
        r"$\gamma_{\text{mix}} = \sqrt{\gamma_1 \gamma_2}$"
    ],
    0,
    r"Since $C_v = \frac{R}{\gamma - 1}$, and $C_{v,\text{mix}} = \frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2}$: $$\frac{R}{\gamma_{\text{mix}} - 1} = \frac{n_1 \frac{R}{\gamma_1 - 1} + n_2 \frac{R}{\gamma_2 - 1}}{n_1 + n_2} \implies \frac{n_1 + n_2}{\gamma_{\text{mix}} - 1} = \frac{n_1}{\gamma_1 - 1} + \frac{n_2}{\gamma_2 - 1}$$",
    "Medium"
)

# Q87
add_q(
    "Law of equipartition of energy",
    r"When equal masses of helium ($M_1 = 4\text{ g/mol}$, monoatomic) and oxygen ($M_2 = 32\text{ g/mol}$, diatomic rigid) are mixed, the ratio of moles $n_1 / n_2$ is:",
    [
        r"$8 : 1$",
        r"$1 : 8$",
        r"$4 : 1$",
        r"$1 : 4$"
    ],
    0,
    r"Let mass be $m$. Moles of helium $n_1 = \frac{m}{4}$. Moles of oxygen $n_2 = \frac{m}{32}$. Ratio: $$\frac{n_1}{n_2} = \frac{m/4}{m/32} = \frac{32}{4} = 8$$",
    "Easy"
)

# Q88
add_q(
    "Law of equipartition of energy",
    r"For the mixture in the previous question ($8\text{ moles He} + 1\text{ mole O}_2$), the value of $\gamma_{\text{mix}}$ is:",
    [
        r"$\frac{29}{18} \approx 1.61$",
        r"$\frac{7}{5} = 1.40$",
        r"$\frac{5}{3} \approx 1.67$",
        r"$\frac{3}{2} = 1.50$"
    ],
    0,
    r"$$C_{v,\text{mix}} = \frac{8 \times \frac{3}{2}R + 1 \times \frac{5}{2}R}{8 + 1} = \frac{12R + 2.5R}{9} = \frac{14.5R}{9} = \frac{29}{18}R \dots \text{Wait: } C_{v,\text{mix}} = \frac{29}{18}R$$ Then $C_{p,\text{mix}} = \frac{29}{18}R + R = \frac{47}{18}R$. Then $\gamma_{\text{mix}} = \frac{47}{29} \approx 1.62$. Wait, let's calculate $\frac{47}{29} \approx 1.621$. Let's provide $\frac{47}{29}$ as the correct option!",
    "Medium"
)
# Update Q88 options to be exact
questions[-1]["options"] = [
    r"$\frac{47}{29} \approx 1.62$",
    r"$\frac{29}{18} \approx 1.61$",
    r"$\frac{5}{3} \approx 1.67$",
    r"$\frac{7}{5} = 1.40$"
]
questions[-1]["correctAnswer"] = 0
questions[-1]["explanation"] = r"$$C_{v,\text{mix}} = \frac{8\left(\frac{3}{2}R\right) + 1\left(\frac{5}{2}R\right)}{9} = \frac{29}{18}R$$ $$C_{p,\text{mix}} = C_{v,\text{mix}} + R = \frac{47}{18}R \implies \gamma_{\text{mix}} = \frac{C_{p,\text{mix}}}{C_{v,\text{mix}}} = \frac{47}{29} \approx 1.62$$"

# Q89
add_q(
    "Law of equipartition of energy",
    r"In an adiabatic expansion of an ideal gas, the work done $W$ is related to the change in internal energy $\Delta U$ by:",
    [
        r"$W = -\Delta U$",
        r"$W = \Delta U$",
        r"$W = 0$",
        r"$W = 2\Delta U$"
    ],
    0,
    r"From the First Law of Thermodynamics, $Q = \Delta U + W$. In an adiabatic process $Q = 0$, so $W = -\Delta U = -n C_v \Delta T = \frac{P_1 V_1 - P_2 V_2}{\gamma - 1}$.",
    "Easy"
)

# Q90
add_q(
    "Law of equipartition of energy",
    r"The work done in an adiabatic expansion of $n$ moles of an ideal gas from $(P_1, V_1, T_1)$ to $(P_2, V_2, T_2)$ is:",
    [
        r"$\frac{n R (T_1 - T_2)}{\gamma - 1}$",
        r"$\frac{n R (T_2 - T_1)}{\gamma - 1}$",
        r"$\frac{n R (T_1 - T_2)}{\gamma}$",
        r"$n R (T_1 - T_2)$"
    ],
    0,
    r"$$W = -\Delta U = -n C_v(T_2 - T_1) = n \left(\frac{R}{\gamma - 1}\right)(T_1 - T_2) = \frac{n R (T_1 - T_2)}{\gamma - 1}$$",
    "Easy"
)

# Q91
add_q(
    "Law of equipartition of energy",
    r"The internal energy of an ideal gas depends solely on its:",
    [
        r"Absolute temperature",
        r"Pressure",
        r"Volume",
        r"Density"
    ],
    0,
    r"By Joule's law of ideal gases, intermolecular potential energy is zero, so internal energy consists exclusively of kinetic energy, which depends only on absolute temperature: $U = U(T)$.",
    "Easy"
)

# Q92
add_q(
    "Law of equipartition of energy",
    r"If the molar heat capacity at constant volume of a gas is $C_v = \frac{5}{2}R$, then the gas is:",
    [
        r"Diatomic rigid",
        r"Monoatomic",
        r"Triatomic non-linear",
        r"A solid element"
    ],
    0,
    r"Since $C_v = \frac{f}{2}R = \frac{5}{2}R$, the number of degrees of freedom is $f = 5$, which identifies the gas as a rigid diatomic gas.",
    "Easy"
)

# Q93
add_q(
    "Law of equipartition of energy",
    r"The molar heat capacity of an ideal gas during a process $P V^n = \text{const}$ (polytropic process) is given by:",
    [
        r"$C = C_v + \frac{R}{1 - n}$",
        r"$C = C_v - \frac{R}{1 - n}$",
        r"$C = C_p + \frac{R}{1 - n}$",
        r"$C = C_v + \frac{R}{n - 1}$"
    ],
    0,
    r"For a polytropic process $P V^n = \text{const}$, work done per mole is $W = \frac{R \Delta T}{1 - n}$. By the first law, $Q = \Delta U + W = C_v \Delta T + \frac{R \Delta T}{1 - n}$. Dividing by $\Delta T$ gives $C = C_v + \frac{R}{1 - n}$.",
    "Medium"
)

# Q94
add_q(
    "Law of equipartition of energy",
    r"An ideal monoatomic gas undergoes a process where $P V^2 = \text{const}$. Its molar heat capacity $C$ for this process is:",
    [
        r"$\frac{1}{2} R$",
        r"$\frac{5}{2} R$",
        r"$\frac{3}{2} R$",
        r"$- \frac{1}{2} R$"
    ],
    0,
    r"Here $n = 2$ and for a monoatomic gas $C_v = \frac{3}{2}R$. Using the polytropic heat capacity formula: $$C = C_v + \frac{R}{1 - n} = \frac{3}{2}R + \frac{R}{1 - 2} = \frac{3}{2}R - R = \frac{1}{2}R$$",
    "Medium"
)

# Q95
add_q(
    "Law of equipartition of energy",
    r"An ideal monoatomic gas undergoes an isobaric expansion. The molar heat capacity for this process is:",
    [
        r"$\frac{5}{2} R$",
        r"$\frac{3}{2} R$",
        r"$R$",
        r"$\infty$"
    ],
    0,
    r"At constant pressure (isobaric), $C = C_p = C_v + R = \frac{3}{2}R + R = \frac{5}{2}R$.",
    "Easy"
)

# Q96
add_q(
    "Law of equipartition of energy",
    r"The molar heat capacity of an ideal gas during an isothermal process is:",
    [
        r"$\infty$",
        r"$0$",
        r"$R$",
        r"$C_v$"
    ],
    0,
    r"In an isothermal process, temperature change is zero ($\Delta T = 0$) while heat transfer is non-zero ($Q \neq 0$). Thus $C = \frac{Q}{n \Delta T} = \infty$.",
    "Easy"
)

# Q97
add_q(
    "Law of equipartition of energy",
    r"The molar heat capacity of an ideal gas during an adiabatic process is:",
    [
        r"$0$",
        r"$\infty$",
        r"$C_v$",
        r"$R$"
    ],
    0,
    r"In an adiabatic process, heat exchange is zero ($Q = 0$). Thus $C = \frac{Q}{n \Delta T} = 0$.",
    "Easy"
)

# Q98
add_q(
    "Law of equipartition of energy",
    r"An ideal monoatomic gas expands such that $P T = \text{const}$. The molar heat capacity of the gas in this process is:",
    [
        r"$2.5 R$",
        r"$1.5 R$",
        r"$3.5 R$",
        r"$0.5 R$"
    ],
    0,
    r"From $P T = \text{const}$, substitute $T = \frac{PV}{nR} \implies P\left(\frac{PV}{nR}\right) = \text{const} \implies P^2 V = \text{const} \implies P V^{1/2} = \text{const}$. Thus polytropic index $n = 1/2$. For monoatomic gas: $$C = C_v + \frac{R}{1 - n} = \frac{3}{2}R + \frac{R}{1 - 1/2} = \frac{3}{2}R + 2R = \frac{7}{2}R = 3.5 R$$ Wait! Let's verify: $P T = \text{const}$. $P(PV) = \text{const} \implies P^2 V = \text{const} \implies P V^{1/2} = \text{const}$. Then $n = 1/2$. $\frac{R}{1 - 1/2} = 2R$. $C = \frac{3}{2}R + 2R = \frac{7}{2}R = 3.5R$. Let's make $3.5 R$ Option 0!",
    "Medium"
)
# Update Q98 options
questions[-1]["options"] = [
    r"$3.5 R$",
    r"$2.5 R$",
    r"$1.5 R$",
    r"$0.5 R$"
]
questions[-1]["correctAnswer"] = 0
questions[-1]["explanation"] = r"Since $P T = \text{const}$ and $P V = n R T \implies T = \frac{P V}{n R}$, we get $P \left(\frac{P V}{n R}\right) = \text{const} \implies P^2 V = \text{const} \implies P V^{1/2} = \text{const}$. This is a polytropic process with $n = 1/2$. Therefore: $$C = C_v + \frac{R}{1 - n} = \frac{3}{2}R + \frac{R}{1 - 1/2} = \frac{3}{2}R + 2R = \frac{7}{2}R = 3.5 R$$"

# Q99
add_q(
    "Law of equipartition of energy",
    r"Two moles of an ideal monoatomic gas are mixed with 1 mole of a rigid diatomic gas. If the mixture is heated by $10\text{ K}$ at constant volume, the heat supplied is:",
    [
        r"$55 R \approx 457.3\text{ J}$",
        r"$65 R \approx 540.4\text{ J}$",
        r"$45 R \approx 374.1\text{ J}$",
        r"$35 R \approx 291.0\text{ J}$"
    ],
    0,
    r"$$C_{v1} = \frac{3}{2}R, \quad C_{v2} = \frac{5}{2}R$$ Total heat capacity at constant volume: $$C_{v,\text{total}} = n_1 C_{v1} + n_2 C_{v2} = 2\left(\frac{3}{2}R\right) + 1\left(\frac{5}{2}R\right) = 3R + 2.5R = 5.5R$$ Heat supplied: $$Q = C_{v,\text{total}} \Delta T = 5.5R \times 10 = 55R \approx 55 \times 8.314 \approx 457.3\text{ J}$$",
    "Medium"
)

# Q100
add_q(
    "Law of equipartition of energy",
    r"For an ideal gas, the difference between molar heat capacities $C_p - C_v = R$. What is the corresponding difference between specific heats per unit mass $c_p - c_v$ for air (average molar mass $29\text{ g/mol}$)?",
    [
        r"$286.7\text{ J}/(\text{kg}\cdot\text{K})$",
        r"$8314\text{ J}/(\text{kg}\cdot\text{K})$",
        r"$1005\text{ J}/(\text{kg}\cdot\text{K})$",
        r"$718\text{ J}/(\text{kg}\cdot\text{K})$"
    ],
    0,
    r"$$c_p - c_v = \frac{R}{M} = \frac{8314\text{ J}/(\text{kmol}\cdot\text{K})}{29\text{ kg/kmol}} \approx 286.7\text{ J}/(\text{kg}\cdot\text{K})$$",
    "Easy"
)

# Q101
add_q(
    "Law of equipartition of energy",
    r"The average energy of 1 mole of a non-linear triatomic gas at temperature $T$ (assuming rigid bonds) is:",
    [
        r"$3 R T$",
        r"$\frac{5}{2} R T$",
        r"$\frac{3}{2} R T$",
        r"$4 R T$"
    ],
    0,
    r"For a non-linear triatomic gas with rigid bonds, $f = 6$. Total internal energy per mole is $U = \frac{f}{2}RT = \frac{6}{2}RT = 3RT$.",
    "Easy"
)

# Q102
add_q(
    "Law of equipartition of energy",
    r"The ratio of the speed of sound $v_s = \sqrt{\frac{\gamma P}{\rho}}$ in helium gas ($\text{He}$, monoatomic) to that in hydrogen gas ($\text{H}_2$, diatomic) at the same temperature is:",
    [
        r"$\sqrt{\frac{25}{42}} \approx 0.77$",
        r"$\sqrt{\frac{42}{25}} \approx 1.30$",
        r"$\sqrt{2} \approx 1.41$",
        r"$\frac{1}{\sqrt{2}} \approx 0.71$"
    ],
    0,
    r"For helium: $\gamma_1 = 5/3$, $M_1 = 4$. For hydrogen: $\gamma_2 = 7/5$, $M_2 = 2$. Speed of sound $v = \sqrt{\frac{\gamma RT}{M}}$. Ratio: $$\frac{v_{\text{He}}}{v_{\text{H}_2}} = \sqrt{\frac{\gamma_1 / M_1}{\gamma_2 / M_2}} = \sqrt{\frac{(5/3)/4}{(7/5)/2}} = \sqrt{\frac{5/12}{7/10}} = \sqrt{\frac{50}{84}} = \sqrt{\frac{25}{42}} \approx 0.77$$",
    "Medium"
)

# Q103
add_q(
    "Law of equipartition of energy",
    r"When an ideal diatomic gas expands adiabatically to 32 times its initial volume, its final absolute temperature becomes what fraction of its initial temperature? (Take $\gamma = 7/5$):",
    [
        r"$\frac{1}{4}$",
        r"$\frac{1}{2}$",
        r"$\frac{1}{8}$",
        r"$\frac{1}{16}$"
    ],
    0,
    r"For adiabatic expansion: $T_1 V_1^{\gamma - 1} = T_2 V_2^{\gamma - 1} \implies \frac{T_2}{T_1} = \left(\frac{V_1}{V_2}\right)^{\gamma - 1} = \left(\frac{1}{32}\right)^{7/5 - 1} = \left(\frac{1}{32}\right)^{2/5} = \left(2^{-5}\right)^{2/5} = 2^{-2} = \frac{1}{4}$.",
    "Medium"
)

# Q104
add_q(
    "Law of equipartition of energy",
    r"An ideal gas with $\gamma = 1.5$ is compressed adiabatically to $\frac{1}{4}\text{th}$ of its original volume. The pressure increases by a factor of:",
    [
        r"$8$",
        r"$4$",
        r"$16$",
        r"$2$"
    ],
    0,
    r"For an adiabatic process: $P_1 V_1^\gamma = P_2 V_2^\gamma \implies P_2 = P_1 \left(\frac{V_1}{V_2}\right)^\gamma = P_1 (4)^{1.5} = P_1 (4)^{3/2} = P_1 (\sqrt{4})^3 = 8 P_1$.",
    "Easy"
)

# Q105
add_q(
    "Law of equipartition of energy",
    r"The average kinetic energy of a molecule in a gas depends only on:",
    [
        r"Temperature of the gas",
        r"Mass of the molecule",
        r"Volume of the container",
        r"Density of the gas"
    ],
    0,
    r"By the equipartition theorem, the average energy per degree of freedom is $\frac{1}{2}k_B T$, which depends strictly on temperature.",
    "Easy"
)

# Q106
add_q(
    "Law of equipartition of energy",
    r"For a gas possessing $f$ degrees of freedom, the molar heat capacity at constant pressure is:",
    [
        r"$\left(\frac{f}{2} + 1\right) R$",
        r"$\frac{f}{2} R$",
        r"$(f + 1) R$",
        r"$\left(\frac{f + 1}{2}\right) R$"
    ],
    0,
    r"$$C_p = C_v + R = \frac{f}{2}R + R = \left(\frac{f}{2} + 1\right)R$$",
    "Easy"
)

# Q107
add_q(
    "Law of equipartition of energy",
    r"If 1 mole of a monoatomic gas ($\gamma_1 = 5/3$) and 1 mole of a diatomic gas ($\gamma_2 = 7/5$) are mixed, the value of $\gamma$ for the mixture is:",
    [
        r"$1.50$",
        r"$1.40$",
        r"$1.67$",
        r"$1.33$"
    ],
    0,
    r"$$C_{v,\text{mix}} = \frac{1(1.5R) + 1(2.5R)}{2} = 2R, \quad C_{p,\text{mix}} = 2R + R = 3R \implies \gamma_{\text{mix}} = \frac{3R}{2R} = 1.50$$",
    "Easy"
)

# Q108
add_q(
    "Law of equipartition of energy",
    r"Under what condition does the classical law of equipartition of energy fail?",
    [
        r"At very low temperatures where quantum energy quantization prevents excitation of certain modes",
        r"At high temperatures",
        r"At high pressures",
        r"For monoatomic gases"
    ],
    0,
    r"Classical equipartition assumes continuous energy levels. When thermal energy $k_B T$ is much smaller than the quantum level spacing $\Delta E = \hbar \omega$, the mode cannot be excited (quantum freeze-out).",
    "Medium"
)

# Q109
add_q(
    "Law of equipartition of energy",
    r"For an ideal gas, the internal energy change during an isothermal expansion is:",
    [
        r"Zero",
        r"Positive",
        r"Negative",
        r"Equal to the heat absorbed"
    ],
    0,
    r"Since internal energy depends solely on temperature for an ideal gas, $\Delta T = 0 \implies \Delta U = 0$.",
    "Easy"
)

# Q110
add_q(
    "Law of equipartition of energy",
    r"If the internal energy of 1 mole of a gas is given by $U = \frac{5}{2}RT + \text{constant}$, the ratio of its specific heats is:",
    [
        r"$1.40$",
        r"$1.67$",
        r"$1.33$",
        r"$1.29$"
    ],
    0,
    r"$$C_v = \frac{dU}{dT} = \frac{5}{2}R \implies C_p = \frac{5}{2}R + R = \frac{7}{2}R \implies \gamma = \frac{7/2}{5/2} = \frac{7}{5} = 1.40$$",
    "Easy"
)

print(f"Total questions in KTG part 2: {len(questions)}")
with open("scripts/emw_ktg/ktg_batch2.json", "w") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/emw_ktg/ktg_batch2.json")
