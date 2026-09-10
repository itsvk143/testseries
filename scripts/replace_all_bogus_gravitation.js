require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

const part1 = require('./data_jee_grav_part1.js'); // 53
const part2 = require('./data_jee_grav_part2.js'); // 53
const part3 = require('./data_jee_grav_part3.js'); // 53
const part4 = require('./data_jee_grav_part4.js'); // 53
const part5 = require('./data_jee_grav_part5.js'); // 53
const part6 = require('./data_jee_grav_part6.js'); // 53

const subtopicData = {
  "Newton's law of gravitation": part1,
  "Gravitational potential energy": part2,
  "Kepler's laws": part3,
  "Escape velocity": part4,
  "Acceleration due to gravity (variation with height, depth, latitude)": part5,
  "Orbital velocity and satellite motion": part6
};

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not defined");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB for Gravitation Replacement");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // 1. Audit before replacement
  const totalInDb = await qb.countDocuments({ chapter: "Gravitation" });
  console.log(`Total questions in DB under Gravitation: ${totalInDb}`);

  const genuineMCQs = await qb.find({ chapter: "Gravitation", source: "Question Bank" }).toArray();
  console.log(`Genuine MCQs count: ${genuineMCQs.length}`);

  // 2. Perform in-place replacement for each of the 6 subtopics
  for (const [subtopicName, newDataList] of Object.entries(subtopicData)) {
    console.log(`\n--- Replacing for subtopic: ${subtopicName} ---`);
    // Find bogus questions for this subtopic (source is not "Question Bank")
    const bogusDocs = await qb.find({
      chapter: "Gravitation",
      subTopic: subtopicName,
      source: { $ne: "Question Bank" }
    }).sort({ type: 1, _id: 1 }).toArray();

    console.log(`Found ${bogusDocs.length} bogus documents to replace. New questions prepared: ${newDataList.length}`);

    if (bogusDocs.length !== newDataList.length) {
      console.warn(`WARNING: Count mismatch in ${subtopicName}! Bogus: ${bogusDocs.length}, New: ${newDataList.length}`);
    }

    const countToReplace = Math.min(bogusDocs.length, newDataList.length);
    let replacedCount = 0;

    for (let i = 0; i < countToReplace; i++) {
      const doc = bogusDocs[i];
      const newQ = newDataList[i];

      const updateFields = {
        question: newQ.question,
        explanation: newQ.explanation,
        difficulty: newQ.difficulty || "medium",
        examType: newQ.examType || "JEE Mains",
        subTopic: subtopicName,
        chapter: "Gravitation",
        subject: "Physics",
        type: newQ.type,
        updatedAt: new Date()
      };

      if (newQ.type === 'NUMERICAL') {
        updateFields.marks = 4;
        updateFields.negativeMarks = 0;
        updateFields.correctAnswer = String(newQ.correctAnswer);
        updateFields.options = [];
        await qb.updateOne(
          { _id: doc._id },
          {
            $set: updateFields,
            $unset: { correctOptionIndex: "" }
          }
        );
      } else {
        updateFields.marks = 4;
        updateFields.negativeMarks = 1;
        updateFields.options = newQ.options;
        updateFields.correctOptionIndex = Number(newQ.correctOptionIndex);
        await qb.updateOne(
          { _id: doc._id },
          {
            $set: updateFields,
            $unset: { correctAnswer: "" }
          }
        );
      }
      replacedCount++;
    }
    console.log(`Successfully replaced ${replacedCount} questions in ${subtopicName}`);
  }

  // 3. Fix KaTeX errors and standardize the 62 genuine MCQs
  console.log("\n--- Fixing KaTeX errors & standardizing genuine MCQs ---");
  for (const doc of genuineMCQs) {
    const updateFields = {
      type: "MCQ",
      marks: 4,
      negativeMarks: 1
    };

    if (doc.correctOptionIndex === undefined || doc.correctOptionIndex === null) {
      if (doc.correctAnswer !== undefined && doc.correctAnswer !== null) {
        updateFields.correctOptionIndex = Number(doc.correctAnswer);
      }
    }

    // Fix unbalanced braces: replace }}} with }} in explanation if present
    if (doc.explanation && doc.explanation.includes("}}}")) {
      updateFields.explanation = doc.explanation.replace(/}}}/g, "}}");
      console.log(`Fixed unbalanced braces in doc ${doc._id}`);
    }

    await qb.updateOne(
      { _id: doc._id },
      { $set: updateFields }
    );
  }
  console.log("Standardized all 62 genuine MCQs");

  // 4. Update Test Papers
  console.log("\n--- Updating Test Papers ---");
  const subtopics = [
    "Newton's law of gravitation",
    "Gravitational potential energy",
    "Kepler's laws",
    "Escape velocity",
    "Acceleration due to gravity (variation with height, depth, latitude)",
    "Orbital velocity and satellite motion"
  ];

  // Reconstruct jee-mains-CHAPTER-Physics-Gravitation-11
  // 20 MCQs: 4 from subtopics 0, 1; 3 from subtopics 2, 3, 4, 5 (4+4+3+3+3+3 = 20)
  // 5 Numericals: 1 from subtopics 0, 1, 2, 3, 4 (total 5)
  const chapterMcqIds = [];
  const chapterNumIds = [];

  for (let i = 0; i < subtopics.length; i++) {
    const st = subtopics[i];
    const mcqLimit = (i < 2) ? 4 : 3;
    const mcqs = await qb.find({ chapter: "Gravitation", subTopic: st, type: "MCQ" }).limit(mcqLimit).toArray();
    chapterMcqIds.push(...mcqs.map(q => q._id));

    if (i < 5) {
      const nums = await qb.find({ chapter: "Gravitation", subTopic: st, type: "NUMERICAL" }).limit(1).toArray();
      chapterNumIds.push(...nums.map(q => q._id));
    }
  }

  const jeeChapterQIds = [...chapterMcqIds, ...chapterNumIds];
  console.log(`Selected ${jeeChapterQIds.length} questions for JEE Main chapter test (MCQ: ${chapterMcqIds.length}, NUM: ${chapterNumIds.length})`);

  await tp.updateOne(
    { testId: "jee-mains-CHAPTER-Physics-Gravitation-11" },
    {
      $set: {
        questions: jeeChapterQIds,
        totalQuestions: jeeChapterQIds.length,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log("Updated jee-mains-CHAPTER-Physics-Gravitation-11");

  // Update JEE Main subtopic tests (25 Qs each: 10 MCQ, 10 AR, 5 NUM)
  const jeeSubtopicMappings = [
    { testId: "jee-mains-SUBTOPIC-Physics-Newton’s-law-of-gravitation", subTopic: "Newton's law of gravitation" },
    { testId: "jee-mains-SUBTOPIC-Physics-gravitational-potential-energy", subTopic: "Gravitational potential energy" },
    { testId: "jee-mains-SUBTOPIC-Physics-Kepler's-laws", subTopic: "Kepler's laws" },
    { testId: "jee-mains-SUBTOPIC-Physics-escape-velocity", subTopic: "Escape velocity" }
  ];

  for (const mapping of jeeSubtopicMappings) {
    const mcqs = await qb.find({ chapter: "Gravitation", subTopic: mapping.subTopic, type: "MCQ" }).limit(10).toArray();
    const ars = await qb.find({ chapter: "Gravitation", subTopic: mapping.subTopic, type: "ASSERTION_REASON" }).limit(10).toArray();
    const nums = await qb.find({ chapter: "Gravitation", subTopic: mapping.subTopic, type: "NUMERICAL" }).limit(5).toArray();

    const qIds = [...mcqs.map(q => q._id), ...ars.map(q => q._id), ...nums.map(q => q._id)];
    await tp.updateOne(
      { testId: mapping.testId },
      {
        $set: {
          questions: qIds,
          totalQuestions: qIds.length,
          totalMarks: 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated ${mapping.testId}: ${qIds.length} Qs (MCQ: ${mcqs.length}, AR: ${ars.length}, NUM: ${nums.length})`);
  }

  // Update NEET Chapter Test (45 Qs: pure MCQ + AR, 0 numericals)
  const neetChapterQIds = [];
  for (let i = 0; i < subtopics.length; i++) {
    const st = subtopics[i];
    const mcqs = await qb.find({ chapter: "Gravitation", subTopic: st, type: "MCQ" }).limit(5).toArray();
    const ars = await qb.find({ chapter: "Gravitation", subTopic: st, type: "ASSERTION_REASON" }).limit((i < 3) ? 3 : 2).toArray();
    neetChapterQIds.push(...mcqs.map(q => q._id), ...ars.map(q => q._id));
  }
  console.log(`Selected ${neetChapterQIds.length} questions for NEET Chapter Test`);

  await tp.updateOne(
    { testId: "neet-CHAPTER-Physics-Gravitation-11" },
    {
      $set: {
        questions: neetChapterQIds,
        totalQuestions: neetChapterQIds.length,
        totalMarks: 180,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log("Updated neet-CHAPTER-Physics-Gravitation-11");

  // Update NEET Subtopic Tests (43 Qs: 17 MCQ + 26 AR, 0 numericals)
  const neetSubtopicMappings = [
    { testId: "neet-SUBTOPIC-Physics-Newton’s-law-of-gravitation", subTopic: "Newton's law of gravitation" },
    { testId: "neet-SUBTOPIC-Physics-gravitational-potential-energy", subTopic: "Gravitational potential energy" },
    { testId: "neet-SUBTOPIC-Physics-Kepler's-laws", subTopic: "Kepler's laws" },
    { testId: "neet-SUBTOPIC-Physics-escape-velocity", subTopic: "Escape velocity" }
  ];

  for (const mapping of neetSubtopicMappings) {
    const mcqs = await qb.find({ chapter: "Gravitation", subTopic: mapping.subTopic, type: "MCQ" }).toArray();
    const ars = await qb.find({ chapter: "Gravitation", subTopic: mapping.subTopic, type: "ASSERTION_REASON" }).toArray();

    const qIds = [...mcqs.map(q => q._id), ...ars.map(q => q._id)];
    await tp.updateOne(
      { testId: mapping.testId },
      {
        $set: {
          questions: qIds,
          totalQuestions: qIds.length,
          totalMarks: qIds.length * 4,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated NEET Subtopic ${mapping.testId}: ${qIds.length} Qs (MCQ: ${mcqs.length}, AR: ${ars.length}, NUM: 0)`);
  }

  await client.close();
  console.log("\nGravitation Replacement and Test Paper Reconstruction Completed Successfully!");
}

main().catch(err => {
  console.error("Error in Gravitation replacement:", err);
  process.exit(1);
});
