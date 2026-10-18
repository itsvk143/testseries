const fs = require('fs');
const vm = require('vm');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const code = fs.readFileSync('./src/data/chapters.js', 'utf8').replace(/export const /g, 'var ') + '; module.exports = { neetSyllabus, jeeMainsSyllabus };';
const sandbox = { module: { exports: {} } };
vm.runInNewContext(code, sandbox);
const { neetSyllabus, jeeMainsSyllabus } = sandbox.module.exports;

function getCanonicalChapter(subject, syllabusChapter) {
  const raw = (syllabusChapter || '').trim();
  const clean = raw.toLowerCase().replace(/[–—−]/g, '-').replace(/[\x27\x60’]/g, "'").replace(/\s+/g, ' ');

  if (subject === 'Physics') {
    if (clean.includes('units') || clean.includes('measurement')) return 'Physics and Measurement';
    if (clean.includes('motion in a straight line') || clean.includes('motion in a plane') || clean.includes('kinematics')) return 'Kinematics';
    if (clean.includes('laws of motion')) return 'Laws of Motion';
    if (clean.includes('work') && clean.includes('power')) return 'Work, Energy, and Power';
    if (clean.includes('rotational') || clean.includes('system of particles')) return 'Rotational Motion';
    if (clean.includes('gravitation')) return 'Gravitation';
    if (clean.includes('solids') || clean.includes('fluids') || clean.includes('mechanical properties')) return 'Properties of Solids and Liquids';
    if (clean.includes('thermal properties') || clean.includes('thermodynamics')) return 'Thermodynamics';
    if (clean.includes('kinetic theory')) return 'Kinetic Theory of Gases';
    if (clean.includes('oscillation') || clean.includes('waves')) return 'Oscillations and Waves';
    if (clean.includes('electric charge') || clean.includes('electrostatic') || clean.includes('capacitance')) return 'Electrostatics';
    if (clean.includes('current electricity')) return 'Current Electricity';
    if (clean.includes('moving charge') || clean.includes('magnetism')) return 'Magnetic Effects of Current and Magnetism';
    if (clean.includes('electromagnetic induction') || clean.includes('alternating current')) return 'Electromagnetic Induction and Alternating Currents';
    if (clean.includes('electromagnetic waves')) return 'Electromagnetic Waves';
    if (clean.includes('ray optics') || clean.includes('wave optics') || clean.includes('optics')) return 'Optics';
    if (clean.includes('dual nature')) return 'Dual Nature of Matter and Radiation';
    if (clean.includes('atoms') || clean.includes('nuclei')) return 'Atoms and Nuclei';
    if (clean.includes('semiconductor') || clean.includes('electronic devices')) return 'Electronic Devices';
  }

  if (subject === 'Chemistry') {
    if (clean.includes('some basic concepts')) return 'Some Basic Concepts in Chemistry';
    if (clean.includes('structure of atom') || clean.includes('atomic structure')) return 'Atomic Structure';
    if (clean.includes('periodicity') || clean.includes('classification of elements')) return 'Classification of Elements and Periodicity in Properties';
    if (clean.includes('chemical bonding')) return 'Chemical Bonding and Molecular Structure';
    if (clean.includes('thermodynamics')) return 'Chemical Thermodynamics';
    if (clean.includes('equilibrium')) return 'Equilibrium';
    if (clean.includes('redox reactions and electrochemistry')) return 'Redox Reactions and Electrochemistry';
    if (clean.includes('electrochemistry')) return 'Electrochemistry';
    if (clean.includes('redox')) return 'Redox Reactions and Electrochemistry';
    if (clean.includes('p-block')) return 'P-Block Elements';
    if (clean.includes('d- and f') || clean.includes('d-and f') || clean.includes('d and f')) return 'd and f- Block Elements';
    if (clean.includes('coordination') || clean.includes('co-ordination')) return 'Co-ordination Compounds';
    if (clean.includes('haloalkane') || clean.includes('halogens')) return 'Organic Compounds Containing Halogens';
    if (clean.includes('alcohol') || clean.includes('phenol') || clean.includes('ether')) return 'Alcohols, Phenols, and Ethers';
    if (clean.includes('aldehyde') || clean.includes('ketone') || clean.includes('carboxylic') || clean.includes('oxygen')) return 'Organic Compounds Containing Oxygen';
    if (clean.includes('amine') || clean.includes('nitrogen')) return 'Organic Compounds Containing Nitrogen';
    if (clean.includes('biomolecule')) return 'Biomolecules';
    if (clean.includes('hydrocarbon')) return 'Hydrocarbons';
    if (clean.includes('solutions')) return 'Solutions';
    if (clean.includes('chemical kinetics')) return 'Chemical Kinetics';
    if (clean.includes('principles and techniques') || clean.includes('principles of organic')) return 'Some Basic Principles of Organic Chemistry';
  }

  if (subject === 'Botany') {
    if (clean.includes('anatomy of flowering plants')) return 'Anatomy of Flowering Plants';
    if (clean.includes('living world') || clean.includes('plant kingdom') || clean.includes('diversity')) return 'Diversity in Living World';
    if (clean.includes('biological classification')) return 'Biological Classification';
    if (clean.includes('morphology of flowering plants')) return 'Morphology of Flowering Plants';
    if (clean.includes('cell')) return 'Cell Structure and Function';
    if (clean.includes('biomolecule')) return 'Cell Structure and Function';
    if (clean.includes('transport') || clean.includes('mineral') || clean.includes('photosynthesis') || clean.includes('respiration') || clean.includes('plant growth') || clean.includes('plant physiology')) return 'Plant Physiology';
    if (clean.includes('reproduction')) return 'Reproduction in Plants';
    if (clean.includes('inheritance') || clean.includes('genetics') || clean.includes('molecular basis')) return 'Genetics and Evolution';
    if (clean.includes('biotechnology')) return 'Biotechnology and Its Applications';
    if (clean.includes('organism') || clean.includes('population') || clean.includes('ecosystem') || clean.includes('biodiversity') || clean.includes('environmental') || clean.includes('ecology')) return 'Ecology and Environment';
  }

  if (subject === 'Zoology') {
    if (clean.includes('animal kingdom')) return 'Animal Kingdom';
    if (clean.includes('structural organisation')) return 'Structural Organisation in Animals and Plants';
    if (clean.includes('excretory')) return 'Excretory Products and their Elimination';
    if (clean.includes('locomotion') || clean.includes('movement')) return 'Locomotion and Movement';
    if (clean.includes('digestion') || clean.includes('breathing') || clean.includes('body fluids') || clean.includes('neural') || clean.includes('chemical coordination') || clean.includes('human physiology')) return 'Human Physiology';
    if (clean.includes('reproduction')) return 'Reproduction';
    if (clean.includes('evolution')) return 'Evolution';
    if (clean.includes('human health') || clean.includes('microbes') || clean.includes('human welfare')) return 'Biology and Human Welfare';
    if (clean.includes('biotechnology')) return 'Biotechnology and Its Applications';
    if (clean.includes('principles of inheritance')) return 'Genetics and Evolution';
  }

  if (subject === 'Mathematics') {
    if (clean === 'sets' || clean.includes('relations and functions') || clean.includes('linear inequalities')) return 'Sets, Relations, and Functions';
    if (clean.includes('trigonometric') && !clean.includes('inverse')) return 'Trigonometric Identities';
    if (clean.includes('inverse trigonometric')) return 'Inverse Trigonometric Functions';
    if (clean.includes('quadratic') || clean.includes('complex')) return 'Quadratic Equations';
    if (clean.includes('permutations')) return 'Permutations & Combinations';
    if (clean.includes('binomial')) return 'Binomial Theorem';
    if (clean.includes('sequences') || clean.includes('series')) return 'Sequences & Series';
    if (clean.includes('straight lines')) return 'Straight Lines';
    if (clean.includes('conic')) return 'Conic Sections (Parabola, Ellipse, Hyperbola)';
    if (clean.includes('three dimensional') || clean.includes('3d')) return '3D Geometry';
    if (clean.includes('limits') || clean.includes('continuity') || clean.includes('derivatives') && !clean.includes('application')) return 'Limits, Continuity & Differentiability';
    if (clean.includes('application of derivatives')) return 'Application of Derivatives';
    if (clean.includes('integrals') && !clean.includes('application')) return 'Integrals';
    if (clean.includes('application of integrals')) return 'Areas';
    if (clean.includes('differential equations')) return 'Differential Equations';
    if (clean.includes('vector')) return 'Vectors';
    if (clean.includes('matrices') || clean.includes('determinants')) return 'Matrices & Determinants';
    if (clean.includes('statistics')) return 'Statistics';
    if (clean.includes('probability')) return 'Probability';
    if (clean.includes('linear programming')) return 'Straight Lines';
  }

  return raw;
}

module.exports = { getCanonicalChapter };

async function runTest() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

  console.log('Testing NEET Syllabus Mapping...');
  let totalNeet = 0;
  let unmappedNeet = 0;
  for (const [subj, classes] of Object.entries(neetSyllabus)) {
    for (const [cls, list] of Object.entries(classes)) {
      for (const ch of list) {
        totalNeet++;
        const mapped = getCanonicalChapter(subj, ch);
        const count = await qBank.countDocuments({ subject: subj, chapter: mapped });
        if (count === 0) {
          console.log(`❌ [${subj} ${cls}] "${ch}" -> "${mapped}" (count: 0)`);
          unmappedNeet++;
        } else {
          console.log(`✅ [${subj} ${cls}] "${ch}" -> "${mapped}" (${count} Qs)`);
        }
      }
    }
  }

  console.log(`\nNEET Mapping Result: ${totalNeet - unmappedNeet}/${totalNeet} mapped successfully.`);

  console.log('\nTesting JEE Syllabus Mapping...');
  let totalJee = 0;
  let unmappedJee = 0;
  for (const [subj, classes] of Object.entries(jeeMainsSyllabus)) {
    for (const [cls, list] of Object.entries(classes)) {
      for (const ch of list) {
        totalJee++;
        const mapped = getCanonicalChapter(subj, ch);
        const count = await qBank.countDocuments({ subject: subj, chapter: mapped });
        if (count === 0) {
          console.log(`❌ [${subj} ${cls}] "${ch}" -> "${mapped}" (count: 0)`);
          unmappedJee++;
        } else {
          console.log(`✅ [${subj} ${cls}] "${ch}" -> "${mapped}" (${count} Qs)`);
        }
      }
    }
  }

  console.log(`\nJEE Mapping Result: ${totalJee - unmappedJee}/${totalJee} mapped successfully.`);

  await client.close();
}

if (require.main === module) {
  runTest().catch(console.error);
}
