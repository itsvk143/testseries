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

function interleaveQuestions(nonAR, ar) {
  if (!ar || ar.length === 0) return [...(nonAR || [])];
  if (!nonAR || nonAR.length === 0) return [...ar];

  const total = nonAR.length + ar.length;
  const numAR = ar.length;
  const interval = Math.max(2, Math.floor(total / (numAR + 1)));

  const arPositions = new Set();
  let nextPos = interval - 1;
  for (let i = 0; i < numAR; i++) {
    while (nextPos < total && arPositions.has(nextPos)) {
      nextPos++;
    }
    if (nextPos < total) {
      arPositions.add(nextPos);
    }
    nextPos += interval;
  }

  const result = [];
  let nonArIdx = 0;
  let arIdx = 0;

  for (let i = 0; i < total; i++) {
    if (arPositions.has(i) && arIdx < ar.length) {
      if (result.length > 0 && isAR(result[result.length - 1])) {
        if (nonArIdx < nonAR.length) {
          result.push(nonAR[nonArIdx++]);
        }
      }
      result.push(ar[arIdx++]);
    } else if (nonArIdx < nonAR.length) {
      result.push(nonAR[nonArIdx++]);
    } else if (arIdx < ar.length) {
      if (result.length > 0 && isAR(result[result.length - 1])) {
        if (nonArIdx < nonAR.length) {
          result.push(nonAR[nonArIdx++]);
        }
      }
      result.push(ar[arIdx++]);
    }
  }

  while (nonArIdx < nonAR.length) result.push(nonAR[nonArIdx++]);
  while (arIdx < ar.length) {
    if (result.length > 0 && isAR(result[result.length - 1])) {
      result.splice(result.length - 1, 0, ar[arIdx++]);
    } else {
      result.push(ar[arIdx++]);
    }
  }

  return result;
}

// Helper to balance a subject section to exactly 45 questions with max AR quota and no consecutive AR
async function balanceSubjectTo45(db, subject, existingSubjectQuestions, targetChapterNames, maxAR = 6, excludedGlobalIds = new Set()) {
  // Separate AR and non-AR
  let subjectAR = existingSubjectQuestions.filter(isAR);
  let subjectNonAR = existingSubjectQuestions.filter(q => !isAR(q));

  // Cap AR
  const keptAR = subjectAR.slice(0, maxAR);
  const excessAR = subjectAR.slice(maxAR);

  // Pool of usable non-AR from existing
  let keptNonAR = [...subjectNonAR];

  // We need total questions = 45 -> needed non-AR = 45 - keptAR.length
  const neededNonAR = 45 - keptAR.length;

  const usedIds = new Set([...excludedGlobalIds]);
  existingSubjectQuestions.forEach(q => {
    const s = q._id ? q._id.toString() : q.id?.toString();
    if (s) usedIds.add(s);
  });

  if (keptNonAR.length > neededNonAR) {
    keptNonAR = keptNonAR.slice(0, neededNonAR);
  } else if (keptNonAR.length < neededNonAR) {
    const deficit = neededNonAR - keptNonAR.length;

    // Build chapter query filter
    const validChapters = (targetChapterNames || []).filter(Boolean);
    let chapterFilter = {};
    if (validChapters.length > 0) {
      const orClauses = validChapters.flatMap(ch => [
        { chapter: { $regex: new RegExp(ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") } },
        { subTopic: { $regex: new RegExp(ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") } },
        { topic: { $regex: new RegExp(ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") } }
      ]);
      chapterFilter = { $or: orClauses };
    }

    const filterObjIds = [...usedIds].map(toValidObjectId).filter(Boolean);

    // 1. Try fetching from specific chapter/subtopic first
    let candidates = [];
    if (validChapters.length > 0) {
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
      const remainingDeficit = neededNonAR - keptNonAR.length;
      const updatedFilterObjIds = [...usedIds].map(toValidObjectId).filter(Boolean);

      const fallbackCandidates = await db.collection("questionBank").find({
        _id: { $nin: updatedFilterObjIds },
        subject: subject,
        $nor: [
          { questionType: { $regex: /assertion|ar/i } },
          { type: { $regex: /assertion|ar/i } }
        ]
      }).limit(remainingDeficit).toArray();

      fallbackCandidates.forEach(c => {
        keptNonAR.push(c);
        usedIds.add(c._id.toString());
      });
    }
  }

  // Interleave keptNonAR and keptAR to ensure NO consecutive AR
  const balanced = interleaveQuestions(keptNonAR, keptAR);

  // Update global excluded IDs
  balanced.forEach(q => {
    const s = q._id ? q._id.toString() : q.id?.toString();
    if (s) excludedGlobalIds.add(s);
  });

  return balanced;
}

async function run() {
  console.log("🚀 Starting NEET 45 Questions Per Subject Enforcement & Balancing...");
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("testseries");

  const { neetTests } = await import("../src/data/exams/neet.js");
  const staticMap = new Map(neetTests.map(t => [t.id, t]));

  const testPapers = await db.collection("testPapers").find({
    $or: [
      { testId: { $regex: /^neet/i } },
      { exam: "NEET" }
    ]
  }).toArray();

  console.log(`📊 Found ${testPapers.length} NEET test papers in MongoDB.`);

  // Load all question metadata for quick in-memory mapping
  console.log("⚡ Loading questionBank cache...");
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
    { projection: { _id: 1, subject: 1, chapter: 1, subTopic: 1, topic: 1, questionType: 1, type: 1, question: 1, text: 1 } }
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
        else if (tid.includes("Chemistry") || tid.includes("organic") || tid.includes("block") || tid.includes("coordination")) expectedSubject = "Chemistry";
        else if (tid.includes("Botany")) expectedSubject = "Botany";
        else if (tid.includes("Zoology")) expectedSubject = "Zoology";
        else expectedSubject = "Physics";
      }

      // Filter only questions belonging to expectedSubject
      const matchingSubjectQs = resolved.filter(q => (q.subject || expectedSubject) === expectedSubject);

      const hasForeignSubjects = matchingSubjectQs.length !== resolved.length;
      const hasDeficit = matchingSubjectQs.length < 45;
      const totalAR = matchingSubjectQs.filter(isAR).length;
      let hasConsecutive = false;
      for (let i = 0; i < matchingSubjectQs.length - 1; i++) {
        if (isAR(matchingSubjectQs[i]) && isAR(matchingSubjectQs[i + 1])) {
          hasConsecutive = true;
          break;
        }
      }

      if (hasForeignSubjects || hasDeficit || totalAR > 6 || hasConsecutive || matchingSubjectQs.length !== 45) {
        needsUpdate = true;

        // Collect chapter/subtopic hints
        const chapterHints = [
          tp.chapter,
          stat?.chapter,
          stat?.title,
          tp.title,
          ...matchingSubjectQs.map(q => q.subTopic || q.chapter).filter(Boolean)
        ].filter(Boolean);

        const balancedSubject = await balanceSubjectTo45(db, expectedSubject, matchingSubjectQs, chapterHints, 6);
        finalQuestions = balancedSubject;

        console.log(`🔧 Updating single-subject test: [${tid}] (${expectedSubject}) -> Now has ${finalQuestions.length} questions (AR: ${finalQuestions.filter(isAR).length})`);
      }
    } else {
      // Full/Mock/Live/Demo Multi-subject test
      // Check if test is botany-zoology demo (90 questions = 45 Botany + 45 Zoology)
      const isBotanyZoologyDemo = tid.includes("botany-zoology");

      if (isBotanyZoologyDemo) {
        const botQs = resolved.filter(q => q.subject === "Botany");
        const zooQs = resolved.filter(q => q.subject === "Zoology");

        if (botQs.length !== 45 || zooQs.length !== 45) {
          needsUpdate = true;
          const balancedBot = await balanceSubjectTo45(db, "Botany", botQs, ["Plant Physiology", "Diversity in Living World"], 3);
          const balancedZoo = await balanceSubjectTo45(db, "Zoology", zooQs, ["Human Physiology", "Animal Kingdom"], 3);
          finalQuestions = [...balancedBot, ...balancedZoo];
          console.log(`🔧 Updating Botany-Zoology demo: [${tid}] -> Now has ${finalQuestions.length} questions (Botany: ${balancedBot.length}, Zoology: ${balancedZoo.length})`);
        }
      } else {
        // Standard NEET Full / Mock / Live Test: Must have 45 Physics, 45 Chemistry, 45 Botany, 45 Zoology (Total 180)
        const pQs = resolved.filter(q => q.subject === "Physics");
        const cQs = resolved.filter(q => q.subject === "Chemistry");
        const botQs = resolved.filter(q => q.subject === "Botany");
        const zooQs = resolved.filter(q => q.subject === "Zoology");

        const pAR = pQs.filter(isAR).length;
        const cAR = cQs.filter(isAR).length;
        const botAR = botQs.filter(isAR).length;
        const zooAR = zooQs.filter(isAR).length;

        if (pQs.length !== 45 || cQs.length !== 45 || botQs.length !== 45 || zooQs.length !== 45 || (pAR + cAR + botAR + zooAR) > 6) {
          needsUpdate = true;

          // Max 6 AR across the entire test paper: allocate ~1-2 per subject
          const balancedP = await balanceSubjectTo45(db, "Physics", pQs, [], 1);
          const balancedC = await balanceSubjectTo45(db, "Chemistry", cQs, [], 2);
          const balancedBot = await balanceSubjectTo45(db, "Botany", botQs, [], 1);
          const balancedZoo = await balanceSubjectTo45(db, "Zoology", zooQs, [], 2);

          finalQuestions = [...balancedP, ...balancedC, ...balancedBot, ...balancedZoo];
          console.log(`🔧 Updating Full/Mock test: [${tid}] -> Now has ${finalQuestions.length} questions (P: ${balancedP.length}, C: ${balancedC.length}, Bot: ${balancedBot.length}, Zoo: ${balancedZoo.length}, Total AR: ${finalQuestions.filter(isAR).length})`);
        }
      }
    }

    if (needsUpdate && finalQuestions.length > 0) {
      const areOriginalsObjectIds = rawQs.some(q => toValidObjectId(q));
      const finalStored = areOriginalsObjectIds
        ? finalQuestions.map(q => q._id || toValidObjectId(q.id) || q)
        : finalQuestions;

      const duration = finalQuestions.length >= 180 ? 180 : 60;
      const totalMarks = finalQuestions.length >= 180 ? 720 : (finalQuestions.length * 4);

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

  console.log(`\n🎉 Successfully updated ${updatedCount} test papers!`);

  await client.close();
}

run().catch(console.error);
