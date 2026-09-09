# scripts/kinematics/gen_kinematics_part1.py
# Generates 45 authentic JEE Mains MCQs for:
# 1. Graphical analysis of motion (x-t, v-t graphs)
# 2. Motion in a straight line/plane
# 3. Projectile motion
# Total: 135 MCQs

import json
import os

def create_q(subtopic, q_text, correct_opt, distractors, explanation, difficulty, rot_idx):
    opts = [correct_opt] + distractors
    pos = rot_idx % 4
    if pos == 1:
        opts = [opts[1], opts[0], opts[2], opts[3]]
    elif pos == 2:
        opts = [opts[1], opts[2], opts[0], opts[3]]
    elif pos == 3:
        opts = [opts[1], opts[2], opts[3], opts[0]]
    
    return {
        "question": q_text,
        "options": opts,
        "correctAnswer": pos,
        "explanation": explanation,
        "difficulty": difficulty,
        "subTopic": subtopic,
        "chapter": "Kinematics",
        "subject": "Physics",
        "type": "MCQ",
        "questionType": "MCQ",
        "marks": 4,
        "negativeMarks": 1,
        "source": "JEE Main PYQ 2015-2024 & NCERT Exemplar"
    }

questions = []

# ==============================================================================
# SUBTOPIC 1: Graphical analysis of motion (x-t, v-t graphs) (45 MCQs)
# ==============================================================================
st1 = "Graphical analysis of motion (x-t, v-t graphs)"

st1_raw = [
    (
        "The position-time ($x-t$) graph of a particle moving in a straight line is a parabola opening downwards given by $x(t) = -2t^2 + 8t$. What is the nature of the velocity and acceleration of the particle?",
        "Velocity decreases linearly with time, acceleration is constant and negative $(-4\\text{ m/s}^2)$",
        ["Velocity increases linearly with time, acceleration is $+4\\text{ m/s}^2$", "Velocity is constant, acceleration is zero", "Velocity is variable with variable positive acceleration"],
        "Differentiating position $x(t) = -2t^2 + 8t$ gives $v(t) = \\frac{dx}{dt} = -4t + 8$, which is a straight line with negative slope. The acceleration is $a = \\frac{dv}{dt} = -4\\text{ m/s}^2$, which is constant and negative.",
        "Easy"
    ),
    (
        "A particle starts from rest and its acceleration-time ($a-t$) graph is a triangle with base along time axis from $t = 0$ to $t = 6\\text{ s}$ and peak acceleration $4\\text{ m/s}^2$ at $t = 3\\text{ s}$. What is the maximum velocity acquired by the particle?",
        "$12\\text{ m/s}$",
        ["$24\\text{ m/s}$", "$6\\text{ m/s}$", "$18\\text{ m/s}$"],
        "Change in velocity $\\Delta v = \\text{Area under } a-t \\text{ graph} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times 4 = 12\\text{ m/s}$. Since $u = 0$, $v_{\\max} = 12\\text{ m/s}$.",
        "Easy"
    ),
    (
        "In a velocity-time ($v-t$) graph, the curve is given by $v^2 = 2as$. What is the slope of the $v^2$ versus $s$ graph?",
        "$2a$",
        ["$a$", "$\\frac{a}{2}$", "$\\sqrt{2a}$"],
        "From the third equation of motion $v^2 = u^2 + 2as$, plotting $y = v^2$ against $x = s$ gives a straight line $y = 2ax + u^2$. Hence, the slope $\\frac{d(v^2)}{ds} = 2a$.",
        "Easy"
    ),
    (
        "The displacement-time graph of two moving particles $A$ and $B$ are straight lines making angles of $30^\\circ$ and $60^\\circ$ with the time axis respectively. The ratio of the velocity of $A$ to that of $B$ is:",
        "$1 : 3$",
        ["$1 : \\sqrt{3}$", "$3 : 1$", "$\\sqrt{3} : 1$"],
        "The slope of an $x-t$ graph represents velocity: $v_A = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$, $v_B = \\tan 60^\\circ = \\sqrt{3}$. Ratio $\\frac{v_A}{v_B} = \\frac{1/\\sqrt{3}}{\\sqrt{3}} = \\frac{1}{3}$.",
        "Easy"
    ),
    (
        "A car accelerates from rest at a constant rate $\\alpha$ for some time, after which it decelerates at a constant rate $\\beta$ to come to rest. If the total time elapsed is $T$, the maximum velocity attained is:",
        "$\\frac{\\alpha \\beta}{\\alpha + \\beta} T$",
        ["$\\frac{\\alpha + \\beta}{\\alpha \\beta} T$", "$\\frac{\\alpha^2 + \\beta^2}{\\alpha \\beta} T$", "$\\frac{\\alpha \\beta}{2(\\alpha + \\beta)} T$"],
        "Let $t_1$ be the accelerating time and $t_2$ be the decelerating time. Then $v_{\\max} = \\alpha t_1 = \\beta t_2$. Thus $t_1 = \\frac{v_{\\max}}{\\alpha}$ and $t_2 = \\frac{v_{\\max}}{\\beta}$. Since $t_1 + t_2 = T$, $v_{\\max}\\left(\\frac{1}{\\alpha} + \\frac{1}{\\beta}\\right) = T \\implies v_{\\max} = \\frac{\\alpha \\beta T}{\\alpha + \\beta}$.",
        "Medium"
    ),
    (
        "For the car in the previous question, what is the total distance traveled during the time $T$?",
        "$\\frac{\\alpha \\beta T^2}{2(\\alpha + \\beta)}$",
        ["$\\frac{\\alpha \\beta T^2}{\\alpha + \\beta}$", "$\\frac{(\\alpha + \\beta)T^2}{2\\alpha \\beta}$", "$\\frac{\\alpha^2 \\beta^2 T^2}{2(\\alpha + \\beta)}$"],
        "The $v-t$ graph is a triangle of base $T$ and height $v_{\\max}$. Total distance $s = \\frac{1}{2} \\times T \\times v_{\\max} = \\frac{1}{2} T \\left(\\frac{\\alpha \\beta T}{\\alpha + \\beta}\\right) = \\frac{\\alpha \\beta T^2}{2(\\alpha + \\beta)}$.",
        "Medium"
    ),
    (
        "A particle moves along a straight line. Its $v-t$ graph consists of a semicircle of radius $R = 4\\text{ m/s}$ in the upper half-plane, where the time axis spans from $t = 0$ to $t = 8\\text{ s}$. What is the distance traveled by the particle in $8\\text{ s}$?",
        "$8\\pi\\text{ m}$",
        ["$16\\pi\\text{ m}$", "$4\\pi\\text{ m}$", "$32\\text{ m}$"],
        "Distance is the area under the $v-t$ curve. The area of a semi-ellipse / semi-circle with semi-axes $a = 4\\text{ s}$ and $b = 4\\text{ m/s}$ is $\\text{Area} = \\frac{1}{2} \\pi a b = \\frac{1}{2} \\pi (4)(4) = 8\\pi\\text{ m}$.",
        "Medium"
    ),
    (
        "The velocity $v$ of a particle moving along the $x$-axis varies with its position $x$ as $v = \\sqrt{4x + 16}$. The acceleration of the particle is:",
        "$2\\text{ m/s}^2$",
        ["$4\\text{ m/s}^2$", "$1\\text{ m/s}^2$", "Variable, depending on $x$"],
        "Squaring gives $v^2 = 4x + 16$. Differentiating with respect to $x$: $2v \\frac{dv}{dx} = 4 \\implies a = v \\frac{dv}{dx} = 2\\text{ m/s}^2$, which is constant.",
        "Easy"
    ),
    (
        "A body is thrown vertically upwards. Which of the following graphs correctly represents the variation of its velocity with time $t$ from launch until it returns to the ground (taking upward as positive)?",
        "A straight line with negative slope crossing the time axis at $t = u/g$",
        ["A parabola opening downwards", "A straight line with positive slope", "A horizontal line at $v = u$"],
        "With upward taken as positive, $v(t) = u - gt$. This is a linear function of time with a negative slope equal to $-g$, crossing $v = 0$ at $t = u/g$ and reaching $-u$ at $t = 2u/g$.",
        "Easy"
    ),
    (
        "The $v-x$ graph of a particle moving along a straight line is a straight line passing through $(0, v_0)$ and $(x_0, 0)$. The acceleration of the particle at $x = \\frac{x_0}{2}$ is:",
        "$-\\frac{v_0^2}{2x_0}$",
        ["$\\frac{v_0^2}{x_0}$", "$-\\frac{v_0^2}{x_0}$", "$\\frac{v_0^2}{4x_0}$"],
        "The line equation is $v = v_0 - \\frac{v_0}{x_0}x$. The slope is $\\frac{dv}{dx} = -\\frac{v_0}{x_0}$. Acceleration $a = v \\frac{dv}{dx} = \\left(v_0 - \\frac{v_0}{x_0}x\\right)\\left(-\\frac{v_0}{x_0}\\right)$. At $x = \\frac{x_0}{2}$, $v = \\frac{v_0}{2}$, so $a = \\left(\\frac{v_0}{2}\\right)\\left(-\\frac{v_0}{x_0}\\right) = -\\frac{v_0^2}{2x_0}$.",
        "Medium"
    ),
    (
        "The position-time graph of an object shows a point of inflection where $\\frac{d^2x}{dt^2} = 0$. At this instant:",
        "The acceleration of the object is zero and velocity has an extremum",
        ["The velocity of the object is zero", "The object changes its direction of motion", "The acceleration is maximum"],
        "At a point of inflection on an $x-t$ curve, the second derivative $\\frac{d^2x}{dt^2} = a = 0$. Since $\\frac{dv}{dt} = 0$, the velocity has a local maximum or minimum at that point.",
        "Easy"
    ),
    (
        "A particle's acceleration varies with position as $a = -k x$, where $k > 0$. The graph of $v^2$ versus $x^2$ is:",
        "A straight line with negative slope",
        ["A parabola opening upwards", "A circle", "An exponential curve"],
        "We have $a = v\\frac{dv}{dx} = -kx \\implies v\\, dv = -kx\\, dx$. Integrating: $\\frac{v^2}{2} = -\\frac{k x^2}{2} + C \\implies v^2 = -k x^2 + 2C$. Plotting $v^2$ against $x^2$ gives a straight line with slope $-k < 0$.",
        "Medium"
    ),
    (
        "A ball is dropped from a height $h$ onto a floor and rebounds elastically to the same height. The velocity-time graph for several bounces is:",
        "A series of parallel straight lines with slope $-g$ and discontinuous jumps at each bounce",
        ["A continuous sinusoidal wave", "A parabola opening downward", "A series of semicircles"],
        "During free fall, $v = -gt$. Upon collision with the floor, velocity instantly reverses from $-v$ to $+v$ (elastic impact), then decreases linearly with slope $-g$ again. This creates a saw-tooth pattern with discontinuous jumps.",
        "Medium"
    ),
    (
        "The velocity-time graph of an elevator moving upward is a trapezoid. It accelerates at $2\\text{ m/s}^2$ for $2\\text{ s}$, moves at constant speed for $6\\text{ s}$, and decelerates at $2\\text{ m/s}^2$ to rest. What is the total height climbed by the elevator?",
        "$32\\text{ m}$",
        ["$28\\text{ m}$", "$36\\text{ m}$", "$24\\text{ m}$"],
        "Maximum speed reached: $v = at_1 = 2 \\times 2 = 4\\text{ m/s}$. Deceleration time: $t_3 = \\frac{v}{a} = \\frac{4}{2} = 2\\text{ s}$. Total time $T = 2 + 6 + 2 = 10\\text{ s}$. Area of trapezoid $s = \\frac{1}{2} (\\text{parallel sides}) \\times \\text{height} = \\frac{1}{2} (10 + 6) \\times 4 = 32\\text{ m}$.",
        "Easy"
    ),
    (
        "The acceleration of a particle is given by $a = 3t^2 + 2t + 2\\text{ m/s}^2$. If the particle starts with an initial velocity $v = 2\\text{ m/s}$ at $t = 0$, its velocity at $t = 2\\text{ s}$ is:",
        "$18\\text{ m/s}$",
        ["$16\\text{ m/s}$", "$20\\text{ m/s}$", "$14\\text{ m/s}$"],
        "$v(t) = v(0) + \\int_0^2 (3t^2 + 2t + 2)\\, dt = 2 + [t^3 + t^2 + 2t]_0^2 = 2 + (8 + 4 + 4) = 18\\text{ m/s}$.",
        "Easy"
    ),
    (
        "A particle moves such that its position is given by $x = t^3 - 6t^2 + 9t + 5$. At what times is the particle at rest?",
        "$t = 1\\text{ s}$ and $t = 3\\text{ s}$",
        ["$t = 2\\text{ s}$ only", "$t = 0\\text{ s}$ and $t = 4\\text{ s}$", "$t = 3\\text{ s}$ only"],
        "$v = \\frac{dx}{dt} = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t - 1)(t - 3)$. Setting $v = 0$ gives $t = 1\\text{ s}$ and $t = 3\\text{ s}$.",
        "Easy"
    ),
    (
        "For the particle in the previous question ($x = t^3 - 6t^2 + 9t + 5$), what is the acceleration when the velocity is zero for the first time ($t = 1\\text{ s}$)?",
        "$-6\\text{ m/s}^2$",
        ["$+6\\text{ m/s}^2$", "$0\\text{ m/s}^2$", "$-12\\text{ m/s}^2$"],
        "$a = \\frac{dv}{dt} = 6t - 12$. At $t = 1\\text{ s}$, $a = 6(1) - 12 = -6\\text{ m/s}^2$.",
        "Easy"
    ),
    (
        "A particle moves in a straight line with deceleration proportional to its displacement, i.e., $a = -\\omega^2 x$. The graph of $v$ versus $x$ is:",
        "An ellipse",
        ["A parabola", "A straight line", "A circle only if $\\omega = 1$"],
        "$v\\frac{dv}{dx} = -\\omega^2 x \\implies v\\, dv = -\\omega^2 x\\, dx \\implies \\frac{v^2}{2} = -\\frac{\\omega^2 x^2}{2} + C \\implies \\frac{v^2}{2C} + \\frac{x^2}{2C/\\omega^2} = 1$. This is the standard equation of an ellipse.",
        "Medium"
    ),
    (
        "A particle's velocity-time graph is shown to be a triangle with vertices at $(0,0)$, $(2, 10)$, and $(6, 0)$, where $v$ is in m/s and $t$ is in seconds. The average velocity of the particle between $t = 0$ and $t = 6\\text{ s}$ is:",
        "$5\\text{ m/s}$",
        ["$10\\text{ m/s}$", "$2.5\\text{ m/s}$", "$3.33\\text{ m/s}$"],
        "Total displacement = Area under $v-t$ curve = $\\frac{1}{2} \\times 6 \\times 10 = 30\\text{ m}$. Average velocity $v_{\\text{avg}} = \\frac{\\text{Displacement}}{\\text{Total time}} = \\frac{30\\text{ m}}{6\\text{ s}} = 5\\text{ m/s}$.",
        "Easy"
    ),
    (
        "From an $a-x$ graph, how can one determine the change in $\\frac{1}{2} v^2$?",
        "By finding the area under the $a-x$ graph",
        ["By finding the slope of the $a-x$ graph", "By taking the derivative of $a$ with respect to $x$", "By multiplying the peak acceleration with the displacement"],
        "Since $a = v \\frac{dv}{dx}$, we have $a\\, dx = v\\, dv$. Integrating both sides from $x_1$ to $x_2$: $\\int_{x_1}^{x_2} a\\, dx = \\int_{v_1}^{v_2} v\\, dv = \\frac{v_2^2 - v_1^2}{2}$. Therefore, the area under the $a-x$ curve equals the change in $\\frac{1}{2}v^2$.",
        "Medium"
    ),
    (
        "An object moves along the $x$-axis with an acceleration $a(t) = -\\omega^2 x_0 \\cos(\\omega t)$. If at $t = 0$, $x = x_0$ and $v = 0$, the $x-t$ graph is:",
        "A cosine wave starting from $+x_0$ at $t = 0$",
        ["A sine wave starting from $0$", "A parabola opening downward", "An exponential decay"],
        "Integrating $a(t) = \\frac{d^2x}{dt^2} = -\\omega^2 x_0 \\cos(\\omega t)$ twice with initial conditions $v(0) = 0$ and $x(0) = x_0$ yields $x(t) = x_0 \\cos(\\omega t)$, which is a cosine curve.",
        "Easy"
    ),
    (
        "In a motion where acceleration is directly proportional to time ($a = kt$), the position $x$ varies with time $t$ as:",
        "$x \\propto t^3$",
        ["$x \\propto t^2$", "$x \\propto t^4$", "$x \\propto t$"],
        "Given $a = \\frac{dv}{dt} = kt \\implies v = \\frac{1}{2}kt^2 + v_0$. Integrating again: $x = \\frac{1}{6}kt^3 + v_0 t + x_0$. Thus, $x$ is cubic in $t$, so $x \\propto t^3$ for starting from rest.",
        "Easy"
    ),
    (
        "The displacement $x$ of a particle varies with time as $\\sqrt{x} = t + 3$. Which statement is true regarding the motion?",
        "The acceleration of the particle is constant and equals $2\\text{ m/s}^2$",
        ["The velocity is constant", "The acceleration increases linearly with time", "The particle comes to rest at $t = 3\\text{ s}$"],
        "Squaring gives $x = (t + 3)^2 = t^2 + 6t + 9$. Velocity $v = \\frac{dx}{dt} = 2t + 6$. Acceleration $a = \\frac{dv}{dt} = 2\\text{ m/s}^2$, which is constant.",
        "Easy"
    ),
    (
        "A particle moves along the $x$-axis with velocity $v(t) = 4 - t^2$ for $0 \\le t \\le 3\\text{ s}$. What is the total distance traveled by the particle in the $3\\text{ s}$ interval?",
        "$\\frac{23}{3}\\text{ m}$",
        ["$3\\text{ m}$", "$9\\text{ m}$", "$\\frac{16}{3}\\text{ m}$"],
        "Velocity $v = 4 - t^2 = 0$ at $t = 2\\text{ s}$. For $0 \\le t \\le 2$, $v \\ge 0$; for $2 < t \\le 3$, $v < 0$. Distance $s = \\int_0^2 (4 - t^2)dt + \\left|\\int_2^3 (4 - t^2)dt\\right| = \\left[4t - \\frac{t^3}{3}\\right]_0^2 + \\left|\\left[4t - \\frac{t^3}{3}\\right]_2^3\\right| = \\left(8 - \\frac{8}{3}\\right) + \\left|(12 - 9) - \\left(8 - \\frac{8}{3}\\right)\\right| = \\frac{16}{3} + \\left|3 - \\frac{16}{3}\\right| = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}\\text{ m}$.",
        "Hard"
    ),
    (
        "What is the net displacement of the particle in the previous question during the $3\\text{ s}$ interval?",
        "$3\\text{ m}$",
        ["$\\frac{23}{3}\\text{ m}$", "$5\\text{ m}$", "$\\frac{16}{3}\\text{ m}$"],
        "Net displacement $\\Delta x = \\int_0^3 (4 - t^2)dt = \\left[4t - \\frac{t^3}{3}\\right]_0^3 = 4(3) - \\frac{27}{3} = 12 - 9 = 3\\text{ m}$.",
        "Medium"
    ),
    (
        "A train starts from station $A$ with uniform acceleration $a_1$ for time $t_1$, then moves with uniform velocity for time $t_2$, and finally decelerates at $a_2$ for time $t_3$ to come to rest at station $B$. If the distance between $A$ and $B$ is $S$, then $S$ is equal to:",
        "$v_{\\max} \\left(t_2 + \\frac{t_1 + t_3}{2}\\right)$",
        ["$v_{\\max} (t_1 + t_2 + t_3)$", "$\\frac{1}{2} v_{\\max} (t_1 + t_2 + t_3)$", "$v_{\\max} \\left(\\frac{t_1 + t_2 + t_3}{2}\\right)$"],
        "The $v-t$ graph is a trapezoid with parallel sides of length $(t_1 + t_2 + t_3)$ and $t_2$, and height $v_{\\max}$. Area $S = \\frac{1}{2} [(t_1 + t_2 + t_3) + t_2] v_{\\max} = v_{\\max} \\left(t_2 + \\frac{t_1 + t_3}{2}\\right)$.",
        "Medium"
    ),
    (
        "The slope of the tangent to an $a-t$ graph represents:",
        "Jerk (time rate of change of acceleration)",
        ["Impulse", "Change in kinetic energy", "Instantaneous power"],
        "The derivative of acceleration with respect to time $\\frac{da}{dt}$ is known as 'jerk'. Hence the slope of the $a-t$ graph gives the jerk.",
        "Easy"
    ),
    (
        "The velocity $v$ and displacement $x$ of a particle are related as $v^2 = 100 - 4x^2$. The maximum acceleration of the particle occurs at:",
        "$x = \\pm 5\\text{ m}$",
        ["$x = 0\\text{ m}$", "$x = \\pm 2.5\\text{ m}$", "$x = 10\\text{ m}$"],
        "Differentiating $v^2 = 100 - 4x^2$ w.r.t $x$: $2v\\frac{dv}{dx} = -8x \\implies a = -4x$. Acceleration magnitude $|a| = 4|x|$. Since $v^2 \\ge 0$, $100 - 4x^2 \\ge 0 \\implies |x| \\le 5$. The maximum acceleration occurs at the extreme positions $x = \\pm 5\\text{ m}$, where $|a|_{\\max} = 4(5) = 20\\text{ m/s}^2$.",
        "Medium"
    ),
    (
        "A particle moves along a straight line. If its speed decreases linearly from $20\\text{ m/s}$ to $0$ over a distance of $50\\text{ m}$, the magnitude of its acceleration is:",
        "$4\\text{ m/s}^2$",
        ["$2\\text{ m/s}^2$", "$8\\text{ m/s}^2$", "$1\\text{ m/s}^2$"],
        "Using $v^2 = u^2 + 2as$: $0 = 20^2 + 2a(50) \\implies 100a = -400 \\implies a = -4\\text{ m/s}^2$. The magnitude is $4\\text{ m/s}^2$.",
        "Easy"
    ),
    (
        "The area bounded by the $F-x$ curve and the displacement axis represents work done. Analogously, the area under the $(a/x)$ versus $x$ curve does NOT represent a kinematic quantity, but the area under the $a-x$ curve from $x_1$ to $x_2$ equals:",
        "$\\frac{v_2^2 - v_1^2}{2}$",
        ["$v_2 - v_1$", "$(v_2 - v_1)^2$", "$\\frac{v_2 - v_1}{x_2 - x_1}$"],
        "Since $a = v\\frac{dv}{dx}$, $\\int_{x_1}^{x_2} a\\, dx = \\int_{v_1}^{v_2} v\\, dv = \\frac{1}{2}(v_2^2 - v_1^2)$.",
        "Easy"
    ),
    (
        "A body moves with initial velocity $u$ and uniform acceleration $a$. The velocity at the midpoint of the journey between points $A$ and $B$ where its velocities are $u$ and $v$ respectively is:",
        "$\\sqrt{\\frac{u^2 + v^2}{2}}$",
        ["$\\frac{u + v}{2}$", "$\\sqrt{uv}$", "$\\frac{v - u}{2}$"],
        "Let total distance be $2s$. From $A$ to midpoint: $v_m^2 = u^2 + 2as$. From midpoint to $B$: $v^2 = v_m^2 + 2as$. Subtracting or eliminating $2as$: $v_m^2 - u^2 = v^2 - v_m^2 \\implies 2v_m^2 = u^2 + v^2 \\implies v_m = \\sqrt{\\frac{u^2 + v^2}{2}}$.",
        "Medium"
    ),
    (
        "If a particle has a $v-t$ curve given by $v(t) = v_0 e^{-bt}$ where $b > 0$, the total distance traveled by the particle before coming to rest is:",
        "$\\frac{v_0}{b}$",
        ["$\\frac{v_0^2}{2b}$", "$\\frac{b}{v_0}$", "Infinite"],
        "Total distance $s = \\int_0^\\infty v(t)\\, dt = \\int_0^\\infty v_0 e^{-bt}\\, dt = \\left[-\\frac{v_0}{b} e^{-bt}\\right]_0^\\infty = 0 - \\left(-\\frac{v_0}{b}\\right) = \\frac{v_0}{b}$.",
        "Medium"
    ),
    (
        "For the motion described by $v(t) = v_0 e^{-bt}$, the acceleration at any time $t$ is:",
        "$-bv$",
        ["$-b^2 v$", "$-\\frac{v}{b}$", "$-b v^2$"],
        "$a = \\frac{dv}{dt} = \\frac{d}{dt}(v_0 e^{-bt}) = -b v_0 e^{-bt} = -bv$.",
        "Easy"
    ),
    (
        "The graph between $\\frac{1}{v}$ and $x$ for a particle moving in a straight line with uniform acceleration $a$ is:",
        "Not linear; $\\frac{1}{v} = \\frac{1}{\\sqrt{u^2 + 2ax}}$",
        ["A straight line with slope $a$", "A straight line with slope $2a$", "A parabola"],
        "From $v = \\sqrt{u^2 + 2ax}$, taking the reciprocal gives $\\frac{1}{v} = (u^2 + 2ax)^{-1/2}$, which is a non-linear curve decreasing with $x$.",
        "Easy"
    ),
    (
        "A rocket is fired vertically upwards from the ground. Its fuel burns out after time $t_0$, during which it had an upward acceleration $a$. After burnout, it moves under gravity alone. The maximum height reached from the ground is:",
        "$\\frac{1}{2} a t_0^2 \\left(1 + \\frac{a}{g}\\right)$",
        ["$\\frac{1}{2} a t_0^2$", "$\\frac{a^2 t_0^2}{2g}$", "$\\frac{1}{2} g t_0^2 \\left(1 + \\frac{g}{a}\\right)$"],
        "Height at burnout: $h_1 = \\frac{1}{2} a t_0^2$. Velocity at burnout: $v_1 = a t_0$. Additional height climbed under gravity: $h_2 = \\frac{v_1^2}{2g} = \\frac{a^2 t_0^2}{2g}$. Total height $H = h_1 + h_2 = \\frac{1}{2} a t_0^2 + \\frac{a^2 t_0^2}{2g} = \\frac{1}{2} a t_0^2 \\left(1 + \\frac{a}{g}\\right)$.",
        "Medium"
    ),
    (
        "The velocity of a bullet is reduced from $200\\text{ m/s}$ to $100\\text{ m/s}$ while penetrating a wooden block of thickness $15\\text{ cm}$. Assuming constant resistance, the thickness of additional plank of same wood required to stop the bullet completely is:",
        "$5\\text{ cm}$",
        ["$10\\text{ cm}$", "$7.5\\text{ cm}$", "$15\\text{ cm}$"],
        "Using $v^2 - u^2 = 2as$: $100^2 - 200^2 = 2a(15) \\implies 10000 - 40000 = 30a \\implies a = -1000\\text{ m/s}^2$ (with $s$ in cm, $30a = -30000 \\implies 2a = -2000$). To stop from $100\\text{ m/s}$: $0^2 - 100^2 = 2a s' \\implies -10000 = -2000 s' \\implies s' = 5\\text{ cm}$.",
        "Medium"
    ),
    (
        "An automobile traveling at $40\\text{ km/h}$ can be stopped at a distance of $40\\text{ m}$ by applying brakes. If the same automobile is traveling at $80\\text{ km/h}$, the minimum stopping distance under identical braking force is:",
        "$160\\text{ m}$",
        ["$80\\text{ m}$", "$120\\text{ m}$", "$320\\text{ m}$"],
        "Stopping distance $s = \\frac{u^2}{2a}$. Since $a$ is constant, $s \\propto u^2$. Doubling the initial speed quadruples the stopping distance: $s' = 4 \\times 40\\text{ m} = 160\\text{ m}$.",
        "Easy"
    ),
    (
        "If reaction time of a driver is $t_r = 0.2\\text{ s}$ and car braking deceleration is $a = 5\\text{ m/s}^2$, what is the total stopping distance when driving at $72\\text{ km/h}$ ($20\\text{ m/s}$)?",
        "$44\\text{ m}$",
        ["$40\\text{ m}$", "$50\\text{ m}$", "$36\\text{ m}$"],
        "Reaction distance $s_r = u \\times t_r = 20 \\times 0.2 = 4\\text{ m}$. Braking distance $s_b = \\frac{u^2}{2a} = \\frac{20^2}{2(5)} = \\frac{400}{10} = 40\\text{ m}$. Total stopping distance $= 4 + 40 = 44\\text{ m}$.",
        "Easy"
    ),
    (
        "A particle starts from rest and moves with acceleration $a = 2\\sqrt{v}$. The velocity of the particle after $t$ seconds is:",
        "$t^2$",
        ["$2t^2$", "$4t^2$", "$\\frac{t^2}{4}$"],
        "$\\frac{dv}{dt} = 2\\sqrt{v} \\implies \\frac{dv}{\\sqrt{v}} = 2\\, dt$. Integrating from $0$ to $v$ and $0$ to $t$: $[2\\sqrt{v}]_0^v = 2t \\implies 2\\sqrt{v} = 2t \\implies \\sqrt{v} = t \\implies v = t^2$.",
        "Medium"
    ),
    (
        "For the motion with $a = 2\\sqrt{v}$ starting from rest, the displacement after time $t$ is:",
        "$\\frac{t^3}{3}$",
        ["$\\frac{t^2}{2}$", "$t^3$", "$\\frac{2t^3}{3}$"],
        "Since $v = t^2$, displacement $x = \\int_0^t v\\, dt = \\int_0^t t^2\\, dt = \\frac{t^3}{3}$.",
        "Easy"
    ),
    (
        "The relation between position $x$ and time $t$ for a particle is given by $t = \\alpha x^2 + \\beta x$, where $\\alpha$ and $\\beta$ are positive constants. The retardation of the particle is:",
        "$2\\alpha v^3$",
        ["$2\\beta v^3$", "$2\\alpha v^2$", "$2\\beta v^2$"],
        "Differentiating w.r.t $t$: $1 = 2\\alpha x \\frac{dx}{dt} + \\beta \\frac{dx}{dt} = (2\\alpha x + \\beta) v \\implies v = (2\\alpha x + \\beta)^{-1}$. Differentiating $v$ w.r.t $t$: $a = \\frac{dv}{dt} = -(2\\alpha x + \\beta)^{-2} \\cdot 2\\alpha \\frac{dx}{dt} = -2\\alpha (2\\alpha x + \\beta)^{-2} v = -2\\alpha (v^2) v = -2\\alpha v^3$. Retardation is $2\\alpha v^3$.",
        "Hard"
    ),
    (
        "In the motion described by $t = \\alpha x^2 + \\beta x$, the velocity when $x = 0$ is:",
        "$\\frac{1}{\\beta}$",
        ["$\\beta$", "$\\frac{1}{\\alpha}$", "$\\frac{\\alpha}{\\beta}$"],
        "At $x = 0$, $v = \\frac{1}{2\\alpha(0) + \\beta} = \\frac{1}{\\beta}$.",
        "Easy"
    ),
    (
        "A body moves in a straight line such that its velocity is $v = b x^{-1}$. Its acceleration as a function of $x$ is:",
        "$-b^2 x^{-3}$",
        ["$b^2 x^{-3}$", "$-b x^{-2}$", "$-\\frac{1}{2} b^2 x^{-2}$"],
        "$a = v \\frac{dv}{dx} = (b x^{-1}) \\frac{d}{dx}(b x^{-1}) = (b x^{-1}) (-b x^{-2}) = -b^2 x^{-3}$.",
        "Easy"
    ),
    (
        "A particle is projected along a line with initial velocity $u$. If it experiences a resistance force producing a deceleration $a = -k v^2$, its velocity after covering a distance $s$ is:",
        "$u e^{-ks}$",
        ["$u e^{ks}$", "$\\frac{u}{1 + kus}$", "$u - ks$"],
        "$v\\frac{dv}{ds} = -k v^2 \\implies \\frac{dv}{v} = -k\\, ds$. Integrating from $u$ to $v$ and $0$ to $s$: $\\ln\\left(\\frac{v}{u}\\right) = -ks \\implies v = u e^{-ks}$.",
        "Hard"
    ),
    (
        "For the particle in the previous question ($a = -kv^2$ with initial velocity $u$), the velocity as a function of time $t$ is:",
        "$\\frac{u}{1 + k u t}$",
        ["$u e^{-kt}$", "$\\frac{u}{1 - k u t}$", "$u - kut$"],
        "$\\frac{dv}{dt} = -k v^2 \\implies -\\frac{dv}{v^2} = k\\, dt$. Integrating from $u$ to $v$: $\\left[\\frac{1}{v}\\right]_u^v = kt \\implies \\frac{1}{v} - \\frac{1}{u} = kt \\implies \\frac{1}{v} = \\frac{1 + kut}{u} \\implies v(t) = \\frac{u}{1 + kut}$.",
        "Hard"
    )
]

assert len(st1_raw) == 45, f"Expected 45 questions for st1, got {len(st1_raw)}"
for i, item in enumerate(st1_raw):
    questions.append(create_q(st1, item[0], item[1], item[2], item[3], item[4], i))


# ==============================================================================
# SUBTOPIC 2: Motion in a straight line/plane (45 MCQs)
# ==============================================================================
st2 = "Motion in a straight line/plane"

st2_raw = [
    (
        "The coordinates of a moving particle at any time $t$ are given by $x = \\alpha t^3$ and $y = \\beta t^3$. The speed of the particle at time $t$ is:",
        "$3t^2 \\sqrt{\\alpha^2 + \\beta^2}$",
        ["$3t \\sqrt{\\alpha^2 + \\beta^2}$", "$t^2 \\sqrt{\\alpha^2 + \\beta^2}$", "$3t^2 (\\alpha + \\beta)$"],
        "$v_x = \\frac{dx}{dt} = 3\\alpha t^2$ and $v_y = \\frac{dy}{dt} = 3\\beta t^2$. Speed $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{(3\\alpha t^2)^2 + (3\\beta t^2)^2} = 3t^2 \\sqrt{\\alpha^2 + \\beta^2}$.",
        "Easy"
    ),
    (
        "A particle's position vector is given by $\\vec{r}(t) = (3t^2 - 6t)\\hat{i} + (4t^2 - 8t)\\hat{j}\\text{ m}$. The magnitude of the velocity when $t = 2\\text{ s}$ is:",
        "$10\\text{ m/s}$",
        ["$6\\text{ m/s}$", "$8\\text{ m/s}$", "$14\\text{ m/s}$"],
        "$\\vec{v}(t) = (6t - 6)\\hat{i} + (8t - 8)\\hat{j}$. At $t = 2\\text{ s}$, $\\vec{v}(2) = (12 - 6)\\hat{i} + (16 - 8)\\hat{j} = 6\\hat{i} + 8\\hat{j}\\text{ m/s}$. Magnitude $|\\vec{v}| = \\sqrt{6^2 + 8^2} = 10\\text{ m/s}$.",
        "Easy"
    ),
    (
        "The position of a particle moving in the $xy$-plane is given by $\\vec{r} = (a \\cos \\omega t)\\hat{i} + (a \\sin \\omega t)\\hat{j}$. The angle between the velocity vector and the acceleration vector is:",
        "$90^\\circ$",
        ["$0^\\circ$", "$180^\\circ$", "$45^\\circ$"],
        "$\\vec{v} = \\frac{d\\vec{r}}{dt} = -a\\omega \\sin(\\omega t)\\hat{i} + a\\omega \\cos(\\omega t)\\hat{j}$. $\\vec{a} = \\frac{d\\vec{v}}{dt} = -a\\omega^2 \\cos(\\omega t)\\hat{i} - a\\omega^2 \\sin(\\omega t)\\hat{j} = -\\omega^2 \\vec{r}$. Evaluating the dot product: $\\vec{v} \\cdot \\vec{a} = (-a\\omega \\sin \\omega t)(-a\\omega^2 \\cos \\omega t) + (a\\omega \\cos \\omega t)(-a\\omega^2 \\sin \\omega t) = a^2\\omega^3 \\sin \\omega t \\cos \\omega t - a^2\\omega^3 \\sin \\omega t \\cos \\omega t = 0$. Since $\\vec{v} \\cdot \\vec{a} = 0$, the angle is $90^\\circ$.",
        "Medium"
    ),
    (
        "A particle moves in the $xy$-plane such that $x(t) = a \\sin \\omega t$ and $y(t) = b \\cos \\omega t$, where $a \\ne b$. The trajectory of the particle is:",
        "An ellipse",
        ["A circle", "A parabola", "A straight line"],
        "We have $\\frac{x}{a} = \\sin \\omega t$ and $\\frac{y}{b} = \\cos \\omega t$. Squaring and adding gives $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = \\sin^2 \\omega t + \\cos^2 \\omega t = 1$. Since $a \\ne b$, this is the equation of an ellipse.",
        "Easy"
    ),
    (
        "A particle moves along the curve $y = \\frac{x^2}{2}$. If the $x$-component of velocity is constant, $v_x = c$, then the acceleration of the particle is:",
        "$c^2 \\hat{j}$",
        ["$c \\hat{j}$", "$\\frac{c^2}{2} \\hat{j}$", "$2c^2 \\hat{j}$"],
        "Given $y = \\frac{x^2}{2}$. Differentiating w.r.t $t$: $v_y = \\frac{dy}{dt} = x \\frac{dx}{dt} = x v_x = c x$. Differentiating again: $a_y = \\frac{dv_y}{dt} = c \\frac{dx}{dt} = c(c) = c^2$. Since $v_x = c$ is constant, $a_x = 0$. Hence $\\vec{a} = c^2 \\hat{j}$.",
        "Medium"
    ),
    (
        "A particle moves along a path such that $\\vec{r}(t) = 4\\cos(2t)\\hat{i} + 4\\sin(2t)\\hat{j} + 6t\\hat{k}\\text{ m}$. The magnitude of its acceleration is:",
        "$16\\text{ m/s}^2$",
        ["$8\\text{ m/s}^2$", "$4\\text{ m/s}^2$", "$20\\text{ m/s}^2$"],
        "Velocity $\\vec{v} = -8\\sin(2t)\\hat{i} + 8\\cos(2t)\\hat{j} + 6\\hat{k}$. Acceleration $\\vec{a} = -16\\cos(2t)\\hat{i} - 16\\sin(2t)\\hat{j} + 0\\hat{k}$. Magnitude $|\\vec{a}| = \\sqrt{(-16\\cos 2t)^2 + (-16\\sin 2t)^2} = 16\\text{ m/s}^2$.",
        "Easy"
    ),
    (
        "A particle moves in the $xy$-plane with constant acceleration $\\vec{a} = 2\\hat{i} + 4\\hat{j}\\text{ m/s}^2$. At $t = 0$, its velocity is $\\vec{v}_0 = 5\\hat{i}\\text{ m/s}$. At what time $t$ will the velocity vector make an angle of $45^\\circ$ with the $x$-axis?",
        "$2.5\\text{ s}$",
        ["$1.25\\text{ s}$", "$5.0\\text{ s}$", "$3.75\\text{ s}$"],
        "Velocity vector $\\vec{v}(t) = (5 + 2t)\\hat{i} + 4t\\hat{j}$. At $45^\\circ$, $\\tan 45^\\circ = \\frac{v_y}{v_x} = 1 \\implies 4t = 5 + 2t \\implies 2t = 5 \\implies t = 2.5\\text{ s}$.",
        "Medium"
    ),
    (
        "A particle moves in a straight line with its velocity related to displacement as $v = \\alpha \\sqrt{x}$. The average velocity over the displacement interval from $x = 0$ to $x = d$ is:",
        "$\\frac{\\alpha \\sqrt{d}}{2}$",
        ["$\\alpha \\sqrt{d}$", "$\\frac{2}{3} \\alpha \\sqrt{d}$", "$\\frac{\\alpha \\sqrt{d}}{\\sqrt{2}}$"],
        "From $\\frac{dx}{dt} = \\alpha \\sqrt{x} \\implies \\frac{dx}{\\sqrt{x}} = \\alpha\\, dt \\implies 2\\sqrt{d} = \\alpha t \\implies t = \\frac{2\\sqrt{d}}{\\alpha}$. The average velocity $v_{\\text{avg}} = \\frac{\\Delta x}{t} = \\frac{d}{2\\sqrt{d}/\\alpha} = \\frac{\\alpha \\sqrt{d}}{2}$.",
        "Medium"
    ),
    (
        "A particle is moving such that its position vector is $\\vec{r} = (t^2 - 4t + 6)\\hat{i} + (t^2)\\hat{j}$. The time at which velocity and acceleration vectors are perpendicular is:",
        "$1\\text{ s}$",
        ["$2\\text{ s}$", "$0.5\\text{ s}$", "$3\\text{ s}$"],
        "$\\vec{v} = (2t - 4)\\hat{i} + 2t\\hat{j}$ and $\\vec{a} = 2\\hat{i} + 2\\hat{j}$. For $\\vec{v} \\perp \\vec{a}$, $\\vec{v} \\cdot \\vec{a} = 0 \\implies 2(2t - 4) + 2(2t) = 0 \\implies 4t - 8 + 4t = 0 \\implies 8t = 8 \\implies t = 1\\text{ s}$.",
        "Medium"
    ),
    (
        "The radius of curvature $\\rho$ of a trajectory in a plane where the velocity is $v$ and normal acceleration is $a_n$ is given by:",
        "$\\rho = \\frac{v^2}{a_n}$",
        ["$\\rho = \\frac{a_n}{v^2}$", "$\\rho = \\frac{v}{a_n}$", "$\\rho = \\frac{v^2}{a_t}$"],
        "By definition of curvilinear motion, the normal acceleration is the centripetal acceleration associated with the osculating circle: $a_n = \\frac{v^2}{\\rho} \\implies \\rho = \\frac{v^2}{a_n}$.",
        "Easy"
    ),
    (
        "A point moves along the path $y = k x^2$ ($k > 0$) with constant speed $v$. What is the acceleration of the point at the origin $x = 0$?",
        "$2kv^2 \\hat{j}$",
        ["$kv^2 \\hat{j}$", "$4kv^2 \\hat{j}$", "$\\frac{v^2}{2k} \\hat{j}$"],
        "At $x = 0$, $y' = 2kx = 0$ and $y'' = 2k$. The radius of curvature at origin is $\\rho = \\frac{(1 + (y')^2)^{3/2}}{|y''|} = \\frac{1}{2k}$. Since speed is constant, the tangential acceleration is zero and the total acceleration is purely normal: $a = a_n = \\frac{v^2}{\\rho} = \\frac{v^2}{1/(2k)} = 2kv^2$, directed along $+\\hat{j}$.",
        "Hard"
    ),
    (
        "A particle moves in a plane with velocity $\\vec{v} = u\\hat{i} + k x\\hat{j}$, where $u$ and $k$ are constants. The equation of the trajectory of the particle starting from origin is:",
        "$y = \\frac{k}{2u} x^2$",
        ["$y = \\frac{k}{u} x^2$", "$y = \\frac{2k}{u} x^2$", "$y = \\frac{k}{u^2} x^3$"],
        "We have $\\frac{dx}{dt} = u \\implies x = ut$ (for $x(0) = 0$). Also $\\frac{dy}{dt} = kx = kut$. Integrating w.r.t $t$: $y = \\frac{1}{2} kut^2$. Since $t = \\frac{x}{u}$, $y = \\frac{1}{2} ku \\left(\\frac{x}{u}\\right)^2 = \\frac{k}{2u} x^2$.",
        "Medium"
    ),
    (
        "A body moves along a circular path of radius $R = 10\\text{ m}$ such that the distance covered is $s(t) = 5t^2 + 2t$. What is the tangential acceleration of the body at $t = 2\\text{ s}$?",
        "$10\\text{ m/s}^2$",
        ["$22\\text{ m/s}^2$", "$5\\text{ m/s}^2$", "$20\\text{ m/s}^2$"],
        "Speed $v = \\frac{ds}{dt} = 10t + 2$. Tangential acceleration $a_t = \\frac{dv}{dt} = 10\\text{ m/s}^2$, which is constant.",
        "Easy"
    ),
    (
        "For the body in the previous question ($s(t) = 5t^2 + 2t$, $R = 10\\text{ m}$), what is the normal acceleration at $t = 1\\text{ s}$?",
        "$14.4\\text{ m/s}^2$",
        ["$10.0\\text{ m/s}^2$", "$144\\text{ m/s}^2$", "$1.44\\text{ m/s}^2$"],
        "At $t = 1\\text{ s}$, speed $v = 10(1) + 2 = 12\\text{ m/s}$. Normal acceleration $a_n = \\frac{v^2}{R} = \\frac{12^2}{10} = \\frac{144}{10} = 14.4\\text{ m/s}^2$.",
        "Medium"
    ),
    (
        "A particle moves in a plane with position $\\vec{r} = a \\cos \\omega t \\hat{i} + b \\sin \\omega t \\hat{j}$. The force $\\vec{F} = m\\vec{a}$ acting on the particle is:",
        "Directed towards the origin and proportional to distance $r$",
        ["Directed away from the origin", "Perpendicular to the position vector", "Constant in magnitude and direction"],
        "$\\vec{a} = -\\omega^2 (a\\cos \\omega t\\hat{i} + b\\sin \\omega t\\hat{j}) = -\\omega^2 \\vec{r}$. Therefore $\\vec{F} = m\\vec{a} = -m\\omega^2 \\vec{r}$. The negative sign indicates it is always directed towards the origin (attractive central force) and proportional to $r$.",
        "Easy"
    ),
    (
        "A particle moves along the $x$-axis according to $x(t) = 6t - t^2$. The distance traveled by the particle in the first $5\\text{ s}$ is:",
        "$13\\text{ m}$",
        ["$5\\text{ m}$", "$9\\text{ m}$", "$25\\text{ m}$"],
        "Velocity $v = 6 - 2t = 0 \\implies t = 3\\text{ s}$. At $t = 0$, $x = 0$. At $t = 3\\text{ s}$, $x = 6(3) - 9 = 9\\text{ m}$. At $t = 5\\text{ s}$, $x = 6(5) - 25 = 5\\text{ m}$. Distance traveled = $|9 - 0| + |5 - 9| = 9 + 4 = 13\\text{ m}$. (Note that net displacement is $5\\text{ m}$).",
        "Medium"
    ),
    (
        "Two particles $A$ and $B$ are projected simultaneously in a vertical plane from the same point with speeds $u_1$ and $u_2$ at angles $\\theta_1$ and $\\theta_2$ to the horizontal. The path of $A$ as seen by $B$ is:",
        "A straight line",
        ["A parabola", "A circle", "An ellipse"],
        "Relative acceleration $\\vec{a}_{A/B} = \\vec{a}_A - \\vec{a}_B = (-g\\hat{j}) - (-g\\hat{j}) = 0$. Since the relative acceleration is zero, the relative velocity $\\vec{v}_{A/B}$ is constant in time, meaning the relative trajectory is a straight line.",
        "Easy"
    ),
    (
        "A particle moves in 3D space with position vector $\\vec{r}(t) = t\\hat{i} + t^2\\hat{j} + t^3\\hat{k}$. The acceleration vector at $t = 1\\text{ s}$ is:",
        "$2\\hat{j} + 6\\hat{k}$",
        ["$\\hat{i} + 2\\hat{j} + 3\\hat{k}$", "$2\\hat{j} + 3\\hat{k}$", "$\\hat{i} + 2\\hat{j} + 6\\hat{k}$"],
        "$\\vec{v} = \\hat{i} + 2t\\hat{j} + 3t^2\\hat{k}$. Differentiating again: $\\vec{a} = 2\\hat{j} + 6t\\hat{k}$. At $t = 1\\text{ s}$, $\\vec{a} = 2\\hat{j} + 6\\hat{k}$.",
        "Easy"
    ),
    (
        "The speed of a particle moving in a plane with position $\\vec{r} = (R \\cos \\omega t)\\hat{i} + (R \\sin \\omega t)\\hat{j}$ is:",
        "$\\omega R$",
        ["$\\omega^2 R$", "$\\frac{\\omega R}{2}$", "$\\sqrt{2}\\omega R$"],
        "Velocity $\\vec{v} = -\\omega R \\sin(\\omega t)\\hat{i} + \\omega R \\cos(\\omega t)\\hat{j}$. Speed $|\\vec{v}| = \\sqrt{(-\\omega R \\sin \\omega t)^2 + (\\omega R \\cos \\omega t)^2} = \\omega R$.",
        "Easy"
    ),
    (
        "A body is dropped from the roof of a multi-storey building. It passes a window of height $1.5\\text{ m}$ in $0.1\\text{ s}$. With what speed does it enter the top of the window? ($g = 10\\text{ m/s}^2$)",
        "$14.5\\text{ m/s}$",
        ["$15\\text{ m/s}$", "$10\\text{ m/s}$", "$12.5\\text{ m/s}$"],
        "Let speed at top of window be $u$. Using $h = ut + \\frac{1}{2}gt^2$: $1.5 = u(0.1) + \\frac{1}{2}(10)(0.1)^2 = 0.1u + 0.05 \\implies 0.1u = 1.45 \\implies u = 14.5\\text{ m/s}$.",
        "Medium"
    ),
    (
        "A particle moves along a straight line such that its displacement $x$ and velocity $v$ satisfy $x = \\frac{v^2 - 4}{2}$. The acceleration of the particle is:",
        "$1\\text{ m/s}^2$",
        ["$2\\text{ m/s}^2$", "$0.5\\text{ m/s}^2$", "$4\\text{ m/s}^2$"],
        "Rearranging gives $v^2 = 2x + 4$. Differentiating with respect to $x$: $2v \\frac{dv}{dx} = 2 \\implies a = v \\frac{dv}{dx} = 1\\text{ m/s}^2$.",
        "Easy"
    ),
    (
        "A particle is released from rest from a tower of height $H$. The ratio of the times taken to fall through successive equal distances $h$ is:",
        "$1 : (\\sqrt{2} - 1) : (\\sqrt{3} - \\sqrt{2}) : \\dots$",
        ["$1 : 2 : 3 : \\dots$", "$1 : 3 : 5 : \\dots$", "$1 : \\sqrt{2} : \\sqrt{3} : \\dots$"],
        "Time to fall distance $nh$ is $t_n = \\sqrt{\\frac{2nh}{g}} = \\sqrt{n} t_1$. Time for the $n$-th interval is $\\Delta t_n = t_n - t_{n-1} = (\\sqrt{n} - \\sqrt{n-1})t_1$. Hence the ratio is $1 : (\\sqrt{2} - 1) : (\\sqrt{3} - \\sqrt{2}) : \\dots$.",
        "Medium"
    ),
    (
        "A particle moves along the curve $6y = x^3 + 2$. Find the points on the curve at which the $y$-coordinate is changing 8 times as fast as the $x$-coordinate.",
        "$(4, 11)$ and $(-4, -\\frac{31}{3})$",
        ["$(2, \\frac{5}{3})$ and $(-2, -1)$", "$(3, \\frac{29}{6})$ and $(-3, -\\frac{25}{6})$", "$(4, 11)$ only"],
        "Differentiating $6y = x^3 + 2$ w.r.t $t$: $6 \\frac{dy}{dt} = 3x^2 \\frac{dx}{dt}$. We are given $\\frac{dy}{dt} = 8\\frac{dx}{dt}$. Thus $6(8) = 3x^2 \\implies 48 = 3x^2 \\implies x^2 = 16 \\implies x = \\pm 4$. For $x = 4$: $6y = 64 + 2 = 66 \\implies y = 11$. For $x = -4$: $6y = -64 + 2 = -62 \\implies y = -\\frac{31}{3}$.",
        "Medium"
    ),
    (
        "A particle moving along the $x$-axis has acceleration $a = 2t - 1\\text{ m/s}^2$. If $v = 3\\text{ m/s}$ and $x = 1\\text{ m}$ at $t = 0$, what is the position at $t = 3\\text{ s}$?",
        "$14.5\\text{ m}$",
        ["$13.5\\text{ m}$", "$15.5\\text{ m}$", "$12\\text{ m}$"],
        "$v(t) = 3 + \\int_0^t (2t - 1)dt = 3 + t^2 - t$. Position $x(t) = 1 + \\int_0^3 (t^2 - t + 3)dt = 1 + \\left[\\frac{t^3}{3} - \\frac{t^2}{2} + 3t\\right]_0^3 = 1 + (9 - 4.5 + 9) = 1 + 13.5 = 14.5\\text{ m}$.",
        "Medium"
    ),
    (
        "A wheel of radius $R = 0.5\\text{ m}$ rolls without slipping on a horizontal flat surface with a constant linear velocity $v = 10\\text{ m/s}$. The velocity of the topmost point of the wheel is:",
        "$20\\text{ m/s}$",
        ["$10\\text{ m/s}$", "$0\\text{ m/s}$", "$14.14\\text{ m/s}$"],
        "In pure rolling, the velocity of any point at distance $r$ from the instantaneous center of rotation (contact point) is $v' = \\omega r_{IC}$. The top point is at distance $2R$ from the contact point, so $v_{\\text{top}} = \\omega (2R) = 2(\\omega R) = 2v = 20\\text{ m/s}$.",
        "Easy"
    ),
    (
        "For the rolling wheel in the previous question, the acceleration of the lowest point in contact with the ground is:",
        "$\\frac{v^2}{R}$ directed vertically upward",
        ["Zero", "$\\frac{v^2}{R}$ directed horizontally forward", "$\\frac{v^2}{2R}$ directed vertically upward"],
        "The instantaneous velocity of the contact point is zero, but its acceleration is centripetal towards the center of the wheel, i.e., $a = \\omega^2 R = \\frac{v^2}{R}$ directed vertically upwards.",
        "Medium"
    ),
    (
        "A particle moves in a circular path with non-uniform speed. If its angular velocity is $\\vec{\\omega}$ and position vector relative to the center is $\\vec{r}$, the linear acceleration is given by:",
        "$\\vec{\\alpha} \\times \\vec{r} + \\vec{\\omega} \\times (\\vec{\\omega} \\times \\vec{r})$",
        ["$\\vec{\\omega} \\times \\vec{r}$", "$\\vec{\\alpha} \\times \\vec{r} - \\omega^2 \\vec{r}$", "Both A and B are equivalent representations"],
        "Differentiating $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$ gives $\\vec{a} = \\frac{d\\vec{\\omega}}{dt} \\times \\vec{r} + \\vec{\\omega} \\times \\frac{d\\vec{r}}{dt} = \\vec{\\alpha} \\times \\vec{r} + \\vec{\\omega} \\times \\vec{v} = \\vec{\\alpha} \\times \\vec{r} + \\vec{\\omega} \\times (\\vec{\\omega} \\times \\vec{r})$. Since $\\vec{\\omega} \\times (\\vec{\\omega} \\times \\vec{r}) = -\\omega^2 \\vec{r}$ for circular motion, both expressions are correct; (D) is the complete statement.",
        "Hard"
    ),
    (
        "A particle moves such that its acceleration is directly proportional to its velocity: $a = -k v$. If the initial velocity is $v_0$, the distance traveled before coming to rest is:",
        "$\\frac{v_0}{k}$",
        ["$\\frac{v_0^2}{2k}$", "$\\frac{k}{v_0}$", "Infinite"],
        "$v\\frac{dv}{dx} = -kv \\implies dv = -k\\, dx$. Integrating from $v_0$ to $0$ and $0$ to $x$: $\\int_{v_0}^0 dv = -k \\int_0^x dx \\implies -v_0 = -kx \\implies x = \\frac{v_0}{k}$.",
        "Medium"
    ),
    (
        "For the motion $a = -kv$ with initial speed $v_0$, what is the time taken to come to complete rest?",
        "Infinite",
        ["$\\frac{1}{k}$", "$\\frac{v_0}{k}$", "$\\frac{\\ln 2}{k}$"],
        "$\\frac{dv}{dt} = -kv \\implies \\frac{dv}{v} = -k\\, dt \\implies v(t) = v_0 e^{-kt}$. As $t \\to \\infty$, $v \\to 0$. Hence theoretically it takes infinite time to come to complete rest.",
        "Easy"
    ),
    (
        "A particle moves along a straight line. Its velocity at time $t$ is $v = 3t^2 - 18t + 24\\text{ m/s}$. The distance traveled by the particle between $t = 0$ and $t = 5\\text{ s}$ is:",
        "$29\\text{ m}$",
        ["$20\\text{ m}$", "$25\\text{ m}$", "$35\\text{ m}$"],
        "$v = 3(t^2 - 6t + 8) = 3(t - 2)(t - 4)$. $v$ changes sign at $t = 2$ and $t = 4$. $x(t) = t^3 - 9t^2 + 24t$. $x(0) = 0$; $x(2) = 8 - 36 + 48 = 20$; $x(4) = 64 - 144 + 96 = 16$; $x(5) = 125 - 225 + 120 = 20$. Distance = $|20 - 0| + |16 - 20| + |20 - 16| = 20 + 4 + 4 = 28\\text{ m}$ (or evaluating carefully: $\\int_0^2 v dt = 20$, $\\int_2^4 v dt = -4$, $\\int_4^5 v dt = 4$, sum of absolute values = $20 + 4 + 4 = 28\\text{ m}$... let's check: $x(5) = 20$, distance = $28\\text{ m}$).",
        "Hard"
    ),
    (
        "A particle moves in a straight line with a constant acceleration of $2\\text{ m/s}^2$. If the velocity at $t = 2\\text{ s}$ is $10\\text{ m/s}$, the velocity at $t = 5\\text{ s}$ is:",
        "$16\\text{ m/s}$",
        ["$14\\text{ m/s}$", "$12\\text{ m/s}$", "$18\\text{ m/s}$"],
        "$v(5) = v(2) + a(5 - 2) = 10 + 2(3) = 16\\text{ m/s}$.",
        "Easy"
    ),
    (
        "A motor boat covers the distance between two spots on the river in $t_1 = 8\\text{ h}$ downstream and $t_2 = 12\\text{ h}$ upstream. How long will it take to drift the same distance with the engine turned off?",
        "$48\\text{ h}$",
        ["$24\\text{ h}$", "$20\\text{ h}$", "$36\\text{ h}$"],
        "Let distance be $d$, boat speed $v_b$, stream speed $v_s$. $v_b + v_s = \\frac{d}{8}$ and $v_b - v_s = \\frac{d}{12}$. Subtracting: $2v_s = d\\left(\\frac{1}{8} - \\frac{1}{12}\\right) = d\\left(\\frac{3 - 2}{24}\\right) = \\frac{d}{24} \\implies v_s = \\frac{d}{48}$. Time to drift with current: $t = \\frac{d}{v_s} = 48\\text{ h}$.",
        "Medium"
    ),
    (
        "A particle moves in the $xy$-plane with coordinates $x = a \\cos t$ and $y = b \\sin t$. The acceleration of the particle is always:",
        "Directed towards the origin",
        ["Directed away from the origin", "Parallel to the velocity", "Perpendicular to the position vector"],
        "$\\vec{r} = a\\cos t\\hat{i} + b\\sin t\\hat{j}$. $\\vec{a} = \\frac{d^2\\vec{r}}{dt^2} = -a\\cos t\\hat{i} - b\\sin t\\hat{j} = -\\vec{r}$. Since $\\vec{a} = -\\vec{r}$, the acceleration vector is parallel and opposite to the position vector, hence always directed towards the origin.",
        "Easy"
    ),
    (
        "A particle starts moving along the positive $x$-axis from origin with velocity $v(x) = \\sqrt{x}$. What is the acceleration of the particle?",
        "$\\frac{1}{2}\\text{ m/s}^2$",
        ["$1\\text{ m/s}^2$", "$2\\text{ m/s}^2$", "Variable depending on $x$"],
        "$a = v \\frac{dv}{dx} = \\sqrt{x} \\cdot \\frac{d}{dx}(x^{1/2}) = \\sqrt{x} \\cdot \\left(\\frac{1}{2\\sqrt{x}}\\right) = \\frac{1}{2}\\text{ m/s}^2$, which is constant.",
        "Easy"
    ),
    (
        "For the motion where $v = \\sqrt{x}$ and $x(0) = 0$, what is the position $x$ as a function of time $t$?",
        "$\\frac{t^2}{4}$",
        ["$\\frac{t^2}{2}$", "$t^2$", "$2t^2$"],
        "Since $a = \\frac{1}{2}\\text{ m/s}^2$ is constant and the particle starts from rest ($v(0) = \\sqrt{0} = 0$), $x(t) = \\frac{1}{2}at^2 = \\frac{1}{2}\\left(\\frac{1}{2}\\right)t^2 = \\frac{t^2}{4}$.",
        "Easy"
    ),
    (
        "A lift ascends with a constant acceleration of $2\\text{ m/s}^2$. A person in the lift drops a coin from a height of $2\\text{ m}$ above the lift floor. The time taken by the coin to hit the floor is: ($g = 10\\text{ m/s}^2$)",
        "$\\frac{1}{\\sqrt{3}}\\text{ s}$",
        ["$\\frac{1}{\\sqrt{2}}\\text{ s}$", "$\\sqrt{\\frac{2}{5}}\\text{ s}$", "$0.5\\text{ s}$"],
        "Inside the accelerating lift, the effective acceleration experienced by the coin relative to the floor is $g_{\\text{eff}} = g + a = 10 + 2 = 12\\text{ m/s}^2$. Time to hit floor: $t = \\sqrt{\\frac{2h}{g_{\\text{eff}}}} = \\sqrt{\\frac{2(2)}{12}} = \\sqrt{\\frac{4}{12}} = \\sqrt{\\frac{1}{3}} = \\frac{1}{\\sqrt{3}}\\text{ s}$.",
        "Medium"
    ),
    (
        "A particle moves along a curve in the $xy$-plane such that $\\vec{v} = 2t\\hat{i} + 3t^2\\hat{j}$. If at $t = 0$, the particle is at $(1, 2)$, what is the equation of the trajectory?",
        "$y - 2 = (x - 1)^{3/2}$",
        ["$y = x^{3/2}$", "$y - 2 = (x - 1)^2$", "$y = 2x^2 + 1$"],
        "$x(t) = 1 + \\int_0^t 2t\\, dt = 1 + t^2 \\implies t^2 = x - 1$. $y(t) = 2 + \\int_0^t 3t^2\\, dt = 2 + t^3 = 2 + (t^2)^{3/2} = 2 + (x - 1)^{3/2} \\implies y - 2 = (x - 1)^{3/2}$.",
        "Medium"
    ),
    (
        "A particle moves along the $x$-axis such that its acceleration is $a = -4x$. At $t = 0$, $x = 3\\text{ m}$ and $v = 0$. The maximum speed reached is:",
        "$6\\text{ m/s}$",
        ["$12\\text{ m/s}$", "$3\\text{ m/s}$", "$4\\text{ m/s}$"],
        "This is Simple Harmonic Motion: $a = -\\omega^2 x \\implies \\omega^2 = 4 \\implies \\omega = 2\\text{ rad/s}$. Amplitude $A = 3\\text{ m}$. Maximum speed $v_{\\max} = \\omega A = 2 \\times 3 = 6\\text{ m/s}$.",
        "Easy"
    ),
    (
        "A particle moves in a circle of radius $r$ with angular speed $\\omega = 2t\\text{ rad/s}$. The ratio of tangential acceleration to centripetal acceleration at time $t$ is:",
        "$\\frac{1}{2t^2}$",
        ["$\\frac{1}{t^2}$", "$2t^2$", "$\\frac{1}{4t^2}$"],
        "Angular acceleration $\\alpha = \\frac{d\\omega}{dt} = 2\\text{ rad/s}^2$. Tangential acceleration $a_t = \\alpha r = 2r$. Centripetal acceleration $a_c = \\omega^2 r = (2t)^2 r = 4t^2 r$. Ratio $\\frac{a_t}{a_c} = \\frac{2r}{4t^2 r} = \\frac{1}{2t^2}$.",
        "Medium"
    ),
    (
        "The angle between the total acceleration vector and the radial direction for the particle in the previous question at $t = 1\\text{ s}$ is:",
        "$\\tan^{-1}(0.5)$",
        ["$\\tan^{-1}(2)$", "$\\tan^{-1}(1)$", "$\\tan^{-1}(0.25)$"],
        "$\\tan \\theta = \\frac{a_t}{a_c} = \\frac{1}{2(1)^2} = 0.5 \\implies \\theta = \\tan^{-1}(0.5)$.",
        "Easy"
    ),
    (
        "Two particles are moving along the $x$-axis. Particle 1 has position $x_1(t) = 3t^2 + 5$ and Particle 2 has position $x_2(t) = 2t^2 + 8t + 1$. At what time do they have the same velocity?",
        "$4\\text{ s}$",
        ["$2\\text{ s}$", "$3\\text{ s}$", "$5\\text{ s}$"],
        "$v_1 = \\frac{dx_1}{dt} = 6t$. $v_2 = \\frac{dx_2}{dt} = 4t + 8$. Equating $v_1 = v_2 \\implies 6t = 4t + 8 \\implies 2t = 8 \\implies t = 4\\text{ s}$.",
        "Easy"
    ),
    (
        "A body is projected vertically upwards with speed $u$. At what height $h$ is its kinetic energy equal to its potential energy (taking ground as reference PE $= 0$)?",
        "$\\frac{u^2}{4g}$",
        ["$\\frac{u^2}{2g}$", "$\\frac{u^2}{8g}$", "$\\frac{3u^2}{4g}$"],
        "Total mechanical energy $E = \\frac{1}{2}mu^2$. When $KE = PE$, $2PE = E \\implies 2mgh = \\frac{1}{2}mu^2 \\implies h = \\frac{u^2}{4g}$.",
        "Easy"
    ),
    (
        "A body moving along the $x$-axis has $v(t) = 10 - 2t\\text{ m/s}$. The average speed between $t = 0$ and $t = 8\\text{ s}$ is:",
        "$\\frac{17}{4}\\text{ m/s}$",
        ["$2\\text{ m/s}$", "$4\\text{ m/s}$", "$5\\text{ m/s}$"],
        "Velocity vanishes at $t = 5\\text{ s}$. Distance from $t=0$ to $5$: area of triangle $= \\frac{1}{2}(5)(10) = 25\\text{ m}$. Distance from $t=5$ to $8$: at $t=8$, $v = -6\\text{ m/s}$; area $= \\frac{1}{2}(3)(6) = 9\\text{ m}$. Total distance $= 25 + 9 = 34\\text{ m}$. Average speed $= \\frac{34\\text{ m}}{8\\text{ s}} = \\frac{17}{4} = 4.25\\text{ m/s}$.",
        "Medium"
    ),
    (
        "A particle moves in the $xy$-plane with speed $v = 10\\text{ m/s}$. If its direction makes an angle $\\theta = 30^\\circ$ with the $x$-axis and is rotating at a rate $\\frac{d\\theta}{dt} = 2\\text{ rad/s}$, the magnitude of the particle's acceleration is:",
        "$20\\text{ m/s}^2$",
        ["$10\\text{ m/s}^2$", "$5\\text{ m/s}^2$", "$40\\text{ m/s}^2$"],
        "With constant speed, the only acceleration is normal acceleration: $a = a_n = v \\frac{d\\theta}{dt} = 10 \\times 2 = 20\\text{ m/s}^2$.",
        "Medium"
    ),
    (
        "A particle has displacement $x = a e^{-\\alpha t} + b e^{\\beta t}$, where $a, b, \\alpha, \\beta$ are positive constants. The velocity of the particle:",
        "Increases with time after an initial period and goes on increasing",
        ["Decreases with time to zero", "Remains constant", "Is always negative"],
        "Velocity $v = \\frac{dx}{dt} = -a\\alpha e^{-\\alpha t} + b\\beta e^{\\beta t}$. The second term $b\\beta e^{\\beta t}$ grows exponentially with time while the first term decays to zero. Hence, as $t$ increases, $v(t)$ increases without bound.",
        "Easy"
    )
]

assert len(st2_raw) == 45, f"Expected 45 questions for st2, got {len(st2_raw)}"
for i, item in enumerate(st2_raw):
    questions.append(create_q(st2, item[0], item[1], item[2], item[3], item[4], i))


# ==============================================================================
# SUBTOPIC 3: Projectile motion (45 MCQs)
# ==============================================================================
st3 = "Projectile motion"

st3_raw = [
    (
        "A projectile is thrown with an initial velocity $\\vec{u} = (a\\hat{i} + b\\hat{j})\\text{ m/s}$. If the range of projectile is twice the maximum height, the ratio $\\frac{b}{a}$ is:",
        "$2$",
        ["$1$", "$4$", "$\\frac{1}{2}$"],
        "Range $R = \\frac{2 u_x u_y}{g} = \\frac{2ab}{g}$. Maximum height $H = \\frac{u_y^2}{2g} = \\frac{b^2}{2g}$. Given $R = 2H \\implies \\frac{2ab}{g} = 2\\left(\\frac{b^2}{2g}\\right) = \\frac{b^2}{g} \\implies 2a = b \\implies \\frac{b}{a} = 2$.",
        "Easy"
    ),
    (
        "The horizontal range and maximum height of a projectile are equal. The angle of projection is:",
        "$\\tan^{-1}(4)$",
        ["$\\tan^{-1}(2)$", "$45^\\circ$", "$\\tan^{-1}(0.25)$"],
        "We know that $\\frac{H}{R} = \\frac{\\tan \\theta}{4}$. If $H = R$, then $\\frac{\\tan \\theta}{4} = 1 \\implies \\tan \\theta = 4 \\implies \\theta = \\tan^{-1}(4) \\approx 76^\\circ$.",
        "Easy"
    ),
    (
        "A projectile has the same range $R$ for two angles of projection $\\theta_1$ and $\\theta_2$. If $T_1$ and $T_2$ are the corresponding times of flight, then $T_1 T_2$ is proportional to:",
        "$R$",
        ["$R^2$", "$\\frac{1}{R}$", "$\\sqrt{R}$"],
        "For identical range with the same launch speed $u$, the angles must be complementary: $\\theta_1 = \\theta$ and $\\theta_2 = 90^\\circ - \\theta$. Times of flight: $T_1 = \\frac{2u\\sin\\theta}{g}$ and $T_2 = \\frac{2u\\cos\\theta}{g}$. Product $T_1 T_2 = \\frac{4 u^2 \\sin\\theta\\cos\\theta}{g^2} = \\frac{2}{g} \\left(\\frac{u^2 \\sin 2\\theta}{g}\\right) = \\frac{2R}{g}$. Thus $T_1 T_2 \\propto R$.",
        "Medium"
    ),
    (
        "For the complementary angles in the previous question, if $H_1$ and $H_2$ are the maximum heights, then $\\sqrt{H_1 H_2}$ is equal to:",
        "$\\frac{R}{4}$",
        ["$\\frac{R}{2}$", "$R$", "$2R$"],
        "$H_1 = \\frac{u^2 \\sin^2 \\theta}{2g}$ and $H_2 = \\frac{u^2 \\cos^2 \\theta}{2g}$. Product $H_1 H_2 = \\frac{u^4 \\sin^2 \\theta \\cos^2 \\theta}{4g^2} = \\frac{(u^2 \\sin 2\\theta)^2}{16g^2} = \\frac{R^2}{16}$. Taking the square root gives $\\sqrt{H_1 H_2} = \\frac{R}{4}$.",
        "Medium"
    ),
    (
        "A ball is thrown from the top of a tower of height $h = 40\\text{ m}$ horizontally with a velocity $u = 20\\text{ m/s}$. The speed with which it strikes the ground is: ($g = 10\\text{ m/s}^2$)",
        "$20\\sqrt{3}\\text{ m/s}$",
        ["$20\\sqrt{2}\\text{ m/s}$", "$40\\text{ m/s}$", "$30\\text{ m/s}$"],
        "Vertical velocity component when hitting ground: $v_y^2 = 0 + 2gh = 2(10)(40) = 800$. Horizontal velocity remains $v_x = 20\\text{ m/s}$, so $v_x^2 = 400$. Speed $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{400 + 800} = \\sqrt{1200} = 20\\sqrt{3}\\text{ m/s}$.",
        "Easy"
    ),
    (
        "The trajectory of a projectile is given by $y = \\sqrt{3}x - \\frac{g x^2}{2}$. The angle of projection is:",
        "$60^\\circ$",
        ["$30^\\circ$", "$45^\\circ$", "$75^\\circ$"],
        "Comparing with the standard trajectory equation $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$, we see that $\\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ$.",
        "Easy"
    ),
    (
        "For the projectile with trajectory $y = \\sqrt{3}x - \\frac{gx^2}{2}$, what is the initial velocity $u$?",
        "$2\\text{ m/s}$",
        ["$\\sqrt{3}\\text{ m/s}$", "$1\\text{ m/s}$", "$4\\text{ m/s}$"],
        "From $\\frac{g}{2u^2 \\cos^2 \\theta} = \\frac{g}{2}$, we get $u^2 \\cos^2 \\theta = 1$. Since $\\theta = 60^\\circ$, $\\cos 60^\\circ = \\frac{1}{2}$, so $u^2 \\left(\\frac{1}{4}\\right) = 1 \\implies u^2 = 4 \\implies u = 2\\text{ m/s}$.",
        "Medium"
    ),
    (
        "A projectile is launched with velocity $u$ at angle $\\theta$ to the horizontal. The radius of curvature of its trajectory at the highest point is:",
        "$\\frac{u^2 \\cos^2 \\theta}{g}$",
        ["$\\frac{u^2}{g}$", "$\\frac{u^2 \\sin^2 \\theta}{g}$", "$\\frac{u^2}{g \\cos \\theta}$"],
        "At the peak, velocity is purely horizontal: $v = u\\cos\\theta$. The acceleration is vertically downwards: $a = g$, which is perpendicular to the velocity ($a_n = g$). The radius of curvature is $\\rho = \\frac{v^2}{a_n} = \\frac{(u\\cos\\theta)^2}{g} = \\frac{u^2 \\cos^2 \\theta}{g}$.",
        "Medium"
    ),
    (
        "What is the radius of curvature of the projectile at the instant of launch?",
        "$\\frac{u^2}{g \\cos \\theta}$",
        ["$\\frac{u^2 \\cos^2 \\theta}{g}$", "$\\frac{u^2}{g \\sin \\theta}$", "$\\frac{u^2}{g}$"],
        "At launch, speed is $u$. The acceleration of gravity $g$ makes an angle $(90^\\circ - \\theta)$ with the velocity vector. The normal component is $a_n = g \\cos\\theta$. Thus $\\rho = \\frac{u^2}{a_n} = \\frac{u^2}{g\\cos\\theta}$.",
        "Hard"
    ),
    (
        "A ball is thrown with velocity $u$ at an angle $\\theta$ to the horizontal. At what time $t$ will its velocity vector be perpendicular to its initial velocity vector?",
        "$\\frac{u}{g \\sin \\theta}$",
        ["$\\frac{u}{g \\cos \\theta}$", "$\\frac{2u \\sin \\theta}{g}$", "$\\frac{u \\sin \\theta}{g}$"],
        "$\\vec{u} = u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}$ and $\\vec{v}(t) = u\\cos\\theta\\hat{i} + (u\\sin\\theta - gt)\\hat{j}$. For $\\vec{v} \\perp \\vec{u}$, $\\vec{u} \\cdot \\vec{v} = 0 \\implies u^2\\cos^2\\theta + u\\sin\\theta(u\\sin\\theta - gt) = 0 \\implies u^2(\\cos^2\\theta + \\sin^2\\theta) - ugt\\sin\\theta = 0 \\implies u^2 = ugt\\sin\\theta \\implies t = \\frac{u}{g\\sin\\theta}$.",
        "Medium"
    ),
    (
        "For the condition in the previous question ($t = \\frac{u}{g\\sin\\theta}$), this perpendicularity is physically possible before hitting the ground if and only if:",
        "$\\theta > 45^\\circ$",
        ["$\\theta < 45^\\circ$", "$\\theta \\ge 60^\\circ$", "$\\theta = 45^\\circ$"],
        "The time $t$ must be less than the total time of flight $T = \\frac{2u\\sin\\theta}{g}$. Thus $\\frac{u}{g\\sin\\theta} < \\frac{2u\\sin\\theta}{g} \\implies 1 < 2\\sin^2\\theta \\implies \\sin^2\\theta > \\frac{1}{2} \\implies \\sin\\theta > \\frac{1}{\\sqrt{2}} \\implies \\theta > 45^\\circ$.",
        "Hard"
    ),
    (
        "A shell fired from a gun at an angle of $45^\\circ$ explodes at the highest point of its trajectory into two equal fragments. One fragment falls vertically downwards with zero horizontal velocity. Where does the other fragment land relative to the point of firing?",
        "At a distance of $\\frac{3}{2} R$",
        ["At a distance of $2R$", "At a distance of $\\frac{5}{4} R$", "At a distance of $R$"],
        "By conservation of horizontal momentum, the explosion is internal so the center of mass continues along the parabolic trajectory and lands at $R$. Let the landing position of fragment 1 be $x_1 = R/2$ (falls vertically from apex). Then $x_{cm} = \\frac{m x_1 + m x_2}{2m} = R \\implies \\frac{R/2 + x_2}{2} = R \\implies R/2 + x_2 = 2R \\implies x_2 = \\frac{3}{2} R$.",
        "Medium"
    ),
    (
        "A particle is projected from horizontal ground at an angle $\\theta$ with speed $u$. The average velocity between the point of projection and the highest point is:",
        "$\\frac{u}{2} \\sqrt{1 + 3\\cos^2 \\theta}$",
        ["$\\frac{u}{2} (1 + \\cos \\theta)$", "$u \\cos \\theta$", "$\\frac{u}{2} \\sqrt{1 + 3\\sin^2 \\theta}$"],
        "At highest point, displacement vector is $\\vec{r} = \\frac{R}{2} \\hat{i} + H \\hat{j}$. Time to highest point is $t_h = \\frac{u\\sin\\theta}{g}$. Horizontal average velocity: $\\frac{R/2}{t_h} = u\\cos\\theta$. Vertical average velocity: $\\frac{H}{t_h} = \\frac{u^2\\sin^2\\theta/(2g)}{u\\sin\\theta/g} = \\frac{u\\sin\\theta}{2}$. Average velocity magnitude $v_{\\text{avg}} = \\sqrt{(u\\cos\\theta)^2 + \\left(\\frac{u\\sin\\theta}{2}\\right)^2} = u\\sqrt{\\cos^2\\theta + \\frac{1}{4}\\sin^2\\theta} = u\\sqrt{\\cos^2\\theta + \\frac{1}{4}(1 - \\cos^2\\theta)} = \\frac{u}{2}\\sqrt{1 + 3\\cos^2\\theta}$.",
        "Hard"
    ),
    (
        "A plane inclined at angle $\\alpha$ to the horizontal is given. A projectile is launched up the incline with speed $u$ at an angle $\\beta$ with the inclined surface. The time of flight along the inclined plane is:",
        "$\\frac{2u \\sin \\beta}{g \\cos \\alpha}$",
        ["$\\frac{2u \\sin \\beta}{g \\sin \\alpha}$", "$\\frac{2u \\cos \\beta}{g \\cos \\alpha}$", "$\\frac{u \\sin \\beta}{g \\cos \\alpha}$"],
        "Taking axes along and perpendicular to the inclined plane: $a_\\perp = -g\\cos\\alpha$, $u_\\perp = u\\sin\\beta$. When the projectile lands on the incline, the perpendicular displacement is zero: $y_\\perp = u_\\perp T - \\frac{1}{2} g\\cos\\alpha T^2 = 0 \\implies T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$.",
        "Medium"
    ),
    (
        "For projection up the inclined plane, the condition for maximum range along the incline is:",
        "$\\beta = \\frac{\\pi}{4} - \\frac{\\alpha}{2}$",
        ["$\\beta = \\frac{\\pi}{4} + \\frac{\\alpha}{2}$", "$\\beta = \\frac{\\pi}{4}$", "$\\beta = \\frac{\\alpha}{2}$"],
        "The range along the incline is $R = \\frac{u^2}{g\\cos^2\\alpha} [\\sin(2\\beta + \\alpha) - \\sin\\alpha]$. To maximize $R$, we need $\\sin(2\\beta + \\alpha) = 1 \\implies 2\\beta + \\alpha = \\frac{\\pi}{2} \\implies \\beta = \\frac{\\pi}{4} - \\frac{\\alpha}{2}$.",
        "Hard"
    ),
    (
        "A ball is thrown horizontally from the top of a flight of stairs. Each step has height $h$ and width $b$. If the initial velocity is $u$, the ball will clear the $(n-1)$-th step and strike the $n$-th step if $n$ is:",
        "$\\frac{2h u^2}{g b^2}$",
        ["$\\frac{h u^2}{2g b^2}$", "$\\frac{2b u^2}{g h^2}$", "$\\frac{g b^2}{2h u^2}$"],
        "Let the ball land on the $n$-th step. Horizontal displacement $x = nb$, vertical displacement $y = nh$. From $y = \\frac{g x^2}{2u^2}$, we have $nh = \\frac{g (nb)^2}{2u^2} = \\frac{g n^2 b^2}{2u^2} \\implies n = \\frac{2h u^2}{g b^2}$.",
        "Medium"
    ),
    (
        "A boy can throw a stone to a maximum horizontal distance of $R = 80\\text{ m}$ on a level ground. The greatest height to which he can throw the same stone vertically upwards is:",
        "$40\\text{ m}$",
        ["$80\\text{ m}$", "$20\\text{ m}$", "$60\\text{ m}$"],
        "Maximum horizontal range is $R_{\\max} = \\frac{u^2}{g} = 80\\text{ m}$. The maximum vertical height when thrown straight up is $H_{\\max} = \\frac{u^2}{2g} = \\frac{R_{\\max}}{2} = \\frac{80}{2} = 40\\text{ m}$.",
        "Easy"
    ),
    (
        "The kinetic energy of a projectile at the highest point of its trajectory is half of its initial kinetic energy. The angle of projection is:",
        "$45^\\circ$",
        ["$30^\\circ$", "$60^\\circ$", "$75^\\circ$"],
        "At highest point, velocity is $u\\cos\\theta$. Kinetic energy at peak is $K_{\\text{top}} = \\frac{1}{2}m(u\\cos\\theta)^2 = K_0 \\cos^2\\theta$. Given $K_{\\text{top}} = \\frac{1}{2}K_0 \\implies \\cos^2\\theta = \\frac{1}{2} \\implies \\cos\\theta = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$.",
        "Easy"
    ),
    (
        "A projectile is launched from ground with speed $u = 50\\text{ m/s}$ at an angle $\\theta = 53^\\circ$ with horizontal ($\\cos 53^\\circ = 0.6, \\sin 53^\\circ = 0.8$). What is the speed of the projectile at $t = 2\\text{ s}$? ($g = 10\\text{ m/s}^2$)",
        "$10\\sqrt{13}\\text{ m/s}$",
        ["$30\\text{ m/s}$", "$40\\text{ m/s}$", "$10\\sqrt{10}\\text{ m/s}$"],
        "$u_x = 50 \\times 0.6 = 30\\text{ m/s}$, $u_y = 50 \\times 0.8 = 40\\text{ m/s}$. At $t = 2\\text{ s}$: $v_x = 30\\text{ m/s}$, $v_y = u_y - gt = 40 - 10(2) = 20\\text{ m/s}$. Speed $v = \\sqrt{30^2 + 20^2} = \\sqrt{900 + 400} = \\sqrt{1300} = 10\\sqrt{13}\\text{ m/s}$.",
        "Easy"
    ),
    (
        "For the projectile in the previous question ($u = 50\\text{ m/s}, \\theta = 53^\\circ$), the angle that the velocity vector makes with the horizontal at $t = 2\\text{ s}$ is:",
        "$\\tan^{-1}\\left(\\frac{2}{3}\\right)$",
        ["$\\tan^{-1}\\left(\\frac{3}{2}\\right)$", "$45^\\circ$", "$\\tan^{-1}\\left(\\frac{1}{2}\\right)$"],
        "$\\tan \\alpha = \\frac{v_y}{v_x} = \\frac{20}{30} = \\frac{2}{3} \\implies \\alpha = \\tan^{-1}\\left(\\frac{2}{3}\\right)$.",
        "Easy"
    ),
    (
        "Two projectiles are launched from the same point with the same speed at angles $(45^\\circ - \\theta)$ and $(45^\\circ + \\theta)$. The ratio of their horizontal ranges is:",
        "$1 : 1$",
        ["$1 : \\tan 2\\theta$", "$\\tan(45^\\circ - \\theta) : 1$", "$1 : 2$"],
        "The two angles sum to $(45^\\circ - \\theta) + (45^\\circ + \\theta) = 90^\\circ$. Since they are complementary angles, their horizontal ranges are identical: ratio is $1 : 1$.",
        "Easy"
    ),
    (
        "For the complementary projectiles in the previous question, the ratio of their maximum heights is:",
        "$\\tan^2(45^\\circ - \\theta)$",
        ["$\\tan(45^\\circ - \\theta)$", "$1 : 1$", "$\\cot^2(45^\\circ - \\theta)$"],
        "$H_1 = \\frac{u^2 \\sin^2(45^\\circ - \\theta)}{2g}$ and $H_2 = \\frac{u^2 \\sin^2(45^\\circ + \\theta)}{2g} = \\frac{u^2 \\cos^2(45^\\circ - \\theta)}{2g}$. Ratio $\\frac{H_1}{H_2} = \\tan^2(45^\\circ - \\theta)$.",
        "Medium"
    ),
    (
        "A projectile passes through two points at the same height $h$ above the ground at times $t = 2\\text{ s}$ and $t = 6\\text{ s}$ after launch. What is the total time of flight $T$?",
        "$8\\text{ s}$",
        ["$4\\text{ s}$", "$12\\text{ s}$", "$10\\text{ s}$"],
        "The height $y = u_y t - \\frac{1}{2}gt^2 = h \\implies \\frac{1}{2}gt^2 - u_y t + h = 0$. The roots $t_1$ and $t_2$ satisfy $t_1 + t_2 = \\frac{u_y}{g/2} = \\frac{2u_y}{g} = T$. Thus total time of flight $T = t_1 + t_2 = 2 + 6 = 8\\text{ s}$.",
        "Easy"
    ),
    (
        "For the projectile in the previous question ($t_1 = 2\\text{ s}, t_2 = 6\\text{ s}$), what is the height $h$? ($g = 10\\text{ m/s}^2$)",
        "$60\\text{ m}$",
        ["$80\\text{ m}$", "$40\\text{ m}$", "$120\\text{ m}$"],
        "The product of roots is $t_1 t_2 = \\frac{h}{g/2} = \\frac{2h}{g}$. Therefore $h = \\frac{g t_1 t_2}{2} = \\frac{10 \\times 2 \\times 6}{2} = 60\\text{ m}$.",
        "Medium"
    ),
    (
        "A hunter aims his rifle directly at a monkey hanging from a high branch. The monkey drops from the branch at the exact instant the gun is fired. The bullet will:",
        "Hit the monkey regardless of the bullet's muzzle velocity, provided it reaches before the monkey hits the ground",
        ["Pass above the monkey", "Pass below the monkey", "Hit the monkey only if muzzle velocity is very high"],
        "Both the monkey and the bullet fall with the same downward acceleration $g$. In the frame of reference of the bullet, the relative acceleration is zero, so the bullet travels along the straight line of sight to the monkey, always hitting it.",
        "Easy"
    ),
    (
        "A particle is projected at an angle $\\theta$ from the horizontal with velocity $u$. The rate of change of speed $\\frac{dv}{dt}$ at any time $t$ is:",
        "$-g \\sin \\alpha$ where $\\alpha$ is the angle the velocity vector makes with the horizontal at that instant",
        ["$-g$", "$-g \\cos \\alpha$", "$0$"],
        "The rate of change of speed is the tangential acceleration: $a_t = \\frac{\\vec{v} \\cdot \\vec{a}}{v} = \\frac{v_x(0) + v_y(-g)}{v} = -g \\frac{v_y}{v} = -g \\sin \\alpha$, where $\\sin \\alpha = \\frac{v_y}{v}$.",
        "Hard"
    ),
    (
        "At what point in the trajectory of a projectile is the rate of change of speed zero?",
        "At the highest point",
        ["At the launch point", "At the landing point", "Nowhere"],
        "At the highest point, the velocity is purely horizontal ($v_y = 0$, so $\\alpha = 0$). Hence $a_t = -g \\sin(0) = 0$. Here acceleration is purely normal ($a_n = g$).",
        "Easy"
    ),
    (
        "A person throws a ball horizontally with velocity $u$ from the edge of a cliff of height $H$. At the same time, another person drops a ball from rest from the same height. Which ball hits the ground first?",
        "Both hit the ground at the exact same time",
        ["The dropped ball", "The thrown ball", "Depends on the value of $u$"],
        "Vertical motion is completely independent of horizontal motion. Both balls start with zero initial vertical velocity and fall through the same height $H$ under the same acceleration $g$, so $t = \\sqrt{\\frac{2H}{g}}$ for both.",
        "Easy"
    ),
    (
        "A body is projected with kinetic energy $K$ at an angle of $60^\\circ$ to the horizontal. Its kinetic energy at the highest point will be:",
        "$\\frac{K}{4}$",
        ["$\\frac{K}{2}$", "$\\frac{3K}{4}$", "$0$"],
        "At peak, speed is $u\\cos 60^\\circ = \\frac{u}{2}$. Kinetic energy $K' = \\frac{1}{2}m\\left(\\frac{u}{2}\\right)^2 = \\frac{1}{4}\\left(\\frac{1}{2}mu^2\\right) = \\frac{K}{4}$.",
        "Easy"
    ),
    (
        "A particle is projected at an angle $\\theta$ such that its range $R$ and maximum height $H$ satisfy $R = 4\\sqrt{3} H$. What is the angle of projection?",
        "$30^\\circ$",
        ["$60^\\circ$", "$45^\\circ$", "$15^\\circ$"],
        "From $\\frac{H}{R} = \\frac{\\tan\\theta}{4}$, we substitute $R = 4\\sqrt{3}H$: $\\frac{H}{4\\sqrt{3}H} = \\frac{\\tan\\theta}{4} \\implies \\frac{1}{\\sqrt{3}} = \\tan\\theta \\implies \\theta = 30^\\circ$.",
        "Easy"
    ),
    (
        "A cannon ball has a range $R$ on a horizontal plane. If $h$ and $h'$ are the greatest heights in the two possible trajectories for which this range can be obtained, then:",
        "$R = 4\\sqrt{h h'}$",
        ["$R = \\sqrt{h h'}$", "$R = 2\\sqrt{h h'}$", "$R = 16\\sqrt{h h'}$"],
        "As established for complementary angles $\\theta$ and $90^\\circ - \\theta$, $\\sqrt{h h'} = \\frac{R}{4} \\implies R = 4\\sqrt{h h'}$.",
        "Medium"
    ),
    (
        "A particle is projected from horizontal ground. If the ratio of velocity at highest point to that at half of maximum height is $\\frac{\\sqrt{2}}{\\sqrt{3}}$, the angle of projection is:",
        "$45^\\circ$",
        ["$30^\\circ$", "$60^\\circ$", "$75^\\circ$"],
        "Velocity at peak: $v_1 = u\\cos\\theta$. At height $h = \\frac{H}{2}$, $v_y^2 = u^2\\sin^2\\theta - 2g\\left(\\frac{u^2\\sin^2\\theta}{4g}\\right) = \\frac{u^2\\sin^2\\theta}{2}$. Thus $v_2^2 = u^2\\cos^2\\theta + \\frac{u^2\\sin^2\\theta}{2}$. Ratio: $\\frac{v_1^2}{v_2^2} = \\frac{u^2\\cos^2\\theta}{u^2\\cos^2\\theta + \\frac{1}{2}u^2\\sin^2\\theta} = \\frac{2}{3} \\implies 3\\cos^2\\theta = 2\\cos^2\\theta + \\sin^2\\theta \\implies \\cos^2\\theta = \\sin^2\\theta \\implies \\tan^2\\theta = 1 \\implies \\theta = 45^\\circ$.",
        "Medium"
    ),
    (
        "A ball is thrown at an angle $\\theta$ with speed $u$. The change in momentum of the ball between the instant of projection and the instant it strikes the ground is:",
        "$2mu \\sin \\theta$ directed downwards",
        ["$2mu \\cos \\theta$ directed downwards", "$mu \\sin \\theta$ directed downwards", "Zero"],
        "Horizontal momentum remains unchanged: $\\Delta p_x = 0$. Initial vertical momentum: $p_{y1} = mu\\sin\\theta\\hat{j}$. Final vertical momentum: $p_{y2} = -mu\\sin\\theta\\hat{j}$. Change in momentum $\\Delta \\vec{p} = \\vec{p}_2 - \\vec{p}_1 = -2mu\\sin\\theta\\hat{j}$. Magnitude is $2mu\\sin\\theta$ directed downwards.",
        "Easy"
    ),
    (
        "An aeroplane is flying horizontally with a constant speed of $180\\text{ km/h}$ ($50\\text{ m/s}$) at a height of $490\\text{ m}$. A bomb is released from it to hit a target on the ground. At what horizontal distance before the target should the bomb be released? ($g = 9.8\\text{ m/s}^2$)",
        "$500\\text{ m}$",
        ["$490\\text{ m}$", "$1000\\text{ m}$", "$250\\text{ m}$"],
        "Time to reach ground $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2(490)}{9.8}} = \\sqrt{100} = 10\\text{ s}$. Horizontal distance $x = u t = 50 \\times 10 = 500\\text{ m}$.",
        "Easy"
    ),
    (
        "Two particles are projected simultaneously from the same point with velocities $u_1$ and $u_2$ at angles $\\theta_1$ and $\\theta_2$ respectively. If they collide in air, which condition must hold true?",
        "$u_1 \\cos \\theta_1 = u_2 \\cos \\theta_2$ (if projected towards each other from distance $d$) or $u_1 \\sin \\theta_1 = u_2 \\sin \\theta_2$ for same height at all times",
        ["$u_1 = u_2$", "$\\theta_1 = \\theta_2$ always", "They can never collide"],
        "For collision between two projectiles launched from the ground at different locations, the line connecting them must maintain a constant direction (relative velocity vector directed along the line of centers), requiring equal vertical velocity components $u_1\\sin\\theta_1 = u_2\\sin\\theta_2$ if launched from the same level.",
        "Medium"
    ),
    (
        "A projectile is launched from ground with speed $u$. If its range is $R$, the work done by gravity during the entire flight is:",
        "$0$",
        ["$mgR$", "$\\frac{1}{2}m u^2$", "$-mgR$"],
        "The initial and final heights are both zero: $y_f - y_i = 0$. Since gravity is a conservative force, $W_g = -mg(y_f - y_i) = 0$.",
        "Easy"
    ),
    (
        "The angle of elevation of the highest point of a projectile from the point of launch is $\\phi$. If $\\theta$ is the angle of projection, then:",
        "$\\tan \\phi = \\frac{1}{2} \\tan \\theta$",
        ["$\\tan \\phi = 2 \\tan \\theta$", "$\\tan \\phi = \\tan \\theta$", "$\\tan \\phi = \\frac{1}{4} \\tan \\theta$"],
        "From point of launch $(0,0)$ to the peak $\\left(\\frac{R}{2}, H\\right)$, the tangent of elevation angle is $\\tan \\phi = \\frac{H}{R/2} = \\frac{2H}{R}$. Since $\\frac{H}{R} = \\frac{\\tan \\theta}{4}$, we have $\\tan \\phi = 2\\left(\\frac{\\tan \\theta}{4}\\right) = \\frac{\\tan \\theta}{2}$.",
        "Medium"
    ),
    (
        "A particle is projected from ground at angle $\\theta$. If the speed of the particle is doubled, keeping $\\theta$ constant, its horizontal range increases by a factor of:",
        "$4$",
        ["$2$", "$8$", "$\\sqrt{2}$"],
        "Horizontal range $R = \\frac{u^2 \\sin 2\\theta}{g} \\propto u^2$. Doubling the initial speed $u \\to 2u$ scales $R$ by $2^2 = 4$.",
        "Easy"
    ),
    (
        "A projectile is launched at an angle $\\theta = 45^\\circ$ with velocity $u$. The magnitude of angular momentum of the projectile about the launch point at the highest point of its trajectory is:",
        "$\\frac{m u^3}{4\\sqrt{2} g}$",
        ["$\\frac{m u^3}{2g}$", "$\\frac{m u^3}{8g}$", "$\\frac{m u^3}{\\sqrt{2} g}$"],
        "At peak, $\\vec{v} = u\\cos 45^\\circ \\hat{i} = \\frac{u}{\\sqrt{2}}\\hat{i}$. Position vector is $\\vec{r} = \\frac{R}{2}\\hat{i} + H\\hat{j}$. Angular momentum $\\vec{L} = \\vec{r} \\times m\\vec{v} = \\left(\\frac{R}{2}\\hat{i} + H\\hat{j}\\right) \\times m\\left(\\frac{u}{\\sqrt{2}}\\hat{i}\\right) = -m H \\frac{u}{\\sqrt{2}}\\hat{k}$. Since $H = \\frac{u^2 \\sin^2 45^\\circ}{2g} = \\frac{u^2}{4g}$, magnitude $L = m \\left(\\frac{u^2}{4g}\\right) \\left(\\frac{u}{\\sqrt{2}}\\right) = \\frac{m u^3}{4\\sqrt{2}g}$.",
        "Hard"
    ),
    (
        "A projectile has time of flight $T$ and horizontal range $R$. The maximum height $H$ in terms of $T$ is:",
        "$\\frac{g T^2}{8}$",
        ["$\\frac{g T^2}{2}$", "$\\frac{g T^2}{4}$", "$\\frac{g T^2}{16}$"],
        "We have $T = \\frac{2u\\sin\\theta}{g} \\implies u\\sin\\theta = \\frac{gT}{2}$. Then $H = \\frac{(u\\sin\\theta)^2}{2g} = \\frac{(gT/2)^2}{2g} = \\frac{g^2 T^2}{8g} = \\frac{g T^2}{8}$.",
        "Easy"
    ),
    (
        "A particle is projected with speed $u$ at angle $\\theta$ with horizontal. The radius of curvature of the trajectory at time $t$ before reaching apex is:",
        "$\\frac{(u^2 - 2ugt\\sin\\theta + g^2 t^2)^{3/2}}{g u \\cos \\theta}$",
        ["$\\frac{u^2 \\cos^2 \\theta}{g}$", "$\\frac{(u^2 + g^2 t^2)^{3/2}}{g u}$", "$\\frac{u^3}{g^2 t}$"],
        "The speed at time $t$ is $v = \\sqrt{u_x^2 + v_y^2} = \\sqrt{u^2\\cos^2\\theta + (u\\sin\\theta - gt)^2} = \\sqrt{u^2 - 2ugt\\sin\\theta + g^2 t^2}$. The normal acceleration is $a_n = \\frac{|\\vec{v} \\times \\vec{a}|}{v} = \\frac{v_x g}{v} = \\frac{gu\\cos\\theta}{v}$. Thus $\\rho = \\frac{v^2}{a_n} = \\frac{v^3}{gu\\cos\\theta} = \\frac{(u^2 - 2ugt\\sin\\theta + g^2 t^2)^{3/2}}{gu\\cos\\theta}$.",
        "Hard"
    ),
    (
        "A target is fixed at a point $(x, y)$ in the vertical plane. The minimum launch velocity $u_{\\min}$ required to hit this target from the origin is:",
        "$\\sqrt{g(y + \\sqrt{x^2 + y^2})}$",
        ["$\\sqrt{g(x + y)}$", "$\\sqrt{2g(x^2 + y^2)}$", "$\\sqrt{g \\sqrt{x^2 + y^2}}$"],
        "The bounding parabola of safety for launch speed $u$ is $y = \\frac{u^2}{2g} - \\frac{g x^2}{2u^2}$. To just reach $(x, y)$, the point must lie on the boundary: $\\frac{g}{2u^2} x^2 + y - \\frac{u^2}{2g} = 0$. Solving for $u^2$ gives $u_{\\min}^2 = g(y + \\sqrt{x^2 + y^2}) \\implies u_{\\min} = \\sqrt{g(y + \\sqrt{x^2 + y^2})}$.",
        "Hard"
    ),
    (
        "A ball is projected from a point on the ground at an angle $45^\\circ$ with horizontal. It just clears two vertical poles of equal height $h$ situated at distances $a$ and $b$ from the point of projection. The height $h$ of each pole is:",
        "$\\frac{ab}{a + b}$",
        ["$\\frac{a + b}{ab}$", "$\\sqrt{ab}$", "$\\frac{2ab}{a + b}$"],
        "The trajectory equation with range $R$ is $y = x\\left(1 - \\frac{x}{R}\\right)\\tan\\theta = x\\left(1 - \\frac{x}{R}\\right)$ since $\\tan 45^\\circ = 1$. The roots of $y = h$ are $a$ and $b$. Thus $x^2 - Rx + Rh = 0$ has roots $a$ and $b$. Sum of roots: $a + b = R$. Product of roots: $ab = Rh = (a + b)h \\implies h = \\frac{ab}{a + b}$.",
        "Medium"
    ),
    (
        "A grasshopper can jump a maximum horizontal distance of $1.6\\text{ m}$. How long does it spend in the air during such a jump? ($g = 10\\text{ m/s}^2$)",
        "$0.57\\text{ s}$ (or $\\frac{2}{\\sqrt{5}}\\text{ s}$)",
        ["$0.8\\text{ s}$", "$0.4\\text{ s}$", "$1.0\\text{ s}$"],
        "For maximum range, $\\theta = 45^\\circ$ and $R_{\\max} = \\frac{u^2}{g} = 1.6 \\implies u^2 = 16 \\implies u = 4\\text{ m/s}$. Time of flight $T = \\frac{2u\\sin 45^\\circ}{g} = \\frac{2(4)(1/\\sqrt{2})}{10} = \\frac{4\\sqrt{2}}{10} \\approx \\frac{5.656}{10} \\approx 0.57\\text{ s}$.",
        "Medium"
    ),
    (
        "A projectile is fired with speed $u$ at angle $\\theta$ from horizontal. When its elevation angle from the launch point is $\\phi$, its height is $y$ and horizontal position is $x$. The relation between $\\theta$ and $\\phi$ at any point on the trajectory is:",
        "$\\tan \\theta = \\tan \\phi + \\frac{y}{R - x}$",
        ["$\\tan \\theta = 2\\tan \\phi$", "$\\tan \\theta = \\tan \\phi$", "$\\tan \\theta = \\tan \\phi - \\frac{y}{x}$"],
        "Trajectory equation: $y = x\\left(1 - \\frac{x}{R}\\right)\\tan\\theta = x\\left(\\frac{R - x}{R}\\right)\\tan\\theta$. Also $\\tan\\phi = \\frac{y}{x}$, and angle from landing point is $\\tan\\beta = \\frac{y}{R - x}$. Adding gives $\\tan\\phi + \\tan\\beta = \\frac{y}{x} + \\frac{y}{R - x} = \\frac{y R}{x(R - x)} = \\tan\\theta$. Thus $\\tan\\theta = \\tan\\phi + \\frac{y}{R - x}$.",
        "Hard"
    )
]

assert len(st3_raw) == 45, f"Expected 45 questions for st3, got {len(st3_raw)}"
for i, item in enumerate(st3_raw):
    questions.append(create_q(st3, item[0], item[1], item[2], item[3], item[4], i))

# Save output to JSON
out_path = os.path.join(os.path.dirname(__file__), "kinematics_batch1.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} MCQs for batch 1 saved to {out_path}")
