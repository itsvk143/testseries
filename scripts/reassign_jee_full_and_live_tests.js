const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// NCERT / Syllabus Chapter to questionBank chapter mapping for JEE
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
  Mathematics: {
    "Sets": ["Sets, Relations, and Functions"],
    "Relations and Functions": ["Sets, Relations, and Functions"],
    "Trigonometric Functions": ["Trigonometric Identities"],
    "Complex Numbers and Quadratic Equations": ["Complex Numbers", "Quadratic Equations"],
    "Linear Inequalities": ["Sets, Relations, and Functions", "Quadratic Equations"],
    "Permutations and Combinations": ["Permutations and Combinations", "Permutations & Combinations"],
    "Binomial Theorem": ["Binomial Theorem"],
    "Sequences and Series": ["Sequences and Series", "Sequences & Series"],
    "Straight Lines": ["Straight Lines"],
    "Conic Sections": ["Conic Sections (Parabola, Ellipse, Hyperbola)", "Circles"],
    "Introduction to Three Dimensional Geometry": ["3D Geometry"],
    "Limits and Derivatives": ["Limits, Continuity & Differentiability"],
    "Statistics": ["Statistics"],
    "Probability": ["Probability"],
    "Relations and Functions (12)": ["Sets, Relations, and Functions"],
    "Inverse Trigonometric Functions": ["Inverse Trigonometric Functions"],
    "Matrices": ["Matrices & Determinants"],
    "Determinants": ["Matrices & Determinants"],
    "Continuity and Differentiability": ["Limits, Continuity & Differentiability"],
    "Application of Derivatives": ["Application of Derivatives"],
    "Integrals": ["Integrals"],
    "Application of Integrals": ["Areas"],
    "Differential Equations": ["Differential Equations"],
    "Vector Algebra": ["Vectors"],
    "Three Dimensional Geometry": ["3D Geometry"],
    "Linear Programming": ["3D Geometry", "Straight Lines"],
    "Probability (12)": ["Probability"]
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
      qbSet.add(ch);
    }
  }
  return [...qbSet];
}

async function calibrateMathDifficulty(db) {
  console.log('--- Step 1: Calibrating Mathematics difficulty in questionBank ---');
  const chapters = await db.collection('questionBank').distinct('chapter', { subject: 'Mathematics' });
  let totalUpdated = 0;

  for (const chap of chapters) {
    const docs = await db.collection('questionBank').find({
      subject: 'Mathematics',
      chapter: chap,
      $nor: [
        { type: /assertion/i },
        { questionType: /assertion/i },
        { assertion: { $exists: true, $ne: '' } }
      ]
    }).project({ _id: 1, question: 1, difficulty: 1 }).toArray();

    if (docs.length === 0) continue;

    docs.sort((a, b) => (a.question?.length || 0) - (b.question?.length || 0));

    const easyCount = Math.max(5, Math.floor(docs.length * 0.25));
    const hardCount = Math.max(10, Math.floor(docs.length * 0.35));
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
  console.log(`Math difficulty calibration complete. Total questions updated: ${totalUpdated}`);
}

async function reassignJeeTests() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Missing MONGODB_URI');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  // Calibrate Math first
  await calibrateMathDifficulty(db);

  // Import JEE Mains frontend definitions
  const { jeeMainsTests } = await import('../src/data/exams/jeeMains.js');
  const frontendTestMap = new Map();
  jeeMainsTests.forEach(t => frontendTestMap.set(t.id, t));

  console.log('\n--- Step 2: Fetching JEE Full Tests and Live Tests from DB ---');
  const targetTests = await db.collection('testPapers').find({
    $or: [
      { testId: /^jee-mains-MOCK/i },
      { testId: /^jee-mains-SUNDAY/i },
      { testId: /^jee-mains-LIVE/i }
    ]
  }).toArray();

  console.log(`Found ${targetTests.length} JEE test papers to reassign.`);

  console.log('Building in-memory question pool for Physics, Chemistry, Mathematics...');
  const allQuestions = await db.collection('questionBank').find(
    { subject: { $in: ['Physics', 'Chemistry', 'Mathematics'] } },
    { projection: { _id: 1, subject: 1, chapter: 1, subTopic: 1, difficulty: 1, type: 1, questionType: 1, assertion: 1 } }
  ).toArray();

  console.log(`Total questions loaded for pool: ${allQuestions.length}`);

  const pools = { Physics: {}, Chemistry: {}, Mathematics: {} };
  const subjectFallbackPools = {
    Physics: { easy: [], med: [], hard: [], ar: [] },
    Chemistry: { easy: [], med: [], hard: [], ar: [] },
    Mathematics: { easy: [], med: [], hard: [], ar: [] }
  };

  for (const q of allQuestions) {
    const sub = q.subject;
    if (!pools[sub]) continue;

    const chap = q.chapter || 'Unknown';
    if (!pools[sub][chap]) {
      pools[sub][chap] = { easy: [], med: [], hard: [], ar: [] };
    }

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

    for (let i = 0; i < fallbackPool[type].length; i++) {
      const qId = fallbackPool[type][i];
      const str = qId.toString();
      if (!usedInTest.has(str)) {
        usedInTest.add(str);
        return qId;
      }
    }

    return list[0] || fallbackPool[type][0];
  }

  let successCount = 0;
  const bulkTestUpdates = [];

  for (const test of targetTests) {
    const frontendDef = frontendTestMap.get(test.testId) || {};
    const testSyllabus = frontendDef.syllabus || test.syllabus || {};

    const fullTestQuestions = [];
    const usedInTest = new Set();

    const subjects = ['Physics', 'Chemistry', 'Mathematics'];

    for (const subject of subjects) {
      const ncertChaps = testSyllabus[subject] || [];
      const qbChaps = mapNcertChaptersToQbChapters(subject, ncertChaps);

      const targetSubPools = [];
      for (const qbCh of qbChaps) {
        if (pools[subject][qbCh]) {
          targetSubPools.push(pools[subject][qbCh]);
        }
      }
      if (targetSubPools.length === 0) {
        targetSubPools.push(...Object.values(pools[subject]));
      }

      // Exact user specifications for JEE per subject (25 questions total):
      // - 5 easy question (question no 1,3,5,7,9)
      // - 5 moderate question (2,4,6,8,10)
      // - 10 most difficult question (question no 11 to 20)
      // - 5 assertion reasoning question ((question no 20 to 25 -> questions 21 to 25)
      const easyQs = [];
      for (let i = 0; i < 5; i++) {
        easyQs.push(getNextQuestion(targetSubPools, subjectFallbackPools[subject], 'easy', usedInTest));
      }

      const medQs = [];
      for (let i = 0; i < 5; i++) {
        medQs.push(getNextQuestion(targetSubPools, subjectFallbackPools[subject], 'med', usedInTest));
      }

      const hardQs = [];
      for (let i = 0; i < 10; i++) {
        hardQs.push(getNextQuestion(targetSubPools, subjectFallbackPools[subject], 'hard', usedInTest));
      }

      const arQs = [];
      for (let i = 0; i < 5; i++) {
        arQs.push(getNextQuestion(targetSubPools, subjectFallbackPools[subject], 'ar', usedInTest));
      }

      const subject25 = new Array(25);

      // 5 Easy questions: Q1, Q3, Q5, Q7, Q9 (0-indexed: 0, 2, 4, 6, 8)
      subject25[0] = easyQs[0];
      subject25[2] = easyQs[1];
      subject25[4] = easyQs[2];
      subject25[6] = easyQs[3];
      subject25[8] = easyQs[4];

      // 5 Moderate questions: Q2, Q4, Q6, Q8, Q10 (0-indexed: 1, 3, 5, 7, 9)
      subject25[1] = medQs[0];
      subject25[3] = medQs[1];
      subject25[5] = medQs[2];
      subject25[7] = medQs[3];
      subject25[9] = medQs[4];

      // 10 Most Difficult questions: Q11 to Q20 (0-indexed: 10 to 19)
      for (let h = 0; h < 10; h++) {
        subject25[10 + h] = hardQs[h];
      }

      // 5 Assertion Reasoning questions: Q21 to Q25 (0-indexed: 20 to 24)
      for (let a = 0; a < 5; a++) {
        subject25[20 + a] = arQs[a];
      }

      fullTestQuestions.push(...subject25);
    }

    if (fullTestQuestions.length !== 75) {
      console.error(`Error: Test ${test.testId} has ${fullTestQuestions.length} questions instead of 75!`);
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
    console.log(`Writing ${bulkTestUpdates.length} reallocated JEE tests to MongoDB...`);
    await db.collection('testPapers').bulkWrite(bulkTestUpdates);
    console.log(`Successfully updated ${bulkTestUpdates.length} JEE test papers in MongoDB.`);
  }

  console.log('\n--- Step 3: Verifying newly reassigned JEE tests ---');
  const sampleTest = await db.collection('testPapers').findOne({ testId: 'jee-mains-MOCK-1' });
  if (sampleTest) {
    console.log(`Verifying sample test: ${sampleTest.testId} (${sampleTest.title})`);
    console.log(`Total questions: ${sampleTest.questions.length}`);
    const qDocs = await db.collection('questionBank').find({ _id: { $in: sampleTest.questions } }).toArray();
    const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));

    for (let sIdx = 0; sIdx < 3; sIdx++) {
      const sName = ['Physics', 'Chemistry', 'Mathematics'][sIdx];
      const slice = sampleTest.questions.slice(sIdx * 25, (sIdx + 1) * 25).map(id => qMap.get(id.toString()));
      console.log(`\nSection: ${sName}`);
      console.log('Q1 (easy):', slice[0]?.difficulty, 'Type:', slice[0]?.type);
      console.log('Q2 (moderate):', slice[1]?.difficulty, 'Type:', slice[1]?.type);
      console.log('Q3 (easy):', slice[2]?.difficulty, 'Type:', slice[2]?.type);
      console.log('Q4 (moderate):', slice[3]?.difficulty, 'Type:', slice[3]?.type);
      console.log('Q5 (easy):', slice[4]?.difficulty, 'Type:', slice[4]?.type);
      console.log('Q10 (moderate):', slice[9]?.difficulty, 'Type:', slice[9]?.type);
      console.log('Q11 (difficult):', slice[10]?.difficulty, 'Type:', slice[10]?.type);
      console.log('Q20 (difficult):', slice[19]?.difficulty, 'Type:', slice[19]?.type);
      console.log('Q21 (AR):', slice[20]?.difficulty, 'Type:', slice[20]?.type, 'QuestionType:', slice[20]?.questionType);
      console.log('Q25 (AR):', slice[24]?.difficulty, 'Type:', slice[24]?.type, 'QuestionType:', slice[24]?.questionType);
    }
  }

  await client.close();
  console.log('\nAll done! Successfully reassigned all JEE full tests and live tests!');
}

reassignJeeTests().catch(err => {
  console.error('Reassignment failed:', err);
  process.exit(1);
});
