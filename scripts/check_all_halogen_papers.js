const { MongoClient } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

async function checkAllHalogenTests() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const col = db.collection("questionBank");
  const testPapersCol = db.collection("testPapers");

  const halogenIds = (await col.find({ chapter: "Organic Compounds Containing Halogens" }, { projection: { _id: 1 } }).toArray()).map(d => d._id);
  console.log(`Total halogen question IDs: ${halogenIds.length}`);

  const papersWithHalogens = await testPapersCol.find({
    questions: { $in: halogenIds }
  }).toArray();

  console.log(`\nFound ${papersWithHalogens.length} test papers containing halogens questions:`);
  for (const p of papersWithHalogens) {
    const matchedCount = p.questions.filter(qid => halogenIds.some(hid => hid.equals(qid))).length;
    console.log(`- Paper ID: ${p.id || p._id} | Title: "${p.title}" | Exam: ${p.exam} | Total Qs in Paper: ${p.questions.length} | Halogen Qs in Paper: ${matchedCount}`);
  }

  await client.close();
}

checkAllHalogenTests().catch(console.error);
