require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function check() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    connectTimeoutMS: 45000,
    socketTimeoutMS: 45000,
    serverSelectionTimeoutMS: 45000
  });

  try {
    await client.connect();
    const db = client.db();
    console.log('Connected to MongoDB successfully.');

    const distinctExams = await db.collection('questionBank').distinct('exam');
    console.log('Distinct exams in questionBank:', distinctExams);

    const subjects = ['Physics', 'Chemistry', 'Botany', 'Zoology'];
    for (const s of subjects) {
      const count = await db.collection('questionBank').countDocuments({ subject: s });
      const chapters = await db.collection('questionBank').distinct('chapter', { subject: s });
      console.log(`Subject: ${s.padEnd(10)} | Questions: ${count.toString().padEnd(5)} | Chapters: ${chapters.length}`);
    }
  } catch (err) {
    console.error('Error connecting:', err);
  } finally {
    await client.close();
  }
}

check();
