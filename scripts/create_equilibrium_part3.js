const fs = require('fs');
const path = require('path');

function buildPart3() {
  const content = `// Part 3 of authentic Equilibrium questions
// Covers:
// 1. Hydrolysis of salts and acid-base concepts (Arrhenius, Bronsted, Lewis) (47 questions)
// 2. Buffer solutions (47 questions)
// 3. Solubility product (Ksp) and common ion effect (47 questions)

function getSaltHydrolysisAndAcidBaseQuestions() {
  const q = [];
  const add = (question, options, correctIndex, explanation) => {
    q.push({ question, options, correctIndex, explanation });
  };

  // Concept of acids and bases (Arrhenius, Bronsted-Lowry, Lewis)
  add(
    "According to the Brønsted-Lowry theory, an acid is a substance that:",
    ["Donates a proton ($\\\\text{H}^+$)", "Accepts a proton ($\\\\text{H}^+$)", "Accepts an electron pair", "Donates an electron pair"],
    0,
    "A Brønsted-Lowry acid is a proton ($\\\\text{H}^+$) donor, while a Brønsted-Lowry base is a proton acceptor."
  );
  add(
    "Which of the following is the conjugate base of $\\\\text{HCO}_3^-$?",
    ["$\\\\text{CO}_3^{2-}$", "$\\\\text{H}_2\\\\text{CO}_3$", "$\\\\text{OH}^-$", "$\\\\text{CO}_2$"],
    0,
    "The conjugate base of an acid is formed by removing one proton ($\\\\text{H}^+$): $\\\\text{HCO}_3^- - \\\\text{H}^+ = \\\\text{CO}_3^{2-}$."
  );
  add(
    "Which of the following is the conjugate acid of $\\\\text{NH}_2^-$?",
    ["$\\\\text{NH}_3$", "$\\\\text{NH}_4^+$", "$\\\\text{N}_2\\\\text{H}_4$", "$\\\\text{NH}^{2-}$"],
    0,
    "The conjugate acid is formed by adding one proton ($\\\\text{H}^+$): $\\\\text{NH}_2^- + \\\\text{H}^+ = \\\\text{NH}_3$."
  );
  add(
    "Which of the following species can act as both a Brønsted acid and a Brønsted base (amphiprotic)?",
    ["$\\\\text{HSO}_4^-$", "$\\\\text{SO}_4^{2-}$", "$\\\\text{CO}_3^{2-}$", "$\\\\text{H}_3\\\\text{O}^+$"],
    0,
    "$\\\\text{HSO}_4^-$ can donate a proton to form $\\\\text{SO}_4^{2-}$ (acid) or accept a proton to form $\\\\text{H}_2\\\\text{SO}_4$ (base)."
  );
  add(
    "Which of the following behaves as a Lewis acid?",
    ["$\\\\text{BF}_3$", "$\\\\text{NH}_3$", "$\\\\text{H}_2\\\\text{O}$", "$\\\\text{CH}_4$"],
    0,
    "$\\\\text{BF}_3$ has an incomplete octet on boron (6 valence electrons) and accepts an electron pair, acting as a Lewis acid."
  );
  add(
    "Which of the following orders of Lewis acid strength is correct for boron trihalides?",
    ["$\\\\text{BF}_3 < \\\\text{BCl}_3 < \\\\text{BBr}_3 < \\\\text{BI}_3$", "$\\\\text{BF}_3 > \\\\text{BCl}_3 > \\\\text{BBr}_3 > \\\\text{BI}_3$", "$\\\\text{BCl}_3 > \\\\text{BF}_3 > \\\\text{BBr}_3 > \\\\text{BI}_3$", "$\\\\text{BF}_3 = \\\\text{BCl}_3 = \\\\text{BBr}_3 = \\\\text{BI}_3$"],
    0,
    "Due to effective $2p\\\\pi-2p\\\\pi$ back-bonding in $\\\\text{BF}_3$, the electron deficiency of boron is compensated most effectively. Back-bonding decreases as halogen size increases, so Lewis acidity increases: $\\\\text{BF}_3 < \\\\text{BCl}_3 < \\\\text{BBr}_3 < \\\\text{BI}_3$."
  );
  add(
    "Which of the following is NOT a Lewis base?",
    ["$\\\\text{AlCl}_3$", "$\\\\text{NH}_3$", "$\\\\text{H}_2\\\\text{O}$", "$\\\\text{CN}^-$"],
    0,
    "$\\\\text{AlCl}_3$ has an electron-deficient central aluminum atom with an incomplete octet, making it a Lewis acid, not a Lewis base."
  );
  add(
    "A substance that can act as a Lewis acid by expanding its valence shell octet is:",
    ["$\\\\text{SiF}_4$", "$\\\\text{CF}_4$", "$\\\\text{CH}_4$", "$\\\\text{NH}_4^+$"],
    0,
    "Silicon in $\\\\text{SiF}_4$ has vacant $3d$ orbitals and can expand its octet to accept electron pairs (e.g., forming $\\\\text{SiF}_6^{2-}$), acting as a Lewis acid."
  );
  add(
    "The conjugate base of a strong acid is:",
    ["A very weak base", "A strong base", "An amphoteric base", "A neutral molecule"],
    0,
    "According to the Brønsted-Lowry concept, the stronger an acid, the weaker its conjugate base ($K_a \\\\times K_b = K_w$)."
  );
  add(
    "Which of the following pairs is a conjugate acid-base pair?",
    ["$\\\\text{H}_2\\\\text{PO}_4^-$ and $\\\\text{HPO}_4^{2-}$", "$\\\\text{H}_3\\\\text{PO}_4$ and $\\\\text{PO}_4^{3-}$", "$\\\\text{H}_2\\\\text{SO}_4$ and $\\\\text{SO}_4^{2-}$", "$\\\\text{NH}_4^+$ and $\\\\text{NH}_2^-$"],
    0,
    "Conjugate acid-base pairs differ by exactly one proton ($\\\\text{H}^+$). $\\\\text{H}_2\\\\text{PO}_4^-$ and $\\\\text{HPO}_4^{2-}$ differ by one $\\\\text{H}^+$."
  );

  // Salt Hydrolysis - General concepts & Types of Salts
  add(
    "An aqueous solution of sodium chloride ($\\\\text{NaCl}$) is neutral because:",
    ["Neither $\\\\text{Na}^+$ nor $\\\\text{Cl}^-$ undergoes hydrolysis", "Both $\\\\text{Na}^+$ and $\\\\text{Cl}^-$ undergo equal hydrolysis", "$\\\\text{Na}^+$ undergoes cationic hydrolysis", "$\\\\text{Cl}^-$ undergoes anionic hydrolysis"],
    0,
    "$\\\\text{NaCl}$ is the salt of a strong acid ($\\\\text{HCl}$) and a strong base ($\\\\text{NaOH}$). Neither conjugate ion undergoes hydrolysis in water, giving $\\\\text{pH} = 7$."
  );
  add(
    "An aqueous solution of $\\\\text{CH}_3\\\\text{COONa}$ is alkaline because:",
    ["The acetate ion undergoes anionic hydrolysis", "The sodium ion undergoes cationic hydrolysis", "$\\\\text{NaOH}$ is formed as a precipitate", "Acetic acid is completely ionized"],
    0,
    "$\\\\text{CH}_3\\\\text{COO}^- + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COOH} + \\\\text{OH}^-$. Anionic hydrolysis produces excess $\\\\text{OH}^-$, making the solution alkaline."
  );
  add(
    "An aqueous solution of ammonium chloride ($\\\\text{NH}_4\\\\text{Cl}$) is acidic because of:",
    ["Cationic hydrolysis of $\\\\text{NH}_4^+$", "Anionic hydrolysis of $\\\\text{Cl}^-$", "Dissociation of $\\\\text{HCl}$", "Neutralization of $\\\\text{NH}_4\\\\text{OH}$"],
    0,
    "$\\\\text{NH}_4^+ + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons \\\\text{NH}_4\\\\text{OH} + \\\\text{H}^+$. Cationic hydrolysis releases $\\\\text{H}^+$, making the solution acidic ($\\\\text{pH} < 7$)."
  );
  add(
    "The hydrolysis constant $K_h$ for a salt of a weak acid and a strong base is given by:",
    ["$K_h = \\\\frac{K_w}{K_a}$", "$K_h = \\\\frac{K_w}{K_b}$", "$K_h = \\\\frac{K_w}{K_a K_b}$", "$K_h = K_w \\\\times K_a$"],
    0,
    "For weak acid + strong base (e.g. $\\\\text{CH}_3\\\\text{COONa}$), $A^- + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons HA + \\\\text{OH}^-$, so $K_h = \\\\frac{[HA][\\\\text{OH}^-]}{[A^-]} = \\\\frac{K_w}{K_a}$."
  );
  add(
    "The hydrolysis constant $K_h$ for a salt of a strong acid and a weak base is given by:",
    ["$K_h = \\\\frac{K_w}{K_b}$", "$K_h = \\\\frac{K_w}{K_a}$", "$K_h = \\\\frac{K_w}{K_a K_b}$", "$K_h = \\\\frac{K_a}{K_w}$"],
    0,
    "For strong acid + weak base (e.g. $\\\\text{NH}_4\\\\text{Cl}$), $B^+ + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons BOH + \\\\text{H}^+$, so $K_h = \\\\frac{K_w}{K_b}$."
  );
  add(
    "The hydrolysis constant $K_h$ for a salt of a weak acid and a weak base is given by:",
    ["$K_h = \\\\frac{K_w}{K_a K_b}$", "$K_h = \\\\frac{K_w K_a}{K_b}$", "$K_h = \\\\frac{K_w}{K_a}$", "$K_h = \\\\frac{K_a K_b}{K_w}$"],
    0,
    "For weak acid + weak base (e.g. $\\\\text{CH}_3\\\\text{COONH}_4$), both cation and anion hydrolyze: $K_h = \\\\frac{K_w}{K_a K_b}$."
  );
  add(
    "The degree of hydrolysis $h$ for a salt of a weak acid and a strong base ($h \\\\ll 1$) is:",
    ["$h = \\\\sqrt{\\\\frac{K_w}{K_a C}}$", "$h = \\\\sqrt{\\\\frac{K_w C}{K_a}}$", "$h = \\\\sqrt{\\\\frac{K_w}{K_b C}}$", "$h = \\\\sqrt{\\\\frac{K_w}{K_a K_b}}$"],
    0,
    "$K_h = C h^2 \\\\implies h = \\\\sqrt{K_h / C} = \\\\sqrt{\\\\frac{K_w}{K_a C}}$."
  );
  add(
    "The degree of hydrolysis $h$ for a salt of a weak acid and a weak base:",
    ["Is independent of the salt concentration", "Is directly proportional to $\\\\sqrt{C}$", "Is inversely proportional to $\\\\sqrt{C}$", "Is inversely proportional to $C$"],
    0,
    "For weak acid + weak base, $K_h = \\\\frac{h^2}{(1 - h)^2} \\\\implies h \\\\approx \\\\sqrt{K_h} = \\\\sqrt{\\\\frac{K_w}{K_a K_b}}$, which is independent of the salt concentration $C$."
  );
  add(
    "The pH of an aqueous solution of a salt of a weak acid and a strong base is given by:",
    ["$\\\\text{pH} = 7 + \\\\frac{1}{2}\\\\text{p}K_a + \\\\frac{1}{2}\\\\log C$", "$\\\\text{pH} = 7 - \\\\frac{1}{2}\\\\text{p}K_a - \\\\frac{1}{2}\\\\log C$", "$\\\\text{pH} = 7 - \\\\frac{1}{2}\\\\text{p}K_b - \\\\frac{1}{2}\\\\log C$", "$\\\\text{pH} = 7 + \\\\frac{1}{2}\\\\text{p}K_b + \\\\frac{1}{2}\\\\log C$"],
    0,
    "For weak acid + strong base, $[\\\\text{OH}^-] = \\\\sqrt{K_h C} = \\\\sqrt{\\\\frac{K_w C}{K_a}}$, which yields $\\\\text{pH} = 7 + \\\\frac{1}{2}\\\\text{p}K_a + \\\\frac{1}{2}\\\\log C$."
  );
  add(
    "The pH of an aqueous solution of a salt of a strong acid and a weak base is given by:",
    ["$\\\\text{pH} = 7 - \\\\frac{1}{2}\\\\text{p}K_b - \\\\frac{1}{2}\\\\log C$", "$\\\\text{pH} = 7 + \\\\frac{1}{2}\\\\text{p}K_b + \\\\frac{1}{2}\\\\log C$", "$\\\\text{pH} = 7 - \\\\frac{1}{2}\\\\text{p}K_a - \\\\frac{1}{2}\\\\log C$", "$\\\\text{pH} = 7 + \\\\frac{1}{2}\\\\text{p}K_a + \\\\frac{1}{2}\\\\log C$"],
    0,
    "For strong acid + weak base, $[\\\\text{H}^+] = \\\\sqrt{K_h C} = \\\\sqrt{\\\\frac{K_w C}{K_b}}$, which yields $\\\\text{pH} = 7 - \\\\frac{1}{2}\\\\text{p}K_b - \\\\frac{1}{2}\\\\log C$."
  );
  add(
    "The pH of an aqueous solution of a salt of a weak acid and a weak base is given by:",
    ["$\\\\text{pH} = 7 + \\\\frac{1}{2}\\\\text{p}K_a - \\\\frac{1}{2}\\\\text{p}K_b$", "$\\\\text{pH} = 7 - \\\\frac{1}{2}\\\\text{p}K_a + \\\\frac{1}{2}\\\\text{p}K_b$", "$\\\\text{pH} = 7 + \\\\frac{1}{2}\\\\text{p}K_a + \\\\frac{1}{2}\\\\text{p}K_b$", "$\\\\text{pH} = 7 - \\\\frac{1}{2}\\\\text{p}K_a - \\\\frac{1}{2}\\\\text{p}K_b$"],
    0,
    "For weak acid + weak base, $[\\\\text{H}^+] = \\\\sqrt{\\\\frac{K_w K_a}{K_b}}$, so $\\\\text{pH} = 7 + \\\\frac{1}{2}\\\\text{p}K_a - \\\\frac{1}{2}\\\\text{p}K_b$, which is concentration-independent."
  );
  add(
    "If for a salt of a weak acid and a weak base, $\\\\text{p}K_a = \\\\text{p}K_b$, the aqueous solution will be:",
    ["Neutral ($\\\\text{pH} = 7$)", "Acidic ($\\\\text{pH} < 7$)", "Basic ($\\\\text{pH} > 7$)", "Strongly alkaline"],
    0,
    "When $\\\\text{p}K_a = \\\\text{p}K_b$, $\\\\text{pH} = 7 + \\\\frac{1}{2}(\\\\text{p}K_a - \\\\text{p}K_b) = 7.0$ (neutral)."
  );
  add(
    "For ammonium acetate ($\\\\text{CH}_3\\\\text{COONH}_4$), $\\\\text{p}K_a$ of $\\\\text{CH}_3\\\\text{COOH}$ is $4.76$ and $\\\\text{p}K_b$ of $\\\\text{NH}_4\\\\text{OH}$ is $4.76$. The pH of $0.1\\\\text{ M CH}_3\\\\text{COONH}_4$ solution at $25^\\\\circ\\\\text{C}$ is:",
    ["$7.00$", "$6.76$", "$7.24$", "$8.00$"],
    0,
    "$\\\\text{pH} = 7 + \\\\frac{1}{2}(4.76 - 4.76) = 7.00$."
  );
  add(
    "What is the pH of a $0.1\\\\text{ M}$ sodium acetate ($\\\\text{CH}_3\\\\text{COONa}$) solution? ($\\\\text{p}K_a \\\\text{ of CH}_3\\\\text{COOH} = 4.74$)",
    ["$8.87$", "$9.24$", "$5.13$", "$7.00$"],
    0,
    "$\\\\text{pH} = 7 + \\\\frac{1}{2}\\\\text{p}K_a + \\\\frac{1}{2}\\\\log C = 7 + \\\\frac{4.74}{2} + \\\\frac{\\\\log(0.1)}{2} = 7 + 2.37 - 0.50 = 8.87$."
  );
  add(
    "What is the pH of a $0.1\\\\text{ M}$ ammonium chloride ($\\\\text{NH}_4\\\\text{Cl}$) solution? ($\\\\text{p}K_b \\\\text{ of NH}_4\\\\text{OH} = 4.74$)",
    ["$5.13$", "$8.87$", "$4.74$", "$6.00$"],
    0,
    "$\\\\text{pH} = 7 - \\\\frac{1}{2}\\\\text{p}K_b - \\\\frac{1}{2}\\\\log C = 7 - 2.37 - \\\\frac{-1}{2} = 7 - 2.37 + 0.50 = 5.13$."
  );
  add(
    "Which of the following salts undergoes cationic hydrolysis?",
    ["$\\\\text{FeCl}_3$", "$\\\\text{Na}_2\\\\text{CO}_3$", "$\\\\text{KCN}$", "$\\\\text{Na}_2\\\\text{SO}_4$"],
    0,
    "$\\\\text{FeCl}_3$ is a salt of weak base $\\\\text{Fe(OH)}_3$ and strong acid $\\\\text{HCl}$. The cation $\\\\text{Fe}^{3+}$ hydrolyzes: $\\\\text{Fe}^{3+} + 3\\\\text{H}_2\\\\text{O} \\\\rightleftharpoons \\\\text{Fe(OH)}_3 + 3\\\\text{H}^+$."
  );
  add(
    "Which of the following salts undergoes anionic hydrolysis?",
    ["$\\\\text{KCN}$", "$\\\\text{CuSO}_4$", "$\\\\text{AlCl}_3$", "$\\\\text{KNO}_3$"],
    0,
    "$\\\\text{KCN}$ is derived from strong base $\\\\text{KOH}$ and weak acid $\\\\text{HCN}$. The anion $\\\\text{CN}^-$ undergoes anionic hydrolysis: $\\\\text{CN}^- + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons \\\\text{HCN} + \\\\text{OH}^-$."
  );
  add(
    "The hydrolysis constant of $0.1\\\\text{ M KNO}_2$ is $2.5 \\\\times 10^{-11}$. The degree of hydrolysis $h$ is:",
    ["$1.58 \\\\times 10^{-5}$", "$2.5 \\\\times 10^{-10}$", "$5.0 \\\\times 10^{-6}$", "$2.5 \\\\times 10^{-6}$"],
    0,
    "$h = \\\\sqrt{\\\\frac{K_h}{C}} = \\\\sqrt{\\\\frac{2.5 \\\\times 10^{-11}}{0.1}} = \\\\sqrt{2.5 \\\\times 10^{-10}} \\\\approx 1.58 \\\\times 10^{-5}$."
  );
  add(
    "On dilution of a salt of weak acid and strong base, the degree of hydrolysis:",
    ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
    0,
    "Since $h = \\\\sqrt{K_h / C}$, as the solution is diluted, $C$ decreases, which increases the degree of hydrolysis $h$."
  );
  add(
    "On increasing the temperature, the degree of hydrolysis of a salt generally:",
    ["Increases because hydrolysis is an endothermic process", "Decreases because hydrolysis is exothermic", "Remains unchanged", "First decreases then increases"],
    0,
    "Hydrolysis is the reverse of neutralization (which is exothermic). Hence, hydrolysis is endothermic ($\\\\Delta H > 0$), and its extent increases with temperature."
  );
  add(
    "For ammonium cyanide ($\\\\text{NH}_4\\\\text{CN}$), given $\\\\text{p}K_a(\\\\text{HCN}) = 9.30$ and $\\\\text{p}K_b(\\\\text{NH}_4\\\\text{OH}) = 4.74$, the solution is:",
    ["Basic with $\\\\text{pH} = 9.28$", "Acidic with $\\\\text{pH} = 4.72$", "Neutral with $\\\\text{pH} = 7.00$", "Basic with $\\\\text{pH} = 11.5$"],
    0,
    "$\\\\text{pH} = 7 + \\\\frac{1}{2}(9.30 - 4.74) = 7 + \\\\frac{4.56}{2} = 7 + 2.28 = 9.28$ (basic)."
  );
  add(
    "Which of the following salts will produce an acidic aqueous solution?",
    ["$\\\\text{CuSO}_4$", "$\\\\text{Na}_2\\\\text{CO}_3$", "$\\\\text{CH}_3\\\\text{COONa}$", "$\\\\text{KCl}$"],
    0,
    "$\\\\text{CuSO}_4$ is a salt of weak base $\\\\text{Cu(OH)}_2$ and strong acid $\\\\text{H}_2\\\\text{SO}_4$. Cationic hydrolysis makes it acidic ($\\\\text{pH} < 7$)."
  );
  add(
    "Which of the following salts will produce a basic aqueous solution?",
    ["$\\\\text{Na}_2\\\\text{CO}_3$", "$\\\\text{NH}_4\\\\text{NO}_3$", "$\\\\text{Al}_2(\\\\text{SO}_4)_3$", "$\\\\text{NaCl}$"],
    0,
    "$\\\\text{Na}_2\\\\text{CO}_3$ is the salt of a strong base ($\\\\text{NaOH}$) and a weak diprotic acid ($\\\\text{H}_2\\\\text{CO}_3$). Anionic hydrolysis makes the solution basic."
  );
  add(
    "The conjugate acid of $\\\\text{HPO}_4^{2-}$ is:",
    ["$\\\\text{H}_2\\\\text{PO}_4^-$", "$\\\\text{PO}_4^{3-}$", "$\\\\text{H}_3\\\\text{PO}_4$", "$\\\\text{P}_2\\\\text{O}_7^{4-}$"],
    0,
    "Adding one proton ($\\\\text{H}^+$) to $\\\\text{HPO}_4^{2-}$ gives its conjugate acid, $\\\\text{H}_2\\\\text{PO}_4^-$."
  );
  add(
    "The conjugate base of $\\\\text{HPO}_4^{2-}$ is:",
    ["$\\\\text{PO}_4^{3-}$", "$\\\\text{H}_2\\\\text{PO}_4^-$", "$\\\\text{H}_3\\\\text{PO}_4$", "$\\\\text{H}_2\\\\text{PO}_3^-$"],
    0,
    "Removing one proton ($\\\\text{H}^+$) from $\\\\text{HPO}_4^{2-}$ yields its conjugate base, $\\\\text{PO}_4^{3-}$."
  );
  add(
    "Which of the following is NOT an amphiprotic substance?",
    ["$\\\\text{SO}_4^{2-}$", "$\\\\text{HCO}_3^-$", "$\\\\text{H}_2\\\\text{O}$", "$\\\\text{HS}^-$"],
    0,
    "$\\\\text{SO}_4^{2-}$ has no protons to donate, so it cannot act as a Brønsted acid. It can only act as a base (accepting a proton to form $\\\\text{HSO}_4^-$)."
  );
  add(
    "Which of the following compounds acts as a Lewis base?",
    ["$\\\\text{C}_2\\\\text{H}_5\\\\text{OH}$", "$\\\\text{BCl}_3$", "$\\\\text{SnCl}_4$", "$\\\\text{Fe}^{3+}$"],
    0,
    "Ethanol ($\\\\text{C}_2\\\\text{H}_5\\\\text{OH}$) possesses unshared lone pairs on the oxygen atom that can be donated to electron-deficient species, acting as a Lewis base."
  );
  add(
    "What is the degree of hydrolysis of $0.01\\\\text{ M CH}_3\\\\text{COONa}$ if $K_a = 10^{-5}$ and $K_w = 10^{-14}$?",
    ["$10^{-3.5} \\\\approx 3.16 \\\\times 10^{-4}$", "$10^{-4}$", "$10^{-2}$", "$10^{-5}$"],
    0,
    "$K_h = K_w / K_a = 10^{-14} / 10^{-5} = 10^{-9}$. $h = \\\\sqrt{K_h / C} = \\\\sqrt{10^{-9} / 10^{-2}} = \\\\sqrt{10^{-7}} = 10^{-3.5} \\\\approx 3.16 \\\\times 10^{-4}$."
  );
  add(
    "A salt $AB$ is formed from weak acid $HA$ ($K_a = 10^{-6}$) and weak base $BOH$ ($K_b = 10^{-6}$). Its aqueous solution is:",
    ["Neutral ($\\\\text{pH} = 7$)", "Acidic ($\\\\text{pH} = 6$)", "Basic ($\\\\text{pH} = 8$)", "Cannot be predicted"],
    0,
    "Since $\\\\text{p}K_a = 6$ and $\\\\text{p}K_b = 6$, $\\\\text{pH} = 7 + \\\\frac{1}{2}(\\\\text{p}K_a - \\\\text{p}K_b) = 7 + \\\\frac{1}{2}(6 - 6) = 7$ (neutral)."
  );
  add(
    "If $\\\\text{p}K_a < \\\\text{p}K_b$ for a salt of a weak acid and a weak base, its aqueous solution is:",
    ["Acidic ($\\\\text{pH} < 7$)", "Basic ($\\\\text{pH} > 7$)", "Neutral ($\\\\text{pH} = 7$)", "Strongly alkaline"],
    0,
    "$\\\\text{pH} = 7 + \\\\frac{1}{2}(\\\\text{p}K_a - \\\\text{p}K_b)$. When $\\\\text{p}K_a < \\\\text{p}K_b$, the term is negative, so $\\\\text{pH} < 7$ (acidic)."
  );
  add(
    "If $\\\\text{p}K_a > \\\\text{p}K_b$ for a salt of a weak acid and a weak base, its aqueous solution is:",
    ["Basic ($\\\\text{pH} > 7$)", "Acidic ($\\\\text{pH} < 7$)", "Neutral ($\\\\text{pH} = 7$)", "Non-electrolytic"],
    0,
    "When $\\\\text{p}K_a > \\\\text{p}K_b$, $\\\\text{pH} = 7 + \\\\frac{1}{2}(\\\\text{p}K_a - \\\\text{p}K_b) > 7$ (basic)."
  );
  add(
    "Which of the following ions is the strongest conjugate base?",
    ["$\\\\text{F}^-$", "$\\\\text{Cl}^-$", "$\\\\text{Br}^-$", "$\\\\text{I}^-$"],
    0,
    "$\\\\text{HF}$ is the weakest acid among the hydrogen halides ($\\\\text{HF} < \\\\text{HCl} < \\\\text{HBr} < \\\\text{HI}$). Hence, $\\\\text{F}^-$ is the strongest conjugate base."
  );
  add(
    "Which of the following is the conjugate acid of water ($\\\\text{H}_2\\\\text{O}$)?",
    ["$\\\\text{H}_3\\\\text{O}^+$", "$\\\\text{OH}^-$", "$\\\\text{O}^{2-}$", "$\\\\text{H}^+$"],
    0,
    "Adding one proton to water ($\\\\text{H}_2\\\\text{O} + \\\\text{H}^+$) gives the hydronium ion, $\\\\text{H}_3\\\\text{O}^+$."
  );
  add(
    "Which of the following salts will NOT undergo hydrolysis in water?",
    ["$\\\\text{K}_2\\\\text{SO}_4$", "$\\\\text{Na}_2\\\\text{S}$", "$\\\\text{NH}_4\\\\text{Br}$", "$\\\\text{CH}_3\\\\text{COOK}$"],
    0,
    "$\\\\text{K}_2\\\\text{SO}_4$ is formed from a strong base ($\\\\text{KOH}$) and a strong acid ($\\\\text{H}_2\\\\text{SO}_4$); neither conjugate ion undergoes hydrolysis."
  );
  add(
    "What is the percentage hydrolysis of $0.1\\\\text{ M NaCN}$ if $K_a(\\\\text{HCN}) = 4.0 \\\\times 10^{-10}$ and $K_w = 1.0 \\\\times 10^{-14}$?",
    ["1.58%", "0.158%", "0.0158%", "15.8%"],
    0,
    "$K_h = \\\\frac{10^{-14}}{4 \\\\times 10^{-10}} = 2.5 \\\\times 10^{-5}$. $h = \\\\sqrt{\\\\frac{K_h}{C}} = \\\\sqrt{\\\\frac{2.5 \\\\times 10^{-5}}{0.1}} = \\\\sqrt{2.5 \\\\times 10^{-4}} = 1.58 \\\\times 10^{-2}$. As percentage, the degree of hydrolysis is 1.58%."
  );
  add(
    "In the reaction $\\\\text{B(OH)}_3 + 2\\\\text{H}_2\\\\text{O} \\\\rightleftharpoons [\\\\text{B(OH)}_4]^- + \\\\text{H}_3\\\\text{O}^+$, boric acid acts as:",
    ["A Lewis acid", "A Brønsted acid", "A Brønsted base", "A Lewis base"],
    0,
    "Boric acid $\\\\text{B(OH)}_3$ does not donate a proton of its own; instead, it accepts an electron pair from $\\\\text{OH}^-$ of water, acting as a monobasic Lewis acid."
  );
  add(
    "Which of the following salts has the highest degree of hydrolysis in a $0.1\\\\text{ M}$ solution?",
    ["$\\\\text{CH}_3\\\\text{COONa}$", "$\\\\text{HCOONa}$", "$\\\\text{NaCN}$", "$\\\\text{NaCl}$"],
    0,
    "Degree of hydrolysis $h = \\\\sqrt{K_w / (K_a C)}$. Smaller $K_a$ implies larger $h$. Since $\\\\text{HCN}$ is the weakest acid ($K_a \\\\approx 10^{-10}$), $\\\\text{NaCN}$ has the highest degree of hydrolysis."
  );
  add(
    "Which of the following aqueous salt solutions will turn blue litmus red?",
    ["$\\\\text{FeSO}_4$", "$\\\\text{Na}_2\\\\text{CO}_3$", "$\\\\text{KCN}$", "$\\\\text{CH}_3\\\\text{COOK}$"],
    0,
    "$\\\\text{FeSO}_4$ is the salt of a weak base ($\\\\text{Fe(OH)}_2$) and strong acid ($\\\\text{H}_2\\\\text{SO}_4$). Its solution is acidic ($\\\\text{pH} < 7$), turning blue litmus red."
  );
  add(
    "Which of the following aqueous salt solutions will turn phenolphthalein pink?",
    ["$\\\\text{K}_2\\\\text{CO}_3$", "$\\\\text{NH}_4\\\\text{Cl}$", "$\\\\text{CuSO}_4$", "$\\\\text{NaCl}$"],
    0,
    "$\\\\text{K}_2\\\\text{CO}_3$ is basic due to anionic hydrolysis of carbonate ions, producing $\\\\text{OH}^-$ ($\\\\text{pH} > 8.3$), which turns phenolphthalein pink."
  );
  add(
    "The conjugate base of $\\\\text{H}_2\\\\text{O}$ is:",
    ["$\\\\text{OH}^-$", "$\\\\text{H}_3\\\\text{O}^+$", "$\\\\text{O}^{2-}$", "$\\\\text{H}_2$"],
    0,
    "Removing a proton from water yields hydroxide ion, $\\\\text{OH}^-$."
  );
  add(
    "Which of the following behaves as both a Lewis base and a Brønsted base?",
    ["$\\\\text{NH}_3$", "$\\\\text{BF}_3$", "$\\\\text{AlCl}_3$", "$\\\\text{CO}_2$"],
    0,
    "$\\\\text{NH}_3$ donates a lone pair (Lewis base) and accepts a proton (Brønsted base)."
  );
  add(
    "Which oxide is amphoteric in nature?",
    ["$\\\\text{Al}_2\\\\text{O}_3$", "$\\\\text{Na}_2\\\\text{O}$", "$\\\\text{SO}_3$", "$\\\\text{CaO}$"],
    0,
    "$\\\\text{Al}_2\\\\text{O}_3$ reacts with both acids and bases (e.g., forming aluminates with $\\\\text{NaOH}$ and salts with $\\\\text{HCl}$), so it is amphoteric."
  );
  add(
    "Which of the following represents the correct expression for the ionic product of water ($K_w$)?",
    ["$K_w = [\\\\text{H}^+][\\\\text{OH}^-]$", "$K_w = \\\\frac{[\\\\text{H}^+][\\\\text{OH}^-]}{[\\\\text{H}_2\\\\text{O}]}$", "$K_w = [\\\\text{H}^+] + [\\\\text{OH}^-]$", "$K_w = [\\\\text{H}^+] / [\\\\text{OH}^-]$"],
    0,
    "By definition, the ionic product of water is $K_w = [\\\\text{H}^+][\\\\text{OH}^-]$."
  );
  add(
    "What is the value of $\\\\text{p}K_w$ at $25^\\\\circ\\\\text{C}$?",
    ["$14.0$", "$7.0$", "$1.0$", "$10^{-14}$"],
    0,
    "At $25^\\\\circ\\\\text{C}$, $K_w = 1.0 \\\\times 10^{-14}$, so $\\\\text{p}K_w = -\\\\log(10^{-14}) = 14.0$."
  );
  add(
    "If a salt $XY$ undergoes 1% hydrolysis in $0.1\\\\text{ M}$ solution, what is its hydrolysis constant $K_h$?",
    ["$1.0 \\\\times 10^{-5}$", "$1.0 \\\\times 10^{-4}$", "$1.0 \\\\times 10^{-3}$", "$1.0 \\\\times 10^{-6}$"],
    0,
    "$h = 0.01$. $K_h = C h^2 = (0.1)(0.01)^2 = 0.1 \\\\times 10^{-4} = 1.0 \\\\times 10^{-5}$."
  );
  add(
    "Hydrolysis is best described as the:",
    ["Interaction of ions of a salt with water to produce acidity or basicity", "Dissociation of an electrolyte into ions", "Complete neutralization of acid by base", "Precipitation of an insoluble salt"],
    0,
    "Hydrolysis is the chemical reaction between ions of a dissolved salt and water molecules, altering the $[\\\\text{H}^+]/[\\\\text{OH}^-]$ balance."
  );
  add(
    "Which of the following has the strongest conjugate acid?",
    ["$\\\\text{CH}_3\\\\text{COO}^-$", "$\\\\text{Cl}^-$", "$\\\\text{Br}^-$", "$\\\\text{ClO}_4^-$"],
    0,
    "$\\\\text{CH}_3\\\\text{COO}^-$ is the strongest base among the given choices, so its conjugate acid $\\\\text{CH}_3\\\\text{COOH}$ has the highest $\\\\text{p}K_a$ (weakest acid, hence most stable conjugate acid, whereas $\\\\text{HCl}, \\\\text{HBr}, \\\\text{HClO}_4$ are extremely strong acids)."
  );

  return q.slice(0, 47);
}

function getBufferSolutionsQuestions() {
  const q = [];
  const add = (question, options, correctIndex, explanation) => {
    q.push({ question, options, correctIndex, explanation });
  };

  // Buffer solutions (47 questions)
  add(
    "A buffer solution is defined as a solution which:",
    ["Resists changes in pH upon addition of small amounts of acid, base, or on dilution", "Has a constant pH of exactly 7.0", "Contains equal concentrations of $\\\\text{H}^+$ and $\\\\text{OH}^-$", "Cannot be neutralized by any acid or base"],
    0,
    "A buffer solution resists changes in pH when small amounts of an acid or a base are added or when the solution is diluted."
  );
  add(
    "Which of the following mixtures forms an acidic buffer solution?",
    ["$\\\\text{CH}_3\\\\text{COOH} + \\\\text{CH}_3\\\\text{COONa}$", "$\\\\text{HCl} + \\\\text{NaCl}$", "$\\\\text{NH}_4\\\\text{OH} + \\\\text{NH}_4\\\\text{Cl}$", "$\\\\text{NaOH} + \\\\text{NaCl}$"],
    0,
    "An acidic buffer consists of a weak acid and its salt with a strong base, such as $\\\\text{CH}_3\\\\text{COOH} + \\\\text{CH}_3\\\\text{COONa}$."
  );
  add(
    "Which of the following mixtures forms a basic buffer solution?",
    ["$\\\\text{NH}_4\\\\text{OH} + \\\\text{NH}_4\\\\text{Cl}$", "$\\\\text{CH}_3\\\\text{COOH} + \\\\text{CH}_3\\\\text{COONa}$", "$\\\\text{HCN} + \\\\text{NaCN}$", "$\\\\text{HNO}_3 + \\\\text{KNO}_3$"],
    0,
    "A basic buffer consists of a weak base and its salt with a strong acid, such as $\\\\text{NH}_4\\\\text{OH} + \\\\text{NH}_4\\\\text{Cl}$."
  );
  add(
    "The Henderson-Hasselbalch equation for an acidic buffer is:",
    ["$\\\\text{pH} = \\\\text{p}K_a + \\\\log\\\\left(\\\\frac{[\\\\text{Salt}]}{[\\\\text{Acid}]}\\\\right)$", "$\\\\text{pH} = \\\\text{p}K_a - \\\\log\\\\left(\\\\frac{[\\\\text{Salt}]}{[\\\\text{Acid}]}\\\\right)$", "$\\\\text{pOH} = \\\\text{p}K_a + \\\\log\\\\left(\\\\frac{[\\\\text{Acid}]}{[\\\\text{Salt}]}\\\\right)$", "$\\\\text{pH} = \\\\text{p}K_b + \\\\log\\\\left(\\\\frac{[\\\\text{Salt}]}{[\\\\text{Base}]}\\\\right)$"],
    0,
    "By the Henderson-Hasselbalch relationship, $\\\\text{pH} = \\\\text{p}K_a + \\\\log\\\\left(\\\\frac{[\\\\text{Salt}]}{[\\\\text{Acid}]}\\\\right)$."
  );
  add(
    "The Henderson-Hasselbalch equation for a basic buffer is:",
    ["$\\\\text{pOH} = \\\\text{p}K_b + \\\\log\\\\left(\\\\frac{[\\\\text{Salt}]}{[\\\\text{Base}]}\\\\right)$", "$\\\\text{pH} = \\\\text{p}K_b + \\\\log\\\\left(\\\\frac{[\\\\text{Salt}]}{[\\\\text{Base}]}\\\\right)$", "$\\\\text{pOH} = \\\\text{p}K_a + \\\\log\\\\left(\\\\frac{[\\\\text{Base}]}{[\\\\text{Salt}]}\\\\right)$", "$\\\\text{pOH} = \\\\text{p}K_b - \\\\log\\\\left(\\\\frac{[\\\\text{Salt}]}{[\\\\text{Base}]}\\\\right)$"],
    0,
    "For a basic buffer, $\\\\text{pOH} = \\\\text{p}K_b + \\\\log\\\\left(\\\\frac{[\\\\text{Salt}]}{[\\\\text{Base}]}\\\\right)$ and $\\\\text{pH} = 14 - \\\\text{pOH}$."
  );
  add(
    "When is the buffer capacity of an acidic buffer maximum?",
    ["When $[\\\\text{Salt}] = [\\\\text{Acid}]$ ($\\\\text{pH} = \\\\text{p}K_a$)", "When $[\\\\text{Salt}] \\\\gg [\\\\text{Acid}]$", "When $[\\\\text{Acid}] \\\\gg [\\\\text{Salt}]$", "When $\\\\text{pH} = 7.0$"],
    0,
    "Maximum buffer capacity occurs when the concentrations of the weak acid and its conjugate base are equal ($[\\\\text{Salt}] = [\\\\text{Acid}]$), giving $\\\\text{pH} = \\\\text{p}K_a$."
  );
  add(
    "The effective buffer range for an acid-base buffer system is generally:",
    ["$\\\\text{p}K_a \\\\pm 1$", "$\\\\text{p}K_a \\\\pm 2$", "$\\\\text{p}K_a \\\\pm 0.1$", "$7.0 \\\\pm 1$"],
    0,
    "A buffer functions effectively when the ratio $[\\\\text{Salt}]/[\\\\text{Acid}]$ lies between $0.1$ and $10$, which corresponds to $\\\\text{pH} = \\\\text{p}K_a \\\\pm 1$."
  );
  add(
    "What is the pH of a solution containing $0.1\\\\text{ M CH}_3\\\\text{COOH}$ and $0.1\\\\text{ M CH}_3\\\\text{COONa}$? ($\\\\text{p}K_a \\\\text{ of CH}_3\\\\text{COOH} = 4.74$)",
    ["$4.74$", "$5.74$", "$3.74$", "$7.00$"],
    0,
    "$\\\\text{pH} = \\\\text{p}K_a + \\\\log(0.1 / 0.1) = 4.74 + \\\\log 1 = 4.74$."
  );
  add(
    "What is the pH of a buffer solution containing $0.01\\\\text{ M CH}_3\\\\text{COOH}$ and $0.1\\\\text{ M CH}_3\\\\text{COONa}$? ($\\\\text{p}K_a = 4.74$)",
    ["$5.74$", "$3.74$", "$4.74$", "$6.74$"],
    0,
    "$\\\\text{pH} = 4.74 + \\\\log(0.1 / 0.01) = 4.74 + \\\\log 10 = 4.74 + 1.0 = 5.74$."
  );
  add(
    "What is the pH of a buffer solution containing $0.1\\\\text{ M CH}_3\\\\text{COOH}$ and $0.01\\\\text{ M CH}_3\\\\text{COONa}$? ($\\\\text{p}K_a = 4.74$)",
    ["$3.74$", "$5.74$", "$4.74$", "$2.74$"],
    0,
    "$\\\\text{pH} = 4.74 + \\\\log(0.01 / 0.1) = 4.74 + \\\\log(0.1) = 4.74 - 1.0 = 3.74$."
  );
  add(
    "What is the pH of a solution containing $0.1\\\\text{ M NH}_4\\\\text{OH}$ and $0.1\\\\text{ M NH}_4\\\\text{Cl}$? ($\\\\text{p}K_b \\\\text{ of NH}_4\\\\text{OH} = 4.74$)",
    ["$9.26$", "$4.74$", "$7.00$", "$8.26$"],
    0,
    "$\\\\text{pOH} = \\\\text{p}K_b + \\\\log(0.1/0.1) = 4.74 \\\\implies \\\\text{pH} = 14 - 4.74 = 9.26$."
  );
  add(
    "Which of the following pairs can act as a buffer solution in human blood?",
    ["$\\\\text{H}_2\\\\text{CO}_3 / \\\\text{HCO}_3^-$", "$\\\\text{HCl} / \\\\text{NaCl}$", "$\\\\text{NaOH} / \\\\text{NaCl}$", "$\\\\text{HNO}_3 / \\\\text{NaNO}_3$"],
    0,
    "The primary physiological buffer system maintaining arterial blood pH around $7.4$ is the carbonic acid-bicarbonate buffer ($\\\\text{H}_2\\\\text{CO}_3 / \\\\text{HCO}_3^-$)."
  );
  add(
    "On diluting a buffer solution 10 times with pure water, its pH will:",
    ["Remain essentially unchanged", "Increase by 1 unit", "Decrease by 1 unit", "Change to exactly 7.0"],
    0,
    "In the Henderson-Hasselbalch equation, $\\\\text{pH} = \\\\text{p}K_a + \\\\log([\\\\text{Salt}]/[\\\\text{Acid}])$. Dilution changes both concentrations by the same factor, leaving the ratio unchanged."
  );
  add(
    "If $100\\\\text{ mL}$ of $0.1\\\\text{ M CH}_3\\\\text{COOH}$ is mixed with $50\\\\text{ mL}$ of $0.1\\\\text{ M NaOH}$, the resulting solution is:",
    ["An acidic buffer solution", "A basic buffer solution", "A neutral salt solution", "A solution of pure strong base"],
    0,
    "Moles of $\\\\text{CH}_3\\\\text{COOH} = 10$ mmol; moles of $\\\\text{NaOH} = 5$ mmol. Neutralization forms $5$ mmol $\\\\text{CH}_3\\\\text{COONa}$ leaving $5$ mmol unreacted $\\\\text{CH}_3\\\\text{COOH}$, creating an acidic buffer."
  );
  add(
    "In the mixture described above ($100\\\\text{ mL of } 0.1\\\\text{ M CH}_3\\\\text{COOH} + 50\\\\text{ mL of } 0.1\\\\text{ M NaOH}$), what is the pH? ($\\\\text{p}K_a = 4.74$)",
    ["$4.74$", "$5.04$", "$4.44$", "$7.00$"],
    0,
    "Since moles of salt ($5$ mmol) = moles of remaining weak acid ($5$ mmol), $\\\\text{pH} = \\\\text{p}K_a + \\\\log(1) = 4.74$."
  );
  add(
    "If $100\\\\text{ mL}$ of $0.1\\\\text{ M NH}_4\\\\text{OH}$ is mixed with $50\\\\text{ mL}$ of $0.1\\\\text{ M HCl}$, the resulting solution has pH: ($\\\\text{p}K_b = 4.74$)",
    ["$9.26$", "$4.74$", "$7.00$", "$8.26$"],
    0,
    "Moles of $\\\\text{NH}_4\\\\text{OH} = 10$ mmol, $\\\\text{HCl} = 5$ mmol. Remaining $\\\\text{NH}_4\\\\text{OH} = 5$ mmol, formed $\\\\text{NH}_4\\\\text{Cl} = 5$ mmol. $\\\\text{pOH} = \\\\text{p}K_b = 4.74 \\\\implies \\\\text{pH} = 14 - 4.74 = 9.26$."
  );
  add(
    "Buffer capacity ($\\\\beta$) is defined mathematically as:",
    ["$\\\\beta = \\\\frac{d b}{d(\\\\text{pH})}$", "$\\\\beta = \\\\frac{d(\\\\text{pH})}{d b}$", "$\\\\beta = \\\\text{pH} \\\\times [\\\\text{Salt}]$", "$\\\\beta = \\\\frac{[\\\\text{Salt}]}{[\\\\text{Acid}]}$"],
    0,
    "Buffer capacity is defined as the number of moles of strong acid or base required to change the pH of 1 liter of buffer solution by 1 unit: $\\\\beta = \\\\frac{db}{d(\\\\text{pH})}$."
  );
  add(
    "To prepare a buffer of $\\\\text{pH} = 5.04$ using $\\\\text{CH}_3\\\\text{COOH}$ ($\\\\text{p}K_a = 4.74$), the molar ratio $[\\\\text{Salt}]/[\\\\text{Acid}]$ must be: ($\\\\log 2 = 0.30$)",
    ["$2 : 1$", "$1 : 2$", "$1 : 1$", "$4 : 1$"],
    0,
    "$\\\\text{pH} - \\\\text{p}K_a = 5.04 - 4.74 = 0.30 = \\\\log 2 \\\\implies [\\\\text{Salt}]/[\\\\text{Acid}] = 2/1$."
  );
  add(
    "To prepare a buffer of $\\\\text{pH} = 4.44$ using $\\\\text{CH}_3\\\\text{COOH}$ ($\\\\text{p}K_a = 4.74$), the molar ratio $[\\\\text{Salt}]/[\\\\text{Acid}]$ must be: ($\\\\log 2 = 0.30$)",
    ["$1 : 2$", "$2 : 1$", "$1 : 1$", "$1 : 4$"],
    0,
    "$\\\\text{pH} - \\\\text{p}K_a = 4.44 - 4.74 = -0.30 = \\\\log(0.5) \\\\implies [\\\\text{Salt}]/[\\\\text{Acid}] = 1/2$."
  );
  add(
    "A solution contains $0.2\\\\text{ M HCOOH}$ and $0.2\\\\text{ M HCOONa}$. If $K_a(\\\\text{HCOOH}) = 1.8 \\\\times 10^{-4}$ ($\\\\text{p}K_a = 3.74$), the pH is:",
    ["$3.74$", "$4.74$", "$2.74$", "$7.00$"],
    0,
    "Since $[\\\\text{Salt}] = [\\\\text{Acid}] = 0.2\\\\text{ M}$, $\\\\text{pH} = \\\\text{p}K_a = 3.74$."
  );
  add(
    "Which of the following will NOT form a buffer solution when mixed in equimolar amounts?",
    ["$\\\\text{HNO}_3 + \\\\text{NaNO}_3$", "$\\\\text{CH}_3\\\\text{COOH} + \\\\text{CH}_3\\\\text{COONa}$", "$\\\\text{NH}_4\\\\text{OH} + \\\\text{NH}_4\\\\text{Cl}$", "$\\\\text{HCN} + \\\\text{NaCN}$"],
    0,
    "$\\\\text{HNO}_3$ is a strong acid; a mixture of a strong acid and its salt does not resist pH changes and is not a buffer."
  );
  add(
    "What is the pH of a solution formed by mixing $50\\\\text{ mL}$ of $0.2\\\\text{ M NH}_4\\\\text{Cl}$ and $50\\\\text{ mL}$ of $0.1\\\\text{ M NaOH}$? ($\\\\text{p}K_b(\\\\text{NH}_4\\\\text{OH}) = 4.74$)",
    ["$9.26$", "$4.74$", "$8.96$", "$9.56$"],
    0,
    "Moles of $\\\\text{NH}_4^+ = 10$ mmol, $\\\\text{OH}^- = 5$ mmol. Reaction produces $5$ mmol $\\\\text{NH}_4\\\\text{OH}$ and leaves $5$ mmol $\\\\text{NH}_4^+$. Equal concentrations yield $\\\\text{pOH} = \\\\text{p}K_b = 4.74 \\\\implies \\\\text{pH} = 9.26$."
  );
  add(
    "When a small amount of $\\\\text{HCl}$ is added to an acidic buffer of $\\\\text{CH}_3\\\\text{COOH} + \\\\text{CH}_3\\\\text{COONa}$, the added $\\\\text{H}^+$ ions are neutralized by:",
    ["$\\\\text{CH}_3\\\\text{COO}^-$ ions", "$\\\\text{CH}_3\\\\text{COOH}$ molecules", "$\\\\text{Na}^+$ ions", "$\\\\text{H}_2\\\\text{O}$ molecules"],
    0,
    "$\\\\text{H}^+ + \\\\text{CH}_3\\\\text{COO}^- \\\\rightarrow \\\\text{CH}_3\\\\text{COOH}$. The conjugate base acetate consumes the added proton."
  );
  add(
    "When a small amount of $\\\\text{NaOH}$ is added to an acidic buffer of $\\\\text{CH}_3\\\\text{COOH} + \\\\text{CH}_3\\\\text{COONa}$, the added $\\\\text{OH}^-$ ions are neutralized by:",
    ["$\\\\text{CH}_3\\\\text{COOH}$ molecules", "$\\\\text{CH}_3\\\\text{COO}^-$ ions", "$\\\\text{Na}^+$ ions", "$\\\\text{H}^+$ ions only"],
    0,
    "$\\\\text{OH}^- + \\\\text{CH}_3\\\\text{COOH} \\\\rightarrow \\\\text{CH}_3\\\\text{COO}^- + \\\\text{H}_2\\\\text{O}$. The undissociated weak acid neutralizes added hydroxide."
  );
  add(
    "A buffer solution of $\\\\text{pH} = 9.0$ is to be prepared using $\\\\text{NH}_4\\\\text{OH}$ and $\\\\text{NH}_4\\\\text{Cl}$. If $\\\\text{p}K_b = 4.74$, the ratio $[\\\\text{NH}_4\\\\text{Cl}]/[\\\\text{NH}_4\\\\text{OH}]$ should be:",
    ["$10^{0.26} \\\\approx 1.82$", "$10^{-0.26} \\\\approx 0.55$", "$1.0$", "$10$"],
    0,
    "$\\\\text{pH} = 9 \\\\implies \\\\text{pOH} = 5.0$. $\\\\text{pOH} = \\\\text{p}K_b + \\\\log([\\\\text{Salt}]/[\\\\text{Base}]) \\\\implies 5.0 - 4.74 = 0.26 = \\\\log([\\\\text{Salt}]/[\\\\text{Base}]) \\\\implies \\\\text{ratio} = 10^{0.26} \\\\approx 1.82$."
  );
  add(
    "Which of the following salts can act as a simple buffer in aqueous solution?",
    ["$\\\\text{CH}_3\\\\text{COONH}_4$", "$\\\\text{NaCl}$", "$\\\\text{Na}_2\\\\text{SO}_4$", "$\\\\text{KNO}_3$"],
    0,
    "$\\\\text{CH}_3\\\\text{COONH}_4$ is a salt of a weak acid and a weak base; it resists pH changes upon addition of small amounts of acid or base, acting as a single-salt (simple) buffer."
  );
  add(
    "What happens to the pH of a buffer solution when its temperature is increased?",
    ["It changes slightly because the ionization constants ($K_a, K_b, K_w$) are temperature dependent", "It remains absolutely constant", "It drops to zero", "It increases to 14"],
    0,
    "Since equilibrium dissociation constants depend on temperature, the pH of buffer solutions exhibits a slight temperature dependence."
  );
  add(
    "Which of the following mixtures will produce a buffer solution?",
    ["$100\\\\text{ mL of } 0.1\\\\text{ M CH}_3\\\\text{COOH} + 50\\\\text{ mL of } 0.1\\\\text{ M NaOH}$", "$100\\\\text{ mL of } 0.1\\\\text{ M CH}_3\\\\text{COOH} + 100\\\\text{ mL of } 0.1\\\\text{ M NaOH}$", "$50\\\\text{ mL of } 0.1\\\\text{ M CH}_3\\\\text{COOH} + 100\\\\text{ mL of } 0.1\\\\text{ M NaOH}$", "$100\\\\text{ mL of } 0.1\\\\text{ M HCl} + 100\\\\text{ mL of } 0.1\\\\text{ M NaCl}$"],
    0,
    "In the first mixture, $\\\\text{CH}_3\\\\text{COOH}$ is in excess ($10$ mmol vs $5$ mmol $\\\\text{NaOH}$), leaving a mixture of weak acid and its conjugate base."
  );
  add(
    "The pH of a buffer solution prepared by mixing $25\\\\text{ mL}$ of $0.2\\\\text{ M HCOOH}$ and $25\\\\text{ mL}$ of $0.1\\\\text{ M HCOOK}$ is: ($K_a = 1.8 \\\\times 10^{-4}, \\\\log 2 = 0.30, \\\\text{p}K_a = 3.74$)",
    ["$3.44$", "$4.04$", "$3.74$", "$4.74$"],
    0,
    "Moles of $\\\\text{HCOOH} = 5$ mmol; moles of $\\\\text{HCOOK} = 2.5$ mmol. $\\\\text{pH} = 3.74 + \\\\log(2.5 / 5) = 3.74 + \\\\log(0.5) = 3.74 - 0.30 = 3.44$."
  );
  add(
    "Which of the following indicators is most suitable for titrating a weak acid with a strong base?",
    ["Phenolphthalein ($\\\\text{pH range } 8.2 - 10.0$)", "Methyl orange ($\\\\text{pH range } 3.1 - 4.4$)", "Methyl red ($\\\\text{pH range } 4.2 - 6.3$)", "Bromophenol blue ($\\\\text{pH range } 3.0 - 4.6$)" ],
    0,
    "At the equivalence point of a weak acid-strong base titration, the solution is basic ($\\\\text{pH } 8 - 9$) due to salt hydrolysis, which lies in phenolphthalein's working range."
  );
  add(
    "Which indicator is most suitable for titrating a strong acid with a weak base?",
    ["Methyl orange ($\\\\text{pH range } 3.1 - 4.4$)", "Phenolphthalein ($\\\\text{pH range } 8.2 - 10.0$)", "Thymolphthalein ($\\\\text{pH range } 9.3 - 10.5$)", "Alizarin yellow"],
    0,
    "The equivalence point for strong acid-weak base lies in the acidic region ($\\\\text{pH } 4 - 6$) due to cationic hydrolysis, matching methyl orange or methyl red."
  );
  add(
    "For the titration of a strong acid with a strong base, which indicator can be used?",
    ["Either methyl orange or phenolphthalein", "Only phenolphthalein", "Only methyl orange", "Neither of them"],
    0,
    "For strong acid-strong base titrations, the vertical inflection of pH spans from 4 to 10 at the equivalence point, so both methyl orange and phenolphthalein are suitable."
  );
  add(
    "What is the pH of a mixture of $0.05\\\\text{ M H}_2\\\\text{CO}_3$ and $0.5\\\\text{ M NaHCO}_3$? ($K_{a1} = 4.0 \\\\times 10^{-7}, \\\\text{p}K_{a1} = 6.40$)",
    ["$7.40$", "$6.40$", "$5.40$", "$8.40$"],
    0,
    "$\\\\text{pH} = \\\\text{p}K_{a1} + \\\\log([\\\\text{HCO}_3^-]/[\\\\text{H}_2\\\\text{CO}_3]) = 6.40 + \\\\log(0.5 / 0.05) = 6.40 + \\\\log 10 = 6.40 + 1.0 = 7.40$."
  );
  add(
    "If $0.01$ mol of gaseous $\\\\text{HCl}$ is added to $1\\\\text{ L}$ of a buffer containing $0.1\\\\text{ M CH}_3\\\\text{COOH}$ and $0.1\\\\text{ M CH}_3\\\\text{COONa}$ ($\\\\text{p}K_a = 4.74$), the new pH is: ($\\log(1.22) \\\\approx 0.09$)",
    ["$4.65$", "$4.74$", "$4.83$", "$4.50$"],
    0,
    "Added $\\\\text{H}^+$ converts $0.01$ mol acetate to acetic acid: $[\\\\text{Salt}] = 0.10 - 0.01 = 0.09\\\\text{ M}$, $[\\\\text{Acid}] = 0.10 + 0.01 = 0.11\\\\text{ M}$. $\\\\text{pH} = 4.74 + \\\\log(0.09 / 0.11) = 4.74 - \\\\log(1.22) = 4.74 - 0.09 = 4.65$."
  );
  add(
    "If $0.01$ mol of solid $\\\\text{NaOH}$ is added to $1\\\\text{ L}$ of the same buffer ($0.1\\\\text{ M CH}_3\\\\text{COOH} + 0.1\\\\text{ M CH}_3\\\\text{COONa}$), the new pH is: ($\\log(1.22) \\\\approx 0.09$)",
    ["$4.83$", "$4.74$", "$4.65$", "$5.00$"],
    0,
    "Added $\\\\text{OH}^-$ converts $0.01$ mol acetic acid to acetate: $[\\\\text{Salt}] = 0.11\\\\text{ M}$, $[\\\\text{Acid}] = 0.09\\\\text{ M}$. $\\\\text{pH} = 4.74 + \\\\log(0.11 / 0.09) = 4.74 + 0.09 = 4.83$."
  );
  add(
    "The buffer action of an acidic buffer is destroyed when:",
    ["An excess of strong acid or strong base is added such that one buffer component is completely consumed", "The buffer is diluted with a moderate volume of water", "The solution is kept at room temperature", "A neutral salt is added"],
    0,
    "When the added acid or base exceeds the capacity of the buffer components, the conjugate pair is depleted and buffering capacity is lost."
  );
  add(
    "Which of the following will have maximum buffer capacity?",
    ["A solution of $1\\\\text{ M CH}_3\\\\text{COOH}$ and $1\\\\text{ M CH}_3\\\\text{COONa}$", "A solution of $0.1\\\\text{ M CH}_3\\\\text{COOH}$ and $0.1\\\\text{ M CH}_3\\\\text{COONa}$", "A solution of $0.01\\\\text{ M CH}_3\\\\text{COOH}$ and $0.01\\\\text{ M CH}_3\\\\text{COONa}$", "A solution of $0.001\\\\text{ M CH}_3\\\\text{COOH}$ and $0.001\\\\text{ M CH}_3\\\\text{COONa}$"],
    0,
    "Buffer capacity is directly proportional to the total concentrations of the weak acid and its conjugate base. $1\\\\text{ M}$ each provides the highest capacity."
  );
  add(
    "The pH of a buffer solution can be kept constant even upon standing for a long time by:",
    ["Preventing evaporation and contamination by atmospheric $\\\\text{CO}_2$", "Boiling the solution continuously", "Adding strong acid dropwise", "Adding excess pure water"],
    0,
    "Dissolution of atmospheric $\\\\text{CO}_2$ produces carbonic acid which can alter the pH over time; keeping the container sealed prevents this."
  );
  add(
    "A buffer solution contains $0.2\\\\text{ mol of NH}_4\\\\text{OH}$ and $0.2\\\\text{ mol of NH}_4\\\\text{Cl}$ in $1\\\\text{ L}$. What is its pOH? ($\\\\text{p}K_b = 4.74$)",
    ["$4.74$", "$9.26$", "$7.00$", "$5.74$"],
    0,
    "$\\\\text{pOH} = \\\\text{p}K_b + \\\\log(0.2 / 0.2) = 4.74 + 0 = 4.74$."
  );
  add(
    "For the buffer above ($0.2\\\\text{ mol NH}_4\\\\text{OH} + 0.2\\\\text{ mol NH}_4\\\\text{Cl}$), what is its pH?",
    ["$9.26$", "$4.74$", "$7.00$", "$14.0$"],
    0,
    "$\\\\text{pH} = 14 - \\\\text{pOH} = 14 - 4.74 = 9.26$."
  );
  add(
    "The pH of unbuffered pure water changes from 7 to about 3 upon adding a drop of $1\\\\text{ M HCl}$, whereas in a buffer solution the pH changes by:",
    ["Only a few hundredths of a pH unit", "Several pH units", "Exactly 7 units", "Does not change at all under any circumstances"],
    0,
    "Buffers exhibit high resistance to pH changes, absorbing small additions of strong acid with only a minute change in pH."
  );
  add(
    "Which of the following acid-base pairs is NOT suitable for preparing a buffer of $\\\\text{pH} \\\\approx 7$?",
    ["$\\\\text{HCl} / \\\\text{NaCl}$", "$\\\\text{H}_2\\\\text{PO}_4^- / \\\\text{HPO}_4^{2-}$ ($\\\\text{p}K_{a2} \\\\approx 7.2$)", "$\\\\text{HEPES}$ buffer system", "$\\\\text{MOPS}$ buffer system"],
    0,
    "$\\\\text{HCl} / \\\\text{NaCl}$ is a strong acid and its salt, which has no buffering capacity."
  );
  add(
    "What is the pH of an aqueous solution of ammonium acetate ($\\\\text{CH}_3\\\\text{COONH}_4$) given $\\\\text{p}K_a = 4.76$ and $\\\\text{p}K_b = 4.75$?",
    ["$7.005 \\\\approx 7.01$", "$7.50$", "$6.50$", "$8.00$"],
    0,
    "$\\\\text{pH} = 7 + \\\\frac{1}{2}(4.76 - 4.75) = 7 + 0.005 = 7.005$."
  );
  add(
    "In a basic buffer consisting of $\\\\text{NH}_4\\\\text{OH}$ and $\\\\text{NH}_4\\\\text{Cl}$, the common ion is:",
    ["$\\\\text{NH}_4^+$", "$\\\\text{OH}^-$", "$\\\\text{Cl}^-$", "$\\\\text{H}^+$"],
    0,
    "Both $\\\\text{NH}_4\\\\text{OH}$ and $\\\\text{NH}_4\\\\text{Cl}$ produce the ammonium ion $\\\\text{NH}_4^+$, which suppresses the dissociation of $\\\\text{NH}_4\\\\text{OH}$ via the common ion effect."
  );
  add(
    "In an acidic buffer consisting of $\\\\text{CH}_3\\\\text{COOH}$ and $\\\\text{CH}_3\\\\text{COONa}$, the common ion is:",
    ["$\\\\text{CH}_3\\\\text{COO}^-$", "$\\\\text{Na}^+$", "$\\\\text{H}^+$", "$\\\\text{OH}^-$"],
    0,
    "The acetate ion ($\\\\text{CH}_3\\\\text{COO}^-$) is the common ion suppressing acetic acid dissociation."
  );
  add(
    "What volume of $0.1\\\\text{ M NaOH}$ must be added to $100\\\\text{ mL}$ of $0.1\\\\text{ M CH}_3\\\\text{COOH}$ to obtain a buffer of $\\\\text{pH} = \\\\text{p}K_a$?",
    ["$50\\\\text{ mL}$", "$100\\\\text{ mL}$", "$25\\\\text{ mL}$", "$75\\\\text{ mL}$"],
    0,
    "To have $\\\\text{pH} = \\\\text{p}K_a$, we need $[\\\\text{Salt}] = [\\\\text{Acid}]$, which means exactly half the initial weak acid must be neutralized: $100\\\\text{ mL} / 2 = 50\\\\text{ mL}$ of $\\\\text{NaOH}$."
  );
  add(
    "The buffering action in human intracellular fluid is primarily provided by the:",
    ["Phosphate buffer system ($\\\\text{H}_2\\\\text{PO}_4^- / \\\\text{HPO}_4^{2-}$)", "Acetate buffer system", "Formate buffer system", "Sulfate buffer system"],
    0,
    "The dihydrogen phosphate / hydrogen phosphate system ($\\\\text{p}K_{a2} = 7.2$) provides the primary buffering capacity within intracellular fluids."
  );

  return q;
}

function getSolubilityProductQuestions() {
  const q = [];
  const add = (question, options, correctIndex, explanation) => {
    q.push({ question, options, correctIndex, explanation });
  };

  // Solubility product (Ksp) and common ion effect (47 questions)
  add(
    "For a sparingly soluble salt of type $AB$ ($\\\\text{e.g., } \\\\text{AgCl}$), the relationship between solubility product $K_{sp}$ and molar solubility $s$ is:",
    ["$K_{sp} = s^2$", "$K_{sp} = 4s^3$", "$K_{sp} = 27s^4$", "$K_{sp} = s$"],
    0,
    "$AB(s) \\\\rightleftharpoons A^+(aq) + B^-(aq)$. $K_{sp} = [A^+][B^-] = (s)(s) = s^2$."
  );
  add(
    "For a sparingly soluble salt of type $AB_2$ ($\\\\text{e.g., } \\\\text{PbCl}_2, \\\\text{CaF}_2$), the relationship between $K_{sp}$ and $s$ is:",
    ["$K_{sp} = 4s^3$", "$K_{sp} = s^2$", "$K_{sp} = 27s^4$", "$K_{sp} = 108s^5$"],
    0,
    "$AB_2(s) \\\\rightleftharpoons A^{2+} + 2B^-$. $K_{sp} = [A^{2+}][B^-]^2 = (s)(2s)^2 = 4s^3$."
  );
  add(
    "For a sparingly soluble salt of type $A_2B_3$ ($\\\\text{e.g., } \\\\text{As}_2\\\\text{S}_3, \\\\text{Bi}_2\\\\text{S}_3$), the relationship between $K_{sp}$ and $s$ is:",
    ["$K_{sp} = 108s^5$", "$K_{sp} = 27s^4$", "$K_{sp} = 4s^3$", "$K_{sp} = 72s^5$"],
    0,
    "$A_2B_3(s) \\\\rightleftharpoons 2A^{3+} + 3B^{2-}$. $K_{sp} = (2s)^2 (3s)^3 = 4s^2 \\\\times 27s^3 = 108s^5$."
  );
  add(
    "For a sparingly soluble salt of type $AB_3$ ($\\\\text{e.g., } \\\\text{Al(OH)}_3, \\\\text{Fe(OH)}_3$), the relationship between $K_{sp}$ and $s$ is:",
    ["$K_{sp} = 27s^4$", "$K_{sp} = 4s^3$", "$K_{sp} = 108s^5$", "$K_{sp} = 9s^4$"],
    0,
    "$AB_3(s) \\\\rightleftharpoons A^{3+} + 3B^-$. $K_{sp} = (s)(3s)^3 = 27s^4$."
  );
  add(
    "The solubility of $\\\\text{AgCl}$ in water is $1.0 \\\\times 10^{-5}\\\\text{ mol/L}$. What is its solubility product $K_{sp}$?",
    ["$1.0 \\\\times 10^{-10}$", "$1.0 \\\\times 10^{-5}$", "$2.0 \\\\times 10^{-10}$", "$1.0 \\\\times 10^{-20}$"],
    0,
    "$K_{sp} = s^2 = (1.0 \\\\times 10^{-5})^2 = 1.0 \\\\times 10^{-10}$."
  );
  add(
    "The solubility product $K_{sp}$ of $\\\\text{BaSO}_4$ is $1.0 \\\\times 10^{-10}$ at $25^\\\\circ\\\\text{C}$. Its molar solubility in pure water is:",
    ["$1.0 \\\\times 10^{-5}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-10}\\\\text{ mol/L}$", "$5.0 \\\\times 10^{-6}\\\\text{ mol/L}$", "$2.0 \\\\times 10^{-5}\\\\text{ mol/L}$"],
    0,
    "$s = \\\\sqrt{K_{sp}} = \\\\sqrt{1.0 \\\\times 10^{-10}} = 1.0 \\\\times 10^{-5}\\\\text{ mol/L}$."
  );
  add(
    "The solubility product of $\\\\text{PbI}_2$ is $3.2 \\\\times 10^{-8}$. Its molar solubility $s$ in pure water is:",
    ["$2.0 \\\\times 10^{-3}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-3}\\\\text{ mol/L}$", "$4.0 \\\\times 10^{-3}\\\\text{ mol/L}$", "$8.0 \\\\times 10^{-4}\\\\text{ mol/L}$"],
    0,
    "$K_{sp} = 4s^3 \\\\implies s = (K_{sp}/4)^{1/3} = (3.2 \\\\times 10^{-8} / 4)^{1/3} = (8.0 \\\\times 10^{-9})^{1/3} = 2.0 \\\\times 10^{-3}\\\\text{ mol/L}$."
  );
  add(
    "Precipitation of a sparingly soluble salt occurs from solution when:",
    ["$Q_{sp} > K_{sp}$ (Ionic product exceeds solubility product)", "$Q_{sp} < K_{sp}$", "$Q_{sp} = K_{sp}$", "$Q_{sp} = 0$"],
    0,
    "When the ionic product $Q_{sp}$ exceeds the thermodynamic solubility product $K_{sp}$, the solution is supersaturated and precipitation occurs."
  );
  add(
    "A solution is saturated with respect to a sparingly soluble salt when:",
    ["$Q_{sp} = K_{sp}$", "$Q_{sp} > K_{sp}$", "$Q_{sp} < K_{sp}$", "$Q_{sp} = 0$"],
    0,
    "At dynamic saturation equilibrium between the undissolved solute and its ions, the ionic product equals the solubility product: $Q_{sp} = K_{sp}$."
  );
  add(
    "What is the solubility of $\\\\text{AgCl}$ ($K_{sp} = 1.0 \\\\times 10^{-10}$) in a $0.1\\\\text{ M NaCl}$ solution?",
    ["$1.0 \\\\times 10^{-9}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-5}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-10}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-4}\\\\text{ mol/L}$"],
    0,
    "Common ion effect: $[\\\\text{Cl}^-] = 0.1\\\\text{ M}$. $K_{sp} = [\\\\text{Ag}^+][\\\\text{Cl}^-] \\\\implies 10^{-10} = s'(0.1) \\\\implies s' = 10^{-9}\\\\text{ mol/L}$."
  );
  add(
    "Comparing the solubility of $\\\\text{AgCl}$ in pure water ($10^{-5}\\\\text{ M}$) with that in $0.1\\\\text{ M NaCl}$ ($10^{-9}\\\\text{ M}$), the solubility in $\\\\text{NaCl}$:",
    ["Decreases by a factor of $10^4$ due to the common ion effect", "Increases by a factor of $10^4$", "Remains unchanged", "Decreases by a factor of 10"],
    0,
    "The presence of the common ion $\\\\text{Cl}^-$ shifts the dissolution equilibrium backward (Le Chatelier's principle), decreasing solubility by $10^4$ times."
  );
  add(
    "The solubility product $K_{sp}$ of $\\\\text{CaF}_2$ is $3.2 \\\\times 10^{-11}$. What is the concentration of $\\\\text{F}^-$ ions in a saturated aqueous solution?",
    ["$4.0 \\\\times 10^{-4}\\\\text{ M}$", "$2.0 \\\\times 10^{-4}\\\\text{ M}$", "$1.0 \\\\times 10^{-4}\\\\text{ M}$", "$8.0 \\\\times 10^{-4}\\\\text{ M}$"],
    0,
    "$K_{sp} = 4s^3 \\\\implies s = (3.2 \\\\times 10^{-11} / 4)^{1/3} = (8 \\\\times 10^{-12})^{1/3} = 2.0 \\\\times 10^{-4}\\\\text{ M}$. $[\\\\text{F}^-] = 2s = 4.0 \\\\times 10^{-4}\\\\text{ M}$."
  );
  add(
    "The solubility product of $\\\\text{Ag}_2\\\\text{CrO}_4$ is $1.08 \\\\times 10^{-10}$. Its solubility $s$ in pure water is:",
    ["$3.0 \\\\times 10^{-4}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-5}\\\\text{ mol/L}$", "$2.7 \\\\times 10^{-4}\\\\text{ mol/L}$", "$5.2 \\\\times 10^{-4}\\\\text{ mol/L}$"],
    0,
    "For $A_2B$, $K_{sp} = 4s^3 \\\\implies s = (1.08 \\\\times 10^{-10} / 4)^{1/3} = (2.7 \\\\times 10^{-11})^{1/3} = (27 \\\\times 10^{-12})^{1/3} = 3.0 \\\\times 10^{-4}\\\\text{ mol/L}$."
  );
  add(
    "In qualitative analysis of Group II cations, $\\\\text{H}_2\\\\text{S}$ is passed in the presence of dilute $\\\\text{HCl}$. The role of $\\\\text{HCl}$ is to:",
    ["Suppress the ionization of $\\\\text{H}_2\\\\text{S}$ by the common ion effect so that only Group II sulfides precipitate", "Increase the ionization of $\\\\text{H}_2\\\\text{S}$", "Precipitate Group IV cations", "Neutralize the basic solution"],
    0,
    "The $\\\\text{H}^+$ from strong acid $\\\\text{HCl}$ suppresses the ionization of $\\\\text{H}_2\\\\text{S}$, keeping $[\\\\text{S}^{2-}]$ very low. This satisfies $K_{sp}$ only for the very sparingly soluble Group II sulfides."
  );
  add(
    "In qualitative analysis of Group III cations, $\\\\text{NH}_4\\\\text{OH}$ is added in the presence of $\\\\text{NH}_4\\\\text{Cl}$. The role of $\\\\text{NH}_4\\\\text{Cl}$ is to:",
    ["Suppress the ionization of $\\\\text{NH}_4\\\\text{OH}$ so that only Group III hydroxides precipitate", "Increase the concentration of $\\\\text{OH}^-$ ions", "Precipitate Group IV cations as hydroxides", "Prevent the precipitation of Group III hydroxides"],
    0,
    "The common ion $\\\\text{NH}_4^+$ suppresses the ionization of $\\\\text{NH}_4\\\\text{OH}$, keeping $[\\\\text{OH}^-]$ sufficiently low to precipitate only Group III hydroxides (which have very small $K_{sp}$ values) and prevent precipitation of Group IV/V hydroxides."
  );
  add(
    "Equal volumes of $10^{-4}\\\\text{ M AgNO}_3$ and $10^{-4}\\\\text{ M NaCl}$ are mixed. If $K_{sp}(\\\\text{AgCl}) = 1.0 \\\\times 10^{-10}$, will precipitation occur?",
    ["Yes, because $Q_{sp} = 2.5 \\\\times 10^{-9} > K_{sp}$", "No, because $Q_{sp} < K_{sp}$", "No, because the solution is unsaturated", "Precipitation occurs only upon heating"],
    0,
    "After mixing equal volumes, $[\\\\text{Ag}^+] = 5 \\\\times 10^{-5}\\\\text{ M}$ and $[\\\\text{Cl}^-] = 5 \\\\times 10^{-5}\\\\text{ M}$. $Q_{sp} = (5 \\\\times 10^{-5})^2 = 2.5 \\\\times 10^{-9} > 1.0 \\\\times 10^{-10}$, so precipitation occurs."
  );
  add(
    "What is the pH at which $\\\\text{Mg(OH)}_2$ begins to precipitate from a $0.01\\\\text{ M Mg}^{2+}$ solution? ($K_{sp}\\\\text{ of Mg(OH)}_2 = 1.0 \\\\times 10^{-11}$)",
    ["$9.5$", "$8.5$", "$10.5$", "$11.0$"],
    0,
    "$K_{sp} = [\\\\text{Mg}^{2+}][\\\\text{OH}^-]^2 \\\\implies 10^{-11} = (10^{-2})[\\\\text{OH}^-]^2 \\\\implies [\\\\text{OH}^-]^2 = 10^{-9} \\\\implies [\\\\text{OH}^-] = \\\\sqrt{10} \\\\times 10^{-5} \\\\approx 3.16 \\\\times 10^{-5}\\\\text{ M} \\\\implies \\\\text{pOH} \\\\approx 4.5 \\\\implies \\\\text{pH} = 14 - 4.5 = 9.5$."
  );
  add(
    "The molar solubility of $\\\\text{Ca(OH)}_2$ in water is $s$. The solubility product $K_{sp}$ is:",
    ["$4s^3$", "$s^2$", "$2s^2$", "$27s^4$"],
    0,
    "$\\\\text{Ca(OH)}_2 \\\\rightleftharpoons \\\\text{Ca}^{2+} + 2\\\\text{OH}^-$. $K_{sp} = [\\\\text{Ca}^{2+}][\\\\text{OH}^-]^2 = (s)(2s)^2 = 4s^3$."
  );
  add(
    "Which of the following salts has the lowest molar solubility in water?",
    ["$\\\\text{AgCl}$ ($K_{sp} = 1.8 \\\\times 10^{-10}$)", "$\\\\text{AgBr}$ ($K_{sp} = 5.0 \\\\times 10^{-13}$)", "$\\\\text{AgI}$ ($K_{sp} = 8.3 \\\\times 10^{-17}$)", "$\\\\text{Ag}_2\\\\text{CrO}_4$ ($K_{sp} = 1.1 \\\\times 10^{-12}$)"],
    0,
    "For $1:1$ silver halides, $s = \\\\sqrt{K_{sp}}$. Since $\\\\text{AgI}$ has the smallest $K_{sp}$ ($8.3 \\\\times 10^{-17}$), its solubility $s \\\\approx 9.1 \\\\times 10^{-9}\\\\text{ M}$ is the lowest."
  );
  add(
    "The solubility of $\\\\text{BaSO}_4$ in $0.01\\\\text{ M H}_2\\\\text{SO}_4$ ($K_{sp} = 1.0 \\\\times 10^{-10}$) is:",
    ["$1.0 \\\\times 10^{-8}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-5}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-10}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-6}\\\\text{ mol/L}$"],
    0,
    "Common ion $[\\\\text{SO}_4^{2-}] = 0.01\\\\text{ M}$. $s' = K_{sp} / [\\\\text{SO}_4^{2-}] = 10^{-10} / 10^{-2} = 1.0 \\\\times 10^{-8}\\\\text{ mol/L}$."
  );
  add(
    "The solubility of $\\\\text{Ag}_2\\\\text{CrO}_4$ ($K_{sp} = 4.0 \\\\times 10^{-12}$) in a $0.1\\\\text{ M AgNO}_3$ solution is:",
    ["$4.0 \\\\times 10^{-10}\\\\text{ mol/L}$", "$2.0 \\\\times 10^{-6}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-4}\\\\text{ mol/L}$", "$4.0 \\\\times 10^{-11}\\\\text{ mol/L}$"],
    0,
    "$[\\\\text{Ag}^+] = 0.1\\\\text{ M}$. $K_{sp} = [\\\\text{Ag}^+]^2 [\\\\text{CrO}_4^{2-}] \\\\implies 4 \\\\times 10^{-12} = (0.1)^2 s' \\\\implies s' = 4 \\\\times 10^{-10}\\\\text{ mol/L}$."
  );
  add(
    "A solution contains equal concentrations of $\\\\text{Cl}^-$ and $\\\\text{I}^-$. Upon slow addition of $\\\\text{AgNO}_3$, which salt will precipitate first?",
    ["$\\\\text{AgI}$ because its $K_{sp}$ is much smaller than that of $\\\\text{AgCl}$", "$\\\\text{AgCl}$ because $\\\\text{Cl}^-$ is more electronegative", "Both precipitate simultaneously", "Neither precipitates"],
    0,
    "Since $[\\\\text{Cl}^-] = [\\\\text{I}^-]$ and both form $1:1$ salts with $\\\\text{Ag}^+$, the concentration of $\\\\text{Ag}^+$ required to reach $K_{sp}$ is much smaller for $\\\\text{AgI}$ ($K_{sp} \\\\approx 10^{-16}$) than $\\\\text{AgCl}$ ($K_{sp} \\\\approx 10^{-10}$)."
  );
  add(
    "The solubility product $K_{sp}$ of a salt depends on:",
    ["Temperature only", "Concentration of common ions", "Volume of solution", "Mass of solid taken"],
    0,
    "Like all thermodynamic equilibrium constants, $K_{sp}$ is a constant for a given salt at a specified temperature and is independent of concentration or volume."
  );
  add(
    "When $\\\\text{HCl}$ gas is passed through a saturated solution of $\\\\text{NaCl}$, pure $\\\\text{NaCl}$ precipitates out. This is due to:",
    ["Common ion effect of $\\\\text{Cl}^-$", "Formation of insoluble complex", "Decrease in temperature", "Oxidation of $\\\\text{Cl}^-$"],
    0,
    "Passing $\\\\text{HCl}$ introduces a high concentration of common ion $\\\\text{Cl}^-$, causing $[\\\\text{Na}^+][\\\\text{Cl}^-] > K_{sp}(\\\\text{NaCl})$ and precipitating pure crystalline $\\\\text{NaCl}$."
  );
  add(
    "If the solubility product of $\\\\text{Al(OH)}_3$ is $2.7 \\\\times 10^{-23}$, its solubility $s$ in pure water is:",
    ["$1.0 \\\\times 10^{-6}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-8}\\\\text{ mol/L}$", "$3.0 \\\\times 10^{-6}\\\\text{ mol/L}$", "$2.7 \\\\times 10^{-6}\\\\text{ mol/L}$"],
    0,
    "$K_{sp} = 27s^4 \\\\implies s^4 = \\\\frac{2.7 \\\\times 10^{-23}}{27} = 1.0 \\\\times 10^{-24} \\\\implies s = 1.0 \\\\times 10^{-6}\\\\text{ mol/L}$."
  );
  add(
    "What is the maximum $[\\\\text{SO}_4^{2-}]$ that can exist in a $0.05\\\\text{ M Ca}^{2+}$ solution without causing precipitation of $\\\\text{CaSO}_4$? ($K_{sp} = 2.0 \\\\times 10^{-5}$)",
    ["$4.0 \\\\times 10^{-4}\\\\text{ M}$", "$1.0 \\\\times 10^{-3}\\\\text{ M}$", "$2.0 \\\\times 10^{-4}\\\\text{ M}$", "$5.0 \\\\times 10^{-5}\\\\text{ M}$"],
    0,
    "$[\\\\text{SO}_4^{2-}]_{\\\\text{max}} = \\\\frac{K_{sp}}{[\\\\text{Ca}^{2+}]} = \\\\frac{2.0 \\\\times 10^{-5}}{0.05} = 4.0 \\\\times 10^{-4}\\\\text{ M}$."
  );
  add(
    "In a saturated solution of $\\\\text{Ag}_2\\\\text{SO}_4$, the concentration of $\\\\text{Ag}^+$ is $2.2 \\\\times 10^{-2}\\\\text{ M}$. The solubility product $K_{sp}$ of $\\\\text{Ag}_2\\\\text{SO}_4$ is:",
    ["$5.32 \\\\times 10^{-6}$", "$1.06 \\\\times 10^{-5}$", "$2.66 \\\\times 10^{-6}$", "$4.84 \\\\times 10^{-4}$"],
    0,
    "$[\\\\text{Ag}^+] = 2.2 \\\\times 10^{-2}\\\\text{ M} \\\\implies [\\\\text{SO}_4^{2-}] = \\\\frac{[\\\\text{Ag}^+]}{2} = 1.1 \\\\times 10^{-2}\\\\text{ M}$. $K_{sp} = [\\\\text{Ag}^+]^2 [\\\\text{SO}_4^{2-}] = (2.2 \\\\times 10^{-2})^2 (1.1 \\\\times 10^{-2}) = (4.84 \\\\times 10^{-4})(1.1 \\\\times 10^{-2}) = 5.32 \\\\times 10^{-6}$."
  );
  add(
    "Addition of sodium acetate ($\\\\text{CH}_3\\\\text{COONa}$) to an aqueous acetic acid solution causes:",
    ["A decrease in $[\\\\text{H}^+]$ and an increase in pH", "An increase in $[\\\\text{H}^+]$ and a decrease in pH", "No change in $[\\\\text{H}^+]$", "Complete dissociation of acetic acid"],
    0,
    "The common ion $\\\\text{CH}_3\\\\text{COO}^-$ shifts the equilibrium $\\\\text{CH}_3\\\\text{COOH} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COO}^- + \\\\text{H}^+$ to the left, decreasing $[\\\\text{H}^+]$ and increasing pH."
  );
  add(
    "Which of the following sulfides has the lowest solubility product ($K_{sp}$) and precipitates in acidic medium (Group II)?",
    ["$\\\\text{CuS}$", "$\\\\text{ZnS}$", "$\\\\text{MnS}$", "$\\\\text{FeS}$"],
    0,
    "$\\\\text{CuS}$ has $K_{sp} \\\\approx 10^{-36}$, which is vastly smaller than that of Group IV sulfides ($\\\\text{ZnS} \\\\approx 10^{-24}, \\\\text{FeS} \\\\approx 10^{-19}, \\\\text{MnS} \\\\approx 10^{-13}$)."
  );
  add(
    "A salt $M_2\\\\text{X}$ has $K_{sp} = 3.2 \\\\times 10^{-14}$. Its molar solubility $s$ is:",
    ["$2.0 \\\\times 10^{-5}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-5}\\\\text{ mol/L}$", "$4.0 \\\\times 10^{-5}\\\\text{ mol/L}$", "$8.0 \\\\times 10^{-5}\\\\text{ mol/L}$"],
    0,
    "$K_{sp} = 4s^3 \\\\implies s = (3.2 \\\\times 10^{-14} / 4)^{1/3} = (8.0 \\\\times 10^{-15})^{1/3} = 2.0 \\\\times 10^{-5}\\\\text{ mol/L}$."
  );
  add(
    "The unit of solubility product $K_{sp}$ for $\\\\text{Ca}_3(\\\\text{PO}_4)_2$ is:",
    ["$\\\\text{mol}^5 \\\\text{L}^{-5}$", "$\\\\text{mol}^3 \\\\text{L}^{-3}$", "$\\\\text{mol}^2 \\\\text{L}^{-2}$", "Dimensionless"],
    0,
    "$\\\\text{Ca}_3(\\\\text{PO}_4)_2 \\\\rightleftharpoons 3\\\\text{Ca}^{2+} + 2\\\\text{PO}_4^{3-}$. $K_{sp} = [\\\\text{Ca}^{2+}]^3 [\\\\text{PO}_4^{3-}]^2$, so units are $(\\\\text{mol L}^{-1})^3 (\\\\text{mol L}^{-1})^2 = \\\\text{mol}^5 \\\\text{L}^{-5}$."
  );
  add(
    "If the solubility product of $\\\\text{AgCl}$ is $1.8 \\\\times 10^{-10}$ and that of $\\\\text{AgBr}$ is $5.0 \\\\times 10^{-13}$, the ratio of their molar solubilities in pure water is:",
    ["$\\\\approx 19$", "$\\\\approx 360$", "$\\\\approx 2.4$", "$\\\\approx 100$"],
    0,
    "$s(\\\\text{AgCl}) / s(\\\\text{AgBr}) = \\\\sqrt{K_{sp}(\\\\text{AgCl}) / K_{sp}(\\\\text{AgBr})} = \\\\sqrt{(1.8 \\\\times 10^{-10}) / (5.0 \\\\times 10^{-13})} = \\\\sqrt{360} \\\\approx 18.97 \\\\approx 19$."
  );
  add(
    "What is the solubility of $\\\\text{Fe(OH)}_3$ in a solution with $\\\\text{pH} = 11.0$? ($K_{sp}\\\\text{ of Fe(OH)}_3 = 1.0 \\\\times 10^{-38}$)",
    ["$1.0 \\\\times 10^{-29}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-26}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-35}\\\\text{ mol/L}$", "$1.0 \\\\times 10^{-38}\\\\text{ mol/L}$"],
    0,
    "$\\\\text{pH} = 11.0 \\\\implies \\\\text{pOH} = 3.0 \\\\implies [\\\\text{OH}^-] = 10^{-3}\\\\text{ M}$. $K_{sp} = [\\\\text{Fe}^{3+}][\\\\text{OH}^-]^3 \\\\implies 10^{-38} = s'(10^{-3})^3 = s'(10^{-9}) \\\\implies s' = 10^{-29}\\\\text{ mol/L}$."
  );
  add(
    "When common ion effect is observed, the solubility of an electrolyte:",
    ["Always decreases", "Always increases", "May increase or decrease", "Remains unaffected"],
    0,
    "The presence of a common ion shifts the dissolution equilibrium backward, thereby always decreasing the solubility of the sparingly soluble electrolyte."
  );
  add(
    "A precipitate of $\\\\text{AgCl}$ dissolves in aqueous ammonia due to the formation of:",
    ["$[{\\\\text{Ag(NH}_3)}_2]^+$ complex", "$[{\\\\text{Ag(NH}_3)}_4]^{2+}$ complex", "$\\\\text{AgOH}$ precipitate", "$\\\\text{Ag}_2\\\\text{O}$ suspension"],
    0,
    "$\\\\text{AgCl}(s) + 2\\\\text{NH}_3(aq) \\\\rightleftharpoons [{\\\\text{Ag(NH}_3)}_2]^+(aq) + \\\\text{Cl}^-(aq)$. Complex ion formation consumes free $\\\\text{Ag}^+$, dissolving the precipitate."
  );
  add(
    "The simultaneous solubility of two sparingly soluble salts $\\\\text{AgCl}$ ($K_{sp1}$) and $\\\\text{AgBr}$ ($K_{sp2}$) in water is determined by:",
    ["$[\\\\text{Ag}^+] = \\\\sqrt{K_{sp1} + K_{sp2}}$", "$[\\\\text{Ag}^+] = \\\\sqrt{K_{sp1}} + \\\\sqrt{K_{sp2}}$", "$[\\\\text{Ag}^+] = \\\\sqrt{K_{sp1} K_{sp2}}$", "$[\\\\text{Ag}^+] = K_{sp1} + K_{sp2}$"],
    0,
    "Total $[\\\\text{Ag}^+] = [\\\\text{Cl}^-] + [\\\\text{Br}^-] = \\\\frac{K_{sp1}}{[\\\\text{Ag}^+]} + \\\\frac{K_{sp2}}{[\\\\text{Ag}^+]}$, so $[\\\\text{Ag}^+]^2 = K_{sp1} + K_{sp2} \\\\implies [\\\\text{Ag}^+] = \\\\sqrt{K_{sp1} + K_{sp2}}$."
  );
  add(
    "A solution is $0.1\\\\text{ M in Cl}^-$ and $0.001\\\\text{ M in CrO}_4^{2-}$. If $K_{sp}(\\\\text{AgCl}) = 1.8 \\\\times 10^{-10}$ and $K_{sp}(\\\\text{Ag}_2\\\\text{CrO}_4) = 1.1 \\\\times 10^{-12}$, which precipitates first upon adding $\\\\text{Ag}^+$?",
    ["$\\\\text{AgCl}$ because it requires $[\\\\text{Ag}^+] = 1.8 \\\\times 10^{-9}\\\\text{ M}$, which is lower", "$\\\\text{Ag}_2\\\\text{CrO}_4$ because it requires $[\\\\text{Ag}^+] = 1.05 \\\\times 10^{-4}\\\\text{ M}$", "Both precipitate at the same time", "No precipitate forms"],
    0,
    "For $\\\\text{AgCl}$, $[\\\\text{Ag}^+] = 1.8 \\\\times 10^{-10} / 0.1 = 1.8 \\\\times 10^{-9}\\\\text{ M}$. For $\\\\text{Ag}_2\\\\text{CrO}_4$, $[\\\\text{Ag}^+] = \\\\sqrt{1.1 \\\\times 10^{-12} / 10^{-3}} = 3.3 \\\\times 10^{-5}\\\\text{ M}$. Since $1.8 \\\\times 10^{-9} < 3.3 \\\\times 10^{-5}$, $\\\\text{AgCl}$ precipitates first."
  );
  add(
    "The solubility of $\\\\text{BaSO}_4$ in water is $2.33 \\\\times 10^{-3}\\\\text{ g/L}$. Given $M_{\\\\text{BaSO}_4} = 233\\\\text{ g/mol}$, what is its $K_{sp}$?",
    ["$1.0 \\\\times 10^{-10}$", "$2.33 \\\\times 10^{-5}$", "$1.0 \\\\times 10^{-5}$", "$5.4 \\\\times 10^{-10}$"],
    0,
    "$s = \\\\frac{2.33 \\\\times 10^{-3}}{233} = 1.0 \\\\times 10^{-5}\\\\text{ mol/L}$. $K_{sp} = s^2 = (1.0 \\\\times 10^{-5})^2 = 1.0 \\\\times 10^{-10}$."
  );
  add(
    "Which of the following statements about solubility product is FALSE?",
    ["Solubility of any salt is numerically equal to its solubility product", "Solubility product is temperature dependent", "Solubility product applies to saturated solutions of sparingly soluble electrolytes", "Common ions decrease the molar solubility of a sparingly soluble salt"],
    0,
    "Solubility and solubility product have different definitions, numerical values, and units (e.g., $K_{sp} = 4s^3$ for $AB_2$). Thus the statement that they are numerically equal is false."
  );
  add(
    "If the molar solubility of $\\\\text{Ag}_3\\\\text{PO}_4$ is $s$, its solubility product $K_{sp}$ is:",
    ["$27s^4$", "$108s^5$", "$4s^3$", "$s^4$"],
    0,
    "$\\\\text{Ag}_3\\\\text{PO}_4 \\\\rightleftharpoons 3\\\\text{Ag}^+ + \\\\text{PO}_4^{3-}$. $K_{sp} = (3s)^3 (s) = 27s^4$."
  );
  add(
    "The concentration of $\\\\text{Ag}^+$ in a saturated $\\\\text{Ag}_2\\\\text{CrO}_4$ solution is $2.0 \\\\times 10^{-4}\\\\text{ M}$. The $K_{sp}$ of $\\\\text{Ag}_2\\\\text{CrO}_4$ is:",
    ["$4.0 \\\\times 10^{-12}$", "$2.0 \\\\times 10^{-12}$", "$8.0 \\\\times 10^{-12}$", "$1.0 \\\\times 10^{-11}$"],
    0,
    "$[\\\\text{Ag}^+] = 2.0 \\\\times 10^{-4}\\\\text{ M} \\\\implies [\\\\text{CrO}_4^{2-}] = 1.0 \\\\times 10^{-4}\\\\text{ M}$. $K_{sp} = [\\\\text{Ag}^+]^2 [\\\\text{CrO}_4^{2-}] = (2 \\\\times 10^{-4})^2 (10^{-4}) = 4.0 \\\\times 10^{-12}$."
  );
  add(
    "Salting out of soap from aqueous solution is an industrial application of:",
    ["The common ion effect", "Adsorption chromatography", "Electrolysis", "Le Chatelier's principle on gas equilibrium"],
    0,
    "Adding excess $\\\\text{NaCl}$ introduces a high concentration of $\\\\text{Na}^+$ ions, precipitating sodium soap ($R\\\\text{COONa}$) via the common ion effect."
  );
  add(
    "The solubility product of $\\\\text{CaCO}_3$ is $4.8 \\\\times 10^{-9}$. What is its solubility in a $0.02\\\\text{ M CaCl}_2$ solution?",
    ["$2.4 \\\\times 10^{-7}\\\\text{ mol/L}$", "$4.8 \\\\times 10^{-9}\\\\text{ mol/L}$", "$6.9 \\\\times 10^{-5}\\\\text{ mol/L}$", "$1.2 \\\\times 10^{-7}\\\\text{ mol/L}$"],
    0,
    "Common ion $[\\\\text{Ca}^{2+}] = 0.02\\\\text{ M}$. $s' = K_{sp} / [\\\\text{Ca}^{2+}] = (4.8 \\\\times 10^{-9}) / 0.02 = 2.4 \\\\times 10^{-7}\\\\text{ mol/L}$."
  );
  add(
    "What happens when solid $\\\\text{AgNO}_3$ is added to a saturated solution of $\\\\text{AgCl}$?",
    ["More $\\\\text{AgCl}$ precipitates and $[\\\\text{Cl}^-]$ decreases", "$\\\\text{AgCl}$ dissolves further", "$[\\\\text{Cl}^-]$ remains unchanged", "Metallic silver precipitates"],
    0,
    "Increasing $[\\\\text{Ag}^+]$ causes the ionic product $[\\\\text{Ag}^+][\\\\text{Cl}^-]$ to exceed $K_{sp}$, causing more $\\\\text{AgCl}$ to precipitate and decreasing $[\\\\text{Cl}^-]$."
  );
  add(
    "Which of the following conditions ensures that NO precipitate will form when two salt solutions are mixed?",
    ["$Q_{sp} < K_{sp}$", "$Q_{sp} > K_{sp}$", "$Q_{sp} = K_{sp}$", "$Q_{sp} \\\\gg K_{sp}$"],
    0,
    "When the reaction quotient (ionic product) $Q_{sp} < K_{sp}$, the solution remains unsaturated and no precipitate will form."
  );
  add(
    "The solubility product of $\\\\text{Mg(OH)}_2$ at $25^\\\\circ\\\\text{C}$ is $1.8 \\\\times 10^{-11}$. The pH of its saturated solution in water is: ($\\\\log(1.65) \\\\approx 0.22$)",
    ["$10.52$", "$9.52$", "$11.52$", "$8.52$"],
    0,
    "$K_{sp} = 4s^3 \\\\implies s = (1.8 \\\\times 10^{-11} / 4)^{1/3} = (4.5 \\\\times 10^{-12})^{1/3} \\\\approx 1.65 \\\\times 10^{-4}\\\\text{ M}$. $[\\\\text{OH}^-] = 2s = 3.3 \\\\times 10^{-4}\\\\text{ M} \\\\implies \\\\text{pOH} = 3.48 \\\\implies \\\\text{pH} = 14 - 3.48 = 10.52$."
  );
  add(
    "Which of the following compounds has the highest solubility in pure water at $25^\\\\circ\\\\text{C}$?",
    ["$\\\\text{AgCl}$ ($K_{sp} = 1.8 \\\\times 10^{-10}$)", "$\\\\text{BaSO}_4$ ($K_{sp} = 1.1 \\\\times 10^{-10}$)", "$\\\\text{CaCO}_3$ ($K_{sp} = 4.8 \\\\times 10^{-9}$)", "$\\\\text{PbSO}_4$ ($K_{sp} = 1.6 \\\\times 10^{-8}$)"],
    0,
    "All are $1:1$ electrolytes with $s = \\\\sqrt{K_{sp}}$. $\\\\text{PbSO}_4$ has the highest $K_{sp}$ ($1.6 \\\\times 10^{-8}$), giving the highest solubility $s = \\\\sqrt{1.6 \\\\times 10^{-8}} \\\\approx 1.26 \\\\times 10^{-4}\\\\text{ mol/L}$."
  );

  return q;
}

module.exports = {
  getSaltHydrolysisAndAcidBaseQuestions,
  getBufferSolutionsQuestions,
  getSolubilityProductQuestions
};
`;

  fs.writeFileSync(path.join(__dirname, "data_equilibrium_part3.js"), content, "utf8");
  console.log("Successfully wrote scripts/data_equilibrium_part3.js");
}

buildPart3();
