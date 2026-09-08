const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

function validateKatex(text, id) {
  if (!text) return;
  const regex = /\$([^\$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (e) {
      console.log(`KaTeX error in doc ${id}: "${m[1]}" -> ${e.message}`);
    }
  }
}

async function auditQB() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const qb = await db.collection('questionBank').find({
    chapter: 'Kinematics',
    source: 'Question Bank'
  }).toArray();

  console.log(`Auditing ${qb.length} QB questions...`);
  let issues = 0;
  qb.forEach((q, i) => {
    if (!q.question || q.question.length < 10) { console.log(`Q#${i+1} (${q._id}) short question`); issues++; }
    if (!q.options || q.options.length !== 4) { console.log(`Q#${i+1} (${q._id}) options != 4`); issues++; }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.log(`Q#${i+1} (${q._id}) invalid ans: ${q.correctAnswer}`);
      issues++;
    }
    validateKatex(q.question, q._id);
    if (q.options) q.options.forEach(o => validateKatex(o, q._id));
    validateKatex(q.explanation, q._id);
  });
  console.log('Done. Total structural issues found in 122 QB questions:', issues);
  await client.close();
}
auditQB();
