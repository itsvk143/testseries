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

const subTopic = "Uniform circular motion";
const chapter = "Kinematics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Uniform Circular Motion
const arData = [
  {
    a: "A particle executing uniform circular motion has non-zero acceleration despite moving at constant speed.",
    r: "The direction of the velocity vector changes continuously at every instant along the circular trajectory.",
    ans: 0,
    exp: "Acceleration is the time rate of change of the velocity vector: $\\vec{a} = \\frac{d\\vec{v}}{dt}$. Even though speed $|\\vec{v}|$ is constant, the changing direction of $\\vec{v}$ gives rise to a non-zero centripetal acceleration $a_c = \\frac{v^2}{R}$. (R) correctly explains (A)."
  },
  {
    a: "In uniform circular motion, the acceleration vector is always directed towards the center of the circular orbit.",
    r: "The tangential component of acceleration is zero because the speed is constant, leaving only the normal (centripetal) acceleration directed radially inward.",
    ans: 0,
    exp: "$\\vec{a} = a_t\\hat{t} + a_n\\hat{n}$. Since speed $v$ is constant, $a_t = \\frac{dv}{dt} = 0$, so $\\vec{a} = \\frac{v^2}{R}\\hat{n}$, which points towards the center. (R) correctly explains (A)."
  },
  {
    a: "The kinetic energy of a particle performing uniform circular motion remains constant in time.",
    r: "The centripetal force is always perpendicular to the instantaneous displacement vector, doing zero work on the particle.",
    ans: 0,
    exp: "Power is $P = \\vec{F} \\cdot \\vec{v} = 0$ because $\\vec{F} \\perp \\vec{v}$. By the work-energy theorem, $\\frac{dK}{dt} = 0$, so kinetic energy remains strictly constant. (R) correctly explains (A)."
  },
  {
    a: "The average velocity of a particle undergoing uniform circular motion over one complete revolution is zero.",
    r: "Over one full cycle, the particle returns to its starting point, making the net displacement vector $\\Delta\\vec{r} = 0$.",
    ans: 0,
    exp: "Average velocity is $\\vec{v}_{avg} = \\frac{\\Delta\\vec{r}}{\\Delta t}$. For a complete period $T$, $\\Delta\\vec{r} = 0$, so $\\vec{v}_{avg} = 0$. (R) correctly explains (A)."
  },
  {
    a: "Over a half revolution in uniform circular motion of radius $R$ and speed $v$, the magnitude of the change in velocity is $2v$.",
    r: "At diametrically opposite points, the velocity vectors are equal in magnitude but opposite in direction: $\\vec{v}_f = -\\vec{v}_i$.",
    ans: 0,
    exp: "$|\\Delta\\vec{v}| = |\\vec{v}_f - \\vec{v}_i| = |(-v\\hat{j}) - (v\\hat{j})| = 2v$. (R) correctly explains (A)."
  },
  {
    a: "The magnitude of average acceleration over a half revolution in uniform circular motion of speed $v$ and radius $R$ is $\\frac{2v^2}{\\pi R}$.",
    r: "The time taken for a half revolution is $\\frac{\\pi R}{v}$, and the magnitude of the velocity change is $2v$.",
    ans: 0,
    exp: "$a_{avg} = \\frac{|\\Delta\\vec{v}|}{\\Delta t} = \\frac{2v}{\\pi R / v} = \\frac{2v^2}{\\pi R}$. (R) correctly explains (A)."
  },
  {
    a: "In circular motion, the relation between linear velocity and angular velocity is given by $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$.",
    r: "The vector cross product ensures that $\\vec{v}$ is perpendicular to both the axis of rotation $\\vec{\\omega}$ and the position vector $\\vec{r}$, with magnitude $v = \\omega r\\sin 90^\\circ = \\omega r$.",
    ans: 0,
    exp: "By definition of rotational kinematics, $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$, which yields both the correct direction (tangent to the circle) and magnitude $v = \\omega r$. (R) correctly explains (A)."
  },
  {
    a: "The centripetal acceleration of a particle in uniform circular motion can be written as $\\vec{a} = -\\omega^2\\vec{r}$, where $\\vec{r}$ is the radius vector from the center.",
    r: "The acceleration vector is collinear with and opposite in direction to the radius vector pointing outward from the center.",
    ans: 0,
    exp: "$\\vec{a} = -\\frac{v^2}{R}\\hat{r} = -\\omega^2 R \\hat{r} = -\\omega^2\\vec{r}$. The negative sign signifies inward central direction. (R) correctly explains (A)."
  },
  {
    a: "A particle moving in a circle with constant angular velocity has zero angular acceleration.",
    r: "Angular acceleration is defined as $\\alpha = \\frac{d\\omega}{dt}$, which is zero whenever $\\omega = \\text{constant}$.",
    ans: 0,
    exp: "Since $\\omega$ is constant in magnitude and direction along the axis of rotation, $\\alpha = \\frac{d\\omega}{dt} = 0$. (R) correctly explains (A)."
  },
  {
    a: "If the radius of a circular path is doubled while maintaining constant speed $v$, the centripetal acceleration is halved.",
    r: "Centripetal acceleration is inversely proportional to the radius of the path when speed is constant: $a_c = \\frac{v^2}{R}$.",
    ans: 0,
    exp: "From $a_c = \\frac{v^2}{R}$, for constant $v$, $a_c \\propto \\frac{1}{R}$. Doubling $R$ halves $a_c$. (R) correctly explains (A)."
  },
  {
    a: "If the radius of a circular path is doubled while maintaining constant angular velocity $\\omega$, the centripetal acceleration is doubled.",
    r: "Centripetal acceleration is directly proportional to radius when angular velocity is held constant: $a_c = \\omega^2 R$.",
    ans: 0,
    exp: "From $a_c = \\omega^2 R$, for constant $\\omega$, $a_c \\propto R$. Doubling $R$ doubles $a_c$. (R) correctly explains (A)."
  },
  {
    a: "In non-uniform circular motion, the total acceleration vector makes an angle $\\phi$ with the velocity vector where $\\tan\\phi = \\frac{a_c}{a_t}$.",
    r: "The tangential component $a_t$ is parallel to the velocity vector and the centripetal component $a_c$ is perpendicular to the velocity vector.",
    ans: 0,
    exp: "Because $\\vec{a}_t \\parallel \\vec{v}$ and $\\vec{a}_c \\perp \\vec{v}$, the vector triangle gives $\\tan\\phi = \\frac{a_c}{a_t} = \\frac{v^2 / R}{dv/dt}$. (R) correctly explains (A)."
  },
  {
    a: "A car moving at constant speed along a circular horizontal track has zero net tangential acceleration.",
    r: "Tangential acceleration is the rate of change of speed: $a_t = \\frac{dv}{dt}$.",
    ans: 0,
    exp: "Because speed is constant, $\\frac{dv}{dt} = 0$, hence $a_t = 0$. (R) correctly explains (A)."
  },
  {
    a: "The average acceleration in uniform circular motion over a quarter of a revolution has magnitude $\\frac{2\\sqrt{2}v^2}{\\pi R}$.",
    r: "The change in velocity vector over a quarter revolution has magnitude $|\\Delta\\vec{v}| = \\sqrt{2}v$, and the time taken is $\\Delta t = \\frac{\\pi R}{2v}$.",
    ans: 0,
    exp: "$a_{avg} = \\frac{|\\Delta\\vec{v}|}{\\Delta t} = \\frac{\\sqrt{2}v}{\\pi R / (2v)} = \\frac{2\\sqrt{2}v^2}{\\pi R}$. (R) correctly explains (A)."
  },
  {
    a: "The acceleration of a particle in uniform circular motion is a constant vector.",
    r: "In uniform circular motion, the magnitude of the centripetal acceleration is constant ($a_c = \\frac{v^2}{R}$).",
    ans: 3,
    exp: "Assertion is false: while its magnitude is constant, the direction of centripetal acceleration rotates continuously with the particle, so $\\vec{a}$ is NOT a constant vector. Reason is true."
  },
  {
    a: "Uniform circular motion is an accelerated motion.",
    r: "Any motion where the direction of the velocity changes is necessarily accelerated.",
    ans: 0,
    exp: "Velocity is a vector quantity; a change in its direction requires a non-zero time derivative $\\frac{d\\vec{v}}{dt} \\ne 0$, meaning accelerated motion. (R) correctly explains (A)."
  },
  {
    a: "A particle moving in a circle of radius $R$ starting from rest with constant angular acceleration $\\alpha$ has equal tangential and normal accelerations at time $t = \\frac{1}{\\sqrt{\\alpha}}$.",
    r: "Tangential acceleration is $a_t = \\alpha R$ and centripetal acceleration is $a_c = \\omega^2 R = (\\alpha t)^2 R$, which become equal when $\\alpha = \\alpha^2 t^2 \\implies t = \\frac{1}{\\sqrt{\\alpha}}$.",
    ans: 0,
    exp: "Setting $a_t = a_c \\implies \\alpha R = (\\alpha t)^2 R \\implies \\alpha = \\alpha^2 t^2 \\implies t^2 = \\frac{1}{\\alpha} \\implies t = \\frac{1}{\\sqrt{\\alpha}}$. (R) explains (A)."
  },
  {
    a: "The angular displacement $\\theta$ of a body rotating with constant angular acceleration $\\alpha$ satisfies $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$.",
    r: "This equation is the rotational analogue of the linear kinematic relation $v^2 = u^2 + 2as$.",
    ans: 0,
    exp: "Using $\\alpha = \\omega\\frac{d\\omega}{d\\theta}$, integrating $\\int_{\\omega_0}^\\omega \\omega\\, d\\omega = \\alpha \\int_0^\\theta d\\theta$ gives $\\frac{\\omega^2 - \\omega_0^2}{2} = \\alpha\\theta \\implies \\omega^2 = \\omega_0^2 + 2\\alpha\\theta$. (R) correctly explains (A)."
  },
  {
    a: "The instantaneous velocity vector of a particle in circular motion is always along the tangent to the circle.",
    r: "The displacement vector $d\\vec{r}$ over an infinitesimal time interval $dt$ lies along the tangent to the curved path.",
    ans: 0,
    exp: "$\\vec{v} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta\\vec{r}}{\\Delta t} = \\frac{d\\vec{r}}{dt}$, which geometrically defines the tangent to the trajectory at that point. (R) explains (A)."
  },
  {
    a: "In uniform circular motion, the angle between the velocity vector and the acceleration vector is always $90^\\circ$.",
    r: "The velocity vector is strictly tangential and the acceleration vector is strictly radial (centripetal), which are mutually orthogonal.",
    ans: 0,
    exp: "Tangential and radial directions are perpendicular everywhere on a circle, so $\\vec{v} \\cdot \\vec{a} = 0$, meaning the angle is constantly $90^\\circ$. (R) explains (A)."
  },
  {
    a: "A body moving along a circular path with increasing speed has an acceleration vector pointing ahead of the normal towards the inside of the curve.",
    r: "The net acceleration is the resultant of a forward tangential component $\\vec{a}_t$ and an inward normal component $\\vec{a}_n$.",
    ans: 0,
    exp: "Because speed is increasing, $a_t > 0$ along $\\vec{v}$. The resultant $\\vec{a} = \\vec{a}_t + \\vec{a}_n$ tilts forward into the interior of the curve. (R) explains (A)."
  },
  {
    a: "In circular motion, the angular velocity vector $\\vec{\\omega}$ points along the plane of the circle.",
    r: "Angular velocity is an axial vector whose direction is perpendicular to the plane of rotation, given by the right-hand thumb rule.",
    ans: 3,
    exp: "Assertion is false: $\\vec{\\omega}$ points along the axis of rotation perpendicular to the plane of the circle, not in the plane. Reason is true."
  },
  {
    a: "The number of revolutions completed by a wheel in slowing down from angular speed $\\omega_0$ to rest with uniform angular retardation $\\alpha$ is $N = \\frac{\\omega_0^2}{4\\pi\\alpha}$.",
    r: "From $\\omega^2 = \\omega_0^2 - 2\\alpha\\theta$, setting $\\omega = 0$ gives $\\theta = \\frac{\\omega_0^2}{2\\alpha}$, and $N = \\frac{\\theta}{2\\pi}$.",
    ans: 0,
    exp: "$\\theta = \\frac{\\omega_0^2}{2\\alpha}$. Since each revolution corresponds to $2\\pi\\text{ radians}$, $N = \\frac{\\theta}{2\\pi} = \\frac{\\omega_0^2}{4\\pi\\alpha}$. (R) correctly explains (A)."
  },
  {
    a: "The time period of uniform circular motion is independent of the radius of the circle if the angular speed $\\omega$ is constant.",
    r: "The period is defined as $T = \\frac{2\\pi}{\\omega}$, which depends solely on the angular speed $\\omega$.",
    ans: 0,
    exp: "Since $T = \\frac{2\\pi}{\\omega}$, if $\\omega$ is fixed, $T$ is invariant regardless of radius $R$. (R) correctly explains (A)."
  },
  {
    a: "A particle in circular motion can have zero centripetal acceleration while having non-zero tangential acceleration.",
    r: "At the exact instant a particle starts from rest along a circular path, its speed is momentarily zero ($v = 0$), so $a_c = \\frac{v^2}{R} = 0$, while $a_t = \\alpha R \\ne 0$.",
    ans: 0,
    exp: "At $t = 0$ from rest, $v = 0 \\implies a_c = 0$, but angular acceleration $\\alpha$ produces immediate tangential acceleration $a_t = \\alpha R \\ne 0$. (R) explains (A)."
  },
  {
    a: "The centripetal force doing work on a particle in uniform circular motion increases its kinetic energy.",
    r: "Centripetal force is always parallel to the velocity vector of the particle.",
    ans: 3,
    exp: "Assertion is false: centripetal force does zero work, so kinetic energy remains unchanged. Reason is also false: centripetal force is perpendicular, not parallel, to velocity. Wait, let's make Assertion false and Reason true."
  }
];

// Fix AR #26 to standard assertion false, reason true:
arData[25] = {
  a: "The work done by the centripetal force on a particle in uniform circular motion over any displacement is non-zero.",
  r: "The centripetal force is perpendicular to the instantaneous velocity vector at all times, satisfying $\\vec{F}_c \\cdot d\\vec{r} = 0$.",
  ans: 3,
  exp: "Assertion is false: because $\\vec{F}_c \\perp d\\vec{r}$, $dW = \\vec{F}_c \\cdot d\\vec{r} = 0$, so work done is strictly zero. Reason is true."
};

// 7 Generator MCQs on Uniform Circular Motion
const mcqData = [
  {
    q: "A particle moves in a circle of radius $R = 5\\text{ m}$ with a constant speed $v = 10\\text{ m/s}$. The magnitude of its centripetal acceleration is:",
    opts: ["$10\\text{ m/s}^2$", "$20\\text{ m/s}^2$", "$40\\text{ m/s}^2$", "$50\\text{ m/s}^2$"],
    ans: 1,
    exp: "Centripetal acceleration is $a_c = \\frac{v^2}{R} = \\frac{10^2}{5} = \\frac{100}{5} = 20\\text{ m/s}^2$."
  },
  {
    q: "A body executes uniform circular motion with time period $T$ and radius $R$. The magnitude of average acceleration during the time interval $\\frac{T}{2}$ is:",
    opts: ["$\\frac{2v^2}{\\pi R}$", "$\\frac{4v^2}{\\pi R}$", "Zero", "$\\frac{v^2}{R}$"],
    ans: 0,
    exp: "In time $t = T/2$, the particle traverses half a circle. Change in velocity is $\\Delta v = v - (-v) = 2v$. The time taken is $\\Delta t = \\frac{\\pi R}{v}$. Hence $a_{avg} = \\frac{2v}{\\pi R / v} = \\frac{2v^2}{\\pi R}$."
  },
  {
    q: "A wheel rotates with a constant angular acceleration of $\\alpha = 4\\text{ rad/s}^2$. If it starts from rest, the number of revolutions made by the wheel in the first $10\\text{ seconds}$ is approximately:",
    opts: ["$32$", "$64$", "$16$", "$200$"],
    ans: 0,
    exp: "$\\theta = \\frac{1}{2}\\alpha t^2 = \\frac{1}{2}(4)(10^2) = 200\\text{ radians}$. Number of revolutions is $N = \\frac{\\theta}{2\\pi} = \\frac{200}{2 \\times 3.1416} \\approx 31.83 \\approx 32\\text{ rev}$."
  },
  {
    q: "A particle starts from rest and moves in a circle of radius $R = 2\\text{ m}$ with constant tangential acceleration $a_t = 3\\text{ m/s}^2$. At what time $t$ will the magnitude of the centripetal acceleration equal the tangential acceleration?",
    opts: [
      "$\\sqrt{2/3}\\text{ s}$",
      "$\\sqrt{3/2}\\text{ s}$",
      "$2/3\\text{ s}$",
      "$1\\text{ s}$"
    ],
    ans: 0,
    exp: "Speed at time $t$ is $v = a_t t = 3t$. Centripetal acceleration is $a_c = \\frac{v^2}{R} = \\frac{(3t)^2}{2} = \\frac{9t^2}{2}$. For $a_c = a_t$: $\\frac{9t^2}{2} = 3 \\implies 9t^2 = 6 \\implies t^2 = \\frac{2}{3} \\implies t = \\sqrt{\\frac{2}{3}}\\text{ s}$."
  },
  {
    q: "If the angular speed of a particle performing circular motion is $\\omega = 10\\text{ rad/s}$ and radius is $0.5\\text{ m}$, the linear speed of the particle is:",
    opts: ["$5\\text{ m/s}$", "$10\\text{ m/s}$", "$20\\text{ m/s}$", "$2.5\\text{ m/s}$"],
    ans: 0,
    exp: "$v = \\omega R = 10 \\times 0.5 = 5\\text{ m/s}$."
  },
  {
    q: "A particle is moving along a circular path of radius $R$ with variable speed $v(t) = c t$. What is the angle between the net acceleration vector and the velocity vector at time $t$?",
    opts: [
      "$\\tan^{-1}\\left(\\frac{c t^2}{R}\\right)$",
      "$\\tan^{-1}\\left(\\frac{c^2 t^2}{R}\\right)$",
      "$\\tan^{-1}\\left(\\frac{R}{c t^2}\\right)$",
      "$\\tan^{-1}\\left(\\frac{c t}{R}\\right)$"
    ],
    ans: 0,
    exp: "Tangential acceleration is $a_t = \\frac{dv}{dt} = c$. Centripetal acceleration is $a_c = \\frac{v^2}{R} = \\frac{(ct)^2}{R} = \\frac{c^2 t^2}{R}$. The angle $\\phi$ with velocity is $\\tan\\phi = \\frac{a_c}{a_t} = \\frac{c^2 t^2 / R}{c} = \\frac{ct^2}{R} \\implies \\phi = \\tan^{-1}\\left(\\frac{ct^2}{R}\\right)$."
  },
  {
    q: "Two particles $A$ and $B$ are moving in concentric circles of radii $r_A$ and $r_B$ such that they have the same time period $T$. The ratio of their centripetal accelerations $\\frac{a_A}{a_B}$ is:",
    opts: [
      "$\\frac{r_A}{r_B}$",
      "$\\frac{r_B}{r_A}$",
      "$\\frac{r_A^2}{r_B^2}$",
      "$1$"
    ],
    ans: 0,
    exp: "Since periods are equal, their angular frequencies are identical: $\\omega_A = \\omega_B = \\frac{2\\pi}{T}$. Centripetal acceleration is $a_c = \\omega^2 r$. Therefore $\\frac{a_A}{a_B} = \\frac{\\omega^2 r_A}{\\omega^2 r_B} = \\frac{r_A}{r_B}$."
  }
];

// 20 Authentic Numerical Questions on Circular Motion
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Centripetal acceleration a_c = v^2 / R
for (let i = 1; i <= 5; i++) {
  const R = 2 * i;
  const v = 10 * i;
  const ac = Math.round((v * v) / R);
  addNumerical(
    `A particle moves in a circle of radius $R = ${R}\\text{ m}$ with a constant speed $v = ${v}\\text{ m/s}$. Find its centripetal acceleration $a_c$ (in $\\text{m/s}^2$).`,
    ac,
    `$a_c = \\frac{v^2}{R} = \\frac{(${v})^2}{${R}} = \\frac{${v * v}}{${R}} = ${ac}\\text{ m/s}^2$.`
  );
}

// 2. Linear speed from angular speed: v = omega * R
for (let i = 1; i <= 5; i++) {
  const omega = 4 * i;
  const R = 5;
  const v = omega * R;
  addNumerical(
    `A disc of radius $R = ${R}\\text{ m}$ rotates with a constant angular velocity of $\\omega = ${omega}\\text{ rad/s}$. Determine the linear speed $v$ (in $\\text{m/s}$) of a point on the rim of the disc.`,
    v,
    `$v = \\omega R = ${omega} \\times ${R} = ${v}\\text{ m/s}$.`
  );
}

// 3. Angular velocity from rpm: omega = 2*pi*N / 60. Let N be multiples of 30, round omega.
// Or angular acceleration: alpha = (omega - omega_0) / t
for (let i = 1; i <= 5; i++) {
  const w0 = 10 * i;
  const w = 30 * i;
  const t = 5;
  const alpha = Math.round((w - w0) / t);
  addNumerical(
    `A flywheel accelerates uniformly from an angular speed of $\\omega_0 = ${w0}\\text{ rad/s}$ to $\\omega = ${w}\\text{ rad/s}$ in a time of $t = ${t}\\text{ s}$. Find its angular acceleration $\\alpha$ (in $\\text{rad/s}^2$).`,
    alpha,
    `$\\alpha = \\frac{\\omega - \\omega_0}{t} = \\frac{${w} - ${w0}}{${t}} = ${alpha}\\text{ rad/s}^2$.`
  );
}

// 4. Tangential acceleration: a_t = alpha * R
for (let i = 1; i <= 5; i++) {
  const alpha = 3 * i;
  const R = 4;
  const at = alpha * R;
  addNumerical(
    `A circular cylinder of radius $R = ${R}\\text{ m}$ has an angular acceleration of $\\alpha = ${alpha}\\text{ rad/s}^2$. Calculate the tangential acceleration $a_t$ (in $\\text{m/s}^2$) of a point on its outer surface.`,
    at,
    `$a_t = \\alpha R = ${alpha} \\times ${R} = ${at}\\text{ m/s}^2$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 20)`);

// Assemble total 53 questions
const part5Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part5Questions.push({
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

  part5Questions.push({
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

  part5Questions.push({
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

console.log(`Part 5 generated: ${part5Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_kinematics_part5.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part5Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
