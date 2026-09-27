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
  [norm('Sets, Relations, and Functions')]: 'Sets, Relations, and Functions',
  [norm('Relations and Functions')]: 'Sets, Relations, and Functions',
  [norm('Complex Numbers')]: 'Complex Numbers',
  [norm('Quadratic Equations')]: 'Quadratic Equations',
  [norm('Complex Numbers and Quadratic Equations')]: 'Complex Numbers',
  [norm('Sequences & Series')]: 'Sequences & Series',
  [norm('Sequences and Series')]: 'Sequences & Series',
  [norm('Permutations & Combinations')]: 'Permutations & Combinations',
  [norm('Permutations and Combinations')]: 'Permutations & Combinations',
  [norm('Binomial Theorem')]: 'Binomial Theorem',
  [norm('Straight Lines')]: 'Straight Lines',
  [norm('Circles')]: 'Circles',
  [norm('Conic Sections (Parabola, Ellipse, Hyperbola)')]: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
  [norm('Conic Sections')]: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
  [norm('Trigonometric Identities')]: 'Trigonometric Identities',
  [norm('Trigonometric Functions')]: 'Trigonometric Identities',
  [norm('Matrices & Determinants')]: 'Matrices & Determinants',
  [norm('Matrices and Determinants')]: 'Matrices & Determinants',
  [norm('Matrices')]: 'Matrices & Determinants',
  [norm('Limits, Continuity & Differentiability')]: 'Limits, Continuity & Differentiability',
  [norm('Limits and Derivatives')]: 'Limits, Continuity & Differentiability',
  [norm('Application of Derivatives')]: 'Application of Derivatives',
  [norm('Integrals')]: 'Integrals',
  [norm('Differential Equations')]: 'Differential Equations',
  [norm('Areas')]: 'Areas',
  [norm('Vectors')]: 'Vectors',
  [norm('Vector Algebra')]: 'Vectors',
  [norm('3D Geometry')]: '3D Geometry',
  [norm('Three Dimensional Geometry')]: '3D Geometry',
  [norm('Inverse Trigonometric Functions')]: 'Inverse Trigonometric Functions',
  [norm('Probability')]: 'Probability',
  [norm('Statistics')]: 'Statistics'
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

function normalizeMathExact(text) {
  return (text || '')
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/\\(text|mathrm|mathbf|textit)\{([^}]+)\}/g, '$2')
    .replace(/\\(dfrac|tfrac)/g, '\\frac')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function mathPayloadTokens(text) {
  const normText = normalizeMathExact(text);
  const words = normText
    .replace(/\b(evaluate|find|the|value|of|determine|calculate|what|is|if|then|for|which|following|statement|correct|incorrect|given|that)\b/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 0);
  return new Set(words);
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

async function runJeeMathChapterAuditAndCorrection() {
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
  const targetMapPath = path.join(__dirname, 'jee_math_chapter_test_targets.json');
  if (!fs.existsSync(targetMapPath)) {
    console.error('Target map file missing! Run build step first.');
    process.exit(1);
  }
  const testTargets = JSON.parse(fs.readFileSync(targetMapPath, 'utf8'));

  // Step 1: Discover all JEE Main Mathematics Chapter-wise tests in DB
  const papers = await db.collection('testPapers').find({
    testId: { $regex: /^jee-mains-CHAPTER-Mathematics/i }
  }).toArray();

  console.log(`Discovered ${papers.length} JEE Main Mathematics Chapter-wise tests to audit.\n`);

  // Step 2: Create pre-audit snapshot (Section 27)
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

  const snapshotPath = path.join(__dirname, `jee_math_chapter_audit_snapshot_${snapshotTimestamp}.json`);
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

  for (const paper of papers) {
    const testKey = paper.testId || String(paper._id);
    const target = testTargets[testKey] || {};
    const targetChapter = target.targetChapter || CHAPTER_SYNONYMS[norm(paper.chapter)] || paper.chapter;

    const qIds = paper.questions || [];
    totalQuestionsChecked += qIds.length;

    if (qIds.length === 0) {
      testsWithNoErrors++;
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
        totalWrongChapterFound++;
        questionsToReplace.set(idStr, {
          index: i,
          removedId: idStr,
          reason: 'MISSING_IN_DB',
          difficulty: 'MODERATE',
          type: 'MCQ'
        });
        continue;
      }

      mappedQuestions.push({ ...q, originalIndex: i });

      const qExam = q.exam || '';
      const isExamMatch = qExam.toLowerCase().includes('jee') || !q.exam;
      const isSubjMatch = (q.subject || '').toLowerCase() === 'mathematics';
      const qCh = CHAPTER_SYNONYMS[norm(q.chapter)] || q.chapter;
      const isChMatch = norm(qCh) === norm(targetChapter);

      if (!isExamMatch) totalWrongExamFound++;
      if (!isSubjMatch) totalWrongSubjectFound++;
      if (!isChMatch) totalWrongChapterFound++;

      if (isChMatch && isSubjMatch && isExamMatch) {
        validKeptIds.add(idStr);
        const nT = normalizeMathExact(q.question || q.text);
        if (nT) validKeptTexts.add(nT);
        validKeptTokens.push(mathPayloadTokens(q.question || q.text));
      } else {
        const reason = !isChMatch ? 'WRONG_CHAPTER' :
          !isSubjMatch ? 'WRONG_SUBJECT' : 'WRONG_EXAM';

        questionsToReplace.set(idStr, {
          index: i,
          removedId: idStr,
          removedChapter: q.chapter,
          removedTopic: q.subTopic || q.subtopic || '',
          reason,
          difficulty: normalizeDifficulty(q.difficulty),
          type: normalizeType(q.type || q.questionType),
          questionText: q.question || q.text || ''
        });
      }
    }

    // Step 4: Duplicate Detection within test (Section 15, 16, 17, 18, 20)
    for (let i = 0; i < mappedQuestions.length; i++) {
      const qA = mappedQuestions[i];
      const textA = normalizeMathExact(qA.question || qA.text);
      const tokensA = mathPayloadTokens(qA.question || qA.text);

      for (let j = i + 1; j < mappedQuestions.length; j++) {
        const qB = mappedQuestions[j];
        const textB = normalizeMathExact(qB.question || qB.text);
        const tokensB = mathPayloadTokens(qB.question || qB.text);

        let matchType = null;
        let sim = 0;

        if (textA === textB && textA.length > 5) {
          matchType = 'EXACT_DUPLICATE';
          totalExactDuplicatesFound++;
        } else {
          sim = jaccardSimilarity(tokensA, tokensB);
          if (sim >= 0.85) {
            matchType = 'HIGH_SIMILARITY_DUPLICATE';
            totalHighSimDuplicatesFound++;
          } else if (sim >= 0.65) {
            totalModerateSimMatchesFound++;
          }
        }

        // Automatic replacement eligibility: EXACT & HIGH SIMILARITY ONLY (Section 18)
        if (matchType) {
          const scoreA = scoreQuestionQuality(qA);
          const scoreB = scoreQuestionQuality(qB);
          const replaceQ = scoreA >= scoreB ? qB : qA;
          const repId = replaceQ._id.toString();

          if (!questionsToReplace.has(repId)) {
            questionsToReplace.set(repId, {
              index: replaceQ.originalIndex,
              removedId: repId,
              removedChapter: replaceQ.chapter,
              removedTopic: replaceQ.subTopic || replaceQ.subtopic || '',
              reason: matchType,
              difficulty: normalizeDifficulty(replaceQ.difficulty),
              type: normalizeType(replaceQ.type || replaceQ.questionType),
              questionText: replaceQ.question || replaceQ.text || '',
              similarityScore: sim
            });
          }
        }
      }
    }

    // Step 5: Check if test has errors
    if (questionsToReplace.size === 0) {
      // Just ensure type and chapter are properly set in DB
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
      continue;
    }

    // Step 6: Find valid Moderate or Difficult replacement questions from same chapter (Section 8, 9, 21, 22)
    const candidateQuery = {
      subject: { $regex: /^mathematics$/i },
      chapter: targetChapter
    };

    const candidates = await db.collection('questionBank').find(candidateQuery).toArray();

    // STRICT RULE: Moderate or Difficult ONLY (Never Easy - Section 8, Rule 21)
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

        const cNormText = normalizeMathExact(cand.question || cand.text);
        if (cNormText && usedCandidateTexts.has(cNormText)) continue;

        const cTokens = mathPayloadTokens(cand.question || cand.text);
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

        // Section 9: Replacement Priority Order
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
        }
      }

      if (bestCand) {
        usedCandidateIds.add(bestCand._id.toString());
        const nT = normalizeMathExact(bestCand.question || bestCand.text);
        if (nT) usedCandidateTexts.add(nT);
        usedCandidateTokens.push(mathPayloadTokens(bestCand.question || bestCand.text));

        plannedReplacements.push({
          index: remInfo.index,
          removedId: remId,
          removedChapter: remInfo.removedChapter,
          removedTopic: remInfo.removedTopic,
          reason: remInfo.reason,
          removedDifficulty: remInfo.difficulty,
          removedType: remInfo.type,
          candId: bestCand._id,
          candChapter: bestCand.chapter,
          candTopic: bestCand.subTopic || bestCand.subtopic || '',
          candDifficulty: normalizeDifficulty(bestCand.difficulty),
          candType: normalizeType(bestCand.type || bestCand.questionType)
        });
      } else {
        shortage++;
      }
    }

    // Step 7: Apply replacements or mark manual attention (Section 31)
    if (shortage > 0) {
      testsRequiringManualAttention++;
      manualAttentionReports.push({
        testId: paper.testId,
        chapter: targetChapter,
        requiredReplacements: questionsToReplace.size,
        availableValid: validCandidates.length,
        shortage,
        reason: 'Insufficient Question Bank questions in Chapter'
      });
      console.log(`⚠ [REQUIRES MANUAL ATTENTION] ${paper.testId}: needed ${questionsToReplace.size}, shortage ${shortage}`);
    } else {
      // Execute replacements in testPapers
      const newQuestions = [...paper.questions];
      const localLogs = [];

      for (const rep of plannedReplacements) {
        newQuestions[rep.index] = rep.candId;

        const logEntry = {
          testId: paper.testId,
          exam: 'JEE Main',
          subject: 'Mathematics',
          testType: 'Chapter-wise',
          chapter: targetChapter,
          removedQuestionId: rep.removedId,
          removedQuestionChapter: rep.removedChapter || targetChapter,
          removedQuestionDifficulty: rep.removedDifficulty,
          removedQuestionType: rep.removedType,
          replacementQuestionId: rep.candId.toString(),
          replacementQuestionChapter: rep.candChapter,
          replacementQuestionDifficulty: rep.candDifficulty,
          replacementQuestionType: rep.candType,
          reason: rep.reason,
          timestamp: new Date().toISOString()
        };

        localLogs.push(logEntry);
        allReplacementLogs.push(logEntry);

        totalReplacementsApplied++;
        if (rep.candDifficulty === 'DIFFICULT') difficultReplacements++;
        else if (rep.candDifficulty === 'MODERATE') moderateReplacements++;
        else easyReplacements++;
      }

      // STRICT VALIDATION: Question count must remain unchanged (Section 12)
      if (newQuestions.length !== paper.questions.length) {
        console.error(`ERROR: Question count mismatch for ${paper.testId}. Skipping update.`);
        continue;
      }

      await db.collection('testPapers').updateOne(
        { _id: paper._id },
        {
          $set: {
            questions: newQuestions,
            type: 'CHAPTER',
            chapter: targetChapter,
            updatedAt: new Date()
          }
        }
      );

      if (localLogs.length > 0) {
        await db.collection('replacementLogs').insertMany(localLogs);
      }

      testsCorrected++;
      console.log(`✔ [CORRECTED & VERIFIED] ${paper.testId}: Replaced ${plannedReplacements.length} questions.`);
    }
  }

  // Save replacement logs (Section 28)
  const logsPath = path.join(__dirname, `jee_math_chapter_replacement_logs_${snapshotTimestamp}.json`);
  const finalLogsPath = path.join(__dirname, 'jee_math_chapter_replacement_logs_FINAL.json');
  fs.writeFileSync(logsPath, JSON.stringify(allReplacementLogs, null, 2));
  fs.writeFileSync(finalLogsPath, JSON.stringify(allReplacementLogs, null, 2));
  console.log(`\nDetailed replacement logs saved to: ${logsPath}\n`);

  // Step 8: Independent Second Verification Pass (Section 33 & 34)
  console.log('==============================================================');
  console.log('RUNNING INDEPENDENT FINAL VERIFICATION AUDIT ON ALL TESTS...');
  console.log('==============================================================\n');

  let remainingWrongMappings = 0;
  let remainingExactDuplicates = 0;
  let remainingHighSimDuplicates = 0;
  let duplicateQuestionIds = 0;
  let questionCountChanges = 0;

  for (const paper of papers) {
    const updatedPaper = await db.collection('testPapers').findOne({ _id: paper._id });
    const target = testTargets[paper.testId || String(paper._id)] || {};
    const targetCh = target.targetChapter || updatedPaper.chapter;

    const qIds = updatedPaper.questions || [];
    if (qIds.length !== (paper.questions || []).length) {
      questionCountChanges++;
    }

    if (qIds.length === 0) continue;

    const seenIds = new Set();
    for (const id of qIds) {
      const s = id.toString();
      if (seenIds.has(s)) duplicateQuestionIds++;
      seenIds.add(s);
    }

    // Only verify tests that were successfully corrected or had no errors
    const isManual = manualAttentionReports.some(m => m.testId === paper.testId);
    if (!isManual) {
      const objIds = qIds.map(id => {
        try { return new ObjectId(id); } catch (e) { return id; }
      });
      const qs = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();

      qs.forEach(q => {
        let qCh = CHAPTER_SYNONYMS[norm(q.chapter)] || q.chapter;
        if (norm(qCh) !== norm(targetCh)) {
          remainingWrongMappings++;
        }
      });

      for (let i = 0; i < qs.length; i++) {
        const tA = normalizeMathExact(qs[i].question || qs[i].text);
        const tokA = mathPayloadTokens(qs[i].question || qs[i].text);
        for (let j = i + 1; j < qs.length; j++) {
          const tB = normalizeMathExact(qs[j].question || qs[j].text);
          const tokB = mathPayloadTokens(qs[j].question || qs[j].text);
          if (tA === tB && tA.length > 5) {
            remainingExactDuplicates++;
          } else {
            const sim = jaccardSimilarity(tokA, tokB);
            if (sim >= 0.85) {
              remainingHighSimDuplicates++;
            }
          }
        }
      }
    }
  }

  // Print Section 35 Admin Final Report
  console.log(`
==============================================================
JEE MAIN MATHEMATICS
CHAPTER-WISE COMPLETE AUDIT
==============================================================

Total Tests Audited: ${totalTestsAudited}

Tests With No Errors: ${testsWithNoErrors}
Tests Corrected: ${testsCorrected}
Tests Requiring Manual Attention: ${testsRequiringManualAttention}

Total Questions Audited: ${totalQuestionsChecked}

--------------------------------
MAPPING AUDIT
--------------------------------

Wrong Chapter: ${totalWrongChapterFound}
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

Total Replacements: ${totalReplacementsApplied}
Moderate: ${moderateReplacements}
Difficult: ${difficultReplacements}
Easy: ${easyReplacements}

--------------------------------
FINAL VALIDATION
--------------------------------

Remaining Wrong Mappings: ${remainingWrongMappings}
Remaining Exact Duplicates: ${remainingExactDuplicates}
Remaining High-Similarity Duplicates: ${remainingHighSimDuplicates}
Duplicate Question IDs: ${duplicateQuestionIds}
Question Count Changes: ${questionCountChanges}
==============================================================
`);

  await client.close();
}

runJeeMathChapterAuditAndCorrection().catch(err => {
  console.error('Fatal error during chapter audit:', err);
  process.exit(1);
});
