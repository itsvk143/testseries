require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const CHAPTER_SUBTOPICS = {
  'Physics and Measurement': [
    'Units and dimensions', 'Error analysis', 'Significant figures',
    'Dimensional analysis and applications', 'Least count and precision'
  ],
  'Kinematics': [
    'Motion in a straight line/plane', 'Projectile motion', 'Relative velocity', 'Uniform circular motion',
    'Uniformly accelerated motion and equations', 'Graphical analysis of motion (x-t, v-t graphs)'
  ],
  'Laws of Motion': [
    "Newton's laws", 'Impulse', 'Conservation of momentum', 'Friction', 'Banking of roads',
    'Connected motion and pulley problems', 'Equilibrium of concurrent forces'
  ],
  'Work, Energy, and Power': [
    'Work-energy theorem', 'Kinetic/potential energy', 'Elastic and inelastic collisions',
    'Conservation of mechanical energy', 'Power and variable force', 'Vertical circular motion'
  ],
  'Rotational Motion': [
    'Center of mass', 'Torque', 'Angular momentum conservation', 'Moment of inertia',
    'Theorems of parallel and perpendicular axes'
  ],
  'Gravitation': [
    "Kepler's laws", "Newton's law of gravitation", 'Gravitational potential energy', 'Escape velocity',
    'Acceleration due to gravity (variation with height, depth, latitude)', 'Orbital velocity and satellite motion'
  ],
  'Properties of Solids and Liquids': [
    "Elasticity (Hooke's law, Young's modulus)", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
    'Surface tension, surface energy, and capillarity', 'Thermal expansion and calorimetry',
    "Stefan's law of radiation"
  ],
  'Thermodynamics': [
    'Thermal equilibrium', 'Laws of thermodynamics (zeroth, first, second)',
    'Isothermal and adiabatic processes', 'Work done in thermodynamic processes'
  ],
  'Kinetic Theory of Gases': [
    'Equation of state', 'Kinetic interpretation of temperature', 'Degrees of freedom',
    'Law of equipartition of energy', 'Mean free path and molecular speeds (rms, average, most probable)'
  ],
  'Oscillations and Waves': [
    'Simple Harmonic Motion (SHM)', 'Wave motion', 'Superposition of waves',
    'Standing waves in strings and organ pipes', 'Beats'
  ],
  'Electrostatics': [
    "Coulomb's law", 'Electric field/flux', "Gauss's law", 'Potential energy', 'Capacitors', 'Dielectrics',
    'Electric dipole and dipole moment', 'Equipotential surfaces', 'Combination of capacitors and energy stored'
  ],
  'Current Electricity': [
    "Ohm's law", "Kirchhoff's laws", 'Meter bridge', 'Wheatstone bridge', 'Resistivity',
    'Drift velocity and mobility', 'Internal resistance of a cell and EMF', 'Electrical energy and power'
  ],
  'Magnetic Effects of Current and Magnetism': [
    'Lorentz force', "Ampere's law", 'Magnetic field calculation',
    'Biot-Savart law and applications', 'Force between two parallel currents',
    'Moving coil galvanometer and conversion to ammeter/voltmeter',
    'Magnetic properties (dia, para, ferromagnetism)'
  ],
  'Electromagnetic Induction and Alternating Currents': [
    "Faraday's law", "Lenz's law", 'AC circuits', 'RMS values',
    'Self and mutual inductance', 'LC oscillations', 'Transformers and AC generator'
  ],
  'Electromagnetic Waves': [
    'Displacement current', 'EM spectrum', 'Transverse nature of EM waves',
    'Energy density and Poynting vector'
  ],
  'Optics': [
    'Reflection/refraction', 'Lens formula', 'Optical instruments (microscope, telescope)',
    'Interference', 'Diffraction', "Young's double-slit experiment",
    'Total internal reflection and prisms', 'Mirror formula and combination of lenses',
    "Polarization of light (Brewster's law)"
  ],
  'Dual Nature of Matter and Radiation': [
    'Photoelectric effect', 'de Broglie wavelength', "Bohr's model", 'Wave-particle duality',
    "Einstein's photoelectric equation and work function"
  ],
  'Atoms and Nuclei': [
    'Atomic models', 'Nuclear reactions', 'Binding energy', 'Nuclear fission and fusion',
    "Rutherford's scattering and Bohr's quantization", 'Hydrogen spectrum and Rydberg formula', 'Mass defect and nuclear force'
  ],
  'Electronic Devices': [
    'Energy bands', 'Intrinsic/extrinsic semiconductors', 'Diodes', 'Logic gates',
    'p-n junction diode applications (rectifiers, Zener diode)', 'Solar cell, photodiode, and LED'
  ],
  'Experimental Skills': [
    'Vernier calipers', 'Screw gauge', 'Simple pendulum', 'Meter bridge',
    'Focal length of concave mirror and convex lens', "Resistance of wire using Ohm's law"
  ]
};

function norm(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[–—−]/g, '-')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

const CHAPTER_SYNONYMS = {
  [norm('Units & Measurements')]: 'Physics and Measurement',
  [norm('Physics and Measurement')]: 'Physics and Measurement',
  [norm('Motion in a Straight Line')]: 'Kinematics',
  [norm('Kinematics')]: 'Kinematics',
  [norm('Laws of Motion')]: 'Laws of Motion',
  [norm('Work, Energy & Power')]: 'Work, Energy, and Power',
  [norm('Work, Energy, and Power')]: 'Work, Energy, and Power',
  [norm('System of Particles & Rotational Motion')]: 'Rotational Motion',
  [norm('Rotational Motion')]: 'Rotational Motion',
  [norm('Gravitation')]: 'Gravitation',
  [norm('Mechanical Properties of Solids')]: 'Properties of Solids and Liquids',
  [norm('Properties of Solids and Liquids')]: 'Properties of Solids and Liquids',
  [norm('Thermodynamics')]: 'Thermodynamics',
  [norm('Kinetic Theory')]: 'Kinetic Theory of Gases',
  [norm('Kinetic Theory of Gases')]: 'Kinetic Theory of Gases',
  [norm('Oscillations')]: 'Oscillations and Waves',
  [norm('Oscillations and Waves')]: 'Oscillations and Waves',
  [norm('Electric Charges & Fields')]: 'Electrostatics',
  [norm('Electrostatics')]: 'Electrostatics',
  [norm('Current Electricity')]: 'Current Electricity',
  [norm('Moving Charges & Magnetism')]: 'Magnetic Effects of Current and Magnetism',
  [norm('Magnetic Effects of Current and Magnetism')]: 'Magnetic Effects of Current and Magnetism',
  [norm('Electromagnetic Induction')]: 'Electromagnetic Induction and Alternating Currents',
  [norm('Electromagnetic Induction and Alternating Currents')]: 'Electromagnetic Induction and Alternating Currents',
  [norm('Electromagnetic Waves')]: 'Electromagnetic Waves',
  [norm('Optics')]: 'Optics',
  [norm('Dual Nature of Radiation & Matter')]: 'Dual Nature of Matter and Radiation',
  [norm('Dual Nature of Matter and Radiation')]: 'Dual Nature of Matter and Radiation',
  [norm('Atoms')]: 'Atoms and Nuclei',
  [norm('Atoms and Nuclei')]: 'Atoms and Nuclei',
  [norm('Semiconductor Electronics')]: 'Electronic Devices',
  [norm('Electronic Devices')]: 'Electronic Devices',
  [norm('Experimental Skills')]: 'Experimental Skills'
};

const subtopicLookup = {};
for (const [chapter, subtopics] of Object.entries(CHAPTER_SUBTOPICS)) {
  for (const sub of subtopics) {
    subtopicLookup[norm(sub)] = { chapter, canonicalSubtopic: sub };
  }
}

// Special alias mapping for subtopics with variation in names
const SUBTOPIC_ALIASES = {
  [norm('Motion in a straight line/plane')]: { chapter: 'Kinematics', subtopic: 'Motion in a straight line/plane' },
  [norm('Motion in a Straight Line')]: { chapter: 'Kinematics', subtopic: 'Motion in a straight line/plane' },
  [norm('Projectile motion')]: { chapter: 'Kinematics', subtopic: 'Projectile motion' },
  [norm('Relative velocity')]: { chapter: 'Kinematics', subtopic: 'Relative velocity' },
  [norm('Uniform circular motion')]: { chapter: 'Kinematics', subtopic: 'Uniform circular motion' },
  [norm('Uniformly accelerated motion and equations')]: { chapter: 'Kinematics', subtopic: 'Uniformly accelerated motion and equations' },
  [norm('Graphical analysis of motion (x-t, v-t graphs)')]: { chapter: 'Kinematics', subtopic: 'Graphical analysis of motion (x-t, v-t graphs)' },
  [norm('fluid mechanics (Pascal’s law, Bernoulli’s principle, viscosity)')]: { chapter: 'Properties of Solids and Liquids', subtopic: "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)" },
  [norm('potentiometer')]: { chapter: 'Current Electricity', subtopic: 'Meter bridge' },
  [norm('Electrical energy and power')]: { chapter: 'Current Electricity', subtopic: 'Electrical energy and power' },
  [norm('Atomic Models')]: { chapter: 'Atoms and Nuclei', subtopic: 'Atomic models' },
  [norm('Binding Energy')]: { chapter: 'Atoms and Nuclei', subtopic: 'Binding energy' },
  [norm('Laws of thermodynamics (zeroth, first, second)')]: { chapter: 'Thermodynamics', subtopic: 'Laws of thermodynamics (zeroth, first, second)' },
  [norm('Simple Harmonic Motion (SHM)')]: { chapter: 'Oscillations and Waves', subtopic: 'Simple Harmonic Motion (SHM)' },
  [norm('Coulomb’s law')]: { chapter: 'Electrostatics', subtopic: "Coulomb's law" },
  [norm('Gauss’s law')]: { chapter: 'Electrostatics', subtopic: "Gauss's law" },
  [norm('Young’s double-slit experiment')]: { chapter: 'Optics', subtopic: "Young's double-slit experiment" },
  [norm('Polarization of light (Brewster’s law)')]: { chapter: 'Optics', subtopic: "Polarization of light (Brewster's law)" },
  [norm('Einstein’s photoelectric equation and work function')]: { chapter: 'Dual Nature of Matter and Radiation', subtopic: "Einstein's photoelectric equation and work function" },
  [norm('Rutherford’s scattering and Bohr’s quantization')]: { chapter: 'Atoms and Nuclei', subtopic: "Rutherford's scattering and Bohr's quantization" }
};

async function buildTargets() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not found');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  const all = await db.collection('testPapers').find({
    $or: [
      { exam: { $regex: /jee/i }, subject: { $regex: /^physics$/i } },
      { category: 'jee-mains', subject: { $regex: /^physics$/i } },
      { testId: { $regex: /^jee-mains-subtopic-physics/i } }
    ]
  }).toArray();

  const papers = all.filter(t => t.type === 'SUBTOPIC' || (t.testId && t.testId.includes('-SUBTOPIC-')) || (t.type || '').toLowerCase().includes('topic'));

  console.log(`Found ${papers.length} JEE Main Physics Topic-wise tests in DB.`);

  const targetMap = {};
  let mapped = 0;
  let unmapped = [];

  for (const p of papers) {
    const rawTitle = p.title || '';
    const rawChapter = p.chapter || '';
    const rawSubtopic = p.subtopic || '';

    let ch = CHAPTER_SYNONYMS[norm(rawChapter)] || rawChapter;
    let sub = rawSubtopic || rawTitle;

    // Check alias
    if (SUBTOPIC_ALIASES[norm(sub)]) {
      ch = SUBTOPIC_ALIASES[norm(sub)].chapter;
      sub = SUBTOPIC_ALIASES[norm(sub)].subtopic;
    } else if (subtopicLookup[norm(sub)]) {
      ch = subtopicLookup[norm(sub)].chapter;
      sub = subtopicLookup[norm(sub)].canonicalSubtopic;
    } else if (ch && CHAPTER_SUBTOPICS[ch]) {
      const match = CHAPTER_SUBTOPICS[ch].find(s => norm(s) === norm(sub) || norm(s).includes(norm(sub)) || norm(sub).includes(norm(s)));
      if (match) sub = match;
    }

    if (ch && sub) {
      mapped++;
      targetMap[p.testId] = {
        testId: p.testId,
        _id: String(p._id),
        title: p.title,
        targetChapter: ch,
        targetSubtopic: sub,
        questionCount: p.questions ? p.questions.length : 0
      };
    } else {
      unmapped.push({ id: p.testId, title: p.title, chapter: p.chapter });
    }
  }

  console.log(`Successfully resolved targets: ${mapped} / ${papers.length}`);
  if (unmapped.length > 0) {
    console.log(`Unmapped count: ${unmapped.length}`);
    console.log('Unmapped examples:', unmapped.slice(0, 10));
  }

  const outputPath = path.join(__dirname, 'jee_physics_subtopic_test_targets.json');
  fs.writeFileSync(outputPath, JSON.stringify(targetMap, null, 2));
  console.log(`Saved targets map to: ${outputPath}`);

  await client.close();
}

buildTargets();
