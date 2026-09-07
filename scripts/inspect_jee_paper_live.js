const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

async function inspectJeePaper() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const testPapersCol = db.collection("testPapers");
  const qbCol = db.collection("questionBank");

  const paper = await testPapersCol.findOne({ _id: new ObjectId("6a9e2842c527cd38431011a8") });
  console.log(`Paper: ${paper.title} (${paper.exam}) | Total questions: ${paper.questions.length}`);

  const questions = await qbCol.find({ _id: { $in: paper.questions } }).toArray();

  questions.slice(0, 5).forEach((q, i) => {
    console.log(`\n[Question ${i + 1}] ID: ${q._id}`);
    console.log(`Type: ${q.type} | Subtopic: ${q.subTopic || q.subtopic}`);
    console.log(`Question: ${q.question}`);
    console.log(`Options: ${JSON.stringify(q.options)}`);
    console.log(`Correct Answer: ${q.correctAnswer}`);
    console.log(`Explanation: ${q.explanation}`);
  });

  await client.close();
}

inspectJeePaper().catch(console.error);
