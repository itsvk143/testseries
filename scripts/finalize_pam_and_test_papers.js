require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

async function main() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // 1. Normalize types in questionBank for Physics and Measurement to standard uppercase
  const r1 = await qb.updateMany(
    { chapter: "Physics and Measurement", type: "multiple-choice" },
    { $set: { type: "MCQ" } }
  );
  console.log(`Normalized multiple-choice -> MCQ: ${r1.modifiedCount}`);

  const r2 = await qb.updateMany(
    { chapter: "Physics and Measurement", type: "assertion-reason" },
    { $set: { type: "ASSERTION_REASON" } }
  );
  console.log(`Normalized assertion-reason -> ASSERTION_REASON: ${r2.modifiedCount}`);

  const r3 = await qb.updateMany(
    { chapter: "Physics and Measurement", type: "numerical" },
    { $set: { type: "NUMERICAL" } }
  );
  console.log(`Normalized numerical -> NUMERICAL: ${r3.modifiedCount}`);

  // 2. Build JEE Mains Chapter Test: jee-mains-CHAPTER-Physics-Physics-and-Measurement-11
  // 20 MCQs (4 per subtopic) + 5 NUMERICAL (1 per subtopic) = 25 questions
  const subtopics = [
    "Units and dimensions",
    "Significant figures",
    "Error analysis",
    "Least count and precision",
    "Dimensional analysis and applications"
  ];

  const chapterMcqIds = [];
  const chapterNumIds = [];

  for (const st of subtopics) {
    const mcqs = await qb.find({ chapter: "Physics and Measurement", subTopic: st, type: "MCQ" }).limit(4).toArray();
    const nums = await qb.find({ chapter: "Physics and Measurement", subTopic: st, type: "NUMERICAL" }).limit(1).toArray();
    chapterMcqIds.push(...mcqs.map(q => q._id));
    chapterNumIds.push(...nums.map(q => q._id));
  }

  const jeeChapterQIds = [...chapterMcqIds, ...chapterNumIds];
  console.log(`JEE Main Chapter Test questions count: ${jeeChapterQIds.length} (MCQs: ${chapterMcqIds.length}, NUM: ${chapterNumIds.length})`);

  await tp.updateOne(
    { testId: "jee-mains-CHAPTER-Physics-Physics-and-Measurement-11" },
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
  console.log("Updated jee-mains-CHAPTER-Physics-Physics-and-Measurement-11");

  // 3. Build JEE Mains Subtopic Tests (25 questions each: 10 MCQ + 10 AR + 5 NUM)
  const jeeSubtopics = [
    { testId: "jee-mains-SUBTOPIC-Physics-Units-and-dimensions", subTopic: "Units and dimensions" },
    { testId: "jee-mains-SUBTOPIC-Physics-error-analysis", subTopic: "Error analysis" },
    { testId: "jee-mains-SUBTOPIC-Physics-significant-figures", subTopic: "Significant figures" }
  ];

  for (const stMap of jeeSubtopics) {
    const mcqs = await qb.find({ chapter: "Physics and Measurement", subTopic: stMap.subTopic, type: "MCQ" }).limit(10).toArray();
    const ars = await qb.find({ chapter: "Physics and Measurement", subTopic: stMap.subTopic, type: "ASSERTION_REASON" }).limit(10).toArray();
    const nums = await qb.find({ chapter: "Physics and Measurement", subTopic: stMap.subTopic, type: "NUMERICAL" }).limit(5).toArray();

    const qIds = [...mcqs.map(q => q._id), ...ars.map(q => q._id), ...nums.map(q => q._id)];
    await tp.updateOne(
      { testId: stMap.testId },
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
    console.log(`Updated JEE Subtopic Test ${stMap.testId}: ${qIds.length} questions (MCQ: ${mcqs.length}, AR: ${ars.length}, NUM: ${nums.length})`);
  }

  // 4. Build NEET Tests (pure MCQ + AR, 0 NUMERICAL)
  // Chapter test: 45 questions (balanced across subtopics)
  const neetChapterQIds = [];
  for (const st of subtopics) {
    const mcqs = await qb.find({ chapter: "Physics and Measurement", subTopic: st, type: "MCQ" }).limit(6).toArray();
    const ars = await qb.find({ chapter: "Physics and Measurement", subTopic: st, type: "ASSERTION_REASON" }).limit(3).toArray();
    neetChapterQIds.push(...mcqs.map(q => q._id), ...ars.map(q => q._id));
  }
  console.log(`NEET Chapter Test questions: ${neetChapterQIds.length}`);
  await tp.updateOne(
    { testId: "neet-CHAPTER-Physics-Physics-and-Measurement-11" },
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
  console.log("Updated neet-CHAPTER-Physics-Physics-and-Measurement-11");

  // NEET Subtopic Tests
  // Units and dimensions (can easily do 45)
  const neetUnitsMCQ = await qb.find({ chapter: "Physics and Measurement", subTopic: "Units and dimensions", type: "MCQ" }).limit(30).toArray();
  const neetUnitsAR = await qb.find({ chapter: "Physics and Measurement", subTopic: "Units and dimensions", type: "ASSERTION_REASON" }).limit(15).toArray();
  const neetUnitsQIds = [...neetUnitsMCQ.map(q => q._id), ...neetUnitsAR.map(q => q._id)];
  await tp.updateOne(
    { testId: "neet-SUBTOPIC-Physics-Units-and-dimensions" },
    {
      $set: {
        questions: neetUnitsQIds,
        totalQuestions: neetUnitsQIds.length,
        totalMarks: 180,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Updated neet-SUBTOPIC-Physics-Units-and-dimensions: ${neetUnitsQIds.length} questions`);

  // Error analysis (all 17 MCQs + 26 ARs = 43 questions)
  const neetErrorMCQ = await qb.find({ chapter: "Physics and Measurement", subTopic: "Error analysis", type: "MCQ" }).toArray();
  const neetErrorAR = await qb.find({ chapter: "Physics and Measurement", subTopic: "Error analysis", type: "ASSERTION_REASON" }).toArray();
  const neetErrorQIds = [...neetErrorMCQ.map(q => q._id), ...neetErrorAR.map(q => q._id)];
  await tp.updateOne(
    { testId: "neet-SUBTOPIC-Physics-error-analysis" },
    {
      $set: {
        questions: neetErrorQIds,
        totalQuestions: neetErrorQIds.length,
        totalMarks: neetErrorQIds.length * 4,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Updated neet-SUBTOPIC-Physics-error-analysis: ${neetErrorQIds.length} questions`);

  // Significant figures (all 17 MCQs + 26 ARs = 43 questions)
  const neetSigMCQ = await qb.find({ chapter: "Physics and Measurement", subTopic: "Significant figures", type: "MCQ" }).toArray();
  const neetSigAR = await qb.find({ chapter: "Physics and Measurement", subTopic: "Significant figures", type: "ASSERTION_REASON" }).toArray();
  const neetSigQIds = [...neetSigMCQ.map(q => q._id), ...neetSigAR.map(q => q._id)];
  await tp.updateOne(
    { testId: "neet-SUBTOPIC-Physics-significant-figures" },
    {
      $set: {
        questions: neetSigQIds,
        totalQuestions: neetSigQIds.length,
        totalMarks: neetSigQIds.length * 4,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Updated neet-SUBTOPIC-Physics-significant-figures: ${neetSigQIds.length} questions`);

  await client.close();
  console.log("All test papers and type normalizations completed successfully!");
}

main().catch(err => {
  console.error("Error in finalize script:", err);
  process.exit(1);
});
