require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

async function runCensus() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    // Check distinct chapters matching "coord" or "co-ord"
    const chapters = await col.distinct("chapter", {
      chapter: { $regex: /co-ordination/i }
    });
    console.log("Matching chapters in DB:", chapters);

    for (const ch of chapters) {
      console.log(`\n========================================`);
      console.log(`Census for chapter: "${ch}"`);
      const all = await col.find({ chapter: ch }).toArray();
      console.log(`Total questions: ${all.length}`);

      const genuine = all.filter(q => q.source === "Question Bank");
      const bogus = all.filter(q => q.source !== "Question Bank");
      console.log(`Genuine ('Question Bank'): ${genuine.length}`);
      console.log(`Bogus / Generated: ${bogus.length}`);

      // Subtopics breakdown
      const subtopics = [...new Set(all.map(q => q.subTopic))];
      console.log(`Subtopics (${subtopics.length}):`);
      for (const st of subtopics) {
        const stAll = all.filter(q => q.subTopic === st);
        const stGen = stAll.filter(q => q.source === "Question Bank");
        const stBogus = stAll.filter(q => q.source !== "Question Bank");
        
        const ar = stBogus.filter(q => (q.questionType || q.type || "").toUpperCase().includes("ASSERTION"));
        const num = stBogus.filter(q => (q.questionType || q.type || "").toUpperCase().includes("NUMERICAL"));
        const mcq = stBogus.filter(q => !ar.includes(q) && !num.includes(q));

        console.log(`  - "${st}": Total=${stAll.length} (Genuine=${stGen.length}, Bogus=${stBogus.length} [AR=${ar.length}, MCQ=${mcq.length}, NUM=${num.length}])`);
      }

      // Check sample bogus questions
      if (bogus.length > 0) {
        console.log(`\nSample Bogus question:`);
        console.log(`  _id: ${bogus[0]._id}`);
        console.log(`  Q: ${bogus[0].question.substring(0, 100)}...`);
        console.log(`  source: ${bogus[0].source}`);
      }
    }

  } finally {
    await client.close();
  }
}

runCensus().catch(console.error);
