const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

const part1 = require("./data_jee_psl_part1.js"); // Elasticity
const part2 = require("./data_jee_psl_part2.js"); // Fluid mechanics
const part3 = require("./data_jee_psl_part3.js"); // Surface tension
const part4 = require("./data_jee_psl_part4.js"); // Thermal expansion
const part5 = require("./data_jee_psl_part5.js"); // Stefan's law

const subtopicsData = [
  {
    subTopic: "Elasticity (Hooke's law, Young's modulus)",
    data: part1
  },
  {
    subTopic: "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    data: part2
  },
  {
    subTopic: "Surface tension, surface energy, and capillarity",
    data: part3
  },
  {
    subTopic: "Thermal expansion and calorimetry",
    data: part4
  },
  {
    subTopic: "Stefan's law of radiation",
    data: part5
  }
];

async function replaceAll() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  console.log("=== STEP 1: Updating Preserved MCQs (setting marks & KaTeX fix) ===");
  // Fix 6a98e3f6910bb37b0e557f98
  const fixedViscosityDoc = {
    options: [
      "$\\text{Pa}\\cdot\\text{s}$",
      "$\\text{N}\\cdot\\text{s/m}^2$",
      "$\\text{kg}/(\\text{m}\\cdot\\text{s})$",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Viscosity (dynamic viscosity, $\\eta$) is defined by Newton's law of viscosity as the ratio of shear stress $\\tau$ to velocity gradient $\\frac{dv}{dy}$: $\\tau = \\eta \\frac{dv}{dy}$. The unit of shear stress is $\\text{Pa}$ or $\\text{N/m}^2$. The unit of $\\frac{dv}{dy}$ is $(\\text{m/s})/\\text{m} = \\text{s}^{-1}$. Therefore, the unit of $\\eta$ is $\\text{Pa}\\cdot\\text{s}$ or $\\text{N}\\cdot\\text{s/m}^2$. Since $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$, $1\\text{ N}\\cdot\\text{s/m}^2 = 1\\text{ kg}/(\\text{m}\\cdot\\text{s})$. Thus, all given options represent the correct SI unit of dynamic viscosity."
  };

  await db.collection("questionBank").updateOne(
    { _id: new ObjectId("6a98e3f6910bb37b0e557f98") },
    { $set: fixedViscosityDoc }
  );
  console.log("Updated KaTeX formatting for 6a98e3f6910bb37b0e557f98");

  // Set marks = 4, negativeMarks = 1 for all preserved MCQs
  const preservedUpdateResult = await db.collection("questionBank").updateMany(
    { chapter: "Properties of Solids and Liquids", subject: "Physics", source: "Question Bank" },
    { $set: { marks: 4, negativeMarks: 1 } }
  );
  console.log(`Updated marks on preserved MCQs: ${preservedUpdateResult.modifiedCount} modified.`);

  console.log("\n=== STEP 2: In-place replacement of 265 bogus questions ===");
  let totalReplaced = 0;

  for (const st of subtopicsData) {
    console.log(`\nProcessing subtopic: "${st.subTopic}"`);

    // Fetch existing fake docs in this subtopic
    const fakeDocs = await db.collection("questionBank").find({
      chapter: "Properties of Solids and Liquids",
      subject: "Physics",
      subTopic: st.subTopic,
      source: { $ne: "Question Bank" }
    }).toArray();

    console.log(`Found ${fakeDocs.length} fake docs to replace in "${st.subTopic}"`);

    // Group fake docs by type: ASSERTION_REASON (26), MCQ (7), NUMERICAL (20)
    const arFake = fakeDocs.filter(d => d.type === "ASSERTION_REASON").sort((a, b) => a._id.toString().localeCompare(b._id.toString()));
    const mcqFake = fakeDocs.filter(d => d.type === "MCQ").sort((a, b) => a._id.toString().localeCompare(b._id.toString()));
    const numFake = fakeDocs.filter(d => d.type === "NUMERICAL").sort((a, b) => a._id.toString().localeCompare(b._id.toString()));

    // Group incoming data by type
    const arNew = st.data.filter(d => d.type === "ASSERTION_REASON");
    const mcqNew = st.data.filter(d => d.type === "MCQ" || d.type === "MULTIPLE_CHOICE");
    const numNew = st.data.filter(d => d.type === "NUMERICAL");

    console.log(`Counts check:
      AR: fake=${arFake.length}, new=${arNew.length}
      MCQ: fake=${mcqFake.length}, new=${mcqNew.length}
      NUM: fake=${numFake.length}, new=${numNew.length}`);

    if (arFake.length !== arNew.length || mcqFake.length !== mcqNew.length || numFake.length !== numNew.length) {
      throw new Error(`Type count mismatch in subtopic "${st.subTopic}"! Aborting.`);
    }

    // Replace AR
    for (let i = 0; i < arFake.length; i++) {
      const doc = arFake[i];
      const newQ = arNew[i];
      await db.collection("questionBank").updateOne(
        { _id: doc._id },
        {
          $set: {
            question: newQ.question,
            options: newQ.options,
            correctAnswer: newQ.correctAnswer,
            explanation: newQ.explanation,
            type: "ASSERTION_REASON",
            questionType: "Assertion–Reasoning",
            difficulty: newQ.difficulty,
            source: "JEE Mains",
            marks: 4,
            negativeMarks: 1,
            subject: "Physics",
            chapter: "Properties of Solids and Liquids",
            subTopic: st.subTopic,
            updatedAt: new Date()
          }
        }
      );
      totalReplaced++;
    }

    // Replace MCQ
    for (let i = 0; i < mcqFake.length; i++) {
      const doc = mcqFake[i];
      const newQ = mcqNew[i];
      await db.collection("questionBank").updateOne(
        { _id: doc._id },
        {
          $set: {
            question: newQ.question,
            options: newQ.options,
            correctAnswer: newQ.correctAnswer,
            explanation: newQ.explanation,
            type: "MCQ",
            questionType: "MCQ (Multiple Choice Question)",
            difficulty: newQ.difficulty,
            source: "JEE Mains",
            marks: 4,
            negativeMarks: 1,
            subject: "Physics",
            chapter: "Properties of Solids and Liquids",
            subTopic: st.subTopic,
            updatedAt: new Date()
          }
        }
      );
      totalReplaced++;
    }

    // Replace NUMERICAL
    for (let i = 0; i < numFake.length; i++) {
      const doc = numFake[i];
      const newQ = numNew[i];
      await db.collection("questionBank").updateOne(
        { _id: doc._id },
        {
          $set: {
            question: newQ.question,
            options: [],
            correctAnswer: newQ.correctAnswer,
            explanation: newQ.explanation,
            type: "NUMERICAL",
            questionType: "Numerical",
            difficulty: newQ.difficulty,
            source: "JEE Mains",
            marks: 4,
            negativeMarks: 1,
            subject: "Physics",
            chapter: "Properties of Solids and Liquids",
            subTopic: st.subTopic,
            updatedAt: new Date()
          }
        }
      );
      totalReplaced++;
    }
  }

  console.log(`\nSuccessfully replaced ${totalReplaced} fake questions with authentic JEE Main questions!`);

  console.log("\n=== STEP 3: Updating and Remapping Test Papers ===");

  // Retrieve all 316 questions now in questionBank for this chapter
  const allChapterQuestions = await db.collection("questionBank").find({
    chapter: "Properties of Solids and Liquids",
    subject: "Physics"
  }).toArray();

  console.log(`Total questions in chapter now: ${allChapterQuestions.length}`);

  // 3.1 JEE Main Chapter Test: 20 MCQs (4 from each subtopic) + 5 NUMs (1 from each subtopic)
  const jeeChapterTest = await db.collection("testPapers").findOne({
    testId: "jee-mains-CHAPTER-Physics-Properties-of-Solids-and-Liquids-11"
  });

  if (jeeChapterTest) {
    const selectedMCQIds = [];
    const selectedNUMIds = [];

    for (const st of subtopicsData) {
      const stQuestions = allChapterQuestions.filter(q => q.subTopic === st.subTopic);
      const stMCQs = stQuestions.filter(q => q.type === "MCQ");
      const stNUMs = stQuestions.filter(q => q.type === "NUMERICAL");

      // Pick 4 MCQs
      for (let i = 0; i < 4 && i < stMCQs.length; i++) {
        selectedMCQIds.push(stMCQs[i]._id.toString());
      }
      // Pick 1 NUM
      if (stNUMs.length > 0) {
        selectedNUMIds.push(stNUMs[0]._id.toString());
      }
    }

    const finalJEEChapterQuestions = [...selectedMCQIds, ...selectedNUMIds];
    console.log(`JEE Main Chapter Test: Selected ${selectedMCQIds.length} MCQs and ${selectedNUMIds.length} NUMs (Total ${finalJEEChapterQuestions.length})`);

    await db.collection("testPapers").updateOne(
      { _id: jeeChapterTest._id },
      {
        $set: {
          questions: finalJEEChapterQuestions,
          standardQuestionsCount: finalJEEChapterQuestions.length,
          totalMarks: 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log("Updated jee-mains-CHAPTER-Physics-Properties-of-Solids-and-Liquids-11 test paper.");
  }

  // 3.2 JEE Main Subtopic Test: Elasticity
  const jeeElasticityTest = await db.collection("testPapers").findOne({
    testId: "jee-mains-SUBTOPIC-Physics-Elasticity-(Hooke’s-law,-Young’s-modulus)"
  });
  if (jeeElasticityTest) {
    const elQs = allChapterQuestions.filter(q => q.subTopic === "Elasticity (Hooke's law, Young's modulus)");
    const elMCQs = elQs.filter(q => q.type === "MCQ");
    const elARs = elQs.filter(q => q.type === "ASSERTION_REASON");
    const elNUMs = elQs.filter(q => q.type === "NUMERICAL");

    // 10 MCQ + 10 AR + 5 NUM = 25 questions
    const selected = [
      ...elMCQs.slice(0, 10).map(q => q._id.toString()),
      ...elARs.slice(0, 10).map(q => q._id.toString()),
      ...elNUMs.slice(0, 5).map(q => q._id.toString())
    ];

    await db.collection("testPapers").updateOne(
      { _id: jeeElasticityTest._id },
      {
        $set: {
          questions: selected,
          standardQuestionsCount: selected.length,
          totalMarks: 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated jee-mains-SUBTOPIC-Physics-Elasticity-(Hooke’s-law,-Young’s-modulus) with ${selected.length} questions.`);
  }

  // 3.3 JEE Main Subtopic Test: Fluid mechanics
  const jeeFluidTest = await db.collection("testPapers").findOne({
    testId: "jee-mains-SUBTOPIC-Physics-fluid-mechanics-(Pascal’s-law,-Bernoulli’s-principle,-viscosity)"
  });
  if (jeeFluidTest) {
    const flQs = allChapterQuestions.filter(q => q.subTopic === "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)");
    const flMCQs = flQs.filter(q => q.type === "MCQ");
    const flARs = flQs.filter(q => q.type === "ASSERTION_REASON");
    const flNUMs = flQs.filter(q => q.type === "NUMERICAL");

    // 10 MCQ + 10 AR + 5 NUM = 25 questions
    const selected = [
      ...flMCQs.slice(0, 10).map(q => q._id.toString()),
      ...flARs.slice(0, 10).map(q => q._id.toString()),
      ...flNUMs.slice(0, 5).map(q => q._id.toString())
    ];

    await db.collection("testPapers").updateOne(
      { _id: jeeFluidTest._id },
      {
        $set: {
          questions: selected,
          standardQuestionsCount: selected.length,
          totalMarks: 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated jee-mains-SUBTOPIC-Physics-fluid-mechanics-(Pascal’s-law,-Bernoulli’s-principle,-viscosity) with ${selected.length} questions.`);
  }

  // 3.4 NEET Chapter Test: 45 questions (all MCQ & AR, 0 NUM)
  const neetChapterTest = await db.collection("testPapers").findOne({
    testId: "neet-CHAPTER-Physics-Properties-of-Solids-and-Liquids-11"
  });
  if (neetChapterTest) {
    const selectedNEET = [];
    // 9 questions per subtopic from the 5 subtopics
    for (const st of subtopicsData) {
      const stQs = allChapterQuestions.filter(q => q.subTopic === st.subTopic && q.type !== "NUMERICAL");
      const chosen = stQs.slice(0, 9).map(q => q._id.toString());
      selectedNEET.push(...chosen);
    }
    await db.collection("testPapers").updateOne(
      { _id: neetChapterTest._id },
      {
        $set: {
          questions: selectedNEET,
          standardQuestionsCount: selectedNEET.length,
          totalMarks: 180,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated neet-CHAPTER-Physics-Properties-of-Solids-and-Liquids-11 with ${selectedNEET.length} MCQ/AR questions.`);
  }

  // 3.5 NEET Subtopic Tests: Elasticity & Fluid mechanics (45 questions all MCQ/AR)
  const neetElasticityTest = await db.collection("testPapers").findOne({
    testId: "neet-SUBTOPIC-Physics-Elasticity-(Hooke’s-law,-Young’s-modulus)"
  });
  if (neetElasticityTest) {
    const elQs = allChapterQuestions.filter(q => q.subTopic === "Elasticity (Hooke's law, Young's modulus)" && q.type !== "NUMERICAL");
    const chosen = elQs.slice(0, 45).map(q => q._id.toString());
    await db.collection("testPapers").updateOne(
      { _id: neetElasticityTest._id },
      {
        $set: {
          questions: chosen,
          standardQuestionsCount: chosen.length,
          totalMarks: 180,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated neet-SUBTOPIC-Physics-Elasticity-(Hooke’s-law,-Young’s-modulus) with ${chosen.length} questions.`);
  }

  const neetFluidTest = await db.collection("testPapers").findOne({
    testId: "neet-SUBTOPIC-Physics-fluid-mechanics-(Pascal’s-law,-Bernoulli’s-principle,-viscosity)"
  });
  if (neetFluidTest) {
    const flQs = allChapterQuestions.filter(q => q.subTopic === "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)" && q.type !== "NUMERICAL");
    const chosen = flQs.slice(0, 45).map(q => q._id.toString());
    await db.collection("testPapers").updateOne(
      { _id: neetFluidTest._id },
      {
        $set: {
          questions: chosen,
          standardQuestionsCount: chosen.length,
          totalMarks: 180,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated neet-SUBTOPIC-Physics-fluid-mechanics-(Pascal’s-law,-Bernoulli’s-principle,-viscosity) with ${chosen.length} questions.`);
  }

  await client.close();
  console.log("\n=== REPLACEMENT AND REMAPPING COMPLETED SUCCESSFULLY! ===");
}

replaceAll().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
