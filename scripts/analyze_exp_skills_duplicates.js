require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/\\(text|mathrm|mathbf|textit)\{([^}]+)\}/g, '$2')
    .replace(/\$/g, ' ')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return new Set(normalizeText(text).split(/\s+/).filter(w => w.length > 2));
}

function jaccard(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let inter = 0;
  for (const item of setA) {
    if (setB.has(item)) inter++;
  }
  return inter / (setA.size + setB.size - inter);
}

function scoreQuality(q) {
  let s = 0;
  if (Array.isArray(q.options) && q.options.length >= 4) s += 30;
  if (q.correctOption !== undefined || q.answer !== undefined) s += 25;
  if (q.explanation && q.explanation.length > 20) s += 20;
  if (q.difficulty) s += 10;
  return s;
}

async function analyzeTest() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  const test = await db.collection('testPapers').findOne({ testId: 'jee-mains-CHAPTER-Physics-Experimental-Skills-12' });
  const qIds = test.questions || [];
  const objIds = qIds.map(id => new ObjectId(id));
  const qs = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
  const qMap = new Map();
  qs.forEach(q => qMap.set(q._id.toString(), q));

  const items = qIds.map(id => qMap.get(id.toString())).filter(Boolean);

  const pairs = [];
  for (let i = 0; i < items.length; i++) {
    const qA = items[i];
    const normA = normalizeText(qA.question || qA.questionText || '');
    const tokA = tokenize(qA.question || qA.questionText || '');

    for (let j = i + 1; j < items.length; j++) {
      const qB = items[j];
      const normB = normalizeText(qB.question || qB.questionText || '');
      if (normA && normB && normA === normB) {
        pairs.push({ i, j, idA: qA._id.toString(), idB: qB._id.toString(), type: 'EXACT', sim: 1.0 });
      } else {
        const tokB = tokenize(qB.question || qB.questionText || '');
        const sim = jaccard(tokA, tokB);
        if (sim >= 0.85) {
          pairs.push({ i, j, idA: qA._id.toString(), idB: qB._id.toString(), type: 'HIGH_SIMILARITY', sim });
        }
      }
    }
  }

  console.log('Total duplicate pairs found:', pairs.length);
  const parent = {};
  function find(x) {
    if (!parent[x]) parent[x] = x;
    if (parent[x] === x) return x;
    return parent[x] = find(parent[x]);
  }
  function union(x, y) {
    const px = find(x);
    const py = find(y);
    if (px !== py) parent[px] = py;
  }

  pairs.forEach(p => union(p.idA, p.idB));

  const groups = {};
  pairs.forEach(p => {
    const root = find(p.idA);
    if (!groups[root]) groups[root] = new Set();
    groups[root].add(p.idA);
    groups[root].add(p.idB);
  });

  console.log('Duplicate groups:', Object.keys(groups).length);
  let totalToRemove = 0;
  for (const [root, set] of Object.entries(groups)) {
    const groupQs = Array.from(set).map(id => qMap.get(id));
    groupQs.sort((a, b) => scoreQuality(b) - scoreQuality(a));
    const kept = groupQs[0];
    const toRemove = groupQs.slice(1);
    console.log(`\nGroup of ${groupQs.length}:`);
    console.log(`  KEPT: ${kept._id} | Text: ${(kept.question||'').substring(0, 70)}...`);
    toRemove.forEach(r => {
      console.log(`  REMOVE: ${r._id} | Text: ${(r.question||'').substring(0, 70)}...`);
      totalToRemove++;
    });
  }

  console.log('\nTotal questions marked for removal/replacement in test:', totalToRemove);

  await client.close();
}

analyzeTest().catch(console.error);
