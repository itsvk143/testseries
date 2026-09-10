const fs = require('fs');
const path = require('path');

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const subTopic = "Orbital velocity and satellite motion";
const chapter = "Gravitation";
const subject = "Physics";

// 26 Assertion-Reason questions
const arQuestions = [
  {
    assertion: "An astronaut inside an artificial satellite orbiting the Earth experiences weightlessness.",
    reason: "Both the astronaut and the satellite have the same orbital acceleration equal to the local acceleration due to gravity, so the normal contact force between them is zero.",
    correctOptionIndex: 0,
    explanation: "Because gravity provides the exact centripetal acceleration ($a = g_r = \\frac{GM}{r^2}$) for both the astronaut and the spacecraft, they are in a state of mutual free fall towards Earth. Hence the floor of the spacecraft exerts zero normal reaction force ($N = m(g_r - a) = 0$), producing complete weightlessness. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The total mechanical energy of an orbiting satellite is negative.",
    reason: "A negative total mechanical energy signifies that the satellite is in a bound gravitational orbit and cannot escape to infinity without external energy.",
    correctOptionIndex: 0,
    explanation: "For a circular orbit of radius $r$, kinetic energy is $K = \\frac{GMm}{2r}$ and potential energy is $U = -\\frac{GMm}{r}$. Total energy is $E = K + U = -\\frac{GMm}{2r} < 0$. The negative sign is the hallmark of a gravitationally bound state. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A geostationary satellite appears stationary relative to any point on the Earth's equator.",
    reason: "A geostationary satellite revolves in the equatorial plane from West to East with a time period of 24 hours, matching the Earth's diurnal axial rotation.",
    correctOptionIndex: 0,
    explanation: "Because the satellite orbits in the equatorial plane in the same sense (West to East) with the identical angular velocity $\\omega = \\frac{2\\pi}{24\\text{ h}}$ as the Earth's rotation, its position relative to an equatorial observer remains invariant. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The orbital speed of a satellite revolving close to the surface of the Earth is approximately $7.92\\text{ km/s}$.",
    reason: "Near the surface, the orbital speed is given by $v_o = \\sqrt{gR}$, where $g = 9.8\\text{ m/s}^2$ and $R = 6.4 \\times 10^6\\text{ m}$.",
    correctOptionIndex: 0,
    explanation: "Near the Earth's surface ($h \\ll R$), $v_o = \\sqrt{gR} = \\sqrt{9.8 \\times 6.4 \\times 10^6} = \\sqrt{62.72 \\times 10^6} \\approx 7.92 \\times 10^3\\text{ m/s} = 7.92\\text{ km/s}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "For an orbiting satellite, its kinetic energy is equal to the magnitude of its total mechanical energy.",
    reason: "In a circular gravitational orbit, $K = \\frac{GMm}{2r}$ and $E = -\\frac{GMm}{2r}$, so $K = |E|$.",
    correctOptionIndex: 0,
    explanation: "In a circular orbit, $K = \\frac{1}{2}m v_o^2 = \\frac{GMm}{2r}$. Potential energy is $U = -\\frac{GMm}{r} = -2K$. Total energy is $E = K + U = -K = -\\frac{GMm}{2r}$. Therefore $K = |E| = -\\frac{U}{2}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "To transfer a satellite from a lower circular orbit of radius $r_1$ to a higher circular orbit of radius $r_2$, energy must be supplied to the satellite.",
    reason: "The total mechanical energy in a circular orbit is $E = -\\frac{GMm}{2r}$, which increases (becomes less negative) as the orbital radius increases.",
    correctOptionIndex: 0,
    explanation: "Because $E = -\\frac{GMm}{2r}$, a larger radius $r_2 > r_1$ means $E_2 > E_1$. The energy required is $\\Delta E = E_2 - E_1 = \\frac{GMm}{2}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) > 0$. External positive work must be done. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A satellite cannot be placed into a geostationary orbit over the city of Delhi or London.",
    reason: "The orbital plane of every Earth satellite must pass through the centre of the Earth, so a geostationary orbit can only exist in the plane of the Earth's equator.",
    correctOptionIndex: 0,
    explanation: "Because the central gravitational force is directed toward Earth's centre of mass, the orbital plane of any satellite must contain the centre of the Earth. A satellite hovering permanently over a non-zero latitude (like Delhi at $28^\\circ\\text{N}$ or London at $51^\\circ\\text{N}$) would require an orbital plane that does not pass through Earth's centre, which is mechanically impossible without continuous propulsion. Both are true and Reason explains Assertion."
  },
  {
    assertion: "The height of a geostationary satellite above the Earth's surface is approximately $36,000\\text{ km}$.",
    reason: "From Kepler's third law, an orbital period of $T = 24\\text{ hours}$ gives an orbital radius $r = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3} \\approx 4.24 \\times 10^4\\text{ km}$, yielding $h = r - R \\approx 36,000\\text{ km}$.",
    correctOptionIndex: 0,
    explanation: "Solving $r = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3}$ with $T = 86,400\\text{ s}$ gives $r \\approx 42,400\\text{ km}$. Subtracting Earth's radius $R \\approx 6,400\\text{ km}$ gives $h \\approx 36,000\\text{ km}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Polar satellites are useful for environmental monitoring, meteorology, and mapping.",
    reason: "As the satellite orbits north-south from pole to pole, the Earth rotates beneath it from west to east, allowing the satellite to scan the entire surface of Earth strip by strip.",
    correctOptionIndex: 0,
    explanation: "Polar satellites orbit at low altitudes ($500 - 800\\text{ km}$) with periods of $\\sim 100\\text{ minutes}$. Because the orbit is nearly perpendicular to the equator and the Earth rotates eastward beneath it, a polar satellite observes a different longitudinal swath on each successive pass, covering the entire globe in a few days. Both are true and Reason explains Assertion."
  },
  {
    assertion: "The binding energy of a satellite of mass $m$ in a circular orbit of radius $r$ is $\\frac{GMm}{2r}$.",
    reason: "Binding energy is the minimum energy required to remove the satellite from its orbit to infinity, which equals $-E = \\frac{GMm}{2r}$.",
    correctOptionIndex: 0,
    explanation: "Total energy in orbit is $E = -\\frac{GMm}{2r}$. To bring it to rest at infinity ($E_\\infty = 0$), the energy that must be supplied is $\\text{BE} = 0 - E = \\frac{GMm}{2r}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a satellite's speed in a circular orbit is suddenly increased by $41.4\\%$, it escapes into space.",
    reason: "The ratio of escape speed to orbital speed for any orbit is $\\frac{v_e}{v_o} = \\sqrt{2} \\approx 1.414$, so an increase of $(\\sqrt{2} - 1) \\times 100\\% = 41.4\\%$ makes its speed equal to the escape speed.",
    correctOptionIndex: 0,
    explanation: "At distance $r$, orbital speed is $v_o = \\sqrt{GM/r}$ and escape speed is $v_e = \\sqrt{2GM/r} = \\sqrt{2}v_o$. The fraction increase required is $\\frac{v_e - v_o}{v_o} = \\sqrt{2} - 1 \\approx 0.414 = 41.4\\%$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The orbital velocity of a satellite is independent of the mass of the satellite.",
    reason: "The required centripetal force is provided by the gravitational force, and the mass of the satellite cancels out on both sides of the equation.",
    correctOptionIndex: 0,
    explanation: "Equating centripetal force to gravitational force: $\\frac{m v_o^2}{r} = \\frac{GMm}{r^2} \\implies v_o = \\sqrt{\\frac{GM}{r}}$. The satellite mass $m$ cancels out, so all objects in the same orbit move at the identical speed regardless of their mass. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If the radius of orbit of a satellite is doubled, its kinetic energy becomes half.",
    reason: "Kinetic energy of a satellite in a circular orbit is given by $K = \\frac{GMm}{2r}$, which is inversely proportional to $r$.",
    correctOptionIndex: 0,
    explanation: "Since $K = \\frac{GMm}{2r}$, if $r' = 2r$, $K' = \\frac{GMm}{2(2r)} = \\frac{1}{2}K$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Two satellites of masses $m$ and $2m$ revolving in the same circular orbit have the same time period.",
    reason: "The time period of a satellite depends on the mass of the central planet and orbital radius, not on the mass of the satellite.",
    correctOptionIndex: 0,
    explanation: "Time period $T = 2\\pi \\sqrt{\\frac{r^3}{GM}}$ contains only the central body mass $M$ and radius $r$. It is independent of the satellite mass. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A small body detached from a satellite orbiting the Earth continues to orbit the Earth in the same orbit alongside the satellite.",
    reason: "At the moment of detachment, the body possesses the exact same position and orbital velocity as the satellite.",
    correctOptionIndex: 0,
    explanation: "When a piece is gently released from an orbiting spacecraft without any relative thrust, it retains the spacecraft's orbital velocity and position. Under the same gravitational field, it experiences the same centripetal acceleration and continues in the identical orbit. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A satellite orbiting very close to the Earth's surface completes one revolution in about 84.6 minutes.",
    reason: "The time period for a surface orbit is $T = 2\\pi\\sqrt{\\frac{R}{g}}$, where $R = 6400\\text{ km}$ and $g = 9.8\\text{ m/s}^2$.",
    correctOptionIndex: 0,
    explanation: "$T = 2\\pi\\sqrt{\\frac{6.4 \\times 10^6}{9.8}} = 2\\pi \\times 808.1\\text{ s} \\approx 5077\\text{ s} \\approx 84.6\\text{ minutes}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The angular momentum of an orbiting satellite about the centre of the Earth is conserved.",
    reason: "The gravitational force acts radially towards the centre of Earth, exerting zero torque about Earth's centre.",
    correctOptionIndex: 0,
    explanation: "Because the gravitational force is purely central, $\\vec{\\tau} = \\vec{r} \\times \\vec{F}_g = 0$. Since torque is zero, angular momentum $\\vec{L}$ is conserved. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a satellite in a circular orbit encounters atmospheric friction, its orbital radius decreases and its temperature increases.",
    reason: "Friction does negative work, causing orbital decay; the lost gravitational potential energy is converted into kinetic energy and frictional heat.",
    correctOptionIndex: 0,
    explanation: "Atmospheric drag removes mechanical energy ($E$ becomes more negative), so $r$ decreases. By the virial theorem, $\\Delta U = 2\\Delta E < 0$ and $\\Delta K = -\\Delta E > 0$. The kinetic energy increases, and viscous dissipation generates heat, increasing the satellite's temperature. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The time period of a geostationary satellite does not depend on its mass.",
    reason: "Kepler's third law states $T^2 = \\frac{4\\pi^2}{GM}r^3$, which is independent of satellite mass.",
    correctOptionIndex: 0,
    explanation: "The period depends solely on Earth's mass $M$ and orbital radius $r$. Satellite mass $m$ does not affect the period. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A geostationary satellite cannot orbit at an altitude of $10,000\\text{ km}$.",
    reason: "For a satellite to have a period of exactly 24 hours around Earth, Kepler's third law uniquely fixes its orbital radius at $\\approx 42,400\\text{ km}$ ($h \\approx 36,000\\text{ km}$).",
    correctOptionIndex: 0,
    explanation: "Kepler's third law specifies a unique orbital radius for any given orbital period around a body: $r = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3}$. For $T = 24\\text{ h}$, $r \\approx 42,400\\text{ km}$, which corresponds uniquely to $h \\approx 36,000\\text{ km}$. A satellite at $10,000\\text{ km}$ altitude would have a period of only $\\approx 5.8\\text{ hours}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The potential energy of a satellite is always twice its total mechanical energy in a circular orbit.",
    reason: "In a circular orbit, $U = -\\frac{GMm}{r}$ and $E = -\\frac{GMm}{2r}$, so $U = 2E$.",
    correctOptionIndex: 0,
    explanation: "$U = -\\frac{GMm}{r} = 2\\left(-\\frac{GMm}{2r}\\right) = 2E$. Both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "A satellite in a circular orbit of radius $r$ has an acceleration equal to $\\frac{GM}{r^2}$ directed towards the centre.",
    reason: "Centripetal acceleration is $a_c = \\frac{v_o^2}{r}$, and $v_o = \\sqrt{\\frac{GM}{r}}$, giving $a_c = \\frac{GM/r}{r} = \\frac{GM}{r^2}$.",
    correctOptionIndex: 0,
    explanation: "$$a_c = \\frac{v_o^2}{r} = \\frac{GM/r}{r} = \\frac{GM}{r^2}$$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If the kinetic energy of an orbiting satellite is doubled, it will escape from the Earth's gravitational field.",
    reason: "Escape requires kinetic energy $K_e = \\frac{GMm}{r}$, which is exactly twice the orbital kinetic energy $K_o = \\frac{GMm}{2r}$.",
    correctOptionIndex: 0,
    explanation: "In orbit, $K_o = \\frac{GMm}{2r}$ and $E_o = -K_o$. To escape, total energy must be zero: $E = K' + U = K' - 2K_o = 0 \\implies K' = 2K_o$. Doubling the kinetic energy achieves escape velocity ($v' = \\sqrt{2}v_o = v_e$). Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The direction of motion of a geostationary satellite is from East to West.",
    reason: "The Earth rotates about its polar axis from West to East, so a satellite must move from East to West to match the rotation.",
    correctOptionIndex: 3,
    explanation: "To appear stationary relative to Earth, the satellite must move in the SAME direction as Earth's rotation, which is from WEST TO EAST. Moving east-to-west would make it appear to move twice as fast! Hence Assertion is false, Reason is false (or Assertion false, Reason false -> D)."
  },
  {
    assertion: "A satellite moving in a circular orbit has constant speed but continuously changing velocity.",
    reason: "The gravitational force acts perpendicular to the velocity vector, changing its direction without altering its magnitude.",
    correctOptionIndex: 0,
    explanation: "In uniform circular motion, the tangential speed $v_o = |\\vec{v}|$ is constant, but the direction of velocity changes continuously as it traverses the circle. The perpendicular centripetal force does zero work ($dW = \\vec{F}\\cdot d\\vec{r} = 0$), keeping kinetic energy and speed constant. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "An unstabilized cup of coffee floats freely in an orbiting space station without spilling.",
    reason: "Both the cup and the coffee have the same orbital acceleration towards Earth, so the coffee exerts no hydrostatic pressure on the cup.",
    correctOptionIndex: 0,
    explanation: "In free fall, effective gravity $g_{\\text{eff}} = 0$. Hydrostatic pressure $P = \\rho g_{\\text{eff}} h = 0$, so no buoyant force or downward pressure exists. Surface tension shapes the liquid into a spherical blob that floats freely. Both Assertion and Reason are true and Reason explains Assertion."
  }
];

// 7 Multiple-Choice questions
const mcqQuestions = [
  {
    question: "A satellite of mass $m$ is orbiting the Earth at a distance $r$ from the centre of the Earth. If $M$ is the mass of the Earth, the total mechanical energy of the satellite is:",
    options: [
      "$-\\frac{GMm}{2r}$",
      "$\\frac{GMm}{2r}$",
      "$-\\frac{GMm}{r}$",
      "$\\frac{GMm}{r}$"
    ],
    correctOptionIndex: 0,
    explanation: "Kinetic energy: $K = \\frac{1}{2}m v_o^2 = \\frac{1}{2}m \\left(\\frac{GM}{r}\\right) = \\frac{GMm}{2r}$.\nPotential energy: $U = -\\frac{GMm}{r}$.\nTotal mechanical energy: $E = K + U = \\frac{GMm}{2r} - \\frac{GMm}{r} = -\\frac{GMm}{2r}$."
  },
  {
    question: "The orbital velocity of an artificial satellite in a circular orbit just above the Earth's surface is $v_o$. For a satellite orbiting at an altitude of half of Earth's radius, the orbital velocity is:",
    options: [
      "$\\sqrt{\\frac{2}{3}} v_o$",
      "$\\sqrt{\\frac{3}{2}} v_o$",
      "$\\frac{3}{2} v_o$",
      "$\\frac{2}{3} v_o$"
    ],
    correctOptionIndex: 0,
    explanation: "At surface: $r_1 = R \\implies v_o = \\sqrt{\\frac{GM}{R}}$.\nAt altitude $h = R/2$: $r_2 = R + R/2 = \\frac{3}{2}R$.\n$$v_o' = \\sqrt{\\frac{GM}{\\frac{3}{2}R}} = \\sqrt{\\frac{2}{3}}\\sqrt{\\frac{GM}{R}} = \\sqrt{\\frac{2}{3}} v_o$$"
  },
  {
    question: "Two satellites $S_1$ and $S_2$ are revolving around Earth in circular orbits of radii $r_1$ and $r_2$ respectively ($r_1 > r_2$). Which of the following statements is correct?",
    options: [
      "The orbital speed of $S_2$ is greater than that of $S_1$, and its time period is smaller.",
      "The orbital speed of $S_1$ is greater than that of $S_2$, and its time period is smaller.",
      "The orbital speed and time period of $S_1$ are both greater than those of $S_2$.",
      "The orbital speed and time period of $S_2$ are both greater than those of $S_1$."
    ],
    correctOptionIndex: 0,
    explanation: "Orbital speed $v_o = \\sqrt{\\frac{GM}{r}} \\implies v_o \\propto \\frac{1}{\\sqrt{r}}$. Since $r_2 < r_1$, $v_{o2} > v_{o1}$.\nTime period $T = 2\\pi\\sqrt{\\frac{r^3}{GM}} \\implies T \\propto r^{3/2}$. Since $r_2 < r_1$, $T_2 < T_1$.\nThus $S_2$ has a greater orbital speed and a smaller time period."
  },
  {
    question: "A satellite of mass $m$ is revolving in a circular orbit of radius $r$ around a planet of mass $M$. What is the binding energy of the satellite?",
    options: [
      "$\\frac{GMm}{2r}$",
      "$\\frac{GMm}{r}$",
      "$-\\frac{GMm}{2r}$",
      "$\\frac{2GMm}{r}$"
    ],
    correctOptionIndex: 0,
    explanation: "Binding energy is the energy required to remove the satellite to infinity: $\\text{BE} = -E_{\\text{total}} = -\\left(-\\frac{GMm}{2r}\\right) = \\frac{GMm}{2r}$."
  },
  {
    question: "An Earth satellite of mass $m$ revolves in a circular orbit at a height $h$ from the surface of the Earth. The radius of Earth is $R$ and $g$ is acceleration due to gravity on the surface. The velocity of the satellite is:",
    options: [
      "$R\\sqrt{\\frac{g}{R + h}}$",
      "$\\sqrt{\\frac{gR^2}{R + h}}$",
      "$R\\sqrt{\\frac{g}{R}}$",
      "$\\sqrt{g(R + h)}$"
    ],
    correctOptionIndex: 0,
    explanation: "$$v_o = \\sqrt{\\frac{GM}{R+h}}$$\nSince $GM = g R^2$:\n$$v_o = \\sqrt{\\frac{g R^2}{R+h}} = R\\sqrt{\\frac{g}{R+h}}$$"
  },
  {
    question: "A satellite is moved from a circular orbit of radius $R_1$ to a higher circular orbit of radius $R_2$. The change in its potential energy $\\Delta U$ and kinetic energy $\\Delta K$ satisfy:",
    options: [
      "$\\Delta U > 0$ and $\\Delta K < 0$, with $\\Delta U = -2\\Delta K$",
      "$\\Delta U < 0$ and $\\Delta K > 0$, with $\\Delta U = -2\\Delta K$",
      "$\\Delta U > 0$ and $\\Delta K > 0$",
      "$\\Delta U < 0$ and $\\Delta K < 0$"
    ],
    correctOptionIndex: 0,
    explanation: "In a circular orbit, $U = -\\frac{GMm}{r}$ and $K = \\frac{GMm}{2r}$.\nAs $r$ increases from $R_1$ to $R_2$:\n- $U$ becomes less negative, so $\\Delta U > 0$.\n- $K$ decreases, so $\\Delta K < 0$.\nSince $U = -2K$, $\\Delta U = -2\\Delta K$."
  },
  {
    question: "What is the period of revolution of a geostationary satellite?",
    options: [
      "24 hours",
      "12 hours",
      "84.6 minutes",
      "365 days"
    ],
    correctOptionIndex: 0,
    explanation: "By definition, a geostationary satellite has an orbital period equal to the Earth's rotation period about its axis, which is 24 hours (1 sidereal day $\\approx 23\\text{ h } 56\\text{ min}$)."
  }
];

// 20 Numerical questions
const numQuestions = [
  {
    question: "A satellite of mass $m = 1000\\text{ kg}$ is revolving around Earth in a circular orbit of radius $2R$, where $R = 6400\\text{ km}$ and $g = 10\\text{ m/s}^2$. What is the kinetic energy of the satellite in gigajoules ($10^9\\text{ J}$)?",
    correctAnswer: "16",
    explanation: "$$K = \\frac{GMm}{2r} = \\frac{GMm}{2(2R)} = \\frac{mgR}{4} = \\frac{(1000)(10)(6.4 \\times 10^6)}{4} = \\frac{6.4 \\times 10^{10}}{4} = 1.6 \\times 10^{10}\\text{ J} = 16\\text{ GJ}$$"
  },
  {
    question: "The orbital speed of a satellite revolving in a circular orbit near Earth's surface is $8\\text{ km/s}$. What is the orbital speed in km/s of a satellite at an altitude $h = 3R$ above the surface?",
    correctAnswer: "4",
    explanation: "$$v_o' = \\sqrt{\\frac{GM}{R+h}} = \\sqrt{\\frac{GM}{4R}} = \\frac{1}{2}\\sqrt{\\frac{GM}{R}} = \\frac{1}{2}(8) = 4\\text{ km/s}$$"
  },
  {
    question: "A satellite orbits the Earth at a height $h = R$ above the surface. If $g = 10\\text{ m/s}^2$ and $R = 6400\\text{ km}$, calculate its orbital speed in km/s rounded to two decimal places (take $\\sqrt{3.2} \\approx 1.789$).",
    correctAnswer: "5.66",
    explanation: "$$v_o = \\sqrt{\\frac{g R^2}{2R}} = \\sqrt{\\frac{gR}{2}} = \\sqrt{\\frac{10 \\times 6.4 \\times 10^6}{2}} = \\sqrt{3.2 \\times 10^7} = 5656.85\\text{ m/s} \\approx 5.66\\text{ km/s}$$"
  },
  {
    question: "A satellite is launched into a circular orbit of radius $R_1 = 2R$. How much additional energy in gigajoules ($10^9\\text{ J}$) is required to transfer a $500\\text{ kg}$ satellite from radius $2R$ to radius $4R$? Take $g = 10\\text{ m/s}^2$ and $R = 6400\\text{ km}$.",
    correctAnswer: "4",
    explanation: "$$\\Delta E = \\frac{GMm}{2}\\left(\\frac{1}{2R} - \\frac{1}{4R}\\right) = \\frac{mgR}{2}\\left(\\frac{1}{4}\\right) = \\frac{mgR}{8} = \\frac{(500)(10)(6.4 \\times 10^6)}{8} = \\frac{3.2 \\times 10^{10}}{8} = 4.0 \\times 10^9\\text{ J} = 4\\text{ GJ}$$"
  },
  {
    question: "A geostationary satellite has an orbital radius of approximately $4.2 \\times 10^4\\text{ km}$. If Earth's radius is $R = 6400\\text{ km}$, the height of the satellite above the Earth's surface in kilometres is $h = 35600\\text{ km}$. If height is $k \\times 10^3\\text{ km}$, find $k$ rounded to one decimal place.",
    correctAnswer: "35.6",
    explanation: "$$h = r - R = 42000 - 6400 = 35600\\text{ km} = 35.6 \\times 10^3\\text{ km}$$\nThus $k = 35.6$."
  },
  {
    question: "Two satellites A and B of masses $m_A = 100\\text{ kg}$ and $m_B = 400\\text{ kg}$ are in circular orbits of radii $r_A = R_0$ and $r_B = 4R_0$. What is the ratio of their orbital angular momenta $L_A / L_B$ as a decimal fraction?",
    correctAnswer: "0.125",
    explanation: "$$L = m v_o r = m \\sqrt{\\frac{GM}{r}} r = m \\sqrt{GMr}$$\n$$\\frac{L_A}{L_B} = \\left(\\frac{m_A}{m_B}\\right)\\sqrt{\\frac{r_A}{r_B}} = \\left(\\frac{100}{400}\\right)\\sqrt{\\frac{R_0}{4R_0}} = \\left(\\frac{1}{4}\\right)\\left(\\frac{1}{2}\\right) = \\frac{1}{8} = 0.125$$"
  },
  {
    question: "The time period of a satellite in a circular orbit of radius $r$ is $T = 8\\text{ hours}$. What will be its time period in hours if its orbital radius is increased by a factor of 4?",
    correctAnswer: "64",
    explanation: "$$T' = T (4)^{3/2} = 8 \\times 8 = 64\\text{ hours}$$"
  },
  {
    question: "A communication satellite orbits the Earth at an altitude of $h = 5R$ above the surface. If $R = 6400\\text{ km}$, what is the radius of the orbit in kilometres?",
    correctAnswer: "38400",
    explanation: "$$r = R + h = R + 5R = 6R = 6 \\times 6400 = 38400\\text{ km}$$"
  },
  {
    question: "If a satellite revolves in a circular orbit at an altitude equal to Earth's radius ($h = R$), its orbital speed is $v_o$. If $g = 10\\text{ m/s}^2$ and $R = 6.4 \\times 10^6\\text{ m}$, what is $v_o^2$ in units of $10^7\\text{ m}^2/\\text{s}^2$?",
    correctAnswer: "3.2",
    explanation: "$$v_o^2 = \\frac{gR^2}{2R} = \\frac{gR}{2} = \\frac{10 \\times 6.4 \\times 10^6}{2} = 3.2 \\times 10^7\\text{ m}^2/\\text{s}^2$$\nThus the value is $3.2$."
  },
  {
    question: "A satellite of mass $m = 200\\text{ kg}$ is in an orbit where its potential energy is $U = -8.0\\text{ GJ}$. What is its total mechanical energy in gigajoules (GJ)?",
    correctAnswer: "-4",
    explanation: "In a circular orbit, $E = \\frac{U}{2} = \\frac{-8.0}{2} = -4.0\\text{ GJ}$."
  },
  {
    question: "Two satellites are revolving in orbits of radii $r_1$ and $r_2$. If the ratio of their orbital velocities is $v_1 / v_2 = 2$, what is the ratio of their orbital radii $r_2 / r_1$?",
    correctAnswer: "4",
    explanation: "$$\\frac{v_1}{v_2} = \\sqrt{\\frac{r_2}{r_1}} = 2 \\implies \\frac{r_2}{r_1} = 2^2 = 4$$"
  },
  {
    question: "The time period of a low-Earth orbit satellite is approximately $85\\text{ minutes}$. What is the ratio of the time period of a geostationary satellite ($24\\text{ hours} = 1440\\text{ min}$) to that of the low-Earth orbit satellite rounded to the nearest integer?",
    correctAnswer: "17",
    explanation: "$$\\frac{T_{\\text{geo}}}{T_{\\text{LEO}}} = \\frac{1440}{85} \\approx 16.94 \\approx 17$$"
  },
  {
    question: "A satellite of mass $m = 500\\text{ kg}$ has a kinetic energy of $10\\text{ GJ}$ in its circular orbit. What is the binding energy of the satellite in gigajoules (GJ)?",
    correctAnswer: "10",
    explanation: "In a circular orbit, $\\text{BE} = -E = K = 10\\text{ GJ}$."
  },
  {
    question: "By what factor does the orbital velocity of a satellite decrease when its orbital radius is increased by 9 times?",
    correctAnswer: "3",
    explanation: "$$v_o \\propto \\frac{1}{\\sqrt{r}} \\implies \\frac{v_1}{v_2} = \\sqrt{9} = 3$$"
  },
  {
    question: "An astronaut of mass $70\\text{ kg}$ is inside an orbiting space station. What is the apparent weight (in Newtons) of the astronaut recorded on a weighing machine inside the space station?",
    correctAnswer: "0",
    explanation: "Because both the astronaut and the station are in free fall, the normal reaction force is zero: $W_{\\text{apparent}} = 0\\text{ N}$."
  },
  {
    question: "A satellite in a circular orbit of radius $r$ has a speed of $6\\text{ km/s}$. What is the escape speed (in km/s) from that exact location rounded to one decimal place? (Take $\\sqrt{2} \\approx 1.414$)",
    correctAnswer: "8.5",
    explanation: "$$v_e = \\sqrt{2} v_o = 1.414 \\times 6 = 8.484 \\approx 8.5\\text{ km/s}$$"
  },
  {
    question: "If a satellite in orbit has kinetic energy $K$, potential energy $U$, and total mechanical energy $E$, find the numerical value of $\\frac{K + U}{E}$.",
    correctAnswer: "1",
    explanation: "By definition, total mechanical energy is $E = K + U$. Therefore, $\\frac{K + U}{E} = \\frac{E}{E} = 1$."
  },
  {
    question: "A satellite orbits Earth at a distance of $4R$ from the centre. The ratio of its kinetic energy to that of an identical satellite orbiting at distance $R$ from the centre is $1/n$. Find the integer $n$.",
    correctAnswer: "4",
    explanation: "$$K = \\frac{GMm}{2r} \\implies \\frac{K_1}{K_2} = \\frac{R}{4R} = \\frac{1}{4} \\implies n = 4$$"
  },
  {
    question: "A satellite is revolving in a circular orbit of radius $r = 10^7\\text{ m}$ around a planet of mass $M = 6.0 \\times 10^{24}\\text{ kg}$. What is the magnitude of its centripetal acceleration in $\\text{m/s}^2$? Take $G = 6.67 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$.",
    correctAnswer: "4",
    explanation: "$$a_c = \\frac{GM}{r^2} = \\frac{(6.67 \\times 10^{-11})(6.0 \\times 10^{24})}{(10^7)^2} = \\frac{4.002 \\times 10^{14}}{10^{14}} \\approx 4.0\\text{ m/s}^2$$"
  },
  {
    question: "Two satellites of equal mass are revolving in circular orbits of radii $R_1$ and $R_2 = 2 R_1$. The ratio of the magnitude of their potential energies $|U_1| / |U_2|$ is:",
    correctAnswer: "2",
    explanation: "$$|U| = \\frac{GMm}{r} \\implies \\frac{|U_1|}{|U_2|} = \\frac{R_2}{R_1} = \\frac{2R_1}{R_1} = 2$$"
  }
];

function buildPart6() {
  const result = [];

  for (let i = 0; i < arQuestions.length; i++) {
    const q = arQuestions[i];
    result.push({
      type: "ASSERTION_REASON",
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

  for (let i = 0; i < mcqQuestions.length; i++) {
    const q = mcqQuestions[i];
    result.push({
      type: "MCQ",
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

  for (let i = 0; i < numQuestions.length; i++) {
    const q = numQuestions[i];
    result.push({
      type: "NUMERICAL",
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

  const outPath = path.join(__dirname, 'data_jee_grav_part6.js');
  const fileContent = `// Auto-generated Part 6 for Gravitation - Orbital velocity and satellite motion\nmodule.exports = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf-8');
  console.log(`Part 6 generated: ${result.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);
  console.log(`Saved to ${outPath}`);
}

buildPart6();
