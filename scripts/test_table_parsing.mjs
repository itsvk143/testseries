import fs from "fs";

// Read questionFormatter.js and extract canonicalizeLatex
const qfSrc = fs.readFileSync("src/lib/questionFormatter.js", "utf8");
const cleanQfSrc = qfSrc
  .replace(/export const /g, "const ")
  .replace(/export function /g, "function ")
  + "\nreturn { canonicalizeLatex };";

const { canonicalizeLatex } = new Function(cleanQfSrc)();

// Read LatexRenderer.js and extract parseContentBlocks
const lrSrc = fs.readFileSync("src/components/LatexRenderer.js", "utf8");
const start = lrSrc.indexOf("const katexOpts =");
const end = lrSrc.indexOf("const renderFragment =");
const extracted = lrSrc.slice(start, end) + "\nreturn { preProcess, parseContentBlocks };";
const { preProcess, parseContentBlocks } = new Function(extracted)();

const tableText = `For the reaction 2A + B → C + D, the following kinetic data were obtained:

| Exp. | [A] (mol L^{-1}) | [B] (mol L^{-1}) | Initial rate of formation of D (mol L^{-1}min^{-1}) |
| :--- | :--- | :--- | :--- |
| I | 0.1 | 0.1 | 6.0 × 10^{-3} |
| II | 0.3 | 0.2 | 7.2 × 10^{-2} |
| III | 0.3 | 0.4 | 2.88 × 10^{-1} |
| IV | 0.4 | 0.1 | 2.40 × 10^{-2} |

The rate law for the reaction is:`;

const canonical = canonicalizeLatex(tableText);
console.log("Canonical text:\n", canonical);

const blocks = parseContentBlocks(canonical);
console.log("Blocks types:", blocks.map(b => b.type));
if (blocks.some(b => b.type === "table")) {
  console.log("SUCCESS: parsed table!", JSON.stringify(blocks.find(b => b.type === "table"), null, 2));
} else {
  console.log("FAILURE: Table NOT detected!");
}
