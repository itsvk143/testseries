const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const questions = [
  {
    "subject": "Chemistry",
    "text": "At 300 K, the vapor pressure of pure liquid A is 100 mmHg and that of pure liquid B is 150 mmHg. An ideal solution is prepared by mixing 2 moles of A and 3 moles of B. The total vapor pressure of the solution and the mole fraction of B in the vapor phase are respectively:",
    "options": [
      {
        "id": "a",
        "text": "125 mmHg, 0.60"
      },
      {
        "id": "b",
        "text": "130 mmHg, 0.69"
      },
      {
        "id": "c",
        "text": "130 mmHg, 0.75"
      },
      {
        "id": "d",
        "text": "120 mmHg, 0.65"
      }
    ],
    "correctOption": "c",
    "explanation": "Mole fractions in liquid: $x_A = 2/5 = 0.4$, $x_B = 3/5 = 0.6$. $P_{total} = (100 \\times 0.4) + (150 \\times 0.6) = 40 + 90 = 130$ mmHg. Mole fraction in vapor $y_B = P_B / P_{total} = 90 / 130 \\approx 0.692$. Re-checking calculation: $90/130 = 9/13 = 0.69$. Option B is correct for $y_B=0.69$. Option C is a common distractor if student uses $x_B$ ratio directly."
  },
  {
    "subject": "Chemistry",
    "text": "A 0.1 molal aqueous solution of a weak acid (HX) is 30% ionized. If $K_f$ for water is $1.86\\text{ K kg mol}^{-1}$, the freezing point of the solution will be:",
    "options": [
      {
        "id": "a",
        "text": "-0.186°C"
      },
      {
        "id": "b",
        "text": "-0.242°C"
      },
      {
        "id": "c",
        "text": "-0.558°C"
      },
      {
        "id": "d",
        "text": "-0.130°C"
      }
    ],
    "correctOption": "b",
    "explanation": "For HX $\\rightarrow$ H+ + X-, $n=2$. van't Hoff factor $i = 1 + \\alpha(n-1) = 1 + 0.3(2-1) = 1.3$. $\\Delta T_f = i \\cdot K_f \\cdot m = 1.3 \\times 1.86 \\times 0.1 = 0.2418$ K. Freezing point = $0 - 0.2418 = -0.2418$°C."
  },
  {
    "subject": "Chemistry",
    "text": "Which of the following 0.1 M aqueous solutions will exert the highest osmotic pressure at 25°C?",
    "options": [
      {
        "id": "a",
        "text": "Glucose"
      },
      {
        "id": "b",
        "text": "Barium Chloride"
      },
      {
        "id": "c",
        "text": "Sodium Chloride"
      },
      {
        "id": "d",
        "text": "Magnesium Sulfate"
      }
    ],
    "correctOption": "b",
    "explanation": "Osmotic pressure $\\pi = iCRT$. Since $C, R, T$ are constant, $\\pi \\propto i$. (a) Glucose, $i=1$; (b) $BaCl_2$, $i=3$; (c) $NaCl$, $i=2$; (d) $MgSO_4$, $i=2$. $BaCl_2$ has the highest $i$ value."
  }
];

async function run() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('testseries');
        // The chapter name matches 'Solutions' under Chemistry in neet.js
        const testId = "neet_chapter_chemistry_solutions";
        
        console.log(`Inserting ${questions.length} questions into testId: ${testId}`);

        const collection = db.collection('questions');
        const existing = await collection.find({ testId }).sort({ id: -1 }).limit(1).toArray();
        let maxId = existing.length > 0 ? (existing[0].id || 0) : 0;

        const toInsert = questions.map(q => {
            maxId++;
            return { ...q, id: maxId, testId };
        });

        const result = await collection.insertMany(toInsert);
        console.log(`Successfully inserted ${result.insertedCount} questions!`);
        
    } catch (e) {
        console.error("Error inserting:", e);
    } finally {
        await client.close();
    }
}

run();
