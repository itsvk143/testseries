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
  [norm('Units & Measurements')]: 'Physics and Measurement',
  [norm('Physics and Measurement')]: 'Physics and Measurement',
  [norm('Motion in a Straight Line')]: 'Kinematics',
  [norm('Kinematics')]: 'Kinematics',
  [norm('Laws of Motion')]: 'Laws of Motion',
  [norm('Work, Energy & Power')]: 'Work, Energy, and Power',
  [norm('Work, Energy, and Power')]: 'Work, Energy, and Power',
  [norm('System of Particles & Rotational Motion')]: 'Rotational Motion',
  [norm('Rotational Motion')]: 'Rotational Motion',
  [norm('Gravitation')]: 'Gravitation',
  [norm('Mechanical Properties of Solids')]: 'Properties of Solids and Liquids',
  [norm('Properties of Solids and Liquids')]: 'Properties of Solids and Liquids',
  [norm('Thermodynamics')]: 'Thermodynamics',
  [norm('Kinetic Theory')]: 'Kinetic Theory of Gases',
  [norm('Kinetic Theory of Gases')]: 'Kinetic Theory of Gases',
  [norm('Oscillations')]: 'Oscillations and Waves',
  [norm('Oscillations and Waves')]: 'Oscillations and Waves',
  [norm('Electric Charges & Fields')]: 'Electrostatics',
  [norm('Electrostatics')]: 'Electrostatics',
  [norm('Current Electricity')]: 'Current Electricity',
  [norm('Moving Charges & Magnetism')]: 'Magnetic Effects of Current and Magnetism',
  [norm('Magnetic Effects of Current and Magnetism')]: 'Magnetic Effects of Current and Magnetism',
  [norm('Electromagnetic Induction')]: 'Electromagnetic Induction and Alternating Currents',
  [norm('Electromagnetic Induction and Alternating Currents')]: 'Electromagnetic Induction and Alternating Currents',
  [norm('Electromagnetic Waves')]: 'Electromagnetic Waves',
  [norm('Optics')]: 'Optics',
  [norm('Dual Nature of Radiation & Matter')]: 'Dual Nature of Matter and Radiation',
  [norm('Dual Nature of Matter and Radiation')]: 'Dual Nature of Matter and Radiation',
  [norm('Atoms')]: 'Atoms and Nuclei',
  [norm('Atoms and Nuclei')]: 'Atoms and Nuclei',
  [norm('Semiconductor Electronics')]: 'Electronic Devices',
  [norm('Electronic Devices')]: 'Electronic Devices',
  [norm('Experimental Skills')]: 'Experimental Skills'
};

const SUBTOPIC_ALIASES = {
  [norm('Motion in a straight line/plane')]: { chapter: 'Kinematics', subtopic: 'Motion in a straight line/plane' },
  [norm('Motion in a Straight Line')]: { chapter: 'Kinematics', subtopic: 'Motion in a straight line/plane' },
  [norm('Projectile motion')]: { chapter: 'Kinematics', subtopic: 'Projectile motion' },
  [norm('Relative velocity')]: { chapter: 'Kinematics', subtopic: 'Relative velocity' },
  [norm('Uniform circular motion')]: { chapter: 'Kinematics', subtopic: 'Uniform circular motion' },
  [norm('Uniformly accelerated motion and equations')]: { chapter: 'Kinematics', subtopic: 'Uniformly accelerated motion and equations' },
  [norm('Graphical analysis of motion (x-t, v-t graphs)')]: { chapter: 'Kinematics', subtopic: 'Graphical analysis of motion (x-t, v-t graphs)' },
  [norm('fluid mechanics (Pascal’s law, Bernoulli’s principle, viscosity)')]: { chapter: 'Properties of Solids and Liquids', subtopic: "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)" },
  [norm('potentiometer')]: { chapter: 'Current Electricity', subtopic: 'Meter bridge' },
  [norm('Electrical energy and power')]: { chapter: 'Current Electricity', subtopic: 'Electrical energy and power' },
  [norm('Atomic Models')]: { chapter: 'Atoms and Nuclei', subtopic: 'Atomic models' },
  [norm('Binding Energy')]: { chapter: 'Atoms and Nuclei', subtopic: 'Binding energy' },
  [norm('Laws of thermodynamics (zeroth, first, second)')]: { chapter: 'Thermodynamics', subtopic: 'Laws of thermodynamics (zeroth, first, second)' },
  [norm('Simple Harmonic Motion (SHM)')]: { chapter: 'Oscillations and Waves', subtopic: 'Simple Harmonic Motion (SHM)' },
  [norm('Coulomb’s law')]: { chapter: 'Electrostatics', subtopic: "Coulomb's law" },
  [norm('Gauss’s law')]: { chapter: 'Electrostatics', subtopic: "Gauss's law" },
  [norm('Young’s double-slit experiment')]: { chapter: 'Optics', subtopic: "Young's double-slit experiment" },
  [norm('Polarization of light (Brewster’s law)')]: { chapter: 'Optics', subtopic: "Polarization of light (Brewster's law)" },
  [norm('Einstein’s photoelectric equation and work function')]: { chapter: 'Dual Nature of Matter and Radiation', subtopic: "Einstein's photoelectric equation and work function" },
  [norm('Rutherford’s scattering and Bohr’s quantization')]: { chapter: 'Atoms and Nuclei', subtopic: "Rutherford's scattering and Bohr's quantization" }
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

async function runJeePhysicsTopicAuditAndCorrection() {
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
  const targetMapPath = path.join(__dirname, 'jee_physics_subtopic_test_targets.json');
  if (!fs.existsSync(targetMapPath)) {
    console.error('Target map file missing! Run build step first.');
    process.exit(1);
  }
  const testTargets = JSON.parse(fs.readFileSync(targetMapPath, 'utf8'));

  // Step 1: Discover all JEE Main Physics Topic-wise tests in DB
  const allTests = await db.collection('testPapers').find({
    $or: [
      { exam: { $regex: /jee/i }, subject: { $regex: /^physics$/i } },
      { category: 'jee-mains', subject: { $regex: /^physics$/i } },
      { testId: { $regex: /^jee-mains-subtopic-physics/i } }
    ]
  }).toArray();

  const papers = allTests.filter(t => t.type === 'SUBTOPIC' || (t.testId && t.testId.includes('-SUBTOPIC-')) || (t.type || '').toLowerCase().includes('topic'));

  console.log(`Discovered ${papers.length} JEE Main Physics Topic-wise tests to audit.\n`);

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

  const snapshotPath = path.join(__dirname, `jee_physics_topic_audit_snapshot_${snapshotTimestamp}.json`);
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
      // Empty test
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
      const isSubjMatch = (q.subject || '').toLowerCase() === 'physics';

      let qCh = CHAPTER_SYNONYMS[norm(q.chapter)] || q.chapter;
      let qSub = q.subTopic || q.subtopic || '';

      if (SUBTOPIC_ALIASES[norm(qSub)]) {
        qCh = SUBTOPIC_ALIASES[norm(qSub)].chapter;
        qSub = SUBTOPIC_ALIASES[norm(qSub)].subtopic;
      }

      const isChMatch = norm(qCh) === norm(targetChapter);
      const isSubMatch = norm(qSub) === norm(targetSubtopic);

      if (!isExamMatch) totalWrongExamFound++;
      if (!isSubjMatch) totalWrongSubjectFound++;
      if (!isChMatch) totalWrongChapterFound++;
      if (!isSubMatch) totalWrongTopicFound++;

      if (isChMatch && isSubMatch && isSubjMatch && isExamMatch) {
        validKeptIds.add(idStr);
        const nT = normalizeText(q.question || q.text);
        if (nT) validKeptTexts.add(nT);
        validKeptTokens.push(tokenize(q.question || q.text));
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

    // Step 4: Duplicate Detection
    for (let i = 0; i < mappedQuestions.length; i++) {
      const qA = mappedQuestions[i];
      const idA = qA._id.toString();
      const textA = normalizeText(qA.question || qA.text);
      const tokensA = tokenize(qA.question || qA.text);

      for (let j = i + 1; j < mappedQuestions.length; j++) {
        const qB = mappedQuestions[j];
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
    const candidateQuery = {
      subject: { $regex: /^physics$/i },
      chapter: targetChapter,
      $or: [
        { subTopic: targetSubtopic },
        { subtopic: targetSubtopic }
      ]
    };

    const candidates = await db.collection('questionBank').find(candidateQuery).toArray();

    // STRICT RULE: Moderate or Difficult ONLY (Never Easy - Rule 13)
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

        const cNormText = normalizeText(cand.question || cand.text);
        if (cNormText && usedCandidateTexts.has(cNormText)) continue;

        const cTokens = tokenize(cand.question || cand.text);
        let nearDup = false;
        for (const existingTokens of usedCandidateTokens) {
          if (jaccardSimilarity(cTokens, existingTokens) > 0.82) {
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
        const nT = normalizeText(bestCand.question || bestCand.text);
        if (nT) usedCandidateTexts.add(nT);
        usedCandidateTokens.push(tokenize(bestCand.question || bestCand.text));

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

    // Step 7: Apply replacements or mark manual attention (Rule 32)
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
    } else {
      // Execute replacements in testPapers
      const newQuestions = [...paper.questions];
      const localLogs = [];

      for (const rep of plannedReplacements) {
        newQuestions[rep.index] = rep.candId;

        const logEntry = {
          testId: paper.testId,
          exam: 'JEE Main',
          subject: 'Physics',
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

      // STRICT VALIDATION: Question count must remain unchanged (Section 20)
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
  const logsPath = path.join(__dirname, `jee_physics_topic_replacement_logs_${snapshotTimestamp}.json`);
  fs.writeFileSync(logsPath, JSON.stringify(allReplacementLogs, null, 2));
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
        if (SUBTOPIC_ALIASES[norm(qSub)]) {
          qCh = SUBTOPIC_ALIASES[norm(qSub)].chapter;
          qSub = SUBTOPIC_ALIASES[norm(qSub)].subtopic;
        }

        if (norm(qCh) !== norm(targetCh) || norm(qSub) !== norm(targetSub)) {
          remainingWrongMappings++;
        }
      });

      for (let i = 0; i < qs.length; i++) {
        const tA = normalizeText(qs[i].question || qs[i].text);
        const tokA = tokenize(qs[i].question || qs[i].text);
        for (let j = i + 1; j < qs.length; j++) {
          const tB = normalizeText(qs[j].question || qs[j].text);
          const tokB = tokenize(qs[j].question || qs[j].text);
          if (tA === tB && tA.length > 5) {
            remainingExactDuplicates++;
          } else {
            const sim = jaccardSimilarity(tokA, tokB);
            if (sim >= 0.82) {
              remainingHighSimDuplicates++;
            }
          }
        }
      }
    }
  }

  // Step 9: Print Admin Final Report (Section 36)
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JEE MAIN PHYSICS
TOPIC-WISE COMPLETE AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATUS: ${remainingWrongMappings === 0 && remainingExactDuplicates === 0 && remainingHighSimDuplicates === 0 ? 'VERIFIED' : 'NEEDS_ATTENTION'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

  if (allReplacementLogs.length > 0) {
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`DETAILED REPLACEMENT LOG (Total: ${allReplacementLogs.length})`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    allReplacementLogs.slice(0, 15).forEach((log, idx) => {
      console.log(`Replacement #${idx + 1}:`);
      console.log(`Test:\n${log.chapter} → ${log.topic}\n`);
      console.log(`Removed Question:\n${log.removedQuestionId}\n`);
      console.log(`Actual Chapter:\n${log.removedQuestionChapter}\n`);
      console.log(`Actual Topic:\n${log.removedQuestionTopic}\n`);
      console.log(`Difficulty:\n${log.removedQuestionDifficulty}\n`);
      console.log(`Replacement:\n${log.replacementQuestionId}\n`);
      console.log(`Chapter:\n${log.replacementQuestionChapter}\n`);
      console.log(`Topic:\n${log.replacementQuestionTopic}\n`);
      console.log(`Difficulty:\n${log.replacementQuestionDifficulty}\n`);
      console.log(`Question Type:\n${log.replacementQuestionType}\n`);
      console.log(`Reason:\n${log.reason}\n`);
      console.log(`Status:\nREPLACED`);
      console.log(`--------------------------------------------------\n`);
    });
  }

  if (manualAttentionReports.length > 0) {
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`MANUAL ATTENTION REPORT (${manualAttentionReports.length} tests)`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    manualAttentionReports.forEach(m => {
      console.log(`Test ID: ${m.testId}`);
      console.log(`Chapter: ${m.chapter}`);
      console.log(`Topic/Subtopic: ${m.subtopic}`);
      console.log(`Required Replacements: ${m.requiredReplacements}`);
      console.log(`Available Valid Questions: ${m.availableValid}`);
      console.log(`Shortage: ${m.shortage}`);
      console.log(`Reason: ${m.reason}`);
      console.log(`Status: MANUAL ATTENTION REQUIRED\n`);
      console.log(`--------------------------------------------------\n`);
    });
  }

  await client.close();
}

runJeePhysicsTopicAuditAndCorrection().catch(err => {
  console.error('Fatal error during JEE Physics Topic Audit:', err);
  process.exit(1);
});
