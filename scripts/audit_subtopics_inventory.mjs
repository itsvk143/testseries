import { MongoClient } from 'mongodb';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function runInventory() {
    console.log('=== PHASE 1: SUBTOPIC INVENTORY & SYLLABUS AUDIT ===\n');

    // 1. Read admin page taxonomy
    const adminCode = fs.readFileSync('src/app/admin/page.js', 'utf-8');
    const chapterMapMatch = adminCode.match(/export const STATIC_CHAPTER_MAP = ({[\s\S]*?});\n\n\/\//);
    const subtopicsMatch = adminCode.match(/export const CHAPTER_SUBTOPICS = ({[\s\S]*?});\n\nexport/);

    if (!chapterMapMatch || !subtopicsMatch) {
        throw new Error('Could not parse taxonomy from src/app/admin/page.js');
    }

    const staticChapterMap = new Function('return ' + chapterMapMatch[1])();
    const chapterSubtopics = new Function('return ' + subtopicsMatch[1])();

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('testseries');
    const col = db.collection('questionBank');

    console.log('Querying existing database distribution...');
    // Fetch all existing subject/chapter/subTopic distributions in 1 fast aggregation
    const dbAgg = await col.aggregate([
        {
            $project: {
                subject: { $toLower: "$subject" },
                chapter: { $toLower: "$chapter" },
                subTopic: { $toLower: { $ifNull: ["$subTopic", "$topic"] } }
            }
        },
        {
            $group: {
                _id: { subject: "$subject", chapter: "$chapter", subTopic: "$subTopic" },
                count: { $sum: 1 }
            }
        }
    ]).toArray();

    const dbMap = new Map();
    for (const item of dbAgg) {
        const key = `${item._id.subject}|${item._id.chapter}|${item._id.subTopic}`;
        dbMap.set(key, item.count);
    }
    console.log(`Aggregation complete. ${dbAgg.length} distinct subtopic groups found in DB.\n`);

    const neetSubjects = ['Physics', 'Chemistry', 'Botany', 'Zoology', 'Biology'];
    const jeeSubjects = ['Physics', 'Chemistry', 'Mathematics'];

    const inventory = [];
    let totalNeetSubtopics = 0;
    let totalJeeSubtopics = 0;

    for (const [subject, chapters] of Object.entries(staticChapterMap)) {
        if (subject === 'English Proficiency' || subject === 'Logical Reasoning') {
            continue; // BITSAT only
        }

        const isNeetSubject = neetSubjects.includes(subject);
        const isJeeSubject = jeeSubjects.includes(subject);

        for (const chapter of chapters) {
            const subtopics = chapterSubtopics[chapter] || [];
            
            for (const subtopic of subtopics) {
                const neetEligible = isNeetSubject;
                const jeeEligible = isJeeSubject;

                if (neetEligible) totalNeetSubtopics++;
                if (jeeEligible) totalJeeSubtopics++;

                const key = `${subject.toLowerCase()}|${chapter.toLowerCase()}|${subtopic.toLowerCase()}`;
                const dbCount = dbMap.get(key) || 0;

                inventory.push({
                    subject,
                    chapter,
                    subtopic,
                    neetEligible,
                    jeeEligible,
                    existingQuestions: dbCount,
                    expectedNeetNew: neetEligible ? 5 : 0,
                    expectedJeeNew: jeeEligible ? 5 : 0
                });
            }
        }
    }

    console.log('--- SYLLABUS AUDIT SUMMARY ---');
    console.log(`Total Target Subjects: ${Object.keys(staticChapterMap).filter(s => neetSubjects.includes(s) || jeeSubjects.includes(s)).length}`);
    console.log(`Total Target Subtopics Identified: ${inventory.length}`);
    console.log(`NEET-Eligible Subtopics: ${totalNeetSubtopics}`);
    console.log(`JEE Main-Eligible Subtopics: ${totalJeeSubtopics}`);
    console.log(`Expected New NEET Questions (5 per subtopic): ${totalNeetSubtopics * 5}`);
    console.log(`Expected New JEE Main Questions (5 per subtopic): ${totalJeeSubtopics * 5}`);
    console.log(`Expected Total New Questions: ${totalNeetSubtopics * 5 + totalJeeSubtopics * 5}`);

    // Breakdown by subject
    const subjectBreakdown = {};
    for (const item of inventory) {
        if (!subjectBreakdown[item.subject]) {
            subjectBreakdown[item.subject] = {
                chapters: new Set(),
                subtopics: 0,
                neetSubtopics: 0,
                jeeSubtopics: 0,
                existingQuestions: 0
            };
        }
        subjectBreakdown[item.subject].chapters.add(item.chapter);
        subjectBreakdown[item.subject].subtopics++;
        if (item.neetEligible) subjectBreakdown[item.subject].neetSubtopics++;
        if (item.jeeEligible) subjectBreakdown[item.subject].jeeSubtopics++;
        subjectBreakdown[item.subject].existingQuestions += item.existingQuestions;
    }

    console.log('\n--- BREAKDOWN BY SUBJECT ---');
    for (const [subj, data] of Object.entries(subjectBreakdown)) {
        console.log(`${subj}:`);
        console.log(`  Chapters: ${data.chapters.size}`);
        console.log(`  Subtopics: ${data.subtopics} (NEET: ${data.neetSubtopics}, JEE: ${data.jeeSubtopics})`);
        console.log(`  Existing Questions Mapped: ${data.existingQuestions}`);
        console.log(`  Required New Questions: NEET=${data.neetSubtopics * 5}, JEE=${data.jeeSubtopics * 5}`);
    }

    fs.writeFileSync('scripts/subtopics_inventory.json', JSON.stringify(inventory, null, 2));
    console.log('\n✓ Saved full inventory to scripts/subtopics_inventory.json');

    await client.close();
}

runInventory().catch(err => {
    console.error('Inventory error:', err);
    process.exit(1);
});
