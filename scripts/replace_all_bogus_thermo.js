const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const p1 = require('./data_thermo_part1.js');
const p2 = require('./data_thermo_part2.js');
const p3 = require('./data_thermo_part3.js');

const subTopicDataMap = {
  "First law of thermodynamics": p1.getFirstLawQuestions(),
  "Work done in isothermal and adiabatic expansions": p1.getWorkExpansionsQuestions(),
  "Heat capacity (Cp, Cv) and relation Cp - Cv = R": p1.getHeatCapacityQuestions(),
  "Enthalpy (ΔH)": p2.getEnthalpyQuestions(),
  "Hess's law of constant heat summation": p2.getHessLawQuestions(),
  "Entropy (ΔS)": p2.getEntropyQuestions(),
  "Gibbs free energy (ΔG)": p3.getGibbsFreeEnergyQuestions(),
  "Spontaneity": p3.getSpontaneityQuestions()
};

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found");

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const collection = db.collection('questionBank');

  console.log("Connected to MongoDB Atlas. Checking Chemical Thermodynamics...");

  // 1. Fix the 3 legacy questions in Question Bank with broken LaTeX
  await collection.updateOne(
    { _id: new ObjectId('6a72f97ab0179203eda83959') },
    {
      $set: {
        question: "Given: $\\text{C(s, graphite)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{CO(g)}, \\Delta H = -110.5\\text{ kJ/mol}$ and $\\text{CO(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)}, \\Delta H = -283.0\\text{ kJ/mol}$. What is the heat of combustion of graphite to $\\text{CO}_2$?"
      }
    }
  );

  await collection.updateOne(
    { _id: new ObjectId('6a72f997b0179203eda83b03') },
    {
      $set: {
        explanation: "$\\Delta U = \\Delta H - \\Delta n_g RT = -285.8 - (-1.5 \\times 8.314 \\times 10^{-3} \\times 298) \\approx -285.8 + 3.718 = -282.1\\text{ kJ/mol}$. For $\\text{H}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{H}_2\\text{O(l)}$, $\\Delta n_g = 0 - 1.5 = -1.5$."
      }
    }
  );

  await collection.updateOne(
    { _id: new ObjectId('6a98fa97b89acd4c6047d281') },
    {
      $set: {
        question: "Given: (1) $\\text{S(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{SO}_2\\text{(g)}, \\Delta H_1 = -297\\text{ kJ}$ and (2) $2\\text{S(s)} + 3\\text{O}_2\\text{(g)} \\rightarrow 2\\text{SO}_3\\text{(g)}, \\Delta H_2 = -792\\text{ kJ}$. Calculate the enthalpy change for the reaction: $\\text{SO}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{SO}_3\\text{(g)}$."
      }
    }
  );
  console.log("Fixed 3 legacy Question Bank KaTeX issues.");

  // 2. Fetch all questions in Chemical Thermodynamics
  const allDocs = await collection.find({ subject: "Chemistry", chapter: "Chemical Thermodynamics" }).toArray();
  console.log(`Total questions in Chemical Thermodynamics: ${allDocs.length}`);

  const genuineDocs = allDocs.filter(q => q.source === "Question Bank");
  const bogusDocs = allDocs.filter(q => q.source !== "Question Bank");

  console.log(`Preserving ${genuineDocs.length} genuine questions.`);
  console.log(`Replacing ${bogusDocs.length} bogus synthetic questions in-place.`);

  const bulkOps = [];

  for (const [subTopic, newQuestions] of Object.entries(subTopicDataMap)) {
    const targetDocs = bogusDocs.filter(d => (d.subTopic || '').trim().toLowerCase() === subTopic.trim().toLowerCase());
    console.log(`Subtopic "${subTopic}": ${targetDocs.length} DB docs to replace, ${newQuestions.length} new authentic questions available.`);

    if (targetDocs.length !== newQuestions.length) {
      console.warn(`Mismatch in ${subTopic}: docs = ${targetDocs.length}, questions = ${newQuestions.length}`);
    }

    for (let i = 0; i < targetDocs.length; i++) {
      const dbDoc = targetDocs[i];
      const newQ = newQuestions[i];

      if (!newQ) {
        console.error(`Missing new question at index ${i} for subtopic ${subTopic}`);
        continue;
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: dbDoc._id },
          update: {
            $set: {
              question: newQ.question,
              options: newQ.options,
              correctAnswer: newQ.correctAnswer,
              correctOption: newQ.correctOption,
              explanation: newQ.explanation,
              subject: "Chemistry",
              chapter: "Chemical Thermodynamics",
              subTopic: subTopic,
              difficulty: newQ.difficulty || "Medium",
              questionType: newQ.questionType || "MCQ",
              type: newQ.type || "multiple-choice",
              source: "JEE Main & NEET Chapter Bank",
              targetExams: ["JEE Main", "NEET"],
              updatedAt: new Date()
            }
          }
        }
      });
    }
  }

  console.log(`Executing bulkWrite for ${bulkOps.length} updates...`);
  const result = await collection.bulkWrite(bulkOps);
  console.log("BulkWrite completed successfully!");
  console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);

  await client.close();
}

run().catch(err => {
  console.error("Failed:", err);
  process.exit(1);
});
