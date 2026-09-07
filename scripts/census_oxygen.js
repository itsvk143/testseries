const { MongoClient } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const col = db.collection("questionBank");

  const ch = "Organic Compounds Containing Oxygen";
  const subtopics = [
    "Alcohols",
    "Lucas test and oxidation of alcohols",
    "Phenols",
    "Reimer-Tiemann and Kolbe's reactions of phenols",
    "Ethers",
    "Aldehydes",
    "Ketones",
    "Nucleophilic addition reactions of carbonyls (aldol, Cannizzaro)",
    "Carboxylic acids",
    "Acidic nature and reactions of carboxylic acids"
  ];

  console.log(`=== Census for ${ch} ===`);
  const totalInChapter = await col.countDocuments({ chapter: ch });
  const genuineTotal = await col.countDocuments({ chapter: ch, source: "Question Bank" });
  const bogusTotal = await col.countDocuments({ chapter: ch, source: { $ne: "Question Bank" } });
  console.log(`Total: ${totalInChapter}, Genuine: ${genuineTotal}, Bogus: ${bogusTotal}`);

  for (let i = 0; i < subtopics.length; i++) {
    const st = subtopics[i];
    const total = await col.countDocuments({ chapter: ch, subTopic: st });
    const genuine = await col.countDocuments({ chapter: ch, subTopic: st, source: "Question Bank" });
    const bogus = await col.countDocuments({ chapter: ch, subTopic: st, source: { $ne: "Question Bank" } });
    const bogusList = await col.find({ chapter: ch, subTopic: st, source: { $ne: "Question Bank" } })
      .sort({ type: 1, _id: 1 }).toArray();
    const typeCounts = bogusList.reduce((acc, q) => { acc[q.type] = (acc[q.type] || 0) + 1; return acc; }, {});
    console.log(`Part ${i + 1}: "${st}" -> Total: ${total}, Genuine: ${genuine}, Bogus: ${bogus} | Types: ${JSON.stringify(typeCounts)}`);
  }

  await client.close();
}

main().catch(console.error);
