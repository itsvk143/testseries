import fs from 'fs';
import katex from 'katex';

const q18Options = [
  "k = $\\frac{2.303}{t}$ \\log \\left( $\\frac{P_i}{2P_i - P_t}$ \\right)",
  "k = $\\frac{2.303}{t}$ \\log \\left( $\\frac{2P_i}{3P_i - P_t}$ \\right)",
  "k = $\\frac{2.303}{t}$ \\log \\left( $\\frac{P_i}{3P_i - P_t}$ \\right)",
  "k = $\\frac{2.303}{t}$ \\log \\left( $\\frac{2P_i}{P_t - P_i}$ \\right)"
];

const q28Options = [
  "$\\ln\\left(\\frac{[A]_0}{[A]}\\right) is plotted against t, with slope = k[B]_0$",
  "$\\ln\\left(\\frac{[A]}{[A]_0}\\right) is plotted against t, with slope = k[B]_0$",
  "$\\frac{1}{[A]} is plotted against t, with slope = k[B]_0$",
  "[A] is plotted against t, with slope = -k[B]_0"
];

function cleanLatex(s) {
  // 1. Fractured equations
  s = s.replace(/(?<![\w$\\])([a-zA-Z]\s*=\s*)\$([^$]+)\$\s*\\(log|ln)\s*\\left\(\s*\$([^$]+)\$\s*\\right\)/g, (m, prefix, part1, fn, part2) => {
    return `$${prefix}${part1.trim()} \\${fn} \\left( ${part2.trim()} \\right)$`;
  });

  // 2. Prose inside math
  s = s.replace(/\$([^\$]+?)\s+(is plotted against|plotted against)\s+([a-zA-Z0-9_\^\{\}\[\]]+)(?:,\s*with\s+slope\s*(=)?\s*([^\$]+?))?\$/gi, (match, expr, phrase, variable, eq, slope) => {
    let res = `$${expr.trim()}$ ${phrase} $${variable.trim()}$`;
    if (slope) {
      res += `, with slope ${eq ? '$= ' + slope.trim() + '$' : '$' + slope.trim() + '$'}`;
    }
    return res;
  });

  return s;
}

console.log("=== Q18 FIXED OPTIONS ===");
for (const opt of q18Options) {
  const fixed = cleanLatex(opt);
  console.log("Original:", opt);
  console.log("Fixed:   ", fixed);
  const math = fixed.slice(1, -1);
  const rendered = katex.renderToString(math, { displayMode: false, throwOnError: false });
  console.log("Has KaTeX error:", rendered.includes("katex-error"));
}

console.log("\n=== Q28 FIXED OPTIONS ===");
for (const opt of q28Options) {
  const fixed = cleanLatex(opt);
  console.log("Original:", opt);
  console.log("Fixed:   ", fixed);
  const parts = fixed.split(/(\$[^$]+\$)/g);
  let allOk = true;
  for (const p of parts) {
    if (p.startsWith('$') && p.endsWith('$')) {
      const rendered = katex.renderToString(p.slice(1, -1), { displayMode: false, throwOnError: false });
      if (rendered.includes("katex-error")) allOk = false;
    }
  }
  console.log("All math parts OK:", allOk);
}
