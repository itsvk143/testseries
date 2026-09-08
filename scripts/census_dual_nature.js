const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function runCensus() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas.');
    const db = client.db('testseries');
    const qb = db.collection('questionBank');
    const tp = db.collection('testPapers');

    // Find distinct chapters in Physics matching "Dual"
    const chapters = await qb.distinct('chapter', { subject: /physics/i, chapter: /dual/i });
    console.log('Matching chapters in Physics:', chapters);

    if (chapters.length === 0) {
      const allPhysicsChapters = await qb.distinct('chapter', { subject: /physics/i });
      console.log('All Physics chapters:', allPhysicsChapters.filter(c => /matter|radiation|photo|electron|atom/i.test(c)));
      return;
    }

    for (const chapterName of chapters) {
      console.log(`\n========================================`);
      console.log(`CHAPTER: "${chapterName}"`);
      console.log(`========================================`);

      const total = await qb.countDocuments({ chapter: chapterName, subject: 'Physics' });
      const genuine = await qb.countDocuments({ chapter: chapterName, subject: 'Physics', source: 'Question Bank' });
      const generator = await qb.countDocuments({ chapter: chapterName, subject: 'Physics', source: { $ne: 'Question Bank' } });

      console.log(`Total questions: ${total}`);
      console.log(`Genuine questions (source: 'Question Bank'): ${genuine}`);
      console.log(`Generator questions: ${generator}`);

      // Subtopics breakdown
      const subtopics = await qb.aggregate([
        { $match: { chapter: chapterName, subject: 'Physics' } },
        {
          $group: {
            _id: {
              subtopic: { $ifNull: ["$subTopic", "$subtopic"] },
              source: "$source",
              type: { $ifNull: ["$type", "$questionType"] }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { "_id.subtopic": 1, "_id.source": 1, "_id.type": 1 } }
      ]).toArray();

      console.log('\n--- Subtopic, Source & Type Breakdown ---');
      console.table(subtopics.map(s => ({
        subtopic: s._id.subtopic,
        source: s._id.source || 'GENERATOR',
        type: s._id.type,
        count: s.count
      })));

      // Check test paper references
      const sampleQIds = (await qb.find({ chapter: chapterName, subject: 'Physics' }, { projection: { _id: 1 } }).toArray()).map(q => q._id.toString());
      const qIdSet = new Set(sampleQIds);

      const allPapers = await tp.find({}).toArray();
      let refCount = 0;
      const refPapers = [];

      for (const paper of allPapers) {
        let pRefs = 0;
        if (Array.isArray(paper.questions)) {
          paper.questions.forEach(q => {
            const qid = String(q?._id || q?.question || q);
            if (qIdSet.has(qid)) pRefs++;
          });
        }
        if (Array.isArray(paper.sections)) {
          paper.sections.forEach(sec => {
            if (Array.isArray(sec.questions)) {
              sec.questions.forEach(q => {
                const qid = String(q?._id || q?.question || q);
                if (qIdSet.has(qid)) pRefs++;
              });
            }
          });
        }
        if (pRefs > 0) {
          refCount += pRefs;
          refPapers.push({ title: paper.title || paper.name, id: paper._id.toString(), count: pRefs });
        }
      }

      console.log(`\nTest Papers referencing this chapter: ${refPapers.length} papers, ${refCount} total question references.`);
      console.table(refPapers);

      // Sample inspect generator questions
      console.log('\n--- Sample Generator Questions ---');
      const sampleGen = await qb.find({ chapter: chapterName, subject: 'Physics', source: { $ne: 'Question Bank' } }).limit(4).toArray();
      sampleGen.forEach((g, i) => {
        console.log(`\n[Generator #${i+1}] ID: ${g._id} | Subtopic: ${g.subTopic || g.subtopic} | Type: ${g.type}`);
        console.log(`Question: ${g.question}`);
        console.log(`Options: ${JSON.stringify(g.options)}`);
        console.log(`Correct Answer: ${g.correctAnswer}`);
        console.log(`Explanation: ${g.explanation}`);
      });

      // Sample inspect genuine questions
      console.log('\n--- Sample Genuine Questions ---');
      const sampleGenuine = await qb.find({ chapter: chapterName, subject: 'Physics', source: 'Question Bank' }).limit(3).toArray();
      sampleGenuine.forEach((g, i) => {
        console.log(`\n[Genuine #${i+1}] ID: ${g._id} | Subtopic: ${g.subTopic || g.subtopic} | Type: ${g.type} | Marks: ${g.marks}/${g.negativeMarks}`);
        console.log(`Question: ${g.question}`);
        console.log(`Options: ${JSON.stringify(g.options)}`);
        console.log(`Correct Answer: ${g.correctAnswer}`);
        console.log(`Explanation: ${g.explanation}`);
      });
    }
  } catch (err) {
    console.error('Census error:', err);
  } finally {
    await client.close();
  }
}

runCensus();
