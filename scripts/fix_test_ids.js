const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function run() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('testseries');
        const testsCol = db.collection('tests');
        const qCol = db.collection('questions');

        // Based on utils.js generateTests:
        // id: `${category}-${type}-${subjectName ? subjectName + '-' : ''}${isChapter ? chapterName.replace(/\s+/g, '-') : i + 1}${classGrade !== 'All Test' ? '-' + classGrade : ''}`
        
        const fallback1 = "neet-CHAPTER-Chemistry-Some-Basic-Concepts-in-Chemistry";
        const res1 = await qCol.updateMany(
            { testId: "neet_chapter_chemistry_some_basic_concepts_in_chemistry" },
            { $set: { testId: fallback1 } }
        );
        console.log(`Updated ${res1.modifiedCount} questions for 'Some Basic Concepts in Chemistry' to ID: ${fallback1}`);

        // Note: the test Id for "Solutions" has no trailing space or anything and is exact.
        const fallback2 = "neet-CHAPTER-Chemistry-Solutions";
        const res2 = await qCol.updateMany(
            { testId: "neet_chapter_chemistry_solutions" },
            { $set: { testId: fallback2 } }
        );
        console.log(`Updated ${res2.modifiedCount} questions for 'Solutions' to ID: ${fallback2}`);

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await client.close();
    }
}

run();
