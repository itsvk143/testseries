import fs from "fs";
import { MongoClient } from "mongodb";

const env = fs.readFileSync(".env.local", "utf8");
let uri = "";
for (const line of env.split("\n")) {
  if (line.startsWith("MONGODB_URI=")) {
    uri = line.replace("MONGODB_URI=", "").trim().replace(/^['"]|['"]$/g, "");
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const subtopicNames = [
  "Work-energy theorem",
  "Kinetic/potential energy",
  "Conservative forces and potential energy",
  "Conservation of mechanical energy",
  "Vertical circular motion",
  "Power and variable force",
  "Elastic and inelastic collisions"
];

for (const name of subtopicNames) {
  const tests = await db.collection("testPapers").find({
    testId: { $regex: /^neet-SUBTOPIC-Physics-/i },
    $or: [
      { title: new RegExp(`^${name.replace(/[/\\^$*+?.()|[\]{}]/g, '\\$&')}$`, 'i') },
      { testId: new RegExp(name.replace(/[/\\^$*+?.()|[\]{}]/g, '[-_]'), 'i') }
    ]
  }).toArray();
  console.log(`\nSubtopic target: "${name}"`);
  tests.forEach(t => {
    console.log(`  Found testId: "${t.testId}" | title: "${t.title}" | questions: ${t.questions?.length}`);
  });
}

await client.close();
