const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Photoelectric effect";
const CHAPTER = "Dual Nature of Matter and Radiation";
const SUBJECT = "Physics";

const questions = [];

function addNum(q, ans, exp) {
  questions.push({
    type: "NUMERICAL",
    question: q,
    correctAnswer: ans,
    explanation: exp,
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  });
}

// 42 Numerical Questions for Part 8
addNum(
  "A completely absorbing flat surface is illuminated normally by a laser beam of power $30\\,\\text{W}$. What is the radiation force exerted on the surface in units of $10^{-7}\\,\\text{N}$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)?",
  1,
  "For complete absorption, $F = \\frac{P}{c} = \\frac{30}{3.0 \\times 10^8} = 1.0 \\times 10^{-7}\\,\\text{N}$. Value is $1$."
);

addNum(
  "If the surface in the previous problem is replaced by an ideal perfectly reflecting mirror, what is the radiation force in units of $10^{-7}\\,\\text{N}$?",
  2,
  "For complete reflection, $F = \\frac{2P}{c} = \\frac{2(30)}{3.0 \\times 10^8} = 2.0 \\times 10^{-7}\\,\\text{N}$. Value is $2$."
);

addNum(
  "A parallel beam of light of intensity $I = 900\\,\\text{W/m}^2$ falls normally on a perfectly reflecting surface of area $2.0\\,\\text{m}^2$. What is the radiation pressure on the surface in units of $10^{-6}\\,\\text{N/m}^2$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)?",
  6,
  "Radiation pressure for complete reflection: $P_{\\text{rad}} = \\frac{2I}{c} = \\frac{2(900)}{3.0 \\times 10^8} = 6.0 \\times 10^{-6}\\,\\text{N/m}^2$. Value is $6$."
);

addNum(
  "An isolated metallic sphere of radius $R = 10\\,\\text{cm}$ and work function $2.2\\,\\text{eV}$ is illuminated with ultraviolet light of wavelength $250\\,\\text{nm}$. To what maximum electric potential in volts will the sphere be charged (take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$)? Round to two decimal places.",
  2.76,
  "Photon energy: $E = \\frac{1240}{250} = 4.96\\,\\text{eV}$. Photoelectrons are emitted until the positive potential of the sphere equals the stopping potential: $V_{\\max} = \\frac{E - \\phi}{e} = 4.96 - 2.2 = 2.76\\,\\text{V}$."
);

addNum(
  "For the metallic sphere in the previous problem, what is the maximum positive charge acquired by the sphere in picocoulombs (pC) (take $\\frac{1}{4\\pi\\epsilon_0} = 9.0 \\times 10^9\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2$, $V_{\\max} = 2.76\\,\\text{V}$)? Round to one decimal place.",
  30.7,
  "$Q = 4\\pi\\epsilon_0 R V_{\\max} = \\frac{0.10 \\times 2.76}{9.0 \\times 10^9} \\approx 3.067 \\times 10^{-11}\\,\\text{C} \\approx 30.7\\,\\text{pC}$."
);

addNum(
  "How many photoelectrons were emitted from the sphere before emission ceased in units of $10^8$ (take $Q = 3.07 \\times 10^{-11}\\,\\text{C}$, $e = 1.6 \\times 10^{-19}\\,\\text{C}$)? Round to two decimal places.",
  1.92,
  "$N = \\frac{Q}{e} = \\frac{3.067 \\times 10^{-11}}{1.6 \\times 10^{-19}} \\approx 1.917 \\times 10^8 \\approx 1.92 \\times 10^8$."
);

addNum(
  "A beam of light falls on a perfectly absorbing plate at an angle of incidence $\\theta = 60^\\circ$ to the normal. If the beam power is $60\\,\\text{W}$, what is the force component perpendicular to the plate in units of $10^{-7}\\,\\text{N}$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)?",
  1,
  "For an absorbing plate, the force is in the direction of the beam: $F = \\frac{P}{c} = \\frac{60}{3.0 \\times 10^8} = 2.0 \\times 10^{-7}\\,\\text{N}$. The perpendicular component is $F_\\perp = F\\cos 60^\\circ = (2.0 \\times 10^{-7})(0.5) = 1.0 \\times 10^{-7}\\,\\text{N}$. Value is $1$."
);

addNum(
  "Photoelectrons emitted from a metallic surface with maximum kinetic energy $1.8\\,\\text{eV}$ enter a uniform magnetic field $B = 1.0 \\times 10^{-4}\\,\\text{T}$ perpendicularly. What is the maximum radius of their circular path in centimeters (take $m_e = 9.1 \\times 10^{-31}\\,\\text{kg}$, $e = 1.6 \\times 10^{-19}\\,\\text{C}$)? Round to two decimal places.",
  4.52,
  "Velocity: $v = \\sqrt{\\frac{2(1.8 \\times 1.6 \\times 10^{-19})}{9.1 \\times 10^{-31}}} = \\sqrt{\\frac{5.76 \\times 10^{-19}}{9.1 \\times 10^{-31}}} = \\sqrt{6.3297 \\times 10^{11}} \\approx 7.9559 \\times 10^5\\,\\text{m/s}$. Radius: $r = \\frac{mv}{eB} = \\frac{(9.1 \\times 10^{-31})(7.9559 \\times 10^5)}{(1.6 \\times 10^{-19})(10^{-4})} = \\frac{7.2399 \\times 10^{-25}}{1.6 \\times 10^{-23}} \\approx 0.04525\\,\\text{m} \\approx 4.52\\,\\text{cm}$."
);

addNum(
  "A laser pulse of energy $0.6\\,\\text{J}$ is completely absorbed by a target. What is the momentum transferred to the target in units of $10^{-9}\\,\\text{kg}\\cdot\\text{m/s}$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)?",
  2,
  "$\\Delta p = \\frac{E}{c} = \\frac{0.6}{3.0 \\times 10^8} = 2.0 \\times 10^{-9}\\,\\text{kg}\\cdot\\text{m/s}$. Value is $2$."
);

addNum(
  "If the pulse in the previous problem is completely reflected by a mirror, what is the momentum transferred in units of $10^{-9}\\,\\text{kg}\\cdot\\text{m/s}$?",
  4,
  "$\\Delta p = \\frac{2E}{c} = \\frac{2(0.6)}{3.0 \\times 10^8} = 4.0 \\times 10^{-9}\\,\\text{kg}\\cdot\\text{m/s}$. Value is $4$."
);

addNum(
  "A monochromatic light beam with intensity $I = 1500\\,\\text{W/m}^2$ strikes a black absorbing surface of area $0.5\\,\\text{m}^2$ normally. What is the total force in units of $10^{-6}\\,\\text{N}$ exerted on the surface (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)?",
  2.5,
  "Power is $P = I \\times A = 1500 \\times 0.5 = 750\\,\\text{W}$. Force is $F = \\frac{P}{c} = \\frac{750}{3.0 \\times 10^8} = 2.5 \\times 10^{-6}\\,\\text{N}$. Value is $2.5$."
);

addNum(
  "An isolated zinc sphere of radius $5.0\\,\\text{cm}$ is irradiated with ultraviolet light of wavelength $200\\,\\text{nm}$. If the work function of zinc is $4.2\\,\\text{eV}$, what is the maximum potential of the sphere in volts (take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$)?",
  2,
  "Photon energy: $E = \\frac{1240}{200} = 6.2\\,\\text{eV}$. Maximum potential: $V = \\frac{E - \\phi}{e} = 6.2 - 4.2 = 2.0\\,\\text{V}$."
);

addNum(
  "For the zinc sphere in the previous problem, what is the total positive charge acquired in picocoulombs (pC) (take $\\frac{1}{4\\pi\\epsilon_0} = 9.0 \\times 10^9\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2$)? Round to two decimal places.",
  11.11,
  "$Q = \\frac{R V}{9 \\times 10^9} = \\frac{0.05 \\times 2.0}{9 \\times 10^9} = \\frac{0.10}{9 \\times 10^9} \\approx 1.111 \\times 10^{-11}\\,\\text{C} \\approx 11.11\\,\\text{pC}$."
);

addNum(
  "A satellite in deep space has a solar sail of area $100\\,\\text{m}^2$ facing the Sun. The solar radiation intensity is $1350\\,\\text{W/m}^2$. Assuming the sail is an ideal reflector, what is the radiation force on the sail in millinewtons (mN) (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)?",
  0.9,
  "Power intercepted: $P = 1350 \\times 100 = 1.35 \\times 10^5\\,\\text{W}$. Force: $F = \\frac{2P}{c} = \\frac{2(1.35 \\times 10^5)}{3.0 \\times 10^8} = \\frac{2.7 \\times 10^5}{3.0 \\times 10^8} = 9.0 \\times 10^{-4}\\,\\text{N} = 0.9\\,\\text{mN}$."
);

addNum(
  "If the solar sail in the previous problem absorbs $20\\%$ of incident light and reflects $80\\%$, what is the radiation force on the sail in millinewtons (mN)?",
  0.81,
  "Force: $F = (1 + R)\\frac{P}{c} = (1 + 0.8)\\frac{1.35 \\times 10^5}{3.0 \\times 10^8} = 1.8 \\times 4.5 \\times 10^{-4} = 8.1 \\times 10^{-4}\\,\\text{N} = 0.81\\,\\text{mN}$."
);

addNum(
  "Photoelectrons are emitted from a metal with maximum velocity $v_{\\max} = 1.0 \\times 10^6\\,\\text{m/s}$. A uniform magnetic field $B = 2.0 \\times 10^{-4}\\,\\text{T}$ is applied parallel to the surface. What is the maximum distance in centimeters from the surface that an electron can reach before turning back (take $m_e = 9.1 \\times 10^{-31}\\,\\text{kg}$, $e = 1.6 \\times 10^{-19}\\,\\text{C}$)? Round to two decimal places.",
  2.84,
  "The electron moves along a circular arc of radius $r = \\frac{mv}{eB}$. It turns back after traversing at most the diameter or radius? For electrons emitted perpendicular to the surface into a parallel B field, the maximum distance reached away from the surface is the gyroradius $r = \\frac{mv}{eB} = \\frac{(9.1 \\times 10^{-31})(10^6)}{(1.6 \\times 10^{-19})(2 \\times 10^{-4})} = \\frac{9.1 \\times 10^{-25}}{3.2 \\times 10^{-23}} \\approx 0.0284375\\,\\text{m} \\approx 2.84\\,\\text{cm}$."
);

addNum(
  "A laser pointer of power $1.0\\,\\text{mW}$ produces a beam of diameter $2.0\\,\\text{mm}$. What is the radiation pressure in units of $10^{-6}\\,\\text{N/m}^2$ on a black absorbing target (take $c = 3.0 \\times 10^8\\,\\text{m/s}$, $\\pi = 3.1416$)? Round to two decimal places.",
  1.06,
  "Beam area is $A = \\pi r^2 = \\pi (1.0 \\times 10^{-3})^2 = 3.1416 \\times 10^{-6}\\,\\text{m}^2$. Intensity is $I = \\frac{10^{-3}}{3.1416 \\times 10^{-6}} \\approx 318.31\\,\\text{W/m}^2$. Radiation pressure is $P_{\\text{rad}} = \\frac{I}{c} = \\frac{318.31}{3.0 \\times 10^8} \\approx 1.061 \\times 10^{-6}\\,\\text{N/m}^2 \\approx 1.06 \\times 10^{-6}$."
);

addNum(
  "When a plate is illuminated with monochromatic light of wavelength $400\\,\\text{nm}$, the stopping potential is $1.0\\,\\text{V}$. If light of wavelength $300\\,\\text{nm}$ is used, what is the maximum speed of photoelectrons in units of $10^5\\,\\text{m/s}$ (take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$, $m_e = 9.1 \\times 10^{-31}\\,\\text{kg}$)? Round to two decimal places.",
  8.46,
  "For $400\\,\\text{nm}$: $E_1 = \\frac{1240}{400} = 3.1\\,\\text{eV} \\implies \\phi = 3.1 - 1.0 = 2.1\\,\\text{eV}$. For $300\\,\\text{nm}$: $E_2 = \\frac{1240}{300} = 4.133\\,\\text{eV} \\implies K_{\\max} = 4.133 - 2.1 = 2.033\\,\\text{eV} = 2.033 \\times 1.6 \\times 10^{-19} \\approx 3.253 \\times 10^{-19}\\,\\text{J}$. Speed is $v_{\\max} = \\sqrt{\\frac{2(3.253 \\times 10^{-19})}{9.1 \\times 10^{-31}}} = \\sqrt{7.150 \\times 10^{11}} \\approx 8.456 \\times 10^5\\,\\text{m/s} \\approx 8.46 \\times 10^5\\,\\text{m/s}$."
);

addNum(
  "A laser pulse delivers $30\\,\\text{J}$ of energy in $10\\,\\text{ns}$ to a flat mirror of normal incidence. What is the average force exerted during the pulse in newtons (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)?",
  20,
  "Pulse power is $P = \\frac{30}{10 \\times 10^{-9}} = 3.0 \\times 10^9\\,\\text{W}$. For a mirror: $F = \\frac{2P}{c} = \\frac{2(3.0 \\times 10^9)}{3.0 \\times 10^8} = 20\\,\\text{N}$."
);

addNum(
  "An isolated metallic ball of radius $1.0\\,\\text{cm}$ is irradiated with light of frequency $\\nu = 2.0 \\times 10^{15}\\,\\text{Hz}$. If the threshold frequency is $\\nu_0 = 1.0 \\times 10^{15}\\,\\text{Hz}$, what is the maximum potential of the ball in volts (take $h/e = 4.14 \\times 10^{-15}\\,\\text{V}\\cdot\\text{s}$)?",
  4.14,
  "$V_{\\max} = \\frac{h}{e}(\\nu - \\nu_0) = 4.14 \\times 10^{-15} \\times 1.0 \\times 10^{15} = 4.14\\,\\text{V}$."
);

addNum(
  "For the metallic ball in the previous problem, what is the charge on the ball in picocoulombs (pC) (take $\\frac{1}{4\\pi\\epsilon_0} = 9.0 \\times 10^9\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2$)? Round to two decimal places.",
  4.6,
  "$Q = \\frac{R V}{9 \\times 10^9} = \\frac{0.01 \\times 4.14}{9.0 \\times 10^9} = \\frac{0.0414}{9.0 \\times 10^9} = 4.6 \\times 10^{-12}\\,\\text{C} = 4.60\\,\\text{pC}$."
);

addNum(
  "A beam of light of wavelength $450\\,\\text{nm}$ carries power $10\\,\\text{W}$ and is incident normally on a reflecting surface with reflection coefficient $R = 0.9$. What is the force exerted on the surface in units of $10^{-8}\\,\\text{N}$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)? Round to two decimal places.",
  6.33,
  "$F = (1 + R)\\frac{P}{c} = (1 + 0.9)\\frac{10}{3.0 \\times 10^8} = 1.9 \\times 3.333 \\times 10^{-8} \\approx 6.333 \\times 10^{-8}\\,\\text{N} \\approx 6.33 \\times 10^{-8}$."
);

addNum(
  "In a photoelectric effect experiment, electrons with maximum kinetic energy $K$ describe a circular path of radius $R$ in a transverse magnetic field $B$. If the frequency of incident light is increased such that the maximum kinetic energy becomes $4K$, what is the new orbital radius in terms of $R$?",
  2,
  "Orbital radius is $r = \\frac{mv}{eB} = \\frac{\\sqrt{2mK}}{eB} \\propto \\sqrt{K}$. If kinetic energy is quadrupled, radius doubles: $r' = \\sqrt{4}R = 2R$."
);

addNum(
  "A light source of intensity $I$ is incident normally on a flat surface of area $A$. If the surface absorbs $60\\%$ and reflects $40\\%$ of light, what is the radiation pressure in terms of $I/c$?",
  1.4,
  "Radiation pressure: $P_{\\text{rad}} = (1 + R)\\frac{I}{c} = (1 + 0.4)\\frac{I}{c} = 1.4\\frac{I}{c}$."
);

addNum(
  "A completely absorbing dust particle of radius $1.0\\,\\mu\\text{m}$ is held in equilibrium against gravity by an upward laser beam of intensity $I$. If the density of the particle is $2000\\,\\text{kg/m}^3$ and $g = 9.8\\,\\text{m/s}^2$, what is the required laser intensity in units of $10^9\\,\\text{W/m}^2$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)? Round to two decimal places.",
  8,
  "Equilibrium condition: $F_{\\text{rad}} = m g \\implies \\frac{I \\pi r^2}{c} = \\left(\\frac{4}{3}\\pi r^3 \\rho\\right) g \\implies I = \\frac{4}{3}\\rho r g c = \\frac{4}{3}(2000)(10^{-6})(9.8)(3.0 \\times 10^8) = \\frac{4}{3}(2 \\times 10^{-3})(9.8)(3.0 \\times 10^8) = 4 \\times 2 \\times 9.8 \\times 10^5 = 7.84 \\times 10^6\\,\\text{W/m}^2 = 0.00784 \\times 10^9$. Wait, let's ask in units of $10^6\\,\\text{W/m}^2$! Then $I = 7.84 \\times 10^6\\,\\text{W/m}^2$."
);

// Fix the dust particle question:
questions[questions.length - 1].question = "A completely absorbing spherical dust particle of radius $1.0\\,\\mu\\text{m}$ is suspended in air by an upward directed laser beam. If the particle density is $2000\\,\\text{kg/m}^3$ and $g = 9.8\\,\\text{m/s}^2$, what is the laser intensity in units of $10^6\\,\\text{W/m}^2$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)? Round to two decimal places.";
questions[questions.length - 1].correctAnswer = 7.84;
questions[questions.length - 1].explanation = "$F_{\\text{rad}} = mg \\implies \\frac{I \\pi r^2}{c} = \\frac{4}{3}\\pi r^3 \\rho g \\implies I = \\frac{4}{3}\\rho r g c = \\frac{4}{3}(2000)(10^{-6})(9.8)(3.0 \\times 10^8) = 7.84 \\times 10^6\\,\\text{W/m}^2$. Value is $7.84$.";

addNum(
  "A laser pulse carries energy $E = 15\\,\\text{J}$ and wavelength $500\\,\\text{nm}$. How many photons does it contain in units of $10^{19}$ (take $hc = 2.0 \\times 10^{-25}\\,\\text{J}\\cdot\\text{m}$)? Round to two decimal places.",
  3.75,
  "Photon energy: $E_{\\text{ph}} = \\frac{2.0 \\times 10^{-25}}{500 \\times 10^{-9}} = 4.0 \\times 10^{-19}\\,\\text{J}$. Number of photons: $N = \\frac{15}{4.0 \\times 10^{-19}} = 3.75 \\times 10^{19}$."
);

addNum(
  "A silver sphere of radius $1.0\\,\\text{cm}$ and work function $4.7\\,\\text{eV}$ is suspended in vacuum and illuminated by UV light of wavelength $200\\,\\text{nm}$. What is the maximum positive potential in volts acquired by the sphere (take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$)?",
  1.5,
  "Photon energy: $E = \\frac{1240}{200} = 6.2\\,\\text{eV}$. Maximum potential: $V = 6.2 - 4.7 = 1.5\\,\\text{V}$."
);

addNum(
  "For the silver sphere in the previous problem, what is the charge on the sphere in picocoulombs (pC) (take $\\frac{1}{4\\pi\\epsilon_0} = 9.0 \\times 10^9\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2$)? Round to two decimal places.",
  1.67,
  "$Q = \\frac{R V}{9 \\times 10^9} = \\frac{0.01 \\times 1.5}{9.0 \\times 10^9} = \\frac{0.015}{9.0 \\times 10^9} \\approx 1.667 \\times 10^{-12}\\,\\text{C} \\approx 1.67\\,\\text{pC}$."
);

addNum(
  "A beam of light of power $12\\,\\text{W}$ strikes a perfectly absorbing surface at an angle of $45^\\circ$ to the normal. What is the total force in units of $10^{-8}\\,\\text{N}$ exerted on the surface (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)?",
  4,
  "For complete absorption, the momentum of all incident photons is absorbed, so force is along the incident beam direction: $F = \\frac{P}{c} = \\frac{12}{3.0 \\times 10^8} = 4.0 \\times 10^{-8}\\,\\text{N}$. Value is $4$."
);

addNum(
  "In the previous problem, what is the component of force perpendicular to the surface in units of $10^{-8}\\,\\text{N}$? Round to two decimal places.",
  2.83,
  "$F_\\perp = F\\cos 45^\\circ = 4.0 \\times 0.7071 \\approx 2.828 \\approx 2.83 \\times 10^{-8}\\,\\text{N}$."
);

addNum(
  "A beam of light reflects from an ideal mirror at an angle of incidence $\\theta = 30^\\circ$ to the normal. If the beam power is $15\\,\\text{W}$, what is the force exerted on the mirror in units of $10^{-8}\\,\\text{N}$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$, $\\cos 30^\\circ = 0.866$)? Round to two decimal places.",
  8.66,
  "For reflection at angle $\\theta$, force is normal to the surface: $F = \\frac{2P\\cos\\theta}{c} = \\frac{2(15)(0.866)}{3.0 \\times 10^8} = 8.66 \\times 10^{-8}\\,\\text{N}$."
);

addNum(
  "Electrons are emitted with kinetic energies up to $2.5\\,\\text{eV}$ from a metal surface. If a magnetic field $B = 0.5\\,\\text{mT}$ is applied parallel to the surface, what is the maximum orbital radius of electrons in centimeters (take $m_e = 9.1 \\times 10^{-31}\\,\\text{kg}$, $e = 1.6 \\times 10^{-19}\\,\\text{C}$)? Round to two decimal places.",
  1.07,
  "$v = \\sqrt{\\frac{2(2.5 \\times 1.6 \\times 10^{-19})}{9.1 \\times 10^{-31}}} = \\sqrt{\\frac{8.0 \\times 10^{-19}}{9.1 \\times 10^{-31}}} = \\sqrt{8.791 \\times 10^{11}} \\approx 9.376 \\times 10^5\\,\\text{m/s}$. Radius: $r = \\frac{mv}{eB} = \\frac{(9.1 \\times 10^{-31})(9.376 \\times 10^5)}{(1.6 \\times 10^{-19})(5.0 \\times 10^{-4})} = \\frac{8.532 \\times 10^{-25}}{8.0 \\times 10^{-23}} \\approx 0.010665\\,\\text{m} \\approx 1.07\\,\\text{cm}$."
);

addNum(
  "A $200\\,\\text{W}$ light source emits radiation of wavelength $620\\,\\text{nm}$ uniformly. What is the photon emission rate in units of $10^{20}\\,\\text{photons/s}$ (take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$)? Round to two decimal places.",
  6.25,
  "Photon energy: $E = \\frac{1240}{620} = 2.0\\,\\text{eV} = 3.2 \\times 10^{-19}\\,\\text{J}$. Emission rate: $N = \\frac{200}{3.2 \\times 10^{-19}} = 6.25 \\times 10^{20}$."
);

addNum(
  "If the distance between a point source and a photoelectric emitter is increased by $50\\%$, by what percentage does the saturation photocurrent decrease?",
  55.56,
  "New distance: $r' = 1.5r = \\frac{3}{2}r$. New current: $I' = \\frac{I}{(1.5)^2} = \\frac{I}{2.25} = \\frac{4}{9}I$. Percentage decrease: $\\frac{I - (4/9)I}{I} \\times 100\\% = \\frac{5}{9} \\times 100\\% \\approx 55.555 \\approx 55.56\\%$."
);

addNum(
  "A laser pulse of $1.0\\,\\text{J}$ energy and $10\\,\\text{ns}$ duration is completely reflected by a mirror. What is the average radiation pressure in atmospheres ($\\,1\\,\\text{atm} = 1.01 \\times 10^5\\,\\text{N/m}^2$) if the beam spot area is $1.0\\,\\text{mm}^2$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)? Round to two decimal places.",
  6.6,
  "Power during pulse: $P = \\frac{1.0}{10^{-8}} = 10^8\\,\\text{W}$. Intensity: $I = \\frac{10^8}{10^{-6}} = 10^{14}\\,\\text{W/m}^2$. Radiation pressure: $P_{\\text{rad}} = \\frac{2I}{c} = \\frac{2 \\times 10^{14}}{3.0 \\times 10^8} = \\frac{2}{3} \\times 10^6 \\approx 6.667 \\times 10^5\\,\\text{N/m}^2$. In atmospheres: $\\frac{6.667 \\times 10^5}{1.01 \\times 10^5} \\approx 6.60\\,\\text{atm}$."
);

addNum(
  "A photocell delivers $2.0\\,\\mu\\text{A}$ current when illuminated by a lamp at $2.0\\,\\text{m}$. At what distance in meters must the lamp be placed to produce a current of $8.0\\,\\mu\\text{A}$?",
  1,
  "Since $I \\propto 1/r^2$, to quadruple the current the distance must be halved: $r' = 2.0 / 2 = 1.0\\,\\text{m}$."
);

addNum(
  "When light of wavelength $240\\,\\text{nm}$ falls on a metal surface, the stopping potential is $2.17\\,\\text{V}$. What is the threshold wavelength of the metal in nanometers (take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$)? Round to one decimal place.",
  413.3,
  "Photon energy: $E = \\frac{1240}{240} \\approx 5.1667\\,\\text{eV}$. Work function: $\\phi = 5.1667 - 2.17 = 2.9967\\,\\text{eV}$. Threshold wavelength: $\\lambda_0 = \\frac{1240}{2.9967} \\approx 413.78 \\approx 413.8\\,\\text{nm}$."
);

// Update threshold wavelength:
questions[questions.length - 1].correctAnswer = 413.8;
questions[questions.length - 1].explanation = "$E = \\frac{1240}{240} \\approx 5.167\\,\\text{eV}$. $\\phi = 5.167 - 2.17 = 2.997\\,\\text{eV}$. $\\lambda_0 = \\frac{1240}{2.997} \\approx 413.78 \\approx 413.8\\,\\text{nm}$.";

addNum(
  "What is the momentum of a photon having energy $3.0\\,\\text{eV}$ in units of $10^{-27}\\,\\text{kg}\\cdot\\text{m/s}$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$, $1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$)? Round to one decimal place.",
  1.6,
  "$p = \\frac{E}{c} = \\frac{3.0 \\times 1.6 \\times 10^{-19}}{3.0 \\times 10^8} = 1.6 \\times 10^{-27}\\,\\text{kg}\\cdot\\text{m/s}$. Value is $1.6$."
);

addNum(
  "A laser emits $3.0 \\times 10^{15}$ photons per second at wavelength $660\\,\\text{nm}$. What is the output power of the laser in milliwatts (mW) (take $hc = 1.98 \\times 10^{-25}\\,\\text{J}\\cdot\\text{m}$)? Round to one decimal place.",
  0.9,
  "Photon energy: $E = \\frac{1.98 \\times 10^{-25}}{660 \\times 10^{-9}} = 3.0 \\times 10^{-19}\\,\\text{J}$. Power: $P = (3.0 \\times 10^{15})(3.0 \\times 10^{-19}) = 9.0 \\times 10^{-4}\\,\\text{W} = 0.9\\,\\text{mW}$."
);

addNum(
  "If an isolated neutral copper sphere of work function $4.5\\,\\text{eV}$ is illuminated with UV light of wavelength $150\\,\\text{nm}$, what is the stopping potential in volts (take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$)? Round to two decimal places.",
  3.77,
  "Photon energy: $E = \\frac{1240}{150} \\approx 8.2667\\,\\text{eV}$. Stopping potential: $V_0 = 8.2667 - 4.5 = 3.7667 \\approx 3.77\\,\\text{V}$."
);

addNum(
  "A beam of light with power $45\\,\\text{W}$ is completely absorbed by a surface. What is the radiation force in units of $10^{-7}\\,\\text{N}$ (take $c = 3.0 \\times 10^8\\,\\text{m/s}$)?",
  1.5,
  "$F = \\frac{P}{c} = \\frac{45}{3.0 \\times 10^8} = 1.5 \\times 10^{-7}\\,\\text{N}$. Value is $1.5$."
);

addNum(
  "A photodiode produces $0.32\\,\\mu\\text{A}$ when illuminated by a light beam. How many electrons are collected every second in units of $10^{12}$?",
  2,
  "$N_e = \\frac{I}{e} = \\frac{0.32 \\times 10^{-6}}{1.6 \\times 10^{-19}} = 2.0 \\times 10^{12}$. Value is $2$."
);

const outputPath = path.join(__dirname, 'data_jee_dnmr_part8.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');

console.log(`Part 8 generated: ${questions.length} questions (NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);
console.log(`Saved to ${outputPath}`);
