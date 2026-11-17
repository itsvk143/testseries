import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db('testseries');

console.log("=== INSPECTING MECHANICAL PROPERTIES OF SOLIDS & ASSOCIATED TESTS ===");

const allTps = await db.collection('testPapers').find({
  $or: [
    { testId: /elasticity|fluid|surface|thermal|stefan|solids/i },
    { title: /elasticity|fluid|surface|thermal|stefan|solids/i },
    { chapter: /mechanical properties of solids|solids/i }
  ]
}).toArray();

console.log(`Found ${allTps.length} matching testPapers in MongoDB:`);
for (const tp of allTps) {
  if (tp.testId.startsWith('neet')) {
    console.log(`- ${tp.testId} | title: "${tp.title}" | Qs: ${tp.questions?.length}`);
  }
}

// Also check questionBank for questions in these subtopics
const subtopics = [
  "Elasticity (Hooke's law, Young's modulus)",
  "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
  "Surface tension, surface energy, and capillarity",
  "Thermal expansion and calorimetry",
  "Stefan's law of radiation"
];

console.log("\nChecking questionBank counts for subtopics:");
for (const st of subtopics) {
  const count = await db.collection('questionBank').countDocuments({
    $or: [
      { subTopic: st },
      { subtopic: st },
      { subTopic: new RegExp(st.slice(0, 15), 'i') }
    ]
  });
  console.log(`- "${st}": ${count} questions`);
}

await client.close();
