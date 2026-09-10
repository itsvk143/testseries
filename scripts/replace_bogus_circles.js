require("dotenv").config({ path: ".env.local" });
const { MongoClient, ObjectId } = require("mongodb");
const { repairedGenuineCircles } = require("./repaired_genuine_circles");
const { subtopic1Questions } = require("./data_jee_circles_subtopic1");
const { subtopic2Questions } = require("./data_jee_circles_subtopic2");
const { subtopic3Questions } = require("./data_jee_circles_subtopic3");
const { subtopic4Questions } = require("./data_jee_circles_subtopic4");
const { subtopic5Questions } = require("./data_jee_circles_subtopic5");
const { subtopic6Questions } = require("./data_jee_circles_subtopic6");

const subtopicDataMap = {
  "Chord of contact": subtopic1Questions,
  "Circle through three points": subtopic2Questions,
  "Director circle and chord with given midpoint": subtopic3Questions,
  "General equation of circle": subtopic4Questions,
  "Parametric equation of circle": subtopic5Questions,
  "Standard equation": subtopic6Questions
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  console.log("Connected to MongoDB via MongoClient");

  const db = client.db();
  const questionBank = db.collection("questionBank");
  const testPapers = db.collection("testPapers");

  // 1. Update 42 Genuine Questions
  console.log(`\nUpdating ${repairedGenuineCircles.length} genuine questions...`);
  let genuineUpdated = 0;
  for (const q of repairedGenuineCircles) {
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
          chapter: "Circles",
          topic: "Circles",
          source: "Question Bank"
        }
      }
    );
    if (res.matchedCount > 0) genuineUpdated++;
  }
  console.log(`Updated ${genuineUpdated} / ${repairedGenuineCircles.length} genuine questions.`);

  // 2. Update 180 Bogus Generator Questions
  console.log("\nUpdating 180 bogus generator questions across 6 subtopics...");
  let totalGeneratorUpdated = 0;

  const genuineObjectIds = repairedGenuineCircles.map((g) => new ObjectId(g._id));

  for (const [subtopicName, questions] of Object.entries(subtopicDataMap)) {
    const bogusDocs = await questionBank
      .find({
        chapter: "Circles",
        _id: { $nin: genuineObjectIds },
        $or: [{ subtopic: subtopicName }, { subTopic: subtopicName }]
      })
      .sort({ _id: 1 })
      .toArray();

    console.log(`Subtopic "${subtopicName}": found ${bogusDocs.length} bogus documents, replacement data has ${questions.length} questions.`);

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
            subtopic: qData.subtopic,
            subTopic: qData.subtopic,
            difficulty: qData.difficulty,
            class: "Class 12",
            subject: "Mathematics",
            chapter: "Circles",
            topic: "Circles",
            source: "JEE Mains Generator"
          }
        }
      );
      totalGeneratorUpdated++;
    }
  }
  console.log(`Updated ${totalGeneratorUpdated} generator questions.`);

  // 3. Reconstruct Test Paper `6a9e2844c527cd38431011b4` ("Circles")
  console.log("\nReconstructing Chapter Test Paper 'Circles' (ID: 6a9e2844c527cd38431011b4)...");
  const testPaperId = new ObjectId("6a9e2844c527cd38431011b4");
  const testPaper = await testPapers.findOne({ _id: testPaperId });

  if (testPaper) {
    // Pick 20 single_choice questions from the 6 subtopics
    const mcqDocs = await questionBank
      .find({
        chapter: "Circles",
        subject: "Mathematics",
        class: "Class 12",
        type: "single_choice"
      })
      .limit(20)
      .toArray();

    // Pick 5 Numerical questions
    const numDocs = await questionBank
      .find({
        chapter: "Circles",
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
    console.warn("Test paper 6a9e2844c527cd38431011b4 not found in database.");
  }

  console.log("\nCircles chapter update complete!");
  await client.close();
}

main().catch((err) => {
  console.error("Error updating Circles chapter:", err);
  process.exit(1);
});
