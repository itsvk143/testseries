const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const p1 = require('./data_periodicity_part1.js');
const p2 = require('./data_periodicity_part2.js');

const subTopicDataMap = {
  "Modern periodic law and periodic table blocks (s, p, d, f)": p1.getModernPeriodicLawQuestions(),
  "Atomic radius": p1.getAtomicRadiusQuestions(),
  "Ionization enthalpy": p1.getIonizationEnthalpyQuestions(),
  "Electron gain enthalpy": p2.getElectronGainEnthalpyQuestions(),
  "Electronegativity": p2.getElectronegativityQuestions(),
  "Trends in periodic properties": p2.getTrendsInPeriodicPropertiesQuestions()
};

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found");

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const collection = db.collection('questionBank');

  console.log("Connected to MongoDB Atlas. Checking Classification of Elements and Periodicity in Properties...");

  const allDocs = await collection.find({ subject: "Chemistry", chapter: "Classification of Elements and Periodicity in Properties" }).toArray();
  console.log(`Total questions in Classification of Elements and Periodicity in Properties: ${allDocs.length}`);

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
              chapter: "Classification of Elements and Periodicity in Properties",
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

  console.log("Finished replacing all bogus questions in Classification of Elements and Periodicity in Properties!");
  await client.close();
}

run().catch(err => {
  console.error("Error executing replace script:", err);
  process.exit(1);
});
