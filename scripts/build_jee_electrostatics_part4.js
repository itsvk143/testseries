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

const subTopic = "Dielectrics";
const chapter = "Electrostatics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Dielectrics
const arData = [
  {
    a: "When a dielectric slab is inserted into a charged capacitor, the net electric field inside the dielectric is reduced.",
    r: "The applied electric field polarizes the dielectric, creating induced surface bound charges that generate an internal electric field opposing the external field.",
    ans: 0,
    exp: "Electric polarization creates induced bound surface charge density $\\sigma_b$, setting up an internal opposing field $E_p = \\frac{\\sigma_b}{\\varepsilon_0}$. The net field is reduced to $E = E_0 - E_p = \\frac{E_0}{K}$. (R) correctly explains (A)."
  },
  {
    a: "The dielectric constant $K$ of any material is always strictly greater than or equal to $1$.",
    r: "The induced polarization field in a linear dielectric opposes the applied electric field, making the permittivity of a material medium always greater than or equal to the permittivity of vacuum: $\\varepsilon \\ge \\varepsilon_0$.",
    ans: 0,
    exp: "Because $\\varepsilon = \\varepsilon_0(1 + \\chi_e)$ and electric susceptibility $\\chi_e \\ge 0$, $K = 1 + \\chi_e \\ge 1$ (with $K = 1$ strictly in vacuum). (R) correctly explains (A)."
  },
  {
    a: "The induced bound surface charge density on the faces of a dielectric slab of dielectric constant $K$ is given by $\\sigma_b = \\sigma\\left(1 - \\frac{1}{K}\\right)$, where $\\sigma$ is the free charge density on the capacitor plates.",
    r: "The net electric field inside the dielectric is $E = \\frac{\\sigma - \\sigma_b}{\\varepsilon_0} = \\frac{\\sigma}{K\\varepsilon_0}$, which directly yields $\\sigma_b = \\sigma\\left(1 - \\frac{1}{K}\\right)$.",
    ans: 0,
    exp: "Equating $E_0 - E_p = \\frac{E_0}{K}$ gives $\\frac{\\sigma}{\\varepsilon_0} - \\frac{\\sigma_b}{\\varepsilon_0} = \\frac{\\sigma}{K\\varepsilon_0} \\implies \\sigma_b = \\sigma(1 - 1/K)$. (R) correctly explains (A)."
  },
  {
    a: "When a dielectric slab is inserted into a capacitor connected to a battery, the energy stored in the capacitor increases by a factor of $K$.",
    r: "The potential difference $V$ is kept constant by the battery while the capacitance increases to $C' = KC_0$, resulting in $U' = \\frac{1}{2}(KC_0)V^2 = KU_0$.",
    ans: 0,
    exp: "Because $V$ is maintained constant, $U = \\frac{1}{2}CV^2$ is directly proportional to capacitance. Multiplying $C$ by $K$ multiplies stored energy by $K$. (R) correctly explains (A)."
  },
  {
    a: "When a dielectric slab is inserted into an isolated charged capacitor, the electrostatic potential energy decreases by a factor of $K$.",
    r: "The charge $Q$ on the isolated plates remains constant, so stored energy is $U = \\frac{Q^2}{2C}$, which decreases to $\\frac{Q^2}{2(KC_0)} = \\frac{U_0}{K}$.",
    ans: 0,
    exp: "For fixed charge $Q$, stored energy is inversely proportional to capacitance. Increasing $C$ by factor $K$ reduces $U$ by factor $K$. (R) correctly explains (A)."
  },
  {
    a: "The electric susceptibility $\\chi_e$ and dielectric constant $K$ of an isotropic linear dielectric are related by $K = 1 + \\chi_e$.",
    r: "Electric displacement is defined as $\\vec{D} = \\varepsilon_0 \\vec{E} + \\vec{P} = \\varepsilon_0 \\vec{E} + \\varepsilon_0 \\chi_e \\vec{E} = \\varepsilon_0(1 + \\chi_e)\\vec{E} = K\\varepsilon_0 \\vec{E}$.",
    ans: 0,
    exp: "By definition of polarization $\\vec{P} = \\varepsilon_0 \\chi_e \\vec{E}$ and permittivity $\\varepsilon = K\\varepsilon_0$, matching terms gives $K = 1 + \\chi_e$. (R) correctly explains (A)."
  },
  {
    a: "Polar dielectrics possess a permanent dipole moment in the absence of an external electric field.",
    r: "In polar molecules like $H_2O$ and $HCl$, the centers of positive and negative charge distribution do not coincide due to asymmetric molecular geometry.",
    ans: 0,
    exp: "Molecules with permanent charge asymmetry have intrinsic dipole moments even at zero field, though thermal agitation randomizes their orientations macroscopically. (R) correctly explains (A)."
  },
  {
    a: "Non-polar dielectrics like $O_2$ and $CO_2$ have zero permanent dipole moment in the absence of an electric field.",
    r: "In non-polar molecules, the centers of positive charge distribution and negative charge distribution coincide symmetrically in the equilibrium state.",
    ans: 0,
    exp: "Because positive and negative charge centers coincide symmetrically, $\\vec{p} = q(2\\vec{a}) = 0$. An external field is required to induce an electric dipole moment. (R) correctly explains (A)."
  },
  {
    a: "The dielectric constant of a metallic conductor can be regarded as infinite ($K \\to \\infty$).",
    r: "Inside a conductor in electrostatic equilibrium, mobile free electrons redistribute until the induced internal field completely cancels the applied field, making $E_{net} = 0$, so $K = \\frac{E_0}{E_{net}} \\to \\infty$.",
    ans: 0,
    exp: "In electrostatic equilibrium, $E_{inside} = 0$, requiring $E = \\frac{E_0}{K} = 0 \\implies K = \\infty$. (R) correctly explains (A)."
  },
  {
    a: "Inserting a conducting slab of thickness $t < d$ into a parallel plate capacitor increases its capacitance to $C = \\frac{\\varepsilon_0 A}{d - t}$.",
    r: "A conductor behaves as a dielectric medium with $K = \\infty$, and setting $K = \\infty$ in $C = \\frac{\\varepsilon_0 A}{d - t + t/K}$ yields $C = \\frac{\\varepsilon_0 A}{d - t}$.",
    ans: 0,
    exp: "Substituting $K = \\infty$ into the partial dielectric formula yields $\\frac{t}{K} = 0$, so $C = \\frac{\\varepsilon_0 A}{d - t}$. (R) correctly explains (A)."
  },
  {
    a: "The dielectric strength of dry atmospheric air is approximately $3 \\times 10^6\\text{ V/m}$.",
    r: "Dielectric strength is the maximum electric field a dielectric medium can withstand without suffering electrical breakdown and becoming conducting.",
    ans: 0,
    exp: "When the electric field in air exceeds $\\sim 3 \\times 10^6\\text{ V/m}$, dielectric breakdown (corona discharge or sparking) occurs due to avalanche ionization of air molecules. (R) correctly explains (A)."
  },
  {
    a: "When a dielectric slab is being pulled into the space between the plates of a charged capacitor, it experiences an attractive force drawing it inward.",
    r: "The fringing non-uniform electric field at the edges of the capacitor plates exerts a net inward electrostatic force on the polarized dielectric.",
    ans: 0,
    exp: "Fringing field lines curve outward at the plate edges. The component of the electric force on the induced dipole moments points into the region between the plates, pulling the slab inward. (R) correctly explains (A)."
  },
  {
    a: "The capacitance of a parallel plate capacitor filled with two dielectric slabs of constants $K_1$ and $K_2$ with equal thicknesses $d/2$ in series is $C = \\frac{2K_1 K_2}{K_1 + K_2} C_0$.",
    r: "Two dielectric slabs divided along the thickness form two capacitors in series: $\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{d/2}{K_1 \\varepsilon_0 A} + \\frac{d/2}{K_2 \\varepsilon_0 A}$.",
    ans: 0,
    exp: "$\\frac{1}{C} = \\frac{d}{2\\varepsilon_0 A}\\left(\\frac{1}{K_1} + \\frac{1}{K_2}\\right) = \\frac{1}{2C_0}\\frac{K_1 + K_2}{K_1 K_2} \\implies C = \\frac{2K_1 K_2}{K_1 + K_2}C_0$. (R) correctly explains (A)."
  },
  {
    a: "The capacitance of a parallel plate capacitor filled with two dielectric slabs of constants $K_1$ and $K_2$ each occupying half the area $A/2$ across the full separation $d$ is $C = \\frac{K_1 + K_2}{2} C_0$.",
    r: "Dividing the area parallel to the electric field forms two capacitors in parallel: $C = C_1 + C_2 = \\frac{K_1 \\varepsilon_0 (A/2)}{d} + \\frac{K_2 \\varepsilon_0 (A/2)}{d} = \\frac{K_1 + K_2}{2}\\frac{\\varepsilon_0 A}{d}$.",
    ans: 0,
    exp: "Because both slabs share the same potential difference $V$, they behave as two capacitors in parallel, giving $C = \\frac{K_1 + K_2}{2}C_0$. (R) correctly explains (A)."
  },
  {
    a: "When a dielectric slab is inserted into a capacitor connected to a battery, the battery delivers additional work $W = (K - 1)C_0 V^2$.",
    r: "The charge supplied by the battery is $\\Delta Q = (K - 1)C_0 V$, and the work done by the battery is $W = \\Delta Q \\cdot V = (K - 1)C_0 V^2$.",
    ans: 0,
    exp: "Work done by battery is $W = \\Delta Q \\cdot V = (Q' - Q_0)V = (KC_0 V - C_0 V)V = (K - 1)C_0 V^2$. (R) correctly explains (A)."
  },
  {
    a: "Of the work done by the battery during dielectric insertion at constant voltage, exactly half is stored as additional electrostatic energy and half is converted into work/heat.",
    r: "The increase in stored energy is $\\Delta U = \\frac{1}{2}K C_0 V^2 - \\frac{1}{2}C_0 V^2 = \\frac{1}{2}(K - 1)C_0 V^2 = \\frac{1}{2}W_{battery}$.",
    ans: 0,
    exp: "Because $\\Delta U = \\frac{1}{2}(K - 1)C_0 V^2 = \\frac{1}{2}W_{battery}$, the remaining $50\\%$ of battery work is converted into kinetic energy of the slab or dissipated as Joule heat. (R) correctly explains (A)."
  },
  {
    a: "The dielectric constant of water is very high ($K \\approx 80$) compared to most non-polar liquids.",
    r: "Water molecules have a large permanent dipole moment and high orientational polarizability due to their bent asymmetric shape ($H-O-H$).",
    ans: 0,
    exp: "The strong permanent dipole moment ($\sim 1.85\\text{ D}$) and hydrogen bonding allow water molecules to orient readily in an electric field, yielding $K \\approx 80$. (R) explains (A)."
  },
  {
    a: "Electric field lines end on dielectric bound charges.",
    r: "Bound charges in a dielectric are fictitious mathematical constructs that have no real physical existence.",
    ans: 2,
    exp: "Assertion is true: the divergence of electric field satisfies $\\vec{\\nabla}\\cdot\\vec{E} = \\frac{\\rho_{free} + \\rho_{bound}}{\\varepsilon_0}$, so field lines terminate on bound charges as well. Reason is false: bound charges represent real physical displacement of bound electrons and nuclei."
  },
  {
    a: "The electric displacement vector $\\vec{D}$ has field lines that begin and end solely on free charges.",
    r: "Gauss's law for the displacement field states that $\\oint \\vec{D}\\cdot d\\vec{A} = Q_{free, enclosed}$, completely independent of bound polarization charges.",
    ans: 0,
    exp: "Because $\\vec{\\nabla}\\cdot\\vec{D} = \\rho_{free}$, $\\vec{D}$ is determined purely by the distribution of free charges, making its flux independent of dielectric polarization. (R) explains (A)."
  },
  {
    a: "At high temperatures, the dielectric constant of polar dielectrics decreases.",
    r: "Thermal agitation disrupts the alignment of permanent molecular dipoles with the external electric field, reducing orientational polarization.",
    ans: 0,
    exp: "By Curie's law of dielectrics, orientational susceptibility varies inversely with absolute temperature ($\\chi_{orient} \\propto 1/T$), so $K$ decreases as $T$ rises. (R) explains (A)."
  },
  {
    a: "Non-polar dielectrics exhibit electronic polarization that is practically independent of temperature.",
    r: "Electronic polarization involves displacement of electron clouds relative to nuclei within atoms, which is governed by quantum forces rather than thermal kinetic agitation.",
    ans: 0,
    exp: "Electronic induced dipoles depend only on atomic polarizability $\\alpha$, which is temperature-independent over standard temperature ranges. (R) explains (A)."
  },
  {
    a: "A dielectric material placed in an electric field experiences zero net volume charge density if the polarization is uniform.",
    r: "The volume bound charge density is given by $\\rho_b = -\\vec{\\nabla}\\cdot\\vec{P}$, which vanishes when $\\vec{P}$ is spatially uniform.",
    ans: 0,
    exp: "For uniform polarization, the divergence $\\vec{\\nabla}\\cdot\\vec{P} = 0$, leaving bound charge localized strictly on the surfaces: $\\sigma_b = \\vec{P}\\cdot\\hat{n}$. (R) correctly explains (A)."
  },
  {
    a: "A dielectric slab can withstand infinitely high electric fields without conducting.",
    r: "Dielectric materials are non-conductors with large forbidden energy band gaps.",
    ans: 3,
    exp: "Assertion is false: when the electric field exceeds the dielectric strength of the material, electrons are torn from atoms (dielectric breakdown), causing dielectric failure and heavy conduction. Reason is true."
  },
  {
    a: "A dielectric slab inserted partially into a capacitor executes simple harmonic motion if released from rest inside the capacitor (neglecting damping).",
    r: "The inward electrostatic attraction pulls the slab into the capacitor, where it overshoots the equilibrium position due to inertia and experiences a periodic restoring force.",
    ans: 0,
    exp: "The fringing field provides an inward restoring force towards the center. In the absence of friction and resistance, the slab oscillates periodically back and forth. (R) explains (A)."
  },
  {
    a: "The capacitance of a spherical capacitor increases when a dielectric liquid fills the space between the concentric shells.",
    r: "The dielectric constant $K > 1$ reduces the potential difference $V$ for a given charge $Q$, increasing capacitance to $C = KC_0$.",
    ans: 0,
    exp: "For spherical capacitor $C = 4\\pi K\\varepsilon_0 \\frac{ab}{b - a} = K C_0 > C_0$. (R) correctly explains (A)."
  },
  {
    a: "The electric displacement $\\vec{D}$ has the SI unit of $\\text{C/m}^2$.",
    r: "The displacement vector is defined as $\\vec{D} = \\varepsilon_0 \\vec{E} + \\vec{P}$, where polarization $\\vec{P}$ is dipole moment per unit volume: $[P] = \\frac{\\text{C}\\cdot\\text{m}}{\\text{m}^3} = \\text{C/m}^2$.",
    ans: 0,
    exp: "Both $\\vec{D}$ and $\\vec{P}$ represent surface charge densities, having dimensions of charge per unit area: $\\text{C/m}^2$. (R) correctly explains (A)."
  }
];

// 7 Generator MCQs on Dielectrics
const mcqData = [
  {
    q: "A parallel plate capacitor is charged to potential $V_0$ by a battery and then isolated (battery disconnected). When a dielectric slab of dielectric constant $K = 5$ is introduced to completely fill the space between the plates, the new potential difference $V$ and stored energy $U$ compared to initial $U_0$ are:",
    opts: [
      "$V = \\frac{V_0}{5}, U = \\frac{U_0}{5}$",
      "$V = 5V_0, U = 5U_0$",
      "$V = V_0, U = 5U_0$",
      "$V = \\frac{V_0}{5}, U = U_0$"
    ],
    ans: 0,
    exp: "Because the capacitor is isolated, charge $Q$ is constant. Capacitance increases to $C' = 5C_0$. Then $V = \\frac{Q}{C'} = \\frac{V_0}{5}$. Stored energy is $U = \\frac{Q^2}{2C'} = \\frac{U_0}{5}$."
  },
  {
    q: "A parallel plate capacitor remains connected to a battery of voltage $V_0$. When a dielectric slab of constant $K = 3$ is inserted to fill the space between the plates, the charge on the capacitor and the stored energy become:",
    opts: [
      "$Q = 3Q_0, U = 3U_0$",
      "$Q = Q_0, U = 3U_0$",
      "$Q = 3Q_0, U = U_0$",
      "$Q = Q_0/3, U = U_0/3$"
    ],
    ans: 0,
    exp: "Since the battery remains connected, $V = V_0$. Capacitance is $C' = 3C_0$. Charge is $Q' = C'V = 3C_0 V_0 = 3Q_0$. Stored energy is $U' = \\frac{1}{2}C'V_0^2 = 3\\left(\\frac{1}{2}C_0 V_0^2\\right) = 3U_0$."
  },
  {
    q: "The space between the plates of a parallel plate capacitor of capacitance $C_0$ is filled with two dielectric slabs of dielectric constants $K_1 = 2$ and $K_2 = 4$ of equal thicknesses $d/2$ in series. The new capacitance is:",
    opts: [
      "$\\frac{8}{3}C_0$",
      "$3C_0$",
      "$\\frac{4}{3}C_0$",
      "$6C_0$"
    ],
    ans: 0,
    exp: "For series dielectric slabs of equal thickness: $C = \\frac{2K_1 K_2}{K_1 + K_2}C_0 = \\frac{2(2)(4)}{2 + 4}C_0 = \\frac{16}{6}C_0 = \\frac{8}{3}C_0$."
  },
  {
    q: "A capacitor with capacitance $C_0$ is filled with two dielectrics of constants $K_1 = 3$ and $K_2 = 5$ covering equal plate areas $A/2$ across the full plate separation $d$. The new capacitance is:",
    opts: ["$4C_0$", "$2C_0$", "$3.75C_0$", "$8C_0$"],
    ans: 0,
    exp: "For parallel dielectric slabs of equal area: $C = \\frac{K_1 + K_2}{2}C_0 = \\frac{3 + 5}{2}C_0 = 4C_0$."
  },
  {
    q: "If the free surface charge density on the plates of a capacitor is $\\sigma = 10\\mu\\text{C/m}^2$ and the dielectric constant is $K = 5$, the magnitude of the induced bound surface charge density $\\sigma_b$ on the dielectric is:",
    opts: [
      "$8\\mu\\text{C/m}^2$",
      "$2\\mu\\text{C/m}^2$",
      "$10\\mu\\text{C/m}^2$",
      "$4\\mu\\text{C/m}^2$"
    ],
    ans: 0,
    exp: "$\\sigma_b = \\sigma\\left(1 - \\frac{1}{K}\\right) = 10\\left(1 - \\frac{1}{5}\\right) = 10 \\times \\frac{4}{5} = 8\\mu\\text{C/m}^2$."
  },
  {
    q: "The electric susceptibility $\\chi_e$ of a dielectric medium whose dielectric constant is $K = 6$ is:",
    opts: ["$5$", "$6$", "$7$", "$0.2$"],
    ans: 0,
    exp: "$\\chi_e = K - 1 = 6 - 1 = 5$."
  },
  {
    q: "An isolated parallel plate capacitor with plate separation $d$ has capacitance $C_0$ and stored energy $U_0$. A dielectric slab of dielectric constant $K$ and thickness $d$ is inserted. The mechanical work done by the electrostatic field in pulling the slab into the capacitor is:",
    opts: [
      "$U_0\\left(1 - \\frac{1}{K}\\right)$",
      "$U_0(K - 1)$",
      "$\\frac{U_0}{K}$",
      "$U_0$"
    ],
    ans: 0,
    exp: "By work-energy theorem for an isolated capacitor: $W_{field} = -\\Delta U = -(U_f - U_i) = U_0 - \\frac{U_0}{K} = U_0\\left(1 - \\frac{1}{K}\\right)$."
  }
];

// 20 Authentic Numerical Questions on Dielectrics
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Dielectric constant K from capacitance ratio: K = C / C0
for (let i = 1; i <= 5; i++) {
  const C0 = 5 * i; // uF
  const K = i + 2;
  const C = C0 * K;
  addNumerical(
    `A capacitor has capacitance $C_0 = ${C0}\\mu\\text{F}$ in air. When completely filled with a dielectric material, its capacitance increases to $C = ${C}\\mu\\text{F}$. Determine the dielectric constant $K$ of the material.`,
    K,
    `$K = \\frac{C}{C_0} = \\frac{${C}\\mu\\text{F}}{${C0}\\mu\\text{F}} = ${K}$.`
  );
}

// 2. Bound charge density: sigma_b = sigma * (1 - 1/K) (with K = 2, sigma_b = sigma/2)
for (let i = 1; i <= 5; i++) {
  const sigma = 10 * i; // uC/m^2
  const K = 2;
  const sigmab = Math.round(sigma * (1 - 1 / K));
  addNumerical(
    `A parallel plate capacitor with a dielectric of constant $K = 2$ has a free surface charge density of $\\sigma = ${sigma}\\mu\\text{C/m}^2$ on its plates. Find the magnitude of the induced bound surface charge density $\\sigma_b$ (in $\\mu\\text{C/m}^2$) on the dielectric faces.`,
    sigmab,
    `$\\sigma_b = \\sigma\\left(1 - \\frac{1}{K}\\right) = ${sigma}\\left(1 - \\frac{1}{2}\\right) = ${sigmab}\\mu\\text{C/m}^2$.`
  );
}

// 3. Electric susceptibility chi_e = K - 1
for (let i = 1; i <= 5; i++) {
  const K = 3 * i;
  const chi = K - 1;
  addNumerical(
    `A linear dielectric medium has a dielectric constant of $K = ${K}$. Find the electric susceptibility $\\chi_e$ of the medium.`,
    chi,
    `$\\chi_e = K - 1 = ${K} - 1 = ${chi}$.`
  );
}

// 4. Stored energy after dielectric insertion with battery connected: U = K * U0
for (let i = 1; i <= 5; i++) {
  const U0 = 10 * i; // microjoules
  const K = 4;
  const U = U0 * K;
  addNumerical(
    `A capacitor connected continuously to a DC battery stores an electrostatic energy of $U_0 = ${U0}\\mu\\text{J}$. A dielectric slab of dielectric constant $K = ${K}$ is inserted to fill the capacitor while the battery remains connected. Find the new energy stored $U$ (in $\\mu\\text{J}$).`,
    U,
    `With battery connected, $V = \\text{const}$, so $U = K U_0 = ${K} \\times ${U0}\\mu\\text{J} = ${U}\\mu\\text{J}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 20)`);

// Assemble total 53 questions
const part4Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part4Questions.push({
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

  part4Questions.push({
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

  part4Questions.push({
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

console.log(`Part 4 generated: ${part4Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_electrostatics_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part4Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
