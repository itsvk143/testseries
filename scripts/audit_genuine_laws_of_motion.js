const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

function testKatex(text, loc) {
  if (!text) return [];
  const errors = [];
  const matches = text.match(/\$([^$]+)\$/g) || [];
  for (const m of matches) {
    const formula = m.slice(1, -1);
    try {
      katex.renderToString(formula, { throwOnError: true });
    } catch (e) {
      errors.push({ loc, formula, error: e.message });
    }
  }
  return errors;
}

async function auditGenuineLawsOfMotion() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    const genuine = await qb.find({ chapter: 'Laws of Motion', subject: 'Physics', source: 'Question Bank' }).toArray();
    console.log(`Auditing ${genuine.length} genuine questions in Laws of Motion...`);

    let katexErrors = [];
    let marksMap = {};

    genuine.forEach((q, i) => {
      const id = q._id.toString();
      const mKey = `${q.marks !== undefined ? q.marks : 'missing'} / ${q.negativeMarks !== undefined ? q.negativeMarks : 'missing'}`;
      marksMap[mKey] = (marksMap[mKey] || 0) + 1;

      const qErrors = testKatex(q.question, `Q#${i+1} (${id}) question`);
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, oIdx) => {
          qErrors.push(...testKatex(opt, `Q#${i+1} (${id}) opt ${oIdx}`));
        });
      }
      qErrors.push(...testKatex(q.explanation, `Q#${i+1} (${id}) explanation`));

      if (qErrors.length > 0) {
        console.log(`\nFlawed Genuine Q#${i+1} (${id}) [${q.subTopic}]:`);
        console.log(`Question: ${q.question}`);
        console.log(`Options: ${JSON.stringify(q.options)}`);
        console.log(`Correct Answer: ${q.correctAnswer}`);
        console.log(`Explanation: ${q.explanation}`);
        console.log('Errors:', qErrors);
        katexErrors.push({ id, q, errors: qErrors });
      }
    });

    console.log('\n--- Genuine Marks Distribution ---');
    console.log(marksMap);
    console.log(`\nGenuine questions with KaTeX issues: ${katexErrors.length} out of ${genuine.length}`);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

auditGenuineLawsOfMotion();
