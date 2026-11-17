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

console.log("=== UPDATING THERMODYNAMICS TESTS 1 AND 2 ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 1: THERMAL EQUILIBRIUM
// =========================================================================
const test1DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-TH-TE-001",
    question: "The diagram depicts three thermodynamic systems $A$, $B$, and $C$. Systems $A$ and $B$ are separated from each other by an insulating (adiabatic) wall, while both are in contact with system $C$ through a conducting (diathermic) wall. According to the Zeroth Law of Thermodynamics, if $A$ is in thermal equilibrium with $C$, and $B$ is in thermal equilibrium with $C$, which of the following statements must be true?",
    options: [
      "Systems $A$ and $B$ are in mutual thermal equilibrium ($T_A = T_B$), and no net heat will flow between them if they are brought into diathermic contact",
      "System $A$ must transfer heat spontaneously to system $B$ because $T_A > T_B$",
      "System $B$ must transfer heat spontaneously to system $A$ because $T_B > T_A$",
      "Thermal equilibrium between $A$ and $B$ cannot be predicted without knowing their respective heat capacities"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/thermo/test1_q1_zeroth_law_systems.svg",
    explanation: "The Zeroth Law of Thermodynamics states: 'If two systems $A$ and $B$ are each in thermal equilibrium with a third system $C$ ($T_A = T_C$ and $T_B = T_C$), then they are in thermal equilibrium with each other ($T_A = T_B$).' If the insulating adiabatic wall between $A$ and $B$ is replaced by a conducting diathermic wall, no net heat will flow because their temperatures are identical. This fundamental law provides the physical basis for the concept of temperature and thermometry."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-TH-TE-002",
    question: "The diagram illustrates the calibration scales of a standard Celsius thermometer and a Fahrenheit thermometer between their respective standard fixed points (ice point and steam point). At what unique temperature reading do both thermometer scales register the exact same numerical value?",
    options: [
      "$+40^\\circ$",
      "$-40^\\circ$",
      "$0^\\circ$",
      "$-273.15^\\circ$"
    ],
    correctOption: "b",
    difficulty: "Medium",
    image: "/images/diagrams/thermo/test1_q2_temperature_scales_thermometer.svg",
    explanation: "The linear conversion relation between Celsius ($C$) and Fahrenheit ($F$) scales is:\n$$\\frac{C - 0}{100} = \\frac{F - 32}{180} \\implies \\frac{C}{5} = \\frac{F - 32}{9}$$\nSetting $C = F = x$:\n$$\\frac{x}{5} = \\frac{x - 32}{9} \\implies 9x = 5(x - 32) \\implies 9x = 5x - 160 \\implies 4x = -160 \\implies x = -40$$\nThus, at $-40^\\circ\\text{C} = -40^\\circ\\text{F}$, both temperature scales read the identical numerical value."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-TH-TE-003",
    question: "Two isolated metallic blocks, Body 1 at temperature $T_1 = 80^\\circ\\text{C}$ and Body 2 at temperature $T_2 = 20^\\circ\\text{C}$, are placed in thermal contact through a conducting interface within an adiabatic enclosure, as shown. Which condition uniquely characterizes the final thermodynamic state of thermal equilibrium?",
    options: [
      "Both bodies have acquired equal quantities of total internal energy",
      "Both bodies have acquired identical thermal heat capacities",
      "Both bodies reach a common uniform temperature ($T_1 = T_2 = T_{\\text{eq}}$) and net heat flow between them ceases",
      "All internal molecular kinetic motion inside both bodies stops completely"
    ],
    correctOption: "c",
    difficulty: "Medium",
    image: "/images/diagrams/thermo/test1_q3_heat_transfer_equilibrium.svg",
    explanation: "Two systems in thermal contact are said to be in thermal equilibrium when their macrostate stops changing and net heat exchange between them becomes zero. Spontaneous heat flows from the hotter body ($T_1$) to the colder body ($T_2$) until their temperatures equalize ($T_1 = T_2 = T_{\\text{eq}}$). Thermal equilibrium depends solely on temperature equality, not on having equal internal energies or equal heat capacities (a large block of copper at $50^\\circ\\text{C}$ has much more internal energy than a small copper coin at $50^\\circ\\text{C}$, yet they are in perfect thermal equilibrium)."
  }
];

const test1ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-TH-TE-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The Zeroth Law of Thermodynamics provides the conceptual basis for introducing temperature as a fundamental state variable of a thermodynamic system.\nReason (R): If two systems are in thermal equilibrium with a third system, they possess a common physical property that has the same value for all three systems, which is defined as temperature.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "The Zeroth Law of Thermodynamics establishes that thermal equilibrium is an equivalence relation (transitive property: if $A \\sim C$ and $B \\sim C$, then $A \\sim B$). This implies the existence of a scalar state function whose equality is the necessary and sufficient condition for thermal equilibrium; this scalar function is called temperature. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-TH-TE-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Clinical liquid-in-glass mercury thermometers are manufactured with a narrow constriction (kink) in the capillary bore just above the bulb.\nReason (R): On the international Kelvin thermodynamic temperature scale, the triple point of water is assigned an exact standard value of $273.16\\text{ K}$.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion is true: the constriction prevents mercury from falling back into the bulb when the thermometer is removed from the patient's mouth, allowing accurate reading. Reason is also true: the triple point of water ($0.01^\\circ\\text{C}$) is internationally defined as $273.16\\text{ K}$ as the primary thermometric reference standard. However, the definition of the triple point does not explain why clinical thermometers have a capillary constriction. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-TH-TE-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When a block of iron and a cup of water are in mutual thermal equilibrium, they do not necessarily contain equal amounts of internal energy.\nReason (R): Thermal equilibrium requires equality of both temperature and heat capacity between two contacting bodies.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion is true: thermal equilibrium requires equality of temperature ($T_1 = T_2$), whereas total internal energy is an extensive property depending on mass, chemical composition, and degrees of freedom ($U = n C_v T$). Reason is false because thermal equilibrium requires ONLY equality of temperature; heat capacities do not need to be equal. Thus, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-TH-TE-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Heat is an intrinsic thermodynamic state function of a body, so a body with a high temperature possesses a large amount of heat.\nReason (R): Temperature is an intensive state variable that determines the direction of spontaneous heat transfer between two systems in thermal contact.",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion is false: heat is NOT a state function and cannot be possessed by a body; heat is 'energy in transit' across a boundary driven by a temperature difference. A body contains internal energy, not heat. Reason is true: temperature is an intensive state variable, and spontaneous heat always flows from a region of higher temperature to lower temperature until equilibrium. Thus, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-TH-TE-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): Constant-volume gas thermometers are preferred as primary precision thermometric standards over liquid-in-glass mercury thermometers.\nReason (R): For real gases at sufficiently low pressures, the pressure-temperature relationship approaches ideal gas behavior ($P \\propto T$), which is completely independent of the chemical identity of the thermometric gas.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Liquid-in-glass thermometers depend on the non-linear thermal expansion of specific liquids (mercury, alcohol) and glass enclosures. In contrast, in a constant-volume gas thermometer operating at low pressure, all gases obey the universal ideal gas law $P = \\frac{n R}{V} T \\implies P \\propto T$. The measured temperature is therefore independent of the nature of the gas used, making it an absolute standard. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-TH-TE-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A faulty thermometer having its lower fixed point at $+5^\\circ\\text{C}$ and upper fixed point at $+95^\\circ\\text{C}$ will read $50^\\circ$ when measuring the temperature of a water bath at true temperature $50^\\circ\\text{C}$.\nReason (R): Absolute zero is the hypothetical temperature at which all translational kinetic energy of ideal gas molecules vanishes, corresponding to $-273.15^\\circ\\text{C}$ on the Celsius scale.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion is true: for the faulty thermometer, $\\frac{T_{\\text{faulty}} - 5}{95 - 5} = \\frac{T_{\\text{true}} - 0}{100 - 0} \\implies \\frac{T_{\\text{faulty}} - 5}{90} = \\frac{50}{100} = \\frac{1}{2} \\implies T_{\\text{faulty}} - 5 = 45 \\implies T_{\\text{faulty}} = 50^\\circ$. Reason is also true: absolute zero is defined as $0\\text{ K} = -273.15^\\circ\\text{C}$, where ideal gas pressure and kinetic energy extrapolate to zero. However, Reason does not explain the arithmetic coincidence of the faulty thermometer at $50^\\circ\\text{C}$. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  }
];

// =========================================================================
// TEST 2: LAWS OF THERMODYNAMICS
// =========================================================================
const test2DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-TH-LT-001",
    question: "The diagram depicts an ideal gas enclosed in a cylinder fitted with a frictionless, movable piston. An amount of heat $\\Delta Q = 500\\text{ J}$ is supplied to the gas, causing it to expand and perform $W = 200\\text{ J}$ of mechanical work by pushing the piston upwards against atmospheric pressure. According to the First Law of Thermodynamics, what is the increase in the internal energy $\\Delta U$ of the gas?",
    options: [
      "$700\\text{ J}$",
      "$300\\text{ J}$",
      "$-300\\text{ J}$",
      "$200\\text{ J}$"
    ],
    correctOption: "b",
    difficulty: "Easy",
    image: "/images/diagrams/thermo/test2_q1_first_law_piston_cylinder.svg",
    explanation: "According to the First Law of Thermodynamics: $\\Delta Q = \\Delta U + W$, where:\n- $\\Delta Q = +500\\text{ J}$ (heat supplied to the system, positive)\n- $W = +200\\text{ J}$ (work done by the gas during expansion, positive)\n$$\\Delta U = \\Delta Q - W = 500\\text{ J} - 200\\text{ J} = +300\\text{ J}$$\nThus, the internal energy of the gas increases by $300\\text{ J}$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-TH-LT-002",
    question: "A heat engine operates between a hot reservoir at temperature $T_H$ and a cold sink at temperature $T_C$, as shown. In each complete cycle, the engine absorbs $Q_H = 1000\\text{ J}$ of heat from the hot source and rejects $Q_C = 600\\text{ J}$ of heat to the cold sink. What is the net mechanical work output $W$ per cycle and the thermal efficiency $\\eta$ of this engine?",
    options: [
      "$W = 400\\text{ J},\\; \\eta = 40\\%$",
      "$W = 600\\text{ J},\\; \\eta = 60\\%$",
      "$W = 1600\\text{ J},\\; \\eta = 16\\%$",
      "$W = 400\\text{ J},\\; \\eta = 66.7\\%$"
    ],
    correctOption: "a",
    difficulty: "Medium",
    image: "/images/diagrams/thermo/test2_q2_heat_engine_reservoir.svg",
    explanation: "For a heat engine executing a closed cyclic process ($\\Delta U_{\\text{cycle}} = 0$):\n1. By conservation of energy: $W = Q_H - Q_C = 1000\\text{ J} - 600\\text{ J} = 400\\text{ J}$.\n2. Thermal efficiency is defined as:\n$$\\eta = \\frac{\\text{Net Work Output}}{\\text{Heat Input}} = \\frac{W}{Q_H} = \\frac{400\\text{ J}}{1000\\text{ J}} = 0.40 = 40\\%$$\nThus, the work done is $400\\text{ J}$ and efficiency is $40\\%$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-TH-LT-003",
    question: "A domestic refrigerator operating on a reverse Carnot cycle extracts heat from its freezer compartment maintained at $T_C = -3^\\circ\\text{C}$ and expels heat into the surrounding room maintained at $T_H = 27^\\circ\\text{C}$, as shown in the diagram. What is the theoretical maximum coefficient of performance (COP, $\\beta$) of this refrigerator?",
    options: [
      "$10$",
      "$8.1$",
      "$9$",
      "$11$"
    ],
    correctOption: "c",
    difficulty: "Medium",
    image: "/images/diagrams/thermo/test2_q3_refrigerator_cop.svg",
    explanation: "Convert temperatures to the absolute thermodynamic Kelvin scale:\n$$T_C = -3^\\circ\\text{C} + 273.15 = 270.15 \\approx 270\\text{ K}$$\n$$T_H = 27^\\circ\\text{C} + 273.15 = 300.15 \\approx 300\\text{ K}$$\nFor an ideal reversible Carnot refrigerator, the coefficient of performance $\\beta$ is:\n$$\\beta = \\frac{Q_C}{W} = \\frac{T_C}{T_H - T_C} = \\frac{270}{300 - 270} = \\frac{270}{30} = 9$$\nThus, the coefficient of performance is $9$."
  }
];

const test2ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-TH-LT-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When an ideal gas undergoes an isothermal expansion, the entire quantity of heat absorbed by the gas from its surroundings is converted into external mechanical work ($\Delta Q = W$).\nReason (R): For an ideal gas, internal energy is exclusively a function of temperature ($U = U(T)$); during an isothermal process ($T = \\text{constant}$), the change in internal energy is strictly zero ($\\Delta U = 0$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "By Joule's law, internal energy of an ideal gas depends solely on its absolute temperature ($U = n C_v T$). In an isothermal process, $\\Delta T = 0 \\implies \\Delta U = 0$. Substituting into the First Law: $\\Delta Q = \\Delta U + W = 0 + W \\implies \\Delta Q = W$. All absorbed heat is converted to work done by the gas. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-TH-LT-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The change in internal energy ($\\Delta U$) of a thermodynamic system undergoing a process depends only on the initial and final states and is completely independent of the path followed.\nReason (R): The Second Law of Thermodynamics (Kelvin-Planck statement) asserts that it is impossible to construct a heat engine operating in a cycle that absorbs heat from a single reservoir and converts it completely into mechanical work without rejecting any heat.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion is true: internal energy $U$ is a thermodynamic state function ($dU$ is an exact differential), so $\\Delta U = U_f - U_i$ depends only on the end states. Reason is also true: the Kelvin-Planck statement of the Second Law dictates that 100% efficient heat engines are physically impossible. However, the Second Law does not explain why internal energy is a state function (which is governed by the First Law). Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-TH-LT-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When an ideal gas expands freely into an evacuated, thermally insulated container (Joule free expansion), its temperature remains unchanged ($\\Delta T = 0$).\nReason (R): During free expansion into a vacuum, the expanding gas performs a substantial amount of positive work against the opposing external pressure.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion is true: the container is insulated so $Q = 0$. The gas expands into a vacuum where opposing external pressure is zero ($P_{\\text{ext}} = 0$), so work done is zero ($W = \\int P_{\\text{ext}} dV = 0$). By the First Law: $\\Delta U = Q - W = 0$. For an ideal gas, $\\Delta U = n C_v \\Delta T = 0 \\implies \\Delta T = 0$. Reason is false because the gas does NO work ($W = 0$) during free expansion against vacuum. Thus, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-TH-LT-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A Carnot engine operating between a source at $100^\\circ\\text{C}$ and a sink at $0^\\circ\\text{C}$ has an efficiency of $100\\%$.\nReason (R): The thermal efficiency of a reversible Carnot engine operating between temperatures $T_H$ and $T_C$ is given by $\\eta = 1 - \\frac{T_C}{T_H}$, and can reach $100\\%$ only if the sink temperature is absolute zero ($T_C = 0\\text{ K}$).",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion is false: $T_H = 100^\\circ\\text{C} = 373.15\\text{ K}$ and $T_C = 0^\\circ\\text{C} = 273.15\\text{ K}$. The efficiency is $\\eta = 1 - \\frac{273.15}{373.15} \\approx 0.268 = 26.8\\%$, far below $100\\%$. Reason is true: $\\eta = 1 - T_C/T_H$, and achieving $100\\%$ requires $T_C = 0\\text{ K}$ (absolute zero), which is unattainable by the Third Law. Thus, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-TH-LT-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): A domestic refrigerator cannot function as a cooling device if it is left running inside a thermally sealed room with its door wide open.\nReason (R): According to the Clausius statement of the Second Law of Thermodynamics, heat cannot spontaneously transfer from a cooler body to a warmer body without external mechanical work input; the net heat exhausted by the motor and condenser into the room exceeds the heat absorbed from the room ($Q_H = Q_C + W > Q_C$), so the room gradually heats up.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "A refrigerator extracts heat $Q_C$ from its interior and exhausts $Q_H = Q_C + W$ into the surroundings via its condenser coils, where $W$ is electrical work done by the compressor motor. With the door open, the interior and the room are the same space, so net heat added to the room per cycle is $Q_{\\text{net}} = Q_H - Q_C = W > 0$. The room warms up rather than cooling down. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-TH-LT-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For any thermodynamic system executing a closed cyclic process, the net change in internal energy over one complete cycle is strictly zero ($\oint dU = 0$).\nReason (R): The molar heat capacity of an ideal gas can take any mathematical value between $-\\infty$ and $+\\infty$ depending entirely on the nature of the thermodynamic path followed.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion is true: because internal energy $U$ is a state function, returning to the initial state means $U_f = U_i \\implies \\Delta U_{\\text{cycle}} = 0$. Reason is also true: $C = \\frac{\\Delta Q}{n \\Delta T}$; in an isothermal process $\\Delta T = 0 \\implies C = \\infty$; in an adiabatic process $\\Delta Q = 0 \\implies C = 0$; during polytropic compression with heat loss, $C$ can be negative. However, the range of molar heat capacities does not explain why $\\Delta U_{\\text{cycle}} = 0$. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  }
];

// Helper to update test
async function updateTest(testId, slugAliases, title, diagramQs, arQs) {
  console.log(`\n======================================================`);
  console.log(`Processing Test: ${testId} (${title})`);
  console.log(`======================================================`);

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
            chapter: 'Thermodynamics',
            subTopic: title,
            subtopic: title,
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
      console.log(`Q${idx + 1} DIAGRAM question set: ${diagDef.image} (ans=${diagDef.correctOption})`);
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
            image: '',
            img: '',
            subject: 'Physics',
            chapter: 'Thermodynamics',
            subTopic: title,
            subtopic: title,
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
      console.log(`Q${idx + 1} Section B AR question set: ans=${arDef.correctOption} (diff=${arDef.difficulty})`);
    } else {
      const existingId = existingQuestionIds[idx];
      if (existingId instanceof ObjectId && existingMap.has(existingId.toString())) {
        const curDoc = existingMap.get(existingId.toString());
        await db.collection('questionBank').updateOne(
          { _id: curDoc._id },
          {
            $set: {
              subject: 'Physics',
              chapter: 'Thermodynamics',
              subTopic: title,
              subtopic: title,
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
          chapter: 'Thermodynamics',
          subTopic: title,
          subtopic: title,
          type: 'MCQ',
          questionType: 'MCQ (Multiple Choice Question)',
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

  // Update primary testPaper
  await db.collection('testPapers').updateOne(
    { testId },
    {
      $set: {
        testId,
        title,
        chapter: 'Thermodynamics',
        canonicalChapter: 'Thermodynamics',
        subject: 'Physics',
        exam: 'NEET',
        examType: 'NEET',
        classGrade: 'Class 11',
        standardQuestionsCount: 45,
        questionsCount: 45,
        duration: 60,
        totalMarks: 180,
        questions: finalQuestionIds,
        updatedAt: new Date()
      }
    },
    { upsert: true }
  );
  console.log(`Synced primary testPaper ${testId} with 45 questions.`);

  for (const alias of slugAliases) {
    const aliasDoc = await db.collection('testPapers').findOne({ testId: alias });
    if (aliasDoc) {
      await db.collection('testPapers').updateOne(
        { _id: aliasDoc._id },
        {
          $set: {
            title,
            chapter: 'Thermodynamics',
            canonicalChapter: 'Thermodynamics',
            subject: 'Physics',
            exam: 'NEET',
            examType: 'NEET',
            classGrade: 'Class 11',
            standardQuestionsCount: 45,
            questionsCount: 45,
            duration: 60,
            totalMarks: 180,
            questions: finalQuestionIds,
            updatedAt: new Date()
          }
        }
      );
      console.log(`Synced alias testPaper ${alias} with 45 questions.`);
    }
  }
}

// Execute Test 1 & 2
await updateTest(
  "neet-SUBTOPIC-Physics-Thermal-equilibrium",
  [
    "neet-SUBTOPIC-Physics-Thermal-Equilibrium",
    "neet-SUBTOPIC-Physics-thermal-equilibrium",
    "neet-SUBTOPIC-Thermal-equilibrium",
    "neet-SUBTOPIC-Physics-Thermal-equilibrium-All-Test",
    "neet-SUBTOPIC-Physics-Thermal-Equilibrium-All-Test",
    "neet-SUBTOPIC-Physics-thermal-equilibrium-All-Test"
  ],
  "Thermal equilibrium",
  test1DiagramQs,
  test1ARQs
);

await updateTest(
  "neet-SUBTOPIC-Physics-Laws-of-thermodynamics-(zeroth,-first,-second)",
  [
    "neet-SUBTOPIC-Physics-Laws-of-thermodynamics",
    "neet-SUBTOPIC-Physics-laws-of-thermodynamics",
    "neet-SUBTOPIC-Physics-laws-of-thermodynamics-(zeroth,-first,-second)",
    "neet-SUBTOPIC-Physics-Laws-of-thermodynamics-(zeroth-first-second)",
    "neet-SUBTOPIC-Laws-of-thermodynamics-zeroth-first-second",
    "neet-SUBTOPIC-Physics-Laws-of-thermodynamics-All-Test",
    "neet-SUBTOPIC-Physics-laws-of-thermodynamics-All-Test"
  ],
  "Laws of thermodynamics (zeroth, first, second)",
  test2DiagramQs,
  test2ARQs
);

console.log("\nTests 1 and 2 successfully updated!");
await client.close();
