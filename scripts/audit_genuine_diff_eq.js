const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

  const genuine = await qBank.find({
    chapter: 'Differential Equations',
    source: 'Question Bank'
  }).toArray();

  console.log(`Auditing ${genuine.length} Genuine Questions...`);

  let latexErrors = 0;
  genuine.forEach((q, idx) => {
    console.log(`\n------------------------------------------------------------`);
    console.log(`[${idx + 1}] ID: ${q._id} | subTopic: "${q.subTopic}"`);
    console.log(`Question: ${q.question}`);
    console.log(`Options: ${JSON.stringify(q.options)}`);
    console.log(`Correct Answer: ${q.correctAnswer} -> ${q.options ? q.options[q.correctAnswer] : 'N/A'}`);
    console.log(`Explanation: ${q.explanation?.substring(0, 150)}...`);

    // Check LaTeX
    const fullText = (q.question || '') + ' ' + (q.explanation || '') + ' ' + (q.options ? q.options.join(' ') : '');
    const regex = /\$([^$]+)\$/g;
    let m;
    while ((m = regex.exec(fullText)) !== null) {
      try {
        katex.renderToString(m[1], { throwOnError: true, displayMode: false });
      } catch (err) {
        latexErrors++;
        console.error(`  [LaTeX ERROR] in ID ${q._id}: $${m[1]}$ -> ${err.message}`);
      }
    }
  });

  console.log(`\nTotal LaTeX errors in genuine questions: ${latexErrors}`);
  await client.close();
}

run().catch(console.error);
