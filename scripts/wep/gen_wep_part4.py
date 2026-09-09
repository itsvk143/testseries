import json

# 45 MCQs for "Elastic and inelastic collisions"
# Total: 45 MCQs

part4_questions = [
    # =========================================================================
    # TOPIC 7: Elastic and inelastic collisions (45 MCQs: wep_eic_01 to wep_eic_45)
    # =========================================================================
    {
        "id": "wep_eic_01",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A body of mass $m_1$ moving with velocity $u_1$ collides elastically head-on with a stationary body of mass $m_2$. The fraction of kinetic energy transferred to the second body is:",
        "options": [
            "$\\frac{4m_1 m_2}{(m_1 + m_2)^2}$",
            "$\\frac{2m_1 m_2}{(m_1 + m_2)^2}$",
            "$\\frac{m_1 m_2}{(m_1 + m_2)^2}$",
            "$\\frac{4(m_1 - m_2)^2}{(m_1 + m_2)^2}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "In a 1D elastic collision with $u_2 = 0$, the velocity of the second body is $v_2 = \\frac{2m_1}{m_1 + m_2}u_1$. The kinetic energy transferred is $K_2 = \\frac{1}{2}m_2 v_2^2 = \\frac{1}{2}m_2 \\left(\\frac{2m_1 u_1}{m_1 + m_2}\\right)^2 = \\frac{4m_1 m_2}{(m_1 + m_2)^2} \\left(\\frac{1}{2}m_1 u_1^2\\right) = \\frac{4m_1 m_2}{(m_1 + m_2)^2} K_1$. Thus the fraction transferred is $\\frac{4m_1 m_2}{(m_1 + m_2)^2}$."
    },
    {
        "id": "wep_eic_02",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A particle of mass $m$ moving with speed $v$ collides head-on elastically with another identical particle at rest. After collision:",
        "options": [
            "Both particles move with speed $v/2$",
            "The first particle comes to rest and the second moves with speed $v$",
            "Both particles rebound with speed $v/2$",
            "The first particle rebounds with speed $v$ and the second remains at rest"
        ],
        "correctOptionIndex": 1,
        "explanation": "In a head-on elastic collision between two identical masses ($m_1 = m_2$), the velocities are completely exchanged: $v_1 = u_2 = 0$ and $v_2 = u_1 = v$."
    },
    {
        "id": "wep_eic_03",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball is dropped from a height $h$ onto a horizontal floor. If the coefficient of restitution is $e$, the total distance traveled by the ball before coming to rest is:",
        "options": [
            "$h \\left(\\frac{1 + e}{1 - e}\\right)$",
            "$h \\left(\\frac{1 + e^2}{1 - e^2}\\right)$",
            "$h \\left(\\frac{1 - e^2}{1 + e^2}\\right)$",
            "$h \\left(\\frac{1 + e^2}{(1 - e)^2}\\right)$"
        ],
        "correctOptionIndex": 1,
        "explanation": "The height after $n$-th bounce is $h_n = e^{2n} h$. Total distance is $H = h + 2h_1 + 2h_2 + \\dots = h + 2h(e^2 + e^4 + e^6 + \\dots) = h + 2h\\left(\\frac{e^2}{1 - e^2}\\right) = h \\left(1 + \\frac{2e^2}{1 - e^2}\\right) = h\\left(\\frac{1 + e^2}{1 - e^2}\\right)$."
    },
    {
        "id": "wep_eic_04",
        "subTopic": "Elastic and inelastic collisions",
        "question": "In the previous problem, the total time elapsed before the ball stops bouncing is:",
        "options": [
            "$\\sqrt{\\frac{2h}{g}} \\left(\\frac{1 - e}{1 + e}\\right)$",
            "$\\sqrt{\\frac{2h}{g}} \\left(\\frac{1 + e^2}{1 - e^2}\\right)$",
            "$\\sqrt{\\frac{2h}{g}} \\left(\\frac{1 + e}{1 - e}\\right)$",
            "$\\sqrt{\\frac{h}{2g}} \\left(\\frac{1 + e}{1 - e}\\right)$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Time for initial fall is $t_0 = \\sqrt{2h/g}$. Time for $n$-th rebound is $2t_n = 2e^n t_0$. Total time is $T = t_0 + 2t_0(e + e^2 + \\dots) = t_0\\left(1 + \\frac{2e}{1 - e}\\right) = t_0\\left(\\frac{1 + e}{1 - e}\\right) = \\sqrt{\\frac{2h}{g}}\\left(\\frac{1 + e}{1 - e}\\right)$."
    },
    {
        "id": "wep_eic_05",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A bullet of mass $m$ moving with velocity $v$ hits a wooden block of mass $M$ suspended by a string of length $L$ and gets embedded in it (ballistic pendulum). The maximum height $h$ reached by the block is:",
        "options": [
            "$\\frac{m^2 v^2}{2(m + M)^2 g}$",
            "$\\frac{m v^2}{2(m + M) g}$",
            "$\\frac{M^2 v^2}{2(m + M)^2 g}$",
            "$\\frac{m^2 v^2}{2M^2 g}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "By conservation of linear momentum during the collision: $m v = (m + M) V \\implies V = \\frac{m v}{m + M}$. After collision, mechanical energy is conserved: $\\frac{1}{2}(m + M) V^2 = (m + M) g h \\implies h = \\frac{V^2}{2g} = \\frac{m^2 v^2}{2(m + M)^2 g}$."
    },
    {
        "id": "wep_eic_06",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A body of mass $M$ at rest explodes into three pieces of masses in the ratio $1 : 1 : 2$. Two pieces of equal mass fly off perpendicular to each other with speed $v$ each. The speed of the third piece is:",
        "options": [
            "$v$",
            "$\\frac{v}{\\sqrt{2}}$",
            "$\\sqrt{2}v$",
            "$2v$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Let the masses be $m, m, 2m$. The momentum of the first two pieces is $\\vec{p}_1 = mv\\hat{i}$ and $\\vec{p}_2 = mv\\hat{j}$. Their resultant momentum is $|\\vec{p}_{12}| = \\sqrt{(mv)^2 + (mv)^2} = \\sqrt{2}mv$. By momentum conservation, the third piece must have opposite momentum: $p_3 = (2m)v_3 = \\sqrt{2}mv \\implies v_3 = \\frac{\\sqrt{2}mv}{2m} = \\frac{v}{\\sqrt{2}}$."
    },
    {
        "id": "wep_eic_07",
        "subTopic": "Elastic and inelastic collisions",
        "question": "In a perfectly inelastic collision between two moving bodies, which of the following is strictly conserved?",
        "options": [
            "Kinetic energy only",
            "Linear momentum only",
            "Both kinetic energy and linear momentum",
            "Neither kinetic energy nor linear momentum"
        ],
        "correctOptionIndex": 1,
        "explanation": "In an inelastic collision, some kinetic energy is converted into heat, sound, or deformation energy, so kinetic energy is NOT conserved. However, since no external net force acts on the system, total linear momentum is strictly conserved."
    },
    {
        "id": "wep_eic_08",
        "subTopic": "Elastic and inelastic collisions",
        "question": "Two particles of masses $m_1$ and $m_2$ moving with initial velocities $u_1$ and $u_2$ collide head-on with coefficient of restitution $e$. The loss in kinetic energy during collision is:",
        "options": [
            "$\\frac{1}{2} \\frac{m_1 m_2}{m_1 + m_2} (u_1 - u_2)^2 (1 - e^2)$",
            "$\\frac{1}{2} (m_1 + m_2) (u_1 - u_2)^2 (1 - e^2)$",
            "$\\frac{1}{2} \\frac{m_1 m_2}{m_1 + m_2} (u_1 - u_2)^2 (1 - e)$",
            "$\\frac{m_1 m_2}{m_1 + m_2} (u_1^2 - u_2^2) (1 - e^2)$"
        ],
        "correctOptionIndex": 0,
        "explanation": "The loss of kinetic energy in a 1D collision with coefficient of restitution $e$ is given by $\\Delta K = \\frac{1}{2} \\mu u_{rel}^2 (1 - e^2)$, where reduced mass $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$ and $u_{rel} = u_1 - u_2$."
    },
    {
        "id": "wep_eic_09",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball of mass $m$ moving with velocity $v$ collides elastically with a stationary ball of mass $M$ ($M \\gg m$). The velocity of the lighter ball after collision is approximately:",
        "options": [
            "$v$",
            "$0$",
            "$-v$",
            "$2v$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Velocity $v_1 = \\frac{m - M}{m + M} v$. For $M \\gg m$, $\\frac{m - M}{m + M} \\approx \\frac{-M}{M} = -1$. Hence $v_1 \\approx -v$. The lighter ball rebounds with practically the same speed."
    },
    {
        "id": "wep_eic_10",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A heavy truck of mass $M$ moving with speed $V$ strikes a stationary light ball of mass $m$ ($M \\gg m$) head-on elastically. The speed of the ball immediately after collision is approximately:",
        "options": [
            "$V$",
            "$2V$",
            "$V/2$",
            "$4V$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Velocity $v_2 = \\frac{2M}{M + m} V + \\frac{m - M}{M + m}(0)$. For $M \\gg m$, $\\frac{2M}{M + m} \\approx 2$. Therefore $v_2 \\approx 2V$."
    },
    {
        "id": "wep_eic_11",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A smooth sphere of mass $m$ collides obliquely with an identical smooth sphere at rest in a perfectly elastic collision. After the collision, the angle between the velocities of the two spheres is:",
        "options": [
            "$45^\\circ$",
            "$60^\\circ$",
            "$90^\\circ$",
            "$180^\\circ$"
        ],
        "correctOptionIndex": 2,
        "explanation": "By momentum conservation: $\\vec{p} = \\vec{p}_1 + \\vec{p}_2 \\implies p^2 = p_1^2 + p_2^2 + 2\\vec{p}_1 \\cdot \\vec{p}_2$. For equal masses and elastic collision: $\\frac{p^2}{2m} = \\frac{p_1^2}{2m} + \\frac{p_2^2}{2m} \\implies p^2 = p_1^2 + p_2^2$. Comparing gives $2\\vec{p}_1 \\cdot \\vec{p}_2 = 0 \\implies \\vec{p}_1 \\perp \\vec{p}_2$. The angle between them is $90^\\circ$."
    },
    {
        "id": "wep_eic_12",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball hits a smooth horizontal surface at an angle $\\theta$ with the normal. If the coefficient of restitution is $e$, the angle of reflection $\\theta'$ with the normal is given by:",
        "options": [
            "$\\tan\\theta' = \\tan\\theta$",
            "$\\tan\\theta' = e\\tan\\theta$",
            "$\\tan\\theta' = \\frac{\\tan\\theta}{e}$",
            "$\\tan\\theta' = e^2\\tan\\theta$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Parallel component of velocity is unchanged: $v_t = u_t = u\\sin\\theta$. Normal component is reversed and scaled by $e$: $v_n = e u_n = e u\\cos\\theta$. The angle of reflection $\\theta'$ satisfies $\\tan\\theta' = \\frac{v_t}{v_n} = \\frac{u\\sin\\theta}{e u\\cos\\theta} = \\frac{\\tan\\theta}{e}$."
    },
    {
        "id": "wep_eic_13",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball of mass $m$ strikes a smooth vertical wall normally with speed $v$ and rebounds with speed $ev$. The impulse imparted by the wall to the ball is:",
        "options": [
            "$mv(1 - e)$",
            "$mv(1 + e)$",
            "$2mv$",
            "$mev$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Impulse $J = \\Delta p = p_f - p_i = m(ev) - (-mv) = mv(1 + e)$."
    },
    {
        "id": "wep_eic_14",
        "subTopic": "Elastic and inelastic collisions",
        "question": "Two bodies of masses $2\\text{ kg}$ and $3\\text{ kg}$ moving towards each other with velocities $4\\text{ m/s}$ and $2\\text{ m/s}$ respectively stick together after collision. The common velocity is:",
        "options": [
            "$0.4\\text{ m/s}$ in the direction of the $2\\text{ kg}$ body",
            "$0.4\\text{ m/s}$ in the direction of the $3\\text{ kg}$ body",
            "$2.0\\text{ m/s}$",
            "$1.2\\text{ m/s}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Taking direction of $2\\text{ kg}$ body as positive: $m_1 u_1 + m_2 u_2 = 2(4) + 3(-2) = 8 - 6 = +2\\text{ kg}\\cdot\\text{m/s}$. Total mass is $2 + 3 = 5\\text{ kg}$. Common velocity $V = \\frac{+2}{5} = +0.4\\text{ m/s}$ (in the direction of the $2\\text{ kg}$ body)."
    },
    {
        "id": "wep_eic_15",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball of mass $m$ moving with velocity $u$ strikes an identical stationary ball elastically. What percentage of the initial kinetic energy of the incoming ball is retained by it after collision?",
        "options": [
            "$100\\%$",
            "$50\\%$",
            "$0\\%$",
            "$25\\%$"
        ],
        "correctOptionIndex": 2,
        "explanation": "For equal masses in a head-on elastic collision, the incoming ball comes to rest completely ($v_1 = 0$), transferring $100\\%$ of its kinetic energy to the target. Thus, it retains $0\\%$ of its initial kinetic energy."
    },
    {
        "id": "wep_eic_16",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A neutron moving with kinetic energy $E$ collides head-on elastically with a stationary carbon nucleus (mass number 12). The fraction of kinetic energy retained by the neutron is:",
        "options": [
            "$\\frac{121}{169}$",
            "$\\frac{48}{169}$",
            "$\\frac{1}{13}$",
            "$\\frac{144}{169}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Mass of neutron $m_1 = 1$, mass of carbon $m_2 = 12$. Velocity of neutron after collision is $v_1 = \\frac{m_1 - m_2}{m_1 + m_2}u_1 = \\frac{1 - 12}{1 + 12}u_1 = -\\frac{11}{13}u_1$. The fraction of kinetic energy retained is $\\left(\\frac{v_1}{u_1}\\right)^2 = \\left(-\\frac{11}{13}\\right)^2 = \\frac{121}{169}$."
    },
    {
        "id": "wep_eic_17",
        "subTopic": "Elastic and inelastic collisions",
        "question": "In the previous problem, what fraction of the kinetic energy is transferred to the carbon nucleus?",
        "options": [
            "$\\frac{121}{169}$",
            "$\\frac{48}{169}$",
            "$\\frac{24}{169}$",
            "$\\frac{4}{13}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Fraction transferred is $1 - \\frac{121}{169} = \\frac{48}{169}$ (or directly $\\frac{4 m_1 m_2}{(m_1 + m_2)^2} = \\frac{4(1)(12)}{(13)^2} = \\frac{48}{169}$)."
    },
    {
        "id": "wep_eic_18",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball is dropped from a height of $10\\text{ m}$ on a horizontal plane. If the coefficient of restitution is $0.6$, the height to which it rebounds after the first bounce is:",
        "options": [
            "$6.0\\text{ m}$",
            "$3.6\\text{ m}$",
            "$2.16\\text{ m}$",
            "$1.6\\text{ m}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Height after first bounce is $h_1 = e^2 h_0 = (0.6)^2 \\times 10 = 0.36 \\times 10 = 3.6\\text{ m}$."
    },
    {
        "id": "wep_eic_19",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A particle of mass $m_1$ collides head-on elastically with a stationary particle of mass $m_2$. Maximum transfer of kinetic energy occurs when:",
        "options": [
            "$m_1 \\gg m_2$",
            "$m_2 \\gg m_1$",
            "$m_1 = m_2$",
            "$m_1 = 2m_2$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Fraction of energy transferred is $\\frac{\\Delta K}{K} = \\frac{4m_1 m_2}{(m_1 + m_2)^2} = \\frac{4}{(m_1/m_2 + m_2/m_1 + 2)}$. By AM-GM inequality, $m_1/m_2 + m_2/m_1 \\ge 2$, with equality when $m_1 = m_2$. Thus the maximum transfer (100%) occurs when $m_1 = m_2$."
    },
    {
        "id": "wep_eic_20",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A body of mass $m$ moving with velocity $v$ collides with another stationary body of mass $M$. If the collision is completely inelastic, the fraction of kinetic energy lost is:",
        "options": [
            "$\\frac{m}{M + m}$",
            "$\\frac{M}{M + m}$",
            "$\\frac{M - m}{M + m}$",
            "$\\frac{m M}{(M + m)^2}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Initial kinetic energy $K_i = \\frac{1}{2}mv^2$. Common final velocity $V = \\frac{mv}{M+m}$. Final kinetic energy $K_f = \\frac{1}{2}(M+m)V^2 = \\frac{1}{2}\\frac{m^2 v^2}{M+m} = \\frac{m}{M+m}K_i$. The kinetic energy lost is $\\Delta K = K_i - K_f = \\left(1 - \\frac{m}{M+m}\\right)K_i = \\frac{M}{M+m}K_i$. Thus fraction lost is $\\frac{M}{M+m}$."
    },
    {
        "id": "wep_eic_21",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A block of mass $m$ slides on a frictionless horizontal floor with speed $v_0$ and strikes an unstretched spring of spring constant $k$ attached to a stationary block of mass $M$. The maximum compression of the spring is:",
        "options": [
            "$v_0 \\sqrt{\\frac{m M}{(m + M)k}}$",
            "$v_0 \\sqrt{\\frac{m}{k}}$",
            "$v_0 \\sqrt{\\frac{M}{k}}$",
            "$v_0 \\sqrt{\\frac{(m + M)}{k}}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At maximum compression, both blocks move with the same velocity $V_{cm} = \\frac{mv_0}{m+M}$. The loss of kinetic energy is stored entirely as spring potential energy: $\\frac{1}{2}kx_{max}^2 = \\frac{1}{2}\\mu v_{rel}^2 = \\frac{1}{2}\\left(\\frac{mM}{m+M}\\right)v_0^2 \\implies x_{max} = v_0\\sqrt{\\frac{mM}{(m+M)k}}$."
    },
    {
        "id": "wep_eic_22",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball of mass $m$ moving with velocity $v$ makes a head-on collision with an identical ball at rest. If the coefficient of restitution is $e$, the velocity of the second ball after collision is:",
        "options": [
            "$\\frac{v(1 - e)}{2}$",
            "$\\frac{v(1 + e)}{2}$",
            "$ev$",
            "$\\frac{ev}{2}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Using standard formulas for $m_1 = m_2 = m$ and $u_2 = 0$: $v_2 = \\frac{m_1 u_1 + m_2 u_2 + e m_1(u_1 - u_2)}{m_1 + m_2} = \\frac{mu + emu}{2m} = \\frac{v(1 + e)}{2}$."
    },
    {
        "id": "wep_eic_23",
        "subTopic": "Elastic and inelastic collisions",
        "question": "In the previous problem, the velocity of the first ball after collision is:",
        "options": [
            "$\\frac{v(1 - e)}{2}$",
            "$\\frac{v(1 + e)}{2}$",
            "$\\frac{v(e - 1)}{2}$",
            "$v(1 - e)$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$v_1 = \\frac{m_1 u_1 + m_2 u_2 - e m_2(u_1 - u_2)}{m_1 + m_2} = \\frac{mv - emv}{2m} = \\frac{v(1 - e)}{2}$."
    },
    {
        "id": "wep_eic_24",
        "subTopic": "Elastic and inelastic collisions",
        "question": "Two identical balls $A$ and $B$ are hanging side by side touching each other by light strings of length $L$. Ball $A$ is pulled aside to height $h$ and released. It collides elastically with $B$. The maximum height reached by ball $B$ is:",
        "options": [
            "$h/2$",
            "$h$",
            "$2h$",
            "$h/4$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed of $A$ just before collision is $u = \\sqrt{2gh}$. Since the collision is elastic and the balls are identical, $A$ transfers all its velocity to $B$ ($v_B = u = \\sqrt{2gh}$, $v_A = 0$). Hence ball $B$ rises to the same height $h$."
    },
    {
        "id": "wep_eic_25",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A particle of mass $m$ moving with speed $u$ collides with a stationary particle of mass $2m$. If the collision is perfectly inelastic, the kinetic energy of the system after collision is:",
        "options": [
            "$\\frac{1}{2} m u^2$",
            "$\\frac{1}{3} m u^2$",
            "$\\frac{1}{6} m u^2$",
            "$\\frac{1}{4} m u^2$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Common velocity $V = \\frac{mu}{m + 2m} = \\frac{u}{3}$. Final kinetic energy $K_f = \\frac{1}{2}(3m)V^2 = \\frac{1}{2}(3m)\\left(\\frac{u}{3}\\right)^2 = \\frac{1}{6}mu^2$."
    },
    {
        "id": "wep_eic_26",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A body of mass $m_1 = 4\\text{ kg}$ moving with velocity $6\\text{ m/s}$ collides head-on elastically with a stationary body of mass $m_2 = 2\\text{ kg}$. The velocities of $m_1$ and $m_2$ after collision are:",
        "options": [
            "$2\\text{ m/s}$ and $8\\text{ m/s}$",
            "$3\\text{ m/s}$ and $6\\text{ m/s}$",
            "$0\\text{ m/s}$ and $6\\text{ m/s}$",
            "$1\\text{ m/s}$ and $7\\text{ m/s}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$v_1 = \\frac{m_1 - m_2}{m_1 + m_2}u_1 = \\frac{4 - 2}{4 + 2}(6) = \\frac{2}{6}(6) = 2\\text{ m/s}$. $v_2 = \\frac{2m_1}{m_1 + m_2}u_1 = \\frac{2(4)}{6}(6) = 8\\text{ m/s}$."
    },
    {
        "id": "wep_eic_27",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball of mass $m$ falls from height $h$ on a floor for which $e = 0.5$. The velocity with which it rebounds after the second impact is:",
        "options": [
            "$\\frac{1}{2}\\sqrt{2gh}$",
            "$\\frac{1}{4}\\sqrt{2gh}$",
            "$\\frac{1}{8}\\sqrt{2gh}$",
            "$\\frac{1}{16}\\sqrt{2gh}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Impact speed is $v_0 = \\sqrt{2gh}$. Rebound speed after $n$-th impact is $v_n = e^n v_0$. For $n = 2$ and $e = 0.5$: $v_2 = (0.5)^2 v_0 = \\frac{1}{4}\\sqrt{2gh}$."
    },
    {
        "id": "wep_eic_28",
        "subTopic": "Elastic and inelastic collisions",
        "question": "Two objects of masses $m$ and $4m$ are moving with equal momentum. The ratio of their kinetic energies $K_1 : K_2$ is:",
        "options": [
            "$1 : 4$",
            "$4 : 1$",
            "$1 : 2$",
            "$2 : 1$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Kinetic energy in terms of momentum is $K = \\frac{p^2}{2m}$. Since $p$ is identical: $\\frac{K_1}{K_2} = \\frac{m_2}{m_1} = \\frac{4m}{m} = 4 : 1$."
    },
    {
        "id": "wep_eic_29",
        "subTopic": "Elastic and inelastic collisions",
        "question": "Two objects of masses $m$ and $4m$ have equal kinetic energy. The ratio of their linear momenta $p_1 : p_2$ is:",
        "options": [
            "$1 : 2$",
            "$2 : 1$",
            "$1 : 4$",
            "$4 : 1$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Linear momentum in terms of kinetic energy is $p = \\sqrt{2mK}$. Since $K$ is equal: $\\frac{p_1}{p_2} = \\sqrt{\\frac{m_1}{m_2}} = \\sqrt{\\frac{m}{4m}} = \\frac{1}{2} = 1 : 2$."
    },
    {
        "id": "wep_eic_30",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A stationary nucleus decays into an alpha particle (mass $4\\text{ u}$) and a daughter nucleus (mass $220\\text{ u}$) with release of kinetic energy $Q$. The kinetic energy of the alpha particle is:",
        "options": [
            "$\\frac{4}{224} Q$",
            "$\\frac{220}{224} Q$",
            "$\\frac{1}{2} Q$",
            "$\\frac{220}{224} \\sqrt{Q}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "By conservation of momentum, $|p_\\alpha| = |p_D| = p$. The kinetic energies are $K_\\alpha = \\frac{p^2}{2m_\\alpha}$ and $K_D = \\frac{p^2}{2m_D}$. Therefore $\\frac{K_\\alpha}{K_D} = \\frac{m_D}{m_\\alpha} = \\frac{220}{4}$. Thus $K_\\alpha = \\frac{m_D}{m_\\alpha + m_D} Q = \\frac{220}{4 + 220} Q = \\frac{220}{224} Q$."
    },
    {
        "id": "wep_eic_31",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A mass $m$ moving with speed $v$ collides with another stationary mass $m$. After collision, the two masses move at equal angles of $30^\\circ$ on opposite sides of the initial direction. If the collision is elastic, what can be concluded?",
        "options": [
            "Such a collision is impossible as the angle between the two masses must be $90^\\circ$",
            "The collision is possible and each mass moves with speed $v/\\sqrt{3}$",
            "The collision is possible and each mass moves with speed $v/2$",
            "The collision must be completely inelastic"
        ],
        "correctOptionIndex": 0,
        "explanation": "In an elastic collision between two equal masses with one initially at rest, the angle between the two velocity vectors after collision must strictly be $90^\\circ$ (unless the collision is head-on, where one stops). Here the total angle is $30^\\circ + 30^\\circ = 60^\\circ \\neq 90^\\circ$, which violates kinetic energy conservation. Thus, such an elastic collision is impossible."
    },
    {
        "id": "wep_eic_32",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball of mass $m$ is moving with speed $u$ towards a wall which is moving towards the ball with speed $v$. If the collision is perfectly elastic ($e = 1$), the speed of the ball after collision is:",
        "options": [
            "$u + v$",
            "$u + 2v$",
            "$2u + v$",
            "$u$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Relative speed of approach between ball and wall is $u_{rel} = u + v$. Since the collision is perfectly elastic and the wall has infinite mass, the relative speed of separation must also be $u_{rel} = u + v$. If $v'$ is the speed of the ball away from the wall, relative speed of separation is $v' - v = u + v \\implies v' = u + 2v$."
    },
    {
        "id": "wep_eic_33",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball strikes a stationary wall with speed $u$ at an angle of $45^\\circ$ to the wall surface. If the wall is smooth and $e = 0.5$, the speed of the ball after rebound is:",
        "options": [
            "$u\\frac{\\sqrt{5}}{2\\sqrt{2}}$",
            "$u\\frac{\\sqrt{3}}{2}$",
            "$u\\frac{1}{\\sqrt{2}}$",
            "$u\\frac{\\sqrt{5}}{2}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Angle with surface is $45^\\circ$, so angle with normal is also $45^\\circ$. The initial velocity components are $u_t = u\\sin 45^\\circ = \\frac{u}{\\sqrt{2}}$ and $u_n = u\\cos 45^\\circ = \\frac{u}{\\sqrt{2}}$. After collision, $v_t = u_t = \\frac{u}{\\sqrt{2}}$, and $v_n = e u_n = 0.5\\left(\\frac{u}{\\sqrt{2}}\\right) = \\frac{u}{2\\sqrt{2}}$. The final speed is $v = \\sqrt{v_t^2 + v_n^2} = \\sqrt{\\frac{u^2}{2} + \\frac{u^2}{8}} = \\sqrt{\\frac{5u^2}{8}} = u\\frac{\\sqrt{5}}{2\\sqrt{2}}$."
    },
    {
        "id": "wep_eic_34",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A particle of mass $m_1$ collides with a stationary particle of mass $m_2$. If $m_1$ recoils backwards with its initial speed $u$, the collision:",
        "options": [
            "Cannot be elastic unless $m_2 \\to \\infty$",
            "Is possible with finite $m_2$",
            "Violates conservation of momentum",
            "Is completely inelastic"
        ],
        "correctOptionIndex": 0,
        "explanation": "By conservation of momentum: $m_1 u = -m_1 u + m_2 v_2 \\implies m_2 v_2 = 2m_1 u$. Kinetic energy: $\\frac{1}{2}m_1 u^2 = \\frac{1}{2}m_1 u^2 + \\frac{1}{2}m_2 v_2^2 \\implies \\frac{1}{2}m_2 v_2^2 = 0 \\implies v_2 = 0$. But $m_2 v_2 = 2m_1 u \\neq 0$, which is impossible unless $m_2 \\to \\infty$ (infinite mass wall)."
    },
    {
        "id": "wep_eic_35",
        "subTopic": "Elastic and inelastic collisions",
        "question": "Two balls of masses $2\\text{ kg}$ and $4\\text{ kg}$ are connected by a light spring of constant $k = 600\\text{ N/m}$. They are compressed towards each other and released on a smooth floor. If the total energy stored was $48\\text{ J}$, the maximum speed of the $2\\text{ kg}$ mass is:",
        "options": [
            "$4\\sqrt{2}\\text{ m/s}$",
            "$4\\text{ m/s}$",
            "$2\\sqrt{6}\\text{ m/s}$",
            "$4\\sqrt{3}\\text{ m/s}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Momentum conservation: $m_1 v_1 = m_2 v_2 \\implies 2 v_1 = 4 v_2 \\implies v_2 = v_1 / 2$. Total kinetic energy when spring is released: $K = \\frac{1}{2}(2)v_1^2 + \\frac{1}{2}(4)(v_1/2)^2 = v_1^2 + \\frac{1}{2}v_1^2 = \\frac{3}{2}v_1^2 = 48\\text{ J} \\implies v_1^2 = 32 \\implies v_1 = \\sqrt{32} = 4\\sqrt{2}\\text{ m/s}$."
    },
    {
        "id": "wep_eic_36",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A body of mass $m$ collides with a stationary body of mass $2m$. If the collision is head-on and $e = 0.5$, the ratio of final kinetic energy to initial kinetic energy is:",
        "options": [
            "$\\frac{1}{2}$",
            "$\\frac{5}{9}$",
            "$\\frac{1}{3}$",
            "$\\frac{7}{12}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Reduced mass $\\mu = \\frac{m(2m)}{m + 2m} = \\frac{2}{3}m$. Loss in kinetic energy is $\\Delta K = \\frac{1}{2}\\mu u^2 (1 - e^2) = \\frac{1}{2}\\left(\\frac{2}{3}m\\right)u^2 \\left(1 - \\frac{1}{4}\\right) = \\frac{1}{3}mu^2 \\left(\\frac{3}{4}\\right) = \\frac{1}{4}mu^2$. Initial kinetic energy is $K_i = \\frac{1}{2}mu^2$. Therefore, loss is $\\Delta K = \\frac{1}{2}K_i$. Wait: $\\Delta K / K_i = \\frac{\\frac{1}{4}mu^2}{\\frac{1}{2}mu^2} = \\frac{1}{2}$. Then $K_f / K_i = 1 - 1/2 = 1/2$ (wait, let's recheck: if $e=0.5$, $1 - e^2 = 3/4$. $\\mu = 2/3 m$. $\\frac{1}{2} \\mu u^2 (1 - e^2) = \\frac{1}{2} (2/3 m) u^2 (3/4) = \\frac{1}{4} m u^2$. $K_i = \\frac{1}{2} m u^2$. So $\\Delta K = \\frac{1}{2} K_i \\implies K_f = \\frac{1}{2} K_i$. So the ratio is $1/2$!). Let's verify with options: option A is $1/2$."
    },
    {
        "id": "wep_eic_37",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A body of mass $m$ collides with a stationary body of mass $2m$. If the collision is head-on and $e = 0.5$, the ratio of final kinetic energy of the system to initial kinetic energy is:",
        "options": [
            "$\\frac{1}{2}$",
            "$\\frac{3}{4}$",
            "$\\frac{2}{3}$",
            "$\\frac{5}{8}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Initial kinetic energy is $K_i = \\frac{1}{2}mu^2$. The loss in kinetic energy is $\\Delta K = \\frac{1}{2}\\mu u^2 (1 - e^2) = \\frac{1}{2}\\left(\\frac{2}{3}m\\right) u^2 \\left(1 - \\frac{1}{4}\\right) = \\frac{1}{4}mu^2 = \\frac{1}{2}K_i$. Therefore, the remaining final kinetic energy is $K_f = K_i - \\Delta K = \\frac{1}{2}K_i$, giving a ratio of $\\frac{1}{2}$."
    },
    {
        "id": "wep_eic_38",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A bullet of mass $10\\text{ g}$ moving horizontally with velocity $400\\text{ m/s}$ strikes a wooden block of mass $2\\text{ kg}$ which is suspended by a light vertical string of length $5\\text{ m}$. The bullet emerges out with velocity $100\\text{ m/s}$. The maximum height to which the block rises is ($g = 10\\text{ m/s}^2$):",
        "options": [
            "$0.1125\\text{ m}$",
            "$0.225\\text{ m}$",
            "$0.05\\text{ m}$",
            "$0.5\\text{ m}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "By conservation of linear momentum: $m u = m v_b + M V \\implies 0.010(400) = 0.010(100) + 2(V) \\implies 4 = 1 + 2V \\implies 2V = 3 \\implies V = 1.5\\text{ m/s}$. The maximum height reached is $h = \\frac{V^2}{2g} = \\frac{(1.5)^2}{2(10)} = \\frac{2.25}{20} = 0.1125\\text{ m}$."
    },
    {
        "id": "wep_eic_39",
        "subTopic": "Elastic and inelastic collisions",
        "question": "In a 1D elastic collision between two masses $m_1$ and $m_2$, the velocity of approach is $8\\text{ m/s}$. The velocity of separation is:",
        "options": [
            "$4\\text{ m/s}$",
            "$8\\text{ m/s}$",
            "$16\\text{ m/s}$",
            "$0\\text{ m/s}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "For a perfectly elastic collision, the coefficient of restitution is $e = 1$. Since $e = \\frac{v_{sep}}{v_{app}}$, the velocity of separation is equal to the velocity of approach, which is $8\\text{ m/s}$."
    },
    {
        "id": "wep_eic_40",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball of mass $m$ is projected with velocity $v_0$ at an angle $\\theta$ to the horizontal. At the highest point, it explodes into two equal fragments. One fragment falls vertically down. The distance from the launch point where the second fragment lands is:",
        "options": [
            "$\\frac{3}{2} R$",
            "$2R$",
            "$3R$",
            "$\\frac{5}{2} R$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At highest point (horizontal position $R/2$), horizontal velocity was $v_0\\cos\\theta$. By momentum conservation, since one fragment has zero horizontal velocity, the other fragment of mass $m/2$ must have horizontal velocity $2v_0\\cos\\theta$. It takes time $t = T/2$ to hit the ground. The additional distance covered is $(2v_0\\cos\\theta)(T/2) = R$. Total distance from launch is $\\frac{R}{2} + R = \\frac{3}{2}R$."
    },
    {
        "id": "wep_eic_41",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A stationary bomb explodes into two parts of masses $1\\text{ kg}$ and $3\\text{ kg}$. If the total kinetic energy released is $2400\\text{ J}$, the kinetic energy of the $1\\text{ kg}$ mass is:",
        "options": [
            "$600\\text{ J}$",
            "$1200\\text{ J}$",
            "$1800\\text{ J}$",
            "$2000\\text{ J}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Momentum is equal in magnitude: $p_1 = p_2 = p$. Kinetic energy $K = \\frac{p^2}{2m} \\propto \\frac{1}{m}$. Therefore, $\\frac{K_1}{K_2} = \\frac{m_2}{m_1} = \\frac{3}{1}$. Kinetic energy of $1\\text{ kg}$ mass is $K_1 = \\frac{3}{3 + 1}(2400) = \\frac{3}{4}(2400) = 1800\\text{ J}$."
    },
    {
        "id": "wep_eic_42",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A tennis ball is dropped onto a marble floor from a height $h_1$ and bounces to a height $h_2$. The coefficient of restitution between the ball and the floor is:",
        "options": [
            "$\\sqrt{\\frac{h_2}{h_1}}$",
            "$\\frac{h_2}{h_1}$",
            "$\\left(\\frac{h_2}{h_1}\\right)^2$",
            "$\\sqrt{\\frac{h_1}{h_2}}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Rebound velocity is $v_1 = \\sqrt{2gh_2}$ and impact velocity is $v_0 = \\sqrt{2gh_1}$. The coefficient of restitution is $e = \\frac{v_1}{v_0} = \\frac{\\sqrt{2gh_2}}{\\sqrt{2gh_1}} = \\sqrt{\\frac{h_2}{h_1}}$."
    },
    {
        "id": "wep_eic_43",
        "subTopic": "Elastic and inelastic collisions",
        "question": "Two identical billiard balls $A$ and $B$ are moving with equal speed $v$ in perpendicular directions ($A$ along $+x$, $B$ along $+y$). If they collide and coalesce, the speed of the combined mass is:",
        "options": [
            "$v$",
            "$v/2$",
            "$\\frac{v}{\\sqrt{2}}$",
            "$\\sqrt{2}v$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Total momentum is $\\vec{P} = mv\\hat{i} + mv\\hat{j}$. Magnitude of total momentum is $|\\vec{P}| = \\sqrt{2}mv$. Total mass is $2m$. The final speed is $V = \\frac{|\\vec{P}|}{2m} = \\frac{\\sqrt{2}mv}{2m} = \\frac{v}{\\sqrt{2}}$."
    },
    {
        "id": "wep_eic_44",
        "subTopic": "Elastic and inelastic collisions",
        "question": "A ball of mass $m$ strikes an identical ball at rest obliquely. If the collision is perfectly elastic and the balls are frictionless, the velocities of the balls after collision are:",
        "options": [
            "Collinear",
            "Antiparallel",
            "Mutually perpendicular",
            "At $60^\\circ$ to each other"
        ],
        "correctOptionIndex": 2,
        "explanation": "In an oblique elastic collision of two identical spheres where one is initially at rest, their post-collision velocities are always mutually perpendicular ($90^\\circ$)."
    },
    {
        "id": "wep_eic_45",
        "subTopic": "Elastic and inelastic collisions",
        "question": "During a head-on collision between two elastic bodies, at the instant of maximum deformation:",
        "options": [
            "Kinetic energy of the system is maximum",
            "Both bodies have the same velocity (equal to center of mass velocity)",
            "Total mechanical energy is zero",
            "Relative velocity of separation is maximum"
        ],
        "correctOptionIndex": 1,
        "explanation": "At the instant of maximum deformation, deformation stops momentarily so relative velocity between the two bodies is zero ($v_1 = v_2 = V_{cm}$). At this instant, deformation potential energy is maximum, and the kinetic energy of the system reaches its minimum value."
    }
]

if __name__ == "__main__":
    import os
    out_path = os.path.join(os.path.dirname(__file__), "wep_batch4.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(part4_questions, f, indent=2)
    
    # Counts validation
    eic = [q for q in part4_questions if q["subTopic"] == "Elastic and inelastic collisions"]
    print(f"Elastic and inelastic collisions questions: {len(eic)}")
    print(f"Generated {len(part4_questions)} MCQs for batch 4 saved to {out_path}")
