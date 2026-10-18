const fs = require('fs');
const vm = require('vm');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// Load syllabus
const code = fs.readFileSync('./src/data/chapters.js', 'utf8').replace(/export const /g, 'var ') + '; module.exports = { neetSyllabus, jeeMainsSyllabus };';
const sandbox = { module: { exports: {} } };
vm.runInNewContext(code, sandbox);
const { neetSyllabus, jeeMainsSyllabus } = sandbox.module.exports;

const generateTests = (category, items, type, subjectName, classGrade) => {
  return items.map((itemName, i) => ({
    id: `${category}-${type}-${subjectName ? subjectName + '-' : ''}${itemName ? itemName.replace(/\s+/g, '-') : i + 1}${classGrade !== 'All Test' ? '-' + classGrade : ''}`,
    title: itemName,
    type,
    subject: subjectName,
    chapter: itemName,
    classGrade,
    category
  }));
};

function getCanonicalChapter(subject, syllabusChapter) {
  const raw = (syllabusChapter || '').trim();
  const clean = raw.toLowerCase().replace(/[–—−]/g, '-').replace(/[\x27\x60’]/g, "'").replace(/\s+/g, ' ');

  if (subject === 'Physics') {
    if (clean.includes('units') || clean.includes('measurement')) return { subject: 'Physics', chapter: 'Physics and Measurement' };
    if (clean.includes('motion in a straight line') || clean.includes('motion in a plane') || clean.includes('kinematics')) return { subject: 'Physics', chapter: 'Kinematics' };
    if (clean.includes('laws of motion')) return { subject: 'Physics', chapter: 'Laws of Motion' };
    if (clean.includes('work') && clean.includes('power')) return { subject: 'Physics', chapter: 'Work, Energy, and Power' };
    if (clean.includes('rotational') || clean.includes('system of particles')) return { subject: 'Physics', chapter: 'Rotational Motion' };
    if (clean.includes('gravitation')) return { subject: 'Physics', chapter: 'Gravitation' };
    if (clean.includes('solids') || clean.includes('fluids') || clean.includes('mechanical properties')) return { subject: 'Physics', chapter: 'Properties of Solids and Liquids' };
    if (clean.includes('thermal properties') || clean.includes('thermodynamics')) return { subject: 'Physics', chapter: 'Thermodynamics' };
    if (clean.includes('kinetic theory')) return { subject: 'Physics', chapter: 'Kinetic Theory of Gases' };
    if (clean.includes('oscillation') || clean.includes('waves')) return { subject: 'Physics', chapter: 'Oscillations and Waves' };
    if (clean.includes('electric charge') || clean.includes('electrostatic') || clean.includes('capacitance')) return { subject: 'Physics', chapter: 'Electrostatics' };
    if (clean.includes('current electricity')) return { subject: 'Physics', chapter: 'Current Electricity' };
    if (clean.includes('moving charge') || clean.includes('magnetism')) return { subject: 'Physics', chapter: 'Magnetic Effects of Current and Magnetism' };
    if (clean.includes('electromagnetic induction') || clean.includes('alternating current')) return { subject: 'Physics', chapter: 'Electromagnetic Induction and Alternating Currents' };
    if (clean.includes('electromagnetic waves')) return { subject: 'Physics', chapter: 'Electromagnetic Waves' };
    if (clean.includes('ray optics') || clean.includes('wave optics') || clean.includes('optics')) return { subject: 'Physics', chapter: 'Optics' };
    if (clean.includes('dual nature')) return { subject: 'Physics', chapter: 'Dual Nature of Matter and Radiation' };
    if (clean.includes('atoms') || clean.includes('nuclei')) return { subject: 'Physics', chapter: 'Atoms and Nuclei' };
    if (clean.includes('semiconductor') || clean.includes('electronic devices')) return { subject: 'Physics', chapter: 'Electronic Devices' };
  }

  if (subject === 'Chemistry') {
    if (clean.includes('some basic concepts')) return { subject: 'Chemistry', chapter: 'Some Basic Concepts in Chemistry' };
    if (clean.includes('structure of atom') || clean.includes('atomic structure')) return { subject: 'Chemistry', chapter: 'Atomic Structure' };
    if (clean.includes('periodicity') || clean.includes('classification of elements')) return { subject: 'Chemistry', chapter: 'Classification of Elements and Periodicity in Properties' };
    if (clean.includes('chemical bonding')) return { subject: 'Chemistry', chapter: 'Chemical Bonding and Molecular Structure' };
    if (clean.includes('thermodynamics')) return { subject: 'Chemistry', chapter: 'Chemical Thermodynamics' };
    if (clean.includes('equilibrium')) return { subject: 'Chemistry', chapter: 'Equilibrium' };
    if (clean.includes('electrochemistry')) return { subject: 'Chemistry', chapter: 'Electrochemistry' };
    if (clean.includes('redox')) return { subject: 'Chemistry', chapter: 'Redox Reactions and Electrochemistry' };
    if (clean.includes('p-block')) return { subject: 'Chemistry', chapter: 'P-Block Elements' };
    if (clean.includes('d- and f') || clean.includes('d-and f') || clean.includes('d and f')) return { subject: 'Chemistry', chapter: 'd and f- Block Elements' };
    if (clean.includes('coordination') || clean.includes('co-ordination')) return { subject: 'Chemistry', chapter: 'Co-ordination Compounds' };
    if (clean.includes('haloalkane') || clean.includes('halogens')) return { subject: 'Chemistry', chapter: 'Organic Compounds Containing Halogens' };
    if (clean.includes('alcohol') || clean.includes('phenol') || clean.includes('ether')) return { subject: 'Chemistry', chapter: 'Alcohols, Phenols, and Ethers' };
    if (clean.includes('aldehyde') || clean.includes('ketone') || clean.includes('carboxylic') || clean.includes('oxygen')) return { subject: 'Chemistry', chapter: 'Organic Compounds Containing Oxygen' };
    if (clean.includes('amine') || clean.includes('nitrogen')) return { subject: 'Chemistry', chapter: 'Organic Compounds Containing Nitrogen' };
    if (clean.includes('biomolecule')) return { subject: 'Chemistry', chapter: 'Biomolecules' };
    if (clean.includes('hydrocarbon')) return { subject: 'Chemistry', chapter: 'Hydrocarbons' };
    if (clean.includes('solutions')) return { subject: 'Chemistry', chapter: 'Solutions' };
    if (clean.includes('chemical kinetics')) return { subject: 'Chemistry', chapter: 'Chemical Kinetics' };
    if (clean.includes('principles and techniques') || clean.includes('principles of organic')) return { subject: 'Chemistry', chapter: 'Some Basic Principles of Organic Chemistry' };
  }

  if (subject === 'Botany') {
    if (clean.includes('anatomy of flowering plants')) return { subject: 'Botany', chapter: 'Anatomy of Flowering Plants' };
    if (clean.includes('living world') || clean.includes('plant kingdom') || clean.includes('diversity')) return { subject: 'Botany', chapter: 'Diversity in Living World' };
    if (clean.includes('biological classification')) return { subject: 'Botany', chapter: 'Biological Classification' };
    if (clean.includes('morphology of flowering plants')) return { subject: 'Botany', chapter: 'Morphology of Flowering Plants' };
    if (clean.includes('cell')) return { subject: 'Botany', chapter: 'Cell Structure and Function' };
    if (clean.includes('biomolecule')) return { subject: 'Botany', chapter: 'Cell Structure and Function' };
    if (clean.includes('transport') || clean.includes('mineral') || clean.includes('photosynthesis') || clean.includes('respiration') || clean.includes('plant growth') || clean.includes('plant physiology')) return { subject: 'Botany', chapter: 'Plant Physiology' };
    if (clean.includes('reproduction')) return { subject: 'Botany', chapter: 'Reproduction in Plants' };
    if (clean.includes('inheritance') || clean.includes('genetics') || clean.includes('molecular basis')) return { subject: 'Botany', chapter: 'Genetics and Evolution' };
    if (clean.includes('biotechnology')) return { subject: 'Zoology', chapter: 'Biotechnology and Its Applications' };
    if (clean.includes('organism') || clean.includes('population') || clean.includes('ecosystem') || clean.includes('biodiversity') || clean.includes('environmental') || clean.includes('ecology')) return { subject: 'Botany', chapter: 'Ecology and Environment' };
  }

  if (subject === 'Zoology') {
    if (clean.includes('animal kingdom')) return { subject: 'Zoology', chapter: 'Animal Kingdom' };
    if (clean.includes('structural organisation')) return { subject: 'Zoology', chapter: 'Structural Organisation in Animals and Plants' };
    if (clean.includes('excretory')) return { subject: 'Zoology', chapter: 'Excretory Products and their Elimination' };
    if (clean.includes('locomotion') || clean.includes('movement')) return { subject: 'Zoology', chapter: 'Locomotion and Movement' };
    if (clean.includes('digestion') || clean.includes('breathing') || clean.includes('body fluids') || clean.includes('neural') || clean.includes('chemical coordination') || clean.includes('human physiology')) return { subject: 'Zoology', chapter: 'Human Physiology' };
    if (clean.includes('reproduction')) return { subject: 'Zoology', chapter: 'Reproduction' };
    if (clean.includes('evolution')) return { subject: 'Zoology', chapter: 'Evolution' };
    if (clean.includes('human health') || clean.includes('microbes') || clean.includes('human welfare')) return { subject: 'Zoology', chapter: 'Biology and Human Welfare' };
    if (clean.includes('biotechnology')) return { subject: 'Zoology', chapter: 'Biotechnology and Its Applications' };
    if (clean.includes('principles of inheritance')) return { subject: 'Botany', chapter: 'Genetics and Evolution' };
  }

  if (subject === 'Mathematics') {
    if (clean === 'sets' || clean.includes('relations and functions') || clean.includes('linear inequalities')) return { subject: 'Mathematics', chapter: 'Sets, Relations, and Functions' };
    if (clean.includes('trigonometric') && !clean.includes('inverse')) return { subject: 'Mathematics', chapter: 'Trigonometric Identities' };
    if (clean.includes('inverse trigonometric')) return { subject: 'Mathematics', chapter: 'Inverse Trigonometric Functions' };
    if (clean.includes('quadratic') || clean.includes('complex')) return { subject: 'Mathematics', chapter: 'Quadratic Equations' };
    if (clean.includes('permutations')) return { subject: 'Mathematics', chapter: 'Permutations & Combinations' };
    if (clean.includes('binomial')) return { subject: 'Mathematics', chapter: 'Binomial Theorem' };
    if (clean.includes('sequences') || clean.includes('series')) return { subject: 'Mathematics', chapter: 'Sequences & Series' };
    if (clean.includes('straight lines')) return { subject: 'Mathematics', chapter: 'Straight Lines' };
    if (clean.includes('conic')) return { subject: 'Mathematics', chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)' };
    if (clean.includes('three dimensional') || clean.includes('3d')) return { subject: 'Mathematics', chapter: '3D Geometry' };
    if (clean.includes('limits') || clean.includes('continuity') || clean.includes('derivatives') && !clean.includes('application')) return { subject: 'Mathematics', chapter: 'Limits, Continuity & Differentiability' };
    if (clean.includes('application of derivatives')) return { subject: 'Mathematics', chapter: 'Application of Derivatives' };
    if (clean.includes('integrals') && !clean.includes('application')) return { subject: 'Mathematics', chapter: 'Integrals' };
    if (clean.includes('application of integrals')) return { subject: 'Mathematics', chapter: 'Areas' };
    if (clean.includes('differential equations')) return { subject: 'Mathematics', chapter: 'Differential Equations' };
    if (clean.includes('vector')) return { subject: 'Mathematics', chapter: 'Vectors' };
    if (clean.includes('matrices') || clean.includes('determinants')) return { subject: 'Mathematics', chapter: 'Matrices & Determinants' };
    if (clean.includes('statistics')) return { subject: 'Mathematics', chapter: 'Statistics' };
    if (clean.includes('probability')) return { subject: 'Mathematics', chapter: 'Probability' };
    if (clean.includes('linear programming')) return { subject: 'Mathematics', chapter: 'Straight Lines' };
  }

  return { subject, chapter: raw };
}

async function dryRun() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

  console.log('Testing selection of 5 Easy + remaining Difficult questions...');

  const allTests = [
    // NEET
    ...generateTests('neet', neetSyllabus.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('neet', neetSyllabus.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('neet', neetSyllabus.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('neet', neetSyllabus.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('neet', neetSyllabus.Botany['11'], 'CHAPTER', 'Botany', '11'),
    ...generateTests('neet', neetSyllabus.Botany['12'], 'CHAPTER', 'Botany', '12'),
    ...generateTests('neet', neetSyllabus.Zoology['11'], 'CHAPTER', 'Zoology', '11'),
    ...generateTests('neet', neetSyllabus.Zoology['12'], 'CHAPTER', 'Zoology', '12'),
    // JEE
    ...generateTests('jee-mains', jeeMainsSyllabus.Physics['11'], 'CHAPTER', 'Physics', '11'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Physics['12'], 'CHAPTER', 'Physics', '12'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Chemistry['11'], 'CHAPTER', 'Chemistry', '11'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Chemistry['12'], 'CHAPTER', 'Chemistry', '12'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Mathematics['11'], 'CHAPTER', 'Mathematics', '11'),
    ...generateTests('jee-mains', jeeMainsSyllabus.Mathematics['12'], 'CHAPTER', 'Mathematics', '12')
  ];

  let fullySatisfied = 0;
  let partial = 0;

  for (const t of allTests) {
    const isNeet = t.category === 'neet';
    const targetTotal = isNeet ? 45 : 25;
    const targetEasy = 5;
    const targetDifficult = targetTotal - targetEasy; // 40 for NEET, 20 for JEE

    const mapping = getCanonicalChapter(t.subject, t.chapter);
    const qSubject = mapping.subject;
    const qChapter = mapping.chapter;

    // 1. Fetch 5 Easy questions
    let easyQs = await qBank.find({
      subject: qSubject,
      chapter: qChapter,
      difficulty: { $regex: /^easy$/i }
    }).limit(targetEasy).toArray();

    // 2. Fetch targetDifficult Difficult questions
    let diffQs = await qBank.find({
      subject: qSubject,
      chapter: qChapter,
      difficulty: { $regex: /difficult|hard/i }
    }).limit(targetDifficult).toArray();

    const selectedIds = new Set([...easyQs.map(q => q._id.toString()), ...diffQs.map(q => q._id.toString())]);

    // 3. If easyQs < targetEasy, top up Easy quota from Medium
    if (easyQs.length < targetEasy) {
      const needed = targetEasy - easyQs.length;
      const topUpEasy = await qBank.find({
        subject: qSubject,
        chapter: qChapter,
        _id: { $nin: Array.from(selectedIds).map(id => new ObjectId(id)) },
        difficulty: { $regex: /medium|moderate/i }
      }).limit(needed).toArray();
      for (const q of topUpEasy) {
        selectedIds.add(q._id.toString());
        easyQs.push(q);
      }
    }

    // 4. If diffQs < targetDifficult, top up Difficult quota from Medium / any available
    if (diffQs.length < targetDifficult) {
      const needed = targetDifficult - diffQs.length;
      const topUpDiff = await qBank.find({
        subject: qSubject,
        chapter: qChapter,
        _id: { $nin: Array.from(selectedIds).map(id => new ObjectId(id)) }
      }).limit(needed).toArray();
      for (const q of topUpDiff) {
        selectedIds.add(q._id.toString());
        diffQs.push(q);
      }
    }

    // 5. Total check
    const totalSelected = selectedIds.size;
    if (totalSelected === targetTotal) {
      fullySatisfied++;
    } else {
      partial++;
      console.log(`⚠️ ${t.id} -> ${totalSelected}/${targetTotal} Qs (Easy: ${easyQs.length}, Diff/TopUp: ${diffQs.length}) [Chap: ${qChapter}]`);
    }
  }

  console.log(`\nResult: ${fullySatisfied}/${allTests.length} tests completely filled with exactly target question counts.`);
  console.log(`Partial count: ${partial}`);

  await client.close();
}

dryRun().catch(console.error);
