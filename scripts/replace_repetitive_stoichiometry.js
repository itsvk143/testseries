require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");
const { get119DiverseStoichiometryQuestions } = require("./generate_119_diverse_stoichiometry.js");

async function replaceRepetitiveStoichiometry() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB Atlas.");

  const db = client.db();
  const col = db.collection("questionBank");

  // Query the 119 repetitive Stoichiometry questions
  const repetitiveDocs = await col.find({
    subject: "Chemistry",
    chapter: /some basic concept/i,
    subTopic: "Stoichiometry",
    $or: [
      { question: /According to the balanced equation/ },
      { question: /are required for the complete combustion of/ },
      { question: /liberated by the complete thermal decomposition of/ },
      { question: /What volume of hydrogen gas at STP is liberated by the reaction of/ }
    ]
  }).toArray();

  console.log(`Found ${repetitiveDocs.length} repetitive Stoichiometry questions to replace.`);

  const authenticQuestions = get119DiverseStoichiometryQuestions();
  console.log(`Loaded ${authenticQuestions.length} unique, diverse authentic Stoichiometry questions.`);

  if (repetitiveDocs.length !== authenticQuestions.length) {
    throw new Error(`Count mismatch: found ${repetitiveDocs.length} docs, but have ${authenticQuestions.length} replacements.`);
  }

  const bulkOps = repetitiveDocs.map((doc, idx) => {
    const auth = authenticQuestions[idx];
    return {
      updateOne: {
        filter: { _id: doc._id },
        update: {
          $set: {
            question: auth.question,
            options: auth.options,
            correctAnswer: auth.correctAnswer,
            correctOption: auth.correctOption,
            explanation: auth.explanation,
            difficulty: auth.difficulty,
            questionType: auth.questionType,
            type: auth.type,
            source: auth.source,
            subTopic: "Stoichiometry",
            marks: 4,
            negativeMarks: 1,
            cognitiveLevel: "Problem Solving & Calculation",
            targetExams: ["NEET", "JEE Main"],
            updatedAt: new Date()
          }
        }
      }
    };
  });

  console.log(`Executing bulk update of ${bulkOps.length} questions...`);
  const result = await col.bulkWrite(bulkOps);
  console.log(`Bulk update complete! Modified: ${result.modifiedCount}`);

  // Post verification
  const remainingRepetitive = await col.countDocuments({
    subject: "Chemistry",
    chapter: /some basic concept/i,
    $or: [
      { question: /According to the balanced equation/ },
      { question: /are required for the complete combustion of/ },
      { question: /liberated by the complete thermal decomposition of/ }
    ]
  });

  console.log(`Remaining repetitive questions in chapter: ${remainingRepetitive}`);

  // Check total questions in chapter
  const total = await col.countDocuments({
    subject: "Chemistry",
    chapter: /some basic concept/i
  });
  console.log(`Total questions in 'Some Basic Concepts in Chemistry': ${total}`);

  // Check KaTeX errors
  const allChapterQ = await col.find({
    subject: "Chemistry",
    chapter: /some basic concept/i
  }).toArray();

  let brokenLatexCount = 0;
  allChapterQ.forEach(q => {
    const s = q.question + " " + (q.explanation || "");
    if (s.includes("\\text{") && s.includes("\\rightarrow")) {
      const idx1 = s.indexOf("\\text{");
      const idx2 = s.indexOf("\\rightarrow");
      const idx3 = s.indexOf("}", idx2);
      if (idx1 < idx2 && idx2 < idx3) brokenLatexCount++;
    }
  });

  console.log(`Broken KaTeX '\\text{...\\rightarrow...}' count in chapter: ${brokenLatexCount}`);

  if (remainingRepetitive === 0 && brokenLatexCount === 0) {
    console.log("SUCCESS! All repetitive loop questions have been completely eliminated and replaced with 100% diverse, authentic Stoichiometry questions with clean, valid KaTeX!");
  }

  await client.close();
}

replaceRepetitiveStoichiometry().catch(err => {
  console.error("Replacement error:", err);
  process.exit(1);
});
