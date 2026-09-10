const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function inspectTestPaper() {
  const mongoUri = process.env.MONGODB_URI;

  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db();

  const testCollections = ['testseries', 'tests', 'testSeries'];
  for (const colName of testCollections) {
    const col = db.collection(colName);
    const doc = await col.findOne({ _id: new ObjectId('6a9e2843c527cd38431011ae') });
    if (doc) {
      console.log(`Found test in collection "${colName}":`);
      console.log(JSON.stringify({
        _id: doc._id,
        title: doc.title,
        name: doc.name,
        subject: doc.subject,
        chapter: doc.chapter,
        totalQuestions: doc.totalQuestions,
        totalMarks: doc.totalMarks,
        duration: doc.duration,
        sectionsCount: doc.sections ? doc.sections.length : null,
        sections: doc.sections ? doc.sections.map(s => ({
          name: s.name,
          type: s.type,
          totalQuestions: s.totalQuestions,
          questionsCount: s.questions ? s.questions.length : 0
        })) : null,
        questionsCount: doc.questions ? doc.questions.length : null
      }, null, 2));
      break;
    }
  }

  await client.close();
}

inspectTestPaper().catch(console.error);
