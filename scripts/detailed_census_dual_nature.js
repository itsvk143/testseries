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

async function detailedCensus() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    const CHAPTER = "Dual Nature of Matter and Radiation";
    const total = await qb.countDocuments({ chapter: CHAPTER, subject: 'Physics' });
    const genuine = await qb.find({ chapter: CHAPTER, subject: 'Physics', source: 'Question Bank' }).toArray();
    const generator = await qb.find({ chapter: CHAPTER, subject: 'Physics', source: { $ne: 'Question Bank' } }).toArray();

    console.log(`Total questions in "${CHAPTER}": ${total}`);
    console.log(`Genuine: ${genuine.length}, Generator: ${generator.length}`);

    // Aggregate subtopics for generator questions
    const genBySubtopic = {};
    generator.forEach(q => {
      const sub = q.subTopic || q.subtopic;
      const type = q.type || q.questionType;
      if (!genBySubtopic[sub]) genBySubtopic[sub] = { AR: 0, MCQ: 0, NUM: 0, total: 0 };
      if (type === 'ASSERTION_REASON') genBySubtopic[sub].AR++;
      else if (type === 'MCQ') genBySubtopic[sub].MCQ++;
      else if (type === 'NUMERICAL') genBySubtopic[sub].NUM++;
      genBySubtopic[sub].total++;
    });

    console.log('\n--- Generator Questions per Subtopic ---');
    console.table(genBySubtopic);

    // Aggregate subtopics for genuine questions
    const genSubtopic = {};
    genuine.forEach(q => {
      const sub = q.subTopic || q.subtopic;
      const type = q.type || q.questionType;
      if (!genSubtopic[sub]) genSubtopic[sub] = { AR: 0, MCQ: 0, NUM: 0, total: 0 };
      if (type === 'ASSERTION_REASON') genSubtopic[sub].AR++;
      else if (type === 'MCQ') genSubtopic[sub].MCQ++;
      else if (type === 'NUMERICAL') genSubtopic[sub].NUM++;
      genSubtopic[sub].total++;
    });

    console.log('\n--- Genuine Questions per Subtopic ---');
    console.table(genSubtopic);

    // Audit genuine questions for KaTeX issues and marks
    console.log('\n--- Auditing Genuine Questions ---');
    let genuineKatexErrors = [];
    genuine.forEach((q, i) => {
      const id = q._id.toString();
      const qErrors = testKatex(q.question, `Q#${i+1} (${id}) question`);
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, oIdx) => {
          qErrors.push(...testKatex(opt, `Q#${i+1} (${id}) opt ${oIdx}`));
        });
      }
      qErrors.push(...testKatex(q.explanation, `Q#${i+1} (${id}) explanation`));
      if (qErrors.length > 0) {
        console.log(`\nFlawed Genuine Q#${i+1} (${id}):`);
        console.log(`Question: ${q.question}`);
        console.log(`Options: ${JSON.stringify(q.options)}`);
        console.log(`Correct Answer: ${q.correctAnswer}`);
        console.log(`Explanation: ${q.explanation}`);
        console.log('Errors:', qErrors);
        genuineKatexErrors.push({ id, q, errors: qErrors });
      }
    });

    console.log(`\nGenuine questions with KaTeX issues: ${genuineKatexErrors.length} out of ${genuine.length}`);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

detailedCensus();
