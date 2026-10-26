const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });
const { getCanonicalChapter } = require('../src/lib/chapterMapping.cjs');

// NCERT Syllabi
const neetSyllabus = {
  Physics: {
    '11': [
      "Units & Measurements",
      "Motion in a Straight Line",
      "Motion in a Plane",
      "Laws of Motion",
      "Work, Energy & Power",
      "System of Particles & Rotational Motion",
      "Gravitation",
      "Mechanical Properties of Solids",
      "Mechanical Properties of Fluids",
      "Thermal Properties of Matter",
      "Thermodynamics",
      "Kinetic Theory",
      "Oscillations",
      "Waves"
    ],
    '12': [
      "Electric Charges & Fields",
      "Electrostatic Potential & Capacitance",
      "Current Electricity",
      "Moving Charges & Magnetism",
      "Magnetism & Matter",
      "Electromagnetic Induction",
      "Alternating Current",
      "Electromagnetic Waves",
      "Ray Optics & Optical Instruments",
      "Wave Optics",
      "Dual Nature of Radiation & Matter",
      "Atoms",
      "Nuclei",
      "Semiconductor Electronics"
    ]
  },
  Chemistry: {
    '11': [
      "Some Basic Concepts of Chemistry",
      "Structure of Atom",
      "Classification of Elements and Periodicity",
      "Chemical Bonding and Molecular Structure",
      "Thermodynamics",
      "Equilibrium",
      "Redox Reactions",
      "The p-Block Elements",
      "Organic Chemistry – Some Basic Principles and Techniques",
      "Hydrocarbons"
    ],
    '12': [
      "Solutions",
      "Electrochemistry",
      "Chemical Kinetics",
      "d- and f-Block Elements",
      "Coordination Compounds",
      "Haloalkanes and Haloarenes",
      "Alcohols, Phenols and Ethers",
      "Aldehydes, Ketones and Carboxylic Acids",
      "Amines",
      "Biomolecules"
    ]
  },
  Botany: {
    '11': [
      "The Living World",
      "Biological Classification",
      "Plant Kingdom",
      "Morphology of Flowering Plants",
      "Anatomy of Flowering Plants",
      "Cell: The Unit of Life",
      "Cell Cycle and Cell Division"
    ],
    '12': [
      "Sexual Reproduction in Flowering Plants",
      "Principles of Inheritance and Variation",
      "Molecular Basis of Inheritance",
      "Microbes in Human Welfare",
      "Organisms and Populations"
    ]
  },
  Zoology: {
    '11': [
      "Animal Kingdom",
      "Structural Organisation in Animals",
      "Biomolecules",
      "Breathing and Exchange of Gases",
      "Body Fluids and Circulation",
      "Excretory Products and their Elimination",
      "Locomotion and Movement"
    ],
    '12': [
      "Human Reproduction",
      "Reproductive Health",
      "Evolution",
      "Human Health and Disease",
      "Biotechnology - Principles and Processes",
      "Biotechnology and its Applications"
    ]
  }
};

const jeeMainsSyllabus = {
  Physics: {
    '11': [
      "Units & Measurements",
      "Motion in a Straight Line",
      "Motion in a Plane",
      "Laws of Motion",
      "Work, Energy & Power",
      "System of Particles & Rotational Motion",
      "Gravitation",
      "Mechanical Properties of Solids",
      "Mechanical Properties of Fluids",
      "Thermal Properties of Matter",
      "Thermodynamics",
      "Kinetic Theory",
      "Oscillations",
      "Waves"
    ],
    '12': [
      "Electric Charges & Fields",
      "Electrostatic Potential & Capacitance",
      "Current Electricity",
      "Moving Charges & Magnetism",
      "Magnetism & Matter",
      "Electromagnetic Induction",
      "Alternating Current",
      "Electromagnetic Waves",
      "Ray Optics & Optical Instruments",
      "Wave Optics",
      "Dual Nature of Radiation & Matter",
      "Atoms",
      "Nuclei",
      "Semiconductor Electronics"
    ]
  },
  Chemistry: {
    '11': [
      "Some Basic Concepts of Chemistry",
      "Structure of Atom",
      "Classification of Elements and Periodicity",
      "Chemical Bonding and Molecular Structure",
      "Thermodynamics",
      "Equilibrium",
      "Redox Reactions",
      "The p-Block Elements",
      "Organic Chemistry – Some Basic Principles and Techniques",
      "Hydrocarbons"
    ],
    '12': [
      "Solutions",
      "Electrochemistry",
      "Chemical Kinetics",
      "d- and f-Block Elements",
      "Coordination Compounds",
      "Haloalkanes and Haloarenes",
      "Alcohols, Phenols and Ethers",
      "Aldehydes, Ketones and Carboxylic Acids",
      "Amines",
      "Biomolecules"
    ]
  },
  Mathematics: {
    '11': [
      "Sets, Relations and Functions",
      "Complex Numbers and Quadratic Equations",
      "Matrices and Determinants",
      "Permutations and Combinations",
      "Binomial Theorem",
      "Sequence and Series",
      "Limit, Continuity and Differentiability",
      "Integral Calculus"
    ],
    '12': [
      "Differential Equations",
      "Coordinate Geometry",
      "Three Dimensional Geometry",
      "Vector Algebra",
      "Statistics and Probability",
      "Trigonometry"
    ]
  }
};

const chunkArray = (array, numChunks) => {
  const result = [];
  const baseSize = Math.floor(array.length / numChunks);
  let remainder = array.length % numChunks;
  let offset = 0;
  for (let i = 0; i < numChunks; i++) {
    const size = baseSize + (remainder > 0 ? 1 : 0);
    result.push(array.slice(offset, offset + size));
    offset += size;
    remainder--;
  }
  return result;
};

function generatePartTests(category, syllabus, count = 10) {
  const numPerGrade = Math.floor(count / 2);
  const tests = [];
  const examTitle = category === 'neet' ? 'NEET' : category === 'jee-mains' ? 'JEE Main' : category.toUpperCase();

  // Class 11
  for (let i = 0; i < numPerGrade; i++) {
    const syllabusObj = {};
    let desc = `Part Syllabus Test ${i + 1} (Class 11) covering:`;
    Object.entries(syllabus).forEach(([subject, gradeMap]) => {
      const chaps = Array.isArray(gradeMap) ? gradeMap : (gradeMap['11'] || []);
      const chunks = chunkArray(chaps, numPerGrade);
      const current = chunks[i] || [];
      if (current.length > 0) {
        syllabusObj[subject] = current;
        desc += `\n${subject}: ${current.join(', ')}.`;
      }
    });
    tests.push({
      id: `${category}-PART-${i + 1}`,
      title: `${examTitle} Part Test ${i + 1} (Class 11)`,
      type: 'PART',
      classGrade: '11',
      category,
      questionsCount: category === 'neet' ? 180 : 75,
      totalMarks: category === 'neet' ? 720 : 300,
      duration: 180,
      syllabus: syllabusObj,
      description: desc
    });
  }

  // Class 12
  for (let i = 0; i < numPerGrade; i++) {
    const idx = numPerGrade + i + 1;
    const syllabusObj = {};
    let desc = `Part Syllabus Test ${idx} (Class 12) covering:`;
    Object.entries(syllabus).forEach(([subject, gradeMap]) => {
      const chaps = Array.isArray(gradeMap) ? gradeMap : (gradeMap['12'] || []);
      const chunks = chunkArray(chaps, numPerGrade);
      const current = chunks[i] || [];
      if (current.length > 0) {
        syllabusObj[subject] = current;
        desc += `\n${subject}: ${current.join(', ')}.`;
      }
    });
    tests.push({
      id: `${category}-PART-${idx}`,
      title: `${examTitle} Part Test ${idx} (Class 12)`,
      type: 'PART',
      classGrade: '12',
      category,
      questionsCount: category === 'neet' ? 180 : 75,
      totalMarks: category === 'neet' ? 720 : 300,
      duration: 180,
      syllabus: syllabusObj,
      description: desc
    });
  }

  return tests;
}

async function seedPartTests() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Missing MONGODB_URI');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  console.log('Connected to MongoDB. Starting Part Tests seeding for NEET and JEE Main...');

  const neetTests = generatePartTests('neet', neetSyllabus, 10);
  const jeeTests = generatePartTests('jee-mains', jeeMainsSyllabus, 10);
  const allPartTests = [...neetTests, ...jeeTests];

  console.log(`Generated ${allPartTests.length} Part Test specifications (10 NEET + 10 JEE Main).`);

  for (const test of allPartTests) {
    console.log(`\nProcessing ${test.id}: "${test.title}"...`);
    const isNeet = test.category === 'neet';
    const subjectsConfig = isNeet
      ? [
          { subject: 'Physics', count: 45 },
          { subject: 'Chemistry', count: 45 },
          { subject: 'Botany', count: 45 },
          { subject: 'Zoology', count: 45 }
        ]
      : [
          { subject: 'Physics', count: 25 },
          { subject: 'Chemistry', count: 25 },
          { subject: 'Mathematics', count: 25 }
        ];

    const partNum = parseInt(test.id.replace(/\D/g, '') || '1', 10);
    const questionIds = [];

    for (const { subject: sName, count: sCount } of subjectsConfig) {
      const syllabusChapters = test.syllabus?.[sName] || [];
      const mappedChapters = syllabusChapters.map(ch => {
        const meta = getCanonicalChapter(sName, ch);
        return meta?.chapter || ch;
      }).filter(Boolean);

      let sQuery = { subject: sName };
      if (isNeet) {
        sQuery.$nor = [
          { questionType: { $regex: /numerical|numeric|integer/i } },
          { type: { $regex: /numerical|numeric|integer/i } }
        ];
      }

      if (mappedChapters.length > 0) {
        sQuery.chapter = {
          $in: mappedChapters.map(c => new RegExp(`^${c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i'))
        };
      }

      const skipCount = ((partNum - 1) * sCount) % 150;
      let sQs = await db.collection('questionBank')
        .find(sQuery)
        .sort({ usedInTests: 1, _id: 1 })
        .skip(skipCount)
        .limit(sCount)
        .toArray();

      // If chapter pool has fewer questions, top up from the subject
      if (sQs.length < sCount) {
        const existingIds = sQs.map(q => q._id);
        const extra = await db.collection('questionBank')
          .find({
            subject: sName,
            _id: { $nin: existingIds },
            ...(isNeet ? { $nor: [{ questionType: { $regex: /numerical|numeric|integer/i } }, { type: { $regex: /numerical|numeric|integer/i } }] } : {})
          })
          .limit(sCount - sQs.length)
          .toArray();
        sQs = [...sQs, ...extra];
      }

      questionIds.push(...sQs.map(q => q._id));
      console.log(`  - ${sName}: assigned ${sQs.length} questions (target: ${sCount})`);
    }

    const testPaperDoc = {
      testId: test.id,
      title: test.title,
      exam: isNeet ? 'NEET' : 'JEE Main',
      subject: 'Mixed',
      type: 'PART',
      classGrade: test.classGrade,
      duration: test.duration,
      totalMarks: test.totalMarks,
      questionsCount: questionIds.length,
      questions: questionIds,
      syllabus: test.syllabus,
      description: test.description,
      updatedAt: new Date()
    };

    await db.collection('testPapers').updateOne(
      { testId: test.id },
      {
        $set: testPaperDoc,
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );

    // Track usedInTests
    if (questionIds.length > 0) {
      await db.collection('questionBank').updateMany(
        { _id: { $in: questionIds } },
        { $addToSet: { usedInTests: test.id } }
      );
    }

    console.log(`  ✓ Successfully configured ${test.id} with ${questionIds.length} questions!`);
  }

  console.log('\n======================================================');
  console.log('All 20 Part Tests (10 NEET + 10 JEE Main) seeded successfully!');
  console.log('======================================================');

  await client.close();
}

seedPartTests().catch(err => {
  console.error('Error seeding part tests:', err);
  process.exit(1);
});
