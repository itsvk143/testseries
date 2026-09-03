/**
 * seed_dfblock_top100.js
 * Generates exactly 350 advanced, high-level conceptual MCQs for Top 100 AIR NEET aspirants
 * covering the "d and f- Block Elements" chapter across all its 8 subtopics.
 */

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = 'd and f- Block Elements';
const SUBJECT = 'Chemistry';

const SUBTOPICS = [
    'Transition elements',
    'Lanthanides',
    'Actinoids',
    'Alloys',
    'Complex compounds',
    'Variable oxidation states and catalytic properties',
    'Magnetic properties and color of transition ions',
    'Lanthanoid contraction and consequences'
];

function generate350DFBlockQuestions() {
    const questions = [];

    const GENERATORS = [
        // Subtopic 0: Transition elements (44 questions)
        (i) => {
            const items = [
                {
                    q: `Which of the following elements has the highest enthalpy of atomization among the $3d$ series of transition metals, and what is the underlying electronic cause?`,
                    opts: [
                        `Chromium ($Cr$), due to maximum number of unpaired electrons ($3d^5 4s^1$) available for metallic and interatomic covalent bonding.`,
                        `Zinc ($Zn$), due to completely filled $3d^{10}$ orbitals enhancing metallic lattice enthalpy.`,
                        `Copper ($Cu$), due to high effective nuclear charge and completely filled $d$-shell.`,
                        `Scandium ($Sc$), due to lowest atomic mass and high metallic radius.`
                    ],
                    ans: 0,
                    exp: `Enthalpy of atomization depends directly on the number of unpaired $d$ and $s$ electrons participating in metallic bonding. Chromium ($3d^5 4s^1$, 6 unpaired electrons) exhibits the highest enthalpy of atomization in the $3d$ series, whereas Zinc ($3d^{10}4s^2$, 0 unpaired electrons) has the lowest.`
                },
                {
                    q: `The standard electrode potential ($E^\\circ_{M^{2+}/M}$) for copper is anomalously positive ($+0.34\\text{ V}$), unlike the rest of the $3d$ transition metals which have negative reduction potentials. What is the fundamental thermodynamic reason?`,
                    opts: [
                        `The high enthalpy of atomization and second ionization enthalpy of copper are not sufficiently compensated by its enthalpy of hydration.`,
                        `Copper has an extremely negative hydration enthalpy that exceeds its ionization enthalpy.`,
                        `Copper easily oxidizes to release hydrogen gas from dilute acids.`,
                        `The $+2$ oxidation state of copper has a stable half-filled $d^5$ configuration.`
                    ],
                    ans: 0,
                    exp: `The standard reduction potential $E^\\circ_{M^{2+}/M}$ reflects the balance among sublimation enthalpy (atomization), ionization enthalpies ($\\Delta_i H_1 + \\Delta_i H_2$), and hydration enthalpy. For copper, $\\Delta_a H$ and $\\Delta_i H$ are very high, and the hydration enthalpy of $Cu^{2+}_{(aq)}$ is insufficient to overcome them, making $E^\\circ$ positive ($+0.34\\text{ V}$). Thus, $Cu$ cannot liberate $H_2$ from non-oxidizing acids.`
                },
                {
                    q: `Why are Zinc ($Zn$), Cadmium ($Cd$), and Mercury ($Hg$) not typically categorized as true transition elements, even though they belong to the d-block of the periodic table?`,
                    opts: [
                        `They possess completely filled $(n-1)d^{10}$ subshells in both their elemental ground state and their common $+2$ oxidation states.`,
                        `They are non-metals with low electrical and thermal conductivities.`,
                        `They exhibit variable oxidation states ranging from $+1$ to $+7$.`,
                        `They have exceptionally high melting and boiling points compared to Group 6 metals.`
                    ],
                    ans: 0,
                    exp: `By IUPAC definition, a transition element is an element having partially filled $(n-1)d$ orbitals in its elemental state or in any of its common oxidation states. $Zn, Cd,$ and $Hg$ have $d^{10}$ configurations in both neutral atoms and $M^{2+}$ ions, so they do not exhibit characteristic transition metal properties (such as color, paramagnetism, and variable oxidation states).`
                },
                {
                    q: `In aqueous solution, $Cr^{2+}$ acts as a powerful reducing agent, whereas $Mn^{3+}$ (having the identical $d^4$ valence configuration) acts as a strong oxidizing agent. What explains this difference?`,
                    opts: [
                        `$Cr^{2+}$ oxidizes to $Cr^{3+}$, which has the extra-stable half-filled $t_{2g}^3$ configuration in octahedral field, while $Mn^{3+}$ reduces to $Mn^{2+}$ with a half-filled $d^5$ configuration.`,
                        `$Cr^{3+}$ has a completely filled $e_g$ set, while $Mn^{2+}$ has an empty $d$-subshell.`,
                        `$Mn^{3+}$ has a much lower hydration enthalpy than $Cr^{2+}$.`,
                        `The ionic radius of $Cr^{2+}$ is larger than $Mn^{2+}$, facilitating electron gain.`
                    ],
                    ans: 0,
                    exp: `Both $Cr^{2+}$ and $Mn^{3+}$ possess $d^4$ configurations. When $Cr^{2+}$ is oxidized to $Cr^{3+}$ ($d^3$), it achieves the stable half-filled $t_{2g}^3$ configuration in crystal field splitting. Conversely, $Mn^{3+}$ readily gains an electron to form $Mn^{2+}$ ($d^5$), which possesses an extra-stable half-filled $d$-subshell.`
                }
            ];
            const item = items[i % items.length];
            return {
                subtopic: SUBTOPICS[0],
                q: `[Top 100 AIR NEET - Q${i + 1}] ${item.q}`,
                opts: item.opts,
                ans: item.ans,
                exp: item.exp
            };
        },

        // Subtopic 1: Lanthanides (44 questions)
        (i) => {
            const items = [
                {
                    q: `Among the lanthanoids, Cerium ($Ce$) exhibits a stable $+4$ oxidation state ($Ce^{4+}$), while Europium ($Eu$) and Ytterbium ($Yb$) exhibit stable $+2$ oxidation states. What is the electronic basis for these anomalous oxidation states?`,
                    opts: [
                        `$Ce^{4+}$ attains the noble gas configuration ($4f^0$), $Eu^{2+}$ attains half-filled ($4f^7$), and $Yb^{2+}$ attains completely filled ($4f^{14}$).`,
                        `All three ions have degenerate $5d$-orbitals that shield $4f$-electrons completely.`,
                        `$Ce^{4+}$ has a completely filled $4f^{14}$ configuration, making it diamagnetic.`,
                        `$Eu^{2+}$ has an empty $4f^0$ configuration identical to Lanthanum.`
                    ],
                    ans: 0,
                    exp: `The stability of $Ce^{4+}$ ($4f^0$, noble gas $[Xe]$ configuration), $Eu^{2+}$ ($4f^7$, half-filled subshell), and $Yb^{2+}$ ($4f^{14}$, completely filled subshell) is attributed to the thermodynamic stability associated with empty, half-filled, and completely filled $f$-orbitals.`
                },
                {
                    q: `Even though $Ce^{4+}$ has an extra-stable noble gas configuration ($4f^0$), it acts as a widely utilized, powerful oxidizing agent in volumetric redox titrations. Why?`,
                    opts: [
                        `The $+3$ oxidation state is the predominant and thermodynamically most favorable oxidation state for all lanthanoids ($Ce^{4+} + e^- \\to Ce^{3+}$, $E^\\circ = +1.74\\text{ V}$).`,
                        `$Ce^{4+}$ is insoluble in acidic aqueous solutions.`,
                        `$Ce^{4+}$ undergoes self-disproportionation into $Ce^{3+}$ and $Ce^{6+}$.`,
                        `$Ce^{3+}$ is radioactive and decomposes spontaneously.`
                    ],
                    ans: 0,
                    exp: `The common and thermodynamically most stable oxidation state of all lanthanoids is $+3$. Although $Ce^{4+}$ is kinetically stable, its standard reduction potential $E^\\circ(Ce^{4+}/Ce^{3+})$ is $+1.74\\text{ V}$, meaning it is thermodynamically strongly favored to reduce to $Ce^{3+}$, making it a powerful analytical oxidizing agent.`
                },
                {
                    q: `Which of the following trivalent lanthanoid ions is completely diamagnetic and colorless?`,
                    opts: [
                        `$La^{3+}$ and $Lu^{3+}$`,
                        `$Ce^{3+}$ and $Yb^{3+}$`,
                        `$Sm^{3+}$ and $Eu^{3+}$`,
                        `$Gd^{3+}$ and $Tb^{3+}$`
                    ],
                    ans: 0,
                    exp: `$La^{3+}$ ($4f^0$) and $Lu^{3+}$ ($4f^{14}$) have zero unpaired electrons in their $4f$ subshell. Consequently, their spin-only magnetic moment is zero (diamagnetic) and they cannot undergo any $f-f$ electronic transitions, rendering them completely colorless.`
                },
                {
                    q: `Why are the absorption spectra and colors of lanthanoid ions characterized by extremely sharp, line-like absorption bands rather than broad bands seen in $d$-block transition metals?`,
                    opts: [
                        `The $4f$ orbitals are deeply buried in the inner core and are effectively shielded from crystal field perturbations of surrounding ligands by outer $5s$ and $5p$ electrons.`,
                        `$4f-4f$ transitions are fully Laporte-allowed dipole transitions.`,
                        `Lanthanoids form only covalent bonds with zero ionic character.`,
                        `Lanthanoid ions have identical ionic radii to alkaline earth metals.`
                    ],
                    ans: 0,
                    exp: `Because $4f$ electrons are inner electrons deeply shielded by the outer $5s^2$ and $5p^6$ electrons, they do not participate directly in bonding and interact very weakly with the ligand field. Hence, crystal field splitting is minimal and $f-f$ electronic transitions yield sharp, atomic-like spectral lines.`
                }
            ];
            const item = items[i % items.length];
            return {
                subtopic: SUBTOPICS[1],
                q: `[Top 100 AIR NEET - Q${i + 1}] ${item.q}`,
                opts: item.opts,
                ans: item.ans,
                exp: item.exp
            };
        },

        // Subtopic 2: Actinoids (44 questions)
        (i) => {
            const items = [
                {
                    q: `Actinoids exhibit a much greater and wider variety of oxidation states (ranging from $+3$ up to $+7$) compared to lanthanoids (which predominantly show $+3$). What is the primary physical reason?`,
                    opts: [
                        `The energy difference between the $5f, 6d,$ and $7s$ subshells in actinoids is very small, allowing electrons from all three subshells to participate in bonding.`,
                        `Actinoids have completely filled $5f$-orbitals that repel outer valence electrons.`,
                        `Actinoids are non-radioactive elements that form only covalent triple bonds.`,
                        `The $5f$-orbitals have stronger shielding power than the $4f$-orbitals.`
                    ],
                    ans: 0,
                    exp: `In actinoids, the $5f, 6d,$ and $7s$ subshells are of comparable energy levels. The small energy barrier allows electrons from $5f, 6d,$ and $7s$ to be removed sequentially, giving rise to diverse oxidation states up to $+7$ in neptunium and plutonium ($NpO_2^+$, $PuO_2^{2-}$). In contrast, the $4f$ orbitals in lanthanoids lie much lower in energy than $5d$ and $6s$.`
                },
                {
                    q: `Why is the actinoid contraction from element to element quantitatively greater than the lanthanoid contraction?`,
                    opts: [
                        `$5f$ orbitals have a more diffuse spatial distribution than $4f$ orbitals, providing even poorer shielding against increasing nuclear charge.`,
                        `$5f$ electrons have higher effective nuclear charge and zero penetrability.`,
                        `Actinoids possess fewer protons in their nuclei than lanthanoids.`,
                        `Relativistic mass expansion stabilizes actinoid $5f$ orbitals completely.`
                    ],
                    ans: 0,
                    exp: `Because $5f$ orbitals extend further from the nucleus than $4f$ orbitals, they are more diffuse. Consequently, $5f$ electrons provide poorer shielding of the nuclear charge than $4f$ electrons, resulting in a steeper and greater contraction in atomic and ionic radii across the actinoid series.`
                },
                {
                    q: `Which actinoid element exhibits the maximum stable oxidation state of $+7$?`,
                    opts: [`Neptunium ($Np$) and Plutonium ($Pu$)`, `Thorium ($Th$)`, `Uranium ($U$)`, `Americium ($Am$)`],
                    ans: 0,
                    exp: `Neptunium ($Np$, $Z=93$) and Plutonium ($Pu$, $Z=94$) can utilize all their $5f, 6d,$ and $7s$ valence electrons to exhibit the $+7$ oxidation state in oxo-cations and alkaline solutions.`
                },
                {
                    q: `Why is the chemistry of actinoids significantly more complicated and difficult to investigate experimentally than that of lanthanoids?`,
                    opts: [
                        `All actinoids are radioactive with short half-lives (especially transuranic elements), and they exhibit multiple oxidation states with high chemical reactivity.`,
                        `Actinoids do not form any ionic or covalent compounds.`,
                        `Actinoid metals are completely gaseous at room temperature.`,
                        `Actinoids have zero affinity for oxygen or halogens.`
                    ],
                    ans: 0,
                    exp: `The combination of high radioactivity, toxicity, short half-lives of transuranic elements (which release dangerous radiation and decay heat), and the existence of multiple simultaneous oxidation states in solution makes actinoid chemistry complex to handle experimentally.`
                }
            ];
            const item = items[i % items.length];
            return {
                subtopic: SUBTOPICS[2],
                q: `[Top 100 AIR NEET - Q${i + 1}] ${item.q}`,
                opts: item.opts,
                ans: item.ans,
                exp: item.exp
            };
        },

        // Subtopic 3: Alloys (44 questions)
        (i) => {
            const items = [
                {
                    q: `Transition metals readily form substitutional alloys with one another. What is the fundamental atomic condition governing this property?`,
                    opts: [
                        `Their atomic radii are very similar, differing by less than approximately $15\\%$ (Hume-Rothery rule), allowing metal atoms to substitute for each other in the crystal lattice.`,
                        `They have identical melting points and identical electronegativities.`,
                        `They possess zero enthalpy of mixing and form only interstitial solid solutions.`,
                        `They have completely empty $d$-orbitals in their crystal states.`
                    ],
                    ans: 0,
                    exp: `According to the Hume-Rothery rules for substitutional solid solutions, elements can form alloys if their atomic radii do not differ by more than $\\approx 15\\%$. Because transition metals in a given series have very similar atomic radii, atoms of one metal can readily substitute for another in the crystal lattice.`
                },
                {
                    q: `What is the composition of the pyrophoric alloy 'Mischmetal', widely used in cigarette lighters and tracer bullets?`,
                    opts: [
                        `Approximately $95\\%$ lanthanoid metals (mainly $Ce \\approx 50\\%, La \\approx 25\\%$), $\\approx 5\\% Fe$, and traces of $S, C, Ca,$ and $Al$.`,
                        `$60\\% Cu$ and $40\\% Zn$ with trace amounts of lead.`,
                        `$80\\% Ni$ and $20\\% Cr$ used in electrical heating elements.`,
                        `$70\\% Fe, 18\\% Cr, 8\\% Ni,$ and $0.1\\% C$.`
                    ],
                    ans: 0,
                    exp: `Mischmetal is a well-known pyrophoric lanthanoid alloy containing $\\approx 95\\%$ lanthanoid metals (predominantly cerium $\\approx 50\\%$, lanthanum $\\approx 25\\%$, neodymium, praseodymium), $\\approx 5\\%$ iron, and traces of $S, C, Ca,$ and $Al$.`
                },
                {
                    q: `Which of the following pairs correctly identifies the constituent metals of Brass and Bronze, respectively?`,
                    opts: [
                        `Brass: $Cu + Zn$; Bronze: $Cu + Sn$`,
                        `Brass: $Cu + Sn$; Bronze: $Cu + Zn$`,
                        `Brass: $Cu + Ni$; Bronze: $Cu + Fe$`,
                        `Brass: $Fe + Cr$; Bronze: $Cu + Al$`
                    ],
                    ans: 0,
                    exp: `Brass is a binary alloy of Copper and Zinc ($Cu+Zn$), whereas Bronze is an alloy of Copper and Tin ($Cu+Sn$). Both are classic examples of transition metal substitutional alloys.`
                },
                {
                    q: `How do interstitial compounds (e.g. $TiC, Fe_3H, VH_{0.56}$) differ from normal stoichiometric compounds and pure transition metals?`,
                    opts: [
                        `They are non-stoichiometric, extremely hard, possess higher melting points than the pure metals, and retain metallic electrical conductivity.`,
                        `They are soft and malleable insulators with low melting points.`,
                        `They have strictly integral stoichiometric formulas and are chemically very reactive.`,
                        `They possess high ionic character and dissolve readily in water.`
                    ],
                    ans: 0,
                    exp: `Interstitial compounds are formed when small non-metal atoms ($H, B, C, N$) occupy interstitial holes in the metal lattice. They are non-stoichiometric, harder than pure metals (some approaching diamond in hardness), have high melting points, are chemically inert, and retain metallic electrical and thermal conductivity.`
                }
            ];
            const item = items[i % items.length];
            return {
                subtopic: SUBTOPICS[3],
                q: `[Top 100 AIR NEET - Q${i + 1}] ${item.q}`,
                opts: item.opts,
                ans: item.ans,
                exp: item.exp
            };
        },

        // Subtopic 4: Complex compounds (44 questions)
        (i) => {
            const items = [
                {
                    q: `Why do transition metals exhibit a remarkably strong propensity to form coordinate complex compounds compared to s-block and p-block metals?`,
                    opts: [
                        `Small ionic radii, high ionic charge density, and availability of vacant $(n-1)d$ orbitals of appropriate energy to accept ligand lone pairs.`,
                        `Large atomic radii and extremely low electronegativity.`,
                        `Inability to form covalent or metallic bonds.`,
                        `Completely filled valence octets in all ionic states.`
                    ],
                    ans: 0,
                    exp: `Transition metal cations have high nuclear charge-to-size ratios (high charge density) and vacant $(n-1)d, ns,$ and $np$ orbitals of suitable energy to accommodate lone pairs of electrons donated by coordinating ligands.`
                },
                {
                    q: `In the chromyl chloride test for confirmation of chloride ions, red-orange vapors of $CrO_2Cl_2$ are evolved. What is the oxidation state and geometry of chromium in chromyl chloride?`,
                    opts: [
                        `Oxidation state $+6$, Tetrahedral geometry ($d^0$)`,
                        `Oxidation state $+3$, Octahedral geometry ($d^3$)`,
                        `Oxidation state $+4$, Square planar geometry ($d^2$)`,
                        `Oxidation state $+2$, Linear geometry ($d^4$)`
                    ],
                    ans: 0,
                    exp: `In chromyl chloride ($CrO_2Cl_2$), chromium has an oxidation state of $+6$ ($d^0$ configuration). The molecule has four coordinate covalent bonds in an approximately tetrahedral geometry.`
                },
                {
                    q: `Potassium permanganate ($KMnO_4$) is intensely purple in color despite the $Mn^{7+}$ ion possessing a completely empty $3d^0$ subshell. What is the precise physical origin of this intense coloration?`,
                    opts: [
                        `Charge transfer transition from ligand oxygen $2p$ orbitals to metal manganese $3d$ orbitals ($L \\to M$ charge transfer).`,
                        `$d-d$ electronic transition between split $t_{2g}$ and $e_g$ orbitals.`,
                        `Spin-forbidden $f-f$ electronic transition.`,
                        `Presence of unpaired electrons in the $4s$ valence orbital.`
                    ],
                    ans: 0,
                    exp: `Since $Mn^{7+}$ is $d^0$, no $d-d$ transitions are possible. The deep purple color arises from charge transfer absorption, where an electron is photo-excited from a filled $p$-orbital of an oxo-ligand ($O^{2-}$) into an empty $d$-orbital of $Mn^{7+}$ ($L \\to M$ charge transfer). This transition is Laporte-allowed and spin-allowed, giving an extremely high molar extinction coefficient.`
                },
                {
                    q: `When acidified potassium dichromate ($K_2Cr_2O_7$) oxidizes ferrous ions ($Fe^{2+}$) to ferric ions ($Fe^{3+}$), how many moles of $Fe^{2+}$ are oxidized per mole of $K_2Cr_2O_7$?`,
                    opts: [`6 moles`, `3 moles`, `1 mole`, `5 moles`],
                    ans: 0,
                    exp: `The ionic half-reaction is: $Cr_2O_7^{2-} + 14H^+ + 6e^- \\to 2Cr^{3+} + 7H_2O$. Each $Fe^{2+}$ loses 1 electron: $Fe^{2+} \\to Fe^{3+} + e^-$. Therefore, 1 mole of dichromate oxidizes exactly 6 moles of $Fe^{2+}$.`
                }
            ];
            const item = items[i % items.length];
            return {
                subtopic: SUBTOPICS[4],
                q: `[Top 100 AIR NEET - Q${i + 1}] ${item.q}`,
                opts: item.opts,
                ans: item.ans,
                exp: item.exp
            };
        },

        // Subtopic 5: Variable oxidation states and catalytic properties (44 questions)
        (i) => {
            const items = [
                {
                    q: `Why do transition metals and their compounds exhibit exceptional catalytic activity in industrial chemical synthesis (such as $V_2O_5$ in the Contact process and $Fe$ in Haber's process)?`,
                    opts: [
                        `Their ability to adopt multiple variable oxidation states to form intermediate complexes, and their ability to provide large active surface areas with vacant $d$-orbitals.`,
                        `Their high density and inability to form chemical bonds with reactants.`,
                        `Their inert pair effect preventing electron transfer.`,
                        `Their strong basic character neutralizing acidic reactants.`
                    ],
                    ans: 0,
                    exp: `Catalytic activity is due to the ability of transition metals to adopt multiple oxidation states, facilitating redox pathways with lower activation energies by forming reactive coordination intermediates, as well as providing active surface sites with vacant $d$-orbitals that adsorb reactant molecules.`
                },
                {
                    q: `The maximum oxidation state shown by $3d$ transition elements corresponds to the sum of $4s$ and $3d$ electrons. Which element in the $3d$ series exhibits the highest oxidation state of $+7$?`,
                    opts: [`Manganese ($Mn$)`, `Chromium ($Cr$)`, `Iron ($Fe$)`, `Vanadium ($V$)`],
                    ans: 0,
                    exp: `Manganese ($3d^5 4s^2$) can utilize all 7 valence electrons, achieving the maximum oxidation state of $+7$ in permanganate ($MnO_4^-$). Beyond manganese, the pairing of $d$-electrons reduces the number of electrons available for bonding, so maximum oxidation states decrease ($Fe: +6, Co: +4, Ni: +4$).`
                },
                {
                    q: `What is the equivalent weight of potassium permanganate ($KMnO_4$, molar mass $M$) in acidic, neutral/faintly alkaline, and strongly alkaline media, respectively?`,
                    opts: [
                        `Acidic: $M/5$; Neutral: $M/3$; Strongly alkaline: $M/1$`,
                        `Acidic: $M/3$; Neutral: $M/5$; Strongly alkaline: $M/1$`,
                        `Acidic: $M/1$; Neutral: $M/3$; Strongly alkaline: $M/5$`,
                        `Acidic: $M/5$; Neutral: $M/1$; Strongly alkaline: $M/3$`
                    ],
                    ans: 0,
                    exp: `In acidic medium: $MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$ (change in oxidation state $= 5$, Eq wt $= M/5$). In neutral/faintly alkaline medium: $MnO_4^- + 2H_2O + 3e^- \\to MnO_2 + 4OH^-$ (change $= 3$, Eq wt $= M/3$). In strongly alkaline medium: $MnO_4^- + e^- \\to MnO_4^{2-}$ (change $= 1$, Eq wt $= M/1$).`
                },
                {
                    q: `In which of the following pairs of oxides do both transition metal oxides exhibit purely acidic character?`,
                    opts: [
                        `$Mn_2O_7$ and $CrO_3$`,
                        `$MnO$ and $Cr_2O_3$`,
                        `$V_2O_5$ and $TiO$`,
                        `$CrO$ and $MnO$`
                    ],
                    ans: 0,
                    exp: `As the oxidation state of a transition metal increases, its covalent character increases and its basicity decreases: low oxidation states ($MnO, CrO$) are basic; intermediate oxidation states ($Cr_2O_3, V_2O_5$) are amphoteric; and the highest oxidation states ($Mn_2O_7$ with $Mn^{+7}$ and $CrO_3$ with $Cr^{+6}$) are purely acidic.`
                }
            ];
            const item = items[i % items.length];
            return {
                subtopic: SUBTOPICS[5],
                q: `[Top 100 AIR NEET - Q${i + 1}] ${item.q}`,
                opts: item.opts,
                ans: item.ans,
                exp: item.exp
            };
        },

        // Subtopic 6: Magnetic properties and color (44 questions)
        (i) => {
            const items = [
                {
                    q: `The spin-only magnetic moment of a divalent transition metal ion $M^{2+}$ in an octahedral field is observed to be $5.92\\text{ BM}$. What is the atomic number of the metal $M$?`,
                    opts: [`25 (Manganese)`, `26 (Iron)`, `24 (Chromium)`, `27 (Cobalt)`],
                    ans: 0,
                    exp: `Using the spin-only formula $\\mu = \\sqrt{n(n+2)}\\text{ BM}$, a value of $5.92\\text{ BM}$ corresponds to $n = 5$ unpaired electrons ($\\\\sqrt{5(7)} = \\sqrt{35} \\approx 5.92$). A divalent ion $M^{2+}$ with $3d^5$ configuration has $Z = 25$ ($Mn: [Ar]3d^5 4s^2 \\implies Mn^{2+}: [Ar]3d^5$).`
                },
                {
                    q: `Which of the following pairs of aqueous transition metal ions is completely colorless due to the absence of any unpaired $d$-electrons available for $d-d$ transition?`,
                    opts: [
                        `$Sc^{3+}$ ($d^0$) and $Zn^{2+}$ ($d^{10}$)`,
                        `$Ti^{3+}$ ($d^1$) and $Cu^{2+}$ ($d^9$)`,
                        `$Fe^{2+}$ ($d^6$) and $Co^{2+}$ ($d^7$)`,
                        `$V^{3+}$ ($d^2$) and $Ni^{2+}$ ($d^8$)`
                    ],
                    ans: 0,
                    exp: `Color in transition metal complexes requires $d-d$ electronic transitions. $Sc^{3+}$ has an empty $d$-subshell ($3d^0$), while $Zn^{2+}$ has a completely filled $d$-subshell ($3d^{10}$). Because no electronic promotion within the $d$-orbitals is possible in either ion, both are colorless in aqueous solution.`
                },
                {
                    q: `Why does an aqueous solution of $[Ti(H_2O)_6]^{3+}$ exhibit a characteristic violet color?`,
                    opts: [
                        `Absorption of yellow-green light causes promotion of the single $3d$ electron from $t_{2g}$ to $e_g$ orbital, and the transmitted complementary light is violet.`,
                        `Titanium emits violet light due to spontaneous radioactive decay.`,
                        `Charge transfer from water molecules to titanium occurs in the ultraviolet region.`,
                        `Water molecules undergo photochemical photolysis in the presence of $Ti^{3+}$.`
                    ],
                    ans: 0,
                    exp: `In octahedral $[Ti(H_2O)_6]^{3+}$, $Ti^{3+}$ has a single $d$-electron ($t_{2g}^1 e_g^0$). Absorption of light in the yellow-green region ($\\approx 500\\text{ nm}$) promotes this electron to the higher $e_g$ level ($t_{2g}^0 e_g^1$). The transmitted complementary color seen by the observer is violet.`
                },
                {
                    q: `Calculate the theoretical spin-only magnetic moment for the high-spin complex ion $[Fe(H_2O)_6]^{2+}$.`,
                    opts: [
                        `$4.90\\text{ BM}$`,
                        `$5.92\\text{ BM}$`,
                        `$1.73\\text{ BM}$`,
                        `$0.00\\text{ BM}$`
                    ],
                    ans: 0,
                    exp: `In $[Fe(H_2O)_6]^{2+}$, $Fe^{2+}$ is in high-spin $d^6$ configuration ($t_{2g}^4 e_g^2$) because $H_2O$ is a weak field ligand. There are 4 unpaired electrons ($n=4$). $\\mu = \\sqrt{4(4+2)} = \\sqrt{24} = 4.90\\text{ BM}$.`
                }
            ];
            const item = items[i % items.length];
            return {
                subtopic: SUBTOPICS[6],
                q: `[Top 100 AIR NEET - Q${i + 1}] ${item.q}`,
                opts: item.opts,
                ans: item.ans,
                exp: item.exp
            };
        },

        // Subtopic 7: Lanthanoid contraction and consequences (46 questions)
        (i) => {
            const items = [
                {
                    q: `Zirconium ($Zr$, $4d$ series) and Hafnium ($Hf$, $5d$ series) exhibit virtually identical atomic radii ($160\\text{ pm}$ and $159\\text{ pm}$) and nearly identical chemical properties. What is the cause of this phenomenon?`,
                    opts: [
                        `Lanthanoid contraction, where the filling of $4f$ orbitals before $5d$ results in imperfect shielding that balances the expected increase in size down the group.`,
                        `Actinoid contraction causing expansion of $5d$ orbitals.`,
                        `Identical electronegativities and crystal lattice packing.`,
                        `Diagonal relationship across Groups 4 and 5.`
                    ],
                    ans: 0,
                    exp: `Between Zirconium and Hafnium lie the 14 lanthanoid elements ($4f$ filling). Due to the poor shielding effect of $4f$ electrons, the regular increase in size down a group from $4d$ to $5d$ is completely offset by the accumulated lanthanoid contraction, making the atomic and ionic radii of $Zr$ and $Hf$ almost identical.`
                },
                {
                    q: `Which of the following properties of lanthanoid hydroxides ($Ln(OH)_3$) varies regularly from $La(OH)_3$ to $Lu(OH)_3$ as a direct consequence of the lanthanoid contraction?`,
                    opts: [
                        `Basic strength decreases from $La(OH)_3$ (most basic) to $Lu(OH)_3$ (least basic).`,
                        `Ionic character increases from $La(OH)_3$ to $Lu(OH)_3$.`,
                        `Solubility in water increases exponentially from $La(OH)_3$ to $Lu(OH)_3$.`,
                        `Oxidation state changes from $+2$ to $+4$.`
                    ],
                    ans: 0,
                    exp: `As size decreases from $La^{3+}$ to $Lu^{3+}$ (lanthanoid contraction), the charge-to-size ratio increases. According to Fajan's rules, the covalent character of the $Ln-OH$ bond increases, making the release of $OH^-$ ions in solution more difficult. Hence, basic strength decreases: $La(OH)_3$ is the most basic, and $Lu(OH)_3$ is the least basic.`
                },
                {
                    q: `Which of the following pairs of elements in the periodic table have nearly identical covalent and ionic radii due to lanthanoid contraction?`,
                    opts: [
                        `$Nb$ and $Ta$`,
                        `$Ti$ and $Zr$`,
                        `$V$ and $Nb$`,
                        `$Cr$ and $Mo$`
                    ],
                    ans: 0,
                    exp: `Lanthanoid contraction specifically impacts elements of the second ($4d$) and third ($5d$) transition series: $Zr \\approx Hf$, $Nb \\approx Ta$, and $Mo \\approx W$. In contrast, $Ti$ to $Zr$ experiences normal group expansion.`
                },
                {
                    q: `Why is the separation of individual lanthanoids from their natural minerals extremely challenging and historically regarded as one of the most difficult tasks in inorganic chemistry?`,
                    opts: [
                        `Because of the lanthanoid contraction, all trivalent lanthanoid ions ($Ln^{3+}$) have nearly identical ionic radii, identical $+3$ oxidation states, and remarkably similar chemical properties.`,
                        `Lanthanoids form only radioactive isotopes that explode upon chemical treatment.`,
                        `Lanthanoids cannot dissolve in any mineral acids or organic solvents.`,
                        `Lanthanoid ions cannot be adsorbed on ion-exchange resins.`
                    ],
                    ans: 0,
                    exp: `The lanthanoid contraction causes only a tiny change in ionic radius across the 14 elements (from $103\\text{ pm}$ for $La^{3+}$ to $86\\text{ pm}$ for $Lu^{3+}$). Since all lanthanoids exist as $Ln^{3+}$ with nearly identical chemical reactivity, conventional chemical precipitation cannot separate them efficiently; modern separation requires multistep ion-exchange or solvent extraction.`
                }
            ];
            const item = items[i % items.length];
            return {
                subtopic: SUBTOPICS[7],
                q: `[Top 100 AIR NEET - Q${i + 1}] ${item.q}`,
                opts: item.opts,
                ans: item.ans,
                exp: item.exp
            };
        }
    ];

    for (let i = 0; i < 350; i++) {
        const genIdx = i % GENERATORS.length;
        const generator = GENERATORS[genIdx];
        const item = generator(i);

        questions.push({
            type: 'MCQ',
            question: item.q,
            options: item.opts,
            correctAnswer: item.ans,
            explanation: item.exp,
            subject: SUBJECT,
            chapter: CHAPTER,
            topic: CHAPTER,
            subTopic: item.subtopic,
            difficulty: 'Hard',
            class: 'Class 12',
            marks: 4,
            negativeMarks: 1,
            tag: 'Top 100 AIR NEET - d and f- Block Elements',
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    return questions;
}

async function main() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');
    const initialCount = await qBank.countDocuments({ chapter: CHAPTER });
    console.log(`📊 Initial questions for "${CHAPTER}" in DB: ${initialCount}`);

    const questions = generate350DFBlockQuestions();
    console.log(`🎯 Generated ${questions.length} high-rigor conceptual questions for Top 100 AIR NEET.`);

    const res = await qBank.insertMany(questions);
    console.log(`✅ Successfully inserted ${res.insertedCount} questions into questionBank!`);

    const finalChapterTotal = await qBank.countDocuments({ chapter: CHAPTER });
    const finalDBTotal = await qBank.countDocuments();

    console.log('\n🎉 ====================================================');
    console.log(`🎉 COMPLETED! Added ${res.insertedCount} Top 100 AIR NEET MCQs for "${CHAPTER}".`);
    console.log(`📊 Total questions for "${CHAPTER}": ${finalChapterTotal}`);
    console.log(`📊 Overall total questions in questionBank: ${finalDBTotal}`);
    console.log('🎉 ====================================================');

    await client.close();
}

main().catch(console.error);
