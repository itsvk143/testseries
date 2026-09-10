const fs = require('fs');
const path = require('path');

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const subTopic = "Kepler's laws";
const chapter = "Gravitation";
const subject = "Physics";

// 26 Assertion-Reason questions
const arQuestions = [
  {
    assertion: "Kepler's second law (law of areas) is a direct consequence of the conservation of angular momentum.",
    reason: "The gravitational force exerted by the Sun on a planet is a central force, exerting zero torque about the Sun.",
    correctOptionIndex: 0,
    explanation: "Because gravitational force $\\vec{F} = -\\frac{GMm}{r^2}\\hat{r}$ is directed along the position vector $\\vec{r}$, the torque about the Sun is $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$. Since $\\vec{\\tau} = \\frac{d\\vec{L}}{dt} = 0$, the planet's angular momentum $\\vec{L}$ is strictly conserved. The areal velocity is $\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A planet moves fastest in its orbit when it is closest to the Sun (at perihelion) and slowest when it is farthest (at aphelion).",
    reason: "By conservation of angular momentum, $r_p v_p = r_a v_a$, so orbital speed is inversely proportional to distance from the Sun.",
    correctOptionIndex: 0,
    explanation: "At perihelion and aphelion, the velocity vector is perpendicular to the radius vector, giving $L = m r_p v_p = m r_a v_a$. Since $r_p < r_a$, it follows that $v_p > v_a$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The ratio of the square of orbital period to the cube of semi-major axis is the same for all planets orbiting the Sun.",
    reason: "According to Kepler's third law, $T^2 = \\frac{4\\pi^2}{GM_{\\text{sun}}} a^3$, which depends only on the universal gravitational constant and the mass of the central star.",
    correctOptionIndex: 0,
    explanation: "Kepler's third law states $T^2 = \\frac{4\\pi^2}{GM} a^3$. The constant $\\frac{4\\pi^2}{GM_{\\text{sun}}}$ is identical for all planets orbiting the same Sun, assuming planet mass $m \\ll M_{\\text{sun}}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The orbit of every planet around the Sun is an ellipse with the Sun located at one of the two foci.",
    reason: "Inverse square central forces produce conic sections as bound orbits, of which the ellipse is the bound form with total energy $E < 0$.",
    correctOptionIndex: 0,
    explanation: "Kepler's first law states that planetary orbits are ellipses with the Sun at one focus. In Newtonian mechanics, an inverse-square attractive force ($F \\propto 1/r^2$) mathematically yields elliptical paths for negative total mechanical energy ($E < 0$). Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If the distance between the Earth and the Sun is doubled, the length of the year would become $2\\sqrt{2}$ times its present value.",
    reason: "By Kepler's third law, $T \\propto a^{3/2}$, so $(2)^{3/2} = 2\\sqrt{2} \\approx 2.83$.",
    correctOptionIndex: 0,
    explanation: "From $T^2 \\propto a^3$, $T \\propto a^{3/2}$. If $a' = 2a$, then $T' = (2)^{3/2} T = 2\\sqrt{2} T \\approx 2.83\\text{ years}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Areal velocity of a planet in an elliptical orbit remains constant throughout its motion.",
    reason: "The area swept by the radius vector in time $dt$ is $dA = \\frac{1}{2} r^2 d\\theta = \\frac{L}{2m} dt$, which is invariant since angular momentum $L$ is constant.",
    correctOptionIndex: 0,
    explanation: "The elemental area swept by the radius vector is $dA = \\frac{1}{2}|\\vec{r} \\times d\\vec{r}| = \\frac{1}{2} r (r d\\theta) = \\frac{1}{2} r^2 \\omega dt$. Since $L = m r^2 \\omega$, $\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The linear momentum of a planet revolving around the Sun in an elliptical orbit is not conserved.",
    reason: "The planet is subjected to an external gravitational force from the Sun, so net force $\\vec{F} \\ne 0$.",
    correctOptionIndex: 0,
    explanation: "Linear momentum $\\vec{p}$ is conserved only when net external force is zero. Since the Sun exerts a continuous gravitational force on the planet ($\\\\vec{F}_{\\text{ext}} \\ne 0$), the direction and magnitude of velocity change, so linear momentum is not conserved. Angular momentum about the Sun IS conserved. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If the law of gravitation varied as $F \\propto \\frac{1}{r^3}$ instead of $\\frac{1}{r^2}$, Kepler's third law would be $T^2 \\propto r^4$.",
    reason: "For circular motion, centripetal force $\\frac{m v^2}{r} = \\frac{k}{r^3} \\implies v^2 \\propto \\frac{1}{r^2} \\implies T = \\frac{2\\pi r}{v} \\propto r^2$, giving $T^2 \\propto r^4$.",
    correctOptionIndex: 0,
    explanation: "Equating $m \\omega^2 r = \\frac{k}{r^n}$ gives $\\omega^2 = \\frac{k}{m r^{n+1}}$, so $T^2 = \\frac{4\\pi^2}{\\omega^2} \\propto r^{n+1}$. For $n = 3$, $T^2 \\propto r^{3+1} = r^4$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "For a planet in an eccentric orbit, the kinetic energy is not constant.",
    reason: "As the planet moves closer to the Sun, its potential energy decreases, and by conservation of total mechanical energy, its kinetic energy increases.",
    correctOptionIndex: 0,
    explanation: "In an elliptical orbit, distance $r$ varies continuously. Total energy $E = K + U$ is conserved. When $r$ is minimum (perihelion), potential energy $U = -\\frac{GMm}{r}$ is most negative (minimum), so kinetic energy $K$ is maximum. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Comets move in highly eccentric orbits around the Sun.",
    reason: "Comets spend the vast majority of their orbital period at large distances near aphelion and sweep past the Sun very rapidly near perihelion.",
    correctOptionIndex: 1,
    explanation: "Many comets (like Halley's comet) have eccentricities $e > 0.9$, meaning their orbits are elongated ellipses. By Kepler's second law, their areal velocity is constant, so they move very slowly at great distances and speed up dramatically near perihelion. Both statements are true, but Reason describes the consequence of the high eccentricity rather than explaining why their orbits are eccentric. Hence option B."
  },
  {
    assertion: "The semi-major axis $a$ of an elliptical orbit is equal to the arithmetic mean of the perihelion distance and aphelion distance.",
    reason: "Perihelion distance is $r_p = a(1 - e)$ and aphelion distance is $r_a = a(1 + e)$, so $\\frac{r_p + r_a}{2} = a$.",
    correctOptionIndex: 0,
    explanation: "The major axis length is $2a = r_p + r_a$. Dividing by 2 gives $a = \\frac{r_p + r_a}{2}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "In a binary star system where two stars of masses $M_1$ and $M_2$ rotate about their common centre of mass, both stars have the same orbital period.",
    reason: "Both stars always remain diametrically opposite to each other with respect to the centre of mass to keep the centre of mass at rest.",
    correctOptionIndex: 0,
    explanation: "In a binary system, the position vectors from the center of mass satisfy $M_1 \\vec{r}_1 + M_2 \\vec{r}_2 = 0$, so the stars are always collinear with the CM. Therefore, they rotate with the identical angular frequency $\\omega$ and have the exact same period $T = \\frac{2\\pi}{\\omega}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Kepler's laws apply not only to planets orbiting the Sun but also to satellites orbiting Earth.",
    reason: "The gravitational force between the Earth and a satellite is an inverse-square central force, identical in mathematical form to the Sun-planet interaction.",
    correctOptionIndex: 0,
    explanation: "Any two-body gravitational system governed by $F = \\frac{GMm}{r^2}$ obeys Kepler's laws. Artificial satellites and the Moon orbiting Earth obey the laws of ellipses, equal areas, and periods ($T^2 = \\frac{4\\pi^2}{GM_E}a^3$). Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a satellite in a circular orbit has its orbital radius reduced by atmospheric drag, its orbital speed actually increases.",
    reason: "For a circular orbit, orbital speed $v = \\sqrt{\\frac{GM}{r}}$, so a decrease in $r$ results in an increase in $v$.",
    correctOptionIndex: 0,
    explanation: "This is known as the satellite paradox: as atmospheric drag removes mechanical energy, the orbit decays to a smaller radius ($r$ decreases). Because $v = \\sqrt{GM/r}$, the loss in potential energy ($\Delta U = -2\\Delta K$) is twice the gain in kinetic energy, resulting in a higher speed. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The total mechanical energy of a planet of mass $m$ in an elliptical orbit of semi-major axis $a$ around the Sun is $E = -\\frac{GMm}{2a}$.",
    reason: "The semi-major axis $a$ of an ellipse plays the identical energetic role as the radius $r$ of a circular orbit.",
    correctOptionIndex: 0,
    explanation: "For an elliptical orbit, the total mechanical energy is $E = -\\frac{GMm}{2a}$, depending only on the semi-major axis $a$ and not on eccentricity $e$. For a circular orbit where $a = r$, this reduces to $E = -\\frac{GMm}{2r}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A planet takes less time to traverse the half of its elliptical orbit containing perihelion than the half containing aphelion.",
    reason: "By Kepler's second law, equal areas are swept in equal times, and the perihelion side has shorter radius vectors requiring faster traversal.",
    correctOptionIndex: 0,
    explanation: "The half containing perihelion has the planet moving at a higher average speed with smaller distances $r$. To sweep the same area in any segment, the planet must cover a larger arc length per unit time, resulting in shorter total time for the perihelion half. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The eccentricity of a circular orbit is zero.",
    reason: "A circle is a special case of an ellipse where the two foci coincide at the centre.",
    correctOptionIndex: 0,
    explanation: "For an ellipse, $b = a\\sqrt{1 - e^2}$. In a circle, $a = b = r$, which requires $\\sqrt{1 - e^2} = 1 \\implies e = 0$. The two foci merge into a single central point. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If the mass of the Sun suddenly became four times its present value, the orbital period of the Earth would be halved, assuming the orbital radius remained unchanged.",
    reason: "From Kepler's third law, $T = 2\\pi \\sqrt{\\frac{r^3}{GM}}$, so $T \\propto \\frac{1}{\\sqrt{M}}$.",
    correctOptionIndex: 0,
    explanation: "Since $T = 2\\pi \\sqrt{\\frac{r^3}{GM}}$, if $M' = 4M$, $T' = \\frac{T}{\\sqrt{4}} = \\frac{T}{2}$. The period is halved. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Kepler's laws can determine the absolute masses of the orbiting planets without external data.",
    reason: "Kepler's third law formula $T^2 = \\frac{4\\pi^2}{GM}a^3$ contains only the mass of the central body $M$, making planet mass $m$ cancel out.",
    correctOptionIndex: 3,
    explanation: "Kepler's third law $T^2 = \\frac{4\\pi^2}{GM}a^3$ depends only on the central mass $M_{\\text{sun}}$, not on the planet's mass $m$. Therefore, one CANNOT determine a planet's mass from its orbital period around the Sun. (A planet's mass can only be determined if it has its own moon/satellite). Assertion is false, Reason is true."
  },
  {
    assertion: "The velocity of a planet at perihelion $v_p$ and aphelion $v_a$ satisfy $\\frac{v_p}{v_a} = \\frac{1 + e}{1 - e}$.",
    reason: "Conservation of angular momentum requires $v_p r_p = v_a r_a$, and $r_p = a(1 - e)$ while $r_a = a(1 + e)$.",
    correctOptionIndex: 0,
    explanation: "$\\frac{v_p}{v_a} = \\frac{r_a}{r_p} = \\frac{a(1 + e)}{a(1 - e)} = \\frac{1 + e}{1 - e}$. Both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "A satellite in a higher circular orbit has a longer time period and a smaller orbital speed than one in a lower orbit.",
    reason: "Orbital speed is $v = \\sqrt{\\frac{GM}{r}}$ and time period is $T = 2\\pi \\sqrt{\\frac{r^3}{GM}}$.",
    correctOptionIndex: 0,
    explanation: "As orbital radius $r$ increases, orbital speed $v \\propto 1/\\sqrt{r}$ decreases, and period $T \\propto r^{3/2}$ increases. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Geostationary satellites must revolve in the equatorial plane of the Earth.",
    reason: "A geostationary satellite must remain vertically above the same point on Earth's surface, requiring its orbital plane to coincide with Earth's equatorial plane and its period to be 24 hours.",
    correctOptionIndex: 0,
    explanation: "Because the gravitational force points toward Earth's centre, the orbital plane of any satellite must pass through the centre of the Earth. To stay stationary over a fixed latitude, the satellite must revolve in the equatorial plane (latitude $0^\\circ$) with period equal to Earth's rotation (24 hours). Both are true and Reason explains Assertion."
  },
  {
    assertion: "The ratio of maximum to minimum angular velocity of a planet in an elliptical orbit is $\\left(\\frac{1+e}{1-e}\\right)^2$.",
    reason: "Angular momentum is $L = m r^2 \\omega = \\text{constant}$, so $\\omega \\propto \\frac{1}{r^2}$.",
    correctOptionIndex: 0,
    explanation: "Since $\\omega = \\frac{L}{m r^2}$, $\\frac{\\omega_{\\max}}{\\omega_{\\min}} = \\left(\\frac{r_a}{r_p}\\right)^2 = \\left(\\frac{a(1+e)}{a(1-e)}\\right)^2 = \\left(\\frac{1+e}{1-e}\\right)^2$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Kepler's second law implies that the transverse acceleration of a planet is zero.",
    reason: "In polar coordinates, transverse acceleration is $a_\\theta = \\frac{1}{r}\\frac{d}{dt}(r^2 \\omega)$, which is zero since $r^2 \\omega = \\frac{L}{m} = \\text{constant}$.",
    correctOptionIndex: 0,
    explanation: "The transverse force is $F_\\theta = m a_\\theta = \\frac{m}{r}\\frac{d}{dt}(r^2 \\omega) = \\frac{1}{r}\\frac{dL}{dt} = 0$. Hence transverse acceleration is identically zero, and the force is purely radial (central). Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a satellite's speed is increased at perigee by a small amount, its apogee distance increases.",
    reason: "Increasing kinetic energy at perigee increases the semi-major axis $a$ of the orbit, since $E = -\\frac{GMm}{2a}$.",
    correctOptionIndex: 0,
    explanation: "When speed is increased at perigee, total energy $E$ becomes less negative (increases). Since $E = -\\frac{GMm}{2a}$, $a$ increases. Because $2a = r_p + r_a$ and $r_p$ is unchanged at that instant, $r_a$ must increase. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The period of revolution of a planet does not depend on the mass of the planet, provided its mass is negligible compared to the star.",
    reason: "The gravitational force provides the centripetal acceleration, and the mass of the planet cancels out from the equation of motion.",
    correctOptionIndex: 0,
    explanation: "From $G\\frac{Mm}{r^2} = m \\omega^2 r$, the planet's mass $m$ cancels on both sides, yielding $\\omega^2 = \\frac{GM}{r^3}$, which depends only on the central mass $M$. Both Assertion and Reason are true and Reason explains Assertion."
  }
];

// 7 Multiple-Choice questions
const mcqQuestions = [
  {
    question: "A planet revolves around the Sun in an elliptical orbit of semi-major axis $a$ and eccentricity $e$. The ratio of the maximum velocity to the minimum velocity of the planet in its orbit is:",
    options: [
      "$\\frac{1 + e}{1 - e}$",
      "$\\frac{1 - e}{1 + e}$",
      "$\\sqrt{\\frac{1 + e}{1 - e}}$",
      "$\\left(\\frac{1 + e}{1 - e}\\right)^2$"
    ],
    correctOptionIndex: 0,
    explanation: "By conservation of angular momentum at perihelion and aphelion:\n$$L = m v_p r_p = m v_a r_a \\implies \\frac{v_p}{v_a} = \\frac{r_a}{r_p}$$\nHere $r_p = a(1 - e)$ and $r_a = a(1 + e)$.\n$$\\frac{v_{\\max}}{v_{\\min}} = \\frac{v_p}{v_a} = \\frac{a(1 + e)}{a(1 - e)} = \\frac{1 + e}{1 - e}$$"
  },
  {
    question: "The time period of a satellite of Earth is 5 hours. If the separation between the Earth and the satellite is increased to 4 times the previous value, the new time period will become:",
    options: [
      "40 hours",
      "20 hours",
      "80 hours",
      "10 hours"
    ],
    correctOptionIndex: 0,
    explanation: "According to Kepler's third law, $T^2 \\propto r^3 \\implies T \\propto r^{3/2}$.\n$$\\frac{T_2}{T_1} = \\left(\\frac{r_2}{r_1}\\right)^{3/2} = (4)^{3/2} = (2^2)^{3/2} = 2^3 = 8$$\n$$T_2 = 8 \\times T_1 = 8 \\times 5 = 40\\text{ hours}$$"
  },
  {
    question: "A planet revolves in an elliptical orbit around the Sun. If $T, V, E$, and $L$ stand for its time period, kinetic energy, potential energy, and angular momentum respectively, then which of the following quantities remains constant throughout the orbit?",
    options: [
      "$L$ only",
      "$V$ and $E$",
      "$T$ and $V$",
      "$V$ only"
    ],
    correctOptionIndex: 0,
    explanation: "Because gravitational force is a central force, the torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$, so angular momentum $L$ is strictly conserved. In an eccentric orbit, distance $r$ changes continuously, so kinetic energy $V$ (or $K$) and potential energy $U$ vary continuously."
  },
  {
    question: "Two planets A and B have their orbital radii in the ratio $r_A : r_B = 1 : 9$. What is the ratio of their orbital speeds $v_A : v_B$ in circular orbits around the Sun?",
    options: [
      "3 : 1",
      "1 : 3",
      "9 : 1",
      "27 : 1"
    ],
    correctOptionIndex: 0,
    explanation: "Orbital speed in circular orbit is $v = \\sqrt{\\frac{GM}{r}} \\implies v \\propto \\frac{1}{\\sqrt{r}}$.\n$$\\frac{v_A}{v_B} = \\sqrt{\\frac{r_B}{r_A}} = \\sqrt{\\frac{9}{1}} = \\frac{3}{1} = 3 : 1$$"
  },
  {
    question: "If a satellite revolves in an elliptical orbit of semi-major axis $a$ around a planet of mass $M$, what is its total mechanical energy?",
    options: [
      "$-\\frac{GMm}{2a}$",
      "$-\\frac{GMm}{a}$",
      "$-\\frac{2GMm}{a}$",
      "$-\\frac{GMm}{4a}$"
    ],
    correctOptionIndex: 0,
    explanation: "For any bound elliptical Keplerian orbit of semi-major axis $a$, the total mechanical energy is given by $E = -\\frac{GMm}{2a}$."
  },
  {
    question: "If the Earth is at distance $r_1$ from the Sun at perihelion with velocity $v_1$, what is its velocity $v_2$ at aphelion where its distance is $r_2$?",
    options: [
      "$\\frac{v_1 r_1}{r_2}$",
      "$\\frac{v_1 r_2}{r_1}$",
      "$\\frac{v_1 r_1^2}{r_2^2}$",
      "$v_1 \\sqrt{\\frac{r_1}{r_2}}$"
    ],
    correctOptionIndex: 0,
    explanation: "At perihelion and aphelion, the velocity is perpendicular to the position vector. By conservation of angular momentum:\n$$m v_1 r_1 = m v_2 r_2 \\implies v_2 = \\frac{v_1 r_1}{r_2}$$"
  },
  {
    question: "The distance of Neptune and Saturn from the Sun are nearly $10^{13}\\text{ m}$ and $10^{12}\\text{ m}$ respectively. Assuming circular orbits, what is the ratio of their periods $\\frac{T_{\\text{Neptune}}}{T_{\\text{Saturn}}}$?",
    options: [
      "$10\\sqrt{10}$",
      "100",
      "10",
      "$100\\sqrt{10}$"
    ],
    correctOptionIndex: 0,
    explanation: "By Kepler's third law:\n$$\\frac{T_N}{T_S} = \\left(\\frac{r_N}{r_S}\\right)^{3/2} = \\left(\\frac{10^{13}}{10^{12}}\\right)^{3/2} = (10)^{3/2} = 10\\sqrt{10} \\approx 31.62$$"
  }
];

// 20 Numerical questions
const numQuestions = [
  {
    question: "A planet moves in an elliptical orbit around the Sun. If the ratio of its maximum distance to minimum distance from the Sun is 3, what is the eccentricity $e$ of the orbit as a decimal?",
    correctAnswer: "0.5",
    explanation: "$$\\frac{r_{\\max}}{r_{\\min}} = \\frac{a(1 + e)}{a(1 - e)} = \\frac{1 + e}{1 - e} = 3 \\implies 1 + e = 3 - 3e \\implies 4e = 2 \\implies e = 0.5$$"
  },
  {
    question: "The period of revolution of planet A around the Sun is 8 times that of planet B. If the orbital radius of planet B is $1\\text{ AU}$, what is the orbital radius of planet A in AU?",
    correctAnswer: "4",
    explanation: "$$\\left(\\frac{T_A}{T_B}\\right)^2 = \\left(\\frac{r_A}{r_B}\\right)^3 \\implies 8^2 = \\left(\\frac{r_A}{1}\\right)^3 \\implies 64 = r_A^3 \\implies r_A = 4\\text{ AU}$$"
  },
  {
    question: "In an elliptical orbit, the maximum and minimum distances of a comet from the Sun are $1.6 \\times 10^{12}\\text{ m}$ and $0.4 \\times 10^{12}\\text{ m}$ respectively. What is the semi-major axis $a$ in units of $10^{12}\\text{ m}$?",
    correctAnswer: "1",
    explanation: "$$a = \\frac{r_{\\max} + r_{\\min}}{2} = \\frac{1.6 + 0.4}{2} = 1.0 \\times 10^{12}\\text{ m}$$"
  },
  {
    question: "A planet revolves around the Sun in an elliptical orbit with perihelion distance $r_p = 1\\text{ AU}$ and aphelion distance $r_a = 9\\text{ AU}$. If the speed at aphelion is $6\\text{ km/s}$, what is the speed at perihelion in km/s?",
    correctAnswer: "54",
    explanation: "By conservation of angular momentum:\n$$v_p r_p = v_a r_a \\implies v_p (1) = (6)(9) \\implies v_p = 54\\text{ km/s}$$"
  },
  {
    question: "A satellite orbits the Earth in a circular orbit of radius $R_0$ with time period $T_0 = 8\\text{ hours}$. If it is shifted to a new circular orbit of radius $4 R_0$, what is the new time period in hours?",
    correctAnswer: "64",
    explanation: "$$T \\propto r^{3/2} \\implies T' = T_0 (4)^{3/2} = 8 \\times 8 = 64\\text{ hours}$$"
  },
  {
    question: "If the Earth-Sun distance were to become one-fourth of its present value, the number of days in a year would be:",
    correctAnswer: "45.6",
    explanation: "$$\\frac{T'}{T} = \\left(\\frac{1}{4}\\right)^{3/2} = \\frac{1}{8} \\implies T' = \\frac{365}{8} = 45.625 \\approx 45.6\\text{ days}$$"
  },
  {
    question: "A planet has an orbital period of 27 years. What is the semi-major axis of its orbit in Astronomical Units (AU)?",
    correctAnswer: "9",
    explanation: "$$T^2 = a^3 \\implies 27^2 = a^3 \\implies (3^3)^2 = 3^6 = a^3 \\implies a = 3^2 = 9\\text{ AU}$$"
  },
  {
    question: "The ratio of perihelion distance to aphelion distance for an asteroid is $1/3$. What is the ratio of its kinetic energy at perihelion to that at aphelion?",
    correctAnswer: "9",
    explanation: "$$\\frac{v_p}{v_a} = \\frac{r_a}{r_p} = 3 \\implies \\frac{K_p}{K_a} = \\left(\\frac{v_p}{v_a}\\right)^2 = 3^2 = 9$$"
  },
  {
    question: "A planet moves in an elliptical orbit around the Sun. If the areal velocity of the planet is $2.0 \\times 10^{15}\\text{ m}^2/\\text{s}$ and the mass of the planet is $6.0 \\times 10^{24}\\text{ kg}$, calculate the angular momentum of the planet about the Sun in units of $10^{40}\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. (e.g. if $2.4 \\times 10^{40}$, enter 2.4)",
    correctAnswer: "2.4",
    explanation: "$$\\frac{dA}{dt} = \\frac{L}{2m} \\implies L = 2m \\frac{dA}{dt} = 2(6.0 \\times 10^{24})(2.0 \\times 10^{15}) = 2.4 \\times 10^{40}\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$"
  },
  {
    question: "Two satellites revolve around a planet in circular orbits of radii $R$ and $9R$. What is the ratio of their orbital frequencies $f_1 / f_2$?",
    correctAnswer: "27",
    explanation: "$$f = \\frac{1}{T} \\propto r^{-3/2} \\implies \\frac{f_1}{f_2} = \\left(\\frac{9R}{R}\\right)^{3/2} = 9^{3/2} = 27$$"
  },
  {
    question: "If a planet revolves around the Sun in an elliptical orbit of eccentricity $e = 0.6$, what is the ratio of its maximum angular speed to its minimum angular speed $\\omega_{\\max} / \\omega_{\\min}$?",
    correctAnswer: "16",
    explanation: "$$\\frac{\\omega_{\\max}}{\\omega_{\\min}} = \\left(\\frac{r_a}{r_p}\\right)^2 = \\left(\\frac{1 + e}{1 - e}\\right)^2 = \\left(\\frac{1 + 0.6}{1 - 0.6}\\right)^2 = \\left(\\frac{1.6}{0.4}\\right)^2 = 4^2 = 16$$"
  },
  {
    question: "The semi-major axis of Earth's orbit is $1\\text{ AU}$ and its period is $1\\text{ year}$. A dwarf planet has a semi-major axis of $4\\text{ AU}$. How many Earth years does it take to complete one revolution?",
    correctAnswer: "8",
    explanation: "$$T^2 = a^3 \\implies T = a^{3/2} = 4^{3/2} = 8\\text{ years}$$"
  },
  {
    question: "If the force of gravity varied as $F \\propto r^{-5/2}$, then the period of circular orbit would vary as $r^n$. Find the value of $n$ as a decimal.",
    correctAnswer: "1.75",
    explanation: "$$m \\omega^2 r \\propto r^{-5/2} \\implies \\omega^2 \\propto r^{-7/2} \\implies T^2 \\propto r^{7/2} \\implies T \\propto r^{7/4} = r^{1.75}$$\nThus $n = 1.75$."
  },
  {
    question: "A binary star system consists of two identical stars, each of mass $M = 2 \\times 10^{30}\\text{ kg}$, separated by distance $D = 2\\text{ AU}$ ($3.0 \\times 10^{11}\\text{ m}$). Both revolve in circular orbits around their common centre of mass. What is the radius of the orbit of each star in AU?",
    correctAnswer: "1",
    explanation: "Because the two masses are identical, the centre of mass lies at the exact midpoint. Thus the orbital radius of each star is $r = D/2 = 2/2 = 1\\text{ AU}$."
  },
  {
    question: "A planet orbits the Sun in an elliptical orbit. If the speed at perihelion is $40\\text{ km/s}$ and at aphelion is $10\\text{ km/s}$, find the eccentricity $e$ of the orbit.",
    correctAnswer: "0.6",
    explanation: "$$\\frac{v_p}{v_a} = \\frac{1 + e}{1 - e} \\implies \\frac{40}{10} = 4 = \\frac{1 + e}{1 - e} \\implies 4 - 4e = 1 + e \\implies 5e = 3 \\implies e = 0.6$$"
  },
  {
    question: "The period of a satellite in a circular orbit of radius $r$ is $T$. If the radius of the orbit is increased by $2\\%$, the percentage increase in its time period is approximately $x\\%$. Find the value of $x$.",
    correctAnswer: "3",
    explanation: "$$T \\propto r^{3/2} \\implies \\frac{\\Delta T}{T} = \\frac{3}{2}\\frac{\\Delta r}{r} = \\frac{3}{2}(2\\%) = 3\\%$$"
  },
  {
    question: "An artificial satellite is moving in a circular orbit around the Earth with speed equal to half the escape speed from Earth's surface. What is the height of the satellite above Earth's surface in terms of Earth's radius $R$? (i.e. if $h = R$, enter 1)",
    correctAnswer: "1",
    explanation: "Escape speed is $v_e = \\sqrt{\\frac{2GM}{R}}$.\nOrbital speed is $v_o = \\sqrt{\\frac{GM}{R+h}}$.\nGiven $v_o = \\frac{1}{2}v_e = \\frac{1}{2}\\sqrt{\\frac{2GM}{R}} = \\sqrt{\\frac{GM}{2R}}$.\n$$\\frac{GM}{R+h} = \\frac{GM}{2R} \\implies R+h = 2R \\implies h = R$$"
  },
  {
    question: "If a planet sweeps out an area of $5.0 \\times 10^{14}\\text{ km}^2$ in 20 days, how much area in units of $10^{14}\\text{ km}^2$ will it sweep out in 60 days?",
    correctAnswer: "15",
    explanation: "By Kepler's second law, areal velocity is constant: $\\frac{dA}{dt} = \\text{constant}$.\n$$\\text{Area} = \\left(\\frac{5.0}{20}\\right) \\times 60 = 5.0 \\times 3 = 15.0 \\times 10^{14}\\text{ km}^2$$"
  },
  {
    question: "Two planets revolve around a star. The semi-major axes are in the ratio $1 : 4$. If the time taken by the first planet to complete one revolution is 200 days, what is the time taken by the second planet in days?",
    correctAnswer: "1600",
    explanation: "$$\\frac{T_2}{T_1} = \\left(\\frac{a_2}{a_1}\\right)^{3/2} = (4)^{3/2} = 8$$\n$$T_2 = 8 \\times 200 = 1600\\text{ days}$$"
  },
  {
    question: "A planet revolving around the Sun has perihelion distance $r_1$ and aphelion distance $r_2$. If the maximum orbital speed is $v_1$, what is the speed $v_2$ at aphelion if $r_1 = 2 \\times 10^{11}\\text{ m}, r_2 = 6 \\times 10^{11}\\text{ m}$, and $v_1 = 30\\text{ km/s}$ in km/s?",
    correctAnswer: "10",
    explanation: "$$v_2 = v_1 \\frac{r_1}{r_2} = 30 \\times \\frac{2 \\times 10^{11}}{6 \\times 10^{11}} = 30 \\times \\frac{1}{3} = 10\\text{ km/s}$$"
  }
];

function buildPart3() {
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

  const outPath = path.join(__dirname, 'data_jee_grav_part3.js');
  const fileContent = `// Auto-generated Part 3 for Gravitation - Kepler's laws\nmodule.exports = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf-8');
  console.log(`Part 3 generated: ${result.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);
  console.log(`Saved to ${outPath}`);
}

buildPart3();
