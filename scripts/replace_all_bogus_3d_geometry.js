const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

const subtopic1Data = require("./data_jee_3d_subtopic1.js"); // Direction cosines and ratios (30)
const subtopic2Data = require("./data_jee_3d_subtopic2.js"); // Vector and Cartesian equations of lines (30)
const subtopic3Data = require("./data_jee_3d_subtopic3.js"); // Angle between two lines (30)
const subtopic4Data = require("./data_jee_3d_subtopic4.js"); // Distance between parallel lines (18)
const subtopic5Data = require("./data_jee_3d_subtopic5.js"); // Shortest distance between two skew lines (30)
const repairedGenuine = require("./repaired_genuine_qb.js");

const subtopicDataMap = {
  "Direction cosines and ratios": subtopic1Data,
  "Vector and Cartesian equations of lines": subtopic2Data,
  "Angle between two lines": subtopic3Data,
  "Distance between parallel lines": subtopic4Data,
  "Shortest distance between two skew lines": subtopic5Data
};

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const qb = db.collection("questionBank");
    const tp = db.collection("testPapers");

    console.log("Connected to MongoDB. Fetching 3D Geometry questions...");
    const allDocs = await qb.find({ subject: /math/i, chapter: /3d geometry/i }).toArray();
    console.log(`Found ${allDocs.length} total questions in Mathematics > 3D Geometry.`);

    // 1. Repair Genuine Question Bank Questions
    console.log("\n--- Repairing Genuine Question Bank Questions ---");
    let genuineRepaired = 0;
    let genuinePreserved = 0;

    for (const doc of allDocs) {
      if (doc.source === "Question Bank") {
        const idStr = doc._id.toString();
        const repair = repairedGenuine[idStr];
        const updateFields = {
          marks: 4,
          negativeMarks: 1,
          type: "MCQ",
          questionType: "MCQ (Multiple Choice Question)",
          topic: "3D Geometry",
          chapter: "3D Geometry",
          subject: "Mathematics",
          class: "Class 12",
          status: "APPROVED",
          commercialReady: true,
          exam: "JEE Mains",
          targetExams: ["JEE Main"],
          updatedAt: new Date(),
          latexAuditedAt: new Date()
        };

        if (repair) {
          updateFields.question = repair.question;
          updateFields.options = repair.options;
          updateFields.correctAnswer = repair.correctAnswer;
          updateFields.explanation = repair.explanation;
          genuineRepaired++;
        } else {
          genuinePreserved++;
        }

        await qb.updateOne({ _id: doc._id }, { $set: updateFields });
      }
    }
    console.log(`Genuine questions repaired: ${genuineRepaired}, pristine preserved: ${genuinePreserved}`);

    // 2. Replace Bogus Questions In-Place
    console.log("\n--- Replacing Bogus Questions In-Place by _id ---");
    let totalReplaced = 0;

    for (const [subtopicName, dataList] of Object.entries(subtopicDataMap)) {
      const bogusDocs = allDocs.filter(d => d.source !== "Question Bank" && d.subTopic === subtopicName);
      console.log(`Subtopic "${subtopicName}": replacing ${bogusDocs.length} bogus docs with ${dataList.length} authentic questions...`);

      if (bogusDocs.length !== dataList.length) {
        throw new Error(`Count mismatch for "${subtopicName}": found ${bogusDocs.length} bogus, expected ${dataList.length}`);
      }

      for (let i = 0; i < bogusDocs.length; i++) {
        const targetDoc = bogusDocs[i];
        const replacement = dataList[i];

        const updateDoc = {
          subject: "Mathematics",
          class: "Class 12",
          chapter: "3D Geometry",
          topic: "3D Geometry",
          subTopic: subtopicName,
          type: replacement.type,
          questionType: replacement.questionType,
          marks: 4,
          negativeMarks: replacement.type === "NUMERICAL" ? 0 : 1,
          difficulty: replacement.difficulty,
          question: replacement.question,
          options: replacement.options || [],
          correctAnswer: replacement.correctAnswer,
          explanation: replacement.explanation,
          source: "JEE Main 10-Year Advanced Pattern Generator",
          status: "APPROVED",
          commercialReady: true,
          exam: "JEE Mains",
          targetExams: ["JEE Main"],
          updatedAt: new Date(),
          latexAuditedAt: new Date()
        };

        await qb.updateOne({ _id: targetDoc._id }, { $set: updateDoc });
        totalReplaced++;
      }
    }
    console.log(`Successfully replaced ${totalReplaced} bogus questions in-place!`);

    // 3. Reconstruct Test Papers
    console.log("\n--- Reconstructing Test Papers with Pure 3D Geometry Questions ---");

    // Fetch refreshed documents from database
    const refreshedDocs = await qb.find({ subject: /math/i, chapter: /3d geometry/i }).toArray();
    const bySubtopic = {};
    for (const d of refreshedDocs) {
      if (!bySubtopic[d.subTopic]) bySubtopic[d.subTopic] = [];
      bySubtopic[d.subTopic].push(d);
    }

    // Paper 1: jee-mains-CHAPTER-Mathematics-3D-Geometry-12
    const chapterPaper = await tp.findOne({ testId: "jee-mains-CHAPTER-Mathematics-3D-Geometry-12" });
    if (chapterPaper) {
      console.log(`Reconstructing Chapter Paper: ${chapterPaper.testId}`);
      // 20 Section A (4 from each of the 5 subtopics) + 5 Section B (1 NUM from each subtopic)
      const secA = [];
      const secB = [];

      for (const [stName, docs] of Object.entries(bySubtopic)) {
        const mcqsAndArs = docs.filter(d => d.type === "MCQ" || d.type === "ASSERTION_REASON");
        const nums = docs.filter(d => d.type === "NUMERICAL");

        secA.push(...mcqsAndArs.slice(0, 4).map(d => d._id));
        secB.push(...nums.slice(0, 1).map(d => d._id));
      }

      const chapterQuestions = [...secA, ...secB];
      console.log(`  Selected ${secA.length} Section A + ${secB.length} Section B = ${chapterQuestions.length} questions`);

      await tp.updateOne(
        { _id: chapterPaper._id },
        {
          $set: {
            questions: chapterQuestions,
            totalMarks: 100,
            standardQuestionsCount: 25,
            duration: 60,
            updatedAt: new Date()
          }
        }
      );
      console.log(`  ✓ Updated ${chapterPaper.testId}`);
    }

    // Paper 2: jee-mains-SUBTOPIC-Mathematics-Direction-cosines-and-ratios
    const dcPaper = await tp.findOne({ testId: "jee-mains-SUBTOPIC-Mathematics-Direction-cosines-and-ratios" });
    if (dcPaper) {
      console.log(`Reconstructing Subtopic Paper: ${dcPaper.testId}`);
      const docs = bySubtopic["Direction cosines and ratios"] || [];
      const secA = docs.filter(d => d.type === "MCQ" || d.type === "ASSERTION_REASON").slice(0, 20).map(d => d._id);
      const secB = docs.filter(d => d.type === "NUMERICAL").slice(0, 5).map(d => d._id);
      const dcQuestions = [...secA, ...secB];
      console.log(`  Selected ${secA.length} Section A + ${secB.length} Section B = ${dcQuestions.length} questions (0 foreign questions!)`);

      await tp.updateOne(
        { _id: dcPaper._id },
        {
          $set: {
            questions: dcQuestions,
            totalMarks: 100,
            standardQuestionsCount: 25,
            duration: 60,
            updatedAt: new Date()
          }
        }
      );
      console.log(`  ✓ Updated ${dcPaper.testId}`);
    }

    // Paper 3: jee-mains-SUBTOPIC-Mathematics-angle-between-two-lines
    const anglePaper = await tp.findOne({ testId: "jee-mains-SUBTOPIC-Mathematics-angle-between-two-lines" });
    if (anglePaper) {
      console.log(`Reconstructing Subtopic Paper: ${anglePaper.testId}`);
      const docs = bySubtopic["Angle between two lines"] || [];
      const secA = docs.filter(d => d.type === "MCQ" || d.type === "ASSERTION_REASON").slice(0, 20).map(d => d._id);
      const secB = docs.filter(d => d.type === "NUMERICAL").slice(0, 5).map(d => d._id);
      const angleQuestions = [...secA, ...secB];
      console.log(`  Selected ${secA.length} Section A + ${secB.length} Section B = ${angleQuestions.length} questions (0 foreign questions!)`);

      await tp.updateOne(
        { _id: anglePaper._id },
        {
          $set: {
            questions: angleQuestions,
            totalMarks: 100,
            standardQuestionsCount: 25,
            duration: 60,
            updatedAt: new Date()
          }
        }
      );
      console.log(`  ✓ Updated ${anglePaper.testId}`);
    }

    console.log("\n=================================");
    console.log("All operations completed successfully!");
    console.log("=================================\n");

  } finally {
    await client.close();
  }
}

run().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
