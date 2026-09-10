import json

questions = []

def add_q(subtopic, question, options, correct_idx, explanation, difficulty="Medium"):
    questions.append({
        "question": question,
        "options": options,
        "correctAnswer": correct_idx,
        "explanation": explanation,
        "difficulty": difficulty,
        "subtopic": subtopic
    })

# ==============================================================================
# SUBTOPIC 5: Acceleration due to gravity (variation with height, depth, latitude) (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The acceleration due to gravity $g$ on the surface of a uniform spherical planet of mass $M$, radius $R$, and mean density $\rho$ is given by:",
    [
        r"$g = \frac{GM}{R^2} = \frac{4}{3}\pi G \rho R$",
        r"$g = \frac{GM}{R} = \frac{4}{3}\pi G \rho R^2$",
        r"$g = \frac{GM^2}{R^2} = \frac{2}{3}\pi G \rho R$",
        r"$g = \frac{GM}{R^3} = \frac{4}{3}\pi G \rho$"
    ],
    0,
    r"From Newton's law of gravitation, $g = \frac{GM}{R^2}$. Substituting $M = \frac{4}{3}\pi R^3 \rho$ gives $g = \frac{G \cdot \frac{4}{3}\pi R^3 \rho}{R^2} = \frac{4}{3}\pi G \rho R$.",
    "Easy"
)

# Q2
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"At a height $h$ above the Earth's surface ($h \ll R$), the acceleration due to gravity $g_h$ in terms of surface gravity $g$ is approximately:",
    [
        r"$g\left(1 - \frac{2h}{R}\right)$",
        r"$g\left(1 - \frac{h}{R}\right)$",
        r"$g\left(1 + \frac{2h}{R}\right)$",
        r"$g\left(1 - \frac{h}{2R}\right)$"
    ],
    0,
    r"$g_h = g\left(1 + \frac{h}{R}\right)^{-2}$. Using binomial approximation for $h \ll R$: $g_h \approx g\left(1 - \frac{2h}{R}\right)$.",
    "Easy"
)

# Q3
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The exact value of acceleration due to gravity at a height $h$ above the Earth's surface of radius $R$ is:",
    [
        r"$g \left(\frac{R}{R+h}\right)^2$",
        r"$g \left(\frac{R+h}{R}\right)^2$",
        r"$g \left(\frac{R}{R+h}\right)$",
        r"$g \left(1 - \frac{h^2}{R^2}\right)$"
    ],
    0,
    r"At height $h$, the distance from the center is $r = R + h$. Thus $g_h = \frac{GM}{(R+h)^2} = \frac{GM}{R^2}\frac{R^2}{(R+h)^2} = g\left(\frac{R}{R+h}\right)^2$.",
    "Easy"
)

# Q4
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"At what height $h$ above the surface of the Earth will the acceleration due to gravity reduce to $\frac{g}{4}$ (where $R$ is Earth's radius)?",
    [
        r"$R$",
        r"$2R$",
        r"$\frac{R}{2}$",
        r"$\sqrt{2}R$"
    ],
    0,
    r"$g_h = g\left(\frac{R}{R+h}\right)^2 = \frac{g}{4} \implies \frac{R}{R+h} = \frac{1}{2} \implies R+h = 2R \implies h = R$.",
    "Easy"
)

# Q5
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"At what height $h$ above the Earth's surface does the acceleration due to gravity become $\frac{g}{9}$?",
    [
        r"$2R$",
        r"$3R$",
        r"$4R$",
        r"$\frac{R}{3}$"
    ],
    0,
    r"$g_h = g\left(\frac{R}{R+h}\right)^2 = \frac{g}{9} \implies \frac{R}{R+h} = \frac{1}{3} \implies R+h = 3R \implies h = 2R$.",
    "Easy"
)

# Q6
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The height above the Earth's surface at which the acceleration due to gravity decreases by $36\%$ from its surface value is (take $R = 6400\text{ km}$):",
    [
        r"$1600\text{ km}$",
        r"$3200\text{ km}$",
        r"$800\text{ km}$",
        r"$2400\text{ km}$"
    ],
    0,
    r"If $g_h$ decreases by $36\%$, then $g_h = 0.64 g$. Thus $\left(\frac{R}{R+h}\right)^2 = 0.64 \implies \frac{R}{R+h} = 0.8 = \frac{4}{5} \implies 4(R+h) = 5R \implies h = \frac{R}{4} = \frac{6400}{4} = 1600\text{ km}$.",
    "Medium"
)

# Q7
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"At what height $h \ll R$ above the Earth's surface does the acceleration due to gravity decrease by $1\%$ (take $R = 6400\text{ km}$)?",
    [
        r"$32\text{ km}$",
        r"$64\text{ km}$",
        r"$16\text{ km}$",
        r"$128\text{ km}$"
    ],
    0,
    r"Fractional decrease is $\frac{\Delta g}{g} = \frac{2h}{R} = 0.01 \implies h = \frac{0.01 R}{2} = \frac{6400}{200} = 32\text{ km}$.",
    "Easy"
)

# Q8
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The acceleration due to gravity at a depth $d$ below the Earth's surface (assuming uniform density) is given by:",
    [
        r"$g_d = g\left(1 - \frac{d}{R}\right)$",
        r"$g_d = g\left(1 - \frac{2d}{R}\right)$",
        r"$g_d = g\left(1 - \frac{d^2}{R^2}\right)$",
        r"$g_d = g\left(\frac{R}{R-d}\right)$"
    ],
    0,
    r"At distance $r = R - d$ from the center, the enclosed mass is $M' = M\left(\frac{r}{R}\right)^3$. Hence $g_d = \frac{GM'}{r^2} = \frac{GM r}{R^3} = g\frac{r}{R} = g\left(1 - \frac{d}{R}\right)$.",
    "Easy"
)

# Q9
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"At the center of the Earth, the acceleration due to gravity is:",
    [
        r"$0$",
        r"$9.8\text{ m/s}^2$",
        r"$\infty$",
        r"$4.9\text{ m/s}^2$"
    ],
    0,
    r"At the center of the Earth, $d = R$, so $g_{\text{center}} = g\left(1 - \frac{R}{R}\right) = 0$. By spherical symmetry, gravitational forces from all directions cancel.",
    "Easy"
)

# Q10
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"At what depth $d$ below the Earth's surface does the acceleration due to gravity become half of its value at the surface?",
    [
        r"$\frac{R}{2}$",
        r"$\frac{R}{4}$",
        r"$\frac{3R}{4}$",
        r"$\frac{R}{\sqrt{2}}$"
    ],
    0,
    r"$g_d = g\left(1 - \frac{d}{R}\right) = \frac{g}{2} \implies 1 - \frac{d}{R} = \frac{1}{2} \implies d = \frac{R}{2}$.",
    "Easy"
)

# Q11
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The depth $d$ below the surface of the Earth at which the acceleration due to gravity decreases by $1\%$ is (take $R = 6400\text{ km}$):",
    [
        r"$64\text{ km}$",
        r"$32\text{ km}$",
        r"$128\text{ km}$",
        r"$16\text{ km}$"
    ],
    0,
    r"Fractional change with depth: $\frac{\Delta g}{g} = \frac{d}{R} = 0.01 \implies d = 0.01 R = 0.01 \times 6400\text{ km} = 64\text{ km}$.",
    "Easy"
)

# Q12
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"For a small height $h$ ($h \ll R$), the decrease in $g$ at height $h$ is equal to the decrease in $g$ at depth $d$ when:",
    [
        r"$d = 2h$",
        r"$d = h$",
        r"$d = \frac{h}{2}$",
        r"$d = 4h$"
    ],
    0,
    r"At small height $h$: $\Delta g_h = g\frac{2h}{R}$. At depth $d$: $\Delta g_d = g\frac{d}{R}$. Equating the two: $g\frac{2h}{R} = g\frac{d}{R} \implies d = 2h$.",
    "Medium"
)

# Q13
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"Which of the following correctly describes the variation of acceleration due to gravity $g(r)$ with distance $r$ from the center of Earth ($R$ is Earth's radius)?",
    [
        r"$g(r) \propto r$ for $r \le R$ and $g(r) \propto \frac{1}{r^2}$ for $r \ge R$",
        r"$g(r) \propto \frac{1}{r}$ for $r \le R$ and $g(r) \propto \frac{1}{r^2}$ for $r \ge R$",
        r"$g(r) \propto \frac{1}{r^2}$ for all $r$",
        r"$g(r) = \text{constant}$ for $r \le R$ and $g(r) \propto \frac{1}{r}$ for $r \ge R$"
    ],
    0,
    r"Inside a uniform solid sphere, $g(r) = \frac{GM}{R^3}r \propto r$ (linear). Outside, $g(r) = \frac{GM}{r^2} \propto \frac{1}{r^2}$ (inverse square).",
    "Easy"
)

# Q14
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The acceleration due to gravity is maximum at:",
    [
        r"The surface of the Earth",
        r"The center of the Earth",
        r"An infinite distance from Earth",
        r"A height $h = R$ above the Earth"
    ],
    0,
    r"Inside the Earth, $g \propto r$ (increases with $r$). Outside, $g \propto 1/r^2$ (decreases with $r$). Hence $g$ attains its maximum value at the surface $r = R$.",
    "Easy"
)

# Q15
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The apparent acceleration due to gravity $g'$ at latitude $\lambda$ taking Earth's rotation (angular velocity $\omega$) into account is:",
    [
        r"$g' = g - \omega^2 R \cos^2\lambda$",
        r"$g' = g - \omega^2 R \sin^2\lambda$",
        r"$g' = g + \omega^2 R \cos^2\lambda$",
        r"$g' = g - \omega R \cos\lambda$"
    ],
    0,
    r"The centrifugal acceleration at latitude $\lambda$ is directed perpendicular to the rotation axis with magnitude $\omega^2 (R\cos\lambda)$. Its radially outward component is $\omega^2 R \cos^2\lambda$. Therefore, the effective gravity is $g' = g - \omega^2 R \cos^2\lambda$.",
    "Medium"
)

# Q16
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"Due to the rotation of the Earth about its polar axis, the acceleration due to gravity is minimum at:",
    [
        r"The equator",
        r"The poles",
        r"Latitude $45^\circ$",
        r"Latitude $60^\circ$"
    ],
    0,
    r"At the equator, $\lambda = 0^\circ \implies \cos\lambda = 1$, so $g_e = g - \omega^2 R$, which is the minimum value of effective gravity.",
    "Easy"
)

# Q17
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"Due to the rotation of the Earth, the acceleration due to gravity is unaffected at:",
    [
        r"The poles",
        r"The equator",
        r"Latitude $45^\circ$",
        r"The Tropic of Cancer"
    ],
    0,
    r"At the poles, $\lambda = 90^\circ \implies \cos 90^\circ = 0$, so $g_{\text{pole}} = g - \omega^2 R (0) = g$. The centrifugal force at the poles is zero.",
    "Easy"
)

# Q18
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The difference in acceleration due to gravity between the poles and the equator due solely to Earth's rotation is:",
    [
        r"$\omega^2 R$",
        r"$2\omega^2 R$",
        r"$\frac{1}{2}\omega^2 R$",
        r"$\omega R$"
    ],
    0,
    r"$g_p - g_e = g - (g - \omega^2 R) = \omega^2 R$.",
    "Easy"
)

# Q19
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The angular speed $\omega$ of the Earth's rotation so that bodies on the equator feel completely weightless ($g_e = 0$) is:",
    [
        r"$\sqrt{\frac{g}{R}}$",
        r"$\sqrt{\frac{2g}{R}}$",
        r"$\sqrt{\frac{g}{2R}}$",
        r"$\frac{g}{R}$"
    ],
    0,
    r"Setting $g' = g - \omega^2 R = 0 \implies \omega^2 R = g \implies \omega = \sqrt{\frac{g}{R}}$.",
    "Easy"
)

# Q20
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"If the Earth were to rotate with an angular speed such that a body at the equator became weightless, the duration of a day would be approximately:",
    [
        r"$84.6\text{ minutes}$",
        r"$24\text{ hours}$",
        r"$12\text{ hours}$",
        r"$42.3\text{ minutes}$"
    ],
    0,
    r"$T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{R}{g}} = 2\pi\sqrt{\frac{6.4 \times 10^6}{9.8}} \approx 5078\text{ s} \approx 84.6\text{ minutes} \approx 1.41\text{ hours}$.",
    "Medium"
)

# Q21
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"By what factor must the Earth's current angular velocity of rotation increase so that bodies at the equator become weightless?",
    [
        r"$17\text{ times}$",
        r"$24\text{ times}$",
        r"$10\text{ times}$",
        r"$84\text{ times}$"
    ],
    0,
    r"Present angular speed: $\omega_0 = \frac{2\pi}{86400} \approx 7.27 \times 10^{-5}\text{ rad/s}$. Required angular speed: $\omega = \sqrt{\frac{9.8}{6.4 \times 10^6}} \approx 1.24 \times 10^{-3}\text{ rad/s}$.\nRatio $\frac{\omega}{\omega_0} = \frac{1.24 \times 10^{-3}}{7.27 \times 10^{-5}} \approx 17\text{ times}$.",
    "Medium"
)

# Q22
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"At what latitude $\lambda$ is the reduction in acceleration due to gravity due to rotation equal to half of that at the equator?",
    [
        r"$45^\circ$",
        r"$30^\circ$",
        r"$60^\circ$",
        r"$0^\circ$"
    ],
    0,
    r"Reduction at equator is $\Delta g_e = \omega^2 R$. Reduction at latitude $\lambda$ is $\Delta g = \omega^2 R \cos^2\lambda$. We want $\omega^2 R \cos^2\lambda = \frac{1}{2}\omega^2 R \implies \cos^2\lambda = \frac{1}{2} \implies \cos\lambda = \frac{1}{\sqrt{2}} \implies \lambda = 45^\circ$.",
    "Medium"
)

# Q23
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"If the Earth suddenly stops rotating about its axis, the value of $g$ at the equator will:",
    [
        r"Increase by $\omega^2 R$",
        r"Decrease by $\omega^2 R$",
        r"Remain unchanged",
        r"Increase by $2\omega^2 R$"
    ],
    0,
    r"Currently $g_e = g - \omega^2 R$. If rotation stops ($\omega = 0$), $g_e' = g$. The change is $\Delta g_e = g_e' - g_e = \omega^2 R > 0$ (increases by $\omega^2 R \approx 0.034\text{ m/s}^2$).",
    "Easy"
)

# Q24
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"If the Earth suddenly stops rotating about its axis, the value of $g$ at the North Pole will:",
    [
        r"Remain unchanged",
        r"Increase by $\omega^2 R$",
        r"Decrease by $\omega^2 R$",
        r"Become zero"
    ],
    0,
    r"At the poles, the centrifugal force due to rotation is zero ($\cos 90^\circ = 0$). Therefore, stopping rotation has no effect on the value of $g$ at the poles.",
    "Easy"
)

# Q25
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A body is weighed using a spring balance at the equator and at the poles. The spring balance reads:",
    [
        r"More at the poles than at the equator",
        r"More at the equator than at the poles",
        r"The same value at both locations",
        r"Zero at the equator"
    ],
    0,
    r"The spring balance measures the apparent weight $W = mg'$. Since $g_{\text{pole}} > g_{\text{equator}}$ (due to both rotation and the equatorial bulge), the reading is greater at the poles.",
    "Easy"
)

# Q26
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A body is weighed with a physical beam balance having equal arms at the equator and at the poles. The balance will indicate:",
    [
        r"The same reading at both places",
        r"Greater mass at the poles",
        r"Greater mass at the equator",
        r"Zero mass at the equator"
    ],
    0,
    r"A beam balance compares the gravitational forces on two masses: $m_1 g' = m_2 g' \implies m_1 = m_2$. Since $g'$ cancels out on both pans, the beam balance measures true inertial/gravitational mass and gives the same reading everywhere.",
    "Easy"
)

# Q27
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A pendulum clock is taken to the top of a high mountain. As a result, the clock will:",
    [
        r"Lose time (run slow)",
        r"Gain time (run fast)",
        r"Keep correct time",
        r"Stop oscillating completely"
    ],
    0,
    r"The time period of a simple pendulum is $T = 2\pi\sqrt{\frac{L}{g}}$. On a mountain, $g$ decreases, so $T$ increases. A longer period means fewer oscillations per day, so the clock loses time (runs slow).",
    "Easy"
)

# Q28
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A pendulum clock keeping correct time at the surface of the Earth is taken to a deep mine. The clock will:",
    [
        r"Lose time (run slow)",
        r"Gain time (run fast)",
        r"Run at the exact same rate",
        r"Run with twice its normal frequency"
    ],
    0,
    r"In a deep mine, $g_d = g(1 - d/R) < g$. The time period $T = 2\pi\sqrt{L/g_d}$ increases. Thus the clock ticks more slowly and loses time.",
    "Easy"
)

# Q29
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A spherical cavity of radius $a$ is scooped out from a uniform solid sphere of radius $R$ and mass $M$. The gravitational field inside the cavity is:",
    [
        r"Uniform and non-zero",
        r"Zero everywhere inside the cavity",
        r"Inversely proportional to the distance from cavity center",
        r"Linearly dependent on distance from sphere center"
    ],
    0,
    r"By superposition, $\vec{E}_{\text{cavity}} = \vec{E}_{\text{full}} - \vec{E}_{\text{removed}} = -\frac{4}{3}\pi G\rho \vec{r} - \left(-\frac{4}{3}\pi G\rho (\vec{r} - \vec{d})\right) = -\frac{4}{3}\pi G\rho \vec{d} = \text{constant}$. The gravitational field inside any spherical cavity in a uniform sphere is completely uniform.",
    "Hard"
)

# Q30
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A planet has twice the density of Earth and half the radius of Earth. The acceleration due to gravity on the surface of this planet is:",
    [
        r"$g$",
        r"$2g$",
        r"$\frac{g}{2}$",
        r"$4g$"
    ],
    0,
    r"Since $g = \frac{4}{3}\pi G \rho R \implies g \propto \rho R$. For the planet: $g' = g \left(\frac{\rho'}{\rho}\right)\left(\frac{R'}{R}\right) = g (2)\left(\frac{1}{2}\right) = g$.",
    "Easy"
)

# Q31
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A planet has mass equal to twice that of Earth and radius three times that of Earth. If surface gravity on Earth is $g$, surface gravity on this planet is:",
    [
        r"$\frac{2}{9}g$",
        r"$\frac{2}{3}g$",
        r"$\frac{4}{9}g$",
        r"$\frac{9}{2}g$"
    ],
    0,
    r"$g_p = \frac{GM_p}{R_p^2} = \frac{G(2M)}{(3R)^2} = \frac{2}{9}\frac{GM}{R^2} = \frac{2}{9}g$.",
    "Easy"
)

# Q32
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"If the radius of the Earth contracts by $2\%$ while its mass remains constant, the percentage change in the acceleration due to gravity on its surface is:",
    [
        r"Increases by approximately $4\%$",
        r"Decreases by approximately $4\%$",
        r"Increases by approximately $2\%$",
        r"Decreases by approximately $2\%$"
    ],
    0,
    r"$g = \frac{GM}{R^2} \propto R^{-2}$. For small changes: $\frac{\Delta g}{g} \approx -2\frac{\Delta R}{R} = -2(-2\%) = +4\%$. Gravity increases by about $4\%$.",
    "Medium"
)

# Q33
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"If the mass of the Earth increases by $3\%$ while its radius remains unchanged, the percentage increase in $g$ on the surface is:",
    [
        r"$3\%$",
        r"$1.5\%$",
        r"$6\%$",
        r"$9\%$"
    ],
    0,
    r"$g = \frac{GM}{R^2} \propto M$. For constant radius, $\frac{\Delta g}{g} = \frac{\Delta M}{M} = 3\%$.",
    "Easy"
)

# Q34
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The acceleration due to gravity at a height $h = \frac{R}{2}$ above Earth's surface is:",
    [
        r"$\frac{4}{9}g$",
        r"$\frac{2}{3}g$",
        r"$\frac{1}{4}g$",
        r"$\frac{9}{4}g$"
    ],
    0,
    r"$g_h = g\left(\frac{R}{R + R/2}\right)^2 = g\left(\frac{R}{1.5R}\right)^2 = g\left(\frac{2}{3}\right)^2 = \frac{4}{9}g$.",
    "Easy"
)

# Q35
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The acceleration due to gravity at a height $h = 3R$ above the surface of the Earth is:",
    [
        r"$\frac{g}{16}$",
        r"$\frac{g}{9}$",
        r"$\frac{g}{4}$",
        r"$\frac{g}{8}$"
    ],
    0,
    r"Distance from center is $r = R + 3R = 4R$. Thus $g_h = g\left(\frac{R}{4R}\right)^2 = \frac{g}{16}$.",
    "Easy"
)

# Q36
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A person of mass $m$ stands on a weighing machine in an elevator. If the elevator accelerates downwards with acceleration $a = g$, the scale reads:",
    [
        r"$0$",
        r"$mg$",
        r"$2mg$",
        r"$\frac{1}{2}mg$"
    ],
    0,
    r"Apparent weight in a downward accelerating frame is $N = m(g - a)$. When $a = g$, $N = m(g - g) = 0$ (state of weightlessness in free fall).",
    "Easy"
)

# Q37
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A person of mass $m$ stands in an elevator that accelerates upwards with acceleration $a = g/2$. The apparent weight of the person is:",
    [
        r"$\frac{3}{2}mg$",
        r"$\frac{1}{2}mg$",
        r"$mg$",
        r"$2mg$"
    ],
    0,
    r"In an upward accelerating elevator: $N = m(g + a) = m\left(g + \frac{g}{2}\right) = \frac{3}{2}mg$.",
    "Easy"
)

# Q38
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The acceleration due to gravity on the Moon is approximately $\frac{1}{6}$th of that on Earth. If a person can jump to a height of $1.5\text{ m}$ on Earth, to what height can they jump on the Moon (with the same takeoff velocity)?",
    [
        r"$9.0\text{ m}$",
        r"$4.5\text{ m}$",
        r"$6.0\text{ m}$",
        r"$3.0\text{ m}$"
    ],
    0,
    r"$h = \frac{v^2}{2g} \implies h \propto \frac{1}{g}$. For the Moon, $h_M = h_E \times \frac{g_E}{g_M} = 1.5 \times 6 = 9.0\text{ m}$.",
    "Easy"
)

# Q39
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"A narrow vertical shaft is drilled into the Earth to a depth equal to half the radius of the Earth ($d = R/2$). The value of acceleration due to gravity at the bottom of the shaft is:",
    [
        r"$\frac{g}{2}$",
        r"$\frac{g}{4}$",
        r"$\frac{3g}{4}$",
        r"$\frac{g}{\sqrt{2}}$"
    ],
    0,
    r"$g_d = g\left(1 - \frac{d}{R}\right) = g\left(1 - \frac{R/2}{R}\right) = g\left(1 - \frac{1}{2}\right) = \frac{g}{2}$.",
    "Easy"
)

# Q40
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The ratio of the weights of a body at a depth $d = \frac{R}{3}$ below the surface to that at a height $h = \frac{R}{3}$ above the surface is:",
    [
        r"$\frac{32}{27}$",
        r"$\frac{27}{32}$",
        r"$\frac{16}{9}$",
        r"$\frac{4}{3}$"
    ],
    0,
    r"At depth $d = R/3$: $g_d = g(1 - 1/3) = \frac{2}{3}g$.\nAt height $h = R/3$: $g_h = g\left(\frac{R}{R + R/3}\right)^2 = g\left(\frac{3}{4}\right)^2 = \frac{9}{16}g$.\nRatio: $\frac{g_d}{g_h} = \frac{2/3}{9/16} = \frac{32}{27}$.",
    "Medium"
)

# Q41
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The fractional decrease in the acceleration due to gravity at a latitude of $\lambda = 60^\circ$ due to Earth's rotation is:",
    [
        r"$\frac{1}{4}\frac{\omega^2 R}{g}$",
        r"$\frac{3}{4}\frac{\omega^2 R}{g}$",
        r"$\frac{1}{2}\frac{\omega^2 R}{g}$",
        r"$\frac{\omega^2 R}{g}$"
    ],
    0,
    r"$\Delta g = \omega^2 R \cos^2(60^\circ) = \omega^2 R \left(\frac{1}{2}\right)^2 = \frac{1}{4}\omega^2 R$. Fractional decrease is $\frac{\Delta g}{g} = \frac{1}{4}\frac{\omega^2 R}{g}$.",
    "Medium"
)

# Q42
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"Assuming the Earth is a non-rotating sphere, what is the weight of an object of mass $m$ at a distance $r = \frac{R}{4}$ from the Earth's center?",
    [
        r"$\frac{1}{4}mg$",
        r"$\frac{1}{16}mg$",
        r"$\frac{1}{2}mg$",
        r"$0$"
    ],
    0,
    r"Inside Earth, $g(r) = g\frac{r}{R}$. At $r = R/4$, $g(r) = \frac{1}{4}g$. Thus weight is $W = mg(r) = \frac{1}{4}mg$.",
    "Easy"
)

# Q43
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"If the density of a planet varies with distance $r$ from its center as $\rho(r) = \rho_0 \left(1 - \frac{r}{R}\right)$, the total mass $M$ of the planet of radius $R$ is:",
    [
        r"$\frac{1}{3}\pi \rho_0 R^3$",
        r"$\frac{4}{3}\pi \rho_0 R^3$",
        r"$\frac{2}{3}\pi \rho_0 R^3$",
        r"$\pi \rho_0 R^3$"
    ],
    0,
    r"$M = \int_0^R 4\pi r^2 \rho_0 \left(1 - \frac{r}{R}\right) dr = 4\pi \rho_0 \left[\frac{R^3}{3} - \frac{R^3}{4}\right] = 4\pi \rho_0 \frac{R^3}{12} = \frac{1}{3}\pi \rho_0 R^3$.",
    "Hard"
)

# Q44
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"For the planet with density profile $\rho(r) = \rho_0 \left(1 - \frac{r}{R}\right)$ and total mass $M = \frac{1}{3}\pi \rho_0 R^3$, the acceleration due to gravity at the surface $r = R$ is:",
    [
        r"$\frac{1}{3}\pi G \rho_0 R$",
        r"$\frac{4}{3}\pi G \rho_0 R$",
        r"$\frac{2}{3}\pi G \rho_0 R$",
        r"$\pi G \rho_0 R$"
    ],
    0,
    r"$g = \frac{GM}{R^2} = \frac{G \cdot \frac{1}{3}\pi \rho_0 R^3}{R^2} = \frac{1}{3}\pi G \rho_0 R$.",
    "Hard"
)

# Q45
add_q(
    "Acceleration due to gravity (variation with height, depth, latitude)",
    r"The time period of a simple pendulum of length $L$ at the center of the Earth is:",
    [
        r"Infinite (it will not oscillate)",
        r"$2\pi\sqrt{\frac{L}{g}}$",
        r"$0$",
        r"$2\pi\sqrt{\frac{R}{g}}$"
    ],
    0,
    r"At the center of the Earth, $g_{\text{center}} = 0$. The time period $T = 2\pi\sqrt{\frac{L}{g}} \to \infty$. The pendulum experiences no restoring torque and does not oscillate.",
    "Easy"
)

print(f"Total questions after Subtopic 5: {len(questions)}")

# ==============================================================================
# SUBTOPIC 6: Orbital velocity and satellite motion (45 Questions)
# ==============================================================================

# Q1
add_q(
    "Orbital velocity and satellite motion",
    r"The orbital velocity $v_o$ of an artificial satellite orbiting very close to the surface of the Earth (radius $R$, surface gravity $g$) is approximately:",
    [
        r"$v_o = \sqrt{gR} \approx 7.92\text{ km/s}$",
        r"$v_o = \sqrt{2gR} \approx 11.2\text{ km/s}$",
        r"$v_o = \frac{\sqrt{gR}}{2} \approx 3.96\text{ km/s}$",
        r"$v_o = \sqrt{\frac{gR}{2}} \approx 5.6\text{ km/s}$"
    ],
    0,
    r"For a circular orbit near Earth's surface, centripetal force is provided by gravity: $\frac{mv_o^2}{R} = mg \implies v_o = \sqrt{gR} = \sqrt{9.8 \times 6.4 \times 10^6} \approx 7.92\text{ km/s}$.",
    "Easy"
)

# Q2
add_q(
    "Orbital velocity and satellite motion",
    r"The orbital velocity of a satellite revolving in a circular orbit of radius $r$ around a planet of mass $M$ is:",
    [
        r"$\sqrt{\frac{GM}{r}}$",
        r"$\sqrt{\frac{2GM}{r}}$",
        r"$\frac{GM}{r^2}$",
        r"$\sqrt{\frac{GM}{2r}}$"
    ],
    0,
    r"Centripetal force equals gravitational force: $\frac{m v_o^2}{r} = \frac{GMm}{r^2} \implies v_o = \sqrt{\frac{GM}{r}}$.",
    "Easy"
)

# Q3
add_q(
    "Orbital velocity and satellite motion",
    r"The orbital velocity of a satellite orbiting around Earth does NOT depend on:",
    [
        r"The mass of the satellite",
        r"The mass of the Earth",
        r"The radius of the orbit",
        r"The universal gravitational constant $G$"
    ],
    0,
    r"$v_o = \sqrt{\frac{GM}{r}}$. It depends on the mass of the Earth $M$ and orbital radius $r$, but is completely independent of the mass $m$ of the satellite.",
    "Easy"
)

# Q4
add_q(
    "Orbital velocity and satellite motion",
    r"The time period $T$ of a satellite revolving in a circular orbit of radius $r$ around Earth is proportional to:",
    [
        r"$r^{3/2}$",
        r"$r^2$",
        r"$r^{1/2}$",
        r"$r^3$"
    ],
    0,
    r"By Kepler's Third Law, $T = \frac{2\pi r}{v_o} = \frac{2\pi r^{3/2}}{\sqrt{GM}} \implies T^2 \propto r^3 \implies T \propto r^{3/2}$.",
    "Easy"
)

# Q5
add_q(
    "Orbital velocity and satellite motion",
    r"The time period of a satellite orbiting close to the surface of the Earth is approximately:",
    [
        r"$84.6\text{ minutes}$",
        r"$24\text{ hours}$",
        r"$12\text{ hours}$",
        r"$48\text{ minutes}$"
    ],
    0,
    r"$T = 2\pi\sqrt{\frac{R}{g}} = 2\pi\sqrt{\frac{6.4 \times 10^6}{9.8}} \approx 5078\text{ s} \approx 84.6\text{ minutes}$.",
    "Easy"
)

# Q6
add_q(
    "Orbital velocity and satellite motion",
    r"In terms of the mean density $\rho$ of a spherical planet, the time period of a satellite in an orbit close to its surface is:",
    [
        r"$\sqrt{\frac{3\pi}{G\rho}}$",
        r"$\sqrt{\frac{4\pi}{3G\rho}}$",
        r"$\frac{3\pi}{G\rho}$",
        r"$\sqrt{\frac{G\rho}{3\pi}}$"
    ],
    0,
    r"$T = 2\pi\sqrt{\frac{R^3}{GM}} = 2\pi\sqrt{\frac{R^3}{G \cdot \frac{4}{3}\pi R^3 \rho}} = 2\pi\sqrt{\frac{3}{4\pi G \rho}} = \sqrt{\frac{3\pi}{G\rho}}$, which is independent of the planet's radius.",
    "Medium"
)

# Q7
add_q(
    "Orbital velocity and satellite motion",
    r"The kinetic energy $K$ of a satellite of mass $m$ in a circular orbit of radius $r$ around Earth of mass $M$ is:",
    [
        r"$\frac{GMm}{2r}$",
        r"$\frac{GMm}{r}$",
        r"$\frac{2GMm}{r}$",
        r"$\frac{GMm}{4r}$"
    ],
    0,
    r"$K = \frac{1}{2}m v_o^2 = \frac{1}{2}m\left(\frac{GM}{r}\right) = \frac{GMm}{2r}$.",
    "Easy"
)

# Q8
add_q(
    "Orbital velocity and satellite motion",
    r"The potential energy $U$ of a satellite of mass $m$ in a circular orbit of radius $r$ is:",
    [
        r"$-\frac{GMm}{r}$",
        r"$-\frac{GMm}{2r}$",
        r"$\frac{GMm}{r}$",
        r"$-2\frac{GMm}{r}$"
    ],
    0,
    r"Gravitational potential energy of mass $m$ at distance $r$ from mass $M$ is $U = -\frac{GMm}{r}$.",
    "Easy"
)

# Q9
add_q(
    "Orbital velocity and satellite motion",
    r"The total mechanical energy $E$ of a satellite of mass $m$ in a circular orbit of radius $r$ is:",
    [
        r"$-\frac{GMm}{2r}$",
        r"$+\frac{GMm}{2r}$",
        r"$-\frac{GMm}{r}$",
        r"$0$"
    ],
    0,
    r"$E = K + U = \frac{GMm}{2r} + \left(-\frac{GMm}{r}\right) = -\frac{GMm}{2r}$. The negative sign signifies that the satellite is in a bound orbit.",
    "Easy"
)

# Q10
add_q(
    "Orbital velocity and satellite motion",
    r"For a satellite in a circular orbit, the relationship between kinetic energy $K$, potential energy $U$, and total energy $E$ is:",
    [
        r"$E = -K = \frac{1}{2}U$",
        r"$E = K = -U$",
        r"$E = -2K = U$",
        r"$E = K + U = 0$"
    ],
    0,
    r"Here $K = \frac{GMm}{2r}$, $U = -\frac{GMm}{r}$, and $E = -\frac{GMm}{2r}$. Clearly $E = -K$ and $E = \frac{1}{2}U$ (which also implies $U = -2K$).",
    "Easy"
)

# Q11
add_q(
    "Orbital velocity and satellite motion",
    r"The binding energy of a satellite of mass $m$ revolving in a circular orbit of radius $r$ around Earth is:",
    [
        r"$\frac{GMm}{2r}$",
        r"$\frac{GMm}{r}$",
        r"$-\frac{GMm}{2r}$",
        r"$\frac{2GMm}{r}$"
    ],
    0,
    r"Binding energy is the minimum energy required to liberate the satellite to infinity ($E_\infty = 0$): $E_b = 0 - E = 0 - \left(-\frac{GMm}{2r}\right) = \frac{GMm}{2r}$.",
    "Easy"
)

# Q12
add_q(
    "Orbital velocity and satellite motion",
    r"The time period of a geostationary satellite (synchronous with Earth's rotation) is:",
    [
        r"$24\text{ hours}$",
        r"$12\text{ hours}$",
        r"$84.6\text{ minutes}$",
        r"$365\text{ days}$"
    ],
    0,
    r"A geostationary satellite rotates synchronously with Earth's diurnal rotation, so its period is exactly equal to one sidereal day ($24\text{ hours}$).",
    "Easy"
)

# Q13
add_q(
    "Orbital velocity and satellite motion",
    r"The approximate height of a geostationary satellite above the Earth's surface is:",
    [
        r"$36,000\text{ km}$",
        r"$6,400\text{ km}$",
        r"$12,800\text{ km}$",
        r"$800\text{ km}$"
    ],
    0,
    r"Orbital radius is $r = \left(\frac{GMT^2}{4\pi^2}\right)^{1/3} \approx 4.22 \times 10^7\text{ m} \approx 42,200\text{ km}$. Height $h = r - R \approx 42,200 - 6,400 \approx 35,800\text{ km} \approx 36,000\text{ km}$ (about $6.6R$).",
    "Easy"
)

# Q14
add_q(
    "Orbital velocity and satellite motion",
    r"The orbital plane of a geostationary satellite must always coincide with:",
    [
        r"The equatorial plane of the Earth",
        r"The polar plane of the Earth",
        r"Any plane inclined at $45^\circ$ to the equator",
        r"The ecliptic plane of the Earth's orbit around the Sun"
    ],
    0,
    r"To appear stationary relative to a point on Earth's surface, the satellite must orbit in the equatorial plane from West to East with a period of 24 hours.",
    "Easy"
)

# Q15
add_q(
    "Orbital velocity and satellite motion",
    r"The sense of rotation of a geostationary satellite around the Earth is:",
    [
        r"West to East",
        r"East to West",
        r"North to South",
        r"South to North"
    ],
    0,
    r"The Earth rotates about its axis from West to East. Thus, a geostationary satellite must also revolve from West to East to remain fixed above the same geographical longitude.",
    "Easy"
)

# Q16
add_q(
    "Orbital velocity and satellite motion",
    r"A polar satellite orbits the Earth in a:",
    [
        r"North-South orbit passing over or near the poles at relatively low altitude",
        r"West-East orbit lying strictly in the equatorial plane",
        r"Circular orbit at an altitude of $36,000\text{ km}$",
        r"Stationary orbit relative to the Greenwich meridian"
    ],
    0,
    r"Polar satellites orbit in planes inclined nearly $90^\circ$ to the equator (North-South direction) at low altitudes ($\sim 500\text{ to }800\text{ km}$) with periods of $\sim 100\text{ minutes}$.",
    "Easy"
)

# Q17
add_q(
    "Orbital velocity and satellite motion",
    r"Which of the following is a primary application of polar satellites?",
    [
        r"Remote sensing, weather monitoring, and environmental mapping",
        r"Continuous telecommunication coverage for fixed ground dishes",
        r"Broadcasting direct-to-home television without tracking antennas",
        r"Interplanetary deep-space navigation beacons"
    ],
    0,
    r"Because the Earth rotates beneath the polar orbit, a polar satellite scans the entire surface of the Earth over a period, making it ideal for remote sensing, meteorology, and mapping.",
    "Easy"
)

# Q18
add_q(
    "Orbital velocity and satellite motion",
    r"Two satellites of masses $m_1$ and $m_2$ ($m_1 = 3m_2$) revolve around the Earth in circular orbits of the same radius $r$. The ratio of their orbital speeds $v_1 / v_2$ is:",
    [
        r"$1 : 1$",
        r"$3 : 1$",
        r"$1 : 3$",
        r"$\sqrt{3} : 1$"
    ],
    0,
    r"Orbital speed $v_o = \sqrt{\frac{GM}{r}}$ depends only on Earth's mass $M$ and radius $r$, not on the satellite's mass. Thus $v_1 = v_2 \implies v_1 / v_2 = 1 : 1$.",
    "Easy"
)

# Q19
add_q(
    "Orbital velocity and satellite motion",
    r"Two satellites $A$ and $B$ are in circular orbits of radii $r$ and $4r$ around Earth. The ratio of their orbital velocities $v_A / v_B$ is:",
    [
        r"$2 : 1$",
        r"$1 : 2$",
        r"$4 : 1$",
        r"$1 : 4$"
    ],
    0,
    r"$v_o \propto \frac{1}{\sqrt{r}} \implies \frac{v_A}{v_B} = \sqrt{\frac{r_B}{r_A}} = \sqrt{\frac{4r}{r}} = 2 : 1$.",
    "Easy"
)

# Q20
add_q(
    "Orbital velocity and satellite motion",
    r"Two satellites $A$ and $B$ move in circular orbits of radii $4R$ and $R$ respectively. The ratio of their orbital periods $T_A / T_B$ is:",
    [
        r"$8 : 1$",
        r"$4 : 1$",
        r"$2 : 1$",
        r"$16 : 1$"
    ],
    0,
    r"By Kepler's Third Law, $\frac{T_A}{T_B} = \left(\frac{r_A}{r_B}\right)^{3/2} = \left(\frac{4R}{R}\right)^{3/2} = 4^{3/2} = 8 : 1$.",
    "Easy"
)

# Q21
add_q(
    "Orbital velocity and satellite motion",
    r"If a satellite is shifted to an orbit of larger radius, which of the following quantities will INCREASE?",
    [
        r"Gravitational potential energy and time period",
        r"Orbital speed and kinetic energy",
        r"Kinetic energy and gravitational potential energy",
        r"Orbital speed and time period"
    ],
    0,
    r"As $r$ increases: $v_o = \sqrt{GM/r}$ decreases, $K = GMm/(2r)$ decreases, $U = -GMm/r$ becomes less negative (increases), $E = -GMm/(2r)$ increases, and $T \propto r^{3/2}$ increases.",
    "Medium"
)

# Q22
add_q(
    "Orbital velocity and satellite motion",
    r"A satellite experiences slight atmospheric drag (resistance) in low Earth orbit. As a consequence of this friction, over time:",
    [
        r"Its orbital radius decreases and its orbital speed increases",
        r"Its orbital radius increases and its orbital speed decreases",
        r"Its orbital speed decreases and its mechanical energy increases",
        r"Both its orbital radius and orbital speed decrease"
    ],
    0,
    r"Friction dissipates total mechanical energy ($E$ becomes more negative), which forces the satellite into an orbit of smaller radius $r$. Because $v_o = \sqrt{GM/r}$, a smaller $r$ results in a higher orbital speed. Half the potential energy lost goes into increasing kinetic energy.",
    "Hard"
)

# Q23
add_q(
    "Orbital velocity and satellite motion",
    r"The angular momentum $L$ of a satellite of mass $m$ revolving in a circular orbit of radius $r$ around Earth of mass $M$ is proportional to:",
    [
        r"$\sqrt{r}$",
        r"$r$",
        r"$r^{3/2}$",
        r"$\frac{1}{\sqrt{r}}$"
    ],
    0,
    r"$L = m v_o r = m \sqrt{\frac{GM}{r}} r = m\sqrt{GM r} \implies L \propto \sqrt{r}$.",
    "Medium"
)

# Q24
add_q(
    "Orbital velocity and satellite motion",
    r"The work required to transfer a satellite of mass $m$ from a circular orbit of radius $R_1$ to another circular orbit of radius $R_2$ ($R_2 > R_1$) is:",
    [
        r"$\frac{GMm}{2}\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$",
        r"$GMm\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$",
        r"$\frac{GMm}{2}\left(\frac{1}{R_2} - \frac{1}{R_1}\right)$",
        r"$\frac{GMm}{4}\left(\frac{1}{R_1^2} - \frac{1}{R_2^2}\right)$"
    ],
    0,
    r"$W = E_2 - E_1 = \left(-\frac{GMm}{2R_2}\right) - \left(-\frac{GMm}{2R_1}\right) = \frac{GMm}{2}\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$.",
    "Medium"
)

# Q25
add_q(
    "Orbital velocity and satellite motion",
    r"The extra energy required to boost a satellite of mass $m$ from a circular orbit of radius $2R$ to a circular orbit of radius $3R$ is:",
    [
        r"$\frac{GMm}{12R}$",
        r"$\frac{GMm}{6R}$",
        r"$\frac{GMm}{3R}$",
        r"$\frac{GMm}{4R}$"
    ],
    0,
    r"$\\Delta E = \\frac{GMm}{2}\\left(\\frac{1}{2R} - \\frac{1}{3R}\\right) = \\frac{GMm}{2}\\left(\\frac{1}{6R}\\right) = \\frac{GMm}{12R}$.",
    "Medium"
)

# Q26
add_q(
    "Orbital velocity and satellite motion",
    r"An astronaut inside an artificial satellite orbiting the Earth experiences weightlessness because:",
    [
        r"Both the astronaut and the satellite have the same acceleration towards the Earth's center (free fall)",
        r"The gravitational attraction of the Earth is zero at that altitude",
        r"The gravitational pull of the Earth is exactly cancelled by the Moon's gravity",
        r"The atmosphere inside the satellite shields against gravity"
    ],
    0,
    r"Gravity acts on both the astronaut and the spacecraft equally, producing the same centripetal acceleration ($g = v^2/r$). Thus, there is no normal reaction force between the astronaut and the floor ($N = 0$).",
    "Easy"
)

# Q27
add_q(
    "Orbital velocity and satellite motion",
    r"A spring balance carrying a block of mass $m$ is placed inside an orbiting satellite. The reading on the spring balance will be:",
    [
        r"$0$",
        r"$mg$",
        r"$\frac{1}{2}mg$",
        r"$-mg$"
    ],
    0,
    r"Inside an orbiting satellite in free fall, the effective acceleration due to gravity is zero. Hence, the spring balance indicates zero weight.",
    "Easy"
)

# Q28
add_q(
    "Orbital velocity and satellite motion",
    r"A simple pendulum of length $L$ is taken inside an orbiting artificial satellite. Its period of oscillation will be:",
    [
        r"$\infty$ (it does not oscillate)",
        r"$2\pi\sqrt{\frac{L}{g}}$",
        r"$0$",
        r"$2\pi\sqrt{\frac{L}{2g}}$"
    ],
    0,
    r"In orbit, effective gravity $g_{\text{eff}} = 0$. The period of a simple pendulum is $T = 2\pi\sqrt{\frac{L}{g_{\text{eff}}}} \to \infty$. The bob remains at rest wherever it is released.",
    "Easy"
)

# Q29
add_q(
    "Orbital velocity and satellite motion",
    r"If the orbital speed of a satellite revolving in a circular orbit close to Earth is increased by $\sqrt{2}$ times (i.e. by $41.4\%$), the satellite will:",
    [
        r"Escape from Earth's gravitational field along a parabolic trajectory",
        r"Drop into an elliptical orbit closer to Earth",
        r"Continue in a circular orbit of twice the radius",
        r"Come to a complete stop and fall radially into Earth"
    ],
    0,
    r"Since $v_e = \sqrt{2}v_o$, increasing speed by a factor of $\sqrt{2}$ gives it the escape velocity. The total mechanical energy becomes zero, and the satellite escapes into interplanetary space along a parabolic path.",
    "Easy"
)

# Q30
add_q(
    "Orbital velocity and satellite motion",
    r"If the orbital velocity of a satellite in a circular orbit is increased by a factor between $1$ and $\sqrt{2}$ (i.e., $v_o < v < \sqrt{2}v_o$), its new trajectory is:",
    [
        r"An ellipse with the point of projection as the perigee (closest point)",
        r"A parabola with Earth at the focus",
        r"A hyperbola escaping Earth",
        r"An ellipse with the point of projection as the apogee (farthest point)"
    ],
    0,
    r"When $v_o < v < v_e$, the total mechanical energy is negative ($E < 0$) but greater than that of the circular orbit. The trajectory is an ellipse with the projection point as the perigee (closest approach).",
    "Medium"
)

# Q31
add_q(
    "Orbital velocity and satellite motion",
    r"If the orbital velocity of a satellite in a circular orbit is suddenly decreased slightly ($v < v_o$), its subsequent path will be:",
    [
        r"An ellipse with the point of release as the apogee (farthest point)",
        r"An ellipse with the point of release as the perigee (closest point)",
        r"A straight line directly towards the center of Earth",
        r"A circle of smaller radius with the same period"
    ],
    0,
    r"Since $v < v_o$, the gravitational force exceeds the required centripetal force ($GMm/r^2 > mv^2/r$). The satellite falls inward along an elliptical orbit, making the release point the apogee.",
    "Medium"
)

# Q32
add_q(
    "Orbital velocity and satellite motion",
    r"The orbital speed of a satellite at a height $h = R$ above the Earth's surface (radius $R$) is:",
    [
        r"$\sqrt{\frac{gR}{2}}$",
        r"$\sqrt{gR}$",
        r"$\sqrt{\frac{gR}{4}}$",
        r"$\sqrt{2gR}$"
    ],
    0,
    r"At height $h = R$, orbital radius is $r = 2R$. $v_o = \sqrt{\frac{GM}{r}} = \sqrt{\frac{GM}{2R}} = \sqrt{\frac{gR}{2}}$.",
    "Easy"
)

# Q33
add_q(
    "Orbital velocity and satellite motion",
    r"The orbital speed of a satellite at a height $h = 3R$ above the surface of the Earth is:",
    [
        r"$\frac{1}{2}\sqrt{gR}$",
        r"$\frac{1}{4}\sqrt{gR}$",
        r"$\sqrt{gR}$",
        r"$\frac{\sqrt{3}}{2}\sqrt{gR}$"
    ],
    0,
    r"Orbital radius is $r = R + 3R = 4R$. $v_o = \sqrt{\frac{GM}{4R}} = \frac{1}{2}\sqrt{\frac{GM}{R}} = \frac{1}{2}\sqrt{gR}$.",
    "Easy"
)

# Q34
add_q(
    "Orbital velocity and satellite motion",
    r"The ratio of the orbital velocity $v_o$ to the escape velocity $v_e$ from the same point in space is always:",
    [
        r"$\frac{1}{\sqrt{2}}$",
        r"$\sqrt{2}$",
        r"$\frac{1}{2}$",
        r"$1$"
    ],
    0,
    r"At distance $r$: $v_o = \sqrt{\frac{GM}{r}}$ and $v_e = \sqrt{\frac{2GM}{r}}$. Thus $\frac{v_o}{v_e} = \frac{\sqrt{GM/r}}{\sqrt{2GM/r}} = \frac{1}{\sqrt{2}}$.",
    "Easy"
)

# Q35
add_q(
    "Orbital velocity and satellite motion",
    r"The areal velocity $\frac{dA}{dt}$ of a satellite orbiting in a circular orbit of radius $r$ with speed $v_o$ is:",
    [
        r"$\frac{1}{2} r v_o$",
        r"$r v_o$",
        r"$\frac{1}{2} r^2 v_o$",
        r"$2 r v_o$"
    ],
    0,
    r"Areal velocity is related to angular momentum $L = mrv_o$ by $\frac{dA}{dt} = \frac{L}{2m} = \frac{1}{2} r v_o$. By conservation of angular momentum, it is constant.",
    "Easy"
)

# Q36
add_q(
    "Orbital velocity and satellite motion",
    r"A geostationary satellite has an orbital period of $24\text{ hours}$ at radius $r \approx 6.6R$. Another satellite revolves in a circular orbit of radius $r' = 1.65R$. The period of this second satellite is:",
    [
        r"$3\text{ hours}$",
        r"$6\text{ hours}$",
        r"$1.5\text{ hours}$",
        r"$12\text{ hours}$"
    ],
    0,
    r"$\frac{T'}{T} = \left(\frac{r'}{r}\right)^{3/2} = \left(\frac{1.65R}{6.6R}\right)^{3/2} = \left(\frac{1}{4}\right)^{3/2} = \frac{1}{8}$. Thus $T' = \frac{24\text{ h}}{8} = 3\text{ hours}$.",
    "Medium"
)

# Q37
add_q(
    "Orbital velocity and satellite motion",
    r"If the kinetic energy of a satellite orbiting Earth is $E_k$, its potential energy $U$ is:",
    [
        r"$-2E_k$",
        r"$-E_k$",
        r"$+2E_k$",
        r"$-\frac{1}{2}E_k$"
    ],
    0,
    r"$E_k = \frac{GMm}{2r}$ and $U = -\frac{GMm}{r}$. Therefore $U = -2E_k$.",
    "Easy"
)

# Q38
add_q(
    "Orbital velocity and satellite motion",
    r"If the total energy of a satellite revolving in a circular orbit is $E$, its kinetic energy is:",
    [
        r"$-E$",
        r"$+E$",
        r"$-2E$",
        r"$-\frac{1}{2}E$"
    ],
    0,
    r"Total energy $E = -\frac{GMm}{2r}$ (a negative quantity). Kinetic energy is $K = +\frac{GMm}{2r}$. Therefore $K = -E$.",
    "Easy"
)

# Q39
add_q(
    "Orbital velocity and satellite motion",
    r"What is the minimum number of geostationary satellites required to provide uninterrupted telecommunications coverage for the entire equatorial belt of Earth?",
    [
        r"$3$",
        r"$2$",
        r"$4$",
        r"$6$"
    ],
    0,
    r"A single geostationary satellite can view roughly $120^\circ$ of longitude. Therefore, a minimum of 3 satellites positioned $120^\circ$ apart can cover the entire globe around the equator.",
    "Easy"
)

# Q40
add_q(
    "Orbital velocity and satellite motion",
    r"The minimum energy required to launch a satellite of mass $m$ from the Earth's surface into a circular orbit at an altitude $h = R$ is:",
    [
        r"$\frac{3}{4}mgR$",
        r"$\frac{1}{2}mgR$",
        r"$\frac{1}{4}mgR$",
        r"$mgR$"
    ],
    0,
    r"At surface: $E_1 = -\frac{GMm}{R}$. In orbit at $r = 2R$: $E_2 = -\frac{GMm}{2(2R)} = -\frac{GMm}{4R}$.\nRequired energy: $\Delta E = E_2 - E_1 = -\frac{GMm}{4R} - \left(-\frac{GMm}{R}\right) = \frac{3}{4}\frac{GMm}{R} = \frac{3}{4}mgR$.",
    "Medium"
)

# Q41
add_q(
    "Orbital velocity and satellite motion",
    r"A satellite of mass $m$ is moving in a circular orbit of radius $r = 2R$ around Earth. If it is suddenly stopped in its orbit and allowed to fall freely, the speed with which it strikes the Earth's surface is:",
    [
        r"$\sqrt{gR}$",
        r"$\sqrt{2gR}$",
        r"$\sqrt{\frac{gR}{2}}$",
        r"$\sqrt{\frac{3}{2}gR}$"
    ],
    0,
    r"Initial energy after stopping: $E_i = -\frac{GMm}{2R}$. On hitting surface: $E_f = \frac{1}{2}mv^2 - \frac{GMm}{R}$.\nBy conservation of energy: $\frac{1}{2}mv^2 = \frac{GMm}{R} - \frac{GMm}{2R} = \frac{GMm}{2R} = \frac{1}{2}mgR \implies v = \sqrt{gR}$.",
    "Medium"
)

# Q42
add_q(
    "Orbital velocity and satellite motion",
    r"A satellite is in a circular orbit around a planet of mass $M$ with orbital speed $v$. If the mass of the planet were quadrupled while keeping the orbit radius the same, the new orbital speed would be:",
    [
        r"$2v$",
        r"$4v$",
        r"$\frac{v}{2}$",
        r"$\sqrt{2}v$"
    ],
    0,
    r"$v_o = \sqrt{\frac{GM}{r}} \propto \sqrt{M}$. If $M' = 4M$, then $v_o' = \sqrt{4} v_o = 2v_o$.",
    "Easy"
)

# Q43
add_q(
    "Orbital velocity and satellite motion",
    r"The ratio of the time period of a close satellite of a planet of density $2\rho$ to that of a planet of density $\rho$ (both spherical) is:",
    [
        r"$1 : \sqrt{2}$",
        r"$\sqrt{2} : 1$",
        r"$1 : 2$",
        r"$2 : 1$"
    ],
    0,
    r"Period of a near-surface satellite is $T = \sqrt{\frac{3\pi}{G\rho}} \propto \frac{1}{\sqrt{\rho}}$. Therefore $\frac{T_1}{T_2} = \sqrt{\frac{\rho_2}{\rho_1}} = \sqrt{\frac{\rho}{2\rho}} = \frac{1}{\sqrt{2}}$.",
    "Medium"
)

# Q44
add_q(
    "Orbital velocity and satellite motion",
    r"A temporary circular orbit used during the launch of a satellite or deep-space probe before firing the final injection burn is known as a:",
    [
        r"Parking orbit",
        r"Geosynchronous transfer orbit",
        r"Lagrange orbit",
        r"Polar sun-synchronous orbit"
    ],
    0,
    r"A parking orbit is a temporary circular low-Earth orbit where a spacecraft coasts before firing its rocket engine to transition to a higher orbit or an escape trajectory.",
    "Easy"
)

# Q45
add_q(
    "Orbital velocity and satellite motion",
    r"The kinetic energy of an artificial satellite orbiting Earth is increased by $21\%$. The percentage change in the radius of its circular orbit is:",
    [
        r"Decreases by approximately $17.4\%$",
        r"Increases by approximately $21\%$",
        r"Decreases by approximately $21\%$",
        r"Increases by approximately $10\%$"
    ],
    0,
    r"$K = \frac{GMm}{2r} \implies r \propto \frac{1}{K}$. If $K' = 1.21 K$, then $r' = \frac{r}{1.21} \approx 0.8264 r$. The fractional change is $\frac{r' - r}{r} = 0.8264 - 1 = -0.1736 = -17.4\%$ (decreases by about $17.4\%$).",
    "Medium"
)

print(f"Total questions generated: {len(questions)}")

# Balancing options for both subtopics
def balance_subtopic(subtopic_name):
    sub_qs = [q for q in questions if q["subtopic"] == subtopic_name]
    assert len(sub_qs) == 45, f"Expected 45 questions for {subtopic_name}, got {len(sub_qs)}"
    
    # Target counts: A:12, B:11, C:11, D:11
    targets = [0]*12 + [1]*11 + [2]*11 + [3]*11
    
    for i, target in enumerate(targets):
        q = sub_qs[i]
        orig_corr = q["correctAnswer"]
        if orig_corr != target:
            correct_option_text = q["options"][orig_corr]
            target_option_text = q["options"][target]
            q["options"][target] = correct_option_text
            q["options"][orig_corr] = target_option_text
            q["correctAnswer"] = target

balance_subtopic("Acceleration due to gravity (variation with height, depth, latitude)")
balance_subtopic("Orbital velocity and satellite motion")

# Save to batch 3
with open("scripts/thermo_grav/grav_batch3.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Gravitation Batch 3 generated successfully! Total questions: {len(questions)}")
