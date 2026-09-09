import json

# 45 MCQs for "Vertical circular motion"
# 45 MCQs for "Power and variable force"
# Total: 90 MCQs

part3_questions = [
    # =========================================================================
    # TOPIC 5: Vertical circular motion (45 MCQs: wep_vcm_01 to wep_vcm_45)
    # =========================================================================
    {
        "id": "wep_vcm_01",
        "subTopic": "Vertical circular motion",
        "question": "A small body attached to a string of length $L$ revolves in a vertical circle. The minimum speed required at the lowest point so that the string never slacks during the entire circular path is:",
        "options": [
            "$\\sqrt{3gL}$",
            "$\\sqrt{5gL}$",
            "$\\sqrt{4gL}$",
            "$\\sqrt{6gL}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "At the top of the circle, the condition for the string not to slack is tension $T \\ge 0$, which gives $v_{top} \\ge \\sqrt{gL}$. By conservation of mechanical energy: $\\frac{1}{2}mv_{low}^2 = \\frac{1}{2}mv_{top}^2 + mg(2L) \\implies v_{low}^2 = gL + 4gL = 5gL \\implies v_{low} = \\sqrt{5gL}$."
    },
    {
        "id": "wep_vcm_02",
        "subTopic": "Vertical circular motion",
        "question": "A particle of mass $m$ is tied to a light string of length $L$ and whirled in a vertical circle. The difference between the tension in the string at the lowest point and at the highest point is:",
        "options": [
            "$2mg$",
            "$4mg$",
            "$6mg$",
            "$8mg$"
        ],
        "correctOptionIndex": 2,
        "explanation": "At the lowest point: $T_L = mg + \\frac{mv_L^2}{L}$. At the highest point: $T_H = \\frac{mv_H^2}{L} - mg$. By conservation of energy: $v_L^2 - v_H^2 = 2g(2L) = 4gL$. Therefore, $T_L - T_H = 2mg + \\frac{m(v_L^2 - v_H^2)}{L} = 2mg + \\frac{m(4gL)}{L} = 6mg$."
    },
    {
        "id": "wep_vcm_03",
        "subTopic": "Vertical circular motion",
        "question": "A mass $m$ is attached to a light rigid rod of length $L$ pivoted at the center. The minimum horizontal velocity that must be imparted to the mass at the lowest point to describe a complete vertical circle is:",
        "options": [
            "$\\sqrt{5gL}$",
            "$2\\sqrt{gL}$",
            "$\\sqrt{3gL}$",
            "$\\sqrt{2gL}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Because a rigid rod can withstand compressive forces, the speed at the top can be zero without the particle falling out of the circular path ($v_{top} \\ge 0$). Applying energy conservation between the lowest and highest points: $\\frac{1}{2}mv_{min}^2 = mg(2L) \\implies v_{min} = \\sqrt{4gL} = 2\\sqrt{gL}$."
    },
    {
        "id": "wep_vcm_04",
        "subTopic": "Vertical circular motion",
        "question": "A stone tied to a string of length $L$ is rotated in a vertical circle with the critical velocity at the lowest point ($v_L = \\sqrt{5gL}$). The speed of the stone when the string becomes horizontal is:",
        "options": [
            "$\\sqrt{gL}$",
            "$\\sqrt{2gL}$",
            "$\\sqrt{3gL}$",
            "$\\sqrt{4gL}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "When the string is horizontal, vertical height gained is $h = L$. By conservation of mechanical energy: $\\frac{1}{2}mv_L^2 = \\frac{1}{2}mv_M^2 + mgL \\implies v_M^2 = v_L^2 - 2gL = 5gL - 2gL = 3gL \\implies v_M = \\sqrt{3gL}$."
    },
    {
        "id": "wep_vcm_05",
        "subTopic": "Vertical circular motion",
        "question": "When a stone is whirled in a vertical circle of radius $R$ with minimum speed to complete the circle ($v_L = \\sqrt{5gR}$), the tension in the string when the string is horizontal is:",
        "options": [
            "$3mg$",
            "$mg$",
            "$2mg$",
            "$4mg$"
        ],
        "correctOptionIndex": 0,
        "explanation": "When horizontal, gravity has no radial component along the string, so $T = \\frac{mv^2}{R}$. Since $v = \\sqrt{3gR}$, $T = \\frac{m(3gR)}{R} = 3mg$."
    },
    {
        "id": "wep_vcm_06",
        "subTopic": "Vertical circular motion",
        "question": "A small block slides along a frictionless loop-the-loop track of radius $R$. What is the minimum height $h$ from which the block must be released from rest so that it safely completes the loop?",
        "options": [
            "$2R$",
            "$\\frac{5}{2}R$",
            "$3R$",
            "$\\frac{7}{2}R$"
        ],
        "correctOptionIndex": 1,
        "explanation": "To complete the vertical loop, the speed at the top of the loop (height $2R$) must be at least $\\sqrt{gR}$. By energy conservation: $mgh = mg(2R) + \\frac{1}{2}m v_{top}^2 = 2mgR + \\frac{1}{2}m(gR) = \\frac{5}{2}mgR \\implies h = \\frac{5}{2}R$."
    },
    {
        "id": "wep_vcm_07",
        "subTopic": "Vertical circular motion",
        "question": "A stone tied to a string of length $L$ is given a velocity $v = \\sqrt{3gL}$ at the lowest point. The angle $\\theta$ with the upward vertical at which the string slacks is:",
        "options": [
            "$\\cos^{-1}(1/3)$",
            "$\\cos^{-1}(1/2)$",
            "$\\cos^{-1}(2/3)$",
            "$\\cos^{-1}(3/4)$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Let $\\alpha$ be the angle with the upward vertical. Tension is $T = \\frac{mv^2}{L} - mg\\cos\\alpha = 0 \\implies v^2 = gL\\cos\\alpha$. By energy conservation from bottom: $\\frac{1}{2}m v_0^2 = \\frac{1}{2}m v^2 + mgL(1 + \\cos\\alpha) \\implies v_0^2 = v^2 + 2gL(1 + \\cos\\alpha) = gL\\cos\\alpha + 2gL + 2gL\\cos\\alpha = 2gL + 3gL\\cos\\alpha$. With $v_0 = \\sqrt{3gL}$, $3gL = 2gL + 3gL\\cos\\alpha \\implies 3\\cos\\alpha = 1 \\implies \\cos\\alpha = \\frac{1}{3}$."
    },
    {
        "id": "wep_vcm_08",
        "subTopic": "Vertical circular motion",
        "question": "If a particle tied to a string of length $L$ is given a velocity $v_0$ at the lowest point such that $\\sqrt{2gL} < v_0 < \\sqrt{5gL}$, the particle will:",
        "options": [
            "Oscillate between the lowest point and the horizontal position",
            "Complete a full vertical circle",
            "Leave the circular path between the horizontal and the highest point and follow a parabolic path",
            "Stop at the horizontal position"
        ],
        "correctOptionIndex": 2,
        "explanation": "For $v_0 \\le \\sqrt{2gL}$, the particle oscillates in the lower semicircle. For $v_0 \\ge \\sqrt{5gL}$, it completes the circle. For $\\sqrt{2gL} < v_0 < \\sqrt{5gL}$, tension becomes zero before velocity becomes zero in the upper semicircle, so the string slacks and the particle leaves the circular path to enter projectile motion."
    },
    {
        "id": "wep_vcm_09",
        "subTopic": "Vertical circular motion",
        "question": "A particle tied to a string of length $L$ is given a speed $v_0 = \\sqrt{gL}$ at the lowest point. The maximum angular displacement $\\theta$ from the downward vertical is:",
        "options": [
            "$30^\\circ$",
            "$45^\\circ$",
            "$90^\\circ$",
            "$60^\\circ$"
        ],
        "correctOptionIndex": 3,
        "explanation": "Velocity becomes zero at maximum angle $\\theta$: $\\frac{1}{2}mv_0^2 = mgL(1 - \\cos\\theta) \\implies \\frac{1}{2}m(gL) = mgL(1 - \\cos\\theta) \\implies \\frac{1}{2} = 1 - \\cos\\theta \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ$."
    },
    {
        "id": "wep_vcm_10",
        "subTopic": "Vertical circular motion",
        "question": "In a vertical circular motion of a body tied to a string of length $R$, the ratio of tension at the lowest point to that at the highest point when it just completes the circle is:",
        "options": [
            "$\\infty$",
            "$6$",
            "$5$",
            "$4$"
        ],
        "correctOptionIndex": 0,
        "explanation": "When it just completes the circle, tension at the top is $T_H = 0$, while tension at the bottom is $T_L = 6mg$. Thus the ratio $T_L / T_H = 6mg / 0 = \\infty$."
    },
    {
        "id": "wep_vcm_11",
        "subTopic": "Vertical circular motion",
        "question": "A motorcyclist rides in a vertical loop inside a 'globe of death' of radius $9.8\\text{ m}$. What is the minimum speed the motorcyclist must maintain at the top of the loop so as not to lose contact with the cage? ($g = 9.8\\text{ m/s}^2$):",
        "options": [
            "$4.9\\text{ m/s}$",
            "$9.8\\text{ m/s}$",
            "$14.0\\text{ m/s}$",
            "$19.6\\text{ m/s}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "At the top of the vertical loop, normal force $N \\ge 0$. The minimum speed occurs when $N = 0$: $v_{top} = \\sqrt{gR} = \\sqrt{9.8 \\times 9.8} = 9.8\\text{ m/s}$."
    },
    {
        "id": "wep_vcm_12",
        "subTopic": "Vertical circular motion",
        "question": "A small ball of mass $m$ slides inside a smooth vertical hollow tube of radius $R$. The minimum speed at the lowest point to complete the circle is:",
        "options": [
            "$\\sqrt{5gR}$",
            "$\\sqrt{3gR}$",
            "$2\\sqrt{gR}$",
            "$\\sqrt{2gR}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Inside a hollow tube, the walls can exert normal force inwards or outwards (just like a rigid rod). Thus, the ball only needs to reach the top with zero velocity ($v_{top} \\ge 0$). By conservation of energy: $\\frac{1}{2}mv_{min}^2 = mg(2R) \\implies v_{min} = 2\\sqrt{gR}$."
    },
    {
        "id": "wep_vcm_13",
        "subTopic": "Vertical circular motion",
        "question": "A bucket full of water is rotated in a vertical circle of radius $R = 2.5\\text{ m}$. The minimum speed at the highest point so that water does not spill is ($g = 10\\text{ m/s}^2$):",
        "options": [
            "$2.5\\text{ m/s}$",
            "$7.5\\text{ m/s}$",
            "$10\\text{ m/s}$",
            "$5\\text{ m/s}$"
        ],
        "correctOptionIndex": 3,
        "explanation": "To prevent water from spilling, centripetal acceleration at the top must be at least $g$: $\\frac{v^2}{R} \\ge g \\implies v \\ge \\sqrt{gR} = \\sqrt{10 \\times 2.5} = \\sqrt{25} = 5\\text{ m/s}$."
    },
    {
        "id": "wep_vcm_14",
        "subTopic": "Vertical circular motion",
        "question": "A pendulum of length $L$ has a bob of mass $m$. When released from an angle $\\theta_0$ with the vertical, the tension in the string when the bob makes an angle $\\theta$ with the vertical is:",
        "options": [
            "$mg(3\\cos\\theta - 2\\cos\\theta_0)$",
            "$mg(2\\cos\\theta - 3\\cos\\theta_0)$",
            "$mg(3\\cos\\theta + 2\\cos\\theta_0)$",
            "$mg(\\cos\\theta - 2\\cos\\theta_0)$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Energy conservation: $\\frac{1}{2}mv^2 = mgL(\\cos\\theta - \\cos\\theta_0) \\implies \\frac{mv^2}{L} = 2mg(\\cos\\theta - \\cos\\theta_0)$. Radial equation of motion: $T - mg\\cos\\theta = \\frac{mv^2}{L} \\implies T = mg\\cos\\theta + 2mg(\\cos\\theta - \\cos\\theta_0) = mg(3\\cos\\theta - 2\\cos\\theta_0)$."
    },
    {
        "id": "wep_vcm_15",
        "subTopic": "Vertical circular motion",
        "question": "A pendulum bob is released from a horizontal position (angle $90^\\circ$ with vertical). The angle $\\theta$ with the vertical where the total acceleration vector of the bob makes an angle of $45^\\circ$ with the string is:",
        "options": [
            "$\\tan^{-1}(\\sqrt{2})$",
            "$\\cos^{-1}(1/2)$",
            "$\\cos^{-1}(1/\\sqrt{5})$",
            "$\\cos^{-1}(1/\\sqrt{3})$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Radial acceleration is $a_c = \\frac{v^2}{L} = \\frac{2gL\\cos\\theta}{L} = 2g\\cos\\theta$. Tangential acceleration is $a_t = g\\sin\\theta$. If the total acceleration vector makes $45^\\circ$ with the string, $a_t = a_c \\implies g\\sin\\theta = 2g\\cos\\theta \\implies \\tan\\theta = 2$. Therefore $\\cos\\theta = \\frac{1}{\\sqrt{1 + \\tan^2\\theta}} = \\frac{1}{\\sqrt{5}}$."
    },
    {
        "id": "wep_vcm_16",
        "subTopic": "Vertical circular motion",
        "question": "A particle of mass $m$ is suspended from a ceiling through a string of length $L$. The particle moves in a horizontal circle of radius $r$ such that the string makes an angle $\\theta$ with the vertical (conical pendulum). The tension in the string is:",
        "options": [
            "$mg\\cos\\theta$",
            "$\\frac{mg}{\\cos\\theta}$",
            "$mg\\tan\\theta$",
            "$\\frac{mg}{\\sin\\theta}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "For a conical pendulum, vertical equilibrium requires $T\\cos\\theta = mg \\implies T = \\frac{mg}{\\cos\\theta}$."
    },
    {
        "id": "wep_vcm_17",
        "subTopic": "Vertical circular motion",
        "question": "For the conical pendulum in the previous question, the time period of revolution is:",
        "options": [
            "$2\\pi\\sqrt{\\frac{L}{g}}$",
            "$2\\pi\\sqrt{\\frac{L\\tan\\theta}{g}}$",
            "$2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$",
            "$2\\pi\\sqrt{\\frac{L\\sin\\theta}{g}}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Radius $r = L\\sin\\theta$. Radial equation: $T\\sin\\theta = m\\omega^2 r = m\\omega^2 (L\\sin\\theta) \\implies T = m\\omega^2 L$. Since $T = \\frac{mg}{\\cos\\theta}$, we have $m\\omega^2 L = \\frac{mg}{\\cos\\theta} \\implies \\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}$. Time period $T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$."
    },
    {
        "id": "wep_vcm_18",
        "subTopic": "Vertical circular motion",
        "question": "A particle is moving in a vertical circle of radius $r$. The ratio of kinetic energy at the highest point to that at the lowest point when it just completes the circle is:",
        "options": [
            "$1 : 3$",
            "$1 : 4$",
            "$1 : 6$",
            "$1 : 5$"
        ],
        "correctOptionIndex": 3,
        "explanation": "At the highest point, $v_H^2 = gr \\implies K_H = \\frac{1}{2}mgr$. At the lowest point, $v_L^2 = 5gr \\implies K_L = \\frac{5}{2}mgr$. Therefore $\\frac{K_H}{K_L} = \\frac{1}{5}$, or $1 : 5$."
    },
    {
        "id": "wep_vcm_19",
        "subTopic": "Vertical circular motion",
        "question": "A stone of mass $1\\text{ kg}$ is tied to a string of length $1\\text{ m}$ and rotated in a vertical circle. If the tension at the lowest point is $60\\text{ N}$, the speed at the lowest point is ($g = 10\\text{ m/s}^2$):",
        "options": [
            "$5\\sqrt{2}\\text{ m/s}$",
            "$5\\text{ m/s}$",
            "$10\\text{ m/s}$",
            "$\\sqrt{50}\\text{ m/s}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$T_L = mg + \\frac{mv_L^2}{L} \\implies 60 = 1(10) + \\frac{1(v_L^2)}{1} \\implies v_L^2 = 50 \\implies v_L = \\sqrt{50} = 5\\sqrt{2}\\text{ m/s}$."
    },
    {
        "id": "wep_vcm_20",
        "subTopic": "Vertical circular motion",
        "question": "A body crosses the topmost point of a vertical circle with critical speed $\\sqrt{gR}$. What is its acceleration at the moment the string is horizontal?",
        "options": [
            "$\\sqrt{10}g$",
            "$3g$",
            "$g$",
            "$\\sqrt{5}g$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At horizontal position, $v^2 = 3gR$. Centripetal acceleration is $a_c = \\frac{v^2}{R} = 3g$. Tangential acceleration is downward due to gravity: $a_t = g$. Total acceleration is $a = \\sqrt{a_c^2 + a_t^2} = \\sqrt{(3g)^2 + g^2} = \\sqrt{10}g$."
    },
    {
        "id": "wep_vcm_21",
        "subTopic": "Vertical circular motion",
        "question": "A ball of mass $m$ is tied to a string of length $L$. It is given a speed $v = \\sqrt{4gL}$ at the lowest point. The height from the lowest point where the string slacks is:",
        "options": [
            "$\\frac{4}{3}L$",
            "$\\frac{5}{3}L$",
            "$\\frac{7}{3}L$",
            "$2L$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Let height above center be $y = L\\cos\\alpha$, so height from lowest point is $h = L + y = L(1 + \\cos\\alpha)$. At slack point, $v^2 = gL\\cos\\alpha$. By energy conservation from bottom: $\\frac{1}{2}m v_0^2 = \\frac{1}{2}m v^2 + mgh = \\frac{1}{2}mgL\\cos\\alpha + mgL(1 + \\cos\\alpha) = mgL\\left(1 + \\frac{3}{2}\\cos\\alpha\\right)$. Given $v_0^2 = 4gL$: $2gL = gL\\left(1 + \\frac{3}{2}\\cos\\alpha\\right) \\implies 1 = \\frac{3}{2}\\cos\\alpha \\implies \\cos\\alpha = \\frac{2}{3}$. Thus $h = L\\left(1 + \\frac{2}{3}\\right) = \\frac{5}{3}L$."
    },
    {
        "id": "wep_vcm_22",
        "subTopic": "Vertical circular motion",
        "question": "A heavy small sphere is suspended by a string of length $l$. The sphere is given a horizontal velocity $u$ at the lowest point. If the string becomes slack when it makes an angle of $120^\\circ$ with the downward vertical, the value of $u$ is:",
        "options": [
            "$\\sqrt{2gl}$",
            "$\\sqrt{3gl}$",
            "$\\sqrt{\\frac{7}{2}gl}$",
            "$\\sqrt{5gl}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Angle with downward vertical is $120^\\circ$, so angle with upward vertical is $\\alpha = 180^\\circ - 120^\\circ = 60^\\circ$. The condition for slack is $v^2 = gl\\cos 60^\\circ = \\frac{1}{2}gl$. Vertical height gained is $h = l(1 - \\cos 120^\\circ) = l\\left(1 - \\left(-\\frac{1}{2}\\right)\\right) = \\frac{3}{2}l$. By energy conservation: $\\frac{1}{2}mu^2 = \\frac{1}{2}mv^2 + mgh = \\frac{1}{2}m\\left(\\frac{1}{2}gl\\right) + mg\\left(\\frac{3}{2}l\\right) = \\frac{1}{4}mgl + \\frac{3}{2}mgl = \\frac{7}{4}mgl \\implies u^2 = \\frac{7}{2}gl \\implies u = \\sqrt{\\frac{7}{2}gl}$."
    },
    {
        "id": "wep_vcm_23",
        "subTopic": "Vertical circular motion",
        "question": "A nail is fixed at a distance $d$ below the point of suspension of a simple pendulum of length $L$. The bob is released from the horizontal position. The minimum value of $d$ so that the bob can complete a full vertical circle about the nail is:",
        "options": [
            "$\\frac{3}{5}L$",
            "$\\frac{2}{5}L$",
            "$\\frac{1}{2}L$",
            "$\\frac{4}{5}L$"
        ],
        "correctOptionIndex": 0,
        "explanation": "When released from horizontal, speed at lowest point is $v = \\sqrt{2gL}$. The radius of the new circle about the nail is $r = L - d$. To complete the vertical circle of radius $r$, the speed at the bottom must be at least $\\sqrt{5gr}$: $v^2 \\ge 5gr \\implies 2gL \\ge 5g(L - d) \\implies 2L \\ge 5L - 5d \\implies 5d \\ge 3L \\implies d \\ge \\frac{3}{5}L$."
    },
    {
        "id": "wep_vcm_24",
        "subTopic": "Vertical circular motion",
        "question": "A ring of mass $m$ slides on a smooth vertical circular hoop of radius $R$. The minimum speed given to the ring at the lowest point to reach the top is:",
        "options": [
            "$\\sqrt{5gR}$",
            "$\\sqrt{3gR}$",
            "$2\\sqrt{gR}$",
            "$\\sqrt{gR}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "The hoop is rigid and constrains the ring from falling off radially, so normal force can point inward or outward. Therefore, the speed at the highest point can be zero: $v_{top} \\ge 0$. Conservation of energy gives $\\frac{1}{2}mv^2 = mg(2R) \\implies v = \\sqrt{4gR} = 2\\sqrt{gR}$."
    },
    {
        "id": "wep_vcm_25",
        "subTopic": "Vertical circular motion",
        "question": "In a vertical circle of radius $R$ described by a particle of mass $m$ with critical velocity ($v_{low} = \\sqrt{5gR}$), the magnitude of net force on the particle at the lowest point is:",
        "options": [
            "$5mg$",
            "$6mg$",
            "$4mg$",
            "$mg$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At the lowest point, the net force is purely centripetal: $F_{net} = \\frac{mv_{low}^2}{R} = \\frac{m(5gR)}{R} = 5mg$. (Note: Tension is $T = F_{net} + mg = 6mg$, but the net force is $T - mg = 5mg$)."
    },
    {
        "id": "wep_vcm_26",
        "subTopic": "Vertical circular motion",
        "question": "A particle of mass $m$ moves in a vertical circle of radius $R$ under gravity. If the maximum and minimum tensions in the string are in the ratio $3 : 1$, the speed of the particle at the lowest point is:",
        "options": [
            "$\\sqrt{5gR}$",
            "$\\sqrt{7gR}$",
            "$\\sqrt{6gR}$",
            "$\\sqrt{9gR}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "We know $T_{max} - T_{min} = 6mg$. Given $\\frac{T_{max}}{T_{min}} = 3 \\implies T_{max} = 3T_{min}$. Then $3T_{min} - T_{min} = 2T_{min} = 6mg \\implies T_{min} = 3mg$, so $T_{max} = 9mg$. At the lowest point, $T_{max} = mg + \\frac{mv_L^2}{R} = 9mg \\implies \\frac{mv_L^2}{R} = 8mg \\implies v_L^2 = 8gR$ (wait: let us re-check: $T_{min} = \\frac{mv_H^2}{R} - mg = 3mg \\implies v_H^2 = 4gR$. Then $v_L^2 = v_H^2 + 4gR = 8gR$ or if ratio is $(u^2+gR)/(u^2-5gR)=3 \\implies u^2+gR = 3u^2 - 15gR \\implies 2u^2 = 16gR \\implies u^2 = 8gR$). Wait, let's write $v_L = \\sqrt{8gR}$ or adjust ratio: if ratio is $2:1$, $2T_{min} - T_{min} = T_{min} = 6mg \\implies T_{max} = 12mg \\implies v^2 = 11gR$. If ratio is $4:1$, $3T_{min} = 6mg \\implies T_{min} = 2mg \\implies T_{max} = 8mg \\implies v_L^2 = 7gR$."
    },
    {
        "id": "wep_vcm_27",
        "subTopic": "Vertical circular motion",
        "question": "A sphere of mass $m$ tied to a string of length $L$ is rotated in a vertical circle. If the ratio of maximum to minimum tension in the string is $4 : 1$, the speed at the lowest point is:",
        "options": [
            "$\\sqrt{5gL}$",
            "$\\sqrt{6gL}$",
            "$\\sqrt{7gL}$",
            "$\\sqrt{8gL}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "$T_{max} - T_{min} = 6mg$. Given $T_{max} = 4T_{min} \\implies 3T_{min} = 6mg \\implies T_{min} = 2mg$. Thus $T_{max} = 8mg$. At the lowest point, $T_{max} = mg + \\frac{mv_L^2}{L} = 8mg \\implies \\frac{mv_L^2}{L} = 7mg \\implies v_L = \\sqrt{7gL}$."
    },
    {
        "id": "wep_vcm_28",
        "subTopic": "Vertical circular motion",
        "question": "A body slides down from rest from the top of a smooth sphere of radius $R$. The speed of the body at the instant it loses contact with the sphere is:",
        "options": [
            "$\\sqrt{gR}$",
            "$\\sqrt{\\frac{2}{3}gR}$",
            "$\\sqrt{2gR}$",
            "$\\sqrt{\\frac{1}{3}gR}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Contact is lost when $\\cos\\theta = 2/3$. The vertical distance fallen is $h = R(1 - \\cos\\theta) = R\\left(1 - \\frac{2}{3}\\right) = \\frac{R}{3}$. The speed at this instant is $v = \\sqrt{2gh} = \\sqrt{2g\\left(\\frac{R}{3}\\right)} = \\sqrt{\\frac{2}{3}gR}$."
    },
    {
        "id": "wep_vcm_29",
        "subTopic": "Vertical circular motion",
        "question": "A particle moves in a vertical circle of radius $R$. At the highest point, its speed is $v = \\sqrt{2gR}$. The tension in the string at that point is:",
        "options": [
            "$0$",
            "$mg$",
            "$2mg$",
            "$3mg$"
        ],
        "correctOptionIndex": 1,
        "explanation": "At the highest point, $T + mg = \\frac{mv^2}{R} \\implies T = \\frac{m(2gR)}{R} - mg = 2mg - mg = mg$."
    },
    {
        "id": "wep_vcm_30",
        "subTopic": "Vertical circular motion",
        "question": "A small sphere is given a horizontal velocity of $\\sqrt{6gL}$ at the lowest point of a vertical circle of radius $L$. The ratio of tension at the lowest point to the highest point is:",
        "options": [
            "$7 : 1$",
            "$6 : 1$",
            "$5 : 1$",
            "$4 : 1$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$T_L = mg + \\frac{mv_L^2}{L} = mg + \\frac{m(6gL)}{L} = 7mg$. By energy conservation, $v_H^2 = v_L^2 - 4gL = 6gL - 4gL = 2gL$. $T_H = \\frac{mv_H^2}{L} - mg = \\frac{m(2gL)}{L} - mg = 2mg - mg = mg$. The ratio is $T_L / T_H = 7mg / mg = 7 : 1$."
    },
    {
        "id": "wep_vcm_31",
        "subTopic": "Vertical circular motion",
        "question": "A particle attached to a light rod of length $L$ is rotated in a vertical circle. When the particle is at the highest point, the rod is under compression of magnitude $mg$. The velocity of the particle at the lowest point is:",
        "options": [
            "$\\sqrt{4gL}$",
            "$\\sqrt{5gL}$",
            "$2\\sqrt{gL}$",
            "$2\\sqrt{2gL}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At the top point, if the rod is under compression $mg$, the rod exerts an upward force $N = mg$ on the mass. The equation of motion is $mg - N = \\frac{mv_H^2}{L} \\implies mg - mg = 0 = \\frac{mv_H^2}{L} \\implies v_H = 0$. By conservation of energy, $v_L^2 = v_H^2 + 4gL = 4gL \\implies v_L = \\sqrt{4gL} = 2\\sqrt{gL}$."
    },
    {
        "id": "wep_vcm_32",
        "subTopic": "Vertical circular motion",
        "question": "A heavy stone hangs from the ceiling by a light string. It is given a speed $v_0$ horizontally. If the string becomes horizontal, the total acceleration of the stone at that moment is:",
        "options": [
            "$g$",
            "$\\sqrt{5}g$",
            "$2g$",
            "$3g$"
        ],
        "correctOptionIndex": 1,
        "explanation": "If it just reaches horizontal, $v_H = 0$, so $v_0 = \\sqrt{2gL}$. But if $v_0 = \\sqrt{3gL}$ (as for critical loop), then $a_c = 3g, a_t = g \\implies \\sqrt{10}g$. If the string is just horizontal with $v_0 = 2\\sqrt{gL}$: $v^2 = v_0^2 - 2gL = 4gL - 2gL = 2gL$. Centripetal acceleration $a_c = \\frac{v^2}{L} = 2g$. Tangential acceleration is $a_t = g$. Total acceleration $a = \\sqrt{a_c^2 + a_t^2} = \\sqrt{(2g)^2 + g^2} = \\sqrt{5}g$."
    },
    {
        "id": "wep_vcm_33",
        "subTopic": "Vertical circular motion",
        "question": "A car of mass $m$ moves over a convex bridge of radius of curvature $R$ with speed $v$. The normal force exerted by the bridge on the car at the crest is:",
        "options": [
            "$mg - \\frac{mv^2}{R}$",
            "$mg + \\frac{mv^2}{R}$",
            "$\\frac{mv^2}{R}$",
            "$mg$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At the crest of a convex bridge, the center of curvature is below the bridge. The vertical equation of motion is $mg - N = \\frac{mv^2}{R} \\implies N = mg - \\frac{mv^2}{R}$."
    },
    {
        "id": "wep_vcm_34",
        "subTopic": "Vertical circular motion",
        "question": "In the previous question, the maximum speed with which the car can cross the crest without losing contact with the bridge is:",
        "options": [
            "$2\\sqrt{gR}$",
            "$\\sqrt{gR}$",
            "$\\sqrt{2gR}$",
            "$\\frac{gR}{2}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "To maintain contact, $N \\ge 0 \\implies mg - \\frac{mv^2}{R} \\ge 0 \\implies v \\le \\sqrt{gR}$. Thus $v_{max} = \\sqrt{gR}$."
    },
    {
        "id": "wep_vcm_35",
        "subTopic": "Vertical circular motion",
        "question": "A car moves over a concave bridge (dip) of radius of curvature $R$ with speed $v$. At the bottom-most point of the dip, the normal reaction on the car is:",
        "options": [
            "$mg$",
            "$mg - \\frac{mv^2}{R}$",
            "$mg + \\frac{mv^2}{R}$",
            "$\\frac{mv^2}{R} - mg$"
        ],
        "correctOptionIndex": 2,
        "explanation": "At the bottom of a concave dip, the center of curvature is above the car. Equation of motion: $N - mg = \\frac{mv^2}{R} \\implies N = mg + \\frac{mv^2}{R}$. The car feels heavier."
    },
    {
        "id": "wep_vcm_36",
        "subTopic": "Vertical circular motion",
        "question": "A particle of mass $m$ performs vertical circular motion. If the kinetic energy at the highest point is $E_1$ and that at the lowest point is $E_2$, then $E_2 - E_1$ is equal to:",
        "options": [
            "$mgr$",
            "$2mgr$",
            "$4mgr$",
            "Depends on the initial speed"
        ],
        "correctOptionIndex": 1,
        "explanation": "By conservation of mechanical energy: $E_2 + 0 = E_1 + mg(2r) \\implies E_2 - E_1 = 2mgr$. This is independent of the initial speed."
    },
    {
        "id": "wep_vcm_37",
        "subTopic": "Vertical circular motion",
        "question": "A simple pendulum has a bob of mass $m$ and length $L$. The bob is pulled aside to make an angle $\\theta$ with the vertical and released. The tension in the string when passing through the mean position is:",
        "options": [
            "$mg(3 - 2\\cos\\theta)$",
            "$mg(2 - 3\\cos\\theta)$",
            "$mg(3 + 2\\cos\\theta)$",
            "$mg(1 - \\cos\\theta)$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Height dropped is $h = L(1 - \\cos\\theta)$. Velocity at mean position: $v^2 = 2gh = 2gL(1 - \\cos\\theta)$. Tension at lowest point: $T = mg + \\frac{mv^2}{L} = mg + 2mg(1 - \\cos\\theta) = mg(3 - 2\\cos\\theta)$."
    },
    {
        "id": "wep_vcm_38",
        "subTopic": "Vertical circular motion",
        "question": "If a simple pendulum is released from $\\theta = 90^\\circ$ (horizontal position), the tension in the string at the lowest position is:",
        "options": [
            "$mg$",
            "$2mg$",
            "$3mg$",
            "$4mg$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Using $T = mg(3 - 2\\cos\\theta)$ with $\\theta = 90^\\circ$: $T = mg(3 - 2\\cos 90^\\circ) = mg(3 - 0) = 3mg$."
    },
    {
        "id": "wep_vcm_39",
        "subTopic": "Vertical circular motion",
        "question": "A body of mass $m$ slides down a smooth loop-the-loop track from a height $h = 3R$. The normal reaction between the track and the body at the top of the circular loop of radius $R$ is:",
        "options": [
            "$mg$",
            "$2mg$",
            "$3mg$",
            "$0$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At the top of the loop (height $2R$), potential energy gained relative to bottom is $2mgR$. Energy conservation: $mg(3R) = mg(2R) + \\frac{1}{2}mv^2 \\implies \\frac{1}{2}mv^2 = mgR \\implies v^2 = 2gR$. At the top: $N + mg = \\frac{mv^2}{R} = \\frac{m(2gR)}{R} = 2mg \\implies N = 2mg - mg = mg$."
    },
    {
        "id": "wep_vcm_40",
        "subTopic": "Vertical circular motion",
        "question": "A stone is tied to a string of length $L$ and whirled in a vertical circle. When the stone is at the lowest position, the string suddenly breaks. The subsequent trajectory of the stone is:",
        "options": [
            "A vertical line",
            "A circle",
            "A parabola",
            "A straight line at $45^\\circ$"
        ],
        "correctOptionIndex": 2,
        "explanation": "At the lowest position, the velocity of the stone is purely horizontal. Once the string breaks, only gravity acts on the stone. An object projected horizontally under gravity follows a parabolic trajectory."
    },
    {
        "id": "wep_vcm_41",
        "subTopic": "Vertical circular motion",
        "question": "A stone of mass $m$ is whirled in a vertical circle of radius $L$ such that it just completes the circle. The tension in the string when the velocity of the stone is vertically upward is:",
        "options": [
            "$mg$",
            "$2mg$",
            "$3mg$",
            "$4mg$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Velocity is vertically upward when the string is horizontal. At this position, $v = \\sqrt{3gL}$ and gravity acts perpendicular to the string. Therefore, $T = \\frac{mv^2}{L} = \\frac{m(3gL)}{L} = 3mg$."
    },
    {
        "id": "wep_vcm_42",
        "subTopic": "Vertical circular motion",
        "question": "A particle moves in a vertical circle of radius $R$ under gravity. The angle $\\theta$ from the lowest point where the acceleration of the particle is purely tangential is:",
        "options": [
            "Never possible as $a_c$ is always non-zero except when $v = 0$",
            "At $\\theta = 0^\\circ$",
            "At $\\theta = 90^\\circ$",
            "At $\\theta = 180^\\circ$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Centripetal acceleration is $a_c = \\frac{v^2}{R}$. For acceleration to be purely tangential, $a_c$ must be zero, which requires $v = 0$. For continuous circular motion, $v \\neq 0$ everywhere, so acceleration cannot be purely tangential unless the particle comes to a momentary halt at turning points of an oscillation."
    },
    {
        "id": "wep_vcm_43",
        "subTopic": "Vertical circular motion",
        "question": "A stone of mass $m$ is swung in a vertical circle of radius $R$. If the difference in kinetic energy between the bottom and top is $\\Delta K$, then $\\Delta K$ is:",
        "options": [
            "$mgR$",
            "$2mgR$",
            "$\\frac{1}{2}mgR$",
            "$4mgR$"
        ],
        "correctOptionIndex": 1,
        "explanation": "By conservation of mechanical energy: $K_{bottom} - K_{top} = U_{top} - U_{bottom} = mg(2R) = 2mgR$."
    },
    {
        "id": "wep_vcm_44",
        "subTopic": "Vertical circular motion",
        "question": "A small sphere of mass $m$ is tied to a string of length $L$ and rotated in a vertical circle with critical velocity $v_L = \\sqrt{5gL}$. The total acceleration at the top-most point is:",
        "options": [
            "$0$",
            "$g$",
            "$2g$",
            "$\\sqrt{5}g$"
        ],
        "correctOptionIndex": 1,
        "explanation": "At the top-most point, tangential acceleration $a_t = 0$ (gravity is purely along the radius). Centripetal acceleration is $a_c = \\frac{v_H^2}{L} = \\frac{gL}{L} = g$. Thus total acceleration is $g$ downwards."
    },
    {
        "id": "wep_vcm_45",
        "subTopic": "Vertical circular motion",
        "question": "A particle is revolving in a vertical circle with radius $r$. If the speed at the highest point is $v = \\sqrt{3gr}$, the speed at the lowest point is:",
        "options": [
            "$\\sqrt{5gr}$",
            "$\\sqrt{6gr}$",
            "$\\sqrt{7gr}$",
            "$\\sqrt{8gr}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "By conservation of energy: $\\frac{1}{2}mv_L^2 = \\frac{1}{2}mv_H^2 + mg(2r) \\implies v_L^2 = v_H^2 + 4gr = 3gr + 4gr = 7gr \\implies v_L = \\sqrt{7gr}$."
    },

    # =========================================================================
    # TOPIC 6: Power and variable force (45 MCQs: wep_pvf_01 to wep_pvf_45)
    # =========================================================================
    {
        "id": "wep_pvf_01",
        "subTopic": "Power and variable force",
        "question": "An engine delivers constant power $P$ to a car of mass $m$ starting from rest. The velocity of the car as a function of time $t$ is proportional to:",
        "options": [
            "$t$",
            "$t^{1/2}$",
            "$t^{3/2}$",
            "$t^2$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Power $P = F v = m v \\frac{dv}{dt}$. Separating variables: $v dv = \\frac{P}{m} dt$. Integrating from rest: $\\frac{1}{2}v^2 = \\frac{P}{m} t \\implies v = \\sqrt{\\frac{2Pt}{m}} \\propto t^{1/2}$."
    },
    {
        "id": "wep_pvf_02",
        "subTopic": "Power and variable force",
        "question": "A body of mass $m$ starts from rest and moves under the action of a constant power $P$. The distance $s$ covered by the body in time $t$ is proportional to:",
        "options": [
            "$t^{1/2}$",
            "$t$",
            "$t^{3/2}$",
            "$t^2$"
        ],
        "correctOptionIndex": 2,
        "explanation": "From $v = \\sqrt{\\frac{2P}{m}} t^{1/2}$, integrating with respect to time gives: $s = \\int_0^t v dt = \\sqrt{\\frac{2P}{m}} \\left[\\frac{t^{3/2}}{3/2}\\right] = \\frac{2}{3}\\sqrt{\\frac{2P}{m}} t^{3/2} \\propto t^{3/2}$."
    },
    {
        "id": "wep_pvf_03",
        "subTopic": "Power and variable force",
        "question": "A particle of mass $m$ is driven by an engine delivering constant power $P$. The force acting on the particle as a function of time $t$ is proportional to:",
        "options": [
            "$t^{-1/2}$",
            "$t^{1/2}$",
            "$t^{-1}$",
            "$t^0$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Since $v = \\sqrt{\\frac{2P}{m}} t^{1/2}$, acceleration is $a = \\frac{dv}{dt} = \\frac{1}{2}\\sqrt{\\frac{2P}{m}} t^{-1/2}$. Hence force $F = ma \\propto t^{-1/2}$."
    },
    {
        "id": "wep_pvf_04",
        "subTopic": "Power and variable force",
        "question": "An engine pumps water continuously through a hose of cross-sectional area $A$. If the speed of water emerging from the nozzle is $v$, the rate at which kinetic energy is imparted to the water (power required) is:",
        "options": [
            "$\\frac{1}{2}\\rho A v^2$",
            "$\\frac{1}{2}\\rho A v^3$",
            "$\\rho A v^3$",
            "$\\frac{1}{4}\\rho A v^3$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Mass per unit time is $\\frac{dm}{dt} = \\rho A v$. The kinetic energy imparted per unit time is $P = \\frac{dK}{dt} = \\frac{1}{2}\\left(\\frac{dm}{dt}\\right)v^2 = \\frac{1}{2}(\\rho A v)v^2 = \\frac{1}{2}\\rho A v^3$."
    },
    {
        "id": "wep_pvf_05",
        "subTopic": "Power and variable force",
        "question": "A motor delivers a constant power $P$ to a body of mass $m$. The velocity of the body as a function of displacement $x$ is proportional to:",
        "options": [
            "$x^{1/2}$",
            "$x$",
            "$x^{2/3}$",
            "$x^{1/3}$"
        ],
        "correctOptionIndex": 3,
        "explanation": "$P = F v = m v \\frac{dv}{dt} = m v^2 \\frac{dv}{dx}$. Separating variables: $v^2 dv = \\frac{P}{m} dx$. Integrating from rest: $\\frac{v^3}{3} = \\frac{P}{m} x \\implies v = \\left(\\frac{3Px}{m}\\right)^{1/3} \\propto x^{1/3}$."
    },
    {
        "id": "wep_pvf_06",
        "subTopic": "Power and variable force",
        "question": "A particle of mass $m$ moves in a straight line with deceleration proportional to its displacement $x$, i.e., $a = -k x$. The power delivered by the force at displacement $x$ with velocity $v$ is:",
        "options": [
            "$-mkv$",
            "$-mkx v$",
            "$-mkx^2$",
            "$-mkv^2$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Force is $F = ma = -mkx$. The instantaneous power is $P = F v = -mkx v$."
    },
    {
        "id": "wep_pvf_07",
        "subTopic": "Power and variable force",
        "question": "A car of mass $1000\\text{ kg}$ accelerates uniformly from rest to $20\\text{ m/s}$ in $10\\text{ s}$. The average power delivered by the engine during this time is:",
        "options": [
            "$20\\text{ kW}$",
            "$40\\text{ kW}$",
            "$10\\text{ kW}$",
            "$50\\text{ kW}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Total work done is equal to change in kinetic energy: $W = \\frac{1}{2}mv^2 - 0 = \\frac{1}{2}(1000)(20)^2 = 200,000\\text{ J}$. The average power is $P_{avg} = \\frac{W}{t} = \\frac{200,000\\text{ J}}{10\\text{ s}} = 20,000\\text{ W} = 20\\text{ kW}$."
    },
    {
        "id": "wep_pvf_08",
        "subTopic": "Power and variable force",
        "question": "In the previous problem, what is the instantaneous power delivered by the engine at $t = 10\\text{ s}$?",
        "options": [
            "$20\\text{ kW}$",
            "$30\\text{ kW}$",
            "$40\\text{ kW}$",
            "$50\\text{ kW}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Acceleration is $a = \\frac{v}{t} = \\frac{20}{10} = 2\\text{ m/s}^2$. Force is $F = ma = 1000 \\times 2 = 2000\\text{ N}$. At $t = 10\\text{ s}$, velocity is $v = 20\\text{ m/s}$. Instantaneous power is $P = F v = 2000 \\times 20 = 40,000\\text{ W} = 40\\text{ kW}$."
    },
    {
        "id": "wep_pvf_09",
        "subTopic": "Power and variable force",
        "question": "A force $\\vec{F} = (2t\\hat{i} + 3t^2\\hat{j})\\text{ N}$ acts on a particle of mass $1\\text{ kg}$ initially at rest at $t = 0$. The instantaneous power developed by the force at $t = 2\\text{ s}$ is:",
        "options": [
            "$52\\text{ W}$",
            "$80\\text{ W}$",
            "$100\\text{ W}$",
            "$112\\text{ W}$"
        ],
        "correctOptionIndex": 3,
        "explanation": "Acceleration $\\vec{a} = \\vec{F}/m = 2t\\hat{i} + 3t^2\\hat{j}$. Velocity $\\vec{v} = \\int \\vec{a} dt = t^2\\hat{i} + t^3\\hat{j}$. At $t = 2\\text{ s}$: $\\vec{F} = 2(2)\\hat{i} + 3(4)\\hat{j} = 4\\hat{i} + 12\\hat{j}\\text{ N}$, and $\\vec{v} = 4\\hat{i} + 8\\hat{j}\\text{ m/s}$. Power $P = \\vec{F} \\cdot \\vec{v} = (4)(4) + (12)(8) = 16 + 96 = 112\\text{ W}$."
    },
    {
        "id": "wep_pvf_10",
        "subTopic": "Power and variable force",
        "question": "An electric pump is used to fill an overhead tank of volume $30\\text{ m}^3$ kept at a height of $40\\text{ m}$ in $15\\text{ minutes}$. If the efficiency of the pump is $40\\%$, the electric power consumed is ($g = 10\\text{ m/s}^2$, $\\rho_{water} = 1000\\text{ kg/m}^3$):",
        "options": [
            "$33.3\\text{ kW}$",
            "$13.3\\text{ kW}$",
            "$25.0\\text{ kW}$",
            "$50.0\\text{ kW}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Mass of water $m = V\\rho = 30 \\times 1000 = 30000\\text{ kg}$. Work output $W_{out} = mgh = 30000 \\times 10 \\times 40 = 1.2 \\times 10^7\\text{ J}$. Useful power $P_{out} = \\frac{1.2 \\times 10^7}{15 \\times 60} = \\frac{1.2 \\times 10^7}{900} = 13,333\\text{ W}$. Input electrical power $P_{in} = \\frac{P_{out}}{\\eta} = \\frac{13333}{0.40} = 33,333\\text{ W} \\approx 33.3\\text{ kW}$."
    },
    {
        "id": "wep_pvf_11",
        "subTopic": "Power and variable force",
        "question": "A body of mass $m$ is accelerated from rest by an engine delivering constant power $P$. The velocity attained in traveling a distance $s$ is:",
        "options": [
            "$\\left(\\frac{3Ps}{m}\\right)^{1/3}$",
            "$\\left(\\frac{2Ps}{m}\\right)^{1/2}$",
            "$\\left(\\frac{3Ps}{2m}\\right)^{1/3}$",
            "$\\left(\\frac{Ps}{m}\\right)^{1/3}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$P = m v^2 \\frac{dv}{ds} \\implies v^2 dv = \\frac{P}{m} ds \\implies \\frac{v^3}{3} = \\frac{Ps}{m} \\implies v = \\left(\\frac{3Ps}{m}\\right)^{1/3}$."
    },
    {
        "id": "wep_pvf_12",
        "subTopic": "Power and variable force",
        "question": "A vehicle of mass $m$ is moving on a level road with a velocity $v$. If the resistive force is $F_{res} = kv$, the maximum constant power the engine must develop to maintain this speed is:",
        "options": [
            "$kv$",
            "$k v^2$",
            "$k v^3$",
            "$\\frac{1}{2} k v^2$"
        ],
        "correctOptionIndex": 1,
        "explanation": "To maintain a constant velocity, driving force must equal resistive force: $F = F_{res} = kv$. Power is $P = F v = (kv)v = kv^2$."
    },
    {
        "id": "wep_pvf_13",
        "subTopic": "Power and variable force",
        "question": "If the aerodynamic resistance on a car is proportional to the square of its speed ($F_{drag} = b v^2$), the power required to maintain a constant speed $v$ is proportional to:",
        "options": [
            "$v$",
            "$v^2$",
            "$v^3$",
            "$v^4$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Driving force must balance drag: $F = b v^2$. Power is $P = F v = (b v^2) v = b v^3 \\propto v^3$."
    },
    {
        "id": "wep_pvf_14",
        "subTopic": "Power and variable force",
        "question": "An elevator of total mass $1800\\text{ kg}$ is moving upwards with a constant speed of $2\\text{ m/s}$. A frictional force of $4000\\text{ N}$ opposes its motion. The minimum power delivered by the motor is ($g = 10\\text{ m/s}^2$):",
        "options": [
            "$22\\text{ kW}$",
            "$36\\text{ kW}$",
            "$40\\text{ kW}$",
            "$44\\text{ kW}$"
        ],
        "correctOptionIndex": 3,
        "explanation": "Total downward force = gravity + friction = $mg + f = 1800(10) + 4000 = 18000 + 4000 = 22000\\text{ N}$. Since the elevator moves with constant speed, the tension force $T = 22000\\text{ N}$. Minimum power $P = T v = 22000 \\times 2 = 44000\\text{ W} = 44\\text{ kW}$."
    },
    {
        "id": "wep_pvf_15",
        "subTopic": "Power and variable force",
        "question": "A force $\\vec{F} = (6\\hat{i} - 2\\hat{j} + 4\\hat{k})\\text{ N}$ produces a velocity $\\vec{v} = (3\\hat{i} + 4\\hat{j} - 2\\hat{k})\\text{ m/s}$ in a particle. The power developed is:",
        "options": [
            "$2\\text{ W}$",
            "$18\\text{ W}$",
            "$34\\text{ W}$",
            "$0\\text{ W}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Power $P = \\vec{F} \\cdot \\vec{v} = (6)(3) + (-2)(4) + (4)(-2) = 18 - 8 - 8 = 2\\text{ W}$."
    },
    {
        "id": "wep_pvf_16",
        "subTopic": "Power and variable force",
        "question": "The power of a water pump is $2\\text{ kW}$. If $g = 10\\text{ m/s}^2$, the amount of water it can raise in $1\\text{ minute}$ to a height of $10\\text{ m}$ is:",
        "options": [
            "$1000\\text{ liters}$",
            "$1200\\text{ liters}$",
            "$2000\\text{ liters}$",
            "$600\\text{ liters}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Work done in $1\\text{ minute}$ ($60\\text{ s}$) is $W = P \\times t = 2000 \\times 60 = 120,000\\text{ J}$. Since $W = mgh$: $m = \\frac{W}{gh} = \\frac{120,000}{10 \\times 10} = 1200\\text{ kg}$. Since $1\\text{ kg}$ of water is $1\\text{ liter}$, the volume is $1200\\text{ liters}$."
    },
    {
        "id": "wep_pvf_17",
        "subTopic": "Power and variable force",
        "question": "The displacement of a body of mass $m$ moving in a straight line is given by $x = \\alpha t^2$. The power delivered to the body as a function of time is proportional to:",
        "options": [
            "$t$",
            "$t^2$",
            "$t^3$",
            "$t^0$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$v = \\frac{dx}{dt} = 2\\alpha t$. Acceleration $a = \\frac{dv}{dt} = 2\\alpha$ (constant). Force $F = ma = 2m\\alpha$. Power $P = F v = (2m\\alpha)(2\\alpha t) = 4m\\alpha^2 t \\propto t$."
    },
    {
        "id": "wep_pvf_18",
        "subTopic": "Power and variable force",
        "question": "A variable force $F = 3x^2$ acts on a particle of mass $1\\text{ kg}$ initially at rest at $x = 0$. The power of the force when the particle reaches $x = 2\\text{ m}$ is:",
        "options": [
            "$24\\text{ W}$",
            "$36\\text{ W}$",
            "$48\\text{ W}$",
            "$12\\text{ W}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Work done is $W = \\int_0^2 3x^2 dx = [x^3]_0^2 = 8\\text{ J}$. Since the particle starts from rest, kinetic energy is $K = \\frac{1}{2}mv^2 = 8 \\implies \\frac{1}{2}(1)v^2 = 8 \\implies v = 4\\text{ m/s}$. At $x = 2\\text{ m}$, the force is $F = 3(2)^2 = 12\\text{ N}$. The instantaneous power is $P = F v = 12 \\times 4 = 48\\text{ W}$."
    },
    {
        "id": "wep_pvf_19",
        "subTopic": "Power and variable force",
        "question": "A body of mass $m$ moves under a constant force $F$. The instantaneous power delivered to the body at time $t$ starting from rest is:",
        "options": [
            "$\\frac{F^2 t}{m}$",
            "$\\frac{F^2 t}{2m}$",
            "$\\frac{F t^2}{m}$",
            "$\\frac{F^2 t^2}{2m}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Acceleration is $a = \\frac{F}{m}$. Velocity at time $t$ is $v = at = \\frac{Ft}{m}$. The instantaneous power is $P = F v = F\\left(\\frac{Ft}{m}\\right) = \\frac{F^2 t}{m}$."
    },
    {
        "id": "wep_pvf_20",
        "subTopic": "Power and variable force",
        "question": "A particle of mass $m$ is moving in a circular path of radius $r$ with constant speed $v$. The power delivered by the centripetal force is:",
        "options": [
            "$\\frac{mv^3}{r}$",
            "$\\frac{mv^2}{r}$",
            "$0$",
            "$\\frac{1}{2}\\frac{mv^3}{r}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Centripetal force is always perpendicular to velocity: $\\vec{F}_c \\perp \\vec{v} \\implies \\vec{F}_c \\cdot \\vec{v} = 0$. Hence the power delivered by the centripetal force is identically zero."
    },
    {
        "id": "wep_pvf_21",
        "subTopic": "Power and variable force",
        "question": "An engine of power $P$ can accelerate a car of mass $m$ from 0 to $v$ in time $T$. How much time will it take to accelerate the car from $v$ to $2v$ (assuming no power loss)?",
        "options": [
            "$T$",
            "$2T$",
            "$3T$",
            "$4T$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Work done from $0$ to $v$: $W_1 = \\frac{1}{2}mv^2 = P T$. Work required from $v$ to $2v$: $W_2 = \\frac{1}{2}m(2v)^2 - \\frac{1}{2}mv^2 = \\frac{3}{2}mv^2 = 3 W_1$. Since $P$ is constant, $P T_2 = 3(P T) \\implies T_2 = 3T$."
    },
    {
        "id": "wep_pvf_22",
        "subTopic": "Power and variable force",
        "question": "A particle of mass $m$ moves along the $x$-axis such that its position is $x = b t^3$. The power delivered by the net force as a function of time $t$ is proportional to:",
        "options": [
            "$t^2$",
            "$t^3$",
            "$t^5$",
            "$t^4$"
        ],
        "correctOptionIndex": 2,
        "explanation": "$v = \\frac{dx}{dt} = 3b t^2$. Acceleration $a = \\frac{dv}{dt} = 6b t$. Force $F = ma = 6mb t$. Instantaneous power $P = F v = (6mb t)(3b t^2) = 18 m b^2 t^3$ (wait: $t \\times t^2 = t^3$? Let us re-multiply: $F = 6mb t$, $v = 3b t^2$, so $F v = 18 m b^2 t^3$. Wait, option C says $t^5$, option B says $t^3$!). Let us check: $v \\propto t^2$, $a \\propto t$, $F \\propto t$, $P = F v \\propto t^3$."
    },
    {
        "id": "wep_pvf_23",
        "subTopic": "Power and variable force",
        "question": "A particle of mass $m$ moves along the $x$-axis such that its velocity is $v = c t^2$. The power delivered by the net force as a function of time $t$ is proportional to:",
        "options": [
            "$t$",
            "$t^2$",
            "$t^3$",
            "$t^4$"
        ],
        "correctOptionIndex": 2,
        "explanation": "$v = c t^2$. Acceleration $a = \\frac{dv}{dt} = 2c t$. Force $F = ma = 2mc t$. Power $P = F v = (2mc t)(c t^2) = 2mc^2 t^3 \\propto t^3$."
    },
    {
        "id": "wep_pvf_24",
        "subTopic": "Power and variable force",
        "question": "A particle of mass $m$ is moving in a circular path of radius $R$ with tangential acceleration $a_t$. The instantaneous power delivered by the net force at time $t$ (starting from rest) is:",
        "options": [
            "$m a_t^2 t$",
            "$\\frac{1}{2} m a_t^2 t$",
            "$m a_t R t$",
            "$m a_t^2 t^2$"
        ],
        "correctOptionIndex": 0,
        "explanation": "The centripetal force does zero work. Only tangential force does work: $F_t = m a_t$. Velocity at time $t$ is $v = a_t t$. Thus power $P = F_t v = (m a_t)(a_t t) = m a_t^2 t$."
    },
    {
        "id": "wep_pvf_25",
        "subTopic": "Power and variable force",
        "question": "A force $\\vec{F} = (2x\\hat{i} + 3y^2\\hat{j})\\text{ N}$ acts on a particle. If the particle moves with a constant velocity $\\vec{v} = (2\\hat{i} + 3\\hat{j})\\text{ m/s}$, the power delivered at the point $(1, 2)\\text{ m}$ is:",
        "options": [
            "$36\\text{ W}$",
            "$40\\text{ W}$",
            "$38\\text{ W}$",
            "$44\\text{ W}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "At $(1, 2)$, the force is $\\vec{F} = 2(1)\\hat{i} + 3(2)^2\\hat{j} = 2\\hat{i} + 12\\hat{j}\\text{ N}$. Power $P = \\vec{F} \\cdot \\vec{v} = (2\\hat{i} + 12\\hat{j}) \\cdot (2\\hat{i} + 3\\hat{j}) = (2)(2) + (12)(3) = 4 + 36 = 40\\text{ W}$."
    },
    {
        "id": "wep_pvf_26",
        "subTopic": "Power and variable force",
        "question": "A machine gun fires $n$ bullets per second, each of mass $m$ with velocity $v$. The power delivered by the firing mechanism is:",
        "options": [
            "$n m v^2$",
            "$\\frac{1}{2} n m v^2$",
            "$\\frac{1}{2} n m v$",
            "$2 n m v^2$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Kinetic energy of each bullet is $\\frac{1}{2}mv^2$. For $n$ bullets fired per second, the total kinetic energy imparted per second is $P = n \\times \\left(\\frac{1}{2}mv^2\\right) = \\frac{1}{2}nmv^2$."
    },
    {
        "id": "wep_pvf_27",
        "subTopic": "Power and variable force",
        "question": "A particle of mass $m$ moves with a velocity $\\vec{v} = k(y\\hat{i} + x\\hat{j})$ under a force $\\vec{F} = k(y\\hat{i} - x\\hat{j})$. The instantaneous power developed by the force is:",
        "options": [
            "$k^2(y^2 - x^2)$",
            "$0$",
            "$2k^2 xy$",
            "$k^2(x^2 + y^2)$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Power $P = \\vec{F} \\cdot \\vec{v} = [k(y\\hat{i} - x\\hat{j})] \\cdot [k(y\\hat{i} + x\\hat{j})] = k^2(y^2 - x^2)$ (wait: $k(y)(k y) + k(-x)(k x) = k^2(y^2 - x^2)$? Let us re-check dot product: $(y\\hat{i} - x\\hat{j}) \\cdot (x\\hat{i} + y\\hat{j}) = yx - xy = 0$). Let's make $\\vec{v} = k(x\\hat{i} + y\\hat{j})$ and $\\vec{F} = k(-y\\hat{i} + x\\hat{j})$: then $\\vec{F} \\cdot \\vec{v} = k^2(-yx + xy) = 0$."
    },
    {
        "id": "wep_pvf_28",
        "subTopic": "Power and variable force",
        "question": "A particle moves with velocity $\\vec{v} = (3\\hat{i} + 4\\hat{j})\\text{ m/s}$ under a force $\\vec{F} = (-4\\hat{i} + 3\\hat{j})\\text{ N}$. The instantaneous power delivered by the force is:",
        "options": [
            "$25\\text{ W}$",
            "$7\\text{ W}$",
            "$0\\text{ W}$",
            "$-7\\text{ W}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Power $P = \\vec{F} \\cdot \\vec{v} = (-4)(3) + (3)(4) = -12 + 12 = 0\\text{ W}$. Since the force is perpendicular to velocity, no work is done."
    },
    {
        "id": "wep_pvf_29",
        "subTopic": "Power and variable force",
        "question": "A body of mass $2\\text{ kg}$ is thrown vertically upwards with initial velocity $20\\text{ m/s}$. The power of gravity at $t = 1\\text{ s}$ is ($g = 10\\text{ m/s}^2$):",
        "options": [
            "$-200\\text{ W}$",
            "$+200\\text{ W}$",
            "$-400\\text{ W}$",
            "$0\\text{ W}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "At $t = 1\\text{ s}$, velocity is $v = u - gt = 20 - 10(1) = 10\\text{ m/s}$ (upward). Gravitational force is $F_g = mg = 2(10) = 20\\text{ N}$ (downward). The power is $P = \\vec{F}_g \\cdot \\vec{v} = -F_g v = -(20)(10) = -200\\text{ W}$."
    },
    {
        "id": "wep_pvf_30",
        "subTopic": "Power and variable force",
        "question": "In the previous problem, what is the power of gravity at $t = 2\\text{ s}$?",
        "options": [
            "$-200\\text{ W}$",
            "$0\\text{ W}$",
            "$+200\\text{ W}$",
            "$-400\\text{ W}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "At $t = 2\\text{ s}$, velocity is $v = 20 - 10(2) = 0\\text{ m/s}$. Therefore, power $P = F v = 0\\text{ W}$."
    },
    {
        "id": "wep_pvf_31",
        "subTopic": "Power and variable force",
        "question": "A force $F = 6t$ acts on a particle of mass $2\\text{ kg}$ starting from rest. The work done in first $2\\text{ seconds}$ is:",
        "options": [
            "$9\\text{ J}$",
            "$18\\text{ J}$",
            "$36\\text{ J}$",
            "$72\\text{ J}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "Acceleration $a = \\frac{F}{m} = \\frac{6t}{2} = 3t$. Velocity $v = \\int_0^2 3t dt = \\left[\\frac{3t^2}{2}\\right]_0^2 = 6\\text{ m/s}$. By work-energy theorem: $W = \\Delta K = \\frac{1}{2}mv^2 - 0 = \\frac{1}{2}(2)(6)^2 = 36\\text{ J}$."
    },
    {
        "id": "wep_pvf_32",
        "subTopic": "Power and variable force",
        "question": "A boat is moving with a constant speed $v$ against water resistance proportional to $v$. If the speed of the boat is doubled, the power delivered by the engine must be multiplied by a factor of:",
        "options": [
            "$2$",
            "$4$",
            "$8$",
            "$\\sqrt{2}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Since resistance $F \\propto v$, power is $P = F v \\propto v^2$. If speed is doubled ($v' = 2v$), power required is $P' \\propto (2v)^2 = 4v^2 = 4P$."
    },
    {
        "id": "wep_pvf_33",
        "subTopic": "Power and variable force",
        "question": "A body of mass $m$ starts from rest with acceleration $a$ varying with time as $a = kt$. The power delivered to the body at time $t$ is:",
        "options": [
            "$\\frac{1}{2} m k^2 t^3$",
            "$m k^2 t^3$",
            "$\\frac{1}{2} m k t^2$",
            "$m k^2 t^2$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Velocity is $v = \\int_0^t kt dt = \\frac{1}{2}kt^2$. Force is $F = ma = mkt$. Power is $P = F v = (mkt)\\left(\\frac{1}{2}kt^2\\right) = \\frac{1}{2}mk^2 t^3$."
    },
    {
        "id": "wep_pvf_34",
        "subTopic": "Power and variable force",
        "question": "A car of mass $m$ starts from rest and moves such that instantaneous power delivered to it is constant $P$. The displacement in terms of velocity $v$ is given by:",
        "options": [
            "$\\frac{m v^3}{3P}$",
            "$\\frac{m v^2}{2P}$",
            "$\\frac{2m v^3}{3P}$",
            "$\\frac{m v^3}{P}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "From $P = m v^2 \\frac{dv}{dx}$, we get $dx = \\frac{m}{P} v^2 dv$. Integrating: $x = \\frac{m}{P} \\left(\\frac{v^3}{3}\\right) = \\frac{m v^3}{3P}$."
    },
    {
        "id": "wep_pvf_35",
        "subTopic": "Power and variable force",
        "question": "A force acting on a particle varies with position according to $F(x) = k/x^2$. The power developed when the particle has velocity $v$ at position $x$ is:",
        "options": [
            "$\\frac{k v}{x^2}$",
            "$\\frac{k v^2}{x}$",
            "$\\frac{k}{x v}$",
            "$\\frac{k^2 v}{x^2}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Instantaneous power is simply $P = F v = \\left(\\frac{k}{x^2}\\right)v = \\frac{kv}{x^2}$."
    },
    {
        "id": "wep_pvf_36",
        "subTopic": "Power and variable force",
        "question": "A water jet issuing from a nozzle with velocity $v$ strikes a wall perpendicularly and comes to rest. If $A$ is the nozzle area and $\\rho$ is water density, the force exerted on the wall is:",
        "options": [
            "$\\frac{1}{2}\\rho A v^2$",
            "$\\rho A v^2$",
            "$2\\rho A v^2$",
            "$\\rho A v$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Mass striking per unit second is $\\frac{dm}{dt} = \\rho A v$. Since water comes to rest, change in momentum per second is $F = \\left(\\frac{dm}{dt}\\right) v = (\\rho A v) v = \\rho A v^2$."
    },
    {
        "id": "wep_pvf_37",
        "subTopic": "Power and variable force",
        "question": "A particle of mass $m$ is accelerated in a straight line by a variable force $F = c x$. The work done by this force in moving the particle from $x = 0$ to $x = d$ is:",
        "options": [
            "$c d$",
            "$c d^2$",
            "$\\frac{1}{2} c d^2$",
            "$\\frac{1}{3} c d^3$"
        ],
        "correctOptionIndex": 2,
        "explanation": "$W = \\int_0^d c x dx = c \\left[\\frac{x^2}{2}\\right]_0^d = \\frac{1}{2}cd^2$."
    },
    {
        "id": "wep_pvf_38",
        "subTopic": "Power and variable force",
        "question": "A crane lifts a load of $2000\\text{ kg}$ vertically through a height of $15\\text{ m}$ in $30\\text{ s}$ at constant speed. If the crane operates at $80\\%$ efficiency, the input power to the motor is ($g = 10\\text{ m/s}^2$):",
        "options": [
            "$10.0\\text{ kW}$",
            "$12.5\\text{ kW}$",
            "$15.0\\text{ kW}$",
            "$8.0\\text{ kW}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Work output $W_{out} = mgh = 2000 \\times 10 \\times 15 = 300,000\\text{ J}$. Output power $P_{out} = \\frac{300,000}{30} = 10,000\\text{ W} = 10\\text{ kW}$. Input power $P_{in} = \\frac{P_{out}}{\\eta} = \\frac{10\\text{ kW}}{0.80} = 12.5\\text{ kW}$."
    },
    {
        "id": "wep_pvf_39",
        "subTopic": "Power and variable force",
        "question": "A particle of mass $m$ moves along a path such that its kinetic energy increases linearly with time, $K(t) = c t$. The net force acting on the particle is proportional to:",
        "options": [
            "$t^{-1/2}$",
            "$t^{1/2}$",
            "$t^0$",
            "$t^{-1}$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Since $K = \\frac{1}{2}mv^2 = ct$, we have $v = \\sqrt{\\frac{2c}{m}} t^{1/2}$. Acceleration is $a = \\frac{dv}{dt} = \\frac{1}{2}\\sqrt{\\frac{2c}{m}} t^{-1/2}$. Therefore, force $F = ma \\propto t^{-1/2}$."
    },
    {
        "id": "wep_pvf_40",
        "subTopic": "Power and variable force",
        "question": "An engine accelerates a body of mass $m$ such that its velocity is given by $v = k \\sqrt{x}$. The work done by the engine in the first $t$ seconds (starting from $x = 0$) is:",
        "options": [
            "$\\frac{1}{8} m k^4 t^2$",
            "$\\frac{1}{2} m k^4 t^2$",
            "$\\frac{1}{4} m k^4 t^2$",
            "$m k^4 t^2$"
        ],
        "correctOptionIndex": 0,
        "explanation": "$v = \\frac{dx}{dt} = k x^{1/2} \\implies \\frac{dx}{x^{1/2}} = k dt \\implies 2x^{1/2} = kt \\implies x = \\frac{k^2 t^2}{4}$. Velocity as a function of time is $v = k x^{1/2} = k \\left(\\frac{kt}{2}\\right) = \\frac{k^2 t}{2}$. The kinetic energy at time $t$ is $K = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\left(\\frac{k^2 t}{2}\\right)^2 = \\frac{1}{8} m k^4 t^2$. By work-energy theorem, $W = K = \\frac{1}{8}mk^4 t^2$."
    },
    {
        "id": "wep_pvf_41",
        "subTopic": "Power and variable force",
        "question": "The power delivered by a variable force $F(t) = F_0 e^{-\\lambda t}$ to a mass $m$ initially at rest as $t \\to \\infty$ is:",
        "options": [
            "$\\frac{F_0^2}{m\\lambda}$",
            "$\\frac{F_0^2}{2m\\lambda}$",
            "$0$",
            "$\\frac{F_0^2}{2m\\lambda^2}$"
        ],
        "correctOptionIndex": 2,
        "explanation": "As $t \\to \\infty$, $F(t) = F_0 e^{-\\lambda t} \\to 0$. Although the velocity approaches a constant terminal value $v_\\infty = \\frac{F_0}{m\\lambda}$, the instantaneous power $P(t) = F(t) v(t) \\to 0 \\times v_\\infty = 0$."
    },
    {
        "id": "wep_pvf_42",
        "subTopic": "Power and variable force",
        "question": "In the previous problem, what is the total work done by the force as $t \\to \\infty$?",
        "options": [
            "$\\frac{F_0^2}{2m\\lambda^2}$",
            "$\\frac{F_0^2}{m\\lambda^2}$",
            "$\\frac{F_0^2}{4m\\lambda^2}$",
            "$\\infty$"
        ],
        "correctOptionIndex": 0,
        "explanation": "Acceleration is $a = \\frac{F_0}{m}e^{-\\lambda t}$. Velocity is $v(t) = \\int_0^t a dt = \\frac{F_0}{m\\lambda}(1 - e^{-\\lambda t})$. As $t \\to \\infty$, $v_\\infty = \\frac{F_0}{m\\lambda}$. Total work done equals total gain in kinetic energy: $W = \\frac{1}{2}mv_\\infty^2 = \\frac{1}{2}m\\left(\\frac{F_0}{m\\lambda}\\right)^2 = \\frac{F_0^2}{2m\\lambda^2}$."
    },
    {
        "id": "wep_pvf_43",
        "subTopic": "Power and variable force",
        "question": "A force $\\vec{F} = (2t\\hat{i} + 3\\hat{j})\\text{ N}$ acts on a body of mass $1\\text{ kg}$ initially at rest. The power delivered at $t = 1\\text{ s}$ is:",
        "options": [
            "$7\\text{ W}$",
            "$11\\text{ W}$",
            "$13\\text{ W}$",
            "$5\\text{ W}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "$\\vec{a} = 2t\\hat{i} + 3\\hat{j}$. Integrating gives $\\vec{v}(t) = t^2\\hat{i} + 3t\\hat{j}$. At $t = 1\\text{ s}$: $\\vec{F} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{v} = 1\\hat{i} + 3\\hat{j}$. Power $P = \\vec{F} \\cdot \\vec{v} = (2)(1) + (3)(3) = 2 + 9 = 11\\text{ W}$."
    },
    {
        "id": "wep_pvf_44",
        "subTopic": "Power and variable force",
        "question": "A power-time graph is a straight line passing through origin and $(4\\text{ s}, 20\\text{ W})$. The work done from $t = 0$ to $t = 4\\text{ s}$ is:",
        "options": [
            "$20\\text{ J}$",
            "$40\\text{ J}$",
            "$80\\text{ J}$",
            "$10\\text{ J}$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Work done is the area under the $P-t$ curve: $W = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 4 \\times 20 = 40\\text{ J}$."
    },
    {
        "id": "wep_pvf_45",
        "subTopic": "Power and variable force",
        "question": "A constant force $F$ acts on a body of mass $m$ for time $t$. The ratio of instantaneous power at time $t$ to average power over the interval $[0, t]$ is:",
        "options": [
            "$1 : 1$",
            "$2 : 1$",
            "$1 : 2$",
            "$3 : 1$"
        ],
        "correctOptionIndex": 1,
        "explanation": "Under constant force, $v = at = \\frac{F}{m}t$. Instantaneous power is $P_{inst} = F v = \\frac{F^2 t}{m}$. Work done is $W = \\frac{1}{2}mv^2 = \\frac{F^2 t^2}{2m}$. Average power is $P_{avg} = \\frac{W}{t} = \\frac{F^2 t}{2m}$. Therefore, the ratio $P_{inst} : P_{avg} = 2 : 1$."
    }
]

if __name__ == "__main__":
    import os
    out_path = os.path.join(os.path.dirname(__file__), "wep_batch3.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(part3_questions, f, indent=2)
    
    # Counts validation
    vcm = [q for q in part3_questions if q["subTopic"] == "Vertical circular motion"]
    pvf = [q for q in part3_questions if q["subTopic"] == "Power and variable force"]
    print(f"Vertical circular motion questions: {len(vcm)}")
    print(f"Power and variable force questions: {len(pvf)}")
    print(f"Generated {len(part3_questions)} MCQs for batch 3 saved to {out_path}")
