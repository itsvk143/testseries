const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Drift velocity and mobility";
const CHAPTER = "Current Electricity";
const SUBJECT = "Physics";

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
  "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
  "Assertion is true but Reason is false.",
  "Assertion is false but Reason is true."
];

const questions = [
  // 26 Assertion-Reason Questions
  {
    type: "Assertion-Reason",
    question: "Assertion: In the absence of an applied electric field, the net electric current in a metallic conductor is zero.\\nReason: Due to thermal energy, conduction electrons move with high speeds randomly in all directions such that their average velocity vector is zero.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Conduction electrons possess thermal speeds on the order of $10^5 - 10^6\\,\\text{m/s}$ at room temperature. However, their directions are completely random and distributed isotropically. The average velocity vector $\\langle \\vec{v} \\rangle = \\frac{1}{N}\\sum \\vec{v}_i = 0$, resulting in zero net transport of charge across any cross-section. Both Assertion and Reason are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: When a potential difference is applied across a wire, an electric bulb lights up almost instantaneously despite the drift speed of electrons being only a fraction of a millimeter per second.\\nReason: The electric field is established throughout the entire circuit at nearly the speed of light, causing electrons everywhere in the circuit to begin drifting simultaneously.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Electromagnetic energy and electric fields propagate along the conductor at electromagnetic speeds (close to the speed of light $c$). Every conduction electron throughout the filament experiences the field almost immediately and begins drifting, producing instantaneous current. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: For a current-carrying metallic conductor of non-uniform cross-section, the drift velocity of electrons is greater at narrower sections.\\nReason: In steady state, current $I = n e A v_d$ is constant along the conductor, so drift velocity is inversely proportional to cross-sectional area $A$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In steady state, charge does not accumulate anywhere along the wire, so current $I$ is identical through every cross-section. Since $I = n e A v_d$ and electron density $n$ is uniform, $v_d = \\frac{I}{n e A} \\propto \\frac{1}{A}$. Where area is smaller, drift speed is proportionally higher. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: The drift velocity of electrons in a metallic conductor is directly proportional to the applied electric field for moderate field strengths.\\nReason: The drift velocity is given by $v_d = \\frac{e E \\tau}{m}$, where relaxation time $\\tau$ is independent of the applied moderate electric field.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The acceleration imparted by the field is $a = eE/m$. During the average time $\\tau$ between collisions, electrons acquire a drift velocity $v_d = a\\tau = \\frac{eE\\tau}{m}$. For moderate fields, $v_d \\ll v_{\\text{th}}$, so collision frequency and relaxation time $\\tau$ remain governed strictly by thermal vibrations and are field-independent. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: Electron mobility in a conductor is defined as the magnitude of drift velocity per unit electric field.\\nReason: Mobility $\\mu = \\frac{v_d}{E} = \\frac{e\\tau}{m}$, and its SI unit is $\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Mobility $\\mu = v_d / E$. Substituting $v_d = \\frac{e E \\tau}{m}$ gives $\\mu = \\frac{e \\tau}{m}$. The SI unit is $\\frac{\\text{m/s}}{\\text{V/m}} = \\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$. Both Assertion and Reason are true and Reason correctly explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: In semiconductors, the mobility of conduction electrons is generally greater than the mobility of holes.\\nReason: The effective mass of an electron in the conduction band is smaller than the effective mass of a hole in the valence band.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Mobility is inversely proportional to the effective mass of the charge carrier ($\\mu = \\frac{q\\tau}{m^*}$). In semiconductors, the conduction band has higher curvature than the valence band, meaning electrons have a smaller effective mass than holes ($m_e^* < m_h^*$). Therefore $\\mu_e > \\mu_h$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: As the temperature of a metallic conductor increases, the drift velocity of electrons for a constant applied electric field decreases.\\nReason: Increasing temperature enhances lattice vibrations, which reduces the average relaxation time $\\tau$ between electron-phonon collisions.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Drift velocity is $v_d = \\frac{e E \\tau}{m}$. Raising the temperature increases the thermal kinetic energy of lattice ions, expanding their collision cross-section and shortening the mean free time $\\tau$. Consequently, for a constant electric field $E$, $v_d$ decreases. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: Mobility of charge carriers is always a positive scalar quantity.\\nReason: Mobility is defined using the magnitude of the drift velocity: $\\mu = \\frac{|\\vec{v}_d|}{E}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Although electrons drift opposite to the electric field ($\\vec{v}_d = -\\frac{e\\tau}{m}\\vec{E}$), mobility is defined as the magnitude of drift velocity per unit electric field, $\\mu = \\frac{|\\vec{v}_d|}{E}$. Thus, mobility is always positive for both positive and negative charge carriers. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: The drift speed of electrons in typical household copper wiring carrying normal current is of the order of a few millimetres per second or less.\\nReason: The number density of free conduction electrons in copper is extremely large (approximately $8.5 \\times 10^{28}\\,\\text{m}^{-3}$).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "From $v_d = \\frac{I}{n e A}$, because $n \\approx 8.5 \\times 10^{28}\\,\\text{m}^{-3}$ is huge, even for currents of several amperes through a $1\\,\\text{mm}^2$ wire, the drift velocity is on the order of $10^{-4} - 10^{-3}\\,\\text{m/s}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: In a conductor carrying a steady current, the net electrostatic charge inside the body of the conductor is zero.\\nReason: At every point inside the conductor, the rate at which electrons enter an infinitesimal volume equals the rate at which electrons leave that volume.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In steady state, $\\nabla \\cdot \\vec{j} = -\\frac{\\partial \\rho_v}{\\partial t} = 0$. By Gauss's law, $\\nabla \\cdot \\vec{E} = \\frac{\\rho_v}{\\varepsilon_0}$. Since $\\vec{j} = \\sigma \\vec{E}$, $\\nabla \\cdot \\vec{E} = 0$, meaning volume charge density $\\rho_v = 0$. The conductor remains electrically neutral throughout its bulk. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: If the potential difference across a given wire is doubled while keeping its temperature constant, the drift speed of electrons is doubled.\\nReason: Drift velocity is directly proportional to the applied potential difference ($v_d = \\frac{e V \\tau}{m L}$).",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Electric field in the wire is $E = V/L$. Substituting into drift velocity gives $v_d = \\frac{e V \\tau}{m L}$. At constant temperature, $\\tau$ is constant, so $v_d \\propto V$. Doubling $V$ doubles $v_d$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: When a wire of uniform cross-section is stretched to twice its initial length and connected across the same battery, the drift velocity of electrons is halved.\\nReason: When length doubles under the same applied voltage, the electric field $E = V/l$ inside the wire becomes half of its original value.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "The electric field is $E' = \\frac{V}{l'} = \\frac{V}{2l} = \\frac{E}{2}$. Since $v_d = \\frac{e E \\tau}{m}$, halving the electric field halves the drift velocity ($v_d' = v_d / 2$). Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: Current density $\\vec{j}$ is a vector quantity, whereas electric current $I$ is a scalar quantity.\\nReason: Current density has both magnitude and a definite direction associated with the flow of positive charge per unit normal area, and obeys the laws of vector addition.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Current density $\\vec{j} = n q \\vec{v}_d$ transforms as a true spatial vector and follows vector addition rules. In contrast, electric current $I = \\int \\vec{j} \\cdot d\\vec{A}$ is a scalar flux and adds algebraically (scalar addition) at junctions. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: Conduction electrons inside a metal acquire an acceleration between collisions, but on a macroscopic scale they appear to move with a steady average drift velocity.\\nReason: Each collision with a lattice ion completely randomizes the electron's velocity, resetting its acquired directed drift speed to zero on average.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Between consecutive collisions, an electron accelerates under the electric field: $\\vec{a} = -e\\vec{E}/m$. However, collisions with vibrating ions are largely inelastic and randomize the velocity vector. Over millions of collisions, the average velocity reaches a steady terminal value $v_d = a\\tau$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: The drift speed of electrons increases with increasing temperature in a metallic wire under a constant electric field.\\nReason: Thermal energy increases the kinetic energy of conduction electrons, which accelerates their drift along the electric field.",
    options: arOptions,
    correctAnswer: 3,
    explanation: "Assertion is false: In metals, increasing temperature increases thermal vibration amplitudes of lattice ions, causing more frequent collisions and reducing relaxation time $\\tau$. Since $v_d = \\frac{e E \\tau}{m}$, drift velocity decreases, not increases. Reason is also false because thermal motion is random and does not accelerate directed drift. Hence Assertion is false.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: The relaxation time $\\tau$ in a typical metallic conductor at room temperature is of the order of $10^{-14}\\,\\text{s}$.\\nReason: The mean free path of electrons is about $10^{-8}\\,\\text{m}$ and their average thermal speed is about $10^6\\,\\text{m/s}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Relaxation time is $\\tau = \\frac{\\lambda}{v_{\\text{th}}}$. With $\\lambda \\approx 10^{-8}\\,\\text{m}$ and $v_{\\text{th}} \\approx 10^6\\,\\text{m/s}$, $\\tau \\approx \\frac{10^{-8}}{10^6} = 10^{-14}\\,\\text{s}$. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: Two wires of the same material and same length have radii in the ratio $1:2$. When connected in series to a battery, the drift velocity in the thinner wire is 4 times that in the thicker wire.\\nReason: In series, both wires carry the identical current $I$, and drift velocity is inversely proportional to cross-sectional area: $v_d \\propto 1/r^2$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In series, current $I$ is the same. Since $I = n e (\\pi r^2) v_d$, $v_d = \\frac{I}{n e \\pi r^2} \\propto \\frac{1}{r^2}$. With $r_1/r_2 = 1/2$, $v_{d1}/v_{d2} = (r_2/r_1)^2 = (2/1)^2 = 4$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: If the two wires of the previous problem are connected in parallel across the same battery, the drift velocity of electrons in both wires is identical.\\nReason: In parallel, the potential difference $V$ across both wires is the same, and for wires of equal length, the electric field $E = V/l$ is identical.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In parallel across the same source, both wires experience the same voltage $V$. Since lengths are equal, $E = V/l$ is identical in both. Since drift velocity is $v_d = \\frac{e E \\tau}{m}$, and the material is the same, $v_d$ is identical regardless of wire radius. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: The direction of drift velocity of free electrons is opposite to the direction of the electric field inside a conductor.\\nReason: Free electrons carry negative electric charge, so the electrostatic force $\\vec{F} = -e\\vec{E}$ acting on them is opposite to the direction of $\\vec{E}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "By Coulomb's law, $\\vec{F} = q\\vec{E}$. For an electron, $q = -e$, so $\\vec{F} = -e\\vec{E}$. Thus the force and resulting acceleration are directed antiparallel to the applied field. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: Total electrical conductivity of an intrinsic semiconductor is given by $\\sigma = e(n_e \\mu_e + n_h \\mu_h)$.\\nReason: Both conduction electrons and valence band holes contribute to the net electric current in the direction of the applied electric field.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In an intrinsic semiconductor, current is carried by both electrons drifting opposite to $\\vec{E}$ and holes drifting in the direction of $\\vec{E}$. Both movements constitute charge transport in the same direction, giving total current density $j = e(n_e v_{de} + n_h v_{dh}) = e(n_e \\mu_e + n_h \\mu_h)E$. Thus $\\sigma = e(n_e \\mu_e + n_h \\mu_h)$. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: The ratio of drift velocity to thermal velocity of electrons in a copper wire carrying typical current is extremely small, of the order of $10^{-9}$ to $10^{-8}$.\\nReason: Thermal speed is around $10^5 - 10^6\\,\\text{m/s}$ while drift speed is typically $10^{-4} - 10^{-3}\\,\\text{m/s}$.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Ratio $\\frac{v_d}{v_{\\text{th}}} \\approx \\frac{10^{-3}}{10^5} = 10^{-8}$. The random thermal motion completely swamps the slow directed drift, which is merely a gentle bias superimposed on the erratic thermal path. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: Current density $\\vec{j}$ in an isotropic ohmic conductor is parallel to the electric field $\\vec{E}$.\\nReason: According to Ohm's law in microscopic form, $\\vec{j} = \\sigma \\vec{E}$, where electrical conductivity $\\sigma$ is a positive scalar in an isotropic medium.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "In an isotropic conductor, conductivity $\\sigma$ is a scalar constant. Therefore $\\vec{j} = \\sigma \\vec{E}$ means current density vector points in the exact direction of the electric field vector. Both statements are true and Reason is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: When temperature is raised, the mobility of electrons in a metal decreases.\\nReason: Mobility is defined as $\\mu = \\frac{e\\tau}{m}$, and relaxation time $\\tau$ decreases with increasing temperature.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Mobility $\\mu = \\frac{e\\tau}{m}$. Increasing temperature increases lattice phonon scattering, decreasing the mean relaxation time $\\tau$. Therefore, electron mobility decreases. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: In a conductor of tapered conical shape carrying steady current, the electric field is non-uniform along its length.\\nReason: Current density $j = I/A$ varies along the length, and from $\\vec{j} = \\sigma \\vec{E}$, the electric field is proportional to current density.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "For steady current $I$, current is the same across every section. Cross-sectional area $A$ varies along the conical conductor, so $j(x) = I/A(x)$ varies. Since $E(x) = \\rho j(x)$, electric field varies inversely with area along the conductor. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: In an n-type semiconductor, the total current is purely due to the motion of electrons.\\nReason: An n-type semiconductor has no holes at any temperature.",
    options: arOptions,
    correctAnswer: 3,
    explanation: "Assertion is false: In an n-type semiconductor, electrons are the majority carriers and holes are minority carriers. Although electrons carry the vast majority of current, holes still contribute ($j = e(n_e \\mu_e + n_h \\mu_h)E$). Reason is also false because thermal generation continuously produces electron-hole pairs, so hole concentration $p = n_i^2 / n_n \\neq 0$. Thus Assertion is false and Reason is false.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Assertion-Reason",
    question: "Assertion: In a metallic wire connected to a DC source, the paths of electrons between successive collisions are straight line segments in the absence of an electric field and curved parabolic arcs in the presence of an electric field.\\nReason: An electric field exerts a constant electrostatic force on the electron, imparting a constant acceleration perpendicular or parallel to its initial velocity between collisions.",
    options: arOptions,
    correctAnswer: 0,
    explanation: "Without a field, electrons travel with constant velocity along straight paths between collisions. In the presence of a uniform electric field $\\vec{E}$, electrons experience constant acceleration $\\vec{a} = -e\\vec{E}/m$, which makes their trajectories parabolic arcs between collisions, exactly analogous to projectile motion under gravity. Both statements are true and Reason explains Assertion.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 7 Multiple Choice Questions (MCQs)
  {
    type: "Multiple Choice",
    question: "A copper wire of cross-sectional area $2.0\\,\\text{mm}^2$ carries a current of $3.2\\,\\text{A}$. If the number density of conduction electrons in copper is $8.0 \\times 10^{28}\\,\\text{m}^{-3}$, the drift speed of the electrons is:",
    options: [
      "$0.125\\,\\text{mm/s}$",
      "$0.25\\,\\text{mm/s}$",
      "$1.25\\,\\text{mm/s}$",
      "$0.05\\,\\text{mm/s}$"
    ],
    correctAnswer: 0,
    explanation: "Using $v_d = \\frac{I}{n e A}$: $v_d = \\frac{3.2}{(8.0 \\times 10^{28}) \\times (1.6 \\times 10^{-19}) \\times (2.0 \\times 10^{-6})} = \\frac{3.2}{8.0 \\times 1.6 \\times 2.0 \\times 10^3} = \\frac{3.2}{25.6 \\times 10^3} = 0.125 \\times 10^{-3}\\,\\text{m/s} = 0.125\\,\\text{mm/s}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Multiple Choice",
    question: "When a potential difference $V$ is applied across a conductor of length $L$, the drift velocity of electrons is $v_d$. If the length of the conductor is doubled while keeping the potential difference $V$ constant, the new drift velocity will be:",
    options: [
      "$\\frac{v_d}{2}$",
      "$2 v_d$",
      "$\\frac{v_d}{4}$",
      "$v_d$"
    ],
    correctAnswer: 0,
    explanation: "Drift velocity is $v_d = \\frac{e E \\tau}{m} = \\frac{e V \\tau}{m L}$. Since $V$ is kept constant and length becomes $L' = 2L$, the electric field is halved ($E' = E/2$). Therefore, the new drift velocity is $v_d' = \\frac{v_d}{2}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Multiple Choice",
    question: "The mobility of free electrons in a conductor having electron density $n = 5 \\times 10^{28}\\,\\text{m}^{-3}$ and resistivity $\\rho = 2 \\times 10^{-8}\\,\\Omega\\,\\text{m}$ is:",
    options: [
      "$6.25 \\times 10^{-3}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$",
      "$3.125 \\times 10^{-3}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$",
      "$1.25 \\times 10^{-2}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$",
      "$5.0 \\times 10^{-3}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$"
    ],
    correctAnswer: 0,
    explanation: "Conductivity is $\\sigma = \\frac{1}{\\rho} = n e \\mu \\implies \\mu = \\frac{1}{n e \\rho}$. Substituting values: $\\mu = \\frac{1}{(5 \\times 10^{28}) \\times (1.6 \\times 10^{-19}) \\times (2 \\times 10^{-8})} = \\frac{1}{160} = 0.00625 = 6.25 \\times 10^{-3}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Multiple Choice",
    question: "A steady current passes through a wire of non-uniform cross-section. Which of the following quantities remains constant along the wire?",
    options: [
      "Electric current",
      "Current density",
      "Drift speed",
      "Electric field"
    ],
    correctAnswer: 0,
    explanation: "In steady state, conservation of charge dictates that electric current $I$ is the same across every cross-section of the conductor. Current density ($j = I/A$), electric field ($E = \\rho j$), and drift velocity ($v_d = j / (ne)$) all vary inversely with the cross-sectional area $A$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Multiple Choice",
    question: "If the current density in a cylindrical wire of radius $R$ varies with radial distance $r$ as $j(r) = j_0 \\left(1 - \\frac{r^2}{R^2}\\right)$, the total current flowing through the wire is:",
    options: [
      "$\\frac{\\pi j_0 R^2}{2}$",
      "$\\pi j_0 R^2$",
      "$\\frac{\\pi j_0 R^2}{4}$",
      "$\\frac{2\\pi j_0 R^2}{3}$"
    ],
    correctAnswer: 0,
    explanation: "Total current is $I = \\int_0^R j(r) 2\\pi r dr = 2\\pi j_0 \\int_0^R \\left(r - \\frac{r^3}{R^2}\\right) dr = 2\\pi j_0 \\left[ \\frac{R^2}{2} - \\frac{R^4}{4R^2} \\right] = 2\\pi j_0 \\left( \\frac{R^2}{4} \\right) = \\frac{\\pi j_0 R^2}{2}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Multiple Choice",
    question: "Two wires $A$ and $B$ of the same material are connected in series. The diameter of wire $A$ is half that of wire $B$. The ratio of the drift velocity of electrons in wire $A$ to that in wire $B$ is:",
    options: [
      "$4:1$",
      "$2:1$",
      "$1:4$",
      "$1:2$"
    ],
    correctAnswer: 0,
    explanation: "In series, both wires carry identical current $I$. Since $I = n e A v_d = n e \\frac{\\pi d^2}{4} v_d$, we have $v_d \\propto \\frac{1}{d^2}$. Therefore $\\frac{v_{dA}}{v_{dB}} = \\left(\\frac{d_B}{d_A}\\right)^2 = \\left(\\frac{2}{1}\\right)^2 = 4:1$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Multiple Choice",
    question: "The relaxation time of conduction electrons in a metal is $2.5 \\times 10^{-14}\\,\\text{s}$. If an electric field of $20\\,\\text{V/m}$ is applied, the drift velocity of the electrons is (take $e = 1.6 \\times 10^{-19}\\,\\text{C}, m = 9.1 \\times 10^{-31}\\,\\text{kg}$):",
    options: [
      "$8.8 \\times 10^{-2}\\,\\text{m/s}$",
      "$4.4 \\times 10^{-2}\\,\\text{m/s}$",
      "$1.76 \\times 10^{-1}\\,\\text{m/s}$",
      "$2.2 \\times 10^{-3}\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "Drift velocity $v_d = \\frac{e E \\tau}{m} = \\frac{(1.6 \\times 10^{-19}) \\times 20 \\times (2.5 \\times 10^{-14})}{9.1 \\times 10^{-31}} = \\frac{8.0 \\times 10^{-32}}{9.1 \\times 10^{-31}} = \\frac{0.8}{9.1} \\approx 0.0879\\,\\text{m/s} = 8.8 \\times 10^{-2}\\,\\text{m/s}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },

  // 20 Numerical Questions
  {
    type: "Numerical",
    question: "A copper wire carries a current of $1.6\\,\\text{A}$. If the number density of free electrons in copper is $10^{29}\\,\\text{m}^{-3}$ and the cross-sectional area of the wire is $10^{-6}\\,\\text{m}^2$, find the drift velocity of the electrons in $10^{-4}\\,\\text{m/s}$.",
    correctAnswer: 1,
    explanation: "Using $v_d = \\frac{I}{n e A} = \\frac{1.6}{10^{29} \\times (1.6 \\times 10^{-19}) \\times 10^{-6}} = \\frac{1.6}{1.6 \\times 10^4} = 10^{-4}\\,\\text{m/s}$. In units of $10^{-4}\\,\\text{m/s}$, the answer is 1.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "A uniform conductor has a length of $2\\,\\text{m}$ and a potential difference of $4\\,\\text{V}$ is applied across it. If the mobility of electrons is $4.5 \\times 10^{-4}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$, find the drift velocity in $10^{-4}\\,\\text{m/s}$.",
    correctAnswer: 9,
    explanation: "Electric field is $E = \\frac{V}{L} = \\frac{4}{2} = 2\\,\\text{V/m}$. Drift velocity is $v_d = \\mu E = (4.5 \\times 10^{-4}) \\times 2 = 9.0 \\times 10^{-4}\\,\\text{m/s}$. In units of $10^{-4}\\,\\text{m/s}$, the answer is 9.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "A wire of cross-sectional area $1\\,\\text{mm}^2$ carries a current of $2\\,\\text{A}$. Find the current density in $10^6\\,\\text{A/m}^2$.",
    correctAnswer: 2,
    explanation: "Current density $j = \\frac{I}{A} = \\frac{2}{10^{-6}} = 2 \\times 10^6\\,\\text{A/m}^2$. The numerical value is 2.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "An electron experiences a drift velocity of $2 \\times 10^{-4}\\,\\text{m/s}$ in an electric field of $0.05\\,\\text{V/m}$. Calculate its mobility in $10^{-3}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$.",
    correctAnswer: 4,
    explanation: "Mobility $\\mu = \\frac{v_d}{E} = \\frac{2 \\times 10^{-4}}{0.05} = 4 \\times 10^{-3}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$. The value is 4.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "In an intrinsic semiconductor, the electron concentration is $n_i = 10^{16}\\,\\text{m}^{-3}$. The mobilities of electrons and holes are $\\mu_e = 0.36\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$ and $\\mu_h = 0.14\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$ respectively. Find its electrical conductivity in $10^{-4}\\,\\text{S/m}$ (take $e = 1.6 \\times 10^{-19}\\,\\text{C}$).",
    correctAnswer: 8,
    explanation: "Conductivity is $\\sigma = e n_i (\\mu_e + \\mu_h) = (1.6 \\times 10^{-19}) \\times 10^{16} \\times (0.36 + 0.14) = 1.6 \\times 10^{-3} \\times 0.5 = 0.8 \\times 10^{-3}\\,\\text{S/m} = 8 \\times 10^{-4}\\,\\text{S/m}$. The numerical answer is 8.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "The current flowing through a wire of non-uniform cross-section is $5\\,\\text{A}$. If the drift velocity at a section of radius $2\\,\\text{mm}$ is $v_1$, and at another section of radius $1\\,\\text{mm}$ is $v_2$, find the ratio $v_2 / v_1$.",
    correctAnswer: 4,
    explanation: "For constant current, $v_d \\propto \\frac{1}{r^2}$. Therefore $\\frac{v_2}{v_1} = \\left(\\frac{r_1}{r_2}\\right)^2 = \\left(\\frac{2}{1}\\right)^2 = 4$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "A potential difference of $6\\,\\text{V}$ is applied across a wire of length $3\\,\\text{m}$. If the relaxation time is $2.84 \\times 10^{-14}\\,\\text{s}$ and $e/m = 1.76 \\times 10^{11}\\,\\text{C/kg}$, find the drift velocity of electrons in $10^{-2}\\,\\text{m/s}$ (rounded to the nearest integer).",
    correctAnswer: 1,
    explanation: "Electric field $E = V/L = 6/3 = 2\\,\\text{V/m}$. Drift velocity $v_d = \\frac{e}{m} E \\tau = (1.76 \\times 10^{11}) \\times 2 \\times (2.84 \\times 10^{-14}) = 3.52 \\times 2.84 \\times 10^{-3} = 1.00 \\times 10^{-2}\\,\\text{m/s}$. The value in $10^{-2}\\,\\text{m/s}$ is 1.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "A conductor has an electron density of $8.5 \\times 10^{28}\\,\\text{m}^{-3}$. If a current of $3.4\\,\\text{A}$ flows through it with a drift speed of $5 \\times 10^{-4}\\,\\text{m/s}$, what is the cross-sectional area of the wire in $10^{-7}\\,\\text{m}^2$?",
    correctAnswer: 5,
    explanation: "Using $A = \\frac{I}{n e v_d} = \\frac{3.4}{(8.5 \\times 10^{28}) \\times (1.6 \\times 10^{-19}) \\times (5 \\times 10^{-4})} = \\frac{3.4}{6.8 \\times 10^6} = 0.5 \\times 10^{-6}\\,\\text{m}^2 = 5 \\times 10^{-7}\\,\\text{m}^2$. The answer is 5.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "A wire of resistance $R$ carries current $I$ with electron drift velocity $v_d$. If the wire is stretched to 3 times its initial length and connected to the same source of potential difference, the new drift velocity is $v_d / k$. What is the value of $k$?",
    correctAnswer: 3,
    explanation: "Drift velocity under constant voltage is $v_d = \\frac{e V \\tau}{m l} \\propto \\frac{1}{l}$. When length is tripled ($l' = 3l$), new drift velocity is $v_d' = v_d / 3$. Hence $k = 3$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "A beam of electrons moving with speed $v = 10^6\\,\\text{m/s}$ forms a beam current of $1.6\\,\\mu\\text{A}$. How many electrons are contained in a $1\\,\\text{m}$ length of the beam (in $10^7$)?",
    correctAnswer: 1,
    explanation: "Current $I = \\frac{\\Delta q}{\\Delta t} = \\frac{N e}{\\Delta t}$, where $\\Delta t = \\frac{L}{v}$. Thus $I = \\frac{N e v}{L} \\implies N = \\frac{I L}{e v} = \\frac{(1.6 \\times 10^{-6}) \\times 1}{(1.6 \\times 10^{-19}) \\times 10^6} = 10^7$. In units of $10^7$, the answer is 1.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "The current density in a wire of radius $R = 2\\,\\text{mm}$ is uniform and equal to $5 \\times 10^5\\,\\text{A/m}^2$. Calculate the total current in amperes flowing through the wire (take $\\pi = 3.14$). Round to one decimal place.",
    correctAnswer: 6.3,
    explanation: "Cross-sectional area $A = \\pi R^2 = 3.14 \\times (2 \\times 10^{-3})^2 = 3.14 \\times 4 \\times 10^{-6} = 1.256 \\times 10^{-5}\\,\\text{m}^2$. Current $I = j A = (5 \\times 10^5) \\times (1.256 \\times 10^{-5}) = 6.28 \\approx 6.3\\,\\text{A}$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "If the relaxation time of electrons in copper is $2.5 \\times 10^{-14}\\,\\text{s}$, calculate their mobility in $10^{-3}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$ (take $e/m = 1.76 \\times 10^{11}\\,\\text{C/kg}$). Round to one decimal place.",
    correctAnswer: 4.4,
    explanation: "Mobility $\\mu = \\frac{e}{m} \\tau = (1.76 \\times 10^{11}) \\times (2.5 \\times 10^{-14}) = 4.4 \\times 10^{-3}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$. The value is 4.4.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "In an electric circuit, a current of $2.4\\,\\text{A}$ flows for 5 minutes. Find the total number of electrons that pass through any cross-section of the conductor in $10^{21}$.",
    correctAnswer: 4.5,
    explanation: "Total charge $Q = I \\Delta t = 2.4 \\times (5 \\times 60) = 2.4 \\times 300 = 720\\,\\text{C}$. Number of electrons $N = \\frac{Q}{e} = \\frac{720}{1.6 \\times 10^{-19}} = 4.5 \\times 10^{21}$. In units of $10^{21}$, the answer is 4.5.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "Two wires made of the same metal have lengths in the ratio $1:2$ and cross-sectional areas in the ratio $2:1$. When connected in parallel across a battery, find the ratio of the electron drift velocity in the first wire to that in the second wire.",
    correctAnswer: 2,
    explanation: "Connected in parallel across the same battery, both experience the same voltage $V$. Drift velocity is $v_d = \\frac{e V \\tau}{m l} \\propto \\frac{1}{l}$. Therefore $\\frac{v_{d1}}{v_{d2}} = \\frac{l_2}{l_1} = \\frac{2}{1} = 2$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "For the two wires in the previous problem, if they are connected in series across the battery instead, find the ratio of the drift velocity in the first wire to that in the second wire.",
    correctAnswer: 0.5,
    explanation: "In series, current $I$ is the same. Drift velocity is $v_d = \\frac{I}{n e A} \\propto \\frac{1}{A}$. Therefore $\\frac{v_{d1}}{v_{d2}} = \\frac{A_2}{A_1} = \\frac{1}{2} = 0.5$.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "A current of $4.8\\,\\text{A}$ flows through a conductor with $n = 6 \\times 10^{28}\\,\\text{m}^{-3}$ and $A = 2 \\times 10^{-6}\\,\\text{m}^2$. What is the electron drift velocity in $10^{-4}\\,\\text{m/s}$?",
    correctAnswer: 2.5,
    explanation: "Using $v_d = \\frac{I}{n e A} = \\frac{4.8}{(6 \\times 10^{28}) \\times (1.6 \\times 10^{-19}) \\times (2 \\times 10^{-6})} = \\frac{4.8}{1.92 \\times 10^4} = 2.5 \\times 10^{-4}\\,\\text{m/s}$. In units of $10^{-4}\\,\\text{m/s}$, the answer is 2.5.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "A potential difference of $12\\,\\text{V}$ is maintained across a $4\\,\\text{m}$ long wire. If the drift velocity of electrons is $1.5 \\times 10^{-3}\\,\\text{m/s}$, what is the electron mobility in $10^{-4}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$?",
    correctAnswer: 5,
    explanation: "Electric field $E = V/L = 12/4 = 3\\,\\text{V/m}$. Mobility $\\mu = \\frac{v_d}{E} = \\frac{1.5 \\times 10^{-3}}{3} = 0.5 \\times 10^{-3} = 5 \\times 10^{-4}\\,\\text{m}^2\\,\\text{V}^{-1}\\,\\text{s}^{-1}$. In units of $10^{-4}$, the value is 5.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "The mean free path of conduction electrons in a metal is $4 \\times 10^{-8}\\,\\text{m}$. If their average thermal speed is $1.6 \\times 10^6\\,\\text{m/s}$, find the relaxation time in $10^{-14}\\,\\text{s}$.",
    correctAnswer: 2.5,
    explanation: "Relaxation time $\\tau = \\frac{\\lambda}{v_{\\text{th}}} = \\frac{4 \\times 10^{-8}}{1.6 \\times 10^6} = 2.5 \\times 10^{-14}\\,\\text{s}$. In units of $10^{-14}\\,\\text{s}$, the answer is 2.5.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "In a wire, the current density is $j = 3 \\times 10^6\\,\\text{A/m}^2$ and conductivity is $\\sigma = 6 \\times 10^7\\,\\text{S/m}$. Find the electric field inside the wire in $10^{-2}\\,\\text{V/m}$.",
    correctAnswer: 5,
    explanation: "By Ohm's law, $E = \\frac{j}{\\sigma} = \\frac{3 \\times 10^6}{6 \\times 10^7} = 0.05\\,\\text{V/m} = 5 \\times 10^{-2}\\,\\text{V/m}$. The numerical answer is 5.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  },
  {
    type: "Numerical",
    question: "A cylindrical metal wire has $10^{23}$ conduction electrons per $\\text{cm}^3$. When carrying a current with drift speed $0.1\\,\\text{mm/s}$, find its current density in $10^6\\,\\text{A/m}^2$ (take $e = 1.6 \\times 10^{-19}\\,\\text{C}$).",
    correctAnswer: 1.6,
    explanation: "Number density $n = 10^{23}\\,\\text{cm}^{-3} = 10^{29}\\,\\text{m}^{-3}$. Drift speed $v_d = 0.1\\,\\text{mm/s} = 10^{-4}\\,\\text{m/s}$. Current density $j = n e v_d = 10^{29} \\times (1.6 \\times 10^{-19}) \\times 10^{-4} = 1.6 \\times 10^6\\,\\text{A/m}^2$. In units of $10^6\\,\\text{A/m}^2$, the answer is 1.6.",
    marks: 4,
    negativeMarks: 1,
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    subject: SUBJECT
  }
];

const outputPath = path.join(__dirname, 'data_jee_ce_part7.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n');

console.log(`Part 7 generated: ${questions.length} questions (AR: ${questions.filter(q => q.type === 'Assertion-Reason').length}, MCQ: ${questions.filter(q => q.type === 'Multiple Choice').length}, NUM: ${questions.filter(q => q.type === 'Numerical').length})`);
console.log(`Saved to ${outputPath}`);
