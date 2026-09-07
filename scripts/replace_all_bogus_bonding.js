const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const p1 = require('./data_bonding_part1.js');
const p2 = require('./data_bonding_part2.js');
const p3 = require('./data_bonding_part3.js');

const subTopicDataMap = {
  "Ionic and covalent bonds": p1.getIonicAndCovalentBondsQuestions(),
  "Resonance and formal charge": p1.getResonanceAndFormalChargeQuestions(),
  "Polarity": p2.getPolarityQuestions(),
  "Dipole moment and hydrogen bonding": p2.getDipoleMomentAndHydrogenBondingQuestions(),
  "VSEPR theory": p2.getVSEPRTheoryQuestions(),
  "Hybridization": p3.getHybridizationQuestions(),
  "Molecular orbital theory": p3.getMolecularOrbitalTheoryQuestions()
};

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found");

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const collection = db.collection('questionBank');

  console.log("Connected to MongoDB Atlas. Checking Chemical Bonding and Molecular Structure...");

  const allDocs = await collection.find({ subject: "Chemistry", chapter: "Chemical Bonding and Molecular Structure" }).toArray();
  console.log(`Total questions in Chemical Bonding: ${allDocs.length}`);

  const genuineDocs = allDocs.filter(q => q.source === "Question Bank");
  const bogusDocs = allDocs.filter(q => q.source !== "Question Bank");

  console.log(`Preserving ${genuineDocs.length} genuine questions.`);
  console.log(`Replacing ${bogusDocs.length} bogus synthetic questions in-place.`);

  const bulkOps = [];

  for (const [subTopic, newQuestions] of Object.entries(subTopicDataMap)) {
    const targetDocs = bogusDocs.filter(d => (d.subTopic || '').trim().toLowerCase() === subTopic.trim().toLowerCase());
    console.log(`Subtopic "${subTopic}": ${targetDocs.length} DB docs to replace, ${newQuestions.length} new authentic questions available.`);

    if (targetDocs.length !== newQuestions.length) {
      console.warn(`Mismatch in ${subTopic}: docs = ${targetDocs.length}, questions = ${newQuestions.length}`);
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
              chapter: "Chemical Bonding and Molecular Structure",
              subTopic: subTopic,
              difficulty: newQ.difficulty || "Medium",
              questionType: newQ.questionType || "MCQ",
              type: newQ.type || (newQ.questionType === "ASSERTION_REASON" ? "assertion-reason" : "multiple-choice"),
              source: "JEE Main & NEET Chapter Bank",
              targetExams: ["JEE Main", "NEET"],
              updatedAt: new Date()
            }
          }
        }
      });
    }
  }

  console.log(`Executing bulkWrite with ${bulkOps.length} updates...`);
  if (bulkOps.length > 0) {
    const res = await collection.bulkWrite(bulkOps);
    console.log(`bulkWrite completed: matched ${res.matchedCount}, modified ${res.modifiedCount}`);
  }

  console.log("Finished replacing all bogus questions in Chemical Bonding and Molecular Structure!");
  await client.close();
}

run().catch(err => {
  console.error("Error executing replace script:", err);
  process.exit(1);
});
