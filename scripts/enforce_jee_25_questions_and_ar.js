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

// Balances a subject section to exactly 25 questions with max 5 AR placed consecutively at the end
async function balanceJeeSubjectTo25(db, subject, existingQuestions, targetChapterHints, maxAR = 5, excludedGlobalIds = new Set()) {
  const matchingSubjectQs = existingQuestions.filter(q => (q.subject || subject) === subject);

  let arQs = matchingSubjectQs.filter(isAR);
  let nonArQs = matchingSubjectQs.filter(q => !isAR(q));

  // 1. Cap AR questions to maxAR (max 5)
  const keptAR = arQs.slice(0, maxAR);

  // 2. We need total questions = 25 -> needed non-AR = 25 - keptAR.length
  const neededNonAR = 25 - keptAR.length;

  let keptNonAR = [...nonArQs];

  const usedIds = new Set([...excludedGlobalIds]);
  matchingSubjectQs.forEach(q => {
    const s = q._id ? q._id.toString() : q.id?.toString();
    if (s) usedIds.add(s);
  });

  if (keptNonAR.length > neededNonAR) {
    keptNonAR = keptNonAR.slice(0, neededNonAR);
  } else if (keptNonAR.length < neededNonAR) {
    const deficit = neededNonAR - keptNonAR.length;

    const validHints = (targetChapterHints || []).filter(Boolean);
    let chapterFilter = {};
    if (validHints.length > 0) {
      const orClauses = validHints.flatMap(ch => [
        { chapter: { $regex: new RegExp(ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") } },
        { subTopic: { $regex: new RegExp(ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") } },
        { topic: { $regex: new RegExp(ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") } }
      ]);
      chapterFilter = { $or: orClauses };
    }

    const filterObjIds = [...usedIds].map(toValidObjectId).filter(Boolean);

    // 1. Fetch from specific chapter/subtopic hints
    let candidates = [];
    if (validHints.length > 0) {
      candidates = await db.collection("questionBank").find({
        _id: { $nin: filterObjIds },
        subject: subject,
        ...chapterFilter,
        $nor: [
          { questionType: { $regex: /assertion|ar/i } },
          { type: { $regex: /assertion|ar/i } }
        ]
      }).limit(deficit).toArray();

      candidates.forEach(c => {
        keptNonAR.push(c);
        usedIds.add(c._id.toString());
      });
    }

    // 2. If still deficient, fetch from broader subject
    if (keptNonAR.length < neededNonAR) {
      const remaining = neededNonAR - keptNonAR.length;
      const fallbackFilterIds = [...usedIds].map(toValidObjectId).filter(Boolean);

      const fallbackCandidates = await db.collection("questionBank").find({
        _id: { $nin: fallbackFilterIds },
        subject: subject,
        $nor: [
          { questionType: { $regex: /assertion|ar/i } },
          { type: { $regex: /assertion|ar/i } }
        ]
      }).limit(remaining).toArray();

      fallbackCandidates.forEach(c => {
        keptNonAR.push(c);
        usedIds.add(c._id.toString());
      });
    }
  }

  // 3. Put ALL Assertion Reasoning questions in consecutive series AT THE END
  const balanced = [...keptNonAR, ...keptAR];

  balanced.forEach(q => {
    const s = q._id ? q._id.toString() : q.id?.toString();
    if (s) excludedGlobalIds.add(s);
  });

  return balanced;
}

async function run() {
  console.log("🚀 Starting JEE 25 Questions Per Subject & AR End-Placement Enforcement...");
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("testseries");

  const { jeeMainsTests } = await import("../src/data/exams/jeeMains.js");
  const staticMap = new Map(jeeMainsTests.map(t => [t.id, t]));

  const testPapers = await db.collection("testPapers").find({
    $or: [
      { testId: { $regex: /^jee/i } },
      { exam: { $regex: /jee/i } }
    ]
  }).toArray();

  console.log(`📊 Found ${testPapers.length} JEE test papers in MongoDB.`);

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

  for (let idx = 0; idx < testPapers.length; idx++) {
    const tp = testPapers[idx];
    const tid = tp.testId || "";
    const rawQs = tp.questions || [];
    const stat = staticMap.get(tid);

    const resolved = rawQs.map(q => {
      if (q && q.question) return q;
      const idStr = (q && q._id) ? q._id.toString() : (q ? q.toString() : "");
      return qMap.get(idStr) || q;
    }).filter(Boolean);

    const isSingleSubject = tid.includes("SUBJECT") || tid.includes("CHAPTER") || tid.includes("SUBTOPIC") || (tp.subject && tp.subject !== "Mixed" && tp.subject !== "All");

    let needsUpdate = false;
    let finalQuestions = [];

    if (isSingleSubject) {
      let expectedSubject = tp.subject || stat?.subject;
      if (!expectedSubject || expectedSubject === "Mixed") {
        if (tid.includes("Physics")) expectedSubject = "Physics";
        else if (tid.includes("Chemistry")) expectedSubject = "Chemistry";
        else if (tid.includes("Mathematics") || tid.includes("Maths")) expectedSubject = "Mathematics";
        else expectedSubject = "Physics";
      }

      const matchingSubjectQs = resolved.filter(q => (q.subject || expectedSubject) === expectedSubject);
      const hasForeign = matchingSubjectQs.length !== resolved.length;
      const totalAR = matchingSubjectQs.filter(isAR).length;

      // Check if AR questions are at the end
      let arAtEnd = true;
      if (totalAR > 0) {
        const lastSlice = matchingSubjectQs.slice(matchingSubjectQs.length - totalAR);
        const allLastAreAR = lastSlice.every(isAR);
        const anyBeforeAreAR = matchingSubjectQs.slice(0, matchingSubjectQs.length - totalAR).some(isAR);
        arAtEnd = allLastAreAR && !anyBeforeAreAR;
      }

      if (hasForeign || matchingSubjectQs.length !== 25 || totalAR > 5 || !arAtEnd) {
        needsUpdate = true;

        const hints = [
          tp.chapter,
          stat?.chapter,
          stat?.title,
          tp.title,
          ...matchingSubjectQs.map(q => q.subTopic || q.chapter).filter(Boolean)
        ].filter(Boolean);

        finalQuestions = await balanceJeeSubjectTo25(db, expectedSubject, matchingSubjectQs, hints, 5);
        console.log(`🔧 Updating single-subject JEE test: [${tid}] (${expectedSubject}) -> ${finalQuestions.length} Qs (AR: ${finalQuestions.filter(isAR).length} at end)`);
      }
    } else {
      // Multi-subject JEE (Mock, CT, Sunday, PYQ, Demo)
      const isDemo = tid.includes("demo");
      if (isDemo) {
        // e.g. top-100-numerical-physics-chemistry-demo
        const cQs = resolved.filter(q => q.subject === "Chemistry");
        if (resolved.length !== 25) {
          needsUpdate = true;
          finalQuestions = await balanceJeeSubjectTo25(db, "Chemistry", cQs, ["Chemical Kinetics", "Solutions"], 5);
          console.log(`🔧 Updating demo test: [${tid}] -> ${finalQuestions.length} Qs`);
        }
      } else {
        // Standard JEE Full test: 25 Physics, 25 Chemistry, 25 Mathematics (Total 75)
        const pQs = resolved.filter(q => q.subject === "Physics");
        const cQs = resolved.filter(q => q.subject === "Chemistry");
        const mQs = resolved.filter(q => q.subject === "Mathematics");

        const totalAR = resolved.filter(isAR).length;

        // Check if each subject has 25 questions
        const countsValid = pQs.length === 25 && cQs.length === 25 && mQs.length === 25 && resolved.length === 75;

        // In full test, AR count must be <= 5
        // And AR questions in each section must be consecutively at the end of that section
        let pArAtEnd = true;
        const pAR = pQs.filter(isAR).length;
        if (pAR > 0) {
          pArAtEnd = pQs.slice(pQs.length - pAR).every(isAR) && !pQs.slice(0, pQs.length - pAR).some(isAR);
        }

        let cArAtEnd = true;
        const cAR = cQs.filter(isAR).length;
        if (cAR > 0) {
          cArAtEnd = cQs.slice(cQs.length - cAR).every(isAR) && !cQs.slice(0, cQs.length - cAR).some(isAR);
        }

        let mArAtEnd = true;
        const mAR = mQs.filter(isAR).length;
        if (mAR > 0) {
          mArAtEnd = mQs.slice(mQs.length - mAR).every(isAR) && !mQs.slice(0, mQs.length - mAR).some(isAR);
        }

        if (!countsValid || totalAR > 5 || !pArAtEnd || !cArAtEnd || !mArAtEnd) {
          needsUpdate = true;

          // Allocate at most 1-2 AR per subject so total <= 5
          const balancedP = await balanceJeeSubjectTo25(db, "Physics", pQs, [], 1);
          const balancedC = await balanceJeeSubjectTo25(db, "Chemistry", cQs, [], 2);
          const balancedM = await balanceJeeSubjectTo25(db, "Mathematics", mQs, [], 2);

          finalQuestions = [...balancedP, ...balancedC, ...balancedM];
          console.log(`🔧 Updating full JEE test: [${tid}] -> ${finalQuestions.length} Qs (P: ${balancedP.length}, C: ${balancedC.length}, M: ${balancedM.length}, Total AR: ${finalQuestions.filter(isAR).length})`);
        }
      }
    }

    if (needsUpdate && finalQuestions.length > 0) {
      const areOriginalsObjectIds = rawQs.some(q => toValidObjectId(q));
      const finalStored = areOriginalsObjectIds
        ? finalQuestions.map(q => q._id || toValidObjectId(q.id) || q)
        : finalQuestions;

      const duration = finalQuestions.length >= 75 ? 180 : 60;
      const totalMarks = finalQuestions.length >= 75 ? 300 : (finalQuestions.length * 4);

      await db.collection("testPapers").updateOne(
        { _id: tp._id },
        {
          $set: {
            questions: finalStored,
            duration: duration,
            totalMarks: totalMarks,
            updatedAt: new Date()
          }
        }
      );
      updatedCount++;
    }
  }

  console.log(`\n🎉 Successfully updated ${updatedCount} JEE test papers!`);

  await client.close();
}

run().catch(console.error);
