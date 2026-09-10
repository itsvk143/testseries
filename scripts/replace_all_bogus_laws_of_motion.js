const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is not set!");
  process.exit(1);
}

const p1 = require('./data_jee_lom_part1.js');
const p2 = require('./data_jee_lom_part2.js');
const p3 = require('./data_jee_lom_connected_motion.js');
const p4 = require('./data_jee_lom_part4.js');
const p5 = require('./data_jee_lom_concurrent_forces.js');
const p6 = require('./data_jee_lom_impulse.js');
const p7 = require('./data_jee_lom_banking_of_roads.js');
const genuineRepairs = require('./repair_flawed_genuine_laws_of_motion.js');

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // Fetch all Physics Laws of Motion questions
  const allDocs = await qb.find({ subject: "Physics", chapter: "Laws of Motion" }).toArray();
  console.log(`Found ${allDocs.length} total questions for Physics Laws of Motion in DB.`);

  const genuine = allDocs.filter(d => d.source === "Question Bank");
  const bogus = allDocs.filter(d => d.source !== "Question Bank");
  console.log(`Genuine questions to preserve: ${genuine.length}, Bogus questions to replace: ${bogus.length}`);

  const subtopicConfigs = [
    { name: "Newton's laws", data: p1 },
    { name: "Friction", data: p2 },
    { name: "Connected motion and pulley problems", data: p3 },
    { name: "Conservation of momentum", data: p4 },
    { name: "Equilibrium of concurrent forces", data: p5 },
    { name: "Impulse", data: p6 },
    { name: "Banking of roads", data: p7 }
  ];

  let totalReplaced = 0;

  for (const config of subtopicConfigs) {
    console.log(`\nProcessing subtopic: "${config.name}"...`);
    const subtopicBogus = bogus.filter(d => (d.subTopic || d.subtopic) === config.name);
    console.log(`  Found ${subtopicBogus.length} bogus docs (expected ${config.data.length})`);

    const types = ["MCQ", "NUMERICAL", "ASSERTION_REASON"];
    for (const t of types) {
      const dbTypeBogus = subtopicBogus
        .filter(d => d.type === t)
        .sort((a, b) => a._id.toString().localeCompare(b._id.toString()));
      const replacementTypeData = config.data.filter(d => d.type === t);

      console.log(`  - Type [${t}]: ${dbTypeBogus.length} in DB vs ${replacementTypeData.length} in dataset`);
      if (dbTypeBogus.length !== replacementTypeData.length) {
        console.error(`ERROR: Count mismatch for ${config.name} type ${t}: ${dbTypeBogus.length} vs ${replacementTypeData.length}`);
        process.exit(1);
      }

      for (let i = 0; i < dbTypeBogus.length; i++) {
        const doc = dbTypeBogus[i];
        const rep = replacementTypeData[i];

        const updateFields = {
          question: rep.question,
          correctAnswer: rep.correctAnswer,
          type: rep.type,
          questionType: rep.type === "MCQ" ? "MCQ (Multiple Choice Question)" : (rep.type === "NUMERICAL" ? "Numerical" : "Assertion Reason"),
          subject: "Physics",
          chapter: "Laws of Motion",
          subtopic: config.name,
          subTopic: config.name,
          class: "Class 11",
          difficulty: rep.difficulty || "Medium",
          examType: "JEE Mains",
          marks: 4,
          negativeMarks: rep.type === "NUMERICAL" ? 0 : 1,
          source: "JEE Mains PYQ",
          updatedAt: new Date()
        };

        if (rep.options && rep.options.length > 0) {
          updateFields.options = rep.options;
        } else {
          updateFields.options = [];
        }

        if (rep.explanation) {
          updateFields.explanation = rep.explanation;
          updateFields.solution = rep.explanation;
        }

        await qb.updateOne({ _id: doc._id }, { $set: updateFields });
        totalReplaced++;
      }
    }
  }

  console.log(`\nSuccessfully replaced ${totalReplaced} bogus questions in-place!`);

  // Standardize genuine questions and apply surgical repairs
  console.log("\nStandardizing 91 genuine questions...");
  for (const g of genuine) {
    const idStr = g._id.toString();
    const update = {
      subTopic: g.subTopic || g.subtopic,
      subtopic: g.subtopic || g.subTopic,
      marks: 4,
      negativeMarks: 1,
      class: "Class 11",
      questionType: g.questionType || "MCQ (Multiple Choice Question)",
      type: "MCQ",
      updatedAt: new Date()
    };

    if (genuineRepairs[idStr]) {
      const rep = genuineRepairs[idStr];
      update.question = rep.question;
      update.options = rep.options;
      update.correctAnswer = rep.correctAnswer;
      update.explanation = rep.explanation;
      update.solution = rep.explanation;
      console.log(`  Applied surgical repair to question ${idStr}`);
    }

    await qb.updateOne({ _id: g._id }, { $set: update });
  }
  console.log("Standardized genuine questions.");

  // Reconstruct test papers
  console.log("\nReconstructing test papers referencing Laws of Motion...");
  const freshDocs = await qb.find({ subject: "Physics", chapter: "Laws of Motion" }).toArray();

  const bySubtopic = {};
  for (const cfg of subtopicConfigs) {
    const st = cfg.name;
    bySubtopic[st] = {
      mcq: freshDocs.filter(d => (d.subTopic || d.subtopic) === st && (d.type === "MCQ" || d.questionType === "MCQ")),
      ar: freshDocs.filter(d => (d.subTopic || d.subtopic) === st && (d.type === "ASSERTION_REASON" || d.questionType === "Assertion Reason")),
      num: freshDocs.filter(d => (d.subTopic || d.subtopic) === st && (d.type === "NUMERICAL" || d.questionType === "Numerical"))
    };
    console.log(`Subtopic [${st}]: MCQ=${bySubtopic[st].mcq.length}, AR=${bySubtopic[st].ar.length}, NUM=${bySubtopic[st].num.length}`);
  }

  // 1. JEE Main Chapter Test: 25 Qs (20 MCQ/AR + 5 NUMERICAL)
  const jeeChap = await tp.findOne({ testId: "jee-mains-CHAPTER-Physics-Laws-of-Motion-11" });
  if (jeeChap) {
    const selected = [];
    const stList = subtopicConfigs.map(c => c.name);
    // 20 Section A: 3 each from first 6 subtopics (18) + 2 from 7th (2) = 20
    for (let i = 0; i < stList.length; i++) {
      const st = stList[i];
      const targetCount = i < 6 ? 3 : 2;
      const mcqs = bySubtopic[st].mcq.slice(0, 2);
      const ars = bySubtopic[st].ar.slice(0, targetCount - mcqs.length);
      mcqs.forEach(q => selected.push(q._id.toString()));
      ars.forEach(q => selected.push(q._id.toString()));
    }
    // 5 Section B: 1 numerical from each of first 5 subtopics
    for (let i = 0; i < 5; i++) {
      selected.push(bySubtopic[stList[i]].num[0]._id.toString());
    }

    await tp.updateOne(
      { _id: jeeChap._id },
      {
        $set: {
          questions: selected,
          totalQuestions: selected.length,
          totalMarks: 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated JEE Chapter test: ${jeeChap.testId} with ${selected.length} questions (20 Section A + 5 Section B).`);
  }

  // 2. NEET Chapter Test: 45 Qs (MCQ/AR only, strictly NO numericals)
  const neetChap = await tp.findOne({ testId: "neet-CHAPTER-Physics-Laws-of-Motion-11" });
  if (neetChap) {
    const selected = [];
    const stList = subtopicConfigs.map(c => c.name);
    // 45 Qs across 7 subtopics: 6 from first 4 (24), 7 from next 3 (21) = 45
    for (let i = 0; i < stList.length; i++) {
      const st = stList[i];
      const targetCount = i < 4 ? 6 : 7;
      const mcqs = bySubtopic[st].mcq.slice(0, 4);
      const ars = bySubtopic[st].ar.slice(0, targetCount - mcqs.length);
      mcqs.forEach(q => selected.push(q._id.toString()));
      ars.forEach(q => selected.push(q._id.toString()));
    }

    await tp.updateOne(
      { _id: neetChap._id },
      {
        $set: {
          questions: selected,
          totalQuestions: selected.length,
          totalMarks: 180,
          duration: 45,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated NEET Chapter test: ${neetChap.testId} with ${selected.length} questions (strictly MCQ/AR).`);
  }

  // 3. JEE Mains Subtopic Tests: 25 Qs each (20 Section A + 5 Section B)
  const jeeSubtopicPatterns = [
    { pattern: /jee-mains-SUBTOPIC-Physics-Newton'?s-laws/i, st: "Newton's laws" },
    { pattern: /jee-mains-SUBTOPIC-Physics-impulse/i, st: "Impulse" },
    { pattern: /jee-mains-SUBTOPIC-Physics-conservation-of-momentum/i, st: "Conservation of momentum" },
    { pattern: /jee-mains-SUBTOPIC-Physics-friction/i, st: "Friction" },
    { pattern: /jee-mains-SUBTOPIC-Physics-banking-of-roads/i, st: "Banking of roads" }
  ];

  for (const item of jeeSubtopicPatterns) {
    const papers = await tp.find({ testId: item.pattern }).toArray();
    for (const paper of papers) {
      const selected = [];
      const pool = bySubtopic[item.st];
      // 15 MCQ + 5 AR = 20 Section A
      pool.mcq.slice(0, 15).forEach(q => selected.push(q._id.toString()));
      pool.ar.slice(0, 5).forEach(q => selected.push(q._id.toString()));
      // 5 NUM = 5 Section B
      pool.num.slice(0, 5).forEach(q => selected.push(q._id.toString()));

      await tp.updateOne(
        { _id: paper._id },
        {
          $set: {
            questions: selected,
            totalQuestions: selected.length,
            totalMarks: 100,
            duration: 60,
            updatedAt: new Date()
          }
        }
      );
      console.log(`Updated JEE subtopic test ${paper.testId} with ${selected.length} questions.`);
    }
  }

  // 4. NEET Subtopic Tests: 45 Qs each (all MCQ/AR, NO numerical)
  const neetSubtopicPatterns = [
    { pattern: /neet-SUBTOPIC-Physics-Newton'?s-laws/i, st: "Newton's laws" },
    { pattern: /neet-SUBTOPIC-Physics-impulse/i, st: "Impulse" },
    { pattern: /neet-SUBTOPIC-Physics-conservation-of-momentum/i, st: "Conservation of momentum" },
    { pattern: /neet-SUBTOPIC-Physics-friction/i, st: "Friction" },
    { pattern: /neet-SUBTOPIC-Physics-banking-of-roads/i, st: "Banking of roads" }
  ];

  for (const item of neetSubtopicPatterns) {
    const papers = await tp.find({ testId: item.pattern }).toArray();
    for (const paper of papers) {
      const selected = [];
      const pool = bySubtopic[item.st];
      const mcqs = pool.mcq;
      const ars = pool.ar;
      mcqs.forEach(q => selected.push(q._id.toString()));
      ars.forEach(q => selected.push(q._id.toString()));

      // If pool has less than 45, supplement from Connected motion or Equilibrium
      if (selected.length < 45) {
        const suppPool = bySubtopic["Connected motion and pulley problems"];
        for (const q of suppPool.mcq) {
          if (selected.length >= 45) break;
          if (!selected.includes(q._id.toString())) selected.push(q._id.toString());
        }
        for (const q of suppPool.ar) {
          if (selected.length >= 45) break;
          if (!selected.includes(q._id.toString())) selected.push(q._id.toString());
        }
      }

      await tp.updateOne(
        { _id: paper._id },
        {
          $set: {
            questions: selected.slice(0, 45),
            totalQuestions: 45,
            totalMarks: 180,
            duration: 45,
            updatedAt: new Date()
          }
        }
      );
      console.log(`Updated NEET subtopic test ${paper.testId} with 45 questions.`);
    }
  }

  console.log("\nAll replacements and test reconstructions completed successfully!");
  await client.close();
}

main().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
