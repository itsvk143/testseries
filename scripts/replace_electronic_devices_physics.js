const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is not set!");
  process.exit(1);
}

const p1 = require('./data/ed_subtopic1_logic_gates.js');
const p2 = require('./data/ed_subtopic2_diodes.js');
const p3 = require('./data/ed_subtopic3_pn_applications.js');
const p4 = require('./data/ed_subtopic4_energy_bands.js');
const p5 = require('./data/ed_subtopic5_semiconductors.js');
const p6 = require('./data/ed_subtopic6_solar_led_photo.js');

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // Fetch all Physics Electronic Devices questions
  const allDocs = await qb.find({ subject: "Physics", chapter: "Electronic Devices" }).toArray();
  console.log(`Found ${allDocs.length} total questions for Physics Electronic Devices in DB.`);

  const genuine = allDocs.filter(d => d.source === "Question Bank");
  const bogus = allDocs.filter(d => d.source !== "Question Bank");
  console.log(`Genuine questions to preserve: ${genuine.length}, Bogus questions to replace: ${bogus.length}`);

  const subtopicConfigs = [
    {
      name: "Logic gates",
      data: p1
    },
    {
      name: "Diodes",
      data: p2
    },
    {
      name: "p-n junction diode applications (rectifiers, Zener diode)",
      data: p3
    },
    {
      name: "Energy bands",
      data: p4
    },
    {
      name: "Intrinsic/extrinsic semiconductors",
      data: p5
    },
    {
      name: "Solar cell, photodiode, and LED",
      data: p6
    }
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
          chapter: "Electronic Devices",
          subtopic: config.name,
          subTopic: config.name,
          class: "Class 12",
          difficulty: rep.difficulty || "Medium",
          examType: "JEE Mains",
          marks: rep.marks || 4,
          negativeMarks: rep.negativeMarks !== undefined ? rep.negativeMarks : (rep.type === "NUMERICAL" ? 0 : 1),
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

  // Standardize genuine questions and fix known KaTeX issue in 6a98e572910bb37b0e558183
  console.log("\nStandardizing 61 genuine questions...");
  for (const g of genuine) {
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

    if (g._id.toString() === "6a98e572910bb37b0e558183") {
      const fixedExplanation = "The energy of a photon is given by $E = hf$, where $h$ is Planck's constant ($6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$) and $f$ is the frequency. We need to convert $E_g$ from eV to Joules ($1\\text{ eV} = 1.602 \\times 10^{-19}\\text{ J}$). So, $E_g = 1.5\\text{ eV} \\times 1.602 \\times 10^{-19}\\text{ J/eV} = 2.403 \\times 10^{-19}\\text{ J}$. Then, $f = \\frac{E_g}{h} = \\frac{2.403 \\times 10^{-19}\\text{ J}}{6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}} \\approx 3.63 \\times 10^{14}\\text{ Hz}$.";
      update.explanation = fixedExplanation;
      update.solution = fixedExplanation;
      console.log("  Fixed KaTeX glitch in question 6a98e572910bb37b0e558183");
    }

    await qb.updateOne({ _id: g._id }, { $set: update });
  }
  console.log("Standardized genuine questions.");

  // Reconstruct test papers
  console.log("\nReconstructing test papers referencing Electronic Devices...");
  const freshDocs = await qb.find({ subject: "Physics", chapter: "Electronic Devices" }).toArray();

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
  const jeeChap = await tp.findOne({ testId: "jee-mains-CHAPTER-Physics-Electronic-Devices-12" });
  if (jeeChap) {
    const selected = [];
    // 20 Section A: 3 each from first 4 subtopics (12) + 4 each from last 2 (8) = 20
    const stList = subtopicConfigs.map(c => c.name);
    for (let i = 0; i < stList.length; i++) {
      const st = stList[i];
      const targetCount = i < 4 ? 3 : 4;
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
  const neetChap = await tp.findOne({ testId: "neet-CHAPTER-Physics-Electronic-Devices-12" });
  if (neetChap) {
    const selected = [];
    const stList = subtopicConfigs.map(c => c.name);
    // 45 Qs across 6 subtopics: 7 from first 3, 8 from next 3 = 21 + 24 = 45
    for (let i = 0; i < stList.length; i++) {
      const st = stList[i];
      const targetCount = i < 3 ? 7 : 8;
      const mcqs = bySubtopic[st].mcq.slice(0, 5);
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
  const jeeSubtopicMap = [
    { testId: "jee-mains-SUBTOPIC-Physics-Energy-bands", st: "Energy bands" },
    { testId: "jee-mains-SUBTOPIC-Physics-intrinsic/extrinsic-semiconductors", st: "Intrinsic/extrinsic semiconductors" },
    { testId: "jee-mains-SUBTOPIC-Physics-diodes", st: "Diodes" },
    { testId: "jee-mains-SUBTOPIC-Physics-logic-gates", st: "Logic gates" }
  ];

  for (const item of jeeSubtopicMap) {
    const paper = await tp.findOne({ testId: item.testId });
    if (paper) {
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
      console.log(`Updated JEE subtopic test ${item.testId} with ${selected.length} questions.`);
    }
  }

  // 4. NEET Subtopic Tests: 45 Qs each (all MCQ/AR, NO numerical)
  const neetSubtopicMap = [
    { testId: "neet-SUBTOPIC-Physics-Energy-bands", st: "Energy bands" },
    { testId: "neet-SUBTOPIC-Physics-intrinsic/extrinsic-semiconductors", st: "Intrinsic/extrinsic semiconductors" },
    { testId: "neet-SUBTOPIC-Physics-diodes", st: "Diodes" },
    { testId: "neet-SUBTOPIC-Physics-logic-gates", st: "Logic gates" }
  ];

  for (const item of neetSubtopicMap) {
    const paper = await tp.findOne({ testId: item.testId });
    if (paper) {
      const selected = [];
      const pool = bySubtopic[item.st];
      // All available MCQ (up to ~17-18) + remaining AR to reach 45 (pool has 17-18 MCQ + 26 AR = 43-44. If needed, pull 1-2 from adjacent subtopic)
      const mcqs = pool.mcq;
      const ars = pool.ar;
      mcqs.forEach(q => selected.push(q._id.toString()));
      ars.forEach(q => selected.push(q._id.toString()));

      // If pool has less than 45, supplement from related subtopics (e.g. p-n junction diode applications or solar cell)
      if (selected.length < 45) {
        const suppPool = bySubtopic["p-n junction diode applications (rectifiers, Zener diode)"];
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
      console.log(`Updated NEET subtopic test ${item.testId} with 45 questions.`);
    }
  }

  console.log("\nAll replacements and test reconstructions completed successfully!");
  await client.close();
}

main().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
