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
  console.log("🚀 Placing all Assertion-Reasoning questions consecutively AT THE END for NEET tests...");
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("testseries");

  const testPapers = await db.collection("testPapers").find({
    $or: [
      { testId: { $regex: /^neet/i } },
      { exam: "NEET" }
    ]
  }).toArray();

  console.log(`📊 Found ${testPapers.length} NEET test papers in MongoDB.`);

  // Load questionBank cache
  console.log("⚡ Caching questionBank docs...");
  const allDocIds = [];
  testPapers.forEach(tp => {
    (tp.questions || []).forEach(q => {
      const id = (q && q._id) ? q._id : q;
      const objId = toValidObjectId(id);
      if (objId) allDocIds.push(objId);
    });
  });

  const qDocs = await db.collection("questionBank").find(
    { _id: { $in: allDocIds } },
    { projection: { _id: 1, subject: 1, chapter: 1, subTopic: 1, topic: 1, questionType: 1, type: 1, assertion: 1, question: 1, text: 1 } }
  ).toArray();
  const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));
  console.log(`✅ Cached ${qMap.size} question docs from questionBank.`);

  let updatedCount = 0;
  let bulkOps = [];

  for (let idx = 0; idx < testPapers.length; idx++) {
    const tp = testPapers[idx];
    const tid = tp.testId || "";
    const rawQs = tp.questions || [];

    const resolved = rawQs.map(q => {
      if (q && q.question) return q;
      const idStr = (q && q._id) ? q._id.toString() : (q ? q.toString() : "");
      return qMap.get(idStr) || q;
    }).filter(Boolean);

    const totalAR = resolved.filter(isAR).length;
    if (totalAR === 0) continue;

    const isSingleSubject = tid.includes("SUBJECT") || tid.includes("CHAPTER") || tid.includes("SUBTOPIC") || (tp.subject && tp.subject !== "Mixed" && tp.subject !== "All");

    let finalQuestions = [];

    if (isSingleSubject) {
      const arQs = resolved.filter(isAR);
      const nonArQs = resolved.filter(q => !isAR(q));

      // Check if already at end
      const lastSlice = resolved.slice(resolved.length - totalAR);
      const allLastAreAR = lastSlice.every(isAR);
      const anyBeforeAreAR = resolved.slice(0, resolved.length - totalAR).some(isAR);

      if (allLastAreAR && !anyBeforeAreAR) continue;

      // Put all non-AR first, and all AR consecutively AT THE END
      finalQuestions = [...nonArQs, ...arQs];
    } else {
      // Multi-subject: group by subject and place AR at the end of each subject section
      const subjects = [];
      const bySubj = new Map();
      for (const q of resolved) {
        const s = q.subject || "Other";
        if (!bySubj.has(s)) {
          subjects.push(s);
          bySubj.set(s, []);
        }
        bySubj.get(s).push(q);
      }

      let modified = false;
      for (const s of subjects) {
        const sQs = bySubj.get(s);
        const sAR = sQs.filter(isAR);
        const sNonAR = sQs.filter(q => !isAR(q));

        if (sAR.length > 0) {
          const lastSlice = sQs.slice(sQs.length - sAR.length);
          const allLastAreAR = lastSlice.every(isAR);
          const anyBeforeAreAR = sQs.slice(0, sQs.length - sAR.length).some(isAR);
          if (!allLastAreAR || anyBeforeAreAR) {
            modified = true;
          }
        }
        finalQuestions.push(...sNonAR, ...sAR);
      }

      if (!modified) continue;
    }

    if (finalQuestions.length === rawQs.length) {
      const areOriginalsObjectIds = rawQs.some(q => toValidObjectId(q));
      const finalStored = areOriginalsObjectIds
        ? finalQuestions.map(q => q._id || toValidObjectId(q.id) || q)
        : finalQuestions;

      bulkOps.push({
        updateOne: {
          filter: { _id: tp._id },
          update: { $set: { questions: finalStored, updatedAt: new Date() } }
        }
      });

      updatedCount++;

      if (bulkOps.length >= 100) {
        await db.collection("testPapers").bulkWrite(bulkOps, { ordered: false });
        process.stdout.write(`\rProgress: updated ${updatedCount} NEET tests...`);
        bulkOps = [];
      }
    }
  }

  if (bulkOps.length > 0) {
    await db.collection("testPapers").bulkWrite(bulkOps, { ordered: false });
  }

  console.log(`\n\n🎉 Done! Successfully reordered ${updatedCount} NEET test papers with AR at the end.`);

  await client.close();
}

run().catch(console.error);
