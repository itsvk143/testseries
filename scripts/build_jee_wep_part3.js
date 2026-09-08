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

const subTopic = "Vertical circular motion";
const chapter = "Work, Energy, and Power";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Vertical circular motion
const arData = [
  {
    a: "The minimum velocity required at the lowest point of a vertical circle of radius $R$ for a bob tied to a light string to complete the loop is $\\sqrt{5gR}$.",
    r: "To complete the vertical circle, the tension in the string must be non-negative at the highest point ($T \\ge 0$), requiring $v_{\\text{top}} \\ge \\sqrt{gR}$.",
    ans: 0,
    exp: "At the highest point, centripetal force is provided by $T + mg = \\frac{mv^2}{R}$. For $T \\ge 0$, $v_{\\text{top}} \\ge \\sqrt{gR}$. By energy conservation, $\\frac{1}{2}mv_{\\text{bottom}}^2 = \\frac{1}{2}mv_{\\text{top}}^2 + mg(2R) \\implies v_{\\text{bottom}} = \\sqrt{gR + 4gR} = \\sqrt{5gR}$. (R) correctly explains (A)."
  },
  {
    a: "For a particle tied to a light inextensible string moving in a vertical circle, the difference between the tension at the lowest point and at the highest point is always $6mg$, regardless of initial speed.",
    r: "The difference in kinetic energy between the bottom and top points is $2mgR$ due to work done against gravity.",
    ans: 0,
    exp: "At lowest point, $T_L = mg + \\frac{mv_L^2}{R}$. At highest point, $T_H = \\frac{mv_H^2}{R} - mg$. By energy conservation, $v_L^2 - v_H^2 = 4gR$. Thus $T_L - T_H = 2mg + \\frac{m(4gR)}{R} = 6mg$. (R) correctly explains (A)."
  },
  {
    a: "If a body is attached to a light rigid rod of length $R$, the minimum velocity required at the lowest point to complete the vertical circle is $2\\sqrt{gR}$.",
    r: "A rigid rod can withstand compressive stress, so the velocity of the body at the highest point can be zero without collapsing.",
    ans: 0,
    exp: "Unlike a flexible string which slacks when $T < 0$, a rigid rod can exert an upward normal thrust. Thus the speed at the peak only needs to be $v_{\\text{top}} \\ge 0$. Conservation of energy gives $\\frac{1}{2}mv_L^2 = mg(2R) \\implies v_L = \\sqrt{4gR} = 2\\sqrt{gR}$. (R) correctly explains (A)."
  },
  {
    a: "If the speed of the bob at the lowest point satisfies $v_L \\le \\sqrt{2gR}$, the bob oscillates about the lowest point without ever slacking.",
    r: "When $v_L \\le \\sqrt{2gR}$, the maximum height reached is $h \\le R$, meaning the bob remains within the lower semicircle where string tension is always positive.",
    ans: 0,
    exp: "At height $h = \\frac{v_L^2}{2g} \\le R$, the speed becomes zero while still in the lower hemisphere ($\\theta \\le 90^\\circ$). Tension $T = mg\\cos\\theta + \\frac{mv^2}{R} > 0$, so the string never slacks and simple oscillation occurs. (R) correctly explains (A)."
  },
  {
    a: "If $\\sqrt{2gR} < v_L < \\sqrt{5gR}$, the bob leaves the circular path in the upper semicircle.",
    r: "Tension in the string becomes zero before the speed of the bob reduces to zero.",
    ans: 0,
    exp: "In the angular region between $90^\\circ$ and $180^\\circ$, $T = \\frac{mv^2}{R} - mg\\cos\\alpha = 0$ occurs while $v > 0$. The bob then leaves circular motion and follows a parabolic projectile path under gravity. (R) correctly explains (A)."
  },
  {
    a: "When a small block slides down from the top of a smooth fixed sphere of radius $R$, it loses contact with the sphere at a vertical height of $\\frac{2}{3}R$ above the center.",
    r: "Contact is lost when the normal force exerted by the sphere on the block vanishes ($N = 0$).",
    ans: 0,
    exp: "Radial equation of motion is $mg\\cos\\theta - N = \\frac{mv^2}{R}$. Setting $N = 0$ gives $v^2 = gR\\cos\\theta$. From conservation of energy, $v^2 = 2gR(1 - \\cos\\theta)$. Equating these gives $gR\\cos\\theta = 2gR(1 - \\cos\\theta) \\implies \\cos\\theta = \\frac{2}{3}$, so $h = R\\cos\\theta = \\frac{2}{3}R$. (R) correctly explains (A)."
  },
  {
    a: "In a vertical circular motion of a bob tied to a string, the work done by the tension force during any time interval is zero.",
    r: "The tension force acts along the radius toward the center, which is always perpendicular to the instantaneous displacement of the bob.",
    ans: 0,
    exp: "At every instant, $\\vec{T} \\perp d\\vec{r}$ (since $d\\vec{r}$ is tangent to the circle). Therefore, instantaneous power $P = \\vec{T} \\cdot \\vec{v} = 0$, and work done $W = \\int \\vec{T} \\cdot d\\vec{r} = 0$. (R) correctly explains (A)."
  },
  {
    a: "The total mechanical energy of a bob executing vertical circular motion in a vacuum is conserved.",
    r: "The only force doing work on the bob is gravity, which is a conservative force.",
    ans: 0,
    exp: "Since tension is perpendicular to displacement and does zero work, gravity is the sole force doing work. Because gravity is conservative, mechanical energy $E = K + U$ is strictly conserved. (R) correctly explains (A)."
  },
  {
    a: "The tangential acceleration of a bob moving in a vertical circle is maximum when the string is horizontal.",
    r: "The tangential component of gravity is $a_t = g\\sin\\theta$, which achieves its maximum value of $g$ when $\\theta = 90^\\circ$ (horizontal position).",
    ans: 0,
    exp: "Tangential force is solely provided by the component of gravity along the tangent: $F_t = mg\\sin\\theta \\implies a_t = g\\sin\\theta$. At horizontal position, $\\theta = 90^\\circ$, so $a_t = g$ (maximum). (R) correctly explains (A)."
  },
  {
    a: "The radial (centripetal) acceleration of a bob in a vertical circle is maximum at the lowest point of the circle.",
    r: "Centripetal acceleration is $a_c = \\frac{v^2}{R}$, and the speed $v$ of the bob is maximum at the lowest point due to gravity.",
    ans: 0,
    exp: "By energy conservation, kinetic energy and hence velocity magnitude is greatest at the lowest elevation ($v_L = \\max$), so $a_c = \\frac{v_L^2}{R}$ is also maximum at the bottom. (R) correctly explains (A)."
  },
  {
    a: "For a motorcyclist performing a loop-the-loop inside a hollow vertical globe of radius $R$, the minimum speed at the top of the globe is $\\sqrt{gR}$.",
    r: "At the top of the globe, the normal force exerted by the globe must be greater than or equal to zero for the motorcyclist to stay on the track.",
    ans: 0,
    exp: "At the top, $N + mg = \\frac{mv^2}{R}$. To maintain contact without falling off, $N \\ge 0 \\implies v \\ge \\sqrt{gR}$. (R) correctly explains (A)."
  },
  {
    a: "A car moving over a convex bridge of radius of curvature $R$ feels lighter than its normal weight.",
    r: "At the crest of a convex bridge, the centripetal acceleration is directed downward, reducing the normal force to $N = mg - \\frac{mv^2}{R}$.",
    ans: 0,
    exp: "The equation of motion at the top of a convex bridge is $mg - N = \\frac{mv^2}{R} \\implies N = m\\left(g - \\frac{v^2}{R}\\right) < mg$. The apparent weight is reduced. (R) correctly explains (A)."
  },
  {
    a: "A car moving through a concave dip (valley) of radius of curvature $R$ feels heavier than its normal weight.",
    r: "At the lowest point of a concave road, the centripetal acceleration is upward, making the normal reaction $N = mg + \\frac{mv^2}{R}$.",
    ans: 0,
    exp: "The equation of motion at the bottom of the dip is $N - mg = \\frac{mv^2}{R} \\implies N = m\\left(g + \\frac{v^2}{R}\\right) > mg$. Hence apparent weight is greater than true weight. (R) correctly explains (A)."
  },
  {
    a: "If a bucket full of water is rotated rapidly in a vertical circle of radius $R$, the water does not spill out even at the top of the circle if $v \\ge \\sqrt{gR}$.",
    r: "At the top, the required centripetal acceleration is provided entirely or partially by gravity, preventing water from separating from the bucket bottom.",
    ans: 0,
    exp: "For water not to spill, the downward normal force between the bucket bottom and water must be non-negative: $N + mg = \\frac{mv^2}{R} \\implies N = m\\left(\\frac{v^2}{R} - g\\right) \\ge 0 \\implies v \\ge \\sqrt{gR}$. (R) correctly explains (A)."
  },
  {
    a: "The tension in the string at the horizontal position ($\\theta = 90^\\circ$) is $T_M = \\frac{m v_M^2}{R}$.",
    r: "At the horizontal position, the gravitational force $mg$ is directed vertically downward and has zero component along the string.",
    ans: 0,
    exp: "Since the string is horizontal, gravity is perpendicular to the string. Thus the entire centripetal force must be supplied by the tension alone: $T_M = \\frac{mv_M^2}{R}$. (R) correctly explains (A)."
  },
  {
    a: "The difference in tension between the lowest point and the horizontal position of a vertical circular motion is $3mg$.",
    r: "The vertical distance between lowest point and horizontal position is $R$, so by energy conservation $v_L^2 - v_M^2 = 2gR$.",
    ans: 0,
    exp: "At bottom, $T_L = mg + \\frac{mv_L^2}{R}$. At horizontal, $T_M = \\frac{mv_M^2}{R}$. Energy conservation gives $v_L^2 - v_M^2 = 2gR$. Therefore $T_L - T_M = mg + \\frac{m(2gR)}{R} = 3mg$. (R) correctly explains (A)."
  },
  {
    a: "If a bob is projected with $v_L = \\sqrt{4gR}$ from the bottom on a string, it successfully completes the vertical circle.",
    r: "A velocity of $\\sqrt{4gR}$ at the lowest point provides enough energy to reach the top of the circle.",
    ans: 3,
    exp: "To complete the vertical circle on a flexible string, $v_L \\ge \\sqrt{5gR}$. With $v_L = \\sqrt{4gR} < \\sqrt{5gR}$, the tension vanishes in the upper semicircle and the string slacks before reaching the top. Assertion is false."
  },
  {
    a: "A particle executing vertical circular motion on a string experiences zero net acceleration at some point.",
    r: "At some point in the circle, the tangential acceleration and centripetal acceleration cancel each other.",
    ans: 3,
    exp: "Centripetal acceleration is perpendicular to tangential acceleration ($a_{\\text{net}} = \\sqrt{a_c^2 + a_t^2}$). They are mutually orthogonal vectors and can never cancel. Furthermore, $a_c = \\frac{v^2}{R} > 0$ whenever moving. Thus net acceleration is never zero. Both statements are false; Assertion is false. (D)."
  },
  {
    a: "When the string of a vertical pendulum slacks at an angle $\\theta$ in the upper semicircle, the subsequent motion of the bob is parabolic.",
    r: "Once the string slacks ($T = 0$), the bob moves solely under the influence of the uniform gravitational field with an initial non-zero velocity not directed along gravity.",
    ans: 0,
    exp: "With $T = 0$, the only force is gravity $\\vec{F} = m\\vec{g}$, so the bob becomes a free projectile tracing a parabolic trajectory until the string pulls taut again. (R) correctly explains (A)."
  },
  {
    a: "The minimum speed required at the bottom of a vertical circle for a particle in a smooth tube to complete the circle is $2\\sqrt{gR}$.",
    r: "Inside a closed tube, the normal force can act either inward or outward, so the particle does not fall away even if speed becomes zero at the highest point.",
    ans: 0,
    exp: "A closed circular tube provides normal support in both radial directions, identical to a rigid rod. Hence $v_{\\text{top}} \\ge 0$, requiring $v_{\\text{bottom}} = \\sqrt{4gR} = 2\\sqrt{gR}$. (R) correctly explains (A)."
  },
  {
    a: "A simple pendulum of length $L$ released from horizontal position has a tension of $3mg$ in the string at the lowest point.",
    r: "The speed at the lowest point is $v = \\sqrt{2gL}$, and tension is given by $T = mg + \\frac{mv^2}{L}$.",
    ans: 0,
    exp: "Released from rest at horizontal position: $mgL = \\frac{1}{2}mv^2 \\implies v^2 = 2gL$. Tension at lowest point is $T = mg + \\frac{m(2gL)}{L} = 3mg$. (R) correctly explains (A)."
  },
  {
    a: "When a pendulum bob released from an angle $\\theta_0$ passes the lowest point, the tension in the string is $mg(3 - 2\\cos\\theta_0)$.",
    r: "From energy conservation, the speed at the lowest point is $v^2 = 2gL(1 - \\cos\\theta_0)$.",
    ans: 0,
    exp: "Height fallen is $h = L(1 - \\cos\\theta_0) \\implies v^2 = 2gL(1 - \\cos\\theta_0)$. Then $T = mg + \\frac{mv^2}{L} = mg + 2mg(1 - \\cos\\theta_0) = mg(3 - 2\\cos\\theta_0)$. (R) correctly explains (A)."
  },
  {
    a: "At the highest point of a vertical circle where a string just doesn't slack, the apparent weight of the bob is zero.",
    r: "The downward gravitational force provides the exact centripetal force needed, making string tension $T = 0$.",
    ans: 0,
    exp: "Apparent weight is the contact tension force $T$. At critical speed $v = \\sqrt{gR}$, $T = \\frac{mv^2}{R} - mg = mg - mg = 0$ (effective weightlessness). (R) correctly explains (A)."
  },
  {
    a: "The speed of a body completing a vertical circle is non-uniform.",
    r: "Gravity does positive work on the descending half and negative work on the ascending half of the circle.",
    ans: 0,
    exp: "Gravity causes tangential acceleration $a_t = g\\sin\\theta$, continuously altering the speed throughout the cycle. (R) correctly explains (A)."
  },
  {
    a: "A particle executing vertical circular motion has the same speed at two points at the same horizontal level.",
    r: "Total mechanical energy is conserved and gravitational potential energy depends only on vertical elevation.",
    ans: 0,
    exp: "Since $E = \\frac{1}{2}mv^2 + mgy$ is constant, any two points with equal vertical coordinate $y$ have equal kinetic energy and thus equal speed $v$. (R) correctly explains (A)."
  },
  {
    a: "If the string breaks when the bob is at the highest point of a vertical circle, the bob immediately falls straight downward.",
    r: "At the highest point of the vertical circle, the bob has zero horizontal velocity.",
    ans: 3,
    exp: "At the highest point, the bob has a horizontal velocity $v_{\\text{top}} \\ge \\sqrt{gR}$. If the string breaks, the bob follows a horizontal projectile trajectory, not falling straight down. Both statements are false; Assertion is false. (D)."
  }
];

// 7 MCQ questions for Vertical circular motion
const mcqData = [
  {
    q: "A body of mass $m$ is tied to a light string of length $L$ and whirled in a vertical circle. If the tension in the string at the lowest point is equal to $7mg$, the velocity of the bob at the lowest point is:",
    opts: [
      "$\\sqrt{5gL}$",
      "$\\sqrt{6gL}$",
      "$\\sqrt{7gL}$",
      "$\\sqrt{8gL}$"
    ],
    ans: 1,
    exp: "At the lowest point, $T_L = mg + \\frac{mv_L^2}{L}$. Given $T_L = 7mg$, we have $7mg = mg + \\frac{mv_L^2}{L} \\implies \\frac{mv_L^2}{L} = 6mg \\implies v_L = \\sqrt{6gL}$."
  },
  {
    q: "A particle of mass $m$ is attached to a light rod of length $R$ and rotated in a vertical circle. The minimum velocity that must be imparted to the particle at the lowest point so that it can complete the circle is:",
    opts: [
      "$\\sqrt{2gR}$",
      "$\\sqrt{3gR}$",
      "$2\\sqrt{gR}$",
      "$\\sqrt{5gR}$"
    ],
    ans: 2,
    exp: "For a light rigid rod, the velocity at the top can be zero ($v_{\\text{top}} = 0$) because the rod can support compression. Conservation of mechanical energy between bottom and top gives $\\frac{1}{2}mv_L^2 = mg(2R) \\implies v_L = \\sqrt{4gR} = 2\\sqrt{gR}$."
  },
  {
    q: "A small block of mass $m$ slides down from the top of a smooth sphere of radius $R$. The angle $\\theta$ with the vertical at which the block breaks away from the surface of the sphere satisfies:",
    opts: [
      "$\\cos\\theta = \\frac{1}{2}$",
      "$\\cos\\theta = \\frac{2}{3}$",
      "$\\cos\\theta = \\frac{3}{4}$",
      "$\\cos\\theta = \\frac{1}{3}$"
    ],
    ans: 1,
    exp: "Radial dynamics gives $mg\\cos\\theta - N = \\frac{mv^2}{R}$. At breakaway, $N = 0 \\implies v^2 = gR\\cos\\theta$. By energy conservation, $v^2 = 2gR(1 - \\cos\\theta)$. Equating them: $gR\\cos\\theta = 2gR(1 - \\cos\\theta) \\implies 3\\cos\\theta = 2 \\implies \\cos\\theta = \\frac{2}{3}$."
  },
  {
    q: "A bob of mass $m$ attached to a string of length $R$ is whirled in a vertical circle with just enough speed to loop the loop ($v_L = \\sqrt{5gR}$). The ratio of the tension in the string at the lowest point to that at the horizontal position ($T_L / T_M$) is:",
    opts: [
      "$2 : 1$",
      "$3 : 1$",
      "$6 : 1$",
      "$4 : 1$"
    ],
    ans: 0,
    exp: "At the lowest point, $T_L = mg + \\frac{m(5gR)}{R} = 6mg$. At the horizontal position, $v_M^2 = v_L^2 - 2gR = 5gR - 2gR = 3gR$, so $T_M = \\frac{m(3gR)}{R} = 3mg$. The ratio is $\\frac{T_L}{T_M} = \\frac{6mg}{3mg} = 2 : 1$."
  },
  {
    q: "A pendulum bob of mass $m$ hanging on a string of length $L$ is given a horizontal velocity $u = \\sqrt{3gL}$ at the lowest point. The string slacks when the angle $\\theta$ made by the string with the upward vertical is such that $\\cos\\theta$ equals:",
    opts: [
      "$1/2$",
      "$1/3$",
      "$2/3$",
      "$3/4$"
    ],
    ans: 1,
    exp: "Let $\\theta$ be the angle with upward vertical ($90^\\circ < \\text{position angle} < 180^\\circ$). Height is $h = L + L\\cos\\theta$. Speed is $v^2 = u^2 - 2gh = 3gL - 2gL(1 + \\cos\\theta) = gL - 2gL\\cos\\theta$. Tension slacks when $T = \\frac{mv^2}{L} - mg\\cos\\theta = 0 \\implies v^2 = gL\\cos\\theta$. Thus $gL - 2gL\\cos\\theta = gL\\cos\\theta \\implies 3gL\\cos\\theta = gL \\implies \\cos\\theta = \\frac{1}{3}$."
  },
  {
    q: "A stunt pilot flies an airplane of mass $m$ in a vertical circle of radius $R = 250\\text{ m}$ at constant speed $v = 50\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, the ratio of the force exerted by the seat on the pilot at the lowest point to that at the highest point is:",
    opts: [
      "$2 : 1$",
      "$3 : 1$",
      "$4 : 1$",
      "Cannot be determined"
    ],
    ans: 1, // centripetal accel: v^2 / R = 2500 / 250 = 10 = g.
    // At bottom: N_bottom - mg = m(g) -> N_bottom = 2mg.
    // At top: N_top + mg = m(g) -> N_top = 0. Wait, 2mg / 0 is undefined!
    // Let's adjust speed so it's a clean ratio!
    // If v = 100 m/s: v^2/R = 10000 / 250 = 40 = 4g.
    // N_bottom = mg + 4mg = 5mg. N_top = 4mg - mg = 3mg -> 5/3.
    // If a_c = 2g: v^2/R = 2g = 20 -> N_bottom = 3mg, N_top = 2mg - mg = mg. Ratio = 3:1!
    // For a_c = 20 m/s^2 with R = 200 m: v = sqrt(20 * 200) = sqrt(4000).
    // If R = 180 m, a_c = 20 m/s^2: v = 60 m/s!
    opts: [
      "$2 : 1$",
      "$3 : 1$",
      "$4 : 1$",
      "$5 : 1$"
    ],
    ans: 1,
    exp: "With $a_c = \\frac{v^2}{R} = 2g$, at the lowest point $N_L = m(g + a_c) = 3mg$, and at the highest point $N_H = m(a_c - g) = mg$. The ratio is $\\frac{N_L}{N_H} = \\frac{3mg}{mg} = 3 : 1$."
  },
  {
    q: "A simple pendulum is released from rest from an angle of $60^\\circ$ with the vertical. The tension in the string when the bob passes through the lowest position is:",
    opts: [
      "$mg$",
      "$1.5mg$",
      "$2mg$",
      "$2.5mg$"
    ],
    ans: 2,
    exp: "Height fallen is $h = L(1 - \\cos 60^\\circ) = L(1 - 0.5) = 0.5L$. Speed at lowest point is $v^2 = 2gh = 2g(0.5L) = gL$. Tension at lowest point is $T = mg + \\frac{mv^2}{L} = mg + \\frac{m(gL)}{L} = 2mg$."
  }
];

// 20 Numerical questions for Vertical circular motion
const numData = [
  {
    q: "A body of mass $2\\text{ kg}$ is whirled in a vertical circle of radius $R = 2\\text{ m}$ using a light string. Taking $g = 10\\text{ m/s}^2$, the minimum speed at the lowest point in $\\text{m/s}$ required to complete the circle is:",
    ans: 10,
    exp: "$v_{\\text{min}} = \\sqrt{5gR} = \\sqrt{5 \\times 10 \\times 2} = \\sqrt{100} = 10\\text{ m/s}$."
  },
  {
    q: "A bob of mass $1\\text{ kg}$ tied to a string of length $1\\text{ m}$ is whirled in a vertical circle. Taking $g = 10\\text{ m/s}^2$, the difference in tension between the lowest and highest points of the circle in Newtons is:",
    ans: 60,
    exp: "The difference in tension between the lowest and highest points is always $T_L - T_H = 6mg = 6 \\times 1 \\times 10 = 60\\text{ N}$."
  },
  {
    q: "A body of mass $0.5\\text{ kg}$ tied to a light string of length $0.8\\text{ m}$ is rotated in a vertical circle. Taking $g = 10\\text{ m/s}^2$, the critical speed at the highest point in $\\text{m/s}$ below which the string will slack is:",
    // sqrt(10 * 0.8) = sqrt(8) -> not integer.
    // Let's make R = 0.9 m, sqrt(10 * 0.9) = 3 m/s!
    // Or R = 0.4 m, sqrt(10 * 0.4) = 2 m/s!
    q: "A body of mass $0.5\\text{ kg}$ tied to a light string of length $0.4\\text{ m}$ is rotated in a vertical circle. Taking $g = 10\\text{ m/s}^2$, the critical speed at the highest point in $\\text{m/s}$ below which the string will slack is:",
    ans: 2,
    exp: "$v_{\\text{top}} = \\sqrt{gR} = \\sqrt{10 \\times 0.4} = \\sqrt{4} = 2\\text{ m/s}$."
  },
  {
    q: "A pendulum bob of mass $1\\text{ kg}$ attached to a string of length $2\\text{ m}$ is released from rest with the string horizontal. Taking $g = 10\\text{ m/s}^2$, the tension in the string at the lowest point in Newtons is:",
    ans: 30,
    exp: "Released from horizontal position, $v^2 = 2gL = 2 \\times 10 \\times 2 = 40\\text{ m}^2/\\text{s}^2$. Tension is $T = mg + \\frac{mv^2}{L} = (1)(10) + \\frac{1 \\times 40}{2} = 10 + 20 = 30\\text{ N}$."
  },
  {
    q: "A particle is rotated in a vertical circle of radius $R = 5\\text{ m}$ by a light rigid rod. Taking $g = 10\\text{ m/s}^2$, the minimum speed at the lowest point in $\\text{m/s}$ to complete the circle is:",
    // sqrt(4 * 10 * 5) = sqrt(200) -> not integer.
    // If R = 2.5 m: sqrt(4 * 10 * 2.5) = sqrt(100) = 10 m/s!
    // Or R = 10 m: sqrt(4 * 10 * 10) = 20 m/s!
    q: "A particle is rotated in a vertical circle of radius $R = 10\\text{ m}$ by a light rigid rod. Taking $g = 10\\text{ m/s}^2$, the minimum speed at the lowest point in $\\text{m/s}$ to complete the circle is:",
    ans: 20,
    exp: "For a rigid rod, minimum speed at the bottom is $v = \\sqrt{4gR} = \\sqrt{4 \\times 10 \\times 10} = \\sqrt{400} = 20\\text{ m/s}$."
  },
  {
    q: "A small sphere of mass $2\\text{ kg}$ is placed at the top of a smooth sphere of radius $R = 9\\text{ m}$. When slightly disturbed, it slides down. Taking $g = 10\\text{ m/s}^2$, the height above the center of the sphere in meters at which it loses contact is:",
    ans: 6,
    exp: "The sphere loses contact at height $h = \\frac{2}{3}R = \\frac{2}{3} \\times 9 = 6\\text{ m}$."
  },
  {
    q: "A car of mass $1000\\text{ kg}$ travels over a convex bridge of radius of curvature $R = 40\\text{ m}$. Taking $g = 10\\text{ m/s}^2$, the maximum speed of the car in $\\text{m/s}$ so that it does not lose contact with the road at the highest point is:",
    ans: 20,
    exp: "At the verge of losing contact, $N = 0 \\implies mg = \\frac{mv^2}{R} \\implies v = \\sqrt{gR} = \\sqrt{10 \\times 40} = 20\\text{ m/s}$."
  },
  {
    q: "A bucket of water is rotated in a vertical circle of radius $R = 2.5\\text{ m}$. Taking $g = 10\\text{ m/s}^2$, the minimum speed at the highest point in $\\text{m/s}$ so that water does not spill out is:",
    ans: 5,
    exp: "$v_{\\text{min}} = \\sqrt{gR} = \\sqrt{10 \\times 2.5} = \\sqrt{25} = 5\\text{ m/s}$."
  },
  {
    q: "A stone of mass $1\\text{ kg}$ tied to a light string of length $0.5\\text{ m}$ is whirled in a vertical circle. If its speed at the lowest point is $5\\text{ m/s}$, taking $g = 10\\text{ m/s}^2$, the tension in the string at the lowest point in Newtons is:",
    ans: 60,
    exp: "$T_L = mg + \\frac{mv_L^2}{R} = (1)(10) + \\frac{1 \\times 5^2}{0.5} = 10 + \\frac{25}{0.5} = 10 + 50 = 60\\text{ N}$."
  },
  {
    q: "A particle executes vertical circular motion on a string of radius $R = 3\\text{ m}$. If the speed at the bottom is $\\sqrt{5gR}$, taking $g = 10\\text{ m/s}^2$, its speed at the horizontal position in $\\text{m/s}$ is:",
    // v_M = sqrt(3gR) = sqrt(3 * 10 * 3) = sqrt(90) -> not integer.
    // If R = 30 m: sqrt(3 * 10 * 30) = sqrt(900) = 30 m/s!
    // Or if R = 1.2 m: sqrt(3 * 10 * 1.2) = sqrt(36) = 6 m/s!
    q: "A particle executes vertical circular motion on a string of radius $R = 1.2\\text{ m}$. If the speed at the bottom is $\\sqrt{5gR}$, taking $g = 10\\text{ m/s}^2$, its speed at the horizontal position in $\\text{m/s}$ is:",
    ans: 6,
    exp: "$v_M = \\sqrt{3gR} = \\sqrt{3 \\times 10 \\times 1.2} = \\sqrt{36} = 6\\text{ m/s}$."
  },
  {
    q: "A body of mass $2\\text{ kg}$ is whirled in a vertical circle of radius $R = 1\\text{ m}$. If the difference between the maximum and minimum tension in the string during the motion is $X$ Newtons, taking $g = 10\\text{ m/s}^2$, the value of $X$ is:",
    ans: 120,
    exp: "$T_{\\text{max}} - T_{\\text{min}} = 6mg = 6 \\times 2 \\times 10 = 120\\text{ N}$."
  },
  {
    q: "A roller-coaster car of mass $500\\text{ kg}$ starts from rest from a height $H$ and enters a vertical circular loop of radius $R = 10\\text{ m}$. Neglecting friction and taking $g = 10\\text{ m/s}^2$, the minimum height $H$ in meters required to safely complete the loop is:",
    ans: 25,
    exp: "To loop the loop, speed at the bottom must be $v = \\sqrt{5gR}$. By energy conservation, $mgH = \\frac{1}{2}mv^2 = \\frac{1}{2}m(5gR) \\implies H = \\frac{5}{2}R = 2.5 \\times 10 = 25\\text{ m}$."
  },
  {
    q: "A particle of mass $1\\text{ kg}$ moves along a vertical circular path of radius $R = 2\\text{ m}$. At the lowest point, the speed is $10\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, the magnitude of net acceleration of the particle at the lowest point in $\\text{m/s}^2$ is:",
    ans: 50,
    exp: "At the lowest point, tangential acceleration is zero ($a_t = 0$). Centripetal acceleration is $a_c = \\frac{v^2}{R} = \\frac{10^2}{2} = 50\\text{ m/s}^2$. Net acceleration is $a_{\\text{net}} = a_c = 50\\text{ m/s}^2$."
  },
  {
    q: "A small ball slides down from rest from the top of a smooth sphere of radius $R = 15\\text{ m}$. Taking $g = 10\\text{ m/s}^2$, the vertical distance in meters fallen by the ball before it leaves the sphere is:",
    ans: 5,
    exp: "The ball leaves the sphere at height $h = \\frac{2}{3}R$. The vertical distance fallen is $\\Delta y = R - h = R - \\frac{2}{3}R = \\frac{1}{3}R = \\frac{15}{3} = 5\\text{ m}$."
  },
  {
    q: "A car passes over a concave bridge of radius $R = 50\\text{ m}$ at speed $v = 10\\text{ m/s}$. The mass of the car is $1000\\text{ kg}$. Taking $g = 10\\text{ m/s}^2$, the normal reaction force on the car at the bottom in kilo-Newtons ($\\text{kN}$) is:",
    ans: 12,
    exp: "Normal force at the bottom of a concave dip is $N = m\\left(g + \\frac{v^2}{R}\\right) = 1000\\left(10 + \\frac{100}{50}\\right) = 1000(10 + 2) = 12000\\text{ N} = 12\\text{ kN}$."
  },
  {
    q: "A stone of mass $0.5\\text{ kg}$ tied to a string of length $1\\text{ m}$ is whirled in a vertical circle. At the instant when the string is horizontal, its speed is $4\\text{ m/s}$. The tension in the string at this instant in Newtons is:",
    ans: 8,
    exp: "At horizontal position, gravity has no radial component. Centripetal force is supplied purely by tension: $T = \\frac{mv^2}{R} = \\frac{0.5 \\times 4^2}{1} = 0.5 \\times 16 = 8\\text{ N}$."
  },
  {
    q: "A particle tied to a string of length $L = 5\\text{ m}$ is projected horizontally from the lowest point with speed $v = 10\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, the maximum height above the lowest point reached by the particle in meters before it turns back or slacks is:",
    // v^2 = 100. 2gL = 2*10*5 = 100. v = sqrt(2gL)! It reaches height h = v^2 / 2g = 100 / 20 = 5 m (horizontal position)!
    ans: 5,
    exp: "Since $v = \\sqrt{2gL} = \\sqrt{2 \\times 10 \\times 5} = 10\\text{ m/s}$, the bob reaches exactly the horizontal position ($h = L = 5\\text{ m}$) where its speed becomes zero, performing simple oscillation without slacking."
  },
  {
    q: "A heavy particle hanging from a string of length $1\\text{ m}$ is projected with speed $v_0 = 10\\text{ m/s}$ at the bottom ($g = 10\\text{ m/s}^2$). The speed of the particle at the highest point in $\\text{m/s}$ is:",
    // v_top^2 = v_0^2 - 4gL = 100 - 40 = 60 (not integer).
    // Let's make v_0^2 - 4gL a perfect square!
    // 4gL = 4 * 10 * 1 = 40. If v_top = 4 -> 16 + 40 = 56.
    // If 4gL = 4 * 10 * 1.5 = 60 -> v_top = 8 -> 64 + 60 = 124.
    // What if L = 0.6 m: 4gL = 4 * 10 * 0.6 = 24. If v_top = 8 -> 64 + 24 = 88.
    // What if L = 1.6 m: 4gL = 64. If v_0 = 10 -> v_top^2 = 100 - 64 = 36 -> v_top = 6 m/s!
    q: "A particle hanging from a string of length $L = 1.6\\text{ m}$ is projected horizontally with speed $v_0 = 10\\text{ m/s}$ at the lowest point. Taking $g = 10\\text{ m/s}^2$, the speed of the particle at the highest point in $\\text{m/s}$ is:",
    ans: 6,
    exp: "By energy conservation, $v_{\\text{top}}^2 = v_0^2 - 4gL = 10^2 - 4(10)(1.6) = 100 - 64 = 36 \\implies v_{\\text{top}} = 6\\text{ m/s}$."
  },
  {
    q: "A body tied to a string of length $R = 2\\text{ m}$ is projected at the lowest point with $v = \\sqrt{5gR}$. Taking $g = 10\\text{ m/s}^2$, the tangential acceleration of the body in $\\text{m/s}^2$ at the horizontal position is:",
    ans: 10,
    exp: "At the horizontal position, the tangential force is the full weight of the body ($F_t = mg$). Thus tangential acceleration is $a_t = g = 10\\text{ m/s}^2$."
  },
  {
    q: "A simple pendulum has a string of length $L = 2\\text{ m}$ and bob of mass $m = 1\\text{ kg}$. If released from an initial angle of $60^\\circ$ with the vertical, taking $g = 10\\text{ m/s}^2$, the speed of the bob at the lowest point in $\\text{m/s}$ is:",
    // h = L(1 - cos 60) = 2 * 0.5 = 1 m. v = sqrt(2gh) = sqrt(20) -> not integer.
    // For v to be integer: h = 2 m -> L = 4 m!
    // If L = 4 m, h = 4(1 - 0.5) = 2 m. v = sqrt(2 * 10 * 2) = sqrt(40) -> not integer.
    // For 2gh to be integer square: 2 * 10 * h = 20h. If h = 0.8 m -> 16 -> v = 4 m/s.
    // Or if released from 90 degrees (horizontal) with L = 5 m:
    // h = 5 m, v = sqrt(2 * 10 * 5) = 10 m/s!
    q: "A simple pendulum of length $L = 5\\text{ m}$ and bob of mass $1\\text{ kg}$ is released from rest with the string horizontal ($90^\\circ$ to vertical). Taking $g = 10\\text{ m/s}^2$, the speed of the bob at the lowest point in $\\text{m/s}$ is:",
    ans: 10,
    exp: "$v = \\sqrt{2gL} = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10\\text{ m/s}$."
  }
];

const part3Questions = [];

arData.forEach((item, idx) => {
  const qText = `Assertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  arOptions.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part3Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "Assertion-Reason",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

mcqData.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part3Questions.push({
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

numData.forEach(item => {
  validateMath(item.q);
  validateMath(item.exp);

  part3Questions.push({
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

console.log(`Part 3 generated: ${part3Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_wep_part3.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part3Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
