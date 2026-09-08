require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function censusCurrentElectricity() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  // Check distinct chapters matching "current" or "electric"
  const chapters = await db.collection('questionBank').distinct('chapter', {
    subject: 'Physics'
  });
  console.log('Physics chapters matching current / electricity:');
  chapters.filter(c => /current|electr/i.test(c)).forEach(c => console.log(' -', c));

  // Assuming chapter name is "Current Electricity"
  const targetChapter = chapters.find(c => /current electricity/i.test(c)) || "Current Electricity";
  console.log(`\nTarget chapter identified: "${targetChapter}"`);

  const questions = await db.collection('questionBank').find({
    chapter: targetChapter,
    subject: 'Physics'
  }).toArray();

  console.log(`Total questions in "${targetChapter}": ${questions.length}`);

  const subtopics = {};
  const sources = {};
  const types = {};

  questions.forEach(q => {
    subtopics[q.subTopic] = (subtopics[q.subTopic] || 0) + 1;
    sources[q.source || 'undefined'] = (sources[q.source || 'undefined'] || 0) + 1;
    types[q.questionType || q.type || 'undefined'] = (types[q.questionType || q.type || 'undefined'] || 0) + 1;
  });

  console.log('\nSubtopics distribution:');
  console.dir(subtopics, { depth: null });

  console.log('\nSources distribution:');
  console.dir(sources, { depth: null });

  console.log('\nQuestion types:');
  console.dir(types, { depth: null });

  // Breakdown per subtopic by source
  console.log('\nPer-subtopic breakdown by source & type:');
  for (const sub of Object.keys(subtopics)) {
    const subDocs = questions.filter(q => q.subTopic === sub);
    const genuine = subDocs.filter(q => q.source === 'Question Bank');
    const generator = subDocs.filter(q => q.source !== 'Question Bank');
    
    const genTypes = {};
    generator.forEach(q => {
      const t = q.type || q.questionType;
      genTypes[t] = (genTypes[t] || 0) + 1;
    });

    console.log(`- Subtopic: "${sub}" | Total: ${subDocs.length} | Genuine: ${genuine.length} | Generator: ${generator.length} => Types: ${JSON.stringify(genTypes)}`);
  }

  // Check test paper references
  const allIds = questions.map(q => q._id);
  const testPapers = await db.collection('testPapers').find({}).toArray();
  const qIdSet = new Set(allIds.map(id => String(id)));

  let refCount = 0;
  const referencingPapers = [];

  testPapers.forEach(tp => {
    let countInThisPaper = 0;
    if (Array.isArray(tp.sections)) {
      tp.sections.forEach(sec => {
        if (Array.isArray(sec.questions)) {
          sec.questions.forEach(q => {
            if (qIdSet.has(String(q))) countInThisPaper++;
          });
        }
      });
    }
    if (Array.isArray(tp.questions)) {
      tp.questions.forEach(q => {
        if (qIdSet.has(String(q))) countInThisPaper++;
      });
    }
    if (countInThisPaper > 0) {
      refCount += countInThisPaper;
      referencingPapers.push({ title: tp.title, count: countInThisPaper });
    }
  });

  console.log(`\nReferencing Test Papers: ${referencingPapers.length} papers, Total References: ${refCount}`);
  referencingPapers.forEach(p => console.log(`  - "${p.title}": ${p.count} refs`));

  // Check for bogus topics in generator questions
  const sampleGen = questions.filter(q => q.source !== 'Question Bank');
  const bogusIndicators = ['aufbau', 'carbocation', 'oxoacid', 'benzene', 'cell cycle', 'mitosis', 'photosynthesis'];
  let bogusMatches = 0;
  sampleGen.forEach(q => {
    const txt = `${q.question} ${q.explanation}`.toLowerCase();
    if (bogusIndicators.some(b => txt.includes(b))) bogusMatches++;
  });
  console.log(`\nGenerator questions containing obvious non-physics bogus keywords: ${bogusMatches} / ${sampleGen.length}`);

  await client.close();
}

censusCurrentElectricity().catch(console.error);
