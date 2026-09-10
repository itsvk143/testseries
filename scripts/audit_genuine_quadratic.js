// scripts/audit_genuine_quadratic.js
require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const katex = require('katex');

async function auditGenuine() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qb = db.collection('questionBank');

  const genuine = await qb.find({
    chapter: 'Quadratic Equations',
    source: 'Question Bank'
  }).toArray();

  console.log(`Auditing ${genuine.length} genuine Quadratic Equations questions...`);

  const katexErrors = [];

  function checkKaTeX(str, id, field) {
    if (!str) return;
    const displayMathRegex = /\$\$([\s\S]*?)\$\$/g;
    let match;
    while ((match = displayMathRegex.exec(str)) !== null) {
      try {
        katex.renderToString(match[1], { throwOnError: true, displayMode: true });
      } catch (e) {
        katexErrors.push(`[${id}] KaTeX display error in ${field}: ${e.message}\nMath: "${match[1]}"`);
      }
    }
    const cleaned = str.replace(displayMathRegex, '');
    const inlineMathRegex = /\$([^\$]+?)\$/g;
    while ((match = inlineMathRegex.exec(cleaned)) !== null) {
      try {
        katex.renderToString(match[1], { throwOnError: true });
      } catch (e) {
        katexErrors.push(`[${id}] KaTeX inline error in ${field}: ${e.message}\nMath: "${match[1]}"`);
      }
    }
  }

  genuine.forEach((q, idx) => {
    const id = q._id.toString();
    checkKaTeX(q.question, id, 'question');
    checkKaTeX(q.solution, id, 'solution');
    if (q.options) {
      q.options.forEach((opt, oIdx) => checkKaTeX(opt, id, `option[${oIdx}]`));
    }

    console.log(`[Q${idx} - ${id}] (${q.subTopic || q.subtopic}) type: ${q.type}, options: ${q.options?.length}, correctOption: ${q.correctOption}, correctAnswer: ${q.correctAnswer}`);
  });

  if (katexErrors.length > 0) {
    console.error(`\nFound ${katexErrors.length} KaTeX errors:`);
    katexErrors.forEach(e => console.error(e));
  } else {
    console.log('\n✅ 0 KaTeX errors in genuine questions!');
  }

  await client.close();
}

auditGenuine().catch(console.error);
