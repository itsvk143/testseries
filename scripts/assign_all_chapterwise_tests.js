const fs = require('fs');
const vm = require('vm');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// Load syllabus
const code = fs.readFileSync('./src/data/chapters.js', 'utf8').replace(/export const /g, 'var ') + '; module.exports = { neetSyllabus, jeeMainsSyllabus };';
const sandbox = { module: { exports: {} } };
vm.runInNewContext(code, sandbox);
const { neetSyllabus, jeeMainsSyllabus } = sandbox.module.exports;

// Import canonical chapter mapping
const { getCanonicalChapter } = require('../src/lib/chapterMapping.cjs');

const generateTests = (category, items, type, subjectName, classGrade) => {
  return items.map((itemName, i) => ({
    id: `${category}-${type}-${subjectName ? subjectName + '-' : ''}${itemName ? itemName.replace(/\s+/g, '-') : i + 1}${classGrade !== 'All Test' ? '-' + classGrade : ''}`,
    title: itemName,
    type,
    subject: subjectName,
    chapter: itemName,
    classGrade,
    category
  }));
};

async function assignAllChapterQuestions() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not set.');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const tPapers = db.collection('testPapers');
  const qBank = db.collection('questionBank');

  console.log('🚀 Connected to MongoDB.');

  // Compile all standard chapterwise tests
  const neetTests = [
    ...generateTests('neet', neetSyllabus.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('neet', neetSyllabus.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('neet', neetSyllabus.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('neet', neetSyllabus.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('neet', neetSyllabus.Botany['11'], 'CHAPTER', 'Botany', '11'),
    ...generateTests('neet', neetSyllabus.Botany['12'], 'CHAPTER', 'Botany', '12'),
    ...generateTests('neet', neetSyllabus.Zoology['11'], 'CHAPTER', 'Zoology', '11'),
    ...generateTests('neet', neetSyllabus.Zoology['12'], 'CHAPTER', 'Zoology', '12')
  ];

  const jeeTests = [
    ...generateTests('jee-mains', jeeMainsSyllabus.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Mathematics['11'], 'CHAPTER', 'Mathematics', '11'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Mathematics['12'], 'CHAPTER', 'Mathematics', '12')
  ];

  // Also find existing CHAPTER tests in testPapers (to include BITSAT, legacy aliases, etc.)
  const existingChapterPapers = await tPapers.find({
    $or: [{ testId: /CHAPTER/i }, { type: 'CHAPTER' }, { testType: 'CHAPTER' }]
  }).toArray();

  const allTargetsMap = new Map();

  for (const t of neetTests) {
    allTargetsMap.set(t.id, {
      testId: t.id,
      title: t.title,
      exam: 'NEET',
      subject: t.subject,
      chapter: t.chapter,
      classGrade: t.classGrade,
      targetQuestionsCount: 45,
      duration: 60,
      totalMarks: 180
    });
  }

  for (const t of jeeTests) {
    allTargetsMap.set(t.id, {
      testId: t.id,
      title: t.title,
      exam: 'JEE Main',
      subject: t.subject,
      chapter: t.chapter,
      classGrade: t.classGrade,
      targetQuestionsCount: 25,
      duration: 60,
      totalMarks: 100
    });
  }

  for (const p of existingChapterPapers) {
    if (!allTargetsMap.has(p.testId)) {
      const isNeet = (p.exam || '').toUpperCase().includes('NEET') || p.testId.startsWith('neet');
      const isBitsat = (p.exam || '').toUpperCase().includes('BITSAT') || p.testId.startsWith('bitsat');
      const qCount = isBitsat ? 20 : (isNeet ? 45 : 25);
      const totalMarks = isBitsat ? 60 : (isNeet ? 180 : 100);
      const duration = isBitsat ? 45 : 60;
      const examName = isBitsat ? 'BITSAT' : (isNeet ? 'NEET' : 'JEE Main');

      allTargetsMap.set(p.testId, {
        testId: p.testId,
        title: p.title || p.testId.replace(/-/g, ' '),
        exam: examName,
        subject: p.subject || (p.testId.includes('Physics') ? 'Physics' : (p.testId.includes('Chemistry') ? 'Chemistry' : (p.testId.includes('Mathematics') ? 'Mathematics' : (p.testId.includes('Botany') ? 'Botany' : 'Zoology')))),
        chapter: p.chapter || p.title || '',
        classGrade: p.classGrade || '11',
        targetQuestionsCount: qCount,
        duration,
        totalMarks
      });
    }
  }

  console.log(`Total chapterwise test targets to assign: ${allTargetsMap.size}`);

  const summary = {
    total: allTargetsMap.size,
    success: 0,
    details: []
  };

  for (const [targetId, cfg] of allTargetsMap.entries()) {
    const isNeet = cfg.exam === 'NEET';
    const targetTotal = cfg.targetQuestionsCount;
    const targetEasy = 5;
    const targetDifficult = targetTotal - targetEasy; // 40 for NEET, 20 for JEE

    const mapping = getCanonicalChapter(cfg.subject, cfg.chapter);
    const qSubject = mapping.subject || cfg.subject;
    const qChapter = mapping.chapter || cfg.chapter;

    // Base query for primary chapter
    const primaryQuery = {
      subject: qSubject,
      chapter: qChapter
    };

    // Single-correct only for BITSAT
    if (cfg.exam === 'BITSAT') {
      primaryQuery.$nor = [
        { questionType: { $regex: /assertion|ar|numerical/i } },
        { type: { $regex: /assertion|ar|numerical/i } }
      ];
    }

    // 1. Fetch 5 Easy questions
    let easyQs = await qBank.find({
      ...primaryQuery,
      difficulty: { $regex: /^easy$/i }
    }).limit(targetEasy).toArray();

    // 2. Fetch Difficult questions
    let diffQs = await qBank.find({
      ...primaryQuery,
      difficulty: { $regex: /difficult|hard/i }
    }).limit(targetDifficult).toArray();

    const selectedIds = new Set([...easyQs.map(q => q._id.toString()), ...diffQs.map(q => q._id.toString())]);

    // 3. Top up Easy quota from Medium if < 5 Easy available
    if (easyQs.length < targetEasy) {
      const needed = targetEasy - easyQs.length;
      const topUpEasy = await qBank.find({
        ...primaryQuery,
        _id: { $nin: Array.from(selectedIds).map(id => new ObjectId(id)) },
        difficulty: { $regex: /medium|moderate/i }
      }).limit(needed).toArray();
      for (const q of topUpEasy) {
        selectedIds.add(q._id.toString());
        easyQs.push(q);
      }
    }

    // 4. Top up Difficult quota from Medium if < targetDifficult available
    if (diffQs.length < targetDifficult) {
      const needed = targetDifficult - diffQs.length;
      const topUpDiff = await qBank.find({
        ...primaryQuery,
        _id: { $nin: Array.from(selectedIds).map(id => new ObjectId(id)) },
        difficulty: { $regex: /medium|moderate/i }
      }).limit(needed).toArray();
      for (const q of topUpDiff) {
        selectedIds.add(q._id.toString());
        diffQs.push(q);
      }
    }

    // 5. If still not full, top up from ANY available questions in primary chapter
    if (selectedIds.size < targetTotal) {
      const needed = targetTotal - selectedIds.size;
      const anyLeft = await qBank.find({
        ...primaryQuery,
        _id: { $nin: Array.from(selectedIds).map(id => new ObjectId(id)) }
      }).limit(needed).toArray();
      for (const q of anyLeft) {
        selectedIds.add(q._id.toString());
        diffQs.push(q);
      }
    }

    // 6. If still not full, check fallback chapter / enrichment
    if (selectedIds.size < targetTotal) {
      let fbSubject = qSubject;
      let fbChapter = null;

      if (qChapter === 'Electrochemistry') {
        fbChapter = 'Redox Reactions and Electrochemistry';
      } else if (qChapter === 'Alcohols, Phenols, and Ethers') {
        fbChapter = 'Organic Compounds Containing Oxygen';
      } else if (qChapter === 'Biological Classification' || qChapter === 'Morphology of Flowering Plants') {
        fbChapter = 'Diversity in Living World';
      } else if (qChapter === 'Locomotion and Movement' || qChapter === 'Excretory Products and their Elimination') {
        fbChapter = 'Human Physiology';
      } else if (qChapter === 'Biotechnology and Its Applications') {
        fbSubject = 'Zoology';
        fbChapter = 'Biotechnology and Its Applications';
      } else if (qChapter === 'Genetics and Evolution') {
        fbSubject = 'Botany';
        fbChapter = 'Genetics and Evolution';
      }

      if (fbChapter) {
        // First try to grab Easy if we were short on Easy
        if (easyQs.length < targetEasy) {
          const needed = targetEasy - easyQs.length;
          const fbEasy = await qBank.find({
            subject: fbSubject,
            chapter: fbChapter,
            _id: { $nin: Array.from(selectedIds).map(id => new ObjectId(id)) },
            difficulty: { $regex: /^easy$/i }
          }).limit(needed).toArray();
          for (const q of fbEasy) {
            selectedIds.add(q._id.toString());
            easyQs.push(q);
          }
        }

        // Fill remaining needed from Difficult or Medium
        if (selectedIds.size < targetTotal) {
          const needed = targetTotal - selectedIds.size;
          const fbMore = await qBank.find({
            subject: fbSubject,
            chapter: fbChapter,
            _id: { $nin: Array.from(selectedIds).map(id => new ObjectId(id)) }
          }).limit(needed).toArray();
          for (const q of fbMore) {
            selectedIds.add(q._id.toString());
            diffQs.push(q);
          }
        }
      }
    }

    // Assemble final questions: exactly 5 Easy first, then the remaining Difficult/TopUp
    const orderedObjectIds = [
      ...easyQs.map(q => q._id),
      ...diffQs.map(q => q._id)
    ];

    // Ensure strictly unique ObjectIds
    const seen = new Set();
    const finalObjectIds = [];
    for (const oid of orderedObjectIds) {
      const s = oid.toString();
      if (!seen.has(s) && finalObjectIds.length < targetTotal) {
        seen.add(s);
        finalObjectIds.push(oid);
      }
    }

    // Upsert into testPapers collection
    await tPapers.updateOne(
      { testId: cfg.testId },
      {
        $set: {
          testId: cfg.testId,
          title: cfg.title,
          exam: cfg.exam,
          subject: cfg.subject,
          chapter: cfg.chapter,
          canonicalChapter: qChapter,
          classGrade: cfg.classGrade,
          duration: cfg.duration,
          totalMarks: cfg.totalMarks,
          questionsCount: finalObjectIds.length,
          questions: finalObjectIds,
          type: 'CHAPTER',
          testType: 'CHAPTER',
          updatedAt: new Date()
        },
        $setOnInsert: {
          createdAt: new Date()
        }
      },
      { upsert: true }
    );

    // Track used in tests
    await qBank.updateMany(
      { _id: { $in: finalObjectIds } },
      { $addToSet: { usedInTests: cfg.testId } }
    );

    summary.success++;
    const easyCount = easyQs.length;
    const diffCount = finalObjectIds.length - easyCount;

    if (summary.success <= 15 || finalObjectIds.length < targetTotal) {
      console.log(`✅ [${cfg.exam}] ${cfg.testId}: Assigned ${finalObjectIds.length}/${targetTotal} Qs (Easy: ${easyCount}, Difficult/Bal: ${diffCount}) [Chapter: ${qChapter}]`);
    }
  }

  console.log(`\n🎉 Successfully assigned questions for ${summary.success}/${summary.total} chapterwise tests!`);

  // Verify the two tests from the screenshots specifically
  console.log('\n--- VERIFICATION OF SCREENSHOT TARGETS ---');
  const t1 = await tPapers.findOne({ testId: 'neet-CHAPTER-Chemistry-Structure-of-Atom-11' });
  const t2 = await tPapers.findOne({ testId: 'neet-CHAPTER-Physics-Motion-in-a-Straight-Line-11' });

  for (const t of [t1, t2]) {
    if (!t) {
      console.log('Target NOT found!');
      continue;
    }
    const qs = await qBank.find({ _id: { $in: t.questions } }).toArray();
    const diffMap = {};
    qs.forEach(q => diffMap[q.difficulty || 'Undefined'] = (diffMap[q.difficulty || 'Undefined'] || 0) + 1);
    console.log(`\nTest: ${t.testId}`);
    console.log(`Title: ${t.title}`);
    console.log(`Total Questions: ${t.questions.length}`);
    console.log(`Difficulty Breakdown:`, diffMap);
    console.log(`Sample Q1 (Easy): [${qs[0]?.difficulty}] ${qs[0]?.question.slice(0, 60)}...`);
    console.log(`Sample Q6 (Difficult): [${qs[5]?.difficulty}] ${qs[5]?.question.slice(0, 60)}...`);
  }

  await client.close();
}

assignAllChapterQuestions().catch(console.error);
