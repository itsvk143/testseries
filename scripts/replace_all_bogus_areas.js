const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is not set!");
  process.exit(1);
}

const sub1 = require('./data_jee_areas_subtopic1.js');
const sub2 = require('./data_jee_areas_subtopic2.js');
const sub3 = require('./data_jee_areas_subtopic3.js');
const sub4 = require('./data_jee_areas_subtopic4.js');

const genuineRepairs = {
  "6a98e961910bb37b0e5587e1": {
    question: "Calculate the area of the region bounded by the curve $y = x^2 - 4$ and the $x$-axis.",
    options: ["16/3", "32/3", "64/3", "8"],
    correctAnswer: 1,
    explanation: "Setting $y = 0$ gives $x^2 - 4 = 0 \\implies x = \\pm 2$. Since the curve lies below the $x$-axis on $[-2, 2]$, the area is $\\int_{-2}^2 -(x^2 - 4)\\,dx = \\int_{-2}^2 (4 - x^2)\\,dx = 2\\left[4x - \\frac{x^3}{3}\\right]_0^2 = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}\\,\\text{sq units}$."
  },
  "6a98e961910bb37b0e5587dc": {
    question: "Find the area enclosed by the curve $y = x^3$, the $x$-axis, and the lines $x = -1$ and $x = 2$.",
    options: ["15/4", "13/4", "16/4", "17/4"],
    correctAnswer: 3,
    explanation: "Since $y = x^3$ changes sign at $x = 0$, the geometric area is given by $\\int_{-1}^0 (-x^3)\\,dx + \\int_0^2 x^3\\,dx = \\left[-\\frac{x^4}{4}\\right]_{-1}^0 + \\left[\\frac{x^4}{4}\\right]_0^2 = \\left(0 - \\left(-\\frac{1}{4}\\right)\\right) + \\left(\\frac{16}{4} - 0\\right) = \\frac{1}{4} + 4 = \\frac{17}{4}\\,\\text{sq units}$."
  },
  "6a98e961910bb37b0e5587dd": {
    question: "What is the area of the region bounded by the curve $y = 4 - x^2$ and the $x$-axis?",
    options: ["32/3", "16/3", "64/3", "8"],
    correctAnswer: 0,
    explanation: "Setting $y = 0$ gives $4 - x^2 = 0 \\implies x = \\pm 2$. Since $y \\ge 0$ on $[-2, 2]$, the area is $\\int_{-2}^2 (4 - x^2)\\,dx = 2\\left[4x - \\frac{x^3}{3}\\right]_0^2 = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}\\,\\text{sq units}$."
  }
};

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  const allDocs = await qb.find({ subject: /math/i, chapter: "Areas" }).toArray();
  console.log(`Found ${allDocs.length} total questions for Mathematics > Areas in DB.`);

  const genuine = allDocs.filter(d => d.source === "Question Bank");
  const bogus = allDocs.filter(d => d.source !== "Question Bank");
  console.log(`Genuine questions: ${genuine.length}, Bogus questions to replace: ${bogus.length}`);

  const subtopicConfigs = [
    { name: "Area under a curve", data: sub1 },
    { name: "Area between two curves", data: sub2 },
    { name: "Area bounded by parabolas, circles, and lines", data: sub3 },
    { name: "Symmetrical areas and piecewise integrations", data: sub4 }
  ];

  let totalReplaced = 0;

  for (const config of subtopicConfigs) {
    console.log(`\nProcessing subtopic: "${config.name}"...`);
    const subBogus = bogus
      .filter(d => (d.subTopic || d.subtopic) === config.name)
      .sort((a, b) => a._id.toString().localeCompare(b._id.toString()));

    console.log(`  Found ${subBogus.length} bogus docs (expected ${config.data.length})`);
    if (subBogus.length !== config.data.length) {
      console.error(`ERROR: Count mismatch for ${config.name}: ${subBogus.length} vs ${config.data.length}`);
      process.exit(1);
    }

    for (let i = 0; i < subBogus.length; i++) {
      const doc = subBogus[i];
      const rep = config.data[i];

      const updateFields = {
        question: rep.question,
        correctAnswer: rep.correctAnswer,
        type: rep.type,
        questionType: rep.type === "MCQ" ? "MCQ (Multiple Choice Question)" : (rep.type === "NUMERICAL" ? "Numerical" : "Assertion Reason"),
        subject: "Mathematics",
        chapter: "Areas",
        subtopic: config.name,
        subTopic: config.name,
        class: "Class 12",
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

  console.log(`\nSuccessfully replaced ${totalReplaced} bogus questions in-place!`);

  // Standardize genuine questions and apply repairs
  console.log("\nStandardizing 22 genuine questions...");
  for (const g of genuine) {
    const idStr = g._id.toString();
    const update = {
      subTopic: g.subTopic || g.subtopic,
      subtopic: g.subtopic || g.subTopic,
      marks: 4,
      negativeMarks: 1,
      class: "Class 12",
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

  // Reconstruct test paper: jee-mains-CHAPTER-Mathematics-Areas-12
  console.log("\nReconstructing test paper: jee-mains-CHAPTER-Mathematics-Areas-12...");
  const freshDocs = await qb.find({ subject: /math/i, chapter: "Areas" }).toArray();

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

  const jeeTest = await tp.findOne({ testId: "jee-mains-CHAPTER-Mathematics-Areas-12" });
  if (jeeTest) {
    const selected = [];
    const stList = subtopicConfigs.map(c => c.name);

    // Section A: 20 questions (5 from each subtopic: 3-4 MCQ + 1-2 AR)
    for (let i = 0; i < stList.length; i++) {
      const st = stList[i];
      const pool = bySubtopic[st];
      const mcqs = pool.mcq.slice(0, 4);
      const ars = pool.ar.slice(0, 5 - mcqs.length);
      mcqs.forEach(q => selected.push(q._id.toString()));
      ars.forEach(q => selected.push(q._id.toString()));
    }

    // Section B: 5 numericals (1 from sub 1, 1 from sub 2, 2 from sub 3, 1 from sub 4)
    selected.push(bySubtopic[stList[0]].num[0]._id.toString());
    selected.push(bySubtopic[stList[1]].num[0]._id.toString());
    selected.push(bySubtopic[stList[2]].num[0]._id.toString());
    selected.push(bySubtopic[stList[2]].num[1]._id.toString());
    selected.push(bySubtopic[stList[3]].num[0]._id.toString());

    await tp.updateOne(
      { _id: jeeTest._id },
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
    console.log(`Updated JEE Chapter test: ${jeeTest.testId} with ${selected.length} questions (20 Section A + 5 Section B).`);
  }

  console.log("\nAll replacements and test reconstructions completed successfully!");
  await client.close();
}

main().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
