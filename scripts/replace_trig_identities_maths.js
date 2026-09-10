const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

const sub1 = require("./data/trig_subtopic1_mult_angles.js");
const sub2 = require("./data/trig_subtopic2_max_min.js");
const sub3 = require("./data/trig_subtopic3_equations.js");

async function executeReplacement() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI not found in .env.local");
  }

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB.");
  const db = client.db();
  const qb = db.collection("questionBank");
  const tp = db.collection("testPapers");

  // 1. Fetch existing documents for each subtopic
  const s1Docs = await qb.find({
    subject: "Mathematics",
    chapter: "Trigonometric Identities",
    $or: [{ subtopic: "Multiple and sub-multiple angles" }, { subTopic: "Multiple and sub-multiple angles" }]
  }).sort({ _id: 1 }).toArray();

  const s2Docs = await qb.find({
    subject: "Mathematics",
    chapter: "Trigonometric Identities",
    $or: [{ subtopic: "Maximum and minimum values of trigonometric expressions" }, { subTopic: "Maximum and minimum values of trigonometric expressions" }]
  }).sort({ _id: 1 }).toArray();

  const s3Docs = await qb.find({
    subject: "Mathematics",
    chapter: "Trigonometric Identities",
    $or: [{ subtopic: "Trigonometric equations and general solutions" }, { subTopic: "Trigonometric equations and general solutions" }]
  }).sort({ _id: 1 }).toArray();

  console.log(`Found existing docs: Subtopic 1 = ${s1Docs.length}, Subtopic 2 = ${s2Docs.length}, Subtopic 3 = ${s3Docs.length}`);
  console.log(`Replacement datasets: Subtopic 1 = ${sub1.length}, Subtopic 2 = ${sub2.length}, Subtopic 3 = ${sub3.length}`);

  if (s1Docs.length !== sub1.length || s2Docs.length !== sub2.length || s3Docs.length !== sub3.length) {
    throw new Error("Mismatch in document counts for subtopics!");
  }

  // Helper to update a set of documents
  async function updateGroup(docs, dataList, groupName) {
    console.log(`\nUpdating ${groupName} (${docs.length} questions)...`);
    for (let i = 0; i < docs.length; i++) {
      const docId = docs[i]._id;
      const data = dataList[i];

      const updateDoc = {
        $set: {
          question: data.question,
          options: data.options,
          type: data.type,
          correctAnswer: data.correctAnswer,
          answer: data.correctAnswer,
          explanation: data.explanation,
          subject: "Mathematics",
          chapter: "Trigonometric Identities",
          subtopic: data.subtopic,
          subTopic: data.subtopic,
          marks: data.marks || 4,
          negativeMarks: data.negativeMarks ?? (data.type === "NUMERICAL" ? 0 : 1),
          difficulty: data.difficulty || "Medium",
          exam: "JEE Main",
          source: "JEE Main Authentic",
          updatedAt: new Date()
        }
      };

      await qb.updateOne({ _id: docId }, updateDoc);
    }
    console.log(`Successfully updated all ${docs.length} questions in ${groupName}.`);
  }

  await updateGroup(s1Docs, sub1, "Multiple and sub-multiple angles");
  await updateGroup(s2Docs, sub2, "Maximum and minimum values of trigonometric expressions");
  await updateGroup(s3Docs, sub3, "Trigonometric equations and general solutions");

  // 2. Fetch updated questions to construct test papers
  const allUpdatedTrig = await qb.find({
    subject: "Mathematics",
    chapter: "Trigonometric Identities"
  }).toArray();
  console.log(`\nTotal verified updated questions in questionBank: ${allUpdatedTrig.length}`);

  const mcqsAll = allUpdatedTrig.filter(q => q.type === "MCQ");
  const numAll = allUpdatedTrig.filter(q => q.type === "NUMERICAL");
  console.log(`Available across chapter: ${mcqsAll.length} MCQs, ${numAll.length} Numericals`);

  const s1Updated = allUpdatedTrig.filter(q => q.subtopic === "Multiple and sub-multiple angles");
  const s1Mcqs = s1Updated.filter(q => q.type === "MCQ");
  const s1Nums = s1Updated.filter(q => q.type === "NUMERICAL");
  console.log(`Available in Subtopic 1: ${s1Mcqs.length} MCQs, ${s1Nums.length} Numericals`);

  // 3. Reconstruct Paper 1: "Trigonometric Identities"
  const paper1Id = new ObjectId("6a9e2844c527cd38431011b6");
  const paper1MCQs = mcqsAll.slice(0, 20).map(q => q._id);
  const paper1Nums = numAll.slice(0, 5).map(q => q._id);
  const paper1Questions = [...paper1MCQs, ...paper1Nums];

  const p1Res = await tp.updateOne(
    { _id: paper1Id },
    {
      $set: {
        questions: paper1Questions,
        totalMarks: 100,
        duration: 60,
        standardQuestionsCount: 25,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Updated Test Paper "Trigonometric Identities": matched=${p1Res.matchedCount}, modified=${p1Res.modifiedCount}`);

  // 4. Reconstruct Paper 2: "Multiple and sub-multiple angles"
  const paper2Id = new ObjectId("6a9e288dc527cd3843101349");
  const paper2MCQs = s1Mcqs.slice(0, 20).map(q => q._id);
  const paper2Nums = s1Nums.slice(0, 5).map(q => q._id);
  const paper2Questions = [...paper2MCQs, ...paper2Nums];

  const p2Res = await tp.updateOne(
    { _id: paper2Id },
    {
      $set: {
        questions: paper2Questions,
        totalMarks: 100,
        duration: 60,
        standardQuestionsCount: 25,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Updated Test Paper "Multiple and sub-multiple angles": matched=${p2Res.matchedCount}, modified=${p2Res.modifiedCount}`);

  console.log("\nReplacement execution finished successfully!");
  await client.close();
}

executeReplacement().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
