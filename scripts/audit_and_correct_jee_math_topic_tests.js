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
  [norm('Relations and Functions')]: 'Sets, Relations, and Functions',
  [norm('Sets, Relations, and Functions')]: 'Sets, Relations, and Functions',
  [norm('Complex Numbers and Quadratic Equations')]: 'Complex Numbers',
  [norm('Complex Numbers')]: 'Complex Numbers',
  [norm('Quadratic Equations')]: 'Quadratic Equations',
  [norm('Matrices and Determinants')]: 'Matrices & Determinants',
  [norm('Matrices & Determinants')]: 'Matrices & Determinants',
  [norm('Permutations and Combinations')]: 'Permutations & Combinations',
  [norm('Permutations & Combinations')]: 'Permutations & Combinations',
  [norm('Binomial Theorem')]: 'Binomial Theorem',
  [norm('Sequences and Series')]: 'Sequences & Series',
  [norm('Sequences & Series')]: 'Sequences & Series',
  [norm('Limits and Derivatives')]: 'Limits, Continuity & Differentiability',
  [norm('Limits, Continuity & Differentiability')]: 'Limits, Continuity & Differentiability',
  [norm('Application of Derivatives')]: 'Application of Derivatives',
  [norm('Integrals')]: 'Integrals',
  [norm('Differential Equations')]: 'Differential Equations',
  [norm('Straight Lines')]: 'Straight Lines',
  [norm('Conic Sections')]: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
  [norm('Conic Sections (Parabola, Ellipse, Hyperbola)')]: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
  [norm('Introduction to Three Dimensional Geometry')]: 'Straight Lines',
  [norm('Vector Algebra')]: 'Vectors',
  [norm('Vectors')]: 'Vectors',
  [norm('Three Dimensional Geometry')]: '3D Geometry',
  [norm('3D Geometry')]: '3D Geometry',
  [norm('Trigonometric Functions')]: 'Trigonometric Identities',
  [norm('Trigonometric Identities')]: 'Trigonometric Identities',
  [norm('Inverse Trigonometric Functions')]: 'Inverse Trigonometric Functions',
  [norm('Statistics')]: 'Statistics',
  [norm('Probability')]: 'Probability',
  [norm('Areas')]: 'Areas',
  [norm('Circles')]: 'Circles'
};

const SUBTOPIC_SYNONYMS = {
  [norm('equations of lines in space')]: 'Vector and Cartesian equations of lines',
  [norm('Vector and Cartesian equations of lines')]: 'Vector and Cartesian equations of lines',
  [norm('shortest distance between two lines')]: 'Shortest distance between two skew lines',
  [norm('Shortest distance between two skew lines')]: 'Shortest distance between two skew lines',
  [norm('continuity at a point')]: 'Continuity of functions at a point and in an interval',
  [norm('Continuity of functions at a point and in an interval')]: 'Continuity of functions at a point and in an interval',
  [norm('solution of linear equations using matrix inversion or Cramer’s Rule')]: 'Solution of linear equations',
  [norm('linear and circular permutations')]: 'Linear permutations',
  [norm('solution of differential equations by separation of variables and linear form')]: 'Separation of variables',
  [norm('Properties of definite integrals')]: 'Definite integrals',
  [norm('Focal properties and eccentricity of conics')]: 'Directrix and focus equations',
  [norm('Vector addition and unit vectors')]: 'Collinearity and coplanarity of vectors'
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

async function runJeeMathTopicAuditAndCorrection() {
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
  const targetMapPath = path.join(__dirname, 'jee_math_subtopic_test_targets.json');
  if (!fs.existsSync(targetMapPath)) {
    console.error('Target map file missing! Run build step first.');
    process.exit(1);
  }
  const testTargets = JSON.parse(fs.readFileSync(targetMapPath, 'utf8'));

  // Ensure canonical 3D Geometry subtopic keys
  if (testTargets['jee-mains-SUBTOPIC-Mathematics-equations-of-lines-in-space']) {
    testTargets['jee-mains-SUBTOPIC-Mathematics-equations-of-lines-in-space'].targetSubtopic = 'Vector and Cartesian equations of lines';
  }
  if (testTargets['jee-mains-SUBTOPIC-Mathematics-shortest-distance-between-two-lines']) {
    testTargets['jee-mains-SUBTOPIC-Mathematics-shortest-distance-between-two-lines'].targetSubtopic = 'Shortest distance between two skew lines';
  }

  // Step 1: Discover all JEE Main Mathematics Topic-wise tests in DB
  const allTests = await db.collection('testPapers').find({
    $or: [
      { exam: { $regex: /jee/i }, subject: { $regex: /^mathematics$/i } },
      { category: 'jee-mains', subject: { $regex: /^mathematics$/i } },
      { testId: { $regex: /^jee-mains-subtopic-mathematics/i } }
    ]
  }).toArray();

  const papers = allTests.filter(t => t.type === 'SUBTOPIC' || (t.testId && t.testId.includes('-SUBTOPIC-')) || (t.type || '').toLowerCase().includes('topic'));

  console.log(`Discovered ${papers.length} JEE Main Mathematics Topic-wise tests to audit.\n`);

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

  const snapshotPath = path.join(__dirname, `jee_math_topic_audit_snapshot_${snapshotTimestamp}.json`);
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
    const targetSubtopic = target.targetSubtopic || paper.subtopic || paper.title;

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

    // Step 3: Validate each question against target Chapter & Topic
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

      let qCh = CHAPTER_SYNONYMS[norm(q.chapter)] || q.chapter;
      let qSub = q.subTopic || q.subtopic || '';
      let qSubNorm = SUBTOPIC_SYNONYMS[norm(qSub)] || qSub;
      let targetSubNorm = SUBTOPIC_SYNONYMS[norm(targetSubtopic)] || targetSubtopic;

      // Compound subtopic special handling
      let isSubMatch = norm(qSubNorm) === norm(targetSubNorm);
      if (paper.testId.includes('Standard-forms-of-parabolas,-ellipses,-and-hyperbolas')) {
        isSubMatch = ['standard forms of parabola', 'ellipse equations', 'hyperbola equations'].includes(norm(qSub));
      } else if (paper.testId.includes('linear-combination')) {
        isSubMatch = ['collinearity and coplanarity of vectors', 'vector addition and unit vectors'].includes(norm(qSub));
      } else if (paper.testId.includes('definite-integrals-and-their-properties')) {
        isSubMatch = ['definite integrals', 'properties of definite integrals'].includes(norm(qSub));
      } else if (paper.testId.includes('directrix-and-focus')) {
        isSubMatch = ['directrix and focus equations', 'focal properties and eccentricity of conics'].includes(norm(qSub));
      } else if (paper.testId.includes('solution-of-differential-equations-by-separation-of-variables-and-linear-form')) {
        isSubMatch = ['separation of variables', 'linear differential equations'].includes(norm(qSub));
      }

      const isChMatch = norm(qCh) === norm(targetChapter);

      if (!isExamMatch) totalWrongExamFound++;
      if (!isSubjMatch) totalWrongSubjectFound++;
      if (!isChMatch) totalWrongChapterFound++;
      if (!isSubMatch) totalWrongTopicFound++;

      if (isChMatch && isSubMatch && isSubjMatch && isExamMatch) {
        validKeptIds.add(idStr);
        const nT = normalizeMathExact(q.question || q.text);
        if (nT) validKeptTexts.add(nT);
        validKeptTokens.push(mathPayloadTokens(q.question || q.text));
      } else {
        const reason = !isChMatch ? 'WRONG_CHAPTER' :
          !isSubMatch ? 'WRONG_TOPIC' :
          !isSubjMatch ? 'WRONG_SUBJECT' : 'WRONG_EXAM';

        questionsToReplace.set(idStr, {
          index: i,
          removedId: idStr,
          removedChapter: q.chapter,
          removedTopic: qSub,
          reason,
          difficulty: normalizeDifficulty(q.difficulty),
          type: normalizeType(q.type || q.questionType),
          questionText: q.question || q.text || ''
        });
      }
    }

    // Step 4: Duplicate Detection within test
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

        // Automatic replacement eligibility: EXACT & HIGH SIMILARITY ONLY
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
              removedTopic: replaceQ.subTopic || replaceQ.subtopic,
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
      testsWithNoErrors++;
      continue;
    }

    // Step 6: Find valid Moderate or Difficult replacement questions from same chapter & subtopic
    let targetSubList = [targetSubtopic];
    if (paper.testId.includes('definite-integrals-and-their-properties')) {
      targetSubList = ['Definite integrals', 'Properties of definite integrals'];
    } else if (paper.testId.includes('directrix-and-focus')) {
      targetSubList = ['Directrix and focus equations', 'Focal properties and eccentricity of conics'];
    } else if (paper.testId.includes('Standard-forms-of-parabolas,-ellipses,-and-hyperbolas')) {
      targetSubList = ['Standard forms of parabola', 'Ellipse equations', 'Hyperbola equations'];
    } else if (paper.testId.includes('linear-combination')) {
      targetSubList = ['Collinearity and coplanarity of vectors', 'Vector addition and unit vectors'];
    } else if (paper.testId.includes('solution-of-differential-equations-by-separation-of-variables-and-linear-form')) {
      targetSubList = ['Separation of variables', 'Linear differential equations'];
    }

    const candidateQuery = {
      subject: { $regex: /^mathematics$/i },
      chapter: targetChapter,
      $or: [
        { subTopic: { $in: targetSubList } },
        { subtopic: { $in: targetSubList } }
      ]
    };

    const candidates = await db.collection('questionBank').find(candidateQuery).toArray();

    // STRICT RULE: Moderate or Difficult ONLY (Never Easy - Rule 7, Rule 21)
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

        // Priority 1: Difficult + Same Type
        // Priority 2: Moderate + Same Type
        // Priority 3: Difficult
        // Priority 4: Moderate
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
          candTopic: bestCand.subTopic || bestCand.subtopic || targetSubtopic,
          candDifficulty: normalizeDifficulty(bestCand.difficulty),
          candType: normalizeType(bestCand.type || bestCand.questionType)
        });
      } else {
        shortage++;
      }
    }

    // Step 7: Apply replacements or mark manual attention (Section 32)
    if (shortage > 0) {
      testsRequiringManualAttention++;
      manualAttentionReports.push({
        testId: paper.testId,
        chapter: targetChapter,
        subtopic: targetSubtopic,
        requiredReplacements: questionsToReplace.size,
        availableValid: validCandidates.length,
        shortage,
        reason: 'Insufficient Question Bank questions for exact topic'
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
          testType: 'Topic-wise',
          chapter: targetChapter,
          topic: targetSubtopic,
          removedQuestionId: rep.removedId,
          removedQuestionChapter: rep.removedChapter || targetChapter,
          removedQuestionTopic: rep.removedTopic || targetSubtopic,
          removedQuestionDifficulty: rep.removedDifficulty,
          removedQuestionType: rep.removedType,
          replacementQuestionId: rep.candId.toString(),
          replacementQuestionChapter: rep.candChapter,
          replacementQuestionTopic: rep.candTopic,
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

      // STRICT VALIDATION: Question count must remain unchanged (Section 11)
      if (newQuestions.length !== paper.questions.length) {
        console.error(`ERROR: Question count mismatch for ${paper.testId}. Skipping update.`);
        continue;
      }

      await db.collection('testPapers').updateOne(
        { _id: paper._id },
        {
          $set: {
            questions: newQuestions,
            type: 'SUBTOPIC',
            chapter: targetChapter,
            subtopic: targetSubtopic,
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

  // Save replacement logs
  const logsPath = path.join(__dirname, `jee_math_topic_replacement_logs_${snapshotTimestamp}.json`);
  const finalLogsPath = path.join(__dirname, 'jee_math_topic_replacement_logs_FINAL.json');
  fs.writeFileSync(logsPath, JSON.stringify(allReplacementLogs, null, 2));
  fs.writeFileSync(finalLogsPath, JSON.stringify(allReplacementLogs, null, 2));
  console.log(`\nDetailed replacement logs saved to: ${logsPath}\n`);

  // Step 8: Independent Second Verification Pass (Section 34)
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
    const targetSub = target.targetSubtopic || updatedPaper.subtopic || updatedPaper.title;

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
        let qSub = q.subTopic || q.subtopic || '';
        let qSubNorm = SUBTOPIC_SYNONYMS[norm(qSub)] || qSub;
        let targetSubNorm = SUBTOPIC_SYNONYMS[norm(targetSub)] || targetSub;

        let isSubMatch = norm(qSubNorm) === norm(targetSubNorm);
        if (paper.testId.includes('Standard-forms-of-parabolas,-ellipses,-and-hyperbolas')) {
          isSubMatch = ['standard forms of parabola', 'ellipse equations', 'hyperbola equations'].includes(norm(qSub));
        } else if (paper.testId.includes('linear-combination')) {
          isSubMatch = ['collinearity and coplanarity of vectors', 'vector addition and unit vectors'].includes(norm(qSub));
        } else if (paper.testId.includes('definite-integrals-and-their-properties')) {
          isSubMatch = ['definite integrals', 'properties of definite integrals'].includes(norm(qSub));
        } else if (paper.testId.includes('directrix-and-focus')) {
          isSubMatch = ['directrix and focus equations', 'focal properties and eccentricity of conics'].includes(norm(qSub));
        } else if (paper.testId.includes('solution-of-differential-equations-by-separation-of-variables-and-linear-form')) {
          isSubMatch = ['separation of variables', 'linear differential equations'].includes(norm(qSub));
        }

        if (norm(qCh) !== norm(targetCh) || !isSubMatch) {
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

  // Print Section 36 Admin Final Report
  console.log(`
==============================================================
JEE MAIN MATHEMATICS
TOPIC-WISE COMPLETE AUDIT
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

  if (manualAttentionReports.length > 0) {
    console.log('MANUAL ATTENTION BREAKDOWN:');
    manualAttentionReports.forEach(m => {
      console.log(`- ${m.testId} (${m.chapter} -> ${m.subtopic}): needed ${m.requiredReplacements}, available ${m.availableValid}, shortage: ${m.shortage} (${m.reason})`);
    });
  }

  await client.close();
}

runJeeMathTopicAuditAndCorrection().catch(err => {
  console.error('Fatal error during audit:', err);
  process.exit(1);
});
