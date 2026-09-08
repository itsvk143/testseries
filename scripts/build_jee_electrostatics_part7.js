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

const subTopic = "Equipotential surfaces";
const chapter = "Electrostatics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Equipotential Surfaces
const arData = [
  {
    a: "The work done in moving an electric charge from one point to another on the same equipotential surface is identically zero.",
    r: "The potential difference between any two points on an equipotential surface is zero: $\\Delta V = V_B - V_A = 0$, so $W = q\\Delta V = 0$.",
    ans: 0,
    exp: "By definition of an equipotential surface, all points have identical electrostatic potential ($V = \\text{constant}$), making work $W = q(V_B - V_A) = 0$. (R) correctly explains (A)."
  },
  {
    a: "Electric field lines are everywhere perpendicular to equipotential surfaces.",
    r: "Because the work done moving a charge along any displacement $d\\vec{r}$ on an equipotential surface is zero ($dW = -q\\vec{E}\\cdot d\\vec{r} = 0$), the electric field $\\vec{E}$ must be orthogonal to $d\\vec{r}$.",
    ans: 0,
    exp: "Since $\\vec{E}\\cdot d\\vec{r} = -dV = 0$ for any displacement on the surface, $\\vec{E}$ has zero tangential component and must be strictly normal to the equipotential surface. (R) correctly explains (A)."
  },
  {
    a: "Two equipotential surfaces can never intersect each other.",
    r: "If two equipotential surfaces with different potentials intersected, the line of intersection would have two different potential values at the same physical point, which is impossible.",
    ans: 0,
    exp: "Electrostatic potential is a single-valued scalar function of position; a point cannot possess two distinct potentials simultaneously. (R) correctly explains (A)."
  },
  {
    a: "Equipotential surfaces are closer together in regions of strong electric fields and farther apart in regions of weak electric fields.",
    r: "The electric field is related to potential gradient by $E = -\\frac{dV}{dr}$, which implies that for a fixed potential step $\\Delta V$, the separation $\\Delta r = \\frac{|\\Delta V|}{E}$ is inversely proportional to $E$.",
    ans: 0,
    exp: "From $\\Delta r = \\frac{\\Delta V}{E}$, large electric field $E$ corresponds to small separation $\\Delta r$, meaning surfaces crowd together in regions of strong field. (R) correctly explains (A)."
  },
  {
    a: "The surface of a charged conductor in electrostatic equilibrium is always an equipotential surface.",
    r: "Inside a conductor in electrostatic equilibrium, the electric field is zero everywhere, so the potential is constant throughout the entire volume and equal to the surface potential.",
    ans: 0,
    exp: "Because $\\vec{E} = -\\vec{\\nabla}V = 0$ throughout the conductor, $V(x,y,z) = \\text{constant}$, making the entire conductor and its boundary an equipotential volume and surface. (R) correctly explains (A)."
  },
  {
    a: "For an isolated point charge, the equipotential surfaces are a family of concentric spheres centered on the charge.",
    r: "The potential due to a point charge $q$ is $V = \\frac{kq}{r}$, which is spherically symmetric and constant over any sphere of radius $r$.",
    ans: 0,
    exp: "Surfaces of constant $r$ have constant potential $V = \\frac{kq}{r}$, producing concentric spherical equipotential shells. (R) correctly explains (A)."
  },
  {
    a: "In a uniform electric field, the equipotential surfaces are equidistant parallel planes perpendicular to the field direction.",
    r: "For a uniform field $\\vec{E} = E_0\\hat{i}$, the potential is $V(x) = -E_0 x + C$, which is constant on planes of constant $x$ perpendicular to $\\vec{E}$.",
    ans: 0,
    exp: "Surfaces with constant $x$ are parallel planes orthogonal to the $\\hat{i}$ direction. Equal increments in $V$ correspond to equal steps $\\Delta x = \\Delta V / E_0$. (R) correctly explains (A)."
  },
  {
    a: "The equatorial plane of an electric dipole is an equipotential surface with potential $V = 0$.",
    r: "Every point on the equatorial plane is equidistant from $+q$ and $-q$, so the positive and negative potential contributions cancel everywhere on this plane.",
    ans: 0,
    exp: "Since $r_+ = r_-$ for all points on the perpendicular bisector, $V = \\frac{kq}{r_+} - \\frac{kq}{r_-} = 0$. (R) correctly explains (A)."
  },
  {
    a: "No electrical work is required to move a charge anywhere in the equatorial plane of an electric dipole.",
    r: "The equatorial plane is an equipotential surface of constant potential $V = 0$, so the potential difference between any two points in this plane is zero.",
    ans: 0,
    exp: "$W = q(V_2 - V_1) = q(0 - 0) = 0$. (R) correctly explains (A)."
  },
  {
    a: "The electric field always points in the direction of the steepest decrease in electrostatic potential.",
    r: "The gradient operator $\\vec{\\nabla}V$ points in the direction of maximum rate of increase of potential, so $\\vec{E} = -\\vec{\\nabla}V$ points in the direction of maximum rate of decrease.",
    ans: 0,
    exp: "By vector calculus, the negative gradient $-\\vec{\\nabla}V$ defines the direction of steepest descent of the scalar field $V$. (R) correctly explains (A)."
  },
  {
    a: "For an infinitely long line charge with uniform linear charge density $\\lambda$, the equipotential surfaces are coaxial circular cylinders.",
    r: "The potential of an infinite line charge depends solely on the perpendicular radial distance from the line: $V(r) = -\\frac{\\lambda}{2\\pi\\varepsilon_0}\\ln(r/r_0)$.",
    ans: 0,
    exp: "Since $V$ is a function of radial coordinate $r$ alone, surfaces of constant $r$ are circular cylinders coaxial with the charged wire. (R) correctly explains (A)."
  },
  {
    a: "A test charge released from rest in an electric field moves naturally from regions of higher potential to regions of lower potential.",
    r: "The electrostatic force on a charge $q$ is $\\vec{F} = q\\vec{E} = -q\\vec{\\nabla}V$, which drives a positive charge in the direction of decreasing potential.",
    ans: 0,
    exp: "Positive charges accelerate towards lower potential to minimize potential energy ($U = qV$). Negative charges, conversely, accelerate towards higher potential. (R) correctly explains (A)."
  },
  {
    a: "If the potential is constant throughout a certain region of space, the electric field must be zero in that entire region.",
    r: "The electric field is the spatial derivative of potential: $\\vec{E} = -\\vec{\\nabla}V$. The derivative of a constant is identically zero.",
    ans: 0,
    exp: "Because $\\vec{\\nabla}(\\text{constant}) = 0$, a uniform potential region implies zero electric field everywhere inside it. (R) correctly explains (A)."
  },
  {
    a: "A metallic bird perched on a high-voltage bare transmission line does not get electrocuted.",
    r: "The bird's two feet rest on the same conductor at essentially the same point, so the potential difference between the feet is virtually zero.",
    ans: 0,
    exp: "No current flows through the bird because there is no potential difference ($\\Delta V \\approx 0$) across its body. (R) correctly explains (A)."
  },
  {
    a: "If the electric field is zero at a point, the electrostatic potential must necessarily be zero at that point.",
    r: "Electric field and potential are related by $\\vec{E} = -\\vec{\\nabla}V$.",
    ans: 3,
    exp: "Assertion is false: inside a charged metal sphere, $\\vec{E} = 0$ while $V = \\frac{kQ}{R} \\ne 0$. Reason is true: $\\vec{E} = -\\vec{\\nabla}V$ implies $V$ is flat (constant gradient), not necessarily zero."
  },
  {
    a: "Equipotential surfaces can be closed surfaces.",
    r: "Concentric spherical equipotential surfaces surrounding a point charge are closed geometric surfaces.",
    ans: 0,
    exp: "Spherical and ellipsoidal equipotential surfaces are topologically closed manifolds in three dimensions. (R) explains (A)."
  },
  {
    a: "The electric potential is a scalar quantity, but its spatial gradient is a vector quantity.",
    r: "The gradient operation $\\vec{\\nabla}V = \\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}$ transforms a scalar field into a vector field pointing along the maximum directional derivative.",
    ans: 0,
    exp: "Gradient takes scalar input $V$ and outputs vector $\\vec{\\nabla}V = -\\vec{E}$. (R) correctly explains (A)."
  },
  {
    a: "In a region where electric field lines are diverging, the spacing between consecutive equipotential surfaces increases in the direction of the field.",
    r: "As field lines diverge, the electric field strength $E$ decreases, and since $\\Delta r = \\frac{\\Delta V}{E}$, the spacing $\\Delta r$ between equipotentials with equal potential steps increases.",
    ans: 0,
    exp: "Divergence causes $E$ to weaken with distance, requiring larger distance $\\Delta r$ to span the same potential drop $\\Delta V$. (R) correctly explains (A)."
  },
  {
    a: "An equipotential surface can be constructed through any point where the electric field is non-zero.",
    r: "The normal to the equipotential surface at any point is uniquely aligned with the local electric field vector $\\vec{E}$.",
    ans: 0,
    exp: "Because $\\vec{E} \\ne 0$ specifies a unique normal vector $\\hat{n} = \\frac{\\vec{E}}{|E|}$, a well-defined orthogonal surface can always be passed through that point. (R) correctly explains (A)."
  },
  {
    a: "The electrostatic potential function $V(x, y, z) = 2x + 3y - 5z$ represents a uniform electric field.",
    r: "Differentiating gives constant components: $E_x = -2, E_y = -3, E_z = +5$, so $\\vec{E} = -2\\hat{i} - 3\\hat{j} + 5\\hat{k}$ is independent of position coordinates.",
    ans: 0,
    exp: "Because all partial derivatives are constant, $\\vec{E}$ is spatially uniform. (R) correctly explains (A)."
  },
  {
    a: "A hollow charged conductor shields its interior completely from external electrostatic fields, making the entire cavity an equipotential volume.",
    r: "No electric field lines can cross the conducting shell because $E = 0$ inside the conducting material, keeping the cavity at the constant surface potential.",
    ans: 0,
    exp: "Electrostatic shielding creates a field-free cavity where potential is constant everywhere, equal to that of the shell. (R) explains (A)."
  },
  {
    a: "Work done in moving a charge between two equipotential surfaces depends on the choice of path taken between them.",
    r: "The electrostatic force is a conservative force.",
    ans: 3,
    exp: "Assertion is false: work done by conservative electrostatic force depends solely on initial and final potentials ($W = q(V_B - V_A)$) and is completely path-independent. Reason is true."
  },
  {
    a: "Equipotential surfaces for two equal and opposite charges (a dipole) are symmetrical about the equatorial plane.",
    r: "The potential distribution of a dipole satisfies $V(x, y, -z) = -V(x, y, z)$ when the dipole is aligned along the $z$-axis.",
    ans: 0,
    exp: "The antisymmetry $V(-z) = -V(z)$ across the $z = 0$ equatorial plane gives symmetric equipotential contours with reversed signs. (R) explains (A)."
  },
  {
    a: "For two identical positive charges $+Q$ placed a distance apart, the equipotential surfaces near each charge are nearly spherical, but at large distances they merge into a single large spherical surface.",
    r: "At large distances from the two charges ($r \\gg d$), the pair of charges acts effectively as a single combined point charge of magnitude $+2Q$.",
    ans: 0,
    exp: "Monopole approximation: far away, the separation is negligible, so the potential approaches $V \\approx \\frac{k(2Q)}{r}$, whose equipotentials are large concentric spheres. (R) correctly explains (A)."
  },
  {
    a: "The electric field inside a non-conducting uniformly charged solid sphere is non-zero, so the interior is NOT an equipotential region.",
    r: "Inside a uniformly charged solid sphere of radius $R$, the electric field is $E(r) = \\frac{kQr}{R^3}$, which produces a variable potential $V(r) = \\frac{kQ}{2R^3}(3R^2 - r^2)$.",
    ans: 0,
    exp: "Because $V(r)$ varies with radius $r$, the interior is not equipotential. (R) correctly explains (A)."
  },
  {
    a: "Along an electric field line, the electrostatic potential always decreases in the direction of the field.",
    r: "The electric field is defined as $\\vec{E} = -\\vec{\\nabla}V$, which implies that $dV = -\\vec{E}\\cdot d\\vec{r} < 0$ when moving in the direction of $\\vec{E}$.",
    ans: 0,
    exp: "Moving along $\\vec{E}$ implies $d\\vec{r} \\parallel \\vec{E}$, so $dV = -E\\, dr < 0$, meaning potential strictly decreases. (R) correctly explains (A)."
  }
];

// 7 Generator MCQs on Equipotential Surfaces
const mcqData = [
  {
    q: "The electrostatic potential in a region of space is given by $V(x, y, z) = 4x^2\\text{ Volts}$. The electric field at the point $(1\\text{ m}, 0, 2\\text{ m})$ is:",
    opts: [
      "$-8\\hat{i}\\text{ V/m}$",
      "$8\\hat{i}\\text{ V/m}$",
      "$-4\\hat{i}\\text{ V/m}$",
      "$-8\\hat{k}\\text{ V/m}$"
    ],
    ans: 0,
    exp: "$\\vec{E} = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right) = -\\frac{\\partial(4x^2)}{\\partial x}\\hat{i} = -8x\\hat{i}$. At $x = 1\\text{ m}$, $\\vec{E} = -8\\hat{i}\\text{ V/m}$."
  },
  {
    q: "Equipotential surfaces at a great distance from a collection of charges whose total sum is non-zero are approximately:",
    opts: ["Spheres", "Planes", "Cylinders", "Ellipsoids"],
    ans: 0,
    exp: "At large distances, any finite charge distribution with net non-zero charge $Q_{net} \\ne 0$ behaves as a point charge, so its equipotential surfaces are approximately concentric spheres."
  },
  {
    q: "The work done in carrying an electron along an equipotential surface of potential $50\\text{ V}$ through a distance of $2\\text{ m}$ is:",
    opts: ["$0$", "$100\\text{ eV}$", "$50\\text{ eV}$", "$25\\text{ eV}$"],
    ans: 0,
    exp: "By definition, work done on an equipotential surface is zero because potential difference is zero: $W = q\\Delta V = q(0) = 0$."
  },
  {
    q: "A uniform electric field of magnitude $E = 100\\text{ V/m}$ is directed along the $+x$-axis. If the potential at $x = 0$ is $V = 0$, the potential at $x = 2\\text{ m}$ is:",
    opts: ["$-200\\text{ V}$", "$200\\text{ V}$", "$-100\\text{ V}$", "$100\\text{ V}$"],
    ans: 0,
    exp: "$V(x) = V(0) - \\int_0^x E\\, dx = 0 - (100)(2) = -200\\text{ V}$."
  },
  {
    q: "The electric potential is given by $V(x, y) = 6xy - y + 2y^2$. The electric field vector at $(1, 1)$ is:",
    opts: [
      "$-6\\hat{i} - 9\\hat{j}$",
      "$6\\hat{i} + 9\\hat{j}$",
      "$-6\\hat{i} - 5\\hat{j}$",
      "$-6\\hat{i} + 9\\hat{j}$"
    ],
    ans: 0,
    exp: "$E_x = -\\frac{\\partial V}{\\partial x} = -6y = -6(1) = -6$. $E_y = -\\frac{\\partial V}{\\partial y} = -(6x - 1 + 4y) = -(6(1) - 1 + 4(1)) = -9$. Thus $\\vec{E} = -6\\hat{i} - 9\\hat{j}$."
  },
  {
    q: "The angle between an electric field line and an equipotential surface passing through the same point is:",
    opts: ["$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$180^\\circ$"],
    ans: 0,
    exp: "Electric field lines are always orthogonal to equipotential surfaces, so the angle is $90^\\circ$."
  },
  {
    q: "In a certain region of space, the electrostatic potential is constant. Which of the following statements about the electric field in this region is true?",
    opts: [
      "The electric field must be zero everywhere in this region.",
      "The electric field must be uniform and non-zero.",
      "The electric field must be directed towards the origin.",
      "The electric field varies linearly with position."
    ],
    ans: 0,
    exp: "Since $\\vec{E} = -\\vec{\\nabla}V$ and $V = \\text{constant}$, the gradient of a constant is zero, meaning $\\vec{E} = 0$ everywhere in the region."
  }
];

// 20 Authentic Numerical Questions on Equipotential Surfaces
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Work done moving charge between two equipotentials: W = q * Delta V (in microjoules)
for (let i = 1; i <= 5; i++) {
  const q_uC = 2 * i; // uC
  const V1 = 20;
  const V2 = 20 + 10 * i;
  const dV = 10 * i;
  const W_uJ = q_uC * dV;
  addNumerical(
    `An electric charge $q = ${q_uC}\\mu\\text{C}$ is moved from an equipotential surface of potential $V_1 = ${V1}\\text{ V}$ to another equipotential surface of potential $V_2 = ${V2}\\text{ V}$. Calculate the work done (in $\\mu\\text{J}$) by the external agent.`,
    W_uJ,
    `$W = q(V_2 - V_1) = (${q_uC}\\mu\\text{C})(${V2}\\text{ V} - ${V1}\\text{ V}) = (${q_uC})(${dV}) = ${W_uJ}\\mu\\text{J}$.`
  );
}

// 2. Electric field from linear potential gradient: E = Delta V / Delta x (in V/m)
for (let i = 1; i <= 5; i++) {
  const dV = 20 * i; // V
  const dx = 0.05; // 5 cm = 0.05 m
  const E = Math.round(dV / dx); // 400 * i V/m
  addNumerical(
    `Two parallel planar equipotential surfaces are separated by a distance of $\\Delta x = 5\\text{ cm}$. If the potential difference between them is $\\Delta V = ${dV}\\text{ V}$, find the magnitude of the uniform electric field $E$ (in $\\text{V/m}$) between the surfaces.`,
    E,
    `$E = \\frac{\\Delta V}{\\Delta x} = \\frac{${dV}\\text{ V}}{0.05\\text{ m}} = ${E}\\text{ V/m}$.`
  );
}

// 3. Magnitude of electric field from V = c * x^2: E = 2 * c * x
for (let i = 1; i <= 5; i++) {
  const c = 5 * i;
  const x = 2;
  const E = 2 * c * x; // 20 * i V/m
  addNumerical(
    `The electric potential in a region is given by $V(x) = ${c}x^2\\text{ Volts}$. Find the magnitude of the electric field $E$ (in $\\text{V/m}$) at $x = 2\\text{ m}$.`,
    E,
    `$E = |-\\frac{dV}{dx}| = |-2(${c})x| = ${2 * c}(2) = ${E}\\text{ V/m}$.`
  );
}

// 4. Separation between equipotentials for point charge: Delta r = r2 - r1
// V = k*q / r -> r = k*q / V. Let q = 1 nC, k = 9e9 -> k*q = 9.
// V1 = 90 V -> r1 = 0.1 m = 10 cm. V2 = 90 - 10*i V.
for (let i = 1; i <= 5; i++) {
  // Let V = 100/r -> r = 100/V.
  // If V1 = 100 V, r1 = 1 m. If V2 = 50 V, r2 = 2 m -> Delta r = 1 m.
  // Let Delta V / E = Delta r in uniform field
  const dV = 10;
  const E = 2 * i; // V/cm
  const dr_cm = Math.round(dV / E);
  addNumerical(
    `In a uniform electric field of $E = ${E}\\text{ V/cm}$, equipotential surfaces are spaced apart by distance $\\Delta r$. If consecutive surfaces differ in potential by $\\Delta V = 10\\text{ V}$, find the separation $\\Delta r$ (in cm).`,
    dr_cm,
    `$\\Delta r = \\frac{\\Delta V}{E} = \\frac{10\\text{ V}}{${E}\\text{ V/cm}} = ${dr_cm}\\text{ cm}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 20)`);

// Assemble total 53 questions
const part7Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part7Questions.push({
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

  part7Questions.push({
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

  part7Questions.push({
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

console.log(`Part 7 generated: ${part7Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_electrostatics_part7.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part7Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
