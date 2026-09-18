const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// NCERT / Syllabus Chapter to questionBank chapter mapping
const chapterMapping = {
  Physics: {
    "Units & Measurements": ["Physics and Measurement"],
    "Motion in a Straight Line": ["Kinematics"],
    "Motion in a Plane": ["Kinematics"],
    "Laws of Motion": ["Laws of Motion"],
    "Work, Energy & Power": ["Work, Energy, and Power"],
    "System of Particles & Rotational Motion": ["Rotational Motion"],
    "Gravitation": ["Gravitation"],
    "Mechanical Properties of Solids": ["Properties of Solids and Liquids"],
    "Mechanical Properties of Fluids": ["Properties of Solids and Liquids"],
    "Thermal Properties of Matter": ["Properties of Solids and Liquids"],
    "Thermodynamics": ["Thermodynamics"],
    "Kinetic Theory": ["Kinetic Theory of Gases"],
    "Oscillations": ["Oscillations and Waves"],
    "Waves": ["Oscillations and Waves"],
    "Electric Charges & Fields": ["Electrostatics"],
    "Electrostatic Potential & Capacitance": ["Electrostatics"],
    "Current Electricity": ["Current Electricity"],
    "Moving Charges & Magnetism": ["Magnetic Effects of Current and Magnetism"],
    "Magnetism & Matter": ["Magnetic Effects of Current and Magnetism"],
    "Electromagnetic Induction": ["Electromagnetic Induction and Alternating Currents"],
    "Alternating Current": ["Electromagnetic Induction and Alternating Currents"],
    "Electromagnetic Waves": ["Electromagnetic Waves"],
    "Ray Optics & Optical Instruments": ["Optics"],
    "Wave Optics": ["Optics"],
    "Dual Nature of Radiation & Matter": ["Dual Nature of Matter and Radiation"],
    "Atoms": ["Atoms and Nuclei"],
    "Nuclei": ["Atoms and Nuclei"],
    "Semiconductor Electronics": ["Electronic Devices"]
  },
  Chemistry: {
    "Some Basic Concepts of Chemistry": ["Some Basic Concepts in Chemistry"],
    "Structure of Atom": ["Atomic Structure"],
    "Classification of Elements and Periodicity": ["Classification of Elements and Periodicity in Properties"],
    "Chemical Bonding and Molecular Structure": ["Chemical Bonding and Molecular Structure"],
    "Thermodynamics": ["Chemical Thermodynamics"],
    "Equilibrium": ["Equilibrium"],
    "Redox Reactions": ["Redox Reactions and Electrochemistry"],
    "The p-Block Elements": ["P-Block Elements"],
    "Organic Chemistry – Some Basic Principles and Techniques": ["Some Basic Principles of Organic Chemistry", "Purification and Characterisation of Organic Compounds"],
    "Hydrocarbons": ["Hydrocarbons"],
    "Solutions": ["Solutions"],
    "Electrochemistry": ["Redox Reactions and Electrochemistry"],
    "Chemical Kinetics": ["Chemical Kinetics"],
    "d- and f-Block Elements": ["d and f- Block Elements"],
    "Coordination Compounds": ["Co-ordination Compounds"],
    "Haloalkanes and Haloarenes": ["Organic Compounds Containing Halogens"],
    "Alcohols, Phenols and Ethers": ["Organic Compounds Containing Oxygen"],
    "Aldehydes, Ketones and Carboxylic Acids": ["Organic Compounds Containing Oxygen"],
    "Amines": ["Organic Compounds Containing Nitrogen"],
    "Biomolecules": ["Biomolecules"]
  },
  Botany: {
    "The Living World": ["Diversity in Living World"],
    "Biological Classification": ["Diversity in Living World"],
    "Plant Kingdom": ["Diversity in Living World"],
    "Morphology of Flowering Plants": ["Diversity in Living World", "Cell Structure and Function"],
    "Anatomy of Flowering Plants": ["Diversity in Living World", "Cell Structure and Function"],
    "Cell: The Unit of Life": ["Cell Structure and Function"],
    "Biomolecules": ["Cell Structure and Function"],
    "Cell Cycle and Cell Division": ["Cell Structure and Function"],
    "Transport in Plants": ["Plant Physiology"],
    "Mineral Nutrition": ["Plant Physiology"],
    "Photosynthesis in Higher Plants": ["Plant Physiology"],
    "Respiration in Plants": ["Plant Physiology"],
    "Plant Growth and Development": ["Plant Physiology"],
    "Sexual Reproduction in Flowering Plants": ["Reproduction in Plants"],
    "Molecular Basis of Inheritance": ["Genetics and Evolution"],
    "Biotechnology: Principles and Processes": ["Genetics and Evolution"],
    "Biotechnology and Its Applications": ["Genetics and Evolution"],
    "Organisms and Populations": ["Ecology and Environment"],
    "Ecosystem": ["Ecology and Environment"],
    "Biodiversity and Conservation": ["Ecology and Environment"],
    "Environmental Issues": ["Ecology and Environment"]
  },
  Zoology: {
    "Animal Kingdom": ["Animal Kingdom"],
    "Structural Organisation in Animals": ["Structural Organisation in Animals and Plants"],
    "Digestion and Absorption": ["Human Physiology"],
    "Breathing and Exchange of Gases": ["Human Physiology"],
    "Body Fluids and Circulation": ["Human Physiology"],
    "Excretory Products and their Elimination": ["Human Physiology"],
    "Locomotion and Movement": ["Human Physiology"],
    "Neural Control and Coordination": ["Human Physiology"],
    "Chemical Coordination and Integration": ["Human Physiology"],
    "Reproduction in Organisms": ["Reproduction"],
    "Human Reproduction": ["Reproduction"],
    "Reproductive Health": ["Reproduction"],
    "Principles of Inheritance and Variation": ["Evolution", "Biotechnology and Its Applications"],
    "Evolution": ["Evolution"],
    "Human Health and Disease": ["Biology and Human Welfare"],
    "Microbes in Human Welfare": ["Biology and Human Welfare"]
  }
};

const isAR = (q) => {
  if (!q) return false;
  const t = (q.questionType || q.type || '').toString().toUpperCase();
  return t.includes('ASSERTION') || t.includes('AR') || (q.assertion && q.assertion.trim().length > 0);
};

function mapNcertChaptersToQbChapters(subject, ncertChapters) {
  if (!ncertChapters || ncertChapters.length === 0) return [];
  const subMap = chapterMapping[subject] || {};
  const qbSet = new Set();
  for (const ch of ncertChapters) {
    const mapped = subMap[ch];
    if (mapped && mapped.length > 0) {
      mapped.forEach(m => qbSet.add(m));
    } else {
      // Fallback if direct name match exists
      qbSet.add(ch);
    }
  }
  return [...qbSet];
}

async function calibrateDifficulty(db) {
  console.log('--- Step 1: Calibrating difficulty in questionBank ---');
  const subjects = ['Physics', 'Chemistry', 'Botany', 'Zoology'];
  let totalUpdated = 0;

  for (const s of subjects) {
    const chapters = await db.collection('questionBank').distinct('chapter', { subject: s });
    for (const chap of chapters) {
      // Non-AR, non-numerical questions only
      const docs = await db.collection('questionBank').find({
        subject: s,
        chapter: chap,
        $nor: [
          { type: /assertion|numerical|numeric|integer/i },
          { questionType: /assertion|numerical|numeric|integer/i },
          { assertion: { $exists: true, $ne: '' } }
        ]
      }).project({ _id: 1, question: 1, difficulty: 1 }).toArray();

      if (docs.length === 0) continue;

      // Sort by length/complexity ascending
      docs.sort((a, b) => (a.question?.length || 0) - (b.question?.length || 0));

      const easyCount = Math.max(5, Math.floor(docs.length * 0.20));
      const hardCount = Math.max(15, Math.floor(docs.length * 0.35));
      const medCount = docs.length - easyCount - hardCount;

      const easyDocs = docs.slice(0, easyCount);
      const medDocs = docs.slice(easyCount, easyCount + medCount);
      const hardDocs = docs.slice(easyCount + medCount);

      const bulkOps = [];
      const easyIds = easyDocs.map(d => d._id);
      const medIds = medDocs.map(d => d._id);
      const hardIds = hardDocs.map(d => d._id);

      if (easyIds.length > 0) {
        bulkOps.push({
          updateMany: {
            filter: { _id: { $in: easyIds } },
            update: { $set: { difficulty: 'Easy', updatedAt: new Date() } }
          }
        });
      }
      if (medIds.length > 0) {
        bulkOps.push({
          updateMany: {
            filter: { _id: { $in: medIds } },
            update: { $set: { difficulty: 'Medium', updatedAt: new Date() } }
          }
        });
      }
      if (hardIds.length > 0) {
        bulkOps.push({
          updateMany: {
            filter: { _id: { $in: hardIds } },
            update: { $set: { difficulty: 'Hard', updatedAt: new Date() } }
          }
        });
      }

      if (bulkOps.length > 0) {
        const res = await db.collection('questionBank').bulkWrite(bulkOps);
        totalUpdated += (res.modifiedCount || 0);
      }
    }
  }
  console.log(`Difficulty calibration complete. Total questions updated: ${totalUpdated}`);
}

async function reassignAllTests() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Missing MONGODB_URI');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  // Calibrate first
  await calibrateDifficulty(db);

  // Import frontend definitions
  const { neetTests } = await import('../src/data/exams/neet.js');
  const frontendTestMap = new Map();
  neetTests.forEach(t => frontendTestMap.set(t.id, t));

  console.log('\n--- Step 2: Fetching NEET Full Tests and Live Tests from DB ---');
  const targetTests = await db.collection('testPapers').find({
    $or: [
      { testId: /^neet-MOCK/i },
      { testId: /^neet-SUNDAY/i },
      { testId: /^neet-LIVE/i }
    ]
  }).toArray();

  console.log(`Found ${targetTests.length} test papers to reassign.`);

  // Pre-load questions by subject and chapter to allow fast in-memory pooling and selection
  console.log('Building in-memory question pool by subject and chapter...');
  const allQuestions = await db.collection('questionBank').find(
    { subject: { $in: ['Physics', 'Chemistry', 'Botany', 'Zoology'] } },
    { projection: { _id: 1, subject: 1, chapter: 1, subTopic: 1, difficulty: 1, type: 1, questionType: 1, assertion: 1 } }
  ).toArray();

  console.log(`Total questions loaded for pool: ${allQuestions.length}`);

  // Structure: pools[subject][chapter] = { easy: [], med: [], hard: [], ar: [] }
  const pools = { Physics: {}, Chemistry: {}, Botany: {}, Zoology: {} };
  const subjectFallbackPools = { Physics: { easy: [], med: [], hard: [], ar: [] }, Chemistry: { easy: [], med: [], hard: [], ar: [] }, Botany: { easy: [], med: [], hard: [], ar: [] }, Zoology: { easy: [], med: [], hard: [], ar: [] } };

  for (const q of allQuestions) {
    const sub = q.subject;
    if (!pools[sub]) continue;

    const chap = q.chapter || 'Unknown';
    if (!pools[sub][chap]) {
      pools[sub][chap] = { easy: [], med: [], hard: [], ar: [] };
    }

    const t = (q.type || q.questionType || '').toString().toLowerCase();
    const isNumerical = t.includes('numerical') || t.includes('numeric') || t.includes('integer');
    if (isNumerical) continue; // Skip numericals for NEET!

    const ar = isAR(q);
    const diff = (q.difficulty || '').toLowerCase();

    if (ar) {
      pools[sub][chap].ar.push(q._id);
      subjectFallbackPools[sub].ar.push(q._id);
    } else if (diff.includes('easy')) {
      pools[sub][chap].easy.push(q._id);
      subjectFallbackPools[sub].easy.push(q._id);
    } else if (diff.includes('hard') || diff.includes('difficult') || diff.includes('challenging')) {
      pools[sub][chap].hard.push(q._id);
      subjectFallbackPools[sub].hard.push(q._id);
    } else {
      pools[sub][chap].med.push(q._id);
      subjectFallbackPools[sub].med.push(q._id);
    }
  }

  // Helper function to pick distinct questions from pools with rotation
  const counters = {};
  function getNextQuestion(subPools, fallbackPool, type, usedInTest) {
    const list = [];
    for (const p of subPools) {
      list.push(...p[type]);
    }
    if (list.length === 0) {
      list.push(...fallbackPool[type]);
    }

    const key = `${type}`;
    if (!counters[key]) counters[key] = 0;

    const startIdx = counters[key];
    for (let i = 0; i < list.length; i++) {
      const idx = (startIdx + i) % list.length;
      const qId = list[idx];
      const str = qId.toString();
      if (!usedInTest.has(str)) {
        usedInTest.add(str);
        counters[key] = (idx + 1) % list.length;
        return qId;
      }
    }

    // If all used in test (unlikely), try fallback
    for (let i = 0; i < fallbackPool[type].length; i++) {
      const qId = fallbackPool[type][i];
      const str = qId.toString();
      if (!usedInTest.has(str)) {
        usedInTest.add(str);
        return qId;
      }
    }

    // Emergency: take any
    return list[0] || fallbackPool[type][0];
  }

  let successCount = 0;
  const bulkTestUpdates = [];

  for (const test of targetTests) {
    const frontendDef = frontendTestMap.get(test.testId) || {};
    const testSyllabus = frontendDef.syllabus || test.syllabus || {};

    const fullTestQuestions = [];
    const usedInTest = new Set();

    const subjects = ['Physics', 'Chemistry', 'Botany', 'Zoology'];

    for (const subject of subjects) {
      const ncertChaps = testSyllabus[subject] || [];
      const qbChaps = mapNcertChaptersToQbChapters(subject, ncertChaps);

      // Collect available pools for these chapters
      const targetSubPools = [];
      for (const qbCh of qbChaps) {
        if (pools[subject][qbCh]) {
          targetSubPools.push(pools[subject][qbCh]);
        }
      }
      if (targetSubPools.length === 0) {
        // Full syllabus fallback across all chapters of this subject
        targetSubPools.push(...Object.values(pools[subject]));
      }

      // Pick required counts:
      // 5 Easy
      // 19 Moderate
      // 15 Most Difficult
      // 6 Assertion Reasoning
      const easyQs = [];
      for (let i = 0; i < 5; i++) {
        easyQs.push(getNextQuestion(targetSubPools, subjectFallbackPools[subject], 'easy', usedInTest));
      }

      const arQs = [];
      for (let i = 0; i < 6; i++) {
        arQs.push(getNextQuestion(targetSubPools, subjectFallbackPools[subject], 'ar', usedInTest));
      }

      const medQs = [];
      for (let i = 0; i < 19; i++) {
        medQs.push(getNextQuestion(targetSubPools, subjectFallbackPools[subject], 'med', usedInTest));
      }

      const hardQs = [];
      for (let i = 0; i < 15; i++) {
        hardQs.push(getNextQuestion(targetSubPools, subjectFallbackPools[subject], 'hard', usedInTest));
      }

      // Arrange subject's 45 questions according to user's exact specification:
      // 5 easy question (question no 1,3,5,7,9) -> indices 0, 2, 4, 6, 8
      // 6 assertion reasoning question (question no 40 to 45) -> indices 39, 40, 41, 42, 43, 44
      // 19 moderate question & 15 most difficult question -> remaining 34 slots
      const subject45 = new Array(45);

      // Easy questions: Q1, Q3, Q5, Q7, Q9
      subject45[0] = easyQs[0];
      subject45[2] = easyQs[1];
      subject45[4] = easyQs[2];
      subject45[6] = easyQs[3];
      subject45[8] = easyQs[4];

      // AR questions: Q40 to Q45
      subject45[39] = arQs[0];
      subject45[40] = arQs[1];
      subject45[41] = arQs[2];
      subject45[42] = arQs[3];
      subject45[43] = arQs[4];
      subject45[44] = arQs[5];

      // Moderate questions: 19 slots (Q2, 4, 6, 8, 10, 11..24)
      subject45[1] = medQs[0];
      subject45[3] = medQs[1];
      subject45[5] = medQs[2];
      subject45[7] = medQs[3];
      subject45[9] = medQs[4];
      for (let m = 5; m < 19; m++) {
        subject45[5 + m] = medQs[m]; // indices 10 to 23
      }

      // Most Difficult questions: 15 slots (Q25 to Q39 -> indices 24 to 38)
      for (let h = 0; h < 15; h++) {
        subject45[24 + h] = hardQs[h]; // indices 24 to 38
      }

      fullTestQuestions.push(...subject45);
    }

    if (fullTestQuestions.length !== 180) {
      console.error(`Error: Test ${test.testId} has ${fullTestQuestions.length} questions instead of 180!`);
    }

    bulkTestUpdates.push({
      updateOne: {
        filter: { _id: test._id },
        update: {
          $set: {
            questions: fullTestQuestions,
            updatedAt: new Date()
          }
        }
      }
    });
    successCount++;
  }

  if (bulkTestUpdates.length > 0) {
    console.log(`Writing ${bulkTestUpdates.length} reallocated tests to MongoDB...`);
    await db.collection('testPapers').bulkWrite(bulkTestUpdates);
    console.log(`Successfully updated ${bulkTestUpdates.length} test papers in MongoDB.`);
  }

  console.log('\n--- Step 3: Verifying newly reassigned tests ---');
  const sampleTest = await db.collection('testPapers').findOne({ testId: 'neet-SUNDAY-2026-Oct-18' });
  if (sampleTest) {
    console.log(`Verifying sample test: ${sampleTest.testId} (${sampleTest.title})`);
    console.log(`Total questions: ${sampleTest.questions.length}`);
    const qDocs = await db.collection('questionBank').find({ _id: { $in: sampleTest.questions } }).toArray();
    const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));

    // Check physics (first 45 questions)
    console.log('Physics Section (first 45 Qs):');
    const phyQuestions = sampleTest.questions.slice(0, 45).map(id => qMap.get(id.toString()));
    console.log('Q1 (easy):', phyQuestions[0]?.difficulty, 'Type:', phyQuestions[0]?.type);
    console.log('Q3 (easy):', phyQuestions[2]?.difficulty, 'Type:', phyQuestions[2]?.type);
    console.log('Q5 (easy):', phyQuestions[4]?.difficulty, 'Type:', phyQuestions[4]?.type);
    console.log('Q7 (easy):', phyQuestions[6]?.difficulty, 'Type:', phyQuestions[6]?.type);
    console.log('Q9 (easy):', phyQuestions[8]?.difficulty, 'Type:', phyQuestions[8]?.type);
    console.log('Q40 (AR):', phyQuestions[39]?.difficulty, 'Type:', phyQuestions[39]?.type, 'QuestionType:', phyQuestions[39]?.questionType);
    console.log('Q45 (AR):', phyQuestions[44]?.difficulty, 'Type:', phyQuestions[44]?.type, 'QuestionType:', phyQuestions[44]?.questionType);
    console.log('Q25 (hard):', phyQuestions[24]?.difficulty, 'Type:', phyQuestions[24]?.type);
  }

  await client.close();
  console.log('\nAll done! Successfully reassigned all NEET full tests and live tests!');
}

reassignAllTests().catch(err => {
  console.error('Reassignment failed:', err);
  process.exit(1);
});
