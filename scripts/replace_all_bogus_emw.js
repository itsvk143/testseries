const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: '.env.local' });

const subTopics = [
  { name: "Displacement current", part: "./data_jee_emw_part1.js" },
  { name: "Transverse nature of EM waves", part: "./data_jee_emw_part2.js" },
  { name: "Energy density and Poynting vector", part: "./data_jee_emw_part3.js" },
  { name: "EM spectrum", part: "./data_jee_emw_part4.js" }
];

const flawedQBFixes = {
  '6a98e4f1910bb37b0e5580c1': {
    question: "For an electromagnetic wave traveling in vacuum, the electric field $\\vec{E}$ and magnetic field $\\vec{B}$ are related by $\\vec{E} = c (\\vec{B} \\times \\hat{k})$, where $c$ is the speed of light and $\\hat{k}$ is the unit vector in the direction of propagation. What does this relation imply about the orientation of $\\vec{E}$ and $\\vec{B}$?",
    options: [
      "They are parallel to each other.",
      "They are perpendicular to each other and to the direction of propagation.",
      "They are parallel to the direction of propagation.",
      "They are perpendicular to each other but parallel to the direction of propagation."
    ],
    correctAnswer: 1,
    explanation: "The cross product $\\vec{B} \\times \\hat{k}$ yields a vector perpendicular to both $\\vec{B}$ and $\\hat{k}$. Therefore, $\\vec{E}$ must be perpendicular to both the magnetic field $\\vec{B}$ and the wave propagation vector $\\hat{k}$."
  },
  '6a98e4f5910bb37b0e5580e2': {
    question: "A plane electromagnetic wave is propagating in vacuum. The electric field is given by $E_y(z, t) = E_0 \\sin(kz - \\omega t)$. Which of the following statements about the displacement current density is correct?",
    options: [
      "It is zero everywhere.",
      "It is proportional to $E_0 \\omega \\cos(kz - \\omega t)$ and exists in the region.",
      "It is equal to the conduction current, which is non-zero.",
      "It is proportional to $E_0 k \\sin(kz - \\omega t)$."
    ],
    correctAnswer: 1,
    explanation: "In vacuum, conduction current is zero. Since the electric field varies with time, there is a displacement current density $j_d = \\varepsilon_0 \\frac{\\partial E_y}{\\partial t} = -\\varepsilon_0 E_0 \\omega \\cos(kz - \\omega t)$, whose magnitude is proportional to $E_0 \\omega \\cos(kz - \\omega t)$."
  },
  '6a98e4f5910bb37b0e5580db': {
    question: "Consider a parallel plate capacitor with circular plates of radius $R$ and separation $d$. A time-varying voltage $V(t) = V_0 \\sin(\\omega t)$ is applied across the plates. What is the maximum displacement current $I_{d,\\text{max}}$ between the plates?",
    options: [
      "$I_{d,\\text{max}} = \\frac{\\varepsilon_0 \\pi R^2 V_0 \\omega}{d}$",
      "$I_{d,\\text{max}} = \\frac{\\varepsilon_0 V_0 \\omega}{d}$",
      "$I_{d,\\text{max}} = \\frac{\\pi R^2 V_0 \\omega}{\\varepsilon_0 d}$",
      "$I_{d,\\text{max}} = \\frac{\\varepsilon_0 \\pi R^2 V_0}{\\omega d}$"
    ],
    correctAnswer: 0,
    explanation: "The electric field between the plates is $E(t) = \\frac{V_0 \\sin(\\omega t)}{d}$. Electric flux is $\\Phi_E(t) = E(t) (\\pi R^2) = \\frac{\\pi R^2 V_0 \\sin(\\omega t)}{d}$. Displacement current is $I_d(t) = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\frac{\\varepsilon_0 \\pi R^2 V_0 \\omega \\cos(\\omega t)}{d}$. Peak value is $I_{d,\\text{max}} = \\frac{\\varepsilon_0 \\pi R^2 V_0 \\omega}{d}$."
  },
  '6a98fa62b89acd4c6047d1ab': {
    question: "An electromagnetic wave travels through a vacuum. If the intensity of the wave is $I = 2.0\\,\\text{W/m}^2$, what is the RMS value of the electric field? (Take $\\varepsilon_0 \\approx 8.85 \\times 10^{-12}\\,\\text{C}^2/(\\text{N}\\cdot\\text{m}^2)$, $c \\approx 3 \\times 10^8\\,\\text{m/s}$)",
    options: [
      "$19.4\\,\\text{V/m}$",
      "$27.4\\,\\text{V/m}$",
      "$38.8\\,\\text{V/m}$",
      "$54.8\\,\\text{V/m}$"
    ],
    correctAnswer: 1,
    explanation: "Intensity is related to the RMS electric field by $I = c \\varepsilon_0 E_{\\text{rms}}^2$. Therefore, $E_{\\text{rms}} = \\sqrt{\\frac{I}{c \\varepsilon_0}} = \\sqrt{\\frac{2.0}{(3 \\times 10^8)(8.85 \\times 10^{-12})}} = \\sqrt{\\frac{2.0}{2.655 \\times 10^{-3}}} = \\sqrt{753.3} \\approx 27.4\\,\\text{V/m}$."
  },
  '6a98e4f5910bb37b0e5580da': {
    question: "A parallel plate capacitor with plate area $A$ and separation $d$ is connected to a time-varying AC voltage source. If the electric field between the plates is $E(t)$, what is the displacement current through the capacitor?",
    options: [
      "$I_d = \\varepsilon_0 A \\frac{dE}{dt}$",
      "$I_d = \\frac{\\varepsilon_0 A}{d}\\frac{dE}{dt}$",
      "$I_d = \\frac{A}{\\varepsilon_0}\\frac{dE}{dt}$",
      "$I_d = \\varepsilon_0 E A$"
    ],
    correctAnswer: 0,
    explanation: "Electric flux through the plates is $\\Phi_E = E A$. By Maxwell's definition, the displacement current is $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\varepsilon_0 A \\frac{dE}{dt}$."
  },
  '6a98e4f5910bb37b0e5580de': {
    question: "If the electric flux through a cross-sectional area of $1.0\\,\\text{m}^2$ is changing at a rate of $10^3\\,\\text{V}\\cdot\\text{m/s}$, what is the magnitude of the displacement current density?",
    options: [
      "$10^3\\,\\text{A/m}^2$",
      "$10^3 / \\varepsilon_0\\,\\text{A/m}^2$",
      "$10^3 \\times \\varepsilon_0\\,\\text{A/m}^2$",
      "$10^{-3} \\times \\varepsilon_0\\,\\text{A/m}^2$"
    ],
    correctAnswer: 2,
    explanation: "Displacement current is $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\varepsilon_0 \\times 10^3\\,\\text{A}$. For a cross-sectional area $A = 1\\,\\text{m}^2$, displacement current density is $j_d = \\frac{I_d}{A} = 10^3 \\times \\varepsilon_0\\,\\text{A/m}^2$."
  },
  '6a98e4f1910bb37b0e5580c4': {
    question: "An electromagnetic wave with its electric field oscillating vertically is incident on an ideal linear polarizer. The wave is transmitted with full intensity without attenuation when the transmission axis of the polarizer is:",
    options: [
      "Vertical",
      "Horizontal",
      "At $45^\\circ$ to the vertical",
      "Parallel to the direction of wave propagation"
    ],
    correctAnswer: 0,
    explanation: "According to Malus's law $I = I_0 \\cos^2\\theta$, when the transmission axis is parallel to the direction of oscillation of the incident electric field ($\\theta = 0$), $\\cos(0) = 1$, and the light passes through with maximum intensity."
  },
  '6a98fa62b89acd4c6047d1a5': {
    question: "What is the average magnitude of the Poynting vector (intensity) for a plane electromagnetic wave with electric field amplitude $E_0 = 150\\,\\text{V/m}$ and magnetic field amplitude $B_0 = 5.0 \\times 10^{-7}\\,\\text{T}$ in vacuum? (Take $\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{H/m}$, $\\pi = 3.14$)",
    options: [
      "$30\\,\\text{W/m}^2$",
      "$60\\,\\text{W/m}^2$",
      "$40\\,\\text{W/m}^2$",
      "$15\\,\\text{W/m}^2$"
    ],
    correctAnswer: 0,
    explanation: "The average Poynting vector magnitude is $S_{\\text{avg}} = \\frac{E_0 B_0}{2\\mu_0} = \\frac{(150)(5.0 \\times 10^{-7})}{2 \\times (4\\pi \\times 10^{-7})} = \\frac{750}{8\\pi} \\approx \\frac{750}{25.12} \\approx 29.86\\,\\text{W/m}^2 \\approx 30\\,\\text{W/m}^2$."
  },
  '6a98fa62b89acd4c6047d1a9': {
    question: "Consider an electromagnetic wave with frequency $f = 100\\,\\text{MHz}$ and electric field amplitude $E_0 = 50\\,\\text{V/m}$. What is the total average energy density?",
    options: [
      "$1.11 \\times 10^{-8}\\,\\text{J/m}^3$",
      "$2.22 \\times 10^{-8}\\,\\text{J/m}^3$",
      "$5.55 \\times 10^{-9}\\,\\text{J/m}^3$",
      "$4.44 \\times 10^{-8}\\,\\text{J/m}^3$"
    ],
    correctAnswer: 0,
    explanation: "The total average energy density is $\\langle u \\rangle = \\frac{1}{2}\\varepsilon_0 E_0^2 = \\frac{1}{2}(8.85 \\times 10^{-12})(50)^2 = \\frac{1}{2}(8.85 \\times 10^{-12})(2500) \\approx 1.106 \\times 10^{-8}\\,\\text{J/m}^3 \\approx 1.11 \\times 10^{-8}\\,\\text{J/m}^3$."
  }
};

async function replaceAllEmw() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found in environment!");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB Atlas.");

  const db = client.db("testseries");
  const col = db.collection("questionBank");
  const testPapersColl = db.collection("testPapers");

  let totalReplacedCount = 0;
  let totalPreservedStandardized = 0;

  for (const st of subTopics) {
    const data = require(path.join(__dirname, st.part));
    const docs = await col.find({
      chapter: "Electromagnetic Waves",
      subject: "Physics",
      subTopic: st.name
    }).sort({ type: 1, _id: 1 }).toArray();

    const arDocs = docs.filter(d => d.type === "ASSERTION_REASON");
    const mcqDocs = docs.filter(d => d.type === "MCQ" || d.questionType?.includes("MCQ"));
    const numDocs = docs.filter(d => d.type === "NUMERICAL" || d.questionType === "Numerical");

    const preservedMCQ = mcqDocs.filter(d => d.source === "Question Bank");
    const bogusMCQ = mcqDocs.filter(d => d.source !== "Question Bank");

    const toReplace = [...arDocs, ...bogusMCQ, ...numDocs];

    console.log(`Subtopic "${st.name}": total=${docs.length}, toReplace=${toReplace.length}, preserved=${preservedMCQ.length}, data=${data.length}`);

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

    // 2. Standardize genuine QB MCQs
    for (const doc of preservedMCQ) {
      const idStr = doc._id.toString();
      const setFields = {
        marks: 4,
        negativeMarks: 1,
        updatedAt: new Date()
      };

      if (flawedQBFixes[idStr]) {
        const fix = flawedQBFixes[idStr];
        setFields.question = fix.question;
        setFields.options = fix.options;
        setFields.correctAnswer = fix.correctAnswer;
        setFields.explanation = fix.explanation;
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: setFields
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
  console.log(`Question Bank Replacement Complete!`);
  console.log(`Replaced in-place: ${totalReplacedCount}`);
  console.log(`Standardized genuine: ${totalPreservedStandardized}`);
  console.log(`Total EM Waves questions in DB: ${totalReplacedCount + totalPreservedStandardized}`);
  console.log(`========================================\n`);

  // --- PHASE 3: FIX TEST PAPERS ---
  console.log("🛠️ Rebuilding JEE Mains Test Papers...");

  // 1. Rebuild JEE Main Chapter Test: 'jee-mains-CHAPTER-Physics-Electromagnetic-Waves-12'
  const allEmw = await col.find({ chapter: "Electromagnetic Waves" }).toArray();
  const emwBySub = {
    "Displacement current": allEmw.filter(q => q.subTopic === "Displacement current"),
    "Transverse nature of EM waves": allEmw.filter(q => q.subTopic === "Transverse nature of EM waves"),
    "Energy density and Poynting vector": allEmw.filter(q => q.subTopic === "Energy density and Poynting vector"),
    "EM spectrum": allEmw.filter(q => q.subTopic === "EM spectrum")
  };

  // Select 20 MCQs (5 from each subtopic)
  const selectedMCQs = [];
  for (const st of Object.keys(emwBySub)) {
    const mcqs = emwBySub[st].filter(q => q.type === "MCQ");
    selectedMCQs.push(...mcqs.slice(0, 5));
  }

  // Select 5 Numericals (2 from Displacement, 1 from Transverse, 1 from Energy density, 1 from EM spectrum)
  const selectedNums = [
    ...emwBySub["Displacement current"].filter(q => q.type === "NUMERICAL").slice(0, 2),
    ...emwBySub["Transverse nature of EM waves"].filter(q => q.type === "NUMERICAL").slice(0, 1),
    ...emwBySub["Energy density and Poynting vector"].filter(q => q.type === "NUMERICAL").slice(0, 1),
    ...emwBySub["EM spectrum"].filter(q => q.type === "NUMERICAL").slice(0, 1)
  ];

  const chapterTestQuestions = [...selectedMCQs, ...selectedNums].map(q => q._id);
  console.log(`Assembled ${chapterTestQuestions.length} questions for JEE Main Chapter Test: 20 MCQs + 5 Numericals (ALL EM WAVES).`);

  await testPapersColl.updateOne(
    { testId: 'jee-mains-CHAPTER-Physics-Electromagnetic-Waves-12' },
    {
      $set: {
        questions: chapterTestQuestions,
        totalMarks: 100,
        standardQuestionsCount: 25,
        updatedAt: new Date()
      }
    }
  );
  console.log("✅ Updated 'jee-mains-CHAPTER-Physics-Electromagnetic-Waves-12' successfully!");

  // 2. Ensure JEE Mains Subtopic Tests have 20 MCQs/ARs + 5 Numericals belonging to that subtopic
  const subtopicTestIds = [
    { testId: 'jee-mains-SUBTOPIC-Physics-Displacement-current', subTopic: 'Displacement current' },
    { testId: 'jee-mains-SUBTOPIC-Physics-EM-spectrum', subTopic: 'EM spectrum' },
    { testId: 'jee-mains-SUBTOPIC-Physics-transverse-nature-of-EM-waves', subTopic: 'Transverse nature of EM waves' }
  ];

  for (const stInfo of subtopicTestIds) {
    const list = emwBySub[stInfo.subTopic];
    const mcqs = list.filter(q => q.type === "MCQ");
    const ars = list.filter(q => q.type === "ASSERTION_REASON");
    const nums = list.filter(q => q.type === "NUMERICAL");

    // Take 10 MCQs + 10 ARs + 5 Numericals = 25 questions
    const testQs = [
      ...mcqs.slice(0, 10),
      ...ars.slice(0, 10),
      ...nums.slice(0, 5)
    ].map(q => q._id);

    await testPapersColl.updateOne(
      { testId: stInfo.testId },
      {
        $set: {
          questions: testQs,
          totalMarks: 100,
          standardQuestionsCount: 25,
          updatedAt: new Date()
        }
      }
    );
    console.log(`✅ Updated '${stInfo.testId}' with 25 pure ${stInfo.subTopic} questions!`);
  }

  // 3. Fix 'neet-SUBTOPIC-Physics-significant-figures'
  const sigFigPaper = await testPapersColl.findOne({ testId: "neet-SUBTOPIC-Physics-significant-figures" });
  if (sigFigPaper) {
    const emwIds = new Set(allEmw.map(q => q._id.toString()));
    const cleanedQs = sigFigPaper.questions.filter(id => !emwIds.has(id.toString()));
    
    if (cleanedQs.length < 45) {
      const needed = 45 - cleanedQs.length;
      const pmReplacements = await col.find({
        chapter: "Physics and Measurement",
        _id: { $nin: cleanedQs.map(id => new ObjectId(id)) }
      }).limit(needed).toArray();

      for (const q of pmReplacements) {
        cleanedQs.push(q._id);
      }
    }

    await testPapersColl.updateOne(
      { testId: "neet-SUBTOPIC-Physics-significant-figures" },
      {
        $set: {
          questions: cleanedQs,
          updatedAt: new Date()
        }
      }
    );
    console.log(`✅ Cleaned up 'neet-SUBTOPIC-Physics-significant-figures' (now ${cleanedQs.length} pure Physics and Measurement questions)!`);
  }

  await client.close();
}

replaceAllEmw().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
