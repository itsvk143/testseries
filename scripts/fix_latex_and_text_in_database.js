/**
 * fix_latex_and_text_in_database.js
 * Scans the entire questionBank database (39,042 questions):
 * 1. Corrects LaTeX delimiter errors (unbalanced $, mismatched $$ and $, nested $) across questions, options, and explanations.
 * 2. Rewrites template artifact strings into authentic scientific problem statements.
 * 3. Corrects misplaced physical/chemical archetypes to their proper chapter and subtopics.
 */

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

function cleanLatexDelimiters(str) {
    if (!str || typeof str !== 'string') return str;
    let s = str;

    // Fix nested $...$$...$$ in options: e.g. $E = E^\circ - $$\frac{...}$$ -> $E = E^\circ - \frac{...}$
    s = s.replace(/\$([^$]+?)\s*-\s*\$\$\\frac\{([^$]+?)\}\$\$/g, (m, p1, p2) => `$${p1} - \\frac{${p2}}$`);
    s = s.replace(/\$([^$]+?)\s*\+\s*\$\$\\frac\{([^$]+?)\}\$\$/g, (m, p1, p2) => `$${p1} + \\frac{${p2}}$`);
    s = s.replace(/\$([^$]+?)\s*=\s*\$\$\\frac\{([^$]+?)\}\$\$/g, (m, p1, p2) => `$${p1} = \\frac{${p2}}$`);

    // Fix opening $$ with closing $: e.g. $$\frac{...}$ -> $$\frac{...}$$
    s = s.replace(/\$\$([^$]+?)\$(?!\$)/g, (m, p1) => `$$${p1}$$`);

    // Fix opening $ with closing $$: e.g. $\frac{...}$$ -> $$\frac{...}$$
    s = s.replace(/(?<!\$)\$([^$]+?)\$\$/g, (m, p1) => `$$${p1}$$`);

    // Fix specific known unclosed formulas
    s = s.replace(/\\left\[ \\text\{Fe\} \(\\text\{CN\}\)_6 \\right\]\^\{4-\}\$/g, '\\left[ \\text{Fe} (\\text{CN})_6 \\right]^{4-}$$');
    s = s.replace(/\\vec\{E\}\$\$ and magnetic field \$/g, '\\vec{E}$$ and magnetic field $\\vec{B}$');
    s = s.replace(/\(Avogadro's number = 6\.022 \\times 10\^\{23\}\)/g, "(Avogadro's number = $6.022 \\times 10^{23}$)");
    s = s.replace(/6\.022 \\times 10\^\{23\}/g, "$6.022 \\times 10^{23}$");

    // Clean double backslashes
    s = s.replace(/\\\\([a-zA-Z])/g, '\\$1');

    return s;
}

async function main() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');
    console.log('🔍 Starting comprehensive LaTeX and text error correction across questionBank...');

    const cursor = qBank.find({});
    let totalScanned = 0;
    let questionsFixed = 0;
    let optionsFixed = 0;
    let explanationsFixed = 0;
    let archetypesRemapped = 0;

    const bulkOps = [];

    while (await cursor.hasNext()) {
        const doc = await cursor.next();
        totalScanned++;
        let modified = false;
        let updateSet = {};

        let qText = doc.question || '';
        const originalQText = qText;

        // 1. Rewrite template artifact questions to authentic scientific statements and re-map
        if (/undergoes a two-step process where the overall rate constant is/i.test(qText)) {
            qText = qText.replace(/A sample subjected to .* undergoes a two-step process where the overall rate constant is/i,
                'For a reaction mechanism undergoing a two-step kinetic process where the overall rate constant is');
            updateSet.subject = 'Chemistry';
            updateSet.chapter = 'Chemical Kinetics';
            updateSet.subTopic = 'Rate of a chemical reaction';
            archetypesRemapped++;
            modified = true;
        } else if (/For an oscillatory or cyclic process in (Significant figures|Units and dimensions|Error analysis)/i.test(qText)) {
            qText = qText.replace(/For an oscillatory or cyclic process in [^,]+,/i,
                'For an oscillatory mechanical system,');
            updateSet.subject = 'Physics';
            updateSet.chapter = 'Oscillations and Waves';
            updateSet.subTopic = 'Simple Harmonic Motion (SHM)';
            archetypesRemapped++;
            modified = true;
        } else if (/In an electrodynamic \/ electrochemical cell under (Significant figures|Units and dimensions|Error analysis)/i.test(qText)) {
            qText = qText.replace(/In an electrodynamic \/ electrochemical cell under [^,]+,/i,
                'In an electrochemical cell,');
            updateSet.subject = 'Chemistry';
            updateSet.chapter = 'Redox Reactions and Electrochemistry';
            updateSet.subTopic = 'Electrochemical cells';
            archetypesRemapped++;
            modified = true;
        } else if (/During an adiabatic\/isentropic expansion in (Significant figures|Units and dimensions|Error analysis)/i.test(qText)) {
            qText = qText.replace(/During an adiabatic\/isentropic expansion in [^,]+,/i,
                'During a reversible adiabatic expansion,');
            updateSet.subject = 'Physics';
            updateSet.chapter = 'Thermodynamics';
            updateSet.subTopic = 'Adiabatic and isothermal processes';
            archetypesRemapped++;
            modified = true;
        } else if (/\[Ranker Challenge\] In a laboratory study of (Significant figures|Units and dimensions|Error analysis)/i.test(qText)) {
            qText = qText.replace(/\[Ranker Challenge\] In a laboratory study of [^,]+,/i,
                'In a thermodynamic process,');
            updateSet.subject = 'Physics';
            updateSet.chapter = 'Thermodynamics';
            updateSet.subTopic = 'First law of thermodynamics';
            archetypesRemapped++;
            modified = true;
        } else if (/\[Top 100 Numerical\] In (Significant figures|Units and dimensions|Error analysis)/i.test(qText)) {
            qText = qText.replace(/\[Top 100 Numerical\] In [^,]+,/i,
                'Two interacting particles');
            updateSet.subject = 'Physics';
            updateSet.chapter = 'Work, Energy, and Power';
            updateSet.subTopic = 'Conservative forces and potential energy';
            archetypesRemapped++;
            modified = true;
        } else if (/A system under (Significant figures|Units and dimensions|Error analysis)/i.test(qText)) {
            qText = qText.replace(/A system under [^a]+attains maximum stability when/i,
                'A conservative physical system attains equilibrium when');
            updateSet.subject = 'Physics';
            updateSet.chapter = 'Work, Energy, and Power';
            updateSet.subTopic = 'Conservative forces and potential energy';
            archetypesRemapped++;
            modified = true;
        }

        // Clean LaTeX in question text
        const cleanedQ = cleanLatexDelimiters(qText);
        if (cleanedQ !== originalQText) {
            updateSet.question = cleanedQ;
            questionsFixed++;
            modified = true;
        }

        // 2. Clean options
        if (Array.isArray(doc.options)) {
            let optsChanged = false;
            const newOpts = doc.options.map(opt => {
                if (typeof opt === 'string') {
                    const cleaned = cleanLatexDelimiters(opt);
                    if (cleaned !== opt) optsChanged = true;
                    return cleaned;
                } else if (opt && typeof opt.text === 'string') {
                    const cleaned = cleanLatexDelimiters(opt.text);
                    if (cleaned !== opt.text) {
                        optsChanged = true;
                        return { ...opt, text: cleaned };
                    }
                }
                return opt;
            });

            if (optsChanged) {
                updateSet.options = newOpts;
                optionsFixed++;
                modified = true;
            }
        }

        // 3. Clean explanation
        if (doc.explanation && typeof doc.explanation === 'string') {
            const cleanedExp = cleanLatexDelimiters(doc.explanation);
            if (cleanedExp !== doc.explanation) {
                updateSet.explanation = cleanedExp;
                explanationsFixed++;
                modified = true;
            }
        }

        if (modified) {
            updateSet.updatedAt = new Date();
            bulkOps.push({
                updateOne: {
                    filter: { _id: doc._id },
                    update: { $set: updateSet }
                }
            });
        }

        if (bulkOps.length >= 1000) {
            await qBank.bulkWrite(bulkOps);
            bulkOps.length = 0;
            process.stdout.write(`Scanned ${totalScanned} questions...\r`);
        }
    }

    if (bulkOps.length > 0) {
        await qBank.bulkWrite(bulkOps);
    }

    console.log(`\n✅ Database scan complete! Processed ${totalScanned} questions.`);
    console.log(`📊 Corrections Applied:`);
    console.log(` - Questions text cleaned: ${questionsFixed}`);
    console.log(` - Options cleaned: ${optionsFixed}`);
    console.log(` - Explanations cleaned: ${explanationsFixed}`);
    console.log(` - Archetype statements normalized & re-mapped: ${archetypesRemapped}`);

    // Audit verification
    const remainingUnb = await qBank.countDocuments({
      $or: [
        { question: { $regex: /\$\$[^$]+\$(?!\$)/ } },
        { question: { $regex: /(?<!\$)\$[^$]+\$\$/ } }
      ]
    });
    console.log(`\nRemaining mismatched $$ / $ questions: ${remainingUnb}`);

    await client.close();
}

main().catch(console.error);
