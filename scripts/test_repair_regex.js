const testCases = [
  // Screenshot 1:
  "Which of the following molecules has a bond angle of 180^\\circ?",
  "Which of the following molecules has a bond angle of 180\\\\circ?",
  "What is the shape of the chlorate ion (\\text{ClO}_3^-)?",
  "Assertion (A): \\text{XeF}_4 has a square planar shape. Reason (R): In \\text{XeF}_4, the two lone pairs on Xenon occupy trans axial positions to minimize lone pair - lone pair repulsions.",
  
  // Screenshot 2:
  "Assertion (A): The dipole moment of \\text{CO}_2 is zero, while that of \\text{SO}_2 is 1.63 D. Reason (R): \\text{CO}_2 is a linear molecule with zero lone pairs on carbon, whereas \\text{SO}_2 has a bent V-shaped structure due to a lone pair on sulfur.",
  "In \\text{NH}_3, the individual bond dipoles point:",
  "Assertion (A): \\text{CH}_3\\text{Cl} has a higher dipole moment than \\text{CH}_3\\text{F}. Reason (R): Dipole moment is the product of charge separation and bond distance (\\mu = q \\times d); the significantly larger C-Cl bond length overcompensates for the smaller charge difference.",

  // Screenshot 3:
  "Assertion (A): \\text{N}_2 has a higher bond dissociation energy than \\text{N}_2^+. Reason (R): Ionization of \\text{N}_2 to \\text{N}_2^+ removes an electron from a bonding \\sigma_{2p_z} molecular orbital, decreasing the bond order from 3.0 to 2.5.",
  "Among \\text{H}_2, \\text{H}_2^+, \\text{He}_2^+, and \\text{He}_2, the order of stability is:",
  "Assertion (A): \\text{NaCl} has a higher melting point than \\text{AlCl}_3. Reason (R): \\text{Al}^{3+} has a higher charge and smaller radius than \\text{Na}^+, causing greater polarization of chloride ions according to Fajan's rules.",

  // Screenshot 4:
  "The pH of a saturated solution of \text{Ba(OH)}_2 is 12.0. The molar solubility of \text{Ba(OH)}_2 is:",
  "5\times 10^{-3}\text{ M}",
  "What is the pH of a solution prepared by dissolving 0.4\text{ g} of \text{NaOH} in water to make 1\text{ L} of solution? (M_{\text{NaOH}} = 40\text{ g/mol})",
  "Which of the following compounds has the highest solubility in pure water at 25^\\circ C?",
  "The H-O-H bond angle in water (\\text{H}_2\\text{O}) is 104.5^\\circ because:"
];

function repairLatex(str, isOption = false) {
  if (!str || typeof str !== 'string') return str;

  // 1. Fix corrupted control characters where first letter was swallowed by escape
  let fixed = str
    .replace(/\t(ext|imes|heta|au)/g, (m, g) => {
      if (g === 'ext') return '\\text';
      if (g === 'imes') return '\\times';
      if (g === 'heta') return '\\theta';
      if (g === 'au') return '\\tau';
      return m;
    })
    .replace(/\x0crac/g, '\\frac')
    .replace(/\x08eta/g, '\\beta')
    .replace(/\rightleftharpoons/g, '\\rightleftharpoons');

  // 2. Fix double backslashes before circ or LaTeX commands
  fixed = fixed.replace(/\\\\+circ/g, '\\circ');
  fixed = fixed.replace(/\\\\+([a-zA-Z]+)/g, '\\$1');

  // 3. If it's an option or standalone math expression without any $ delimiters, and contains math symbols:
  if (!fixed.includes('$')) {
    const trimmed = fixed.trim();
    // If it's an option that has \times, \frac, \sqrt, \text with numbers, powers ^, etc.:
    if (isOption && (/\\(times|frac|sqrt|pm|approx|circ|degree)/.test(trimmed) || /10\^|[-+0-9.]+\s*\\text\{/.test(trimmed))) {
      return `$${trimmed}$`;
    }
  }

  // 4. Process segments outside $...$ and $$...$$
  const parts = fixed.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

  for (let i = 0; i < parts.length; i += 2) {
    let segment = parts[i];
    if (!segment) continue;

    // A. Fix parenthesized formulas: e.g. (\mu = q \times d) or (M_{\text{NaOH}} = 40\text{ g/mol})
    segment = segment.replace(/\(\s*([a-zA-Z\\][a-zA-Z0-9_^{}\\s]*\s*=\s*[^)]+)\s*\)/g, (m, inner) => {
      if (/\\|[\^_{}]/.test(inner)) {
        return `($${inner.trim()}$)`;
      }
      return m;
    });

    // B. Fix degree / temperature expressions outside math:
    // e.g. 180^\circ, 104.5^\circ, 25^\circ C, 25^\circ\text{C}, 180\circ, 180\degree, 180°
    segment = segment.replace(/([0-9.]+)\s*(?:\^\\circ|\^\{\\circ\}|\\circ|\\degree|°)\s*([CKF]|\\text\{[CKF]\})?(\b|[^\w]|$)/g, (m, num, unit, boundary) => {
      if (unit) {
        const cleanUnit = unit.replace(/\\text\{([^{}]+)\}/, '$1');
        return `$${num}^\\circ\\text{${cleanUnit}}${boundary}`;
      }
      return `$${num}^\\circ$${boundary}`;
    });

    // C. Fix chemical formulas and terms with \text{...} outside math:
    // Matches expressions like \text{XeF}_4, \text{H}_2\text{O}, \text{Al}^{3+}, \text{ClO}_3^-, etc.
    segment = segment.replace(/(\\text\{[^{}]+\}(?:_\{?[0-9a-zA-Z+*\-]+\}?|\^\{?[0-9a-zA-Z+*\-]+\}?)*(?:\\text\{[^{}]+\}(?:_\{?[0-9a-zA-Z+*\-]+\}?|\^\{?[0-9a-zA-Z+*\-]+\}?)*)*)/g, (m) => {
      return `$${m}$`;
    });

    // D. Fix bare Greek or symbol commands outside math:
    // e.g. \sigma_{2p_z}, \mu, \alpha, \Delta, etc.
    segment = segment.replace(/\\(sigma|pi|mu|alpha|beta|gamma|delta|Delta|lambda|theta|omega|Omega)(?:_\{?[0-9a-zA-Z*]+\}?|\^\{?[0-9a-zA-Z*]+\}?)*/g, (m) => {
      return `$${m}$`;
    });

    // E. Clean any adjacent dollars: e.g. $...$$...$ -> $... ...$
    segment = segment.replace(/\$\$/g, '');

    parts[i] = segment;
  }

  return parts.join('');
}

console.log('Testing Repair:');
testCases.forEach((t, idx) => {
  console.log(`\n[${idx + 1}] ORIGINAL:`);
  console.log(t);
  const repaired = repairLatex(t);
  console.log('REPAIRED:');
  console.log(repaired);
});
