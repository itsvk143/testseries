const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = "Current Electricity";
const SUBJECT = "Physics";

const partsConfig = [
  { file: 'data_jee_ce_part1.js', subtopic: 'Electrical energy and power' },
  { file: 'data_jee_ce_part2.js', subtopic: "Ohm's law" },
  { file: 'data_jee_ce_part3.js', subtopic: 'Wheatstone bridge' },
  { file: 'data_jee_ce_part4.js', subtopic: 'Internal resistance of a cell and EMF' },
  { file: 'data_jee_ce_part5.js', subtopic: 'Resistivity' },
  { file: 'data_jee_ce_part6.js', subtopic: "Kirchhoff's laws" },
  { file: 'data_jee_ce_part7.js', subtopic: 'Drift velocity and mobility' },
  { file: 'data_jee_ce_part8.js', subtopic: 'Meter bridge' }
];

const repairs = require('./repair_flawed_genuine_ce.js');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not defined in .env.local');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas successfully.');
    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    // 1. Fetch all Current Electricity questions
    const allQuestions = await qb.find({ chapter: CHAPTER, subject: SUBJECT }).toArray();
    console.log(`Total questions found in DB for "${CHAPTER}": ${allQuestions.length}`);

    const genuine = allQuestions.filter(q => q.source === 'Question Bank');
    const generator = allQuestions.filter(q => q.source !== 'Question Bank');

    console.log(`Genuine questions count: ${genuine.length}`);
    console.log(`Generator questions count: ${generator.length}`);

    if (generator.length !== 424) {
      console.warn(`WARNING: Expected 424 generator questions, found ${generator.length}`);
    }

    const bulkOps = [];

    // 2. Prepare updates for Generator Questions (424 items)
    let totalGeneratorUpdated = 0;
    for (const config of partsConfig) {
      const { file, subtopic } = config;
      const replacements = require(path.join(__dirname, file));

      // Get DB generator questions for this subtopic
      const dbSubtopicGen = generator.filter(q => q.subTopic === subtopic);
      console.log(`\nSubtopic "${subtopic}": ${dbSubtopicGen.length} generator questions in DB, ${replacements.length} replacements`);

      const dbAR = dbSubtopicGen.filter(q => q.type === 'ASSERTION_REASON');
      const dbMCQ = dbSubtopicGen.filter(q => q.type === 'MCQ');
      const dbNUM = dbSubtopicGen.filter(q => q.type === 'NUMERICAL');

      const repAR = replacements.filter(q => q.type === 'ASSERTION_REASON');
      const repMCQ = replacements.filter(q => q.type === 'MCQ');
      const repNUM = replacements.filter(q => q.type === 'NUMERICAL');

      console.log(`  AR: DB=${dbAR.length}, Rep=${repAR.length}`);
      console.log(`  MCQ: DB=${dbMCQ.length}, Rep=${repMCQ.length}`);
      console.log(`  NUM: DB=${dbNUM.length}, Rep=${repNUM.length}`);

      if (dbAR.length !== repAR.length || dbMCQ.length !== repMCQ.length || dbNUM.length !== repNUM.length) {
        throw new Error(`Type count mismatch in subtopic "${subtopic}"!`);
      }

      // Pair AR
      for (let i = 0; i < dbAR.length; i++) {
        const dbDoc = dbAR[i];
        const rep = repAR[i];
        bulkOps.push({
          updateOne: {
            filter: { _id: dbDoc._id },
            update: {
              $set: {
                question: rep.question,
                options: rep.options,
                correctAnswer: rep.correctAnswer,
                explanation: rep.explanation,
                type: rep.type,
                questionType: rep.questionType,
                subTopic: rep.subTopic,
                marks: 4,
                negativeMarks: 1,
                source: "JEE Main Question Bank",
                updatedAt: new Date()
              },
              $unset: {
                numericalAnswer: ""
              }
            }
          }
        });
        totalGeneratorUpdated++;
      }

      // Pair MCQ
      for (let i = 0; i < dbMCQ.length; i++) {
        const dbDoc = dbMCQ[i];
        const rep = repMCQ[i];
        bulkOps.push({
          updateOne: {
            filter: { _id: dbDoc._id },
            update: {
              $set: {
                question: rep.question,
                options: rep.options,
                correctAnswer: rep.correctAnswer,
                explanation: rep.explanation,
                type: rep.type,
                questionType: rep.questionType,
                subTopic: rep.subTopic,
                marks: 4,
                negativeMarks: 1,
                source: "JEE Main Question Bank",
                updatedAt: new Date()
              },
              $unset: {
                numericalAnswer: ""
              }
            }
          }
        });
        totalGeneratorUpdated++;
      }

      // Pair NUM
      for (let i = 0; i < dbNUM.length; i++) {
        const dbDoc = dbNUM[i];
        const rep = repNUM[i];
        bulkOps.push({
          updateOne: {
            filter: { _id: dbDoc._id },
            update: {
              $set: {
                question: rep.question,
                options: [],
                correctAnswer: rep.correctAnswer,
                numericalAnswer: rep.correctAnswer,
                explanation: rep.explanation,
                type: rep.type,
                questionType: rep.questionType,
                subTopic: rep.subTopic,
                marks: 4,
                negativeMarks: 1,
                source: "JEE Main Question Bank",
                updatedAt: new Date()
              }
            }
          }
        });
        totalGeneratorUpdated++;
      }
    }

    console.log(`\nPrepared in-place updates for ${totalGeneratorUpdated} generator questions.`);

    // 3. Prepare updates for Genuine Questions (106 items: standardize marks + repair 17 flawed)
    let genuineStandardized = 0;
    let genuineRepaired = 0;

    for (const gDoc of genuine) {
      const gIdStr = gDoc._id.toString();
      if (repairs[gIdStr]) {
        const rep = repairs[gIdStr];
        bulkOps.push({
          updateOne: {
            filter: { _id: gDoc._id },
            update: {
              $set: {
                question: rep.question,
                options: rep.options,
                correctAnswer: rep.correctAnswer,
                explanation: rep.explanation,
                marks: 4,
                negativeMarks: 1,
                updatedAt: new Date()
              }
            }
          }
        });
        genuineRepaired++;
      } else {
        bulkOps.push({
          updateOne: {
            filter: { _id: gDoc._id },
            update: {
              $set: {
                marks: 4,
                negativeMarks: 1,
                updatedAt: new Date()
              }
            }
          }
        });
      }
      genuineStandardized++;
    }

    console.log(`Prepared standardization for ${genuineStandardized} genuine questions (including ${genuineRepaired} surgical repairs).`);
    console.log(`Total bulk operations to execute: ${bulkOps.length}`);

    // 4. Execute bulkWrite
    console.log('\nExecuting bulkWrite on questionBank...');
    const result = await qb.bulkWrite(bulkOps, { ordered: false });
    console.log('bulkWrite completed!');
    console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);

    // 5. Verification
    const afterCount = await qb.countDocuments({ chapter: CHAPTER, subject: SUBJECT });
    console.log(`Total questions in DB after operation: ${afterCount} (Expected: ${allQuestions.length})`);

    console.log('\nAll replacements and repairs completed successfully!');

  } catch (err) {
    console.error('Error during execution:', err);
    process.exit(1);
  } finally {
    await client.close();
    console.log('MongoDB client closed.');
  }
}

main();
