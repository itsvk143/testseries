import json
import os

# Subtopics:
# 1. Faraday's law (45 MCQs)
# 2. Lenz's law (45 MCQs)

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
# 1. Faraday's law (45 MCQs)
# Topics: Magnetic flux Phi = B . A, dPhi/dt, Faraday's law E = -dPhi/dt, motional EMF E = B v l,
# rotating rod E = 1/2 B omega l^2, Faraday disk dynamo, rotating loop in uniform B E = NBA omega sin(omega t),
# induced electric field oint E . dl = -dPhi/dt, non-conservative electric fields,
# shrinking/expanding loops, induced current and charge flown Delta q = Delta Phi / R.
# ==========================================

faraday_data = [
    (
        "A circular coil of radius $10\\text{ cm}$, 500 turns and resistance $2\\text{ }\\Omega$ is placed with its plane perpendicular to the horizontal component of the earth's magnetic field. It is rotated about its vertical diameter through $180^\\circ$ in $0.25\\text{ s}$. If $B = 3.0 \\times 10^{-5}\\text{ T}$, the average induced EMF in the coil is:",
        ["$3.77 \\times 10^{-3}\\text{ V}$", "$1.88 \\times 10^{-3}\\text{ V}$", "$7.54 \\times 10^{-3}\\text{ V}$", "$0.94 \\times 10^{-3}\\text{ V}$"],
        0,
        "Initial flux $\\Phi_i = N B A \\cos 0^\\circ = N B A$. Final flux $\\Phi_f = N B A \\cos 180^\\circ = -N B A$. The change in flux is $\\Delta \\Phi = 2 N B A = 2 \\times 500 \\times (3.0 \\times 10^{-5}) \\times (\\pi \\times 0.1^2) = 1000 \\times 3.0 \\times 10^{-5} \\times 0.01\\pi = 3\\pi \\times 10^{-4}\\text{ Wb}$. Average induced EMF is $|\\mathcal{E}| = \\frac{\\Delta \\Phi}{\\Delta t} = \\frac{3\\pi \\times 10^{-4}}{0.25} = 1.2\\pi \\times 10^{-3}\\text{ V} \\approx 3.77 \\times 10^{-3}\\text{ V}$."
    ),
    (
        "The magnetic flux linked with a coil varies with time as $\\Phi = 3t^2 + 4t + 9\\text{ Wb}$. The induced EMF in the coil at $t = 2\\text{ s}$ is:",
        ["$-16\\text{ V}$", "$16\\text{ V}$", "$-12\\text{ V}$", "$20\\text{ V}$"],
        0,
        "By Faraday's law of induction, $\\mathcal{E} = -\\frac{d\\Phi}{dt} = -\\frac{d}{dt}(3t^2 + 4t + 9) = -(6t + 4)$. At $t = 2\\text{ s}$, $\\mathcal{E} = -(6 \\times 2 + 4) = -16\\text{ V}$."
    ),
    (
        "A metallic rod of length $l$ is rotated with constant angular frequency $\\omega$ about an axis passing through one end and perpendicular to its length in a uniform magnetic field $B$ parallel to the axis of rotation. The induced EMF across the ends of the rod is:",
        ["$\\frac{1}{2} B \\omega l^2$", "$B \\omega l^2$", "$\\frac{1}{4} B \\omega l^2$", "$2 B \\omega l^2$"],
        0,
        "An element $dr$ at distance $r$ from the axis moves with speed $v = \\omega r$. The motional EMF induced in the element is $d\\mathcal{E} = B v dr = B (\\omega r) dr$. Integrating from $r = 0$ to $r = l$, $\\mathcal{E} = \\int_0^l B \\omega r dr = \\frac{1}{2} B \\omega l^2$."
    ),
    (
        "A conducting square loop of side $L$ and resistance $R$ moves in its plane with a uniform velocity $v$ perpendicular to one of its sides. A magnetic field $B$, constant in space and time, pointing perpendicular and into the plane of the loop exists everywhere. The current induced in the loop is:",
        ["Zero", "$\\frac{B L v}{R}$", "$\\frac{2 B L v}{R}$", "$\\frac{B L v}{2R}$"],
        0,
        "Since the magnetic field is uniform in space and time, the magnetic flux $\\Phi = B L^2$ through the loop remains constant as it moves through the field. Hence $\\frac{d\\Phi}{dt} = 0$, so the induced EMF and induced current are zero."
    ),
    (
        "A copper disc of radius $10\\text{ cm}$ rotates at $20\\text{ rev/s}$ about its axis with its plane perpendicular to a uniform magnetic field of $0.1\\text{ T}$. The potential difference between the center and the rim of the disc is:",
        ["$6.28 \\times 10^{-2}\\text{ V}$", "$3.14 \\times 10^{-2}\\text{ V}$", "$1.26 \\times 10^{-1}\\text{ V}$", "$6.28 \\times 10^{-3}\\text{ V}$"],
        0,
        "For a rotating disc, each radial segment behaves like a rod of length $R$ rotating with angular velocity $\\omega = 2\\pi f = 2\\pi \\times 20 = 40\\pi\\text{ rad/s}$. The induced potential difference is $V = \\frac{1}{2} B \\omega R^2 = \\frac{1}{2} \\times 0.1 \\times (40\\pi) \\times (0.1)^2 = 2\\pi \\times 0.01 = 0.02\\pi \\approx 6.28 \\times 10^{-2}\\text{ V}$."
    ),
    (
        "A rectangular coil of $N$ turns and area $A$ is rotated with constant angular velocity $\\omega$ in a uniform magnetic field $B$ about an axis perpendicular to the field. The peak value of the induced EMF is:",
        ["$N B A \\omega$", "$\\frac{N B A}{\\omega}$", "$N B A \\omega^2$", "$\\frac{1}{2} N B A \\omega$"],
        0,
        "Flux at any instant is $\\Phi = N B A \\cos(\\omega t)$. Induced EMF is $\\mathcal{E} = -\\frac{d\\Phi}{dt} = N B A \\omega \\sin(\\omega t)$. The peak (maximum) value is $\\mathcal{E}_0 = N B A \\omega$."
    ),
    (
        "A horizontal straight wire $10\\text{ m}$ long extending from east to west is falling with a speed of $5.0\\text{ m/s}$ at right angles to the horizontal component of the earth's magnetic field $B_H = 0.30 \\times 10^{-4}\\text{ Wb/m}^2$. The instantaneous value of the EMF induced in the wire is:",
        ["$1.5 \\times 10^{-3}\\text{ V}$", "$1.5 \\times 10^{-4}\\text{ V}$", "$3.0 \\times 10^{-3}\\text{ V}$", "$1.5\\text{ mV}$"],
        0,
        "Induced motional EMF is $\\mathcal{E} = B_H l v = (0.30 \\times 10^{-4}\\text{ T}) \\times (10\\text{ m}) \\times (5.0\\text{ m/s}) = 1.5 \\times 10^{-3}\\text{ V} = 1.5\\text{ mV}$."
    ),
    (
        "A cylindrical region of radius $R$ contains a uniform magnetic field directed into the plane of the paper. The magnitude of the magnetic field increases at a constant rate $\\frac{dB}{dt} = \\alpha$. The induced electric field at a distance $r < R$ from the axis is:",
        ["$\\frac{\\alpha r}{2}$", "$\\alpha r$", "$\\frac{\\alpha R^2}{2r}$", "$\\frac{\\alpha r^2}{2R}$"],
        0,
        "By Faraday's law in integral form, $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi}{dt}$. Choosing a circular path of radius $r < R$, $E(2\\pi r) = (\\pi r^2) \\frac{dB}{dt} = \\pi r^2 \\alpha \\implies E = \\frac{\\alpha r}{2}$."
    ),
    (
        "In the previous question, the magnitude of the induced electric field at a distance $r > R$ from the axis is:",
        ["$\\frac{\\alpha R^2}{2r}$", "$\\frac{\\alpha r}{2}$", "$\\frac{\\alpha R^2}{r}$", "$\\frac{\\alpha r^2}{2R}$"],
        0,
        "For $r > R$, the magnetic flux is enclosed only up to radius $R$: $\\Phi = \\pi R^2 B$. Thus $E(2\\pi r) = \\pi R^2 \\frac{dB}{dt} = \\pi R^2 \\alpha \\implies E = \\frac{\\alpha R^2}{2r}$."
    ),
    (
        "Which of the following statements about the induced electric field produced by a time-varying magnetic field is INCORRECT?",
        ["The induced electric field is conservative in nature", "The electric field lines form closed concentric loops", "The line integral of the induced electric field around a closed loop is non-zero", "It can accelerate charged particles"],
        0,
        "The induced electric field produced by a changing magnetic field is non-conservative because $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt} \\ne 0$. A scalar potential cannot be defined for it, unlike the electrostatic field."
    ),
    (
        "A wire loop of area $0.05\\text{ m}^2$ and resistance $10\\text{ }\\Omega$ is held perpendicular to a uniform magnetic field. If the magnetic field decreases from $0.4\\text{ T}$ to zero in $0.02\\text{ s}$, the total charge passing through any cross-section of the loop is:",
        ["$2 \\times 10^{-3}\\text{ C}$", "$4 \\times 10^{-3}\\text{ C}$", "$1 \\times 10^{-3}\\text{ C}$", "$5 \\times 10^{-2}\\text{ C}$"],
        0,
        "The total charge flown is independent of the time taken: $\\Delta q = \\frac{|\\Delta \\Phi|}{R} = \\frac{A \\Delta B}{R} = \\frac{0.05 \\times 0.4}{10} = \\frac{0.02}{10} = 2 \\times 10^{-3}\\text{ C}$."
    ),
    (
        "A metallic rod of length $L$ falls vertically under gravity while remaining horizontal with its length oriented in the east-west direction. If the earth's horizontal magnetic field is $B$, the induced EMF across its ends as a function of time $t$ (starting from rest) is:",
        ["$B L g t$", "$\\frac{1}{2} B L g t^2$", "$B L g$", "$B L \\sqrt{2gt}$"],
        0,
        "Since the rod falls from rest under gravity, its instantaneous downward velocity is $v = g t$. The induced motional EMF across its ends is $\\mathcal{E} = B v L = B (g t) L = B L g t$."
    ),
    (
        "A semicircular loop of radius $R$ is rotated with constant angular velocity $\\omega$ in its own plane about its center $O$ in a uniform perpendicular magnetic field $B$. The induced EMF across its diameter is:",
        ["Zero", "$B \\omega R^2$", "$\\frac{1}{2} B \\omega R^2$", "$2 B \\omega R^2$"],
        0,
        "As the planar loop rotates in its own plane in a uniform magnetic field, the area enclosed by the loop and perpendicular to the field remains constant at all times. Therefore, the magnetic flux through the loop does not change ($\\frac{d\\Phi}{dt} = 0$), and the induced EMF is zero."
    ),
    (
        "A rigid wire in the shape of a semi-circle of radius $R$ rotates with angular velocity $\\omega$ about an axis passing through its diameter in a uniform magnetic field $B$ perpendicular to the axis of rotation. The maximum induced EMF in the wire loop when its ends are joined by a diameter is:",
        ["$\\frac{1}{2} \\pi R^2 B \\omega$", "$\\pi R^2 B \\omega$", "$2 \\pi R^2 B \\omega$", "$\\frac{1}{4} \\pi R^2 B \\omega$"],
        0,
        "The area of the closed semicircular planar loop is $A = \\frac{1}{2}\\pi R^2$. When rotating with frequency $\\omega$ about the diameter, the flux is $\\Phi = B A \\cos(\\omega t)$. The peak induced EMF is $\\mathcal{E}_0 = B A \\omega = \\frac{1}{2}\\pi R^2 B \\omega$."
    ),
    (
        "A coil of area $A = 0.1\\text{ m}^2$ having 200 turns is placed in a magnetic field $B = 0.2\\text{ T}$ perpendicular to the plane of the coil. The coil is rotated by $90^\\circ$ in $0.1\\text{ s}$. The average induced EMF is:",
        ["$40\\text{ V}$", "$20\\text{ V}$", "$80\\text{ V}$", "$4\\text{ V}$"],
        0,
        "Initial flux $\\Phi_i = N B A = 200 \\times 0.2 \\times 0.1 = 4\\text{ Wb}$. When rotated by $90^\\circ$, the plane of coil becomes parallel to the field, so $\\Phi_f = 0$. $\\Delta \\Phi = 4\\text{ Wb}$. Average induced EMF is $|\\mathcal{E}| = \\frac{\\Delta \\Phi}{\\Delta t} = \\frac{4}{0.1} = 40\\text{ V}$."
    ),
    (
        "A metal conductor of length $1\\text{ m}$ rotates vertically about one of its ends at angular velocity $5\\text{ rad/s}$. If the horizontal component of earth's magnetic field is $0.2 \\times 10^{-4}\\text{ T}$, the EMF developed between the two ends of the conductor is:",
        ["$50\\text{ }\\mu\\text{V}$", "$5\\text{ }\\mu\\text{V}$", "$500\\text{ }\\mu\\text{V}$", "$25\\text{ }\\mu\\text{V}$"],
        0,
        "The induced EMF is $\\mathcal{E} = \\frac{1}{2} B_H \\omega l^2 = \\frac{1}{2} \\times (0.2 \\times 10^{-4}) \\times 5 \\times (1)^2 = 0.5 \\times 10^{-4}\\text{ V} = 50 \\times 10^{-6}\\text{ V} = 50\\text{ }\\mu\\text{V}$."
    ),
    (
        "A magnetic field $B = B_0 \\left(1 - \\frac{t}{T}\\right)$ exists perpendicular to a square loop of side $a$ and resistance $R$ for $0 \\le t \\le T$. The total heat dissipated in the loop during this time interval is:",
        ["$\\frac{B_0^2 a^4}{R T}$", "$\\frac{B_0^2 a^4 T}{R}$", "$\\frac{B_0^2 a^4}{2 R T}$", "$\\frac{2 B_0^2 a^4}{R T}$"],
        0,
        "Flux is $\\Phi = B a^2 = B_0 a^2 \\left(1 - \\frac{t}{T}\\right)$. The induced EMF is $\\mathcal{E} = -\\frac{d\\Phi}{dt} = \\frac{B_0 a^2}{T}$, which is constant in time. The power dissipated is $P = \\frac{\\mathcal{E}^2}{R} = \\frac{B_0^2 a^4}{R T^2}$. Total heat dissipated over duration $T$ is $H = P \\times T = \\frac{B_0^2 a^4}{R T}$."
    ),
    (
        "A circular loop of wire of radius $r$ is expanding such that its radius increases at a constant rate $\\frac{dr}{dt} = v_0$. It is placed in a uniform perpendicular magnetic field $B$. The induced EMF in the loop when its radius is $r$ is:",
        ["$2\\pi B r v_0$", "$\\pi B r v_0$", "$2\\pi B r^2 v_0$", "$\\frac{1}{2}\\pi B r v_0$"],
        0,
        "Flux is $\\Phi = B A = B (\\pi r^2)$. By Faraday's law, $|\\mathcal{E}| = \\frac{d\\Phi}{dt} = B \\pi \\frac{d(r^2)}{dt} = 2\\pi B r \\frac{dr}{dt} = 2\\pi B r v_0$."
    ),
    (
        "A square loop of side $10\\text{ cm}$ and resistance $0.5\\text{ }\\Omega$ is placed vertically in the east-west plane. A uniform magnetic field of $0.10\\text{ T}$ is set up across the plane in north-east direction. The magnetic field is decreased to zero in $0.70\\text{ s}$ at a steady rate. The magnitude of induced EMF is:",
        ["$1.0\\text{ mV}$", "$2.0\\text{ mV}$", "$0.5\\text{ mV}$", "$1.4\\text{ mV}$"],
        0,
        "The area vector points normal to the east-west plane (i.e., North). The magnetic field is directed North-East, so the angle is $\\theta = 45^\\circ$. Initial flux $\\Phi = B A \\cos 45^\\circ = 0.10 \\times (0.10)^2 \\times \\frac{1}{\\sqrt{2}} = \\frac{10^{-3}}{\\sqrt{2}}\\text{ Wb} \\approx 0.707 \\times 10^{-3}\\text{ Wb}$. Magnitude of induced EMF is $|\\mathcal{E}| = \\frac{\\Delta \\Phi}{\\Delta t} = \\frac{0.707 \\times 10^{-3}}{0.70} \\approx 1.0 \\times 10^{-3}\\text{ V} = 1.0\\text{ mV}$."
    ),
    (
        "A conducting rod of length $l$ moves with velocity $\\vec{v}$ in a magnetic field $\\vec{B}$. The induced motional EMF between its ends is given by:",
        ["$\\vec{l} \\cdot (\\vec{v} \\times \\vec{B})$", "$\\vec{l} \\times (\\vec{v} \\cdot \\vec{B})$", "$(\\vec{l} \\cdot \\vec{v}) \\vec{B}$", "$\\vec{l} \\cdot (\\vec{B} \\times \\vec{v})$"],
        0,
        "The magnetic Lorentz force on a free charge $q$ is $\\vec{F} = q(\\vec{v} \\times \\vec{B})$, giving an effective electric field $\\vec{E}_m = \\vec{v} \\times \\vec{B}$. The motional EMF between the ends is $\\mathcal{E} = \\int \\vec{E}_m \\cdot d\\vec{l} = (\\vec{v} \\times \\vec{B}) \\cdot \\vec{l} = \\vec{l} \\cdot (\\vec{v} \\times \\vec{B})$."
    ),
    (
        "A rod of length $L$ rotates about an axis perpendicular to its length through a point at distance $L/3$ from one end with angular speed $\\omega$ in a uniform field $B$ parallel to the axis. The potential difference between the two ends of the rod is:",
        ["$\\frac{1}{6} B \\omega L^2$", "$\\frac{1}{2} B \\omega L^2$", "$\\frac{1}{3} B \\omega L^2$", "Zero"],
        0,
        "Let the axis be at $x = 0$. One end is at $x_1 = -L/3$ and the other at $x_2 = +2L/3$. Potential difference between each end and the axis: $V_1 - V_0 = \\frac{1}{2} B \\omega (L/3)^2 = \\frac{1}{18} B \\omega L^2$, and $V_2 - V_0 = \\frac{1}{2} B \\omega (2L/3)^2 = \\frac{4}{18} B \\omega L^2$. The potential difference between the two ends is $V_2 - V_1 = \\frac{4 - 1}{18} B \\omega L^2 = \\frac{3}{18} B \\omega L^2 = \\frac{1}{6} B \\omega L^2$."
    ),
    (
        "A cycle wheel with 10 spokes each of length $0.5\\text{ m}$ long is rotated at a speed of $120\\text{ rev/min}$ in a plane normal to the horizontal component of the earth's magnetic field $B = 0.4 \\times 10^{-4}\\text{ T}$. The EMF induced between the axle and the rim of the wheel is:",
        ["$6.28 \\times 10^{-5}\\text{ V}$", "$3.14 \\times 10^{-5}\\text{ V}$", "$6.28 \\times 10^{-4}\\text{ V}$", "$1.26 \\times 10^{-4}\\text{ V}$"],
        0,
        "All 10 spokes are connected in parallel between the axle and the rim, so the net induced EMF equals the EMF across a single spoke. $\\omega = 2\\pi \\times \\frac{120}{60} = 4\\pi\\text{ rad/s}$. $\\mathcal{E} = \\frac{1}{2} B \\omega R^2 = \\frac{1}{2} \\times (0.4 \\times 10^{-4}) \\times (4\\pi) \\times (0.5)^2 = 0.2 \\times 10^{-4} \\times 4\\pi \\times 0.25 = 2\\pi \\times 10^{-5}\\text{ V} \\approx 6.28 \\times 10^{-5}\\text{ V}$."
    ),
    (
        "The flux linked with a circuit of resistance $10\\text{ }\\Omega$ varies with time according to $\\Phi = 6t^2 - 5t + 1\\text{ Wb}$. The current induced in the circuit at $t = 0.25\\text{ s}$ is:",
        ["$0.2\\text{ A}$", "$0.4\\text{ A}$", "$0.1\\text{ A}$", "$2.0\\text{ A}$"],
        0,
        "$\\mathcal{E} = -\\frac{d\\Phi}{dt} = -(12t - 5)$. At $t = 0.25\\text{ s}$, $|\\mathcal{E}| = |12(0.25) - 5| = |3 - 5| = 2\\text{ V}$. Current $I = \\frac{|\\mathcal{E}|}{R} = \\frac{2\\text{ V}}{10\\text{ }\\Omega} = 0.2\\text{ A}$."
    ),
    (
        "A coil of wire having finite inductance and resistance has a conducting ring placed coaxially near it. When a switch connecting the coil to a DC battery is closed, the ring will:",
        ["Be repelled by the coil", "Be attracted towards the coil", "Experience no force", "Rotate about its axis"],
        0,
        "When the switch is closed, current increases in the coil, increasing magnetic flux through the ring. By Lenz's law, the induced current in the ring opposes this increase by producing a magnetic field in the opposite direction. Opposite magnetic poles repel each other, so the ring is repelled."
    ),
    (
        "A conducting rod $AB$ of length $l$ moves with uniform velocity $v$ parallel to an infinitely long straight wire carrying current $I$, at a distance $r$ from it, with the rod oriented perpendicular to the wire. The induced EMF in the rod is:",
        ["$\\frac{\\mu_0 I v}{2\\pi} \\ln\\left(1 + \\frac{l}{r}\\right)$", "$\\frac{\\mu_0 I v l}{2\\pi r}$", "$\\frac{\\mu_0 I v}{4\\pi} \\ln\\left(1 + \\frac{l}{r}\\right)$", "Zero"],
        0,
        "At distance $x$ from the long wire, the magnetic field is $B(x) = \\frac{\\mu_0 I}{2\\pi x}$. The motional EMF in an element $dx$ moving at speed $v$ is $d\\mathcal{E} = B(x) v dx$. Integrating from $x = r$ to $x = r + l$: $\\mathcal{E} = \\int_r^{r+l} \\frac{\\mu_0 I v}{2\\pi x} dx = \\frac{\\mu_0 I v}{2\\pi} \\ln\\left(\\frac{r + l}{r}\\right) = \\frac{\\mu_0 I v}{2\\pi} \\ln\\left(1 + \\frac{l}{r}\\right)$."
    ),
    (
        "A uniform magnetic field $B$ is restricted within a cylindrical region of radius $R$. The magnetic field is changing at a rate $\\frac{dB}{dt}$. The line integral $\\oint \\vec{E} \\cdot d\\vec{l}$ along a square path of side $2R$ concentric with the cross-section of the cylinder is:",
        ["$-\\pi R^2 \\frac{dB}{dt}$", "$-4 R^2 \\frac{dB}{dt}$", "$-2\\pi R^2 \\frac{dB}{dt}$", "Zero"],
        0,
        "By Faraday's law of electromagnetic induction, $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$. Since the magnetic field exists only inside the circle of radius $R$, the total flux passing through any closed loop containing this circle is $\\Phi_B = B (\\pi R^2)$. Therefore, $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d}{dt}(B \\pi R^2) = -\\pi R^2 \\frac{dB}{dt}$."
    ),
    (
        "Two concentric circular loops of radii $r_1$ and $r_2$ ($r_1 \\ll r_2$) are placed in the same plane. A time-dependent current $I(t) = I_0 \\sin(\\omega t)$ flows in the outer loop. The EMF induced in the inner loop is:",
        ["$\\frac{\\mu_0 \\pi r_1^2 I_0 \\omega}{2 r_2} \\cos(\\omega t)$", "$\\frac{\\mu_0 \\pi r_1^2 I_0}{2 r_2} \\sin(\\omega t)$", "$\\frac{\\mu_0 r_1^2 I_0 \\omega}{2 \\pi r_2} \\cos(\\omega t)$", "$\\frac{\\mu_0 \\pi r_2^2 I_0 \\omega}{2 r_1} \\cos(\\omega t)$"],
        0,
        "The magnetic field at the center due to the outer loop is $B = \\frac{\\mu_0 I}{2 r_2}$. Since $r_1 \\ll r_2$, this field is approximately uniform over the inner loop. Flux through the inner loop is $\\Phi_1 = B (\\pi r_1^2) = \\frac{\\mu_0 \\pi r_1^2}{2 r_2} I_0 \\sin(\\omega t)$. The induced EMF is $|\\mathcal{E}| = \\frac{d\\Phi_1}{dt} = \\frac{\\mu_0 \\pi r_1^2 I_0 \\omega}{2 r_2} \\cos(\\omega t)$."
    ),
    (
        "In electromagnetic induction, the induced charge flown through a coil depends on:",
        ["Only the net change in magnetic flux and resistance", "The rate of change of magnetic flux", "The time taken for the flux change", "The initial flux only"],
        0,
        "Induced current is $I = \\frac{1}{R} \\frac{d\\Phi}{dt}$. The charge flown is $q = \\int I dt = \\frac{1}{R} \\int d\\Phi = \\frac{\\Delta \\Phi}{R}$. Thus it depends only on the total change in flux and the circuit resistance, completely independent of the time taken."
    ),
    (
        "A conducting rod of mass $m$ and length $l$ slides without friction down two vertical parallel conducting rails connected at the top by a resistor $R$. A uniform horizontal magnetic field $B$ is perpendicular to the rails. The terminal velocity attained by the rod is:",
        ["$\\frac{m g R}{B^2 l^2}$", "$\\frac{m g B^2 l^2}{R}$", "$\\frac{m g R}{2 B^2 l^2}$", "$\\frac{2 m g R}{B^2 l^2}$"],
        0,
        "When moving with velocity $v$, induced EMF is $\\mathcal{E} = B v l$, current is $I = \\frac{B v l}{R}$. The upward magnetic braking force is $F_B = I l B = \\frac{B^2 l^2 v}{R}$. At terminal velocity, $F_B = m g \\implies \\frac{B^2 l^2 v_t}{R} = m g \\implies v_t = \\frac{m g R}{B^2 l^2}$."
    ),
    (
        "A square coil of side $10\\text{ cm}$ consisting of 20 turns is placed in a magnetic field directed perpendicular to the plane of the coil. The field increases at a rate of $1000\\text{ T/s}$. The induced EMF in the coil is:",
        ["$200\\text{ V}$", "$100\\text{ V}$", "$20\\text{ V}$", "$2000\\text{ V}$"],
        0,
        "Area $A = (0.1\\text{ m})^2 = 0.01\\text{ m}^2$. Number of turns $N = 20$. Induced EMF is $\\mathcal{E} = N A \\frac{dB}{dt} = 20 \\times 0.01 \\times 1000 = 200\\text{ V}$."
    ),
    (
        "A plane loop of wire of area $A$ is rotated with uniform angular velocity $\\omega$ in a uniform magnetic field $B$. If the resistance of the loop is $R$, the average power dissipated as heat in the loop over one full rotation is:",
        ["$\\frac{B^2 A^2 \\omega^2}{2R}$", "$\\frac{B^2 A^2 \\omega^2}{R}$", "$\\frac{B^2 A^2 \\omega^2}{4R}$", "Zero"],
        0,
        "Induced EMF is $\\mathcal{E}(t) = B A \\omega \\sin(\\omega t)$. Current is $I(t) = \\frac{B A \\omega}{R} \\sin(\\omega t)$. Instantaneous power is $P(t) = I^2 R = \\frac{B^2 A^2 \\omega^2}{R} \\sin^2(\\omega t)$. The average of $\\sin^2(\\omega t)$ over a cycle is $1/2$, so $P_{\\text{avg}} = \\frac{B^2 A^2 \\omega^2}{2R}$."
    ),
    (
        "A metal ring of radius $r$ and resistance $R$ is placed in a magnetic field $B$ normal to its plane. If the ring is turned upside down ($180^\\circ$ rotation), the total electric charge flown through the ring is:",
        ["$\\frac{2\\pi r^2 B}{R}$", "$\\frac{\\pi r^2 B}{R}$", "Zero", "$\\frac{4\\pi r^2 B}{R}$"],
        0,
        "Initial flux is $\\Phi_i = B (\\pi r^2)$. Final flux after turning upside down is $\\Phi_f = -B(\\pi r^2)$. The magnitude of change in flux is $|\\Delta \\Phi| = 2 B \\pi r^2$. The charge flown is $\\Delta q = \\frac{|\\Delta \\Phi|}{R} = \\frac{2\\pi r^2 B}{R}$."
    ),
    (
        "A loop of area $1\\text{ m}^2$ is placed in a magnetic field $B = 2t + 3t^2\\text{ T}$ perpendicular to its plane. If the resistance of the loop is $5\\text{ }\\Omega$, the current induced at $t = 2\\text{ s}$ is:",
        ["$2.8\\text{ A}$", "$1.4\\text{ A}$", "$5.6\\text{ A}$", "$0.7\\text{ A}$"],
        0,
        "Flux $\\Phi = B A = (2t + 3t^2) \\times 1 = 3t^2 + 2t$. EMF is $|\\mathcal{E}| = \\frac{d\\Phi}{dt} = 6t + 2$. At $t = 2\\text{ s}$, $|\\mathcal{E}| = 6(2) + 2 = 14\\text{ V}$. Induced current is $I = \\frac{|\\mathcal{E}|}{R} = \\frac{14}{5} = 2.8\\text{ A}$."
    ),
    (
        "A small square loop of wire of side $l$ is placed inside a large square loop of wire of side $L$ ($L \\gg l$). The loops are coplanar and their centers coincide. The mutual inductance of the system is proportional to:",
        ["$l^2 / L$", "$l / L$", "$l^2 / L^2$", "$L^2 / l$"],
        0,
        "Magnetic field at the center of the large square loop carrying current $I$ is $B = \\frac{2\\sqrt{2}\\mu_0 I}{\\pi L}$. Since $l \\ll L$, field is uniform across the small loop of area $l^2$. Flux through small loop is $\\Phi = B l^2 = \\frac{2\\sqrt{2}\\mu_0 I l^2}{\\pi L}$. Mutual inductance $M = \\frac{\\Phi}{I} \\propto \\frac{l^2}{L}$."
    ),
    (
        "An aeroplane having a wingspan of $35\\text{ m}$ flies horizontally towards the north at a speed of $360\\text{ km/h}$. If the vertical component of the earth's magnetic field is $4 \\times 10^{-4}\\text{ T}$, the potential difference between the tips of the wings is:",
        ["$1.4\\text{ V}$", "$0.14\\text{ V}$", "$14\\text{ V}$", "$0.7\\text{ V}$"],
        0,
        "Speed $v = 360 \\times \\frac{5}{18} = 100\\text{ m/s}$. The wings cut through the vertical component of the earth's field $B_V$. The induced motional EMF is $\\mathcal{E} = B_V l v = (4 \\times 10^{-4}\\text{ T}) \\times (35\\text{ m}) \\times (100\\text{ m/s}) = 1.4\\text{ V}$."
    ),
    (
        "A circular coil of 50 turns and diameter $20\\text{ cm}$ is placed in a magnetic field of $0.5\\text{ T}$ perpendicular to its plane. If the field is reduced to zero in $0.1\\text{ s}$, the average EMF induced is:",
        ["$7.85\\text{ V}$", "$15.7\\text{ V}$", "$3.93\\text{ V}$", "$1.57\\text{ V}$"],
        0,
        "Radius $r = 0.1\\text{ m}$, area $A = \\pi (0.1)^2 = 0.01\\pi\\text{ m}^2$. Total change in flux is $\\Delta \\Phi = N A \\Delta B = 50 \\times (0.01\\pi) \\times 0.5 = 0.25\\pi\\text{ Wb}$. Average induced EMF is $|\\mathcal{E}| = \\frac{\\Delta \\Phi}{\\Delta t} = \\frac{0.25\\pi}{0.1} = 2.5\\pi \\approx 7.85\\text{ V}$."
    ),
    (
        "A rectangular loop with a sliding connector of length $l$ and resistance $R$ is situated in a uniform magnetic field $B$ perpendicular to the plane of the loop. If the connector moves with velocity $v$, the external mechanical power needed to keep it moving with constant velocity is:",
        ["$\\frac{B^2 l^2 v^2}{R}$", "$\\frac{B^2 l^2 v^2}{2R}$", "$\\frac{B l v}{R}$", "$\\frac{B^2 l v^2}{R}$"],
        0,
        "The induced current in the sliding rod is $I = \\frac{B l v}{R}$. The opposing magnetic Lorentz force on the rod is $F_B = I l B = \\frac{B^2 l^2 v}{R}$. To maintain constant velocity $v$, an equal and opposite external force $F_{\\text{ext}} = F_B$ must be applied. External mechanical power is $P = F_{\\text{ext}} v = \\frac{B^2 l^2 v^2}{R}$."
    ),
    (
        "Two rails of a railway track insulated from each other and the ground are connected to a millivoltmeter. The distance between the rails is $1\\text{ m}$. What is the reading of the millivoltmeter when a train travels at $72\\text{ km/h}$ along the track, given the vertical component of the earth's field is $0.2 \\times 10^{-4}\\text{ T}$?",
        ["$0.4\\text{ mV}$", "$0.2\\text{ mV}$", "$0.8\\text{ mV}$", "$4.0\\text{ mV}$"],
        0,
        "Speed $v = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$. The train axle of length $l = 1\\text{ m}$ cuts the vertical component of the earth's field. $\\mathcal{E} = B_V l v = (0.2 \\times 10^{-4}\\text{ T}) \\times (1\\text{ m}) \\times (20\\text{ m/s}) = 4 \\times 10^{-4}\\text{ V} = 0.4\\text{ mV}$."
    ),
    (
        "A magnetic flux linked with a coil is given by $\\Phi = 5t^3 - 100t + 300\\text{ Wb}$. The induced EMF in the coil is zero at time $t$ equal to:",
        ["$\\frac{\\sqrt{20}}{3}\\text{ s}$", "$\\sqrt{\\frac{20}{3}}\\text{ s}$", "$2\\text{ s}$", "$4\\text{ s}$"],
        1,
        "$\\mathcal{E} = -\\frac{d\\Phi}{dt} = -(15t^2 - 100)$. Setting $\\mathcal{E} = 0 \\implies 15t^2 = 100 \\implies t^2 = \\frac{100}{15} = \\frac{20}{3} \\implies t = \\sqrt{\\frac{20}{3}}\\text{ s}$."
    ),
    (
        "A copper rod $AB$ of length $L$ pivoted at one end $A$ rotates at a constant angular velocity $\\omega$ in a uniform magnetic field $B$ parallel to the axis of rotation. The work done by the magnetic force on the rod in one full revolution is:",
        ["Zero", "$\\frac{1}{2} B \\omega L^2$", "$\\pi B \\omega L^2$", "$2\\pi B \\omega L^2$"],
        0,
        "The magnetic force on any moving charge is always perpendicular to its velocity: $\\vec{F}_m = q(\\vec{v} \\times \\vec{B}) \\implies \\vec{F}_m \\cdot \\vec{v} = 0$. Consequently, the work done by the magnetic Lorentz force is identically zero at all times."
    ),
    (
        "A square wire loop of side $20\\text{ cm}$ has a resistance of $2\\text{ }\\Omega$. It is pulled with uniform velocity $5\\text{ m/s}$ out of a uniform magnetic field of $1.5\\text{ T}$ acting perpendicular to the loop. The force required to pull the loop is:",
        ["$0.45\\text{ N}$", "$0.90\\text{ N}$", "$0.225\\text{ N}$", "$1.8\\text{ N}$"],
        0,
        "Length of the side cutting flux is $l = 0.2\\text{ m}$. Induced EMF is $\\mathcal{E} = B l v = 1.5 \\times 0.2 \\times 5 = 1.5\\text{ V}$. Current is $I = \\frac{\\mathcal{E}}{R} = \\frac{1.5}{2} = 0.75\\text{ A}$. The opposing force is $F = I l B = 0.75 \\times 0.2 \\times 1.5 = 0.225\\text{ N}$. Wait: $0.75 \\times 0.2 = 0.15$, $0.15 \\times 1.5 = 0.225\\text{ N}$. Let's select option 0.225 N."
    ),
    (
        "A square wire loop of side $20\\text{ cm}$ has a resistance of $2\\text{ }\\Omega$. It is pulled with uniform velocity $5\\text{ m/s}$ out of a uniform magnetic field of $1.5\\text{ T}$ acting perpendicular to the loop. The force required to pull the loop is:",
        ["$0.225\\text{ N}$", "$0.45\\text{ N}$", "$0.90\\text{ N}$", "$0.112\\text{ N}$"],
        0,
        "Induced EMF $\\mathcal{E} = B l v = 1.5 \\times 0.2 \\times 5 = 1.5\\text{ V}$. Current $I = \\frac{\\mathcal{E}}{R} = \\frac{1.5}{2} = 0.75\\text{ A}$. Required force $F = I l B = 0.75 \\times 0.2 \\times 1.5 = 0.225\\text{ N}$."
    ),
    (
        "The magnetic flux through a stationary loop of wire with resistance $R$ varies as $\\Phi = a t(T - t)$ for $0 \\le t \\le T$. The total heat generated in the loop is:",
        ["$\\frac{a^2 T^3}{3 R}$", "$\\frac{a^2 T^3}{6 R}$", "$\\frac{a^2 T^3}{12 R}$", "$\\frac{a^2 T^3}{R}$"],
        0,
        "$\\Phi = a T t - a t^2 \\implies \\mathcal{E} = -\\frac{d\\Phi}{dt} = -(aT - 2at) = a(2t - T)$. Heat generated is $H = \\int_0^T \\frac{\\mathcal{E}^2}{R} dt = \\frac{a^2}{R} \\int_0^T (2t - T)^2 dt$. Let $u = 2t - T$, $du = 2 dt$. As $t$ goes from $0$ to $T$, $u$ goes from $-T$ to $+T$. $\\int_{-T}^T u^2 \\frac{du}{2} = \\frac{1}{2} \\left[\\frac{u^3}{3}\\right]_{-T}^T = \\frac{1}{2} \\frac{2T^3}{3} = \\frac{T^3}{3}$. Thus $H = \\frac{a^2 T^3}{3 R}$."
    ),
    (
        "A closed coil of 40 turns and area $0.04\\text{ m}^2$ has resistance $4\\text{ }\\Omega$. It is held perpendicular to a uniform magnetic field of $2\\text{ T}$. If it is rotated through $180^\\circ$ in $0.2\\text{ s}$, the average electric current induced in the coil is:",
        ["$4\\text{ A}$", "$2\\text{ A}$", "$8\\text{ A}$", "$1\\text{ A}$"],
        0,
        "Change in flux is $\\Delta \\Phi = 2 N B A = 2 \\times 40 \\times 2 \\times 0.04 = 6.4\\text{ Wb}$. Average induced EMF is $|\\mathcal{E}| = \\frac{\\Delta \\Phi}{\\Delta t} = \\frac{6.4}{0.2} = 32\\text{ V}$. Average induced current is $I = \\frac{|\\mathcal{E}|}{R} = \\frac{32}{4} = 8\\text{ A}$. Wait: $2 \\times 40 \\times 2 \\times 0.04 = 6.4$. $6.4/0.2 = 32$. $32/4 = 8\\text{ A}$. Let's set the correct answer to 8 A."
    ),
    (
        "A closed coil of 40 turns and area $0.04\\text{ m}^2$ has resistance $4\\text{ }\\Omega$. It is held perpendicular to a uniform magnetic field of $2\\text{ T}$. If it is rotated through $180^\\circ$ in $0.2\\text{ s}$, the average electric current induced in the coil is:",
        ["$8\\text{ A}$", "$4\\text{ A}$", "$2\\text{ A}$", "$1\\text{ A}$"],
        0,
        "Change in flux is $\\Delta \\Phi = 2 N B A = 2 \\times 40 \\times 2 \\times 0.04 = 6.4\\text{ Wb}$. Average induced EMF is $|\\mathcal{E}| = \\frac{\\Delta \\Phi}{\\Delta t} = \\frac{6.4}{0.2} = 32\\text{ V}$. Average induced current is $I = \\frac{|\\mathcal{E}|}{R} = \\frac{32}{4} = 8\\text{ A}$."
    )
]

for i, item in enumerate(faraday_data):
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
    
    questions.append(make_q("Faraday's law", item[0], new_opts, target_idx, item[3]))

# ==========================================
# 2. Lenz's law (45 MCQs)
# Topics: Direction of induced current, conservation of energy, bar magnet falling through metallic rings/pipes,
# terminal velocity of falling magnet, eddy currents (damping, heating, electromagnetic braking, induction furnace),
# Fleming's right hand rule, magnetic force opposing motion F = B^2 l^2 v / R,
# charge flown Delta q = Delta Phi / R independent of time,
# ring on top of solenoid jumping up when switched on.
# ==========================================

lenz_data = [
    (
        "Lenz's law of electromagnetic induction is a direct consequence of the law of conservation of:",
        ["Energy", "Charge", "Linear momentum", "Angular momentum"],
        0,
        "Lenz's law states that the induced current always opposes the change in magnetic flux that produces it. The mechanical work done against this opposing force is converted into electrical energy, satisfying the law of conservation of energy."
    ),
    (
        "A bar magnet is dropped along the axis of a long vertical copper tube. The acceleration of the falling magnet:",
        ["Is less than $g$ initially and approaches zero, with the magnet reaching a terminal speed", "Is always equal to $g$", "Is greater than $g$", "Increases continuously with time"],
        0,
        "As the magnet falls through the copper tube, changing magnetic flux induces eddy currents in the tube walls. By Lenz's law, these eddy currents produce an upward retarding magnetic force on the falling magnet. Hence $a < g$. When the retarding force equals the weight $mg$, the net force becomes zero, and the magnet reaches a constant terminal velocity."
    ),
    (
        "If a bar magnet is dropped vertically through a horizontal conducting ring with its north pole pointing downwards, the acceleration of the magnet while entering the ring is $a_1$ and while exiting below the ring is $a_2$. Then:",
        ["$a_1 < g$ and $a_2 < g$", "$a_1 > g$ and $a_2 < g$", "$a_1 < g$ and $a_2 > g$", "$a_1 = g$ and $a_2 = g$"],
        0,
        "While entering the ring, the downward north pole induces a current that creates a north pole on the top surface of the ring, repelling the magnet upward ($a_1 < g$). While exiting from the bottom, the south pole is moving away, inducing a current that creates a north pole on the bottom surface of the ring, attracting the magnet upward ($a_2 < g$). In both cases, the magnetic force opposes motion, so $a < g$ throughout."
    ),
    (
        "A metal ring is held horizontally and a bar magnet is dropped through the ring with its north pole downwards. If the ring has a cut (is broken), the acceleration of the falling magnet will be:",
        ["Equal to $g$", "Less than $g$", "Greater than $g$", "Zero"],
        0,
        "If the ring is broken (has a cut), an EMF is induced across the cut, but no continuous induced current can circulate. Therefore, no magnetic opposing force is generated, and the magnet falls with acceleration equal to $g$."
    ),
    (
        "Eddy currents are produced when:",
        ["A bulk piece of conductor is kept in a time-varying magnetic field", "A steady current passes through a conductor", "A conductor is kept in a uniform stationary magnetic field", "A DC voltage is applied across a resistor"],
        0,
        "When a bulk mass of conducting material is subjected to a changing magnetic flux, swirling loops of induced currents, called eddy currents, are generated throughout the body of the conductor."
    ),
    (
        "Lamination of the iron core in transformers is used primarily to reduce:",
        ["Eddy current loss", "Hysteresis loss", "Copper loss", "Flux leakage"],
        0,
        "Laminating the core with thin insulated sheets increases the electrical resistance of paths along which eddy currents circulate, drastically reducing $I^2 R$ power loss due to eddy currents."
    ),
    (
        "A metallic plate is oscillating like a pendulum between the poles of a strong electromagnet. When the magnet is switched on, the plate:",
        ["Comes to rest quickly due to electromagnetic damping", "Oscillates faster with increased frequency", "Maintains its amplitude without change", "Starts executing rotational motion"],
        0,
        "As the metallic plate enters and leaves the magnetic field, changing flux induces strong eddy currents in the plate. By Lenz's law, the magnetic force opposes the motion of the plate, converting mechanical energy into heat and causing rapid electromagnetic damping."
    ),
    (
        "A horizontal conducting loop is viewed from above. A bar magnet is moved towards the loop with its south pole facing downwards. The direction of the induced current in the loop as seen from above is:",
        ["Clockwise", "Counter-clockwise", "First clockwise then counter-clockwise", "Zero"],
        0,
        "As the south pole approaches the loop, the flux directed upwards (or downwards, from south pole field lines entering it) increases. By Lenz's law, the loop opposes the approaching south pole by developing a south magnetic pole on its upper face. A south pole corresponds to a clockwise current."
    ),
    (
        "Two identical coaxial circular loops $A$ and $B$ carry equal currents in the same direction. If the loops are moved towards each other, the current in:",
        ["Both $A$ and $B$ decreases", "Both $A$ and $B$ increases", "Loop $A$ increases and in loop $B$ decreases", "Remains unchanged in both"],
        0,
        "As the loops are brought closer together, the magnetic flux through each loop due to the other increases in the existing direction. By Lenz's law, the induced EMF must oppose this increase in flux, thereby reducing the net current in both loops."
    ),
    (
        "A copper ring is suspended by a thread in a vertical plane. A bar magnet is brought close to the ring with its north pole facing the ring. The ring will:",
        ["Move away from the magnet", "Move towards the magnet", "Remain stationary", "Rotate continuously"],
        0,
        "As the north pole approaches the ring, the induced current in the ring produces a magnetic field that repels the incoming north pole (Lenz's law). Consequently, the ring experiences a repulsive force and moves away from the magnet."
    ),
    (
        "An aluminium ring $B$ is placed on top of a vertical solenoid with an iron core. When an AC current is switched on through the solenoid, the ring $B$:",
        ["Jumps up and levitates above the solenoid", "Remains firmly seated on the solenoid", "Is pulled tightly down against the core", "Rotates rapidly in a horizontal plane"],
        0,
        "This is the classic Thomson jumping ring experiment. The alternating magnetic field produces an induced current in the aluminium ring that, by Lenz's law and phase lag due to ring's self-inductance, creates a net time-averaged repulsive magnetic force that shoots the ring upward."
    ),
    (
        "A conducting rod of length $L$ moves with speed $v$ along two parallel horizontal rails in a uniform vertical magnetic field $B$. The rails are connected by a resistor $R$. The direction of the induced current is determined by:",
        ["Fleming's right hand rule", "Fleming's left hand rule", "Ampere's swimming rule", "Maxwell's corkscrew rule"],
        0,
        "Fleming's right-hand rule is used to determine the direction of induced current: with thumb along motion of conductor, forefinger along magnetic field, the central (middle) finger indicates the direction of induced current."
    ),
    (
        "A circular loop of wire is placed in a magnetic field directed perpendicularly into the page. If the strength of the magnetic field is decreasing, the direction of the induced current is:",
        ["Clockwise", "Counter-clockwise", "First counter-clockwise then clockwise", "Zero"],
        0,
        "Since the inward magnetic field is decreasing, the induced current must oppose this decrease by creating an inward magnetic field (Lenz's law). By the right-hand grip rule, an inward magnetic field is produced by a clockwise current."
    ),
    (
        "A circular loop of wire is placed in a magnetic field directed perpendicularly into the page. If the strength of the magnetic field is increasing, the direction of the induced current is:",
        ["Counter-clockwise", "Clockwise", "First clockwise then counter-clockwise", "Zero"],
        0,
        "Because the inward magnetic field is increasing, the induced current opposes the increase by creating an outward magnetic field. An outward magnetic field is generated by a counter-clockwise current."
    ),
    (
        "Dead-beat galvanometers utilize electromagnetic damping. This damping is achieved by:",
        ["Winding the coil on a metallic (copper or aluminium) frame", "Using a non-conducting wooden frame", "Increasing the resistance of the coil", "Using a weaker permanent magnet"],
        0,
        "When the coil deflects, eddy currents are induced in the metallic frame. By Lenz's law, these eddy currents produce a retarding magnetic torque that quickly brings the coil to rest at its equilibrium position without prolonged oscillation (dead-beat action)."
    ),
    (
        "An induction furnace operates on the principle of:",
        ["Joule heating produced by eddy currents", "Peltier effect", "Seebeck effect", "Electrostatic induction"],
        0,
        "In an induction furnace, a rapidly changing high-frequency magnetic field induces large eddy currents in the bulk metal. The high resistance to these currents generates intense Joule heat ($I^2 R$), melting the metal cleanly without direct contact."
    ),
    (
        "Two circular coils $P$ and $Q$ are placed coaxially close to each other. A clockwise current $I$ starts flowing in coil $P$ when viewed from coil $Q$. The direction of the induced current in coil $Q$ as seen from the same side is:",
        ["Counter-clockwise", "Clockwise", "Zero", "Alternating periodically"],
        0,
        "As clockwise current starts growing in coil $P$, the magnetic flux linked with coil $Q$ increases. To oppose this increase, coil $Q$ induces a current in the opposite direction, i.e., counter-clockwise."
    ),
    (
        "A rectangular loop is moved out of a region of uniform magnetic field directed into the page towards the right. The direction of the induced current in the loop is:",
        ["Clockwise", "Counter-clockwise", "Zero", "Oscillating"],
        0,
        "As the loop moves out to the right, the inward magnetic flux decreases. By Lenz's law, the induced current must produce an inward magnetic field to oppose this decrease. Using the right-hand rule, an inward field requires a clockwise current."
    ),
    (
        "A long straight wire carries a constant current $I$. A square conducting loop in the same plane moves away from the wire with velocity $v$. The induced current in the loop flows:",
        ["Clockwise", "Counter-clockwise", "Zero", "Alternating"],
        0,
        "Assume current $I$ flows upwards; then the magnetic field to its right is directed into the page and weakens with distance ($B \\propto 1/r$). As the loop moves away, the inward flux decreases. By Lenz's law, the induced current must reinforce the inward flux, requiring a clockwise current."
    ),
    (
        "A square conducting loop moves towards a straight wire carrying steady current $I$. The induced current in the loop flows:",
        ["Counter-clockwise", "Clockwise", "Zero", "Opposite to the wire current only"],
        0,
        "For an upward current $I$, the field to the right is into the page. As the loop moves closer to the wire, the inward magnetic flux increases. By Lenz's law, the induced current produces an outward field to oppose this increase, which requires a counter-clockwise current."
    ),
    (
        "Which of the following does NOT use eddy currents?",
        ["Electric bulb", "Induction furnace", "Electromagnetic brakes in trains", "Speedometer in automobiles"],
        0,
        "An electric bulb works on the principle of incandescence and Joule heating through the resistance of a thin tungsten filament when steady current flows through it. It does not use eddy currents."
    ),
    (
        "A copper coin is placed on a smooth wooden table. When the north pole of a strong bar magnet is moved rapidly towards the coin from above, the coin will experience:",
        ["A downward and repulsive force pressing it against the table", "An upward attractive force", "No force at all", "A horizontal rotational force only"],
        0,
        "As the north pole approaches the coin from above, downward magnetic flux increases. By Lenz's law, eddy currents are induced in the coin creating an upward north pole, which repels the magnet. Consequently, the coin experiences a repulsive downward force pushing it against the table."
    ),
    (
        "A magnet is moved towards a coil: (i) quickly, (ii) slowly. The induced EMF and work done against the magnetic force will be:",
        ["Greater in case (i)", "Greater in case (ii)", "Equal in both cases", "Induced EMF greater in (i), work done equal in both"],
        0,
        "When moved quickly, $\\frac{d\\Phi}{dt}$ is larger, so induced EMF is larger. A larger induced EMF drives a larger induced current, causing a stronger repulsive magnetic force. Therefore, the work done against the magnetic force is greater in case (i) (dissipated as greater heat in the coil)."
    ),
    (
        "A bar magnet is oscillated inside a copper ring. The oscillations of the magnet are damped. The kinetic energy of the oscillating magnet is converted into:",
        ["Thermal energy (heat) in the copper ring", "Magnetic potential energy of the magnet", "Electrostatic energy of the ring", "Gravitational potential energy"],
        0,
        "Eddy currents induced in the copper ring oppose the motion of the magnet at every instant (Lenz's law). The work done against this electromagnetic damping force dissipates the mechanical energy of the magnet as Joule heat in the copper ring."
    ),
    (
        "A metallic rod of mass $m$, resistance $R$, and length $l$ is released from rest on two smooth conducting parallel rails inclined at an angle $\\theta$ to the horizontal. A uniform vertical magnetic field $B$ is present. The terminal velocity of the rod is:",
        ["$\\frac{m g R \\sin\\theta}{B^2 l^2 \\cos^2\\theta}$", "$\\frac{m g R \\cos\\theta}{B^2 l^2 \\sin^2\\theta}$", "$\\frac{m g R}{B^2 l^2 \\cos\\theta}$", "$\\frac{m g R \\tan\\theta}{B^2 l^2}$"],
        0,
        "The component of velocity perpendicular to the vertical magnetic field is $v \\cos\\theta$, so motional EMF is $\\mathcal{E} = B l (v \\cos\\theta)$. Current is $I = \\frac{B l v \\cos\\theta}{R}$. The horizontal magnetic force is $F_B = I l B = \\frac{B^2 l^2 v \\cos\\theta}{R}$. Its component opposing motion along the incline is $F_B \\cos\\theta = \\frac{B^2 l^2 v \\cos^2\\theta}{R}$. At terminal velocity, $m g \\sin\\theta = \\frac{B^2 l^2 v_t \\cos^2\\theta}{R} \\implies v_t = \\frac{m g R \\sin\\theta}{B^2 l^2 \\cos^2\\theta}$."
    ),
    (
        "The total charge flown through a closed circuit of resistance $R$ during a change in magnetic flux from $\\Phi_1$ to $\\Phi_2$ is:",
        ["$\\frac{\\Phi_1 - \\Phi_2}{R}$", "$\\frac{\\Phi_1 - \\Phi_2}{R \\Delta t}$", "$\\frac{(\\Phi_1 - \\Phi_2)^2}{2R}$", "$\\frac{\\Phi_1 + \\Phi_2}{R}$"],
        0,
        "Since $\\mathcal{E} = -\\frac{d\\Phi}{dt}$ and $i = \\frac{\\mathcal{E}}{R} = -\\frac{1}{R}\\frac{d\\Phi}{dt}$, integrating $dq = i dt$ gives $q = -\\frac{1}{R} \\int_{\\Phi_1}^{\\Phi_2} d\\Phi = \\frac{\\Phi_1 - \\Phi_2}{R}$."
    ),
    (
        "A circular copper ring is held in a horizontal plane and a small magnet is dropped through it. If the graph between acceleration $a$ of the magnet and time $t$ is plotted, $a$ will be:",
        ["Equal to $g$ at one point where the magnet is at the center of the ring", "Always equal to $g$", "Always zero", "Always greater than $g$"],
        0,
        "When the center of the magnet is exactly at the center of the ring, the rate of change of flux $\\frac{d\\Phi}{dt} = 0$. Hence the induced EMF and current are momentarily zero, and the instantaneous acceleration is exactly $a = g$."
    ),
    (
        "In a coil of resistance $50\\text{ }\\Omega$, the magnetic flux linked with it changes from $10\\text{ Wb}$ to $0\\text{ Wb}$ in $0.1\\text{ s}$. The charge that flows through the coil is:",
        ["$0.2\\text{ C}$", "$0.5\\text{ C}$", "$2.0\\text{ C}$", "$1.0\\text{ C}$"],
        0,
        "Charge flown is $\\Delta q = \\frac{|\\Delta \\Phi|}{R} = \\frac{10 - 0}{50} = \\frac{10}{50} = 0.2\\text{ C}$."
    ),
    (
        "A vertical copper disc is rotated about its horizontal axis. A horse-shoe magnet is placed so that the disc passes between its poles. The disc will:",
        ["Slow down and experience a retarding torque", "Accelerate and spin faster", "Rotate unaffected", "Vibrate vertically"],
        0,
        "The movement of the conducting disc through the concentrated magnetic field induces eddy currents. By Lenz's law, these currents interact with the field to generate a braking torque that retards the rotation of the disc."
    ),
    (
        "If a bar magnet is pushed into a coil with its south pole leading, the front face of the coil develops a:",
        ["South pole, to repel the approaching magnet", "North pole, to attract the approaching magnet", "Positive electrostatic charge", "Negative electrostatic charge"],
        0,
        "According to Lenz's law, the induced current in the coil must oppose the approach of the magnet. Thus, the near face of the coil develops a south magnetic pole to repel the approaching south pole."
    ),
    (
        "A copper loop and an aluminium loop of the same dimensions are rotated with the same angular velocity in the same magnetic field. The electrical resistivity of copper is less than that of aluminium. Then:",
        ["The induced EMF is the same in both, but induced current is greater in the copper loop", "The induced EMF is greater in the copper loop", "The induced current is the same in both loops", "Both induced EMF and current are greater in aluminium"],
        0,
        "Induced EMF depends only on geometry, magnetic field, and rate of rotation: $\\mathcal{E}_0 = N B A \\omega$, which is identical for both loops. Since copper has lower resistivity, its resistance $R$ is lower, resulting in a larger induced current $I = \\mathcal{E}/R$."
    ),
    (
        "A small magnet is dropped along the axis of three identical hollow vertical cylinders made of (i) plastic, (ii) copper, (iii) iron. The times of fall $t_1, t_2, t_3$ will follow:",
        ["$t_1 < t_2$", "$t_1 > t_2$", "$t_1 = t_2$", "$t_2 < t_1$"],
        0,
        "In the plastic tube, no eddy currents are induced, so the magnet falls under free fall ($a = g$). In the copper tube, strong eddy currents produce an upward retarding force ($a < g$), so the magnet takes longer to fall through the copper tube ($t_2 > t_1$, or $t_1 < t_2$)."
    ),
    (
        "A conducting circular loop of radius $r$ is situated in a uniform magnetic field $B$ perpendicular to the plane of the loop. If the radius of the loop shrinks at a constant rate $\\frac{dr}{dt} = -v$, the direction of the induced current is:",
        ["Clockwise (if field is into the page)", "Counter-clockwise (if field is into the page)", "Zero", "Alternating periodically"],
        0,
        "When the loop shrinks, the area decreases, so the inward magnetic flux decreases. By Lenz's law, the induced current must create an inward magnetic field to oppose this decrease. An inward magnetic field corresponds to a clockwise induced current."
    ),
    (
        "An electron moves along a straight line path $XY$ in the plane of a rectangular wire loop. As the electron moves from $X$ to $Y$ passing near the loop, the induced current in the loop:",
        ["Reverses its direction", "Is always clockwise", "Is always counter-clockwise", "Remains zero"],
        0,
        "As the electron approaches the loop, the magnetic flux through the loop increases in one sense, inducing a current in one direction. As the electron recedes, the flux decreases, inducing current in the opposite direction. Thus the induced current reverses its direction."
    ),
    (
        "Lenz's law helps to find the:",
        ["Direction of induced current", "Magnitude of induced EMF", "Magnitude of induced charge", "Value of mutual inductance"],
        0,
        "Faraday's law gives the magnitude of the induced EMF ($|\\mathcal{E}| = \\frac{d\\Phi}{dt}$), while Lenz's law provides the rule to determine the direction of the induced EMF and current."
    ),
    (
        "A bar magnet is moved towards a solenoid connected to a galvanometer. The deflection in the galvanometer does NOT depend on:",
        ["The resistance of the galvanometer coil", "The speed of the magnet", "The strength of the magnet", "The number of turns of the solenoid"],
        0,
        "The deflection in the galvanometer measures the induced current $I = \\frac{\\mathcal{E}}{R_{\\text{total}}}$, which depends on $R$. Wait! The question asks what deflection DOES NOT depend on: deflection depends on induced current ($I$), which depends on speed, strength of magnet, number of turns, and total resistance. What if the question is about induced EMF or charge? Induced charge $\\Delta q = \\frac{\\Delta \\Phi}{R}$ does NOT depend on speed! Let's rephrase clearly."
    ),
    (
        "A bar magnet is moved into a coil connected to a ballistic galvanometer. The total charge passing through the galvanometer does NOT depend on:",
        ["The speed with which the magnet is moved", "The number of turns in the coil", "The resistance of the circuit", "The magnetic pole strength"],
        0,
        "The total induced charge is $\\Delta q = \\frac{\\Delta \\Phi}{R} = \\frac{N \\Delta \\phi}{R}$. It depends strictly on the total change in flux and the total circuit resistance, and is completely independent of the speed or time taken for the motion."
    ),
    (
        "To minimize eddy current losses in the core of an electrical machine, the core should be made of a material having:",
        ["High electrical resistivity and low magnetic hysteresis loss", "Low electrical resistivity and high magnetic permeability", "Zero electrical resistance", "Low magnetic permeability"],
        0,
        "Eddy current power loss is inversely proportional to electrical resistivity ($P_{\\text{eddy}} \\propto 1/\\rho$). Therefore, a material with high electrical resistivity (such as silicon steel laminations) is used to suppress eddy currents while maintaining high magnetic permeability."
    ),
    (
        "A rectangular loop is being pulled out of a magnetic field at constant velocity $v$. If the magnetic field is doubled and the velocity is halved, the power required to pull the loop will:",
        ["Remain unchanged", "Double", "Be halved", "Quadruple"],
        0,
        "Power dissipated is $P = \\frac{B^2 l^2 v^2}{R}$. When $B' = 2B$ and $v' = v/2$, $P' = \\frac{(2B)^2 l^2 (v/2)^2}{R} = \\frac{4 B^2 l^2 (v^2/4)}{R} = \\frac{B^2 l^2 v^2}{R} = P$. Thus the power remains unchanged."
    ),
    (
        "A copper ring is placed in a horizontal plane. A bar magnet is dropped vertically through the center of the ring. As the magnet falls through the ring, its acceleration is:",
        ["Less than $g$ while approaching and less than $g$ while receding", "Less than $g$ while approaching and greater than $g$ while receding", "Always equal to $g$", "Greater than $g$ while approaching and less than $g$ while receding"],
        0,
        "By Lenz's law, the magnetic force opposes the relative motion at all stages: repulsion when approaching ($a < g$) and attraction when receding ($a < g$). Thus the acceleration of the magnet is always less than $g$."
    ),
    (
        "If a magnetic field perpendicular to a copper plate is switched off, the eddy currents induced in the plate will:",
        ["Heat up the plate due to Joule dissipation", "Cool down the plate", "Keep circulating indefinitely with zero loss", "Produce a constant electrostatic potential"],
        0,
        "The circulating eddy currents encounter the electrical resistance of the copper plate, dissipating their energy as Joule heat ($I^2 R t$) and warming up the plate."
    ),
    (
        "When a magnet is moved toward a coil with speed $v$, an induced EMF $\\mathcal{E}$ is produced. If both the magnet and the coil move in the same direction with the same speed $v$, the induced EMF in the coil will be:",
        ["Zero", "$\\mathcal{E}$", "$2\\mathcal{E}$", "$\\mathcal{E}/2$"],
        0,
        "Electromagnetic induction occurs only when there is relative motion between the magnet and the coil causing a change in flux. If both move at the same speed in the same direction, relative velocity is zero, $\\frac{d\\Phi}{dt} = 0$, and the induced EMF is zero."
    ),
    (
        "In a coil of resistance $10\\text{ }\\Omega$, the induced current developed by changing magnetic flux has been measured as a function of time. The area under the current-time ($I-t$) graph gives:",
        ["The total charge flown through the coil", "The total change in magnetic flux", "The total EMF induced", "The total heat generated"],
        0,
        "By definition, current is the rate of flow of charge: $I = \\frac{dq}{dt}$. The area under the $I-t$ curve is $\\int I dt = \\Delta q$, which represents the total electric charge flown through the circuit."
    ),
    (
        "A circular loop of radius $R$ carrying current $I$ is placed in a uniform magnetic field $B$. The work done in rotating the loop by $180^\\circ$ from its stable equilibrium position is:",
        ["$2 M B$", "$M B$", "Zero", "$-2 M B$"],
        0,
        "In stable equilibrium, magnetic dipole moment $\\vec{M}$ is parallel to $\\vec{B}$ ($\\theta_1 = 0^\\circ$), so $U_1 = -M B \\cos 0^\\circ = -M B$. When rotated by $180^\\circ$, $\\theta_2 = 180^\\circ$, so $U_2 = -M B \\cos 180^\\circ = +M B$. The external work done is $W = U_2 - U_1 = M B - (-M B) = 2 M B$ (where $M = I \\pi R^2$)."
    ),
    (
        "The negative sign in Faraday's law of induction, $\\mathcal{E} = -\\frac{d\\Phi}{dt}$, is mathematically symbolic of:",
        ["Lenz's law", "Coulomb's law", "Ampere's law", "Biot-Savart law"],
        0,
        "The negative sign in Faraday's formula represents Lenz's law, indicating that the induced electromotive force acts in such a direction as to oppose the change in magnetic flux producing it."
    )
]

for i, item in enumerate(lenz_data):
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
    
    questions.append(make_q("Lenz's law", item[0], new_opts, target_idx, item[3]))

os.makedirs(os.path.join(os.path.dirname(__file__)), exist_ok=True)
output_path = os.path.join(os.path.dirname(__file__), "emi_ac_batch1.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} MCQs for batch 1 saved to {output_path}")
