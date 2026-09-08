const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });

async function census() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("testseries");
  const col = db.collection("questionBank");

  const subTopics = [
    { name: "Capacitors", targetReplacements: 196, targetPreserved: 10 },
    { name: "Combination of capacitors and energy stored", targetReplacements: 53, targetPreserved: 10 },
    { name: "Coulomb's law", targetReplacements: 53, targetPreserved: 12 },
    { name: "Dielectrics", targetReplacements: 53, targetPreserved: 10 },
    { name: "Electric dipole and dipole moment", targetReplacements: 53, targetPreserved: 10 },
    { name: "Electric field/flux", targetReplacements: 53, targetPreserved: 10 },
    { name: "Equipotential surfaces", targetReplacements: 53, targetPreserved: 11 },
    { name: "Gauss's law", targetReplacements: 53, targetPreserved: 10 },
    { name: "Potential energy", targetReplacements: 53, targetPreserved: 11 }
  ];

  console.log("=== CENSUS: ELECTROSTATICS (PHYSICS) ===");
  let totalDocs = 0;
  let totalRepl = 0;
  let totalPres = 0;

  for (const st of subTopics) {
    const docs = await col.find({ chapter: "Electrostatics", subject: "Physics", subTopic: st.name }).toArray();
    const qbDocs = docs.filter(d => d.source === "Question Bank");
    const genDocs = docs.filter(d => d.source !== "Question Bank");

    const ar = genDocs.filter(d => d.type === "ASSERTION_REASON").length;
    const mcq = genDocs.filter(d => d.type === "MCQ").length;
    const num = genDocs.filter(d => d.type === "NUMERICAL").length;

    console.log(`Subtopic: "${st.name}"`);
    console.log(`  Total: ${docs.length} | Genuine QB: ${qbDocs.length} | Generator: ${genDocs.length} (AR: ${ar}, MCQ: ${mcq}, NUM: ${num})`);

    if (genDocs.length !== st.targetReplacements) {
      throw new Error(`Replacement count mismatch for ${st.name}: found ${genDocs.length}, expected ${st.targetReplacements}`);
    }
    if (qbDocs.length !== st.targetPreserved) {
      throw new Error(`Preserved count mismatch for ${st.name}: found ${qbDocs.length}, expected ${st.targetPreserved}`);
    }

    totalDocs += docs.length;
    totalRepl += genDocs.length;
    totalPres += qbDocs.length;
  }

  console.log(`\nSummary:`);
  console.log(`  Total Electrostatics docs: ${totalDocs} (Expected: 714)`);
  console.log(`  Total Generator to replace: ${totalRepl} (Expected: 620)`);
  console.log(`  Total Genuine QB to preserve: ${totalPres} (Expected: 94)`);

  await client.close();
}

census().catch(console.error);
