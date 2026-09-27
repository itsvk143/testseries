require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

function norm(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[–—−]/g, '-')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

const CHAPTER_SYNONYMS = {
  [norm('Relations and Functions')]: 'Sets, Relations, and Functions',
  [norm('Sets, Relations, and Functions')]: 'Sets, Relations, and Functions',
  [norm('Complex Numbers and Quadratic Equations')]: 'Complex Numbers',
  [norm('Complex Numbers')]: 'Complex Numbers',
  [norm('Quadratic Equations')]: 'Quadratic Equations',
  [norm('Matrices and Determinants')]: 'Matrices & Determinants',
  [norm('Matrices & Determinants')]: 'Matrices & Determinants',
  [norm('Permutations and Combinations')]: 'Permutations & Combinations',
  [norm('Permutations & Combinations')]: 'Permutations & Combinations',
  [norm('Binomial Theorem')]: 'Binomial Theorem',
  [norm('Sequences and Series')]: 'Sequences & Series',
  [norm('Sequences & Series')]: 'Sequences & Series',
  [norm('Limits and Derivatives')]: 'Limits, Continuity & Differentiability',
  [norm('Limits, Continuity & Differentiability')]: 'Limits, Continuity & Differentiability',
  [norm('Application of Derivatives')]: 'Application of Derivatives',
  [norm('Integrals')]: 'Integrals',
  [norm('Differential Equations')]: 'Differential Equations',
  [norm('Straight Lines')]: 'Straight Lines',
  [norm('Conic Sections')]: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
  [norm('Conic Sections (Parabola, Ellipse, Hyperbola)')]: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
  [norm('Introduction to Three Dimensional Geometry')]: 'Straight Lines',
  [norm('Vector Algebra')]: 'Vectors',
  [norm('Vectors')]: 'Vectors',
  [norm('Three Dimensional Geometry')]: '3D Geometry',
  [norm('3D Geometry')]: '3D Geometry',
  [norm('Trigonometric Functions')]: 'Trigonometric Identities',
  [norm('Trigonometric Identities')]: 'Trigonometric Identities',
  [norm('Inverse Trigonometric Functions')]: 'Inverse Trigonometric Functions',
  [norm('Statistics')]: 'Statistics',
  [norm('Probability')]: 'Probability',
  [norm('Areas')]: 'Areas',
  [norm('Circles')]: 'Circles'
};

const MATH_SUBTOPIC_TARGETS = {
  // Sets, Relations, and Functions
  'jee-mains-SUBTOPIC-Mathematics-Types-of-relations': {
    targetChapter: 'Sets, Relations, and Functions',
    targetSubtopic: 'Types of relations (reflexive, symmetric, transitive, equivalence)'
  },
  'jee-mains-SUBTOPIC-Mathematics-equivalence-relations': {
    targetChapter: 'Sets, Relations, and Functions',
    targetSubtopic: 'Types of relations (reflexive, symmetric, transitive, equivalence)'
  },
  'jee-mains-SUBTOPIC-Mathematics-domain,-codomain,-range': {
    targetChapter: 'Sets, Relations, and Functions',
    targetSubtopic: 'Functions (domain, codomain, range)'
  },
  'jee-mains-SUBTOPIC-Mathematics-composition-of-functions': {
    targetChapter: 'Sets, Relations, and Functions',
    targetSubtopic: 'Types of functions (one-one, onto, composite, invertible)'
  },

  // Complex Numbers
  'jee-mains-SUBTOPIC-Mathematics-Modulus-and-argument': {
    targetChapter: 'Complex Numbers',
    targetSubtopic: 'Modulus and argument'
  },
  'jee-mains-SUBTOPIC-Mathematics-square-roots': {
    targetChapter: 'Complex Numbers',
    targetSubtopic: 'Square roots'
  },
  'jee-mains-SUBTOPIC-Mathematics-triangle-inequality': {
    targetChapter: 'Complex Numbers',
    targetSubtopic: 'Triangle inequality'
  },

  // Quadratic Equations
  'jee-mains-SUBTOPIC-Mathematics-roots-of-quadratic-equations': {
    targetChapter: 'Quadratic Equations',
    targetSubtopic: 'Nature of roots'
  },
  'jee-mains-SUBTOPIC-Mathematics-relations-between-roots-and-coefficients': {
    targetChapter: 'Quadratic Equations',
    targetSubtopic: 'Sum and product of roots'
  },

  // Matrices & Determinants
  'jee-mains-SUBTOPIC-Mathematics-Types-of-matrices': {
    targetChapter: 'Matrices & Determinants',
    targetSubtopic: 'Types of matrices'
  },
  'jee-mains-SUBTOPIC-Mathematics-adjoint,-inverse': {
    targetChapter: 'Matrices & Determinants',
    targetSubtopic: 'Adjoint and inverse'
  },
  'jee-mains-SUBTOPIC-Mathematics-solution-of-linear-equations-using-matrix-inversion-or-Cramer’s-Rule': {
    targetChapter: 'Matrices & Determinants',
    targetSubtopic: 'Solution of linear equations'
  },

  // Permutations & Combinations
  'jee-mains-SUBTOPIC-Mathematics-Fundamental-principles': {
    targetChapter: 'Permutations & Combinations',
    targetSubtopic: 'Fundamental principles'
  },
  'jee-mains-SUBTOPIC-Mathematics-linear-and-circular-permutations': {
    targetChapter: 'Permutations & Combinations',
    targetSubtopic: 'Linear permutations'
  },
  'jee-mains-SUBTOPIC-Mathematics-combinations': {
    targetChapter: 'Permutations & Combinations',
    targetSubtopic: 'Combinations'
  },

  // Binomial Theorem
  'jee-mains-SUBTOPIC-Mathematics-General-term': {
    targetChapter: 'Binomial Theorem',
    targetSubtopic: 'General term'
  },
  'jee-mains-SUBTOPIC-Mathematics-middle-term': {
    targetChapter: 'Binomial Theorem',
    targetSubtopic: 'Middle term'
  },
  'jee-mains-SUBTOPIC-Mathematics-coefficient-estimation': {
    targetChapter: 'Binomial Theorem',
    targetSubtopic: 'Coefficient estimation'
  },

  // Sequences & Series
  'jee-mains-SUBTOPIC-Mathematics-Arithmetic-Progression': {
    targetChapter: 'Sequences & Series',
    targetSubtopic: 'Arithmetic Progression'
  },
  'jee-mains-SUBTOPIC-Mathematics-Geometric-Progression': {
    targetChapter: 'Sequences & Series',
    targetSubtopic: 'Geometric Progression'
  },
  'jee-mains-SUBTOPIC-Mathematics-Insertion-of-AM-and-GM': {
    targetChapter: 'Sequences & Series',
    targetSubtopic: 'Insertion of AM and GM'
  },

  // Limits, Continuity & Differentiability
  "jee-mains-SUBTOPIC-Mathematics-L'Hospital-rule": {
    targetChapter: 'Limits, Continuity & Differentiability',
    targetSubtopic: "L'Hospital rule"
  },
  'jee-mains-SUBTOPIC-Mathematics-derivative-as-a-rate-of-change': {
    targetChapter: 'Limits, Continuity & Differentiability',
    targetSubtopic: 'Derivative as a rate of change'
  },
  'jee-mains-SUBTOPIC-Mathematics-continuity-at-a-point': {
    targetChapter: 'Limits, Continuity & Differentiability',
    targetSubtopic: 'Continuity of functions at a point and in an interval'
  },

  // Integrals
  'jee-mains-SUBTOPIC-Mathematics-Fundamental-theorem-of-calculus': {
    targetChapter: 'Integrals',
    targetSubtopic: 'Fundamental theorem of calculus'
  },
  'jee-mains-SUBTOPIC-Mathematics-integration-by-parts': {
    targetChapter: 'Integrals',
    targetSubtopic: 'Integration by parts'
  },
  'jee-mains-SUBTOPIC-Mathematics-definite-integrals-and-their-properties': {
    targetChapter: 'Integrals',
    targetSubtopic: 'Definite integrals'
  },

  // Differential Equations
  'jee-mains-SUBTOPIC-Mathematics-Order-and-degree': {
    targetChapter: 'Differential Equations',
    targetSubtopic: 'Order and degree'
  },
  'jee-mains-SUBTOPIC-Mathematics-solution-of-differential-equations-by-separation-of-variables-and-linear-form': {
    targetChapter: 'Differential Equations',
    targetSubtopic: 'Separation of variables'
  },

  // Straight Lines
  'jee-mains-SUBTOPIC-Mathematics-Slope,-intercept-forms': {
    targetChapter: 'Straight Lines',
    targetSubtopic: 'Slope and intercept forms'
  },
  'jee-mains-SUBTOPIC-Mathematics-perpendicular-distance': {
    targetChapter: 'Straight Lines',
    targetSubtopic: 'Perpendicular distance'
  },
  'jee-mains-SUBTOPIC-Mathematics-angle-between-two-lines': {
    targetChapter: 'Straight Lines',
    targetSubtopic: 'Angle between lines'
  },
  'jee-mains-SUBTOPIC-Mathematics-Cartesian-and-polar-coordinate-systems': {
    targetChapter: 'Straight Lines',
    targetSubtopic: 'Slope and intercept forms'
  },

  // Conic Sections (Parabola, Ellipse, Hyperbola)
  'jee-mains-SUBTOPIC-Mathematics-Standard-forms-of-parabolas,-ellipses,-and-hyperbolas': {
    targetChapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
    targetSubtopic: 'Standard forms of parabola'
  },
  'jee-mains-SUBTOPIC-Mathematics-directrix-and-focus': {
    targetChapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
    targetSubtopic: 'Directrix and focus equations'
  },

  // Vectors
  'jee-mains-SUBTOPIC-Mathematics-Scalar-and-vector-products': {
    targetChapter: 'Vectors',
    targetSubtopic: 'Scalar and vector products'
  },
  'jee-mains-SUBTOPIC-Mathematics-projection-of-vectors': {
    targetChapter: 'Vectors',
    targetSubtopic: 'Section formula and projection of vectors'
  },
  'jee-mains-SUBTOPIC-Mathematics-linear-combination': {
    targetChapter: 'Vectors',
    targetSubtopic: 'Collinearity and coplanarity of vectors'
  },

  // 3D Geometry
  'jee-mains-SUBTOPIC-Mathematics-Direction-cosines-and-ratios': {
    targetChapter: '3D Geometry',
    targetSubtopic: 'Direction cosines and ratios'
  },
  'jee-mains-SUBTOPIC-Mathematics-equations-of-lines-in-space': {
    targetChapter: '3D Geometry',
    targetSubtopic: 'Equations of lines in space'
  },
  'jee-mains-SUBTOPIC-Mathematics-shortest-distance-between-two-lines': {
    targetChapter: '3D Geometry',
    targetSubtopic: 'Shortest distance between two lines'
  },

  // Trigonometric Identities & Inverse Trigonometric Functions
  'jee-mains-SUBTOPIC-Mathematics-Multiple-and-sub-multiple-angles': {
    targetChapter: 'Trigonometric Identities',
    targetSubtopic: 'Multiple and sub-multiple angles'
  },
  'jee-mains-SUBTOPIC-Mathematics-inverse-trigonometric-functions': {
    targetChapter: 'Inverse Trigonometric Functions',
    targetSubtopic: 'Properties of inverse trig functions'
  },

  // Statistics
  'jee-mains-SUBTOPIC-Mathematics-Mean,-median,-mode': {
    targetChapter: 'Statistics',
    targetSubtopic: 'Mean, median, mode'
  },
  'jee-mains-SUBTOPIC-Mathematics-standard-deviation': {
    targetChapter: 'Statistics',
    targetSubtopic: 'Standard deviation'
  },
  'jee-mains-SUBTOPIC-Mathematics-variance': {
    targetChapter: 'Statistics',
    targetSubtopic: 'Variance'
  },

  // Probability
  'jee-mains-SUBTOPIC-Mathematics-Conditional-probability': {
    targetChapter: 'Probability',
    targetSubtopic: 'Conditional probability'
  },
  'jee-mains-SUBTOPIC-Mathematics-independent-events': {
    targetChapter: 'Probability',
    targetSubtopic: 'Independent events'
  },
  "jee-mains-SUBTOPIC-Mathematics-Bayes'-theorem": {
    targetChapter: 'Probability',
    targetSubtopic: "Bayes' theorem"
  },
  'jee-mains-SUBTOPIC-Mathematics-probability-distribution': {
    targetChapter: 'Probability',
    targetSubtopic: 'Probability distribution'
  }
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
      { exam: { $regex: /jee/i }, subject: { $regex: /^mathematics$/i } },
      { category: 'jee-mains', subject: { $regex: /^mathematics$/i } },
      { testId: { $regex: /^jee-mains-subtopic-mathematics/i } }
    ]
  }).toArray();

  const papers = all.filter(t => t.type === 'SUBTOPIC' || (t.testId && t.testId.includes('-SUBTOPIC-')) || (t.type || '').toLowerCase().includes('topic'));

  console.log(`Found ${papers.length} JEE Main Mathematics Topic-wise tests in DB.`);

  const targetMap = {};
  let mapped = 0;
  let unmapped = [];

  for (const p of papers) {
    const key = p.testId;
    let target = MATH_SUBTOPIC_TARGETS[key];

    if (!target) {
      // Try matching by normalized title
      const foundEntry = Object.entries(MATH_SUBTOPIC_TARGETS).find(([k, v]) => norm(k) === norm(key) || norm(p.title) === norm(v.targetSubtopic));
      if (foundEntry) {
        target = foundEntry[1];
      }
    }

    if (target) {
      mapped++;
      targetMap[p.testId] = {
        testId: p.testId,
        _id: String(p._id),
        title: p.title,
        targetChapter: target.targetChapter,
        targetSubtopic: target.targetSubtopic,
        questionCount: p.questions ? p.questions.length : 0
      };
    } else {
      unmapped.push({ id: p.testId, title: p.title, chapter: p.chapter });
    }
  }

  console.log(`Successfully resolved targets: ${mapped} / ${papers.length}`);
  if (unmapped.length > 0) {
    console.log(`Unmapped count: ${unmapped.length}`);
    console.log('Unmapped examples:', unmapped);
  }

  const outputPath = path.join(__dirname, 'jee_math_subtopic_test_targets.json');
  fs.writeFileSync(outputPath, JSON.stringify(targetMap, null, 2));
  console.log(`Saved targets map to: ${outputPath}`);

  await client.close();
}

buildTargets();
