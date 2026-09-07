require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

const p1 = require("./data_redox_part1.js");
const p2 = require("./data_redox_part2.js");
const p3 = require("./data_redox_part3.js");
const p4 = require("./data_redox_part4.js");

const subtopics = [
  { name: "Oxidation number", qs: p1.getOxidationNumberQuestions() },
  { name: "Balancing redox reactions", qs: p1.getBalancingRedoxQuestions() },
  { name: "Conductivity", qs: p1.getConductivityQuestions() },
  { name: "Nernst equation", qs: p2.getNernstEquationQuestions() },
  { name: "Faraday's laws of electrolysis", qs: p2.getFaradayLawsQuestions() },
  { name: "Batteries, fuel cells, and corrosion", qs: p2.getBatteriesCorrosionQuestions() },
  { name: "Batteries and fuel cells", qs: p3.getBatteriesAndFuelCellsQuestions() },
  { name: "Conductance in electrolytic solutions", qs: p3.getConductanceInElectrolyticSolutionsQuestions() },
  { name: "Corrosion", qs: p3.getCorrosionQuestions() },
  { name: "Electrolysis and Faraday's laws", qs: p3.getElectrolysisAndFaradayLawsQuestions() },
  { name: "Nernst equation and cell potential", qs: p3.getNernstEquationAndCellPotentialQuestions() },
  { name: "Kohlrausch's law and molar conductivity", qs: p3.getKohlrauschLawQuestions() },
  { name: "Electrochemical cells", qs: p4.getElectrochemicalCellsQuestions() }
];

async function replaceAll() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    console.log("Connected to MongoDB Atlas.");

    let totalUpdated = 0;

    for (const st of subtopics) {
      const bogusARs = await col
        .find({
          chapter: "Redox Reactions and Electrochemistry",
          subTopic: st.name,
          type: "ASSERTION_REASON",
          source: { $ne: "Question Bank" }
        })
        .sort({ _id: 1 })
        .toArray();

      const bogusMCQs = await col
        .find({
          chapter: "Redox Reactions and Electrochemistry",
          subTopic: st.name,
          type: "MCQ",
          source: { $ne: "Question Bank" }
        })
        .sort({ _id: 1 })
        .toArray();

      const bogusNUMs = await col
        .find({
          chapter: "Redox Reactions and Electrochemistry",
          subTopic: st.name,
          type: { $nin: ["ASSERTION_REASON", "MCQ"] },
          source: { $ne: "Question Bank" }
        })
        .sort({ _id: 1 })
        .toArray();

      const newARs = st.qs.filter(q => q.type === "ASSERTION_REASON");
      const newMCQs = st.qs.filter(q => q.type === "MCQ");
      const newNUMs = st.qs.filter(q => q.type === "NUMERICAL");

      if (
        bogusARs.length !== newARs.length ||
        bogusMCQs.length !== newMCQs.length ||
        bogusNUMs.length !== newNUMs.length
      ) {
        throw new Error(`Count mismatch in subtopic ${st.name}!`);
      }

      const bulkOps = [];

      // Map ARs
      bogusARs.forEach((doc, idx) => {
        const newQ = newARs[idx];
        bulkOps.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: newQ.question,
                options: newQ.options,
                correctAnswer: newQ.correctAnswer,
                correctOption: newQ.correctOption,
                explanation: newQ.explanation,
                difficulty: newQ.difficulty,
                questionType: newQ.questionType,
                type: newQ.type,
                subject: "Chemistry",
                chapter: "Redox Reactions and Electrochemistry",
                topic: "Redox Reactions and Electrochemistry",
                subTopic: st.name,
                targetExams: newQ.targetExams,
                source: "NCERT & NEET/JEE Authenticated Question Bank",
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                cognitiveLevel: newQ.cognitiveLevel,
                updatedAt: new Date()
              }
            }
          }
        });
      });

      // Map MCQs
      bogusMCQs.forEach((doc, idx) => {
        const newQ = newMCQs[idx];
        bulkOps.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: newQ.question,
                options: newQ.options,
                correctAnswer: newQ.correctAnswer,
                correctOption: newQ.correctOption,
                explanation: newQ.explanation,
                difficulty: newQ.difficulty,
                questionType: newQ.questionType,
                type: newQ.type,
                subject: "Chemistry",
                chapter: "Redox Reactions and Electrochemistry",
                topic: "Redox Reactions and Electrochemistry",
                subTopic: st.name,
                targetExams: newQ.targetExams,
                source: "NCERT & NEET/JEE Authenticated Question Bank",
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                cognitiveLevel: newQ.cognitiveLevel,
                updatedAt: new Date()
              }
            }
          }
        });
      });

      // Map NUMs
      bogusNUMs.forEach((doc, idx) => {
        const newQ = newNUMs[idx];
        bulkOps.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: newQ.question,
                options: newQ.options,
                correctAnswer: newQ.correctAnswer,
                correctOption: newQ.correctOption || "",
                explanation: newQ.explanation,
                difficulty: newQ.difficulty,
                questionType: newQ.questionType,
                type: newQ.type,
                subject: "Chemistry",
                chapter: "Redox Reactions and Electrochemistry",
                topic: "Redox Reactions and Electrochemistry",
                subTopic: st.name,
                targetExams: newQ.targetExams,
                source: "NCERT & NEET/JEE Authenticated Question Bank",
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                cognitiveLevel: newQ.cognitiveLevel,
                updatedAt: new Date()
              }
            }
          }
        });
      });

      if (bulkOps.length > 0) {
        const res = await col.bulkWrite(bulkOps);
        console.log(`Subtopic "${st.name}": Updated ${res.modifiedCount} documents.`);
        totalUpdated += res.modifiedCount;
      }
    }

    console.log(`\n========================================`);
    console.log(`Total bogus documents updated in-place: ${totalUpdated} / 786`);
    console.log(`========================================`);

  } finally {
    await client.close();
  }
}

replaceAll().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
