const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });
const { repairedGenuineConics } = require('./repaired_genuine_conics.js');

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

  const genuineIds = Object.keys(repairedGenuineConics).map(id => new ObjectId(id));
  const foundGenuine = await qBank.find({ _id: { $in: genuineIds } }).toArray();
  console.log(`Genuine IDs matched in DB: ${foundGenuine.length} / ${genuineIds.length}`);

  // Bogus questions count per subtopic
  const subtopics = [
    'Directrix and focus equations',
    'Ellipse equations',
    'Focal properties and eccentricity of conics',
    'Hyperbola equations',
    'Rectangular hyperbola and asymptotes',
    'Standard forms of parabola'
  ];

  for (const s of subtopics) {
    const bogusDocs = await qBank.find({
      chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
      subTopic: s,
      source: { $ne: 'Question Bank' }
    }).toArray();
    console.log(`Subtopic "${s}": ${bogusDocs.length} bogus documents found in DB`);
  }

  await client.close();
}

run().catch(console.error);
