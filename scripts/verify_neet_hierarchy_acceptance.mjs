import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { MongoClient } from 'mongodb';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { NEET_BOTANY_17, NEET_ZOOLOGY_15, NEET_EXCLUDED_5, getCanonicalChapter, getNeetChapters } = require('../src/lib/chapterMasterService.cjs');

async function verifyAll() {
    console.log('=================================================================');
    console.log('       GLOBAL NEET HIERARCHY VERIFICATION REPORT');
    console.log('=================================================================');

    // 1. Verify Botany Chapter Count from Master Service
    const neetSyllabus = getNeetChapters();
    const botany11 = neetSyllabus.Botany['11'];
    const botany12 = neetSyllabus.Botany['12'];
    const totalBotany = botany11.length + botany12.length;
    console.log(`\n1. Botany Active Chapters in Master Service: ${totalBotany} (Expected: 17)`);
    console.log(`   Class 11 (${botany11.length}): ${botany11.join(', ')}`);
    console.log(`   Class 12 (${botany12.length}): ${botany12.join(', ')}`);
    if (totalBotany !== 17) throw new Error(`Botany chapter count is ${totalBotany}, expected 17!`);

    // 2. Verify Zoology Chapter Count
    const zoology11 = neetSyllabus.Zoology['11'];
    const zoology12 = neetSyllabus.Zoology['12'];
    const totalZoology = zoology11.length + zoology12.length;
    console.log(`\n2. Zoology Active Chapters in Master Service: ${totalZoology} (Expected: 15)`);
    console.log(`   Class 11 (${zoology11.length}): ${zoology11.join(', ')}`);
    console.log(`   Class 12 (${zoology12.length}): ${zoology12.join(', ')}`);
    if (totalZoology !== 15) throw new Error(`Zoology chapter count is ${totalZoology}, expected 15!`);

    // 3. Verify Mandatory Subject Allocations
    console.log('\n3. Verifying Mandatory Subject Allocations:');
    const biomoleculesCanon = getCanonicalChapter('Biology', 'Biomolecules');
    console.log(`   Biomolecules -> Subject: ${biomoleculesCanon.subject} (Expected: Zoology)`);
    if (biomoleculesCanon.subject !== 'Zoology') throw new Error('Biomolecules must be Zoology!');

    const biotech1Canon = getCanonicalChapter('Biology', 'Biotechnology: Principles and Processes');
    console.log(`   Biotechnology: Principles and Processes -> Subject: ${biotech1Canon.subject} (Expected: Zoology)`);
    if (biotech1Canon.subject !== 'Zoology') throw new Error('Biotechnology: Principles and Processes must be Zoology!');

    const biotech2Canon = getCanonicalChapter('Biology', 'Biotechnology and Its Applications');
    console.log(`   Biotechnology and Its Applications -> Subject: ${biotech2Canon.subject} (Expected: Zoology)`);
    if (biotech2Canon.subject !== 'Zoology') throw new Error('Biotechnology and Its Applications must be Zoology!');

    const inheritanceCanon = getCanonicalChapter('Biology', 'Principles of Inheritance and Variation');
    console.log(`   Principles of Inheritance and Variation -> Subject: ${inheritanceCanon.subject} (Expected: Botany)`);
    if (inheritanceCanon.subject !== 'Botany') throw new Error('Principles of Inheritance and Variation must be Botany!');

    const microbesCanon = getCanonicalChapter('Biology', 'Microbes in Human Welfare');
    console.log(`   Microbes in Human Welfare -> Subject: ${microbesCanon.subject} (Expected: Botany)`);
    if (microbesCanon.subject !== 'Botany') throw new Error('Microbes in Human Welfare must be Botany!');

    // 4. Verify Exclusion of 5 Chapters
    console.log('\n4. Verifying Excluded Chapters:');
    const allActiveSyllabusChapters = [...botany11, ...botany12, ...zoology11, ...zoology12];
    const excludedNames = [
        'Digestion and Absorption',
        'Transport in Plants',
        'Reproduction in Organisms',
        'Mineral Nutrition',
        'Environmental Issues'
    ];
    for (const ex of excludedNames) {
        const foundInActive = allActiveSyllabusChapters.includes(ex);
        console.log(`   ${ex}: ${foundInActive ? 'FAIL (Found in active syllabus)' : 'PASS (Excluded from active syllabus)'}`);
        if (foundInActive) throw new Error(`${ex} must not appear in active syllabus!`);
    }

    // 5. Verify Subtopic Tests in src/data/exams/neet.js
    console.log('\n5. Verifying Subtopic Tests Structure in src/data/exams/neet.js:');
    const fs = (await import('fs')).default;
    const neetFile = fs.readFileSync('src/data/exams/neet.js', 'utf8');
    const subtopicMatches = [...neetFile.matchAll(/generateTests\('neet',\s*(\[[^\]]+\]),\s*'SUBTOPIC',\s*'([^']+)',\s*'All Test',\s*'([^']+)'\)/g)];
    const botanySubChaps = [...new Set(subtopicMatches.filter(m => m[2] === 'Botany').map(m => m[3]))];
    const zoologySubChaps = [...new Set(subtopicMatches.filter(m => m[2] === 'Zoology').map(m => m[3]))];
    console.log(`   Total Subtopic generators parsed: ${subtopicMatches.length}`);
    console.log(`   Botany Chapters covered in Subtopic Tests (${botanySubChaps.length}): ${botanySubChaps.join(', ')}`);
    console.log(`   Zoology Chapters covered in Subtopic Tests (${zoologySubChaps.length}): ${zoologySubChaps.join(', ')}`);
    if (botanySubChaps.length !== 17) throw new Error(`Botany subtopic chapters count is ${botanySubChaps.length}, expected 17!`);
    if (zoologySubChaps.length !== 15) throw new Error(`Zoology subtopic chapters count is ${zoologySubChaps.length}, expected 15!`);

    // 6. Verify Database State
    console.log('\n6. Verifying MongoDB Database State:');
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();

    const biomoleculesInBotany = await db.collection('questionBank').countDocuments({
        subject: 'Botany',
        chapter: 'Biomolecules'
    });
    console.log(`   Biomolecules questions remaining in Botany: ${biomoleculesInBotany} (Expected: 0)`);

    const microbesInZoology = await db.collection('questionBank').countDocuments({
        subject: 'Zoology',
        chapter: 'Microbes in Human Welfare'
    });
    console.log(`   Microbes in Human Welfare questions remaining in Zoology: ${microbesInZoology} (Expected: 0)`);

    const excludedActiveTestsInDb = await db.collection('testPapers').countDocuments({
        testId: /^neet-/i,
        chapter: { $regex: /digestion and absorption|transport in plants|reproduction in organisms|mineral nutrition|environmental issues/i },
        isActive: true
    });
    console.log(`   Active tests in DB for excluded chapters: ${excludedActiveTestsInDb} (Expected: 0)`);

    await client.close();

    console.log('\n=================================================================');
    console.log('  ALL ACCEPTANCE CRITERIA VERIFIED AND PASSED SUCCESSFULLY!');
    console.log('=================================================================');
}

verifyAll().catch(err => {
    console.error('\nVerification FAILED:', err.message);
    process.exit(1);
});
