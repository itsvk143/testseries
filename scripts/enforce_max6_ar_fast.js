require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

const isAR = q => {
  if (!q) return false;
  const t = (q.questionType || q.type || '').toUpperCase();
  return t.includes('ASSERTION') || t.includes('AR');
};

const toValidObjectId = id => {
  if (!id) return null;
  const s = id.toString();
  return ObjectId.isValid(s) ? new ObjectId(s) : null;
};

function interleaveArray(nonAR, ar) {
  if (!ar.length) return [...nonAR];
  if (!nonAR.length) return [...ar];

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

async function run() {
  console.log('🚀 Fast batch balancing AR questions across all test papers...');
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const testPapers = await db.collection('testPapers').find().toArray();
  console.log(`📊 Found ${testPapers.length} test papers.`);

  // Load questionBank cache for faster lookups: map of _id -> question
  console.log('⚡ Indexing question metadata...');
  const allValidObjectIds = [];
  testPapers.forEach(tp => {
    (tp.questions || []).forEach(q => {
      const s = (q && typeof q === 'object' && q._id) ? q._id.toString() : (q ? q.toString() : '');
      const objId = toValidObjectId(s);
      if (objId) allValidObjectIds.push(objId);
    });
  });

  const qDocs = await db.collection('questionBank').find(
    { _id: { $in: allValidObjectIds } },
    { projection: { _id: 1, subject: 1, chapter: 1, subTopic: 1, topic: 1, questionType: 1, type: 1, question: 1, text: 1 } }
  ).toArray();
  const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));
  console.log(`✅ Loaded ${qMap.size} questions from questionBank.`);

  let bulkOps = [];
  let updatedCount = 0;

  for (let idx = 0; idx < testPapers.length; idx++) {
    const tp = testPapers[idx];
    const rawQuestions = tp.questions || [];
    if (!rawQuestions.length) continue;

    // Resolve question objects (either from qMap if ObjectId, or direct object)
    const ordered = rawQuestions.map(q => {
      if (q && typeof q === 'object' && q.question) return q;
      const s = (q && typeof q === 'object' && q._id) ? q._id.toString() : (q ? q.toString() : '');
      return qMap.get(s);
    }).filter(Boolean);

    const totalAR = ordered.filter(isAR).length;

    let hasConsecutive = false;
    for (let i = 0; i < ordered.length - 1; i++) {
      if (isAR(ordered[i]) && isAR(ordered[i + 1])) {
        hasConsecutive = true;
        break;
      }
    }

    if (totalAR <= 6 && !hasConsecutive) continue;

    // Group questions by subject
    const subjects = [];
    const bySubj = new Map();
    for (const q of ordered) {
      const s = q.subject || 'Other';
      if (!bySubj.has(s)) {
        subjects.push(s);
        bySubj.set(s, []);
      }
      bySubj.get(s).push(q);
    }

    const maxTotalAR = 6;
    const arToKeepTotal = Math.min(totalAR, maxTotalAR);

    // Subject quotas
    const subjQuotas = new Map();
    let remainingQuota = arToKeepTotal;
    const numSubjs = subjects.length;
    const baseQuota = Math.floor(arToKeepTotal / numSubjs);

    for (const s of subjects) {
      const sAR = bySubj.get(s).filter(isAR).length;
      const q = Math.min(sAR, baseQuota);
      subjQuotas.set(s, q);
      remainingQuota -= q;
    }
    for (const s of subjects) {
      if (remainingQuota <= 0) break;
      const sAR = bySubj.get(s).filter(isAR).length;
      const cur = subjQuotas.get(s);
      if (sAR > cur) {
        subjQuotas.set(s, cur + 1);
        remainingQuota--;
      }
    }

    const usedIds = new Set(ordered.map(q => q._id ? q._id.toString() : q.id?.toString()).filter(Boolean));
    let finalQuestions = [];

    for (const s of subjects) {
      const sQs = bySubj.get(s);
      const sAR = sQs.filter(isAR);
      const sNonAR = sQs.filter(q => !isAR(q));

      const quota = subjQuotas.get(s) || 0;
      const keptAR = sAR.slice(0, quota);
      const excessCount = sAR.length - quota;

      let replacements = [];
      if (excessCount > 0) {
        const topics = [...new Set(sQs.map(q => q.subTopic || q.chapter || q.topic).filter(Boolean))];
        const topicFilter = topics.length > 0 ? {
          $or: [
            { subTopic: { $in: topics } },
            { chapter: { $in: topics } },
            { topic: { $in: topics } }
          ]
        } : {};

        const filterIds = [...usedIds].map(toValidObjectId).filter(Boolean);

        const candidates = await db.collection('questionBank').find({
          _id: { $nin: filterIds },
          subject: s,
          ...topicFilter,
          $nor: [
            { questionType: { $regex: /assertion|ar/i } },
            { type: { $regex: /assertion|ar/i } }
          ]
        }).limit(excessCount).toArray();

        candidates.forEach(c => {
          replacements.push(c);
          usedIds.add(c._id.toString());
          qMap.set(c._id.toString(), c);
        });

        // If not enough from exact topics, fallback to subject
        if (replacements.length < excessCount) {
          const needed = excessCount - replacements.length;
          const fallbackFilterIds = [...usedIds].map(toValidObjectId).filter(Boolean);
          const fallbackCandidates = await db.collection('questionBank').find({
            _id: { $nin: fallbackFilterIds },
            subject: s,
            $nor: [
              { questionType: { $regex: /assertion|ar/i } },
              { type: { $regex: /assertion|ar/i } }
            ]
          }).limit(needed).toArray();

          fallbackCandidates.forEach(c => {
            replacements.push(c);
            usedIds.add(c._id.toString());
            qMap.set(c._id.toString(), c);
          });
        }
      }

      const mergedNonAR = [...sNonAR, ...replacements];
      const balancedSubj = interleaveArray(mergedNonAR, keptAR);
      finalQuestions.push(...balancedSubj);
    }

    if (finalQuestions.length < ordered.length) {
      const finalIds = new Set(finalQuestions.map(q => q._id ? q._id.toString() : q.id?.toString()).filter(Boolean));
      for (const orig of ordered) {
        const oId = orig._id ? orig._id.toString() : orig.id?.toString();
        if (!finalIds.has(oId)) {
          finalQuestions.push(orig);
          finalIds.add(oId);
          if (finalQuestions.length >= ordered.length) break;
        }
      }
    }

    // Convert to questions array format: if original questions were ObjectIds, use ObjectIds, else objects
    const areOriginalsObjectIds = rawQuestions.some(q => toValidObjectId(q));
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
    if (bulkOps.length >= 50) {
      await db.collection('testPapers').bulkWrite(bulkOps, { ordered: false });
      process.stdout.write(`\rProgress: ${updatedCount} tests updated...`);
      bulkOps = [];
    }
  }

  if (bulkOps.length > 0) {
    await db.collection('testPapers').bulkWrite(bulkOps, { ordered: false });
  }

  console.log(`\n\n🎉 Done! Updated ${updatedCount} test papers.`);

  // Final verification audit
  console.log('🔍 Final verification audit across all test papers...');
  let over6 = 0;
  let consec = 0;
  const recheck = await db.collection('testPapers').find().toArray();
  for (const tp of recheck) {
    const raw = tp.questions || [];
    if (!raw.length) continue;
    const qs = raw.map(q => {
      if (q && typeof q === 'object' && q.question) return q;
      const s = (q && typeof q === 'object' && q._id) ? q._id.toString() : (q ? q.toString() : '');
      return qMap.get(s);
    }).filter(Boolean);

    const ar = qs.filter(isAR).length;
    let hasC = false;
    for (let i = 0; i < qs.length - 1; i++) {
      if (isAR(qs[i]) && isAR(qs[i + 1])) {
        hasC = true;
        break;
      }
    }
    if (ar > 6) over6++;
    if (hasC && ar > 1) consec++;
  }

  console.log(`- Tests with > 6 AR questions: ${over6}`);
  console.log(`- Tests with consecutive AR questions: ${consec}`);

  await client.close();
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
