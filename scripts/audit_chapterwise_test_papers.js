const fs = require('fs');
const vm = require('vm');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// Load syllabus
const code = fs.readFileSync('./src/data/chapters.js', 'utf8').replace(/export const /g, 'var ') + '; module.exports = { neetSyllabus, jeeMainsSyllabus };';
const sandbox = { module: { exports: {} } };
vm.runInNewContext(code, sandbox);
const { neetSyllabus, jeeMainsSyllabus } = sandbox.module.exports;

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

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const tPapers = db.collection('testPapers');

  console.log('Connected to MongoDB.');

  const neetChapterTests = [
    ...generateTests('neet', neetSyllabus.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('neet', neetSyllabus.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('neet', neetSyllabus.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('neet', neetSyllabus.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('neet', neetSyllabus.Botany['11'], 'CHAPTER', 'Botany', '11'),
    ...generateTests('neet', neetSyllabus.Botany['12'], 'CHAPTER', 'Botany', '12'),
    ...generateTests('neet', neetSyllabus.Zoology['11'], 'CHAPTER', 'Zoology', '11'),
    ...generateTests('neet', neetSyllabus.Zoology['12'], 'CHAPTER', 'Zoology', '12')
  ];

  const neetIds = neetChapterTests.map(t => t.id);
  const foundNeetDocs = await tPapers.find({ testId: { $in: neetIds } }).toArray();
  const neetDocMap = new Map(foundNeetDocs.map(d => [d.testId, d]));

  const neetMissing = [];
  const neetEmpty = [];
  const neetValid = [];

  for (const t of neetChapterTests) {
    const doc = neetDocMap.get(t.id);
    if (!doc) {
      neetMissing.push(t);
    } else if (!doc.questions || doc.questions.length === 0) {
      neetEmpty.push({ ...t, docId: doc._id });
    } else {
      neetValid.push({ ...t, qCount: doc.questions.length });
    }
  }

  console.log(`\n=== NEET CHAPTER TESTS AUDIT (${neetChapterTests.length} tests) ===`);
  console.log(`NEET Valid: ${neetValid.length}, Empty: ${neetEmpty.length}, Missing in DB: ${neetMissing.length}`);
  if (neetEmpty.length > 0) {
    console.log('Empty NEET Tests:', neetEmpty.map(t => t.id));
  }
  if (neetMissing.length > 0) {
    console.log('Missing NEET Tests in DB:', neetMissing.map(t => t.id));
  }

  const jeeChapterTests = [
    ...generateTests('jee-mains', jeeMainsSyllabus.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Mathematics['11'], 'CHAPTER', 'Mathematics', '11'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Mathematics['12'], 'CHAPTER', 'Mathematics', '12')
  ];

  const jeeIds = jeeChapterTests.map(t => t.id);
  const foundJeeDocs = await tPapers.find({ testId: { $in: jeeIds } }).toArray();
  const jeeDocMap = new Map(foundJeeDocs.map(d => [d.testId, d]));

  const jeeMissing = [];
  const jeeEmpty = [];
  const jeeValid = [];

  for (const t of jeeChapterTests) {
    const doc = jeeDocMap.get(t.id);
    if (!doc) {
      jeeMissing.push(t);
    } else if (!doc.questions || doc.questions.length === 0) {
      jeeEmpty.push({ ...t, docId: doc._id });
    } else {
      jeeValid.push({ ...t, qCount: doc.questions.length });
    }
  }

  console.log(`\n=== JEE MAINS CHAPTER TESTS AUDIT (${jeeChapterTests.length} tests) ===`);
  console.log(`JEE Valid: ${jeeValid.length}, Empty: ${jeeEmpty.length}, Missing in DB: ${jeeMissing.length}`);
  if (jeeEmpty.length > 0) {
    console.log('Empty JEE Tests:', jeeEmpty.map(t => t.id));
  }
  if (jeeMissing.length > 0) {
    console.log('Missing JEE Tests in DB:', jeeMissing.map(t => t.id));
  }

  await client.close();
}

audit().catch(console.error);
