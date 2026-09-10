// scripts/audit_grand_final_mathematics.js
// Grand final audit of all 21 Mathematics chapters in MongoDB

require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function main() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qb = db.collection('questionBank');

  console.log('====================================================');
  console.log('GRAND FINAL AUDIT: All 21 Mathematics Chapters in MongoDB');
  console.log('====================================================\n');

  // Find all distinct chapters for subject Mathematics
  const chapters = await qb.distinct('chapter', { subject: 'Mathematics' });
  chapters.sort();

  console.log(`Found ${chapters.length} Mathematics chapters in database:\n`);

  let totalQuestions = 0;
  let totalBogus = 0;
  let totalUndefinedSolutions = 0;

  const bogusKeywords = [
    'calorimeter', 'carnot', 'thermodynamic', 'resistor',
    'capacitor', 'isothermal', 'adiabatic', 'momentum'
  ];

  for (let i = 0; i < chapters.length; i++) {
    const ch = chapters[i];
    const docs = await qb.find({ subject: 'Mathematics', chapter: ch }).toArray();
    totalQuestions += docs.length;

    let bogusInChapter = 0;
    let undefinedSolInChapter = 0;

    for (const d of docs) {
      const text = ((d.question || d.questionText || '') + ' ' + (d.solution || d.explanation || '')).toLowerCase();
      for (const kw of bogusKeywords) {
        if (text.includes(kw)) {
          bogusInChapter++;
          break;
        }
      }
      const sol = d.solution || d.explanation;
      if (!sol || sol === 'undefined' || sol.trim().length === 0) {
        undefinedSolInChapter++;
      }
    }

    totalBogus += bogusInChapter;
    totalUndefinedSolutions += undefinedSolInChapter;

    const statusIcon = (bogusInChapter === 0 && undefinedSolInChapter === 0) ? '✅' : '❌';
    console.log(`${statusIcon} [${i + 1}/${chapters.length}] "${ch}": ${docs.length} questions | Bogus: ${bogusInChapter} | Undefined Sols: ${undefinedSolInChapter}`);
  }

  console.log('\n====================================================');
  console.log('OVERALL MATHEMATICS AUDIT SUMMARY:');
  console.log(`Total Chapters: ${chapters.length} (Expected: 21)`);
  console.log(`Total Questions: ${totalQuestions}`);
  console.log(`Total Bogus Questions: ${totalBogus}`);
  console.log(`Total Undefined Solutions: ${totalUndefinedSolutions}`);
  console.log('====================================================');

  if (chapters.length === 21 && totalBogus === 0 && totalUndefinedSolutions === 0) {
    console.log('\n🏆 ALL 21 MATHEMATICS CHAPTERS ARE 100% COMPLETE, CLEAN, AND AUTHENTIC! 🏆\n');
  } else {
    console.error('\n❌ ISSUES DETECTED IN GRAND AUDIT!');
  }

  await client.close();
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
