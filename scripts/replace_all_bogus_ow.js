const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = "Oscillations and Waves";
const SUBJECT = "Physics";

const repairs = require('./repair_flawed_genuine_ow.js');

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

    // 1. Fetch all Oscillations and Waves questions
    const allQuestions = await qb.find({ chapter: CHAPTER, subject: SUBJECT }).toArray();
    console.log(`Total questions found in DB for "${CHAPTER}": ${allQuestions.length}`);

    const genuine = allQuestions.filter(q => q.source === 'Question Bank');
    const generator = allQuestions.filter(q => q.source !== 'Question Bank');

    console.log(`Genuine questions count: ${genuine.length}`);
    console.log(`Generator questions count: ${generator.length}`);

    if (generator.length !== 411) {
      throw new Error(`Expected 411 generator questions, found ${generator.length}`);
    }

    const bulkOps = [];

    // Subtopic mappings for 4 standard subtopics (each 53: 26 AR, 7 MCQ, 20 NUM)
    const stdSubtopics = [
      { file: 'data_jee_ow_part1.js', subtopic: 'Wave motion' },
      { file: 'data_jee_ow_part2.js', subtopic: 'Superposition of waves' },
      { file: 'data_jee_ow_part3.js', subtopic: 'Standing waves in strings and organ pipes' },
      { file: 'data_jee_ow_part4.js', subtopic: 'Beats' }
    ];

    let totalGeneratorUpdated = 0;

    for (const config of stdSubtopics) {
      const { file, subtopic } = config;
      const replacements = require(path.join(__dirname, file));

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
              $unset: { numericalAnswer: "" }
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
              $unset: { numericalAnswer: "" }
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

    // Handle Simple Harmonic Motion (SHM) - 199 generator items (26 AR, 7 MCQ, 166 NUM)
    const shmSubtopic = "Simple Harmonic Motion (SHM)";
    const dbSHMGen = generator.filter(q => q.subTopic === shmSubtopic);
    console.log(`\nSubtopic "${shmSubtopic}": ${dbSHMGen.length} generator questions in DB`);

    const dbSHM_AR = dbSHMGen.filter(q => q.type === 'ASSERTION_REASON');
    const dbSHM_MCQ = dbSHMGen.filter(q => q.type === 'MCQ');
    const dbSHM_NUM = dbSHMGen.filter(q => q.type === 'NUMERICAL');

    const part5 = require(path.join(__dirname, 'data_jee_ow_part5.js'));
    const part6 = require(path.join(__dirname, 'data_jee_ow_part6.js'));
    const part7 = require(path.join(__dirname, 'data_jee_ow_part7.js'));
    const part8 = require(path.join(__dirname, 'data_jee_ow_part8.js'));

    const repSHM_AR = part5.filter(q => q.type === 'ASSERTION_REASON');
    const repSHM_MCQ = part5.filter(q => q.type === 'MCQ');
    const repSHM_NUM = [
      ...part5.filter(q => q.type === 'NUMERICAL'),
      ...part6,
      ...part7,
      ...part8
    ];

    console.log(`  SHM AR: DB=${dbSHM_AR.length}, Rep=${repSHM_AR.length}`);
    console.log(`  SHM MCQ: DB=${dbSHM_MCQ.length}, Rep=${repSHM_MCQ.length}`);
    console.log(`  SHM NUM: DB=${dbSHM_NUM.length}, Rep=${repSHM_NUM.length}`);

    if (dbSHM_AR.length !== repSHM_AR.length || dbSHM_MCQ.length !== repSHM_MCQ.length || dbSHM_NUM.length !== repSHM_NUM.length) {
      throw new Error(`Type count mismatch in subtopic "${shmSubtopic}"!`);
    }

    // Pair SHM AR
    for (let i = 0; i < dbSHM_AR.length; i++) {
      const dbDoc = dbSHM_AR[i];
      const rep = repSHM_AR[i];
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
            $unset: { numericalAnswer: "" }
          }
        }
      });
      totalGeneratorUpdated++;
    }

    // Pair SHM MCQ
    for (let i = 0; i < dbSHM_MCQ.length; i++) {
      const dbDoc = dbSHM_MCQ[i];
      const rep = repSHM_MCQ[i];
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
            $unset: { numericalAnswer: "" }
          }
        }
      });
      totalGeneratorUpdated++;
    }

    // Pair SHM NUM
    for (let i = 0; i < dbSHM_NUM.length; i++) {
      const dbDoc = dbSHM_NUM[i];
      const rep = repSHM_NUM[i];
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

    console.log(`\nPrepared in-place updates for ${totalGeneratorUpdated} generator questions.`);

    // 4. Genuine questions updates (62 items: standardize marks + repair 1 flawed)
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

    console.log(`Prepared standardization for ${genuineStandardized} genuine questions (including ${genuineRepaired} repair).`);
    console.log(`Total bulk operations to execute: ${bulkOps.length}`);

    // 5. Execute bulkWrite
    console.log('\nExecuting bulkWrite on questionBank...');
    const result = await qb.bulkWrite(bulkOps, { ordered: false });
    console.log('bulkWrite completed!');
    console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);

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
