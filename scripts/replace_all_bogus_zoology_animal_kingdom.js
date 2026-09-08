require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');

const SUBTOPICS = [
  "Basis of animal classification (levels of organization, symmetry, germ layers, coelom)",
  "Non-chordates (Porifera to Hemichordata characteristics)",
  "Chordata (Protochordata, Cyclostomata, Chondrichthyes, Osteichthyes)",
  "Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)"
];

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas.");
    const db = client.db('testseries');
    const qb = db.collection('questionBank');
    const tp = db.collection('testPapers');

    let totalUpdated = 0;

    for (let i = 0; i < SUBTOPICS.length; i++) {
      const subtopic = SUBTOPICS[i];
      const partNum = i + 1;
      const dataFile = path.join(__dirname, `data_zoology_animal_kingdom_part${partNum}.js`);
      const replacementList = require(dataFile);

      console.log(`\n=== Processing Part ${partNum}: "${subtopic}" ===`);
      console.log(`Replacement items: ${replacementList.length}`);

      // Fetch existing documents sorted by type: 1, _id: 1
      const existingDocs = await qb.find({
        subject: "Zoology",
        chapter: "Animal Kingdom",
        subTopic: subtopic
      }).sort({ type: 1, _id: 1 }).toArray();

      console.log(`Found ${existingDocs.length} existing documents in DB for subtopic.`);

      if (existingDocs.length !== 180) {
        throw new Error(`Expected 180 existing docs for "${subtopic}", but found ${existingDocs.length}!`);
      }
      if (replacementList.length !== 180) {
        throw new Error(`Expected 180 replacement questions for Part ${partNum}, but found ${replacementList.length}!`);
      }

      // Prepare bulk operations
      const bulkOps = [];
      for (let j = 0; j < 180; j++) {
        const existingDoc = existingDocs[j];
        const rep = replacementList[j];

        if (existingDoc.type !== rep.type) {
          throw new Error(`Type mismatch at index ${j} for subtopic "${subtopic}": existing=${existingDoc.type}, rep=${rep.type}`);
        }

        bulkOps.push({
          updateOne: {
            filter: { _id: existingDoc._id },
            update: {
              $set: {
                question: rep.question,
                options: rep.options,
                correctAnswer: rep.correctAnswer,
                explanation: rep.explanation,
                type: rep.type,
                questionType: rep.questionType,
                subTopic: rep.subTopic,
                chapter: rep.chapter,
                subject: rep.subject,
                marks: 4,
                negativeMarks: 1,
                updatedAt: new Date()
              }
            }
          }
        });
      }

      const res = await qb.bulkWrite(bulkOps);
      console.log(`Part ${partNum} bulkWrite complete: matched ${res.matchedCount}, modified ${res.modifiedCount}`);
      totalUpdated += res.modifiedCount;
    }

    console.log(`\n==============================================`);
    console.log(`Total questions successfully updated in DB: ${totalUpdated}`);
    console.log(`==============================================`);

    // Verify test papers
    console.log("\nVerifying test paper references...");
    const testTitles = ["Animal Kingdom", "Basis of classification", "phylum-wise features"];
    for (const title of testTitles) {
      const paper = await tp.findOne({ title });
      if (paper) {
        const qIds = paper.questions.map(q => (q instanceof ObjectId ? q : new ObjectId(q)));
        const referencedDocs = await qb.find({ _id: { $in: qIds } }).toArray();
        console.log(`Test Paper "${paper.title}" (${paper._id}): ${referencedDocs.length} / ${qIds.length} questions resolved.`);
        if (referencedDocs.length > 0) {
          console.log(`  Sample Q1: ${referencedDocs[0].question.slice(0, 100)}...`);
          console.log(`  Sample Ans: ${referencedDocs[0].options[referencedDocs[0].correctAnswer]}`);
        }
      } else {
        console.log(`Test paper "${title}" not found!`);
      }
    }

  } catch (err) {
    console.error("Replacement failed:", err);
    process.exit(1);
  } finally {
    await client.close();
    console.log("\nMongoDB connection closed.");
  }
}

run();
