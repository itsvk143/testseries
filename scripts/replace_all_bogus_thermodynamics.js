const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is not set!");
  process.exit(1);
}

const part1 = require('./data_jee_thermo_part1.js');
const part2 = require('./data_jee_thermo_part2.js');
const part3 = require('./data_jee_thermo_part3.js');
const part4 = require('./data_jee_thermo_part4.js');

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // Fetch all Physics Thermodynamics questions
  const allDocs = await qb.find({ subject: "Physics", chapter: "Thermodynamics" }).toArray();
  console.log(`Found ${allDocs.length} total questions for Physics Thermodynamics in DB.`);

  const genuine = allDocs.filter(d => d.source === "Question Bank");
  const bogus = allDocs.filter(d => d.source !== "Question Bank");
  console.log(`Genuine questions to preserve: ${genuine.length}, Bogus questions to replace: ${bogus.length}`);

  // 1. Group bogus questions by subTopic / subtopic mapping
  const bogusP1 = bogus.filter(d => {
    const st = d.subTopic || d.subtopic;
    return st === "Thermal equilibrium" || !st;
  });
  const bogusP2 = bogus.filter(d => (d.subTopic || d.subtopic) === "Work done in thermodynamic processes");
  const bogusP3 = bogus.filter(d => {
    const st = d.subTopic || d.subtopic;
    return st === "Laws of thermodynamics (zeroth, first, second)" || st === "First law of thermodynamics";
  });
  const bogusP4 = bogus.filter(d => {
    const st = d.subTopic || d.subtopic;
    return st === "Isothermal and adiabatic processes" || st === "Adiabatic and isothermal processes";
  });

  console.log(`Bogus by subtopic:
  - Thermal equilibrium: ${bogusP1.length} (expected ${part1.length})
  - Work done in thermodynamic processes: ${bogusP2.length} (expected ${part2.length})
  - Laws of thermodynamics: ${bogusP3.length} (expected ${part3.length})
  - Isothermal & adiabatic: ${bogusP4.length} (expected ${part4.length})`);

  if (bogusP1.length !== part1.length || bogusP2.length !== part2.length ||
      bogusP3.length !== part3.length || bogusP4.length !== part4.length) {
    console.error("Mismatch between bogus question count and replacement datasets!");
    process.exit(1);
  }

  // 2. Perform in-place replacement of bogus questions
  const replacements = [
    { docs: bogusP1, data: part1 },
    { docs: bogusP2, data: part2 },
    { docs: bogusP3, data: part3 },
    { docs: bogusP4, data: part4 }
  ];

  let replacedCount = 0;
  for (const group of replacements) {
    for (let i = 0; i < group.docs.length; i++) {
      const doc = group.docs[i];
      const rep = group.data[i];

      const updateFields = {
        question: rep.question,
        correctAnswer: rep.correctAnswer,
        type: rep.type,
        questionType: rep.type,
        subject: rep.subject,
        chapter: rep.chapter,
        subtopic: rep.subtopic || rep.subTopic,
        subTopic: rep.subTopic || rep.subtopic,
        class: rep.class || "Class 11",
        difficulty: rep.difficulty || "medium",
        examType: rep.examType || "JEE Mains",
        marks: rep.marks || 4,
        negativeMarks: rep.negativeMarks !== undefined ? rep.negativeMarks : (rep.type === "NUMERICAL" ? 0 : 1),
        source: "JEE Mains PYQ",
        updatedAt: new Date()
      };

      if (rep.options) {
        updateFields.options = rep.options;
      } else {
        updateFields.options = null;
      }

      if (rep.explanation) {
        updateFields.explanation = rep.explanation;
        updateFields.solution = rep.explanation;
      } else if (rep.solution) {
        updateFields.solution = rep.solution;
        updateFields.explanation = rep.solution;
      }

      await qb.updateOne({ _id: doc._id }, { $set: updateFields });
      replacedCount++;
    }
  }
  console.log(`Successfully updated ${replacedCount} bogus questions in-place.`);

  // 3. Fix KaTeX errors & normalize subtopics in preserved genuine questions
  let genuineFixed = 0;
  for (const g of genuine) {
    const idStr = g._id.toString();
    const update = {};

    // KaTeX fix 1: 6a98fa01b89acd4c6047d0eb
    if (idStr === "6a98fa01b89acd4c6047d0eb") {
      let qStr = g.question.replace(/\\text\{\s*J\/mol[·\u00b7]K\s*\}/g, "\\text{ J/(mol}\\cdot\\text{K)}");
      let solStr = (g.solution || g.explanation || "").replace(/\\text\{\s*J\/mol[·\u00b7]K\s*\}/g, "\\text{ J/(mol}\\cdot\\text{K)}");
      update.question = qStr;
      update.solution = solStr;
      update.explanation = solStr;
      console.log(`Fixed KaTeX in genuine MCQ ${idStr}`);
      genuineFixed++;
    }

    // KaTeX fix 2: 6a98fa01b89acd4c6047d0e9
    if (idStr === "6a98fa01b89acd4c6047d0e9") {
      let qStr = g.question.replace(/\\text\{\s*L\s*\\cdot\s*atm\s*\}/g, "\\text{L}\\cdot\\text{atm}");
      let solStr = (g.solution || g.explanation || "").replace(/\\text\{\s*L\s*\\cdot\s*atm\s*\}/g, "\\text{L}\\cdot\\text{atm}");
      let optArr = (g.options || []).map(o => o.replace(/\\text\{\s*L\s*\\cdot\s*atm\s*\}/g, "\\text{L}\\cdot\\text{atm}"));
      update.question = qStr;
      update.solution = solStr;
      update.explanation = solStr;
      update.options = optArr;
      console.log(`Fixed KaTeX in genuine MCQ ${idStr}`);
      genuineFixed++;
    }

    // KaTeX fix 3: 6a98e400910bb37b0e557fc1
    if (idStr === "6a98e400910bb37b0e557fc1") {
      let solStr = (g.solution || g.explanation || "").replace(/P_1 V_1\^\{/g, "P_1 V_1^\\gamma");
      if (!solStr.includes("P_1 V_1^\\gamma = (8P_1)")) {
        solStr = "For an adiabatic process: $P_1 V_1^\\gamma = P_2 V_2^\\gamma = (8P_1)\\left(\\frac{V_1}{2}\\right)^\\gamma \\implies 2^\\gamma = 8 = 2^3 \\implies \\gamma = 3$.";
      }
      update.solution = solStr;
      update.explanation = solStr;
      console.log(`Fixed KaTeX in genuine MCQ ${idStr}`);
      genuineFixed++;
    }

    // Normalize subtopic names if needed
    const currentSub = g.subTopic || g.subtopic;
    if (currentSub === "First law of thermodynamics") {
      update.subTopic = "Laws of thermodynamics (zeroth, first, second)";
      update.subtopic = "Laws of thermodynamics (zeroth, first, second)";
    } else if (currentSub === "Adiabatic and isothermal processes") {
      update.subTopic = "Isothermal and adiabatic processes";
      update.subtopic = "Isothermal and adiabatic processes";
    }

    // Standardize marks
    update.marks = 4;
    update.negativeMarks = 1;
    update.questionType = g.type || "MCQ";
    update.subtopic = update.subTopic || g.subTopic || g.subtopic;

    if (Object.keys(update).length > 0) {
      await qb.updateOne({ _id: g._id }, { $set: update });
    }
  }
  console.log(`Genuine MCQs processed and updated (${genuineFixed} KaTeX fixes applied).`);

  // 4. Update Test Papers
  console.log("\nReconstructing test papers referencing Physics Thermodynamics...");

  // Reload all questions for Physics Thermodynamics
  const freshDocs = await qb.find({ subject: "Physics", chapter: "Thermodynamics" }).toArray();
  console.log(`Fresh docs count in DB: ${freshDocs.length}`);

  // Categorize by subtopic and type
  const bySubtopic = {};
  const subtopicsList = [
    "Thermal equilibrium",
    "Work done in thermodynamic processes",
    "Laws of thermodynamics (zeroth, first, second)",
    "Isothermal and adiabatic processes"
  ];

  subtopicsList.forEach(st => {
    bySubtopic[st] = {
      mcq: freshDocs.filter(d => (d.subTopic || d.subtopic) === st && (d.type === "MCQ" || d.questionType === "MCQ")),
      ar: freshDocs.filter(d => (d.subTopic || d.subtopic) === st && (d.type === "ASSERTION_REASON" || d.questionType === "ASSERTION_REASON")),
      num: freshDocs.filter(d => (d.subTopic || d.subtopic) === st && (d.type === "NUMERICAL" || d.questionType === "NUMERICAL"))
    };
    console.log(`Subtopic [${st}]: MCQ=${bySubtopic[st].mcq.length}, AR=${bySubtopic[st].ar.length}, NUM=${bySubtopic[st].num.length}`);
  });

  // 4a. JEE Mains Chapter Paper: 25 Qs (20 MCQ/AR + 5 NUM)
  const jeeChapPaper = await tp.findOne({ testId: "jee-mains-CHAPTER-Physics-Thermodynamics-11" });
  if (jeeChapPaper) {
    const selected = [];
    // 5 questions from each of the 4 subtopics (3 MCQ + 2 AR)
    subtopicsList.forEach(st => {
      const mcqs = bySubtopic[st].mcq.slice(0, 3);
      const ars = bySubtopic[st].ar.slice(0, 2);
      mcqs.forEach(q => selected.push(q._id));
      ars.forEach(q => selected.push(q._id));
    });
    // 5 numerical questions (1 from P1, 1 from P2, 1 from P3, 2 from P4)
    selected.push(bySubtopic["Thermal equilibrium"].num[0]._id);
    selected.push(bySubtopic["Work done in thermodynamic processes"].num[0]._id);
    selected.push(bySubtopic["Laws of thermodynamics (zeroth, first, second)"].num[0]._id);
    selected.push(bySubtopic["Isothermal and adiabatic processes"].num[0]._id);
    selected.push(bySubtopic["Isothermal and adiabatic processes"].num[1]._id);

    await tp.updateOne(
      { _id: jeeChapPaper._id },
      {
        $set: {
          questions: selected,
          totalMarks: 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated test paper: jee-mains-CHAPTER-Physics-Thermodynamics-11 (${selected.length} Qs)`);
  }

  // 4b. JEE Subtopic Papers (25 Qs: 10 MCQ + 10 AR + 5 NUM)
  const jeeSubConfigs = [
    { testId: "jee-mains-SUBTOPIC-Physics-Thermal-equilibrium", sub: "Thermal equilibrium" },
    { testId: "jee-mains-SUBTOPIC-Physics-laws-of-thermodynamics", sub: "Laws of thermodynamics (zeroth, first, second)" },
    { testId: "jee-mains-SUBTOPIC-Physics-isothermal-and-adiabatic-processes", sub: "Isothermal and adiabatic processes" }
  ];

  for (const cfg of jeeSubConfigs) {
    const paper = await tp.findOne({ testId: cfg.testId });
    if (paper) {
      const mcqs = bySubtopic[cfg.sub].mcq.slice(0, 10);
      const ars = bySubtopic[cfg.sub].ar.slice(0, 10);
      const nums = bySubtopic[cfg.sub].num.slice(0, 5);

      const selected = [
        ...mcqs.map(q => q._id),
        ...ars.map(q => q._id),
        ...nums.map(q => q._id)
      ];

      await tp.updateOne(
        { _id: paper._id },
        {
          $set: {
            questions: selected,
            totalMarks: selected.length * 4,
            duration: 60,
            updatedAt: new Date()
          }
        }
      );
      console.log(`Updated test paper: ${cfg.testId} (${selected.length} Qs)`);
    }
  }

  // 4c. NEET Chapter Paper: 45 Qs (30 MCQ + 15 AR, 0 NUM)
  const neetChapPaper = await tp.findOne({ testId: "neet-CHAPTER-Physics-Thermodynamics-11" });
  if (neetChapPaper) {
    const selected = [];
    // 30 MCQs distributed across 4 subtopics (8, 7, 8, 7)
    selected.push(...bySubtopic["Thermal equilibrium"].mcq.slice(0, 8).map(q => q._id));
    selected.push(...bySubtopic["Work done in thermodynamic processes"].mcq.slice(0, 7).map(q => q._id));
    selected.push(...bySubtopic["Laws of thermodynamics (zeroth, first, second)"].mcq.slice(0, 8).map(q => q._id));
    selected.push(...bySubtopic["Isothermal and adiabatic processes"].mcq.slice(0, 7).map(q => q._id));
    // 15 AR questions distributed across 4 subtopics (4, 4, 4, 3)
    selected.push(...bySubtopic["Thermal equilibrium"].ar.slice(0, 4).map(q => q._id));
    selected.push(...bySubtopic["Work done in thermodynamic processes"].ar.slice(0, 4).map(q => q._id));
    selected.push(...bySubtopic["Laws of thermodynamics (zeroth, first, second)"].ar.slice(0, 4).map(q => q._id));
    selected.push(...bySubtopic["Isothermal and adiabatic processes"].ar.slice(0, 3).map(q => q._id));

    await tp.updateOne(
      { _id: neetChapPaper._id },
      {
        $set: {
          questions: selected,
          totalMarks: 180,
          duration: 45,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated test paper: neet-CHAPTER-Physics-Thermodynamics-11 (${selected.length} Qs)`);
  }

  // 4d. NEET Subtopic Papers (MCQ + AR, 0 NUM)
  const neetSubConfigs = [
    { testId: "neet-SUBTOPIC-Physics-Thermal-equilibrium", sub: "Thermal equilibrium", target: 43 },
    { testId: "neet-SUBTOPIC-Physics-laws-of-thermodynamics", sub: "Laws of thermodynamics (zeroth, first, second)", target: 45 },
    { testId: "neet-SUBTOPIC-Physics-isothermal-and-adiabatic-processes", sub: "Isothermal and adiabatic processes", target: 45 }
  ];

  for (const cfg of neetSubConfigs) {
    const paper = await tp.findOne({ testId: cfg.testId });
    if (paper) {
      const allNonNum = [
        ...bySubtopic[cfg.sub].mcq,
        ...bySubtopic[cfg.sub].ar
      ];
      const selected = allNonNum.slice(0, cfg.target).map(q => q._id);

      await tp.updateOne(
        { _id: paper._id },
        {
          $set: {
            questions: selected,
            totalMarks: selected.length * 4,
            duration: 45,
            updatedAt: new Date()
          }
        }
      );
      console.log(`Updated test paper: ${cfg.testId} (${selected.length} Qs)`);
    }
  }

  await client.close();
  console.log("\nDatabase operations completed successfully!");
}

main().catch(err => {
  console.error("Error executing database updates:", err);
  process.exit(1);
});
