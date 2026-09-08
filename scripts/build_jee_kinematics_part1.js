const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "Graphical analysis of motion (x-t, v-t graphs)";
const chapter = "Kinematics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR Questions
const arData = [
  {
    a: "The slope of a position-time ($x-t$) graph at any point represents the instantaneous velocity of the particle.",
    r: "Instantaneous velocity is defined mathematically as the first derivative of position with respect to time, $v = \\frac{dx}{dt}$.",
    ans: 0,
    exp: "By definition, the slope of the tangent to the $x-t$ curve at time $t$ is $\\frac{dx}{dt}$, which is the instantaneous velocity. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The area under the velocity-time ($v-t$) curve between time $t_1$ and $t_2$ represents the displacement of the particle.",
    r: "Displacement is obtained by integrating velocity over time, $\\Delta x = \\int_{t_1}^{t_2} v\\, dt$.",
    ans: 0,
    exp: "Since $\\Delta x = \\int v\\, dt$, the definite integral geometrically equals the signed area between the $v-t$ curve and the time axis. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "The slope of the velocity-time ($v-t$) graph gives the instantaneous acceleration.",
    r: "Instantaneous acceleration is the time derivative of velocity, $a = \\frac{dv}{dt}$.",
    ans: 0,
    exp: "The slope of the tangent to a $v-t$ graph is $\\frac{dv}{dt}$, which is acceleration. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "A particle can have zero velocity at an instant while possessing non-zero acceleration.",
    r: "At the highest point of vertical motion under gravity, the instantaneous velocity is zero while the acceleration is $g$ downward.",
    ans: 0,
    exp: "When a body is thrown vertically upward, at the apex $v = 0$ instantaneously, but the downward gravitational acceleration $a = -g$ persists. (R) correctly illustrates and explains (A)."
  },
  {
    a: "The area under an acceleration-time ($a-t$) graph between two instants represents the velocity of the particle at the final instant.",
    r: "The integral $\\int_{t_1}^{t_2} a\\, dt$ represents the change in velocity $\\Delta v = v(t_2) - v(t_1)$, not the absolute velocity.",
    ans: 3,
    exp: "Assertion is false because the area under the $a-t$ curve equals the change in velocity ($\\Delta v = v_2 - v_1$), not the absolute final velocity unless initial velocity is zero. Reason is true."
  },
  {
    a: "A distance-time graph can never have a negative slope.",
    r: "Distance is a scalar quantity that represents total path length and can never decrease with time for a moving particle.",
    ans: 0,
    exp: "Since total path length traversed cannot decrease, $\\frac{d(\\text{distance})}{dt} \\ge 0$. Hence the slope of a distance-time graph cannot be negative. (R) correctly explains (A)."
  },
  {
    a: "An $x-t$ graph that is concave upward indicates that the particle is moving with positive acceleration.",
    r: "The second derivative of position with respect to time, $\\frac{d^2x}{dt^2}$, is positive for a curve that is concave upward.",
    ans: 0,
    exp: "Concave upward means $\\frac{d^2x}{dt^2} > 0$. Since acceleration $a = \\frac{d^2x}{dt^2}$, positive curvature indicates positive acceleration. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "A closed loop on a velocity-position ($v-x$) graph is physically possible in one-dimensional motion.",
    r: "A single-valued function cannot have two velocities at the same position in conservative systems.",
    ans: 2,
    exp: "Assertion is true: simple harmonic motion ($x = A\\sin\\omega t, v = A\\omega\\cos\\omega t$) traces an ellipse $\\frac{x^2}{A^2} + \\frac{v^2}{(A\\omega)^2} = 1$, which is a closed loop on a $v-x$ graph. Reason is false: a particle oscillating back and forth visits the same position with $+v$ and $-v$."
  },
  {
    a: "In a $v-x$ graph, the acceleration of the particle at any point is given by $v\\frac{dv}{dx}$.",
    r: "By the chain rule of differentiation, $a = \\frac{dv}{dt} = \\frac{dv}{dx} \\frac{dx}{dt} = v\\frac{dv}{dx}$.",
    ans: 0,
    exp: "By the chain rule, $a = v\\frac{dv}{dx}$. Thus, the product of velocity and the slope of the $v-x$ curve gives acceleration. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "A particle can have a constant speed and yet have a variable velocity.",
    r: "Velocity is a vector quantity; changing direction changes velocity even if speed remains constant.",
    ans: 0,
    exp: "In uniform circular motion, speed is constant but direction of motion changes continuously, giving variable velocity and centripetal acceleration. (R) correctly explains (A)."
  },
  {
    a: "If the velocity-time graph is a straight line parallel to the time axis, the acceleration of the particle is zero.",
    r: "The slope of a horizontal line is zero, and the slope of a $v-t$ graph represents acceleration.",
    ans: 0,
    exp: "A line parallel to the time axis has slope $\\frac{dv}{dt} = 0$, implying uniform velocity and zero acceleration. (R) correctly explains (A)."
  },
  {
    a: "A particle moving in a straight line cannot reverse its direction of motion without its velocity passing through zero.",
    r: "Velocity is a continuous function of time in physical kinematics; changing sign from positive to negative requires passing through zero by the Intermediate Value Theorem.",
    ans: 0,
    exp: "For velocity to change sign in 1D motion, the continuous function $v(t)$ must cross $v=0$. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The average velocity of a particle over an interval is equal to the instantaneous velocity at some instant during that interval for uniformly accelerated motion.",
    r: "For constant acceleration, the velocity-time graph is a straight line, and the mean value of velocity equals $\\frac{u+v}{2}$, which occurs at the midpoint of time $t/2$.",
    ans: 0,
    exp: "For constant $a$, $v_{avg} = \\frac{u+v}{2} = u + a(t/2) = v(t/2)$. By the mean value theorem, instantaneous velocity at $t/2$ equals average velocity. (R) explains (A)."
  },
  {
    a: "An object thrown vertically upwards and returning to the thrower has an average velocity of zero over the entire flight.",
    r: "The total displacement for the complete round trip is zero, and average velocity is displacement divided by time.",
    ans: 0,
    exp: "Since the starting and ending positions are identical, net displacement $\\Delta x = 0$, so $\\vec{v}_{avg} = \\frac{\\Delta x}{\\Delta t} = 0$. (R) correctly explains (A)."
  },
  {
    a: "A sharp kink (corner) on a position-time ($x-t$) graph implies an infinite acceleration at that instant.",
    r: "A corner indicates a discontinuous jump in velocity, which means $\\frac{dv}{dt}$ is undefined or infinite.",
    ans: 0,
    exp: "At a sharp corner of an $x-t$ graph, the left-hand slope does not equal the right-hand slope, implying an instantaneous impulse and infinite acceleration. (R) correctly explains (A)."
  },
  {
    a: "If the speed of a particle is increasing, its acceleration must be positive.",
    r: "Speed increases whenever the acceleration vector and velocity vector are in the same direction, which can occur with both positive or both negative values.",
    ans: 3,
    exp: "Assertion is false: if a particle moves in the $-x$ direction with negative velocity ($v < 0$) and negative acceleration ($a < 0$), its speed $|v|$ increases. Reason is true."
  },
  {
    a: "A body dropped from a height bounces elastically from the floor; its velocity-time graph is discontinuous.",
    r: "An instantaneous reversal of velocity upon impact with an immovable floor produces a vertical jump in the $v-t$ curve.",
    ans: 0,
    exp: "During an instantaneous elastic collision, velocity jumps abruptly from $-v$ to $+v$, creating a discontinuity in the idealized $v-t$ graph. (R) correctly explains (A)."
  },
  {
    a: "The area between a $v-t$ curve and the time axis can never be negative.",
    r: "Area above the time axis is positive (forward displacement) and area below the time axis is negative (backward displacement).",
    ans: 3,
    exp: "Assertion is false because area below the time axis represents negative displacement. Reason is true: signed definite integrals account for directional displacement."
  },
  {
    a: "The total distance travelled by a particle can be obtained from the area between the $|v|-t$ graph and the time axis.",
    r: "Distance is the integral of speed over time, $s = \\int |v|\\, dt$.",
    ans: 0,
    exp: "Distance is path length, which is calculated by integrating the absolute speed $|v|$ over time, corresponding to the total geometric area without sign cancellation. (R) correctly explains (A)."
  },
  {
    a: "If the acceleration of a particle is zero, its position-time graph must be a straight line.",
    r: "Zero acceleration implies constant velocity ($v = \\text{constant}$), which yields a linear equation $x(t) = x_0 + vt$ with constant slope.",
    ans: 0,
    exp: "When $a = 0$, velocity is constant, so the slope $\\frac{dx}{dt}$ of the $x-t$ graph is constant, giving a straight line. (R) correctly explains (A)."
  },
  {
    a: "In a straight-line motion, if the displacement-time graph is a parabola opening downwards, the acceleration is negative and constant.",
    r: "The equation of a parabola opening downwards is $x = -kt^2 + bt + c$, whose second derivative is $\\frac{d^2x}{dt^2} = -2k = \\text{constant} < 0$.",
    ans: 0,
    exp: "A downward-opening parabola has a negative second derivative, which corresponds to a constant negative acceleration. (R) correctly explains (A)."
  },
  {
    a: "The slope of a speed-time graph can be negative.",
    r: "A negative slope on a speed-time graph indicates that the particle is decelerating (speed is decreasing).",
    ans: 0,
    exp: "While speed itself cannot be negative ($v \\ge 0$), its derivative $\\frac{d(\\text{speed})}{dt}$ can be negative when a moving particle slows down. (R) correctly explains (A)."
  },
  {
    a: "Two particles having different initial velocities can have identical velocity-time curves if they have identical accelerations at all times.",
    r: "Identical accelerations mean their $v-t$ curves have identical slopes at every instant, so the curves are parallel and differ only by an initial vertical offset.",
    ans: 0,
    exp: "If $a_1(t) = a_2(t)$, then $v_1(t) - v_2(t) = u_1 - u_2 = \\text{constant}$. The $v-t$ curves are parallel lines/curves shifted vertically. (R) explains (A)."
  },
  {
    a: "A particle with non-zero acceleration can have a straight-line $x-t$ graph.",
    r: "A straight-line $x-t$ graph has a constant slope, which mathematically requires $\\frac{d^2x}{dt^2} = a = 0$.",
    ans: 3,
    exp: "Assertion is false: a straight line on an $x-t$ graph strictly implies constant slope ($v = \\text{const}$) and therefore zero acceleration. Reason is true."
  },
  {
    a: "A graph of $v^2$ versus $x$ for a particle under uniform acceleration is a straight line.",
    r: "The third equation of motion is $v^2 = u^2 + 2as$, which is linear in $v^2$ and $x$ with slope $2a$.",
    ans: 0,
    exp: "The equation $v^2 = u^2 + 2ax$ is of the linear form $Y = mX + C$ with $Y = v^2$, $X = x$, slope $m = 2a$, and intercept $C = u^2$. (R) correctly explains (A)."
  },
  {
    a: "The curvature of an $x-t$ graph reflects the magnitude and direction of the particle's acceleration.",
    r: "A more tightly curved parabola indicates a larger second derivative and therefore a larger magnitude of acceleration.",
    ans: 0,
    exp: "Curvature is directly proportional to $\\frac{d^2x}{dt^2} = a$. A sharper curve means larger acceleration, while curvature direction indicates sign. (R) correctly explains (A)."
  }
];

// 7 Generator MCQs
const mcqData = [
  {
    q: "The velocity-time graph of a body moving in a straight line is shown such that $v$ increases linearly from $0$ to $20\\text{ m/s}$ in $4\\text{ s}$, remains constant for $6\\text{ s}$, and then decreases linearly to zero in $2\\text{ s}$. The total distance travelled by the body is:",
    opts: ["$140\\text{ m}$", "$160\\text{ m}$", "$180\\text{ m}$", "$200\\text{ m}$"],
    ans: 2,
    exp: "The shape is a trapezium with parallel sides of length $12\\text{ s}$ (from $t=0$ to $12$) and $6\\text{ s}$ (from $t=4$ to $10$), and height $20\\text{ m/s}$. Area = $\\frac{1}{2}(12 + 6) \\times 20 = 9 \\times 20 = 180\\text{ m}$."
  },
  {
    q: "A particle starts from rest and moves along the $x$-axis. Its acceleration varies with time as $a = 6t - 4\\text{ m/s}^2$. The velocity of the particle at $t = 3\\text{ s}$ is:",
    opts: ["$12\\text{ m/s}$", "$15\\text{ m/s}$", "$18\\text{ m/s}$", "$21\\text{ m/s}$"],
    ans: 1,
    exp: "$v(t) = \\int a\\, dt = \\int_0^3 (6t - 4)\\, dt = [3t^2 - 4t]_0^3 = 3(9) - 4(3) = 27 - 12 = 15\\text{ m/s}$."
  },
  {
    q: "The displacement-time graph of two particles $A$ and $B$ are straight lines making angles of $30^\\circ$ and $60^\\circ$ with the time axis respectively. The ratio of the velocity of $A$ to that of $B$ is:",
    opts: ["$1 : 3$", "$1 : \\sqrt{3}$", "$\\sqrt{3} : 1$", "$3 : 1$"],
    ans: 0,
    exp: "Velocity is given by the slope of the $x-t$ graph: $v = \\tan\\theta$. Thus, $v_A / v_B = \\frac{\\tan 30^\\circ}{\\tan 60^\\circ} = \\frac{1/\\sqrt{3}}{\\sqrt{3}} = \\frac{1}{3}$."
  },
  {
    q: "A particle moves along a straight line such that its velocity $v$ varies with position $x$ as $v^2 = 16 - 4x$. The acceleration of the particle is:",
    opts: ["$-2\\text{ m/s}^2$", "$-4\\text{ m/s}^2$", "$2\\text{ m/s}^2$", "$4\\text{ m/s}^2$"],
    ans: 0,
    exp: "Differentiating $v^2 = 16 - 4x$ with respect to $x$: $2v\\frac{dv}{dx} = -4 \\implies a = v\\frac{dv}{dx} = -2\\text{ m/s}^2$."
  },
  {
    q: "The acceleration-time graph of a body moving in a straight line is a triangle of base $t = 8\\text{ s}$ and peak acceleration $a = 6\\text{ m/s}^2$ at $t = 4\\text{ s}$, starting from rest. The maximum velocity reached is:",
    opts: ["$12\\text{ m/s}$", "$24\\text{ m/s}$", "$36\\text{ m/s}$", "$48\\text{ m/s}$"],
    ans: 1,
    exp: "Change in velocity $\\Delta v = \\text{Area under } a-t \\text{ graph} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ m/s}$. Since $u = 0$, $v_{max} = 24\\text{ m/s}$."
  },
  {
    q: "A ball is dropped from a height $h$ onto a hard horizontal surface and bounces elastically. The graph of velocity versus position $v(x)$ where downward is positive and origin is the release point is:",
    opts: [
      "A parabola opening toward the positive $x$-axis",
      "A straight line through the origin",
      "A semi-ellipse connecting $(0,0)$ to $(h, \\sqrt{2gh})$ and $(h, -\\sqrt{2gh})$",
      "A circle centered at the origin"
    ],
    ans: 0,
    exp: "From $v^2 = 2gx$, the plot of $v$ vs $x$ satisfies $v = \\pm\\sqrt{2gx}$, which is a parabola opening toward the positive $x$-axis."
  },
  {
    q: "The position of a particle is given by $x(t) = t^3 - 6t^2 + 9t + 4\\text{ m}$. The particle comes to momentary rest at times:",
    opts: ["$t = 1\\text{ s}$ and $t = 3\\text{ s}$", "$t = 2\\text{ s}$ and $t = 4\\text{ s}$", "$t = 0\\text{ s}$ and $t = 2\\text{ s}$", "$t = 1\\text{ s}$ and $t = 4\\text{ s}$"],
    ans: 0,
    exp: "$v = \\frac{dx}{dt} = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t-1)(t-3)$. Setting $v = 0$ gives $t = 1\\text{ s}$ and $t = 3\\text{ s}$."
  }
];

// 20 Numerical Questions (Section B format, integer/numeric answer)
const numData = [
  {
    q: "The velocity-time graph of a car moving along a straight road consists of a linear acceleration from rest to $30\\text{ m/s}$ in $10\\text{ s}$, followed by constant velocity for $20\\text{ s}$, and deceleration to rest in $10\\text{ s}$. Calculate the total displacement (in meters) of the car.",
    ans: 900,
    exp: "Displacement is the area of the trapezoid: $\\text{Area} = \\frac{1}{2}(40 + 20) \\times 30 = \\frac{1}{2}(60) \\times 30 = 900\\text{ m}$."
  },
  {
    q: "A particle moves along the $x$-axis such that its position is given by $x = 2t^3 - 9t^2 + 12t + 5\\text{ m}$. Find the magnitude of acceleration (in $\\text{m/s}^2$) when the particle's velocity is zero for the second time.",
    ans: 6,
    exp: "$v = \\frac{dx}{dt} = 6t^2 - 18t + 12 = 6(t-1)(t-2)$. Velocity is zero at $t = 1\\text{ s}$ and $t = 2\\text{ s}$. Acceleration $a = \\frac{dv}{dt} = 12t - 18$. At $t = 2\\text{ s}$, $a = 12(2) - 18 = 6\\text{ m/s}^2$."
  },
  {
    q: "A particle starts from rest with acceleration $a = 4t\\text{ m/s}^2$. Find the distance travelled by the particle (in meters) in the first $3\\text{ s}$.",
    ans: 18,
    exp: "$v = \\int 4t\\, dt = 2t^2\\text{ m/s}$. Distance $x = \\int_0^3 2t^2\\, dt = \\left[\\frac{2t^3}{3}\\right]_0^3 = \\frac{2(27)}{3} = 18\\text{ m}$."
  },
  {
    q: "The velocity of a particle moving along a straight line varies with displacement as $v = \\sqrt{49 + 16x}$ (in SI units). The acceleration of the particle (in $\\text{m/s}^2$) is:",
    ans: 8,
    exp: "$v^2 = 49 + 16x$. Differentiating with respect to $x$: $2v\\frac{dv}{dx} = 16 \\implies a = v\\frac{dv}{dx} = 8\\text{ m/s}^2$."
  },
  {
    q: "The acceleration of a particle is given by $a = 2t + 1\\text{ m/s}^2$. If the particle starts with an initial velocity of $3\\text{ m/s}$ at $t = 0$, determine its velocity (in $\\text{m/s}$) at $t = 4\\text{ s}$.",
    ans: 23,
    exp: "$v(t) = u + \\int_0^4 (2t + 1)\\, dt = 3 + [t^2 + t]_0^4 = 3 + (16 + 4) = 23\\text{ m/s}$."
  },
  {
    q: "A body moves along a straight line with uniform acceleration. In the first $4\\text{ s}$ it travels $24\\text{ m}$ and in the next $4\\text{ s}$ it travels $56\\text{ m}$. Find the initial velocity $u$ (in $\\text{m/s}$).",
    ans: 2,
    exp: "In first $4\\text{ s}$: $24 = 4u + \\frac{1}{2}a(16) = 4u + 8a \\implies u + 2a = 6$. In total $8\\text{ s}$: $24 + 56 = 80 = 8u + \\frac{1}{2}a(64) = 8u + 32a \\implies u + 4a = 10$. Subtracting gives $2a = 4 \\implies a = 2\\text{ m/s}^2$. Then $u + 2(2) = 6 \\implies u = 2\\text{ m/s}$."
  },
  {
    q: "An object moves along the $x$-axis according to $x(t) = 3t^2 - t^3\\text{ m}$. What is the maximum positive position (in meters) reached by the object before it reverses direction?",
    ans: 4,
    exp: "$v = \\frac{dx}{dt} = 6t - 3t^2 = 3t(2 - t)$. Velocity is zero at $t = 2\\text{ s}$. The position at $t = 2\\text{ s}$ is $x(2) = 3(4) - 8 = 12 - 8 = 4\\text{ m}$."
  },
  {
    q: "A car accelerates from rest with a constant acceleration of $2\\text{ m/s}^2$ for $10\\text{ s}$ and then decelerates at $4\\text{ m/s}^2$ to a stop. Find the total distance travelled (in meters).",
    ans: 150,
    exp: "After $10\\text{ s}$, velocity is $v = at = 2(10) = 20\\text{ m/s}$. Distance during acceleration $s_1 = \\frac{1}{2}(2)(100) = 100\\text{ m}$. Time to stop $t_2 = \\frac{v}{a_2} = \\frac{20}{4} = 5\\text{ s}$. Distance during deceleration $s_2 = \\frac{v^2}{2a_2} = \\frac{400}{8} = 50\\text{ m}$. Total distance = $100 + 50 = 150\\text{ m}$."
  },
  {
    q: "A particle's position is given by $x(t) = 5t - 2t^2\\text{ m}$. Find the total distance (in meters) covered by the particle in the first $2\\text{ s}$, rounded to the nearest integer.",
    ans: 4,
    exp: "$v = 5 - 4t$. Reverses at $t = 1.25\\text{ s}$. Displacement to $t = 1.25\\text{ s}$: $x(1.25) = 5(1.25) - 2(1.5625) = 6.25 - 3.125 = 3.125\\text{ m}$. At $t = 2\\text{ s}$: $x(2) = 10 - 8 = 2\\text{ m}$. Distance back = $3.125 - 2 = 1.125\\text{ m}$. Total distance = $3.125 + 1.125 = 4.25\\text{ m} \\approx 4\\text{ m}$."
  },
  {
    q: "A train moving at $20\\text{ m/s}$ is brought to rest in $100\\text{ m}$ by applying constant braking. What is the magnitude of its retardation (in $\\text{m/s}^2$)?",
    ans: 2,
    exp: "$v^2 = u^2 - 2as \\implies 0 = 400 - 2a(100) \\implies 200a = 400 \\implies a = 2\\text{ m/s}^2$."
  },
  {
    q: "A particle moves such that its velocity is $v = 3t^2 + 2t\\text{ m/s}$. Find the displacement (in meters) of the particle from $t = 1\\text{ s}$ to $t = 3\\text{ s}$.",
    ans: 34,
    exp: "$\\Delta x = \\int_1^3 (3t^2 + 2t)\\, dt = [t^3 + t^2]_1^3 = (27 + 9) - (1 + 1) = 36 - 2 = 34\\text{ m}$."
  },
  {
    q: "A lift ascends from rest with uniform acceleration $a = 1\\text{ m/s}^2$ for $6\\text{ s}$, continues with constant speed for $10\\text{ s}$, and comes to rest with deceleration $2\\text{ m/s}^2$. Find the total height (in meters) climbed by the lift.",
    ans: 87,
    exp: "$v = 1 \\times 6 = 6\\text{ m/s}$. $h_1 = \\frac{1}{2}(1)(36) = 18\\text{ m}$. $h_2 = 6 \\times 10 = 60\\text{ m}$. Deceleration time $t_3 = 6/2 = 3\\text{ s}$, $h_3 = \\frac{1}{2}(6)(3) = 9\\text{ m}$. Total height = $18 + 60 + 9 = 87\\text{ m}$."
  },
  {
    q: "A body starts from rest with acceleration proportional to time, $a = 0.6t\\text{ m/s}^2$. Find its velocity (in $\\text{m/s}$) at $t = 10\\text{ s}$.",
    ans: 30,
    exp: "$v = \\int_0^{10} 0.6t\\, dt = 0.6 \\left[\\frac{t^2}{2}\\right]_0^{10} = 0.3(100) = 30\\text{ m/s}$."
  },
  {
    q: "In a straight line motion, the velocity varies with position as $v = 4\\sqrt{x}\\text{ m/s}$. Determine the acceleration of the particle (in $\\text{m/s}^2$).",
    ans: 8,
    exp: "$v^2 = 16x \\implies 2v\\frac{dv}{dx} = 16 \\implies a = v\\frac{dv}{dx} = 8\\text{ m/s}^2$."
  },
  {
    q: "A particle's acceleration is given by $a = -2v\\text{ s}^{-1}$. If the initial velocity is $10\\text{ m/s}$ at $t = 0$, find the total distance (in meters) the particle travels before coming to rest.",
    ans: 5,
    exp: "$a = v\\frac{dv}{dx} = -2v \\implies \\frac{dv}{dx} = -2 \\implies \\int_{10}^0 dv = -2\\int_0^{x_{max}} dx \\implies -10 = -2x_{max} \\implies x_{max} = 5\\text{ m}$."
  },
  {
    q: "A car covers the first half of the total distance at speed $20\\text{ m/s}$ and the second half at speed $30\\text{ m/s}$. What is the average speed of the car (in $\\text{m/s}$)?",
    ans: 24,
    exp: "$v_{avg} = \\frac{2v_1 v_2}{v_1 + v_2} = \\frac{2(20)(30)}{20 + 30} = \\frac{1200}{50} = 24\\text{ m/s}$."
  },
  {
    q: "A vehicle travels for the first half of the total time with a speed of $30\\text{ km/h}$ and for the second half of the time with a speed of $50\\text{ km/h}$. Find the average speed (in $\\text{km/h}$).",
    ans: 40,
    exp: "$v_{avg} = \\frac{v_1 + v_2}{2} = \\frac{30 + 50}{2} = 40\\text{ km/h}$."
  },
  {
    q: "The displacement of a particle moving in one dimension is related to time by $t = \\sqrt{x} + 3$, where $x$ is in meters and $t$ in seconds. Find the displacement (in meters) when the velocity is zero.",
    ans: 0,
    exp: "$\\sqrt{x} = t - 3 \\implies x = (t-3)^2$. Velocity $v = \\frac{dx}{dt} = 2(t-3)$. Velocity is zero at $t = 3\\text{ s}$, where $x = (3-3)^2 = 0\\text{ m}$."
  },
  {
    q: "A particle moves such that its acceleration is $a = 3t^2 - 12\\text{ m/s}^2$. If it starts from rest at the origin ($x=0, v=0$ at $t=0$), find its velocity (in $\\text{m/s}$) at $t = 4\\text{ s}$.",
    ans: 16,
    exp: "$v(t) = \\int_0^4 (3t^2 - 12)\\, dt = [t^3 - 12t]_0^4 = 64 - 48 = 16\\text{ m/s}$."
  },
  {
    q: "A driver traveling at $20\\text{ m/s}$ sees a red light and applies brakes after a reaction time of $0.5\\text{ s}$. If the braking deceleration is $5\\text{ m/s}^2$, find the total stopping distance (in meters).",
    ans: 50,
    exp: "Reaction distance $d_r = v \\times t_r = 20 \\times 0.5 = 10\\text{ m}$. Braking distance $d_b = \\frac{v^2}{2a} = \\frac{400}{2(5)} = 40\\text{ m}$. Total stopping distance = $10 + 40 = 50\\text{ m}$."
  }
];

// Assemble total 53 questions
const part1Questions = [];

// 1. ARs (26)
arData.forEach((item, idx) => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part1Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

// 2. MCQs (7)
mcqData.forEach((item, idx) => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part1Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

// 3. NUMERICALs (20)
numData.forEach((item, idx) => {
  validateMath(item.q);
  validateMath(item.exp);

  part1Questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.ans,
    numericalAnswer: item.ans,
    explanation: item.exp,
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 1 generated: ${part1Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_kinematics_part1.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part1Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
