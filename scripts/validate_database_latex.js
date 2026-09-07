/**
 * scripts/validate_database_latex.js
 * 
 * Audits every single question in the MongoDB questionBank:
 *  - KaTeX parse compilation for all math blocks
 *  - Unmatched $ or $$ delimiters
 *  - Unmatched curly braces
 *  - Unclosed \begin / \end environments
 * 
 * Generates an exhaustive report for production compliance.
 */

const { MongoClient } = require('mongodb');
const katex = require('katex');
require('katex/contrib/mhchem');
require('dotenv').config({ path: '.env.local' });

const katexOpts = {
    throwOnError: true,
    strict: false,
    macros: {
        '\\degree': '^{\\circ}',
        '\\celsius': '^{\\circ}\\mathrm{C}',
        '\\angstrom': '\\text{\\AA}',
        '\\micro': '\\mu',
        '\\ohm': '\\Omega',
        '\\Ohm': '\\Omega',
        '\\kgms': '\\mathrm{kg\\,m\\,s^{-1}}',
        '\\ms': '\\mathrm{m\\,s^{-1}}',
        '\\mssq': '\\mathrm{m\\,s^{-2}}',
        '\\Nm': '\\mathrm{N\\,m}',
        '\\Jmol': '\\mathrm{J\\,mol^{-1}}',
        '\\la': '\\lambda',
        '\\om': '\\omega',
        '\\De': '\\Delta',
        '\\kJ': '\\mathrm{kJ}',
        '\\mol': '\\mathrm{mol}',
        '\\ra': '\\rightarrow',
        '\\rla': '\\rightleftharpoons',
    }
};

async function validate() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log('🚀 Connected to MongoDB Atlas for Validation...');

    const db = client.db();
    const qBank = db.collection('questionBank');

    let total = 0;
    let questionsWithLatex = 0;
    let totalMathBlocksTested = 0;
    let katexErrors = 0;
    let unmatchedDollars = 0;
    let unmatchedBraces = 0;

    const errorSamples = [];

    const cursor = qBank.find({});
    const startTime = Date.now();

    while (await cursor.hasNext()) {
        const doc = await cursor.next();
        total++;

        const fields = [
            { field: 'question', val: doc.question },
            { field: 'explanation', val: doc.explanation },
            ...(Array.isArray(doc.options) ? doc.options.map((o, idx) => ({ field: `opt_${idx}`, val: typeof o === 'string' ? o : o?.text })) : [])
        ];

        let hasLatexInDoc = false;

        for (const item of fields) {
            const str = item.val;
            if (!str || typeof str !== 'string') continue;

            if (str.includes('$') || /\\\w+/.test(str)) {
                hasLatexInDoc = true;
            }

            // Check unmatched single dollars
            const withoutDouble = str.replace(/\$\$[\s\S]*?\$\$/g, '');
            const singles = (withoutDouble.match(/\$/g) || []).length;
            if (singles % 2 !== 0) {
                unmatchedDollars++;
                if (errorSamples.length < 15) {
                    errorSamples.push({ id: doc._id, type: 'Unmatched $', field: item.field, text: str.slice(0, 100) });
                }
            }

            // Check unmatched curly braces in math mode
            const openBraces = (str.match(/\{/g) || []).length;
            const closeBraces = (str.match(/\}/g) || []).length;
            if (openBraces !== closeBraces) {
                unmatchedBraces++;
                if (errorSamples.length < 15) {
                    errorSamples.push({ id: doc._id, type: 'Unmatched Braces', field: item.field, text: str.slice(0, 100) });
                }
            }

            // KaTeX compilation check for every math block
            const mathRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\ce\{[^}]*\}|\\pu\{[^}]*\})/g;
            let match;
            while ((match = mathRegex.exec(str)) !== null) {
                totalMathBlocksTested++;
                const fullMatch = match[0];
                let math;
                let display = false;
                if (fullMatch.startsWith('$$')) {
                    math = fullMatch.slice(2, -2).trim();
                    display = true;
                } else if (fullMatch.startsWith('$')) {
                    math = fullMatch.slice(1, -1).trim();
                } else {
                    math = fullMatch;
                }

                // Sanitize math string with the same normalization LatexRenderer uses
                math = math.replace(/\$/g, '')
                    .replace(/μ/g, '\\mu ')
                    .replace(/Ω/g, '\\Omega ')
                    .replace(/°C/g, '^\\circ\\mathrm{C}')
                    .replace(/°/g, '^\\circ ')
                    .replace(/×/g, '\\times ')
                    .replace(/±/g, '\\pm ');

                try {
                    katex.renderToString(math, { ...katexOpts, displayMode: display });
                } catch (err) {
                    katexErrors++;
                    if (errorSamples.length < 15) {
                        errorSamples.push({
                            id: doc._id,
                            type: 'KaTeX Parse Error',
                            field: item.field,
                            math,
                            error: err.message
                        });
                    }
                }
            }
        }

        if (hasLatexInDoc) questionsWithLatex++;

        if (total % 5000 === 0) {
            process.stdout.write(`\rProgress: Scanned ${total} questions... Tested ${totalMathBlocksTested} math expressions...`);
        }
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log(`\n\n========================================`);
    console.log(`📊 DATABASE LATEX VALIDATION REPORT`);
    console.log(`========================================`);
    console.log(`Total questions scanned:        ${total}`);
    console.log(`Questions containing LaTeX:     ${questionsWithLatex}`);
    console.log(`Total math expressions tested:  ${totalMathBlocksTested}`);
    console.log(`KaTeX compilation failures:     ${katexErrors}`);
    console.log(`Unmatched $ delimiters:         ${unmatchedDollars}`);
    console.log(`Unmatched curly braces:         ${unmatchedBraces}`);
    console.log(`Scan duration:                  ${duration}s`);
    console.log(`Compliance rate:                ${(((totalMathBlocksTested - katexErrors) / (totalMathBlocksTested || 1)) * 100).toFixed(2)}%`);
    console.log(`========================================`);

    if (errorSamples.length > 0) {
        console.log(`\nSample issues (first ${errorSamples.length}):`);
        console.log(JSON.stringify(errorSamples, null, 2));
    } else {
        console.log(`\n✨ Perfect! 0 LaTeX errors found across the entire database!`);
    }

    await client.close();
}

validate().catch(console.error);
