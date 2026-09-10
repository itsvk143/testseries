const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

const part1 = require("./data_jee_ktg_part1.js"); // Equation of state
const part2 = require("./data_jee_ktg_part2.js"); // Kinetic interpretation of temperature
const part3 = require("./data_jee_ktg_part3.js"); // Degrees of freedom
const part4 = require("./data_jee_ktg_part4.js"); // Law of equipartition of energy
const part5 = require("./data_jee_ktg_part5.js"); // Mean free path and molecular speeds

const subtopicsData = [
  {
    subTopic: "Equation of state",
    data: part1
  },
  {
    subTopic: "Kinetic interpretation of temperature",
    data: part2
  },
  {
    subTopic: "Degrees of freedom",
    data: part3
  },
  {
    subTopic: "Law of equipartition of energy",
    data: part4
  },
  {
    subTopic: "Mean free path and molecular speeds (rms, average, most probable)",
    data: part5
  }
];

async function replaceAll() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  console.log("=== STEP 1: Updating Preserved MCQs (KaTeX Fixes & Standard Marking) ===");

  // Fix 6a98fa05b89acd4c6047d0fb
  await db.collection("questionBank").updateOne(
    { _id: new ObjectId("6a98fa05b89acd4c6047d0fb") },
    {
      $set: {
        explanation: "The rms speed is given by $v_{rms} = \\sqrt{\\frac{3RT}{M}}$. Since $M_A = 4 M_B$, $$v_{rms, A} = \\sqrt{\\frac{3RT}{4M_B}} = \\frac{1}{2} \\sqrt{\\frac{3RT}{M_B}} = \\frac{1}{2} v_{rms, B}$$."
      }
    }
  );

  // Fix 6a98fa05b89acd4c6047d0fc
  await db.collection("questionBank").updateOne(
    { _id: new ObjectId("6a98fa05b89acd4c6047d0fc") },
    {
      $set: {
        options: [
          "$v_p = \\sqrt{\\frac{2RT}{M}}$",
          "$v_p = \\sqrt{\\frac{3RT}{M}}$",
          "$v_p = \\sqrt{\\frac{8RT}{\\pi M}}$",
          "$v_p = \\frac{1}{n \\pi d^2 \\sqrt{2}}$"
        ]
      }
    }
  );

  // Fix 6a98e3fc910bb37b0e557fb8
  await db.collection("questionBank").updateOne(
    { _id: new ObjectId("6a98e3fc910bb37b0e557fb8") },
    {
      $set: {
        question: "If 2 moles of an ideal gas are at a temperature of 300 K and occupy a volume of 0.04 $\\text{m}^3$, what is the pressure of the gas? (R = 8.314 $\\text{J}/(\\text{mol}\\cdot\\text{K})$)",
        options: [ "$62355\\text{ Pa}$", "$124710\\text{ Pa}$", "$249420\\text{ Pa}$", "$498840\\text{ Pa}$" ],
        explanation: "Using the ideal gas law, $P = \\frac{nRT}{V}$. Substituting the given values: $$P = \\frac{(2 \\text{ mol}) \\times (8.314 \\text{ J}/(\\text{mol}\\cdot\\text{K})) \\times (300 \\text{ K})}{0.04 \\text{ m}^3} = 249420 \\text{ Pa}$$."
      }
    }
  );

  // Fix 6a98e3fc910bb37b0e557fba
  await db.collection("questionBank").updateOne(
    { _id: new ObjectId("6a98e3fc910bb37b0e557fba") },
    {
      $set: {
        options: [
          "$0.0821 \\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$",
          "$8.314 \\text{ J}/(\\text{mol}\\cdot\\text{K})$",
          "$62.36 \\text{ L}\\cdot\\text{Torr}/(\\text{mol}\\cdot\\text{K})$",
          "$1.987 \\text{ cal}/(\\text{mol}\\cdot\\text{K})$"
        ],
        explanation: "The universal gas constant R has a value of approximately $8.314 \\text{ J}/(\\text{mol}\\cdot\\text{K})$ in SI units. The other options represent R in different unit systems."
      }
    }
  );

  console.log("Applied specific KaTeX fixes on preserved questions.");

  // Set marks: 4, negativeMarks: 1 for all 52 preserved MCQs
  const preservedRes = await db.collection("questionBank").updateMany(
    { chapter: "Kinetic Theory of Gases", subject: "Physics", source: "Question Bank" },
    { $set: { marks: 4, negativeMarks: 1 } }
  );
  console.log(`Updated marks on preserved MCQs: ${preservedRes.modifiedCount} modified.`);

  console.log("\n=== STEP 2: In-place replacement of 265 bogus questions ===");
  let totalReplaced = 0;

  for (const st of subtopicsData) {
    console.log(`\nProcessing subtopic: "${st.subTopic}"`);

    // Fetch existing fake docs in this subtopic
    const fakeDocs = await db.collection("questionBank").find({
      chapter: "Kinetic Theory of Gases",
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
            chapter: "Kinetic Theory of Gases",
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
            chapter: "Kinetic Theory of Gases",
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
            chapter: "Kinetic Theory of Gases",
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

  // Retrieve all 317 questions in questionBank for this chapter
  const allChapterQuestions = await db.collection("questionBank").find({
    chapter: "Kinetic Theory of Gases",
    subject: "Physics"
  }).toArray();

  console.log(`Total questions in chapter now: ${allChapterQuestions.length}`);

  // 3.1 JEE Main Chapter Test: 20 MCQs (4 from each subtopic) + 5 NUMs (1 from each subtopic)
  const jeeChapterTest = await db.collection("testPapers").findOne({
    testId: "jee-mains-CHAPTER-Physics-Kinetic-Theory-of-Gases-11"
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
    console.log("Updated jee-mains-CHAPTER-Physics-Kinetic-Theory-of-Gases-11 test paper.");
  }

  // Helper for subtopic test papers
  async function updateSubtopicTest(testId, subTopicName, totalQs, isNeet) {
    const test = await db.collection("testPapers").findOne({ testId });
    if (!test) return;

    const stQs = allChapterQuestions.filter(q => q.subTopic === subTopicName);
    let selected = [];

    if (isNeet) {
      // NEET tests: only MCQ and AR, no numericals
      const validQs = stQs.filter(q => q.type !== "NUMERICAL");
      selected = validQs.slice(0, totalQs).map(q => q._id.toString());
    } else {
      // JEE subtopic: 10 MCQ + 10 AR + 5 NUM = 25
      const mcqs = stQs.filter(q => q.type === "MCQ").slice(0, 10);
      const ars = stQs.filter(q => q.type === "ASSERTION_REASON").slice(0, 10);
      const nums = stQs.filter(q => q.type === "NUMERICAL").slice(0, 5);
      selected = [...mcqs, ...ars, ...nums].map(q => q._id.toString());
    }

    await db.collection("testPapers").updateOne(
      { _id: test._id },
      {
        $set: {
          questions: selected,
          standardQuestionsCount: selected.length,
          totalMarks: isNeet ? 180 : 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Updated test [${testId}] with ${selected.length} questions.`);
  }

  // 3.2 JEE Main Subtopic Tests
  await updateSubtopicTest("jee-mains-SUBTOPIC-Physics-Equation-of-state", "Equation of state", 25, false);
  await updateSubtopicTest("jee-mains-SUBTOPIC-Physics-kinetic-interpretation-of-temperature", "Kinetic interpretation of temperature", 25, false);
  await updateSubtopicTest("jee-mains-SUBTOPIC-Physics-degrees-of-freedom", "Degrees of freedom", 25, false);

  // 3.3 NEET Chapter Test: 45 questions (all MCQ/AR, 9 from each of the 5 subtopics)
  const neetChapterTest = await db.collection("testPapers").findOne({
    testId: "neet-CHAPTER-Physics-Kinetic-Theory-of-Gases-11"
  });
  if (neetChapterTest) {
    const selectedNEET = [];
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
    console.log(`Updated neet-CHAPTER-Physics-Kinetic-Theory-of-Gases-11 with ${selectedNEET.length} MCQ/AR questions.`);
  }

  // 3.4 NEET Subtopic Tests
  await updateSubtopicTest("neet-SUBTOPIC-Physics-Equation-of-state", "Equation of state", 45, true);
  await updateSubtopicTest("neet-SUBTOPIC-Physics-kinetic-interpretation-of-temperature", "Kinetic interpretation of temperature", 45, true);
  await updateSubtopicTest("neet-SUBTOPIC-Physics-degrees-of-freedom", "Degrees of freedom", 45, true);

  await client.close();
  console.log("\n=== REPLACEMENT AND REMAPPING COMPLETED SUCCESSFULLY! ===");
}

replaceAll().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
