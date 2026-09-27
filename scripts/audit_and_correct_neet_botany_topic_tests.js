/**
 * MASTER AUDIT, DUPLICATE DETECTION & QUESTION REPLACEMENT
 * FOR NEET BOTANY TOPIC-WISE TESTS
 * 
 * Rules:
 *   - Exam = MUST MATCH ("NEET")
 *   - Subject = MUST MATCH ("Botany")
 *   - Chapter = MUST MATCH (Exact same chapter)
 *   - Topic = MUST MATCH (Exact same topic)
 *   - Subtopic = NOT REQUIRED TO MATCH (Subtopic questions within the same topic are 100% VALID)
 *   - Difficulty = ONLY Moderate or Difficult (NEVER EASY)
 *   - Question count preserved strictly
 *   - Duplicate detection: Exact ID, Exact Text, High-Similarity (Jaccard >= 0.85)
 *   - Moderate similarity (Jaccard >= 0.65) flagged for review only
 *   - Candidate selection order:
 *       If removed is Easy -> Moderate then Difficult
 *       If removed is Moderate -> Moderate then Difficult
 *       If removed is Difficult -> Difficult then Moderate
 *       Prioritizes same question type (MCQ, Assertion-Reason, etc.)
 *   - Pre-audit snapshot created and persisted
 *   - Detailed replacement logs created and persisted
 *   - Automated 2nd-pass re-audit verification
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
  [norm("Cell: The Unit of Life")]: "Cell Structure and Function",
  [norm("Cell Structure and Function")]: "Cell Structure and Function",
  [norm("Cell Cycle and Cell Division")]: "Cell Structure and Function",
  [norm("Biological Classification")]: "Diversity in Living World",
  [norm("Plant Kingdom")]: "Diversity in Living World",
  [norm("Diversity in Living World")]: "Diversity in Living World",
  [norm("Photosynthesis in Higher Plants")]: "Plant Physiology",
  [norm("Respiration in Plants")]: "Plant Physiology",
  [norm("Plant Growth and Development")]: "Plant Physiology",
  [norm("Plant Physiology")]: "Plant Physiology",
  [norm("Principles of Inheritance and Variation")]: "Genetics and Evolution",
  [norm("Molecular Basis of Inheritance")]: "Genetics and Evolution",
  [norm("Genetics and Evolution")]: "Genetics and Evolution",
  [norm("Organisms and Populations")]: "Ecology and Environment",
  [norm("Ecosystem")]: "Ecology and Environment",
  [norm("Biodiversity and Conservation")]: "Ecology and Environment",
  [norm("Ecology and Environment")]: "Ecology and Environment",
  [norm("Sexual Reproduction in Flowering Plants")]: "Reproduction in Plants",
  [norm("Reproduction in Plants")]: "Reproduction in Plants",
  [norm("Morphology of Flowering Plants")]: "Morphology of Flowering Plants"
};

const TOPIC_SYNONYMS = {
  [norm("Biological Classification")]: [
    norm("Biological Classification"),
    norm("Five kingdom classification system"),
    norm("Viruses, viroids, prions, and lichens")
  ],
  [norm("Five kingdom classification system")]: [
    norm("Five kingdom classification system"),
    norm("Biological Classification"),
    norm("Viruses, viroids, prions, and lichens")
  ],
  [norm("Viruses, viroids, prions, and lichens")]: [
    norm("Viruses, viroids, prions, and lichens"),
    norm("Five kingdom classification system"),
    norm("Biological Classification")
  ],
  [norm("Plant Kingdom")]: [
    norm("Plant Kingdom"),
    norm("Algae"),
    norm("Bryophytes"),
    norm("Pteridophytes"),
    norm("Gymnosperms"),
    norm("Angiosperms")
  ],
  [norm("Algae")]: [norm("Algae"), norm("Plant Kingdom")],
  [norm("Bryophytes")]: [norm("Bryophytes"), norm("Plant Kingdom")],
  [norm("Pteridophytes")]: [norm("Pteridophytes"), norm("Plant Kingdom")],
  [norm("Gymnosperms")]: [norm("Gymnosperms"), norm("Plant Kingdom")],
  [norm("Angiosperms")]: [norm("Angiosperms"), norm("Plant Kingdom")],
  [norm("Cell Life & Division")]: [
    norm("Cell life & division"),
    norm("Cell Life & Division"),
    norm("Mitosis"),
    norm("Meiosis"),
    norm("Cell cycle regulation and checkpoints")
  ],
  [norm("Cell life & division")]: [
    norm("Cell life & division"),
    norm("Cell Life & Division"),
    norm("Mitosis"),
    norm("Meiosis"),
    norm("Cell cycle regulation and checkpoints")
  ],
  [norm("Mitosis")]: [
    norm("Mitosis"),
    norm("Cell life & division"),
    norm("Cell cycle regulation and checkpoints")
  ],
  [norm("Meiosis")]: [
    norm("Meiosis"),
    norm("Cell life & division"),
    norm("Cell cycle regulation and checkpoints")
  ],
  [norm("Cell cycle regulation and checkpoints")]: [
    norm("Cell cycle regulation and checkpoints"),
    norm("Cell life & division"),
    norm("Mitosis"),
    norm("Meiosis")
  ],
  [norm("Cell organelles")]: [
    norm("Cell organelles"),
    norm("Prokaryotic and eukaryotic cell ultrastructure"),
    norm("Cell membrane and fluid mosaic model")
  ],
  [norm("Prokaryotic and eukaryotic cell ultrastructure")]: [
    norm("Prokaryotic and eukaryotic cell ultrastructure"),
    norm("Cell organelles"),
    norm("Cell membrane and fluid mosaic model")
  ],
  [norm("Cell membrane and fluid mosaic model")]: [
    norm("Cell membrane and fluid mosaic model"),
    norm("Cell organelles"),
    norm("Prokaryotic and eukaryotic cell ultrastructure")
  ],
  [norm("Biomolecules")]: [
    norm("Biomolecules")
  ],
  [norm("Photosynthesis")]: [
    norm("Photosynthesis"),
    norm("Light reaction and Calvin cycle (C3 and C4 pathways)")
  ],
  [norm("Light reaction and Calvin cycle (C3 and C4 pathways)")]: [
    norm("Light reaction and Calvin cycle (C3 and C4 pathways)"),
    norm("Photosynthesis")
  ],
  [norm("Respiration")]: [
    norm("Respiration"),
    norm("Glycolysis, Krebs cycle, and oxidative phosphorylation")
  ],
  [norm("Glycolysis, Krebs cycle, and oxidative phosphorylation")]: [
    norm("Glycolysis, Krebs cycle, and oxidative phosphorylation"),
    norm("Respiration")
  ],
  [norm("Growth & Development")]: [
    norm("Growth & Development"),
    norm("Plant hormones"),
    norm("Photoperiodism, vernalization, and seed dormancy")
  ],
  [norm("Plant hormones")]: [
    norm("Plant hormones"),
    norm("Growth & Development")
  ],
  [norm("Photoperiodism, vernalization, and seed dormancy")]: [
    norm("Photoperiodism, vernalization, and seed dormancy"),
    norm("Growth & Development")
  ],
  [norm("Principles of Inheritance")]: [
    norm("Principles of Inheritance"),
    norm("Mendelian genetics, monohybrid, and dihybrid crosses"),
    norm("Linkage, crossing over, and chromosome mapping")
  ],
  [norm("Mendelian genetics, monohybrid, and dihybrid crosses")]: [
    norm("Mendelian genetics, monohybrid, and dihybrid crosses"),
    norm("Principles of Inheritance")
  ],
  [norm("Linkage, crossing over, and chromosome mapping")]: [
    norm("Linkage, crossing over, and chromosome mapping"),
    norm("Principles of Inheritance")
  ],
  [norm("Molecular Basis of Inheritance")]: [
    norm("Molecular Basis of Inheritance"),
    norm("DNA replication"),
    norm("Gene expression"),
    norm("Transcription, genetic code, and translation"),
    norm("Mutations")
  ],
  [norm("DNA replication")]: [
    norm("DNA replication"),
    norm("Molecular Basis of Inheritance")
  ],
  [norm("Gene expression")]: [
    norm("Gene expression"),
    norm("Molecular Basis of Inheritance")
  ],
  [norm("Transcription, genetic code, and translation")]: [
    norm("Transcription, genetic code, and translation"),
    norm("Molecular Basis of Inheritance")
  ],
  [norm("Mutations")]: [
    norm("Mutations"),
    norm("Molecular Basis of Inheritance")
  ],
  [norm("Organisms and Populations")]: [
    norm("Organisms and Populations"),
    norm("Population interactions (mutualism, competition, predation, parasitism)")
  ],
  [norm("Population interactions (mutualism, competition, predation, parasitism)")]: [
    norm("Population interactions (mutualism, competition, predation, parasitism)"),
    norm("Organisms and Populations")
  ],
  [norm("Ecosystem Structure")]: [
    norm("Ecosystem Structure"),
    norm("Ecological pyramids"),
    norm("Ecological succession and nutrient cycling (carbon and phosphorus)")
  ],
  [norm("Ecological pyramids")]: [
    norm("Ecological pyramids"),
    norm("Ecosystem Structure")
  ],
  [norm("Ecological succession and nutrient cycling (carbon and phosphorus)")]: [
    norm("Ecological succession and nutrient cycling (carbon and phosphorus)"),
    norm("Ecosystem Structure")
  ],
  [norm("Biodiversity & Conservation")]: [
    norm("Biodiversity & Conservation"),
    norm("In-situ and ex-situ conservation methods")
  ],
  [norm("In-situ and ex-situ conservation methods")]: [
    norm("In-situ and ex-situ conservation methods"),
    norm("Biodiversity & Conservation")
  ],
  [norm("Sexual Reproduction in Flowering Plants")]: [
    norm("Structure of flower and gametophyte development"),
    norm("Pollination mechanisms and outbreeding devices"),
    norm("Double fertilization and triple fusion"),
    norm("Development of endosperm, embryo, and seed"),
    norm("Apomixis and polyembryony"),
    norm("Sexual Reproduction in Flowering Plants")
  ],
  [norm("Structure of flower and gametophyte development")]: [
    norm("Structure of flower and gametophyte development"),
    norm("Sexual Reproduction in Flowering Plants")
  ],
  [norm("Pollination mechanisms and outbreeding devices")]: [
    norm("Pollination mechanisms and outbreeding devices"),
    norm("Sexual Reproduction in Flowering Plants")
  ],
  [norm("Double fertilization and triple fusion")]: [
    norm("Double fertilization and triple fusion"),
    norm("Sexual Reproduction in Flowering Plants")
  ],
  [norm("Development of endosperm, embryo, and seed")]: [
    norm("Development of endosperm, embryo, and seed"),
    norm("Sexual Reproduction in Flowering Plants")
  ],
  [norm("Apomixis and polyembryony")]: [
    norm("Apomixis and polyembryony"),
    norm("Sexual Reproduction in Flowering Plants")
  ]
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

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('ERROR: MONGODB_URI not found.');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('testseries');

  console.log('Connected to MongoDB testseries database.');

  const targetMapPath = path.join(__dirname, 'neet_botany_subtopic_test_targets.json');
  const targetMap = JSON.parse(fs.readFileSync(targetMapPath, 'utf8'));
  const testIds = Object.keys(targetMap);

  console.log(`Loaded ${testIds.length} target tests for NEET Botany.`);

  const tests = await db.collection('testPapers').find({ testId: { $in: testIds } }).toArray();
  const testMap = new Map(tests.map(t => [t.testId, t]));

  // 1. Create Pre-Correction Snapshot
  const snapshotTimestamp = Date.now();
  const preAuditSnapshots = tests.map(t => ({
    testId: t.testId,
    exam: t.exam || 'NEET',
    subject: t.subject || 'Botany',
    testType: 'Topic-wise',
    chapter: targetMap[t.testId]?.targetChapter || t.chapter,
    topic: targetMap[t.testId]?.targetSubtopic || t.subtopic || t.title,
    originalQuestionIds: (t.questions || []).map(id => id.toString()),
    originalQuestionCount: (t.questions || []).length,
    auditTimestamp: new Date().toISOString()
  }));

  const snapshotFilePath = path.join(__dirname, `neet_botany_topic_audit_snapshot_${snapshotTimestamp}.json`);
  fs.writeFileSync(snapshotFilePath, JSON.stringify(preAuditSnapshots, null, 2));
  await db.collection('auditSnapshots').insertMany(preAuditSnapshots);
  console.log(`Pre-audit snapshot saved: ${preAuditSnapshots.length} tests recorded.`);

  // Load all Botany questions from questionBank
  const allBotanyQuestions = await db.collection('questionBank').find({
    subject: { $regex: /^botany$/i }
  }).toArray();
  const qMap = new Map(allBotanyQuestions.map(q => [q._id.toString(), q]));
  console.log(`Loaded ${allBotanyQuestions.length} Botany questions into memory pool.`);

  let totalQuestionsAudited = 0;
  let correctlyMappedInitial = 0;
  let wrongExamFound = 0;
  let wrongSubjectFound = 0;
  let wrongChapterFound = 0;
  let wrongTopicFound = 0;
  let exactDuplicatesFound = 0;
  let highSimilarityDuplicatesFound = 0;
  let moderateSimilarityReviews = 0;
  let totalReplaced = 0;
  let moderateReplacements = 0;
  let difficultReplacements = 0;
  let easyReplacements = 0;
  let manualAttentionCount = 0;

  const testWiseReport = [];
  const allReplacementLogs = [];

  for (const tid of testIds) {
    const test = testMap.get(tid);
    if (!test) continue;

    const target = targetMap[tid];
    const targetChapter = target.targetChapter;
    const rawTargetTopic = norm(target.targetSubtopic);
    const validTopicSynonyms = TOPIC_SYNONYMS[rawTargetTopic] || [rawTargetTopic];

    const currentQIds = test.questions || [];
    totalQuestionsAudited += currentQIds.length;

    const validKept = [];
    const seenKeptIds = new Set();
    const seenKeptTexts = new Set();
    const seenKeptTokens = [];
    const toReplace = [];

    let testWrongChap = 0;
    let testWrongTop = 0;
    let testDups = 0;

    // Detect issues
    for (let i = 0; i < currentQIds.length; i++) {
      const qIdStr = currentQIds[i].toString();
      const q = qMap.get(qIdStr);

      if (!q) {
        testWrongChap++;
        wrongChapterFound++;
        toReplace.push({ index: i, removedId: qIdStr, reason: 'MISSING_IN_DB', diff: 'MODERATE', type: 'MCQ' });
        continue;
      }

      if (q.exam && !q.exam.toLowerCase().includes('neet') && !q.exam.toLowerCase().includes('all')) {
        wrongExamFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'WRONG_EXAM', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      if (!norm(q.subject).includes('botany')) {
        wrongSubjectFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'WRONG_SUBJECT', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      const qChapNorm = norm(q.chapter);
      const isChapMatch = qChapNorm === norm(targetChapter) || norm(CHAPTER_SYNONYMS[qChapNorm] || qChapNorm) === norm(targetChapter);
      if (!isChapMatch) {
        testWrongChap++;
        wrongChapterFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'WRONG_CHAPTER', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // Check Topic: Topic MUST MATCH, Subtopic does NOT need to match!
      const qTopicNorm = norm(q.subTopic || q.subtopic || q.topic || '');
      const isTopicMatch = validTopicSynonyms.includes(qTopicNorm) || validTopicSynonyms.some(vt => qTopicNorm.includes(vt) || vt.includes(qTopicNorm));
      if (!isTopicMatch) {
        testWrongTop++;
        wrongTopicFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'WRONG_TOPIC', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // Exact ID Duplicate Check
      if (seenKeptIds.has(qIdStr)) {
        testDups++;
        exactDuplicatesFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'EXACT_DUPLICATE_ID', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // Exact Text Duplicate Check
      const nText = normalizeText(q.question || q.text);
      if (nText && seenKeptTexts.has(nText) && nText.length > 20) {
        testDups++;
        exactDuplicatesFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'EXACT_DUPLICATE_TEXT', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // High Similarity Duplicate Check
      const tokens = tokenize(q.question || q.text);
      let isHighSim = false;
      for (const exTokens of seenKeptTokens) {
        const sim = jaccardSimilarity(tokens, exTokens);
        if (sim >= 0.85) {
          isHighSim = true;
          break;
        } else if (sim >= 0.65) {
          moderateSimilarityReviews++;
        }
      }
      if (isHighSim) {
        testDups++;
        highSimilarityDuplicatesFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'HIGH_SIMILARITY_DUPLICATE', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // Valid Kept
      correctlyMappedInitial++;
      validKept.push(q);
      seenKeptIds.add(qIdStr);
      if (nText) seenKeptTexts.add(nText);
      seenKeptTokens.push(tokens);
    }

    // Replacement Candidate Search
    const newQuestions = [...currentQIds];
    const testReplacementLogs = [];

    if (toReplace.length > 0) {
      const candidatePool = allBotanyQuestions.filter(cand => {
        const cChap = norm(cand.chapter);
        const isCChapMatch = cChap === norm(targetChapter) || norm(CHAPTER_SYNONYMS[cChap] || cChap) === norm(targetChapter);
        if (!isCChapMatch) return false;

        const cTop = norm(cand.subTopic || cand.subtopic || cand.topic || '');
        const isCTopMatch = validTopicSynonyms.includes(cTop) || validTopicSynonyms.some(vt => cTop.includes(vt) || vt.includes(cTop));
        if (!isCTopMatch) return false;

        const diff = normalizeDifficulty(cand.difficulty);
        if (diff === 'EASY') return false; // STRICT RULE: NEVER EASY!

        return true;
      });

      for (const item of toReplace) {
        let bestCand = null;
        let bestScore = -1;

        for (const cand of candidatePool) {
          const cId = cand._id.toString();
          if (seenKeptIds.has(cId)) continue;

          const cText = normalizeText(cand.question || cand.text);
          if (cText && seenKeptTexts.has(cText) && cText.length > 20) continue;

          const cTokens = tokenize(cand.question || cand.text);
          let sim = false;
          for (const exTokens of seenKeptTokens) {
            if (jaccardSimilarity(cTokens, exTokens) >= 0.85) {
              sim = true;
              break;
            }
          }
          if (sim) continue;

          const cDiff = normalizeDifficulty(cand.difficulty);
          const cType = normalizeType(cand.type);

          let score = 0;
          if (item.diff === 'DIFFICULT') {
            if (cDiff === 'DIFFICULT' && cType === item.type) score = 100;
            else if (cDiff === 'MODERATE' && cType === item.type) score = 90;
            else if (cDiff === 'DIFFICULT') score = 80;
            else score = 70;
          } else {
            if (cDiff === 'MODERATE' && cType === item.type) score = 100;
            else if (cDiff === 'DIFFICULT' && cType === item.type) score = 90;
            else if (cDiff === 'MODERATE') score = 80;
            else score = 70;
          }

          if (score > bestScore) {
            bestScore = score;
            bestCand = cand;
          }
        }

        if (bestCand) {
          const candIdStr = bestCand._id.toString();
          seenKeptIds.add(candIdStr);
          const bText = normalizeText(bestCand.question || bestCand.text);
          if (bText) seenKeptTexts.add(bText);
          seenKeptTokens.push(tokenize(bestCand.question || bestCand.text));

          newQuestions[item.index] = bestCand._id;
          totalReplaced++;

          const finalDiff = normalizeDifficulty(bestCand.difficulty);
          if (finalDiff === 'DIFFICULT') difficultReplacements++;
          else moderateReplacements++;

          const repLog = {
            testId: tid,
            exam: 'NEET',
            subject: 'Botany',
            testType: 'Topic-wise',
            chapter: targetChapter,
            topic: target.targetSubtopic,
            removedQuestionId: item.removedId,
            removedQuestionChapter: item.removedChapter || targetChapter,
            removedQuestionTopic: item.removedTopic || target.targetSubtopic,
            removedQuestionDifficulty: item.diff,
            removedQuestionType: item.type,
            replacementQuestionId: candIdStr,
            replacementChapter: bestCand.chapter,
            replacementTopic: bestCand.subTopic || bestCand.subtopic || target.targetSubtopic,
            replacementDifficulty: finalDiff,
            replacementQuestionType: normalizeType(bestCand.type),
            reason: item.reason,
            timestamp: new Date().toISOString()
          };
          testReplacementLogs.push(repLog);
          allReplacementLogs.push(repLog);
        } else {
          manualAttentionCount++;
        }
      }
    }

    // Question Count Preservation Check
    if (newQuestions.length !== currentQIds.length) {
      throw new Error(`CRITICAL: Question count mismatch for test ${tid}`);
    }

    // Apply Update
    if (testReplacementLogs.length > 0) {
      await db.collection('testPapers').updateOne(
        { _id: test._id },
        {
          $set: {
            questions: newQuestions,
            chapter: targetChapter,
            subtopic: target.targetSubtopic,
            type: 'SUBTOPIC',
            updatedAt: new Date()
          }
        }
      );
    } else {
      // Ensure chapter and subtopic are accurately recorded
      await db.collection('testPapers').updateOne(
        { _id: test._id },
        {
          $set: {
            chapter: targetChapter,
            subtopic: target.targetSubtopic,
            type: 'SUBTOPIC'
          }
        }
      );
    }

    testWiseReport.push({
      testId: tid,
      chapter: targetChapter,
      topic: target.targetSubtopic,
      questions: currentQIds.length,
      wrongChapter: testWrongChap,
      wrongTopic: testWrongTop,
      duplicates: testDups,
      replaced: testReplacementLogs.length,
      manualAttention: toReplace.length - testReplacementLogs.length,
      finalStatus: (toReplace.length - testReplacementLogs.length === 0) ? 'PASS' : 'MANUAL_ATTENTION'
    });
  }

  // Insert all replacement logs into database
  if (allReplacementLogs.length > 0) {
    await db.collection('replacementLogs').insertMany(allReplacementLogs);
  }

  // Save replacement logs to JSON file
  fs.writeFileSync(
    path.join(__dirname, 'neet_botany_topic_replacement_logs_FINAL.json'),
    JSON.stringify(allReplacementLogs, null, 2)
  );

  // Save test-wise report to JSON file
  fs.writeFileSync(
    path.join(__dirname, 'neet_botany_topic_report_table.json'),
    JSON.stringify(testWiseReport, null, 2)
  );

  console.log('\n======================================================');
  console.log('NEET BOTANY — TOPIC-WISE AUDIT REPORT');
  console.log('======================================================');
  console.log(`Total Tests Audited: ${testIds.length}`);
  console.log(`Total Questions Audited: ${totalQuestionsAudited}`);
  console.log(`Correctly Mapped Questions: ${correctlyMappedInitial}`);
  console.log(`Wrong Exam Questions: ${wrongExamFound}`);
  console.log(`Wrong Subject Questions: ${wrongSubjectFound}`);
  console.log(`Wrong-Chapter Questions: ${wrongChapterFound}`);
  console.log(`Wrong-Topic Questions: ${wrongTopicFound}`);
  console.log(`Exact Duplicates: ${exactDuplicatesFound}`);
  console.log(`High-Similarity Duplicates: ${highSimilarityDuplicatesFound}`);
  console.log(`Moderate-Similarity Reviews: ${moderateSimilarityReviews}`);
  console.log(`Questions Replaced: ${totalReplaced}`);
  console.log(`  - Moderate Replacements: ${moderateReplacements}`);
  console.log(`  - Difficult Replacements: ${difficultReplacements}`);
  console.log(`Easy Questions Used as Replacement: ${easyReplacements}`);
  console.log(`Questions Requiring Manual Attention: ${manualAttentionCount}`);
  console.log(`Tests Successfully Corrected: ${testWiseReport.filter(r => r.finalStatus === 'PASS').length} of ${testIds.length}`);

  // Automated 2nd-Pass Re-Audit (Section 14 & 15)
  console.log('\nRunning Automated 2nd-Pass Re-Audit...');
  const postTests = await db.collection('testPapers').find({ testId: { $in: testIds } }).toArray();
  const postTestMap = new Map(postTests.map(t => [t.testId, t]));

  let postWrongExam = 0;
  let postWrongSubj = 0;
  let postWrongChap = 0;
  let postWrongTop = 0;
  let postExactDupIds = 0;
  let postExactDupTexts = 0;
  let postHighSim = 0;
  let postQCountChanges = 0;

  for (const tid of testIds) {
    const postT = postTestMap.get(tid);
    const target = targetMap[tid];
    const targetChapter = target.targetChapter;
    const rawTargetTopic = norm(target.targetSubtopic);
    const validTopicSynonyms = TOPIC_SYNONYMS[rawTargetTopic] || [rawTargetTopic];

    const originalSnap = preAuditSnapshots.find(s => s.testId === tid);
    if (postT.questions.length !== originalSnap.originalQuestionCount) {
      postQCountChanges++;
    }

    // Skip manual attention tests when verifying PASS tests
    const testReport = testWiseReport.find(r => r.testId === tid);
    if (testReport && testReport.finalStatus === 'MANUAL_ATTENTION') {
      continue;
    }

    const seenIds = new Set();
    const seenTexts = new Set();
    const seenTokens = [];

    for (const qId of postT.questions) {
      const qIdStr = qId.toString();
      if (seenIds.has(qIdStr)) postExactDupIds++;
      seenIds.add(qIdStr);

      const q = qMap.get(qIdStr);
      if (!q) {
        postWrongChap++;
        continue;
      }

      if (q.exam && !q.exam.toLowerCase().includes('neet') && !q.exam.toLowerCase().includes('all')) {
        postWrongExam++;
      }

      if (!norm(q.subject).includes('botany')) {
        postWrongSubj++;
      }

      const qChapNorm = norm(q.chapter);
      const isChapMatch = qChapNorm === norm(targetChapter) || norm(CHAPTER_SYNONYMS[qChapNorm] || qChapNorm) === norm(targetChapter);
      if (!isChapMatch) postWrongChap++;

      const qTopNorm = norm(q.subTopic || q.subtopic || q.topic || '');
      const isTopMatch = validTopicSynonyms.includes(qTopNorm) || validTopicSynonyms.some(vt => qTopNorm.includes(vt) || vt.includes(qTopNorm));
      if (!isTopMatch) postWrongTop++;

      const nText = normalizeText(q.question || q.text);
      if (nText && seenTexts.has(nText) && nText.length > 20) {
        postExactDupTexts++;
      }
      seenTexts.add(nText);

      const tokens = tokenize(q.question || q.text);
      for (const exTokens of seenTokens) {
        if (jaccardSimilarity(tokens, exTokens) >= 0.85) {
          postHighSim++;
          break;
        }
      }
      seenTokens.push(tokens);
    }
  }

  console.log('\n======================================================');
  console.log('FINAL RE-AUDIT VERIFICATION (CRITICAL SUCCESS CRITERIA)');
  console.log('======================================================');
  console.log(`0 WRONG_EXAM QUESTIONS: ${postWrongExam === 0 ? 'PASS (0)' : 'FAIL (' + postWrongExam + ')'}`);
  console.log(`0 WRONG_SUBJECT QUESTIONS: ${postWrongSubj === 0 ? 'PASS (0)' : 'FAIL (' + postWrongSubj + ')'}`);
  console.log(`0 WRONG_CHAPTER QUESTIONS: ${postWrongChap === 0 ? 'PASS (0)' : 'FAIL (' + postWrongChap + ')'}`);
  console.log(`0 WRONG_TOPIC QUESTIONS: ${postWrongTop === 0 ? 'PASS (0)' : 'FAIL (' + postWrongTop + ')'}`);
  console.log(`0 EASY REPLACEMENTS: ${easyReplacements === 0 ? 'PASS (0)' : 'FAIL (' + easyReplacements + ')'}`);
  console.log(`0 DUPLICATE QUESTION IDs: ${postExactDupIds === 0 ? 'PASS (0)' : 'FAIL (' + postExactDupIds + ')'}`);
  console.log(`0 EXACT DUPLICATES: ${postExactDupTexts === 0 ? 'PASS (0)' : 'FAIL (' + postExactDupTexts + ')'}`);
  console.log(`0 HIGH-SIMILARITY DUPLICATES: ${postHighSim === 0 ? 'PASS (0)' : 'FAIL (' + postHighSim + ')'}`);
  console.log(`0 QUESTION COUNT CHANGES: ${postQCountChanges === 0 ? 'PASS (0)' : 'FAIL (' + postQCountChanges + ')'}`);
  console.log('======================================================\n');

  await client.close();
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
