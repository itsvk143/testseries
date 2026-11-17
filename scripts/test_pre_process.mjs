import fs from 'fs';

const src = fs.readFileSync('src/components/LatexRenderer.js', 'utf8');
const start = src.indexOf('const katexOpts =');
const end = src.indexOf('const renderFragment =');
const extracted = src.slice(start, end) + '\nreturn { preProcess, parseContentBlocks, sanitizeMath, katexOpts };';
const { preProcess, parseContentBlocks, sanitizeMath, katexOpts } = new Function(extracted)();

const testStrings = [
  { id: 'Q1', text: 'For the reaction 2N_2O_5(g) → 4NO_2(g) + O_2(g), the rate of formation of NO_2 is 2.8 × 10^{-3}M s^{-1}. The rate of disappearance of N_2O_5 and the rate of the reaction respectively are:' },
  { id: 'Q2', text: 'In the reaction BrO_3^-(aq) + 5Br^-(aq) + 6H^+(aq) → 3Br_2(l) + 3H_2O(l), if the rate of disappearance of Br^- is k_1[BrO_3^-][Br^-][H^+]^2, the rate of appearance of Br_2 is k_2[BrO_3^-][Br^-][H^+]^2, and the rate of disappearance of H^+ is k_3[BrO_3^-][Br^-][H^+]^2, then the correct relation among k_1, k_2, and k_3 is:' },
  { id: 'Q3', text: 'For a gaseous reaction A(g) + 2B(g) → C(g), the rate law is given by r = k[A][B]^2. If the volume of the reaction vessel is suddenly reduced to one-fourth of its initial volume, the rate of reaction relative to the initial rate will become:' },
  { id: 'Q4', text: 'For the reaction 2A + B → C + D, the following kinetic data were obtained:\n\n| Exp. | [A]\\ (mol L^{-1}) | [B]\\ (mol L^{-1}) | Initial rate of formation of D\\ (mol L^{-1}min^{-1}) |\n| :--- | :--- | :--- | :--- |\n| I | 0.1 | 0.1 | 6.0 × 10^{-3} |\n| II | 0.3 | 0.2 | 7.2 × 10^{-2} |\n| III | 0.3 | 0.4 | 2.88 × 10^{-1} |\n| IV | 0.4 | 0.1 | 2.40 × 10^{-2} |\n\nThe rate law for the reaction is:' },
  { id: 'Q13', text: 'A first-order reaction is 40\\% complete in 50minutes. In what time will the reaction be 80\\% complete? (\\log 2 = 0.3010, \\log 3 = 0.4771, \\log 5 = 0.6990)' },
  { id: 'Q14', text: 'For a first-order reaction, the ratio of time required for 99.9\\% completion ( t_{99.9\\%} ) to the time required for 90\\% completion ( t_{90\\%} ) is:' },
  { id: 'Q17', text: 'Which of the following graphs represents a zero-order reaction ( [R]_0 = initial concentration, [R] = concentration at time t, t_{1/2} = half-life)?' },
  { id: 'Q19', text: 'Consider the thermal decomposition of azoisopropane to hexane and nitrogen at 543K:\n\n( CH_3 )_2CHN=NCH( CH_3 )_2(g) → N_2(g) + C_6H_{14}(g).\n\nIf the initial pressure is 35.0mm Hg and after 360s the total pressure is 54.0mm Hg, the rate constant k is given by:' },
  { id: 'Q24', text: 'For an n^{th}-order reaction (n ≠ 1), the half-life t_{1/2} is related to the initial concentration [R]_0 as:' },
  { id: 'Q26', text: 'During the hydrolysis of 0.01M ethyl acetate with 10M water in the presence of dilute HCl:\n\\[ CH_3COOC_2H_5 + H_2O \\xrightarrow{H^+} CH_3COOH + C_2H_5OH \\]\nIf the true second-order rate constant is k = 2.0 × 10^{-4}L mol^{-1}s^{-1}, the pseudo-first-order rate constant k\' is:' },
  { id: 'Q28', text: 'For a second-order reaction A + B → Products, the rate law is Rate = k[A][B]. When [B]_0 ≫ [A]_0, the reaction behaves as a pseudo-first-order reaction. Under this condition, a straight line with a positive slope is obtained when:' },
  { id: 'Q29', text: 'According to the Arrhenius equation, k = A e^{-E_a / RT}, the slope and y-intercept of the straight-line plot between \\log_{10} k (on y-axis) and 1/T (on x-axis) are respectively:' }
];

for (const t of testStrings) {
  console.log('====================================');
  console.log('INPUT', t.id, ':', t.text);
  const blocks = parseContentBlocks(t.text);
  console.log('BLOCKS COUNT:', blocks.length, 'TYPES:', blocks.map(b => b.type));
  for (const b of blocks) {
    if (b.type === 'text') {
      const processed = preProcess(b.content);
      console.log('PREPROCESSED TEXT:', processed);
    } else {
      console.log('TABLE HEADERS:', b.headers);
      console.log('TABLE ROWS:', b.rows);
    }
  }
}
