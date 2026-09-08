const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function check() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const genSample = await db.collection('questionBank').findOne({ chapter: 'Current Electricity', subject: 'Physics', source: 'Question Bank' });
  console.log('Genuine question sample:');
  console.log('type:', genSample.type, 'questionType:', genSample.questionType, 'subTopic:', genSample.subTopic, 'marks:', genSample.marks, 'negativeMarks:', genSample.negativeMarks);

  const generatorSample = await db.collection('questionBank').findOne({ chapter: 'Current Electricity', subject: 'Physics', source: { $ne: 'Question Bank' } });
  console.log('Generator question sample:');
  console.log('type:', generatorSample.type, 'questionType:', generatorSample.questionType, 'subTopic:', generatorSample.subTopic, 'marks:', generatorSample.marks, 'negativeMarks:', generatorSample.negativeMarks);

  await client.close();
}
check();
