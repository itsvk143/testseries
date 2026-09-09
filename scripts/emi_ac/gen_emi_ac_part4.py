import json
import os

# Subtopic:
# 7. AC circuits (45 MCQs)

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
# 7. AC circuits (45 MCQs)
# ==========================================

ac_circuits_data = [
    (
        "In a series $LCR$ circuit, the voltages across the resistor, inductor, and capacitor are $V_R = 40\\text{ V}$, $V_L = 80\\text{ V}$, and $V_C = 50\\text{ V}$ respectively. The total voltage of the AC source is:",
        ["$50\\text{ V}$", "$170\\text{ V}$", "$70\\text{ V}$", "$90\\text{ V}$"],
        0,
        "In a series $LCR$ circuit, the source voltage is given by phasor addition: $V = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{40^2 + (80 - 50)^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ V}$."
    ),
    (
        "At series resonance in an $LCR$ circuit, which of the following conditions holds true?",
        ["Impedance is minimum and current is maximum", "Impedance is maximum and current is minimum", "Impedance is zero", "Current is zero"],
        0,
        "At resonance, inductive reactance equals capacitive reactance ($X_L = X_C$), so the net reactance is zero. The impedance becomes minimum ($Z = R$), and the current reaches its maximum possible value ($I_0 = V_0 / R$)."
    ),
    (
        "In a series $LCR$ circuit at resonance, the phase difference between the applied voltage and the current is:",
        ["$0^\\circ$", "$90^\\circ$", "$180^\\circ$", "$45^\\circ$"],
        0,
        "At resonance, $X_L = X_C$, so $\\tan\\phi = \\frac{X_L - X_C}{R} = 0 \\implies \\phi = 0^\\circ$. The current and voltage are in phase, behaving as a purely resistive circuit with power factor $\\cos\\phi = 1$."
    ),
    (
        "The resonant frequency of a series $LCR$ circuit with $L = 0.5\\text{ H}$, $C = 8\\text{ }\\mu\\text{F}$, and $R = 10\\text{ }\\Omega$ is:",
        ["$\\frac{250}{\\pi}\\text{ Hz}$", "$\\frac{500}{\\pi}\\text{ Hz}$", "$250\\text{ Hz}$", "$500\\text{ Hz}$"],
        0,
        "Resonant angular frequency is $\\omega_r = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{0.5 \\times 8 \\times 10^{-6}}} = \\frac{1}{\\sqrt{4 \\times 10^{-6}}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ rad/s}$. Frequency $f_r = \\frac{\\omega_r}{2\\pi} = \\frac{500}{2\\pi} = \\frac{250}{\\pi}\\text{ Hz}$."
    ),
    (
        "The Quality factor ($Q$-factor) of a series $LCR$ resonant circuit is given by:",
        ["$\\frac{1}{R}\\sqrt{\\frac{L}{C}}$", "$R\\sqrt{\\frac{C}{L}}$", "$\\frac{1}{L}\\sqrt{\\frac{R}{C}}$", "$\\frac{1}{C}\\sqrt{\\frac{L}{R}}$"],
        0,
        "$Q = \\frac{\\omega_r L}{R} = \\frac{1}{\\sqrt{LC}} \\frac{L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$."
    ),
    (
        "To increase the sharpness of resonance (selectivity) in a tuning circuit, one should:",
        ["Decrease $R$ and increase $L$", "Increase $R$ and decrease $L$", "Increase both $R$ and $C$", "Decrease both $L$ and $C$"],
        0,
        "Sharpness of resonance is measured by the quality factor $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$. To make $Q$ as large as possible (sharper resonance), the circuit resistance $R$ must be reduced and the ratio $L/C$ increased."
    ),
    (
        "A series $LCR$ circuit with $R = 20\\text{ }\\Omega$, $L = 1.5\\text{ H}$, and $C = 35\\text{ }\\mu\\text{F}$ is connected to a variable-frequency $200\\text{ V}$ AC supply. When the frequency matches the resonant frequency, the average power transferred to the circuit is:",
        ["$2000\\text{ W}$", "$1000\\text{ W}$", "$4000\\text{ W}$", "$500\\text{ W}$"],
        0,
        "At resonance, $Z = R = 20\\text{ }\\Omega$, and power factor is $\\cos\\phi = 1$. The average power is $P = \\frac{V_{\\text{rms}}^2}{R} = \\frac{200^2}{20} = \\frac{40000}{20} = 2000\\text{ W}$."
    ),
    (
        "In a purely inductive AC circuit, the current:",
        ["Lags behind the voltage by $\\pi/2$", "Leads the voltage by $\\pi/2$", "Is in phase with the voltage", "Lags behind the voltage by $\\pi$"],
        0,
        "In a pure inductor, $V(t) = L \\frac{dI}{dt}$. For $V(t) = V_0 \\sin(\\omega t)$, $I(t) = -\\frac{V_0}{\\omega L} \\cos(\\omega t) = I_0 \\sin(\\omega t - \\pi/2)$. Hence, current lags the applied voltage by a phase angle of $\\pi/2$ ($90^\\circ$)."
    ),
    (
        "In a purely capacitive AC circuit, the current:",
        ["Leads the voltage by $\\pi/2$", "Lags behind the voltage by $\\pi/2$", "Is in phase with the voltage", "Leads the voltage by $\\pi$"],
        0,
        "In a pure capacitor, $I(t) = C \\frac{dV}{dt}$. For $V(t) = V_0 \\sin(\\omega t)$, $I(t) = \\omega C V_0 \\cos(\\omega t) = I_0 \\sin(\\omega t + \\pi/2)$. Hence, current leads the applied voltage by $\\pi/2$ ($90^\\circ$)."
    ),
    (
        "The average power consumed over a full cycle in a purely inductive or purely capacitive AC circuit is:",
        ["Zero", "$V_{\\text{rms}} I_{\\text{rms}}$", "$\\frac{1}{2} V_{\\text{rms}} I_{\\text{rms}}$", "$V_0 I_0$"],
        0,
        "In purely reactive circuits (pure $L$ or pure $C$), the phase difference between voltage and current is $\\phi = 90^\\circ$. The power factor is $\\cos(90^\\circ) = 0$. Therefore, average power $P = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi = 0$."
    ),
    (
        "The component of alternating current that consumes zero electrical power in an AC circuit is called:",
        ["Wattless current", "RMS current", "Displacement current", "Eddy current"],
        0,
        "The component of current in quadrature with the voltage ($I_{\\text{wattless}} = I_{\\text{rms}} \\sin\\phi$) has a phase difference of $90^\\circ$ with the voltage, consuming zero net electrical power over a cycle. It is known as the wattless (or idle) current."
    ),
    (
        "A choke coil is an electrical inductor used to control AC current. An ideal choke coil should have:",
        ["High inductance and zero resistance", "Low inductance and high resistance", "Zero inductance and high resistance", "Equal values of inductance and resistance"],
        0,
        "An ideal choke coil offers high inductive reactance ($X_L = \\omega L$) to choke/reduce the alternating current, while its ohmic resistance $R \\approx 0$ ensures virtually zero Joule heating power loss ($P = I^2 R \\approx 0$)."
    ),
    (
        "Why is a choke coil preferred over a rheostat (variable resistor) to reduce alternating current in a circuit?",
        ["A choke coil controls current with minimal power dissipation", "A choke coil increases the frequency of AC", "A choke coil acts as a DC generator", "A rheostat creates high magnetic flux leakage"],
        0,
        "A resistor reduces current by converting electrical energy into wasted heat ($I^2 R$). A choke coil has large inductance and negligible resistance, reducing current through reactance with nearly zero energy loss ($\\\\cos\\phi \\approx 0$)."
    ),
    (
        "In a series $RL$ circuit, $R = 30\\text{ }\\Omega$ and $X_L = 40\\text{ }\\Omega$. The power factor of the circuit is:",
        ["$0.6$", "$0.8$", "$0.75$", "$1.0$"],
        0,
        "Impedance is $Z = \\sqrt{R^2 + X_L^2} = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ }\\Omega$. The power factor is $\\cos\\phi = \\frac{R}{Z} = \\frac{30}{50} = 0.6$."
    ),
    (
        "In a series $RC$ circuit connected to an AC source of voltage $V$, the voltages across $R$ and $C$ are measured to be $12\\text{ V}$ and $16\\text{ V}$ respectively. The source voltage is:",
        ["$20\\text{ V}$", "$28\\text{ V}$", "$4\\text{ V}$", "$14\\text{ V}$"],
        0,
        "In a series $RC$ circuit, $V = \\sqrt{V_R^2 + V_C^2} = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20\\text{ V}$."
    ),
    (
        "A series $LCR$ circuit has $R = 10\\text{ }\\Omega$, $X_L = 100\\text{ }\\Omega$, and $X_C = 100\\text{ }\\Omega$. If an AC source of $220\\text{ V}$ is connected across the combination, the voltmeter reading across the $LC$ combination will be:",
        ["$0\\text{ V}$", "$200\\text{ V}$", "$220\\text{ V}$", "$100\\text{ V}$"],
        0,
        "The voltages across $L$ and $C$ are exactly $180^\\circ$ out of phase: $V_{LC} = |V_L - V_C|$. Since $X_L = X_C$, $V_L = V_C = I X_L$. Therefore, the net voltage across the series $LC$ pair is $|V_L - V_C| = 0\\text{ V}$."
    ),
    (
        "In the previous question, the voltage across the inductor $L$ alone is:",
        ["$2200\\text{ V}$", "$220\\text{ V}$", "$0\\text{ V}$", "$1100\\text{ V}$"],
        0,
        "At resonance, $Z = R = 10\\text{ }\\Omega$. The current is $I = \\frac{V}{R} = \\frac{220}{10} = 22\\text{ A}$. The voltage across the inductor is $V_L = I X_L = 22 \\times 100 = 2200\\text{ V}$. (This demonstrates resonant voltage magnification: $V_L = Q V = 10 \\times 220 = 2200\\text{ V}$)."
    ),
    (
        "The bandwidth $\\Delta\\omega$ of a series $LCR$ resonant circuit is given by:",
        ["$\\frac{R}{L}$", "$\\frac{L}{R}$", "$\\frac{R}{2L}$", "$\\frac{1}{R C}$"],
        0,
        "Bandwidth is the range of frequencies between the two half-power points where current drops to $I_{\\text{max}}/\\sqrt{2}$. It is given by $\\Delta\\omega = \\omega_2 - \\omega_1 = \\frac{R}{L}$."
    ),
    (
        "At the half-power frequencies in a series $LCR$ circuit, the impedance of the circuit is:",
        ["$\\sqrt{2} R$", "$R / \\sqrt{2}$", "$2R$", "$R$"],
        0,
        "At half-power frequencies, power is $P = P_{\\text{max}}/2$, which means $I = I_{\\text{max}}/\\sqrt{2}$. Since $I = V/Z$ and $I_{\\text{max}} = V/R$, we have $\\frac{V}{Z} = \\frac{V}{\\sqrt{2} R} \\implies Z = \\sqrt{2} R$."
    ),
    (
        "In an AC circuit, an inductance $L$ and resistance $R$ are connected in series. If the frequency of the AC source is increased, the impedance $Z$ of the circuit:",
        ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
        0,
        "Impedance is $Z = \\sqrt{R^2 + (2\\pi f L)^2}$. As frequency $f$ increases, inductive reactance $X_L = 2\\pi f L$ increases, causing the total impedance $Z$ to increase."
    ),
    (
        "In an AC circuit containing only a capacitor $C$ and a resistor $R$ in series, if the frequency of the source is increased, the current:",
        ["Increases", "Decreases", "Remains unchanged", "First increases then decreases"],
        0,
        "Capacitive reactance is $X_C = \\frac{1}{2\\pi f C}$. As frequency $f$ increases, $X_C$ decreases, so the impedance $Z = \\sqrt{R^2 + X_C^2}$ decreases. Consequently, the current $I = V/Z$ increases."
    ),
    (
        "A capacitor blocks direct current (DC) because:",
        ["For DC, frequency $f = 0$, so capacitive reactance $X_C = \\frac{1}{2\\pi f C} = \\infty$", "Capacitors have zero resistance to DC", "Inductive reactance is infinite for DC", "DC has infinite frequency"],
        0,
        "Direct current has zero frequency ($f = 0$). The capacitive reactance $X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C} \\to \\infty$, meaning an ideal capacitor acts as an open circuit to steady DC."
    ),
    (
        "An inductor blocks high-frequency alternating current (AC) because:",
        ["Inductive reactance $X_L = 2\\pi f L$ is directly proportional to frequency", "Inductive reactance decreases with frequency", "Capacitive reactance is infinite", "Resistance increases with frequency"],
        0,
        "Inductive reactance is $X_L = \\omega L = 2\\pi f L$. As the frequency $f$ becomes very large, $X_L \\to \\infty$, offering very high opposition (choking effect) to high-frequency signals."
    ),
    (
        "In a series $LCR$ circuit, as the frequency of the source is increased from zero to infinity, the current in the circuit:",
        ["First increases, reaches a maximum at resonance, and then decreases", "Continuously increases", "Continuously decreases", "First decreases then increases"],
        0,
        "At very low frequencies, $X_C \\to \\infty$, so impedance is very large and current is near zero. At resonance $\\omega_r$, $X_L = X_C$, impedance is minimum ($Z = R$) and current is maximum. At very high frequencies, $X_L \\to \\infty$, so impedance again becomes very large and current drops back towards zero."
    ),
    (
        "In an $LCR$ series circuit, the values are $L = 100\\text{ mH}$, $C = 1\\text{ }\\mu\\text{F}$, and $R = 10\\text{ }\\Omega$. The quality factor of the circuit is:",
        ["$31.6$", "$10$", "$100$", "$3.16$"],
        0,
        "$Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{1}{10}\\sqrt{\\frac{0.1}{10^{-6}}} = \\frac{1}{10}\\sqrt{10^5} = \\frac{1}{10} (316.2) \\approx 31.62$."
    ),
    (
        "An electric lamp designed for $110\\text{ V}$ DC consumes $10\\text{ A}$. It is to be operated on $220\\text{ V}, 50\\text{ Hz}$ AC mains using a pure choke coil in series. The required inductance of the choke coil is:",
        ["$0.061\\text{ H}$", "$0.122\\text{ H}$", "$0.031\\text{ H}$", "$0.244\\text{ H}$"],
        0,
        "Resistance of lamp is $R = \\frac{V}{I} = \\frac{110}{10} = 11\\text{ }\\Omega$. For the lamp to run on $220\\text{ V}$ AC at $10\\text{ A}$, the circuit impedance must be $Z = \\frac{V_{\\text{rms}}}{I} = \\frac{220}{10} = 22\\text{ }\\Omega$. Since $Z^2 = R^2 + X_L^2$, $X_L = \\sqrt{22^2 - 11^2} = \\sqrt{484 - 121} = \\sqrt{363} = 11\\sqrt{3} \\approx 19.05\\text{ }\\Omega$. Then $L = \\frac{X_L}{2\\pi f} = \\frac{19.05}{2\\pi \\times 50} = \\frac{19.05}{314.16} \\approx 0.0606\\text{ H} \\approx 0.061\\text{ H}$."
    ),
    (
        "In a series $LCR$ circuit, at a frequency below the resonant frequency ($\\omega < \\omega_r$):",
        ["The circuit is capacitive and current leads voltage", "The circuit is inductive and current lags voltage", "The circuit is purely resistive", "Power factor is unity"],
        0,
        "When $\\omega < \\omega_r$, $X_C = \\frac{1}{\\omega C} > X_L = \\omega L$. The capacitive reactance dominates, so the net reactance is capacitive ($X_L - X_C < 0$), and the current leads the applied voltage."
    ),
    (
        "In a series $LCR$ circuit, at a frequency above the resonant frequency ($\\omega > \\omega_r$):",
        ["The circuit is inductive and current lags voltage", "The circuit is capacitive and current leads voltage", "The circuit is purely resistive", "Current and voltage are in phase"],
        0,
        "When $\\omega > \\omega_r$, $X_L = \\omega L > X_C = \\frac{1}{\\omega C}$. The inductive reactance dominates ($X_L - X_C > 0$), so the circuit behaves inductively and current lags behind the applied voltage."
    ),
    (
        "A series $LCR$ circuit has $R = 4\\text{ }\\Omega$, $X_L = 7\\text{ }\\Omega$, and $X_C = 4\\text{ }\\Omega$. The phase difference between the voltage and current is:",
        ["$\\approx 37^\\circ$", "$\\approx 53^\\circ$", "$45^\\circ$", "$0^\\circ$"],
        0,
        "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{7 - 4}{4} = \\frac{3}{4} = 0.75 \\implies \\phi = \\arctan(0.75) \\approx 36.87^\\circ \\approx 37^\\circ$."
    ),
    (
        "An AC source of $V = 100\\sqrt{2} \\sin(100 t)\\text{ V}$ is applied to a series circuit of $R = 10\\text{ }\\Omega$ and $L = 0.1\\text{ H}$. The equation for the steady-state current is:",
        ["$10 \\sin(100 t - \\pi/4)\\text{ A}$", "$10 \\sin(100 t + \\pi/4)\\text{ A}$", "$10\\sqrt{2} \\sin(100 t)\\text{ A}$", "$5 \\sin(100 t - \\pi/4)\\text{ A}$"],
        0,
        "$X_L = \\omega L = 100 \\times 0.1 = 10\\text{ }\\Omega$. Impedance $Z = \\sqrt{R^2 + X_L^2} = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}\\text{ }\\Omega$. Peak current is $I_0 = \\frac{V_0}{Z} = \\frac{100\\sqrt{2}}{10\\sqrt{2}} = 10\\text{ A}$. Phase angle $\\tan\\phi = X_L / R = 10/10 = 1 \\implies \\phi = \\pi/4$. Since it is an inductive circuit, current lags voltage by $\\pi/4$: $I(t) = 10 \\sin(100 t - \\pi/4)\\text{ A}$."
    ),
    (
        "In a parallel resonant circuit (tank circuit consisting of an inductor in parallel with a capacitor), at resonance the impedance is:",
        ["Maximum", "Minimum", "Zero", "Purely imaginary"],
        0,
        "In a parallel $LC$ circuit, currents in the inductor and capacitor branches are $180^\\circ$ out of phase. At resonance, they cancel each other in the external line, resulting in minimum line current and maximum dynamic impedance ($Z_d = L / (C R)$)."
    ),
    (
        "Parallel resonance circuits are commonly used as:",
        ["Rejector circuits (filtering out a specific resonant frequency)", "Acceptor circuits", "Step-up transformers", "Rectifiers"],
        0,
        "Because a parallel resonant circuit offers maximum impedance at its resonant frequency, it rejects or blocks signals of that specific frequency while letting other frequencies pass, earning the name 'rejector circuit'."
    ),
    (
        "Series resonant circuits are commonly used as:",
        ["Acceptor circuits in radio tuning", "Rejector circuits", "Voltage stabilizers", "DC filters"],
        0,
        "Because a series $LCR$ circuit has minimum impedance at resonance, it draws maximum current at the resonant frequency, effectively selecting (accepting) that signal from an antenna while attenuating other frequencies."
    ),
    (
        "An AC circuit has an impedance of $50\\text{ }\\Omega$ and a resistance of $25\\text{ }\\Omega$. What percentage of apparent power is dissipated as active (real) power?",
        ["$50\\%$", "$25\\%$", "$100\\%$", "$70.7\\%$"],
        0,
        "The ratio of active power $P$ to apparent power $S$ is the power factor: $\\frac{P}{S} = \\cos\\phi = \\frac{R}{Z} = \\frac{25}{50} = 0.50$, which corresponds to $50\\%$."
    ),
    (
        "If a capacitor is connected across a power line with poor power factor due to inductive industrial loads, the overall power factor of the system:",
        ["Improves (increases towards unity)", "Decreases", "Remains unchanged", "Becomes negative"],
        0,
        "Inductive loads draw lagging reactive current. A capacitor draws leading reactive current, cancelling out part of the inductive reactive current and reducing the phase angle $\\phi$, thereby improving the power factor towards unity."
    ),
    (
        "The current in an AC circuit is $I = 5 \\sin(100\\pi t - \\pi/6)\\text{ A}$ when the voltage is $V = 200 \\sin(100\\pi t)\\text{ V}$. The power consumed in the circuit is:",
        ["$433\\text{ W}$", "$500\\text{ W}$", "$250\\text{ W}$", "$866\\text{ W}$"],
        0,
        "Phase difference is $\\phi = \\pi/6 = 30^\\circ$. Power is $P = \\frac{1}{2} V_0 I_0 \\cos\\phi = \\frac{1}{2} \\times 200 \\times 5 \\times \\cos(30^\\circ) = 500 \\times \\frac{\\sqrt{3}}{2} = 250\\sqrt{3} \\approx 250 \\times 1.732 = 433\\text{ W}$."
    ),
    (
        "A series $LCR$ circuit is connected to an AC source. If the capacitance is made 4 times its original value, then to keep the resonant frequency unchanged, the inductance must be:",
        ["Quartered ($L/4$)", "Quadrupled ($4L$)", "Doubled ($2L$)", "Halved ($L/2$)"],
        0,
        "Resonant frequency $\\omega_r = \\frac{1}{\\sqrt{LC}}$ is constant if $L C = \\text{constant}$. If $C' = 4C$, then $L' = L/4$."
    ),
    (
        "In an AC circuit, the voltage and current are given by $V = 100 \\sin(100 t)\\text{ V}$ and $I = 100 \\sin(100 t + \\pi/3)\\text{ mA}$. The power dissipated in the circuit is:",
        ["$2.5\\text{ W}$", "$5.0\\text{ W}$", "$10\\text{ W}$", "$1.25\\text{ W}$"],
        0,
        "$P = \\frac{1}{2} V_0 I_0 \\cos\\phi = \\frac{1}{2} \\times 100 \\times (0.100) \\times \\cos(60^\\circ) = 5 \\times 0.5 = 2.5\\text{ W}$."
    ),
    (
        "An inductor of reactance $X_L = 10\\text{ }\\Omega$ and a resistor $R = 10\\text{ }\\Omega$ are connected in series across an AC source of $100\\text{ V}$ (RMS). The current in the circuit is:",
        ["$5\\sqrt{2}\\text{ A}$", "$10\\text{ A}$", "$5\\text{ A}$", "$10\\sqrt{2}\\text{ A}$"],
        0,
        "Impedance $Z = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}\\text{ }\\Omega$. Current is $I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{Z} = \\frac{100}{10\\sqrt{2}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}\\text{ A} \\approx 7.07\\text{ A}$."
    ),
    (
        "A coil has an inductance of $0.7\\text{ H}$ and is joined in series with a resistance of $220\\text{ }\\Omega$. When an AC EMF of $220\\text{ V}$ at $50\\text{ Hz}$ is applied, the current flowing in the circuit is:",
        ["$0.707\\text{ A}$", "$1.0\\text{ A}$", "$0.5\\text{ A}$", "$1.414\\text{ A}$"],
        0,
        "$X_L = 2\\pi f L = 2 \\times \\frac{22}{7} \\times 50 \\times 0.7 = 220\\text{ }\\Omega$. Since $R = 220\\text{ }\\Omega$, $Z = \\sqrt{R^2 + X_L^2} = 220\\sqrt{2}\\text{ }\\Omega$. The current is $I = \\frac{V}{Z} = \\frac{220}{220\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\approx 0.707\\text{ A}$."
    ),
    (
        "In a series $LCR$ circuit, $R = 10\\text{ }\\Omega$, $L = 2\\text{ H}$, and $C = 32\\text{ }\\mu\\text{F}$. What is the value of $\\omega_r$ and the quality factor $Q$?",
        ["$\\omega_r = 125\\text{ rad/s}, Q = 25$", "$\\omega_r = 250\\text{ rad/s}, Q = 50$", "$\\omega_r = 125\\text{ rad/s}, Q = 12.5$", "$\\omega_r = 62.5\\text{ rad/s}, Q = 25$"],
        0,
        "$\\omega_r = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{2 \\times 32 \\times 10^{-6}}} = \\frac{1}{\\sqrt{64 \\times 10^{-6}}} = \\frac{1}{8 \\times 10^{-3}} = 125\\text{ rad/s}$. Quality factor is $Q = \\frac{\\omega_r L}{R} = \\frac{125 \\times 2}{10} = \\frac{250}{10} = 25$."
    ),
    (
        "When an AC voltage of $220\\text{ V}$ is applied across an unknown circuit element $X$, the current is $1\\text{ A}$ in phase with voltage. Across another element $Y$, the current is $1\\text{ A}$ and leads the voltage by $\\pi/2$. If $X$ and $Y$ are connected in series across the same supply, the current will be:",
        ["$\\frac{1}{\\sqrt{2}}\\text{ A}$", "$1\\text{ A}$", "$\\sqrt{2}\\text{ A}$", "$2\\text{ A}$"],
        0,
        "Element $X$ is a resistor with $R = 220/1 = 220\\text{ }\\Omega$. Element $Y$ is a capacitor with $X_C = 220/1 = 220\\text{ }\\Omega$. In series, the total impedance is $Z = \\sqrt{R^2 + X_C^2} = \\sqrt{220^2 + 220^2} = 220\\sqrt{2}\\text{ }\\Omega$. The new current is $I = \\frac{V}{Z} = \\frac{220}{220\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\text{ A}$."
    ),
    (
        "An AC circuit has $R = 100\\text{ }\\Omega$, $L = 0.5\\text{ H}$, and $C = 10\\text{ }\\mu\\text{F}$ in series. The power factor of the circuit at resonance is:",
        ["$1.0$", "$0.707$", "$0.5$", "$0$"],
        0,
        "At resonance, inductive reactance cancels capacitive reactance ($X_L = X_C$), so impedance is purely resistive ($Z = R$). The power factor is $\\cos\\phi = R/Z = R/R = 1.0$ (unity)."
    ),
    (
        "A capacitor of capacitive reactance $30\\text{ }\\Omega$ is connected in series with a resistor of $40\\text{ }\\Omega$. What is the power factor of the combination?",
        ["$0.8$", "$0.6$", "$0.75$", "$1.0$"],
        0,
        "Impedance is $Z = \\sqrt{40^2 + 30^2} = 50\\text{ }\\Omega$. Power factor is $\\cos\\phi = \\frac{R}{Z} = \\frac{40}{50} = 0.8$."
    ),
    (
        "The current in an inductive circuit is given by $I = I_0 \\sin(\\omega t - \\pi/4)$. The ratio of the resistance to the inductive reactance of the circuit is:",
        ["$1$", "$\\sqrt{3}$", "$1/\\sqrt{3}$", "$2$"],
        0,
        "The phase lag is $\\phi = \\pi/4$. Thus $\\tan\\phi = \\frac{X_L}{R} = \\tan(\\pi/4) = 1 \\implies \\frac{X_L}{R} = 1 \\implies \\frac{R}{X_L} = 1$."
    )
]

for i, item in enumerate(ac_circuits_data):
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
    
    questions.append(make_q("AC circuits", item[0], new_opts, target_idx, item[3]))

output_path = os.path.join(os.path.dirname(__file__), "emi_ac_batch4.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} MCQs for batch 4 saved to {output_path}")
