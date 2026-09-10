const fs = require('fs');
const path = require('path');

// Canonical chapters and subtopics from src/app/admin/page.js
const CHAPTER_SUBTOPICS = {
  'Physics and Measurement': [
    'Units and dimensions',
    'Error analysis',
    'Significant figures',
    'Dimensional analysis and applications',
    'Least count and precision'
  ],
  'Kinematics': [
    'Motion in a straight line/plane',
    'Projectile motion',
    'Relative velocity',
    'Uniform circular motion',
    'Uniformly accelerated motion and equations',
    'Graphical analysis of motion (x-t, v-t graphs)'
  ],
  'Laws of Motion': [
    "Newton's laws",
    'Impulse',
    'Conservation of momentum',
    'Friction',
    'Banking of roads',
    'Connected motion and pulley problems',
    'Equilibrium of concurrent forces'
  ],
  'Work, Energy, and Power': [
    'Work-energy theorem',
    'Kinetic/potential energy',
    'Elastic and inelastic collisions',
    'Conservation of mechanical energy',
    'Power and variable force',
    'Vertical circular motion'
  ],
  'Rotational Motion': [
    'Center of mass',
    'Torque',
    'Angular momentum conservation',
    'Moment of inertia',
    'Theorems of parallel and perpendicular axes'
  ],
  'Gravitation': [
    "Kepler's laws",
    "Newton's law of gravitation",
    'Gravitational potential energy',
    'Escape velocity',
    'Acceleration due to gravity (variation with height, depth, latitude)',
    'Orbital velocity and satellite motion'
  ],
  'Properties of Solids and Liquids': [
    "Elasticity (Hooke's law, Young's modulus)",
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    'Surface tension, surface energy, and capillarity',
    'Thermal expansion and calorimetry',
    "Stefan's law of radiation"
  ],
  'Thermodynamics': [
    'Thermal equilibrium',
    'Laws of thermodynamics (zeroth, first, second)',
    'Isothermal and adiabatic processes',
    'Work done in thermodynamic processes'
  ],
  'Kinetic Theory of Gases': [
    'Equation of state',
    'Kinetic interpretation of temperature',
    'Degrees of freedom',
    'Law of equipartition of energy',
    'Mean free path and molecular speeds (rms, average, most probable)'
  ],
  'Oscillations and Waves': [
    'Simple Harmonic Motion (SHM)',
    'Wave motion',
    'Superposition of waves',
    'Standing waves in strings and organ pipes',
    'Beats'
  ],
  'Electrostatics': [
    "Coulomb's law",
    'Electric field/flux',
    "Gauss's law",
    'Potential energy',
    'Capacitors',
    'Dielectrics',
    'Electric dipole and dipole moment',
    'Equipotential surfaces',
    'Combination of capacitors and energy stored'
  ],
  'Current Electricity': [
    "Ohm's law",
    "Kirchhoff's laws",
    'Meter bridge',
    'Wheatstone bridge',
    'Resistivity',
    'Drift velocity and mobility',
    'Internal resistance of a cell and EMF',
    'Electrical energy and power'
  ],
  'Magnetic Effects of Current and Magnetism': [
    'Lorentz force',
    "Ampere's law",
    'Magnetic field calculation',
    'Biot-Savart law and applications',
    'Force between two parallel currents',
    'Moving coil galvanometer and conversion to ammeter/voltmeter',
    'Magnetic properties (dia, para, ferromagnetism)'
  ],
  'Electromagnetic Induction and Alternating Currents': [
    "Faraday's law",
    "Lenz's law",
    'AC circuits',
    'RMS values',
    'Self and mutual inductance',
    'LC oscillations',
    'Transformers and AC generator'
  ],
  'Electromagnetic Waves': [
    'Displacement current',
    'EM spectrum',
    'Transverse nature of EM waves',
    'Energy density and Poynting vector'
  ],
  'Optics': [
    'Reflection/refraction',
    'Lens formula',
    'Optical instruments (microscope, telescope)',
    'Interference',
    'Diffraction',
    "Young's double-slit experiment",
    'Total internal reflection and prisms',
    'Mirror formula and combination of lenses',
    "Polarization of light (Brewster's law)"
  ],
  'Dual Nature of Matter and Radiation': [
    'Photoelectric effect',
    'de Broglie wavelength',
    "Bohr's model",
    'Wave-particle duality',
    "Einstein's photoelectric equation and work function"
  ],
  'Atoms and Nuclei': [
    'Atomic models',
    'Nuclear reactions',
    'Binding energy',
    'Nuclear fission and fusion',
    "Rutherford's scattering and Bohr's quantization",
    'Hydrogen spectrum and Rydberg formula',
    'Mass defect and nuclear force'
  ],
  'Electronic Devices': [
    'Energy bands',
    'Intrinsic/extrinsic semiconductors',
    'Diodes',
    'Logic gates',
    'p-n junction diode applications (rectifiers, Zener diode)',
    'Solar cell, photodiode, and LED'
  ],
  'Experimental Skills': [
    'Vernier calipers',
    'Screw gauge',
    'Simple pendulum',
    'Meter bridge',
    'Focal length of concave mirror and convex lens',
    "Resistance of wire using Ohm's law"
  ]
};

const batchFiles = [
  'scripts/physics_top100/phys_batch1.json',
  'scripts/physics_top100/phys_batch2.json',
  'scripts/physics_top100/phys_batch3.json',
  'scripts/physics_top100/phys_batch4.json'
];

let allQuestions = [];
for (const bf of batchFiles) {
  const p = path.resolve(bf);
  if (!fs.existsSync(p)) {
    console.error(`Missing file: ${p}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
  console.log(`Loaded ${data.length} questions from ${bf}`);
  allQuestions = allQuestions.concat(data);
}

console.log(`Total questions loaded: ${allQuestions.length}`);

// Validation 1: Exact Count 610
if (allQuestions.length !== 610) {
  console.error(`Error: expected 610 questions, got ${allQuestions.length}`);
  process.exit(1);
}

// Validation 2: Distribution across 20 chapters and 122 subtopics
const counts = {};
for (const ch of Object.keys(CHAPTER_SUBTOPICS)) {
  counts[ch] = {};
  for (const sub of CHAPTER_SUBTOPICS[ch]) {
    counts[ch][sub] = 0;
  }
}

let missingSubtopics = 0;
for (const q of allQuestions) {
  if (!counts[q.chapter]) {
    console.error(`Unknown chapter in question: ${q.chapter}`);
    process.exit(1);
  }
  if (counts[q.chapter][q.subtopic] === undefined) {
    console.error(`Unknown subtopic "${q.subtopic}" in chapter "${q.chapter}"`);
    process.exit(1);
  }
  counts[q.chapter][q.subtopic]++;
}

let allExact5 = true;
let totalSubtopics = 0;
for (const ch of Object.keys(CHAPTER_SUBTOPICS)) {
  for (const sub of CHAPTER_SUBTOPICS[ch]) {
    totalSubtopics++;
    const count = counts[ch][sub];
    if (count !== 5) {
      console.error(`Subtopic mismatch: [${ch}] "${sub}" has ${count} questions (expected 5)`);
      allExact5 = false;
    }
  }
}

console.log(`Verified ${totalSubtopics} subtopics across 20 chapters.`);
if (!allExact5) {
  console.error('Validation failed: not all subtopics have exactly 5 questions.');
  process.exit(1);
}
console.log('PASS: All 122 subtopics have EXACTLY 5 questions (610 total).');

// Validation 3: Field verification and KaTeX check
let katex;
try {
  katex = require('katex');
  console.log('KaTeX package available for syntax testing.');
} catch (e) {
  console.log('KaTeX package not installed locally; performing delimiter check.');
}

function checkMathSyntax(text, fieldName, qIdx) {
  // Count single dollars
  const matches = text.match(/\$/g);
  if (matches && matches.length % 2 !== 0) {
    console.warn(`Warning: Unmatched $ delimiter in Q${qIdx} [${fieldName}]: ${text.substring(0, 80)}...`);
  }
  if (katex && matches) {
    // Extract math blocks
    const regex = /\$([^$]+)\$/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      try {
        katex.renderToString(match[1], { throwOnError: true });
      } catch (err) {
        console.warn(`KaTeX Error in Q${qIdx} [${fieldName}]: "${match[1]}" -> ${err.message}`);
      }
    }
  }
}

for (let i = 0; i < allQuestions.length; i++) {
  const q = allQuestions[i];
  if (!q.question || q.question.trim().length === 0) {
    console.error(`Q${i} empty question text`);
    process.exit(1);
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    console.error(`Q${i} does not have exactly 4 options`);
    process.exit(1);
  }
  if (q.correctAnswer < 0 || q.correctAnswer > 3) {
    console.error(`Q${i} invalid correctAnswer: ${q.correctAnswer}`);
    process.exit(1);
  }
  if (q.difficulty !== 'Difficult') {
    console.error(`Q${i} difficulty is not Difficult: ${q.difficulty}`);
    process.exit(1);
  }
  if (q.subject !== 'Physics') {
    console.error(`Q${i} subject is not Physics: ${q.subject}`);
    process.exit(1);
  }
  if (!q.explanation || q.explanation.length === 0) {
    console.error(`Q${i} explanation missing`);
    process.exit(1);
  }
  checkMathSyntax(q.question, 'question', i);
  for (const opt of q.options) {
    checkMathSyntax(opt, 'option', i);
  }
  checkMathSyntax(q.explanation, 'explanation', i);
}

console.log('PASS: All 610 questions passed field validations and math delimiter checks.');

// Save Master JSON
const masterPath = path.resolve('src/data/physics_top100_610.json');
fs.writeFileSync(masterPath, JSON.stringify(allQuestions, null, 2), 'utf-8');
console.log(`Saved master dataset to ${masterPath} (${(fs.statSync(masterPath).size / 1024).toFixed(1)} KB)`);

// Update src/data/questionsjeem/chapter_physics.json
const chapterPhysicsPath = path.resolve('src/data/questionsjeem/chapter_physics.json');
let existingPhysicsData = {};
if (fs.existsSync(chapterPhysicsPath)) {
  existingPhysicsData = JSON.parse(fs.readFileSync(chapterPhysicsPath, 'utf-8'));
}

// Group new questions by chapter and subtopic
for (const q of allQuestions) {
  const ch = q.chapter;
  const sub = q.subtopic;
  if (!existingPhysicsData[ch]) {
    existingPhysicsData[ch] = {};
  }
  if (!existingPhysicsData[ch][sub]) {
    existingPhysicsData[ch][sub] = [];
  }
  
  // Check if this question already exists to avoid duplicates
  const alreadyExists = existingPhysicsData[ch][sub].some(
    existingQ => existingQ.question === q.question
  );
  if (!alreadyExists) {
    existingPhysicsData[ch][sub].push(q);
  }
}

fs.writeFileSync(chapterPhysicsPath, JSON.stringify(existingPhysicsData, null, 2), 'utf-8');
console.log(`Updated ${chapterPhysicsPath} with new Top 100 questions. Total chapters: ${Object.keys(existingPhysicsData).length}`);
