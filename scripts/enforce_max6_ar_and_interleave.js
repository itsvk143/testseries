require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

const isAR = q => {
  if (!q) return false;
  const t = (q.questionType || q.type || '').toUpperCase();
  return t.includes('ASSERTION') || t.includes('AR');
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
  console.log('🚀 Starting enforce_max6_ar_and_interleave across all test papers...');
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const testPapers = await db.collection('testPapers').find().toArray();
  console.log(`📊 Found ${testPapers.length} test papers in database.`);

  let updatedTestsCount = 0;
  let skippedCount = 0;

  for (let idx = 0; idx < testPapers.length; idx++) {
    const tp = testPapers[idx];
    const qIds = tp.questions || [];
    if (!qIds.length) {
      skippedCount++;
      continue;
    }

    const qs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
    const qMap = new Map(qs.map(q => [q._id.toString(), q]));
    const ordered = qIds.map(id => qMap.get(id.toString())).filter(Boolean);

    const totalAR = ordered.filter(isAR).length;
    let hasConsecutive = false;
    for (let i = 0; i < ordered.length - 1; i++) {
      if (isAR(ordered[i]) && isAR(ordered[i + 1])) {
        hasConsecutive = true;
        break;
      }
    }

    // Only process if it has > 6 AR questions or has consecutive AR questions
    if (totalAR <= 6 && !hasConsecutive) {
      continue;
    }

    // Group questions by subject to preserve subject sequence
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

    // Calculate quota per subject
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

    const usedIds = new Set(qIds.map(id => id.toString()));
    let finalQuestions = [];

    for (const s of subjects) {
      const sQs = bySubj.get(s);
      const sAR = sQs.filter(isAR);
      const sNonAR = sQs.filter(q => !isAR(q));

      const quota = subjQuotas.get(s) || 0;
      const keptAR = sAR.slice(0, quota);
      const excessAR = sAR.slice(quota);

      const replacements = [];
      for (const ex of excessAR) {
        // Find matching topic MCQ
        const candidate = await db.collection('questionBank').findOne({
          _id: { $nin: [...usedIds].map(id => new ObjectId(id)) },
          subject: s,
          $or: [
            { subTopic: ex.subTopic || '__none__' },
            { chapter: ex.chapter || '__none__' },
            { topic: ex.topic || '__none__' }
          ],
          $nor: [
            { questionType: { $regex: /assertion|ar/i } },
            { type: { $regex: /assertion|ar/i } }
          ]
        }) || await db.collection('questionBank').findOne({
          _id: { $nin: [...usedIds].map(id => new ObjectId(id)) },
          subject: s,
          $nor: [
            { questionType: { $regex: /assertion|ar/i } },
            { type: { $regex: /assertion|ar/i } }
          ]
        });

        if (candidate) {
          replacements.push(candidate);
          usedIds.add(candidate._id.toString());
        } else {
          keptAR.push(ex);
        }
      }

      const mergedNonAR = [...sNonAR, ...replacements];
      const balancedSubj = interleaveArray(mergedNonAR, keptAR);
      finalQuestions.push(...balancedSubj);
    }

    // Final safety check: if length differs due to missing questions, pad with original
    if (finalQuestions.length < ordered.length) {
      const finalIds = new Set(finalQuestions.map(q => q._id.toString()));
      for (const orig of ordered) {
        if (!finalIds.has(orig._id.toString())) {
          finalQuestions.push(orig);
          finalIds.add(orig._id.toString());
          if (finalQuestions.length >= ordered.length) break;
        }
      }
    }

    const newQIds = finalQuestions.map(q => q._id);
    await db.collection('testPapers').updateOne(
      { _id: tp._id },
      { $set: { questions: newQIds, updatedAt: new Date() } }
    );

    updatedTestsCount++;
    if (updatedTestsCount % 25 === 0 || updatedTestsCount === 1) {
      process.stdout.write(`\r[${idx + 1}/${testPapers.length}] Updated: ${updatedTestsCount} tests...`);
    }
  }

  console.log(`\n\n🎉 COMPLETED! Successfully balanced and interleaved ${updatedTestsCount} test papers.`);

  // Audit results across all tests
  console.log('\n🔍 Running full audit across all test papers in DB...');
  let remainingOver6 = 0;
  let remainingConsec = 0;
  const recheckTests = await db.collection('testPapers').find().toArray();

  for (const tp of recheckTests) {
    const qIds = tp.questions || [];
    if (!qIds.length) continue;
    const qs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
    const qMap = new Map(qs.map(q => [q._id.toString(), q]));
    const ordered = qIds.map(id => qMap.get(id.toString())).filter(Boolean);

    const arCount = ordered.filter(isAR).length;
    let hasConsec = false;
    for (let i = 0; i < ordered.length - 1; i++) {
      if (isAR(ordered[i]) && isAR(ordered[i + 1])) {
        hasConsec = true;
        break;
      }
    }
    if (arCount > 6) remainingOver6++;
    if (hasConsec && arCount > 1) remainingConsec++;
  }

  console.log(`- Tests with > 6 AR questions: ${remainingOver6}`);
  console.log(`- Tests with consecutive AR questions: ${remainingConsec}`);

  await client.close();
}

run().catch(err => {
  console.error('Migration error:', err);
  process.exit(1);
});
