import json
import os

# Batch 2 for Current Electricity:
# 3. Resistivity (45 MCQs)
# 4. Electrical energy and power (45 MCQs)
# Total: 90 MCQs

part2_questions = [
    # =========================================================================
    # TOPIC 3: Resistivity (45 MCQs: ce_res_01 to ce_res_45)
    # =========================================================================
    {
        "id": "ce_res_01",
        "subTopic": "Resistivity",
        "question": "The resistivity of a metallic wire depends on:",
        "options": [
            "Its length",
            "Its cross-sectional area",
            "The nature of the material and temperature",
            "Its shape and size"
        ],
        "correctOptionIndex": 2,
        "explanation": "Resistivity is an intrinsic material property that depends only on the nature of the material (electron density $n$) and temperature (relaxation time $\\tau$), not on the geometric dimensions (length, area, or shape) of the conductor."
    },
    {
        "id": "ce_res_02",
        "subTopic": "Resistivity",
        "question": "The resistance of a wire is $R\\,\\Omega$. If it is melted and recast into a wire of $n$ times its original length, its new resistance will be:",
        "options": [
            "$n R$",
            "$n^2 R$",
            "$R / n$",
            "$R / n^2$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Since mass and volume remain constant during melting and recasting, $V = A L = A' L' \\implies A' = A/n$. New resistance is $R' = \\rho \\frac{L'}{A'} = \\rho \\frac{n L}{A / n} = n^2 \\rho \\frac{L}{A} = n^2 R$."
    },
    {
        "id": "ce_res_03",
        "subTopic": "Resistivity",
        "question": "A wire of resistance $4\\,\\Omega$ is stretched uniformly to twice its original length. The new resistance of the wire is:",
        "options": [
            "$8\\,\\Omega$",
            "$16\\,\\Omega$",
            "$2\\,\\Omega$",
            "$4\\,\\Omega$"
        ],
        "correctOptionIndex": 1,
        "explanation": "When stretched to double length ($n = 2$), $R' = n^2 R = 2^2 \\times 4\\,\\Omega = 16\\,\\Omega$."
    },
    {
        "id": "ce_res_04",
        "subTopic": "Resistivity",
        "question": "The resistance of a platinum wire is $5.0\\,\\Omega$ at $0^\\circ\\text{C}$ and $5.5\\,\\Omega$ at $100^\\circ\\text{C}$. The temperature coefficient of resistance of platinum is:",
        "options": [
            "$1.0 \\times 10^{-3\\,}\\text{C}^{-1}$",
            "$5.0 \\times 10^{-3\\,}\\text{C}^{-1}$",
            "$2.5 \\times 10^{-3\\,}\\text{C}^{-1}$",
            "$0.5 \\times 10^{-3\\,}\\text{C}^{-1}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$R_t = R_0(1 + \\alpha t) \\implies \\alpha = \\frac{R_t - R_0}{R_0 \\Delta t} = \\frac{5.5 - 5.0}{5.0 \\times 100} = \\frac{0.5}{500} = 1.0 \\times 10^{-3\\,}\\text{C}^{-1}$."
    },
    {
        "id": "ce_res_05",
        "subTopic": "Resistivity",
        "question": "A carbon resistor and an iron wire are connected in series. The condition for the equivalent resistance to be independent of temperature is ($\\alpha_1$ is temperature coefficient of carbon and $\\alpha_2$ is of iron):",
        "options": [
            "$R_1 \\alpha_1 + R_2 \\alpha_2 = 0$",
            "$R_1 \\alpha_2 + R_2 \\alpha_1 = 0$",
            "$\\frac{R_1}{\\alpha_1} + \\frac{R_2}{\\alpha_2} = 0$",
            "$R_1 \\alpha_1 = R_2 \\alpha_2$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In series, $R_{eq}(T) = R_1(1 + \\alpha_1 \\Delta T) + R_2(1 + \\alpha_2 \\Delta T) = (R_1 + R_2) + (R_1 \\alpha_1 + R_2 \\alpha_2) \\Delta T$. For $R_{eq}$ to be independent of temperature, the coefficient of $\\Delta T$ must vanish: $R_1 \\alpha_1 + R_2 \\alpha_2 = 0$. (Since carbon has negative $\\alpha$ and iron has positive $\\alpha$, this condition can be satisfied)."
    },
    {
        "id": "ce_res_06",
        "subTopic": "Resistivity",
        "question": "Standard resistance coils are made of alloys like manganin and constantan primarily because they have:",
        "options": [
            "Low resistivity and high temperature coefficient",
            "High resistivity and nearly zero temperature coefficient of resistance",
            "Zero resistivity at room temperature",
            "Low melting point and high ductility"
        ],
        "correctOptionIndex": 1,
        "explanation": "Manganin and constantan are chosen for standard resistors because of their high resistivity and almost negligible temperature coefficient of resistance ($\\alpha \\approx 0$), so their resistance does not change noticeably with temperature variations."
    },
    {
        "id": "ce_res_07",
        "subTopic": "Resistivity",
        "question": "A metallic wire has a resistance of $10\\,\\Omega$ at $20^\\circ\\text{C}$ and $15\\,\\Omega$ at $120^\\circ\\text{C}$. The temperature coefficient of resistance is:",
        "options": [
            "$0.005\\,^\\circ\\text{C}^{-1}$",
            "$0.004\\,^\\circ\\text{C}^{-1}$",
            "$0.0025\\,^\\circ\\text{C}^{-1}$",
            "$0.001\\,^\\circ\\text{C}^{-1}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$\\alpha = \\frac{R_2 - R_1}{R_1(T_2 - T_1)} = \\frac{15 - 10}{10(120 - 20)} = \\frac{5}{10(100)} = \\frac{5}{1000} = 0.005\\,^\\circ\\text{C}^{-1}$."
    },
    {
        "id": "ce_res_08",
        "subTopic": "Resistivity",
        "question": "A wire of length $L$ and resistance $R$ is stretched so that its radius is reduced to half its original value. The new resistance of the wire is:",
        "options": [
            "$4R$",
            "$8R$",
            "$16R$",
            "$2R$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Since volume is conserved, $V = \\pi r^2 L = \\pi (r/2)^2 L' \\implies L' = 4L$. The new resistance is $R' = \\rho \\frac{L'}{\\pi (r/2)^2} = \\rho \\frac{4L}{\\pi r^2 / 4} = 16 \\rho \\frac{L}{\\pi r^2} = 16R$."
    },
    {
        "id": "ce_res_09",
        "subTopic": "Resistivity",
        "question": "A resistor of frustum of a right circular cone has length $L$ and circular end radii $a$ and $b$ ($a < b$). The resistance between the two flat ends is:",
        "options": [
            "$\\frac{\\rho L}{\\pi a b}$",
            "$\\frac{\\rho L}{\\pi (a + b)^2}$",
            "$\\frac{\\rho L}{\\pi (b - a)^2}$",
            "$\\frac{2\\rho L}{\\pi (a^2 + b^2)}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At distance $x$ from the smaller end ($x=0$ to $x=L$), radius is $r(x) = a + \\left(\\frac{b-a}{L}\\right)x$. The resistance of an elemental disc is $dR = \\rho \\frac{dx}{\\pi r(x)^2}$. Integrating from $0$ to $L$: $R = \\frac{\\rho}{\\pi} \\left[ -\\frac{1}{(b-a)/L} \\frac{1}{r(x)} \\right]_0^L = \\frac{\\rho L}{\\pi(b-a)} \\left(\\frac{1}{a} - \\frac{1}{b}\\right) = \\frac{\\rho L}{\\pi(b-a)} \\frac{b-a}{ab} = \\frac{\\rho L}{\\pi ab}$."
    },
    {
        "id": "ce_res_10",
        "subTopic": "Resistivity",
        "question": "The temperature coefficient of resistivity of a semiconductor is:",
        "options": [
            "Positive",
            "Negative",
            "Zero",
            "Infinite"
        ],
        "correctOptionIndex": 1,
        "explanation": "In semiconductors, as temperature rises, covalent bonds break and the charge carrier density $n$ increases exponentially. Because $n$ increases much faster than $\\tau$ decreases, resistivity $\\rho = \\frac{m}{n e^2 \\tau}$ decreases sharply with temperature, making $\\alpha$ negative."
    },
    {
        "id": "ce_res_11",
        "subTopic": "Resistivity",
        "question": "A wire of resistance $R$ is stretched by $0.2\\%$. The percentage increase in its resistance is:",
        "options": [
            "$0.1\\%$",
            "$0.2\\%$",
            "$0.4\\%$",
            "$0.8\\%$"
        ],
        "correctOptionIndex": 2,
        "explanation": "$R = \\rho \\frac{L^2}{V} \\implies \\frac{\\Delta R}{R} \\approx 2 \\frac{\\Delta L}{L} = 2(0.2\\%) = 0.4\\%$."
    },
    {
        "id": "ce_res_12",
        "subTopic": "Resistivity",
        "question": "A wire of resistance $R$ is drawn out through a die so that its cross-sectional area decreases by $2\\%$. The percentage increase in its resistance is approximately:",
        "options": [
            "$2\\%$",
            "$4\\%$",
            "$1\\%$",
            "$8\\%$"
        ],
        "correctOptionIndex": 1,
        "explanation": "$R = \\rho \\frac{V}{A^2} \\propto A^{-2}$. For small changes, $\\frac{\\Delta R}{R} \\approx -2 \\frac{\\Delta A}{A} = -2(-2\\%) = +4\\%$."
    },
    {
        "id": "ce_res_13",
        "subTopic": "Resistivity",
        "question": "Two rods of the same dimensions have resistivities $\\rho_1$ and $\\rho_2$. When connected in series, the equivalent resistivity of the combination is:",
        "options": [
            "$\\frac{\\rho_1 + \\rho_2}{2}$",
            "$\\rho_1 + \\rho_2$",
            "$\\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$",
            "$\\sqrt{\\rho_1 \\rho_2}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In series, total length is $2L$ and area is $A$. $R_{eq} = R_1 + R_2 \\implies \\rho_{eq} \\frac{2L}{A} = \\rho_1 \\frac{L}{A} + \\rho_2 \\frac{L}{A} \\implies 2\\rho_{eq} = \\rho_1 + \\rho_2 \\implies \\rho_{eq} = \\frac{\\rho_1 + \\rho_2}{2}$."
    },
    {
        "id": "ce_res_14",
        "subTopic": "Resistivity",
        "question": "When the same two rods of identical dimensions are connected in parallel, the equivalent resistivity of the combination is:",
        "options": [
            "$\\frac{\\rho_1 + \\rho_2}{2}$",
            "$\\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$",
            "$\\frac{\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$",
            "$\\sqrt{\\rho_1 \\rho_2}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "In parallel, length is $L$ and total area is $2A$. $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} \\implies \\frac{2A}{\\rho_{eq} L} = \\frac{A}{\\rho_1 L} + \\frac{A}{\\rho_2 L} \\implies \\frac{2}{\\rho_{eq}} = \\frac{1}{\\rho_1} + \\frac{1}{\\rho_2} = \\frac{\\rho_1 + \\rho_2}{\\rho_1 \\rho_2} \\implies \\rho_{eq} = \\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$."
    },
    {
        "id": "ce_res_15",
        "subTopic": "Resistivity",
        "question": "A conductor becomes a superconductor below its critical temperature $T_c$. In the superconducting state, its resistivity is:",
        "options": [
            "Very high",
            "Infinitely large",
            "Precisely zero",
            "Dependent on pressure only"
        ],
        "correctOptionIndex": 2,
        "explanation": "Superconductivity is characterized by the complete disappearance of electrical resistance ($\\rho = 0$) and expulsion of magnetic fields (Meissner effect) below a critical temperature $T_c$."
    },
    {
        "id": "ce_res_16",
        "subTopic": "Resistivity",
        "question": "The resistance of a wire is $10\\,\\Omega$ at $0^\\circ\\text{C}$ and $12\\,\\Omega$ at $100^\\circ\\text{C}$. The temperature at which the resistance becomes $15\\,\\Omega$ is:",
        "options": [
            "$200^\\circ\\text{C}$",
            "$250^\\circ\\text{C}$",
            "$300^\\circ\\text{C}$",
            "$150^\\circ\\text{C}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "$\\alpha = \\frac{R_{100} - R_0}{R_0 \\times 100} = \\frac{12 - 10}{10 \\times 100} = \\frac{2}{1000} = 0.002\\,^\\circ\\text{C}^{-1}$. For $R_t = 15\\,\\Omega$: $15 = 10(1 + 0.002 t) \\implies 1.5 = 1 + 0.002 t \\implies 0.002 t = 0.5 \\implies t = \\frac{0.5}{0.002} = 250^\\circ\\text{C}$."
    },
    {
        "id": "ce_res_17",
        "subTopic": "Resistivity",
        "question": "A wire of resistance $R$ is cut into three equal pieces, and they are joined to form a bundle of length $L/3$. The resistance of the bundle is:",
        "options": [
            "$R/3$",
            "$R/9$",
            "$3R$",
            "$9R$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Each piece has length $L/3$ and resistance $R/3$. When joined as a bundle, the three pieces are in parallel: $R_{eq} = \\frac{R/3}{3} = \\frac{R}{9}$."
    },
    {
        "id": "ce_res_18",
        "subTopic": "Resistivity",
        "question": "A solid block of copper has dimensions $1\\text{ cm} \\times 2\\text{ cm} \\times 3\\text{ cm}$. The ratio of maximum to minimum resistance between opposite faces is:",
        "options": [
            "$3 : 1$",
            "$6 : 1$",
            "$9 : 1$",
            "$12 : 1$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Resistance is $R = \\rho \\frac{L}{A}$. Maximum resistance occurs across the longest length ($L = 3\\text{ cm}, A = 1 \\times 2 = 2\\text{ cm}^2$): $R_{max} = \\rho \\frac{3}{2}$. Minimum resistance occurs across the shortest length ($L = 1\\text{ cm}, A = 2 \\times 3 = 6\\text{ cm}^2$): $R_{min} = \\rho \\frac{1}{6}$. The ratio is $\\frac{R_{max}}{R_{min}} = \\frac{3/2}{1/6} = \\frac{3}{2} \\times 6 = 9 : 1$."
    },
    {
        "id": "ce_res_19",
        "subTopic": "Resistivity",
        "question": "The resistance of a thin square sheet of material of uniform thickness $t$ and resistivity $\\rho$ between two opposite edges (sheet resistance) depends on:",
        "options": [
            "Both edge length $L$ and thickness $t$",
            "Only edge length $L$",
            "Only thickness $t$ and resistivity $\\rho$, independent of side length",
            "Neither length nor thickness"
        ],
        "correctOptionIndex": 2,
        "explanation": "For a square sheet of side $L$ and thickness $t$, length of current path is $L$ and cross-sectional area is $A = L \\times t$. Therefore, $R = \\rho \\frac{L}{L \\times t} = \\frac{\\rho}{t}$, which is completely independent of the size of the square."
    },
    {
        "id": "ce_res_20",
        "subTopic": "Resistivity",
        "question": "The resistivity of an alloy used for making standard resistors changes by less than $0.01\\%$ over a $100^\\circ\\text{C}$ range. The temperature coefficient of resistivity of this alloy is:",
        "options": [
            "$\\le 10^{-6\\,}\\text{C}^{-1}$",
            "$\\le 10^{-4\\,}\\text{C}^{-1}$",
            "$\\ge 10^{-2\\,}\\text{C}^{-1}$",
            "Negative and large"
        ],
        "correctOptionIndex": 0,
        "explanation": "$\\frac{\\Delta \\rho}{\\rho} = \\alpha \\Delta T \\le 0.01\\% = 10^{-4}$. With $\\Delta T = 100$, $\\alpha \\le \\frac{10^{-4}}{100} = 10^{-6\\,}\\text{C}^{-1}$."
    },
    {
        "id": "ce_res_21",
        "subTopic": "Resistivity",
        "question": "Three wires of copper have masses in the ratio $1 : 3 : 5$ and lengths in the ratio $5 : 3 : 1$. The ratio of their electrical resistances is:",
        "options": [
            "$125 : 15 : 1$",
            "$1 : 15 : 125$",
            "$25 : 9 : 1$",
            "$1 : 3 : 5$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Mass is $m = d \\cdot A \\cdot L \\implies A = \\frac{m}{d L}$. Resistance is $R = \\rho \\frac{L}{A} = \\rho \\frac{L}{m / (d L)} = \\frac{\\rho d L^2}{m} \\propto \\frac{L^2}{m}$. Ratio: $R_1 : R_2 : R_3 = \\frac{5^2}{1} : \\frac{3^2}{3} : \\frac{1^2}{5} = 25 : 3 : \\frac{1}{5} = 125 : 15 : 1$."
    },
    {
        "id": "ce_res_22",
        "subTopic": "Resistivity",
        "question": "A cylindrical wire of radius $r$ and length $L$ has resistance $R$. If another wire of the same material has radius $2r$ and length $2L$, its resistance is:",
        "options": [
            "$R/2$",
            "$R$",
            "$2R$",
            "$R/4$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$R = \\rho \\frac{L}{\\pi r^2}$. For the second wire: $R' = \\rho \\frac{2L}{\\pi (2r)^2} = \\rho \\frac{2L}{4\\pi r^2} = \\frac{1}{2} \\rho \\frac{L}{\\pi r^2} = \\frac{R}{2}$."
    },
    {
        "id": "ce_res_23",
        "subTopic": "Resistivity",
        "question": "If a copper wire of resistance $R$ is stretched so that its length increases by $n$ times its original length (i.e., $L' = (n+1)L$), its resistance becomes:",
        "options": [
            "$(n + 1)^2 R$",
            "$n^2 R$",
            "$(n + 1) R$",
            "$(2n + 1) R$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Since length increases by $n$ times original length, final length is $L' = L + nL = (n + 1)L$. Because volume is constant, $R \\propto L^2 \\implies R' = (n + 1)^2 R$."
    },
    {
        "id": "ce_res_24",
        "subTopic": "Resistivity",
        "question": "A material has resistivity $\\rho$ and temperature coefficient $\\alpha$. If its resistance at $T_0$ is $R_0$, the fractional change in resistance $\\frac{\\Delta R}{R_0}$ for a temperature change $\\Delta T$ is:",
        "options": [
            "$\\alpha \\Delta T$",
            "$\\frac{\\alpha}{\\Delta T}$",
            "$\\alpha^2 \\Delta T$",
            "$\\frac{\\Delta T}{\\alpha}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "From $R = R_0(1 + \\alpha \\Delta T)$, we have $\\Delta R = R - R_0 = R_0 \\alpha \\Delta T \\implies \\frac{\\Delta R}{R_0} = \\alpha \\Delta T$."
    },
    {
        "id": "ce_res_25",
        "subTopic": "Resistivity",
        "question": "Two resistors with resistances $R_1$ and $R_2$ have temperature coefficients $\\alpha_1$ and $\\alpha_2$. The effective temperature coefficient when they are connected in parallel is:",
        "options": [
            "$\\frac{R_1 \\alpha_2 + R_2 \\alpha_1}{R_1 + R_2}$",
            "$\\frac{R_1 \\alpha_1 + R_2 \\alpha_2}{R_1 + R_2}$",
            "$\\frac{\\alpha_1 + \\alpha_2}{2}$",
            "$\\frac{\\alpha_1 \\alpha_2}{\\alpha_1 + \\alpha_2}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In parallel, equivalent conductance is $G = G_1 + G_2$. Differentiating with respect to $T$ and using $\\frac{dG}{dT} = -\\frac{1}{R^2}\\frac{dR}{dT} = -\\frac{\\alpha}{R}$: $-\\frac{\\alpha_{eq}}{R_p} = -\\frac{\\alpha_1}{R_1} - \\frac{\\alpha_2}{R_2} \\implies \\alpha_{eq} = R_p \\left(\\frac{\\alpha_1}{R_1} + \\frac{\\alpha_2}{R_2}\\right) = \\frac{R_1 R_2}{R_1 + R_2} \\left(\\frac{R_2 \\alpha_1 + R_1 \\alpha_2}{R_1 R_2}\\right) = \\frac{R_1 \\alpha_2 + R_2 \\alpha_1}{R_1 + R_2}$."
    },
    {
        "id": "ce_res_26",
        "subTopic": "Resistivity",
        "question": "A wire has resistance $16\\,\\Omega$. It is bent to form an equilateral triangle. The resistance between two vertices is:",
        "options": [
            "$\\frac{32}{9}\\,\\Omega$",
            "$\\frac{16}{3}\\,\\Omega$",
            "$\\frac{8}{3}\\,\\Omega$",
            "$\\frac{64}{9}\\,\\Omega$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Each side has resistance $16/3\\,\\Omega$. Across two vertices, one branch is $16/3\\,\\Omega$ and the other is $(16/3 + 16/3) = 32/3\\,\\Omega$. In parallel: $R_{eq} = \\frac{(16/3)(32/3)}{16/3 + 32/3} = \\frac{512/9}{48/3} = \\frac{512/9}{16} = \\frac{32}{9}\\,\\Omega$."
    },
    {
        "id": "ce_res_27",
        "subTopic": "Resistivity",
        "question": "A heating element using nichrome connected to a $230\\text{ V}$ supply draws an initial current of $3.2\\text{ A}$ which settles after a few seconds to a steady value of $2.8\\text{ A}$. What is the steady temperature of the heating element if the room temperature is $27.0^\\circ\\text{C}$? (Temperature coefficient of nichrome $\\alpha = 1.70 \\times 10^{-4\\,}^\\circ\\text{C}^{-1}$):",
        "options": [
            "$867^\\circ\\text{C}$",
            "$840^\\circ\\text{C}$",
            "$920^\\circ\\text{C}$",
            "$750^\\circ\\text{C}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Initial resistance $R_1 = \\frac{230}{3.2} = 71.875\\,\\Omega$. Steady resistance $R_2 = \\frac{230}{2.8} = 82.143\\,\\Omega$. $\\Delta T = \\frac{R_2 - R_1}{R_1 \\alpha} = \\frac{82.143 - 71.875}{71.875 \\times 1.70 \\times 10^{-4}} = \\frac{10.268}{0.01222} \\approx 840^\\circ\\text{C}$. Thus steady temperature is $T_2 = 27 + 840 = 867^\\circ\\text{C}$."
    },
    {
        "id": "ce_res_28",
        "subTopic": "Resistivity",
        "question": "For which of the following substances does the resistance decrease with an increase in temperature?",
        "options": [
            "Germanium",
            "Copper",
            "Silver",
            "Aluminum"
        ],
        "correctOptionIndex": 0,
        "explanation": "Germanium is an intrinsic semiconductor with a negative temperature coefficient of resistance ($\\alpha < 0$). As temperature rises, more electron-hole pairs are generated, lowering its resistance."
    },
    {
        "id": "ce_res_29",
        "subTopic": "Resistivity",
        "question": "When temperature of a metal is increased, the product of its resistivity and conductivity ($\\rho \\times \\sigma$):",
        "options": [
            "Remains constant and equal to 1",
            "Increases",
            "Decreases",
            "Becomes zero"
        ],
        "correctOptionIndex": 0,
        "explanation": "By definition, conductivity is the reciprocal of resistivity: $\\sigma = 1/\\rho$. Therefore, the product $\\rho \\times \\sigma = \\rho \\times (1/\\rho) = 1$ is an absolute constant at all temperatures."
    },
    {
        "id": "ce_res_30",
        "subTopic": "Resistivity",
        "question": "The electrical resistivity of a thin wire is $\\rho$. If its length is tripled and its diameter is halved, its new resistivity will be:",
        "options": [
            "$\\rho$",
            "$3\\rho$",
            "$12\\rho$",
            "$6\\rho$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Resistivity depends only on the material and temperature, not on the dimensions of the wire. Hence it remains $\\rho$."
    },
    {
        "id": "ce_res_31",
        "subTopic": "Resistivity",
        "question": "A cylindrical copper cable carries a current. If the wire is drawn out such that its length increases by $20\\%$, the percentage increase in its resistance is:",
        "options": [
            "$44\\%$",
            "$20\\%$",
            "$40\\%$",
            "$25\\%$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$L' = 1.2 L$. Since volume is constant, $R' = (1.2)^2 R = 1.44 R$. The percentage increase is $(1.44 - 1) \\times 100\\% = 44\\%$."
    },
    {
        "id": "ce_res_32",
        "subTopic": "Resistivity",
        "question": "A resistor of resistance $R$ has a temperature coefficient $\\alpha = 0.001\\,^\\circ\\text{C}^{-1}$. If its temperature is increased by $50^\\circ\\text{C}$, the percentage increase in resistance is:",
        "options": [
            "$5\\%$",
            "$0.05\\%$",
            "$0.5\\%$",
            "$50\\%$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$\\frac{\\Delta R}{R} = \\alpha \\Delta T = (0.001)(50) = 0.05 = 5\\%$."
    },
    {
        "id": "ce_res_33",
        "subTopic": "Resistivity",
        "question": "Two wires of the same material have lengths in the ratio $2 : 3$ and radii in the ratio $1 : 2$. The ratio of their resistances is:",
        "options": [
            "$8 : 3$",
            "$3 : 8$",
            "$4 : 3$",
            "$1 : 3$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$R \\propto \\frac{L}{r^2} \\implies \\frac{R_1}{R_2} = \\frac{L_1}{L_2} \\times \\left(\\frac{r_2}{r_1}\\right)^2 = \\left(\\frac{2}{3}\\right) \\times \\left(\\frac{2}{1}\\right)^2 = \\frac{2}{3} \\times 4 = \\frac{8}{3} = 8 : 3$."
    },
    {
        "id": "ce_res_34",
        "subTopic": "Resistivity",
        "question": "Nichrome is used as a heating element because it has:",
        "options": [
            "High resistivity and high melting point",
            "Low resistivity and high melting point",
            "High resistivity and low melting point",
            "Low resistivity and low melting point"
        ],
        "correctOptionIndex": 0,
        "explanation": "Nichrome alloy has high resistivity (so it generates substantial Joule heat $P = I^2 R$) and a very high melting point and resistance to oxidation even at glowing red temperatures."
    },
    {
        "id": "ce_res_35",
        "subTopic": "Resistivity",
        "question": "Fuse wire is made of an alloy of lead and tin. It must have:",
        "options": [
            "High resistance and low melting point",
            "Low resistance and high melting point",
            "High resistance and high melting point",
            "Low resistance and low melting point"
        ],
        "correctOptionIndex": 0,
        "explanation": "A fuse wire must melt safely and break the circuit whenever excessive current flows, requiring a low melting point and sufficiently high resistance."
    },
    {
        "id": "ce_res_36",
        "subTopic": "Resistivity",
        "question": "The current rating $I$ of a fuse wire of radius $r$ varies with radius according to Preece's law as:",
        "options": [
            "$I \\propto r^{3/2}$",
            "$I \\propto r^2$",
            "$I \\propto r$",
            "$I \\propto r^{1/2}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At steady state, heat produced per second equals heat lost per second: $I^2 R = h (2\\pi r L) \\Delta T$. Since $R = \\rho \\frac{L}{\\pi r^2}$, we have $I^2 \\left(\\rho \\frac{L}{\\pi r^2}\\right) = 2\\pi r L h \\Delta T \\implies I^2 \\propto r^3 \\implies I \\propto r^{3/2}$. Notice that the current capacity is independent of length $L$!"
    },
    {
        "id": "ce_res_37",
        "subTopic": "Resistivity",
        "question": "A piece of copper and a piece of silicon are both cooled from room temperature to $80\\text{ K}$. What happens to their resistances?",
        "options": [
            "Copper decreases, Silicon increases",
            "Copper increases, Silicon decreases",
            "Both increase",
            "Both decrease"
        ],
        "correctOptionIndex": 0,
        "explanation": "Copper is a metal with $\\alpha > 0$, so its resistance decreases upon cooling. Silicon is a semiconductor with $\\alpha < 0$, so upon cooling its charge carriers freeze out and its resistance increases."
    },
    {
        "id": "ce_res_38",
        "subTopic": "Resistivity",
        "question": "The resistance of a conductor is $1\\,\\Omega$ at $0^\\circ\\text{C}$. If $\\alpha = 0.004\\,^\\circ\\text{C}^{-1}$, the resistance at $100^\\circ\\text{C}$ will be:",
        "options": [
            "$1.4\\,\\Omega$",
            "$1.2\\,\\Omega$",
            "$1.04\\,\\Omega$",
            "$2.0\\,\\Omega$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$R_t = R_0(1 + \\alpha t) = 1(1 + 0.004 \\times 100) = 1(1 + 0.4) = 1.4\\,\\Omega$."
    },
    {
        "id": "ce_res_39",
        "subTopic": "Resistivity",
        "question": "A uniform wire of resistance $9\\,\\Omega$ is cut into three equal parts. Two of them are connected in parallel, and this combination is connected in series with the third part. The equivalent resistance is:",
        "options": [
            "$4.5\\,\\Omega$",
            "$3.0\\,\\Omega$",
            "$6.0\\,\\Omega$",
            "$1.5\\,\\Omega$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Each piece has resistance $3\\,\\Omega$. Two in parallel give $3/2 = 1.5\\,\\Omega$. In series with the third: $R_{eq} = 1.5 + 3 = 4.5\\,\\Omega$."
    },
    {
        "id": "ce_res_40",
        "subTopic": "Resistivity",
        "question": "A strip of copper and another of germanium are heated from $20^\\circ\\text{C}$ to $50^\\circ\\text{C}$. The resistance of:",
        "options": [
            "Copper increases and germanium decreases",
            "Copper decreases and germanium increases",
            "Both increase",
            "Both decrease"
        ],
        "correctOptionIndex": 0,
        "explanation": "Metals have positive temperature coefficient (resistance increases on heating), while semiconductors have negative temperature coefficient (resistance decreases on heating)."
    },
    {
        "id": "ce_res_41",
        "subTopic": "Resistivity",
        "question": "A potential difference $V$ is applied across a wire of length $L$ and radius $r$. If length is halved and radius is doubled, keeping $V$ constant, the current becomes:",
        "options": [
            "$8$ times original current",
            "$4$ times original current",
            "$2$ times original current",
            "$16$ times original current"
        ],
        "correctOptionIndex": 0,
        "explanation": "$R = \\rho \\frac{L}{\\pi r^2}$. For $L' = L/2$ and $r' = 2r$: $R' = \\rho \\frac{L/2}{\\pi (2r)^2} = \\frac{1}{8}\\rho \\frac{L}{\\pi r^2} = R/8$. Since voltage $V$ is constant, $I' = \\frac{V}{R'} = \\frac{V}{R/8} = 8I$."
    },
    {
        "id": "ce_res_42",
        "subTopic": "Resistivity",
        "question": "The resistance of a wire of uniform diameter $d$ and length $L$ is $R$. The resistance of another wire of the same material having diameter $2d$ and length $4L$ is:",
        "options": [
            "$R$",
            "$2R$",
            "$R/2$",
            "$4R$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$R \\propto \\frac{L}{d^2}$. For the second wire, $R' \\propto \\frac{4L}{(2d)^2} = \\frac{4L}{4d^2} = \\frac{L}{d^2} \\propto R$. Thus $R' = R$."
    },
    {
        "id": "ce_res_43",
        "subTopic": "Resistivity",
        "question": "An aluminum wire has a resistance of $20\\,\\Omega$ at $20^\\circ\\text{C}$. What is its resistance at $0^\\circ\\text{C}$ if $\\alpha = 0.004\\,^\\circ\\text{C}^{-1}$ at $0^\\circ\\text{C}$?",
        "options": [
            "$18.52\\,\\Omega$",
            "$19.20\\,\\Omega$",
            "$16.67\\,\\Omega$",
            "$18.00\\,\\Omega$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$R_{20} = R_0(1 + \\alpha \\times 20) \\implies 20 = R_0(1 + 0.004 \\times 20) = R_0(1 + 0.08) = 1.08 R_0 \\implies R_0 = \\frac{20}{1.08} \\approx 18.52\\,\\Omega$."
    },
    {
        "id": "ce_res_44",
        "subTopic": "Resistivity",
        "question": "A cylindrical conductor of length $L$ and radius $a$ is surrounded by a coaxial conducting cylinder of radius $b$. The space between them is filled with a material of resistivity $\\rho$. The leakage resistance per unit length is:",
        "options": [
            "$\\frac{\\rho}{2\\pi} \\ln\\left(\\frac{b}{a}\\right)$",
            "$\\frac{\\rho}{2\\pi (b - a)}$",
            "$\\frac{\\rho}{\\pi (b^2 - a^2)}$",
            "$\\frac{2\\pi}{\\rho} \\ln\\left(\\frac{b}{a}\\right)$"
        ],
        "correctOptionIndex": 0,
        "explanation": "For radial current between coaxial cylinders of length $L$, $R = \\frac{\\rho}{2\\pi L} \\ln(b/a)$. Resistance per unit length ($R L$) is $\\frac{\\rho}{2\\pi} \\ln(b/a)$ (measured in $\\Omega\\cdot\\text{m}$)."
    },
    {
        "id": "ce_res_45",
        "subTopic": "Resistivity",
        "question": "A carbon filament and a tungsten filament are connected in series. Their resistances at $0^\\circ\\text{C}$ are $R_C$ and $R_W$ respectively. If the resistance of the combination is to remain unchanged with temperature, then:",
        "options": [
            "$\\frac{R_C}{R_W} = -\\frac{\\alpha_W}{\\alpha_C}$",
            "$\\frac{R_C}{R_W} = -\\frac{\\alpha_C}{\\alpha_W}$",
            "$R_C \\alpha_C = R_W \\alpha_W$",
            "$R_C + R_W = \\alpha_C + \\alpha_W$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In series, $R_{eq} = R_C(1 + \\alpha_C \\Delta T) + R_W(1 + \\alpha_W \\Delta T)$. For $R_{eq}$ to be independent of temperature, $R_C \\alpha_C + R_W \\alpha_W = 0 \\implies \\frac{R_C}{R_W} = -\\frac{\\alpha_W}{\\alpha_C}$."
    },

    # =========================================================================
    # TOPIC 4: Electrical energy and power (45 MCQs: ce_eep_01 to ce_eep_45)
    # =========================================================================
    {
        "id": "ce_eep_01",
        "subTopic": "Electrical energy and power",
        "question": "According to the Maximum Power Transfer Theorem, a source of EMF $\\mathcal{E}$ and internal resistance $r$ delivers maximum power to an external load resistor $R$ when:",
        "options": [
            "$R = r$",
            "$R = 2r$",
            "$R \\gg r$",
            "$R = 0$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Power delivered to load is $P = I^2 R = \\frac{\\mathcal{E}^2 R}{(R + r)^2}$. Setting $\\frac{dP}{dR} = 0$ gives $R = r$. The maximum power transferred is $P_{max} = \\frac{\\mathcal{E}^2}{4r}$."
    },
    {
        "id": "ce_eep_02",
        "subTopic": "Electrical energy and power",
        "question": "When a source delivers maximum power to an external load (so $R = r$), the efficiency of the source is:",
        "options": [
            "$50\\%$",
            "$100\\%$",
            "$75\\%$",
            "$25\\%$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Efficiency is $\\eta = \\frac{P_{out}}{P_{total}} = \\frac{I^2 R}{I^2 (R + r)} = \\frac{R}{R + r}$. When $R = r$, $\\eta = \\frac{r}{2r} = 0.5 = 50\\%$."
    },
    {
        "id": "ce_eep_03",
        "subTopic": "Electrical energy and power",
        "question": "Two electric bulbs rated $25\\text{ W}-220\\text{ V}$ and $100\\text{ W}-220\\text{ V}$ are connected in series across a $220\\text{ V}$ mains supply. Which bulb will glow brighter?",
        "options": [
            "The $25\\text{ W}$ bulb",
            "The $100\\text{ W}$ bulb",
            "Both will glow with equal brightness",
            "Neither will glow"
        ],
        "correctOptionIndex": 0,
        "explanation": "Resistance is $R = V^2 / P_{rated}$. Thus $R_{25} = 4 R_{100}$. In series, the current $I$ is the same through both bulbs. The actual power consumed is $P = I^2 R \\propto R$. Since the $25\\text{ W}$ bulb has higher resistance, it consumes more power and glows brighter."
    },
    {
        "id": "ce_eep_04",
        "subTopic": "Electrical energy and power",
        "question": "If the same two bulbs ($25\\text{ W}$ and $100\\text{ W}$) are connected in parallel across the $220\\text{ V}$ supply, which bulb glows brighter?",
        "options": [
            "The $100\\text{ W}$ bulb",
            "The $25\\text{ W}$ bulb",
            "Both will glow with equal brightness",
            "The $25\\text{ W}$ bulb will fuse immediately"
        ],
        "correctOptionIndex": 0,
        "explanation": "In parallel, both bulbs receive the full $220\\text{ V}$. Power consumed is $P = V^2 / R = P_{rated}$. The $100\\text{ W}$ bulb consumes $100\\text{ W}$ and glows brighter."
    },
    {
        "id": "ce_eep_05",
        "subTopic": "Electrical energy and power",
        "question": "Two electric bulbs rated $P_1$ and $P_2$ at voltage $V$ are connected in series across voltage $V$. The total power consumed by the combination is:",
        "options": [
            "$\\frac{P_1 P_2}{P_1 + P_2}$",
            "$P_1 + P_2$",
            "$\\sqrt{P_1 P_2}$",
            "$\\frac{P_1 + P_2}{2}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In series, equivalent resistance is $R_{eq} = R_1 + R_2 = \\frac{V^2}{P_1} + \\frac{V^2}{P_2} = V^2 \\left(\\frac{1}{P_1} + \\frac{1}{P_2}\\right)$. Total power is $P_{eq} = \\frac{V^2}{R_{eq}} = \\frac{1}{1/P_1 + 1/P_2} = \\frac{P_1 P_2}{P_1 + P_2}$."
    },
    {
        "id": "ce_eep_06",
        "subTopic": "Electrical energy and power",
        "question": "When the same two bulbs are connected in parallel across the rated voltage $V$, the total power consumed is:",
        "options": [
            "$P_1 + P_2$",
            "$\\frac{P_1 P_2}{P_1 + P_2}$",
            "$\\frac{P_1 + P_2}{P_1 P_2}$",
            "$\\sqrt{P_1^2 + P_2^2}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In parallel, total power is the sum of powers consumed by each branch: $P_{eq} = P_1 + P_2$."
    },
    {
        "id": "ce_eep_07",
        "subTopic": "Electrical energy and power",
        "question": "An electric kettle has two heating coils. When one coil is switched on, water boils in $6\\text{ minutes}$. When the other coil is switched on, water boils in $3\\text{ minutes}$. If both coils are connected in parallel, the time taken to boil the same quantity of water is:",
        "options": [
            "$2\\text{ minutes}$",
            "$9\\text{ minutes}$",
            "$4.5\\text{ minutes}$",
            "$1.5\\text{ minutes}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Heat required $H$ is constant. Power $P = H/t$. In parallel, total power is $P_p = P_1 + P_2 \\implies \\frac{H}{t_p} = \\frac{H}{t_1} + \\frac{H}{t_2} \\implies \\frac{1}{t_p} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2} \\implies t_p = 2\\text{ minutes}$."
    },
    {
        "id": "ce_eep_08",
        "subTopic": "Electrical energy and power",
        "question": "In the previous question, if the two coils are connected in series, the time taken to boil the water will be:",
        "options": [
            "$9\\text{ minutes}$",
            "$2\\text{ minutes}$",
            "$4.5\\text{ minutes}$",
            "$18\\text{ minutes}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In series, $R_s = R_1 + R_2$. Since $H = \\frac{V^2}{R} t \\implies R = \\frac{V^2 t}{H}$, we have $t_s = t_1 + t_2 = 6 + 3 = 9\\text{ minutes}$."
    },
    {
        "id": "ce_eep_09",
        "subTopic": "Electrical energy and power",
        "question": "One kilowatt-hour ($1\\text{ kWh}$) of electrical energy is equal to:",
        "options": [
            "$3.6 \\times 10^6\\text{ J}$",
            "$3.6 \\times 10^5\\text{ J}$",
            "$10^3\\text{ J}$",
            "$3.6 \\times 10^3\\text{ J}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$1\\text{ kWh} = (1000\\text{ W}) \\times (3600\\text{ s}) = 3.6 \\times 10^6\\text{ J}$."
    },
    {
        "id": "ce_eep_10",
        "subTopic": "Electrical energy and power",
        "question": "A cell of EMF $2\\text{ V}$ and internal resistance $0.5\\,\\Omega$ is connected across a variable resistor $R$. The maximum power that can be dissipated in $R$ is:",
        "options": [
            "$2.0\\text{ W}$",
            "$1.0\\text{ W}$",
            "$4.0\\text{ W}$",
            "$0.5\\text{ W}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Maximum power occurs when $R = r = 0.5\\,\\Omega$. $P_{max} = \\frac{\\mathcal{E}^2}{4r} = \\frac{2^2}{4(0.5)} = \\frac{4}{2} = 2.0\\text{ W}$."
    },
    {
        "id": "ce_eep_11",
        "subTopic": "Electrical energy and power",
        "question": "In transmitting electrical power over long distances from a power plant, high voltage is used primarily to:",
        "options": [
            "Reduce $I^2 R$ power loss in the transmission lines",
            "Increase the current carrying capacity of the wires",
            "Prevent theft of electricity",
            "Make transformers work faster"
        ],
        "correctOptionIndex": 0,
        "explanation": "Transmitted power is $P = V I$. Transmitting at very high voltage $V$ drastically reduces the current $I = P/V$. The power loss in the lines is $P_{loss} = I^2 R_{line} = \\frac{P^2 R_{line}}{V^2} \\propto \\frac{1}{V^2}$, so power loss is minimized."
    },
    {
        "id": "ce_eep_12",
        "subTopic": "Electrical energy and power",
        "question": "A $100\\text{ W}-220\\text{ V}$ bulb is operated on a $110\\text{ V}$ supply. The power consumed by the bulb is (assuming resistance remains constant):",
        "options": [
            "$25\\text{ W}$",
            "$50\\text{ W}$",
            "$75\\text{ W}$",
            "$100\\text{ W}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Resistance of bulb is $R = \\frac{V_{rated}^2}{P_{rated}} = \\frac{220^2}{100} = 484\\,\\Omega$. When operated at $V = 110\\text{ V}$, power consumed is $P = \\frac{V^2}{R} = \\frac{110^2}{484} = \\frac{12100}{484} = 25\\text{ W}$."
    },
    {
        "id": "ce_eep_13",
        "subTopic": "Electrical energy and power",
        "question": "Three identical bulbs $A$, $B$, and $C$ are connected to a battery: bulb $A$ is in series with a parallel combination of bulbs $B$ and $C$. If bulb $C$ burns out, what happens to the brightness of bulbs $A$ and $B$?",
        "options": [
            "Brightness of $A$ decreases, Brightness of $B$ increases",
            "Brightness of both $A$ and $B$ increases",
            "Brightness of both $A$ and $B$ decreases",
            "Brightness of $A$ increases, Brightness of $B$ decreases"
        ],
        "correctOptionIndex": 0,
        "explanation": "Initially, parallel combination of $B$ and $C$ has resistance $R/2$. Total circuit resistance is $R + R/2 = 1.5R$. Total current is $I = \\mathcal{E}/(1.5R)$. Current through $A$ is $I$, and through $B$ is $I/2 = \\mathcal{E}/(3R)$. When $C$ burns out, total resistance becomes $R + R = 2R$. New current through both $A$ and $B$ is $I' = \\mathcal{E}/(2R)$. Current through $A$ drops from $\\frac{2}{3}\\frac{\\mathcal{E}}{R}$ to $\\frac{1}{2}\\frac{\\mathcal{E}}{R}$ (dimmer). Current through $B$ increases from $\\frac{1}{3}\\frac{\\mathcal{E}}{R}$ to $\\frac{1}{2}\\frac{\\mathcal{E}}{R}$ (brighter)."
    },
    {
        "id": "ce_eep_14",
        "subTopic": "Electrical energy and power",
        "question": "An electric heater rated $1000\\text{ W}$ is cut into two equal halves. If one half is connected across the same supply voltage, the power consumed is:",
        "options": [
            "$2000\\text{ W}$",
            "$500\\text{ W}$",
            "$1000\\text{ W}$",
            "$4000\\text{ W}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Original resistance is $R$. One half has resistance $R' = R/2$. Power consumed is $P' = \\frac{V^2}{R'} = \\frac{V^2}{R/2} = 2 \\frac{V^2}{R} = 2 \\times 1000 = 2000\\text{ W}$."
    },
    {
        "id": "ce_eep_15",
        "subTopic": "Electrical energy and power",
        "question": "A current $I$ passes through a resistor $R$. If the current is increased by $100\\%$ (doubled), the percentage increase in the rate of heat generation is:",
        "options": [
            "$300\\%$",
            "$100\\%$",
            "$200\\%$",
            "$400\\%$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Power is $P = I^2 R$. When current is doubled ($I' = 2I$), $P' = (2I)^2 R = 4 I^2 R = 4P$. Percentage increase is $\\frac{4P - P}{P} \\times 100\\% = 300\\%$."
    },
    {
        "id": "ce_eep_16",
        "subTopic": "Electrical energy and power",
        "question": "A battery of EMF $\\mathcal{E}$ and internal resistance $r$ is connected to an external resistance $R$. The plot of power $P$ dissipated in $R$ as a function of $R$ shows that:",
        "options": [
            "$P$ is zero at $R = 0$ and $R \\to \\infty$, with a maximum at $R = r$",
            "$P$ decreases monotonically with $R$",
            "$P$ increases linearly with $R$",
            "$P$ is constant for all values of $R$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$P(R) = \\frac{\\mathcal{E}^2 R}{(R + r)^2}$. At $R = 0$, $P = 0$. As $R \\to \\infty$, $P \\to 0$. The derivative vanishes only at $R = r$, where $P$ attains its global maximum $P_{max} = \\frac{\\mathcal{E}^2}{4r}$."
    },
    {
        "id": "ce_eep_17",
        "subTopic": "Electrical energy and power",
        "question": "A cell supplies equal power to two external resistors $R_1$ and $R_2$ ($R_1 \\neq R_2$). The internal resistance $r$ of the cell is given by:",
        "options": [
            "$\\sqrt{R_1 R_2}$",
            "$\\frac{R_1 + R_2}{2}$",
            "$\\frac{2 R_1 R_2}{R_1 + R_2}$",
            "$R_1 + R_2$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Equating powers: $\\frac{\\mathcal{E}^2 R_1}{(R_1 + r)^2} = \\frac{\\mathcal{E}^2 R_2}{(R_2 + r)^2} \\implies R_1 (R_2 + r)^2 = R_2 (R_1 + r)^2 \\implies R_1 (R_2^2 + 2R_2 r + r^2) = R_2 (R_1^2 + 2R_1 r + r^2) \\implies R_1 R_2(R_2 - R_1) = r^2(R_2 - R_1)$. Since $R_1 \\neq R_2$, we have $r^2 = R_1 R_2 \\implies r = \\sqrt{R_1 R_2}$."
    },
    {
        "id": "ce_eep_18",
        "subTopic": "Electrical energy and power",
        "question": "If an electric immersion rod heats a bucket of water in $10\\text{ minutes}$ when supplied with $220\\text{ V}$, how long will it take to heat the same water to the same temperature if the voltage drops to $200\\text{ V}$?",
        "options": [
            "$12.1\\text{ minutes}$",
            "$11.0\\text{ minutes}$",
            "$9.09\\text{ minutes}$",
            "$8.26\\text{ minutes}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Heat required is $H = \\frac{V^2}{R} t = \\text{constant} \\implies t \\propto \\frac{1}{V^2}$. Therefore $t_2 = t_1 \\left(\\frac{V_1}{V_2}\\right)^2 = 10 \\times \\left(\\frac{220}{200}\\right)^2 = 10 \\times (1.1)^2 = 10 \\times 1.21 = 12.1\\text{ minutes}$."
    },
    {
        "id": "ce_eep_19",
        "subTopic": "Electrical energy and power",
        "question": "A $500\\text{ W}$ heating coil is designed to operate on a $110\\text{ V}$ line. By how much percentage should its resistance be changed so that it delivers $500\\text{ W}$ on a $220\\text{ V}$ line?",
        "options": [
            "Resistance should be increased by $300\\%$ (become 4 times)",
            "Resistance should be doubled ($100\\%$ increase)",
            "Resistance should be halved",
            "Resistance should be increased by $400\\%$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$P = V^2 / R \\implies R = V^2 / P$. For the same power, $R \\propto V^2$. If voltage doubles ($220/110 = 2$), required resistance is $R' = 2^2 R = 4R$. The percentage increase is $\\frac{4R - R}{R} \\times 100\\% = 300\\%$."
    },
    {
        "id": "ce_eep_20",
        "subTopic": "Electrical energy and power",
        "question": "A house is fitted with ten $60\\text{ W}$ bulbs, four $100\\text{ W}$ fans, and one $1000\\text{ W}$ heater. If all appliances run for $5\\text{ hours}$ daily, the daily energy consumption in units (kWh) is:",
        "options": [
            "$10\\text{ units}$",
            "$20\\text{ units}$",
            "$5\\text{ units}$",
            "$2\\text{ units}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Total power = $(10 \\times 60) + (4 \\times 100) + 1000 = 600 + 400 + 1000 = 2000\\text{ W} = 2\\text{ kW}$. Energy consumed in $5\\text{ hours}$ is $E = 2\\text{ kW} \\times 5\\text{ h} = 10\\text{ kWh} = 10\\text{ units}$."
    },
    {
        "id": "ce_eep_21",
        "subTopic": "Electrical energy and power",
        "question": "Two resistors of resistances $R$ and $2R$ are connected in parallel across an ideal battery. The ratio of thermal energy developed in $R$ to that in $2R$ in a given time is:",
        "options": [
            "$2 : 1$",
            "$1 : 2$",
            "$4 : 1$",
            "$1 : 4$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In parallel, voltage $V$ across each resistor is the same. Rate of heat generation is $P = V^2 / R \\propto 1/R$. Thus $\\frac{H_1}{H_2} = \\frac{R_2}{R_1} = \\frac{2R}{R} = 2 : 1$."
    },
    {
        "id": "ce_eep_22",
        "subTopic": "Electrical energy and power",
        "question": "If the same two resistors ($R$ and $2R$) are connected in series across the same battery, the ratio of heat developed in $R$ to that in $2R$ is:",
        "options": [
            "$1 : 2$",
            "$2 : 1$",
            "$1 : 4$",
            "$4 : 1$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In series, current $I$ is the same through both resistors. Rate of heat generation is $P = I^2 R \\propto R$. Thus $\\frac{H_1}{H_2} = \\frac{R_1}{R_2} = \\frac{R}{2R} = 1 : 2$."
    },
    {
        "id": "ce_eep_23",
        "subTopic": "Electrical energy and power",
        "question": "A carbon resistor is marked with power rating $2\\text{ W}$ and resistance $200\\,\\Omega$. The maximum current that can safely pass through the resistor without burning it out is:",
        "options": [
            "$0.1\\text{ A}$",
            "$1.0\\text{ A}$",
            "$0.01\\text{ A}$",
            "$0.05\\text{ A}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$P = I^2 R \\implies I^2 = \\frac{P}{R} = \\frac{2}{200} = \\frac{1}{100} \\implies I = 0.1\\text{ A}$."
    },
    {
        "id": "ce_eep_24",
        "subTopic": "Electrical energy and power",
        "question": "In the question above, the maximum voltage that can be applied across the resistor is:",
        "options": [
            "$20\\text{ V}$",
            "$40\\text{ V}$",
            "$10\\text{ V}$",
            "$200\\text{ V}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$P = \\frac{V^2}{R} \\implies V^2 = P R = 2 \\times 200 = 400 \\implies V = 20\\text{ V}$."
    },
    {
        "id": "ce_eep_25",
        "subTopic": "Electrical energy and power",
        "question": "A $100\\text{ W}$ bulb and a $500\\text{ W}$ bulb are designed to work on $220\\text{ V}$ mains. The ratio of their filament resistances $R_1 / R_2$ is:",
        "options": [
            "$5 : 1$",
            "$1 : 5$",
            "$25 : 1$",
            "$1 : 25$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$R = V^2 / P \\propto 1/P$. Therefore $\\frac{R_1}{R_2} = \\frac{P_2}{P_1} = \\frac{500}{100} = 5 : 1$."
    },
    {
        "id": "ce_eep_26",
        "subTopic": "Electrical energy and power",
        "question": "A resistor of resistance $R$ carries a current $I = I_0 \\sin\\omega t$. The average power dissipated over one full cycle is:",
        "options": [
            "$\\frac{1}{2} I_0^2 R$",
            "$I_0^2 R$",
            "$\\frac{1}{4} I_0^2 R$",
            "$2 I_0^2 R$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$P(t) = I(t)^2 R = I_0^2 R \\sin^2(\\omega t)$. The average of $\\sin^2(\\omega t)$ over one full cycle is $1/2$. Hence $P_{avg} = \\frac{1}{2} I_0^2 R$."
    },
    {
        "id": "ce_eep_27",
        "subTopic": "Electrical energy and power",
        "question": "Three identical resistors are connected to a source. In which configuration will the total power consumed from the source be maximum?",
        "options": [
            "All three connected in parallel",
            "All three connected in series",
            "Two in series, in parallel with the third",
            "Two in parallel, in series with the third"
        ],
        "correctOptionIndex": 0,
        "explanation": "Power from a constant voltage source is $P = V^2 / R_{eq}$. Power is maximum when $R_{eq}$ is minimum. In parallel, $R_{eq} = R/3$, which gives maximum power $P = 3V^2/R$."
    },
    {
        "id": "ce_eep_28",
        "subTopic": "Electrical energy and power",
        "question": "In which configuration of three identical resistors is the total power consumed minimum?",
        "options": [
            "All three connected in series",
            "All three connected in parallel",
            "Two in series, in parallel with the third",
            "Two in parallel, in series with the third"
        ],
        "correctOptionIndex": 0,
        "explanation": "Power is minimum when $R_{eq}$ is maximum. In series, $R_{eq} = 3R$, which gives minimum power $P = V^2/(3R)$."
    },
    {
        "id": "ce_eep_29",
        "subTopic": "Electrical energy and power",
        "question": "A current of $5\\text{ A}$ passes through a resistance of $10\\,\\Omega$ for $1\\text{ minute}$. The heat produced in calories is ($1\\text{ cal} = 4.2\\text{ J}$):",
        "options": [
            "$3571\\text{ cal}$",
            "$15000\\text{ cal}$",
            "$7142\\text{ cal}$",
            "$2500\\text{ cal}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Heat produced in joules is $H = I^2 R t = (5)^2 \\times 10 \\times 60 = 25 \\times 600 = 15000\\text{ J}$. In calories: $H = \\frac{15000}{4.2} \\approx 3571\\text{ cal}$."
    },
    {
        "id": "ce_eep_30",
        "subTopic": "Electrical energy and power",
        "question": "A cell of EMF $\\mathcal{E}$ and internal resistance $r$ is connected across a variable resistor $R$. The power dissipated in $R$ is maximum when current is:",
        "options": [
            "$\\frac{\\mathcal{E}}{2r}$",
            "$\\frac{\\mathcal{E}}{r}$",
            "$\\frac{2\\mathcal{E}}{r}$",
            "$\\frac{\\mathcal{E}}{4r}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Maximum power occurs when $R = r$. At this load, current is $I = \\frac{\\mathcal{E}}{R + r} = \\frac{\\mathcal{E}}{2r}$."
    },
    {
        "id": "ce_eep_31",
        "subTopic": "Electrical energy and power",
        "question": "A $220\\text{ V}, 1000\\text{ W}$ bulb is connected across a $110\\text{ V}$ line. The heat produced in $20\\text{ minutes}$ is:",
        "options": [
            "$3 \\times 10^5\\text{ J}$",
            "$1.2 \\times 10^6\\text{ J}$",
            "$6 \\times 10^5\\text{ J}$",
            "$1.5 \\times 10^5\\text{ J}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Resistance is $R = \\frac{220^2}{1000} = 48.4\\,\\Omega$. Power at $110\\text{ V}$ is $P = \\frac{110^2}{48.4} = 250\\text{ W}$. Heat in $20\\text{ minutes}$ ($1200\\text{ s}$) is $H = P t = 250 \\times 1200 = 300,000\\text{ J} = 3 \\times 10^5\\text{ J}$."
    },
    {
        "id": "ce_eep_32",
        "subTopic": "Electrical energy and power",
        "question": "Two bulbs rated $40\\text{ W}$ and $60\\text{ W}$ are connected in series across a $220\\text{ V}$ supply. If $W_1$ and $W_2$ are the powers consumed by them, then:",
        "options": [
            "$W_1 > W_2$",
            "$W_2 > W_1$",
            "$W_1 = W_2$",
            "$W_1 + W_2 = 100\\text{ W}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In series, current is identical: $W = I^2 R \\propto R$. Since $R = V^2 / P_{rated}$, the $40\\text{ W}$ bulb has higher resistance ($R_{40} = 1.5 R_{60}$), so $W_1 > W_2$."
    },
    {
        "id": "ce_eep_33",
        "subTopic": "Electrical energy and power",
        "question": "In an electric heater, the resistance coil produces heat $H$ in time $t$. If the length of the coil is reduced by $10\\%$, keeping the applied voltage constant, the heat produced in time $t$ will:",
        "options": [
            "Increase by about $11\\%$",
            "Decrease by $10\\%$",
            "Increase by $10\\%$",
            "Remain unchanged"
        ],
        "correctOptionIndex": 0,
        "explanation": "Resistance is $R \\propto L$. If length decreases by $10\\%$, $R' = 0.9 R$. Power is $P = V^2 / R' = \\frac{V^2}{0.9 R} = \\frac{P}{0.9} \\approx 1.11 P$. Thus heat produced increases by about $11\\%$."
    },
    {
        "id": "ce_eep_34",
        "subTopic": "Electrical energy and power",
        "question": "Two electric bulbs rated $60\\text{ W}-220\\text{ V}$ and $100\\text{ W}-220\\text{ V}$ are connected in series across a $440\\text{ V}$ supply. Which bulb will fuse?",
        "options": [
            "The $60\\text{ W}$ bulb",
            "The $100\\text{ W}$ bulb",
            "Both bulbs",
            "Neither bulb"
        ],
        "correctOptionIndex": 0,
        "explanation": "$R_1 = \\frac{220^2}{60}$ and $R_2 = \\frac{220^2}{100}$. Voltage across the $60\\text{ W}$ bulb is $V_1 = 440 \\times \\frac{R_1}{R_1 + R_2} = 440 \\times \\frac{100}{160} = 275\\text{ V}$. Since $275\\text{ V} > 220\\text{ V}$ (its rated voltage), the $60\\text{ W}$ bulb will fuse immediately."
    },
    {
        "id": "ce_eep_35",
        "subTopic": "Electrical energy and power",
        "question": "An electric motor operates on a $220\\text{ V}$ line and draws a current of $5\\text{ A}$. If the mechanical power output is $880\\text{ W}$, the efficiency of the motor is:",
        "options": [
            "$80\\%$",
            "$70\\%$",
            "$90\\%$",
            "$88\\%$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Input electrical power is $P_{in} = V I = 220 \\times 5 = 1100\\text{ W}$. Efficiency is $\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\% = \\frac{880}{1100} \\times 100\\% = 80\\%$."
    },
    {
        "id": "ce_eep_36",
        "subTopic": "Electrical energy and power",
        "question": "In the motor of the previous question, the power lost as heat inside the motor windings is:",
        "options": [
            "$220\\text{ W}$",
            "$110\\text{ W}$",
            "$440\\text{ W}$",
            "$88\\text{ W}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$P_{lost} = P_{in} - P_{out} = 1100\\text{ W} - 880\\text{ W} = 220\\text{ W}$."
    },
    {
        "id": "ce_eep_37",
        "subTopic": "Electrical energy and power",
        "question": "A battery of EMF $\\mathcal{E}$ is connected to a resistance $R$. The power dissipated in the resistor is $P$. When a second identical resistor is connected in parallel with $R$, the power dissipated in the external circuit (neglecting internal resistance) is:",
        "options": [
            "$2P$",
            "$P/2$",
            "$4P$",
            "$P$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Initially, $P = \\mathcal{E}^2 / R$. With two identical resistors in parallel, $R_{eq} = R/2$. Total power is $P' = \\frac{\\mathcal{E}^2}{R/2} = 2 \\frac{\\mathcal{E}^2}{R} = 2P$."
    },
    {
        "id": "ce_eep_38",
        "subTopic": "Electrical energy and power",
        "question": "If the second identical resistor is connected in series with $R$ instead, the power dissipated in the circuit (with zero internal resistance) is:",
        "options": [
            "$P/2$",
            "$2P$",
            "$P/4$",
            "$4P$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In series, $R_{eq} = 2R$. Power is $P' = \\frac{\\mathcal{E}^2}{2R} = P/2$."
    },
    {
        "id": "ce_eep_39",
        "subTopic": "Electrical energy and power",
        "question": "An electric tea-kettle has two heating coils. When one coil is used, water boils in $t_1 = 15\\text{ minutes}$, and when the other is used, it boils in $t_2 = 30\\text{ minutes}$. When connected in series, the boiling time is:",
        "options": [
            "$45\\text{ minutes}$",
            "$10\\text{ minutes}$",
            "$22.5\\text{ minutes}$",
            "$50\\text{ minutes}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In series, $t_s = t_1 + t_2 = 15 + 30 = 45\\text{ minutes}$."
    },
    {
        "id": "ce_eep_40",
        "subTopic": "Electrical energy and power",
        "question": "For the same tea-kettle, when the two coils are connected in parallel, the boiling time is:",
        "options": [
            "$10\\text{ minutes}$",
            "$45\\text{ minutes}$",
            "$20\\text{ minutes}$",
            "$7.5\\text{ minutes}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In parallel, $t_p = \\frac{t_1 t_2}{t_1 + t_2} = \\frac{15 \\times 30}{15 + 30} = \\frac{450}{45} = 10\\text{ minutes}$."
    },
    {
        "id": "ce_eep_41",
        "subTopic": "Electrical energy and power",
        "question": "A resistor of resistance $R$ carries a current that increases linearly with time as $I(t) = k t$. The total thermal energy generated from $t = 0$ to $t = T$ is:",
        "options": [
            "$\\frac{1}{3} k^2 R T^3$",
            "$\\frac{1}{2} k^2 R T^2$",
            "$k^2 R T^3$",
            "$\\frac{1}{4} k^2 R T^3$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$H = \\int_0^T I(t)^2 R dt = \\int_0^T (k^2 t^2 R) dt = k^2 R \\left[\\frac{t^3}{3}\\right]_0^T = \\frac{1}{3} k^2 R T^3$."
    },
    {
        "id": "ce_eep_42",
        "subTopic": "Electrical energy and power",
        "question": "Two electric bulbs rated $220\\text{ V}-60\\text{ W}$ and $220\\text{ V}-100\\text{ W}$ are connected in series to a $220\\text{ V}$ line. The total power consumed by both bulbs together is:",
        "options": [
            "$37.5\\text{ W}$",
            "$160\\text{ W}$",
            "$80\\text{ W}$",
            "$40\\text{ W}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$P_{eq} = \\frac{P_1 P_2}{P_1 + P_2} = \\frac{60 \\times 100}{60 + 100} = \\frac{6000}{160} = 37.5\\text{ W}$."
    },
    {
        "id": "ce_eep_43",
        "subTopic": "Electrical energy and power",
        "question": "A heater coil is rated $220\\text{ V}, 100\\text{ W}$. If it is cut into two equal parts and both parts are connected in parallel across $220\\text{ V}$, the total power consumed is:",
        "options": [
            "$400\\text{ W}$",
            "$200\\text{ W}$",
            "$100\\text{ W}$",
            "$50\\text{ W}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Each half has resistance $R/2$. When two halves of resistance $R/2$ are in parallel, $R_{eq} = (R/2)/2 = R/4$. Total power is $P' = \\frac{V^2}{R/4} = 4 \\frac{V^2}{R} = 4 \\times 100 = 400\\text{ W}$."
    },
    {
        "id": "ce_eep_44",
        "subTopic": "Electrical energy and power",
        "question": "Which of the following units is NOT a unit of electrical energy?",
        "options": [
            "$\\text{Watt}/\\text{second}$",
            "$\\text{Kilowatt-hour}$",
            "$\\text{Joule}$",
            "$\\text{Watt-second}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Energy is $\\text{Power} \\times \\text{Time}$. $\\text{Watt-second} = \\text{Joule}$ and $\\text{kWh}$ are units of energy. $\\text{Watt}/\\text{second}$ has dimensions of rate of change of power ($[\\text{P}]/[\\text{T}]$), not energy."
    },
    {
        "id": "ce_eep_45",
        "subTopic": "Electrical energy and power",
        "question": "A current of $2\\text{ A}$ flowing through a resistor produces $T$ joules of heat in $5\\text{ seconds}$. If the current is doubled to $4\\text{ A}$, the heat produced in $10\\text{ seconds}$ will be:",
        "options": [
            "$8T$",
            "$4T$",
            "$2T$",
            "$16T$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$H_1 = I_1^2 R t_1 = (2)^2 R (5) = 20R = T$. For the second case, $H_2 = I_2^2 R t_2 = (4)^2 R (10) = 160R$. Therefore $H_2 = 8(20R) = 8T$."
    }
]

if __name__ == "__main__":
    out_dir = os.path.dirname(__file__)
    out_path = os.path.join(out_dir, "ce_batch2.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(part2_questions, f, indent=2)

    res = [q for q in part2_questions if q["subTopic"] == "Resistivity"]
    eep = [q for q in part2_questions if q["subTopic"] == "Electrical energy and power"]
    print(f"Resistivity questions: {len(res)}")
    print(f"Electrical energy and power questions: {len(eep)}")
    print(f"Generated {len(part2_questions)} MCQs for batch 2 saved to {out_path}")
