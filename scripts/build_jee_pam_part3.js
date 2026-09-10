const fs = require('fs');
const path = require('path');

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const subTopic = "Error analysis";
const chapter = "Physics and Measurement";
const subject = "Physics";

// 26 Assertion-Reason questions
const arQuestions = [
  {
    assertion: "Systematic errors cannot be eliminated completely from an experiment, but they can be minimized by improving experimental techniques.",
    reason: "Systematic errors tend to be in one direction, either positive or negative, due to known causes like zero error or calibration defect.",
    correctOptionIndex: 0,
    explanation: "Systematic errors occur according to a definite rule and have known causes (such as imperfect calibration, zero error, or environmental changes). They are unidirectional (either always positive or always negative) and can be minimized by proper calibration and technique, though never absolutely zeroed out completely. Hence both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Random errors can be minimized by taking the arithmetic mean of a large number of observations.",
    reason: "According to the theory of errors, the probability of occurrence of positive and negative random errors is equal, so their effects tend to cancel out in the average.",
    correctOptionIndex: 0,
    explanation: "Random errors occur irregularly and unpredictably in magnitude and sign. By taking the arithmetic mean of $N$ repeated independent measurements, the random error is reduced by a factor of $\\frac{1}{\\sqrt{N}}$. Thus both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "If $Z = A - B$, the absolute error in $Z$ is equal to the sum of absolute errors in $A$ and $B$, i.e., $\\Delta Z = \\Delta A + \\Delta B$.",
    reason: "In subtraction of two quantities, the absolute errors always add up to find the maximum possible error.",
    correctOptionIndex: 0,
    explanation: "When two quantities are subtracted, $Z = A - B$, the maximum possible error in $Z$ is $\\Delta Z = \\Delta A + \\Delta B$. Absolute errors are never subtracted because errors represent uncertainties and always compound."
  },
  {
    assertion: "In a quotient $Z = \\frac{A}{B}$, the relative error $\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$.",
    reason: "When two physical quantities are divided, the relative errors multiply together.",
    correctOptionIndex: 2,
    explanation: "For $Z = A/B$, taking natural log: $\\ln Z = \\ln A - \\ln B$. Differentiating gives $\\frac{dZ}{Z} = \\frac{dA}{A} - \\frac{dB}{B}$. For maximum uncertainty, relative errors add: $\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$. The relative errors do NOT multiply; they add. Assertion is true, Reason is false."
  },
  {
    assertion: "In the formula $X = \\frac{A^2 B^3}{C^4}$, the quantity $C$ contributes the maximum fractional error if the percentage error in all three variables is the same.",
    reason: "The fractional error contribution of a quantity in a power formula is directly proportional to the power/exponent to which it is raised.",
    correctOptionIndex: 0,
    explanation: "For $X = \\frac{A^2 B^3}{C^4}$, $\\frac{\\Delta X}{X} = 2\\frac{\\Delta A}{A} + 3\\frac{\\Delta B}{B} + 4\\frac{\\Delta C}{C}$. Since each fractional error is identical, $C$ has coefficient 4, which is the largest. Therefore $C$ contributes the maximum fractional error. Both Assertion and Reason are true, and Reason is the correct explanation."
  },
  {
    assertion: "The percentage error in measuring the kinetic energy of a particle moving with velocity $v$ is twice the percentage error in velocity, assuming mass is constant.",
    reason: "Kinetic energy is given by $K = \\frac{1}{2}mv^2$, and power exponents multiply relative errors.",
    correctOptionIndex: 0,
    explanation: "Since $K = \\frac{1}{2}m v^2$, for constant $m$, $\\frac{\\Delta K}{K} = 2\\frac{\\Delta v}{v}$. Multiplying by 100%, the percentage error in kinetic energy is twice that in velocity. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a quantity is calculated from $Y = \\frac{MgL}{\\pi r^2 l}$, the radius $r$ must be measured with the highest precision.",
    reason: "In the expression for Young's modulus, the radius $r$ appears in the denominator raised to the power of 2.",
    correctOptionIndex: 0,
    explanation: "The fractional error in $Y$ is $\\frac{\\Delta Y}{Y} = \\frac{\\Delta M}{M} + \\frac{\\Delta g}{g} + \\frac{\\Delta L}{L} + 2\\frac{\\Delta r}{r} + \\frac{\\Delta l}{l}$. The relative error in $r$ is doubled due to the exponent 2, and $r$ itself is small (typically $\\sim 0.5\\text{ mm}$), so any error in $r$ has a major impact on $Y$. Hence $r$ must be measured with highest precision using a screw gauge. Both are true and Reason explains Assertion."
  },
  {
    assertion: "The fractional error in determination of acceleration due to gravity $g$ using a simple pendulum is given by $\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T}$.",
    reason: "The time period of a simple pendulum is $T = 2\\pi \\sqrt{\\frac{L}{g}}$, which gives $g = \\frac{4\\pi^2 L}{T^2}$.",
    correctOptionIndex: 0,
    explanation: "From $T = 2\\pi\\sqrt{L/g}$, squaring gives $T^2 = 4\\pi^2 L/g \\implies g = 4\\pi^2 L T^{-2}$. Taking log and differentiating: $\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T}$. Both Assertion and Reason are true and Reason correctly explains Assertion."
  },
  {
    assertion: "To minimize percentage error in measuring the time period $T$ of a simple pendulum, one should measure the time for a large number of oscillations $n$ rather than a single oscillation.",
    reason: "Measuring the time $t$ for $n$ oscillations reduces the absolute error in each oscillation's period to $\\frac{\\Delta t}{n}$.",
    correctOptionIndex: 0,
    explanation: "If $t$ is the total time for $n$ oscillations, $T = \\frac{t}{n}$. The uncertainty in $T$ is $\\Delta T = \\frac{\\Delta t}{n}$, where $\\Delta t$ is the least count of the stopwatch. As $n$ increases, $\\Delta T$ becomes very small, drastically reducing the percentage error. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Absolute error always has the same unit and dimensions as the physical quantity being measured.",
    reason: "Relative error is dimensionless and has no unit.",
    correctOptionIndex: 1,
    explanation: "Absolute error $\\Delta a = |a_{\\text{measured}} - a_{\\text{true}}|$ has the identical dimensions and unit as $a$. Relative error $\\frac{\\Delta a}{a}$ is the ratio of two quantities with the same units, so it is dimensionless. Both statements are true, but Reason is not the explanation of why absolute error has units."
  },
  {
    assertion: "If two resistors $R_1 = (100 \\pm 3)\\,\\Omega$ and $R_2 = (200 \\pm 4)\\,\\Omega$ are connected in series, the equivalent resistance is $(300 \\pm 7)\\,\\Omega$.",
    reason: "In series combination, the absolute errors in individual resistances add up.",
    correctOptionIndex: 0,
    explanation: "In series, $R_s = R_1 + R_2 = 100 + 200 = 300\\,\\Omega$. The maximum absolute error is $\\Delta R_s = \\Delta R_1 + \\Delta R_2 = 3 + 4 = 7\\,\\Omega$. Hence $R_s = (300 \\pm 7)\\,\\Omega$. Both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "For two resistors connected in parallel, the relative error in equivalent resistance is always equal to the sum of relative errors of the individual resistors.",
    reason: "For parallel combination, $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}$.",
    correctOptionIndex: 3,
    explanation: "Differentiating $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}$ gives $-\\frac{\\Delta R_p}{R_p^2} = -\\frac{\\Delta R_1}{R_1^2} - \\frac{\\Delta R_2}{R_2^2}$, which yields $\\frac{\\Delta R_p}{R_p} = \\left(\\frac{R_p}{R_1}\\right)\\frac{\\Delta R_1}{R_1} + \\left(\\frac{R_p}{R_2}\\right)\\frac{\\Delta R_2}{R_2}$. This is NOT equal to $\\frac{\\Delta R_1}{R_1} + \\frac{\\Delta R_2}{R_2}$ because $R_p < R_1$ and $R_p < R_2$. Assertion is false, Reason is true."
  },
  {
    assertion: "In a spherical body, if the percentage error in radius measurement is $1\\%$, the percentage error in volume is $3\\%$.",
    reason: "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$, so $\\frac{\\Delta V}{V} = 3\\frac{\\Delta r}{r}$.",
    correctOptionIndex: 0,
    explanation: "Since $V = \\frac{4}{3}\\pi r^3$, the fractional error is $\\frac{\\Delta V}{V} = 3\\frac{\\Delta r}{r}$. Therefore, percentage error in $V = 3 \\times 1\\% = 3\\%$. Both Assertion and Reason are true and Reason correctly explains Assertion."
  },
  {
    assertion: "The percentage error in density of a cube is equal to the percentage error in mass plus three times the percentage error in its edge length.",
    reason: "Density $\\rho = \\frac{m}{L^3}$, and for maximum error, errors in numerator and denominator add up.",
    correctOptionIndex: 0,
    explanation: "Density $\\rho = \\frac{m}{L^3}$. Taking natural log and differentiating: $\\frac{\\Delta \\rho}{\\rho} = \\frac{\\Delta m}{m} + 3\\frac{\\Delta L}{L}$. Multiplying by 100% gives $\\%\\text{ error in }\\rho = \\%\\text{ error in }m + 3(\\%\\text{ error in }L)$. Both are true and Reason explains Assertion."
  },
  {
    assertion: "A zero error in an instrument is an example of a random error.",
    reason: "Zero error changes magnitude and sign unpredictably during repeated measurements.",
    correctOptionIndex: 3,
    explanation: "Zero error is a constant defect of the instrument that shifts every reading in one direction by a fixed amount. Therefore, zero error is a systematic error, not a random error. Both Assertion and Reason are false (Assertion is false, Reason is false, so correct choice is D: Assertion is false)."
  },
  {
    assertion: "Personal error arises due to individual bias or carelessness of the observer.",
    reason: "Personal errors can be eliminated by taking precautions like maintaining correct line of sight to avoid parallax.",
    correctOptionIndex: 1,
    explanation: "Personal error arises from the observer's individual peculiarities, habits, or improper setting of the apparatus (such as parallax error). It can be largely avoided by following proper procedures and correct line of sight. Both statements are true, but Reason is not the fundamental explanation of Assertion."
  },
  {
    assertion: "If $y = a + b$, the percentage error in $y$ can be greater than the percentage error in both $a$ and $b$.",
    reason: "Percentage error in $y$ is $\\frac{\\Delta a + \\Delta b}{a + b} \\times 100$, which lies between the percentage errors of $a$ and $b$.",
    correctOptionIndex: 3,
    explanation: "Let $\\frac{\\Delta a}{a} = \\epsilon_a$ and $\\frac{\\Delta b}{b} = \\epsilon_b$. Then $\\frac{\\Delta y}{y} = \\frac{a\\epsilon_a + b\\epsilon_b}{a + b}$, which is a weighted average of $\\epsilon_a$ and $\\epsilon_b$. Hence the percentage error in $y$ must always lie between $\\epsilon_a$ and $\\epsilon_b$; it can never exceed both! Assertion is false, Reason is true."
  },
  {
    assertion: "If $y = a - b$, the percentage error in $y$ can be extremely large when $a$ is very close to $b$.",
    reason: "When $a \\approx b$, the denominator $(a - b)$ becomes very small while absolute errors $\\Delta a + \\Delta b$ add up.",
    correctOptionIndex: 0,
    explanation: "The percentage error is $\\frac{\\Delta a + \\Delta b}{|a - b|} \\times 100\\%$. If $a \\approx b$, $|a - b| \\to 0$, causing the relative error to become enormously large. This is why subtraction of two nearly equal numbers should be avoided in experimental physics. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Least count error is the error associated with the resolution of the measuring instrument.",
    reason: "Least count error can be categorized under both systematic and random errors.",
    correctOptionIndex: 1,
    explanation: "The least count is the smallest value that can be measured by the instrument, setting the limit of resolution. It occurs with both systematic and random components because repeating observations with higher resolution reduces uncertainty, while instrument resolution acts as a fixed threshold. Both Assertion and Reason are true, but Reason is not the explanation of Assertion."
  },
  {
    assertion: "Gross errors are caused by sheer carelessness of the observer in taking readings or recording data.",
    reason: "Gross errors follow normal Gaussian distribution and can be treated statistically.",
    correctOptionIndex: 2,
    explanation: "Gross errors occur due to sheer carelessness (such as reading an instrument incorrectly, improper calculation, or writing wrong values). They do not follow any regular pattern or Gaussian law, and cannot be treated statistically; they can only be eliminated by care and vigilance. Assertion is true, Reason is false."
  },
  {
    assertion: "In measuring focal length of a concave mirror using the $u-v$ method, the error in $f$ satisfies $\\frac{\\Delta f}{f^2} = \\frac{\\Delta u}{u^2} + \\frac{\\Delta v}{v^2}$.",
    reason: "From the mirror formula $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$, differentiating both sides gives $-\\frac{df}{f^2} = -\\frac{dv}{v^2} - \\frac{du}{u^2}$.",
    correctOptionIndex: 0,
    explanation: "Differentiating the mirror formula $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$ yields $-\\frac{df}{f^2} = -\\frac{dv}{v^2} - \\frac{du}{u^2}$. For maximum possible error, $\\frac{\\Delta f}{f^2} = \\frac{\\Delta u}{u^2} + \\frac{\\Delta v}{v^2}$. Thus both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "If percentage error in measuring the radius of a wire is $2\\%$, the percentage error in its cross-sectional area is $4\\%$.",
    reason: "The cross-sectional area of a wire is $A = \\pi r^2$, giving fractional error $\\frac{\\Delta A}{A} = 2\\frac{\\Delta r}{r}$.",
    correctOptionIndex: 0,
    explanation: "Since $A = \\pi r^2$, taking log and differentiating gives $\\frac{\\Delta A}{A} = 2\\frac{\\Delta r}{r}$. Thus, the percentage error is $2 \\times 2\\% = 4\\%$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Environmental errors are caused by external conditions such as changes in temperature, pressure, and humidity.",
    reason: "Environmental errors are always completely unpredictable and cannot be corrected.",
    correctOptionIndex: 2,
    explanation: "Environmental errors occur due to changes in ambient conditions (temperature, pressure, humidity, air currents). These are systematic errors and can be controlled or corrected for by recording ambient conditions and applying known correction formulas (e.g., thermal expansion corrections). Assertion is true, Reason is false."
  },
  {
    assertion: "When multiplying two numbers, the relative error in the product equals the sum of relative errors in the individual numbers.",
    reason: "For $Z = AB$, $\\ln Z = \\ln A + \\ln B$, so differentiating gives $\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$.",
    correctOptionIndex: 0,
    explanation: "For $Z = AB$, taking log gives $\\ln Z = \\ln A + \\ln B$. Differentiating yields $\\frac{dZ}{Z} = \\frac{dA}{A} + \\frac{dB}{B}$. Therefore the maximum relative error is $\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$. Both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "A measurement with smaller least count is always more accurate than a measurement with larger least count.",
    reason: "Smaller least count gives higher precision, but accuracy depends on systematic errors and how close the value is to the true value.",
    correctOptionIndex: 3,
    explanation: "Smaller least count implies higher precision, not necessarily higher accuracy. An instrument with zero error or calibration defect may give very precise readings that are inaccurate. Hence Assertion is false, Reason is true."
  },
  {
    assertion: "If $P = \\frac{A^3 B^{1/2}}{C D^{3/2}}$, the percentage error in $P$ is $3\\left(\\frac{\\Delta A}{A}\\right) + \\frac{1}{2}\\left(\\frac{\\Delta B}{B}\\right) + \\frac{\\Delta C}{C} + \\frac{3}{2}\\left(\\frac{\\Delta D}{D}\\right)$ multiplied by 100.",
    reason: "Powers in the denominator contribute with negative signs to the maximum possible relative error.",
    correctOptionIndex: 2,
    explanation: "For maximum possible error, all fractional errors are added together with positive coefficients equal to the absolute value of the exponents. Powers in the denominator do NOT subtract. Assertion is true, Reason is false."
  }
];

// 7 Multiple-Choice questions
const mcqQuestions = [
  {
    question: "A physical quantity $P$ is related to four observables $a$, $b$, $c$, and $d$ as $P = \\frac{a^3 b^2}{\\sqrt{c}\\,d}$. The percentage errors of measurement in $a$, $b$, $c$, and $d$ are $1\\%$, $3\\%$, $4\\%$, and $2\\%$ respectively. What is the percentage error in the quantity $P$?",
    options: [
      "13%",
      "14%",
      "16%",
      "11%"
    ],
    correctOptionIndex: 0,
    explanation: "Given $P = \\frac{a^3 b^2}{c^{1/2} d}$. The maximum percentage error is:\n$$\\frac{\\Delta P}{P} \\times 100 = 3\\left(\\frac{\\Delta a}{a}\\right) + 2\\left(\\frac{\\Delta b}{b}\\right) + \\frac{1}{2}\\left(\\frac{\\Delta c}{c}\\right) + \\left(\\frac{\\Delta d}{d}\\right)$$\nSubstitute the given values:\n$$\\frac{\\Delta P}{P} \\times 100 = 3(1\\%) + 2(3\\%) + \\frac{1}{2}(4\\%) + 2\\% = 3\\% + 6\\% + 2\\% + 2\\% = 13\\%$$"
  },
  {
    question: "The period of oscillation of a simple pendulum is $T = 2\\pi \\sqrt{L/g}$. Measured value of $L$ is $20.0\\text{ cm}$ known to $1\\text{ mm}$ accuracy and time for 100 oscillations of the pendulum is found to be $90\\text{ s}$ using a wrist watch of $1\\text{ s}$ resolution. The accuracy in the determination of $g$ is approximately:",
    options: [
      "2.7%",
      "3.2%",
      "1.6%",
      "4.5%"
    ],
    correctOptionIndex: 0,
    explanation: "From $g = 4\\pi^2 \\frac{L}{T^2} = 4\\pi^2 \\frac{L}{(t/n)^2} = 4\\pi^2 n^2 \\frac{L}{t^2}$, we have:\n$$\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta t}{t}$$\nHere $\\Delta L = 1\\text{ mm} = 0.1\\text{ cm}$, $L = 20.0\\text{ cm}$, $\\Delta t = 1\\text{ s}$, $t = 90\\text{ s}$.\n$$\\frac{\\Delta g}{g} = \\frac{0.1}{20.0} + 2\\left(\\frac{1}{90}\\right) = 0.005 + 0.0222 = 0.0272$$\nMultiplying by 100 gives approximately $2.7\\%$."
  },
  {
    question: "The resistance of a wire is given by $R = \\frac{V}{I}$, where $V = (100 \\pm 5)\\text{ V}$ and $I = (10 \\pm 0.2)\\text{ A}$. What is the percentage error in $R$?",
    options: [
      "5%",
      "7%",
      "2%",
      "3%"
    ],
    correctOptionIndex: 1,
    explanation: "For $R = V/I$, the fractional error is:\n$$\\frac{\\Delta R}{R} = \\frac{\\Delta V}{V} + \\frac{\\Delta I}{I}$$\nHere $\\frac{\\Delta V}{V} \\times 100 = \\frac{5}{100} \\times 100 = 5\\%$, and $\\frac{\\Delta I}{I} \\times 100 = \\frac{0.2}{10} \\times 100 = 2\\%$.\n$$\\%\\text{ error in }R = 5\\% + 2\\% = 7\\%$$"
  },
  {
    question: "The density of a cube is measured by measuring its mass and the length of its sides. If the maximum error in the measurement of mass and length are $1.5\\%$ and $1\\%$ respectively, the maximum error in the measurement of density will be:",
    options: [
      "4.5%",
      "2.5%",
      "3.5%",
      "1.5%"
    ],
    correctOptionIndex: 0,
    explanation: "Density $\\rho = \\frac{m}{L^3}$.\n$$\\frac{\\Delta \\rho}{\\rho} \\times 100 = \\left(\\frac{\\Delta m}{m} + 3\\frac{\\Delta L}{L}\\right) \\times 100 = 1.5\\% + 3(1\\%) = 4.5\\%$$"
  },
  {
    question: "The length and breadth of a rectangular plate are measured to be $(20.0 \\pm 0.2)\\text{ cm}$ and $(10.0 \\pm 0.1)\\text{ cm}$ respectively. The area of the plate with error limits is:",
    options: [
      "$(200 \\pm 4)\\text{ cm}^2$",
      "$(200 \\pm 2)\\text{ cm}^2$",
      "$(200 \\pm 0.3)\\text{ cm}^2$",
      "$(200 \\pm 3)\\text{ cm}^2$"
    ],
    correctOptionIndex: 0,
    explanation: "Area $A = l \\times b = 20.0 \\times 10.0 = 200\\text{ cm}^2$.\n$$\\frac{\\Delta A}{A} = \\frac{\\Delta l}{l} + \\frac{\\Delta b}{b} = \\frac{0.2}{20.0} + \\frac{0.1}{10.0} = 0.01 + 0.01 = 0.02$$\n$$\\Delta A = 0.02 \\times 200 = 4\\text{ cm}^2$$\nThus, area $A = (200 \\pm 4)\\text{ cm}^2$."
  },
  {
    question: "Two resistances $R_1 = (100 \\pm 3)\\,\\Omega$ and $R_2 = (200 \\pm 4)\\,\\Omega$ are connected in parallel. What is the equivalent resistance with its absolute error?",
    options: [
      "$(66.7 \\pm 1.8)\\,\\Omega$",
      "$(66.7 \\pm 7.0)\\,\\Omega$",
      "$(66.7 \\pm 0.8)\\,\\Omega$",
      "$(66.7 \\pm 2.5)\\,\\Omega$"
    ],
    correctOptionIndex: 0,
    explanation: "Equivalent resistance $R_p = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{100 \\times 200}{300} = 66.67\\,\\Omega \\approx 66.7\\,\\Omega$.\nUsing $\\frac{\\Delta R_p}{R_p^2} = \\frac{\\Delta R_1}{R_1^2} + \\frac{\\Delta R_2}{R_2^2}$:\n$$\\Delta R_p = R_p^2 \\left(\\frac{\\Delta R_1}{R_1^2} + \\frac{\\Delta R_2}{R_2^2}\\right) = (66.7)^2 \\left(\\frac{3}{100^2} + \\frac{4}{200^2}\\right)$$\n$$\\frac{3}{10000} + \\frac{4}{40000} = 0.0003 + 0.0001 = 0.0004$$\n$$\\Delta R_p = 4448.9 \\times 0.0004 \\approx 1.78\\,\\Omega \\approx 1.8\\,\\Omega$$\nHence $R_p = (66.7 \\pm 1.8)\\,\\Omega$."
  },
  {
    question: "In an experiment to determine the Young's modulus of the material of a wire using $Y = \\frac{4MgL}{\\pi d^2 l}$, if $M = 2.0\\text{ kg}$, $L = 2.0\\text{ m}$, $d = 0.4\\text{ mm}$, and $l = 0.8\\text{ mm}$. If the percentage errors in measuring $M, L, d$, and $l$ are $1\\%$, $0.5\\%$, $1.5\\%$, and $2\\%$ respectively, the maximum percentage error in $Y$ is:",
    options: [
      "6.5%",
      "5.0%",
      "7.5%",
      "8.0%"
    ],
    correctOptionIndex: 0,
    explanation: "Given $Y = \\frac{4MgL}{\\pi d^2 l}$.\n$$\\frac{\\Delta Y}{Y} \\times 100 = \\frac{\\Delta M}{M} + \\frac{\\Delta L}{L} + 2\\frac{\\Delta d}{d} + \\frac{\\Delta l}{l}$$\n$$= 1\\% + 0.5\\% + 2(1.5\\%) + 2\\% = 1 + 0.5 + 3 + 2 = 6.5\\%$$"
  }
];

// 15 Numerical questions
const numQuestions = [
  {
    question: "A physical quantity $x$ is calculated from the expression $x = \\frac{a^2 b^3}{c \\sqrt{d}}$. If the percentage errors in $a, b, c$, and $d$ are $2\\%$, $1\\%$, $3\\%$, and $4\\%$ respectively, calculate the percentage error in $x$.",
    correctAnswer: "12",
    explanation: "For $x = \\frac{a^2 b^3}{c d^{1/2}}$, the percentage error is:\n$$\\frac{\\Delta x}{x} \\times 100 = 2\\left(\\frac{\\Delta a}{a}\\right) + 3\\left(\\frac{\\Delta b}{b}\\right) + \\left(\\frac{\\Delta c}{c}\\right) + \\frac{1}{2}\\left(\\frac{\\Delta d}{d}\\right)$$\n$$= 2(2\\%) + 3(1\\%) + 3\\% + \\frac{1}{2}(4\\%) = 4 + 3 + 3 + 2 = 12\\%$$"
  },
  {
    question: "The percentage error in measuring the mass of a solid sphere is $1\\%$ and in its radius is $2\\%$. Find the percentage error in the measurement of its density.",
    correctAnswer: "7",
    explanation: "Density of sphere is $\\rho = \\frac{m}{\\frac{4}{3}\\pi r^3}$.\n$$\\frac{\\Delta \\rho}{\\rho} \\times 100 = \\frac{\\Delta m}{m} + 3\\frac{\\Delta r}{r} = 1\\% + 3(2\\%) = 1 + 6 = 7\\%$$"
  },
  {
    question: "If the momentum of a body increases by $20\\%$, the percentage increase in its kinetic energy is $x\\%$. If instead the momentum is measured with an error of $3\\%$, what is the percentage error in kinetic energy? (Answer as an integer)",
    correctAnswer: "6",
    explanation: "Kinetic energy $K = \\frac{p^2}{2m}$.\nFor a small measurement error in momentum $\\frac{\\Delta p}{p} = 3\\%$, the percentage error in kinetic energy is:\n$$\\frac{\\Delta K}{K} = 2\\frac{\\Delta p}{p} = 2 \\times 3\\% = 6\\%$$"
  },
  {
    question: "The initial and final temperatures of water as recorded by an observer are $(20.6 \\pm 0.2)^\\circ\\text{C}$ and $(40.6 \\pm 0.3)^\\circ\\text{C}$. Calculate the absolute error in the rise in temperature in $^\\circ\\text{C}$ multiplied by 10 (i.e. if error is $0.5$, enter 5).",
    correctAnswer: "5",
    explanation: "Rise in temperature $\\Delta \\theta = \\theta_2 - \\theta_1 = 40.6 - 20.6 = 20.0^\\circ\\text{C}$.\nThe absolute error in temperature rise is:\n$$\\Delta (\\Delta \\theta) = \\Delta \\theta_1 + \\Delta \\theta_2 = 0.2 + 0.3 = 0.5^\\circ\\text{C}$$\nMultiplying by 10 gives $0.5 \\times 10 = 5$."
  },
  {
    question: "In an experiment, the values of refractive index of glass were found to be $1.54, 1.53, 1.44, 1.54, 1.56$, and $1.45$ in successive measurements. If the mean absolute error is calculated to three decimal places as $0.040$, and the mean value is $1.51$, find the percentage error rounded to the nearest integer.",
    correctAnswer: "3",
    explanation: "Mean value $\\mu_{\\text{mean}} = \\frac{1.54 + 1.53 + 1.44 + 1.54 + 1.56 + 1.45}{6} = \\frac{9.06}{6} = 1.51$.\nMean absolute error $\\Delta \\mu_{\\text{mean}} = \\frac{0.03 + 0.02 + 0.07 + 0.03 + 0.05 + 0.06}{6} = \\frac{0.26}{6} \\approx 0.0433$.\nPercentage error $= \\frac{0.0433}{1.51} \\times 100 \\approx 2.87\\% \\approx 3\\%$."
  },
  {
    question: "The time period of oscillation of a simple pendulum is $T = 2\\pi \\sqrt{L/g}$. If the length $L$ is measured with an error of $+2\\%$ and time period $T$ is measured with an error of $-3\\%$, the maximum percentage error in the determination of $g$ is $x\\%$. Find the value of $x$.",
    correctAnswer: "8",
    explanation: "Since $g = 4\\pi^2 \\frac{L}{T^2}$, the maximum percentage error is:\n$$\\frac{\\Delta g}{g} \\times 100 = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T} = 2\\% + 2(3\\%) = 2 + 6 = 8\\%$$"
  },
  {
    question: "The voltage across a lamp is $(100 \\pm 4)\\text{ V}$ and the current passing through it is $(5 \\pm 0.1)\\text{ A}$. Find the percentage error in the calculated power $P = VI$.",
    correctAnswer: "6",
    explanation: "Since $P = VI$, the percentage error is:\n$$\\frac{\\Delta P}{P} \\times 100 = \\frac{\\Delta V}{V} \\times 100 + \\frac{\\Delta I}{I} \\times 100 = \\frac{4}{100} \\times 100 + \\frac{0.1}{5} \\times 100 = 4\\% + 2\\% = 6\\%$$"
  },
  {
    question: "A wire has a mass $(0.3 \\pm 0.003)\\text{ g}$, radius $(0.5 \\pm 0.005)\\text{ mm}$ and length $(6.0 \\pm 0.06)\\text{ cm}$. The maximum percentage error in the measurement of its density is $x\\%$. Find the value of $x$.",
    correctAnswer: "4",
    explanation: "Density $\\rho = \\frac{m}{\\pi r^2 L}$.\n$$\\frac{\\Delta \\rho}{\\rho} \\times 100 = \\frac{\\Delta m}{m} + 2\\frac{\\Delta r}{r} + \\frac{\\Delta L}{L}$$\n$$\\frac{\\Delta m}{m} = \\frac{0.003}{0.3} = 0.01 = 1\\%$$\n$$\\frac{\\Delta r}{r} = \\frac{0.005}{0.5} = 0.01 = 1\\%$$\n$$\\frac{\\Delta L}{L} = \\frac{0.06}{6.0} = 0.01 = 1\\%$$\n$$\\frac{\\Delta \\rho}{\\rho} \\times 100 = 1\\% + 2(1\\%) + 1\\% = 4\\%$$"
  },
  {
    question: "Two capacities $C_1 = (2.0 \\pm 0.1)\\,\\mu\\text{F}$ and $C_2 = (3.0 \\pm 0.2)\\,\\mu\\text{F}$ are connected in parallel. If the total capacitance is written as $(5.0 \\pm \\Delta C)\\,\\mu\\text{F}$, find the value of $10 \\times \\Delta C$.",
    correctAnswer: "3",
    explanation: "In parallel, equivalent capacitance is $C = C_1 + C_2 = 2.0 + 3.0 = 5.0\\,\\mu\\text{F}$.\nMaximum absolute error $\\Delta C = \\Delta C_1 + \\Delta C_2 = 0.1 + 0.2 = 0.3\\,\\mu\\text{F}$.\nTherefore $10 \\times \\Delta C = 10 \\times 0.3 = 3$."
  },
  {
    question: "A physical quantity is given by $X = \\frac{A^{1/2} B^2}{C^3}$. The percentage errors in $A, B$, and $C$ are $4\\%$, $1.5\\%$, and $1\\%$ respectively. What is the percentage error in $X$?",
    correctAnswer: "8",
    explanation: "The percentage error in $X$ is:\n$$\\frac{\\Delta X}{X} \\times 100 = \\frac{1}{2}\\left(\\frac{\\Delta A}{A}\\right) + 2\\left(\\frac{\\Delta B}{B}\\right) + 3\\left(\\frac{\\Delta C}{C}\\right)$$\n$$= \\frac{1}{2}(4\\%) + 2(1.5\\%) + 3(1\\%) = 2 + 3 + 3 = 8\\%$$"
  },
  {
    question: "The percentage error in the measurement of velocity of a moving vehicle is $3\\%$ and in its mass is $2\\%$. What is the percentage error in the calculation of its momentum $p = mv$?",
    correctAnswer: "5",
    explanation: "Momentum $p = mv$.\n$$\\frac{\\Delta p}{p} \\times 100 = \\frac{\\Delta m}{m} + \\frac{\\Delta v}{v} = 2\\% + 3\\% = 5\\%$$"
  },
  {
    question: "In a resonance tube experiment, the first and second resonance lengths are measured to be $l_1 = (18.0 \\pm 0.1)\\text{ cm}$ and $l_2 = (54.0 \\pm 0.1)\\text{ cm}$. The wavelength $\\lambda = 2(l_2 - l_1)$. What is the absolute error in wavelength $\\Delta \\lambda$ in mm?",
    correctAnswer: "4",
    explanation: "Given $\\lambda = 2(l_2 - l_1)$.\nAbsolute error $\\Delta \\lambda = 2(\\Delta l_2 + \\Delta l_1) = 2(0.1 + 0.1) = 2(0.2) = 0.4\\text{ cm} = 4\\text{ mm}$."
  },
  {
    question: "In an experiment, current $I = (2.0 \\pm 0.05)\\text{ A}$ passes through a resistor $R = (10.0 \\pm 0.2)\\,\\Omega$ for time $t = (100 \\pm 1)\\text{ s}$. The heat produced is $H = I^2 R t$. The percentage error in the heat produced is $x\\%$. Find $x$ rounded to one decimal place if needed (here, an integer).",
    correctAnswer: "8",
    explanation: "Given $H = I^2 R t$.\n$$\\frac{\\Delta H}{H} \\times 100 = 2\\frac{\\Delta I}{I} + \\frac{\\Delta R}{R} + \\frac{\\Delta t}{t}$$\n$$\\frac{\\Delta I}{I} = \\frac{0.05}{2.0} = 0.025 = 2.5\\%$$\n$$\\frac{\\Delta R}{R} = \\frac{0.2}{10.0} = 0.02 = 2\\%$$\n$$\\frac{\\Delta t}{t} = \\frac{1}{100} = 0.01 = 1\\%$$\n$$\\%\\text{ error in }H = 2(2.5\\%) + 2\\% + 1\\% = 5\\% + 2\\% + 1\\% = 8\\%$$"
  },
  {
    question: "A spherical ball of radius $r = (10.0 \\pm 0.1)\\text{ mm}$ is measured. The percentage error in its surface area $A = 4\\pi r^2$ is $x\\%$. Find the value of $x$.",
    correctAnswer: "2",
    explanation: "Surface area $A = 4\\pi r^2$.\n$$\\frac{\\Delta A}{A} \\times 100 = 2\\frac{\\Delta r}{r} \\times 100 = 2 \\times \\frac{0.1}{10.0} \\times 100 = 2 \\times 1\\% = 2\\%$$"
  },
  {
    question: "The acceleration due to gravity is determined by $g = \\frac{4\\pi^2 L}{T^2}$. If the measured value of $L = 100\\text{ cm}$ with accuracy $1\\text{ mm}$ and the time for 50 oscillations is $100\\text{ s}$ with a stopwatch of least count $0.2\\text{ s}$, the percentage error in $g$ is $x\\%$. If $x = 0.5\\%$, calculate $10 \\times x$.",
    correctAnswer: "5",
    explanation: "Here $L = 100\\text{ cm}$, $\\Delta L = 1\\text{ mm} = 0.1\\text{ cm}$.\n$$\\frac{\\Delta L}{L} = \\frac{0.1}{100} = 0.001 = 0.1\\%$$\n$t = 100\\text{ s}$, $\\Delta t = 0.2\\text{ s}$.\n$$2\\frac{\\Delta T}{T} = 2\\frac{\\Delta t}{t} = 2\\left(\\frac{0.2}{100}\\right) = 0.004 = 0.4\\%$$\nTotal percentage error in $g$ is $0.1\\% + 0.4\\% = 0.5\\%$.\nThus $x = 0.5$, and $10 \\times x = 5$."
  }
];

function buildPart3() {
  const result = [];

  // Format AR questions
  for (let i = 0; i < arQuestions.length; i++) {
    const q = arQuestions[i];
    result.push({
      type: "assertion-reason",
      subject,
      chapter,
      subTopic,
      question: `**Assertion:** ${q.assertion}\n\n**Reason:** ${q.reason}`,
      options: arOptions,
      correctOptionIndex: q.correctOptionIndex,
      explanation: q.explanation,
      difficulty: "medium",
      marks: 4,
      negativeMarks: 1,
      examType: "JEE Mains"
    });
  }

  // Format MCQ questions
  for (let i = 0; i < mcqQuestions.length; i++) {
    const q = mcqQuestions[i];
    result.push({
      type: "multiple-choice",
      subject,
      chapter,
      subTopic,
      question: q.question,
      options: q.options,
      correctOptionIndex: q.correctOptionIndex,
      explanation: q.explanation,
      difficulty: "medium",
      marks: 4,
      negativeMarks: 1,
      examType: "JEE Mains"
    });
  }

  // Format NUM questions
  for (let i = 0; i < numQuestions.length; i++) {
    const q = numQuestions[i];
    result.push({
      type: "numerical",
      subject,
      chapter,
      subTopic,
      question: q.question,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      difficulty: "medium",
      marks: 4,
      negativeMarks: 0,
      examType: "JEE Mains"
    });
  }

  const outPath = path.join(__dirname, 'data_jee_pam_part3.js');
  const fileContent = `// Auto-generated Part 3 for Physics and Measurement - Error analysis\nmodule.exports = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf-8');
  console.log(`Part 3 generated: ${result.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);
  console.log(`Saved to ${outPath}`);
}

buildPart3();
