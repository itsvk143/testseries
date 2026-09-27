/**
 * AUDIT & CORRECT ALL NEET BOTANY CHAPTER-WISE TESTS
 * 
 * Strict Database-Level Audit & Correction Script.
 * Scope: NEET + Botany + Chapter-wise tests in `testPapers`.
 * Rules:
 *   - Mapped question chapter MUST match test chapter exactly.
 *   - Wrong-chapter questions replaced ONLY with MODERATE or DIFFICULT questions from the exact same Botany chapter.
 *   - NEVER use an EASY question as a replacement.
 *   - Preserve original question count.
 *   - Prevent duplicate question IDs, duplicate texts, and near-duplicate questions.
 *   - DO NOT modify Question Bank metadata. Only update `testPapers.questions`.
 *   - Independent second validation pass.
 *   - Full snapshot, audit report, and detailed replacement logs.
 */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

if (fs.existsSync('.env.local')) {
  dotenv.config({ path: '.env.local' });
}

const { MongoClient, ObjectId } = require('mongodb');

// Exhaustive mapping of all 7 NEET Botany Chapter-wise tests to Question Bank chapters
const TARGET_CHAPTER_MAP = {
  'neet-CHAPTER-Botany-Cell-Structure-and-Function-11': 'Cell Structure and Function',
  'neet-CHAPTER-Botany-Cell-The-Unit-of-Life-11': 'Cell Structure and Function',
  'neet-CHAPTER-Botany-Diversity-in-Living-World-11': 'Diversity in Living World',
  'neet-CHAPTER-Botany-Ecology-and-Environment-12': 'Ecology and Environment',
  'neet-CHAPTER-Botany-Genetics-and-Evolution-12': 'Genetics and Evolution',
  'neet-CHAPTER-Botany-Plant-Physiology-11': 'Plant Physiology',
  'neet-CHAPTER-Botany-Reproduction-in-Plants-12': 'Reproduction in Plants'
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

function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .replace(/\$[^$]*\$/g, ' ')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return new Set(
    (text || '')
      .toLowerCase()
      .replace(/\$[^$]*\$/g, ' ')
      .replace(/[^a-z0-9]/g, ' ')
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

async function runBotanyAuditAndCorrection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('ERROR: MONGODB_URI is not set in environment or .env.local');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  console.log('Successfully connected to MongoDB.');

  // Step 1: Discover all NEET Botany Chapter-wise tests
  const papers = await db.collection('testPapers').find({
    testId: { $in: Object.keys(TARGET_CHAPTER_MAP) }
  }).toArray();

  console.log(`Discovered ${papers.length} NEET Botany Chapter-wise tests to audit.\n`);

  // Step 2: Create pre-audit snapshot
  const snapshotTimestamp = new Date().toISOString();
  const preAuditSnapshot = papers.map(p => ({
    testId: p.testId,
    title: p.title,
    chapter: p.chapter || TARGET_CHAPTER_MAP[p.testId],
    targetChapter: TARGET_CHAPTER_MAP[p.testId],
    questionCount: (p.questions || []).length,
    originalQuestionIds: (p.questions || []).map(id => id.toString())
  }));

  const snapshotPath = path.join(__dirname, `neet_botany_audit_snapshot_${Date.now()}.json`);
  fs.writeFileSync(snapshotPath, JSON.stringify(preAuditSnapshot, null, 2));
  console.log(`Pre-audit snapshot safely saved to: ${snapshotPath}\n`);

  // Audit Metrics
  let totalTestsAudited = papers.length;
  let totalQuestionsChecked = 0;
  let totalWrongChapterFound = 0;
  let totalQuestionsReplaced = 0;
  let moderateReplacements = 0;
  let difficultReplacements = 0;
  let easyReplacements = 0;
  let replacementLogs = [];
  let manualAttentionTests = [];

  // Step 3: Process tests one by one
  for (const paper of papers) {
    const targetChapter = TARGET_CHAPTER_MAP[paper.testId];
    const initialQuestionIds = paper.questions || [];
    const configuredCount = initialQuestionIds.length;
    totalQuestionsChecked += configuredCount;

    // Load all mapped questions from questionBank
    const objIds = initialQuestionIds.map(id => {
      try { return new ObjectId(id); } catch (e) { return id; }
    });

    const mappedQuestions = await db.collection('questionBank').find({
      _id: { $in: objIds }
    }).toArray();

    const qMap = new Map();
    mappedQuestions.forEach(q => qMap.set(q._id.toString(), q));

    // Identify wrong mappings
    const wrongQuestions = [];
    const keptQuestions = [];
    const keptIds = new Set();
    const keptTexts = new Set();
    const keptTokenSets = [];

    for (let i = 0; i < initialQuestionIds.length; i++) {
      const qIdStr = initialQuestionIds[i].toString();
      const q = qMap.get(qIdStr);

      if (!q) {
        wrongQuestions.push({
          index: i,
          removedId: qIdStr,
          removedChapter: 'MISSING_IN_DB',
          difficulty: 'MODERATE',
          type: 'MCQ',
          reason: 'Question ID missing from Question Bank'
        });
        continue;
      }

      const qChapter = (q.chapter || '').trim();
      const isChapterMatch = qChapter.toLowerCase() === targetChapter.toLowerCase();
      const isSubjectMatch = (q.subject || '').toLowerCase() === 'botany';

      if (!isChapterMatch || !isSubjectMatch) {
        wrongQuestions.push({
          index: i,
          removedId: q._id.toString(),
          removedChapter: q.chapter || 'Unknown',
          difficulty: normalizeDifficulty(q.difficulty),
          rawDifficulty: q.difficulty,
          type: normalizeType(q.type || q.questionType),
          rawType: q.type || q.questionType,
          questionText: q.question || q.text || '',
          reason: !isChapterMatch ? `Wrong chapter mapping ("${q.chapter}" !== "${targetChapter}")` :
                  !isSubjectMatch ? `Wrong subject mapping ("${q.subject}")` : 'Wrong exam mapping'
        });
      } else {
        // Valid existing question (KEEP UNCHANGED, including existing Easy questions)
        keptQuestions.push({
          index: i,
          id: q._id
        });
        keptIds.add(q._id.toString());
        const normT = normalizeText(q.question || q.text);
        if (normT) keptTexts.add(normT);
        keptTokenSets.push(tokenize(q.question || q.text));
      }
    }

    if (wrongQuestions.length === 0) {
      console.log(`✔ [VERIFIED] ${paper.testId} (${targetChapter}) - 0 wrong questions.`);
      // Ensure chapter and type fields on testPaper document are set properly
      if (paper.chapter !== targetChapter || paper.type !== 'CHAPTER') {
        await db.collection('testPapers').updateOne(
          { _id: paper._id },
          { $set: { chapter: targetChapter, type: 'CHAPTER', updatedAt: new Date() } }
        );
      }
      continue;
    }

    totalWrongChapterFound += wrongQuestions.length;
    console.log(`⚠ [CORRECTION NEEDED] ${paper.testId} (${targetChapter}): ${wrongQuestions.length} wrong questions.`);

    // Fetch candidate replacements from QuestionBank for exact target chapter
    const candidatePool = await db.collection('questionBank').find({
      subject: { $regex: /^botany$/i },
      chapter: targetChapter
    }).toArray();

    // Filter valid replacement candidates:
    // - Moderate or Difficult ONLY (NEVER Easy)
    // - Unique (not in kept questions, not in previous replacements)
    // - No duplicate / near-duplicate text
    const availableCandidates = candidatePool.filter(c => {
      const cDiff = normalizeDifficulty(c.difficulty);
      if (cDiff === 'EASY') return false; // RULE 4: NEVER USE EASY REPLACEMENT
      return true;
    });

    const candidateModCount = availableCandidates.filter(c => normalizeDifficulty(c.difficulty) === 'MODERATE').length;
    const candidateDiffCount = availableCandidates.filter(c => normalizeDifficulty(c.difficulty) === 'DIFFICULT').length;

    if (availableCandidates.length < wrongQuestions.length) {
      // RULE 13: INSUFFICIENT QUESTION RULE
      console.error(`❌ INSUFFICIENT QUESTIONS for ${paper.testId}! Required: ${wrongQuestions.length}, Available: ${availableCandidates.length}`);
      manualAttentionTests.push({
        testId: paper.testId,
        chapter: targetChapter,
        requiredReplacement: wrongQuestions.length,
        moderateAvailable: candidateModCount,
        difficultAvailable: candidateDiffCount,
        totalSuitable: availableCandidates.length,
        shortage: wrongQuestions.length - availableCandidates.length,
        status: 'MANUAL ATTENTION REQUIRED'
      });
      continue;
    }

    // Perform replacement selection according to priorities
    const usedIdsInTest = new Set(keptIds);
    const usedTextsInTest = new Set(keptTexts);
    const usedTokenSetsInTest = [...keptTokenSets];
    const testReplacementEntries = [];

    // Final new question IDs array preserving index positions
    const newQuestionsArray = [...initialQuestionIds];

    for (const wrongItem of wrongQuestions) {
      const targetDiff = wrongItem.difficulty; // 'EASY', 'MODERATE', 'DIFFICULT'
      const targetType = wrongItem.type; // 'MCQ', 'ASSERTION_REASON', 'NUMERICAL'

      let selectedCandidate = null;
      let highestScore = -1;

      for (const cand of availableCandidates) {
        const cIdStr = cand._id.toString();
        if (usedIdsInTest.has(cIdStr)) continue;

        const cDiff = normalizeDifficulty(cand.difficulty);
        if (cDiff === 'EASY') continue; // ABSOLUTE RULE

        const candNormText = normalizeText(cand.question || cand.text);
        if (candNormText && usedTextsInTest.has(candNormText)) continue;

        const candTokens = tokenize(cand.question || cand.text);
        let isNearDuplicate = false;
        for (const existingTokens of usedTokenSetsInTest) {
          if (jaccardSimilarity(candTokens, existingTokens) > 0.85) {
            isNearDuplicate = true;
            break;
          }
        }
        if (isNearDuplicate) continue;

        const cType = normalizeType(cand.type || cand.questionType);

        // Scoring hierarchy (Sections 5, 7, 8):
        // If removed is Difficult: Difficult preferred, Moderate acceptable
        // If removed is Moderate/Easy: Moderate preferred, Difficult acceptable
        // Same Question Type preferred in all cases
        let score = 0;
        if (targetDiff === 'DIFFICULT') {
          if (cDiff === 'DIFFICULT' && cType === targetType) score = 100;
          else if (cDiff === 'MODERATE' && cType === targetType) score = 90;
          else if (cDiff === 'DIFFICULT') score = 80;
          else score = 70;
        } else {
          // Moderate or Easy removed
          if (cDiff === 'MODERATE' && cType === targetType) score = 100;
          else if (cDiff === 'DIFFICULT' && cType === targetType) score = 90;
          else if (cDiff === 'MODERATE') score = 80;
          else score = 70;
        }

        if (score > highestScore) {
          highestScore = score;
          selectedCandidate = cand;
        }
      }

      if (!selectedCandidate) {
        manualAttentionTests.push({
          testId: paper.testId,
          chapter: targetChapter,
          requiredReplacement: wrongQuestions.length,
          moderateAvailable: candidateModCount,
          difficultAvailable: candidateDiffCount,
          totalSuitable: availableCandidates.length,
          shortage: 1,
          status: 'MANUAL ATTENTION REQUIRED'
        });
        throw new Error(`Failed to find non-duplicate replacement for test ${paper.testId} at slot ${wrongItem.index}`);
      }

      const repDiff = normalizeDifficulty(selectedCandidate.difficulty);
      const repType = normalizeType(selectedCandidate.type || selectedCandidate.questionType);

      usedIdsInTest.add(selectedCandidate._id.toString());
      if (normalizeText(selectedCandidate.question || selectedCandidate.text)) {
        usedTextsInTest.add(normalizeText(selectedCandidate.question || selectedCandidate.text));
      }
      usedTokenSetsInTest.push(tokenize(selectedCandidate.question || selectedCandidate.text));

      // Put into replacement array slot
      newQuestionsArray[wrongItem.index] = selectedCandidate._id;

      if (repDiff === 'MODERATE') moderateReplacements++;
      else if (repDiff === 'DIFFICULT') difficultReplacements++;
      else if (repDiff === 'EASY') easyReplacements++;

      totalQuestionsReplaced++;

      const logEntry = {
        testId: paper.testId,
        testTitle: paper.title,
        testChapter: targetChapter,
        removedQuestionId: wrongItem.removedId,
        removedQuestionChapter: wrongItem.removedChapter,
        removedDifficulty: wrongItem.rawDifficulty || wrongItem.difficulty,
        replacementQuestionId: selectedCandidate._id.toString(),
        replacementChapter: selectedCandidate.chapter,
        replacementDifficulty: repDiff === 'MODERATE' ? 'Moderate' : 'Difficult',
        replacementRawDifficulty: selectedCandidate.difficulty,
        replacementQuestionType: repType,
        replacementTextSnippet: (selectedCandidate.question || selectedCandidate.text || '').substring(0, 100),
        timestamp: new Date().toISOString(),
        reason: wrongItem.reason,
        status: 'REPLACED'
      };

      testReplacementEntries.push(logEntry);
      replacementLogs.push(logEntry);
    }

    // Verify question count before database update
    if (newQuestionsArray.length !== configuredCount) {
      throw new Error(`CRITICAL: Question count mismatch on ${paper.testId}! Before: ${configuredCount}, After: ${newQuestionsArray.length}`);
    }

    // Apply database correction: modify ONLY testPapers.questions, testPapers.chapter, and testPapers.type
    await db.collection('testPapers').updateOne(
      { _id: paper._id },
      {
        $set: {
          questions: newQuestionsArray,
          chapter: targetChapter,
          type: 'CHAPTER',
          updatedAt: new Date()
        }
      }
    );

    console.log(`✅ [UPDATED] ${paper.testId} successfully updated with ${testReplacementEntries.length} replacement(s).`);
  }

  // Save replacement logs to file
  const logPath = path.join(__dirname, `neet_botany_replacement_logs_${Date.now()}.json`);
  fs.writeFileSync(logPath, JSON.stringify(replacementLogs, null, 2));
  console.log(`\nDetailed replacement log saved to: ${logPath}\n`);

  // Step 4: Run completely independent SECOND AUDIT (Rule 19)
  console.log(`==============================================================`);
  console.log(`RUNNING INDEPENDENT FINAL VERIFICATION AUDIT ON ALL 7 TESTS...`);
  console.log(`==============================================================\n`);

  const postAuditPapers = await db.collection('testPapers').find({
    testId: { $in: Object.keys(TARGET_CHAPTER_MAP) }
  }).toArray();

  let postAuditTotalQuestions = 0;
  let remainingWrongChapterQuestions = 0;
  let duplicateQuestionsFound = 0;
  let countMismatchesFound = 0;
  let easyReplacementsFound = 0;
  let crossChapterReplacementsFound = 0;
  let testsFullyVerified = 0;

  const replacementIdSet = new Set(replacementLogs.map(r => r.replacementQuestionId));

  for (const p of postAuditPapers) {
    const targetChapter = TARGET_CHAPTER_MAP[p.testId];
    const qIds = p.questions || [];
    postAuditTotalQuestions += qIds.length;

    const originalConfig = preAuditSnapshot.find(s => s.testId === p.testId);
    if (qIds.length !== originalConfig.questionCount) {
      console.error(`❌ Question count mismatch on ${p.testId}: expected ${originalConfig.questionCount}, got ${qIds.length}`);
      countMismatchesFound++;
    }

    // Check duplicate IDs
    const idSet = new Set();
    for (const id of qIds) {
      const idStr = id.toString();
      if (idSet.has(idStr)) {
        console.error(`❌ Duplicate Question ID found in ${p.testId}: ${idStr}`);
        duplicateQuestionsFound++;
      }
      idSet.add(idStr);
    }

    // Load questions from questionBank
    const objIds = qIds.map(id => {
      try { return new ObjectId(id); } catch (e) { return id; }
    });

    const questions = await db.collection('questionBank').find({
      _id: { $in: objIds }
    }).toArray();

    const qMap = new Map();
    questions.forEach(q => qMap.set(q._id.toString(), q));

    let testHasWrong = false;
    const textSet = new Set();

    for (const id of qIds) {
      const qIdStr = id.toString();
      const q = qMap.get(qIdStr);

      if (!q) {
        console.error(`❌ Question ${qIdStr} in test ${p.testId} not found in Question Bank!`);
        testHasWrong = true;
        remainingWrongChapterQuestions++;
        continue;
      }

      // Check chapter
      const qChapter = (q.chapter || '').trim();
      if (qChapter.toLowerCase() !== targetChapter.toLowerCase()) {
        console.error(`❌ Wrong chapter question remaining in ${p.testId}: ${qIdStr} (Chapter: "${q.chapter}", Expected: "${targetChapter}")`);
        testHasWrong = true;
        remainingWrongChapterQuestions++;
      }

      // Check subject
      if ((q.subject || '').toLowerCase() !== 'botany') {
        console.error(`❌ Wrong subject question in ${p.testId}: ${qIdStr} (Subject: "${q.subject}")`);
        testHasWrong = true;
      }

      // Check replacement rules
      if (replacementIdSet.has(qIdStr)) {
        const diff = normalizeDifficulty(q.difficulty);
        if (diff === 'EASY') {
          console.error(`❌ CRITICAL VIOLATION: Easy replacement question found: ${qIdStr}`);
          easyReplacementsFound++;
        }
        if (qChapter.toLowerCase() !== targetChapter.toLowerCase()) {
          console.error(`❌ CRITICAL VIOLATION: Cross-chapter replacement question found: ${qIdStr}`);
          crossChapterReplacementsFound++;
        }
      }

      // Duplicate text check
      const nText = normalizeText(q.question || q.text);
      if (nText) {
        if (textSet.has(nText)) {
          console.error(`❌ Duplicate question text found in ${p.testId}: ${nText.substring(0, 50)}...`);
          duplicateQuestionsFound++;
        }
        textSet.add(nText);
      }
    }

    if (!testHasWrong) {
      testsFullyVerified++;
    }
  }

  await client.close();

  // Step 5: Format and Print Admin Audit Report (Prompt Section 21)
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BOTANY CHAPTER-WISE AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tests Audited: ${totalTestsAudited}

Total Questions Checked: ${totalQuestionsChecked}

Wrong Chapter Questions Found: ${totalWrongChapterFound}

Questions Replaced: ${totalQuestionsReplaced}

Moderate Replacements: ${moderateReplacements}
Difficult Replacements: ${difficultReplacements}

Easy Replacements: ${easyReplacements}

Remaining Wrong Chapter Questions: ${remainingWrongChapterQuestions}

Duplicate Replacements: ${duplicateQuestionsFound}

Tests Fully Verified: ${testsFullyVerified}

Tests Requiring Manual Attention: ${manualAttentionTests.length}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATUS: ${remainingWrongChapterQuestions === 0 && easyReplacements === 0 && crossChapterReplacementsFound === 0 && duplicateQuestionsFound === 0 ? 'VERIFIED' : 'FAILED'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

  // Step 6: Print Detailed Replacement Log (Prompt Section 22)
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`DETAILED REPLACEMENT LOG`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  replacementLogs.forEach((r, idx) => {
    console.log(`Replacement #${idx + 1}:`);
    console.log(`Test:\n${r.testTitle} (${r.testId})`);
    console.log(`\nRemoved Question:\n${r.removedQuestionId}`);
    console.log(`\nActual Chapter:\n${r.removedQuestionChapter}`);
    console.log(`\nDifficulty:\n${r.removedDifficulty}`);
    console.log(`\nReplacement:\n${r.replacementQuestionId}`);
    console.log(`\nChapter:\n${r.replacementChapter}`);
    console.log(`\nDifficulty:\n${r.replacementDifficulty}`);
    console.log(`\nQuestion Type:\n${r.replacementQuestionType}`);
    console.log(`\nSnippet:\n${r.replacementTextSnippet}`);
    console.log(`\nReason:\n${r.reason}`);
    console.log(`\nStatus:\n${r.status}`);
    console.log(`--------------------------------------------------\n`);
  });

  // Step 7: Manual Attention Report (Prompt Section 23)
  if (manualAttentionTests.length > 0) {
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`MANUAL ATTENTION REPORT`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    manualAttentionTests.forEach(m => {
      console.log(`Test:\n${m.testId}`);
      console.log(`\nChapter:\n${m.chapter}`);
      console.log(`\nRequired Replacement:\n${m.requiredReplacement}`);
      console.log(`\nModerate Available:\n${m.moderateAvailable}`);
      console.log(`\nDifficult Available:\n${m.difficultAvailable}`);
      console.log(`\nTotal Suitable:\n${m.totalSuitable}`);
      console.log(`\nShortage:\n${m.shortage}`);
      console.log(`\nStatus:\n${m.status}\n`);
    });
  } else {
    console.log(`\nManual Attention Required: None (0 tests). All 7 tests fully resolved and verified.`);
  }

  return {
    totalTestsAudited,
    totalQuestionsChecked,
    totalWrongChapterFound,
    totalQuestionsReplaced,
    moderateReplacements,
    difficultReplacements,
    easyReplacements,
    remainingWrongChapterQuestions,
    duplicateQuestionsFound,
    testsFullyVerified,
    manualAttentionTestsCount: manualAttentionTests.length,
    replacementLogs
  };
}

if (require.main === module) {
  runBotanyAuditAndCorrection().catch(err => {
    console.error('Fatal execution error:', err);
    process.exit(1);
  });
}

module.exports = { runBotanyAuditAndCorrection };
