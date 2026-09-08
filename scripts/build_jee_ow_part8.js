const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Simple Harmonic Motion (SHM)";
const CHAPTER = "Oscillations and Waves";
const SUBJECT = "Physics";

const questions = [
  // 46 Numerical Questions on Advanced SHM, Pendulums, Damped/Forced, & Superposition
  {
    type: "NUMERICAL",
    question: "A uniform thin rod of length $L = 1.2\\,\\text{m}$ is pivoted at one end and oscillates as a physical pendulum in a vertical plane. What is its time period of oscillation in seconds (take $g = 10\\,\\text{m/s}^2$ and $\\pi = 3.14$)? Round to two decimal places.",
    correctAnswer: 1.78,
    explanation: "Moment of inertia about the pivot is $I = \\frac{1}{3}M L^2$. Distance to center of mass is $d = L/2$. The time period is $T = 2\\pi\\sqrt{\\frac{I}{M g d}} = 2\\pi\\sqrt{\\frac{\\frac{1}{3}M L^2}{M g (L/2)}} = 2\\pi\\sqrt{\\frac{2L}{3g}} = 2(3.14)\\sqrt{\\frac{2(1.2)}{3(10)}} = 6.28\\sqrt{\\frac{2.4}{30}} = 6.28\\sqrt{0.08} = 6.28(0.2828) \\approx 1.776 \\approx 1.78\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For a physical pendulum with radius of gyration $k$ about its center of mass, the minimum time period of oscillation occurs when the distance $d$ from the pivot to the center of mass equals $k$. If $k = 20\\,\\text{cm}$, find the minimum time period in seconds (take $g = 9.87\\,\\text{m/s}^2$). Round to two decimal places.",
    correctAnswer: 1.26,
    explanation: "Minimum period is $T_{\\min} = 2\\pi\\sqrt{\\frac{2k}{g}} = 2\\pi\\sqrt{\\frac{2(0.20)}{9.87}} = 2\\pi\\sqrt{\\frac{0.40}{\\pi^2}} = 2\\sqrt{0.40} = 2(0.6325) \\approx 1.26\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform ring of radius $R = 0.5\\,\\text{m}$ is suspended from a peg on its rim and oscillates in its own plane. What is its time period of oscillation in seconds (take $g = 10\\,\\text{m/s}^2$ and $\\pi = 3.14$)?",
    correctAnswer: 2,
    explanation: "By parallel axis theorem, $I = M R^2 + M R^2 = 2 M R^2$. Distance to center of mass is $d = R$. Time period is $T = 2\\pi\\sqrt{\\frac{I}{M g d}} = 2\\pi\\sqrt{\\frac{2 M R^2}{M g R}} = 2\\pi\\sqrt{\\frac{2R}{g}} = 2(3.14)\\sqrt{\\frac{2(0.5)}{10}} = 6.28\\sqrt{0.1} = 6.28(0.316) \\approx 1.99 \\approx 2.0\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform disc of radius $R = 0.3\\,\\text{m}$ is pivoted at a point on its circumference so that it can oscillate in a vertical plane. What is its time period of oscillation in seconds (take $g = 10\\,\\text{m/s}^2$ and $\\pi = 3.14$)? Round to two decimal places.",
    correctAnswer: 1.33,
    explanation: "$I = \\frac{1}{2}M R^2 + M R^2 = \\frac{3}{2}M R^2$. Distance $d = R$. Time period is $T = 2\\pi\\sqrt{\\frac{3R}{2g}} = 2(3.14)\\sqrt{\\frac{3(0.3)}{20}} = 6.28\\sqrt{\\frac{0.9}{20}} = 6.28\\sqrt{0.045} = 6.28(0.212) \\approx 1.33\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A torsional pendulum consists of a disc of moment of inertia $I = 0.04\\,\\text{kg}\\cdot\\text{m}^2$ attached to a wire of torsional constant $C = 1.0\\,\\text{N}\\cdot\\text{m/rad}$. What is the time period of torsional oscillation in seconds (take $\\pi = 3.14$)? Round to two decimal places.",
    correctAnswer: 1.26,
    explanation: "Torsional period is $T = 2\\pi\\sqrt{\\frac{I}{C}} = 2(3.14)\\sqrt{\\frac{0.04}{1.0}} = 6.28(0.2) = 1.256 \\approx 1.26\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A U-tube contains a column of mercury of total length $L = 0.5\\,\\text{m}$. When the liquid in one limb is depressed and released, it oscillates in SHM. Find the time period of oscillation in seconds (take $g = 10\\,\\text{m/s}^2$ and $\\pi = 3.14$)? Round to two decimal places.",
    correctAnswer: 0.99,
    explanation: "For a U-tube liquid column of total length $L$, the period is $T = 2\\pi\\sqrt{\\frac{L}{2g}} = 2(3.14)\\sqrt{\\frac{0.5}{2(10)}} = 6.28\\sqrt{0.025} = 6.28(0.1581) \\approx 0.99\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A wooden cylinder of mass $m = 1.0\\,\\text{kg}$ and cross-sectional area $A = 10^{-2}\\,\\text{m}^2$ floats vertically in water (density $\\rho = 1000\\,\\text{kg/m}^3$). If it is slightly depressed and released, what is the frequency of vertical SHM in hertz (take $g = 10\\,\\text{m/s}^2$ and $\\pi = 3.14$)? Round to two decimal places.",
    correctAnswer: 1.59,
    explanation: "The restoring force is $F = -A\\rho g y$. The effective spring constant is $k = A\\rho g = (10^{-2})(1000)(10) = 100\\,\\text{N/m}$. The angular frequency is $\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{100}{1}} = 10\\,\\text{rad/s}$. The frequency is $f = \\frac{10}{2\\pi} = \\frac{5}{3.14} \\approx 1.59\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A tunnel is dug across the Earth through its center. If a body of mass $m$ is dropped into the tunnel, what is the time taken in minutes for the body to travel from one end of the tunnel to the other (take $R_E = 6400\\,\\text{km}$, $g = 9.8\\,\\text{m/s}^2$)? Round to nearest integer.",
    correctAnswer: 42,
    explanation: "The motion inside the tunnel is SHM with period $T = 2\\pi\\sqrt{\\frac{R_E}{g}} = 2\\pi\\sqrt{\\frac{6.4 \\times 10^6}{9.8}} \\approx 5075\\,\\text{s} \\approx 84.6\\,\\text{minutes}$. The time to go from one end to the other is half a period: $t = \\frac{T}{2} = \\frac{84.6}{2} = 42.3 \\approx 42\\,\\text{minutes}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a damped harmonic oscillator, the amplitude drops to half of its initial value in $20\\,\\text{seconds}$. In how many seconds from the start will the amplitude drop to one-eighth of its initial value?",
    correctAnswer: 60,
    explanation: "Amplitude decays exponentially: $A(t) = A_0 e^{-\\gamma t}$. The half-life of amplitude is $t_{1/2} = 20\\,\\text{s}$. Dropping to $\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$ requires 3 half-lives: $t = 3 \\times 20 = 60\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A damped oscillator has mass $m = 0.2\\,\\text{kg}$, spring constant $k = 80\\,\\text{N/m}$, and damping constant $b = 0.04\\,\\text{kg/s}$. What is the time in seconds required for the mechanical energy of the oscillator to drop to $\\frac{1}{e}$ of its initial value?",
    correctAnswer: 5,
    explanation: "Mechanical energy decays as $E(t) = E_0 e^{-(b/m)t}$. The energy decay time constant is $\\tau_E = \\frac{m}{b} = \\frac{0.2}{0.04} = 5\\,\\text{s}$. Thus $E$ drops to $E_0/e$ in $5\\,\\text{seconds}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For the damped oscillator in the previous problem, what is the time in seconds required for the amplitude to drop to $\\frac{1}{e}$ of its initial value?",
    correctAnswer: 10,
    explanation: "Amplitude decays as $A(t) = A_0 e^{-(b/2m)t}$. The amplitude relaxation time is $\\tau_A = \\frac{2m}{b} = 2(5) = 10\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A forced harmonic oscillator has natural angular frequency $\\omega_0 = 100\\,\\text{rad/s}$. If a periodic driving force of amplitude $F_0 = 10\\,\\text{N}$ drives the system at resonance with damping constant $b = 0.5\\,\\text{N}\\cdot\\text{s/m}$, what is the velocity amplitude at resonance in $\\text{m/s}$?",
    correctAnswer: 20,
    explanation: "At velocity resonance, the driving frequency matches the undamped natural frequency: $\\omega_d = \\omega_0$. The velocity amplitude is $v_0 = \\frac{F_0}{b} = \\frac{10}{0.5} = 20\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two collinear simple harmonic motions are given by $x_1 = 3\\sin(10t)$ and $x_2 = 4\\sin(10t + \\pi/2)$. What is the resultant amplitude of motion?",
    correctAnswer: 5,
    explanation: "Because the phase difference is $\\pi/2$, the resultant amplitude is $A_R = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two collinear SHMs of equal amplitude $A = 10\\,\\text{cm}$ and identical frequency have a phase difference of $120^\\circ$. What is the resultant amplitude in centimeters?",
    correctAnswer: 10,
    explanation: "$A_R^2 = A^2 + A^2 + 2A^2\\cos(120^\\circ) = 2A^2 + 2A^2(-0.5) = 2A^2 - A^2 = A^2 \\implies A_R = A = 10\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform meter scale ($L = 1\\,\\text{m}$) is pivoted at the $20\\,\\text{cm}$ mark. What is the distance $d$ from the pivot to the center of mass in centimeters?",
    correctAnswer: 30,
    explanation: "Center of mass of a uniform meter scale is at the $50\\,\\text{cm}$ mark. The distance from the pivot ($20\\,\\text{cm}$) is $d = 50 - 20 = 30\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For the meter scale in the previous problem, what is the radius of gyration $k$ about the center of mass in centimeters (take $\\sqrt{1/12} \\approx 0.2887$)? Round to one decimal place.",
    correctAnswer: 28.9,
    explanation: "For a uniform rod of length $L = 100\\,\\text{cm}$, moment of inertia about CM is $I_{\\text{cm}} = \\frac{1}{12}M L^2 = M k^2 \\implies k = \\frac{L}{\\sqrt{12}} = \\frac{100}{\\sqrt{12}} \\approx 28.87 \\approx 28.9\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A damped harmonic oscillator has quality factor $Q = 500$ and resonance frequency $f_0 = 1000\\,\\text{Hz}$. What is the resonance bandwidth $\\Delta f$ in hertz?",
    correctAnswer: 2,
    explanation: "The quality factor is related to bandwidth by $Q = \\frac{f_0}{\\Delta f} \\implies \\Delta f = \\frac{f_0}{Q} = \\frac{1000}{500} = 2\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A particle is subjected to two mutually perpendicular SHMs: $x = 2\\cos(\\omega t)$ and $y = 2\\sin(\\omega t)$. What is the radius of the resulting circular trajectory in units?",
    correctAnswer: 2,
    explanation: "Squaring and adding gives $x^2 + y^2 = 4\\cos^2(\\omega t) + 4\\sin^2(\\omega t) = 4$. This is a circle of radius $R = 2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two collinear SHMs are given by $x_1 = 5\\sin(\\omega t)$ and $x_2 = 5\\sin(\\omega t + 60^\\circ)$. What is the resultant amplitude in centimeters (take $\\sqrt{3} \\approx 1.732$)? Round to one decimal place.",
    correctAnswer: 8.7,
    explanation: "Resultant amplitude is $A_R = 2A\\cos(\\phi/2) = 2(5)\\cos(30^\\circ) = 10\\left(\\frac{\\sqrt{3}}{2}\\right) = 5\\sqrt{3} \\approx 5(1.732) = 8.66 \\approx 8.7\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a damped oscillator, the amplitude decreases by $10\\%$ in 100 oscillations. What fraction of mechanical energy is lost after 100 oscillations (as a decimal rounded to two decimal places)?",
    correctAnswer: 0.19,
    explanation: "Final amplitude is $A = 0.90 A_0$. Since energy is proportional to amplitude squared: $E = (0.90)^2 E_0 = 0.81 E_0$. The fraction of energy lost is $1 - 0.81 = 0.19$ (or $19\\%$).",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A tunnel is dug along a chord of the Earth at a distance of $R_E/2$ from the center. A ball released from rest at one end of the chord oscillates back and forth. What is its time period of oscillation in minutes (take Earth radius $R_E = 6400\\,\\text{km}$ and $g = 9.8\\,\\text{m/s}^2$)? Round to one decimal place.",
    correctAnswer: 84.6,
    explanation: "For any straight tunnel through the Earth (diameter or chord), the component of gravitational restoring force along the tunnel is $F_x = -\\left(\\frac{mg}{R_E}\\right)x$. The effective stiffness is $k = mg/R_E$, giving period $T = 2\\pi\\sqrt{\\frac{R_E}{g}} \\approx 84.6\\,\\text{minutes}$, regardless of the tunnel's orientation or distance from the center.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A cube of side $a = 10\\,\\text{cm}$ and density $\\rho = 800\\,\\text{kg/m}^3$ floats in water of density $\\rho_w = 1000\\,\\text{kg/m}^3$. What is the frequency of small vertical oscillations in hertz (take $g = 9.87\\,\\text{m/s}^2$)? Round to two decimal places.",
    correctAnswer: 1.77,
    explanation: "The equilibrium submerged depth is $h = a\\left(\\frac{\\rho}{\\rho_w}\\right) = 0.10\\left(\\frac{800}{1000}\\right) = 0.08\\,\\text{m}$. The angular frequency of vertical oscillation is $\\omega = \\sqrt{\\frac{g}{h}} = \\sqrt{\\frac{9.87}{0.08}} = \\sqrt{123.375} \\approx 11.11\\,\\text{rad/s}$. Frequency is $f = \\frac{\\omega}{2\\pi} = \\frac{11.11}{2(3.1416)} \\approx 1.768 \\approx 1.77\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A particle executes SHM described by $x = 4\\cos(10t) + 3\\sin(10t)$. What is the maximum velocity in units/s?",
    correctAnswer: 50,
    explanation: "Amplitude is $A = \\sqrt{4^2 + 3^2} = 5$. Angular frequency is $\\omega = 10\\,\\text{rad/s}$. Maximum velocity is $v_{\\max} = \\omega A = 10 \\times 5 = 50$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A simple pendulum of length $1\\,\\text{m}$ has a bob of mass $0.1\\,\\text{kg}$. It is given an initial angular displacement of $6^\\circ$ ($0.105\\,\\text{rad}$). What is the total mechanical energy in millijoules (take $g = 9.8\\,\\text{m/s}^2$)? Round to one decimal place.",
    correctAnswer: 5.4,
    explanation: "$E = \\frac{1}{2}m g L \\theta_0^2 = \\frac{1}{2}(0.1)(9.8)(1.0)(0.105)^2 = 0.49(0.011025) \\approx 0.00540\\,\\text{J} = 5.4\\,\\text{mJ}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two SHMs are given by $x_1 = A\\sin(\\omega t)$ and $x_2 = A\\sin(\\omega t + \\pi)$. What is the amplitude of the combined motion?",
    correctAnswer: 0,
    explanation: "The two motions are exactly $180^\\circ$ out of phase: $x = A\\sin(\\omega t) - A\\sin(\\omega t) = 0$. Resultant amplitude is 0.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a physical pendulum, the period is $T = 2.0\\,\\text{s}$ when suspended about a knife edge $O$. There exists another point $O'$ on the other side of CM at a distance $l$ from $O$ where the period is also $2.0\\,\\text{s}$. What is the distance $l$ in meters (take $g = \\pi^2\\,\\text{m/s}^2$)?",
    correctAnswer: 1,
    explanation: "By the conjugate points property of a compound pendulum, the distance between the center of suspension and center of oscillation is $l = d_1 + d_2 = L_{\\text{eq}}$, the length of the equivalent simple pendulum: $T = 2\\pi\\sqrt{\\frac{l}{g}} \\implies 2.0 = 2\\pi\\sqrt{\\frac{l}{\\pi^2}} = 2\\sqrt{l} \\implies l = 1.0\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A damped oscillator with natural frequency $\\omega_0 = 20\\,\\text{rad/s}$ has damping parameter $\\gamma = 12\\,\\text{s}^{-1}$. What is the angular frequency of the damped oscillation in $\\text{rad/s}$?",
    correctAnswer: 16,
    explanation: "The damped angular frequency is $\\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2} = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A mass of $1\\,\\text{kg}$ executes damped vibrations with $k = 100\\,\\text{N/m}$ and damping constant $b = 2\\,\\text{kg/s}$. What is the quality factor $Q$ of this oscillator?",
    correctAnswer: 5,
    explanation: "Quality factor is $Q = \\frac{\\omega_0 m}{b}$. Here $\\omega_0 = \\sqrt{\\frac{100}{1}} = 10\\,\\text{rad/s}$. $Q = \\frac{10 \\times 1}{2} = 5$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A solid sphere of radius $R = 0.7\\,\\text{m}$ rolls without slipping inside a concave spherical surface of radius $R_0 = 2.1\\,\\text{m}$. What is the time period of small oscillations in seconds (take $g = 9.8\\,\\text{m/s}^2$ and $\\pi = 3.14$)?",
    correctAnswer: 2.82,
    explanation: "For a sphere rolling without slipping in a spherical bowl of radius $R_0$, the effective simple pendulum length is $L = \\frac{7}{5}(R_0 - R) = \\frac{7}{5}(2.1 - 0.7) = \\frac{7}{5}(1.4) = 1.96\\,\\text{m}$. The period is $T = 2\\pi\\sqrt{\\frac{L}{g}} = 2(3.14)\\sqrt{\\frac{1.96}{9.8}} = 6.28\\sqrt{0.20} = 6.28(0.4472) \\approx 2.81\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body is subjected to two perpendicular SHMs of the same frequency: $x = 3\\sin(\\omega t)$ and $y = 4\\sin(\\omega t + \\pi)$. The trajectory of the particle is a straight line of slope $m$. What is the value of $m$ (rounded to two decimal places)?",
    correctAnswer: -1.33,
    explanation: "Since $\\sin(\\omega t + \\pi) = -\\sin(\\omega t)$, we have $y = -4\\sin(\\omega t) = -4\\left(\\frac{x}{3}\\right) = -\\frac{4}{3}x$. The trajectory is a straight line through the origin with slope $m = -4/3 \\approx -1.33$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "An underdamped oscillator undergoes 50 oscillations while its amplitude decreases by a factor of 2. After how many total oscillations will its energy decrease to $\\frac{1}{16}$ of its initial value?",
    correctAnswer: 100,
    explanation: "Energy is proportional to amplitude squared: $E \\propto A^2$. In 50 oscillations, amplitude halves, so energy decreases by $(1/2)^2 = 1/4$. Dropping to $1/16 = (1/4)^2$ requires 2 such intervals: $2 \\times 50 = 100$ oscillations.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform square plate of side $a = 0.6\\,\\text{m}$ is pivoted at one of its corners and oscillates in its own vertical plane. What is the distance $d$ from the pivot to the center of mass in meters (take $\\sqrt{2} \\approx 1.414$)? Round to two decimal places.",
    correctAnswer: 0.42,
    explanation: "Center of mass is at the center of the square. Distance from a corner is $d = \\frac{a}{\\sqrt{2}} = \\frac{0.6}{1.414} \\approx 0.424 \\approx 0.42\\,\\text{m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A U-tube containing water is accelerated horizontally with an acceleration $a = 2.45\\,\\text{m/s}^2$. If the distance between the two vertical limbs is $L = 10\\,\\text{cm}$, what is the difference in water levels between the two limbs in centimeters (take $g = 9.8\\,\\text{m/s}^2$)?",
    correctAnswer: 2.5,
    explanation: "The surface tilts at angle $\\tan\\theta = \\frac{a}{g} = \\frac{2.45}{9.8} = 0.25$. The difference in heights is $h = L\\tan\\theta = 10 \\times 0.25 = 2.5\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A solid cylinder of mass $M$ and radius $R$ is attached to a horizontal spring of constant $k$ and rolls without slipping on a horizontal surface. What is the effective oscillating mass $m_{\\text{eff}}$ in terms of $M$?",
    correctAnswer: 1.5,
    explanation: "Total kinetic energy is $K = \\frac{1}{2}M v^2 + \\frac{1}{2}I \\omega^2 = \\frac{1}{2}M v^2 + \\frac{1}{2}\\left(\\frac{1}{2}M R^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}M v^2 + \\frac{1}{4}M v^2 = \\frac{3}{4}M v^2 = \\frac{1}{2}\\left(\\frac{3}{2}M\\right)v^2$. Thus effective mass is $m_{\\text{eff}} = 1.5 M$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For the rolling cylinder in the previous problem, if $M = 2\\,\\text{kg}$ and $k = 300\\,\\text{N/m}$, what is the angular frequency $\\omega$ of oscillation in $\\text{rad/s}$?",
    correctAnswer: 10,
    explanation: "Effective mass is $m_{\\text{eff}} = 1.5(2) = 3\\,\\text{kg}$. $\\omega = \\sqrt{\\frac{k}{m_{\\text{eff}}}} = \\sqrt{\\frac{300}{3}} = \\sqrt{100} = 10\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A particle executes SHM under two forces $F_1 = -16 x$ and $F_2 = -9 x$ simultaneously. If mass $m = 1\\,\\text{kg}$, what is the angular frequency $\\omega$ in $\\text{rad/s}$?",
    correctAnswer: 5,
    explanation: "Total restoring force is $F = F_1 + F_2 = -25 x$. Effective spring constant is $k = 25\\,\\text{N/m}$. $\\omega = \\sqrt{\\frac{25}{1}} = 5\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A simple pendulum has period $T$. If the bob is replaced by a magnet and a copper plate is placed horizontally just below the oscillating magnet, what happens to the period (enter 1 if it is damped and stops, 2 if frequency increases, 3 if amplitude grows indefinitely)?",
    correctAnswer: 1,
    explanation: "Eddy currents induced in the copper plate by the moving magnetic field oppose the relative motion (Lenz's law), providing electromagnetic damping that causes the oscillations to decay and stop (enter 1).",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A particle is subjected to three parallel SHMs along the $x$-axis: $x_1 = A\\sin(\\omega t)$, $x_2 = A\\sin(\\omega t + 2\\pi/3)$, $x_3 = A\\sin(\\omega t + 4\\pi/3)$. What is the amplitude of the resultant motion?",
    correctAnswer: 0,
    explanation: "The three phasors are symmetric with equal amplitudes and $120^\\circ$ angular separation. Their vector sum is identically zero: $A_R = 0$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A damped oscillator has an initial amplitude of $20\\,\\text{cm}$. After 25 cycles, its amplitude drops to $10\\,\\text{cm}$. What will be its amplitude in centimeters after another 25 cycles?",
    correctAnswer: 5,
    explanation: "The fractional decay of amplitude per cycle is constant in exponential damping. In 25 cycles, amplitude is halved: $20 \\to 10\\,\\text{cm}$. In the next 25 cycles, it will halve again: $10 \\to 5\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A torsional pendulum has frequency $2\\,\\text{Hz}$. When a concentric circular ring is placed on the disc, the moment of inertia increases by $300\\%$. What is the new frequency in hertz?",
    correctAnswer: 1,
    explanation: "Moment of inertia becomes $I' = I + 3I = 4I$. Since $f \\propto 1/\\sqrt{I}$, new frequency is $f' = \\frac{f}{\\sqrt{4}} = \\frac{2}{2} = 1\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A vertical spring-mass system has period $T = 1.0\\,\\text{s}$. If the mass of the spring is $30\\%$ of the hanging mass $M$, what is the percentage decrease in frequency if the spring mass were completely neglected (rounded to one decimal place)?",
    correctAnswer: 4.7,
    explanation: "Effective mass is $m_{\\text{eff}} = M + \\frac{0.30 M}{3} = 1.10 M$. If neglected, $m' = M$. Frequency ratio is $\\frac{f_{\\text{actual}}}{f_{\\text{neglected}}} = \\sqrt{\\frac{M}{1.10 M}} = \\frac{1}{\\sqrt{1.10}} \\approx 0.9535$. The percentage difference is $(1 - 0.9535) \\times 100 \\approx 4.65 \\approx 4.7\\%$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a forced oscillator, the damping force is given by $F_d = -0.2 v$. If the mass is $0.1\\,\\text{kg}$, what is the damping coefficient $\\gamma = \\frac{b}{2m}$ in $\\text{s}^{-1}$?",
    correctAnswer: 1,
    explanation: "$\\gamma = \\frac{b}{2m} = \\frac{0.2}{2(0.1)} = \\frac{0.2}{0.2} = 1\\,\\text{s}^{-1}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A particle executes SHM on the $x$-axis with $x = 10\\sin(2\\pi t)\\,\\text{cm}$. What is the total distance traveled by the particle in centimeters in 3 complete periods?",
    correctAnswer: 120,
    explanation: "In one complete period, distance traveled is $4A = 4(10) = 40\\,\\text{cm}$. In 3 periods, distance is $3 \\times 40 = 120\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A simple pendulum has period $T = 2\\,\\text{s}$. If the bob is pulled aside to an angle of $90^\\circ$ and released, what is the speed of the bob in $\\text{m/s}$ at the lowest point (take $L = 1\\,\\text{m}$ and $g = 9.8\\,\\text{m/s}^2$)? Round to one decimal place.",
    correctAnswer: 4.4,
    explanation: "By conservation of energy: $m g L = \\frac{1}{2}m v^2 \\implies v = \\sqrt{2gL} = \\sqrt{2(9.8)(1.0)} = \\sqrt{19.6} \\approx 4.43 \\approx 4.4\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A simple pendulum has time period $T$. When its length is increased by $21\\,\\text{cm}$, the time period increases by $10\\%$. What was the original length of the pendulum in centimeters?",
    correctAnswer: 100,
    explanation: "$T \\propto \\sqrt{L} \\implies \\frac{T'}{T} = \\sqrt{\\frac{L + 21}{L}} = 1.10 \\implies \\frac{L + 21}{L} = (1.10)^2 = 1.21 \\implies L + 21 = 1.21 L \\implies 0.21 L = 21 \\implies L = 100\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A mass $m$ is suspended from a vertical spring. If the spring is stretched by $2.5\\,\\text{cm}$ in equilibrium, what is the angular frequency $\\omega$ of vertical oscillations in $\\text{rad/s}$ (take $g = 10\\,\\text{m/s}^2$)?",
    correctAnswer: 20,
    explanation: "At equilibrium, $k x_0 = mg \\implies \\frac{k}{m} = \\frac{g}{x_0} = \\frac{10}{0.025} = 400\\,\\text{s}^{-2}$. Angular frequency is $\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{400} = 20\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  }
];

const outputPath = path.join(__dirname, 'data_jee_ow_part8.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');

console.log(`Part 8 generated: ${questions.length} questions (NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);
console.log(`Saved to ${outputPath}`);
