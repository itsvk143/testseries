const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

function testMath(text, loc) {
  if (!text) return [];
  const errors = [];
  // Test both single $ and double $$
  const matches = text.match(/\$\$([^$]+)\$\$|\$([^$]+)\$/g) || [];
  for (const m of matches) {
    const formula = m.startsWith('$$') ? m.slice(2, -2) : m.slice(1, -1);
    try {
      katex.renderToString(formula, { throwOnError: true });
    } catch (e) {
      errors.push({ loc, formula, error: e.message });
    }
  }
  return errors;
}

async function auditGenuine() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    const genuine = await qb.find({ chapter: "Dual Nature of Matter and Radiation", subject: 'Physics', source: 'Question Bank' }).toArray();
    console.log(`Auditing all ${genuine.length} genuine questions...`);

    const flawed = [];

    genuine.forEach((q, i) => {
      const id = q._id.toString();
      const errs = [
        ...testMath(q.question, `${id} question`),
        ...testMath(q.explanation, `${id} explanation`)
      ];
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, oIdx) => {
          errs.push(...testMath(opt, `${id} opt ${oIdx}`));
        });
      }

      if (errs.length > 0 || q.marks !== 4 || q.negativeMarks !== 1) {
        flawed.push({ id, q, errs, marks: q.marks, negativeMarks: q.negativeMarks });
      }
    });

    console.log(`Found ${flawed.length} genuine questions needing updates/repairs.`);
    flawed.forEach(f => {
      console.log(`\nID: ${f.id} | Errors: ${f.errs.length} | Marks: ${f.marks}/${f.negativeMarks}`);
      if (f.errs.length > 0) {
        console.log('Error details:', f.errs);
      }
    });

  } finally {
    await client.close();
  }
}

auditGenuine();
