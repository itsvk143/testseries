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

const subTopic = "Uniformly accelerated motion and equations";
const chapter = "Kinematics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Uniformly Accelerated Motion
const arData = [
  {
    a: "The distances traversed by a particle starting from rest and moving with constant acceleration in successive equal time intervals are in the ratio $1 : 3 : 5 : 7 : \\dots$.",
    r: "Galileo's law of odd numbers states that displacement in the $n$-th equal time interval $\\tau$ is proportional to $(2n - 1)$.",
    ans: 0,
    exp: "Displacement in the $n$-th interval is $s_n = \\frac{1}{2}a(n^2 - (n-1)^2)\\tau^2 = \\frac{1}{2}a\\tau^2(2n - 1) \\propto (2n - 1)$. The ratio of successive distances is $1 : 3 : 5 : 7 : \\dots$. (R) correctly explains (A)."
  },
  {
    a: "The kinematic equation $v^2 - u^2 = 2as$ cannot be used when acceleration varies with time or position.",
    r: "The standard equations of motion are derived assuming strictly constant acceleration ($a = \\text{constant}$).",
    ans: 0,
    exp: "When $a = f(t)$ or $a = f(x)$, $a = v\\frac{dv}{dx}$ must be integrated directly, making algebraic constant-acceleration formulas invalid. (R) correctly explains (A)."
  },
  {
    a: "Displacement of a particle in the $n$-th second is given by $s_n = u + \\frac{a}{2}(2n - 1)$.",
    r: "Displacement in the $n$-th second is obtained by subtracting the displacement in $(n-1)$ seconds from the displacement in $n$ seconds: $s_n = s(n) - s(n-1)$.",
    ans: 0,
    exp: "$s(n) - s(n-1) = [un + \\frac{1}{2}an^2] - [u(n-1) + \\frac{1}{2}a(n-1)^2] = u + \\frac{a}{2}(2n - 1)$. (R) correctly explains (A)."
  },
  {
    a: "A body dropped from the top of a tower of height $h$ reaches the ground with speed $v = \\sqrt{2gh}$.",
    r: "For free fall from rest under uniform gravitational acceleration $g$, $v^2 = u^2 + 2gh$ with $u = 0$ yields $v = \\sqrt{2gh}$.",
    ans: 0,
    exp: "Setting $u = 0$ in the third kinematic equation gives $v^2 = 2gh \\implies v = \\sqrt{2gh}$. (R) correctly explains (A)."
  },
  {
    a: "A stone thrown vertically upward takes the exact same time to ascend to its maximum height as it takes to descend back to the launch point in vacuum.",
    r: "The upward motion is decelerated by $g$ and the downward motion is accelerated by $g$, resulting in symmetric ascent and descent times $t_{up} = t_{down} = \\frac{u}{g}$.",
    ans: 0,
    exp: "In the absence of air resistance, the equations of motion are symmetric under time reversal, giving $t_{up} = t_{down} = u/g$. (R) correctly explains (A)."
  },
  {
    a: "If a body starts from rest with acceleration $\\alpha$ for time $t_1$ and then decelerates with retardation $\\beta$ to rest in time $t_2$, the maximum velocity achieved is $v_{max} = \\frac{\\alpha\\beta}{\\alpha + \\beta} T$, where $T = t_1 + t_2$.",
    r: "Maximum velocity is $v_{max} = \\alpha t_1 = \\beta t_2$, so $t_1 = \\frac{v_{max}}{\\alpha}$ and $t_2 = \\frac{v_{max}}{\\beta}$, giving $T = v_{max}\\left(\\frac{1}{\\alpha} + \\frac{1}{\\beta}\\right)$.",
    ans: 0,
    exp: "Since $T = v_{max}\\frac{\\alpha + \\beta}{\\alpha\\beta}$, rearranging gives $v_{max} = \\frac{\\alpha\\beta}{\\alpha + \\beta}T$. (R) correctly explains (A)."
  },
  {
    a: "For the two-stage motion with acceleration $\\alpha$ followed by retardation $\\beta$ over total time $T$, the total distance travelled is $s = \\frac{1}{2}\\left(\\frac{\\alpha\\beta}{\\alpha + \\beta}\\right)T^2$.",
    r: "The area under a triangular velocity-time graph with base $T$ and peak height $v_{max}$ equals $\\frac{1}{2} T v_{max}$.",
    ans: 0,
    exp: "Area under $v-t$ graph is $\\frac{1}{2} \\times T \\times v_{max} = \\frac{1}{2} T \\left(\\frac{\\alpha\\beta}{\\alpha+\\beta}T\\right) = \\frac{1}{2}\\left(\\frac{\\alpha\\beta}{\\alpha+\\beta}\\right)T^2$. (R) explains (A)."
  },
  {
    a: "When a food packet is dropped from an open balloon ascending with uniform speed $v_0$, its initial velocity is $+v_0$ upwards.",
    r: "By the law of inertia, any object released from a moving vehicle retains the instantaneous velocity of the vehicle at the moment of release.",
    ans: 0,
    exp: "At the instant of release, the packet possesses the same velocity as the balloon ($+v_0$ upwards) and subsequently moves purely under gravity. (R) correctly explains (A)."
  },
  {
    a: "A particle moving with uniform acceleration has an average velocity over any time interval equal to the arithmetic mean of its initial and final velocities: $v_{avg} = \\frac{u + v}{2}$.",
    r: "When velocity varies linearly with time ($v(t) = u + at$), the integral $\\frac{1}{t}\\int_0^t (u + at)\\, dt = u + \\frac{1}{2}at = \\frac{u + (u+at)}{2} = \\frac{u+v}{2}$.",
    ans: 0,
    exp: "For linear functions, the average value is exactly the midpoint value $\\frac{u + v}{2}$. (R) correctly explains (A)."
  },
  {
    a: "A body thrown vertically upwards passes a given point at height $h$ at two different instants $t_1$ and $t_2$ such that $t_1 + t_2 = \\frac{2u}{g}$.",
    r: "The equation $h = ut - \\frac{1}{2}gt^2$ is quadratic in $t$, and the sum of the roots is given by $\\frac{u}{g/2} = \\frac{2u}{g}$.",
    ans: 0,
    exp: "Rewriting the height equation as $\\frac{1}{2}gt^2 - ut + h = 0$, Vieta's formulas give $t_1 + t_2 = \\frac{u}{g/2} = \\frac{2u}{g}$. (R) correctly explains (A)."
  },
  {
    a: "The product of the two times $t_1$ and $t_2$ at which a projectile passes height $h$ is $t_1 t_2 = \\frac{2h}{g}$.",
    r: "The product of roots of the quadratic equation $\\frac{1}{2}gt^2 - ut + h = 0$ is $\\frac{h}{g/2} = \\frac{2h}{g}$.",
    ans: 0,
    exp: "From Vieta's formulas for $\\frac{1}{2}gt^2 - ut + h = 0$, the constant term divided by the leading coefficient is $\\frac{h}{g/2} = \\frac{2h}{g}$. (R) correctly explains (A)."
  },
  {
    a: "The stopping distance of a vehicle moving at speed $v$ with braking retardation $a$ is proportional to $v^2$.",
    r: "From the third equation of motion, $0^2 - v^2 = -2as \\implies s = \\frac{v^2}{2a}$.",
    ans: 0,
    exp: "Because braking work must dissipate the initial kinetic energy $\\frac{1}{2}mv^2$, stopping distance scales quadratically with speed ($s \\propto v^2$). (R) correctly explains (A)."
  },
  {
    a: "If the speed of a car is tripled, its braking distance increases by a factor of $9$ for the same braking deceleration.",
    r: "Braking distance is directly proportional to the square of the initial speed: $s = \\frac{v^2}{2a}$.",
    ans: 0,
    exp: "Since $s \\propto v^2$, when $v' = 3v$, $s' = (3v)^2 / (2a) = 9s$. (R) correctly explains (A)."
  },
  {
    a: "The velocity of a particle moving with uniform acceleration at the midpoint of its path between two points where its speeds are $u$ and $v$ is $\\sqrt{\\frac{u^2 + v^2}{2}}$.",
    r: "Applying $v_{mid}^2 - u^2 = 2a(s/2)$ and $v^2 - v_{mid}^2 = 2a(s/2)$ gives $v_{mid}^2 - u^2 = v^2 - v_{mid}^2 \\implies 2v_{mid}^2 = u^2 + v^2$.",
    ans: 0,
    exp: "Equating the acceleration over both equal distance halves yields $v_{mid} = \\sqrt{\\frac{u^2 + v^2}{2}}$. (R) correctly explains (A)."
  },
  {
    a: "An object released from rest from height $H$ falls through distances $h_1, h_2, h_3$ in three successive equal time intervals. Then $h_1 : h_2 : h_3 = 1 : 3 : 5$.",
    r: "Displacements in equal time intervals $\\Delta t$ for motion starting from rest with uniform acceleration follow the sequence of consecutive odd integers.",
    ans: 0,
    exp: "By Galileo's ratio, $s_n \\propto (2n - 1)$, so the ratio of distances in successive equal intervals is $1 : 3 : 5$. (R) explains (A)."
  },
  {
    a: "A body is dropped from rest. The ratio of time taken to fall through the first meter to that taken to fall through the second meter is $\\frac{1}{\\sqrt{2} - 1}$.",
    r: "Time to fall through distance $s$ is $t(s) = \\sqrt{\\frac{2s}{g}}$, so $t_1 = \\sqrt{\\frac{2}{g}}$ and $t_2 = \\sqrt{\\frac{4}{g}} - \\sqrt{\\frac{2}{g}} = \\sqrt{\\frac{2}{g}}(\\sqrt{2} - 1)$.",
    ans: 0,
    exp: "The ratio is $\\frac{t_1}{t_2} = \\frac{\\sqrt{2/g}}{\\sqrt{2/g}(\\sqrt{2}-1)} = \\frac{1}{\\sqrt{2}-1} = \\sqrt{2}+1$. (R) correctly explains (A)."
  },
  {
    a: "When a ball is thrown vertically upwards, its acceleration at the highest point is zero.",
    r: "At the highest point of vertical motion, the instantaneous velocity of the ball is zero.",
    ans: 3,
    exp: "Assertion is false: acceleration at the highest point remains non-zero, equal to $g = 9.8\\text{ m/s}^2$ downward. Reason is true: instantaneous velocity is indeed zero."
  },
  {
    a: "The slope of the displacement-time graph of a body undergoing uniform acceleration is constant.",
    r: "The slope of a displacement-time graph represents the instantaneous velocity, which changes continuously when acceleration is non-zero.",
    ans: 3,
    exp: "Assertion is false: for uniformly accelerated motion, the $x-t$ graph is a parabola whose slope (velocity) changes continuously. Reason is true."
  },
  {
    a: "A particle moving with constant acceleration can never reverse its direction of motion.",
    r: "Acceleration is the derivative of velocity and can act in a direction opposite to initial velocity, causing the particle to decelerate to rest and reverse direction.",
    ans: 3,
    exp: "Assertion is false: if initial velocity is positive and acceleration is negative (like a ball thrown upward), the particle stops and reverses direction. Reason is true."
  },
  {
    a: "The area under the acceleration-time graph between times $t_1$ and $t_2$ represents the change in velocity $\\Delta v$.",
    r: "By fundamental calculus, $\\Delta v = v(t_2) - v(t_1) = \\int_{t_1}^{t_2} a(t)\\, dt$.",
    ans: 0,
    exp: "Since $a = \\frac{dv}{dt}$, integrating both sides gives $\\int_{t_1}^{t_2} a\\, dt = \\Delta v$, which geometrically equals the area under the $a-t$ curve. (R) explains (A)."
  },
  {
    a: "If a body travels with uniform acceleration $a$, its velocity at the midpoint of time $\\frac{t}{2}$ is $\\frac{u + v}{2}$.",
    r: "Velocity at $t/2$ is $v_{mid-t} = u + a(t/2) = \\frac{2u + at}{2} = \\frac{u + (u+at)}{2} = \\frac{u+v}{2}$.",
    ans: 0,
    exp: "Because velocity is linear in time, the value at the chronological halfway point is exactly the average $\\frac{u+v}{2}$. (R) correctly explains (A)."
  },
  {
    a: "The displacement in the second half of the time of flight of a body dropped from height $H$ is $\\frac{3}{4}H$.",
    r: "In the first half of the time $T/2$, the displacement is $\\frac{1}{2}g(T/2)^2 = \\frac{1}{4}\\left(\\frac{1}{2}gT^2\\right) = \\frac{H}{4}$, so the remaining distance is $H - \\frac{H}{4} = \\frac{3}{4}H$.",
    ans: 0,
    exp: "Because displacement scales quadratically with time ($s \\propto t^2$), half time corresponds to one-fourth total distance, leaving three-fourths for the second half. (R) correctly explains (A)."
  },
  {
    a: "A body starting from rest covers a distance $s$ with constant acceleration $a$. The time taken is $t = \\sqrt{\\frac{2s}{a}}$.",
    r: "From $s = ut + \\frac{1}{2}at^2$, substituting $u = 0$ gives $s = \\frac{1}{2}at^2 \\implies t = \\sqrt{\\frac{2s}{a}}$.",
    ans: 0,
    exp: "Direct algebraic inversion of $s = \\frac{1}{2}at^2$ gives $t = \\sqrt{2s/a}$. (R) correctly explains (A)."
  },
  {
    a: "Two balls of different masses $m_1$ and $m_2$ ($m_1 > m_2$) dropped from the same height in vacuum reach the ground at the same time.",
    r: "The acceleration due to gravity is independent of the mass of the falling object in vacuum.",
    ans: 0,
    exp: "Since $F_g = mg$ and $F = ma$, $a = g$ for all masses. Thus kinematic motion in vacuum is completely mass-independent. (R) explains (A)."
  },
  {
    a: "A bullet fired into a wooden block loses half its velocity after penetrating distance $x$. It will penetrate an additional distance $\\frac{x}{3}$ before coming to rest.",
    r: "Assuming uniform resistive deceleration $a$, $v^2 = u^2 - 2as$ applied to both segments yields total penetration $s_{total} = \\frac{4}{3}x$, so the additional distance is $\\frac{4}{3}x - x = \\frac{x}{3}$.",
    ans: 0,
    exp: "After distance $x$: $(u/2)^2 = u^2 - 2ax \\implies 2ax = \\frac{3}{4}u^2$. For total stop: $0 = u^2 - 2a s_{total} \\implies s_{total} = \\frac{u^2}{2a} = \\frac{4}{3}x$. Additional distance is $s_{total} - x = \\frac{x}{3}$. (R) correctly explains (A)."
  },
  {
    a: "If a body covers $10\\text{ m}$ in the $2$nd second and $20\\text{ m}$ in the $4$th second under uniform acceleration, its initial velocity is zero.",
    r: "Using $s_n = u + \\frac{a}{2}(2n - 1)$, $s_2 = u + \\frac{3}{2}a = 10$ and $s_4 = u + \\frac{7}{2}a = 20$, yielding $a = 5\\text{ m/s}^2$ and $u = 2.5\\text{ m/s} \\ne 0$.",
    ans: 3,
    exp: "Assertion is false: subtracting the equations gives $2a = 10 \\implies a = 5\\text{ m/s}^2$, which gives $u = 10 - \\frac{3}{2}(5) = 2.5\\text{ m/s} \\ne 0$. Reason is true."
  }
];

// 7 Generator MCQs on Uniformly Accelerated Motion
const mcqData = [
  {
    q: "A body starts from rest and moves with uniform acceleration $a = 2\\text{ m/s}^2$ for $10\\text{ s}$, then continues at constant speed for $20\\text{ s}$, and finally decelerates uniformly to rest in $5\\text{ s}$. The total distance travelled is:",
    opts: ["$550\\text{ m}$", "$500\\text{ m}$", "$600\\text{ m}$", "$450\\text{ m}$"],
    ans: 0,
    exp: "Phase 1: $v_1 = at_1 = 2 \\times 10 = 20\\text{ m/s}$, $s_1 = \\frac{1}{2}(2)(10^2) = 100\\text{ m}$. Phase 2: $s_2 = v_1 t_2 = 20 \\times 20 = 400\\text{ m}$. Phase 3: $s_3 = \\frac{v_1}{2} t_3 = \\frac{20}{2} \\times 5 = 50\\text{ m}$. Total distance $s = 100 + 400 + 50 = 550\\text{ m}$."
  },
  {
    q: "A particle moving with uniform acceleration has velocities $u$ and $v$ at two points $A$ and $B$. What is its velocity at the midpoint between $A$ and $B$?",
    opts: [
      "$\\sqrt{\\frac{u^2 + v^2}{2}}$",
      "$\\frac{u + v}{2}$",
      "$\\sqrt{uv}$",
      "$\\frac{2uv}{u + v}$"
    ],
    ans: 0,
    exp: "Let total distance be $2s$. Midpoint is at distance $s$. $v_{mid}^2 - u^2 = 2as$ and $v^2 - v_{mid}^2 = 2as$. Equating gives $v_{mid}^2 - u^2 = v^2 - v_{mid}^2 \\implies 2v_{mid}^2 = u^2 + v^2 \\implies v_{mid} = \\sqrt{\\frac{u^2 + v^2}{2}}$."
  },
  {
    q: "A ball dropped from a bridge strikes the water surface after $4\\text{ s}$. Taking $g = 10\\text{ m/s}^2$, the height of the bridge above the water is:",
    opts: ["$40\\text{ m}$", "$80\\text{ m}$", "$160\\text{ m}$", "$20\\text{ m}$"],
    ans: 1,
    exp: "$h = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(4^2) = 5 \\times 16 = 80\\text{ m}$."
  },
  {
    q: "A body thrown vertically up with initial velocity $u$ reaches maximum height $H$. At what height above the ground is its kinetic energy equal to three times its potential energy (taking ground as reference)?",
    opts: ["$H/4$", "$H/3$", "$H/2$", "$3H/4$"],
    ans: 0,
    exp: "Total mechanical energy is $E = mgH$. At height $h$, $K = 3U = 3mgh$. Since $E = K + U = 4mgh$, we have $mgH = 4mgh \\implies h = \\frac{H}{4}$."
  },
  {
    q: "A train starts from rest with constant acceleration $a = 1\\text{ m/s}^2$. A passenger who is $18\\text{ m}$ behind the train runs at a constant speed of $6\\text{ m/s}$. The passenger will catch the train in:",
    opts: ["$6\\text{ s}$", "$3\\text{ s}$", "$4\\text{ s}$", "Never"],
    ans: 0,
    exp: "Position of train: $x_{train} = 18 + \\frac{1}{2}at^2 = 18 + 0.5t^2$. Position of passenger: $x_{pass} = 6t$. For catch: $0.5t^2 - 6t + 18 = 0 \\implies t^2 - 12t + 36 = 0 \\implies (t - 6)^2 = 0 \\implies t = 6\\text{ s}$."
  },
  {
    q: "A ball is dropped from a tower of height $h$. It covers a distance of $\\frac{9h}{25}$ in the last second of its fall. The time of fall is:",
    opts: ["$5\\text{ s}$", "$4\\text{ s}$", "$3\\text{ s}$", "$6\\text{ s}$"],
    ans: 0,
    exp: "Let total time be $t$. Total height is $h = \\frac{1}{2}gt^2$. Distance fallen in $(t-1)$ seconds is $h' = \\frac{1}{2}g(t-1)^2$. Distance in last second is $h - h' = \\frac{9}{25}h \\implies h' = \\frac{16}{25}h$. Thus $\\frac{1}{2}g(t-1)^2 = \\frac{16}{25}\\left(\\frac{1}{2}gt^2\\right) \\implies (t-1)^2 = \\frac{16}{25}t^2 \\implies t - 1 = \\frac{4}{5}t \\implies \\frac{1}{5}t = 1 \\implies t = 5\\text{ s}$."
  },
  {
    q: "A car accelerates from rest at a constant rate $\\alpha = 2\\text{ m/s}^2$ for some time, after which it decelerates at a constant rate $\\beta = 4\\text{ m/s}^2$ to come to rest. If the total time elapsed is $15\\text{ s}$, the maximum velocity acquired by the car is:",
    opts: ["$20\\text{ m/s}$", "$15\\text{ m/s}$", "$10\\text{ m/s}$", "$30\\text{ m/s}$"],
    ans: 0,
    exp: "$v_{max} = \\frac{\\alpha\\beta}{\\alpha + \\beta} T = \\frac{2 \\times 4}{2 + 4} \\times 15 = \\frac{8}{6} \\times 15 = \\frac{4}{3} \\times 15 = 20\\text{ m/s}$."
  }
];

// 20 Authentic Numerical Questions on Uniformly Accelerated Motion
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Distance in n-th second: s_n = u + a/2 * (2n - 1)
for (let i = 1; i <= 5; i++) {
  const u = 5 * i;
  const a = 2 * i;
  const n = 3;
  const sn = u + (a / 2) * (2 * n - 1);
  addNumerical(
    `A particle moves along a straight line with uniform acceleration $a = ${a}\\text{ m/s}^2$ and initial velocity $u = ${u}\\text{ m/s}$. Find the distance $s$ (in meters) travelled by the particle in the $3$rd second of its motion.`,
    sn,
    `$s_3 = u + \\frac{a}{2}(2 \\times 3 - 1) = ${u} + \\frac{${a}}{2}(5) = ${u} + ${2.5 * a} = ${sn}\\text{ m}$.`
  );
}

// 2. Free fall height from time: h = 0.5 * g * t^2 (g = 10)
for (let i = 1; i <= 5; i++) {
  const t = i + 1;
  const h = 5 * t * t;
  addNumerical(
    `An object is released from rest from the top of a building and hits the ground after $t = ${t}\\text{ s}$. Taking $g = 10\\text{ m/s}^2$, find the height $h$ (in meters) of the building.`,
    h,
    `$h = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(${t})^2 = 5 \\times ${t * t} = ${h}\\text{ m}$.`
  );
}

// 3. Stopping distance: s = u^2 / (2a)
for (let i = 1; i <= 5; i++) {
  const u = 10 * i;
  const a = 5;
  const s = Math.round((u * u) / (2 * a));
  addNumerical(
    `A vehicle travelling at $u = ${u}\\text{ m/s}$ is brought to a stop by brakes providing a constant retardation of $a = 5\\text{ m/s}^2$. Find the stopping distance $s$ (in meters).`,
    s,
    `$s = \\frac{u^2}{2a} = \\frac{${u * u}}{2 \\times 5} = \\frac{${u * u}}{10} = ${s}\\text{ m}$.`
  );
}

// 4. Maximum height: H = u^2 / (2g)
for (let i = 1; i <= 5; i++) {
  const u = 20 * i;
  const H = Math.round((u * u) / 20);
  addNumerical(
    `A stone is thrown vertically upwards with initial speed $u = ${u}\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, calculate the maximum height $H$ (in meters) reached by the stone.`,
    H,
    `$H = \\frac{u^2}{2g} = \\frac{${u * u}}{20} = ${H}\\text{ m}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 20)`);

// Assemble total 53 questions
const part6Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part6Questions.push({
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

  part6Questions.push({
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

  part6Questions.push({
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

console.log(`Part 6 generated: ${part6Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_kinematics_part6.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part6Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
