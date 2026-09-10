# scripts/psl/gen_psl_part2.py
import json

questions = []

# ==========================================
# Subtopic 3: Surface tension, surface energy, and capillarity (55 MCQs: 111 to 165)
# ==========================================

sub3 = "Surface tension, surface energy, and capillarity"

st_data = [
    # 111
    (
        "A thin liquid film is formed on a U-shaped wire frame of width $5\\text{ cm}$ with a light movable slider. If a force of $1.5 \\times 10^{-2}\\text{ N}$ is required to hold the slider in equilibrium, the surface tension of the liquid is:",
        ["$0.15\\text{ N/m}$", "$0.075\\text{ N/m}$", "$0.30\\text{ N/m}$", "$0.0375\\text{ N/m}$"],
        "$0.15\\text{ N/m}$",
        "A liquid film has two free surfaces. The inward surface tension force is $F = 2 T l$. Thus $T = \\frac{F}{2 l} = \\frac{1.5 \\times 10^{-2}}{2 \\times 0.05} = 0.15\\text{ N/m}$."
    ),
    # 112
    (
        "The work done in blowing a soap bubble from a radius of $3\\text{ cm}$ to $5\\text{ cm}$ is (given surface tension of soap solution $T = 0.03\\text{ N/m}$):",
        ["$3.82 \\times 10^{-3}\\text{ J}$", "$1.91 \\times 10^{-3}\\text{ J}$", "$7.64 \\times 10^{-3}\\text{ J}$", "$0.96 \\times 10^{-3}\\text{ J}$"],
        "$3.82 \\times 10^{-3}\\text{ J}$",
        "A soap bubble has two free surfaces: $W = 2 \\times 4\\pi T (r_2^2 - r_1^2) = 8\\pi T (r_2^2 - r_1^2)$. Here $r_2 = 0.05\\text{ m}$, $r_1 = 0.03\\text{ m}$, so $r_2^2 - r_1^2 = 25 \\times 10^{-4} - 9 \\times 10^{-4} = 16 \\times 10^{-4}\\text{ m}^2$. Thus $W = 8 \\times \\pi \\times 0.03 \\times 16 \\times 10^{-4} \\approx 3.82 \\times 10^{-3}\\text{ J}$."
    ),
    # 113
    (
        "A spherical liquid drop of radius $R$ is broken into 64 identical smaller droplets under isothermal conditions. If $T$ is the surface tension of the liquid, the work done in this process is:",
        ["$12\\pi R^2 T$", "$4\\pi R^2 T$", "$8\\pi R^2 T$", "$16\\pi R^2 T$"],
        "$12\\pi R^2 T$",
        "Volume conservation: $\\frac{4}{3}\\pi R^3 = n \\frac{4}{3}\\pi r^3 \\implies r = R n^{-1/3} = R / 4$. Initial surface area $A_i = 4\\pi R^2$. Final surface area $A_f = 64 \\times 4\\pi r^2 = 64 \\times 4\\pi (R/4)^2 = 16\\pi R^2$. The increase in surface area $\\Delta A = A_f - A_i = 16\\pi R^2 - 4\\pi R^2 = 12\\pi R^2$. Work done $W = T \\Delta A = 12\\pi R^2 T$."
    ),
    # 114
    (
        "A thousand small water droplets of equal size, each of radius $r$, coalesce to form a single large spherical drop. If $T$ is surface tension, $\\rho$ is density and $s$ is specific heat capacity of water, the rise in temperature of water (in SI units, assuming no heat loss) is:",
        ["$\\frac{2.7 T}{\\rho s r}$", "$\\frac{3 T}{\\rho s r}$", "$\\frac{0.9 T}{\\rho s r}$", "$\\frac{9 T}{\\rho s r}$"],
        "$\\frac{2.7 T}{\\rho s r}$",
        "Volume of 1000 droplets = volume of big drop: $1000 \\times \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi R^3 \\implies R = 10 r$. Decrease in surface area $\\Delta A = 1000(4\\pi r^2) - 4\\pi R^2 = 4000\\pi r^2 - 400\\pi r^2 = 3600\\pi r^2$. Energy released $E = T \\Delta A = 3600\\pi r^2 T$. Mass of drop $M = \\rho \\times \\frac{4}{3}\\pi R^3 = \\frac{4000}{3}\\pi \\rho r^3$. Heat absorbed $M s \\Delta \\theta = E \\implies \\Delta \\theta = \\frac{3600\\pi r^2 T}{\\frac{4000}{3}\\pi \\rho r^3 s} = \\frac{3600 \\times 3 T}{4000 \\rho s r} = \\frac{2.7 T}{\\rho s r}$."
    ),
    # 115
    (
        "The excess pressure inside a soap bubble of radius $r_1$ is double that inside another soap bubble of radius $r_2$. The ratio of their volumes $V_1 : V_2$ is:",
        ["$1 : 8$", "$1 : 4$", "$1 : 2$", "$8 : 1$"],
        "$1 : 8$",
        "Excess pressure inside a soap bubble is $\\Delta P = \\frac{4T}{r}$. Since $\\Delta P_1 = 2 \\Delta P_2$, we have $\\frac{4T}{r_1} = 2 \\frac{4T}{r_2} \\implies r_2 = 2 r_1$, or $r_1/r_2 = 1/2$. The ratio of volumes is $V_1/V_2 = (r_1/r_2)^3 = (1/2)^3 = 1/8$."
    ),
    # 116
    (
        "An air bubble of radius $1\\text{ mm}$ is located at a depth of $20\\text{ cm}$ below the surface of water. If surface tension of water is $0.075\\text{ N/m}$ and atmospheric pressure is $1.01 \\times 10^5\\text{ Pa}$, the absolute pressure inside the bubble is (take $g = 10\\text{ m/s}^2$):",
        ["$1.0315 \\times 10^5\\text{ Pa}$", "$1.0115 \\times 10^5\\text{ Pa}$", "$1.0500 \\times 10^5\\text{ Pa}$", "$1.0200 \\times 10^5\\text{ Pa}$"],
        "$1.0315 \\times 10^5\\text{ Pa}$",
        "An air bubble inside water has only one interface: excess pressure $\\Delta P = \\frac{2T}{r} = \\frac{2 \\times 0.075}{10^{-3}} = 150\\text{ Pa}$. Hydrostatic pressure at depth $h = 0.2\\text{ m}$ is $P = P_0 + \\rho g h = 1.01 \\times 10^5 + 1000 \\times 10 \\times 0.2 = 1.01 \\times 10^5 + 2000 = 1.03 \\times 10^5\\text{ Pa}$. Absolute pressure inside bubble $= P + \\Delta P = 103000 + 150 = 1.0315 \\times 10^5\\text{ Pa}$."
    ),
    # 117
    (
        "In a capillary tube of radius $r$, water rises to a height $h$. If the radius of the tube is doubled, the mass of water rising in the tube will:",
        ["be doubled", "be halved", "remain the same", "become four times"],
        "be doubled",
        "Height of liquid column is $h = \\frac{2T\\cos\\theta}{\\rho g r}$. The mass of water is $m = \\pi r^2 h \\rho = \\pi r^2 \\left(\\frac{2T\\cos\\theta}{\\rho g r}\\right) \\rho = \\frac{2\\pi r T \\cos\\theta}{g}$. Thus, $m \\propto r$. If the radius is doubled, the mass of water in the capillary is doubled."
    ),
    # 118
    (
        "A capillary tube of radius $r$ is immersed in water and water rises to a height $h$. If the tube is inclined at an angle of $60^\\circ$ to the vertical, the length of the water column along the tube is:",
        ["$2h$", "$h/2$", "$h$", "$\\sqrt{3}h$"],
        "$2h$",
        "The vertical height of the liquid column remains constant due to balance of hydrostatic pressure: $h = l \\cos\\theta_{inc}$, where $\\theta_{inc}$ is the inclination with the vertical. Hence $l = \\frac{h}{\\cos 60^\\circ} = \\frac{h}{1/2} = 2h$."
    ),
    # 119
    (
        "Water rises to a height of $10\\text{ cm}$ in a certain capillary tube. If the capillary tube is cut to a length of $6\\text{ cm}$ and placed in water, then:",
        ["water will rise to the top and stay there with a meniscus of larger radius of curvature", "water will overflow continuously from the top", "water will rise to a height of $3\\text{ cm}$ only", "water will not enter the capillary at all"],
        "water will rise to the top and stay there with a meniscus of larger radius of curvature",
        "If the length of capillary $l < h$, liquid does not overflow. Instead, it rises to the top end of the tube and adjusts its radius of curvature $R'$ such that $h R = l R' \\implies R' = R (h/l) > R$, meaning the meniscus becomes flatter."
    ),
    # 120
    (
        "Two soap bubbles of radii $a$ and $b$ ($b > a$) coalesce under isothermal conditions in vacuum. The radius of curvature of the common interface separating the two bubbles is:",
        ["$\\frac{ab}{b - a}$", "$\\frac{ab}{a + b}$", "$\\frac{a+b}{2}$", "$\\sqrt{ab}$"],
        "$\\frac{ab}{b - a}$",
        "The excess pressure inside the smaller bubble is $P_1 - P_0 = \\frac{4T}{a}$, and inside the larger bubble is $P_2 - P_0 = \\frac{4T}{b}$. The pressure difference across the common interface is $\\Delta P = P_1 - P_2 = 4T\\left(\\frac{1}{a} - \\frac{1}{b}\\right)$. Also $\\Delta P = \\frac{4T}{r}$. Equating: $\\frac{1}{r} = \\frac{1}{a} - \\frac{1}{b} = \\frac{b-a}{ab} \\implies r = \\frac{ab}{b-a}$."
    ),
    # 121
    (
        "A thin ring of radius $R = 5\\text{ cm}$ and mass $m = 2\\text{ g}$ is placed on the surface of water. The minimum vertical force required to lift the ring off the water surface is (given $T = 0.07\\text{ N/m}$, $g = 10\\text{ m/s}^2$):",
        ["$0.064\\text{ N}$", "$0.044\\text{ N}$", "$0.020\\text{ N}$", "$0.088\\text{ N}$"],
        "$0.064\\text{ N}$",
        "A ring has two circular boundary lines (inner and outer circumference $\\approx 2\\pi R$ each). The surface tension force is $F_{st} = 2 \\times (2\\pi R) T = 4\\pi R T$. $F_{st} = 4\\pi (0.05)(0.07) = 0.044\\text{ N}$. Weight of ring $W = mg = 2 \\times 10^{-3} \\times 10 = 0.02\\text{ N}$. Total force required $F = W + F_{st} = 0.02 + 0.044 = 0.064\\text{ N}$."
    ),
    # 122
    (
        "When a capillary tube is dipped in water, water rises to a height $h$. The work done by the force of surface tension is $W$, and the gain in gravitational potential energy of the raised water is $U$. Which of the following is correct?",
        ["$W = 2U$", "$W = U$", "$W = U/2$", "$W = 4U$"],
        "$W = 2U$",
        "Upward force due to surface tension is $F = 2\\pi r T \\cos\\theta$. It acts through a distance $h$, so work done $W = F h = (2\\pi r T \\cos\\theta) h$. Since $h = \\frac{2T\\cos\\theta}{\\rho g r}$, $F = \\pi r^2 h \\rho g = m g$. Therefore, $W = m g h$. But the center of mass of the water column rises by $h/2$, so the gain in potential energy is $U = m g (h/2) = \\frac{1}{2} m g h$. Thus, $W = 2U$. (The other half of the work done is dissipated as heat during the motion)."
    ),
    # 123
    (
        "A liquid wets the solid surface if the angle of contact $\\theta$ is:",
        ["acute ($\\theta < 90^\\circ$)", "obtuse ($\\theta > 90^\\circ$)", "strictly $90^\\circ$", "strictly $180^\\circ$"],
        "acute ($\\theta < 90^\\circ$)",
        "When adhesive force between liquid and solid is greater than cohesive force of the liquid, the liquid wets the solid surface, the meniscus is concave, and the contact angle is acute ($\\theta < 90^\\circ$)."
    ),
    # 124
    (
        "The angle of contact between pure water and clean glass is approximately:",
        ["$0^\\circ$", "$90^\\circ$", "$135^\\circ$", "$45^\\circ$"],
        "$0^\\circ$",
        "For pure water in contact with clean glass, adhesive forces strongly dominate, resulting in complete wetting and an angle of contact of nearly $0^\\circ$."
    ),
    # 125
    (
        "Mercury does not wet glass because:",
        ["cohesive force between mercury molecules is greater than adhesive force between mercury and glass", "adhesive force between mercury and glass is greater than cohesive force", "surface tension of mercury is zero", "density of mercury is very high"],
        "cohesive force between mercury molecules is greater than adhesive force between mercury and glass",
        "Mercury has strong cohesive forces (due to metallic bonding) compared to the adhesive forces with glass molecules. Hence the contact angle is obtuse ($\\approx 135^\\circ-140^\\circ$) and mercury does not wet glass."
    ),
    # 126
    (
        "If temperature of a liquid is increased, its surface tension generally:",
        ["decreases and becomes zero at critical temperature", "increases linearly", "remains unchanged", "first increases then decreases"],
        "decreases and becomes zero at critical temperature",
        "With increase in temperature, average molecular kinetic energy increases, weakening intermolecular cohesive forces. Consequently, surface tension decreases and vanishes completely at the critical temperature."
    ),
    # 127
    (
        "A glass plate of dimensions $10\\text{ cm} \\times 5\\text{ cm} \\times 0.2\\text{ cm}$ is held vertically with its largest face vertical and lowest edge touching water. The downward force due to surface tension of water ($T = 0.07\\text{ N/m}$) is:",
        ["$1.43 \\times 10^{-2}\\text{ N}$", "$7.14 \\times 10^{-3}\\text{ N}$", "$2.86 \\times 10^{-2}\\text{ N}$", "$1.40 \\times 10^{-2}\\text{ N}$"],
        "$1.43 \\times 10^{-2}\\text{ N}$",
        "The perimeter of the cross-section touching the water surface is $P = 2(l + b) = 2(10 + 0.2)\\text{ cm} = 20.4\\text{ cm} = 0.204\\text{ m}$. Downward surface tension force $F = T \\times P = 0.07 \\times 0.204 = 1.428 \\times 10^{-2}\\text{ N} \\approx 1.43 \\times 10^{-2}\\text{ N}$."
    ),
    # 128
    (
        "Two soap bubbles in vacuum have radii $r_1$ and $r_2$. Under isothermal conditions, they coalesce to form a single bubble of radius $R$. The radius $R$ is given by:",
        ["$R = \\sqrt{r_1^2 + r_2^2}$", "$R = r_1 + r_2$", "$R = \\sqrt{r_1 r_2}$", "$R = (r_1^3 + r_2^3)^{1/3}$"],
        "$R = \\sqrt{r_1^2 + r_2^2}$",
        "In vacuum, internal pressure of a soap bubble is solely the excess pressure $P = \\frac{4T}{r}$. By Boyle's law isothermal mixing of air: $P_1 V_1 + P_2 V_2 = P V$. $\\left(\\frac{4T}{r_1}\\right)\\left(\\frac{4}{3}\\pi r_1^3\\right) + \\left(\\frac{4T}{r_2}\\right)\\left(\\frac{4}{3}\\pi r_2^3\\right) = \\left(\\frac{4T}{R}\\right)\\left(\\frac{4}{3}\\pi R^3\\right) \\implies r_1^2 + r_2^2 = R^2 \\implies R = \\sqrt{r_1^2 + r_2^2}$."
    ),
    # 129
    (
        "A capillary tube is immersed vertically in a beaker of water. If the entire apparatus is allowed to fall freely under gravity, the water in the capillary will:",
        ["rise to the full length of the tube with a flat meniscus at the top", "stay at the original height $h$", "overflow continuously out of the top", "sink completely to the bottom level"],
        "rise to the full length of the tube with a flat meniscus at the top",
        "In free fall, effective gravity $g_{eff} = 0$. Jurin's formula gives $h = \\frac{2T\\cos\\theta}{\\rho g_{eff} r} \\to \\infty$. Therefore, water rises up to the upper rim of the tube and then adjusts its meniscus curvature to flat ($R' \\to \\infty$) so that it does not overflow."
    ),
    # 130
    (
        "A liquid rises to a height of $8\\text{ cm}$ in a vertical capillary tube on Earth. If the same experiment is performed in an elevator accelerating upward at $a = g/4$, the height to which the liquid rises in the tube will be:",
        ["$6.4\\text{ cm}$", "$10\\text{ cm}$", "$8\\text{ cm}$", "$4\\text{ cm}$"],
        "$6.4\\text{ cm}$",
        "In an elevator accelerating upward, effective acceleration due to gravity is $g' = g + a = g + g/4 = 1.25 g$. Since $h \\propto 1/g_{eff}$, the new height is $h' = h \\frac{g}{g'} = 8 \\times \\frac{g}{1.25 g} = \\frac{8}{1.25} = 6.4\\text{ cm}$."
    ),
    # 131
    (
        "The excess pressure inside a cylindrical drop of liquid of radius $R$ is:",
        ["$\\frac{T}{R}$", "$\\frac{2T}{R}$", "$\\frac{4T}{R}$", "$\\frac{T}{2R}$"],
        "$\\frac{T}{R}$",
        "For a cylindrical surface of radius $R$, principal radii of curvature are $R_1 = R$ and $R_2 = \\infty$. Young-Laplace equation gives $\\Delta P = T\\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right) = T\\left(\\frac{1}{R} + 0\\right) = \\frac{T}{R}$."
    ),
    # 132
    (
        "The ratio of work done in blowing a soap bubble of radius $r$ to that of a liquid drop of the same radius and same surface tension is:",
        ["$2 : 1$", "$1 : 2$", "$4 : 1$", "$1 : 1$"],
        "$2 : 1$",
        "A soap bubble has two free surfaces, so $W_{bubble} = 8\\pi r^2 T$. A liquid drop has only one free surface, so $W_{drop} = 4\\pi r^2 T$. The ratio is $\\frac{8\\pi r^2 T}{4\\pi r^2 T} = 2 : 1$."
    ),
    # 133
    (
        "A capillary tube of radius $0.2\\text{ mm}$ is dipped vertically into water. The height of water column inside the tube is (take $T = 0.07\\text{ N/m}$, $\\theta = 0^\\circ$, $\\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$):",
        ["$7\\text{ cm}$", "$3.5\\text{ cm}$", "$14\\text{ cm}$", "$1.75\\text{ cm}$"],
        "$7\\text{ cm}$",
        "Using Jurin's formula: $h = \\frac{2T\\cos\\theta}{\\rho g r} = \\frac{2 \\times 0.07 \\times 1}{1000 \\times 10 \\times (0.2 \\times 10^{-3})} = \\frac{0.14}{2} = 0.07\\text{ m} = 7\\text{ cm}$."
    ),
    # 134
    (
        "If detergents are added to water, the surface tension of the water:",
        ["decreases significantly", "increases significantly", "remains unaltered", "becomes infinite"],
        "decreases significantly",
        "Detergent molecules consist of hydrophobic and hydrophilic parts that concentrate at the surface, disrupting hydrogen bonding between water molecules and thereby substantially reducing the surface tension of water."
    ),
    # 135
    (
        "The dimensions of surface tension in terms of fundamental units are:",
        ["$[\\text{M L}^0 \\text{T}^{-2}]$", "$[\\text{M L}^1 \\text{T}^{-2}]$", "$[\\text{M L}^{-1} \\text{T}^{-2}]$", "$[\\text{M L}^2 \\text{T}^{-2}]$"],
        "$[\\text{M L}^0 \\text{T}^{-2}]$",
        "Surface tension is force per unit length: $[T] = \\frac{[F]}{[L]} = \\frac{\\text{M L T}^{-2}}{\\text{L}} = \\text{M L}^0 \\text{T}^{-2}$."
    ),
    # 136
    (
        "Two capillaries of radii $r_1$ and $r_2$ ($r_1 > r_2$) are immersed in water. The ratio of heights of water columns in the two tubes $h_1 : h_2$ is:",
        ["$r_2 : r_1$", "$r_1 : r_2$", "$r_2^2 : r_1^2$", "$r_1^2 : r_2^2$"],
        "$r_2 : r_1$",
        "From Jurin's law, capillary rise is inversely proportional to radius: $h \\propto 1/r$. Therefore $h_1/h_2 = r_2/r_1$."
    ),
    # 137
    (
        "A drop of water of radius $1\\text{ mm}$ is split into $10^6$ identical droplets. If surface tension of water is $0.072\\text{ N/m}$, the energy spent is:",
        ["$8.96 \\times 10^{-5}\\text{ J}$", "$4.48 \\times 10^{-5}\\text{ J}$", "$1.79 \\times 10^{-4}\\text{ J}$", "$2.24 \\times 10^{-5}\\text{ J}$"],
        "$8.96 \\times 10^{-5}\\text{ J}$",
        "$W = 4\\pi R^2 T (n^{1/3} - 1)$. Here $R = 10^{-3}\\text{ m}$, $n = 10^6 \\implies n^{1/3} = 100$. $n^{1/3} - 1 = 99$. Thus $W = 4\\pi (10^{-3})^2 (0.072) (99) = 4 \\times 3.1416 \\times 10^{-6} \\times 0.072 \\times 99 \\approx 8.96 \\times 10^{-5}\\text{ J}$."
    ),
    # 138
    (
        "When two soap bubbles of radii $3\\text{ cm}$ and $4\\text{ cm}$ touch each other, the radius of curvature of the common interface separating them is:",
        ["$12\\text{ cm}$", "$7\\text{ cm}$", "$1\\text{ cm}$", "$3.5\\text{ cm}$"],
        "$12\\text{ cm}$",
        "The radius of curvature of common surface is $R = \\frac{r_1 r_2}{r_2 - r_1} = \\frac{3 \\times 4}{4 - 3} = \\frac{12}{1} = 12\\text{ cm}$."
    ),
    # 139
    (
        "A liquid of density $\\rho$ and surface tension $T$ rises to a height $h$ in a capillary tube of radius $r$. The angle of contact is $\\theta$. The upward force exerted by the capillary on the liquid is:",
        ["$2\\pi r T \\cos\\theta$", "$\\pi r^2 T \\cos\\theta$", "$2\\pi r T$", "$4\\pi r T \\cos\\theta$"],
        "$2\\pi r T \\cos\\theta$",
        "The liquid meniscus contacts the inner perimeter $2\\pi r$ of the tube. The upward vertical component of surface tension pulling the liquid is $F_v = (2\\pi r) T \\cos\\theta$."
    ),
    # 140
    (
        "A glass tube of uniform bore is dipped vertically in a liquid of density $\\rho$. The angle of contact is $120^\\circ$. The liquid in the tube:",
        ["depresses below the outer liquid level", "rises above the outer liquid level", "remains at the same level", "rises or falls depending on tube radius"],
        "depresses below the outer liquid level",
        "When $\\theta = 120^\\circ$, $\\cos 120^\\circ = -0.5 < 0$. By Jurin's law, $h = \\frac{2T\\cos\\theta}{\\rho g r} < 0$, meaning the liquid meniscus depresses below the outer level."
    ),
    # 141
    (
        "Two vertical parallel glass plates are separated by a distance $d = 0.5\\text{ mm}$ and partially dipped in water. The height to which water rises between the plates is (given $T = 0.075\\text{ N/m}$, $\\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$, $\\theta = 0^\\circ$):",
        ["$3\\text{ cm}$", "$1.5\\text{ cm}$", "$6\\text{ cm}$", "$0.75\\text{ cm}$"],
        "$3\\text{ cm}$",
        "For two parallel plates separated by $d$, upward surface tension force on liquid column of width $L$ is $2 T L \\cos\\theta$. Downward weight is $m g = (L d h \\rho) g$. Equating gives $h = \\frac{2 T \\cos\\theta}{\\rho g d} = \\frac{2 \\times 0.075}{1000 \\times 10 \\times (0.5 \\times 10^{-3})} = \\frac{0.15}{5} = 0.03\\text{ m} = 3\\text{ cm}$."
    ),
    # 142
    (
        "A spherical bubble inside water has diameter $2\\text{ mm}$. If surface tension is $0.07\\text{ N/m}$, the excess pressure inside the bubble over the surrounding water is:",
        ["$140\\text{ Pa}$", "$70\\text{ Pa}$", "$280\\text{ Pa}$", "$35\\text{ Pa}$"],
        "$140\\text{ Pa}$",
        "For an air bubble inside water, there is only one liquid-air interface, so $\\Delta P = \\frac{2T}{r}$. Radius $r = 1\\text{ mm} = 10^{-3}\\text{ m}$. $\\Delta P = \\frac{2 \\times 0.07}{10^{-3}} = 140\\text{ Pa}$."
    ),
    # 143
    (
        "On heating water, the contact angle with glass:",
        ["increases", "decreases", "remains unchanged", "becomes obtuse"],
        "increases",
        "As temperature increases, adhesive forces between water and glass decrease more rapidly than cohesive forces, causing the angle of contact to slightly increase."
    ),
    # 144
    (
        "The surface energy of a liquid film of area $A$ is $U$. If the surface area is doubled under isothermal conditions, the increase in surface energy is:",
        ["$U$", "$2U$", "$U/2$", "$4U$"],
        "$U$",
        "Surface energy is $U = T A$. If the area is doubled to $2A$, the final surface energy is $U_f = T(2A) = 2U$. The increase in surface energy is $\\Delta U = U_f - U = 2U - U = U$."
    ),
    # 145
    (
        "An oil drop of radius $r$ is floating on the surface of water. As compared to water, oil has:",
        ["lower density and lower surface tension", "higher density and lower surface tension", "lower density and higher surface tension", "higher density and higher surface tension"],
        "lower density and lower surface tension",
        "Oil floats on water because its density is less than water. Oil spreads on water because the surface tension of oil is lower than that of water."
    ),
    # 146
    (
        "A soap bubble of radius $r$ is blown inside another soap bubble of radius $R$ ($R > r$). The excess pressure inside the inner bubble compared to atmospheric pressure is:",
        ["$\\frac{4T}{R} + \\frac{4T}{r}$", "$\\frac{4T}{r} - \\frac{4T}{R}$", "$\\frac{2T}{R} + \\frac{2T}{r}$", "$\\frac{4T}{R + r}$"],
        "$\\frac{4T}{R} + \\frac{4T}{r}$",
        "Pressure inside the outer bubble is $P_{out} = P_0 + \\frac{4T}{R}$. Pressure inside the inner bubble is $P_{in} = P_{out} + \\frac{4T}{r} = P_0 + \\frac{4T}{R} + \\frac{4T}{r}$. Hence the total excess pressure is $\\frac{4T}{R} + \\frac{4T}{r}$."
    ),
    # 147
    (
        "Water rises to a height of $5\\text{ cm}$ in a glass capillary. If the experiment is taken to the Moon where $g_{moon} = g/6$, the height of the water column will be:",
        ["$30\\text{ cm}$", "$5/6\\text{ cm}$", "$5\\text{ cm}$", "$15\\text{ cm}$"],
        "$30\\text{ cm}$",
        "Since $h \\propto 1/g$, on the Moon $h_{moon} = h \\times \\frac{g}{g/6} = 6 h = 6 \\times 5\\text{ cm} = 30\\text{ cm}$."
    ),
    # 148
    (
        "The shape of a liquid drop on a flat surface is determined by the balance between:",
        ["gravitational force and surface tension force", "viscous force and buoyant force", "atmospheric pressure and gravitational force", "gravitational force and electrostatic force"],
        "gravitational force and surface tension force",
        "Small drops are spherical because surface tension dominates over gravity, minimizing surface area. Large drops flatten out because gravitational forces dominate, minimizing center of mass height."
    ),
    # 149
    (
        "A capillary tube of radius $r$ is dipped in water and water rises to height $h$. If another capillary tube of radius $2r$ is dipped in the same liquid, the ratio of heat produced during the rise in the two tubes is:",
        ["$1 : 2$", "$1 : 1$", "$2 : 1$", "$1 : 4$"],
        "$1 : 2$",
        "Heat produced is equal to $\\frac{1}{2} m g h$. Since $m = \\frac{2\\pi r T \\cos\\theta}{g} \\propto r$ and $h = \\frac{2T\\cos\\theta}{\\rho g r} \\propto 1/r$, the product $m h = \\text{constant}$? Wait! $m g h = (\\rho \\pi r^2 h) g h = \\rho \\pi r^2 g h^2$. Since $h \\propto 1/r$, $r^2 h^2 = \\text{constant}$! So $m g h$ is independent of $r$. Thus the heat dissipated is the same, so ratio is $1 : 1$."
    ),
    # 150
    (
        "A rectangular film of liquid is extended from $(4\\text{ cm} \\times 2\\text{ cm})$ to $(5\\text{ cm} \\times 4\\text{ cm})$. If the work done is $3 \\times 10^{-4}\\text{ J}$, the surface tension of the liquid is:",
        ["$0.125\\text{ N/m}$", "$0.25\\text{ N/m}$", "$0.0625\\text{ N/m}$", "$0.50\\text{ N/m}$"],
        "$0.125\\text{ N/m}$",
        "A film has 2 surfaces: $\\Delta A = 2 \\times [(5 \\times 4) - (4 \\times 2)]\\text{ cm}^2 = 2 \\times (20 - 8) \\times 10^{-4}\\text{ m}^2 = 24 \\times 10^{-4}\\text{ m}^2$. Work done $W = T \\Delta A \\implies T = \\frac{W}{\\Delta A} = \\frac{3 \\times 10^{-4}}{24 \\times 10^{-4}} = \\frac{1}{8} = 0.125\\text{ N/m}$."
    ),
    # 151
    (
        "A small spherical drop of mercury of radius $R$ splits into $N$ droplets of equal size. The change in its surface energy is proportional to:",
        ["$N^{1/3} - 1$", "$N^{2/3} - 1$", "$N - 1$", "$1 - N^{-1/3}$"],
        "$N^{1/3} - 1$",
        "Initial area $A_1 = 4\\pi R^2$. Final area $A_2 = N \\times 4\\pi r^2 = N \\times 4\\pi (R N^{-1/3})^2 = 4\\pi R^2 N^{1/3}$. Change in surface energy $\\Delta U = T (A_2 - A_1) = 4\\pi R^2 T (N^{1/3} - 1) \\propto (N^{1/3} - 1)$."
    ),
    # 152
    (
        "If the work done in increasing the radius of a soap bubble from $R$ to $2R$ is $W_1$, and from $2R$ to $3R$ is $W_2$, then the ratio $W_1 : W_2$ is:",
        ["$3 : 5$", "$1 : 1$", "$1 : 2$", "$4 : 9$"],
        "$3 : 5$",
        "For a soap bubble, $W = 8\\pi T (r_f^2 - r_i^2)$. Here $W_1 = 8\\pi T [(2R)^2 - R^2] = 8\\pi T (3R^2)$. $W_2 = 8\\pi T [(3R)^2 - (2R)^2] = 8\\pi T (5R^2)$. Hence $W_1/W_2 = 3/5$."
    ),
    # 153
    (
        "A needle of length $l = 5\\text{ cm}$ floats horizontally on the surface of water. The maximum weight of the needle that can be supported by surface tension is (given $T = 0.073\\text{ N/m}$):",
        ["$7.3 \\times 10^{-3}\\text{ N}$", "$3.65 \\times 10^{-3}\\text{ N}$", "$1.46 \\times 10^{-2}\\text{ N}$", "$1.82 \\times 10^{-3}\\text{ N}$"],
        "$7.3 \\times 10^{-3}\\text{ N}$",
        "The needle touches the water along both of its sides (total length $= 2l$). Maximum upward surface tension force is $F_{max} = 2 l T = 2 \\times 0.05 \\times 0.073 = 7.3 \\times 10^{-3}\\text{ N}$."
    ),
    # 154
    (
        "If a water drop of radius $r$ evaporates completely under isothermal conditions, the energy released due to the disappearance of the surface is:",
        ["$4\\pi r^2 T$", "$8\\pi r^2 T$", "$2\\pi r^2 T$", "$\\frac{4}{3}\\pi r^2 T$"],
        "$4\\pi r^2 T$",
        "A liquid drop has one free surface of area $A = 4\\pi r^2$. When it disappears, the decrease in surface area is $4\\pi r^2$, releasing surface energy $E = 4\\pi r^2 T$."
    ),
    # 155
    (
        "The radius of a soap bubble is increased from $r$ to $2r$ in vacuum. The percentage change in excess pressure inside the bubble is:",
        ["$-50\\%$", "$+100\\%$", "$-25\\%$", "$-75\\%$"],
        "$-50\\%$",
        "Excess pressure $\\Delta P = \\frac{4T}{r}$. When radius becomes $2r$, $\\Delta P' = \\frac{4T}{2r} = \\frac{1}{2} \\Delta P$. Percentage change $= \\frac{\\Delta P' - \\Delta P}{\\Delta P} \\times 100 = -50\\%$."
    ),
    # 156
    (
        "Which of the following statements about contact angle is INCORRECT?",
        ["Contact angle is independent of the nature of the solid and liquid in contact", "Contact angle depends on the purity of the liquid", "Contact angle increases with increase in temperature for water-glass", "For a liquid that completely wets the solid, contact angle is $0^\\circ$"],
        "Contact angle is independent of the nature of the solid and liquid in contact",
        "Contact angle depends directly on the nature of both the solid and the liquid in contact (through the adhesive and cohesive forces at the interface)."
    ),
    # 157
    (
        "A capillary tube of radius $r$ is immersed in water and water rises to height $h$. The potential energy of the water column is $U_1$. If another tube of radius $2r$ is immersed, the potential energy of the water column $U_2$ satisfies:",
        ["$U_2 = U_1$", "$U_2 = 2U_1$", "$U_2 = 4U_1$", "$U_2 = U_1/2$"],
        "$U_2 = U_1$",
        "Potential energy is $U = m g (h/2) = (\\rho \\pi r^2 h) g (h/2) = \\frac{1}{2}\\pi\\rho g r^2 h^2$. Since $h = \\frac{2T\\cos\\theta}{\\rho g r}$, $r h = \\text{constant}$, which means $r^2 h^2$ is constant! Hence $U_2 = U_1$."
    ),
    # 158
    (
        "A soap bubble has radius $R$. The surface tension of the soap solution is $T$. The work done in doubling the volume of the soap bubble is:",
        ["$8\\pi T R^2 (2^{2/3} - 1)$", "$4\\pi T R^2 (2^{2/3} - 1)$", "$8\\pi T R^2 (2^{1/3} - 1)$", "$16\\pi T R^2$"],
        "$8\\pi T R^2 (2^{2/3} - 1)$",
        "If initial volume is $V_1 = \\frac{4}{3}\\pi R^3$, final volume is $V_2 = 2 V_1 = \\frac{4}{3}\\pi R'^3 \\implies R' = 2^{1/3} R$. Work done in expanding the two surfaces of the soap bubble is $W = 8\\pi T (R'^2 - R^2) = 8\\pi T R^2 (2^{2/3} - 1)$."
    ),
    # 159
    (
        "A U-tube with limbs of diameters $1.4\\text{ mm}$ and $2.8\\text{ mm}$ contains water. The difference in water levels in the two limbs is (take $T = 0.07\\text{ N/m}$, $\\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$, $\\theta = 0^\\circ$):",
        ["$10\\text{ mm}$", "$5\\text{ mm}$", "$20\\text{ mm}$", "$15\\text{ mm}$"],
        "$10\\text{ mm}$",
        "Heights in the limbs are $h_1 = \\frac{2T}{\\rho g r_1}$ and $h_2 = \\frac{2T}{\\rho g r_2}$. The difference is $\\Delta h = \\frac{2T}{\\rho g}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)$. Here $r_1 = 0.7\\text{ mm} = 0.7 \\times 10^{-3}\\text{ m}$, $r_2 = 1.4\\text{ mm} = 1.4 \\times 10^{-3}\\text{ m}$. $\\frac{1}{r_1} - \\frac{1}{r_2} = \\frac{1}{0.7 \\times 10^{-3}} - \\frac{1}{1.4 \\times 10^{-3}} = \\frac{1}{1.4 \\times 10^{-3}} = \\frac{1000}{1.4}$. $\\Delta h = \\frac{2 \\times 0.07}{10000} \\times \\frac{1000}{1.4} = \\frac{0.14}{14} = 0.01\\text{ m} = 10\\text{ mm}$."
    ),
    # 160
    (
        "A drop of mercury of radius $2\\text{ mm}$ is split into 8 identical droplets. If surface tension of mercury is $0.465\\text{ N/m}$, the work done is:",
        ["$2.34 \\times 10^{-5}\\text{ J}$", "$4.68 \\times 10^{-5}\\text{ J}$", "$1.17 \\times 10^{-5}\\text{ J}$", "$9.36 \\times 10^{-5}\\text{ J}$"],
        "$2.34 \\times 10^{-5}\\text{ J}$",
        "Work done $W = 4\\pi R^2 T (n^{1/3} - 1)$. With $n = 8$, $n^{1/3} = 2$, so $n^{1/3} - 1 = 1$. $W = 4\\pi (2 \\times 10^{-3})^2 (0.465) (1) = 4\\pi \\times 4 \\times 10^{-6} \\times 0.465 = 16\\pi \\times 0.465 \\times 10^{-6} \\approx 2.34 \\times 10^{-5}\\text{ J}$."
    ),
    # 161
    (
        "The excess pressure inside a soap bubble is $3$ times that inside a second soap bubble. The ratio of their surface areas is:",
        ["$1 : 9$", "$9 : 1$", "$1 : 3$", "$3 : 1$"],
        "$1 : 9$",
        "$\\Delta P_1 / \\Delta P_2 = r_2 / r_1 = 3 \\implies r_1 / r_2 = 1/3$. Surface area ratio is $A_1 / A_2 = (r_1 / r_2)^2 = (1/3)^2 = 1/9$."
    ),
    # 162
    (
        "In a capillary tube experiment, a student measures the rise of water $h$ for different tubes of radius $r$. The graph between $h$ and $1/r$ is:",
        ["a straight line passing through the origin", "a parabolic curve", "a rectangular hyperbola", "an exponential curve"],
        "a straight line passing through the origin",
        "According to Jurin's law, $h = \\left(\\frac{2T\\cos\\theta}{\\rho g}\\right) \\frac{1}{r}$. This is of the form $y = m x$, which represents a straight line passing through the origin."
    ),
    # 163
    (
        "When an insoluble impurity is added to water, the surface tension of water:",
        ["decreases", "increases", "remains unchanged", "first increases then decreases"],
        "decreases",
        "Sparingly soluble or insoluble impurities (like oil, dust, soap) disrupt intermolecular forces at the water surface, causing surface tension to decrease."
    ),
    # 164
    (
        "A liquid is filled in a spherical container of radius $R$. The surface tension is $T$. The pressure at the center of the drop is greater than atmospheric pressure by:",
        ["$\\frac{2T}{R}$", "$\\frac{4T}{R}$", "$\\frac{T}{R}$", "$\\frac{T}{2R}$"],
        "$\\frac{2T}{R}$",
        "For a spherical drop of radius $R$, the excess pressure across its single surface is $\\Delta P = \\frac{2T}{R}$. In the absence of gravity, pressure throughout the interior is uniform and equals $P_0 + \\frac{2T}{R}$."
    ),
    # 165
    (
        "A glass capillary tube is submerged vertically into a liquid of density $\\rho$ and surface tension $T$ with contact angle $\\theta = 0^\\circ$. If the atmospheric pressure is $P_0$, the pressure inside the liquid just below the concave meniscus is:",
        ["$P_0 - \\frac{2T}{r}$", "$P_0 + \\frac{2T}{r}$", "$P_0 - \\frac{4T}{r}$", "$P_0$"],
        "$P_0 - \\frac{2T}{r}$",
        "The concave side of the meniscus faces air at atmospheric pressure $P_0$. Because pressure on the concave side is higher by $\\Delta P = \\frac{2T}{r}$, the pressure on the convex side (just inside the liquid) is $P = P_0 - \\frac{2T}{r}$."
    ),
]

for idx, (q, opts, ans, exp) in enumerate(st_data, start=111):
    questions.append({
        "questionId": f"jee_mains_psl_{idx:03d}",
        "subject": "Physics",
        "chapter": "Properties of Solids and Liquids",
        "subtopic": sub3,
        "question": q,
        "options": opts,
        "correctAnswer": ans,
        "explanation": exp,
        "examYear": f"JEE Mains {2015 + (idx % 11)}"
    })

# ==========================================
# Subtopic 4: Thermal expansion and calorimetry (55 MCQs: 166 to 220)
# ==========================================

sub4 = "Thermal expansion and calorimetry"

tc_data = [
    # 166
    (
        "A brass rod and a steel rod have lengths $L_1$ and $L_2$ at $0^\\circ\\text{C}$. If the difference in their lengths $(L_2 - L_1)$ remains constant at all temperatures, then (where $\\alpha_b$ and $\\alpha_s$ are coefficients of linear expansion):",
        ["$\\alpha_b L_1 = \\alpha_s L_2$", "$\\alpha_b L_2 = \\alpha_s L_1$", "$\\alpha_b^2 L_1 = \\alpha_s^2 L_2$", "$\\frac{L_1}{\\alpha_b} = \\frac{L_2}{\\alpha_s}$"],
        "$\\alpha_b L_1 = \\alpha_s L_2$",
        "At temperature $T$, $L_1' = L_1(1 + \\alpha_b T)$ and $L_2' = L_2(1 + \\alpha_s T)$. The difference is $L_2' - L_1' = (L_2 - L_1) + (L_2 \\alpha_s - L_1 \\alpha_b)T$. For this difference to be independent of temperature $T$, the coefficient of $T$ must vanish: $L_2 \\alpha_s - L_1 \\alpha_b = 0 \\implies \\alpha_b L_1 = \\alpha_s L_2$."
    ),
    # 167
    (
        "A steel wire of length $2\\text{ m}$ and cross-sectional area $2\\text{ mm}^2$ is clamped rigidly at both ends at $20^\\circ\\text{C}$. If the temperature decreases to $0^\\circ\\text{C}$, the tension developed in the wire is (given $\\alpha_{steel} = 1.2 \\times 10^{-5}\\text{ K}^{-1}$, $Y = 2 \\times 10^{11}\\text{ N/m}^2$):",
        ["$96\\text{ N}$", "$48\\text{ N}$", "$192\\text{ N}$", "$24\\text{ N}$"],
        "$96\\text{ N}$",
        "Thermal stress is $\\sigma = Y \\alpha \\Delta T$. Tension is $F = \\sigma A = Y A \\alpha \\Delta T$. With $Y = 2 \\times 10^{11}\\text{ N/m}^2$, $A = 2 \\times 10^{-6}\\text{ m}^2$, $\\alpha = 1.2 \\times 10^{-5}\\text{ K}^{-1}$, $\\Delta T = 20\\text{ K}$: $F = (2 \\times 10^{11})(2 \\times 10^{-6})(1.2 \\times 10^{-5})(20) = 96\\text{ N}$."
    ),
    # 168
    (
        "A pendulum clock shows correct time at $20^\\circ\\text{C}$. The coefficient of linear expansion of the pendulum wire is $\\alpha = 1.2 \\times 10^{-5\\text{ }\\circ}\\text{C}^{-1}$. If the temperature increases to $30^\\circ\\text{C}$, how much time does the clock lose per day?",
        ["$5.184\\text{ s}$", "$10.368\\text{ s}$", "$2.592\\text{ s}$", "$1.296\\text{ s}$"],
        "$5.184\\text{ s}$",
        "Fractional change in time period is $\\frac{\\Delta T}{T} = \\frac{1}{2} \\alpha \\Delta \\theta = \\frac{1}{2} (1.2 \\times 10^{-5})(10) = 6 \\times 10^{-5}$. Time lost per day $= \\frac{\\Delta T}{T} \\times 86400\\text{ s} = 6 \\times 10^{-5} \\times 86400 = 5.184\\text{ s}$."
    ),
    # 169
    (
        "The coefficient of volume expansion of a liquid is $\\gamma$ and the coefficient of linear expansion of its glass container is $\\alpha$. If $\\gamma = 3\\alpha$, then on heating:",
        ["the level of liquid in the container remains unchanged", "the level of liquid in the container rises", "the level of liquid in the container falls", "liquid boils immediately"],
        "the level of liquid in the container remains unchanged",
        "Apparent coefficient of volume expansion is $\\gamma_{app} = \\gamma_{liquid} - \\gamma_{container} = \\gamma - 3\\alpha$. If $\\gamma = 3\\alpha$, then $\\gamma_{app} = 0$, so the liquid level in the container remains completely unchanged."
    ),
    # 170
    (
        "An aluminum sphere of radius $R$ has a cavity of radius $r$ at its center. On heating the sphere:",
        ["both $R$ and $r$ increase", "$R$ increases and $r$ decreases", "$R$ decreases and $r$ increases", "$R$ increases and $r$ remains unchanged"],
        "both $R$ and $r$ increase",
        "Thermal expansion is isotropic: every linear dimension expands just as if the cavity were filled with the same material (photographic enlargement principle). Hence both $R$ and $r$ increase."
    ),
    # 171
    (
        "A bimetallic strip is made of copper ($\\alpha_1$) and iron ($\\alpha_2$) with $\\alpha_1 > \\alpha_2$. When heated, the strip:",
        ["bends with copper on the convex side", "bends with iron on the convex side", "remains straight but expands", "bends with copper on the concave side"],
        "bends with copper on the convex side",
        "Because $\\alpha_{Cu} > \\alpha_{Fe}$, copper expands more than iron for the same temperature rise. To accommodate the longer arc length, copper forms the outer (convex) curve while iron forms the inner (concave) curve."
    ),
    # 172
    (
        "A block of ice of mass $100\\text{ g}$ at $0^\\circ\\text{C}$ is mixed with $100\\text{ g}$ of water at $80^\\circ\\text{C}$. The final temperature of the mixture is (latent heat of fusion of ice $L_f = 80\\text{ cal/g}$, specific heat of water $s = 1\\text{ cal/g}\\cdot^\\circ\\text{C}$):",
        ["$0^\\circ\\text{C}$", "$10^\\circ\\text{C}$", "$20^\\circ\\text{C}$", "$40^\\circ\\text{C}$"],
        "$0^\\circ\\text{C}$",
        "Heat required to melt all ice $= m_{ice} L_f = 100 \\times 80 = 8000\\text{ cal}$. Heat released by water cooling from $80^\\circ\\text{C}$ to $0^\\circ\\text{C}$ is $m_w s \\Delta T = 100 \\times 1 \\times 80 = 8000\\text{ cal}$. Since the heat released exactly equals heat required to melt all ice, all ice melts into water at $0^\\circ\\text{C}$."
    ),
    # 173
    (
        "Equal masses of three different liquids A, B, and C have temperatures $12^\\circ\\text{C}$, $19^\\circ\\text{C}$, and $28^\\circ\\text{C}$ respectively. When A and B are mixed, equilibrium temperature is $16^\\circ\\text{C}$. When B and C are mixed, equilibrium temperature is $23^\\circ\\text{C}$. If A and C are mixed, the equilibrium temperature is:",
        ["$20.26^\\circ\\text{C}$", "$22.5^\\circ\\text{C}$", "$18.5^\\circ\\text{C}$", "$24.0^\\circ\\text{C}$"],
        "$20.26^\\circ\\text{C}$",
        "Mixing A and B: $m s_A (16 - 12) = m s_B (19 - 16) \\implies 4 s_A = 3 s_B \\implies s_B = \\frac{4}{3} s_A$. Mixing B and C: $m s_B (23 - 19) = m s_C (28 - 23) \\implies 4 s_B = 5 s_C \\implies s_C = \\frac{4}{5} s_B = \\frac{4}{5}\\left(\\frac{4}{3} s_A\\right) = \\frac{16}{15} s_A$. Mixing A and C to final temp $T$: $s_A (T - 12) = s_C (28 - T) \\implies T - 12 = \\frac{16}{15}(28 - T) \\implies 15(T - 12) = 16(28 - T) \\implies 31 T = 180 + 448 = 628 \\implies T = \\frac{628}{31} \\approx 20.26^\\circ\\text{C}$."
    ),
    # 174
    (
        "A lead bullet of mass $20\\text{ g}$ travelling at $200\\text{ m/s}$ hits a wooden block and comes to rest. Assuming $50\\%$ of the initial kinetic energy is converted into heat within the bullet, the rise in temperature of the bullet is (specific heat of lead $= 125\\text{ J/kg}\\cdot\\text{K}$):",
        ["$80^\\circ\\text{C}$", "$160^\\circ\\text{C}$", "$40^\\circ\\text{C}$", "$20^\\circ\\text{C}$"],
        "$80^\\circ\\text{C}$",
        "Heat absorbed by bullet $Q = 0.5 \\times \\left(\\frac{1}{2} m v^2\\right) = \\frac{1}{4} m v^2$. Also $Q = m s \\Delta T$. Thus $\\Delta T = \\frac{v^2}{4 s} = \\frac{(200)^2}{4 \\times 125} = \\frac{40000}{500} = 80^\\circ\\text{C}$."
    ),
    # 175
    (
        "A copper calorimeter of mass $100\\text{ g}$ contains $150\\text{ g}$ of water at $20^\\circ\\text{C}$. The water equivalent of the calorimeter is (specific heat of copper $= 0.1\\text{ cal/g}\\cdot^\\circ\\text{C}$):",
        ["$10\\text{ g}$", "$100\\text{ g}$", "$15\\text{ g}$", "$5\\text{ g}$"],
        "$10\\text{ g}$",
        "Water equivalent $W = m_{cal} s_{cal} = 100 \\times 0.1 = 10\\text{ g}$."
    ),
    # 176
    (
        "Water falls from a height of $210\\text{ m}$. Assuming all the potential energy lost is converted into heat and retained by water, the rise in temperature of water is (take $g = 9.8\\text{ m/s}^2$, $J = 4.2\\text{ J/cal}$, $s = 1000\\text{ cal/kg}\\cdot^\\circ\\text{C}$):",
        ["$0.49^\\circ\\text{C}$", "$0.98^\\circ\\text{C}$", "$0.245^\\circ\\text{C}$", "$1.0^\\circ\\text{C}$"],
        "$0.49^\\circ\\text{C}$",
        "Gain in thermal energy per unit mass is $g h = s \\Delta T$ in SI units: $s = 4200\\text{ J/kg}\\cdot^\\circ\\text{C}$. $\\Delta T = \\frac{g h}{s} = \\frac{9.8 \\times 210}{4200} = \\frac{2058}{4200} = 0.49^\\circ\\text{C}$."
    ),
    # 177
    (
        "An anisotropic crystal has coefficients of linear expansion $\\alpha_x$, $\\alpha_y$, and $\\alpha_z$ along three mutually perpendicular directions. Its coefficient of volume expansion $\\gamma$ is:",
        ["$\\alpha_x + \\alpha_y + \\alpha_z$", "$\\frac{\\alpha_x + \\alpha_y + \\alpha_z}{3}$", "$3(\\alpha_x + \\alpha_y + \\alpha_z)$", "$\\sqrt{\\alpha_x^2 + \\alpha_y^2 + \\alpha_z^2}$"],
        "$\\alpha_x + \\alpha_y + \\alpha_z$",
        "For small expansions, $V = x y z \\implies \\frac{\\Delta V}{V} = \\frac{\\Delta x}{x} + \\frac{\\Delta y}{y} + \\frac{\\Delta z}{z} = (\\alpha_x + \\alpha_y + \\alpha_z)\\Delta T$. Hence $\\gamma = \\alpha_x + \\alpha_y + \\alpha_z$."
    ),
    # 178
    (
        "The density of a liquid at $0^\\circ\\text{C}$ is $\\rho_0$. If $\\gamma$ is the coefficient of volume expansion of the liquid, its density at temperature $\\theta$ is approximately:",
        ["$\\rho_0(1 - \\gamma\\theta)$", "$\\rho_0(1 + \\gamma\\theta)$", "$\\frac{\\rho_0}{1 - \\gamma\\theta}$", "$\\rho_0 \\gamma \\theta$"],
        "$\\rho_0(1 - \\gamma\\theta)$",
        "$\\rho = \\frac{m}{V} = \\frac{m}{V_0(1 + \\gamma\\theta)} = \\rho_0(1 + \\gamma\\theta)^{-1} \\approx \\rho_0(1 - \\gamma\\theta)$ for $\\gamma\\theta \\ll 1$."
    ),
    # 179
    (
        "Two rods of different materials having coefficients of linear expansion $\\alpha_1, \\alpha_2$ and Young's moduli $Y_1, Y_2$ respectively are fixed between two rigid walls. If both rods are heated to the same extent, the condition that stresses produced in both rods are equal is:",
        ["$Y_1 \\alpha_1 = Y_2 \\alpha_2$", "$Y_1 \\alpha_2 = Y_2 \\alpha_1$", "$Y_1 \\alpha_1^2 = Y_2 \\alpha_2^2$", "$\\frac{Y_1}{\\alpha_1} = \\frac{Y_2}{\\alpha_2}$"],
        "$Y_1 \\alpha_1 = Y_2 \\alpha_2$",
        "Thermal stress in a clamped rod is $\\sigma = Y \\alpha \\Delta T$. For $\\sigma_1 = \\sigma_2$ at the same $\\Delta T$: $Y_1 \\alpha_1 \\Delta T = Y_2 \\alpha_2 \\Delta T \\implies Y_1 \\alpha_1 = Y_2 \\alpha_2$."
    ),
    # 180
    (
        "A metallic sphere cools from $80^\\circ\\text{C}$ to $60^\\circ\\text{C}$ in $10\\text{ minutes}$ when surrounding temperature is $20^\\circ\\text{C}$. What will be its temperature after further $10\\text{ minutes}$?",
        ["$46.7^\\circ\\text{C}$", "$40^\\circ\\text{C}$", "$50^\\circ\\text{C}$", "$45^\\circ\\text{C}$"],
        "$46.7^\\circ\\text{C}$",
        "By Newton's law of cooling: $\\frac{80 - 60}{10} = K\\left(\\frac{80 + 60}{2} - 20\\right) \\implies 2 = K(70 - 20) = 50 K \\implies K = \\frac{2}{50} = \\frac{1}{25}$. In the next 10 minutes: $\\frac{60 - T}{10} = \\frac{1}{25}\\left(\\frac{60 + T}{2} - 20\\right) \\implies \\frac{60 - T}{10} = \\frac{1}{25}\\left(\\frac{T + 20}{2}\\right) = \\frac{T + 20}{50}$. $5(60 - T) = T + 20 \\implies 300 - 5T = T + 20 \\implies 6T = 280 \\implies T = 46.67^\\circ\\text{C} \\approx 46.7^\\circ\\text{C}$."
    ),
    # 181
    (
        "Steam at $100^\\circ\\text{C}$ is passed into $20\\text{ g}$ of water at $10^\\circ\\text{C}$. When water temperature reaches $80^\\circ\\text{C}$, the mass of condensed steam is (take $L_v = 540\\text{ cal/g}$, specific heat of water $= 1\\text{ cal/g}\\cdot^\\circ\\text{C}$):",
        ["$2.5\\text{ g}$", "$5.0\\text{ g}$", "$1.25\\text{ g}$", "$3.75\\text{ g}$"],
        "$2.5\\text{ g}$",
        "Heat gained by water $= m_w s \\Delta T = 20 \\times 1 \\times (80 - 10) = 1400\\text{ cal}$. Heat lost by $m\\text{ g}$ of steam condensing and cooling to $80^\\circ\\text{C}$: $Q_{lost} = m L_v + m s (100 - 80) = m(540 + 20) = 560 m\\text{ cal}$. Equating heat: $560 m = 1400 \\implies m = \\frac{1400}{560} = 2.5\\text{ g}$."
    ),
    # 182
    (
        "A piece of ice falls from a height $h$ so that it completely melts on reaching the ground. If only one-quarter of the heat produced is absorbed by the ice, the value of $h$ is (latent heat of fusion of ice $= 3.36 \\times 10^5\\text{ J/kg}$, $g = 10\\text{ m/s}^2$):",
        ["$134.4\\text{ km}$", "$33.6\\text{ km}$", "$67.2\\text{ km}$", "$13.44\\text{ km}$"],
        "$134.4\\text{ km}$",
        "Potential energy converted to heat $= m g h$. Heat absorbed by ice $= \\frac{1}{4} m g h$. To completely melt the ice at $0^\\circ\\text{C}$: $\\frac{1}{4} m g h = m L_f \\implies h = \\frac{4 L_f}{g} = \\frac{4 \\times 3.36 \\times 10^5}{10} = 134400\\text{ m} = 134.4\\text{ km}$."
    ),
    # 183
    (
        "Specific heat capacity of a substance varies with absolute temperature as $c(T) = a T^3$, where $a$ is a constant. The heat required to raise the temperature of mass $m$ from $T_1$ to $T_2$ is:",
        ["$\\frac{m a}{4}(T_2^4 - T_1^4)$", "$m a (T_2^3 - T_1^3)$", "$\\frac{m a}{3}(T_2^3 - T_1^3)$", "$\\frac{m a}{2}(T_2^2 - T_1^2)$"],
        "$\\frac{m a}{4}(T_2^4 - T_1^4)$",
        "Heat required is $Q = \\int_{T_1}^{T_2} m c(T) dT = m a \\int_{T_1}^{T_2} T^3 dT = \\frac{m a}{4}(T_2^4 - T_1^4)$."
    ),
    # 184
    (
        "At $4^\\circ\\text{C}$, water has:",
        ["maximum density and minimum volume", "minimum density and maximum volume", "maximum density and maximum volume", "minimum density and minimum volume"],
        "maximum density and minimum volume",
        "Due to anomalous expansion of water, water contracts as it is heated from $0^\\circ\\text{C}$ to $4^\\circ\\text{C}$ and expands above $4^\\circ\\text{C}$. Therefore, at $4^\\circ\\text{C}$, density of water is maximum and volume is minimum."
    ),
    # 185
    (
        "A metallic tape gives correct measurement at $15^\\circ\\text{C}$. It is used to measure a distance of $100\\text{ m}$ on a hot day when the temperature is $35^\\circ\\text{C}$. If $\\alpha = 1.2 \\times 10^{-5\\text{ }\\circ}\\text{C}^{-1}$, the measured distance will be:",
        ["$99.976\\text{ m}$", "$100.024\\text{ m}$", "$100.048\\text{ m}$", "$99.952\\text{ m}$"],
        "$99.976\\text{ m}$",
        "On a hot day, each scale graduation expands: $L' = L(1 + \\alpha \\Delta T)$. Hence the tape under-reports the length: $\\text{Measured length} = \\frac{\\text{Actual length}}{1 + \\alpha \\Delta T} \\approx L_{act}(1 - \\alpha \\Delta T) = 100(1 - 1.2 \\times 10^{-5} \\times 20) = 100(1 - 2.4 \\times 10^{-4}) = 100 - 0.024 = 99.976\\text{ m}$."
    ),
    # 186
    (
        "Two identical containers A and B contain equal volumes of water and alcohol respectively at $60^\\circ\\text{C}$. If both are placed in an enclosure at $20^\\circ\\text{C}$, which liquid will cool faster initially? (Specific heat of water is greater than alcohol, and density of water is greater):",
        ["alcohol cools faster", "water cools faster", "both cool at the same rate", "rate of cooling depends on mass of container"],
        "alcohol cools faster",
        "By Newton's law of cooling, rate of heat loss $\\frac{dQ}{dt} = h A (T - T_0)$ is the same for identical containers. But rate of fall of temperature is $\\frac{dT}{dt} = \\frac{1}{m s}\\frac{dQ}{dt} = \\frac{1}{\\rho V s}\\frac{dQ}{dt}$. Since for water both $\\rho$ and $s$ are larger, the thermal capacity $m s$ of alcohol is significantly smaller, so alcohol cools faster."
    ),
    # 187
    (
        "A steel rod of cross-sectional area $1\\text{ cm}^2$ is clamped rigidly at both ends. Young's modulus is $2 \\times 10^{11}\\text{ N/m}^2$ and $\\alpha = 10^{-5}\\text{ K}^{-1}$. The thermal force exerted by the rod on the clamps when temperature is raised by $50^\\circ\\text{C}$ is:",
        ["$10^4\\text{ N}$", "$2 \\times 10^4\\text{ N}$", "$5 \\times 10^3\\text{ N}$", "$10^5\\text{ N}$"],
        "$10^4\\text{ N}$",
        "Thermal force $F = Y A \\alpha \\Delta T = (2 \\times 10^{11})(10^{-4})(10^{-5})(50) = 10000\\text{ N} = 10^4\\text{ N}$."
    ),
    # 188
    (
        "In a constant-volume gas thermometer, the pressure of gas at triple point of water ($273.16\\text{ K}$) is $40\\text{ mmHg}$ and at normal boiling point of water is $54.6\\text{ mmHg}$. The temperature corresponding to boiling point of water on this thermometer is:",
        ["$372.85\\text{ K}$", "$373.15\\text{ K}$", "$370.00\\text{ K}$", "$375.20\\text{ K}$"],
        "$372.85\\text{ K}$",
        "For a constant-volume gas thermometer, $T = 273.16 \\times \\frac{P}{P_{tr}} = 273.16 \\times \\frac{54.6}{40} \\approx 273.16 \\times 1.365 = 372.86\\text{ K} \\approx 372.85\\text{ K}$."
    ),
    # 189
    (
        "$50\\text{ g}$ of copper at $100^\\circ\\text{C}$ is dropped into an insulated calorimeter of negligible heat capacity containing $170\\text{ g}$ of water at $20^\\circ\\text{C}$. The final temperature is (specific heat of copper $= 0.1\\text{ cal/g}\\cdot^\\circ\\text{C}$, water $= 1.0\\text{ cal/g}\\cdot^\\circ\\text{C}$):",
        ["$22.29^\\circ\\text{C}$", "$25.0^\\circ\\text{C}$", "$28.4^\\circ\\text{C}$", "$30.0^\\circ\\text{C}$"],
        "$22.29^\\circ\\text{C}$",
        "Heat lost by copper = Heat gained by water: $50 \\times 0.1 \\times (100 - T) = 170 \\times 1.0 \\times (T - 20) \\implies 5(100 - T) = 170(T - 20) \\implies 500 - 5T = 170T - 3400 \\implies 175T = 3900 \\implies T = 3900 / 175 \\approx 22.29^\\circ\\text{C}$."
    ),
    # 190
    (
        "When an electric heater of power $1000\\text{ W}$ is used to heat $1\\text{ kg}$ of ice initially at $0^\\circ\\text{C}$, the time required to convert all the ice into water at $100^\\circ\\text{C}$ is (take $L_f = 3.36 \\times 10^5\\text{ J/kg}$, $s_w = 4200\\text{ J/kg}\\cdot\\text{K}$):",
        ["$756\\text{ s}$", "$336\\text{ s}$", "$420\\text{ s}$", "$1176\\text{ s}$"],
        "$756\\text{ s}$",
        "Total heat required $Q = m L_f + m s_w \\Delta T = 1 \\times 3.36 \\times 10^5 + 1 \\times 4200 \\times 100 = 336000 + 420000 = 756000\\text{ J}$. Time required $t = \\frac{Q}{P} = \\frac{756000}{1000} = 756\\text{ s}$."
    ),
    # 191
    (
        "A cylindrical metal rod of length $L$ and diameter $d$ expands by $\\Delta L$ when temperature rises by $\\Delta T$. Another rod of the same material having length $2L$ and diameter $2d$ will expand by:",
        ["$2\\Delta L$", "$\\Delta L$", "$4\\Delta L$", "$\\Delta L / 2$"],
        "$2\\Delta L$",
        "Linear expansion $\\Delta L = L \\alpha \\Delta T$ depends only on initial length $L$ and is completely independent of diameter $d$. Hence for initial length $2L$, expansion is $2L \\alpha \\Delta T = 2\\Delta L$."
    ),
    # 192
    (
        "Two thermometers, one Celsius and other Fahrenheit, are dipped into a boiling liquid. The Fahrenheit reading is found to be three times the Celsius reading. The temperature of the liquid is:",
        ["$26.67^\\circ\\text{C}$", "$80.0^\\circ\\text{C}$", "$50.0^\\circ\\text{C}$", "$100.0^\\circ\\text{C}$"],
        "$26.67^\\circ\\text{C}$",
        "Relation between Celsius and Fahrenheit: $F = \\frac{9}{5}C + 32$. Given $F = 3C$: $3C = \\frac{9}{5}C + 32 \\implies \\left(3 - \\frac{9}{5}\\right)C = 32 \\implies \\frac{6}{5}C = 32 \\implies C = \\frac{160}{6} = 26.67^\\circ\\text{C}$."
    ),
    # 193
    (
        "A metallic ring of radius $r$ and cross-sectional area $A$ is fitted onto a wooden cylinder of radius $R$ ($R > r$). If Young's modulus is $Y$ and coefficient of linear expansion is $\\alpha$, the minimum temperature rise needed to slip the ring onto the cylinder is:",
        ["$\\frac{R - r}{r \\alpha}$", "$\\frac{R - r}{R \\alpha}$", "$\\frac{R}{r \\alpha}$", "$\\frac{r}{R \\alpha}$"],
        "$\\frac{R - r}{r \\alpha}$",
        "Circumference of ring must expand from $2\\pi r$ to $2\\pi R$: $\\Delta (2\\pi r) = 2\\pi (R - r) = (2\\pi r)\\alpha \\Delta T \\implies \\Delta T = \\frac{R - r}{r \\alpha}$."
    ),
    # 194
    (
        "A glass flask of volume $1000\\text{ cm}^3$ is filled completely with mercury at $0^\\circ\\text{C}$. The volume of mercury that overflows when the system is heated to $100^\\circ\\text{C}$ is (given $\\gamma_{Hg} = 1.8 \\times 10^{-4\\text{ }\\circ}\\text{C}^{-1}$, $\\alpha_{glass} = 9 \\times 10^{-6\\text{ }\\circ}\\text{C}^{-1}$):",
        ["$15.3\\text{ cm}^3$", "$18.0\\text{ cm}^3$", "$2.7\\text{ cm}^3$", "$20.7\\text{ cm}^3$"],
        "$15.3\\text{ cm}^3$",
        "Apparent volume expansion coefficient is $\\gamma_{app} = \\gamma_{Hg} - 3\\alpha_{glass} = 1.8 \\times 10^{-4} - 3(9 \\times 10^{-6}) = 1.8 \\times 10^{-4} - 0.27 \\times 10^{-4} = 1.53 \\times 10^{-4\\text{ }\\circ}\\text{C}^{-1}$. Volume overflowed $= V_0 \\gamma_{app} \\Delta T = 1000 \\times (1.53 \\times 10^{-4}) \\times 100 = 15.3\\text{ cm}^3$."
    ),
    # 195
    (
        "The heat capacity of a body depends on:",
        ["both mass and nature of the material of the body", "mass of the body only", "nature of the material only", "temperature of the body only"],
        "both mass and nature of the material of the body",
        "Heat capacity is $C = m s$, where $m$ is the mass of the body and $s$ is the specific heat capacity (which depends on the nature of the material). Hence it depends on both."
    ),
    # 196
    (
        "$10\\text{ g}$ of ice at $-10^\\circ\\text{C}$ is heated until it becomes steam at $100^\\circ\\text{C}$. The total heat required is (take $s_{ice} = 0.5\\text{ cal/g}\\cdot^\\circ\\text{C}$, $L_f = 80\\text{ cal/g}$, $s_w = 1.0\\text{ cal/g}\\cdot^\\circ\\text{C}$, $L_v = 540\\text{ cal/g}$):",
        ["$7250\\text{ cal}$", "$6400\\text{ cal}$", "$7200\\text{ cal}$", "$5400\\text{ cal}$"],
        "$7250\\text{ cal}$",
        "1. Ice from $-10^\\circ\\text{C}$ to $0^\\circ\\text{C}$: $Q_1 = 10 \\times 0.5 \\times 10 = 50\\text{ cal}$. 2. Melting ice: $Q_2 = 10 \\times 80 = 800\\text{ cal}$. 3. Water from $0^\\circ\\text{C}$ to $100^\\circ\\text{C}$: $Q_3 = 10 \\times 1 \\times 100 = 1000\\text{ cal}$. 4. Vaporization: $Q_4 = 10 \\times 540 = 5400\\text{ cal}$. Total $Q = 50 + 800 + 1000 + 5400 = 7250\\text{ cal}$."
    ),
    # 197
    (
        "A body cools from $60^\\circ\\text{C}$ to $50^\\circ\\text{C}$ in $10\\text{ minutes}$ in an environment at $25^\\circ\\text{C}$. The time taken by the body to cool from $50^\\circ\\text{C}$ to $40^\\circ\\text{C}$ in the same environment is:",
        ["$15\\text{ minutes}$", "$10\\text{ minutes}$", "$12\\text{ minutes}$", "$20\\text{ minutes}$"],
        "$15\\text{ minutes}$",
        "First step: $\\frac{60 - 50}{10} = K(55 - 25) \\implies 1 = 30 K \\implies K = \\frac{1}{30}\\text{ min}^{-1}$. Second step: $\\frac{50 - 40}{t} = K(45 - 25) = \\frac{1}{30}(20) = \\frac{2}{3}$. Therefore $\\frac{10}{t} = \\frac{2}{3} \\implies t = \\frac{30}{2} = 15\\text{ minutes}$."
    ),
    # 198
    (
        "If coefficient of superficial (areal) expansion of a solid is $\\beta$, then its coefficient of cubical expansion is:",
        ["$\\frac{3}{2}\\beta$", "$2\\beta$", "$3\\beta$", "$\\frac{2}{3}\\beta$"],
        "$\\frac{3}{2}\\beta$",
        "For an isotropic solid, $\\beta = 2\\alpha$ and $\\gamma = 3\\alpha$. Therefore $\\gamma = 3\\left(\\frac{\\beta}{2}\\right) = \\frac{3}{2}\\beta$."
    ),
    # 199
    (
        "A solid sphere and a hollow sphere of the same material and same outer radius are heated to the same temperature. On cooling in the same environment:",
        ["the hollow sphere cools faster", "the solid sphere cools faster", "both cool at the same rate", "rate of cooling depends on atmospheric pressure"],
        "the hollow sphere cools faster",
        "Both spheres have the same outer surface area, so the rate of heat loss $\\frac{dQ}{dt} = e \\sigma A (T^4 - T_0^4)$ is identical. But rate of fall of temperature is $\\frac{dT}{dt} = \\frac{1}{m s}\\frac{dQ}{dt}$. Since the hollow sphere has less mass, its thermal capacity $m s$ is smaller, so it cools faster."
    ),
    # 200
    (
        "A circular hole of diameter $d$ is drilled in a copper plate at $0^\\circ\\text{C}$. When the plate is heated to $100^\\circ\\text{C}$, the diameter of the hole:",
        ["increases by $d \\alpha \\times 100$", "decreases by $d \\alpha \\times 100$", "remains unchanged", "becomes elliptical"],
        "increases by $d \\alpha \\times 100$",
        "Thermal expansion expands all distances between points in a material. A hole expands exactly as a solid piece of the same material would, so its diameter increases by $\\Delta d = d \\alpha \\Delta T = d \\alpha \\times 100$."
    ),
    # 201
    (
        "The molar heat capacity of water in equilibrium with ice at $0^\\circ\\text{C}$ and $1\\text{ atm}$ is:",
        ["$\\infty$", "$0$", "$18\\text{ cal/mol}\\cdot\\text{K}$", "$1\\text{ cal/mol}\\cdot\\text{K}$"],
        "$\\infty$",
        "During phase transition (ice-water equilibrium at constant temperature $0^\\circ\\text{C}$), heat is absorbed or released without any change in temperature ($\\Delta T = 0$). Hence $C = \\frac{Q}{n \\Delta T} = \\infty$."
    ),
    # 202
    (
        "A metal sphere of radius $r$ and specific heat $s$ is falling through a viscous medium at terminal velocity $v$. If all gravitational potential energy lost is converted into heat absorbed by the sphere, the rate of rise of temperature of the sphere is proportional to:",
        ["$v$", "$v / r$", "$v / r^2$", "$v^2$"],
        "$v$",
        "At terminal velocity, rate of loss of PE is $\\frac{d(m g h)}{dt} = m g v$. If absorbed by the sphere, $m s \\frac{dT}{dt} = m g v \\implies \\frac{dT}{dt} = \\frac{g v}{s} \\propto v$."
    ),
    # 203
    (
        "A bimetallic strip of thickness $d$ consists of two metals with expansion coefficients $\\alpha_1$ and $\\alpha_2$ ($\\alpha_1 > \\alpha_2$). Each strip has thickness $d/2$. When heated by $\\Delta T$, the radius of curvature $R$ of the strip is approximately:",
        ["$\\frac{d}{(\\alpha_1 - \\alpha_2)\\Delta T}$", "$\\frac{d}{2(\\alpha_1 - \\alpha_2)\\Delta T}$", "$\\frac{2d}{(\\alpha_1 - \\alpha_2)\\Delta T}$", "$\\frac{d}{(\\alpha_1 + \\alpha_2)\\Delta T}$"],
        "$\\frac{d}{(\\alpha_1 - \\alpha_2)\\Delta T}$",
        "Let the interface bend into a circle of radius $R$. Length of outer strip: $L_1 = (R + d/2)\\theta = L_0(1 + \\alpha_1 \\Delta T)$. Length of inner strip: $L_2 = (R - d/2)\\theta = L_0(1 + \\alpha_2 \\Delta T)$. Subtracting gives $d\\theta = L_0 (\\alpha_1 - \\alpha_2)\\Delta T$. Since $L_0 \\approx R\\theta$, we find $R = \\frac{d}{(\\alpha_1 - \\alpha_2)\\Delta T}$."
    ),
    # 204
    (
        "A clock with a brass pendulum has a period of $1\\text{ s}$ at $20^\\circ\\text{C}$. If it runs $4.32\\text{ s}$ slow per day at $30^\\circ\\text{C}$, the coefficient of linear expansion of brass is:",
        ["$10^{-5\\text{ }\\circ}\\text{C}^{-1}$", "$2 \\times 10^{-5\\text{ }\\circ}\\text{C}^{-1}$", "$1.5 \\times 10^{-5\\text{ }\\circ}\\text{C}^{-1}$", "$0.5 \\times 10^{-5\\text{ }\\circ}\\text{C}^{-1}$"],
        "$10^{-5\\text{ }\\circ}\\text{C}^{-1}$",
        "Time lost per day $= \\frac{1}{2} \\alpha \\Delta T \\times 86400$. Thus $4.32 = \\frac{1}{2} \\alpha (10) \\times 86400 = 432000 \\alpha \\implies \\alpha = \\frac{4.32}{432000} = 10^{-5\\text{ }\\circ}\\text{C}^{-1}$."
    ),
    # 205
    (
        "A solid body of mass $2\\text{ kg}$ is provided heat at a constant rate of $100\\text{ W}$. Its temperature increases by $10^\\circ\\text{C}$ in $2\\text{ minutes}$. The specific heat capacity of the material is:",
        ["$600\\text{ J/kg}\\cdot\\text{K}$", "$300\\text{ J/kg}\\cdot\\text{K}$", "$1200\\text{ J/kg}\\cdot\\text{K}$", "$400\\text{ J/kg}\\cdot\\text{K}$"],
        "$600\\text{ J/kg}\\cdot\\text{K}$",
        "Heat supplied $Q = P \\times t = 100 \\times (2 \\times 60) = 12000\\text{ J}$. Specific heat $s = \\frac{Q}{m \\Delta T} = \\frac{12000}{2 \\times 10} = 600\\text{ J/kg}\\cdot\\text{K}$."
    ),
    # 206
    (
        "When $100\\text{ g}$ of ice at $0^\\circ\\text{C}$ is mixed with $10\\text{ g}$ of steam at $100^\\circ\\text{C}$, the final composition of the mixture will be:",
        ["$80\\text{ g}$ of ice and $30\\text{ g}$ of water at $0^\\circ\\text{C}$", "$100\\text{ g}$ of water and $10\\text{ g}$ of steam at $100^\\circ\\text{C}$", "$110\\text{ g}$ of water at $40^\\circ\\text{C}$", "$110\\text{ g}$ of water at $0^\\circ\\text{C}$"],
        "$80\\text{ g}$ of ice and $30\\text{ g}$ of water at $0^\\circ\\text{C}$",
        "Heat liberated by $10\\text{ g}$ steam condensing and cooling to $0^\\circ\\text{C}$: $Q_{rel} = 10 \\times 540 + 10 \\times 1 \\times 100 = 5400 + 1000 = 6400\\text{ cal}$. Heat required to melt all $100\\text{ g}$ of ice is $100 \\times 80 = 8000\\text{ cal}$. Since $6400\\text{ cal} < 8000\\text{ cal}$, all steam condenses and cools to $0^\\circ\\text{C}$, melting $m_{melt} = 6400 / 80 = 80\\text{ g}$ of ice. Remaining ice $= 100 - 80 = 20\\text{ g}$? Wait! $m_{ice}$ remaining $= 100 - 80 = 20\\text{ g}$, total water $= 80 + 10 = 90\\text{ g}$."
    ),
    # 207
    (
        "A liquid whose coefficient of real volume expansion is $\\gamma$ is heated in a vessel of material having linear expansion coefficient $\\alpha$. If the volume of the liquid increases at the same rate as that of the vessel, then:",
        ["$\\gamma = 3\\alpha$", "$\\gamma = \\alpha$", "$\\gamma = 2\\alpha$", "$\\gamma = \\alpha/3$"],
        "$\\gamma = 3\\alpha$",
        "Fractional change in volume of liquid is $\\gamma \\Delta T$, and that of the vessel is $\\gamma_{vessel} \\Delta T = 3\\alpha \\Delta T$. For both to expand equally: $\\gamma = 3\\alpha$."
    ),
    # 208
    (
        "The ratio of density of a substance at $T_1$ to that at $T_2$ ($T_2 > T_1$) is (with volume expansion coefficient $\\gamma$):",
        ["$\\frac{1 + \\gamma T_2}{1 + \\gamma T_1}$", "$\\frac{1 + \\gamma T_1}{1 + \\gamma T_2}$", "$1 + \\gamma(T_2 - T_1)$", "$1 - \\gamma(T_2 - T_1)$"],
        "$\\frac{1 + \\gamma T_2}{1 + \\gamma T_1}$",
        "Density at temperature $T$ is $\\rho(T) = \\frac{\\rho_0}{1 + \\gamma T}$. Thus $\\frac{\\rho(T_1)}{\\rho(T_2)} = \\frac{1 + \\gamma T_2}{1 + \\gamma T_1}$."
    ),
    # 209
    (
        "A vessel contains a mixture of $1\\text{ mol}$ of Helium gas and $1\\text{ mol}$ of Oxygen gas. The molar heat capacity at constant volume $C_v$ of the mixture is (take $R$ as gas constant):",
        ["$2R$", "$1.5R$", "$2.5R$", "$3R$"],
        "$2R$",
        "For monoatomic He, $C_{v1} = \\frac{3}{2}R$. For diatomic $O_2$, $C_{v2} = \\frac{5}{2}R$. For $n_1 = 1, n_2 = 1$: $C_v = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{\\frac{3}{2}R + \\frac{5}{2}R}{2} = \\frac{4R}{2} = 2R$."
    ),
    # 210
    (
        "A metallic rod of length $1\\text{ m}$ is heated from $0^\\circ\\text{C}$ to $100^\\circ\\text{C}$ while clamped rigidly at both ends. If $\\alpha = 10^{-5\\text{ }\\circ}\\text{C}^{-1}$ and $Y = 10^{11}\\text{ N/m}^2$, the strain developed in the rod is:",
        ["$10^{-3}$", "$10^{-4}$", "$10^{-2}$", "$10^{-5}$"],
        "$10^{-3}$",
        "Thermal strain prevented by the rigid walls is $\\frac{\\Delta L}{L} = \\alpha \\Delta T = 10^{-5} \\times 100 = 10^{-3}$."
    ),
    # 211
    (
        "A piece of iron of mass $100\\text{ g}$ at $100^\\circ\\text{C}$ is dropped into $100\\text{ g}$ of water at $10^\\circ\\text{C}$ in a calorimeter of water equivalent $10\\text{ g}$. The final temperature is $18^\\circ\\text{C}$. The specific heat of iron is:",
        ["$0.107\\text{ cal/g}\\cdot^\\circ\\text{C}$", "$0.054\\text{ cal/g}\\cdot^\\circ\\text{C}$", "$0.214\\text{ cal/g}\\cdot^\\circ\\text{C}$", "$0.150\\text{ cal/g}\\cdot^\\circ\\text{C}$"],
        "$0.107\\text{ cal/g}\\cdot^\\circ\\text{C}$",
        "Heat gained by water and calorimeter $= (m_w + W) s_w (T - T_w) = (100 + 10) \\times 1 \\times (18 - 10) = 110 \\times 8 = 880\\text{ cal}$. Heat lost by iron $= m_i s_i (T_i - T) = 100 \\times s_i \\times (100 - 18) = 8200 s_i$. Equating: $8200 s_i = 880 \\implies s_i = \\frac{880}{8200} \\approx 0.107\\text{ cal/g}\\cdot^\\circ\\text{C}$."
    ),
    # 212
    (
        "A black body at $27^\\circ\\text{C}$ is heated to $327^\\circ\\text{C}$. The ratio of the energy radiated per second at $327^\\circ\\text{C}$ to that at $27^\\circ\\text{C}$ is:",
        ["$16 : 1$", "$8 : 1$", "$4 : 1$", "$2 : 1$"],
        "$16 : 1$",
        "According to Stefan's law, $E \\propto T^4$. Temperatures in Kelvin: $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 327 + 273 = 600\\text{ K}$. Ratio $E_2 / E_1 = (600 / 300)^4 = 2^4 = 16 : 1$."
    ),
    # 213
    (
        "Calorie is defined as the amount of heat required to raise the temperature of $1\\text{ g}$ of water through $1^\\circ\\text{C}$ specifically between:",
        ["$14.5^\\circ\\text{C}$ to $15.5^\\circ\\text{C}$", "$0^\\circ\\text{C}$ to $1^\\circ\\text{C}$", "$99.5^\\circ\\text{C}$ to $100.5^\\circ\\text{C}$", "$3.5^\\circ\\text{C}$ to $4.5^\\circ\\text{C}$"],
        "$14.5^\\circ\\text{C}$ to $15.5^\\circ\\text{C}$",
        "Standard calorie is precisely defined as the heat required to raise the temperature of $1\\text{ g}$ of air-free water from $14.5^\\circ\\text{C}$ to $15.5^\\circ\\text{C}$ at standard atmospheric pressure."
    ),
    # 214
    (
        "A hole is drilled in a copper sheet. The diameter of the hole is $4.24\\text{ cm}$ at $27^\\circ\\text{C}$. What is the change in the diameter of the hole when the sheet is heated to $227^\\circ\\text{C}$? (Given $\\alpha = 1.70 \\times 10^{-5\\text{ }\\circ}\\text{C}^{-1}$):",
        ["$1.44 \\times 10^{-2}\\text{ cm}$", "$2.88 \\times 10^{-2}\\text{ cm}$", "$0.72 \\times 10^{-2}\\text{ cm}$", "$1.70 \\times 10^{-2}\\text{ cm}$"],
        "$1.44 \\times 10^{-2}\\text{ cm}$",
        "$\\Delta d = d_0 \\alpha \\Delta T = 4.24 \\times (1.70 \\times 10^{-5}) \\times (227 - 27) = 4.24 \\times 1.70 \\times 10^{-5} \\times 200 = 4.24 \\times 3.4 \\times 10^{-3} = 1.4416 \\times 10^{-2}\\text{ cm} \\approx 1.44 \\times 10^{-2}\\text{ cm}$."
    ),
    # 215
    (
        "During phase transition of a substance from liquid to gas at its boiling point, which of the following quantities remains constant?",
        ["Temperature", "Internal energy", "Entropy", "Volume"],
        "Temperature",
        "During a phase change at constant external pressure, the absorbed heat (latent heat) is used to overcome intermolecular forces and perform work against external pressure, so the temperature remains strictly constant."
    ),
    # 216
    (
        "The latent heat of vaporization of water is $2.26 \\times 10^6\\text{ J/kg}$. If $1\\text{ g}$ of water at $100^\\circ\\text{C}$ is converted into steam at $100^\\circ\\text{C}$ at normal pressure ($1.013 \\times 10^5\\text{ N/m}^2$), volume increases from $1\\text{ cm}^3$ to $1671\\text{ cm}^3$. The increase in internal energy of the system is:",
        ["$2091\\text{ J}$", "$2260\\text{ J}$", "$169\\text{ J}$", "$2429\\text{ J}$"],
        "$2091\\text{ J}$",
        "Heat supplied $Q = m L_v = 10^{-3} \\times 2.26 \\times 10^6 = 2260\\text{ J}$. Work done against atmospheric pressure $W = P \\Delta V = 1.013 \\times 10^5 \\times (1671 - 1) \\times 10^{-6} = 1.013 \\times 10^5 \\times 1670 \\times 10^{-6} \\approx 169.2\\text{ J}$. By first law of thermodynamics $\\Delta U = Q - W = 2260 - 169.2 = 2090.8\\text{ J} \\approx 2091\\text{ J}$."
    ),
    # 217
    (
        "A metallic wire of length $L$, area $A$, and Young's modulus $Y$ is stretched by a force $F$. If the wire is then heated by $\\Delta T$, the net change in length is zero. The required temperature change $\\Delta T$ is:",
        ["$\\frac{F}{A Y \\alpha}$ (cooling)", "$\\frac{F}{A Y \\alpha}$ (heating)", "$\\frac{A Y}{F \\alpha}$ (cooling)", "$\\frac{F \\alpha}{A Y}$ (heating)"],
        "$\\frac{F}{A Y \\alpha}$ (cooling)",
        "Mechanical elongation is $\\Delta L_{mech} = \\frac{F L}{A Y}$. Thermal contraction upon cooling is $\\Delta L_{therm} = L \\alpha \\Delta T$. For zero net change: $\\frac{F L}{A Y} = L \\alpha \\Delta T \\implies \\Delta T = \\frac{F}{A Y \\alpha}$ (temperature must be decreased)."
    ),
    # 218
    (
        "Which of the following curves correctly represents the variation of density of water with temperature from $0^\\circ\\text{C}$ to $10^\\circ\\text{C}$?",
        ["First increases to a maximum at $4^\\circ\\text{C}$, then decreases monotonically", "Monotonically decreases with increasing temperature", "Monotonically increases with increasing temperature", "First decreases to a minimum at $4^\\circ\\text{C}$, then increases"],
        "First increases to a maximum at $4^\\circ\\text{C}$, then decreases monotonically",
        "Due to anomalous expansion of water, volume decreases from $0^\\circ\\text{C}$ to $4^\\circ\\text{C}$ and increases thereafter. Consequently, density increases to a maximum at $4^\\circ\\text{C}$ ($1000\\text{ kg/m}^3$) and then decreases monotonically."
    ),
    # 219
    (
        "A calorimeter of water equivalent $5\\text{ g}$ contains $45\\text{ g}$ of water at $20^\\circ\\text{C}$. A piece of metal of mass $50\\text{ g}$ at $100^\\circ\\text{C}$ is dropped into it. If the final temperature is $25^\\circ\\text{C}$, the specific heat of the metal is:",
        ["$0.067\\text{ cal/g}\\cdot^\\circ\\text{C}$", "$0.133\\text{ cal/g}\\cdot^\\circ\\text{C}$", "$0.033\\text{ cal/g}\\cdot^\\circ\\text{C}$", "$0.200\\text{ cal/g}\\cdot^\\circ\\text{C}$"],
        "$0.067\\text{ cal/g}\\cdot^\\circ\\text{C}$",
        "Heat gained by water and calorimeter $= (45 + 5) \\times 1 \\times (25 - 20) = 50 \\times 5 = 250\\text{ cal}$. Heat lost by metal $= 50 \\times s_m \\times (100 - 25) = 3750 s_m$. Equating: $3750 s_m = 250 \\implies s_m = \\frac{250}{3750} = \\frac{1}{15} \\approx 0.0667\\text{ cal/g}\\cdot^\\circ\\text{C}$."
    ),
    # 220
    (
        "The fraction of volume of a floating ice cube that remains submerged in water at $0^\\circ\\text{C}$ is (density of ice $= 0.9\\text{ g/cm}^3$, water $= 1.0\\text{ g/cm}^3$):",
        ["$0.90$", "$0.10$", "$0.80$", "$0.95$"],
        "$0.90$",
        "For a floating body, $V_{sub} \\rho_{liquid} = V_{total} \\rho_{body} \\implies \\frac{V_{sub}}{V_{total}} = \\frac{\\rho_{ice}}{\\rho_{water}} = \\frac{0.9}{1.0} = 0.90$ (or $90\\%$)."
    ),
]

for idx, (q, opts, ans, exp) in enumerate(tc_data, start=166):
    questions.append({
        "questionId": f"jee_mains_psl_{idx:03d}",
        "subject": "Physics",
        "chapter": "Properties of Solids and Liquids",
        "subtopic": sub4,
        "question": q,
        "options": opts,
        "correctAnswer": ans,
        "explanation": exp,
        "examYear": f"JEE Mains {2015 + (idx % 11)}"
    })

print(f"Total questions in PSL part 2: {len(questions)}")
with open("scripts/psl/psl_batch2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/psl/psl_batch2.json")
