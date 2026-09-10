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
# SUBTOPIC 5: Mean free path and molecular speeds (rms, average, most probable) (55 Questions)
# ==============================================================================

# Q1
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The root mean square speed ($v_{\text{rms}}$), average speed ($v_{\text{avg}}$), and most probable speed ($v_{\text{mp}}$) of an ideal gas are related by the inequality:",
    [
        r"$v_{\text{rms}} > v_{\text{avg}} > v_{\text{mp}}$",
        r"$v_{\text{mp}} > v_{\text{avg}} > v_{\text{rms}}$",
        r"$v_{\text{avg}} > v_{\text{rms}} > v_{\text{mp}}$",
        r"$v_{\text{rms}} > v_{\text{mp}} > v_{\text{avg}}$"
    ],
    0,
    r"The speeds are: $$v_{\text{rms}} = \sqrt{\frac{3RT}{M}} \approx 1.732\sqrt{\frac{RT}{M}}$$ $$v_{\text{avg}} = \sqrt{\frac{8RT}{\pi M}} \approx 1.596\sqrt{\frac{RT}{M}}$$ $$v_{\text{mp}} = \sqrt{\frac{2RT}{M}} \approx 1.414\sqrt{\frac{RT}{M}}$$ Therefore, $v_{\text{rms}} > v_{\text{avg}} > v_{\text{mp}}$.",
    "Easy"
)

# Q2
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The ratio of the most probable speed, average speed, and root mean square speed ($v_{\text{mp}} : v_{\text{avg}} : v_{\text{rms}}$) is:",
    [
        r"$\sqrt{2} : \sqrt{\frac{8}{\pi}} : \sqrt{3} \approx 1 : 1.128 : 1.224$",
        r"$\sqrt{3} : \sqrt{\frac{8}{\pi}} : \sqrt{2}$",
        r"$1 : \sqrt{2} : \sqrt{3}$",
        r"$\sqrt{2} : \sqrt{3} : \sqrt{\frac{8}{\pi}}$"
    ],
    0,
    r"$$v_{\text{mp}} : v_{\text{avg}} : v_{\text{rms}} = \sqrt{\frac{2RT}{M}} : \sqrt{\frac{8RT}{\pi M}} : \sqrt{\frac{3RT}{M}} = \sqrt{2} : \sqrt{\frac{8}{\pi}} : \sqrt{3} \approx 1 : 1.128 : 1.224$$",
    "Easy"
)

# Q3
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The mean free path $\lambda$ of a gas molecule of diameter $d$ in a container with number density $n = N/V$ is given by:",
    [
        r"$\lambda = \frac{1}{\sqrt{2} \pi n d^2}$",
        r"$\lambda = \frac{1}{\pi n d^2}$",
        r"$\lambda = \frac{\sqrt{2}}{\pi n d^2}$",
        r"$\lambda = \frac{1}{\sqrt{2} \pi n^2 d}$"
    ],
    0,
    r"Taking into account the relative velocities of colliding molecules, Clausius and Maxwell derived the mean free path as $\lambda = \frac{1}{\sqrt{2} \pi n d^2}$.",
    "Easy"
)

# Q4
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"For an ideal gas at constant volume, how does the mean free path $\lambda$ vary with absolute temperature $T$?",
    [
        r"It is independent of $T$",
        r"$\lambda \propto T$",
        r"$\lambda \propto \sqrt{T}$",
        r"$\lambda \propto 1/T$"
    ],
    0,
    r"Since $\lambda = \frac{1}{\sqrt{2}\pi n d^2}$, and number density $n = N/V$ depends only on volume $V$ and total particles $N$, at constant volume $n$ is constant. Hence $\lambda$ is completely independent of temperature at constant volume.",
    "Medium"
)

# Q5
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"At constant pressure $P$, the mean free path $\lambda$ of an ideal gas varies with absolute temperature $T$ as:",
    [
        r"$\lambda \propto T$",
        r"$\lambda \propto \frac{1}{T}$",
        r"$\lambda \propto \sqrt{T}$",
        r"Independent of $T$"
    ],
    0,
    r"Using the ideal gas equation $P = n k_B T \implies n = \frac{P}{k_B T}$, the mean free path becomes: $$\lambda = \frac{k_B T}{\sqrt{2}\pi d^2 P}$$ Thus, at constant pressure $P$, $\lambda \propto T$.",
    "Easy"
)

# Q6
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"If the diameter of a gas molecule is doubled at the same number density, the mean free path will become:",
    [
        r"$\frac{1}{4}\text{th}$ of initial value",
        r"$\frac{1}{2}\text{ of initial value}$",
        r"$2\text{ times initial value}$",
        r"$4\text{ times initial value}$"
    ],
    0,
    r"Since $\lambda \propto \frac{1}{d^2}$, doubling the diameter ($d \to 2d$) reduces the mean free path by a factor of $(2)^2 = 4$.",
    "Easy"
)

# Q7
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The rms speed of oxygen molecules at $300\text{ K}$ is $v$. At what temperature will the rms speed of oxygen molecules be $2v$?",
    [
        r"$1200\text{ K}$",
        r"$600\text{ K}$",
        r"$900\text{ K}$",
        r"$2400\text{ K}$"
    ],
    0,
    r"Since $v_{\text{rms}} \propto \sqrt{T}$, doubling $v_{\text{rms}}$ requires quadrupling the absolute temperature: $T_2 = 4 T_1 = 4 \times 300\text{ K} = 1200\text{ K}$.",
    "Easy"
)

# Q8
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The most probable speed of molecules in a gas at temperature $T$ is $v_{\text{mp}}$. The peak of the Maxwell-Boltzmann distribution curve represents:",
    [
        r"$v_{\text{mp}}$",
        r"$v_{\text{avg}}$",
        r"$v_{\text{rms}}$",
        r"$\frac{v_{\text{rms}} + v_{\text{avg}}}{2}$"
    ],
    0,
    r"The peak of the Maxwell-Boltzmann speed distribution curve corresponds to the maximum probability density $\frac{df(v)}{dv} = 0$, which defines the most probable speed $v_{\text{mp}} = \sqrt{\frac{2k_B T}{m}}$.",
    "Easy"
)

# Q9
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"As the temperature of an ideal gas increases, the Maxwell-Boltzmann speed distribution curve:",
    [
        r"Flattens and shifts its peak towards higher speeds",
        r"Becomes narrower and shifts its peak towards lower speeds",
        r"Shifts towards higher speeds with the same peak height",
        r"Remains unchanged because the total area is constant"
    ],
    0,
    r"As temperature increases, $v_{\text{mp}} \propto \sqrt{T}$ increases, so the peak moves to the right. Since the total area under the curve is normalized to 1 (or $N$), the curve must broaden and its peak height must decrease.",
    "Easy"
)

# Q10
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The collision frequency $Z$ (number of collisions made by a gas molecule per unit time) is given by:",
    [
        r"$Z = \sqrt{2}\pi n d^2 v_{\text{avg}}$",
        r"$Z = \frac{v_{\text{avg}}}{\sqrt{2}\pi n d^2}$",
        r"$Z = \frac{\sqrt{2}\pi d^2}{n v_{\text{avg}}}$",
        r"$Z = \pi n d^2 v_{\text{avg}}$"
    ],
    0,
    r"The collision frequency is the average speed divided by the mean free path: $$Z = \frac{v_{\text{avg}}}{\lambda} = \frac{v_{\text{avg}}}{1 / (\sqrt{2}\pi n d^2)} = \sqrt{2}\pi n d^2 v_{\text{avg}}$$ ",
    "Medium"
)

# Q11
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"At constant volume, as the absolute temperature $T$ of an ideal gas increases, the collision frequency $Z$ varies as:",
    [
        r"$Z \propto \sqrt{T}$",
        r"$Z \propto T$",
        r"$Z \propto \frac{1}{\sqrt{T}}$",
        r"Independent of $T$"
    ],
    0,
    r"At constant volume, $n$ is constant. Since $Z = \sqrt{2}\pi n d^2 v_{\text{avg}}$ and $v_{\text{avg}} \propto \sqrt{T}$, the collision frequency is directly proportional to $\sqrt{T}$.",
    "Medium"
)

# Q12
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The mean free path of nitrogen molecules at STP is approximately:",
    [
        r"$\sim 10^{-7}\text{ m} = 0.1\ \mu\text{m}$",
        r"$\sim 10^{-10}\text{ m} = 1\text{ \AA}$",
        r"$\sim 10^{-4}\text{ m} = 0.1\text{ mm}$",
        r"$\sim 10^{-2}\text{ m} = 1\text{ cm}$"
    ],
    0,
    r"At STP, $n \approx 2.7 \times 10^{25}\text{ m}^{-3}$ and $d \approx 0.37\text{ nm}$. Substituting gives $\lambda = \frac{1}{\sqrt{2}\pi(2.7 \times 10^{25})(0.37 \times 10^{-9})^2} \approx 6.8 \times 10^{-8}\text{ m} \approx 10^{-7}\text{ m}$.",
    "Medium"
)

# Q13
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The rms speed of an ideal gas of molar mass $M$ at pressure $P$ and density $\rho$ is:",
    [
        r"$\sqrt{\frac{3P}{\rho}}$",
        r"$\sqrt{\frac{P}{\rho}}$",
        r"$\sqrt{\frac{2P}{\rho}}$",
        r"$\sqrt{\frac{8P}{\pi\rho}}$"
    ],
    0,
    r"From kinetic theory $P = \frac{1}{3}\rho v_{\text{rms}}^2 \implies v_{\text{rms}} = \sqrt{\frac{3P}{\rho}}$.",
    "Easy"
)

# Q14
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The ratio of the speed of sound $v_s$ in an ideal gas to the rms speed $v_{\text{rms}}$ of its molecules is:",
    [
        r"$\sqrt{\frac{\gamma}{3}}$",
        r"$\sqrt{\frac{3}{\gamma}}$",
        r"$\frac{\gamma}{3}$",
        r"$\sqrt{\frac{8\gamma}{3\pi}}$"
    ],
    0,
    r"$$v_s = \sqrt{\frac{\gamma RT}{M}}, \quad v_{\text{rms}} = \sqrt{\frac{3RT}{M}} \implies \frac{v_s}{v_{\text{rms}}} = \sqrt{\frac{\gamma}{3}}$$",
    "Easy"
)

# Q15
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"Four molecules have speeds $1\text{ km/s}, 2\text{ km/s}, 3\text{ km/s},$ and $4\text{ km/s}$. The rms speed of these molecules is:",
    [
        r"$\sqrt{7.5}\text{ km/s} \approx 2.74\text{ km/s}$",
        r"$2.5\text{ km/s}$",
        r"$3.0\text{ km/s}$",
        r"$\sqrt{10}\text{ km/s} \approx 3.16\text{ km/s}$"
    ],
    0,
    r"$$\langle v^2 \rangle = \frac{1^2 + 2^2 + 3^2 + 4^2}{4} = \frac{1 + 4 + 9 + 16}{4} = \frac{30}{4} = 7.5\text{ (km/s)}^2$$ $$v_{\text{rms}} = \sqrt{7.5}\text{ km/s} \approx 2.74\text{ km/s}$$",
    "Easy"
)

# Q16
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"For the same four molecules (speeds $1, 2, 3, 4\text{ km/s}$), the average speed $v_{\text{avg}}$ is:",
    [
        r"$2.5\text{ km/s}$",
        r"$2.74\text{ km/s}$",
        r"$2.0\text{ km/s}$",
        r"$3.0\text{ km/s}$"
    ],
    0,
    r"$$v_{\text{avg}} = \frac{1 + 2 + 3 + 4}{4} = \frac{10}{4} = 2.5\text{ km/s}$$",
    "Easy"
)

# Q17
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The temperature at which the rms speed of $\text{SO}_2$ molecules (molar mass $64\text{ g/mol}$) is equal to the rms speed of $\text{O}_2$ molecules (molar mass $32\text{ g/mol}$) at $27^\circ\text{C}$ is:",
    [
        r"$327^\circ\text{C} = 600\text{ K}$",
        r"$54^\circ\text{C}$",
        r"$127^\circ\text{C}$",
        r"$27^\circ\text{C}$"
    ],
    0,
    r"$$v_{\text{rms}} \propto \sqrt{\frac{T}{M}} \implies \frac{T_1}{M_1} = \frac{T_2}{M_2} \implies \frac{300\text{ K}}{32} = \frac{T_{\text{SO}_2}}{64} \implies T_{\text{SO}_2} = 600\text{ K} = 327^\circ\text{C}$$",
    "Medium"
)

# Q18
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"If the pressure of an ideal gas is increased fourfold at constant temperature, its mean free path will:",
    [
        r"Become $\frac{1}{4}\text{th}$ of its initial value",
        r"Become $4\text{ times}$ its initial value",
        r"Remain unchanged",
        r"Become $\frac{1}{2}\text{ of its initial value}$"
    ],
    0,
    r"Since $\lambda = \frac{k_B T}{\sqrt{2}\pi d^2 P} \propto \frac{1}{P}$ at constant temperature, increasing pressure 4 times reduces the mean free path to $1/4$.",
    "Easy"
)

# Q19
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The mean collision time $\tau$ (relaxation time) between successive collisions of a gas molecule is related to mean free path $\lambda$ and average speed $v_{\text{avg}}$ by:",
    [
        r"$\tau = \frac{\lambda}{v_{\text{avg}}}$",
        r"$\tau = \lambda v_{\text{avg}}$",
        r"$\tau = \frac{v_{\text{avg}}}{\lambda}$",
        r"$\tau = \frac{\lambda^2}{v_{\text{avg}}}$"
    ],
    0,
    r"The average time between collisions is distance traveled between collisions ($\lambda$) divided by average speed: $\tau = \frac{\lambda}{v_{\text{avg}}}$.",
    "Easy"
)

# Q20
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The Maxwell-Boltzmann distribution of molecular speeds $f(v)$ is given by:",
    [
        r"$4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 e^{-mv^2 / 2k_B T}$",
        r"$4\pi \left(\frac{m}{2\pi k_B T}\right)^{1/2} v e^{-mv^2 / 2k_B T}$",
        r"$\left(\frac{m}{2\pi k_B T}\right)^{3/2} e^{-mv^2 / 2k_B T}$",
        r"$4\pi v^2 e^{-mv / k_B T}$"
    ],
    0,
    r"The Maxwell-Boltzmann speed distribution in 3 dimensions is $f(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 e^{-mv^2 / 2k_B T}$.",
    "Easy"
)

# Q21
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The fraction of molecules having speeds in the range $v$ to $v + dv$ is proportional to $v^2$ at very low speeds because:",
    [
        r"The volume of a spherical shell in velocity space is $4\pi v^2 dv$",
        r"Kinetic energy is proportional to $v^2$",
        r"Momentum is proportional to $v$",
        r"Molecules avoid zero velocity"
    ],
    0,
    r"In 3D Cartesian velocity space $(v_x, v_y, v_z)$, the volume of states corresponding to speed between $v$ and $v + dv$ is the spherical shell volume $4\pi v^2 dv$. At small $v$, $e^{-mv^2/2k_BT} \approx 1$, so $f(v) \propto v^2$.",
    "Medium"
)

# Q22
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"At what temperature is the average speed of hydrogen molecules equal to the rms speed of oxygen molecules at $300\text{ K}$?",
    [
        r"$22.1\text{ K}$",
        r"$44.2\text{ K}$",
        r"$18.8\text{ K}$",
        r"$37.5\text{ K}$"
    ],
    0,
    r"$$v_{\text{avg},\text{H}_2} = \sqrt{\frac{8 R T_{\text{H}_2}}{\pi M_{\text{H}_2}}}, \quad v_{\text{rms},\text{O}_2} = \sqrt{\frac{3 R (300)}{M_{\text{O}_2}}}$$ Equating their squares: $$\frac{8 R T_{\text{H}_2}}{\pi (2)} = \frac{3 R (300)}{32} \implies \frac{4}{\pi} T_{\text{H}_2} = \frac{900}{32} \approx 28.125 \implies T_{\text{H}_2} = 28.125 \times \frac{\pi}{4} \approx 22.09\text{ K} \approx 22.1\text{ K}$$",
    "Medium"
)

# Q23
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The ratio of the rms speed to the most probable speed for any ideal gas is:",
    [
        r"$\sqrt{\frac{3}{2}} \approx 1.225$",
        r"$\sqrt{\frac{2}{3}} \approx 0.816$",
        r"$\sqrt{\frac{8}{3\pi}} \approx 0.921$",
        r"$\frac{3}{2} = 1.5$"
    ],
    0,
    r"$$\frac{v_{\text{rms}}}{v_{\text{mp}}} = \frac{\sqrt{3RT/M}}{\sqrt{2RT/M}} = \sqrt{\frac{3}{2}} \approx 1.225$$",
    "Easy"
)

# Q24
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The ratio of the average speed to the most probable speed for an ideal gas is:",
    [
        r"$\sqrt{\frac{4}{\pi}} = \frac{2}{\sqrt{\pi}} \approx 1.128$",
        r"$\sqrt{\frac{\pi}{4}} \approx 0.886$",
        r"$\sqrt{\frac{3}{2}} \approx 1.225$",
        r"$\frac{8}{3\pi} \approx 0.849$"
    ],
    0,
    r"$$\frac{v_{\text{avg}}}{v_{\text{mp}}} = \frac{\sqrt{8RT/(\pi M)}}{\sqrt{2RT/M}} = \sqrt{\frac{8}{2\pi}} = \sqrt{\frac{4}{\pi}} = \frac{2}{\sqrt{\pi}} \approx 1.128$$",
    "Easy"
)

# Q25
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The ratio of the rms speed to the average speed for an ideal gas is:",
    [
        r"$\sqrt{\frac{3\pi}{8}} \approx 1.085$",
        r"$\sqrt{\frac{8}{3\pi}} \approx 0.921$",
        r"$\sqrt{\frac{3}{2}} \approx 1.225$",
        r"$\sqrt{\frac{\pi}{3}} \approx 1.023$"
    ],
    0,
    r"$$\frac{v_{\text{rms}}}{v_{\text{avg}}} = \frac{\sqrt{3RT/M}}{\sqrt{8RT/(\pi M)}} = \sqrt{\frac{3\pi}{8}} \approx 1.085$$",
    "Easy"
)

# Q26
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"In a high vacuum chamber where pressure is reduced to $10^{-6}\text{ mm of Hg}$ at room temperature, the mean free path of residual air molecules is of the order of:",
    [
        r"Several tens of meters",
        r"A few micrometers",
        r"A few millimeters",
        r"A few nanometers"
    ],
    0,
    r"At $1\text{ atm} = 760\text{ mm of Hg}$, $\lambda \sim 10^{-7}\text{ m}$. Since $\lambda \propto 1/P$, at $P = 10^{-6}\text{ mm of Hg}$, $\lambda \approx 10^{-7} \times \left(\frac{760}{10^{-6}}\right) \approx 76\text{ m}$. Thus the mean free path is tens of meters (much larger than typical chamber dimensions).",
    "Medium"
)

# Q27
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"When the mean free path of gas molecules is much larger than the dimensions of the container (Knudsen regime):",
    [
        r"Molecules collide primarily with the container walls rather than with each other",
        r"Molecules stop moving",
        r"The gas liquefies immediately",
        r"The pressure becomes non-uniform"
    ],
    0,
    r"In ultra-high vacuum where $\lambda \gg L$ (the container size), intermolecular collisions become negligibly rare, and collisions are almost exclusively with the walls.",
    "Medium"
)

# Q28
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"An ideal gas has rms speed $v_0$ at temperature $T_0$. If the absolute temperature is increased by $44\%$, the new rms speed is:",
    [
        r"$1.2 v_0$",
        r"$1.44 v_0$",
        r"$1.1 v_0$",
        r"$2.0 v_0$"
    ],
    0,
    r"$$T_f = 1.44 T_0 \implies v_{\text{rms}} = \sqrt{\frac{3R(1.44 T_0)}{M}} = \sqrt{1.44} \sqrt{\frac{3RT_0}{M}} = 1.2 v_0$$",
    "Easy"
)

# Q29
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"If the density of nitrogen gas at STP is $1.25\text{ kg/m}^3$ and standard atmospheric pressure is $1.013 \times 10^5\text{ Pa}$, the rms speed of nitrogen molecules is:",
    [
        r"$493\text{ m/s}$",
        r"$340\text{ m/s}$",
        r"$290\text{ m/s}$",
        r"$600\text{ m/s}$"
    ],
    0,
    r"$$v_{\text{rms}} = \sqrt{\frac{3P}{\rho}} = \sqrt{\frac{3 \times 1.013 \times 10^5}{1.25}} = \sqrt{\frac{3.039 \times 10^5}{1.25}} = \sqrt{243120} \approx 493.1\text{ m/s}$$",
    "Medium"
)

# Q30
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The most probable speed of nitrogen molecules ($\text{N}_2$, $M = 28\text{ g/mol}$) at $300\text{ K}$ is ($R = 8.314\text{ J}/(\text{mol}\cdot\text{K})$):",
    [
        r"$422\text{ m/s}$",
        r"$517\text{ m/s}$",
        r"$476\text{ m/s}$",
        r"$350\text{ m/s}$"
    ],
    0,
    r"$$v_{\text{mp}} = \sqrt{\frac{2RT}{M}} = \sqrt{\frac{2 \times 8.314 \times 300}{0.028}} = \sqrt{\frac{4988.4}{0.028}} = \sqrt{178157} \approx 422.1\text{ m/s}$$",
    "Medium"
)

# Q31
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The average speed of nitrogen molecules at $300\text{ K}$ is:",
    [
        r"$476\text{ m/s}$",
        r"$422\text{ m/s}$",
        r"$517\text{ m/s}$",
        r"$380\text{ m/s}$"
    ],
    0,
    r"$$v_{\text{avg}} = \sqrt{\frac{8RT}{\pi M}} = \sqrt{\frac{8 \times 8.314 \times 300}{\pi \times 0.028}} = \sqrt{\frac{19953.6}{0.08796}} = \sqrt{226837} \approx 476.3\text{ m/s}$$",
    "Medium"
)

# Q32
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The rms speed of nitrogen molecules at $300\text{ K}$ is:",
    [
        r"$517\text{ m/s}$",
        r"$476\text{ m/s}$",
        r"$422\text{ m/s}$",
        r"$610\text{ m/s}$"
    ],
    0,
    r"$$v_{\text{rms}} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3 \times 8.314 \times 300}{0.028}} = \sqrt{\frac{7482.6}{0.028}} = \sqrt{267235} \approx 516.9\text{ m/s} \approx 517\text{ m/s}$$",
    "Medium"
)

# Q33
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"Graham's law of effusion states that the rate of diffusion or effusion of a gas through a tiny orifice is inversely proportional to:",
    [
        r"The square root of its molar mass",
        r"Its molar mass",
        r"The square of its molar mass",
        r"Its absolute temperature"
    ],
    0,
    r"The rate of effusion is proportional to the average molecular speed, which is proportional to $\frac{1}{\sqrt{M}}$. Hence $r \propto \frac{1}{\sqrt{M}}$.",
    "Easy"
)

# Q34
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"Under identical conditions of temperature and pressure, the rate of effusion of hydrogen gas ($\text{H}_2$, $M = 2$) compared to oxygen gas ($\text{O}_2$, $M = 32$) is:",
    [
        r"$4\text{ times faster}$",
        r"$16\text{ times faster}$",
        r"$2\text{ times faster}$",
        r"$8\text{ times faster}$"
    ],
    0,
    r"$$\frac{r_{\text{H}_2}}{r_{\text{O}_2}} = \sqrt{\frac{M_{\text{O}_2}}{M_{\text{H}_2}}} = \sqrt{\frac{32}{2}} = \sqrt{16} = 4$$",
    "Easy"
)

# Q35
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"If the temperature of an ideal gas is quadrupled and its pressure is doubled, the mean free path will change by a factor of:",
    [
        r"$2$",
        r"$4$",
        r"$1/2$",
        r"$1$ (remains unchanged)"
    ],
    0,
    r"Since $\lambda \propto \frac{T}{P}$, we have: $$\frac{\lambda_2}{\lambda_1} = \left(\frac{T_2}{T_1}\right)\left(\frac{P_1}{P_2}\right) = (4) \times \left(\frac{1}{2}\right) = 2$$",
    "Easy"
)

# Q36
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The value of $\int_0^\infty f(v) dv$ for the normalized Maxwell-Boltzmann speed distribution is equal to:",
    [
        r"$1$",
        r"$0$",
        r"$\infty$",
        r"$\sqrt{\frac{8}{\pi}}$"
    ],
    0,
    r"By definition of a normalized probability density function, the total probability of finding a molecule with any speed between $0$ and $\infty$ is identically $1$.",
    "Easy"
)

# Q37
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The value of $\langle v^2 \rangle$ calculated from the Maxwell-Boltzmann distribution is:",
    [
        r"$\frac{3 k_B T}{m}$",
        r"$\frac{2 k_B T}{m}$",
        r"$\frac{8 k_B T}{\pi m}$",
        r"$\frac{k_B T}{m}$"
    ],
    0,
    r"Integrating $\int_0^\infty v^2 f(v) dv$ gives $\langle v^2 \rangle = \frac{3 k_B T}{m} = \frac{3 R T}{M}$, which gives $v_{\text{rms}} = \sqrt{\frac{3RT}{M}}$.",
    "Medium"
)

# Q38
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The value of $\langle v \rangle$ calculated from the Maxwell-Boltzmann distribution is:",
    [
        r"$\sqrt{\frac{8 k_B T}{\pi m}}$",
        r"$\sqrt{\frac{3 k_B T}{m}}$",
        r"$\sqrt{\frac{2 k_B T}{m}}$",
        r"$\sqrt{\frac{\pi k_B T}{8 m}}$"
    ],
    0,
    r"Integrating $\int_0^\infty v f(v) dv$ yields $\langle v \rangle = v_{\text{avg}} = \sqrt{\frac{8 k_B T}{\pi m}} = \sqrt{\frac{8RT}{\pi M}}$.",
    "Medium"
)

# Q39
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"In terms of density $\rho$, the mean free path $\lambda$ of an ideal gas of molecules of mass $m$ and diameter $d$ is:",
    [
        r"$\lambda = \frac{m}{\sqrt{2} \pi d^2 \rho}$",
        r"$\lambda = \frac{\rho}{\sqrt{2} \pi d^2 m}$",
        r"$\lambda = \frac{m \rho}{\sqrt{2} \pi d^2}$",
        r"$\lambda = \frac{1}{\sqrt{2} \pi d^2 \rho}$"
    ],
    0,
    r"Since mass density is $\rho = n m \implies n = \frac{\rho}{m}$. Substituting into $\lambda = \frac{1}{\sqrt{2}\pi n d^2}$ gives $\lambda = \frac{m}{\sqrt{2}\pi d^2 \rho}$.",
    "Easy"
)

# Q40
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"An insulated vessel contains an ideal gas. When the vessel is accelerated uniformly along a straight track, the temperature of the gas:",
    [
        r"Remains unchanged (relative to the vessel frame, except for a microscopic pressure gradient)",
        r"Increases drastically",
        r"Decreases to absolute zero",
        r"Fluctuates violently"
    ],
    0,
    r"Accelerating the container as a rigid body imparts a macroscopic drift velocity to the gas as a whole without altering the random thermal velocities of the molecules relative to the center of mass. Hence temperature remains unchanged.",
    "Medium"
)

# Q41
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"Two gases $A$ and $B$ have molecular weights $M_A = 4$ and $M_B = 16$. At what temperature will the rms speed of gas $B$ be equal to that of gas $A$ at $100\text{ K}$?",
    [
        r"$400\text{ K}$",
        r"$200\text{ K}$",
        r"$800\text{ K}$",
        r"$50\text{ K}$"
    ],
    0,
    r"$$\frac{T_A}{M_A} = \frac{T_B}{M_B} \implies \frac{100}{4} = \frac{T_B}{16} \implies T_B = 100 \times 4 = 400\text{ K}$$",
    "Easy"
)

# Q42
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"If the absolute temperature of an ideal gas is doubled while its volume is doubled, the rms speed of its molecules will:",
    [
        r"Increase by $\sqrt{2}$ times",
        r"Increase by $2$ times",
        r"Remain unchanged",
        r"Decrease by $\sqrt{2}$ times"
    ],
    0,
    r"The rms speed depends strictly on temperature: $v_{\text{rms}} = \sqrt{\frac{3RT}{M}}$. Since temperature is doubled ($T \to 2T$), $v_{\text{rms}}$ increases by a factor of $\sqrt{2}$, independent of the volume change.",
    "Easy"
)

# Q43
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"What is the average velocity vector $\langle \vec{v} \rangle$ of the molecules of a gas in a vessel at rest?",
    [
        r"$\vec{0}$",
        r"$\sqrt{\frac{8RT}{\pi M}}\hat{i}$",
        r"$\sqrt{\frac{3RT}{M}}\hat{k}$",
        r"$\frac{1}{3}\sqrt{\frac{3RT}{M}}(\hat{i} + \hat{j} + \hat{k})$"
    ],
    0,
    r"Velocity is a vector quantity. Due to complete spatial randomness, for every molecule moving with velocity $\vec{v}$, there is an equally probable molecule moving with $-\vec{v}$. Thus the vector average velocity is identically $\vec{0}$.",
    "Easy"
)

# Q44
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The rms speed of a certain gas at $27^\circ\text{C}$ is $v$. At what temperature will its rms speed become $3v$?",
    [
        r"$2427^\circ\text{C} = 2700\text{ K}$",
        r"$81^\circ\text{C}$",
        r"$270^\circ\text{C}$",
        r"$900\text{ K}$"
    ],
    0,
    r"Initial $T_1 = 27 + 273 = 300\text{ K}$. Since $v_{\text{rms}} \propto \sqrt{T}$, to triple the speed ($3v$), the absolute temperature must increase by $(3)^2 = 9$ times: $T_2 = 9 \times 300\text{ K} = 2700\text{ K} = 2700 - 273 = 2427^\circ\text{C}$.",
    "Easy"
)

# Q45
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"If the root mean square speed of argon atoms at $0^\circ\text{C}$ is $413\text{ m/s}$, the rms speed of helium atoms at $0^\circ\text{C}$ is ($M_{\text{Ar}} = 40\text{ g/mol}$, $M_{\text{He}} = 4\text{ g/mol}$):",
    [
        r"$\approx 1306\text{ m/s}$",
        r"$\approx 413\text{ m/s}$",
        r"$\approx 826\text{ m/s}$",
        r"$\approx 206\text{ m/s}$"
    ],
    0,
    r"$$\frac{v_{\text{He}}}{v_{\text{Ar}}} = \sqrt{\frac{M_{\text{Ar}}}{M_{\text{He}}}} = \sqrt{\frac{40}{4}} = \sqrt{10} \approx 3.162 \implies v_{\text{He}} = 413 \times 3.162 \approx 1306\text{ m/s}$$",
    "Medium"
)

# Q46
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The ratio of the mean free paths of two gases having molecular diameters $d_1 = 2\text{ \AA}$ and $d_2 = 4\text{ \AA}$ at the same temperature and pressure is:",
    [
        r"$4 : 1$",
        r"$1 : 4$",
        r"$2 : 1$",
        r"$1 : 2$"
    ],
    0,
    r"Since $\lambda \propto \frac{1}{d^2}$ at constant $T$ and $P$: $$\frac{\lambda_1}{\lambda_2} = \left(\frac{d_2}{d_1}\right)^2 = \left(\frac{4}{2}\right)^2 = 4$$",
    "Easy"
)

# Q47
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"In a Maxwellian distribution of speeds, as speed $v \to \infty$, the probability density $f(v)$ approaches zero as:",
    [
        r"$e^{-mv^2 / 2k_B T}$",
        r"$e^{-mv / k_B T}$",
        r"$\frac{1}{v^2}$",
        r"$\frac{1}{v}$"
    ],
    0,
    r"At very high speeds, the exponential Gaussian suppression factor $e^{-mv^2 / 2k_B T}$ completely dominates over the polynomial prefactor $v^2$, causing $f(v)$ to rapidly decay to zero.",
    "Easy"
)

# Q48
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The escape velocity from Earth's surface is $11.2\text{ km/s}$. The main reason hydrogen and helium are extremely rare in Earth's atmosphere is that:",
    [
        r"Their rms and thermal tail speeds are comparable to the escape velocity, allowing them to escape over geological time",
        r"They react chemically to form heavy solids",
        r"They are absorbed by the oceans completely",
        r"Earth's magnetic field repels them into space"
    ],
    0,
    r"Due to their low molecular weights ($M = 2$ and $4\text{ g/mol}$), light gases have high thermal speeds. Molecules in the high-speed tail of the Maxwellian distribution in the exosphere regularly exceed escape velocity and escape into interplanetary space (Jeans escape).",
    "Medium"
)

# Q49
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"An ideal gas at temperature $T$ has most probable speed $v_{\text{mp}}$. If 1 mole of the gas is heated to $4T$, the most probable speed becomes:",
    [
        r"$2 v_{\text{mp}}$",
        r"$4 v_{\text{mp}}$",
        r"$\sqrt{2} v_{\text{mp}}$",
        r"$16 v_{\text{mp}}$"
    ],
    0,
    r"$$v_{\text{mp}} = \sqrt{\frac{2RT}{M}} \implies v_{\text{mp}}' = \sqrt{\frac{2R(4T)}{M}} = 2 v_{\text{mp}}$$",
    "Easy"
)

# Q50
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The relaxation time $\tau$ between molecular collisions varies with pressure $P$ at constant temperature as:",
    [
        r"$\tau \propto \frac{1}{P}$",
        r"$\tau \propto P$",
        r"$\tau \propto \sqrt{P}$",
        r"$\tau \propto \frac{1}{\sqrt{P}}$"
    ],
    0,
    r"At constant temperature, $v_{\text{avg}}$ is constant, so $\tau = \frac{\lambda}{v_{\text{avg}}} \propto \lambda$. Since $\lambda \propto \frac{1}{P}$, we have $\tau \propto \frac{1}{P}$.",
    "Easy"
)

# Q51
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"A gas consists of $N$ molecules each of diameter $d$. If the volume of the container is compressed to half its initial value at constant temperature, the collision frequency will:",
    [
        r"Double",
        r"Halve",
        r"Quadruple",
        r"Remain unchanged"
    ],
    0,
    r"Halving the volume ($V \to V/2$) doubles the number density ($n \to 2n$). Since $Z = \sqrt{2}\pi n d^2 v_{\text{avg}}$ and temperature is constant, collision frequency $Z$ doubles.",
    "Easy"
)

# Q52
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"If the average kinetic energy of a molecule is $E$, its rms speed is given by:",
    [
        r"$\sqrt{\frac{2E}{m}}$",
        r"$\sqrt{\frac{E}{m}}$",
        r"$\frac{2E}{m}$",
        r"$\sqrt{\frac{3E}{2m}}$"
    ],
    0,
    r"By definition, translational kinetic energy is $E = \frac{1}{2}m v_{\text{rms}}^2 \implies v_{\text{rms}} = \sqrt{\frac{2E}{m}}$.",
    "Easy"
)

# Q53
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The ratio of the rms speeds of helium atoms ($\text{He}$, $M = 4$) at $400\text{ K}$ and argon atoms ($\text{Ar}$, $M = 40$) at $100\text{ K}$ is:",
    [
        r"$\sqrt{40} \approx 6.32$",
        r"$\sqrt{10} \approx 3.16$",
        r"$4$",
        r"$2$"
    ],
    0,
    r"$$\frac{v_{\text{He}}}{v_{\text{Ar}}} = \sqrt{\frac{T_{\text{He}}/M_{\text{He}}}{T_{\text{Ar}}/M_{\text{Ar}}}} = \sqrt{\frac{400/4}{100/40}} = \sqrt{\frac{100}{2.5}} = \sqrt{40} \approx 6.32$$",
    "Medium"
)

# Q54
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"The root mean square speed of the molecules of a gas is independent of:",
    [
        r"Volume and pressure at a given constant temperature",
        r"Absolute temperature",
        r"Molecular mass",
        r"Nature of the gas"
    ],
    0,
    r"From $v_{\text{rms}} = \sqrt{\frac{3RT}{M}}$, at a given constant temperature $T$, $v_{\text{rms}}$ is completely independent of pressure and volume.",
    "Easy"
)

# Q55
add_q(
    "Mean free path and molecular speeds (rms, average, most probable)",
    r"In an interstellar cloud where density is extremely low ($n \sim 10^6\text{ molecules/m}^3$) and molecular diameter is $d \sim 2 \times 10^{-10}\text{ m}$, the mean free path is approximately:",
    [
        r"$\sim 5.6 \times 10^{12}\text{ m} \approx 5.6\text{ billion km}$",
        r"$\sim 10^6\text{ m}$",
        r"$\sim 10^3\text{ m}$",
        r"$\sim 1\text{ m}$"
    ],
    0,
    r"$$\lambda = \frac{1}{\sqrt{2}\pi n d^2} = \frac{1}{\sqrt{2}\pi \times 10^6 \times (2 \times 10^{-10})^2} = \frac{1}{1.414 \times 3.14 \times 10^6 \times 4 \times 10^{-20}} = \frac{1}{1.777 \times 10^{-13}} \approx 5.6 \times 10^{12}\text{ m}$$ In deep space, a molecule travels billions of kilometers between collisions!",
    "Medium"
)

print(f"Total questions in KTG part 3: {len(questions)}")
with open("scripts/emw_ktg/ktg_batch3.json", "w") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/emw_ktg/ktg_batch3.json")
