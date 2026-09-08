const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = "Dual Nature of Matter and Radiation";
const SUBJECT = "Physics";

const repairs = require('./repair_flawed_genuine_dual_nature.js');

const part1 = require('./data_jee_dnmr_part1.js');
const part2 = require('./data_jee_dnmr_part2.js');
const part3 = require('./data_jee_dnmr_part3.js');
const part4 = require('./data_jee_dnmr_part4.js');
const part5 = require('./data_jee_dnmr_part5.js');
const part6 = require('./data_jee_dnmr_part6.js');
const part7 = require('./data_jee_dnmr_part7.js');
const part8 = require('./data_jee_dnmr_part8.js');

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

    // 1. Fetch all Dual Nature questions
    const allQuestions = await qb.find({ chapter: CHAPTER, subject: SUBJECT }).toArray();
    console.log(`Total questions found in DB for "${CHAPTER}": ${allQuestions.length}`);

    const genuine = allQuestions.filter(q => q.source === 'Question Bank');
    const generator = allQuestions.filter(q => q.source !== 'Question Bank');

    console.log(`Genuine questions count: ${genuine.length}`);
    console.log(`Generator questions count: ${generator.length}`);

    if (generator.length !== 401) {
      console.warn(`WARNING: Expected 401 generator questions, found ${generator.length}`);
    }

    const bulkOps = [];

    // 2. Prepare updates for Genuine Questions (51 items: standardize marks to 4/-1 and apply LaTeX repairs)
    let genuineRepairedCount = 0;
    for (const q of genuine) {
      const idStr = q._id.toString();
      const updateFields = {
        marks: 4,
        negativeMarks: 1
      };

      if (repairs[idStr]) {
        const rep = repairs[idStr];
        updateFields.question = rep.question;
        updateFields.options = rep.options;
        updateFields.correctAnswer = rep.correctAnswer;
        updateFields.explanation = rep.explanation;
        genuineRepairedCount++;
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: q._id },
          update: { $set: updateFields }
        }
      });
    }
    console.log(`Prepared updates for ${genuine.length} genuine questions (${genuineRepairedCount} LaTeX repaired, all marks standardized).`);

    // Helper to map replacements by type to preserve question type per ID
    function mapByType(dbList, replacementList, subtopicName) {
      const dbAR = dbList.filter(q => q.type === 'ASSERTION_REASON');
      const dbMCQ = dbList.filter(q => q.type === 'MCQ');
      const dbNUM = dbList.filter(q => q.type === 'NUMERICAL');

      const repAR = replacementList.filter(q => q.type === 'ASSERTION_REASON');
      const repMCQ = replacementList.filter(q => q.type === 'MCQ');
      const repNUM = replacementList.filter(q => q.type === 'NUMERICAL');

      console.log(`Subtopic "${subtopicName}":`);
      console.log(`  DB  -> AR: ${dbAR.length}, MCQ: ${dbMCQ.length}, NUM: ${dbNUM.length} (Total: ${dbList.length})`);
      console.log(`  Rep -> AR: ${repAR.length}, MCQ: ${repMCQ.length}, NUM: ${repNUM.length} (Total: ${replacementList.length})`);

      if (dbAR.length !== repAR.length || dbMCQ.length !== repMCQ.length || dbNUM.length !== repNUM.length) {
        throw new Error(`Mismatch in question types for subtopic "${subtopicName}"!`);
      }

      const pairs = [
        ...dbAR.map((doc, idx) => ({ doc, rep: repAR[idx] })),
        ...dbMCQ.map((doc, idx) => ({ doc, rep: repMCQ[idx] })),
        ...dbNUM.map((doc, idx) => ({ doc, rep: repNUM[idx] }))
      ];

      for (const { doc, rep } of pairs) {
        bulkOps.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: rep.question,
                options: rep.options || [],
                correctAnswer: rep.correctAnswer,
                explanation: rep.explanation,
                marks: rep.marks,
                negativeMarks: rep.negativeMarks,
                type: rep.type,
                subTopic: rep.subTopic,
                chapter: CHAPTER,
                subject: SUBJECT,
                source: "JEE Mains authentic",
                updatedAt: new Date()
              }
            }
          }
        });
      }
    }

    // 3. Subtopics 1 to 4
    mapByType(generator.filter(q => q.subTopic === "Bohr's model"), part1, "Bohr's model");
    mapByType(generator.filter(q => q.subTopic === "Einstein's photoelectric equation and work function"), part2, "Einstein's photoelectric equation and work function");
    mapByType(generator.filter(q => q.subTopic === "Wave-particle duality"), part3, "Wave-particle duality");
    mapByType(generator.filter(q => q.subTopic === "de Broglie wavelength"), part4, "de Broglie wavelength");

    // 4. Subtopic 5: Photoelectric effect (combine parts 5, 6, 7, 8)
    const combinedPhotoelectric = [...part5, ...part6, ...part7, ...part8];
    mapByType(generator.filter(q => q.subTopic === "Photoelectric effect"), combinedPhotoelectric, "Photoelectric effect");

    console.log(`\nTotal bulk operations queued: ${bulkOps.length}`);

    if (bulkOps.length !== 452) {
      throw new Error(`Expected exactly 452 bulk operations (51 genuine + 401 generator), but got ${bulkOps.length}`);
    }

    // 5. Execute bulkWrite
    console.log('\nExecuting bulkWrite to MongoDB Atlas...');
    const result = await qb.bulkWrite(bulkOps, { ordered: false });
    console.log(`Bulk write completed!`);
    console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);

  } catch (err) {
    console.error('Error during execution:', err);
    process.exit(1);
  } finally {
    await client.close();
    console.log('MongoDB connection closed.');
  }
}

main();
