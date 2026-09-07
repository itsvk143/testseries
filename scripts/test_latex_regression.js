const assert = require('assert');
const katex = require('katex');
require('katex/contrib/mhchem');

const { canonicalizeLatex } = require('../src/lib/questionFormatter');

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

function verifyKatex(renderedString) {
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\ce\{[^}]*\}|\\pu\{[^}]*\})/g;
    let match;
    let count = 0;
    while ((match = mathRegex.exec(renderedString)) !== null) {
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
        katex.renderToString(math, { ...katexOpts, displayMode: display });
        count++;
    }
    return count;
}

console.log('🧪 Starting LaTeX Regression Tests...\n');

// Test 1: Screenshot 1 Question (Error Analysis with bare \omega_0)
{
    const input = "[Top 100 AIR NEET] In an advanced physical system investigating Error analysis (Physics and Measurement), an ideal non-dissipative mechanism operates under conservative forces. If the potential energy function of the system is given by $U(x) = \\alpha x^4 - \\beta x^2$ (where $\\alpha, \\beta > 0$), what is the position of stable equilibrium and the angular frequency \\omega_0 of small oscillations about it?";
    const canonical = canonicalizeLatex(input);
    assert(canonical.includes('$\\omega_0$'), 'Bare \\omega_0 should be wrapped into $\\omega_0$');
    const mathCount = verifyKatex(canonical);
    assert(mathCount >= 3, `Expected at least 3 math blocks, got ${mathCount}`);
    console.log('✅ Test 1 Passed: Screenshot 1 Error analysis question with bare \\omega_0');
}

// Test 2: Screenshot 2 Question (Units and dimensions with \text{kg} and \text{m/s})
{
    const input = "In a quantitative calculation related to Units and dimensions in Physics and Measurement, a body of mass $m = 2.0\\text{ kg}$ undergoes a displacement under a force field. If the initial kinetic energy is $K_i = 10.0\\text{ J}$ and the net work done by all forces on the mass is $W_{net} = 30.0\\text{ J}$, what is the final speed $v_f$ of the mass in $\\text{m/s}$?";
    const canonical = canonicalizeLatex(input);
    const mathCount = verifyKatex(canonical);
    assert.strictEqual(mathCount, 5, 'All 5 units expressions should parse cleanly');
    console.log('✅ Test 2 Passed: Screenshot 2 Units question with \\text{kg} and \\text{m/s}');
}

// Test 3: Double backslashes and escaped dollar signs
{
    const input = "\\$U(x)=\\\\alpha x^4-\\\\beta x^2\\$";
    const canonical = canonicalizeLatex(input);
    assert.strictEqual(canonical, "$U(x)=\\alpha x^4-\\beta x^2$");
    const count = verifyKatex(canonical);
    assert.strictEqual(count, 1);
    console.log('✅ Test 3 Passed: Escaped dollar \\$ and double backslash \\\\alpha normalized to canonical LaTeX');
}

// Test 4: Nested dollar signs inside fractions
{
    const input = "$\\frac{1}{$\\sqrt{T}}$$";
    const canonical = canonicalizeLatex(input);
    assert(canonical.includes('\\sqrt{T}'), 'Should preserve inner formula');
    const count = verifyKatex(canonical);
    assert.strictEqual(count, 1, 'Should compile cleanly as a valid math block');
    console.log('✅ Test 4 Passed: Nested dollar in fraction normalized and compiled');
}

// Test 5: Mismatched opening $$ with closing single $
{
    const input = "For the reaction $$\\text{Zn}(s) + \\text{Cu}^{2+}(\\text{aq}) \\rightleftharpoons \\text{Zn}^{2+}(\\text{aq}) + \\text{Cu}(s)$, the equilibrium constant $\\text{K}_c$ is $1.5 \\times 10^{37}$.";
    const canonical = canonicalizeLatex(input);
    const count = verifyKatex(canonical);
    assert(count >= 3);
    console.log('✅ Test 5 Passed: Mismatched $$...$ delimiter normalized');
}

// Test 6: Attached unit exponent (e.g. m/s$$^2$)
{
    const input = "$\\sqrt{1020}$ m/s$$^2$";
    const canonical = canonicalizeLatex(input);
    const count = verifyKatex(canonical);
    assert(count >= 2);
    console.log('✅ Test 6 Passed: Attached unit exponent m/s$$^2$ normalized');
}

// Test 7: Bare option formula without any $
{
    const input = "-5744\\text{ J}";
    const canonical = canonicalizeLatex(input);
    assert(canonical.startsWith('$') && canonical.endsWith('$'), 'Should wrap bare formula option in $');
    const count = verifyKatex(canonical);
    assert.strictEqual(count, 1);
    console.log('✅ Test 7 Passed: Bare option formula wrapped in delimiters');
}

// Test 8: KaTeX custom macros (\degree, \celsius, \angstrom, \ce, \pu)
{
    const input = "Temperature is $25\\degree\\text{C}$ or $25\\celsius$, wavelength is $5000\\angstrom$, reaction is $\\ce{H2 + Cl2 -> 2HCl}$ and $g = \\pu{9.8 m/s^2}$.";
    const canonical = canonicalizeLatex(input);
    const count = verifyKatex(canonical);
    assert.strictEqual(count, 5);
    console.log('✅ Test 8 Passed: Custom macros \\degree, \\celsius, \\angstrom, \\ce, and \\pu compile cleanly');
}

// Test 9: Standard LaTeX \( ... \) and \[ ... \] conversion
{
    const input = String.raw`Moles = Molarity \(\times\) Volume with energy \[E = mc^2\]`;
    const canonical = canonicalizeLatex(input);
    console.log('Test 9 canonical:', canonical);
    assert(canonical.includes('$\\times$'), 'Should convert \\(...\\) to $...$');
    assert(canonical.includes('$$E = mc^2$$'), 'Should convert \\[...] to $$...$$');
    const count = verifyKatex(canonical);
    assert.strictEqual(count, 2, 'Should have exactly 2 valid math blocks');
    console.log('✅ Test 9 Passed: LaTeX parenthetical \\( ... \\) and \\[ ... \\] converted');
}

// Test 10: Displaced frac dollar and glued words
{
    const input = "Moles = $\\frac${\\text{Mass}}{\\text{Molar mass}}$ and ion is $\\text{Fe}^{2+}$$is$ [Ar]";
    const canonical = canonicalizeLatex(input);
    assert(canonical.includes('$\\frac{\\text{Mass}}{\\text{Molar mass}}$'), 'Should repair displaced frac dollar');
    assert(canonical.includes('$\\text{Fe}^{2+}$') && canonical.includes('is') && canonical.includes('[Ar]'), 'Should separate glued word');
    const count = verifyKatex(canonical);
    assert.strictEqual(count, 2);
    console.log('✅ Test 10 Passed: Displaced frac dollar and glued words repaired');
}

// Test 11: Triple dollar normalization
{
    const input = "The Nernst equation is $$$E_{\\text{cell}} = E^0_{\\text{cell}} - \\frac{0.0591}{2} \\log(Q)$$$";
    const canonical = canonicalizeLatex(input);
    assert(canonical.includes('$$E_{\\text{cell}} = E^0_{\\text{cell}} - \\frac{0.0591}{2} \\log(Q)$$'), 'Should normalize triple dollars to double dollars');
    const count = verifyKatex(canonical);
    assert.strictEqual(count, 1);
    console.log('✅ Test 11 Passed: Triple dollar normalization to standard display math');
}

console.log('\n🎉 ALL 11 REGRESSION TESTS PASSED SUCCESSFULLY!\n');
