/**
 * AUDIT & CORRECT ALL NEET CHEMISTRY TOPIC-WISE TESTS
 * 
 * Strict Database-Level Audit & Correction Script.
 * Scope: NEET + Chemistry + Topic-wise tests in `testPapers`.
 * Rules:
 *   - Mapped question chapter MUST match test chapter exactly.
 *   - Mapped question topic/subtopic MUST match test topic/subtopic exactly.
 *   - Wrong-topic/chapter questions replaced ONLY with MODERATE or DIFFICULT questions from the exact same chapter and topic/subtopic.
 *   - NEVER use an EASY question as a replacement.
 *   - Preserve original question count.
 *   - Prevent duplicate question IDs, duplicate texts, and near-duplicate questions.
 *   - If exact topic has insufficient questions, mark REQUIRES MANUAL ATTENTION without contamination.
 *   - DO NOT modify Question Bank metadata. Only update `testPapers.questions`.
 *   - Independent second validation pass.
 *   - Full snapshot, audit report, detailed replacement log, and manual attention report.
 */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

if (fs.existsSync('.env.local')) {
  dotenv.config({ path: '.env.local' });
}

const { MongoClient, ObjectId } = require('mongodb');

function norm(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[–—−]/g, '-')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/\b(in|of|and|the|elements|to)\b/g, ' ')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const CHAPTER_SYNONYMS = {
  [norm('Some Basic Concepts of Chemistry')]: 'Some Basic Concepts in Chemistry',
  [norm('Some Basic Concepts in Chemistry')]: 'Some Basic Concepts in Chemistry',
  [norm('Structure of Atom')]: 'Atomic Structure',
  [norm('Atomic Structure')]: 'Atomic Structure',
  [norm('Chemical Bonding and Molecular Structure')]: 'Chemical Bonding and Molecular Structure',
  [norm('Chemical Bonding')]: 'Chemical Bonding and Molecular Structure',
  [norm('Thermodynamics')]: 'Chemical Thermodynamics',
  [norm('Chemical Thermodynamics')]: 'Chemical Thermodynamics',
  [norm('Solutions')]: 'Solutions',
  [norm('Equilibrium')]: 'Equilibrium',
  [norm('Redox Reactions')]: 'Redox Reactions and Electrochemistry',
  [norm('Electrochemistry')]: 'Redox Reactions and Electrochemistry',
  [norm('Redox Reactions and Electrochemistry')]: 'Redox Reactions and Electrochemistry',
  [norm('Chemical Kinetics')]: 'Chemical Kinetics',
  [norm('Classification of Elements and Periodicity')]: 'Classification of Elements and Periodicity in Properties',
  [norm('Classification of Elements and Periodicity in Properties')]: 'Classification of Elements and Periodicity in Properties',
  [norm('The p-Block Elements')]: 'P-Block Elements',
  [norm('P-Block Elements')]: 'P-Block Elements',
  [norm('p-Block Elements')]: 'P-Block Elements',
  [norm('d- and f-Block Elements')]: 'd and f- Block Elements',
  [norm('d and f- Block Elements')]: 'd and f- Block Elements',
  [norm('Coordination Compounds')]: 'Co-ordination Compounds',
  [norm('Co-ordination Compounds')]: 'Co-ordination Compounds',
  [norm('Purification and Characterisation of Organic Compounds')]: 'Purification and Characterisation of Organic Compounds',
  [norm('Organic Chemistry – Some Basic Principles and Techniques')]: 'Some Basic Principles of Organic Chemistry',
  [norm('Some Basic Principles of Organic Chemistry')]: 'Some Basic Principles of Organic Chemistry',
  [norm('Organic Reaction Mechanism')]: 'Organic Reaction Mechanism',
  [norm('Hydrocarbons')]: 'Hydrocarbons',
  [norm('Haloalkanes and Haloarenes')]: 'Organic Compounds Containing Halogens',
  [norm('Organic Compounds Containing Halogens')]: 'Organic Compounds Containing Halogens',
  [norm('Alcohols, Phenols and Ethers')]: 'Organic Compounds Containing Oxygen',
  [norm('Aldehydes, Ketones and Carboxylic Acids')]: 'Organic Compounds Containing Oxygen',
  [norm('Organic Compounds Containing Oxygen')]: 'Organic Compounds Containing Oxygen',
  [norm('Amines')]: 'Organic Compounds Containing Nitrogen',
  [norm('Organic Compounds Containing Nitrogen')]: 'Organic Compounds Containing Nitrogen',
  [norm('Biomolecules')]: 'Biomolecules',
  [norm('Principles Related to Practical Chemistry')]: 'Principles Related to Practical Chemistry',
  [norm('Organic Name Reactions')]: 'Organic Name Reactions'
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
    .replace(/\$/g, ' ')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return new Set(
    (text || '')
      .toLowerCase()
      .replace(/\$/g, ' ')
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

async function runChemTopicAuditAndCorrection() {
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
  const targetMapPath = path.join(__dirname, 'neet_chem_subtopic_test_targets.json');
  if (!fs.existsSync(targetMapPath)) {
    console.error('Target map file missing! Run build_chem_subtopic_test_map.js first.');
    process.exit(1);
  }
  const testTargets = JSON.parse(fs.readFileSync(targetMapPath, 'utf8'));

  // Step 1: Discover all NEET Chemistry Topic-wise tests in DB
  const papers = await db.collection('testPapers').find({
    exam: 'NEET',
    subject: 'Chemistry',
    $or: [{ type: 'SUBTOPIC' }, { testId: { $regex: /subtopic/i } }]
  }).toArray();

  console.log(`Discovered ${papers.length} NEET Chemistry Topic-wise tests to audit.\n`);

  // Step 2: Create pre-audit snapshot
  const snapshotTimestamp = Date.now();
  const preAuditSnapshot = papers.map(p => ({
    testId: p.testId,
    title: p.title,
    chapter: p.chapter || (testTargets[p.testId] ? testTargets[p.testId].targetChapter : 'UNKNOWN'),
    topic: p.subtopic || (testTargets[p.testId] ? testTargets[p.testId].targetSubtopic : p.title),
    questionCount: (p.questions || []).length,
    originalQuestionIds: (p.questions || []).map(id => id.toString())
  }));

  const snapshotPath = path.join(__dirname, `neet_chem_topic_audit_snapshot_${snapshotTimestamp}.json`);
  fs.writeFileSync(snapshotPath, JSON.stringify(preAuditSnapshot, null, 2));
  console.log(`Pre-audit snapshot safely saved to: ${snapshotPath}\n`);

  // Metrics
  let totalTestsAudited = papers.length;
  let totalQuestionsChecked = 0;
  let totalWrongChapterFound = 0;
  let totalWrongTopicFound = 0;
  let totalQuestionsReplaced = 0;
  let moderateReplacements = 0;
  let difficultReplacements = 0;
  let easyReplacements = 0;
  let replacementLogs = [];
  let manualAttentionTests = [];
  let testsFullyVerified = 0;

  // Step 3: Process tests one by one
  for (const paper of papers) {
    const targetConfig = testTargets[paper.testId];
    if (!targetConfig) {
      console.error(`Missing target config for ${paper.testId}!`);
      continue;
    }

    const targetChapter = targetConfig.targetChapter;
    const targetSubtopic = targetConfig.targetSubtopic;
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
          removedTopic: 'MISSING_IN_DB',
          difficulty: 'MODERATE',
          type: 'MCQ',
          reason: 'Question ID missing from Question Bank'
        });
        totalWrongChapterFound++;
        continue;
      }

      const qChapter = (q.chapter || '').trim();
      const qSubtopic = (q.subTopic || q.subtopic || '').trim();

      const isChapterMatch = norm(qChapter) === norm(targetChapter) ||
        norm(CHAPTER_SYNONYMS[norm(qChapter)] || qChapter) === norm(targetChapter);

      const isTopicMatch = norm(qSubtopic) === norm(targetSubtopic);

      if (!isChapterMatch) {
        totalWrongChapterFound++;
        wrongQuestions.push({
          index: i,
          removedId: q._id.toString(),
          removedChapter: q.chapter || 'Unknown',
          removedTopic: qSubtopic || 'Unknown',
          difficulty: normalizeDifficulty(q.difficulty),
          rawDifficulty: q.difficulty,
          type: normalizeType(q.type || q.questionType),
          questionText: q.question || q.text || '',
          reason: `Wrong chapter mapping ("${q.chapter}" !== "${targetChapter}")`
        });
      } else if (!isTopicMatch) {
        totalWrongTopicFound++;
        wrongQuestions.push({
          index: i,
          removedId: q._id.toString(),
          removedChapter: q.chapter || 'Unknown',
          removedTopic: qSubtopic || 'Unknown',
          difficulty: normalizeDifficulty(q.difficulty),
          rawDifficulty: q.difficulty,
          type: normalizeType(q.type || q.questionType),
          questionText: q.question || q.text || '',
          reason: `Wrong topic mapping ("${qSubtopic}" !== "${targetSubtopic}")`
        });
      } else {
        // Valid question matching exact Chapter + Topic (KEEP UNCHANGED)
        keptQuestions.push({ index: i, id: q._id });
        keptIds.add(q._id.toString());
        const normT = normalizeText(q.question || q.text);
        if (normT) keptTexts.add(normT);
        keptTokenSets.push(tokenize(q.question || q.text));
      }
    }

    if (wrongQuestions.length === 0) {
      // Ensure chapter, subtopic, and type are set properly on testPapers document
      if (paper.chapter !== targetChapter || paper.subtopic !== targetSubtopic || paper.type !== 'SUBTOPIC') {
        await db.collection('testPapers').updateOne(
          { _id: paper._id },
          { $set: { chapter: targetChapter, subtopic: targetSubtopic, type: 'SUBTOPIC', updatedAt: new Date() } }
        );
      }
      testsFullyVerified++;
      continue;
    }

    // If test has wrong questions, find valid replacements from questionBank
    // Replacement must satisfy:
    // - subject: Chemistry
    // - chapter: exact targetChapter
    // - subTopic / subtopic: exact targetSubtopic
    // - difficulty: MODERATE or DIFFICULT only (NEVER Easy)
    const candidateQuery = {
      subject: { $regex: /^chemistry$/i },
      chapter: targetChapter,
      $or: [
        { subTopic: targetSubtopic },
        { subtopic: targetSubtopic }
      ]
    };

    const candidatePool = await db.collection('questionBank').find(candidateQuery).toArray();

    const availableCandidates = candidatePool.filter(c => {
      const cDiff = normalizeDifficulty(c.difficulty);
      return cDiff !== 'EASY'; // NEVER EASY
    });

    const candidateModCount = availableCandidates.filter(c => normalizeDifficulty(c.difficulty) === 'MODERATE').length;
    const candidateDiffCount = availableCandidates.filter(c => normalizeDifficulty(c.difficulty) === 'DIFFICULT').length;

    // Check if enough candidates exist
    if (availableCandidates.length < wrongQuestions.length) {
      // RULE 14: INSUFFICIENT QUESTION RULE
      manualAttentionTests.push({
        testId: paper.testId,
        title: paper.title,
        chapter: targetChapter,
        topic: targetSubtopic,
        requiredReplacement: wrongQuestions.length,
        moderateAvailable: candidateModCount,
        difficultAvailable: candidateDiffCount,
        totalSuitable: availableCandidates.length,
        shortage: wrongQuestions.length - availableCandidates.length,
        status: 'MANUAL ATTENTION REQUIRED'
      });
      // Do NOT contaminate test! Leave test marked for manual review
      continue;
    }

    // Select replacements
    const usedIdsInTest = new Set(keptIds);
    const usedTextsInTest = new Set(keptTexts);
    const usedTokenSetsInTest = [...keptTokenSets];
    const testReplacementEntries = [];
    const newQuestionsArray = [...initialQuestionIds];

    let testHadFailure = false;

    for (const wrongItem of wrongQuestions) {
      const targetDiff = wrongItem.difficulty;
      const targetType = wrongItem.type;

      let selectedCandidate = null;
      let highestScore = -1;

      for (const cand of availableCandidates) {
        const cIdStr = cand._id.toString();
        if (usedIdsInTest.has(cIdStr)) continue;

        const cDiff = normalizeDifficulty(cand.difficulty);
        if (cDiff === 'EASY') continue;

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

        // Scoring:
        // If removed is Difficult: Difficult preferred (100 if same type, 80 if diff type), Moderate acceptable (90/70)
        // If removed is Moderate/Easy: Moderate preferred (100 if same type, 80 if diff type), Difficult acceptable (90/70)
        let score = 0;
        if (targetDiff === 'DIFFICULT') {
          if (cDiff === 'DIFFICULT' && cType === targetType) score = 100;
          else if (cDiff === 'MODERATE' && cType === targetType) score = 90;
          else if (cDiff === 'DIFFICULT') score = 80;
          else score = 70;
        } else {
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
        testHadFailure = true;
        manualAttentionTests.push({
          testId: paper.testId,
          title: paper.title,
          chapter: targetChapter,
          topic: targetSubtopic,
          requiredReplacement: wrongQuestions.length,
          moderateAvailable: candidateModCount,
          difficultAvailable: candidateDiffCount,
          totalSuitable: availableCandidates.length,
          shortage: 1,
          status: 'MANUAL ATTENTION REQUIRED (Candidate duplicate constraint)'
        });
        break;
      }

      const repDiff = normalizeDifficulty(selectedCandidate.difficulty);
      const repType = normalizeType(selectedCandidate.type || selectedCandidate.questionType);

      usedIdsInTest.add(selectedCandidate._id.toString());
      if (normalizeText(selectedCandidate.question || selectedCandidate.text)) {
        usedTextsInTest.add(normalizeText(selectedCandidate.question || selectedCandidate.text));
      }
      usedTokenSetsInTest.push(tokenize(selectedCandidate.question || selectedCandidate.text));

      newQuestionsArray[wrongItem.index] = selectedCandidate._id;

      if (repDiff === 'MODERATE') moderateReplacements++;
      else if (repDiff === 'DIFFICULT') difficultReplacements++;
      else if (repDiff === 'EASY') easyReplacements++;

      totalQuestionsReplaced++;

      const logEntry = {
        testId: paper.testId,
        testTitle: paper.title,
        testChapter: targetChapter,
        testTopic: targetSubtopic,
        removedQuestionId: wrongItem.removedId,
        removedQuestionChapter: wrongItem.removedChapter,
        removedQuestionTopic: wrongItem.removedTopic,
        removedDifficulty: wrongItem.rawDifficulty || wrongItem.difficulty,
        replacementQuestionId: selectedCandidate._id.toString(),
        replacementChapter: selectedCandidate.chapter,
        replacementTopic: selectedCandidate.subTopic || selectedCandidate.subtopic,
        replacementDifficulty: repDiff === 'MODERATE' ? 'Moderate' : 'Difficult',
        replacementRawDifficulty: selectedCandidate.difficulty,
        replacementQuestionType: repType,
        timestamp: new Date().toISOString(),
        reason: wrongItem.reason,
        status: 'REPLACED'
      };

      testReplacementEntries.push(logEntry);
      replacementLogs.push(logEntry);
    }

    if (testHadFailure) {
      continue;
    }

    // Verify question count
    if (newQuestionsArray.length !== configuredCount) {
      throw new Error(`CRITICAL: Question count mismatch on ${paper.testId}! Before: ${configuredCount}, After: ${newQuestionsArray.length}`);
    }

    // Update test in database
    await db.collection('testPapers').updateOne(
      { _id: paper._id },
      {
        $set: {
          questions: newQuestionsArray,
          chapter: targetChapter,
          subtopic: targetSubtopic,
          type: 'SUBTOPIC',
          updatedAt: new Date()
        }
      }
    );

    testsFullyVerified++;
    console.log(`✅ [UPDATED] ${paper.testId} (${targetChapter} -> ${targetSubtopic}): replaced ${testReplacementEntries.length} question(s).`);
  }

  // Save replacement logs
  const logPath = path.join(__dirname, `neet_chem_topic_replacement_logs_${snapshotTimestamp}.json`);
  fs.writeFileSync(logPath, JSON.stringify(replacementLogs, null, 2));
  console.log(`\nDetailed replacement logs saved to: ${logPath}\n`);

  // Step 4: Run completely independent SECOND AUDIT (Rule 20)
  console.log(`==============================================================`);
  console.log(`RUNNING INDEPENDENT FINAL VERIFICATION AUDIT ON ALL TESTS...`);
  console.log(`==============================================================\n`);

  const postAuditPapers = await db.collection('testPapers').find({
    exam: 'NEET',
    subject: 'Chemistry',
    $or: [{ type: 'SUBTOPIC' }, { testId: { $regex: /subtopic/i } }]
  }).toArray();

  let remainingWrongChapterQuestions = 0;
  let remainingWrongTopicQuestions = 0;
  let duplicateReplacementsFound = 0;
  let easyReplacementsFound = 0;
  let crossTopicReplacementsFound = 0;
  let crossChapterReplacementsFound = 0;

  const replacementIdSet = new Set(replacementLogs.map(r => r.replacementQuestionId));
  const manualAttentionSet = new Set(manualAttentionTests.map(m => m.testId));

  for (const p of postAuditPapers) {
    if (manualAttentionSet.has(p.testId)) {
      // Test is flagged for manual attention as expected
      continue;
    }

    const targetConfig = testTargets[p.testId];
    if (!targetConfig) continue;

    const targetChapter = targetConfig.targetChapter;
    const targetSubtopic = targetConfig.targetSubtopic;
    const qIds = p.questions || [];

    const objIds = qIds.map(id => {
      try { return new ObjectId(id); } catch (e) { return id; }
    });

    const questions = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
    const qMap = new Map();
    questions.forEach(q => qMap.set(q._id.toString(), q));

    const textSet = new Set();

    for (const id of qIds) {
      const qIdStr = id.toString();
      const q = qMap.get(qIdStr);

      if (!q) {
        remainingWrongChapterQuestions++;
        continue;
      }

      const qCh = q.chapter || '';
      const qSub = q.subTopic || q.subtopic || '';

      const isChMatch = norm(qCh) === norm(targetChapter) ||
        norm(CHAPTER_SYNONYMS[norm(qCh)] || qCh) === norm(targetChapter);
      const isSubMatch = norm(qSub) === norm(targetSubtopic);

      if (!isChMatch) remainingWrongChapterQuestions++;
      if (!isSubMatch) remainingWrongTopicQuestions++;

      if (replacementIdSet.has(qIdStr)) {
        const diff = normalizeDifficulty(q.difficulty);
        if (diff === 'EASY') easyReplacementsFound++;
        if (!isChMatch) crossChapterReplacementsFound++;
        if (!isSubMatch) crossTopicReplacementsFound++;

        const nText = normalizeText(q.question || q.text);
        if (nText && textSet.has(nText)) duplicateReplacementsFound++;
      }

      const nText = normalizeText(q.question || q.text);
      if (nText) textSet.add(nText);
    }
  }

  await client.close();

  // Print Admin Audit Report (Prompt Section 22)
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHEMISTRY TOPIC-WISE AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tests Audited: ${totalTestsAudited}

Total Questions Checked: ${totalQuestionsChecked}

Wrong Chapter Questions Found: ${totalWrongChapterFound}

Wrong Topic/Subtopic Questions Found: ${totalWrongTopicFound}

Questions Replaced: ${totalQuestionsReplaced}

Moderate Replacements: ${moderateReplacements}
Difficult Replacements: ${difficultReplacements}

Easy Replacements: ${easyReplacements}

Remaining Wrong Chapter Questions: ${remainingWrongChapterQuestions}

Remaining Wrong Topic Questions: ${remainingWrongTopicQuestions}

Duplicate Replacements: ${duplicateReplacementsFound}

Tests Fully Verified: ${testsFullyVerified}

Tests Requiring Manual Attention: ${manualAttentionTests.length}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATUS: ${remainingWrongChapterQuestions === 0 && remainingWrongTopicQuestions === 0 && easyReplacements === 0 && duplicateReplacementsFound === 0 ? 'VERIFIED' : 'ATTENTION_REQUIRED'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

  // Print Detailed Replacement Log Sample (Prompt Section 23)
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`DETAILED REPLACEMENT LOG (Total: ${replacementLogs.length})`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  replacementLogs.slice(0, 15).forEach((r, idx) => {
    console.log(`Replacement #${idx + 1}:`);
    console.log(`Test:\n${r.testChapter} → ${r.testTopic}`);
    console.log(`\nRemoved Question:\n${r.removedQuestionId}`);
    console.log(`\nActual Chapter:\n${r.removedQuestionChapter}`);
    console.log(`\nActual Topic:\n${r.removedQuestionTopic}`);
    console.log(`\nDifficulty:\n${r.removedDifficulty}`);
    console.log(`\nReplacement:\n${r.replacementQuestionId}`);
    console.log(`\nChapter:\n${r.replacementChapter}`);
    console.log(`\nTopic:\n${r.replacementTopic}`);
    console.log(`\nDifficulty:\n${r.replacementDifficulty}`);
    console.log(`\nQuestion Type:\n${r.replacementQuestionType}`);
    console.log(`\nReason:\n${r.reason}`);
    console.log(`\nStatus:\n${r.status}`);
    console.log(`--------------------------------------------------\n`);
  });

  // Print Manual Attention Report (Prompt Section 24)
  if (manualAttentionTests.length > 0) {
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`MANUAL ATTENTION REPORT (${manualAttentionTests.length} tests)`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    manualAttentionTests.forEach(m => {
      console.log(`Test:\n${m.chapter} → ${m.topic}`);
      console.log(`Test ID:\n${m.testId}`);
      console.log(`\nRequired Replacement:\n${m.requiredReplacement}`);
      console.log(`\nModerate Available:\n${m.moderateAvailable}`);
      console.log(`\nDifficult Available:\n${m.difficultAvailable}`);
      console.log(`\nTotal Suitable:\n${m.totalSuitable}`);
      console.log(`\nShortage:\n${m.shortage}`);
      console.log(`\nStatus:\n${m.status}\n`);
      console.log(`--------------------------------------------------\n`);
    });
  }

  return {
    totalTestsAudited,
    totalQuestionsChecked,
    totalWrongChapterFound,
    totalWrongTopicFound,
    totalQuestionsReplaced,
    moderateReplacements,
    difficultReplacements,
    easyReplacements,
    remainingWrongChapterQuestions,
    remainingWrongTopicQuestions,
    duplicateReplacementsFound,
    testsFullyVerified,
    manualAttentionCount: manualAttentionTests.length,
    replacementLogs
  };
}

if (require.main === module) {
  runChemTopicAuditAndCorrection().catch(err => {
    console.error('Fatal execution error:', err);
    process.exit(1);
  });
}

module.exports = { runChemTopicAuditAndCorrection };
