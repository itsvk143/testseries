import fs from 'fs';
import { MongoClient, ObjectId } from 'mongodb';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

// Read LatexRenderer.js and test full simulation
const src = fs.readFileSync('src/components/LatexRenderer.js', 'utf8');
const start = src.indexOf('const katexOpts =');
const end = src.indexOf('const renderFragment =');
const extracted = src.slice(start, end) + '\nreturn { preProcess, parseContentBlocks, sanitizeMath, katexOpts };';

const { preProcess, parseContentBlocks, sanitizeMath, katexOpts } = new Function(extracted)();

const katex = await import('katex');

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const test = await db.collection('testPapers').findOne({ testId: 'neet-CHAPTER-Chemistry-Chemical-Kinetics-12' });
const qIds = test.questions.map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
const qDocs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
const map = new Map(qDocs.map(q => [q._id.toString(), q]));

console.log('Testing rendering for all 45 questions...');

let totalErrors = 0;

for (let i = 0; i < test.questions.length; i++) {
  const qId = test.questions[i];
  const q = map.get(qId.toString());
  if (!q) continue;

  const rawText = q.question || q.questionText || q.text || '';
  const blocks = parseContentBlocks(rawText);

  for (const block of blocks) {
    if (block.type === 'table') {
      // test headers & rows
      for (const h of block.headers) {
        testSegment(h, `Q${i + 1} table header`);
      }
      for (const r of block.rows) {
        for (const cell of r) {
          testSegment(cell, `Q${i + 1} table cell`);
        }
      }
    } else {
      testSegment(block.content, `Q${i + 1} question body`);
    }
  }

  // Also test options
  if (Array.isArray(q.options)) {
    q.options.forEach((opt, oIdx) => {
      const optStr = typeof opt === 'string' ? opt : (opt?.text || '');
      testSegment(optStr, `Q${i + 1} opt ${oIdx}`);
    });
  }

  // Also test explanation
  if (q.explanation) {
    testSegment(q.explanation, `Q${i + 1} explanation`);
  }
}

function testSegment(raw, label) {
  const prepared = preProcess(raw);
  const parts = prepared.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\ce\{(?:[^{}]|\{[^{}]*\})*\}|\\pu\{[^}]*\})/g);
  
  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const math = sanitizeMath(part.slice(2, -2));
      try {
        katex.default.renderToString(math, katexOpts(true));
      } catch (e) {
        console.error(`[ERROR KaTeX display] ${label}:`, e.message, 'Math was:', math);
        totalErrors++;
      }
    } else if (part.startsWith('$') && part.endsWith('$')) {
      const math = sanitizeMath(part.slice(1, -1));
      try {
        katex.default.renderToString(math, katexOpts(false));
      } catch (e) {
        console.error(`[ERROR KaTeX inline] ${label}:`, e.message, 'Math was:', math);
        totalErrors++;
      }
    }
  }
}

console.log(`\nRender simulation complete with ${totalErrors} errors.`);
await client.close();
