require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");
const katex = require("katex");

function checkKatex(str, ctx) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error in ${ctx}: "${match[1]}" -> ${e.message}`);
    }
  }
}

function formatAR(text) {
  if (!text || typeof text !== "string") return null;

  const hasAssertion = /Assertion\s*(\(A\))?:/i.test(text);
  const hasReason = /Reason\s*(\(R\))?:/i.test(text);
  if (!hasAssertion || !hasReason) return null;

  const prefix = "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).";
  let body = text.replace(/^[\s\S]*?(?:Given below are two statements[^\n.]*[.]\s*)/i, "").trim();

  const match = body.match(/Assertion\s*(?:\(A\))?\s*:\s*([\s\S]+?)\s*Reason\s*(?:\(R\))?\s*:\s*([\s\S]+)$/i);
  if (match) {
    const aText = match[1].trim();
    const rText = match[2].trim();
    return `${prefix}\nAssertion (A): ${aText}\nReason (R): ${rText}`;
  }
  return null;
}

async function runMigration() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    console.log("Connected to MongoDB Atlas. Fetching Assertion-Reason questions...");

    const cursor = col.find({
      $or: [
        { type: "ASSERTION_REASON" },
        { questionType: /assertion/i },
        { question: /Assertion\s*\(A\)/i }
      ]
    });

    let total = 0;
    let updatedCount = 0;
    let unchangedCount = 0;
    let skippedCount = 0;

    const BATCH_SIZE = 500;
    let currentBatch = [];

    while (await cursor.hasNext()) {
      total++;
      const doc = await cursor.next();
      const currentQ = doc.question || "";
      const formatted = formatAR(currentQ);

      if (!formatted) {
        skippedCount++;
        continue;
      }

      if (formatted !== currentQ) {
        checkKatex(formatted, `Doc[${doc._id}]`);
        currentBatch.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: formatted,
                updatedAt: new Date()
              }
            }
          }
        });

        if (currentBatch.length >= BATCH_SIZE) {
          const res = await col.bulkWrite(currentBatch);
          updatedCount += res.modifiedCount;
          console.log(`Updated batch of ${res.modifiedCount} docs. Total updated so far: ${updatedCount}`);
          currentBatch = [];
        }
      } else {
        unchangedCount++;
      }
    }

    if (currentBatch.length > 0) {
      const res = await col.bulkWrite(currentBatch);
      updatedCount += res.modifiedCount;
      console.log(`Updated final batch of ${res.modifiedCount} docs.`);
    }

    console.log(`\n========================================`);
    console.log(`Migration Complete!`);
    console.log(`Total AR questions checked: ${total}`);
    console.log(`Total questions updated: ${updatedCount}`);
    console.log(`Total already in exact format: ${unchangedCount}`);
    console.log(`Total skipped: ${skippedCount}`);
    console.log(`========================================`);

  } finally {
    await client.close();
  }
}

runMigration().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
