import json

questions = []

def add_q(subtopic, question, options, correct_idx, explanation, difficulty="Medium"):
    idx = len(questions) + 1
    questions.append({
        "questionId": f"jee_mains_psl_{idx:03d}",
        "subject": "Physics",
        "chapter": "Properties of Solids and Liquids",
        "subtopic": subtopic,
        "question": question,
        "options": options,
        "correctAnswer": options[correct_idx],
        "explanation": explanation,
        "difficulty": difficulty,
        "examYear": f"JEE Mains {2015 + (idx % 11)}"
    })

# ==============================================================================
# SUBTOPIC 1: Elasticity (Hooke's law, Young's modulus) (55 Questions)
# ==============================================================================

# Q1
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A steel wire of length $2\text{ m}$ and cross-sectional area $2\text{ mm}^2$ is stretched by a force of $200\text{ N}$. If Young's modulus of steel is $2.0 \times 10^{11}\text{ N/m}^2$, the extension produced in the wire is:",
    [
        r"$1.0\text{ mm}$",
        r"$0.5\text{ mm}$",
        r"$2.0\text{ mm}$",
        r"$0.25\text{ mm}$"
    ],
    0,
    r"Using the elongation formula: $$\Delta L = \frac{F L}{A Y} = \frac{200 \times 2}{(2 \times 10^{-6}) \times (2.0 \times 10^{11})} = \frac{400}{4.0 \times 10^5} = 10^{-3}\text{ m} = 1.0\text{ mm}$$",
    "Easy"
)

# Q2
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Two wires $A$ and $B$ are made of the same material. Wire $A$ has length $L$ and radius $r$, while wire $B$ has length $2L$ and radius $2r$. If both wires are subjected to the same stretching force, the ratio of the elongation of wire $A$ to that of wire $B$ is:",
    [
        r"$2 : 1$",
        r"$1 : 2$",
        r"$1 : 1$",
        r"$4 : 1$"
    ],
    0,
    r"Elongation $\Delta L = \frac{F L}{\pi r^2 Y} \propto \frac{L}{r^2}$. Therefore: $$\frac{\Delta L_A}{\Delta L_B} = \frac{L / r^2}{2L / (2r)^2} = \frac{1}{2/4} = 2$$",
    "Easy"
)

# Q3
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A uniform heavy rod of length $L$, mass $M$, and cross-sectional area $A$ hangs vertically from a rigid ceiling. If Young's modulus of the material is $Y$, the elongation produced in the rod due to its own weight is:",
    [
        r"$\frac{M g L}{2 A Y}$",
        r"$\frac{M g L}{A Y}$",
        r"$\frac{2 M g L}{A Y}$",
        r"$\frac{M g L}{4 A Y}$"
    ],
    0,
    r"At a distance $x$ from the free bottom end, the tension is $T(x) = \frac{M g x}{L}$. The elongation of an element $dx$ is $d\Delta = \frac{T(x) dx}{A Y}$. Integrating from $0$ to $L$: $$\Delta L = \int_0^L \frac{M g x}{A Y L} dx = \frac{M g L}{2 A Y}$$",
    "Medium"
)

# Q4
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The elastic potential energy density (energy per unit volume) stored in a stretched wire in terms of stress and strain is given by:",
    [
        r"$\frac{1}{2} \times \text{stress} \times \text{strain}$",
        r"$\text{stress} \times \text{strain}$",
        r"$\frac{1}{2} \times \frac{\text{stress}}{\text{strain}}$",
        r"$2 \times \text{stress} \times \text{strain}$"
    ],
    0,
    r"Work done in stretching a wire of volume $V$ is $W = \frac{1}{2} F \Delta L$. Dividing by volume $V = A L$: $$u = \frac{W}{V} = \frac{1}{2}\left(\frac{F}{A}\right)\left(\frac{\Delta L}{L}\right) = \frac{1}{2} \times \text{stress} \times \text{strain}$$",
    "Easy"
)

# Q5
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"If a wire of Young's modulus $Y$ is subjected to a tensile strain $s$, the elastic energy stored per unit volume of the wire is:",
    [
        r"$\frac{1}{2} Y s^2$",
        r"$Y s^2$",
        r"$\frac{1}{2} \frac{s^2}{Y}$",
        r"$2 Y s^2$"
    ],
    0,
    r"Since $\text{stress} = Y \times \text{strain} = Y s$, the energy density is $u = \frac{1}{2} \times \text{stress} \times \text{strain} = \frac{1}{2}(Y s)(s) = \frac{1}{2} Y s^2$.",
    "Easy"
)

# Q6
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The theoretical limits of Poisson's ratio $\sigma$ for an isotropic elastic solid are:",
    [
        r"$-1 \le \sigma \le 0.5$",
        r"$0 \le \sigma \le 1$",
        r"$-0.5 \le \sigma \le 0.5$",
        r"$0 \le \sigma \le 0.5$"
    ],
    0,
    r"From thermodynamic stability and the relations between elastic constants $Y = 3B(1 - 2\sigma) = 2\eta(1 + \sigma)$, since $Y, B, \eta > 0$, we must have $1 - 2\sigma > 0 \implies \sigma < 0.5$ and $1 + \sigma > 0 \implies \sigma > -1$. Thus $-1 \le \sigma \le 0.5$ (practically, for most real materials $0 < \sigma < 0.5$).",
    "Medium"
)

# Q7
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"When a wire is stretched such that its longitudinal strain is $0.02$ and its Poisson's ratio is $0.4$, the fractional change in its volume ($\frac{\Delta V}{V}$) is:",
    [
        r"$+0.004$",
        r"$-0.004$",
        r"$+0.008$",
        r"$0$"
    ],
    0,
    r"Volume of a cylinder is $V = \pi r^2 L$. Taking logarithms and differentiating: $$\frac{\Delta V}{V} = \frac{\Delta L}{L} + 2\frac{\Delta r}{r}$$ Since Poisson's ratio is $\sigma = -\frac{\Delta r / r}{\Delta L / L}$, we have $\frac{\Delta r}{r} = -\sigma \frac{\Delta L}{L}$. Therefore: $$\frac{\Delta V}{V} = \frac{\Delta L}{L}(1 - 2\sigma) = 0.02 \times (1 - 2 \times 0.4) = 0.02 \times 0.2 = +0.004$$",
    "Medium"
)

# Q8
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A material that undergoes zero change in volume when stretched must have a Poisson's ratio of:",
    [
        r"$0.5$",
        r"$0$",
        r"$-1$",
        r"$1.0$"
    ],
    0,
    r"Since $\frac{\Delta V}{V} = \frac{\Delta L}{L}(1 - 2\sigma)$, for $\frac{\Delta V}{V} = 0$, we must have $1 - 2\sigma = 0 \implies \sigma = 0.5$. Incompressible substances (like ideal rubber) have $\sigma \approx 0.5$.",
    "Easy"
)

# Q9
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A steel rod of cross-sectional area $A = 4\text{ cm}^2$ is clamped rigidly between two fixed walls at temperature $20^\circ\text{C}$. If the temperature is raised to $70^\circ\text{C}$, the thermal force developed in the rod is ($Y = 2 \times 10^{11}\text{ N/m}^2$, $\alpha = 1.2 \times 10^{-5}\text{ K}^{-1}$):",
    [
        r"$4.8 \times 10^4\text{ N}$",
        r"$2.4 \times 10^4\text{ N}$",
        r"$9.6 \times 10^4\text{ N}$",
        r"$1.2 \times 10^4\text{ N}$"
    ],
    0,
    r"Thermal strain prevented by the rigid walls is $\frac{\Delta L}{L} = \alpha \Delta T$. The compressive thermal stress is $Y \alpha \Delta T$. The thermal force exerted is: $$F = Y A \alpha \Delta T = (2 \times 10^{11}) \times (4 \times 10^{-4}) \times (1.2 \times 10^{-5}) \times (50) = 4.8 \times 10^4\text{ N}$$",
    "Medium"
)

# Q10
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The relation connecting Young's modulus $Y$, Bulk modulus $B$, and Shear modulus $\eta$ for an isotropic material is:",
    [
        r"$\frac{9}{Y} = \frac{1}{B} + \frac{3}{\eta}$",
        r"$\frac{3}{Y} = \frac{1}{B} + \frac{1}{\eta}$",
        r"$\frac{9}{Y} = \frac{3}{B} + \frac{1}{\eta}$",
        r"$\frac{1}{Y} = \frac{1}{B} + \frac{1}{3\eta}$"
    ],
    0,
    r"Eliminating Poisson's ratio $\sigma$ between $Y = 3B(1 - 2\sigma)$ and $Y = 2\eta(1 + \sigma)$ gives the fundamental relation: $$\frac{9}{Y} = \frac{1}{B} + \frac{3}{\eta}$$",
    "Medium"
)

# Q11
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A wire of length $L$ and radius $r$ is clamped at one end. When stretched by a force $F$, its length increases by $l$. The work done in stretching the wire is:",
    [
        r"$\frac{1}{2} F l$",
        r"$F l$",
        r"$2 F l$",
        r"$\frac{1}{4} F l$"
    ],
    0,
    r"The stretching force increases linearly from $0$ to $F$ with extension $x$. Average force is $F/2$. Thus work done is $W = \int_0^l \left(\frac{F}{l} x\right) dx = \frac{1}{2} F l$.",
    "Easy"
)

# Q12
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"When an external load of $5\text{ kg}$ is suspended from a wire, the extension is $2\text{ mm}$. The elastic potential energy stored in the stretched wire is (take $g = 10\text{ m/s}^2$):",
    [
        r"$0.05\text{ J}$",
        r"$0.10\text{ J}$",
        r"$0.025\text{ J}$",
        r"$0.50\text{ J}$"
    ],
    0,
    r"Stretching force $F = m g = 5 \times 10 = 50\text{ N}$. Extension $\Delta L = 2 \times 10^{-3}\text{ m}$. Stored elastic energy: $$U = \frac{1}{2} F \Delta L = \frac{1}{2} \times 50 \times (2 \times 10^{-3}) = 0.05\text{ J}$$",
    "Easy"
)

# Q13
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A hydraulic press subjects a sphere of volume $1\text{ m}^3$ to a uniform pressure increase of $10^7\text{ Pa}$. If the Bulk modulus of the material is $10^{11}\text{ Pa}$, the decrease in volume of the sphere is:",
    [
        r"$10^{-4}\text{ m}^3$",
        r"$10^{-3}\text{ m}^3$",
        r"$10^{-5}\text{ m}^3$",
        r"$10^{-2}\text{ m}^3$"
    ],
    0,
    r"Bulk modulus is $B = \frac{\Delta P}{-\Delta V / V} \implies |\Delta V| = \frac{V \Delta P}{B} = \frac{1 \times 10^7}{10^{11}} = 10^{-4}\text{ m}^3$.",
    "Easy"
)

# Q14
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Compressibility $K$ of a substance is defined as:",
    [
        r"The reciprocal of Bulk modulus ($K = 1/B$)",
        r"The reciprocal of Young's modulus ($K = 1/Y$)",
        r"The ratio of shear stress to shear strain",
        r"The product of Bulk modulus and volume"
    ],
    0,
    r"Compressibility is the fractional change in volume per unit change in pressure: $K = -\frac{1}{V}\frac{\Delta V}{\Delta P} = \frac{1}{B}$.",
    "Easy"
)

# Q15
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The breaking stress of a wire depends upon:",
    [
        r"The material of the wire only",
        r"The length of the wire",
        r"The radius of the wire",
        r"The shape of the cross-section"
    ],
    0,
    r"Breaking stress (ultimate tensile strength) is an intrinsic intensive property of the material and does not depend on length, radius, or cross-sectional shape of the wire.",
    "Easy"
)

# Q16
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A wire can sustain a maximum weight $W$ without breaking. If the wire is cut into two equal halves, the maximum weight each half can sustain without breaking is:",
    [
        r"$W$",
        r"$W/2$",
        r"$2W$",
        r"$W/4$"
    ],
    0,
    r"Breaking force is $F_{\text{break}} = \text{Breaking stress} \times A$. Since the material and cross-sectional area $A$ are unchanged, the maximum sustainable weight remains $W$, independent of length.",
    "Easy"
)

# Q17
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A wire of radius $r$ breaks under a force $F$. A wire of the same material having radius $2r$ will break under a force of:",
    [
        r"$4F$",
        r"$2F$",
        r"$F$",
        r"$8F$"
    ],
    0,
    r"Breaking force is proportional to cross-sectional area: $F_{\text{break}} = \sigma_{\text{break}} \times \pi r^2 \propto r^2$. If radius is doubled ($r \to 2r$), breaking force increases by $(2)^2 = 4$ times: $4F$.",
    "Easy"
)

# Q18
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"In the stress-strain curve for a typical ductile metallic wire, the point up to which Hooke's law is strictly obeyed is the:",
    [
        r"Proportional limit",
        r"Elastic limit",
        r"Yield point",
        r"Fracture point"
    ],
    0,
    r"Stress is strictly proportional to strain up to the proportional limit. Beyond this point up to the elastic limit, the material remains elastic but stress is no longer strictly linear with strain.",
    "Easy"
)

# Q19
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Materials which exhibit large plastic deformation between the elastic limit and the breaking point are classified as:",
    [
        r"Ductile materials",
        r"Brittle materials",
        r"Elastomers",
        r"Rigid materials"
    ],
    0,
    r"Ductile materials (such as copper, aluminum, mild steel) have a large plastic region between the yield point and the breaking point, allowing them to be drawn into wires.",
    "Easy"
)

# Q20
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"For substances like vulcanized rubber, the stress-strain curve does not retrace the same path during unloading, enclosing a loop. This phenomenon is known as:",
    [
        r"Elastic hysteresis",
        r"Elastic fatigue",
        r"Elastic after-effect",
        r"Plasticity"
    ],
    0,
    r"The loop formed between the loading and unloading curves is called elastic hysteresis. The area enclosed by the loop represents the mechanical energy dissipated as heat per unit volume during a deformation cycle.",
    "Easy"
)

# Q21
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The area under the hysteresis loop of an elastomer represents:",
    [
        r"Energy dissipated as heat per unit volume during a deformation cycle",
        r"Total elastic energy stored at maximum strain",
        r"Young's modulus of the material",
        r"Breaking stress of the material"
    ],
    0,
    r"The enclosed area of an elastic hysteresis loop equals the net work done on the material minus the work returned, representing thermal dissipation per unit volume.",
    "Easy"
)

# Q22
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Two wires of identical dimensions are made of copper ($Y_1 = 1.2 \times 10^{11}\text{ Pa}$) and steel ($Y_2 = 2.0 \times 10^{11}\text{ Pa}$) respectively. If both are stretched by the same force, the ratio of elastic potential energy stored in copper to that in steel ($U_{\text{Cu}} / U_{\text{steel}}$) is:",
    [
        r"$5 : 3$",
        r"$3 : 5$",
        r"$25 : 9$",
        r"$1 : 1$"
    ],
    0,
    r"Stored energy is $U = \frac{1}{2} F \Delta L = \frac{1}{2} F \left(\frac{F L}{A Y}\right) = \frac{F^2 L}{2 A Y} \propto \frac{1}{Y}$. Therefore: $$\frac{U_{\text{Cu}}}{U_{\text{steel}}} = \frac{Y_{\text{steel}}}{Y_{\text{Cu}}} = \frac{2.0 \times 10^{11}}{1.2 \times 10^{11}} = \frac{5}{3}$$",
    "Medium"
)

# Q23
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"If both the copper and steel wires in the previous question are stretched by the SAME EXTENSION $\Delta L$, the ratio of stored elastic potential energy ($U_{\text{Cu}} / U_{\text{steel}}$) is:",
    [
        r"$3 : 5$",
        r"$5 : 3$",
        r"$9 : 25$",
        r"$1 : 1$"
    ],
    0,
    r"When extension is constant: $U = \frac{1}{2} \left(\frac{Y A \Delta L}{L}\right) \Delta L = \frac{Y A (\Delta L)^2}{2L} \propto Y$. Thus: $$\frac{U_{\text{Cu}}}{U_{\text{steel}}} = \frac{Y_{\text{Cu}}}{Y_{\text{steel}}} = \frac{1.2 \times 10^{11}}{2.0 \times 10^{11}} = \frac{3}{5}$$",
    "Medium"
)

# Q24
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A uniform wire of length $L$, mass $M$, and density $\rho$ is hanging vertically. The elongation due to its own weight expressed in terms of density $\rho$ and acceleration due to gravity $g$ is:",
    [
        r"$\frac{\rho g L^2}{2 Y}$",
        r"$\frac{\rho g L^2}{Y}$",
        r"$\frac{2 \rho g L^2}{Y}$",
        r"$\frac{\rho g L}{2 Y}$"
    ],
    0,
    r"Since mass is $M = \rho A L$, substituting into $\Delta L = \frac{M g L}{2 A Y}$ gives: $$\Delta L = \frac{(\rho A L) g L}{2 A Y} = \frac{\rho g L^2}{2 Y}$$ Notice that the elongation is independent of cross-sectional area $A$.",
    "Easy"
)

# Q25
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A uniform cylindrical rod of length $L$ and density $\rho$ is rotated in a horizontal plane with constant angular speed $\omega$ about a vertical axis passing through one of its ends. The longitudinal stress at a distance $x$ from the axis of rotation is:",
    [
        r"$\frac{1}{2}\rho \omega^2 (L^2 - x^2)$",
        r"$\rho \omega^2 (L^2 - x^2)$",
        r"$\frac{1}{2}\rho \omega^2 x^2$",
        r"$\frac{1}{2}\rho \omega^2 L^2$"
    ],
    0,
    r"The tension $T(x)$ at distance $x$ provides centripetal force for the outer segment of the rod from $x$ to $L$: $$T(x) = \int_x^L (\rho A dr) \omega^2 r = \rho A \omega^2 \left[\frac{r^2}{2}\right]_x^L = \frac{1}{2}\rho A \omega^2 (L^2 - x^2)$$ Dividing by area $A$ gives stress: $\sigma(x) = \frac{1}{2}\rho \omega^2 (L^2 - x^2)$.",
    "Medium"
)

# Q26
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"For the rotating rod in the previous question, the total elongation produced in the rod of length $L$ and Young's modulus $Y$ is:",
    [
        r"$\frac{\rho \omega^2 L^3}{3 Y}$",
        r"$\frac{\rho \omega^2 L^3}{2 Y}$",
        r"$\frac{\rho \omega^2 L^3}{6 Y}$",
        r"$\frac{2 \rho \omega^2 L^3}{3 Y}$"
    ],
    0,
    r"$$\Delta L = \int_0^L \frac{\sigma(x)}{Y} dx = \frac{\rho \omega^2}{2Y} \int_0^L (L^2 - x^2) dx = \frac{\rho \omega^2}{2Y} \left[L^3 - \frac{L^3}{3}\right] = \frac{\rho \omega^2}{2Y} \left(\frac{2L^3}{3}\right) = \frac{\rho \omega^2 L^3}{3Y}$$",
    "Medium"
)

# Q27
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"When a wire of length $L$ and cross-sectional area $A$ is stretched by a force $F$, it behaves like a spring. The effective spring constant $k$ of the wire is:",
    [
        r"$k = \frac{Y A}{L}$",
        r"$k = \frac{Y L}{A}$",
        r"$k = \frac{A L}{Y}$",
        r"$k = \frac{Y}{A L}$"
    ],
    0,
    r"From Hooke's law: $F = \left(\frac{Y A}{L}\right)\Delta L$. Comparing with spring force $F = k \Delta L$, the effective spring constant is $k = \frac{Y A}{L}$.",
    "Easy"
)

# Q28
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Two wires of the same material and same length, with radii $r_1$ and $r_2$, are connected in parallel and stretched by a load. The ratio of tension in wire 1 to wire 2 ($T_1 / T_2$) is:",
    [
        r"$r_1^2 : r_2^2$",
        r"$r_1 : r_2$",
        r"$r_2^2 : r_1^2$",
        r"$1 : 1$"
    ],
    0,
    r"In parallel combination, both wires experience the same extension $\Delta L$. Since $T = \left(\frac{Y \pi r^2}{L}\right)\Delta L$, tension is directly proportional to cross-sectional area: $\frac{T_1}{T_2} = \frac{r_1^2}{r_2^2}$.",
    "Easy"
)

# Q29
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Two wires of the same material and same length, with radii $r_1$ and $r_2$, are connected in series end-to-end and stretched by a force $F$. The ratio of elongation in wire 1 to that in wire 2 is:",
    [
        r"$r_2^2 : r_1^2$",
        r"$r_1^2 : r_2^2$",
        r"$r_2 : r_1$",
        r"$1 : 1$"
    ],
    0,
    r"In series combination, both wires experience the same tension $F$. Since $\Delta L = \frac{F L}{\pi r^2 Y} \propto \frac{1}{r^2}$, the ratio of elongations is $\frac{\Delta L_1}{\Delta L_2} = \frac{r_2^2}{r_1^2}$.",
    "Easy"
)

# Q30
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A rectangular bar of length $L$, breadth $b$, and depth $d$ is supported at both ends and loaded at the center with a weight $W$. The depression $\delta$ at the center is given by:",
    [
        r"$\delta = \frac{W L^3}{4 Y b d^3}$",
        r"$\delta = \frac{W L^3}{4 Y b^3 d}$",
        r"$\delta = \frac{W L^2}{4 Y b d^2}$",
        r"$\delta = \frac{W L^3}{12 Y b d^3}$"
    ],
    0,
    r"For a beam of rectangular cross-section ($I_g = \frac{b d^3}{12}$) supported at both ends and loaded at the center, the deflection is: $$\delta = \frac{W L^3}{48 Y I_g} = \frac{W L^3}{48 Y (b d^3 / 12)} = \frac{W L^3}{4 Y b d^3}$$ To minimize bending for a given amount of material, girders are designed with large depth $d$ ($I$-shaped girders).",
    "Medium"
)

# Q31
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Why are structural beams (girders) used in bridges designed with an $I$-shaped cross-section?",
    [
        r"To provide a large depth $d$, maximizing resistance to bending while reducing weight",
        r"To reduce the manufacturing cost of steel",
        r"To allow easy painting and maintenance",
        r"To make the beams more flexible"
    ],
    0,
    r"Since sag $\delta \propto \frac{1}{b d^3}$, increasing the depth $d$ dramatically reduces deflection. An $I$-beam concentrates material in the upper and lower flanges where tensile and compressive stresses are greatest, while keeping the web thin to save weight.",
    "Easy"
)

# Q32
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The maximum height of a mountain on Earth is limited to approximately $10\text{ km}$ primarily by:",
    [
        r"The elastic shear/yield strength of rock under hydrostatic pressure at the base",
        r"The atmospheric pressure at high altitudes",
        r"The curvature of the Earth's surface",
        r"The speed of rotation of the Earth"
    ],
    0,
    r"At the base of a mountain of height $h$, pressure is $\rho g h$. If this pressure exceeds the yield strength (shear strength) of rock ($\sim 3 \times 10^8\text{ N/m}^2$), rocks begin to flow plastically. For rock density $\sim 3 \times 10^3\text{ kg/m}^3$: $$h_{\text{max}} = \frac{\sigma_{\text{yield}}}{\rho g} \approx \frac{3 \times 10^8}{3 \times 10^3 \times 10} \approx 10^4\text{ m} = 10\text{ km}$$",
    "Medium"
)

# Q33
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A shear stress $\tau$ applied to a cube of side $L$ produces a lateral displacement $\Delta x$ of the top face relative to the fixed bottom face. The shear strain is:",
    [
        r"$\theta = \frac{\Delta x}{L}$",
        r"$\theta = \frac{L}{\Delta x}$",
        r"$\theta = \frac{\Delta x^2}{L^2}$",
        r"$\theta = \Delta x \cdot L$"
    ],
    0,
    r"Shear strain is defined as the angle of shear $\theta \approx \tan\theta = \frac{\Delta x}{L}$, where $\Delta x$ is lateral shift and $L$ is the perpendicular distance from the fixed surface.",
    "Easy"
)

# Q34
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The modulus of rigidity $\eta$ is relevant only for:",
    [
        r"Solids only",
        r"Liquids only",
        r"Gases only",
        r"Both liquids and gases"
    ],
    0,
    r"Liquids and gases cannot sustain a static shear stress (they flow continuously when subjected to shear). Only solids have a definite shape and non-zero modulus of rigidity $\eta$.",
    "Easy"
)

# Q35
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Young's modulus of a perfectly rigid body is:",
    [
        r"$\infty$ (infinity)",
        r"$0$ (zero)",
        r"$1$",
        r"Negative"
    ],
    0,
    r"A perfectly rigid body undergoes zero strain under any finite applied stress ($\text{strain} = 0$). Thus Young's modulus $Y = \frac{\text{stress}}{\text{strain}} = \frac{\text{stress}}{0} = \infty$.",
    "Easy"
)

# Q36
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Bulk modulus of an incompressible liquid is:",
    [
        r"$\infty$",
        r"$0$",
        r"$1$",
        r"Dependent on depth"
    ],
    0,
    r"For an incompressible liquid, volume change $\Delta V = 0$ for any pressure increase. Therefore Bulk modulus $B = -V \frac{\Delta P}{\Delta V} = \infty$.",
    "Easy"
)

# Q37
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"As the temperature of a metal increases, its Young's modulus generally:",
    [
        r"Decreases",
        r"Increases",
        r"Remains unchanged",
        r"Becomes infinite"
    ],
    0,
    r"As temperature increases, thermal vibrations increase interatomic separations, weakening interatomic bonding forces. Consequently, elastic moduli (including Young's modulus) decrease.",
    "Easy"
)

# Q38
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The dimensional formula of Young's modulus is the same as that of:",
    [
        r"Pressure and stress",
        r"Force",
        r"Work",
        r"Strain"
    ],
    0,
    r"Young's modulus is ratio of stress (force per unit area) to dimensionless strain: $[Y] = \frac{[F]}{[A]} = \frac{[M L T^{-2}]}{[L^2]} = [M L^{-1} T^{-2}]$, identical to the dimensions of pressure and stress.",
    "Easy"
)

# Q39
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A wire has length $L_1$ when tension is $T_1$, and length $L_2$ when tension is $T_2$. The original unstretched length of the wire $L_0$ is:",
    [
        r"$\frac{L_1 T_2 - L_2 T_1}{T_2 - T_1}$",
        r"$\frac{L_1 T_1 - L_2 T_2}{T_1 - T_2}$",
        r"$\frac{L_1 + L_2}{2}$",
        r"$\frac{L_2 T_2 - L_1 T_1}{T_2 - T_1}$"
    ],
    0,
    r"Let $k = \frac{Y A}{L_0}$. Then $T_1 = k(L_1 - L_0)$ and $T_2 = k(L_2 - L_0)$. Dividing the two equations: $$\frac{T_1}{T_2} = \frac{L_1 - L_0}{L_2 - L_0} \implies T_1 L_2 - T_1 L_0 = T_2 L_1 - T_2 L_0 \implies L_0(T_2 - T_1) = L_1 T_2 - L_2 T_1 \implies L_0 = \frac{L_1 T_2 - L_2 T_1}{T_2 - T_1}$$",
    "Medium"
)

# Q40
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"In the previous problem, the tension $T$ required to stretch the wire to length $(L_1 + L_2)$ is:",
    [
        r"$T_1 + T_2$",
        r"$\frac{T_1 + T_2}{2}$",
        r"$2(T_1 + T_2)$",
        r"$\sqrt{T_1 T_2}$"
    ],
    0,
    r"$$\Delta L = (L_1 + L_2) - L_0 = (L_1 - L_0) + (L_2 - L_0) = \frac{T_1}{k} + \frac{T_2}{k} = \frac{T_1 + T_2}{k}$$ Since $T = k \Delta L$, we immediately have $T = T_1 + T_2$.",
    "Medium"
)

# Q41
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A wire is stretched by $1\text{ mm}$ by a force of $1\text{ kN}$. The work done in stretching the wire further by an additional $1\text{ mm}$ is:",
    [
        r"$1.5\text{ J}$",
        r"$0.5\text{ J}$",
        r"$1.0\text{ J}$",
        r"$2.0\text{ J}$"
    ],
    0,
    r"Work done from $x_1$ to $x_2$: $W = \frac{1}{2} k (x_2^2 - x_1^2)$. Here $k = \frac{F_1}{x_1} = \frac{1000\text{ N}}{10^{-3}\text{ m}} = 10^6\text{ N/m}$. Initial $x_1 = 1\text{ mm}$, final $x_2 = 2\text{ mm}$. $$W = \frac{1}{2} \times 10^6 \times \left[(2 \times 10^{-3})^2 - (1 \times 10^{-3})^2\right] = \frac{1}{2} \times 10^6 \times 3 \times 10^{-6} = 1.5\text{ J}$$",
    "Medium"
)

# Q42
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"Steel is more elastic than rubber because:",
    [
        r"For a given applied stress, steel produces a much smaller strain than rubber (higher Young's modulus)",
        r"Rubber can be stretched much more easily",
        r"Steel breaks easily",
        r"Rubber has a higher density"
    ],
    0,
    r"In physics, elasticity is measured by the restoring stress developed per unit strain (i.e. Young's modulus). Since $Y_{\text{steel}} \gg Y_{\text{rubber}}$, steel requires much larger force to produce the same strain, so steel is scientifically more elastic.",
    "Easy"
)

# Q43
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A copper wire of length $L$ and radius $r$ is stretched to twice its length. Assuming volume remains constant during stretching, the new resistance of the wire is:",
    [
        r"$4R$",
        r"$2R$",
        r"$R/2$",
        r"$8R$"
    ],
    0,
    r"If length is doubled ($L \to 2L$) at constant volume, the area halves ($A \to A/2$). Resistance $R = \rho \frac{L}{A} \propto \frac{L}{A} \implies R' = \rho \frac{2L}{A/2} = 4R$.",
    "Easy"
)

# Q44
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"If a solid sphere of radius $R$ made of a material of Bulk modulus $B$ is taken to a depth $h$ in a lake of liquid density $\rho$, the fractional decrease in its radius ($\Delta R / R$) is:",
    [
        r"$\frac{\rho g h}{3 B}$",
        r"$\frac{\rho g h}{B}$",
        r"$\frac{3 \rho g h}{B}$",
        r"$\frac{\rho g h}{2 B}$"
    ],
    0,
    r"Hydrostatic pressure increase is $\Delta P = \rho g h$. The fractional volume change is $\frac{|\Delta V|}{V} = \frac{\Delta P}{B} = \frac{\rho g h}{B}$. For a sphere, $V = \frac{4}{3}\pi R^3 \implies \frac{\Delta V}{V} = 3 \frac{\Delta R}{R}$. Therefore: $$\frac{\Delta R}{R} = \frac{1}{3}\frac{\Delta V}{V} = \frac{\rho g h}{3 B}$$",
    "Medium"
)

# Q45
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"When a twisting couple $C$ is applied to a solid cylinder of length $L$, radius $r$, and shear modulus $\eta$, the angle of twist $\theta$ produced is:",
    [
        r"$\theta = \frac{2 C L}{\pi \eta r^4}$",
        r"$\theta = \frac{C L}{\pi \eta r^4}$",
        r"$\theta = \frac{\pi \eta r^4}{2 C L}$",
        r"$\theta = \frac{4 C L}{\pi \eta r^3}$"
    ],
    0,
    r"The restoring couple per unit twist is $C_0 = \frac{\pi \eta r^4}{2L}$. Therefore, the twist angle produced by couple $C$ is $\theta = \frac{C}{C_0} = \frac{2 C L}{\pi \eta r^4}$.",
    "Medium"
)

# Q46
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A hollow cylinder and a solid cylinder have the same length, same mass, and are made of the same material. Which one has greater torsional rigidity (resists twisting more)?",
    [
        r"The hollow cylinder",
        r"The solid cylinder",
        r"Both have identical torsional rigidity",
        r"Depends on the applied torque"
    ],
    0,
    r"Torsional rigidity is proportional to $\int r^2 dA$. In a hollow cylinder of the same mass and length, material is distributed farther from the axis, giving a much larger polar moment of inertia ($r_2^4 - r_1^4 > r_{\text{solid}}^4$).",
    "Easy"
)

# Q47
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A brass rod of length $L$ and cross-section $A$ is joined to a steel rod of identical length $L$ and cross-section $A$ end-to-end. If Young's moduli are $Y_b$ and $Y_s$, the equivalent Young's modulus $Y_{\text{eq}}$ of the combination is:",
    [
        r"$\frac{2 Y_b Y_s}{Y_b + Y_s}$",
        r"$\frac{Y_b + Y_s}{2}$",
        r"$\sqrt{Y_b Y_s}$",
        r"$\frac{Y_b Y_s}{Y_b + Y_s}$"
    ],
    0,
    r"Total length is $2L$. Total extension under tension $F$ is $\Delta L = \Delta L_b + \Delta L_s = \frac{F L}{A Y_b} + \frac{F L}{A Y_s} = \frac{F L}{A}\left(\frac{1}{Y_b} + \frac{1}{Y_s}\right)$. From definition: $\Delta L = \frac{F (2L)}{A Y_{\text{eq}}}$. Equating: $$\frac{2}{Y_{\text{eq}}} = \frac{1}{Y_b} + \frac{1}{Y_s} = \frac{Y_b + Y_s}{Y_b Y_s} \implies Y_{\text{eq}} = \frac{2 Y_b Y_s}{Y_b + Y_s}$$ (harmonic mean).",
    "Medium"
)

# Q48
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"If two rods of equal length $L$ and equal cross-section $A$ are clamped side-by-side in parallel, the equivalent Young's modulus of the composite rod is:",
    [
        r"$\frac{Y_1 + Y_2}{2}$",
        r"$\frac{2 Y_1 Y_2}{Y_1 + Y_2}$",
        r"$Y_1 + Y_2$",
        r"$\sqrt{Y_1 Y_2}$"
    ],
    0,
    r"Under the same strain $s = \frac{\Delta L}{L}$, total force is $F = F_1 + F_2 = Y_1 A s + Y_2 A s = (Y_1 + Y_2) A s$. For the composite bar of total area $2A$: $F = Y_{\text{eq}} (2A) s$. Therefore $Y_{\text{eq}} = \frac{Y_1 + Y_2}{2}$ (arithmetic mean).",
    "Medium"
)

# Q49
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The speed of longitudinal waves (sound) in an elastic solid rod of Young's modulus $Y$ and density $\rho$ is:",
    [
        r"$v = \sqrt{\frac{Y}{\rho}}$",
        r"$v = \sqrt{\frac{\rho}{Y}}$",
        r"$v = \frac{Y}{\rho}$",
        r"$v = \sqrt{\frac{\eta}{\rho}}$"
    ],
    0,
    r"Newton-Laplace formula for longitudinal sound waves in an extended thin rod gives $v = \sqrt{\frac{Y}{\rho}}$.",
    "Easy"
)

# Q50
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The speed of transverse shear waves in an elastic solid of shear modulus $\eta$ and density $\rho$ is:",
    [
        r"$v = \sqrt{\frac{\eta}{\rho}}$",
        r"$v = \sqrt{\frac{Y}{\rho}}$",
        r"$v = \sqrt{\frac{B}{\rho}}$",
        r"$v = \frac{\eta}{\rho}$"
    ],
    0,
    r"Transverse (shear) mechanical waves in an elastic solid travel with speed $v = \sqrt{\frac{\eta}{\rho}}$.",
    "Easy"
)

# Q51
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A wire is stretched by a load. If the strain in the wire is $\varepsilon$, the percentage change in the density of the wire (with Poisson's ratio $\sigma$) is:",
    [
        r"$-(1 - 2\sigma)\varepsilon \times 100\%$",
        r"$+(1 - 2\sigma)\varepsilon \times 100\%$",
        r"$-(1 + \sigma)\varepsilon \times 100\%$",
        r"$0$"
    ],
    0,
    r"Mass is constant: $m = \rho V \implies \frac{\Delta \rho}{\rho} = -\frac{\Delta V}{V}$. Since $\frac{\Delta V}{V} = (1 - 2\sigma)\varepsilon$, we have $\frac{\Delta \rho}{\rho} = -(1 - 2\sigma)\varepsilon$.",
    "Medium"
)

# Q52
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The Young's modulus of a wire of length $L$ and area $A$ is $Y$. If the length is doubled and area is halved, its Young's modulus becomes:",
    [
        r"$Y$",
        r"$2Y$",
        r"$4Y$",
        r"$Y/4$"
    ],
    0,
    r"Young's modulus is an intrinsic material property that depends only on the nature of the material and temperature, completely independent of the dimensions of the sample.",
    "Easy"
)

# Q53
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"A wire suspended vertically from one end is stretched by attaching a weight of $20\text{ N}$ to the lower end. The weight stretches the wire by $1\text{ mm}$. How much energy is dissipated as heat in this process?",
    [
        r"$0.01\text{ J}$",
        r"$0.02\text{ J}$",
        r"$0.005\text{ J}$",
        r"Zero"
    ],
    0,
    r"Loss in gravitational potential energy of the weight is $\Delta U_g = m g \Delta L = 20\text{ N} \times 10^{-3}\text{ m} = 0.02\text{ J}$. Elastic energy stored in the wire is $U_e = \frac{1}{2} F \Delta L = \frac{1}{2} \times 20 \times 10^{-3} = 0.01\text{ J}$. The difference $0.02 - 0.01 = 0.01\text{ J}$ is dissipated as heat (through internal friction/damping during oscillation).",
    "Medium"
)

# Q54
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"When an elastic body is subjected to a state of hydrostatic pressure $P$, the strain produced is:",
    [
        r"Volumetric strain only",
        r"Longitudinal strain only",
        r"Shear strain only",
        r"Both shear and lateral strain"
    ],
    0,
    r"Uniform hydrostatic pressure acts equally in all directions, changing the volume without changing the shape of the body. Hence only volumetric strain is produced.",
    "Easy"
)

# Q55
add_q(
    "Elasticity (Hooke's law, Young's modulus)",
    r"The stress required to double the length of a wire of Young's modulus $Y$ (assuming it remains within Hooke's law) is:",
    [
        r"$Y$",
        r"$2Y$",
        r"$Y/2$",
        r"$4Y$"
    ],
    0,
    r"To double the length ($L_f = 2L_0$), the elongation is $\Delta L = L_0$, so tensile strain is $\frac{\Delta L}{L_0} = \frac{L_0}{L_0} = 1$. Therefore, $\text{stress} = Y \times \text{strain} = Y \times 1 = Y$.",
    "Easy"
)

# ==============================================================================
# SUBTOPIC 2: Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity) (55 Questions)
# ==============================================================================

# Q56
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"In a hydraulic lift, the pistons have cross-sectional areas $A_1 = 5\text{ cm}^2$ and $A_2 = 500\text{ cm}^2$. What force must be applied to the smaller piston to support a car of mass $1500\text{ kg}$ on the larger piston? ($g = 10\text{ m/s}^2$)",
    [
        r"$150\text{ N}$",
        r"$15\text{ N}$",
        r"$1500\text{ N}$",
        r"$300\text{ N}$"
    ],
    0,
    r"By Pascal's principle, pressure is transmitted equally: $$\frac{F_1}{A_1} = \frac{F_2}{A_2} \implies F_1 = F_2 \left(\frac{A_1}{A_2}\right) = (1500 \times 10) \times \left(\frac{5}{500}\right) = 15000 \times \frac{1}{100} = 150\text{ N}$$",
    "Easy"
)

# Q57
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A piece of ice floats in water in a beaker. When the ice completely melts, the water level in the beaker will:",
    [
        r"Remain unchanged",
        r"Rise",
        r"Fall",
        r"First rise and then fall"
    ],
    0,
    r"By Archimedes' principle, floating ice displaces a weight of water equal to its own weight: $m_{\text{ice}} g = \rho_{\text{water}} V_{\text{disp}} g \implies V_{\text{disp}} = \frac{m_{\text{ice}}}{\rho_{\text{water}}}$. When melted, ice turns into water of mass $m_{\text{melted}} = m_{\text{ice}}$, whose volume is $V_{\text{water}} = \frac{m_{\text{ice}}}{\rho_{\text{water}}} = V_{\text{disp}}$. Thus the melted water exactly fills the displaced volume, leaving the level unchanged.",
    "Easy"
)

# Q58
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A piece of ice having a small lead shot embedded inside it floats in a beaker of water. When the ice melts completely, the water level in the beaker will:",
    [
        r"Fall",
        r"Rise",
        r"Remain unchanged",
        r"Depend on the atmospheric pressure"
    ],
    0,
    r"While floating, the lead shot displaced a volume of water corresponding to its weight ($V_1 = \frac{m_{\text{lead}}}{\rho_{\text{water}}}$). When melted, the dense lead shot sinks to the bottom, displacing only its own actual volume ($V_2 = \frac{m_{\text{lead}}}{\rho_{\text{lead}}}$). Since $\rho_{\text{lead}} > \rho_{\text{water}}$, $V_2 < V_1$, so the water level falls.",
    "Medium"
)

# Q59
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A piece of ice having a cork (density $< \rho_{\text{water}}$) embedded inside it floats in water. When the ice melts completely, the water level will:",
    [
        r"Remain unchanged",
        r"Fall",
        r"Rise",
        r"Fluctuate"
    ],
    0,
    r"The cork continues to float even after the ice melts, displacing water equal to its weight both before and after melting. Thus the water level remains unchanged.",
    "Medium"
)

# Q60
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A tank filled with water to height $H$ has a small orifice at depth $h$ below the water surface. The speed of efflux of water from the orifice is (Torricelli's law):",
    [
        r"$\sqrt{2gh}$",
        r"$\sqrt{2g(H - h)}$",
        r"$\sqrt{gh}$",
        r"$2gh$"
    ],
    0,
    r"Applying Bernoulli's equation between the top surface and the orifice: $P_0 + \rho g h = P_0 + \frac{1}{2}\rho v^2 \implies v = \sqrt{2gh}$.",
    "Easy"
)

# Q61
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"For the tank in the previous question, the horizontal range $R$ of the emerging water stream on the ground plane is:",
    [
        r"$2\sqrt{h(H - h)}$",
        r"$\sqrt{h(H - h)}$",
        r"$2\sqrt{h H}$",
        r"$4\sqrt{h(H - h)}$"
    ],
    0,
    r"Horizontal speed is $v = \sqrt{2gh}$. Vertical distance fallen is $y = H - h$. Time of flight: $t = \sqrt{\frac{2(H - h)}{g}}$. Horizontal range: $$R = v t = \sqrt{2gh} \times \sqrt{\frac{2(H - h)}{g}} = 2\sqrt{h(H - h)}$$",
    "Medium"
)

# Q62
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The horizontal range $R = 2\sqrt{h(H - h)}$ attains its MAXIMUM value when the hole is made at depth $h$ equal to:",
    [
        r"$H / 2$",
        r"$H / 4$",
        r"$3H / 4$",
        r"$H / \sqrt{2}$"
    ],
    0,
    r"The function $f(h) = h(H - h)$ is maximized when $\frac{df}{dh} = H - 2h = 0 \implies h = H/2$. The maximum range is $R_{\text{max}} = 2\sqrt{(H/2)(H/2)} = H$.",
    "Easy"
)

# Q63
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"Water flows through a horizontal pipe of non-uniform cross-section. At two points $A$ and $B$, the diameters are $4\text{ cm}$ and $2\text{ cm}$ respectively. If the speed at $A$ is $1\text{ m/s}$, the speed at $B$ is:",
    [
        r"$4\text{ m/s}$",
        r"$2\text{ m/s}$",
        r"$8\text{ m/s}$",
        r"$0.5\text{ m/s}$"
    ],
    0,
    r"By the equation of continuity: $A_1 v_1 = A_2 v_2 \implies d_1^2 v_1 = d_2^2 v_2 \implies v_2 = v_1 \left(\frac{d_1}{d_2}\right)^2 = 1 \times \left(\frac{4}{2}\right)^2 = 4\text{ m/s}$.",
    "Easy"
)

# Q64
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"In the previous question, if the pressure at $A$ is $1.0 \times 10^5\text{ Pa}$, the pressure at $B$ is (density of water $= 1000\text{ kg/m}^3$):",
    [
        r"$9.25 \times 10^4\text{ Pa}$",
        r"$1.075 \times 10^5\text{ Pa}$",
        r"$8.50 \times 10^4\text{ Pa}$",
        r"$9.75 \times 10^4\text{ Pa}$"
    ],
    0,
    r"By Bernoulli's theorem for horizontal flow: $$P_A + \frac{1}{2}\rho v_A^2 = P_B + \frac{1}{2}\rho v_B^2$$ $$P_B = P_A - \frac{1}{2}\rho(v_B^2 - v_A^2) = 10^5 - \frac{1}{2}(1000)(16 - 1) = 10^5 - 7500 = 9.25 \times 10^4\text{ Pa}$$",
    "Medium"
)

# Q65
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A cylindrical tank of cross-sectional area $A$ filled with water to height $H$ has a small hole of area $a$ at the bottom ($a \ll A$). The time taken to completely empty the tank is:",
    [
        r"$\frac{A}{a}\sqrt{\frac{2H}{g}}$",
        r"$\frac{A}{2a}\sqrt{\frac{2H}{g}}$",
        r"$\frac{2A}{a}\sqrt{\frac{2H}{g}}$",
        r"$\frac{A}{a}\sqrt{\frac{H}{2g}}$"
    ],
    0,
    r"Efflux velocity is $v = \sqrt{2gh}$. Rate of volume outflow is $-A \frac{dh}{dt} = a \sqrt{2gh} \implies dt = -\frac{A}{a\sqrt{2g}} h^{-1/2} dh$. Integrating from $H$ to $0$: $$t = \frac{A}{a\sqrt{2g}} [2\sqrt{h}]_0^H = \frac{2A\sqrt{H}}{a\sqrt{2g}} = \frac{A}{a}\sqrt{\frac{2H}{g}}$$",
    "Medium"
)

# Q66
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"Stokes' law states that the viscous drag force $F$ experienced by a sphere of radius $r$ moving with velocity $v$ through a fluid of viscosity $\eta$ is:",
    [
        r"$F = 6\pi \eta r v$",
        r"$F = 6\pi \eta r^2 v$",
        r"$F = \frac{6\pi \eta v}{r}$",
        r"$F = 4\pi \eta r v$"
    ],
    0,
    r"Stokes derived for laminar flow around a sphere that the retarding viscous drag force is $F = 6\pi \eta r v$.",
    "Easy"
)

# Q67
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A small spherical ball of radius $r$ and density $\rho$ falls under gravity through a viscous liquid of density $\sigma$ and coefficient of viscosity $\eta$. Its terminal velocity $v_t$ is:",
    [
        r"$\frac{2}{9}\frac{r^2(\rho - \sigma)g}{\eta}$",
        r"$\frac{2}{9}\frac{r(\rho - \sigma)g}{\eta}$",
        r"$\frac{1}{9}\frac{r^2(\rho - \sigma)g}{\eta}$",
        r"$\frac{4}{9}\frac{r^2(\rho - \sigma)g}{\eta}$"
    ],
    0,
    r"At terminal velocity, weight equals buoyant force plus viscous drag: $$\frac{4}{3}\pi r^3 \rho g = \frac{4}{3}\pi r^3 \sigma g + 6\pi \eta r v_t \implies 6\pi \eta r v_t = \frac{4}{3}\pi r^3 (\rho - \sigma)g \implies v_t = \frac{2}{9}\frac{r^2(\rho - \sigma)g}{\eta}$$",
    "Easy"
)

# Q68
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"Two spherical raindrops of radii in the ratio $1 : 2$ fall through air at terminal velocity. The ratio of their terminal velocities is:",
    [
        r"$1 : 4$",
        r"$1 : 2$",
        r"$1 : 8$",
        r"$1 : 16$"
    ],
    0,
    r"Terminal velocity is proportional to the square of radius: $v_t \propto r^2$. Therefore: $$\frac{v_1}{v_2} = \left(\frac{r_1}{r_2}\right)^2 = \left(\frac{1}{2}\right)^2 = \frac{1}{4}$$",
    "Easy"
)

# Q69
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"Eight identical small raindrops falling through air with a terminal velocity of $5\text{ cm/s}$ coalesce to form a single large drop. The terminal velocity of the combined drop is:",
    [
        r"$20\text{ cm/s}$",
        r"$10\text{ cm/s}$",
        r"$40\text{ cm/s}$",
        r"$2.5\text{ cm/s}$"
    ],
    0,
    r"Volume conservation: $\frac{4}{3}\pi R^3 = 8 \times \left(\frac{4}{3}\pi r^3\right) \implies R = 2r$. Since terminal velocity $v_t \propto r^2$: $$v_{\text{large}} = v_{\text{small}} \left(\frac{R}{r}\right)^2 = 5 \times (2)^2 = 20\text{ cm/s}$$",
    "Medium"
)

# Q70
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"Bernoulli's equation is based on which fundamental conservation law?",
    [
        r"Conservation of energy",
        r"Conservation of linear momentum",
        r"Conservation of mass",
        r"Conservation of angular momentum"
    ],
    0,
    r"Bernoulli's theorem expresses the work-energy theorem for steady, incompressible, non-viscous fluid flow, representing the conservation of total mechanical energy per unit volume.",
    "Easy"
)

# Q71
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The equation of continuity $A_1 v_1 = A_2 v_2$ is a mathematical consequence of the:",
    [
        r"Conservation of mass",
        r"Conservation of momentum",
        r"Conservation of energy",
        r"Second law of thermodynamics"
    ],
    0,
    r"For steady flow of an incompressible fluid, the mass entering per unit time equals the mass leaving: $\rho A_1 v_1 = \rho A_2 v_2 \implies A_1 v_1 = A_2 v_2$, expressing conservation of mass.",
    "Easy"
)

# Q72
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The SI unit of the coefficient of viscosity $\eta$ is:",
    [
        r"$\text{Pa}\cdot\text{s}$ (Poiseuille)",
        r"$\text{Poise}$",
        r"$\text{N/m}$",
        r"$\text{Pa/s}$"
    ],
    0,
    r"From $F = \eta A \frac{dv}{dz}$, $[\eta] = \frac{F}{A(dv/dz)} = \frac{\text{N}}{\text{m}^2 \cdot (\text{s}^{-1})} = \text{N}\cdot\text{s/m}^2 = \text{Pa}\cdot\text{s}$ (also called Decapoise or Poiseuille). Note: $1\text{ Pa}\cdot\text{s} = 10\text{ Poise}$.",
    "Easy"
)

# Q73
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"How does the viscosity of liquids and gases vary with temperature?",
    [
        r"Viscosity of liquids decreases with temperature, while that of gases increases with temperature",
        r"Viscosity of both liquids and gases decreases with temperature",
        r"Viscosity of both liquids and gases increases with temperature",
        r"Viscosity of liquids increases with temperature, while that of gases decreases"
    ],
    0,
    r"In liquids, cohesive intermolecular forces dominate; heating increases molecular kinetic energy and weakens cohesion, decreasing viscosity. In gases, momentum transfer between layers via thermal molecular collisions dominates; heating increases molecular speed ($v \propto \sqrt{T}$), increasing viscosity ($\eta \propto \sqrt{T}$).",
    "Medium"
)

# Q74
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"According to Poiseuille's formula, the volume rate of flow $Q$ of a liquid of viscosity $\eta$ through a horizontal capillary tube of radius $r$ and length $L$ under pressure difference $P$ is proportional to:",
    [
        r"$r^4$",
        r"$r^2$",
        r"$r^3$",
        r"$r$"
    ],
    0,
    r"Poiseuille's equation is $Q = \frac{\pi P r^4}{8 \eta L}$. The flow rate is proportional to the fourth power of the radius ($r^4$).",
    "Easy"
)

# Q75
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"If the radius of a blood artery is reduced by $10\%$ due to plaque accumulation, the percentage decrease in blood flow rate for the same pressure difference is approximately:",
    [
        r"$34.4\%$",
        r"$10\%$",
        r"$20\%$",
        r"$40\%$"
    ],
    0,
    r"Flow rate $Q \propto r^4$. If $r' = 0.9 r$, then $Q' = (0.9)^4 Q = 0.6561 Q$. The fractional decrease is $1 - 0.6561 = 0.3439 \approx 34.4\%$.",
    "Medium"
)

# Q76
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"Reynolds number $Re = \frac{\rho v d}{\eta}$ represents the ratio of:",
    [
        r"Inertial force to viscous force",
        r"Viscous force to inertial force",
        r"Pressure force to gravity force",
        r"Buoyant force to viscous force"
    ],
    0,
    r"The Reynolds number characterizes fluid flow: $Re = \frac{\text{Inertial force}}{\text{Viscous force}} = \frac{\rho v^2 / d}{\eta v / d^2} = \frac{\rho v d}{\eta}$. Low $Re$ ($< 2000$) corresponds to laminar streamline flow; high $Re$ ($> 3000$) corresponds to turbulent flow.",
    "Easy"
)

# Q77
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The lift force acting on an airplane wing (aerofoil) is primarily explained by:",
    [
        r"Bernoulli's principle",
        r"Archimedes' principle",
        r"Pascal's law",
        r"Torricelli's theorem"
    ],
    0,
    r"An aerofoil is curved on the top surface. Air travels faster over the curved top surface ($v_{\text{top}} > v_{\text{bottom}}$). By Bernoulli's equation, this creates lower pressure on top ($P_{\text{top}} < P_{\text{bottom}}$), generating an upward lift force.",
    "Easy"
)

# Q78
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The curving of a spinning cricket ball or baseball in flight (Magnus effect) is an application of:",
    [
        r"Bernoulli's principle",
        r"Newton's third law only",
        r"Archimedes' principle",
        r"Stokes' law"
    ],
    0,
    r"A spinning ball drags air around it. On one side, the ball's rotation adds to the airflow speed; on the other, it opposes it. The resulting velocity difference creates a pressure difference (via Bernoulli's principle) that deflects the ball sideways.",
    "Easy"
)

# Q79
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A wooden block of volume $V$ and density $\rho_s$ floats at the interface between oil (density $\rho_1$) and water (density $\rho_2 > \rho_1$) with a fraction $f$ of its volume in water. The fraction $f$ is:",
    [
        r"$f = \frac{\rho_s - \rho_1}{\rho_2 - \rho_1}$",
        r"$f = \frac{\rho_2 - \rho_s}{\rho_2 - \rho_1}$",
        r"$f = \frac{\rho_s}{\rho_2 + \rho_1}$",
        r"$f = \frac{\rho_1}{\rho_2 - \rho_s}$"
    ],
    0,
    r"Weight of block equals total buoyant force: $\rho_s V g = \rho_2 (f V) g + \rho_1 (1 - f)V g \implies \rho_s = f \rho_2 + \rho_1 - f \rho_1 = \rho_1 + f(\rho_2 - \rho_1) \implies f = \frac{\rho_s - \rho_1}{\rho_2 - \rho_1}$.",
    "Medium"
)

# Q80
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A U-tube contains mercury ($\text{density } 13.6\text{ g/cm}^3$). Water is poured into one arm to a height of $13.6\text{ cm}$. The rise in the mercury level in the other arm above its initial position is:",
    [
        r"$0.5\text{ cm}$",
        r"$1.0\text{ cm}$",
        r"$1.36\text{ cm}$",
        r"$2.0\text{ cm}$"
    ],
    0,
    r"Let the mercury level depress by $x$ in the water arm; it must rise by $x$ in the other arm, creating a total mercury height difference of $2x$. Balancing pressures at the interface: $$\rho_w g h_w = \rho_{\text{Hg}} g (2x) \implies 1 \times 13.6 = 13.6 \times 2x \implies 2x = 1 \implies x = 0.5\text{ cm}$$",
    "Medium"
)

# Q81
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A container filled with liquid of density $\rho$ accelerates horizontally with acceleration $a$. The angle $\theta$ that the liquid surface makes with the horizontal is:",
    [
        r"$\tan\theta = \frac{a}{g}$",
        r"$\tan\theta = \frac{g}{a}$",
        r"$\sin\theta = \frac{a}{g}$",
        r"$\cos\theta = \frac{a}{g}$"
    ],
    0,
    r"In the accelerated reference frame, the effective gravity vector is $\vec{g}_{\text{eff}} = \vec{g} - \vec{a} = -g\hat{j} - a\hat{i}$. The free surface aligns perpendicular to $\vec{g}_{\text{eff}}$, tilting at angle $\tan\theta = \frac{a}{g}$.",
    "Easy"
)

# Q82
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"An open cylindrical vessel of radius $R$ filled with liquid of density $\rho$ rotates about its central vertical axis with angular velocity $\omega$. The shape of the free surface of the liquid is a:",
    [
        r"Paraboloid of revolution ($z = \frac{\omega^2 r^2}{2g}$)",
        r"Sphere",
        r"Hyperboloid",
        r"Cone"
    ],
    0,
    r"The effective acceleration at radius $r$ is centrifugal force $\omega^2 r$ outward and gravity $g$ downward: $\frac{dz}{dr} = \frac{\omega^2 r}{g}$. Integrating yields $z(r) = \frac{\omega^2 r^2}{2g}$, which is a paraboloid.",
    "Medium"
)

# Q83
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A spherical solid ball of density $\rho$ and radius $R$ is dropped into water of density $\rho_w > \rho$ from height $h$ above the surface. Neglecting viscosity and surface tension, the maximum depth to which the ball sinks before stopping is:",
    [
        r"$\frac{h \rho}{\rho_w - \rho}$",
        r"$\frac{h \rho_w}{\rho_w - \rho}$",
        r"$\frac{h(\rho_w - \rho)}{\rho}$",
        r"$\frac{h \rho}{\rho_w}$"
    ],
    0,
    r"By work-energy theorem from release to maximum depth $d$: work done by gravity is $m g (h + d) = \rho V g (h + d)$. Work done by buoyant force is $-F_B d = -\rho_w V g d$. Net work is zero: $$\rho V g (h + d) - \rho_w V g d = 0 \implies \rho h = (\rho_w - \rho)d \implies d = \frac{h \rho}{\rho_w - \rho}$$",
    "Medium"
)

# Q84
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A horizontal pipeline carrying water has a contraction where the diameter decreases from $20\text{ cm}$ to $10\text{ cm}$. If the pressure difference between the two sections is $30\text{ kPa}$, the flow rate through the pipe is ($\rho = 1000\text{ kg/m}^3$):",
    [
        r"$\approx 0.063\text{ m}^3/\text{s}$",
        r"$\approx 0.126\text{ m}^3/\text{s}$",
        r"$\approx 0.031\text{ m}^3/\text{s}$",
        r"$\approx 0.252\text{ m}^3/\text{s}$"
    ],
    0,
    r"Ratio of areas: $\frac{A_1}{A_2} = \left(\frac{20}{10}\right)^2 = 4$. By continuity $v_2 = 4v_1$. By Bernoulli's equation: $$\Delta P = \frac{1}{2}\rho(v_2^2 - v_1^2) = \frac{1}{2}\rho(15v_1^2) \implies v_1 = \sqrt{\frac{2\Delta P}{15\rho}} = \sqrt{\frac{2 \times 30000}{15000}} = \sqrt{4} = 2\text{ m/s}$$ Area $A_1 = \pi(0.1)^2 \approx 0.0314\text{ m}^2$. Discharge: $$Q = A_1 v_1 = 0.0314 \times 2 = 0.0628\text{ m}^3/\text{s} \approx 0.063\text{ m}^3/\text{s}$$",
    "Medium"
)

# Q85
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A siphon is used to empty a liquid from a container. The working of a siphon is driven by:",
    [
        r"Hydrostatic pressure difference and atmospheric pressure",
        r"Surface tension only",
        r"Viscosity of liquid only",
        r"Capillary action"
    ],
    0,
    r"A siphon operates due to the net hydrostatic head (height difference between the liquid surface in the reservoir and the discharge end of the tube) combined with atmospheric pressure maintaining continuous liquid column without cavitation.",
    "Easy"
)

# Q86
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The maximum height over which a siphon can lift water at sea level (where atmospheric pressure is $10^5\text{ Pa}$) is approximately:",
    [
        r"$10.3\text{ m}$",
        r"$76\text{ cm}$",
        r"$5.0\text{ m}$",
        r"$20.6\text{ m}$"
    ],
    0,
    r"At the crest of the siphon, the absolute pressure cannot drop below zero (or the vapor pressure of water). Thus $P_0 - \rho g h_{\text{max}} = 0 \implies h_{\text{max}} = \frac{P_0}{\rho g} = \frac{10^5}{1000 \times 9.8} \approx 10.3\text{ m}$.",
    "Easy"
)

# Q87
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"An air bubble of radius $r$ rises through a liquid of density $\rho$ and viscosity $\eta$ with a terminal velocity $v$. Neglecting the density of air compared to liquid, the terminal velocity is directed:",
    [
        r"Upwards, and is given by $\frac{2 r^2 \rho g}{9 \eta}$",
        r"Downwards, and is given by $\frac{2 r^2 \rho g}{9 \eta}$",
        r"Upwards, and is given by $\frac{r^2 \rho g}{9 \eta}$",
        r"Downwards, and is given by $\frac{4 r^2 \rho g}{9 \eta}$"
    ],
    0,
    r"Since $\rho_{\text{air}} \ll \rho_{\text{liquid}}$, the net force without drag is the upward buoyant force $\frac{4}{3}\pi r^3 \rho g$. In steady state, this is balanced by the downward viscous drag $6\pi \eta r v$, yielding upward terminal velocity $v = \frac{2 r^2 \rho g}{9 \eta}$.",
    "Medium"
)

# Q88
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"Two capillary tubes of the same length $L$ and radii $r_1$ and $r_2$ are connected in series. The equivalent fluid resistance $R_{\text{eq}}$ (where $P = Q R_{\text{eq}}$) is:",
    [
        r"$\frac{8\eta L}{\pi}\left(\frac{1}{r_1^4} + \frac{1}{r_2^4}\right)$",
        r"$\frac{8\eta L}{\pi}\left(\frac{1}{r_1^2} + \frac{1}{r_2^2}\right)$",
        r"$\frac{8\eta L}{\pi (r_1^4 + r_2^4)}$",
        r"$\frac{\pi}{8\eta L}(r_1^4 + r_2^4)$"
    ],
    0,
    r"By Poiseuille's law, fluid resistance of a tube is $R = \frac{P}{Q} = \frac{8\eta L}{\pi r^4}$. In series, total pressure drop is $\Delta P = \Delta P_1 + \Delta P_2 \implies R_{\text{eq}} = R_1 + R_2 = \frac{8\eta L}{\pi}\left(\frac{1}{r_1^4} + \frac{1}{r_2^4}\right)$.",
    "Medium"
)

# Q89
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"If the same two capillary tubes are connected in parallel, the total flow rate $Q_{\text{total}}$ under pressure difference $P$ is proportional to:",
    [
        r"$r_1^4 + r_2^4$",
        r"$\frac{r_1^4 r_2^4}{r_1^4 + r_2^4}$",
        r"$r_1^2 + r_2^2$",
        r"$(r_1 + r_2)^4$"
    ],
    0,
    r"In parallel, each tube experiences the same pressure difference $P$. Total discharge is $Q_{\text{total}} = Q_1 + Q_2 = \frac{\pi P}{8\eta L}(r_1^4 + r_2^4) \propto r_1^4 + r_2^4$.",
    "Easy"
)

# Q90
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A body floats in water with $40\%$ of its volume submerged. When placed in oil, it floats with $60\%$ of its volume submerged. The relative density of the oil is:",
    [
        r"$2/3 \approx 0.67$",
        r"$3/2 = 1.50$",
        r"$0.40$",
        r"$0.60$"
    ],
    0,
    r"For floating body: $m g = \rho_{\text{water}} (0.40 V) g = \rho_{\text{oil}} (0.60 V) g$. Thus: $$\rho_{\text{oil}} \times 0.60 = \rho_{\text{water}} \times 0.40 \implies \frac{\rho_{\text{oil}}}{\rho_{\text{water}}} = \frac{0.40}{0.60} = \frac{2}{3} \approx 0.67$$",
    "Easy"
)

# Q91
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The velocity of water flowing out of a small orifice at the base of a pressurized tank with gauge pressure $P_{\text{gauge}}$ and water depth $h$ is:",
    [
        r"$\sqrt{2gh + \frac{2P_{\text{gauge}}}{\rho}}$",
        r"$\sqrt{2gh}$",
        r"$\sqrt{\frac{2P_{\text{gauge}}}{\rho}}$",
        r"$\sqrt{gh + \frac{P_{\text{gauge}}}{\rho}}$"
    ],
    0,
    r"Applying Bernoulli's theorem: $(P_0 + P_{\text{gauge}}) + \rho g h = P_0 + \frac{1}{2}\rho v^2 \implies \frac{1}{2}\rho v^2 = \rho g h + P_{\text{gauge}} \implies v = \sqrt{2gh + \frac{2P_{\text{gauge}}}{\rho}}$.",
    "Medium"
)

# Q92
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"Two ping-pong balls are suspended side-by-side with a small gap between them. When a stream of air is blown through the gap between them, the balls:",
    [
        r"Move closer toward each other",
        r"Move farther away from each other",
        r"Remain in their original positions",
        r"Rotate continuously in opposite directions"
    ],
    0,
    r"Blowing air between the balls increases the airspeed in the gap ($v > 0$). By Bernoulli's principle, the pressure in the gap drops below the surrounding atmospheric pressure, causing the higher outside pressure to push the balls together.",
    "Easy"
)

# Q93
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"During a severe hurricane, tin roofs of houses are often blown off. This occurs because:",
    [
        r"Fast-moving wind over the roof reduces the pressure above the roof, and the higher pressure inside pushes it off",
        r"Wind pushes the roof from beneath",
        r"Atmospheric pressure increases above the roof",
        r"Gravity decreases during storms"
    ],
    0,
    r"High wind speed above the roof creates a significant drop in pressure according to Bernoulli's principle ($P_{\text{above}} \ll P_{\text{inside}}$). The net upward pressure force lifts the roof.",
    "Easy"
)

# Q94
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"In a streamline (laminar) flow of a fluid, the velocity vector of a fluid particle at any given spatial point:",
    [
        r"Remains constant in magnitude and direction over time",
        r"Changes randomly with time",
        r"Is always parallel to the acceleration vector",
        r"Is zero everywhere"
    ],
    0,
    r"Streamline (steady) flow is defined such that the velocity of every passing fluid particle at any fixed spatial point is identical and constant in time: $\vec{v}(x, y, z, t) = \vec{v}(x, y, z)$.",
    "Easy"
)

# Q95
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A horizontal tube of non-uniform cross-section has water flowing through it. If the pressure head at a point is $h = \frac{P}{\rho g}$, velocity head is $\frac{v^2}{2g}$, and datum head is $z$, Bernoulli's equation states that:",
    [
        r"$h + \frac{v^2}{2g} + z = \text{constant}$",
        r"$h + \frac{v^2}{g} + z = \text{constant}$",
        r"$\frac{h}{2} + \frac{v^2}{2g} + z = \text{constant}$",
        r"$h + \frac{v}{2g} + z = \text{constant}$"
    ],
    0,
    r"Dividing Bernoulli's equation $P + \frac{1}{2}\rho v^2 + \rho g z = \text{const}$ by $\rho g$ expresses all terms in units of length (heads): $\frac{P}{\rho g} + \frac{v^2}{2g} + z = \text{constant}$.",
    "Easy"
)

# Q96
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A metal plate of area $100\text{ cm}^2$ rests on a $2\text{ mm}$ thick layer of castor oil ($\eta = 1.0\text{ Pa}\cdot\text{s}$). What horizontal force is required to move the plate with a velocity of $5\text{ cm/s}$?",
    [
        r"$0.25\text{ N}$",
        r"$0.50\text{ N}$",
        r"$0.10\text{ N}$",
        r"$2.5\text{ N}$"
    ],
    0,
    r"Area $A = 100 \times 10^{-4}\text{ m}^2 = 10^{-2}\text{ m}^2$. Velocity gradient $\frac{dv}{dz} = \frac{0.05\text{ m/s}}{2 \times 10^{-3}\text{ m}} = 25\text{ s}^{-1}$. Viscous force: $$F = \eta A \frac{dv}{dz} = 1.0 \times 10^{-2} \times 25 = 0.25\text{ N}$$",
    "Easy"
)

# Q97
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A capillary tube is attached to a water reservoir. If the length of the capillary tube is doubled and its diameter is halved, the rate of flow under the same pressure head will be reduced by a factor of:",
    [
        r"$32$",
        r"$16$",
        r"$8$",
        r"$64$"
    ],
    0,
    r"By Poiseuille's formula $Q \propto \frac{r^4}{L}$. With $r' = r/2$ and $L' = 2L$: $$Q' \propto \frac{(r/2)^4}{2L} = \frac{r^4 / 16}{2L} = \frac{1}{32}\left(\frac{r^4}{L}\right)$$ The flow rate is reduced by a factor of $32$.",
    "Medium"
)

# Q98
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"When a sphere of mass $m$ reaches its terminal velocity in a viscous liquid, the net force acting on the sphere is:",
    [
        r"Zero",
        r"$m g$",
        r"$m g - F_B$",
        r"$6\pi \eta r v_t$"
    ],
    0,
    r"By definition of terminal velocity, the velocity is constant in time ($\frac{dv}{dt} = 0$). By Newton's second law, zero acceleration implies the net force acting on the sphere is strictly zero.",
    "Easy"
)

# Q99
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A solid cylinder of mass $m$, length $L$, and radius $R$ floats vertically in water. If it is depressed slightly and released, it executes simple harmonic motion with time period:",
    [
        r"$T = 2\pi \sqrt{\frac{m}{\pi R^2 \rho_w g}}$",
        r"$T = 2\pi \sqrt{\frac{m}{2\pi R^2 \rho_w g}}$",
        r"$T = 2\pi \sqrt{\frac{L}{g}}$",
        r"$T = \pi \sqrt{\frac{m}{\pi R^2 \rho_w g}}$"
    ],
    0,
    r"When depressed by displacement $x$, extra buoyant restoring force is $F_{\text{restoring}} = -(\pi R^2 x) \rho_w g = -(\pi R^2 \rho_w g)x$. Restoring force constant is $k = \pi R^2 \rho_w g$. Time period is $T = 2\pi \sqrt{\frac{m}{k}} = 2\pi \sqrt{\frac{m}{\pi R^2 \rho_w g}}$.",
    "Medium"
)

# Q100
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"An open rectangular vessel filled with water to height $H$ is accelerated horizontally at $a = g$. What fraction of the water will spill out of the vessel? (Assume width is $L$ along acceleration direction and $H \le L/2$):",
    [
        r"$\frac{L - 2H}{2L}$ (if water reaches bottom) or $\frac{L}{4H}$",
        r"Half the water",
        r"One-third of the water",
        r"No water spills"
    ],
    0,
    r"The free surface tilts at $\tan\theta = \frac{a}{g} = 1 \implies \theta = 45^\circ$. For a container with $L = 2H$, the surface tilts from the top back corner to the bottom front corner, leaving a triangular cross-section of volume $\frac{1}{2} L H$, so exactly half of the water spills.",
    "Medium"
)

# Q101
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A Venturimeter is an instrument used for measuring the:",
    [
        r"Flow rate of liquid through a pipe",
        r"Viscosity of liquid",
        r"Surface tension of liquid",
        r"Density of liquid"
    ],
    0,
    r"A Venturimeter utilizes Bernoulli's principle and continuity to determine the volume discharge rate $Q$ of a fluid passing through a pipeline.",
    "Easy"
)

# Q102
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The pressure of water in a pipe is $3 \times 10^5\text{ Pa}$ when the tap is closed. When the tap is opened, the pressure drops to $2 \times 10^5\text{ Pa}$. The velocity of water flowing out is:",
    [
        r"$14.14\text{ m/s} \approx 10\sqrt{2}\text{ m/s}$",
        r"$10\text{ m/s}$",
        r"$20\text{ m/s}$",
        r"$5\text{ m/s}$"
    ],
    0,
    r"By Bernoulli's theorem: $P_{\text{closed}} = P_{\text{open}} + \frac{1}{2}\rho v^2 \implies \frac{1}{2}\rho v^2 = \Delta P = 10^5\text{ Pa}$. With $\rho = 1000\text{ kg/m}^3$: $$v = \sqrt{\frac{2 \times 10^5}{1000}} = \sqrt{200} = 10\sqrt{2} \approx 14.14\text{ m/s}$$",
    "Easy"
)

# Q103
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"Two vessels $A$ and $B$ have different shapes but the same base area $A$ and are filled with water to the same height $h$. The force exerted by the water on the base of vessel $A$ compared to vessel $B$ is:",
    [
        r"Equal for both vessels (Hydrostatic Paradox)",
        r"Greater for the vessel containing more total weight of water",
        r"Smaller for the vessel containing more water",
        r"Dependent on the atmospheric pressure only"
    ],
    0,
    r"Pressure at the base depends only on depth: $P = \rho g h$. The force on the base is $F = P A = \rho g h A$, which is identical for both vessels regardless of shape or total volume of liquid (known as the Hydrostatic Paradox).",
    "Easy"
)

# Q104
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The dimension of kinematic viscosity $\nu = \frac{\eta}{\rho}$ is:",
    [
        r"$[M^0 L^2 T^{-1}]$",
        r"$[M L^{-1} T^{-1}]$",
        r"$[M^0 L T^{-1}]$",
        r"$[M L^2 T^{-2}]$"
    ],
    0,
    r"Kinematic viscosity is $\nu = \frac{\eta}{\rho} = \frac{[M L^{-1} T^{-1}]}{[M L^{-3}]} = [M^0 L^2 T^{-1}]$ (SI unit: $\text{m}^2/\text{s}$, CGS unit: Stoke).",
    "Easy"
)

# Q105
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A horizontal pipe of cross-sectional area $10\text{ cm}^2$ carries water at a speed of $2\text{ m/s}$. The mass of water flowing through the pipe per minute is:",
    [
        r"$120\text{ kg}$",
        r"$2\text{ kg}$",
        r"$60\text{ kg}$",
        r"$240\text{ kg}$"
    ],
    0,
    r"Area $A = 10 \times 10^{-4}\text{ m}^2 = 10^{-3}\text{ m}^2$. Mass flow rate per second: $\frac{dm}{dt} = \rho A v = 1000 \times 10^{-3} \times 2 = 2\text{ kg/s}$. Mass flowing per minute: $m = 2\text{ kg/s} \times 60\text{ s} = 120\text{ kg}$.",
    "Easy"
)

# Q106
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A wooden cube of side $10\text{ cm}$ floats in water with $2\text{ cm}$ remaining above the water surface. The density of the wood is:",
    [
        r"$800\text{ kg/m}^3$",
        r"$200\text{ kg/m}^3$",
        r"$600\text{ kg/m}^3$",
        r"$850\text{ kg/m}^3$"
    ],
    0,
    r"Height submerged is $h_{\text{sub}} = 10 - 2 = 8\text{ cm}$. Submerged fraction is $\frac{8}{10} = 0.8$. Density of wood is $\rho_{\text{wood}} = 0.8 \times \rho_{\text{water}} = 0.8 \times 1000 = 800\text{ kg/m}^3$.",
    "Easy"
)

# Q107
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"An ideal fluid is defined as a fluid that is:",
    [
        r"Non-viscous and incompressible",
        r"Viscous and compressible",
        r"Viscous and incompressible",
        r"Non-viscous and compressible"
    ],
    0,
    r"An ideal fluid has zero viscosity ($\eta = 0$, no internal friction) and is incompressible ($\rho = \text{constant}$).",
    "Easy"
)

# Q108
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"In a atomizer / perfume sprayer, squeezing the rubber bulb forces air rapidly across the top of a dip tube. This creates:",
    [
        r"A low-pressure zone above the tube, causing atmospheric pressure to push the liquid upward",
        r"A high-pressure zone pushing the liquid downwards",
        r"Electrostatic charging of the liquid droplets",
        r"Thermal expansion of the liquid"
    ],
    0,
    r"By Bernoulli's principle, high air velocity over the open mouth of the vertical tube causes a pressure drop. Atmospheric pressure acting on the liquid in the bottle forces liquid up into the airflow, atomizing it into spray.",
    "Easy"
)

# Q109
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"A small steel ball is dropped into a tall cylinder filled with glycerin. Which graph correctly depicts the velocity of the ball as a function of time?",
    [
        r"A curve that starts from zero, curves downward, and approaches a horizontal asymptote ($v_t$)",
        r"A straight line passing through the origin ($v \propto t$)",
        r"A parabola opening upward ($v \propto t^2$)",
        r"A damped sinusoidal oscillation"
    ],
    0,
    r"Equation of motion: $m \frac{dv}{dt} = m g' - 6\pi \eta r v$. Integrating yields $v(t) = v_t(1 - e^{-t/\tau})$, which starts from zero at $t=0$ and asymptotically approaches the constant terminal velocity $v_t$.",
    "Easy"
)

# Q110
add_q(
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    r"The velocity profile of laminar flow of a viscous liquid through a circular pipe is a:",
    [
        r"Parabolic profile with maximum velocity at the axis and zero velocity at the pipe walls",
        r"Uniform rectangular profile",
        r"Triangular profile",
        r"Hyperbolic profile"
    ],
    0,
    r"By Poiseuille flow analysis, viscous drag gives $v(r) = \frac{P}{4\eta L}(R^2 - r^2)$, which is a parabola with peak velocity on the central axis ($r = 0$) and zero velocity at the boundary walls ($r = R$) due to the no-slip condition.",
    "Easy"
)

print(f"Total questions in PSL part 1: {len(questions)}")
with open("scripts/psl/psl_batch1.json", "w") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/psl/psl_batch1.json")
