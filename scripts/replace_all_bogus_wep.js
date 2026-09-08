require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

const subtopicFiles = {
  "Kinetic/potential energy": './data_jee_wep_part1.js',
  "Elastic and inelastic collisions": './data_jee_wep_part2.js',
  "Vertical circular motion": './data_jee_wep_part3.js',
  "Conservation of mechanical energy": './data_jee_wep_part4.js',
  "Power and variable force": './data_jee_wep_part5.js',
  "Conservative forces and potential energy": './data_jee_wep_part6.js',
  "Work-energy theorem": './data_jee_wep_part7.js'
};

const genuineRepairs = {
  '6a98e398910bb37b0e557f1c': {
    explanation: "The potential energy stored in a compressed spring is given by:\n$$U = \\frac{1}{2} k x^2$$\nGiven $U = 10\\text{ J}$ and $x = 0.1\\text{ m}$:\n$$10 = \\frac{1}{2} k (0.1)^2$$\n$$k = \\frac{2 \\times 10}{(0.1)^2} = \\frac{20}{0.01} = 2000\\text{ N/m}$$"
  },
  '6a98e398910bb37b0e557f20': {
    question: "A particle is subjected to a force $F = (10x + 2)\\text{ N}$, where $x$ is in meters. What is the work done by this force as the particle moves from $x = 1\\text{ m}$ to $x = 3\\text{ m}$?",
    options: [
      "38 J",
      "44 J",
      "22 J",
      "11 J"
    ],
    correctAnswer: 1,
    explanation: "The work done by a variable force is:\n$$W = \\int_{x_1}^{x_2} F(x)\\,dx = \\int_{1}^{3} (10x + 2)\\,dx = [5x^2 + 2x]_1^3$$\nEvaluating at the limits:\n$$W = (5(3^2) + 2(3)) - (5(1^2) + 2(1)) = (45 + 6) - (5 + 2) = 51 - 7 = 44\\text{ J}$$"
  },
  '6a98fa34b89acd4c6047d12c': {
    question: "A variable force $F = (2t + 3)\\text{ N}$ acts on a particle of mass $2\\text{ kg}$, initially at rest. What is the power delivered by the force at $t = 4\\text{ seconds}$?",
    options: [
      "140 W",
      "160 W",
      "180 W",
      "154 W"
    ],
    correctAnswer: 3,
    explanation: "Acceleration of the particle is:\n$$a(t) = \\frac{F(t)}{m} = \\frac{2t + 3}{2} = t + 1.5\\text{ m/s}^2$$\nVelocity as a function of time:\n$$v(t) = \\int_0^t (t' + 1.5)\\,dt' = \\frac{t^2}{2} + 1.5t$$\nAt $t = 4\\text{ s}$:\n$$v(4) = \\frac{4^2}{2} + 1.5(4) = 8 + 6 = 14\\text{ m/s}$$\n$$F(4) = 2(4) + 3 = 11\\text{ N}$$\nPower delivered at $t = 4\\text{ s}$ is:\n$$P(4) = F(4) \\cdot v(4) = 11\\text{ N} \\times 14\\text{ m/s} = 154\\text{ W}$$"
  },
  '6a98fa34b89acd4c6047d12d': {
    question: "A force $F = 6x^2\\text{ N}$ acts on an object along the x-axis. Calculate the work done by the force when the object moves from $x = 2\\text{ m}$ to $x = 4\\text{ m}$.",
    options: [
      "100 J",
      "112 J",
      "120 J",
      "130 J"
    ],
    correctAnswer: 1,
    explanation: "Work done by a variable force is:\n$$W = \\int_{x_1}^{x_2} F(x)\\,dx = \\int_{2}^{4} 6x^2\\,dx = [2x^3]_2^4 = 2(4^3 - 2^3) = 2(64 - 8) = 2 \\times 56 = 112\\text{ J}$$"
  },
  '6a98fa34b89acd4c6047d130': {
    question: "A force $F = (3t^2 + 2)\\text{ N}$ acts on a body of mass $1\\text{ kg}$. If the body starts from rest, find the velocity of the body at $t = 2\\text{ seconds}$.",
    options: [
      "10 m/s",
      "12 m/s",
      "14 m/s",
      "16 m/s"
    ],
    correctAnswer: 1,
    explanation: "Acceleration of the body is:\n$$a(t) = \\frac{F(t)}{m} = \\frac{3t^2 + 2}{1} = 3t^2 + 2\\text{ m/s}^2$$\nIntegrating acceleration to find velocity:\n$$v(t) = \\int_0^t (3t'^2 + 2)\\,dt' = [t'^3 + 2t']_0^t = t^3 + 2t$$\nAt $t = 2\\text{ s}$:\n$$v(2) = 2^3 + 2(2) = 8 + 4 = 12\\text{ m/s}$$"
  },
  '6a98fa34b89acd4c6047d131': {
    question: "A block of mass $4\\text{ kg}$ is pulled along a rough horizontal surface by a force $F = (4x + 2)\\text{ N}$. Calculate the work done by this applied force as the block moves from $x = 1\\text{ m}$ to $x = 5\\text{ m}$.",
    options: [
      "40 J",
      "48 J",
      "56 J",
      "64 J"
    ],
    correctAnswer: 2,
    explanation: "The work done by the applied force $F(x)$ is:\n$$W_F = \\int_{1}^{5} (4x + 2)\\,dx = [2x^2 + 2x]_1^5 = (2(25) + 2(5)) - (2(1) + 2(1)) = (50 + 10) - (2 + 2) = 60 - 4 = 56\\text{ J}$$"
  },
  '6a98fa34b89acd4c6047d132': {
    question: "A particle's position is given by $x(t) = t^3 - 6t^2 + 5t$, where $x$ is in meters and $t$ is in seconds. If the mass of the particle is $8\\text{ kg}$, find the work done by the net force during the time interval $0 \\le t \\le 3\\text{ s}$.",
    options: [
      "-18 J",
      "-27 J",
      "-36 J",
      "-45 J"
    ],
    correctAnswer: 2,
    explanation: "Velocity is the derivative of position:\n$$v(t) = \\frac{dx}{dt} = 3t^2 - 12t + 5$$\nAt $t = 0\\text{ s}$: $v_i = v(0) = 5\\text{ m/s}$.\nAt $t = 3\\text{ s}$: $v_f = v(3) = 3(3^2) - 12(3) + 5 = 27 - 36 + 5 = -4\\text{ m/s}$.\nBy the work-energy theorem:\n$$W = \\Delta K = \\frac{1}{2}m(v_f^2 - v_i^2) = \\frac{1}{2}(8)((-4)^2 - 5^2) = 4(16 - 25) = 4(-9) = -36\\text{ J}$$"
  },
  '6a98fa34b89acd4c6047d134': {
    question: "A particle is acted upon by a force $F = -kx$, where $k = 10\\text{ N/m}$. If the particle moves from $x = 3\\text{ m}$ to $x = 6\\text{ m}$, what is the work done by the force?",
    options: [
      "-105 J",
      "-120 J",
      "-135 J",
      "-150 J"
    ],
    correctAnswer: 2,
    explanation: "Work done by the variable force is:\n$$W = \\int_{x_1}^{x_2} F\\,dx = \\int_{3}^{6} (-10x)\\,dx = \\left[-5x^2\\right]_3^6 = -5(6^2 - 3^2) = -5(36 - 9) = -5(27) = -135\\text{ J}$$"
  }
};

async function executeReplacement() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI");

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('testseries');
  const collection = db.collection('questionBank');

  console.log("=== STEP 1: Repairing 8 Flawed Genuine Questions & Standardizing All 61 Genuine Questions ===");
  const genuineDocs = await collection.find({
    chapter: 'Work, Energy, and Power',
    source: 'Question Bank'
  }).toArray();
  console.log(`Found ${genuineDocs.length} genuine questions in database.`);

  const genuineOps = [];
  for (const doc of genuineDocs) {
    const idStr = String(doc._id);
    const updateFields = {
      marks: 4,
      negativeMarks: 1,
      updatedAt: new Date()
    };

    if (genuineRepairs[idStr]) {
      Object.assign(updateFields, genuineRepairs[idStr]);
      console.log(`Applying surgical repair to genuine question ${idStr}...`);
    }

    genuineOps.push({
      updateOne: {
        filter: { _id: doc._id },
        update: { $set: updateFields }
      }
    });
  }

  if (genuineOps.length > 0) {
    const res = await collection.bulkWrite(genuineOps);
    console.log(`Genuine questions updated: matched ${res.matchedCount}, modified ${res.modifiedCount}`);
  }

  console.log("\n=== STEP 2: In-Place Replacement of 472 Bogus Generator Questions ===");
  let totalReplaced = 0;

  for (const [subtopicName, filePath] of Object.entries(subtopicFiles)) {
    console.log(`\nProcessing subtopic: "${subtopicName}"...`);
    const newQuestions = require(filePath);

    // Fetch existing generator questions for this subtopic
    const existingBogus = await collection.find({
      chapter: 'Work, Energy, and Power',
      subTopic: subtopicName,
      source: { $ne: 'Question Bank' }
    }).sort({ _id: 1 }).toArray();

    console.log(`Found ${existingBogus.length} existing generator questions (expected ${newQuestions.length}).`);
    if (existingBogus.length !== newQuestions.length) {
      throw new Error(`Count mismatch in "${subtopicName}": DB has ${existingBogus.length}, replacements has ${newQuestions.length}`);
    }

    // Segregate replacement questions by type
    const arReplacements = newQuestions.filter(q => q.type === 'ASSERTION_REASON');
    const mcqReplacements = newQuestions.filter(q => q.type === 'MCQ');
    const numReplacements = newQuestions.filter(q => q.type === 'NUMERICAL');

    // Segregate DB docs by type
    const arBogus = existingBogus.filter(q => q.type === 'ASSERTION_REASON' || q.questionType === 'Assertion-Reason');
    const mcqBogus = existingBogus.filter(q => (q.type === 'MCQ' || q.questionType === 'MCQ (Multiple Choice Question)') && q.questionType !== 'Assertion-Reason');
    const numBogus = existingBogus.filter(q => q.type === 'NUMERICAL' || q.questionType === 'Numerical');

    console.log(`DB breakdown: AR=${arBogus.length}, MCQ=${mcqBogus.length}, NUM=${numBogus.length}`);
    console.log(`Replacement breakdown: AR=${arReplacements.length}, MCQ=${mcqReplacements.length}, NUM=${numReplacements.length}`);

    if (arBogus.length !== arReplacements.length || mcqBogus.length !== mcqReplacements.length || numBogus.length !== numReplacements.length) {
      throw new Error(`Type count mismatch in "${subtopicName}"!`);
    }

    const subtopicOps = [];

    // Map AR
    arBogus.forEach((doc, idx) => {
      const rep = arReplacements[idx];
      subtopicOps.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: {
              question: rep.question,
              options: rep.options,
              correctAnswer: rep.correctAnswer,
              explanation: rep.explanation,
              type: rep.type,
              questionType: rep.questionType,
              subTopic: rep.subTopic,
              chapter: rep.chapter,
              subject: rep.subject,
              marks: rep.marks,
              negativeMarks: rep.negativeMarks,
              source: rep.source,
              updatedAt: new Date()
            }
          }
        }
      });
    });

    // Map MCQ
    mcqBogus.forEach((doc, idx) => {
      const rep = mcqReplacements[idx];
      subtopicOps.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: {
              question: rep.question,
              options: rep.options,
              correctAnswer: rep.correctAnswer,
              explanation: rep.explanation,
              type: rep.type,
              questionType: rep.questionType,
              subTopic: rep.subTopic,
              chapter: rep.chapter,
              subject: rep.subject,
              marks: rep.marks,
              negativeMarks: rep.negativeMarks,
              source: rep.source,
              updatedAt: new Date()
            }
          }
        }
      });
    });

    // Map NUM
    numBogus.forEach((doc, idx) => {
      const rep = numReplacements[idx];
      subtopicOps.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: {
              question: rep.question,
              options: rep.options,
              correctAnswer: rep.correctAnswer,
              numericalAnswer: rep.numericalAnswer,
              explanation: rep.explanation,
              type: rep.type,
              questionType: rep.questionType,
              subTopic: rep.subTopic,
              chapter: rep.chapter,
              subject: rep.subject,
              marks: rep.marks,
              negativeMarks: rep.negativeMarks,
              source: rep.source,
              updatedAt: new Date()
            }
          }
        }
      });
    });

    const res = await collection.bulkWrite(subtopicOps);
    console.log(`"${subtopicName}" replacement complete: matched ${res.matchedCount}, modified ${res.modifiedCount}`);
    totalReplaced += res.modifiedCount;
  }

  console.log(`\n==================================================`);
  console.log(`ALL REPLACEMENTS EXECUTED: ${totalReplaced} questions updated in-place.`);
  await client.close();
}

executeReplacement().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
