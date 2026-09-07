const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

async function inspectMatches() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const col = db.collection("questionBank");

  const ids = [
    "6a98ffc43f04f6b32d498e8b",
    "6a98ffc43f04f6b32d498e80",
    "6a98ffc43f04f6b32d498e9f",
    "6a98ffc43f04f6b32d498ed3",
    "6a98ffc53f04f6b32d498ef1",
    "6a98ffc53f04f6b32d498efb",
    "6a98ffc53f04f6b32d498ef4",
    "6a98ffc53f04f6b32d498ee4",
    "6a98ffc53f04f6b32d498eec",
    "6a98ffc53f04f6b32d498efa"
  ];

  const docs = await col.find({ _id: { $in: ids.map(id => new ObjectId(id)) } }).toArray();
  for (const d of docs) {
    console.log(`\nID: ${d._id}`);
    console.log(`Subtopic: ${d.subTopic}`);
    console.log(`Q: ${d.question}`);
    console.log(`Expl: ${d.explanation}`);
  }

  await client.close();
}

inspectMatches().catch(console.error);
