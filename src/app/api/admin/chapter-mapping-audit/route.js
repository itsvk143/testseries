/**
 * API: /api/admin/chapter-mapping-audit
 *
 * Actions:
 *   RUN_AUDIT         - Scan all/filtered questions and return mapping analysis
 *   APPROVE_FIX       - Apply a specific proposed question replacement in a test
 *   BULK_APPROVE      - Apply all proposed replacements for a given testId
 *   REJECT            - Record a rejection in auditLog (no DB change to test)
 *   EXPORT_REPORT     - Return full audit report as JSON
 *   GET_AUDIT_STATUS  - Return summary stats (tests/questions audited so far)
 */

import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export const maxDuration = 60;

// ── NCERT chapter-to-subtopic validation map ───────────────────────────────

const NCERT_CHAPTER_SUBTOPICS = {
  'Plant Kingdom': new Set([
    'plant kingdom', 'algae', 'bryophytes', 'pteridophytes', 'gymnosperms',
    'angiosperms', 'thallophyta', 'thallophytes', 'pteridophyta',
    'classification of plant kingdom', 'alternation of generations',
    'life cycle patterns', 'plant body organisation',
  ]),
  'Biological Classification': new Set([
    'biological classification', 'five kingdom classification system',
    'viruses, viroids, prions, and lichens', 'history of biological classification',
    'drawbacks of two-kingdom classification', 'early classification of plants',
    'whittaker five-kingdom criteria', 'kingdom monera', 'kingdom monera (archaebacteria)',
    'kingdom monera (cyanobacteria)', 'kingdom monera (mycoplasma)', 'kingdom monera (prokaryotes)',
    'kingdom protista', 'kingdom protista boundaries', 'kingdom protista (chrysophytes)',
    'kingdom protista (dinoflagellates)', 'kingdom protista (euglenoids)',
    'kingdom protista (slime moulds)', 'kingdom protista (unicellular eukaryotes)',
    'kingdom fungi', 'kingdom fungi (general features)',
    'kingdom fungi (yeasts & vegetative reproduction)', 'kingdom plantae (parasitic plants)',
    'kingdom animalia (storage compounds)', 'plantae vs animalia characteristics',
    'bacterial shapes', 'bacterial metabolic diversity & roles', 'bacterial structure vs behaviour',
    'eubacteria characteristics', 'bacterial diseases',
    'protistan diversity', 'euglenoid pigments & nutrition',
    'protozoans (flagellated protozoa)', 'protozoan classification',
    'fungal sexual cycle', 'fungal hyphae structure', 'phycomycetes examples',
    'phycomycetes reproduction', 'dikaryon phase in fungi', 'ascomycetes (neurospora)',
    'deuteromycetes (imperfect fungi)', 'ascospores vs basidiospores',
    'basidiomycetes reproduction', 'kingdom protista boundaries & phylogenetic criteria',
  ]),
};

// ── helpers ────────────────────────────────────────────────────────────────

function norm(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[–—−]/g, '-')
    .replace(/[\x27\x60']/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function normSubtopic(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[^a-z0-9& ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeDifficulty(d) {
  if (!d) return 'MODERATE';
  const s = d.toString().toLowerCase();
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
    .replace(/<[^>]+>/g, ' ')
    .replace(/\$[^$]*\$/g, ' ')
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
  if (!setA.size || !setB.size) return 0;
  let n = 0;
  for (const x of setA) if (setB.has(x)) n++;
  return n / (setA.size + setB.size - n);
}

/**
 * Given a test's targetChapter (NCERT-level, e.g. "Plant Kingdom")
 * and a question's subtopic, determine if the mapping is valid.
 */
function isSubtopicValidForChapter(targetChapter, subtopic) {
  const validSet = NCERT_CHAPTER_SUBTOPICS[targetChapter];
  if (!validSet) return true; // no validation rule → assume valid
  const ns = normSubtopic(subtopic);
  return validSet.has(ns);
}

/**
 * For chapter tests whose chapter is a broad DB umbrella (e.g. "Diversity in Living World"),
 * derive the intended NCERT chapter from the testId.
 */
function getNcertChapterFromTestId(testId) {
  if (!testId) return null;
  if (/Plant.Kingdom/i.test(testId)) return 'Plant Kingdom';
  if (/Biological.Classification/i.test(testId)) return 'Biological Classification';
  return null;
}

// ── MAIN handler ──────────────────────────────────────────────────────────

export async function POST(req) {
  try {
    const session = await auth();
    if (!session?.user?.isAdmin && session?.user?.role !== 'admin') {
      return Response.json({ error: 'Admin access required' }, { status: 403 });
    }

    const body = await req.json();
    const {
      action,
      subject,
      chapter,
      testId,
      questionId,
      proposedQuestionId,
      replacements = [],
      status: statusFilter,
      page = 1,
      limit = 50,
    } = body;

    const client = await clientPromise;
    const db = client.db();
    const timestamp = new Date().toISOString();

    // ── RUN_AUDIT ────────────────────────────────────────────────────────
    if (action === 'RUN_AUDIT') {
      // Find all NEET Botany chapter tests with NCERT-level chapters that need subtopic validation
      const allTests = await db.collection('testPapers').find({
        testId: { $regex: /neet-CHAPTER-Botany/i }
      }).toArray();

      const auditRows = [];
      let totalQuestionsAudited = 0;
      let correctMappings = 0;
      let incorrectMappings = 0;
      let needsReview = 0;

      for (const paper of allTests) {
        // Only validate tests that have an NCERT chapter we can validate against
        const ncertChapter = getNcertChapterFromTestId(paper.testId) || paper.chapter;
        if (!NCERT_CHAPTER_SUBTOPICS[ncertChapter]) continue;

        // Apply chapter/subject filter if provided
        if (chapter && norm(ncertChapter) !== norm(chapter)) continue;
        if (subject) {
          const paperSubject = paper.subject || '';
          if (norm(paperSubject) !== norm(subject)) continue;
        }

        const qIds = paper.questions || [];
        totalQuestionsAudited += qIds.length;

        const objIds = qIds.map(id => {
          try { return new ObjectId(id); } catch (e) { return id; }
        });
        const qs = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
        const qMap = new Map(qs.map(q => [q._id.toString(), q]));

        for (let i = 0; i < qIds.length; i++) {
          const qId = qIds[i].toString();
          const q = qMap.get(qId);
          if (!q) {
            auditRows.push({
              questionId: qId,
              questionPreview: '',
              subject: paper.subject || 'Botany',
              testId: paper.testId,
              currentChapter: ncertChapter,
              suggestedChapter: 'UNKNOWN',
              currentTopic: '',
              suggestedTopic: '',
              confidence: 0,
              status: 'MISSING',
              testPosition: i + 1,
            });
            incorrectMappings++;
            continue;
          }

          const sub = q.subTopic || q.subtopic || q.topic || '';
          const isValid = isSubtopicValidForChapter(ncertChapter, sub);

          // Determine suggested chapter based on subtopic
          let suggestedChapter = ncertChapter;
          let confidence = 0.95;
          let rowStatus = 'CORRECT';

          if (!isValid) {
            // Is it Biological Classification?
            if (NCERT_CHAPTER_SUBTOPICS['Biological Classification']?.has(normSubtopic(sub))) {
              suggestedChapter = 'Biological Classification';
              confidence = 0.98;
              rowStatus = 'INCORRECT';
              incorrectMappings++;
            } else {
              suggestedChapter = 'Needs Review';
              confidence = 0.5;
              rowStatus = 'NEEDS_REVIEW';
              needsReview++;
            }
          } else {
            correctMappings++;
          }

          // Apply status filter if provided
          if (statusFilter && statusFilter !== 'ALL' && rowStatus !== statusFilter) continue;

          auditRows.push({
            questionId: qId,
            questionPreview: (q.question || q.text || '').substring(0, 120),
            subject: q.subject || paper.subject,
            testId: paper.testId,
            testChapter: paper.chapter,
            currentChapter: ncertChapter,
            suggestedChapter,
            currentTopic: sub,
            suggestedTopic: suggestedChapter !== ncertChapter ? sub : sub,
            difficulty: normalizeDifficulty(q.difficulty),
            questionType: normalizeType(q.type || q.questionType),
            confidence: Math.round(confidence * 100),
            status: rowStatus,
            testPosition: i + 1,
          });
        }
      }

      // Pagination
      const total = auditRows.length;
      const offset = (page - 1) * limit;
      const pageRows = auditRows.slice(offset, offset + limit);

      return Response.json({
        success: true,
        summary: {
          totalQuestionsAudited,
          correctMappings,
          incorrectMappings,
          needsReview,
          totalAuditRows: total,
        },
        rows: pageRows,
        pagination: { page, limit, total, pages: Math.ceil(total / limit) },
      });
    }

    // ── APPROVE_FIX ──────────────────────────────────────────────────────
    if (action === 'APPROVE_FIX') {
      if (!testId || !questionId || !proposedQuestionId) {
        return Response.json({ error: 'testId, questionId, proposedQuestionId required' }, { status: 400 });
      }

      const paper = await db.collection('testPapers').findOne({ testId });
      if (!paper) return Response.json({ error: 'Test not found' }, { status: 404 });

      const newQuestions = (paper.questions || []).map(id => {
        if (id.toString() === questionId) {
          try { return new ObjectId(proposedQuestionId); } catch (e) { return proposedQuestionId; }
        }
        return id;
      });

      if (newQuestions.length !== paper.questions.length) {
        return Response.json({ error: 'Question count mismatch. Aborted.' }, { status: 500 });
      }

      // Snapshot before fix
      await db.collection('auditSnapshots').insertOne({
        testId,
        snapshotReason: 'CHAPTER_MAPPING_AUDIT_APPROVE',
        originalQuestionIds: paper.questions.map(id => id.toString()),
        originalQuestionCount: paper.questions.length,
        timestamp,
        approvedBy: session.user.email || session.user.id,
      });

      await db.collection('testPapers').updateOne(
        { testId },
        { $set: { questions: newQuestions, updatedAt: new Date() } }
      );

      await db.collection('replacementLogs').insertOne({
        testId,
        exam: paper.exam || 'NEET',
        subject: paper.subject,
        chapter: paper.chapter,
        removedQuestionId: questionId,
        replacementQuestionId: proposedQuestionId,
        reason: 'CHAPTER_MAPPING_AUDIT_APPROVE',
        approvedBy: session.user.email || session.user.id,
        timestamp,
      });

      return Response.json({
        success: true,
        message: `Question ${questionId} replaced with ${proposedQuestionId} in ${testId}`,
      });
    }

    // ── BULK_APPROVE ─────────────────────────────────────────────────────
    if (action === 'BULK_APPROVE') {
      if (!Array.isArray(replacements) || replacements.length === 0) {
        return Response.json({ error: 'replacements array required' }, { status: 400 });
      }

      // Group by testId
      const byTest = new Map();
      for (const r of replacements) {
        if (!byTest.has(r.testId)) byTest.set(r.testId, []);
        byTest.get(r.testId).push(r);
      }

      let appliedCount = 0;
      const logs = [];

      for (const [tid, reps] of byTest.entries()) {
        const paper = await db.collection('testPapers').findOne({ testId: tid });
        if (!paper) continue;

        // Snapshot
        await db.collection('auditSnapshots').insertOne({
          testId: tid,
          snapshotReason: 'CHAPTER_MAPPING_AUDIT_BULK_APPROVE',
          originalQuestionIds: paper.questions.map(id => id.toString()),
          originalQuestionCount: paper.questions.length,
          timestamp,
          approvedBy: session.user.email || session.user.id,
        });

        const newQuestions = [...paper.questions];
        for (const r of reps) {
          const idx = newQuestions.findIndex(id => id.toString() === r.questionId);
          if (idx !== -1) {
            try { newQuestions[idx] = new ObjectId(r.proposedQuestionId); }
            catch (e) { newQuestions[idx] = r.proposedQuestionId; }
            appliedCount++;
            logs.push({
              testId: tid,
              exam: paper.exam || 'NEET',
              subject: paper.subject,
              chapter: paper.chapter,
              removedQuestionId: r.questionId,
              replacementQuestionId: r.proposedQuestionId,
              reason: 'CHAPTER_MAPPING_AUDIT_BULK_APPROVE',
              approvedBy: session.user.email || session.user.id,
              timestamp,
            });
          }
        }

        if (newQuestions.length !== paper.questions.length) continue; // safety
        await db.collection('testPapers').updateOne(
          { testId: tid },
          { $set: { questions: newQuestions, updatedAt: new Date() } }
        );
      }

      if (logs.length) await db.collection('replacementLogs').insertMany(logs);

      return Response.json({
        success: true,
        message: `Applied ${appliedCount} replacements across ${byTest.size} tests.`,
        appliedCount,
        testsUpdated: byTest.size,
      });
    }

    // ── REJECT ───────────────────────────────────────────────────────────
    if (action === 'REJECT') {
      await db.collection('auditRejections').insertOne({
        testId,
        questionId,
        proposedQuestionId,
        rejectedBy: session.user.email || session.user.id,
        reason: body.reason || '',
        timestamp,
      });
      return Response.json({ success: true, message: 'Rejection recorded.' });
    }

    // ── GET_AUDIT_STATUS ─────────────────────────────────────────────────
    if (action === 'GET_AUDIT_STATUS') {
      const totalLogs = await db.collection('replacementLogs').countDocuments({
        reason: { $regex: /CHAPTER_MAPPING_AUDIT/i }
      });
      const totalSnapshots = await db.collection('auditSnapshots').countDocuments({
        snapshotReason: { $regex: /CHAPTER_MAPPING_AUDIT/i }
      });
      const totalRejections = await db.collection('auditRejections').countDocuments({});

      return Response.json({
        success: true,
        correctionsMade: totalLogs,
        snapshotsTaken: totalSnapshots,
        rejectionsRecorded: totalRejections,
      });
    }

    // ── EXPORT_REPORT ────────────────────────────────────────────────────
    if (action === 'EXPORT_REPORT') {
      const logs = await db.collection('replacementLogs')
        .find({ reason: { $regex: /CHAPTER_MAPPING_AUDIT|PLANT_KINGDOM/i } })
        .sort({ timestamp: -1 })
        .limit(1000)
        .toArray();

      const snapshots = await db.collection('auditSnapshots')
        .find({ snapshotReason: { $regex: /CHAPTER_MAPPING|PLANT_KINGDOM/i } })
        .sort({ timestamp: -1 })
        .limit(100)
        .toArray();

      return Response.json({
        success: true,
        report: {
          generatedAt: timestamp,
          replacementLogs: logs,
          auditSnapshots: snapshots,
        },
      });
    }

    return Response.json({ error: `Unknown action: ${action}` }, { status: 400 });

  } catch (err) {
    console.error('Chapter mapping audit error:', err);
    return Response.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const session = await auth();
    if (!session?.user?.isAdmin && session?.user?.role !== 'admin') {
      return Response.json({ error: 'Admin access required' }, { status: 403 });
    }

    const client = await clientPromise;
    const db = client.db();

    const logs = await db.collection('replacementLogs')
      .find({ reason: { $regex: /CHAPTER_MAPPING_AUDIT|PLANT_KINGDOM/i } })
      .sort({ timestamp: -1 })
      .limit(200)
      .toArray();

    return Response.json({ success: true, logs });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

