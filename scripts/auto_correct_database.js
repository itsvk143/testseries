import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function callGemini(questionDoc) {
    const subject = questionDoc.subject || 'general';
    const prompt = `
You are an expert ${subject} Subject Matter Expert (SME), technical reviewer, and assessment designer with extensive experience in creating and reviewing examinations, competitive exams, and technical interviews.

I will provide a database question stored as a MongoDB JSON document.

Your task is to review, validate, and automatically correct the question. Do not assume any part of the question is correct—verify everything independently.

### Review and Correct the Following
1. Question Review (Verify technical accuracy, fix grammar/spelling, improve clarity)
2. Options Review (Ensure only one correct option, remove duplicates, correct technical errors)
3. Correct Answer Review (Verify the stored correct answer is accurate, update if incorrect)
4. Explanation Review (Verify technical accuracy, rewrite if mismatched, incomplete or wrong. Clearly explain why the correct answer is correct.)
5. Difficulty Level Review (Evaluate if assigned difficulty is appropriate: Easy/Medium/Hard)
6. Subject Matter Expert Validation (Validate concepts based on ${subject}. Correct any outdated or misleading info.)

### Output Requirements
Return the entire corrected MongoDB document, preserving all existing fields. Update only the fields that require correction.
Also include a "changes" array summarizing every modification you made.

Here is the document to review:
\`\`\`json
${JSON.stringify(questionDoc, null, 2)}
\`\`\`
    `;

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig: { responseMimeType: "application/json" } });
    
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return JSON.parse(text);
}

async function main() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('testseries');
        const collection = db.collection('questions');

        // Limit to 5 for the test run as requested by the plan
        const unreviewed = await collection.find({ reviewedByAI: { $ne: true } }).sort({ _id: -1 }).limit(5).toArray();
        console.log(`Found ${unreviewed.length} unreviewed questions. Processing...`);

        for (const doc of unreviewed) {
            console.log(`Processing question ${doc._id}...`);
            try {
                // Keep a clean copy without the non-standard _id for the LLM
                const safeDoc = { ...doc };
                delete safeDoc._id;

                const corrected = await callGemini(safeDoc);

                const changes = corrected.changes || [];
                delete corrected.changes; 

                // We use $set to only update the fields, preserving anything we might have missed
                await collection.updateOne(
                    { _id: doc._id },
                    { 
                        $set: { 
                            ...corrected, 
                            reviewedByAI: true,
                            aiChanges: changes
                        } 
                    }
                );
                console.log(`Successfully updated question ${doc._id} with ${changes.length} changes:`, changes);
                await delay(2000); // 2 second delay to respect rate limits
            } catch (err) {
                console.error(`Error processing question ${doc._id}:`, err);
            }
        }
        
        console.log('Finished processing batch.');
    } finally {
        await client.close();
    }
}

main().catch(console.error);
