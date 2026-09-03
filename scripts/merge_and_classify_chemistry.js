/**
 * merge_and_classify_chemistry.js
 * Merges split/duplicate chapters in Chemistry into official 2026 canonical chapters:
 * 1. "Coordination Compounds" (51) -> "Co-ordination Compounds" (with correct subtopics & fixing C-X typo to M-C)
 * 2. "p-Block Elements" (45) -> "P-Block Elements" (with correct subtopics)
 * 3. "d and f Block Elements" (45) -> "d and f- Block Elements" (with correct subtopics)
 * 4. "Electrochemistry" (24) -> "Redox Reactions and Electrochemistry" (with correct subtopics)
 * 5. Uncategorized Chemistry questions ("") -> Classified into their true chapters and subtopics
 */

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// Classification helpers
function classifyCoordination(qText, currentSub) {
    const text = (qText || '').toLowerCase();
    if (text.includes('werner') || text.includes('agno3') || text.includes('primary valency') || text.includes('secondary valency') || text.includes('precipitate')) {
        return "Werner's theory";
    }
    if (text.includes('iupac') || text.includes('name of') || text.includes('nomenclature')) {
        return "IUPAC nomenclature";
    }
    if (text.includes('isomer') || text.includes('optical') || text.includes('geometrical') || text.includes('chiral') || text.includes('cis') || text.includes('trans') || text.includes('fac') || text.includes('mer')) {
        return "Isomerism";
    }
    if (text.includes('vbt') || text.includes('hybrid') || text.includes('inner orbital') || text.includes('outer orbital') || text.includes('magnetic') || text.includes('paramagnetic') || text.includes('diamagnetic') || text.includes('ean') || text.includes('bohr magneton')) {
        return "Valence bond theory (VBT)";
    }
    if (text.includes('crystal field') || text.includes('cft') || text.includes('cfse') || text.includes('spectrochemical') || text.includes('splitting') || text.includes('colour') || text.includes('color') || text.includes('d-d transition') || text.includes('jahn-teller')) {
        return "Crystal field theory (CFT) and orbital splitting";
    }
    if (text.includes('carbonyl') || text.includes('m-c') || text.includes('c-o') || text.includes('c-x') || text.includes('synergic') || text.includes('back-bonding') || text.includes('backbonding')) {
        return "Bonding in coordination compounds";
    }
    if (text.includes('chelat') || text.includes('edta') || text.includes('stability') || text.includes('cisplatin') || text.includes('chlorophyll') || text.includes('hemoglobin') || text.includes('vitamin b12')) {
        return "Stability and biological importance of coordination compounds";
    }
    return "Bonding in coordination compounds";
}

function classifyPBlock(qText) {
    const text = (qText || '').toLowerCase();
    if (text.includes('configuration') || text.includes('boron is due to') || text.includes('covalency') || text.includes('ionization') || text.includes('half-filled')) {
        return "Group 13 to Group 18 electronic configuration";
    }
    if (text.includes('acidic oxide') || text.includes('bond angle') || text.includes('electronegativity') || text.includes('electron gain') || text.includes('dissociation enthalpy') || text.includes('bleaching') || text.includes('amphoteric') || text.includes('boiling point')) {
        return "Trends in physical and chemical properties";
    }
    if (text.includes('allotrop') || text.includes('phosphorus') || text.includes('carbon') || text.includes('graphite') || text.includes('fullerene') || text.includes('+1 oxidation') || text.includes('inert pair') || text.includes('lead') || text.includes('diborane') || text.includes('banana')) {
        return "Inert pair effect and allotropy";
    }
    if (text.includes('oxoacid') || text.includes('h3po2') || text.includes('h3po3') || text.includes('h3po4') || text.includes('sulfur') || text.includes('sulphur') || text.includes('marshall') || text.includes('oleum') || text.includes('pcl5') || text.includes('hclo') || text.includes('reducing agent')) {
        return "Oxoacids of phosphorus, sulfur, and halogens";
    }
    if (text.includes('noble gas') || text.includes('xenon') || text.includes('xef') || text.includes('xeo') || text.includes('interhalogen') || text.includes('clf3') || text.includes('advertisement') || text.includes('discharge tube') || text.includes('highest positive oxidation state in')) {
        return "Interhalogen compounds and noble gas compounds";
    }
    return "Trends in physical and chemical properties";
}

function classifyDFBlock(qText) {
    const text = (qText || '').toLowerCase();
    if (text.includes('lanthanoid contraction') || text.includes('lanthanide contraction') || text.includes('zirconium') || text.includes('hafnium') || text.includes('zr') || text.includes('hf') || text.includes('basic strength of') || text.includes('separation')) {
        return "Lanthanoid contraction and consequences";
    }
    if (text.includes('lanthan') || text.includes('ce4+') || text.includes('cerium') || text.includes('eu2+') || text.includes('mischmetal') || text.includes('4f')) {
        return "Lanthanides";
    }
    if (text.includes('actin') || text.includes('radioactiv') || text.includes('neptunium') || text.includes('plutonium') || text.includes('5f') || text.includes('uranium')) {
        return "Actinoids";
    }
    if (text.includes('alloy') || text.includes('brass') || text.includes('bronze') || text.includes('interstitial') || text.includes('steel') || text.includes('hume-rothery')) {
        return "Alloys";
    }
    if (text.includes('kmno4') || text.includes('k2cr2o7') || text.includes('dichromate') || text.includes('permanganate') || text.includes('chromyl') || text.includes('cro5') || text.includes('blueprint') || text.includes('ore') || text.includes('chromite')) {
        return "Complex compounds";
    }
    if (text.includes('oxidation state') || text.includes('catalyt') || text.includes('equivalent mass') || text.includes('equivalent weight') || text.includes('acidic oxide') || text.includes('3d series oxides')) {
        return "Variable oxidation states and catalytic properties";
    }
    if (text.includes('magnetic') || text.includes('colour') || text.includes('color') || text.includes('blue') || text.includes('isoelectronic') || text.includes('spin-only') || text.includes('d-d transition')) {
        return "Magnetic properties and color of transition ions";
    }
    return "Transition elements";
}

function classifyElectrochemistry(qText) {
    const text = (qText || '').toLowerCase();
    if (text.includes('nernst') || text.includes('concentration cell') || text.includes('non-standard') || text.includes('cell potential') || text.includes('e_cell')) {
        return "Nernst equation";
    }
    if (text.includes('standard reduction potential') || text.includes('galvanic') || text.includes('electrochemical cell') || text.includes('half-reaction') || text.includes('e°') || text.includes('e^\\circ')) {
        return "Electrochemical cells";
    }
    if (text.includes('conductivity') || text.includes('specific conductance') || text.includes('conductance')) {
        return "Conductivity";
    }
    if (text.includes('kohlrausch') || text.includes('molar conductivity') || text.includes('limiting molar')) {
        return "Kohlrausch's law and molar conductivity";
    }
    if (text.includes('faraday') || text.includes('electrolysis') || text.includes('coulomb') || text.includes('deposited')) {
        return "Faraday's laws of electrolysis";
    }
    if (text.includes('battery') || text.includes('fuel cell') || text.includes('lead storage') || text.includes('corrosion') || text.includes('rust')) {
        return "Batteries, fuel cells, and corrosion";
    }
    return "Nernst equation";
}

function classifyUncategorizedChem(q) {
    const text = (q.question || '').toLowerCase();
    if (text.includes('colligative') || text.includes('raoult') || text.includes('osmotic') || text.includes('molality') || text.includes('freezing point') || text.includes('boiling point') || text.includes('van\'t hoff') || text.includes('ideal solution') || text.includes('azeotrope') || text.includes('kcl is 90%') || text.includes('moles of solute in 250')) {
        return {
            chapter: "Solutions",
            subtopic: "Raoult's law and colligative properties"
        };
    }
    if (text.includes('equilibrium') || text.includes('reversible reaction') || text.includes('rate of forward')) {
        return {
            chapter: "Equilibrium",
            subtopic: "Chemical equilibrium and equilibrium constant"
        };
    }
    if (text.includes('propyne') || text.includes('alkyne') || text.includes('hydrocarbon')) {
        return {
            chapter: "Hydrocarbons",
            subtopic: "Alkynes"
        };
    }
    if (text.includes('ozone') || text.includes('xef6') || text.includes('hybridization of the central atom in') || text.includes('charcoal')) {
        return {
            chapter: "P-Block Elements",
            subtopic: "Interhalogen compounds and noble gas compounds"
        };
    }
    if (text.includes('sugar') || text.includes('reducing sugar') || text.includes('glucose') || text.includes('protein')) {
        return {
            chapter: "Biomolecules",
            subtopic: "Monosaccharides (glucose and fructose structures)"
        };
    }
    if (text.includes('ionization energy of sodium') || text.includes('periodicity') || text.includes('electronegativity')) {
        return {
            chapter: "Classification of Elements and Periodicity in Properties",
            subtopic: "Periodic trends in chemical reactivity"
        };
    }
    if (text.includes('enthalpy change') || text.includes('c(s, graph') || text.includes('thermodynamic')) {
        return {
            chapter: "Chemical Thermodynamics",
            subtopic: "Hess's law of constant heat summation"
        };
    }
    if (text.includes('molar conductivity') || text.includes('electrode potential') || text.includes('ch3cooh solution')) {
        return {
            chapter: "Redox Reactions and Electrochemistry",
            subtopic: "Kohlrausch's law and molar conductivity"
        };
    }
    if (text.includes('zero-order') || text.includes('rate is independent') || text.includes('rate of reaction')) {
        return {
            chapter: "Chemical Kinetics",
            subtopic: "Integrated rate equations (zero and first order)"
        };
    }
    if (text.includes('de broglie') || text.includes('quantum number')) {
        return {
            chapter: "Atomic Structure",
            subtopic: "Quantum numbers"
        };
    }
    if (text.includes('dipole moment') || text.includes('amphoteric') || text.includes('paramagnetic sp')) {
        return {
            chapter: "Chemical Bonding and Molecular Structure",
            subtopic: "Dipole moment and molecular geometry"
        };
    }
    if (text.includes('complexes, the metal atom is in it') || text.includes('ligands')) {
        return {
            chapter: "Co-ordination Compounds",
            subtopic: "Bonding in coordination compounds"
        };
    }
    return {
        chapter: "Some Basic Concepts in Chemistry",
        subtopic: "Mole concept and molar mass"
    };
}

async function main() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');

    // 1. Merge "Coordination Compounds" -> "Co-ordination Compounds" & fix C-X typo
    const coordDocs = await qBank.find({ chapter: "Coordination Compounds" }).toArray();
    console.log(`\n📦 Processing ${coordDocs.length} questions in "Coordination Compounds"...`);
    let coordUpdated = 0;
    for (const doc of coordDocs) {
        let qText = doc.question;
        // Fix C-X typo to M-C bond in metal carbonyl questions
        if (qText.includes('C-X bond in metal carbonyl') || qText.includes('C-X bond')) {
            qText = qText.replace(/C-X bond/g, 'M-C bond');
        }

        const newSubtopic = classifyCoordination(qText, doc.subTopic);
        await qBank.updateOne(
            { _id: doc._id },
            {
                $set: {
                    chapter: "Co-ordination Compounds",
                    topic: "Co-ordination Compounds",
                    subTopic: newSubtopic,
                    question: qText,
                    updatedAt: new Date()
                }
            }
        );
        coordUpdated++;
    }
    console.log(`✅ Merged ${coordUpdated} questions into "Co-ordination Compounds" with subtopics.`);

    // 2. Merge "p-Block Elements" -> "P-Block Elements"
    const pDocs = await qBank.find({ chapter: "p-Block Elements" }).toArray();
    console.log(`\n📦 Processing ${pDocs.length} questions in "p-Block Elements"...`);
    let pUpdated = 0;
    for (const doc of pDocs) {
        const newSubtopic = classifyPBlock(doc.question);
        await qBank.updateOne(
            { _id: doc._id },
            {
                $set: {
                    chapter: "P-Block Elements",
                    topic: "P-Block Elements",
                    subTopic: newSubtopic,
                    updatedAt: new Date()
                }
            }
        );
        pUpdated++;
    }
    console.log(`✅ Merged ${pUpdated} questions into "P-Block Elements" with subtopics.`);

    // 3. Merge "d and f Block Elements" -> "d and f- Block Elements"
    const dfDocs = await qBank.find({ chapter: "d and f Block Elements" }).toArray();
    console.log(`\n📦 Processing ${dfDocs.length} questions in "d and f Block Elements"...`);
    let dfUpdated = 0;
    for (const doc of dfDocs) {
        const newSubtopic = classifyDFBlock(doc.question);
        await qBank.updateOne(
            { _id: doc._id },
            {
                $set: {
                    chapter: "d and f- Block Elements",
                    topic: "d and f- Block Elements",
                    subTopic: newSubtopic,
                    updatedAt: new Date()
                }
            }
        );
        dfUpdated++;
    }
    console.log(`✅ Merged ${dfUpdated} questions into "d and f- Block Elements" with subtopics.`);

    // 4. Merge "Electrochemistry" -> "Redox Reactions and Electrochemistry"
    const electroDocs = await qBank.find({ chapter: "Electrochemistry" }).toArray();
    console.log(`\n📦 Processing ${electroDocs.length} questions in "Electrochemistry"...`);
    let electroUpdated = 0;
    for (const doc of electroDocs) {
        const newSubtopic = classifyElectrochemistry(doc.question);
        await qBank.updateOne(
            { _id: doc._id },
            {
                $set: {
                    chapter: "Redox Reactions and Electrochemistry",
                    topic: "Redox Reactions and Electrochemistry",
                    subTopic: newSubtopic,
                    updatedAt: new Date()
                }
            }
        );
        electroUpdated++;
    }
    console.log(`✅ Merged ${electroUpdated} questions into "Redox Reactions and Electrochemistry" with subtopics.`);

    // 5. Fix Uncategorized Chemistry questions
    const uncategorizedDocs = await qBank.find({
        subject: "Chemistry",
        $or: [{ chapter: "" }, { chapter: null }, { chapter: { $exists: false } }]
    }).toArray();
    console.log(`\n📦 Processing ${uncategorizedDocs.length} uncategorized Chemistry questions...`);
    let uncatUpdated = 0;
    for (const doc of uncategorizedDocs) {
        const classified = classifyUncategorizedChem(doc);
        await qBank.updateOne(
            { _id: doc._id },
            {
                $set: {
                    chapter: classified.chapter,
                    topic: classified.chapter,
                    subTopic: classified.subtopic,
                    updatedAt: new Date()
                }
            }
        );
        uncatUpdated++;
    }
    console.log(`✅ Classified ${uncatUpdated} uncategorized Chemistry questions.`);

    // Check final counts in Chemistry
    const finalChem = await qBank.aggregate([
        { $match: { subject: "Chemistry" } },
        { $group: { _id: "$chapter", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]).toArray();

    console.log('\n🎉 ====================================================');
    console.log(`🎉 ALL CHEMISTRY CHAPTERS NORMALIZED & MERGED ACCORDING TO TOPIC!`);
    console.log(`📊 Current Chemistry Chapter Distribution:`);
    finalChem.forEach(c => console.log(`   - ${c._id}: ${c.count} questions`));
    console.log('🎉 ====================================================');

    await client.close();
}

main().catch(console.error);
