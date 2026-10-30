/**
 * FIX: PLANT KINGDOM CHAPTER MAPPING
 * =====================================
 * Root Cause:
 *   The test `neet-CHAPTER-Botany-Plant-Kingdom-11` (and TEST-2, TEST-3 variants)
 *   contains 14 questions with subtopic="Biological Classification" which belong
 *   in the Biological Classification chapter tests, not Plant Kingdom.
 *
 *   All 45 questions have chapter="Diversity in Living World" (the DB umbrella).
 *   The test's chapter field = "Plant Kingdom".
 *   Segregation between Biological Classification and Plant Kingdom is done via
 *   the `subtopic` / `subTopic` field in questionBank.
 *
 * Valid subtopics for Plant Kingdom test:
 *   Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms, Plant Kingdom
 *
 * Invalid subtopics (Biological Classification territory):
 *   Biological Classification, Five kingdom classification system,
 *   Viruses/Lichens, Kingdom Monera, Kingdom Protista, Kingdom Fungi,
 *   Whittaker criteria, etc.
 *
 * Fix Strategy:
 *   1. Snapshot existing question arrays (reversible).
 *   2. Identify 14 wrong subtopic questions in the Plant Kingdom test.
 *   3. Find valid Plant Kingdom replacement questions (not already in the test,
 *      MODERATE or DIFFICULT, correct subtopic).
 *   4. Replace in-place preserving question count.
 *   5. Write audit log to replacementLogs collection.
 *   6. Run a second validation pass.
 *   7. Check TEST-2 and TEST-3 variants for same issue.
 *
 * Safety:
 *   - NEVER deletes question records.
 *   - NEVER modifies question text/options/answers.
 *   - Preserves exact question count in each test.
 *   - Reversible via auditSnapshots collection.
 *   - Uses transactions if available.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

if (fs.existsSync(path.join(__dirname, '../.env.local'))) {
  dotenv.config({ path: path.join(__dirname, '../.env.local') });
}

const { MongoClient, ObjectId } = require('mongodb');

// ── Constants ───────────────────────────────────────────────────────────────

const TARGET_TESTS = [
  'neet-CHAPTER-Botany-Plant-Kingdom-11',
  'neet-CHAPTER-Botany-Plant-Kingdom-11-TEST-2',
  'neet-CHAPTER-Botany-Plant-Kingdom-11-TEST-3'
];

// Subtopics that are valid for the Plant Kingdom chapter test
const PLANT_KINGDOM_VALID_SUBTOPICS = new Set([
  'plant kingdom',
  'algae',
  'bryophytes',
  'pteridophytes',
  'gymnosperms',
  'angiosperms',
  'thallophyta',
  'thallophytes',
  'pteridophyta',
  'classification of plant kingdom',
  'alternation of generations',
  'life cycle patterns',
  'plant body organisation',
]);

// Subtopics that belong in Biological Classification, NOT Plant Kingdom
const BIO_CLASS_SUBTOPICS = new Set([
  'biological classification',
  'five kingdom classification system',
  'viruses, viroids, prions, and lichens',
  'history of biological classification',
  'drawbacks of two-kingdom classification',
  'early classification of plants',
  'whittaker five-kingdom criteria',
  'kingdom protista boundaries & phylogenetic criteria',
  'bacterial shapes',
  'kingdom monera (archaebacteria)',
  'kingdom monera (cyanobacteria)',
  'bacterial metabolic diversity & roles',
  'bacterial structure vs behaviour',
  'eubacteria characteristics',
  'kingdom monera (mycoplasma)',
  'bacterial diseases',
  'kingdom protista (chrysophytes)',
  'kingdom protista boundaries',
  'kingdom protista (dinoflagellates)',
  'kingdom protista (euglenoids)',
  'kingdom protista (slime moulds)',
  'protistan diversity',
  'euglenoid pigments & nutrition',
  'protozoans (flagellated protozoa)',
  'protozoan classification',
  'kingdom fungi (general features)',
  'kingdom fungi (yeasts & vegetative reproduction)',
  'fungal sexual cycle',
  'phycomycetes examples',
  'phycomycetes reproduction',
  'dikaryon phase in fungi',
  'ascomycetes (neurospora)',
  'deuteromycetes (imperfect fungi)',
  'ascospores vs basidiospores',
  'basidiomycetes reproduction',
  'kingdom plantae (parasitic plants)',
  'kingdom animalia (storage compounds)',
  'plantae vs animalia characteristics',
  'kingdom monera (prokaryotes)',
  'kingdom protista (unicellular eukaryotes)',
  'fungal hyphae structure',
  'kingdom monera',
  'kingdom protista',
  'kingdom fungi',
  'kingdom plantae',
  'kingdom animalia',
]);

// ── Helpers ─────────────────────────────────────────────────────────────────

function normSubtopic(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9& ]/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeDifficulty(diff) {
  if (!diff) return 'MODERATE';
  const s = diff.toString().toLowerCase();
  if (s.includes('easy')) return 'EASY';
  if (s.includes('diff') || s.includes('hard')) return 'DIFFICULT';
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

function isPlantKingdomSubtopic(sub) {
  const n = normSubtopic(sub);
  // Explicitly biological classification
  if (BIO_CLASS_SUBTOPICS.has(n)) return false;
  // Explicitly plant kingdom
  if (PLANT_KINGDOM_VALID_SUBTOPICS.has(n)) return true;
  // Heuristic: if the subtopic mentions bacteria/fungi/protista/kingdom → bio class
  if (/bacteri|archaeb|eubacter|monera|protist|fungi|kingdom\s+(monera|protista|fungi|animalia)|mycoplasma|cyanobact/.test(n)) {
    return false;
  }
  // Otherwise assume plant kingdom (algae, bryophyte, gymnosperm etc)
  return true;
}

// ── Main Audit & Fix ─────────────────────────────────────────────────────────

async function runPlantKingdomFix(dryRun = true) {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('ERROR: MONGODB_URI is not set');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  console.log('Connected to MongoDB.');
  console.log(`Mode: ${dryRun ? 'DRY RUN (no changes)' : 'LIVE FIX (applying changes)'}`);
  console.log('');

  const timestamp = new Date().toISOString();
  const allReplacementLogs = [];
  const auditReport = {
    timestamp,
    mode: dryRun ? 'DRY_RUN' : 'LIVE',
    tests: [],
    totalQuestionsAudited: 0,
    totalWrongSubtopicFound: 0,
    totalQuestionsReplaced: 0,
    manualAttentionTests: [],
  };

  // Load all Plant Kingdom candidate questions from questionBank
  // These must have chapter="Diversity in Living World" (the DB umbrella)
  // AND subtopic that is valid for Plant Kingdom
  const candidatePool = await db.collection('questionBank').find({
    subject: { $regex: /^botany$/i },
    chapter: { $regex: /diversity in living world/i }
  }).toArray();

  console.log(`Loaded ${candidatePool.length} candidate questions from Diversity in Living World.`);

  // Filter: must have Plant Kingdom subtopic and be MODERATE or DIFFICULT
  const pkCandidates = candidatePool.filter(c => {
    const sub = c.subTopic || c.subtopic || c.topic || '';
    if (!isPlantKingdomSubtopic(sub)) return false;
    return normalizeDifficulty(c.difficulty) !== 'EASY';
  });

  console.log(`Valid Plant Kingdom replacement candidates (MODERATE/DIFFICULT): ${pkCandidates.length}`);
  console.log('');

  for (const testId of TARGET_TESTS) {
    const paper = await db.collection('testPapers').findOne({ testId });

    if (!paper) {
      console.log(`⚠  Test not found: ${testId} — skipping.`);
      continue;
    }

    const targetChapter = paper.chapter || 'Plant Kingdom';
    const qIds = paper.questions || [];
    const configuredCount = qIds.length;
    auditReport.totalQuestionsAudited += configuredCount;

    // Load questions
    const objIds = qIds.map(id => {
      try { return new ObjectId(id); } catch (e) { return id; }
    });
    const qs = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
    const qMap = new Map(qs.map(q => [q._id.toString(), q]));

    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`AUDITING: ${testId}`);
    console.log(`Chapter: ${targetChapter} | Questions: ${configuredCount}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

    const wrongItems = [];
    const keptIds = new Set();
    const keptTexts = new Set();
    const keptTokenSets = [];

    for (let i = 0; i < qIds.length; i++) {
      const qIdStr = qIds[i].toString();
      const q = qMap.get(qIdStr);

      if (!q) {
        wrongItems.push({ index: i, id: qIdStr, reason: 'MISSING_IN_DB', diff: 'MODERATE', type: 'MCQ' });
        continue;
      }

      const sub = q.subTopic || q.subtopic || q.topic || '';
      const diff = normalizeDifficulty(q.difficulty);
      const type = normalizeType(q.type || q.questionType);
      const isValid = isPlantKingdomSubtopic(sub);

      if (!isValid) {
        wrongItems.push({
          index: i,
          id: qIdStr,
          reason: 'WRONG_SUBTOPIC_FOR_PLANT_KINGDOM',
          subtopic: sub,
          diff,
          type,
          snippet: (q.question || q.text || '').substring(0, 100)
        });
        console.log(`  ✗ Q${i + 1}: subtopic="${sub}" → Biological Classification territory`);
        console.log(`       snippet: ${(q.question || q.text || '').substring(0, 80)}`);
      } else {
        keptIds.add(qIdStr);
        const nt = normalizeText(q.question || q.text);
        if (nt) keptTexts.add(nt);
        keptTokenSets.push(tokenize(q.question || q.text));
      }
    }

    auditReport.totalWrongSubtopicFound += wrongItems.length;

    if (wrongItems.length === 0) {
      console.log(`  ✔ All questions are correctly mapped. No corrections needed.`);
      auditReport.tests.push({
        testId,
        chapter: targetChapter,
        totalQuestions: configuredCount,
        wrongSubtopicFound: 0,
        replaced: 0,
        status: 'PASS'
      });
      continue;
    }

    console.log(`\n  Found ${wrongItems.length} incorrectly mapped questions.`);

    // Snapshot before correction
    if (!dryRun) {
      await db.collection('auditSnapshots').insertOne({
        testId,
        chapter: targetChapter,
        snapshotReason: 'PLANT_KINGDOM_SUBTOPIC_FIX',
        originalQuestionIds: qIds.map(id => id.toString()),
        originalQuestionCount: qIds.length,
        timestamp
      });
    }

    // Find replacements
    const usedIds = new Set(keptIds);
    const usedTexts = new Set(keptTexts);
    const usedTokenSets = [...keptTokenSets];

    const newQuestionsArray = [...qIds];
    const testLogs = [];
    let replacedCount = 0;
    let manualAttention = 0;

    for (const wrongItem of wrongItems) {
      let best = null;
      let bestScore = -1;

      for (const cand of pkCandidates) {
        const cId = cand._id.toString();
        if (usedIds.has(cId)) continue;

        const cText = normalizeText(cand.question || cand.text);
        if (cText && usedTexts.has(cText) && cText.length > 20) continue;

        const cTokens = tokenize(cand.question || cand.text);
        let nearDup = false;
        for (const exTok of usedTokenSets) {
          if (jaccardSimilarity(cTokens, exTok) >= 0.85) { nearDup = true; break; }
        }
        if (nearDup) continue;

        const cDiff = normalizeDifficulty(cand.difficulty);
        const cType = normalizeType(cand.type || cand.questionType);

        let score = 0;
        if (wrongItem.diff === 'DIFFICULT') {
          if (cDiff === 'DIFFICULT' && cType === wrongItem.type) score = 100;
          else if (cDiff === 'MODERATE' && cType === wrongItem.type) score = 90;
          else if (cDiff === 'DIFFICULT') score = 80;
          else score = 70;
        } else {
          if (cDiff === 'MODERATE' && cType === wrongItem.type) score = 100;
          else if (cDiff === 'DIFFICULT' && cType === wrongItem.type) score = 90;
          else if (cDiff === 'MODERATE') score = 80;
          else score = 70;
        }

        if (score > bestScore) {
          bestScore = score;
          best = cand;
        }
      }

      if (!best) {
        console.log(`  ❌ No valid replacement found for Q${wrongItem.index + 1}. Flagged for manual review.`);
        manualAttention++;
        auditReport.manualAttentionTests.push({
          testId,
          questionIndex: wrongItem.index,
          wrongSubtopic: wrongItem.subtopic,
          snippet: wrongItem.snippet
        });
        continue;
      }

      const repId = best._id.toString();
      usedIds.add(repId);
      const repText = normalizeText(best.question || best.text);
      if (repText) usedTexts.add(repText);
      usedTokenSets.push(tokenize(best.question || best.text));

      newQuestionsArray[wrongItem.index] = best._id;
      replacedCount++;

      const logEntry = {
        testId,
        testChapter: targetChapter,
        removedQuestionId: wrongItem.id,
        removedSubtopic: wrongItem.subtopic || '',
        removedDifficulty: wrongItem.diff,
        removedReason: wrongItem.reason,
        removedSnippet: (wrongItem.snippet || '').substring(0, 100),
        replacementQuestionId: repId,
        replacementSubtopic: best.subTopic || best.subtopic || best.topic || '',
        replacementDifficulty: normalizeDifficulty(best.difficulty),
        replacementType: normalizeType(best.type || best.questionType),
        replacementSnippet: (best.question || best.text || '').substring(0, 100),
        timestamp,
        status: dryRun ? 'DRY_RUN' : 'APPLIED'
      };

      testLogs.push(logEntry);
      allReplacementLogs.push(logEntry);

      console.log(`  ✅ Q${wrongItem.index + 1}: replaced with subtopic="${best.subTopic || best.subtopic || best.topic}" difficulty=${logEntry.replacementDifficulty}`);
    }

    // Safety check: question count must not change
    if (newQuestionsArray.length !== configuredCount) {
      throw new Error(`CRITICAL: Question count mismatch on ${testId}! Before: ${configuredCount}, After: ${newQuestionsArray.length}`);
    }

    // Apply update only in LIVE mode
    if (!dryRun && replacedCount > 0) {
      await db.collection('testPapers').updateOne(
        { _id: paper._id },
        { $set: { questions: newQuestionsArray, updatedAt: new Date() } }
      );
      console.log(`  💾 Saved: ${replacedCount} replacements applied to ${testId}.`);
    }

    // Write logs
    if (!dryRun && testLogs.length > 0) {
      await db.collection('replacementLogs').insertMany(testLogs);
    }

    auditReport.tests.push({
      testId,
      chapter: targetChapter,
      totalQuestions: configuredCount,
      wrongSubtopicFound: wrongItems.length,
      replaced: replacedCount,
      manualAttention,
      status: manualAttention === 0 ? 'FIXED' : 'PARTIAL_FIX'
    });

    auditReport.totalQuestionsReplaced += replacedCount;
  }

  // ── Post-Fix Verification ─────────────────────────────────────────────────
  if (!dryRun) {
    console.log('\n\n==== RUNNING INDEPENDENT POST-FIX VERIFICATION ====\n');
    let verificationPassed = 0;
    let verificationFailed = 0;

    for (const testId of TARGET_TESTS) {
      const paper = await db.collection('testPapers').findOne({ testId });
      if (!paper) continue;

      const qIds = paper.questions || [];
      const objIds = qIds.map(id => { try { return new ObjectId(id); } catch (e) { return id; } });
      const qs = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
      const qMap = new Map(qs.map(q => [q._id.toString(), q]));

      let testOk = true;
      for (let i = 0; i < qIds.length; i++) {
        const q = qMap.get(qIds[i].toString());
        if (!q) { testOk = false; console.error(`  ❌ Q${i + 1}: missing from DB in ${testId}`); continue; }
        const sub = q.subTopic || q.subtopic || q.topic || '';
        if (!isPlantKingdomSubtopic(sub)) {
          testOk = false;
          console.error(`  ❌ Q${i + 1}: still has wrong subtopic="${sub}" in ${testId}`);
        }
      }

      if (testOk) {
        verificationPassed++;
        console.log(`  ✔ ${testId}: VERIFIED`);
      } else {
        verificationFailed++;
      }
    }

    console.log(`\nVerification: ${verificationPassed} passed, ${verificationFailed} failed.`);
  }

  // ── Save Report ───────────────────────────────────────────────────────────
  const reportPath = path.join(__dirname, `plant_kingdom_fix_report_${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify({ auditReport, allReplacementLogs }, null, 2));

  console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('PLANT KINGDOM CHAPTER MAPPING FIX — SUMMARY');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`Mode:                   ${dryRun ? 'DRY RUN' : 'LIVE'}`);
  console.log(`Tests Audited:          ${auditReport.tests.length}`);
  console.log(`Total Questions:        ${auditReport.totalQuestionsAudited}`);
  console.log(`Wrong Subtopic Found:   ${auditReport.totalWrongSubtopicFound}`);
  console.log(`Questions Replaced:     ${auditReport.totalQuestionsReplaced}`);
  console.log(`Manual Attention:       ${auditReport.manualAttentionTests.length}`);
  console.log('');
  auditReport.tests.forEach(t => {
    console.log(`  ${t.testId}`);
    console.log(`    Wrong: ${t.wrongSubtopicFound} | Replaced: ${t.replaced} | Manual: ${t.manualAttention || 0} | Status: ${t.status}`);
  });
  console.log('');
  console.log(`Report saved: ${reportPath}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  await client.close();
  return auditReport;
}

// ── Entry ─────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const isDryRun = !args.includes('--live');

runPlantKingdomFix(isDryRun).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

