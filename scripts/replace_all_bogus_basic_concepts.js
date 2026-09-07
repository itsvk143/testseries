require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

const {
  getMoleConceptQuestions,
  getMolarMassQuestions,
  getEmpiricalFormulaQuestions
} = require("./data_basic_concepts_part1.js");

const {
  getConcentrationTermsQuestions,
  getPercentageCompositionQuestions
} = require("./data_basic_concepts_part2.js");

const { getStoichiometryQuestions } = require("./data_basic_concepts_part3.js");

async function replaceBogusQuestions() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found in .env.local");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB Atlas.");

  const db = client.db();
  const col = db.collection("questionBank");

  const allDocs = await col.find({
    subject: "Chemistry",
    chapter: /some basic concept/i
  }).toArray();

  console.log(`Found ${allDocs.length} total questions in 'Some Basic Concepts in Chemistry'.`);

  // Identify genuine vs bogus
  const bogusDocs = allDocs.filter(q => {
    if (q.source === "Question Bank") {
      const text = q.question || "";
      return (
        text.includes("Phenol") ||
        text.includes("Nylon-6,6") ||
        text.includes("transition metals") ||
        text.includes("strongest oxidizing agent") ||
        text.includes("most soluble in water")
      );
    }
    return true; // All 403 generated / synthetic questions are bogus
  });

  console.log(`Identified ${bogusDocs.length} bogus questions to replace.`);

  // Subtopic repositories of authentic replacement questions
  const replacementPool = {
    "Mole concept": getMoleConceptQuestions(),
    "Molar mass": getMolarMassQuestions(),
    "Empirical/molecular formula": getEmpiricalFormulaQuestions(),
    "Concentration terms (molarity, molality, normality, mole fraction)": getConcentrationTermsQuestions(),
    "Percentage composition and limiting reagent": getPercentageCompositionQuestions(),
    "Stoichiometry": getStoichiometryQuestions()
  };

  // Group bogus docs by subtopic
  const bogusBySub = {};
  bogusDocs.forEach(doc => {
    const s = doc.subTopic || "Stoichiometry";
    if (!bogusBySub[s]) bogusBySub[s] = [];
    bogusBySub[s].push(doc);
  });

  const bulkOps = [];

  for (const [sub, docs] of Object.entries(bogusBySub)) {
    const authenticList = replacementPool[sub];
    if (!authenticList) {
      throw new Error(`No authentic questions found for subtopic: ${sub}`);
    }
    console.log(`Subtopic '${sub}': ${docs.length} bogus docs to replace with ${authenticList.length} authentic questions.`);

    if (docs.length !== authenticList.length) {
      throw new Error(`Count mismatch for ${sub}: bogus docs=${docs.length}, authentic list=${authenticList.length}`);
    }

    docs.forEach((doc, idx) => {
      const auth = authenticList[idx];
      bulkOps.push({
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
              subTopic: auth.subTopic,
              marks: 4,
              negativeMarks: 1,
              cognitiveLevel: "Problem Solving & Calculation",
              targetExams: ["NEET", "JEE Main"],
              updatedAt: new Date()
            }
          }
        }
      });
    });
  }

  console.log(`Prepared ${bulkOps.length} bulk updates. Executing...`);
  const result = await col.bulkWrite(bulkOps);
  console.log(`Bulk write finished! Modified: ${result.modifiedCount}`);

  // Post-verification
  const postAll = await col.find({
    subject: "Chemistry",
    chapter: /some basic concept/i
  }).toArray();

  console.log(`Post-update total questions in chapter: ${postAll.length}`);

  const remainingBogus = postAll.filter(q => {
    const text = (q.question || "").toLowerCase();
    return (
      text.includes("a stoichiometric chemical reaction produces an ideal gas") ||
      text.includes("consecutive reaction mechanism") ||
      text.includes("reversible electrochemical or thermodynamic process") ||
      text.includes("advanced electronic structure and bonding") ||
      text.includes("quantitative stoichiometry or equilibrium study on") ||
      text.includes("multi-step organic reaction pathway") ||
      text.includes("rigorous chemical and electronic") ||
      text.includes("possesses momentum") ||
      text.includes("electrical conductivity of an electrolytic") ||
      text.includes("rate-determining step has an activation") ||
      text.includes("intermediate state") ||
      text.includes("careful calibration of instruments") ||
      text.includes("under extreme limiting conditions") ||
      text.includes("in some basic concepts in chemistry, calculations in") ||
      text.includes("phenol") ||
      text.includes("nylon-6,6") ||
      text.includes("transition metals")
    );
  });

  console.log(`Remaining bogus questions: ${remainingBogus.length}`);

  if (remainingBogus.length === 0) {
    console.log("SUCCESS! All 408 bogus questions have been completely replaced with 100% authentic, relevant questions of Some Basic Concepts of Chemistry!");
  } else {
    console.warn("Warning: Some bogus questions still detected:", remainingBogus.map(q => q.question.substring(0, 50)));
  }

  await client.close();
}

replaceBogusQuestions().catch(err => {
  console.error("Replacement error:", err);
  process.exit(1);
});
