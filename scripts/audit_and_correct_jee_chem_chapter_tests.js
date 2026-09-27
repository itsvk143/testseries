require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');

function norm(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[–—−]/g, '-')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

const CHAPTER_SYNONYMS = {
  [norm('Some Basic Concepts of Chemistry')]: 'Some Basic Concepts in Chemistry',
  [norm('Some Basic Concepts in Chemistry')]: 'Some Basic Concepts in Chemistry',
  [norm('Structure of Atom')]: 'Atomic Structure',
  [norm('Atomic Structure')]: 'Atomic Structure',
  [norm('Classification of Elements and Periodicity in Properties')]: 'Classification of Elements and Periodicity in Properties',
  [norm('Chemical Bonding and Molecular Structure')]: 'Chemical Bonding and Molecular Structure',
  [norm('Chemical Thermodynamics')]: 'Chemical Thermodynamics',
  [norm('Thermodynamics')]: 'Chemical Thermodynamics',
  [norm('Equilibrium')]: 'Equilibrium',
  [norm('Redox Reactions and Electrochemistry')]: 'Redox Reactions and Electrochemistry',
  [norm('Solutions')]: 'Solutions',
  [norm('Chemical Kinetics')]: 'Chemical Kinetics',
  [norm('Surface Chemistry')]: 'Surface Chemistry',
  [norm('P-Block Elements')]: 'P-Block Elements',
  [norm('d- and f-Block Elements')]: 'd and f- Block Elements',
  [norm('d and f- Block Elements')]: 'd and f- Block Elements',
  [norm('Co-ordination Compounds')]: 'Co-ordination Compounds',
  [norm('Coordination Compounds')]: 'Co-ordination Compounds',
  [norm('Purification and Characterisation of Organic Compounds')]: 'Purification and Characterisation of Organic Compounds',
  [norm('Some Basic Principles of Organic Chemistry')]: 'Some Basic Principles of Organic Chemistry',
  [norm('Hydrocarbons')]: 'Hydrocarbons',
  [norm('Organic Compounds Containing Halogens')]: 'Organic Compounds Containing Halogens',
  [norm('Organic Compounds Containing Oxygen')]: 'Organic Compounds Containing Oxygen',
  [norm('Organic Compounds Containing Nitrogen')]: 'Organic Compounds Containing Nitrogen',
  [norm('Biomolecules')]: 'Biomolecules',
  [norm('Principles Related to Practical Chemistry')]: 'Principles Related to Practical Chemistry',
  [norm('Organic Name Reactions')]: 'Organic Name Reactions',
  [norm('Organic Reaction Mechanism')]: 'Organic Reaction Mechanism',
  [norm('Solid State')]: 'Solid State',
  [norm('States of Matter')]: 'States of Matter'
};

function normalizeDifficulty(diff) {
  if (!diff) return 'MODERATE';
  const s = diff.toString().toLowerCase();
  if (s.includes('easy')) return 'EASY';
  if (s.includes('diff') || s.includes('hard')) return 'DIFFICULT';
  if (s.includes('mod') || s.includes('med')) return 'MODERATE';
  return 'MODERATE';
}

function normalizeType(t) {
  if (!t) return 'MCQ';
  const s = t.toString().toLowerCase();
  if (s.includes('assert') || s.includes('ar')) return 'ASSERTION_REASON';
  if (s.includes('num')) return 'NUMERICAL';
  return 'MCQ';
}

function normalizeExactText(text) {
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
  return new Set(
    normalizeExactText(text)
      .split(/\s+/)
      .filter(w => w.length > 2)
  );
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  return intersection / (setA.size + setB.size - intersection);
}

function scoreQuality(q) {
  let score = 0;
  if (Array.isArray(q.options) && q.options.length >= 4) score += 30;
  if (q.correctOption !== undefined || q.answer !== undefined) score += 25;
  if (q.explanation && q.explanation.length > 20) score += 20;
  if (q.difficulty) score += 10;
  return score;
}

async function runJeeChemChapterAuditAndCorrection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('ERROR: MONGODB_URI is not set in environment or .env.local');
    process.exit(1);
  }

  const client = new MongoClient(uri, { connectTimeoutMS: 30000 });
  await client.connect();
  const db = client.db();

  console.log('Successfully connected to MongoDB.');

  // Load target mapping
  const targetMapPath = path.join(__dirname, 'jee_chem_chapter_test_targets.json');
  if (!fs.existsSync(targetMapPath)) {
    console.error('Target map file missing! Run build step first.');
    process.exit(1);
  }
  const testTargets = JSON.parse(fs.readFileSync(targetMapPath, 'utf8'));

  // Step 1: Discover all JEE Main Chemistry Chapter-wise tests in DB
  const allTests = await db.collection('testPapers').find({}).toArray();
  const papers = allTests.filter(t => {
    const isJee = (t.exam || '').toLowerCase().includes('jee') || (t.category || '').toLowerCase().includes('jee') || (t.testId || '').toLowerCase().startsWith('jee');
    const isChem = (t.subject || '').toLowerCase().includes('chem') || (t.testId || '').toLowerCase().includes('chem');
    const isChap = (t.testType || '').toLowerCase() === 'chapter' || (t.type || '').toLowerCase() === 'chapter' || (t.testId || '').includes('-CHAPTER-');
    const notSubtopic = !(t.testId || '').toLowerCase().includes('subtopic');
    return isJee && isChem && isChap && notSubtopic;
  });

  console.log(`Discovered ${papers.length} JEE Main Chemistry Chapter-wise tests to audit.\n`);

  // Step 2: Create pre-audit snapshot (Section 23)
  const snapshotTimestamp = Date.now();
  const preAuditSnapshot = papers.map(p => {
    const key = p.testId || String(p._id);
    const target = testTargets[key] || {};
    return {
      testId: p.testId,
      _id: String(p._id),
      title: p.title,
      chapter: p.chapter || target.targetChapter || 'UNKNOWN',
      questionCount: (p.questions || []).length,
      originalQuestionIds: (p.questions || []).map(id => id.toString())
    };
  });

  const snapshotPath = path.join(__dirname, `jee_chem_chapter_audit_snapshot_${snapshotTimestamp}.json`);
  fs.writeFileSync(snapshotPath, JSON.stringify(preAuditSnapshot, null, 2));
  console.log(`Pre-audit snapshot safely saved to: ${snapshotPath}\n`);

  // Metrics
  let totalTestsAudited = papers.length;
  let totalQuestionsChecked = 0;
  let totalWrongChapterFound = 0;
  let totalWrongExamFound = 0;
  let totalWrongSubjectFound = 0;
  let totalExactDuplicatesFound = 0;
  let totalHighSimDuplicatesFound = 0;
  let totalModerateSimMatchesFound = 0;

  let totalReplacementsApplied = 0;
  let moderateReplacements = 0;
  let difficultReplacements = 0;
  let easyReplacements = 0;

  let testsWithNoErrors = 0;
  let testsCorrected = 0;
  let testsRequiringManualAttention = 0;

  const allReplacementLogs = [];
  const manualAttentionReports = [];
  const testReportTable = [];

  for (const paper of papers) {
    const testKey = paper.testId || String(paper._id);
    const target = testTargets[testKey] || {};
    const targetChapter = target.targetChapter || CHAPTER_SYNONYMS[norm(paper.chapter)] || paper.chapter || paper.title;

    const qIds = paper.questions || [];
    totalQuestionsChecked += qIds.length;

    let testWrongChap = 0;
    let testExactDup = 0;
    let testHighDup = 0;
    let testModSim = 0;
    let testReplaced = 0;

    if (qIds.length === 0) {
      testsWithNoErrors++;
      testReportTable.push({
        testId: paper.testId,
        chapter: targetChapter,
        questions: 0,
        wrongChapter: 0,
        duplicates: 0,
        replaced: 0,
        manualAttention: 0,
        finalStatus: 'PASS'
      });
      continue;
    }

    const objIds = qIds.map(id => {
      try { return new ObjectId(id); } catch (e) { return id; }
    });

    const dbQuestions = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
    const qMap = new Map();
    dbQuestions.forEach(q => qMap.set(q._id.toString(), q));

    const mappedQuestions = [];
    const questionsToReplace = new Map();
    const validKeptIds = new Set();
    const validKeptTexts = new Set();
    const validKeptTokens = [];

    // Step 3: Validate each question against target Chapter (Section 4, 6, 7)
    for (let i = 0; i < qIds.length; i++) {
      const idStr = qIds[i].toString();
      const q = qMap.get(idStr);

      if (!q) {
        questionsToReplace.set(idStr, {
          index: i,
          reason: 'MISSING_IN_QUESTION_BANK',
          chapter: 'UNKNOWN',
          difficulty: 'MODERATE',
          type: 'MCQ',
          text: '',
          qObj: null
        });
        continue;
      }

      mappedQuestions.push({ index: i, idStr, q });

      let isInvalid = false;

      // Exam check
      if (q.exam && !q.exam.toLowerCase().includes('jee')) {
        totalWrongExamFound++;
        questionsToReplace.set(idStr, {
          index: i,
          reason: 'WRONG_EXAM',
          chapter: q.chapter,
          difficulty: normalizeDifficulty(q.difficulty),
          type: normalizeType(q.type || q.questionType),
          text: q.question || q.questionText,
          qObj: q
        });
        isInvalid = true;
      }

      // Subject check
      if (!isInvalid && q.subject && !q.subject.toLowerCase().includes('chem')) {
        totalWrongSubjectFound++;
        questionsToReplace.set(idStr, {
          index: i,
          reason: 'WRONG_SUBJECT',
          chapter: q.chapter,
          difficulty: normalizeDifficulty(q.difficulty),
          type: normalizeType(q.type || q.questionType),
          text: q.question || q.questionText,
          qObj: q
        });
        isInvalid = true;
      }

      // Chapter check (Section 4, 6: exact chapter validation)
      if (!isInvalid) {
        const qChapterCanonical = CHAPTER_SYNONYMS[norm(q.chapter)] || q.chapter;
        if (norm(qChapterCanonical) !== norm(targetChapter)) {
          totalWrongChapterFound++;
          testWrongChap++;
          questionsToReplace.set(idStr, {
            index: i,
            reason: 'WRONG_CHAPTER',
            chapter: q.chapter,
            difficulty: normalizeDifficulty(q.difficulty),
            type: normalizeType(q.type || q.questionType),
            text: q.question || q.questionText,
            qObj: q
          });
          isInvalid = true;
        }
      }

      if (!isInvalid) {
        validKeptIds.add(idStr);
        const normText = normalizeExactText(q.question || q.questionText);
        if (normText) validKeptTexts.add(normText);
        validKeptTokens.push(tokenize(q.question || q.questionText));
      }
    }

    // Step 4: Duplicate Detection (Exact & High Similarity) among valid questions (Section 13, 16, 17)
    const validQuestions = mappedQuestions.filter(mq => !questionsToReplace.has(mq.idStr));
    const dupPairs = [];

    for (let i = 0; i < validQuestions.length; i++) {
      const qA = validQuestions[i].q;
      const idA = validQuestions[i].idStr;
      const normA = normalizeExactText(qA.question || qA.questionText);
      const tokensA = tokenize(qA.question || qA.questionText);

      for (let j = i + 1; j < validQuestions.length; j++) {
        const qB = validQuestions[j].q;
        const idB = validQuestions[j].idStr;
        const normB = normalizeExactText(qB.question || qB.questionText);

        if (normA && normB && normA === normB) {
          totalExactDuplicatesFound++;
          testExactDup++;
          dupPairs.push({ idA, idB, type: 'EXACT_DUPLICATE', sim: 1.0 });
        } else {
          const tokensB = tokenize(qB.question || qB.questionText);
          const sim = jaccardSimilarity(tokensA, tokensB);

          if (sim >= 0.85) {
            totalHighSimDuplicatesFound++;
            testHighDup++;
            dupPairs.push({ idA, idB, type: 'HIGH_SIMILARITY_DUPLICATE', sim });
          } else if (sim >= 0.65) {
            totalModerateSimMatchesFound++;
            testModSim++;
          }
        }
      }
    }

    // Form duplicate clusters and retain best representative (Section 16)
    if (dupPairs.length > 0) {
      const parent = {};
      function find(x) {
        if (!parent[x]) parent[x] = x;
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]);
      }
      function union(x, y) {
        const px = find(x);
        const py = find(y);
        if (px !== py) parent[px] = py;
      }

      dupPairs.forEach(p => union(p.idA, p.idB));

      const clusters = {};
      dupPairs.forEach(p => {
        const root = find(p.idA);
        if (!clusters[root]) clusters[root] = new Set();
        clusters[root].add(p.idA);
        clusters[root].add(p.idB);
      });

      for (const [root, clusterSet] of Object.entries(clusters)) {
        const clusterQuestions = Array.from(clusterSet).map(id => qMap.get(id)).filter(Boolean);
        clusterQuestions.sort((a, b) => scoreQuality(b) - scoreQuality(a));

        const kept = clusterQuestions[0];
        const toRemove = clusterQuestions.slice(1);

        for (const rem of toRemove) {
          const remId = rem._id.toString();
          if (!questionsToReplace.has(remId)) {
            const pairInfo = dupPairs.find(p => (p.idA === remId && p.idB === kept._id.toString()) || (p.idB === remId && p.idA === kept._id.toString()));
            questionsToReplace.set(remId, {
              index: qIds.findIndex(id => id.toString() === remId),
              reason: pairInfo ? pairInfo.type : 'HIGH_SIMILARITY_DUPLICATE',
              duplicateType: pairInfo ? pairInfo.type : 'HIGH_SIMILARITY_DUPLICATE',
              similarityScore: pairInfo ? pairInfo.sim : 0.9,
              chapter: rem.chapter,
              difficulty: normalizeDifficulty(rem.difficulty),
              type: normalizeType(rem.type || rem.questionType),
              text: rem.question || rem.questionText,
              qObj: rem
            });
            validKeptIds.delete(remId);
          }
        }
      }
    }

    // Step 5: Check if test has errors
    if (questionsToReplace.size === 0) {
      // Ensure type and chapter are properly set in DB
      await db.collection('testPapers').updateOne(
        { _id: paper._id },
        {
          $set: {
            type: 'CHAPTER',
            chapter: targetChapter,
            updatedAt: new Date()
          }
        }
      );
      testsWithNoErrors++;
      testReportTable.push({
        testId: paper.testId,
        chapter: targetChapter,
        questions: qIds.length,
        wrongChapter: 0,
        duplicates: 0,
        replaced: 0,
        manualAttention: 0,
        finalStatus: 'PASS'
      });
      continue;
    }

    // Step 6: Find valid Moderate or Difficult replacement questions from same chapter (Section 8, 9, 10)
    const candidateQuery = {
      subject: { $regex: /^chemistry$/i },
      chapter: targetChapter
    };

    const candidates = await db.collection('questionBank').find(candidateQuery).toArray();

    // STRICT RULE: Moderate or Difficult ONLY (Never Easy - Section 9)
    const validCandidates = candidates.filter(c => {
      const diff = normalizeDifficulty(c.difficulty);
      return diff !== 'EASY';
    });

    const usedCandidateIds = new Set(validKeptIds);
    const usedCandidateTexts = new Set(validKeptTexts);
    const usedCandidateTokens = [...validKeptTokens];

    const plannedReplacements = [];
    let shortage = 0;

    for (const [remId, remInfo] of questionsToReplace.entries()) {
      let bestCand = null;
      let bestScore = -1;

      for (const cand of validCandidates) {
        const cIdStr = cand._id.toString();
        if (usedCandidateIds.has(cIdStr)) continue;

        const cNormText = normalizeExactText(cand.question || cand.text || cand.questionText);
        if (cNormText && usedCandidateTexts.has(cNormText)) continue;

        const cTokens = tokenize(cand.question || cand.text || cand.questionText);
        let nearDup = false;
        for (const existingTokens of usedCandidateTokens) {
          if (jaccardSimilarity(cTokens, existingTokens) >= 0.85) {
            nearDup = true;
            break;
          }
        }
        if (nearDup) continue;

        const cDiff = normalizeDifficulty(cand.difficulty);
        const cType = normalizeType(cand.type || cand.questionType);

        // Section 10: Replacement Priority Order
        // Priority 1: Same Chapter + Same Question Type + Difficult
        // Priority 2: Same Chapter + Same Question Type + Moderate
        // Priority 3: Same Chapter + Difficult
        // Priority 4: Same Chapter + Moderate
        let score = 0;
        if (remInfo.difficulty === 'DIFFICULT') {
          if (cDiff === 'DIFFICULT' && cType === remInfo.type) score = 100;
          else if (cDiff === 'MODERATE' && cType === remInfo.type) score = 90;
          else if (cDiff === 'DIFFICULT') score = 80;
          else score = 70;
        } else {
          if (cDiff === 'MODERATE' && cType === remInfo.type) score = 100;
          else if (cDiff === 'DIFFICULT' && cType === remInfo.type) score = 90;
          else if (cDiff === 'MODERATE') score = 80;
          else score = 70;
        }

        if (score > bestScore) {
          bestScore = score;
          bestCand = cand;
          if (score === 100) break; // Optimal match found
        }
      }

      if (!bestCand) {
        shortage++;
        break;
      }

      const cIdStr = bestCand._id.toString();
      usedCandidateIds.add(cIdStr);
      const cNormText = normalizeExactText(bestCand.question || bestCand.text || bestCand.questionText);
      if (cNormText) usedCandidateTexts.add(cNormText);
      usedCandidateTokens.push(tokenize(bestCand.question || bestCand.text || bestCand.questionText));

      const candDiff = normalizeDifficulty(bestCand.difficulty);
      const candType = normalizeType(bestCand.type || bestCand.questionType);

      plannedReplacements.push({
        remId,
        remInfo,
        candId: bestCand._id,
        candDiff,
        candType,
        candChapter: bestCand.chapter,
        candObj: bestCand
      });
    }

    // Step 7: Handle Shortage / Manual Attention (Section 22)
    if (shortage > 0 || plannedReplacements.length < questionsToReplace.size) {
      testsRequiringManualAttention++;
      manualAttentionReports.push({
        testId: paper.testId,
        chapter: targetChapter,
        requiredReplacements: questionsToReplace.size,
        availableReplacements: plannedReplacements.length,
        shortage,
        reason: 'INSUFFICIENT_VALID_MODERATE_OR_DIFFICULT_NON_DUPLICATE_QUESTIONS'
      });
      console.warn(`[MANUAL ATTENTION NEEDED] ${paper.testId}: Shortage of ${shortage} questions in ${targetChapter}`);
      testReportTable.push({
        testId: paper.testId,
        chapter: targetChapter,
        questions: qIds.length,
        wrongChapter: testWrongChap,
        duplicates: testExactDup + testHighDup,
        replaced: 0,
        manualAttention: shortage,
        finalStatus: 'MANUAL_ATTENTION'
      });
      continue;
    }

    // Step 8: Apply Atomic Database Update (Section 20, 25)
    const newQuestionsArray = [...qIds];
    for (const pr of plannedReplacements) {
      const idx = newQuestionsArray.findIndex(id => id.toString() === pr.remId);
      if (idx !== -1) {
        newQuestionsArray[idx] = pr.candId;
      }

      // Record in replacement log (Section 24)
      const logEntry = {
        testId: paper.testId,
        exam: 'JEE Main',
        subject: 'Chemistry',
        testType: 'Chapter-wise',
        chapter: targetChapter,
        removedQuestionId: pr.remId,
        removedQuestionChapter: pr.remInfo.chapter,
        removedQuestionDifficulty: pr.remInfo.difficulty,
        removedQuestionType: pr.remInfo.type,
        replacementQuestionId: pr.candId.toString(),
        replacementQuestionChapter: pr.candChapter,
        replacementQuestionDifficulty: pr.candDiff,
        replacementQuestionType: pr.candType,
        reason: pr.remInfo.reason,
        duplicateType: pr.remInfo.duplicateType || null,
        similarityScore: pr.remInfo.similarityScore || null,
        timestamp: new Date().toISOString()
      };

      allReplacementLogs.push(logEntry);
      totalReplacementsApplied++;
      testReplaced++;

      if (pr.candDiff === 'MODERATE') moderateReplacements++;
      else if (pr.candDiff === 'DIFFICULT') difficultReplacements++;
      else easyReplacements++;
    }

    // Safety checks before commit (Section 21)
    if (newQuestionsArray.length !== qIds.length) {
      throw new Error(`CRITICAL: Question count mismatch for test ${paper.testId}! Original: ${qIds.length}, New: ${newQuestionsArray.length}`);
    }

    await db.collection('testPapers').updateOne(
      { _id: paper._id },
      {
        $set: {
          questions: newQuestionsArray,
          type: 'CHAPTER',
          chapter: targetChapter,
          updatedAt: new Date()
        }
      }
    );

    testsCorrected++;
    console.log(`[SUCCESS] Corrected ${paper.testId}: replaced ${plannedReplacements.length} questions in "${targetChapter}"`);

    testReportTable.push({
      testId: paper.testId,
      chapter: targetChapter,
      questions: qIds.length,
      wrongChapter: testWrongChap,
      duplicates: testExactDup + testHighDup,
      replaced: testReplaced,
      manualAttention: 0,
      finalStatus: 'PASS'
    });
  }

  // Step 9: Save complete replacement logs
  const logsPath = path.join(__dirname, `jee_chem_chapter_replacement_logs_FINAL.json`);
  fs.writeFileSync(logsPath, JSON.stringify(allReplacementLogs, null, 2));

  // Step 10: Run Complete Independent Verification Re-audit (Section 43, 44)
  console.log('\n========================================');
  console.log('RUNNING COMPLETE INDEPENDENT RE-AUDIT...');
  console.log('========================================\n');

  let remainingWrongChapter = 0;
  let remainingWrongExam = 0;
  let remainingWrongSubject = 0;
  let remainingExactDup = 0;
  let remainingHighSimDup = 0;
  let duplicateQuestionIds = 0;
  let questionCountChanges = 0;

  const refreshedPapers = await db.collection('testPapers').find({
    testId: { $in: Object.keys(testTargets) }
  }).toArray();

  for (const paper of refreshedPapers) {
    const target = testTargets[paper.testId] || {};
    const targetChapter = target.targetChapter || paper.chapter;
    const qIds = paper.questions || [];

    if (qIds.length !== 25) {
      questionCountChanges++;
    }

    const seenIds = new Set();
    qIds.forEach(id => {
      const idStr = id.toString();
      if (seenIds.has(idStr)) duplicateQuestionIds++;
      seenIds.add(idStr);
    });

    const objIds = qIds.map(id => {
      try { return new ObjectId(id); } catch (e) { return id; }
    });

    const questions = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
    const qMap = new Map();
    questions.forEach(q => qMap.set(q._id.toString(), q));

    const qs = qIds.map(id => qMap.get(id.toString())).filter(Boolean);

    for (const q of qs) {
      const qChapter = CHAPTER_SYNONYMS[norm(q.chapter)] || q.chapter;
      if (norm(qChapter) !== norm(targetChapter)) remainingWrongChapter++;
      if (q.exam && !q.exam.toLowerCase().includes('jee')) remainingWrongExam++;
      if (q.subject && !q.subject.toLowerCase().includes('chem')) remainingWrongSubject++;
    }

    for (let i = 0; i < qs.length; i++) {
      const qA = qs[i];
      const normA = normalizeExactText(qA.question || qA.questionText);
      const tokensA = tokenize(qA.question || qA.questionText);

      for (let j = i + 1; j < qs.length; j++) {
        const qB = qs[j];
        const normB = normalizeExactText(qB.question || qB.questionText);
        if (normA && normB && normA === normB) remainingExactDup++;
        else {
          const tokensB = tokenize(qB.question || qB.questionText);
          if (jaccardSimilarity(tokensA, tokensB) >= 0.85) remainingHighSimDup++;
        }
      }
    }
  }

  console.log('RE-AUDIT COMPLETE.');
  console.log(`Remaining Wrong Chapter: ${remainingWrongChapter}`);
  console.log(`Remaining Wrong Exam: ${remainingWrongExam}`);
  console.log(`Remaining Wrong Subject: ${remainingWrongSubject}`);
  console.log(`Remaining Exact Duplicates: ${remainingExactDup}`);
  console.log(`Remaining High-Similarity Duplicates: ${remainingHighSimDup}`);
  console.log(`Duplicate Question IDs: ${duplicateQuestionIds}`);
  console.log(`Question Count Changes: ${questionCountChanges}`);

  // Print Section 45 Admin Final Report
  console.log('\n================================================================');
  console.log('JEE MAIN CHEMISTRY — CHAPTER-WISE AUDIT REPORT (SECTION 45)');
  console.log('================================================================\n');

  console.log(`Total Tests Audited: ${totalTestsAudited}
Total Questions Audited: ${totalQuestionsChecked}
Correctly Mapped Questions: ${totalQuestionsChecked - totalWrongChapterFound - totalReplacementsApplied}
Wrong-Chapter Questions: ${totalWrongChapterFound}
Exact Duplicates: ${totalExactDuplicatesFound}
High-Similarity Duplicates: ${totalHighSimDuplicatesFound}
Moderate-Similarity Reviews: ${totalModerateSimMatchesFound}
Questions Replaced: ${totalReplacementsApplied}
Easy Questions Used as Replacement: ${easyReplacements}
Questions Requiring Manual Attention: ${testsRequiringManualAttention}
Tests Successfully Corrected: ${testsCorrected}
`);

  console.log('| Test | Chapter | Questions | Wrong Chapter | Duplicates | Replaced | Manual Attention | Final Status |');
  console.log('| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |');
  testReportTable.forEach((row, idx) => {
    console.log(`| Test ${String(idx + 1).padStart(2, '0')} | ${row.chapter.padEnd(45)} | ${row.questions} | ${row.wrongChapter} | ${row.duplicates} | ${row.replaced} | ${row.manualAttention} | ${row.finalStatus} |`);
  });

  await client.close();
}

runJeeChemChapterAuditAndCorrection().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
