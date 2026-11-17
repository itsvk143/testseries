import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db('testseries');

console.log("=== UPDATING TESTS 4 AND 5: THERMAL EXPANSION & STEFAN'S LAW ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 4: THERMAL EXPANSION AND CALORIMETRY
// =========================================================================
const test4DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-SOL-TE-001",
    question: "A bimetallic strip consists of two equal strips of Brass (linear expansion coefficient $\\alpha_1$) and Steel ($\\alpha_2$) riveted together firmly. If $\\alpha_1 > \\alpha_2$, what happens when the strip is heated above its initial room temperature?",
    options: [
      "The strip bends into an arc with Brass on the outer (convex) side and Steel on the inner (concave) side",
      "The strip bends into an arc with Steel on the outer (convex) side and Brass on the inner (concave) side",
      "The strip expands linearly without bending",
      "The strip twists perpendicular to its plane"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/solids/test4_q1_bimetallic_strip.svg",
    explanation: "Because the coefficient of linear expansion of brass is greater than that of steel ($\\alpha_{\\text{brass}} > \\alpha_{\\text{steel}}$), brass expands more than steel for the same temperature rise ($\\Delta L_1 > \\Delta L_2$). Since the two strips are welded together at their interface, the strip must bend into a circular arc with the longer element (brass) on the convex (outer) circumference and the shorter element (steel) on the concave (inner) circumference. This differential expansion principle is used in bimetallic thermostats and thermal switches."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-SOL-TE-002",
    question: "The graph shows the heating curve of $1\\text{ g}$ of ice at $-10^\\circ\\text{C}$ converting to steam at $120^\\circ\\text{C}$ as heat is added at a constant rate. Why is the boiling plateau (vaporization at $100^\\circ\\text{C}$) noticeably wider than the melting plateau (fusion at $0^\\circ\\text{C}$)?",
    options: [
      "The latent heat of vaporization of water ($L_v \\approx 540\\text{ cal g}^{-1}$) is nearly $6.75$ times greater than the latent heat of fusion of ice ($L_f \\approx 80\\text{ cal g}^{-1}$)",
      "The boiling point of water is higher than the melting point of ice",
      "The specific heat capacity of water is less than that of ice",
      "Heat is absorbed only during vaporization and not during fusion"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test4_q2_heating_curve_water.svg",
    explanation: "During a phase transition, temperature remains constant as heat is supplied. The length of the horizontal plateau represents the heat required: $Q = m L$.\n1. For melting (fusion at $0^\\circ\\text{C}$), $Q_{\\text{fusion}} = m L_f = 1 \\times 80 = 80\\text{ cal}$.\n2. For boiling (vaporization at $100^\\circ\\text{C}$), $Q_{\\text{vap}} = m L_v = 1 \\times 540 = 540\\text{ cal}$.\nComplete separation of liquid molecules into the gaseous phase requires overcoming all intermolecular hydrogen bonds, requiring $540\\text{ cal g}^{-1}$, which is $6.75$ times the energy required merely to loosen the rigid ice lattice ($80\\text{ cal g}^{-1}$). Hence, the vaporization plateau is much wider."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-SOL-TE-003",
    question: "A uniform metal rod of natural length $L$, cross-sectional area $A$, Young's modulus $Y$, and linear expansion coefficient $\\alpha$ is clamped rigidly between two immovable walls, as shown. When the temperature of the rod is increased by $\\Delta T$, the compressive thermal force developed in the rod is:",
    options: [
      "$F = Y A \\alpha \\Delta T$",
      "$F = \\frac{Y A \\alpha}{\\Delta T}$",
      "$F = \\frac{Y \\alpha \\Delta T}{A}$",
      "$F = Y A L \\alpha \\Delta T$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test4_q3_thermal_stress_rod.svg",
    explanation: "If free to expand, the rod would lengthen by $\\Delta L = L \\alpha \\Delta T$. Because the rigid unyielding walls prevent any expansion, the effective compressive strain produced is:\n$$\\varepsilon = \\frac{\\Delta L}{L} = \\frac{L \\alpha \\Delta T}{L} = \\alpha \\Delta T$$\nBy Hooke's law, the compressive thermal stress is:\n$$\\sigma = Y \\varepsilon = Y \\alpha \\Delta T$$\nThe compressive force exerted by the walls on the rod is:\n$$F = \\sigma A = Y A \\alpha \\Delta T$$\nNote that this force is completely independent of the original length $L$ of the rod."
  }
];

const test4ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-SOL-TE-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For an isotropic solid material, the coefficients of linear expansion ($\\alpha$), superficial expansion ($\\beta$), and cubical expansion ($\\gamma$) are related by the ratio $\\alpha : \\beta : \\gamma = 1 : 2 : 3$.\nReason (R): For small temperature changes, $\\beta \\approx 2\\alpha$ and $\\gamma \\approx 3\\alpha$, since higher powers of $\\alpha \\Delta T$ (such as $(\\alpha \\Delta T)^2$ and $(\\alpha \\Delta T)^3$) are negligible.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "For an isotropic cube of side $L$: $L' = L(1 + \\alpha\\Delta T)$. Area expands as $A' = L'^2 = L^2 (1 + \\alpha\\Delta T)^2 \\approx A (1 + 2\\alpha\\Delta T) \\implies \\beta = 2\\alpha$. Volume expands as $V' = L'^3 = L^3 (1 + \\alpha\\Delta T)^3 \\approx V (1 + 3\\alpha\\Delta T) \\implies \\gamma = 3\\alpha$. Thus, $\\frac{\\alpha}{1} = \\frac{\\beta}{2} = \\frac{\\gamma}{3}$. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-SOL-TE-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): During severe winters, freshwater lakes freeze only at the surface, while aquatic life thrives in liquid water below the ice layer.\nReason (R): Water exhibits anomalous expansion between $0^\\circ\\text{C}$ and $4^\\circ\\text{C}$, attaining its maximum density at $4^\\circ\\text{C}$, so the densest $4^\\circ\\text{C}$ water sinks to the bottom.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "When surface water cools towards $4^\\circ\\text{C}$, its density increases and it sinks to the lake bottom. Below $4^\\circ\\text{C}$ down to $0^\\circ\\text{C}$, water anomalously expands, becoming less dense, so freezing occurs from the top down. Ice, being lighter and a poor thermal conductor, floats and insulates the $4^\\circ\\text{C}$ liquid water underneath, preserving aquatic life. Both (A) and (R) are true and (R) is the exact explanation."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-SOL-TE-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a circular hole is drilled in a flat metal plate and the plate is heated uniformly, the diameter of the hole increases.\nReason (R): Thermal expansion is a photographic expansion: all interatomic separations between adjacent atoms increase uniformly upon heating, so the perimeter of the hole expands.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Thermal expansion acts like a photographic enlargement. If the hole were filled by a plug of the same metal, that plug would expand on heating. Removing the plug does not change the expansion of the surrounding rim. Since every chord and circumference expands by $\\Delta L = L \\alpha \\Delta T$, the diameter of the hole must increase. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-SOL-TE-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When $10\\text{ g}$ of ice at $0^\\circ\\text{C}$ is mixed with $10\\text{ g}$ of water at $80^\\circ\\text{C}$ in an insulated calorimeter, the final equilibrium temperature of the mixture is $0^\\circ\\text{C}$.\nReason (R): Heat released by cooling $10\\text{ g}$ of water from $80^\\circ\\text{C}$ to $0^\\circ\\text{C}$ is $Q = 10 \\times 1 \\times 80 = 800\\text{ cal}$, which is exactly equal to the latent heat needed to melt $10\\text{ g}$ of ice ($Q = m L_f = 10 \\times 80 = 800\\text{ cal}$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Heat released by hot water cooling to $0^\\circ\\text{C}$: $Q_{\\text{released}} = m_w c_w \\Delta T = 10 \\times 1 \\times (80 - 0) = 800\\text{ cal}$. Heat required to melt all ice at $0^\\circ\\text{C}$: $Q_{\\text{req}} = m_i L_f = 10 \\times 80 = 800\\text{ cal}$. Since $Q_{\\text{released}} = Q_{\\text{req}}$, exactly all the ice melts into water at $0^\\circ\\text{C}$ with no heat remaining to raise its temperature. The final system is $20\\text{ g}$ of pure water at $0^\\circ\\text{C}$. Both (A) and (R) are true and (R) is the exact mathematical proof."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-SOL-TE-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Pendulum clocks made with uncompensated brass rods run slow in summer and run fast in winter.\nReason (R): In summer, the length of the pendulum increases due to thermal expansion ($L' = L(1 + \\alpha\\Delta\\theta)$); since the time period is $T = 2\\pi\\sqrt{L/g}$, a longer period means the clock loses time.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "In summer, higher temperatures cause the pendulum rod to lengthen by $\\Delta L = L \\alpha \\Delta\\theta$. The fractional change in time period is $\\frac{\\Delta T}{T} = \\frac{1}{2} \\frac{\\Delta L}{L} = \\frac{1}{2} \\alpha \\Delta\\theta > 0$. An increased time period means each oscillation takes longer, so the clock records fewer ticks per day and runs slow (loses time). In winter, the rod contracts and the clock runs fast. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-SOL-TE-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Burns caused by steam at $100^\\circ\\text{C}$ are far more severe and painful than burns caused by boiling water at $100^\\circ\\text{C}$.\nReason (R): Every gram of steam at $100^\\circ\\text{C}$ contains $540\\text{ cal}$ of additional latent heat of vaporization compared to liquid water at $100^\\circ\\text{C}$, releasing this extra heat upon condensing on the skin.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "When $1\\text{ g}$ of steam at $100^\\circ\\text{C}$ comes in contact with skin, it first condenses into water at $100^\\circ\\text{C}$, releasing its latent heat of condensation ($540\\text{ cal} \\approx 2260\\text{ J}$). After condensing, it further cools as boiling water. Boiling water at $100^\\circ\\text{C}$ releases only sensible heat as it cools. Therefore, steam delivers over five times more thermal energy to tissue than the same mass of boiling water. Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

// =========================================================================
// TEST 5: STEFAN'S LAW OF RADIATION
// =========================================================================
const test5DiagramQuestions = [
  {
    index: 0,
    commercialId: "NEET-PHY-SOL-SR-001",
    question: "The graph illustrates the spectral emissive power $E_\\lambda$ versus wavelength $\\lambda$ for a blackbody radiator at three absolute temperatures $T_1 < T_2 < T_3$. Which of the following laws governs the shift in peak wavelength $\\lambda_m$ with temperature, and how does the total area under each curve scale with temperature?",
    options: [
      "Wien's displacement law ($\\lambda_m T = b$) governs the peak shift; total area scales as $T^4$ according to Stefan-Boltzmann law",
      "Wien's law states $\\lambda_m / T = \\text{constant}$; total area scales as $T^2$",
      "Rayleigh-Jeans law governs the peak shift; total area scales linearly with $T$",
      "The peak wavelength is independent of temperature; total area scales as $T^3$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/solids/test5_q1_blackbody_radiation_curves.svg",
    explanation: "1. Wien's displacement law states that the wavelength corresponding to maximum spectral emissive power is inversely proportional to absolute temperature: $\\lambda_m \\propto \\frac{1}{T} \\implies \\lambda_m T = b \\approx 2.898 \\times 10^{-3} \\text{ m K}$. Thus, as temperature increases, the peak shifts towards shorter wavelengths.\n2. The total emissive power is the integral of $E_\\lambda$ over all wavelengths (represented by the total area under the $E_\\lambda - \\lambda$ curve). By the Stefan-Boltzmann law, this total area is directly proportional to the fourth power of absolute temperature: $\\text{Area} = E = \\sigma T^4$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-SOL-SR-002",
    question: "A non-black body of surface area $A$ and emissivity $e$ ($0 < e < 1$) at absolute temperature $T$ is placed inside an evacuated enclosure maintained at constant temperature $T_0$ ($T > T_0$), as depicted in the diagram. The net rate of heat loss by radiation $P_{\\text{net}}$ from the body is:",
    options: [
      "$P_{\\text{net}} = e \\sigma A (T^4 - T_0^4)$",
      "$P_{\\text{net}} = e \\sigma A (T - T_0)^4$",
      "$P_{\\text{net}} = \\sigma A (T^4 - T_0^4)$",
      "$P_{\\text{net}} = e \\sigma A (T^2 - T_0^2)$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test5_q2_stefan_cooling_surroundings.svg",
    explanation: "According to Stefan-Boltzmann law:\n1. The rate of radiant energy emitted by the body is $P_{\\text{emit}} = e \\sigma A T^4$.\n2. The body also absorbs radiation emitted by the enclosure walls at temperature $T_0$: $P_{\\text{absorb}} = e \\sigma A T_0^4$ (by Kirchhoff's law, absorptivity equals emissivity: $a = e$).\n3. The net rate of heat loss from the body to its surroundings is:\n$$P_{\\text{net}} = P_{\\text{emit}} - P_{\\text{absorb}} = e \\sigma A (T^4 - T_0^4)$$"
  },
  {
    index: 2,
    commercialId: "NEET-PHY-SOL-SR-003",
    question: "The graphs depict the relationship between radiated power $P$ and absolute temperature $T$ of a blackbody. In a logarithmic plot of $\\log P$ versus $\\log T$, the slope of the resulting straight line is:",
    options: [
      "$4$",
      "$1$",
      "$2$",
      "$\\frac{1}{4}$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/solids/test5_q3_power_vs_temperature_graph.svg",
    explanation: "From Stefan's law: $P = e \\sigma A T^4$. Taking the natural or base-10 logarithm of both sides:\n$$\\log P = \\log(e \\sigma A) + 4 \\log T$$\nComparing this with the equation of a straight line $y = c + m x$, where $y = \\log P$ and $x = \\log T$:\n$$\\text{Slope } m = 4$$\nThus, the slope is exactly 4, reflecting the fourth-power temperature dependence."
  }
];

const test5ARQuestions = [
  {
    index: 39,
    commercialId: "NEET-PHY-SOL-SR-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Good absorbers of thermal radiation are also good emitters at the same temperature.\nReason (R): According to Kirchhoff's law of radiation, for any body in thermal equilibrium, the ratio of spectral emissive power to spectral absorptive power is a universal function equal to the emissive power of a perfectly black body ($e_\\lambda / a_\\lambda = E_\\lambda$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Kirchhoff's radiation law proves that at any given wavelength and temperature, $\\frac{e_\\lambda}{a_\\lambda} = E_\\lambda$. Thus, if a body is a strong absorber ($a_\\lambda \\to 1$), its emissive power $e_\\lambda$ must also be high (e.g. blackened platinum or charcoal glows brightest when heated). A perfect reflector ($a_\\lambda = 0$) emits no radiation ($e_\\lambda = 0$). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-SOL-SR-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Newton's law of cooling is a valid linear approximation of Stefan's law of radiation, applicable only when the excess temperature of the body over its surroundings is small ($\\Delta T \\ll T_0$).\nReason (R): When $T = T_0 + \\Delta T$ and $\\Delta T \\ll T_0$, binomial expansion gives $T^4 - T_0^4 = T_0^4 \\left[(1 + \\Delta T/T_0)^4 - 1\\right] \\approx 4 T_0^3 \\Delta T$, making rate of heat loss directly proportional to $(T - T_0)$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Difficult",
    explanation: "From Stefan's law, $P_{\\text{net}} = e\\sigma A (T^4 - T_0^4)$. Writing $T = T_0 + \\Delta T$ with $\\frac{\\Delta T}{T_0} \\ll 1$, we expand: $(T_0 + \\Delta T)^4 - T_0^4 \\approx T_0^4 (1 + 4\\frac{\\Delta T}{T_0}) - T_0^4 = 4 T_0^3 \\Delta T$. Hence, $\\frac{dQ}{dt} = (4 e \\sigma A T_0^3) (T - T_0) = k (T - T_0)$, which is Newton's law of cooling. Both (A) and (R) are true and (R) is the exact mathematical derivation."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-SOL-SR-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A polished silvered teapot keeps tea hot for a much longer time than a rough, blackened metal teapot of identical shape and size.\nReason (R): Highly polished and shining surfaces have very low emissivity ($e \\ll 1$), so their rate of radiant heat emission ($P = e\\sigma A T^4$) is very small.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "According to Stefan's law, $P = e\\sigma A T^4$. Polished metallic surfaces have an emissivity close to $0.05$ (meaning they radiate only $5\\%$ of what a blackbody would), whereas blackened surfaces have $e \\approx 0.9\\text{--}0.95$. Consequently, the silvered teapot radiates heat roughly $18$ times slower. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-SOL-SR-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If the surface temperature of a spherical star increases from $3000\\text{ K}$ to $6000\\text{ K}$ while its radius remains unchanged, the total power radiated by the star increases by a factor of 16.\nReason (R): By the Stefan-Boltzmann law, the total radiated power is directly proportional to the fourth power of absolute temperature ($P = 4\\pi R^2 \\sigma T^4 \\propto T^4$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Radiated power is $P = 4\\pi R^2 \\sigma T^4$. Since radius $R$ is constant, $P \\propto T^4$. When absolute temperature doubles ($T_2 / T_1 = 6000 / 3000 = 2$), the power ratio is $\\frac{P_2}{P_1} = \\left(\\frac{T_2}{T_1}\\right)^4 = 2^4 = 16$. Both (A) and (R) are true and (R) is the exact mathematical explanation."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-SOL-SR-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The walls of a vacuum flask (Dewar flask) are silvered on the vacuum-facing surfaces.\nReason (R): Silvering the inner surfaces minimizes heat transfer by thermal radiation through multiple reflections.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "A vacuum flask minimizes heat transfer in all three modes: the vacuum between walls eliminates conduction and convection, while the silver mirror coating on both glass walls provides high reflectivity and extremely low emissivity, preventing heat transfer by radiation. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-SOL-SR-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The Stefan-Boltzmann constant $\\sigma$ has SI unit $\\text{W m}^{-2} \\text{ K}^{-4}$ and dimensional formula $[M^1 L^0 T^{-3} K^{-4}]$.\nReason (R): From Stefan's law, $\\sigma = \\frac{E}{A t T^4}$, giving units $\\frac{\\text{J}}{\\text{m}^2 \\cdot \\text{s} \\cdot \\text{K}^4} = \\text{W m}^{-2} \\text{ K}^{-4}$.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Easy",
    explanation: "From $E = \\sigma A T^4 t$, we have $\\sigma = \\frac{E}{A t T^4}$. In units: $\\frac{\\text{J}}{\\text{m}^2 \\text{ s K}^4} = \\frac{\\text{W}}{\\text{m}^2 \\text{ K}^4} = \\text{W m}^{-2} \\text{ K}^{-4}$. In dimensions: $\\frac{[M L^2 T^{-2}]}{[L^2] [T] [K^4]} = [M^1 L^0 T^{-3} K^{-4}]$. Both (A) and (R) are true and (R) is the exact derivation."
  }
];

// Helper function to update test paper
async function updateTestPaper(testId, slugAliases, subtopicTitle, chapterName, diagramQs, arQs) {
  console.log(`\n--- Processing Test: ${testId} ---`);
  let tp = await db.collection('testPapers').findOne({ testId });
  if (!tp) {
    for (const alias of slugAliases) {
      tp = await db.collection('testPapers').findOne({ testId: alias });
      if (tp) break;
    }
  }

  let existingQuestionIds = [];
  if (tp && tp.questions) {
    existingQuestionIds = tp.questions.map(q => {
      const raw = typeof q === 'string' ? q : (q._id || q.questionId || q.id);
      return ObjectId.isValid(raw) ? new ObjectId(raw) : raw;
    });
  }

  const existingDocs = await db.collection('questionBank').find({ _id: { $in: existingQuestionIds.filter(id => id instanceof ObjectId) } }).toArray();
  const existingMap = new Map(existingDocs.map(d => [d._id.toString(), d]));

  const finalQuestionIds = [];

  for (let idx = 0; idx < 45; idx++) {
    const diagDef = diagramQs.find(d => d.index === idx);
    const arDef = arQs.find(a => a.index === idx);

    if (diagDef) {
      const existingId = existingQuestionIds[idx];
      let docId = existingId instanceof ObjectId ? existingId : new ObjectId();
      await db.collection('questionBank').updateOne(
        { _id: docId },
        {
          $set: {
            commercialId: diagDef.commercialId,
            question: diagDef.question,
            options: diagDef.options,
            correctAnswer: diagDef.correctOption,
            correctOption: diagDef.correctOption,
            explanation: diagDef.explanation,
            difficulty: diagDef.difficulty,
            image: diagDef.image,
            img: diagDef.image,
            subject: 'Physics',
            chapter: chapterName,
            subTopic: subtopicTitle,
            subtopic: subtopicTitle,
            type: 'MCQ',
            questionType: 'MCQ (Multiple Choice Question)',
            classGrade: 'Class 11',
            marks: 4,
            negativeMarks: 1,
            updatedAt: new Date()
          }
        },
        { upsert: true }
      );
      finalQuestionIds.push(docId);
      console.log(`Q${idx + 1} updated as DIAGRAM question: ${diagDef.image}`);
    } else if (arDef) {
      const existingId = existingQuestionIds[idx];
      let docId = existingId instanceof ObjectId ? existingId : new ObjectId();
      await db.collection('questionBank').updateOne(
        { _id: docId },
        {
          $set: {
            commercialId: arDef.commercialId,
            question: arDef.question,
            options: arDef.options,
            correctAnswer: arDef.correctOption,
            correctOption: arDef.correctOption,
            explanation: arDef.explanation,
            difficulty: arDef.difficulty,
            subject: 'Physics',
            chapter: chapterName,
            subTopic: subtopicTitle,
            subtopic: subtopicTitle,
            type: 'ASSERTION_REASON',
            questionType: 'Assertion–Reasoning',
            classGrade: 'Class 11',
            marks: 4,
            negativeMarks: 1,
            updatedAt: new Date()
          }
        },
        { upsert: true }
      );
      finalQuestionIds.push(docId);
      console.log(`Q${idx + 1} updated as Section B ASSERTION-REASON question: ans=${arDef.correctOption}`);
    } else {
      const existingId = existingQuestionIds[idx];
      if (existingId instanceof ObjectId && existingMap.has(existingId.toString())) {
        const curDoc = existingMap.get(existingId.toString());
        await db.collection('questionBank').updateOne(
          { _id: curDoc._id },
          {
            $set: {
              subject: 'Physics',
              chapter: chapterName,
              subTopic: subtopicTitle,
              subtopic: subtopicTitle,
              type: 'MCQ',
              questionType: 'MCQ (Multiple Choice Question)',
              classGrade: 'Class 11',
              marks: 4,
              negativeMarks: 1,
              updatedAt: new Date()
            }
          }
        );
        finalQuestionIds.push(curDoc._id);
      } else {
        const newDoc = {
          subject: 'Physics',
          chapter: chapterName,
          subTopic: subtopicTitle,
          subtopic: subtopicTitle,
          type: 'MCQ',
          questionType: 'MCQ (Multiple Choice Question)',
          question: `Sample problem on ${subtopicTitle} regarding fundamental concepts.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctOption: "a",
          correctAnswer: "a",
          explanation: "Standard explanation based on NCERT Physics.",
          difficulty: "Medium",
          classGrade: 'Class 11',
          marks: 4,
          negativeMarks: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        const ins = await db.collection('questionBank').insertOne(newDoc);
        finalQuestionIds.push(ins.insertedId);
      }
    }
  }

  const allIdsToUpdate = [testId, ...slugAliases];
  for (const tid of allIdsToUpdate) {
    await db.collection('testPapers').updateOne(
      { testId: tid },
      {
        $set: {
          testId: tid,
          title: subtopicTitle,
          exam: 'NEET',
          subject: 'Physics',
          chapter: chapterName,
          duration: 60,
          totalMarks: 180,
          questionsCount: 45,
          standardQuestionsCount: 45,
          questions: finalQuestionIds,
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );
    console.log(`Synced testPaper ${tid} with 45 questions.`);
  }
}

// Run Test 4
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Thermal-expansion-and-calorimetry",
  [
    "neet-SUBTOPIC-Physics-Thermal-Expansion-and-Calorimetry",
    "neet-SUBTOPIC-Physics-thermal-expansion-and-calorimetry"
  ],
  "Thermal expansion and calorimetry",
  "Thermal Properties of Matter",
  test4DiagramQuestions,
  test4ARQuestions
);

// Run Test 5
await updateTestPaper(
  "neet-SUBTOPIC-Physics-Stefan's-law-of-radiation",
  [
    "neet-SUBTOPIC-Physics-Stefan-s-law-of-radiation",
    "neet-SUBTOPIC-Physics-Stefans-law-of-radiation",
    "neet-SUBTOPIC-Physics-Stefan's-Law-of-Radiation"
  ],
  "Stefan's law of radiation",
  "Thermal Properties of Matter",
  test5DiagramQuestions,
  test5ARQuestions
);

await client.close();
console.log("\nTests 4 and 5 successfully updated!");
