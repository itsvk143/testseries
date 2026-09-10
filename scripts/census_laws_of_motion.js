const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function censusLawsOfMotion() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Missing MONGODB_URI');
    process.exit(1);
  }
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testseries');
    const qb = db.collection('questionBank');
    const tp = db.collection('testPapers');

    // Find distinct chapters in Physics matching "Motion" or "Laws"
    const physicsChapters = await qb.distinct('chapter', { subject: 'Physics' });
    const matchingChapters = physicsChapters.filter(c => /motion|law/i.test(c));
    console.log('Matching Physics chapters in DB:', matchingChapters);

    // Specifically target Laws of Motion (case-insensitive regex)
    const exactChapter = matchingChapters.find(c => /laws of motion/i.test(c)) || "Laws of Motion";
    console.log(`Target chapter: "${exactChapter}"`);

    const allQ = await qb.find({ chapter: exactChapter, subject: 'Physics' }).toArray();
    console.log(`Total questions in "${exactChapter}": ${allQ.length}`);

    const genuine = allQ.filter(q => q.source === 'Question Bank');
    const generator = allQ.filter(q => q.source !== 'Question Bank');
    console.log(`Genuine count: ${genuine.length}, Generator count: ${generator.length}`);

    // Group generator by subtopic
    const genSub = {};
    generator.forEach(q => {
      const sub = q.subTopic || q.subtopic || 'None';
      const type = q.type || 'UNKNOWN';
      if (!genSub[sub]) genSub[sub] = { AR: 0, MCQ: 0, NUM: 0, total: 0 };
      if (type === 'ASSERTION_REASON') genSub[sub].AR++;
      else if (type === 'MCQ') genSub[sub].MCQ++;
      else if (type === 'NUMERICAL') genSub[sub].NUM++;
      genSub[sub].total++;
    });
    console.log('\n--- Generator Questions by Subtopic ---');
    console.table(genSub);

    // Group genuine by subtopic
    const genuineSub = {};
    genuine.forEach(q => {
      const sub = q.subTopic || q.subtopic || 'None';
      const type = q.type || 'UNKNOWN';
      if (!genuineSub[sub]) genuineSub[sub] = { AR: 0, MCQ: 0, NUM: 0, total: 0 };
      if (type === 'ASSERTION_REASON') genuineSub[sub].AR++;
      else if (type === 'MCQ') genuineSub[sub].MCQ++;
      else if (type === 'NUMERICAL') genuineSub[sub].NUM++;
      genuineSub[sub].total++;
    });
    console.log('\n--- Genuine Questions by Subtopic ---');
    console.table(genuineSub);

    // Check test paper references
    const qIds = allQ.map(q => q._id);
    const qIdStrs = allQ.map(q => q._id.toString());
    const qIdSet = new Set(qIdStrs);

    const papers = await tp.find({
      $or: [
        { 'questions': { $in: qIds } },
        { 'questions': { $in: qIdStrs } }
      ]
    }).toArray();

    console.log(`\nTest papers referencing this chapter: ${papers.length}`);
    let totalRefs = 0;
    papers.forEach(p => {
      let count = 0;
      if (Array.isArray(p.questions)) {
        p.questions.forEach(id => {
          if (qIdSet.has(id ? id.toString() : '')) count++;
        });
      }
      totalRefs += count;
      console.log(`- ${p.testId} (${p.title} | ${p.exam}): ${count} questions`);
    });
    console.log(`Total question references across test papers: ${totalRefs}`);

    // Sample 3 generator questions to inspect content
    console.log('\n--- Sample Generator Questions ---');
    generator.slice(0, 3).forEach((q, idx) => {
      console.log(`Sample #${idx + 1} (${q._id}) [${q.subTopic} - ${q.type}]:`);
      console.log(`Q: ${q.question.substring(0, 150)}...`);
      console.log(`Options: ${JSON.stringify(q.options)}`);
      console.log(`Exp: ${q.explanation ? q.explanation.substring(0, 150) : ''}...`);
    });

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

censusLawsOfMotion();
