import fs from 'fs';
import { MongoClient, ObjectId } from 'mongodb';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const test = await db.collection('testPapers').findOne({ testId: 'neet-CHAPTER-Chemistry-Chemical-Kinetics-12' });
const qIds = test.questions.map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
const qDocs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
const map = new Map(qDocs.map(q => [q._id.toString(), q]));

console.log(`Inspecting all ${test.questions.length} questions for Chemical Kinetics...`);

const report = [];

for (let i = 0; i < test.questions.length; i++) {
  const qId = test.questions[i];
  const q = map.get(qId.toString());
  if (!q) {
    report.push({ index: i + 1, error: 'NOT_FOUND_IN_QB' });
    continue;
  }

  const text = q.question || q.questionText || q.text || '';
  const exp = q.explanation || '';
  const opts = Array.isArray(q.options) ? q.options.map(o => typeof o === 'string' ? o : o.text) : [];

  // Check potential issues:
  const issues = [];

  // 1. Raw -> or \rightarrow without math
  if (text.includes('->') || text.includes('-->')) issues.push('raw arrow ->');
  
  // 2. Unwrapped ions or subscripts
  if (/(?<![\$\\])\b[A-Za-z]+_[0-9]+\b/.test(text)) issues.push('unwrapped subscript');
  if (/\b10\^\{?[+\-]?[0-9]+\}?\b(?!\$)/.test(text) && !text.includes('$10^')) issues.push('unwrapped 10^ power');

  // 3. Raw \%
  if (text.includes('\\%') && !text.includes('$%') && !text.includes('\\%')) issues.push('raw %');

  // 4. Broken markdown tables
  if (text.includes('|') && text.includes('Exp.')) {
    const lines = text.split('\n').filter(l => l.trim().startsWith('|'));
    if (lines.length < 3) issues.push('broken table');
  }

  // 5. Options check
  const optIssues = [];
  opts.forEach((o, oIdx) => {
    if (o.includes('->')) optIssues.push(`opt ${oIdx}: raw arrow`);
  });

  report.push({
    qNum: i + 1,
    id: qId.toString(),
    textSample: text.slice(0, 80),
    issues: issues.concat(optIssues),
    optionsCount: opts.length,
    correctAnswer: q.correctAnswer
  });
}

const problemQuestions = report.filter(r => r.issues.length > 0);
console.log(`Questions with issues: ${problemQuestions.length}`);
problemQuestions.forEach(p => {
  console.log(`Q${p.qNum}: issues: ${p.issues.join(', ')} | sample: ${p.textSample}`);
});

await client.close();
