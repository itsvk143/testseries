require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

const subtopicsConfig = [
  { name: "Total internal reflection and prisms", file: "./data_jee_optics_part1.js" },
  { name: "Optical instruments (microscope, telescope)", file: "./data_jee_optics_part2.js" },
  { name: "Lens formula", file: "./data_jee_optics_part3.js" },
  { name: "Mirror formula and combination of lenses", file: "./data_jee_optics_part4.js" },
  { name: "Reflection/refraction", file: "./data_jee_optics_part5.js" },
  { name: "Diffraction", file: "./data_jee_optics_part6.js" },
  { name: "Interference", file: "./data_jee_optics_part7.js" },
  { name: "Polarization of light (Brewster's law)", file: "./data_jee_optics_part8.js" },
  { name: "Young's double-slit experiment", file: "./data_jee_optics_part9.js" },
];

const flawedGenuineFixes = {
  "6a98e514910bb37b0e5580fb": {
    explanation: "$\\sin\\theta = \\frac{600 \\times 10^{-9}}{2 \\times 10^{-6}} = 0.3 \\implies \\theta \\approx 17.5^\\circ$"
  },
  "6a98e514910bb37b0e5580fd": {
    explanation: "$\\sin\\theta = \\frac{2 \\times 550 \\times 10^{-9}}{1.667 \\times 10^{-6}} = 0.66 \\implies \\theta \\approx 41.3^\\circ$"
  },
  "6a98e4fd910bb37b0e5580e7": {
    explanation: "$D = \\frac{\\beta d}{\\lambda} = \\frac{(1.2 \\times 10^{-3})(0.5 \\times 10^{-3})}{600 \\times 10^{-9}} = 1.0\\text{ m}$"
  },
  "6a98fa73b89acd4c6047d1c5": {
    explanation: "$\\frac{1}{F} = \\frac{1}{10} - \\frac{1}{25} = \\frac{3}{50} \\implies F = \\frac{50}{3} \\approx +16.7\\text{ cm}$"
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
    if (newQuestions.length !== 53) {
      throw new Error(`Expected 53 questions in ${cfg.file}, got ${newQuestions.length}`);
    }

    const newAR = newQuestions.filter(q => q.type === 'ASSERTION_REASON');
    const newMCQ = newQuestions.filter(q => q.type === 'MCQ');
    const newNUM = newQuestions.filter(q => q.type === 'NUMERICAL');

    if (newAR.length !== 26 || newMCQ.length !== 7 || newNUM.length !== 20) {
      throw new Error(`Breakdown mismatch in ${cfg.file}`);
    }

    // Fetch existing docs
    const docs = await collection.find({
      chapter: "Optics",
      subTopic: cfg.name
    }).sort({ type: 1, _id: 1 }).toArray();

    console.log(`  Found ${docs.length} existing documents.`);

    const existingAR = docs.filter(d => d.type === 'ASSERTION_REASON');
    const existingMCQ = docs.filter(d => d.type === 'MCQ');
    const existingNUM = docs.filter(d => d.type === 'NUMERICAL');

    console.log(`  Existing counts: AR=${existingAR.length}, MCQ=${existingMCQ.length}, NUM=${existingNUM.length}`);

    if (existingAR.length !== 26) {
      throw new Error(`Expected 26 AR docs, found ${existingAR.length}`);
    }
    if (existingNUM.length !== 20) {
      throw new Error(`Expected 20 NUM docs, found ${existingNUM.length}`);
    }
    if (existingMCQ.length < 7) {
      throw new Error(`Expected at least 7 MCQ docs, found ${existingMCQ.length}`);
    }

    // Separate genuine MCQ from generator MCQ
    // Generator MCQs are the ones where source !== 'Question Bank'
    // Or if all have same source, the last 7 are the generator MCQs
    const genuineMCQ = existingMCQ.filter(d => d.source === 'Question Bank');
    const generatorMCQ = existingMCQ.filter(d => d.source !== 'Question Bank');

    let mcqToReplace = [];
    let mcqToPreserve = [];

    if (generatorMCQ.length === 7) {
      mcqToReplace = generatorMCQ;
      mcqToPreserve = genuineMCQ;
    } else {
      console.log(`  Note: generatorMCQ.length=${generatorMCQ.length}, using last 7 MCQs as replacement targets.`);
      mcqToPreserve = existingMCQ.slice(0, existingMCQ.length - 7);
      mcqToReplace = existingMCQ.slice(existingMCQ.length - 7);
    }

    if (mcqToReplace.length !== 7) {
      throw new Error(`Expected exactly 7 MCQs to replace, got ${mcqToReplace.length}`);
    }

    const bulkOps = [];

    // 1. Replace 26 AR questions
    for (let i = 0; i < 26; i++) {
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
              chapter: "Optics",
              subject: "Physics",
              subTopic: cfg.name,
              topic: "Optics",
              updatedAt: new Date().toISOString()
            }
          }
        }
      });
      totalReplaced++;
    }

    // 2. Replace 7 MCQ questions
    for (let i = 0; i < 7; i++) {
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
              chapter: "Optics",
              subject: "Physics",
              subTopic: cfg.name,
              topic: "Optics",
              updatedAt: new Date().toISOString()
            }
          }
        }
      });
      totalReplaced++;
    }

    // 3. Replace 20 NUM questions
    for (let i = 0; i < 20; i++) {
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
              chapter: "Optics",
              subject: "Physics",
              subTopic: cfg.name,
              topic: "Optics",
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
        updateFields.explanation = flawedGenuineFixes[docIdStr].explanation;
        totalFlawedFixed++;
        console.log(`  Applying TeX fix to genuine doc: ${docIdStr}`);
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
  console.log(`Total bogus questions replaced: ${totalReplaced} (expected 477)`);
  console.log(`Total genuine questions standardized: ${totalStandardized} (expected 108)`);
  console.log(`Total flawed genuine questions repaired: ${totalFlawedFixed} (expected 4)`);
  console.log(`Grand total questions processed: ${totalReplaced + totalStandardized} (expected 585)`);

  await client.close();
  console.log("Database connection closed.");
}

execute().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
