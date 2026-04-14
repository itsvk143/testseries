import clientPromise from '@/lib/mongodb';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection('questions');

        const originalTestId = 'neet-CHAPTER-Chemistry-Some-Basic-Concepts-in-Chemistry-11';
        const newTestId = 'neet-CUSTOM-CHAPTER-Mole-Extra';

        // 1. Get all questions attached to the original test
        const questions = await collection.find({ testId: originalTestId }).sort({ id: 1 }).toArray();

        // Check if there's enough questions
        if (questions.length <= 45) {
            return Response.json({ status: 'SKIP_OR_NOT_FOUND', count: questions.length, originalTestId });
        }

        const toMove = questions.slice(45); // Everything after question #45
        const moveObjectIds = toMove.map(q => q._id);

        // 2. Safely reassign testId to the overflow questions
        await collection.updateMany(
            { _id: { $in: moveObjectIds } },
            { $set: { testId: newTestId } }
        );

        // 3. Renumber the moved questions starting from 1
        for (let i = 0; i < toMove.length; i++) {
            await collection.updateOne(
                { _id: toMove[i]._id },
                { $set: { id: i + 1 } }
            );
        }

        // 4. Register the new Custom Test automatically into custom_tests.json
        const dataFilePath = path.join(process.cwd(), 'src/data/tests', 'custom_tests.json');
        let customTests = {};
        try {
            const data = await fs.readFile(dataFilePath, 'utf8');
            customTests = JSON.parse(data);
        } catch (e) {
            console.log("No custom_tests.json found, generating new one...");
        }

        // Create the test architecture mapping
        customTests[newTestId] = {
            id: newTestId,
            title: 'Some Basic Concepts in Chemistry - Extra Batch',
            type: 'CHAPTER',
            subject: 'Chemistry',
            chapter: 'Some Basic Concepts in Chemistry',
            description: 'Extended questions successfully extracted from the bloated Chapter Test.',
            isCustom: true, // This puts it in the Admin Panel DB nicely
            year: 2026,
            category: 'neet',
            duration: 60,
            totalMarks: 180,
            questionsCount: toMove.length,
            difficulty: 'Medium',
            classGrade: '11'
        };

        await fs.writeFile(dataFilePath, JSON.stringify(customTests, null, 2), 'utf8');

        // To ensure the Next.js memory cache drops the old test length state, we could just say restart server
        return Response.json({ 
            status: 'SUCCESS', 
            originalCount: questions.length,
            movedCount: toMove.length,
            newTestId 
        });

    } catch (e) {
        return Response.json({ error: e.message });
    }
}
