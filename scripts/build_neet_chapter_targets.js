require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const fs = require('fs');

function norm(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[–—−]/g, '-')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

async function buildTargets() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  const allTests = await db.collection('testPapers').find({}).toArray();

  const neetChapterTests = allTests.filter(t => {
    const isNeet = (t.exam || '').toLowerCase().includes('neet') || (t.category || '').toLowerCase().includes('neet') || (t.testId || '').toLowerCase().startsWith('neet');
    const isChap = (t.testType || '').toLowerCase() === 'chapter' || (t.type || '').toLowerCase() === 'chapter' || (t.testId || '').includes('-CHAPTER-');
    const notSubtopic = !(t.testId || '').toLowerCase().includes('subtopic');
    return isNeet && isChap && notSubtopic;
  });

  console.log(`Found ${neetChapterTests.length} NEET Chapter-wise tests.`);

  // Load canonical chapters per subject
  const canonicalChapters = {};
  for (const s of ['Physics', 'Chemistry', 'Botany', 'Zoology']) {
    canonicalChapters[s] = await db.collection('questionBank').distinct('chapter', { subject: s });
  }

  const targets = {};
  let unresolved = 0;

  for (const t of neetChapterTests) {
    let subj = t.subject;
    if (!subj) {
      if ((t.testId || '').includes('-Physics-')) subj = 'Physics';
      else if ((t.testId || '').includes('-Chemistry-')) subj = 'Chemistry';
      else if ((t.testId || '').includes('-Botany-')) subj = 'Botany';
      else if ((t.testId || '').includes('-Zoology-')) subj = 'Zoology';
    }

    let resolved = t.chapter;
    if (!resolved || resolved === 'undefined') {
      resolved = t.title;
    }

    // Clean up prefix if any
    if (resolved && resolved.startsWith('NEET Chapter Test: ')) {
      resolved = resolved.replace('NEET Chapter Test: ', '');
    }
    if (resolved && resolved.startsWith('neet CHAPTER ')) {
      // e.g. "neet CHAPTER Chemistry Structure of Atom 11"
      resolved = resolved.replace(/^neet CHAPTER \w+ /, '').replace(/ \d+$/, '');
    }

    const chapList = canonicalChapters[subj] || [];
    let match = chapList.find(c => norm(c) === norm(resolved));
    if (!match) {
      // Try fuzzy matching or synonyms
      if (norm(resolved).includes('structure of atom')) match = 'Atomic Structure';
      else if (norm(resolved).includes('cell the unit of life')) match = 'Cell Structure and Function';
      else if (norm(resolved).includes('some basic concepts of chemistry')) match = 'Some Basic Concepts in Chemistry';
      else if (norm(resolved).includes('d and f')) match = 'd and f- Block Elements';
      else if (norm(resolved).includes('work') && norm(resolved).includes('energy')) match = 'Work, Energy, and Power';
      else if (norm(resolved).includes('co-ordination') || norm(resolved).includes('coordination')) match = 'Co-ordination Compounds';
    }

    if (!match) {
      console.warn(`Unresolved chapter for test ${t.testId} (subj: ${subj}): "${t.chapter}" / "${t.title}"`);
      unresolved++;
      match = resolved;
    }

    targets[t.testId] = {
      testId: t.testId,
      title: t.title,
      subject: subj,
      targetChapter: match,
      exam: 'NEET',
      originalQuestionCount: (t.questions || []).length
    };
  }

  console.log(`Target map built: ${Object.keys(targets).length - unresolved}/${Object.keys(targets).length} resolved cleanly.`);
  fs.writeFileSync('scripts/neet_chapter_test_targets.json', JSON.stringify(targets, null, 2));
  console.log('Saved targets to scripts/neet_chapter_test_targets.json');

  await client.close();
}

buildTargets().catch(console.error);
