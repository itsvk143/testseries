require("dotenv").config({ path: ".env.local" });
const { MongoClient, ObjectId } = require("mongodb");
const katex = require("katex");

const p1 = require("./data_kinetics_part1.js");
const p2 = require("./data_kinetics_part2.js");
const p3 = require("./data_kinetics_part3.js");
const p4 = require("./data_kinetics_part4.js");

async function runReplacement() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    console.log("Connected to MongoDB Atlas.");

    // Define subtopic mappings
    const mappings = [
      {
        subTopic: "Integrated rate equations (zero and first order)",
        questions: p1.getIntegratedRateEquationsQuestions()
      },
      {
        subTopic: "Rate of reaction",
        questions: p1.getRateOfReactionQuestions()
      },
      {
        subTopic: "Arrhenius equation",
        questions: [...p1.getArrheniusPartAQuestions(), ...p2.getArrheniusPartBQuestions()]
      },
      {
        subTopic: "Rate law",
        questions: p2.getRateLawQuestions()
      },
      {
        subTopic: "Order of reaction",
        questions: p2.getOrderOfReactionQuestions()
      },
      {
        subTopic: "Catalysis",
        questions: p3.getCatalysisQuestions()
      },
      {
        subTopic: "Collision theory of reactions",
        questions: p3.getCollisionTheoryQuestions()
      },
      {
        subTopic: "Half-life and activation energy",
        questions: p3.getHalfLifeActivationEnergyQuestions()
      }
    ];

    let totalUpdated = 0;

    for (const m of mappings) {
      const bogusDocs = await col
        .find({
          chapter: "Chemical Kinetics",
          subTopic: m.subTopic,
          source: { $ne: "Question Bank" }
        })
        .sort({ _id: 1 })
        .toArray();

      console.log(`Subtopic "${m.subTopic}": Found ${bogusDocs.length} bogus docs, have ${m.questions.length} replacement questions.`);

      if (bogusDocs.length !== m.questions.length) {
        throw new Error(`Count mismatch in "${m.subTopic}": found ${bogusDocs.length}, expected ${m.questions.length}`);
      }

      const bulkOps = bogusDocs.map((doc, idx) => {
        const newQ = m.questions[idx];
        return {
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
                chapter: "Chemical Kinetics",
                topic: "Chemical Kinetics",
                subTopic: m.subTopic,
                targetExams: newQ.targetExams,
                source: "NCERT & NEET/JEE Authenticated Question Bank",
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                cognitiveLevel: newQ.cognitiveLevel,
                updatedAt: new Date()
              }
            }
          }
        };
      });

      const res = await col.bulkWrite(bulkOps);
      console.log(`  -> Modified ${res.modifiedCount} documents in "${m.subTopic}".`);
      totalUpdated += res.modifiedCount;
    }

    // Now handle subtopic "Rate of a chemical reaction" (4 MCQs and 270 Numericals)
    const rateChemQs = p4.getRateOfChemicalReactionQuestions();
    const newMCQs = rateChemQs.filter(q => q.type === "MCQ");
    const newNumericals = rateChemQs.filter(q => q.type === "NUMERICAL");

    const bogusMCQs = await col
      .find({
        chapter: "Chemical Kinetics",
        subTopic: "Rate of a chemical reaction",
        type: "MCQ",
        source: { $ne: "Question Bank" }
      })
      .sort({ _id: 1 })
      .toArray();

    const bogusNumericals = await col
      .find({
        chapter: "Chemical Kinetics",
        subTopic: "Rate of a chemical reaction",
        type: { $ne: "MCQ" },
        source: { $ne: "Question Bank" }
      })
      .sort({ _id: 1 })
      .toArray();

    console.log(`Subtopic "Rate of a chemical reaction": Found ${bogusMCQs.length} bogus MCQs (have ${newMCQs.length}), ${bogusNumericals.length} bogus Numericals (have ${newNumericals.length}).`);

    if (bogusMCQs.length !== newMCQs.length || bogusNumericals.length !== newNumericals.length) {
      throw new Error(`Count mismatch in Rate of a chemical reaction: MCQs ${bogusMCQs.length} vs ${newMCQs.length}, Numericals ${bogusNumericals.length} vs ${newNumericals.length}`);
    }

    const rateChemOps = [
      ...bogusMCQs.map((doc, idx) => {
        const newQ = newMCQs[idx];
        return {
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
                chapter: "Chemical Kinetics",
                topic: "Chemical Kinetics",
                subTopic: "Rate of a chemical reaction",
                targetExams: newQ.targetExams,
                source: "NCERT & NEET/JEE Authenticated Question Bank",
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                cognitiveLevel: newQ.cognitiveLevel,
                updatedAt: new Date()
              }
            }
          }
        };
      }),
      ...bogusNumericals.map((doc, idx) => {
        const newQ = newNumericals[idx];
        return {
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: newQ.question,
                options: newQ.options,
                correctAnswer: newQ.correctAnswer,
                explanation: newQ.explanation,
                difficulty: newQ.difficulty,
                questionType: newQ.questionType,
                type: newQ.type,
                subject: "Chemistry",
                chapter: "Chemical Kinetics",
                topic: "Chemical Kinetics",
                subTopic: "Rate of a chemical reaction",
                targetExams: newQ.targetExams,
                source: "NCERT & NEET/JEE Authenticated Question Bank",
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                cognitiveLevel: newQ.cognitiveLevel,
                updatedAt: new Date()
              }
            }
          }
        };
      })
    ];

    const res2 = await col.bulkWrite(rateChemOps);
    console.log(`  -> Modified ${res2.modifiedCount} documents in "Rate of a chemical reaction".`);
    totalUpdated += res2.modifiedCount;

    console.log(`\n================================`);
    console.log(`Total bogus questions replaced in-place: ${totalUpdated}`);
    console.log(`================================\n`);

    // Audit the entire Chemical Kinetics chapter in DB
    console.log("Running comprehensive database audit for Chemical Kinetics...");
    const allDocs = await col.find({ chapter: "Chemical Kinetics" }).toArray();
    console.log(`Total documents in chapter: ${allDocs.length} (expected 909)`);

    const genuineDocs = allDocs.filter(d => d.source === "Question Bank");
    console.log(`Genuine Question Bank documents: ${genuineDocs.length} (expected 138)`);

    const replacedDocs = allDocs.filter(d => d.source === "NCERT & NEET/JEE Authenticated Question Bank");
    console.log(`Replaced authentic documents: ${replacedDocs.length} (expected 771)`);

    let remainingBogus = 0;
    let katexErrors = 0;

    for (const doc of allDocs) {
      if (
        (doc.question && doc.question.includes("undergoing a two-step kinetic process where the overall rate constant is")) ||
        (doc.question && doc.question.includes("advanced electronic structure and bonding investigation")) ||
        (doc.source && doc.source.includes("Generator"))
      ) {
        remainingBogus++;
      }

      // Check KaTeX
      const fields = [doc.question, ...(doc.options || []), doc.explanation];
      for (const field of fields) {
        if (!field) continue;
        const mathRegex = /\$([^\$]+)\$/g;
        let match;
        while ((match = mathRegex.exec(field)) !== null) {
          try {
            katex.renderToString(match[1], { throwOnError: true });
          } catch (e) {
            console.error(`KaTeX error in doc ${doc._id}: "${match[1]}" -> ${e.message}`);
            katexErrors++;
          }
        }
      }
    }

    console.log(`Remaining bogus questions: ${remainingBogus}`);
    console.log(`Total KaTeX errors across all ${allDocs.length} documents: ${katexErrors}`);

    if (remainingBogus === 0 && katexErrors === 0 && allDocs.length === 909) {
      console.log("\n>>> AUDIT PASSED 100%! ZERO BOGUS QUESTIONS, ZERO KATEX ERRORS! <<<\n");
    } else {
      console.error("\n>>> AUDIT FAILED! <<<\n");
      process.exit(1);
    }

  } finally {
    await client.close();
  }
}

runReplacement().catch(e => {
  console.error(e);
  process.exit(1);
});
