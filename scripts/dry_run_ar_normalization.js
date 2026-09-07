require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

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

async function dryRun() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    const cursor = col.find({
      $or: [
        { type: "ASSERTION_REASON" },
        { questionType: /assertion/i },
        { question: /Assertion\s*\(A\)/i }
      ]
    });

    let total = 0;
    let willUpdate = 0;
    let sampleUpdates = [];

    while (await cursor.hasNext()) {
      total++;
      const doc = await cursor.next();
      const currentQ = doc.question || "";
      const formatted = formatAR(currentQ);

      if (formatted && formatted !== currentQ) {
        willUpdate++;
        if (sampleUpdates.length < 5) {
          sampleUpdates.push({
            id: doc._id,
            chapter: doc.chapter,
            old: currentQ.slice(0, 100),
            new: formatted.slice(0, 140)
          });
        }
      }
    }

    console.log(`Dry Run Results:`);
    console.log(`Total AR questions evaluated: ${total}`);
    console.log(`Questions that will be updated to standard 3-line format: ${willUpdate}`);
    console.log(`\nSamples:`);
    sampleUpdates.forEach((s, idx) => {
      console.log(`\nSample ${idx + 1} (${s.id} - ${s.chapter}):`);
      console.log(`OLD: ${JSON.stringify(s.old)}`);
      console.log(`NEW: ${JSON.stringify(s.new)}`);
    });

  } finally {
    await client.close();
  }
}

dryRun();
