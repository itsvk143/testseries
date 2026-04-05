import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function migrate() {
    if (!process.env.MONGODB_URI) {
        console.error('Missing MONGODB_URI in .env.local');
        process.exit(1);
    }
    
    const client = new MongoClient(process.env.MONGODB_URI);
    try {
        await client.connect();
        const db = client.db();
        
        const usersCol = db.collection('users');
        const countersCol = db.collection('counters');
        
        // Find users without a studentCode
        const users = await usersCol.find({ studentCode: { $exists: false } }).toArray();
        console.log(`Found ${users.length} users without a studentCode`);
        
        let assignedCount = 0;
        
        for (const user of users) {
            const counter = await countersCol.findOneAndUpdate(
                { _id: 'studentCode' },
                { $inc: { seq: 1 } },
                { returnDocument: 'after', upsert: true }
            );
            
            const seq = counter?.value?.seq ?? counter?.seq ?? 1;
            const studentCode = `S${String(seq).padStart(10, '0')}`;
            
            await usersCol.updateOne(
                { _id: user._id },
                { $set: { studentCode } }
            );
            
            console.log(`Assigned ${studentCode} to user ${user.email} (${user._id})`);
            assignedCount++;
        }
        
        console.log(`Migration complete! Assigned student codes to ${assignedCount} users.`);
    } catch (e) {
        console.error('Migration failed:', e);
    } finally {
        await client.close();
    }
}

migrate();
