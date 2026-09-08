const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Simple Harmonic Motion (SHM)";
const CHAPTER = "Oscillations and Waves";
const SUBJECT = "Physics";

const questions = [
  // 45 Numerical Questions on SHM Dynamics & Springs
  {
    type: "NUMERICAL",
    question: "A block of mass $2\\,\\text{kg}$ is attached to a horizontal spring of spring constant $200\\,\\text{N/m}$. What is the time period of oscillation in seconds (take $\\pi = 3.14$)? Round to two decimal places.",
    correctAnswer: 0.63,
    explanation: "Time period $T = 2\\pi\\sqrt{\\frac{m}{k}} = 2(3.14)\\sqrt{\\frac{2}{200}} = 6.28\\sqrt{0.01} = 6.28 \\times 0.1 = 0.628 \\approx 0.63\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A vertical spring stretches by $9.8\\,\\text{cm}$ when a mass of $1\\,\\text{kg}$ is hung from it in equilibrium. What is the time period of oscillation in seconds when the mass is set into vertical SHM (take $g = 9.8\\,\\text{m/s}^2$ and $\\pi = 3.14$)? Round to two decimal places.",
    correctAnswer: 0.63,
    explanation: "At equilibrium, $k x_0 = mg \\implies \\frac{m}{k} = \\frac{x_0}{g} = \\frac{0.098}{9.8} = 0.01\\,\\text{s}^2$. The time period is $T = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{0.01} = 2\\pi(0.1) = 0.2\\pi = 0.2(3.14) = 0.628 \\approx 0.63\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two springs of spring constants $k_1 = 300\\,\\text{N/m}$ and $k_2 = 600\\,\\text{N/m}$ are connected in series. What is the equivalent spring constant of the combination in $\\text{N/m}$?",
    correctAnswer: 200,
    explanation: "For springs in series: $\\frac{1}{k_{\\text{eq}}} = \\frac{1}{k_1} + \\frac{1}{k_2} = \\frac{1}{300} + \\frac{1}{600} = \\frac{2 + 1}{600} = \\frac{3}{600} = \\frac{1}{200} \\implies k_{\\text{eq}} = 200\\,\\text{N/m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "If the two springs in the previous problem are connected in parallel instead, what is the equivalent spring constant in $\\text{N/m}$?",
    correctAnswer: 900,
    explanation: "For springs in parallel: $k_{\\text{eq}} = k_1 + k_2 = 300 + 600 = 900\\,\\text{N/m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring of spring constant $k = 400\\,\\text{N/m}$ is cut into two pieces in the ratio of lengths $1:3$. What is the spring constant of the shorter piece in $\\text{N/m}$?",
    correctAnswer: 1600,
    explanation: "Spring constant is inversely proportional to length ($k \\propto 1/L$). The shorter piece has length $L_1 = \\frac{1}{4} L$, so its spring constant is $k_1 = 4 k = 4 \\times 400 = 1600\\,\\text{N/m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "For the spring in the previous problem, what is the spring constant of the longer piece in $\\text{N/m}$ (rounded to nearest integer)?",
    correctAnswer: 533,
    explanation: "The longer piece has length $L_2 = \\frac{3}{4}L$. Its spring constant is $k_2 = \\frac{4}{3}k = \\frac{4}{3}(400) = \\frac{1600}{3} \\approx 533.3 \\approx 533\\,\\text{N/m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A mass $m = 1\\,\\text{kg}$ is suspended between two identical horizontal springs each of spring constant $k = 50\\,\\text{N/m}$ fixed to opposite rigid walls. Find the angular frequency $\\omega$ of oscillation in $\\text{rad/s}$.",
    correctAnswer: 10,
    explanation: "When the mass is displaced by $x$, both springs exert restoring forces in the same direction: $F = -k x - k x = -2k x$. The effective spring constant is $k_{\\text{eq}} = 2k = 2(50) = 100\\,\\text{N/m}$. The angular frequency is $\\omega = \\sqrt{\\frac{k_{\\text{eq}}}{m}} = \\sqrt{\\frac{100}{1}} = 10\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $m$ attached to a spring oscillates with frequency $2\\,\\text{Hz}$. When an additional mass of $3\\,\\text{kg}$ is added to the block, the frequency becomes $1\\,\\text{Hz}$. What is the original mass $m$ in kilograms?",
    correctAnswer: 1,
    explanation: "Frequency is $f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$. Therefore $\\frac{f_1}{f_2} = \\sqrt{\\frac{m + 3}{m}} \\implies \\frac{2}{1} = \\sqrt{\\frac{m + 3}{m}} \\implies 4 = \\frac{m + 3}{m} \\implies 4m = m + 3 \\implies 3m = 3 \\implies m = 1\\,\\text{kg}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two bodies of masses $m_1 = 2\\,\\text{kg}$ and $m_2 = 3\\,\\text{kg}$ are connected by a spring of constant $k = 120\\,\\text{N/m}$ on a frictionless horizontal surface. What is the frequency of oscillation in hertz (take $\\pi = 3.14$)? Round to two decimal places.",
    correctAnswer: 1.59,
    explanation: "Reduced mass is $\\mu = \\frac{m_1 m_2}{m_1 + m_2} = \\frac{2 \\times 3}{2 + 3} = \\frac{6}{5} = 1.2\\,\\text{kg}$. The angular frequency is $\\omega = \\sqrt{\\frac{k}{\\mu}} = \\sqrt{\\frac{120}{1.2}} = \\sqrt{100} = 10\\,\\text{rad/s}$. Frequency is $f = \\frac{\\omega}{2\\pi} = \\frac{10}{2(3.14)} = \\frac{5}{3.14} \\approx 1.59\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring-mass system with mass $M = 0.9\\,\\text{kg}$ has a spring of mass $m_s = 0.3\\,\\text{kg}$ and spring constant $k = 100\\,\\text{N/m}$. What is the effective oscillating mass in kilograms including the spring's mass correction?",
    correctAnswer: 1,
    explanation: "The effective mass of a heavy spring is $m_{\\text{eff}} = M + \\frac{m_s}{3} = 0.9 + \\frac{0.3}{3} = 0.9 + 0.1 = 1.0\\,\\text{kg}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $4\\,\\text{kg}$ rests on a horizontal platform that oscillates vertically in SHM with amplitude $10\\,\\text{cm}$. What is the maximum frequency in hertz for which the block never leaves the platform (take $g = 9.87\\,\\text{m/s}^2$)?",
    correctAnswer: 1.58,
    explanation: "The block leaves contact when maximum downward acceleration equals $g$: $\\omega^2 A = g \\implies \\omega^2 (0.10) = 9.87 \\implies \\omega^2 = 98.7 \\implies \\omega = \\sqrt{98.7} \\approx 9.93\\,\\text{rad/s}$. Frequency is $f = \\frac{\\omega}{2\\pi} = \\frac{\\sqrt{\\pi^2 \\times 10}}{2\\pi} = \\frac{\\pi\\sqrt{10}}{2\\pi} = \\frac{\\sqrt{10}}{2} = \\frac{3.162}{2} = 1.58\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A small body of mass $m$ rests on a horizontal slab executing horizontal SHM with frequency $2\\,\\text{Hz}$. If the coefficient of static friction between the body and the slab is $\\mu_s = 0.4$, find the maximum amplitude in centimeters for which the body does not slip (take $g = 10\\,\\text{m/s}^2$ and $\\pi^2 = 10$).",
    correctAnswer: 2.5,
    explanation: "Condition for no slipping: $a_{\\max} \\le \\mu_s g \\implies \\omega^2 A \\le \\mu_s g$. Here $\\omega = 2\\pi f = 4\\pi\\,\\text{rad/s} \\implies \\omega^2 = 16\\pi^2 = 16(10) = 160\\,\\text{s}^{-2}$. Maximum amplitude is $A_{\\max} = \\frac{\\mu_s g}{\\omega^2} = \\frac{0.4 \\times 10}{160} = \\frac{4}{160} = 0.025\\,\\text{m} = 2.5\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring of stiffness $k$ has time period $T$ when supporting a mass $m$. When cut into two equal halves and connected in parallel with the same mass $m$, what is the new time period in terms of $T$ (find $k_t$ where $T' = k_t T$)?",
    correctAnswer: 0.5,
    explanation: "Cutting into two halves doubles each spring constant: $k_1 = k_2 = 2k$. Connecting them in parallel gives $k_{\\text{eq}} = 2k + 2k = 4k$. The new time period is $T' = 2\\pi\\sqrt{\\frac{m}{4k}} = \\frac{1}{2}\\left(2\\pi\\sqrt{\\frac{m}{k}}\\right) = 0.5 T$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $m$ on an inclined plane of angle $30^\\circ$ is connected to a spring of constant $k = 100\\,\\text{N/m}$. The surface is frictionless. If $m = 1\\,\\text{kg}$, find the angular frequency $\\omega$ of oscillation in $\\text{rad/s}$.",
    correctAnswer: 10,
    explanation: "The restoring force along the incline about equilibrium is $F_{\\text{net}} = -k x$. The inclination merely shifts the equilibrium position by $\\frac{mg\\sin(30^\\circ)}{k}$ without altering the restoring stiffness. Thus $\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{100}{1}} = 10\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring has spring constant $200\\,\\text{N/m}$. When a mass $m$ is hung vertically, it oscillates with period $1\\,\\text{s}$. If the entire setup is placed in an elevator accelerating upward at $2\\,\\text{m/s}^2$, what is the new period of oscillation in seconds?",
    correctAnswer: 1,
    explanation: "The period of a spring-mass oscillator is $T = 2\\pi\\sqrt{m/k}$, which depends solely on mass $m$ and spring stiffness $k$. Pseudo-forces in an accelerating reference frame shift the equilibrium position but do not alter the restoring force gradient $k = -dF/dx$. Hence $T$ remains $1\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two springs of stiffnesses $k_1 = 100\\,\\text{N/m}$ and $k_2 = 400\\,\\text{N/m}$ have periods $T_1$ and $T_2$ when oscillating with the same mass. What is the ratio $T_1 / T_2$?",
    correctAnswer: 2,
    explanation: "$T \\propto \\frac{1}{\\sqrt{k}} \\implies \\frac{T_1}{T_2} = \\sqrt{\\frac{k_2}{k_1}} = \\sqrt{\\frac{400}{100}} = \\sqrt{4} = 2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A mass of $0.5\\,\\text{kg}$ attached to a spring executes SHM with an amplitude of $10\\,\\text{cm}$ and period $0.2\\,\\text{s}$. What is the maximum restoring force acting on the mass in newtons (take $\\pi^2 = 10$)?",
    correctAnswer: 50,
    explanation: "Angular frequency is $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0.2} = 10\\pi\\,\\text{rad/s}$. Spring constant is $k = m\\omega^2 = 0.5(100\\pi^2) = 50\\pi^2 = 50(10) = 500\\,\\text{N/m}$. Maximum restoring force is $F_{\\max} = k A = 500 \\times 0.10 = 50\\,\\text{N}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring-block system has period $T = 2\\,\\text{s}$. If the mass of the block is increased by $300\\%$, what is the new period of oscillation in seconds?",
    correctAnswer: 4,
    explanation: "Increasing mass by $300\\%$ means the new mass is $m' = m + 3m = 4m$. Since $T \\propto \\sqrt{m}$, the new period is $T' = \\sqrt{4} T = 2(2) = 4\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $M$ attached to a spring of constant $k$ oscillates with amplitude $A$. At the mean position, a sticky mass $m$ is gently placed on top of it. What is the new amplitude of oscillation in terms of $A$ if $M = 3\\,\\text{kg}$ and $m = 1\\,\\text{kg}$?",
    correctAnswer: 0.87,
    explanation: "At the mean position, velocity is maximum: $v = \\omega_1 A = \\sqrt{\\frac{k}{M}} A$. By conservation of momentum during inelastic landing: $M v = (M + m) v' \\implies v' = \\frac{M}{M + m} v = \\frac{3}{4} v$. The new angular frequency is $\\omega_2 = \\sqrt{\\frac{k}{M + m}} = \\sqrt{\\frac{k}{4}}$. The new amplitude is $A' = \\frac{v'}{\\omega_2} = \\frac{\\frac{3}{4}\\sqrt{\\frac{k}{3}} A}{\\sqrt{\\frac{k}{4}}} = \\frac{3/4}{\\sqrt{3}/2} A = \\frac{3}{2\\sqrt{3}} A = \\frac{\\sqrt{3}}{2} A \\approx 0.866 \\approx 0.87 A$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Four identical springs of spring constant $k = 100\\,\\text{N/m}$ each are connected in parallel to support a mass of $1\\,\\text{kg}$. What is the angular frequency $\\omega$ of oscillation in $\\text{rad/s}$?",
    correctAnswer: 20,
    explanation: "$k_{\\text{eq}} = 4k = 4(100) = 400\\,\\text{N/m}$. Angular frequency $\\omega = \\sqrt{\\frac{k_{\\text{eq}}}{m}} = \\sqrt{\\frac{400}{1}} = 20\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "If the four springs in the previous problem are connected in series instead, what is the angular frequency $\\omega$ in $\\text{rad/s}$?",
    correctAnswer: 5,
    explanation: "$k_{\\text{eq}} = \\frac{k}{4} = \\frac{100}{4} = 25\\,\\text{N/m}$. $\\omega = \\sqrt{\\frac{k_{\\text{eq}}}{m}} = \\sqrt{\\frac{25}{1}} = 5\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring-mass system with $k = 64\\,\\text{N/m}$ and $m = 4\\,\\text{kg}$ is pulled by $0.1\\,\\text{m}$ from equilibrium and released. What is the velocity of the block in $\\text{m/s}$ when passing through the equilibrium position?",
    correctAnswer: 0.4,
    explanation: "$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{64}{4}} = \\sqrt{16} = 4\\,\\text{rad/s}$. Maximum velocity is $v_{\\max} = \\omega A = 4 \\times 0.1 = 0.4\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A mass of $2\\,\\text{kg}$ oscillates on a spring with $T = 2\\,\\text{s}$. What mass in kilograms should be added to the system to increase the time period to $3\\,\\text{s}$?",
    correctAnswer: 2.5,
    explanation: "$\\frac{T_2}{T_1} = \\sqrt{\\frac{m_2}{m_1}} \\implies \\frac{3}{2} = \\sqrt{\\frac{m_2}{2}} \\implies \\frac{9}{4} = \\frac{m_2}{2} \\implies m_2 = \\frac{18}{4} = 4.5\\,\\text{kg}$. The added mass is $\\Delta m = 4.5 - 2 = 2.5\\,\\text{kg}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A vertical spring-mass oscillator has a period of $0.5\\,\\text{s}$. What is the static extension of the spring in centimeters in the equilibrium position (take $g = 9.87\\,\\text{m/s}^2$)? Round to two decimal places.",
    correctAnswer: 6.25,
    explanation: "Time period is $T = 2\\pi\\sqrt{\\frac{x_0}{g}} \\implies T^2 = 4\\pi^2 \\frac{x_0}{g}$. Since $g = \\pi^2$, $T^2 = 4 x_0 \\implies x_0 = \\frac{T^2}{4} = \\frac{0.25}{4} = 0.0625\\,\\text{m} = 6.25\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A uniform spring of constant $k$ is cut into three equal parts. Two parts are connected in parallel, and this combination is connected in series with the third part. What is the ratio of the effective spring constant of this network to the original constant $k$?",
    correctAnswer: 2,
    explanation: "Each part has stiffness $k' = 3k$. The parallel pair has $k_p = 3k + 3k = 6k$. Connecting $6k$ in series with the third piece ($3k$): $\\frac{1}{k_{\\text{eq}}} = \\frac{1}{6k} + \\frac{1}{3k} = \\frac{1 + 2}{6k} = \\frac{3}{6k} = \\frac{1}{2k} \\implies k_{\\text{eq}} = 2k$. The ratio is 2.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $1\\,\\text{kg}$ is attached to a spring of constant $100\\,\\text{N/m}$. The block is pulled by $5\\,\\text{cm}$ and given an initial velocity of $50\\,\\text{cm/s}$ towards the mean position. What is the amplitude of oscillation in centimeters (take $\\sqrt{2} \\approx 1.414$)? Round to two decimal places.",
    correctAnswer: 7.07,
    explanation: "Angular frequency is $\\omega = \\sqrt{\\frac{100}{1}} = 10\\,\\text{rad/s}$. Amplitude is $A = \\sqrt{x_0^2 + \\left(\\frac{v_0}{\\omega}\\right)^2} = \\sqrt{5^2 + \\left(\\frac{50}{10}\\right)^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2} \\approx 5(1.414) = 7.07\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring-mass system oscillates with an energy of $2\\,\\text{J}$ and amplitude $0.1\\,\\text{m}$. What is the spring constant $k$ in $\\text{N/m}$?",
    correctAnswer: 400,
    explanation: "Total energy is $E = \\frac{1}{2}k A^2 \\implies 2 = \\frac{1}{2} k (0.1)^2 = 0.005 k \\implies k = \\frac{2}{0.005} = 400\\,\\text{N/m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A mass $m$ suspended from a spring of stiffness $k$ has frequency $f_1$. When suspended from a spring of stiffness $2k$, its frequency is $f_2$. Find the ratio $f_2 / f_1$ (take $\\sqrt{2} \\approx 1.41$).",
    correctAnswer: 1.41,
    explanation: "$\\frac{f_2}{f_1} = \\sqrt{\\frac{2k}{k}} = \\sqrt{2} \\approx 1.41$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $m = 2\\,\\text{kg}$ is dropped from a height $h = 40\\,\\text{cm}$ onto a vertical spring of constant $k = 1960\\,\\text{N/m}$. Find the maximum compression of the spring in centimeters (take $g = 9.8\\,\\text{m/s}^2$).",
    correctAnswer: 10,
    explanation: "By conservation of mechanical energy: $mg(h + x) = \\frac{1}{2}k x^2 \\implies 2(9.8)(0.40 + x) = \\frac{1}{2}(1960)x^2 \\implies 19.6(0.40 + x) = 980 x^2 \\implies 0.40 + x = 50 x^2 \\implies 50 x^2 - x - 0.40 = 0 \\implies 500 x^2 - 10 x - 4 = 0 \\implies 250 x^2 - 5 x - 2 = 0$. Using quadratic formula: $x = \\frac{5 + \\sqrt{25 - 4(250)(-2)}}{500} = \\frac{5 + \\sqrt{25 + 2000}}{500} = \\frac{5 + \\sqrt{2025}}{500} = \\frac{5 + 45}{500} = \\frac{50}{500} = 0.10\\,\\text{m} = 10\\,\\text{cm}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "In a spring-mass oscillator, the restoring force is $8\\,\\text{N}$ when displacement is $2\\,\\text{cm}$. What is the spring constant in $\\text{N/m}$?",
    correctAnswer: 400,
    explanation: "$k = \\frac{F}{x} = \\frac{8}{0.02} = 400\\,\\text{N/m}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $0.5\\,\\text{kg}$ is attached to a spring of constant $32\\,\\text{N/m}$. What is the period of oscillation in seconds (take $\\pi = 3.14$)? Round to two decimal places.",
    correctAnswer: 0.79,
    explanation: "$T = 2\\pi\\sqrt{\\frac{m}{k}} = 2(3.14)\\sqrt{\\frac{0.5}{32}} = 6.28\\sqrt{\\frac{1}{64}} = \\frac{6.28}{8} = 0.785 \\approx 0.79\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring of constant $k$ is loaded with a mass $M$ and oscillates with period $T$. When an unknown mass $m$ is added, the period becomes $1.5 T$. Find the ratio $m/M$.",
    correctAnswer: 1.25,
    explanation: "$\\frac{T'}{T} = \\sqrt{\\frac{M + m}{M}} = 1.5 \\implies \\frac{M + m}{M} = 2.25 \\implies 1 + \\frac{m}{M} = 2.25 \\implies \\frac{m}{M} = 1.25$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two masses $m_1 = 1\\,\\text{kg}$ and $m_2 = 2\\,\\text{kg}$ are connected by a spring of stiffness $300\\,\\text{N/m}$ and placed on a smooth table. The spring is compressed and released. What is the frequency of oscillation in hertz (take $\\pi = 3.14$)? Round to one decimal place.",
    correctAnswer: 3.4,
    explanation: "Reduced mass is $\\mu = \\frac{1 \\times 2}{1 + 2} = \\frac{2}{3}\\,\\text{kg}$. $\\omega = \\sqrt{\\frac{k}{\\mu}} = \\sqrt{\\frac{300}{2/3}} = \\sqrt{450} \\approx 21.21\\,\\text{rad/s}$. Frequency is $f = \\frac{21.21}{2(3.14)} = \\frac{21.21}{6.28} \\approx 3.38 \\approx 3.4\\,\\text{Hz}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A horizontal spring-mass system has a mass of $0.25\\,\\text{kg}$ and a spring constant of $100\\,\\text{N/m}$. If the amplitude is $4\\,\\text{cm}$, what is the maximum kinetic energy in millijoules ($\\text{mJ}$)?",
    correctAnswer: 80,
    explanation: "$E = \\frac{1}{2}k A^2 = \\frac{1}{2}(100)(0.04)^2 = 50(0.0016) = 0.08\\,\\text{J} = 80\\,\\text{mJ}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring stretches by $5\\,\\text{cm}$ when loaded with a mass of $2\\,\\text{kg}$. What is the work done in joules in stretching the spring by an additional $5\\,\\text{cm}$ (take $g = 10\\,\\text{m/s}^2$)?",
    correctAnswer: 1.5,
    explanation: "Spring constant is $k = \\frac{mg}{x_1} = \\frac{20}{0.05} = 400\\,\\text{N/m}$. Initial extension is $x_1 = 0.05\\,\\text{m}$, final extension is $x_2 = 0.10\\,\\text{m}$. Work done is $W = \\frac{1}{2}k(x_2^2 - x_1^2) = \\frac{1}{2}(400)(0.01 - 0.0025) = 200(0.0075) = 1.5\\,\\text{J}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A vertical spring-mass system oscillates with period $T$. If the mass is submerged in water such that buoyant force equals half of the weight of the mass, what is the new time period of oscillation (neglecting viscous damping)?",
    correctAnswer: 1,
    explanation: "Buoyant force is constant with depth and acts like a constant upward force, merely shifting the equilibrium extension. It does not alter the restoring force gradient $k$. Since $T = 2\\pi\\sqrt{m/k}$, the period remains unchanged. In units of $T$, the factor is 1.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two springs of constants $k_1$ and $k_2$ have equal maximum potential energies when oscillating with the same amplitude. What is the ratio $k_1 / k_2$?",
    correctAnswer: 1,
    explanation: "$U_{\\max} = \\frac{1}{2}k A^2$. For equal amplitude and equal maximum potential energy, $\\frac{1}{2}k_1 A^2 = \\frac{1}{2}k_2 A^2 \\implies k_1 / k_2 = 1$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring-mass system has a period of $1.2\\,\\text{s}$. When the mass is replaced by another mass, the period becomes $1.6\\,\\text{s}$. What would be the period in seconds if both masses were attached together to the spring?",
    correctAnswer: 2,
    explanation: "$T_1^2 = 4\\pi^2 \\frac{m_1}{k}$ and $T_2^2 = 4\\pi^2 \\frac{m_2}{k}$. When both masses are combined: $T^2 = 4\\pi^2 \\frac{m_1 + m_2}{k} = T_1^2 + T_2^2 = (1.2)^2 + (1.6)^2 = 1.44 + 2.56 = 4.00 \\implies T = \\sqrt{4.00} = 2.0\\,\\text{s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A block of mass $m$ is supported by three identical springs of constant $k$ connected in parallel. If $k = 300\\,\\text{N/m}$ and $m = 1\\,\\text{kg}$, what is the angular frequency $\\omega$ in $\\text{rad/s}$?",
    correctAnswer: 30,
    explanation: "$k_{\\text{eq}} = 3k = 3(300) = 900\\,\\text{N/m}$. $\\omega = \\sqrt{\\frac{k_{\\text{eq}}}{m}} = \\sqrt{\\frac{900}{1}} = 30\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring has spring constant $k$. When cut into two pieces with lengths in the ratio $1:2$, the spring constant of the longer piece is $c k$. What is the value of $c$?",
    correctAnswer: 1.5,
    explanation: "The longer piece has length $L_2 = \\frac{2}{3}L$. Its stiffness is $k_2 = \\frac{3}{2}k = 1.5 k$. Hence $c = 1.5$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A spring-mass system has a period of $T$. If the spring is cut into two equal halves and the mass is connected to only one half, the new period is $T/\\sqrt{n}$. What is the value of $n$?",
    correctAnswer: 2,
    explanation: "Each half has stiffness $k' = 2k$. The new period is $T' = 2\\pi\\sqrt{\\frac{m}{2k}} = \\frac{T}{\\sqrt{2}}$. Hence $n = 2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A mass of $1.0\\,\\text{kg}$ suspended from a spring of constant $k = 400\\,\\text{N/m}$ is displaced by $5\\,\\text{cm}$ downwards and released. What is the acceleration of the mass in $\\text{m/s}^2$ at the moment of release?",
    correctAnswer: 20,
    explanation: "$a = \\frac{F}{m} = \\frac{k x}{m} = \\frac{400 \\times 0.05}{1.0} = 20\\,\\text{m/s}^2$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A body of mass $2\\,\\text{kg}$ is executing SHM on a spring of stiffness $50\\,\\text{N/m}$. What is the speed of the body in $\\text{m/s}$ when it is at $x = 0.6 A$, given $A = 0.5\\,\\text{m}$?",
    correctAnswer: 2,
    explanation: "$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5\\,\\text{rad/s}$. Velocity is $v = \\omega\\sqrt{A^2 - (0.6A)^2} = \\omega(0.8 A) = 5 \\times 0.8 \\times 0.5 = 2.0\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "Two springs of stiffnesses $k$ and $2k$ are connected in series with a mass $m$. If $k = 600\\,\\text{N/m}$ and $m = 1.0\\,\\text{kg}$, what is the angular frequency $\\omega$ of oscillation in $\\text{rad/s}$?",
    correctAnswer: 20,
    explanation: "Series equivalent is $k_{\\text{eq}} = \\frac{k(2k)}{k + 2k} = \\frac{2}{3}k = \\frac{2}{3}(600) = 400\\,\\text{N/m}$. Angular frequency is $\\omega = \\sqrt{\\frac{k_{\\text{eq}}}{m}} = \\sqrt{\\frac{400}{1.0}} = 20\\,\\text{rad/s}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "NUMERICAL",
    question: "A particle executes SHM on a spring with total mechanical energy $E = 10\\,\\text{J}$. What is its kinetic energy in joules when its displacement is $\\frac{A}{\\sqrt{2}}$?",
    correctAnswer: 5,
    explanation: "Potential energy at $x = \\frac{A}{\\sqrt{2}}$ is $U = \\frac{1}{2}k x^2 = \\frac{1}{2}k\\left(\\frac{A^2}{2}\\right) = \\frac{E}{2} = 5\\,\\text{J}$. By conservation of energy, kinetic energy is $K = E - U = 10 - 5 = 5\\,\\text{J}$.",
    marks: 4,
    negativeMarks: 1,
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  }
];

const outputPath = path.join(__dirname, 'data_jee_ow_part6.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');

console.log(`Part 6 generated: ${questions.length} questions (NUM: ${questions.filter(q => q.type === 'NUMERICAL').length})`);
console.log(`Saved to ${outputPath}`);
