require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

const subtopicsConfig = [
  { name: "Lorentz force", file: "./data_jee_magnetism_part1.js", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { name: "Ampere's law", file: "./data_jee_magnetism_part2.js", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { name: "Force between two parallel currents", file: "./data_jee_magnetism_part3.js", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { name: "Biot-Savart law and applications", file: "./data_jee_magnetism_part4.js", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { name: "Magnetic properties (dia, para, ferromagnetism)", file: "./data_jee_magnetism_part5.js", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { name: "Moving coil galvanometer and conversion to ammeter/voltmeter", file: "./data_jee_magnetism_part6.js", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { name: "Magnetic field calculation", file: "./data_jee_magnetism_part7.js", expTotal: 196, expAR: 26, expMCQ: 7, expNUM: 163 },
];

const flawedGenuineFixes = {
  "6a98e490910bb37b0e558075": {
    options: [
      "$B = \\frac{\\mu_0 I}{\\pi a}$",
      "$B = \\frac{\\sqrt{2} \\mu_0 I}{\\pi a}$",
      "$B = \\frac{2 \\sqrt{2} \\mu_0 I}{\\pi a}$",
      "$B = \\frac{4 \\mu_0 I}{\\pi a}$"
    ],
    correctAnswer: 2,
    explanation: "The magnetic field at the center of a square loop of side length $a$ is obtained by summing the contributions from all 4 sides. For each side, distance from center is $d = a/2$ and angles are $\\theta_1 = \\theta_2 = 45^\\circ$. The field of one side is $B_1 = \\frac{\\mu_0 I}{4\\pi (a/2)}(\\sin 45^\\circ + \\sin 45^\\circ) = \\frac{\\sqrt{2}\\mu_0 I}{\\pi a}$. For 4 sides: $B_{total} = 4 B_1 = \\frac{2\\sqrt{2}\\mu_0 I}{\\pi a}$."
  },
  "6a98fa48b89acd4c6047d169": {
    options: [
      "$1 \\times 10^{-4}\\text{ N/m (attractive)}$",
      "$1 \\times 10^{-4}\\text{ N/m (repulsive)}$",
      "$2 \\times 10^{-4}\\text{ N/m (attractive)}$",
      "$2 \\times 10^{-4}\\text{ N/m (repulsive)}$"
    ],
    correctAnswer: 0,
    explanation: "The force per unit length between two parallel wires is $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = \\frac{(2 \\times 10^{-7})(5)(10)}{0.10} = 1.0 \\times 10^{-4}\\text{ N/m}$. Since the currents flow in the same direction, the force is attractive."
  },
  "6a98fa48b89acd4c6047d16e": {
    options: [
      "$B = \\frac{\\mu_0 I}{2R}$",
      "$B = \\frac{\\mu_0 I}{4R}$",
      "$B = \\frac{\\pi \\mu_0 I}{4R}$",
      "$B = \\frac{\\mu_0 I}{\\pi R}$"
    ],
    correctAnswer: 1,
    explanation: "The magnetic field at the center of a semi-circular loop of radius $R$ is half of the field produced by a complete circular loop: $B = \\frac{1}{2}\\left(\\frac{\\mu_0 I}{2R}\\right) = \\frac{\\mu_0 I}{4R}$."
  }
};

async function execute() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Missing MONGODB_URI");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('testseries');
  const collection = db.collection('questionBank');

  console.log("Connected to MongoDB Atlas.");

  let totalReplaced = 0;
  let totalStandardized = 0;
  let totalFlawedFixed = 0;

  for (const cfg of subtopicsConfig) {
    console.log(`\nProcessing subtopic: "${cfg.name}"...`);
    const newQuestions = require(cfg.file);
    if (newQuestions.length !== cfg.expTotal) {
      throw new Error(`Expected ${cfg.expTotal} questions in ${cfg.file}, got ${newQuestions.length}`);
    }

    const newAR = newQuestions.filter(q => q.type === 'ASSERTION_REASON');
    const newMCQ = newQuestions.filter(q => q.type === 'MCQ');
    const newNUM = newQuestions.filter(q => q.type === 'NUMERICAL');

    if (newAR.length !== cfg.expAR || newMCQ.length !== cfg.expMCQ || newNUM.length !== cfg.expNUM) {
      throw new Error(`Breakdown mismatch in ${cfg.file}`);
    }

    // Fetch existing docs
    const docs = await collection.find({
      chapter: "Magnetic Effects of Current and Magnetism",
      subTopic: cfg.name
    }).sort({ type: 1, _id: 1 }).toArray();

    console.log(`  Found ${docs.length} existing documents.`);

    const existingAR = docs.filter(d => d.type === 'ASSERTION_REASON');
    const existingMCQ = docs.filter(d => d.type === 'MCQ');
    const existingNUM = docs.filter(d => d.type === 'NUMERICAL');

    console.log(`  Existing counts: AR=${existingAR.length}, MCQ=${existingMCQ.length}, NUM=${existingNUM.length}`);

    if (existingAR.length !== cfg.expAR) {
      throw new Error(`Expected ${cfg.expAR} AR docs, found ${existingAR.length}`);
    }
    if (existingNUM.length !== cfg.expNUM) {
      throw new Error(`Expected ${cfg.expNUM} NUM docs, found ${existingNUM.length}`);
    }
    if (existingMCQ.length < cfg.expMCQ) {
      throw new Error(`Expected at least ${cfg.expMCQ} MCQ docs, found ${existingMCQ.length}`);
    }

    // Separate genuine MCQ from generator MCQ
    const genuineMCQ = existingMCQ.filter(d => d.source === 'Question Bank');
    const generatorMCQ = existingMCQ.filter(d => d.source !== 'Question Bank');

    let mcqToReplace = [];
    let mcqToPreserve = [];

    if (generatorMCQ.length === cfg.expMCQ) {
      mcqToReplace = generatorMCQ;
      mcqToPreserve = genuineMCQ;
    } else {
      console.log(`  Note: generatorMCQ.length=${generatorMCQ.length}, using last ${cfg.expMCQ} MCQs as replacement targets.`);
      mcqToPreserve = existingMCQ.slice(0, existingMCQ.length - cfg.expMCQ);
      mcqToReplace = existingMCQ.slice(existingMCQ.length - cfg.expMCQ);
    }

    if (mcqToReplace.length !== cfg.expMCQ) {
      throw new Error(`Expected exactly ${cfg.expMCQ} MCQs to replace, got ${mcqToReplace.length}`);
    }

    const bulkOps = [];

    // 1. Replace AR questions
    for (let i = 0; i < cfg.expAR; i++) {
      const targetDoc = existingAR[i];
      const src = newAR[i];

      bulkOps.push({
        updateOne: {
          filter: { _id: targetDoc._id },
          update: {
            $set: {
              question: src.question,
              options: src.options,
              correctAnswer: src.correctAnswer !== undefined ? src.correctAnswer : src.correctOption,
              explanation: src.explanation,
              type: "ASSERTION_REASON",
              questionType: "Assertion-Reason",
              difficulty: src.difficulty || "Medium",
              marks: 4,
              negativeMarks: 1,
              source: "JEE Main Question Bank",
              chapter: "Magnetic Effects of Current and Magnetism",
              subject: "Physics",
              subTopic: cfg.name,
              topic: "Magnetic Effects of Current and Magnetism",
              updatedAt: new Date().toISOString()
            }
          }
        }
      });
      totalReplaced++;
    }

    // 2. Replace MCQ questions
    for (let i = 0; i < cfg.expMCQ; i++) {
      const targetDoc = mcqToReplace[i];
      const src = newMCQ[i];

      bulkOps.push({
        updateOne: {
          filter: { _id: targetDoc._id },
          update: {
            $set: {
              question: src.question,
              options: src.options,
              correctAnswer: src.correctAnswer !== undefined ? src.correctAnswer : src.correctOption,
              explanation: src.explanation,
              type: "MCQ",
              questionType: "MCQ (Multiple Choice Question)",
              difficulty: src.difficulty || "Medium",
              marks: 4,
              negativeMarks: 1,
              source: "JEE Main Question Bank",
              chapter: "Magnetic Effects of Current and Magnetism",
              subject: "Physics",
              subTopic: cfg.name,
              topic: "Magnetic Effects of Current and Magnetism",
              updatedAt: new Date().toISOString()
            }
          }
        }
      });
      totalReplaced++;
    }

    // 3. Replace NUM questions
    for (let i = 0; i < cfg.expNUM; i++) {
      const targetDoc = existingNUM[i];
      const src = newNUM[i];

      const numVal = src.correctAnswer !== undefined ? String(src.correctAnswer) : String(src.numericalAnswer);

      bulkOps.push({
        updateOne: {
          filter: { _id: targetDoc._id },
          update: {
            $set: {
              question: src.question,
              options: [],
              correctAnswer: numVal,
              numericalAnswer: numVal,
              explanation: src.explanation,
              type: "NUMERICAL",
              questionType: "Numerical",
              difficulty: src.difficulty || "Medium",
              marks: 4,
              negativeMarks: 1,
              source: "JEE Main Question Bank",
              chapter: "Magnetic Effects of Current and Magnetism",
              subject: "Physics",
              subTopic: cfg.name,
              topic: "Magnetic Effects of Current and Magnetism",
              updatedAt: new Date().toISOString()
            }
          }
        }
      });
      totalReplaced++;
    }

    // 4. Standardize genuine MCQs and repair flawed ones if present
    for (const genDoc of mcqToPreserve) {
      const docIdStr = String(genDoc._id);
      const updateFields = {
        marks: 4,
        negativeMarks: 1,
        updatedAt: new Date().toISOString()
      };

      if (flawedGenuineFixes[docIdStr]) {
        const fix = flawedGenuineFixes[docIdStr];
        if (fix.options) updateFields.options = fix.options;
        if (fix.correctAnswer !== undefined) updateFields.correctAnswer = fix.correctAnswer;
        if (fix.explanation) updateFields.explanation = fix.explanation;
        totalFlawedFixed++;
        console.log(`  Applying surgical fix to genuine doc: ${docIdStr}`);
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: genDoc._id },
          update: {
            $set: updateFields
          }
        }
      });
      totalStandardized++;
    }

    console.log(`  Executing bulkWrite with ${bulkOps.length} operations...`);
    const res = await collection.bulkWrite(bulkOps);
    console.log(`  Result: matched=${res.matchedCount}, modified=${res.modifiedCount}`);
  }

  console.log("\n=========================================");
  console.log(`Summary:`);
  console.log(`Total bogus questions replaced: ${totalReplaced} (expected 514)`);
  console.log(`Total genuine questions standardized: ${totalStandardized} (expected 70)`);
  console.log(`Total flawed genuine questions repaired: ${totalFlawedFixed} (expected 3)`);
  console.log(`Grand total questions processed: ${totalReplaced + totalStandardized} (expected 584)`);

  await client.close();
  console.log("Database connection closed.");
}

execute().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
