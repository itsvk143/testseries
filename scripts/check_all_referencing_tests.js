const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const CHAPTER = "Purification and Characterisation of Organic Compounds";

async function checkAllTests() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');
  
  const qDocs = await db.collection('questionBank').find({ chapter: CHAPTER }).toArray();
  const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));
  
  const allTests = await db.collection('testPapers').find({}).toArray();
  const referencingTests = [];

  for (const t of allTests) {
    if (!t.questions || !Array.isArray(t.questions)) continue;
    let matchCount = 0;
    for (const q of t.questions) {
      const id = (q && q._id) ? q._id.toString() : (q ? q.toString() : null);
      if (id && qMap.has(id)) {
        matchCount++;
      }
    }
    if (matchCount > 0 || (t.title && t.title.includes("Purification"))) {
      referencingTests.push({
        id: t._id.toString(),
        title: t.title || t.testId,
        totalQuestions: t.questions.length,
        chapterQuestionMatches: matchCount
      });
    }
  }

  console.log(`Found ${referencingTests.length} tests referencing questions from "${CHAPTER}":`);
  console.table(referencingTests);

  await client.close();
}

checkAllTests();
