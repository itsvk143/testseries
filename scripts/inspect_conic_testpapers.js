const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');
  const tPapers = db.collection('testPapers');

  const targetIds = [
    '6a9e2844c527cd38431011b5',
    '6a9e288ac527cd3843101340',
    '6a9e288bc527cd3843101341'
  ];

  for (const id of targetIds) {
    const tp = await tPapers.findOne({ _id: new ObjectId(id) });
    console.log(`\n================== Test Paper: ${tp.title || tp.name} (${id}) ==================`);
    console.log('Keys:', Object.keys(tp));
    console.log('Total questions:', tp.questions?.length);
    console.log('Test fields: examType=', tp.examType, 'subject=', tp.subject, 'totalMarks=', tp.totalMarks);

    if (tp.questions && tp.questions.length > 0) {
      const qIds = tp.questions.map(q => q.questionId || q._id || q);
      const docs = await qBank.find({ _id: { $in: qIds } }).toArray();
      const docMap = new Map(docs.map(d => [d._id.toString(), d]));

      let matchChapterCount = 0;
      let foreignCount = 0;
      const chaptersSeen = {};

      qIds.forEach((qid, idx) => {
        const d = docMap.get(qid.toString());
        if (d) {
          const ch = d.chapter || 'Unknown';
          chaptersSeen[ch] = (chaptersSeen[ch] || 0) + 1;
          if (ch === 'Conic Sections (Parabola, Ellipse, Hyperbola)') {
            matchChapterCount++;
          } else {
            foreignCount++;
          }
        } else {
          chaptersSeen['MISSING_DOC'] = (chaptersSeen['MISSING_DOC'] || 0) + 1;
          foreignCount++;
        }
      });

      console.log('Chapter distribution in test:', chaptersSeen);
      console.log(`Conic Sections: ${matchChapterCount}, Foreign/Missing: ${foreignCount}`);
    }
  }

  await client.close();
}

run().catch(console.error);
