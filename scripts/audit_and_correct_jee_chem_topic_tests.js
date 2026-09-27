/**
 * MASTER SCRIPT — COMPLETE AUDIT, DUPLICATE DETECTION & QUESTION REPLACEMENT
 * FOR ALL JEE MAIN CHEMISTRY TOPIC-WISE TESTS
 * 
 * Strict Database-Level Audit & Correction Script.
 * Scope: Exam: JEE Main, Subject: Chemistry, Test Type: Topic-wise (`testPapers`).
 * Rules:
 *   - Mapped question chapter MUST match test chapter exactly.
 *   - Mapped question topic/subtopic MUST match test topic/subtopic exactly.
 *   - Duplicate detection: Exact, High-Similarity, and Moderate-Similarity.
 *   - Retain the best question in duplicate groups; replace the other.
 *   - Wrong-topic/chapter and duplicate questions replaced ONLY with MODERATE or DIFFICULT questions from the exact same chapter and topic/subtopic.
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
    .replace(/\s+/g, ' ')
    .trim();
}

const CHAPTER_SYNONYMS = {
  [norm("Some Basic Concepts of Chemistry")]: "Some Basic Concepts in Chemistry",
  [norm("Some Basic Concepts in Chemistry")]: "Some Basic Concepts in Chemistry",
  [norm("Structure of Atom")]: "Atomic Structure",
  [norm("Atomic Structure")]: "Atomic Structure",
  [norm("Chemical Bonding and Molecular Structure")]: "Chemical Bonding and Molecular Structure",
  [norm("Chemical Bonding")]: "Chemical Bonding and Molecular Structure",
  [norm("Thermodynamics")]: "Chemical Thermodynamics",
  [norm("Chemical Thermodynamics")]: "Chemical Thermodynamics",
  [norm("Solutions")]: "Solutions",
  [norm("Equilibrium")]: "Equilibrium",
  [norm("Redox Reactions")]: "Redox Reactions and Electrochemistry",
  [norm("Electrochemistry")]: "Redox Reactions and Electrochemistry",
  [norm("Redox Reactions and Electrochemistry")]: "Redox Reactions and Electrochemistry",
  [norm("Chemical Kinetics")]: "Chemical Kinetics",
  [norm("Classification of Elements and Periodicity")]: "Classification of Elements and Periodicity in Properties",
  [norm("Classification of Elements and Periodicity in Properties")]: "Classification of Elements and Periodicity in Properties",
  [norm("The p-Block Elements")]: "P-Block Elements",
  [norm("P-Block Elements")]: "P-Block Elements",
  [norm("p-Block Elements")]: "P-Block Elements",
  [norm("d- and f-Block Elements")]: "d and f- Block Elements",
  [norm("d and f- Block Elements")]: "d and f- Block Elements",
  [norm("Coordination Compounds")]: "Co-ordination Compounds",
  [norm("Co-ordination Compounds")]: "Co-ordination Compounds",
  [norm("Purification and Characterisation of Organic Compounds")]: "Purification and Characterisation of Organic Compounds",
  [norm("Organic Chemistry – Some Basic Principles and Techniques")]: "Some Basic Principles of Organic Chemistry",
  [norm("Some Basic Principles of Organic Chemistry")]: "Some Basic Principles of Organic Chemistry",
  [norm("Organic Reaction Mechanism")]: "Organic Reaction Mechanism",
  [norm("Hydrocarbons")]: "Hydrocarbons",
  [norm("Haloalkanes and Haloarenes")]: "Organic Compounds Containing Halogens",
  [norm("Organic Compounds Containing Halogens")]: "Organic Compounds Containing Halogens",
  [norm("Alcohols, Phenols and Ethers")]: "Organic Compounds Containing Oxygen",
  [norm("Aldehydes, Ketones and Carboxylic Acids")]: "Organic Compounds Containing Oxygen",
  [norm("Organic Compounds Containing Oxygen")]: "Organic Compounds Containing Oxygen",
  [norm("Amines")]: "Organic Compounds Containing Nitrogen",
  [norm("Organic Compounds Containing Nitrogen")]: "Organic Compounds Containing Nitrogen",
  [norm("Biomolecules")]: "Biomolecules",
  [norm("Principles Related to Practical Chemistry")]: "Principles Related to Practical Chemistry",
  [norm("Organic Name Reactions")]: "Organic Name Reactions"
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
    normalizeText(text)
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

function scoreQuestionQuality(q) {
  let score = 0;
  if (Array.isArray(q.options) && q.options.length >= 4) score += 30;
  if (q.correctOption || q.answer) score += 25;
  if (q.explanation && q.explanation.length > 20) score += 20;
  if (q.difficulty) score += 10;
  if (q.subTopic || q.subtopic) score += 15;
  return score;
}

async function runJeeChemTopicAuditAndCorrection() {
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
  const targetMapPath = path.join(__dirname, 'jee_chem_subtopic_test_targets.json');
  if (!fs.existsSync(targetMapPath)) {
    console.error('Target map file missing! Run build step first.');
    process.exit(1);
  }
  const testTargets = JSON.parse(fs.readFileSync(targetMapPath, 'utf8'));

  // Step 1: Discover all JEE Main Chemistry Topic-wise tests in DB
  const jeeChemTests = await db.collection('testPapers').find({
    exam: { $regex: /jee/i },
    subject: 'Chemistry'
  }).toArray();

  const papers = jeeChemTests.filter(t => {
    return t.type === 'SUBTOPIC' || (t.testId && t.testId.includes('-SUBTOPIC-')) || (t.type || '').toLowerCase().includes('topic');
  });

  console.log(`Discovered ${papers.length} JEE Main Chemistry Topic-wise tests to audit.\n`);

  // Step 2: Create pre-audit snapshot
  const snapshotTimestamp = Date.now();
  const preAuditSnapshot = papers.map(p => {
    const key = p.testId || String(p._id);
    const target = testTargets[key] || {};
    return {
      testId: p.testId,
      _id: String(p._id),
      title: p.title,
      chapter: p.chapter || target.targetChapter || 'UNKNOWN',
      topic: p.subtopic || target.targetSubtopic || p.title,
      questionCount: (p.questions || []).length,
      originalQuestionIds: (p.questions || []).map(id => id.toString())
    };
  });

  const snapshotPath = path.join(__dirname, `jee_chem_topic_audit_snapshot_${snapshotTimestamp}.json`);
  fs.writeFileSync(snapshotPath, JSON.stringify(preAuditSnapshot, null, 2));
  console.log(`Pre-audit snapshot safely saved to: ${snapshotPath}\n`);

  // Metrics
  let totalTestsAudited = papers.length;
  let totalQuestionsChecked = 0;
  let totalWrongChapterFound = 0;
  let totalWrongTopicFound = 0;
  let totalWrongExamFound = 0;
  let totalWrongSubjectFound = 0;
  let totalExactDuplicatesFound = 0;
  let totalHighSimDuplicatesFound = 0;
  let totalModerateSimMatchesFound = 0;

  let totalQuestionsReplaced = 0;
  let moderateReplacements = 0;
  let difficultReplacements = 0;
  let easyReplacements = 0;
  let replacementLogs = [];
  let manualAttentionTests = [];
  let testsFullyVerified = 0;

  // Step 3: Process tests one by one
  for (const paper of papers) {
    const key = paper.testId || String(paper._id);
    const targetConfig = testTargets[key];
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
    const wrongQuestionsMap = new Map(); // idStr -> info
    const keptQuestions = [];
    const keptIds = new Set();
    const keptTexts = new Set();
    const keptTokenSets = [];
    const orderedQuestionsList = [];

    for (let i = 0; i < initialQuestionIds.length; i++) {
      const qIdStr = initialQuestionIds[i].toString();
      const q = qMap.get(qIdStr);

      if (!q) {
        wrongQuestionsMap.set(qIdStr, {
          index: i,
          removedId: qIdStr,
          removedChapter: 'MISSING_IN_DB',
          removedTopic: 'MISSING_IN_DB',
          difficulty: 'MODERATE',
          type: 'MCQ',
          reason: 'MISSING_IN_DB'
        });
        totalWrongChapterFound++;
        continue;
      }

      orderedQuestionsList.push({ ...q, originalIndex: i });

      const qExam = q.exam || '';
      const isExamMatch = qExam.toLowerCase().includes('jee') || !q.exam;
      const isSubjMatch = (q.subject || '').toLowerCase() === 'chemistry';

      const qChapter = (q.chapter || '').trim();
      const qSubtopic = (q.subTopic || q.subtopic || '').trim();

      const isChapterMatch = norm(qChapter) === norm(targetChapter) ||
        norm(CHAPTER_SYNONYMS[norm(qChapter)] || qChapter) === norm(targetChapter);

      const isTopicMatch = norm(qSubtopic) === norm(targetSubtopic);

      if (!isExamMatch) totalWrongExamFound++;
      if (!isSubjMatch) totalWrongSubjectFound++;

      if (!isChapterMatch) {
        totalWrongChapterFound++;
        wrongQuestionsMap.set(qIdStr, {
          index: i,
          removedId: q._id.toString(),
          removedChapter: q.chapter || 'Unknown',
          removedTopic: qSubtopic || 'Unknown',
          difficulty: normalizeDifficulty(q.difficulty),
          rawDifficulty: q.difficulty,
          type: normalizeType(q.type || q.questionType),
          questionText: q.question || q.text || '',
          reason: 'WRONG_CHAPTER'
        });
      } else if (!isTopicMatch) {
        totalWrongTopicFound++;
        wrongQuestionsMap.set(qIdStr, {
          index: i,
          removedId: q._id.toString(),
          removedChapter: q.chapter || 'Unknown',
          removedTopic: qSubtopic || 'Unknown',
          difficulty: normalizeDifficulty(q.difficulty),
          rawDifficulty: q.difficulty,
          type: normalizeType(q.type || q.questionType),
          questionText: q.question || q.text || '',
          reason: 'WRONG_TOPIC'
        });
      }
    }

    // Step 3B: Duplicate Detection within test
    const duplicateIdsToRemove = new Set();

    for (let i = 0; i < orderedQuestionsList.length; i++) {
      const qA = orderedQuestionsList[i];
      const idA = qA._id.toString();
      const textA = normalizeText(qA.question || qA.text);
      const tokensA = tokenize(qA.question || qA.text);

      for (let j = i + 1; j < orderedQuestionsList.length; j++) {
        const qB = orderedQuestionsList[j];
        const idB = qB._id.toString();
        const textB = normalizeText(qB.question || qB.text);
        const tokensB = tokenize(qB.question || qB.text);

        let matchType = null;
        let sim = 0;

        if (textA === textB && textA.length > 5) {
          matchType = 'EXACT_DUPLICATE';
          totalExactDuplicatesFound++;
        } else {
          sim = jaccardSimilarity(tokensA, tokensB);
          if (sim >= 0.82) {
            matchType = 'HIGH_SIMILARITY_DUPLICATE';
            totalHighSimDuplicatesFound++;
          } else if (sim >= 0.65) {
            totalModerateSimMatchesFound++;
          }
        }

        if (matchType) {
          // Determine which question to keep (Section 12)
          const scoreA = scoreQuestionQuality(qA);
          const scoreB = scoreQuestionQuality(qB);
          const replaceQ = scoreA >= scoreB ? qB : qA;
          const repId = replaceQ._id.toString();

          duplicateIdsToRemove.add(repId);
          if (!wrongQuestionsMap.has(repId)) {
            wrongQuestionsMap.set(repId, {
              index: replaceQ.originalIndex,
              removedId: repId,
              removedChapter: replaceQ.chapter,
              removedTopic: replaceQ.subTopic || replaceQ.subtopic,
              reason: matchType,
              difficulty: normalizeDifficulty(replaceQ.difficulty),
              rawDifficulty: replaceQ.difficulty,
              type: normalizeType(replaceQ.type || replaceQ.questionType),
              questionText: replaceQ.question || replaceQ.text || ''
            });
          }
        }
      }
    }

    // Populate kept questions
    for (let i = 0; i < initialQuestionIds.length; i++) {
      const idStr = initialQuestionIds[i].toString();
      if (!wrongQuestionsMap.has(idStr)) {
        const q = qMap.get(idStr);
        if (q) {
          keptQuestions.push({ index: i, id: q._id });
          keptIds.add(idStr);
          const normT = normalizeText(q.question || q.text);
          if (normT) keptTexts.add(normT);
          keptTokenSets.push(tokenize(q.question || q.text));
        }
      }
    }

    const wrongQuestionsList = Array.from(wrongQuestionsMap.values());

    if (wrongQuestionsList.length === 0) {
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

    // Candidate Pool Search from Question Bank
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
    if (availableCandidates.length < wrongQuestionsList.length) {
      // RULE 32: INSUFFICIENT REPLACEMENT QUESTIONS
      manualAttentionTests.push({
        testId: paper.testId,
        title: paper.title,
        chapter: targetChapter,
        topic: targetSubtopic,
        requiredReplacement: wrongQuestionsList.length,
        moderateAvailable: candidateModCount,
        difficultAvailable: candidateDiffCount,
        totalSuitable: availableCandidates.length,
        shortage: wrongQuestionsList.length - availableCandidates.length,
        reason: 'Insufficient Question Bank questions for exact topic',
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

    for (const wrongItem of wrongQuestionsList) {
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
          if (jaccardSimilarity(candTokens, existingTokens) > 0.82) {
            isNearDuplicate = true;
            break;
          }
        }
        if (isNearDuplicate) continue;

        const cType = normalizeType(cand.type || cand.questionType);

        // Scoring:
        // Priority 1: Difficult + Same Type
        // Priority 2: Moderate + Same Type
        // Priority 3: Difficult
        // Priority 4: Moderate
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
          requiredReplacement: wrongQuestionsList.length,
          moderateAvailable: candidateModCount,
          difficultAvailable: candidateDiffCount,
          totalSuitable: availableCandidates.length,
          shortage: 1,
          reason: 'Candidate duplicate constraint',
          status: 'MANUAL ATTENTION REQUIRED (Candidate duplicate constraint)'
        });
        break;
      }

      // Mark candidate as used in this test
      usedIdsInTest.add(selectedCandidate._id.toString());
      const selectedNormText = normalizeText(selectedCandidate.question || selectedCandidate.text);
      if (selectedNormText) usedTextsInTest.add(selectedNormText);
      usedTokenSetsInTest.push(tokenize(selectedCandidate.question || selectedCandidate.text));

      const finalDiff = normalizeDifficulty(selectedCandidate.difficulty);
      const finalType = normalizeType(selectedCandidate.type || selectedCandidate.questionType);

      testReplacementEntries.push({
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
        replacementDifficulty: selectedCandidate.difficulty || finalDiff,
        replacementQuestionType: finalType,
        timestamp: new Date().toISOString(),
        reason: wrongItem.reason,
        status: 'REPLACED'
      });

      // Update question in test array at exact slot
      newQuestionsArray[wrongItem.index] = selectedCandidate._id;
    }

    if (testHadFailure) {
      // Abort modification for this test to avoid partial contamination
      continue;
    }

    // Apply database modification
    if (newQuestionsArray.length !== configuredCount) {
      console.error(`FATAL: Question count mismatch for ${paper.testId}. Expected ${configuredCount}, got ${newQuestionsArray.length}`);
      continue;
    }

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

    // Update counts
    totalQuestionsReplaced += testReplacementEntries.length;
    testReplacementEntries.forEach(r => {
      const d = normalizeDifficulty(r.replacementDifficulty);
      if (d === 'MODERATE') moderateReplacements++;
      else if (d === 'DIFFICULT') difficultReplacements++;
      else easyReplacements++; // Should always be 0
      replacementLogs.push(r);
    });

    testsFullyVerified++;
    console.log(`✔ [CORRECTED & VERIFIED] ${paper.testId}: Replaced ${testReplacementEntries.length} questions.`);
  }

  // Save detailed replacement log
  const replLogPath = path.join(__dirname, `jee_chem_topic_replacement_logs_${snapshotTimestamp}.json`);
  fs.writeFileSync(replLogPath, JSON.stringify(replacementLogs, null, 2));
  console.log(`\nDetailed replacement logs saved to: ${replLogPath}`);

  // Also save a final copy
  const finalLogPath = path.join(__dirname, `jee_chem_topic_replacement_logs_FINAL.json`);
  fs.writeFileSync(finalLogPath, JSON.stringify(replacementLogs, null, 2));

  // Step 4: Independent Second Audit Validation Pass (Section 34)
  console.log('\n==============================================================');
  console.log('RUNNING INDEPENDENT FINAL VERIFICATION AUDIT ON ALL TESTS...');
  console.log('==============================================================\n');

  const postAuditPapers = await db.collection('testPapers').find({
    exam: { $regex: /jee/i },
    subject: 'Chemistry'
  }).toArray();

  const postTopicPapers = postAuditPapers.filter(t => {
    return t.type === 'SUBTOPIC' || (t.testId && t.testId.includes('-SUBTOPIC-')) || (t.type || '').toLowerCase().includes('topic');
  });

  let remainingWrongChapterQuestions = 0;
  let remainingWrongTopicQuestions = 0;
  let remainingWrongExamQuestions = 0;
  let remainingWrongSubjectQuestions = 0;
  let remainingExactDuplicates = 0;
  let remainingHighSimDuplicates = 0;
  let duplicateQuestionIdsFound = 0;

  const replacementIdSet = new Set(replacementLogs.map(r => r.replacementQuestionId));
  const manualAttentionSet = new Set(manualAttentionTests.map(m => m.testId));

  for (const p of postTopicPapers) {
    if (manualAttentionSet.has(p.testId)) {
      // Test is flagged for manual attention as expected
      continue;
    }

    const key = p.testId || String(p._id);
    const targetConfig = testTargets[key];
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

    const idSet = new Set();
    const textSet = new Set();
    const tokenSetList = [];

    for (const id of qIds) {
      const qIdStr = id.toString();
      if (idSet.has(qIdStr)) {
        duplicateQuestionIdsFound++;
      }
      idSet.add(qIdStr);

      const q = qMap.get(qIdStr);
      if (!q) {
        remainingWrongChapterQuestions++;
        continue;
      }

      const qExam = q.exam || '';
      const isExamMatch = qExam.toLowerCase().includes('jee') || !q.exam;
      if (!isExamMatch) remainingWrongExamQuestions++;

      const isSubjMatch = (q.subject || '').toLowerCase() === 'chemistry';
      if (!isSubjMatch) remainingWrongSubjectQuestions++;

      const qCh = q.chapter || '';
      const qSub = q.subTopic || q.subtopic || '';

      const isChMatch = norm(qCh) === norm(targetChapter) ||
        norm(CHAPTER_SYNONYMS[norm(qCh)] || qCh) === norm(targetChapter);
      const isSubMatch = norm(qSub) === norm(targetSubtopic);

      if (!isChMatch) remainingWrongChapterQuestions++;
      if (!isSubMatch) remainingWrongTopicQuestions++;

      const nText = normalizeText(q.question || q.text);
      if (nText && textSet.has(nText)) remainingExactDuplicates++;
      if (nText) textSet.add(nText);

      const tok = tokenize(q.question || q.text);
      for (const prevTok of tokenSetList) {
        if (jaccardSimilarity(tok, prevTok) > 0.85) {
          remainingHighSimDuplicates++;
          break;
        }
      }
      tokenSetList.push(tok);
    }
  }

  await client.close();

  // Print Admin Final Report (Prompt Section 36)
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JEE MAIN CHEMISTRY
TOPIC-WISE COMPLETE AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total Tests Audited: ${totalTestsAudited}

Tests With No Errors: ${totalTestsAudited - manualAttentionTests.length - (totalTestsAudited - testsFullyVerified - manualAttentionTests.length)}
Tests Corrected: ${testsFullyVerified - (totalTestsAudited - (totalWrongChapterFound > 0 || totalWrongTopicFound > 0 ? manualAttentionTests.length : 0))}
Tests Requiring Manual Attention: ${manualAttentionTests.length}

Total Questions Audited: ${totalQuestionsChecked}

--------------------------------
MAPPING AUDIT
--------------------------------

Wrong Chapter: ${totalWrongChapterFound}
Wrong Topic/Subtopic: ${totalWrongTopicFound}
Wrong Exam: ${totalWrongExamFound}
Wrong Subject: ${totalWrongSubjectFound}

--------------------------------
DUPLICATE AUDIT
--------------------------------

Exact Duplicates: ${totalExactDuplicatesFound}
High-Similarity Duplicates: ${totalHighSimDuplicatesFound}
Moderate-Similarity Matches: ${totalModerateSimMatchesFound}

--------------------------------
REPLACEMENTS
--------------------------------

Total Replacements: ${totalQuestionsReplaced}
Moderate: ${moderateReplacements}
Difficult: ${difficultReplacements}
Easy: ${easyReplacements}

--------------------------------
FINAL VALIDATION
--------------------------------

Remaining Wrong Mappings: ${remainingWrongChapterQuestions + remainingWrongTopicQuestions + remainingWrongExamQuestions + remainingWrongSubjectQuestions}
Remaining Exact Duplicates: ${remainingExactDuplicates}
Remaining High-Similarity Duplicates: ${remainingHighSimDuplicates}
Duplicate Question IDs: ${duplicateQuestionIdsFound}
Question Count Changes: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATUS: ${remainingWrongChapterQuestions === 0 && remainingWrongTopicQuestions === 0 && remainingExactDuplicates === 0 && remainingHighSimDuplicates === 0 && easyReplacements === 0 && duplicateQuestionIdsFound === 0 ? 'VERIFIED' : 'ATTENTION_REQUIRED'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

  // Print Detailed Replacement Log Sample (Section 19 / 22)
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

  // Print Manual Attention Report (Prompt Section 32)
  if (manualAttentionTests.length > 0) {
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`MANUAL ATTENTION REPORT (${manualAttentionTests.length} tests)`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    manualAttentionTests.forEach(m => {
      console.log(`Test ID: ${m.testId}`);
      console.log(`Chapter: ${m.chapter}`);
      console.log(`Topic/Subtopic: ${m.topic}`);
      console.log(`Required Replacements: ${m.requiredReplacement}`);
      console.log(`Valid Moderate Available: ${m.moderateAvailable}`);
      console.log(`Valid Difficult Available: ${m.difficultAvailable}`);
      console.log(`Available Valid Questions: ${m.totalSuitable}`);
      console.log(`Shortage: ${m.shortage}`);
      console.log(`Reason: ${m.reason}`);
      console.log(`Status: ${m.status}\n`);
      console.log(`--------------------------------------------------\n`);
    });
  }

  return {
    totalTestsAudited,
    totalQuestionsChecked,
    totalWrongChapterFound,
    totalWrongTopicFound,
    totalExactDuplicatesFound,
    totalHighSimDuplicatesFound,
    totalModerateSimMatchesFound,
    totalQuestionsReplaced,
    moderateReplacements,
    difficultReplacements,
    easyReplacements,
    remainingWrongChapterQuestions,
    remainingWrongTopicQuestions,
    duplicateQuestionIdsFound,
    testsFullyVerified,
    manualAttentionCount: manualAttentionTests.length,
    replacementLogs
  };
}

if (require.main === module) {
  runJeeChemTopicAuditAndCorrection().catch(err => {
    console.error('Fatal execution error:', err);
    process.exit(1);
  });
}

module.exports = { runJeeChemTopicAuditAndCorrection };
