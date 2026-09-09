import json
import os

# Subtopics:
# 5. RMS values (45 MCQs)
# 6. LC oscillations (45 MCQs)

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
# 5. RMS values (45 MCQs)
# ==========================================

rms_data = [
    (
        "The peak value of an alternating current is $I_0 = 10\\text{ A}$. Its root-mean-square (RMS) value is:",
        ["$7.07\\text{ A}$", "$10\\text{ A}$", "$5.0\\text{ A}$", "$14.14\\text{ A}$"],
        0,
        "For a sinusoidal alternating current, $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} = \\frac{10}{1.414} \\approx 7.07\\text{ A}$."
    ),
    (
        "A household AC power supply is rated at $220\\text{ V}, 50\\text{ Hz}$. The peak voltage of this supply is approximately:",
        ["$311\\text{ V}$", "$220\\text{ V}$", "$440\\text{ V}$", "$155\\text{ V}$"],
        0,
        "Household rating specifies the RMS voltage $V_{\\text{rms}} = 220\\text{ V}$. The peak voltage is $V_0 = \\sqrt{2} V_{\\text{rms}} = 1.414 \\times 220 \\approx 311.1\\text{ V}$."
    ),
    (
        "The average value of a sinusoidal alternating voltage $V = V_0 \\sin(\\omega t)$ over a complete positive half-cycle is:",
        ["$\\frac{2}{\\pi} V_0$", "$\\frac{V_0}{\\sqrt{2}}$", "$\\frac{V_0}{\\pi}$", "Zero"],
        0,
        "Average value over a positive half-cycle ($0$ to $T/2$) is $V_{\\text{avg}} = \\frac{1}{T/2} \\int_0^{T/2} V_0 \\sin(\\omega t) dt = \\frac{2 V_0}{\\pi} \\approx 0.637 V_0$."
    ),
    (
        "The average value of a symmetrical sinusoidal alternating current over a full cycle is:",
        ["Zero", "$\\frac{2}{\\pi} I_0$", "$\\frac{I_0}{\\sqrt{2}}$", "$I_0$"],
        0,
        "Because the positive half-cycle and negative half-cycle have equal areas of opposite sign, the total integral $\\int_0^T I(t) dt = 0$. Hence, the average value of AC over any full cycle is identically zero."
    ),
    (
        "An AC ammeter connected in an AC circuit reads $5\\text{ A}$. The peak value of current in the circuit is:",
        ["$7.07\\text{ A}$", "$5.0\\text{ A}$", "$3.54\\text{ A}$", "$10\\text{ A}$"],
        0,
        "AC measuring instruments (such as hot-wire ammeters) are calibrated to read RMS values. Therefore $I_{\\text{rms}} = 5\\text{ A}$, and the peak value is $I_0 = \\sqrt{2} I_{\\text{rms}} = 1.414 \\times 5 = 7.07\\text{ A}$."
    ),
    (
        "The current in a circuit is given by $I = 3 + 4 \\sin(\\omega t)\\text{ A}$. The RMS value of this current is:",
        ["$\\sqrt{17}\\text{ A}$", "$5\\text{ A}$", "$7\\text{ A}$", "$3.5\\text{ A}$"],
        0,
        "For a current composed of a DC component $I_{\\text{dc}}$ and a sinusoidal component $I_{\\text{ac}}(t) = I_0 \\sin(\\omega t)$, the RMS value is $I_{\\text{rms}} = \\sqrt{I_{\\text{dc}}^2 + \\frac{I_0^2}{2}} = \\sqrt{3^2 + \\frac{4^2}{2}} = \\sqrt{9 + 8} = \\sqrt{17}\\text{ A} \\approx 4.12\\text{ A}$."
    ),
    (
        "An alternating current is given by $I = I_1 \\cos(\\omega t) + I_2 \\sin(\\omega t)$. The RMS value of the current is:",
        ["$\\sqrt{\\frac{I_1^2 + I_2^2}{2}}$", "$\\frac{I_1 + I_2}{\\sqrt{2}}$", "$\\sqrt{I_1^2 + I_2^2}$", "$\\frac{I_1 + I_2}{2}$"],
        0,
        "We can rewrite $I(t)$ as $I_0 \\sin(\\omega t + \\phi)$, where the peak value is $I_0 = \\sqrt{I_1^2 + I_2^2}$. The RMS value is $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} = \\sqrt{\\frac{I_1^2 + I_2^2}{2}}$."
    ),
    (
        "The form factor of a symmetrical sinusoidal alternating current waveform is defined as the ratio of RMS value to average value over a half-cycle. Its value is:",
        ["$1.11$", "$1.414$", "$0.707$", "$0.637$"],
        0,
        "Form factor = $\\frac{I_{\\text{rms}}}{I_{\\text{avg}}} = \\frac{I_0 / \\sqrt{2}}{2 I_0 / \\pi} = \\frac{\\pi}{2\\sqrt{2}} \\approx \\frac{3.1416}{2.8284} \\approx 1.11$."
    ),
    (
        "The peak factor (crest factor) of a sinusoidal alternating voltage is defined as the ratio of peak value to RMS value. Its value is:",
        ["$\\sqrt{2} \\approx 1.414$", "$\\frac{1}{\\sqrt{2}} \\approx 0.707$", "$\\frac{\\pi}{2} \\approx 1.57$", "$1.11$"],
        0,
        "Peak factor = $\\frac{V_0}{V_{\\text{rms}}} = \\frac{V_0}{V_0 / \\sqrt{2}} = \\sqrt{2} \\approx 1.414$."
    ),
    (
        "A hot-wire ammeter measures:",
        ["RMS value of current based on its heating effect", "Peak value of current", "Average value of current", "Instantaneous value of current"],
        0,
        "Hot-wire meters work on the principle that the heat generated in a wire is proportional to the mean square of current ($H \\propto I_{\\text{rms}}^2$). Therefore, they measure the RMS value of AC as well as DC."
    ),
    (
        "A capacitor of breakdown voltage $250\\text{ V}$ is connected across an AC supply. The maximum RMS voltage of the AC supply that can be safely applied across the capacitor is:",
        ["$176.8\\text{ V}$", "$250\\text{ V}$", "$353.5\\text{ V}$", "$125\\text{ V}$"],
        0,
        "The capacitor insulation will break down if the instantaneous peak voltage exceeds its rating. Therefore, $V_0 \\le 250\\text{ V} \\implies V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} = \\frac{250}{1.414} \\approx 176.8\\text{ V}$."
    ),
    (
        "An AC voltage is represented by $e = 200\\sqrt{2} \\sin(100\\pi t)\\text{ V}$. A capacitor of capacitance $1\\text{ }\\mu\\text{F}$ is connected across this source. The reading of an AC ammeter connected in series with the capacitor will be:",
        ["$62.8\\text{ mA}$", "$88.8\\text{ mA}$", "$31.4\\text{ mA}$", "$6.28\\text{ mA}$"],
        0,
        "RMS voltage is $V_{\\text{rms}} = \\frac{200\\sqrt{2}}{\\sqrt{2}} = 200\\text{ V}$. Capacitive reactance is $X_C = \\frac{1}{\\omega C} = \\frac{1}{100\\pi \\times 10^{-6}} = \\frac{10^4}{\\pi}\\text{ }\\Omega$. AC ammeter reads $I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{X_C} = \\frac{200}{10^4 / \\pi} = 0.02\\pi\\text{ A} \\approx 62.8\\text{ mA}$."
    ),
    (
        "For a square wave alternating current with amplitude $I_0$, the RMS value is:",
        ["$I_0$", "$\\frac{I_0}{\\sqrt{2}}$", "$\\frac{I_0}{\\sqrt{3}}$", "$2 I_0$"],
        0,
        "For a square wave where $I(t) = \\pm I_0$, $I^2(t) = I_0^2$ at all times. Therefore, the mean of $I^2$ is $I_0^2$, and the root-mean-square value is $I_{\\text{rms}} = \\sqrt{I_0^2} = I_0$."
    ),
    (
        "For a symmetrical triangular alternating current wave of peak value $I_0$, the RMS value is:",
        ["$\\frac{I_0}{\\sqrt{3}}$", "$\\frac{I_0}{\\sqrt{2}}$", "$\\frac{I_0}{2}$", "$\\frac{I_0}{3}$"],
        0,
        "For a triangular wave varying linearly from $0$ to $I_0$ as $i(t) = \\frac{I_0}{T/4} t$, the mean square is $\\frac{1}{T/4} \\int_0^{T/4} \\left(\\frac{I_0}{T/4}\\right)^2 t^2 dt = \\frac{I_0^2}{3}$. Hence $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{3}}$."
    ),
    (
        "For a half-wave rectified sinusoidal alternating current of peak value $I_0$, the RMS value is:",
        ["$\\frac{I_0}{2}$", "$\\frac{I_0}{\\sqrt{2}}$", "$\\frac{I_0}{\\pi}$", "$\\frac{2I_0}{\\pi}$"],
        0,
        "In half-wave rectification, current flows only during half of the cycle: $I_{\\text{rms}} = \\sqrt{\\frac{1}{T} \\int_0^{T/2} I_0^2 \\sin^2(\\omega t) dt} = \\sqrt{\\frac{I_0^2}{T} \\times \\frac{T}{4}} = \\frac{I_0}{2}$."
    ),
    (
        "For a full-wave rectified sinusoidal alternating current of peak value $I_0$, the RMS value is:",
        ["$\\frac{I_0}{\\sqrt{2}}$", "$\\frac{I_0}{2}$", "$\\frac{2 I_0}{\\pi}$", "$I_0$"],
        0,
        "Because squaring the current makes the negative half-cycle positive with identical waveform to the positive half-cycle, the mean square value is identical to that of a pure sine wave: $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$."
    ),
    (
        "If an electric iron designed for a $220\\text{ V}$ DC line is connected to a $220\\text{ V}$ AC mains, the heat generated per second in the iron will be:",
        ["The same as with the DC supply", "Double that with the DC supply", "Half that with the DC supply", "Zero"],
        0,
        "The RMS value of an AC supply is specifically defined such that it produces the same Joule heating effect in a pure resistor as a DC voltage of equal numerical value: $P_{\\text{ac}} = \\frac{V_{\\text{rms}}^2}{R} = \\frac{V_{\\text{dc}}^2}{R} = P_{\\text{dc}}$."
    ),
    (
        "An alternating current of peak value $I_0$ passes through a resistance $R$. The heat produced in time $t$ is the same as that produced by a steady direct current of magnitude $I$ passing through the same resistance for the same time. The value of $I$ is:",
        ["$\\frac{I_0}{\\sqrt{2}}$", "$\\frac{I_0}{2}$", "$\\frac{2I_0}{\\pi}$", "$I_0$"],
        0,
        "By definition, the RMS value of AC is that value of steady direct current which produces the same heating effect under identical conditions. For a sinusoidal current, this effective value is $I = I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$."
    ),
    (
        "A DC moving coil voltmeter is connected across an AC voltage source $V = 100 \\sin(100\\pi t)\\text{ V}$. Its reading will be:",
        ["Zero", "$100\\text{ V}$", "$70.7\\text{ V}$", "$63.7\\text{ V}$"],
        0,
        "A standard permanent-magnet moving-coil (PMMC) meter responds to the average value of voltage. Because the average value of a symmetrical AC waveform over a full cycle is zero, the needle experiences zero net torque and reads zero."
    ),
    (
        "The scale of a hot-wire ammeter is non-uniform because:",
        ["Heat produced is proportional to the square of current ($H \\propto I^2$)", "Resistance of wire increases with temperature", "Expansion of wire is non-linear", "Magnetic field is non-uniform"],
        0,
        "The deflection of the needle in a hot-wire ammeter is proportional to the elongation of the wire, which is proportional to the heat produced, which in turn is proportional to $I^2$. Consequently, graduations are cramped at lower values and spread out at higher values."
    ),
    (
        "An AC voltage source $V = 200 \\sin(314 t)\\text{ V}$ is connected across a $100\\text{ }\\Omega$ resistor. The time taken by the voltage to rise from zero to its peak value is:",
        ["$5\\text{ ms}$", "$10\\text{ ms}$", "$2\\text{ ms}$", "$20\\text{ ms}$"],
        0,
        "Here $\\omega = 314\\text{ rad/s} \\approx 100\\pi\\text{ rad/s}$, so $f = 50\\text{ Hz}$ and time period $T = \\frac{1}{50} = 0.02\\text{ s} = 20\\text{ ms}$. The voltage rises from zero to peak in one quarter of a cycle: $t = \\frac{T}{4} = \\frac{20}{4} = 5\\text{ ms}$."
    ),
    (
        "The voltage across an AC circuit is $V = 100 \\sin(100\\pi t)\\text{ V}$ and current is $I = 20 \\sin(100\\pi t + \\pi/3)\\text{ A}$. The average power consumed in the circuit is:",
        ["$500\\text{ W}$", "$1000\\text{ W}$", "$2000\\text{ W}$", "$250\\text{ W}$"],
        0,
        "Average power is $P = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi = \\left(\\frac{100}{\\sqrt{2}}\\right) \\left(\\frac{20}{\\sqrt{2}}\\right) \\cos(60^\\circ) = \\frac{2000}{2} \\times \\frac{1}{2} = 500\\text{ W}$."
    ),
    (
        "An AC current is given by $i = i_1 \\sin(\\omega_1 t) + i_2 \\sin(\\omega_2 t)$ where $\\omega_1 \\ne \\omega_2$. The RMS value of this current is:",
        ["$\\sqrt{\\frac{i_1^2 + i_2^2}{2}}$", "$\\frac{i_1 + i_2}{\\sqrt{2}}$", "$\\sqrt{i_1^2 + i_2^2}$", "$\\frac{i_1^2 + i_2^2}{4}$"],
        0,
        "The square of the current is $i^2 = i_1^2 \\sin^2(\\omega_1 t) + i_2^2 \\sin^2(\\omega_2 t) + 2 i_1 i_2 \\sin(\\omega_1 t)\\sin(\\omega_2 t)$. Since $\\omega_1 \\ne \\omega_2$, the cross-term averages to zero over time. The time average of each $\\sin^2$ term is $1/2$. Thus $\\langle i^2 \\rangle = \\frac{i_1^2}{2} + \\frac{i_2^2}{2} \\implies I_{\\text{rms}} = \\sqrt{\\frac{i_1^2 + i_2^2}{2}}$."
    ),
    (
        "The voltage equation of an AC supply is $V = 120 \\sin(100\\pi t) \\cos(100\\pi t)\\text{ V}$. The RMS voltage and frequency of the supply are:",
        ["$30\\sqrt{2}\\text{ V}, 100\\text{ Hz}$", "$60\\text{ V}, 50\\text{ Hz}$", "$60\\sqrt{2}\\text{ V}, 100\\text{ Hz}$", "$120\\text{ V}, 50\\text{ Hz}$"],
        0,
        "Using $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$, $V = 60 (2\\sin(100\\pi t)\\cos(100\\pi t)) = 60 \\sin(200\\pi t)\\text{ V}$. Peak voltage is $V_0 = 60\\text{ V}$, so $V_{\\text{rms}} = \\frac{60}{\\sqrt{2}} = 30\\sqrt{2}\\text{ V} \\approx 42.4\\text{ V}$. Angular frequency is $\\omega = 200\\pi\\text{ rad/s} \\implies f = \\frac{200\\pi}{2\\pi} = 100\\text{ Hz}$."
    ),
    (
        "If a direct current of $4\\text{ A}$ is superimposed on an alternating current $I = 3\\sqrt{2} \\sin(\\omega t)\\text{ A}$, the effective (RMS) current is:",
        ["$5\\text{ A}$", "$7\\text{ A}$", "$4\\text{ A}$", "$3.5\\text{ A}$"],
        0,
        "RMS value is $I_{\\text{eff}} = \\sqrt{I_{\\text{dc}}^2 + I_{\\text{ac,rms}}^2} = \\sqrt{4^2 + \\left(\\frac{3\\sqrt{2}}{\\sqrt{2}}\\right)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ A}$."
    ),
    (
        "An electric bulb is rated $220\\text{ V}, 100\\text{ W}$. When connected to a $220\\text{ V}$ AC source, the peak current through the bulb is:",
        ["$0.643\\text{ A}$", "$0.455\\text{ A}$", "$0.910\\text{ A}$", "$0.322\\text{ A}$"],
        0,
        "RMS current is $I_{\\text{rms}} = \\frac{P}{V_{\\text{rms}}} = \\frac{100}{220} = \\frac{5}{11} \\approx 0.455\\text{ A}$. The peak current is $I_0 = \\sqrt{2} I_{\\text{rms}} = \\sqrt{2} \\times \\frac{5}{11} = 1.414 \\times 0.455 \\approx 0.643\\text{ A}$."
    ),
    (
        "An AC voltage $V = V_0 \\sin(\\omega t)$ has a period $T$. The average voltage over the time interval $t = 0$ to $t = T/4$ is:",
        ["$\\frac{2}{\\pi} V_0$", "$\\frac{V_0}{\\pi}$", "$\\frac{V_0}{\\sqrt{2}}$", "$\\frac{4}{\\pi} V_0$"],
        0,
        "$V_{\\text{avg}} = \\frac{1}{T/4} \\int_0^{T/4} V_0 \\sin(\\omega t) dt = \\frac{4 V_0}{T} \\left[-\\frac{\\cos(\\omega t)}{\\omega}\\right]_0^{T/4} = \\frac{4 V_0}{T \\omega} (1 - \\cos(\\pi/2)) = \\frac{4 V_0}{2\\pi} (1 - 0) = \\frac{2}{\\pi} V_0$."
    ),
    (
        "A sinusoidal voltage of peak value $200\\text{ V}$ is applied across an ideal diode in series with a resistor $R = 10\\text{ }\\Omega$ (half-wave rectifier circuit). The RMS current through the resistor is:",
        ["$10\\text{ A}$", "$14.14\\text{ A}$", "$20\\text{ A}$", "$7.07\\text{ A}$"],
        0,
        "For half-wave rectification, $V_{\\text{rms}} = \\frac{V_0}{2} = \\frac{200}{2} = 100\\text{ V}$. The RMS current is $I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{R} = \\frac{100\\text{ V}}{10\\text{ }\\Omega} = 10\\text{ A}$."
    ),
    (
        "An AC voltage $V = 100 \\sin(50\\pi t)\\text{ V}$ is applied to a resistor of $50\\text{ }\\Omega$. The value of current at $t = \\frac{1}{300}\\text{ s}$ is:",
        ["$1\\text{ A}$", "$\\sqrt{3}\\text{ A}$", "$2\\text{ A}$", "$0.5\\text{ A}$"],
        0,
        "Instantaneous voltage is $V = 100 \\sin\\left(50\\pi \\times \\frac{1}{300}\\right) = 100 \\sin\\left(\\frac{\\pi}{6}\\right) = 100 \\times \\frac{1}{2} = 50\\text{ V}$. Current is $I = \\frac{V}{R} = \\frac{50\\text{ V}}{50\\text{ }\\Omega} = 1\\text{ A}$."
    ),
    (
        "A current waveform consists of repeating pulses of height $I_0$ and duration $T/2$ with zero current for the remaining $T/2$ (a rectangular pulse train of duty cycle $50\\% $). The RMS value of this current is:",
        ["$\\frac{I_0}{\\sqrt{2}}$", "$\\frac{I_0}{2}$", "$I_0$", "$\\frac{I_0}{\\sqrt{3}}$"],
        0,
        "$I_{\\text{rms}} = \\sqrt{\\frac{1}{T} \\int_0^{T/2} I_0^2 dt} = \\sqrt{\\frac{I_0^2 (T/2)}{T}} = \\frac{I_0}{\\sqrt{2}}$."
    ),
    (
        "The frequency of an AC voltage is $50\\text{ Hz}$. How many times per second does the current reverse its direction?",
        ["100 times", "50 times", "200 times", "25 times"],
        0,
        "In each complete cycle, alternating current reverses its direction twice (at the zero crossings between half-cycles). At $50\\text{ Hz}$, there are $50$ cycles per second, so the current reverses $50 \\times 2 = 100$ times per second."
    ),
    (
        "Why is a $220\\text{ V}$ AC shock more dangerous than a $220\\text{ V}$ DC shock?",
        ["The peak voltage of $220\\text{ V}$ AC is about $311\\text{ V}$, which is much higher than $220\\text{ V}$ DC", "AC current travels faster through the body than DC", "AC causes heating while DC does not", "DC creates no electric field inside the body"],
        0,
        "The rating $220\\text{ V}$ AC is the RMS value. Its peak value is $V_0 = 220\\sqrt{2} \\approx 311\\text{ V}$. Therefore, an individual receives instantaneous potential differences up to $311\\text{ V}$, which causes more severe damage and muscle contraction than steady $220\\text{ V}$ DC."
    ),
    (
        "A current is given by $i = i_0 \\left(\\frac{t}{\\tau}\\right)$ for $0 \\le t \\le \\tau$. The RMS value of this current over the interval $0$ to $\\tau$ is:",
        ["$\\frac{i_0}{\\sqrt{3}}$", "$\\frac{i_0}{2}$", "$\\frac{i_0}{\\sqrt{2}}$", "$\\frac{i_0}{3}$"],
        0,
        "$i_{\\text{rms}}^2 = \\frac{1}{\\tau} \\int_0^\\tau i_0^2 \\frac{t^2}{\\tau^2} dt = \\frac{i_0^2}{\\tau^3} \\left[\\frac{t^3}{3}\\right]_0^\\tau = \\frac{i_0^2}{3} \\implies i_{\\text{rms}} = \\frac{i_0}{\\sqrt{3}}$."
    ),
    (
        "The RMS value of the current waveform $I = 10\\text{ A}$ for $0 < t < T/2$ and $I = -10\\text{ A}$ for $T/2 < t < T$ is:",
        ["$10\\text{ A}$", "Zero", "$7.07\\text{ A}$", "$5\\text{ A}$"],
        0,
        "The square of current is $I^2 = 100\\text{ A}^2$ throughout the entire period. Therefore $\\langle I^2 \\rangle = 100$, so $I_{\\text{rms}} = \\sqrt{100} = 10\\text{ A}$."
    ),
    (
        "An AC circuit has an RMS voltage of $100\\text{ V}$ and an RMS current of $2\\text{ A}$. If the power consumed is $100\\text{ W}$, the power factor of the circuit is:",
        ["$0.5$", "$1.0$", "$0.707$", "$0.8$"],
        0,
        "Power is $P = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi$. Given $P = 100\\text{ W}$, $V_{\\text{rms}} = 100\\text{ V}$, $I_{\\text{rms}} = 2\\text{ A}$: $100 = 100 \\times 2 \\times \\cos\\phi \\implies \\cos\\phi = \\frac{100}{200} = 0.5$."
    ),
    (
        "The effective value of a periodic current having the waveform shown by $i = 2\\sqrt{t}\\text{ A}$ for $0 \\le t \\le 2\\text{ s}$ is:",
        ["$2\\text{ A}$", "$\\sqrt{2}\\text{ A}$", "$2\\sqrt{2}\\text{ A}$", "$4\\text{ A}$"],
        0,
        "$I_{\\text{rms}}^2 = \\frac{1}{2} \\int_0^2 (2\\sqrt{t})^2 dt = \\frac{1}{2} \\int_0^2 4t dt = 2 \\left[\\frac{t^2}{2}\\right]_0^2 = 2 \\times 2 = 4 \\implies I_{\\text{rms}} = \\sqrt{4} = 2\\text{ A}$."
    ),
    (
        "A resistance $R$ carries an alternating current $I = I_0 \\cos(\\omega t)$. The heat generated across the resistor in one time period $T$ is:",
        ["$\\frac{1}{2} I_0^2 R T$", "$I_0^2 R T$", "$\\frac{1}{4} I_0^2 R T$", "$2 I_0^2 R T$"],
        0,
        "Heat generated is $H = I_{\\text{rms}}^2 R T$. Since $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$, $H = \\left(\\frac{I_0}{\\sqrt{2}}\\right)^2 R T = \\frac{1}{2} I_0^2 R T$."
    ),
    (
        "The time taken by an alternating current of frequency $50\\text{ Hz}$ to reach its RMS value starting from zero is:",
        ["$2.5\\text{ ms}$", "$5\\text{ ms}$", "$1.25\\text{ ms}$", "$10\\text{ ms}$"],
        0,
        "Let $I(t) = I_0 \\sin(\\omega t)$. When $I = I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$, $\\sin(\\omega t) = \\frac{1}{\\sqrt{2}} \\implies \\omega t = \\frac{\\pi}{4}$. Since $\\omega = 2\\pi f$, $2\\pi f t = \\frac{\\pi}{4} \\implies t = \\frac{1}{8f} = \\frac{1}{8 \\times 50} = \\frac{1}{400}\\text{ s} = 2.5 \\times 10^{-3}\\text{ s} = 2.5\\text{ ms}$."
    ),
    (
        "An AC generator produces voltage $V = 282.8 \\sin(100\\pi t)\\text{ V}$. An electric kettle of resistance $40\\text{ }\\Omega$ is connected to it. The power consumed by the kettle is:",
        ["$1000\\text{ W}$", "$2000\\text{ W}$", "$500\\text{ W}$", "$1414\\text{ W}$"],
        0,
        "$V_0 = 282.8\\text{ V} \\approx 200\\sqrt{2}\\text{ V}$. RMS voltage is $V_{\\text{rms}} = \\frac{200\\sqrt{2}}{\\sqrt{2}} = 200\\text{ V}$. Power consumed is $P = \\frac{V_{\\text{rms}}^2}{R} = \\frac{200^2}{40} = \\frac{40000}{40} = 1000\\text{ W}$."
    ),
    (
        "The ratio of the average value of a sine wave over a half-cycle to its peak value is:",
        ["$\\frac{2}{\\pi}$", "$\\frac{1}{\\sqrt{2}}$", "$\\frac{\\pi}{2\\sqrt{2}}$", "$\\frac{1}{\\pi}$"],
        0,
        "$I_{\\text{avg}} = \\frac{2}{\\pi} I_0 \\implies \\frac{I_{\\text{avg}}}{I_0} = \\frac{2}{\\pi} \\approx 0.637$."
    ),
    (
        "A thermocouple ammeter reads $10\\text{ A}$ when measuring a certain AC current. If the current is doubled, the meter will read:",
        ["$20\\text{ A}$", "$40\\text{ A}$", "$10\\sqrt{2}\\text{ A}$", "$14.14\\text{ A}$"],
        0,
        "A thermocouple ammeter measures the true RMS value of current based on thermocouple heating. Doubling the current doubles the RMS current, so the meter reads $2 \\times 10 = 20\\text{ A}$."
    ),
    (
        "If an AC waveform has equation $v = 100 + 100 \\sin(100\\pi t)\\text{ V}$, the minimum and maximum values of the voltage are:",
        ["$0\\text{ V}$ and $200\\text{ V}$", "$-100\\text{ V}$ and $+100\\text{ V}$", "$0\\text{ V}$ and $100\\text{ V}$", "$-200\\text{ V}$ and $+200\\text{ V}$"],
        0,
        "Since $\\sin(100\\pi t)$ varies between $-1$ and $+1$: $V_{\\text{min}} = 100 + 100(-1) = 0\\text{ V}$, and $V_{\\text{max}} = 100 + 100(+1) = 200\\text{ V}$."
    ),
    (
        "In the previous question ($v = 100 + 100 \\sin(100\\pi t)\\text{ V}$), the RMS voltage is:",
        ["$122.5\\text{ V}$", "$100\\text{ V}$", "$141.4\\text{ V}$", "$200\\text{ V}$"],
        0,
        "$V_{\\text{rms}} = \\sqrt{V_{\\text{dc}}^2 + \\frac{V_0^2}{2}} = \\sqrt{100^2 + \\frac{100^2}{2}} = \\sqrt{10000 + 5000} = \\sqrt{15000} \\approx 122.47\\text{ V} \\approx 122.5\\text{ V}$."
    ),
    (
        "A direct current of $3\\text{ A}$ and an alternating current $i = 4 \\sin(\\omega t)\\text{ A}$ flow through the same wire simultaneously. The reading of a hot-wire ammeter connected in the line will be:",
        ["$\\sqrt{17}\\text{ A}$", "$7\\text{ A}$", "$5\\text{ A}$", "$3.5\\text{ A}$"],
        0,
        "A hot-wire ammeter measures total RMS current: $I_{\\text{rms}} = \\sqrt{I_{\\text{dc}}^2 + I_{\\text{ac,rms}}^2} = \\sqrt{3^2 + \\left(\\frac{4}{\\sqrt{2}}\\right)^2} = \\sqrt{9 + 8} = \\sqrt{17}\\text{ A} \\approx 4.12\\text{ A}$."
    ),
    (
        "An alternating current is given by $I = I_0 \\sin(2\\pi f t)$. The time required for the current to change from zero to its first positive peak is:",
        ["$\\frac{1}{4f}$", "$\\frac{1}{2f}$", "$\\frac{1}{f}$", "$\\frac{1}{8f}$"],
        0,
        "The period is $T = 1/f$. The current reaches its first positive peak at $t = T/4 = \\frac{1}{4f}$."
    )
]

for i, item in enumerate(rms_data):
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
    
    questions.append(make_q("RMS values", item[0], new_opts, target_idx, item[3]))

# ==========================================
# 6. LC oscillations (45 MCQs)
# ==========================================

lc_data = [
    (
        "The natural angular frequency $\\omega_0$ of free electromagnetic oscillations in an ideal $LC$ circuit consisting of inductance $L$ and capacitance $C$ is:",
        ["$\\frac{1}{\\sqrt{LC}}$", "$\\sqrt{LC}$", "$\\frac{1}{LC}$", "$\\frac{L}{C}$"],
        0,
        "By applying Kirchhoff's loop rule, $L \\frac{d^2 q}{dt^2} + \\frac{q}{C} = 0 \\implies \\frac{d^2 q}{dt^2} + \\left(\\frac{1}{LC}\\right) q = 0$. Comparing with the standard simple harmonic equation $\\frac{d^2 q}{dt^2} + \\omega_0^2 q = 0$, we find $\\omega_0 = \\frac{1}{\\sqrt{LC}}$."
    ),
    (
        "An $LC$ circuit contains a $20\\text{ mH}$ inductor and a $50\\text{ }\\mu\\text{F}$ capacitor with an initial charge of $10\\text{ mC}$. The maximum current in the circuit is:",
        ["$10\\text{ A}$", "$5\\text{ A}$", "$2\\text{ A}$", "$1\\text{ A}$"],
        0,
        "By energy conservation, the maximum electrical energy stored in the capacitor equals the maximum magnetic energy stored in the inductor: $\\frac{q_0^2}{2C} = \\frac{1}{2} L I_0^2 \\implies I_0 = \\frac{q_0}{\\sqrt{LC}} = \\frac{10 \\times 10^{-3}}{\\sqrt{20 \\times 10^{-3} \\times 50 \\times 10^{-6}}} = \\frac{10^{-2}}{\\sqrt{10^{-6}}} = \\frac{10^{-2}}{10^{-3}} = 10\\text{ A}$."
    ),
    (
        "In an ideal $LC$ oscillation circuit with initial charge $q_0$, the total energy stored at any instant is:",
        ["$\\frac{q_0^2}{2C}$", "$\\frac{q^2}{2C}$", "$\\frac{1}{2} L i^2$", "Zero"],
        0,
        "Because there is no resistance ($R = 0$) in an ideal $LC$ circuit, no energy is dissipated as heat. The total energy remains strictly conserved at all times: $E = \\frac{q^2}{2C} + \\frac{1}{2} L i^2 = \\frac{q_0^2}{2C}$."
    ),
    (
        "In an $LC$ oscillation circuit, the frequency of oscillation of the electric and magnetic energies is:",
        ["Twice the frequency of the current oscillation", "Equal to the frequency of the current oscillation", "Half the frequency of the current oscillation", "Four times the frequency of current oscillation"],
        0,
        "The charge and current oscillate with frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$: $q(t) = q_0 \\cos(\\omega_0 t)$ and $i(t) = -I_0 \\sin(\\omega_0 t)$. The energy stored in the capacitor is $U_E = \\frac{q^2}{2C} = \\frac{q_0^2}{2C} \\cos^2(\\omega_0 t) = \\frac{q_0^2}{4C}(1 + \\cos(2\\omega_0 t))$. Thus, the energy oscillates at angular frequency $2\\omega_0$, which is twice the frequency of the current oscillation."
    ),
    (
        "In an $LC$ circuit with initial charge $q_0$ on the capacitor, the electric energy stored in the capacitor will be equal to the magnetic energy stored in the inductor when the charge on the capacitor is:",
        ["$\\frac{q_0}{\\sqrt{2}}$", "$\\frac{q_0}{2}$", "$\\frac{q_0}{4}$", "$q_0$"],
        0,
        "Total energy is $E = \\frac{q_0^2}{2C}$. When electric and magnetic energies are equal, $U_E = \\frac{1}{2} E \\implies \\frac{q^2}{2C} = \\frac{1}{2} \\left(\\frac{q_0^2}{2C}\\right) \\implies q^2 = \\frac{q_0^2}{2} \\implies q = \\frac{q_0}{\\sqrt{2}}$."
    ),
    (
        "In an $LC$ oscillator, starting from fully charged capacitor at $t = 0$, the time at which the energy is equally divided between electric and magnetic fields for the first time is ($T$ is the time period of oscillation):",
        ["$T / 8$", "$T / 4$", "$T / 2$", "$T / 16$"],
        0,
        "Charge is $q(t) = q_0 \\cos(\\omega t) = q_0 \\cos\\left(\\frac{2\\pi}{T} t\\right)$. Energy is equally divided when $q = \\frac{q_0}{\\sqrt{2}}$. Thus $\\cos\\left(\\frac{2\\pi}{T} t\\right) = \\frac{1}{\\sqrt{2}} \\implies \\frac{2\\pi}{T} t = \\frac{\\pi}{4} \\implies t = \\frac{T}{8}$."
    ),
    (
        "In the mechanical analogy of an $LC$ circuit with a mass-spring harmonic oscillator, the inductance $L$ corresponds to:",
        ["Mass $m$", "Spring constant $k$", "Displacement $x$", "Velocity $v$"],
        0,
        "In the mechanical-electrical analogy, inductance $L$ represents electrical inertia (opposing changes in current), which corresponds to inertial mass $m$ (opposing changes in velocity) in mechanics."
    ),
    (
        "In the mechanical analogy of an $LC$ circuit, the reciprocal of capacitance $1/C$ corresponds to:",
        ["Spring constant $k$", "Mass $m$", "Friction coefficient $b$", "Displacement $x$"],
        0,
        "The mechanical equation is $m \\frac{d^2 x}{dt^2} + k x = 0$, while the electrical equation is $L \\frac{d^2 q}{dt^2} + \\frac{1}{C} q = 0$. Comparing the two gives $L \\leftrightarrow m$, $q \\leftrightarrow x$, and $\\frac{1}{C} \\leftrightarrow k$."
    ),
    (
        "In an $LC$ circuit, if the capacitance is doubled and the inductance is halved, the natural frequency of oscillation will:",
        ["Remain unchanged", "Double", "Be halved", "Quadruple"],
        0,
        "Frequency is $f = \\frac{1}{2\\pi\\sqrt{LC}}$. The new product is $L' C' = (L/2)(2C) = LC$. Because the product $LC$ remains unchanged, the natural frequency remains unchanged."
    ),
    (
        "A charged capacitor of capacitance $C$ discharges through an inductor of inductance $L$. The current in the circuit is maximum when:",
        ["The charge on the capacitor is zero", "The charge on the capacitor is maximum", "The energy in the electric field is maximum", "The potential difference across the capacitor is maximum"],
        0,
        "By energy conservation, total energy $E = \\frac{q^2}{2C} + \\frac{1}{2} L i^2$ is constant. The current $i$ is maximum when the magnetic energy is maximum, which occurs when the electric energy is zero, i.e., when $q = 0$."
    ),
    (
        "An $LC$ circuit has $L = 1\\text{ mH}$ and $C = 0.1\\text{ }\\mu\\text{F}$. The resonant frequency of oscillation is:",
        ["$15.9\\text{ kHz}$", "$31.8\\text{ kHz}$", "$1.59\\text{ kHz}$", "$159\\text{ kHz}$"],
        0,
        "$f = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi\\sqrt{10^{-3} \\times 10^{-7}}} = \\frac{1}{2\\pi\\sqrt{10^{-10}}} = \\frac{10^5}{2\\pi} \\approx \\frac{100000}{6.283} \\approx 15915\\text{ Hz} \\approx 15.9\\text{ kHz}$."
    ),
    (
        "In a real $LC$ circuit, oscillations are damped and eventually die out because of:",
        ["Joule heating in the resistance of the wires and electromagnetic radiation", "Mass of the electrons", "Gravitational force on charges", "Constant electrostatic leakage"],
        0,
        "Every real inductor and connecting wire possesses non-zero electrical resistance $R$, which continuously converts electrical energy into Joule heat ($i^2 R$). In addition, accelerated charges radiate energy as electromagnetic waves."
    ),
    (
        "An $LC$ circuit with $L = 10\\text{ mH}$ and $C = 1\\text{ }\\mu\\text{F}$ is oscillating. The capacitor has a maximum potential of $50\\text{ V}$. The maximum current in the inductor is:",
        ["$0.5\\text{ A}$", "$5\\text{ A}$", "$0.05\\text{ A}$", "$1.0\\text{ A}$"],
        0,
        "Maximum electric energy is $U_E = \\frac{1}{2} C V_0^2 = \\frac{1}{2} (10^{-6}) (50)^2 = 1.25 \\times 10^{-3}\\text{ J}$. Equating to maximum magnetic energy $\\frac{1}{2} L I_0^2$: $\\frac{1}{2} (10 \\times 10^{-3}) I_0^2 = 1.25 \\times 10^{-3} \\implies 10 I_0^2 = 2.5 \\implies I_0^2 = 0.25 \\implies I_0 = 0.5\\text{ A}$."
    ),
    (
        "The differential equation describing free oscillations of charge $q$ in an $LC$ circuit is:",
        ["$\\frac{d^2 q}{dt^2} + \\frac{1}{LC} q = 0$", "$\\frac{d^2 q}{dt^2} + \\frac{L}{C} q = 0$", "$\\frac{dq}{dt} + \\frac{1}{LC} q = 0$", "$\\frac{d^2 q}{dt^2} + LC q = 0$"],
        0,
        "Kirchhoff's loop rule gives $-L \\frac{di}{dt} - \\frac{q}{C} = 0$. Since $i = \\frac{dq}{dt}$, $\\frac{di}{dt} = \\frac{d^2 q}{dt^2}$. Substituting gives $L \\frac{d^2 q}{dt^2} + \\frac{q}{C} = 0 \\implies \\frac{d^2 q}{dt^2} + \\frac{1}{LC} q = 0$."
    ),
    (
        "When an $LC$ circuit oscillates, the phase difference between the charge on the capacitor and the current in the circuit is:",
        ["$\\pi / 2$", "$\\pi$", "$0$", "$2\\pi$"],
        0,
        "If charge is $q(t) = q_0 \\cos(\\omega t)$, then current is $i(t) = \\frac{dq}{dt} = -q_0 \\omega \\sin(\\omega t) = q_0 \\omega \\cos(\\omega t + \\pi/2)$. Thus the current leads the charge by a phase angle of $\\pi/2$ (or $90^\\circ$)."
    ),
    (
        "In an $LC$ oscillation circuit, what is the value of $\\frac{di}{dt}$ when the current in the circuit is maximum?",
        ["Zero", "Maximum", "$\\frac{q_0}{LC}$", "$\\omega I_0$"],
        0,
        "When current $i(t)$ reaches its maximum value, its derivative with respect to time is zero: $\\frac{di}{dt} = 0$. At this instant, the potential difference across the inductor ($L \\frac{di}{dt}$) is zero, which is consistent with the capacitor being completely discharged ($q = 0$)."
    ),
    (
        "An $LC$ circuit is oscillating with frequency $f$. What is the frequency at which the magnetic field energy reaches its maximum value?",
        ["$2f$", "$f$", "$f / 2$", "$4f$"],
        0,
        "Magnetic energy is $U_B = \\frac{1}{2} L i^2 = \\frac{1}{2} L I_0^2 \\sin^2(\\omega t) = \\frac{1}{4} L I_0^2 (1 - \\cos(2\\omega t))$. The angular frequency of this energy variation is $2\\omega$, so the frequency is $2f$."
    ),
    (
        "In an $LCR$ circuit, for the circuit to be critically damped (no oscillations occur and charge returns to zero most rapidly), the resistance $R$ must equal:",
        ["$2\\sqrt{\\frac{L}{C}}$", "$\\sqrt{\\frac{L}{C}}$", "$\\frac{1}{2}\\sqrt{\\frac{L}{C}}$", "$4\\sqrt{\\frac{L}{C}}$"],
        0,
        "The characteristic equation for damped $LCR$ oscillations is $s^2 + \\frac{R}{L} s + \\frac{1}{LC} = 0$. Critical damping occurs when the discriminant is zero: $\\left(\\frac{R}{L}\\right)^2 - \\frac{4}{LC} = 0 \\implies R = 2\\sqrt{\\frac{L}{C}}$."
    ),
    (
        "For underdamped (oscillatory) discharge in an $LCR$ circuit, the condition on resistance $R$ is:",
        ["$R < 2\\sqrt{\\frac{L}{C}}$", "$R > 2\\sqrt{\\frac{L}{C}}$", "$R = 2\\sqrt{\\frac{L}{C}}$", "$R = 0$ only"],
        0,
        "Damped oscillations occur when the roots are complex conjugates, requiring $\\frac{R^2}{4L^2} < \\frac{1}{LC} \\implies R < 2\\sqrt{\\frac{L}{C}}$."
    ),
    (
        "An $LC$ circuit has $L = 2\\text{ H}$ and $C = 8\\text{ }\\mu\\text{F}$. The time period of electromagnetic oscillations is:",
        ["$2.51 \\times 10^{-2}\\text{ s}$", "$1.26 \\times 10^{-2}\\text{ s}$", "$5.02 \\times 10^{-2}\\text{ s}$", "$6.28 \\times 10^{-3}\\text{ s}$"],
        0,
        "$T = 2\\pi\\sqrt{LC} = 2\\pi \\sqrt{2 \\times 8 \\times 10^{-6}} = 2\\pi \\sqrt{16 \\times 10^{-6}} = 2\\pi \\times 4 \\times 10^{-3} = 8\\pi \\times 10^{-3}\\text{ s} \\approx 2.513 \\times 10^{-2}\\text{ s}$."
    ),
    (
        "In an oscillating $LC$ circuit, when the charge on the capacitor is half of its maximum value ($q = q_0 / 2$), the fraction of total energy stored in the magnetic field is:",
        ["$3/4$", "$1/4$", "$1/2$", "$7/8$"],
        0,
        "Electrical energy is $U_E = \\frac{q^2}{2C} = \\frac{(q_0/2)^2}{2C} = \\frac{1}{4} \\frac{q_0^2}{2C} = \\frac{1}{4} E_{\\text{total}}$. By energy conservation, magnetic energy is $U_B = E_{\\text{total}} - U_E = \\left(1 - \\frac{1}{4}\\right) E_{\\text{total}} = \\frac{3}{4} E_{\\text{total}}$."
    ),
    (
        "In an $LC$ circuit, the maximum potential difference across the capacitor is $V_0$. The potential difference across the inductor when the current is half of its maximum value is:",
        ["$\\frac{\\sqrt{3}}{2} V_0$", "$\\frac{V_0}{2}$", "$\\frac{V_0}{\\sqrt{2}}$", "$\\frac{3}{4} V_0$"],
        0,
        "Total energy is $E = \\frac{1}{2} C V_0^2 = \\frac{1}{2} L I_0^2$. When $i = I_0 / 2$, magnetic energy is $U_B = \\frac{1}{2} L (I_0/2)^2 = \\frac{1}{4} \\left(\\frac{1}{2} L I_0^2\\right) = \\frac{1}{4} E$. The electrical energy is $U_E = E - U_B = \\frac{3}{4} E \\implies \\frac{1}{2} C V^2 = \\frac{3}{4} \\left(\\frac{1}{2} C V_0^2\\right) \\implies V = \\frac{\\sqrt{3}}{2} V_0$. In an $LC$ loop, $V_L = V_C = \\frac{\\sqrt{3}}{2} V_0$."
    ),
    (
        "A radio can tune over the frequency range of the medium wave broadcast band ($800\\text{ kHz}$ to $1200\\text{ kHz}$). If its $LC$ circuit has an effective inductance of $200\\text{ }\\mu\\text{H}$, the range of its variable capacitor must be:",
        ["$87.9\\text{ pF}$ to $197.8\\text{ pF}$", "$50\\text{ pF}$ to $100\\text{ pF}$", "$100\\text{ pF}$ to $300\\text{ pF}$", "$25\\text{ pF}$ to $75\\text{ pF}$"],
        0,
        "$C = \\frac{1}{4\\pi^2 f^2 L}$. For $f_1 = 1200\\text{ kHz} = 1.2 \\times 10^6\\text{ Hz}$: $C_{\\text{min}} = \\frac{1}{4\\pi^2 (1.2 \\times 10^6)^2 (200 \\times 10^{-6})} \\approx 87.9\\text{ pF}$. For $f_2 = 800\\text{ kHz} = 0.8 \\times 10^6\\text{ Hz}$: $C_{\\text{max}} = \\frac{1}{4\\pi^2 (0.8 \\times 10^6)^2 (200 \\times 10^{-6})} \\approx 197.8\\text{ pF}$."
    ),
    (
        "An $LC$ circuit oscillates with a time period $T$. If the distance between the plates of the parallel plate capacitor is doubled, the new time period of oscillation will be:",
        ["$T / \\sqrt{2}$", "$\\sqrt{2} T$", "$2T$", "$T / 2$"],
        0,
        "Capacitance of a parallel plate capacitor is $C = \\frac{\\varepsilon_0 A}{d}$. Doubling $d$ halves the capacitance: $C' = C/2$. The time period is $T = 2\\pi\\sqrt{LC}$. The new period is $T' = 2\\pi\\sqrt{L(C/2)} = \\frac{T}{\\sqrt{2}}$."
    ),
    (
        "In an $LC$ oscillator, the energy transfers periodically between:",
        ["The electric field in the capacitor and the magnetic field in the inductor", "Thermal energy in the resistor and kinetic energy", "Electrostatic potential energy and chemical energy", "Nuclear binding energy and gravitational energy"],
        0,
        "In an ideal $LC$ tank circuit, energy oscillates back and forth between electrostatic potential energy stored in the electric field between the capacitor plates ($q^2/2C$) and magnetic potential energy stored in the magnetic field of the inductor coil ($\\frac{1}{2} L i^2$)."
    ),
    (
        "What is the dimension of $\\sqrt{LC}$?",
        ["$[\\text{T}]$", "$[\\text{T}^{-1}]$", "$[\\text{L}]$", "$[\\text{M T}^{-1}]$"],
        0,
        "Since the angular frequency is $\\omega = \\frac{1}{\\sqrt{LC}}$, and the dimension of frequency is $[\\omega] = [\\text{T}^{-1}]$, the dimension of $\\sqrt{LC}$ is $[\\omega]^{-1} = [\\text{T}]$ (time)."
    ),
    (
        "What is the dimension of $\\frac{1}{\\sqrt{LC}}$?",
        ["$[\\text{T}^{-1}]$", "$[\\text{T}]$", "$[\\text{L T}^{-1}]$", "$[\\text{M L}^2]$"],
        0,
        "$\\frac{1}{\\sqrt{LC}} = \\omega_0$, which is angular frequency having dimension $[\\text{T}^{-1}]$ (unit is $\\text{rad/s}$ or $\\text{s}^{-1}$)."
    ),
    (
        "What is the dimension of the ratio $\\sqrt{\\frac{L}{C}}$?",
        ["$[\\text{M L}^2 \\text{T}^{-3} \\text{A}^{-2}]$ (Ohm)", "$[\\text{T}]$ (Second)", "$[\\text{A}]$ (Ampere)", "$[\\text{M L}^2 \\text{T}^{-2}]$ (Joule)"],
        0,
        "$\\sqrt{L/C}$ has the dimensions of impedance/resistance (called characteristic impedance of the LC circuit): unit is $\\Omega$, dimension is $[\\text{M L}^2 \\text{T}^{-3} \\text{A}^{-2}]$."
    ),
    (
        "What is the dimension of $\\frac{L}{R}$?",
        ["$[\\text{T}]$", "$[\\text{T}^{-1}]$", "$[\\text{M}]$", "$[\\text{L}]$"],
        0,
        "$\\frac{L}{R} = \\tau_L$ is the inductive time constant, which has the dimension of time $[\\text{T}]$."
    ),
    (
        "What is the dimension of $R C$?",
        ["$[\\text{T}]$", "$[\\text{T}^{-1}]$", "$[\\text{M}]$", "$[\\text{A}]$"],
        0,
        "$R C = \\tau_C$ is the capacitive time constant, which has the dimension of time $[\\text{T}]$."
    ),
    (
        "An $LC$ circuit consists of an inductor $L = 50\\text{ mH}$ and an initially charged capacitor $C = 20\\text{ }\\mu\\text{F}$. If the maximum charge on the capacitor is $2\\text{ mC}$, the maximum energy stored in the magnetic field of the inductor is:",
        ["$0.1\\text{ J}$", "$0.2\\text{ J}$", "$0.05\\text{ J}$", "$1.0\\text{ J}$"],
        0,
        "By conservation of energy, the maximum magnetic energy equals the initial electrical energy of the capacitor: $U_{B,\\text{max}} = \\frac{q_0^2}{2C} = \\frac{(2 \\times 10^{-3})^2}{2 \\times 20 \\times 10^{-6}} = \\frac{4 \\times 10^{-6}}{40 \\times 10^{-6}} = 0.1\\text{ J}$."
    ),
    (
        "In an $LC$ circuit, the charge on the capacitor at any time $t$ is $q = q_0 \\cos(\\omega t)$. The rate of change of magnetic energy $\\frac{dU_B}{dt}$ is proportional to:",
        ["$\\sin(2\\omega t)$", "$\\cos(2\\omega t)$", "$\\sin(\\omega t)$", "$\\cos(\\omega t)$"],
        0,
        "Magnetic energy is $U_B = \\frac{1}{2} L i^2 = \\frac{1}{4} L I_0^2 (1 - \\cos(2\\omega t))$. Taking the derivative with respect to time gives $\\frac{dU_B}{dt} = \\frac{1}{2} L I_0^2 \\omega \\sin(2\\omega t) \\propto \\sin(2\\omega t)$."
    ),
    (
        "In an $LC$ circuit, when the energy stored in the inductor is three times the energy stored in the capacitor, the charge on the capacitor is:",
        ["$\\frac{q_0}{2}$", "$\\frac{q_0}{\\sqrt{3}}$", "$\\frac{q_0}{4}$", "$\\frac{\\sqrt{3}}{2} q_0$"],
        0,
        "Given $U_B = 3 U_E$. Total energy $E = U_E + U_B = 4 U_E$. Since $E = \\frac{q_0^2}{2C}$ and $U_E = \\frac{q^2}{2C}$: $\\frac{q_0^2}{2C} = 4 \\frac{q^2}{2C} \\implies q^2 = \\frac{q_0^2}{4} \\implies q = \\frac{q_0}{2}$."
    ),
    (
        "A capacitor of $1\\text{ }\\mu\\text{F}$ is charged to $100\\text{ V}$ and then connected across an inductor of $1\\text{ mH}$. The frequency of the resulting electromagnetic oscillations is:",
        ["$5033\\text{ Hz}$", "$1000\\text{ Hz}$", "$1590\\text{ Hz}$", "$3180\\text{ Hz}$"],
        0,
        "$f = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi\\sqrt{10^{-3} \\times 10^{-6}}} = \\frac{1}{2\\pi\\sqrt{10^{-9}}} = \\frac{1}{2\\pi (3.162 \\times 10^{-5})} = \\frac{10^5}{2\\pi \\times 3.162} \\approx \\frac{100000}{19.869} \\approx 5033\\text{ Hz}$."
    ),
    (
        "In an $LC$ circuit, the current is given by $i = I_0 \\sin(\\omega t)$. The voltage across the capacitor is given by:",
        ["$V_0 \\cos(\\omega t)$", "$-V_0 \\cos(\\omega t)$", "$V_0 \\sin(\\omega t)$", "$-V_0 \\sin(\\omega t)$"],
        1,
        "Charge is $q = \\int i dt = \\int I_0 \\sin(\\omega t) dt = -\\frac{I_0}{\\omega} \\cos(\\omega t)$. Thus the capacitor voltage is $V_C = \\frac{q}{C} = -\\left(\\frac{I_0}{\\omega C}\\right) \\cos(\\omega t) = -V_0 \\cos(\\omega t)$."
    ),
    (
        "If the frequency of oscillation of an $LC$ circuit is $f$, the frequency with which the electrostatic energy of the capacitor becomes zero is:",
        ["$2f$", "$f$", "$4f$", "$f / 2$"],
        0,
        "Electrostatic energy $U_E = \\frac{q_0^2}{2C} \\cos^2(2\\pi f t)$ drops to zero whenever $\\cos(2\\pi f t) = 0$. This happens twice in each full cycle of the current. Therefore, the electrostatic energy becomes zero at a frequency of $2f$."
    ),
    (
        "In an $LC$ oscillator, if the initial energy is $E_0$, what is the maximum value of the displacement current inside the capacitor?",
        ["$\\omega_0 q_0 = \\sqrt{\\frac{2E_0}{L}}$", "$\\frac{E_0}{\\sqrt{LC}}$", "$q_0 \\sqrt{LC}$", "Zero"],
        0,
        "The displacement current inside the capacitor equals the conduction current in the connecting wires: $I_d = I_c = i(t)$. Its maximum value is $I_0 = \\omega_0 q_0$. Since $E_0 = \\frac{1}{2} L I_0^2$, $I_0 = \\sqrt{\\frac{2E_0}{L}}$."
    ),
    (
        "An $LC$ circuit has an inductance of $20\\text{ mH}$ and capacitance of $5\\text{ }\\mu\\text{F}$. If the maximum current is $0.1\\text{ A}$, the maximum voltage across the capacitor is:",
        ["$6.32\\text{ V}$", "$2.0\\text{ V}$", "$10\\text{ V}$", "$12.6\\text{ V}$"],
        0,
        "Energy conservation: $\\frac{1}{2} C V_0^2 = \\frac{1}{2} L I_0^2 \\implies V_0 = I_0 \\sqrt{\\frac{L}{C}} = 0.1 \\times \\sqrt{\\frac{20 \\times 10^{-3}}{5 \\times 10^{-6}}} = 0.1 \\times \\sqrt{4000} = 0.1 \\times 63.25 \\approx 6.32\\text{ V}$."
    ),
    (
        "A capacitor $C$ is fully charged with charge $Q_0$ and connected across an inductor $L$. At time $t = \\frac{\\pi}{2}\\sqrt{LC}$, the charge on the capacitor is:",
        ["Zero", "$Q_0$", "$Q_0 / 2$", "$Q_0 / \\sqrt{2}$"],
        0,
        "Since $\\omega = \\frac{1}{\\sqrt{LC}}$, the angle is $\\theta = \\omega t = \\frac{1}{\\sqrt{LC}} \\left(\\frac{\\pi}{2}\\sqrt{LC}\\right) = \\frac{\\pi}{2}$. Charge is $q(t) = Q_0 \\cos\\left(\\frac{\\pi}{2}\\right) = 0$."
    ),
    (
        "In an $LC$ circuit, which of the following remains constant at all times during undamped oscillations?",
        ["Total electromagnetic energy ($U_E + U_B$)", "Charge on the capacitor", "Current through the inductor", "Potential difference across the inductor"],
        0,
        "In an ideal $LC$ circuit with zero resistance, energy is continuously converted between electric field energy $U_E$ and magnetic field energy $U_B$, but their sum $U_{\\text{total}} = U_E + U_B$ remains strictly constant."
    ),
    (
        "What is the effect on the frequency of an $LC$ oscillator if a dielectric of constant $K = 4$ is inserted between the plates of the capacitor?",
        ["The frequency is halved", "The frequency is doubled", "The frequency is quartered", "The frequency remains unchanged"],
        0,
        "Capacitance increases by factor $K = 4$ ($C' = 4C$). Since $f = \\frac{1}{2\\pi\\sqrt{LC}}$, the new frequency is $f' = \\frac{1}{2\\pi\\sqrt{L(4C)}} = \\frac{1}{2} \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{f}{2}$ (the frequency is halved)."
    ),
    (
        "What is the effect on the frequency of an $LC$ oscillator if a soft iron core of relative permeability $\\mu_r = 9$ is placed inside the inductor?",
        ["The frequency becomes one-third of the original value", "The frequency triples", "The frequency becomes one-ninth", "The frequency remains unchanged"],
        0,
        "Inductance increases by factor $\\mu_r = 9$ ($L' = 9L$). The new frequency is $f' = \\frac{1}{2\\pi\\sqrt{(9L)C}} = \\frac{1}{3} f$."
    ),
    (
        "An $LC$ circuit oscillates at frequency $1\\text{ MHz}$. If an inductor of $4L$ and a capacitor of $C/4$ are used instead, the new resonant frequency will be:",
        ["$1\\text{ MHz}$", "$2\\text{ MHz}$", "$0.5\\text{ MHz}$", "$4\\text{ MHz}$"],
        0,
        "The product $L' C' = (4L)(C/4) = LC$. Because the $LC$ product is identical, the resonant frequency remains unchanged at $1\\text{ MHz}$."
    ),
    (
        "In an $LC$ circuit, the current is zero at $t = 0$. The first time at which the magnetic energy equals the electric energy is:",
        ["$T / 8$", "$T / 4$", "$T / 2$", "$3T / 8$"],
        0,
        "If current is zero at $t = 0$, $i(t) = I_0 \\sin(\\omega t)$. Magnetic energy is $U_B = \\frac{1}{2} L i^2$. It equals half the total energy when $i = I_0 / \\sqrt{2} \\implies \\sin(\\omega t) = 1/\\sqrt{2} \\implies \\omega t = \\pi/4 \\implies t = \\frac{T}{8}$."
    ),
    (
        "The electromagnetic oscillations in an $LC$ circuit are mathematically analogous to:",
        ["Simple harmonic motion of a mass on a spring", "Free fall under gravity", "Uniform circular motion", "Projectile motion"],
        0,
        "Both the mass-spring mechanical oscillator and the $LC$ electrical tank circuit are governed by identical second-order linear differential equations: $\\frac{d^2 x}{dt^2} + \\omega^2 x = 0$ and $\\frac{d^2 q}{dt^2} + \\omega^2 q = 0$, exhibiting exact physical correspondence."
    )
]

for i, item in enumerate(lc_data):
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
    
    questions.append(make_q("LC oscillations", item[0], new_opts, target_idx, item[3]))

output_path = os.path.join(os.path.dirname(__file__), "emi_ac_batch3.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} MCQs for batch 3 saved to {output_path}")
