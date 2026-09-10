// scripts/replace_bogus_integrals.js
require("dotenv").config({ path: ".env.local" });
const { MongoClient, ObjectId } = require("mongodb");

function getArray(mod) {
  if (Array.isArray(mod)) return mod;
  return Object.values(mod).find(v => Array.isArray(v)) || [];
}

const repairedGenuineIntegrals = getArray(require("./repaired_genuine_integrals"));
const subtopic1Questions = getArray(require("./data_jee_integrals_subtopic1"));
const subtopic2Questions = getArray(require("./data_jee_integrals_subtopic2"));
const subtopic3Questions = getArray(require("./data_jee_integrals_subtopic3"));
const subtopic4Questions = getArray(require("./data_jee_integrals_subtopic4"));
const subtopic5Questions = getArray(require("./data_jee_integrals_subtopic5"));
const subtopic6Questions = getArray(require("./data_jee_integrals_subtopic6"));
const subtopic7Questions = getArray(require("./data_jee_integrals_subtopic7"));

const subtopicDataMap = {
  "Definite integrals": subtopic1Questions,
  "Fundamental theorem of calculus": subtopic2Questions,
  "Integration by parts": subtopic3Questions,
  "Integration by substitution and algebraic fractions": subtopic4Questions,
  "Leibniz rule (differentiation under integral sign)": subtopic5Questions,
  "Properties of definite integrals": subtopic6Questions,
  "Trigonometric and irrational integrals": subtopic7Questions
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  console.log("Connected to MongoDB via MongoClient");

  const db = client.db();
  const questionBank = db.collection("questionBank");
  const testPapers = db.collection("testPapers");

  // 1. Update 40 Genuine Questions
  console.log(`\nUpdating ${repairedGenuineIntegrals.length} genuine questions...`);
  let genuineUpdated = 0;
  for (const q of repairedGenuineIntegrals) {
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
          chapter: "Integrals",
          topic: "Integrals",
          source: "Question Bank"
        }
      }
    );
    if (res.matchedCount > 0) genuineUpdated++;
  }
  console.log(`Updated ${genuineUpdated} / ${repairedGenuineIntegrals.length} genuine questions.`);

  // 2. Update 210 Bogus Generator Questions
  console.log("\nUpdating 210 bogus generator questions across 7 subtopics...");
  let totalGeneratorUpdated = 0;

  const genuineObjectIds = repairedGenuineIntegrals.map((g) => new ObjectId(g._id));

  for (const [subtopicName, questions] of Object.entries(subtopicDataMap)) {
    const bogusDocs = await questionBank
      .find({
        chapter: "Integrals",
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
            chapter: "Integrals",
            topic: "Integrals",
            source: "JEE Mains Generator"
          }
        }
      );
      totalGeneratorUpdated++;
    }
  }
  console.log(`Updated ${totalGeneratorUpdated} generator questions.`);

  // 3. Reconstruct Test Paper 1: `6a9e2844c527cd38431011ba` ("Integrals")
  console.log("\nReconstructing Chapter Test Paper 'Integrals' (ID: 6a9e2844c527cd38431011ba)...");
  const testPaper1 = await testPapers.findOne({ _id: new ObjectId("6a9e2844c527cd38431011ba") });
  if (testPaper1) {
    const mcqDocs = await questionBank
      .find({
        chapter: "Integrals",
        subject: "Mathematics",
        type: "single_choice"
      })
      .limit(20)
      .toArray();

    const numDocs = await questionBank
      .find({
        chapter: "Integrals",
        subject: "Mathematics",
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
      { _id: new ObjectId("6a9e2844c527cd38431011ba") },
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
    console.log(`Reconstructed Test Paper 'Integrals' with ${paperQuestions.length} questions.`);
  }

  // 4. Reconstruct Test Paper 2: `6a9e2889c527cd3843101339` ("integration by parts")
  console.log("\nReconstructing Subtopic Test Paper 'integration by parts' (ID: 6a9e2889c527cd3843101339)...");
  const testPaper2 = await testPapers.findOne({ _id: new ObjectId("6a9e2889c527cd3843101339") });
  if (testPaper2) {
    const mcqDocs = await questionBank
      .find({
        chapter: "Integrals",
        subject: "Mathematics",
        $or: [{ subtopic: "Integration by parts" }, { subTopic: "Integration by parts" }],
        type: "single_choice"
      })
      .limit(20)
      .toArray();

    const numDocs = await questionBank
      .find({
        chapter: "Integrals",
        subject: "Mathematics",
        $or: [{ subtopic: "Integration by parts" }, { subTopic: "Integration by parts" }],
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
      { _id: new ObjectId("6a9e2889c527cd3843101339") },
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
    console.log(`Reconstructed Test Paper 'integration by parts' with ${paperQuestions.length} questions.`);
  }

  // 5. Reconstruct Test Paper 3: `6a9e2889c527cd384310133a` ("definite integrals and their properties")
  console.log("\nReconstructing Subtopic Test Paper 'definite integrals and their properties' (ID: 6a9e2889c527cd384310133a)...");
  const testPaper3 = await testPapers.findOne({ _id: new ObjectId("6a9e2889c527cd384310133a") });
  if (testPaper3) {
    const mcqDocs = await questionBank
      .find({
        chapter: "Integrals",
        subject: "Mathematics",
        $or: [
          { subtopic: "Definite integrals" },
          { subTopic: "Definite integrals" },
          { subtopic: "Properties of definite integrals" },
          { subTopic: "Properties of definite integrals" }
        ],
        type: "single_choice"
      })
      .limit(20)
      .toArray();

    const numDocs = await questionBank
      .find({
        chapter: "Integrals",
        subject: "Mathematics",
        $or: [
          { subtopic: "Definite integrals" },
          { subTopic: "Definite integrals" },
          { subtopic: "Properties of definite integrals" },
          { subTopic: "Properties of definite integrals" }
        ],
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
      { _id: new ObjectId("6a9e2889c527cd384310133a") },
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
    console.log(`Reconstructed Test Paper 'definite integrals and their properties' with ${paperQuestions.length} questions.`);
  }

  console.log("\nIntegrals chapter update complete!");
  await client.close();
}

main().catch((err) => {
  console.error("Error updating Integrals chapter:", err);
  process.exit(1);
});
