/**
 * reassess_and_remap_database.js
 * High-performance bulk reassessment and quality assurance engine:
 * 1. Audits every question in MongoDB questionBank.
 * 2. Fixes cross-subject misplaced questions (Physics vs Chemistry) and cleans up question statements.
 * 3. Normalizes all subtopics so that 100% of questions belong strictly to official CHAPTER_SUBTOPICS.
 * 4. Uses MongoDB bulkWrite for maximum speed.
 */

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Load canonical syllabus
const adminFile = fs.readFileSync(path.join(__dirname, '../src/app/admin/page.js'), 'utf8');
const part = adminFile.slice(adminFile.indexOf('export const STATIC_CHAPTER_MAP'), adminFile.indexOf('export default function'));
const { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS } = eval('(function() { ' + part.replace(/export const/g, 'var') + '; return { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS }; })()');

async function main() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');

    // --- PHASE 1: IDENTIFY AND PREPARE CROSS-SUBJECT REMAPPING ---
    console.log('📦 Phase 1: Scanning for cross-subject misplaced questions...');
    const phase1Ops = [];

    // 1.1 Electrolytic conductivity in Physics -> Chemistry
    const chemInPhys1 = await qBank.find({
        subject: "Physics",
        question: { $regex: /electrical conductivity of an electrolytic solution/i }
    }).toArray();
    chemInPhys1.forEach(doc => {
        const cleanedQ = doc.question.replace(/^In [^,]+,\s*/i, 'For an electrolytic solution, ');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Chemistry",
                        chapter: "Redox Reactions and Electrochemistry",
                        topic: "Redox Reactions and Electrochemistry",
                        subTopic: "Kohlrausch's law and molar conductivity",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 1.2 Reaction quotient in Physics -> Chemistry
    const chemInPhys2 = await qBank.find({
        subject: "Physics",
        question: { $regex: /reaction quotient is \$Q/i }
    }).toArray();
    chemInPhys2.forEach(doc => {
        const cleanedQ = doc.question.replace(/^In a quantitative equilibrium study of [^,]+,\s*/i, 'In a quantitative chemical equilibrium study, ');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Chemistry",
                        chapter: "Equilibrium",
                        topic: "Equilibrium",
                        subTopic: "Chemical equilibrium and equilibrium constant",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 1.3 Arrhenius activation energy in Physics -> Chemistry
    const chemInPhys3 = await qBank.find({
        subject: "Physics",
        question: { $regex: /activation energy is \$E_a/i }
    }).toArray();
    chemInPhys3.forEach(doc => {
        const cleanedQ = doc.question.replace(/^\[Ranker Standard\] In a reaction associated with [^,]+,\s*/i, '[Ranker Standard] In a chemical reaction, ');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Chemistry",
                        chapter: "Chemical Kinetics",
                        topic: "Chemical Kinetics",
                        subTopic: "Arrhenius equation and activation energy",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 1.4 Stoichiometric reaction in Physics -> Chemistry
    const chemInPhys4 = await qBank.find({
        subject: "Physics",
        question: { $regex: /stoichiometric reaction/i }
    }).toArray();
    chemInPhys4.forEach(doc => {
        const cleanedQ = doc.question.replace(/^\[Top 100 AIR Standard\] A stoichiometric reaction in [^,]+ produces/i, '[Top 100 AIR Standard] A stoichiometric chemical reaction produces');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Chemistry",
                        chapter: "Some Basic Concepts in Chemistry",
                        topic: "Some Basic Concepts in Chemistry",
                        subTopic: "Stoichiometry and stoichiometric calculations",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 1.5 Rotating rigid body in Chemistry -> Physics
    const physInChem1 = await qBank.find({
        subject: "Chemistry",
        question: { $regex: /rigid body rotating about an axis/i }
    }).toArray();
    physInChem1.forEach(doc => {
        const cleanedQ = doc.question.replace(/^\[Olympiad Rigor\] A rigid body rotating about an axis according to [^,]+ has/i, '[Olympiad Rigor] A rigid body rotating about an axis has');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Rotational Motion",
                        topic: "Rotational Motion",
                        subTopic: "Moment of inertia",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 1.6 Projectile motion in Chemistry -> Physics
    const physInChem2 = await qBank.find({
        subject: "Chemistry",
        question: { $regex: /projected with speed \$v.*angle/i }
    }).toArray();
    physInChem2.forEach(doc => {
        const cleanedQ = doc.question.replace(/^\[Top 100 AIR Challenge\] An object governed by [^,]+ is projected/i, '[Top 100 AIR Challenge] An object is projected');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Kinematics",
                        topic: "Kinematics",
                        subTopic: "Projectile motion",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 1.7 AC resonant circuit in Chemistry -> Physics
    const physInChem3 = await qBank.find({
        subject: "Chemistry",
        question: { $regex: /quality factor is \$Q = \\frac\{\\omega_0 L\}\{R\}/i }
    }).toArray();
    physInChem3.forEach(doc => {
        const cleanedQ = doc.question.replace(/^\[Ranker Numerical\] For a resonant circuit \/ system associated with [^,]+,\s*/i, '[Ranker Numerical] For a resonant AC circuit, ');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Electromagnetic Induction and Alternating Currents",
                        topic: "Electromagnetic Induction and Alternating Currents",
                        subTopic: "AC circuits",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 1.8 Magnetic field of circular loop in Chemistry -> Physics
    const physInChem4 = await qBank.find({
        subject: "Chemistry",
        question: { $regex: /magnetic field at the center of a circular loop/i }
    }).toArray();
    physInChem4.forEach(doc => {
        const cleanedQ = doc.question.replace(/^In [^,]+,\s*the magnetic field at the center/i, 'The magnetic field at the center');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Magnetic Effects of Current and Magnetism",
                        topic: "Magnetic Effects of Current and Magnetism",
                        subTopic: "Biot-Savart law and Ampere's circuital law",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 1.9 Capacitor stored energy in Chemistry -> Physics
    const physInChem5 = await qBank.find({
        subject: "Chemistry",
        question: { $regex: /stored energy in a capacitor\/inductor/i }
    }).toArray();
    physInChem5.forEach(doc => {
        const cleanedQ = doc.question.replace(/^\[Cumulative Grand Numerical\] In an advanced study of [^,]+,\s*/i, '[Cumulative Grand Numerical] In a circuit network, ');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Electrostatics",
                        topic: "Electrostatics",
                        subTopic: "Capacitors and capacitance",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    // 1.10 Photoelectric effect outside Atomic Structure -> Physics
    const physInChem6 = await qBank.find({
        subject: "Chemistry",
        chapter: { $ne: "Atomic Structure" },
        question: { $regex: /work function.*photoelectrons/i }
    }).toArray();
    physInChem6.forEach(doc => {
        const cleanedQ = doc.question.replace(/^In [^,]+,\s*light of wavelength/i, 'Light of wavelength');
        phase1Ops.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        subject: "Physics",
                        chapter: "Dual Nature of Matter and Radiation",
                        topic: "Dual Nature of Matter and Radiation",
                        subTopic: "Photoelectric effect",
                        question: cleanedQ,
                        updatedAt: new Date()
                    }
                }
            }
        });
    });

    console.log(`Found ${phase1Ops.length} cross-subject misplaced questions. Executing bulk updates...`);
    if (phase1Ops.length > 0) {
        for (let i = 0; i < phase1Ops.length; i += 500) {
            const chunk = phase1Ops.slice(i, i + 500);
            await qBank.bulkWrite(chunk);
        }
        console.log(`✅ Completed Phase 1: ${phase1Ops.length} questions re-mapped to correct subjects & chapters.`);
    }

    // --- PHASE 2: AUDIT & NORMALIZE SUBTOPICS ---
    console.log('\n📦 Phase 2: Auditing subtopics across entire database...');
    const allDocs = await qBank.find({}, { projection: { _id: 1, subject: 1, chapter: 1, subTopic: 1, question: 1 } }).toArray();
    console.log(`Loaded ${allDocs.length} questions into memory for fast indexing.`);

    const phase2Ops = [];
    for (const doc of allDocs) {
        const chap = doc.chapter;
        const validSubs = CHAPTER_SUBTOPICS[chap] || [];
        if (validSubs.length === 0) continue;

        let subtop = (doc.subTopic || '').trim();
        if (!validSubs.includes(subtop)) {
            const lowerSub = subtop.toLowerCase();
            const lowerQ = (doc.question || '').toLowerCase();

            // Match directly
            let match = validSubs.find(s => lowerSub.includes(s.toLowerCase()) || s.toLowerCase().includes(lowerSub));

            if (!match) {
                // Content keyword match
                for (const candidate of validSubs) {
                    const words = candidate.toLowerCase().split(/[\s,()&-]+/).filter(w => w.length > 3);
                    if (words.some(w => lowerQ.includes(w))) {
                        match = candidate;
                        break;
                    }
                }
            }

            const chosen = match || validSubs[0];
            phase2Ops.push({
                updateOne: {
                    filter: { _id: doc._id },
                    update: {
                        $set: {
                            subTopic: chosen,
                            topic: chap,
                            updatedAt: new Date()
                        }
                    }
                }
            });
        }
    }

    console.log(`Found ${phase2Ops.length} questions with invalid/empty subtopics. Executing bulk updates...`);
    if (phase2Ops.length > 0) {
        for (let i = 0; i < phase2Ops.length; i += 1000) {
            const chunk = phase2Ops.slice(i, i + 1000);
            await qBank.bulkWrite(chunk);
        }
        console.log(`✅ Completed Phase 2: ${phase2Ops.length} subtopics normalized.`);
    }

    // --- PHASE 3: FINAL STRICT VERIFICATION ---
    console.log('\n🔍 Running final audit verification...');
    const verifyDocs = await qBank.find({}, { projection: { _id: 1, subject: 1, chapter: 1, subTopic: 1 } }).toArray();
    let invalidChap = 0;
    let invalidSub = 0;

    for (const d of verifyDocs) {
        const validC = STATIC_CHAPTER_MAP[d.subject] || [];
        if (!validC.includes(d.chapter)) invalidChap++;

        const validS = CHAPTER_SUBTOPICS[d.chapter] || [];
        if (!d.subTopic || !validS.includes(d.subTopic)) invalidSub++;
    }

    console.log('\n🎉 ====================================================');
    console.log(`🎉 ENTIRE DATABASE RE-ASSESSMENT & REMAPPING COMPLETED!`);
    console.log(`📊 Total Database Questions: ${verifyDocs.length}`);
    console.log(`📊 Cross-Subject Misplaced Questions Fixed: ${phase1Ops.length}`);
    console.log(`📊 Subtopic Alignments Normalized: ${phase2Ops.length}`);
    console.log(`----------------------------------------------------`);
    console.log(`Remaining Invalid Chapters: ${invalidChap}`);
    console.log(`Remaining Invalid Subtopics: ${invalidSub}`);
    console.log('🎉 ====================================================');

    await client.close();
}

main().catch(console.error);
