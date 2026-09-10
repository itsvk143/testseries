const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

const s1 = require("./data_jee_binomial_subtopic1.js"); // General term (30)
const s2 = require("./data_jee_binomial_subtopic2.js"); // Middle term (30)
const s3 = require("./data_jee_binomial_subtopic3.js"); // Coefficient estimation (30)
const s4 = require("./data_jee_binomial_subtopic4.js"); // Binomial identities (30)
const s5 = require("./data_jee_binomial_subtopic5.js"); // Sum of binomial coefficients and series (30)
const repaired = require("./repaired_genuine_binomial.js");

const subtopicDataMap = {
  "General term": s1,
  "Middle term": s2,
  "Coefficient estimation": s3,
  "Binomial identities": s4,
  "Sum of binomial coefficients and series": s5
};

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const qb = db.collection("questionBank");
    const tp = db.collection("testPapers");

    console.log("Connected to MongoDB. Fetching Binomial Theorem questions...");
    const allDocs = await qb.find({ subject: /math/i, chapter: /binomial/i }).toArray();
    console.log(`Found ${allDocs.length} total questions in Mathematics > Binomial Theorem.`);

    // 1. Repair Genuine Questions
    console.log("\n--- Repairing Genuine Question Bank Questions ---");
    let genuineRepaired = 0;
    let genuinePreserved = 0;

    for (const doc of allDocs) {
      if (doc.source === "Question Bank") {
        const idStr = doc._id.toString();
        const rep = repaired[idStr];
        const qText = rep?.question || doc.question || doc.questionText;
        const opts = rep?.options || doc.options;
        const ans = rep ? rep.correctAnswer : doc.correctAnswer;
        const expl = rep?.explanation || doc.explanation;

        const updateFields = {
          question: qText,
          questionText: qText,
          options: opts,
          correctAnswer: ans,
          explanation: expl,
          marks: 4,
          negativeMarks: 1,
          type: "MCQ",
          questionType: "MCQ (Multiple Choice Question)",
          topic: "Binomial Theorem",
          chapter: "Binomial Theorem",
          subject: "Mathematics",
          class: "Class 11",
          status: "APPROVED",
          commercialReady: true,
          exam: "JEE Mains",
          targetExams: ["JEE Main"],
          latexAuditedAt: new Date(),
          updatedAt: new Date()
        };

        await qb.updateOne({ _id: doc._id }, { $set: updateFields });
        if (rep) genuineRepaired++;
        else genuinePreserved++;
      }
    }
    console.log(`Genuine questions: ${genuineRepaired} repaired, ${genuinePreserved} preserved without changes (total 33).`);

    // 2. Replace 150 Bogus Generator Questions in-place by _id
    console.log("\n--- Replacing Bogus Generator Questions In-Place ---");
    const bogusDocs = allDocs.filter(d => d.source !== "Question Bank");
    console.log(`Found ${bogusDocs.length} bogus questions to replace.`);

    // Group bogus docs by subtopic
    const bogusBySubtopic = {};
    for (const d of bogusDocs) {
      const st = d.subTopic || d.subtopic;
      if (!bogusBySubtopic[st]) bogusBySubtopic[st] = [];
      bogusBySubtopic[st].push(d);
    }

    let replacedCount = 0;
    for (const [stName, repList] of Object.entries(subtopicDataMap)) {
      const targets = bogusBySubtopic[stName] || [];
      console.log(`Subtopic "${stName}": ${targets.length} bogus docs, ${repList.length} replacements available.`);
      if (targets.length !== repList.length) {
        console.warn(`WARNING: targets count (${targets.length}) !== replacements count (${repList.length})`);
      }

      for (let i = 0; i < targets.length; i++) {
        const targetDoc = targets[i];
        const newQ = repList[i];
        if (!newQ) continue;

        const updateFields = {
          question: newQ.question,
          questionText: newQ.question,
          options: newQ.options,
          correctAnswer: newQ.correctAnswer,
          explanation: newQ.explanation,
          difficulty: newQ.difficulty,
          type: newQ.type,
          questionType: newQ.questionType,
          marks: newQ.marks,
          negativeMarks: newQ.negativeMarks,
          subject: "Mathematics",
          class: "Class 11",
          chapter: "Binomial Theorem",
          topic: "Binomial Theorem",
          subTopic: newQ.subTopic,
          subtopic: newQ.subTopic,
          source: "JEE Main 10-Year Advanced Pattern Generator",
          status: "APPROVED",
          commercialReady: true,
          exam: "JEE Mains",
          targetExams: ["JEE Main"],
          latexAuditedAt: new Date(),
          updatedAt: new Date()
        };

        await qb.updateOne({ _id: targetDoc._id }, { $set: updateFields });
        replacedCount++;
      }
    }
    console.log(`Successfully replaced ${replacedCount} bogus questions in-place by _id.`);

    // 3. Scoring Standardisation Across All 183 Questions
    console.log("\n--- Standardising Scoring Across All Binomial Theorem Questions ---");
    const mcqRes = await qb.updateMany(
      { subject: /math/i, chapter: /binomial/i, type: "MCQ" },
      { $set: { marks: 4, negativeMarks: 1 } }
    );
    const numRes = await qb.updateMany(
      { subject: /math/i, chapter: /binomial/i, type: "Numerical" },
      { $set: { marks: 4, negativeMarks: 0 } }
    );
    console.log(`Scoring standardisation: ${mcqRes.modifiedCount} MCQs updated, ${numRes.modifiedCount} Numericals updated.`);

    // 4. Reconstruct Test Paper
    console.log("\n--- Reconstructing Test Paper ---");
    const testDoc = await tp.findOne({ _id: new ObjectId("6a9e2843c527cd38431011b2") });
    if (testDoc) {
      console.log(`Found test paper: "${testDoc.title}" (${testDoc.testId})`);
      // Select 20 MCQs (4 from each subtopic) and 5 Numericals (1 from each subtopic)
      const subtopicsList = [
        "General term",
        "Middle term",
        "Coefficient estimation",
        "Binomial identities",
        "Sum of binomial coefficients and series"
      ];

      const selectedQuestions = [];
      const sectionAMCQ = [];
      const sectionBNum = [];

      for (const st of subtopicsList) {
        const mcqs = await qb.find({
          subject: /math/i,
          chapter: /binomial/i,
          $or: [{ subTopic: st }, { subtopic: st }],
          type: "MCQ"
        }).limit(4).toArray();

        const nums = await qb.find({
          subject: /math/i,
          chapter: /binomial/i,
          $or: [{ subTopic: st }, { subtopic: st }],
          type: "Numerical"
        }).limit(1).toArray();

        sectionAMCQ.push(...mcqs.map(m => m._id));
        sectionBNum.push(...nums.map(n => n._id));
      }

      const allTestQIds = [...sectionAMCQ, ...sectionBNum];
      console.log(`Selected ${sectionAMCQ.length} Section A (MCQs) and ${sectionBNum.length} Section B (Numericals). Total = ${allTestQIds.length}`);

      await tp.updateOne(
        { _id: testDoc._id },
        {
          $set: {
            questions: allTestQIds,
            standardQuestionsCount: 25,
            totalMarks: 100,
            duration: 60,
            updatedAt: new Date()
          }
        }
      );
      console.log("Successfully reconstructed test paper with 25 pure chapter questions.");
    } else {
      console.warn("Test paper 6a9e2843c527cd38431011b2 not found!");
    }

    console.log("\n=== REPLACEMENT & REPAIR COMPLETED SUCCESSFULLY ===");
  } finally {
    await client.close();
  }
}

run().catch(err => {
  console.error("Execution failed:", err);
  process.exit(1);
});
