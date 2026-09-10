require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

const part1 = require('./data_jee_pam_part1.js'); // 48
const part2 = require('./data_jee_pam_part2.js'); // 48
const part3 = require('./data_jee_pam_part3.js'); // 48
const part4 = require('./data_jee_pam_part4.js'); // 53
const part5 = require('./data_jee_pam_part5.js'); // 53

const subtopicData = {
  "Units and dimensions": part1,
  "Significant figures": part2,
  "Error analysis": part3,
  "Least count and precision": part4,
  "Dimensional analysis and applications": part5
};

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not defined");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // 1. Audit before replacement
  const totalInDb = await qb.countDocuments({ chapter: "Physics and Measurement" });
  console.log(`Total questions in DB under Physics and Measurement: ${totalInDb}`);

  const genuineMCQs = await qb.find({ chapter: "Physics and Measurement", source: "Question Bank" }).toArray();
  console.log(`Genuine MCQs count: ${genuineMCQs.length}`);

  // 2. Perform in-place replacement for each subtopic
  for (const [subtopicName, newDataList] of Object.entries(subtopicData)) {
    console.log(`\n--- Replacing for subtopic: ${subtopicName} ---`);
    // Find bogus questions for this subtopic (source is not "Question Bank")
    const bogusDocs = await qb.find({
      chapter: "Physics and Measurement",
      subTopic: subtopicName,
      source: { $ne: "Question Bank" }
    }).sort({ type: 1, _id: 1 }).toArray();

    console.log(`Found ${bogusDocs.length} bogus documents to replace. New questions prepared: ${newDataList.length}`);

    if (bogusDocs.length !== newDataList.length) {
      console.warn(`WARNING: Count mismatch! Bogus: ${bogusDocs.length}, New: ${newDataList.length}`);
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
        marks: newQ.marks || 4,
        negativeMarks: newQ.negativeMarks !== undefined ? newQ.negativeMarks : (newQ.type === 'numerical' ? 0 : 1),
        examType: newQ.examType || "JEE Mains",
        subTopic: subtopicName,
        chapter: "Physics and Measurement",
        subject: "Physics",
        type: newQ.type,
        updatedAt: new Date()
      };

      if (newQ.type === 'numerical') {
        updateFields.correctAnswer = newQ.correctAnswer;
        updateFields.options = [];
      } else {
        updateFields.options = newQ.options;
        updateFields.correctOptionIndex = newQ.correctOptionIndex;
      }

      await qb.updateOne(
        { _id: doc._id },
        {
          $set: updateFields,
          $unset: newQ.type === 'numerical' ? { correctOptionIndex: "" } : { correctAnswer: "" }
        }
      );
      replacedCount++;
    }
    console.log(`Successfully replaced ${replacedCount} questions in ${subtopicName}`);
  }

  // 3. Fix KaTeX errors in preserved MCQs
  console.log("\n--- Fixing KaTeX errors in preserved MCQs ---");
  // MCQ 1: 6a98e2338f372d5292e13221 (nested \( in explanation)
  const q1 = await qb.findOne({ _id: new ObjectId("6a98e2338f372d5292e13221") });
  if (q1) {
    let cleanExp = q1.explanation.replace(/\\\(/g, '').replace(/\\\)/g, '');
    await qb.updateOne({ _id: q1._id }, { $set: { explanation: cleanExp } });
    console.log("Fixed 6a98e2338f372d5292e13221 explanation");
  }

  // MCQ 2: 6a98e2338f372d5292e13224 (\degree\text{C})
  const q2 = await qb.findOne({ _id: new ObjectId("6a98e2338f372d5292e13224") });
  if (q2) {
    let cleanQ = q2.question.replace(/\\\(\\degree\\text\{C\}/g, "$^\\circ\\text{C}$").replace(/\\degree/g, "^\\circ");
    let cleanExp = q2.explanation.replace(/\\\(\\degree\\text\{C\}/g, "$^\\circ\\text{C}$").replace(/\\degree/g, "^\\circ");
    await qb.updateOne({ _id: q2._id }, { $set: { question: cleanQ, explanation: cleanExp } });
    console.log("Fixed 6a98e2338f372d5292e13224 degree symbols");
  }

  // MCQ 3: 6a98f7883b9f7331a3cca4fa (lone \sqrt)
  const q3 = await qb.findOne({ _id: new ObjectId("6a98f7883b9f7331a3cca4fa") });
  if (q3) {
    let cleanExp = q3.explanation.replace(/\\sqrt\s*([0-9a-zA-Z]+)/g, "\\sqrt{$1}");
    await qb.updateOne({ _id: q3._id }, { $set: { explanation: cleanExp } });
    console.log("Fixed 6a98f7883b9f7331a3cca4fa lone sqrt");
  }

  // MCQ 4: 6a98f7913b9f7331a3cca507 (\textdegree)
  const q4 = await qb.findOne({ _id: new ObjectId("6a98f7913b9f7331a3cca507") });
  if (q4) {
    let cleanQ = q4.question.replace(/\\textdegree/g, "^\\circ");
    let cleanOpts = q4.options.map(opt => opt.replace(/\\textdegree/g, "^\\circ"));
    let cleanExp = q4.explanation.replace(/\\textdegree/g, "^\\circ");
    await qb.updateOne({ _id: q4._id }, { $set: { question: cleanQ, options: cleanOpts, explanation: cleanExp } });
    console.log("Fixed 6a98f7913b9f7331a3cca507 textdegree symbols");
  }

  // 4. Standardize all genuine MCQs: marks: 4, negativeMarks: 1
  await qb.updateMany(
    { chapter: "Physics and Measurement", source: "Question Bank" },
    { $set: { marks: 4, negativeMarks: 1 } }
  );
  console.log("Standardized marks on all genuine MCQs");

  // 5. Update Test Papers
  console.log("\n--- Updating Test Papers ---");
  const subtopics = [
    "Units and dimensions",
    "Significant figures",
    "Error analysis",
    "Least count and precision",
    "Dimensional analysis and applications"
  ];

  // Reconstruct jee-mains-CHAPTER-Physics-Physics-and-Measurement-11
  // Select 4 MCQs and 1 Numerical from each subtopic
  const selectedChapterQuestions = [];
  for (const st of subtopics) {
    const mcqs = await qb.find({
      chapter: "Physics and Measurement",
      subTopic: st,
      type: "multiple-choice"
    }).limit(4).toArray();

    const nums = await qb.find({
      chapter: "Physics and Measurement",
      subTopic: st,
      type: "numerical"
    }).limit(1).toArray();

    selectedChapterQuestions.push(...mcqs.map(q => q._id));
    selectedChapterQuestions.push(...nums.map(q => q._id));
  }

  console.log(`Selected ${selectedChapterQuestions.length} questions for JEE Main chapter test`);
  await tp.updateOne(
    { testId: "jee-mains-CHAPTER-Physics-Physics-and-Measurement-11" },
    {
      $set: {
        questions: selectedChapterQuestions,
        totalQuestions: selectedChapterQuestions.length,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log("Updated jee-mains-CHAPTER-Physics-Physics-and-Measurement-11");

  // Update JEE Main subtopic tests
  const subtopicTestMappings = [
    { testId: "jee-mains-SUBTOPIC-Physics-Units-and-dimensions", subTopic: "Units and dimensions" },
    { testId: "jee-mains-SUBTOPIC-Physics-error-analysis", subTopic: "Error analysis" },
    { testId: "jee-mains-SUBTOPIC-Physics-significant-figures", subTopic: "Significant figures" }
  ];

  for (const mapping of subtopicTestMappings) {
    const testDoc = await tp.findOne({ testId: mapping.testId });
    if (testDoc) {
      // 10 MCQ + 10 AR + 5 NUM = 25 questions
      const mcqs = await qb.find({ chapter: "Physics and Measurement", subTopic: mapping.subTopic, type: "multiple-choice" }).limit(10).toArray();
      const ars = await qb.find({ chapter: "Physics and Measurement", subTopic: mapping.subTopic, type: "assertion-reason" }).limit(10).toArray();
      const nums = await qb.find({ chapter: "Physics and Measurement", subTopic: mapping.subTopic, type: "numerical" }).limit(5).toArray();

      const testQIds = [...mcqs.map(q => q._id), ...ars.map(q => q._id), ...nums.map(q => q._id)];
      await tp.updateOne(
        { _id: testDoc._id },
        {
          $set: {
            questions: testQIds,
            totalQuestions: testQIds.length,
            totalMarks: 100,
            duration: 60,
            updatedAt: new Date()
          }
        }
      );
      console.log(`Updated subtopic test ${mapping.testId} with ${testQIds.length} questions`);
    }
  }

  // Also check if any NEET tests exist for Physics and Measurement and ensure they have only MCQs / ARs (no numericals)
  const neetTests = await tp.find({
    testId: { $regex: /^neet/i },
    chapter: "Physics and Measurement"
  }).toArray();

  for (const nt of neetTests) {
    console.log(`Checking NEET test: ${nt.testId}`);
    const pureMCQs = await qb.find({
      chapter: "Physics and Measurement",
      type: { $in: ["multiple-choice", "assertion-reason"] }
    }).limit(nt.totalQuestions || 45).toArray();

    await tp.updateOne(
      { _id: nt._id },
      {
        $set: {
          questions: pureMCQs.map(q => q._id),
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated NEET test ${nt.testId} with ${pureMCQs.length} MCQ/AR questions`);
  }

  await client.close();
  console.log("\nReplacement and test paper update completed successfully!");
}

main().catch(err => {
  console.error("Error during replacement:", err);
  process.exit(1);
});
