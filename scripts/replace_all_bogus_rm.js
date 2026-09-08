const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const genuineRepairs = require('./repair_flawed_genuine_rm.js');
const part1 = require('./data_jee_rm_part1.js');
const part2 = require('./data_jee_rm_part2.js');
const part3 = require('./data_jee_rm_part3.js');
const part4 = require('./data_jee_rm_part4.js');
const part5 = require('./data_jee_rm_part5.js');
const part6 = require('./data_jee_rm_part6.js');
const part7 = require('./data_jee_rm_part7.js');
const part8 = require('./data_jee_rm_part8.js');

const CHAPTER = "Rotational Motion";
const SUBJECT = "Physics";

async function replaceAll() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas.');
    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    // 1. Fetch all questions in chapter
    const allQuestions = await qb.find({ chapter: CHAPTER, subject: SUBJECT }).toArray();
    console.log(`Total questions in "${CHAPTER}": ${allQuestions.length}`);

    const genuineDocs = allQuestions.filter(q => q.source === 'Question Bank');
    const generatorDocs = allQuestions.filter(q => q.source !== 'Question Bank');

    console.log(`Genuine questions: ${genuineDocs.length}`);
    console.log(`Generator questions: ${generatorDocs.length}`);

    if (generatorDocs.length !== 408) {
      throw new Error(`Expected 408 generator questions, found ${generatorDocs.length}`);
    }

    // Map replacement datasets
    const replacementsBySubtopic = {
      'Center of mass': [...part1],
      'Torque': [...part2],
      'Theorems of parallel and perpendicular axes': [...part3],
      'Angular momentum conservation': [...part4],
      'Moment of inertia': [...part5, ...part6, ...part7, ...part8]
    };

    // Prepare bulk updates for generator questions
    const bulkOps = [];
    const subtopics = Object.keys(replacementsBySubtopic);

    for (const sub of subtopics) {
      const subGenDocs = generatorDocs.filter(q => (q.subTopic || q.subtopic) === sub);
      const subReplacements = replacementsBySubtopic[sub];

      console.log(`Subtopic "${sub}": ${subGenDocs.length} generator docs, ${subReplacements.length} replacements`);
      if (subGenDocs.length !== subReplacements.length) {
        throw new Error(`Count mismatch in "${sub}": ${subGenDocs.length} vs ${subReplacements.length}`);
      }

      // Group both by type for 1-to-1 type preservation
      const genByType = { 'ASSERTION_REASON': [], 'MCQ': [], 'NUMERICAL': [] };
      subGenDocs.forEach(d => {
        const t = d.type || d.questionType;
        if (!genByType[t]) genByType[t] = [];
        genByType[t].push(d);
      });

      const repByType = { 'ASSERTION_REASON': [], 'MCQ': [], 'NUMERICAL': [] };
      subReplacements.forEach(r => {
        repByType[r.type].push(r);
      });

      for (const t of ['ASSERTION_REASON', 'MCQ', 'NUMERICAL']) {
        const genList = genByType[t] || [];
        const repList = repByType[t] || [];
        console.log(`  - Type ${t}: ${genList.length} docs vs ${repList.length} replacements`);
        if (genList.length !== repList.length) {
          throw new Error(`Type count mismatch in "${sub}" for ${t}: ${genList.length} vs ${repList.length}`);
        }

        for (let i = 0; i < genList.length; i++) {
          const targetDoc = genList[i];
          const newQ = repList[i];

          const updateFields = {
            question: newQ.question,
            options: newQ.options || [],
            correctAnswer: newQ.correctAnswer,
            explanation: newQ.explanation,
            type: newQ.type,
            questionType: newQ.type,
            marks: 4,
            negativeMarks: 1,
            chapter: CHAPTER,
            subject: SUBJECT,
            subTopic: sub,
            source: 'Question Bank' // upgrade source to genuine
          };

          bulkOps.push({
            updateOne: {
              filter: { _id: targetDoc._id },
              update: { $set: updateFields }
            }
          });
        }
      }
    }

    console.log(`Total generator updates prepared: ${bulkOps.length}`);

    // 2. Prepare genuine question standardizations & repairs
    const genuineOps = [];
    genuineDocs.forEach(q => {
      const idStr = q._id.toString();
      const updateFields = {
        marks: 4,
        negativeMarks: 1
      };

      if (genuineRepairs[idStr]) {
        const repair = genuineRepairs[idStr];
        updateFields.question = repair.question;
        updateFields.options = repair.options;
        updateFields.correctAnswer = repair.correctAnswer;
        updateFields.explanation = repair.explanation;
        console.log(`Applying surgical repair to genuine question ID: ${idStr}`);
      }

      genuineOps.push({
        updateOne: {
          filter: { _id: q._id },
          update: { $set: updateFields }
        }
      });
    });

    console.log(`Total genuine standardizations prepared: ${genuineOps.length}`);

    // Execute bulk updates
    console.log('\nExecuting bulkWrite for generator replacements...');
    const genResult = await qb.bulkWrite(bulkOps);
    console.log(`Generator bulkWrite completed: matched ${genResult.matchedCount}, modified ${genResult.modifiedCount}`);

    console.log('\nExecuting bulkWrite for genuine standardizations & repairs...');
    const genuineResult = await qb.bulkWrite(genuineOps);
    console.log(`Genuine bulkWrite completed: matched ${genuineResult.matchedCount}, modified ${genuineResult.modifiedCount}`);

    console.log('\n=== ALL DATABASE IN-PLACE UPDATES COMPLETED SUCCESSFULLY ===');

  } catch (err) {
    console.error('Error during replacement:', err);
  } finally {
    await client.close();
  }
}

replaceAll();
