const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

function repairString(str, isOption = false) {
  if (!str || typeof str !== 'string') return str;

  // 1. Fix corrupted control characters where first letter was swallowed by escape
  let fixed = str
    .replace(/\t(ext|imes|heta|au)/g, (m, g) => {
      if (g === 'ext') return '\\text';
      if (g === 'imes') return '\\times';
      if (g === 'heta') return '\\theta';
      if (g === 'au') return '\\tau';
      return m;
    })
    .replace(/\x0crac/g, '\\frac')
    .replace(/\x08eta/g, '\\beta')
    .replace(/\rightleftharpoons/g, '\\rightleftharpoons');

  // 2. Fix double backslashes before circ or LaTeX commands
  fixed = fixed.replace(/\\\\+circ/g, '\\circ');
  fixed = fixed.replace(/\\\\+([a-zA-Z]+)/g, '\\$1');

  // 3. If it's an option or standalone math expression without any $ delimiters, and contains math symbols:
  if (!fixed.includes('$')) {
    const trimmed = fixed.trim();
    if (isOption && (/\\(times|frac|sqrt|pm|approx|circ|degree)/.test(trimmed) || /10\^|[-+0-9.]+\s*\\text\{/.test(trimmed))) {
      return `$${trimmed}$`;
    }
  }

  // 4. Process segments outside $...$ and $$...$$
  const parts = fixed.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

  for (let i = 0; i < parts.length; i += 2) {
    let segment = parts[i];
    if (!segment) continue;

    // A. Fix parenthesized formulas: e.g. (\mu = q \times d) or (M_{\text{NaOH}} = 40\text{ g/mol})
    segment = segment.replace(/\(\s*([a-zA-Z\\][a-zA-Z0-9_^{}\s]*\s*=\s*[^)]+)\s*\)/g, (m, inner) => {
      if (/\\|[\^_{}]/.test(inner)) {
        return `($${inner.trim()}$)`;
      }
      return m;
    });

    // B. Fix degree / temperature expressions outside math:
    // e.g. 180^\circ, 104.5^\circ, 25^\circ C, 25^\circ\text{C}, 180\circ, 180\degree, 180°
    segment = segment.replace(/([0-9.]+)\s*(?:\^\\circ|\^\{\\circ\}|\\circ|\\degree|°)\s*([CKF]|\\text\{[CKF]\})?(\b|[^\w]|$)/g, (m, num, unit, boundary) => {
      if (unit) {
        const cleanUnit = unit.replace(/\\text\{([^{}]+)\}/, '$1');
        return `$${num}^\\circ\\text{${cleanUnit}}${boundary}`;
      }
      return `$${num}^\\circ$${boundary}`;
    });

    // C. Fix chemical formulas and terms with \text{...} outside math:
    // Matches expressions like \text{XeF}_4, \text{H}_2\text{O}, \text{Al}^{3+}, \text{ClO}_3^-, etc.
    segment = segment.replace(/(\\text\{[^{}]+\}(?:_\{?[0-9a-zA-Z+*\-]+\}?|\^\{?[0-9a-zA-Z+*\-]+\}?)*(?:\\text\{[^{}]+\}(?:_\{?[0-9a-zA-Z+*\-]+\}?|\^\{?[0-9a-zA-Z+*\-]+\}?)*)*)/g, (m) => {
      return `$${m}$`;
    });

    // D. Fix bare Greek or symbol commands outside math:
    // e.g. \sigma_{2p_z}, \mu, \alpha, \Delta, etc.
    segment = segment.replace(/\\(sigma|pi|mu|alpha|beta|gamma|delta|Delta|lambda|theta|omega|Omega)(?:_\{?[0-9a-zA-Z*]+\}?|\^\{?[0-9a-zA-Z*]+\}?)*/g, (m) => {
      return `$${m}$`;
    });

    // E. Clean any adjacent dollars: e.g. $...$$...$ -> $... ...$
    segment = segment.replace(/\$\$/g, '');

    parts[i] = segment;
  }

  return parts.join('');
}

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Missing MONGODB_URI in .env.local');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  console.log('Connected to MongoDB Atlas');

  const db = client.db();
  const col = db.collection('questionBank');

  console.log('Fetching all documents from questionBank...');
  const cursor = col.find({});
  let totalDocs = 0;
  let modifiedDocs = 0;
  const chapterBreakdown = {};

  let batch = [];
  const BATCH_SIZE = 500;

  while (await cursor.hasNext()) {
    const doc = await cursor.next();
    totalDocs++;

    let changed = false;
    const newQ = repairString(doc.question, false);
    if (newQ !== doc.question) changed = true;

    let newOpts = doc.options;
    if (doc.options && Array.isArray(doc.options)) {
      newOpts = doc.options.map(opt => {
        const repaired = repairString(opt, true);
        if (repaired !== opt) changed = true;
        return repaired;
      });
    }

    let newExp = doc.explanation;
    if (doc.explanation) {
      newExp = repairString(doc.explanation, false);
      if (newExp !== doc.explanation) changed = true;
    }

    if (changed) {
      modifiedDocs++;
      const ch = doc.chapter || 'Unknown';
      chapterBreakdown[ch] = (chapterBreakdown[ch] || 0) + 1;

      batch.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: {
              question: newQ,
              options: newOpts,
              explanation: newExp,
              updatedAt: new Date()
            }
          }
        }
      });

      if (batch.length >= BATCH_SIZE) {
        process.stdout.write(`Writing batch of ${batch.length} updates... `);
        await col.bulkWrite(batch);
        console.log('done.');
        batch = [];
      }
    }
  }

  if (batch.length > 0) {
    process.stdout.write(`Writing final batch of ${batch.length} updates... `);
    await col.bulkWrite(batch);
    console.log('done.');
    batch = [];
  }

  console.log('\n--- Migration Results ---');
  console.log(`Total documents scanned: ${totalDocs}`);
  console.log(`Total documents modified: ${modifiedDocs}`);
  console.log('\nBreakdown by Chapter:');
  console.table(chapterBreakdown);

  // Verification on Equilibrium and Chemical Bonding
  console.log('\n--- Verifying KaTeX on Equilibrium & Chemical Bonding ---');
  for (const ch of ['Equilibrium', 'Chemical Bonding and Molecular Structure']) {
    const docs = await col.find({ chapter: ch }).toArray();
    let katexErrors = 0;
    docs.forEach(doc => {
      const textToTest = [doc.question, ...(doc.options || []), doc.explanation || ''].join(' ');
      const regex = /\$([^$]+)\$/g;
      let match;
      while ((match = regex.exec(textToTest)) !== null) {
        try {
          katex.renderToString(match[1], { throwOnError: true });
        } catch (e) {
          katexErrors++;
          console.error(`KaTeX error in ${doc._id} (${doc.subTopic}): ${e.message} in "${match[1]}"`);
        }
      }
    });
    console.log(`Chapter: "${ch}": ${docs.length} docs, KaTeX errors: ${katexErrors}`);
  }

  await client.close();
  console.log('MongoDB connection closed.');
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
