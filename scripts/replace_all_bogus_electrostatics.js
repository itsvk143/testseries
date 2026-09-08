const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: '.env.local' });

const subTopics = [
  { name: "Capacitors", part: "./data_jee_electrostatics_part1.js", expectedReplacements: 196, expectedPreserved: 10 },
  { name: "Combination of capacitors and energy stored", part: "./data_jee_electrostatics_part2.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "Coulomb's law", part: "./data_jee_electrostatics_part3.js", expectedReplacements: 53, expectedPreserved: 12 },
  { name: "Dielectrics", part: "./data_jee_electrostatics_part4.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "Electric dipole and dipole moment", part: "./data_jee_electrostatics_part5.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "Electric field/flux", part: "./data_jee_electrostatics_part6.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "Equipotential surfaces", part: "./data_jee_electrostatics_part7.js", expectedReplacements: 53, expectedPreserved: 11 },
  { name: "Gauss's law", part: "./data_jee_electrostatics_part8.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "Potential energy", part: "./data_jee_electrostatics_part9.js", expectedReplacements: 53, expectedPreserved: 11 }
];

function sanitizeText(str) {
  if (!str) return str;
  return str
    .replace(/\\text\{\s*\\textmu\s*F\}/g, "\\mu\\text{F}")
    .replace(/\\text\{\s*\\textmu\s*C\}/g, "\\mu\\text{C}")
    .replace(/\\text\{\s*\\textmu\s*([A-Za-z]+)\}/g, "\\mu\\text{$1}")
    .replace(/\\textmu/g, "\\mu")
    .replace(/\\text\{\s*\\mu\s*([A-Za-z]+)\}/g, "\\mu\\text{$1}")
    .replace(/\\text\{\s*μ\s*F\}/g, "\\mu\\text{F}")
    .replace(/\\text\{\s*μF\}/g, "\\mu\\text{F}")
    .replace(/\\text\{\s*μ\s*([A-Za-z]+)\}/g, "\\mu\\text{$1}")
    .replace(/μF/g, "\\mu\\text{F}")
    .replace(/μC/g, "\\mu\\text{C}")
    .replace(/μ/g, "\\mu");
}

async function replaceAllElectrostatics() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found in environment!");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB Atlas.");

  const db = client.db("testseries");
  const col = db.collection("questionBank");

  let totalReplacedCount = 0;
  let totalPreservedStandardized = 0;

  for (const st of subTopics) {
    const data = require(path.join(__dirname, st.part));
    const docs = await col.find({ chapter: "Electrostatics", subject: "Physics", subTopic: st.name }).sort({ type: 1, _id: 1 }).toArray();

    const arDocs = docs.filter(d => d.type === "ASSERTION_REASON");
    const mcqDocs = docs.filter(d => d.type === "MCQ");
    const numDocs = docs.filter(d => d.type === "NUMERICAL");

    const preservedMCQ = mcqDocs.filter(d => d.source === "Question Bank");
    const bogusMCQ = mcqDocs.filter(d => d.source !== "Question Bank");

    const toReplace = [...arDocs, ...bogusMCQ, ...numDocs];

    if (toReplace.length !== data.length) {
      throw new Error(`Length mismatch for ${st.name}: toReplace=${toReplace.length}, data=${data.length}`);
    }

    const bulkOps = [];

    // 1. In-place replacement of bogus questions
    for (let i = 0; i < toReplace.length; i++) {
      const oldDoc = toReplace[i];
      const newQ = data[i];

      const setFields = {
        question: newQ.question,
        options: newQ.options,
        correctAnswer: newQ.correctAnswer,
        explanation: newQ.explanation,
        type: newQ.type,
        questionType: newQ.questionType,
        subTopic: newQ.subTopic,
        chapter: newQ.chapter,
        subject: newQ.subject,
        marks: 4,
        negativeMarks: 1,
        source: "JEE Main Question Bank",
        difficulty: oldDoc.difficulty || "Medium",
        updatedAt: new Date()
      };

      const unsetFields = {};
      if (newQ.type === 'NUMERICAL') {
        setFields.numericalAnswer = newQ.numericalAnswer;
      } else {
        unsetFields.numericalAnswer = "";
      }

      const updateOp = { $set: setFields };
      if (Object.keys(unsetFields).length > 0) {
        updateOp.$unset = unsetFields;
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: oldDoc._id },
          update: updateOp
        }
      });
    }

    // 2. Standardize & clean genuine QB MCQs
    for (const doc of preservedMCQ) {
      let q = doc.question;
      let opts = doc.options || [];
      let exp = doc.explanation || "";

      if (doc._id.toString() === "6a98e46f910bb37b0e558011") {
        q = "A charge of $+6.0\\mu\\text{C}$ exerts an electrostatic force of $7.2\\text{ N}$ on a charge $Q$. If the distance between them is $0.1\\text{ m}$, what is the magnitude of charge $Q$?";
        opts = ["$1.33\\mu\\text{C}$", "$2.67\\mu\\text{C}$", "$0.67\\mu\\text{C}$", "$13.3\\mu\\text{C}$"];
        exp = "By Coulomb's law, $F = \\frac{k q_1 Q}{r^2} \\implies Q = \\frac{F r^2}{k q_1} = \\frac{(7.2)(0.1)^2}{(9 \\times 10^9)(6.0 \\times 10^{-6})} = \\frac{0.072}{54000} = 1.33 \\times 10^{-6}\\text{ C} = 1.33\\mu\\text{C}$.";
      } else {
        q = sanitizeText(q);
        opts = opts.map(o => sanitizeText(o));
        exp = sanitizeText(exp);
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: {
              question: q,
              options: opts,
              explanation: exp,
              marks: 4,
              negativeMarks: 1,
              updatedAt: new Date()
            }
          }
        }
      });
    }

    console.log(`Executing bulkWrite for "${st.name}" (${bulkOps.length} ops: ${toReplace.length} replacements, ${preservedMCQ.length} standardizations)...`);
    const res = await col.bulkWrite(bulkOps);
    console.log(`  -> Matched: ${res.matchedCount}, Modified: ${res.modifiedCount}`);

    totalReplacedCount += toReplace.length;
    totalPreservedStandardized += preservedMCQ.length;
  }

  console.log(`\n========================================`);
  console.log(`Replacement & Standardization Complete!`);
  console.log(`Total questions replaced in-place: ${totalReplacedCount}`);
  console.log(`Total genuine questions standardized: ${totalPreservedStandardized}`);
  console.log(`Total Electrostatics questions in DB: ${totalReplacedCount + totalPreservedStandardized}`);
  console.log(`========================================\n`);

  await client.close();
}

replaceAllElectrostatics().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
