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

function norm(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[–—−]/g, '-')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

async function dryRunAudit() {
  const client = new MongoClient(process.env.MONGODB_URI, {
    connectTimeoutMS: 45000,
    socketTimeoutMS: 45000
  });
  await client.connect();
  const db = client.db();

  const targets = JSON.parse(fs.readFileSync('scripts/neet_chapter_test_targets.json', 'utf8'));
  const allTests = await db.collection('testPapers').find({ testId: { $in: Object.keys(targets) } }).toArray();

  let totalQuestions = 0;
  let wrongExamCount = 0;
  let wrongSubjectCount = 0;
  let wrongChapterCount = 0;
  let exactDupCount = 0;
  let highSimDupCount = 0;
  let modSimCount = 0;
  let dupIdCount = 0;
  const testsWithIssues = new Set();
  const testBreakdown = [];

  for (const test of allTests) {
    const target = targets[test.testId];
    const qIds = test.questions || [];
    totalQuestions += qIds.length;

    let tWrongExam = 0;
    let tWrongSubj = 0;
    let tWrongChap = 0;
    let tExactDup = 0;
    let tHighDup = 0;
    let tModSim = 0;
    let tDupId = 0;

    const seenIds = new Set();
    qIds.forEach(id => {
      const idStr = id.toString();
      if (seenIds.has(idStr)) {
        dupIdCount++;
        tDupId++;
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
        console.warn(`Missing in Question Bank: ${qId} in ${test.testId}`);
        continue;
      }
      testQuestions.push(q);

      let issue = false;
      // Exam check: question should be compatible with NEET
      if (q.exam && !q.exam.toLowerCase().includes('neet')) {
        wrongExamCount++;
        tWrongExam++;
        issue = true;
      }

      // Subject check
      if (q.subject && norm(q.subject) !== norm(target.subject)) {
        wrongSubjectCount++;
        tWrongSubj++;
        issue = true;
      }

      // Chapter check
      if (norm(q.chapter) !== norm(target.targetChapter)) {
        wrongChapterCount++;
        tWrongChap++;
        issue = true;
      }

      if (issue) {
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
          tExactDup++;
          testsWithIssues.add(test.testId);
        } else {
          const tokensB = tokenize(qB.question || qB.questionText || '');
          const sim = jaccard(tokensA, tokensB);
          if (sim >= 0.85) {
            highSimDupCount++;
            tHighDup++;
            testsWithIssues.add(test.testId);
          } else if (sim >= 0.65) {
            modSimCount++;
            tModSim++;
          }
        }
      }
    }

    testBreakdown.push({
      testId: test.testId,
      subject: target.subject,
      chapter: target.targetChapter,
      questions: qIds.length,
      wrongExam: tWrongExam,
      wrongSubject: tWrongSubj,
      wrongChapter: tWrongChap,
      exactDup: tExactDup,
      highDup: tHighDup,
      modSim: tModSim,
      dupIds: tDupId
    });
  }

  console.log('\n--- DRY RUN AUDIT SUMMARY ---');
  console.log('Total tests audited:', allTests.length);
  console.log('Total questions audited:', totalQuestions);
  console.log('Tests with errors:', testsWithIssues.size);
  console.log('Tests with no errors:', allTests.length - testsWithIssues.size);
  console.log('Wrong Exam:', wrongExamCount);
  console.log('Wrong Subject:', wrongSubjectCount);
  console.log('Wrong Chapter:', wrongChapterCount);
  console.log('Duplicate Question IDs:', dupIdCount);
  console.log('Exact Duplicates:', exactDupCount);
  console.log('High-Similarity Duplicates:', highSimDupCount);
  console.log('Moderate-Similarity Matches:', modSimCount);

  console.log('\n--- TESTS WITH ISSUES ---');
  testBreakdown.filter(tb => tb.wrongExam > 0 || tb.wrongSubject > 0 || tb.wrongChapter > 0 || tb.exactDup > 0 || tb.highDup > 0 || tb.dupIds > 0).forEach(tb => {
    console.log(`[ISSUE] ${tb.testId} | Subj: ${tb.subject} | Chap: ${tb.chapter} | Qs: ${tb.questions} | WrongExam: ${tb.wrongExam} | WrongSubj: ${tb.wrongSubject} | WrongChap: ${tb.wrongChapter} | ExactDup: ${tb.exactDup} | HighDup: ${tb.highDup}`);
  });

  await client.close();
}

dryRunAudit().catch(console.error);
