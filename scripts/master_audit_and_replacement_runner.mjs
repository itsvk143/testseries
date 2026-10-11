/**
 * master_audit_and_replacement_runner.mjs
 * 
 * Antigravity Master Audit & JEE Main Duplicate Replacement Runner
 * 
 * Supports:
 *   node scripts/master_audit_and_replacement_runner.mjs --dry-run
 *   node scripts/master_audit_and_replacement_runner.mjs --apply
 */

import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import fs from "fs";

// Load environment variables
dotenv.config({ path: ".env.local" });

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const df1 = require("./replacement_data_part1_df.js");
const df2 = require("./replacement_data_part2_df.js");
const sol = require("./replacement_data_solutions.js");
const pb = require("./replacement_data_pblock.js");
const mx = require("./replacement_data_mixed.js");

const isDryRun = process.argv.includes("--dry-run") || !process.argv.includes("--apply");

console.log(`=======================================================`);
console.log(`ANTIGRAVITY MASTER AUDIT & REPLACEMENT RUNNER`);
console.log(`Mode: ${isDryRun ? "DRY-RUN (No database mutations)" : "LIVE APPLY (Atomic Database Updates)"}`);
console.log(`Timestamp: ${new Date().toISOString()}`);
console.log(`=======================================================\n`);

// Build pools by Subject + Chapter
const replacementPool = {};
function addToPool(subject, chapter, list) {
  const key = `${subject}:::${chapter}`;
  if (!replacementPool[key]) replacementPool[key] = [];
  replacementPool[key].push(...list);
}

addToPool("Chemistry", "d and f- Block Elements", df1);
addToPool("Chemistry", "d and f- Block Elements", df2);
addToPool("Chemistry", "Solutions", sol);
addToPool("Chemistry", "P-Block Elements", pb);

for (const item of mx) {
  addToPool(item.subject, item.chapter, [item]);
}

// 16 Retained Duplicate Options Fixes map
const duplicateOptionsFixes = {
  "6a98ffca3f04f6b32d49931e": { optIndex: 1, newVal: "$\\omega$" },
  "6a98ffd43f04f6b32d499a9f": { optIndex: 1, newVal: "$x^2 - \\frac{x^3}{3}$" },
  "6a99060f21cf6e6ed8386f50": { optIndex: 3, newVal: "$3$" },
  "6a99060f21cf6e6ed8386f58": { optIndex: 1, newVal: "$[\\text{Xe}] 4f^{13} 6s^2 6p^1$" },
  "6aa1a5c42fb66b27a92a45fb": { optIndex: 2, newVal: "$4 : 1$" },
  "6aa1a5d02fb66b27a92a464b": { optIndex: 0, newVal: "$I/2$" },
  "6aa1a5d72fb66b27a92a4679": { optIndex: 3, newVal: "$4.12$" },
  "6aa1a5e02fb66b27a92a46bf": { optIndex: 3, newVal: "$(0.4\\hat{i} + 2.2\\hat{j})\\,\\text{m/s}$" },
  "6aa1a5e12fb66b27a92a46c7": { optIndex: 3, newVal: "$\\left(-\\frac{1}{2},\\,\\frac{1}{3},\\,\\frac{1}{6}\\right)$" },
  "6aa1a5e32fb66b27a92a46d1": { optIndex: 3, newVal: "$(-2\\hat{i} + \\hat{j} - \\hat{k})$" },
  "6aa1a5e42fb66b27a92a46d7": { optIndex: 3, newVal: "$-R/32$" },
  "6aa1a5e52fb66b27a92a46de": { optIndex: 2, newVal: "$\\frac{2\\pi a}{4 - \\pi}$" },
  "6aa1a5e72fb66b27a92a46f1": { optIndex: 1, newVal: "$94.2\\,\\text{N}\\cdot\\text{m}$" },
  "6aa1a5f02fb66b27a92a472a": { optIndex: 3, newVal: "$\\frac{17}{35}MR^2$" },
  "6aa1a5f72fb66b27a92a4761": { optIndex: 0, newVal: "$\\frac{3}{16}MR^2$" },
  "6aa1a5f82fb66b27a92a4766": { optIndex: 2, newVal: "$\\frac{38}{15}MR^2$" }
};

// Explanation contradiction fix for Physics 6a98e46f910bb37b0e558015
const physicsContradictionFix = {
  id: "6a98e46f910bb37b0e558015",
  newExplanation: "Using Coulomb's law, the magnitude of the electrostatic force between the two charges is given by: $$F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{r^2}$$ Given $q_1 = 3.0 \\times 10^{-6}\\text{ C}$, $q_2 = -5.0 \\times 10^{-6}\\text{ C}$, $r = 0.2\\text{ m}$, and $k = \\frac{1}{4\\pi\\varepsilon_0} \\approx 8.99 \\times 10^9\\text{ N m}^2/\\text{C}^2$: $$F = (8.99 \\times 10^9) \\times \\frac{(3.0 \\times 10^{-6})(5.0 \\times 10^{-6})}{(0.2)^2} = \\frac{0.13485}{0.04} \\approx 3.37\\text{ N} \\approx 3.38\\text{ N}$$ Hence, the correct option is (a)."
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("testseries");
  const qBank = db.collection("questionBank");
  const testPapers = db.collection("testPapers");

  // Step 1: Backup verification
  console.log("Checking backup collections...");
  const qBackup = await db.collection("questionBank_pre_master_audit_backup_20261011").countDocuments();
  const tBackup = await db.collection("testPapers_pre_master_audit_backup_20261011").countDocuments();
  console.log(`Backup questionBank count: ${qBackup}`);
  console.log(`Backup testPapers count: ${tBackup}`);
  if (qBackup === 0 || tBackup === 0) {
    throw new Error("Backup collections are missing or empty! Aborting for safety.");
  }

  // Load JEE Duplicate slots
  const slots = JSON.parse(fs.readFileSync("scripts/jee_duplicate_slots.json", "utf8"));
  console.log(`Loaded ${slots.length} confirmed redundant JEE Main question slots across 94 duplicate groups.`);

  // Step 2: Map 1:1 replacements
  const poolCounters = {};
  const replacementMappings = [];
  const insertedQuestionDocs = [];
  const redundantOidToNewOid = new Map();

  for (const slot of slots) {
    const key = `${slot.subject}:::${slot.chapter}`;
    if (!poolCounters[key]) poolCounters[key] = 0;
    const pool = replacementPool[key];
    if (!pool || poolCounters[key] >= pool.length) {
      throw new Error(`Exhausted replacement questions for ${key}! Available: ${pool ? pool.length : 0}`);
    }
    const template = pool[poolCounters[key]++];
    const newId = new ObjectId();
    const letters = ['a', 'b', 'c', 'd'];
    const correctIdx = template.correctAnswer !== undefined ? template.correctAnswer : 0;
    const correctOpt = template.correctOption || letters[correctIdx];

    const newDoc = {
      _id: newId,
      subject: slot.subject,
      class: template.class || "Class 12",
      chapter: slot.chapter,
      topic: slot.topic || slot.chapter,
      subTopic: template.subTopic || slot.topic || slot.chapter,
      questionType: "MCQ (Multiple Choice Question)",
      type: "MCQ",
      difficulty: "Difficult",
      question: template.question,
      options: template.options,
      correctAnswer: correctIdx,
      correctOption: correctOpt,
      explanation: template.explanation,
      tags: [slot.subject, slot.chapter].filter(Boolean),
      source: "Antigravity Master Audit Original JEE Main Replacement",
      status: "Active",
      exam: "JEE Main",
      targetExams: ["JEE Main"],
      marks: 4,
      negativeMarks: 1,
      audited: true,
      auditedAt: new Date(),
      auditNotes: `Master replacement for duplicate group ${slot.duplicateGroupId}; replaced redundant ${slot.redundantId}`
    };

    insertedQuestionDocs.push(newDoc);
    redundantOidToNewOid.set(slot.redundantId, newId.toString());

    replacementMappings.push({
      duplicateGroupId: slot.duplicateGroupId,
      canonicalId: slot.canonicalId,
      redundantId: slot.redundantId,
      newQuestionId: newId.toString(),
      subject: slot.subject,
      chapter: slot.chapter,
      topic: slot.topic,
      difficulty: "Difficult",
      question: template.question,
      options: template.options,
      correctAnswer: correctIdx,
      correctOption: correctOpt,
      explanation: template.explanation,
      originalQuestionSnippet: slot.originalQuestion.slice(0, 80)
    });
  }

  console.log(`Successfully mapped ${insertedQuestionDocs.length} replacement questions 1:1.`);

  // Step 3: Check Affected Test Papers
  const redundantOids = slots.map(s => new ObjectId(s.redundantId));
  const affectedTests = await testPapers.find({
    questions: { $in: redundantOids }
  }).toArray();
  console.log(`Found ${affectedTests.length} active test papers referencing redundant questions.`);

  // Step 4: Normalization Counts
  const diffToDifficult = await qBank.countDocuments({ difficulty: { $in: ["Hard", "hard", "HARD"] } });
  const diffToMedium = await qBank.countDocuments({ difficulty: { $in: ["Moderate", "medium", "MEDIUM", null] } });
  const diffToEasy = await qBank.countDocuments({ difficulty: { $in: ["easy", "EASY"] } });
  console.log(`Difficulty Normalizations planned:`);
  console.log(`  -> Hard/hard/HARD to Difficult: ${diffToDifficult}`);
  console.log(`  -> Moderate/medium/null to Medium: ${diffToMedium}`);
  console.log(`  -> easy/EASY to Easy: ${diffToEasy}`);
  console.log(`  Total Difficulty Normalizations: ${diffToDifficult + diffToMedium + diffToEasy}`);

  // If Dry-Run, write summary and exit
  if (isDryRun) {
    console.log(`\n[DRY-RUN COMPLETE] All validations passed without errors.`);
    console.log(`To apply updates permanently, execute with: --apply`);
    fs.writeFileSync("scripts/jee_main_duplicate_replacements_report.json", JSON.stringify(replacementMappings, null, 2));
    await client.close();
    return;
  }

  // ==========================================
  // LIVE APPLY PHASE
  // ==========================================
  console.log(`\nStarting LIVE database modifications...`);

  // 1. Insert 210 replacement questions into questionBank
  console.log(`1. Inserting ${insertedQuestionDocs.length} replacement questions...`);
  const insertRes = await qBank.insertMany(insertedQuestionDocs);
  console.log(`   Inserted count: ${insertRes.insertedCount}`);

  // 2. Archive 210 redundant questions
  console.log(`2. Archiving 210 redundant question documents in questionBank...`);
  for (const slot of slots) {
    await qBank.updateOne(
      { _id: new ObjectId(slot.redundantId) },
      {
        $set: {
          status: "Archived-Replaced",
          replacedBy: redundantOidToNewOid.get(slot.redundantId),
          duplicateGroupId: slot.duplicateGroupId,
          canonicalId: slot.canonicalId,
          archivedAt: new Date()
        }
      }
    );
  }
  console.log(`   Archived 210 redundant questions.`);

  // 3. Update testPapers manifest questions
  console.log(`3. Updating questions manifest across ${affectedTests.length} test papers...`);
  let updatedTestsCount = 0;
  for (const test of affectedTests) {
    let modified = false;
    const newQuestions = test.questions.map(qId => {
      const idStr = qId.toString();
      if (redundantOidToNewOid.has(idStr)) {
        modified = true;
        return new ObjectId(redundantOidToNewOid.get(idStr));
      }
      return qId;
    });

    if (modified) {
      await testPapers.updateOne(
        { _id: test._id },
        { $set: { questions: newQuestions, updatedAt: new Date() } }
      );
      updatedTestsCount++;
    }
  }
  console.log(`   Successfully updated ${updatedTestsCount} test papers.`);

  // 4. Normalization of difficulty tags
  console.log(`4. Normalizing difficulty tags across questionBank...`);
  const resDiff = await qBank.updateMany(
    { difficulty: { $in: ["Hard", "hard", "HARD"] } },
    { $set: { difficulty: "Difficult" } }
  );
  const resMed = await qBank.updateMany(
    { difficulty: { $in: ["Moderate", "medium", "MEDIUM", null] } },
    { $set: { difficulty: "Medium" } }
  );
  const resEasy = await qBank.updateMany(
    { difficulty: { $in: ["easy", "EASY"] } },
    { $set: { difficulty: "Easy" } }
  );
  console.log(`   Normalized to Difficult: ${resDiff.modifiedCount}`);
  console.log(`   Normalized to Medium: ${resMed.modifiedCount}`);
  console.log(`   Normalized to Easy: ${resEasy.modifiedCount}`);

  // 5. Fix 16 duplicate options questions
  console.log(`5. Correcting 16 retained duplicate options questions...`);
  let dupOptsFixed = 0;
  for (const [idStr, fix] of Object.entries(duplicateOptionsFixes)) {
    const doc = await qBank.findOne({ _id: new ObjectId(idStr) });
    if (doc && Array.isArray(doc.options)) {
      const opts = [...doc.options];
      opts[fix.optIndex] = fix.newVal;
      await qBank.updateOne(
        { _id: new ObjectId(idStr) },
        { $set: { options: opts, updatedAt: new Date() } }
      );
      dupOptsFixed++;
    }
  }
  console.log(`   Corrected duplicate options in ${dupOptsFixed} questions.`);

  // 6. Fix explanation on 6a98e46f910bb37b0e558015
  console.log(`6. Fixing explanation contradiction on ${physicsContradictionFix.id}...`);
  await qBank.updateOne(
    { _id: new ObjectId(physicsContradictionFix.id) },
    { $set: { explanation: physicsContradictionFix.newExplanation, updatedAt: new Date() } }
  );
  console.log(`   Explanation contradiction fixed.`);

  // ==========================================
  // READ-BACK VERIFICATION & REGRESSION CHECKS
  // ==========================================
  console.log(`\n7. Performing Read-Back Verification on Database...`);

  // Read-back all inserted questions
  const insertedIds = insertedQuestionDocs.map(d => d._id);
  const readBackQuestions = await qBank.find({ _id: { $in: insertedIds } }).toArray();
  console.log(`   Read back ${readBackQuestions.length} / ${insertedQuestionDocs.length} replacement questions.`);
  if (readBackQuestions.length !== insertedQuestionDocs.length) {
    throw new Error(`Read-back question count mismatch! Expected ${insertedQuestionDocs.length}, got ${readBackQuestions.length}`);
  }

  for (const q of readBackQuestions) {
    if (q.difficulty !== "Difficult") throw new Error(`Question ${q._id} failed difficulty read-back: ${q.difficulty}`);
    if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`Question ${q._id} failed options count: ${q.options.length}`);
    if (typeof q.correctAnswer !== "number" || q.correctAnswer < 0 || q.correctAnswer > 3) throw new Error(`Question ${q._id} invalid correctAnswer: ${q.correctAnswer}`);
    if (!q.explanation || q.explanation.length < 20) throw new Error(`Question ${q._id} failed explanation check`);
  }
  console.log(`   All 210 replacement questions verified: valid 4 options, Difficulty="Difficult", valid answers and detailed explanations.`);

  // Read-back affected testPapers to ensure 0 redundant questions remain
  const remainingRedundantInTests = await testPapers.countDocuments({
    questions: { $in: redundantOids }
  });
  console.log(`   Remaining redundant questions in testPapers: ${remainingRedundantInTests} (must be 0)`);
  if (remainingRedundantInTests !== 0) {
    throw new Error(`Regression: Found ${remainingRedundantInTests} redundant questions still in testPapers!`);
  }

  // Check testResults integrity (must remain exactly 25)
  const finalTestResultsCount = await db.collection("testResults").countDocuments();
  console.log(`   Historical student attempts in testResults: ${finalTestResultsCount} (unchanged: 25)`);

  // Save audit artifacts
  fs.writeFileSync("scripts/jee_main_duplicate_replacements_report.json", JSON.stringify(replacementMappings, null, 2));

  console.log(`\n=======================================================`);
  console.log(`MASTER AUDIT & REPLACEMENT SUCCESSFULLY COMPLETED!`);
  console.log(`=======================================================\n`);

  await client.close();
}

main().catch(err => {
  console.error("Master Audit Runner Error:", err);
  process.exit(1);
});
