const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');
  const tPapers = db.collection('testPapers');

  // Check class distribution in questionBank
  const classDist = await qBank.aggregate([
    { $match: { chapter: 'Differential Equations' } },
    { $group: { _id: '$class', count: { $sum: 1 } } }
  ]).toArray();
  console.log('Class distribution in questionBank for Differential Equations:', classDist);

  const testIds = [
    '6a9e2845c527cd38431011bb',
    '6a9e288ac527cd384310133b',
    '6a9e288ac527cd384310133c'
  ];

  for (const tid of testIds) {
    const tp = await tPapers.findOne({ _id: new ObjectId(tid) });
    console.log(`\n================== Test Paper: "${tp.title || tp.name}" (${tid}) ==================`);
    console.log('Total questions:', tp.questions?.length);
    console.log('Subject:', tp.subject, 'Chapter:', tp.chapter, 'TotalMarks:', tp.totalMarks);

    if (tp.questions && tp.questions.length > 0) {
      const qIds = tp.questions.map(q => q.questionId || q._id || q);
      const docs = await qBank.find({ _id: { $in: qIds } }).toArray();
      const docMap = new Map(docs.map(d => [d._id.toString(), d]));

      const chapterCounts = {};
      let diffEqCount = 0;
      let foreignCount = 0;

      qIds.forEach(id => {
        const d = docMap.get(id.toString());
        if (d) {
          const ch = d.chapter || 'Unknown';
          chapterCounts[ch] = (chapterCounts[ch] || 0) + 1;
          if (ch === 'Differential Equations') diffEqCount++;
          else foreignCount++;
        } else {
          chapterCounts['MISSING_DOC'] = (chapterCounts['MISSING_DOC'] || 0) + 1;
          foreignCount++;
        }
      });

      console.log('Chapter distribution in test:', chapterCounts);
      console.log(`Differential Equations: ${diffEqCount}, Foreign/Missing: ${foreignCount}`);
    }
  }

  await client.close();
}

run().catch(console.error);
