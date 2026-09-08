const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: '.env.local' });

const subTopics = [
  { name: "AC circuits", part: "./data_jee_emi_ac_part1.js", expectedReplacements: 196, expectedPreserved: 12 },
  { name: "Faraday's law", part: "./data_jee_emi_ac_part2.js", expectedReplacements: 53, expectedPreserved: 12 },
  { name: "LC oscillations", part: "./data_jee_emi_ac_part3.js", expectedReplacements: 53, expectedPreserved: 11 },
  { name: "Lenz's law", part: "./data_jee_emi_ac_part4.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "RMS values", part: "./data_jee_emi_ac_part5.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "Self and mutual inductance", part: "./data_jee_emi_ac_part6.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "Transformers and AC generator", part: "./data_jee_emi_ac_part7.js", expectedReplacements: 53, expectedPreserved: 10 }
];

const flawedQBFixes = {
  '6a98e49d910bb37b0e55807d': {
    question: "A magnetic flux of $\\Phi = (2t^3 - 3t^2 + 5)\\text{ Wb}$ passes through a coil of 100 turns. Calculate the induced EMF at $t = 2\\text{ s}$.",
    options: ['-600 V', '-1200 V', '1200 V', '600 V'],
    correctAnswer: 1,
    explanation: "According to Faraday's law of induction, $\\mathcal{E} = -N \\frac{d\\Phi}{dt}$. Differentiating $\\Phi(t)$ gives $\\frac{d\\Phi}{dt} = 6t^2 - 6t$. At $t = 2\\text{ s}$, $\\frac{d\\Phi}{dt} = 6(2)^2 - 6(2) = 24 - 12 = 12\\text{ Wb/s}$. Therefore, $\\mathcal{E} = -100 \\times 12 = -1200\\text{ V}$."
  },
  '6a98fa5bb89acd4c6047d191': {
    question: "An AC generator produces a voltage given by $V(t) = 170\\sin(120\\pi t)\\text{ V}$. What is the RMS voltage?",
    options: ['120 V', '170 V', '240 V', '$120\\pi\\text{ V}$'],
    correctAnswer: 0,
    explanation: "The peak voltage amplitude is $V_0 = 170\\text{ V}$. The RMS voltage for a sinusoidal AC wave is $V_{rms} = \\frac{V_0}{\\sqrt{2}} = \\frac{170}{\\sqrt{2}} \\approx 120.2\\text{ V} \\approx 120\\text{ V}$."
  },
  '6a98fa66b89acd4c6047d1b4': {
    question: "An LC circuit has an inductance of $L = 100\\text{ mH}$ and a capacitance of $C = 10\\ \\mu\\text{F}$. What is the frequency of oscillation?",
    options: [
      '$\\frac{1000}{2\\pi}\\text{ Hz}$',
      '$\\frac{500}{2\\pi}\\text{ Hz}$',
      '$\\frac{100}{2\\pi}\\text{ Hz}$',
      '$\\frac{50}{2\\pi}\\text{ Hz}$'
    ],
    correctAnswer: 0,
    explanation: "The resonant frequency of an LC circuit is $f = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi\\sqrt{100 \\times 10^{-3} \\times 10 \\times 10^{-6}}} = \\frac{1}{2\\pi\\sqrt{10^{-6}}} = \\frac{1000}{2\\pi}\\text{ Hz}$."
  },
  '6a98fa66b89acd4c6047d1b6': {
    question: "If both the inductance and capacitance in an LC circuit are doubled, by what factor does the frequency of oscillation change?",
    options: [
      'Increases by a factor of 2',
      'Decreases by a factor of 2',
      'Increases by a factor of 4',
      'Decreases by a factor of 4'
    ],
    correctAnswer: 1,
    explanation: "The frequency of an LC circuit is $f = \\frac{1}{2\\pi\\sqrt{LC}}$. If $L' = 2L$ and $C' = 2C$, then $f' = \\frac{1}{2\\pi\\sqrt{(2L)(2C)}} = \\frac{1}{2}\\left(\\frac{1}{2\\pi\\sqrt{LC}}\\right) = \\frac{f}{2}$. Thus the frequency decreases by a factor of 2."
  },
  '6a98fa66b89acd4c6047d1b0': {
    question: "If the maximum charge on the capacitor in an LC circuit is $Q_0$, what is the maximum current in the inductor?",
    options: [
      '$\\frac{Q_0}{L}$',
      '$\\frac{Q_0}{C}$',
      '$\\frac{Q_0}{\\sqrt{LC}}$',
      '$\\frac{Q_0}{LC}$'
    ],
    correctAnswer: 2,
    explanation: "By conservation of energy, the maximum magnetic energy stored in the inductor equals the maximum electrostatic energy stored in the capacitor: $\\frac{1}{2} L I_{max}^2 = \\frac{Q_0^2}{2C} \\implies I_{max}^2 = \\frac{Q_0^2}{LC} \\implies I_{max} = \\frac{Q_0}{\\sqrt{LC}}$."
  },
  '6a98fa5bb89acd4c6047d196': {
    question: "The peak voltage of an AC generator is 300 V. What is the RMS voltage?",
    options: ['212 V', '300 V', '424 V', '$300\\pi\\text{ V}$'],
    correctAnswer: 0,
    explanation: "For a sinusoidal alternating voltage, $V_{rms} = \\frac{V_{peak}}{\\sqrt{2}} = \\frac{300}{\\sqrt{2}} \\approx 212.13\\text{ V} \\approx 212\\text{ V}$."
  },
  '6a98fa66b89acd4c6047d1af': {
    question: "What is the frequency of oscillation for an LC circuit with $L = 40\\text{ mH}$ and $C = 100\\text{ nF}$?",
    options: [
      'Approximately 2.5 kHz',
      'Approximately 5.0 kHz',
      'Approximately 7.9 kHz',
      'Approximately 15.9 kHz'
    ],
    correctAnswer: 0,
    explanation: "The frequency of oscillation is $f = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi\\sqrt{(40 \\times 10^{-3}) \\times (100 \\times 10^{-9})}} = \\frac{1}{2\\pi\\sqrt{4 \\times 10^{-9}}} \\approx \\frac{1}{2\\pi \\times 6.3245 \\times 10^{-5}} \\approx 2516\\text{ Hz} \\approx 2.5\\text{ kHz}$."
  },
  '6a98fa66b89acd4c6047d1b1': {
    question: "What is the period of oscillation of an LC circuit with $L = 50\\text{ mH}$ and $C = 80\\ \\mu\\text{F}$?",
    options: [
      '$\\frac{\\pi}{500}\\text{ s}$',
      '$\\frac{\\pi}{250}\\text{ s}$',
      '$\\frac{\\pi}{100}\\text{ s}$',
      '$\\frac{\\pi}{50}\\text{ s}$'
    ],
    correctAnswer: 1,
    explanation: "The period of oscillation is $T = 2\\pi\\sqrt{LC} = 2\\pi\\sqrt{(50 \\times 10^{-3}) \\times (80 \\times 10^{-6})} = 2\\pi\\sqrt{4 \\times 10^{-6}} = 2\\pi(2 \\times 10^{-3}) = 4\\pi \\times 10^{-3}\\text{ s} = \\frac{\\pi}{250}\\text{ s}$."
  }
};

async function replaceAllEmiAc() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found in environment!");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB Atlas.");

  const db = client.db("testseries");
  const col = db.collection("questionBank");

  let totalReplacedCount = 0;
  let totalPreservedStandardized = 0;

  for (const st of subTopics) {
    const data = require(path.join(__dirname, st.part));
    const docs = await col.find({
      chapter: "Electromagnetic Induction and Alternating Currents",
      subject: "Physics",
      subTopic: st.name
    }).sort({ type: 1, _id: 1 }).toArray();

    const arDocs = docs.filter(d => d.type === "ASSERTION_REASON");
    const mcqDocs = docs.filter(d => d.type === "MCQ");
    const numDocs = docs.filter(d => d.type === "NUMERICAL");

    const preservedMCQ = mcqDocs.filter(d => d.source === "Question Bank");
    const bogusMCQ = mcqDocs.filter(d => d.source !== "Question Bank");

    const toReplace = [...arDocs, ...bogusMCQ, ...numDocs];

    if (toReplace.length !== data.length) {
      throw new Error(`Length mismatch for ${st.name}: toReplace=${toReplace.length}, data=${data.length}`);
    }

    const bulkOps = [];

    // 1. In-place replacement of bogus questions
    for (let i = 0; i < toReplace.length; i++) {
      const oldDoc = toReplace[i];
      const newQ = data[i];

      const setFields = {
        question: newQ.question,
        options: newQ.options,
        correctAnswer: newQ.correctAnswer,
        explanation: newQ.explanation,
        type: newQ.type,
        questionType: newQ.questionType,
        subTopic: newQ.subTopic,
        chapter: newQ.chapter,
        subject: newQ.subject,
        marks: 4,
        negativeMarks: 1,
        source: "JEE Main Question Bank",
        difficulty: oldDoc.difficulty || "Medium",
        updatedAt: new Date()
      };

      const unsetFields = {};
      if (newQ.type === 'NUMERICAL') {
        setFields.numericalAnswer = newQ.numericalAnswer;
      } else {
        unsetFields.numericalAnswer = "";
      }

      const updateOp = { $set: setFields };
      if (Object.keys(unsetFields).length > 0) {
        updateOp.$unset = unsetFields;
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: oldDoc._id },
          update: updateOp
        }
      });
    }

    // 2. Standardize genuine QB MCQs
    for (const doc of preservedMCQ) {
      const idStr = doc._id.toString();
      const setFields = {
        marks: 4,
        negativeMarks: 1,
        updatedAt: new Date()
      };

      if (flawedQBFixes[idStr]) {
        const fix = flawedQBFixes[idStr];
        setFields.question = fix.question;
        setFields.options = fix.options;
        setFields.correctAnswer = fix.correctAnswer;
        setFields.explanation = fix.explanation;
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: setFields
          }
        }
      });
    }

    console.log(`Executing bulkWrite for "${st.name}" (${bulkOps.length} ops: ${toReplace.length} replacements, ${preservedMCQ.length} standardizations)...`);
    const res = await col.bulkWrite(bulkOps);
    console.log(`  -> Matched: ${res.matchedCount}, Modified: ${res.modifiedCount}`);

    totalReplacedCount += toReplace.length;
    totalPreservedStandardized += preservedMCQ.length;
  }

  console.log(`\n========================================`);
  console.log(`Replacement & Standardization Complete!`);
  console.log(`Total questions replaced in-place: ${totalReplacedCount}`);
  console.log(`Total genuine questions standardized: ${totalPreservedStandardized}`);
  console.log(`Total EMI & AC questions in DB: ${totalReplacedCount + totalPreservedStandardized}`);
  console.log(`========================================\n`);

  await client.close();
}

replaceAllEmiAc().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
