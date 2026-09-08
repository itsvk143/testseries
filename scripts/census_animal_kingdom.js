require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function inspect() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // Check questions count in Animal Kingdom
  const count = await qb.countDocuments({ subject: 'Zoology', chapter: 'Animal Kingdom' });
  console.log('Total questions in Zoology -> Animal Kingdom:', count);

  // Subtopics breakdown
  const subtopics = await qb.aggregate([
    { $match: { subject: 'Zoology', chapter: 'Animal Kingdom' } },
    { $group: { _id: { subTopic: '$subTopic', type: '$type' }, count: { $sum: 1 } } },
    { $sort: { '_id.subTopic': 1, '_id.type': 1 } }
  ]).toArray();
  console.log('Subtopics and types breakdown:\n', JSON.stringify(subtopics, null, 2));

  // Check if any genuine questions exist vs bogus
  const bogusCount = await qb.countDocuments({
    subject: 'Zoology',
    chapter: 'Animal Kingdom',
    question: { $regex: /Consider the following functional characteristics|functional reserve capacity/i }
  });
  console.log('Bogus generator questions count:', bogusCount);

  // Sample questions
  const sample = await qb.find({ subject: 'Zoology', chapter: 'Animal Kingdom' }).limit(3).toArray();
  console.log('\nSample questions:');
  sample.forEach((s, idx) => {
    console.log('--- Q' + (idx+1) + ' ---');
    console.log('ID:', s._id);
    console.log('Type:', s.type);
    console.log('SubTopic:', s.subTopic);
    console.log('Question:', s.question);
    console.log('Options:', s.options);
    console.log('CorrectAnswer:', s.correctAnswer);
    console.log('Marks:', s.marks, 'NegMarks:', s.negativeMarks);
  });

  // Check test papers referencing Animal Kingdom
  const sampleIds = await qb.find({ subject: 'Zoology', chapter: 'Animal Kingdom' }, { projection: { _id: 1 } }).toArray();
  const allIds = sampleIds.map(x => x._id);
  const tests = await tp.find({ questions: { $in: allIds } }).toArray();
  console.log('\nTest papers referencing Animal Kingdom questions:', tests.length);
  tests.forEach(t => {
    const matchedCount = t.questions.filter(qid => allIds.some(aid => aid.equals(qid))).length;
    console.log('Test Title:', t.title, 'ID:', t._id, 'Matched questions:', matchedCount);
  });

  // Also search if any test paper has title containing Animal Kingdom
  const testsByTitle = await tp.find({ title: { $regex: /Animal Kingdom/i } }).toArray();
  console.log('\nTest papers with title matching Animal Kingdom:', testsByTitle.length);
  testsByTitle.forEach(t => {
    console.log('Title:', t.title, 'ID:', t._id, 'Total questions:', t.questions ? t.questions.length : 0);
  });

  await client.close();
}
inspect();
