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

const targetPatterns = [
  { name: "Elasticity", regex: /elasticity/i },
  { name: "Fluid Mechanics", regex: /fluid-mechanics|fluid mechanics/i },
  { name: "Surface Tension", regex: /surface-tension|surface tension/i },
  { name: "Thermal Expansion", regex: /thermal-expansion|thermal expansion/i },
  { name: "Stefan's Law", regex: /stefan/i }
];

console.log("=== EXACT 5 TARGET TESTS IN testPapers ===");

for (const tpTarget of targetPatterns) {
  console.log(`\n--- Pattern: ${tpTarget.name} ---`);
  const matches = await db.collection('testPapers').find({
    testId: { $regex: tpTarget.regex },
    exam: { $regex: /^neet$/i }
  }).toArray();

  for (const m of matches) {
    if (m.testId.includes('SUBTOPIC') && m.testId.includes('Physics')) {
      console.log(`ID: "${m.testId}" | Title: "${m.title}" | Qs: ${m.questions?.length}`);
    }
  }
}

await client.close();
