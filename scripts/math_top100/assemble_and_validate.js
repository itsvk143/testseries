const fs = require('fs');
const path = require('path');

// Canonical list of 21 chapters and 119 subtopics from src/app/admin/page.js
const CANONICAL_MATH = {
  "Sets, Relations, and Functions": [
    "Sets, subsets, power set, and Venn diagrams",
    "Set operations (union, intersection, difference, complement)",
    "Types of relations (reflexive, symmetric, transitive, equivalence)",
    "Functions (domain, codomain, range)",
    "Types of functions (one-one, onto, composite, invertible)"
  ],
  "Complex Numbers": [
    "Modulus and argument",
    "Square roots",
    "Triangle inequality",
    "Argand plane",
    "Euler's form and rotation of complex numbers",
    "Geometry in complex plane (circle, line equations)"
  ],
  "Quadratic Equations": [
    "Nature of roots",
    "Discriminant",
    "Sum and product of roots",
    "Quadratic inequalities",
    "Roots of polynomial",
    "Common roots of two quadratic equations",
    "Location of roots",
    "Maximum and minimum values of quadratic expressions"
  ],
  "Sequences and Series": [
    "Arithmetic Progression",
    "Geometric Progression",
    "Insertion of AM and GM",
    "General term and sum of AP and GP",
    "Infinite geometric series"
  ],
  "Permutations and Combinations": [
    "Fundamental principles",
    "Linear permutations",
    "Circular permutations",
    "Combinations",
    "Permutations of objects not all distinct",
    "Division into groups and distribution",
    "Derangements and grid/distribution problems"
  ],
  "Binomial Theorem": [
    "General term",
    "Middle term",
    "Coefficient estimation",
    "Binomial identities",
    "Sum of binomial coefficients and series"
  ],
  "Straight Lines": [
    "Slope and intercept forms",
    "Perpendicular distance",
    "Angle between lines",
    "Concurrent lines",
    "Family of lines and angular bisectors",
    "Distance between parallel lines"
  ],
  "Circles": [
    "Standard equation",
    "General equation of circle",
    "Chord of contact",
    "Circle through three points",
    "Parametric equation of circle",
    "Director circle and chord with given midpoint"
  ],
  "Conic Sections (Parabola, Ellipse, Hyperbola)": [
    "Standard forms of parabola",
    "Ellipse equations",
    "Hyperbola equations",
    "Focal properties and eccentricity of conics",
    "Directrix and focus equations",
    "Rectangular hyperbola and asymptotes"
  ],
  "Trigonometric Identities": [
    "Multiple and sub-multiple angles",
    "Trigonometric equations and general solutions",
    "Maximum and minimum values of trigonometric expressions"
  ],
  "Inverse Trigonometric Functions": [
    "Principal values",
    "Properties of inverse trig functions",
    "Equations involving inverse trig functions",
    "Domain and range of inverse trigonometric functions",
    "Sum and difference formulas for inverse trig functions"
  ],
  "Matrices & Determinants": [
    "Types of matrices",
    "Adjoint and inverse",
    "Solution of linear equations",
    "Cramer's rule",
    "Properties of determinants",
    "System of linear equations (consistency and rank)",
    "Orthogonal, symmetric, and skew-symmetric matrices"
  ],
  "Limits, Continuity & Differentiability": [
    "L'Hospital rule",
    "Derivative as a rate of change",
    "Standard limits and evaluation of indeterminate forms",
    "Continuity of functions at a point and in an interval",
    "Differentiability and differentiation rules"
  ],
  "Application of Derivatives": [
    "Maxima and minima",
    "Rate of change",
    "Increasing and decreasing functions",
    "Points of inflection and concavity",
    "Monotonicity of functions",
    "Optimization problems"
  ],
  "Integrals": [
    "Fundamental theorem of calculus",
    "Integration by parts",
    "Definite integrals",
    "Properties of definite integrals",
    "Integration by substitution and algebraic fractions",
    "Trigonometric and irrational integrals",
    "Leibniz rule (differentiation under integral sign)"
  ],
  "Differential Equations": [
    "Order and degree",
    "Separation of variables",
    "Linear differential equations",
    "Homogeneous equations",
    "Exact differential equations and integrating factors",
    "Formation of differential equations"
  ],
  "Areas": [
    "Area under a curve",
    "Area between two curves",
    "Area bounded by parabolas, circles, and lines",
    "Symmetrical areas and piecewise integrations"
  ],
  "Vectors": [
    "Scalar and vector products",
    "Position vectors",
    "Collinearity and coplanarity of vectors",
    "Section formula and projection of vectors",
    "Vector addition and unit vectors"
  ],
  "3D Geometry": [
    "Direction cosines and ratios",
    "Vector and Cartesian equations of lines",
    "Angle between two lines",
    "Shortest distance between two skew lines",
    "Distance between parallel lines"
  ],
  "Probability": [
    "Conditional probability",
    "Independent events",
    "Bayes' theorem",
    "Probability distribution",
    "Total probability theorem",
    "Random variables, expectation, and variance",
    "Geometric probability and odds"
  ],
  "Statistics": [
    "Mean, median, mode",
    "Standard deviation",
    "Variance",
    "Mean deviation about mean and median",
    "Coefficient of variation and grouped frequency distributions"
  ]
};

function validateLatex(text, context) {
  let inDollar = false;
  let inDoubleDollar = false;
  let i = 0;
  let dollarCount = 0;
  for (let j = 0; j < text.length; j++) {
    if (text[j] === '$' && (j === 0 || text[j-1] !== '\\')) {
      dollarCount++;
    }
  }
  if (dollarCount % 2 !== 0) {
    console.warn(`[LaTeX Warning] Unmatched dollar sign in ${context}: ${text}`);
  }
}

function assembleAndValidate() {
  const baseDir = path.join(__dirname);
  const b1 = JSON.parse(fs.readFileSync(path.join(baseDir, 'math_batch1.json'), 'utf8'));
  const b2 = JSON.parse(fs.readFileSync(path.join(baseDir, 'math_batch2.json'), 'utf8'));
  const b3 = JSON.parse(fs.readFileSync(path.join(baseDir, 'math_batch3.json'), 'utf8'));
  const b4 = JSON.parse(fs.readFileSync(path.join(baseDir, 'math_batch4.json'), 'utf8'));

  const allQuestions = [...b1, ...b2, ...b3, ...b4];
  console.log(`Loaded batches: Batch 1 (${b1.length}), Batch 2 (${b2.length}), Batch 3 (${b3.length}), Batch 4 (${b4.length})`);
  console.log(`Total questions loaded: ${allQuestions.length}`);

  const grouped = {};
  let totalSubtopicsCount = 0;

  for (const [chapter, subtopics] of Object.entries(CANONICAL_MATH)) {
    grouped[chapter] = {};
    for (const subtopic of subtopics) {
      totalSubtopicsCount++;
      const matched = allQuestions.filter(q => 
        (q.chapter === chapter || (chapter === "Sequences and Series" && q.chapter === "Sequences & Series") || (chapter === "Permutations and Combinations" && q.chapter === "Permutations & Combinations")) &&
        (q.subtopic === subtopic || q.subTopic === subtopic)
      );

      if (matched.length !== 5) {
        console.error(`❌ Mismatch in [${chapter}] -> "${subtopic}": Expected 5, found ${matched.length}`);
      }

      grouped[chapter][subtopic] = matched.map((q, idx) => {
        validateLatex(q.question, `${chapter} > ${subtopic} > Q${idx+1} question`);
        q.options.forEach((opt, oIdx) => validateLatex(opt, `${chapter} > ${subtopic} > Q${idx+1} opt${oIdx}`));
        validateLatex(q.explanation, `${chapter} > ${subtopic} > Q${idx+1} expl`);

        if (q.options.length !== 4) {
          throw new Error(`Invalid options count in ${chapter} > ${subtopic} > Q${idx+1}`);
        }
        let correctIdx = q.correctAnswer;
        if (typeof correctIdx === 'string') {
          const directIdx = q.options.indexOf(correctIdx);
          if (directIdx !== -1) {
            correctIdx = directIdx;
          } else if (['a', 'b', 'c', 'd'].includes(correctIdx.toLowerCase())) {
            correctIdx = { a: 0, b: 1, c: 2, d: 3 }[correctIdx.toLowerCase()];
          } else {
            const parsed = parseInt(correctIdx, 10);
            if (!isNaN(parsed) && parsed >= 0 && parsed <= 3) {
              correctIdx = parsed;
            } else {
              throw new Error(`Cannot resolve correctAnswer "${q.correctAnswer}" in ${chapter} > ${subtopic} > Q${idx+1}`);
            }
          }
        }

        if (![0, 1, 2, 3].includes(correctIdx)) {
          throw new Error(`Invalid correctAnswer in ${chapter} > ${subtopic} > Q${idx+1}: ${correctIdx}`);
        }

        return {
          question: q.question,
          options: q.options,
          correctAnswer: correctIdx,
          explanation: q.explanation,
          type: "MCQ",
          questionType: "MCQ (Multiple Choice Question)",
          marks: 4,
          negativeMarks: 1,
          difficulty: "Difficult",
          chapter: chapter,
          subtopic: subtopic,
          subTopic: subtopic,
          subject: "Mathematics",
          examType: "JEE Mains"
        };
      });
    }
  }

  console.log(`Total Chapters verified: ${Object.keys(grouped).length} / 21`);
  console.log(`Total Subtopics verified: ${totalSubtopicsCount} / 119`);

  let finalCount = 0;
  for (const ch of Object.keys(grouped)) {
    for (const st of Object.keys(grouped[ch])) {
      finalCount += grouped[ch][st].length;
    }
  }
  console.log(`Total assembled questions: ${finalCount} (Target: 595)`);

  if (finalCount !== 595) {
    throw new Error(`Total questions ${finalCount} does not equal 595!`);
  }

  // 1. Write src/data/questionsjeem/chapter_mathematics.json
  const jeemMathPath = path.join(__dirname, '..', '..', 'src', 'data', 'questionsjeem', 'chapter_mathematics.json');
  fs.writeFileSync(jeemMathPath, JSON.stringify(grouped, null, 2), 'utf8');
  console.log(`✅ Successfully written to ${jeemMathPath}`);

  // 2. Write master file src/data/maths_top100_595.json
  const masterPath = path.join(__dirname, '..', '..', 'src', 'data', 'maths_top100_595.json');
  const masterData = {
    Mathematics: grouped
  };
  fs.writeFileSync(masterPath, JSON.stringify(masterData, null, 2), 'utf8');
  console.log(`✅ Successfully written master file to ${masterPath}`);
}

assembleAndValidate();
