const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const p1 = require('./data_atomic_structure_part1.js');
const p2 = require('./data_atomic_structure_part2.js');
const p3 = require('./data_atomic_structure_part3.js');

const subTopicDataMap = {
  "Bohr's model": p1.getBohrModelQuestions(),
  "Dual nature of matter and de Broglie equation": p1.getDeBroglieQuestions(),
  "Heisenberg uncertainty principle": p1.getHeisenbergQuestions(),
  "Quantum mechanical model": p2.getQuantumMechanicalQuestions(),
  "Quantum numbers": p2.getQuantumNumbersQuestions(),
  "Orbital shapes": p2.getOrbitalShapesQuestions(),
  "Aufbau principle, Pauli exclusion principle, Hund's rule": p3.getAufbauPauliHundQuestions(),
  "Electronic configuration": p3.getElectronicConfigurationQuestions()
};

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI not found in environment");
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const collection = db.collection('questionBank');

  console.log("Connected to MongoDB. Fetching all questions for Atomic Structure...");
  const allDocs = await collection.find({ subject: "Chemistry", chapter: "Atomic Structure" }).toArray();
  console.log(`Total questions in Atomic Structure: ${allDocs.length}`);

  const genuineDocs = allDocs.filter(q => q.source === "Question Bank" && !q.question.includes("Given that") && !q.question.includes("Consider two identical samples"));
  const bogusDocs = allDocs.filter(q => !genuineDocs.includes(q));

  console.log(`Found ${genuineDocs.length} genuine questions to preserve intact.`);
  console.log(`Found ${bogusDocs.length} bogus questions to replace in-place.`);

  const bulkOps = [];
  let totalPrepared = 0;

  for (const [subTopic, newQuestions] of Object.entries(subTopicDataMap)) {
    const targetDocs = bogusDocs.filter(d => (d.subTopic || '').trim().toLowerCase() === subTopic.trim().toLowerCase());
    console.log(`Subtopic "${subTopic}": ${targetDocs.length} DB docs to replace, ${newQuestions.length} new authentic questions available.`);

    if (targetDocs.length !== newQuestions.length) {
      console.warn(`WARNING: mismatch count in "${subTopic}"! Docs: ${targetDocs.length}, New: ${newQuestions.length}`);
    }

    for (let i = 0; i < targetDocs.length; i++) {
      const dbDoc = targetDocs[i];
      const newQ = newQuestions[i];

      if (!newQ) {
        console.error(`Missing new question at index ${i} for subtopic ${subTopic}`);
        continue;
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: dbDoc._id },
          update: {
            $set: {
              question: newQ.question,
              options: newQ.options,
              correctAnswer: newQ.correctAnswer,
              correctOption: newQ.correctOption,
              explanation: newQ.explanation,
              subject: "Chemistry",
              chapter: "Atomic Structure",
              subTopic: subTopic,
              difficulty: newQ.difficulty || "Medium",
              questionType: newQ.questionType || "MCQ",
              type: newQ.type || "multiple-choice",
              source: "JEE Main & NEET Chapter Bank",
              targetExams: ["JEE Main", "NEET"],
              updatedAt: new Date()
            }
          }
        }
      });
      totalPrepared++;
    }
  }

  console.log(`Executing bulkWrite for ${bulkOps.length} updates...`);
  const result = await collection.bulkWrite(bulkOps);
  console.log("BulkWrite completed successfully!");
  console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);

  await client.close();
}

run().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
