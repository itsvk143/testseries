/**
 * scripts/replace_all_bogus_organic_name_reactions.js
 * 
 * Replaces all 1,080 bogus templated questions for "Organic Name Reactions"
 * with authentic, high-quality JEE Mains / NCERT questions.
 * 
 * Updates:
 * 1. MongoDB collection 'questionBank' in-place across all 24 subtopics
 * 2. MongoDB collection 'testPapers' for JEE Main and NEET chapter tests
 * 3. src/data/organic_name_reactions_1080.json
 * 4. src/data/questionsjeem/chapter_chemistry.json
 * 5. src/data/questionsneet/chapter_chemistry.json
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const SUBTOPIC_ORDER = [
  "Aldol Condensation",
  "Cannizzaro Reaction",
  "Friedel-Crafts Alkylation",
  "Friedel-Crafts Acylation",
  "Reimer-Tiemann Reaction",
  "Kolbe's Reaction",
  "Williamson Ether Synthesis",
  "Sandmeyer Reaction",
  "Gattermann Reaction",
  "Fittig Reaction",
  "Wurtz Reaction",
  "Wurtz-Fittig Reaction",
  "Gabriel Phthalimide Synthesis",
  "Hoffmann Bromamide Degradation",
  "Rosenmund Reduction",
  "Clemmensen Reduction",
  "Wolff-Kishner Reduction",
  "Etard Reaction",
  "Stephen Reaction",
  "Hell-Volhard-Zelinsky (HVZ) Reaction",
  "Diazotization Reaction",
  "Coupling Reaction",
  "Carbylamine Reaction",
  "Haloform Reaction"
];

const OPTION_LETTERS = ['a', 'b', 'c', 'd'];

async function main() {
  console.log('=== STARTING ORGANIC NAME REACTIONS REPLACEMENT ===\n');

  // 1. Load all 4 groups of authentic questions
  const groupFiles = ['group1.json', 'group2.json', 'group3.json', 'group4.json'];
  const allGenuineQuestions = [];
  const questionsBySubtopic = {};

  for (const f of groupFiles) {
    const fPath = path.join(__dirname, 'name_reactions', f);
    if (!fs.existsSync(fPath)) {
      throw new Error(`Group file not found: ${fPath}`);
    }
    const data = JSON.parse(fs.readFileSync(fPath, 'utf8'));
    console.log(`Loaded ${data.length} questions from ${f}`);
    allGenuineQuestions.push(...data);
  }

  console.log(`\nTotal genuine questions loaded: ${allGenuineQuestions.length}`);

  for (const q of allGenuineQuestions) {
    const st = q.subTopic;
    if (!questionsBySubtopic[st]) {
      questionsBySubtopic[st] = [];
    }
    questionsBySubtopic[st].push(q);
  }

  console.log(`Subtopics loaded: ${Object.keys(questionsBySubtopic).length}`);
  for (const st of SUBTOPIC_ORDER) {
    const count = questionsBySubtopic[st]?.length || 0;
    console.log(`  "${st}": ${count} questions`);
    if (count !== 45) {
      throw new Error(`Subtopic "${st}" has ${count} questions (expected 45)!`);
    }
  }

  // 2. Build datasets for JSON files
  console.log('\n--- Building JSON datasets ---');
  const reactionsJsonMap = {};
  for (const st of SUBTOPIC_ORDER) {
    const qs = questionsBySubtopic[st];
    reactionsJsonMap[st] = qs.map((q, idx) => {
      const targetAns = q.correctAnswer;
      return {
        id: idx + 1,
        reaction: st,
        difficulty: q.difficulty || (idx < 10 ? 'Easy' : (idx < 35 ? 'Medium' : 'Hard')),
        question: q.question,
        options: q.options.map((optText, optIdx) => ({
          id: OPTION_LETTERS[optIdx],
          text: optText
        })),
        correctOption: OPTION_LETTERS[targetAns],
        explanation: q.explanation
      };
    });
  }

  // Write to src/data/organic_name_reactions_1080.json
  const file1080Path = path.join(process.cwd(), 'src/data/organic_name_reactions_1080.json');
  const data1080 = {
    Chemistry: {
      "Organic Name Reactions": reactionsJsonMap
    }
  };
  fs.writeFileSync(file1080Path, JSON.stringify(data1080, null, 2), 'utf8');
  console.log(`✅ Updated ${file1080Path}`);

  // Write to src/data/questionsjeem/chapter_chemistry.json
  const fileJeemPath = path.join(process.cwd(), 'src/data/questionsjeem/chapter_chemistry.json');
  const dataJeem = {
    "Organic Name Reactions": reactionsJsonMap
  };
  fs.writeFileSync(fileJeemPath, JSON.stringify(dataJeem, null, 2), 'utf8');
  console.log(`✅ Updated ${fileJeemPath}`);

  // Write to src/data/questionsneet/chapter_chemistry.json
  const fileNeetPath = path.join(process.cwd(), 'src/data/questionsneet/chapter_chemistry.json');
  fs.writeFileSync(fileNeetPath, JSON.stringify(dataJeem, null, 2), 'utf8');
  console.log(`✅ Updated ${fileNeetPath}`);

  // 3. Connect to MongoDB and perform in-place replacement
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Missing MONGODB_URI in environment!');
  }

  console.log('\n--- Connecting to MongoDB ---');
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const col = db.collection('questionBank');

  const bulkOps = [];
  const updatedDocIds = [];
  const testPaperSelectedIds = [];

  for (const st of SUBTOPIC_ORDER) {
    const bogusDocs = await col.find({
      chapter: 'Organic Name Reactions',
      subTopic: st
    }).sort({ _id: 1 }).toArray();

    const replacementQs = questionsBySubtopic[st];

    if (bogusDocs.length !== 45) {
      console.warn(`Warning: Found ${bogusDocs.length} bogus docs for "${st}" (expected 45)`);
    }

    bogusDocs.forEach((doc, idx) => {
      if (idx >= replacementQs.length) return;
      const q = replacementQs[idx];
      const targetAns = q.correctAnswer;
      const diff = q.difficulty || (idx < 10 ? 'Easy' : (idx < 35 ? 'Medium' : 'Hard'));

      bulkOps.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: {
              subject: 'Chemistry',
              class: 'Class 12',
              chapter: 'Organic Name Reactions',
              topic: 'Organic Name Reactions',
              subTopic: st,
              subtopic: st,
              questionType: 'MCQ (Multiple Choice Question)',
              type: 'MCQ',
              difficulty: diff,
              question: q.question,
              text: q.question,
              options: q.options,
              correctAnswer: targetAns,
              correctOption: targetAns,
              explanation: q.explanation,
              tags: ['Chemistry', 'Organic Chemistry', 'Organic Name Reactions', st],
              source: 'JEE Main PYQ 2015-2024 & NCERT Exemplar',
              status: 'Active',
              cognitiveLevel: q.cognitiveLevel || (diff === 'Hard' ? 'Analysis' : 'Application'),
              commercialReady: true,
              exam: 'JEE Main / NEET / BITSAT',
              idealTimeSeconds: 90,
              targetExams: ['JEE Main', 'NEET', 'BITSAT'],
              updatedAt: new Date()
            }
          }
        }
      });

      updatedDocIds.push(doc._id);

      // Select high-yield questions for the chapter test (one from each subtopic with rotating answer indices)
      const targetSubIdx = SUBTOPIC_ORDER.indexOf(st);
      if (idx === targetSubIdx) {
        testPaperSelectedIds.push(doc._id);
      } else if (st === 'Aldol Condensation' && idx === 25) {
        // Extra question for 25 total
        testPaperSelectedIds.push(doc._id);
      }
    });
  }

  console.log(`\nExecuting bulkWrite for ${bulkOps.length} updates in questionBank...`);
  const bulkResult = await col.bulkWrite(bulkOps);
  console.log(`✅ Bulk write completed: matched ${bulkResult.matchedCount}, modified ${bulkResult.modifiedCount}`);

  // 4. Update testPapers collection
  console.log('\n--- Updating testPapers ---');
  const testPapersCol = db.collection('testPapers');

  // Select exactly 25 questions for JEE Main chapter test
  const finalTestPaperIds = testPaperSelectedIds.slice(0, 25);
  console.log(`Selected ${finalTestPaperIds.length} authentic questions for JEE Main Chapter Test.`);

  await testPapersCol.updateOne(
    { testId: 'jee-mains-CHAPTER-Chemistry-Organic-Name-Reactions-12' },
    {
      $set: {
        title: 'JEE Main Chapter Test: Organic Name Reactions',
        subject: 'Chemistry',
        chapter: 'Organic Name Reactions',
        classGrade: 'Class 12',
        duration: 45,
        totalMarks: 100,
        questionsCount: finalTestPaperIds.length,
        questions: finalTestPaperIds,
        type: 'CHAPTER',
        exam: 'JEE Main',
        updatedAt: new Date()
      }
    },
    { upsert: true }
  );
  console.log('✅ Updated test paper: jee-mains-CHAPTER-Chemistry-Organic-Name-Reactions-12');

  // Update NEET chapter test with all updated genuine question IDs
  await testPapersCol.updateOne(
    { testId: 'neet-CHAPTER-Chemistry-Organic-Name-Reactions-12' },
    {
      $set: {
        title: 'NEET Chapter Test: Organic Name Reactions',
        subject: 'Chemistry',
        chapter: 'Organic Name Reactions',
        classGrade: 'Class 12',
        questionsCount: updatedDocIds.length,
        questions: updatedDocIds,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Updated test paper: neet-CHAPTER-Chemistry-Organic-Name-Reactions-12');

  await client.close();
  console.log('\n🎉 ALL REPLACEMENTS COMPLETED SUCCESSFULLY!');
}

main().catch(err => {
  console.error('Fatal error during replacement:', err);
  process.exit(1);
});
