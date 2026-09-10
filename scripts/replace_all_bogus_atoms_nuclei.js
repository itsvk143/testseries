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

const part1 = require('./data_jee_atoms_part1.js');
const part2 = require('./data_jee_atoms_part2.js');
const part3 = require('./data_jee_atoms_part3.js');
const part4 = require('./data_jee_atoms_part4.js');
const part5 = require('./data_jee_atoms_part5.js');
const part6 = require('./data_jee_atoms_part6.js');
const part7 = require('./data_jee_atoms_part7.js');

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // Fetch all Physics Atoms and Nuclei questions
  const allDocs = await qb.find({ subject: "Physics", chapter: "Atoms and Nuclei" }).toArray();
  console.log(`Found ${allDocs.length} total questions for Physics Atoms and Nuclei in DB.`);

  const genuine = allDocs.filter(d => d.source === "Question Bank");
  const bogus = allDocs.filter(d => d.source !== "Question Bank");
  console.log(`Genuine questions to preserve: ${genuine.length}, Bogus questions to replace: ${bogus.length}`);

  // 1. Group bogus questions by subTopic / subtopic mapping
  const bogusP1 = bogus.filter(d => (d.subTopic || d.subtopic) === "Atomic models");
  const bogusP2 = bogus.filter(d => (d.subTopic || d.subtopic) === "Rutherford's scattering and Bohr's quantization");
  const bogusP3 = bogus.filter(d => (d.subTopic || d.subtopic) === "Hydrogen spectrum and Rydberg formula");
  const bogusP4 = bogus.filter(d => (d.subTopic || d.subtopic) === "Mass defect and nuclear force");
  const bogusP5 = bogus.filter(d => (d.subTopic || d.subtopic) === "Binding energy");
  const bogusP6 = bogus.filter(d => (d.subTopic || d.subtopic) === "Nuclear reactions");
  const bogusP7 = bogus.filter(d => (d.subTopic || d.subtopic) === "Nuclear fission and fusion");

  console.log(`Bogus by subtopic:
  - Atomic models: ${bogusP1.length} (expected ${part1.length})
  - Rutherford's scattering & Bohr: ${bogusP2.length} (expected ${part2.length})
  - Hydrogen spectrum & Rydberg: ${bogusP3.length} (expected ${part3.length})
  - Mass defect & nuclear force: ${bogusP4.length} (expected ${part4.length})
  - Binding energy: ${bogusP5.length} (expected ${part5.length})
  - Nuclear reactions: ${bogusP6.length} (expected ${part6.length})
  - Nuclear fission & fusion: ${bogusP7.length} (expected ${part7.length})`);

  const groups = [
    { name: "Atomic models", docs: bogusP1, data: part1 },
    { name: "Rutherford's scattering and Bohr's quantization", docs: bogusP2, data: part2 },
    { name: "Hydrogen spectrum and Rydberg formula", docs: bogusP3, data: part3 },
    { name: "Mass defect and nuclear force", docs: bogusP4, data: part4 },
    { name: "Binding energy", docs: bogusP5, data: part5 },
    { name: "Nuclear reactions", docs: bogusP6, data: part6 },
    { name: "Nuclear fission and fusion", docs: bogusP7, data: part7 }
  ];

  for (const g of groups) {
    if (g.docs.length !== g.data.length) {
      console.error(`Mismatch in ${g.name}: ${g.docs.length} docs vs ${g.data.length} data!`);
      process.exit(1);
    }
  }

  // 2. Perform in-place replacement of bogus questions
  let replacedCount = 0;
  for (const group of groups) {
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
        class: rep.class || "Class 12",
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

  // 3. Standardize genuine questions
  for (const g of genuine) {
    const update = {
      subTopic: g.subTopic || g.subtopic,
      subtopic: g.subtopic || g.subTopic,
      marks: 4,
      negativeMarks: 1,
      class: "Class 12",
      questionType: g.type || g.questionType || "MCQ",
      type: g.type || g.questionType || "MCQ"
    };
    await qb.updateOne({ _id: g._id }, { $set: update });
  }
  console.log(`Standardized ${genuine.length} genuine MCQs.`);

  // 4. Update Test Papers
  console.log("\nReconstructing test papers referencing Physics Atoms and Nuclei...");

  const freshDocs = await qb.find({ subject: "Physics", chapter: "Atoms and Nuclei" }).toArray();
  console.log(`Fresh docs count in DB: ${freshDocs.length}`);

  const subtopicsList = [
    "Atomic models",
    "Rutherford's scattering and Bohr's quantization",
    "Hydrogen spectrum and Rydberg formula",
    "Mass defect and nuclear force",
    "Binding energy",
    "Nuclear reactions",
    "Nuclear fission and fusion"
  ];

  const bySubtopic = {};
  subtopicsList.forEach(st => {
    bySubtopic[st] = {
      mcq: freshDocs.filter(d => (d.subTopic || d.subtopic) === st && (d.type === "MCQ" || d.questionType === "MCQ")),
      ar: freshDocs.filter(d => (d.subTopic || d.subtopic) === st && (d.type === "ASSERTION_REASON" || d.questionType === "ASSERTION_REASON")),
      num: freshDocs.filter(d => (d.subTopic || d.subtopic) === st && (d.type === "NUMERICAL" || d.questionType === "NUMERICAL"))
    };
    console.log(`Subtopic [${st}]: MCQ=${bySubtopic[st].mcq.length}, AR=${bySubtopic[st].ar.length}, NUM=${bySubtopic[st].num.length}`);
  });

  // 4a. JEE Mains Chapter Paper: 25 Qs (20 MCQ/AR + 5 NUM)
  const jeeChapPaper = await tp.findOne({ testId: "jee-mains-CHAPTER-Physics-Atoms-and-Nuclei-12" });
  if (jeeChapPaper) {
    const selected = [];
    // 20 MCQ/AR distributed across 7 subtopics (3 from first 6, 2 from last = 20)
    for (let i = 0; i < subtopicsList.length; i++) {
      const st = subtopicsList[i];
      const count = i < 6 ? 3 : 2;
      const mcqs = bySubtopic[st].mcq.slice(0, 2);
      const ars = bySubtopic[st].ar.slice(0, count - mcqs.length);
      mcqs.forEach(q => selected.push(q._id));
      ars.forEach(q => selected.push(q._id));
    }
    // 5 numericals (1 from each of the first 5 subtopics)
    for (let i = 0; i < 5; i++) {
      selected.push(bySubtopic[subtopicsList[i]].num[0]._id);
    }

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
    console.log(`Updated test paper: jee-mains-CHAPTER-Physics-Atoms-and-Nuclei-12 (${selected.length} Qs)`);
  }

  // 4b. JEE Subtopic Paper: Bohr's model (25 Qs: 10 MCQ + 10 AR + 5 NUM)
  const jeeBohrPaper = await tp.findOne({ testId: "jee-mains-SUBTOPIC-Physics-Bohr’s-model" });
  if (jeeBohrPaper) {
    const stBohr = "Rutherford's scattering and Bohr's quantization";
    const stAtom = "Atomic models";
    const selected = [
      ...bySubtopic[stBohr].mcq.slice(0, 5).map(q => q._id),
      ...bySubtopic[stAtom].mcq.slice(0, 5).map(q => q._id),
      ...bySubtopic[stBohr].ar.slice(0, 5).map(q => q._id),
      ...bySubtopic[stAtom].ar.slice(0, 5).map(q => q._id),
      ...bySubtopic[stBohr].num.slice(0, 3).map(q => q._id),
      ...bySubtopic[stAtom].num.slice(0, 2).map(q => q._id)
    ];

    await tp.updateOne(
      { _id: jeeBohrPaper._id },
      {
        $set: {
          questions: selected,
          totalMarks: 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated test paper: jee-mains-SUBTOPIC-Physics-Bohr’s-model (${selected.length} Qs)`);
  }

  // 4c. NEET Chapter Paper: 45 Qs (all MCQ/AR, 0 NUM)
  const neetChapPaper = await tp.findOne({ testId: "neet-CHAPTER-Physics-Atoms-and-Nuclei-12" });
  if (neetChapPaper) {
    const selected = [];
    // 30 MCQs across 7 subtopics (e.g. 5, 4, 4, 4, 4, 5, 4 = 30)
    const mcqCounts = [5, 4, 4, 4, 4, 5, 4];
    subtopicsList.forEach((st, i) => {
      selected.push(...bySubtopic[st].mcq.slice(0, mcqCounts[i]).map(q => q._id));
    });
    // 15 AR questions across 7 subtopics (2 each for first 6, 3 for last = 15)
    const arCounts = [2, 2, 2, 2, 2, 2, 3];
    subtopicsList.forEach((st, i) => {
      selected.push(...bySubtopic[st].ar.slice(0, arCounts[i]).map(q => q._id));
    });

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
    console.log(`Updated test paper: neet-CHAPTER-Physics-Atoms-and-Nuclei-12 (${selected.length} Qs)`);
  }

  // 4d. NEET Subtopic Paper: Bohr's model (45 Qs, 0 NUM)
  const neetBohrPaper = await tp.findOne({ testId: "neet-SUBTOPIC-Physics-Bohr’s-model" });
  if (neetBohrPaper) {
    const stBohr = "Rutherford's scattering and Bohr's quantization";
    const stAtom = "Atomic models";
    const nonNumBohr = [...bySubtopic[stBohr].mcq, ...bySubtopic[stBohr].ar];
    const nonNumAtom = [...bySubtopic[stAtom].mcq, ...bySubtopic[stAtom].ar];

    const selected = [
      ...nonNumBohr.slice(0, 25).map(q => q._id),
      ...nonNumAtom.slice(0, 20).map(q => q._id)
    ];

    await tp.updateOne(
      { _id: neetBohrPaper._id },
      {
        $set: {
          questions: selected,
          totalMarks: 180,
          duration: 45,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated test paper: neet-SUBTOPIC-Physics-Bohr’s-model (${selected.length} Qs)`);
  }

  await client.close();
  console.log("\nDatabase replacement operations completed successfully!");
}

main().catch(err => {
  console.error("Error executing database updates:", err);
  process.exit(1);
});
