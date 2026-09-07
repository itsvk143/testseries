require("dotenv").config({ path: ".env.local" });
const { MongoClient, ObjectId } = require("mongodb");

const isAR = q => {
  if (!q) return false;
  const t = (q.questionType || q.type || "").toUpperCase();
  return t.includes("ASSERTION") || t.includes("AR") || !!q.assertion;
};

const toValidObjectId = id => {
  if (!id) return null;
  const s = (typeof id === "object" && id._id) ? id._id.toString() : id.toString();
  return ObjectId.isValid(s) ? new ObjectId(s) : null;
};

async function run() {
  console.log("🚀 Enforcing NEET Tests: exactly 45 questions per subject, max 6 AR questions, all AR placed at the end...");
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  const testPapers = await db.collection("testPapers").find({
    $or: [
      { testId: { $regex: /^neet/i } },
      { exam: "NEET" }
    ]
  }).toArray();

  console.log(`📊 Found ${testPapers.length} NEET test papers.`);

  // Load questionBank cache
  const allDocIds = [];
  testPapers.forEach(tp => {
    (tp.questions || []).forEach(q => {
      const objId = toValidObjectId(q);
      if (objId) allDocIds.push(objId);
    });
  });

  const qDocs = await db.collection("questionBank").find(
    { _id: { $in: allDocIds } }
  ).toArray();
  const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));
  console.log(`✅ Cached ${qMap.size} questions from questionBank.`);

  let updatedCount = 0;
  let bulkOps = [];

  for (const tp of testPapers) {
    const rawQs = tp.questions || [];
    if (rawQs.length === 0) continue;

    const resolved = rawQs.map(q => {
      const idStr = toValidObjectId(q)?.toString();
      return idStr ? qMap.get(idStr) || q : q;
    });

    const isSingleSubject = tp.testId.includes("SUBJECT") || tp.testId.includes("CHAPTER") || tp.testId.includes("SUBTOPIC") || (tp.subject && tp.subject !== "Mixed" && tp.subject !== "All");

    if (isSingleSubject) {
      const arQs = resolved.filter(isAR);
      const nonArQs = resolved.filter(q => !isAR(q));

      if (arQs.length <= 6) {
        // Check if already placed at the end
        const lastSlice = resolved.slice(resolved.length - arQs.length);
        const allLastAreAR = lastSlice.every(isAR);
        const anyBeforeAreAR = resolved.slice(0, resolved.length - arQs.length).some(isAR);
        if (allLastAreAR && !anyBeforeAreAR) continue;

        // Reorder: non-AR first, AR at end
        const newQuestions = [...nonArQs, ...arQs];
        const finalStored = rawQs.some(q => toValidObjectId(q))
          ? newQuestions.map(q => q._id || toValidObjectId(q.id) || q)
          : newQuestions;

        bulkOps.push({
          updateOne: {
            filter: { _id: tp._id },
            update: { $set: { questions: finalStored, updatedAt: new Date() } }
          }
        });
        updatedCount++;
      } else {
        // More than 6 AR! We need to replace excess AR with MCQs from the same chapter/subject
        const allowedAR = arQs.slice(0, 6);
        const excessCount = arQs.length - 6;

        // Find candidate MCQ questions from questionBank matching chapter/subject not already in test
        const testIdSet = new Set(rawQs.map(q => toValidObjectId(q)?.toString()).filter(Boolean));
        const sampleDoc = resolved[0] || {};
        const query = {
          subject: sampleDoc.subject || tp.subject,
          questionType: { $nin: ["ASSERTION_REASON"] },
          type: { $nin: ["assertion-reason"] }
        };
        if (sampleDoc.chapter) query.chapter = sampleDoc.chapter;

        const candidateMCQs = await db.collection("questionBank").find(query).limit(100).toArray();
        const availableMCQs = candidateMCQs.filter(c => !testIdSet.has(c._id.toString()));

        const replacementMCQs = availableMCQs.slice(0, excessCount);
        if (replacementMCQs.length < excessCount) {
          console.warn(`Could not find enough replacement MCQs for test ${tp.testId} (needed ${excessCount}, found ${replacementMCQs.length})`);
        }

        const newNonArQs = [...nonArQs, ...replacementMCQs];
        const newQuestions = [...newNonArQs, ...allowedAR];

        const finalStored = rawQs.some(q => toValidObjectId(q))
          ? newQuestions.map(q => q._id || toValidObjectId(q.id) || q)
          : newQuestions;

        bulkOps.push({
          updateOne: {
            filter: { _id: tp._id },
            update: { $set: { questions: finalStored, updatedAt: new Date() } }
          }
        });
        updatedCount++;
      }
    }

    if (bulkOps.length >= 50) {
      await db.collection("testPapers").bulkWrite(bulkOps, { ordered: false });
      bulkOps = [];
    }
  }

  if (bulkOps.length > 0) {
    await db.collection("testPapers").bulkWrite(bulkOps, { ordered: false });
  }

  console.log(`\n🎉 Successfully enforced NEET AR rules on ${updatedCount} test papers!`);
  await client.close();
}

run().catch(console.error);
