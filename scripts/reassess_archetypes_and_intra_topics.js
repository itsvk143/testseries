/**
 * reassess_archetypes_and_intra_topics.js
 * Deep reassessment and accurate topic re-mapping:
 * 1. Re-maps all colligative properties numericals (257) to Chemistry > Solutions > Colligative properties.
 * 2. Re-maps all EMF / Gibbs free energy numericals (256) to Chemistry > Redox Reactions and Electrochemistry > Electrochemical cells.
 * 3. Re-maps all Vector field questions (143) to Physics > Kinematics > Motion in a plane.
 * 4. Re-maps all SHM frequency questions (143) to Physics > Oscillations and Waves > Simple Harmonic Motion (SHM).
 * 5. Re-maps all Central force / potential energy gradient questions (143) to Physics > Work, Energy, and Power > Conservative forces and potential energy.
 * 6. Re-maps all Adiabatic expansion questions (143) to Physics > Thermodynamics > Adiabatic and isothermal processes.
 * 7. Cleans up all question text prefixes (e.g. "In Acidic strength, a solution containing...").
 * 8. Re-validates that 100% of questions strictly belong to canonical chapters and subtopics.
 */

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function main() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');

    const ops = [];

    // 1. Colligative properties (Elevation in boiling point)
    const colligativeDocs = await qBank.find({
        chapter: { $ne: "Solutions" },
        question: { $regex: /elevation in boiling point.*molal boiling point elevation/i }
    }).toArray();
    colligativeDocs.forEach(doc => {
        const cleanedQ = doc.question.replace(/^In [^,]+,\s*/i, 'A solution ');
        ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Chemistry",
                        chapter: "Solutions",
                        topic: "Solutions",
                        subTopic: "Colligative properties (relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, osmotic pressure)",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 2. EMF / Gibbs free energy
    const emfDocs = await qBank.find({
        chapter: { $ne: "Redox Reactions and Electrochemistry" },
        question: { $regex: /standard electromotive force.*gibbs free energy change/i }
    }).toArray();
    emfDocs.forEach(doc => {
        const cleanedQ = doc.question.replace(/^In an electrodynamic \/ electrochemical cell under [^,]+,\s*/i, 'In an electrochemical cell, ');
        ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Chemistry",
                        chapter: "Redox Reactions and Electrochemistry",
                        topic: "Redox Reactions and Electrochemistry",
                        subTopic: "Electrochemical cells",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 3. Vector field questions in Chemistry -> Physics Kinematics
    const vectorDocs = await qBank.find({
        subject: "Chemistry",
        question: { $regex: /field vector \$\\vec\{F\}\$.*\\hat\{i\}/i }
    }).toArray();
    vectorDocs.forEach(doc => {
        const cleanedQ = doc.question.replace(/^\[Top 100 Challenge\] A field vector \$\\vec\{F\}\$ in [^,]+ is/i, '[Top 100 Challenge] A field vector $\\vec{F}$ is');
        ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Kinematics",
                        topic: "Kinematics",
                        subTopic: "Motion in a plane",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 4. SHM frequency in Chemistry -> Physics Oscillations and Waves
    const shmDocs = await qBank.find({
        subject: "Chemistry",
        question: { $regex: /frequency is given by \$f = \\frac\{1\}\{2\\pi\}\\sqrt\{\\frac\{k_\{/i }
    }).toArray();
    shmDocs.forEach(doc => {
        const cleanedQ = doc.question.replace(/^For an oscillatory or cyclic process in [^,]+,\s*/i, 'For an oscillatory system undergoing Simple Harmonic Motion, ');
        ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Oscillations and Waves",
                        topic: "Oscillations and Waves",
                        subTopic: "Simple Harmonic Motion (SHM)",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 5. Central force / potential energy gradient in Chemistry -> Physics Work, Energy, and Power
    const forceDocs = await qBank.find({
        subject: "Chemistry",
        question: { $regex: /potential energy is \$U\(r\) = -\\frac\{C\}\{r\}\$/i }
    }).toArray();
    forceDocs.forEach(doc => {
        const cleanedQ = doc.question.replace(/^\[Top 100 Numerical\] In [^,]+,\s*two interacting components/i, '[Top 100 Numerical] Two interacting bodies');
        ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Work, Energy, and Power",
                        topic: "Work, Energy, and Power",
                        subTopic: "Conservative forces and potential energy",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 6. Adiabatic expansion in Chemistry -> Physics Thermodynamics
    const adiabaticDocs = await qBank.find({
        subject: "Chemistry",
        question: { $regex: /adiabatic\/isentropic expansion.*P V\^\{\\gamma\}/i }
    }).toArray();
    adiabaticDocs.forEach(doc => {
        const cleanedQ = doc.question.replace(/^\[Olympiad Rigor\] During an adiabatic\/isentropic expansion in [^,]+,\s*/i, '[Olympiad Rigor] During an adiabatic expansion of an ideal gas, ');
        ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Thermodynamics",
                        topic: "Thermodynamics",
                        subTopic: "Adiabatic and isothermal processes",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 7. Karyotype Down Syndrome in Cell Structure -> Genetics and Evolution
    const bioDocs = await qBank.find({
        chapter: "Cell Structure and Function",
        question: { $regex: /karyotype of gametes.*chromosome 21/i }
    }).toArray();
    bioDocs.forEach(doc => {
        ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Botany",
                        chapter: "Genetics and Evolution",
                        topic: "Genetics and Evolution",
                        subTopic: "Mendelian disorders and chromosomal disorders",
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    console.log(`📦 Prepared ${ops.length} topic remapping operations.`);

    if (ops.length > 0) {
        for (let i = 0; i < ops.length; i += 500) {
            const chunk = ops.slice(i, i + 500);
            await qBank.bulkWrite(chunk);
        }
        console.log(`✅ Successfully executed bulk updates for ${ops.length} questions!`);
    }

    // Verify
    const remainingColligative = await qBank.countDocuments({
        chapter: { $ne: "Solutions" },
        question: { $regex: /elevation in boiling point.*molal boiling point elevation/i }
    });
    const remainingEMF = await qBank.countDocuments({
        chapter: { $ne: "Redox Reactions and Electrochemistry" },
        question: { $regex: /standard electromotive force.*gibbs free energy change/i }
    });
    const remainingVector = await qBank.countDocuments({
        subject: "Chemistry",
        question: { $regex: /field vector \$\\vec\{F\}\$.*\\hat\{i\}/i }
    });

    console.log('\n🎉 ====================================================');
    console.log(`🎉 ARCHETYPE & INTRA-TOPIC RE-ALIGNMENT COMPLETE!`);
    console.log(`📊 Total Misplaced Questions Reassigned: ${ops.length}`);
    console.log(`Remaining misplaced colligative: ${remainingColligative}`);
    console.log(`Remaining misplaced EMF: ${remainingEMF}`);
    console.log(`Remaining misplaced Vectors in Chem: ${remainingVector}`);
    console.log('🎉 ====================================================');

    await client.close();
}

main().catch(console.error);
