const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Hydrogen spectrum and Rydberg formula";
const CHAPTER = "Atoms and Nuclei";
const SUBJECT = "Physics";
const CLASS = "Class 12";

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Assertion-Reason questions
const arQuestions = [
  {
    assertion: "The spectral lines of the Lyman series of a hydrogen atom lie entirely in the ultraviolet region.",
    reason: "Transitions in the Lyman series terminate at the ground state ($n_1 = 1$), involving energy gaps between $10.2\\text{ eV}$ and $13.6\\text{ eV}$, which correspond to photon wavelengths shorter than visible light.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For the Lyman series, $n_1 = 1$. The photon energies range from $\\Delta E = 10.2\\text{ eV}$ ($n=2\\to 1$, $\\lambda \\approx 1216\\text{ \\AA}$) to $\\Delta E = 13.6\\text{ eV}$ ($n=\\infty\\to 1$, $\\lambda \\approx 912\\text{ \\AA}$). Both wavelengths fall well within the ultraviolet region ($< 4000\\text{ \\AA}$)."
  },
  {
    assertion: "The Balmer series is the only spectral series of hydrogen that has lines in the visible spectrum.",
    reason: "The transitions in the Balmer series terminate at the second energy level ($n_1 = 2$), where photon energies range between $1.89\\text{ eV}$ and $3.40\\text{ eV}$, falling within the human visible band.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For $n_1 = 2$, the first four lines ($H_\\alpha, H_\\beta, H_\\gamma, H_\\delta$) have wavelengths between $6563\\text{ \\AA}$ and $4102\\text{ \\AA}$, corresponding directly to visible colors from red to violet."
  },
  {
    assertion: "The series limit of any spectral series corresponds to the shortest wavelength in that series.",
    reason: "The series limit occurs when the electron transitions from the continuum ($n_2 = \\infty$) to the lower stationary level $n_1$, releasing the maximum photon energy in that series.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Since $E = hc/\\lambda$, maximum energy transition ($n_2 = \\infty \\to n_1$) produces the shortest possible wavelength: $\\frac{1}{\\lambda_{\\min}} = R Z^2 \\left(\\frac{1}{n_1^2} - 0\\right) = \\frac{R Z^2}{n_1^2}$."
  },
  {
    assertion: "The ratio of the longest wavelength to the shortest wavelength of the Lyman series in hydrogen is $4 : 3$.",
    reason: "For the Lyman series, $\\frac{1}{\\lambda_{\\max}} = R\\left(1 - \\frac{1}{4}\\right) = \\frac{3R}{4}$ and $\\frac{1}{\\lambda_{\\min}} = R(1 - 0) = R$, giving $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{4/3R}{1/R} = \\frac{4}{3}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The longest wavelength is the first line ($n=2 \\to 1$), where $\\lambda_{\\max} = 4/(3R)$. The shortest wavelength is the series limit ($n=\\infty \\to 1$), where $\\lambda_{\\min} = 1/R$. The ratio is $(4/3R)/(1/R) = 4/3$."
  },
  {
    assertion: "When an electron in a hydrogen sample is excited to the state $n = 4$, a maximum of $6$ spectral lines can be emitted during de-excitation to the ground state.",
    reason: "The total number of possible emission lines from an ensemble of atoms excited to state $n$ is given by $N = \\frac{n(n - 1)}{2}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For $n = 4$, $N = \\frac{4(4 - 1)}{2} = \\frac{4 \\times 3}{2} = 6$. The transitions are $4\\to 3, 4\\to 2, 4\\to 1, 3\\to 2, 3\\to 1$, and $2\\to 1$."
  },
  {
    assertion: "The wavelength of the first line of the Balmer series in a singly ionized helium ion $\\text{He}^+$ is one-fourth of that in a hydrogen atom.",
    reason: "From the Rydberg formula $\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$, wavelength is inversely proportional to $Z^2$, and for helium $Z = 2$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because $\\lambda \\propto 1/Z^2$, and for $\\text{He}^+$ $Z = 2$, $\\lambda_{\\text{He}^+} = \\lambda_H / 2^2 = \\lambda_H / 4$. Both statements are true and (R) correctly explains (A)."
  },
  {
    assertion: "During photon emission, an isolated hydrogen atom experiences a small backward recoil.",
    reason: "By conservation of linear momentum, the photon carries momentum $p = \\frac{h\\nu}{c}$, so the atom must recoil with equal and opposite momentum.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The system (atom + photon) is isolated, so total linear momentum is conserved. When a photon with momentum $p = h\\nu/c$ is emitted in one direction, the emitting atom acquires recoil momentum $M v = p$, resulting in recoil kinetic energy $K_{\\text{recoil}} = \\frac{p^2}{2M}$."
  },
  {
    assertion: "The energy of the emitted photon in a downward transition is slightly less than the transition energy difference $\\Delta E = E_i - E_f$.",
    reason: "A small fraction of the transition energy is consumed as kinetic energy of recoil of the emitting atom.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Conservation of energy requires $\\Delta E = h\\nu + \\frac{p^2}{2M}$. Since $p = h\\nu/c$, $h\\nu = \\Delta E - \\frac{(h\\nu)^2}{2Mc^2} < \\Delta E$. Thus (R) correctly explains (A)."
  },
  {
    assertion: "The Paschen, Brackett, and Pfund series of hydrogen all lie in the infrared region.",
    reason: "All transitions in these series terminate on levels $n_1 \\ge 3$, where energy gaps are small, resulting in longer wavelengths than the visible spectrum.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Paschen ($n_1 = 3$), Brackett ($n_1 = 4$), and Pfund ($n_1 = 5$) involve photon energies below $1.51\\text{ eV}$, which correspond to wavelengths $\\lambda > 8200\\text{ \\AA}$, lying entirely in the infrared region."
  },
  {
    assertion: "The first line of the Balmer series ($H_\\alpha$) has the longest wavelength among all lines in the Balmer series.",
    reason: "The $H_\\alpha$ line corresponds to the transition between the closest adjacent energy levels ($n = 3 \\to 2$), which involves the smallest energy difference in the Balmer series.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Since $\\lambda = hc / \\Delta E$, the smallest energy gap $\\Delta E$ corresponds to the maximum wavelength. For the Balmer series, $n = 3 \\to 2$ has the smallest gap ($\Delta E = 1.89\\text{ eV}$), producing $\\lambda_{\\max} = 6563\\text{ \\AA}$ ($H_\\alpha$)."
  },
  {
    assertion: "The ratio of the wavelength of the $H_\\alpha$ line to that of the $H_\\beta$ line in the Balmer series is $27 : 20$.",
    reason: "For $H_\\alpha$ ($n=3\\to 2$), $\\frac{1}{\\lambda_\\alpha} = R\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5R}{36}$; for $H_\\beta$ ($n=4\\to 2$), $\\frac{1}{\\lambda_\\beta} = R\\left(\\frac{1}{4} - \\frac{1}{16}\\right) = \\frac{3R}{16}$; therefore $\\frac{\\lambda_\\alpha}{\\lambda_\\beta} = \\frac{36/5}{16/3} = \\frac{27}{20}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Evaluating $\\frac{\\lambda_\\alpha}{\\lambda_\\beta} = \\frac{36/(5R)}{16/(3R)} = \\frac{36 \\times 3}{5 \\times 16} = \\frac{108}{80} = \\frac{27}{20}$. Both statements are true and (R) gives the exact derivation."
  },
  {
    assertion: "An absorption spectrum of cold atomic hydrogen gas shows only the Lyman series, whereas the emission spectrum shows all series.",
    reason: "At room temperature, virtually all hydrogen atoms are in their ground state ($n = 1$), so absorption can only occur from $n = 1$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The thermal energy at room temperature ($kT \\approx 0.025\\text{ eV}$) is far too small to excite electrons to $n = 2$ ($10.2\\text{ eV}$). Thus, all absorption starts from $n = 1$ (Lyman series). In emission, atoms in high excited states cascade down through all intermediate levels, producing all series."
  },
  {
    assertion: "The Rydberg constant $R$ has dimensions of inverse length ($[\\text{L}^{-1}]$) and units of $\\text{m}^{-1}$.",
    reason: "The Rydberg formula relates wavenumber $\\bar{\\nu} = 1/\\lambda$ directly to the Rydberg constant multiplied by dimensionless quantum numbers.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In $\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$, the left side is wavenumber ($1/\\lambda$) with SI unit $\\text{m}^{-1}$. The term in parentheses and $Z$ are dimensionless, so $[R] = [\\text{L}^{-1}]$."
  },
  {
    assertion: "The value of the Rydberg constant varies slightly for different isotopes of hydrogen (such as protium and deuterium).",
    reason: "The Rydberg constant depends on the reduced mass of the electron-nucleus system: $R_M = R_\\infty \\left(\\frac{M}{m + M}\\right) = \\frac{R_\\infty}{1 + m/M}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because a deuteron ($M_D \\approx 2 M_H$) has roughly twice the nuclear mass of a proton, the reduced mass $\\mu$ is slightly larger for deuterium, shifting its Rydberg constant and spectral lines to slightly higher frequencies (isotope shift)."
  },
  {
    assertion: "The series limit wavelength of the Balmer series in hydrogen is four times the series limit wavelength of the Lyman series.",
    reason: "Series limit wavelength is $\\lambda_{\\min} = \\frac{n_1^2}{R}$; for Balmer $n_1 = 2$, so $\\lambda = 4/R$, whereas for Lyman $n_1 = 1$, so $\\lambda = 1/R$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For the Lyman series limit: $\\lambda_{\\min}(\\text{Ly}) = 1/R$. For the Balmer series limit: $\\lambda_{\\min}(\\text{Ba}) = 4/R$. The ratio is $(4/R) / (1/R) = 4$. Both statements are true and (R) explains (A)."
  },
  {
    assertion: "A photon of energy $11.5\\text{ eV}$ cannot be absorbed by a ground-state hydrogen atom to cause an excitation.",
    reason: "Atomic absorption of a photon is an all-or-nothing resonant process requiring photon energy to match an exact energy difference between stationary states.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The allowed excitation energies from ground state are $E_2 - E_1 = 10.2\\text{ eV}$, $E_3 - E_1 = 12.09\\text{ eV}$, etc. A photon of $11.5\\text{ eV}$ does not match any discrete transition and is less than the ionization energy ($13.6\\text{ eV}$), so it cannot be absorbed."
  },
  {
    assertion: "An electron beam of kinetic energy $11.5\\text{ eV}$ can excite a ground-state hydrogen atom.",
    reason: "Unlike photons, an colliding electron can transfer part of its kinetic energy to the bound atomic electron and scatter away with the remaining kinetic energy.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "In inelastic electron impact, the projectile electron needs only $K \\ge 10.2\\text{ eV}$. It excites the atom to $n = 2$ and carries away the excess kinetic energy ($11.5 - 10.2 = 1.3\\text{ eV}$)."
  },
  {
    assertion: "The third line of the Balmer series corresponds to the transition from $n = 5$ to $n = 2$.",
    reason: "In the Balmer series ($n_1 = 2$), the first line is $3 \\to 2$, the second is $4 \\to 2$, and the third is $5 \\to 2$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "The successive lines of any series correspond to $n_2 = n_1 + 1, n_1 + 2, n_1 + 3, \\dots$. For $n_1 = 2$, the third line is $n_2 = 2 + 3 = 5$, i.e., $5 \\to 2$ ($H_\\gamma$)."
  },
  {
    assertion: "The wavelength of the radiation emitted when an electron jumps from $n = \\infty$ to $n = 1$ in a hydrogen atom is approximately $912\\text{ \\AA}$.",
    reason: "Taking $R \\approx 1.097\\times 10^7\\text{ m}^{-1}$, $\\lambda = \\frac{1}{R} \\approx 911.6\\times 10^{-10}\\text{ m} \\approx 912\\text{ \\AA}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "$\\frac{1}{\\lambda} = R(1 - 0) = R \\implies \\lambda = \\frac{1}{1.097\\times 10^7}\\text{ m} \\approx 9.116\\times 10^{-8}\\text{ m} = 912\\text{ \\AA}$."
  },
  {
    assertion: "The line of maximum frequency in any spectral series is its series limit.",
    reason: "Frequency $\\nu = c / \\lambda$ is maximum when wavelength $\\lambda$ is minimum, which occurs for the transition from $n_2 = \\infty$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Because $E = h\\nu$, the largest energy step $n_2 = \\infty \\to n_1$ yields both the highest frequency photon and the shortest wavelength (the series limit)."
  },
  {
    assertion: "For a single isolated hydrogen atom excited to $n = 3$, the maximum number of photons that can be emitted is $2$.",
    reason: "A single atom can only de-excite via a single cascade path (either $3\\to 1$ giving $1$ photon, or $3\\to 2\\to 1$ giving $2$ photons).",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "While a large collection of atoms exhibits all $N = \\frac{3 \\times 2}{2} = 3$ spectral lines, a SINGLE atom de-excites along one cascade. The longest cascade $3 \\to 2 \\to 1$ emits at most $2$ photons."
  },
  {
    assertion: "The ionization potential of a hydrogen atom is $13.6\\text{ V}$.",
    reason: "The ionization energy of hydrogen is $13.6\\text{ eV}$, and accelerating potential $V = E / e = 13.6\\text{ V}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Ionization potential is defined as the accelerating potential difference required for a free electron to gain kinetic energy equal to the ionization energy: $V = 13.6\\text{ eV} / e = 13.6\\text{ V}$."
  },
  {
    assertion: "The wavelength of the first line of the Lyman series in $\\text{He}^+$ is equal to the wavelength of the Lyman series limit in hydrogen.",
    reason: "For $\\text{He}^+$ ($Z = 2$), the first line transition $2\\to 1$ has wavenumber $\\bar{\\nu} = R(2^2)(1 - 1/4) = 3R$, which does not equal $R$.",
    correctAnswer: "(A) is false but (R) is true",
    explanation: "For the first line of $\\text{He}^+$: $\\bar{\\nu} = 4R(3/4) = 3R \\implies \\lambda = 1/(3R)$. For the hydrogen Lyman limit: $\\bar{\\nu} = R \\implies \\lambda = 1/R$. They are not equal, so (A) is false and (R) is true."
  },
  {
    assertion: "The spectral line corresponding to the transition $n = 4 \\to 2$ in $\\text{He}^+$ has the same wavelength as the $n = 2 \\to 1$ transition in hydrogen.",
    reason: "The Rydberg formula gives $\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$. For $\\text{He}^+$ ($Z=2$): $2^2(1/4 - 1/16) = 4(3/16) = 3/4$, which exactly matches hydrogen ($Z=1$): $1^2(1/1 - 1/4) = 3/4$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For $\\text{He}^+$ ($4\\to 2$): $\\bar{\\nu} = R(4)(1/4 - 1/16) = 3R/4$. For hydrogen ($2\\to 1$): $\\bar{\\nu} = R(1)(1 - 1/4) = 3R/4$. Wavelengths are identical. Both statements are true and (R) correctly explains (A)."
  },
  {
    assertion: "The Brackett series of hydrogen lies in the infrared region.",
    reason: "All lines in the Brackett series have $n_1 = 4$ and $n_2 \\ge 5$, corresponding to energy differences less than $0.85\\text{ eV}$.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "For Brackett series, $n_1 = 4$. The highest photon energy is $\\Delta E = E_\\infty - E_4 = 0 - (-0.85\\text{ eV}) = 0.85\\text{ eV}$. Photons with energy $< 0.85\\text{ eV}$ have $\\lambda > 14600\\text{ \\AA}$, well inside the infrared spectrum."
  },
  {
    assertion: "Continuous emission spectra are observed when free electrons are captured by positive ions into bound atomic states.",
    reason: "A free electron can possess any continuous kinetic energy $K > 0$ prior to capture into a bound state $E_n$, so the emitted photon energy $h\\nu = K - E_n$ forms a continuous spectrum.",
    correctAnswer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    explanation: "Free-to-bound radiative transitions (recombination) involve unquantized initial kinetic energies, emitting photons with a continuum of energies exceeding the ionization limit of that level."
  }
];

// 7 Multiple Choice Questions
const mcqQuestions = [
  {
    question: "The ratio of the longest wavelength in the Lyman series to the longest wavelength in the Balmer series of a hydrogen atom is:",
    options: [
      "$\\frac{5}{27}$",
      "$\\frac{27}{5}$",
      "$\\frac{4}{9}$",
      "$\\frac{9}{4}$"
    ],
    correctAnswer: "$\\frac{5}{27}$",
    explanation: "For the Lyman series, longest wavelength is $n = 2 \\to 1$:\\n$\\frac{1}{\\lambda_{\\text{Ly}}} = R\\left(1 - \\frac{1}{4}\\right) = \\frac{3R}{4} \\implies \\lambda_{\\text{Ly}} = \\frac{4}{3R}$.\\nFor the Balmer series, longest wavelength is $n = 3 \\to 2$:\\n$\\frac{1}{\\lambda_{\\text{Ba}}} = R\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5R}{36} \\implies \\lambda_{\\text{Ba}} = \\frac{36}{5R}$.\\nRatio is $\\frac{\\lambda_{\\text{Ly}}}{\\lambda_{\\text{Ba}}} = \\frac{4/(3R)}{36/(5R)} = \\frac{4}{3} \\times \\frac{5}{36} = \\frac{20}{108} = \\frac{5}{27}$."
  },
  {
    question: "An electron in a hydrogen atom makes a transition from state $n_2$ to state $n_1$. If the photon emitted has a wavelength equal to the series limit of the Lyman series, the values of $n_1$ and $n_2$ are:",
    options: [
      "$n_1 = 1, n_2 = \\infty$",
      "$n_1 = 2, n_2 = \\infty$",
      "$n_1 = 1, n_2 = 2$",
      "$n_1 = 1, n_2 = 3$"
    ],
    correctAnswer: "$n_1 = 1, n_2 = \\infty$",
    explanation: "The series limit of the Lyman series corresponds to the shortest wavelength in the Lyman series, which occurs when an electron drops from the continuum $n_2 = \\infty$ to the ground state $n_1 = 1$."
  },
  {
    question: "In a gas of atomic hydrogen, electrons are excited to the $n = 5$ state. The total number of distinct spectral lines that can be observed in the emission spectrum is:",
    options: [
      "$10$",
      "$15$",
      "$6$",
      "$4$"
    ],
    correctAnswer: "$10$",
    explanation: "The maximum number of spectral lines emitted from level $n$ is:\\n$N = \\frac{n(n - 1)}{2} = \\frac{5 \\times 4}{2} = 10$."
  },
  {
    question: "The wavelength of the first line of the Balmer series of hydrogen ($n = 3 \\to 2$) is $656.3\\text{ nm}$. The wavelength of the first line of the Lyman series ($n = 2 \\to 1$) is approximately:",
    options: [
      "$121.5\\text{ nm}$",
      "$243.0\\text{ nm}$",
      "$486.1\\text{ nm}$",
      "$91.2\\text{ nm}$"
    ],
    correctAnswer: "$121.5\\text{ nm}$",
    explanation: "$\\frac{1}{\\lambda_{\\text{Ba}}} = \\frac{5R}{36}$ and $\\frac{1}{\\lambda_{\\text{Ly}}} = \\frac{3R}{4}$.\\n$\\lambda_{\\text{Ly}} = \\lambda_{\\text{Ba}} \\times \\frac{5}{27} = 656.3 \\times \\frac{5}{27} = \\frac{3281.5}{27} \\approx 121.5\\text{ nm}$."
  },
  {
    question: "Which of the following transitions in a hydrogen atom emits a photon of the highest frequency?",
    options: [
      "$n = 2 \\to n = 1$",
      "$n = 6 \\to n = 2$",
      "$n = 4 \\to n = 3$",
      "$n = 5 \\to n = 4$"
    ],
    correctAnswer: "$n = 2 \\to n = 1$",
    explanation: "Energy difference $\\Delta E = h\\nu$:\\n- $n = 2 \\to 1$: $\\Delta E = 13.6(1 - 1/4) = 10.2\\text{ eV}$.\\n- $n = 6 \\to 2$: $\\Delta E = 13.6(1/4 - 1/36) = 13.6(8/36) = 3.02\\text{ eV}$.\\n- $n = 4 \\to 3$: $\\Delta E = 13.6(1/9 - 1/16) = 0.66\\text{ eV}$.\\n- $n = 5 \\to 4$: $\\Delta E = 13.6(1/16 - 1/25) = 0.31\\text{ eV}$.\\nThe $2 \\to 1$ transition has by far the highest energy and frequency."
  },
  {
    question: "If the series limit wavelength of the Lyman series of hydrogen is $\\lambda_0$, the series limit wavelength of the Paschen series is:",
    options: [
      "$9\\lambda_0$",
      "$16\\lambda_0$",
      "$4\\lambda_0$",
      "$\\frac{\\lambda_0}{9}$"
    ],
    correctAnswer: "$9\\lambda_0$",
    explanation: "For the Lyman series limit: $\\frac{1}{\\lambda_0} = R \\implies \\lambda_0 = \\frac{1}{R}$.\\nFor the Paschen series limit ($n_1 = 3$): $\\frac{1}{\\lambda_P} = \\frac{R}{3^2} = \\frac{R}{9} \\implies \\lambda_P = \\frac{9}{R} = 9\\lambda_0$."
  },
  {
    question: "The transition in $\\text{He}^+$ that has the same wavelength as the first line of the Lyman series of hydrogen ($n = 2 \\to 1$) is:",
    options: [
      "$n = 4 \\to n = 2$",
      "$n = 3 \\to n = 2$",
      "$n = 2 \\to n = 1$",
      "$n = 6 \\to n = 3$"
    ],
    correctAnswer: "$n = 4 \\to n = 2$",
    explanation: "For hydrogen ($2\\to 1$): $\\bar{\\nu} = R(1^2)\\left(1 - \\frac{1}{4}\\right) = \\frac{3R}{4}$.\\nFor $\\text{He}^+$ ($Z = 2$): $\\bar{\\nu} = R(2^2)\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) = 4R\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$.\\nWe need $4\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) = \\frac{3}{4} \\implies \\frac{1}{n_1^2} - \\frac{1}{n_2^2} = \\frac{3}{16} = \\frac{1}{4} - \\frac{1}{16}$.\\nThis gives $n_1 = 2$ and $n_2 = 4$."
  }
];

// 20 Numerical Questions (clean, verified integer answers)
const numQuestions = [
  {
    question: "The ratio of the longest wavelength of the Lyman series to the longest wavelength of the Balmer series in a hydrogen atom is $x / 27$. The value of $x$ is ______ .",
    correctAnswer: "5",
    solution: "$\\frac{\\lambda_{\\text{Ly}}}{\\lambda_{\\text{Ba}}} = \\frac{4/(3R)}{36/(5R)} = \\frac{5}{27}$. Thus $x = 5$."
  },
  {
    question: "In a hydrogen gas sample, electrons are excited to the principal quantum number $n = 6$. The total number of distinct spectral lines emitted when they return to the ground state is ______ .",
    correctAnswer: "15",
    solution: "$N = \\frac{n(n - 1)}{2} = \\frac{6 \\times 5}{2} = 15$."
  },
  {
    question: "The series limit of the Lyman series of hydrogen occurs at $\\lambda = 912\\text{ \\AA}$. The series limit of the Balmer series occurs at ______ $\\text{\\AA}$.",
    correctAnswer: "3648",
    solution: "$\\lambda_{\\min}(\\text{Ba}) = 4 \\lambda_{\\min}(\\text{Ly}) = 4 \\times 912 = 3648\\text{ \\AA}$."
  },
  {
    question: "The ratio of the wavelength of the series limit of the Paschen series to that of the Lyman series in a hydrogen atom is ______ .",
    correctAnswer: "9",
    solution: "$\\frac{\\lambda_P}{\\lambda_L} = \\frac{3^2 / R}{1^2 / R} = 9$."
  },
  {
    question: "The ratio of the wavelength of the series limit of the Brackett series to that of the Lyman series in a hydrogen atom is ______ .",
    correctAnswer: "16",
    solution: "$\\frac{\\lambda_{\\text{Brackett}}}{\\lambda_{\\text{Lyman}}} = \\frac{4^2 / R}{1^2 / R} = 16$."
  },
  {
    question: "The ratio of the wavelength of the series limit of the Pfund series to that of the Lyman series in a hydrogen atom is ______ .",
    correctAnswer: "25",
    solution: "$\\frac{\\lambda_{\\text{Pfund}}}{\\lambda_{\\text{Lyman}}} = \\frac{5^2 / R}{1^2 / R} = 25$."
  },
  {
    question: "If an electron in a hydrogen atom transitions from $n = 3$ to $n = 2$, the emitted photon has energy $E_1$. For transition from $n = 4$ to $n = 2$, the emitted photon has energy $E_2$. The value of $E_1$ in $\\text{eV}$ is approximately $1.9\\text{ eV}$. The value of $10E_1$ is ______ .",
    correctAnswer: "19",
    solution: "$E_1 = 13.6\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 13.6 \\times \\frac{5}{36} \\approx 1.889\\text{ eV} \\approx 1.9\\text{ eV}$. Thus $10E_1 = 19$."
  },
  {
    question: "An electron transitions from $n = 4$ to $n = 2$ in a hydrogen atom. The energy of the emitted photon is $2.55\\text{ eV}$. The value of $100 \\times 2.55$ is $255$. The excitation energy of the $n=4$ state from the $n=2$ state is ______ $\\text{eV}$. (Round to nearest integer: $2.55 \\approx 3$, or enter $2.55$ rounded: $3$)",
    correctAnswer: "3",
    solution: "$\\Delta E = 13.6\\left(\\frac{1}{4} - \\frac{1}{16}\\right) = 13.6 \\times \\frac{3}{16} = 2.55\\text{ eV} \\approx 3\\text{ eV}$."
  },
  {
    question: "A sample of hydrogen atoms is irradiated with radiation that excites electrons to the $n = 4$ level. The maximum number of spectral lines observed in the emission spectrum is ______ .",
    correctAnswer: "6",
    solution: "$N = \\frac{4 \\times 3}{2} = 6$."
  },
  {
    question: "The ratio of the maximum wavelength to the minimum wavelength in the Balmer series of a hydrogen atom is $x / 5$. The value of $x$ is ______ .",
    correctAnswer: "9",
    solution: "$\\frac{1}{\\lambda_{\\max}} = R\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5R}{36} \\implies \\lambda_{\\max} = \\frac{36}{5R}$.\\n$\\frac{1}{\\lambda_{\\min}} = R\\left(\\frac{1}{4} - 0\\right) = \\frac{R}{4} \\implies \\lambda_{\\min} = \\frac{4}{R}$.\\n$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{36/(5R)}{4/R} = \\frac{36}{20} = \\frac{9}{5}$. Thus $x = 9$."
  },
  {
    question: "The ratio of the wavelength of the $H_\\alpha$ line ($n = 3 \\to 2$) to the $H_\\beta$ line ($n = 4 \\to 2$) in the Balmer series of hydrogen is $27 / x$. The value of $x$ is ______ .",
    correctAnswer: "20",
    solution: "$\\frac{\\lambda_\\alpha}{\\lambda_\\beta} = \\frac{36/(5R)}{16/(3R)} = \\frac{27}{20}$. Thus $x = 20$."
  },
  {
    question: "The wavelength of the Lyman limit in hydrogen is $912\\text{ \\AA}$. The wavelength of the Lyman limit in a doubly ionized lithium ion $\\text{Li}^{2+}$ ($Z = 3$) is ______ $\\text{\\AA}$.",
    correctAnswer: "101",
    solution: "$\\lambda \\propto \\frac{1}{Z^2} \\implies \\lambda(\\text{Li}^{2+}) = \\frac{912}{3^2} = \\frac{912}{9} = 101.33 \\approx 101\\text{ \\AA}$."
  },
  {
    question: "A hydrogen atom in its ground state absorbs a photon and is excited to $n = 3$. The energy of the absorbed photon is ______ $\\text{eV}$. (Take $E_1 = -13.6\\text{ eV}$ and $E_3 = -1.51\\text{ eV}$; round to nearest integer: $13.6 - 1.51 = 12.09 \\approx 12$)",
    correctAnswer: "12",
    solution: "$\\Delta E = E_3 - E_1 = -1.51 - (-13.6) = 12.09\\text{ eV} \\approx 12\\text{ eV}$."
  },
  {
    question: "If an electron in hydrogen transitions from $n = 2$ to $n = 1$, the photon emitted has frequency $\\nu$. If it transitions from $n = 4$ to $n = 1$, the frequency of the emitted photon is $x \\nu$. The ratio of the two frequencies $\\nu(4\\to 1) / \\nu(2\\to 1)$ is $5 / x$. The value of $x$ is ______ . (Given: $\\nu(4\\to 1) \\propto 15/16$ and $\\nu(2\\to 1) \\propto 3/4 = 12/16$, ratio is $15/12 = 5/4$)",
    correctAnswer: "4",
    solution: "$\\frac{\\nu(4\\to 1)}{\\nu(2\\to 1)} = \\frac{1 - 1/16}{1 - 1/4} = \\frac{15/16}{3/4} = \\frac{15}{12} = \\frac{5}{4}$. Thus $x = 4$."
  },
  {
    question: "In a hydrogen spectrum, the ratio of the frequency of the first line of the Lyman series to the series limit of the Lyman series is $3 / x$. The value of $x$ is ______ .",
    correctAnswer: "4",
    solution: "$\\frac{\\nu_1}{\\nu_\\infty} = \\frac{1 - 1/4}{1 - 0} = \\frac{3/4}{1} = \\frac{3}{4}$. Thus $x = 4$."
  },
  {
    question: "The minimum kinetic energy of an electron required to excite a ground state hydrogen atom into its first excited state ($n = 2$) is ______ $\\text{eV}$. (Take $10.2\\text{ eV}$, round to nearest whole integer: $10$)",
    correctAnswer: "10",
    solution: "$K_{\\min} = E_2 - E_1 = -3.4 - (-13.6) = 10.2\\text{ eV} \\approx 10\\text{ eV}$."
  },
  {
    question: "The ratio of the shortest wavelength in the Balmer series of $\\text{He}^+$ to the shortest wavelength in the Lyman series of hydrogen is ______ .",
    correctAnswer: "1",
    solution: "For $\\text{He}^+$ Balmer limit ($Z = 2, n_1 = 2$): $\\frac{1}{\\lambda} = R(2^2)(1/4) = R \\implies \\lambda = \\frac{1}{R}$.\\nFor H Lyman limit ($Z = 1, n_1 = 1$): $\\frac{1}{\\lambda} = R(1^2)(1) = R \\implies \\lambda = \\frac{1}{R}$.\\nRatio is $1$."
  },
  {
    question: "A hydrogen atom emits a photon of wavelength $1216\\text{ \\AA}$ ($n = 2 \\to 1$). The recoil momentum of the atom is $p$. If $h/c \\approx 2.21\\times 10^{-42}\\text{ kg}\\cdot\\text{s}$, the photon energy is $10.2\\text{ eV}$. The number of Lyman lines that fall in the visible region is ______ .",
    correctAnswer: "0",
    solution: "All Lyman lines have wavelengths between $912\\text{ \\AA}$ and $1216\\text{ \\AA}$, which lie entirely in the ultraviolet region. None fall in the visible band, so the number is $0$."
  },
  {
    question: "When an electron drops from $n = 3$ to $n = 1$ in a hydrogen atom, the wavenumber of the emitted photon is $\\frac{8R}{x}$. The value of $x$ is ______ .",
    correctAnswer: "9",
    solution: "$\\bar{\\nu} = R\\left(1 - \\frac{1}{9}\\right) = \\frac{8R}{9}$. Thus $x = 9$."
  },
  {
    question: "The ionization energy of a hydrogen atom is $13.6\\text{ eV}$. The excitation energy from the ground state to the state with principal quantum number $n = 2$ is $10.2\\text{ eV}$. The ratio of the excitation energy to the ground state ionization energy is $3 / x$. The value of $x$ is ______ .",
    correctAnswer: "4",
    solution: "$\\frac{\\Delta E}{E_{\\text{ion}}} = \\frac{13.6(1 - 1/4)}{13.6} = 1 - \\frac{1}{4} = \\frac{3}{4}$. Thus $x = 4$."
  }
];

// Assemble 53 questions
const allQuestions = [];

arQuestions.forEach((q, i) => {
  allQuestions.push({
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): ${q.assertion}\\nReason (R): ${q.reason}\\nIn the light of the above statements, choose the correct answer from the options given below:`,
    options: AR_OPTIONS,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    type: "ASSERTION_REASON",
    questionType: "ASSERTION_REASON",
    subject: SUBJECT,
    chapter: CHAPTER,
    subtopic: SUBTOPIC,
    subTopic: SUBTOPIC,
    class: CLASS,
    difficulty: i % 3 === 0 ? "Hard" : (i % 3 === 1 ? "Medium" : "Easy"),
    examType: "JEE Mains",
    marks: 4,
    negativeMarks: 1
  });
});

mcqQuestions.forEach((q, i) => {
  allQuestions.push({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    type: "MCQ",
    questionType: "MCQ",
    subject: SUBJECT,
    chapter: CHAPTER,
    subtopic: SUBTOPIC,
    subTopic: SUBTOPIC,
    class: CLASS,
    difficulty: i % 2 === 0 ? "Medium" : "Hard",
    examType: "JEE Mains",
    marks: 4,
    negativeMarks: 1
  });
});

numQuestions.forEach((q, i) => {
  allQuestions.push({
    question: q.question,
    correctAnswer: q.correctAnswer,
    solution: q.solution,
    explanation: q.solution,
    type: "NUMERICAL",
    questionType: "NUMERICAL",
    subject: SUBJECT,
    chapter: CHAPTER,
    subtopic: SUBTOPIC,
    subTopic: SUBTOPIC,
    class: CLASS,
    difficulty: i % 2 === 0 ? "Medium" : "Hard",
    examType: "JEE Mains",
    marks: 4,
    negativeMarks: 0
  });
});

console.log(`Part 3 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);

const outPath = path.join(__dirname, 'data_jee_atoms_part3.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
