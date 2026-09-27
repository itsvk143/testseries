require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');

function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/\\(text|mathrm|mathbf|textit)\{([^}]+)\}/g, '$2')
    .replace(/\$/g, ' ')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return new Set(normalizeText(text).split(/\s+/).filter(w => w.length > 2));
}

function jaccard(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let inter = 0;
  for (const item of setA) {
    if (setB.has(item)) inter++;
  }
  return inter / (setA.size + setB.size - inter);
}

async function dryRunAudit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  const targets = JSON.parse(fs.readFileSync('scripts/jee_physics_chapter_test_targets.json', 'utf8'));
  const allTests = await db.collection('testPapers').find({ testId: { $in: Object.keys(targets) } }).toArray();

  let totalQuestions = 0;
  let wrongChapterCount = 0;
  let wrongExamCount = 0;
  let wrongSubjectCount = 0;
  let exactDupCount = 0;
  let highSimDupCount = 0;
  let modSimCount = 0;
  let dupIdCount = 0;
  const testsWithIssues = new Set();

  for (const test of allTests) {
    const target = targets[test.testId];
    const qIds = test.questions || [];
    totalQuestions += qIds.length;

    const seenIds = new Set();
    qIds.forEach(id => {
      const idStr = id.toString();
      if (seenIds.has(idStr)) {
        dupIdCount++;
        testsWithIssues.add(test.testId);
      }
      seenIds.add(idStr);
    });

    const objIds = qIds.map(id => {
      try { return new ObjectId(id); } catch(e) { return id; }
    });

    const questions = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
    const qMap = new Map();
    questions.forEach(q => qMap.set(q._id.toString(), q));

    const testQuestions = [];
    for (const qId of qIds) {
      const q = qMap.get(qId.toString());
      if (!q) {
        console.warn(`Question missing in Question Bank: ${qId} in ${test.testId}`);
        continue;
      }
      testQuestions.push(q);

      // Chapter validation
      if (q.chapter !== target.targetChapter) {
        wrongChapterCount++;
        testsWithIssues.add(test.testId);
        console.log(`Wrong Chapter in ${test.testId}: QID=${q._id} has "${q.chapter}", expected "${target.targetChapter}"`);
      }
      if (q.exam && !q.exam.toLowerCase().includes('jee')) {
        wrongExamCount++;
        testsWithIssues.add(test.testId);
      }
      if (q.subject && !q.subject.toLowerCase().includes('phys')) {
        wrongSubjectCount++;
        testsWithIssues.add(test.testId);
      }
    }

    // Check duplicates within test
    for (let i = 0; i < testQuestions.length; i++) {
      const qA = testQuestions[i];
      const normA = normalizeText(qA.question || qA.questionText || '');
      const tokensA = tokenize(qA.question || qA.questionText || '');

      for (let j = i + 1; j < testQuestions.length; j++) {
        const qB = testQuestions[j];
        const normB = normalizeText(qB.question || qB.questionText || '');
        if (normA && normB && normA === normB) {
          exactDupCount++;
          testsWithIssues.add(test.testId);
          console.log(`Exact duplicate in ${test.testId}: QID1=${qA._id}, QID2=${qB._id}`);
        } else {
          const tokensB = tokenize(qB.question || qB.questionText || '');
          const sim = jaccard(tokensA, tokensB);
          if (sim >= 0.85) {
            highSimDupCount++;
            testsWithIssues.add(test.testId);
            console.log(`High similarity (${(sim*100).toFixed(1)}%) in ${test.testId}: QID1=${qA._id}, QID2=${qB._id}`);
          } else if (sim >= 0.65) {
            modSimCount++;
          }
        }
      }
    }
  }

  console.log('\n--- DRY RUN AUDIT SUMMARY ---');
  console.log('Total tests audited:', allTests.length);
  console.log('Total questions audited:', totalQuestions);
  console.log('Tests with errors:', testsWithIssues.size);
  console.log('Tests with no errors:', allTests.length - testsWithIssues.size);
  console.log('Wrong Chapter:', wrongChapterCount);
  console.log('Wrong Exam:', wrongExamCount);
  console.log('Wrong Subject:', wrongSubjectCount);
  console.log('Duplicate Question IDs:', dupIdCount);
  console.log('Exact Duplicates:', exactDupCount);
  console.log('High-Similarity Duplicates:', highSimDupCount);
  console.log('Moderate-Similarity Matches:', modSimCount);

  await client.close();
}

dryRunAudit().catch(console.error);
