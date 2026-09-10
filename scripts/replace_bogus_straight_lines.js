// scripts/replace_bogus_straight_lines.js
require("dotenv").config({ path: ".env.local" });
const { MongoClient, ObjectId } = require("mongodb");

function getArray(mod) {
  if (Array.isArray(mod)) return mod;
  return Object.values(mod).find(v => Array.isArray(v)) || [];
}

const repairedGenuineStraightLines = getArray(require("./repaired_genuine_straight_lines"));
const subtopic1Questions = getArray(require("./data_jee_straight_lines_subtopic1"));
const subtopic2Questions = getArray(require("./data_jee_straight_lines_subtopic2"));
const subtopic3Questions = getArray(require("./data_jee_straight_lines_subtopic3"));
const subtopic4Questions = getArray(require("./data_jee_straight_lines_subtopic4"));
const subtopic5Questions = getArray(require("./data_jee_straight_lines_subtopic5"));
const subtopic6Questions = getArray(require("./data_jee_straight_lines_subtopic6"));

const subtopicDataMap = {
  "Angle between lines": subtopic1Questions,
  "Concurrent lines": subtopic2Questions,
  "Distance between parallel lines": subtopic3Questions,
  "Family of lines and angular bisectors": subtopic4Questions,
  "Perpendicular distance": subtopic5Questions,
  "Slope and intercept forms": subtopic6Questions
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  console.log("Connected to MongoDB via MongoClient");

  const db = client.db();
  const questionBank = db.collection("questionBank");
  const testPapers = db.collection("testPapers");

  // 1. Update 42 Genuine Questions
  console.log(`\nUpdating ${repairedGenuineStraightLines.length} genuine questions...`);
  let genuineUpdated = 0;
  for (const q of repairedGenuineStraightLines) {
    const res = await questionBank.updateOne(
      { _id: new ObjectId(q._id) },
      {
        $set: {
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          marks: q.marks,
          negativeMarks: q.negativeMarks,
          type: q.type,
          subtopic: q.subtopic,
          subTopic: q.subtopic,
          difficulty: q.difficulty,
          class: "Class 12",
          subject: "Mathematics",
          chapter: "Straight Lines",
          topic: "Straight Lines",
          source: "Question Bank"
        }
      }
    );
    if (res.matchedCount > 0) genuineUpdated++;
  }
  console.log(`Updated ${genuineUpdated} / ${repairedGenuineStraightLines.length} genuine questions.`);

  // 2. Update 180 Bogus Generator Questions
  console.log("\nUpdating 180 bogus generator questions across 6 subtopics...");
  let totalGeneratorUpdated = 0;

  const genuineObjectIds = repairedGenuineStraightLines.map((g) => new ObjectId(g._id));

  for (const [subtopicName, questions] of Object.entries(subtopicDataMap)) {
    const bogusDocs = await questionBank
      .find({
        chapter: "Straight Lines",
        _id: { $nin: genuineObjectIds },
        $or: [{ subtopic: subtopicName }, { subTopic: subtopicName }]
      })
      .sort({ _id: 1 })
      .toArray();

    console.log(`Subtopic "${subtopicName}": found ${bogusDocs.length} documents in DB, replacement data has ${questions.length} questions.`);

    if (bogusDocs.length !== questions.length) {
      console.warn(`Warning: count mismatch for ${subtopicName}: found ${bogusDocs.length}, expected ${questions.length}`);
    }

    for (let i = 0; i < bogusDocs.length; i++) {
      const doc = bogusDocs[i];
      const qData = questions[i];
      if (!qData) break;

      await questionBank.updateOne(
        { _id: doc._id },
        {
          $set: {
            question: qData.question,
            options: qData.options || [],
            correctAnswer: qData.correctAnswer,
            explanation: qData.explanation,
            type: qData.type,
            marks: qData.marks,
            negativeMarks: qData.negativeMarks,
            subtopic: subtopicName,
            subTopic: subtopicName,
            difficulty: qData.difficulty,
            class: "Class 12",
            subject: "Mathematics",
            chapter: "Straight Lines",
            topic: "Straight Lines",
            source: "JEE Mains Generator"
          }
        }
      );
      totalGeneratorUpdated++;
    }
  }
  console.log(`Updated ${totalGeneratorUpdated} generator questions.`);

  // 3. Reconstruct Test Paper `6a9e2844c527cd38431011b3` ("Straight Lines")
  console.log("\nReconstructing Chapter Test Paper 'Straight Lines' (ID: 6a9e2844c527cd38431011b3)...");
  const testPaperId = new ObjectId("6a9e2844c527cd38431011b3");
  const testPaper = await testPapers.findOne({ _id: testPaperId });

  if (testPaper) {
    // Pick 20 single_choice questions from Straight Lines
    const mcqDocs = await questionBank
      .find({
        chapter: "Straight Lines",
        subject: "Mathematics",
        class: "Class 12",
        type: "single_choice"
      })
      .limit(20)
      .toArray();

    // Pick 5 Numerical questions from Straight Lines
    const numDocs = await questionBank
      .find({
        chapter: "Straight Lines",
        subject: "Mathematics",
        class: "Class 12",
        type: "numerical"
      })
      .limit(5)
      .toArray();

    const paperQuestions = [
      ...mcqDocs.map((doc, idx) => ({
        questionId: doc._id,
        section: "Section A",
        order: idx + 1
      })),
      ...numDocs.map((doc, idx) => ({
        questionId: doc._id,
        section: "Section B",
        order: 20 + idx + 1
      }))
    ];

    await testPapers.updateOne(
      { _id: testPaperId },
      {
        $set: {
          questions: paperQuestions,
          totalQuestions: paperQuestions.length,
          totalMarks: 100,
          duration: 60,
          status: "published"
        }
      }
    );
    console.log(`Reconstructed Test Paper with ${paperQuestions.length} questions (20 Section A + 5 Section B). Total marks: 100.`);
  } else {
    console.warn("Test paper 6a9e2844c527cd38431011b3 not found in database.");
  }

  console.log("\nStraight Lines chapter update complete!");
  await client.close();
}

main().catch((err) => {
  console.error("Error updating Straight Lines chapter:", err);
  process.exit(1);
});
