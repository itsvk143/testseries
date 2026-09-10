const { MongoClient } = require('mongodb');
const katex = require('katex');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function dumpFlawed() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    const genuine = await qb.find({ chapter: 'Laws of Motion', subject: 'Physics', source: 'Question Bank' }).toArray();
    const flawed = [];

    genuine.forEach((q) => {
      const id = q._id.toString();
      const allText = [q.question, ...(q.options || []), q.explanation].join(' ');
      const matches = allText.match(/\$([^$]+)\$/g) || [];
      const errors = [];
      for (const m of matches) {
        const formula = m.slice(1, -1);
        try {
          katex.renderToString(formula, { throwOnError: true });
        } catch (e) {
          errors.push({ formula, error: e.message });
        }
      }
      if (errors.length > 0) {
        flawed.push({
          _id: id,
          subTopic: q.subTopic,
          type: q.type,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          errors
        });
      }
    });

    console.log(`Found ${flawed.length} flawed genuine questions.`);
    fs.writeFileSync('scripts/flawed_laws_of_motion_genuine.json', JSON.stringify(flawed, null, 2));
    console.log('Saved to scripts/flawed_laws_of_motion_genuine.json');

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

dumpFlawed();
