require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

const part1 = require('./data_jee_pam_part1.js'); // 48
const part2 = require('./data_jee_pam_part2.js'); // 48
const part3 = require('./data_jee_pam_part3.js'); // 48
const part4 = require('./data_jee_pam_part4.js'); // 53
const part5 = require('./data_jee_pam_part5.js'); // 53

const subtopicData = {
  "Units and dimensions": part1,
  "Significant figures": part2,
  "Error analysis": part3,
  "Least count and precision": part4,
  "Dimensional analysis and applications": part5
};

function normalizeType(t) {
  if (!t) return "MCQ";
  const lower = t.toLowerCase();
  if (lower.includes("numerical")) return "NUMERICAL";
  if (lower.includes("assertion")) return "ASSERTION_REASON";
  return "MCQ";
}

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const qb = db.collection('questionBank');

  // 1. Re-apply all replaced questions properly for each subtopic
  for (const [subtopicName, questions] of Object.entries(subtopicData)) {
    console.log(`Processing subtopic: ${subtopicName}...`);
    // Replaced questions are those where source != "Question Bank"
    const bogusDocs = await qb.find({
      chapter: "Physics and Measurement",
      subTopic: subtopicName,
      source: { $ne: "Question Bank" }
    }).sort({ type: 1, _id: 1 }).toArray();

    console.log(`Found ${bogusDocs.length} docs to standardize.`);

    for (let i = 0; i < Math.min(bogusDocs.length, questions.length); i++) {
      const doc = bogusDocs[i];
      const q = questions[i];
      const type = normalizeType(q.type);

      const updateDoc = {
        question: q.question,
        explanation: q.explanation,
        difficulty: q.difficulty ? q.difficulty.toLowerCase() : "medium",
        examType: "JEE Mains",
        subTopic: subtopicName,
        chapter: "Physics and Measurement",
        subject: "Physics",
        type: type,
        updatedAt: new Date()
      };

      if (type === "NUMERICAL") {
        updateDoc.marks = 4;
        updateDoc.negativeMarks = 0;
        updateDoc.options = [];
        updateDoc.correctAnswer = String(q.correctAnswer);
        await qb.updateOne(
          { _id: doc._id },
          {
            $set: updateDoc,
            $unset: { correctOptionIndex: "" }
          }
        );
      } else {
        updateDoc.marks = 4;
        updateDoc.negativeMarks = 1;
        updateDoc.options = q.options;
        updateDoc.correctOptionIndex = Number(q.correctOptionIndex);
        await qb.updateOne(
          { _id: doc._id },
          {
            $set: updateDoc,
            $unset: { correctAnswer: "" }
          }
        );
      }
    }
  }

  // 2. Fix the 96 genuine MCQs
  console.log("Standardizing genuine MCQs...");
  const genuineDocs = await qb.find({
    chapter: "Physics and Measurement",
    source: "Question Bank"
  }).toArray();

  for (const doc of genuineDocs) {
    const updateDoc = {
      type: "MCQ",
      marks: 4,
      negativeMarks: 1
    };

    // If correctOptionIndex is missing or null, pull from correctAnswer
    if (doc.correctOptionIndex === undefined || doc.correctOptionIndex === null) {
      if (doc.correctAnswer !== undefined && doc.correctAnswer !== null) {
        updateDoc.correctOptionIndex = Number(doc.correctAnswer);
      }
    }

    await qb.updateOne(
      { _id: doc._id },
      { $set: updateDoc }
    );
  }

  // 3. Fix the 2 specific KaTeX errors in preserved MCQs:
  // (a) 6a98e2338f372d5292e13224
  const docKa1 = await qb.findOne({ _id: new ObjectId("6a98e2338f372d5292e13224") });
  if (docKa1) {
    const cleanExp = "When a measurement is displayed to a certain precision (e.g., to the nearest 0.1 $^\\circ\\text{C}$), the maximum possible error (absolute uncertainty) is half of that precision. This is because the true value could be anywhere within half a unit of the last displayed digit.\n\nIn this case, the precision is $0.1^\\circ\\text{C}$.\nTherefore, the maximum possible absolute error is $\\frac{0.1^\\circ\\text{C}}{2} = 0.05^\\circ\\text{C}$. This means a reading of, for example, $25.3^\\circ\\text{C}$ implies the true temperature is between $25.25^\\circ\\text{C}$ and $25.35^\\circ\\text{C}$.";
    await qb.updateOne({ _id: docKa1._id }, { $set: { explanation: cleanExp } });
    console.log("Cleaned explanation for 6a98e2338f372d5292e13224");
  }

  // (b) 6a98f7883b9f7331a3cca4fa
  const docKa2 = await qb.findOne({ _id: new ObjectId("6a98f7883b9f7331a3cca4fa") });
  if (docKa2) {
    const cleanExp = "The dimensions of $L$ are $[L]$ and the dimensions of $g$ are $[L][T]^{-2}$. Therefore, the dimensions of $\\sqrt{\\frac{L}{g}}$ are $\\sqrt{\\frac{[L]}{[L][T]^{-2}}} = \\sqrt{[T]^2} = [T]$, which are the dimensions of time (period).";
    await qb.updateOne({ _id: docKa2._id }, { $set: { explanation: cleanExp } });
    console.log("Cleaned explanation for 6a98f7883b9f7331a3cca4fa");
  }

  await client.close();
  console.log("Clean and standardize complete!");
}

run().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
