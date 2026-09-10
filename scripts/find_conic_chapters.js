const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');
  const tPapers = db.collection('testPapers');

  const count = await qBank.countDocuments({
    chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)'
  });
  console.log('Total questions in questionBank for Conic Sections:', count);

  const subtopics = await qBank.distinct('subtopic', {
    chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)'
  });
  console.log('Subtopics:', subtopics);

  for (const s of subtopics) {
    const totalS = await qBank.countDocuments({
      chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
      subtopic: s
    });
    const genuineS = await qBank.countDocuments({
      chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
      subtopic: s,
      source: 'Question Bank'
    });
    const bogusS = totalS - genuineS;
    console.log(`Subtopic: "${s}" -> Total: ${totalS}, Genuine: ${genuineS}, Bogus: ${bogusS}`);
  }

  // Check test papers with the specific IDs
  const targetIds = [
    '6a9e2844c527cd38431011b5',
    '6a9e288ac527cd3843101340',
    '6a9e288bc527cd3843101341'
  ];

  for (const id of targetIds) {
    let tp;
    try {
      tp = await tPapers.findOne({ _id: new ObjectId(id) });
    } catch(e) {
      tp = await tPapers.findOne({ _id: id });
    }
    if (tp) {
      console.log(`Found testPaper ${id}: title/name="${tp.title || tp.name}", questions=${tp.questions?.length}`);
    } else {
      console.log(`TestPaper ${id} NOT found`);
    }
  }

  // Also search testPapers where chapter or subtopic matches
  const relatedTPs = await tPapers.find({
    $or: [
      { chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)' },
      { title: { $regex: /conic/i } },
      { name: { $regex: /conic/i } }
    ]
  }).toArray();
  console.log(`Related testPapers found: ${relatedTPs.length}`);
  relatedTPs.forEach(tp => {
    console.log(`  _id: ${tp._id}, title: "${tp.title || tp.name}", chapter: "${tp.chapter}", subtopic: "${tp.subtopic}", qCount: ${tp.questions?.length}`);
  });

  await client.close();
}

run().catch(console.error);
