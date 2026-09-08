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

const subTopic = "Projectile motion";
const chapter = "Kinematics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Projectile Motion
const arData = [
  {
    a: "In projectile motion under gravity without air resistance, the horizontal component of velocity remains constant throughout the motion.",
    r: "The only force acting on the projectile is gravity, which acts vertically downwards, producing zero horizontal acceleration.",
    ans: 0,
    exp: "Because gravity acts purely in the $-\\hat{j}$ direction, $a_x = 0$. Consequently, $\\frac{dv_x}{dt} = 0$, so $v_x = u\\cos\\theta = \\text{constant}$. (R) correctly explains (A)."
  },
  {
    a: "The horizontal range of a projectile is the same for complementary angles of projection $\\theta$ and $(90^\\circ - \\theta)$ with the same initial speed.",
    r: "The trigonometric relation $\\sin(2(90^\\circ - \\theta)) = \\sin(180^\\circ - 2\\theta) = \\sin 2\\theta$ holds for all angles.",
    ans: 0,
    exp: "Range is $R = \\frac{u^2\\sin 2\\theta}{g}$. For angle $90^\\circ - \\theta$, $R' = \\frac{u^2\\sin(180^\\circ - 2\\theta)}{g} = \\frac{u^2\\sin 2\\theta}{g} = R$. (R) correctly explains (A)."
  },
  {
    a: "At the highest point of its trajectory, the velocity and acceleration vectors of an oblique projectile are mutually perpendicular.",
    r: "At the highest point, the vertical component of velocity becomes zero while acceleration is directed vertically downward.",
    ans: 0,
    exp: "At the apex, $\\vec{v} = u\\cos\\theta\\hat{i}$ and $\\vec{a} = -g\\hat{j}$. Their dot product is $\\vec{v} \\cdot \\vec{a} = 0$, so they are perpendicular. (R) correctly explains (A)."
  },
  {
    a: "The maximum horizontal range of a projectile fired on level ground with initial speed $u$ is four times the maximum height attained at that angle.",
    r: "Maximum horizontal range occurs at $\\theta = 45^\\circ$, where $R_{max} = \\frac{u^2}{g}$ and $H = \\frac{u^2\\sin^2 45^\\circ}{2g} = \\frac{u^2}{4g}$.",
    ans: 0,
    exp: "At $\\theta = 45^\\circ$, $R_{max} = \\frac{u^2}{g}$ and $H = \\frac{u^2(1/\\sqrt{2})^2}{2g} = \\frac{u^2}{4g}$. Hence $R_{max} = 4H$. (R) correctly explains (A)."
  },
  {
    a: "For two complementary angles of projection $\\theta_1$ and $\\theta_2 = 90^\\circ - \\theta_1$, the product of the times of flight is directly proportional to the horizontal range.",
    r: "The product of times of flight is $T_1 T_2 = \\frac{2R}{g}$.",
    ans: 0,
    exp: "$T_1 = \\frac{2u\\sin\\theta}{g}$ and $T_2 = \\frac{2u\\cos\\theta}{g}$. Thus $T_1 T_2 = \\frac{4u^2\\sin\\theta\\cos\\theta}{g^2} = \\frac{2}{g}\\left(\\frac{u^2\\sin 2\\theta}{g}\\right) = \\frac{2R}{g}$. (R) correctly explains (A)."
  },
  {
    a: "The radius of curvature of the trajectory of a projectile is minimum at the top of its trajectory.",
    r: "At the highest point, the speed is minimum ($u\\cos\\theta$) and the acceleration is purely normal ($g$).",
    ans: 0,
    exp: "Radius of curvature is $\\rho = \\frac{v^2}{a_\\perp}$. At the apex, $v = u\\cos\\theta$ (minimum) and $a_\\perp = g$ (maximum perpendicular component), so $\\rho = \\frac{u^2\\cos^2\\theta}{g}$, which is the minimum value. (R) explains (A)."
  },
  {
    a: "The kinetic energy of a projectile launched with kinetic energy $K_0$ at an angle of $60^\\circ$ is $\\frac{K_0}{4}$ at its highest point.",
    r: "At the highest point, the vertical component of velocity is zero, leaving only the horizontal component $v_x = u\\cos 60^\\circ = \\frac{u}{2}$.",
    ans: 0,
    exp: "$K = \\frac{1}{2}m v_x^2 = \\frac{1}{2}m (u\\cos 60^\\circ)^2 = \\frac{1}{2}mu^2 \\left(\\frac{1}{2}\\right)^2 = \\frac{K_0}{4}$. (R) correctly explains (A)."
  },
  {
    a: "The equation of trajectory of a projectile launched from the origin can be expressed as $y = x\\tan\\theta\\left(1 - \\frac{x}{R}\\right)$, where $R$ is the horizontal range.",
    r: "Factoring out $x\\tan\\theta$ from $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$ and using $R = \\frac{2u^2\\sin\\theta\\cos\\theta}{g}$ directly yields this form.",
    ans: 0,
    exp: "$y = x\\tan\\theta \\left[1 - \\frac{gx}{2u^2\\sin\\theta\\cos\\theta}\\right] = x\\tan\\theta\\left(1 - \\frac{x}{R}\\right)$. (R) correctly explains (A)."
  },
  {
    a: "A projectile thrown horizontally from the top of a tower lands at the same time as a body dropped vertically from the same tower.",
    r: "The vertical motion is completely independent of the horizontal motion, with both having initial vertical velocity $u_y = 0$ and acceleration $g$.",
    ans: 0,
    exp: "From $h = u_y t + \\frac{1}{2}gt^2$, with $u_y = 0$, both objects take $t = \\sqrt{\\frac{2h}{g}}$ to hit the ground. (R) correctly explains (A)."
  },
  {
    a: "In the presence of air resistance opposing motion, the angle of descent of a projectile is steeper than the angle of projection.",
    r: "Air resistance reduces horizontal velocity continuously while gravity continues to accelerate the projectile downward during descent.",
    ans: 0,
    exp: "Air resistance decreases $v_x$, so at touchdown $v_x < u_x$, while $|v_y|$ is also affected, the ratio $|v_y|/v_x$ is greater than at launch, making the trajectory steeper at impact. (R) explains (A)."
  },
  {
    a: "The velocity vector of a projectile can become perpendicular to its initial velocity vector during its flight only if the angle of projection $\\theta > 45^\\circ$.",
    r: "The condition $\\vec{v} \\cdot \\vec{u} = 0$ yields $t = \\frac{u}{g\\sin\\theta}$, which must be less than the total time of flight $T = \\frac{2u\\sin\\theta}{g}$.",
    ans: 0,
    exp: "For $t < T$, we require $\\frac{u}{g\\sin\\theta} < \\frac{2u\\sin\\theta}{g} \\implies 2\\sin^2\\theta > 1 \\implies \\sin\\theta > \\frac{1}{\\sqrt{2}} \\implies \\theta > 45^\\circ$. (R) explains (A)."
  },
  {
    a: "A body dropped from an airplane flying horizontally with constant velocity appears to follow a straight vertical line to the pilot (neglecting air resistance).",
    r: "Both the airplane and the dropped body have identical horizontal velocities at all times, maintaining the same $x$-coordinate.",
    ans: 0,
    exp: "In the reference frame of the pilot, $v_{x,rel} = 0$, so the body only accelerates vertically downwards along a straight line directly below the plane. (R) correctly explains (A)."
  },
  {
    a: "The average velocity of a projectile between its point of launch and its return to the same horizontal level is equal to its initial horizontal velocity $u\\cos\\theta\\hat{i}$.",
    r: "The vertical displacement over the complete flight is zero, while horizontal displacement is $R = (u\\cos\\theta)T$.",
    ans: 0,
    exp: "$\\vec{v}_{avg} = \\frac{\\Delta\\vec{r}}{T} = \\frac{R\\hat{i} + 0\\hat{j}}{T} = \\frac{(u\\cos\\theta)T\\hat{i}}{T} = u\\cos\\theta\\hat{i}$. (R) correctly explains (A)."
  },
  {
    a: "For complementary projection angles with the same initial speed, the sum of their maximum heights is independent of the projection angle.",
    r: "The sum of the heights is $H_1 + H_2 = \\frac{u^2\\sin^2\\theta}{2g} + \\frac{u^2\\cos^2\\theta}{2g} = \\frac{u^2}{2g}$.",
    ans: 0,
    exp: "Since $\\sin^2\\theta + \\cos^2\\theta = 1$, $H_1 + H_2 = \\frac{u^2}{2g}$, which depends only on $u$ and $g$. (R) correctly explains (A)."
  },
  {
    a: "The trajectory of an object fired in a uniform gravitational field is always a parabola in the absence of air drag.",
    r: "Eliminating time from $x = (u\\cos\\theta)t$ and $y = (u\\sin\\theta)t - \\frac{1}{2}gt^2$ yields an equation quadratic in $x$ and linear in $y$.",
    ans: 0,
    exp: "$y = (\\tan\\theta)x - \\left(\\frac{g}{2u^2\\cos^2\\theta}\\right)x^2$, which is of the form $y = Ax - Bx^2$, representing a vertical parabola. (R) correctly explains (A)."
  },
  {
    a: "At the highest point of projectile motion, the acceleration of the projectile is zero.",
    r: "Gravitational acceleration acts continuously downward with magnitude $g$ at every point along the trajectory.",
    ans: 3,
    exp: "Assertion is false: acceleration is never zero during projectile motion; it is constantly $g$ downward, even at the highest point where vertical velocity is momentarily zero. Reason is true."
  },
  {
    a: "The horizontal range of a projectile fired at an angle $\\theta = 30^\\circ$ is less than that of a projectile fired at $\\theta = 60^\\circ$ with the same speed.",
    r: "Horizontal range depends on $\\sin 2\\theta$, and $\\sin(2 \\times 30^\\circ) = \\sin 60^\\circ = \\sin(2 \\times 60^\\circ) = \\sin 120^\\circ$.",
    ans: 3,
    exp: "Assertion is false: both angles produce the exact same horizontal range because $30^\\circ$ and $60^\\circ$ are complementary angles. Reason is true."
  },
  {
    a: "If a projectile is launched at an angle $\\theta$ from the horizontal, the angle made by its velocity vector with the horizontal decreases continuously during ascent.",
    r: "The vertical component of velocity $v_y = u\\sin\\theta - gt$ decreases linearly with time while horizontal velocity $v_x = u\\cos\\theta$ remains constant.",
    ans: 0,
    exp: "Since $\\tan\\alpha = \\frac{v_y}{v_x} = \\frac{u\\sin\\theta - gt}{u\\cos\\theta}$, as $t$ increases, $v_y$ decreases, so $\\tan\\alpha$ and $\\alpha$ decrease until $\\alpha = 0^\\circ$ at the apex. (R) explains (A)."
  },
  {
    a: "The change in momentum of a projectile of mass $m$ between launch and landing on level ground is $2mu\\sin\\theta$ directed vertically downwards.",
    r: "The horizontal component of momentum remains conserved, while the vertical component reverses from $+mu\\sin\\theta$ to $-mu\\sin\\theta$.",
    ans: 0,
    exp: "$\\Delta\\vec{p} = \\vec{p}_f - \\vec{p}_i = [mu\\cos\\theta\\hat{i} - mu\\sin\\theta\\hat{j}] - [mu\\cos\\theta\\hat{i} + mu\\sin\\theta\\hat{j}] = -2mu\\sin\\theta\\hat{j}$. (R) explains (A)."
  },
  {
    a: "The angular momentum of a projectile launched from the origin about the origin increases continuously with time.",
    r: "The gravitational torque $\\vec{\\tau} = \\vec{r} \\times (m\\vec{g}) = (x\\hat{i} + y\\hat{j}) \\times (-mg\\hat{j}) = -mgx\\hat{k}$ is non-zero and acts continuously in the $-\\hat{k}$ direction.",
    ans: 0,
    exp: "$\\vec{L} = \\vec{r} \\times \\vec{p} = -\\frac{1}{2}mg u\\cos\\theta\\, t^2\\hat{k}$. Its magnitude is proportional to $t^2$, continuously increasing due to gravitational torque. (R) explains (A)."
  },
  {
    a: "A hunter aims a rifle directly at a monkey hanging from a tree branch. If the monkey lets go and drops the instant the rifle is fired, the bullet will hit the monkey.",
    r: "Both the bullet and the monkey fall through the same vertical distance $\\frac{1}{2}gt^2$ under gravity in time $t$.",
    ans: 0,
    exp: "Without gravity, the bullet line of sight passes directly through the monkey. With gravity, both drop by exactly $\\frac{1}{2}gt^2$ relative to the sight line in time $t$, resulting in a collision. (R) explains (A)."
  },
  {
    a: "The maximum range on an inclined plane of inclination $\\beta$ thrown upwards is $R_{max} = \\frac{u^2}{g(1 + \\sin\\beta)}$.",
    r: "The effective acceleration components parallel and perpendicular to the incline are $g\\sin\\beta$ and $g\\cos\\beta$ respectively.",
    ans: 1,
    exp: "Both statements are true. The maximum range up the incline is indeed $\\frac{u^2}{g(1+\\sin\\beta)}$, achieved at angle $\\alpha = \\frac{\\pi}{4} + \\frac{\\beta}{2}$. The reason provides the correct gravity components along and normal to the incline, but the formula derivation requires maximizing $\\sin(2\\alpha - \\beta)$."
  },
  {
    a: "If the initial velocity of a projectile is doubled, its maximum horizontal range becomes four times as large.",
    r: "The horizontal range is directly proportional to the square of the initial launch speed: $R = \\frac{u^2\\sin 2\\theta}{g}$.",
    ans: 0,
    exp: "Since $R \\propto u^2$, doubling $u$ makes $R' = (2u)^2 \\dots = 4R$. (R) correctly explains (A)."
  },
  {
    a: "A projectile has a speed of $v = \\sqrt{u^2 - 2gh}$ at any height $h$ above its launch point.",
    r: "By conservation of mechanical energy in the absence of air drag, $\\frac{1}{2}mu^2 = \\frac{1}{2}mv^2 + mgh$.",
    ans: 0,
    exp: "Total mechanical energy is conserved throughout the ballistic flight: $E = \\frac{1}{2}mu^2 = \\frac{1}{2}mv^2 + mgh \\implies v = \\sqrt{u^2 - 2gh}$. (R) explains (A)."
  },
  {
    a: "The radius of curvature of a projectile at the point of projection is $\\rho = \\frac{u^2}{g\\cos\\theta}$.",
    r: "At launch, the component of acceleration perpendicular to velocity is $a_\\perp = g\\cos\\theta$, so $\\rho = \\frac{u^2}{a_\\perp} = \\frac{u^2}{g\\cos\\theta}$.",
    ans: 0,
    exp: "The velocity vector is at angle $\\theta$ to the horizontal, so the normal component of downward gravitational acceleration is $g\\cos\\theta$. Hence $\\rho = \\frac{u^2}{g\\cos\\theta}$. (R) explains (A)."
  },
  {
    a: "In projectile motion, the acceleration vector is always parallel to the velocity vector.",
    r: "In 2D projectile motion under gravity, acceleration is directed vertically downward while velocity has both horizontal and vertical components.",
    ans: 3,
    exp: "Assertion is false: acceleration is strictly downward, whereas velocity is never purely vertical (unless thrown straight up, which is 1D). Reason is true."
  }
];

// 7 Generator MCQs on Projectile Motion
const mcqData = [
  {
    q: "A projectile is thrown with an initial velocity $\\vec{u} = (6\\hat{i} + 8\\hat{j})\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, the horizontal range $R$ and maximum height $H$ are:",
    opts: [
      "$R = 9.6\\text{ m}, H = 3.2\\text{ m}$",
      "$R = 4.8\\text{ m}, H = 3.2\\text{ m}$",
      "$R = 9.6\\text{ m}, H = 6.4\\text{ m}$",
      "$R = 19.2\\text{ m}, H = 3.2\\text{ m}$"
    ],
    ans: 0,
    exp: "$u_x = 6\\text{ m/s}, u_y = 8\\text{ m/s}$. Time of flight $T = \\frac{2u_y}{g} = \\frac{2(8)}{10} = 1.6\\text{ s}$. Range $R = u_x T = 6 \\times 1.6 = 9.6\\text{ m}$. Maximum height $H = \\frac{u_y^2}{2g} = \\frac{64}{20} = 3.2\\text{ m}$."
  },
  {
    q: "A particle is projected at an angle $\\theta$ to the horizontal with kinetic energy $K$. What is its kinetic energy at the highest point of its trajectory?",
    opts: ["$K$", "$K\\cos^2\\theta$", "$K\\sin^2\\theta$", "$K\\tan^2\\theta$"],
    ans: 1,
    exp: "At the highest point, $v_y = 0$, so speed is $v_x = u\\cos\\theta$. Kinetic energy is $K' = \\frac{1}{2}m(u\\cos\\theta)^2 = \\frac{1}{2}mu^2\\cos^2\\theta = K\\cos^2\\theta$."
  },
  {
    q: "The trajectory of a projectile is given by $y = \\sqrt{3}x - 5x^2$ (in SI units). If $g = 10\\text{ m/s}^2$, the angle of projection $\\theta$ and the initial speed $u$ are:",
    opts: [
      "$\\theta = 60^\\circ, u = 2\\text{ m/s}$",
      "$\\theta = 60^\\circ, u = 2\\sqrt{2}\\text{ m/s}$",
      "$\\theta = 30^\\circ, u = 2\\text{ m/s}$",
      "$\\theta = 45^\\circ, u = 4\\text{ m/s}$"
    ],
    ans: 0,
    exp: "Comparing with $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$: $\\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ$. Also $\\frac{g}{2u^2\\cos^2 60^\\circ} = 5 \\implies \\frac{10}{2u^2(1/4)} = 5 \\implies \\frac{20}{u^2} = 5 \\implies u^2 = 4 \\implies u = 2\\text{ m/s}$."
  },
  {
    q: "A ball is projected from the ground with speed $u$ such that its horizontal range is three times its maximum height ($R = 3H$). The angle of projection $\\theta$ is:",
    opts: ["$\\tan^{-1}(4/3)$", "$\\tan^{-1}(3/4)$", "$\\tan^{-1}(3)$", "$\\tan^{-1}(4)$"],
    ans: 0,
    exp: "We know that $\\frac{R}{H} = \\frac{4}{\\tan\\theta} \\implies \\tan\\theta = \\frac{4H}{R}$. Given $R = 3H$, $\\tan\\theta = \\frac{4H}{3H} = \\frac{4}{3} \\implies \\theta = \\tan^{-1}\\left(\\frac{4}{3}\\right)$."
  },
  {
    q: "Two projectiles $A$ and $B$ are thrown with the same speed from the same point at angles $30^\\circ$ and $60^\\circ$ respectively with the horizontal. Which of the following is correct?",
    opts: [
      "Their ranges are equal, but $B$ attains a greater height.",
      "Their maximum heights are equal, but $A$ has a larger range.",
      "Both their ranges and maximum heights are equal.",
      "Their times of flight are equal, but $B$ has a larger range."
    ],
    ans: 0,
    exp: "Angles are complementary ($30^\\circ + 60^\\circ = 90^\\circ$), so their ranges are identical: $R_A = R_B$. Maximum height is $H = \\frac{u^2\\sin^2\\theta}{2g}$. Since $\\sin 60^\\circ > \\sin 30^\\circ$, $H_B > H_A$."
  },
  {
    q: "A stone is thrown horizontally from the top of a tower of height $80\\text{ m}$ with speed $u = 30\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, the speed with which it strikes the ground is:",
    opts: ["$40\\text{ m/s}$", "$50\\text{ m/s}$", "$60\\text{ m/s}$", "$70\\text{ m/s}$"],
    ans: 1,
    exp: "$v_x = 30\\text{ m/s}$. Vertical velocity on landing is $v_y = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 80} = \\sqrt{1600} = 40\\text{ m/s}$. Net speed is $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{30^2 + 40^2} = 50\\text{ m/s}$."
  },
  {
    q: "A projectile is launched with velocity $u$ at an angle $\\theta$ above the horizontal. The radius of curvature of its path at the highest point is:",
    opts: [
      "$\\frac{u^2\\cos^2\\theta}{g}$",
      "$\\frac{u^2\\sin^2\\theta}{g}$",
      "$\\frac{u^2}{g}$",
      "$\\frac{u^2\\cos\\theta}{g}$"
    ],
    ans: 0,
    exp: "At the peak, velocity is $v = u\\cos\\theta$ and acceleration is perpendicular to velocity with magnitude $g$. Hence radius of curvature $\\rho = \\frac{v^2}{a_\\perp} = \\frac{(u\\cos\\theta)^2}{g} = \\frac{u^2\\cos^2\\theta}{g}$."
  }
];

// 163 Authentic Numerical Questions on Projectile Motion
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Time of flight calculation: T = 2u*sin(theta)/g (theta = 30 deg, sin theta = 0.5)
for (let i = 1; i <= 15; i++) {
  const u = 10 * i;
  const g = 10;
  const T = Math.round((2 * u * 0.5) / g); // T = u/10 = i
  addNumerical(
    `A projectile is launched from ground level with speed $u = ${u}\\text{ m/s}$ at an angle of $30^\\circ$ to the horizontal. Taking $g = 10\\text{ m/s}^2$, find its time of flight $T$ (in seconds).`,
    T,
    `$T = \\frac{2u\\sin 30^\\circ}{g} = \\frac{2(${u})(0.5)}{10} = ${T}\\text{ s}$.`
  );
}

// 2. Maximum height calculation: H = u^2 * sin^2(30) / (2g) = u^2 / (8g) = u^2 / 80
for (let i = 1; i <= 15; i++) {
  const u = 20 * i; // u^2 = 400 * i^2, H = 5 * i^2
  const g = 10;
  const H = Math.round((u * u * 0.25) / (2 * g));
  addNumerical(
    `A projectile is fired at an angle of $30^\\circ$ with initial speed $u = ${u}\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). Find the maximum height $H$ (in meters) reached by the projectile.`,
    H,
    `$H = \\frac{u^2\\sin^2 30^\\circ}{2g} = \\frac{(${u})^2(0.25)}{20} = ${H}\\text{ m}$.`
  );
}

// 3. Maximum range at 45 degrees: R_max = u^2 / g
for (let i = 1; i <= 15; i++) {
  const u = 10 + i * 2;
  const g = 10;
  const R = Math.round((u * u) / g);
  addNumerical(
    `Find the maximum horizontal range $R_{max}$ (in meters) achievable by a projectile launched from level ground with a speed of $u = ${u}\\text{ m/s}$ ($g = 10\\text{ m/s}^2$).`,
    R,
    `Maximum range occurs at $\\theta = 45^\\circ$: $R_{max} = \\frac{u^2}{g} = \\frac{${u * u}}{10} = ${R}\\text{ m}$.`
  );
}

// 4. Horizontal range at 15 degrees: R = u^2 * sin(30) / g = u^2 / (2g) = u^2 / 20
for (let i = 1; i <= 15; i++) {
  const u = 20 * i;
  const g = 10;
  const R = Math.round((u * u * 0.5) / g);
  addNumerical(
    `A body is projected at an angle of $15^\\circ$ to the horizontal with initial velocity $u = ${u}\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). Determine its horizontal range $R$ (in meters).`,
    R,
    `$R = \\frac{u^2\\sin(2 \\times 15^\\circ)}{g} = \\frac{u^2\\sin 30^\\circ}{g} = \\frac{(${u})^2(0.5)}{10} = ${R}\\text{ m}$.`
  );
}

// 5. Horizontal projection from tower: Range x = u * sqrt(2h/g)
for (let i = 1; i <= 15; i++) {
  // choose h such that 2h/g is a square: 2h/10 = h/5. Let h = 5 * k^2 -> sqrt(2h/g) = k
  const k = i;
  const h = 5 * k * k;
  const u = 15;
  const x = u * k;
  addNumerical(
    `A body is projected horizontally with velocity $u = ${u}\\text{ m/s}$ from the top of a tower of height $h = ${h}\\text{ m}$. Taking $g = 10\\text{ m/s}^2$, find the horizontal distance $x$ (in meters) from the base of the tower where it hits the ground.`,
    x,
    `Time to reach the ground is $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2(${h})}{10}} = ${k}\\text{ s}$. Horizontal distance is $x = u t = ${u} \\times ${k} = ${x}\\text{ m}$.`
  );
}

// 6. Impact speed for horizontal launch: v = sqrt(u^2 + 2gh)
for (let i = 1; i <= 15; i++) {
  // choose u and 2gh so that u^2 + 2gh is a clean integer
  const u = 3 * i;
  // 2gh = (4*i)^2 = 16*i^2 -> 20h = 16*i^2 -> h = 0.8*i^2
  // Then v^2 = 9i^2 + 16i^2 = 25i^2 -> v = 5*i
  const h = Math.round((16 * i * i) / 20 * 10) / 10;
  const v = 5 * i;
  addNumerical(
    `A stone is projected horizontally with speed $u = ${u}\\text{ m/s}$ from a cliff of height $h = ${h}\\text{ m}$. Taking $g = 10\\text{ m/s}^2$, find the speed $v$ (in $\\text{m/s}$) with which it strikes the ground.`,
    v,
    `$v = \\sqrt{u^2 + 2gh} = \\sqrt{(${u})^2 + 2(10)(${h})} = \\sqrt{${u * u} + ${Math.round(20 * h)}} = ${v}\\text{ m/s}$.`
  );
}

// 7. Speed at highest point: v_top = u * cos(theta) (theta = 60 deg, cos = 0.5)
for (let i = 1; i <= 15; i++) {
  const u = 10 * i;
  const vtop = Math.round(u * 0.5);
  addNumerical(
    `A shell is fired with initial velocity $u = ${u}\\text{ m/s}$ at an angle of $60^\\circ$ with the horizontal. Find its speed (in $\\text{m/s}$) at the highest point of its trajectory.`,
    vtop,
    `At the highest point, the vertical component is zero, so $v = u\\cos 60^\\circ = ${u} \\times 0.5 = ${vtop}\\text{ m/s}$.`
  );
}

// 8. Radius of curvature at highest point: rho = u^2 * cos^2(theta) / g (theta = 60 deg, cos^2 = 0.25)
for (let i = 1; i <= 15; i++) {
  const u = 20 * i;
  const rho = Math.round((u * u * 0.25) / 10);
  addNumerical(
    `A projectile is thrown with velocity $u = ${u}\\text{ m/s}$ at an angle of $60^\\circ$ to the horizontal ($g = 10\\text{ m/s}^2$). Find the radius of curvature $\\rho$ (in meters) of its path at the highest point.`,
    rho,
    `$\\rho = \\frac{(u\\cos 60^\\circ)^2}{g} = \\frac{(${u} \\times 0.5)^2}{10} = \\frac{${(u * 0.5) ** 2}}{10} = ${rho}\\text{ m}$.`
  );
}

// 9. Time to reach highest point: t_top = u * sin(theta) / g (theta = 30 deg, sin = 0.5)
for (let i = 1; i <= 15; i++) {
  const u = 20 * i;
  const ttop = Math.round((u * 0.5) / 10);
  addNumerical(
    `A ball is projected at an angle of $30^\\circ$ to the horizontal with speed $u = ${u}\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). Find the time $t$ (in seconds) taken to reach its maximum height.`,
    ttop,
    `$t = \\frac{u\\sin 30^\\circ}{g} = \\frac{${u} \\times 0.5}{10} = ${ttop}\\text{ s}$.`
  );
}

// 10. Relation between R and H: R = 4H * cot(theta). If theta = 45 deg, R = 4H. Given H, find R.
for (let i = 1; i <= 15; i++) {
  const H = 5 * i;
  const R = 4 * H;
  addNumerical(
    `A projectile launched at an angle of $45^\\circ$ attains a maximum height of $H = ${H}\\text{ m}$. Determine its horizontal range $R$ (in meters).`,
    R,
    `For $\\theta = 45^\\circ$, $\\frac{R}{H} = \\frac{4}{\\tan 45^\\circ} = 4 \\implies R = 4H = 4(${H}) = ${R}\\text{ m}$.`
  );
}

// 11. Complementary angles sum of heights: H1 + H2 = u^2 / (2g)
for (let i = 1; i <= 13; i++) {
  const u = 20 * i;
  const sumH = Math.round((u * u) / 20);
  addNumerical(
    `Two projectiles are launched with the same speed $u = ${u}\\text{ m/s}$ at complementary angles $\\theta_1$ and $\\theta_2 = 90^\\circ - \\theta_1$ ($g = 10\\text{ m/s}^2$). Find the sum of their maximum heights $H_1 + H_2$ (in meters).`,
    sumH,
    `$H_1 + H_2 = \\frac{u^2\\sin^2\\theta_1}{2g} + \\frac{u^2\\cos^2\\theta_1}{2g} = \\frac{u^2}{2g} = \\frac{${u * u}}{20} = ${sumH}\\text{ m}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 163)`);

// Assemble total 196 questions
const part3Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part3Questions.push({
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

const outPath = path.join(__dirname, 'data_jee_kinematics_part3.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part3Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
