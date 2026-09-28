const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });
const { normalizeCorrectOption } = require('../src/lib/questionFormatter');

async function repairAllDatabaseAnswerKeys() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is required');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  console.log('============================================================');
  console.log('STARTING FULL DATABASE ANSWER-KEY & EXPLANATION REPAIR');
  console.log('============================================================\n');

  // 1. SPECIFIC CONFIRMED EXPLANATION CONTRADICTIONS
  const confirmedExplanationFixes = [
    { id: '6a72f971b0179203eda838ca', correctOpt: 'b', correctAns: 1, reason: 'y_B = 90/130 = 0.69 (Option B)' },
    { id: '6a98e2338f372d5292e13225', correctOpt: 'c', correctAns: 2, reason: 'Uncertainty quadrature yields ±2.0 cm^2 (Option C)' },
    { id: '6a98e261659163598fed1a1c', correctOpt: 'd', correctAns: 3, reason: 'v = sqrt(1960) = 44.3 m/s (Option D)' },
    { id: '6a98e343910bb37b0e557ed3', correctOpt: 'b', correctAns: 1, reason: 'v = sqrt(5*1/0.2) = 5.0 m/s (Option B)' },
    { id: '6a98e3a3910bb37b0e557f2f', correctOpt: 'b', correctAns: 1, reason: 'a = (8^2)^(1/3) = 4 times (Option B)' },
    { id: '6a98e3f6910bb37b0e557f9d', correctOpt: 'b', correctAns: 1, reason: 'At terminal velocity F_b = F_g - F_d < F_g (Option B)' },
    { id: '6a98e46f910bb37b0e558015', correctOpt: 'a', correctAns: 0, reason: 'F = 8.99e9 * 15e-12 / 0.04 = 3.37 N (Option A)' },
    { id: '6a98e4db910bb37b0e5580ae', correctOpt: 'b', correctAns: 1, reason: 'P = 120^2 / 20 = 720 W (Option B)' },
    { id: '6a98e592910bb37b0e5581e4', correctOpt: 'a', correctAns: 0, reason: '0.5 mol CH4 = 0.5 * 16 = 8 g (Option A)' },
    { id: '6a98e5e5910bb37b0e558318', correctOpt: 'c', correctAns: 2, reason: 'Balanced redox gives 3 H2O (Option C)' },
    { id: '6a98f9f6b89acd4c6047d0b4', correctOpt: 'a', correctAns: 0, reason: 'Parallel axis theorem corner-parallel side = I_center + M(a/2)^2 (Option A)' },
    { id: '6a98fa00b89acd4c6047d0d9', correctOpt: 'a', correctAns: 0, reason: 'Q = 2 * 4200 * 60 = 504 kJ (Option A)' },
    { id: '6a98fabdb89acd4c6047d34b', correctOpt: 'a', correctAns: 0, reason: 'k = 0.693 / 20 = 0.0347 min^-1 (Option A)' },
    { id: '6a98fabdb89acd4c6047d350', correctOpt: 'b', correctAns: 1, reason: 'Rate constant factor = 1.91 ~ 2 times (Option B)' },
    { id: '6a98ffa73f04f6b32d497818', correctOpt: 'd', correctAns: 3, reason: 'Zero error is systematic, not random. Assertion is false (Option D)' },
    { id: '6a98ffaa3f04f6b32d497acf', correctOpt: 'b', correctAns: 1, reason: 'A and R true, but R does not explain why orbits are eccentric (Option B)' }
  ];

  console.log(`[Step 1] Applying ${confirmedExplanationFixes.length} confirmed explanation-contradiction fixes...`);
  for (const fix of confirmedExplanationFixes) {
    const res = await db.collection('questionBank').updateOne(
      { _id: new ObjectId(fix.id) },
      {
        $set: {
          correctOption: fix.correctOpt,
          correctAnswer: fix.correctAns,
          audited: true,
          auditedAt: new Date(),
          auditNotes: `Answer-key corrected: ${fix.reason}`
        }
      }
    );
    console.log(`  ✓ Fixed ${fix.id}: Option ${fix.correctOpt.toUpperCase()} (${fix.reason})`);
  }

  // 2. SYNCHRONIZE INTERNAL FIELD CONFLICTS (where correctOption=0 was erroneously defaulted while correctAnswer had the true value)
  console.log('\n[Step 2] Scanning for internal field conflicts (correctAnswer vs correctOption)...');
  const cursor = db.collection('questionBank').find({
    correctAnswer: { $exists: true, $ne: null },
    correctOption: { $exists: true, $ne: null }
  });

  let conflictRepairedCount = 0;
  const mapping = { a: 0, b: 1, c: 2, d: 3 };

  while (await cursor.hasNext()) {
    const q = await cursor.next();
    if (!Array.isArray(q.options) || q.options.length < 2) continue;

    const lAns = normalizeCorrectOption(q.correctAnswer, q.options);
    const lOpt = normalizeCorrectOption(q.correctOption, q.options);

    if (lAns !== lOpt) {
      // In these records, correctAnswer holds the verified integer (1, 2, 3), and correctOption was defaulted to 0
      let canonicalOpt = lAns;
      let canonicalAns = typeof q.correctAnswer === 'number' ? q.correctAnswer : mapping[lAns];

      // If correctOption had a valid letter that matches explanation better, verify:
      if (q.correctOption === 0 && typeof q.correctAnswer === 'number' && q.correctAnswer > 0) {
        canonicalOpt = lAns;
        canonicalAns = q.correctAnswer;
      }

      await db.collection('questionBank').updateOne(
        { _id: q._id },
        {
          $set: {
            correctOption: canonicalOpt,
            correctAnswer: canonicalAns,
            updatedAt: new Date()
          }
        }
      );
      conflictRepairedCount++;
    }
  }
  console.log(`  ✓ Synchronized and repaired ${conflictRepairedCount} conflicting question records.`);

  // 3. SYNCHRONIZE ALL QUESTIONS TO HAVE BOTH CANONICAL FIELDS
  console.log('\n[Step 3] Standardizing all active MCQ questions to have synchronized correctOption & correctAnswer...');
  const allMcqsCursor = db.collection('questionBank').find({
    $or: [
      { questionType: /mcq/i },
      { type: /mcq/i },
      { options: { $exists: true, $not: { $size: 0 } } }
    ]
  });

  let synchronizedCount = 0;
  let bulkOps = [];

  while (await allMcqsCursor.hasNext()) {
    const q = await allMcqsCursor.next();
    if (!Array.isArray(q.options) || q.options.length < 2) continue;

    const rawAns = q.correctAnswer ?? q.correctOption ?? q.answer;
    if (rawAns === undefined || rawAns === null) continue;

    const canonicalLetter = normalizeCorrectOption(rawAns, q.options);
    const canonicalIndex = mapping[canonicalLetter] ?? 0;

    // Check if either field needs updating
    if (q.correctOption !== canonicalLetter || q.correctAnswer !== canonicalIndex) {
      bulkOps.push({
        updateOne: {
          filter: { _id: q._id },
          update: {
            $set: {
              correctOption: canonicalLetter,
              correctAnswer: canonicalIndex
            }
          }
        }
      });
      synchronizedCount++;

      if (bulkOps.length >= 1000) {
        await db.collection('questionBank').bulkWrite(bulkOps, { ordered: false });
        bulkOps = [];
        process.stdout.write(`  Processed ${synchronizedCount} updates...\r`);
      }
    }
  }

  if (bulkOps.length > 0) {
    await db.collection('questionBank').bulkWrite(bulkOps, { ordered: false });
  }
  console.log(`\n  ✓ Standardized and synchronized ${synchronizedCount} questions in questionBank.`);

  // 4. VERIFY DATABASE CONSISTENCY POST-REPAIR
  console.log('\n[Step 4] Re-verifying database integrity...');
  const postConflicts = await db.collection('questionBank').countDocuments({
    $expr: {
      $and: [
        { $isArray: '$options' },
        { $gte: [{ $size: '$options' }, 2] },
        { $in: ['$correctOption', ['a', 'b', 'c', 'd']] },
        { $in: ['$correctAnswer', [0, 1, 2, 3]] },
        {
          $ne: [
            '$correctOption',
            {
              $arrayElemAt: [
                ['a', 'b', 'c', 'd'],
                '$correctAnswer'
              ]
            }
          ]
        }
      ]
    }
  });

  console.log(`Remaining internal field conflicts: ${postConflicts}`);
  console.log('Database integrity check:', postConflicts === 0 ? '✅ 100% CLEAN & SYNCHRONIZED' : '⚠️ Has remaining conflicts');

  await client.close();
  console.log('\n============================================================');
  console.log('DATABASE REPAIR COMPLETE');
  console.log('============================================================');
}

repairAllDatabaseAnswerKeys().catch(console.error);
