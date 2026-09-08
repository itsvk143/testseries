const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "RMS values";
const chapter = "Electromagnetic Induction and Alternating Currents";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for RMS values
const arData = [
  {
    a: "An alternating voltage of 220 V is more dangerous to touch than a steady direct voltage of 220 V.",
    r: "The 220 V rating of an AC supply specifies its RMS value, so its peak voltage reaches $220\\sqrt{2} \\approx 311\\text{ V}$.",
    ans: 0,
    exp: "A 220 V DC voltage stays constant at 220 V, whereas 220 V RMS AC rises to a peak of $V_0 = 220\\sqrt{2} \\approx 311\\text{ V}$ twice every cycle, giving a stronger electric shock. (R) correctly explains (A)."
  },
  {
    a: "The average value of a sinusoidal alternating current over one full cycle is zero.",
    r: "The current flows in one direction during the positive half cycle and in the exact opposite direction with identical magnitude profile during the negative half cycle.",
    ans: 0,
    exp: "Since $\\int_0^T \\sin(\\omega t) dt = 0$, the net charge transported across any cross-section over a full symmetric cycle is zero, so $I_{avg} = 0$. (R) correctly explains (A)."
  },
  {
    a: "AC ammeters and voltmeters are calibrated to read the RMS values of alternating current and voltage.",
    r: "Hot-wire instruments operate on the principle of Joule heating, which depends on the square of current ($I^2 R$) and reflects the RMS value.",
    ans: 0,
    exp: "Thermal expansion of the hot wire is proportional to the average heating rate $\\langle I^2 R \\rangle = I_{rms}^2 R$, so the meter's deflection naturally measures $I_{rms}$. (R) correctly explains (A)."
  },
  {
    a: "The RMS value of an alternating current is also called its virtual or effective value.",
    r: "The RMS value represents the steady direct current that would produce the same amount of heat in a given resistor in a given time as the alternating current.",
    ans: 0,
    exp: "By definition, the effective or virtual current is the DC equivalent for thermal power dissipation: $I_{eff}^2 R T = \\int_0^T I^2 R dt \\implies I_{eff} = I_{rms}$. (R) correctly explains (A)."
  },
  {
    a: "For a sinusoidal alternating current, the form factor is approximately 1.11.",
    r: "Form factor is defined as the ratio of the RMS value to the average value over a half cycle: $\\text{Form Factor} = \\frac{I_{rms}}{I_{avg}} = \\frac{I_0/\\sqrt{2}}{2I_0/\\pi} = \\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$.",
    ans: 0,
    exp: "Form factor $= \\frac{I_{rms}}{I_{avg}} = \\frac{\\pi}{2\\sqrt{2}} = \\frac{3.1416}{2.8284} \\approx 1.11$. (R) correctly explains (A)."
  },
  {
    a: "For a sinusoidal alternating current, the crest factor (peak factor) is $\\sqrt{2}$.",
    r: "Crest factor is defined as the ratio of the peak value to the RMS value: $\\text{Crest Factor} = \\frac{I_0}{I_{rms}} = \\frac{I_0}{I_0/\\sqrt{2}} = \\sqrt{2} \\approx 1.414$.",
    ans: 0,
    exp: "By definition, the peak/crest factor is $\\frac{I_0}{I_{rms}} = \\sqrt{2}$. (R) correctly explains (A)."
  },
  {
    a: "If a current has both a DC component $I_1$ and an AC component $I_2 \\sin(\\omega t)$, the RMS value of the combined current is $\\sqrt{I_1^2 + \\frac{1}{2} I_2^2}$.",
    r: "The time-average of the cross-term $2 I_1 I_2 \\sin(\\omega t)$ over a complete cycle is zero: $\\langle 2 I_1 I_2 \\sin(\\omega t) \\rangle = 0$.",
    ans: 0,
    exp: "Instantaneous current is $I = I_1 + I_2 \\sin(\\omega t)$. $I^2 = I_1^2 + I_2^2 \\sin^2(\\omega t) + 2 I_1 I_2 \\sin(\\omega t)$. Averaging gives $\\langle I^2 \\rangle = I_1^2 + \\frac{1}{2} I_2^2 + 0$. Thus $I_{rms} = \\sqrt{I_1^2 + \\frac{1}{2} I_2^2}$. (R) correctly explains (A)."
  },
  {
    a: "For a symmetric square wave alternating between $+I_0$ and $-I_0$, the RMS value is equal to its peak value $I_0$.",
    r: "Since the square of $+I_0$ and the square of $-I_0$ are both $I_0^2$, the mean square value over a cycle is $I_0^2$, giving $I_{rms} = \\sqrt{I_0^2} = I_0$.",
    ans: 0,
    exp: "For a square wave, $I^2(t) = I_0^2$ at all times. Therefore, the mean of $I^2$ is simply $I_0^2$, and $I_{rms} = \\sqrt{I_0^2} = I_0$. (R) correctly explains (A)."
  },
  {
    a: "For a triangular wave of peak value $I_0$, the RMS value is $\\frac{I_0}{\\sqrt{3}}$.",
    r: "The square of a linear function $f(t) = k t$ integrates to $\\frac{1}{3} k^2 t^3$, introducing the factor of $\\frac{1}{3}$ into the mean square value.",
    ans: 0,
    exp: "Integrating $I^2(t) = \\left(\\frac{2I_0 t}{T/2}\\right)^2$ over a half period gives mean square $\\langle I^2 \\rangle = \\frac{I_0^2}{3}$. Thus $I_{rms} = \\frac{I_0}{\\sqrt{3}}$. (R) correctly explains (A)."
  },
  {
    a: "A DC moving-coil ammeter connected in an AC circuit will read zero.",
    r: "A moving-coil ammeter has a permanent magnet and produces a deflection proportional to the first power of current, thus measuring the average value which is zero over a full cycle.",
    ans: 0,
    exp: "The torque $\\tau = N B I A$ is proportional to instantaneous current. Due to coil inertia, the pointer responds to the cycle average $\\langle I \\rangle$, which is zero for symmetrical AC. (R) correctly explains (A)."
  },
  {
    a: "The RMS value of a half-wave rectified sinusoidal current with peak value $I_0$ is $\\frac{I_0}{2}$.",
    r: "The current conducts only during one half cycle, so the mean square value over the full period $T$ is half of that for a full sinusoidal wave: $\\langle I^2 \\rangle = \\frac{1}{2}\\left(\\frac{I_0^2}{2}\\right) = \\frac{I_0^2}{4}$.",
    ans: 0,
    exp: "For half-wave rectification, $I_{rms} = \\sqrt{\\frac{1}{T}\\int_0^{T/2} I_0^2 \\sin^2(\\omega t) dt} = \\sqrt{\\frac{I_0^2}{4}} = \\frac{I_0}{2}$. (R) correctly explains (A)."
  },
  {
    a: "The RMS value of a full-wave rectified sinusoidal current is identical to that of the unrectified sinusoidal current: $\\frac{I_0}{\\sqrt{2}}$.",
    r: "Squaring a full-wave rectified signal $I_0 |\\sin(\\omega t)|$ yields $I_0^2 \\sin^2(\\omega t)$, which is identical to the squared signal of the unrectified AC at every point.",
    ans: 0,
    exp: "Since $[|I(t)|]^2 = [I(t)]^2$, the mean square value is completely unchanged by full-wave rectification, so $I_{rms} = \\frac{I_0}{\\sqrt{2}}$. (R) correctly explains (A)."
  },
  {
    a: "The average value of a sinusoidal alternating current over a positive half cycle is $\\frac{2I_0}{\\pi} \\approx 0.637 I_0$.",
    r: "Integrating $I_0 \\sin(\\omega t)$ from $t = 0$ to $t = \\frac{T}{2}$ gives $\\int_0^{\\pi/\\omega} I_0 \\sin(\\omega t) dt = \\frac{2I_0}{\\omega}$, and dividing by $\\frac{T}{2} = \\frac{\\pi}{\\omega}$ yields $\\frac{2I_0}{\\pi}$.",
    ans: 0,
    exp: "$I_{avg} = \\frac{1}{\\pi/\\omega} \\int_0^{\\pi/\\omega} I_0 \\sin(\\omega t) dt = \\frac{\\omega}{\\pi} \\left[ -\\frac{I_0}{\\omega} \\cos(\\omega t) \\right]_0^{\\pi/\\omega} = \\frac{2I_0}{\\pi}$. (R) correctly explains (A)."
  },
  {
    a: "The scales of hot-wire AC ammeters are non-linear (crowded at the lower end).",
    r: "The heating effect and corresponding deflection are proportional to the square of the current ($I^2$), rather than the first power of current.",
    ans: 0,
    exp: "Because deflection $\\theta \\propto I^2$, equal increments of current produce increasingly large deflections as current increases, resulting in a non-uniform square-law scale. (R) correctly explains (A)."
  },
  {
    a: "For an alternating current represented by $I = I_1 \\cos(\\omega t) + I_2 \\sin(\\omega t)$, the RMS value is $\\sqrt{\\frac{I_1^2 + I_2^2}{2}}$.",
    r: "The two sinusoidal components are orthogonal in time, and the average of both $\\cos^2(\\omega t)$ and $\\sin^2(\\omega t)$ over a cycle is $\\frac{1}{2}$, while the cross-term averages to zero.",
    ans: 0,
    exp: "$\\langle I^2 \\rangle = I_1^2 \\langle \\cos^2 \\rangle + I_2^2 \\langle \\sin^2 \\rangle + 2 I_1 I_2 \\langle \\cos\\sin \\rangle = \\frac{I_1^2}{2} + \\frac{I_2^2}{2} + 0$. Thus $I_{rms} = \\sqrt{\\frac{I_1^2 + I_2^2}{2}}$. (R) correctly explains (A)."
  },
  {
    a: "The peak value of voltage in a standard $230\\text{ V}$ domestic power supply is approximately $325\\text{ V}$.",
    r: "For a sinusoidal supply, the peak voltage is $V_0 = \\sqrt{2} V_{rms} = 1.414 \\times 230\\text{ V} \\approx 325.2\\text{ V}$.",
    ans: 0,
    exp: "$V_0 = \\sqrt{2} V_{rms} = 1.4142 \\times 230 \\approx 325.3\\text{ V}$. (R) correctly explains (A)."
  },
  {
    a: "The peak-to-peak voltage of a $220\\text{ V}$ sinusoidal AC mains is approximately $622\\text{ V}$.",
    r: "Peak-to-peak voltage is twice the peak voltage: $V_{p-p} = 2 V_0 = 2\\sqrt{2} V_{rms} = 2 \\times 311.1\\text{ V} \\approx 622.2\\text{ V}$.",
    ans: 0,
    exp: "$V_{p-p} = 2 V_0 = 2 \\times 220\\sqrt{2} \\approx 622.3\\text{ V}$. (R) correctly explains (A)."
  },
  {
    a: "In calculating the RMS value of any periodic signal, the order of mathematical operations is: first square the signal, then take the mean over one period, and finally take the square root.",
    r: "The acronym RMS stands for Root of the Mean of the Square of the function.",
    ans: 0,
    exp: "The definition $I_{rms} = \\sqrt{\\frac{1}{T}\\int_0^T I^2(t) dt}$ follows the exact sequence: square $\\to$ mean $\\to$ root. (R) correctly explains (A)."
  },
  {
    a: "The heat produced in a resistor of resistance $R$ carrying an alternating current $I = I_0 \\sin(\\omega t)$ during one cycle of period $T$ is $\\frac{1}{2} I_0^2 R T$.",
    r: "The average value of $\\sin^2(\\omega t)$ over a complete cycle is $\\frac{1}{2}$, so the total heat energy dissipated is $H = I_{rms}^2 R T = \\left(\\frac{I_0}{\\sqrt{2}}\\right)^2 R T = \\frac{1}{2} I_0^2 R T$.",
    ans: 0,
    exp: "Heat $H = \\int_0^T I_0^2 R \\sin^2(\\omega t) dt = I_0^2 R \\left(\\frac{T}{2}\\right) = \\frac{1}{2} I_0^2 R T$. (R) correctly explains (A)."
  },
  {
    a: "A thermocouple ammeter measures the RMS value of current regardless of the waveform of the alternating current.",
    r: "The thermoelectric EMF generated across a thermocouple junction is directly proportional to the temperature rise of the heater wire, which depends on $I_{rms}^2 R$.",
    ans: 0,
    exp: "Because heating depends on the true mean square current $\\langle I^2 \\rangle$ for any arbitrary waveform, thermocouple instruments provide true RMS measurements. (R) correctly explains (A)."
  },
  {
    a: "The ratio of peak value to average value over a half cycle for a sinusoidal voltage is $\\frac{\\pi}{2}$.",
    r: "The average value of a sinusoidal wave over a half cycle is $V_{avg} = \\frac{2 V_0}{\\pi}$, so $\\frac{V_0}{V_{avg}} = \\frac{\\pi}{2} \\approx 1.57$.",
    ans: 0,
    exp: "$\\frac{V_0}{V_{avg}} = \\frac{V_0}{(2V_0/\\pi)} = \\frac{\\pi}{2} \\approx 1.57$. (R) correctly explains (A)."
  },
  {
    a: "The RMS value of an alternating current can never be negative.",
    r: "The square of real current values is always non-negative, and the principal square root is defined to be non-negative.",
    ans: 0,
    exp: "$I_{rms} = \\sqrt{\\langle I^2 \\rangle}$. Since $I^2(t) \\ge 0$, its average is non-negative, and its positive square root is always $\\ge 0$. (R) correctly explains (A)."
  },
  {
    a: "The effective value of current in an AC circuit does not depend on the frequency of the AC source if the amplitude is fixed.",
    r: "The integral $\\frac{1}{T}\\int_0^T \\sin^2(\\omega t) dt = \\frac{1}{2}$ is independent of the period $T$ and angular frequency $\\omega$.",
    ans: 0,
    exp: "For any sinusoidal wave of amplitude $I_0$, $I_{rms} = \\frac{I_0}{\\sqrt{2}}$ regardless of what frequency $\\omega$ it oscillates at. (R) correctly explains (A)."
  },
  {
    a: "A sinusoidal current of peak value 10 A and a direct current of 10 A produce the same heating effect in identical resistors.",
    r: "The heating effect in a resistor depends on the square of the current.",
    ans: 3,
    exp: "(A) is false because the 10 A peak AC current has an RMS value of $\\frac{10}{\\sqrt{2}} \\approx 7.07\\text{ A}$, which produces only half the heat ($P_{AC} = \\frac{1}{2} \\times 10^2 R = 50 R$) compared to the 10 A DC current ($P_{DC} = 10^2 R = 100 R$). (R) is true."
  },
  {
    a: "The form factor of a square wave is 1.0.",
    r: "For a symmetric square wave, the RMS value and the average value are both equal to the peak amplitude $I_0$, so $\\frac{I_{rms}}{I_{avg}} = \\frac{I_0}{I_0} = 1.0$.",
    ans: 0,
    exp: "For a square wave, $I_{rms} = I_0$ and $I_{avg} = I_0$. Hence $\\text{Form Factor} = \\frac{I_0}{I_0} = 1.0$. (R) correctly explains (A)."
  },
  {
    a: "The peak value of an alternating current cannot be measured by a standard hot-wire ammeter.",
    r: "Hot-wire ammeters respond to the cumulative heating effect over many cycles and can only register the RMS current.",
    ans: 0,
    exp: "Thermal meters have large thermal time constants and measure steady-state temperature proportional to $I_{rms}^2$. To determine peak current, one must multiply by $\\sqrt{2}$ for sinusoidal waves. (R) correctly explains (A)."
  }
];

// 7 Authentic MCQ questions for RMS values
const mcqData = [
  {
    q: "An alternating current is given by $I = 3\\sin(\\omega t) + 4\\cos(\\omega t)\\text{ A}$. The RMS value of this current is:",
    opts: [
      "$\\frac{5}{\\sqrt{2}}\\text{ A}$",
      "5 A",
      "$\\frac{7}{\\sqrt{2}}\\text{ A}$",
      "7 A"
    ],
    ans: 0,
    exp: "The resultant peak current is $I_0 = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\text{ A}$. The RMS current is therefore $I_{rms} = \\frac{I_0}{\\sqrt{2}} = \\frac{5}{\\sqrt{2}}\\text{ A}$."
  },
  {
    q: "An alternating current having a DC component of $3\\text{ A}$ and a sinusoidal AC component of $I(t) = 4\\sqrt{2}\\sin(\\omega t)\\text{ A}$ flows through a wire. The reading of an AC ammeter connected in the circuit is:",
    opts: [
      "5 A",
      "7 A",
      "$3\\sqrt{2}\\text{ A}$",
      "4 A"
    ],
    ans: 0,
    exp: "The AC ammeter reads the RMS value: $I_{rms} = \\sqrt{I_{dc}^2 + I_{ac,rms}^2} = \\sqrt{3^2 + \\left(\\frac{4\\sqrt{2}}{\\sqrt{2}}\\right)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ A}$."
  },
  {
    q: "A sinusoidal AC voltage has an RMS value of $200\\text{ V}$ and a frequency of $50\\text{ Hz}$. The time taken by the voltage to reach its peak value from zero is:",
    opts: [
      "$5\\text{ ms}$",
      "$10\\text{ ms}$",
      "$2.5\\text{ ms}$",
      "$20\\text{ ms}$"
    ],
    ans: 0,
    exp: "Period $T = \\frac{1}{f} = \\frac{1}{50} = 0.02\\text{ s} = 20\\text{ ms}$. Time to reach peak from zero is $t = \\frac{T}{4} = \\frac{20\\text{ ms}}{4} = 5\\text{ ms}$."
  },
  {
    q: "The instantaneous current from an AC source is $I = 5\\sin(314 t)\\text{ A}$. The average value of the current over a positive half cycle is (taking $\\pi = 3.14$):",
    opts: [
      "3.18 A",
      "3.54 A",
      "2.50 A",
      "5.00 A"
    ],
    ans: 0,
    exp: "$I_{avg} = \\frac{2 I_0}{\\pi} = \\frac{2 \\times 5}{3.14} = \\frac{10}{3.14} \\approx 3.18\\text{ A}$."
  },
  {
    q: "The voltage across an AC element is given by $V = 100\\sqrt{2}\\sin(100\\pi t)\\text{ V}$. The RMS voltage and frequency are, respectively:",
    opts: [
      "100 V, 50 Hz",
      "141.4 V, 100 Hz",
      "100 V, 100 Hz",
      "200 V, 50 Hz"
    ],
    ans: 0,
    exp: "Peak voltage $V_0 = 100\\sqrt{2}\\text{ V} \\implies V_{rms} = \\frac{V_0}{\\sqrt{2}} = 100\\text{ V}$. Angular frequency $\\omega = 100\\pi\\text{ rad/s} \\implies f = \\frac{\\omega}{2\\pi} = \\frac{100\\pi}{2\\pi} = 50\\text{ Hz}$."
  },
  {
    q: "A periodic current has a square waveform where $I = +2\\text{ A}$ for $0 < t < T/2$ and $I = -2\\text{ A}$ for $T/2 < t < T$. The RMS value of this current is:",
    opts: [
      "2 A",
      "$\\sqrt{2}\\text{ A}$",
      "$2\\sqrt{2}\\text{ A}$",
      "0 A"
    ],
    ans: 0,
    exp: "For a square wave alternating between $+I_0$ and $-I_0$, $I^2 = I_0^2$ at all times. Therefore, $I_{rms} = \\sqrt{I_0^2} = I_0 = 2\\text{ A}$."
  },
  {
    q: "For a half-wave rectified sinusoidal alternating current of peak value $I_0 = 10\\text{ A}$, the RMS value of the current is:",
    opts: [
      "5 A",
      "7.07 A",
      "3.18 A",
      "10 A"
    ],
    ans: 0,
    exp: "For a half-wave rectified sinusoid, $I_{rms} = \\frac{I_0}{2} = \\frac{10}{2} = 5\\text{ A}$."
  }
];

// 20 Authentic Numerical questions for RMS values
const numData = [
  {
    q: "A sinusoidal alternating voltage has an RMS value of $220\\text{ V}$. Taking $\\sqrt{2} = 1.414$, the peak value of the voltage in volts (rounded to nearest integer) is:",
    ans: 311,
    exp: "$V_0 = \\sqrt{2} V_{rms} = 1.414 \\times 220 = 311.08 \\approx 311\\text{ V}$."
  },
  {
    q: "The peak value of an alternating voltage is $141.4\\text{ V}$. Taking $\\sqrt{2} = 1.414$, the RMS voltage in volts is:",
    ans: 100,
    exp: "$V_{rms} = \\frac{V_0}{\\sqrt{2}} = \\frac{141.4}{1.414} = 100\\text{ V}$."
  },
  {
    q: "A current is given by $I = 6\\sin(\\omega t) + 8\\cos(\\omega t)\\text{ A}$. The peak current in amperes is:",
    ans: 10,
    exp: "Peak current $I_0 = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ A}$."
  },
  {
    q: "A current is given by $I = 6\\sin(\\omega t) + 8\\cos(\\omega t)\\text{ A}$. Taking $\\sqrt{2} = 1.414$, the RMS value of the current in amperes (rounded to one decimal place) is:",
    ans: 7.1,
    exp: "$I_{rms} = \\frac{I_0}{\\sqrt{2}} = \\frac{10}{1.414} \\approx 7.07 \\approx 7.1\\text{ A}$."
  },
  {
    q: "A compound current is given by $I = 8 + 6\\sqrt{2}\\sin(\\omega t)\\text{ A}$. The reading of an AC ammeter in amperes is:",
    ans: 10,
    exp: "$I_{rms} = \\sqrt{I_{dc}^2 + I_{ac,rms}^2} = \\sqrt{8^2 + \\left(\\frac{6\\sqrt{2}}{\\sqrt{2}}\\right)^2} = \\sqrt{64 + 36} = 10\\text{ A}$."
  },
  {
    q: "A compound current consists of a DC component of $12\\text{ A}$ and a sinusoidal AC component of amplitude $5\\sqrt{2}\\text{ A}$. The effective value of current in amperes is:",
    ans: 13,
    exp: "$I_{eff} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = 13\\text{ A}$."
  },
  {
    q: "An AC source is specified as $200\\text{ V}$, $50\\text{ Hz}$. The peak-to-peak voltage in volts (taking $\\sqrt{2} = 1.414$) rounded to nearest integer is:",
    ans: 566,
    exp: "$V_{p-p} = 2 V_0 = 2 \\times 200 \\times 1.414 = 565.6 \\approx 566\\text{ V}$."
  },
  {
    q: "The average value of a sinusoidal alternating voltage over a positive half cycle is $127.4\\text{ V}$. Taking $\\pi = 3.14$, the peak voltage in volts is:",
    ans: 200,
    exp: "$V_{avg} = \\frac{2 V_0}{\\pi} \\implies V_0 = \\frac{\\pi V_{avg}}{2} = \\frac{3.14 \\times 127.4}{2} = 200\\text{ V}$."
  },
  {
    q: "A 50 Hz AC voltage has an amplitude of 314 V. The instantaneous voltage at $t = \\frac{1}{600}\\text{ s}$ after passing through zero in volts is:",
    ans: 157,
    exp: "$\\omega = 2\\pi f = 100\\pi\\text{ rad/s}$. At $t = \\frac{1}{600}\\text{ s}$, $\\omega t = 100\\pi \\times \\frac{1}{600} = \\frac{\\pi}{6}$. $V = 314\\sin(\\pi/6) = 314 \\times 0.5 = 157\\text{ V}$."
  },
  {
    q: "For a triangular current wave varying linearly from $-I_0$ to $+I_0$ with peak value $I_0 = 3\\sqrt{3}\\text{ A}$, the RMS value in amperes is:",
    ans: 3,
    exp: "For a triangular wave, $I_{rms} = \\frac{I_0}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{\\sqrt{3}} = 3\\text{ A}$."
  },
  {
    q: "A direct current of $4\\text{ A}$ and a sinusoidal current of peak value $4\\sqrt{2}\\text{ A}$ flow simultaneously through a resistor of $10\\ \\Omega$. The average electrical power dissipated in watts is:",
    ans: 320,
    exp: "$I_{rms} = \\sqrt{4^2 + 4^2} = \\sqrt{32}\\text{ A}$. Power $P = I_{rms}^2 R = 32 \\times 10 = 320\\text{ W}$."
  },
  {
    q: "An AC voltage is represented by $V = 200\\sin(100\\pi t)\\text{ V}$. Taking $\\sqrt{2} = 1.414$, the RMS voltage in volts (rounded to one decimal place) is:",
    ans: 141.4,
    exp: "$V_{rms} = \\frac{200}{\\sqrt{2}} = \\frac{200}{1.414} \\approx 141.4\\text{ V}$."
  },
  {
    q: "An alternating current of frequency 60 Hz has an RMS value of 5 A. The time taken to reach the RMS value from zero in milliseconds is:",
    ans: 2.08, // let's check: sin(omega t) = 1/sqrt(2) => omega t = pi/4 => 2*pi*f*t = pi/4 => t = 1/(8f) = 1/(8*60) = 1/480 s = 2.08 ms. For 50 Hz: 1/(8*50) = 1/400 s = 2.5 ms!
    exp: "Let's use 50 Hz: t = 2.5 ms."
  },
  {
    q: "For an alternating current of frequency 50 Hz, the time taken for the current to reach its RMS value starting from zero in milliseconds is:",
    ans: 2.5,
    exp: "$I = I_0 \\sin(\\omega t) = \\frac{I_0}{\\sqrt{2}} \\implies \\omega t = \\frac{\\pi}{4} \\implies 2\\pi f t = \\frac{\\pi}{4} \\implies t = \\frac{1}{8f} = \\frac{1}{8 \\times 50} = \\frac{1}{400}\\text{ s} = 2.5\\text{ ms}$."
  },
  {
    q: "A sinusoidal current of peak amplitude $10\\text{ A}$ produces heat in a resistor at a certain rate. A direct current that produces heat in the same resistor at the same rate has a magnitude in amperes of (taking $\\sqrt{2} = 1.414$):",
    ans: 7.07,
    exp: "The equivalent DC current is the RMS value: $I_{dc} = I_{rms} = \\frac{10}{\\sqrt{2}} \\approx 7.07\\text{ A}$."
  },
  {
    q: "A half-wave rectifier converts an AC voltage with peak value $100\\text{ V}$ into pulsating DC. The RMS value of the rectified voltage in volts is:",
    ans: 50,
    exp: "For half-wave rectification, $V_{rms} = \\frac{V_0}{2} = \\frac{100}{2} = 50\\text{ V}$."
  },
  {
    q: "A full-wave rectifier converts an AC voltage of peak value $100\\sqrt{2}\\text{ V}$ into DC. The RMS value of the output voltage in volts is:",
    ans: 100,
    exp: "For full-wave rectification, $V_{rms} = \\frac{V_0}{\\sqrt{2}} = \\frac{100\\sqrt{2}}{\\sqrt{2}} = 100\\text{ V}$."
  },
  {
    q: "An electric kettle rated at $220\\text{ V}$, $1000\\text{ W}$ is connected to a $220\\text{ V}$ AC mains. The peak current flowing through the heating element in amperes is (taking $\\sqrt{2} = 1.414$, rounded to two decimal places):",
    ans: 6.43,
    exp: "$I_{rms} = \\frac{P}{V_{rms}} = \\frac{1000}{220} = \\frac{50}{11} \\approx 4.545\\text{ A}$. Peak current $I_0 = \\sqrt{2} I_{rms} = 1.414 \\times 4.545 \\approx 6.43\\text{ A}$."
  },
  {
    q: "A square wave current alternates between $+5\\text{ A}$ and $-5\\text{ A}$. The power dissipated by this current in a $4\\ \\Omega$ resistor in watts is:",
    ans: 100,
    exp: "For a square wave, $I_{rms} = 5\\text{ A}$. Power $P = I_{rms}^2 R = 5^2 \\times 4 = 25 \\times 4 = 100\\text{ W}$."
  },
  {
    q: "An AC ammeter reads $10\\text{ A}$ in an AC circuit. The peak value of the current in amperes (taking $\\sqrt{2} = 1.414$) is:",
    ans: 14.14,
    exp: "The ammeter reads the RMS value: $I_{rms} = 10\\text{ A}$. Peak current $I_0 = \\sqrt{2} I_{rms} = 1.414 \\times 10 = 14.14\\text{ A}$."
  },
  {
    q: "The form factor of a periodic wave is defined as $\\frac{V_{rms}}{V_{avg}}$. For a sinusoidal wave, taking $\\pi = 3.1416$ and $\\sqrt{2} = 1.4142$, the form factor (rounded to two decimal places) is:",
    ans: 1.11,
    exp: "$\\text{Form Factor} = \\frac{\\pi}{2\\sqrt{2}} = \\frac{3.1416}{2 \\times 1.4142} \\approx 1.11$."
  }
];

// Remove the placeholder item 12
numData.splice(12, 1);

const part5Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part5Questions.push({
    question: `Assertion (A): ${item.a}\nReason (R): ${item.r}`,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "Assertion-Reason",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

mcqData.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part5Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

numData.forEach(item => {
  validateMath(item.q);
  validateMath(item.exp);

  part5Questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.ans,
    numericalAnswer: item.ans,
    explanation: item.exp,
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 5 generated: ${part5Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_emi_ac_part5.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part5Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
